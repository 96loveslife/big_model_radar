#!/usr/bin/env python3
# -*- coding: utf-8 -*-

"""
generate_report.py

Generate a horizontal comparative analysis report for AI CLI tools
based on daily GitHub activity (issues, PRs, releases).

The script uses only the Python standard library and the public
GitHub REST API v3.  It accepts a date argument in YYYY-MM-DD format
and outputs a Markdown report to stdout (or to a file if
`--output` is supplied).

Author: AIGON-X DevOps Team
"""

from __future__ import annotations

import argparse
import datetime
import json
import logging
import os
import sys
import urllib.error
import urllib.parse
import urllib.request
from concurrent.futures import ThreadPoolExecutor, as_completed
from dataclasses import dataclass
from pathlib import Path
from typing import Any, Dict, Iterable, List, Optional, Tuple

# --------------------------------------------------------------------------- #
# Configuration
# --------------------------------------------------------------------------- #

# Mapping of tool names to their GitHub repository identifiers
TOOLS: Dict[str, str] = {
    "Claude Code": "anthropics/claude-code",
    "OpenAI Codex": "openai/codex",
    "Gemini CLI": "google-gemini/gemini-cli",
    "GitHub Copilot CLI": "github/copilot-cli",
    "Kimi Code CLI": "MoonshotAI/kimi-cli",
    "OpenCode": "anomalyco/opencode",
    "jcode": "1jehuang/jcode",
    "pi": "earendil-works/pi",
    "Claude Code Skills": "anthropics/skills",
}

# Base URL for the GitHub API
GITHUB_API_BASE = "https://api.github.com"

# Default number of worker threads for concurrent requests
DEFAULT_WORKERS = 8

# --------------------------------------------------------------------------- #
# Logging setup
# --------------------------------------------------------------------------- #

logger = logging.getLogger(__name__)
logging.basicConfig(
    level=logging.INFO,
    format="%(asctime)s [%(levelname)s] %(message)s",
    datefmt="%Y-%m-%d %H:%M:%S",
)

# --------------------------------------------------------------------------- #
# Data structures
# --------------------------------------------------------------------------- #

@dataclass(frozen=True)
class ToolStats:
    """Container for activity statistics of a single tool."""
    name: str
    repo: str
    issues: int
    prs: int
    releases: int

# --------------------------------------------------------------------------- #
# Utility functions
# --------------------------------------------------------------------------- #

def get_token() -> str:
    """
    Retrieve the GitHub personal access token from the environment.

    Returns:
        The token string.

    Raises:
        RuntimeError: If the token is not set.
    """
    token = os.getenv("GITHUB_TOKEN")
    if not token:
        raise RuntimeError(
            "GitHub token not found. Set the GITHUB_TOKEN environment variable."
        )
    return token

def validate_date(date_str: str) -> datetime.date:
    """
    Validate that the supplied string is a valid date in YYYY-MM-DD format.

    Args:
        date_str: Date string.

    Returns:
        datetime.date object.

    Raises:
        argparse.ArgumentTypeError: If the date is invalid.
    """
    try:
        return datetime.datetime.strptime(date_str, "%Y-%m-%d").date()
    except ValueError as exc:
        raise argparse.ArgumentTypeError(
            f"Invalid date '{date_str}'. Expected YYYY-MM-DD."
        ) from exc

def build_request(url: str, token: str) -> urllib.request.Request:
    """
    Construct a urllib.request.Request with appropriate headers.

    Args:
        url: The full URL to request.
        token: GitHub personal access token.

    Returns:
        urllib.request.Request instance.
    """
    headers = {
        "Accept": "application/vnd.github.v3+json",
        "User-Agent": "AIGON-X-Report-Generator",
        "Authorization": f"token {token}",
    }
    return urllib.request.Request(url, headers=headers)

def fetch_json(url: str, token: str) -> Dict[str, Any]:
    """
    Perform an HTTP GET request and parse the JSON response.

    Args:
        url: The full URL to request.
        token: GitHub personal access token.

    Returns:
        Parsed JSON as a dictionary.

    Raises:
        RuntimeError: If the request fails or JSON cannot be decoded.
    """
    request = build_request(url, token)
    try:
        with urllib.request.urlopen(request) as resp:
            if resp.status != 200:
                raise RuntimeError(f"HTTP {resp.status} for {url}")
            data = resp.read()
            return json.loads(data.decode("utf-8"))
    except urllib.error.HTTPError as exc:
        raise RuntimeError(f"HTTP error {exc.code} for {url}") from exc
    except urllib.error.URLError as exc:
        raise RuntimeError(f"URL error for {url}") from exc
    except json.JSONDecodeError as exc:
        raise RuntimeError(f"JSON decode error for {url}") from exc

def parse_link_header(link_header: str) -> Dict[str, str]:
    """
    Parse the HTTP Link header into a dictionary of rel -> URL.

    Args:
        link_header: The raw Link header string.

    Returns:
        Dictionary mapping relation names to URLs.
    """
    links: Dict[str, str] = {}
    for part in link_header.split(","):
        section = part.strip().split(";")
        if len(section) < 2:
            continue
        url_part = section[0].strip()
        rel_part = section[1].strip()
        if url_part.startswith("<") and url_part.endswith(">"):
            url = url_part[1:-1]
            if rel_part.startswith('rel="') and rel_part.endswith('"'):
                rel = rel_part[5:-1]
                links[rel] = url
    return links

def fetch_search_count(
    repo: str, date: str, issue_type: str, token: str
) -> int:
    """
    Fetch the total count of issues or PRs created on a specific date.

    Uses the GitHub Search API which returns a total_count field.

    Args:
        repo: Repository identifier (e.g., "owner/repo").
        date: Date string in YYYY-MM-DD format.
        issue_type: "issue" or "pr".
        token: GitHub personal access token.

    Returns:
        Total number of matching items.
    """
    query = urllib.parse.quote_plus(
        f"repo:{repo}+created:{date}+type:{issue_type}"
    )
    url = f"{GITHUB_API_BASE}/search/issues?q={query}&per_page=100"
    logger.debug("Fetching %s count for %s", issue_type, repo)
    try:
        data = fetch_json(url, token)
        return int(data.get("total_count", 0))
    except RuntimeError as exc:
        logger.warning("Failed to fetch %s count for %s: %s", issue_type, repo, exc)
        return 0

def fetch_release_count(repo: str, date: str, token: str) -> int:
    """
    Count releases created on a specific date.

    Handles pagination via the Link header.

    Args:
        repo: Repository identifier (e.g., "owner/repo").
        date: Date string in YYYY-MM-DD format.
        token: GitHub personal access token.

    Returns:
        Number of releases created on the given date.
    """
    url = f"{GITHUB_API_BASE}/repos/{repo}/releases?per_page=100"
    logger.debug("Fetching releases for %s", repo)
    count = 0
    while url:
        request = build_request(url, token)
        try:
            with urllib.request.urlopen(request) as resp:
                if resp.status != 200:
                    raise RuntimeError(f"HTTP {resp.status} for {url}")
                data = json.loads(resp.read().decode("utf-8"))
                for release in data:
                    created_at = release.get("created_at", "")
                    if created_at.startswith(date):
                        count += 1
                link_header = resp.headers.get("Link", "")
                links = parse_link_header(link_header)
                url = links.get("next")
        except urllib.error.HTTPError as exc:
            logger.warning("HTTP error %s for %s", exc.code, url)
            break
        except urllib.error.URLError as exc:
            logger.warning("URL error for %s: %s", url, exc)
            break
        except json.JSONDecodeError as exc:
            logger.warning("JSON decode error for %s: %s", url, exc)
            break
    return count

def fetch_tool_stats(
    tool_name: str, repo: str, date: str, token: str
) -> ToolStats:
    """
    Fetch activity statistics for a single tool.

    Args:
        tool_name: Human‑readable name of the tool.
        repo: Repository identifier.
        date: Date string in YYYY-MM-DD format.
        token: GitHub personal access token.

    Returns:
        ToolStats instance.
    """
    issues = fetch_search_count(repo, date, "issue", token)
    prs = fetch_search_count(repo, date, "pr", token)
    releases = fetch_release_count(repo, date, token)
    return ToolStats(name=tool_name, repo=repo, issues=issues, prs=prs, releases=releases)

def generate_markdown(stats_list: List[ToolStats], date: str) -> str:
    """
    Generate a Markdown table summarizing the statistics.

    Args:
        stats_list: List of ToolStats.
        date: Date string.

    Returns:
        Markdown string.
    """
    header = (
        f"# AI CLI Tools Daily Activity Report – {date}\n\n"
        "| Tool | Issues | PRs | Releases |\n"
        "|------|--------|-----|----------|\n"
    )
    rows = []
    for stats in sorted(stats_list, key=lambda s: s.name):
        rows.append(
            f"| {stats.name} | {stats.issues} | {stats.prs} | {stats.releases} |"
        )
    return header + "\n".join(rows) + "\n"

def write_output(content: str, output_path: Optional[Path]) -> None:
    """
    Write the report to stdout or to a file.

    Args:
        content: Markdown content.
        output_path: Path to write the file, or None for stdout.
    """
    if output_path:
        try:
            output_path.parent.mkdir(parents=True, exist_ok=True)
            with output_path.open("w", encoding="utf-8") as f:
                f.write(content)
            logger.info("Report written to %s", output_path)
        except OSError as exc:
            logger.error("Failed to write report to %s: %s", output_path, exc)
            sys.exit(1)
    else:
        sys.stdout.write(content)

def parse_args() -> argparse.Namespace:
    """
    Parse command line arguments.

    Returns:
        argparse.Namespace with parsed arguments.
    """
    parser = argparse.ArgumentParser(
        description="Generate AI CLI tools daily activity report."
    )
    parser.add_argument(
        "date",
        type=validate_date,
        help="Date for the report in YYYY-MM-DD format.",
    )
    parser.add_argument(
        "-o",
        "--output",
        type=Path,
        help="Path to write the Markdown report. If omitted, prints to stdout.",
    )
    parser.add_argument(
        "-w",
        "--workers",
        type=int,
        default=DEFAULT_WORKERS,
        help=f"Number of concurrent workers (default: {DEFAULT_WORKERS}).",
    )
    return parser.parse_args()

def main() -> None:
    """
    Main entry point.
    """
    args = parse_args()
    token = get_token()
    date_str = args.date.strftime("%Y-%m-%d")

    logger.info("Fetching statistics for %s", date_str)

    stats_list: List[ToolStats] = []

    with ThreadPoolExecutor(max_workers=args.workers) as executor:
        future_to_tool: Dict[Future, Tuple[str, str]] = {}
        for name, repo in TOOLS.items():
            future = executor.submit(fetch_tool_stats, name, repo, date_str, token)
            future_to_tool[future] = (name, repo)

        for future in as_completed(future_to_tool):
            name, repo = future_to_tool[future]
            try:
                stats = future.result()
                stats_list.append(stats)
                logger.debug("Fetched stats for %s", name)
            except Exception as exc:
                logger.error("Error fetching stats for %s: %s", name, exc)
                stats_list.append(
                    ToolStats(name=name, repo=repo, issues=0, prs=0, releases=0)
                )

    report = generate_markdown(stats_list, date_str)
    write_output(report, args.output)

if __name__ == "__main__":
    main()
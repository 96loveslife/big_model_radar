#!/usr/bin/env python3
# -*- coding: utf-8 -*-

"""
AIGON-X CLI Tools Daily Dynamics Report Generator
===================================================

This script reads a list of GitHub repositories from ``tools.json`` and
generates a Markdown report summarising the number of issues, pull
requests and releases for each tool.  The report is written to
``ai_cli_report.md`` in the same directory as the script.

The script is fully typed, logs its progress, validates its environment
and handles GitHub API rate‑limiting gracefully.  It uses only the
Python standard library.

Author: AIGON-X Team
Date: 2026-10-15
"""

from __future__ import annotations

import json
import logging
import os
import sys
import time
from concurrent.futures import ThreadPoolExecutor, as_completed
from dataclasses import dataclass
from pathlib import Path
from typing import Dict, Iterable, List, Optional

# --------------------------------------------------------------------------- #
# Configuration
# --------------------------------------------------------------------------- #

# Maximum number of concurrent HTTP requests
MAX_WORKERS: int = 8

# GitHub API base URL
GITHUB_API_URL: str = "https://api.github.com"

# Path to the tools configuration file
TOOLS_FILE: Path = Path(__file__).parent / "tools.json"

# Output report file
REPORT_FILE: Path = Path(__file__).parent / "ai_cli_report.md"

# Log file
LOG_FILE: Path = Path(__file__).parent / "generate_report.log"

# --------------------------------------------------------------------------- #
# Logging setup
# --------------------------------------------------------------------------- #

logging.basicConfig(
    filename=LOG_FILE,
    level=logging.INFO,
    format="%(asctime)s [%(levelname)s] %(message)s",
    datefmt="%Y-%m-%d %H:%M:%S",
)
logger = logging.getLogger(__name__)

# --------------------------------------------------------------------------- #
# Data structures
# --------------------------------------------------------------------------- #

@dataclass(frozen=True)
class Tool:
    """Represents a GitHub repository to analyze."""
    name: str
    owner: str
    repo: str

    @property
    def full_name(self) -> str:
        """Return the full GitHub repository name ``owner/repo``."""
        return f"{self.owner}/{self.repo}"


@dataclass(frozen=True)
class ToolStats:
    """Aggregated statistics for a single tool."""
    issues: int
    prs: int
    releases: int


# --------------------------------------------------------------------------- #
# Helper functions
# --------------------------------------------------------------------------- #

def load_tools(file_path: Path) -> List[Tool]:
    """
    Load the list of tools from a JSON file.

    The JSON file must contain a list of objects with keys ``name``,
    ``owner`` and ``repo``.  Missing keys are logged and the entry is
    skipped.

    Args:
        file_path: Path to the JSON file.

    Returns:
        A list of :class:`Tool` instances.

    Raises:
        FileNotFoundError: If the file does not exist.
        json.JSONDecodeError: If the file is not valid JSON.
    """
    if not file_path.is_file():
        logger.error("Tools file not found: %s", file_path)
        raise FileNotFoundError(f"Tools file not found: {file_path}")

    try:
        with file_path.open("r", encoding="utf-8") as f:
            data = json.load(f)
    except json.JSONDecodeError as exc:
        logger.exception("Invalid JSON in tools file: %s", exc)
        raise

    tools: List[Tool] = []
    for entry in data:
        try:
            tool = Tool(
                name=entry["name"],
                owner=entry["owner"],
                repo=entry["repo"],
            )
            tools.append(tool)
        except KeyError as exc:
            logger.warning("Missing key in tool entry %s: %s", entry, exc)
    return tools


def _build_headers(token: str) -> Dict[str, str]:
    """Return the HTTP headers for a GitHub API request."""
    return {
        "Accept": "application/vnd.github.v3+json",
        "Authorization": f"token {token}",
        "User-Agent": "AIGON-X-Report-Generator",
    }


def _handle_rate_limit(headers: Dict[str, str]) -> None:
    """
    If the GitHub API rate limit has been reached, sleep until the reset
    time.  The function does nothing if the limit has not been reached.
    """
    remaining = int(headers.get("X-RateLimit-Remaining", "1"))
    if remaining == 0:
        reset_ts = int(headers.get("X-RateLimit-Reset", str(time.time() + 60)))
        sleep_seconds = max(reset_ts - int(time.time()), 0) + 5  # buffer
        logger.warning(
            "Rate limit reached. Sleeping for %d seconds until reset.",
            sleep_seconds,
        )
        time.sleep(sleep_seconds)


def github_request(
    endpoint: str,
    token: str,
    *,
    params: Optional[Dict[str, str]] = None,
) -> Dict:
    """
    Perform a GET request to the GitHub API with authentication.

    Args:
        endpoint: API endpoint (e.g. ``/repos/...``).
        token: Personal access token.
        params: Optional query parameters.

    Returns:
        Parsed JSON response.

    Raises:
        RuntimeError: If the HTTP status is not 200.
    """
    import urllib.request
    import urllib.parse

    url = f"{GITHUB_API_URL}{endpoint}"
    if params:
        query = urllib.parse.urlencode(params)
        url = f"{url}?{query}"

    req = urllib.request.Request(url, headers=_build_headers(token), method="GET")

    try:
        with urllib.request.urlopen(req, timeout=30) as resp:
            _handle_rate_limit(resp.headers)
            if resp.status != 200:
                body = resp.read().decode("utf-8", errors="replace")
                logger.error(
                    "GitHub API error %s for %s: %s",
                    resp.status,
                    endpoint,
                    body,
                )
                raise RuntimeError(f"GitHub API error {resp.status}")
            data = json.loads(resp.read().decode("utf-8"))
            return data
    except urllib.error.HTTPError as exc:
        logger.exception("HTTP error for %s: %s", endpoint, exc)
        raise
    except urllib.error.URLError as exc:
        logger.exception("URL error for %s: %s", endpoint, exc)
        raise
    except json.JSONDecodeError as exc:
        logger.exception("JSON decode error for %s: %s", endpoint, exc)
        raise


def get_total_count(
    endpoint: str,
    token: str,
    *,
    params: Optional[Dict[str, str]] = None,
) -> int:
    """
    Retrieve the total count of items from a GitHub API endpoint that
    supports pagination via the Link header.

    The function requests a single item per page and parses the ``last``
    link to determine the total number of pages.

    Args:
        endpoint: API endpoint.
        token: Personal access token.
        params: Optional query parameters.

    Returns:
        Total count of items.

    Raises:
        RuntimeError: If the API request fails.
    """
    import urllib.request
    import urllib.parse

    # Ensure per_page=1 for minimal payload
    if params is None:
        params = {}
    params.setdefault("per_page", "1")
    params.setdefault("page", "1")

    url = f"{GITHUB_API_URL}{endpoint}"
    query = urllib.parse.urlencode(params)
    url = f"{url}?{query}"
    req = urllib.request.Request(url, headers=_build_headers(token), method="GET")

    try:
        with urllib.request.urlopen(req, timeout=30) as resp:
            _handle_rate_limit(resp.headers)
            if resp.status != 200:
                body = resp.read().decode("utf-8", errors="replace")
                logger.error(
                    "GitHub API error %s for %s: %s",
                    resp.status,
                    endpoint,
                    body,
                )
                raise RuntimeError(f"GitHub API error {resp.status}")

            link_header = resp.headers.get("Link")
            if link_header:
                # Example: <https://api.github.com/.../issues?page=2>; rel="next",
                #          <https://api.github.com/.../issues?page=5>; rel="last"
                for part in link_header.split(","):
                    if 'rel="last"' in part:
                        url_part = part.split(";")[0].strip("<>")
                        parsed = urllib.parse.urlparse(url_part)
                        qs = urllib.parse.parse_qs(parsed.query)
                        if "page" in qs:
                            return int(qs["page"][0])
            # Fallback: count items in the returned list
            data = json.loads(resp.read().decode("utf-8"))
            return len(data)
    except Exception as exc:
        logger.exception("Failed to get total count for %s: %s", endpoint, exc)
        raise


def fetch_tool_stats(tool: Tool, token: str) -> ToolStats:
    """
    Fetch issues, PRs, and releases counts for a single tool.

    Args:
        tool: Tool instance.
        token: Personal access token.

    Returns:
        ToolStats instance.

    Raises:
        RuntimeError: If any API request fails.
    """
    logger.info("Fetching stats for %s", tool.full_name)

    try:
        issues_count = get_total_count(
            f"/repos/{tool.full_name}/issues",
            token,
            params={"state": "all"},
        )
    except Exception:
        issues_count = 0
        logger.warning("Failed to fetch issues for %s", tool.full_name)

    try:
        prs_count = get_total_count(
            f"/repos/{tool.full_name}/pulls",
            token,
            params={"state": "all"},
        )
    except Exception:
        prs_count = 0
        logger.warning("Failed to fetch PRs for %s", tool.full_name)

    try:
        releases_count = get_total_count(
            f"/repos/{tool.full_name}/releases",
            token,
            params={},
        )
    except Exception:
        releases_count = 0
        logger.warning("Failed to fetch releases for %s", tool.full_name)

    logger.info(
        "Stats for %s: issues=%d, prs=%d, releases=%d",
        tool.full_name,
        issues_count,
        prs_count,
        releases_count,
    )
    return ToolStats(issues=issues_count, prs=prs_count, releases=releases_count)


def generate_markdown_report(
    tools: List[Tool],
    stats: Dict[str, ToolStats],
) -> str:
    """
    Generate a Markdown table summarising the statistics.

    Args:
        tools: List of tools.
        stats: Mapping from full repo name to ToolStats.

    Returns:
        Markdown string.
    """
    header = (
        "| Tool | Issues | PRs | Releases |\n"
        "|------|--------|-----|----------|\n"
    )
    rows: List[str] = []
    for tool in tools:
        s = stats.get(tool.full_name)
        if s is None:
            logger.debug("No stats for %s, skipping", tool.full_name)
            continue
        rows.append(
            f"| {tool.name} | {s.issues} | {s.prs} | {s.releases} |\n"
        )
    return header + "".join(rows)


def write_report(report: str, path: Path) -> None:
    """
    Write the Markdown report to disk.

    Args:
        report: Markdown content.
        path: Destination file path.
    """
    try:
        with path.open("w", encoding="utf-8") as f:
            f.write(report)
        logger.info("Report written to %s", path)
    except OSError as exc:
        logger.exception("Failed to write report to %s: %s", path, exc)
        raise


def validate_environment() -> str:
    """
    Validate that required environment variables are set.

    Returns:
        GitHub personal access token.

    Raises:
        EnvironmentError: If the token is missing.
    """
    token = os.getenv("GITHUB_TOKEN")
    if not token:
        logger.error("Environment variable GITHUB_TOKEN is not set.")
        raise EnvironmentError("GITHUB_TOKEN is required")
    return token


# --------------------------------------------------------------------------- #
# Main execution
# --------------------------------------------------------------------------- #

def main() -> None:
    """Entry point for the report generator."""
    start_time = time.time()

    try:
        token = validate_environment()
    except EnvironmentError as exc:
        logger.critical("Environment validation failed: %s", exc)
        sys.exit(1)

    try:
        tools = load_tools(TOOLS_FILE)
    except Exception as exc:
        logger.critical("Failed to load tools: %s", exc)
        sys.exit(1)

    if not tools:
        logger.warning("No tools found in %s", TOOLS_FILE)
        sys.exit(0)

    stats: Dict[str, ToolStats] = {}

    with ThreadPoolExecutor(max_workers=MAX_WORKERS) as executor:
        future_to_tool = {
            executor.submit(fetch_tool_stats, tool, token): tool
            for tool in tools
        }
        for future in as_completed(future_to_tool):
            tool = future_to_tool[future]
            try:
                tool_stats = future.result()
                stats[tool.full_name] = tool_stats
            except Exception as exc:
                logger.error("Failed to fetch stats for %s: %s", tool.full_name, exc)

    report_md = generate_markdown_report(tools, stats)

    try:
        write_report(report_md, REPORT_FILE)
    except Exception as exc:
        logger.critical("Failed to write report: %s", exc)
        sys.exit(1)

    elapsed = time.time() - start_time
    logger.info("Report generation completed in %.2f seconds", elapsed)


if __name__ == "__main__":
    main()
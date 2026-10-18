#!/usr/bin/env python3
"""
compare_cli_tools.py

Generate a horizontal comparative analysis report for AI CLI tools
based on daily dynamics data.

The script reads a JSON file containing per‑tool statistics,
validates the input, and writes a Markdown report with
structured sections:
    1. Activity Levels
    2. Common Themes
    3. Differentiation
    4. Maturity & Trends

Author: AIGON-X Engineering
Date: 2026‑10‑15
"""

from __future__ import annotations

import argparse
import json
import logging
import sys
from dataclasses import dataclass, field
from pathlib import Path
from typing import Any, Dict, Iterable, List, Optional, Set, Tuple

# --------------------------------------------------------------------------- #
# Logging configuration
# --------------------------------------------------------------------------- #
logging.basicConfig(
    level=logging.INFO,
    format="%(asctime)s [%(levelname)s] %(name)s: %(message)s",
    datefmt="%Y-%m-%d %H:%M:%S",
)
logger = logging.getLogger(__name__)

# --------------------------------------------------------------------------- #
# Constants
# --------------------------------------------------------------------------- #
REPORT_DATE = "2026-10-15"
DEFAULT_OUTPUT = Path("ai_cli_report.md")
MAX_TOOL_NAME_LENGTH = 30
VALID_KEYS = {"name", "issues", "prs", "releases", "themes"}


# --------------------------------------------------------------------------- #
# Custom exceptions
# --------------------------------------------------------------------------- #
class ReportError(Exception):
    """Base exception for report generation errors."""

    pass


class InputValidationError(ReportError):
    """Raised when input data fails validation."""

    pass


class OutputWriteError(ReportError):
    """Raised when output file cannot be written."""

    pass


# --------------------------------------------------------------------------- #
# Data model
# --------------------------------------------------------------------------- #
@dataclass(frozen=True)
class ToolStats:
    """Statistics for a single AI CLI tool.

    Attributes:
        name: Tool name (must be non-empty, max 30 chars)
        issues: Number of issues (must be >= 0)
        prs: Number of pull requests (must be >= 0)
        releases: Number of releases (must be >= 0)
        themes: List of themes (must be non-empty strings)
    """

    name: str
    issues: int = 0
    prs: int = 0
    releases: int = 0
    themes: Tuple[str, ...] = ()

    def __post_init__(self) -> None:
        """Validate dataclass fields."""
        if not self.name or not self.name.strip():
            raise InputValidationError("Tool name cannot be empty")
        if len(self.name) > MAX_TOOL_NAME_LENGTH:
            raise InputValidationError(
                f"Tool name exceeds {MAX_TOOL_NAME_LENGTH} chars: {self.name}"
            )
        if self.issues < 0:
            raise InputValidationError(f"Negative issues count for {self.name}")
        if self.prs < 0:
            raise InputValidationError(f"Negative PR count for {self.name}")
        if self.releases < 0:
            raise InputValidationError(f"Negative release count for {self.name}")
        for theme in self.themes:
            if not theme or not theme.strip():
                raise InputValidationError(f"Empty theme in tool {self.name}")

    @property
    def activity_level(self) -> int:
        """Total activity count (issues + PRs + releases)."""
        return self.issues + self.prs + self.releases


@dataclass(frozen=True)
class ReportData:
    """Container for all tool statistics.

    Attributes:
        tools: Tuple of validated ToolStats objects
    """

    tools: Tuple[ToolStats, ...] = ()

    @classmethod
    def from_json(cls, data: Dict[str, Any]) -> "ReportData":
        """Create ReportData from raw JSON dictionary.

        Args:
            data: Raw JSON dictionary containing tool data

        Returns:
            ReportData instance with validated tools

        Raises:
            InputValidationError: If data structure is invalid
        """
        if "tools" not in data:
            raise InputValidationError("Missing 'tools' key in JSON data")

        tools_data = data["tools"]
        if not isinstance(tools_data, list):
            raise InputValidationError("'tools' must be a list")

        tools: List[ToolStats] = []
        for idx, entry in enumerate(tools_data):
            if not isinstance(entry, dict):
                logger.warning("Entry %d is not a dict, skipping", idx)
                continue

            # Validate required keys
            if "name" not in entry:
                logger.warning("Entry %d missing 'name', skipping", idx)
                continue

            # Check for unknown keys
            unknown_keys = set(entry.keys()) - VALID_KEYS
            if unknown_keys:
                logger.warning(
                    "Entry %d has unknown keys: %s", idx, ", ".join(sorted(unknown_keys))
                )

            try:
                tool = ToolStats(
                    name=str(entry["name"]).strip(),
                    issues=int(entry.get("issues", 0)),
                    prs=int(entry.get("prs", 0)),
                    releases=int(entry.get("releases", 0)),
                    themes=tuple(str(t).strip() for t in entry.get("themes", [])),
                )
                tools.append(tool)
            except (ValueError, TypeError) as exc:
                logger.warning("Entry %d invalid: %s", idx, exc)
                continue

        return cls(tools=tuple(tools))

    def common_themes(self) -> List[str]:
        """Return a sorted list of unique themes across all tools.

        Returns:
            Sorted list of unique theme strings
        """
        theme_set: Set[str] = set()
        for tool in self.tools:
            theme_set.update(tool.themes)
        return sorted(theme_set)

    def differentiation_matrix(self) -> List[List[str]]:
        """Return a matrix of tool names vs. metrics for comparison.

        Returns:
            List of rows, where first row is headers
        """
        headers = ["Tool", "Issues", "PRs", "Releases", "Activity"]
        rows = [headers]
        for tool in sorted(self.tools, key=lambda t: t.activity_level, reverse=True):
            rows.append(
                [
                    tool.name,
                    str(tool.issues),
                    str(tool.prs),
                    str(tool.releases),
                    str(tool.activity_level),
                ]
            )
        return rows

    def maturity_analysis(self) -> List[str]:
        """Generate maturity analysis lines.

        Returns:
            List of markdown lines for maturity section
        """
        lines: List[str] = []
        lines.append(
            "The maturity of each tool can be inferred from the number of releases "
            "and the stability of issue/PR activity. Tools with frequent releases "
            "and low issue counts are considered mature."
        )
        lines.append("")

        if not self.tools:
            return lines

        # Sort by activity level for analysis
        sorted_tools = sorted(
            self.tools, key=lambda t: t.activity_level, reverse=True
        )

        lines.append("**Activity Ranking:**")
        lines.append("")
        for i, tool in enumerate(sorted_tools, 1):
            lines.append(f"{i}. **{tool.name}** — {tool.activity_level} total activities")
        lines.append("")

        # Identify top performers
        top_tools = sorted_tools[:3] if len(sorted_tools) >= 3 else sorted_tools
        if top_tools:
            lines.append("**Top Active Tools:**")
            lines.append("")
            for tool in top_tools:
                lines.append(
                    f"- {tool.name}: {tool.issues} issues, {tool.prs} PRs, "
                    f"{tool.releases} releases"
                )
            lines.append("")

        return lines


# --------------------------------------------------------------------------- #
# Markdown generation
# --------------------------------------------------------------------------- #
def generate_markdown(report: ReportData) -> str:
    """Return a Markdown string for the comparative analysis.

    Args:
        report: Validated report data

    Returns:
        Markdown formatted string
    """
    lines: List[str] = []

    # Title
    lines.append("# AI CLI Tools Daily Dynamics Report")
    lines.append("")
    lines.append(f"> **Generated on**: {REPORT_DATE}")
    lines.append("")

    # 1. Activity Levels
    lines.append("## 1. Activity Levels")
    lines.append("")
    if report.tools:
        lines.append("| Tool | Issues | PRs | Releases | Activity |")
        lines.append("|------|--------|-----|----------|----------|")
        for tool in sorted(report.tools, key=lambda t: t.activity_level, reverse=True):
            lines.append(
                f"| {tool.name} | {tool.issues} | {tool.prs} | "
                f"{tool.releases} | {tool.activity_level} |"
            )
    else:
        lines.append("_No tool data available._")
    lines.append("")

    # 2. Common Themes
    lines.append("## 2. Common Themes")
    lines.append("")
    common_themes = report.common_themes()
    if common_themes:
        for theme in common_themes:
            lines.append(f"- {theme}")
    else:
        lines.append("_No common themes identified._")
    lines.append("")

    # 3. Differentiation
    lines.append("## 3. Differentiation")
    lines.append("")
    if report.tools:
        matrix = report.differentiation_matrix()
        for row in matrix:
            lines.append("| " + " | ".join(row) + " |")
    else:
        lines.append("_No differentiation data available._")
    lines.append("")

    # 4. Maturity & Trends
    lines.append("## 4. Maturity & Trends")
    lines.append("")
    lines.extend(report.maturity_analysis())

    return "\n".join(lines)


# --------------------------------------------------------------------------- #
# CLI handling
# --------------------------------------------------------------------------- #
def parse_args() -> argparse.Namespace:
    """Parse command‑line arguments.

    Returns:
        Parsed arguments namespace
    """
    parser = argparse.ArgumentParser(
        description="Generate comparative analysis report for AI CLI tools.",
        formatter_class=argparse.ArgumentDefaultsHelpFormatter,
    )
    parser.add_argument(
        "input",
        type=Path,
        help="Path to the JSON file containing tool statistics.",
    )
    parser.add_argument(
        "-o",
        "--output",
        type=Path,
        default=DEFAULT_OUTPUT,
        help="Path to write the generated Markdown report.",
    )
    parser.add_argument(
        "-v",
        "--verbose",
        action="store_true",
        help="Enable debug logging.",
    )
    return parser.parse_args()


def read_json(path: Path) -> Dict[str, Any]:
    """Read and parse JSON from the given file path.

    Args:
        path: Path to JSON file

    Returns:
        Parsed JSON dictionary

    Raises:
        InputValidationError: If file doesn't exist or is invalid
    """
    if not path.is_file():
        raise InputValidationError(f"Input file does not exist: {path}")

    try:
        with path.open("r", encoding="utf-8") as fh:
            data = json.load(fh)
    except json.JSONDecodeError as exc:
        raise InputValidationError(f"Failed to decode JSON: {exc}") from exc
    except OSError as exc:
        raise InputValidationError(f"Failed to read file: {exc}") from exc

    if not isinstance(data, dict):
        raise InputValidationError(
            f"JSON root must be an object, got {type(data).__name__}"
        )

    return data


def write_markdown(path: Path, content: str) -> None:
    """Write Markdown content to the specified file.

    Args:
        path: Output file path
        content: Markdown content to write

    Raises:
        OutputWriteError: If file cannot be written
    """
    try:
        # Ensure parent directory exists
        path.parent.mkdir(parents=True, exist_ok=True)
        with path.open("w", encoding="utf-8") as fh:
            fh.write(content)
    except OSError as exc:
        raise OutputWriteError(f"Failed to write report: {exc}") from exc


def main() -> None:
    """Entry point with comprehensive error handling."""
    args = parse_args()

    # Configure logging based on verbosity
    if args.verbose:
        logging.getLogger().setLevel(logging.DEBUG)

    logger.debug("Starting report generation")
    logger.debug("Input file: %s", args.input)
    logger.debug("Output file: %s", args.output)

    # Read and validate input
    try:
        raw_data = read_json(args.input)
        logger.debug("Successfully read JSON data")
    except InputValidationError as exc:
        logger.error("Input validation failed: %s", exc)
        sys.exit(1)

    # Parse report data
    try:
        report_data = ReportData.from_json(raw_data)
        logger.debug("Parsed %d tools", len(report_data.tools))
    except InputValidationError as exc:
        logger.error("Data parsing failed: %s", exc)
        sys.exit(1)

    if not report_data.tools:
        logger.warning("No valid tool data found; report will be empty")

    # Generate markdown
    markdown = generate_markdown(report_data)
    logger.debug("Generated %d lines of markdown", len(markdown.splitlines()))

    # Write output
    try:
        write_markdown(args.output, markdown)
        logger.info("Report generated successfully: %s", args.output)
    except OutputWriteError as exc:
        logger.error("Failed to write report: %s", exc)
        sys.exit(1)

    # Summary
    logger.info(
        "Summary: %d tools analyzed, %d common themes identified",
        len(report_data.tools),
        len(report_data.common_themes()),
    )


if __name__ == "__main__":
    main()
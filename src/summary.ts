/**
 * 一次 digest 运行的指标快照：用于 commit body 与调试。
 * 落盘到 digests/<date>/summary.json。
 */

import fs from "node:fs";
import path from "node:path";
import { getLlmModel } from "./report.ts";

export interface IssueStat {
  title: string;
  url: string | null;
  fileName: string;
  label: string;
  lang: "zh" | "en";
  status: "published" | "skipped" | "failed";
  detail?: string;
}

export interface SourceStat {
  newItems?: number;
  totalDiscovered?: number;
  repos?: number;
  stories?: number;
  success?: boolean;
}

export interface DigestSummary {
  date: string;
  durationMs: number;
  model: string;
  languages: ("zh" | "en")[];
  issues: IssueStat[];
  sources: {
    anthropic?: SourceStat;
    openai?: SourceStat;
    trending?: SourceStat;
    hn?: SourceStat;
  };
  errors: string[];
  llmRetries: number;
  target: "github" | "local";
}

export function newSummary(
  date: string,
  startMs: number,
  languages: ("zh" | "en")[],
  target: "github" | "local",
): DigestSummary {
  return {
    date,
    durationMs: Date.now() - startMs,
    model: getLlmModel(),
    languages,
    issues: [],
    sources: {},
    errors: [],
    llmRetries: 0,
    target,
  };
}

export function saveSummary(baseDir: string, date: string, summary: DigestSummary): string {
  const filepath = path.join(baseDir, date, "summary.json");
  fs.mkdirSync(path.dirname(filepath), { recursive: true });
  fs.writeFileSync(filepath, JSON.stringify(summary, null, 2) + "\n", "utf-8");
  return filepath;
}

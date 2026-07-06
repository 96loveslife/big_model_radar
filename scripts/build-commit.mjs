#!/usr/bin/env node
/**
 * 从 summary.json 生成 commit body，输出到 stdout。
 * 用法: node scripts/build-commit.mjs digests/2026-07-05/summary.json
 */

import { readFileSync } from "node:fs";
import { resolve } from "node:path";

const argPath = process.argv[2];
if (!argPath) {
  console.error("usage: build-commit.mjs <path-to-summary.json>");
  process.exit(1);
}

const summary = JSON.parse(readFileSync(resolve(argPath), "utf-8"));

const lines = [];
lines.push(`digest: ${summary.date} daily digest`);
lines.push("");

// 按 status 区分
const published = summary.issues.filter((i) => i.status === "published");
const failed = summary.issues.filter((i) => i.status === "failed");
const skipped = summary.issues.filter((i) => i.status === "skipped");

for (const it of published) {
  lines.push(it.title);
  lines.push(`  ${it.url ?? "(no url)"}`);
  if (it.detail) lines.push(`  ${it.detail}`);
  lines.push("");
}

if (failed.length > 0) {
  lines.push("Failed:");
  for (const it of failed) {
    lines.push(`  ✗ ${it.title}`);
    if (it.detail) lines.push(`    ${it.detail}`);
  }
  lines.push("");
}

if (skipped.length > 0) {
  const names = skipped.map((s) => s.fileName).join(", ");
  lines.push(`Skipped: ${names}`);
  lines.push("");
}

// 源数据状态
const src = summary.sources ?? {};
const srcParts = [];
if (src.anthropic)
  srcParts.push(
    `anthropic: ${src.anthropic.newItems ?? 0} new / ${src.anthropic.totalDiscovered ?? 0} total`,
  );
if (src.openai)
  srcParts.push(`openai: ${src.openai.newItems ?? 0} new / ${src.openai.totalDiscovered ?? 0} total`);
if (src.trending)
  srcParts.push(`trending: ${src.trending.repos ?? 0} repos (success=${src.trending.success})`);
if (src.hn) srcParts.push(`hn: ${src.hn.stories ?? 0} stories (success=${src.hn.success})`);
if (srcParts.length > 0) {
  lines.push("Sources:");
  for (const p of srcParts) lines.push(`  ${p}`);
  lines.push("");
}

const secs = Math.round((summary.durationMs ?? 0) / 1000);
const m = Math.floor(secs / 60);
const s = secs % 60;
lines.push(
  `Stats: duration ${m}m${s}s | model ${summary.model} | target ${summary.target} | retries ${summary.llmRetries ?? 0} | errors ${(summary.errors ?? []).length}`,
);

if ((summary.errors ?? []).length > 0) {
  lines.push("");
  lines.push("Errors:");
  for (const e of summary.errors.slice(0, 5)) lines.push(`  - ${e}`);
}

process.stdout.write(lines.join("\n"));

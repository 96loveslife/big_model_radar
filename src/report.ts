/**
 * LLM invocation and file output helpers.
 * Supports OpenAI-compatible chat/completions endpoints.
 */

import fs from "node:fs";
import path from "node:path";
import { resolveLocalDir } from "./publisher.ts";

const DEFAULT_OPENAI_BASE_URL = "https://api.openai.com/v1";
const DEFAULT_MODEL = "gpt-4.1-mini";

// ---------------------------------------------------------------------------
// Concurrency limiter — prevents rate-limit (429) errors when many LLM calls
// are fired in parallel. At most LLM_CONCURRENCY requests are in-flight at
// any given time; the rest queue and run as slots free up.
// ---------------------------------------------------------------------------

const LLM_CONCURRENCY = 5;
let llmSlots = LLM_CONCURRENCY;
const llmQueue: Array<() => void> = [];

function acquireSlot(): Promise<void> {
  if (llmSlots > 0) {
    llmSlots--;
    return Promise.resolve();
  }
  return new Promise((resolve) => llmQueue.push(resolve));
}

function releaseSlot(): void {
  const next = llmQueue.shift();
  if (next) {
    next();
  } else {
    llmSlots++;
  }
}

// ---------------------------------------------------------------------------
// LLM
// ---------------------------------------------------------------------------

const MAX_RETRIES = 3;
const RETRY_BASE_MS = 5_000; // 5 s, 10 s, 20 s

function is429(err: unknown): boolean {
  return (err as { status?: number })?.status === 429 || String(err).includes("429");
}

function sleep(ms: number): Promise<void> {
  return new Promise((r) => setTimeout(r, ms));
}

/**
 * 思考型模型（如 MiniMax-M3）默认开启 thinking，思考文本可能混入 content
 * 返回，导致 issue 正文出现"思考过程"而非报告。报告生成场景默认关闭；
 * 可用环境变量 LLM_THINKING=adaptive|enabled|disabled 覆盖。
 */
function buildThinkingConfig(): Record<string, unknown> {
  const mode = process.env["LLM_THINKING"];
  if (mode) return { thinking: { type: mode } };
  if (/^minimax/i.test(getLlmModel())) return { thinking: { type: "disabled" } };
  return {};
}

function getLlmApiKey(): string {
  return process.env["OPENAI_API_KEY"] ?? process.env["ANTHROPIC_API_KEY"] ?? "";
}

export function getLlmBaseUrl(): string {
  return (
    process.env["OPENAI_BASE_URL"] ??
    process.env["ANTHROPIC_BASE_URL"] ??
    DEFAULT_OPENAI_BASE_URL
  ).replace(/\/$/, "");
}

export function getLlmModel(): string {
  return process.env["OPENAI_MODEL"] ?? process.env["ANTHROPIC_MODEL"] ?? DEFAULT_MODEL;
}

export function hasLlmCredentials(): boolean {
  return getLlmApiKey().length > 0;
}

function extractTextContent(content: unknown): string {
  if (typeof content === "string") return content.trim();
  if (Array.isArray(content)) {
    const text = content
      .map((part) => {
        if (typeof part === "string") return part;
        if (
          part &&
          typeof part === "object" &&
          "type" in part &&
          part.type === "text" &&
          "text" in part &&
          typeof part.text === "string"
        ) {
          return part.text;
        }
        return "";
      })
      .join("")
      .trim();
    if (text) return text;
  }
  throw new Error("Unexpected response type from LLM");
}

export async function callLlm(prompt: string, maxTokens = 4096): Promise<string> {
  // 截断重试只做一次，用独立标志而不是 attempt，避免与 429 重试计数互相干扰
  let truncationRetried = false;
  for (let attempt = 0; ; attempt++) {
    await acquireSlot();
    let released = false;
    try {
      const apiKey = getLlmApiKey();
      if (!apiKey) throw new Error("Missing required environment variable: OPENAI_API_KEY");

      const resp = await fetch(`${getLlmBaseUrl()}/chat/completions`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${apiKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          model: getLlmModel(),
          messages: [{ role: "user", content: prompt }],
          temperature: 0.2,
          max_tokens: maxTokens,
          ...buildThinkingConfig(),
        }),
      });
      if (!resp.ok) {
        throw new Error(`LLM API ${resp.status}: ${await resp.text()}`);
      }

      const data = (await resp.json()) as {
        choices?: Array<{
          finish_reason?: string;
          message?: {
            content?: unknown;
          };
        }>;
      };
      const choice = data.choices?.[0];
      // 输出被 max_tokens 截断（表现为报告尾部缺失）时翻倍预算重试一次
      if (choice?.finish_reason === "length") {
        if (truncationRetried) {
          // 重试后仍截断：抛错走降级路径，宁可显示"生成失败"也不发布断尾报告
          throw new Error(`LLM output still truncated at max_tokens=${maxTokens}`);
        }
        truncationRetried = true;
        console.warn("[llm] output truncated by max_tokens — retrying with 2x budget");
        maxTokens = maxTokens * 2;
        continue;
      }
      const content = choice?.message?.content;
      return extractTextContent(content);
    } catch (err) {
      if (attempt < MAX_RETRIES && is429(err)) {
        releaseSlot();
        released = true;
        const wait = RETRY_BASE_MS * 2 ** attempt;
        console.error(`[llm] 429 — retry ${attempt + 1}/${MAX_RETRIES} in ${wait / 1000}s...`);
        await sleep(wait);
        continue;
      }
      throw err;
    } finally {
      if (!released) releaseSlot();
    }
  }
}

// ---------------------------------------------------------------------------
// File output
// ---------------------------------------------------------------------------

export function saveFile(content: string, ...segments: string[]): string {
  // local 模式下走 DIGEST_LOCAL_DIR（默认 "digests"，与 github 模式产物结构一致，
  // 这样本地生成结果可直接 `git add digests/` 推送到 GitHub）
  const baseDir = process.env["DIGEST_TARGET"] === "local" ? resolveLocalDir() : "digests";
  const filepath = path.join(baseDir, ...segments);
  fs.mkdirSync(path.dirname(filepath), { recursive: true });
  fs.writeFileSync(filepath, content, "utf-8");
  return filepath;
}

export function autoGenFooter(lang: "zh" | "en" = "zh"): string {
  const digestRepo = process.env["DIGEST_REPO"] ?? "";
  if (!digestRepo) return "";
  return lang === "en"
    ? `\n\n---\n*This digest is auto-generated by [Big Model Radar](https://github.com/${digestRepo}).*`
    : `\n\n---\n*本日报由 [Big Model Radar](https://github.com/${digestRepo}) 自动生成。*`;
}

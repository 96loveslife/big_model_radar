/**
 * Web content fetching for AI company news/blog/research.
 *
 * Strategy:
 *   - Discover article URLs via sitemaps
 *   - New = URL never seen before (case-insensitive). A lastmod bump on an
 *     already-seen URL only refreshes stored state — sitemaps churn lastmod
 *     constantly (CMS re-crawls/edits; OpenAI changed 63% of URLs in 2 days),
 *     and treating that as "new" re-surfaced old articles every run.
 *   - Fetch content only for new URLs; on first run, cap at MAX_CONTENT_FETCH_FIRST_RUN per site
 *   - First run marks every discovered URL as seen (baseline). Incremental runs
 *     mark a new URL as seen only after it produced a report item — fetch
 *     failures and cap-deferred URLs stay unseen and retry next run, so no
 *     genuinely new article is ever dropped permanently.
 *
 * State is persisted in digests/web-state.json (committed to git by the Actions workflow).
 */

import fs from "node:fs";
import path from "node:path";

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

export interface WebPageItem {
  url: string;
  title: string;
  lastmod: string;
  content: string;
  site: "anthropic" | "openai";
  category: string;
}

interface SiteState {
  lastChecked: string;
  /** lowercased url → lastmod string (or "seen" if no lastmod available) */
  seenUrls: Record<string, string>;
}

export interface WebState {
  anthropic: SiteState;
  openai: SiteState;
}

export interface WebFetchResult {
  site: "anthropic" | "openai";
  siteName: string;
  isFirstRun: boolean;
  newItems: WebPageItem[];
  /** Total URLs discovered in sitemap (for context in the report) */
  totalDiscovered: number;
}

// ---------------------------------------------------------------------------
// Site config
// ---------------------------------------------------------------------------

interface SiteConfig {
  name: string;
  /** For single sitemaps: URL to fetch */
  sitemapUrl: string;
  /** For single sitemaps: only keep URLs starting with these path prefixes */
  prefixes?: string[];
  /** For sitemap indexes: named sub-sitemaps to fetch */
  subSitemapNames?: string[];
  /** URL template for sub-sitemaps; {name} is replaced with each sub-sitemap name */
  subSitemapTemplate?: string;
  /** Skip fetching article pages; derive title from URL slug instead. Use when the
   *  site blocks bot requests (e.g. Cloudflare WAF on datacenter IPs). */
  metadataOnly?: boolean;
}

const SITE_CONFIGS: Record<"anthropic" | "openai", SiteConfig> = {
  anthropic: {
    name: "Anthropic (Claude)",
    sitemapUrl: "https://www.anthropic.com/sitemap.xml",
    prefixes: ["/news/", "/research/", "/engineering/", "/learn/"],
  },
  openai: {
    name: "OpenAI",
    sitemapUrl: "https://openai.com/sitemap.xml",
    // Fetch only content-focused sub-sitemaps; skip app-category and i18n sitemaps
    subSitemapNames: [
      "research",
      "publication",
      "release",
      "company",
      "engineering",
      "milestone",
      "learn-guides",
      "safety",
      "product",
    ],
    subSitemapTemplate: "https://openai.com/sitemap.xml/{name}/",
    // Article pages return 403 from datacenter IPs (Cloudflare WAF);
    // sitemaps are accessible, so use metadata-only mode.
    metadataOnly: true,
  },
};

/** Max articles to fetch full content for on the very first run (per site). */
const MAX_CONTENT_FETCH_FIRST_RUN = 25;
/** Max new URLs processed per incremental run (per site). Guards against site
 *  restructures dumping a large batch of old URLs into the sitemap at once;
 *  URLs beyond the cap are deferred to later runs, not dropped. */
const MAX_NEW_PER_RUN = 30;
/** Characters of page text forwarded to the LLM per article. */
const MAX_CONTENT_LENGTH = 1_500;
/** Polite delay between individual page GETs (ms). */
const FETCH_DELAY_MS = 300;
/** Per-request timeout (ms). */
const FETCH_TIMEOUT_MS = 10_000;

// ---------------------------------------------------------------------------
// HTTP helpers
// ---------------------------------------------------------------------------

const WEB_HEADERS = {
  "User-Agent": "Mozilla/5.0 (compatible; big-model-radar/1.0; +https://github.com/search?q=big_model_radar)",
  Accept: "text/html,application/xml,text/xml,*/*",
  "Accept-Language": "en-US,en;q=0.9",
};

async function httpGet(url: string): Promise<string> {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), FETCH_TIMEOUT_MS);
  try {
    const resp = await fetch(url, { headers: WEB_HEADERS, signal: controller.signal });
    if (!resp.ok) throw new Error(`HTTP ${resp.status}`);
    return await resp.text();
  } finally {
    clearTimeout(timer);
  }
}

function sleep(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

// ---------------------------------------------------------------------------
// Sitemap parsing (plain-text XML; no DOM needed)
// ---------------------------------------------------------------------------

function parseSitemapUrls(xml: string): Array<{ loc: string; lastmod?: string }> {
  const results: Array<{ loc: string; lastmod?: string }> = [];
  for (const block of xml.match(/<url>[\s\S]*?<\/url>/g) ?? []) {
    const loc = block.match(/<loc>\s*(.*?)\s*<\/loc>/)?.[1];
    const lastmod = block.match(/<lastmod>\s*(.*?)\s*<\/lastmod>/)?.[1];
    if (loc) results.push({ loc, lastmod });
  }
  return results;
}

function isSitemapIndex(xml: string): boolean {
  return /<sitemapindex[\s>]/.test(xml);
}

// ---------------------------------------------------------------------------
// HTML content extraction
// ---------------------------------------------------------------------------

function extractTitle(html: string): string {
  return (
    // Prefer OpenGraph title for cleaner strings
    (
      html.match(/<meta[^>]+property=["']og:title["'][^>]+content=["']([^"']{1,200})["']/i)?.[1] ??
      html.match(/<meta[^>]+content=["']([^"']{1,200})["'][^>]+property=["']og:title["']/i)?.[1] ??
      html.match(/<title[^>]*>([^<]{1,200})<\/title>/i)?.[1] ??
      ""
    ).trim()
  );
}

function extractText(html: string): string {
  // Prefer <main> or <article> to avoid nav/header/footer boilerplate
  const source =
    html.match(/<main[^>]*>([\s\S]*?)<\/main>/i)?.[1] ??
    html.match(/<article[^>]*>([\s\S]*?)<\/article>/i)?.[1] ??
    html;

  return source
    .replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, " ")
    .replace(/<style\b[^<]*(?:(?!<\/style>)<[^<]*)*<\/style>/gi, " ")
    .replace(/<[^>]+>/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&nbsp;/g, " ")
    .replace(/\s+/g, " ")
    .trim()
    .slice(0, MAX_CONTENT_LENGTH);
}

/**
 * Extract the real publication date from HTML meta tags or <time> elements.
 * Falls back to empty string if none found.
 */
function extractPublicationDate(html: string): string {
  // Prefer OpenGraph/article meta tags
  const metaMatch =
    html.match(/<meta[^>]+property=["']article:published_time["'][^>]+content=["']([^"']+)["']/i)?.[1] ??
    html.match(/<meta[^>]+content=["']([^"']+)["'][^>]+property=["']article:published_time["']/i)?.[1] ??
    html.match(/<meta[^>]+name=["']date["'][^>]+content=["']([^"']+)["']/i)?.[1] ??
    html.match(/<meta[^>]+content=["']([^"']+)["'][^>]+name=["']date["']/i)?.[1];
  if (metaMatch) return metaMatch.trim();

  // Fall back to <time datetime="...">
  const timeMatch = html.match(/<time[^>]+datetime=["']([^"']+)["']/i)?.[1];
  if (timeMatch) return timeMatch.trim();

  return "";
}

function urlCategory(url: string): string {
  try {
    return new URL(url).pathname.split("/").filter(Boolean)[0] ?? "article";
  } catch {
    return "article";
  }
}

/** Derive a human-readable title from the last URL path segment. */
function titleFromUrl(url: string): string {
  try {
    const slug = new URL(url).pathname.split("/").filter(Boolean).pop() ?? "";
    return slug.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());
  } catch {
    return url;
  }
}

// ---------------------------------------------------------------------------
// URL discovery
// ---------------------------------------------------------------------------

async function discoverUrls(site: "anthropic" | "openai"): Promise<Array<{ loc: string; lastmod?: string }>> {
  const cfg = SITE_CONFIGS[site];
  const results: Array<{ loc: string; lastmod?: string }> = [];

  if (cfg.subSitemapNames && cfg.subSitemapTemplate) {
    // Sitemap index: fetch each named sub-sitemap
    for (const name of cfg.subSitemapNames) {
      const subUrl = cfg.subSitemapTemplate.replace("{name}", name);
      try {
        const xml = await httpGet(subUrl);
        results.push(...parseSitemapUrls(xml));
        await sleep(100);
      } catch (err) {
        console.error(`  [web/${site}] sub-sitemap "${name}" failed: ${err}`);
      }
    }
  } else {
    // Single sitemap
    const xml = await httpGet(cfg.sitemapUrl);
    const all = isSitemapIndex(xml)
      ? [] // unexpected; skip rather than recurse
      : parseSitemapUrls(xml);

    const prefixes = cfg.prefixes ?? [];
    results.push(
      ...all.filter(({ loc }) => {
        try {
          return prefixes.some((p) => new URL(loc).pathname.startsWith(p));
        } catch {
          return false;
        }
      }),
    );
  }

  return results;
}

// ---------------------------------------------------------------------------
// State persistence
// ---------------------------------------------------------------------------

const STATE_FILE = path.join("digests", "web-state.json");

/** 状态键归一化：sitemap 会返回同一页面的大小写变体（如
 *  long-running-Claude / long-running-claude），键区分大小写会把旧文误判为新 URL */
function stateKey(url: string): string {
  return url.toLowerCase();
}

/** 合并历史 state 中的大小写变体（加载时一次性迁移），保留较新的 lastmod */
function normalizeSiteState(siteState: SiteState): void {
  const merged: Record<string, string> = {};
  for (const [url, lastmod] of Object.entries(siteState.seenUrls)) {
    const key = stateKey(url);
    const prev = merged[key];
    if (prev === undefined || prev === "seen" || (lastmod !== "seen" && lastmod > prev)) {
      merged[key] = lastmod;
    }
  }
  siteState.seenUrls = merged;
}

function emptyState(): WebState {
  return {
    anthropic: { lastChecked: "", seenUrls: {} },
    openai: { lastChecked: "", seenUrls: {} },
  };
}

export function loadWebState(): WebState {
  let state: WebState;
  try {
    state = JSON.parse(fs.readFileSync(STATE_FILE, "utf-8")) as WebState;
  } catch {
    return emptyState();
  }
  normalizeSiteState(state.anthropic);
  normalizeSiteState(state.openai);
  return state;
}

export function saveWebState(state: WebState): void {
  fs.mkdirSync(path.dirname(STATE_FILE), { recursive: true });
  fs.writeFileSync(STATE_FILE, JSON.stringify(state, null, 2), "utf-8");
}

// ---------------------------------------------------------------------------
// Main export
// ---------------------------------------------------------------------------

export async function fetchSiteContent(
  site: "anthropic" | "openai",
  state: WebState,
): Promise<WebFetchResult> {
  const cfg = SITE_CONFIGS[site];
  const siteState = state[site];
  const isFirstRun = Object.keys(siteState.seenUrls).length === 0;

  console.log(`  [web/${site}] Discovering URLs from sitemap...`);
  const allDiscovered = await discoverUrls(site);
  console.log(`  [web/${site}] Discovered ${allDiscovered.length} URLs`);

  // Newest first
  allDiscovered.sort((a, b) => {
    if (!a.lastmod && !b.lastmod) return 0;
    if (!a.lastmod) return 1;
    if (!b.lastmod) return -1;
    return b.lastmod.localeCompare(a.lastmod);
  });

  // 仅"从未见过"的 URL 才算新文章（键不区分大小写）。
  // 不再把 lastmod 变动当作更新：sitemap 的 lastmod 会被 CMS 频繁批量刷新
  // （OpenAI 90% 的变动 URL 是同一批反复抖动；Anthropic 迁移日一天碰了全站），
  // 旧行为导致旧文章反复被报成"新增"。
  const newUrls: Array<{ loc: string; lastmod?: string }> = [];
  const newKeys = new Set<string>();
  for (const entry of allDiscovered) {
    const key = stateKey(entry.loc);
    if (siteState.seenUrls[key] !== undefined || newKeys.has(key)) continue;
    newKeys.add(key);
    newUrls.push(entry); // allDiscovered 已按 lastmod 新→旧排序，大小写变体保留较新者
  }

  // 防洪：站点重构可能一次性把大量旧 URL 塞进 sitemap，增量运行每轮最多处理 N 条；
  // 被推迟的 URL 不标记已见，下一轮自动补投（推迟而非丢弃）
  let effectiveNew = newUrls;
  if (!isFirstRun && newUrls.length > MAX_NEW_PER_RUN) {
    console.warn(
      `  [web/${site}] ${newUrls.length} new URLs exceeds cap — taking newest ${MAX_NEW_PER_RUN}, rest deferred`,
    );
    effectiveNew = newUrls.slice(0, MAX_NEW_PER_RUN);
  }

  // Cap content fetches on first run to avoid excessive runtime
  const toFetch = isFirstRun ? effectiveNew.slice(0, MAX_CONTENT_FETCH_FIRST_RUN) : effectiveNew;

  console.log(
    `  [web/${site}] ${isFirstRun ? "First run" : "Incremental"}: ` +
      `${effectiveNew.length} new URLs, fetching content for ${toFetch.length}`,
  );

  // Build items — either from full page fetches or from sitemap metadata only
  const items: WebPageItem[] = [];
  // 成功产出报告条目的键，决定新 URL 是否标记为已见
  const producedKeys = new Set<string>();
  if (cfg.metadataOnly) {
    for (const { loc, lastmod } of toFetch) {
      items.push({
        url: loc,
        title: titleFromUrl(loc),
        lastmod: lastmod ?? "",
        content: "",
        site,
        category: urlCategory(loc),
      });
      producedKeys.add(stateKey(loc));
    }
  } else {
    // Fetch page content sequentially with a polite delay
    for (const { loc, lastmod } of toFetch) {
      try {
        const html = await httpGet(loc);
        // 优先用页面真实发布日期：sitemap lastmod 是 CMS 改动时间（常为抓取时间戳），
        // 直接展示会把旧文章标成"近期发布"
        const published = extractPublicationDate(html);
        items.push({
          url: loc,
          title: extractTitle(html),
          lastmod: published || lastmod || "",
          content: extractText(html),
          site,
          category: urlCategory(loc),
        });
        producedKeys.add(stateKey(loc));
      } catch (err) {
        console.error(`  [web/${site}] Failed to fetch ${loc}: ${err}`);
      }
      await sleep(FETCH_DELAY_MS);
    }
  }

  // 标记已见：
  //   - 首次运行：全部标记，一次性建立基线（否则存量 URL 次日全变"新增"）
  //   - 增量运行：已见过的刷新 lastmod；新 URL 仅在成功产出条目后标记 ——
  //     抓取失败或被上限推迟的保持"未见"，下一轮自动重试/补投，避免永久遗漏
  for (const { loc, lastmod } of allDiscovered) {
    const key = stateKey(loc);
    const value = lastmod ?? "seen";
    const prev = siteState.seenUrls[key];
    if (prev !== undefined) {
      // allDiscovered 按 lastmod 新→旧排序：首个出现即最新值，同键变体不覆盖
      if (prev === "seen" || (value !== "seen" && value > prev)) siteState.seenUrls[key] = value;
      continue;
    }
    if (isFirstRun || producedKeys.has(key)) siteState.seenUrls[key] = value;
  }
  siteState.lastChecked = new Date().toISOString();

  return {
    site,
    siteName: cfg.name,
    isFirstRun,
    newItems: items,
    totalDiscovered: allDiscovered.length,
  };
}

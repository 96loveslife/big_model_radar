/**
 * 发布通道抽象：把"写文件 + 创建 GitHub Issue"统一为 publish() 调用。
 * github 模式调 GitHub REST API；local 模式仅构造 file:// 引用，不发网络。
 */

import path from "node:path";
import { createGitHubIssue } from "./github.ts";

export type DigestTarget = "github" | "local";

export interface PublishItem {
  fileName: string;             // "ai-cli.md"
  content: string;              // 完整 Markdown
  title: string;                // "📊 AI CLI 工具社区动态日报 2026-07-05"
  label: string;                // "digest"
  dateStr: string;              // "2026-07-05"
  lang: "zh" | "en";
  /** 用于 commit body 的统计行；每种报告类型自定义 */
  detail?: string;              // "cli(7 repos): 12 issues, 5 PRs, 1 release"
}

export interface PublishedRef {
  title: string;
  url: string | null;           // github: html_url; local: file:// 绝对路径
  fileName: string;
  label: string;
  lang: "zh" | "en";
  status: "published" | "skipped" | "failed";
  detail?: string;
}

export interface Publisher {
  publish(item: PublishItem): Promise<PublishedRef>;
}

// ---------------------------------------------------------------------------
// Local publisher — 无网络调用
// ---------------------------------------------------------------------------

class LocalPublisher implements Publisher {
  constructor(private baseDir: string) {}

  async publish(item: PublishItem): Promise<PublishedRef> {
    // 文件已在调用方通过 saveFile 落盘（保持 saveFile 既有签名以减少改动）
    // 此处仅构造 file:// 引用供 commit body / TG 通知使用
    const absolute = path.resolve(this.baseDir, item.dateStr, `${item.fileName}.md`);
    // Windows 路径在 file:// 中需要正斜杠，例如 file:///C:/...
    const fileUrl = "file:///" + absolute.replace(/\\/g, "/");
    return {
      title: item.title,
      url: fileUrl,
      fileName: item.fileName,
      label: item.label,
      lang: item.lang,
      status: "published",
      detail: item.detail,
    };
  }
}

// ---------------------------------------------------------------------------
// GitHub publisher — 调 createGitHubIssue
// ---------------------------------------------------------------------------

class GitHubPublisher implements Publisher {
  constructor(private digestRepo: string) {}

  async publish(item: PublishItem): Promise<PublishedRef> {
    try {
      const url = await createGitHubIssue(item.title, item.content, item.label);
      return {
        title: item.title,
        url,
        fileName: item.fileName,
        label: item.label,
        lang: item.lang,
        status: "published",
        detail: item.detail,
      };
    } catch {
      return {
        title: item.title,
        url: null,
        fileName: item.fileName,
        label: item.label,
        lang: item.lang,
        status: "failed",
        detail: item.detail,
      };
    }
  }
}

// ---------------------------------------------------------------------------
// 工厂
// ---------------------------------------------------------------------------

export function createPublisher(
  target: DigestTarget,
  digestRepo: string,
  localBaseDir: string,
): Publisher {
  if (target === "local") return new LocalPublisher(localBaseDir);
  return new GitHubPublisher(digestRepo);
}

/** 读取并解析 DIGEST_TARGET 环境变量，默认 github */
export function resolveTarget(): DigestTarget {
  const v = (process.env["DIGEST_TARGET"] ?? "github").toLowerCase();
  return v === "local" ? "local" : "github";
}

/** 读取并解析 DIGEST_LOCAL_DIR 环境变量，默认 digests */
export function resolveLocalDir(): string {
  return process.env["DIGEST_LOCAL_DIR"] ?? "digests";
}
/**
 * 归档过期的 GitHub Issue（加 archived 标签，状态保持 open）。
 * 仅在 target === "github" 时执行；local 模式直接短路返回。
 */

const ARCHIVABLE_LABELS = [
  "digest",
  "openclaw",
  "web",
  "trending",
  "hn",
  "weekly",
  "monthly",
  "digest-en",
  "openclaw-en",
  "web-en",
  "trending-en",
  "hn-en",
];

const DATE_IN_TITLE = /(\d{4}-\d{2}-\d{2})/;

interface IssueNode {
  number: number;
  title: string;
  created_at: string;
  labels: Array<{ name: string }>;
}

export interface ArchiveResult {
  archived: number;
  failed: number;
  skipped: number;
  shortCircuited: boolean;
}

function ghHeaders(): Record<string, string> {
  return {
    Authorization: `Bearer ${process.env["GITHUB_TOKEN"] ?? ""}`,
    Accept: "application/vnd.github+json",
    "X-GitHub-Api-Version": "2022-11-28",
  };
}

async function listIssuesByLabel(label: string): Promise<IssueNode[]> {
  const out: IssueNode[] = [];
  for (let page = 1; page <= 5; page++) {
    const url = `https://api.github.com/repos/${process.env["DIGEST_REPO"]}/issues?state=open&labels=${encodeURIComponent(label)}&per_page=100&page=${page}`;
    const resp = await fetch(url, { headers: ghHeaders() });
    if (!resp.ok) {
      console.error(`  [archiver] list ${label} page ${page}: HTTP ${resp.status}`);
      break;
    }
    const items = (await resp.json()) as IssueNode[];
    if (items.length === 0) break;
    out.push(...items);
    if (items.length < 100) break;
  }
  return out;
}

async function addArchivedLabel(issueNumber: number): Promise<void> {
  const url = `https://api.github.com/repos/${process.env["DIGEST_REPO"]}/issues/${issueNumber}/labels`;
  const resp = await fetch(url, {
    method: "POST",
    headers: { ...ghHeaders(), "Content-Type": "application/json" },
    body: JSON.stringify({ labels: ["archived"] }),
  });
  if (!resp.ok) throw new Error(`HTTP ${resp.status}: ${await resp.text()}`);
}

function issueDate(it: IssueNode): Date {
  const m = it.title.match(DATE_IN_TITLE);
  if (m) {
    const d = new Date(m[1] + "T00:00:00Z");
    if (!isNaN(d.getTime())) return d;
  }
  return new Date(it.created_at);
}

export async function archiveStaleIssues(
  target: "github" | "local",
  archiveAfterDays: number,
): Promise<ArchiveResult> {
  if (target === "local") {
    return { archived: 0, failed: 0, skipped: 0, shortCircuited: true };
  }
  if (!process.env["DIGEST_REPO"] || !process.env["GITHUB_TOKEN"]) {
    console.error("  [archiver] DIGEST_REPO / GITHUB_TOKEN not set, skipping");
    return { archived: 0, failed: 0, skipped: 0, shortCircuited: true };
  }

  const cutoff = Date.now() - archiveAfterDays * 24 * 60 * 60 * 1000;
  let archived = 0;
  let failed = 0;
  let skipped = 0;
  const seen = new Set<number>();

  for (const label of ARCHIVABLE_LABELS) {
    const issues = await listIssuesByLabel(label);
    for (const it of issues) {
      if (seen.has(it.number)) continue;
      seen.add(it.number);
      if (it.labels.some((l) => l.name === "archived")) {
        skipped++;
        continue;
      }
      const d = issueDate(it);
      if (d.getTime() > cutoff) continue;
      try {
        await addArchivedLabel(it.number);
        console.log(`  [archiver] archived #${it.number}: ${it.title}`);
        archived++;
      } catch (err) {
        console.error(`  [archiver] failed #${it.number}: ${err}`);
        failed++;
      }
    }
  }

  console.log(`  [archiver] done: archived=${archived} failed=${failed} skipped=${skipped}`);
  return { archived, failed, skipped, shortCircuited: false };
}

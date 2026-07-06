/**
 * 归档器入口，供 GitHub Actions workflow 调用。
 * 用法: pnpm tsx scripts/run-archiver.ts
 */

import { resolveTarget } from "../src/publisher.ts";
import { archiveStaleIssues } from "../src/issue-archiver.ts";

const days = parseInt(process.env["ARCHIVE_AFTER_DAYS"] ?? "30", 10);
const target = resolveTarget();

console.log(`[run-archiver] target=${target} archiveAfterDays=${days}`);

archiveStaleIssues(target, days)
  .then((r) => {
    console.log(`[run-archiver] result: ${JSON.stringify(r)}`);
    process.exit(0);
  })
  .catch((err) => {
    console.error(`[run-archiver] fatal: ${err}`);
    process.exit(0); // 兜底：不阻塞 workflow
  });

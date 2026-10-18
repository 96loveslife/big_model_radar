# AI CLI 工具社区动态日报 2026-10-18

> 生成时间: 2026-10-18 03:56 UTC | 覆盖工具: 8 个

- [Claude Code](https://github.com/anthropics/claude-code)
- [OpenAI Codex](https://github.com/openai/codex)
- [Gemini CLI](https://github.com/google-gemini/gemini-cli)
- [GitHub Copilot CLI](https://github.com/github/copilot-cli)
- [Kimi Code CLI](https://github.com/MoonshotAI/kimi-cli)
- [OpenCode](https://github.com/anomalyco/opencode)
- [jcode](https://github.com/1jehuang/jcode)
- [pi](https://github.com/earendil-works/pi)
- [Claude Code Skills](https://github.com/anthropics/skills)

---

## 横向对比

<think>The user wants me to create a comprehensive horizontal comparison report based on the individual daily reports from 7 AI CLI tools: Claude Code, OpenAI Codex, Gemini CLI, GitHub Copilot CLI, Kimi Code CLI, OpenCode, jcode, and pi.

Wait, let me recount - looking at the input:
1. Claude Code
2. OpenAI Codex
3. Gemini CLI
4. GitHub Copilot CLI
5. Kimi Code CLI (no activity)
6. OpenCode
7. jcode
8. pi

That's 8 tools, but Kimi had no activity so I'll note that.

Let me first extract key metrics from each:

**Claude Code:**
- No release
- 50 issues updated (top 30 shown)
- 2 PRs updated (#27140 CLOSED, #97688 OPEN)
- New issues: #103106, #102666, #103064, #103071
- Key themes: Desktop stability, Auto Mode safety, multi-account management, MCP ecosystem

**OpenAI Codex:**
- 1 release (rust-v0.164.0-alpha.3)
- 50 issues updated (top 30 shown)
- 6 PRs all merged
- Themes: Windows platform issues, app-server performance optimizations, Computer Use consistency, sandbox policy UX

**Gemini CLI:**
- 1 release (v0.66.0-nightly.20261018.ged96faedf)
- Many issues (top 30 shown), with specific top: #22323 (13 comments P1), #21409 (8 comments 8 likes P1)
- Many PRs, with key ones: #29800 (XL), #29762 (L P1), #29810, #29799, etc.
- Themes: Agent/Subagent reliability, Auto mode quota handling, AST-aware tools, persistent task tracking

**GitHub Copilot CLI:**
- No release
- 21 issues updated (1 new #5178, 1 closed #5179)
- 0 PRs
- Top issue: #4849 (6 comments), then various HydraFusion/regression issues
- Themes: HydraFusion routing, October harness migration regressions, subagent latency

**Kimi Code CLI:**
- No activity at all in past 24 hours

**OpenCode:**
- No release
- Many issues, top: #56324 (45 comments, 21 likes, severity:high)
- 20 PRs (top 10 shown), most are merged
- Themes: Free tier auth issues, V2 subagent/session persistence, file watcher exhaustion, permission system

**jcode:**
- No release
- 27 issues, top: #1845 (security auth trust cache), #1832 (CPU idle), #1828 (TUI deadlock)
- 24 PRs (top 10 shown)
- Themes: Multi-provider integrations, TUI/UX polishing, security issues

**pi:**
- No release
- 42 issues updated, 9 PRs updated (7 merged)
- Top: #7730 (macOS CPU, 20 comments, 11 likes)
- Themes: Windows/PowerShell compat, RPC/durable improvements, TUI details, Issue→PR fast turnaround

Now let me synthesize the comparison report:

**1. 生态全景 (3-5 sentences)**
- 整体进入「修复密集期」+「架构升级并行」阶段
- 大多数工具无新版本，主要在合入修复
- 安全/权限、Agent 可靠性、跨平台一致性是三大共性痛点
- app-server/性能优化方向被多工具同步合入
- 头部工具（Claude Code, OpenAI Codex, Gemini）的社区讨论量依然最大，但 GitHub Copilot CLI、pi 的回复链速度最快

**2. 各工具活跃度对比表格**

| 工具 | Release | Issues 更新 | PRs 更新 | 主要动量 |
|---|---|---|---|---|
| Claude Code | 0 | 50 | 2 | 修复密集度低，Issue 互动高 |
| OpenAI Codex | 1 (alpha) | 50 | 6 (全合) | app-server 性能合入主线 |
| Gemini CLI | 1 (nightly) | ~30 | ~11 | Auto quota 架构改动 |
| Copilot CLI | 0 | 21 | 0 | 处置期，回归类问题主导 |
| Kimi Code CLI | 0 | 0 | 0 | 无活动 |
| OpenCode | 0 | ~30 | 20 (多合) | Free tier + V2 会话修复 |
| jcode | 0 | 27 | 24 | 多 Provider 接入 + TUI 打磨 |
| pi | 0 | 42 | 9 (7 合) | 企业级/Windows 兼容 |

**3. 共同关注的功能方向**
- Agent/Subagent 可靠性与状态可见性：Claude Code、Codex、Gemini、Copilot、OpenCode、pi 都涉及（占多数）
- 跨平台/Windows 兼容性：Codex、Copilot、pi 集中
- 安全与权限模型：Claude Code (Auto Mode 沙箱绕过)、OpenCode (Code Mode deny 漏掉)、jcode (auth trust cache revocation)、pi (trust 决策)
- MCP 生态：Claude Code、Codex、Gemini、jcode、pi 都涉及
- 性能优化（app-server/压缩/缓存）：Codex、OpenCode、Gemini
- 多 Provider/账户体验：Claude Code (账号管理)、jcode、OpenCode
- 配置/会话持久化：多工具涉及

**4. 差异化定位**
- Claude Code: Desktop-first，多账户/会话复杂度高，企业用量大
- OpenAI Codex: IDE + Remote + Computer Use 多端接入，强 Windows 投入
- Gemini CLI: TUI/nightly 滚动节奏，Auto 模式 + 配额治理独特
- GitHub Copilot CLI: VS Code Copilot Chat 的 CLI 入口，HydraFusion 多模型路由独特
- OpenCode: V2 + 多 provider + free tier，注重多客户端一致
- jcode: 多 Provider 边界扩张为主线，工具集成饱和
- pi: 强调 pi-durable/RPC/扩展生态，企业落地深水区

**5. 社区热度与成熟度**
- 最活跃：Claude Code、Codex、Gemini、pi
- 修复效率最高：pi（当日 Issue → 当日 PR）、Codex（PR 全合）、jcode（PR 数 ≈ Issue 数）
- 活跃但成熟度待提升：Copilot CLI（处置期）、OpenCode（V2 迁移期）
- 沉默：Kimi Code CLI

**6. 行业趋势信号**
- 「Agent 报喜不报忧」成为通病，多工具出现 MAX_TURNS/recovery/状态汇报缺陷
- MDM/系统级配置 + 企业级部署路径开放
- app-server/性能优化成为新基础设施层
- Computer Use / 浏览器 Agent 成为差异化方向
- TUI 修复密集，标志 CLI 工具进入体验深水区
- Issue→PR 自动化合入（copyberry bot 等）开始成熟
- Sandbox/权限模型细粒度化（Claude Code 的 Auto Mode，OpenCode 的 Code Mode）

让我开始写这份报告，要简洁专业，有数据支撑。</think>

# AI CLI 工具生态横向对比报告 · 2026-10-18

---

## 一、生态全景

当前 8 款主流 AI CLI 工具整体处于 **「修复密集 + 架构升级并行」** 阶段：过去 24 小时内仅 2 款工具有版本动作（OpenAI Codex `0.164.0-alpha.3`、Gemini CLI `v0.66.0` nightly），但仓库互动量普遍偏高——pi（42 Issue/9 PR）、Claude Code（50 Issue/2 PR）、OpenAI Codex（50 Issue/6 PR）尤为活跃。**Agent/Subagent 可靠性、权限与安全模型、Windows 兼容性** 是横跨多数工具的三大共性痛点；**app-server 性能优化、MCP/扩展生态、Provider 边界扩张** 则是官方响应速度最快的三条主线。修复链路最健康的是 pi（当日 Issue→PR 闭环已成常态），最受关注的是 Claude Code（#18435 多账户管理以 914 👍 长期霸榜）。

---

## 二、各工具活跃度对比

| 工具 | Release | 更新 Issue | 更新 PR | 关键动量 | 修复响应速度 |
|---|---|---|---|---|---|
| **Claude Code** | — | 50 | 2（1 CLOSED + 1 OPEN） | Desktop 回归 + Auto Mode 安全护栏集中暴露 | ⭐⭐ |
| **OpenAI Codex** | `rust-v0.164.0-alpha.3` | 50 | 6（**全部合入**） | app-server 性能主线（zstd 压缩、模型缓存复用） | ⭐⭐⭐⭐⭐ |
| **Gemini CLI** | `v0.66.0-nightly.20261018...` | ~30+ | ~11 | Auto 配额跨等级回退（PR #29800）+ `/auth` 修复（#29762） | ⭐⭐⭐⭐ |
| **GitHub Copilot CLI** | — | 21（1 新开 + 1 CLOSED） | 0 | "10 月 harness 迁移"回归集中处置期 | ⭐⭐ |
| **Kimi Code CLI** | — | 0 | 0 | 静默，无活动 | — |
| **OpenCode** | — | ~30 | 20（多数已合） | Free tier 鉴权 + V2 子会话持久化 + 文件监听边界 | ⭐⭐⭐⭐ |
| **jcode** | — | 27 | 24（多组合入） | 多 Provider 接入 + TUI/UX 打磨 | ⭐⭐⭐⭐⭐ |
| **pi** | — | 42 | 9（**7 已合**） | RPC/Durable + Windows/PowerShell + TUI 细节 | ⭐⭐⭐⭐⭐ |

> 注：OpenCode 与 Gemini CLI 仓库原始数据未给出 Issue/PR 总数，上表估读自可见列表。

---

## 三、共同关注的功能方向

### 1. Agent / Subagent 可靠性与状态可观测性（覆盖 6/8 工具）
- **Claude Code** [#37793、#97763、#102625]：subagent 撞到 prompt/MCP 上限后中断、回话雪崩、transcript 缺 output_tokens。
- **Gemini CLI** [#22323、#21409、#21968]：⭐#22323 (P1) Subagent 撞 MAX_TURNS 仍报"success"；⭐#21409 Generalist Agent 永久挂死（8👍）。
- **GitHub Copilot CLI** [#4849]：subagent 评审回路延迟达数分钟。
- **OpenCode** [#36349、#56636、#42270]：V2 子代理关系跨重启丢失 + warming 与主请求并发冲突。
- **pi** [#10982、#11026]：sendMessage(triggerTurn) 与 compaction 并发抢跑。
- **诉求收敛**：失败原因应精准汇报、过程状态可见、并发与资源调度需要可中断/可恢复。

### 2. 安全、权限与"幽灵拒绝"
- **Claude Code** [#90450、#100684]：Auto Mode 静默忽略 CLAUDE.md；`pkill -f "cat"` 误杀整个 macOS GUI（安全级 P1）。
- **OpenAI Codex** [#45403、#45986、#46364、#45232、#54962]：用户已显式授权仍被 sandbox 拦截，且无审计入口。
- **OpenCode** [#55593 (high)、#56511]：权限 `ask` 被静默 auto-approve；Code Mode 绕过 deny 策略。
- **jcode** [#1845 (安全)]：外部 auth trust 缓存忽略撤销，存在提权窗口。
- **GitHub Copilot CLI** [#5177、#5173、#5172]：harness 迁移导致 `git add/commit/push` 不再请求审批；`/rewind` 备份 `.gitignore` 机密。
- **pi** [#10947、#10895]：trust 决策被 `||` 顺序绕过；MDM 系统级配置提案被拒。

### 3. Windows / 跨平台兼容性
- **OpenAI Codex**：⭐#49458（85 评论，26👍）、#35446、#41982、#42006、#51572 — Windows + Computer Use + Sandbox 是当日最高互动议题。
- **GitHub Copilot CLI** [#5171、#5176、#4551]：NumLock、数字键、bwrap SIGKILL、macOS SSH 剪贴板。
- **pi** [#10976 → #11080 已修、#11086]：Store 版 PowerShell 路径 + Windows 终端符号泄漏。
- **Gemini CLI** [#21983]：Browser subagent Wayland 兼容欠账。

### 4. MCP / 扩展生态治理（覆盖 5/8）
- **Claude Code** [#16837、#25865、#45208]：超时、JSON 序列化、OAuth 抖动；当日多项已合入修复。
- **OpenAI Codex** [#34289]：Hooks 缺少 `PostToolUseFailure` 触发契约。
- **Gemini CLI** [#29801、#22267]：MCP proxy fetch 兼容性 + Agent registry 配置漂移。
- **OpenCode** [#55454 → #56644]：server 插件与宿主 OpenTUI 运行时 singleton 冲突。
- **jcode** [#1824、#1864]：openai-compatible 模型选择器中声明模型被丢弃 + 内置 provider 缓存命名空间泄漏。

### 5. 性能与上下文经济学
- **OpenAI Codex**：⭐PR #54946 / #54949 / #54930（本日全合）— 模型目录跨凭证缓存 + zstd WebSocket 压缩 + 工具声明 `Arc` 共享。
- **Gemini CLI**：⭐PR #29800 (XL) Auto 配额跨 tier 回退；⭐#24246 工具 > 128 即 400 错误（错误文案阈值与实际不符）。
- **OpenCode**：⭐#37489 context cache 失效、#55857 增量 Markdown projection、#56324/56368/56662 (45 评论 21👍) free tier 403。
- **Claude Code** [#91395、#95728、#102666]：Artifact 预加载 12k tokens、prompt-cache keepalive、空闲自动压缩浪费。
- **GitHub Copilot CLI** [#5151、#5164]：Sol 模型工具定义膨胀至 ~260K 即拒；MCP 泄漏 OOM。

### 6. 多 Provider / 多账户体验
- **Claude Code** [#18435 (914👍) Long-standing #1]：跨 Desktop/IDE 的账户/Profile 切换。
- **jcode** [#1831、#1833、#1849、#1866、#1868、#1854]：Muse Code 订阅、Laya SystemOne、Standard Compute、Antigravity Argon 404、Claude OAuth 点分 ID 等多条接入摩擦。
- **OpenCode** [#42928、#24981 (7👍)]: 邮件更新 + 代理配置可声明化。

---

## 四、差异化定位分析

| 工具 | 主战场 | 目标用户 | 技术路线特征 |
|---|---|---|---|
| **Claude Code** | Desktop + IDE 全场景 | 企业 + 重度 Pro/Max 用户 | Auto Mode + Remote Control + 多客户端一致 |
| **OpenAI Codex** | IDE / Remote / Computer Use 全端 | 桌面 + 远程协作开发者 | app-server + rust-α 快速滚动 + Chrome 扩展生态 |
| **Gemini CLI** | TUI + Auto 配额调度 | 配敏感的重度 CLI 用户 | nightly 频繁滚动 + Auto mode 跨 tier 回退 |
| **GitHub Copilot CLI** | VS Code + Hydrafusion 路由 | 已订阅 GitHub Copilot 的企业 | 多模型路由聚合（HydraFusion） |
| **OpenCode** | 多客户端 V2 | 自由/付费跨端用户 | 多 Provider 接入 + V2 managed-server |
| **jcode** | TUI / Herdr webui | Provider 控/MCP 玩家 | 多 Provider 边界 + 可配置 Jev 决策模型 |
| **pi** | TUI + 扩展生态 | 企业落地 + 云原生 | pi-durable + RPC + MDM 系统级配置方向 |
| **Kimi Code CLI** | — | — | 当日无信号，关注度待回升 |

---

## 五、社区热度与成熟度

**热度第一梯队**（互动量绝对值高）：
- Claude Code（#18435 单议题 914👍、活跃议题数量最多）
- OpenAI Codex（#49458 单议题 85 评论/26👍，且 PR 推进最齐）
- Gemini CLI（Auto quota 议题 #29800 XL 级 PR 推动架构改动）

**修复效率第一梯队**（Issue→PR 当日闭环已成日常）：
- **pi**（#10947→#11074、#10982→#11077、#10976→#11080、#11067→#11082 当日全部闭环）
- **OpenAI Codex**（6 PR 全部当日合入，性能主线清晰）
- **jcode**（24 PR 处理 27 Issue，PR 密度 ≈ 1:1）

**成熟度观察**：
- **Claude Code / OpenAI Codex** 已进入"产品级公共平台"阶段，社区对账号、合规、Desktop 体验的诉求接近成熟 SaaS 形态。
- **OpenCode 处于 V2 迁移深水区**，free tier 鉴权、V2 会话持久化是当前阵痛。
- **GitHub Copilot CLI 处在大规模 harness 迁移回归期**，#5177（审批回退）、#5173（命令 cd 误拒）等 10 月后引入的缺陷需紧急补丁。
- **Kimi Code CLI 静默**，缺乏信号，难以判断其当前迭代节奏。
- **Gemini CLI / jcode** 已建立稳定的 nightly/小步快跑节奏，社区活跃度健康。

---

## 六、值得关注的趋势信号

### 趋势 1：「Agent 报喜不报忧」成为行业通病
Gemini CLI #22323、Claude Code #97763、OpenCode #36349 都涉及 Agent 在真实中断时伪装成功。**对开发者**：编写 Agent 工作流时需独立审计 last-actual-step；不要信任 agent 自报告的 "done / success"。

### 趋势 2：app-server / 传输层进入新一轮基础设施升级
OpenAI Codex 连续合入 zstd WebSocket 压缩、模型目录缓存复用、工具声明 `Arc` 共享。**对开发者**：升级到 `rust-v0.164.0` 稳定版后将获得明显冷启动与传输延迟优化，值得跟进。

### 趋势 3：企业 / MDM

---

## 各工具详细报告

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills 社区热点

> 数据来源: [anthropics/skills](https://github.com/anthropics/skills)

<think>Let me analyze the data from the GitHub repository anthropics/skills to generate a comprehensive community hotspots report.

Looking at the data:

**Pull Requests (Top 20 by comments, though comments show "undefined" for all - I'll use other signals like engagement, topic relevance, and recent activity):**

1. #1742 - fix(mcp-builder): MCP 2.0 compatibility fix
2. #1298 - fix(skill-creator): trigger eval isolation, Windows compatibility
3. #1245 - Add notion-spec-to-implementation and quantitative-resume-auditor skills
4. #1771 - proofcore-contract-auditor (Web3 smart contract auditing)
5. #1734 - Detect orphaned docx comments
6. #1703 - Add md2video-audio skill (Markdown to video)
7. #1961 - skill-creator: harden eval viewer (security)
8. #1792 - fix(docx): LibreOffice timeout handling
9. #1730 - fix(claude-api): replace dead URLs
10. #1681 - fix(skill-creator): package_skill.py execution
11. #514 - Add document-typography skill
12. #1615 - Add scnet-hpc skill (HPC clusters)
13. #538 - fix(pdf): case-sensitive file references
14. #486 - Add ODT skill (OpenDocument)
15. #210 - Improve frontend-design skill
16. #83 - Add skill-quality-analyzer and skill-security-analyzer
17. #2040 - Add architecture-advisor skill
18. #2039 - Add harness SDD suite
19. #2004 - fix(slack-gif-creator): text centering
20. #1997 - fix(skill-creator): YAML frontmatter parsing

**Issues (by actual comment counts):**
1. #492 (46 comments) - Security: Community skills under anthropic/ namespace impersonation
2. #228 (16 comments) - Org-wide skill sharing in Claude.ai
3. #556 (12 comments) - run_eval.py trigger rate 0% bug
4. #62 (10 comments) - Skills disappeared
5. #1329 (9 comments) - compact-memory skill proposal
6. #202 (CLOSED, 8 comments) - skill-creator best practice update
7. #412 (CLOSED, 6 comments) - agent-governance skill
8. #189 (6 comments) - Duplicate skills between plugins
9. #1385 (5 comments) - Reasoning Quality Gate Pipeline
10. #2018 (4 comments) - docx merge_runs.py XML namespace bug
11. #1868 (4 comments) - slack-gif-creator gradient bug
12. #1487 (4 comments) - claude-api token exhaustion
13. #1394 (4 comments) - eval-viewer XSS
14. #1390 (4 comments) - mcp-builder evaluation bug
15. #1383 (4 comments) - skill-creator silent failures

Now let me craft the report. Note that PR comments are "undefined" in the data, so I need to infer engagement from other signals (recency, topic importance, related issue activity). I'll be honest about this limitation.

Let me structure the response in Chinese as requested, professional and concise.

For "热门 Skills 排行" - since PR comments are missing/undefined, I should use the most recent + most discussed PRs. The Issues side has real data. Let me focus on PRs that are either:
- Linked to high-comment issues (like #1668 → #1742)
- Have substantial technical significance
- Add new skills (vs. fixes)

Key themes I see:
1. **Security concerns** - #492 (46 comments!), eval viewer hardening #1961, XSS in eval-viewer #1394
2. **Skill quality tooling** - skill-quality-analyzer, skill-security-analyzer #83
3. **Process/methodology skills** - SDD suite #2039, architecture-advisor #2040, Quality Gate #1385
4. **Memory/state** - compact-memory #1329
5. **Eval reliability** - run_eval.py #556, multiple skill-creator eval issues
6. **Distribution/trust** - anthropic/ namespace impersonation #492, org sharing #228
7. **Document workflows** - ODT, typography, docx fixes
9. **Web3/emerging domains** - proofcore smart contracts #1771
10. **Infrastructure/HPC** - scnet-hpc #1615

Let me draft the report now.

One important caveat: PR评论数在数据中全部显示为 undefined，所以我需要基于其他信号（更新时间、关联Issue、话题热度）来评估PR关注度。我应该在报告中说明这一点。

Let me also note: "按评论数排序" but PR comments show undefined. This means the PRs are likely sorted by some other criteria. I'll work with what I have.

Let me write the report now.</think>

# Claude Code Skills 社区热点报告
*数据截止：2026-10-18 | 数据源：anthropics/skills*

> ⚠️ **数据说明**：PR 的评论数在原始数据中均显示为 `undefined`，本报告对 PR 的"关注度"判断基于**议题关联度、话题重要性、更新时间、影响范围**综合评估；Issues 评论数为真实数据。

---

## 1. 热门 Skills / PR 排行

### 🏆 #1742 — fix(mcp-builder): MCP 2.0 兼容性修复
- **链接**：https://github.com/anthropics/skills/pull/1742
- **状态**：OPEN
- **亮点**：修复 `mcp>=2.0.0` 中 `streamablehttp_client` → `streamable_http_client` 重命名及自定义 header 配置方式。属于对核心 MCP 工具链的版本兼容修复，关联高关注度 Issue #1668。
- **价值**：影响所有依赖 MCP Builder 的工作流，是 Skills 生态基础设施级问题。

### 🏆 #1298 — fix(skill-creator): 触发评估隔离 & Windows 兼容
- **链接**：https://github.com/anthropics/skills/pull/1298
- **状态**：OPEN
- **亮点**：修复 trigger eval 中的三类假阴性：worker 子进程竞争、Windows 下 `select()` 失败、运行时失败被误判为负样本。
- **价值**：直接关联社区对 `run_eval.py` 0% 触发率问题（#556，12 评论）的诉求，是 skill 自迭代能力的关键修复。

### 🏆 #1961 — skill-creator eval viewer 安全加固
- **链接**：https://github.com/anthropics/skills/pull/1961
- **状态**：OPEN
- **亮点**：修补 eval viewer 的脚本逃逸、DNS rebinding、跨站 POST、HTML 转义四类漏洞。
- **价值**：呼应 #492（46 评论，社区最热议题）反映的安全焦虑，是本地渲染"不可信模型输出"场景的标配防御。

### 🏆 #1771 — proofcore-contract-auditor（Web3 智能合约审计）
- **链接**：https://github.com/anthropics/skills/pull/1771
- **状态**：OPEN
- **亮点**：Solidity/Rust 静态分析 + TON 区块链零存储 Merkle 协议锚定审计证明。
- **价值**：Skills 生态向 Web3 / 链上审计领域扩展的代表，体现"领域垂直化"趋势。

### 🏆 #2039 + #2040 — harness SDD 套件 & architecture-advisor
- **链接**：https://github.com/anthropics/skills/pull/2039 ｜ https://github.com/anthropics/skills/pull/2040
- **状态**：OPEN（10-16 最新提交）
- **亮点**：Spec-Driven Development 全流程（specs → dispatch → adversarial review）+ 架构模式选择与书面论证。
- **价值**：从"单点工具"演化为"工程方法论套件"，呼应 #1385 提出的三阶段质量门控思路。

### 🏆 #1245 — notion-spec-to-implementation & quantitative-resume-auditor
- **链接**：https://github.com/anthropics/skills/pull/1245
- **状态**：OPEN
- **亮点**：Notion 规格→可执行任务分解 + 量化简历审计（数据驱动求职场景）。
- **价值**：把"知识管理 + 求职工程化"两个高频垂直场景打包进 Skills。

### 🏆 #83 — skill-quality-analyzer & skill-security-analyzer（最早仍 OPEN）
- **链接**：https://github.com/anthropics/skills/pull/83
- **状态**：OPEN（2025-11-06 创建，至今未合并）
- **亮点**：五维度质量评估（结构/文档/示例等）+ 技能安全分析。
- **价值**：社区**最早提出**的元 Skill 提案，与 #492 安全议题深度共鸣，长期未合并反映治理缺失。

### 🏆 #1703 — md2video-audio（Markdown → MP4）
- **链接**：https://github.com/anthropics/skills/pull/1703
- **状态**：OPEN
- **亮点**：零成本通过 Marp + TTS 生成带人声旁白的演示视频。
- **价值**：内容创作场景的"端到端"尝试，反映社区对**多模态输出**的探索。

---

## 2. 社区需求趋势（Issues 提炼）

| 优先级 | 需求方向 | 关键 Issue | 评论数 | 核心诉求 |
|--------|---------|-----------|--------|---------|
| 🔴 **P0** | **安全与信任边界** | [#492](https://github.com/anthropics/skills/issues/492) | **46** | 社区 Skill 滥用 `anthropic/` 命名空间冒充官方，存在冒充/提权风险 |
| 🟠 **P1** | **组织级 Skill 分发** | [#228](https://github.com/anthropics/skills/issues/228) | 16 | Claude.ai 组织内一键共享，不再依赖手动下载 + 上传 |
| 🟠 **P1** | **评估/触发可靠性** | [#556](https://github.com/anthropics/skills/issues/556) | 12 | `run_eval.py` 对所有 query 触发率为 0%，自迭代能力形同虚设 |
| 🟡 **P2** | **Agent 长记忆压缩** | [#1329](https://github.com/anthropics/skills/issues/1329) | 9 | `compact-memory`：符号化表示替代散文式记忆，省 token |
| 🟡 **P2** | **插件内容去重** | [#189](https://github.com/anthropics/skills/issues/189) | 6 | `document-skills` 与 `example-skills` 内容重复，污染 context window |
| 🟡 **P2** | **Agent 治理与安全模式** | [#412](https://github.com/anthropics/skills/issues/412)（已关闭） | 6 | 政策执行、威胁检测、信任评分、审计轨迹 |
| 🟢 **P3** | **推理质量三段门控** | [#1385](https://github.com/anthropics/skills/issues/1385) | 5 | 任务前校准 → 对抗性评审 → 交付验证 |
| 🟢 **P3** | **Token 注入治理** | [#1487](https://github.com/anthropics/skills/issues/1487) | 4 | `claude-api` skill 单次注入 ~156k token 直接耗尽上下文 |

**趋势关键词**：
- **Trust & Safety**：冒充、命名空间、eval viewer XSS、Token 注入——安全是当前社区第一痛点。
- **Skill 自身工程化**：质量/安全分析、触发评估可靠性、去重——围绕 Skills 元工具的诉求集中爆发。
- **方法论化**：从单点 Skill 走向套件（SDD、质量门控、记忆压缩）——社区开始关注 Claude Code 的"开发流程资产"。

---

## 3. 高潜力待合并 Skills（OPEN + 高信号）

| PR | Skill/修复 | 合并潜力 | 关键理由 |
|----|----------|---------|---------|
| [#1742](https://github.com/anthropics/skills/pull/1742) | mcp-builder MCP 2.0 兼容 | ⭐⭐⭐⭐⭐ | 阻塞性问题，关联热 Issue #1668，Merge 后立即解锁 MCP 用户 |
| [#1298](https://github.com/anthropics/skills/pull/1298) | skill-creator eval 可靠性 | ⭐⭐⭐⭐⭐ | 同时解决 #556、#1383 等多个 Issue，修复面广 |
| [#1961](https://github.com/anthropics/skills/pull/1961) | eval viewer 安全加固 | ⭐⭐⭐⭐⭐ | 直接回应 #1394 XSS 与 #492 安全恐慌，优先级极高 |
| [#1792](https://github.com/anthropics/skills/pull/1792) | docx LibreOffice 超时处理 | ⭐⭐⭐⭐ | docx 场景高频，错误处理从"假成功"修正为"真错误" |
| [#1730](https://github.com/anthropics/skills/pull/1730) | claude-api 死链修复 | ⭐⭐⭐⭐ | 文档级修复，阻力小、收益直观 |
| [#2004](https://github.com/anthropics/skills/pull/2004) | slack-gif-creator 文字居中 | ⭐⭐⭐ | 修复 Pillow 12.3.0 兼容，关联 #1868 |
| [#2039](https://github.com/anthropics/skills/pull/2039) | harness SDD 套件 | ⭐⭐⭐⭐ | 方法论级创新，与 #1385 思路吻合，2026-10 最新 |
| [#486](https://github.com/anthropics/skills/pull/486) | ODT (OpenDocument) Skill | ⭐⭐⭐ | 开源 ISO 格式支持，等待 8 个月仍未合并，存在治理瓶颈 |

**长期未合并警示**：
- [#83](https://github.com/anthropics/skills/pull/83) 自 2025-11 提出至今未合并，质量/安全分析工具缺位与 #492 严重不匹配。
- [#210](https://github.com/anthropics/skills/pull/210) 自 2026-01 未合并，frontend-design 改进请求长期积压。

---

## 4. Skills 生态洞察（一句话总结）

> **社区最集中的诉求是「让 Skills 生态本身可被信任、可被治理、可被度量」**：冒充官方 namespace、eval 触发率 0%、eval viewer XSS、Token 注入失控等问题表明，社区已不再满足于"加新 Skill"，而是迫切要求 Skills 仓库在**安全验证、命名治理、评估闭环、组织分发**四方面建立基础设施——这也是 `skill-quality-analyzer` / `skill-security-analyzer`（#83）、`agent-governance`（#412）等元 Skill 长期不被合并却持续被呼吁的根本原因。

---

<think>The user wants me to generate a daily report for Claude Code community dynamics based on GitHub data. Let me analyze the data carefully.

Looking at the data:
- No new releases in the past 24 hours
- 50 issues updated (showing top 30 by comment count)
- 2 PRs updated

Wait, I need to check the dates carefully. The report date is 2026-10-18, but many issues were created in 2026-01, 02, 03, etc. The issue dates show "更新: 2026-10-18" which means they were updated today. So these are existing issues that got comments/updates today.

Let me organize the information:

**Top Issues by comments:**
1. #18435 - Multiple Claude accounts in Desktop (202 comments, 914 👍) - OPEN enhancement
2. #90450 - Auto Mode Bash-first silently disables CLAUDE.md (23 comments, 48 👍) - OPEN bug
3. #37793 - Subagents fail with prompt too long for many MCP servers (23 comments, 27 👍) - CLOSED bug
4. #45361 - Cannot purchase API credits Stripe issue (22 comments, 9 👍) - OPEN invalid
5. #98134 - Apple Max 20x subscription recognized as Pro (19 comments, 0 👍) - OPEN bug
6. #16837 - MCP_TIMEOUT > 60s not respected (16 comments, 16 👍) - CLOSED bug
7. #25865 - Notion MCP JSON object parameters serialized as strings (16 comments, 23 👍) - CLOSED bug
8. #92276 - Desktop Remote Control never auto-enables (11 comments, 6 👍) - OPEN regression
9. #72957 - Write/Edit tools decode \uXXXX escape sequences (9 comments, 1 👍) - OPEN bug
10. #99395 - Desktop plugin pane button needs second click (9 comments, 6 👍) - OPEN bug
11. #45208 - GitHub MCP OAuth redirects to Google Drive (9 comments, 14 👍) - CLOSED bug
12. #91395 - Artifact tool loads 12k tokens schema eagerly (6 comments, 4 👍) - OPEN bug
13. #100684 - Auto mode pkill -f "cat" killed GUI apps (6 comments, 1 👍) - OPEN bug (security/safety concern!)
14. #97763 - Subagent transcripts record incomplete output_tokens (5 comments, 0 👍) - OPEN bug
15. #74908 - Windows disable quick entry on taskbar click (4 comments, 3 👍) - CLOSED enhancement
16. #101901 - Extension host OOM-crashes with parallel subagents (4 comments, 1 👍) - OPEN bug
17. #95728 - Prompt-cache keepalive feature request (3 comments, 0 👍) - OPEN enhancement
18. #86935 - Settings-file watcher enumerates parent directory (3 comments, 1 👍) - OPEN bug perf
19. #96246 - Low-memory guard kills backgrounded long build (2 comments, 1 👍) - OPEN bug
20. #98703 - Desktop Remote Control idle sweep stops session (1 comment, 0 👍) - OPEN bug
21. #103106 - Model switched mid-session despite flag (1 comment, 0 👍) - OPEN bug (NEW)
22. #102666 - Idle auto-compaction wastes tokens (1 comment, 0 👍) - OPEN bug (NEW)
23. #102589 - EnterWorktree skill unavailable (1 comment, 0 👍) - OPEN bug
24. #103064 - Desktop Code tab keeps sending during macOS DarkWakes (1 comment, 0 👍) - OPEN bug (NEW)
25. #92717 - Sidebar groups don't sync across devices (1 comment, 2 👍) - OPEN enhancement
26. #102965 - /mcp Reconnect on Windows leaves process running (1 comment, 0 👍) - CLOSED bug
27. #103071 - Computer use in Linux CLI (1 comment, 0 👍) - OPEN enhancement (NEW)
28. #102625 - Desktop cascades of sessions (1 comment, 1 👍) - OPEN bug
29. #93647 - Docs missing PATH setup info (1 comment, 0 👍) - OPEN documentation
30. #100526 - Remote Control 403 error session (1 comment, 0 👍) - OPEN bug

**PRs:**
1. #27140 - CLOSED - Add memory-bridge plugin for session context consolidation
2. #97688 - OPEN - sec-default: collector records continue past the user tier

Now let me think about themes/trends:

1. **Desktop app issues** are dominant - many bugs related to Desktop (Remote Control, sidebar, plugins, sessions)
2. **Auto mode safety concerns** - pkill -f "cat" killed all GUI apps, silent disabling of CLAUDE.md
3. **MCP-related issues** - timeout limits, JSON serialization, OAuth, prompt length limits
4. **Cost/performance concerns** - unnecessary token consumption, OOM crashes
5. **Multi-account/multi-session management** - top issue with 914 thumbs up
6. **Cross-device sync** - sidebar groups, sessions

Let me draft the report:

Since there are only 2 PRs (one closed, one open with sec-default), I should note this is a low PR activity day. I'll mention what's available.

Let me write this in clean Chinese, suitable for developers.</think>

# Claude Code 社区动态日报
**日期：** 2026-10-18
**数据来源：** github.com/anthropics/claude-code

---

## 一、今日速览

今日仓库无新版本发布，但 Issue 活跃度极高，社区讨论集中在三个方向：**Desktop 应用的稳定性**（Remote Control、插件、会话管理多项回归与缺陷集中暴露）、**Auto Mode 的安全边界**（被报告出可通过 `pkill -f "cat"` 误杀 macOS 全 GUI 应用的真实事故），以及**多账户/多会话管理需求**（#18435 以 914 👍 长期占据热度榜首）。同时，多个 MCP 集成、超时与序列化缺陷被关闭清理，体现最近一轮修复动作。

---

## 二、版本发布

**今日无新版本发布。** 沿用最新可用版本（CLI 2.1.302 / Desktop 1.46388.3）。

---

## 三、社区热点 Issues

| # | Issue | 状态 | 评论 | 👍 | 要点 |
|---|---|---|---|---|---|
| [1](https://github.com/anthropics/claude-code/issues/18435) | **#18435** Desktop 多账户/Profile 切换 | OPEN | 202 | 914 | 长期第一热门 feature request，覆盖 auth/ide/desktop，呼声极高，团队尚未回应 |
| [2](https://github.com/anthropics/claude-code/issues/90450) | **#90450** Auto Mode Bash-first 静默禁用嵌套 CLAUDE.md | OPEN | 23 | 48 | 直接破坏权限护栏，是 Auto Mode 信任体系的重要缺陷 |
| [3](https://github.com/anthropics/claude-code/issues/37793) | **#37793** MCP 过多导致 subagent prompt 超 200k | CLOSED | 23 | 27 | 已被关闭，反映官方对 tool 定义膨胀有正式修复动作 |
| [4](https://github.com/anthropics/claude-code/issues/45361) | **#45361** Stripe 拒绝 API 充值（3DS 已过） | OPEN | 22 | 9 | 被标 invalid 但持续有人复现，疑似银行/地区风控误判 |
| [5](https://github.com/anthropics/claude-code/issues/98134) | **#98134** Max 20x 订阅被识别为 Pro | OPEN | 19 | 0 | 订阅层级降级，影响付费用户体验 |
| [6](https://github.com/anthropics/claude-code/issues/92276) | **#92276** Desktop 1.44+ Remote Control 不再自动启用 | OPEN | 11 | 6 | 1.40609→1.44121 的明确回归，影响定时任务工作流 |
| [7](https://github.com/anthropics/claude-code/issues/16837) | **#16837** MCP_TIMEOUT > 60s 不生效 | CLOSED | 16 | 16 | 已修复，体现对长任务 MCP 配置的关注 |
| [8](https://github.com/anthropics/claude-code/issues/25865) | **#25865** Notion MCP 把 JSON 对象序列化为字符串 | CLOSED | 16 | 23 | 影响 update/move/create 操作，已关闭 |
| [9](https://github.com/anthropics/claude-code/issues/100684) | **#100684** Auto Mode 跑 `pkill -f "cat"` 杀掉整个 macOS GUI | OPEN | 6 | 1 | **安全级别最受关注的 bug**，pkill 子串匹配应被禁用 |
| [10](https://github.com/anthropics/claude-code/issues/102625) | **#102625** Desktop Code tab 自发雪崩开 46 个 session | OPEN | 1 | 1 | 一次工作中启动了 46 个 Claude 会话，反映 subagent 调度失控 |

> 备注：另有 [#101901](https://github.com/anthropics/claude-code/issues/101901) VS Code Extension 启动 2 个并行 Agent 即 OOM、[#103106](https://github.com/anthropics/claude-code/issues/103106) 模型在 `switchModelsOnFlag=false` 下被中途切到 opus-4-8 等高优先级新报告。

---

## 四、重要 PR 进展

> 今日仅有 2 条 PR 刷新，活跃度偏低。

| # | PR | 状态 | 要点 |
|---|---|---|---|
| [1](https://github.com/anthropics/claude-code/pull/27140) | **#27140** Memory-bridge plugin（会话上下文整合） | **CLOSED** | 提议 `/bridge` 命令 + Stop hook 在自动压缩前告警；强调 advisory-only 设计，但最终被关闭，暂未合并 |
| [2](https://github.com/anthropics/claude-code/pull/97688) | **#97688** sec-default：collector 在 user tier 之后继续记录 | OPEN | 安全遥测相关：`telemetry.log` 的 collector 流与 `classic.*`/`settings.read` 一致，延伸到 user tier 之外，组织不再可被插件 drop/rewrite 审计记录 |

---

## 五、功能需求趋势

将所有 Issues 的 feature 标签聚合，可归纳出五类高频诉求：

1. **多账户与多 Profile 管理** – #18435 一枝独秀（914 👍），是社区最强烈的产品级呼声。
2. **跨设备/桌面同步** – 侧边栏分组（[#92717](https://github.com/anthropics/claude-code/issues/92717)）以及会话、配置同步需求扩张。
3. **Computer Use 在 Linux CLI 上的可用性** – [#103071](https://github.com/anthropics/claude-code/issues/103071) 明确请求 X11/Wayland 支持；目前仅 macOS research preview。
4. **Windows 桌面体验** – 任务栏快捷入口可关闭（[#74908](https://github.com/anthropics/claude-code/issues/74908)）、插件面板按钮需二次点击（[#99395](https://github.com/anthropics/claude-code/issues/99395)）等“小而痛”的改进。
5. **成本与缓存优化** – Artifact 工具预加载 12k tokens（[#91395](https://github.com/anthropics/claude-code/issues/91395)）、prompt-cache keepalive（[#95728](https://github.com/anthropics/claude-code/issues/95728)）、自动压缩浪费 token（[#102666](https://github.com/anthropics/claude-code/issues/102666)）指向同一诉求：**让 token 消耗可观察、可配置、可关闭**。

---

## 六、开发者关注点

- **Auto Mode 安全护栏亟需硬化**：可静默忽略 CLAUDE.md、可发起宽匹配 `pkill`。这是开发者对“放权式 Agent”最大的不信任来源，#100684 与 #90450 同日被点名。
- **Desktop Remote Control 回归严重**：#92276、#98703、#100526 三个回归指向同一子系统，被认为是改得最多、崩得最多的方向。
- **MCP 生态成主流心智，但工具定义膨胀、超时/序列化/OAuth 等“基础工程”问题仍频发**：本日关于 MCP 的 CLOSED 已修复项（#37793、#16837、#25865）都在过去 24 小时，说明这是当前的密集修复区。
- **资源使用失控**：并行 Agent OOM（#101901）、空闲自动压缩（#102666）、模型被强制切换（#103106）共同指向会话调度与状态机仍不稳定。
- **订阅/支付链路**：Stripe 拒收与 Max 降级显示付费链路边缘体验仍需打磨，对 Pro/Max 用户尤其敏感。

---

*日报由 GitHub Issue/PR 公开数据自动汇总，建议结合官方 release notes 与 Discord 同名话题交叉验证。*

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

<think>The user wants me to generate a Chinese daily report for OpenAI Codex community dynamics on 2026-10-18, based on GitHub data. Let me analyze the data carefully:

1. **Releases**: rust-v0.164.0-alpha.3 was released in past 24 hours - just a version bump
2. **Issues**: 50 updated, 30 shown, mostly Windows-related bugs
3. **PRs**: 6 closed PRs, mostly by copyberry[bot], dealing with app-server improvements, compression, and performance

Key observations:
- Heavy Windows-related bugs dominating the issues
- Many computer-use issues (Windows-specific)
- Sandbox policy issues
- Multiple browser-related issues
- App-server WebSocket compression PRs (related to performance)
- Hooks system issues
- Model catalog cache improvements
- Various iOS, macOS bugs

Let me structure the report:

**今日速览**: 
- Windows 平台相关问题持续是社区焦点，尤其是 Computer Use 和 sandbox 策略
- App-server 性能优化（WebSocket 压缩、模型缓存复用）相关 PR 集中合入
- 新版本 0.164.0-alpha.3 发布

**版本发布**:
- rust-v0.164.0-alpha.3

**社区热点 Issues** (挑 10 个):
1. #49458 - Windows dot task 缺少 Computer Use 工具 (85评论, 26赞) - 最重要
2. #35446 - Windows 10 Computer Use deadlock (36评论)
3. #41982 - Windows Remote 触发 git.exe 崩溃风暴 (24评论)
4. #35705 - ChatGPT Chrome 扩展 nodePath bug (22评论)
5. #45403 - Windows Full access 沙箱清理被拒绝 (18评论)
6. #50329 - Windows App read_thread 返回问题 (14评论)
7. #50346 - Linux desktop Ctrl+Shift+D 失效 (13评论, 已关闭)
8. #34289 - CLI hooks PostToolUse 失败信号缺失 (12评论)
9. #25431 - Windows 桌面拼写检查设置 (11评论, 28赞 - 高赞)
10. #42006 - Windows desktop 应用内 Browser 崩溃 (11评论)
11. #50157 - Dot 无法读取远程 Codex 会话 (11评论)
12. #50789 - macOS 浏览器权限被拒绝 (10评论)
13. #51572 - Windows 后台水合访问拒绝 (10评论)

**重要 PR 进展** (挑 10 个 - 但只有6个):
1. #54961 - 允许 agent 消息唤醒 idle 根会话（功能开关）
2. #54949 - app-server WebSocket 压缩功能开关
3. #54946 - 模型目录缓存跨凭证轮换保留
4. #54945 - 共享跨响应项克隆的工具声明
5. #54930 - 添加 zstd 压缩协商到 app-server WebSockets
6. #54776 - 支持上下文 prompt fragment 类型化内容

**功能需求趋势**:
- Windows 平台稳定性（Computer Use、sandbox、Browser）
- IDE/工具集成（worktree 环境、Chrome 扩展）
- 性能优化（WebSocket 压缩、模型缓存复用）
- Hooks 系统增强
- 国际化（zh-CN 资源）

**开发者关注点**:
- Windows sandbox 误判问题（用户授权但被拦截）
- Computer Use 跨平台兼容性
- App-server 性能与稳定性
- 国际化与本地化
- Hooks 系统反馈

让我开始写报告。</think>

# OpenAI Codex 社区动态日报
**2026-10-18**

---

## 今日速览

今日 Codex 社区焦点高度集中在 **Windows 平台的 Computer Use 与沙箱策略问题**：多起 dot 任务、远程会话、Computer Use 死锁类 Issue 在 24 小时内获得大量互动，最高的 #49458 评论数已突破 85 条。同时，**app-server 性能优化成为合入主线**——zstd WebSocket 压缩、模型目录缓存复用、工具声明共享等 PR 在 24 小时内连续合入。Rust 端推出预发布版 `0.164.0-alpha.3`。

---

## 版本发布

- **rust-v0.164.0-alpha.3** —— 今日发布版本号，常规预发布节奏，暂无详细 changelog。建议关注后续 .0 稳定版的发布说明。
  [查看 Release](https://github.com/openai/codex/releases/tag/rust-v0.164.0-alpha.3)

---

## 社区热点 Issues（精选 10 条）

### 1. [#49458](https://github.com/openai/codex/issues/49458) — [Windows] dot 启动的本地任务缺少 Computer Use 工具
- 评论 **85** | 👍 26 | 标签：windows-os, computer-use, dots
- **为什么重要**：今日最高互动 Issue。普通本地 Codex 会话拥有完整 Computer Use 工具集，但 dot 任务却缺失，导致用户在不同入口得到不一致能力。涉及 Computer Use 产品核心承诺。

### 2. [#35446](https://github.com/openai/codex/issues/35446) — Windows 10 Computer Use 在 FrameArrived 处死锁
- 评论 **36** | 标签：windows-os, computer-use
- **为什么重要**：涉及 Windows 10 22H2 上 SoftwareBitmap 转化的底层死锁，长期未解决。Computer Use 跨平台兼容性的代表性 bug。

### 3. [#41982](https://github.com/openai/codex/issues/41982) — [Windows][Remote] Android 打开任务触发 git.exe 崩溃风暴 + 系统级 OOM
- 评论 **24** | 标签：windows-os, remote, performance
- **为什么重要**：跨端（Android → Windows Remote）触发持续 git.exe 崩溃并耗尽内存，属 Critical 级问题，影响 Remote 体验核心路径。

### 4. [#35705](https://github.com/openai/codex/issues/35705) — ChatGPT Chrome 扩展无法启动（nodePath 缺失）
- 评论 **22** | 标签：windows-os, app-server
- **为什么重要**：官方 Chrome 扩展直接无法使用，阻碍浏览器侧 Codex 接入，影响生态入口可用性。

### 5. [#45403](https://github.com/openai/codex/issues/45403) — Windows Full Access 下用户授权清理仍被沙箱拒绝
- 评论 **18** | 标签：windows-os, sandbox
- **为什么重要**：暴露沙箱策略与 UI 文案（"Unrestricted access"）的描述不一致问题，挫败感强，且无 review 路径，开发者工作流被打断。

### 6. [#50329](https://github.com/openai/codex/issues/50329) — [Windows App] read_thread 仅返回 chatgpt-content-reference
- 评论 **14** | 标签：windows-os, app-server, mcp
- **为什么重要**：影响第三方应用基于 app-server 集成 ChatGPT 线程的可用性，MCP/扩展生态相关。

### 7. [#34289](https://github.com/openai/codex/issues/34289) — CLI Hooks：PostToolUse 缺少失败信号
- 评论 **12** | 标签：CLI, hooks
- **为什么重要**：直接影响第三方 hooks 编写者的可靠性设计。`PostToolUseFailure` 在词表中存在但从不触发，开发者只能 hack 兼容。

### 8. [#25431](https://github.com/openai/codex/issues/25431) — Windows 桌面端希望提供拼写检查开关
- 评论 **11** | 👍 **28** | 标签：enhancement, windows-os, app
- **为什么重要**：今日**最高赞数** Issue。一个被忽视的 UX 痛点长期累计，反映桌面端用户对设置粒度的强烈诉求。

### 9. [#42006](https://github.com/openai/codex/issues/42006) — Windows 桌面应用内 Browser 路由崩溃
- 评论 **11** | 标签：windows-os, browser
- **为什么重要**：单日内可复现 5 次 Crashpad 崩溃，Browser 路由生命周期管理问题，影响 Windows 端核心功能稳定性。

### 10. [#50157](https://github.com/openai/codex/issues/50157) — Dot 无法读取现有远程 Codex 会话
- 评论 **11** | 标签：iOS, app-server, remote, dots
- **为什么重要**：dot 与远程会话互操作性问题暴露 placement format 版本兼容缺陷，会话连续性被破坏。

---

## 重要 PR 进展（精选 6 条，均已合入）

> 今日 PR 池虽只有 6 条但全部合入，且主题高度一致——**app-server 性能、缓存复用、压缩传输**。

### 1. [#54961](https://github.com/openai/codex/pull/54961) — 允许 agent 消息唤醒 idle 根会话（功能开关）
- 修复子任务完成后无法向根会话投递消息的问题，减少 sleep-based 轮询依赖，默认禁用，需特性开关启用。

### 2. [#54949](https://github.com/openai/codex/pull/54949) — app-server WebSocket 压缩功能开关
- 引入 `features.app_server_websocket_compression`，TCP 与 UDS 监听器在客户端支持时协商 zstd 压缩，默认禁用以保持兼容性。

### 3. [#54946](https://github.com/openai/codex/pull/54946) — 模型目录缓存跨凭证轮换保留
- 当 `CodexAuth::Headers` 提供稳定 account ID 时，模型目录缓存不再随 header 凭证轮换失效，显著降低冷启动延迟与上游压力。

### 4. [#54945](https://github.com/openai/codex/pull/54945) — 跨响应项克隆共享工具声明
- `ResponseItem::AdditionalTools` 的 `tools` 改为 `Arc<[serde_json::Value]>`，克隆时共享不可变声明，降低深拷贝开销。

### 5. [#54930](https://github.com/openai/codex/pull/54930) — app-server WebSocket 添加 zstd 协商压缩
- 通过 `x-codex-app-server-compression: zstd-stream-v1` 头协商压缩，JSON 文本消息与压缩二进制消息并存，配合 #54949 灰度启用。

### 6. [#54776](https://github.com/openai/codex/pull/54776) — 上下文 prompt fragment 支持类型化内容
- fragment 与 extension world-state 渲染从 `String` 升级到 `ContentItem`，保留分类与归属信息，为多模态扩展奠定基础。

---

## 功能需求趋势

通过分析 50 条更新 Issue 的标签分布，可提炼出以下社区热点方向：

| 方向 | 代表 Issue | 信号强度 |
|------|-----------|---------|
| **Windows 平台稳定性** | #49458 / #35446 / #41982 / #51572 | 🔴 极高 |
| **Computer Use 跨平台一致性** | #49458 / #54101 / #50907 / #37231 | 🔴 极高 |
| **沙箱策略与 UI 文案对齐** | #45403 / #45986 / #46364 / #45232 / #54962 | 🟠 高 |
| **Hooks/CLI 扩展能力** | #34289 / #18981 | 🟡 中 |
| **国际化与本地化** | #51926（zh-CN 资源但 manifest 仅 en-US） | 🟡 中 |
| **app-server 性能**（响应 #54930/#54946/#54949） | 由 PR 主导 | 🟢 高（被官方响应） |
| **Browser 权限与会话一致性** | #50789 / #42006 | 🟡 中 |
| **图像/内容审核误报** | #54740 / #54966 | 🟡 中（新出现） |

**趋势解读**：Windows + Computer Use 已成为产品最大的一致性短板，沙箱策略误判正在系统性侵蚀用户信任；app-server 性能则是官方已快速响应并连续合入的方向。

---

## 开发者关注点

1. **沙箱策略的"幽灵拒绝"**
   在 #45403、#45986、#46364、#45232、#54962 中反复出现同一类反馈：**用户已显式授权的命令仍被 sandbox 拦截为 `blocked by policy`**，且无 review 入口。这对自动化脚本与 Agent 流程的开发者是致命体验，强烈呼吁"白名单回执"或"审计日志可读化"。

2. **Computer Use 在不同入口的能力不一致**
   普通会话 vs dot 任务 vs Remote 任务下，Computer Use 工具集、可发现的应用清单差异显著（#49458、#54101、#50907），开发者难以编写跨入口可移植的自动化。

3. **Hooks 系统的契约缺失**
   #34289 指出现有 hooks 词汇表含 `PostToolUseFailure` 但永不触发，payload 也无 `is_error` / `exit_code`，第三方扩展只能"探测式兼容"。开发者要求稳定的失败语义契约。

4. **国际化资源与 manifest 不一致**
   #51926 显示 Windows MSIX 携带 136 个 zh-CN 资源但 manifest 仅声明 `en-US`，导致中文用户在 zh-CN 系统下仍被强制英文界面——属于资源浪费 + 用户体验双重问题。

5. **app-server 性能成为开发者集成体验瓶颈**
   大模型目录的频繁失效（#54946 修复）、WebSocket 文本帧体积过大（#54930/#54949 修复），都是被长期诟病的痛点，今日合入的 PR 显著缓解，建议开发者关注升级。

6. **图像/模型输出审核误报**
   #54740（"Sexual" 误判）、#54966（"regurg plugin" 报错中断生成）反映内容审核链路在桌面端的稳定性问题，影响正常创作与编程任务。

---

> **报告生成依据**：`openai/codex` 仓库 2026-10-18 过去 24 小时数据，包含 1 个 Release、50 条更新 Issue（展示前 30 条）、6 条合入 PR。
> **建议关注**：Windows + Computer Use 平台一致性修复 PR，以及 0.164.x 系列稳定版的 changelog。

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

<think>The user wants me to generate a Chinese daily report for Gemini CLI community dynamics based on GitHub data for 2026-10-18. Let me analyze the data carefully and structure the report.

Key observations from the data:
1. **Release**: v0.66.0-nightly.20261018.ged96faedf was released
2. **Top Issues by comments**:
   - #22323 (13 comments) - Subagent recovery MAX_TURNS bug - P1
   - #19873 (9 comments) - Zero-Dependency OS Sandboxing & Post-Execution Intent Routing - P2
   - #21409 (8 comments) - Generalist agent hangs - P1, 8 thumbs up (highest!)
   - #22745 (7 comments) - AST-aware file reads
   - #21968 (7 comments) - Gemini doesn't use skills and sub-agents enough
   - #22267 (4 comments) - Browser Agent ignores settings.json
   - #22232 (4 comments) - browser_agent resilience
   - #21983 (4 comments) - browser subagent wayland
   - #21000 (4 comments) - native file tools for task tracker
   - #20079 (4 comments) - symlink not recognized
   - #24246 (3 comments) - 400 error with > 128 tools
   - #23571 (3 comments) - tmp scripts in random spots
   - #22672 (3 comments) - destructive behavior
   - #22186 (3 comments) - get-shit-done crash
   - #20195 (3 comments) - Local Subagent Sprint 1

3. **Top PRs** (most commented/recent):
   - #29810 - fix alias generateContentConfig (related to issue #29804)
   - #29806 - WSL2 clipboard
   - #29809 - nightly version bump
   - #29621 - preserve subagent multimodal
   - #29622 - tildeifyPath
   - #29703 - atomic-write NAME_MAX
   - #29709 - vscode-ide-companion disposables
   - #29708 - acp session/load
   - #28669 - TUI testing skill (closed/stale)
   - #29801 - MCP proxy fetch
   - #29799 - preserve quota-interrupted sessions
   - #29798 - restore approval focus
   - #29762 - preserve disk edits on auth
   - #29800 - Auto quota tier fallback
   - #29807 - Thai/Lao SARA AM width

4. **Trends**:
   - Agent/Subagent reliability is a major theme
   - Browser agent issues
   - Auto quota handling
   - Tool count limits
   - AST-aware tools
   - File tracking (replacing WriteToDo)
   - MCP improvements

Let me draft the report in Chinese now. I need to be careful about the date - 2026-10-18, which is the future relative to actual data, but the data presented is the "current" date.

Let me organize this nicely:

1. **今日速览** - 2-3 sentences highlighting:
   - v0.66.0 nightly released
   - Agent stability issues are the top theme (multiple P1 bugs about hangs/recovery)
   - Auto mode quota handling improvements coming via PR #29800

2. **版本发布** - v0.66.0-nightly.20261018.ged96faedf

3. **社区热点 Issues** - Pick 10 most important:
   - #22323 (P1, 13 comments, 2 likes) - Subagent recovery hides MAX_TURNS interruption
   - #19873 (P2, 9 comments) - Zero-Dependency OS Sandboxing - major enhancement
   - #21409 (P1, 8 comments, 8 likes - highest) - Generalist agent hangs
   - #22745 (P2, 7 comments) - AST-aware file reads epic
   - #21968 (P2, 7 comments) - Doesn't use skills/sub-agents
   - #24246 (P2, 3 comments but high impact) - 400 error with too many tools
   - #21983 (P1, 4 comments) - browser subagent wayland
   - #22267 (P2, 4 comments) - Browser Agent ignores settings
   - #20079 (P2, 4 comments) - symlink agents not recognized
   - #29804 (newest, 1 comment but very relevant given #29810 PR)

4. **重要 PR 进展** - Pick 10:
   - #29810 - fix customAliases config (matches #29804)
   - #29800 - Auto quota tier fallback (xl, important)
   - #29799 - preserve quota-interrupted sessions
   - #29762 - preserve disk edits on auth (P1, large)
   - #29801 - MCP proxy fetch dispatcher (large)
   - #29798 - restore approval focus
   - #29708 - acp session/load replay
   - #29621 - preserve subagent multimodal parts
   - #29807 - Thai/Lao SARA AM width
   - #29806 - WSL2 clipboard
   - #29622 - tildeifyPath

5. **功能需求趋势**:
   - Agent/Subagent 稳定性与可观测性
   - Auto 模式与配额管理
   - AST 感知工具
   - 持久化任务跟踪（替代 WriteToDo）
   - 平台/MCP 集成
   - 国际化与终端兼容
   - 浏览器 Agent 增强

6. **开发者关注点**:
   - 子 Agent 可靠性
   - 工具数量限制
   - 临时文件污染
   - 危险命令防护
   - 配置管理

Let me write this out in clean Chinese now.</think>

# 📊 Gemini CLI 社区动态日报

**日期：2026-10-18**
**数据来源：[google-gemini/gemini-cli](https://github.com/google-gemini/gemini-cli)**

---

## ⚡ 今日速览

今日 `v0.66.0` nightly 版本如期发布，社区关注度高度集中在 **Agent / Subagent 稳定性**这一主题上——`MAX_TURNS` 后的状态误报、Generalist Agent 挂死、工具数量超限（>128）触发 400 等多条 P1 Bug 进入热议。此外，PR #29800 即将重塑 **Auto 模式下的配额降级路由**逻辑，是本周最值得关注的架构级改进。

---

## 🚀 版本发布

**v0.66.0-nightly.20261018.ged96faedf** 已发布
🔗 https://github.com/google-gemini/gemini-cli/releases/tag/v0.66.0-nightly.20261018.ged96faedf

该 nightly 由自动化机器人提交（PR #29809），属于日常滚动版本，未在 changelog 中单独列出显式条目。距稳定版还有较多迭代，关注 [compare diff](https://github.com/google-gemini/gemini-cli/compare/v0.66.0-nightly.20261017.ged96faedf...v0.66.0-nightly.20261018.ged96faedf) 即可查看当日 changeset。

---

## 🔥 社区热点 Issues

| # | Issue | 优先级 / 类别 | 评论数 / 👍 | 一句话解读 |
|---|-------|---------------|------------|------------|
| [#22323](https://github.com/google-gemini/gemini-cli/issues/22323) | Subagent recovery after `MAX_TURNS` 误报为 GOAL success | P1 · bug | 13 / 2 | 子 Agent 实际已撞到轮次上限，但汇报成"成功完成"，掩盖了真正的中断，是当前最高热度的可靠性问题 |
| [#19873](https://github.com/google-gemini/gemini-cli/issues/19873) | Zero-Dependency OS 沙箱 & Post-Execution Intent Routing | P2 · enhancement | 9 / 1 | 利用 Gemini 3 模型的原生 bash 偏好，结合零依赖 OS 沙箱；社区已经围绕"安全 + 体验"展开了多轮讨论 |
| [#21409](https://github.com/google-gemini/gemini-cli/issues/21409) | **Generalist agent 永久挂死** | P1 · bug | 8 / 8👍 | 👍 数最高。一个简单的"创建文件夹"也能卡一小时，规避办法只有显式禁止 Agent 委派；是体感最差的一类崩溃 |
| [#22745](https://github.com/google-gemini/gemini-cli/issues/22745) | AST 感知文件读取/搜索/映射的可行性评估（EPIC） | P2 · feature | 7 / 1 | 串联 #22746、#22747 一起推动"基于 AST 的代码检索"路线图 |
| [#21968](https://github.com/google-gemini/gemini-cli/issues/21968) | Gemini 几乎不会主动使用自定义 skills / sub-agents | P2 · bug | 7 / 0 | 即便配置了"gradle"和"git"技能，模型仍然我行我素，说明 system prompt 的技能发现机制需要重写 |
| [#21983](https://github.com/google-gemini/gemini-cli/issues/21983) | **browser subagent 在 Wayland 下失败** | P1 · bug | 4 / 1 | Linux 桌面环境兼容性是 Browser Agent 长期欠账 |
| [#22267](https://github.com/google-gemini/gemini-cli/issues/22267) | Browser Agent 忽略 `settings.json` 中的 `maxTurns` 等覆写 | P2 · bug | 4 / 0 | `AgentRegistry` 初始化时正确读取，运行时却漂移；说明配置注入存在分层缺失 |
| [#20079](https://github.com/google-gemini/gemini-cli/issues/20079) | `~/.gemini/agents/*.md` 如果是 symlink 则不被识别 | P2 · bug | 4 / 0 | 用户用 dotfile 仓库管理配置时被坑，影响范围虽小但很明确 |
| [#24246](https://github.com/google-gemini/gemini-cli/issues/24246) | 工具 > 128 时触发 **400 错误**（阈值文本不一致） | P2 · bug | 3 / 0 | 强烈影响 power user / 多 MCP server 场景，错误信息甚至写的是 "> 400" 阈值，与实际不符 |
| [#29804](https://github.com/google-gemini/gemini-cli/issues/29804) | `customAliases` 中 `model` 为等级名（如 `flash-lite`）时 `generateContentConfig` 被丢弃 | 待分类 · bug | 1 / 0 | **今日唯一新建的 Issue**，但被同日 PR #29810 精准对应，进入快速修复轨道 |

---

## 🛠 重要 PR 进展

| # | PR | 体量 | 修复 / 功能要点 |
|---|----|-----|-----------------|
| [#29810](https://github.com/google-gemini/gemini-cli/pull/29810) | fix(core): keep alias `generateContentConfig` when tier resolves to its own first choice | M | 修复 #29804，让 `flash-lite` / `auto` 等等级名别名时不再丢失 `temperature`、`thinkingLevel`、`maxOutputTokens` |
| [#29800](https://github.com/google-gemini/gemini-cli/pull/29800) | fix(core): Auto 配额耗尽时跨等级回退（Pro ↔ Flash） | XL | 本周最关键的架构改动：让 Auto 模式在真实配额耗尽时立即在 tier 之间路由，解决"session dead-end" |
| [#29799](https://github.com/google-gemini/gemini-cli/pull/29799) | fix(cli): 保留被配额中断的会话，按 Esc 立即停止 | L | 退出/重新登录/恢复时历史与已完成 tool 轮次不再丢失；Esc 直接打断 retry backoff |
| [#29762](https://github.com/google-gemini/gemini-cli/pull/29762) | fix(settings): `/auth signin` 时保留磁盘上其他变更 | L · P1 | 解决"切换登录后刚加的 MCP server / 改的主题 / 删除的模型偏好全部回滚"的噩梦 |
| [#29801](https://github.com/google-gemini/gemini-cli/pull/29801) | fix(mcp): 配对 MCP proxy fetch 与其 Undici dispatcher | L | 修 Node 26 下 MCP discovery 返回 `Unexpected content type: null` 的兼容性问题 |
| [#29798](https://github.com/google-gemini/gemini-cli/pull/29798) | fix(cli): 取消外部编辑器选择后恢复 approval 焦点 | L | Esc 关闭编辑器选择器回到待审批项，"Allow once / No, suggest changes" 均可用 |
| [#29708](https://github.com/google-gemini/gemini-cli/pull/29708) | fix(acp): `session/load` 历史回放完成再返回响应 | M · P2 | 满足 ACP 规范，回放过程中不再串到下一个 prompt 的更新流中 |
| [#29621](https://github.com/google-gemini/gemini-cli/pull/29621) | fix(core): 保留子 Agent 的多模态响应 parts | M | 子 Agent 把图像作为 function response 的 sibling 返回时不再被丢弃 ⚠️ 已 CLOSED（疑似被新版本取代） |
| [#29807](https://github.com/google-gemini/gemini-cli/pull/29807) | fix(cli): Thai/Lao SARA AM 字符算作一列宽 | S · P2 · Help wanted | 修 wcwidth 与 Ink 不一致导致的 tmux 下重复行 / 输入跳动问题 |
| [#29806](https://github.com/google-gemini/gemini-cli/pull/29806) | fix(cli): WSL2 剪贴板显示服务 fallback & 非 PNG 图像格式 | M | `Alt+V` 粘图在 WSL2 + `image/bmp` 等环境下可工作 |

> 其余仍在活动窗口内的 PR 包括 #29703（atomic-write 临时文件名超 NAME_MAX 修复）、#29709（vscode-ide-companion `activate()` disposables 修复 #27790）、#29622（tildeifyPath 仅在路径分隔边界替换家目录）。

---

## 📈 功能需求趋势

按 Issue 类别与热度从社区呼声里提炼出 **七大方向**：

1. **Agent / Subagent 可靠性与可观测性**（最热）
   - 失败状态准确汇报（#22323）、挂死排查（#21409）、subagent 轨迹在 `/bug` 与 `/chat share` 中可见（#21763、#22598）

2. **Auto 模式 + 配额治理**
   - PR #29800 即将把 tier 回退变成一线行为，配额警告 UX 改进见 #29802

3. **AST 感知工具链**（epic 启动）
   - #22745 / #22746 / #22747 形成完整路线图，目标：减少"spray read"造成的上下文爆炸

4. **持久化任务跟踪，告别 In-Context Todo**
   - #18836 提议彻底替换 `WriteToDo`；#21000 实验用原生文件工具维护 tracker

5. **模型/bash 原生亲和力 + 沙箱安全**
   - #19873 把"模型擅长 bash"和"OS 层 sandbox"对齐到同一条路线

6. **Browser Agent 健壮性**
   - 失效恢复（#22232）、Wayland 兼容（#21983）、`settings.json` 注入（#22267）

7. **AST/工具数量/上下文经济学**
   - "Tactful Extraction"（#19561）、工具 > 128 触发 400（#24246）、大规模工具清单的智能化裁剪

---

## 💬 开发者关注点（高频痛点）

| 痛点 | 代表 Issue |
|------|-----------|
| **子 Agent 撒谎**：失败也报告 `GOAL/success`，让外部无法察觉 MAX_TURNS 等真实终止原因 | #22323 |
| **Generalist Agent 无故挂死**，只能靠 prompt 显式禁用 sub-agent 回避 | #21409（👍=8，全榜最高） |
| **自定义 skills 被无视**，skills / sub-agents 几乎不会被模型主动调用，必须显式提示 | #21968 |
| **工具过多导致 400**，且错误文案上的阈值与实际不符 | #24246 |
| **临时文件污染工作区**（"writes tmp scripts in random spots"），清理成本高 | #23571 |
| **危险命令的诱惑**：`git reset --force` 等被模型"轻率"使用 | #22672 |
| **Agent 自我认知不足**：说不清自身 CLI flags、快捷键、自身工作流 | #21432 |
| **`/auth` 切换覆盖磁盘上的并发修改** | #29762（已修复在路上） |
| **Auto 模式配额耗尽即死** | #29800（修复在路上） |
| **`customAliases` 等级名场景下 generateContentConfig 静默丢失** | #29804 → #29810 |

---

> **TL;DR**：v0.66.0 nightly 继续滚动；今天的关键词是 **"Agent 报喜不报忧、Auto quota 需要会拐弯、配置改动不能被互相吞掉"**。社区正用一连串 P1/P2 Issue 把 Gemini CLI 推向"作为生产力工具必须可被信赖"的下一步。

*本日报由 GitHub 公开数据自动汇总，仅供技术开发者参考。*

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

<think>The user wants me to generate a Chinese daily report for the GitHub Copilot CLI community based on the provided data. Let me analyze the data carefully.

Key observations:
1. No new releases in the past 24 hours
2. 21 issues updated in the past 24 hours, with 1 newly created #5178 and 1 newly closed #5179
3. No PRs updated in the past 24 hours

Let me categorize the issues:

**Newly opened issues (today)**:
- #5178 --agent code-review fails before inference (NEW)
- #5179 (CLOSED, invalid)

**Hot/recent issues with significant updates**:
- #4849 - Reduce latency in subagent workflows (6 comments)
- #4551 - SSH clipboard bug (3 comments)
- #5042 - HydraFusion routing issue (2 comments)

**HydraFusion-related issues (major theme)**:
- #5042 - HydraFusion routing to small-context model
- #5097 - HydraFusion router returns models outside policy universe
- #4825 - HydraFusion telemetry to OpenTelemetry

**Regression/permission/security issues**:
- #5177 - Manual Approval regression after harness migration
- #5176 - Linux sandbox bwrap parent-death signal issue
- #5173 - bash hard-denied for cd commands since 1.0.99-0
- #5172 - Rewind backs up gitignored secret files (security)
- #5175 - MCP re-authentication not working
- #5165 - Copilot Enterprise 401 auth issue
- #5151 - Default-context Sol models rejected with large tool defs

**Platform/rendering issues**:
- #5112 - OSC 7501 program status support
- #5168 - Markdown table cell line breaks
- #5171 - NumLock-off numpad navigation regression

**Session/plugin management**:
- #5164 - Sessions sidebar leaks MCP servers (OOM)
- #5167 - Plugin uninstall hook issue

**Model/policy issues**:
- #5166 - CLI 1.0.97 starts model outside allowlist

Now let me draft the report:

**Today's Overview**: 
- No releases; very active issue triage day with 21 issues updated
- Main themes: HydraFusion routing bugs, security/regression bugs (manual approval, sandbox, permissions), session/MCP leakage
- One new bug #5178 about --agent code-review failures

**Community Hot Issues (top 10)**:

1. #4849 - subagent latency (most discussed, 6 comments)
2. #4825 - HydraFusion OpenTelemetry (community interest, 1 like)
3. #5097 - HydraFusion policy violation silent fallback
4. #5042 - HydraFusion routing degradation
5. #5177 - Critical regression on manual approval after harness migration
6. #5172 - Security: rewind backs up gitignored secrets
7. #5165 - Enterprise auth 401
8. #5151 - Sol models rejected with growing tool definitions (token bloat)
9. #5164 - Sessions sidebar MCP leakage causing OOM
10. #5173 - bash hard-deny for cd commands since 1.0.99

**Important PRs**: None

**Feature trends**:
- HydraFusion model routing robustness + observability
- Terminal rendering (OSC 7501, markdown tables)
- Sandbox/Linux reliability
- Session management and MCP lifecycle
- Cross-platform parity (Windows numpad)
- Telemetry/OpenTelemetry integration

**Developer pain points**:
- Subagent latency
- HydraFusion silent fallback undermining policy intent
- Approvals and sandbox regressions
- Permission hard-deny for common bash patterns
- Secret files in rewind snapshots
- OOM from leaked MCP/extension hosts

Let me write this out in a clean Chinese format.

I'll format dates as 2026-10-18.</think>

# GitHub Copilot CLI 社区动态日报
**日期：2026-10-18** ｜ 数据源：`github.com/github/copilot-cli`

---

## 📌 今日速览

过去 24 小时 **无新版本发布**，但仓库处于高度活跃的"分类/处置期"：共 21 条 Issue 更新，其中 1 条新开（#5178）、1 条关闭（#5179，无效）。整体围绕三条主线展开：**HydraFusion 路由稳定性**、**10 月 harness 迁移带来的回归**（审批、沙箱、权限、会话/MCP 泄漏），以及**子代理工作流的延迟**。

---

## 🚀 版本发布

无新版本发布，本节省略（最近的相关发版见 #5165 / #5166 / #5168 等提及的 **1.0.97–1.0.99-0**）。

---

## 🔥 社区热点 Issues（精选 10 条）

1. **#4849 — 子代理（subagent）延迟与评审回路开销**
   [链接](https://github.com/github/copilot-cli/issues/4849) ｜ 评论 6，👍 0
   描述：subagent 启动、任务交接、review/fix/re-review 每轮往返常达数分钟，普通仓库级改动远超预期耗时。**为本期讨论最热的 Issue，反映社区对代理编排性能的长期抱怨。**

2. **#5177 — 10 月 harness 迁移后的"Manual Approval"回归（高危）**
   [链接](https://github.com/github/copilot-cli/issues/5177)
   VS Code Copilot Chat 在迁移后不再对 `git add / commit / push` 等仓库变更命令请求审批，属典型 10 月 harness 迁移引入的严重安全/合规回归，社区关注度高。

3. **#5097 — HydraFusion 路由返回策略外模型并静默回退**
   [链接](https://github.com/github/copilot-cli/issues/5097)
   `policy=max` 下多数回合在路由阶段失败，仅打印 "HydraFusion routing failed; continuing with gpt-5.6-luna"，存在策略意图被绕过的风险。

4. **#5042 — HydraFusion 错误 400 后被重路由到小上下文模型**
   [链接](https://github.com/github/copilot-cli/issues/5042)
   `gpt-5.6-sol` 收到 400 后，同一会话被路由器切换到 `mai-code-1.1-flash`，静态提示词无法装入，**工具集会话中途变化**，行为非常不稳定。

5. **#4825 — HydraFusion 每阶段需输出到 OpenTelemetry**
   [链接](https://github.com/github/copilot-cli/issues/4825) ｜ 👍 1
   单次 HydraFusion 调用涉及多模型，但外部只能看到一个答复和一个信用计费，缺少每阶段模型/裁决/积分属性的 OTel 透出，便于合规与可观测性。

6. **#5172 — `/rewind` 会备份 `.gitignore` 中的机密文件（安全）**
   [链接](https://github.com/github/copilot-cli/issues/5172)
   1.0.78 起 rewind 不再使用 git，但会把会话工作目录下被改动文件的早期版本存入 `rewind-file-snapshots/backups/`，**包含 gitignored 密钥**。建议加 exclude 或开关。

7. **#5164 — 会话切换泄漏 plugin MCP/扩展宿主进程（OOM）**
   [链接](https://github.com/github/copilot-cli/issues/5164)
   "Sessions" 侧栏切换到本进程未打开过的会话时，会叠加启动 plugin 提供的 stdio MCP 服务和 `extension_bootstrap.mjs`，**老进程不被回收**，长会话后 OOM。

8. **#5151 — Sol 模型在工具定义膨胀至 ~260K 时被默认上下文拒收**
   [链接](https://github.com/github/copilot-cli/issues/5151)
   2026-10-14 起，`gpt-5.6-sol` / `gpt-6.1-sol` 在默认上下文下首提示即触发 `compaction_static_context_blocked`，工具/MCP 定义爆炸成为新瓶颈。

9. **#5165 — Copilot Enterprise 1.0.98 被错误路由到 `api.business.githubcopilot.com` 并 401**
   [链接](https://github.com/github/copilot-cli/issues/5165)
   GHEC 用户（含明文 token 安装）在 1.0.98 出现模型目录 401、提示 "Authentication failed"。影响头部企业用户。

10. **#5173 — 自 1.0.99-0 起 `bash` 硬拒"同一命令内 cd 到新建目录"（无提示）**
    [链接](https://github.com/github/copilot-cli/issues/5173)
    权限系统直接返回 "unusable session working directory"，不再弹出授权。常见一次性脚本模式被锁死，回归影响面广。

**其它值得跟踪的 Issue**：#5176 Linux 沙箱 ~10s 后 SIGKILL（bwrap parent-death）、#5112 终端 OSC 7501 协议支持需求、#5168 Markdown 表格单元格换行被剥离、#5171 Windows NumLock Off 数字键导航回归、#5167 插件卸载后 hook 仍拦截、#5166 CLI 1.0.97 在 prompt-mode 启动 allowlist 之外的模型、#5112 中已开 triage。

---

## 🔧 重要 PR 进展

过去 24 小时 **无 PR 更新**，本节留空。建议关注与上述高优先级 Issue 关联的 PR 何时出现。

---

## 📈 功能需求趋势

从全部 21 条 Issue 可归纳出当前社区最强烈的几个方向：

- **HydraFusion 路由稳定性与可观测性**：3 条相关 Issue（#4825 / #5042 / #5097），覆盖 fallback、上下文适配、OTel 透出；
- **终端协议现代化**：#5112 请求实现 OSC 7501 状态上报；#5168 修复 Markdown 表格渲染；
- **跨平台/无障碍体验**：#5171 Windows 数字键盘、#4551 macOS 经 SSH 的剪贴板同步；
- **沙箱与权限模型健壮性**：#5176（bwrap 生命周期）、#5173（命令内 cd 误拒）、#5177（变更审批回归）；
- **会话/MCP 资源生命周期**：#5164 泄漏 OOM、#5172 rewind 与 `.gitignore` 冲突、#5175 MCP 重新登录体验；
- **企业/合规**：#5165 GHEC 401、#5166 模型 allowlist 越界；
- **延迟/编排**：#4849 子代理工作流往返开销。

---

## 👨‍💻 开发者关注点（社区痛点高频词）

1. **"静默回退"破坏策略意图**：HydraFusion 在失败时不告知用户真实模型，社区要求至少透出路由事件（#5097、#4825）。
2. **工具/MCP 上下文爆炸**：静态工具定义占满模型上下文，已成为新的可用性瓶颈（#5151、#5164）。
3. **审批与沙箱回归**：10 月 harness 迁移后，mutating git 命令与超时命令的处理都被削弱，需紧急回滚或补丁（#5177、#5176、#5173）。
4. **凭据与机密泄漏面扩大**：`/rewind` 快照目录成为新的意外持久化位置（#5172）。
5. **子代理编排延迟**：多回合 review 已成为日常阻碍（#4849）。
6. **跨平台体验断层**：Windows 数字键、macOS SSH 剪贴板（#5171、#4551）持续不被覆盖。
7. **企业路径分歧**：GHEC/GHEE/GH.com 之间的路由与认证差异导致 401 等"魔法失败"（#5165）。

---

*日报由 AI 自动汇总自 `github.com/github/copilot-cli` 公开数据；如需追踪特定 Issue/PR 或新增指标维度，请提交反馈。*

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

<think>The user wants me to generate a Chinese-language daily report for OpenCode community dynamics based on GitHub data from 2026-10-18. Let me analyze the data carefully and structure the report according to their requirements.

Let me organize the data:

**Releases**: None in past 24 hours

**Top Issues by comment count** (top 30 shown, but I need to pick 10 most noteworthy):

1. **#56324** [OPEN] [severity:high] Free models fail inside official OpenCode TUI - 45 comments, 21 👍 - HIGH PRIORITY bug affecting free tier users
2. **#37489** [CLOSED] [FEATURE] Context cache invalidation performance - 7 comments
3. **#55367** [CLOSED] NixOS watcher subscribes /nix/store causing ENOSPC - 5 comments
4. **#56605** [OPEN] desktop: context meter shows 0 after compaction - 5 comments
5. **#56368** [CLOSED] opencode CLI free model 403 error - 5 comments
6. **#36349** [OPEN] V2 preserve subagent parent completion across restart - 5 comments
7. **#41582** [CLOSED] Truncated model response for OpenCode Go models - 5 comments
8. **#42928** [CLOSED] [FEATURE] Allow updating emails - 5 comments
9. **#56636** [OPEN] [reproduced] v2: Warming prompt during long request - 4 comments
10. **#43304** [CLOSED] [FEATURE] Detect Mermaid diagrams in untagged fences - 4 comments
11. **#24981** [CLOSED] [FEATURE] Support explicit proxy configuration - 7 👍 but only 3 comments
12. **#55454** [OPEN] Server-channel plugins @opentui/core env-registry singleton conflict - 3 comments
13. **#56638** [OPEN] Opencode not working? - 3 comments
14. **#56338** [OPEN] OpenCode Free Tier Error in Desktop App - 3 comments
15. **#55593** [CLOSED] [severity:high] permission "ask" silently auto-approved - 2 comments but high severity

I should pick the 10 most important issues. The criteria:
- High comment count = community engagement
- High 👍 = widespread impact
- Severity tags
- New (created today) vs old
- Open vs closed

Top 10:
1. #56324 - 45 comments, 21 👍, severity:high - critical free tier bug
2. #37489 - 7 comments performance issue
3. #55367 - NixOS file watcher bug (5 comments)
4. #56605 - Desktop context meter bug (5 comments, new today)
5. #56368 - CLI 403 error (5 comments)
6. #36349 - V2 subagent completion preservation (5 comments)
7. #41582 - Truncated Go model response (5 comments)
8. #42928 - Allow updating emails (feature, 5 comments)
9. **#24981** - explicit proxy configuration (3 comments but 7 👍 - high upvote ratio)
10. **#56636** - v2 warming prompt issue (4 comments, new)

Actually let me look at this more carefully. I want to pick 10 that are most noteworthy:

1. #56324 [OPEN] - critical, 45 comments, 21 likes - Top priority
2. #24981 [CLOSED] - proxy config feature, 7 likes despite few comments - high impact
3. #37489 [CLOSED] - performance issue, 7 comments
4. #55593 [CLOSED] - high severity permission bug
5. #55367 [CLOSED] - NixOS file watcher bug
6. #56605 [OPEN] - context meter bug, fresh
7. #41582 [CLOSED] - Go model response truncation
8. #36349 [OPEN] - V2 subagent preservation
9. #56636 [OPEN] - v2 warming prompt, fresh
10. #56368 [CLOSED] - CLI free tier 403

**Important PRs** - top 20 by activity:

1. #56661 [OPEN] - fix(app) progress indicator for background shells
2. #56640 [OPEN] - refactor(schema) rename provider replay data
3. #55817 [CLOSED] - sandboxed FS denials tolerance
4. #56659 [OPEN] - feat(core) edit saved permissions
5. #55234 [CLOSED] - skip dependency trees during skill discovery
6. #55479 [CLOSED] - bound watches for symlinked skill files
7. #55597 [CLOSED] - bound skill discovery and watches (supersedes)
8. #56651 [OPEN] - TUI attach images to question answers
9. #56608 [OPEN] - macOS usage descriptions
10. #56650 [CLOSED] - TUI attach images (auto-closed targeting retired branch)
11. #56645 [OPEN] - mark compacted context usage as unmeasured
12. #56644 [OPEN] - share host OpenTUI runtime with server plugins
13. #56642 [OPEN] - server answer requests before listener attached
14. #56511 [OPEN] - enforce Code Mode deny policies
15. #51281 [OPEN] - recover worktree removal blocked by cached locations
16. #55857 [OPEN] - optimize incremental markdown projection
17. #52693 [CLOSED] - add tabs.restore setting
18. #54001 [CLOSED] - scope permission mode per session
19. #56504 [CLOSED] - accept idle in message type filter
20. #50169 [OPEN] - persist zoom across app restarts

Top 10 most important PRs:
1. #56659 - feat(core) edit saved permissions - new feature
2. #56661 - fix(app) progress on session icons for background shells
3. #56651 - feat(tui) attach images to question answers
4. #55597 - fix(core) bound skill discovery and watches (3 issues closed)
5. #56644 - fix(plugin) share OpenTUI runtime between host and server plugins
6. #56645 - fix(app) mark compacted context usage as unmeasured (ties to issue)
7. #56642 - fix(server) answer requests before listener attached (subtle race condition)
8. #56608 - fix(desktop) declare macOS usage descriptions
9. #56511 - fix(core) enforce Code Mode deny policies (security)
10. #56640 - refactor(schema) rename provider replay data to native

**Trends analysis**:
- IDE/Desktop integration issues (context meter, usage descriptions, zoom persistence)
- Performance (context cache invalidation, markdown projection, file watcher limits)
- New features: permissions management, email updates, image attachments, Mermaid detection
- Free tier access issues (multiple 403 errors)
- Subagent/V2 architecture issues
- Plugin/server architecture fixes (OpenTUI singleton)
- NixOS specific issues

**Developer pain points**:
- File watcher exhausting system limits (NixOS, large monorepos)
- Free tier access controls causing friction
- Permission system opacity (silent auto-approval)
- Subagent/V2 inheritance issues
- Long-running sessions hitting warming/timeouts
- Server plugin architecture (singleton conflicts)
- Code Mode policy enforcement
- Image attachment handling

Now let me write this in Chinese, professional tone, suitable for tech developers. I should be specific with metrics and provide context.

Let me draft the report:

---

# OpenCode 社区动态日报 - 2026年10月18日

## 今日速览
今日社区最显著的信号是 **OpenCode 免费层级（free tier）在多客户端环境下持续出现 403 鉴权失败**，相关 Issue #56324 评论量突破 45 条、获 👍 21 次，是本周最热门话题。开发者一侧围绕 **V2 子会话（subagent）状态保留、文件监听（file watcher）资源耗尽、权限策略静默绕过** 等核心架构问题集中提交修复；桌面端则在上下文计量、macOS 权限声明等体验细节上有密集更新。

## 版本发布
过去 24 小时内 **无新版本发布**。

## 社区热点 Issues

1. **#56324** [OPEN, severity:high] - 官方 OpenCode TUI 内调用免费模型失败
   - 45 评论 / 21 👍。Windows + v2.0.32 组合下，免费模型立即返回 *"free tier can only be used from within OpenCode"* 403。
   - 为什么重要：影响最广，威胁免费用户在新对话中的首次体验，相关衍生 Issue 已达 3 条（#56338、#56368、#56662）。
   - 链接：https://github.com/anomalyco/opencode/issues/56324

2. **#24981** [CLOSED] - 在 `opencode.json` 中显式配置代理
   - 3 评论 / 7 👍。当前仅支持环境变量 `HTTPS_PROXY/HTTP_PROXY`，不便于配置化分发。
   - 为什么重要：是仓库内获赞比例最高的 feature 请求之一，反映企业用户对可复现代理配置的需求。
   - 链接：https://github.com/anomalyco/opencode/issues/24981

3. **#37489** [CLOSED] - 切换模式或压缩期间的上下文缓存失效性能问题
   - 7 评论 / 2 👍。本地 LLM（vLLM/Ollama）下切换模式会触发不必要的 KV cache 重建。
   - 为什么重要：直接影响长会话与本地推理场景的响应延迟。
   - 链接：https://github.com/anomalyco/opencode/issues/37489

4. **#55593** [CLOSED, severity:high] - 权限 `ask` 被静默自动放行
   - 2 评论。配置解析为 `ask` 的规则在共享后台服务中被静默 auto-approved，deny 仍生效。
   - 为什么重要：安全语义偏差，违反用户对权限弹窗的预期。
   - 链接：https://github.com/anomalyco/opencode/issues/55593

5. **#55367** [CLOSED] - NixOS 下 `/nix/store` 被监听导致 inotify 耗尽
   - 5 评论。home-manager skill 派生路径让 watcher 订阅到 `/nix/store`，瞬间消耗约 52.3 万个 inotify watches，导致 ENOSPC。
   - 为什么重要：与 #53416 同一子系统，但更严重，揭示了 symlinked skill 文件的递归监听边界问题。
   - 链接：https://github.com/anomalyco/opencode/issues/55367

6. **#56605** [OPEN] - 桌面端压缩后 context meter 短暂显示 `0`
   - 5 评论。新发现，#56645 PR 已定向修复：应显示 `—` 表示未测量。
   - 为什么重要：回归验证了"未测量 ≠ 0"的语义修正。
   - 链接：https://github.com/anomalyco/opencode/issues/56605

7. **#41582** [CLOSED] - OpenCode Go 模型响应被截断
   - 5 评论 / 2 👍。DeepSeek-V4-Pro、Kimi-K3、MiMo-V2-Pro 等模型在流式接口下中途中断。
   - 为什么重要：是服务端问题，影响所有调用 Go 模型的自定义客户端。
   - 链接：https://github.com/anomalyco/opencode/issues/41582

8. **#36349** [OPEN] - V2 子代理完成关系在重启后丢失
   - 5 评论。`serve` 重启后 child → parent tool 调用链断裂，Foreground/Background 子会话不再续接。
   - 为什么重要：V2 架构关键路径，影响 managed-server 模式的可用性。
   - 链接：https://github.com/anomalyco/opencode/issues/36349

9. **#56636** [OPEN] - v2 长请求中途额外发送 warming 提示
   - 4 评论。v1→v2 切换后，200K 上下文场景下 warming 请求被重复 3 次，最终 session 停止。
   - 为什么重要：暴露了 v2 长会话中 warming 与主请求并发的资源竞争。
   - 链接：https://github.com/anomalyco/opencode/issues/56636

10. **#56368** [CLOSED] - CLI 端调用 free 模型同样 403
    - 5 评论 / 1 👍。CLI 也复现了与 #56324 相似的鉴权失败，问题不仅限于 TUI。
    - 为什么重要：进一步确认问题出在服务端校验而非仅客户端。
    - 链接：https://github.com/anomalyco/opencode/issues/56368

## 重要 PR 进展

1. **#56659** - feat(core): 编辑已保存的权限
   - 新增 *edit saved permissions* API，可收紧既有 `shell: *` 等宽泛授权；为 #50600 的权限审查 UI 铺路。
   - 链接：https://github.com/anomalyco/opencode/pull/56659

2. **#55597** - fix(core): 限定 skill 发现与监听的范围
   - 关闭 #55367、#45961、#51080，supersede #55479 与 #55234（双作者 co-author）。同时修复 `/nix/store` 监听与依赖树遍历导致的 inotify 耗尽。
   - 链接：https://github.com/anomalyco/opencode/pull/55597

3. **#56661** - fix(app): 后台 shell 运行时显示 session 图标进度
   - 修复 #56660：补齐 session/subagent 工作时的进度指示；现在连后台 shell 运行时也会让图标转动。
   - 链接：https://github.com/anomalyco/opencode/pull/56661

4. **#56644** - fix(plugin): 让 server 插件复用宿主 OpenTUI 运行时
   - 修复 #55454：在 `serve` 启动前 install 共享 OpenTUI 插件运行时，避免 `@opentui/core` env-registry singleton 冲突（同样机制也出现在 #42338）。
   - 链接：https://github.com/anomalyco/opencode/pull/56644

5. **#56651** - feat(tui): 在 question 工具的回答中附加图像
   - 取代 #56650（误指 `v2` 分支自动关闭），遵循 Kit 建议把 attachments 与 scalar 答案分离。覆盖全 TUI（不含 Web/Mini）。
   - 链接：https://github.com/anomalyco/opencode/pull/56651

6. **#56645** - fix(app): 将压缩后的上下文用量标记为未测量
   - 修复 #56605：不再把"未测量"显示成 `0`，避免误导用户。
   - 链接：https://github.com/anomalyco/opencode/pull/56645

7. **#56642** - fix(server): 在 `request` 监听器附加前接受的请求不再丢失
   - 修复 #56641：拆解 `NodeHttpServer.layer` 与 `HttpRouter.serve` 的初始化竞态。
   - 链接：https://github.com/anomalyco/opencode/pull/56642

8. **#56511** - fix(core): 强制执行 Code Mode 的 deny 策略
   - 关闭 #56349。Code Mode 在不申请权限时也能跑工具，原 deny 路径未触达，现已覆盖 tool-wide `execute`/`execute*` 检查。
   - 链接：https://github.com/anomalyco/opencode/pull/56511

9. **#56640** - refactor(schema): 把 provider 端 replay data 重命名为 `native`
   - 统一 `state`、`providerState`、`ProviderState` 三种历史命名；为后续 schema 演进减少术语漂移。
   - 链接：https://github.com/anomalyco/opencode/pull/56640

10. **#56608** - fix(desktop): 声明 macOS 受保护文件夹的用途说明
    - 关闭 #56479。在 `packages/desktop/electron-builder.config.ts` 中补充 macOS usage descriptions，是合规修复的"第一半"。
    - 链接：https://github.com/anomalyco/opencode/pull/56608

## 功能需求趋势

从近 24 小时活跃的 Issue 与 PR 中，可识别出几条主线：

1. **多客户端一致的权限/账户体验**
   - 邮件更新（#42928）、代理配置可声明化（#24981）、free tier 跨客户端一致性（#56324/#56368/#56338/#56662）反映出"账户/服务端规则应在所有接入面上保持一致"的诉求。

2. **V2 子会话与会话持久化**
   - 子代理完成关系跨重启（#36349）、Code Mode 权限收敛（#56349 + #56511）、会话级 permission mode（#54001）、tab 持久化（#52693）——V2 的 managed-server 模式正在补齐耐用性。

3. **会话上下文的可视化与可测量性**
   - 压缩后 context meter 显示 0（#56605 → #56645）、增量 markdown projection（#56202 → #55857）、context cache 失效（#37489）表明"长会话/压缩/缓存"这条链路成为新一轮打磨重点。

4. **可扩展性与附件能力**
   - TUI 问题答案附图（#56651）、未打标的 mermaid 围栏识别（#43304）、超大图片处理（#43262）——渲染层正在向多模态附件靠拢。

5. **企业/可复现部署**
   - 显式 proxy（#24981）、`--bare` 确定性模式（#43227）、tab/zoom 跨重启持久化（#52693、#50169）等高 👍 需求都指向 *可声明、可版本化* 的运行环境。

## 开发者关注点

- **free tier 鉴权链路错位**：CLI、TUI、Desktop、自定义 openai-compatible provider 多个客户端都复现 403，社区怀疑校验逻辑在服务端而非客户端侧 (#56324/#56368/#56662)。
- **文件监听边界失控**：NixOS / `/nix/store`、monorepo dependency tree 递归监听都可能瞬间耗尽 inotify (#55367、#51080)；本周 #55597 一次性合并三条相关修复。
- **V2 长会话中的资源调度**：warming 与主请求并发、200K 上下文本地推理重启后未续接 (#56636、#42270)。
- **Code Mode 的安全语义**：Code Mode 不经权限弹窗路径，deny 策略被绕过 (#56349 → #56511)。
- **OpenTUI 运行时在 server 插件中的重复加载** (#55454 → #56644)：暴露了 *env-registry singleton* 仍然是插件生态的脆弱点。
- **数据库/服务日志透明度**：#55598</think>

</details>

<details>
<summary><strong>jcode</strong> — <a href="https://github.com/1jehuang/jcode">1jehuang/jcode</a></summary>

<think>The user wants me to generate a daily community digest for the jcode project (an AI development tool) based on GitHub data. Let me carefully analyze the data and structure the report.

Let me start by understanding the data:

**Releases**: None in past 24 hours - so I'll omit that section.

**Issues**: 27 total, need to pick 10 most important. Let me analyze:
- #1836 [CLOSED] - standalone cargo build -p jcode-provider-core fails (tokio::select! macros feature)
- #1824 [OPEN] - openai-compatible providers: config-declared models don't appear in /model picker
- #1858 [OPEN] - applet: reports success when no attached client can render it
- #1825 [CLOSED] - jcode-app-core lib test build fails
- #1826 [CLOSED] - onboarding_golden_telemetry_settings_page fails
- #1827 [CLOSED] - test_account_switch_shorthand_switches_openai_account_by_label fails
- #1828 [OPEN] - jcode-tui --lib suite ABBA-deadlocks
- #1832 [OPEN] - jcode daemon at idle consuming large amounts of cpu
- #1833 [OPEN] - Antigravity: native Gemini 4 Argon requests return 404
- #1853 [OPEN] - Accept Crypto For Payment
- #1851 [CLOSED] - clippy: collapsible_if
- #1866 [OPEN] - Muse Code subscription support via MSP
- #1849 [OPEN] - Claude OAuth picker rejects dotted 5.5 ids
- #1837 [CLOSED] - 3 model_picker copilot tests fail
- #1839 [CLOSED] - 2 agent_failover tests red
- #1830 [OPEN] - Closed side panel reopens
- #1831 [OPEN] - "jscode-desktop" : why are we stuck at known cloud providers
- #1840 [OPEN] - Let users configure where failover goes
- #1841 [OPEN] - Discover ChatGPT web models and Power choices
- #1842 [OPEN] - Contributor Cargo defaults POSIX wrapper issue
- #1845 [OPEN] - External auth trust cache ignores revocation (SECURITY)
- #1854 [OPEN] - Add Standard Compute as built-in provider
- #1856 [OPEN] - Shortcut conflict with Turkish "ç" character
- #1857 [OPEN] - applet: rejected view error hides the cause
- #1860 [OPEN] - Gemini Model with opencode giving error
- #1868 [OPEN] - Support local/self-hosted Laya
- #1865 [OPEN] - Make Jev decision model configurable

Key issues to highlight:
- Security issue #1845 (auth trust cache revocation bug)
- Performance issue #1832 (high CPU at idle)
- TUI deadlock #1828
- Cross-provider model picker issue #1824
- Provider integration issues: #1833 Antigravity, #1849 Claude OAuth, #1866 Muse Code, #1854 Standard Compute, #1860 Gemini, #1868 Laya, #1841 ChatGPT web

**PRs**: 24 total, top 10 by importance/content:
- #1815 - ask_user tool with TUI chooser
- #1852 - pin current-folder sessions to top of /resume
- #1706 - Ctrl+S in /model picker selects swarm model
- #1709 - overview folding widget; agents.memory_effort config
- #1347 - fix: stop image blocks breaking turns (modality recovery)
- #1708 - display.show_tps config
- #1538 - pane-safe glyphs for mermaid/math in webui panes
- #1392 - keep builds/manifest.json stable field in sync
- #1346 - /sessions <query> opens picker pre-filtered
- #1870 - fix(swarm) rename wire to coordinator (CLOSED but interesting)
- #1850 - fix(anthropic) accept dotted Claude ids
- #1869 - feat(jev): Laya SystemOne provider
- #1867 - feat(provider): Muse Code subscription
- #1507 - feat(openai): Daybreak cyber access program
- #1505 - feat(openai): opt in to max_context_window
- #1605 - feat(prompt): expand @path imports
- #1864 - fix(catalog): isolate built-in provider cache namespaces
- #1848 - test: fix TUI lock ordering
- #1863 - docs(sdk): document applet opt-out
- #1644 - fix(tui): keep closed side panel closed

Let me select the top 10 most impactful:

1. #1347 - Critical fix for text-only models (modality recovery)
2. #1815 - ask_user tool feature
3. #1709 - overview folding widget + memory_effort config
4. #1706 - Ctrl+S for swarm model discovery
5. #1852 - /resume current folder pinning
6. #1867 - Muse Code subscription support (new provider)
7. #1869 - Laya SystemOne provider (new provider)
8. #1850 - fix dotted Claude IDs in OAuth
9. #1864 - fix built-in provider cache namespaces (partial fix for #1824)
10. #1392 - manifest.json stability fix

Or maybe alternative: 
- #1347 (modality recovery)
- #1815 (ask_user tool)
- #1709 (overview widget + memory_effort)
- #1706 (Ctrl+S swarm model)
- #1852 (/resume pinning)
- #1867 (Muse Code)
- #1869 (Laya)
- #1850 (dotted Claude IDs)
- #1864 (provider cache fix)
- #1644 (side panel fix) or #1538 (pane-safe glyphs)

Let me now write the report in Chinese.

For trends analysis:
- Provider integrations dominate (Muse Code, Laya, Standard Compute, Antigravity, Claude OAuth, ChatGPT web, Gemini)
- TUI/UI improvements (side panel, /resume, /model picker, swarm panel, glyphs)
- Performance (CPU idle, deadlock tests)
- Security (auth trust revocation)
- Test stability issues (many closed fixes for failing tests)

Let me draft the report.

Actually, let me re-check the data. The format shows the date is 2026-10-18, but the latest updates in issues are mostly 2026-10-17, with a few on 2026-10-18. I'll write this as a daily report for 2026-10-18.

Let me finalize the structure:

1. **今日速览** - Critical issues: idle CPU consumption, TUI deadlock, security auth trust cache issue, plus multiple provider integrations
2. **版本发布** - None, omit
3. **社区热点 Issues** - Top 10
4. **重要 PR 进展** - Top 10
5. **功能需求趋势** - Provider integrations, TUI/UX improvements, performance, security
6. **开发者关注点** - Pain points

Let me write it now. I need to be concise but professional, suitable for technical developers.

Note: The report mentions "closes #1633" or "closes #981" but I shouldn't interpret those reference issues - just summarize what the PRs do.

Let me be careful about not making things up. I'll only summarize what's in the data.

Let me format the URLs as https://github.com/1jehuang/jcode/issues/XXXX and https://github.com/1jehuang/jcode/pull/XXXX

Let me write the report now.</think>

# jcode 社区动态日报 · 2026-10-18

## 📌 今日速览

今日 jcode 仓库的活跃度依然集中在 **多 Provider 接入** 与 **TUI 体验打磨** 两条主线：Muse Code（订阅通道）、本地部署的 Laya SystemOne 协议、Standard Compute 内置 profile 等多个新 Provider 方案在一天内集中提出对应 PR；同时 #1849（Claude OAuth 5.5 dotted id）、#1824（openai-compatible 模型选择器）、#1828（TUI 死锁） 等一批用户可见的关键问题正在被修复。

需要特别关注的两个 **高严重度** 信号：① **#1845 安全类 Issue** —— 外部 auth trust 缓存在 config 长度与 mtime 不变时忽略撤销，存在提权风险窗口；② **#1832 性能回归** —— daemon 空闲时单核 CPU 持续占用 1-2 核，已通过火焰图定位到 model catalog 与 idle render loop 两个热点。

---

## 📦 版本发布

近 24 小时无新 Release。

---

## 🔥 社区热点 Issues（Top 10）

| # | Issue | 状态 | 为什么值得关注 |
|---|---|---|---|
| 1 | **#1845 外部 auth trust 缓存忽略撤销（安全）** | OPEN | `config_file.rs` 在 config 文件 length 与 mtime 不变时不会重新读取，导致撤销操作可能不生效。是 #1689 之后的延续风险，建议优先 review。🔗 [#1845](https://github.com/1jehuang/jcode/issues/1845) |
| 2 | **#1832 daemon 空闲时 CPU 占用过高** | OPEN | 用户在 14900 上观察到 1-2 核被 idle 吃满。火焰图已锁定两个热点：model catalog 按 client 周期性刷新、idle render loop。是性能基线回归，需优先排查。🔗 [#1832](https://github.com/1jehuang/jcode/issues/1832) |
| 3 | **#1828 jcode-tui 测试套 ABBA 死锁** | OPEN | `cargo test -p jcode-tui --lib` 在并行下随机挂死，已通过 lldb 定位到 pinned-todo 与 idle-animation 两组测试对 env/render 两把锁的获取顺序相反，对 CI 影响较大。🔗 [#1828](https://github.com/1jehuang/jcode/issues/1828) |
| 4 | **#1824 openai-compatible 模型选择器只显示 endpoint 返回的模型** | OPEN | config.toml 中 `[[providers.<name>.models]]` 声明的模型在 endpoint `/v1/models` 不返回时被丢弃，引发 MiniMax M3.1 等服务"看不见自己写进去的模型"。#1864 给出部分缓解，但 merge 策略仍未定。🔗 [#1824](https://github.com/1jehuang/jcode/issues/1824) |
| 5 | **#1849 Claude OAuth 拒绝点分 5.5 模型 ID** | OPEN | OAuth 目录使用 `claude-opus-5-5` 短横格式，与 config/收藏夹中的 `claude-opus-5.5` 点分格式不匹配，导致 `/model` 直接报错"#1849 not in OAuth model catalog"。#1850 已提 PR 修复。🔗 [#1849](https://github.com/1jehuang/jcode/issues/1849) |
| 6 | **#1833 Antigravity 原生 Gemini 4 Argon 返回 404** | OPEN | 同一账号在 CLI 1.3.5 中可生成 Argon 内容，jcode 原生请求却 404，影响"官方渠道"的模型可用性。🔗 [#1833](https://github.com/1jehuang/jcode/issues/1833) |
| 7 | **#1858 applet 在无渲染客户端时仍然报告成功** | OPEN | applet 工具在 headless / 自定义 web UI 等场景会误报"卡片可见"，agent 据此盲目继续，需要明确渲染回执路径或工具描述。🔗 [#1858](https://github.com/1jehuang/jcode/issues/1858) |
| 8 | **#1830 关闭侧边面板后仍自动重开** | OPEN | `/observe on` 与 `/splitview on` 在下次刷新时让已关闭的 side panel 自动复活，焦点还卡在隐藏的 File diff pane。#1644 已提 PR 修复。🔗 [#1830](https://github.com/1jehuang/jcode/issues/1830) |
| 9 | **#1840 用户希望可控地指定 failover 目标** | OPEN | 当前 failover 完全自动、且无法"事后回到原 provider"，对生产环境配额管理不友好；属于高频需求。🔗 [#1840](https://github.com/1jehuang/jcode/issues/1840) |
| 10 | **#1831 desktop app 不支持自定义 OpenAI-compatible endpoint** | OPEN | CLI 通过 `jcode` 命令可成功添加自定义端点，但 desktop app 没有入口；属于跨端能力不一致的典型问题。🔗 [#1831](https://github.com/1jehuang/jcode/issues/1831) |

> 同批修复关闭：`#1836/#1825/#1826/#1827/#1837/#1839/#1851` 等 7 条均为测试/clippy 抖动，作者 @alecuba16 集中清理，对主干稳定度是积极信号。

---

## 🚧 重要 PR 进展（Top 10）

| # | PR | 主要内容 |
|---|---|---|
| 1 | **#1347 文本模型遇图像块不再整轮崩溃** | 三层运行时 modality recovery：落库前剥离、provider 错误回退中重试、最后兜底 strip。彻底解决 #1302。🔗 [#1347](https://github.com/1jehuang/jcode/pull/1347) |
| 2 | **#1815 ask_user 工具 + TUI 内联选择器** | 让 agent 在轮中给出受控选项：TUI 渲染 inline chooser，数字键快选、文本兜底、超时自动选，并把"用户实际选中的 label + value"回传。比通用 verb 更利于审计。🔗 [#1815](https://github.com/1jehuang/jcode/pull/1815) |
| 3 | **#1709 信息面板折叠 + memory_effort sidecar 配置** | 新增可折叠 overview widget；新增 `agents.memory_effort`（环境变量 `JCODE_MEMORY_EFFORT`），对 OpenAI reasoning / Claude thinking / 其他 provider 的 effort 做统一 pin；信息面板新增运行时 model 行。🔗 [#1709](https://github.com/1jehuang/jcode/pull/1709) |
| 4 | **#1706 Ctrl+S 在 /model 中直接选 swarm 模型** | 关闭 #981，让 swarm 模型在主流 /model 流中可发现；未保存 override 时 agent 沿用当前会话模型，并修复 coordinator 身份回退。🔗 [#1706](https://github.com/1jehuang/jcode/pull/1706) |
| 5 | **#1852 /resume 把当前目录会话置顶** | 关闭 #1633，picker 把 cwd 匹配的会话用 `Current folder` 头置顶、运行中优先、避免重复展示。🔗 [#1852](https://github.com/1jehuang/jcode/pull/1852) |
| 6 | **#1867 Muse Code 订阅支持（MSP 协议）** | 关闭 #1866，为 Muse Code 订阅用户增加独立凭证通路，不再只能走 pay-as-you-go 的 `meta-muse`。🔗 [#1867](https://github.com/1jehuang/jcode/pull/1867) |
| 7 | **#1869 Laya SystemOne 本地/自托管 provider** | 关闭 #1868，新增 `JevProvider::Laya`（`"laya"`），支持符合 `/v1/systemone` 线协议的本地 Laya 实例。🔗 [#1869](https://github.com/1jehuang/jcode/pull/1869) |
| 8 | **#1850 修复 Anthropic OAuth 接受点分模型 ID** | 关闭 #1849，规范化 dashed/dotted 命名，picker 收藏夹与 set_model 路径同步。🔗 [#1850](https://github.com/1jehuang/jcode/pull/1850) |
| 9 | **#1864 隔离内置 Provider 的缓存命名空间** | 是 #1824 的部分修复：内置 runtime 不再泄漏到 process-global namespace，避免跨 provider 写脏缓存。🔗 [#1864](https://github.com/1jehuang/jcode/pull/1864) |
| 10 | **#1644 关闭侧边面板后保持关闭并归还焦点** | 关闭 #1830：保留上游 `[close]` 控件，移除本地 `x` 与 `/side`，专注于"刷新后不再被拉起 + focus 回 composer"。🔗 [#1644](https://github.com/1jehuang/jcode/pull/1644) |

> 其它值得跟踪：`#1708`（`display.show_tps` 信息面板流式 TPS 行可关）、`#1538`（herdr-webui 面板的 mermaid/math glyph 修复）、`#1392`（`builds/manifest.json` 的 `stable` 字段三路 install 同步）、`#1346`（`/sessions <query>` 预过滤）、`#1505/#1507`（OpenAI Codex 目录 `max_context_window` 与 Daybreak cyber 接入）、`#1605`（`AGENTS.md` 支持 `@path` 导入）、`#1863`（applet headless 文档 opt-out）。

---

## 📈 功能需求趋势

1. **多 Provider 边界扩张（最热）**
   - 新厂商接入：Muse Code 订阅 (#1866/1867)、Laya SystemOne (#1868/1869)、Standard Compute 内置 profile (#1854)、Belvedir/OrcaRouter/Yolo-Auto 平级 (#1854)。
   - 已有 Provider 的边界修复：Anthropic OAuth dotted/dashed (#1849/1850)、Antigravity Argon 404 (#1833)、OpenAI Daybreak cyber (#1507)、Codex `max_context_window` (#1505)、ChatGPT Web 动态发现 (#1841)。
   - 桌面端缺口：desktop app 暂不支持自定义 endpoint (#1831)，属于跨端一致性问题。

2. **TUI / 信息架构升级**
   - `/model`、`/resume`、`/sessions`、`/account` 等高频命令的可用性细节被密集打磨（#1706、#1852、#1346）。
   - 信息面板引入可折叠 overview 部件 + TPS/思考显示开关 + memory_effort sidecar 配置（#1709、#1708）。
   - 字符/Glyph：herdr-webui 面板中 mermaid/math 在 Kitty 协议下泄漏 U+10EEEE PUA (#1538)；土耳其 `ç` 触发快捷键冲突 (#1856)。

3. **Decision / 编排层**
   - Jev 默认模型硬编码 → 用户可配 (#1865)；
   - Failover 用户可控 + 自动回切 (#1840)；
   - Swarm 会话改名终于连上 coordinator (#1870)；
   - 新增 ask_user 工具

</details>

<details>
<summary><strong>pi</strong> — <a href="https://github.com/earendil-works/pi">earendil-works/pi</a></summary>

<think>Let me analyze the GitHub data for the pi community (earendil-works/pi) on 2026-10-18 and generate a structured daily report in Chinese.

Key observations:
1. No new releases in the past 24 hours
2. 42 issues updated in the past 24 hours, top 30 shown
3. 9 PRs updated in the past 24 hours

Let me identify the most important issues and PRs:

**Top Issues by relevance/importance:**

1. **#7730** - High CPU usage on Mac OS (20 comments, 11 likes) - Most discussed bug
2. **#10895** - System level config support (MDM) - CLOSED no-action, 11 comments - Security feature proposal
3. **#10645** - resizeImage null in compiled binaries - OPEN, in progress, 10 comments - Critical bug since 0.87.x
5. **#10074** - Anthropic tool calls corrupted non-ASCII (Korean text) - OPEN, 9 comments - Important Claude issue
6. **#10976** - PowerShell falls back to 5.1 with Store build - OPEN, 6 comments - Windows issue
7. **#10953** - OpenAI login fails with ChatGPT Business - CLOSED no-action, 6 comments
8. **#11033** - Pi subscription login fails - CLOSED, 5 comments (related to #10953)
9. **#10919** - Skills: invalid-name warnings actionable - OPEN, 5 comments
10. **#10947** - isProjectTrusted() ignores saved decisions - OPEN, 4 comments - Security
11. **#7756** - detectInstallMethod mislabels - OPEN, 4 comments
12. **#9945** - Compaction file lists grow unbounded - CLOSED last-read, 3 comments
13. **#10492** - Tool row blank line - CLOSED no-action, 3 comments
14. **#11067** - RPC mode has no per-session MCP - CLOSED untriaged, 3 comments (has PR #11082)
15. **#11026** - pi-durable delete conversation - OPEN, durable, 3 comments
16. **#10995** - Don't send another model's thinking - CLOSED pkg:ai, 3 comments
17. **#10623** - pi -p uses another model silently - OPEN, 3 comments

**Top PRs:**

1. **#11039** - docs(coding-agent): restore extension guide details - addresses #10297
2. **#11079** - feat(durable): inject timer for task sleeps - addresses Cloudflare Durable Object issue
3. **#11082** - feat(coding-agent): register per-session MCP servers over RPC - closes #11067
4. **#11081** - fix(tui): keep ~ joined in double-click word selection
5. **#11080** - fix(powershell): accept Microsoft Store app-execution aliases - fixes #10976
6. **#11077** - fix(coding-agent): defer sendMessage triggerTurn until compaction ends - fixes #10982
7. **#10716** - fix(env): include stderr in pi-env startup errors
8. **#11074** - fix(coding-agent): honor saved trust decision - fixes #10947
9. **#11072** - fix: limit selector window height

Now let me write the report in Chinese.

I'll structure it as:
1. 今日速览 (Today's overview)
2. 版本发布 (Releases - skip since none)
3. 社区热点 Issues (10 most important)
4. 重要 PR 进展 (10 most important)
5. 功能需求趋势 (Feature trends)
6. 开发者关注点 (Developer pain points)</think>

# Pi 社区动态日报 · 2026-10-18

> 数据来源：[github.com/earendil-works/pi](https://github.com/earendil-works/pi)（过去 24 小时更新：42 个 Issue + 9 个 PR）

---

## 📌 今日速览

**今天是 pi 项目的"修复密集日"——9 个 PR 中有 7 个已合并关闭，对应一批 Issue 被快速消化**。核心方向集中在三个领域：Windows / PowerShell 兼容性（Store 版 pwsh 修复）、RPC 与 Durable 增强（每会话 MCP 注册、任务休眠定时器注入）、以及 TUI 细节修正（波浪号选择、选择器窗口限高）。同时遗留了一些高优先级 Bug 未解决，尤其是 macOS 长会话 CPU 飙高（#7730）和 Anthropic 模型对非 ASCII 编辑参数损坏（#10074）这两条"老"问题仍在发酵。

---

## 🚀 版本发布

**过去 24 小时无新版本发布。** 当前主线仍以修复合入为主，未触发版本号变更。

---

## 🔥 社区热点 Issues（精选 10 条）

### 🐛 Bug 类

**1. [#7730] macOS 长会话 CPU 占用 50%–110%**（OPEN, 💬20, 👍11）
- 长期未解的高优先级 Bug。Mac OS 上 pi 会话越长 CPU 越离谱，疑似与上下文规模相关。
- 链接：https://github.com/earendil-works/pi/issues/7730
- **社区反应**：累计 11 个 👍 与 20 条评论，是当前仓库最高互动量 Issue。

**2. [#10645] 编译产物（Bun）下 resizeImage 返回 null，图片附件全丢**（OPEN, in progress, 💬10）
- 自 0.87.x 起所有图像附件在 `--mode rpc` + 独立可执行文件中被丢弃。
- 链接：https://github.com/earendil-works/pi/issues/10645

**3. [#10074] Anthropic 工具调用：非 ASCII（韩文）编辑参数损坏**（OPEN, 💬9）
- Claude 模型在编辑含韩文文件时频繁失败甚至破坏文件，原因是 `\uXXXX` 被吞掉 `\u` 退化成控制字符 `\b`/`\f`。
- 链接：https://github.com/earendil-works/pi/issues/10074
- **重要性**：跨语言协作场景的高风险隐患，已被追踪三周。

**4. [#10976] PowerShell 工具回退到 5.1（Microsoft Store 版 pwsh 7）**（OPEN, 💬6, 👍1）
- `where pwsh.exe` 命中 Store 的零字节 reparse point，`fs.existsSync` 误判导致 fallback 到 Windows PowerShell 5.1。
- 链接：https://github.com/earendil-works/pi/issues/10976
- **已被 PR #11080 修复**（见下文）。

**5. [#10947] isProjectTrusted() 忽略对"无信任资源项目"的明确不信任决策**（OPEN, 💬4）
- 安全模型漏洞：项目无需要信任的资源时，`trust.json` 中"不信任"决定被忽略，返回 `true`。
- 链接：https://github.com/earendil-works/pi/issues/10947
- **已被 PR #11074 修复**。

**6. [#10982] sendMessage(triggerTurn) 在手动 compaction 进行中即启动新回合**（OPEN, 💬2）
- 并发问题：扩展调用 `triggerTurn` 时与 compaction 抢跑，导致消息顺序错乱、使用未压缩上下文。
- 链接：https://github.com/earendil-works/pi/issues/10982
- **已被 PR #11077 修复**。

### 🔐 安全 / 配置

**7. [#10895] 支持系统级配置（MDM）以增强安全姿态**（CLOSED no-action, 💬11）
- 提议 `/etc/pi/models.json` 等系统级配置，使其优先级最高，便于企业 MDM 部署。
- 链接：https://github.com/earendil-works/pi/issues/10895
- **结论**：当前不被采纳（no-action），但讨论度高，反映企业部署场景的关注。

### 🔌 平台兼容性

**8. [#10953] / [#11033] OpenAI/ChatGPT Business 订阅登录失败（`3p_delegated_access_policy_denied`）**（均 CLOSED, 💬6+5）
- ChatGPT Business 工作区登录被组织策略拒绝，官方 Codex CLI 同样账号可用；legacy Codex 通道在 pi 中可绕过。
- 链接：https://github.com/earendil-works/pi/issues/10953 ｜ https://github.com/earendil-works/pi/issues/11033
- **结论**：双重确认 no-action——平台策略问题，非 pi 端可解决。

### ⚙️ 编译产物 / 模型管理

**9. [#10623] `pi -p` 静默切换到错误模型；`pi update --models` 跳过扩展目录**（OPEN, 💬3）
- 扩展 provider 的 `models-store.json` 陈旧时，命令行会用错默认模型；更新命令也漏了扩展目录。
- 链接：https://github.com/earendil-works/pi/issues/10623

### 📦 Durable / 会话生命周期

**10. [#11026] pi-durable: 永久删除会话（含条目、文档、收件箱、调度状态）**（OPEN, durable, 💬3, 👍1）
- 提议新增 `harness.deleteConversation(id, ctx)`，运行中拒绝/中止后再删除。
- 链接：https://github.com/earendil-works/pi/issues/11026

---

## 🛠️ 重要 PR 进展（精选 10 条）

| # | PR | 状态 | 内容要点 |
|---|---|---|---|
| 1 | [#11039 docs: 恢复扩展指南细节](https://github.com/earendil-works/pi/pull/11039) | ✅ CLOSED | 补全 hook 流程图、事件选择规则、扩展示例清单与 TUI/Provider 配方。闭合 #10297 |
| 2 | [#11079 feat(durable): 注入任务休眠定时器](https://github.com/earendil-works/pi/pull/11079) | ✅ CLOSED | `TaskRuntime.sleep()` 改为注入 clock 与定时器，便于 Cloudflare Durable Object 等无 setTimeout 宿主运行长 backoff |
| 3 | [#11082 feat: RPC 注册 per-session MCP 服务器](https://github.com/earendil-works/pi/pull/11082) | ✅ CLOSED | 新增 `register_mcp_server` / `unregister_mcp_server` / `get_mcp_servers` RPC 命令；闭合 #11067 |
| 4 | [#11081 fix(tui): 双击选词保留 `~`](https://github.com/earendil-works/pi/pull/11081) | ✅ CLOSED | 把 `~` 加入 `TERMINAL_WORD_SELECTION_JOINERS`，修正 `~/Documents/pi/...` 选词丢失波浪号 |
| 5 | [#11080 fix(powershell): 接受 Store 版 app-execution 别名](https://github.com/earendil-works/pi/pull/11080) | ✅ CLOSED | 处理 `%LOCALAPPDATA%\...\pwsh.exe` 零字节 reparse point；闭合 #10976 |
| 6 | [#11077 fix: sendMessage triggerTurn 延迟到 compaction 结束](https://github.com/earendil-works/pi/pull/11077) | ✅ CLOSED | 在 session 锁内排队 triggerTurn，避免并发抢跑；闭合 #10982 |
| 7 | [#10716 fix(env): pi-env 启动错误附 stderr](https://github.com/earendil-works/pi/pull/10716) | 🟡 OPEN | daemon 在 `hello` 前退出时，将 SSH 的 stderr 一并写入错误信息 |
| 8 | [#11074 fix: 尊重"无资源项目"的不信任决策](https://github.com/earendil-works/pi/pull/11074) | ✅ CLOSED | 调整 `createRuntime` 中 trust-store 查找的 `||` 顺序；闭合 #10947 |
| 9 | [#11072 fix: 选择器窗口高度限高](https://github.com/earendil-works/pi/pull/11072) | 🟡 OPEN | 长扩展列表渲染改为居中、可滚动窗口（≤10 项），保留选中可见性 |
| 10 | [#11067 → #11082] RPC 模式缺每会话 MCP 注册](https://github.com/earendil-works/pi/issues/11067) | ✅ CLOSED | ACP 适配器无法把 `session/new.mcpServers` 映射到 pi 会话；由 #11082 实现 |

---

## 📈 功能需求趋势

从过去 24 小时的 Issue 流提炼，社区关注集中在以下方向：

| 趋势方向 | 代表 Issue | 关注度 |
|---|---|---|
| **🪟 Windows / PowerShell 兼容** | #10976, #11086 | 🔴 高（Store 版 pwsh、SSH+高负载下符号泄漏） |
| **🤖 多模型互操作与可靠性** | #10074（Anthropic 非 ASCII）, #10995（跨模型思考泄露）, #10623（扩展模型陈旧） | 🔴 高 |
| **🔐 安全与信任模型** | #10895（系统级配置）, #10947（trust 决策被绕过）, #10919（Skill 加载警告） | 🟠 中-高 |
| **☁️ pi-durable / 云原生执行** | #11026（删除会话）, #10852（客户端工具审批）, #11079 PR（定时器注入） | 🟠 中-高，企业集成向 |
| **🔌 RPC 与外部集成（ACP/Codex）** | #11067/#11082（per-session MCP）, #11076（扩展复用 ModelRuntime） | 🟠 中 |
| **🎨 TUI / 终端渲染细节** | #11092（预览文本对比度）, #11072 PR（选择器限高）, #11081 PR（`~` 选词） | 🟡 中 |
| **📚 模型目录刷新与冷数据** | #11089（已下架模型残留）, #10623 | 🟡 中 |
| **🏢 企业 SSO / 商业订阅** | #10953, #11033（ChatGPT Business 拒绝第三方） | 🟡 中（多为平台限制） |

**核心信号**：pi 已进入"**企业级落地深水区**"——系统级配置、Durable Object 部署、客户端工具审批、RPC 互操作这些需求在快速增长；同时 Windows 与多模型可靠性仍是横在开发者面前的两个最大痛点。

---

## 💡 开发者关注点（痛点与高频需求）

1. **🔁 Issue → PR 的响应链路显著加快**
   过去 24h 内出现多个"当日提单 → 当日修复 → 当日合并"的闭环（如 #10947→#11074、#10982→#11077、#10976→#11080、#11067→#11082）。社区维护节奏健康。

2. **🪟 Windows 是当前最大短板**
   Store 版 PowerShell 路径解析、Windows 终端 SSH 高负载下符号泄漏、扩展 provider 路径中点号被误识别等多个平台特异性 Bug 接连浮出水面。建议 Windows 用户关注 #10976/#11080 与 #11086。

3. **🤖 Anthropic 模型对多字节字符处理仍不稳定**
   #10074 描述的 `\uXXXX` → 控制字符退化问题对中文/韩文/日文项目协作构成实质性风险，社区已追踪三周，亟需 PR。

4. **🔒 信任与权限边界需要更细粒度的可配置层**
   - "无资源时不读 trust.json"（#10947，已修）
   - "系统级 MDM 配置"（#10895，未采纳）
   - "客户端工具审批"（#10852，proposal 阶段）
   
   开发者希望 pi 在企业场景下能像 OS 包管理器一样分层授权。

5. **☁️ Durable / 长时间运行场景对宿主依赖收窄**
   PR #11079 标志 pi-durable 正在适配 Cloudflare Durable Object、Worker 等无 setTimeout 宿主——意味着云函数 / Edge 环境成为新的目标平台。

6. **🔌 ACP / Codex CLI 兼容性仍是迁移痛点**
   多个 Issue（#11067, #11076, #11083）显示，把 pi 嵌入 ACP 适配器或 Codex 兼容层时，会话级 MCP 注册、ModelRuntime 复用、续期后工具激活时机都是"现实摩擦点"。

7. **📦 模型目录冷数据问题反复出现**
   `models-store.json` 缓存导致已下架模型（#11089）或自定义 provider 模型（#10623）残留在 UI 中。`pi update --models` 未覆盖扩展目录是普遍诉求。

---

*日报基于 2026-10-18 GitHub 公开数据自动整理，仅供技术参考。*

</details>

---
*本日报由 [Big Model Radar](https://github.com/96loveslife/big_model_radar) 自动生成。*
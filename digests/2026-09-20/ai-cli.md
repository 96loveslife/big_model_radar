# AI CLI 工具社区动态日报 2026-09-20

> 生成时间: 2026-09-20 04:22 UTC | 覆盖工具: 8 个

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

<think>The user wants me to create a horizontal comparative analysis report based on the daily dynamics of 7 AI CLI tools (Claude Code, OpenAI Codex, Gemini CLI, GitHub Copilot CLI, Kimi Code CLI, OpenCode, jcode, pi). Let me carefully analyze the data and synthesize it into a professional comparative report in Chinese.

Let me organize the key data points from each tool:

**Claude Code:**
- No releases
- ~30 issues, 3 PRs
- Top issues: Opus 5 rule violations (#90542, 33 comments), Desktop UI regressions, security concerns
- 3 PRs all related to Diff panel & telemetry

**OpenAI Codex:**
- 2 alpha releases (rust-v0.156.0-alpha.8/9)
- 50 issues, 30 PRs
- Top: Windows stability, Browser/Computer Use auth issues, rate limits (#43337 56 comments)
- 13 PRs all on transcript_v2 TUI

**Gemini CLI:**
- 1 nightly release (v0.62.0-nightly.20260920)
- 50 issues, 16 PRs
- Top: Subagent reliability (#22323 P1), model routing fixes, AST search
- Trends: AST-aware tools, Auto Memory security

**GitHub Copilot CLI:**
- No releases
- 50 issues, 0 PRs
- Most issues CLOSED (cleanup wave)
- Top: MCP ecosystem stability, OOM on long sessions, Windows/WSL

**Kimi Code CLI:**
- No releases
- 15 issues (all closed), 5 PRs
- Top: Windows compatibility, encoding, YOLO mode
- Themes: Windows platform focus

**OpenCode:**
- No releases
- 24 issues, 16 PRs
- Top: ACP WebSocket (#13388, 9 likes), free tier issues, Zen tools billing
- Trends: ACP protocol, provider compatibility, billing UX

**jcode:**
- No releases
- 24 issues, 16 PRs
- Top: Memory sidecar (#679 13 comments), TUI/UX improvements, provider issues
- Trends: MCP, multiple providers, @file mentions

**pi:**
- 1 release (v0.86.0)
- ~30+ issues, 16 PRs
- Top: Shrinkwrap dep (#5653 20 comments), TUI performance (#6665 13 comments), compaction issues
- Trends: TUI performance, compaction, extension API

Now let me structure the comparative analysis:

1. **生态全景** - AI CLI landscape summary
2. **活跃度对比** - Activity comparison
3. **共同关注方向** - Common directions
4. **差异化定位** - Differentiation
5. **社区热度与成熟度** - Heat & maturity
6. **趋势信号** - Trend signals

Let me prepare the comparative report. I'll aim for a professional, data-driven analysis suitable for technical decision makers.

Activity metrics summary:
| Tool | Releases | Issues | PRs | Active themes |
|------|----------|--------|-----|---------------|
| Claude Code | 0 | 30 | 3 | Opus 5 behavior, Desktop regressions, Diff panel |
| OpenAI Codex | 2 | 50 | 30 | Windows stability, Browser/Computer Use, TUI transcript_v2 |
| Gemini CLI | 1 | 50 | 16 | Subagent reliability, AST tools, Auto Memory |
| Copilot CLI | 0 | 50 | 0 | MCP, Windows/WSL, OOM (mostly closed) |
| Kimi Code CLI | 0 | 15 | 5 | Windows, YOLO mode, MCP |
| OpenCode | 0 | 24 | 16 | ACP protocol, free tier, providers |
| jcode | 0 | 24 | 16 | TUI/UX, MCP, providers, Grok |
| pi | 1 | 30+ | 16 | TUI perf, compaction, extension API |

Common concerns across multiple tools:
1. **Windows/WSL compatibility** - Claude Code, Codex, Copilot CLI, Kimi Code CLI (4 tools)
2. **MCP ecosystem stability** - Claude Code, Codex, Copilot CLI, Kimi Code CLI, jcode, OpenCode (6 tools)
3. **TUI performance/rendering** - Codex, pi, Copilot CLI, OpenCode (4 tools)
4. **Subagent/multi-agent reliability** - Claude Code, Gemini CLI, OpenCode (3 tools)
5. **Model provider compatibility** - All 8 tools have some form
6. **Session/context persistence** - All tools, varying depth
7. **Security/permissions** - Claude Code (#92649, #95614), Kimi (--yolo), Gemini (Auto Memory)

Differentiation analysis:
- **Claude Code**: Anthropic-ecosystem focus, Opus model behavior, Anthropic-specific features
- **Codex**: OpenAI-specific, Windows pain point, Browser/Computer Use
- **Gemini CLI**: Google ecosystem, Gemini 3 Pro, AST tools, Auto Memory
- **Copilot CLI**: GitHub-native, MCP-heavy, IDE/VS Code parity
- **Kimi Code CLI**: Chinese developer focus (Moonshot), Windows/Chinese UX, simpler/smaller scale
- **OpenCode**: Protocol-centric (ACP), open source/community, free tier model
- **jcode**: Multi-provider, TUI-rich, MOC orchestration
- **pi**: Developer-centric CLI, performance-focused, Anthropic cache warming

Maturity signals:
- Most active issues/comments: Claude Code (#90542, 33 comments), Codex (#43337, 56 comments), Gemini (#22323, 13 comments), pi (#5653, 20 comments)
- Most releases today: Codex (2 alpha), Gemini (1 nightly), pi (1 stable)
- Highest PR velocity: Codex (30 PRs), Gemini (16 PRs), OpenCode (16 PRs), jcode (16 PRs), pi (16 PRs)

Now I'll write a comprehensive comparative report.

Let me make sure the tone is professional, data-driven, and appropriate for technical decision-makers and developers.</think>

# 主流 AI CLI 工具横向对比分析报告
**报告日期：2026-09-20 · 数据窗口：过去 24 小时**

---

## 一、生态全景

AI CLI 工具生态已进入"基础设施成熟期"——各阵营不再竞逐基础功能，而是沿着**自有模型栈**与**协议层差异化**两条路径快速分化。Anthropic 系聚焦模型行为可靠性（Claude Code 的 Opus 5 指令失真问题），OpenAI 系深耕 Computer/Browser Use 与 Windows 体验（Codex 同日连发两个 alpha），Google 系押注多 Agent 与 AST 工具升级（Gemini CLI），GitHub 系围绕 MCP 生态稳定性补课（Copilot CLI 一次性清账 50 条 issue）。同时，**开源系（OpenCode、jcode、pi）正以协议中立、多 Provider、极致 TUI 体验**切入市场，反映出社区对"模型中立 CLI"的强需求。

---

## 二、各工具活跃度对比

| 工具 | Release | Issue 更新 | PR 更新 | 关键主题（Top 1-2） |
|------|---------|-----------|---------|----------------------|
| **Claude Code** | 无 | ~30 | 3 | Opus 5 规则违反（#90542 · 33 评论）；Diff 面板 + 遥测 |
| **OpenAI Codex** | rust-v0.156.0-alpha.8/9（2 发） | 50 | 30 | Windows + Browser Use 鉴权；TUI transcript_v2 批量重构 |
| **Gemini CLI** | v0.62.0-nightly（1 发） | 50 | 16 | Subagent 终止信号失真（#22323 P1）；AST 搜索工具首落地 |
| **GitHub Copilot CLI** | 无 | 50（绝大多数 CLOSED） | 0 | MCP 生态（#4870 OPEN）；长会话 OOM（#4699 OPEN） |
| **Kimi Code CLI** | 无 | 15（全 CLOSED） | 5 | Windows 编码/启动；YOLO 模式 |
| **OpenCode** | 无 | 24 | 16 | ACP WebSocket 远程化（#13388 · 9 👍）；Zen 免费额度舆情 |
| **jcode** | 无 | 24 | 16 | Memory sidecar（#679 · 13 评论）；@file mention picker |
| **pi** | v0.86.0（1 发） | ~30 | 16 | 依赖瘦身 Shrinkwrap（#5653 · 20 评论）；Prompt Cache Warming |

**活跃度总结（PR/Issue 比 = 修复速率指标）**：
- 🟢 **极高 PR 速率**：Codex (30 PRs/50 issues = 0.6)、OpenCode (0.67)、jcode (0.67)、pi (0.53)
- 🟡 **中高**：Gemini CLI (0.32)
- 🟠 **低 / 待修复积压**：Claude Code (0.10)、Copilot CLI (0.00)、Kimi Code CLI (0.33)

---

## 三、共同关注的功能方向

以下方向为**至少 3 个工具社区**同步出现的高频诉求：

### 1. 🪟 Windows / WSL 跨平台体验（**5 个工具**）
- **Claude Code**：MSIX 更新器 0x80070020 进程锁死（#89687）、WSL 2.1.259 回归（#91816）
- **Codex**：Windows 桌面发送卡死（#40968 · 44 评论）、CUA 8 分钟首启（#41822）、MCP Windows 启动失败（#41437）
- **Copilot CLI**：TUI 中途死锁（#4069 · 9 👍）、BOM 前缀（#2571）、Ctrl+G 启动（#3733）
- **Kimi Code CLI**：ASCII 编码崩溃（#773 · 8 评论）、GitBash 启动失败（#1436）、并发 Permission denied（#1429）
- **OpenCode**：macOS v1.2.7+ 启动挂起、Windows PE loader 错误

**共识诉求**：建立 Windows-first 回归测试矩阵、终结 VS Code 与 CLI 的体验分裂。

### 2. 🔌 MCP 生态稳定性（**6 个工具**）
- **Claude Code**：默认开启反馈传输隐私（#92649）、通配符权限重放（#95614）、Windows MCP kill（#86756）
- **Codex**：API Key 下 Browser 控制失败（#43410 · 41 评论）、MCP 热加载诉求（#20605）
- **Copilot CLI**：Figma 远程 MCP discover（#4870 · 11 👍）、stdio 早闭（#2892）、WebSocket 挂起（#4910）
- **Kimi Code CLI**：HTTPS 缺 User-Agent（#1487）、stdio stderr 污染
- **jcode**：从 Codex 配置导入 MCP 时 `enabled=false` 丢失（#1327/#1328 闭环）、`/mcp` slash command（#835）
- **OpenCode**：插件 package subpath 解析（#49863）

**共识诉求**：MCP 错误码语义统一、stdio/WebSocket 传输鲁棒性、热加载 + 状态同步。

### 3. 🤖 多 Agent / Subagent 可靠性（**3+ 个工具**）
- **Claude Code**：Subagent 无法回复（#89043）
- **Gemini CLI**：`codebase_investigator` 在 `MAX_TURNS` 后误报 `GOAL` 成功（#22323 · 13 评论，P1）；Browser subagent Wayland 失败（#21983）；`/bug` 缺失子 Agent 上下文（#21763）
- **OpenCode**：Agent 重复消息（#20699）、per-session approval 需求（#47918）
- **Copilot CLI**：并发 Sub-Agent 状态损坏（#2543）

**共识诉求**：终止信号标准化、子代理轨迹可观测、工具审批可独立策略化。

### 4. ⚡ TUI 性能与渲染（**4 个工具**）
- **Claude Code**：WindowServer 120Hz 重渲染 CPU 47%（#94003）
- **Codex**：Astra sparkle 动画阻断选区（#44398 · 16 👍）；状态回放计时丢失（#19984）
- **Gemini CLI**：终端闪烁 + stdout 竞争（#29294）
- **pi**：TUI 流式单核 100%（#6665 · 6 👍）；jiti 启动加载慢（#9540）
- **OpenCode**：大文件扫描冻结（#38201）、iOS PWA safe area

**共识诉求**：TUI 流式渲染管线优化、Ink/alt-screen 一致性、长会话内存管理。

### 5. 🔐 模型 Provider 兼容与路由（**6 个工具**）
- **Gemini CLI**：`--model` 被静默改写为更新版本（#29420、#29222）、>128 工具触发 400（#24246）
- **Codex**：GPT-5.6 Sol 1M 上下文被服务端 cap 到 872K
- **jcode**：GPT-5.6 Luna 上下文报告错误（#1323）、Antigravity 429（#1329）、OpenAI 兼容层空参数（#1326）
- **OpenCode**：原生 Anthropic provider SchemaError（#34652）、`tool_call: false` 未生效（#35432）、SSE `event:` 解析
- **pi**：Meta Muse 订阅 OAuth（PR #9096）、Gemini stop reason 映射
- **Claude Code**：模型路由隐式降级未通知

**共识诉求**：模型路由显式化、provider-specific 字段透传、服务端策略 vs 本地配置对齐。

### 6. 📋 上下文压缩与持久化（**3 个工具**）
- **pi**：压缩后失效签名 thinking 块重放（#9391）、自定义消息丢失（#9051）、工具列表坍缩（#9789）、取消时序（#9781/#9779）
- **Gemini CLI**：`/compress` 不持久（#21335）、`PersistentState` 原子写（#29402）
- **Copilot CLI**：长会话 OOM（#4699 · 6 👍）、自动压缩死循环（#3621）、路径指令膨胀（#1423 · 6 👍）

**共识诉求**：压缩生命周期可观测、原子化持久化、缓存键与签名一致性。

---

## 四、差异化定位分析

| 工具 | 模型阵营 | 核心定位 | 目标用户 | 技术路线差异化 |
|------|---------|---------|---------|----------------|
| **Claude Code** | Anthropic 独家 | 模型行为最优化 | 偏好 Opus 5 长上下文能力的高级用户 | Subagent + CLAUDE.md 规则契约 + Cowork 远程 |
| **OpenAI Codex** | OpenAI 独家 | 多模态端侧 Agent | 桌面/浏览器自动化、Pro 订阅用户 | Computer/Browser Use + rust 客户端 + TUI transcript_v2 |
| **Gemini CLI** | Google 独家 | Agent 编排 + 工具智能化 | 大型代码库、多项目开发者 | AST 感知工具 + Auto Memory + ACP 集成 |
| **Copilot CLI** | GitHub 多模型 | MCP 生态 + IDE 对齐 | VS Code 重度用户、企业 | github-mcp-server + VS Code 体验对齐 |
| **Kimi Code CLI** | Moonshot | 中文 / 本土化体验 | 中文开发者、Windows 用户 | YOLO 模式 + 伪 cwd + Shell 模式 |
| **OpenCode** | 协议中立 | 远程化 / 自动化 | 自托管、ACP 集成商 | ACP over WebSocket + 多 provider + Zen 免费层 |
| **jcode** | 协议中立 | TUI 极客 / 配置即策略 | Power user、CLI 调优爱好者 | `@file` mention picker + 预算压力提示 + 引用回溯 |
| **pi** | 协议中立 | 性能 + 扩展 API | 长期会话、嵌入式 SDK 用户 | Prompt Cache Warming + 启动预算 + 扩展 systemPromptAppend |

**关键差异化信号**：
- **协议中立派（OpenCode/jcode/pi）** 正在围攻 **模型独家派（Claude/Codex/Gemini）**，通过 Provider 适配 + 极致 TUI 体验形成局部优势。
- **GitHub Copilot CLI** 处于"补 MCP 课"阶段，尚未形成显著差异化，但凭借 GitHub 生态入口仍是企业默认选项。
- **Kimi Code CLI** 走出"中文/Windows"细分赛道，与 Moonshot 模型绑定紧密，社区规模偏小但议题集中。

---

## 五、社区热度与成熟度

### 🔥 高热度（评论密度 + 议题代表性）
| 排名 | 工具 | 标志性议题 | 评论数 | 阶段判断 |
|------|------|-----------|--------|----------|
| 1 | Codex | #43337 容量错误跨模型 | 56 | **企业级阵痛期** |
| 2 | Claude Code | #90542 Opus 5 规则失守 | 33 | **模型信任危机期** |
| 3 | pi | #5653 Shrinkwrap 依赖 | 20 | **架构重构期** |
| 4 | Codex | #40968 Windows 桌面发送卡死 | 44 | **跨平台补课期** |
| 5 | Gemini CLI | #22323 Subagent 假成功 | 13 | **多 Agent 成熟期** |
| 6 | jcode | #679 Memory sidecar 硬编码 | 13 | **架构打磨期** |

### ⚙️ 迭代节奏
- **高速迭代（每日 Release）**：Codex（2 alpha）、Gemini CLI（nightly）、pi（minor）
- **按需迭代**：Claude Code、OpenCode、jcode（无新版本但议题密集）
- **静默维护**：Copilot CLI（仅清理已 CLOSED issue，无 PR 提交）、Kimi Code CLI

### 🧭 成熟度判断
- **成熟期**：Claude Code（功能齐备，进入行为可靠性优化阶段）
- **快速扩张期**：Codex（alpha 节奏加快、PR 批量合入 transcript_v2）、Gemini CLI（nightly + AST 演进）
- **生态重构期**：pi（依赖结构 / 扩展 API 重塑）
- **协议演进期**：OpenCode（ACP 从单机走向远程）、Copilot CLI（MCP 标准化）
- **打磨期**：jcode（多 provider 适配 + TUI 细节）
- **稳定维护期**：Kimi Code CLI（Windows 中文场景稳扎）

---

## 六、值得关注的趋势信号

### 趋势 1：🧠 **"假成功"信号失真正在侵蚀 Agent 信任根基**
Gemini CLI 的 #22323、Claude Code 的 #890

---

## 各工具详细报告

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills 社区热点

> 数据来源: [anthropics/skills](https://github.com/anthropics/skills)

<think>The user wants me to analyze data from the anthropics/skills GitHub repository and generate a community hot report. Let me analyze the data carefully.

First, let me note something important: all PR comments show "undefined" which is unusual. Let me look at the data again - it seems like the comment counts for PRs are not provided in a usable way, but Issues have clear comment counts.

Let me work with what I have:

**PRs (20 shown):**
- #1298 - fix(skill-creator): isolate trigger evals - opened 2026-06-10, updated 2026-09-16
- #1771 - feat(skills): add proofcore-contract-auditor - opened 2026-09-15
- #1742 - fix(mcp-builder): support mcp>=2 - opened 2026-09-08
- #1703 - Add md2video-audio skill - opened 2026-09-01
- #1734 - Detect orphaned docx comments - opened 2026-09-06
- #525 - Add pyxel skill for retro game development - opened 2026-03-05
- #514 - Add document-typography skill - opened 2026-03-04
- #1615 - Add scnet-hpc skill - opened 2026-08-20
- #822 - feat: add AWT (AI Watch Tester) - opened 2026-03-31
- #538 - fix(pdf): correct case-sensitive file references - opened 2026-03-06
- #486 - Add ODT skill - opened 2026-03-01
- #210 - Improve frontend-design skill - opened 2026-01-05
- #83 - Add skill-quality-analyzer and skill-security-analyzer - opened 2025-11-06
- #1776 - Add blast-radius skill - opened 2026-09-17
- #541 - fix(docx): prevent tracked change w:id collision - opened 2026-03-06
- #539 - fix(skill-creator): warn on unquoted description - opened 2026-03-06
- #1790 - fix(docx): create document.xml.rels when missing - opened 2026-09-19
- #1769 - Fix skill-creator trigger detection reporting 0% recall - opened 2026-09-14
- #1765 - fix(office): decode redlining diffs as UTF-8 - opened 2026-09-14
- #1724 - mcp-builder: update evaluation.py default model - opened 2026-09-04

**Issues (15 shown):**
- #492 - Security: Community skills distributed under anthropic/ namespace (43 comments, 2 👍)
- #228 - Enable org-wide skill sharing in Claude.ai (16 comments, 8 👍)
- #556 - run_eval.py: claude -p never triggers skills/commands (12 comments, 7 👍)
- #62 - All my skills have disappeared (10 comments, 2 👍)
- #1329 - Proposing compact-memory skill (9 comments, 0 👍)
- #202 - skill-creator should be updated to best practice (8 comments, 1 👍) [CLOSED]
- #412 - Skill proposal: agent-governance (6 comments, 0 👍) [CLOSED]
- #189 - document-skills and example-skills plugins install identical content (6 comments, 9 👍)
- #1487 - claude-api skill eagerly injects ~156k tokens (4 comments, 0 👍)
- #1390 - mcp-builder: evaluation.py scores 0/N (4 comments, 0 👍)
- #1385 - Reasoning Quality Gate Pipeline (4 comments, 1 👍)
- #1175 - SharePoint Online security concerns (4 comments, 0 👍) [CLOSED]
- #29 - Usage with bedrock (4 comments, 0 👍)
- #16 - Expose Skills as MCPs (4 comments, 0 👍)
- #1362 - web-artifacts-builder: bundle/init scripts fail (3 comments, 0 👍)

Now let me structure the analysis. Since PR comments are "undefined", I should use other signals like activity (last updated) and thumbs up as proxies for "热度".

Let me note that PR comments are undefined, so I'll use last-updated dates and 👍 counts (though they all show 0) as proxies. Actually I should be transparent about this.

Let me focus on creating the report:

1. **热门 Skills 排行** - I'll rank by recency of updates and PR type (since we don't have comments, recent activity + features are most relevant)

2. **社区需求趋势** - From issues, the themes are clear:
   - Security/trust (Issue #492 with 43 comments - dominant)
   - Org-wide sharing (#228 - 16 comments)
   - Skill evaluation reliability (#556, #1390, #1769)
   - Agent governance/safety (#412, #1385)
   - MCP integration (#16)
   - Context window optimization (#1487)
   - Platform compatibility (#29 - Bedrock)
   - Memory/state management (#1329 - compact-memory)
   - Destructive operation safety (#1776 - blast-radius)

3. **高潜力待合并 Skills** - These are the recent active PRs that haven't been merged

4. **Skills 生态洞察** - The most concentrated demand seems to be:
   - Security/trust boundaries (#492 has by far the most comments)
   - Skill evaluation infrastructure reliability
   - Agent safety/governance

Let me write the report in Chinese as requested, professional and concise.

Looking at PRs more carefully for "热门":
- #1776 (blast-radius) - very recent, addresses destructive ops
- #1771 (proofcore-contract-auditor) - Web3, security
- #1703 (md2video-audio) - creative content
- #822 (AWT) - E2E testing, AI-driven
- #83 (skill-quality-analyzer + skill-security-analyzer) - meta skills
- #525 (Pyxel retro game) - creative
- #514 (document-typography) - quality of AI output
- #486 (ODT skill) - document format coverage

Since comments are undefined for PRs, I'll focus on the most discussed/updated recent ones and clearly note the limitation.

Let me write this report now in Chinese.</think>

# Claude Code Skills 社区热点报告
*数据截止：2026-09-20*

---

## 1. 热门 Skills 排行（基于活跃度与社区反馈）

> ⚠️ **数据说明**：本次数据集中 PR 评论数（comments）字段均为 `undefined`，无法直接按评论数排名。以下排序综合 **PR 最近活跃时间、Issue 关联度、功能创新性** 三个维度遴选。

### 🥇 #1776 `blast-radius` — 破坏性写操作的安全检查清单
- **作者**：@kishormorol ｜ **状态**：OPEN（2026-09-17 创建，9-18 最新更新）
- **功能**：在执行批量删除、撤销权限、群发邮件等大规模破坏性操作前，提供分级 checklist，避免"行级正确但世界级错误"
- **讨论热点**：契合社区对 Agent 安全治理的强烈呼声（呼应 Issue #412 agent-governance、#1385 推理质量门）
- 链接：https://github.com/anthropics/skills/pull/1776

### 🥈 #1771 `proofcore-contract-auditor` — Web3 智能合约审计
- **作者**：@ProofCore-Protocol ｜ **状态**：OPEN（2026-09-15）
- **功能**：对 Solidity/Rust 合约做静态分析，并将审计证明锚定到 TON 区块链（零存储 Merkle 协议）
- **讨论热点**：首个面向 Web3 开发者的 Skill，代表 Skills 生态向垂直行业（区块链安全）扩展
- 链接：https://github.com/anthropics/skills/pull/1771

### 🥉 #1703 `md2video-audio` — Markdown 转 MP4 视频
- **作者**：@70v-Yoyo ｜ **状态**：OPEN（2026-09-01 创建，9-15 更新）
- **功能**：将 Markdown 通过 Marp 编译为幻灯片，再合成带 AI 语音的 MP4 视频，零成本链路
- **讨论热点**：填补 AI 内容生产最后一公里（文字→视频），与"内容创作自动化"主线高度契合
- 链接：https://github.com/anthropics/skills/pull/1703

### #4 #822 `AWT (AI Watch Tester)` — AI 驱动的 E2E 测试
- **作者**：@ksgisang ｜ **状态**：OPEN（2026-03-31 创建，**9-19 最新更新**——长期活跃）
- **功能**：给 Claude 视觉能力 + 浏览器控制，零代码生成 E2E 测试
- **讨论热点**：测试自动化是社区持续诉求，从 3 月创建保持近半年活跃说明迭代需求强
- 链接：https://github.com/anthropics/skills/pull/822

### #5 #525 `pyxel` — 复古游戏开发
- **作者**：@kitao（Pyxel 作者本人） ｜ **状态**：OPEN（2026-03-05 创建，9-16 更新，6 个月仍未合并）
- **功能**：用 Pyxel 创建、调试、验证复古游戏，含确定性 headless 运行与帧检查
- **讨论热点**：作者是 Pyxel 框架原作者，长期未合并反映官方审核门槛较高
- 链接：https://github.com/anthropics/skills/pull/525

### #6 #514 `document-typography` — AI 生成文档的排版质量控制
- **作者**：@PGTBoos ｜ **状态**：OPEN（2026-03-04）
- **功能**：防止孤儿/寡妇段落、编号错位等所有 Claude 生成文档的常见排版缺陷
- **讨论热点**："影响每一个 Claude 生成的文档"的通用痛点，质量类 Skills 的代表
- 链接：https://github.com/anthropics/skills/pull/514

### #7 #83 `skill-quality-analyzer` + `skill-security-analyzer` — 元 Skills
- **作者**：@eovidiu ｜ **状态**：OPEN（2025-11-06）
- **功能**：对其他 Skill 做 5 维度质量评估 + 安全分析——评测 Skills 的 Skills
- **讨论热点**：与 Issue #492（社区 Skill 冒充官方）形成强协同，反映生态自治理需求
- 链接：https://github.com/anthropics/skills/pull/83

---

## 2. 社区需求趋势

从 15 条高评论 Issues 中可归纳 **6 大主线诉求**：

### 🔒 安全与信任（**最高优先级**）
- **#492 [43💬/2👍] 社区 Skill 在 anthropic/ 命名空间下冒充官方**——**全榜评论第一**，揭示严重的信任边界漏洞
- **#1175 [CLOSED, 4💬]** SharePoint Online 文档权限如何写入 SKILL.md
- **#1390 [4💬]** mcp-builder 评测静默伪造工具执行错误

### 🏢 组织级协作与分发
- **#228 [16💬/8👍]** Claude.ai 组织内 Skill 共享——**👍数最高**（强需求信号）
- **#189 [6💬/9👍]** document-skills 与 example-skills 内容重复导致上下文污染——**👍/评论比最高**

### 🧪 Skill 评估基础设施可靠性
- **#556 [12💬/7👍]** run_eval.py 中 `claude -p` 触发率 0%
- **#1390 [4💬]** evaluation.py 在真实 MCP server 上得 0/N
- **#1769 (PR)** skill-creator trigger detection 永远报 recall=0%
- **→ 三大 Bug 指向同一根因**：Skill 评估工具链系统性失效

### 🤖 Agent 治理与质量门
- **#412 [CLOSED, 6💬]** agent-governance：策略执行、威胁检测、信任评分
- **#1385 [4💬/1👍]** 推理质量门三段式：预校准→对抗审查→交付验证

### 📦 协议化与互操作
- **#16 [4💬]** 将 Skill 暴露为 MCP，统一软件 API 协议
- **#29 [4💬]** Skill 与 AWS Bedrock 的兼容使用

### 🧠 上下文与状态管理
- **#1487 [4💬]** claude-api skill 贪婪注入 156k tokens，单次工具调用撑爆上下文
- **#1329 [9💬]** compact-memory：长期 Agent 的符号化压缩状态表示
- **#62 [10💬]** 用户 Skill 神秘消失

---

## 3. 高潜力待合并 Skills（近期活跃的 OPEN PR）

| PR | 标题 | 创建→最近更新 | 潜力点 |
|---|---|---|---|
| **[#1776](https://github.com/anthropics/skills/pull/1776)** | blast-radius | 2 天 | 精准命中 Agent 治理热点，9-18 仍在更新 |
| **[#1790](https://github.com/anthropics/skills/pull/1790)** | fix(docx): create document.xml.rels | 1 天 | DOCX 文档修复，Issue 缺陷 #2 直接 PR，落地概率高 |
| **[#1769](https://github.com/anthropics/skills/pull/1769)** | Fix skill-creator trigger detection 0% recall | 6 天 | 直击 #556/#1721 评估失效 Bug |
| **[#1765](https://github.com/anthropics/skills/pull/1765)** | fix(office): decode redlining diffs as UTF-8 | 6 天 | 修复 #1707 Windows 非 UTF-8 locale，跨平台刚需 |
| **[#1771](https://github.com/anthropics/skills/pull/1771)** | proofcore-contract-auditor | 5 天 | 垂直行业首创，Web3 安全赛道 |
| **[#1742](https://github.com/anthropics/skills/pull/1742)** | mcp>=2 streamable_http_client 兼容 | 12 天 | 跟随官方 SDK 升级，几乎必合 |
| **[#1724](https://github.com/anthropics/skills/pull/1724)** | evaluation.py 默认模型升 claude-sonnet-5 | 16 天 | 模型版本跟随，合入阻力小 |
| **[#1734](https://github.com/anthropics/skills/pull/1734)** | Detect orphaned docx comments | 14 天 | 与 #1790 同属 DOCX 质量修复簇 |

> 📊 **规律观察**：9 月份新增 PR 多数聚焦"修复类"（fix）而非"新增 Skill"，说明官方与社区已意识到**评估/兼容性等基础设施问题优先于新 Skill 扩张**。

---

## 4. Skills 生态洞察（一句话总结）

> **当前社区最集中的诉求是「让 Skills 生态本身变得可信、可控、可评测」**——信任边界（Issue #492 单条 43 评论碾压式领先）、评估基础设施（3 个并行 Bug）、Agent 治理（governance/blast-radius/quality-gate 三大提案联动）三条主线共同指向同一结论：Skills 已度过"数量扩张期"，进入**质量、安全与可治理性**的建设阶段。

---

### 📎 附录：数据局限性提示
- 本批数据 PR 的 `comments` 与 `👍` 字段均缺失/为 0，PR 热度排序基于"最近更新时间 + 关联 Issue 引用 + 主题创新度"复合判断
- 15 条 Issues 中 **#492 一条独占 43 评论**（占前 15 条评论总量的 35%），呈现明显的"长尾分布"，社区议程被安全议题主导

---

<think>The user wants me to generate a daily report for the Claude Code community based on GitHub data from 2026-09-20. Let me analyze the data carefully.

Let me organize the information:

**Releases (past 24 hours):** None

**Issues (past 24 hours, top 30 by comments):**
1. #90542 - CLAUDE.md rule contract violations by Opus 5 (33 comments, 0 likes) - HIGHEST priority
2. #91424 - Opus 5 explicit user directives overridden (9 comments)
3. #93482 - Cowork device_commit_files stale write (8 comments)
4. #89687 - Windows Desktop MSIX updater issue (7 comments, 0 likes)
5. #77372 - Remote Control stale environments (7 comments, 2 likes)
6. #78369 - Plan side panel stale snapshot (4 comments)
7. #82610 - Desktop local sessions plugin tools (3 comments)
8. #89043 - Subagents cannot reply (CLOSED) (3 comments)
9. #94003 - WindowServer CPU 47% (3 comments)
10. #93528 - Messages hang at "Sending..." (2 comments)
11. #75511 - Pinned chats sort order (2 comments, 1 like)
12. #92649 - Feedback box transmits private content (2 comments) - SECURITY
13. #91816 - WSL regression in 2.1.259 (2 comments)
14. #95614 - Bash permission '*' wildcard replay (2 comments) - SECURITY
15. #86756 - Windows MCP server kill sessions (2 comments)
16. #76379 - Fable subagent model selection (CLOSED) (2 comments)
17. #84542 - VS Code diff tab auto-opens (2 comments)
18. #94355 - Cowork WebSocket blocked (1 comment)
19. #95620 - Sign-in message unclear (1 comment)
20. #95619 - Remote Control HTTP 403 (1 comment)
21. #94506 - Network access not applied (CLOSED) (1 comment)
22. #92520 - View/track feedback (1 comment)
23. #95444 - Local Network access denied (1 comment)
24. #93666 - MRU session cycling (1 comment, 1 like)
25. #95598 - Auth method in status line (1 comment)
26. #93749 - Fabricated user turn (1 comment)
27. #93239 - Enter interrupts instead of queueing (1 comment)
28. #95582 - Skill catalog descriptions missing (1 comment)
29. #82676 - Desktop SSH slash palette (1 comment, 1 like)
30. #95294 - Mark chat sessions complete (1 comment)

**Pull Requests (past 24 hours):**
1. #94847 - diff: first edit opens pane only when it has files
2. #95618 - telemetry: complete rows, built-in plugins only
3. #95587 - diff: resumed session opens pane, /clear leaves it

Now let me categorize the issues and PRs to create a structured report.

Key themes I see:
1. **Model behavior issues (Opus 5)** - Rule violations, ignored directives
2. **Cowork feature issues** - File commits, network access
3. **Security concerns** - Permission replay, feedback box
4. **Desktop app bugs** - Various UI/UX issues, plan panel, sending hangs
5. **Windows-specific bugs** - MSIX, MCP server, MCP conflicts
6. **Diff pane** - Multiple PRs related to diff pane behavior
7. **Authentication** - Sign-in confusion, Remote Control 403

Let me write a comprehensive Chinese daily report.</think>

# Claude Code 社区动态日报
**日期：2026-09-20**

---

## 📌 今日速览

今日社区关注的焦点集中在 **Opus 5 模型行为偏离**与**跨平台稳定性**两大主题。最受关注的 Issue #90542（33 条评论）揭示了 Claude Code 在长达 4.5 小时的会话中持续违反用户通过 `CLAUDE.md` 定义的规则合约，引发对模型指令遵循可靠性的广泛讨论。此外，权限系统、文件写入一致性、Desktop 应用 UI 状态同步等多类回归问题集中爆发，Diff 面板相关 PR 进入密集合入阶段。

---

## 🚀 版本发布

*过去 24 小时内无新 Release。*

---

## 🔥 社区热点 Issues（Top 10）

### 1. [#90542](https://github.com/anthropics/claude-code/issues/90542) — CLAUDE.md 规则合约被系统性违反（Opus 5）
- **热度**：33 条评论，0 👍
- **重要性**：用户精心编写并正确加载的 700 行 `CLAUDE.md` 规则在 4.5 小时会话中被 Opus 5 全面违反，包括模型曾逐字引述过的规则。该案例直接质疑模型对长篇系统指令的"持久遵循"能力。
- **社区反应**：高争议性议题，被视为对模型长上下文指令稳定性与"自洽性"（self-consistency）的核心挑战。

### 2. [#91424](https://github.com/anthropics/claude-code/issues/91424) — Opus 5 在写作任务中覆盖用户显式指令
- **热度**：9 条评论
- **重要性**：在非代码写作场景下，Opus 5 多次以"推断默认"覆盖用户显式指令，并出现注意力分散与"被纠正后质量退化"现象。

### 3. [#93482](https://github.com/anthropics/claude-code/issues/93482) — Cowork 设备文件写入延迟一个 Commit（数据一致性）
- **热度**：8 条评论
- **重要性**：`device_commit_files` 上报成功但磁盘内容滞后一个 commit，存在静默写入陈旧状态的隐患——`data-loss` 风险标签。

### 4. [#89687](https://github.com/anthropics/claude-code/issues/89687) — Windows Desktop MSIX 更新器在退出时强制重注册，导致 0x80070020
- **热度**：7 条评论
- **重要性**：更新器在运行中的 AppX 容器里强制重新注册，导致应用退出后无法再次启动（需登出才能恢复），影响所有 Windows Desktop 用户。

### 5. [#77372](https://github.com/anthropics/claude-code/issues/77372) — Remote Control：陈旧环境无法删除，幽灵会话持续 404
- **热度**：7 条评论，2 👍
- **重要性**：新注册的环境在第二次启动时也返回 404（不同 session_id），会话创建后 worker-attach 即丢失，已被官方标记 `has-repro`。

### 6. [#78369](https://github.com/anthropics/claude-code/issues/78369) — Plan 侧栏始终展示首次提案快照
- **热度**：4 条评论
- **重要性**：长会话多轮 Plan 模式下，点击 "Open plan" 始终显示第一次提案的内容，不随后续修订或计划文件切换更新——典型的 UI 状态绑定错位。

### 7. [#94003](https://github.com/anthropics/claude-code/issues/94003) — Claude Code Desktop 在响应流式输出时 WindowServer 占用 ~47% CPU
- **热度**：3 条评论
- **重要性**：性能问题。CoreAnimation 层树被以 120Hz 频率重新遍历，空闲时仅 3-6%，macOS 桌面端流畅度问题。

### 8. [#92649](https://github.com/anthropics/claude-code/issues/92649) — 反馈框默认开启，单次按键即可发送私有会话内容（安全隐患）
- **热度**：2 条评论
- **重要性**：安全相关——`area:security` 标签，被动反馈框在无确认的情况下传输会话内容，存在隐私泄露风险。

### 9. [#95614](https://github.com/anthropics/claude-code/issues/95614) — Bash 权限允许规则中带引号 `*` 被重解释为通配符（权限绕过）
- **热度**：2 条评论
- **重要性**：安全相关——`area:security`。"always allow" 持久化的 grep/glob 规则在重放时被错误展开为通配符，可能导致权限边界意外扩大。

### 10. [#75511](https://github.com/anthropics/claude-code/issues/75511) — 固定聊天排序：移动端与桌面端不一致（功能增强）
- **热度**：2 条评论，1 👍
- **重要性**：移动端按时间倒序，桌面端保留手动排序，缺乏统一排序模式与重置入口——反映跨端 UI 状态语义不一致。

---

## 🛠️ 重要 PR 进展（3 条）

> 注：今日仅有 3 个 PR 更新，均与 **Diff 面板行为修正**与**遥测机制**相关。

### 1. [#94847](https://github.com/anthropics/claude-code/pull/94847) — Diff 面板仅在有文件可显示时才自动打开
- **作者**：@bcherny
- **内容**：修改了首次 Edit/Write/NotebookEdit 时自动打开 Diff 面板的逻辑。当前实现会在获取内容之前就打开面板，导致面板空白或显示无关 worktree 的修改。新版要求面板只在确实有可展示文件时才展开。

### 2. [#95618](https://github.com/anthropics/claude-code/pull/95618) — 遥测：补全通过 `$` 收集的完整行，批量上报，仅服务内置插件
- **作者**：@poteat
- **内容**：遥测模块现在作用于 Claude Code 自带插件（仅内置）。通过 hook 读取事件来源（`next.origin`），拒绝用户安装或管理员列入的第三方插件，并附带原因；上报内容对齐 CLI 原有数据行格式。

### 3. [#95587](https://github.com/anthropics/claude-code/pull/95587) — Diff：恢复会话打开面板 / `/clear` 保持 / 起始时间跟随引擎
- **作者**：@poteat
- **内容**：将 diff 模块与内置面板的三处差异对齐：恢复会话时若历史中有编辑即刻打开面板（内置面板逻辑）、`/clear` 后保持面板、起始时间改用引擎返回值。

---

## 📈 功能需求趋势

从今日 Issues 中提炼的社区高频诉求方向：

| 方向 | 代表 Issue | 趋势判断 |
|------|-----------|---------|
| **Opus 5 模型可靠性** | #90542, #91424, #93749 | ⬆ 上升。规则遵循、避免幻觉用户回合成为首要焦虑 |
| **Desktop 应用状态同步** | #78369, #93239, #93528 | ⬆ 上升。Plan 面板、Enter 行为、消息发送挂起等回归集中爆发 |
| **权限/安全边界** | #92649, #95614, #86756 | 🔺 高敏感。"默认开启反馈"、"通配符重解释"涉及安全与隐私 |
| **远程协作（Cowork / Remote Control）** | #93482, #94355, #77372, #95619 | ⬆ 上升。云端文件提交延迟、WebSocket 拒绝、远程控制 403 |
| **WSL / Windows 兼容性** | #89687, #91816, #86756 | ⬆ 上升。MSIX、managed-settings、WSL2.1.259 回归 |
| **CLI 可观测性增强** | #92520, #95598 | ⬆ 上升。查看历史反馈、status line 暴露 auth 方式 |
| **跨端 UI 一致性** | #75511, #93666 | ⬆ 上升。固定聊天排序、会话切换顺序的端差异 |

---

## 💡 开发者关注点

综合今日 Issue 与 PR 数据，开发者反馈集中在以下痛点：

1. **模型对长篇指令的"一致性"严重不足**
   - 即使是逐字引述过的规则也会被违反；用户被迫对每个 turn 重新断言约束。这反映了大模型在长上下文中"指令持久化"的固有缺陷，是当前 Claude Code 最尖锐的体验痛点。

2. **Desktop 应用进入"快速迭代但回归频发"阶段**
   - Plan 面板快照陈旧、Enter 改为中断、消息卡 "Sending..."、WindowServer 性能问题、MSIX 更新器锁死进程——多个 UI 组件在不同 PR 周期内反复出现回归，开发者对稳定性的诉求高于新功能。

3. **权限系统的语义模糊带来安全风险**
   - 通配符在引号内的语义、always allow 后的重放规则，被报告会导致**已授权的边界意外扩展**。开发者呼吁规则持久化与运行时校验保持一致。

4. **"会话-文件"一致性需要更明确的契约**
   - Cowork 的"成功上报但磁盘滞后"暴露出 CLI 与文件系统的状态协议需要可观测化（mtime、commit index 暴露到日志）。

5. **插件/Skills 发现的初始化时机问题**
   - SSH 远程会话、`LocalPluginsReader` 仅找到内置 skill——开发者要求技能发现与 ccd-cli 初始化握手解耦，避免"首条消息后技能才出现"的诡异行为。

6. **遥测透明度**
   - 多个 Issue 提到希望"查看自己提交过的反馈"（#92520），以及在 status line 中暴露认证方式（#95598），反映开发者对**可观测、可审计**的需求持续增强。

---

*报告生成基于 2026-09-20 公开 GitHub 数据（Issues / PRs）。*

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

<think>Let me analyze the GitHub data for OpenAI Codex community daily report for 2026-09-20.

Key observations:
1. Two alpha releases: rust-v0.156.0-alpha.9 and rust-v0.156.0-alpha.8
2. 50 issues updated in past 24 hours, top 30 shown
3. 30 PRs updated in past 24 hours, top 20 shown

Top issues by comments:
- #43337 (56 comments): Account-specific capacity errors across Codex models - rate limits issue
- #40968 (44 comments): Windows Codex desktop Send button spins forever
- #43410 (41 comments): Windows Browser control fails with API-key auth
- #44135 (21 comments): Windows Chrome control fails with nodeRepl.fetch
- #41822 (10 comments): PerformanceCUA runtime materializer retries causing 8-minute first launch
- #44398 (10 comments): Astra composer sparkle animation prevents mouse text selection in kitty
- #19984 (9 comments): TUI loses active turn timer after state replay/restore
- #20605 (8 comments): Hot-load local MCP changes into existing thread
- #41437 (8 comments): Upwork MCP startup fails on Windows
- #45209 (7 comments): Queued follow-up message fails

All PRs are from copyberry[bot] and are CLOSED - these look like automated/AI-generated PRs focused on TUI improvements.

Let me organize this into a comprehensive Chinese daily report.

Key trends:
1. Windows-specific issues dominate - many bugs on Windows platform
2. Browser/Computer Use control issues prevalent
3. TUI improvements via PRs (closed status interesting)
4. Rate limits and capacity issues
5. MCP integration issues
6. Authentication problems

Let me draft the report now.</think>

# OpenAI Codex 社区动态日报
**日期：2026-09-20**

---

## 📌 今日速览

今日 Codex 项目集中发布了两个 Rust 版本的 Alpha 预发布（v0.156.0-alpha.8 / alpha.9），社区问题反馈仍高度集中在 **Windows 平台的浏览器/桌面控制、鉴权与稳定性问题**，以及 **ChatGPT 订阅的速率限制与配额异常**。与此同时，由自动化 bot 提交的大量 TUI（Transcript）交互优化 PR 集中进入 Closed 状态，显示出团队正在围绕新版 transcript_v2 进行大规模重构落地。

---

## 🚀 版本发布

| 版本 | 类型 | 说明 |
|------|------|------|
| [rust-v0.156.0-alpha.8](https://github.com/openai/codex/releases) | Alpha | 0.156.0 第 8 个 alpha 预发布 |
| [rust-v0.156.0-alpha.9](https://github.com/openai/codex/releases) | Alpha | 0.156.0 第 9 个 alpha 预发布 |

> ⚠️ 官方 Release Notes 暂未补充详细 changelog，建议关注后续 0.156.0 稳定版说明。Rust 端 alpha 节奏明显加快（一天两发）。

---

## 🔥 社区热点 Issues

1. **[#43337 账户级容量错误跨模型复现](https://github.com/openai/codex/issues/43337)** · 💬 56 · 👍 5
   ChatGPT Pro 20x 用户即便周配额充裕，`gpt-6-astra` / `gpt-5.6-luna` 仍报"account-specific capacity"错误。社区讨论极为活跃，是当前订阅与速率限制话题的代表性问题。

2. **[#40968 Windows 桌面发送按钮永久转圈](https://github.com/openai/codex/issues/40968)** · 💬 44 · 👍 17
   Win11 26.x 桌面端"发送"按钮持续旋转、提示词永远不提交，影响所有 Pro 用户，是本月 Windows 桌面端体验最严重的卡死类问题。

3. **[#43410 Windows + API Key 下浏览器控制失败](https://github.com/openai/codex/issues/43410)** · 💬 41 · 👍 17
   Edge 插件检测成功但首操作即报 `unsupported Codex auth method: apikey`。揭示了 **API Key 鉴权路径下 Computer/Browser Use 能力被屏蔽** 的设计缺陷，影响企业开发者。

4. **[#44135 Windows Chrome 控制 nodeRepl.fetch 失败](https://github.com/openai/codex/issues/44135)** · 💬 21 · 👍 4
   同一根因的另一表现——Chrome/Edge 浏览器控制全部失败，社区正推动将其合并到统一 issue 跟踪。

5. **[#41822 PerformanceCUA 首次启动耗时 8 分钟](https://github.com/openai/codex/issues/41822)** · 💬 10 · 👍 1
   MSIX 安装后首启期间，runtime materializer 会重试 **4,680 次失败加密拷贝**，磁盘与 CPU 都被吃满。性能类问题持续受到关注。

6. **[#44398 Astra composer sparkle 动画阻断 kitty 选区](https://github.com/openai/codex/issues/44398)** · 💬 10 · 👍 16
   GPT-6-Astra 在 kitty 0.48.2 下默认装饰动画阻止鼠标文本选择，👍 比例极高，反映出 **TUI 美观与可操作性** 的张力。

7. **[#19984 TUI 在状态回放后丢失 turn timer](https://github.com/openai/codex/issues/19984)** · 💬 9
   长寿 issue（自 4 月起），session 重启/恢复后计时器漂移，开发者长期呼吁。

8. **[#20605 MCP 工具热加载](https://github.com/openai/codex/issues/20605)** · 💬 8
   社区要求"在已有 Codex thread 中热加载本地 MCP 变更"，是 **MCP 开发闭环** 的核心痛点。

9. **[#41437 Windows Upwork MCP 启动失败](https://github.com/openai/codex/issues/41437)** · 💬 8 · 👍 4
   "Unexpected response type" 错误阻碍第三方 MCP 工具发现，Windows 用户占比明显偏高。

10. **[#45209 排队 follow-up 提交失败](https://github.com/openai/codex/issues/45209)** · 💬 7
    `App-server queued follow-up no longer exists` 错误表明 app-server 状态机在并发场景下仍存在一致性问题。

---

## 🛠️ 重要 PR 进展

> 今日新增/更新的 PR 几乎全部来自 `copyberry[bot]`，聚焦 **TUI transcript_v2 重构**，均已 Closed（合并或关闭），可见一次有组织的 TUI 大版本升级。

1. **[#46752 新会话/引导页加入动画 Codex logo](https://github.com/openai/codex/pull/46752)**
   在 fresh conversation 的 composer 上方空闲区域渲染旋转 logo，输入时淡出暂停，聚焦态隐藏，不影响光标位置。

2. **[#46751 TUI 增加 warning footer 与 warnings viewer](https://github.com/openai/codex/pull/46751)**
   诊断信息不再混入主会话；底部被动显示去重计数，可唤出专用 viewer。

3. **[#46750 启动草稿保留并在会话就绪后提交](https://github.com/openai/codex/pull/46750)**
   修复启动期 composer 接受编辑却忽略提交、配置屏幕设置未生效、失败时文本丢失等问题。

4. **[#46749 稳定 transcript 与 composer 交互](https://github.com/openai/codex/pull/46749)**
   持久状态与瞬态提示分离，提交本地命令时翻看历史可正常展示输出。

5. **[#46739 紧凑型 transcript 浏览与提示导航](https://github.com/openai/codex/pull/46739)**
   双 `Esc` 进入紧凑浏览，左右选提示、上下滚动、`Ctrl+T` 切详情、`Enter` 回溯；配套 inline overlay。

6. **[#46734 transcript 搜索与按 activity 详情控制](https://github.com/openai/codex/pull/46734)**
   `F3` / `/` 启动增量大小写不敏感搜索，按需加载历史、关闭后还原视图。

7. **[#46733 将交互式 transcript 接入 alternate-screen TUI](https://github.com/openai/codex/pull/46733)**
   在 `features.transcript_v2` 启用且 alt-screen 可用时，将历史与实时输出渲染在 composer 之上。

8. **[#46732 transcript viewer 增加选择与复制](https://github.com/openai/codex/pull/46732)**
   鼠标选区、词/行选区、拖拽自动滚动、`Ctrl+Space` 键选、修饰键点击打开链接。

9. **[#46731 渲染动态工具 activity 并保留 history 顺序](https://github.com/openai/codex/pull/46731)**
   修复动态 tool item 被忽略、回放与实时不一致、并发工具完成时排序错乱等问题。

10. **[#46720 transcript 布局跨测量与渲染缓存](https://github.com/openai/codex/pull/46720)**
    共享 cell 内容生成逻辑；外部状态变更即使 revision key 不变也能让 live tail 保持新鲜。

---

## 📈 功能需求趋势

通过对 Issues 与 PR 的归类，社区当前最强烈的诉求集中在以下方向：

| 方向 | 代表 Issue | 关注度 |
|------|-----------|--------|
| **🪟 Windows 平台稳定性** | #40968 / #43410 / #44135 / #44500 / #42484 | ⭐⭐⭐⭐⭐ |
| **🌐 Browser / Computer Use 跨平台一致** | #43410 / #44135 / #44500 / #44878 / #46212 / #44988 | ⭐⭐⭐⭐⭐ |
| **⚡ 速率限制 / 配额 / 模型容量** | #43337 / #28303 / #41325 | ⭐⭐⭐⭐ |
| **🔌 MCP 生态（热加载、第三方兼容）** | #20605 / #41437 | ⭐⭐⭐⭐ |
| **🖥️ TUI 可用性与 transcript 体验** | #44398 / #19984 / #9283 / PR 系列 #46708–#46752 | ⭐⭐⭐⭐ |
| **🔐 鉴权 / 账户 / 工作区路由** | #46382 / #43410 / #21982 | ⭐⭐⭐ |
| **🧠 新模型支持与上下文窗口** | #41325（GPT-5.6 Sol 1M 上下文受阻）/ #44302 | ⭐⭐⭐ |

---

## 💬 开发者关注点

1. **Windows 已成为体验短板**：浏览器控制、CUA 启动、CLI 沙箱、API Key 鉴权、桌面 app 卡死——Windows 几乎是每个高评论 issue 的主要受害平台，开发者强烈希望团队建立 **Windows-first 的回归测试矩阵**。

2. **鉴权模型与 Computer/Browser Use 能力不互通**：API Key 用户被显式屏蔽浏览器控制，Pro 订阅用户在 Windows 上 Browser 控制初始化反复失败。开发者呼吁统一鉴权路径下开放所有能力。

3. **速率限制语义不清晰**：#43337 的 56 条评论集中于"明明配额充足却报容量错误"，开发者迫切需要 **账户级 / 模型级 / 周窗口** 三层容量关系的可视化解释。

4. **MCP 开发迭代效率**：当前 MCP 工具一旦更新必须重启整个 Codex 会话，热加载成为社区长期呼声最高的功能增强请求之一。

5. **TUI transcript 体验进入集中重写期**：今日 13 个 TUI transcript 相关 PR 一次性合入，意味着 **transcript_v2 即将默认启用**；开发者应关注升级后是否会引入行为变化（按键绑定、布局、滚动算法）。

6. **新模型上下文窗口实际落地受限**：GPT-5.6 Sol 的 1M/900K 配置被 ChatGPT-backed 后端强制 cap 到 872K，本地放开无效，反映 **本地配置 vs 服务端策略** 之间的鸿沟。

7. **可访问性与替代输入**：#46701 出现"语音听写应当 free as in freedom"的诉求，显示无障碍场景开始进入 Codex 议题。

---

*数据来源：[github.com/openai/codex](https://github.com/openai/codex) · 抓取时间：2026-09-20*

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

<think>Let me analyze this GitHub data for Gemini CLI and generate a comprehensive daily report in Chinese.

Key observations:
1. There's a new nightly release v0.62.0-nightly.20260920.gcfbcaa8df
2. Issues span various areas - agent, security, core, platform
3. PRs include bug fixes, new features (AST-aware search), and release bumps
4. Major themes: agent reliability, subagent issues, memory system bugs, model selection

Let me organize this into a structured Chinese daily report.

Key issues to highlight (top 10 by importance/comments):
1. #22323 - Subagent recovery after MAX_TURNS bug (P1, 13 comments)
2. #19873 - Zero-Dependency OS Sandboxing (P2, 9 comments)
3. #21409 - Generalist agent hangs (P1, 8 comments, 8 likes)
4. #22745 - AST-aware file reads (P2, 7 comments)
5. #21968 - Gemini doesn't use skills/sub-agents enough (P2, 6 comments)
6. #26525 - Auto Memory redaction/security (P2, 5 comments)
7. #26522 - Auto Memory retry bug (P2, 4 comments)
8. #22232 - Browser agent resilience (P3, 4 comments)
9. #21983 - Browser subagent fails in wayland (P1, 4 comments)
10. #21000 - Native file tools for task tracker (P3, 4 comments)

Key PRs:
1. #29420 - Preserve explicit Gemini 3 Pro preview model IDs
2. #29292 - Validate history array in loadCheckpoint
3. #24554 - Persistent sticky topic header
4. #26540 - Resolve policy engine bugs
5. #29222 - Prevent rewriting pinned flash models
6. #29294 - Prevent terminal flickering
7. #29419 - Automated version bump
8. #29411 - Resolve resume latest to most recently active
9. #29368 - ACP session/load by ID
10. #29396 - AST-aware structural search tool
11. #29402 - Make persistent state writes failure-safe
12. #29407 - Preserve shared references in JSON
13. #29393 - Replace WriteToDo with persistent file-based tracking

Now let me write the report.</think>

# Gemini CLI 社区动态日报
**日期：2026-09-20**

---

## 📌 今日速览

今日 Gemini CLI 发布了 nightly 版本 `v0.62.0-nightly.20260920.gcfbcaa8df`，社区焦点集中在 **Subagent 行为可靠性**与 **模型路由一致性**两个方向：P1 级 Bug 显示 `codebase_investigator` 在触及 `MAX_TURNS` 上限后仍误报为 `GOAL` 成功，遮蔽了真实的执行中断；同时多项 PR 正集中修复 `--model` 参数被静默改写为更高版本（如 `gemini-3-pro-preview` → `gemini-3.1-pro-preview`）的问题。值得关注的是，**AST 感知代码搜索工具**首个实现 PR (#29396) 已提交，标志工具层正在从"行号猜测"向"符号级导航"演进。

---

## 🚀 版本发布

**v0.62.0-nightly.20260920.gcfbcaa8df** 已发布（机器人自动版本升级 PR #29419）。

- 完整变更对比：https://github.com/google-gemini/gemini-cli/compare/v0.62.0-nightly.20260919.gcfbcaa8df...v0.62.0-nightly.20260920.gcfbcaa8df
- 自动化升级 PR：https://github.com/google-gemini/gemini-cli/pull/29419

---

## 🔥 社区热点 Issues

### 1. [P1] Subagent 在 MAX_TURNS 后错误报告为 GOAL 成功  #22323
- **作者**：@matei-anghel | 💬 13 评论 | 👍 2
- **链接**：https://github.com/google-gemini/gemini-cli/issues/22323
- **为何重要**：这是当前评论数最高的 P1 Bug。`codebase_investigator` 在触发最大轮次限制后仍返回 `status: "success"` 与 `Termination Reason: "GOAL"`，导致上层 Agent 误以为子任务已完成，掩盖了真实的中断。该问题直接影响多 Agent 编排的可观测性与可信度。

### 2. [P1] Generalist Agent 永久挂起  #21409
- **作者**：@turmanticant | 💬 8 评论 | 👍 8
- **链接**：https://github.com/google-gemini/gemini-cli/issues/21409
- **为何重要**：👍 数最高的 Issue，反映社区强烈共鸣。只要模型 defer 到 generalist agent，包括简单 `mkdir` 在内的操作都会无限挂起，临时绕过方案仅是显式禁用委派。说明委派机制在通用场景下缺乏超时/兜底保护。

### 3. [P2] 零依赖 OS 沙箱 + 执行后意图路由  #19873
- **作者**：@abhipatel12 | 💬 9 评论
- **链接**：https://github.com/google-gemini/gemini-cli/issues/19873
- **为何重要**：与 Gemini 3 模型训练范式高度对齐——模型本质上偏好通过 POSIX 工具链（`grep`/`sed`/`awk`）操作代码库。该 EPIC 旨在不牺牲安全与 UX 的前提下释放这一原生能力，是 Agent 体验的关键基础设施方向。

### 4. [P2] 评估 AST 感知文件读取/搜索/映射的价值  #22745
- **作者**：@gundermanc | 💬 7 评论
- **链接**：https://github.com/google-gemini/gemini-cli/issues/22745
- **为何重要**：将工具调用从"按行号读取"升级到"按符号边界读取"是减少 token 噪声、避免上下文错位的根本手段。今日已有对应实现 PR #29396 提交，说明此项已进入落地阶段。

### 5. [P2] Gemini 极少自主调用 skills 与 sub-agents  #21968
- **作者**：@rnett | 💬 6 评论
- **链接**：https://github.com/google-gemini/gemini-cli/issues/21968
- **为何重要**：揭示了 Skills/Subagent 的可用性鸿沟——用户定义了 `gradle`/`git` 等技能，但模型在相近任务中几乎从不主动使用，必须显式提示。这直接影响扩展机制的实际价值。

### 6. [P2] Auto Memory 确定性脱敏与日志收敛  #26525
- **作者**：@SandyTao520 | 💬 5 评论
- **链接**：https://github.com/google-gemini/gemini-cli/issues/26525
- **为何重要**：Auto Memory 当前依赖模型在上下文中"事后"脱敏，敏感内容可能先进入模型上下文；同时技能内容存在被服务记录的风险。是当前最关键的安全类 Issue。

### 7. [P2] Auto Memory 反复重试低信号会话  #26522
- **作者**：@SandyTao520 | 💬 4 评论
- **链接**：https://github.com/google-gemini/gemini-cli/issues/26522
- **为何重要**：提取 Agent 拒绝读取某会话后，会话会无限期残留在索引中被反复暴露。属于记忆系统的可靠性与副作用控制问题。

### 8. [P1] browser subagent 在 Wayland 下失败  #21983
- **作者**：@sigmaSd | 💬 4 评论
- **链接**：https://github.com/google-gemini/gemini-cli/issues/21983
- **为何重要**：Browser Agent 在 Wayland 环境下完成时同样出现 `Termination Reason: GOAL` 但实际已失败，与 #22323 反映的问题模式一致，说明浏览器子代理的终止信号体系存在系统性偏差。

### 9. [P3] Browser Agent 会话接管与锁恢复  #22232
- **作者**：@hsm207 | 💬 4 评论
- **链接**：https://github.com/google-gemini/gemini-cli/issues/22232
- **为何重要**：`BrowserManager` 当前采用"快速失败"策略，在 profile 被占用时直接报错而非接管，社区期望增加自动会话接管与锁恢复能力。

### 10. [P1] Bug Report 不包含 Subagent 上下文  #21763
- **作者**：@rkj | 💬 2 评论
- **链接**：https://github.com/google-gemini/gemini-cli/issues/21763
- **为何重要**：`/bug` 报告只包含主会话信息，缺失 subagent 内部轨迹，使维护者难以复现与定位问题。配合 #22598（希望 subagent 轨迹可通过 `/chat share` 可见）形成完整诉求。

---

## 🛠️ 重要 PR 进展

### 1. fix(core): 保留用户显式指定的 Gemini 3 Pro 预览版模型 ID  #29420
- **链接**：https://github.com/google-gemini/gemini-cli/pull/29420
- 当用户显式 `--model gemini-3-pro-preview` 时，当前实现会在 `useGemini3_1` 启用时被静默改写为 `gemini-3.1-pro-preview`。该 PR 修复了"用户显式版本应被尊重"的不变量，仅 `auto`/`pro` 别名跟随 rollout。

### 2. fix(checkpoint): 在 loadCheckpoint 中校验 history 为数组  #29292
- **链接**：https://github.com/google-gemini/gemini-cli/pull/29292
- 针对 #29194：部分写入或损坏的 checkpoint JSON（如 `{"history": null}`）此前会被当作合法对象返回，导致 `/resume` 后续操作崩溃。该 PR 增加了数组类型校验。

### 3. fix(config): 阻止覆盖显式固定的 flash 模型  #29222
- **链接**：https://github.com/google-gemini/gemini-cli/pull/29222
- 与 #29420 同类问题：用户 `--model gemini-2.5-flash` 在 Vertex 等启用 Gemini 3.5 Flash GA 的后端上会被改写为 `gemini-3.5-flash`，在无 3.5 访问的环境下引发 4xx。该 PR 修复了固定版本被覆盖的问题。

### 4. fix(cli): 修复终端闪烁（stdout 竞争 + 光标焦点）  #29294
- **链接**：https://github.com/google-gemini/gemini-cli/pull/29294
- 根因分析定位 `ink` reconciler 在后台命令执行期间的两个并发瓶颈：stdout 写入竞争与光标恢复时机。配合 #21924（resize flicker）形成终端渲染质量改进的合力。

### 5. feat(agent): AST 感知结构化搜索工具  #29396
- **链接**：https://github.com/google-gemini/gemini-cli/pull/29396
- 实现 #22745 EPIC 的首个落地：基于轻量正则 AST 分析服务提供 `ast_search` 工具，支持符号级跳转，替代"猜行号 + 整文件读取"模式。

### 6. feat(tracker): 用持久化文件任务跟踪替换 WriteToDo  #29393
- **链接**：https://github.com/google-gemini/gemini-cli/pull/29393
- 关闭 #18836：基于 `TrackerService` 的 CRUD 系统取代仅存在于 LLM 上下文的 WriteToDo，解决"context rot"、高 token 成本与会话间任务丢失问题。

### 7. fix(core): 让持久化状态写入具备失败安全  #29402
- **链接**：https://github.com/google-gemini/gemini-cli/pull/29402
- `PersistentState` 现在写入唯一临时文件 → `fsync` → 原子 rename，避免中断写入留下截断文件并静默清空 CLI 状态。

### 8. fix(cli): 让 `resume latest` 解析为最近活跃会话  #29411
- **链接**：https://github.com/google-gemini/gemini-cli/pull/29411
- 修复 #29410：原先按"起始时间最新"选择，对长期主会话 + 短期 spike 的用户会恢复到 stale spike。新逻辑按"最近活跃时间"解析。

### 9. fix(acp): 即使无 resumable 内容也按 ID 解析 session/load  #29368
- **链接**：https://github.com/google-gemini/gemini-cli/pull/29368
- 修复 #29288：ACP 加载路径上若 session 文件存在且 header `sessionId` 匹配即应解析，不必依赖内容可恢复性。

### 10. fix(core): 解决策略引擎影响工具审批的多个 Bug  #26540
- **链接**：https://github.com/google-gemini/gemini-cli/pull/26540
- 修复 `buildParamArgsPattern` 中正则空字节问题等若干策略引擎 Bug，导致工具审批在 `YOLO`/`AUTO_EDIT` 模式下无法持久化并引发冗余审批弹窗。

---

## 📈 功能需求趋势

从今日活跃 Issue 提炼，社区最关注的方向集中在以下五类：

1. **Agent 编排可靠性（最热）**
   - Subagent 终止信号失真（#22323、#21983）、通用 Agent 挂起（#21409）、Bug 报告缺失子 Agent 上下文（#21763）等反映出多 Agent 系统的可观测性、终止语义、兜底超时仍是核心痛点。

2. **工具层从文本行号向 AST 符号演进**
   - EPIC #22745 / #22746 与实现 #29396 共同构成"AST 感知"主线，目的是降低 token 消耗、提升定位精度。

3. **记忆系统（Auto Memory）质量与安全**
   - #26525、#26522、#26523、#26516 集中指向记忆管道的副作用控制、脱敏一致性与无效补丁隔离。

4. **模型路由与版本固定**
   - 用户对 `--model` 显式值被静默改写高度敏感，#29420、#29222 与 #24246（>128 工具触发 400）共同指向"配置不变量"问题。

5. **任务跟踪与持久化基础设施**
   - #18836 / #29393（WriteToDo 替换）、#21335（`/compress` 不持久）、#29402（持久状态原子写）共同强化会话间连续性的基础设施。

---

## 💡 开发者关注点

综合 Issue 反馈与 PR 走向，今日开发者社区反映出以下高频痛点：

- **"假成功"信号失真**：多个 Subagent（`codebase_investigator`、browser）在实际失败/截断时仍返回 `GOAL`/`success`，使上层决策建立在错误前提上，是当前最普遍的信任危机来源。
- **Skills/Subagents 触发率低**：扩展机制存在但模型不主动调用，#21968 指出"必须在提示中显式要求"是常见 workaround，说明检索/触发链路与模型决策耦合不足。
- **`--model` 参数被静默改写**：固定版本得不到尊重，且改写行为在不同后端（Vertex vs 一般 GA）行为不一致，引发难以复现的 4xx 错误。
- **终端渲染质量**：#21924、#29294 同时关注 resize flicker、并发 stdout 竞争与光标焦点问题，影响长时间使用的实际体验。
- **会话/状态持久化的鲁棒性**：从 `/compress` 不持久（#21335）到 `state.json` 可能被截断清空（#29402），开发者期望"恢复即恢复，断电也不丢"。
- **安全与隐私边界**：Auto Memory 的脱敏依赖模型"事后处理"且可能日志敏感技能内容（#26525），是当前最敏感的安全债。

---

*日报基于 2026-09-20 过去 24 小时内更新的 50 条 Issue 与 16 条 PR 生成。*

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

<think>The user wants me to generate a daily community report for GitHub Copilot CLI based on GitHub data. Let me analyze the data carefully.

Key observations:
1. No new releases in the past 24 hours
2. No new PRs in the past 24 hours
3. There are 50 issues updated in the past 24 hours, with the top 30 shown
4. Most issues are CLOSED, suggesting many bug fixes have been merged
5. Some issues are still OPEN and need attention

Let me categorize the issues by importance:

**Top issues by comment count:**
1. #107 - Segmentation Fault on Alpine Linux (CLOSED, 16 comments) - Important cross-platform bug
2. #3439 - TUI rendering lag in tmux on Cygwin (CLOSED, 9 comments) - Windows compatibility
3. #4765 - Config not read from non-repo working directory (CLOSED, 8 comments) - Configuration issue
4. #4069 - TUI wedges mid-turn on WSL2 (CLOSED, 8 comments) - Windows/WSL issue
5. #4870 - MCP Figma server fails to load (OPEN, 7 comments, 11 likes) - MCP ecosystem issue
6. #4699 - OOM crash on long sessions (OPEN, 5 comments, 6 likes) - Performance/memory
7. #2543 - Concurrent sub-agent events corrupt session (CLOSED, 5 comments) - Multi-agent bug
8. #1381 - Rewind needs git (CLOSED, 5 comments, 11 likes) - Feature request
9. #2892 - MCP stdio closes after 4 seconds (CLOSED, 4 comments) - Sub-agent MCP issue
10. #4905 - Desktop app sessions die (OPEN, 4 comments, 2 likes) - Desktop app issue
11. #3355 - Allow configurable context window for Claude Opus 4.6 (CLOSED, 4 comments, 4 likes) - Model support
12. #2655 - cwd/branch no longer persist (CLOSED, 4 comments) - Session storage
13. #2151 - Hint texts not gray on WSL (CLOSED, 4 comments) - UI/Windows issue
14. #1675 - Checkpoint restore deletes untracked files (CLOSED, 4 comments) - Data loss issue
15. #4910 - MCP tool call hangs (OPEN, 3 comments) - MCP stability
16. #3481 - contextTier long_context not applied (CLOSED, 3 comments, 5 likes) - Configuration
17. #3589 - Multiple hooks only last one injected (OPEN, 2 comments, 2 likes) - Plugin/hook system
18. #3117 - Transient API errors in evening (CLOSED, 2 comments) - Network reliability
19. #4237 - Steering message dropped in preToolUse (CLOSED, 2 comments) - Permissions/hooks
20. #3733 - Ctrl+G cannot launch code-insiders on Windows (CLOSED, 2 comments) - Windows integration
21. #3621 - Auto-compaction loops infinitely (CLOSED, 2 comments) - Context memory
22. #3523 - Claude Opus 4.6 not supported for vision (CLOSED, 2 comments) - Model support
23. #2641 - Transient API errors (CLOSED, 2 comments) - Network reliability
24. #2571 - BOM prepended on WSL copy (CLOSED, 2 comments, 2 likes) - WSL bug
25. #1801 - Auto model selection (CLOSED, 2 comments, 10 likes) - Feature request
26. #1423 - Path-specific custom instructions bloat (CLOSED, 2 comments, 6 likes) - Context memory
27. #4913 - Text selection shifts viewport on Linux (OPEN, 1 comment) - Linux TUI
28. #4907 - MCP reconnect notifications flood (OPEN, 1 comment) - MCP UX
29. #3719 - Unable to add-dir with ~ on Windows (CLOSED, 1 comment) - Windows
30. #3411 - Suppress bell character (CLOSED, 1 comment) - Feature request

Important themes:
1. MCP ecosystem stability (multiple MCP-related issues)
2. Windows/WSL compatibility (many issues)
3. Context/memory management (auto-compaction, OOM)
4. Model support (Claude Opus 4.6, vision support, auto-selection)
5. Session management and resume capability
6. Hooks/plugins system
7. Sub-agent reliability

Let me select 10 most important issues to highlight:

1. #4870 - MCP Figma server fails (OPEN, high likes) - High-impact MCP ecosystem issue
2. #107 - Alpine Linux segfault (CLOSED with 16 comments) - Long-standing critical bug
4. #4699 - OOM on long sessions (OPEN) - Performance critical
5. #1381 - Rewind needs git (CLOSED, 11 likes) - High-demand feature
6. #4069 - TUI wedges on WSL2 (CLOSED, 9 likes) - Windows user pain
7. #1801 - Auto model selection (CLOSED, 10 likes) - Highly requested
8. #1423 - Custom instructions bloat context (CLOSED, 6 likes) - Context optimization
9. #3355 - Claude Opus 4.6 1M context (CLOSED, 4 likes) - Model capability
10. #4910 - MCP tool call hangs (OPEN) - MCP stability
11. #4905 - Desktop app sessions die (OPEN) - Critical desktop app
12. #3589 - Multiple hooks issue (OPEN) - Plugin system
13. #4907 - MCP reconnect flood (OPEN) - UX issue

Since there are no PRs in the past 24 hours, I'll note that.

Let me also analyze the overall pattern:
- Many issues are CLOSED, which suggests significant bug-fixing activity
- The closed issues span a wide range - platform issues, MCP issues, model issues
- Open issues focus on: MCP ecosystem, Desktop app, context memory
- High like counts indicate community validation of pain points

Now let me write the daily report in Chinese, structured professionally.

Let me consider the feature trends:
1. IDE/Editor integration (VS Code, code-insiders)
2. Platform compatibility (Windows, WSL, Linux, Alpine)
3. MCP ecosystem (server registration, stdio, WebSocket)
4. Context window management (auto-compaction, memory)
5. Model support (Claude Opus 4.6, vision, auto-selection)
6. Multi-agent/sub-agent reliability
7. Hooks/plugin system

Developer pain points:
1. Windows/WSL terminal rendering issues
2. MCP server compatibility (Figma specifically)
3. Long session OOM crashes
4. Context window bloat from instruction files
5. Sub-agent concurrent state issues
6. Transient API errors
7. Non-git VCS support (jj)
8. Memory dumps in working directory

Let me draft the report now.</think>

# GitHub Copilot CLI 社区动态日报

**📅 2026-09-20 · 聚焦 github/copilot-cli**

---

## 一、今日速览

过去 24 小时内 Copilot CLI 仓库无新版本发布、无新 PR 合并，但社区 Issue 活跃度较高 —— 50 条历史 Issue 被更新，其中 **绝大多数已 CLOSED**，显示团队正在集中清理一波历史 Bug（尤其是 Windows/WSL 终端渲染、MCP stdio 传输、Sub-Agent 并发状态等）。同时仍有多条高优 OPEN 议题聚焦在 **MCP 生态稳定性**、**桌面端会话** 与 **长会话内存管理** 上，值得关注。

---

## 二、版本发布

**无新版本发布**（过去 24 小时无 Release 活动）。

---

## 三、社区热点 Issues（按影响力筛选 Top 10）

| # | Issue | 状态 | 👍 | 重要性 |
|---|-------|------|----|--------|
| 1 | [#107](https://github.com/github/copilot-cli/issues/107) Alpine Linux 工具调用段错误（Segfault） | CLOSED | 4 | 评论数最高（16 条），跨平台运行时关键 Bug，影响 Alpine/Docker 容器用户 |
| 2 | [#4870](https://github.com/github/copilot-cli/issues/4870) MCP Figma 远程服务器加载失败（`-32601` 被视作致命错误） | **OPEN** | 11 | MCP 生态关键路径问题，VS Code 可用但 CLI 不可用，影响设计/前端协作工作流 |
| 3 | [#4069](https://github.com/github/copilot-cli/issues/4069) WSL2 + Windows Terminal 下 TUI 中途死锁（write EIO → EPIPE） | CLOSED | 9 | Windows 主流场景稳定性问题，点赞数极高，反映 WSL 用户长期痛点 |
| 4 | [#1381](https://github.com/github/copilot-cli/issues/1381) "Rewind 需要 git 仓库"——非 Git VCS（如 jj）用户被拒 | CLOSED | 11 | 高赞特性请求，反映非 Git 用户群体呼声；VS Code 端已支持，CLI 端对齐后意义重大 |
| 5 | [#1801](https://github.com/github/copilot-cli/issues/1801) 自动模型选择（Auto Model Selection） | CLOSED | 10 | 呼声最高的特性之一，与 VS Code 体验对齐的期待 |
| 6 | [#4699](https://github.com/github/copilot-cli/issues/4699) `--resume` 长会话触发 V8 堆 OOM（4 GiB 上限崩溃） | **OPEN** | 6 | 持续会话工作流的可靠性瓶颈，且 dump 文件污染 cwd |
| 7 | [#1423](https://github.com/github/copilot-cli/issues/1423) 路径级自定义指令意外膨胀初始上下文窗口 | CLOSED | 6 | 文档承诺"按需加载"，但实际全部塞入上下文，影响大规模 monorepo |
| 8 | [#4905](https://github.com/github/copilot-cli/issues/4905) 桌面端会话启动数分钟后死亡（凭据注册失效致 github-mcp-server 目录过期） | **OPEN** | 2 | 桌面 App 1.1.22 的稳定性关键问题，跨认证/会话/MCP 三层 |
| 9 | [#3355](https://github.com/github/copilot-cli/issues/3355) Claude Opus 4.6 上下文上限仅 200K（原生支持 1M） | CLOSED | 4 | 模型能力对齐，直接影响深度技术会话质量 |
| 10 | [#4910](https://github://github/copilot-cli/issues/4910) 非交互模式下 MCP 工具调用发送进度通知后挂起（直至 5 分钟 idle timeout） | **OPEN** | 0 | 今日最新 OPEN 议题，MCP 长任务执行链路的隐患 |

**补充关注：** [#3589](https://github.com/github/copilot-cli/issues/3589)（多个 hook 的 `additionalContext` 仅最后一条生效）、[#4907](https://github.com/github/copilot-cli/issues/4907)（MCP 重连通知污染历史）也均为 OPEN 状态，对插件/MCP 体系完整性有结构性影响。

---

## 四、重要 PR 进展

**过去 24 小时无 PR 更新或合并。** 建议关注已合并 PR 触发的 CLOSED Issue 列表以反推修复落地（如 #107、#4069、#1381 等的修复应已合入主干）。

---

## 五、功能需求趋势

通过对近 24 小时高赞与高活跃 Issue 的归类，社区关注热点呈现以下分布：

1. **🤖 模型能力对齐（高热度）**
   - 自动模型选择（[#1801](https://github.com/github/copilot-cli/issues/1801)，10 👍）
   - Claude Opus 4.6 1M 上下文解锁（[#3355](https://github.com/github/copilot-cli/issues/3355)）
   - 长上下文 Tier 的 CLI 标志缺失（[#3481](https://github.com/github/copilot-cli/issues/3481)）
   - Claude Opus 4.6 视觉能力（[#3523](https://github.com/github/copilot-cli/issues/3523)）

2. **🔌 MCP 生态稳定性（最关键趋势）**
   - 远程 MCP 服务器 discover 协议错误处理（[#4870](https://github.com/github/copilot-cli/issues/4870)）
   - stdio 传输在 Sub-Agent 中的提前关闭（[#2892](https://github.com/github/copilot-cli/issues/2892)）
   - 非交互模式下 WebSocket 挂起（[#4910](https://github.com/github/copilot-cli/issues/4910)）
   - 重连通知污染历史（[#4907](https://github.com/github/copilot-cli/issues/4907)）
   - 凭据过期致 MCP 服务目录失效（[#4905](https://github.com/github/copilot-cli/issues/4905)）

3. **🖥️ Windows / WSL 终端体验（持续痛点）**
   - tmux/Cygwin 下 TUI 卡顿（[#3439](https://github.com/github/copilot-cli/issues/3439)）
   - 中途死锁 EIO/EPIPE（[#4069](https://github.com/github/copilot-cli/issues/4069)）
   - WSL 复制粘贴 BOM 前缀（[#2571](https://github.com/github/copilot-cli/issues/2571)）
   - Ctrl+G 启动 code-insiders 失败（[#3733](https://github.com/github/copilot-cli/issues/3733)）
   - `~` 路径识别异常（[#3719](https://github.com/github/copilot-cli/issues/3719)）

4. **🧠 上下文与内存管理**
   - 自动压缩在大型指令文件下死循环（[#3621](https://github.com/github/copilot-cli/issues/3621)）
   - 路径指令污染初始上下文（[#1423](https://github.com/github/copilot-cli/issues/1423)）
   - 长会话 OOM（[#4699](https://github.com/github/copilot-cli/issues/4699)）

5. **🪝 Hooks / Plugins 体系**
   - 多 hook `additionalContext` 仅最后一条生效（[#3589](https://github.com/github/copilot-cli/issues/3589)）
   - `preToolUse` 拒绝时 rationale 静默丢失（[#4237](https://github.com/github/copilot-cli/issues/4237)）

6. **🗂️ 版本控制无关化**
   - Rewind 仅依赖 git，jj 等 VCS 用户被拒（[#1381](https://github.com/github/copilot-cli/issues/1381)）
   - 检查点恢复误删未跟踪文件（[#1675](https://github.com/github/copilot-cli/issues/1675)）

---

## 六、开发者关注点总结

综合 50 条活跃 Issue 的反馈，开发者社区当前的**核心痛点**可归纳为四类：

- **🔴 可靠性焦虑**：长会话/Sub-Agent 并发场景下频繁崩溃（OOM、状态损坏、上下文死循环），让"长时间无人值守的 Agent 工作流"难以建立信任。
- **🔴 MCP "能用但脆弱"**：远程 MCP（如 Figma）的 discover 协议错误被一刀切视为致命错误，stdio 在子代理中提前关闭，重连消息污染历史 —— MCP 已成为 CLI 体验的最大单点风险。
- **🟡 跨平台不一致**：Windows/WSL/Alpine 上的 TUI 渲染、键盘输入、路径处理、BOM 等"小问题"密集出现，跨平台质量被反复点名；同时 VS Code 与 CLI 在同一特性上（如 Rewind、自动模型选择）行为分裂，加剧迁移摩擦。
- **🟢 模型与上下文天花板**：Claude Opus 4.6 的 200K 限制、视觉能力缺失、auto model 缺席，使 CLI 在"重型任务"中落后于原生 IDE；上下文膨胀类问题进一步压缩实际可用空间。

**对开发者的建议：** 关注 [1.0.84+ 版本窗口](https://github.com/github/copilot-cli/issues?q=is%3Aissue)中 MCP 相关修复落地节奏，以及桌面端 1.1.22 之后的凭据/MCP 链路重做进展；MCP 服务提供方建议在 SDK 端对 `-32601` 等错误码提供更明确的 discover 重试语义。

---

*日报基于过去 24 小时 GitHub 数据生成，仅供参考。*

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

<think>Let me analyze the GitHub data for the Kimi Code CLI repository (MoonshotAI/kimi-cli) and generate a daily community report for 2026-09-20.

Key observations:
1. No new releases in the past 24 hours
2. 15 issues were updated (all CLOSED status)
3. 5 PRs were updated (2 OPEN, 3 CLOSED)
4. Most issues are from earlier dates (Jan-March 2026) but were updated/closed today
5. Topics cover: Windows bugs, UTF-8/encoding issues, MCP, shell mode, web UI, multi-task support

Let me identify the most important issues and PRs:

**Important Issues (selecting top 10):**
1. #773 - Windows ascii codec bug (1 like, 8 comments) - notable because it has the most likes and comments
2. #1332 - Ubuntu 22.04 upgrade error - common platform issue
3. #729 - Skip option for command execution (enhancement)
4. #1487 - HTTPS MCP issue
5. #1482 - Multiple tasks simultaneously question
6. #1436 - Gitbash start failure
7. #1429 - Windows Permission denied
8. #1340 - Web UI codeblock copy not function
9. #1321 - System kernel variable issues
10. #1414 - YOLO mode switch option (3 likes - highest likes)

Other notable issues with high engagement:
- #1289 - HTTP header illegal character
- #1492 - Commands length configurable
- #1475 - Display current directory in prompt (regression)
- #1452 - uv run kimi web 404
- #766 - Shell mode pseudo-cwd

**Important PRs (selecting top 10, but only 5 available):**
1. #2183 - fix(shell): attach dropped image paths eagerly (OPEN)
2. #2350 - fix: tolerate non-utf8 worker output (OPEN)
3. #2181 - fix: add Windows binary version info (CLOSED)
4. #2200 - fix(shell): adapt timeouts for long commands (CLOSED)
5. #2259 - fix: redirect stdio MCP stderr to logs (CLOSED)

Let me organize the report now. Since there are only 5 PRs, I'll include all of them.

For trends:
- IDE integration (VSCode plugin)
- Performance/speed improvements
- Windows platform compatibility (big theme)
- UTF-8/encoding handling
- MCP support
- Multi-task/parallel execution
- YOLO mode / autonomy
- Shell mode improvements
- Web UI improvements
- Display/UX improvements (command length, current directory display)

Developer pain points:
- Windows platform bugs (multiple)
- Encoding issues (UTF-8, ascii codec)
- Cross-platform compatibility (Gitbash, Windows, Ubuntu)
- Web UI feature gaps
- File permission issues on Windows</think>

# Kimi Code CLI 社区动态日报

**日期：2026-09-20** | **数据源：github.com/MoonshotAI/kimi-cli**

---

## 📌 今日速览

今日社区动态呈现"集中关闭、稳步推进"的特点——过去 24 小时内有 15 个历史 Issue 集中关闭，5 个 PR 完成更新或合并。无新版本发布。值得关注的是，Windows 平台兼容性问题（编码、权限、启动）已通过多个 PR 完成修复，社区长期反馈的痛点正在被系统性解决。

---

## 🚀 版本发布

无新版本发布（过去 24 小时内）。

---

## 🔥 社区热点 Issues

以下为今日更新且最具代表性的 10 个 Issue：

### 1. [#773](https://github.com/MoonshotAI/kimi-cli/issues/773) ⭐ Windows ASCII 编码崩溃
- **类型**: bug | **状态**: CLOSED | 👍 1 | 💬 8
- **关键点**: Windows 10 上输入任何内容即崩溃 `'ascii' codec can't encode characters`，是今日互动量最高的 Issue
- **意义**: 影响所有 Windows 用户，属于阻塞性体验问题

### 2. [#1414](https://github.com/MoonshotAI/kimi-cli/issues/1414) ⭐ 权限弹窗切换 YOLO 模式
- **类型**: enhancement | **状态**: CLOSED | 👍 3 | 💬 1
- **关键点**: 社区呼声最高的功能建议（👍 最多），希望权限询问时一键进入 YOLO 模式
- **意义**: 反映了开发者对"减少打断、提升自动化流畅度"的强烈诉求

### 3. [#1332](https://github.com/MoonshotAI/kimi-cli/issues/1332) Ubuntu 22.04 升级到 1.17.0 报错
- **类型**: bug | **状态**: CLOSED | 💬 3
- **关键点**: 升级路径回归问题，Linux 用户主要痛点之一

### 4. [#729](https://github.com/MoonshotAI/kimi-cli/issues/729) 命令执行增加 "skip" 选项
- **类型**: enhancement | **状态**: CLOSED | 💬 3
- **关键点**: 跳过有副作用或耗时的命令，让 TODO 流程持续推进，并提及 VSCode 插件需等宽字体显示命令
- **意义**: 同时涉及 CLI 与 IDE 集成的 UX 改进

### 5. [#1487](https://github.com/MoonshotAI/kimi-cli/issues/1487) HTTPS MCP 缺少默认 User-Agent
- **类型**: bug | **状态**: CLOSED | 💬 2
- **关键点**: HTTP MCP 客户端需补齐标准请求头，巴西开发者反馈

### 6. [#1482](https://github.com/MoonshotAI/kimi-cli/issues/1482) 是否支持多任务并行？
- **类型**: 咨询 | **状态**: CLOSED | 💬 2
- **关键点**: 反映社区对并发执行、模糊路径补全等基础交互体验的关注

### 7. [#1436](https://github.com/MoonshotAI/kimi-cli/issues/1436) GitBash 启动 kimi 失败
- **类型**: bug | **状态**: CLOSED | 💬 2
- **关键点**: Windows GitBash 环境下 CLI 启动异常，跨平台兼容性问题

### 8. [#1429](https://github.com/MoonshotAI/kimi-cli/issues/1429) Windows 并发写入 Permission denied [Errno 13]
- **类型**: bug | **状态**: CLOSED | 💬 2 | 👍 1
- **关键点**: v1.19.0 Windows 11 上的文件锁竞争问题

### 9. [#1340](https://github.com/MoonshotAI/kimi-cli/issues/1340) Web UI 代码块复制失效
- **类型**: bug | **状态**: CLOSED | 💬 2
- **关键点**: Web 端代码块点击复制无反应，影响核心使用流程

### 10. [#1475](https://github.com/MoonshotAI/kimi-cli/issues/1475) 提示框/标题显示当前目录（v1.15.0 回归）
- **类型**: enhancement | **状态**: CLOSED | 💬 1
- **关键点**: 升级后丢失当前目录显示，影响多项目开发者的上下文判断

> **备选关注**: [#1321](https://github.com/MoonshotAI/kimi-cli/issues/1321) 系统内核变量导致 CLI 全量失效（防御性清洗缺失）、[#1289](https://github.com/MoonshotAI/kimi-cli/issues/1289) `uname().version` 末尾空格引发 HTTP 头非法字符、[#766](https://github.com/MoonshotAI/kimi-cli/issues/766) Shell 模式伪 cwd 支持 `cd` 持久化、[#1492](https://github.com/MoonshotAI/kimi-cli/issues/1492) 可配置命令折叠长度。

---

## 🛠 重要 PR 进展

| # | 标题 | 状态 | 核心变更 |
|---|------|------|----------|
| [#2183](https://github.com/MoonshotAI/kimi-cli/pull/2183) | fix(shell): attach dropped image paths eagerly | 🟢 OPEN | 用户文本中检测本地图片路径并立即读取，作为 `ImageURLPart` 上传，避免短生命周期路径失效 |
| [#2350](https://github.com/MoonshotAI/kimi-cli/pull/2350) | fix: tolerate non-utf8 worker output | 🟢 OPEN | 修复 Windows 子进程输出 cp1252 等本地编码导致的 `UnicodeDecodeError`，补充回归测试 |
| [#2181](https://github.com/MoonshotAI/kimi-cli/pull/2181) | fix: add Windows binary version info | ✅ CLOSED | 从 `pyproject.toml` 生成 PyInstaller Windows 版本信息资源，CI 中加入非空 `FileVersionInfo` 断言 |
| [#2200](https://github.com/MoonshotAI/kimi-cli/pull/2200) | fix(shell): adapt timeouts for long commands | ✅ CLOSED | 为 `git submodule`、`git clone`、`pip install`、构建等命令自动延长超时；常规命令保持 60s |
| [#2259](https://github.com/MoonshotAI/kimi-cli/pull/2259) | fix: redirect stdio MCP stderr to logs | ✅ CLOSED | stdio MCP 子进程 stderr 路由至 `~/.kimi/logs/mcp/<server>.log`，避免污染交互终端 |

**PR 主题分布**：Windows 兼容性 ×2、超时/性能 ×1、Shell 输入处理 ×1、MCP 通道 ×1。

---

## 📈 功能需求趋势

从今日活跃的 Issues 中，社区诉求主要聚焦于以下方向：

1. **🪟 Windows 平台兼容性** —— 占比最高，涉及 ASCII 编码、GitBash 启动、文件锁、版本信息资源等
2. **🧩 IDE / Web UI 集成** —— VSCode 插件等宽字体、当前目录显示、Web UI 代码块复制、多任务并发
3. **⚙️ 自动化与权限 UX** —— YOLO 模式快速切换、skip 命令跳过、伪 cwd 持久化
4. **🔌 MCP 生态完善** —— HTTPS 传输头标、stdio 通道日志隔离
5. **🛡 健壮性与防御性编程** —— 系统变量清洗、uname 字段校验、UTF-8 解码容错
6. **⏱ 长命令与性能** —— 可配置命令折叠长度、自动适配慢命令超时

---

## 💬 开发者关注点

| 类别 | 高频痛点 |
|------|----------|
| **跨平台兼容** | Windows 编码、文件锁、GitBash、Ubuntu 升级回归 —— 用户基础最大的"基本盘"问题 |
| **减少人工打断** | YOLO 切换、skip 选项、cd 持久化 —— 反映"信任模型自主执行"的偏好增强 |
| **可观测性** | MCP stderr 泄漏、长命令无超时反馈 —— 开发者需要更清晰的日志与失败提示 |
| **上下文可见性** | 当前目录显示、命令折叠长度 —— 多项目开发中"我在哪、做了什么"的关键信息 |
| **多任务体验** | 并行执行诉求、模糊路径补全 —— 现有"串行会话"模型与真实开发节奏的落差 |

---

*日报生成时间：2026-09-20 · 数据窗口：过去 24 小时*

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

<think>Let me analyze the GitHub data for OpenCode and generate a comprehensive daily report for 2026-09-20.

Key observations:
1. No releases in the past 24 hours
2. Multiple high-engagement issues, particularly around ACP (Agent Client Protocol) features
3. Several billing/free-tier related issues are emerging
4. Multiple bug fixes in PRs, including TUI improvements, CLI hardening, and AI SDK fixes
5. Notable trend: WebSocket/remote access, per-session approval, managed connectors

Let me organize this into a structured Chinese daily report.

Top issues to highlight (by comment count and importance):
1. #13388 - ACP over WebSocket (9 comments, 9 likes) - CLOSED - major feature
2. #20699 - Agent duplicate message bug (7 comments)
3. #34652 - SchemaError with Anthropic provider (6 comments)
4. #35432 - tool_call: false ignored (5 comments, OPEN)
5. #49893 - Stripe/Alipay billing issue (4 comments, OPEN)
6. #35499 - MaxListenersExceededWarning (4 comments, CLOSED)
7. #47918 - Per-session approval through ACP (3 comments, OPEN)
8. #49755 - Console workspace budget bug (3 comments, OPEN)
9. #49486 - LaTeX rendering (3 comments, OPEN)
10. #50093, #50079, #50096 - Free usage limit issues (multiple)

Top PRs:
1. #50074 - Tabs visibility toggle (CLOSED)
2. #49863 - Plugin subpath exports fix
3. #49733 - Compatible Responses provider fix
4. #50092 - Hubu (new)
5. #49560 - TUI move session fix
6. #32370 - Linux clipboard support
7. #50067 - Tool availability announcement
8. #50068 - CLI hardening
9. #50058 - BytesBrains Cruise docs
10. #50075 - Service restart fail closed
11. #50071 - Session drain failures
12. #50069 - Default variant once
13. #50083 - OOS ecosystem docs
14. #50052 - V2 session selector

Let me write the report now.</think>

# OpenCode 社区动态日报
**2026-09-20**

---

## 📌 今日速览

今日社区讨论最活跃的话题集中在 **ACP（Agent Client Protocol）协议的扩展**：远程访问、每会话自动审批等高级特性持续收到关注。同时，**OpenCode Zen 免费额度的限流与冷却机制**引发多位用户反馈，多个相关 issue 集中爆发，提示平台在免费模型用量管理上存在体验问题。PR 方面则以 **TUI/CLI 健壮性修复** 为主，工具可用性变更通告、Linux 剪贴板主缓冲区支持等改进值得关注。

---

## 🚀 版本发布

过去 24 小时内无新版本发布。

---

## 🔥 社区热点 Issues

### 1. [#13388 [FEATURE] ACP over WebSocket for remote/network access](https://github.com/anomalyco/opencode/issues/13388)
- **状态**：已关闭（✅ Closed） | 💬 9 条评论 | 👍 9
- **要点**：希望将 Agent Client Protocol 暴露在 WebSocket 之上，使编辑器与客户端可以跨主机、跨网络使用 OpenCode。这是当日**关注度最高的特性请求**，也是 ACP 系列讨论的核心议题之一。

### 2. [#20699 Agent sends duplicate message](https://github.com/anomalyco/opencode/issues/20699)
- **状态**：已关闭（✅ Closed） | 💬 7 条评论
- **要点**：用户发送 "hello!" 后，Agent 产生两条 assistant 回复：一条隐藏消息 + 一条可见但内容为空（reasoning 显示"已回复"）。属于典型的状态机重复触发 bug。

### 3. [#34652 SchemaError with Anthropic native provider on nested array args](https://github.com/anomalyco/opencode/issues/34652)
- **状态**：已关闭（✅ Closed） | 💬 6 条评论
- **要点**：使用原生 Anthropic provider 时，`todowrite` 等工具若返回 JSON 编码的字符串而非真实数组，会触发 SchemaError。OpenAI / 其他 provider 不受影响。

### 4. [#35432 Config `tool_call: false` does not disable tools](https://github.com/anomalyco/opencode/issues/35432)
- **状态**：仍开放（🟢 Open） | 💬 5 条评论
- **要点**：模型配置中的 `tool_call: false` 未被 prompt loop 识别——`SessionTools` 被无条件解析并附带 `tool_choice="auto"` 发送请求，导致不支持工具调用的模型（如 morphllm）仍会失败。

### 5. [#49893 Failed to start Stripe setup when reauthorizing Alipay](https://github.com/anomalyco/opencode/issues/49893)
- **状态**：仍开放（🟢 Open） | 💬 4 条评论
- **要点**：Go 订阅续费的 Alipay 重新授权流程触发 Stripe 设置失败。涉及支付链路，10 月 2 日前需解决，对中国区用户影响显著。

### 6. [#35499 MaxListenersExceededWarning on `opencode web --mdns`](https://github.com/anomalyco/opencode/issues/35499)
- **状态**：已关闭（✅ Closed） | 💬 4 条评论 | 👍 2
- **要点**：运行 `opencode web --mdns` 一段时间后出现事件监听器累积警告，疑似 mDNS 模式下存在内存泄漏。

### 7. [#47918 [FEATURE] Expose per-session automatic approval (Yolo) through ACP](https://github.com/anomalyco/opencode/issues/47918)
- **状态**：仍开放（🟢 Open） | 💬 3 条评论
- **要点**：希望在 ACP 的 `configOptions` 与 `session/set_config_option` 中暴露可逆的、每会话的"自动批准"开关，提升自动化工作流效率。

### 8. [#49755 Console fails to load workspace budget / Free usage exceeded](https://github.com/anomalyco/opencode/issues/49755)
- **状态**：仍开放（🟢 Open） | 💬 3 条评论 | 👍 2
- **要点**：新版 OpenCode Console 无法加载 workspace budget，且在 24 小时内未使用任何免费模型的情况下仍报 "Free usage exceeded"，疑似配额计算 bug。

### 9. [#49486 LaTeX math formulas rendered as raw text in CLI/TUI](https://github.com/anomalyco/opencode/issues/49486)
- **状态**：仍开放（🟢 Open） | 💬 3 条评论
- **要点**：TUI/CLI 输出 `$...$` 或 `$$...$$` 的数学公式时直接展示源码，无法渲染 LaTeX，影响数学/逻辑类内容呈现。

### 10. [#50093 / #50079 / #50096 免费额度与冷却时长升级问题群](https://github.com/anomalyco/opencode/issues/50093)
- **状态**：均开放（🟢 Open）
- **要点**：用户在 Muse Spark 1.3 Free、MiMo V2.5 Free 等多个免费模型间切换时，遇到 *"Free usage exceeded, subscribe to Go"* 且**等待时间从 6h16m 逐步累加**的异常现象；另有用户报告冷却倒计时在额度耗尽后仍在延长。集中反映了 Zen 平台免费层限流策略的用户体验痛点。

---

## 🛠️ 重要 PR 进展

### 1. [#50074 feat(app): add tabs visibility toggle command](https://github.com/anomalyco/opencode/pull/50074)
- **状态**：已关闭 | 类型：feature
- **要点**：新增 `general.showTabs` 持久化偏好及对应快捷键，可在桌面/Web app 标题栏中显示/隐藏 session 标签栏，让界面更紧凑。

### 2. [#49560 fix(tui): allow custom destination path in move session](https://github.com/anomalyco/opencode/pull/49560)
- **状态**：开放 | 类型：bug fix
- **要点**：修复 `/move` 会话命令此前仅暴露当前项目的 worktree、拒绝项目外目标路径的问题，一次性关闭 4 个相关 issue。

### 3. [#49863 fix(plugin): support package subpath exports](https://github.com/anomalyco/opencode/pull/49863)
- **状态**：开放 | 类型：bug fix
- **要点**：修复插件加载时裸子路径（如 `pkg/subpath`）无法解析的问题，完善 package exports 兼容性。

### 4. [#49733 fix(core): register compatible Responses provider](https://github.com/anomalyco/opencode/pull/49733)
- **状态**：已关闭 | 类型：bug fix
- **要点**：在打包后的 provider 注册表中补齐 `@opencode/ai/providers/openai-compatible/responses` 入口，修复"文档存在但未注册"的可见性 bug。

### 5. [#50068 fix(cli): harden noninteractive runs](https://github.com/anomalyco/opencode/pull/50068)
- **状态**：开放 | 类型：bug fix
- **要点**：让 `opencode run` 的退出码反映终态执行结果，处理子会话中的权限/表单阻塞（含 `--auto` 自动化路径），并修复 web 搜索默认值与竞态取消问题。

### 6. [#50067 feat(core): announce top-level tool availability changes](https://github.com/anomalyco/opencode/pull/50067)
- **状态**：开放 | 类型：feature
- **要点**：跟踪对模型可见的工具名集合，仅在增量时（新增/移除）进行通告；被移除的工具会被显式标注"已不可用"，避免模型继续调用，提升 token 利用率。

### 7. [#32370 feat(tui): add `linux_clipboard_selection` for primary buffer support](https://github.com/anomalyco/opencode/pull/32370)
- **状态**：开放 | 类型：feature
- **要点**：为 Linux 终端加入剪贴板主缓冲区（PRIMARY）与"两者皆用"模式支持，修复 `wl-copy` 的 MIME 选择问题，覆盖长期社区需求。

### 8. [#50075 fix(cli): fail closed when service restart cannot stop incumbent](https://github.com/anomalyco/opencode/pull/50075)
- **状态**：开放 | 类型：bug fix
- **要点**：当 `service restart` 在 2 秒健康检查后误判"无服务"并误复用端口时，改用 fail-closed 策略，避免出现僵尸服务。

### 9. [#50071 fix(session): surface drain failures + check @mention skill permissions](https://github.com/anomalyco/opencode/pull/50071)
- **状态**：开放 | 类型：bug fix
- **要点**：修复 terminal() 因 `Cause.hasInterrupts` 误将真实失败归类为中断的问题，并补齐 `@mention` 触发的技能权限校验。

### 10. [#50052 feat(tui): v2 open session selector with `-s`](https://github.com/anomalyco/opencode/pull/50052)
- **状态**：开放 | 类型：feature
- **要点**：`opencode -s` 在未提供会话 ID 时直接打开 TUI 的 `/sessions` 列表，统一 v1 与 v2 的体验，便利用户在多 session 间导航。

---

## 📈 功能需求趋势

从过去 24 小时活跃及高赞议题提炼，社区最强烈的需求方向集中在以下几点：

| 方向 | 代表 Issue | 共识度 |
|------|-----------|--------|
| **ACP 远程化与扩展** | #13388（WebSocket）、#47918（per-session approval） | ⭐⭐⭐⭐⭐ |
| **模型提供商兼容性** | #34652（Anthropic 原生 provider）、#35432（tool_call 关闭）、#38106（SSE `event:` 字段） | ⭐⭐⭐⭐ |
| **免费额度与计费体验** | #50093、#50079、#50096、#49755、#49893 | ⭐⭐⭐⭐ |
| **TUI/CLI 健壮性** | #38110（macOS 挂起）、#49486（LaTeX）、#38201（大文件冻结） | ⭐⭐⭐⭐ |
| **跨系统集成与生态** | #38095（Google/Slack/Notion 托管连接器）、#38146（Claudexor）、#50083（oos） | ⭐⭐⭐ |
| **配置与会话管理** | #38163（自动命名）、#38165（命令模型保留）、#38167（tui.jsonc 覆盖） | ⭐⭐⭐ |

---

## 💡 开发者关注点

1. **协议层的"可控远程化"成为新焦点**
   ACP 作为 OpenCode 与外部编辑器/客户端的对接协议，社区正推动其能力边界从单机扩展到 WebSocket 远程化、Yolo 自动审批等安全敏感特性。

2. **多 provider 兼容仍是高频痛点**
   原生 Anthropic provider 的 SchemaError、自定义 OpenAI 兼容服务器的 SSE `event:` 解析、`tool_call: false` 未生效等问题说明：**provider 适配层需要更严格的输入归一化与契约校验**。

3. **"免费层"的体验是当前最大舆情风险**
   多位用户反映额度耗尽后冷却时间不断延长、Console 误报 budget 超限，对中小开发者与尝鲜用户极不友好。建议优先公开限流规则、提供手动重置入口。

4. **TUI/CLI 在边界场景下的健壮性需加强**
   大二进制文件扫描导致输入冻结、PWA 在 iOS safe area 处理不当、macOS v1.2.7+ 启动挂起、Windows PE loader 错误等反映出 **跨平台兼容性测试矩阵仍存在盲区**。

5. **社区生态正在自发丰富**
   BytesBrains Cruise、Claudexor、oos 等周边项目陆续进入 ecosystem 页面，呈现"OpenCode 作为内核 + 多元外壳"的发展态势，官方对 package exports 的支持（#49863）也为插件生态铺路。

---

*数据时间范围：2026-09-19 ~ 2026-09-20（UTC）*
*数据来源：[github.com/anomalyco/opencode](https://github.com/anomalyco/opencode)*

</details>

<details>
<summary><strong>jcode</strong> — <a href="https://github.com/1jehuang/jcode">1jehuang/jcode</a></summary>

<think>The user wants me to generate a Chinese daily report for the jcode community based on GitHub data. Let me analyze the data carefully.

Date: 2026-09-20

Looking at the data:
- No releases in the past 24 hours
- 24 issues updated (only 1 closed - #1316 about GitHub Sponsors)
- 16 PRs (2 closed - #1325 spam/contact attempt, #1317 Sponsors link added)

Let me categorize the issues:

**Newest issues (created today or yesterday):**
- #1332 (2026-09-20) - drag-to-copy autoscroll issue
- #1331 (2026-09-20) - cost estimates divergence with time-of-use pricing
- #1330 (2026-09-19) - ambient scheduler never receives rate-limit data
- #1329 (2026-09-19) - antigravity 429 RESOURCE_EXHAUSTED on consumer accounts
- #1327 (2026-09-19) - MCP servers from codex config lose enabled=false
- #1326 (2026-09-19) - OpenAI-compatible tools with empty {} arguments
- #1323 (2026-09-19) - GPT-5.6 Luna context reported as 272K instead of 1.05M
- #1321 (2026-09-19) - active session becomes invisible/unreachable
- #1318 (2026-09-19) - drag-to-copy returns shifted text on wrapped rows
- #1316 (CLOSED 2026-09-19) - GitHub Sponsors button

**Older but recently updated high-engagement issues:**
- #679 (13 comments, 1 like) - Memory sidecar backend hardcoded
- #677 (9 comments) - auto-retry backoff hardcoded
- #836 (9 comments) - /theme slash command
- #608 (8 comments) - /model picker doesn't survive relaunches
- #978 (8 comments) - test failures
- #835 (8 comments) - /mcp slash command
- #574 (7 comments) - OSC 9 progress for herdr
- #981 (7 comments) - swarm agents use wrong model
- #571 (7 comments) - custom OpenAI-compatible providers
- #897 (7 comments) - bash risk gate toggle
- #575 (7 comments, 1 like) - Cursor CLI ACP provider
- #898 (5 comments) - keyboard protocol stack not cleared
- #1232 (2 comments) - /sessions query
- #968 (2 comments) - Gemini API key issue

PRs:
- #1268 - @file mention picker (closes #570)
- #1328 - Preserve enabled=false when importing Codex MCP servers (closes #1327)
- #1325 (CLOSED) - spam PR
- #1324 - Disable clipboard on Android
- #1315 - Citation-backed memories
- #1312 - Budget-pressure notices
- #1280 - pre_request transform hook
- #1281 - Recurring schedules
- #1282 - Compaction lifecycle hooks
- #1322 - Compare consumed quota against elapsed window
- #1320 - Opt-in structural repo map provider
- #1314 - Tunable storage dedup threshold
- #1313 - Deterministic tool-result clearing
- #1319 - Keep drag-to-copy aligned on wrapped rows
- #1290 - Make Grok Build usable in Jcode
- #1317 (CLOSED) - GitHub Sponsors funding link

Now let me pick 10 issues and 10 PRs to highlight.

**Top 10 Issues (considering recency, engagement, importance):**

For top issues, I'll prioritize:
1. Issues with highest community engagement (comments/likes)
2. Recent issues that reflect current pain points
3. Issues spanning TUI, providers, MCP, configuration

1. #679 - Memory sidecar backend hardcoded (13 comments, high engagement)
2. #836 - /theme slash command and custom theme palettes (9 comments, frequently requested UX feature)
3. #835 - /mcp slash command (9 comments, important MCP feature)
4. #608 - /model picker doesn't persist (8 comments, common UX pain)
5. #677 - Auto-retry backoff hardcoded (9 comments, affects shared gateways)
6. #574 - OSC 9 progress for herdr integration (7 comments, ecosystem integration)
7. #575 - Cursor CLI ACP provider (7 comments, 1 like, new provider)
8. #571 - Custom OpenAI-compatible providers parity (7 comments, broad compatibility)
9. #981 - Swarm agents wrong model (7 comments, affects multi-agent workflows)
10. #1321 - Active session invisible/unreachable (0 comments but critical, hides running agent for 14 hours)

Or I could swap some for more recent ones:
- #1331 - Cost estimates divergence (critical billing issue)
- #1330 - Ambient scheduler never receives rate-limit data (degraded feature)
- #1329 - Antigravity 429 on consumer accounts (provider reliability)
- #1326 - OpenAI-compatible tools empty arguments (compatibility)

Let me think about this balance. The user wants to see "trends" and "what's most worth attention". I'll mix:
- High engagement issues that show community wants
- Critical/urgent recent issues
- Feature requests being actively discussed

Final 10 Issues:
1. #679 - Memory sidecar backend (highest engagement, 13 comments, 1 like)
2. #836 - /theme slash command (9 comments, UX feature)
3. #835 - /mcp slash command (8 comments, MCP)
4. #677 - Auto-retry backoff (9 comments, shared gateway)
5. #608 - /model picker persistence (8 comments, common pain)
6. #575 - Cursor CLI ACP provider (7 comments, 1 like, new provider)
7. #574 - OSC 9 progress (7 comments, ecosystem)
8. #571 - Custom OpenAI-compatible providers (7 comments, broad compatibility)
9. #1321 - Active session invisible/unreachable (critical safety issue)
10. #1329 - Antigravity 429 (provider reliability)
11. #1330 - Ambient scheduler rate-limit data (degraded feature)
12. #978 - 5 test failures (tech debt)

Let me pick 10:
1. #679 - 13 comments - Memory sidecar
2. #836 - 9 comments - /theme
3. #835 - 8 comments - /mcp
4. #677 - 9 comments - retry backoff
5. #608 - 8 comments - /model persistence
6. #575 - 7 comments, 1 like - Cursor ACP
7. #574 - 7 comments - OSC 9
8. #571 - 7 comments - OpenAI compat providers
9. #1321 - critical safety (active session disappears)
10. #1329 - antigravity 429

Top 10 PRs:
1. #1290 - Grok Build fix in Jcode (closes 5 issues, OIDC integration)
2. #1268 - @file mention picker (closes #570)
3. #1328 - Preserve enabled=false for Codex MCP (closes #1327)
4. #1319 - Drag-to-copy alignment fix
5. #1315 - Citation-backed memories
6. #1312 - Budget-pressure notices
7. #1280 - pre_request transform hook
8. #1281 - Recurring schedules
9. #1282 - Compaction lifecycle hooks
10. #1322 - Compare consumed quota against elapsed window

Or I could include:
- #1320 - structural repo map provider
- #1314 - tunable storage dedup
- #1313 - tool-result clearing

Let me go with the most interesting ones:

Final 10 PRs:
1. #1290 - Grok Build usable in Jcode (big, closes 5 issues)
2. #1268 - @file mention picker (closes #570)
3. #1328 - Preserve enabled=false for Codex MCP
4. #1319 - Drag-to-copy alignment fix
5. #1315 - Citation-backed memories
6. #1312 - Budget-pressure notices
7. #1280 - pre_request transform hook
8. #1281 - Recurring schedules
9. #1282 - Compaction lifecycle hooks
10. #1322 - Quota vs elapsed window time

Now for trends analysis:

**Feature Request Trends:**
- TUI/UX improvements: /theme, /mcp, /model persistence, /sessions query, @file mention
- MCP support: import from codex config, toggle from TUI
- Provider integration: Cursor CLI ACP, Grok Build, custom OpenAI-compatible providers
- Memory/context: configurable backend, citation-backed memories, repo map
- Pricing/cost: time-of-use pricing, quota tracking
- Reliability: rate limit handling, retry backoff

**Developer Pain Points:**
- Cross-platform (Android clipboard)
- tmux/terminal integration (keyboard protocol)
- Provider-specific bugs (Antigravity, Gemini, OpenAI)
- Model metadata accuracy (GPT-5.6 Luna context)
- Cost estimation accuracy
- Session visibility and management

Let me now write the report.

I need to be careful with the date - 2026-09-20. Some issues are dated as "2026-09-19" updated but created earlier. The current date is 2026-09-20.

Let me structure the report:

# jcode 社区动态日报 - 2026-09-20

## 今日速览
- ...

## 版本发布
无

## 社区热点 Issues
10 items

## 重要 PR 进展
10 items

## 功能需求趋势
Analysis section

## 开发者关注点
Analysis section

Let me write this out now. I'll be concise and professional.

Let me think more carefully about what each section needs:

1. **今日速览** - 2-3 sentences on most important updates today
2. **版本发布** - no releases, skip
3. **社区热点 Issues** - 10 issues with why important and community reaction
4. **重要 PR 进展** - 10 PRs with feature/fix description
5. **功能需求趋势** - extract feature directions from issues
6. **开发者关注点** - pain points/high-frequency needs

For the summary:
- Most important: Many TUI/UX improvements (drag-to-copy fixes, autocomplete features)
- Several critical provider-specific bugs (Antigravity 429, GPT-5.6 Luna context)
- Big feature PRs (Grok Build, citation-backed memories)
- Active session invisibility issue (#1321) - safety concern
- MCP ecosystem maturing

Let me write the final report.

I should use Chinese throughout, with GitHub links attached.

Actually, let me also include a brief mention of the closed items in some section, or in summary.

Now let me write the report:

```markdown
# jcode 社区动态日报 · 2026-09-20

## 今日速览

今日 jcode 社区动态以 **TUI 拖拽复制相关修复** (#1319, #1318, #1332) 与 **Provider 兼容性 Bug 报告** (#1323 GPT-5.6 Luna 上下文, #1329 Antigravity 429, #1326 OpenAI 兼容层) 为主线；同时 PR #1290 完成 Grok Build 接入（一次性关闭 5 个相关 Issue），并提交了一批围绕"配置即策略"的可调参数与扩展钩子（#1312/#1313/#1314/#1315/#1280/#1281/#1282）。值得提醒维护者的是 #1321 报告——活跃会话在创建新会话后从会话选择器中消失并持续向 git 仓库写入约 14 小时，存在静默失控风险。

## 版本发布

过去 24 小时无新版本发布。

## 社区热点 Issues

### 1. #679 — Memory sidecar backend 写死 OpenAI/Claude，忽略当前 provider
13 条评论 / 1 👍。sidecar 默认优先级 OpenAI > Claude > 当前 provider，Codex OAuth 过期时会导致 sidecar 误选后端，是社区反馈最集中的根因类问题。
🔗 https://github.com/1jehuang/jcode/issues/679

### 2. #836 — `/theme` slash command 与自定义主题调色板
9 条评论。提议在 TUI 内置 `/theme` 切换内置/自定义主题，自定义主题以 TOML 存放于 `~/.jcode/themes/`，呼声持续居高。
🔗 https://github.com/1jehuang/jcode/issues/836

### 3. #835 — `/mcp` slash command 启停 MCP servers
8 条评论。需要交互式开关 MCP 服务器并写入 `~/.jcode/mcp.json`，与 #1327/#1328 共同构成 MCP 体验闭环。
🔗 https://github.com/1jehuang/jcode/issues/835

### 4. #677 — Auto-retry backoff 与最大次数硬编码
9 条评论。共享网关下 `2s/4s/6s` 退避过短、3 次重试过早终止，社区要求暴露可配置。
🔗 https://github.com/1jehuang/jcode/issues/677

### 5. #608 — `/model` 切换在重启或新会话后丢失
8 条评论。每次启动回退到 `config.toml` 中 `[provider].default_model`，属于高频 UX 痛点。
🔗 https://github.com/1jehuang/jcode/issues/608

### 6. #575 — 新增 Cursor CLI ACP provider（cursor-acp）
7 条评论 / 1 👍。通过 stdio 上的 Agent Client Protocol 接入 Cursor，与现有直接 HTTPS 路径并行存在。
🔗 https://github.com/1jehuang/jcode/issues/575

### 7. #574 — 发送 OSC 9 进度用于可靠的 agent 状态检测（herdr 集成）
7 条评论。解决屏幕抓取脆弱性：旋转帧变化、状态文案版本依赖都会破坏 herdr 检测。
🔗 https://github.com/1jehuang/jcode/issues/574

### 8. #571 — 自定义 OpenAI-compatible provider 的 opencode 字段对齐
7 条评论。补齐 `display_name`、`reasoning`、`max_output_tokens`、`cost` 等字段，模型选择器体验与计费显示需要同步修复。
🔗 https://github.com/1jehuang/jcode/issues/571

### 9. #1321 — 活跃会话被新会话"挤掉"后从会话选择器消失且持续写仓库（≈14 小时）
0 评论但属于安全/可用性重大事件：用户既看不到也无法停止仍在执行的会话，强烈建议优先 triage。
🔗 https://github.com/1jehuang/jcode/issues/1321

### 10. #1329 — Antigravity provider 消费者账号 429 RESOURCE_EXHAUSTED（硬编码端点）
1 评论。`jcode --provider antigravity` 在消费者账号下立即 429，需切到正确的端点。
🔗 https://github.com/1jehuang/jcode/issues/1329

## 重要 PR 进展

### 1. #1290 — 让 Grok Build 在 Jcode 中可用（OIDC 接入）[type: fix, breaking-change]
一次性关闭 #1289/#1296/#1297/#1298/#1300。检测到 CLI OIDC token 时，聊天走 `cli-chat-proxy.grok.com/v1`，工具循环回归 Jcode 自管（OIDC）、Claude 同源逻辑；用户可在 Grok CLI 订阅下使用 Grok 4.6。
🔗 https://github.com/1jehuang/jcode/pull/1290

### 2. #1268 — `@file` mention picker（带 frecency 排序）[type: feature, area: tui]
关闭 #570。TUI 提示词支持 `@` 文件名补全，候选按"频次 × 最近"排序，先期覆盖 git 跟踪的项目本地文件。
🔗 https://github.com/1jehuang/jcode/pull/1268

### 3. #1328 — 保留从 Codex 配置导入的 MCP `enabled=false` [type: bug]
关闭 #1327。`load_from_codex_toml` 此前硬编码 `enabled: None`，导致 Codex 标记为 disabled 的 server 被错误启动；现读取并透传 `enabled` 字段。
🔗 https://github.com/1jehuang/jcode/pull/1328

### 4. #1319 — 拖拽复制在换行行上的列对齐修复 [type: bug, area: tui]
关闭 #1318。copy map 不再将列表悬挂缩进 / `│` gutter 这类显示前缀算作源文本；wrap 循环用 `sum(row widths) == first_copy_offset` 恢复前缀，连续行不再偏移。
🔗 https://github.com/1jehuang/jcode/pull/1319

### 5. #1315 — 引用回溯的 memory（含 JIT 验证）[type: feature, area: tools/security]
关闭 #1229。`SourceCitation`（路径 / 行区间 / sha256 / 行跨度文本 / 5 行重定位窗口）以 serde-defaulted None 挂在 `MemoryEntry`，无迁移；verify() 校验窗口，无 schema 改动。
🔗 https://github.com/1jehuang/jcode/pull/1315

### 6. #1312 — 确定性预算压力提示（75% / 90% / 70% 重置）[type: feature, size: M]
关闭 #1216。纯决策函数 + 约 30 行接入现有 accounting 与 transient-reminder，低于 70% 不改变行为。
🔗 https://github.com/1jehuang/jcode/pull/1312

### 7. #1280 — `pre_request` transform hook（请求出栈前改写）[type: feature, security]
外部命令通过 stdin 接收完整请求 JSON；exit 0 + JSON 重写、空 stdout 透传，其余失败开放（fail-open）。静态系统前缀视为只读上下文，避免破坏 split-prompt 缓存。
🔗 https://github.com/1jehuang/jcode/pull/1280

### 8. #1281 — 周期计划（chain-safe repeats，整列取消）[type: feature, area: tools]
`repeat_every_minutes` + `repeat_max_iterations`；每次执行前重新入队，崩溃/失败/漏醒都不会断链；按 recur id 整列取消；ambient cycle 显式禁止（避免与现有循环重叠）。
🔗 https://github.com/1jehuang/jcode/pull/1281

### 9. #1282 — 压缩生命周期 hook + 自定义摘要器 + 持久化来源 [type: feature, security]
在已有 fire-and-forget 总线上挂 `compaction_started`/`completed`/`emergency`；`summary_command` 通过 stdin 接收消息+触发+模式，stdout 修剪后作为摘要；持久化状态携带 trigger / </think>

</details>

<details>
<summary><strong>pi</strong> — <a href="https://github.com/earendil-works/pi">earendil-works/pi</a></summary>

<think>The user wants me to generate a Chinese-language daily report for the pi community based on GitHub data. Let me analyze the data carefully and structure the report.

Key observations:
1. There's a new release v0.86.0 with prompt cache warming feature
2. Multiple issues are being worked on, many related to:
   - Performance/TUI streaming issues
   - Compaction/cancellation bugs
   - Provider integrations (Meta API, OpenCode)
   - Documentation gaps
   - Extension API limitations
3. Multiple PRs being merged for various fixes
4. Several issues are CLOSED today, suggesting active maintenance

Let me categorize:

**Version**: v0.86.0 - Prompt cache warming (Anthropic only), bug reporting improvements

**Top Issues by importance** (selecting 10):
1. #5653 - Move off Shrinkwrap (high comment count: 20) - dependency management
2. #6665 - TUI pins a full core while streaming (13 comments, 6 👍) - performance
3. #8620 - 0.84.3 bundled CLI extension failures (9 comments) - critical bug
4. #7739 - Startup-time budget (9 comments) - performance
5. #2616 - SessionManager is sync-only (7 comments) - architecture
6. #8827 - LaTeX font switches (7 comments) - rendering bug
7. #9391 - Stale signed thinking blocks after compaction (6 comments, 1 👍) - bug
8. #9169 - Images in fullscreen TUI (5 comments, 1 👍) - rendering
9. #9051 - session_compact custom message miss (5 comments) - bug
10. #9789 - 0.86.0: request tools collapse after compaction - critical 0.86.0 regression

**Top PRs**:
1. #9668 - feat: prompt cache warming (closed) - new feature
2. #9096 - feat: add Meta provider with Muse subscription OAuth (open) - new provider
3. #9781 - fix: stop recovery after prompt cancellation (closed)
4. #9779 - fix: expose cancellable auto-compaction auth (closed)
5. #9776 - Per thinking sampling parameters (open)
6. #9329 - fix: detect Orca terminals as Kitty-image capable (open)
7. #9434 - feat: allow extensions to append to system prompt (closed)
8. #9570 - fix: map TOO_MANY_TOOL_CALLS to error stop reason (open)
9. #9746 - fix: handle CJK punctuation in file autocomplete (closed)
10. #9120 - fix: rank skill autocomplete by bare name (closed)

**Feature trends**:
- Performance optimization (TUI, startup, streaming)
- New model providers (Meta Muse)
- Compaction improvements
- Extension API enhancements
- Better terminal support
- Better CJK support

**Developer pain points**:
- Performance/TUI bottlenecks
- Sync vs async issues in SessionManager
- Compaction cancellation gaps
- Documentation vs implementation mismatches
- Dependency management (Shrinkwrap)
- Provider-specific field handling in extensions

I'll write this in a professional Chinese technical report format.</think>

# Pi 社区动态日报
**日期**：2026-09-20
**数据范围**：GitHub `earendil-works/pi` 仓库近 24 小时更新

---

## 一、今日速览

v0.86.0 正式发布，**Prompt Cache Warming** 成为本次更新最大亮点，仅 Anthropic 用户的有效成本优化。社区围绕 TUI 流式渲染性能、压缩（compaction）流程中的取消/认证漏洞、扩展 API 的字段透传等议题展开密集讨论；同时 Meta Muse 订阅 OAuth、新增思考模式采样参数等 PR 也持续推进。

---

## 二、版本发布

### v0.86.0 — https://github.com/earendil-works/pi/releases/tag/v0.86.0

**新特性**

- **Prompt Cache Warming**：在长时间工具调用运行期间（甚至可选地空闲时段）通过成本感知的刷新机制维持高价值 prompt 缓存热度，显著降低 Anthropic 用户的重复提示成本。详细配置见 [Cache Warming 文档](https://github.com/earendil-works/pi/blob/v0.86.0/packages/coding-agent/docs/settings.md#cache-warming)。
- **Bug reporting**（内容截断，详见 release 说明）

**值得关注的 0.86.0 回归**

- [#9789](https://github.com/earendil-works/pi/issues/9789) — 压缩后请求工具被坍缩至中间会话的工具更新，导致模型无法调用 read/edit/powershell
- [#9787](https://github.com/earendil-works/pi/issues/9787) — 导入 SDK 时嵌套的 undici 8.10.2 覆盖进程全局 dispatcher，使宿主应用 fetch 中止/流式失败

---

## 三、社区热点 Issues（10 条）

### 1. [#5653](https://github.com/earendil-works/pi/issues/5653) — Move off Shrinkwrap
- **作者**：@yoyofield | **状态**：OPEN · in progress · to-discuss | **20 评论**
- 同时安装 `@earendil-works/pi-ai` 和 `pi-coding-agent` 会产生两份 `pi-ai` 副本，因 API provider registry 是模块级 `Map` 而产生独立 provider 注册表，影响 LSP/扩展宿主场景。
- **重要性**：作为依赖管理层面的根本性问题，长期讨论度高，是 v0.86 之后 monorepo 重构的潜在方向。

### 2. [#6665](https://github.com/earendil-works/pi/issues/6665) — TUI 流式渲染时单核 100% 占用
- **作者**：@axelbaumlisto | **状态**：OPEN · in progress | **13 评论 / 6 👍**
- 长会话流式输出时 TUI 占满一个核心，热路径为 `Markdown.render` → wrap → 未缓存的 `Intl.Segmenter`。
- **重要性**：高赞数 + 直接复现，反映了 Markdown 重渲染与 ICU 分词的明显性能瓶颈。

### 3. [#8620](https://github.com/earendil-works/pi/issues/8620) — 0.84.3 全局扩展全部加载失败
- **作者**：@orchidautomation | **状态**：CLOSED | **9 评论**
- 升级到 0.84.3 后 `~/.pi/agent/extensions/` 下所有导入 `@earendil-works/pi-coding-agent` 的扩展报 `Cannot find module`。
- **重要性**：影响所有使用全局扩展的用户，是发布阻塞级别的问题。

### 4. [#7739](https://github.com/earendil-works/pi/issues/7739) — 设定启动时间预算，缩小与 jcode 的差距
- **作者**：@1am2syman | **状态**：OPEN | **9 评论**
- 提议为 pi 设定启动时间预算，目标是与 jcode v0.9.1888-dev 在 Linux 下 PTY 交互启动延迟与内存上持平。
- **重要性**：直接对接 CLI 工具的可感知竞争力。

### 5. [#2616](https://github.com/earendil-works/pi/issues/2616) — SessionManager 全同步 I/O
- **作者**：@toptechie156 | **状态**：CLOSED | **7 评论**
- 所有 SessionManager 方法使用 `appendFileSync`/`readFileSync`，阻塞数据库/异步持久化方案。
- **重要性**：架构层历史债，影响后续多后端持久化能力。

### 6. [#8827](https://github.com/earendil-works/pi/issues/8827) — LaTeX 传统字体开关触发整块 raw 回落
- **作者**：@StarsInDmajor | **状态**：CLOSED | **7 评论**
- `\rm`/`\bf`/`\it` 等传统 TeX 字体切换使整块降级到原始源码。
- **重要性**：数学/科研写作用户的高度关注问题。

### 7. [#9391](https://github.com/earendil-works/pi/issues/9391) — 压缩后失效签名 thinking 块每轮被重放
- **作者**：@drewbitt | **状态**：CLOSED | **6 评论 / 1 👍**
- 长会话手动压缩后，每轮请求都触发 `prefix_binding_mismatch` 警告。
- **重要性**：Anthropic 用户感知强烈，污染日志且潜在影响缓存命中。

### 8. [#9169](https://github.com/earendil-works/pi/issues/9169) — Windows 11 + WezTerm 全屏 TUI 模式下图像渲染错误
- **作者**：@PurpleMyst | **状态**：CLOSED | **5 评论 / 1 👍**
- 全屏模式下图像渲染回归到 [#4883](https://github.com/earendil-works/pi/issues/4883) 的旧行为。

### 9. [#9051](https://github.com/earendil-works/pi/issues/9051) — session_compact 自定义消息未进入即时重试
- **作者**：@n-r-w | **状态**：OPEN | **5 评论**
- 0.84.4 中 `triggerTurn:false` 的压缩消息被排队，重试轮次未携带正确的 provider 可见上下文。
- **重要性**：影响扩展作者的恢复策略与可靠性。

### 10. [#9789](https://github.com/earendil-works/pi/issues/9789) — 0.86.0 压缩后工具调用坍缩（今日新增）
- **作者**：@aoguai | **状态**：CLOSED（untriaged 标记）
- 扩展触发的压缩后，模型只能调用任务管理类工具，无法使用 read/edit/powershell。
- **重要性**：典型的"刚发版即回归"，需关注后续补丁。

---

## 四、重要 PR 进展（10 条）

### 1. [#9668](https://github.com/earendil-works/pi/pull/9668) — feat(coding-agent): add prompt cache warming
- **作者**：@mitsuhiko | **状态**：CLOSED（已合并）
- 实验性维持缓存热度，目前仅 Anthropic 受益，但为后续多 provider 适配预留空间。
- **意义**：v0.86 头号特性来源。

### 2. [#9096](https://github.com/earendil-works/pi/pull/9096) — feat: add Meta provider with Muse subscription OAuth
- **作者**：@xl0 | **状态**：OPEN
- 解决 [#7543](https://github.com/earendil-works/pi/issues/7543)。需注意 Meta 流式是"伪流式"（一次性爆发输出）。
- **意义**：扩展 pi 的 provider 生态。

### 3. [#9781](https://github.com/earendil-works/pi/pull/9781) — fix: stop recovery after prompt cancellation
- **作者**：@tryingET | **状态**：CLOSED
- 修复 [#9340](https://github.com/earendil-works/pi/issues/9340)，`AgentSession.abort()` 在 `message_end` 后不再触发自动压缩。

### 4. [#9779](https://github.com/earendil-works/pi/pull/9779) — fix: expose cancellable auto-compaction auth
- **作者**：@tryingET | **状态**：CLOSED
- 修复 [#9777](https://github.com/earendil-works/pi/issues/9777)，暴露可取消的自动压缩认证控制器。

### 5. [#9776](https://github.com/earendil-works/pi/pull/9776) — Per thinking sampling parameters
- **作者**：@mrexodia | **状态**：OPEN
- 引入 `samplingParamsByThinkingLevel`，让不同思考等级采用不同采样参数；同时 cherry-pick [#9505](https://github.com/earendil-works/pi/pull/9505)。
- **意义**：开模型用户的质量/多样性可调性增强。

### 6. [#9329](https://github.com/earendil-works/pi/pull/9329) — fix(tui): detect Orca terminals as Kitty-image capable
- **作者**：@XRX193 | **状态**：OPEN
- 将 `TERM_PROGRAM=Orca` 识别为支持 Kitty 内联图像、真彩、OSC 8 超链接。
- **意义**：跨终端一致性。

### 7. [#9434](https://github.com/earendil-works/pi/pull/9434) — feat: allow extensions to append to the session system prompt
- **作者**：@wutongyuonce | **状态**：CLOSED
- 关闭 [#9432](https://github.com/earendil-works/pi/issues/9432)，允许 `session_start` 处理器返回 `systemPromptAppend`，并附 source 元数据与错误隔离。
- **意义**：扩展作者的关键扩展点。

### 8. [#9570](https://github.com/earendil-works/pi/pull/9570) — fix(ai): map TOO_MANY_TOOL_CALLS to an error stop reason
- **作者**：@rsaryev | **状态**：OPEN
- Gemini 在 `@google/genai@2.21.0` 新增的 `TOO_MANY_TOOL_CALLS` 之前会让 `mapStopReason` 抛 `Unhandled stop reason`。

### 9. [#9746](https://github.com/earendil-works/pi/pull/9746) — fix(tui): handle CJK punctuation in file autocomplete
- **作者**：@haoqixu | **状态**：CLOSED
- 将 CJK 标点视为边界，类似空白符处理；解决 `我们需要实现新功能，docs<tab>` 不触发补全的问题。
- **意义**：中文/日韩用户输入体验关键改进。

### 10. [#9120](https://github.com/earendil-works/pi/pull/9120) — fix(tui): rank skill autocomplete by bare name
- **作者**：@yearth | **状态**：CLOSED
- 修复 [#8813](https://github.com/earendil-works/pi/issues/8813)，按裸名排名避免 `skill:` 前缀抢占匹配。

---

## 五、功能需求趋势

通过对 34 条 Issue 的归类，社区当前聚焦以下方向：

| 方向 | 代表 Issue | 热度 |
|------|-----------|------|
| **TUI 性能与流式渲染** | #6665、#9786、#9540 | 🔥🔥🔥 |
| **压缩/会话恢复的可靠性** | #9391、#9051、#9340、#9777、#9773、#9783、#9789、#9486 | 🔥🔥🔥 |
| **Provider 集成扩展** | #7543（Meta）/PR #9096、#9690（OpenCode Zen）、#9771（Qwen 新模型）、#9790（OpenAI 错误映射）、#9570（Gemini stop reason） | 🔥🔥🔥 |
| **扩展 API 能力补齐** | #9784（provider-specific 字段）、#9434（system prompt 追加）、#9788（manifest glob 文档/实现不一致）、#9773（`before_provider_request`） | 🔥🔥 |
| **冷启动与依赖瘦身** | #5653（Shrinkwrap）、#7739（启动预算）、#9540（jiti/TUI 延迟导入）、#9787（undici 全局副作用） | 🔥🔥 |
| **国际化与终端兼容** | #9746 / #9120 / #9329 / #9169 | 🔥 |
| **认证与登录 UX** | #9774（设备码 QR）、#9777（compaction auth 取消） | 🔥 |
| **工具行为一致性** | #9770（find/grep 超时）、#9785（bash timeout 单位混乱） | 🔥 |

---

## 六、开发者关注点

1. **性能是头号议题** — TUI 单核占满、Markdown 重渲染、ICU 分词、jiti 启动加载等被反复提及；社区期待明确的"启动时间预算"指标（#7739）。
2. **压缩（compaction）流程成系统性雷区** — 取消时序、认证可见性、签名 thinking 块重放、自定义消息丢失、工具列表坍缩……多个 Issue 互相关联，相关 PR（#9781、#9779）需协同推进。
3. **扩展 API 的"普洛克路斯忒斯之床"** — 开发者反复请求 provider-specific 字段透传、`before_provider_request` 在压缩请求中触发等问题；`AssistantMessage` 抽象被描述为"Procrustean bed"（[#9784](https://github.com/earendil-works/pi/issues/9784)）。
4. **文档与实现不一致开始被显式追踪** — [#9788](https://github.com/earendil-works/pi/issues/9788) 直接指出 `docs/packages.md` 与 `resolveExtensionEntries` 的 glob/`!exclusion` 声明不符，建议将文档校验纳入 CI。
5. **新模型/Provider 集成是吸引增量** — Meta Muse、Qwen Token Plan（glm-5.3、deepseek-v4.1-flash）、OpenCode Zen、GPT-6-Astra 等都是近 24 小时话题，反映社区对"模型中立 CLI"的强需求。
6. **嵌入 SDK 的副作用风险** — [#9787](https://github.com/earendil-works/pi/issues/9787)（undici 全局 dispatcher）、[#9540](https://github.com/earendil-works/pi/issues/9540)（jiti 导入时机）显示 pi 在被作为 SDK 嵌入到 Fastify 等 Web 框架时仍存在进程全局污染问题。
7. **小而关键的体验修复热度高** — CJK 标点补全（#9746）、技能自动补全排名（#9120）、设备码 QR（#9774）、bash timeout 单位混淆（#9785）等虽小但反馈密度大，是社区"被看见感"的来源。

---

*报告基于 GitHub API 公开数据整理；Issue/PR 状态可能随后续维护变化。*

</details>

---
*本日报由 [Big Model Radar](https://github.com/96loveslife/big_model_radar) 自动生成。*
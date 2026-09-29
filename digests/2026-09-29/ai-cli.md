# AI CLI 工具社区动态日报 2026-09-29

> 生成时间: 2026-09-29 05:11 UTC | 覆盖工具: 8 个

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

<think>The user wants me to generate a comprehensive cross-comparison analysis report of the AI CLI tools ecosystem based on the daily reports I've been given for each tool. Let me carefully analyze the data from each tool's report and create a structured, professional Chinese comparison report.

Let me extract key data from each tool:

**Claude Code:**
- 50 issues updated, 6 PRs
- Release: v2.1.284 - Claude Sonnet 5.5 default, 1M context
- Hot topics: 认证登录反复失效 (#1757), Skills 同步 (#20697), GitLab 集成 (#12346)
- Trends: 跨端协同、桌面体验、认证会话、计费透明度、企业云端

**OpenAI Codex:**
- 50 issues, ~15+ PRs (multiple)
- Releases: 3 alpha versions (rust-v0.160.0-alpha.3, .2, v0.159.0-alpha.13)
- Hot topics: Windows console 闪烁 (#48074, 112👍), 跨端会话一致性, TUI 体验
- Trends: Windows 桌面体验, 跨端会话, TUI 打磨, Browser/Computer Use, 认证流

**Gemini CLI:**
- 50 issues, 36 PRs
- Release: v0.63.0-nightly
- Hot topics: Subagent 误报/卡死 (#22323, #21409), 配置不生效, AST 感知
- Trends: AST 感知代码检索, Subagent 健壮性, Browser Agent, Token 经济性, 任务追踪持久化

**GitHub Copilot CLI:**
- 50 issues, 0 PRs
- Releases: v1.0.89, v1.0.90-1, v1.0.90-0
- Hot topics: 认证 (#4929, #4971), MCP 集成 (#4983, #4985), 模型配置 (#2958)
- Trends: 认证令牌生命周期, MCP 集成, 模型配置, 跨平台兼容

**Kimi Code CLI:** No activity

**OpenCode:**
- No release, 50 issues, 50 PRs
- Hot topics: V2 TUI/Web 重构回归 (#42225, #51857, #44007), 插件能力缺口 (#49389), VSCode 插件 (#49992)
- Trends: 插件扩展能力, 桌面体验, i18n, 模型调度缓存, 会话管理

**jcode:**
- No release, 16 issues, 25 PRs
- Hot topics: 多 Provider 路由 (#1224), CLI 忽略配置 (#1227), Cursor 集成 (#1226)
- Trends: 多 Provider 模型协议扩展, Swarm 子系统, Memory 系统, 本地模型, 配置机制

**pi:**
- No release, 50 issues, 13 PRs
- Hot topics: ESC 卡死 (#10031, 17评论), Compaction 漏洞 (#10033, #9409), llama.cpp (#10077)
- Trends: Compaction/Context, 多 Provider 适配, llama.cpp 本地推理, 国际化

Now let me structure the comparison report:

1. **生态全景** - 3-5 sentences overview
2. **各工具活跃度对比** - Table with issues, PRs, releases
3. **共同关注的功能方向** - Cross-cutting themes
4. **差异化定位分析** - Different positioning
5. **社区热度与成熟度** - Activity/maturity assessment
6. **值得关注的趋势信号** - Industry trends

Let me think carefully about each section.

For **生态全景**: The AI CLI ecosystem is in a rapid expansion phase. Multiple tools (Codex, Gemini CLI, Copilot CLI, Claude Code, jcode, pi, OpenCode) are aggressively iterating, with focus shifting from "model access" to "agent capabilities, multi-provider, cross-platform reliability". Key themes: agent reliability, multi-provider support, TUI/UI quality, authentication/token lifecycle, subagent/session management.

For **活跃度对比**, I should create a table:

| 工具 | Issues | PRs | Releases | 状态 |
|------|--------|-----|----------|------|
| Claude Code | 50 | 6 | v2.1.284 | Sonnet 5.5 默认 |
| OpenAI Codex | 50 | 20+ | 3 alpha | 0.160 推进 |
| Gemini CLI | 50 | 36 | nightly | 安全加固 |
| Copilot CLI | 50 | 0 | v1.0.89 + v1.0.90 | 收尾期 |
| Kimi Code CLI | 0 | 0 | 无 | 静默 |
| OpenCode | 50 | 50 | 无 | V2 重构 |
| jcode | 16 | 25 | 无 | 多 Provider |
| pi | 50 | 13 | 无 | 0.87.1 稳定 |

For **共同关注的功能方向**, identify cross-cutting themes:
- **认证 / Token 生命周期管理**: Claude Code (#1757), Copilot CLI (#4929/#4971), Codex (Android pairing), Gemini CLI (auth fix)
- **Subagent / Session 状态可靠性**: Gemini CLI (#22323/#21409), OpenCode (#44007), jcode (#1403/#1156), pi (#9409/#10031)
- **多 Provider / 多模型适配**: jcode (#1224/#1215/#1550), pi (#9714/#9993/#10142), OpenCode (#51959/#51981)
- **Windows / 桌面平台兼容性**: Codex (#48074), Claude Code (#93239/#70647), OpenCode (#52013), Copilot CLI (#1838/#3392)
- **MCP 集成**: Claude Code (PR #97952), Copilot CLI (#4983/#4985), Gemini CLI (a2a-server)
- **TUI / 终端体验**: Codex (#48125/#49162), pi (#7294/#10143), jcode (#1555), OpenCode (#42225)
- **本地模型推理**: jcode (#1559), pi (#10077/#10122), OpenCode (Bedrock support)
- **计费 / 配额透明度**: Claude Code (#62476/#97398), Copilot CLI (MCP OAuth)

For **差异化定位**:
- **Claude Code**: Anthropic 一手生态，专注 Sonnet 5.5 大上下文、Skills/Cloud 协同
- **OpenAI Codex**: Rust 重写进行中，强 Rust 工程能力 + app-server 架构
- **Gemini CLI**: Google 一手生态，AST 感知 + 多 Agent 编排
- **GitHub Copilot CLI**: GitHub 一手生态，PR/Issue 流深度集成
- **OpenCode**: 插件生态最开放（Plugin API 强），多语言（i18n）领先
- **jcode**: 多 Provider + Swarm 协同最重，cursor/opencode/qwen/bedrock 全打通
- **pi**: 本地推理 + 扩展化最强，llama.cpp 托管、Codemode、Virtual models
- **Kimi Code CLI**: 国内 MoonshotAI 系，本次静默

For **社区热度与成熟度**:
- 最活跃：OpenCode (50 issues + 50 PRs), Gemini CLI (50 issues + 36 PRs), jcode (16 issues + 25 PRs)
- 中等活跃：Claude Code, Codex, pi, Copilot CLI
- 静默：Kimi Code CLI
- 成熟度：Claude Code 最成熟（v2.x 稳定），Copilot CLI 进入 v1.0 后期，Codex/Gemini 还在快速迭代，OpenCode 重构期，jcode/pi 实验性较强

For **趋势信号**:
1. **从"模型访问"到"Agent 可用性"** - 共同从能用到好用的过渡
2. **Subagent/Multi-Agent 编排成为标配** - 多工具都有 subagent/session 管理需求
3. **认证状态机需要系统性重构** - 跨工具共同痛点
4. **MCP 协议生态全面开花** - 各工具都在接入
5. **本地/自托管模型重获关注** - llama.cpp、Codestral 等
6. **i18n 与本地化开始被重视** - OpenCode、jcode、pi
7. **平台碎片化挑战** - Windows/Linux/macOS 都需要专门投入

Let me now write the report. I need to be concise, professional, data-supported, and useful for technical decision-makers and developers.

The user asked for "语言要求：简洁专业，有数据支撑，适合技术决策者和开发者阅读。" - so concise, professional, data-supported, for technical decision-makers and developers.

Let me draft the response in Chinese with proper structure and data citations.

Let me also note the "thinking_mode enabled" requirement - I should output detailed thinking before the report.</think>

# AI CLI 工具生态横向对比分析报告
**报告日期：2026-09-29 · 数据来源：各工具官方 GitHub 仓库过去 24 小时动态**

---

## 一、生态全景

当前 AI CLI 工具市场已进入**"能力收敛 + 体验分化"**的并存阶段：一方面 Claude Code、Codex、Copilot CLI 等头部产品凭借一手模型优势加速版本迭代（Sonnet 5.5、GPT 系列、Claude in Chrome 等），另一方面 jcode、pi、OpenCode 等开发者驱动型项目在**多 Provider 路由、插件扩展、本地推理、Subagent 编排**等方向开辟新战场。社区关注点已从"能否调用模型"转向**Agent 稳定性、会话生命周期、跨端协同、计费透明度**等深层工程问题，认证/Token 链路、Subagent 状态机、平台碎片化成为各家共同的攻坚方向。

---

## 二、各工具活跃度对比

| 工具 | Issues 活跃 | PR 活跃 | 24h Release | 当前状态 |
|---|---|---|---|---|
| **Claude Code** | 50 | 6 | **v2.1.284**（Sonnet 5.5 默认 + 1M ctx） | 稳定迭代 + 多端协同 |
| **OpenAI Codex** | 50 | 20+ | **3 个 alpha**（0.159.0 / 0.160.0） | Rust 重写密集发版 |
| **Gemini CLI** | 50 | 36 | **v0.63.0-nightly**（认证死循环修复） | Agent + 安全加固并行 |
| **GitHub Copilot CLI** | 50 | **0** | **v1.0.89 稳定 + v1.0.90-1 预发** | 收尾期，OAuth/MCP 修复 |
| **Kimi Code CLI** | 0 | 0 | 无 | 本日静默 |
| **OpenCode** | 50 | 50 | 无 | **V2 重构期，回归集中爆发** |
| **jcode** | 16 | 25 | 无 | 多 Provider + Swarm 推进 |
| **pi** | 50 | 13 | 无 | 稳定 0.87.1 + 架构级新 PR |

> **观察**：
> - **OpenCode 与 Gemini CLI 是当日 PR 增量最大者**（50/36 条），分别代表"客户端重构密集迭代"与"安全/Agent 双向加固"。
> - **Copilot CLI 的 0 PR** 是异常信号，可能反映团队精力集中于已开 Issue 的回归闭环。
> - **Claude Code 与 Codex 均有正式版本发布**，意味着仍在主版本节奏内；而 OpenCode/jcode/pi 处于"PR 多但不发版"的实验性迭代阶段。

---

## 三、共同关注的功能方向

### 1. 🔐 认证 / Token 生命周期管理（横跨 5 家）
| 工具 | 代表 Issue |
|---|---|
| Claude Code | [#1757](https://github.com/anthropics/claude-code/issues/1757)（每日反复登录，73 👍） |
| Copilot CLI | [#4929](https://github.com/github/copilot-cli/issues/4929)、[#4971](https://github.com/github/copilot-cli/issues/4971)（Token 不刷新、每小时认证错误） |
| Codex | [#36268](https://github.com/openai/codex/issues/36268)（Android 配对死循环） |
| Gemini CLI | [PR #29448](https://github.com/google-gemini/gemini-cli/pull/29448)（认证死循环修复） |
| OpenCode | [#4971](https://github.com/anomalyco/opencode/issues/4971)、[#42610](https://github.com/anomalyco/opencode/issues/42610) |

**诉求共性**：需要从"点状修复"升级为**认证状态机系统性重构**——OAuth 回调、Token 刷新、配对审批、本地凭证、远程 MCP 授权等子场景需统一治理。

### 2. 🤖 Subagent / Session 状态可靠性（横跨 4 家）
| 工具 | 代表 Issue |
|---|---|
| Gemini CLI | [#22323](https://github.com/google-gemini/gemini-cli/issues/22323)（MAX_TURNS 误报 success）、[#21409](https://github.com/google-gemini/gemini-cli/issues/21409)（永久挂起） |
| jcode | [#1403](https://github.com/1jehuang/jcode/issues/1403)（Swarm worker 完成判据重构）、[#1156](https://github.com/1jehuang/jcode/issues/1156)（`swarm_model=inherit` 失效） |
| OpenCode | [#44007](https://github.com/anomalyco/opencode/issues/44007)（`--auto` 后台 tab 卡权限） |
| pi | [#9409](https://github.com/earendil-works/pi/issues/9409)（推理模型 context ceiling 楔死）、[#10031](https://github.com/earendil-works/pi/issues/10031)（ESC 后卡 Working，17 评论） |

**诉求共性**：从"能跑通"升级为"**可观测、可回滚、可分级**"——subagent 终止原因、完成判据、状态恢复都需要更强的语义。

### 3. 🧩 多 Provider / 多模型适配（横跨 3 家，强差异化）
| 工具 | 代表 Issue |
|---|---|
| jcode | [#1224](https://github.com/1jehuang/jcode/issues/1224)（OpenCode Go 多协议端点）、[#1215](https://github.com/1jehuang/jcode/issues/1215)（Qwen3.8-Max）、[#1550](https://github.com/1jehuang/jcode/pull/1550)（Bedrock Claude 5） |
| pi | [PR #9714](https://github.com/earendil-works/pi/pull/9714)（Azure Foundry）、[PR #9993](https://github.com/earendil-works/pi/pull/9993)（Vertex AI Claude） |
| OpenCode | [PR #51981](https://github.com/anomalyco/opencode/pull/51981)（Alibaba/CF/Meta/Mistral/Moonshot/ZAI 显式缓存） |

**诉求共性**：在 Anthropic/OpenAI 一手生态之外，社区迫切需要**跨云模型编排**能力，对协议（Chat Completions / Responses / Converse / 原生 HTTP/2）的对称适配要求显著上升。

### 4. 🪟 平台碎片化挑战（横跨 4 家）
| 工具 | 平台痛点 |
|---|---|
| Claude Code | [#70647](https://github.com/anthropics/claude-code/issues/70647)（macOS 安装包未签名）、[#93239](https://github.com/anthropics/claude-code/issues/93239)（Windows Enter 回归） |
| Codex | [#48074](https://github.com/openai/codex/issues/48074)（Windows console 闪烁，112 👍，本日全网最高 👍）、[#46388](https://github.com/openai/codex/issues/46388)（sandbox 回归） |
| Copilot CLI | [#1838](https://github.com/github/copilot-cli/issues/1838)、[#3392](https://github.com/github/copilot-cli/issues/3392)（NixOS 系列）、[#1250](https://github.com/github/copilot-cli/issues/1250)（Windows 静默失败） |
| OpenCode | [#52013](https://github.com/anomalyco/opencode/pull/52013)（桌面 dev 服务端口冲突）、[#38585](https://github.com/anomalyco/opencode/issues/38585)（Windows 键位冲突） |

**诉求共性**：测试矩阵覆盖不足，**macOS / Windows / Linux / NixOS / WSL** 均出现孤立问题，呼唤官方 CI 跨平台矩阵。

### 5. 🖥️ TUI / 终端体验打磨（横跨 4 家）
| 工具 | 代表 Issue |
|---|---|
| Codex | [#48125](https://github.com/openai/codex/issues/48125)、[#49162](https://github.com/openai/codex/issues/49162)（X11/Linux 复制回归） |
| pi | [#7294](https://github.com/earendil-works/pi/issues/7294)（Kitty 键盘协议 SSH 泄露）、[#10143](https://github.com/earendil-works/pi/issues/10143)（多行 token 语法高亮丢失） |
| jcode | [#1555](https://github.com/1jehuang/jcode/issues/1555)、[#1557](https://github.com/1jehuang/jcode/issues/1557)（TUI 测试稳定性） |
| OpenCode | [#42225](https://github.com/anomalyco/opencode/issues/42225)（终端缩放不重排）、[#41646](https://github.com/anomalyco/opencode/issues/41646)（桌面拖拽区） |

**诉求共性**：从"能显示"升级到"**键盘协议 / 鼠标选区 / 主题 / 字号**"等细节的一致性体验。

### 6. 💰 计费 / 配额透明度（横跨 2 家，集中在头部）
| 工具 | 代表 Issue |
|---|---|
| Claude Code | [#62476](https://github.com/anthropics/claude-code/issues/62476)（30 天静默删会话）、[#97398](https://github.com/anthropics/claude-code/issues/97398)（9/25 后消耗飙升 3.6×） |
| Copilot CLI | [v1.0.90-1](https://github.com/github/copilot-cli) 修复 MCP OAuth 缓存复用（间接相关） |

**诉求共性**：随着用量上升，开发者对**数据生命周期 + 用量可观测性**的需求日益强烈。

---

## 四、差异化定位分析

| 工具 | 一手生态 | 核心定位 | 目标用户 | 技术路线亮点 |
|---|---|---|---|---|
| **Claude Code** | Anthropic |

---

## 各工具详细报告

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills 社区热点

> 数据来源: [anthropics/skills](https://github.com/anthropics/skills)

<think>The user wants me to analyze the Claude Code Skills community data and produce a report in Chinese. Let me analyze the data carefully.

Looking at the data:

**Pull Requests (top 20 by comments):**
- The PRs data shows "评论: undefined" for all PRs - meaning we don't have explicit comment counts. But we can infer popularity from other factors like update dates, age, and topic relevance.
- Wait, the user said "按评论数排序，共 50 条，展示前 20 条" - so these are sorted by comments, but the comment field shows "undefined". This is odd. Let me re-read...

Actually looking again, all PRs have "评论: undefined" and "👍: 0" which suggests the data may not have included comment/like counts for PRs. I'll have to infer popularity from the content, dates, and the fact that they're listed in the top 20.

Let me look at the top PRs:
1. #1298 - fix(skill-creator): isolate trigger evals - June 2026, updated September
2. #1742 - fix(mcp-builder): support mcp>=2 - September 2026
3. #1771 - feat: add proofcore-contract-auditor - September 2026
4. #1734 - Detect orphaned docx comments - September 2026
5. #1703 - Add md2video-audio skill - September 2026
6. #1792 - fix(docx): report LibreOffice timeout - September 2026
7. #1245 - Add notion-spec-to-implementation - June 2026
8. #525 - Add pyxel skill for retro game development - March 2026
9. #514 - Add document-typography skill - March 2026
10. #1681 - fix(skill-creator): support direct execution - August 2026
11. #1615 - Add scnet-hpc skill - August 2026
12. #1607 - Update claude-api skill - mark retired models - August 2026
13. #822 - feat: add AWT (AI Watch Tester) - March 2026
14. #538 - fix(pdf): correct case-sensitive file references - March 2026
15. #486 - Add ODT skill - March 2026
16. #210 - Improve frontend-design skill clarity - January 2026
17. #83 - Add skill-quality-analyzer and skill-security-analyzer - November 2025
18. #1776 - Add blast-radius skill - September 2026
19. #723 - feat: add testing-patterns skill - March 2026
20. #541 - fix(docx): prevent tracked change w:id collision - March 2026

**Issues (with comment counts):**
1. #492 - Security: Community skills under anthropic/ namespace (43 comments, 2 likes) - HIGHEST
2. #228 - Enable org-wide skill sharing (16 comments, 8 likes)
3. #556 - run_eval.py: claude -p never triggers skills (12 comments, 7 likes)
4. #62 - All my skills have disappeared (10 comments, 2 likes)
5. #1329 - Proposing compact-memory skill (9 comments, 0 likes)
6. #202 - skill-creator should be updated to best practice (8 comments, 1 like) - CLOSED
7. #412 - Skill proposal: agent-governance (6 comments, 0 likes) - CLOSED
8. #189 - document-skills and example-skills duplicate (6 comments, 9 likes)
9. #1487 - claude-api skill eagerly injects ~156k tokens (4 comments, 0 likes)
10. #1394 - skill-creator eval-viewer XSS vulnerability (4 comments, 2 likes)
11. #1390 - mcp-builder evaluation.py scores 0/N (4 comments, 0 likes)
12. #1385 - Reasoning Quality Gate Pipeline (4 comments, 1 like)
13. #1383 - skill-creator: silent benchmark failures (4 comments, 0 likes)
14. #1175 - SharePoint Online security concerns (4 comments, 0 likes) - CLOSED
15. #29 - Usage with bedrock (4 comments, 0 likes)

Now let me organize this into a report:

**1. 热门 Skills 排行** (top 5-8 by popularity)
Since comment data is undefined, I'll select based on community impact, age (long-running engagement), and topical importance:
- #1298 skill-creator fix - core infrastructure
- #1742 mcp-builder fix - core infrastructure
- #525 pyxel - retro game dev
- #1703 md2video-audio - creative content
- #1245 notion-spec-to-implementation - workflow
- #210 frontend-design - design skill
- #1776 blast-radius - safety/destructive ops
- #822 AWT - E2E testing

**2. 社区需求趋势** from issues:
- Org-wide skill sharing (Issue #228)
- Trust boundary / namespace abuse (Issue #492)
- Skill evaluation/benchmarking (Issues #556, #1383, #1390)
- Memory/state management (#1329 compact-memory)
- Quality analysis tools (#83 skill-quality-analyzer)
- Agent governance/safety (#412, #1385)
- Documentation quality (#514 typography)

**3. 高潜力待合并 Skills** - active PRs not yet merged but with significant activity:
- #1298, #1742, #525, #1703, #1771, #1734, #1792, #1245, #1776

**4. Skills 生态洞察** - one sentence summary
The biggest concern is about trust/security (Issue #492 with 43 comments), sharing infrastructure, and quality of skill evaluation tooling.

Let me draft the report now. The user wants:
- Concise and professional language
- Each entry with GitHub link
- Chinese language

Let me write the report.</think>

# Claude Code Skills 社区热点报告
**数据周期**：截至 2026-09-29 | **样本**：Top 20 PRs + Top 15 Issues

---

## 一、热门 Skills 排行（按社区关注度）

> 注：原始 PR 评论数字段缺失，以下排行综合更新时间跨度、主题热度与维护活跃度筛选。

| # | Skill (PR) | 功能摘要 | 状态 | 链接 |
|---|---|---|---|---|
| 1 | **skill-creator 触发评估修复** (#1298) | 修复 worker 命令探针冲突、Windows `select()` 失败、负样本误判等核心评测问题 | OPEN（已持续迭代 3 个月） | [#1298](https://github.com/anthropics/skills/pull/1298) |
| 2 | **mcp-builder 兼容 MCP≥2** (#1742) | 适配 `streamable_http_client` 重命名与 `create_mcp_http_client` 头部配置 | OPEN | [#1742](https://github.com/anthropics/skills/pull/1742) |
| 3 | **Notion Spec→Implementation** (#1245) | 将产品/技术规格拆解为带验收标准的 Notion 任务（含定量简历审计辅助） | OPEN（持续 4 个月） | [#1245](https://github.com/anthropics/skills/pull/1245) |
| 4 | **md2video-audio** (#1703) | Markdown→Marp 幻灯片→真人感配音 MP4，零成本视频生成 | OPEN | [#1703](https://github.com/anthropics/skills/pull/1703) |
| 5 | **blast-radius** (#1776) | 批量写操作前的"爆炸半径"清单，覆盖归档、删除、群发等高风险动作 | OPEN | [#1776](https://github.com/anthropics/skills/pull/1776) |
| 6 | **AWT (AI Watch Tester)** (#822) | 基于视觉与浏览器控制的零代码 E2E 测试生成 | OPEN（6 个月仍未合） | [#822](https://github.com/anthropics/skills/pull/822) |
| 7 | **Pyxel 复古游戏开发** (#525) | 引导 Claude 进行 Pyxel 游戏的创建、调试与帧级验证 | OPEN（半年未合） | [#525](https://github.com/anthropics/skills/pull/525) |
| 8 | **skill-quality-analyzer / skill-security-analyzer** (#83) | 技能自身五维质量评分与安全审计的"元技能" | OPEN（最老 PR 之一） | [#83](https://github.com/anthropics/skills/pull/83) |

**观察**：社区关注度集中在三类——(a) **基础设施修复**（skill-creator、mcp-builder）、(b) **创意/媒体生成**（md2video-audio、Pyxel）、(c) **工程流程自动化**（Notion 任务化、blast-radius 安全清单）。

---

## 二、社区需求趋势（从 Issues 提炼）

| 趋势方向 | 代表 Issue | 关注度 |
|---|---|---|
| **🔐 命名空间信任安全** | [#492](https://github.com/anthropics/skills/issues/492) 社区 Skills 冒用 `anthropic/` 命名空间 | **43 评论 / 2 👍**（全场最高） |
| **🏢 组织级 Skills 共享** | [#228](https://github.com/anthropics/skills/issues/228) 缺少 Claude.ai 内置共享通道 | 16 评论 / 8 👍 |
| **📊 评测工具可靠性** | [#556](https://github.com/anthropics/skills/issues/556) `run_eval.py` 触发率 0%；[#1390](https://github.com/anthropics/skills/issues/1390) MCP 评测静默失败；[#1383](https://github.com/anthropics/skills/issues/1383) skill-creator 6 类 bug | 12 + 4 + 4 评论 |
| **🧠 代理记忆压缩** | [#1329](https://github.com/anthropics/skills/issues/1329) `compact-memory`——长任务符号化笔记 | 9 评论 |
| **🛡️ Agent Governance / 质量门禁** | [#412](https://github.com/anthropics/skills/issues/412) 安全策略与审计；[#1385](https://github.com/anthropics/skills/issues/1385) 三阶段质量门禁管线 | 6 + 4 评论 |
| **📦 重复安装 / 上下文膨胀** | [#189](https://github.com/anthropics/skills/issues/189) plugin 内容重复；[#1487](https://github.com/anthropics/skills/issues/1487) `claude-api` 单次注入 156k tokens | 6 + 4 评论（👍 9 是样本最高） |
| **🧾 文档与排版质量** | [#514](https://github.com/anthropics/skills/pull/514) typography skill；[#1394](https://github.com/anthropics/skills/issues/1394) eval-viewer XSS | — |

---

## 三、高潜力待合并 Skills

以下 PR 更新频繁、讨论持续但仍 OPEN，近期最可能落地：

1. **#1298 skill-creator 触发评估隔离** — 核心自举工具的稳定性必修课 → [#1298](https://github.com/anthropics/skills/pull/1298)
2. **#1742 mcp-builder 兼容 MCP≥2** — 跟随官方协议升级的紧急补丁 → [#1742](https://github.com/anthropics/skills/pull/1742)
3. **#1792 docx LibreOffice 超时处理** — DOCX skill 误报成功的高危 bug → [#1792](https://github.com/anthropics/skills/pull/1792)
4. **#1734 孤立 docx 注释检测** — 提升文档编辑可靠性 → [#1734](https://github.com/anthropics/skills/pull/1734)
5. **#1681 skill-creator 直接执行** — 解决 `package_skill.py` `ModuleNotFoundError` → [#1681](https://github.com/anthropics/skills/pull/1681)
6. **#1771 proofcore-contract-auditor** — Web3 智能合约静态分析 + 链上存证（生态拓展型） → [#1771](https://github.com/anthropics/skills/pull/1771)
7. **#1607 claude-api 退役模型清理** — 标记 `claude-opus-4-1` 等为 retired → [#1607](https://github.com/anthropics/skills/pull/1607)

---

## 四、Skills 生态洞察（一句话总结）

> **社区最集中的诉求是"让 Skills 生态更可信、可共享、可验证"——围绕** **命名空间信任治理**（#492）、**企业级共享通道**（#228）与**评测/质量工具自身的可靠性**（#556 / #1383 / #1390）**三条主线展开，呈现出从"堆 Skill 数量"向"管 Skill 质量"迁移的明显拐点。**

---

<think>Let me analyze the GitHub data provided and generate a structured Chinese daily report for Claude Code community dynamics on 2026-09-29.

Key data points to analyze:
1. Release v2.1.284 - introduces Claude Sonnet 5.5 as default Sonnet model with 1M context, $2/$10 per Mtok
2. 50 issues updated, showing top 30 by comments
3. 6 PRs updated

Let me identify the most important issues:
- #1757 [BUG] Claude code requires users to constantly login - 84 comments, 73 thumbs up - High community impact
- #12346 [FEATURE] GitLab Integration - 53 comments, 139 thumbs up
- #20697 [FEATURE] Sync Skills between Claude Desktop and CLI - 49 comments, 157 thumbs up
- #62476 [BUG] silently deletes conversation transcripts after 30 days - 25 comments, 27 thumbs up
- #11789 [BUG] Cannot uninstall Claude Code - 24 comments (closed)
- #87640 [Bug] Fable 5 safeguard false-positives on greeting - 22 comments, 20 thumbs up
- #41456 [FEATURE] Add status bar to Desktop App - 17 comments, 70 thumbs up
- #88747 [BUG] Worktree creation writes absolute core.hooksPath - 15 comments
- #70647 [Bug] Native installer produces unsealed macOS app bundle - 15 comments
- #81776 claude --cloud always creates bundled session - 8 comments
- #73837 [BUG] Markdown inline code ignores custom theme overrides - 5 comments, 9 thumbs up
- #77770 [BUG] System prompt's model identity contradicts - 4 comments (closed)
- #78682 [BUG] Desktop app microphone dictation ignores language - 4 comments (closed)
- #97406 [BUG] Desktop sidebar no longer lists scheduled tasks - 4 comments (Windows)
- #93239 [BUG] Enter interrupts instead of queueing - 4 comments (Windows regression)
- #97398 [Bug] Weekly usage limit consumption rate increased 3.6x - 2 comments (cost related!)
- #95645 Built-in Browser pane blocks Vercel subresources
- #97665 [BUG] Subagent compaction preserved segment never written
- #98062 [FEATURE] Allow non-HTTPS TCP egress - 0 comments (newest)
- #98060 Credits consumption question - closed

PRs:
- #94847 diff: first edit opens pane only when it has file to list - open
- #98018 mods: revert two changes - closed (interesting!)
- #96364 agents-md auto-paginated Read - closed
- #96363 diff: pass --no-color - closed
- #97952 ci: security hardening for GitHub Actions - open
- #31204 Add AI Learning Roadmap - closed

Feature trends:
- IDE integration (VS Code, GitLab)
- Skills synchronization
- Status bar (Desktop app)
- Cost management/billing issues
- Authentication/login improvements
- Theme customization
- Cloud/web functionality

Let me write a clear, professional Chinese daily report.</think>

# Claude Code 社区动态日报
**2026-09-29**

---

## 📌 今日速览

今天 v2.1.284 版本正式发布，**Claude Sonnet 5.5** 成为默认 Sonnet 模型，1M 上下文与更具竞争力的定价成为最大看点。社区层面，认证登录反复失效（#1757）依然是抱怨最集中的痛点，而桌面端回归、Windows 平台问题以及「Credits 消耗速度异常」相关报告正在快速升温。

---

## 🚀 版本发布

### v2.1.284（最新）
- **新增 Claude Sonnet 5.5**（`claude-sonnet-5-5`）为 Anthropic API 上新的默认 Sonnet 模型
  - 1M 上下文窗口
  - 定价：$2 / $10 per Mtok，缓存读取 $0.20/Mtok
- **Auto Mode 体验优化**：在自动读取工作目录外的文件前，新增「Yes, but ask again next time」选项，让用户更细粒度地控制越界访问

> 说明：完整更新日志受数据源截断，更详细 changelog 建议直接查看 [Release v2.1.284](https://github.com/anthropics/claude-code/releases/tag/v2.1.284)。

---

## 🔥 社区热点 Issues（按关注度排序）

| # | Issue | 关注点 | 链接 |
|---|-------|--------|------|
| 1 | **#1757 [BUG] Claude code requires users to constantly login** — 84 评论 / 73 👍 | 老牌「老大难」问题，每天都需重新网页认证，影响几乎所有用户，至今未根治 | [#1757](https://github.com/anthropics/claude-code/issues/1757) |
| 2 | **#20697 [FEATURE] Sync Skills between Claude Desktop and Claude Code CLI** — 49 评论 / 157 👍 | 跨端 Skills 同步呼声极高，👍 数全场最高，反映生态协同诉求 | [#20697](https://github.com/anthropics/claude-code/issues/20697) |
| 3 | **#12346 [FEATURE] Add GitLab Integration** — 53 评论 / 139 👍 | 用户长期希望补齐 GitLab 集成（MR、移动端），仅次于 GitHub 的核心诉求 | [#12346](https://github.com/anthropics/claude-code/issues/12346) |
| 4 | **#62476 [BUG] Claude Code silently deletes conversation transcripts after 30 days by default** — 25 评论 / 27 👍 | 30 天静默清理历史记录引发数据丢失担忧，关乎合规与可追溯性 | [#62476](https://github.com/anthropics/claude-code/issues/62476) |
| 5 | **#87640 [Bug] Fable 5 safeguard `[reasoning_extraction]` false-positives on a one-word greeting ("Hi")** — 22 评论 / 20 👍 | 最基础问候语触发模型安全拦截，暴露安全分类器误报问题 | [#87640](https://github.com/anthropics/claude-code/issues/87640) |
| 6 | **#41456 [FEATURE] Add status bar to Desktop App** — 17 评论 / 70 👍 | 桌面端体验补齐呼声强烈，👍/评论比显示高认可度 | [#41456](https://github.com/anthropics/claude-code/issues/41456) |
| 7 | **#88747 [BUG] Worktree writes ABSOLUTE core.hooksPath into config.worktree** — 15 评论 | worktree 中的 hook 路径解析错误，会运行主 checkout 的 hooks，潜在安全风险 | [#88747](https://github.com/anthropics/claude-code/issues/88747) |
| 8 | **#70647 [Bug] Native installer produces unsealed macOS app bundle** — 15 评论 | macOS 原生安装包未正确签名，系统判定「已损坏且无法打开」，直接影响 macOS 用户安装 | [#70647](https://github.com/anthropics/claude-code/issues/70647) |
| 9 | **#97398 [Bug] Weekly usage limit consumption rate increased ~3.6x after Sep 25 reset** — 2 评论（新） | 9 月 25 日重置后额度消耗速度飙升约 3.6 倍，涉及计费公平敏感话题 | [#97398](https://github.com/anthropics/claude-code/issues/97398) |
| 10 | **#93239 [BUG] Enter now interrupts instead of queueing while Claude is working (regression)** — 4 评论 | Windows 桌面端的输入回归：原本可排队发送的消息现在直接打断任务流 | [#93239](https://github.com/anthropics/claude-code/issues/93239) |

> 备注：#11789（无法卸载 Claude Code）与 #77770（模型标识不一致）虽评论数较高，但已 CLOSED。

---

## 🛠️ 重要 PR 进展

| # | PR | 状态 | 说明 | 链接 |
|---|----|------|------|------|
| 1 | **#94847 diff: first edit opens the pane only when it has file to list** | OPEN | 首个 Edit/Write/NotebookEdit 仅在确实存在跟踪变更时才打开 diff 面板，避免空面板闪烁；对外写到 ignored 文件或跨 worktree 时行为更稳健 | [#94847](https://github.com/anthropics/claude-code/pull/94847) |
| 2 | **#97952 ci: security hardening for GitHub Actions workflows that call Claude** | OPEN | 对调用 Claude 的三套 workflow（issue-triage、dedupe-issues、claude.yml）增加出口防火墙 runner 与安全加固，对仓库自动化安全值得关注 | [#97952](https://github.com/anthropics/claude-code/pull/97952) |
| 3 | **#98018 mods: revert two changes (agents-md truncated reads, diff forced colors)** | CLOSED | 回滚 #96363 与 #96364，说明先前两个 mod 改动在线上引发了实际问题，已退回更保守的旧行为 | [#98018](https://github.com/anthropics/claude-code/pull/98018) |
| 4 | **#96364 agents-md: auto-paginated Read of nested AGENTS.md** | CLOSED（已被 #98018 回滚） | 嵌套 AGENTS.md 超 token 上限被分页时，避免误判为「已交付」 | [#96364](https://github.com/anthropics/claude-code/pull/96364) |
| 5 | **#96363 diff: pass --no-color** | CLOSED（已被 #98018 回滚） | 修复 `color.ui=always` 导致 diff 主体被 ANSI 转义吞掉的问题 | [#96363](https://github.com/anthropics/claude-code/pull/96363) |
| 6 | **#31204 Add AI Learning Roadmap interactive canvas application** | CLOSED | 提交了一个基于 React + Vite 的 AI 学习路径画布应用 demo，未合入主线 | [#31204](https://github.com/anthropics/claude-code/pull/31204) |

> 今日 PR 数量较少（仅 6 条），且有一组相邻改动被快速 revert，提示近期 mod 系统在做密集调试。

---

## 📈 功能需求趋势

从今日 Issues 中可清晰看出五大方向：

1. **跨端 / 跨工具协同**
   - Skills 在 Desktop 与 CLI 间同步（#20697，157 👍）
   - GitLab 集成（#12346，139 👍）
   - 桌面端 status bar（#41456，70 👍）

2. **桌面与浏览器端体验补齐**
   - Desktop 端 Scheduled 列表恢复/可折叠（#97406）
   - Enter 行为回归（#93239）
   - 麦克风语言识别（#78682，已关闭）
   - macOS 安装包签名（#70647）
   - Claude in Chrome 登录持久化（#97344）

3. **认证与会话生命周期**
   - 每日反复登录（#1757，73 👍）
   - 无法卸载（#11789，已关闭）
   - Chrome 重启即掉登录（#97344）

4. **计费 / 配额透明度**
   - 30 天静默删除会话（#62476）
   - 9/25 后额度消耗飙升 3.6×（#97398）
   - 「How do I stop this thing from consuming my credits?」（#98060）

5. **企业 / 云端能力扩展**
   - Web 版允许非 HTTPS TCP 出站（如 Postgres 5432）（#98062）
   - `claude --cloud` 始终生成 bundled session（#81776）

---

## 👨‍💻 开发者关注点与高频痛点

- **认证体验差**：每天必须网页重新登录是压倒性头号痛点，影响所有用户的基本使用流程。
- **数据所有权与可追溯性**：30 天自动清理会话、Credits 在不知情情况下消耗，反映对 **数据生命周期 + 计费透明度** 的强烈不安全感。
- **平台回归频繁**：Windows 桌面端出现多项短期回归（Enter 行为、Scheduled 列表），开发者担心发布节奏过快而缺乏灰度。
- **macOS 安装链路不稳定**：原生安装包签名缺失被系统判定为「损坏」，对 macOS 开发者是一道硬障碍。
- **安全误报 vs. 越权保护的两难**：#87640 中「Hi」即被拦下，开发者期待更精细的分类器策略；与之相对的 worktree hooks 路径（#88747）则反映越权保护侧的 bug。
- **CI / Hook 可控性**：asyncRewake 实际阻塞启动（#89960）等 hook 行为与文档不一致，使高级用户难以构建可靠自动化。
- **快速迭代下的回滚信号**：今日 PR #98018 回滚了 agents-md 与 diff 两项 mod，说明官方对 mod 系统的稳定性仍在调整，开发者跟进时建议关注 mod 行为的 changelog。

---

*日报基于 GitHub `anthropics/claude-code` 仓库 2026-09-29 的公开数据整理。*

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

<think>Let me analyze the GitHub data for OpenAI Codex from 2026-09-29 and generate a comprehensive daily report in Chinese.

Key observations:
1. Three alpha releases: rust-v0.160.0-alpha.3, rust-v0.160.0-alpha.2, rust-v0.159.0-alpha.13
2. Many Windows-related bugs are dominant (terminal flashing, daemon console windows, loading screen issues)
3. Several PRs addressing Windows console window suppression (#49164) - directly responding to top issues
4. PR #49112 adds X11 primary selection - responding to #49162 about Linux regression
5. TUI improvements: history pagination, copy behavior, key hints
6. App-server provider defaults work in PRs (#49161, #49144, #49145)

Let me categorize the issues:

Top Windows-related issues:
- #48074: Terminal windows flashing during requests (68 comments, 112👍) - HOTTEST
- #48422: Visible console windows flash for shell children (29 comments)
- #46388: Sandbox regression in 0.155.0
- #48463: Desktop app stuck on loading screen
- #44768: Daemon opens visible console for hooks/shell
- #48440: Focus-stealing console popups
- #48484: Windows desktop stuck on startup spinner
- #41055: Browser/Chrome sandbox helper fails
- #48311: LaTeX compiler fails
- #47473: VS Code Codex dictation fails with 403
- #48579: Notification sounds ignore Windows sound controls
- #43880: Native Computer Use can't determine Chrome URL
- #49132: Android pairing approval loops
- #49027: Delivered prompts remain queued
- #28905: Thread stuck with queued user message
- #48951: TUI theme doesn't change

Cross-platform issues:
- #48125: Can't copy text in TUI
- #47270: No ChatGPT browser route for Browser Use
- #40558: macOS Remote iOS active-writer conflict
- #36268: Android "Authorize this phone" loops
- #31794: Sites Plugin won't re-auth
- #44446: Password-based SSH login request
- #49162: Linux regression mouse selection
- #49170: macOS Chat desktop app offline
- #47223: PR-context @codex no git remote
- #49169: Source folder picker can't create dir
- #49146: Async questions cleared after turn

Important PRs:
- #49164: Suppress Windows console windows - directly addresses top Windows bug
- #49112: Add X11 primary selection - addresses #49162
- #49171: Fix model provider lookup for TUI history
- #49161: Honor app-server provider defaults in TUI
- #49160: Support projectless TUI sessions
- #49153: Omit blockquote markers in copy
- #49147: Simplify cloud task base URL normalization
- #49145: Hide reasoning summary in /status for server
- #49144: Preserve server reasoning/verbosity in TUI
- #49138: Expose error details to turn lifecycle
- #49136: Remove plus separator in key hints
- #49135: Treat provider catalogs as authoritative
- #49130: Move content-filter guidance to retry handler
- #49127: Deduplicate cloud and executor skill listings
- #49119: Add recovery guidance to content-filter retries
- #49118: Correct provider auth storage docs
- #49117: Attribute analytics to thread SKU
- #49114: Point remote compaction tests at mock server
- #49106: Add history pagination to command center
- #49105: Resume unsent TUI input after reconnecting

Now let me structure the report.</think>

# OpenAI Codex 社区动态日报
**日期：2026-09-29**

---

## 📌 今日速览

今天是 Codex Rust 实现 alpha 频道集中发版日，**0.160.0-alpha.2 / alpha.3 与 0.159.0-alpha.13** 三个 alpha 版本相继推送。同时社区最关心的议题仍然是 **Windows 平台的 console 窗口闪烁/抢占焦点问题**——单个 Issue (#48074) 评论量已达 68 条、👍112；社区与维护方已在 PR #49164 中给出针对性修复。CLI/TUI 层面也迎来多个体验改进：X11 primary selection 支持、App-server provider 默认值对齐、历史分页等。

---

## 🚀 版本发布

| 版本 | 说明 |
|---|---|
| `rust-v0.160.0-alpha.3` | 0.160.0 alpha 迭代 |
| `rust-v0.160.0-alpha.2` | 0.160.0 alpha 迭代 |
| `rust-v0.159.0-alpha.13` | 0.159.0 alpha 收尾 |

> 三个版本均在过去 24 小时内发布，节奏密集，属于 rust 实现向 0.160 推进的常规滚动。

---

## 🔥 社区热点 Issues（精选 10 条）

### 1. [#48074](https://github.com/openai/codex/issues/48074) — Windows：安装 Codex daemon 后终端窗口反复闪烁 ⭐112 / 💬68
Windows 上启动 Codex daemon 后，每次请求都会弹出 console 窗口并抢走焦点。**本日最高热度 Issue**，影响所有共享后台服务的 Windows 用户。维护方已在 PR #49164 给出 console 抑制方案，正在回归此问题。

### 2. [#48422](https://github.com/openai/codex/issues/48422) — Windows：每个会话/turn 都会弹出 shell 子进程 console 窗口 💬29
与 #48074 关联密切，聚焦于 `codex app-server` 启动的子进程可见性。共同推动 PR #49164 落地。

### 3. [#46388](https://github.com/openai/codex/issues/46388) — Windows：CLI 0.155.0 sandbox 初始化回归（0.154.0 正常） 💬21
自 0.155.0 起 elevate sandbox 运行时路径校验失败，造成 Windows 用户降级或暂用旧版本。

### 4. [#48463](https://github.com/openai/codex/issues/48463) — Windows 桌面应用更新后卡在 loading 界面 💬20
更新到 26.924.2738.0 后 app_start bootstrap 在 codex-home 请求处超时 26.9s。配合 #48466、#48484 构成 Windows 桌面端启动失败聚集现象。

### 5. [#44768](https://github.com/openai/codex/issues/44768) — Windows：app-server daemon 为每个 hook/shell 弹出可见 console 窗口 💬19
进一步指出不仅是用户终端，连 daemon 拉起的 hook 进程也会"裸奔"出 console；PR #49164 中的 `background_subprocess` 抑制逻辑正是为此设计。

### 6. [#48125](https://github.com/openai/codex/issues/48125) — TUI 无法复制文本（已关闭）💬18 / 👍19
Ubuntu 24.04 SSH 环境下从 0.157.0 起 TUI 选中后无法复制。属于历史问题，PR #49153（块引用复制去除 `>` 标记）、#49112（X11 PRIMARY selection）等是对相邻体验的修复。

### 7. [#48466](https://github.com/openai/codex/issues/48466) — Windows 26.924：每次冷启动卡 loading，仅重启 app-server 可恢复 💬12
指出 cold start stall 的稳定恢复手段是"只重启 app-server"，提示问题在桌面客户端与 app-server 的握手层。

### 8. [#40558](https://github.com/openai/codex/issues/40558) — macOS Remote iOS：Desktop 创建的活动线程因 active-writer 冲突加载失败 💬9
跨端会话同步冲突，影响桌面与 iOS 客户端的接力体验。

### 9. [#47270](https://github.com/openai/codex/issues/47270) — Desktop/Browser Use 找不到 Chrome 与内置浏览器标签页 💬10
macOS 26.6.2 Codex Desktop 下 Browser Use 完全失效，Chromium 路由与 ChatGPT browser 路由双双缺位。

### 10. [#36268](https://github.com/openai/codex/issues/36268) — Android "Authorize this phone" 重装 ChatGPT 后无限循环 💬14
web auth 完成，但 Android app 从不消费审批；host 收不到 pairing claim。属于长期未关闭的认证流问题。

> 补充关注：[#49162](https://github.com/openai/codex/issues/49162)（Linux 0.158.0 中键粘贴失效，PR #49112 已修复）、[#49132](https://github.com/openai/codex/issues/49132)（Windows Remote Control 配对循环）。

---

## 🛠 重要 PR 进展（精选 10 条）

### 1. [#49164](https://github.com/openai/codex/pull/49164) — 抑制后台子进程的 Windows console 窗口
直接回应 #48074 / #44768 / #48422：扩展 `codex_utils_process::background_subprocess` 让 Job Object 启动与 containment fallback 也保留 console 抑制，避免 detached 进程分配控制台窗口。

### 2. [#49112](https://github.com/openai/codex/pull/49112) — 增加 X11 primary selection 与中键粘贴支持
回应 #49162：即使关闭 copy-on-select，也将 transcript 视图的鼠标选中文本写入 X11 `PRIMARY`，保持 `CLIPBOARD` 复制配置；编辑器支持 `PRIMARY` 粘贴。

### 3. [#49171](https://github.com/openai/codex/pull/49171) — 修复 TUI 历史中的 model provider 查询
`history_model_provider` 改为从 effective 配置的嵌套 `config` 字段读取 `model_provider`，保留 `openai` 回退。

### 4. [#49161](https://github.com/openai/codex/pull/49161) — TUI 端尊重 app-server provider 默认值
避免客户端隐式 provider 覆盖覆盖 app-server 配置，导致 session 从 resume/fork 历史中"隐身"。

### 5. [#49160](https://github.com/openai/codex/pull/49160) — 支持无 project 的 TUI 会话与 workspace 默认值
对本地发现的无项目目录跳过 trust 提示；仅在本地执行/配置/managed 策略满足时应用 workspace-write 与细粒度审批默认值。

### 6. [#49153](https://github.com/openai/codex/pull/49153) — TUI 复制块引用时去除 Markdown `>` 标记
选中纯引用块时返回纯文本，避免 Markdown 引用符污染剪贴板。

### 7. [#49145](https://github.com/openai/codex/pull/49145) — `/status` 在连接远程/后台服务器时隐藏推理摘要设置
避免客户端设置项与 server 默认值冲突时产生误导；保持本地无服务器连接时的可见性。

### 8. [#49144](https://github.com/openai/codex/pull/49144) — TUI 保留 server 端的 reasoning summary 与 verbosity
不再把本地默认值当作请求级 override 转发，防止覆盖 server 默认或已保存线程设置。

### 9. [#49136](https://github.com/openai/codex/pull/49136) — TUI 按键提示中 Option 符号后去除 `+` 分隔符
macOS Option 快捷键渲染从 `⌥+t` / `ctrl+⌥+t` 改为 `⌥t` / `ctrl+⌥t`，与系统习惯一致。

### 10. [#49106](https://github.com/openai/codex/pull/49106) — Agent command center 增加历史分页
命令中心从仅展示 10 条最近 session，扩展为可键盘选中的 "Show more" 行，每次加载最多 10 条并具备 loading/retry 状态。

> 其他值得关注的合并：[#49147](https://github.com/openai/codex/pull/49147)（cloud task base URL 规范化简化）、[#49138](https://github.com/openai/codex/pull/49138)（向 turn 错误 hook 暴露后端元数据）、[#49130](https://github.com/openai/codex/pull/49130) / [#49119](https://github.com/openai/codex/pull/49119)（content-filter 重试恢复指引）、[#49127](https://github.com/openai/codex/pull/49127)（cloud/executor skill 去重）、[#49117](https://github.com/openai/codex/pull/49117)（按 thread SKU 上报 analytics）、[#49105](https://github.com/openai/codex/pull/49105)（重连后恢复未发送输入）。

---

## 📈 功能需求趋势

从今日 50 条活跃 Issue 提炼：

1. **Windows 桌面体验首当其冲**——console 闪烁、加载卡死、通知声音、Computer Use、LaTeX/浏览器 sandbox 等密集出现，约占 Issue 数 40%。**稳定性 vs. Windows** 是当前最尖锐的矛盾。
2. **跨端会话一致性**——macOS/iOS 远程会话、Active-writer 冲突、配对循环 (#40558/#36268/#49132) 反复出现，社区呼吁统一会话协议。
3. **TUI 体验打磨**——复制行为、鼠标选区、主题、键提示、断线恢复（#48125/#49162/#48951/#49136/#49105）成为高频微痛点。
4. **Browser Use 与 Computer Use**——#47270、#43880、#41055 显示内置浏览器与原生 Computer Use 在多个平台仍存在路由/sandbox 问题，社区期待更稳健的"代理式"交互能力。
5. **认证与权限流**——Sites Plugin (#31794)、SSH 密码登录 (#44446)、Android 配对 (#36268/#49132) 等说明账号/设备/连接认证仍是零散痛点。
6. **云端 + 本地混合架构**——PR #49161/#49144/#49145/#49127 集中处理 app-server 默认值覆盖与 skill 去重，提示 Codex 正在强化"client ⇄ background server ⇄ cloud"的边界。

---

## 🧑‍💻 开发者关注点

- **后台进程的可见性控制**：Windows 上任何 detached/Job-Object 路径都要抑制 console 窗口。PR #49164 之后，社区将持续验证 hook、shell、sandbox helper 等子进程是否还残留可见窗口。
- **app-server 与 TUI 的"默认值所有权"**：开发者反复遇到"本地默认值覆盖了 server 设置，导致 session 找不到 / 配置漂移"。PR #49161/#49144/#49145 形成一组系统化修复。
- **会话恢复与重连语义**：unsent vs. unconfirmed 消息分离（#49105）、history 分页（#49106）、model provider 读取修复（#49171）表明社区对"长生命周期会话不丢消息、可回放"的需求上升。
- **skill / 模型目录治理**：cloud 与 executor 双源去重（#49127）、provider model_catalog 权威化（#49135）反映了多 provider 路由下"目录唯一性"成为新的复杂度来源。
- **内容过滤与错误可观测性**：#49119/#49130 把 content-filter 引导从通用错误处理下沉到 Responses retry handler；#49138 将后端元数据（如 usage-limit reset）暴露给 turn error hook，便于上层工具做精细 UI 反馈。
- **Linux/macOS TUI 细节**：键提示渲染（#49136）、块引用复制（#49153）、X11 PRIMARY（#49112）显示维护方正在以小步快跑方式回补 TUI 交互层的小问题。

---

> 📎 数据来源：GitHub `openai/codex` 仓库 Issues / Pull Requests / Releases（截至 2026-09-29）。

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

<think>Let me analyze the GitHub data for Gemini CLI on 2026-09-29 and generate a comprehensive daily report in Chinese.

Key observations:
1. New release: v0.63.0-nightly.20260929.gfe6350238 with an auth fix
2. Top issues are mostly about agent-related problems - subagent recovery, hangs, settings overrides
3. Many PRs are about security fixes (grep injection, sandbox, policy directories)
4. Several closed PRs from @L4XB which appear to be a major contributor fixing multiple issues
5. Strong focus on AST-aware tools, subagent improvements, browser agent issues

Let me organize this into a well-structured Chinese report.</think>

# Gemini CLI 社区动态日报

**日期：2026-09-29**
**数据来源：github.com/google-gemini/gemini-cli**

---

## 📌 今日速览

今日社区动态以 **Agent 稳定性修复** 与 **安全加固** 为主线。Nightly 版本修复了认证死循环问题；多个被关闭的 PR 集中解决了沙箱越界、策略目录权限、日志凭证泄露等 P0/P1 级安全隐患。社区最关注的痛点仍然是 **Subagent 行为异常**（误报成功、卡死、忽略配置），其次是终端渲染性能与 AST 感知的代码检索。

---

## 🚀 版本发布

### v0.63.0-nightly.20260929.gfe6350238

| 项目 | 详情 |
|------|------|
| 类型 | Nightly 预览版 |
| 核心修复 | **fix(auth)**: 防止由文件竞争、无头环境 keyring 异常及 supervisor 状态丢失引发的认证死循环 |
| 关联 PR | [#29448](https://github.com/google-gemini/gemini-cli/pull/29448) |
| 作者 | @villahernandez-coder |

> 该修复针对的是长期存在的认证卡死问题，属于用户高频反馈的稳定性痛点。

---

## 🔥 社区热点 Issues（Top 10）

### 1. [#22323](https://github.com/google-gemini/gemini-cli/issues/22323) — Subagent 达到 MAX_TURNS 后误报 GOAL 成功
- **优先级**: P1 | **评论数**: 13 | **👍**: 2
- **重要性**: 当 `codebase_investigator` 子代理触达最大轮次时，状态字段仍标记为 `success`，导致中断被静默掩盖，影响调试与可观测性。

### 2. [#21409](https://github.com/google-gemini/gemini-cli/issues/21409) — Generalist Agent 永久挂起
- **优先级**: P1 | **评论数**: 8 | **👍**: 8
- **重要性**: 切换到通用代理后简单操作（如创建目录）也会卡死，等待一小时仍不返回；这是社区投票最多的痛点之一。

### 3. [#19873](https://github.com/google-gemini/gemini-cli/issues/19873) — 利用模型原生 Bash 能力：零依赖 OS 沙箱与执行后意图路由
- **优先级**: P2 | **评论数**: 9 | **👍**: 1
- **重要性**: 提议让 Gemini 3 模型在受限沙箱内直接串联 POSIX 工具（grep/cat/sed/awk），平衡性能与安全。

### 4. [#22745](https://github.com/google-gemini/gemini-cli/issues/22745) — 评估 AST 感知文件读取、搜索与映射的收益
- **优先级**: P2 | **评论数**: 7 | **👍**: 1
- **重要性**: EPIC 级议题，探讨通过 AST 工具减少误读取、压缩 token 消耗，是 token 经济性优化的关键探索。

### 5. [#21968](https://github.com/google-gemini/gemini-cli/issues/21968) — Gemini 几乎不主动使用 skills 和 sub-agents
- **优先级**: P2 | **评论数**: 6 | **👍**: 0
- **重要性**: 模型在自动决策时很少触发自定义 skills/subagents，必须显式提示才会调用，限制了 agentic 体验。

### 6. [#22267](https://github.com/google-gemini/gemini-cli/issues/22267) — Browser Agent 忽略 settings.json 覆盖
- **优先级**: P2 | **评论数**: 4
- **重要性**: `AgentRegistry` 合并配置后浏览器子代理并未遵守 `maxTurns` 等覆盖，影响企业级可配置性。

### 7. [#21983](https://github.com/google-gemini/gemini-cli/issues/21983) — Browser Subagent 在 Wayland 下失败
- **优先级**: P1 | **评论数**: 4
- **重要性**: Linux Wayland 环境下 browser agent 直接退出，扩展性受限。

### 8. [#20079](https://github.com/google-gemini/gemini-cli/issues/20079) — 符号链接形式的 agent 文件无法被识别
- **优先级**: P2 | **评论数**: 4
- **重要性**: `~/.gemini/agents/*.md` 若为软链接则不加载，影响 dotfiles 用户与 monorepo 配置分发。

### 9. [#24246](https://github.com/google-gemini/gemini-cli/issues/24246) — 工具数超过 400 时触发 400 错误
- **优先级**: P2 | **评论数**: 3
- **重要性**: 模型可用工具上限存在隐式限制，扩展 subagent 工具集会撞到 API 上限。

### 10. [#23571](https://github.com/google-gemini/gemini-cli/issues/23571) — 模型在随机目录频繁生成临时脚本
- **优先级**: P2 | **评论数**: 3
- **重要性**: 限制 shell 后模型会分散写入大量一次性脚本，污染工作区。

---

## 🛠 重要 PR 进展（Top 10）

### 1. [#29448](https://github.com/google-gemini/gemini-cli/pull/29448) — 修复认证死循环（已合入 Nightly）
- **类型**: fix(auth) | **优先级**: P1 | **大小**: M
- 解决文件竞争、无头 keyring 异常、supervisor 状态丢失三种场景下的认证卡死。

### 2. [#29547](https://github.com/google-gemini/gemini-cli/pull/29547) — 修复 `@` 命令正则吞引号字符串导致 100% CPU
- **类型**: fix(cli) | **优先级**: P1 | **大小**: M | **状态**: CLOSED
- `gemini -p "..."` 模式下，含 `"@scope/pkg"` 的输入会让正则反复匹配造成 CPU 占满。已合入。

### 3. [#29536](https://github.com/google-gemini/gemini-cli/pull/29536) — 防止 grep 命令行选项注入（CWE-88）
- **类型**: fix(grep) | **大小**: M
- 通过显式 `-e` 分隔搜索模式，硬化 `grep.ts`，防御参数注入攻击。

### 4. [#29546](https://github.com/google-gemini/gemini-cli/pull/29546) — 非交互模式支持 `/skill-name` 激活技能
- **类型**: feat(cli) | **优先级**: P2 | **大小**: M | **标签**: help wanted
- 注册 `SkillCommandLoader` 到非交互路径，扩展自动化场景下 skill 触发能力。

### 5. [#29328](https://github.com/google-gemini/gemini-cli/pull/29328) — a2a-server 遵守 LOG_LEVEL 并避免日志泄露凭证
- **类型**: fix(a2a-server) | **优先级**: P1 | **大小**: L | **状态**: CLOSED
- 启用环境变量控制的日志级别，并过滤掉敏感字段。

### 6. [#29333](https://github.com/google-gemini/gemini-cli/pull/29333) — 校验策略目录权限（系统策略）
- **类型**: fix(core) | **优先级**: P2 | **大小**: M | **状态**: CLOSED
- 修复 `filterSecurePolicyDirectories` 只检查系统目录的疏漏。

### 7. [#29336](https://github.com/google-gemini/gemini-cli/pull/29336) — 锁定非系统策略目录的写权限
- **类型**: fix(core) | **优先级**: P2 | **大小**: L | **状态**: CLOSED
- 关闭 #29311，将 `isDirectorySecure` 应用于所有策略目录层级。

### 8. [#29332](https://github.com/google-gemini/gemini-cli/pull/29332) — 限制单次调用对沙箱的扩展次数
- **类型**: fix(core) | **优先级**: P2 | **大小**: M | **状态**: CLOSED
- 防止工具持续返回 `sandbox_expansion_required` 导致栈溢出与堆耗尽。

### 9. [#29440](https://github.com/google-gemini/gemini-cli/pull/29440) — 修复 web-fetch 引用使用 UTF-8 偏移
- **类型**: fix(core) | **大小**: M
- 非 ASCII（多字节、Emoji）响应中引用错位的问题，与 web-search 保持一致。

### 10. [#29435](https://github.com/google-gemini/gemini-cli/pull/29435) — 修复会话退出时进程挂起
- **类型**: fix(cli, core) | **优先级**: P2 | **大小**: L
- 清理 stdin 监听器并对 MCP 传输调用 `close()`，防止事件循环常驻。

> 💡 **观察**: 多个由 @L4XB 提交并关闭的 PR 集中处理 stdin、策略目录、日志、SDK 等核心模块的鲁棒性问题，是今日核心维护者贡献的代表。

---

## 📈 功能需求趋势

| 方向 | 代表性 Issue | 热度信号 |
|------|--------------|----------|
| **AST 感知代码检索** | [#22745](https://github.com/google-gemini/gemini-cli/issues/22745)、[#22746](https://github.com/google-gemini/gemini-cli/issues/22746)、[#22747](https://github.com/google-gemini/gemini-cli/issues/22747) | EPIC 级联议题，跨 3 个关联任务 |
| **Subagent 健壮性** | [#22323](https://github.com/google-gemini/gemini-cli/issues/22323)、[#21409](https://github.com/google-gemini/gemini-cli/issues/21409)、[#21968](https://github.com/google-gemini/gemini-cli/issues/21968) | P1/P2 高频，社区痛点集中 |
| **Browser Agent 改进** | [#22267](https://github.com/google-gemini/gemini-cli/issues/22267)、[#22232](https://github.com/google-gemini/gemini-cli/issues/22232)、[#21983](https://github.com/google-gemini/gemini-cli/issues/21983) | 配置/锁恢复/平台兼容性三维 |
| **Token 经济性** | [#19561](https://github.com/google-gemini/gemini-cli/issues/19561)（Tactful Extraction）、[#22745](https://github.com/google-gemini/gemini-cli/issues/22745) | 围绕每轮 36.6k token 基线优化 |
| **任务追踪持久化** | [#18836](https://github.com/google-gemini/gemini-cli/issues/18836)、[#21000](https://github.com/google-gemini/gemini-cli/issues/21000) | 替代 WriteToDo 文件化 |
| **Subagent 协作模型** | [#18287](https://github.com/google-gemini/gemini-cli/issues/18287)、[#22741](https://github.com/google-gemini/gemini-cli/issues/22741) | 共享内存与后台化 |

---

## 💬 开发者关注点

1. **Agent 透明度不足**：Subagent 在触发 MAX_TURNS、bug 报告、`/chat share` 等场景下，上下文与终止原因均无法被主会话看到（[#22323](https://github.com/google-gemini/gemini-cli/issues/22323)、[#21763](https://github.com/google-gemini/gemini-cli/issues/21763)、[#22598](https://github.com/google-gemini/gemini-cli/issues/22598)）。

2. **配置不生效**：settings.json 中的覆盖项在 Browser Agent、symlinked agent 等场景被忽略（[#22267](https://github.com/google-gemini/gemini-cli/issues/22267)、[#20079](https://github.com/google-gemini/gemini-cli/issues/20079)）。

3. **Linux 桌面兼容性**：Wayland 下浏览器子代理直接失败，提示桌面生态覆盖仍偏 X11 假设（[#21983](https://github.com/google-gemini/gemini-cli/issues/21983)）。

4. **安全加固需求强烈**：本周合并的多个 PR 均集中在 CWE-88、敏感目录写权限、a2a 日志凭证泄露——社区期待更严格的安全默认。

5. **工具规模上限**：当工具数量逼近 400 时触发 400 错误，开发者希望引入更智能的工具筛选（[#24246](https://github.com/google-gemini/gemini-cli/issues/24246)）。

6. **模型自律性差**：频繁生成临时脚本、忽略自定义 skills/subagents、不当使用 `git reset --force`——社区呼吁通过 prompt 调优与策略约束解决（[#23571](https://github.com/google-gemini/gemini-cli/issues/23571)、[#21968](https://github.com/google-gemini/gemini-cli/issues/21968)、[#22672](https://github.com/google-gemini/gemini-cli/issues/22672)）。

7. **终端渲染性能**：调整终端大小时出现闪烁与高 CPU，需要从 `Static` 迁移到 `RenderStatic` 并在 resize 时分批更新（[#21924](https://github.com/google-gemini/gemini-cli/issues/21924)）。

---

*本日报基于 2026-09-29 GitHub 公开数据自动生成，覆盖 50 条 Issue 与 36 条 PR。*

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

<think>The user wants me to generate a daily report for GitHub Copilot CLI based on the provided GitHub data. Let me analyze the data carefully.

Key observations:
1. New releases in past 24 hours: v1.0.90-1, v1.0.90-0, v1.0.89, v1.0.89-7, v1.0.89-6
2. Issues: 50 issues total, 30 shown with most comments. Many are CLOSED, some OPEN
3. PRs: 0 PRs in past 24 hours - this is interesting

Let me organize the report:

1. **今日速览**: Multiple versions released (v1.0.89 stable, v1.0.90 prereleases), authentication/MCP issues remain hot topics, 0 new PRs in 24 hours is notable.

2. **版本发布**: 
   - v1.0.90-1: MCP OAuth token reuse fix, withdrawn prompts persistence fix
   - v1.0.90-0: Generic fixes
   - v1.0.89 (stable, 2026-09-28): Claude Code rules support, sidebar session indicators, left-click focus
   - v1.0.89-7: Generic fixes
   - v1.0.89-6: PR template support, indexed search configuration, shell output cleanup, timeline improvements

3. **社区热点 Issues** (top 10 by comments):
   - #1274: 400 errors on code review prompts (29 comments, 12 likes) - most popular
   - #4929: Process-local auth token refresh failure (13 comments)
   - #1838: Nix/direnv subprocess I/O deadlock (closed, 7 comments)
   - #2216: Text selection contrast issue (closed, 6 comments)
   - #3392: NixOS bash tool broken (closed, 5 comments)
   - #2958: Per-mode default model config (closed, 5 comments, 16 likes - high engagement)
   - #1250: Windows copilot silent failure (closed, 5 comments)
   - #3042: Ask permissionDecision double confirmation (closed, 4 comments)
   - #1936: Tilde markdown rendering (closed, 4 comments)
   - #4971: Hourly authorization errors (open, 3 comments)

4. **重要 PR 进展**: No PRs in past 24 hours - need to note this.

5. **功能需求趋势**:
   - MCP OAuth/authentication issues are very prominent (multiple issues)
   - Model configuration improvements (per-mode defaults)
   - Custom agent/rule files support
   - Platform compatibility (Windows, NixOS, Linux)
   - IDE integration (VS Code)

6. **开发者关注点**:
   - Authentication reliability is a major pain point
   - MCP integration issues
   - Cross-platform compatibility
   - UI/UX issues (terminal rendering, accessibility)

Let me write this in Chinese as requested. I need to be professional, concise, and suitable for technical developers.

Note: The data shows dates from 2026, which is in the future from my training data. I'll just report the data as-is without questioning dates.

Also notable: The user asked for 10 PRs but there are 0 in past 24 hours. I should note this honestly rather than fabricating.

Let me structure the report now.</think>

# GitHub Copilot CLI 社区动态日报
**日期**：2026-09-29 · **数据来源**：github.com/github/copilot-cli

---

## 📌 今日速览

今天 Copilot CLI 发布了 **v1.0.89 稳定版**及多个 v1.0.89 / v1.0.90 预发布版本，重点改进了 MCP OAuth 令牌复用、PR 模板支持以及侧边栏会话状态指示。社区方面，**认证与 MCP 相关问题持续高发**，多个长期未解决的 400 错误和令牌刷新失败类 Issue 仍在发酵；但过去 24 小时内 **PR 数量为 0**，显示当前更多精力集中在 bug 闭环与版本收尾。

---

## 🚀 版本发布

| 版本 | 类型 | 主要变更 |
|---|---|---|
| **v1.0.90-1** | 预发布 | 🔧 **Fixed**：MCP OAuth 登录（如 Datadog）复用仍有效的缓存令牌；撤回的提示词在会话恢复后保持移除状态 |
| **v1.0.90-0** | 预发布 | 综合修复与改进 |
| **v1.0.89** | 稳定版（2026-09-28） | 🆕 左键点击 `ask_user` 与 elicit 表单输入可定位光标；新增 `.claude/rules` 自定义指令支持；侧边栏未读会话显示蓝色圆点 |
| **v1.0.89-7** | 预发布 | 综合修复与改进 |
| **v1.0.89-6** | 预发布 | ✨ **Improved**：PR 创建遵循仓库 PR 模板结构；可通过 `TGREP_FILE_COUNT_THRESHOLD` 配置自动索引搜索；Shell 输出不再显示命令补全元数据；时间线渲染优化 |

➡️ 建议关注 v1.0.90-1 的 OAuth 修复，对企业 MCP 用户尤为关键。

---

## 🔥 社区热点 Issues

按评论数与社区反应筛选的 10 个值得关注 Issue：

1. **#1274 — [OPEN] CLI 频繁返回 400 错误（无效请求体）**（29 评论 / 👍12）
   📎 https://github.com/github/copilot-cli/issues/1274
   **点评**：今日最高热度 Issue。约 95% 的 code review 请求失败，社区反馈严重影响日常工作流，疑似服务端校验或 CLI 请求构造问题。

2. **#4929 — [OPEN] 进程本地认证令牌停止刷新，需重启恢复**（13 评论）
   📎 https://github.com/github/copilot-cli/issues/4929
   **点评**：长会话场景下 `/login` 无法自愈，仅重启+恢复会话可修复，是认证稳定性的代表性 Bug。

3. **#2958 — [CLOSED] 支持按模式（plan/autopilot）配置默认模型**（5 评论 / 👍16）
   📎 https://github.com/github/copilot-cli/issues/2958
   **点评**：👍 数最高的功能请求，反映出用户对**细粒度模型配置**的强烈需求。

4. **#1838 — [CLOSED] Nix/direnv 环境下子进程 I/O 死锁**（7 评论 / 👍12）
   📎 https://github.com/github/copilot-cli/issues/1838
   **点评**：NixOS 生态用户长期痛点，与 #3392 同源，本次关闭预示修复落地。

5. **#3392 — [CLOSED] Bash 工具在 NixOS ≥1.0.49 版本中崩溃**（5 评论 / 👍13）
   📎 https://github.com/github/copilot-cli/issues/3392
   **点评**：与 #1838 形成 NixOS 兼容性修复闭环。

6. **#2216 — [CLOSED] 深色终端下文本选区对比度过低**（6 评论）
   📎 https://github.com/github/copilot-cli/issues/2216
   **点评**：可访问性类问题，对重度 CLI 用户体验影响显著。

7. **#1250 — [CLOSED] Windows 上 `copilot` 命令静默失败**（5 评论）
   📎 https://github.com/github/copilot-cli/issues/1250
   **点评**：Windows 用户的关键入口问题，错误未输出导致排障困难。

8. **#3042 — [CLOSED] `ask` permissionDecision 触发双重确认**（4 评论）
   📎 https://github.com/github/copilot-cli/issues/3042
   **点评**：钩子机制与原生信任提示的交互问题，影响插件生态。

9. **#1936 — [CLOSED] 单波浪号被误渲染为删除线**（4 评论）
   📎 https://github.com/github/copilot-cli/issues/1936
   **点评**：Markdown 渲染规范的细节问题，反映社区对终端输出可读性的关注。

10. **#4971 — [OPEN] 每小时出现一次认证错误（credentials may be expired）**（3 评论）
    📎 https://github.com/github/copilot-cli/issues/4971
    **点评**：与 #4929 同类问题但更频繁，**`/login` 与 `mcp reload` 都不能解决**，需关注是否为系统性回归。

---

## 📥 重要 PR 进展

⚠️ **过去 24 小时内无新的 PR 更新**（共 0 条）。

这是值得关注的现象——可能意味着团队当前的工作集中在版本发布、Issue 排查与回归修复上，而非新功能合并。建议持续关注上游主干动态，下一轮日报中跟踪后续 PR 增量。

---

## 📈 功能需求趋势

从近 24 小时活跃 Issue 中提炼出的社区关注方向：

| 方向 | 代表 Issue | 社区信号 |
|---|---|---|
| **🔑 认证与令牌生命周期** | #4929、#4971、#4968、#4606 | 高度密集，多个 OPEN Issue 指向 OAuth 回调、MCP 授权、令牌刷新链路不稳 |
| **🧩 MCP 集成与生态** | #4983、#4985、#4606、#4968 | Miro 等远程 MCP 服务器初始化超时、stdio 占位符 secret 未注入、redirect URI 端口不匹配 |
| **⚙️ 模型与 Agent 配置** | #2958、#3070、#3014 | 按模式选模型、Agent frontmatter 支持数组、推理强度 UI 同步 |
| **🪟 跨平台兼容性** | #1838、#3392、#1250、#2997 | NixOS、WSL、Windows 三大平台的子进程、剪贴板、CA 证书问题 |
| **🎨 终端 UI/可访问性** | #2216、#1936、#1726、#2997 | 选区对比度、Markdown 渲染、剩余请求百分比显示精度 |
| **📝 自定义指令与规则** | v1.0.89 新增 `.claude/rules` | Claude Code 规则文件原生支持，降低生态迁移门槛 |

---

## 💬 开发者关注点（高频痛点）

1. **🔐 认证链路脆弱** 是当前最大共鸣点
   - 进程级令牌无法热刷新、每小时触发一次失效提示、OAuth redirect URI 端口错配、远程 MCP 授权后无法建立连接……
   - 建议：团队需要一次系统性的**认证状态机重构**，而非点状修复。

2. **🤝 MCP 生态既是亮点也是痛点**
   - OAuth、CIMD、stdio/远程传输、secret 占位符、初始化超时——各类问题交织。
   - 建议：MCP 子系统需要更严格的错误分类与可观测性输出。

3. **🧱 平台碎片化问题突出**
   - NixOS、Windows CA、WSL/Git-Bash 多行粘贴等多个 Issue 提示**测试矩阵覆盖不足**。
   - 建议：建立官方 CI 跨平台矩阵。

4. **🧭 细粒度模型控制诉求强烈**
   - per-mode default model、Agent 模型数组、推理强度 UI 同步——开发者希望**按场景精细化 AI 行为**。
   - 这与 v1.0.89 引入的 `.claude/rules` 一起，构成"个性化 AI 工作流"的产品主线。

5. **🪶 可访问性与终端体验**
   - 选区对比度、删除线误渲染、剩余请求精度显示——这些"小问题"直接影响长时间开发者的舒适度。

---

*日报由 AI 自动生成，基于过去 24 小时 GitHub 数据整理。如需追踪特定 Issue/PR，欢迎订阅关注。*

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

<think>The user wants me to generate a Chinese daily report for the OpenCode community based on GitHub data from 2026-09-29. Let me analyze the data carefully and structure it according to the requested format.

Let me first understand what's happening:

1. **No releases in the past 24 hours** - so the version release section can be omitted or just note that.

2. **Issues**: 50 issues updated in the past 24 hours, top 30 shown by comment count. I need to pick 10 most noteworthy.

3. **PRs**: 50 PRs updated in the past 24 hours, top 20 shown. I need to pick 10 most important.

Let me analyze the most important issues:

**Top Issues by comment count:**
1. #39653 (CLOSED) - GPT-5.6 Sol server overloaded errors - 17 comments, 11 likes - **CLOSED**
2. #42225 (OPEN) - TUI does not re-layout on terminal shrink - 9 comments - important UX bug
3. #49389 (OPEN) - Five session capabilities unreachable from plugin - 7 comments, 4 likes - **Feature request**
4. #39256 (CLOSED) - Clarify variants camelCase vs snake_case - 6 comments - documentation
5. #38655 (CLOSED) - Can't switch between plan and build - 6 comments - **User-facing bug, CLOSED**
6. #51759 (OPEN) - Project Tabs with Sessions Grouped by Project - 5 comments - feature request
7. #44007 (OPEN) - TUI --auto stalls background tabs - 4 comments - bug with PR #44009
8. #39771 (CLOSED) - Fast failure on network errors - 4 comments - closed
9. #37666 (CLOSED) - NVIDIA API ROUTER ISSUE - 4 comments - provider issue
10. #39033 (OPEN) - Include system prompt in export - 3 comments - feature
11. #49992 (OPEN) - VSCode plugin broken - 3 comments, 4 likes - **important plugin issue**
12. #51857 (OPEN) - Web stalled-stream watchdog lost - 3 comments - regression bug
13. #51972 (OPEN) - Native task routing with reasoning variants - 3 comments - feature
14. #51980 (CLOSED) - Doesn't work in any session - 3 comments - critical bug CLOSED
15. #50627 (OPEN) - policy deny shell breaks free tier - 3 comments - permission bug
16. #51966 (CLOSED) - Phase 7 human-in-the-loop - 3 comments - feature spec
17. #37746 (CLOSED) - Mobile sidebar stays open - 3 comments - mobile UX
18. #38506 (CLOSED) - Theme doesn't change with terminal - 3 comments - theme bug
19. #38585 (CLOSED) - Windows select-all binding - 3 comments - keyboard shortcuts
20. #37750 (CLOSED) - Deeplink doesn't resolve - 3 comments - feature

Let me pick the most noteworthy 10:

1. #39653 - GPT-5.6 Sol overload (highest comments, CLOSED)
2. #42225 - TUI re-layout on shrink (significant UX)
3. #49389 - Five session capabilities plugin gap (FEATURE, +4)
4. #51759 - Project Tabs (popular feature request)
5. #49992 - VSCode plugin broken (regression with high likes)
6. #51857 - Web zombie SSE regression
7. #51972 - Native task routing
8. #44007 - --auto stalls background tabs
9. #51997 - V2 session titles include commentary (new bug)
10. #50627 - policy deny shell breaks free tier

**Top PRs:**
1. #52013 - desktop isolated dev service fixed port (CLOSED)
2. #50798 - TUI match main model metadata in child sessions
3. #51978 - show provider error bodies (CLOSED)
4. #52011 - include repository in published metadata
5. #51236 - calm diff word highlights (CLOSED)
6. #52009 - render moved notice as timeline divider (CLOSED)
7. #52012 - CI V2 Discord notification after skipped builds
8. #45922 - docs ecosystem plugins (CLOSED)
9. #51981 - enable explicit caching on more routes
10. #52005 - bump electron to 44.4.5 (CLOSED)
11. #52006 - exclude commentary from session titles (fixes #51997)
12. #52008 - defer Mistral thinking metadata
13. #51959 - bind Bedrock Claude thinking blocks (CLOSED)
14. #51999 - finalize Bedrock redacted reasoning (CLOSED)
15. #51918 - reject unknown prompt variants
16. #27684 - adjustable font size and line height
17. #51996 - perf snapshot capture
18. #48731 - TUI i18n
19. #52000 - per-locale i18n infrastructure
20. #44009 - auto-approve background tab permissions

Let me pick 10 most important PRs:

1. #44009 - auto-approve background tabs (fixes #44007)
2. #52006 - exclude commentary from session titles (fixes #51997)
3. #51981 - enable explicit caching on more routes (AI infra improvement)
4. #51996 - perf snapshot capture (perf)
5. #52000 - per-locale i18n (closes #51998, major i18n)
6. #51959 - Bedrock Claude thinking blocks (CLOSED, AI infra)
7. #52008 - defer Mistral thinking metadata
8. #50798 - TUI match main model metadata
9. #52013 - desktop isolated dev fixed port
10. #51978 - show provider error bodies (CLOSED)

Now let me identify feature trends:
- i18n / localization (multiple issues and PRs)
- Desktop / UI improvements (many desktop-related issues)
- Plugin API expansion (#49389)
- New model support (Bedrock Claude, Mistral, Alibaba, Moonshot, etc.)
- TUI / V2 client refactor issues (many regression bugs)
- Task routing / model selection
- Mobile / responsive UI
- AI provider caching
- Background tab / session management
- Permission system improvements

Developer pain points:
- TUI V2 refactor caused regressions
- Background tab permission hangs
- Web SSE zombies
- Provider error visibility
- Plugin API gaps
- Theme detection
- Locale translations
- Variant configuration docs
- Network timeouts in restricted regions
- Free tier access blocked by policies

Let me write the report now in Chinese, following the structure requested.

Let me make sure the formatting is clean and professional, with appropriate links.</think>

# OpenCode 社区动态日报 · 2026-09-29

---

## 📌 今日速览

今日 OpenCode 仓库动态密集，无新版本发布，但社区活跃度集中在 **V2 TUI/Web 客户端重构后的回归问题修复** 与 **AI 提供商基础设施完善**（Bedrock、Mistral、多路由缓存）。插件能力扩展（#49389）与桌面/桌面拖拽体验（#41646）成为最受关注的两个 Feature 方向，多个长尾 Issue 在今天关闭并落地。

---

## 🚀 版本发布

**过去 24 小时内无新版本发布。** 最近可参考的稳定版本为社区 Issue 中频繁提及的 `v1.18.x` 与 `v2.0.10`。

---

## 🔥 社区热点 Issues（Top 10）

| # | Issue | 状态 | 关键点 |
|---|-------|------|--------|
| [#39653](https://github.com/anomalyco/opencode/issues/39653) | GPT-5.6 Sol 反复报 server overloaded | ✅ **已关闭** | 17 条评论、11 个 👍，是今日互动最高的热帖，反映新模型上线初期的稳定性问题 |
| [#42225](https://github.com/anomalyco/opencode/issues/42225) | TUI 终端缩放时不重新布局 | 🟢 开放 | 在 xterm.js 与多个终端模拟器中复现，影响所有 v2 TUI 用户 |
| [#49389](https://github.com/anomalyco/opencode/issues/49389) | 插件无法触达 5 项核心 Session 能力 | 🟢 开放 | 4 个 👍，是当日最受关注的 Feature 提案，与 #43517/#40863 形成系列 |
| [#51759](https://github.com/anomalyco/opencode/issues/51759) | Project Tabs：按项目分组 Session | 🟢 开放 | 5 条评论，期望结束"平铺会话条"现状 |
| [#49992](https://github.com/anomalyco/opencode/issues/49992) | VSCode 插件因参数错误全部失效 | 🟢 开放 | 4 个 👍，CLI v2 命令变更 `opencode --port` → `opencode serve --port` 导致插件不可用 |
| [#51857](https://github.com/anomalyco/opencode/issues/51857) | Web 端 SSE 看门狗在 v2 重构中丢失 | 🟢 开放 | 复现路径清晰：标签挂起 → 静默死亡 → 必须硬刷新，影响所有 Web 用户 |
| [#51972](https://github.com/anomalyco/opencode/issues/51972) | 原生 Task Routing + reasoning 变体选择 | 🟢 开放 | 面向模型调度的高级 Feature，建议在已 resolve 的模型之上做任务感知路由 |
| [#44007](https://github.com/anomalyco/opencode/issues/44007) | `--auto` 在后台 tab 上卡权限弹窗 | 🟢 开放 | 已有 PR #44009 进行修复，看点十足 |
| [#51997](https://github.com/anomalyco/opencode/issues/51997) | V2 会话标题混入模型"思考旁白" | 🟢 开放 | 当日新 Bug，已有 PR #52006 跟进 |
| [#50627](https://github.com/anomalyco/opencode/issues/50627) | 自定义 Agent `deny shell *` 反误伤 Free Tier | 🟢 开放 | 权限策略与 free-tier 校验的边界缺陷 |

---

## 🛠️ 重要 PR 进展（Top 10）

| # | PR | 类型 | 说明 |
|---|----|------|------|
| [#44009](https://github.com/anomalyco/opencode/pull/44009) | `fix(tui)` 后台 tab 权限自动放行 | 修复 | 把自动批准响应器从 selected session 迁到 tab context，关闭 #44007 |
| [#52006](https://github.com/anomalyco/opencode/pull/52006) | `fix(core)` 会话标题剔除模型旁白 | 修复 | Responses-style 标题会拼接两段文本，本 PR 改为只取最终答复，修复 #51997 |
| [#51981](https://github.com/anomalyco/opencode/pull/51981) | `fix(ai)` 6 条消息协议路由显式启用缓存 | 优化 | 覆盖 Alibaba、Cloudflare AI Gateway、Meta、MiniMax、Moonshot、ZAI Coding Plan |
| [#51996](https://github.com/anomalyco/opencode/pull/51996) | `perf(core)` Snapshot 捕获加速与加固 | 性能 | 串联 #44511/#42237/#43390/#48848 等多个 snapshot 性能/正确性 issue |
| [#52000](https://github.com/anomalyco/opencode/pull/52000) | `feat(tui)` per-locale i18n 基础设施 | 新功能 | 把 #48731 的 TUI 国际化基座适配到当前 v2 分支，关闭 #51998 |
| [#51959](https://github.com/anomalyco/opencode/pull/51959) | `fix(ai)` Bedrock Claude 思维块默认绑定 | 修复 | 对齐 Anthropic 路由的 `block_binding.prefix` 处理，✅ 已关闭 |
| [#52008](https://github.com/anomalyco/opencode/pull/52008) | `fix(ai)` 推迟 Mistral 思维元数据至 block 结束 | 修复 | 用 append-only parser 替代每次拷贝数组，提升流式性能 |
| [#50798](https://github.com/anomalyco/opencode/pull/50798) | `feat(tui)` 子会话同步主会话模型元数据 | 新功能 | 解决 subagent 在 v2 模式下丢失 Composer 元信息行的问题 |
| [#51978](https://github.com/anomalyco/opencode/pull/51978) | `fix(ai)` 显示 provider 错误原始 body | 修复 | 当 `error.message` 缺失时不再仅显示 HTTP code，✅ 已关闭 |
| [#52013](https://github.com/anomalyco/opencode/pull/52013) | `fix(desktop)` 桌面 dev 服务固定端口 `0x0C0C` | 修复 | 避免 `--port 0` 抢占冲突；明确 49374/49375/3084 三端口用途，✅ 已关闭 |

---

## 📈 功能需求趋势

综合 Issues 与 PR，提炼出五大趋势方向：

1. **🧩 插件 / 扩展能力扩张**：`#49389` 提出的 5 项 session 能力是当下插件生态最迫切的缺口，与 #43517、#40863 形成"读 / 写 / 隐藏 session"完整诉求链。
2. **🪟 桌面端体验打磨**：标题栏拖拽区（#41646）、可调字号/行高（#27684）、隔离服务端口（#52013）、Eelectron 44.4.5 升级（#52005）共同指向"桌面走向成熟"的信号。
3. **🌐 多语言 / 本地化**：`#51982`、`#52000`、`#48731` 与 #50204 的中文术语修正共同推动 zh/zht 词条收敛。
4. **🧠 模型调度与缓存**：Bedrock / Mistral 思维块（#51959、#52008、#51999）+ 多路由缓存（#51981）+ 任务路由（#51972）+ 标题模型选型（#52004）形成"AI 中间件化"完整链路。
5. **📑 会话 / Tab 管理**：项目级 tab（#51759）、后台权限（#44007 → #44009）、标题污染（#51997 → #52006）集中爆发，反映 V2 客户端重构尚未完全收敛。

---

## 💢 开发者关注点与痛点

- **V2 重构回归集中爆发**：SSE 看门狗丢失（#51857）、后台 tab 权限卡死（#44007）、标题混入模型旁白（#51997）、mod+shift/w 等快捷键失效（#39785），均指向近期 v2 客户端/服务端拆分。
- **CLI 命令形态不一致**：`opencode --port` → `opencode serve --port` 直接打挂 VSCode 插件（#49992），需要更平滑的兼容层或迁移提示。
- **错误可观测性不足**：provider 仅返回 HTTP code 而无 body（#42610/#51978），调用方在多区域/受限网络下排障困难；中国/SSH 可用但 HTTPS 不通的场景（#39771）需求快失败与 fallback。
- **文档-实现漂移**：`variants` 子配置 camelCase vs snake_case（#39256、#51987）、AGENTS.md 与仓库实际 PR 规则不一致（#51984）反复出现，需建立文档 CI。
- **Free Tier 与权限策略冲突**：自定义 `deny shell *` 反误伤 free tier（#50627），反映权限系统与计费/分发系统的边界尚未厘清。
- **平台键盘/拖拽细节**：Windows 上 `super+a` 被系统占用（#38585）、桌面多 tab 时拖拽区过窄（#41646）等体验细节被持续提报。

---

> 📎 数据范围：2026-09-28 → 2026-09-29 24 小时内更新的 Issues 与 PRs，仓库 `anomalyco/opencode`。完整列表参见 GitHub 仓库 Issue / Pull Request 面板。

</details>

<details>
<summary><strong>jcode</strong> — <a href="https://github.com/1jehuang/jcode">1jehuang/jcode</a></summary>

<think>The user wants me to generate a Chinese daily report for the jcode community based on GitHub data from 2026-09-29. Let me analyze the data carefully.

Looking at the data:
- No new releases in the past 24 hours
- 16 issues updated in the past 24 hours
- 25 PRs updated in the past 24 hours (showing top 20 by comments)

Let me organize this into a structured report.

Key observations:
1. Many recent issues are from @lumenfield (STOS system reporter) - issues #1561, #1403, #1222, #1156 - showing heavy user-side testing
2. Multiple TUI test fixes from @Kenmege - #1555, #1557, #1553, #1551 and corresponding PRs
3. Provider-related issues: OpenCode Go models (#1224), Cursor (#1226, #1258), Alibaba Qwen3.8-Max (#1215)
4. Bug #1227 about CLI silently using Claude Opus - high priority
5. PR #1261 closed - Cursor native transport
6. PR #1545 closed - reload exit status tests
7. PR #1559 closed - Local model testing findings
8. PR #1558, #1556, #1554, #1552 - test/clippy fixes by @Kenmege

Major themes:
1. Multi-provider support (Cursor, OpenCode, Alibaba, Bedrock, OpenAI)
2. TUI test stability
3. Swarm functionality improvements
4. Claude Code version compatibility
5. Auto-update mechanism issues
6. Memory/citation system

Let me draft the report now.

For the top 10 issues, I'll select based on:
- High comment count
- High priority labels
- Fundamental impact

Top 10 Issues:
1. #1224 - OpenCode Go multi-endpoint problem (11 comments)
2. #1227 - CLI ignoring default_provider (9 comments, high priority)
3. #1226 - Cursor provider errors (8 comments, closed)
4. #1229 - Citation-backed memories (8 comments)
5. #1215 - Qwen3.8-Max support (7 comments)
6. #1258 - Cursor AgentService native transport (2 comments, closed)
7. #1222 - Per-worker model in swarm spawn (3 comments)
8. #1156 - swarm_model=inherit bug (3 comments)
9. #1403 - Swarm worker completion verification (1 comment)
10. #1561 - Auto-update silently skipped (new, P1)

Or maybe include #1560 - provider-profile forces OpenAI transport
And #1559 - Local-model testing findings (closed)

Top 10 PRs:
1. #1528 - cache countdown beep + Copilot /responses routing
2. #1261 - Cursor native AgentService (CLOSED)
3. #1558 - truecolor pin fix
4. #1480 - tool call timestamps
5. #1443 - macOS test fixes
6. #1556 - test screen scope
7. #1430 - Claude Code version override
8. #1554 - openrouter collapsible if
9. #1552 - swarm parameter token cap
10. #1423 - configurable reasoning color role
11. #1550 - Bedrock Claude 5 tool support
12. #1549 - hooks session_start_context
13. #1507 - Daybreak cyber access program
14. #1505 - max_context_window
15. #1347 - image block fix
16. #1346 - /sessions pre-filtered
17. #1538 - pane-safe glyphs
18. #1392 - manifest.json stable field
19. #1353 - pricing layer
20. #1545 - reload exit statuses (CLOSED)

I'll pick the most impactful 10.

Let me structure the report:

**今日速览**: Focus on the day's highlights
- TUI test stability fixes (4 PRs by @Kenmege addressing #1555, #1557, #1551, #1553)
- Swarm functionality improvements and bugs reported by STOS team
- Multi-provider issues continue (Cursor, OpenCode, Alibaba, Anthropic)
- Several new high-priority bugs surfaced

Let me write the report in Chinese, professional tone suitable for technical developers.</think>

# jcode 社区动态日报 · 2026-09-29

## 📌 今日速览

今日社区动态以**稳定性修复与多 Provider 适配**为主线。@Kenmege 一口气提交了 4 个针对 CI/测试问题的 PR（#1552/#1554/#1556/#1558），覆盖 clippy 警告、TUI 屏幕扫描测试与 truecolor 断言失败；STOS 团队继续高频反馈 swarm 子系统与 auto-update 机制的 P1 级缺陷（#1403/#1561/#1156/#1222）。同时，Cursor AgentService 原生传输的 MCP 桥接方案（#1261）已被关闭合并，多 Provider 路由问题（OpenCode Go 多端点、Alibaba Qwen3.8-Max、Bedrock Claude 5）仍是社区焦点。

---

## 🚀 版本发布

过去 24 小时内无新版本发布。

---

## 🔥 社区热点 Issues

### 1. [#1224](https://github.com/1jehuang/jcode/issues/1224) — OpenCode Go 多协议端点路由失败
- **类型**: bug | **状态**: OPEN | **评论**: 11
- **重要性**: OpenCode Go 作为多协议 provider，Grok/GPT-5.6-Luna/Muse 等模型需要 `/responses`、`/messages` 等不同端点，而非仅 `/chat/completions`。这是影响多个旗舰模型可用性的核心问题，评论数最高。
- **社区反应**: @KooshaPari 提出明确需要分协议路由的方案，社区关注跨 provider 兼容。

### 2. [#1227](https://github.com/1jehuang/jcode/issues/1227) — CLI 静默忽略 default_provider，回退到 Claude Opus
- **类型**: bug（高优先级）| **状态**: OPEN | **评论**: 9
- **重要性**: 启动 `jcode` 时即使 `config.toml` 配置了 `default_provider`，也会因 `--provider auto` 自动嗅探到本地 Claude 凭证而强制使用 Claude Opus。属于配置优先级与自动发现冲突的隐性缺陷，影响所有多 provider 用户。

### 3. [#1226](https://github.com/1jehuang/jcode/issues/1226) — Cursor provider 大部分模型返回 ERROR_BAD_MODEL_NAME
- **类型**: bug | **状态**: CLOSED | **评论**: 8
- **重要性**: 除 `composer-*` 与裸 Gemini ID 外的 Cursor 模型全部失败。已关闭，意味着修复方案已在 #1258 中推进。

### 4. [#1229](https://github.com/1jehuang/jcode/issues/1229) — 引用回溯的 memory 与读时验证
- **类型**: enhancement | **状态**: OPEN | **评论**: 8
- **重要性**: 提出的"memory 在读取时回链源代码做即时验证"机制可从根本上解决 memory 陈旧断言问题，代表社区对 memory 系统可靠性的高阶需求。

### 5. [#1215](https://github.com/1jehuang/jcode/issues/1215) — Alibaba Qwen3.8-Max 原生 Token Plan 支持
- **类型**: enhancement | **状态**: OPEN | **评论**: 7
- **重要性**: Qwen3.8-Max 是阿里云 Model Studio 当前旗舰模型，社区希望在 `alibaba-coding-plan` provider 中获得一等公民支持。

### 6. [#1258](https://github.com/1jehuang/jcode/issues/1258) — Cursor AgentService 原生传输 + MCP 桥接
- **类型**: enhancement | **状态**: CLOSED | **评论**: 2
- **重要性**: 已关闭，对应 PR #1261 完成合并，标志 Cursor provider 进入原生 HTTP/2 + MCP 工具回环的新阶段。

### 7. [#1403](https://github.com/1jehuang/jcode/issues/1403) — Swarm worker 完成判据重构
- **类型**: enhancement（area: swarm）| **状态**: OPEN | **评论**: 1
- **重要性**: STOS 团队基于 12 spawn 判例提出 A/B/C 三档方案，建议从"worker 自报 status"改为"系统层可观测产物核验"。这是 swarm 语义层面的根本性讨论。

### 8. [#1561](https://github.com/1jehuang/jcode/issues/1561) — Git 仓库下静默跳过 auto-update
- **类型**: bug | **状态**: OPEN（今日新）| **评论**: 0
- **重要性**: 当 jcode 安装在 git 仓库内时 auto-update 静默失败、版本滞留、且无任何告警。P1 级别静默失败，影响版本一致性。

### 9. [#1560](https://github.com/1jehuang/jcode/issues/1560) — `--provider-profile` 强制走 OpenAI 兼容传输
- **类型**: bug | **状态**: OPEN（今日新）| **评论**: 0
- **重要性**: 即便 profile 类型为 `anthropic-compatible`，`--provider-profile` 仍走 `/chat/completions`，与其他入口行为不一致。

### 10. [#1156](https://github.com/1jehuang/jcode/issues/1156) — `swarm_model=inherit` 在 v0.80.0 后失效
- **类型**: bug（needs-info）| **状态**: OPEN | **评论**: 3
- **重要性**: 从 v0.80.0 起 spawn 出的 agent 不再继承父 session 模型，与文档预期不符，是回归性问题。

---

## 🛠 重要 PR 进展

### 1. [#1261](https://github.com/1jehuang/jcode/pull/1261) — `feat(cursor)`: 桥接原生 AgentService 工具与 MCP ✅ 已关闭
- 实现 Cursor 原生 HTTP/2 流式传输与 MCP 工具回环，配套关闭 #1258。

### 2. [#1528](https://github.com/1jehuang/jcode/pull/1528) — 倒计时蜂鸣缓存 + Copilot /responses 路由
- 同时引入 OpenAI 兼容 Copilot 的 `/responses` 端点路由，提升交互体验与协议覆盖。

### 3. [#1558](https://github.com/1jehuang/jcode/pull/1558) — `test(tui)`: 固定 truecolor 行为
- 关闭 #1557。在测试中显式固定 truecolor 而非继承 `COLORTERM`，修复 macOS/Linux 默认环境下的 256 色量化问题。

### 4. [#1556](https://github.com/1jehuang/jcode/pull/1556) — `test(tui)`: 收紧全屏扫描断言范围
- 关闭 #1555。两个 TUI 测试之前扫描整屏，受不相关文本影响；本 PR 将其作用域限定到所断言的字段。

### 5. [#1554](https://github.com/1jehuang/jcode/pull/1554) — `fix(openrouter)`: 折叠 catalog_declares_image_input 中的嵌套 if
- 关闭 #1553。修复 clippy 1.98.1 下的 `collapsible_if` 警告，恢复 `-D warnings` CI 质量门。

### 6. [#1552](https://github.com/1jehuang/jcode/pull/1552) — `fix(swarm)`: swarm 参数描述压缩至 25 token 上限内
- 关闭 #1551。`tldr`、`to_swarm`、`label` 三项描述超出 token 上限，本 PR 收敛到限定字数。

### 7. [#1545](https://github.com/1jehuang/jcode/pull/1545) — `test(reload)`: 覆盖 server reload 退出码 ✅ 已关闭
- 关闭 #1535，承接 #1536。覆盖无监听、已是最新、ready 交接、not-ready 交接四种退出路径。

### 8. [#1550](https://github.com/1jehuang/jcode/pull/1550) — `fix(bedrock)`: Claude 5 系列广告工具支持
- `BedrockProvider::model_info()` 之前仅匹配 `claude-opus-4`/`claude-sonnet-4`，导致 Claude 5 路由 ID 走无工具默认路径，本 PR 扩展匹配。

### 9. [#1549](https://github.com/1jehuang/jcode/pull/1549) — `hooks`: 同步 session_start_context providers
- 关闭 #770。原 `session_start` 异步且输出被丢弃，本 PR 增加同步钩子在会话创建/恢复时注入上下文。

### 10. [#1480](https://github.com/1jehuang/jcode/pull/1480) — `feat(tui)`: 工具行时间戳（可选）
- 关闭 #1454，依赖 #1478。为工具行增加可选用时时间戳，方便长 session 中定位工具调用时机。

---

## 📈 功能需求趋势

综合今日 Issues 提炼出以下社区最关注的方向：

1. **多 Provider 模型与协议扩展**：Cursor AgentService（#1226/#1258）、OpenCode Go 多端点（#1224）、Alibaba Qwen3.8-Max（#1215）、Bedrock Claude 5（#1550）。社区在快速跟进各厂商的新模型与新传输协议。

2. **Swarm 子系统治理**：STOS 团队提出的 spawn 判据重构（#1403）、per-worker 模型支持（#1222）、`inherit` 失效（#1156）共同指向 swarm 在多 agent 协同层面的语义需要再设计。

3. **Memory 系统可信度**：citation 校验（#1229）反映出从"写时记录"到"读时验证"的范式升级诉求。

4. **本地/自托管模型可用性**：LM Studio 等本地模型遇到静默 200 错误、模板工具能力 400 问题（#1559），社区对本地推理的鲁棒性期待提升。

5. **配置与更新机制**：auto-update 静默失败（#1561）、`--provider-profile` 传输错位（#1560）、`default_provider` 被忽略（#1227）三连问题指向配置层优先级与可观测性的系统缺陷。

6. **开发者体验增强**：pricing 层（#1353）、reasoning 颜色角色（#1423）、工具行时间戳（#1480）等增强项持续推进。

---

## 👨‍💻 开发者关注点

**高频痛点**：

- **静默失败**：auto-update 无告警、CLI 自动嗅探覆盖配置、Anthropic OAuth 因 Claude Code 版本过期 400 拒绝，都是"无可见错误信息"的失败模式，社区多次呼吁增加警告与显式回退路径。
- **跨平台测试不稳定**：TUI 测试在 macOS 与无 `COLORTERM` 的 Linux 环境下反复翻车（#1555/#1557），`@Kenmege` 系列 PR 集中体现了对测试环境隔离与断言作用域的反思。
- **多协议兼容与版本门**：Anthropic 对 Claude Code 版本设最低门槛（#1390/#1134 → #1430），需要把硬编码版本改为可配置 override，反映了与上游版本节奏赛跑的开销。

**高频需求**：

- **更细粒度的 swarm 控制**：per-worker 模型、产物级完成判据、上线 A/B/C 方案，开发者希望 swarm 不只是 fan-out，而是可观察、可验证、可分级的协同原语。
- **Memory 可信链路**：从注入式 memory 升级到带引用 + 读时验证的可审计 memory。
- **本地/自托管模型"真可用"**：希望本地 server 能被正确嗅探与路由，避免乐观 OpenAI 端点对 text-only 模型造成整段会话"中毒"（#1302 → #1347）。

---

*日报基于 GitHub Issues / Pull Requests 公开数据整理。如需订阅日报或定制字段，请在仓库中提 Issue。*

</details>

<details>
<summary><strong>pi</strong> — <a href="https://github.com/earendil-works/pi">earendil-works/pi</a></summary>

<think>Let me analyze the GitHub data for the pi project (earendil-works/pi) and generate a Chinese daily report for 2026-09-29.

Let me first understand what's in the data:

**Releases**: None in the past 24 hours

**Issues (50 total, top 30 shown)**:
- #10031: Pi stuck in "Working..." when ESC pressed during thinking - 17 comments, OPEN, bug
- #3159: edit tool timeout - 9 comments, CLOSED
- #9508: pi-ai sends OpenAI-specific fields to compatible providers - 8 comments, OPEN, bug
- #10033: Compaction prompt exceeds context window - 7 comments, CLOSED, bug
- #9974: pi mishandles Responses API tool calls from llama.cpp - 6 comments, CLOSED, bug
- #9905: Anthropic thinking.display always sent as "summarized" - 6 comments, CLOSED
- #9409: Sessions wedge at context ceiling on reasoning models - 4 comments, OPEN
- #10074: Anthropic tool calls: corrupted non-ASCII edit arguments - 4 comments, OPEN, bug
- #9828: Fullscreen exit corrupts scrollback - 4 comments, CLOSED
- #6393: Disable /share - 3 comments, CLOSED
- #10077: llama.cpp contextWindow getting reset - 3 comments, OPEN, bug
- #10152: Footer details need explanation - 2 comments, CLOSED
- #6628: StdinBuffer SGR mouse sequences - 2 comments, CLOSED
- #10079: Kitty keyboard flags stuck - 2 comments, CLOSED
- #7294: Kitty keyboard protocol leak over SSH - 2 comments, CLOSED
- #9999: macOS clipboard image paste - 2 comments, CLOSED
- #10137: Failed threshold compaction continues - 2 comments, CLOSED, bug
- #5446: WebSocket for OpenAI API - 2 comments, CLOSED
- #10072: built-in-tool-renderer example removes tools from system prompt - 2 comments, OPEN
- #10130: Show timeout in minutes/hours - 2 comments, CLOSED
- #10129: Type-checking depends on model catalog fetch - 2 comments, CLOSED
- #10124: Typed TUI dialog responses - 2 comments, CLOSED
- #10112: Allow ModelRuntime.create() explicit authContext - 2 comments, CLOSED
- #10149: turn_end boundary error reporting - 1 comment, CLOSED
- #10148: Turn with unanswered tool calls can wedge - 1 comment, CLOSED
- #10147: Fold /scoped-models into /model - 1 comment, CLOSED
- #10145: Package catalog missing - 1 comment, CLOSED
- #10144: Queued prompts sent one by one - 1 comment, CLOSED
- #10143: TUI syntax highlight lost for multiline tokens - 1 comment, CLOSED
- #10141: Frozen partial frames in scrollback - 1 comment, CLOSED

**Pull Requests (13 total)**:
- #10150: Adds Footer documentation section - CLOSED
- #10146: Fix paste text during editor restoration - OPEN
- #10040: Codemode and MCP - OPEN (by mitsuhiko)
- #10122: Managed llama.cpp server mode - OPEN (by mitsuhiko)
- #10035: Virtual models - CLOSED (by mitsuhiko)
- #9714: Azure Foundry Chat Completions - OPEN
- #10136: Paste Finder file paths instead of icons - CLOSED
- #10142: Send reasoning effort to OpenAI models on Bedrock - OPEN
- #10135: Normalise compaction usage to prevent footer crash - CLOSED
- #10134: Preserve tool prompt fields in built-in-tool-renderer - CLOSED
- #9993: Anthropic Claude support for Vertex AI - CLOSED
- #10119: Discount jev - CLOSED (by mitsuhiko, "because why not")
- #10123: Typed TUI prompts to remote responders - CLOSED

Key themes I notice:
1. **Compaction/context management issues** - Multiple issues about context window, compaction, thinking blocks (#10033, #10137, #9409, #10135)
2. **Provider compatibility** - OpenAI-compatible providers, Bedrock, Azure Foundry, Vertex AI Anthropic (#9508, #9714, #9993, #10142)
3. **Anthropic-specific issues** - thinking.display, non-ASCII edit arguments (#9905, #10074)
4. **llama.cpp support** - contextWindow reset, codemode, managed server (#10077, #10040, #10122)
5. **TUI/terminal issues** - Kitty keyboard, scrollback, mouse sequences, fullscreen exit (#7294, #10079, #9828, #6628, #10143, #10141)
6. **MCP/Codemode** - New architectural features (#10040, #10122)
7. **Virtual models** - Extension routing policies (#10035)
8. **Documentation** - Footer section (#10152, #10150)

Let me select the top 10 issues and top 10 PRs:

**Top 10 Issues** (by importance/comment count):
1. #10031 - Pi stuck in "Working..." on ESC (17 comments) - critical UX bug
2. #9508 - pi-ai sends OpenAI-specific fields to compatible providers (8 comments) - provider compatibility
3. #10033 - Compaction prompt exceeds context window (7 comments) - context management
4. #9409 - Sessions wedge at context ceiling (4 comments, updated 09-29) - reasoning model issue
5. #10074 - Anthropic tool calls corrupted non-ASCII (4 comments) - data corruption risk
6. #10077 - llama.cpp contextWindow reset (3 comments) - local model support
7. #10072 - built-in-tool-renderer removes tools (2 comments) - extension bug
8. #3159 - edit tool timeout (9 comments but old, closed) - 
9. #9974 - llama.cpp Responses API tool calls (6 comments) - local model
10. #9905 - Anthropic thinking.display always "summarized" (6 comments)

Let me pick the most recent + impactful:
1. #10031 - ESC stuck (17 comments, open) - HIGH
2. #9508 - OpenAI compatibility (8 comments, open) - HIGH
3. #10033 - Compaction context overflow (7 comments, closed) - HIGH
4. #9409 - Reasoning model context ceiling (4 comments, open, recent update) - HIGH
5. #10074 - Korean text edit corruption (4 comments, open) - HIGH (data loss risk)
6. #10077 - llama.cpp contextWindow reset (3 comments, open) - MEDIUM
7. #10072 - tool-renderer removes tools (2 comments, open, in progress) - MEDIUM
8. #9974 - llama.cpp Responses API (6 comments, closed) - MEDIUM
9. #9905 - Anthropic thinking.display (6 comments, closed) - MEDIUM
10. #10137 - Failed threshold compaction (2 comments, closed) - MEDIUM

**Top 10 PRs**:
1. #10040 - Codemode and MCP (mitsuhiko) - MAJOR feature
2. #10122 - Managed llama.cpp server mode (mitsuhiko) - MAJOR feature
3. #10035 - Virtual models (mitsuhiko) - EXPERIMENTAL feature
4. #9714 - Azure Foundry Chat Completions - Provider support
5. #10142 - OpenAI reasoning effort on Bedrock - Provider support
6. #9993 - Anthropic Claude on Vertex AI - Provider support
7. #10146 - Paste text preservation fix - Bug fix
8. #10136 - Finder file paths fix - Bug fix
9. #10123 - Typed TUI prompts to remote - Extension API
10. #10150 - Footer documentation - Docs

Let me write the report now.

Trends:
1. **Context/Compaction management** - Major theme with multiple issues
2. **Multi-provider support** - Azure, Bedrock, Vertex AI, llama.cpp, OpenAI-compat
3. **Anthropic specific issues** - thinking.display, non-ASCII
4. **Local model support (llama.cpp)** - contextWindow, codemode, managed server
5. **TUI robustness** - Kitty, scrollback, multiline, paste
6. **Extension ecosystem** - virtual models, tool renderers, TUI dialogs
7. **MCP/Codemode** - new architecture direction
8. **Documentation gaps** - footer needs docs

Developer pain points:
- Stuck in "Working..." with ESC interrupt
- Compaction failures leave sessions wedged
- Provider-specific quirks (Anthropic, OpenAI-compat)
- TUI terminal quirks (Kitty, scrollback)
- Non-ASCII text corruption in tool calls
- contextWindow not persisting

Now let me write a clean Chinese report.</think>

# Pi 社区动态日报 · 2026-09-29

> 数据来源：[github.com/earendil-works/pi](https://github.com/earendil-works/pi) · 统计窗口：过去 24 小时

---

## 📌 今日速览

今日社区关注度最高的两个议题仍集中在**会话状态恢复**与**上下文压缩（compaction）稳健性**上：长时间运行推理模型时，session 在 context ceiling 处陷入"楔死"、压缩失败后未回滚，导致用户只能通过 `pi -c` 强退恢复。与此同时，**llama.cpp 本地推理的扩展能力**持续推进——mitsuhiko 本人连发两个 PR，将 codemode / MCP 与托管 llama-server 模式带入主线，标志着 Pi 在"本地 + 扩展化"方向加速布局。

---

## 🚀 版本发布

过去 24 小时无新 Release。社区当前运行的稳定版本为 **0.87.1**（见 #10137、#10146 复现基线）。

---

## 🔥 社区热点 Issues

| # | 标题 | 状态 | 热度 | 为什么重要 |
|---|---|---|---|---|
| [#10031](https://github.com/earendil-works/pi/issues/10031) | **Pi 在 ESC 中断 thinking 后卡在 "Working..."** | OPEN | 💬17 / 👍2 | 自 v0.84.0 起的高频痛点，必须 `Ctrl+C` 后 `pi -c` 恢复；影响几乎所有用户体验核心交互流。 |
| [#9508](https://github.com/earendil-works/pi/issues/9508) | **pi-ai 向 OpenAI 兼容 provider 发送不兼容字段/角色/鉴权** | OPEN | 💬8 | 影响所有自托管 OpenAI-兼容服务（vLLM、OneAPI 等），错误码 400/422 直接打断工作流。 |
| [#10033](https://github.com/earendil-works/pi/issues/10033) | **压缩提示塞入完整 thinking 文本超出 context window** | CLOSED | 💬7 / 👍1 | 暴露了 `serializeConversation()` 的根本性设计缺陷，长 session + reasoning 模型场景下自动压缩必然失败。 |
| [#9409](https://github.com/earendil-works/pi/issues/9409) | **推理模型在 context ceiling 处 session 永久楔死** | OPEN | 💬4 | 每请求 `stopReason:"length"` + `output:16`；与 #10033 / #10137 构成"压缩链路脆弱"的同源问题簇。 |
| [#10074](https://github.com/earendil-works/pi/issues/10074) | **Anthropic `edit` 工具非 ASCII 参数被静默损坏** | OPEN | 💬4 | 韩文/中文文件编辑场景下 `\uXXXX` 序列被错误转义为控制字符，存在文件损坏风险（非仅显示异常）。 |
| [#9974](https://github.com/earendil-works/pi/issues/9974) | **llama.cpp Responses API 工具调用被重复执行 + 损坏** | CLOSED | 💬6 | 本地推理 + 工具调用的关键路径，展示了 SSE 流解析与 tool_call id 关联的鲁棒性问题。 |
| [#9905](https://github.com/earendil-works/pi/issues/9905) | **Anthropic `thinking.display` 永远发送 `"summarized"`** | CLOSED | 💬6 | CLI 没有配置入口，限制了 thinking 控制粒度；属于 provider 适配层的接口完整性问题。 |
| [#10077](https://github.com/earendil-works/pi/issues/10077) | **llama.cpp `contextWindow` 被 models-store.json 误重置为 128000** | OPEN | 💬3 | presets.ini 配置的 ctx-size 不被持久化，与 #10122 PR 的托管模式形成上下游耦合。 |
| [#10137](https://github.com/earendil-works/pi/issues/10137) | **阈值压缩失败后继续使用未压缩的 context** | CLOSED | 💬2 | 错误处理反模式：失败提示已经报出，但下一轮请求仍携带全量 context，容易触发 token cap。 |
| [#10072](https://github.com/earendil-works/pi/issues/10072) | **`built-in-tool-renderer` 示例意外剥离工具的 system prompt** | OPEN / inprogress | 💬2 | 官方示例存在副作用，对扩展作者具备误导性，影响下游扩展生态的契约稳定性。 |

---

## 🛠 重要 PR 进展

### 架构级新增

- **[#10040 — feat(coding-agent): Codemode and MCP](https://github.com/earendil-works/pi/pull/10040)** ⭐ mitsuhiko
  引入 `packages/codemode` 包：在 QuickJS WASM worker 中执行模型编写的 JS，通过异步函数直接调用 Pi 工具，同时支持 per-session store、模型目录读取与分类器。OPEN，是 Pi "脚本化扩展"路线的奠基石。

- **[#10122 — feat(coding-agent): managed llama.cpp server mode](https://github.com/earendil-works/pi/pull/10122)** ⭐ mitsuhiko
  `/login llama.cpp` 现在可由 Pi 自启 llama-server（detached supervisor + 随机端口/密钥 + 本地 socket 统计连接数），按需启停。OPEN，直接呼应 #10077 暴露的 ctx 配置痛点。

- **[#10035 — feat(coding-agent): Virtual models](https://github.com/earendil-works/pi/pull/10035)** ⭐ mitsuhiko
  通过 `pi.registerVirtualModel()` 注册"路由策略型"模型条目，由扩展按请求选择物理模型与 thinking level。CLOSED（实验性合并），为多模型编排打开扩展口。

### Provider 适配

- **[#9714 — feat(ai): Azure Foundry Chat Completions](https://github.com/earendil-works/pi/pull/9714)**
  补齐 Azure 仅支持 Responses API 的缺口，让 DeepSeek V4 Pro 等 Chat Completions 部署可用。OPEN。

- **[#10142 — fix(ai): send reasoning effort to OpenAI models on Bedrock Converse](https://github.com/earendil-works/pi/pull/10142)**
  修复 Bedrock 上 OpenAI 模型（如 gpt-oss）默认落到 `medium` effort 的 bug，新增 `low/medium/high` 钳制。OPEN。

- **[#9993 — feat(ai,coding-agent): Anthropic Claude on Google Vertex AI](https://github.com/earendil-works/pi/pull/9993)**
  Vertex AI Model Garden 中通过 ADC/API key 使用 Claude 全系模型，修复了 catalog generator 排除非 Gemini 的问题。CLOSED。

### Bug 修复

- **[#10146 — fix(coding-agent): preserve pasted text during editor restoration](https://github.com/earendil-works/pi/pull/10146)**
  还原队列消息到大粘贴草稿时，`[paste #x +y lines]` 字面量被提交的回归修复。OPEN。

- **[#10136 — fix(coding-agent,tui): paste Finder file paths instead of icons](https://github.com/earendil-works/pi/pull/10136)**
  解决 macOS 下 Ctrl+V 误粘贴 Finder 图标（#9999）的体验问题。CLOSED。

- **[#10135 — fix(coding-agent): normalise compaction usage to prevent footer crash on resume](https://github.com/earendil-works/pi/pull/10135)**
  修复压缩写入时 `summaryUsage` 未归一化导致的恢复后 footer 崩溃。CLOSED，呼应 compaction 链路稳定性。

### 扩展 API 与文档

- **[#10123 — feat(coding-agent): typed TUI prompts to remote responders](https://github.com/earendil-works/pi/pull/10123)**
  把 `select/confirm/input/editor` 对话框先 offer 给扩展 responder，单次结算、5 分钟超时降级。CLOSED，配合 #10124 完善远程扩展交互。

- **[#10150 — Adds new section Footer to explain its various parts](https://github.com/earendil-works/pi/pull/10150)**
  响应 #10152 的文档诉求，补充 usage.md 中的 Footer 章节（含 cost 计算注释）。CLOSED。

---

## 📈 功能需求趋势

通过对 50 条过去 24 小时 Issue 的归类，社区需求呈现以下五大方向：

1. **🔁 Compaction & Context 管理（热度最高）**
   - #10031、#9409、#10033、#10137、#10135 共同指向：自动压缩、阈值压缩、恢复后的 usage 归一化需要在同一框架内重构。**趋势信号**：社区呼吁"压缩失败回滚到压缩前状态"成为硬约束。

2. **🤖 多 Provider 适配深化**
   - OpenAI-compatible 字段裁剪（#9508）、Bedrock OpenAI 模型 reasoning 透传（#10142）、Azure Foundry Chat Completions（#9714）、Vertex AI Claude（#9993）。**趋势信号**：用户正在 Pi 上做"跨云模型编排"，对 provider 适配的对称性要求显著提升。

3. **🦙 本地推理（llama.cpp）体验升级**
   - #10077（ctx 配置持久化）、#9974（工具调用流）、#10040/#10122（codemode + 托管 server）。**趋势信号**：本地推理不再仅是"能跑"，而是"能稳定用工具、能被扩展"。

4. **🌏 国际化与编码鲁棒性**
   - #10074

</details>

---
*本日报由 [Big Model Radar](https://github.com/96loveslife/big_model_radar) 自动生成。*
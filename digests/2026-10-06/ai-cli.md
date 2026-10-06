# AI CLI 工具社区动态日报 2026-10-06

> 生成时间: 2026-10-06 05:47 UTC | 覆盖工具: 8 个

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

<think>The user has given me a comprehensive set of daily reports for various AI CLI tools, and is asking me to create a horizontal comparative analysis report. Let me analyze the data carefully and create a structured, professional report in Chinese.

Let me first organize the data:

**Tools covered:**
1. Claude Code (github.com/anthropics/claude-code)
2. OpenAI Codex (github.com/openai/codex)
3. Gemini CLI (github.com/google-gemini/gemini-cli)
4. GitHub Copilot CLI (github.com/github/copilot-cli)
5. Kimi Code CLI (github.com/MoonshotAI/kimi-cli) - No activity
6. OpenCode (github.com/anomalyco/opencode)
7. jcode (github.com/1jehuang/jcode)
8. pi (github.com/earendil-works/pi)

**Activity Summary:**

| Tool | Issues | PRs | Releases | Hot Topic |
|------|--------|-----|----------|-----------|
| Claude Code | ~20+ | Many (1 today) | 2 (v2.1.290, v2.1.291) | LSP plugin, Windows MSIX, MCP protocol |
| OpenAI Codex | 50 (top 30 shown) | 46 | 4 (rust-v0.160.1 + 3 alpha) | Windows desktop, MCP lifecycle, Dot remote |
| Gemini CLI | 50 | Many | 1 nightly | Subagent stability, AST tools |
| GitHub Copilot CLI | 31 | 1 | 4 (v1.0.93 series + v1.0.92) | MCP ecosystem, BYOK |
| Kimi Code CLI | 0 | 0 | 0 | No activity |
| OpenCode | 50 | 50 | 0 | V2 migration, providers |
| jcode | 12 | 10 | 1 (v0.91.0) | Swarm, Google Calendar |
| pi | 50 | 17 | 2 (v1.0.3, v1.0.4) | Reliability, multi-provider |

Let me think about the key themes and trends:

**Common Themes across tools:**
1. **MCP (Model Context Protocol) ecosystem maturity** - All tools dealing with MCP OAuth, lifecycle, protocol versions
   - Claude Code: MCP 2026-07-28 protocol compatibility (#88128)
   - OpenAI Codex: MCP server leaks, OAuth scopes
   - GitHub Copilot CLI: MCP OAuth, transport detection
   - OpenCode: MCP OAuth, name length limits

2. **Windows platform stability** - Major pain point across tools
   - Claude Code: MSIX packaging issues (#87633, #99192, #92771)
   - OpenAI Codex: Modern Standby, organization settings, Computer Use
   - pi: shellPath, drive letter casing

3. **TUI/Editor experience improvements** - 
   - OpenAI Codex: TUI undo/redo (#2379, 👍33), semantic colors (#21130, 👍29)
   - Claude Code: shift+enter detection
   - pi: stdin EIO handling

4. **Provider integration & reliability** - 
   - OpenCode: OpenAI intermittent failures, Anthropic API key dropping, Grok unreachable
   - pi: openai-codex reliability (#4945, 81 comments), OpenRouter cost calc
   - GitHub Copilot CLI: BYOK flexibility

5. **Subagent/Multi-agent orchestration** - 
   - Gemini CLI: Subagent recovery, hang issues
   - Claude Code: Mod/plugin system
   - jcode: Swarm system

6. **Security/sandbox** - 
   - Claude Code: GMail MCP URL injection, password hard block
   - OpenAI Codex: Bubblewrap sandbox
   - Gemini CLI: OS sandboxing proposal

7. **V2/Major version migration** - 
   - OpenCode: V2 stability issues
   - Claude Code: Multiple regression fixes

**Differentiation:**
- Claude Code: Plugin/mod system, enterprise hooks, IDE integration
- OpenAI Codex: Multi-platform desktop (Mac/Windows), Dot remote agent, alpha channel
- Gemini CLI: Google ecosystem integration, subagent architecture
- GitHub Copilot CLI: BYOK depth, enterprise MCP, workflows
- OpenCode: V2 with plugin system, portable shell scanner
- jcode: Google Workspace integration (Calendar), Swarm multi-agent
- pi: Multi-provider flexibility, durable workflows, JSON Schema config

**Maturity:**
- Most mature: Claude Code (regression fixes), GitHub Copilot CLI (v1.0.93 series)
- Active development: OpenAI Codex (46 PRs), OpenCode (50 PRs)
- Rapid iteration: Gemini CLI, jcode, pi

Let me draft the report now in Chinese.

I'll structure it according to the requested sections:
1. 生态全景
2. 各工具活跃度对比 (table)
3. 共同关注的功能方向
4. 差异化定位分析
5. 社区热度与成熟度
6. 值得关注的趋势信号

Let me be concise and professional with data support.</think>

# 2026-10-06 AI CLI 工具横向对比分析报告

---

## 1. 生态全景

当前 AI CLI 工具生态已进入**「能力补齐收尾、生态深化启动」**的阶段——主流工具普遍完成"基础 Agent + 工具调用 + Provider 多路"的 1.0 形态，正集中精力解决**MCP 协议工程化、Windows 桌面稳定性、Subagent 编排、Provider 可靠性**四类共性痛点。从近 24 小时数据看，头部工具单日合并 PR 普遍超过 20 份（Codex 46、OpenCode 50、pi 17），Release 节奏显著加快；同时 V2/大版本迁移（OpenCode V2）、Alpha 通道（Codex rust-v0.162）、工作流灰度（partial_answer、ultrafast_mode）密集出现，提示行业正从"功能竞赛"转向"协议成熟度 + 工程质量"。

---

## 2. 各工具活跃度对比

| 工具 | Issues 更新 | PR 更新 | Release | 综合热度 | 关键变化 |
|---|---|---|---|---|---|
| **Claude Code** | ~20+ | 1 | 2 (v2.1.290/291) | 🔥🔥🔥 | 修回归 + hook 扩展，LSP 插件问题 73👍登顶 |
| **OpenAI Codex** | 50 | **46** | 4 (1 stable + 3 alpha) | 🔥🔥🔥🔥 | 高频小步快跑，partial_answer 协议重构贯穿 |
| **Gemini CLI** | 50 | 多个 | 1 (nightly) | 🔥🔥🔥 | Subagent 稳定性 + 输入解析修复集中 |
| **GitHub Copilot CLI** | 31 | 1 | 4 (v1.0.93 系列) | 🔥🔥🔥 | MCP 鉴权 / BYOK 成为主线 |
| **OpenCode** | 50 | **50** | 0 | 🔥🔥🔥🔥 | V2 迁移回归、Provider 接入成主战场 |
| **pi** | 50 | 17 | 2 (v1.0.3/1.0.4) | 🔥🔥🔥 | openai-codex 卡死 81 评成最大痛点 |
| **jcode** | 12 | 10 | 1 (v0.91.0) | 🔥🔥 | Google 日历集成 + Swarm 修复密集合入 |
| **Kimi Code CLI** | 0 | 0 | 0 | ❄️ | 24h 无任何活动 |

> **活跃度排序**：OpenAI Codex ≈ OpenCode > pi > Gemini CLI ≈ Copilot CLI ≈ Claude Code > jcode > Kimi

---

## 3. 共同关注的功能方向

### 3.1 🔌 MCP 协议工程化（5/7 工具集中讨论）
- **Claude Code**：MCP 2026-07-28 协议严格性，`tools/list` 可选字段缺失导致 server 整体失效（#88128）
- **OpenAI Codex**：app-server 线程级 fork MCP 进程不清理，RSS 可达 9GB+（#30408，12👍）；OAuth scopes 缺失（#20503）
- **GitHub Copilot CLI**：OAuth 协议版本回退、Token 交换、Entra api:// 作用域校验（#4991/#5039/#5058/#5061）
- **OpenCode**：OAuth 浏览器拉起失败（#26195，11👍）；server 名称超 64 字符被静默丢弃（#53400）
- **Gemini CLI**：间接通过 PR 修复会话恢复中的 tool response 重复（#29490）

> **共识诉求**：OAuth 流程鲁棒性、协议版本向后兼容、进程生命周期管理、可选字段宽容解析。

### 3.2 🪟 Windows 桌面稳定性（4/7 工具）
- **Claude Code**：MSIX 虚拟化路径（#87633/#99192/#99858）、TUI Shift+Enter 失灵（#92771）
- **OpenAI Codex**：Modern Standby 唤醒（#44503）、组织设置加载失败（#48324）、PowerShell 安装校验（#51257）、Computer Use 识别 URL（#2281）
- **pi**：Windows shellPath 解析（#9361，已修复 #10538）
- **GitHub Copilot CLI**：macOS 设备 ID 失效（#4998，9👍）—— Apple Silicon 也未能幸免

> **共识诉求**：MSIX/sandbox 路径虚拟化、Modern Standby 兼容、PowerShell 与 bash 在 Windows 的差异化处理。

### 3.3 🤖 Subagent / 多 Agent 编排（4/7 工具）
- **Gemini CLI**：Generalist agent 无限挂起（#21409，8👍）、MAX_TURNS 状态语义错误（#22323）、skills/sub-agents 不被自动调度（#21968）
- **Claude Code**：Mod/Plugin 系统配置未生效（#15148，73👍）、subagent 覆盖不全（#87716）
- **jcode**：Swarm worker 失控、外部终端乱开（#1725/#1728）、`/restart` 数据丢失（#1723）—— 单日 4 个 PR 同日修复
- **OpenCode**：V2 缺失 V1 的 todowrite/todoread（#42421/#52931）

> **共识诉求**：可中断的协调链、状态恢复正确性、模型对 subagent 的自动发现与调度。

### 3.4 💸 Provider 可靠性与计费准确性（4/7 工具）
- **OpenCode**：OpenAI 上游连接间歇失败（#52269）、Anthropic 自定义端点丢 API Key（#21737）、Grok 不可达（#52971）
- **pi**：openai-codex 连接卡死 81 评（#4945）、OpenRouter 成本低估 2-3 倍（#9980）、LiteLLM 推理 token 重复计费
- **OpenAI Codex**：Fast/Ultra Fast 独立策略（#51253）
- **GitHub Copilot CLI**：BYOK 多模型（#3282，31👍）、自定义 Header（#3399）

> **共识诉求**：失败重试有界、计费口径与 provider 实际账单对齐、企业网络代理认证（#52734）。

### 3.5 🖥️ TUI 体验升级（3/7 工具）
- **OpenAI Codex**：undo/redo（#2379，👍33）、语义颜色（#21130，👍29）—— 历史"长寿"需求持续走高
- **pi**：stdin EIO 误判崩溃（#10272，已修）、ANSI 状态跨 chunk 保持（#10503）
- **Claude Code**：Shift+Enter 与 Enter 区分（#92771）

> **共识诉求**：编辑器基础能力（撤销/重做、modifier 输入）+ 终端关闭时的优雅退出路径。

---

## 4. 差异化定位分析

| 工具 | 核心定位 | 目标用户 | 技术路线特征 |
|---|---|---|---|
| **Claude Code** | 企业级 Agent 工作流 | 重视权限审计、可观测、合规的团队 | 完善的 mod/plugin hook、`serverToolUses`/`agentId` 细粒度事件、security-guidance 子 agent |
| **OpenAI Codex** | 全平台桌面 + 远程 Dot 代理 | 需要 Mac/Win/Linux 三端覆盖的 OpenAI 用户 | Rust 核心 + 双 stable/alpha 通道、`partial_answer` 协议、JS code mode ranked tool discovery |
| **Gemini CLI** | Google 生态深度集成 | Gemini/GCP 栈用户、Subagent 重度用户 | AST 感知工具链调研、telemetry 优先（OTLP 自定义 header）、subagent 本地化路线图 |
| **GitHub Copilot CLI** | 开发者工作流中枢 + 企业 MCP 枢纽 | GitHub Enterprise 用户、需要 BYOK 的组织 | Mission Control + Web 联动、Entra MCP 静默续期、`copilot config` 子命令 |
| **OpenCode** | 高度插件化的多 Provider 沙盒 | 插件作者、跨 Provider 实验者 | V2 插件 Effect 注入、可移植 Shell 扫描器、Office 文件只读预览 |
| **jcode** | Google Workspace 个人 Agent 工作台 | 个人/小团队、需要日历/Gmail 集成的用户 | Swarm 多 Agent、Google OAuth 引导、速度分层 |
| **pi** | Provider 中立 + Durable 工作流 | 多模型用户、长任务编排、配置工程化 | JSON Schema 发布、`--tools` 通配符、`pi-durable` 引擎 cycle 检测 |

> **关键差异**：Claude Code 走"审计 + 插件"，Codex 走"全平台 + 远程"，Gemini 走"模型+生态"，Copilot 走"GitHub 联动+BYOK"，OpenCode 走"插件化沙盒"，jcode 走"个人 Agent 工作台"，pi 走"Provider 中立+工作流可观测"。

---

## 5. 社区热度与成熟度

### 🏛️ 成熟梯队（修回归、做工程化）
- **Claude Code**：连续两个版本是修回归（v2.1.291 修 v2.1.290 引入的云端权限应答丢失），代表产品已进入稳定期。
- **GitHub Copilot CLI**：v1.0.93 系列聚焦 LSP 保活、紧凑 shell 命令展开等"边角打磨"，但 BYOK/MCP 仍是核心议程。

### 🚀 高强度迭代梯队（小步快跑、协议演进）
- **OpenAI Codex**：单日 46 PR，alpha 密集推进 0.162，`partial_answer`/`ultrafast_mode` 等多 feature flag 灰度——典型的"前沿协议实验场"。
- **OpenCode**：单日 50 PR，V2 迁移期所有"里窗口外"问题集中爆发；plugin Effect 修复、Office 预览等都在加速能力边界。
- **pi**：v1.0.3/v1.0.4 双版本连发，Provider 扩展（Azure Foundry/NVIDIA NIM）+ 配置工程化（JSON Schema）双线并行。

### 🛠️ 重点投入梯队（Subagent/工具链重构）
- **Gemini CLI**：Subagent 体系成熟化是头号议题，多个 P1 Bug 与 P2 EPIC 并行推进。
- **jcode**：Swarm 单日 4 PR 同日修复，开发节奏快但单点深度强。

### ❄️ 静默期
- **Kimi Code CLI**：24h 无任何 GitHub 公开活动，需关注其是否进入战略收缩期或数据未公开。

---

## 6. 值得关注的趋势信号

### 📡 信号一：MCP 从「能不能连」走向「能不能稳」
7 个里 5 个工具在谈 MCP，焦点从"协议连通性"转向**生命周期管理、OAuth 鲁棒性、可选字段宽容性**。这意味着 MCP 已成事实标准，工程化成熟度成为下一个分水岭。**对开发者**：在生产环境部署 MCP server 时，应假设"协议可选字段严格性持续增强"和"Token/进程资源管理是必考点"。

### 📡 信号二：Provider 抽象层正在"重做"
pi 发布 JSON Schema、OpenCode 拆 plugin Effect、Copilot Codex 推 BYOK 多模型、Codex 推 Fast/Ultra Fast 独立策略——**Provider 中立性成为新一轮竞争点**。OpenAI/Anthropic/Google/Custom Endpoint 之间的切换成本正在被压低。**对开发者**：现在选择 CLI 工具时，"是否绑定单一 Provider"应成为重要评估维度。

### 📡 信号三：Subagent 编排进入"治理期"
所有有 Subagent 能力的工具都在解决同一组问题：worker 中断传播、状态语义正确性、subagent 自动发现与调度。**对开发者**：复杂 Agent 系统的可中断性、可恢复性、可观测性，短期内比能力扩展更值得关注。

### 📡 信号四：Windows 是行业共同的"体验洼地"
4/7 工具的 Windows 相关 Issue 进入 Top 10。Modern Standby、MSIX 路径虚拟化、TUI modifier 输入……**企业部署 AI CLI 的最大单一风险点仍是 Windows**。对 IT 决策者：Mac-first 的体验假设正在被打破，Windows 测试矩阵需提前 1-2 个版本投入。

### 📡 信号五：V2/Alpha 通道正在成为"快速反馈"基础设施
OpenCode V2 沉默失败（#52184）、Codex alpha 密集 0.162、Claude Code 双回归版本——**大版本/alpha 通道的存在让用户有了"先尝后买"的窗口，但要求开发者主动跟进 changelog**。**对开发者**：建议订阅 alpha/nightly 频道的 release diff，至少能在生产事故前 1-2 周感知到协议变化。

### 📡 信号六：TUI 基础体验正在成为"口碑护城河"
OpenAI Codex 的 undo/redo（👍33）、语义颜色（👍29）点赞数超越大多数功能性 Bug。**TUI 体验的"是否像 IDE"正在影响 CLI 工具的市场口碑**——这一信号在 macOS 生态尤为强烈。

---

> **一句话总结**：AI CLI 工具已进入"**协议标准化 + Provider 中立化 + 多 Agent 治理化 + 跨平台均衡化**"的下一程；当前最值得跟踪的，是 **MCP 生态成熟度** 与 **V2/Alpha 通道的协议演进**——这两者决定了未来 6 个月开发者选型的关键变量。

---

*报告基于 2026-10-06 当日各工具 GitHub 公开数据横向整合。*

---

## 各工具详细报告

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills 社区热点

> 数据来源: [anthropics/skills](https://github.com/anthropics/skills)

<think>The user wants me to analyze the Claude Code Skills community data and generate a report in Chinese. Let me carefully review the data provided.

Let me note an important observation first: the data shows "评论: undefined | 👍: 0" for ALL Pull Requests. This is a significant data quality issue. The user mentioned "按评论数排序" (sorted by comments) but all PRs show undefined comments and 0 likes. This means I cannot actually rank PRs by comment count - they're shown but the metrics are missing.

For Issues, I do have real comment numbers:
- #492: 43 comments, 2 likes - Security trust boundary
- #228: 16 comments, 8 likes - Org-wide skill sharing
- #556: 12 comments, 7 likes - run_eval.py trigger rate bug
- #62: 10 comments, 2 likes - Skills disappeared
- #1329: 9 comments, 0 likes - compact-memory proposal
- #202: 8 comments, 1 like - skill-creator best practices (CLOSED)
- #412: 6 comments, 0 likes - agent-governance (CLOSED)
- #189: 6 comments, 9 likes - duplicate skills in plugins
- #1487: 4 comments, 0 likes - claude-api context window
- #1394: 4 comments, 2 likes - eval-viewer XSS
- #1390: 4 comments, 0 likes - mcp-builder evaluation bug
- #1385: 4 comments, 1 like - Reasoning Quality Gate Pipeline
- #1383: 4 comments, 0 likes - skill-creator silent failures
- #1175: 4 comments, 0 likes - SharePoint security (CLOSED)
- #29: 4 comments, 0 likes - Bedrock usage

Now let me analyze:

1. **热门 Skills 排行** - Since PR comment data is unavailable, I should be transparent about this. I'll work with what's available - PRs that have meaningful content and active recent updates. I'll note the data limitation.

Actually, looking again, the user is asking me to rank "热门 Pull Requests（按评论数排序）" but the data shows undefined. I should be honest about this and use proxy signals like recency, content significance, and inferred community interest based on the issue discussions.

Let me identify the most significant PRs based on content:

Top PRs by significance/content:
1. #1298 - skill-creator fixes (trigger evals, Windows) - relates to multiple high-comment issues
2. #1742 - mcp-builder fixes - addresses mcp>=2 compatibility
3. #1771 - proofcore-contract-auditor - Web3/Solidity smart contract auditing
4. #1734 - orphaned docx comments detection
5. #1703 - md2video-audio - Markdown to video
6. #1245 - notion-spec-to-implementation + quantitative-resume-auditor
7. #1792 - docx LibreOffice timeout fix
8. #1730 - dead URLs fix in claude-api/academy-guide
9. #525 - pyxel retro game development
10. #514 - document-typography
11. #1681 - skill-creator package_skill.py fix
12. #1615 - scnet-hpc
13. #822 - AWT E2E testing
14. #538 - pdf case sensitivity fix
15. #486 - ODT skill
16. #210 - frontend-design improvement
17. #83 - skill-quality-analyzer and skill-security-analyzer
18. #1776 - blast-radius
19. #723 - testing-patterns
20. #541 - docx tracked changes ID collision

2. **社区需求趋势** - Based on issues:
- Security/Trust: #492 (community skills impersonation), #1175 (SharePoint security), #1394 (XSS), #1383 (silent failures)
- Workflow/Sharing: #228 (org-wide sharing), #62 (skills disappearing)
- Bug/Quality: #556 (trigger eval), #1487 (context window), #1390 (mcp-builder), #1383
- New capabilities: #1329 (compact-memory), #412 (agent-governance), #1385 (Reasoning Quality Gate)
- Compatibility: #189 (duplicate plugins), #29 (Bedrock)

3. **高潜力待合并 Skills** - PRs that are significant and open:
- #1298, #1771, #1703, #525, #514, #1615, #822, #486, #1776, #723

4. **生态洞察** - One sentence summary

Let me draft the report now. I should be honest about the data limitation in section 1 since PR comments are undefined.

Actually, I think the best approach is to be transparent that PR comment/like data is unavailable in this dataset, and use the issues data (which has real numbers) more prominently for trending analysis. For PRs, I'll rank by significance/recency/related issue activity.

Let me write this out in Chinese, professional and concise.</think>

# Claude Code Skills 社区热点报告

> **数据说明**：本报告中 PR 的评论数与点赞数在数据源中均显示为 `undefined / 0`，无法严格按评论数排序。报告以 **PR 内容影响力 + 与高活跃 Issue 的关联度 + 最近活跃度** 作为替代信号综合排序。Issue 数据完整（评论/点赞已确认）。

---

## 1. 热门 Skills 排行

| # | PR / Skill | 核心功能 | 社区关注热点 | 状态 |
|---|-----------|---------|------------|------|
| 1 | **[#1298](https://github.com/anthropics/skills/pull/1298)** `skill-creator` 修复 | 隔离 trigger evals，修复 Windows select() 失败、运行时误判 | 直接回应 [#1383](https://github.com/anthropics/skills/issues/1383) 等多条高评论 Issue，是 skill-creator 系列 bug 的总修复入口 | OPEN |
| 2 | **[#1742](https://github.com/anthropics/skills/pull/1742)** `mcp-builder` 修复 | 适配 `mcp>=2.0` 中 `streamable_http_client` 重命名与自定义 headers | 修复 [#1668](https://github.com/anthropics/skills/issues/1668)，与 [#1390](https://github.com/anthropics/skills/issues/1390)（evaluation.py 0/N 评分）问题域高度相关 | OPEN |
| 3 | **[#1771](https://github.com/anthropics/skills/pull/1771)** `proofcore-contract-auditor` | Solidity/Rust 智能合约静态分析，审计证明锚定 TON 区块链 | Web3 方向首个上链存证型 Skill，代表新兴垂直场景 | OPEN |
| 4 | **[#1703](https://github.com/anthropics/skills/pull/1703)** `md2video-audio` | Markdown → Marp 幻灯片 → MP4 视频 + 拟人语音旁白 | "零成本文档转视频"是创作者工作流热点方向 | OPEN |
| 5 | **[#525](https://github.com/anthropics/skills/pull/525)** `pyxel` | Python 复古游戏开发（含无头渲染、帧级检测、状态校验） | 长期未合并（6 个月+），但持续活跃更新，属于"小众但具代表性"的娱乐/教学 Skill | OPEN |
| 6 | **[#822](https://github.com/anthropics/skills/pull/822)** `AWT` (AI Watch Tester) | AI 视觉 + 浏览器控制跑 E2E 测试，零代码生成 | 与 [#723](https://github.com/anthropics/skills/pull/723) `testing-patterns` 共同构成"测试自动化"主题 | OPEN |
| 7 | **[#1776](https://github.com/anthropics/skills/pull/1776)** `blast-radius` | 批量/破坏性写操作前的清单式风险审计 | 回应了 [#492](https://github.com/anthropics/skills/issues/492) 中社区对"代理执行安全"的担忧 | OPEN |
| 8 | **[#83](https://github.com/anthropics/skills/pull/83)** `skill-quality-analyzer` + `skill-security-analyzer` | 元 Skill：跨五维度评估 Skill 质量、内置安全审计 | 元能力层，长期搁置，但市场价值高（与 #492 安全议题直接呼应）| OPEN |

---

## 2. 社区需求趋势

按 Issue 评论/点赞量提炼：

### 🔐 安全与信任（热度最高）
- **[#492](https://github.com/anthropics/skills/issues/492)（43 评论 / 2 👍）** 社区 Skill 冒用 `anthropic/` 命名空间造成的信任边界滥用——**最热门议题**。
- **[#1394](https://github.com/anthropics/skills/issues/1394)（4 评论 / 2 👍）** skill-creator eval-viewer 的 XSS 漏洞。
- **[#1383](https://github.com/anthropics/skills/issues/1383)（4 评论）** skill-creator 多项静默失败、Windows 不兼容。

### 🤝 协作与分发
- **[#228](https://github.com/anthropics/skills/issues/228)（16 评论 / 8 👍）** Claude.ai 组织级 Skill 共享（当前需手动传文件）。
- **[#189](https://github.com/anthropics/skills/issues/189)（6 评论 / 9 👍）** `document-skills` 与 `example-skills` 插件重复 Skill，污染上下文窗口。

### 🧠 评估与质量门控
- **[#556](https://github.com/anthropics/skills/issues/556)（12 评论 / 7 👍）** `run_eval.py` 触发率为 0% 的核心 Bug。
- **[#1487](https://github.com/anthropics/skills/issues/1487)（4 评论）** `claude-api` 单次注入 ~156k tokens 打爆上下文。
- **[#1390](https://github.com/anthropics/skills/issues/1390)（4 评论）** mcp-builder 真实 MCP 服务评分全部 0/N。
- **[#1385](https://github.com/anthropics/skills/issues/1385)（4 评论 / 1 👍）** 三门质量管道提案（预校准 / 对抗评审 / 交付核验）。

### 📦 新能力方向
- **[#1329](https://github.com/anthropics/skills/issues/1329)（9 评论）** `compact-memory`：长会话状态用符号记法压缩。
- **[#412](https://github.com/anthropics/skills/issues/412)（6 评论，已关闭）** `agent-governance`：策略 / 威胁 / 审计。
- **[#62](https://github.com/anthropics/skills/issues/62)（10 评论 / 2 👍）** 用户已上传 Skill 神秘消失——**产品稳定性诉求**。
- **[#29](https://github.com/anthropics/skills/issues/29)（4 评论）** AWS Bedrock 兼容——**生态扩展诉求**。

---

## 3. 高潜力待合并 Skills

以下 PR 具备较高落地概率（活跃度高、内容完整、与热门 Issue 形成闭环）：

| PR | Skill | 合并潜力理由 |
|---|---|---|
| [#1742](https://github.com/anthropics/skills/pull/1742) | mcp-builder 兼容 `mcp>=2` | 阻塞性版本升级，社区使用率最高的 Skill 之一 |
| [#1298](https://github.com/anthropics/skills/pull/1298) | skill-creator 综合修复 | 直接修复 4+ 条高评论 Issue 的根因 |
| [#1792](https://github.com/anthropics/skills/pull/1792) | docx LibreOffice 超时修复 | 错误处理补丁，评审阻力小 |
| [#1681](https://github.com/anthropics/skills/pull/1681) | skill-creator `package_skill.py` 直执行 | 用户高频踩坑路径，修复点明确 |
| [#1703](https://github.com/anthropics/skills/pull/1703) | md2video-audio | 创作者工作流差异化场景，作者持续更新 |
| [#1771](https://github.com/anthropics/skills/pull/1771) | proofcore-contract-auditor | Web3 垂直方向新增长点 |
| [#1776](https://github.com/anthropics/skills/pull/1776) | blast-radius | 与社区最关心的"代理破坏性操作"安全话题对齐 |

> ⚠️ 长期未合并（>6 个月）但仍高质量的应被关注：[#525](https://github.com/anthropics/skills/pull/525) pyxel、[#514](https://github.com/anthropics/skills/pull/514) document-typography、[#83](https://github.com/anthropics/skills/pull/83) skill-quality/security-analyzer。

---

## 4. Skills 生态洞察

> **社区在 Skills 层面最集中的诉求是：把"Skill 本身的工程质量、运行安全与评估闭环"从开发者视角提升到产品级——可信任、可观测、可分享、可审计，而非单纯堆砌新 Skill 数量。**

证据链：
- 评论最高的 #492 直指**命名空间信任滥用**；
- #228 聚焦**分发/共享体验**；
- #556、#1487、#1390、#1383 同时指向**评估与执行质量**；
- #83 提出的 `skill-quality-analyzer` / `skill-security-analyzer` 元 Skill 正是这种诉求的"基础设施化"表达。

简言之：**Skills 生态的下一步瓶颈，已从"有什么 Skill"转向"Skill 如何被安全、可信、可衡量地使用与分享"。**

---

<think>The user wants me to generate a Chinese daily report based on GitHub data for Claude Code, dated 2026-10-06. Let me analyze the data carefully.

Key observations:
1. Two releases: v2.1.291 and v2.1.290 - both are bug fixes/regression fixes
   - v2.1.291 fixes regressions from v2.1.290 (cloud session permission prompts dropping answers) and v2.1.288 (last messages lost when quitting)
   - v2.1.290 adds `serverToolUses` to mod's `turn.step` hook and `agentId` to plugin hook `tool.check` event

2. Issues analysis - the data only shows 1 PR (PR #96434), but the user asks for 10 important PRs. I need to note this honestly - I can only report on what's available.

3. Top issues by comments:
   - #15148 (24 comments, 73 thumbs up): LSP plugin lspServers config not processed - very high engagement, oldest issue but still relevant
   - #74558 (20 comments, 16 thumbs): Fable 5 mid-turn text blocks issue
   - #66010 (17 comments, 7 thumbs): Gmail MCP privacy issue with URL rewriting
   - #78160 (12 comments, 20 thumbs): Hard block on passwords breaking dev workflows
   - #85209 (9 comments): Sidebar empty after reinstalling Claude Desktop
   - #75654 (7 comments): Update banner on Windows npm vs winget
   - #87633 (6 comments): Windows MSIX MCP filesystem server unusable
   - #88128 (5 comments): MCP tools/list rejected without optional cache hints
   - #92771 (5 comments): Windows Shift+Enter indistinguishable from Enter
   - #99192 (4 comments): Code tab terminal integration fails on Windows

4. The PR data is limited - only 1 PR shown (#96434 about security-guidance). I should be honest about this limitation.

5. Feature/trend analysis:
   - IDE integration (VS Code extension bugs, hooks)
   - Windows-specific issues (many MSIX, terminal, packaging bugs)
   - Plugin/mod system improvements
   - MCP protocol compatibility
   - Security/privacy concerns (Gmail MCP tracking, password handling)
   - Desktop app integration
   - Authentication/access control
   - Performance/auto-compaction

Let me structure the report well. Since the user asks for 10 PRs but only 1 is in the data, I should mention this limitation while still providing what I can.

Let me write this in Chinese, professional and concise tone suitable for technical developers.</think>

# Claude Code 社区动态日报
**2026-10-06**

---

## 📌 今日速览

过去 24 小时，Claude Code 连续发布两个补丁版本（v2.1.290 → v2.1.291），主要用于修复近期回归问题并扩展 mod/plugin 钩子的可观测性。社区方面，LSP 插件配置丢失（#15148，73 👍）、Windows MSIX 打包与终端集成（#87633、#99192、#92771）、以及 MCP 2026-07-28 协议兼容性（#88128）成为讨论最集中的几个话题，反映出"插件生态成熟度 + Windows 桌面体验"是当前最迫切的改进方向。

---

## 🚀 版本发布

### v2.1.291（修复回归）
- 修复 v2.1.290 引入的回归：**云端会话会丢弃权限提示的应答**
- 修复 v2.1.288 引入的回归：**退出时丢失会话最后几条消息**

### v2.1.290（功能扩展）
- 在 mod 的 `turn.step` hook 返回结果中新增 `serverToolUses`，记录 API 自身调用工具的 id/name/input/start/end（advisor 类）
- 在插件 hook 的 `tool.check` 事件中新增 `agentId`，便于区分子 agent 的权限检查
🔗 https://github.com/anthropics/claude-code/releases

---

## 🔥 社区热点 Issues（Top 10）

| # | Issue | 平台/领域 | 关注点 | 评论 / 👍 |
|---|---|---|---|---|
| 1 | [#15148](https://github.com/anthropics/claude-code/issues/15148) `lspServers` 在 marketplace.json 中未生效 | macOS · Tools | LSP 插件（typescript-lsp、pyright-lsp、gopls-lsp）装上但不可用，社区呼声最高（**73 👍**），是 mod/插件系统成熟度的代表问题 | 24 / 73 |
| 2 | [#74558](https://github.com/anthropics/claude-code/issues/74558) Fable 5 模型中段文本块被错误折叠为"thinking" | Linux/WSL · Model | 影响流式 transcript 与 `stream-json` 消费方，沉默 turn 现象难调试 | 20 / 16 |
| 3 | [#66010](https://github.com/anthropics/claude-code/issues/66010) GMail MCP 改写 URL 注入 Google 追踪参数 | macOS · MCP · 隐私 | 直接涉及用户隐私和外部依赖信任边界，社区非常敏感 | 17 / 7 |
| 4 | [#78160](https://github.com/anthropics/claude-code/issues/78160) 密码硬阻断破坏自有测试工作流 | Windows · Model · Security | 用户呼吁"权限门控的 opt-in"机制，是典型的安全/可用性权衡讨论 | 12 / 20 |
| 5 | [#85209](https://github.com/anthropics/claude-code/issues/85209) 重装 Claude Desktop 后侧边栏为空 | macOS · Desktop | 即便本地 session 历史完好，仍无法恢复，工程体验痛点 | 9 / 2 |
| 6 | [#87633](https://github.com/anthropics/claude-code/issues/87633) Windows MSIX 1.32352.1.0 后本地 filesystem MCP 不可用 | Windows · MCP · Cowork | `draft-07 outputSchema` 校验失败，反映 MSIX 自动更新与 MCP 协议协调问题 | 6 / 0 |
| 7 | [#88128](https://github.com/anthropics/claude-code/issues/88128) MCP `tools/list`/`resources/list` 在缺少可选缓存提示时被拒 | Linux · MCP | 揭示 MCP 2026-07-28 协议严格性，一个可选字段缺失会导致整个 server 工具被丢弃 | 5 / 0 |
| 8 | [#92771](https://github.com/anthropics/claude-code/issues/92771) Windows 上 `Shift+Enter` 与 `Enter` 无法区分 | Windows · TUI | libuv 的 console→VT 转换丢失 modifier，导致 `keybindings.json` 无法绑定 | 5 / 2 |
| 9 | [#99192](https://github.com/anthropics/claude-code/issues/99192) Windows MSIX 装包的 Code 终端集成失败 | Windows · Desktop | MSIX 虚拟化 AppData 与外部 shell 路径不一致，PowerShell 集成完全失效 | 4 / 0 |
| 10 | [#99837](https://github.com/anthropics/claude-code/issues/99837) Linux 上 403 "Access to this model requires an access grant" | Linux · Auth | 即已登录仍反复出现，重登无效，影响订阅用户体验 | 4 / 0 |

---

## 🛠 重要 PR 进展

⚠️ **说明**：过去 24 小时仅检索到 1 条 PR 更新，其余暂无可报告条目。

### [#96434](https://github.com/anthropics/claude-code/pull/96434) `security-guidance`：将 deny/ask 文件与敏感文件排除在 reviewer 视野外
- 修复 #96276
- security-guidance 评审不再读取被会话 `Read` deny/ask 规则覆盖的文件，以及 `.env`、key、凭据库等公认敏感文件
- 评审子 agent 与主会话共享 `disallowed_tools`，且不再持有 shell
- 提供 `SG_SKIP_SECRET_FILES=0` 环境变量作为 opt-out
- **意义**：回应 #99857、#96860、#81057 等多条与安全评审相关的 issue，是少数由 `claude[bot]` 自动提交的修复 PR

---

## 📈 功能需求趋势

从过去 24 小时的活跃 issue 中，社区关注的方向集中且明确：

1. **🧩 插件 / Mod 系统成熟度（最高热度）**
   - 配置未生效（#15148）、钩子时序与渲染冲突（#99863）、subagent 覆盖不全（#87716）
   - 桌面 mod 面板需要可独立滚动与可拖拽分隔条（#99449）

2. **🪟 Windows 桌面体验集中爆发**
   - MSIX 虚拟化路径问题（#87633、#99192、#99858）
   - 终端/TUI 兼容性（#92771、#95009）
   - 更新提示来源不一致（#75654）
   - 权限丢失后无恢复入口（#99858）

3. **🔌 MCP 2026-07-28 协议兼容**
   - `draft-07 outputSchema`、可选 `ttlMs/cacheScope`、`elicitation` 字段的严格校验（#88128、#88075）

4. **🤖 新模型与 effort 控制**
   - Fable 5 行为异常（#74558）
   - 子会话 effort 始终回落到 medium（#99862）

5. **🔐 安全与隐私**
   - GMail MCP 注入追踪 URL（#66010）
   - 密码硬阻断需 opt-in（#78160）
   - security-guidance 评审能力扩展（PR #96434）

6. **⚙️ 工作流便捷性**
   - `/restart` 一键恢复最近会话（#96189）
   - WebFetch 在 `auto` 模式下仍弹权限（#99865）
   - 自动压缩未征得同意（#99860）

---

## 💬 开发者关注点

- **平台差异是最大抱怨源**：Windows/MSIX 路径下的打包、TUI、终端集成问题占比最高（30%+），表明桌面端仍是产品化的短板。
- **"严格但不可控"的安全策略**：开发者普遍接受默认安全策略，但强烈要求 **作用域明确、可显式 opt-in 的开关**（#78160、#78160 类讨论）。
- **协议/字段变更缺乏降级路径**：MCP 2026-07-28 的多项可选字段升级直接让生产 server 整体失效，开发者呼吁"宽容的可选字段解析"。
- **日志与会话恢复不可靠**：退出丢消息（v2.1.288 回归）、侧边栏丢会话（#85209）、长会话 Bash 工具永久死亡（#95009）让本地调试困难。
- **第三方 MCP 信任问题**：GMail MCP URL 改写事件（#66010）提醒社区，外部 MCP server 的副作用同样需要审计与提示。

---

*日报基于 GitHub 公开数据自动整理，仅反映过去 24 小时内的活跃动态。*

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

<think>The user wants me to generate a Chinese daily report for the OpenAI Codex community based on GitHub data from 2026-10-06. Let me analyze the data carefully and produce a structured report.

Key data points:
1. Releases: 4 new releases in 24 hours
   - rust-v0.161.0-alpha.13.1
   - rust-v0.160.1 (bug fix for Windows env vars in remote stdio MCP)
   - rust-v0.162.0-alpha.16
   - rust-v0.162.0-alpha.15

2. Issues: 50 issues, showing top 30 by comments
   - Top issues involve: Windows bugs, MCP server leaks, Computer Use on Windows, Chrome URL detection, MCP OAuth, etc.

3. PRs: 46 PRs in 24 hours, showing top 20
   - Many from copyberry[bot]
   - Topics: partial answers, Windows sandbox, Fast/Ultra Fast policies, OTLP metrics, MCP, JavaScript code mode, etc.

Let me organize this into the requested report format. I need to:
1. Today's highlights - 2-3 sentences
2. Version releases
3. Hot community issues (10)
4. Important PR progress (10)
5. Feature request trends
6. Developer concerns

Let me write this in Chinese, professional and concise, with GitHub links.

For the issue selection, I should pick the most impactful ones:
1. #25271 - Computer Use Windows Chrome URL (51 comments, 11 likes)
2. #30408 - MCP server processes leak (49 comments, 12 likes)
3. #48324 - Windows Codex organization settings error (41 comments, 7 likes)
4. #40852 - macOS code-mode tool omission (19 comments, 11 likes)
5. #44503 - Windows app-server daemon Job Object error (18 comments, 10 likes)
6. #41849 - VS Code Remote-SSH stale app-server (14 comments, 14 likes)
7. #2379 - Undo/redo typing (12 comments, 33 likes - very popular feature)
8. #49482 - Dot continuation diagnostics (10 comments)
9. #37692 - Azure Responses API empty description (9 comments, CLOSED)
10. #44044 - Persistent Desktop task loses tools (9 comments)
11. #29915 - Permission mode not persisting (7 comments)
12. #50440 - Dot cannot resume Windows tasks (7 comments)
13. #20503 - MCP OAuth scopes (6 comments, 12 likes)
14. #21130 - TUI semantic colors (3 comments, 29 likes - very popular)
15. #21796 - Prompt cache key support (3 comments, 14 likes)

For PRs, top by relevance:
1. #51260 - Partial answers in realtime routing
2. #51257 - Installer checksum Windows PowerShell
3. #51256 - Windows sandbox service
4. #51253 - Fast/Ultra Fast policies
5. #51249 - Partial answers across agent workflows
6. #51241 - Partial answer message phase
7. #51235 - TUI model picker labels
8. #51230 - Session lookup pagination
9. #51223 - Legacy personality template metadata
10. #51221 - Environment requests from runtime
11. #51220 - OTLP metrics temporality
12. #51215 - MCP tool catalog sizes telemetry
13. #51211 - Sandbox-writable bubblewrap
14. #51209 - Ranked tool discovery JS code mode
15. #51207 - CLI Daybreak controls
16. #51203 - apply_patch line endings
17. #51202 - Namespace removals
18. #51200 - Bazel 9.2.0 upgrade

Let me select 10 most representative.

Trends analysis:
- Windows OS issues are very prominent (about 40% of issues)
- MCP (Model Context Protocol) is a hot topic (leaks, OAuth, telemetry)
- Computer Use / browser integration issues
- Dots (the new remote control feature) discovery and routing issues
- TUI enhancements (undo/redo, semantic colors) - very popular
- App-server stability issues
- VS Code Remote-SSH integration

Let me write the report now.</think>

# OpenAI Codex 社区动态日报
**日期：2026-10-06**

---

## 📌 今日速览

今天 Codex 仓库呈现典型的"高频小步快跑"节奏：单日合并 46 个 PR，其中 `partial_answer`（区分助手回复中间态与终态）的协议层重构贯穿多个 PR；Windows 桌面端的稳定性仍是社区吐槽焦点，约 40% 的热门 Issue 与 Windows 相关，MCP 进程泄漏、Chrome/Computer Use 集成、Dot 远程路由等问题持续被推高；同时 Rust 主线发布了 0.160.1 与两条 alpha 通道版本（0.161.0-alpha.13.1 / 0.162.0-alpha.15 / 0.162.0-alpha.16），意味着内部在为下一次主版本做准备。

---

## 🚀 版本发布

| 版本 | 性质 | 关键变更 |
|---|---|---|
| [rust-v0.160.1](https://github.com/openai/codex/releases/tag/rust-v0.160.1) | 稳定版 Bugfix | 修复远程 stdio MCP 服务器在显式配置远程环境变量时丢失 `SYSTEMROOT` / `TEMP` / `TMP` 的问题（[#51121](https://github.com/openai/codex/pull/51121)），让 Unix 主机可保留 Windows 执行端的启动环境 |
| [rust-v0.161.0-alpha.13.1](https://github.com/openai/codex/releases/tag/rust-v0.161.0-alpha.13.1) | Alpha | 0.161.0 通道迭代版本 |
| [rust-v0.162.0-alpha.15](https://github.com/openai/codex/releases/tag/rust-v0.162.0-alpha.15) | Alpha | 0.162.0 通道迭代版本 |
| [rust-v0.162.0-alpha.16](https://github.com/openai/codex/releases/tag/rust-v0.162.0-alpha.16) | Alpha | 0.162.0 通道迭代版本 |

> Alpha 通道密集更新，暗示 0.162 即将作为下个主版本候选。

---

## 🔥 社区热点 Issues（Top 10）

1. **[#25271 Computer Use 无法识别 Windows Chrome URL](https://github.com/openai/codex/issues/25271)** — 51 评论 / 👍11
   影响 ChatGPT Plus 用户，在 `chrome://newtab/` 即失败，是阻碍 Computer Use 在 Windows 落地的关键 Bug。

2. **[#30408 MCP 服务进程泄漏（线程级别孤儿进程，RSS 可达 9 GB+）](https://github.com/openai/codex/issues/30408)** — 49 评论 / 👍12
   app-server 为每个线程全量 fork MCP 进程，关闭/归档时不清理，长期使用必然 OOM，是 macOS 桌面端最严重的稳定性问题之一。

3. **[#48324 ChatGPT Windows 桌面：Codex 提示 "Unable to load organization settings"](https://github.com/openai/codex/issues/48324)** — 41 评论 / 👍7
   同一账户在 Web 与 CLI 均可用，仅 Windows 桌面客户端失败；由于 composer 不渲染，用户甚至无法 `/feedback`。

4. **[#41849 VS Code Remote-SSH 重连后旧 app-server 占用线程写锁](https://github.com/openai/codex/issues/41849)** — 14 评论 / 👍14
   Remote-SSH 断开重连后，新旧两个 `app-server` 同时存在，旧实例持锁导致 "This is open in another app"。**👍 数等于评论数，反映共鸣度极高。**

5. **[#44503 Windows：Modern Standby 系统上 app-server 守护进程启动失败（Job Object 错误）](https://github.com/openai/codex/issues/44503)** — 18 评论 / 👍10
   `codex-cli 0.154.0` 在 Windows 11 Pro 现代待机机型上启动即崩，问题是 Modern Standby 的电源状态交互。

6. **[#40852 macOS Desktop code-mode 任务丢失 `send_message_to_thread` 工具](https://github.com/openai/codex/issues/40848)** — 19 评论 / 👍11
   从 `0.149.0-alpha.4.1` 升级到 `0.150.0-alpha.8` 后，code-mode 仅保留读工具导致线程管理中断。

7. **[#2379 TUI 撤销/重做输入](https://github.com/openai/codex/issues/2379)** — 12 评论 / 👍33
   自 2025-08 起的"长寿"需求，希望 TUI 支持 Cmd-Z / Shift-Cmd-Z。**👍33 在今天所有 Issue 中点赞最高**，是社区最渴望的 TUX 增强。

8. **[#20503 MCP OAuth 动态客户端注册未携带 scopes](https://github.com/openai/codex/issues/20503)** — 6 评论 / 👍12
   影响 Fastmail 等强制要求 `scope` 的 MCP 服务，CLI 登录直接失败。**OAuth scopes 缺失是 MCP 生态互通的硬性门槛。**

9. **[#44044 Persistent Desktop 任务丢失 thread-management 工具](https://github.com/openai/codex/issues/44044)** — 9 评论
   macOS `26.901 / 0.153.4` 上持久化任务只能通过 CLI fallback 维持，桌面客户端功能残缺。

10. **[#29915 权限/审批模式不持久化](https://github.com/openai/codex/issues/29915)** — 7 评论 / 👍4
    新建线程与已加载线程的 sandbox 模式设置都不持久，是 desktop 端用户反复遭遇的体验断裂。

> 完整 30 条热门 Issue 见数据源，涵盖 [#50440](https://github.com/openai/codex/issues/50440)、[#50704](https://github.com/openai/codex/issues/50704)、[#51274](https://github.com/openai/codex/issues/51274) 等 Dot 路由 / Linux 桌面通知等新发现。

---

## 🛠 重要 PR 进展（Top 10）

1. **[#51241 增加 `partial_answer` 消息阶段](https://github.com/openai/codex/pull/51241)** — 引入 `MessagePhase::PartialAnswer`，将助手文本与 commentary / final_answer 区分开，便于调用方表达"还有后续输出"的中间态。

2. **[#51249 #51260 跨 agent 工作流统一处理 partial answer](https://github.com/openai/codex/pull/51249)** — 在 routing、搜索、fork 历史中保持 partial answer 的可检索/可朗读性，避免被误判为空最终响应。配套 [#51260](https://github.com/openai/codex/pull/51260) 在实时路由与线程搜索侧落地。

3. **[#51256 Windows sandbox 服务在注册 Core 设置期间自启](https://github.com/openai/codex/pull/51256)** — 修复"已停止的 provisioning 服务被判为不可用"导致 sandbox 无法注册的链路问题。

4. **[#51257 Windows PowerShell 下安装器校验和验证](https://github.com/openai/codex/pull/51257)** — 原生 launcher 把 PowerShell 7 模块路径传给 Windows PowerShell 导致 `Get-FileHash` 失败，修复后 SHA-256 校验恢复。

5. **[#51253 独立执行 Fast / Ultra Fast 策略](https://github.com/openai/codex/pull/51253)** — 新增默认开启的 `features.ultrafast_mode`，让两条策略可独立 allow/deny，避免"开 Fast 就必须也开 Ultra Fast"。

6. **[#51221 分离环境请求与运行时选择](https://github.com/openai/codex/pull/51221)** — 引入 `TurnEnvironmentRequest` 与 `TurnEnvironmentSelection`，让调用方输入与会话启动边界清晰解耦。

7. **[#51230 会话查找分页稳定化并暴露错误](https://github.com/openai/codex/pull/51230)** — 修复活动会话越过分页游标、时间戳相等时跳过线程的问题，避免重复标签检测失败。

8. **[#51220 遵循 OTLP 指标 temporality 偏好](https://github.com/openai/codex/pull/51220)** — 读取 `OTEL_EXPORTER_OTLP_METRICS_TEMPORALITY_PREFERENCE`，让后端可要求 cumulative 时不再强制 delta。

9. **[#51209 JavaScript code mode 增加 ranked 工具发现](https://github.com/openai/codex/pull/51209)** — 新增 `code_mode_tool_search`（默认关闭），提供 BM25 排名的 `await tools.tool_search({query, limit})` API。

10. **[#51211 拒绝 sandbox 可写的 bubblewrap 可执行](https://github.com/openai/codex/pull/51211)** — bubblewrap 探测时仅排除当前目录仍存在被劫持风险，本次扩展到 PATH 中所有可写根目录。

> 其他值得跟踪：[#51215 MCP 工具目录遥测](https://github.com/openai/codex/pull/51215)、[#51207 CLI Daybreak 控件 opt-in](https://github.com/openai/codex/pull/51207)、[#51203 apply_patch 强制保留换行符](https://github.com/openai/codex/pull/51203)、[#51200 Bazel 升级到 9.2.0](https://github.com/openai/codex/pull/51200)。

---

## 📈 功能需求趋势

| 方向 | 社区热度信号 |
|---|---|
| **Windows 桌面稳定性** | 多日霸榜，涉及 Computer Use、app-server、组织设置、Power/Modern Standby、权限持久化、Chrome 绑定等 |
| **MCP 生态成熟化** | 进程泄漏（[#30408](https://github.com/openai/codex/issues/30408)）、OAuth scopes（[#20503](https://github.com/openai/codex/issues/20503)）、遥测与可观测性（[#51215](https://github.com/openai/codex/pull/51215)）三线并行 |
| **Dot 远程代理调试能力** | 新功能上线初期问题集中：本地聊天 ID 解析（[#50440](https://github.com/openai/codex/issues/50440)、[#50704](https://github.com/openai/codex/issues/50704)）、路由诊断（[#49482](https://github.com/openai/codex/issues/49482)）、启动失败（[#49566](https://github.com/openai/codex/issues/49566)） |
| **TUI 体验升级** | Undo/Redo（[#2379](https://github.com/openai/codex/issues/2379) 👍33）、语义颜色（[#21130](https://github.com/openai/codex/issues/21130) 👍29）— 历史需求持续被加 👍 |
| **多模型/多档位策略** | Fast / Ultra Fast 独立执行（[#51253](https://github.com/openai/codex/pull/51253)）、TUI 默认模型标签清理（[#51235](https://github.com/openai/codex/pull/51235)）、语音速度控制（[#38106](https://github.com/openai/codex/issues/38106)） |
| **协议级缓存与会话** | 提示缓存 key 稳定性（[#21796](https://github.com/openai/codex/issues/21796) 👍14）、会话分页（[#51230](https://github.com/openai/codex/pull/51230)） |

---

## 🧑‍💻 开发者关注点

1. **Windows 仍是体验短板**：从组织设置、Computer Use、Modern Standby、PowerShell 安装校验、权限持久化到 Dot 聊天 ID 解析，"同一账户 Web/CLI 正常，仅 Windows 客户端异常" 的报告持续累积，对企业部署是负面信号。

2. **MCP 进程生命周期管理缺失**：每个 thread 拉起全局 MCP 进程且永不清理，是生产环境的资源炸弹——[#30408](https://github.com/openai/codex/issues/30408) 的 9 GB RSS 案例说明问题已经严重到必须立刻修复。

3. **Dot（远程代理）发现与路由调试能力不足**：用户大量遇到"我以为 dot 会做这件事，结果走的是错误路径"或"找不到工具"的场景，社区呼吁提供 route-native diagnostics 而非纯文字报告（[#49482](https://github.com/openai/codex/issues/49482)）。

4. **app-server 作为多会话编排入口的契约需要更稳**：Remote-SSH 重连、Modern Standby 唤醒、partial answer 处理等场景都暴露了 app-server 在多客户端并发场景下的资源/会话句柄管理薄弱。

5. **高频小 PR 暴露出协议层正在快速演进**：`partial_answer`、OTLP temporality、Fast/Ultra Fast 独立策略、Daybreak opt-in 等都属于"先开 feature flag、后默认开启"的灰度模式，提示开发者需关注自己依赖的协议字段是否会被弃用（例如 `is_default` 模型标签已删除）。

6. **TUI 基础体验滞后**：撤销/重做、语义颜色这类"编辑器基础能力"在 👍 数上击败大多数功能性 Bug，说明 TUI 的 UX 短板正在成为开发者向 CLI 推送的阻力。

---

*数据来源：[github.com/openai/codex](https://github.com/openai/codex)，覆盖 2026-10-05 ~ 2026-10-06 24 小时窗口。*

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

<think>The user wants me to generate a Chinese daily report for the Gemini CLI community based on GitHub data from 2026-10-06. Let me analyze the data carefully and structure it according to the requested sections.

Let me review the data:

**Releases:**
- v0.64.0-nightly.20261006.gfb972b2f8 - nightly release, automated version bump

**Top Issues (sorted by comments):**
1. #22323 - Subagent recovery after MAX_TURNS reports GOAL success (13 comments, 2 likes)
2. #19873 - Zero-Dependency OS Sandboxing & Post-Execution Intent Routing (9 comments)
3. #21409 - Generalist agent hangs (8 comments, 8 likes) - high engagement
4. #22745 - AST-aware file reads, search, mapping EPIC (7 comments)
5. #21968 - Gemini doesn't use skills and sub-agents enough (7 comments)
6. #22267 - Browser Agent ignores settings.json overrides (4 comments)
7. #22232 - browser_agent resilience: automatic session takeover (4 comments)
8. #21983 - browser subagent fails in wayland (4 comments)
9. #21000 - Native file tools for task tracker (4 comments)
10. #20079 - ~/.gemini/agents/filename.md symlink not recognized (4 comments)
11. #24246 - 400 error with >128 tools (3 comments)
12. #23571 - Model creates tmp scripts in random spots (3 comments)
13. #22672 - Agent should stop/discourage destructive behavior (3 comments)
14. #22186 - get-shit-done output hook causes crash (3 comments)
15. #20195 - Local Subagent Sprint 1 (3 comments)
... and more

**Top PRs:**
1. #29647 - skip windows quoting integration test when pwsh.exe not available
2. #29635 - mock isHeadlessMode in gemini.test.tsx
3. #29645 - chore/release: bump version to 0.64.0-nightly.20261006
4. #29435 - CLOSED - prevent process hang on session exit
5. #29436 - CLOSED - prevent 100% CPU hang from @ within quotes in stdin
6. #29440 - CLOSED - use UTF-8 offsets for web-fetch citations
7. #29536 - prevent command-line option injection in grep
8. #29532 - honor RetryInfo delay of zero when classifying quota errors
9. #29535 - respect allowed onboarding tier (auth)
10. #29537 - Claude/focused meitner oqnrj2
11. #28705 - chore/release: bump version to 0.55.0-nightly.20260806
12. #29643 - clear cached credentials when re-selecting Google login
13. #29641 - support custom OTLP headers in telemetry
14. #29644 - restore debounced static UI refresh on terminal width changes
15. #29612 - enforce terminal user turn invariant and normalize request contents
16. #2239 - CLOSED - quiet dotenv log message
17. #1608 - CLOSED - Streamline issue submission with YAML forms
18. #1688 - CLOSED - Fix doc link in auth dialog
19. #29622 - bound tildeifyPath to path segments
20. #29490 - avoid duplicating tool response turns on resume

Now let me categorize the issues by theme:

**Subagent Issues (most prominent):**
- #22323, #21409, #21968, #21983, #22267, #22232, #18285, #18287, #20195, #21763, #22745, #22747

**Tool/File Reading Issues:**
- #22745 (AST-aware), #22746, #22747, #19561 (tactful extraction), #23571

**Browser Agent:**
- #22267, #22232, #21983

**Core/Platform:**
- #21924 (terminal resize), #22466 (escape behavior), #18397 (per-workspace policy), #22465 (vite app stuck)

**Auth:**
- #24246 (>128 tools 400 error)
- PR #29535 (onboarding tier), #29643 (cached credentials)

**Task Tracking:**
- #21000, #18836

**Security:**
- PR #29536 (grep injection)

**Stability/Hang Issues:**
- #21409, #22186, PRs #29435, #29436

**Telemetry:**
- PR #29641 (OTLP headers)

**Knowledge cutoff consideration**: The data shows dates in 2026 (some dates are from 2026-03 etc, and the release is dated 2026-10-06). Since my knowledge cutoff is January 2026, this is technically future data, but the user is asking me to analyze it as a daily report. I'll proceed with the analysis as requested, treating the data as given.

Wait, actually re-reading - the user is asking me to generate a report "for 2026-10-06". This is the future relative to my training. But this is clearly a hypothetical/roleplay task based on provided data. I should generate the report based on the data provided.

Let me write the report in Chinese, professional and concise:

Sections:
1. 今日速览 - 2-3 sentences
2. 版本发布 - the nightly version
3. 社区热点 Issues - top 10
4. 重要 PR 进展 - top 10
5. 功能需求趋势
6. 开发者关注点

Let me draft:

**今日速览**: 
Today the project continues iterating on subagent stability and core fixes. The Generalist Agent hangs (#21409) and MAX_TURNS subagent misreporting (#22323) have high community attention. Multiple PRs around input parsing, session resume and authentication are merged or in review.

**版本发布**:
v0.64.0-nightly.20261006.gfb972b2f8 automated nightly version bump (PR #29645).

**社区热点 Issues** - Top 10 by comments/engagement:
1. #22323 (13 comments) - Subagent recovery after MAX_TURNS reports GOAL success
2. #19873 (9 comments) - Zero-Dependency OS Sandboxing
3. #21409 (8 comments, 8 likes) - Generalist agent hangs
4. #22745 (7 comments) - AST-aware file reads EPIC
5. #21968 (7 comments) - Gemini doesn't use skills/sub-agents
6. #22267 (4 comments) - Browser Agent ignores settings.json
7. #22232 (4 comments) - browser_agent session takeover
8. #21983 (4 comments) - browser subagent fails in wayland
9. #21000 (4 comments) - Native file tools for task tracker
10. #20079 (4 comments) - Symlink not recognized as agent

**重要 PR 进展**:
1. #29435 [CLOSED] - prevent process hang on session exit
2. #29436 [CLOSED] - prevent 100% CPU hang from @ within quotes
3. #29440 [CLOSED] - use UTF-8 offsets for web-fetch citations
4. #29536 - prevent command-line option injection in grep
5. #29532 - honor RetryInfo delay of zero
6. #29535 - respect allowed onboarding tier
7. #29641 - support custom OTLP headers in telemetry
8. #29644 - restore debounced static UI refresh on terminal resize
9. #29612 - enforce terminal user turn invariant
10. #29490 - avoid duplicating tool response turns on resume

**功能需求趋势**:
- Subagent architecture improvements (recovery, hang, discovery)
- AST-aware tooling for code reading
- Telemetry/observability (OTLP headers)
- Browser agent robustness
- Auth/account management

**开发者关注点**:
- Stability issues with generalist agent hangs
- Input parsing edge cases (@ in quotes)
- Session resume correctness
- Multi-account authentication
- Tool count limitations

Let me write this out more polished. I'll write it as a professional Chinese technical daily report.</think>

# Gemini CLI 社区动态日报
**日期：2026-10-06**

---

## 📌 今日速览

今日社区焦点集中在 **Subagent 架构稳定性** 与 **核心输入/会话修复**：Generalist Agent 无限挂起 (#21409) 与 Subagent 在 MAX_TURNS 后错误上报 GOAL (#22323) 持续被高频讨论；多个 P1 级 PR（stdin 解析、会话 resume 去重、grep 命令注入防护）已完成或正在合入。Nightly 版本正常推进至 `v0.64.0-nightly.20261006.gfb972b2f8`，生态侧 OTLP 自定义 header、AST 感知工具链调研也在加速。

---

## 🚀 版本发布

- **v0.64.0-nightly.20261006.gfb972b2f8**（自动发布，由 @gemini-cli-robot 发起）  
  [PR #29645](https://github.com/google-gemini/gemini-cli/pull/29645) — 例行 nightly 版本号 bump。  
  差异对比：[v0.64.0-nightly.20261005… → v0.64.0-nightly.20261006…](https://github.com/google-gemini/gemini-cli/compare/v0.64.0-nightly.20261005.gfb972b2f8...v0.64.0-nightly.20261006.gfb972b2f8)

---

## 🔥 社区热点 Issues

按社区互动（评论 + 👍）筛选的 10 条最值得关注 Issue：

| # | Issue | 优先级 | 关注点 |
|---|-------|--------|--------|
| [#22323](https://github.com/google-gemini/gemini-cli/issues/22323) | Subagent recovery after MAX_TURNS 被错误上报为 GOAL success | P1 / Bug | 13 评论，2 👍。Subagent 自身的 result 显示已触发最大轮次限制，但终止状态仍写 `GOAL`，下游将"被打断"误识别为"成功"，存在真实语义损失 |
| [#21409](https://github.com/google-gemini/gemini-cli/issues/21409) | Generalist agent hangs | P1 / Bug | 8 评论，**8 👍**（互动最高）。`gemini-cli` 一旦委派给 generalist agent 就无限挂起，最长等待 1 小时仍不返回；通过禁用 subagent 可绕过 |
| [#19873](https://github.com/google-gemini/gemini-cli/issues/19873) | Zero-Dependency OS Sandboxing & Post-Execution Intent Routing | P2 / Enhancement | 9 评论。围绕 Gemini 3 模型"原生 bash 用户"特性，提出 OS 级零依赖沙箱 + 执行后意图路由的设计 |
| [#22745](https://github.com/google-gemini/gemini-cli/issues/22745) | EPIC: AST-aware 文件读取/搜索/映射 | P2 / Feature | 7 评论。串联 `#22746` `#22747` 调研 `tilth` / `glyph` / AST grep 是否能减少误读与 token 噪声 |
| [#21968](https://github.com/google-gemini/gemini-cli/issues/21968) | Gemini 不主动调用 skills 和 sub-agents | P2 / Bug | 7 评论。即使用户在 `~/.gemini/agents/` 配齐 gradle/git skills，模型默认仍不会主动调度，需显式指令 |
| [#22267](https://github.com/google-gemini/gemini-cli/issues/22267) | Browser Agent 忽略 settings.json 覆盖（如 maxTurns） | P2 / Bug | 4 评论。`AgentRegistry` 初始化阶段正确合并配置，但 Browser Agent 实际执行时未应用 |
| [#22232](https://github.com/google-gemini/gemini-cli/issues/22232) | browser_agent fail-fast 策略：session takeover & lock recovery | P3 / Feature | 4 评论。`BrowserManager` 在持久化模式下遇到锁定的 profile 直接失败，缺乏自动接管 |
| [#21983](https://github.com/google-gemini/gemini-cli/issues/21983) | browser subagent 在 Wayland 下失败 | P1 / Bug | 4 评论。Wayland 桌面下 browser subagent 启动即失败 |
| [#21000](https://github.com/google-gemini/gemini-cli/issues/21000) | 用原生文件工具维护 task tracker | P3 / Feature | 4 评论。从"上下文内 todo"迁向"磁盘持久化任务清单"，缓解 context rot |
| [#20079](https://github.com/google-gemini/gemini-cli/issues/20079) | `~/.gemini/agents/*.md` 为软链接时不识别为 agent | P2 / Bug | 4 评论。dotfile 通过 symlink 组织时加载失败，用户需用真实文件 |

---

## 🛠️ 重要 PR 进展

| # | PR | 状态 | 说明 |
|---|----|------|------|
| [#29435](https://github.com/google-gemini/gemini-cli/pull/29435) | fix(cli,core): prevent process hang on session exit | ✅ **CLOSED** | `cleanup.ts` 中 `drainStdin()` 补齐 `pause/unref` 与 listener 清理，避免 stdin 持有 event loop 阻止进程退出 |
| [#29436](https://github.com/google-gemini/gemini-cli/pull/29436) | fix(cli): prevent 100% CPU hang from `@` within quotes in stdin | ✅ **CLOSED** | 修复 `AT_COMMAND_PATH_REGEX_SOURCE` 对引号内 `@scope/pkg` 的循环匹配，根治粘贴多行 import 时的 CPU 跑满 |
| [#29440](https://github.com/google-gemini/gemini-cli/pull/29440) | fix(core): use UTF-8 offsets for web-fetch citations | ✅ **CLOSED** | 修正非 ASCII（含 emoji、CJK）web-fetch 引用的字节偏移，附带回归测试 |
| [#29536](https://github.com/google-gemini/gemini-cli/pull/29536) | fix(grep): prevent command-line option injection via `-e` | 🟡 OPEN | `grep.ts` 强制使用 `-e` 终止符，规避 CWE-88（Argument Injection），同时加固 `git grep` 与系统 `grep` 两条管线 |
| [#29532](https://github.com/google-gemini/gemini-cli/pull/29532) | fix(core): honor `RetryInfo` delay of zero | 🟡 OPEN | `classifyGoogleError()` 不再把"立即可重试"的零延迟限流错判为 terminal quota，避免触发误退登/降级 |
| [#29535](https://github.com/google-gemini/gemini-cli/pull/29535) | fix(auth): respect allowed onboarding tier | 🟡 OPEN | 修复 Code Assist API 在未指定 default tier 时 CLI 回落到 legacy tier，导致个人/免费账号被错误报"You do not have a valid license" |
| [#29641](https://github.com/google-gemini/gemini-cli/pull/29641) | feat(telemetry): support custom OTLP headers | 🟡 OPEN | 支持 OTLP HTTP/gRPC 自定义 header，可对接 Grafana Cloud / Honeycomb / Datadog 等带认证的 collector |
| [#29644](https://github.com/google-gemini/gemini-cli/pull/29644) | fix(cli): restore debounced static UI refresh on terminal width changes | 🟡 OPEN | `AppContainer.tsx` 恢复对 `terminalWidth` 变化的 100ms 防抖 refresh，解决水平 resize 闪烁 |
| [#29612](https://github.com/google-gemini/gemini-cli/pull/29612) | fix(core): enforce terminal user turn invariant and normalize request contents | 🟡 OPEN | `/rewind`、流中断后 `generateContentStream` 请求末尾补齐非空 user 段，确保协议不变式 |
| [#29490](https://github.com/google-gemini/gemini-cli/pull/29490) | fix(core): avoid duplicating tool response turns on resume | 🟡 OPEN | 修复 `-r` 恢复会话时 `geminiChat.ts` 合成 user 消息导致 tool 结果被双写的问题（#29365） |

---

## 📈 功能需求趋势

从 50 条更新 Issue 提炼，社区最集中的方向：

1. **Subagent 体系成熟化**（占比最高）  
   - 稳定性：Generalist hang (#21409)、MAX_TURNS 语义 (#22323)  
   - 可发现性：subagent 不被自动调用 (#21968)、symlink 加载失败 (#20079)、settings.json 发现 (#18285)  
   - 协作能力：并行 subagent 共享内存 (#18287)、trajectory 通过 `/chat share` 暴露 (#22598)  
   - 诊断：Bug report 不含 subagent 上下文 (#21763)  
   - 路线图：[Local Subagent Sprint 1 #20195](https://github.com/google-gemini/gemini-cli/issues/20195)

2. **AST 感知 / 节省 token 的代码理解工具链**  
   `#22745` EPIC 串起 `#22746` `#22747`，叠加 #19561 "Tactful Extraction"（grep → 范围读取 → 文件全文的层级化读取）与 #24246（>128 工具触发 400）—— 共同指向"用更结构化的方式降本提质"。

3. **Browser Agent 鲁棒性**  
   Wayland 兼容 (#21983)、settings.json 覆盖 (#22267)、锁/会话接管 (#22232) 三个相互独立却同源的缺陷。

4. **可观测性与企业集成**  
   OTLP header 支持 (#29641) 与内部 eval 稳定性 (#23166, #23313) 表明团队在搭建生产级遥测/评测底座。

5. **身份与会话正确性**  
   PR #29535 / #29643 / #29490 三个不同维度的修复（tier 选择、凭证缓存、resume 去重）暴露出账号与会话生命周期仍是高频踩坑点。

---

## 🧑‍💻 开发者关注点

基于 Issue 与 PR 的开发者反馈，可归纳出以下高频痛点：

- **"看不到 / 调不动" subagent**：用户希望模型主动调度，但当前在能力匹配、配置加载（软链接、settings.json）两端都有阻力；通用 agent 一旦被委派就极易卡死，使得开发者被迫显式绕开 subagent 体系。
- **会话恢复与协议不变式脆弱**：`/rewind`、`-r` resume、stream abort 三种场景下都曾出现消息重复或末尾 user turn 为空的问题；开发者期望 session lifecycle 的可预测性。
- **stdin

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

<think>Let me analyze the GitHub data for GitHub Copilot CLI to generate a comprehensive daily report for 2026-10-06.

Key observations:

1. **Releases**: There are 4 releases mentioned in the past 24 hours - v1.0.93-1, v1.0.93-0, v1.0.92, and v1.0.92-5. These are recent releases with MCP, config, and session-related fixes.

2. **Issues**: 31 issues updated, with significant community engagement:
   - #3282 (13 comments, 31 thumbs up, CLOSED): Multiple BYOK model capability - high engagement
   - #4775 (9 comments): Mission Control dashboard 404 issue
   - #4998 (9 comments, 9 thumbs up): macOS stale device ID issue
   - #3399 (7 comments, 14 thumbs up, CLOSED): Custom headers for BYOK
   - #4505 (6 comments, CLOSED): Stale connection item IDs
   - #3074 (4 comments, 12 thumbs up, CLOSED): /effort command
   - Several MCP-related issues (Cloudflare, Figma, OAuth, Datadog)
   - Several BYOK/model related issues
   - Theme/UI regressions
   - Windows-specific issues

3. **PRs**: Only 1 PR updated in the past 24 hours - #5046 which appears to be an initial commit with no description.

4. **Trends**:
   - MCP integration issues are dominating (OAuth, transport types, server compatibility)
   - BYOK (Bring Your Own Key) enhancements
   - macOS/Windows platform-specific issues
   - UI/theme regressions
   - Session management issues

Let me structure this into a clear daily report.</think>

# GitHub Copilot CLI 社区动态日报
**日期：2026-10-06**

---

## 📰 今日速览

今日 Copilot CLI 发布了 **v1.0.93** 系列新版本，重点修复了沙箱禁用时 LSP 语言服务器保活、紧凑 shell 命令展开等体验问题，同时 v1.0.92 引入了 `copilot config` 子命令和会话前的本地/云端环境切换器。社区层面，**MCP 生态集成仍是最大热点**——OAuth 鉴权、远程 MCP 服务器兼容性问题集中爆发；多 BYOK 模型、主题可访问性回退、macOS 设备 ID 失效等问题持续引发开发者讨论。

---

## 🚀 版本发布

### v1.0.93-1（最新）
- 修复与小改进（详细 changelog 待补充）

### v1.0.93-0
- **Fixed**：
  - 关闭沙箱时，预热的语言服务器在 LSP 请求之间保持运行
  - 点击截断的紧凑 shell 命令可展开查看完整内容

### v1.0.92（2026-10-05）
- ✨ 新增 `copilot config` 子命令，支持 list / read / set / remove 设置
- ✨ 新增会话前 `Ctrl+E` 环境切换器，可在本地运行与云端运行间切换
- 🔧 支持 Entra 受保护 MCP 服务器静默续期仅 access-token 的凭证
- 🔧 移除旧的 HTTP+SSE MCP 连接方式

### v1.0.92-5
- **Improved**：Microsoft Entra 登录后可选择使用哪个账号；`/logout` 可登出对应 OAuth 会话
- **Fixed**：Entra MCP 凭证自动续期问题
🔗 [Release 列表](https://github.com/github/copilot-cli/releases)

---

## 🔥 社区热点 Issues（Top 10）

| # | Issue | 状态 | 评论 | 👍 | 重要性 |
|---|-------|------|------|-----|--------|
| 1 | [#3282](https://github.com/github/copilot-cli/issues/3282) 多 BYOK 模型支持 | CLOSED | 13 | 31 | ⭐⭐⭐ 社区呼声最高的长期需求之一，关闭意味着可能已在 v1.0.92+ 实现 |
| 2 | [#4775](https://github.com/github/copilot-cli/issues/4775) Mission Control 仪表盘链接 404 | OPEN | 9 | 2 | ⭐⭐⭐ 官方 Web UI 与 CLI 会话路径不一致，影响日常使用 |
| 3 | [#4998](https://github.com/github/copilot-cli/issues/4998) macOS 更新后 `.mcp-writer.binding` 设备 ID 失效 | OPEN | 9 | 9 | ⭐⭐⭐ 影响所有 macOS 用户，提示词全部报错 |
| 4 | [#3399](https://github.com/github/copilot-cli/issues/3399) BYOK 自定义 HTTP Header | CLOSED | 7 | 14 | ⭐⭐⭐ 企业场景刚需（租户/组织标识），BYOK 体系完善 |
| 5 | [#4505](https://github.com/github/copilot-cli/issues/4505) 恢复会话保留陈旧连接 ID | OPEN→CLOSED | 6 | 3 | ⭐⭐ 关键会话稳定性 bug |
| 6 | [#3074](https://github.com/github/copilot-cli/issues/3074) 新增 `/effort` 推理强度快捷命令 | CLOSED | 4 | 12 | ⭐⭐ 体现开发者对 reasoning effort 灵活调整的需求 |
| 7 | [#4991](https://github.com/github/copilot-cli/issues/4991) Cloudflare MCP "Subscription limit reached" | OPEN | 3 | 0 | ⭐⭐ 知名远程 MCP 服务兼容性问题 |
| 8 | [#3595](https://github.com/github/copilot-cli/issues/3595) AutoPilot 模式应暂停等待用户确认 | OPEN | 3 | 2 | ⭐⭐ AutoPilot 自动化流程治理问题 |
| 9 | [#1803](https://github.com/github/copilot-cli/issues/1803) 支持 MCP `resources/read` 原语 | OPEN | 2 | 13 | ⭐⭐ MCP 协议完整支持呼声高 |
| 10 | [#2790](https://github.com/github/copilot-cli/issues/2790) Figma Desktop MCP 误判为 SSE 失败 | OPEN | 2 | 2 | ⭐⭐ 真实设计工作流场景，HTTP MCP transport 检测 bug |

### 其他高优问题摘要
- [#5061](https://github.com/github/copilot-cli/issues/5061) v1.0.92 拒绝标准 Entra `api://` 作用域（新发现）
- [#5058](https://github.com/github/copilot-cli/issues/5058) Datadog MCP OAuth token 交换失败
- [#5057](https://github.com/github/copilot-cli/issues/5057) 项目级 canvas 扩展发现回归
- [#5056](https://github.com/github/copilot-cli/issues/5056) 10 月主题配色可读性回退
- [#5055](https://github.com/github/copilot-cli/issues/5055) BYOK/离线模式 `/workflows` 不可用
- [#5054](https://github.com/github/copilot-cli/issues/5054) xhigh 推理下自动压缩超时 300s
- [#5039](https://github.com/github/copilot-cli/issues/5039) MCP OAuth 在协议版本不兼容时无回退
- [#4998](https://github.com/github/copilot-cli/issues/4998) macOS 重启后 MCP 失效

---

## 🔧 重要 PR 进展

> ⚠️ 过去 24 小时内仅有 [#5046](https://github.com/github/copilot-cli/pull/5046) 一条 PR 更新（初始提交，无描述），社区 PR 流入较冷清。

考虑到今日整体 PR 活跃度有限，将范围扩展到 **近期值得关注的高影响 PR**：

| # | PR | 说明 |
|---|-----|------|
| 1 | [#5046](https://github.com/github/copilot-cli/pull/5046) | 初始提交（内容未知，待跟踪） |
| 2 | v1.0.93-0 / 1.0.93-1 | LSP 保活、shell 命令展开修复（已合入 release） |
| 3 | v1.0.92 系列 | `copilot config` 子命令、`Ctrl+E` 环境切换（已合入 release） |
| 4 | v1.0.92-5 | Entra 多账号选择、`/logout` 支持 OAuth 会话登出（已合入 release） |

---

## 📈 功能需求趋势

从过去 24 小时 Issues 提炼的社区关注方向：

### 1. 🔌 MCP 生态成熟化（占比最高）
- **OAuth 鉴权健壮性**：协议版本回退、Token 交换、`api://` 作用域校验、Entra 自动续期
- **传输协议支持**：HTTP vs SSE 检测错误（[#2790](https://github.com/github/copilot-cli/issues/2790)）
- **协议完整性**：呼声要求支持 MCP `resources/read`（[#1803](https://github.com/github/copilot-cli/issues/1803)）、`prompts` 原语
- **平台兼容**：macOS 设备 ID 失效、Windows 平台细节、Cloudflare/Datadog/Jira/Figma 等主流 MCP 服务兼容

### 2. 🧠 BYOK / 模型灵活性
- 多 BYOK 模型并存与运行时切换（[#3282](https://github.com/github/copilot-cli/issues/3282)，13 赞 31 👍）
- BYOK 自定义 Header（[#3399](https://github.com/github/copilot-cli/issues/3399)，已关闭）
- BYOK / air-gapped 模式下的 `/workflows` 与工作流工具（[#5055](https://github.com/github/copilot-cli/issues/5055)）
- 子代理模型覆盖被静默替换（[#4462](https://github.com/github/copilot-cli/issues/4462)）

### 3. 🎨 UI / 主题可访问性
- 10 月新主题配色回退（[#5056](https://github.com/github/copilot-cli/issues/5056)）
- Windows 主题跟随 OS 而非终端背景（[#4961](https://github.com/github/copilot-cli/issues/4961)）
- 双击 Esc 误触发 rewind（[#5060](https://github.com/github/copilot-cli/issues/5060)）

### 4. 🪝 Hook 体系扩展
- `subagentStart` 暴露 `agentId` 以便父-子策略关联（[#5059](https://github.com/github/copilot-cli/issues/5059)）

### 5. 🏢 企业 / 插件治理
- 阻止内置插件市场（[#4715](https://github.com/github/copilot-cli/issues/4715)，已关闭）
- TUI 面板应识别 fork 而非默认仓库（[#4689](https://github.com/github/copilot-cli/issues/4689)）

---

## 💡 开发者关注点 & 痛点

| 类别 | 痛点描述 | 代表 Issue |
|------|---------|-----------|
| **🔐 MCP 鉴权脆弱** | OAuth 流程在多供应商下反复失败、Token 续期缺失，远程 MCP 服务几乎成为"试金石" | #4991、#5039、#5058、#5061 |
| **🍎 macOS 稳定性** | 系统更新/重启后设备 ID 失效导致会话完全不可用 | #4998 |
| **🧩 BYOK 不够灵活** | 单模型 + 单 Header 限制让企业 / 多模型用户切换成本极高 | #3282、#3399、#4462、#5055 |
| **🎨 主题与 Esc 行为** | 自动暗色模式 / 双击 Esc 触发 rewind 影响操作确定性 | #4961、#5056、#5060 |
| **📊 官方 Web 与 CLI 路径漂移** | Mission Control 链接 404，CLI 与 Web UI 状态同步缺位 | #4775 |
| **⚙️ 自动化治理** | AutoPilot 不暂停等用户确认，缺少对决策步骤的人工介入点 | #3595 |
| **⏱️ 大上下文稳定性** | xhigh 推理 + 百万 token 下自动压缩 300s 超时 | #5054 |
| **🧱 MCP 协议覆盖不全** | 仅支持 `tools`，缺失 `resources`、`prompts` 等基础原语 | #1803 |

---

> 📊 **日报小结**：本日版本迭代密度较高（4 个 release），但社区重心已从"基础功能补齐"过渡到"MCP 生态健壮性"和"BYOK 深度灵活化"两大方向。建议关注 1.0.93 系列对会话恢复与沙箱体验的修复效果，同时留意 BYOK 多模型能力是否随 [#3282](https://github.com/github/copilot-cli/issues/3282) 关闭进入正式发布。

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

<think>Let me analyze the GitHub data for OpenCode and generate a comprehensive daily report in Chinese for 2026-10-06.

Key observations from the data:
1. No releases in the past 24 hours
2. 50 issues updated, with top engagement on:
   - #15533: Auto-compaction infinite loop (26 comments, 12 likes)
   - #42421: V2 TODO support (18 comments)
   - #26195: MCP auth OAuth flow (10 comments, 11 likes)
   - Multiple V2 issues (V2 seems to be a major focus)
3. 50 PRs updated, with focus on:
   - V2 migration fixes
   - TUI improvements
   - Plugin system fixes
   - Provider integrations
   - Shell scanner (portable shell)
   - UI improvements

Let me identify the most important issues and PRs:

Top Issues by importance:
1. #15533 - Auto-compaction infinite loop (HIGH: 26 comments, 12 likes) - Critical bug
2. #42421 - V2 todo support (18 comments) - Major feature request
3. #26195 - MCP OAuth failure (10 comments, 11 likes) - Critical auth bug
4. #52269 - OpenAI intermittent failures (8 comments) - Reliability issue
5. #21737 - Custom Anthropic provider API key issue (8 comments) - Provider bug
6. #52904 - Console free tier error (7 comments) - User-facing issue
7. #52837 - tool.execute.before skip field (6 comments, 4 likes) - Feature request
8. #52931 - V2 todowrite/todoread missing (5 comments) - V2 regression
9. #45359 - Gemini "model turn not supported" (5 comments) - Provider bug
10. #52971 - Grok models unreachable (4 comments) - Provider outage
11. #49414 - Agent step loop unbounded (4 comments) - Critical bug
12. #52184 - V2 changelog missing (3 comments, 13 likes) - V2 process issue
13. #51928 - Copilot model sync (3 comments, 3 likes) - Provider bug
14. #53400 - MCP server name length (2 comments) - Critical silent failure
15. #52953 - Git < 2.45 sparse flag (3 comments) - Compatibility issue
16. #49928 - Web pageup/down scroll (3 comments) - UX issue with PR fix #53474

Top PRs:
1. #53422 - fix(cli): give plugins the host's Effect - Plugin system critical fix
2. #53305 - feat(app): preview Word/Excel/PPT files - Major feature
3. #53488 - feat(desktop): redesign browser bar - UI improvement
4. #52172 - fix(schema): effort-update and thinking-binding overrides - Bug fix
5. #53353 - fix(core): validate git branch names - Bug fix
6. #53479 - feat(core): enable portable shell scanner - Feature
7. #53482 - chore: remove unused dependencies - Cleanup
8. #53485 - feat(ui): design skills and design lint - Feature
9. #53483 - fix(tui): align wrapped hunk jumps - TUI fix
10. #53484 - fix(tui): reset workspace notice timer - TUI fix
12. #53475 - fix(opencode): migrate stale project worktree - Bug fix
13. #52734 - feat(core): proxy authentication - Feature
14. #53474 - fix(ui): scroll at full speed - UX fix

Feature trends:
- V2 migration issues (lots of V1→V2 regressions)
- Provider integration (Anthropic, OpenAI, Gemini, Grok, Copilot)
- MCP integration
- Plugin system
- TUI/UI improvements
- Theme requests
- Shell scanner (security)

Developer concerns:
- V2 stability issues
- Provider reliability
- Auth flows (OAuth, API key)
- Documentation/changelog gaps for V2
- Critical bugs (infinite loops, silent failures)

Let me now write the report.</think>

# OpenCode 社区动态日报
**日期：2026-10-06**

---

## 📌 今日速览

今日社区动态以 **V2 稳定性和迁移回归** 为主线：多条高优 Issue 集中在 V2 缺失 V1 关键能力（`todowrite`/`todoread`、自动压缩、版本更新日志）以及 Provider 在 V2 下的认证与路由异常；与此同时，CLI/TUI 侧的高优 PR 集中修复插件 Effect 注入冲突、便携式 Shell 扫描器默认开启、Web 滚动等长期积压问题。

---

## 🚀 版本发布

过去 24 小时内 **无新版本发布**。已合并但尚未形成 Release 的关键工作流包括：

- 便携式 Shell 扫描器在 local/dev 通道默认启用（[#53479](https://github.com/anomalyco/opencode/pull/53479)）
- V2 桌面端 Browser Bar 改版（[#53488](https://github.com/anomalyco/opencode/pull/53488)）
- Office 文件只读预览（[#53305](https://github.com/anomalyco/opencode/pull/53305)）

---

## 🔥 社区热点 Issues

1. **[#15533](https://github.com/anomalyco/opencode/issues/15533) — Auto-compaction 死循环（26 评论 / 👍12）**
   当助手以非 `tool-calls` 方式自然收尾时，`SessionCompaction.process()` 会无条件注入合成的 "Continue..." 用户消息，触发无限压缩请求。**为什么重要**：直接消耗 Token 与 API 配额、影响所有模型；点赞数与评论数均为本期最高，属于 P0 级会话控制缺陷。

2. **[#42421](https://github.com/anomalyco/opencode/issues/42421) — V2 原生 TODO 支持（18 评论）**
   V1 的 `todowrite`/`todoread` 工具在 V2（0.0.0-next-17403）运行时目录中消失，TUI 侧栏失去写入路径。**为什么重要**：影响所有依赖 TODO 列表做规划型任务的 Agent 工作流，是 V1→V2 迁移最显眼的回归之一。

3. **[#26195](https://github.com/anomalyco/opencode/issues/26195) — MCP OAuth 浏览器无法拉起（10 评论 / 👍11）**
   `opencode mcp auth gdrive` 报 "Authentication successful!" 但浏览器不弹出，Token 未落地。**为什么重要**：阻塞所有依赖 OAuth 的 MCP 集成（不仅是 Google Drive），点赞数表明影响面广。

4. **[#52269](https://github.com/anomalyco/opencode/issues/52269) — OpenAI 上游连接偶发失败（8 评论）**
   `upstream connect error / reset reason: remote connection failure` 在多模型、多会话间歇发生，自动重试无法解决。

6. **[#21737](https://github.com/anomalyco/opencode/issues/21737) — 自定义 Anthropic Provider 运行时丢 API Key（8 评论）**
   `opencode.json` 中可被发现，但选择模型并发起请求时 baseURL 下的密钥被丢弃。**为什么重要**：影响所有自托管/代理型 Anthropic 兼容端点的用户。

7. **[#52904](https://github.com/anomalyco/opencode/issues/52904) — Console "free tier 只能在 OpenCode 内使用"（7 评论）**
   用户在官方桌面端直接运行即触发错误。**为什么重要**：直接破坏"免费层"用户的可用性，且问题描述模糊，不利于用户自助恢复。

8. **[#52837](https://github.com/anomalyco/opencode/issues/52837) — `tool.execute.before` 增加 `skip` 字段（6 评论 / 👍4）**
   为确定性预执行门控提供声明式短路，避免插件用 throw 假信号绕过工具。

9. **[#52931](https://github.com/anomalyco/opencode/issues/52931) — V2 缺失内置 `todowrite/todoread`（5 评论）**
   V1 默认体验在 V2 消失，与 #42421 形成 V2 TODO 缺失的双重视角。

10. **[#52184](https://github.com/anomalyco/opencode/issues/52184) — V2 Release 无任何发布说明（3 评论 / 👍13）**
    `v2.0.20` 的 GitHub Release Body 仅 `release: v2.0.20`，官方 changelog 最新条目仍停留在 `v1.18.33`。**为什么重要**：高点赞（13）显示用户对"信息断层"的共识。

---

## 🧩 重要 PR 进展

1. **[#53422](https://github.com/anomalyco/opencode/pull/53422) — `fix(cli): give plugins the host's Effect`**
   解决插件/其 `node_modules` 解析到独立 `effect` / `@opencode/plugin` 副本问题，避免 `Schema` AST 哨兵与 Fiber 内部状态失配。**对插件作者而言是底层基础设施级修复。**

2. **[#53305](https://github.com/anomalyco/opencode/pull/53305) — `feat(app): preview Word, Excel and PowerPoint files`**
   基于 `BetterOffice` 的 Apache-2.0 Rust 引擎，WASM 化、离主线程，新增只读预览 `.docx/.xlsx/.pptx`。

3. **[#53488](https://github.com/anomalyco/opencode/pull/53488) — `feat(desktop): redesign the browser bar`**
   实现 Camille 设计的 Browser Bar，含状态/组件/Tooltip 多套 Figma 状态。

5. **[#53353](https://github.com/anomalyco/opencode/pull/53353) — `fix(core): validate git branch names`**
   校验 `topic/`、`topic.`、`topic//child`、`topic.lock` 等 Git 拒绝的命名，关闭 #48763。

6. **[#53479](https://github.com/anomalyco/opencode/pull/53479) — `feat(core): enable portable shell scanner on local and dev channels`**
   默认开启跨 Bash/Zsh/Dash/POSIX/PowerShell 的可移植 Shell 扫描器，作为 dogfood。

7. **[#52172](https://github.com/anomalyco/opencode/pull/52172) — `fix(schema): expose effort-update and thinking-binding overrides`**
   修复 Bedrock 路由 Anthropic 模型在 effort 更新后整批 400 的问题（关闭 #51146）。

8. **[#53485](https://github.com/anomalyco/opencode/pull/53485) — `feat(ui): add design skills and design lint for coding agents`**
   在 `@opencode/ui` 中内置 7 个设计系统 Skills + 5 条 lint 规则，与 UI 组件同版本对齐。

9. **[#53475](https://github.com/anomalyco/opencode/pull/53475) — `fix(opencode): migrate stale project worktree after folder rename`**
   项目文件夹改名后修正 `Project.fromDirectory` 钉死的 worktree 路径（关闭 #53476）。

10. **[#52734](https://github.com/anomalyco/opencode/pull/52734) — `feat(core): proxy authentication for Negotiate, NTLM, and Basic`**
    让 OpenCode 能应答代理 407 认证挑战，支持企业网关环境。

---

## 🎯 功能需求趋势

通过本期 Issue/PR 提炼，社区关注的功能方向按热度排序：

| 方向 | 代表性 Issue / PR |
|---|---|
| **V2 能力补齐 & 回归修复** | #42421、#52931、#52184、#52327、#48757、#40614 |
| **Provider 接入与稳定性**（OpenAI/Anthropic/Bedrock/Grok/Copilot/Vertex） | #52269、#21737、#45359、#52971、#51928、#48180、#36517、#52734 |
| **插件 / SDK 能力扩展** | #53422、#52837、#52893 |
| **MCP 体系健壮性** | #26195、#53400、#33749 |
| **TUI / Web UI 体验** | #49928、#53474、#53483、#53484、#53383 |
| **安全 / Shell 与 Git 兼容** | #52953、#53479、#53353 |
| **本地化（Office / 多媒体预览）** | #53305 |
| **主题与设计系统** | #53383、#53485 |

---

## 🧠 开发者关注点

**痛点：**

- **V2 信息断层与沉默失败**：发布说明缺失、Console 免费层误判、MCP 工具因命名超 64 字符被静默丢弃（#53400）——用户既看不见也修不掉。
- **会话循环失控**：#15533（自动压缩）与 #49414（`unknown` finish reason 无限请求风暴）是两座潜在"烧钱炸弹"。
- **V1→V2 迁移兼容性集中在 Anthropic thinking block binding**：#48757、#52325、#52327 三连。
- **底层冲突：Effect 副本问题**（#53422）反映 V2 在插件生态与运行时隔离上仍需打磨。

**高频需求：**

- **V2 发布透明度**（带 changelog/已知问题清单）
- **更稳健的 OAuth/MCP 认证体验**（浏览器拉起、Token 持久化）
- **声明式插件门控**（`skip` 字段、会话域事件订阅）
- **企业网络能力**（代理认证）
- **更细的 Git/Shell 兼容性边界**（#52953 `git < 2.45` 与可移植 Shell 扫描）

> 一句话总结：**V2 的"能力天花板"已经搭好，但"工程地基"（认证、迁移、错误可见性、文档）仍在补齐期**——这既是当前 Issue 流量的主要来源，也是下一个版本周期最值得跟踪的收敛点。

</details>

<details>
<summary><strong>jcode</strong> — <a href="https://github.com/1jehuang/jcode">1jehuang/jcode</a></summary>

<think>Let me analyze the GitHub data provided and generate a comprehensive Chinese daily report for the jcode community on 2026-10-06.

Key observations:
1. There's a new release v0.91.0 with Google Calendar integration and speed tiers
2. Multiple issues and PRs are focused on:
   - Swarm functionality bugs (worker management, coordinator interruption)
   - macOS/Windows specific issues (install, terminal input)
   - OpenAI-compatible provider issues
   - Provider name/identity bugs
   - Multi-browser support
   - CLI robustness (terminal failure handling)

Let me structure the report according to the requested sections.

I need to:
1. Create a "今日速览" section summarizing the most important updates
2. Detail the v0.91.0 release
3. Pick 10 most important issues
4. Pick 10 important PRs
5. Identify feature request trends
6. Summarize developer pain points

Let me carefully craft this in Chinese, professional but accessible.</think>

# jcode 社区动态日报 · 2026-10-06

---

## 📌 今日速览

今日 jcode 社区迎来 **v0.91.0 版本发布**，核心亮点是 Google 日历集成与 OAuth 引导流程的完善；与此同时，**Swarm 多 Agent 系统**成为当日最热的讨论焦点，多个高优先级 Bug（worker 失控、外部终端乱开、远程会话卡死）已在同日提交修复 PR 并合入。社区关注方向正在从"扩展 Provider"转向"**稳定性、可观测性与工程化**"。

---

## 🚀 版本发布

### v0.91.0 — Google Calendar and speed tiers（2026-10-06）

**主要更新：**

- 🗓️ **Google 日历工具内置化**：可通过 Google 登录选择授权的服务范围，原生支持事件的查看、新建、更新与删除
- 🔐 **引导式 Google OAuth 配置**：自动检测已有 gcloud 凭证，并校验生成的项目 ID，降低首次接入门槛
- ⚡ **速度分层（speed tiers）**：新增分级机制，可根据任务选择不同响应速度档位

> 这是首个把"工具（Tool）+ 身份（OAuth）+ 模型档位"打包交付的版本，标志着 jcode 从"CLI 聊天工具"向"个人 Agent 工作台"演进。

---

## 🔥 社区热点 Issues

| # | 标题 | 状态 | 为什么重要 |
|---|---|---|---|
| [#1737](https://github.com/1jehuang/jcode/issues/1737) | "/" 菜单残留导致终端/UI 异常 | OPEN | 当天新增，tmux + trixie-slim 容器下的可复现 Bug，涉及 TUI 状态清理逻辑 |
| [#1723](https://github.com/1jehuang/jcode/issues/1723) | 远程会话 `/restart` 后卡死并清空 transcript | CLOSED | **High 优先级**，Swarm 锁死锁 + 检查点 stub 导致数据丢失，是 P0 级数据安全问题 |
| [#1728](https://github.com/1jehuang/jcode/issues/1728) | 终止协调者后，子 worker 仍在空跑耗 Token | CLOSED | 影响 Swarm 使用成本与可中断性的核心问题 |
| [#1725](https://github.com/1jehuang/jcode/issues/1725) | Swarm worker 在外部终端窗口乱开 | CLOSED | VS Code/Cursor 用户被严重影响，破坏内联体验 |
| [#1730](https://github.com/1jehuang/jcode/issues/1730) | macOS daemon 升级后仍跑旧二进制 | CLOSED | 升级路径上的隐蔽陷阱，silent stale binary |
| [#1720](https://github.com/1jehuang/jcode/issues/1720) | 多浏览器支持：8766 端口冲突 + 缺 Chromium fork | CLOSED | Browser Agent Bridge 跨浏览器场景的关键缺口 |
| [#691](https://github.com/1jehuang/jcode/issues/691) | OpenRouter `name()` 应返回 profile_id | OPEN | 长存争议，影响 `--json` 输出正确性，已关联 PR |
| [#804](https://github.com/1jehuang/jcode/issues/804) | `jcode run --json` 报告的 provider 错误 | CLOSED | 与 #691 同源，Duplicate，体现 provider 标识系统性问题 |
| [#1717](https://github.com/1jehuang/jcode/issues/1717) | `executes_own_tools`：外部 Agent 自跑工具循环 | OPEN | 面向"jcode 作为前端 + 外部 Agent 后端"的范式扩展 |
| [#1718](https://github.com/1jehuang/jcode/issues/1718) | websearch：SearXNG 鉴权 + 缺少 LLM 友好引擎 | OPEN | 网络检索质量直接决定 Agent 实用性，社区呼声强烈 |

**社区反应：** 当日 Issue 中 7/12 为已关闭状态，且 4 个 Swarm 相关 Bug 当日提交、当日修复并合入（#1724/#1726/#1729/#1731），维护者响应极快。

---

## 🛠️ 重要 PR 进展

| # | 标题 | 作者 | 说明 |
|---|---|---|---|
| [#1735](https://github.com/1jehuang/jcode/pull/1735) | 终端在退出路径与登录流程中崩溃时存活 | @noboomu | 修复 SIGHUP/远端掉线时 stderr 不可写导致的 exit-101 panic |
| [#1724](https://github.com/1jehuang/jcode/pull/1724) | `/restart` 后会话恢复（swarm 死锁 + stub 清空） | @SiavZ | ✅ **已合并**，关闭 #1723，根治远程会话数据丢失 |
| [#1731](https://github.com/1jehuang/jcode/pull/1731) | 服务器在 symlink 切换后正确 reload | @SiavZ | ✅ 已合并，关闭 #1730，macOS 升级路径闭环 |
| [#1729](https://github.com/1jehuang/jcode/pull/1729) | 中断协调者时同步停止其 swarm workers | @SiavZ | ✅ 已合并，关闭 #1728，避免"幽灵 worker"持续耗 Token |
| [#1726](https://github.com/1jehuang/jcode/pull/1726) | `spawn_mode=auto` 让步于配置默认 | @SiavZ | ✅ 已合并，关闭 #1725，让 inline 模式真正生效 |
| [#1722](https://github.com/1jehuang/jcode/pull/1722) | 每次安装后清理旧版本（节省 9.3 GiB） | @SiavZ | 关闭 #1154，长期 dev 用户的"磁盘炸弹"治理 |
| [#1694](https://github.com/1jehuang/jcode/pull/1694) | `/agents` 支持每会话 worker 模型覆盖 | @SiavZ | 关闭 #1693，让多窗口可独立编排 swarm/review/judge 模型 |
| [#1692](https://github.com/1jehuang/jcode/pull/1692) | OpenAI 用量限额提前重置时清理标记 | @SiavZ | 关闭 #1686，与 #1613 联动，做"窗口滚动重置" |
| [#1687](https://github.com/1jehuang/jcode/pull/1687) | 限额与连接自动恢复有界化 | @SiavZ | 关闭 #1685，避免 stale 限额导致无限重试 |
| [#1597](https://github.com/1jehuang/jcode/pull/1597) | OpenAI-compatible 5xx/529 过载自动重试 | @SiavZ | 修复 #1596，对接 Openference 等中转服务的关键弹性增强 |

**观察：** @SiavZ 是当日最大贡献者，单人提交 6 个 PR，其中 5 个针对 Swarm/服务端稳定性，体现当前开发的"压舱石"角色。

---

## 📈 功能需求趋势

从近期 Issues 与 PR 中提炼的社区关注方向：

1. **🧠 Swarm 多 Agent 系统成熟化** — 协调/中断/恢复/隔离成为核心议题（#1723/#1725/#1728/#1694/#1722/#1724 等）
2. **🔌 Provider 兼容性与正确性** — `openai-compatible` 的身份识别、5xx 重试、用量限额精度（#691/#1597/#1692/#1687）
4. **🖥️ 跨平台体验打磨** — macOS 升级链路、Windows bash 可配置、VS Code/Cursor 集成、韩文输入法（#1730/#1291/#1725/#1727）
5. **🔐 身份 & OAuth 生态** — Google 日历、Codex catalog、Cyber access program（v0.91.0、#1505、#1507）
6. **🌐 工具链扩展** — websearch 引擎可配置、bash shell 可切换、MCP truncate（#1718/#1291/#1736）
7. **🧹 安装与磁盘治理** — 旧版本清理、reload 正确性（#1722/#1731）

---

## 💡 开发者关注点

社区反馈集中在以下痛点：

- **数据安全焦虑**：`/restart` 会清空 transcript 是高敏感问题（#1723），开发者要求"破坏性指令必须可逆"
- **Token 成本控制**：Swarm worker 中断后仍在烧钱（#1728），缺乏"取消传播链"
- **可观测性缺失**：缺少对 spawned worker、限额重置、reload 决策的可视化日志
- **升级路径不可见**：macOS 上 daemon 静默跑旧版本，用户毫无察觉
- **外部生态衔接**：希望 jcode 既能作为"前端壳"接入自跑工具的外部 Agent（#1717），又需要更稳定的中转 provider 支持（#1597）
- **磁盘管理**：长期使用 self-dev 后 `builds/versions/` 累积到 9.3 GiB，亟需 GC 策略（#1722）
- **本地化输入法**：韩文/中文等 CJK 输入法下快捷键冲突（#1727、#1064），阻碍国际用户增长

---

> 📊 **日报小结**：v0.91.0 把 jcode 推向"个人 Agent 工作台"；而 v0.92 的方向显然集中在 **Swarm 稳定性 + 跨平台一致性 + Provider 弹性**。建议关注 @SiavZ 的 Swarm 系列 PR 与 OpenAI-compatible 重试链路，它们将在下个版本成为质量基线。

</details>

<details>
<summary><strong>pi</strong> — <a href="https://github.com/earendil-works/pi">earendil-works/pi</a></summary>

<think>Let me analyze the GitHub data for the pi community and generate a comprehensive daily report in Chinese for 2026-10-06.

Key observations:
1. Two releases in 24 hours: v1.0.4 and v1.0.3
   - v1.0.4: Tool patterns and --no-mcp flag
   - v1.0.3: Azure Foundry Chat Completions support

2. Most active Issues:
   - #4945: openai-codex Connection Reliability (81 comments, 34 likes) - HIGH engagement
   - #10031: Pi stuck in "Working..." with ESC (20 comments)
   - #9361: Windows shellPath ignored (13 comments)
   - #8834: Opt-in package namespace (closed, no-action)
   - #5581: Custom messages bypass before_agent_start (9 comments)
   - #9335: openai-responses configuration_update (closed)
   - #10074: Anthropic tool calls corrupted non-ASCII (7 comments)
   - #10267: before_agent_start prompt dropped (6 comments)
   - #10480: openai usage limit reset (5 comments)
   - #9980: OpenRouter cost calculation off (5 comments)
   - #10063: Anthropic OAuth effort level (closed)

3. PRs:
   - #10197: Unify package artifact validation
   - #10538: Extension bash tools inherit session shell (closes #9361)
   - #10443: stdin dead-terminal errors
   - #10533: durable reject cycle waits
   - #10530: Add awaits to tool search functions
   - #10410: thinking budget and websocket timeout
   - #10286: OpenRouter total cost
   - #10521: inline $ref for NVIDIA NIM
   - #10528: refactor nix package (closed)
   - #10511: Prune managed installs
   - #10513: entry cutoffs in conversation context
   - #10503: preserve ANSI state (closed)
   - #9714: Azure Foundry Chat Completions (closed)
   - #10495: mintty OSC 4 replies (closed)
   - #9880: publish configuration schemas
   - #8383: send LOW to disable thinking on gemini (closed)
   - #10356: keep syntax colors (closed)

Let me select the top 10 most notable issues based on engagement/comments and relevance.

Top 10 Issues:
1. #4945 (81 comments) - openai-codex reliability - HIGHEST priority
2. #10031 (20 comments) - Working... stuck
3. #9361 (13 comments) - Windows shellPath
4. #5581 (9 comments) - before_agent_start bypass
5. #10074 (7 comments) - Anthropic corrupted non-ASCII
6. #10267 (6 comments) - before_agent_start dropped
7. #10480 (5 comments) - usage limit reset
8. #9980 (5 comments) - OpenRouter cost
9. #10272 (3 comments) - stdin EIO crash
10. #10489 (2 comments) - forceSystemPrompt cache miss

For PRs, top 10:
1. #10538 - Extension bash tools inherit (closes #9361)
2. #10197 - Unify package artifact validation
3. #10443 - stdin dead-terminal errors (closes #10272)
4. #10533 - durable reject cycle waits
5. #10286 - OpenRouter total cost
6. #10521 - $ref inline for NVIDIA NIM
7. #10410 - thinking budget options
8. #10530 - awaits for tool search
9. #10511 - prune managed installs
10. #9880 - publish configuration schemas

Feature trend analysis:
- Model provider support: Azure Foundry Chat Completions, OpenRouter, NVIDIA NIM
- Windows/Platform compatibility: shell paths, WSL, drive-letter casing
- Reliability: stuck "Working..." states, stdin crashes, usage limits
- Cost/pricing accuracy: OpenRouter, Radius gateway
- Durable (background tasks): cycle waits, progress commits, thinking budget
- Extension system: package namespace, schema validation, before_agent_start events
- Configuration schemas (JSON Schema generation)

Developer pain points:
- Reliability issues with TUI getting stuck
- Cross-platform Windows issues (shell paths, drive letters, WSL)
- Token counting/cost accuracy
- Cache preservation for prompt changes
- Anthropic API quirks (effort levels, tool argument corruption)
- pi-durable workflow issues

Let me now compose the report in Chinese.</think>

# Pi 社区动态日报 · 2026-10-06

## 📌 今日速览

今日社区节奏密集，**24 小时内连发两个版本**（v1.0.3、v1.0.4），重点新增 Azure Foundry Chat Completions 支持与更精细的工具筛选模式（`--tools` 支持通配符、`--no-mcp` 一键关闭 MCP）。与此同时，**Issues 区呈现明显的"可靠性 + 跨平台兼容性"双重主题**：长期挂起的 openai-codex 连接稳定性问题（#4945，81 条讨论）仍是社区最大痛点，Windows 平台的 shell 解析、drive-letter 大小写等系统级 Bug 也在 v1.0.4 通过 #10538 得到修复。

---

## 🚀 版本发布

### v1.0.4（最新）
- **Tool patterns + `--no-mcp`**：`--tools` / `--exclude-tools` 现支持 `*` 通配符，可精细控制工具集，例如 `--tools read,codemode,'mcp__radius__*'` 仅保留某个 MCP 服务器的工具
- 改进默认行为：`--tools` 现在**保留** MCP 工具，除非显式以 `mcp__` 开头排除
- 新增 `--no-mcp`，单次运行关闭 MCP

### v1.0.3
- **Azure Foundry Chat Completions**：`azure` provider（由 `azure-openai-responses` 重命名而来）新增对 Foundry Chat Completions 部署的支持，首发支持 `azure/deepseek-v4-pro`
- 文档：[Azure OpenAI](https://github.com/earendil-works/pi/blob/v1.0.3/packages/coding-agent)

---

## 🔥 社区热点 Issues（Top 10）

| # | Issue | 热度 | 核心要点 |
|---|-------|------|---------|
| 1 | [#4945](https://github.com/earendil-works/pi/issues/4945) openai-codex 连接可靠性 | 💬 81 / 👍 34 | `gpt-5.5` 在 TUI 中频繁卡死在 `Working...`，无流式输出也无错误，唯一恢复方式是 ESC。已进入 `[inprogress]`，是当前社区最大痛点 |
| 2 | [#10031](https://github.com/earendil-works/pi/issues/10031) ESC 中断思考后卡死 | 💬 20 / 👍 3 | 自 v0.84.0 起，按 ESC 停止思考后 Pi 经常卡死，必须 CTRL+C + `pi -c` 恢复，多机复现 |
| 3 | [#9361](https://github.com/earendil-works/pi/issues/9361) Windows shellPath 解析非确定性 | 💬 13 | 加载扩展后 `shellPath` 被静默忽略，最终回退到 PATH 中的 WSL `bash.exe`，已被 **#10538 修复** |
| 4 | [#5581](https://github.com/earendil-works/pi/issues/5581) `pi.sendMessage()` 绕过 `before_agent_start` | 💬 9 / 👍 4 | `triggerTurn: true` 直接走 `_runAgentPrompt`，绕过了 `emitBeforeAgentStart`，导致扩展钩子失效 |
| 5 | [#10074](https://github.com/earendil-works/pi/issues/10074) Anthropic 非 ASCII 编辑参数被静默损坏 | 💬 7 | Claude 编辑含韩文等非 ASCII 文件时，`\uXXXX` 中的 `u` 被吞掉变成控制字符，可损坏文件，已追踪三周 |
| 6 | [#10267](https://github.com/earendil-works/pi/issues/10267) `before_agent_start` 注入的 prompt 文本被丢弃 | 💬 6 / 👍 2 | 后台任务通知、plan-mode 续接、重试、resume 等无用户消息触发的轮次，会丢弃扩展注入的 prompt，导致重复计费 |
| 7 | [#9980](https://github.com/earendil-works/pi/issues/9980) OpenRouter 成本估算偏差 2-3 倍 | 💬 5 / 👍 1 | 模型目录用最便宜 provider 的价格，导致 GLM-5.3-flash 等热门开源模型成本严重低估，PR #10286 正在用 OpenRouter 上报的实际账单修复 |
| 8 | [#10480](https://github.com/earendil-works/pi/issues/10480) openai 直接连接不识别手动重置 | 💬 5 | ChatGPT Pro 100 额度重置后仍显示用满，临时方案需 logout/login 切换 provider |
| 9 | [#10272](https://github.com/earendil-works/pi/issues/10272) `stdin read EIO` 被记为崩溃 | 💬 3 | 终端关闭/ssh 中断时 Node 抛 `read EIO`，但 `process.stdin` 没有 `error` 监听器，被上报为崩溃而非走 emergency 退出，**PR #10443 已修复** |
| 10 | [#10489](https://github.com/earendil-works/pi/issues/10489) `forceSystemPrompt` 影响 prompt-cache | 💬 2 | 任何扩展在 `before_agent_start` 返回 `systemPrompt` 都会重写整个 system messages，导致 `tool_search` 之后的 prompt-cache 失效 |

> 趋势补充：#10063（Anthropic OAuth `Invalid effort level`，已 closed）、#10367（LiteLLM 推理 token 重复计费）、#10519（Nix 包覆盖用户 PATH）等也都是 v1.0.x 上线后冒出的高敏感度问题。

---

## 🛠 重要 PR 进展（Top 10）

| PR | 类型 | 内容摘要 |
|----|------|---------|
| [#10538](https://github.com/earendil-works/pi/pull/10538) ✅ | fix | **修复 #9361**：扩展 bash 工具继承会话的 `shellPath`/`shellCommandPrefix`；Windows bash 发现跳过 WSL 启动器 |
| [#10197](https://github.com/earendil-works/pi/pull/10197) 🔄 | feat | 统一 package artifact 校验：单一 manifest 驱动、content-addressed artifact set，让本地校验与发布产物一致 |
| [#10443](https://github.com/earendil-works/pi/pull/10443) ✅ | fix | **修复 #10272**：`stdin` 加入 terminal-error 监听器，`read EIO` 走 `emergencyTerminalExit` 而非崩溃 |
| [#10533](https://github.com/earendil-works/pi/pull/10533) 🔄 | fix(durable) | **修复 #10411**：durable 引擎检测并拒绝会形成环的 wait，改为在该 wait 处直接失败而非挂死 |
| [#10286](https://github.com/earendil-works/pi/pull/10286) 🔄 | fix(ai) | OpenRouter 改用其上报的实际账单金额，**修复 #9980** 成本估算偏差 |
| [#10521](https://github.com/earendil-works/pi/pull/10521) 🔄 | fix(ai) | **修复 #10270**：内联 `$ref` 工具 schema，让 nemotron-3.5-super-vl-preview、qwen3.8-flash-next 能正确解析 `Settings` 类工具参数 |
| [#10410](https://github.com/earendil-works/pi/pull/10410) 🔄 | feat(durable) | durable `ConversationStreamOptions` 暴露 `thinkingBudgets` 与 `websocketConnectTimeoutMs` |
| [#10530](https://github.com/earendil-works/pi/pull/10530) ✅ | doc | 系统提示中为 codemode 工具搜索函数标注 `async`，避免 LLM 漏掉 `await` 导致搜索无结果 |
| [#10511](https://github.com/earendil-works/pi/pull/10511) 🔄 | chore | 关闭 #10392：自更新后只保留新版本与"触发更新"那一版，自动清理历史安装 |
| [#9880](https://github.com/earendil-works/pi/pull/9880) 🔄 | feat | 为 `models.json`/`settings.json`/`keybindings.json`/主题生成并发布 JSON Schema，配套漂移检测 |

> 另：#9714（Azure Foundry Chat Completions，已合入 v1.0.3）、#10503（ANSI 跨 chunk 状态保持）、#10495（mintty OSC 4 处理）、#8383（Gemini 3.7 Flash 关闭思考用 LOW）均已 closed 合并。

---

## 📈 功能需求趋势

从 50 条当日活跃 Issues + 17 条 PR 综合提炼：

1. **Provider 模型覆盖广度**：Azure Foundry、OpenRouter、NVIDIA NIM、Anthropic OAuth、Gemini 3.7 Flash 等多 provider 的兼容性、计费、cache 行为是高频主题（#9714、#9980、#10063、#10521、#8383）
2. **pi-durable 工作流增强**：cycle 检测、进度提交可配置、thinking budget、超时控制（#10533、#10357、#10410、#10513）
3. **扩展 / 钩子系统稳定性**：`before_agent_start` 被绕过、systemPrompt 覆盖、forceSystemPrompt cache 失效（#5581、#10267、#10489）
4. **配置工程化**：JSON Schema 发布、Package 命名空间、artifact 校验（#9880、#8834、#10197）
5. **TUI / 跨平台可靠性**：Working... 卡死、stdin EIO、Windows shellPath、drive-letter 区分、WSL 启动器冲突（#4945、#10031、#9361、#10272、#10488）

---

## 🎯 开发者关注点（社区痛点 Top 5）

1. **"卡死却无错"的 TUI 状态机**：openai-codex 连接、ESC 中断思考两条路径都会出现无流式、无错误、无工具调用的假死，是最被诟病的体验黑洞（#4945、#10031）
2. **成本/计费的"看起来对但实际错"**：OpenRouter 选最便宜 provider、Radius gateway 接受空 `cost: {}` 产生 NaN、LiteLLM 推理 token 重复计算——开发者越来越关心"我以为花了多少 ≠ 实际花了多少"
3. **Windows 平台仍是边角案例**：shell 解析、bash 发现、drive-letter 大小写、mintty 控制序列，每一个看起来都很小但合起来严重影响装机体验
4. **扩展 API 的"半透明"**：开发者反馈钩子被绕过（#5581）、注入被丢弃（#10267）、cache 被破坏（#10489），希望扩展生命周期更可预测
5. **大模型 API 兼容性是永无止境的**：Anthropic 不同的 effort level、`strict: true` 被拒绝、`\uXXXX` 被解析器吞掉、`reasoning_tokens` 重复计费……任何一个 provider 升级都可能让本地链路无声失效

---

> 📅 报告基于 2026-10-06 当日 GitHub 公开数据。整体来看，pi 已进入"**稳定期 + 生态扩展期**"：v1.0.x 在补可靠性债，同时通过 `--tools` 通配符、`--no-mcp`、JSON Schema 发布、Azure Foundry/pi-durable 增强等持续拓展能力边界。

</details>

---
*本日报由 [Big Model Radar](https://github.com/96loveslife/big_model_radar) 自动生成。*
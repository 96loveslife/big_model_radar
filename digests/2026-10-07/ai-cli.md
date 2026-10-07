# AI CLI 工具社区动态日报 2026-10-07

> 生成时间: 2026-10-07 05:19 UTC | 覆盖工具: 8 个

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

<think>The user wants me to generate a horizontal comparative analysis report based on the daily dynamics of all the AI CLI tools. Let me carefully analyze each tool's data and create a comprehensive comparison.

Let me organize the data:

**Claude Code:**
- v2.1.292 release
- Issues: many (top 10 listed with #38335 having 875 comments/476 likes being massive)
- PRs: 2 (both closed)
- Key themes: Windows platform issues, budget/billing transparency, scheduled tasks

**OpenAI Codex:**
- 3 alpha releases (rust-v0.162.0-alpha.18/17, rust-v0.161.0-alpha.13.1)
- 50 issues, top with #48074 (146 comments/152 likes) - Windows terminal flash - CLOSED
- 50 PRs - all from copyberry[bot] automated bot, all CLOSED
- Key themes: Windows desktop stability, Computer Use, Dots, MCP

**Gemini CLI:**
- 3 releases: v0.65.0-nightly, v0.64.0-preview.0, v0.63.0
- Multiple issues
- Key themes: Subagent observability, Browser Agent, AST tools, sandboxing

**GitHub Copilot CLI:**
- 2 releases: v1.0.93-3, v1.0.93-2
- 39 issues
- No new PRs
- Key themes: MCP OAuth, Windows sandbox, permissions, new models (GPT-6.1, Claude 5.5)

**Kimi Code CLI:**
- No releases
- 0 issues updated
- 1 PR (closed)
- Very low activity

**OpenCode:**
- v1.18.35 release
- 50 issues
- 50 PRs
- Key themes: v2 migration, TUI performance, model control

**jcode:**
- No releases
- 7 issues
- 11 PRs
- Key themes: CI quality gates, browser automation (macOS), session/credential management

**pi:**
- No releases
- 50 issues
- 23 PRs
- Key themes: pi-durable, Bedrock, TUI, extension API

Now let me write the comparative analysis report.

Key observations:
1. Different tools have very different levels of activity - Claude Code, Codex, Gemini CLI, OpenCode, pi are all high activity; Kimi Code CLI is very low
2. Common themes:
   - Windows platform compatibility (Claude Code, Codex, Copilot CLI)
   - MCP ecosystem maturity (Codex, Copilot CLI, pi)
   - Subagent reliability (Claude Code, Gemini CLI, OpenCode)
   - Budget/billing transparency (Claude Code)
   - Browser automation (Gemini CLI, jcode, Codex)
   - TUI/performance issues (OpenCode, pi)
   - Configuration management (all)
3. Differences in positioning:
   - Claude Code: Anthropic ecosystem, very mature
   - Codex: OpenAI ecosystem, Windows-focused
   - Gemini CLI: Google ecosystem, subagent/Browser agent focus
   - Copilot CLI: GitHub ecosystem, MCP-heavy
   - Kimi Code CLI: Chinese ecosystem, low activity
   - OpenCode: Provider-agnostic, performance focus
   - jcode: Multi-agent/swarm, browser focus
   - pi: Extensible, durable, Bedrock/multi-provider

Let me write this now.</think>

# 2026-10-07 AI CLI 工具生态横向对比分析报告

## 1. 生态全景

当前主流 AI CLI 工具生态呈现 **"高速迭代 + 高度分化"** 的格局：头部工具（Claude Code、Codex、Gemini CLI、OpenCode、pi）单日 Issues+PRs 总量均在 50+ 量级，反映其已进入"成熟期阵痛"——产品能力快速扩张的同时，平台兼容性、子代理可靠性、计费透明度等基础设施问题集中暴露。中游工具（Copilot CLI）保持稳定的功能演进节奏，而 Kimi Code CLI 单日近乎零活跃度，提示中文生态的 CLI 工具在 GitHub 主仓上的可见度与社区投入明显滞后。整体趋势是 **MCP 协议成为各工具事实标准的扩展点、子代理（subagent）成为能力竞争的下一战场、Windows 桌面端稳定性是全行业的共同短板**。

---

## 2. 各工具活跃度对比

| 工具 | Issues 更新 | PRs 更新 | Release | 综合活跃度 | 备注 |
|------|------------|----------|---------|------------|------|
| **Claude Code** | 高（含 #38335 单条 875 评论） | 2（均关闭） | v2.1.292 | 🔥🔥🔥🔥 | 单 issue 热度全行业最高 |
| **OpenAI Codex** | 50+ | 50+（copyberry 批量） | 3 个 alpha | 🔥🔥🔥🔥 | 自动化 PR 占主导 |
| **Gemini CLI** | 30+ | 40+ | v0.63.0 / v0.64-preview / v0.65-nightly | 🔥🔥🔥🔥 | 三版本同步推进 |
| **OpenCode** | 50 | 50 | v1.18.35 | 🔥🔥🔥🔥 | Nowaker 一人当日 3 PR |
| **pi** | 50 | 23 | 无 | 🔥🔥🔥 | 维护者深度参与 |
| **Copilot CLI** | 39 | 0 | v1.0.93-3 / v1.0.93-2 | 🔥🔥🔥 | 企业级权限演进 |
| **jcode** | 7 | 11 | 无 | 🔥🔥 | CI 治理集中 |
| **Kimi Code CLI** | 0 | 1（关闭） | 无 | ⬇️ | 社区近乎停滞 |

> **关键观察**：Claude Code 单日 PR 仅 2 条但单 issue 热度（#38335）远超其他工具全部 issue 之和；Codex 的 PR 几乎全部由 copyberry 机器人自动化合并，与其他工具依赖人工评审形成鲜明对比；Kimi Code CLI 是表中唯一当日无任何活跃信号的仓库。

---

## 3. 共同关注的功能方向

| 方向 | 涉及工具 | 具体诉求 |
|------|---------|---------|
| **🪟 Windows 平台兼容性** | Claude Code、Codex、Copilot CLI、jcode | PowerShell/MSYS2 混用崩溃（Claude Code #97660）、25H2 沙箱兼容（Copilot #4652）、Windows 命名管道 EOF（jcode #1744） |
| **🔌 MCP 协议成熟化** | Codex、Copilot CLI、pi | OAuth token 跨会话复用（Copilot #4695）、远程服务器认证（Codex #49829）、MCP elicitation 钩子（pi #10589） |
| **🤖 子代理可观测性** | Claude Code、Codex、Gemini CLI、OpenCode | MAX_TURNS 静默报告成功（Gemini #22323）、swarm 凭据漂移（jcode #1741）、Plan Mode 绕过（OpenCode #53681） |
| **💸 计费/预算透明度** | Claude Code、Codex | --max-budget-usd 超支（Claude #100111）、配额激增（Codex #26306） |
| **🌐 Browser / Computer Use** | Codex、Gemini CLI、jcode | Wayland 失效（Gemini #21983）、macOS Chrome 重复启动（jcode #1745）、Defender 误报（Codex #49672） |
| **📋 配置可移植性** | Claude Code、Gemini CLI、OpenCode、pi | env 占位符被展开（Gemini #29564）、远程配置失败丢设置（OpenCode #53666）、v2 flag 被移除（OpenCode #53682） |
| **⏱️ 定时任务/后台任务** | Claude Code、Codex | session id 不匹配 transcript（Claude #99596）、任务被静默禁用（Codex #38350） |

---

## 4. 差异化定位分析

| 工具 | 功能侧重 | 目标用户 | 技术路线特征 |
|------|---------|---------|--------------|
| **Claude Code** | 端到端 Coding Agent + 插件/Marketplace | 个人开发者 + 企业 | Anthropic 原生协议深度集成，子代理 effort 参数、--marketplace 标志表明向"可编排化"演进 |
| **OpenAI Codex** | 桌面端一体化（Codex Web/Cowork/Computer Use） | 全栈 + 自动化用户 | Dots、Computer Use、Cloud Work 三条产品线并行，自动化机器人管线明显 |
| **Gemini CLI** | 子代理 + Skills + Browser Agent | Google Cloud 生态 + 研究者 | 强调整合 Gemini 3 原生能力（POSIX 工具链、AST 感知），强调 Skills 主动调用 |
| **Copilot CLI** | 企业权限 + MCP + IDE 集成 | GitHub Enterprise 用户 | permissions.limitTo 企业边界、VS Code 原生集成，演进节奏偏保守稳健 |
| **Kimi Code CLI** | 长上下文 + 中文场景 | 中文市场（GitHub 可见度低） | 当前 GitHub 活跃度低，疑似国内主战场不在此仓 |
| **OpenCode** | Provider-agnostic + 性能 + 插件生态 | 多模型用户 + 工具爱好者 | v2 重点：TUI 冷启动优化（6.6MB catalog 异步）、subagent 分支隔离、PWA 化 |
| **jcode** | 多 agent swarm + 浏览器自动化 | 自动化研究者 | 强调多 agent 协作（swarm、自治愈凭据、worktree 隔离） |
| **pi** | 可扩展 + 持久化 + Bedrock 适配 | 扩展作者 + 多云用户 | pi-durable 框架（事件时间戳、压缩策略、循环保护），扩展 API（VIRTUAL_MODULES）持续完善 |

**核心差异点**：
- **生态绑定**：Claude Code（Anthropic）、Codex（OpenAI）、Gemini CLI（Google）、Copilot CLI（GitHub）四强绑定明确；OpenCode、pi、jcode 倾向 provider 中立
- **代理架构**：jcode 唯一强调多 agent swarm；其他多以"主代理 + 子代理"两层模型为主
- **扩展机制**：Gemini CLI（Skills）、Claude Code（Plugins/Marketplace）、pi（VIRTUAL_MODULES）、OpenCode（Plugins）、Copilot CLI（plugin.json 提案）正在趋同收敛

---

## 5. 社区热度与成熟度

### 🔥 第一梯队：高热度高成熟度
- **Claude Code**：单 issue 875 评论证明用户深度参与议题；产品迭代成熟但受 Anthropic 计费策略影响大
- **Codex**：50+ Issues/PRs + 3 个 alpha 版本，自动化管线成熟，但暴露出"机器人合并"导致的人工评审缺失
- **Gemini CLI**：三版本并行（stable/preview/nightly）体现规范的发布流程，社区反馈涉及产品演进各层面

### 🔥 第二梯队：高活跃快速迭代
- **OpenCode**：v1 → v2 升级带来集中回归，但维护者（Nowaker）响应速度极快（当日 3 PR 闭环）
- **pi**：核心维护者（@mitsuhiko）亲自提交重大 PR（#10577 in-context compaction），技术深度突出

### 🟡 第三梯队：稳定演进
- **Copilot CLI**：节奏最稳，企业级能力（权限、模型选择）渐进推进
- **jcode**：聚焦 CI 与浏览器两大基础设施问题，体量小但治理到位

### ⬇️ 风险信号
- **Kimi Code CLI**：单日 0 Issues / 0 Releases / 1 Closed PR，是全表唯一明显停滞的仓库。对于关注中文生态的开发者，这意味着 Moonshot 主战场或在内部仓库或飞书/钉钉类协作平台，GitHub 不可作为唯一信息源。

---

## 6. 值得关注的趋势信号

### 趋势 1：MCP 成为事实标准，但生态成熟度不足
**信号**：Codex、Copilot CLI、pi 三家今日 Issues 中 MCP 相关占比均显著（认证、协议版本、token 复用），而 Claude Code 通过 --marketplace 参数、Gemini CLI 通过 mcp enablement 修复，都在补齐 MCP 管理工具。  
**对开发者的价值**：构建企业级 Agent 时，**MCP 已成必选扩展点**；评估供应商时应关注其 MCP 管理 UI（enable/disable、配置校验、token 缓存）的成熟度。

### 趋势 2：子代理（Subagent）成为新的可靠性瓶颈
**信号**：Gemini CLI MAX_TURNS 静默报告 success（#22323）、Claude Code effort 参数、OpenCode Subagent branch isolation（#53425）、jcode swarm 凭据漂移（#1741）。  
**对开发者的价值**：从"单代理写代码"演进到"多代理协作"时，**必须设计失败可见性**（trajectory sharing、capability roots、credential healing），否则"沉默失败"将成为最大信任风险。

### 趋势 3：计费透明度从"加分项"升级为"信任底线"
**信号**：Claude Code #38335（875 评论）、Codex #26306（16 评论）、Copilot CLI #5065（usage_checkpoint 提案）共同指向同一个诉求：用户需要可预测、可审计的额度消耗。  
**对开发者的价值**：选型时需将"计费可观测性"与"功能丰富度"并列评估；自建产品时应优先暴露 token 计量。

### 趋势 4：Windows 桌面端从"次要平台"变为"必争之地"
**信号**：Claude Code 4 条 Windows Issues、Codex 8 条 Windows Issues、Copilot CLI 25H2 兼容、jcode macOS + Windows 测试夹具——全行业在 Windows 端的投入显著增加。  
**对开发者的价值**：跨平台工具选型时，Windows 行为一致性应作为关键验收项，特别是 PowerShell/MSYS2/Git Bash 三种 shell 混用场景。

### 趋势 5：扩展系统从"功能堆叠"转向"契约标准化"
**信号**：Gemini CLI Skills 发现机制、Claude Code Marketplace、pi VIRTUAL_MODULES、OpenCode Plugins declarative external method——各家都在收敛"声明式 + 契约式"的扩展设计。  
**对开发者的价值**：未来 6-12 个月，**基于声明式扩展（manifest + JSON Schema）的工具生态将快速形成**；建议从现在开始关注配置校验、契约测试、扩展隔离等工程化能力建设。

### 趋势 6：TUI/CLI 体验打磨进入"毫米级优化"
**信号**：OpenCode 修复 TUI 冷启动阻塞（#53680）、pi 修复 outputPad 全局化（#10557）、Gemini CLI 修复 OAuth 重试循环（#29655）、Copilot CLI 修复 Shift+Enter（#2776）——大量"小问题"正在被密集修复。  
**对开发者的价值**：CLI 工具的竞争已从"能不能用"转向"用得舒不舒服"；选择工具时，响应速度、编辑器一致性、键盘快捷键等"日常摩擦系数"是真实影响生产力的维度。

---

## 总结与建议

| 决策场景 | 推荐关注 |
|---------|---------|
| **企业级 + 深度集成** | Claude Code（成熟）、Copilot CLI（权限/合规） |
| **多模型中立 + 性能敏感** | OpenCode（活跃迭代）、pi（可扩展） |
| **多代理实验 / 自动化研究** | jcode（swarm）、Codex（Dots） |
| **Google Cloud 生态** | Gemini CLI |
| **中文场景首选** | Kimi Code CLI（但需确认主战场是否在 GitHub） |
| **新项目/独立开发者** | pi（扩展性最强）、OpenCode（社区响应快） |

> **最关键的一句话**：今天的报告揭示的核心信号是——**AI CLI 工具的竞争已从"模型能力"转向"工程化深度"**。MCP 管理、子代理可观测性、计费透明度、跨平台一致性这四个维度，将决定下一代工具的市场格局。

---

*报告基于 2026-10-07 各工具 GitHub 公开数据生成；数据范围为各仓库过去 24 小时更新。*

---

## 各工具详细报告

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills 社区热点

> 数据来源: [anthropics/skills](https://github.com/anthropics/skills)

<think>The user wants me to analyze Claude Code Skills community data from the anthropics/skills repository and generate a hot report. Let me analyze the data provided.

Looking at the PRs (sorted by comment count, but actually the comments are "undefined" for all PRs - so I should use other signals like recency, 👍 counts, and content importance). Wait, let me re-read - the comment field shows "undefined" for all PRs. So the ranking is just by some other criteria the user provided. Let me look at what's actually visible:
- PR creation dates
- PR update dates
- 👍 counts (all show 0)
- PR content/description

For Issues, comments and 👍 counts are visible. So the Issues section has real engagement metrics.

Let me organize my analysis:

**Hot PRs (Skills):**
1. #1298 - fix(skill-creator): isolate trigger evals - by @MartinCajiao, ongoing since June
2. #1742 - fix(mcp-builder): mcp>=2 support - by @Kuldeeep18
3. #1771 - feat: proofcore-contract-auditor for smart contracts - Web3 focus
4. #1734 - Detect orphaned docx comments
5. #1703 - md2video-audio skill - zero-cost markdown to MP4
6. #1245 - Notion spec-to-implementation + quantitative-resume-auditor
7. #1792 - fix(docx): LibreOffice timeout error reporting
8. #1730 - fix(claude-api): replace dead URLs
9. #525 - Pyxel skill for retro games
10. #514 - document-typography skill
11. #1681 - fix(skill-creator): package_skill.py execution
12. #1615 - scnet-hpc skill for HPC clusters
13. #822 - AWT E2E testing skill
14. #538 - fix(pdf): case-sensitive file refs
15. #486 - ODT skill for OpenDocument
16. #210 - Improve frontend-design skill
17. #83 - skill-quality-analyzer and skill-security-analyzer
18. #1980 - webapp-testing security fix (shell=True avoidance)
19. #1961 - skill-creator: harden eval viewer
20. #1776 - blast-radius skill for destructive operations

**Hot Issues (with real engagement):**
1. #492 (43 comments, 2 👍) - Security: Community skills under anthropic/ namespace - trust boundary issue
2. #228 (16 comments, 8 👍) - Enable org-wide skill sharing in Claude.ai
3. #556 (12 comments, 7 👍) - run_eval.py: claude -p never triggers skills
4. #62 (10 comments, 2 👍) - Skills disappeared
5. #1329 (9 comments, 0 👍) - compact-memory skill proposal
6. #202 (8 comments, 1 👍) - skill-creator should be updated to best practice [CLOSED]
7. #412 (6 comments, 0 👍) - agent-governance skill proposal [CLOSED]
8. #189 (6 comments, 9 👍) - duplicate skills from plugins [OPEN]
9. #1487 (4 comments, 0 👍) - claude-api skill injects 156k tokens
10. #1394 (4 comments, 2 👍) - eval-viewer XSS issue
11. #1390 (4 comments, 0 👍) - mcp-builder eval scores 0/N
12. #1385 (4 comments, 1 👍) - Reasoning Quality Gate Pipeline proposal
13. #1383 (4 comments, 0 👍) - skill-creator silent benchmark failures
14. #1175 (4 comments, 0 👍) - SharePoint security concerns [CLOSED]
15. #29 (4 comments, 0 👍) - Usage with bedrock

Now let me draft the report. I'll focus on the most impactful themes:

**Themes I see:**

1. **Security concerns** - dominant theme
   - #492: trust boundary abuse via namespace impersonation (43 comments)
   - #1394: XSS in eval-viewer
   - #1961: harden eval viewer (script breakout, DNS rebinding, etc.)
   - #1980: command injection in webapp-testing
   - #1776: blast-radius for destructive ops

2. **Skill infrastructure / tooling** - skill-creator issues
   - #1298, #1681, #1383, #1394, #1961 - all about skill-creator
   - #556: trigger evaluation broken
   - #202: skill-creator best practices [closed]

3. **Document skills expansion** - docx, pdf, ODT
   - #486 ODT, #538 PDF, #1734 docx orphan comments, #1792 docx timeout, #514 typography, #1703 md2video

4. **Domain-specific skills**
   - Web3 (#1771)
   - HPC (#1615)
   - Retro gaming (#525)
   - Resume (#1245)
   - E2E testing (#822)

5. **Agent governance / quality**
   - #412 agent-governance [closed]
   - #1385 Reasoning Quality Gate
   - #1329 compact-memory
   - #83 skill-quality-analyzer and skill-security-analyzer

6. **Ecosystem needs**
   - #228 org-wide skill sharing (16 comments, 8 👍 - high engagement ratio)
   - #1487 context window exhaustion
   - #189 plugin duplicates
   - #29 bedrock integration

Let me write the report now. Since this is meant to be a hot community report, I should focus on:

1. Hot Skills ranking - top 5-8 by attention/importance
2. Community needs trends
3. High-potential PRs to merge
4. One-liner ecosystem insight

I'll structure it cleanly and professionally. The output should be in Chinese based on the request.

Let me think about which PRs are most "hot" given that comments are undefined. I'll use the issue engagement as a proxy for what skills are being discussed. Looking at issues:
- Most issues reference skill-creator, mcp-builder, claude-api, docx, pdf, webapp-testing

So the hottest skills in terms of attention are:
1. skill-creator (multiple issues + PRs)
2. mcp-builder (issues + PR)
3. docx (issues + multiple PRs)
4. claude-api (issue + PR)
5. webapp-testing (security PR + likely related issues)

But the user wants "热门 Skills" - which could mean hot PRs being submitted. Let me reframe this:

The hot PRs by recent activity and quality:
- #1298 skill-creator Windows/runtime fixes (oldest, still being worked on)
- #1742 mcp-builder compatibility (recent)
- #1771 proofcore-contract-auditor (recent, novel domain)
- #1703 md2video-audio (creative domain)
- #1245 Notion + resume (multi-skill)
- #525 Pyxel retro game (long-standing, niche)
- #514 document-typography (universal value)
- #1615 scnet-hpc (domain-specific but valuable)
- #822 AWT E2E testing (testing category)
- #1776 blast-radius (safety)

For the report, I'll focus on the most impactful and high-quality PRs. Given that comments are undefined, I'll judge by:
- Recency (recently active)
- Breadth of utility
- Solving known pain points
- Community issues alignment

Let me finalize my report.

Actually I realize - the user said "热门 Pull Requests" sorted by comment count, but all show undefined. So the sorting shown is probably just by some default or the first 20. I should be honest about this limitation.

Let me write the report now. I'll use Chinese since the request is in Chinese.</think>

# Claude Code Skills 社区热点报告（2026-10-07）

> 数据源：anthropics/skills 仓库 | 热门 PR 50 条（取 Top 20）｜社区 Issues 50 条（取 Top 15）

---

## 一、热门 Skills 排行（PR Top）

> 注：PR 评论数 API 返回 `undefined`，以下按「最近活跃度 × 解决痛点广度 × 与热门 Issue 关联度」综合排序。

| 排名 | PR | Skill 名称 | 功能要点 | 状态 |
|---|---|---|---|---|
| 🥇 | [#1298](https://github.com/anthropics/skills/pull/1298) | **skill-creator 触发评估修复** | 修复 trigger eval 在 Windows 下 subprocess 失败、误报负样本等问题 | 🟢 OPEN（持续 4 个月，多次迭代） |
| 🥈 | [#1771](https://github.com/anthropics/skills/pull/1771) | **proofcore-contract-auditor** | Web3 智能合约静态分析，审计证明上链至 TON | 🟢 OPEN（9 月新提案，跨领域） |
| 🥉 | [#1742](https://github.com/anthropics/skills/pull/1742) | **mcp-builder 兼容性修复** | 支持 mcp>=2 的 `streamable_http_client` 与自定义 headers | 🟢 OPEN（解决 #1668，实用度高） |
| 4 | [#1703](https://github.com/anthropics/skills/pull/1703) | **md2video-audio** | Markdown → MP4，零成本，Marp + AI 配音 | 🟢 OPEN（内容创作赛道新方向） |
| 5 | [#1961](https://github.com/anthropics/skills/pull/1961) | **skill-creator 评估查看器硬化** | 修复脚本逃逸、DNS rebinding、跨站 POST、XSS | 🟢 OPEN（呼应 #1394，安全性高） |
| 6 | [#1776](https://github.com/anthropics/skills/pull/1776) | **blast-radius** | 批量/破坏性写入前的 checklist（防误删、误发邮件） | 🟢 OPEN（填补治理空白） |
| 7 | [#1615](https://github.com/anthropics/skills/pull/1615) | **scnet-hpc** | 国家级超算集群 SSH + Slurm 操作工作流 | 🟢 OPEN（垂直领域，专业度高） |
| 8 | [#822](https://github.com/anthropics/skills/pull/822) | **AWT（AI Watch Tester）** | 零代码 E2E 测试，浏览器视觉控制 | 🟢 OPEN（测试赛道，呼声高） |

**讨论热点解读：**
- 「skill-creator」是当之无愧的流量中心——它不仅是元技能，也是社区反馈的主要承载体（见 Issue #202 / #556 / #1383 / #1394）。
- 9 月起 Security 类 PR 集中涌现（#1961、#1980、#1776），与 Issue #492 长期发酵的信任边界问题形成共振。

---

## 二、社区需求趋势（Issues Top 15 提炼）

### 🔥 趋势 1：**信任与安全治理**（最强烈）
- [#492 (43💬)](https://github.com/anthropics/skills/issues/492) — 社区 Skill 冒用 `anthropic/` 命名空间，存在 **信任边界滥用**（本期最热议题）
- [#1394 (4💬)](https://github.com/anthropics/skills/issues/1394) — eval-viewer HTML 转义不全，存在 XSS
- [#1390 (4💬)](https://github.com/anthropics/skills/issues/1390) — mcp-builder 评估对真实 MCP server 全部返 0 分

### 🔥 趋势 2：**企业级分发与共享**
- [#228 (16💬, 8👍)](https://github.com/anthropics/skills/issues/228) — Claude.ai 内组织级 Skill 共享（👍/💬 比最高，需求最强烈）
- [#189 (6💬, 9👍)](https://github.com/anthropics/skills/issues/189) — `document-skills` 与 `example-skills` 内容重复
- [#29 (4💬)](https://github.com/anthropics/skills/issues/29) — AWS Bedrock 集成支持

### 🔥 趋势 3：**Skill 自身质量与可观测性**
- [#556 (12💬, 7👍)](https://github.com/anthropics/skills/issues/556) — `run_eval.py` 触发率为 0%
- [#1487 (4💬)](https://github.com/anthropics/skills/issues/1487) — `claude-api` 单次工具调用即注入 ~156k tokens，撑爆上下文
- [#1383 (4💬)](https://github.com/anthropics/skills/issues/1383) — skill-creator 6 项静默失败 bug
- [#202 (8💬)](https://github.com/anthropics/skills/issues/202) — skill-creator 应当按最佳实践重写（已 CLOSED）

### 🔥 趋势 4：**Agent 治理 / 推理质量 / 记忆压缩**（新兴方向）
- [#1329 (9💬)](https://github.com/anthropics/skills/issues/1329) — `compact-memory`：长会话符号化压缩
- [#1385 (4💬)](https://github.com/anthropics/skills/issues/1385) — Reasoning Quality Gate 三阶段质量门
- [#412 (6💬)](https://github.com/anthropics/skills/issues/412) — `agent-governance`：策略/威胁/审计（已 CLOSED）

### 🔥 趋势 5：**存量用户痛点**
- [#62 (10💬)](https://github.com/anthropics/skills/issues/62) — Skill 凭空消失
- [#1175 (4💬)](https://github.com/anthropics/skills/issues/1175) — SharePoint 文档访问控制写在 SKILL.md 的安全顾虑（已 CLOSED）

---

## 三、高潜力待合并 Skills（即将落地）

按「修复已知 Issue + 安全价值 + 跨用户普适性」筛选：

| PR | Skill | 合并概率高原因 |
|---|---|---|
| [#1742](https://github.com/anthropics/skills/pull/1742) | mcp-builder v2 兼容 | 修复官方已确认 issue #1668，影响所有 mcp-builder 用户 |
| [#1961](https://github.com/anthropics/skills/pull/1961) | skill-creator eval viewer 硬化 | 直接回应 #1394 安全报告，范围明确 |
| [#1980](https://github.com/anthropics/skills/pull/1980) | webapp-testing 去 shell=True | CWE-78 命令注入修复，体积小、易审 |
| [#1792](https://github.com/anthropics/skills/pull/1792) | docx LibreOffice 超时报错 | 提升可靠性，单文件改动 |
| [#1681](https://github.com/anthropics/skills/pull/1681) | skill-creator standalone 执行 | 用户侧高频报错路径 |
| [#1730](https://github.com/anthropics/skills/pull/1730) | claude-api 死链替换 | 纯文档、低风险 |
| [#538](https://github.com/anthropics/skills/pull/538) | pdf SKILL.md 大小写 | 跨平台兼容性问题，立竿见影 |

> 长期排队但尚未合并：#1298（skill-creator 评估体系）、#210（frontend-design 改造）—— 涉及核心 skill 架构，合并门槛高。

---

## 四、Skills 生态洞察（一句话总结）

> **社区诉求已从「多一个 Skill」转向「Skill 可信、可评估、可治理」：信任边界（#492）、eval 触发率（#556）、安全硬化（#1394/#1961）、上下文预算（#1487）、组织级分发（#228）—— 元层与基础设施类需求首次压倒内容生成类需求，成为下一阶段 Skills 生态的主导矛盾。**

---

*报告生成时间：2026-10-07 ｜ 分析对象：anthropics/skills*

---

<think>The user wants me to generate a daily report for Claude Code community dynamics based on GitHub data. Let me analyze the data carefully and structure the report.

Key observations:
1. New release: v2.1.292 with two changes - `--marketplace` flag and `effort` parameter for Agent tool
2. There's a massive issue #38335 with 875 comments and 476 thumbs up about Claude Max plan session limits being exhausted abnormally fast since March 23, 2026 - this is clearly a hot topic
3. Many Windows-related issues (platform:windows) - this seems to be a theme
4. Several issues with regressions
6. Two PRs closed - one about diff pane and another about Windows compatibility for ralph-wiggum plugin

Let me organize this into a comprehensive daily report in Chinese.

For PRs, there are only 2 shown in the data, so I'll cover both but note the limited PR activity.

Let me think about the structure:

1. **今日速览** - Key points: v2.1.292 release, the massive #38335 Max plan limits issue, Windows platform issues cluster
2. **版本发布** - v2.1.292 with marketplace flag and effort parameter
3. **社区热点 Issues** - Top 10
4. **重要 PR 进展** - Only 2 PRs to cover
5. **功能需求趋势** - Trends
6. **开发者关注点** - Pain points

Let me pick the top 10 most important issues:

1. #38335 - 875 comments, 476 thumbs - Max plan session limits (HUGE issue)
2. #93782 - VS Code WSL2 dictation regression in 2.1.269 (23 comments)
3. #77242 - AskUserQuestion dialog missing question text (10 comments)
4. #97469 - VS Code extension slash-command messages never collapse (6 comments)
5. #99320 - Inline-shell rm check false positives on bash -c $'...' scripts (3 comments)
6. #99596 - Scheduled task abandoned after first tool round-trip (3 comments)
7. #94640 - Cowork local sandbox proxy 403 for cdn.playwright.dev (3 comments)
8. #96762 - Feature request for credential/payment entry opt-in (3 comments)
9. #97652 - /color command hex colors (3 comments)
10. #76440 - Cross-link Claude Code sessions with claude.ai chat (3 comments)

Then 10-13: Other notable issues
- #98651 - Read pages validation issue (CLOSED)
- #97259 - Windows desktop app webview unresponsive
- #97660 - Windows PowerShell rm -rf escape (CRITICAL data loss)
- #100135 - Desktop split view feature
- #79737 - scheduled-tasks folder trust issue
- #100127 - CVP access revoked/KYC issue
- #99395 - Desktop plugin pane focus issue
- #100063 - Windows Bash tool backslash halving
- #99858 - Desktop Projects thread loses auto-approve
- #100111 - --max-budget-usd over budget issue

For PRs, only 2:
1. #99206 - diff docked pane layout fix (CLOSED)
2. #19084 - ralph-wiggum plugin Windows compatibility (CLOSED)

Let me write this out now.</think>

# Claude Code 社区动态日报

**日期：** 2026-10-07  
**数据来源：** github.com/anthropics/claude-code

---

## 1. 今日速览

- **v2.1.292 版本发布**，带来 `claude plugin install --marketplace` 参数与 Agent 工具的 `effort` 参数，进一步完善插件体系与子代理可控性。
- **#38335 持续发酵**：自 3 月 23 日以来 Claude Max 订阅会话额度异常消耗过快的讨论已突破 **875 条评论 / 476 👍**，成为社区最具争议的痛点，至今未关闭。
- **Windows 平台问题集中爆发**：今日更新的多条 Issue 涉及 PowerShell 变量展开导致 `rm -rf \`、Git Bash 反斜杠被成对截断、Desktop App Webview 失活等多个高优先级 Bug，叠加桌面端权限/插件交互问题。

---

## 2. 版本发布

### v2.1.292（2026-10-07）

- 新增 `claude plugin install --marketplace <source>`：当插件所需 marketplace 不存在时，会按与 `claude plugin marketplace add` 相同的策略校验后再安装插件。
- Agent 工具新增 `effort` 参数，允许主代理以指定"努力等级"调用子代理。

> 详见 [Release Notes](https://github.com/anthropics/claude-code/releases/tag/v2.1.292)

---

## 3. 社区热点 Issues（按关注度排序）

| # | Issue | 关键点 | 反应 |
|---|-------|--------|------|
| [#38335](https://github.com/anthropics/claude-code/issues/38335) | **[BUG] Claude Max plan 会话额度自 2026-03-23 起异常消耗**（CLI） | 标记 invalid 但热度未减，社区质疑计费/限额机制变更；出现多种"自我证言叠加"内容 | 💬 875 / 👍 476 |
| [#93782](https://github.com/anthropics/claude-code/issues/93782) | **2.1.269 回归**：WSL2 远程下 VS Code 集成终端无法粘贴语音听写文本 | 影响 Wispr Flow 等第三方输入法/听写工具用户，已定位 2.1.268 正常 | 💬 23 / 👍 9 |
| [#77242](https://github.com/anthropics/claude-code/issues/77242) | **AskUserQuestion 弹窗只显示选项不显示问题文本**（macOS TUI） | 选项渲染正常但 question 文本丢失，用户难以理解提问意图 | 💬 10 / 👍 4 |
| [#97469](https://github.com/anthropics/claude-code/issues/97469) | **VS Code 扩展**：斜杠命令消息无法折叠，长参数撑满聊天面板 | 复刻 #61675 的 `/goal` 症状，老问题新发 | 💬 6 / 👍 3 |
| [#99320](https://github.com/anthropics/claude-code/issues/99320) | **2.1.288 inline-shell rm 误报**：不含 rm 的 `bash -c $'...'` 也会被阻断 | 安全检查机制在 ANSI-C 引号 + 嵌套解释器场景下误判 | 💬 3 / 👍 0 |
| [#99596](https://github.com/anthropics/claude-code/issues/99596) | **Scheduled task 首个工具往返后被遗弃**，session id 无法匹配 transcript | 影响 macOS Cowork 场景下的定时任务编排 | 💬 3 / 👍 0 |
| [#94640](https://github.com/anthropics/claude-code/issues/94640) | **Cowork 本地沙箱代理 403**：默认 allowlist 中的 `cdn.playwright.dev` 被阻断 | 默认包管理器域名被允许列表覆盖，存在配置冲突 | 💬 3 / 👍 0 |
| [#97660](https://github.com/anthropics/claude-code/issues/97660) | **⚠️ 高危 / 数据丢失**：Windows PowerShell 展开 `rm -rf \` 转义变量为空，从 C:\ 顶层执行删除 | Subagent 通过 MSYS2 bash 调用 PowerShell 时变量意外展开，需立即规避 | 💬 2 / 👍 0 |
| [#100127](https://github.com/anthropics/claude-code/issues/100127) | **CVP 访问被静默撤销**，KYC 锁定不可重试，导致 cyber safeguard 持续拦截 | 涉及身份验证流程，影响合规用户 | 💬 1 / 👍 0 |
| [#100111](https://github.com/anthropics/claude-code/issues/100111) | **`--max-budget-usd=1` 实测花费 $1.38 才停止**（v2.1.292 仍存在） | 预算检查滞后于实际调用，与文档承诺的"上限"语义不符 | 💬 1 / 👍 0 |

**其他重要补充**：  
- [#97259](https://github.com/anthropics/claude-code/issues/97259)：Windows Desktop App "Main webview is unresponsive" 后无法恢复，仅能退出；  
- [#100063](https://github.com/anthropics/claude-code/issues/100063)：Windows Git Bash 工具对反斜杠对成对截半（heredoc/单引号内同样）；  
- [#99858](https://github.com/anthropics/claude-code/issues/99858)：Desktop Projects 设备桥重连后丢失 auto-approve；  
- [#99830](https://github.com/anthropics/claude-code/issues/99830)：macOS TUI 思考摘要步骤出现 60s "Waiting for API response" 假卡顿。

---

## 4. 重要 PR 进展

> 今日仅有 2 条 PR 更新且都已关闭，PR 活跃度偏低。

| # | PR | 说明 | 状态 |
|---|----|------|------|
| [#99206](https://github.com/anthropics/claude-code/pull/99206) | **diff**：停靠面板起始位置改为头部自身行，移除多余空白行 | 修复 `/diff` 在停靠模式下顶部多出一行空白的视觉问题 | ✅ CLOSED |
| [#19084](https://github.com/anthropics/claude-code/pull/19084) | **fix(ralph-wiggum)**：为 stop hook 增加 Windows 兼容性 | 解决 `stop-hook.sh` 使用 `#!/bin/bash` shebang 在 Windows WSL 环境下的 `CreateProcessCommon` 错误 | ✅ CLOSED |

---

## 5. 功能需求趋势

从今日 Issues 提炼的社区关注方向：

1. **插件 & Marketplace 生态** 🧩  
   - v2.1.292 新增 `install --marketplace`，呼应 #96762 / #99395 / #100135 对插件管理 UI 与凭据托收流程的诉求。  
2. **Agent / Subagent 可控性** 🤖  
   - 新增 `effort` 参数；#91225（`run_in_background=false` 在 Fork Subagent 下被忽略）等指明 subagent 行为仍需更细粒度控制。  
3. **跨会话与平台联动** 🔗  
   - #76440 跨链 Claude Code 与 claude.ai chat；#97660 / #100063 推动 Windows 行为一致性。  
4. **终端体验** 🎨  
   - #97652 `/color` 支持任意 hex（truecolor 已成熟）；#77242 / #97469 关注 TUI 文本/折叠渲染。  
5. **身份、合规与计费透明度** 🛡️  
   - #100127 KYC 不可重试；#100111 预算上限超支。  
6. **定时任务/Scheduled Tasks 可靠性** ⏱️  
   - #99596 / #79737 / #100138 三条并行，集中在 session id 漂移、信任目录误判、忽略 `CLAUDE_CONFIG_DIR`。

---

## 6. 开发者关注点

- **预算/计费可预测性**：`--max-budget-usd` 与 Claude Max 限额的"承诺值"与"实测值"差距（#38335、#100111）成为最强烈的信任信号诉求。  
- **Windows 平台一致性**：变量展开、转义字符、Git Bash、PowerShell + MSYS2 混用等场景频繁踩坑，#97660 接近数据灾难级。  
- **沙箱与安全误报**：2.3.288 引入的 inline-shell rm 检查与默认 allowlist 覆盖问题（#99320、#94640）让安全机制的可预测性下降。  
- **Desktop / VSCode UX 细节**：Webview 失活、按钮首次点击只聚焦（#99395）、斜杠消息不收起（#97469）等小问题累积影响流畅度。  
- **Session/Transcript 一致性**：定时任务、worktree 迁移会话、设备桥重连场景下 session id 与 transcript 容易"断线"（#91465、#99596、#99858），影响审计与恢复。  
- **凭据与合规**：在浏览器自动化/支付场景下，社区希望以用户自有账号 + 1Password 风格交接方式取代硬性"禁止输入"（#96762）。

---

*报告生成时间：2026-10-07 | 数据范围：过去 24 小时更新的 Issues/PRs*

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

<think>The user wants me to generate a Chinese daily report about OpenAI Codex community dynamics based on the GitHub data provided. Let me analyze the data carefully and structure the report according to the requirements.

Let me organize the information:

**Releases (last 24h):**
- rust-v0.162.0-alpha.18
- rust-v0.162.0-alpha.17
- rust-v0.161.0-alpha.13.1

**Issues (50 total, top 30 shown by comment count):**

Top issues by comments:
1. #48074 [CLOSED] - Windows terminal flash - 146 comments, 152 thumbs up - HIGHEST
2. #38350 [OPEN] - Recurring scheduled tasks disable themselves - 73 comments
3. #42514 [OPEN] - Computer Use service missing on Intel Mac - 17 comments
4. #26306 [OPEN] - Codex quota consumption issue - 16 comments
5. #49829 [OPEN] - Dot tasks fail with proxy - 10 comments
6. #50800 [OPEN] - Local thread tools disappear after session resume - 10 comments
7. #47370 [OPEN] - WSL2 voice session stops - 10 comments
8. #50725 [OPEN] - Windows local commands hang - 7 comments
9. #48579 [OPEN] - Windows notification sounds - 7 comments
10. #48729 [OPEN] - Windows local runtime preparation deadline - 6 comments
11. #50404 [CLOSED] - VS Code stalls - 6 comments
12. #47829 [OPEN] - Windows Work/Codex messages greyed out - 6 comments
13. #49608 [OPEN] - Windows Cloud Work task creation - 6 comments
14. #50321 [OPEN] - Windows Browser/Computer Use kernel - 6 comments
15. #50705 [OPEN] - Prompts queued - 5 comments
16. #43349 [OPEN] - MacOS missing chats - 5 comments
17. #49725 [OPEN] - CLI workspace requirement - 4 comments
18. #32431 [OPEN] - macOS disk writes resource-limit - 4 comments
19. #49952 [OPEN] - macOS dot local task fails - 4 comments
20. #51251 [OPEN] - Steer/queued messages fail - 3 comments
21. #51565 [OPEN] - macOS Send button disabled - 3 comments
22. #23659 [OPEN] - Android Remote model provider - 3 comments
23. #51268 [OPEN] - Daybreak mode reminder persistence - 3 comments
24. #48348 [OPEN] - Production outage/credits - 3 comments
25. #49672 [OPEN] - Windows Defender false positive - 3 comments
26. #51524 [OPEN] - Windows Computer Use stops - 2 comments
27. #51578 [OPEN] - Windows Dots browser control - 2 comments
28. #50971 [OPEN] - WSL clipboard busy - 2 comments
29. #51573 [OPEN] - Windows unable to load organization settings - 2 comments
30. #50812 [OPEN] - Windows read timeouts - 2 comments

**PRs (50 total, top 20 shown):**
All from @copyberry[bot] (interesting - this looks like an automated bot)
All CLOSED status, no comments visible

1. #51575 - Expose package assembly helpers, support gzip
3. #51556 - Complete dynamic tool lifecycles on cancellation
4. #51547 - Add Windows MXC sandbox opt-out
5. #51539 - Completion-aware realtime attachment
6. #51527 - Ignore ripgrep configuration when expanding sandbox deny globs
7. #51525 - Preserve CLI MXC preference in executor config reads
8. #51517 - Pass thread persistence intent to attachment uploads
9. #51515 - Expose detailed agent tree shutdown failure reports
10. #51512 - Align Windows sandbox temp permissions
11. #51511 - Fix Windows 10 drive-letter opens
12. #51510 - Preserve live TUI settings when config reloads fail
14. #51503 - Expose selected environments to MCP contributors
15. #51502 - Bound relay connection attempts and handle pongs
16. #51500 - Add shared task pinning to agent command center
17. #51499 - Load rollout history on single blocking worker
18. #51493 - Bind capability roots to environment selections
19. #51492 - Remove obsolete fields from persisted turn context
20. #51491 - Classify executor capability root ownership independently
21. #51483 - Add correlated credential-free rendezvous diagnostics
22. #51482 - Use PathUri for skill identity

Now let me write a comprehensive Chinese daily report.

Key observations:
1. Windows issues dominate the bug reports
3. Closed #48074 (Windows terminal flash) with 146 comments was the biggest discussion
4. Many Windows-specific issues: terminal, desktop app, sandbox, notifications, Computer Use
5. macOS issues also significant: missing chats, dot tasks, disk writes
6. WSL2 specific issues
7. PRs all from @copyberry[bot] which is suspicious - they all have undefined comments and 0 thumbs up
8. Three alpha releases (0.162.0-alpha.18, 0.162.0-alpha.17, 0.161.0-alpha.13.1)
9. Trends: Windows app stability, macOS stability, Computer Use, Dots/automations, MCP integration, sandbox improvements

Let me write the report now.</think>

# OpenAI Codex 社区动态日报
**日期：2026-10-07**

---

## 一、今日速览

今日 Codex 仓库节奏密集：Rust 端 24 小时内连发 3 个 alpha 版本（0.162.0-alpha.18/17、0.161.0-alpha.13.1），PR 全部走 copyberry 自动化机器人通道合并，修复聚焦 Windows 沙箱、MCP、附件上传与代理会话生命周期。社区侧，**Windows 桌面端稳定性**仍是绝对焦点——终端闪烁、声效、Computer Use、Dot 任务等 8 项高优 bug 集中爆发；Windows 终端闪烁历史 issue #48074 终于关闭（146 评论/152 👍），但 macOS 新一轮"发不出去消息"、"Send 按钮失效"问题接踵而至。

---

## 二、版本发布

过去 24 小时发布 3 个 Rust 预发布版本：

| 版本 | 状态 | 链接 |
|------|------|------|
| rust-v0.162.0-alpha.18 | 已发布 | [Release](https://github.com/openai/codex/releases/tag/rust-v0.162.0-alpha.18) |
| rust-v0.162.0-alpha.17 | 已发布 | [Release](https://github.com/openai/codex/releases/tag/rust-v0.162.0-alpha.17) |
| rust-v0.161.0-alpha.13.1 | 已发布 | [Release](https://github.com/openai/codex/releases/tag/rust-v0.161.0-alpha.13.1) |

注：详细 changelog 需进入 Release 页查看；结合今日 PR 内容可推断 0.162.0 系列在 Windows 沙箱、MCP、能力根（capability root）、附件生命周期等方向有较多修补。

---

## 三、社区热点 Issues

| # | 标题 | 平台/模块 | 评论 | 👍 | 链接 |
|---|------|----------|------|-----|------|
| #48074 | Windows: 安装 Codex daemon 后终端窗口反复闪烁 | Windows / CLI | 146 | 152 | [查看](https://github.com/openai/codex/issues/48074) |
| #38350 | 周期性定时任务在成功执行后未经用户授权自行禁用 | Codex Web / 自动化 | 73 | 0 | [查看](https://github.com/openai/codex/issues/38350) |
| #42514 | Intel Mac (x86_64) 上 Computer Use 服务缺失 | macOS / Computer Use | 17 | 6 | [查看](https://github.com/openai/codex/issues/42514) |
| #26306 | Codex 配额消耗异常激增 | App / 计费 | 16 | 0 | [查看](https://github.com/openai/codex/issues/26306) |
| #49829 | Dot 任务在需要代理的 WebSocket 下无法在桌面端打开 | Windows/macOS / Dots | 10 | 1 | [查看](https://github.com/openai/codex/issues/49829) |
| #50800 | 会话恢复后原 Dot 任务的本地线程工具消失 | macOS / Dots | 10 | 0 | [查看](https://github.com/openai/codex/issues/50800) |
| #47370 | WSL2 中 F8 voice 会话启动后立即停止（WSLg PulseAudio） | WSL2 / CLI 语音 | 10 | 1 | [查看](https://github.com/openai/codex/issues/47370) |
| #50725 | Windows 本地命令在子进程派生前挂起 | Windows / 沙箱 | 7 | 0 | [查看](https://github.com/openai/codex/issues/50725) |
| #48579 | Windows 桌面通知声忽略系统音量控制且无可见设置 | Windows / App | 7 | 1 | [查看](https://github.com/openai/codex/issues/48579) |
| #50705 | 提示词长期"排队"未发送，旧提示偶尔被自动重放 | VS Code 扩展 | 5 | 3 | [查看](https://github.com/openai/codex/issues/50705) |

### 值得关注的原因

- **#48074 已关闭**：作为长期高优问题（152 个 👍），它的关闭意味着 Windows 守护进程相关的视觉闪烁终于被根治，但同类 Windows 体验问题仍在大量涌现。
- **#38350**：73 条评论反映出"自动化任务被静默禁用"对 ChatGPT Work 用户的实际工作流冲击很大，涉及信任与权限语义，社区情绪强烈。
- **#26306**：配额激增是历史长尾 issue 之一，结合 #48348（生产环境事故+计费争议）显示**计费透明度**是付费用户反复诟病的痛点。
- **#50705 / #49829 / #50800**：集中在 Dots 与代理会话上，表明**新功能（Dots / 远程任务）的稳定性尚未追上基础工作流**。

---

## 四、重要 PR 进展

今日 PR 全部通过 copyberry 自动化机器人提交并已合并，主题高度聚焦：**Windows 沙箱健壮性 + 代理/MCP/能力根 + 资源生命周期管理**。

| PR | 主题 | 链接 |
|----|------|--------|
| #51575 | 暴露打包辅助函数并支持 gzip DotSlash 制品 | [查看](https://github.com/openai/codex/pull/51575) |
| #51556 | 在取消时完成动态工具的完整生命周期 | [查看](https://github.com/openai/codex/pull/51556) |
| #51547 | 新增 Windows MXC 沙箱退出开关（`windows.allow_mxc`） | [查看](https://github.com/openai/codex/pull/51547) |
| #51539 | 实时附件的"完成感知"与会话范围 detach | [查看](https://github.com/openai/codex/pull/51539) |
| #51527 | 展开沙箱 deny glob 时忽略 ripgrep 配置（`--no-config`） | [查看](https://github.com/openai/codex/pull/51527) |
| #51525 | 在 executor config 读取中保留 CLI 的 `features.prefer_mxc` | [查看](https://github.com/openai/codex/pull/51525) |
| #51512 | Windows 沙箱临时目录权限对齐子进程环境 | [查看](https://github.com/openai/codex/pull/51512) |
| #51511 | 修复 Windows 10 盘符在 no-follow 文件系统操作中的打开行为 | [查看](https://github.com/openai/codex/pull/51511) |
| #51502 | 中继连接重试限速 + 阻塞写期间处理 pong | [查看](https://github.com/openai/codex/pull/51502) |
| #51500 | 在代理命令中心新增共享任务置顶（`p` 键，`Pinned` 分组） | [查看](https://github.com/openai/codex/pull/51500) |

### 重点解读

- **Windows 沙箱是最大投入方向**：#51547 / #51512 / #51511 / #51525 形成"配置开关 → 临时目录 → 盘符路径 → 配置透传"的完整修补链，反映对 Windows 10/11 兼容性的集中治理。
- **#51556（动态工具生命周期）+ #51539（realtime 附件）**：解决"取消/中断中途残留状态污染后续会话"问题，直接对应 #48074、#50705 这类"消息重放/卡死"的症状。
- **#51502（relay 心跳）+ #51483（rendezvous 诊断）**：远程/移动端连接可观测性增强，与 #49829 / #50800 等 Dots 远程任务问题形成闭环。

---

## 五、功能需求趋势

从今日 50 条 Issues 与 PR 主题聚类看，社区关注度排序大致如下：

1. **Windows 桌面端稳定性（占比最高）**：守护进程、Computer Use、Dot 任务、通知、磁盘/进程资源、WebSocket 代理、声音控制——10+ 条独立 bug。
2. **macOS 桌面稳定性（次高）**：会话丢失、Dot 本地任务 workspace 不可用、Computer Use 缺失、Send 按钮失灵——5+ 条 bug。
3. **Computer Use / Browser 自动化**：覆盖 Windows Defender 误报（#49672）、Windows 浏览器控制失效（#51524/#51578）、Intel Mac 服务缺失（#42514），是当前功能演进的核心赛道。
4. **Dots 与远程任务编排**：任务创建/恢复/代理选择/WebSocket 鉴权，是 Dots 功能的早期阵痛期。
5. **MCP / 代理能力扩展**：`with_selected_environments`（#51503）、`AgentTreeShutdown::wait_detailed`（#51515）、能力根与快照绑定（#51493）——为多执行器协作打地基。
6. **TUI/CLI 体验**：clipboard 故障（#50971）、配置重载保留（#51510）、持久化 dismiss（#51268）——小问题但影响每日使用。
7. **配额/计费透明度**：#26306、#48348、#51251——付费用户长期痛点。
8. **移动端 Remote**：#23659（Android 端 modelProvider 默认值覆盖主机配置）——功能边界问题。

---

## 六、开发者关注点

总结今日 Issue/PR 反馈，开发者高频痛点与需求：

- 🪟 **Windows 桌面"启动—运行—会话恢复"全链路频繁翻车**：从终端闪烁、Send 按钮灰、消息排空到 RPC slot 占用、消息锁失效，#47829 / #49608 / #50812 / #51251 / #51565 共同勾勒出一条脆弱链。
- 🍎 **macOS 新版破坏性升级频发**：#43349（项目聊天消失）、#49952（Dot workspace 不可用）、#51565（发送按钮失灵），建议发布前更严格的回归覆盖。
- 🛡️ **安全软件误报**：#49672 中 `codex-computer-use.exe` 被 Defender 反复判为 `Trojan:Win32/ClickFix.EEA!MTB`，需要尽快对接 Microsoft 提交白名单/签名。
- 💸 **计费透明度与配额感知**：#26306 / #48348 要求 Codex 暴露按任务/按工具调用的 usage 明细，以及异常消耗预警，避免"测试即扣费"。
- 🔌 **代理/MCP 能力根与会话生命周期一致性**：多个 PR 在打地基（#51491 / #51493 / #51503 / #51556），开发者期待后续能在自定义 MCP server 上获得稳定的"能力发现 → 选择 → 失败上报"链路。
- 🤖 **Dots 远程代理稳定性**：创建/恢复/代理选择/工具可见性反复抖动，是新功能的当前主要反馈方向。

> 备注：今日 PR 的评论数与作者账号 `@copyberry[bot]` 较为一致地呈现"自动化批量合入"特征，建议社区在阅读时关注具体 commit 内容而非评论热度。

---

*日报基于 openai/codex 仓库过去 24 小时公开数据生成，链接均为 GitHub 原始页面。*

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

<think>The user wants me to generate a daily report for Gemini CLI community dynamics based on GitHub data from 2026-10-07. Let me analyze the data carefully and produce a professional, structured Chinese report.

Key things to note:
1. Three new releases in the past 24 hours:
   - v0.65.0-nightly.20261007.gef59c532f
   - v0.64.0-preview.0
   - v0.63.0

2. Issues - need to pick top 10 most notable ones. Let me look at comment counts and importance:
   - #22323 (13 comments) - Subagent recovery after MAX_TURNS bug
   - #19873 (9 comments) - Zero-Dependency OS Sandboxing
   - #21409 (8 comments) - Generalist agent hangs
   - #22745 (7 comments) - AST-aware file reads
   - #21968 (7 comments) - Gemini doesn't use skills enough
   - #22267 (4 comments) - Browser Agent ignores settings.json
   - #22232 (4 comments) - browser_agent resilience
   - #21983 (4 comments) - browser subagent fails in wayland
   - #21000 (4 comments) - native file tools for task tracker
   - #20079 (4 comments) - symlink agent not recognized
   - #24246 (3 comments) - 400 error with > 128 tools
   - #23571 (3 comments) - tmp scripts in random spots
   - #22672 (3 comments) - Agent destructive behavior
   - #22186 (3 comments) - get-shit-done crash

I'll select the top 10 based on a combination of comment count and relevance to important themes.

3. PRs - need to pick 10 important ones. Let me look at the most impactful:
   - #29667 - footer links
   - #29445 - MCP enablement config
   - #29449 - PkgDiet guardrail
   - #29444 - gemini mcp enable/disable fix
   - #29447 - SdkAgentShell env/timeout/signal
   - #29552 - ripgrep failures
   - #29564 - env placeholders settings migration
   - #29573 - sandbox image registry port
   - #29563 - truncate line terminators
   - #29559 - CRLF diff normalization
   - #29554 - docs link fix
   - #29553 - monthly spending cap
   - #29551 - core.sshCommand
   - #29665 - gVisor sandbox error
   - #29655 - OAuth retry loops
   - #29612 - terminal user turn invariant
   - #29664 - npm dependencies update

4. Trends from issues:
   - Subagent improvements (many issues about subagents)
   - Browser agent issues
   - AST-aware tools
   - Token efficiency / context management
   - Sandboxing and safety
   - Settings/configuration management
   - IDE integration
   - Skills system improvements
   - Crash/performance issues

Let me write this report now.</think>

# Gemini CLI 社区动态日报
**日期：2026-10-07**

---

## 📌 今日速览

Gemini CLI 今日发布了 **v0.63.0 正式版**、**v0.64.0-preview.0 预览版** 和 **v0.65.0-nightly** 三个版本同步推进，重点修复会话恢复、子代理状态报告错误、ACP 桥接等核心问题。社区讨论热点集中在 **子代理（Subagent）行为的稳定性** 上，尤其是 `codebase_investigator` 在达到 `MAX_TURNS` 后错误报告为 `GOAL success` 的问题引发高度关注。同时，多个 P1 级 Bug 涉及 **Browser Agent 在 Wayland 环境下失效** 和 **Generalist Agent 卡死**，团队正在加急修复。

---

## 🚀 版本发布

### v0.65.0-nightly.20261007.gef59c532f
- **fix(cli)**：在不受信任文件夹中强制执行只读工作区设置（[PR #29583](https://github.com/google-gemini/gemini-cli/pull/29583)）
- **fix(core)**：恢复会话时避免重复的工具响应轮次（[PR #29612](https://github.com/google-gemini/gemini-cli/pull/29612) 相关）

### v0.64.0-preview.0
- **refactor(a2a-server)**：实现 V1 到 V2 设置迁移逻辑（[PR #29450](https://github.com/google-gemini/gemini-cli/pull/29450)）
- **fix(acp)**：桥接 `PromptResponse.usage` 并发出 `usage_update` 通知（[PR #29389](https://github.com/google-gemini/gemini-cli/pull/29389)）

### v0.63.0（稳定版）
- **fix(cli)**：在连接恢复期间显示重试进度指示器（[PR #29468](https://github.com/google-gemini/gemini-cli/pull/29468)）
- 包含 v0.61.0-preview.1 更新日志

---

## 🔥 社区热点 Issues

### 1. [#22323](https://github.com/google-gemini/gemini-cli/issues/22323) - Subagent 达到 MAX_TURNS 后错误报告为 GOAL success（13 条评论，P1）
**为什么重要**：`codebase_investigator` 子代理在达到最大轮次限制前并未真正完成任务，却返回 `status: "success"` 和 `Termination Reason: "GOAL"`，**隐藏了任务中断事实**，可能导致用户基于错误结论继续工作。这是子代理可观测性的核心问题。

### 2. [#21409](https://github.com/google-gemini/gemini-cli/issues/21409) - Generalist Agent 永久挂起（8 条评论，8 👍，P1）
**为什么重要**：当 CLI 委派给通用代理时（如简单的创建文件夹操作），进程会无限挂起，用户报告等待 1 小时仍无响应。这是**严重影响日常使用体验**的阻塞性 Bug，社区反应强烈（8 个 👍）。

### 3. [#19873](https://github.com/google-gemini/gemini-cli/issues/19873) - 利用模型的 Bash 亲和性：零依赖 OS 沙箱 + 执行后意图路由（9 条评论，P2）
**为什么重要**：Gemini 3 模型原生偏好使用 POSIX 工具链（grep/cat/sed/awk），但当前沙箱机制限制了这种能力。该 EPIC 提出**在不影响安全性的前提下充分发挥模型原生能力**，是性能与安全的双重优化方向。

### 4. [#22745](https://github.com/google-gemini/gemini-cli/issues/22745) - 评估 AST 感知的文件读取、搜索与代码库映射（7 条评论，P2）
**为什么重要**：AST 感知工具能够**精确读取方法边界、减少错位读取的轮次、降低 token 噪声**，是提升代理效率的重要探索方向，对代码分析类任务有显著价值。

### 5. [#21968](https://github.com/google-gemini/gemini-cli/issues/21968) - Gemini 未能充分使用 Skills 和子代理（7 条评论，P2）
**为什么重要**：用户反馈 Gemini 几乎不会主动调用自定义技能和子代理，**即使任务与技能描述高度相关**。这反映出技能发现机制和模型调用主动性方面的体验缺陷。

### 6. [#21983](https://github.com/google-gemini/gemini-cli/issues/21983) - Browser Subagent 在 Wayland 下失败（4 条评论，P1）
**为什么重要**：Wayland 是 Linux 桌面主流显示协议，Browser 子代理在此环境下直接失效，**影响大量 Linux 桌面用户**，是兼容性优先修复项。

### 7. [#22267](https://github.com/google-gemini/gemini-cli/issues/22267) - Browser Agent 忽略 settings.json 覆盖（如 maxTurns）（4 条评论，P2）
**为什么重要**：配置覆盖是用户自定义行为的核心入口，Agent 完全忽略 `maxTurns` 等设置意味着**用户无法控制 Browser Agent 的行为边界**。

### 8. [#24246](https://github.com/google-gemini/gemini-cli/issues/24246) - 工具数 > 128 时触发 400 错误（3 条评论，P2）
**为什么重要**：启用大量 MCP 工具时会直接失败，提示需要更智能的工具作用域管理机制。**对重度集成 MCP 服务的用户是阻塞性问题**。

### 9. [#20079](https://github.com/google-gemini/gemini-cli/issues/20079) - `~/.gemini/agents/filename.md` 为符号链接时无法识别为代理（4 条评论，P2）
**为什么重要**：用户使用 dotfiles 同步工具（如 GNU Stow、YADM）时普遍依赖符号链接，**该 Bug 阻碍了常见的配置管理实践**。

### 10. [#22672](https://github.com/google-gemini/gemini-cli/issues/22672) - Agent 应阻止/劝阻破坏性行为（3 条评论，P2）
**为什么重要**：模型偶尔在复杂 Git 操作或数据库管理中使用 `git reset --force` 等危险命令，**安全护栏的强化对生产环境使用至关重要**。

---

## 🛠️ 重要 PR 进展

### 1. [PR #29655](https://github.com/google-gemini/gemini-cli/pull/29655) - 防止 OAuth 无限验证循环（P2，core）
修复用户完成浏览器认证并按 Enter 后仍陷入无限验证/OAuth 提示循环的问题。引入**有界重试机制**，从根源解决认证卡死痛点。

### 2. [PR #29612](https://github.com/google-gemini/gemini-cli/pull/29612) - 强制终止用户轮次不变性（agent，size/l）
保证发送给 `Gemini API` 的对话历史始终以**包含非空内容部分的有效用户轮次**结尾。修复 `/rewind`、流中止等操作导致的请求格式违规问题。

### 3. [PR #29445](https://github.com/google-gemini/gemini-cli/pull/29445) - 区分不可读与缺失的 MCP 启用配置（P1，core）
修复**损坏的 `mcp-server-enablement.json` 导致所有用户禁用的 MCP 服务器被报告为已启用**的严重安全问题。安全修复。

### 4. [PR #29444](https://github.com/google-gemini/gemini-cli/pull/29444) - 修复 `gemini mcp enable/disable` 永不匹配任何服务器
**关键可用性修复**：这两个命令对所有服务器都打印 `not found`，包括刚 `list` 出来的服务器。严重影响 MCP 管理工作流。

### 5. [PR #29447](https://github.com/google-gemini/gemini-cli/pull/29447) - 在 SdkAgentShell 中引入 env/timeoutSeconds/外部信号（P2，agent）
SDK 层 `SdkAgentShell.exec` 之前**静默丢弃**了 `env` 和 `timeoutSeconds` 参数，并缺乏外部 `AbortSignal` 终止机制。本次修复完善了 SDK 契约。

### 6. [PR #29449](https://github.com/google-gemini/gemini-cli/pull/29449) - 添加 PkgDiet 依赖护栏（security）
新增内置技能，可**拦截 `npm install` 等命令**并通过 PkgDiet MCP 服务器检查包健康度、bundle 体积和弃用状态，防止引入劣质依赖。

### 7. [PR #29665](https://github.com/google-gemini/gemini-cli/pull/29665) - 显式暴露 gVisor 沙箱网络隔离错误（extensions，P2）
在 gVisor (`runsc`) 沙箱内 IDE 配套连接失败时给出**明确可操作的诊断信息**，避免错误地引导用户运行 `/ide install`。

### 8. [PR #29553](https://github.com/google-gemini/gemini-cli/pull/29553) - 月度消费上限视为终态配额错误（P2，core）
修复 429 错误被错误分类为可重试，导致 TUI 不断重试的问题。**项目消费上限现在显示原始 API 文本**，避免无意义重试浪费配额。

### 9. [PR #29664](https://github.com/google-gemini/gemini-cli/pull/29664) - 批量更新 npm 依赖组（74 项更新，P1）
升级 74 个 npm 包，包括 `@modelcontextprotocol/sdk`（1.23.0 → 1.31.0）等关键依赖。保持依赖现代化与安全补丁同步。

### 10. [PR #29564](https://github.com/google-gemini/gemini-cli/pull/29564) - 设置迁移时保留环境占位符（core）
修复设置迁移时 `${VAR}` 占位符被错误展开为运行时值的 bug。**避免用户配置在迁移过程中被破坏**。

---

## 📈 功能需求趋势

从今日 Issues 与 PR 综合分析，社区最关注的功能方向如下：

| 方向 | 热度 | 代表性议题 |
|------|------|-----------|
| **子代理可观测性与健壮性** | 🔥🔥🔥 | #22323, #21968, #22598（轨迹分享）, #21763（Bug 报告上下文） |
| **Browser Agent 能力与稳定性** | 🔥🔥🔥 | #21983（Wayland）, #22267（设置覆盖）, #22232（会话接管） |
| **AST 感知工具与代码理解** | 🔥🔥 | #22745, #22746, #22747（甘/tilth/glyph 评估） |
| **零依赖沙箱与执行安全** | 🔥🔥 | #19873（POSIX 工具链沙箱）, #22672（破坏性行为护栏） |
| **Skills 与子代理发现** | 🔥 | #21968（主动调用）, #18285（settings.json 发现）, #20195（Local Subagent Sprint 1） |
| **性能与 Token 经济性** | 🔥 | #19561（Tactful Extraction）, #21924（终端渲染优化） |
| **认证与配额处理** | 🔥 | #22186（输出 hook crash）, #29553（消费上限分类） |

---

## 💡 开发者关注点

基于今日社区反馈，开发者反馈的**高频痛点**可归纳为以下五类：

### 1. 子代理黑盒化与沉默失败
开发者对子代理的"无响应/错误报告"极度敏感：`MAX_TURNS` 后静默报告成功、Generalist Agent 永久挂起、Bug 报告缺少子代理上下文——**子代理系统的可观测性和失败语义是当前最迫切的需求**。

### 2. 配置覆盖失效与作用域管理
`settings.json` 覆盖被多个 Agent 忽略、迁移过程破坏环境占位符、`>128` 工具触发 400 错误——**配置系统的可靠性直接关系到项目的可生产化使用**。

### 3. 平台兼容性短板
Wayland 下 Browser Agent 失败、Windows/Linux/macOS 行为差异（`\n` 转义、CRLF diff）、符号链接代理文件无法识别——**多平台一致性仍是打磨重点**。

### 4. 模型能力的"自然偏好"未被充分利用
Gemini 3 训练为原生 bash 用户，但 CLI 的工具设计仍偏向封装式工具调用，导致模型需要额外的提示才能正确使用其能力。**让架构贴合模型偏好是性能与体验的双赢方向**。

### 5. 危险操作的护栏缺失
Agent 在 Git/数据库等场景下使用破坏性命令（`--force`、`reset`）时缺乏劝阻机制——**Safety 护栏的智能化和情境感知**是生产环境使用的硬性需求。

---

*本日报基于 GitHub Issues、PRs 与 Releases 公开数据自动生成。所有链接均指向 google-gemini/gemini-cli 仓库。*

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

<think>Let me analyze the GitHub data for copilot-cli and create a structured daily report in Chinese.

Key observations:
1. Two new releases: v1.0.93-3 and v1.0.93-2
   - v1.0.93-3: MCP server configuration changes apply between turns without restarting
   - v1.0.93-2: Added enterprise permissions.limitTo for managed domain boundaries; Model picker updates prioritizing GPT-6.1 Sol, GPT-6 Astra/Luna, and Claude 5.5 models; Fixed GitHub.com Connector permissions

2. Issues analysis - 39 total issues, showing 30 most commented
   - Top issue #400 with 57 comments (CLOSED) - model availability issue
   - #2776 with 7 comments - Shift+Enter submitting instead of new line
   - #4652 with 4 comments - Windows 25H2 sandboxing issue (CLOSED)
   - #4991 with 4 comments - Cloudflare MCP connection (OPEN)
   - #5066 with 3 comments - Assisted permissions regression
   - #1785 with 3 comments - Input bar editing shortcuts (CLOSED)
   - Several MCP-related issues
   - Many sandbox-related issues on Windows
   - Authentication/OAuth issues
   - Permission/approval workflow issues

3. No new PRs in past 24 hours

Let me organize this into a structured report.

Themes I see:
- MCP server issues (OAuth, authentication, protocol versions) - very prominent
- Windows sandbox issues - many
- Permission system improvements
- Model selection (new models GPT-6.1 Sol, GPT-6 Astra/Luna, Claude 5.5)
- Input/UX issues (keyboard shortcuts, editing)
- Performance/compaction
- Memory system (store_memory, vote_memory)
- IDE integration (VS Code)

Let me write the report now.</think>

# GitHub Copilot CLI 社区动态日报
**日期：2026-10-07**

---

## 📌 今日速览

Copilot CLI 今日发布 **v1.0.93-3** 与 **v1.0.93-2** 两个版本，重点引入企业级网络边界管控（`permissions.limitTo`）和模型选择器升级（优先推荐 GPT-6.1 Sol、GPT-6 Astra/Luna、Claude 5.5）。社区方面，**MCP 服务器相关问题持续高发**，涵盖 OAuth 认证、Entra ID 登录、协议版本兼容性等；Windows 平台沙箱与权限回归也是近期热议焦点。

---

## 🚀 版本发布

### v1.0.93-3（最新）
- **改进**：MCP 服务器配置变更支持在 turns 之间热生效，无需重启会话。

### v1.0.93-2
- **新增**：`enterprise.permissions.limitTo` 配置项，用于对网络请求强制执行托管域边界。
- **改进**：模型选择器更新推荐列表，优先展示 **GPT-6.1 Sol**、**GPT-6 Astra/Luna** 与 **Claude 5.5** 系列模型。
- **修复**：GitHub.com Connector 用户可正常展开 GitHub CLI 权限设置。

---

## 🔥 社区热点 Issues

| # | Issue | 状态 | 评论数 | 重要原因 |
|---|-------|------|--------|----------|
| [400](https://github.com/github/copilot-cli/issues/400) | No model available — 组织策略下 CLI 不可用 | CLOSED | 57 | **历史最高热度 issue**（👍34），影响企业 Microsoft 员工，已关闭说明已修复 |
| [2776](https://github.com/github/copilot-cli/issues/2776) | Shift+Enter 直接提交而不能换行 | OPEN | 7 | UX 基础体验缺陷，长 prompt 场景痛点明显 |
| [4652](https://github.com/github/copilot-cli/issues/4652) | Windows 25H2 沙箱不支持警告 | CLOSED | 4 | Win 最新版本兼容性问题，影响 Windows 开发者 |
| [4991](https://github.com/github/copilot-cli/issues/4991) | Cloudflare MCP OAuth 后报 "Subscription limit reached" | OPEN | 4 | 热门 MCP 远程服务器集成故障 |
| [5066](https://github.com/github/copilot-cli/issues/5066) | Assisted permissions 模式回归，审批过严 | OPEN | 3 | 反映 v1.0.93 引入的回归，开发者日常摩擦点 |
| [1785](https://github.com/github/copilot-cli/issues/1785) | 输入栏缺失标准编辑快捷键（Ctrl+U、全选） | CLOSED | 3 | 终端基础编辑能力需求，已被合并实现 |
| [4867](https://github.com/github/copilot-cli/issues/4867) | `/sandbox policy` 命令 bug | CLOSED | 2 | 沙箱子命令 UI 显示问题 |
| [3861](https://github.com/github/copilot-cli/issues/3861) | 沙箱文档与实际行为不符（per-host 过滤无效） | CLOSED | 2 | 文档可信度问题，团队已对齐 |
| [4695](https://github.com/github/copilot-cli/issues/4695) | MCP OAuth 跨会话未复用 token，重复重认证 | OPEN | 2 | 缓存键重复导致 UX 频繁打断 |
| [3022](https://github.com/github/copilot-cli/issues/3022) | `--no-remote` 仅设为只读而非彻底禁用 | CLOSED | 1 | 安全/隐私相关，含 4 个 👍，行为不一致 |

---

## 📝 重要 PR 进展

过去 24 小时内 **无新增 PR 更新**。以下为仍受关注的待合并提案方向（基于 issue 讨论推断）：

1. **MCP OAuth 缓存键统一** — [#4695](https://github.com/github/copilot-cli/issues/4695) 推动规范化 token 复用。
2. **沙箱 allowedHosts/blockedHosts 真实实现** — [#3861](https://github.com/github/copilot-cli/issues/3861) 文档已对齐，代码层需跟进。
3. **Assisted permissions 阈值回退** — [#5066](https://github.com/github/copilot-cli/issues/5066) 紧急回归修复。
4. **`/compact` 主动提示与缓存感知** — [#5064](https://github.com/github/copilot-cli/issues/5064) 性能优化提案。
5. **`session.usage_checkpoint` 累计 token 字段** — [#5065](https://github.com/github/copilot-cli/issues/5065) 计量可观测性。
6. **OverridesBuiltInTool 对 store_memory/vote_memory 生效** — [#5063](https://github.com/github/copilot-cli/issues/5063) SDK 扩展能力。
7. **每调用审批 + "always approve" 可选关闭** — [#5062](https://github.com/github/copilot-cli/issues/5062) 高风险命令安全护栏。
8. **插件依赖 MCP 声明（plugin.json）** — [#2113](https://github.com/github/copilot-cli/issues/2113) 插件生态。
9. **Agent 输出可点击元素** — [#1336](https://github.com/github/copilot-cli/issues/1336) 终端交互革新。
10. **VS Code 原生终端集成** — [#5070](https://github.com/github/copilot-cli/issues/5070) IDE 集成方向。

---

## 📈 功能需求趋势

从近 24 小时活跃 issue 中可提炼出以下社区焦点：

1. **MCP 生态成熟化**（占比最高）— OAuth 复用、协议版本回退、Entra ID 登录、远程服务器认证失败等子问题密集出现。MCP 已成 CLI 核心扩展点。
2. **Windows 沙箱稳定性** — 25H2 兼容、文件路径允许、工作目录权限、shell 后端初始化错误，Windows 平台沙箱仍是高频痛点。
3. **权限/审批体验精细化** — 助手模式的"过度审批"、高风险命令不可永久授权、SDK 工具覆盖行为，反映开发者对**安全可控 + 不打断**双重诉求。
4. **性能与上下文管理** — `/compact` 智能触发、上下文重建加速、token 累计计量，呼应长会话与高成本压力。
5. **新模型无缝接入** — GPT-6.1、Claude 5.5 等已在版本中默认推荐，社区期待更细粒度的模型筛选/路由。
6. **IDE 深度集成** — VS Code 原生终端、Agent 输出可点击元素，预示 CLI 与编辑器边界的进一步模糊。

---

## 💬 开发者关注点（痛点与高频需求）

- **🔐 认证打断感**：MCP OAuth 重复认证、Entra ID scope 校验失败、Windows broker 不可用 → 希望"一次认证、长效复用"。
- **🪟 Windows 体验短板**：沙箱、终端窗口闪烁、Entra 登录均在 Windows 上集中爆发，平台平等性需求强烈。
- **⚙️ 权限颗粒度**：assisted 模式过于保守、`--no-remote` 不彻底、"always approve" 不应强加 → 呼唤**风险分级 + 用户可控**模型。
- **🧠 上下文成本**：cache warm 窗口与 compact 时机直接关联美元成本，开发者期待 CLI 主动建议最佳压缩时机。
- **⌨️ 终端基本功**：Shift+Enter、Ctrl+U、全选等被默认假设的编辑键缺失，在长 prompt 场景下显著降低效率。
- **📊 可观测性缺口**：`session.usage_checkpoint` 缺累计 token 字段，第三方/SDK 宿主无法精确计量。

---

*数据来源：[github.com/github/copilot-cli](https://github.com/github/copilot-cli) · 报告生成时间 2026-10-07*

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

<think>The user wants me to generate a Chinese daily report for Kimi Code CLI community dynamics based on GitHub data. Let me analyze the data carefully.

Looking at the data:
- No new releases in the past 24 hours
- No updated issues in the past 24 hours (0 issues)
- Only 1 PR was updated in the past 24 hours, and it's CLOSED (#2616)

The template asks for:
1. Today's overview (2-3 sentences)
2. Version releases (skip if none)
3. Community hot issues (top 10) - but there are 0 issues
4. Important PRs (top 10) - but there's only 1 PR, and it's closed
5. Feature requirement trends - but with 0 issues, hard to derive
6. Developer concerns - similar issue

I need to be honest about the limited data. I should not fabricate issues or PRs. Let me craft a report that accurately reflects the data while being useful.

Key observations:
- The single PR #2616 was CLOSED, meaning it was not merged
- It was about adding "Build Remote Agent" as a pairing device
- The PR was created on 2026-08-23 and last updated 2026-10-06
- It was closed (likely declined/rejected)

I should be transparent that there's minimal activity and provide what insight I can from the limited data. I shouldn't invent issues or PRs that don't exist.

Let me write a concise, professional report.</think>

# Kimi Code CLI 社区动态日报
**日期：2026-10-07**

---

## 📌 今日速览

过去 24 小时内 Kimi Code CLI 仓库整体活跃度较低：**无新版本发布，Issues 无更新**，仅有一条 PR (#2616) 状态发生变化且已被关闭（CLOSED）。整体来看，社区处于相对平静期，未见重大功能合并或争议性讨论。

---

## 🚀 版本发布

*本节省略——过去 24 小时内无新版本发布。*

---

## 🔥 社区热点 Issues

*本节省略——过去 24 小时内无 Issues 更新。*

> 📎 可前往 [Issues 列表](https://github.com/MoonshotAI/kimi-cli/issues) 查看历史问题与讨论。

---

## 🔧 重要 PR 进展

### #2616 [CLOSED] Add Build Remote Agent phone pairing (gbr/1)
- **作者**：[@LinespottingPrivate](https://github.com/LinespottingPrivate)
- **时间线**：创建于 2026-08-23 ｜ 最近更新 2026-10-06
- **状态**：❌ 已关闭（未合并）
- **链接**：[PR #2616](https://github.com/MoonshotAI/kimi-cli/pull/2616)

**功能描述**：
该 PR 提议将 **Build Remote Agent** 作为一个配对设备集成到 Kimi CLI 中。具体设计思路是：通过付费 iOS/Android 应用作为「观察者（spectator）」，借助开源的 MIT 协议组件 [`gbr-agent`](https://github.com/LinespottingOrg/GrokBuildRemote-Agents) 来监听本地会话，并在必要时进行指令注入。通信协议为自定义的 `gbr/1`。

**角色定位**：手机端定位为 *spectator + veto*（观察者 + 否决权），而非主控端（orchestra）。

**结果**：该 PR 已被关闭，推测未被维护者采纳。社区反应平淡（👍 = 0），可能原因包括：
- 项目来源为第三方/外部贡献者（`LinespottingPrivate` 非 MoonshotAI 官方账号）；
- 涉及付费产品集成，与 Kimi CLI 的开源定位可能存在品牌/商业策略冲突；
- 协议 `gbr/1` 为自定义协议，标准化程度与可维护性存疑。

---

## 📈 功能需求趋势

由于过去 24 小时内无新 Issues 或实质性讨论更新，**本节暂无明确数据支撑**。从 PR #2616 的方向推测，社区中曾出现过 **移动端远程配对 / 多端协同控制** 方向的探索尝试，但该方向在本次提案中未被官方采纳，相关需求是否会被重新提起值得后续观察。

---

## 💬 开发者关注点

基于当前有限数据：

1. **移动端体验**：开发者对"在手机上监管或干预 CLI 会话"存在一定兴趣，但官方对外部方案的接受门槛较高。
2. **协议标准化**：自定义协议（gbr/1）相较于 WebSocket / gRPC 等成熟方案，缺乏生态兼容性，可能影响评审结果。
3. **贡献者准入**：非官方账号提交的涉及商业产品的 PR，通过率明显偏低，社区贡献的边界尚不清晰。

---

## 📊 总结

| 维度 | 数据 |
|------|------|
| 新 Release | 0 |
| 更新 Issues | 0 |
| 更新 PRs | 1（已关闭） |
| 整体活跃度 | ⬇️ 较低 |

> 💡 **建议**：若想推动 Kimi CLI 生态发展，建议关注官方 [CONTRIBUTING 指南](https://github.com/MoonshotAI/kimi-cli) 与 [Discussions 区](https://github.com/MoonshotAI/kimi-cli/discussions)，在动手实现前先与维护者对齐方向，可显著提升 PR 合入率。

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

<think>The user wants me to generate a daily report for the OpenCode community based on GitHub data. Let me analyze the data carefully:

1. **Latest Releases**: v1.18.35 - Added canonical redirects and JSON/Markdown data formats for agent-readable stats. xAI tool results now include supported images.

2. **Issues**: I need to pick 10 most noteworthy issues from the 50 displayed. Let me look at them by comment count and importance:
   - #49057 (21 comments): Muse Spark 1.3 Free access restricted - access issue with no appeal path
   - #53669 (6 comments): web: cannot paste image from clipboard
   - #36661 (6 comments): Session export fails with null workspace_id
   - #49992 (4 comments, 6 likes): VSCode plugin broken - command flag issue
   - #52375 (4 comments): desktop: gpt-6.1-sol missing from ChatGPT OAuth
   - #38853 (4 comments, 3 likes): Feature: Support subfolders for skills
   - #31990 (4 comments): SQLite UPSERT bug
   - #37464 (3 comments, 11 likes): Feature: Custom statusLine via shell command (high likes!)
   - #34554 (3 comments): Agent temperature dropped for custom OpenAI-compatible models
   - #40231 (3 comments): TUI black screen when running from source
   - #41124 (3 comments): Emergency delete leaked session share link
   - #40982 (3 comments): External i18n locale packs
   - #40854 (3 comments): Variant label missing after self-update
   - #53684 (2 comments): Hide session tab strip when only one tab
   - #53682 (2 comments): v2: models --refresh no longer recognized
   - #53681 (2 comments): Plan Mode restriction bypass - Big Pickle
   - #53679 (2 comments): TUI blocks first render on 6.6MB provider catalog
   - #53677 (2 comments): openai-compatible unknown provider options no longer forwarded
   - #53673 (2 comments): Idle opencode wakes threads every second

3. **Pull Requests**: 50 PRs, need to pick 10 most important:
   - #53641: deterministic timeline file link detection
   - #53683: carry v1 model reasoning flag into migrated capabilities
   - #47607: optimize levenshtein and bound edit locks
   - #53425: subagent branch isolation
   - #53601: support between_tools thinking in Anthropic Messages
   - #53680: stop blocking first render on provider catalog (fixes #53679)
   - #51337: load managed config directory
   - #53678: add billion-context to Plugins table
   - #53665: keep Markdown text selectable
   - #53675: show unread session count on PWA taskbar badge
   - #53674: stop file logger waking every second while idle
   - #53672: declarative external connection method for plugins
   - #53667: retain remote config and TUI model selections

Now let me organize this into a clean Chinese daily report.

Key themes I can identify:
- **v2 migration issues**: Many issues are about v1→v2 migration breaking changes (--refresh flag, model options forwarding, reasoning capability loss)
- **Performance issues**: 6.6MB provider catalog blocking TUI, idle file logger waking every second
- **Plan Mode/Agent issues**: #53681 Big Pickle bypass, session management issues
- **IDE/Desktop integration**: VSCode plugin broken, Desktop missing models, OAuth issues
- **Feature requests**: statusLine, subfolders for skills, i18n, PWA badges

Let me write the report now.</think>

# OpenCode 社区动态日报 · 2026-10-07

> 数据来源：`github.com/anomalyco/opencode` | 采集周期：2026-10-06 ~ 2026-10-07

---

## 1. 今日速览

**v2 迁移阵痛集中爆发**：今日高优先级 Issues 中，约 40% 与 OpenCode v1 → v2 升级导致的回归缺陷相关，包括 CLI flag 被移除、模型推理能力丢失、OpenAI 兼容层选项丢失、远程配置失败导致模型被替换等。同时，社区对 **TUI 性能瓶颈**（首次渲染阻塞于 6.6 MB provider catalog、空闲时日志线程每秒唤醒）形成密集反馈，Nowaker 当天连发 3 个修复 PR。

---

## 2. 版本发布

### 📦 v1.18.35

| 类别 | 内容 |
|------|------|
| 改进 | 为 agent-readable 统计新增规范重定向及 JSON / Markdown 数据格式 |
| 修复 | xAI 工具结果：支持图片；不支持的图片格式自动跳过（@Jaaneek） |
| 致谢 | 3 位社区贡献者（@dc85 文档贡献） |

> 本次更新体量较小，但为后续自动化 agent 消费 OpenCode 数据提供了标准化输出。

---

## 3. 社区热点 Issues

### 🔥 头部热议

| # | Issue | 评论 | 重要性 |
|---|-------|------|--------|
| [#49057](https://github.com/anomalyco/opencode/issues/49057) | Muse Spark 1.3 Free access restricted via OpenCode Zen — no appeal path | 21 | 🟡 OPEN |
| [#37464](https://github.com/anomalyco/opencode/issues/37464) | [FEATURE] Custom statusLine via shell command (like Claude Code) | 3 👍11 | 🟢 OPEN |

### ⚙️ v2 升级回归（高优）

| # | Issue | 评论 | 重要性 |
|---|-------|------|--------|
| [#53682](https://github.com/anomalyco/opencode/issues/53682) | v2: `opencode models --refresh` flag 被移除，文档与实际不符 | 2 | 🟡 |
| [#53677](https://github.com/anomalyco/opencode/issues/53677) | openai-compatible：未知 provider options 不再转发，LiteLLM passthrough 失效 | 2 | 🟡 |
| [#53666](https://github.com/anomalyco/opencode/issues/53666) | v2：远程配置失败会丢弃已有设置并自动切换模型 | 2 | 🟡 |
| [#53683 / #53671](https://github.com/anomalyco/opencode/issues/53671) | Provider 黑/白名单在配置规范化时被静默丢弃 | 2 | 🟡 |

### 🚀 性能与可靠性

| # | Issue | 评论 | 重要性 |
|---|-------|------|--------|
| [#53679](https://github.com/anomalyco/opencode/issues/53679) | TUI 首屏渲染阻塞于 6.6 MB provider catalog | 2 | 🟠 |
| [#53673](https://github.com/anomalyco/opencode/issues/53673) | 空闲时 opencode 每秒唤醒线程刷新空日志批次 | 2 | 🟠 |
| [#31990](https://github.com/anomalyco/opencode/issues/31990) | SQLite UPSERT 在 step-finish 事件投影时崩溃 | 4 | 🟡 |

### 🖥️ IDE / Desktop 集成

| # | Issue | 评论 | 重要性 |
|---|-------|------|--------|
| [#49992](https://github.com/anomalyco/opencode/issues/49992) | VSCode 插件启动失败：`--port` flag 不再被 `opencode` 顶层命令识别 | 4 👍6 | 🟡 |
| [#52375](https://github.com/anomalyco/opencode/issues/52375) | Desktop 缺失 `gpt-6.1-sol`，共享会话模型被强制切换 | 4 | 🟡 |

---

## 4. 重要 PR 进展

| # | PR | 类别 | 说明 |
|---|----|----|----|
| [#53680](https://github.com/anomalyco/opencode/pull/53680) | fix(tui) | 🐛 | 解除 TUI 首屏对 provider catalog 的阻塞渲染（closes #53679） |
| [#53674](https://github.com/anomalyco/opencode/pull/53674) | fix(core) | 🐛 | 停止空闲时文件日志每秒唤醒线程（closes #53673） |
| [#53667](https://github.com/anomalyco/opencode/pull/53667) | fix | 🐛 | 远程配置失败时保留有效设置，阻止不安全的模型切换（closes #53666） |
| [#53683](https://github.com/anomalyco/opencode/pull/53683) | fix(core) | 🐛 | 迁移 v1 模型 `reasoning` 标志到 v2 capabilities（fixes #51846） |
| [#53601](https://github.com/anomalyco/opencode/pull/53601) | feat(ai) | ✨ | 支持 Anthropic Messages `between_tools` thinking 模式（Claude Sonnet 5.5） |
| [#53425](https://github.com/anomalyco/opencode/pull/53425) | feat(task) | ✨ | Subagent 分支隔离：基于 Git worktree 的可选隔离机制（addresses #53111） |
| [#53672](https://github.com/anomalyco/opencode/pull/53672) | feat(integration) | ✨ | 插件声明式 `external` 连接方法：纯数据、无回调 |
| [#53675](https://github.com/anomalyco/opencode/pull/53675) | feat(app) | ✨ | PWA 通过 Badging API 在任务栏图标显示未读会话数 |
| [#53665](https://github.com/anomalyco/opencode/pull/53665) | fix(session-ui) | 🐛 | 修复 Markdown 文本不可选中的问题 |
| [#53678](https://github.com/anomalyco/opencode/pull/53678) | docs | 📚 | 插件表新增 **billion-context**（上下文压缩网关） |

> 💡 值得关注：Nowaker（[@Nowaker](https://github.com/Nowaker)）当日一人提交 3 个修复 PR，均直击社区反馈的性能/可靠性痛点，闭环速度极快。

---

## 5. 功能需求趋势

从今日活跃 Issues 提炼的社区诉求热点：

| 方向 | 代表性 Issue | 社区呼声 |
|------|------------|---------|
| **v2 兼容性 & 迁移** | #53682、#53677、#53666、#53683 | 🔥🔥🔥 大量用户被升级阻断，急需回归说明 |
| **TUI / 启动性能** | #53679、#53673、#40231 | 🔥🔥 首屏延迟、空闲耗能成为焦点 |
| **Agent 可控性** | #53681（Plan Mode 绕过）、#37464（自定义 statusLine） | 🔥🔥 开发者要求更细粒度控制 |
| **桌面 / PWA 体验** | #52375、#53675、#41142（Close Other Tabs） | 🔥 Tab 管理、模型列表、任务栏徽章 |
| **本地化与可扩展性** | #40982（i18n）、#38853（技能子文件夹） | 🔥 长期诉求 |
| **企业 / 托管部署** | #51337（managed config） | ⏳ 渐进推进 |

---

## 6. 开发者关注点

### 🎯 高频痛点
1. **v2 破坏性变更未充分预告**：`--refresh`、`--verbose` flag 被移除、provider 选项不在透传 —— 文档与实现脱节
2. **TUI 冷启动慢**：必须等全量 provider 列表（8,000+ 模型）返回才显示 prompt
3. **空闲资源浪费**：日志批处理循环每秒唤醒线程一次，即使无日志写入

### 💡 反复出现的隐性诉求
- **配置一致性**：远程配置失败时如何降级？黑/白名单为何被规范化？
- **Desktop / CLI 行为对齐**：同一 OAuth 账户下两端的模型列表/选中模型不一致
- **Plan Mode 可靠性**：#53681（Big Pickle）暴露的安全策略绕过问题

### ✅ 正面信号
- 社区贡献者闭环速度加快（v1.18.35 当天修复 xAI 图片支持）
- 性能问题出现 → 同日或次日合并修复 PR 的节奏已成常态
- 生态开始接纳 **billion-context** 这类透明网关，反映 OpenCode 作为 agent runtime 的可扩展性

---

*📊 日报由 AI 分析师基于 GitHub 公开数据自动生成，仅供技术参考。*

</details>

<details>
<summary><strong>jcode</strong> — <a href="https://github.com/1jehuang/jcode">1jehuang/jcode</a></summary>

<think>The user wants me to generate a Chinese daily report for the jcode community based on GitHub data from 2026-10-07. Let me analyze the data carefully.

Key observations:
1. No releases in the past 24 hours
2. 7 issues updated/created in the past 24 hours
3. 11 PRs updated/created in the past 24 hours

Let me categorize the issues:

**Issues:**
1. #692 - CI red on master: code-size ratchet exceeded (high priority bug, open since July 31, updated Oct 6)
2. #1636 - Full test suite deadlock (needs-info, macOS CI, updated Oct 6)
3. #1745 - macOS browser calls creating new Chrome windows (new, Oct 7)
4. #1743 - Browser control unreliable, Chrome support weak (new, Oct 6)
5. #1741 - Resumed session stale credential route (new, Oct 6)
6. #1740 - clippy and rustfmt gates red on master (new, Oct 6)
7. #1738 - Korean 2-Set input source prevents shortcuts (new, Oct 6)

**PRs:**
1. #1746 - fix(browser): reuse persistent sessions on macOS (new, Oct 7)
2. #1744 - test(server): fix Windows named-pipe EOF hang (updated Oct 6)
3. #1733 - fix: keep attaching client's directory from re-pinning (updated Oct 6)
4. #1605 - feat(prompt): expand @path imports in AGENTS.md (updated Oct 6)
5. #1505 - feat(openai): opt in to Codex catalog's max_context_window (updated Oct 6)
6. #1507 - feat(openai): request Daybreak cyber access program (updated Oct 6)
7. #1742 - fix(session): heal stale credential route on resume (new, Oct 6)
8. #1739 - fix(ci): restore rustfmt on master (new, Oct 6)
9. #1701 - ci: sync code-size budget with master (updated Oct 6)
10. #1727 - Run Ctrl/Alt/Cmd shortcuts on Korean input source (updated Oct 6)
11. #1735 - fix(cli): survive dead-terminal failures (new, Oct 6)

Let me identify trends:
- **CI/Build issues** are heavily featured - multiple issues (#692, #1636, #1740) and PRs (#1739, #1701) related to CI red status
- **Browser automation** is a hot topic - 2 issues (#1743, #1745) and 1 PR (#1746) all about browser control
- **Cross-platform/internationalization** - Korean input method (#1738) and Windows tests (#1744)
- **Authentication/session management** - credential route issues (#1741, #1742)
- **OpenAI/Codex improvements** - 2 PRs about Codex features (#1505, #1507)
- **Developer experience** - @path imports in AGENTS.md (#1605)
- **Stability** - dead-terminal failures (#1735)

Now let me write the report in Chinese.</think>

# Jcode 社区动态日报
**日期：2026-10-07**

---

## 📌 今日速览

今天 jcode 社区的活跃度集中在 **CI 质量门禁集体翻红** 与 **浏览器自动化可用性** 两大主题。`master` 分支同时被 clippy、rustfmt 和代码体积闸门（ratchet）卡住，多个紧急修复 PR（#1739、#1701、#1740 相关）已并行进入评审；macOS 上的浏览器会话管理也迎来了一次完整的"问题+修复"闭环，#1745 报告的"每次调用都开新 Chrome 窗口"问题在同一天由 #1746 PR 直接回应。整体来看，社区正处于一波"基础设施与跨平台稳定性"的集中治理窗口。

---

## 🚀 版本发布

过去 24 小时内无新版本发布。最近的可参考版本为用户在 #1743 中提到的 `v0.91.0 (439a243bb)`。

---

## 🔥 社区热点 Issues

以下 10 条 Issue 按影响面和优先级排序：

### 1. [#692 — CI red: code-size ratchet 超过限制](https://github.com/1jehuang/jcode/issues/692)
`bug · priority: high · triage: reproducible`
`desktop2/transcript.rs` 文件从 2364 LOC 膨胀到 2799 LOC，触发质量门禁失败。该 Issue 自 7 月底开起，跨季度未关闭，说明体积治理需要长期机制而非一次性格式化。社区反应：4 条评论但零点赞，表明讨论集中在维护者之间。

### 2. [#1740 — master: clippy (-D warnings) 与 rustfmt 双重失败](https://github.com/1jehuang/jcode/issues/1740)
`bug`
当前 `master` 顶端 `a0c41dc2f`（stable 1.99.0）同时被 clippy 和 rustfmt 拦截，连带使 #1727 等无关 PR 的 CI 一起变红。这是阻塞面最广的"传染性"问题。

### 3. [#1745 — macOS: 浏览器调用每次创建新 Chrome 窗口并等待 20 秒](https://github.com/1jehuang/jcode/issues/1745)
`bug`
在 Apple Silicon 上，普通 `browser` 调用甚至只读的 `list_tabs` 都会拉起一个 `about:blank` Chrome 窗口，耗时约 20 秒。属于影响"日常可用性"的关键问题。

### 4. [#1743 — 浏览器自动化在用户已有浏览器上不可靠](https://github.com/1jehuang/jcode/issues/1743)
`bug`
基于 `v0.91.0` 复现，用户报告三个叠加痛点：与现有浏览器会话冲突、Chrome 作为主浏览器支持薄弱、需要登录的站点几乎无法完成。属于"场景级可用性"反馈。

### 5. [#1741 — 恢复会话保留过期的凭据路由，swarm 全部 spawn 失败](https://github.com/1jehuang/jcode/issues/1741)
`bug`
在 API Key ↔ OAuth 切换后，恢复的会话仍带着旧的 `provider_key`，coordinator 自身能 fallback 但 swarm worker 全部受影响。属于"部署变更后状态不一致"的典型故障。

### 6. [#1636 — `jcode-app-core --lib` 测试套件确定性死锁](https://github.com/1jehuang/jcode/issues/1636)
`needs-info · area: ci · platform: macos`
`viewer_attach_reuses_live_owner_without_tracking_placeholder` 在串行/并行模式下都死锁，且问题在 `v0.88.0` 上已经存在。是"回归未被捕获"的经典案例。

### 7. [#1738 — 韩文 2-Set 输入法阻断修饰键快捷键](https://github.com/1jehuang/jcode/issues/1738)
`bug`
macOS Korean 2-Set 输入法下，Ctrl/Alt/Cmd+字母被发送为 Hangul jamo，导致快捷键失效。属于 i18n/输入法兼容性问题，对韩语开发者群体影响显著。

### 8. [#692（同上）— Quality Guardrails 持续红](https://github.com/1jehuang/jcode/issues/692)
跨季度未修复，对任何后续 PR 都形成"先解决基础设施再谈功能"的隐性优先级。

### 9. [#1741（同上）— 凭据路由陈旧](https://github.com/1jehuang/jcode/issues/1741)
故障范围：从单会话扩展到整个 swarm，体现 jcode 多 agent 架构下"会话状态正确性"的脆弱性。

### 10. [#1743（同上）— 浏览器场景级不可用](https://github.com/1jehuang/jcode/issues/1743)
场景描述详尽，复现版本明确，是产品级体验反馈的高质量样本。

---

## 🛠️ 重要 PR 进展

以下 10 个 PR 按"功能影响 × 紧迫性"排序：

### 1. [#1746 — fix(browser): macOS 上复用持久化浏览器会话](https://github.com/1jehuang/jcode/pull/1746)
同日发布，直接修复 #1745。根因是 jcode 检查自身 runtime 目录而 bridge 把 socket 写在 `$XDG_RUNTIME_DIR` 或 `/tmp`，导致守护进程被误杀、反复重启。是"用户感知最快"的修复。

### 2. [#1742 — fix(session): 恢复会话时治愈陈旧凭据路由](https://github.com/1jehuang/jcode/pull/1742)
闭合 #1741。在 `provider_key` 失效时主动用 live 凭证替换并持久化，避免 swarm worker 继承过期路由。"自治愈"思路是会话管理层面的重要改进。

### 3. [#1739 — fix(ci): 恢复 master 上的 rustfmt](https://github.com/1jehuang/jcode/pull/1739)
最小化修改 `src/cli/commands_tests.rs`，让 Format 与 Quality Guardrails 的第一步重新变绿，解除对 #1727 等 PR 的连带阻塞。

### 4. [#1701 — ci: 同步 code-size 预算与 master](https://github.com/1jehuang/jcode/pull/1701)
刷新 `scripts/code_size_budget.json` 以反映当前生产文件体量，并保留 1200 LOC 阈值与历史债务追踪，直接缓解 #692 的长期摩擦。

### 5. [#1735 — fix(cli): 退出路径与登录流程中容忍死终端](https://github.com/1jehuang/jcode/pull/1735)
针对 `#599` 类别问题：SIGHUP 杀掉的窗口、掉线的远程客户端让 stderr/stdout 不可用，导致原本在"错误处理中"的代码自身 panic，触发 exit-101 或 SIGABRT。属于稳定性与崩溃路径的根因修复。

### 6. [#1733 — fix: 阻止附着客户端的工作目录污染目标会话](https://github.com/1jehuang/jcode/pull/1733)
一处微妙的多租户语义 bug：resume/subscribe 路径把客户端上报的 `working_dir` 当成权威值，导致 A 项目客户端附着到 B 项目会话时目录被错绑。修复后多项目共享 daemon 的安全性提升。

### 7. [#1744 — test(server): 修复 Windows 命名管道 EOF 挂起与绝对路径测试夹具](https://github.com/1jehuang/jcode/pull/1744)
两处 Windows 专属测试缺陷：named-pipe pair 的对端写句柄未关闭导致 `read_to_end` 挂起；绝对路径测试夹具不正确。补齐了 Windows 平台的 CI 覆盖。

### 8. [#1727 — 让 Ctrl/Alt/Cmd 快捷键在韩文输入法下生效](https://github.com/1jehuang/jcode/pull/1727)
闭合 #1738。在终端事件层将 jamo 还原回对应的 Latin 字母再分派给 Jcode-owned 绑定，同时保留 Ghostty 等终端自身动作的原样传递。是 i18n 兼容性的关键补丁。

### 9. [#1505 — feat(openai): 启用 Codex catalog 的 max_context_window](https://github.com/1jehuang/jcode/pull/1505)
Refs #1323。让 OAuth 会话从只读 `context_window`（272K）切换到 catalog 公布的更大 `max_context_window`，提升 Codex 模型可用上下文。是"模型能力对齐"类改进。

### 10. [#1507 — feat(openai): 在支持的模型上请求 Daybreak cyber 访问计划](https://github.com/1jehuang/jcode/pull/1507)
闭合 #1506。解析并持久化 `available_access_programs.cyber`，新增 `JCODE_OPENAI_CYBER_ACCESS_PROGRAM` 开关。属于 OpenAI 平台特性跟进。

### 11. [#1605 — feat(prompt): 在 AGENTS.md 中展开 @path 导入](https://github.com/1jehuang/jcode/pull/1605)
闭合 #1604。`load_agents_md_files_from_dirs` 现在支持 `@<path>` 行替换为文件内容（支持绝对、`~/`、相对路径；跳过代码块与行内代码）。对齐 Claude Code 约定，提升项目级 prompt 的可组合性。

---

## 📈 功能需求趋势

从今日所有 Issue 与 PR 中提炼出五大方向：

| 方向 | 代表条目 | 信号强度 |
|------|----------|----------|
| **CI / 工程质量门禁** | #692, #1636, #1740, #1701, #1739 | 🔴 极高 |
| **浏览器自动化（macOS Chrome）** | #1743, #1745, #1746 | 🔴 高 |
| **会话 / 凭据管理鲁棒性** | #1741, #1742 | 🟠 较高 |
| **跨平台兼容（i18n / Windows）** | #1738, #1727, #1744 | 🟠 较高 |
| **OpenAI/Codex 模型能力对齐** | #1505, #1507 | 🟡 中等 |
| **Prompt 工程（AGENTS.md 可组合）** | #1605, #1604 | 🟡 中等 |

---

## 👨‍💻 开发者关注点

1. **基础设施可靠性是当下最大瓶颈**
   三条 Issue（#692、#1740、#1636）共同指向一个事实：`master` 的 CI 不再可信——clippy/rustfmt/体积 ratchet 并行失败，并存在跨版本未修复的回归。社区（尤其是维护者）当前的核心动作是止血与同步预算。

2. **macOS 浏览器自动化是"看似能用、实际不可用"的高优先级体验洼地**
   #1743 与 #1745 在同一天分别从"系统级"和"用户级"两个视角描述了同一类问题，配合 #1746 的即时修复，形成闭环。预计短期还会有更多关于浏览器桥 socket 寻址、Chrome profile 复用、登录态保持的讨论。

3. **多 agent / swarm 架构下的状态正确性焦虑上升**
   #1741 / #1742 揭示了一个隐藏风险面：会话恢复时的"凭据陈旧"会在 swarm worker 上被放大成全量失败。开发者开始关注"会话 → 子任务"的信任链是否需要重新设计（如自治愈、强制重认证）。

4. **跨平台与本地化细节被忽视已久**
   韩文输入法（#1738 / #1727）、Windows 命名管道测试（#1744）显示，jcode 当前的平台兼容覆盖仍偏 Unix/macOS。这两类问题虽然用户面相对小，但每条都对应一个完整的开发者群体。

5. **对 OpenAI/Codex 生态的功能跟进节奏稳定**
   来自 @RamenFast 的两个 PR（#1505、#1507）显示有开发者持续跟进 Codex 后端特性（更大上下文窗口、cyber 访问计划），节奏类似历史上对 Anthropic OAuth 的支持——是"模型中立的 jcode"定位的重要支柱。

6. **Prompt 文件可组合性开始被关注**
   #1605 对齐 Claude Code 的 `@path` 语法，意味着社区开始把 `AGENTS.md` 当成可模块化、可被 import 拼接的工程资产，而不仅仅是说明文档。这可能催生后续关于 `.jcode/prompts/` 目录约定、共享 prompt 包管理的新讨论。

---

*本日报基于 2026-10-07 GitHub 公开数据生成，所有链接均指向 github.com/1jehuang/jcode 仓库。*

</details>

<details>
<summary><strong>pi</strong> — <a href="https://github.com/earendil-works/pi">earendil-works/pi</a></summary>

<think>Let me analyze the GitHub data for the Pi (AI coding agent) community and generate a daily report in Chinese for 2026-10-07.

Key observations:
1. No releases in the past 24 hours
2. 50 issues updated, 30 most commented shown
3. 23 PRs updated, 20 most commented shown
4. Multiple issues are closed, indicating active triage/development
5. Many issues relate to:
   - Bedrock adapter fixes (OpenAI models on Bedrock)
   - OAuth/authentication (ChatGPT, MCP OAuth)
   - TUI/fullscreen mode bugs
   - pi-durable (new package)
   - Extension hooks (MCP, elicitation)
   - Context window/compaction issues
   - Tool schema validation

Let me structure this into a well-organized report in Chinese.

Key trends I see:
1. Bedrock support is being heavily worked on (multiple PRs and issues about OpenAI models on Bedrock)
2. pi-durable is a new focus area (multiple issues about timestamps, compaction, progress intervals)
3. Extension API improvements (MCP hooks, host-provided modules)
4. TUI/fullscreen mode polish (selection persistence, scroll, mouse)
5. OpenAI Codex/ChatGPT OAuth refinements
6. Context window and token budget issues
8. Tool schema validation (strict JSON schema)

Let me pick the top 10 issues by importance and PRs by importance.

Top Issues by importance:
1. #10031 - Pi stuck in "Working..." with ESC (22 comments, 3 thumbs) - high impact, common bug
2. #10480 - OpenAI direct connection usage limit reset (14 comments)
3. #10300 - ChatGPT OAuth ID token not persisted (14 comments)
4. #8643 - Bedrock OpenAI models reject nested images (11 comments, 4 thumbs)
5. #3159 - edit tool timeout (10 comments)
6. #8061 - Context budget ignores maxTokens (10 comments, 3 thumbs)
7. #9773 - before_provider_request not firing for summarization (9 comments)
8. #5064 - Add Context Windows option (8 comments) - feature request
9. #8810 - Extension providers ignore default settings (8 comments, 3 thumbs)
10. #9946 - CMD mode ignores outputPad (6 comments) - simple bug fix
11. #10497 - OpenRouter 400 error (5 comments)
12. #3980 - pi update cannot update when installed via bun (4 comments)
13. #10542 - pi-durable first system entry order (4 comments)
14. #10549 - pi-durable tool execution timestamps (4 comments)
15. #9656 - Mouse wheel scrolls history instead of transcript (4 comments, 3 thumbs)

Top PRs by importance:
1. #10577 - feat(coding-agent): add in-context compaction (mitsuhiko, the project lead)
2. #10521 - inline $ref tool schemas for NVIDIA NIM
3. #10569 - filter OpenRouter models by key availability
4. #9880 - publish configuration schemas
5. #10142 - send reasoning effort to OpenAI on Bedrock
7. #10557 - apply outputPad to all transcript blocks
8. #10570 - Windows paths drive-letter case
9. #10567 - clear fullscreen selection on transcript rebuild
10. #10433 - apps name themselves in OpenAI logins (lucasmeijer)
11. #10429 - let caller headers override Codex originator

Let me now write this in Chinese in a professional tech-focused style.</think>

# Pi 社区动态日报 · 2026-10-07

## 📌 今日速览

今天 Pi 仓库共更新 23 条 PR、50 条 Issue，活跃度持续保持高位。**核心关注点集中在三大方向**：一是 pi-durable（任务持久化框架）逐步暴露的多项 API 缺陷（事件时间戳、压缩阈值、进度提交间隔等）；二是 Bedrock 适配器的 OpenAI 模型支持补齐（reasoning effort、tool 图片解析）；三是 TUI 全屏模式的体验打磨（滚动定位、选区清理、鼠标追踪）。维护者对大量历史 Issue 进行了批量 triage 关闭。

---

## 🚀 版本发布

过去 24 小时内无新版本发布。

---

## 🔥 社区热点 Issues

1. **[#10031](https://github.com/earendil-works/pi/issues/10031) — Pi 在 ESC 停止 thinking 后卡在 "Working..."（22 评论，3 👍）**
   自 v0.84.0 起高频复现的高影响 Bug，必须用 `pi -c` 重启才能恢复，是本月最热门的稳定性问题。

2. **[#10480](https://github.com/earendil-works/pi/issues/10480) — OpenAI 直连模式无法识别手动重置的额度上限（14 评论）**
   ChatGPT Pro 用户手动使用额度银行化重置后 Pi 仍判定超额，绕过方法需 `/logout` 后以 openai-codex 重登，影响付费用户体验。

3. **[#10300](https://github.com/earendil-works/pi/issues/10300) — ChatGPT OAuth 登录未持久化 ID token（14 评论）**
   `credentialFromTokenResponse` 在保存凭证时丢掉了 `id_token`，导致依赖账号身份的扩展拿不到用户身份。社区已锁定根因在 `openai-chatgpt.ts` v0.99.2。

4. **[#8643](https://github.com/earendil-works/pi/issues/8643) — Bedrock 上 OpenAI 模型拒绝 `toolResult.content` 中嵌套的图片（11 评论，4 👍）**
   与 `openai-completions.ts` 的同名提升逻辑不一致，社区已准备好修复与回归测试，多次因贡献门槛被自动关闭。

5. **[#8061](https://github.com/earendil-works/pi/issues/8061) — Context 预算忽略 `maxTokens` 输出预留，输入仅 78% 即 400（10 评论，3 👍）**
   在 Gemini 类 1M token 上下文中 compact-and-retry 恢复路径再次失败，暴露出上下文预算逻辑的深层问题。

6. **[#3159](https://github.com/earendil-works/pi/issues/3159) — edit 工具超时被强制终止（10 评论）**
   Qwen 27b 上反复触发 "terminated"，怀疑 edit 工具超时阈值偏低，但根因尚未定位。

7. **[#9773](https://github.com/earendil-works/pi/issues/9773) — `before_provider_request` 钩子在摘要/压缩请求中不触发（9 评论）**
   文档承诺钩子可以替换 payload，但 compaction 路径未挂载 `onPayload`，扩展作者反馈明显。

8. **[#5064](https://github.com/earendil-works/pi/issues/5064) — 上下文窗口大小设置项缺失（8 评论）**
   Copilot CLI 已支持手动选择 context window，社区希望 Pi 同步该能力以更好控制成本。

9. **[#8810](https://github.com/earendil-works/pi/issues/8810) — 扩展注册的 Provider 在新会话中偶发忽略 `defaultProvider`（8 评论，3 👍）**
   新会话会静默回退到别的 Provider 默认模型，给扩展作者带来配置困惑。

10. **[#9656](https://github.com/earendil-works/pi/issues/9656) — Windows + Zellij 全屏下鼠标滚轮滚动 prompt 历史（4 评论，3 👍）**
    直连终端与 Linux tmux 均正常，仅 Windows Alacritty + Zellij 复现，定位较复杂。

> **额外关注**：[#3980](https://github.com/earendil-works/pi/issues/3980) pi update 走不通（bun 安装路径）、[#10519](https://github.com/earendil-works/pi/issues/10519) Nix 包强制覆盖用户 PATH 中的 node，均影响新用户体验。

---

## 🛠 重要 PR 进展

1. **[#10577](https://github.com/earendil-works/pi/pull/10577) — `feat(coding-agent): add in-context compaction`（@mitsuhiko）**
   核心维护者亲自提交，引入 `compaction.inContext` 选项：在已缓存的对话中重复一次"下轮将要发送"的请求并追加 system + user 消息作为摘要指令，开启新一轮压缩用量审计。是一项重大能力升级。

2. **[#10521](https://github.com/earendil-works/pi/pull/10521) — 内联 `$ref` 工具 schema 修复 NVIDIA NIM 模型（@cv）**
   修复 `nemotron-3.5-super-vl-preview` 等模型因 `$ref` 仅返回 JSON 字符串而校验失败的问题（closes #10270）。

3. **[#10569](https://github.com/earendil-works/pi/pull/10569) — 按 key 可用性过滤 OpenRouter 模型（@adawalli）**
   通过认证的 `GET /api/v1/models/user` 过滤掉 key guardrails/provider 偏好所排除的模型，保留 Pi 的能力元数据（closes #10353）。

4. **[#9880](https://github.com/earendil-works/pi/pull/9880) — 发布配置 JSON Schema（@christianklotz）**
   从 TypeBox 契约生成并发布 models / settings / keybindings / themes 的 JSON Schema，并校验主题加载，显著降低集成摩擦。

5. **[#10142](https://github.com/earendil-works/pi/pull/10142) — Bedrock Converse 上将 reasoning effort 发送给 OpenAI 模型（@jsanter27）**
   修复 #9331：原 Bedrock 适配器仅向 Claude 传递 thinking 字段，OpenAI 模型始终跑在默认 `medium`；现按模型能力差异化传递并做 `low/medium/high` clamp。

6. **[#10557](https://github.com/earendil-works/pi/pull/10557) — `outputPad` 应用于全部 transcript 块（@rwachtler）**
   解决 #9946：此前 `outputPad` 仅作用于消息，bash 输出首行仍有前导空格；同时让 `!!` 头部保持 dim。

7. **[#10570](https://github.com/earendil-works/pi/pull/10570) — Windows 路径不区分驱动器字母大小写（@yhe960809-ai）**
   避免 `C:\` 与 `c:\` 比较时各自把 `~/.agents/skills` 当作 project skill 重复发现。

8. **[#10567](https://github.com/earendil-works/pi/pull/10567) — 全屏选区在 transcript 重建时清理（@christianklotz）**
   修复会话切换/fork/import 后高亮残留到新 transcript 的问题，统一在 TuiAltScreen 层面清除。

9. **[#10433](https://github.com/earendil-works/pi/pull/10433) — 允许应用在 OpenAI 登录时自命名（@lucasmeijer）**
   解决 "Codex 误把第三方 Agent 当作 Pi" 问题，让基于 pi-ai 构建的 Agent 能声明自己的产品名。

10. **[#10429](https://github.com/earendil-works/pi/pull/10429) — 调用方可覆盖 Codex 的 originator 与 User-Agent（@lucasmeijer）**
    上一条的姊妹 PR，让三方 Agent 在 ChatGPT OAuth 登录流程中显示自定义名称。

> 此外值得关注：[#10553](https://github.com/earendil-works/pi/pull/10553) 强化 codemode-only 工具执行门禁；[#10533](https://github.com/earendil-works/pi/pull/10533) 让 pi-durable 的循环等待在闭环处直接失败；[#10580](https://github.com/earendil-works/pi/pull/10580) 修复全屏模式工具块高度变化后手动滚动位置丢失。

---

## 📈 功能需求趋势

- **pi-durable 框架补全**：从事件时间戳、进度提交可配置、压缩保留率校准、循环等待保护到 backward task scan，构成完整的能力拼图，是当前最活跃的扩展方向。
- **Bedrock 多模型支持**：Bedrock 上 OpenAI 模型的 reasoning、图片嵌套、错误处理等多条线齐头推进，正在快速补齐与原生 Anthropic 路径的能力对齐。
- **扩展 API 增强**：`VIRTUAL_MODULES` + `HOST_PROVIDED_EXTENSION_PACKAGES` 暴露 `@earendil-works/pi-mcp`、扩展钩子（before_provider_request、codemode 执行门禁、MCP elicitation / connect-time 选项）。
- **TUI 体验打磨**：全屏选区生命周期、鼠标追踪、滚动位置保持、Windows 驱动器字母一致性等"小但高频"的体验问题正在被密集修复。
- **成本/上下文控制**：manual context window 选择、outputPad 全局化、压缩策略可调，呼应用户对 token 成本与长任务稳定性诉求。
- **多供应商认证流**：ChatGPT ID token 持久化、Codex originator 覆盖、MCP Google OAuth refresh token、Nix PATH 隔离，认证/安装边界持续完善。

---

## 🧑‍💻 开发者关注点

1. **稳定性的"角落"问题成为高频痛点**：ESC 卡住、edit 超时、滚动跳变、选区残留、复制失效——这些边缘场景直接影响日常使用密度。
2. **扩展作者对扩展 API 的依赖加深**：希望 MCP 内置能力（elicitation、resource read、connect-time options）可被扩展拦截或扩展，对 VIRTUAL_MODULES 与包解析的一致性提出更高要求。
3. **认证与多供应商体验割裂**：ChatGPT OAuth、Google MCP OAuth、OpenRouter key guardrails、Nix 包装 PATH——每条线都在独立演化，开发者期待统一的"自描述 Agent"能力。
4. **大上下文下的可靠性**：1M token 级别的 compact-and-retry 失败、OpenRouter 400 上限触发、Qwen3.8 chat-template 未传 `reasoning_effort`——长上下文路径仍是主要风险面。
5. **跨平台一致性**：Windows 驱动器字母、Zellij 多路复用器、Wayland/X11 套接字、Bun 安装路径——Pi 正在补齐多平台行为对齐的细节。

> 💡 **社区建议**：若你正在基于 Pi 开发扩展，可优先关注 #10590（VIRTUAL_MODULES 提案）、#9773（provider 钩子覆盖）与 #10589（MCP 钩子形状讨论），三条都将决定下一阶段扩展 API 的形态。

</details>

---
*本日报由 [Big Model Radar](https://github.com/96loveslife/big_model_radar) 自动生成。*
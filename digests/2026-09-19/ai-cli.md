# AI CLI 工具社区动态日报 2026-09-19

> 生成时间: 2026-09-19 04:03 UTC | 覆盖工具: 8 个

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

<think>The user wants a horizontal comparison analysis report based on the daily dynamics of 7 AI CLI tools (Claude Code, OpenAI Codex, Gemini CLI, GitHub Copilot CLI, Kimi Code CLI, OpenCode, jcode, pi). Let me create a comprehensive comparison report following the 6 sections requested.

Let me analyze the key data points:

**Activity Summary (past 24 hours):**

| Tool | Releases | Issues | PRs |
|------|----------|--------|-----|
| Claude Code | 2 (v2.1.277, v2.1.278) | ~30 | 8 |
| OpenAI Codex | 6 (0.155.1 + 5 alphas) | ~30 | 20+ |
| Gemini CLI | 1 (nightly) | 50 | 36 |
| GitHub Copilot CLI | 1 (v1.0.87-0) | 32 | 0 |
| Kimi Code CLI | 0 | 9 | 1 |
| OpenCode | 0 | 30+ | 35 |
| jcode | 1 (v0.85.0) | 30 | 35 |
| pi | 0 | 50 | 20 |

**Common themes I can identify:**

1. **AGENTS.md / Agent compatibility standards** - Claude Code shipped AGENTS.md, jcode, Copilot CLI both have related issues
2. **MCP (Model Context Protocol) integration** - Major focus for Codex, Copilot CLI, Gemini
3. **Subagent reliability** - Gemini (subagent pseudo-success), Codex (subagent MCP sharing), jcode (subagent MCP), pi
4. **Provider/model expansion** - All tools expanding model catalogs (pi added Meta Muse, GLM updates, OpenCode Zen Qwen, etc.)
5. **TUI performance** - pi (CPU issues), Claude Code (rendering), Codex (button spins)
6. **Cross-platform issues** - Windows especially problematic for Codex, Kimi, Claude Code
7. **Data loss/safety concerns** - Codex (recursive deletion), OpenCode (compact data loss)
8. **Configuration consistency** - Many tools have ambient config issues
9. **Hook/extension system** - jcode (extensive hooks), Claude Code (Mods), Gemini (skills)
10. **Session management** - All have session-related issues

**Differentiation:**
- Claude Code: AGENTS.md leadership, Mods system
- Codex: Heavy focus on safety/sandbox, Mac/Windows polish
- Gemini CLI: AST-aware analysis, subagent reliability
- Copilot CLI: Enterprise/Org management
- Kimi Code CLI: Smaller, focused on Linux/macOS fixes
- OpenCode: Desktop performance, provider coverage
- jcode: Most aggressive hook/extension system, swarm reasoning
- pi: Embedded agent runtime vision, model catalog breadth

**Maturity assessment:**
- Most mature: Claude Code, Copilot CLI (enterprise-ready)
- Rapidly iterating: Gemini CLI, jcode, pi
- Stable but small: Kimi Code CLI
- Mid-stage: OpenCode, Codex

Let me write the report now. I'll use a professional, concise Chinese tone suitable for technical decision makers and developers.</think>

# AI CLI 工具生态横向对比分析报告
**日期：2026-09-19 · 数据窗口：过去 24 小时**

---

## 1. 生态全景

2026 年 Q3 的 AI CLI 工具生态已进入 **"分化加速期"**：头部工具（Claude Code、Codex）凭借生态标准制定权（AGENTS.md、安全护栏）持续巩固护城河；中等规模玩家（Gemini CLI、Copilot CLI、jcode、pi）在 **Agent 可靠性、Provider 适配速度、TUI 性能** 三个维度展开差异化竞争；尾部工具（Kimi Code CLI、OpenCode）则各自瞄准细分场景（Linux/Unix 鲁棒性、桌面端轻量化）。从今日动态看，**"Mods/Hooks/Plugins"** 作为新一代扩展机制正取代传统配置成为标配；**MCP 协议** 已从加分项变为必选项；**多模型目录管理** 的同步与漂移问题成为新的共性痛点。

---

## 2. 各工具活跃度对比

| 工具 | 今日 Release | Issues 更新数 | PR 更新数 | 关键信号 |
|------|-------------|--------------|----------|---------|
| **Claude Code** | 2 (v2.1.277, v2.1.278) | ~30 | 8 | AGENTS.md 落地、Mods 体系精修、Windows 桌面持续告急 |
| **OpenAI Codex** | 6 (rust-v0.155.1 + 5 alphas) | ~30 | 20+ | 0.156 密集预发布、Windows 沙箱成"重灾区"、安全护栏诉求强烈 |
| **Gemini CLI** | 1 (nightly) | 50 | 36 | AST 感知工具有望落地、Subagent 可靠性爆发、Auto Memory 安全讨论 |
| **GitHub Copilot CLI** | 1 (v1.0.87-0) | 32 | 0 | PR 静默、MCP 集成成为最大热点、Session 子系统承压 |
| **Kimi Code CLI** | 0 | 9 | 1 | 活动量最低、Linux HTTP 头部批量修复、VSCode 插件改进 |
| **OpenCode** | 0 | 30+ | 35 | 桌面端启动性能重构（@Hona 主导）、v2.0 回归清账 |
| **jcode** | 1 (v0.85.0) | 30 | 35 | Hook 体系大爆发（pre_request/pre_tool/compaction）、Provider 扩张 |
| **pi** | 0 | 50 | 20 | Meta Muse OAuth 接入、Prompt 缓存预热、TUI 性能焦虑 |

> 📊 **活跃度综合排序**（综合 Issues+PR+Release 数）：**Gemini CLI ≈ pi > jcode ≈ OpenCode > Codex ≈ Copilot CLI > Claude Code > Kimi Code CLI**

---

## 3. 共同关注的功能方向

多个工具社区正在同步推动以下需求，反映出**用户认知和优先级高度趋同**：

### 🔗 AGENTS.md / 跨工具 Agent 标准
- **Claude Code**：v2.1.277 正式落地，与 Codex/Amp/Cursor 对齐
- **Copilot CLI**：#4822 用户希望支持 AGENTS.md 的符号链接解析
- **OpenCode**：未明确表态但 v2.0 系列的目录约定与之密切相关
- **趋势**：AGENTS.md 正在成为事实标准，未跟进的工具面临"用户带走门槛"

### 🔌 MCP（Model Context Protocol）集成稳定性
- **Copilot CLI**：占当日 Issue 约 20%（#4870 Figma、#4901 Atlassian OAuth、#4907 重连噪音）
- **Codex**：#40865 远程 SSH 下 MCP 能力降级、#28858 MCP pagination 协议层问题
- **Gemini CLI**：#29200 修复 MCP 策略一致性，PR 侧持续强化
- **jcode**：#2892 sub-agent MCP stdio ~4 秒断开
- **趋势**：MCP 从"是否能用"进入"企业级生产链路"阶段，**OAuth 客户端标识、错误码、重连策略** 是当前最大瓶颈

### 🛡️ Agent 安全护栏与破坏性操作保护
- **Codex**：#33624、#46022 出现 GPT-5.6 递归删除主目录、Windows 跨项目删除事故
- **Gemini CLI**：#22672 担心 `git reset --force` 等破坏性命令
- **趋势**：**Full Access ≠ 全权放任**，社区要求对破坏性批量操作强制二次确认 + 可恢复快照

### 📦 扩展机制（Mods / Hooks / Plugins / Skills）
- **Claude Code**：Mods 体系（#91870 函数级 Hook）
- **jcode**：pre_request（#1280）、pre_tool（#1279）、compaction lifecycle（#1282）、schedule（#1281）—— 全套 Hook
- **Gemini CLI**：Skills/Sub-agents 激活率低（#21968）、Browser Agent 配置覆盖失效（#22267）
- **Copilot CLI**：Skills 子文件夹（#1632）、扩展命令重复触发（#4264）
- **趋势**："**Hook 体系 + Subagent 共享指令 + 持久化状态**" 是新一代扩展机制的三件套

### 🖥️ 跨平台稳定性（尤其 Windows）
- **Codex**：Windows 沙箱 helper 错误已成"高频模板"（#42513/44425/44309/44696），侧边栏项目消失、生命周期 hooks 延迟 17–25s
- **Claude Code**：Job Object / 非分页池泄漏、Silo 残留（#53247、#94198）
- **Kimi Code**：Linux HTTP 头部批量修复、macOS 2.0.0 剪贴板回归
- **jcode**：Windows 死锁（#1201）、Ghostty 焦点风暴（#1184）
- **趋势**：**Windows 是 Agent 工具的"试金石"**，沙箱 + PTY + 权限栈是核心挑战

### 💾 Session / 会话管理
- **Copilot CLI**：session 元数据陈旧、git checkout 触发批量刷新、并发写入丢配置
- **OpenCode**：v2.0 迁移跳过晚于首次 V2 启动的会话（#49641）、多实例消息串扰（#38008）
- **Gemini CLI**：/compress 不持久化（#21335）、ACP session 加载异常（#29368）
- **趋势**：Session 系统正从"扁平文件"演化为**多版本迁移、跨设备同步、并发协调** 的复杂子系统

### ⚡ TUI 性能与渲染
- **pi**：Mac 长会话 CPU 100%+（#7730）、fullscreen 重绘整段 transcript（#9549）
- **Claude Code**：停靠 diff 面板首屏"Loading diff…"中间态（#95488 已修复）
- **趋势**：**大 transcript 下的渲染开销** 成为长会话场景的核心瓶颈

---

## 4. 差异化定位分析

| 工具 | 核心定位 | 目标用户 | 技术路线特征 |
|------|---------|---------|--------------|
| **Claude Code** | **生态标准制定者 + Mods 平台** | 追求前沿 + 高度可扩展的资深开发者 | AGENTS.md 引领者；Mods + 子代理体系；服务端分类器节省计费 |
| **OpenAI Codex** | **安全护栏 + 沙箱成熟度** | 企业用户、Windows/macOS 重度用户 | macOS Seatbelt + Windows helper 双沙箱栈；Full Access 高门槛 + 强保护 |
| **Gemini CLI** | **代码库深度理解（AST）** | 大型代码库研究者、Agent 重度用户 | AST 感知工具集；Auto Memory 系统；Browser Subagent 路线 |
| **GitHub Copilot CLI** | **企业 / Org 级管控** | 团队 / 企业部署场景 | 严格 managed policy；MCP 客户端标准化；跨 CLI/IDE 一致性 |
| **Kimi Code CLI** | **Linux/macOS 鲁棒性 + VSCode 集成** | 中文开发者、VSCode 重度用户 | 简洁栈、专注 IDE 集成、HTTP 头部等底层细节 |
| **OpenCode** | **桌面端轻量化 + 启动性能** | 注重桌面体验的多平台用户 | 桌面冷启动优化（@Hona 主线）；artifact tab 富化；非 UTF-8 兼容 |
| **jcode** | **最强 Hook / Provider 扩展框架** | 高度自定义需求的"高级玩家" | Swarm + Deep Swarm 双层；全套生命周期 Hook；subprocess provider 协议 |
| **pi** | **可嵌入 Agent 运行时** | 嵌入式集成、SDK 用户 | pi.dev 包生态；扩展注入系统 prompt；多模型即插即用 |

> 💡 **关键差异点**：
> - **扩展机制深度**：jcode > Claude Code > Copilot CLI > Gemini CLI > OpenCode ≈ pi > Codex > Kimi
> - **多模型支持广度**：pi > jcode > OpenCode > Gemini CLI > Copilot CLI > Codex > Kimi > Claude Code（仅 Anthropic 系列）
> - **企业成熟度**：Copilot CLI > Codex > Claude Code > Gemini CLI > 其他

---

## 5. 社区热度与成熟度

| 维度 | 高 | 中 | 低/早期 |
|------|-----|----|--------|
| **Issues 热度**（评论/点赞数） | Claude Code (#6235: 400 评论/5169👍)、Codex (#33624: 43 评论) | Gemini CLI (#21409: 8👍/8 评论)、Copilot CLI (#1632: 24👍) | Kimi Code (👍 2 居多) |
| **迭代速度**（PR 数） | jcode (35)、Gemini CLI (36)、pi (20) | OpenCode (35)、Codex (20+) | Copilot CLI (0 PR，今日异常静默) |
| **社区成熟度信号** | 官方维护者活跃、有 bot 自动化体系、版本节奏稳定 | 第三方贡献参与、有架构讨论 | 主要靠维护者独自推动、Issue 回复慢 |

### 阶段定位
- **🟢 规模化平台期**：Claude Code、Codex、Copilot CLI —— 有标准化议程（MCP、AGENTS.md、Enterprise policy）
- **🟡 快速迭代期**：Gemini CLI、jcode、pi —— 架构变动频繁、新功能密集
- **🟠 专注打磨期**：OpenCode —— 桌面端深度优化
- **🔴 早期维护期**：Kimi Code CLI —— 解决具体 Bug，缺乏重大特性推动

---

## 6. 值得关注的趋势信号

### 🚨 信号一：**数据丢失成为最大信任风险**
- Codex 连续多起 GPT-5.6 删除事故（#33624、#46022）
- OpenCode `/compact` 静默提交空摘要销毁对话（#44080）
- Claude Code #81472 把 42 个复制/粘贴相关 issue 串联，揭示底层不可见的数据流风险

**对开发者的启示**：在生产环境部署 Agent 时，**默认开启"快照 + 二次确认"** 应成为基线；评估工具时把"破坏性操作可恢复性"列为硬性指标。

### 🚨 信号二：**MCP 协议从"加分项"升级为"必选项"，但标准化滞后**
- 多个工具的 MCP 集成问题都指向同一根因：OAuth 客户端标识、错误码处理、重连策略缺乏统一规范
- Figma、Atlassian 等第三方 Provider 在不同 CLI 客户端行为不一致

**对开发者的启示**：选择工具时优先考察其 MCP 传输层的一致性；自建 MCP Server 时，应参考头部工具的错误处理规范。

### 🚨 信号三：**"Hook 体系"成为差异化新战场**
- jcode 已建立最完整的 Hook 矩阵（pre_request / pre_tool / compaction lifecycle / schedule）
- Claude Code Mods 体系（#91870 函数级 Hook）正加速
- Gemini CLI、OpenCode 也在演进各自的扩展层

**对开发者的启示**：评估工具时关注"**是否允许你拦截关键生命周期事件**"——这是从"用户"升级为"平台构建者"的入口。

### 🚨 信号四：**多模型目录管理成为新瓶颈**
- pi 报告 GLM 模型目录与官方不同步（#9616）
- OpenCode 报告 Zen 端点缺 Qwen3.8 Flash（#49888）
- jcode 报告 OpenRouter 槽位被复用导致误判（#1286）

**对开发者的启示**：当工具接入 >5 个模型目录时，**目录同步与 schema 漂移** 会成为日常摩擦点；可考虑为模型元数据建立独立配置文件。

### 🚨 信号五：**桌面端冷启动性能进入"毫秒级优化"阶段**
- OpenCode @Hona 连续提交 4 个 perf PR，把 shell 渲染与服务器发现解耦
- Claude Code diff 面板预读仓库避免中间态
- Copilot CLI 关注 `--prompt` 解析延迟

**对开发者的启示**：桌面端体验已成为头部工具的"第二战场"；如果你的工作流重度依赖 IDE/桌面端而非纯 CLI，**冷启动到首帧的时间** 应作为选型指标。

### 🚨 信号六：**Subagent 可靠性从"功能存在"升级为"可观测性 + 终止语义"**
- Gemini CLI：subagent 触发 MAX_TURNS 后仍报 GOAL success（#22323）、挂死（#21409）
- OpenCode：并行 agent 卡死导致整批 abort（#37315）
- Codex：subagent MCP 共享机制（#46577）

**对开发者的启示**：**不要把 subagent 当成"黑盒并发加速器"**——关注它的终止语义（成功/超时/失败的可区分性）、状态可观测性、上下文共享边界。

---

## 📌 给技术决策者的建议

| 场景 | 优先选择 | 理由 |
|------|---------|------|
| **企业 / 团队部署** | Copilot CLI + Claude Code | MCP 标准化、Managed Policy、AGENTS.md 互操作性 |
| **多模型实验与切换** | pi / jcode | Provider 接入最快、Hook 体系完整 |
| **大型代码库深度分析** | Gemini CLI | AST 感知工具、Auto Memory、Subagent 路线 |
| **Windows / 桌面端重度用户** | 暂缓，等待 Codex 0.156 稳定 + Claude Code Windows 修复 | 沙箱与桌面稳定性仍脆弱 |
| **极致可定制** | jcode | 全套 Hook + 双层 Provider 扩展 + Swarm 体系 |
| **轻量 / IDE 集成** | Kimi Code CLI / OpenCode | 小而美、专注具体场景 |

---

**报告生成时间**：2026-09-19 · **数据窗口**：过去 24 小时 GitHub 公开数据 · **覆盖工具**：8 款主流 AI CLI

> 🔔 **明日观察重点**：①Copilot CLI PR 是否恢复活跃 ②Codex 0.156 正式版是否发布 ③Claude Code Mods 体系文档是否上线 ④jcode @file 提及 PR #1268 合并进展 ⑤pi Prompt 缓存预热 PR #9668 落地节奏。

---

## 各工具详细报告

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills 社区热点

> 数据来源: [anthropics/skills](https://github.com/anthropics/skills)

<think>The user wants me to analyze the Claude Code Skills community data and generate a report. Let me carefully analyze the data provided.

Looking at the data:
- The PRs all show "评论: undefined" which means the comment count isn't displayed for PRs in the data. So I need to work with what I have - the PR descriptions, recency, and content.
- The Issues DO have comment counts.

Wait, looking more carefully at the user's request:
1. "热门 Skills 排行" - based on PRs (most discussed/focused). Since PR comments are undefined, I should look at recency, content relevance, and other signals.
2. "社区需求趋势" - from Issues
3. "高潜力待合并 Skills" - active PRs that are not merged
4. "Skills 生态洞察" - one-sentence summary

Let me think about this more carefully. The data shows PRs with undefined comments but I can infer popularity from update dates (recent activity = more engagement), author reputation, and the nature of the change.

Let me categorize the PRs by theme:
- **Bug fixes to existing skills**: #1298 (skill-creator), #1742 (mcp-builder), #538 (pdf), #539 (skill-creator), #541 (docx), #1765 (office redlining), #1769 (skill-creator trigger detection), #1724 (mcp-builder model update)
- **New Skills proposals**:
  - #1771 proofcore-contract-auditor (Web3 smart contract auditing on TON blockchain)
  - #1703 md2video-audio (Markdown to video with voiceover)
  - #525 pyxel (retro game development in Python)
  - #514 document-typography (typographic quality control)
  - #1615 scnet-hpc (HPC cluster operations)
  - #486 ODT skill (OpenDocument)
  - #210 frontend-design improvements
  - #83 skill-quality-analyzer and skill-security-analyzer (meta skills)
  - #1776 blast-radius (destructive operation checklist)
  - #822 AWT (AI Watch Tester, E2E testing)
  - #1628 Hivemind (multi-agent orchestration)
  - #1734 Detect orphaned docx comments

For Issues - these have actual comment counts:
- #492 [43 comments] Security: Community skills impersonating anthropic/ namespace
- #228 [16 comments] Org-wide skill sharing in Claude.ai
- #556 [12 comments] run_eval.py 0% trigger rate bug
- #62 [10 comments] Skills disappeared
- #1329 [9 comments] compact-memory proposal
- #202 [8 comments] skill-creator should be updated
- #412 [6 comments] agent-governance proposal
- #189 [6 comments] duplicate skills in plugins
- #1487 [4 comments] claude-api skill context window exhaustion
- #1390 [4 comments] mcp-builder evaluation fabrication
- #1385 [4 comments] Reasoning Quality Gate Pipeline
- #1175 [4 comments] SharePoint security concerns
- #29 [4 comments] Usage with bedrock
- #16 [4 comments] Expose Skills as MCPs
- #1362 [3 comments] web-artifacts-builder pnpm issues

Now let me draft the report.

For "热门 Skills 排行" - I'll select PRs based on:
- Recency (recent activity signals ongoing community interest)
- Content significance
- Diverse functionality coverage

Top picks:
1. #1771 proofcore-contract-auditor - Web3/blockchain innovation, very recent
2. #1703 md2video-audio - Multimedia content creation
3. #525 pyxel - Game development
4. #1628 Hivemind - Multi-agent orchestration (huge trend)
5. #822 AWT - E2E testing
6. #1776 blast-radius - Safety/risk management
7. #1615 scnet-hpc - HPC/scientific computing
8. #83 skill-quality-analyzer/skill-security-analyzer - Meta skills

For "社区需求趋势":
- Trust/Security: #492 (most commented), security concerns (#1175)
- Sharing/distribution: #228 (org sharing), #189 (duplicates), #16 (MCP)
- Testing/evaluation: #556, #1390 (both about evaluation bugs)
- Memory/state management: #1329 compact-memory
- Reasoning quality: #1385
- Ecosystem integration: #29 (Bedrock), #16 (MCPs)
- Quality of skill authoring: #202 skill-creator improvement

For "高潜力待合并":
- All PRs are still OPEN, so all are pending. I should pick ones with recent activity and high impact.
- #1298 skill-creator fixes - directly improves core tooling
- #1769 skill-creator trigger detection fix - critical bug
- #1742 mcp-builder mcp>=2 fix - dependency update
- #1724 mcp-builder model update to sonnet-5
- #1765 office redlining UTF-8 fix
- #541 docx tracked change fix
- #538 pdf case-sensitivity fix
- #539 skill-creator YAML validation

For "生态洞察":
The most concentrated demand seems to be: **trust, safety, and reliability** of the Skills ecosystem itself — security (#492 is the #1 issue), evaluation reliability (#556, #1390, #1769, #1298 all about broken evals), and lifecycle management (#62 disappeared skills, #189 duplicates, #228 sharing).

Let me write a clean, professional report. The user wants concise points with GitHub links.

Actually, looking again at the PR list - they are all OPEN, none merged. So all PRs shown are pending. I should still differentiate by importance.

Let me write the report now in Chinese, professional tone, with each item including GitHub link.

Format structure:
1. 热门 Skills 排行 (5-8 PRs)
2. 社区需求趋势 (synthesized from Issues)
3. 高潜力待合并 Skills (active, impactful PRs not yet merged)
4. Skills 生态洞察 (one sentence)

Let me make sure each item has the GitHub link as required.</think>

# Claude Code Skills 社区热点报告
**数据周期：2025-10 至 2026-09（截止 2026-09-19）**

---

## 一、热门 Skills 排行

以下 PR 涵盖近期最受社区关注的 Skill 提案，覆盖多媒体、区块链、游戏、HPC、AI 工程化等多元方向。

| # | Skill | 核心功能 | 状态 | 链接 |
|---|-------|---------|------|------|
| 1 | **proofcore-contract-auditor** (#1771) | 对 Solidity/Rust 智能合约做静态分析，并将审计证明锚定到 TON 区块链 | OPEN | [#1771](https://github.com/anthropics/skills/pull/1771) |
| 2 | **md2video-audio** (#1703) | 将 Markdown 文档零成本转换为带拟人化配音的 MP4 视频（Marp + TTS） | OPEN | [#1703](https://github.com/anthropics/skills/pull/1703) |
| 3 | **Hivemind** (#1628) | 多 Agent 编排，让 Claude Code 把机械任务分发给 headless opencode 廉价模型 | OPEN | [#1628](https://github.com/anthropics/skills/pull/1628) |
| 4 | **AWT (AI Watch Tester)** (#822) | 给 Claude 视觉 + 浏览器控制能力，自动生成并执行 E2E 测试 | OPEN | [#822](https://github.com/anthropics/skills/pull/822) |
| 5 | **blast-radius** (#1776) | 破坏性批量写操作前的检查清单（删档、批量发邮、权限回收等） | OPEN | [#1776](https://github.com/anthropics/skills/pull/1776) |
| 6 | **Pyxel** (#525) | 用 Python 写复古游戏的 Skill，含确定性 headless 帧检测 | OPEN | [#525](https://github.com/anthropics/skills/pull/525) |
| 7 | **scnet-hpc** (#1615) | 通过 profile 化 SSH + Slurm 工作流操作 SCNet HPC 集群 | OPEN | [#1615](https://github.com/anthropics/skills/pull/1615) |
| 8 | **skill-quality-analyzer + skill-security-analyzer** (#83) | 元 Skill 集，从结构/文档/功能/可维护性等维度审计其它 Skill 质量 | OPEN | [#83](https://github.com/anthropics/skills/pull/83) |

**讨论热点**：多媒体生成（视频、TTS）、多 Agent 编排（Hivemind）、AI 自测能力（AWT）、破坏性操作前的"防爆"护栏（blast-radius）是社区最兴奋的方向；同时，**Skill 本身的元治理（quality / security analyzer）** 也已从单纯提案走向实际 PR。

---

## 二、社区需求趋势

从 Issues 评论分布可以提炼出五大诉求主线：

### 1. 信任与安全边界（最高热度）
- **#492 [43 评论]** — 社区 Skill 借 `anthropic/` 命名空间冒充官方，构成信任边界滥用 → [链接](https://github.com/anthropics/skills/issues/492)
- **#1175 [4 评论]** — SharePoint 场景下把权限逻辑写进 SKILL.md 的安全性担忧 → [链接](https://github.com/anthropics/skills/issues/1175)

### 2. 评估/触发机制失灵（工程层痛点）
- **#556 [12 评论]** — `run_eval.py` 中 `claude -p` 触发率恒为 0%，所有 Skill 都过不了评估 → [链接](https://github.com/anthropics/skills/issues/556)
- **#1390 [4 评论]** — `mcp-builder` evaluation 对真实 MCP server 全部伪造错误，得分 0/N → [链接](https://github.com/anthropics/skills/issues/1390)

### 3. Skill 生命周期与分发
- **#62 [10 评论]** — 用户上传的 Skill 莫名消失 → [链接](https://github.com/anthropics/skills/issues/62)
- **#228 [16 评论]** — 组织内 Skill 共享仍依赖手动下载上传，缺乏共享库 → [链接](https://github.com/anthropics/skills/issues/228)
- **#189 [6 评论]** — `document-skills` 与 `example-skills` 插件安装重复 Skill → [链接](https://github.com/anthropics/skills/issues/189)
- **#16 [4 评论]** — 希望将 Skill 暴露为 MCP，供其它 Agent 调用 → [链接](https://github.com/anthropics/skills/issues/16)

### 4. 推理质量与 Agent 治理
- **#1385 [4 评论]** — 三道闸门（预校准 → 对抗性评审 → 交付验证）的质量管线提案 → [链接](https://github.com/anthropics/skills/issues/1385)
- **#412 [6 评论]** — Agent Governance Skill：策略执行、威胁检测、信任评分、审计 → [链接](https://github.com/anthropics/skills/issues/412)
- **#1329 [9 评论]** — compact-memory：长任务 Agent 的紧凑符号化记忆表示 → [链接](https://github.com/anthropics/skills/issues/1329)

### 5. 生态兼容与扩展
- **#29 [4 评论]** — 在 AWS Bedrock 上使用 Skills 的支持诉求 → [链接](https://github.com/anthropics/skills/issues/29)
- **#1487 [4 评论]** — `claude-api` Skill 单次注入约 156k token，直接撑爆上下文 → [链接](https://github.com/anthropics/skills/issues/1487)
- **#202 [8 评论]** — skill-creator 自身更像开发文档而非可执行 Skill，需重写为最佳实践 → [链接](https://github.com/anthropics/skills/issues/202)
- **#1362 [3 评论]** — web-artifacts-builder 在 pnpm ≥10.1 上打包失败 → [链接](https://github.com/anthropics/skills/issues/1362)

---

## 三、高潜力待合并 Skills

以下 PR 处于 OPEN 状态、近期活跃、修复或新增高价值能力，最可能在近期落地：

| PR | 影响面 | 为什么高潜力 | 链接 |
|----|--------|--------------|------|
| **#1298** skill-creator 触发评估隔离 | 核心元工具 | 修复 Windows + 运行时误报，所有 Skill 都受益 | [#1298](https://github.com/anthropics/skills/pull/1298) |
| **#1769** skill-creator 触发检测显示 0% recall | 核心元工具 | 解决 precision=100%/recall=0% 失真评估，配套 #556 | [#1769](https://github.com/anthropics/skills/pull/1769) |
| **#539** skill-creator YAML 描述符校验 | 核心元工具 | 在解析前捕获冒号未引号包裹导致的静默截断 | [#539](https://github.com/anthropics/skills/pull/539) |
| **#1742** mcp-builder 适配 mcp≥2 + 自定义 header | 高频集成点 | 跟随上游 SDK API 重命名，影响所有 MCP 类项目 | [#1742](https://github.com/anthropics/skills/pull/1742) |
| **#1724** mcp-builder 默认模型升级到 claude-sonnet-5 | 评估质量 | 替换已偏旧的 sonnet-3.7 快照 | [#1724](https://github.com/anthropics/skills/pull/1724) |
| **#1765** office (DOCX/PPTX/XLSX) 红线 diff 按 UTF-8 解码 | 跨平台可用性 | 修复 Windows/非 UTF-8 locale 下波兰文等字符被截断 | [#1765](https://github.com/anthropics/skills/pull/1765) |
| **#541** docx 跟踪变更 w:id 与书签冲突 | 数据完整性 | 防止向含书签的 docx 写入跟踪变更时损坏文档 | [#541](https://github.com/anthropics/skills/pull/541) |
| **#538** pdf SKILL.md 大小写引用错误 | 跨平台可用性 | Linux 区分大小写场景下的链接断裂 | [#538](https://github.com/anthropics/skills/pull/538) |
| **#1734** 检测孤立 docx 注释 | 数据完整性 | 配套 docx 鲁棒性增强 | [#1734](https://github.com/anthropics/skills/pull/1734) |
| **#514** document-typography 排印质量控制 | 通用质量提升 | 解决孤行/寡行/编号错位——每个文档生成都受益 | [#514](https://github.com/anthropics/skills/pull/514) |

> 共同特征：**围绕 skill-creator、mcp-builder、office 三大基础 Skill 的修复合集**，集中解决"评估不可信"、"跨平台兼容性"、"文档工程鲁棒性"三个老问题。

---

## 四、Skills 生态洞察（一句话）

> **社区当前最集中的诉求是"治理优先于增长"——信任边界安全（#492）、评估引擎失真（#556 / #1390 / #1769）、Skill 生命周期与分发（#62 / #228 / #189）这三类基础设施问题，已经盖过了对新功能 Skill 的呼声，Skills 生态正在从"能力扩展期"进入"质量与可信期"。**

---

*报告基于 anthropics/skills 公开数据（2026-09-19 快照）整理；所有 PR 当前均为 OPEN 状态，尚未合入主干。*

---

<think>Let me analyze the GitHub data for Claude Code and create a comprehensive Chinese daily report for 2026-09-19.

Key observations:
1. Two releases: v2.1.277 (AGENTS.md support) and v2.1.278 (server-side classifier for auto mode)
2. The AGENTS.md support landed (issue #6235 finally closed - 400 comments, 5169 thumbs up!)
3. Issue #91870 "Mods" feature is actively being shipped
4. Multiple Windows-related bugs are emerging
5. Many desktop app bugs around Remote Control
6. PR #95409 adds the agents-md mod source code

Let me structure the report well, focusing on the most important items.

For the top 10 issues, I should pick based on:
- Comment count
- Thumbs up
- Recency
- Importance/strategic value

Top 10 Issues by importance:
1. #6235 - AGENTS.md support (CLOSED, 400 comments, 5169 👍) - Major win
2. #91870 - Mods feature (201 comments) - Major upcoming feature
3. #18435 - Multiple Claude accounts in Desktop (192 comments, 815 👍)
4. #53247 - Windows desktop crash bug (98 comments)
5. #77651 - Assistant text lost silently (interleaved thinking) (11 comments)
6. #87647 - 6k issues auto-closed meta-bug (49 👍)
7. #81472 - Copy/paste META tracking issue (11 👍)
8. #95326 - Chrome reddit.com blocked
9. #94198 - CoworkVMService memory leak
10. #47579 - Co-Authored-By without consent (closed)

Top 10 PRs (limited to 8 actually):
1. #94847 - diff pane first edit improvement (OPEN)
2. #95488 - docked pane reads repo before open (CLOSED)
3. #95476 - diff pane first edit logic (CLOSED)
4. #95423 - shell command read-only optimization (OPEN)
5. #95198 - openPane type fix (CLOSED)
6. #95417 - agents-md mod - no nested Read (CLOSED)
7. #95409 - AGENTS.md project-instructions mod (CLOSED)
8. #51452 - README rewrite (CLOSED)

Trends to identify:
- AGENTS.md / project instructions support
- Windows desktop stability
- Mods/Plugins extensibility
- Multi-account management
- Remote Control issues
- LSP integration
- Copy/paste reliability

Let me write this in a clean, professional Chinese style.</think>

# Claude Code 社区动态日报
**日期：2026-09-19**

---

## 📌 今日速览

今天最重大的事件是 **AGENTS.md 支持正式落地**（v2.1.277）—— 社区呼声最高的 issue #6235（400 评论、5169 👍）随之关闭，标志着 Claude Code 在多代理生态互操作性上迈出关键一步。同时 v2.1.278 调整了自动模式的分类器策略，改为默认走服务端分类器以节省计费。Windows 桌面端的稳定性问题持续发酵，多个 Job Object / 非分页池泄漏类 Bug 被集中报告，"Mods" 扩展体系也在快速迭代中。

---

## 🚀 版本发布

### v2.1.278
- 调整 API / Enterprise / Bedrock / Vertex / Foundry / 网关用户的自动模式：默认切换至 **服务端分类器**，不再为分类流程计费；通过 `CLAUDE_CODE_AUTO_MODE_SERVER=0` 可关闭（仅 Bedrock、Vertex、Foundry、网关支持）。

### v2.1.277
- **新增 AGENTS.md 支持**：项目内若无 `CLAUDE.md`，Claude Code 将读取 `AGENTS.md`；可通过 `/config` 中的 "Project instructions" 切换（Bedrock / Vertex / Foundry 暂未支持）。
- 新增 `CLAUDE_GATEWAY_PROXY_IS_EGRESS_BOUNDARY=1`，用于标识"网关的出口即为应用出口边界"的代理场景。

---

## 🔥 社区热点 Issues

| # | Issue | 状态 | 热度 | 为何重要 |
|---|-------|------|------|----------|
| [#6235](https://github.com/anthropics/claude-code/issues/6235) | **AGENTS.md 支持** | ✅ CLOSED | 400 评论 / 5169 👍 | 长期 Top 1 呼声，今天随 v2.1.277 落地关闭，正式对齐 Codex、Amp、Cursor 的 agent 标准 |
| [#91870](https://github.com/anthropics/claude-code/issues/91870) | **Mods：让 Claude 扩展性提升 10 倍** | 🟢 OPEN | 201 评论 / 121 👍 | 官方社区更新：函数级 Hook 即将上线，定义下一代扩展机制 |
| [#18435](https://github.com/anthropics/claude-code/issues/18435) | **Desktop 多账号管理与切换** | 🟢 OPEN | 192 评论 / 815 👍 | 个人 / 工作身份隔离的高频需求，815 赞同表明强烈共识 |
| [#53247](https://github.com/anthropics/claude-code/issues/53247) | **Windows Desktop 启动失败** | 🟢 OPEN | 98 评论 / 35 👍 | 崩溃后遗留 Silo / Job Object，仅注销或重启可恢复，影响所有 Win 用户 |
| [#81472](https://github.com/anthropics/claude-code/issues/81472) | **复制/粘贴全面崩坏（META）** | 🟢 OPEN | 6 评论 / 11 👍 | 整合 42 个相关 issue，TUI、VS Code、Desktop 全平台根因追踪 |
| [#77651](https://github.com/anthropics/claude-code/issues/77651) | **思考块之间的助手文本静默丢失** | 🟢 OPEN | 11 评论 | 不渲染、Ctrl+O 不显示、`.jsonl` 不持久化——影响调试与回溯 |
| [#87647](https://github.com/anthropics/claude-code/issues/87647) | **自 2026-03 起 6k+ 带 "has repro" 的 issue 被自动关闭** | 🟢 OPEN | 7 评论 / 49 👍 | 揭示仓库治理流程争议，bot 关闭机制遭质疑 |
| [#95326](https://github.com/anthropics/claude-code/issues/95326) | **Claude in Chrome 自 9-18 起无法访问 reddit.com** | 🟢 OPEN | 2 评论 / 2 👍 | 突然回归，所有工具报 "safety restrictions" |
| [#94198](https://github.com/anthropics/claude-code/issues/94198) | **CoworkVMService 非分页池泄漏（NtFC/ntfs.sys）** | 🟢 OPEN | 5 评论 | 内存以 ~230 MB/min 泄漏，重启可解，关闭不行；与 #95489 同源 |
| [#47579](https://github.com/anthropics/claude-code/issues/47579) | **未经同意添加 Co-Authored-By** | ✅ CLOSED (duplicate) | 11 评论 | 涉及 git 提交署名伦理，已标记为重复 issue |

---

## 🛠 重要 PR 进展

| PR | 状态 | 内容 |
|----|------|------|
| [#94847](https://github.com/anthropics/claude-code/pull/94847) | 🟢 OPEN | 首个 Edit 才打开 diff 面板，且只在有可列文件时才打开，避免空白面板 |
| [#95488](https://github.com/anthropics/claude-code/pull/95488) | ✅ CLOSED | 停靠 diff 面板在打开前预读仓库，避免出现 "Loading diff…" 中间态 |
| [#95476](https://github.com/anthropics/claude-code/pull/95476) | ✅ CLOSED | 仅主循环 + checkpointing 开启时才在首个 Edit 自动开面板，子代理 / 无 checkpoint 行为更可控 |
| [#95423](https://github.com/anthropics/claude-code/pull/95423) | 🟢 OPEN | `diff` mod 跳过只读 shell 调用后的无意义 refetch，节省 token 与渲染开销 |
| [#95198](https://github.com/anthropics/claude-code/pull/95198) | ✅ CLOSED | `openPane` 类型调整为 `Promise<unknown>`，向前兼容 `$.ui.open` 的新返回值 |
| [#95417](https://github.com/anthropics/claude-code/pull/95417) | ✅ CLOSED | `--bare` / `CLAUDE_CODE_DISABLE_ATTACHMENTS` 场景下 AGENTS.md mod 不再附着嵌套 Read，行为对齐引擎 |
| [#95409](https://github.com/anthropics/claude-code/pull/95409) | ✅ CLOSED | **新增 `mods/agents-md` 模块源码**：以 mod 形式实现 AGENTS.md 加载，可通过 `instructionFiles` 选项配置 |
| [#51452](https://github.com/anthropics/claude-code/pull/51452) | ✅ CLOSED | 重写 README，去除 AI 写作腔，修复 npm badge 失效问题 |

> 今天的 PR 高度集中在 **`diff` mod 打磨** 与 **`agents-md` mod 上线** 两条线，标志 Mods 体系已进入"逐个模块精修"阶段。

---

## 📈 功能需求趋势

从过去 24 小时活跃 Issue 中可识别出五大方向：

1. **多代理生态兼容** — AGENTS.md 已落地，但 `mods/agents-md` 的实现细节仍在演进（#95409、#95417），后续会扩展到 Bedrock / Vertex / Foundry。
2. **扩展机制（Mods / Plugins）** — 函数级 Hook 与 LSP 集成成为下一个重点（#91870、#95507）；LSP hint-severity 诊断被推入上下文导致 token 浪费是当前的痛点。
3. **桌面端稳定性与远程控制** — Windows 平台的 Job Object / 非分页池泄漏成为主题（#53247、#94198、#95489、#95491），Remote Control 在自动更新后丢失的问题反复出现（#95407、#95491）。
4. **多账号与身份管理** — Desktop 多账号切换（#18435）继续是高赞需求。
5. **UX 细节与可访问性** — 透明背景主题（#89606）、Markdown 链接 / abbr title 悬浮提示（#95508）、iOS deep link 打开指定 session（#95478）等"细节决定体验"的功能持续被提出。

---

## 💬 开发者关注点

- **AGENTS.md 的下一步**：标准已对齐，但 `instructionFiles` 命名、嵌套 Read 行为（#95417）、Bedrock 等平台的回填进度仍是讨论焦点。
- **Windows 桌面持续崩坏**：Job Object、Silo、ntfs.sys NtFC、FSWATCH probe 38k 次/秒（#95489）——开发者普遍要求官方提供诊断日志与自助恢复路径，而非仅靠重启。
- **Mods 的边界与文档**：开发者期待清晰的"mod 编写指南"，目前 #91870 的进展帖已成为事实上的路线图来源。
- **Git 署名与伦理**：Co-Authored-By 未经同意写入（#47579）反映出对默认行为透明度（disclosure / opt-out）的更高要求。
- **远程控制 / 自动更新的副作用**：当 stealth auto-update 杀死 session，Remote Control 不恢复（#95491、#95407），跨设备工作流被打断——开发者呼吁"静默更新前应保留活跃会话状态"。
- **复制粘贴长期欠债**：#81472 把 42 个相关 issue 串联起来，社区要求"一次性修复根因而非逐个症状"。
- **Bot 治理争议**：6k+ issue 被自动关闭（#87647）引发对仓库治理流程的质疑，开发者希望保留"has repro" 的可见性。

---

*日报基于 2026-09-19 过去 24 小时 GitHub 数据生成。*

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

<think>Let me analyze the GitHub data for OpenAI Codex community daily report for 2026-09-19.

Key observations:

1. **Releases**: Multiple alpha releases of 0.156.0 (alpha.2 through alpha.6) and a stable 0.155.1 bug fix for reasoning summaries

2. **Issues** - Top concerns:
- #33624: Safety issue about Full Access destructive deletion (43 comments) - HIGHEST priority safety concern
- #40968: Windows desktop Send button spinning forever (42 comments, 16 thumbs up)
- #46022: CRITICAL DATA LOSS on Windows - mass deletion outside project scope (27 comments)
- #45119: macOS sandbox startup failure (22 comments)
- #40865: Desktop Remote SSH inter-task tools regression (18 comments, 15 thumbs up)
- #42739: Local projects disappearing from sidebar (15 comments)
- #31925: Restore Option+Space Quick Chat on macOS (14 comments, 33 thumbs up - high community support!)
- #34764: Computer Use on Windows - Application Protected files fail (12 comments)
- #27889: Windows elevated sandbox setup fails (12 comments)
- #41942: Lifecycle hooks add 17-25s per exec_command on Windows (10 comments)

3. **PRs** - All from copyberry[bot], all CLOSED status, mostly about:
- Sandbox/Seatbelt improvements
- Subagent sharing
- Plugin system
- Thread instruction providers
- Network proxy
- macOS exclusions

Let me organize this into a comprehensive Chinese daily report.

Categories of issues:
- Windows-specific bugs (many)
- macOS-specific bugs
- Safety/sandbox concerns
- Computer Use issues
- MCP/regression issues
- App integration

Feature requests:
- IDE integration / VS Code extension (#35679)
- Multi-instance attachment
- Windows app workspace unification (#35367)
- Restore Quick Chat feature (#31925)
- Safety gate for bulk deletion (#33624)

Developer pain points:
- Windows sandbox reliability
- Data loss incidents
- Slow execution with lifecycle hooks
- Regression in MCP/subagent tooling
- Sidebar project visibility</think>

# OpenAI Codex 社区动态日报
**日期：2026-09-19**

---

## 📌 今日速览

今日 Codex 仓库密集发布了 6 个版本（含 5 个 0.156.0-alpha 与 1 个 0.155.1 稳定版），主线修复围绕 **TUI 推理摘要默认关闭** 的兼容性 bug。社区议题呈现高度集中：Windows 桌面端的**沙箱/Helper 故障**与**数据丢失风险**仍是最大痛点，多个 Critical 级事故（递归删除 Mac 用户主目录、Windows 上破坏项目范围的批量删除）推动安全护栏议题升至首位。PR 侧由内部 `copyberry[bot]` 集中提交约 20+ 个改动，涵盖 macOS Seatbelt 强化、子代理指令共享、独立网络代理等底层架构演进。

---

## 🚀 版本发布

| 版本 | 性质 | 要点 |
|---|---|---|
| **rust-v0.155.1** | 稳定版（Bug Fix） | 新建本地 TUI 会话默认关闭推理摘要（reasoning summary），修复不支持该字段的 provider 拒绝请求的问题；显式配置仍被尊重 (#46467) |
| **rust-v0.156.0-alpha.2 ~ .6** | Alpha 预览 | 连续 5 个 alpha 迭代（.2 → .6），显示 0.156 大版本进入密集预发布阶段，但未在仓库摘要中给出显著特性说明 |

> 💡 建议普通用户继续使用 0.155.x 稳定线，0.156 alpha 适合早期测试者。

---

## 🔥 社区热点 Issues（Top 10）

### 1. [#33624](https://github.com/openai/codex/issues/33624) — Full Access 模式下需要批量/主目录删除的硬确认与恢复闸门
- **作者**：@erikmagnethi · **评论**：43
- **重要性**：🔥🔥🔥 **最高优先级安全议题**。GPT-5.6 Sol Ultra-mode 子代理在 Full Access 下递归删除了用户 Mac 主目录几乎全部内容。社区呼吁即使在 Full Access 下，也应针对破坏性批量操作增加二次确认机制。这是当前最具结构性影响力的安全诉求。

### 2. [#40968](https://github.com/openai/codex/issues/40968) — Windows Codex Desktop：发送按钮无限旋转，提示永不提交
- **作者**：@BenzighemHoussam09 · **评论**：42 · 👍16
- **重要性**：Windows 桌面端最稳定重现的"卡死"问题之一，多 Pro 订阅用户持续受阻，影响日常使用流畅度。

### 3. [#46022](https://github.com/openai/codex/issues/46022) — ⚠️ [CRITICAL DATA LOSS] Windows 上 Codex 大规模删除数百 GB 项目外文件
- **作者**：@spykakosg · **评论**：27
- **重要性**：又一个数据丢失事故，删除范围涉及不相关项目、应用甚至 Windows 组件，是 #33624 的 Windows 对应案例，与安全护栏诉求直接呼应。

### 4. [#45119](https://github.com/openai/codex/issues/45119) — macOS 14.2：沙箱启动失败（未绑定变量 TIOCSTI）
- **作者**：@bibryam · **评论**：22
- **重要性**：上游 main 分支亦存在同一符号规则，影响 Apple Silicon 用户。属于符号缺失类稳定性问题，修复点明确。

### 5. [#40865](https://github.com/openai/codex/issues/40865) — Desktop 远程 SSH：inter-task 工具在 0.148 缺失 codex_app MCP 替代品
- **作者**：@Hedgeinform · **评论**：18 · 👍15
- **重要性**：远程 SSH 任务协调能力降级，影响 HPC/无头 Linux 工作流用户。从 0.145 → 0.148 升级后未恢复，社区反响显著。

### 6. [#42739](https://github.com/openai/codex/issues/42739) — Windows 桌面更新后侧边栏"项目"消失
- **作者**：@rizal281065 · **评论**：15
- **重要性**：本地工程不可见（仅 Recents 可见）是高可见度的回归 bug，对中重度项目用户尤其痛。

### 7. [#31925](https://github.com/openai/codex/issues/31925) — macOS 上恢复 Option+Space 快速聊天（应用统一后丢失）
- **作者**：@JavierPiedra · **评论**：14 · 👍33
- **重要性**：👍 高达 33，是今日**获赞最高的 feature 诉求**。ChatGPT/Codex 应用统一后损失了 macOS 用户的快捷唤起习惯，社区要求恢复。

### 8. [#34764](https://github.com/openai/codex/issues/34764) — Windows Computer Use 不可用：从 WindowsApps 复制 Application Protected 文件失败
- **作者**：@lizixian518-cell · **评论**：12
- **重要性**：Windows 上 Computer Use 能力的核心阻碍，影响 Agent 工作流在 Windows 平台的可用性。

### 9. [#27889](https://github.com/openai/codex/issues/27889) — Windows 提权沙箱：SetNamedSecurityInfoW failed: 5
- **作者**：@183773111 · **评论**：12 · 👍3
- **重要性**：Windows 沙箱提权路径长期不稳定，多次出现在不同用户的报告中（#39245、#42513、#44425、#44309 等都是同源问题）。

### 10. [#41942](https://github.com/openai/codex/issues/41942) — Windows CLI 0.150.1 lifecycle hooks 使每次 exec_command 额外耗时 17–25 秒
- **作者**：@maikolb · **评论**：10
- **重要性**：性能回归类问题，A/B 对照下 10×–16× 延迟放大，且集中在 shell 退出之后，影响 Agent 迭代速度。

---

## 🛠️ 重要 PR 进展（Top 10）

> 所有 PR 由内部自动化机器人 `@copyberry[bot]` 提交，状态均为 CLOSED，体现 Codex 团队在底层平台化改造上的密集推进。

| PR | 主题 | 关键变更 |
|---|---|---|
| [#46583](https://github.com/openai/codex/pull/46583) | **macOS Seatbelt 拒绝 XPC 服务查找** | 收紧 macOS 沙箱对 XPC service 的可见性，降低攻击面 |
| [#46580](https://github.com/openai/codex/pull/46580) | **Guardian 审查锁定到已应用的指令快照** | 防止 action 生成后指令被修改导致审阅与执行不一致 |
| [#46579](https://github.com/openai/codex/pull/46579) | **Agent command center 启动仅加载最近 10 个会话** | 性能优化，统一 `RECENT_SESSION_LIMIT` 常量 |
| [#46578](https://github.com/openai/codex/pull/46578) | **修复独立网络代理策略初始化** | 传入 `Platform::native()` 并校验 socket 路径 |
| [#46577](https://github.com/openai/codex/pull/46577) | **线程指令提供者向子代理共享更新** | 新增 `ThreadInstructionProvider` 显式共享机制，打破快照继承限制 |
| [#46575](https://github.com/openai/codex/pull/46575) | **保留 Windows 包标识到沙箱子进程** | 让非 codex-command-runner.exe 的打包调用者也能传递 OS 分配的标识 |
| [#46574](https://github.com/openai/codex/pull/46574) | **TUI 异步问题到达时通知用户** | 发送 `async-question` 通知，优先级高于回合完成 |
| [#46573](https://github.com/openai/codex/pull/46573) | **新增独立网络代理二进制（JSON 配置）** | 允许网络策略代理脱离完整 Codex 权限配置运行 |
| [#46572](https://github.com/openai/codex/pull/46572) | **MCP 扩展加入回合起始云插件发现** | 每回合刷新 thread-scoped 目录，丰富生态集成能力 |
| [#46571](https://github.com/openai/codex/pull/46571) | **macOS Seatbelt scratch 目录保留排除规则** | 防止临时目录隐式授权绕过文件系统限制 |

> 其他值得关注：#46567（插件目录与解析解耦）、#46561（provider 显式 model_catalog_url）、#46562（登录/启动请求加系统代理兜底）。

---

## 📈 功能需求趋势

从近 24 小时活跃议题提炼的社区诉求方向：

1. **🛡️ 安全护栏与破坏性操作保护**（#33624, #46022, #44964）
   - 呼声最高的核心议题：Full Access 下仍需批量删除确认、`requirements.toml` 规则对嵌套 `zsh -c` 脚本绕过问题。
   
2. **🪟 Windows 平台可靠性**（#40968, #42739, #27889, #44696, #42513, #44425, #44309, #41942）
   - 沙箱 helper 错误、侧边栏项目丢失、性能回退构成 Windows 三连痛点。

3. **🔌 IDE / 多实例集成**（#35679）
   - 希望新版 ChatGPT Desktop 能同时挂载多个 Codex CLI 与 VS Code 扩展实例（包括 devcontainer 内的）。

4. **🖥️ 桌面工作流融合**（#35367）
   - 统一 Windows 应用中需要清晰分离 ChatGPT / Work / Codex 项目，并允许 Chat + Codex + 终端共存于同一工作区。

5. **⌨️ 生产力快捷方式恢复**（#31925, 👍33）
   - 呼吁恢复 Option+Space Quick Chat，体现 macOS 用户对原有 UX 的强依赖。

6. **🧩 MCP / Computer Use 回归修复**（#28858, #42514, #34764, #40865, #42973）
   - 多个与 MCP pagination、cua_repl 替换、inter-task 工具降级相关的回归持续累积。

7. **💸 计费与配额透明性**（#31770, #44634）
   - 异常 token 用量与语音聊天错误调用 Codex 的模式选择 bug。

---

## 🧑‍💻 开发者关注点（痛点与高频诉求）

- **数据丢失是当下最尖锐的开发者信任问题**：连续多起"代理跑飞导致主目录/项目外文件被删"事件（#33624、#46022），社区正在用 OpenAI 自身的安全事故做压力测试。开发者要求**任何高破坏性操作都应触发显式二次确认 + 可恢复快照机制**。

- **Windows 沙箱 helper（`helper_unknown_error: setup refresh had errors`）已成"高频模板"**：从 #42513、#44425、#44309、#44696 到 #42514，报告几乎同源，叠加 #41942 的 lifecycle hooks 性能劣化，反映 Windows 沙箱栈处于脆弱状态，需要专项重构。

- **TUI / 桌面端的回归密集**：发送按钮死锁、侧边栏项目消失、Sidebar 显示"No projects"——开发者对升级持谨慎态度，呼吁引入更明确的**回归冒烟测试矩阵**。

- **远程 SSH / Headless 工作流仍是高门槛区**：#40865、#42973 表明远程升级路径中 MCP/子代理能力存在隐形断裂；MCP pagination (#28858) 等协议层面问题也影响自动化 Agent 链路。

- **Computer Use 在 Windows 与 Intel Mac 上可用性不足**：#34764、#42514 表明 cua_repl 与 node_repl 迁移过程中遗留了平台覆盖缺口。

- **应用统一带来的 UX 损失**：ChatGPT/Codex 桌面融合后，多项 macOS 习惯功能（Quick Chat、语音模式选择、模式与项目隔离）需要重新打磨，开发者期待"统一而非剥夺"。

---

**报告生成时间**：2026-09-19 · 数据来源：[GitHub openai/codex](https://github.com/openai/codex)

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

<think>The user wants me to generate a daily community report for the Gemini CLI project based on GitHub data from 2026-09-19. Let me analyze the data carefully and create a comprehensive Chinese-language report.

Let me first understand the data:

1. **Latest Release**: v0.62.0-nightly.20260919.gcfbcaa8df - includes version bump and a fix for ConPTY process exit lifecycle / PTY output finalization

2. **Issues** (50 total, top 30 shown): I need to identify the 10 most important ones

3. **Pull Requests** (36 total, top 20 shown): I need to identify the 10 most important ones

Let me organize the most important issues by relevance and impact:

**Top Issues to feature:**
1. #22323 - Subagent recovery after MAX_TURNS reported as GOAL success (P1, bug, 13 comments, 2 likes) - Critical bug affecting subagent reliability
2. #19873 - Zero-Dependency OS Sandboxing & Post-Execution Intent Routing (P2, enhancement, 9 comments) - Major security/UX feature
3. #21409 - Generalist agent hangs (P1, bug, 8 comments, 8 likes) - Critical bug, very popular
4. #22745 - Assess AST-aware file reads, search, and mapping (P2, 7 comments) - Major enhancement
5. #21968 - Gemini does not use skills and sub-agents enough (P2, bug, 6 comments) - Behavioral issue
6. #26525 - Add deterministic redaction and reduce Auto Memory logging (P2, security, 5 comments) - Security issue
7. #26522 - Stop Auto Memory from retrying low-signal sessions indefinitely (P2, bug, 4 comments)
8. #22232 - Enhance browser_agent resilience (P3, 4 comments)
9. #21983 - browser subagent fails in wayland (P1, bug, 4 comments, 1 like)
10. #21000 - Experiment with native file tools for task tracker (P3, 4 comments)
11. #20079 - ~/.gemini/agents/filename.md symlink issue (P2, bug, 4 comments)
12. #24246 - Gemini CLI encounters 400 error with > 128 tools (P2, bug, 3 comments)
13. #23571 - Model frequently creates tmp scripts (P2, bug, 3 comments)
14. #22672 - Agent should stop destructive behavior (P2, 3 comments)
15. #22267 - Browser Agent ignores settings.json overrides (P2, bug, 3 comments)
16. #21335 - /compress command not persistent across session resume (P2, bug, 2 comments, 2 likes)
17. #18836 - Replace WriteToDo with Persistent File-Based Task Tracking (P3, 3 comments)
18. #19561 - Implement 'Tactful Extraction' for token-frugal reads (P3, enhancement, 2 comments)
19. #21432 - Improve Agent Self-Awareness (P3, 2 comments)

**Top PRs to feature:**
1. #29396 - feat(agent): AST-aware structural search tool (xl size) - Major feature
2. #29404 - feat(cli): add 'gemini models list' with JSON output - Useful integration feature
3. #29393 - feat(tracker): replace WriteToDo with persistent file-based task tracking (xl size) - Major refactor
4. #29004 - fix: guard formatTruncatedToolOutput (closed)
5. #29208 - fix: fall back to empty on malformed agents.json (closed)
6. #29205 - fix: submit MCP prompt text without JSON encoding (closed)
7. #29200 - fix: enforce MCP policy consistently at runtime (closed)
8. #29217 - fix: don't rewrite explicit gemini-2.5-flash model selection (closed)
9. #29211 - fix: stop scheduling state updates from inside a state updater (closed)
10. #29201 - fix: preserve approved shell commands across confirmation retries (closed)
11. #29203 - fix: strip shell wrappers carrying extra flags (closed)
12. #29402 - fix: make persistent state writes failure-safe (P1)
13. #29400 - Fix/29365 duplicate tool responses (P1)
14. #29368 - fix(acp): resolve session/load by ID even without resumable content (P1)
15. #29286 - Implement Google search tool in RobustAutonomousAgent (P1)

Now let me structure the report.

**Functional trends I can identify:**
- AST-aware code analysis tools (#22745, #22746, #29396)
- Auto Memory system improvements and security (#26516, #26522, #26523, #26525)
- Persistent file-based task tracking replacing WriteToDo (#18836, #21000, #29393)
- Browser agent reliability (#22232, #22267, #21983)
- Subagent behavior and reliability (#22323, #21409, #21968)
- Token/context efficiency (#19561, #24246)
- Zero-dependency OS sandboxing for bash (#19873)

**Developer pain points:**
- Agent hangs and reliability issues
- Subagent incorrectly reporting success status
- AST navigation needed for better context efficiency
- Skills and sub-agents not being used enough
- Auto Memory security concerns
- Browser agent settings overrides being ignored
- Tool count limits causing 400 errors

Let me write the report now in Chinese, professional and concise for developers.</think>

# Gemini CLI 社区动态日报

**📅 2026-09-19**

---

## 📌 今日速览

今日社区动态围绕三大主线展开：**Subagent 可靠性**（P1 bug #22323、#21409 引发开发者强烈关注，8 人点赞）、**Auto Memory 系统的安全与稳定性**（多条相关 issue 集中更新）、以及 **AST 感知代码分析能力**（issue #22745 的跟进 PR #29396 进入代码审查）。Nightly 版本 v0.62.0 照例发布，重点修复 ConPTY 进程退出生命周期问题。

---

## 🚀 版本发布

### v0.62.0-nightly.20260919.gcfbcaa8df

Nightly 例行版本更新，包含：
- **核心修复**：同步 ConPTY 进程退出生命周期，强化 PTY 输出终结化处理（PR #29383 关联改动）
- 主要由 `gemini-cli-robot` 自动版本号 bump

> ⚠️ Nightly 版本不建议生产环境使用，建议等待稳定版。

---

## 🔥 社区热点 Issues（Top 10）

### 1. [#22323 — Subagent 在达到 MAX_TURNS 后错误地报告 GOAL 成功](https://github.com/google-gemini/gemini-cli/issues/22323) **P1 · 13 评论 · 👍2**
`codebase_investigator` subagent 触发最大轮次限制后仍上报 `status: "success"` 与 `Termination Reason: "GOAL"`，掩盖了中断事实。属于 **Agent 可靠性** 的核心缺陷。

### 2. [#21409 — Generalist agent 挂死](https://github.com/google-gemini/gemini-cli/issues/21409) **P1 · 8 评论 · 👍8**
当 CLI 把任务下放给 generalist agent 时会无限挂起，简单的文件夹创建操作甚至需要等待一小时。手动指示不使用 sub-agent 可绕过。👍 数与评论数比值高，说明社区**共鸣强烈**。

### 3. [#19873 — 零依赖 OS 沙箱与执行后意图路由](https://github.com/google-gemini/gemini-cli/issues/19873) **P2 · 9 评论 · 👍1**
利用 Gemini 3 模型对 POSIX 工具链（grep/cat/sed/awk）的原生亲和力，提出 OS 级沙箱方案以兼顾安全与 UX。是**核心架构方向**之一。

### 4. [#22745 — AST 感知文件读取、搜索与代码库映射评估](https://github.com/google-gemini/gemini-cli/issues/22745) **P2 · 7 评论 · 👍1**
探讨是否引入 AST 感知工具以更精确地按方法边界读取、减少误读回合与 token 噪声。已被 PR #29396 部分落地。

### 5. [#21968 — Gemini 不会主动调用 skills 与 sub-agents](https://github.com/google-gemini/gemini-cli/issues/21968) **P2 · 6 评论**
自定义 skills/sub-agents 几乎不会被自动触发，除非显式提示。影响用户配置的实际效用。

### 6. [#26525 — Auto Memory 添加确定性脱敏并降低日志量](https://github.com/google-gemini/gemini-cli/issues/26525) **P2 · 5 评论 · 安全**
Auto Memory 在内容进入模型上下文之后才执行脱敏，存在**秘密泄露窗口**。同时需要降低对现有 skill 的过度日志记录。

### 7. [#21983 — browser subagent 在 Wayland 下失败](https://github.com/google-gemini/gemini-cli/issues/21983) **P1 · 4 评论 · 👍1**
Wayland 环境下 browser 子代理终止原因仍报 GOAL 但实际失败。Linux 桌面用户的痛点。

### 8. [#20079 — `~/.gemini/agents/*.md` 不识别符号链接](https://github.com/google-gemini/gemini-cli/issues/20079) **P2 · 4 评论**
符号链接形式的 agent 配置无法被发现，限制了用户通过软链接统一管理 dotfiles 的工作流。

### 9. [#22267 — Browser Agent 忽略 `settings.json` 覆盖（如 maxTurns）](https://github.com/google-gemini/gemini-cli/issues/22267) **P2 · 4 评论**
AgentRegistry 初始化时正确合并了配置，但 Browser Agent 实际运行时不生效。属于**配置系统一致性 bug**。

### 10. [#24246 — 工具数量 > 400 时触发 400 错误](https://github.com/google-gemini/gemini-cli/issues/24246) **P2 · 3 评论**
当工具数量过多时遭遇 400 错误。社区建议引入工具作用域智能剪裁机制。

---

## 🛠️ 重要 PR 进展（Top 10）

### 1. [#29396 — feat(agent): 新增 AST 感知结构化搜索工具](https://github.com/google-gemini/gemini-cli/pull/29396) **OPEN · XL**
实现 #22745 提出的 AST 工具集（基于轻量级正则 AST 分析），提供三类核心能力：**按符号搜索、函数定义定位、调用图谱导航**。减少"瞎猜行范围 + 整文件读取"的低效循环。

### 2. [#29393 — feat(tracker): 用持久化文件任务跟踪替换 WriteToDo](https://github.com/google-gemini/gemini-cli/pull/29393) **OPEN · XL**
解决 #18836，把任务列表从 LLM 上下文迁出到 TrackerService 持久化文件。**根治上下文腐烂、token 浪费与跨会话丢失问题**，是 Agent 架构演进的重要一步。

### 3. [#29404 — feat(cli): 新增 `gemini models list`（支持 JSON 输出）](https://github.com/google-gemini/gemini-cli/pull/29404) **OPEN · L**
解决交互式 `/model` 对话框无法被外部工具解析的问题。集成方可动态发现 `-m/--model` 的合法值，避免硬编码失效。

### 4. [#29402 — fix(cli): 持久化状态写入具备故障安全](https://github.com/google-gemini/gemini-cli/pull/29402) **OPEN · P1 · M**
`PersistentState` 改用"唯一 sibling temp 文件 + fsync + 原子 rename"，避免中断写入导致 `state.json` 被截断而悄悄清空。

### 5. [#29400 — Fix/29365: 修复重复的 tool 响应](https://github.com/google-gemini/gemini-cli/pull/29400) **OPEN · P1 · M**
`-r` 会话恢复时 `toolCalls[].result` 与持久化的 `user` 消息同时被回放，导致重复 `functionResponse`。修复后保证单次回放。

### 6. [#29368 — fix(acp): 即使无可恢复内容也能按 ID 解析 session/load](https://github.com/google-gemini/gemini-cli/pull/29368) **OPEN · P1 · M**
修复 ACP 协议下 session ID 已存在但缺 resumable content 时的加载失败（#29288）。

### 7. [#29286 — Implement Google search tool in RobustAutonomousAgent](https://github.com/google-gemini/gemini-cli/pull/29286) **OPEN · P1 · M**
把 Google 搜索工具接入 RobustAutonomousAgent，扩大 agent 的信息获取能力。

### 8. [#29201 — fix(cli): 跨确认重试保留已批准的 shell 命令](https://github.com/google-gemini/gemini-cli/pull/29201) **CLOSED · P1**
修复 TOML 自定义命令含多个 `!{...}` shell 注入时反复询问权限、即便选择"始终允许"也永不收敛的循环。

### 9. [#29217 — fix(config): 不重写显式选择的 `gemini-2.5-flash`](https://github.com/google-gemini/gemini-cli/pull/29217) **CLOSED · P1/P2**
`isFlashModel()` 误把 `endsWith('flash')` 的 `gemini-2.5-flash` 也升级到 3.5-flash，破坏用户显式锁定。

### 10. [#29200 — fix(core): 在运行时一致地强制 MCP 策略](https://github.com/google-gemini/gemini-cli/pull/29200) **CLOSED · P2 · M**
将 MCP 运行时策略与 CLI 的大小写不敏感、空白修剪的服务器名匹配对齐；空 allowlist 改为 fail-closed。

---

## 📈 功能需求趋势

从过去 24 小时内更新的 50 个 Issue 中提炼出六大主线：

| 方向 | 代表 Issue | 趋势洞察 |
|------|------------|----------|
| **AST 感知代码分析** | #22745, #22746, PR #29396 | 社区迫切希望摆脱"行号猜测 + 整文件读取"的低效模式，从工具层做上下文节省 |
| **Auto Memory 安全与质量** | #26516, #26522, #26523, #26525 | 集中爆发，提示 Auto Memory 已进入规模化使用前的最后打磨阶段 |
| **Subagent 体系可靠性** | #22323, #21409, #21968, #21763 | 子代理"伪成功"、挂死、不被调用三大问题同时浮现 |
| **持久化任务跟踪** | #18836, #21000, PR #29393 | WriteToDo 即将退役，文件式 CRUD 成为共识 |
| **零依赖 OS 沙箱** | #19873 | 与 Gemini 3 的 bash 训练亲和力协同，是下一阶段安全架构关键 |
| **浏览器子代理健壮性** | #21983, #22232, #22267 | Wayland 兼容、设置覆盖、session takeover 三件套齐推 |

---

## 💬 开发者关注点

1. **Agent 可观测性不足**：`/bug` 上报不包含 subagent 上下文（#21763），subagent 轨迹无法通过 `/chat share` 分享（#22598），导致定位与回归成本居高不下。

2. **配置系统一致性裂缝**：Browser Agent 忽略 `settings.json` 中的 `maxTurns`（#22267），symlink 不被识别为 agent（#20079）—— 配置"读到了但不生效"是反复出现的问题。

3. **Token 与上下文效率焦虑**：>400 个工具即 400（#24246）、"firehose"读取消耗 15k tokens/turn（#19561）、/compress 不持久化（#21335，👍2）—— 多路径协同压低 token 消耗。

4. **破坏性命令风险**：模型偶发使用 `git reset --force` 等命令（#22672），社区期待内置安全护栏。

5. **Wayland / Linux 桌面兼容性**：browser subagent 在 Wayland 下失效（#21983），与 Windows ConPTY 修复形成呼应，**跨平台 PTY/浏览器层稳定性仍是热点**。

6. **Skills/Sub-agents 激活率低**：用户精心编写的自定义资源被模型忽视（#21968），需要更明确的路由提示或训练时强化。

---

*报告基于 2026-09-19 过去 24 小时 GitHub 数据自动生成。*

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

<think>The user wants me to generate a daily report for GitHub Copilot CLI community dynamics on 2026-09-19. Let me analyze the data carefully and create a structured Chinese report.

Let me go through the data:

**Releases:**
- v1.0.87-0: Added user and managed startup defaults for Auto routing tier, and consecutive steering prompts combine into one pending message.

**Issues (32 total, showing top 30 by comment count):**

Top issues by comments:
1. #1632 [CLOSED] - Skills subfolders organization - 12 comments, 24 likes
2. #1285 [OPEN] - Org level Agent not showing - 10 comments, 13 likes
3. #4870 [OPEN] - MCP Figma remote server fails - 6 comments, 11 likes
4. #1824 [CLOSED] - Default model selection - 6 comments, 3 likes
5. #4765 [OPEN] - config read from working directory - 4 comments, 0 likes
6. #1086 [CLOSED] - Don't enforce PowerShell on Windows - 4 comments, 2 likes
7. #4839 [OPEN] - Disable taskbar icon - 3 comments, 2 likes
8. #4886 [OPEN] - --plugin-dir skills omitted - 3 comments, 0 likes
9. #4905 [OPEN] - Desktop app sessions die - 3 comments, 2 likes
10. #2892 [CLOSED] - MCP stdio for sub-agents - 3 comments, 0 likes
11. #2654 [CLOSED] - session_store_sql empty - 3 comments, 1 like
12. #3035 [OPEN] - Tool-callable cwd - 2 comments, 0 likes
13. #3858 [CLOSED] - Ctrl+Backspace on Windows - 2 comments, 6 likes
14. #4822 [OPEN] - AGENTS.md symlinks - 1 comment, 0 likes
15. #4901 [OPEN] - Atlassian MCP OAuth - 1 comment, 0 likes
16. #4900 [OPEN] - config.json trustedFolders lost - 1 comment, 0 likes
17. #4844 [OPEN] - --yolo flag swallowed - 1 comment, 0 likes
18. #4264 [CLOSED] - Extensions slash command firing multiple times - 1 comment, 1 like
19. #4236 [CLOSED] - copyOnSelect PRIMARY selection - 1 comment, 0 likes
20. #3900 [CLOSED] - Secret filtering blocks UI thread - 1 comment, 0 likes
21. #3480 [CLOSED] - Rubber Duck model - 1 comment, 2 likes
22. #2850 [CLOSED] - bash 5.3 fails - 1 comment, 0 likes
23. #1982 [CLOSED] - COPILOT_CUSTOM_INSTRUCTIONS_DIRS - 1 comment, 2 likes
24. #4698 [CLOSED] - Cannot compact session - 1 comment, 0 likes
25. #4907 [OPEN] - MCP reconnect notifications flood - 0 comments
26. #4906 [OPEN] - MCP OAuth Figma client_name - 0 comments
27. #4904 [OPEN] - Session metadata stale - 0 comments
28. #4903 [OPEN] - Branch sessions updated_at - 0 comments
29. #4902 [OPEN] - -p/--prompt regression - 0 comments
30. #4899 [OPEN] - Autopilot clarification delay - 0 comments

PRs: None updated in past 24 hours.

Now I need to structure the report. Let me identify key themes:

1. **MCP-related issues** dominate today: #4870 (Figma), #4901 (Atlassian), #4906 (Figma OAuth), #4907 (MCP reconnect), #2892 (MCP stdio for sub-agents), #4886 (--plugin-dir skills)
2. **Session management issues**: #4905 (sessions die), #4904 (metadata stale), #4903 (branch sessions), #4900 (config.json)
3. **Skills/Plugins**: #1632 (subfolders), #4886 (--plugin-dir), #4264 (extensions)
4. **Configuration issues**: #4765 (config read), #4902 (regression), #4844 (--yolo)
5. **Platform-specific**: #1086 (Windows PowerShell), #3858 (Ctrl+Backspace), #4236 (Linux X11/Wayland)

Trends I see:
- MCP (Model Context Protocol) integration is a major pain point - multiple OAuth/registration issues with different providers
- Session management complexity
- Skills/plugins organization and discovery
- Cross-platform compatibility issues
- Auto/Autopilot mode refinement

Let me write the report now. Since the user asked for PRs but there are none, I should mention that.

Wait, the user asked for "重要 PR 进展 - 挑选 10 个重要的 PR" but there are 0 PRs. I should handle this gracefully - perhaps say no new PR activity.

Let me write the report:</think>

# GitHub Copilot CLI 社区动态日报

**📅 日期：2026-09-19**
**📦 仓库：[github/copilot-cli](https://github.com/github/copilot-cli)**

---

## 1. 今日速览

今日 Copilot CLI 发布 **v1.0.87-0** 预发布版本，重点改进了 **Auto 路由层级的企业策略管理** 和 **连续转向提示的合并交互**。社区层面，**MCP（Model Context Protocol）集成** 成为最大热点——过去 24 小时更新的 32 条 Issue 中，与 MCP 相关的故障（涉及 Figma、Atlassian OAuth、stdio 传输、重连噪音等）占据近三分之一，反映出第三方 MCP 服务器接入生态正在快速扩张但稳定性挑战凸显。同时，**会话管理（session）子系统的多个缺陷**（元数据陈旧、git checkout 导致侧边栏刷新风暴、并发写入丢配置）密集浮现，提示底层 session store 正面临重构压力。

---

## 2. 版本发布

### 🚀 v1.0.87-0（预发布）

**Added**

- **Auto 路由层级新增用户与托管启动默认值**：支持严格的、可被用户覆盖的组织策略，便于企业在 Auto 模式下进行集中管控。
- **连续转向提示（steering prompts）合并**：在同一模式下连续发出的 steering 提示将合并为一条 pending message；按 **↑** 键可将其取回编辑（包括粘贴内容），提升多步干预的体验。

> 📎 注：本次为预发布版本（pre-release），生产环境建议观望正式版。

---

## 3. 社区热点 Issues（按评论数 / 影响力排序）

| # | Issue | 状态 | 要点 | 链接 |
|---|-------|------|------|------|
| 1 | **#1632** Skills 支持子文件夹组织 | ✅ CLOSED | 呼声最高（24 👍），反映技能数量增长后的扁平化痛点被官方正式采纳 | [🔗](https://github.com/github/copilot-cli/issues/1632) |
| 2 | **#1285** 组织级 Agent 不显示 | 🟢 OPEN | 企业用户跨 CLI/VS Code 同步 Agent 失败，影响多入口统一体验（13 👍） | [🔗](https://github.com/github/copilot-cli/issues/1285) |
| 3 | **#4870** Figma MCP 远程服务器注册失败 | 🟢 OPEN | `server/discover` 返回 `-32601` 被 CLI 当作致命错误，但 VS Code 中可正常工作，跨端 MCP 行为不一致（11 👍） | [🔗](https://github.com/github/copilot-cli/issues/4870) |
| 4 | **#1824** 默认模型选择 | ✅ CLOSED | 长期请求"摆脱 Claude Sonnet 默认"被关闭，可能已通过其他途径支持 | [🔗](https://github.com/github/copilot-cli/issues/1824) |
| 5 | **#4765** 非仓库根目录下配置读取失败 |  OPEN | monorepo 与 workspace 场景下 `.mcp.json` / hooks 加载失败，影响复杂项目结构 | [](https://github.com/github/copilot-cli/issues/4765) |
| 6 | **#1086** Windows 不强制使用 PowerShell | ✅ CLOSED | 在 `cmd` 中执行 `gradlew` 等批处理失败的历史问题已解决 | [🔗](https://github.com/github/copilot-cli/issues/1086) |
| 7 | **#4905** 桌面应用 session 数分钟后死亡 | 🟢 OPEN | macOS 1.1.22 / CLI 1.0.84-5，"GitHub credential registration is no longer available"，github-mcp-server 目录失效 | [🔗](https://github.com/github/copilot-cli/issues/4905) |
| 8 | **#4886** `--plugin-dir` 技能在 `/skills` 中缺失 | 🟢 OPEN | 后端能发现但交互式面板无法列出，CLI 内部状态机与 backend 不同步 | [🔗](https://github.com/github/copilot-cli/issues/4886) |
| 9 | **#2892** sub-agent 的 MCP stdio ~4 秒后断开 | ✅ CLOSED | 子 agent 调用 MCP 时连接过早关闭，与 LLM 首轮响应产生竞态 | [🔗](https://github.com/github/copilot-cli/issues/2892) |
| 10 | **#3858** Windows 上 Ctrl+Backspace 不工作 | ✅ CLOSED | 与 Windows 输入习惯不符的标准快捷键，已修复（6 👍） | [🔗](https://github.com/github/copilot-cli/issues/3858) |

> 📊 **补充观察**：上述 10 条之外，今日还出现一组 MCP OAuth 相关问题——#4901（Atlassian `redirect_uri` 未注册）、#4906（Figma DCR `client_name` 白名单拒绝）——以及 #4902（`--prompt` 解析在 1.0.85 回归）、#4900（并发退出导致 `trustedFolders` 丢失）、#4903（branch session 的 `updated_at` 在 git checkout 时被批量刷新）、#4907（MCP 重连消息污染历史）等一系列影响稳定性的回归性问题。

---

## 4. 重要 PR 进展

⚠️ **过去 24 小时内无 PR 更新活动**。可能原因：v1.0.87-0 处于预发布 review 阶段，或工程团队正在处理上述 MCP / session 相关 issue 而暂未提交新 PR。建议明日重点观察 PR 列表是否恢复活跃。

---

## 5. 功能需求趋势分析

通过对 32 条当日 Issue 的领域标签（`area:`）与摘要归纳，社区关注点呈现以下趋势：

| 趋势方向 | 代表 Issue | 占比与解读 |
|---------|-----------|-----------|
| ** MCP 生态兼容** | #4870、#4901、#4906、#4907、#2892、#4886 | **约 20% 的 Issue 与 MCP 相关**。涉及多家第三方服务（Figma、Atlassian）的 OAuth/DCR 流程、stdio 传输生命周期、远程服务器错误处理，是当下最大的集成风险点。 |
| ** Skills / Plugins 组织** | #1632、#4886、#4264、#3035 | 用户已从"能不能用"进入"如何规模化组织"阶段，子文件夹、tool-callable cwd、扩展命令重复触发等都是规模化副作用。 |
| **️ 会话与上下文管理** | #4905、#4904、#4903、#4900、#2654、#4698 | 会话子系统是当前最复杂、最容易出错的层：元数据陈旧、并发状态丢失、git checkout 触发批量刷新等问题频出。 |
| **️ 配置与启动行为** | #4765、#4844、#4902、#1982 | 非仓库根目录配置、托管策略 fail-closed、CLI 参数解析回归、`COPILOT_CUSTOM_INSTRUCTIONS_DIRS` 失效——反映配置层在企业部署中正成为瓶颈。 |
| ** 模型与 Agent 控制** | #1824、#1285、#3480、#4899 | 默认模型选择、组织级 Agent 下发、Rubber Duck 模型指定、Autopilot 澄清问题延迟——用户对"如何更精细地控制 AI 行为"的诉求持续走高。 |
| ** 跨平台一致性** | #1086、#3858、#4236、#2850 | Windows（PowerShell 强制、Ctrl+Backspace）、Linux（PRIMARY 剪贴板、bash 5.3）、macOS（桌面 app 会话死亡）三端都有报告，跨平台打磨仍是长期任务。 |

---

## 6. 开发者关注点总结

综合今日 Issue 与历史讨论，开发者社区的**高频痛点**可归纳为三条主线：

1. **🔗 MCP "能用但脆弱"的现状**
   OAuth 注册、错误码处理、重连策略等细节决定了企业能否将第三方 MCP 服务器纳入生产链路。多个提供商（Atlassian、Figma）的拒绝信息暴露了 CLI 客户端标识、redirect_uri、client_name 等字段的标准化缺失。

2. ** 规模化下的"组织管理"诉求**
   单一用户用得顺的工具，正在被推到组织 / 企业场景：Agent 下发、managed policy、trusted folders、子文件夹、并发 session 状态合并——这些都是"个人 AI 助手"迈向"团队 AI 平台"的必经关卡。

3. **⚡ 交互细节的"回归成本"**
   `--yolo` 被吞掉、`-p/--prompt` 在 1.0.85 解析失败、`updated_at` 被 `git checkout` 批量刷新——这些看似小问题，在 CI / 自动化脚本和大规模协作场景下会显著放大。开发者期待**更严格的回归测试覆盖**，尤其在 CLI 参数解析和后台状态机领域。

> 💡 **建议关注**：今日多个 MCP 相关 Issue 都指向同一类问题（OAuth 客户端标识、错误处理一致性），如官方能在下个版本统一 MCP transport 层的错误码与重试策略，将显著降低第三方集成方的接入成本。

---

*📌 报告由 GitHub 公开数据整理生成，仅供技术参考。*

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

<think>The user wants me to generate a Chinese daily report for Kimi Code CLI community dynamics based on GitHub data from 2026-09-19. Let me analyze the data carefully.

Let me parse through what's provided:

**Releases (past 24 hours):** None

**Issues (past 24 hours, 9 total):**
1. #1442 [CLOSED] - Invoice question (Chinese user asking about invoicing)
2. #1266 [CLOSED] - HTTP header trailing whitespace bug (Ubuntu)
3. #1680 [OPEN] - VSCode font size adjustment request
4. #1371 [CLOSED] - Connection error (IPv6 issue on Linux)
5. #1368 [CLOSED] - Connection error (# character in HTTP header)
6. #1364 [CLOSED] - Connection error (illegal HTTP header value on Ubuntu)
7. #1495 [CLOSED] - VSCode extension: configure plans_dir
8. #2653 [OPEN] - OpenCode Go: 400 error, missing x-opencode-session header
9. #2652 [OPEN] - macOS 2.0.0: Ctrl+V paste image intermittent failure

**Pull Requests (past 24 hours, 1 total):**
1. #2176 [OPEN] - fix(hooks): extract text from ContentPart for UserPromptSubmit hook

Note: The task asks for 10 most notable issues and 10 most important PRs, but there are only 9 issues and 1 PR in the data. I should be honest about this and pick from what's available.

Let me structure the report:

1. **今日速览** - Summary of key dynamics today
2. **版本发布** - None, so I'll skip this
3. **社区热点 Issues** - 9 issues to choose from, will pick all 9 since that's all we have, and note that we have fewer than requested
4. **重要 PR 进展** - Only 1 PR available
5. **功能需求趋势** - Based on issues
6. **开发者关注点** - Based on issues

Let me analyze patterns:

**Bugs:**
- Multiple connection errors related to HTTP headers on Linux (issues #1266, #1364, #1368, #1371) - all CLOSED today
- macOS paste image regression (#2652) - OPEN
- OpenCode Go 400 error (#2653) - OPEN

**Feature requests:**
- VSCode font size control (#1680)
- VSCode plans_dir config (#1495)
- Invoice feature (#1442)

**Closed issues today:** Many bugs were closed today - the team seems to have done cleanup/batch resolution

**PR:** Hook system improvement

Let me write the report in Chinese, professional tone, suitable for technical developers.

For the 10 issue limit, since there are only 9 issues, I'll include all 9 and note the limited activity.

For 10 PRs, there's only 1, so I'll note that and describe the one PR.

Let me also identify trends:
- Linux HTTP header validation issues (a batch of similar bugs)
- VSCode extension improvements
- macOS/Apple Silicon compatibility
- Hook system improvements
- Third-party provider integrations (OpenCode Go)

Developer pain points:
- Connection errors on Linux (platform.version() header issues)
- Regression from version upgrades
- Third-party integration compatibility
- Invoice/billing UX issues

Let me write a thorough, professional Chinese report.</think>

# Kimi Code CLI 社区动态日报

**日期：2026-09-19**
**项目：github.com/MoonshotAI/kimi-cli**

---

## 📌 今日速览

今日社区活动以 **历史 Issue 集中关闭与 Linux HTTP 头部兼容性问题的批量修复** 为主要特征，多个此前积压的 Connection error 类 Bug 已被关闭处理。同时出现 2 个新提交的 Issue，聚焦 macOS 2.0.0 的剪贴板粘贴回归问题，以及第三方 Provider（OpenCode Go）兼容性 Bug。社区提交了 1 个针对 Hook 系统的修复 PR。过去 24 小时内无新版本发布。

---

## 🚀 版本发布

无新版本发布。

---

## 🔥 社区热点 Issues（共 9 条，过去 24 小时内更新）

> ⚠️ 今日仅 9 条 Issue 更新，少于常规的 10 条，以下为全部条目按重要性排序。

| # | Issue | 标题 | 状态 | 为什么重要 |
|---|---|---|---|---|
| 1 | [#2653](https://github.com/MoonshotAI/kimi-cli/issues/2653) | OpenCode Go 返回 400：缺少 x-opencode-session header | 🟢 OPEN | 影响第三方 Provider 集成兼容性，新提交的 Bug，反映 Kimi Code 正在拓展生态接入 |
| 2 | [#2652](https://github.com/MoonshotAI/kimi-cli/issues/2652) | macOS 2.0.0 粘贴图片偶发静默失败（0.43.x 回归） | 🟢 OPEN | 涉及 2.0.0 升级回归问题，影响 macOS 用户日常操作，优先级较高 |
| 3 | [#1266](https://github.com/MoonshotAI/kimi-cli/issues/1266) | HTTP header 校验错误：`platform.version()` 含尾部空格 | 🔴 CLOSED | 👍 2，影响 Ubuntu/Linux 用户连接，已获修复 |
| 4 | [#1680](https://github.com/MoonshotAI/kimi-cli/issues/1680) | VSCode 中独立调节 Kimi 窗口字体大小 | 🟢 OPEN | 👍 2，呼声较高的体验类需求，VSCode 插件重要改进方向 |
| 5 | [#1371](https://github.com/MoonshotAI/kimi-cli/issues/1371) | LLM provider error: Connection error（IPv6） | 🔴 CLOSED | Linux 平台网络栈兼容性 Bug，已关闭 |
| 6 | [#1368](https://github.com/MoonshotAI/kimi-cli/issues/1368) | Connection error：`platform.version()` 含 `#` 字符 | 🔴 CLOSED | Linux HTTP 头部非法字符问题，已关闭 |
| 7 | [#1364](https://github.com/MoonshotAI/kimi-cli/issues/1364) | Connection error on Ubuntu（非合法 HTTP header） | 🔴 CLOSED | 与 #1266、#1368 同类，今日一并关闭 |
| 8 | [#1495](https://github.com/MoonshotAI/kimi-cli/issues/1495) | VSCode 扩展：配置 Plan Mode 计划文件保存路径 | 🔴 CLOSED | VSCode 扩展配置项扩展（`[paths] plans_dir`），反映社区对 IDE 集成深度配置的关注 |
| 9 | [#1442](https://github.com/MoonshotAI/kimi-cli/issues/1442) | Kimi Code 如何开票 | 🔴 CLOSED | 企业/团队用户的财务流程需求，已关闭 |

### 社区反应观察
- **批量关闭效应**：今日关闭的 7 个 Issue 中，有 4 个与 Linux 平台的 HTTP 头部校验相关（#1266、#1364、#1368、#1371），暗示维护团队在 1.15.0–1.17.0 版本上集中解决了 `platform.version()` 注入 HTTP header 的鲁棒性问题。
- **新 Issue 优先级**：两个 OPEN 状态的 Issue 都指向真实使用场景（第三方 Provider + 跨版本回归），值得优先响应。

---

## 🛠️ 重要 PR 进展（共 1 条）

> ⚠️ 过去 24 小时仅 1 个 PR 更新，远少于常规 10 条，以下为全部内容。

### [#2176 — fix(hooks): extract text from ContentPart for UserPromptSubmit hook](https://github.com/MoonshotAI/kimi-cli/pull/2176) 🟢 OPEN

- **作者**：@tears-mysthrala
- **状态**：仍处于 OPEN 状态，需维护者评审
- **作用**：修复 `UserPromptSubmit` hook 在 `user_input` 为 `list[ContentPart]`（多模态场景的默认类型）时返回空字符串的问题
- **意义**：
  - 此前 hook 只处理 `str` 类型，正则匹配器（`matcher_value`）在多模态消息下失效
  - 解决了 Issue #2148 中描述的 hook 正则不匹配问题
  - 为多模态 Agent 扩展铺路，是 Hook 系统向通用内容类型演进的关键一步

---

## 📈 功能需求趋势

从今日全部 9 条 Issue 中提炼的社区关注方向：

| 方向 | 提及次数 | 代表 Issue |
|---|---|---|
| **VSCode / IDE 插件体验** | 2 | [#1680](https://github.com/MoonshotAI/kimi-cli/issues/1680)、[#1495](https://github.com/MoonshotAI/kimi-cli/issues/1495) |
| **跨平台兼容性（Linux / macOS）** | 5 | [#1266](https://github.com/MoonshotAI/kimi-cli/issues/1266)、[#1364](https://github.com/MoonshotAI/kimi-cli/issues/1364)、[#1368](https://github.com/MoonshotAI/kimi-cli/issues/1368)、[#1371](https://github.com/MoonshotAI/kimi-cli/issues/1371)、[#2652](https://github.com/MoonshotAI/kimi-cli/issues/2652) |
| **第三方 Provider 集成** | 1 | [#2653](https://github.com/MoonshotAI/kimi-cli/issues/2653) |
| **计费 / 发票 / 订阅体验** | 1 | [#1442](https://github.com/MoonshotAI/kimi-cli/issues/1442) |
| **Hook / Agent 扩展机制** | 1（PR） | [#2176](https://github.com/MoonshotAI/kimi-cli/pull/2176) |

### 趋势洞察

1. **VSCode 插件仍是第一大需求池** —— 字体控制和计划文件路径这两项细节优化，反映重度用户在向 IDE 集成深入迁移。
2. **跨平台鲁棒性是当前主要痛点** —— Linux HTTP 头部校验和 macOS 2.0.0 剪贴板回归占据过半 Bug 报告。
3. **生态接入信号增强** —— OpenCode Go 集成问题说明 Kimi Code 开始被非官方 Provider 主动对接，是开放生态的早期信号。

---

## 💡 开发者关注点（高频痛点）

### 🔴 高频痛点 Top 3

1. **Linux 平台 HTTP 头部鲁棒性差**
   - `platform.version()` 中若包含尾部空格、`#` 等非法字符，会直接导致 Connection error
   - 影响所有 Ubuntu 用户，今日虽批量关闭，但开发者应在脚本化部署时注意清洗 `os.uname().version`

2. **版本升级的回归风险**
   - #2652 反映 0.43.x → 2.0.0 升级后 macOS 剪贴板图片粘贴偶发失效
   - 建议大版本升级时关注 changelog 并保留旧版本回滚路径

3. **Hook 系统对多模态支持不足**
   - #2176 揭示 `UserPromptSubmit` hook 在 `list[ContentPart]` 输入下完全失效
   - 对基于 hook 做自动化拦截的开发者影响较大

### ✅ 已被响应 / 关闭的需求

- Linux HTTP 头部校验问题（多个）：今日集中关闭
- VSCode 计划文件路径配置 [#1495](https://github.com/MoonshotAI/kimi-cli/issues/1495)：已关闭
- 开票/发票窗口 [#1442](https://github.com/MoonshotAI/kimi-cli/issues/1442)：已关闭

### ⏳ 仍在等待响应

- macOS 2.0.0 粘贴图片回归 [#2652](https://github.com/MoonshotAI/kimi-cli/issues/2652)
- VSCode 独立字体控制 [#1680](https://github.com/MoonshotAI/kimi-cli/issues/1680)（👍 2，社区呼声较高）
- OpenCode Go 集成 [#2653](https://github.com/MoonshotAI/kimi-cli/issues/2653)
- Hook 修复 PR [#2176](https://github.com/MoonshotAI/kimi-cli/pull/2176)（待评审合并）

---

> 📊 **日报数据来源**：GitHub API（github.com/MoonshotAI/kimi-cli）
> 📝 **生成时间**：2026-09-19
> ✏️ **说明**：今日 Issues 与 PR 数量较少，建议关注后续 24 小时的版本发布信号；2.0.0 升级引发的回归问题值得用户与维护团队共同跟踪。

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

<think>The user wants me to generate a daily community report for OpenCode based on GitHub data. Let me analyze the data carefully and produce a structured Chinese report.

Let me organize the information:

**Releases (past 24 hours):** None

**Key Issues to highlight (top 10 by importance/community reaction):**
1. #31041 - Zen API CORS 404 issue - 12 comments, 11 likes (highest engagement, closed)
2. #48973 - encrypted_content error with Muse Spark - 8 comments, 8 likes (still open)
3. #49588 - OpenCode's free tier can only be used from within OpenCode - 7 comments (closed)
4. #37993 - Built-in proxy support feature request - 5 comments (closed)
5. #35601 - i18n support for desktop app menu - 5 comments (closed)
6. #17856 - Git Branch Indicator in Prompt Input - 4 comments, 5 likes (closed)
7. #44080 - compact silently lands reasoning-only summaries - 2 comments, still open, data loss issue
8. #49641 - V1→V2 importer skips sessions - still open
9. #49742 - Message timestamp option missing in v2.0.8 - still open
10. #38008 - Sessions leaking messages - 3 comments (closed)

**Key PRs to highlight (top 10):**
1. #49882 - feat(app): open agent-referenced files as rich artifact tabs - by Hona
2. #49896 - perf(app): mount the shell before the servers are known
3. #49890 - perf(desktop): show the previous shell while the renderer boots
4. #49894 - chore(desktop): measure the startup bench from the screen
5. #49886 - fix(cli): report version mismatch on startup connect failure
6. #49875 - fix(app): route opencode://new-session to a draft under the new layout
7. #49881 - feat(tool): support non-utf8 file encodings
8. #49883 - refactor(schema): rename assistant providerState to state
9. #49876 - perf(app): drop luxon for the three date operations
10. #49871 - fix(core): explain user-invoked skills in skill guidance

**Feature Request Trends:**
- Proxy/network support (for restricted networks)
- i18n/localization
- IDE-like features (git branch indicator)
- Session sync across devices
- Plugin customization
- Desktop flag
- Performance optimizations
- Auto-compaction control

**Developer Pain Points:**
- CORS preflight issues blocking browser clients
- Provider/model errors (encrypted_content, free tier restrictions)
- Session management issues (leaking, V1→V2 migration)
- UI/UX bugs (paste+enter, plan mode, notification state)
- Streaming failures
- Compaction data loss

Let me write the report in Chinese, professional and concise.</think>

# OpenCode 社区动态日报 · 2026-09-19

---

## 📌 今日速览

今日 OpenCode 仓库无新版本发布，社区活跃度聚焦在 **Desktop 应用启动性能优化**（@Hona 连续提交多个 perf PR）以及 **Provider 接入层错误**（Zen API CORS、Muse Spark encrypted_content 等）。同时 v2.0 系列的会话迁移与时间戳等回归问题持续引发开发者关注。

---

## 🚀 版本发布

今日无新版本发布。

---

## 🔥 社区热点 Issues

| # | 标题 | 状态 | 评论 | 👍 | 链接 |
|---|------|------|------|-----|------|
| **#31041** | Zen API endpoints return 404 on CORS preflight — blocks all browser-based clients | CLOSED | 12 | 11 | [#31041](https://github.com/anomalyco/opencode/issues/31041) |
| **#48973** | `encrypted_content` was not issued to this caller (Muse Spark 1.3) | OPEN | 8 | 8 | [#48973](https://github.com/anomalyco/opencode/issues/48973) |
| **#49588** | OpenCode's free tier can only be used from within OpenCode Desktop | CLOSED | 7 | 0 | [#49588](https://github.com/anomalyco/opencode/issues/49588) |
| **#37993** | [FEATURE] Built-in proxy support with auto-start/stop | CLOSED | 5 | 0 | [#37993](https://github.com/anomalyco/opencode/issues/37993) |
| **#35601** | [FEATURE] i18n support for desktop application menu (zh-CN) | CLOSED | 5 | 1 | [#35601](https://github.com/anomalyco/opencode/issues/35601) |
| **#17856** | [FEATURE] Git Branch Indicator in Prompt Input | CLOSED | 4 | 5 | [#17856](https://github.com/anomalyco/opencode/issues/17856) |
| **#38008** | Sessions leaking messages between instances | CLOSED | 3 | 1 | [#38008](https://github.com/anomalyco/opencode/issues/38008) |
| **#44080** | compact silently lands reasoning-only summaries → irrecoverable context loss | OPEN | 2 | 0 | [#44080](https://github.com/anomalyco/opencode/issues/44080) |
| **#49641** | [2.0] V1→V2 importer skips sessions created after first V2 launch | OPEN | 2 | 0 | [#49641](https://github.com/anomalyco/opencode/issues/49641) |
| **#49742** | Message timestamp option missing in CLI v2.0.8 | OPEN | 2 | 0 | [#49742](https://github.com/anomalyco/opencode/issues/49742) |

**重点解读：**

- **#31041**（最热）：12 条评论 + 11 👍，是过去 24 小时内社区讨论度最高的 Issue。问题影响所有浏览器端客户端访问 Zen API，根因是 OPTIONS 预检请求被路由到 404 而非正确响应。
- **#48973**（仍 OPEN）：Muse Spark 1.3 模型通过 OpenCode Zen 调用时遇到 `encrypted_content` 未授权错误，影响真实生产用户，👍 8 个为列表最高。
- **#44080**：一个**数据安全**级别的 bug——`/compact` 在模型只返回 reasoning 而无正文时会以空内容作为摘要并销毁原始对话，属于不可逆的上下文丢失，目前仍 OPEN。
- **#49641 / #49742**：v2.0 系列两个明显的回归缺陷（会话迁移跳过、时间戳配置缺失），需优先跟进。

---

## 🛠️ 重要 PR 进展

| # | 标题 | 作者 | 状态 | 链接 |
|---|------|------|------|------|
| **#49882** | feat(app): open agent-referenced files as rich artifact tabs | @Hona | OPEN | [#49882](https://github.com/anomalyco/opencode/pull/49882) |
| **#49896** | perf(app): mount the shell before the servers are known | @Hona | OPEN | [#49896](https://github.com/anomalyco/opencode/pull/49896) |
| **#49890** | perf(desktop): show the previous shell while the renderer boots | @Hona | OPEN | [#49890](https://github.com/anomalyco/opencode/pull/49890) |
| **#49894** | chore(desktop): measure the startup bench from the screen | @Hona | OPEN | [#49894](https://github.com/anomalyco/opencode/pull/49894) |
| **#49886** | fix(cli): report version mismatch on startup connect failure | @rekram1-node | OPEN | [#49886](https://github.com/anomalyco/opencode/pull/49886) |
| **#49875** | fix(app): route opencode://new-session to a draft under the new layout | @stu-ball | CLOSED | [#49875](https://github.com/anomalyco/opencode/pull/49875) |
| **#49881** | feat(tool): support non-utf8 file encodings (GBK/Shift-JIS/Big5) | @MasEne1 | OPEN | [#49881](https://github.com/anomalyco/opencode/pull/49881) |
| **#49883** | refactor(schema): rename assistant providerState → state | @rekram1-node | OPEN | [#49883](https://github.com/anomalyco/opencode/pull/49883) |
| **#49876** | perf(app): drop luxon for three date operations (−68 KB) | @Hona | CLOSED | [#49876](https://github.com/anomalyco/opencode/pull/49876) |
| **#49871** | fix(core): explain user-invoked skills in skill guidance | @rekram1-node | CLOSED | [#49871](https://github.com/anomalyco/opencode/pull/49871) |

**重点解读：**

- **@Hona 的"启动性能改造"系列**：#49890 / #49894 / #49896 是一个连贯的桌面端冷启动优化计划，目标是把 shell 渲染与服务器发现解耦，并在开发者真正看到首帧时计时。其内部 mermaid 流程图清晰标注了"before/after"差异，是观察 2.0 桌面端性能投入的最佳窗口。
- **#49882**：把 agent 提到的截图/报告/CSV 等文件以"artifact tab"形式富化呈现（解决 DOMPurify 剥离 `file://`、Electron 拦截导航的问题），对终端体验提升显著。
- **#49881**：补齐 GBK / Shift-JIS / Big5 等非 UTF-8 编码支持，消除 `edit` / `write` / `apply_patch` 在中文/日文遗留项目中的隐性损坏。
- **#49886**：修复 CLI 在连接到运行中服务端时仅打印 `UnknownError: An error occurred in Effect.tryPromise` 的问题，改为透出真实错误与版本不匹配提示。
- **#49883 + #49850**：@rekram1-node 在做 provider/model 的 schema 拆分与字段重命名，是为后续更细粒度配置做准备。

---

## 📈 功能需求趋势

从 Issues 池中提炼，社区关注方向集中在以下几类（按热度排序）：

1. **网络受限环境适配** — 内置 proxy 自动启停（#37993）呼声高，企业/内网开发者明显扩大。
2. **桌面端体验** — i18n（#35601）、最大化状态恢复（#35444）、更新提示冗余（#37977）、`--desktop` CLI flag（#38009）形成组合诉求。
3. **会话与上下文管理** — 跨设备同步（#38011）、session 防泄漏（#38008）、V1→V2 迁移完整（#49641）、可控 auto-compaction（#38018）。
4. **IDE 化功能** — Git 分支指示器（#17856 👍 5）、agent 引用文件以 artifact 展示（对应 #49882 PR）。
5. **新模型 / Provider 支持** — Zen 端点补 Qwen3.8 Flash（#49888）、对 Muse Spark / Nemotron / DeepSeek-V4 的边界修复。
7. **插件与可扩展性** — session 创建时注入 plugin（#28985）、性能优化避免不必要的 auth plugin 加载（#37922）。
8. **非 UTF-8 工程兼容** — GBK/Shift-JIS 编辑（已由 #49881 PR 推进）。

---

## ⚠️ 开发者关注点 / 痛点

| 类别 | 代表性 Issue | 痛点描述 |
|------|------|------|
| **Provider 鉴权 / 计费边界** | #48973, #49588, #38025 | 第三方模型在 Zen/Go 通道下鉴权失败，免费档与 Desktop 强绑定、订阅被无故停用，反映订阅与计费链路透明度不足。 |
| **数据完整性风险** | #44080 | `/compact` 在 reasoning-only 响应下静默提交空摘要，造成不可逆上下文丢失，是当前最严重的数据风险。 |
| **会话与迁移** | #49641, #49742, #38008 | v2.0 迁移一次性 job 会跳过晚于首次 V2 启动的会话；多实例并存时消息串扰。 |
| **流式响应不稳定** | #37856, #38024 | "Streaming response failed" 在编辑消息、Nemotron Ultra 等场景高发，影响连续体验。 |
| **TUI / 终端异常** | #33364, #31246, #30133 | 子任务在中断后仍触发工具调用、粘贴+回车吞文本、WSL2 退出后终端进入 mouse tracking 状态。 |
| **并行 Agent 容错** | #37315, #37959 | 1 个并行 sub-agent 卡死导致整批被 abort；Windows 1.18.3 上长任务被中途取消。 |
| **隐藏文件 / glob 行为** | #47421 → #48894 | `**/*.ts` 把 `.hidden.ts` 也返回，开发者期望隐藏文件默认排除。 |
| **可观测性** | #49886 | CLI 启动失败时仅显示 `UnknownError`，缺少版本不匹配等可诊断信息。 |

---

> **编辑视角**：今日主线是 **Desktop 启动性能重构**（@Hona 集中火力）+ **v2.0 回归清账**（迁移/时间戳）。建议团队优先关注 #44080（数据丢失）与 #49641（会话迁移），二者均为 OPEN 且影响存量用户；同时观察 @Hona 的 perf 系列 PR 合并节奏，这是 2.0 桌面端可用性改善的关键信号。

</details>

<details>
<summary><strong>jcode</strong> — <a href="https://github.com/1jehuang/jcode">1jehuang/jcode</a></summary>

<think>Let me analyze the GitHub data for jcode (which appears to be a Claude Code-like AI coding assistant CLI tool) and generate a comprehensive daily report.

Key observations:
1. **Release**: v0.85.0 was released with configurable swarm effort and richer client workflows
2. **Issues**: 30 issues updated in past 24 hours, mostly bug reports that were closed
3. **PRs**: 35 PRs updated, many feature additions for providers, TUI, and tools

Let me categorize the most important items:

**Top Issues to highlight:**
- #1191 - CI broken since Aug 20 (closed, high impact infrastructure)
- #1184 - Ghostty focus-gained causing CPU burn (closed, performance)
- #1187 - Desktop notification zombies (closed, lifecycle bug)
- #1092 - Prompt overlay duplicated in $HOME (closed, good first issue)
- #912 - Update check false positives (closed)
- #1204 - cargo shim cross-project pollution (closed)
- #1189 - bg output race condition (closed)
- #1240 - Same as #1092, duplicate (closed)
- #1269 - ambient config hot-reload (closed)
- #1186 - Slash autocomplete missing skills on Windows (closed)
- #1303 - OpenRouter credentials issue (open)
- #1302 - Text-only model image poisoning (open)
- #1300 - Grok Build ACP loop (open)
- #1299 - @file mention feature request (open)
- #1297 - grok-4.6 context window wrong (open)
- #1296 - Grok Build no diffs in TUI (open)
- #1294 - macOS Clippy warnings (open)

**Top PRs to highlight:**
- #1282 - Compaction lifecycle hooks (feature)
- #1280 - pre_request transform hook (feature)
- #1281 - Recurring schedules (feature)
- #1290 - Fix Grok Build in Jcode (5 issues fixed)
- #1278 - Embedded slash commands (feature)
- #1279 - Pre-tool input transformers (feature)
- #1268 - @file mention picker (closes #570, addresses #1299)
- #1263 - Upgrade-safe provider extensions
- #1271 - Command Code provider
- #1285 - TUI panic-induced exits fix
- #1193 - Safe fixes from September triage
- #1218 - 10 reproducible issue fixes

**Feature Trends:**
- Provider expansion (Grok Build, Command Code, Cursor)
- @file mention support
- Tool/system hooks (pre-request, pre-tool, lifecycle)
- TUI improvements
- ACP (Agent Communication Protocol) integration
- Plugin/extension system

**Developer Pain Points:**
- Provider-specific quirks (Grok Build, OpenRouter, Kimi K3)
- Platform-specific bugs (Windows, macOS, Linux)
- Configuration management (sponsors opt-out, ambient hot-reload)
- Performance issues (CPU burn, deadlocks)
- Terminal compatibility (Ghostty, tmux)

Let me write this up in Chinese, professional tone.</think>

# jcode 社区动态日报
**日期：2026-09-19**

---

## 📌 今日速览

v0.85.0 版本今日发布，重点引入 **可配置的 swarm reasoning effort** 与有界 Jev 浏览器会话委派能力。社区当日集中清理了大量长期遗留的 CI、配置加载与终端兼容性 Bug（30 条 Issue 几乎全部关闭），同时围绕 **Grok Build 集成**、**@文件提及补全**、**Provider 扩展框架** 涌现出多个重要 PR 与新需求。

---

## 🚀 版本发布

### v0.85.0 — Configurable swarm effort and richer client workflows
**链接**：https://github.com/1jehuang/jcode/releases/tag/v0.85.0

**核心变更**：
- 为 swarm 与 deep swarm 提供 **独立的 root-model reasoning effort** 配置，开关中显示当前所选强度
- 多步浏览器任务可委派给 **有界 Jev 浏览器会话**，完成后归还控制权（避免长任务阻塞 TUI）
- 改善客户端工作流的多步交互体验

---

## 🔥 社区热点 Issues

> 当日 30 条更新 Issue 中绝大多数已被关闭，反映维护者正集中修复积压 Bug。

| # | 标题 | 状态 | 为什么重要 |
|---|------|------|-----------|
| [#1191](https://github.com/1jehuang/jcode/issues/1191) | CI 在 8 月 20 日起全面失效：ci/ios-testflight/windows-smoke 三个工作流重复 `env` 顶层键 | ✅ CLOSED | 影响所有 PR 与 master 分支的基础设施级问题，拖了近一个月 |
| [#1184](https://github.com/1jehuang/jcode/issues/1184) | Ghostty 焦点获得时重触发 mode 1004，空闲会话产生 42k writes/s 反馈循环 | ✅ CLOSED | 极端性能 Bug（CPU 占用 66–106%），影响 Ghostty 用户 |
| [#1187](https://github.com/1jehuang/jcode/issues/1187) | Desktop notification 子进程在 #935 修复后仍变僵尸进程 | ✅ CLOSED | observer-hook 修复的盲点，跨平台（Linux `notify-send` / macOS `osascript`） |
| [#1092](https://github.com/1jehuang/jcode/issues/1092) / [#1240](https://github.com/1jehuang/jcode/issues/1240) | 当 cwd == $HOME 时 prompt overlay 文件被双倍加载 | ✅ CLOSED | 经典去重缺失 Bug，`good first issue` 标签，社区重复提交 |
| [#912](https://github.com/1jehuang/jcode/issues/912) | 当本地分支无 upstream 时，update check 永远报告 "up to date" | ✅ CLOSED | 安全相关，450 commits 落后却显示绿色 |
| [#1204](https://github.com/1jehuang/jcode/issues/1204) | Bash 工具导出的 `cargo` shim 在 `cd` 进入其他 Rust 项目时仍构建 jcode | ✅ CLOSED | 跨项目污染，影响 agent 工具调用的正确性 |
| [#1189](https://github.com/1jehuang/jcode/issues/1189) | `bg output` 在 timeout-promoted 命令仍 Running 时失败 | ✅ CLOSED | 后台任务输出 artifact 时序竞争 |
| [#1186](https://github.com/1jehuang/jcode/issues/1186) | Windows v0.83.0 下 slash autocomplete 缺失所有已安装 skill | ✅ CLOSED | 严重功能缺陷：标头显示 "18 loaded" 但 `/` 仅有 111 条内置命令 |
| [#1269](https://github.com/1jehuang/jcode/issues/1269) | config.toml 中启用 `ambient` 直到重启才生效（状态仍报 enabled） | ✅ CLOSED | 热重载一致性 Bug |
| [#1303](https://github.com/1jehuang/jcode/issues/1303) | "No active credentials for provider: openrouter." 自动切换模型时反复出现 | 🟢 OPEN | 影响自动模型切换的常用功能，用户痛点 |
| [#1302](https://github.com/1jehuang/jcode/issues/1302) | 仅文本模型 + 乐观 OpenAI-compatible 端点：图像块污染会话 | 🟢 OPEN | 需要运行时 modality 恢复机制，影响多 provider 路由 |
| [#1299](https://github.com/1jehuang/jcode/issues/1299) | **功能请求**：请产品开发下 @ 指定文件/文件补全 功能 | 🟢 OPEN | 与 [#1268 PR](https://github.com/1jehuang/jcode/pull/1268) 直接呼应，是 IDE 类工具的标配 |

---

## 🛠️ 重要 PR 进展

| # | 标题 | 意义 |
|---|------|------|
| [#1290](https://github.com/1jehuang/jcode/pull/1290) | **fix(grok-build): 让 Grok Build 在 jcode 中可用** | 一举修复 #1289/#1296/#1297/#1298/#1300，确立 Grok Build 与 jcode 为**互补 harness** 而非嵌套；通过 `_meta.rules` 注入协调指令，保留 jcode 的 TUI/skills/MCP |
| [#1268](https://github.com/1jehuang/jcode/pull/1268) | **feat(tui): @file mention picker + frecency ranking** | 关闭 #570，回应 #1299 社区呼声；先实现项目本地已跟踪文件，再用频率排序 |
| [#1278](https://github.com/1jehuang/jcode/pull/1278) | **feat(tui): 支持 prompt 内嵌与多条 slash command** | 关闭 #1277，可在普通文本中识别命令、保留上下文文本 |
| [#1282](https://github.com/1jehuang/jcode/pull/1282) | **feature: Compaction lifecycle hooks + 自定义 summarizer** | 在 fire-and-forget 总线上暴露 `compaction_started/completed/emergency`，支持外部 `summary_command` stdin/stdout 协议，存储 trigger/mode provenance |
| [#1280](https://github.com/1jehuang/jcode/pull/1280) | **feature: pre_request transform hook** | 每次 provider 调用前用外部命令改写 JSON 请求；静态系统前缀只读以保护 split-prompt 缓存架构 |
| [#1281](https://github.com/1jehuang/jcode/pull/1281) | **feature: 周期计划（chain-safe repeats, 整系列取消）** | 引入 `repeat_every_minutes` + `repeat_max_iterations`；每轮预先重排队以避免链断裂；ambient cycle 显式排除 |
| [#1263](https://github.com/1jehuang/jcode/pull/1263) | **feat(plugin): 升级安全的 provider 扩展 + GitHub 生命周期** | 两级扩展系统：subprocess provider 协议 + 内嵌 Rust tier + 仅元数据 GitHub 安装；依赖 #1260 |
| [#1260](https://github.com/1jehuang/jcode/pull/1260) | **feat(provider): 版本化的外部 provider 子进程协议** | 让用户维护的外部 provider 能在 jcode 升级时存活 |
| [#1271](https://github.com/1jehuang/jcode/pull/1271) | **feat(provider): 新增 Command Code 原生 provider** | 关闭 #741，含鉴权、模型发现、NDJSON 流、配额诊断、cooldown-aware failover |
| [#1279](https://github.com/1jehuang/jcode/pull/1279) | **feat: pre-tool input transformers** | 关联 #760，为 RTK 等工具类插件铺路 |
| [#1276](https://github.com/1jehuang/jcode/pull/1276) | **fix: ambient 热重载 + 平台感知 badge 测试** | 修复 #1269 与 #1275 两个独立可审查的小修复 |
| [#1218](https://github.com/1jehuang/jcode/pull/1218) | **fix: 一次性处理 10 个 reproducible issue** | 9 月 triage 阶段产物：每个 commit 引用一个 issue，6 新修复 + 4 已存在重验证 |
| [#1193](https://github.com/1jehuang/jcode/pull/1193) | **fix: 9 月 7 日 triage 的安全修复** | 合并三处工作流顶层 env 重复，并修复关联问题 |
| [#1285](https://github.com/1jehuang/jcode/pull/1285) | **fix(tui): 消费焦点/粘贴事件，防止 panic 导致退出** | 修复三个交互 bug，panic hook 同步恢复终端 |

---

## 📈 功能需求趋势

从 Issues 与 PR 数据提炼，社区关注热点集中在 **5 大方向**：

1. **Provider 生态扩张** ⭐⭐⭐⭐⭐
   - 新增：Command Code（#1271）、Cursor（#1261）、外部 subprocess provider 协议（#1260、#1263）
   - 集成：Grok Build ACP（#1290 一次解决 5 个 issue）
   - 修正：OpenRouter 槽位被复用、grok-4.6 context window 错报（#1286、#1297）

2. **@文件提及与补全** ⭐⭐⭐⭐
   - 长期需求 #570 → #1268 实现 → #1299 中文用户再次呼吁
   - TUI 体验向 IDE 看齐的核心缺口

3. **可编程 Hook / 扩展体系** ⭐⭐⭐⭐
   - pre_request（#1280）、pre_tool（#1279）、compaction lifecycle（#1282）、schedule 周期（#1281）
   - 形成 **"jcode as platform"** 的扩展骨架

4. **多 Provider 兼容性与 Modality 处理** ⭐⭐⭐
   - Kimi K3 mcp_call 空参数（#1214）、text-only 模型图像块污染（#1302）
   - 需要 schema-guided decoder 与运行时 modality 恢复

5. **性能与终端兼容性** ⭐⭐⭐
   - Ghostty 焦点 CPU 风暴（#1184）、tmux Shift+Enter（#1250）、Windows 死锁（#1201）

---

## 👨‍💻 开发者关注点（高频痛点）

| 痛点 | 典型代表 |
|------|----------|
| **配置一致性 / 热重载缺失** | ambient（#1269）、sponsors opt-out 被覆盖（#1188）、upstream 缺失假绿灯（#912）—— 期望 "改完即生效" |
| **跨平台陷阱** | macOS Clippy（#1294）、Windows 死锁（#1201）、Ghostty/tmux 终端键位（#1184、#1250）—— 仍需大量平台特化工作 |
| **进程生命周期 Bug** | 通知子进程僵尸（#1187）、cargo shim 跨项目污染（#1204）、desktop overlay 双倍加载（#1092/#1240）—— spawn/spawn-lock 顺序与 cwd 处理是反复踩坑点 |
| **ACP / 第三方 CLI harness 集成困难** | Grok Build 一连 5 个相关 issue（#1296/#1297/#1298/#1300）→ 一个综合性 PR（#1290）；Grok context、上传 diff、cwd 漂移、ACP loop 都需要特殊处理 |
| **MCP / 工具调用 schema 不齐** | Kimi K3 schema-guided decoder 把 arguments 吃成 `{}`（#1214）、需 modality 恢复（#1302）—— 模型侧 decoder 差异成为工具调用稳定性的最大变量 |
| **OpenRouter 多路复用语义混乱** | 日志与 `/usage` 把所有 OpenAI-compatible 直连 profile 都标记为 `openrouter`（#1286）；credentials 缺失报错（#1303）—— 用户难以分辨到底是哪个 provider 出了问题 |
| **TUI 鲁棒性** | panic 时不恢复终端导致假崩溃（#1285）、drag-and-drop shell escape 路径打不开（#1206）—— 终端级异常路径需要更全面的兜底 |

---

**整体判断**：jcode 正处于 **"v0.85 功能密集迭代 + 旧账集中清理"** 双轨并行阶段。短期内（v0.86 前后）建议关注：
- #1299 + #1268 的 @file 提及落地
- #1290 的 Grok Build 完整可用性
- Provider 扩展框架（#1260 + #1263）合并后的插件生态启动
- 剩余 OPEN Issue：#1300/#1302/#1303 的运行时恢复机制

</details>

<details>
<summary><strong>pi</strong> — <a href="https://github.com/earendil-works/pi">earendil-works/pi</a></summary>

<think>Let me analyze the GitHub data for pi (earendil-works/pi) community dynamics on 2026-09-19 and generate a comprehensive Chinese daily report.

Key observations from the data:
1. No new releases in the past 24 hours
2. 50 issues updated, focusing on the 30 most commented
3. 20 PRs updated
4. Key themes: model provider integrations, TUI rendering performance, bash tool bugs, compaction issues, model catalog updates

Let me organize this into a structured report.

Major themes I can identify:
- Model provider updates (Zhipu GLM, OpenCode Go, Qwen, Meta/Muse)
- TUI performance issues (high CPU, fullscreen rendering, scroll)
- Bash/tool execution issues (Windows pipeline orphaning, OAuth)
- Compaction bugs (Claude Fable thinking blocks, threshold no-ops)
- Cross-platform issues (Windows, macOS, Linux/Wayland)
- Export functionality issues
- Authentication/key management issues

Let me select the top 10 issues and 10 PRs based on comment counts, recency, and importance.

Top Issues by importance:
1. #6278 - Edit tool bug with Claude models (25 comments, most discussed)
2. #7730 - High CPU usage on Mac (16 comments)
3. #8928 - Parallel startup auth issue (11 comments)
4. #9052 - Fullscreen scroll speed (10 comments, CLOSED)
5. #7885 - npm search indexing (9 comments)
6. #8896 - Export HTML drops context (8 comments)
7. #9652 - Compaction with Claude Fable (6 comments)
8. #9616 - GLM catalog needs update (6 comments, CLOSED)
9. #9725 - OpenRouter baseUrl regression (6 comments, CLOSED)
10. #8827 - LaTeX font switches (6 comments)

Top PRs by importance:
1. #9096 - Meta provider with Muse OAuth (major new feature)
2. #8158 - Mermaid rendering upgrade
3. #9763 - pi.dev compatibility check
4. #9434 - Extensions append system prompt
5. #9488 - Codex turn attribution
6. #9746 - CJK punctuation autocomplete
7. #9668 - Prompt cache warming
8. #9483 - Tool cwd resolution fix
9. #9762 - TUI tool results guard
10. #9754 - Worktree session-dir fix

Let me write the report now.</think>

# pi 社区动态日报 · 2026-09-19

> 数据来源：[github.com/earendil-works/pi](https://github.com/earendil-works/pi) · 统计窗口：过去 24 小时

---

## 📌 今日速览

今日 pi 社区无新版本发布，但开发节奏密集：Issues 端围绕 **新模型适配**（Claude、GLM-5.3、OpenCode Go）、**TUI 性能与渲染**（高 CPU、fullscreen 重绘）以及 **工具稳定性**（bash 进程孤儿、export 丢上下文）三类问题持续推进；PR 端亮点包括 **Meta Muse 订阅 OAuth 接入**、**Prompt 缓存预热实验性支持**、**Codex 请求归因元数据补齐**，均直接关系到大模型接入与运行成本优化。

---

## 🚀 版本发布

过去 24 小时内**无新版本发布**。最近一次发布信息未在当前数据中体现，请关注仓库 Releases 页面。

---

## 🔥 社区热点 Issues（Top 10）

| # | Issue | 状态 | 关注理由 |
|---|-------|------|----------|
| [#6278](https://github.com/earendil-works/pi/issues/6278) | New Claude 模型对 edit 工具支持差（约 20% 编辑失败） | ✅ CLOSED | **本期最高热度**（25 评论 / 10 👍）。LLM 在 `edit[]` 中自造多余 key（如 `new_text_x`、`closeenough`），触发 schema 校验失败，影响 Claude 新模型可用性。 |
| [#7730](https://github.com/earendil-works/pi/issues/7730) | Mac OS 长会话下 CPU 占用 100%+ | 🟢 OPEN | 16 评论 / 10 👍。CPU 在 50–110% 间波动、内存 600–800MB，疑似与上下文长度相关，长期运行场景下体验受损。 |
| [#8928](https://github.com/earendil-works/pi/issues/8928) | 并行启动时 OAuth 过期凭证导致 "No API key found" 持续约 48s | 🟡 IN PROGRESS | 11 评论。提供确定性复现与计时数据，对多进程部署场景影响显著。 |
| [#9052](https://github.com/earendil-works/pi/issues/9052) | Fullscreen 模式下滚轮滚动速度比普通模式慢约 3 倍 | ✅ CLOSED | 10 评论 / 6 👍。Fullscreen 模式的"固定输入框"虽受欢迎，但滚动 UX 退化明显。 |
| [#7885](https://github.com/earendil-works/pi/issues/7885) | npm search 不索引新发布的 pi-packages（自 8 月 4 日起无新名） | ✅ CLOSED | 9 评论。生态可见性问题：`pi-affix-prompt` 已发布但搜索不到，影响包画廊同步。 |
| [#8896](https://github.com/earendil-works/pi/issues/8896) | `/export HTML` 静默丢弃 `display:false` 自定义消息 | 🟢 OPEN | 8 评论。`display` 本是 TUI-only 标记，却被错误地用于 export，导致上下文丢失，违背文档语义。 |
| [#9652](https://github.com/earendil-works/pi/issues/9652) | Anthropic Claude Fable 因转录的 thinking blocks 拒绝 compaction | 🟢 OPEN | 6 评论 / 2 👍。`reasoning_extraction` 分类器拦截 `/compact`，影响长会话维护流程。 |
| [#9616](https://github.com/earendil-works/pi/issues/9616) | `zai-coding-cn` 目录仍列出 8 个已下线 GLM 模型 | ✅ CLOSED | 6 评论。智谱 GLM Coding Plan 合并为 GLM-5.3 / GLM-5.3-Fash，本地目录未跟进，造成请求被静默重定向。 |
| [#9725](https://github.com/earendil-works/pi/issues/9725) | 0.85.1 回归：OpenRouter `baseUrl` 无法按文档方式覆盖 | ✅ CLOSED | 6 评论。Commit 4e69b0c 后所有 OpenRouter 模型按 API 切换 baseUrl，覆盖变得"无差别"，影响自部署代理场景。 |
| [#8827](https://github.com/earendil-works/pi/issues/8827) | TUI LaTeX：旧式字体切换（`\rm`/`\bf`/`\it`）触发整块原始回退 | 🟢 OPEN | 6 评论。Markdown 数学公式渲染质量缺陷，影响技术写作场景。 |

---

## 🛠 重要 PR 进展（Top 10）

| # | PR | 状态 | 内容 |
|---|----|------|------|
| [#9096](https://github.com/earendil-works/pi/pull/9096) | feat(ai, coding-agent): 新增 Meta（Muse 订阅 OAuth）provider | 🟢 OPEN | 解决 #7543。Meta Muse 订阅接入，但存在两个特殊行为：token 每日从 identity token 重铸（无滚动刷新）；流式响应当前是"假流式"——整段 burst 输出，中等长度任务体验略差。 |
| [#8158](https://github.com/earendil-works/pi/pull/8158) | feat(coding-agent): 升级 Mermaid 终端渲染 | 🟢 OPEN | 关闭 #8157 / #7832。提升 TUI 内 Mermaid 图表的可读性与交互性。 |
| [#9763](https://github.com/earendil-works/pi/pull/9763) | feat(coding-agent): 新增 pi.dev 兼容性检查 | 🟢 OPEN | 将已合并 PR 的 commit 调度到 pi.dev 内部兼容性工作流，上报稳定的 catalog 兼容性 commit 状态；避免 `pull_request_target` 权限泄露，使用仓库 `GITHUB_TOKEN`。 |
| [#9434](https://github.com/earendil-works/pi/pull/9434) | feat(coding-agent): 允许扩展向会话系统 prompt 追加内容 | 🟢 OPEN | 关闭 #9432。`session_start` handler 可返回 `systemPromptAppend`，按 handler 顺序收集并 trim，附带来源元数据，便于扩展注入持久化指令。 |
| [#9488](https://github.com/earendil-works/pi/pull/9488) | fix(ai): 补齐 Codex 标准 turn 归因元数据 | 🟢 OPEN | 在流式选项中加入 provider-neutral 的 `requestIdentity`（session / thread / turn / window / request-kind），让多轮续传、retry、steering、compaction 恢复期间可被可靠追踪。 |
| [#9668](https://github.com/earendil-works/pi/pull/9668) | feat(coding-agent): 提示缓存预热（实验性） | 🟢 OPEN | 作者 mitsuhiko。目前仅对 Anthropic 等支持显式缓存的 provider 有意义，目标是降低长会话延迟与成本。 |
| [#9483](https://github.com/earendil-works/pi/pull/9483) | fix(coding-agent): 工具 cwd 解析改为 `customCwd` + `ctx.cwd` 回退 | ✅ CLOSED | 修复 #8627 合并后引入的工具 cwd 行为变更，保持显式传参的向后兼容。 |
| [#9762](https://github.com/earendil-works/pi/pull/9762) | fix(coding-agent): TUI 防护无 content 数组的工具结果 | ✅ CLOSED | 修复 #9761。扩展工具返回 `{ output: "..." }` 等非标准结构时不再让交互式 TUI 因 `Cannot read properties of undefined (reading 'filter')` 崩溃退出。 |
| [#9754](https://github.com/earendil-works/pi/pull/9754) | fix(coding-agent): 同仓库 worktree 视为同一项目并解析 session-dir 软链 | ✅ CLOSED | 解决 #9753。从同 repo 不同 checkout（含 worktree）恢复会话不再误弹"Fork this session?"。 |
| [#9746](https://github.com/earendil-works/pi/pull/9746) | fix(tui): 文件自动补全识别 CJK 标点边界 | 🟢 OPEN | `docs<tab>` 这类紧跟 CJK 标点的输入现在能正确触发文件补全。 |

> 其他值得关注的已合并 PR：#9744 `/retry` 命令恢复失败重连后的轮次、#9742 shell 时长支持 hh:mm:ss、#9745 完善 copy 快捷键说明、#9734 拒绝歧义 `--session/--fork` ID 前缀、#9738 在 overflow 重试前 flush 延迟自定义消息。

---

## 📈 功能需求趋势

综合近 24 小时 Issues 与 PR，提炼出社区最集中的功能方向：

1. **新模型与 Provider 适配（热度最高）**
   - Meta Muse OAuth（#9096）、Qwen Token Plan CN（#7989）、Azure Chat Completions（#9645）、OpenCode Go DeepSeek v4.1-Flash（#9737）、GLM-5.3 推理映射（#9720 / #9616）。
   - 反映社区对**多模型即插即用**的强烈需求。

2. **TUI 性能与渲染体验**
   - 长会话 CPU 飙升（#7730）、fullscreen 重绘每帧重算整段 transcript（#9549）、滚动速度（#9052 / #9758）、CJK 标点补全（#9746）、行边界语义（#8019）。
   - 关注点在 **大 transcript 下的流畅度** 与 **多语言/多分辨率适配**。

3. **会话与上下文管理**
   - Compaction 与 Claude Fable 冲突（#9652）、阈值 compaction 静默 no-op（#9740）、export HTML 丢上下文（#8896）、Codex turn 归因（#9488）、Prompt 缓存预热（#9668）。
   - 核心诉求是 **长会话可观测、可恢复、成本可控**。

4. **跨平台稳定性**
   - Windows bash 进程孤儿（#9129）、Wayland 剪贴板 stderr 泄漏（#9011）、macOS Terminal 标题泄漏环境变量（#9766）、Linux musl 链接（#9033）。
   - Windows / macOS / 各种 Linux 发行版下的"边缘场景"集中暴露。

5. **包生态可见性**
   - npm search 索引滞后（#7885 / #7987）、pi.dev 包画廊同步。
   - 第三方扩展作者希望发布即被检索到。

6. **SDK 与嵌入集成**
   - 自定义 resume 命令格式（#9749）、TUI 兼容性状态（#9763）。
   - pi 正在从 CLI 工具向 **可嵌入式 Agent 运行时** 演化。

---

## 🧑‍💻 开发者关注点

- **痛点 1：长会话性能瓶颈**
  多位开发者报告 Mac/Windows 下 CPU 单核饱和（#7730、#9549），原因包括 transcript 整体重绘、context 长度增长后的扫描成本。社区已有 PR #9267 通过将 `fuzzyMatch` 改为 `String.indexOf()` 来降低单次扫描开销。

- **痛点 2：CLI 的"静默失败"**
  `--mode` 接受非法值不报错（#9045）、`--print` 在 output 预算耗尽时退出码为 0（#9718）、阈值 compaction 静默 no-op（#9740）。脚本化与 CI 用户呼吁**显式诊断与退出码**。

- **痛点 3：Provider 元数据漂移**
  GLM 合并到 5.3 后本地目录仍列出 8 个旧模型（#9616）、OpenCode Go 缺少 DeepSeek v4.1-Flash（#9737）、OpenRouter baseUrl 覆盖回归（#9725）—— 反映出**外部 catalog 与本地 schema 同步**是高频痛点。

- **痛点 4：扩展与 SDK 的契约不清晰**
  工具结果 shape 错误直接导致 TUI 崩溃（#9761/#9762）、`display:false` 语义被滥用（#8896）、OAuth 过期导致启动 48s 卡顿（#8928）。社区期望更严格的边界校验与**清晰的扩展 API 文档**。

- **痛点 5：跨平台边缘场景**
  Windows 下的 `taskkill /T` 杀不掉 Git Bash 流水线（#9129）、WSLg Wayland 剪贴板错误信息污染 TUI（#9011）、macOS Terminal 把 `TMPDIR` 写入标题栏（#9766）—— 这些"小但烦"的问题在生产用户中频繁出现。

- **高频需求**
  ① Prompt 缓存预热（#9668）以降低长会话成本；② 扩展系统 prompt 追加能力（#9434）以增强可控性；③ CJK 与多语言补全/渲染（#9746 / #8827）；④ 工作树与符号链接下的会话一致性（#9753 / #9754）。

---

*日报生成完毕。如需聚焦某一方向（如 TUI 性能、Provider 适配）做深度专题分析，可继续告知。*

</details>

---
*本日报由 [Big Model Radar](https://github.com/96loveslife/big_model_radar) 自动生成。*
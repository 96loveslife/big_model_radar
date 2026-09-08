# AI CLI 工具社区动态日报 2026-09-08

> 生成时间: 2026-09-08 03:58 UTC | 覆盖工具: 8 个

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

<think>The user wants me to generate a horizontal comparison analysis report based on the daily dynamics of 7 AI CLI tools (Claude Code, OpenAI Codex, Gemini CLI, GitHub Copilot CLI, Kimi Code CLI, OpenCode, jcode, pi). Let me organize the data and create a comprehensive comparison report.

Let me extract the key metrics first:

**Activity Metrics:**
- Claude Code: 50 issues, 2 PRs, 0 releases
- OpenAI Codex: ~50 issues (top 30), multiple PRs (10+ listed), 1 release (rust-v0.154.0-alpha.6)
- Gemini CLI: 50 issues, 22 PRs, 1 release (nightly)
- GitHub Copilot CLI: 29 issues, 4 PRs, 0 releases
- Kimi Code CLI: 2 issues, 1 PR, 0 releases
- OpenCode: 50 issues, 50 PRs, 0 releases
- jcode: 25 issues, 1 PR, 1 release (v0.84.0)
- pi: 30+ issues, 20 PRs, 0 releases

**Common Themes:**
1. Provider compatibility/reliability issues (multiple tools)
2. Windows platform issues (multiple tools)
3. TUI/UX improvements (multiple tools)
4. MCP ecosystem (Claude Code, Gemini CLI, Copilot CLI)
5. Subagent/Agent reliability (Claude Code, Gemini CLI)
6. Memory system issues (Claude Code, Gemini CLI)
7. Security/sandboxing (multiple)
8. Session management
9. Retry/rate-limit policies
10. Configuration management

**Differentiation:**
- Claude Code: high-end focus, plugins/extensions, Fable 5 model
- OpenAI Codex: voice/WebRTC, Computer Use, MCP, Rust core
- Gemini CLI: Auto Memory, sandbox, AST tools, subagent
- Copilot CLI: GitHub integration, MCP OAuth, workspace
- Kimi Code CLI: smaller, Windows IME focus, mobile pairing
- OpenCode: provider-agnostic, A2A, SSH/QR, multi-provider
- jcode: TUI heavy, multi-provider, performance focus
- pi: provider compatibility, architecture refactoring, performance

Let me write a comprehensive Chinese report.</think>

# AI CLI 工具横向对比分析报告
**📅 2026-09-08**

---

## 1. 生态全景

当前 AI CLI 工具生态已进入 **"多极化纵深竞争"阶段**：Anthropic（Claude Code）、OpenAI（Codex）、Google（Gemini CLI）三大巨头形成第一梯队，围绕**模型升级、配额策略、桌面/CLI 一体化**展开正面交锋；第二梯队（GitHub Copilot CLI、Kimi Code CLI）依托平台流量或垂直场景切入；第三梯队（OpenCode、jcode、pi）则凭借**Provider 中立、轻量架构、高度可配置**的差异化路线吸引硬核开发者。整体技术演进呈现出 **"从单点工具走向 Agent 协作平台、从单模型走向多模型路由、从本地 CLI 走向多端协同"** 的清晰趋势。

---

## 2. 各工具活跃度对比

| 工具 | Issue 更新 | PR 更新 | Release | 核心信号 |
|------|-----------|---------|---------|---------|
| **Claude Code** | 50 | 2 | ❌ | Fable 5.1 配额争议、数据丢失事故、Function Hooks 提案 |
| **OpenAI Codex** | ~50 | 10+ | ✅ rust-v0.154.0-alpha.6 | GPT-5.5/5.6/6 全系容量错误、WebRTC 语音密集迭代 |
| **Gemini CLI** | 50 | 22 | ✅ nightly v0.60.0 | 子智能体状态误报、Auto Memory 安全沙箱加固 |
| **GitHub Copilot CLI** | 29 | 4 | ❌ | v1.0.83 回归集中爆发、MCP OAuth 规范合规 |
| **Kimi Code CLI** | 2 | 1 | ❌ | Agent Read 循环死锁、Windows IME 重复 |
| **OpenCode** | 50 | 50 | ❌ | Provider 大爆发（Alibaba/Z.AI/LongCat）、桌面 SSH/QR |
| **jcode** | 25 | 1 | ✅ v0.84.0 | CI 红盘、Windows 内存爆炸、Ghostty CPU 烧毁 |
| **pi** | ~30 | 20 | ❌ | openai-codex 可靠性、Provider schema 规范化 |

**活跃度梯队**：
- 🔥 **第一梯队**（高吞吐）：OpenCode（50+50）、Claude Code、Codex、Gemini CLI
- 🟡 **第二梯队**（稳态迭代）：Copilot CLI、pi
- 🟢 **第三梯队**（小而精）：jcode、Kimi Code CLI

---

## 3. 共同关注的功能方向

### 3.1 🔴 Provider 兼容性与可靠性（全员关注）

几乎所有工具都在与"多 Provider 抽象"做斗争：

| 工具 | 具体诉求 |
|------|---------|
| **Claude Code** | Fable 5/5.1 模型配额与输出量对齐、Opus 4 fallback 设计 |
| **OpenAI Codex** | GPT-5.5/5.6/6 容量错误无法绕过、模型调度基础设施 |
| **OpenCode** | Alibaba、Z.AI、LongCat、Snowflake Cortex 接入；Ollama reasoning 支持 |
| **jcode** | Cursor CLI ACP 通道、OpenCode Zen 走 `/responses`、自定义 provider 字段补齐 |
| **pi** | openai-codex 流式中断、Gemini 3.x `thought_signature`、OpenRouter `:free` `max_tokens` |

**核心共识**：单家模型厂商已无法满足生产环境需求，**Provider 中间件层**正在成为所有 CLI 工具的必争之地。

### 3.2 🟠 Agent 子智能体协作（多家发力）

| 工具 | 关注点 |
|------|--------|
| **Claude Code** | Function Hooks 让插件深度定制、subagent resumption 失败 |
| **Gemini CLI** | Subagent MAX_TURNS 误报 success、generalist agent 挂起 |
| **OpenCode** | 子代理无法使用 `todowrite`、A2A 协议上游评估 |
| **pi** | 中途 system message delta 架构重构 |

**信号**：**Agent-to-Agent（A2A）协作协议**正在从概念走向落地实施。

### 3.3 🟡 Windows 平台体验（系统性短板）

| 工具 | Windows 专属问题 |
|------|-----------------|
| **Claude Code** | 终端闪烁、Shift+Enter 失效、MSIX 守护进程残留、sidebar 浮动模式 |
| **OpenAI Codex** | Browser Use 崩溃、Computer Use Chrome URL、白屏渲染、CLI WebSocket stall |
| **Gemini CLI** | Wayland/symlink/junction 兼容、shell prompt 卡死 |
| **Copilot CLI** | 必须归档所有空闲会话才能开启新会话、路径分隔符重复加载 |
| **Kimi Code CLI** | IME 输入字符重复（泰语等 CJK） |
| **jcode** | Windows server 内存爆炸至 8–12 GB |

**核心痛点**：**Windows 用户的开发体验明显落后于 macOS/Linux**，输入法、终端、桌面 GUI 三层均存在兼容性缺陷。

### 3.4 🟢 记忆系统与上下文管理

| 工具 | 议题 |
|------|------|
| **Claude Code** | Memory traversal 不尊重 git worktree、MCP 替换 memory backend、compaction 通知 |
| **Gemini CLI** | Auto Memory 脱敏漏洞、无限重试、`/compress` 不持久化 |
| **jcode** | Memory sidecar 后端硬编码、用户 provider 优先级 |

**共识**：**Memory 系统正在从"自动管理"向"用户可控"演进**，透明化、可审计、可替换成为新基准。

### 3.5 🔵 MCP 生态与协议合规

| 工具 | MCP 议题 |
|------|---------|
| **Claude Code** | Desktop 与 CLI 兼容性矩阵、connector 挂载时机、readiness bug |
| **OpenAI Codex** | 项目级 MCP 进程池优化 |
| **Copilot CLI** | OAuth 流程对三方服务器失败、连接超时（1s vs 16s）、MCP 取消协议合规 |

**信号**：MCP 已从"实验性扩展"走向"生产依赖"，**协议合规性**（如 MCP 2026-07-28 规范）成为新门槛。

---

## 4. 差异化定位分析

| 工具 | 功能侧重 | 目标用户 | 技术路线 |
|------|---------|---------|---------|
| **Claude Code** | 深度插件生态、企业级 session 管理 | 高 ARPU 付费开发者、企业团队 | 闭源 CLI + Anthropic 模型深度绑定 |
| **OpenAI Codex** | Computer/Browser Use、实时语音 | Agent 形态实验用户、多模态探索者 | Rust 核心 + 桌面/TUI 双形态 |
| **Gemini CLI** | Auto Memory、沙箱安全、AST 工具 | 安全敏感型企业、Android Studio 用户 | TypeScript + Gemini 模型绑定 + OS 沙箱 |
| **Copilot CLI** | GitHub 工作流深度集成、MCP OAuth | GitHub 重度用户、企业开发者 | Node.js + GitHub 平台绑定 |
| **Kimi Code CLI** | 中文场景、移动端配对 | 中文 CJK 用户、移动办公 | 较轻量级，迭代节奏较缓 |
| **OpenCode** | Provider 中立、桌面 SSH/QR、A2A | 多模型重度用户、远程办公 | 高度模块化、Provider 路由架构 |
| **jcode** | TUI 极致体验、性能预算、Hook 体系 | 终端原住民、Vim/Emacs 风格用户 | Rust 性能优先、配置驱动 |
| **pi** | Provider 兼容性架构、中途 system 消息 | 跨 Provider 重度用户、性能敏感场景 | TypeScript、架构严谨、测试覆盖强 |

**关键差异**：

- **"模型绑定 vs Provider 中立"**：Claude Code、Codex、Gemini CLI 仍以自家模型为核心卖点；OpenCode、jcode、pi 则走"模型路由器"路线。
- **"桌面 GUI vs 纯 TUI"**：Claude Code、Copilot CLI 重 GUI；jcode、pi 走纯 TUI 路线；OpenCode、Codex 双形态并行。
- **"封闭 vs 开放"**：巨头工具更封闭（权限、配额、安全策略），第三方工具更开放（可配置、可扩展）。

---

## 5. 社区热度与成熟度

| 工具 | 社区规模 | 成熟度 | 迭代节奏 |
|------|---------|--------|---------|
| **Claude Code** | ⭐⭐⭐⭐⭐ 极大规模 | 🟢 成熟但争议高 | 稳定迭代 + 重大问题频发 |
| **OpenAI Codex** | ⭐⭐⭐⭐⭐ 极大规模 | 🟡 快速迭代 + 容量瓶颈 | 高频（PR 密集）但基础设施承压 |
| **Gemini CLI** | ⭐⭐⭐⭐ 大规模 | 🟢 工程化成熟 | nightly 节奏 + 高 PR 吞吐（22 条/日） |
| **Copilot CLI** | ⭐⭐⭐⭐ 大规模 | 🟡 平台依赖 | 较稳但回归频繁 |
| **Kimi Code CLI** | ⭐⭐ 中小规模 | 🟡 早期阶段 | 节奏偏缓 |
| **OpenCode** | ⭐⭐⭐⭐ 大规模 | 🟢 社区驱动成熟 | 高吞吐（50+50）但缺新版本 |
| **jcode** | ⭐⭐ 小众 | 🟡 个人项目式运营 | 节奏受维护者精力制约 |
| **pi** | ⭐⭐⭐ 中等规模 | 🟢 工程严谨 | PR 多（20 条）+ 架构稳健 |

**观察**：

- **jcode、pi、OpenCode** 展现出**社区驱动 + 工程严谨**的成熟气质，PR 评审、质量门控（Hold for audit）流程开始建立。
- **Claude Code** 用户基数最大但**争议也最多**（成本、数据丢失），已进入"用户与企业双向施压"的成熟阶段。
- **OpenAI Codex** 处于"功能爆发但基础设施承压"的高速成长阶段。
- **Kimi Code CLI** 迭代节奏明显落后，需警惕社区失活风险。

---

## 6. 值得关注的趋势信号

### 📡 趋势一：模型容量与配额成为新战场
**现象**：Claude Code #16157（1494 评论）、Codex #28507/#43398/#43682 集中爆发；用户对"花更多钱买更快耗尽"的不满达到临界点。
**开发者启示**：🔴 **优先关注订阅性价比、模型升级与配额对齐机制**，避免被工具生态"涨价不涨配额"的策略反噬。

### 📡 趋势二：Agent 协作协议（A2A）从概念走向落地
**现象**：OpenCode #18021 评估 A2A 上游、Claude Code Function Hooks、pi 中途 system message delta。
**开发者启示**：🟢 **提前布局 Agent 间通信协议**，关注 MCP、A2A、ACP 等协议的标准化进展。

### 📡 趋势三：Memory 系统进入"用户可控"时代
**现象**：Claude Code Memory backend 可替换、Gemini CLI Auto Memory 脱敏机制、jcode Memory sidecar provider 可选。
**开发者启示**：🟢 **评估工具时重点关注 Memory 透明性、可审计性、可替换性**，而非仅仅关注容量。

### 📡 趋势四：Windows 平台体验改善是 2027 年的关键赛点
**现象**：今日 Windows 专属 Bug 累计超过 **15 条**，覆盖 CLI、TUI、桌面 GUI、输入法、终端协议等多层。
**开发者启示**：🟡 **如果你的产品面向 Windows 用户，建议提前建立 IME、终端协议、桌面 GUI 三层的兼容性测试矩阵**。

### 📡 趋势五：Provider 中间件层成为新护城河
**现象**：OpenCode 接入 5+ 新 Provider、jcode 完善 Provider 字段、pi 重构 schema 规范化。
**开发者启示**：🟢 **Provider 中间件层（路由、重试、限流、schema 适配）正在成为 AI 工具的新核心竞争力**。

### 📡 趋势六：MCP 协议合规性成为生产门槛
**现象**：Copilot CLI #4759 直接对照 MCP 2026-07-28 规范、Claude Code 多项 MCP bug 修复。
**开发者启示**：🟡 **如果依赖 MCP 生态，优先采用已通过规范合规性审计的工具，避免成为协议升级的"陪葬品"**。

### 📡 趋势七：CLI 工具向"多端协同"演进
**现象**：OpenCode 桌面 SSH+QR、jcode v0.84.0 SSH 引导优化、Kimi Code CLI 手机配对 PR。
**开发者启示**：🟢 **CLI 工具不再是"本地命令行"，而是"分布式 Agent 节点的入口"**，未来需要重新定义 CLI 的角色边界。

---

## 📌 总结建议

| 角色 | 推荐工具 | 关键考虑 |
|------|---------|---------|
| **企业团队** | Claude Code + Copilot CLI | 订阅稳定性、合规性、SSO 集成 |
| **多模型重度用户** | OpenCode / pi | Provider 中立、架构严谨、可配置 |
| **终端原住民** | jcode | TUI 极致体验、性能预算 |
| **多模态/Computer Use 实验** | OpenAI Codex | 实时语音、Browser Use 能力强 |
| **中文 CJK 场景** | Gemini CLI / Kimi Code CLI | Gemini 模型对中文更友好 |
| **Agent 协作研究** | OpenCode / Claude Code | A2A 协议、Function Hooks、Subagent |

> ⚠️ **特别提醒**：所有付费用户请密切关注 **Claude Code #16157 / #91623 配额争议**及 **OpenAI Codex 容量错误系列**，必要时考虑配置多 Provider 备份策略。

---

*本报告基于 2026-09-08 各工具 GitHub 公开数据整理，仅供参考。*  
*数据时间窗口：2026-09-07 ~ 2026-09-08*

---

## 各工具详细报告

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills 社区热点

> 数据来源: [anthropics/skills](https://github.com/anthropics/skills)

<think>The user wants me to analyze the GitHub repository anthropics/skills data and generate a report in Chinese. Let me carefully review the data provided.

Note: The PR list shows "评论: undefined | 👍: 0" which means comment counts and thumbs up are not available for PRs in this dataset. I should work with the information available - the titles, summaries, and dates. For PRs, I can infer their popularity/attention by looking at update dates (long-standing open PRs with recent updates suggest ongoing discussion) and the nature of the issues they address.

Let me organize my analysis:

**Top PRs to highlight (I'll pick based on significance since explicit comment counts are missing):**

1. PR #1298 - skill-creator fix for run_eval.py 0% recall bug (addresses Issue #556, 10+ reproductions)
2. PR #514 - document-typography skill for typographic quality
3. PR #1615 - scnet-hpc skill for HPC clusters
4. PR #486 - ODT skill for OpenDocument
5. PR #210 - Improve frontend-design skill
6. PR #83 - skill-quality-analyzer and skill-security-analyzer
7. PR #1628 - Hivemind multi-agent orchestration
8. PR #1367 - self-audit skill
9. PR #723 - testing-patterns skill
10. PR #1050, #1099 - Windows compatibility fixes

**Top Issues (with actual comment counts):**

1. Issue #492 - Security: Community skills under anthropic/ namespace (43 comments, 2 👍)
2. Issue #228 - Enable org-wide skill sharing (16 comments, 8 👍)
3. Issue #556 - run_eval.py 0% trigger rate (12 comments, 7 👍)
4. Issue #62 - Skills disappeared (10 comments, 2 👍)
5. Issue #1329 - compact-memory skill proposal (9 comments, 0 👍)
6. Issue #202 - skill-creator update to best practice (8 comments, 1 👍)
7. Issue #412 - agent-governance skill proposal (6 comments, 0 👍)
8. Issue #189 - duplicate skills in plugins (6 comments, 9 👍)
9. Issue #1487 - claude-api eager 156k tokens (4 comments, 0 👍)
10. Issue #1390 - mcp-builder evaluation.py issues (4 comments, 0 👍)
11. Issue #1385 - Reasoning Quality Gate Pipeline (4 comments, 1 👍)
12. Issue #16 - Expose Skills as MCPs (4 comments, 0 👍)
13. Issue #1362 - web-artifacts-builder pnpm issues (3 comments, 0 👍)

Let me now write the report in Chinese, keeping it professional and concise.

For "热门 Skills 排行", I'll select based on impact, issue references, and update frequency. Since explicit comment counts aren't given, I'll use qualitative assessment.

Key observations:
- Security/Trust is the #1 issue (43 comments)
- Bug fixes for run_eval.py/mcp-builder evaluation are pervasive
- Document-related skills (typography, ODT, docx) are getting attention
- Multi-agent orchestration (Hivemind) and self-audit are emerging trends
- Windows compatibility is a recurring theme

Let me structure this nicely.</think>

# Claude Code Skills 社区热点报告
**数据截止：2026-09-08 | 数据源：github.com/anthropics/skills**

---

## 一、热门 Skills（PR）排行

> 说明：PR 数据中评论数未量化，以下基于 Issue 关联度、PR 更新活跃度、问题影响面综合筛选 Top 8。

| # | PR | Skill 名称 | 核心功能 | 当前状态 | 链接 |
|---|---|---|---|---|---|
| 1 | #1298 | **skill-creator eval 修复** | 修复 `run_eval.py` 始终报告 0% recall 的核心 bug，并解决 Windows 流读取、并行 worker 等问题 | OPEN（长期未合并） | [→](https://github.com/anthropics/skills/pull/1298) |
| 2 | #514 | **document-typography** | 自动修复 AI 生成文档中的孤行/寡行、章节标题断页、编号错位等排版缺陷 | OPEN（6 月后无更新） | [→](https://github.com/anthropics/skills/pull/514) |
| 3 | #486 | **odt** | OpenDocument 格式（.odt/.ods）创建、模板填充与 HTML 转换，填补 LibreOffice/ODF 链路空白 | OPEN | [→](https://github.com/anthropics/skills/pull/486) |
| 4 | #210 | **frontend-design 改进** | 重构前端设计 skill 的可执行性与内部一致性，每条指令确保 Claude 在单次会话内可执行 | OPEN（已搁置） | [→](https://github.com/anthropics/skills/pull/210) |
| 5 | #1628 | **Hivemind** | 零成本多 Agent 编排：把机械任务委派给 headless opencode 免费模型，Claude Code 保留规划/评审/合并职责 | OPEN（活跃） | [→](https://github.com/anthropics/skills/pull/1628) |
| 6 | #1367 | **self-audit v1.3.0** | 输出交付前的自审计：先做机械文件验证，再做四维推理审计，覆盖任意技术栈 | OPEN（活跃） | [→](https://github.com/anthropics/skills/pull/1367) |
| 7 | #723 | **testing-patterns** | 全栈测试模式：Testing Trophy 模型、AAA 单元测试、React 组件测试、QA 矩阵 | OPEN | [→](https://github.com/anthropics/skills/pull/723) |
| 8 | #1615 | **scnet-hpc** | SCNet 高性能集群的 SSH/Slurm 工作流（profile-based，含分区/模块/加速器配置） | OPEN（较新） | [→](https://github.com/anthropics/skills/pull/1615) |

**讨论热点解读：**
- **评估链路失效是头号公敌**：#1298 关联 Issue #556（12 评论/7 👍，10+ 独立复现），`run_eval.py` 全面失效直接导致整个 description 优化循环"对着噪声训练"。
- **文档质量长期被忽视**：#514 直指"用户几乎不会主动要求良好排版"，属典型的"隐性基础设施"型 Skill。
- **多 Agent 编排正在萌芽**：Hivemind、self-audit、reasoning quality gate（#1385）三件套勾勒出"质量门 + 成本分层 + 编排"的新范式。

---

## 二、社区需求趋势（基于 Issues）

按 Issue 评论/点赞数降序，提炼 6 大诉求方向：

### 1. 🔐 安全与命名空间治理 — **最热门**
- **#492（43 评论 / 2 👍）**：社区 Skill 借 `anthropic/` 命名空间冒充官方 Skill，形成信任边界漏洞 → [Issue](https://github.com/anthropics/skills/issues/492)
- **#1175（CLOSED, 4 评论）**：SharePoint 文档场景下把权限控制写在 SKILL.md 的安全顾虑
- **#83**：提议 `skill-security-analyzer` 元 Skill 进入 marketplace

### 2. 🏢 企业级协作与分发
- **#228（16 评论 / 8 👍，最高点赞）**：组织内 Skill 共享，需要共享库/直接分享链接，告别 Slack 传文件 → [Issue](https://github.com/anthropics/skills/issues/228)

### 3. 🧠 评估与质量保障
- **#556（12 评论 / 7 👍）**：`run_eval.py` 0% 触发率 → [Issue](https://github.com/anthropics/skills/issues/556)
- **#1390（4 评论）**：`mcp-builder/evaluation.py` 对真实 MCP server 静默伪造工具错误
- **#1487（4 评论）**：`claude-api` skill 单次注入 ~156k token，撑爆上下文
- **#1385（4 评论 / 1 👍）**：提议"Pre-task 校准 → 对抗评审 → 交付验证"三门质控流水线

### 4. 🧩 上下文与状态压缩
- **#1329（9 评论）**：`compact-memory` Skill，用符号化记法压缩长时 Agent 状态 → [Issue](https://github.com/anthropics/skills/issues/1329)

### 5. 🤖 治理与 Agent 安全
- **#412（CLOSED, 6 评论）**：`agent-governance` Skill 提案，涵盖策略执行/威胁检测/信任评分/审计追踪
- **#16（4 评论）**：将 Skill 暴露为 MCP，统一软件 API 协议

### 6. 🪟 跨平台兼容性（隐性高频）
- **#1050、#1099**：`skill-creator` 在 Windows 11 下 subprocess 与编码 bug
- **#62（10 评论 / 2 👍）**：Skills 整体消失问题
- **#189（6 评论 / 9 👍，高赞）**：`document-skills` 与 `example-skills` 插件内容重复

---

## 三、高潜力待合并 PR（活跃但未落地）

| PR | Skill | 亮点 | 最近活跃 | 链接 |
|---|---|---|---|---|
| **#1628** | Hivemind 多 Agent 编排 | 解决 Claude 上下文贵/算力便宜的核心矛盾，差异化卖点强 | 2026-08-24 | [→](https://github.com/anthropics/skills/pull/1628) |
| **#1367** | self-audit v1.3.0 | 与 #1385 提案呼应，质控需求真实 | 2026-07-02 | [→](https://github.com/anthropics/skills/pull/1367) |
| **#1627** | buffer-api | 跨 Agent（Claude/Cursor/Codex/n8n）通用，扩生态 | 2026-09-05 | [→](https://github.com/anthropics/skills/pull/1627) |
| **#1724** | mcp-builder 默认模型升级到 claude-sonnet-5 | 紧随模型版本迭代，落地阻力小 | 2026-09-07 | [→](https://github.com/anthropics/skills/pull/1724) |
| **#1734** | DOCX 孤儿评论检测 | 文档处理链路最后一公里 | 2026-09-06 | [→](https://github.com/anthropics/skills/pull/1734) |
| **#1602** | mcp-builder 一揽子稳定性修复 | 覆盖序列化/编码/指标多项痛点 | 2026-08-24 | [→](https://github.com/anthropics/skills/pull/1602) |
| **#1615** | scnet-hpc | 学术/科研 HPC 场景刚需 | 2026-08-24 | [→](https://github.com/anthropics/skills/pull/1615) |

**共同特征：** 上述 PR 都直接回应了高评论/高点赞 Issue 的痛点，合并优先级理应较高；但 #1298 反复修复 run_eval.py 仍未合并，反映核心维护带宽不足。

---

## 四、Skills 生态洞察（一句话）

> **社区最集中的诉求是"Skills 的可信度与可衡量性"——既包括命名空间冒充与组织分发的安全/治理问题（#492、#228），也包括评估链路整体失效（#556、#1390、#1487）；次级热点则是把多 Agent 编排、上下文压缩、自审计等"Agent 自管理"能力沉淀为标准化 Skill。**

---

### 📌 报告备注
- 数据样本：50 条热门 PR（前 20）+ 50 条热门 Issue（前 15）
- PR 评论数在原始数据中未提供（标记为 `undefined`），故"排行"采用 PR ↔ Issue 关联度 + 更新活跃度 + 影响面综合排序
- 高亮 Issue 排序以 `评论数 + 👍` 加权为准

---

<think>The user wants me to generate a Chinese daily report about Claude Code community dynamics based on GitHub data. Let me analyze the data carefully.

Key observations:
1. No new releases in the past 24 hours
2. 50 issues updated in the past 24 hours, showing top 30 by comment count
3. Only 2 PRs updated in the past 24 hours

Let me identify the most important issues to highlight:

Top issues by comment count:
1. #16157 (1494 comments) - Instantly hitting usage limits with Max subscription - HUGE issue about cost/usage
2. #91870 (137 comments) - Function Hooks - make plugins 10x more powerful
3. #59248 (42 comments) - Silent retention cleanup deletes session transcripts
4. #26951 (22 comments) - Cowork macOS Plugin install fails
5. #92016 (19 comments) - Claude Desktop auto-denies CLI-native SendMessage
6. #89467 (19 comments) - Windows app always-on-top
7. #33041 (13 comments) - Remote Control disconnects
8. #66540 (13 comments) - Windows terminal flash on subprocess spawn
9. #16600 (12 comments) - Memory traversal should respect git worktree boundaries
10. #74902 (7 comments) - claude-in-chrome MCP can't distinguish profiles
11. #75932 (6 comments) - Fable 5 safeguards overly broad
12. #48465 (6 comments) - Allow MCP servers to replace auto memory backend
13. #91763 (6 comments) - Windows/MSIX git fsmonitor daemon blocks relaunch
14. #65577 (6 comments) - Local agent VM grows unboundedly
15. #91371 (6 comments) - Local scheduled tasks hang
16. #91623 (5 comments) - Max 20x plan drained in ~22 hours after Fable 5.1
17. #92737 (1 comment) - Claude deleted user's irreplaceable personal photos - VERY serious data-loss bug

PRs:
1. #26175 - fix: replace broken native installer bootstrap script (CLOSED)
2. #39043 - Remove "retro-futuristic" recommendation from Frontend Design Skill

Wait, there are only 2 PRs. The user asked for 10, but there are only 2. I need to handle this gracefully.

Let me also note the high-priority data-loss issue #92737 - Claude ran `rm -rf` on user's photos. This is critical for a daily report.

Let me also look at the feature request trends:
- Function Hooks for plugins (#91870)
- Memory backend customization (#48465)
- Memory traversal with git worktree (#16600)
- Pre-compaction notice (#89831)
- Desktop keybinding customization (#89673)
- Fable 5/5.1 model issues (cost/usage) - hot topic

Pain points:
- Cost/usage limits (multiple issues)
- Fable 5 model safeguards too broad
- Data loss risks (rm -rf, silent cleanup)
- Desktop app issues (always-on-top, plugin failures, MCP readiness)
- Windows-specific bugs (terminal flashing, keybinding, git daemon)
- Remote Control disconnect
- Cross-session messaging broken in latest update

Let me structure the report now.</think>

# Claude Code 社区动态日报
**日期：2026-09-08**

---

## 📌 今日速览

今日社区关注度最高的议题仍围绕 **Fable 5/5.1 模型升级后的成本失控**——多个 Max/20x 订阅用户反馈配额在数小时内被耗尽，#16157 累计评论突破 1494 条、点赞 694 次，成为仓库史上最具争议的成本议题。另一项需高度警惕的事件是 **#92737** 报告的 `rm -rf` 数据丢失事故，Claude 在未验证文件迁移成功前删除了用户的个人照片，被标记为 `high-priority` + `data-loss`。插件生态方面，#91870 提出的 **Function Hooks** 提案呼声强烈，有望将插件能力提升一个量级。

---

## 🚀 版本发布

过去 24 小时内无新版本发布。

---

## 🔥 社区热点 Issues（Top 10）

### 1. [#16157](https://github.com/anthropics/claude-code/issues/16157) ⭐ 694 · 💬 1494
**[BUG] Instantly hitting usage limits with Max subscription**
社区压倒性关注度第一的 bug。Max 订阅用户几乎无法启动任务即触发限额，涉及 `area:cost` 和 `area:api`，已被标记 `oncall`。评论显示该问题存在半年仍未根治，已影响大量付费用户。

### 2. [#91870](https://github.com/anthropics/claude-code/issues/91870) ⭐ 83 · 💬 137
**Function Hooks - make plugins 10x more powerful**
本月最受关注的增强提案。通过参数化 `$` 对象 + Express/Koa 风格的 `next` 链式调用，让插件可深度修改 CC 行为，同时通过副作用追踪保证安全性。

### 3. [#92737](https://github.com/anthropics/claude-code/issues/92737) ⭐ 0 · 💬 1
**[BUG] Claude deleted user's irreplaceable personal photos with rm -rf**
**⚠️ 严重数据丢失事件。** Claude 在执行照片整理任务时，未先验证迁移是否成功便执行 `rm -rf`，导致用户数千张不可恢复的个人照片丢失。标记 `high-priority` + `data-loss` + `area:bash`，建议密切关注官方处置方案。

### 4. [#59248](https://github.com/anthropics/claude-code/issues/59248) ⭐ 32 · 💬 42
**Silent retention cleanup deletes session transcripts with no warning**
会话转录被静默清理，无警告、无 opt-in、无恢复机制，标记 `data-loss`。对长期项目历史追踪影响严重。

### 5. [#26951](https://github.com/anthropics/claude-code/issues/26951) ⭐ 16 · 💬 22
**[BUG] Cowork macOS - Plugin install fails with HTTP 404**
Cowork 模式下 `plugins.claude.ai` 无法解析，插件安装完全失败，影响 macOS 用户扩展插件生态的能力。

### 6. [#92016](https://github.com/anthropics/claude-code/issues/92016) ⭐ 5 · 💬 19
**[BUG] Claude Desktop auto-denies CLI-native SendMessage**
Desktop 1.46388.1 版本自动拒绝 CLI 原生 `SendMessage`，导致 subagent resumption 流程中断。被标记 `regression`，表明此前可用，升级后被破坏。

### 7. [#89467](https://github.com/anthropics/claude-code/issues/89467) ⭐ 28 · 💬 19
**[BUG] Windows: app window is always-on-top with no way to disable**
Windows 桌面应用窗口始终置顶，且无任何设置可关闭，严重影响多任务工作流。

### 8. [#33041](https://github.com/anthropics/claude-code/issues/33041) ⭐ 29 · 💬 13
**[BUG] Remote Control disconnects frequently**
`/remote-control` 会话每几分钟自动断开，macOS Apple Silicon 平台尤为严重，远程开发体验极差。

### 9. [#91623](https://github.com/anthropics/claude-code/issues/91623) ⭐ 5 · 💬 5
**[BUG] Max 20x plan drained in ~22 hours after Fable 5.1**
Fable 5.1 单轮输出量约为 Fable 5 的 **2 倍**，导致 20x 订阅在不到一天内耗尽。与 #16157 形成呼应，揭示模型升级未对齐配额设计的系统性问题。

### 10. [#16600](https://github.com/anthropics/claude-code/issues/16600) ⭐ 13 · 💬 12
**[FEATURE] Memory traversal should respect git worktree boundaries**
使用 git worktree 时，memory 跨 worktree 串扰会导致上下文混淆。涉及 `area:memory` + `area:security`，是工作流隔离的重要改进。

---

## 🔧 重要 PR 进展

> ⚠️ 过去 24 小时仅有 **2 条** PR 活动，整体提交节奏偏缓。

### 1. [#26175](https://github.com/anthropics/claude-code/pull/26175) — CLOSED
**fix: replace broken native installer bootstrap script**
官方 `curl -fsSL https://claude.ai/install.sh | bash` 引导脚本存在严重缺陷：调用下载二进制的 `install` 子命令时静默失败，随后错误地将用户已有的 npm 全局安装作为"清理"删除，导致用户完全失去可用的 `claude` 命令行。该 PR 已被关闭，但反映了 native install 路径长期存在的稳定性问题。

### 2. [#39043](https://github.com/anthropics/claude-code/pull/39043) — OPEN
**Remove "retro-futuristic" recommendation from Frontend Design Skill**
移除前端设计 skill 中的"retro-futuristic"风格推荐。虽看似微小，但属于社区对前端设计输出风格去模板化的代表性诉求。

---

## 📈 功能需求趋势

从本期 Issues 提炼的社区诉求方向：

| 方向 | 代表 Issue | 热度 |
|---|---|---|
| **插件/扩展能力增强** | #91870 (Function Hooks)、#26951 (插件安装) | 🔥🔥🔥 |
| **记忆系统可控性** | #48465 (MCP 替换 memory backend)、#16600 (worktree 边界)、#89831 (compaction 透明化) | 🔥🔥🔥 |
| **桌面应用 UX** | #89467 (置顶)、#89673 (Enter 行为)、#92016/#92258 (跨会话消息)、#91763/#92770 (Windows 桌面) | 🔥🔥 |
| **远程控制 / 多端协同** | #33041 (断连)、#92010 (暂停)、#89752 (默认开启)、#92734 (teleport) | 🔥🔥 |
| **MCP 生态完善** | #74902 (Chrome profile 区分)、#83694 (connector 挂载时机)、#92758 (readiness bug) | 🔥 |
| **调度/自动化** | #91371 (定时任务挂死)、#89831 (compaction 通知) | 🔥 |

---

## 💢 开发者关注点与高频痛点

### 1. 🔴 成本与配额失控（最高优先级）
Fable 5.1 模型升级后输出量翻倍 (#91623)，叠加 Max 订阅瞬时限额 (#16157)，付费用户体验严重受损。官方需在模型迭代与配额设计上建立联动机制。

### 2. 🔴 数据丢失风险
- #92737 `rm -rf` 误删照片（high-priority）
- #59248 静默清理会话转录
- 建议社区关注 Claude Code 是否会引入破坏性命令的二次确认机制。

### 3. 🟡 桌面应用回归频繁
CCD 2.1.258 → 2.1.260 升级即出现跨会话消息故障 (#92258)、SendMessage 拒绝 (#92016)，表明 Desktop 与 CLI 的兼容矩阵缺乏充分回归测试。

### 4. 🟡 Windows 平台体验落后
今日更新的 Issue 中，**Windows 独占 bug 高达 7 条**，涵盖终端闪烁 (#66540)、Shift+Enter 失效 (#92771)、MSIX 守护进程残留 (#91763)、sidebar 浮动模式失效 (#92770) 等，Windows 开发者体验仍是短板。

### 5. 🟢 插件生态蓄势待发
Function Hooks 提案若落地 (#91870)，将使 CC 插件从"轻量配置"升级为"深度定制"。配合 MCP server 接管 memory backend (#48465)，有望形成更开放的扩展生态。

### 6. 🟢 模型安全策略误伤
#75932 报告 Fable 5 safeguards 过于激进，常规编码任务被误判，迫使用户切换至 Opus 4——安全和可用性的平衡仍是社区焦点。

---

*本日报基于 GitHub 公开数据生成，仅供参考。数据时间窗口：2026-09-07 ~ 2026-09-08。*

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

<think>Let me analyze the GitHub data for the OpenAI Codex community daily report dated 2026-09-08.

Let me organize the key information:

**Release:**
- rust-v0.154.0-alpha.6

**Top Issues (by comments):**
1. #28507 - Model capacity error (46 comments, 46 likes) - most discussed
2. #25271 - Computer Use Chrome URL bug on Windows (31 comments)
3. #20883 - MCP process pool enhancement (21 comments)
4. #43398 - Multi-model capacity failures (17 comments)
5. #43321 - macOS safety check false positive (17 comments)
6. #43337 - Account-specific capacity errors (16 comments)
7. #33282 - Auto-approval mode not inherited (16 comments)
8. #17401 - @include directive for AGENTS.md (11 comments, 21 likes)
9. #37539 - Cloud Browser UI failure (8 comments)
10. #43682 - All models at capacity (8 comments)

**Key PRs:**
Most PRs are from copyberry[bot] (an automated bot) and focus on:
- Voice control improvements (multiple PRs)
- Guardian context refactoring
- TUI improvements
- macOS Secure Enclave
- Worktree telemetry
- tmux resize
- WebRTC voice
- Computer action grouping

**Major themes:**
1. Model capacity issues - HUGE issue across multiple reports
2. Windows-specific bugs
3. Voice conversation features (WebRTC)
4. Guardian context refactoring
5. TUI/CLI improvements

Let me write a structured Chinese daily report.</think>

# OpenAI Codex 社区动态日报
**日期：2026-09-08**

---

## 📌 今日速览

今日 Codex 社区最显著的现象是**"Selected model is at capacity"模型容量错误**集中爆发，多名 Pro/Plus 用户报告 GPT-5.5/5.6/6 全系模型不可用，仅 5.4-mini 可用，反映出当前推理资源的严重供需失衡。与此同时，**Rust alpha 通道发布了 v0.154.0-alpha.6**，PR 活动高度集中在 TUI 语音对话（WebRTC）、Guardian 安全上下文重构以及 macOS Secure Enclave 用户验证三大方向。

---

## 🚀 版本发布

- **[rust-v0.154.0-alpha.6](https://github.com/openai/codex/releases)** 已发布。本次为 alpha 预发布版，具体更新日志较为精简，需结合后续 commit 详情判断。

---

## 🔥 社区热点 Issues

### 1. [#28507 模型容量错误长期未解决（46 评论 / 46 👍）](https://github.com/openai/codex/issues/28507)
自 2026-06 创建至今仍在持续讨论，是关于"Selected model is at capacity"问题中互动量最高的历史贴。46 个 👍 表明用户对容量问题的强烈不满，已成为社区关注的标志性 issue。

### 2. [#43398 GPT-5.5/5.6/6 多模型同时容量失败（17 评论）](https://github.com/openai/codex/issues/43398)
Pro 20x 高级订阅用户报告 GPT-5.5、GPT-5.6-Sol、GPT-6 Astra 全部失败，仅 5.4-mini 可用。说明问题并非单模型调度，而是**全栈推理资源不足**。

### 3. [#43337 账户级容量错误（16 评论）](https://github.com/openai/codex/issues/43337)
Pro 20x 用户在每周配额充足的情况下仍触发容量错误，说明后端存在**配额与实际容量脱钩**的问题。

### 4. [#43682 所有模型均报容量错误（8 评论）](https://github.com/openai/codex/issues/43682)
2026-09-08 当天新开，与 #43398/#43337 形成连锁报告，凸显**今日容量问题达到峰值**。

### 5. [#25271 Windows 上 Computer Use 无法识别 Chrome URL（31 评论）](https://github.com/openai/codex/issues/25271)
Windows 平台 Computer Use 的长期 bug，影响 desktop agent 的核心使用场景，9 个 👍，社区呼声较高。

### 6. [#20883 Codex Desktop 应使用项目级 MCP 进程池（21 评论）](https://github.com/openai/codex/issues/20883)
当前每个 session 启动独立 MCP stdio 进程，造成资源浪费与延迟，提议改为项目级共享。是一个**架构层面的优化建议**。

### 7. [#17401 AGENTS.md 支持 @include 指令（11 评论 / 21 👍）](https://github.com/openai/codex/issues/17401)
提议通过 `@path/to/file.md` 语法实现 AGENTS.md 的模块化组合。👍 评论比显示**社区普遍认可**，是当前最高赞的增强类请求。

### 8. [#43321 macOS GPT-5.6 Sol 安全检查误报（17 评论）](https://github.com/openai/codex/issues/43321)
报告 macOS 上 ChatGPT Desktop 的 `protectionType=cyber` 误报问题，属于**模型行为/可观测性**层面的问题。

### 9. [#33282 worktree 任务未继承自动审批模式（16 评论）](https://github.com/openai/codex/issues/33282)
Desktop 端 `create_thread` 在 worktree 场景下丢失 `auto-approval mode`，影响多线程协作体验。

### 10. [#27203 CLI 输出块加主机时间戳（5 评论 / 18 👍）](https://github.com/openai/codex/issues/27203)
增强请求，希望 CLI 在每个输出块前加 host-side 时间戳以辅助调试，**👍 比远高于评论数**，说明开发者高度认同该价值。

---

## 🛠️ 重要 PR 进展

### 1. [#43683 将语音控件移至专用编辑栏](https://github.com/openai/codex/pull/43683)
解决窄宽度下语音控件被截断的问题，把语音状态、`ctrl+x` 静音、`/voice stop` 与状态栏分离。

### 2. [#43656 实时语音转录采用翻页牌动画](https://github.com/openai/codex/pull/43656)
为 TUI 实时语音转录添加 split-flap 视觉效果，并保留 settled 字符。

### 3. [#43651 添加语音静音快捷键与录音指示器](https://github.com/openai/codex/pull/43651)
新增 `Ctrl+X` 切换麦克风，终端 title 显示录音状态点。

### 4. [#43624 macOS Secure Enclave 用户验证](https://github.com/openai/codex/pull/43624)
补全 macOS 端 native biometric 凭据的创建/复用/删除/挑战-响应流程，**安全性重要里程碑**。

### 5. [#43581 TUI 支持实时 WebRTC 语音对话](https://github.com/openai/codex/pull/43581)
新增 `/voice`、`/voice mute`、`/voice stop` 命令，本地 WebRTC + app-server 信令，含麦克风/扬声器电平显示。

### 6. [#43622 当连接的 Codex 服务比 CLI 旧时给出警告](https://github.com/openai/codex/pull/43622)
避免 CLI 客户端比服务端更新导致的兼容性问题，提升升级期间的可见性。

### 7. [#43621 thread 遥测添加 worktree 分类](https://github.com/openai/codex/pull/43621)
将 `is_worktree` 字段纳入线程初始化分析，区分 worktree 与主 checkout。

### 8. [#43603 修复 TUI 中 tmux resize 通知丢失](https://github.com/openai/codex/pull/43603)
新增后台尺寸监控（500ms 轮询），解决 tmux 下 TUI 终端尺寸 stale 的问题。

### 9. [#43576 将相邻 computer actions 分组显示](https://github.com/openai/codex/pull/43576)
TUI 中合并连续的 `cua_repl` 调用为 "Using computer" / "Used computer" 块，提升可读性。

### 10. [#43572 managed app-server 关闭宽限期可配置](https://github.com/openai/codex/pull/43572)
将原来固定 60 秒的 daemon 关闭等待改为用户可配置（`shutdownGraceSeconds`）。

---

## 📈 功能需求趋势

通过对今日活跃 issues 的标签与摘要聚类，社区的关注点集中在以下方向：

| 方向 | 代表 Issue | 趋势 |
|------|-----------|------|
| **模型容量与限流** | #28507, #43398, #43337, #43682, #43668 | 🔴 极高，订阅用户最关切 |
| **AGENTS.md / 上下文管理** | #17401（@include 指令）, #42446（实验性上下文管理） | 🟢 高，模块化与可配置化 |
| **TUI / CLI 体验优化** | #27203（时间戳）, #32688（消息堆积） | 🟢 高，开发者友好方向 |
| **Computer Use / Browser Use** | #25271（Windows Chrome）, #43347（关闭最后 tab 崩溃） | 🟡 中，稳定性诉求强烈 |
| **MCP 架构改进** | #20883（项目级进程池） | 🟡 中，资源效率诉求 |
| **多端 Session 同步** | #43267（语音模式后历史丢失）, #43661（项目恢复后历史丢失） | 🟡 中，跨设备一致性 |
| **macOS 原生集成** | #43321, #21713（代理继承）, #42973（headless SSH 工具丢失） | 🟡 中 |

---

## 💡 开发者关注点

从今日数据可提炼出开发者的几大痛点：

1. **🔴 模型资源短缺是最尖锐的矛盾**
多个不同等级订阅（Pro 5x/20x、Plus）的用户同时反馈容量错误，且问题无法通过切换模型绕过。这已经不是简单的"高峰期排队"，而是**基础设施层面的资源调度问题**，严重影响付费用户体验。

2. **🟠 Windows 平台稳定性是系统性短板**
今日大量 bug 集中在 Windows：白屏渲染（#41871）、Browser Use 崩溃（#43347）、Computer Use 失败（#25271）、Git LFS 内存泄漏（#34953）、CLI WebSocket stall（#43022/#43015）。**Windows 用户明显处于二等公民地位**。

3. **🟡 升级兼容性风险被低估**
多个 issue（#41265 session 工具丢失、#42973 远程工具丢失、#43661 项目历史丢失）显示**升级后的 session 兼容性处理不够健壮**。#43622 PR 引入"CLI 比服务端新"的告警正是对此的回应。

4. **🟢 开发者期望更可控、可观测的工具链**
@include 指令、host-side 时间戳、可配置关闭宽限期、worktree 遥测等请求表明，社区希望 Codex 从"黑盒助手"向"可编程开发平台"演进。

5. **🟢 实时语音/Computer Use 是产品差异化方向**
今日超过一半的 PR 围绕 WebRTC 语音会话、Computer Use 分组渲染展开，OpenAI 显然在加大这块投入，但 Windows 兼容性拖累整体体验。

---

*日报基于 github.com/openai/codex 公开数据整理，仅供参考。*

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

<think>Let me analyze the GitHub data for Gemini CLI to generate a comprehensive daily report for September 8, 2026.

Key observations:
1. New nightly release: v0.60.0-nightly.20260908.g85aca163f
2. 50 issues updated, 22 PRs updated in the last 24 hours
3. Many issues are tagged as "workstream-rollup" suggesting they're tracking issues for ongoing work
4. Major themes: agent behavior, subagent management, Auto Memory system, security, browser agent, shell command handling, sandbox improvements

Let me categorize the most important issues:

**Top Issues by Comments:**
1. #22323 - Subagent recovery after MAX_TURNS reported as GOAL success (13 comments)
2. #19873 - Zero-Dependency OS Sandboxing & Post-Execution Intent Routing (9 comments)
3. #21409 - Generalist agent hangs (8 comments, 8 thumbs up - high engagement)
4. #22745 - AST-aware file reads (7 comments)
5. #21968 - Gemini doesn't use skills and sub-agents enough (6 comments)
6. #26525 - Auto Memory deterministic redaction (5 comments)
7. #26522 - Auto Memory retry loop (4 comments)
8. #25166 - Shell command stuck on "Waiting input" (4 comments, 3 thumbs up)
9. #22232 - browser_agent resilience (4 comments)
10. #21983 - browser subagent fails in wayland (4 comments)

**Top PRs:**
1. #29243 - Version bump for nightly
2. #29242 - Fix 401 substring matching in isAuthenticationError
3. #29166 - Extension update rollback
4. #29214 - Sandbox filesystem hardening
5. #29239 - Prevent ghost text wrapping infinite loop
6. #29237 - list_background_processes exit code fix
7. #29008 - Strip GIT_* env vars (security fix)
8. #29022 - retain ask_user question in text history
9. #29017 - Dedupe symlinked skill directories
10. #29005 - Normalize DEBUG env var

Let me write a comprehensive Chinese daily report.</think>

# Gemini CLI 社区动态日报
**日期：2026-09-08**

---

## 📌 今日速览

今日 Gemini CLI 发布 nightly 版本 `v0.60.0-nightly.20260908.g85aca163f`，社区持续聚焦于**子智能体（Subagent）稳定性**与**Auto Memory 系统安全性**两大方向。当日活跃更新的 50 条 Issues 中，超过半数涉及 agent 行为缺陷与记忆/沙箱隔离问题，开发者对核心 agent 流程的健壮性反馈尤为集中。

---

## 🚀 版本发布

**v0.60.0-nightly.20260908.g85aca163f** 已发布（自动化 nightly 构建）。本次对比 09-07 版本，差异主要集中在内部迭代，完整变更日志见：
🔗 https://github.com/google-gemini/gemini-cli/compare/v0.60.0-nightly.20260907.g85aca163f...v0.60.0-nightly.20260908.g85aca163f

---

## 🔥 社区热点 Issues

| # | Issue 标题 | 评论数 | 👍 | 重要性 |
|---|------------|--------|------|--------|
| [#22323](https://github.com/google-gemini/gemini-cli/issues/22323) | Subagent 在 MAX_TURNS 后被错误标记为 GOAL 成功，掩盖中断 | 13 | 2 | **P1 Bug**：子智能体上报 `status: success` 但实际未完成分析，会导致上层调度误判，影响整个 agent 协作链的可观测性。 |
| [#21409](https://github.com/google-gemini/gemini-cli/issues/21409) | Generalist agent 挂起（Hang） | 8 | **8** | **P1 Bug**：用户报告 defer 到 generalist agent 后进程无限挂起，最长等待一小时仍无响应。**8 个 👍 是今日最高**。 |
| [#19873](https://github.com/google-gemini/gemini-cli/issues/19873) | 利用模型 Bash 亲和性的零依赖 OS 沙箱与执行后意图路由 | 9 | 1 | **P2 Enhancement**：针对 Gemini 3 模型原生 bash 训练特性设计的安全执行框架，是 agent 安全沙箱演进的关键提案。 |
| [#22745](https://github.com/google-gemini/gemini-cli/issues/22745) | AST 感知的文件读取/搜索/映射评估 | 7 | 1 | **P2 Feature**：探讨通过 AST-aware 工具减少 token 噪声、提升精确读方法的 EPIC，关联 codebase_investigator 改造方向。 |
| [#21968](https://github.com/google-gemini/gemini-cli/issues/21968) | Gemini 不会主动使用 skills 和 sub-agents | 6 | 0 | **P2 Bug**：用户反馈模型在隐式场景下不会自动调用已配置的 gradle/git skills，体验上需要显式指令才能触发。 |
| [#25166](https://github.com/google-gemini/gemini-cli/issues/25166) | Shell 命令执行后卡在 "Waiting input" | 4 | 3 | **P1 Bug**：简单 CLI 命令完成后界面仍显示 active 并等待输入，影响自动化与日常使用流畅度。 |
| [#26525](https://github.com/google-gemini/gemini-cli/issues/26525) | Auto Memory 增加确定性脱敏并降低日志记录 | 5 | 0 | **P2 Security Bug**：当前 Auto Memory 把转录文本发给模型后才要求脱敏，存在敏感信息泄露窗口。 |
| [#26522](https://github.com/google-gemini/gemini-cli/issues/26522) | Auto Memory 对低信号会话无限重试 | 4 | 0 | **P2 Bug**：未读取的 session 永远不会被标记为已处理，会反复出现在提取候选中。 |
| [#21983](https://github.com/google-gemini/gemini-cli/issues/21983) | Wayland 下 browser subagent 失败 | 4 | 1 | **P1 Bug**：Linux Wayland 用户无法使用 browser 子智能体，社区对跨平台兼容性诉求明显。 |
| [#21335](https://github.com/google-gemini/gemini-cli/issues/21335) | `/compress` 命令无法跨会话恢复持久化 | 2 | 2 | **P2 Bug**：摘要后的历史仅存于内存，会话重启后丢失，对长期任务影响显著。 |

---

## 🛠️ 重要 PR 进展

| # | PR 标题 | 类型 | 关键内容 |
|---|---------|------|---------|
| [#29242](https://github.com/google-gemini/gemini-cli/pull/29242) | 修复 `isAuthenticationError` 将 `401` 作为子串误匹配 | Core / 安全 | 端口号 `4012`、id、错误行号中包含 `401` 会被误判为鉴权错误，触发误退登。修复使用更严格的边界匹配。 |
| [#29166](https://github.com/google-gemini/gemini-cli/pull/29166) | 扩展更新前备份目录以支持回滚 | Extensions | `updateExtension` 在失败时实际恢复的是空目录；本 PR 让 rollback 真正生效。 |
| [#29214](https://github.com/google-gemini/gemini-cli/pull/29214) | 沙箱文件系统边界强化 + 运行时状态隔离 | Sandbox | 把沙箱运行时状态与宿主机配置目录解耦，配置文件改用只读 sanitized 挂载，解析符号链接。 |
| [#29239](https://github.com/google-gemini/gemini-cli/pull/29239) | 修复窄宽度终端下 ghost text 换行死循环 | CLI UX | 修复 #19985，在 `getGhostTextLines` 中避免 word 宽度 > inputWidth 时无限循环。 |
| [#29237](https://github.com/google-gemini/gemini-cli/pull/29237) | `list_background_processes` 不再输出 `(Exit Code: null)` | Agent | 对被信号杀死的进程（`exitCode: null`）使用 `typeof` 守卫，避免误显示。 |
| [#29008](https://github.com/google-gemini/gemini-cli/pull/29008) | `getSafeGitEnv` 中剥离影响执行的 `GIT_*` 变量 | **安全** | 修复 #29003：`.env` 中的 `GIT_*` 变量可绕过原剥离逻辑影响 git 操作安全。 |
| [#29005](https://github.com/google-gemini/gemini-cli/pull/29005) | 规范化 `DEBUG` 环境变量真值判断 | Sandbox | 修复 `DEBUG="false"`/`"0"` 仍启用 port publishing、`--inspect-brk` 等调试特性的问题。 |
| [#28995](https://github.com/google-gemini/gemini-cli/pull/28995) | 修复 `formatTruncatedToolOutput` 负 `maxChars` 导致输出膨胀 | Core | 修复 #28620，防止字符串切片负索引把截断输出放大到两倍。 |
| [#29022](https://github.com/google-gemini/gemini-cli/pull/29022) | 在文本历史中保留 `ask_user` 问题 | Core | 新增 `ui.keepAskUserQuestionsInHistory` 设置，会话恢复后仍可回顾问题与选项。 |
| [#29017](https://github.com/google-gemini/gemini-cli/pull/29017) | 修复符号链接/连接目录下的 skills 去重 | Extensions | 修复 #28944：Windows junction 或 POSIX symlink 让 `.gemini → .agents` 时 skills 被重复发现。 |

---

## 📈 功能需求趋势

从今日活跃的 Issues 提炼，社区最关注的功能方向集中在以下几类：

1. **🧠 Agent 智能化与可观测性**
   - Subagent 错误终止原因区分（#22323、#21763）
   - 子智能体调用主动性（#21968）
   - `/chat share` 暴露 subagent 轨迹（#22598）
   - Agent 自描述（CLI flags、hotkeys）能力（#21432）

2. **🛡️ 安全与隐私**
   - Auto Memory 内容脱敏与日志控制（#26525、#26516）
   - 沙箱文件系统隔离（#29214、#19873）
   - 模型破坏性行为约束（#22672）
   - 鉴权错误精确匹配（#29242）

3. **🌐 浏览器与平台兼容性**
   - Wayland 支持（#21983）
   - 浏览器会话接管与锁恢复（#22232）
   - 扩展更新原子性（#29166）

4. **⚡ 性能与终端体验**
   - 终端 resize 闪烁与吞吐（#21924）
   - VirtualizedList 优化（#27636）
   - 窄宽度 ghost text 渲染（#29239）

5. **🔍 AST 感知代码理解**
   - AST 工具评估（#22745、#22746）作为 `codebase_investigator` 升级路径

---

## 💬 开发者关注点（高频痛点）

| 痛点 | 关联 Issue |
|------|-----------|
| **Agent 流程不可控** — 子智能体状态上报与实际行为不符，导致任务链路 silent fail | #22323、#21409、#25166 |
| **Auto Memory 鲁棒性不足** — 重复扫描、脱敏漏洞、补丁静默丢弃 | #26525、#26522、#26523、#26516 |
| **平台兼容性碎片化** — Wayland、symlink/junction、shell prompt 卡死等 | #21983、#20079、#22465、#22466 |
| **配置与持久化缺失** — `settings.json` 被忽略、`/compress` 不持久化 | #22267、#21335 |
| **工具数量上限与误用** — >128 tools 触发 400、tmp 脚本散落 | #24246、#23571 |
| **`/bug` 报告缺失子智能体上下文** — 难以定位分布式 agent 失败 | #21763 |

---

> 📅 本日报基于 2026-09-08 GitHub Issues/PRs/Releases 公开数据整理。  
> 🤖 由 Gemini CLI 社区动态分析生成。

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

<think>The user wants me to generate a Chinese daily report about GitHub Copilot CLI community activity for 2026-09-08. Let me analyze the data carefully.

Looking at the data:
- No releases in past 24 hours
- 29 issues updated in past 24 hours (mix of open and closed)
- 4 PRs updated in past 24 hours

Let me categorize and pick the most important items:

**Important Issues to highlight (10):**

1. #4742 - Desktop app 1.1.15: cannot create a second Local session (high impact, 7 comments, 1 👍)
2. #4756 - Windows app requires archiving every idle project session (10 👍, very high community reaction)
3. #4438 - disable-model-invocation skill unreachable (6 👍, important for agent features)
4. #4757 - --yolo/--allow-all blocked by fail-closed bypass (3 comments)
5. #4753 - v1.0.83: session resume cancels in-flight stdio MCP connections (regression)
6. #4017 - MCP OAuth failures with non-first-party HTTP servers (3 👍)
7. #1999 - German keyboard @ key bug (CLOSED, 2 👍, but long-standing)
8. #4505 - Resumed session retains stale connection item IDs (3 👍)
9. #4755 - Session wedges permanently when queued-lane message lands (critical bug)
10. #4759 - Copilot CLI should send MCP cancellation requests

**Important PRs (4 available, need to pick 10 but only 4 exist):**

1. #4762 - install: report unsupported operating systems (CLOSED)
2. #4761 - install: report unsupported operating systems (OPEN - duplicate)
3. #4748 - Add joke cli
4. #4746 - Add experimental next-action extension prototype

Only 4 PRs exist, so I'll list all 4.

**Functional demand trends from Issues:**
- Session management improvements
- MCP integration (OAuth, cancellation, header support)
- Multi-repo / workspace support
- Windows platform issues
- Authentication/security policies
- Performance issues
- Skill/agent framework improvements
- Terminal rendering / UI improvements

**Developer pain points:**
- v1.0.83 regression bugs (MCP connection cancellation, session resume issues)
- Windows-specific issues
- MCP OAuth authentication failures
- Session management edge cases
- Performance issues (TUI CPU hog)
- Multi-repo workspace problems

Let me write a clean, professional Chinese daily report.</think>

# GitHub Copilot CLI 社区动态日报

**📅 2026-09-08**

---

## 1. 今日速览

今日 Copilot CLI 社区异常活跃，**24 小时内有 29 个 Issue 更新、4 个 PR 更新**，无新版本发布。讨论热点集中在 **v1.0.83 引入的回归问题**（MCP 连接超时、会话恢复失败）、**Windows 桌面端的会话管理缺陷**（#4756 获 10 个 👍），以及 **MCP OAuth 认证链路的多处漏洞**。两条针对 `install.sh` 在非主流 OS 上误判 Windows 的修复 PR 同日出现，凸显 FreeBSD 等平台用户的安装痛点。

---

## 2. 版本发布

*过去 24 小时内无新版本发布。*

---

## 3. 社区热点 Issues

### 🔴 高严重度 / 高关注

| # | Issue | 状态 | 👍 | 要点 |
|---|---|---|---|---|
| [4756](https://github.com/github/copilot-cli/issues/4756) | **Windows 桌面端每次启动新会话前必须归档所有空闲会话** | OPEN | **10** | 1.1.15 回归，Windows 平台私有仓库用户无法正常开启新会话，社区反应强烈（10 👍 / 2 评论）。 |
| [4438](https://github.com/github/copilot-cli/issues/4438) | `disable-model-invocation: true` 让 Skill 完全不可达，而非"仅禁用自动调用" | OPEN | 6 | 项目级 Skill 的 frontmatter 语义与运行时行为不符，`skill()` 工具直接报 not found。 |
| [4742](https://github.com/github/copilot-cli/issues/4742) | 桌面端 1.1.15：同一项目内无法创建第二个 Local 会话 | OPEN | 1 | 提示 "This project already has an active Local workspace"，需要先归档活跃会话才能继续工作。 |
| [4017](https://github.com/github/copilot-cli/issues/4017) | 非官方 MCP HTTP 服务器的 OAuth 流程"无声失败" | OPEN | 3 | 关掉再开启服务器不弹浏览器、无错误、无法连接，影响 Atlassian、incident.io 等三方集成。 |
| [4505](https://github.com/github/copilot-cli/issues/4505) | 恢复会话后连接 Item ID 陈旧，提示 `input item ID does not belong to this connection` | OPEN | 3 | 重试无效，`/fork` 也不恢复，CAPI 400 错误。 |

### 🟡 中等关注 / 重要回归

| # | Issue | 状态 | 👍 | 要点 |
|---|---|---|---|---|
| [4753](https://github.com/github/copilot-cli/issues/4753) | **v1.0.83 回归**：会话恢复时取消进行中的 stdio MCP 连接（1s vs 旧的 16s 超时） | OPEN | 1 | 初始化的 MCP server 静默不可用，影响整个会话。 |
| [4757](https://github.com/github/copilot-cli/issues/4757) | 无托管策略的账号仍被 fail-closed 阻断 `--yolo`/`--allow-all`，整会话不解锁 | OPEN | 0 | 策略解析为"缺失"却仍应用限制，配置文件 fail-closed 姿势判定可疑。 |
| [4755](https://github.com/github/copilot-cli/issues/4755) | 队列消息落在 turn 末尾时会话永久卡死，idle 与 queue 均不流转 | OPEN | 0 | 进程不崩溃但只能 kill 恢复，影响长会话稳定性。 |
| [4759](https://github.com/github/copilot-cli/issues/4759) | CLI 在等待 MCP URL elicitation 时不发送取消请求 | OPEN | 0 | 用户取消工具调用后浏览器流程继续，违背 MCP 2026-07-28 规范。 |
| [1999](https://github.com/github/copilot-cli/issues/1999) | 德语键盘 Alt-Gr + Q 输入 `@` 无反应（同时影响 `#`） | **CLOSED** ✅ | 2 | 自 1.02 起存在的老问题终于关闭，但具体修复版本未在 Issue 中明示。 |

---

## 4. 重要 PR 进展

> 今日仅有 4 个 PR 更新，已全部列出。

| # | PR | 状态 | 内容 |
|---|---|---|---|
| [#4762](https://github.com/github/copilot-cli/pull/4762) | install: 报告不支持的操作系统 | OPEN | 修复 `install.sh` 在 macOS/Linux 之外的平台（包括 FreeBSD）误判为 Windows 的 bug。建议显式报告"unsupported OS"。 |
| [#4761](https://github.com/github/copilot-cli/pull/4761) | install: 报告不支持的操作系统 | OPEN | 与 #4762 几乎同质，建议在 OS 识别逻辑中增加明确的 else 分支。该 PR 与 #4762 几乎同时由不同贡献者提交。 |
| [#4746](https://github.com/github/copilot-cli/pull/4746) | 实验性 next-action 扩展原型 | OPEN | 在 `examples/next-best-action/` 下新增 opt-in SDK 扩展示例，复用 `joinSession()` + 无工具 UI 推理下一步建议，不影响已安装 CLI 行为。 |
| [#4748](https://github.com/github/copilot-cli/pull/4748) | 添加 joke CLI | OPEN | 由社区贡献者提交的娱乐性 CLI，无明确功能描述。 |

---

## 5. 功能需求趋势

从近 24 小时活跃的 Issue 中提炼出的高频方向：

1. **🪟 Windows 平台稳定性** — #4756、#4740（语音服务端 pid 文件死锁）、#4702（路径分隔符重复加载）显示 Windows 用户在 1.1.15 后集中遭遇会话管理问题。
2. **🔌 MCP 生态完善** — OAuth 认证链路（#4017、#4681）、取消协议（#4759）、连接超时（#4753）、Azure MCP learn=true 180s 超时（#4749）成为本月 MCP 主题。
3. **📁 多仓库 Workspace** — Collection 项目默认分支不一致导致 worktree 永远无法关联（#4709）、按 repo/scope 过滤会话列表（#4693）。
4. **🧠 Skill / Agent 框架语义** — `disable-model-invocation` 实际行为不符合文档（#4438）、`--add-dir` 自定义代理在 `--agent` 中识别失败（#4752）。
5. **🎨 TUI 渲染与性能** — 可折叠分段 + 颜色类型指示（#1787，回归活跃）、TUI 空载 CPU 飙高 6–7%（#4750）。
6. **⚙️ 安装与跨平台分发** — FreeBSD/Windows 误判（#3710 关闭 + #4761/#4762 PR）。

---

## 6. 开发者关注点

**🔁 回归焦虑**：v1.0.83 似乎触发了多项需要尽快评估的回归——MCP 连接 1s 超时（#4753）、背景子代理事件延迟 14 分钟（#4760）、`gpt-4o-mini` 不支持 `reasoning_effort` 的 `/refine` 故障（#4747）。开发者普遍要求 **回归测试覆盖会话恢复、MCP 与认证路径**。

**🪟 Windows UX 痛点**：与 macOS/Linux 相比，Windows 用户在 1.1.15 后集中遭遇"必须先归档所有空闲会话"才能继续的强制流程（#4756 获 10 👍），直接影响开发节奏。

**🔐 认证与权限策略**：fail-closed 策略被错误应用于"无策略"账号（#4757），且 `--yolo`/`--allow-all` 在整会话被锁死，引发对企业/个人账户权限模型一致性的担忧。

**🧩 多仓库场景仍脆弱**：集合项目（多 git 仓库同目录）在默认分支命名差异下完全不可用（#4709），这是 agentic workspace 的关键缺失。

**🛠 MCP 集成趋于"协议级"问题**：开发者开始对照 [MCP 2026-07-28 规范](https://modelcontextprotocol.io/specification/2026-07-28/basic/patterns/cancellation) 提出 Issue（#4759），说明 MCP 已从"实验性扩展"走向生产依赖，规范合规性成为新基准线。

---

*📊 数据来源：[github.com/github/copilot-cli](https://github.com/github/copilot-cli) · 报告生成于 2026-09-08*

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

<think>The user wants me to generate a daily report for Kimi Code CLI community dynamics for 2026-09-08. Let me analyze the data provided:

**Releases (past 24 hours):** None

**Issues (past 24 hours updated, 2 total):**
1. #2584 - Bug about Thai/IME characters being duplicated when typing on Windows
2. #2637 - Bug about Agent stuck in repeated Read-tool loop, unable to emit Edit calls

**Pull Requests (past 24 hours updated, 1 total):**
1. #2616 - Add Build Remote Agent phone pairing (gbr/1)

Now I need to generate a Chinese daily report with these sections:
1. 今日速览 - 2-3 sentences summarizing the most important news
2. 版本发布 - skip if no new versions
3. 社区热点 Issues - 10 most noteworthy issues (but only 2 exist, so I'll discuss these 2)
4. 重要 PR 进展 - 10 important PRs (but only 1 exists, so I'll discuss this 1)
6. 功能需求趋势 - extract feature direction trends from issues
6. 开发者关注点 - summarize developer pain points

Since there's only 2 issues and 1 PR, I need to work with what I have. I should be honest about the limited data but still provide useful analysis. Let me write this report professionally and concisely.

Let me structure the report:

# 2026-09-08 Kimi Code CLI 社区动态日报

## 今日速览
今天社区动态较为平静，无新版本发布。值得关注的是两个 Bug 报告：一个关于 Windows 平台上 IME 输入法（如泰语）字符重复输入的问题，以及一个 Agent 陷入 Read 工具循环无法发出 Edit 调用的严重问题。后者可能影响实际使用体验，建议优先关注。

## 版本发布
今日无新版本发布。

## 社区热点 Issues
1. #2584 - Windows 平台 IME 输入法字符重复 Bug
2. #2637 - Agent 陷入 Read 工具循环无法发出 Edit 调用

## 重要 PR 进展
1. #2616 - 添加 Build Remote Agent 手机配对功能 (gbr/1)

## 功能需求趋势
- 跨平台兼容性（特别是 Windows IME 支持）
- Agent 工具调用稳定性
- 移动端/远程配对能力

## 开发者关注点
- Windows 环境下的输入法兼容性
- Agent 在复杂任务中的执行稳定性
- 远程协作/配对场景的需求

Let me refine and write the full report now.</think>

# Kimi Code CLI 社区动态日报

**日期：2026-09-08**  
**数据周期：过去 24 小时**  
**项目：MoonshotAI/kimi-cli**

---

## 📌 今日速览

今日社区动态相对平静，**无新版本发布**。值得关注的有两项 Bug 报告：Windows 平台下 IME 输入法（如泰语等亚洲语言）输入字符重复问题（#2584），以及 Agent 陷入 Read 工具循环无法触发 Edit 调用的功能性故障（#2637）。此外，一项关于"Build Remote Agent"手机配对协议的 PR（#2616）正在审核中，暗示项目可能正在探索移动端远程控制场景。

---

## 🚀 版本发布

今日**无新版本发布**。当前最新正式版本为 v0.41.0（参考 Issue #2637 中的环境信息），距上一个有讨论的版本 v0.31.1 已迭代多个版本。

---

## 🔥 社区热点 Issues

> 备注：过去 24 小时内仅有 2 条 Issue 更新，以下为完整展示。

### 1. #2584 — Windows 平台 IME 输入法字符重复 Bug
- **状态**：OPEN | 👍 1 | 💬 1
- **作者**：@mgprona | **环境**：v0.31.1 / Windows 11
- **重要性**：⭐⭐⭐⭐  
  Windows 在全球桌面开发环境中占据主导份额，**输入法兼容性是中文、日文、泰文等 CJK 及东南亚用户的基本可用性门槛**。若终端层字符事件处理与 IME 协议交互存在缺陷，将直接阻塞大量国际用户。
- **社区反应**：已获 1 个 👍，开发者初步回应表明问题可复现。
- 🔗 https://github.com/MoonshotAI/kimi-cli/issues/2584

### 2. #2637 — Agent 陷入 Read 工具循环，无法发出 Edit 调用
- **状态**：OPEN | 👍 0 | 💬 0（新）
- **作者**：@devalirzayev | **环境**：v0.41.0 / 官方 Harness
- **重要性**：⭐⭐⭐⭐⭐  
  这是一个**功能性阻塞级 Bug**：Agent 在执行代码编辑任务时陷入重复 Read 操作的死循环，无法正常推进到 Edit 步骤。在当前 v0.41.0 最新版本上复现，说明问题尚未在版本迭代中自动修复。**直接影响 Kimi Code CLI 作为"代码编辑 Agent"的核心使用价值**。
- **社区反应**：刚发布，尚无互动，但属于高优先级信号。
- 🔗 https://github.com/MoonshotAI/kimi-cli/issues/2637

---

## 🔧 重要 PR 进展

> 备注：过去 24 小时内仅有 1 条 PR 更新。

### 1. #2616 — 添加 Build Remote Agent 手机配对（gbr/1 协议）
- **状态**：OPEN | 👍 0
- **作者**：@LinespottingPrivate | **创建**：2026-08-23 | **更新**：2026-09-07
- **内容概述**：
  - 引入第三方 **Build Remote Agent** 作为桌面 Agent 的配对设备
  - 基于 MIT 许可的 [`gbr-agent`](https://github.com/LinespottingOrg/GrokBuildRemote-Agents) 实现
  - 付费版 iOS/Android 应用可通过 **gbr/1 协议** 以"观察者 + 注入"模式与本地会话交互
  - 手机角色定义为 *spectator + veto*（观察者 + 否决权），**非指挥者**
- **关注点**：该 PR 来自外部贡献者，使用了与项目现有架构不直接相关的第三方协议名（"Grok"），**合并审核需关注协议兼容性与安全边界**。
- 🔗 https://github.com/MoonshotAI/kimi-cli/pull/2616

---

## 📈 功能需求趋势

从今日更新的 Issue 提炼，社区关注的方向呈现以下分布：

| 趋势方向 | 体现 Issue | 占比观察 |
|---|---|---|
| **跨平台兼容性**（Windows/IME） | #2584 | 高频出现于桌面环境用户 |
| **Agent 执行稳定性**（工具调用循环） | #2637 | 影响核心使用场景 |
| **移动端 / 远程配对** | #2616（PR） | 暗示生态向多端延伸 |
| **多语言输入支持** | #2584（衍生） | 与 Windows 平台问题耦合 |

**核心趋势**：社区需求正从"单一桌面 CLI"向**多平台、多端协作**演进，但底层稳定性问题仍是首要矛盾。

---

## 💡 开发者关注点

综合今日 Issue 与 PR，开发者反馈呈现出三个高频痛点：

1. **🪟 Windows 终端层事件处理缺陷**  
   IME 输入法场景下的字符事件去重/缓冲逻辑需要重构或参考成熟的终端库（如 `prompt_toolkit`、`ink`）的事件模型。

2. **🤖 Agent 工具调度循环缺陷**  
   当 Agent 反复触发 Read 而不切换到 Edit 时，可能原因包括：工具调用格式不匹配、上下文截断、状态机错误。**建议优先排查 v0.31→v0.41 之间的相关 commit**。

3. **🔌 第三方协议集成的安全与品牌一致性**  
   PR #2616 引入了包含 "Grok" 字样的外部协议，开发者社区可能会对品牌一致性和协议安全性提出质疑。

---

## 📊 数据摘要

| 指标 | 数值 |
|---|---|
| 新发布版本 | 0 |
| Issue 更新 | 2 |
| PR 更新 | 1 |
| 最高互动 Issue | #2584（👍 1 / 💬 1） |
| 平均 Issue 互动 | 0.5 |

---

*报告生成时间：2026-09-08 | 数据源：GitHub REST API*

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

<think>Let me analyze the GitHub data for OpenCode community daily report on 2026-09-08.

Key observations:
- No new releases in past 24 hours
- 50 issues updated, top 30 shown
- 50 PRs updated, top 20 shown
- Most issues are CLOSED, only a few OPEN
- Activity seems high with various bug fixes and features

Let me identify the most important items:

Top Issues by comments:
1. #4704 - /undo and /timeline undo does not revert file edits (23 comments, 22 likes) - HIGH importance, long-standing
2. #24713 - Copy shows copied popup but clipboard remains unchanged on Linux terminal (12 comments)
3. #27689 - Support drag-and-drop for Microsoft Office files (8 comments, OPEN)
4. #12938 - Subagents can't use 'todowrite' tool (8 comments)
5. #18021 - Evaluate upstreaming native A2A support (7 comments)
6. #30788 - Allow external symlink targets (6 comments)
7. #19083 - 桌面版一直思考中 (5 comments)
8. #36162 - Support processId: null for language servers in containers (5 comments)
9. #35859 - Option to disable built-in CopilotAuthPlugin (5 comments)
10. #35365 - Self-signed TLS certificate no longer working (4 comments)

Top PRs:
1. #47881 - fix: support local Ollama reasoning
2. #47880 - fix: preserve reasoning across empty tool-call deltas
3. #47753 - feat: add SSH server connections
4. #47874 - feat: add Alibaba inference provider
5. #47866 - feat: add Z.AI language models
6. #46344 - feat: collapsible reasoning cards
7. #45472 - fix: remove websearch provider whitelist
8. #47799 - feat: configure initial servers and add QR pairing
9. #45002 - feat: repair malformed tool arguments
10. #47869 - fix: prioritize execution in default prompt

Feature trends from issues:
- A2A (Agent-to-Agent) protocol support
- New provider support (Alibaba, Z.AI, LongCat, Snowflake Cortex, Keycloak)
- Desktop/SSH features
- Tool/agent improvements
- LSP improvements
- Reasoning/Thinking model support
- Multi-language support (Indonesian README)

Developer pain points:
- /undo command not properly reverting file edits
- Clipboard issues on Linux
- Subagent tool access issues
- TLS certificate issues
- Desktop app stuck/crash issues
- Windows-specific bugs (Bun path issue)
- TUI variant cycling skips variants
- Console login diagnostics missing

Let me write the report in Chinese.</think>

# OpenCode 社区动态日报
**日期：2026-09-08**

---

## 📌 今日速览

今日 OpenCode 仓库无新版本发布，但社区维护活跃，共有 50 个 Issue 与 50 个 PR 更新。**核心亮点**：长期未修复的 `/undo` 命令文件回滚 Bug（#4704，22 个点赞）持续占据讨论榜首；本地推理（Ollama）、阿里云 Alibaba、Z.AI 等多家新 Provider 集成 PR 集中涌现；桌面端 SSH 服务器连接功能（#47753）与 QR 配对机制（#47799）即将上线。

---

## 🚀 版本发布

**今日无新版本发布。**

---

## 🔥 社区热点 Issues

| # | Issue | 评论 | 点赞 | 重要性说明 |
|---|-------|------|------|-----------|
| 1 | [#4704](https://github.com/anomalyco/opencode/issues/4704) `/undo` 和 `/timeline` 无法回退文件编辑 | 23 | 22 | 创建于 2025-11，长期未根治的高赞 Bug。即使在 Git 项目中也无法回退文件修改，严重影响开发者信任。 |
| 2 | [#24713](https://github.com/anomalyco/opencode/issues/24713) Linux 终端复制仅显示弹窗但剪贴板未生效 | 12 | 8 | 跨终端（Ghostty/Terminal.app/iTerm2）均受影响，UX 体验受损。 |
| 3 | [#27689](https://github.com/anomalyco/opencode/issues/27689) 支持拖拽 Microsoft Office 文件（.docx/.xlsx） | 8 | 0 | 少数仍 OPEN 的功能请求，扩展办公文档工作流。 |
| 4 | [#12938](https://github.com/anomalyco/opencode/issues/12938) 子代理无法使用 `todowrite` 工具 | 8 | 5 | 多模型（GLM-4.7-flash/Qwen3）均复现，影响多代理协作链。 |
| 5 | [#18021](https://github.com/anomalyco/opencode/issues/18021) 评估上游合并原生 A2A 协议支持 | 7 | 4 | 社区已有可工作原型，呼应行业 Agent-to-Agent 趋势。 |
| 6 | [#30788](https://github.com/anomalyco/opencode/issues/30788) 通过 `external_directory` 同意机制允许外部符号链接 | 6 | 2 | 解决符号链接在文件选择器中不可见的两类相关问题。 |
| 7 | [#19083](https://github.com/anomalyco/opencode/issues/19083) 桌面版一直"思考中"，但 TUI 可用 | 5 | 0 | 桌面版 vs TUI 行为不一致，定位 Web 端会话僵死问题。 |
| 8 | [#36162](https://github.com/anomalyco/opencode/issues/36162) 容器内 LSP 支持 `processId: null` | 5 | 0 | 让 Docker 等容器化开发环境中的 LSP 可用。 |
| 9 | [#35859](https://github.com/anomalyco/opencode/issues/35859) 禁用内置 `CopilotAuthPlugin` 关闭 GitHub OAuth 弹窗 | 5 | 0 | Windows 用户每次启动都被 OAuth 弹窗打扰的痛点。 |
| 10 | [#35365](https://github.com/anomalyco/opencode/issues/35365) 1.17.12+ 自签名 TLS 证书失效 | 4 | 0 | 私有 LLM 服务器用户从 1.17.11 升级后被破坏，影响本地化部署。 |

---

## 🛠 重要 PR 进展

| # | PR | 类型 | 内容概要 |
|---|----|------|---------|
| 1 | [#47881](https://github.com/anomalyco/opencode/pull/47881) 支持本地 Ollama 推理 | Bug Fix | 修复 Ollama 思考模型通过 OpenAI 兼容端点选择 reasoning effort 的问题（关闭 #47359）。 |
| 2 | [#47880](https://github.com/anomalyco/opencode/pull/47880) 跨空 tool-call delta 保留 reasoning | Bug Fix | 回移植 vercel/ai#20253 至 @ai-sdk 固定版本，解决空 delta 丢失推理上下文的 Bug（关闭 #47875）。 |
| 3 | [#47753](https://github.com/anomalyco/opencode/pull/47753) 桌面端 SSH 服务器连接 | New Feature | 引入保存主机、自动恢复、本地 HTTP 隧道至远程 OpenCode 服务，含 askpass 鉴权、连接状态徽章。 |
| 4 | [#47874](https://github.com/anomalyco/opencode/pull/47874) 新增 Alibaba 推理 Provider | New Feature | 支持阿里云 Model Studio 标准推理，含 Chat/Messages/Responses 多入口与区域化主机。 |
| 5 | [#47866](https://github.com/anomalyco/opencode/pull/47866) 新增 Z.AI 语言模型 | New Feature | 在 ZAI facade 增加标准 Chat 模型，并新增 `ZAICodingPlan` 独立 facade。 |
| 6 | [#46344](https://github.com/anomalyco/opencode/pull/46344) 推理卡片可折叠 | New Feature | 渲染 reasoning 为可折叠卡片（关闭 #8789/#14340/#37115/#21548）。 |
| 7 | [#45472](https://github.com/anomalyco/opencode/pull/45472) 移除 websearch Provider 白名单 | Bug Fix | 让所有 Provider 默认启用 websearch（关闭 #44307）。 |
| 8 | [#47799](https://github.com/anomalyco/opencode/pull/47799) 初始服务器配置 + QR 配对 | New Feature | 用 `VITE_OPENCODE_SERVER_MODE` 取代 hostname 启发式，浏览器可扫码连接 server。 |
| 9 | [#45002](https://github.com/anomalyco/opencode/pull/45002) 工具参数预校验修复 | New Feature | 内部插件在 Zod/Standard/JSON Schema 校验前修复常见畸形参数（标注 Hold 等待审计）。 |
| 10 | [#47869](https://github.com/anomalyco/opencode/pull/47869) 默认 Prompt 强化执行优先级 | Bug Fix | 在仍有未完成 todo 时让模型优先执行而非空想（关闭 #47019）。 |

---

##  功能需求趋势

从近 24 小时活跃 Issue 中提炼社区重点关注方向：

1. **多 Provider / 多模型生态扩张** — Alibaba、Z.AI、LongCat、Snowflake Cortex、Keycloak 等 Provider 的接入与认证成为热点，OpenCode 正快速成为模型中立客户端。
2. **Agent-to-Agent（A2A）协议** — #18021 提议将社区原型上游合并，反映多代理协作标准化诉求。
3. **桌面端能力补齐** — SSH 远程连接、QR 配对、项目/工作树导航（#35525、#36106）显示桌面 App 从"本地 GUI"向"远程客户端"演进。
4. **思考/推理（Reasoning）体验增强** — Ollama reasoning 支持、可折叠推理卡片、空 delta 保留推理上下文，呼应主流 LLM 的 reasoning_content 字段。
5. **LSP 与开发者体验** — 容器内 LSP（PID null）、Bedrock 凭证解析、TLS 自签名证书兼容，体现企业级部署需求。
6. **国际化与文档** — 印尼语 README 请求（#36101）等多语言资源持续贡献。
7. **撤销/回退可靠性** — `/undo`/`/timeline` 与 rollback 相关 Bug 始终占据讨论头部，是用户基本信任门槛。

---

## ‍💻 开发者关注点

**高频痛点：**
- **撤销机制失灵**：#4704、#36080（rollback 误把未编辑文件列入变更）让开发者在 AI 失控时难以"安全回退"。
- **跨平台一致性**：Linux 剪贴板（#24713）、Windows `opencode.exe` Bun 路径硬编码（#36124）、TUI 在大目录时空白（#27071）暴露出桌面/Web/TUI 三端质量差异。
- **桌面 App 稳定性**：#34389（窗口闪退）、#35469（Linux 卡死 100% CPU）、#19083（持续思考）仍是用户首要抱怨。
- **OAuth/插件侵入**：#35859 反映 `CopilotAuthPlugin` 强制弹窗影响企业代理环境下的开箱体验。

**高频需求：**
- 子代理工具权限可控（#12938）
- 自定义模型 ID 自动拉取（#35855）
- 推理折叠/隐藏（#8789 等多个 issue）
- "无限 agent 模式"自动续跑（#47019）
- 模型别名前端展示而非 API ID（#36164）

**社区氛围：** 多数旧 Issue 已 CLOSED 表明维护者响应积极；新 PR 类型以 Bug Fix 与 New Feature 并重，且开始出现 "Hold for audit"（如 #45002）等质量门控流程，社区进入工程化成熟阶段。

---

*报告基于 github.com/anomalyco/opencode 公开数据生成。*

</details>

<details>
<summary><strong>jcode</strong> — <a href="https://github.com/1jehuang/jcode">1jehuang/jcode</a></summary>

<think>The user wants me to generate a Chinese daily report for the jcode community based on GitHub data. Let me analyze the data carefully.

Key observations:
1. **Release**: v0.84.0 was released - focuses on clearer remote login onboarding for SSH
2. **Issues**: 25 issues updated in past 24 hours - many are TUI enhancements, bug fixes, CI issues
3. **PRs**: Only 1 PR updated - #1193 by the maintainer @1jehuang fixing CI issues from Sept 7 triage

Let me identify the most important issues (I'll pick 10):
- #1191 - CI broken since Aug 20 (high priority, blocking)
- #1192 - Windows server RAM runaway (severe bug)
- #1184 - Ghostty feedback loop (66% CPU burn)
- #1183 - Retry-After capped at 60s (priority: high)
- #1189 - bg output fails on timeout-promoted commands
- #1188 - Sponsors config undone on save
- #1187 - Desktop notification zombies
- #1182 - OpenCode Zen model fails with 500 (👍2, popular)
- #1185 - pre_request transform hook enhancement
- #679 - Configurable memory sidecar backend
- #677 - Auto-retry backoff hardcoded

For PRs, only 1 exists in past 24h - #1193. I need to pick 10 but only have 1. Let me note this and pick from recent important PRs that may have been mentioned or reference related ones in issues (#935 was mentioned, #751, etc.)

Wait, the user says "过去24小时内更新" for PRs, which is only #1193. I should be honest about this limitation but still try to find 10 important PRs by looking at what's referenced in issues. Actually, let me just present what's available - I should be honest that only 1 PR was updated in past 24h, but I can mention other important PRs referenced in issues (#935, #751) as "related merged PRs" or expand the time window.

Actually re-reading the prompt: "挑选 10 个重要的 PR" - I'll work with what I have. Let me present #1193 as the main one and mention other referenced PRs from issue context (like #935 which was a fix for the observer-hook issue). But strictly there is only 1 PR in past 24h. I'll be transparent about this.

Let me also identify trends:
- TUI UX improvements (themes, MCP commands, model picker keybindings, @file completion)
- Provider/model integration (Cursor ACP, OpenCode Zen, custom providers)
- Retry/backoff/rate-limit handling
- CI/Build infrastructure issues
- Memory/performance issues (RAM runaway, Ghostty CPU burn)
- Hook/extension system (pre_request transform)

Let me write the report now.</think>

# jcode 社区动态日报 · 2026-09-08

## 📌 今日速览

jcode **v0.84.0** 发布，SSH 远程登录流程迎来更清晰的引导体验。与此同时，社区一天内涌入大量 **CI 故障、Windows 内存爆炸、Ghostty 终端 CPU 烧毁** 等高优先级 Bug 报告，维护者 @1jehuang 已紧急开启 PR #1193 集中修复昨日分流出的 CI 问题。整体来看，TUI 体验增强、多 Provider 兼容、Retry/限流策略正在成为当前最热的三大社区方向。

---

## 🚀 版本发布

### [v0.84.0](https://github.com/1jehuang/jcode/releases/tag/v0.84.0) — Clearer remote login onboarding

**核心改动**：连接 SSH 主机时，先以**纯 yes/no 提问**确认是否继续，再决定是否导入本地 OpenAI / Claude 登录凭证，避免用户被一次性提示淹没。

**改进要点**：
- 远程登录选择器仅列出**该主机实际支持的 Provider**
- 本地导入项作为显式分类列出，不再混入默认 Provider 列表

> 🔎 这次改动看起来"小"，但实际是降低 SSH 误连、误传凭证风险的关键 UX 修补，强烈建议远程使用 jcode 的同学立即升级。

---

## 🔥 社区热点 Issues（Top 10）

| # | Issue | 重要性 | 社区反应 |
|---|-------|--------|---------|
| 1 | [#1191](https://github.com/1jehuang/jcode/issues/1191) **CI 全线红盘：Aug 20 起所有 workflow 报 duplicate env** | 🔴 阻塞级：master 与所有 feature 分支 workflow 无法运行 | 4 条评论，多名贡献者(@ra-co88)围观 |
| 2 | [#1192](https://github.com/1jehuang/jcode/issues/1192) **Windows server 进程内存爆炸至 8–12 GB** | 🔴 严重性能/稳定性 Bug：交互式 session 启动后 RSS 失控 | 新建即标记 reproducible，0 评论待响应 |
| 3 | [#1184](https://github.com/1jehuang/jcode/issues/1184) **Ghostty 终端空闲态 CPU 66% 烧毁（42k write/s）** | 🔴 macOS + Ghostty 用户必中：mode 1004 focus-gained 反馈环 | 标记 reproducible + clear，自动可修 |
| 4 | [#1183](https://github.com/1jehuang/jcode/issues/1183) **`Retry-After` 被截断到 60s，OAuth 限流硬失败** | 🟠 高优：直接影响订阅账号可用性，3 次重试 ~2 分钟就放弃 | priority: high |
| 5 | [#1182](https://github.com/1jehuang/jcode/issues/1182) **`opencode:muse-spark-1.3-contributor-free` 500 错误** | 🟠 Provider 兼容：jcode 强制 `/chat/completions` 应走 `/responses` | 👍2，本批次赞数最高 |
| 6 | [#1189](https://github.com/1jehuang/jcode/issues/1189) **`bg output` 在 timeout-promoted 命令运行中失败** | 🟡 工具行为不一致：artifact 只在完成时创建 | 已进入主分支追踪 |
| 7 | [#1188](https://github.com/1jehuang/jcode/issues/1188) **`[sponsors] enabled = false` 一次保存就被覆盖** | 🟡 用户配置无法持久化 | 全新 reproducible |
| 8 | [#1187](https://github.com/1jehuang/jcode/issues/1187) **`#935` 修复后 desktop 通知子进程仍变僵尸** | 🟡 子进程回收遗漏 | 标记 clear，等待修复 |
| 9 | [#679](https://github.com/1jehuang/jcode/issues/679) **Memory sidecar 后端硬编码 OpenAI/Claude** | 🟡 长期 enhancement：12 评论，用户期待 auto/provider 可切换 | 👍1，社区持续投票 |
| 10 | [#677](https://github.com/1jehuang/jcode/issues/677) **Auto-retry 退避硬编码，共享网关 429 过早停** | 🟡 与 #1183 互补：retry 策略需可配置 | 与 Retry-After 议题形成关联话题 |

---

## 🛠 重要 PR 进展

> ⚠️ 说明：过去 24 小时内仅有 **1 个 PR 更新**（[PR #1193](https://github.com/1jehuang/jcode/pull/1193)）。以下同时列出该 PR 及 issues 中高频被引用的历史 PR，帮助读者了解完整修复链路。

1. **[#1193](https://github.com/1jehuang/jcode/pull/1193) — Sept 7 triage 的安全修复批次**（@1jehuang）  
   Draft 状态：合并 CI/iOS TestFlight/Windows Smoke 中的重复顶层 `env`，9 个 workflow 已通过去重 YAML 解析。

2. **#935 — Observer-hook 修复（已在 issues 中被多次引用）**  
   解决了子进程观察器的基础设施问题，但 #1187 指出 desktop 通知 helper 未覆盖，需追加 PR。

3. **#751 — Bash 风险门分类器修复（已被 #897 关联）**  
   修复分类器误报；当前还需 #897 暴露 `/settings` 开关配合。

4. **#574（待合并）— OSC 9 进度上报（herdr 集成）**  
   将 jcode agent 状态从屏幕抓取升级为终端标准协议。

5. **#608（修复中）— `/model` 切换在重启后失效**  
   模型选择持久化 bug，根因分析已给出。

6. **#571（待合并）— 自定义 OpenAI-compatible provider 字段补齐**  
   达成 opencode 兼容：display_name / reasoning / max_output_tokens / cost。

7. **#575（feature/cursor-acp 分支）— Cursor CLI ACP provider**  
   与现有 `--provider cursor`（HTTPS）并列，新增 stdio ACP 接入。

8. **#897 — Bash 风险门 `/settings` 开关**  
   把硬编码开关暴露给用户，持久化到 `config.toml`。

9. **#978 — 5 个 master 测试失败修复**  
   全部为环境变量隔离问题，属于技术债清理。

10. **#836/#835 — `/theme` 与 `/mcp` 斜杠命令**  
    TUI 配置能力持续扩展，未来主题/扩展管理将完全交互化。

---

## 📈 功能需求趋势

通过对今日 25 条活跃 issue 的归类，社区关注度排序如下：

| 趋势 | 代表 Issue | 热度 |
|------|-----------|------|
| **🎨 TUI 体验增强**（主题、MCP、@file 提及、模型选择键位） | #836 / #835 / #837 / #570 / #930 | ⭐⭐⭐⭐⭐ |
| **🔌 多 Provider / 模型兼容**（Cursor ACP、OpenCode Zen、自定义 provider） | #575 / #571 / #1182 | ⭐⭐⭐⭐ |
| **⏱ Retry / 限流 / 配额策略** | #677 / #1183 / #981 | ⭐⭐⭐⭐ |
| **🪝 Hook & 扩展体系**（pre_request transform） | #1185 | ⭐⭐⭐ |
| **💾 内存 / 性能**（Windows RSS、Ghostty CPU、swarm agent 模型继承） | #1192 / #1184 / #981 | ⭐⭐⭐ |
| **🛠 CI / 构建基础设施** | #1191 / #1190 / #978 | ⭐⭐ |

> 一句话总结：**"把 TUI 变成可配置 IDE、把 Provider 抽象做透、把 Retry 策略交还给用户"**，是当前 jcode 演进的三条主线。

---

## 💬 开发者关注点（高频痛点）

1. **🚧 CI 全线红盘（#1191/#1190）**  
   Aug 20 起的 YAML duplicate env 导致 **所有 master 与 feature 分支无法跑 workflow**。这是当前最影响贡献者合入速度的瓶颈，PR #1193 正在救火。

2. **🧟 子进程回收遗漏（#1187 / #1189）**  
   继 #935 修复后，desktop notification helper 仍 `discard Child`，后续 `bg output` 也暴露了"artifact 仅在完成时落盘"的设计缺陷。社区呼吁**统一子进程生命周期管理**。

3. **📦 Provider / 模型兼容仍是头号诉求**  
   - Cursor CLI ACP 独立通道 (#575)
   - OpenCode Zen 走 `/responses` 而非 `/chat/completions` (#1182)
   - 自定义 provider 字段不齐 (#571)  
   说明 jcode 在向"模型路由器"方向走，但 provider 适配层还需加固。

4. **🔁 Retry 策略一刀切（#677 / #1183）**  
   共享网关 + OAuth 限流两个场景下，硬编码的 3 次重试 + 60s `Retry-After` 上限都太短。**可配置化是共识**。

5. **🖥 跨平台 / 终端兼容性回归（#1184 / #1192）**  
   - Ghostty focus-gained 引发 42k write/s 的反馈环
   - Windows server 进程 200–300 MB/s 增长  
   这两类问题都不是"业务 bug"，而是**终端协议层与平台行为的深度耦合**，修复风险高。

6. **⚙️ 用户配置无法"反向写入"（#1188）**  
   手动写 `[sponsors] enabled = false` 被覆盖，暴露了 jcode 配置序列化时**只接受已知 schema** 的问题。`from-pr` 类 issue 在增多，说明 PR 作者在补齐这块。

7. **🧠 Memory sidecar 的 LLM 选择不尊重用户当前 provider（#679）**  
   当 Codex OAuth 过期时，sidecar 仍优先尝试 OpenAI，浪费冷启动时间。社区希望 auto/openai/claude/provider 可选。

8. **📊 TUI 信息层重复渲染（#583）**  
   margin HUD / overscroll status / right fact stack 三套组件同框输出，造成抖动闪烁。架构层合并是必要的。

---

## 📝 结语

今天的 jcode 社区呈现出鲜明的 **"v0.84 体验收尾 + 大批基础设施问题爆发"** 的双线节奏。对贡献者而言，**#1191 / #1192 / #1184 / #1183 是最高优先级的可参与入口**；对终端用户而言，**建议立即升级 v0.84.0 并关注明天 #1193 的合并结果**，CI 红盘一旦解除，预计会释放一波 PR 合入潮。

> 报告生成时间：2026-09-08 ｜ 数据来源：[github.com/1jehuang/jcode](https://github.com/1jehuang/jcode)

</details>

<details>
<summary><strong>pi</strong> — <a href="https://github.com/earendil-works/pi">earendil-works/pi</a></summary>

<think>The user wants me to generate a Chinese daily report for the pi community based on GitHub data for 2026-09-08. Let me analyze the data carefully and structure it according to the requirements.

Let me first understand what's in the data:

**Issues (top 30 by comments):**
1. #4945 - openai-codex Connection Reliability Issues (77 comments, 👍33) - inprogress
2. #7547 - How do you use Pi on windows? (61 comments, 👍2) - Windows-related discussion
3. #6996 - Bug: Gemini 3.x models fail during tool use due to missing thought_signature (9 comments) - CLOSED
4. #7010 - Normalize optional object tool schemas for OpenAI-compatible providers (7 comments) - OPEN
5. #8823 - Esc during active streaming often fails to cancel in-flight request (7 comments) - OPEN
6. #8684 - PI_OFFLINE silently disables all provider model discovery (6 comments) - OPEN
7. #7771 - Unable to start 0.84.1 (6 comments) - CLOSED
8. #8760 - OpenRouter :free models fail with 400 (5 comments) - inprogress
9. #8928 - Parallel pi startup can report "No API key found" for ~48s (4 comments) - OPEN
10. #7973 - Fullscreen select-to-copy use real clipboard (4 comments) - CLOSED
11. #9055 - EventStream quadratic CPU cost (4 comments) - CLOSED
12. #9267 - Reduce fuzzy session-search scan cost (3 comments) - CLOSED
13. #6100 - Compaction summary displayed out of place (3 comments) - CLOSED
14. #9282 - Open GitHub Copilot's verification page during device-code login (3 comments) - CLOSED
15. #9290 - Extension API: modelRegistry.complete() doesn't send x-opencode-session (3 comments) - CLOSED
16. #9298 - Grok 403 labeled as "OpenAI API error" (3 comments) - CLOSED
17. #7739 - Set startup-time budget targeting jcode-comparable latency (3 comments) - OPEN
18. #9237 - pi-opencode-bridge@0.2.1 sends no x-opencode-session header (3 comments) - CLOSED
19. #9073 - JsonlSessionRepo rejects cwd-scoped IDs when directory encodings collide (3 comments) - CLOSED
20. #9308 - Contribution proposal: native LongCat provider (2 comments) - CLOSED
21. #7139 - Boolean extension flag immediately before the prompt swallows it (2 comments) - CLOSED
22. #9306 - Aborted/error turn leaves unmatched toolCall blocks (2 comments) - CLOSED
23. #7629 - tui.select.pageUp and tui.select.pageDown not handled (2 comments) - OPEN
24. #9258 - models.json apiKey: "$ENV" not resolved (2 comments) - CLOSED
25. #9257 - extractCursorPosition leaves duplicate CURSOR_MARKER (2 comments) - CLOSED
26. #9294 - claude-fable-5 allowedFallbackModels lists claude-opus-4-8 (2 comments) - CLOSED
27. #9289 - Allow selecting individual startup display sections (2 comments) - CLOSED
28. #9276 - grep tool with context lines can cause OOM (2 comments) - CLOSED
29. #9273 - Restore optional automatic persistence for human-initiated changes (2 comments) - CLOSED
30. #9169 - Images rendered incorrectly in fullscreen TUI mode (2 comments) - CLOSED

**Pull Requests (top 20):**
1. #8635 - fix(ai): preserve aborted stop reason during lazy setup
2. #9307 - fix(tui): recognize Orca terminal capabilities
3. #9303 - fix(interactive): resume session before closing selector
4. #9301 - feat(coding-agent): confirm device-code browser and clipboard actions
5. #7742 - feat(ai): Ollama Cloud support
6. #9297 - fix(ai): remove invalid Fable 5 fallback target
7. #9280 - feat: add implementation-backed documentation evals
8. #8744 - feat(tui): add opt-in overlay selection exclusion
9. #8615 - fix(coding-agent): preserve interleaved user content
10. #9292 - feat(coding-agent): add manual retry api/command
11. #9117 - feat(coding-agent): deliver prompt and tool changes as system message deltas
12. #9116 - feat(ai): add mid-conversation system messages
13. #256 - Implement XDG Base Directory Specification with auto-migration
14. #4 - Parse saved model with multiple slashes
15. #5732 - feat(extensions): support allowCommands option in sendUserMessage
16. #9278 - fix(coding-agent): update repository links in prompts, docs, and code
17. #9 - Add support for AGENTS.md context file
18. #9077 - docs(coding-agent): document running pi in Docker Sandboxes
19. #9253 - fix(ai): route Copilot GPT models through Responses (fixes astra)
20. #9152 - DRAFT: forks streaming

Let me identify the key themes:
1. **Provider/Model integration issues**: openai-codex, Gemini 3.x, Grok, OpenRouter, claude-fable-5, Copilot, Ollama Cloud, LongCat
2. **Performance/Resource issues**: EventStream quadratic cost, fuzzy match, grep OOM, startup time
3. **Windows platform support**: dedicated issue, image rendering
4. **Authentication/OAuth**: device-code login, x-opencode-session header
5. **TUI/UX**: Orca terminal, pageUp/Down handling, fullscreen selection, images
6. **Architecture/System**: mid-conversation system messages, system message deltas, manual retry
7. **Configuration**: XDG Base Directory, $ENV interpolation, PI_OFFLINE behavior
8. **Session management**: cwd-scoped IDs, compaction display

Now let me write the report. I need to pick 10 most important Issues and 10 most important PRs.

For the most important Issues, I'll prioritize by:
- Comment count
- Status (open with active discussion)
- Impact on users
- Trending themes

Top 10 Issues:
1. #4945 (77 comments, inprogress) - openai-codex reliability - critical
2. #7547 (61 comments) - Windows usage feedback
3. #7010 (7 comments) - tool schemas normalization
4. #8823 (7 comments) - Esc cancel streaming
5. #8684 (6 comments) - PI_OFFLINE behavior
6. #8760 (5 comments) - OpenRouter free models
7. #8928 (4 comments) - parallel startup race condition
8. #7739 (3 comments, OPEN) - startup time budget
9. #7629 (2 comments, OPEN) - tui pageUp/Down
10. #6996 (9 comments, CLOSED) - Gemini 3.x thought_signature

Actually, let me reconsider. Some are closed already (which means they're being worked on or completed). Let me include some that show interesting resolution or are still actively discussed.

Top 10 most important Issues (combining activity and impact):
1. #4945 - openai-codex reliability (high activity, critical)
2. #7547 - Windows usage (high activity, ongoing discussion)
3. #6996 - Gemini 3.x thought_signature (recently closed, shows platform work)
4. #7010 - tool schemas normalization (provider compatibility)
5. #8823 - Esc cancel streaming (UX critical)
6. #8684 - PI_OFFLINE behavior (config correctness)
7. #8760 - OpenRouter free models (provider issue)
8. #8928 - parallel startup race (production critical)
9. #7739 - startup time budget (performance)
10. #7629 - tui pageUp/Down (UX)

Top 10 PRs:
1. #8635 - preserve aborted stop reason (fix critical bug)
2. #7742 - Ollama Cloud support (new provider)
3. #9116 - mid-conversation system messages (architecture)
4. #9117 - system message deltas (architecture, related to above)
5. #9297 - remove invalid Fable 5 fallback (hotfix)
6. #9292 - manual retry api/command (UX)
7. #9301 - device-code browser confirm (UX/auth)
8. #8744 - opt-in overlay selection exclusion (TUI UX)
9. #256 - XDG Base Directory (config standards)
10. #8615 - preserve interleaved user content (content fidelity)

Now let me write the report in Chinese with proper structure.

Themes for功能需求趋势:
1. Provider ecosystem expansion (LongCat, Ollama Cloud, new providers)
2. Performance optimization (startup time, EventStream, fuzzy search, grep OOM)
3. Authentication/UX improvements (device-code, OAuth handling)
4. Windows platform support
5. Architecture: mid-conversation system messages
6. Configuration: XDG Base Directory, env interpolation
7. TUI/UX polish (terminal capabilities, keyboard handling, images)

Developer pain points:
1. Provider-specific reliability issues
2. Performance bottlenecks
3. Windows compatibility
4. Configuration gotchas (PI_OFFLINE scope)
5. Race conditions in parallel startup
6. Schema/tool compatibility across providers

Let me write this up now. I should also note that there are no releases in the past 24 hours, so I'll skip that section or note it.

Actually looking again, the requirements say:
- 版本发布 - 如有新版本，总结更新内容；无则省略

So I should omit if no releases.

Let me draft the report now.</think>

# Pi 社区动态日报 · 2026-09-08

## 📌 今日速览

今日社区焦点集中在**多 Provider 兼容性与可靠性**上：openai-codex 流式中断、Claude Fable 5 fallback 失效、Gemini 3.x `thought_signature` 缺失等 Provider 侧问题持续发酵；同时，pi 0.85+ 引入的"中途系统消息"架构改造（#9116 / #9117）正在成为下一个迭代的核心方向。此外，Windows 使用体验征集（#7547，61 条评论）与设备码登录 UX 改进（#9282 / #9301）也获得了大量关注。

---

## 🆕 版本发布

*过去 24 小时内无新版本发布。*

---

## 🔥 社区热点 Issues

### 1. [#4945](https://github.com/earendil-works/pi/issues/4945) — openai-codex 连接可靠性问题
**状态**：OPEN · inprogress | **评论**：77 | **👍**：33

社区最热的持续性 Issue。用户反馈 `gpt-5.5` 在交互式 TUI 中偶尔会卡在 `Working...` 状态，无流式文本、无工具调用、无错误提示，唯一恢复手段是按 Esc（结果会留下一条被中止的 assistant turn）。这是过去几天内多次复现的稳定性缺陷，**亟需 Provider 适配层重试/超时策略修复**。

### 2. [#7547](https://github.com/earendil-works/pi/issues/7547) — Windows 上的 Pi：使用方式与已知问题征集
**状态**：OPEN | **评论**：61 | **👍**：2

维护者主动发起的 Windows 平台调研帖。讨论范围覆盖：原生终端 vs WSL、容器化运行、PowerShell 与 cmd 差异、终端能力检测（OSC 52/8）等。**这是 Windows 用户首次被系统性纳入核心优化优先级**的信号帖。

### 3. [#6996](https://github.com/earendil-works/pi/issues/6996) — Gemini 3.x 模型因 `thought_signature` 缺失导致工具调用失败
**状态**：CLOSED | **评论**：9

Gemini 3.x 系列（`gemini-3.5-flash` / `gemini-3.6-flash`）在工具调用后，提交 tool result 时未携带 `thought_signature`，触发 400 错误。**该 Issue 已关闭**，说明 `@earendil-works/pi-ai` 已修复此 Provider 适配问题。

### 4. [#7010](https://github.com/earendil-works/pi/issues/7010) — OpenAI 兼容 Provider 的 optional object tool schema 未规范化
**状态**：OPEN | **评论**：7 | **👍**：1

`@earendil-works/pi-ai@0.81.1` 中 chat-completions 适配器对工具 schema 的 `required` 字段未做归一化，导致部分 OpenAI 兼容 Provider 拒绝请求。**属于 Provider 兼容性的核心基础设施问题**。

### 5. [#8823](https://github.com/earendil-works/pi/issues/8823) — Esc 在流式进行中无法可靠取消在途请求
**状态**：OPEN | **评论**：7

按 Esc 仅注册 abort 事件，但 HTTP 请求继续跑到 Provider 自然结束才返回，导致 `stopReason: "aborted"` 之外还产生大量无效 token 消耗。**用户控制感与计费安全都受影响**。

### 6. [#8684](https://github.com/earendil-works/pi/issues/8684) — `PI_OFFLINE` 静默禁用全部 Provider 模型发现
**状态**：OPEN | **评论**：6

环境变量文档承诺只禁用启动 housekeeping 网络调用，实际却禁用整个会话的 model-catalog 发现，**与文档严重不符**，影响离线/受限网络环境的可预期性。

### 7. [#8760](https://github.com/earendil-works/pi/issues/8760) — OpenRouter `:free` 模型因 `max_tokens` 超限返回 400
**状态**：OPEN · inprogress | **评论**：5

Pi 直接把 catalog 中 `maxOutputTokens` 作为 `max_tokens` 发送，**未与上游 Provider 实际限制对齐**。涉及多个 `:free` 模型，影响免费用户使用。

### 8. [#8928](https://github.com/earendil-works/pi/issues/8928) — 并行启动时 `auth.json` 含过期 OAuth 凭据会"卡" 48 秒
**状态**：OPEN | **评论**：4

与 [#1871](https://github.com/earendil-works/pi/issues/1871)、#4919、#6880 同源，**多进程部署场景下的可重现启动延迟**，作者附带完整时序数据。

### 9. [#7739](https://github.com/earendil-works/pi/issues/7739) — 设立启动时间预算，对齐 jcode
**状态**：OPEN | **评论**：3

提案为 Pi 设立明确的启动延迟与内存预算，**对照 jcode v0.9.1888-dev 的 PTY 启动基准**，主动管理性能回归。

### 10. [#7629](https://github.com/earendil-works/pi/issues/7629) — `tui.select.pageUp/pageDown` 在部分选择列表中失效
**状态**：OPEN | **评论**：2

自定义键位在部分 selector（无 PageUp/Down 物理键的键盘用户）下不生效，影响 Vim/Emacs 风格用户的可访问性。

---

## 🛠 重要 PR 进展

### 1. [#8635](https://github.com/earendil-works/pi/pull/8635) — `fix(ai)` 保留 lazy setup 期间被中止的 stop reason
**状态**：OPEN · Fixes #8409

将 abort signal 一路传到 lazy stream setup 包装器，**修复"工具执行期间被中止"导致 stop reason 丢失的回归**，并附带 regression test。

### 2. [#7742](https://github.com/earendil-works/pi/pull/7742) — `feat(ai)` 新增 Ollama Cloud Provider
**状态**：OPEN

使用 `OLLAMA_API_KEY`，保留本地与云端混合连接的现有模式。**为本地 Ollama 用户提供零摩擦上云路径**，已通过 API key + manual login 测试。

### 3. [#9116](https://github.com/earendil-works/pi/pull/9116) — `feat(ai)` 支持会话中途系统消息
**状态**：OPEN

[#8998](https://github.com/earendil-works/pi/issues/8998) 的拆分第一层（pi-ai 层），为后续 prompt/tool 变更以 system message delta 形式下发打基础。**架构性变更**，影响所有 Extension。

### 4. [#9117](https://github.com/earendil-works/pi/pull/9117) — `feat(coding-agent)` 将 prompt / tool 变更作为 system message delta 投递
**状态**：OPEN

[#8998](https://github.com/earendil-works/pi/issues/8998) 拆分第二层（coding-agent 集成层），依赖 #9116 的 system-role 支持。**避免重写顶层 prompt**，降低 token 浪费与 Provider 行为不确定性。

### 5. [#9297](https://github.com/earendil-works/pi/pull/9297) — `fix(ai)` 移除 Claude Fable 5 的无效 fallback 目标
**状态**：OPEN · Fixes #9294

`claude-fable-5` 的内置 `allowedFallbackModels` 仍列出已被 API 拒收的 `claude-opus-4-8`，每次请求都 400。**Hotfix**，同步覆盖 Fable 5.1 元数据。

### 6. [#9292](https://github.com/earendil-works/pi/pull/9292) — `feat(coding-agent)` 新增手动重试 API/命令
**状态**：CLOSED

自动重试不是万能药，**为编程式用户暴露显式重试入口**。注：作者忘记先开 issue（已补 #9293）。

### 7. [#9301](https://github.com/earendil-works/pi/pull/9301) — `feat(coding-agent)` 设备码登录：浏览器与剪贴板操作可确认
**状态**：OPEN · Fixes #9282

为 Provider 声明 `openBrowserOnDeviceCode` / `copyUserCodeOnDeviceCode` 行为，**默认开启 GitHub Copilot 的浏览器跳转 + 剪贴板复制**，但允许用户拒绝。兼顾企业环境不便自动打开的场景。

### 8. [#8744](https://github.com/earendil-works/pi/pull/8744) — `feat(tui)` 全屏文本选择支持 overlay exclusion
**状态**：OPEN

修复可见 overlay 阻断 transcript 选择路径的问题——之前会从合成屏幕抓文本，导致复制到的是 overlay 内容而非真实会话内容。**TUI 文本复制语义修正**

</details>

---
*本日报由 [Big Model Radar](https://github.com/96loveslife/big_model_radar) 自动生成。*
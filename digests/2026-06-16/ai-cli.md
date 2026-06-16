# AI CLI 工具社区动态日报 2026-06-16

> 生成时间: 2026-06-16 01:39 UTC | 覆盖工具: 7 个

- [Claude Code](https://github.com/anthropics/claude-code)
- [OpenAI Codex](https://github.com/openai/codex)
- [Gemini CLI](https://github.com/google-gemini/gemini-cli)
- [GitHub Copilot CLI](https://github.com/github/copilot-cli)
- [Kimi Code CLI](https://github.com/MoonshotAI/kimi-cli)
- [OpenCode](https://github.com/anomalyco/opencode)
- [Qwen Code](https://github.com/QwenLM/qwen-code)
- [Claude Code Skills](https://github.com/anthropics/skills)

---

## 横向对比

<think>The user wants a comprehensive horizontal comparison report of multiple AI CLI tools based on the daily dynamics summaries I've been provided. Let me carefully analyze all the data and create a professional comparative analysis.

Let me first organize the key data points from each tool:

## Tool-by-Tool Summary

### Claude Code (Anthropic)
- Release: v2.1.178 (权限规则参数化匹配 + 嵌套 Skills)
- 10 issues covered, hot topics: VS 2026 integration (137 comments, 356 likes), Cowork file truncation (data safety risk), macOS ENOSPC cluster, Windows compatibility
- 10 PRs covered, mostly by @AZERDSQ131 maintenance day
- Key themes: IDE integration, macOS stability, Windows compatibility, cost control, tool search

### OpenAI Codex
- Releases: v0.140.0 stable, v0.141.0-alpha.1, multiple alphas
- Top issue: Linux desktop app (112 comments, 583 likes - HUGE)
- Key PR series: User Message Queue (4 PRs), cross-OS path fixes
- Themes: Linux desktop, performance, Windows/WSL, security false positives, multi-agent

### Gemini CLI (Google)
- No releases today
- Hot issues: Generalist agent hangs (8 likes, top), Auto Memory security, AST tools
- Important PRs: Pin dependencies + 14-day cooldown, MCP OAuth refresh, security fixes
- Themes: Agent reliability, Auto Memory security, AST integration, Browser agent, Eval infrastructure

### GitHub Copilot CLI
- Release: v1.0.63 (image attachment friendliness, w key for /diff, deferTools MCP)
- Top issue: Excessive OAuth permissions (long-standing)
- Themes: BYOK multi-model, MCP ecosystem, cross-platform encoding, hook regressions
- Very low PR activity (1 PR, possibly spam)

### Kimi Code CLI (Moonshot)
- No releases
- Only 4 issues, 2 PRs
- Themes: Compaction failure, hooks, session resume, network proxy
- Maintenance-focused, small but active community

### OpenCode (Anomaly)
- No releases
- Top issues: Memory megathread (96 comments), sandbox request (69), /goal feature
- Top PRs: MCP server instructions, OpenAI schema sanitization, currency config
- Themes: MCP capabilities, OAuth/subscription trust issues, performance, Windows

### Qwen Code
- Releases: v0.18.1 stable, nightly, desktop-v0.0.4
- Hot issues: /loop automation refactor, sub-agent parallel control, model picker UI
- Themes: /loop refactoring, sub-agent scheduling, context management, self-hosted LLM

## Cross-Cutting Themes

Let me identify themes that appear across multiple tools:

1. **MCP (Model Context Protocol) ecosystem** - appears in Codex, Gemini, Copilot CLI, OpenCode, Qwen Code
2. **Cross-platform issues (Windows/WSL)** - Claude, Codex, Copilot CLI, OpenCode
3. **Performance / observability** - Codex, Gemini, OpenCode, Qwen Code
4. **Multi-agent / sub-agent orchestration** - Codex, Gemini, Qwen Code, Claude
5. **IDE integration** - Claude (VS 2026, VSCode), Copilot CLI
6. **Linux desktop support** - Codex (#11023 huge demand)
7. **BYOK (Bring Your Own Key) model support** - Copilot CLI
8. **Auto memory / long-term memory** - Gemini (security concerns)
9. **Hook/Plugin ecosystems** - Claude, Copilot CLI, Kimi, Qwen Code
10. **Token cost visibility** - OpenCode, Qwen Code
11. **Session management / persistence** - all of them
12. **Security / permissions / sandboxing** - Claude, Gemini, OpenCode
13. **Eval infrastructure / testing** - Gemini especially
14. **CLI UX / TUI** - Claude (Markdown rendering), Gemini (shell status), Qwen Code (macOS terminal bugs)
15. **Subscription / commercial trust** - OpenCode (Go subscription issues)

## Differentiated Positioning

- **Claude Code**: IDE-centric, Anthropic ecosystem, heavy focus on Windows/macOS stability, plugin ecosystem
- **OpenAI Codex**: Platform parity push (Linux desktop!), performance focus, app-server architecture, multi-agent
- **Gemini CLI**: Agent-first design, browser agent, Auto Memory, eval infrastructure
- **GitHub Copilot CLI**: GitHub-native, BYOK focus, enterprise concerns, MCP integration
- **Kimi Code CLI**: Hooks/extension focused, smaller community but active
- **OpenCode**: MCP-first, multi-provider, plugin ecosystem, performance instrumentation
- **Qwen Code**: Self-hosted LLM friendly, daemon architecture, workflow system

## Maturity Assessment

- **Most mature** (in terms of community engagement): Claude Code, OpenAI Codex, Gemini CLI
- **Most active in PRs**: Claude Code (10+ PRs), Qwen Code (heavy activity)
- **Most active issues**: Claude Code (137 comments), OpenCode (96), Codex (112)
- **Most loved by community**: Codex Linux desktop (583 likes), Claude VS 2026 (356 likes), Qwen Code /loop (high engagement)
- **Smaller but stable**: Kimi Code CLI

## Trend Signals

1. **MCP is becoming the lingua franca** - 5+ tools actively developing MCP clients
2. **Sub-agent / multi-agent is the new battleground** - all major tools shipping or planning sub-agent features
3. **Cross-platform parity is the new table stakes** - Windows/WSL/Linux issues dominate
4. **Memory/long-term context** is the next frontier - Gemini's Auto Memory troubles are a warning shot
5. **Self-hosted / BYOK pressure** - users want to use their own models
6. **IDE integration is no longer optional** - VS Code / VS 2026 / VS Code for Linux
7. **Eval infrastructure** is becoming first-class (Gemini leading)
8. **Performance transparency** - tokens/second, memory visibility, cost display
9. **Trust/subscription issues** - OpenCode's Go sub issues are warning
10. **Async / background automation** - /loop, scheduled tasks are emerging

Now let me structure the final report in Chinese, professional and concise.

The user asked for:
1. 生态全景 - 3-5 sentences
2. 各工具活跃度对比 - table
3. 共同关注的功能方向 - which tools, what needs
4. 差异化定位分析 - positioning differences
5. 社区热度与成熟度 - activity and maturity
6. 值得关注的趋势信号 - industry trends

Let me write a clean, professional Chinese report.</think>

# 主流 AI CLI 工具横向对比分析报告
**日期：2026-06-16**

---

## 一、生态全景

当前 AI CLI 工具生态已进入 **"功能收敛 + 体验分化"** 的关键阶段：一方面，**MCP（Model Context Protocol）** 已成为跨工具的事实标准，5+ 工具同时推进客户端兼容；另一方面，**Sub-agent / 多智能体编排** 成为新一轮军备竞赛的主战场。竞争重心从"是否能用"转向"是否能跨平台一致、稳定、可观测地长期运行"——性能透明度、内存治理、Windows/WSL 兼容性、IDE 生态扩展成为各工具差异化的高地。

---

## 二、各工具活跃度对比

| 工具 | Release（24h） | 新增/更新 Issue | 新增/更新 PR | 社区总信号 |
|------|----------------|----------------|--------------|-----------|
| **Claude Code** | ✅ v2.1.178 | ~50 | ~10 | 🔥🔥🔥🔥🔥 |
| **OpenAI Codex** | ✅ v0.140.0 + alpha | ~50 | ~20 | 🔥🔥🔥🔥🔥 |
| **Gemini CLI** | ❌ 无 | ~50（多数 maintainer-only） | ~26（含 dependabot） | 🔥🔥🔥🔥 |
| **GitHub Copilot CLI** | ✅ v1.0.63 | 44 | 1 | 🔥🔥 |
| **Kimi Code CLI** | ❌ 无 | 4 | 2 | 🔥 |
| **OpenCode** | ❌ 无 | ~50 | ~10 | 🔥🔥🔥 |
| **Qwen Code** | ✅ v0.18.1 + desktop v0.0.4 | ~30 | ~12 | 🔥🔥🔥🔥 |

> 注：Issue/PR 数为各日报内披露的 24h 更新条目；"社区总信号"综合评论数、点赞数、PR 合并节奏、版本发布密度综合判断。

---

## 三、共同关注的功能方向

跨工具高频出现的需求方向如下，反映出 **行业共识级痛点**：

### 1. 🤖 Sub-agent / 多智能体编排
| 工具 | 具体诉求 |
|------|---------|
| Claude Code | 单条消息级模型切换、agent 委派的工具语义 |
| OpenAI Codex | `multi_agent_v2` 开启即 400、补 `parent_turn_id` 可观测性 |
| Gemini CLI | Generalist agent 挂起、MAX_TURNS 被伪装 success、子代理权限绕过 |
| Qwen Code | sub-agent 并行度与排队、fork 行为显式化 |

### 2. 🔌 MCP 生态对齐
| 工具 | 具体诉求 |
|------|---------|
| OpenAI Codex | MCP server 多实例、远程 OAuth 风暴、子 agent 工具隔离 |
| Gemini CLI | MCP OAuth 刷新失败、配置 schema 迁移 |
| GitHub Copilot CLI | stdio 无限重试、`deferTools` 选项、企业策略管控 |
| OpenCode | 完整 MCP 2.x 客户端、server instructions 注入、OpenAI schema 清洗 |

### 3. 🪟 Windows / WSL / 跨平台一致性
| 工具 | 具体诉求 |
|------|---------|
| Claude Code | macOS Bash 工具 ENOSPC 集群、Windows 路径规范化、Python CRLF |
| OpenAI Codex | WSL 路径改写、非系统盘 CLI 找不到、韩文目录 GUI 崩溃 |
| GitHub Copilot CLI | ARM64 Tokio panic、UTF-8 mojibake、WSL↔Windows 剪贴板 |
| OpenCode | GBK locale 乱码、TUI 剪贴板图片粘贴 |
| Qwen Code | ghostty / tabby 闪屏、tmux 触控板劫持 |

### 4. 💰 成本与模型控制
| 工具 | 具体诉求 |
|------|---------|
| Claude Code | 1M context 额度卡死、每条消息切换模型 |
| GitHub Copilot CLI | 多 BYOK 热切换、自定义 header、prompt caching |
| OpenCode | 费用显示货币可配置、tokens/second 实时显示 |
| Qwen Code | 大工具结果回灌、QWEN.md 长度告警 |

### 5. 🧠 长期记忆与上下文治理
| 工具 | 具体诉求 |
|------|---------|
| Gemini CLI | Auto Memory 脱敏 / 重试低信号会话（已有泄密面） |
| Claude Code | 嵌套 Skills 自动加载 |
| Qwen Code | `--expose-gc` GC 策略、`/quit` 后 OOM |

### 6. 📊 可观测性与性能透明
| 工具 | 具体诉求 |
|------|---------|
| OpenAI Codex | Codex 响应慢、`codex resume` 首屏等待 |
| OpenCode | Memory Megathread（96 评论）、tokens/second 显示 |
| Qwen Code | 流式响应首个 chunk 前重试、`/daemon/status` API |

---

## 四、差异化定位分析

| 工具 | 功能侧重 | 目标用户 | 技术路线 |
|------|---------|---------|---------|
| **Claude Code** | IDE 集成 + Skills 生态 + Cowork 沙箱 | 专业开发者、Windows/.NET 群体、Anthropic 生态 | 子目录 Skills、参数化权限规则、桌面端 cowork VM |
| **OpenAI Codex** | 跨平台 Desktop + 多智能体 + app-server 架构 | 追求官方桌面体验、Linux 用户、性能敏感型 | app-server 队列化、State DB、`/goal` 目标驱动会话 |
| **Gemini CLI** | Agent-first + Auto Memory + AST 工具探索 | 评估体系严谨的工程团队、Google Cloud 用户 | 组件级 Eval、`tilth`/`glyph` AST、Browser agent |
| **GitHub Copilot CLI** | GitHub 原生 + BYOK + 企业合规 | GitHub 深度用户、BYOK 重度用户、企业 | 终端内 slash command、Hook 体系、MCP deferTools |
| **Kimi Code CLI** | Hooks/扩展 + 长会话压缩 | 国内开发者、需要自定义扩展的工程师 | Compaction 流水线、Hook 文本派生 |
| **OpenCode** | 多 Provider + MCP-first + 性能仪表化 | 模型可观测性需求、订阅/付费敏感用户 | MCP 2.x 客户端完整实现、`/goal` 持久化、tokens/second 埋点 |
| **Qwen Code** | 自托管 LLM + Workflow + Daemon | 自托管 / 本地推理用户、Workflow 自动化需求方 | Daemon 进程、`/loop` 自驱动、Workflow phase-tree |

**关键定位差异：**
- **"封闭 vs 开放"轴**：Claude Code / Codex 偏官方集成；OpenCode / Qwen Code 偏多 Provider 自托管；Copilot CLI 居中（GitHub 体系内开放）。
- **"Agent vs Workflow"轴**：Gemini CLI 强调 Agent 自治；Qwen Code 强调 Workflow 显式建模；其余工具居中。
- **"企业 vs 个人"轴**：Copilot CLI / Claude Code 强企业合规；OpenCode / Qwen Code 偏个人开发者。
- **"跨平台广度"轴**：Codex 唯一在 Linux Desktop 上有巨额缺口（#11023，583 👍），其余工具 Linux 覆盖相对完整。

---

## 五、社区热度与成熟度

### 🔥 热度 Top 3 Issues（按 👍 数）
| 排名 | Issue | 工具 | 👍 |
|------|-------|------|-----|
| 1 | Linux desktop app (#11023) | OpenAI Codex | **583** |
| 2 | Visual Studio 2026 集成 (#15942) | Claude Code | **356** |
| 3 | 显示 tokens/second (#5374) | OpenCode | 81 |

### 📈 迭代节奏

| 维度 | 最快 | 中等 | 较慢 |
|------|------|------|------|
| **Release 频率** | OpenAI Codex（日更 alpha）、Qwen Code（日更 nightly） | Claude Code（每周多次） | Gemini CLI、OpenCode、Kimi（数天至周级别） |
| **PR 合并节奏** | Qwen Code、OpenAI Codex | Claude Code、OpenCode | Kimi Code CLI |
| **Issue 响应** | Claude Code（@AZERDSQ131 一日 10 PR）、Qwen Code | OpenAI Codex、OpenCode | Kimi Code CLI（修复 PR 主动响应值得肯定但规模小） |

### 🧭 成熟度判断

- **第一梯队（成熟 + 高活跃）**：**Claude Code**、**OpenAI Codex**——版本号 v2.1+ / v0.140+、生态完善、问题闭环能力强。
- **第二梯队（快速迭代 + 中等社区）**：**Gemini CLI**、**OpenCode**、**Qwen Code**——功能边界快速扩张，但稳定性债务累积。
- **第三梯队（早期 / 专注细分）**：**GitHub Copilot CLI**（依赖 GitHub 主线）、**Kimi Code CLI**（小而精）。
- **观察**：Copilot CLI 的 PR 活跃度（24h 仅 1 条）异常低迷，与 GitHub 主仓的"高度中心化"开发模式相符。

---

## 六、值得关注的趋势信号

### 📡 趋势 1：MCP 成为跨工具事实标准
**信号**：5+ 工具同时推进 MCP 客户端能力建设（Codex、Gemini、Copilot CLI、OpenCode、Qwen Code）。
**含义**：未来 AI CLI 工具的核心差异点将从"内置工具丰富度"转向 **"MCP 生态对接深度 + 多 Provider 调度"**。
**对开发者的参考**：投入 MCP Server 开发可获得"一次开发、多工具复用"的杠杆效应。

### 📡 趋势 2：Sub-agent 是新可靠性主战场
**信号**：几乎所有主流工具都在 P1 级 issue 中报告 sub-agent 挂起、假成功、权限绕过等问题。
**含义**：单 agent 模式的可靠性问题已基本收敛；多 agent 协作的"协调可靠性"成为下一阶段的瓶颈。
**对开发者的参考**：评估 AI CLI 时应特别关注其 **sub-agent 状态可观测性、失败传播语义、超时与重试边界**。

### 📡 趋势 3：跨平台一致性成为"入场券"
**信号**：Windows/WSL 相关 issue 在 Claude、Codex、Copilot、OpenCode 几乎都有 5+ 条。
**含义**：能稳定跑通 Windows + WSL + macOS + Linux 已是基本要求，无法满足者将快速失去市场。
**对开发者的参考**：选择工具时优先验证 **Windows ARM64 + WSL2 + macOS Apple Silicon** 三栈体验。

### 📡 趋势 4：性能透明度诉求强烈
**信号**：tokens/second、内存治理、首 chunk 延迟、流式重试成为各工具的 P1 议题。
**含义**：开发者从"能不能用"转向"用得明白"，可观测性指标正在产品化。
**对开发者的参考**：在自建 Agent 时，**首 token 延迟、P50/P99 流式稳定性、内存峰值** 应作为关键指标埋点。

### 📡 趋势 5：长期记忆是下一个爆点 / 风险点
**信号**：Gemini CLI 的 Auto Memory 已暴露 **上下文泄密** 风险，多个相关 issue 同时出现。
**含义**：长期记忆能力（如 Auto Memory / `/loop` 自驱动）是差异化新高地，但 **安全治理模型尚未成熟**。
**对开发者的参考**：在使用相关功能前应 **审计其脱敏机制与日志保留策略**，避免将含密钥、个人信息的会话内容送入提取流程。

### 📡 趋势 6：IDE 集成从"加分项"变"刚需"
**信号**：Claude Code 的 VS 2026 请求 356 👍 远超绝大多数 Bug 报告。
**含义**：VS Code / JetBrains / Visual Studio 的官方集成是开发者选择工具的关键决策因子。
**对开发者的参考**：若评估内部 AI 工具建设，**VS Code 扩展的体验权重应不低于 CLI 本身**。

### 📡 趋势 7：商业化与信任风险浮现
**信号**：OpenCode 多名用户反馈 Go 付费未激活、客服响应慢；Copilot CLI 的 OAuth

---

## 各工具详细报告

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills 社区热点

> 数据来源: [anthropics/skills](https://github.com/anthropics/skills)

<think>The user wants me to analyze the Claude Code Skills community based on GitHub data from anthropics/skills repository. Let me carefully review the PRs and Issues provided, then structure a report in Chinese as requested.

Let me analyze the data:

**PRs (top 20 by potential popularity):**
Note: 评论数 (comments) shows "undefined" for all PRs, but 👍 (likes/thumbs up) also shows 0 for all. The PRs seem sorted by some other metric (possibly recency or importance). Let me look at the content and identify which are most interesting/discussed based on the description details.

Actually, looking again, all PRs show "评论: undefined | 👍: 0" - so the sorting isn't by comment count. Let me look at the issues instead which DO have comment counts.

For PRs, I need to identify "hot" ones based on:
- Number of related issues
- Cross-references (multiple PRs fixing same problem)
- Substantive nature of changes
- Community relevance

Let me identify the hot PRs based on thematic clustering:

1. **#538, #539, #541** - All by @Lubrsy706, all bug fixes in skill-creator tooling (case sensitivity, YAML parsing, DOCX ID collision)
2. **#361, #362, #539** - Multiple PRs addressing YAML/UTF-8 validation in quick_validate.py
3. **#1099, #1050, #1298, #1061, #1169** - Windows compatibility issues with skill-creator (huge cluster)
4. **#556, #1169, #1298** - All related to run_eval.py 0% recall bug
5. **#514** - Document typography skill
6. **#486** - ODT/OpenDocument skill
7. **#210** - Frontend-design skill improvement
8. **#83** - skill-quality-analyzer and skill-security-analyzer (meta-skills)
9. **#1140** - agent-creator skill (addresses Issue #1120)
10. **#723** - testing-patterns skill
11. **#147** - codebase-inventory-audit skill
12. **#154** - shodh-memory skill
13. **#444** - AURELION skill suite

**Issues (with actual comment counts):**
1. **#228** (14 comments, 7👍) - Org-wide skill sharing in Claude.ai
2. **#556** (12 comments, 7👍) - run_eval.py never triggers skills (0% trigger rate)
3. **#62** (10 comments, 2👍) - Skills disappeared
4. **#202** (8 comments, 1👍) [CLOSED] - skill-creator best practices
5. **#492** (7 comments, 2👍) - Security: Community skills under anthropic/ namespace
6. **#412** (6 comments, 0👍) [CLOSED] - Agent governance skill proposal
7. **#189** (6 comments, 9👍) - Duplicate skills from document-skills/example-skills
8. **#29** (4 comments, 0👍) - Usage with AWS Bedrock
9. **#16** (4 comments, 0👍) - Expose Skills as MCPs
10. **#1175** (3 comments, 0👍) [CLOSED] - SharePoint security concerns
11. **#1169** (3 comments, 1👍) - run_loop.py 0% recall
12. **#1061** (3 comments, 0👍) - Windows compatibility
13. **#184** (3 comments, 4👍) [CLOSED] - agentskills.io redirect error
14. **#61** (3 comments, 0👍) - 404 error loading skills
15. **#1220** (2 comments, 0👍) - Multi-file preload feature request

Now let me structure the report:

**1. 热门 Skills 排行 (Hot PRs)**
Since PRs don't show comments, I'll pick the most impactful based on:
- Cross-referenced by issues
- Multiple related fixes
- New functional capabilities
- Clear community pain points

Top picks:
- #514 - Document Typography (high-quality output)
- #486 - ODT support
- #210 - Frontend-design improvement
- #83 - Meta skills (quality/security analyzers)
- #1140 - agent-creator (fixes #1120)
- #723 - testing-patterns
- #154 - shodh-memory (persistent context)
- #444 - AURELION cognitive framework

**2. 社区需求趋势 (Issues)**
From the issues:
- **Skill sharing/distribution** (#228, #492, #189) - Org-wide sharing, namespace security, dedup
- **Eval/reliability tooling** (#556, #1169, #1298) - run_eval.py broken
- **Cross-platform support** (#1061, #1099, #1050) - Windows compatibility
- **Integration** (#29 Bedrock, #16 MCPs) - Skills as MCPs
- **Reliability/loading** (#62, #61) - Skills disappearing, 404 errors
- **New skill proposals** (#412 governance, #1220 multi-file)
- **Skill quality** (#202 best practices)

**3. 高潜力待合并 Skills (High potential unmerged)**
- #1298 - Comprehensive fix for run_eval.py (just updated 2026-06-11)
- #1140 - agent-creator (addresses #1120)
- #514 - Document typography
- #486 - ODT support
- #83 - Meta-skills
- #1140 has been updated recently

**4. 生态洞察 (Insight)**
The most concentrated demand seems to be: **Skills 的"工业化基础设施"** - the ecosystem is asking for proper evaluation tooling, cross-platform support, security/namespace hygiene, and distribution mechanisms. The community has shifted from "what skills exist" to "how do skills reliably work, ship, and integrate."

Let me write this in clean Chinese now.</think>

# Claude Code Skills 社区热点报告
**数据截止：2026-06-16 · 来源：github.com/anthropics/skills**

---

## 1. 热门 Skills 排行

> 注：原始数据中 PR 评论数为 undefined，以下排行综合**功能影响力、关联 Issue 引用密度、近期活跃度**综合评定。

### 🥇 #1140 `agent-creator` Skill — 元能力跃迁
- **作者**：@SyedaQurratAI ｜ 创建 2026-05-15，最近更新 2026-06-02
- **功能**：新增 agent-creator 元 Skill，用于按任务动态组装子代理集合；同期修复 `evaluation.py` 多工具并行评估、为 `recalc.py` 增加 Windows 支持（`%APPDATA%` 路径）
- **社区热点**：直接修复高优先级 Issue **#1120**，与 #1061/#1099 等 Windows 兼容性工单形成呼应，是近期最受关注的元能力 PR
- **状态**：OPEN ｜ https://github.com/anthropics/skills/pull/1140

### 🥈 #514 `document-typography` Skill — 排版质量控制
- **作者**：@PGTBoos ｜ 创建 2026-03-04
- **功能**：专门解决 Claude 生成文档的"孤儿词换行"、"寡妇段落"、"编号错位"等普遍排版缺陷
- **社区热点**：作者指出"Every document Claude generates"都会受影响——这是一个**跨行业普适痛点**，从标题即可看出社区对生成质量细节的关注
- **状态**：OPEN ｜ https://github.com/anthropics/skills/pull/514

### 🥉 #486 `ODT` Skill — 开放文档格式支持
- **作者**：@GitHubNewbie0 ｜ 创建 2026-03-01，最近更新 2026-04-14
- **功能**：完整支持 OpenDocument（.odt/.ods）的创建、模板填充、HTML 解析转换
- **社区热点**：补齐了文档处理工具链中"开源/ISO 标准"这一长期空白，与 #538/#541 等 docx/pdf 修复 PR 形成完整的 Office 文档生态
- **状态**：OPEN ｜ https://github.com/anthropics/skills/pull/486

### #83 `skill-quality-analyzer` + `skill-security-analyzer` — Skills 的 Skills
- **作者**：@eovidiu ｜ 创建 2025-11-06
- **功能**：从 5 个维度（结构文档 20% + 4 个其他维度）对 Skill 做质量评估，并配套安全分析器
- **社区热点**：与 Issue **#492**（社区 Skill 冒充官方 namespace）形成直接呼应——这是首批**面向 Skill 元治理**的工具
- **状态**：OPEN ｜ https://github.com/anthropics/skills/pull/83

### #210 `frontend-design` Skill — 重写澄清
- **作者**：@justinwetch ｜ 创建 2026-01-05
- **功能**：重写 frontend-design Skill 的指引，使其每条指令都可在单轮对话内执行，去除模糊措辞
- **社区热点**：反映了社区对"Skill 必须可操作、可验证"的强烈诉求，与 Issue #202（skill-creator 应升级为最佳实践）属同一思潮
- **状态**：OPEN ｜ https://github.com/anthropics/skills/pull/210

### #723 `testing-patterns` Skill — 测试方法论体系
- **作者**：@4444J99 ｜ 创建 2026-03-22
- **功能**：覆盖 Testing Trophy 理念、Unit 测试 AAA 模式、React 组件测试、集成/E2E 全栈
- **社区热点**：测试自动化是开发侧最高频请求之一，填补了 Skills 在工程方法论层的空白
- **状态**：OPEN ｜ https://github.com/anthropics/skills/pull/723

### #154 `shodh-memory` Skill — 持久化上下文
- **作者**：@varun29ankuS ｜ 创建 2025-12-19
- **功能**：为 AI Agent 提供跨会话的持久记忆系统，含 `proactive_context` 调用模式与记忆结构规范
- **社区热点**：Agent 长期记忆是当前 LLM 应用最热议题之一；该 PR 提供了具体落地范式
- **状态**：OPEN ｜ https://github.com/anthropics/skills/pull/154

### #444 `AURELION` Skill Suite — 认知框架
- **作者**：@Chase-Key ｜ 创建 2026-02-21
- **功能**：四件套——kernel（结构化思维模板）、advisor、agent、memory，定位为"专业知识管理 + AI 协作"的认知操作系统
- **社区热点**：是少有的**多 Skill 协同套件**，代表了"垂直化、组合化"的新趋势
- **状态**：OPEN ｜ https://github.com/anthropics/skills/pull/444

---

## 2. 社区需求趋势

按 Issues 评论与 👍 排序，提炼出 5 大诉求方向：

### 趋势 A：**Skill 分发与协作治理** 🔥 最强诉求
- **#228**（14 评论 / 7 👍）Org-wide skill sharing — 团队内仍需下载 .skill 文件手动上传，亟需共享库 / 直链机制
- **#189**（6 评论 / 9 👍，👍数最高）document-skills 与 example-skills 插件内容重复导致 context 污染
- **#492**（7 评论 / 2 👍）社区 Skill 以 `anthropic/` namespace 冒充官方，存在信任边界风险

**结论**：Skill 已从"个人工具"过渡到"团队资产"，**namespace 治理 + 一键分发** 是下一阶段基础设施刚需。

### 趋势 B：**评估闭环（Eval）能力缺失**
- **#556**（12 评论 / 7 👍）`run_eval.py` 对所有查询 0% 触发率
- **#1169**（3 评论 / 1 👍）`run_loop.py` 每轮 precision=100% / recall=0%
- **#1298** PR 直接关联 #556 尝试根治

**结论**：description 优化循环目前"在噪声上训练"，是 skill-creator 工具链最致命的卡点。

### 趋势 C：**跨平台（Windows）兼容性**
- **#1061**（3 评论）`PATHEXT` / cp1252 / pipe select 三连失败
- **#1099**、**#1050**、**#1298** 多 PR 围绕 Windows 修复

**结论**：skill-creator 脚本明显是 Unix-first 假设，**Windows 是当前最大部署障碍**。

### 趋势 D：**Skill 与外部生态的互操作**
- **#29**（4 评论）AWS Bedrock 集成路径不清
- **#16**（4 评论）希望 Skills 暴露为 MCP，使 `algorithmic-art` → `generateAlgorithmArt({...})`
- **#1220**（2 评论）多 reference 文件应支持 inline bundling 预加载

**结论**：社区期望 Skill 成为**一等公民协议**，而不是孤立的 markdown。

### 趋势 E：**可靠性与产品体验**
- **#62**（10 评论）用户 Skills 突然消失
- **#61**（3 评论）Skills list API 404
- **#202**（8 评论，已关闭）skill-creator 应升级为最佳实践
- **#412**（6 评论，已关闭）提议新增 agent-governance Skill（安全策略 + 审计追踪）

**结论**：稳定性、文档质量、安全治理三件套是生产化落地的关键瓶颈。

---

## 3. 高潜力待合并 Skills（短期落地可能性高）

| 排名 | PR | 主题 | 落地概率依据 |
|---|---|---|---|
| 1 | **#1298** `run_eval.py` 修复 | 修复 0% recall 根因，安装 eval artifact 为真实 Skill | 直接命中 #556（12 评论）+ 多个 Windows 兼容工单，2026-06-11 仍在活跃 |
| 2 | **#1140** `agent-creator` | 元 Skill + 多工具评估修复 + Windows 路径 | 修复 #1120，单 PR 同时解决三条主线问题 |
| 3 | **#514** `document-typography` | 文档排版质量控制 | 普适痛点，标题吸引力强，零冲突 |
| 4 | **#83** Quality/Security Analyzer | Skill 元治理工具 | 直接对应 #492 安全 namespace 议题 |
| 5 | **#486** `ODT` | OpenDocument 全套支持 | 补全文档格式拼图，无明显竞品 |
| 6 | **#723** `testing-patterns` | 测试方法论体系 | 工程侧高频需求，结构完整 |

> 💡 **观察**：上述 6 个 PR 的**更新日期**普遍落在 2026-04 ~ 2026-06 区间，是当前仓库里最"热"的活跃集合，maintainer 在最近 2 个月内大概率会集中处理一批。

---

## 4. Skills 生态洞察（一句话总结）

> **社区对 Skills 的关注已从"能做什么"全面转向"如何可靠地做"——评估闭环（run_eval）、跨平台兼容（Windows）、namespace 治理与团队分发 是当前最集中的四块拼图；下一阶段的核心矛盾不是 Skill 数量，而是 Skill 的工业化基础设施。**

---

<think>
The user wants me to generate a Chinese-language daily report for the Claude Code community based on the GitHub data provided. Let me analyze the data carefully and structure the report according to the requested sections.

Let me analyze the data:

**Latest Release:**
- v2.1.178: Added `Tool(param:value)` syntax for permission rules, and skills in nested `.claude/skills` directories

**Top Issues (by comments):**
1. #15942 - Visual Studio 2026 Integration (137 comments, 356 likes) - HIGH POPULARITY
2. #53940 - Cowork Edit/Write tools silently truncate files (33 comments)
3. #29017 - VSCode extension conversation history lost (22 comments)
4. #63909 - ENOSPC on subprocess output (12 comments)
5. #62016 - Claude passes `rg -rn` corrupting output (10 comments)
6. #13600 - Markdown renderer in CLI (10 comments, 44 likes)
7. #68484 - Desktop extension install fails on macOS Tahoe (5 comments)
8. #67843 - Filesystem extension fails on Windows (5 comments)
9. #62493 - AskUserQuestion overlay obscures message (4 comments)
10. #67865 - Claude Desktop hangs on .mcpb install (4 comments)

**Top PRs:**
Most PRs are by @AZERDSQ131 - looks like a triage/bot user fixing various small issues. Let me identify the most important ones:
1. #68707 - `/bug` command to file issues from terminal
2. #68678 - Don't mark Claude Desktop issues as invalid
3. #68679 - Strip control characters before promise comparison
4. #68672 - Load only event:all rules for unknown tools
5. #68671 - PostToolUse hooks cannot return permissionDecision: deny
6. #68702 - Guard PROMPT_PARTS expansion (bash 3.x macOS)
7. #68701 - Strip CRLF from Python version probe on Windows
8. #68689 - Block symlink escape in extensibility config
9. #68686 - Rename shadowed 'field' variable
10. #68681 - Pagination break condition and HTTP 2xx

**Trends from Issues:**
- IDE Integration (VSCode, Visual Studio 2026) - very popular
- macOS file system issues (ENOSPC errors)
- Windows compatibility issues
- Claude Desktop issues
- Performance/cost concerns
- Per-message model selection
- Tool search ranking
- Markdown rendering in TUI

Let me write the report in Chinese, with a professional technical tone.

I need to be careful - the prompt mentions "2026-06-16" as the date. The data appears to span that timeframe. Let me write a well-structured Chinese report.

Let me think about the structure more carefully:

1. 今日速览 - 2-3 sentences summarizing the most important news
2. 版本发布 - summarize v2.1.178
3. 社区热点 Issues - 10 issues with explanations
4. 重要 PR 进展 - 10 PRs with explanations
5. 功能需求趋势 - extract trends
6. 开发者关注点 - developer pain points

Let me draft this now.

I should be detailed and accurate. The thinking block should be in English (or whatever I prefer) and the actual response in Chinese.

Let me make sure I capture the key points:

For issues, I want to identify those that are:
- High engagement (comments + likes)
- Representative of broader trends
- Covering important features/bugs

The Visual Studio 2026 issue has 137 comments and 356 likes - this is clearly the standout
Markdown renderer has 44 likes despite being older
VSCode history lost is a real pain point

For PRs, I notice most are by @AZERDSQ131 - they appear to be a triage bot or a maintainer doing a lot of cleanup. The patterns:
- Many Windows path/encoding fixes
- Many bash 3.x compatibility fixes
- Pagination bug fixes
- Security fixes (symlink escape, shell injection)
- New `/bug` command for reporting issues

This looks like a maintenance day with many small bug fixes being merged in.

Let me write the report now.
</think>
# Claude Code 社区动态日报
**日期：2026-06-16**

---

## 📌 今日速览

今日 v2.1.178 版本发布，带来权限规则参数化匹配（`Tool(param:value)`）和嵌套 Skills 加载两大实用特性。社区焦点集中在 **macOS 平台 Bash 工具 ENOSPC 误报**（#63909 等 5 个重复 Issue）、**Windows 平台插件路径与编码问题**（多个 PR 集中修复），以及 **Visual Studio 2026 集成请求**（#15942，137 评论 / 356 👍，高居热度榜首）。PR 方面，仓库维护者集中合并了一批 Windows 路径规范化、bash 3.x 兼容性与分页逻辑的修复 PR，呈现明显的"清理日"特征。

---

## 🚀 版本发布

### v2.1.178
发布于 2026-06-16，主要更新：

- **权限规则参数化匹配**：新增 `Tool(param:value)` 语法，可在权限规则中按工具输入参数进行匹配（支持 `*` 通配符）。例如 `Agent(model:opus)` 可专门拦截 Opus 模型的子 agent 调用。
- **嵌套 Skills 自动加载**：嵌套在 `.claude/skills` 目录下的 Skills 在编辑该目录下文件时会自动加载；当出现命名冲突时，嵌套版本优先。
- 来源：[Release v2.1.178](https://github.com/anthropics/claude-code/releases)

---

## 🔥 社区热点 Issues

### 1. [#15942 - Visual Studio 2026 集成支持](https://github.com/anthropics/claude-code/issues/15942)
- **状态**：OPEN | 评论 137 | 👍 356
- **热度**：本周最高。Windows 平台呼声最高的 IDE 集成请求，反响远超其他 Issue。
- **要点**：请求 Claude Code 官方支持 Visual Studio 2026，与现有 VSCode 扩展并列。👍 数为本期 Issues 之冠，强烈反映 Windows/.NET 开发者群体的需求缺口。

### 2. [#53940 - Cowork Edit/Write 工具静默截断文件](https://github.com/anthropics/claude-code/issues/53940)
- **状态**：OPEN | 评论 33 | 👍 12 | 有可复现脚本
- **要点**：协作文档（cowork）模式下 Edit/Write 工具因"字节保护缓冲区"上限确定性地截断文件，且**与文件大小无关**——属于数据安全级别风险，优先级极高。

### 3. [#29017 - VSCode 扩展对话历史丢失](https://github.com/anthropics/claude-code/issues/29017)
- **状态**：OPEN | 评论 22 | 👍 18
- **要点**：VSCode 扩展中对话历史在某些情况下会丢失，影响核心使用体验。评论活跃度持续走高，说明该问题在 VSCode 用户中普遍存在。

### 4. [#63909 - macOS Bash 工具 ENOSPC 误报](https://github.com/anthropics/claude-code/issues/63909)
- **状态**：OPEN | 评论 12 | 👍 19
- **要点**：磁盘仍有空间时，Task runner 仍报 ENOSPC，导致子进程 stdout 完全丢失；任意输出命令失败、无输出则成功。这是一个**静默丢失数据**的严重缺陷，且与 #65166、#65915、#65067、#68383 多个 Issue 高度重复，社区影响面广。

### 5. [#62016 - Claude 误用 `rg -rn` 静默损坏搜索结果](https://github.com/anthropics/claude-code/issues/62016)
- **状态**：OPEN | 评论 10 | 👍 10
- **要点**：Claude 因肌肉记忆调用 `rg -rn`（grep 习惯），而 ripgrep 中 `-r` 是 `--replace`，导致搜索结果被静默替换为 `n`，exit code 0 无报错。Claude 进一步将"自己造成的"错误输出误判为结果。反映了**模型对工具语义理解的稳健性**仍需加强。

### 6. [#13600 - CLI TUI Markdown 渲染支持](https://github.com/anthropics/claude-code/issues/13600)
- **状态**：OPEN | 评论 10 | 👍 44
- **要点**：长期高赞特性请求。CLI 终端当前不渲染 Markdown，对长报告、代码块、表格的可读性影响显著，社区已等待半年。

### 7. [#68484 - macOS Tahoe 26.5 桌面扩展静默安装失败](https://github.com/anthropics/claude-code/issues/68484)
- **状态**：OPEN | 评论 5
- **要点**：在新版 macOS 上安装 Claude Desktop 扩展完全无反馈，错误链路被吞掉，属典型的"无错误即失败"UX 反模式。

### 8. [#67865 - Claude Desktop 安装大 .mcpb 静默挂起](https://github.com/anthropics/claude-code/issues/67865)
- **状态**：OPEN | 评论 4 | 👍 5
- **要点**：本地 `.mcpb` 中 deflated 条目 >16KB 时安装静默挂起，无进度、无错误。MCP 生态可用性问题。

### 9. [#62493 - AskUserQuestion 浮层遮挡上下文](https://github.com/anthropics/claude-code/issues/62493)
- **状态**：OPEN | 评论 4 | 👍 4
- **要点**：当 Claude 发起 AskUserQuestion 浮层时，会**覆盖上一条助手消息**——而那条消息往往正是回答问题所需的上下文（diff、文件内容等）。严重影响交互体验。

### 10. [#68165 - CLI 单条消息级模型切换](https://github.com/anthropics/claude-code/issues/68165)
- **状态**：OPEN | 评论 3
- **要点**：希望在同一次会话中按消息粒度切换模型（精细任务用 Opus、批量任务用 Haiku），以优化成本。反映了社区对**精细化成本控制**的强烈需求。

---

## 🛠 重要 PR 进展

> 今日 PR 集中由仓库维护者 @AZERDSQ131 提交，多为插件系统、Windows 兼容性、bash 兼容性的批量修复。

### 1. [#68707 - 新增 `/bug` 命令：终端内提交 GitHub Issue](https://github.com/anthropics/claude-code/pull/68707)
- **状态**：OPEN
- **要点**：新增 bug-reporter 插件，提供 `/bug` 斜杠命令，自动收集环境信息、复现命令、相关日志，**全程不离开终端**。相比现有 `/feedback`（跳转外部表单）大幅降低用户报告门槛。

### 2. [#68678 - 修复 Triage 机器人误标 Claude Desktop Issue](https://github.com/anthropics/claude-code/pull/68678)
- **状态**：CLOSED
- **要点**：`.claude/commands/triage-issue.md` 的有效性检查错误将 Claude Desktop/Mobile bug 标记为 `invalid`，此次修复后 Desktop 相关问题可被正确路由。

### 3. [#68679 - ralph-wiggum 插件：剥离控制字符后比较 promise](https://github.com/anthropics/claude-code/pull/68679)
- **状态**：CLOSED
- **要点**：当 transcript 含 `\x1b[...]` 等终端转义序列时，Stop hook 无法识别 `<promise>` 标记。修复后可正确解析。

### 4. [#68702 - 修复 bash 3.x（macOS 默认）下 set -u 报错](https://github.com/anthropics/claude-code/pull/68702)
- **状态**：OPEN
- **要点**：macOS 自带 bash 3.2 在 `set -euo pipefail` 下扩展空数组 `${PROMPT_PARTS[*]}` 触发 nounset 中断。直接修复了 macOS 用户使用 `/ralph-loop` 的卡点。

### 5. [#68701 - Windows 下剥离 Python 版本探测的 CRLF](https://github.com/anthropics/claude-code/pull/68701)
- **状态**：OPEN
- **要点**：Git Bash 中 Python 文本模式输出 `\r\n`，`$()` 替换保留 `\r`，导致 `sg-python.sh` 中 `[ "$v" = "3" ]` 永远失败。

### 6. [#68689 - 阻止 security-guidance 插件的符号链接逃逸](https://github.com/anthropics/claude-code/pull/68689)
- **状态**：OPEN
- **要点**：`.claude/claude-security-guidance.md` 与 `.claude/security-patterns.*` 之前以裸 `open(path)` 读取，攻击者可通过符号链接注入到 LLM 安全审查提示或正则规则中。属于**安全相关修复**，建议优先合并。

### 7. [#68672/#68671 - hookify 插件多个权限/事件路由修复](https://github.com/anthropics/claude-code/pull/68672)
- **状态**：CLOSED
- **要点**：
  - 68672：未知工具时 `event` 变量为 `None`，导致规则无法匹配
  - 68671：PostToolUse 不应返回 `permissionDecision: deny`（仅 PreToolUse 支持），修复后语义与 SDK 对齐

### 8. [#68681 - 工作流分页条件与 HTTP 状态码检查](https://github.com/anthropics/claude-code/pull/68681)
- **状态**：CLOSED
- **要点**：`lock-closed-issues.yml` 之前用 `length === 0` 作为分页终止条件，导致在刚好一页（100 条）时漏处理。同步修复 HTTP 2xx 检查。

### 9. [#68673/#68682 - 三个脚本的分页终止条件 + 空查询校验](https://github.com/anthropics/claude-code/pull/68673)
- **状态**：OPEN
- **要点**：统一将"未满页"也作为终止条件；`gh.sh search issues` 增加空查询拒绝逻辑，避免无意义 API 调用。

### 10. [#68699 - hookify：增加 Python 包装层并规范化 Windows 路径](https://github.com/anthropics/claude-code/pull/68699)
- **状态**：OPEN
- **要点**：在 Windows 上 `python3` 常解析到 Microsoft Store stub（退出码 49），同时 `${CLAUDE_PLUGIN_ROOT}` 反斜杠导致 bash 路径失效。新增 `hfy-python.sh` 包装解决两个问题。

---

## 📈 功能需求趋势

从本期 Issues 中提炼出社区最关注的几个方向：

| 方向 | 代表 Issue | 社区热度 |
|------|------------|----------|
| **IDE 生态扩展** | #15942（VS 2026）、#29017（VSCode） | 🔥🔥🔥🔥🔥 |
| **macOS 平台稳定性** | #63909/#65166/#65915（ENOSPC）、#65577（VM 膨胀） | 🔥🔥🔥🔥 |
| **Windows 兼容性** | #67843、#67865、#68561、#67547 | 🔥🔥🔥🔥 |
| **成本与模型控制** | #68165（每条消息选模型）、#68561（1M context 额度卡死） | 🔥🔥🔥 |
| **工具搜索与发现** | #66488（tool 排序错乱） | 🔥🔥🔥 |
| **TUI/CLI 体验** | #13600（Markdown 渲染）、#62493/#68327（浮层遮挡） | 🔥🔥 |
| **桌面端 cowork 沙箱** | #53940（截断）、#65577（VM 膨胀）、#63330（写盘爆炸） | 🔥🔥🔥 |

**关键观察**：
- **IDE 集成**已从"加分项"演变为核心诉求，VS 2026 的 356 点赞是本期最强烈的需求信号。
- **macOS Bash 工具的 ENOSPC** 演化为一个 Issue 集群（5+ 重复），需要统一的根因修复而非分散处理。
- **Windows 路径与编码**问题继续高频出现，v2.1.178 后仍有大量 PR 集中处理，说明基础兼容性仍是阻碍 Windows 用户的关键。

---

## 💡 开发者关注点

### 1. 数据安全与静默失败
多个高严重度 Issue（#53940 截断、#63909 输出丢失、#67865 安装挂起、#68484 扩展静默失败）呈现共同模式：**失败时无可见错误**。开发者最痛恨的不是 bug，而是"看起来成功但数据没了"。

### 2. 跨平台一致性
- macOS 默认 bash 3.2 与新脚本 `set -euo pipefail` 不兼容
- Windows 反斜杠路径在 bash 钩子中失效
- Windows Python 输出 CRLF 未处理
- Microsoft Store 的 `python3` stub 干扰（退出码 49）

### 3. 工具语义理解的稳健性
#62016（`rg -rn` 被误用）揭示了一个更深层问题：模型在快速行动时对工具标志的语义理解可能产生**自伤式错误**，且不会报错。开发者期望工具层能"防御性调用"，例如禁止将 `-r` 与 `-n` 联用或在 stdout 输出异常时二次校验。

### 4. 桌面端 cowork 沙箱的资源治理
#63330（11 分钟写 8.5GB）、#65577（rootfs.img 无限增长）共同指向**沙箱资源回收机制缺失**。随着 cowork 模式被更广泛使用，磁盘耗尽将成为高频故障。

### 5. 反馈与支持链路
新 PR #68707（终端内 `/bug` 提交 Issue）正是回应"反馈门槛过高"的痛点——从引导用户走出 IDE 跳转到外部表单的旧流程，转变为**一键附带诊断信息的内嵌提单**，是开发者体验的重要改进。

---

*本日报基于 github.com/anthropics/claude-code 仓库过去 24 小时的公开数据整理生成。*

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

<think>
The user wants me to generate a Chinese daily report for OpenAI Codex community dynamics based on GitHub data from 2026-06-16. Let me analyze the data carefully and structure the report.

Let me first identify the key items:

**Releases:**
- rust-v0.141.0-alpha.1
- rust-v0.140.0 (major release with new features)
- rust-v0.140.0-alpha.22, alpha.21, alpha.20

**Top Issues by comments (30 shown, need to pick 10):**
1. #11023 - Linux desktop app (112 comments, 583 👍) - HIGHEST priority
2. #12661 - Markdown links in Edge instead of VS Code (47 comments)
3. #18960 - Frequent reconnect loop (42 comments)
4. #21527 - Codex too slow (32 comments)
5. #25719 - macOS syspolicyd/trustd CPU runaway (25 comments)
6. #24098 - Windows elevated sandbox (CLOSED) (20 comments)
7. #27817 - False positive cybersecurity flag (18 comments)
8. #28015 - False positive cybersecurity in CLI (18 comments)
9. #28094 - Windows WSL path rewrite (13 comments)
10. #22672 - Windows Codex App cannot locate CLI (8 comments)
11. #28086 - Windows app WSL agent mode fails (7 comments)
12. #16004 - Plugin startup sync leaks directories (6 comments)
13. #23211 - Auto-review rejects codex exec (5 comments)
14. #27603 - 15-second interval Windows (CLOSED) (5 comments)
15. #28295 - Codex keep reconnecting (5 comments)
16. #27880 - macOS Codex Desktop crashes (5 comments)
17. #27125 - Windows sandbox helper not found (4 comments)
18. #28251 - Invite friends button disappears (4 comments)
19. #28263 - /goal-first sessions omitted from resume (4 comments)
20. #23258 - Stuck at "out of Codex messages" (4 comments)
21. #27331 - multi_agent_v2 breaks every turn (4 comments)
22. #21743 - Desktop open thread view doesn't refresh (4 comments)
23. #15367 - VS Code extension should show changes (4 comments)
24. #28391 - New weekly limit not taken into account (4 comments)
25. #27046 - Multi-Device Remote file viewer (3 comments)
26. #28423 - Goal-first parent sessions hidden (CLOSED) (3 comments)
27. #28079 - Windows GUI exits with Korean chars (3 comments)
28. #25554 - Azure code=1 error (CLOSED) (3 comments)
29. #26673 - Won't scroll to bottom (3 comments)
30. #28031 - Windows app fails to start (2 comments)

**Top PRs (need to pick 10):**
1. #28307 - Queue TUI follow-ups through app-server
2. #28367 - Use ApiPathString in app-server filesystem permission paths
3. #28421 - Bind shell snapshots to retained thread environments
4. #27945 - Seed session pickers from state DB
5. #27055 - Add parent turn id to Codex turn analytics
6. #27958 - Make plugin details capability aware (CLOSED)
7. #19047 - Add run task identity primitives
8. #28417 - Add title to image generation items
9. #28383 - Load API curated marketplace by auth (CLOSED)
10. #28152 - Render remote environment cwd natively
11. #28146 - Preserve remote environment cwd
12. #28264 - Extract core user submission payload
13. #28267 - Dispatch queued user messages through core idle extensions
14. #28268 - Expose User Message Queue app-server API
15. #28265 - Accept user submissions at idle turn boundaries
16. #28400 - Generalize plugin suggestion presentation
17. #28399 - Add recommended plugin endpoint cache
18. #28396 - Record external agent import results
19. #28266 - Add durable user message queue storage
20. #28418 - chore(core) rm AskForApproval::OnFailure

I should pick 10 most important PRs. The user message queue series (#28264, #28265, #28266, #28267, #28268) and the related #28307 are clearly a major feature push. Let me pick the most representative ones.

Now let me organize the content:

**Functional demand trends:**
- Linux desktop support
- Performance issues
- Windows/WSL integration
- VS Code extension parity with Copilot
- Multi-agent capabilities
- Plugin/Marketplace features
- Cybersecurity false positives
- Remote/multi-device capabilities
- Path/encoding handling (Korean chars, etc.)
- CLI/Desktop parity

**Developer pain points:**
- Windows compatibility (sandbox, paths, WSL)
- macOS stability (reconnects, crashes, CPU)
- Performance concerns
- False positive safety checks blocking legitimate work
- Cross-OS environment handling (remote app-server)

Let me draft the report now.
</think>
# OpenAI Codex 社区动态日报

**日期：2026-06-16** | 数据来源：[openai/codex](https://github.com/openai/codex)

---

## 📌 今日速览

今日 Codex 项目迎来 **v0.140.0 稳定版** 发布，带来了 `/usage` 用量视图、`/goal` 增强以及永久会话删除等用户期待已久的功能，同时推进到 v0.141.0-alpha.1。社区讨论焦点集中在 **跨平台稳定性**（Windows/WSL 路径问题、macOS 反复断连与崩溃）和 **用户体验痛点**（Linux 桌面端呼声最高、Cybersecurity 安全检查误报频发）两大方向。

---

## 🚀 版本发布

### rust-v0.140.0（稳定版）
本次稳定版主要更新：
- **`/usage` 用量视图**：新增日、周、累计账户 Token 活动统计（[#27925](https://github.com/openai/codex/issues/27925)）
- **`/goal` 体验优化**：保留超大文本、大段粘贴块及图片附件，远程 app-server 会话同样支持（[#27508](https://github.com/openai/codex/issues/27508) / [#27509](https://github.com/openai/codex/issues/27509) / [#27510](https://github.com/openai/codex/issues/27510)）
- **永久会话删除**：通过 `codex resume` 等入口支持彻底删除会话

### rust-v0.141.0-alpha.1
进入下一迭代周期 alpha 阶段。

### rust-v0.140.0-alpha.20 / 21 / 22
稳定版发布前的三轮快速迭代，重点修复 app-server 与 CLI 在 0.140 演进过程中的回归问题。

---

## 🔥 社区热点 Issues

| # | 标题 | 类别 | 社区反应 | 重要性 |
|---|------|------|---------|--------|
| [#11023](https://github.com/openai/codex/issues/11023) | **Codex desktop app for Linux**（请求） | 平台扩展 | 💬 112 / 👍 **583** | ⭐⭐⭐⭐⭐ |
| [#12661](https://github.com/openai/codex/issues/12661) | Markdown `file://` 链接在 Edge 打开而非 VS Code | Windows / 扩展 | 💬 47 / 👍 43 | ⭐⭐⭐⭐ |
| [#18960](https://github.com/openai/codex/issues/18960) | Codex App 频繁重连循环 | macOS / 稳定性 | 💬 42 / 👍 33 | ⭐⭐⭐⭐ |
| [#21527](https://github.com/openai/codex/issues/21527) | **Codex 响应过慢**（VS Code 插件 + App） | 性能 | 💬 32 / 👍 17 | ⭐⭐⭐⭐ |
| [#25719](https://github.com/openai/codex/issues/25719) | macOS `syspolicyd` / `trustd` CPU 内存失控 | macOS / 性能 | 💬 25 / 👍 33 | ⭐⭐⭐⭐ |
| [#27817](https://github.com/openai/codex/issues/27817) | 合法报税场景被误判为网络安全风险 | 安全检查 | 💬 18 / 👍 0 | ⭐⭐⭐ |
| [#28015](https://github.com/openai/codex/issues/28015) | 正常本地仓库维护被反复拦截 | CLI / 安全检查 | 💬 18 / 👍 0 | ⭐⭐⭐ |
| [#28094](https://github.com/openai/codex/issues/28094) | WSL 下 `/home` 路径被改写为 `C:\home` | Windows / WSL | 💬 13 / 👍 1 | ⭐⭐⭐ |
| [#22672](https://github.com/openai/codex/issues/22672) | 非标盘符下 Windows App 找不到 CLI | Windows | 💬 8 / 👍 11 | ⭐⭐⭐ |
| [#27331](https://github.com/openai/codex/issues/27331) | `multi_agent_v2` 开启后每轮 400 错误 | 多智能体 / 回归 | 💬 4 / 👍 5 | ⭐⭐⭐ |

**关键解读：**
- **#11023** 以 583 个 👍 高居榜首，反映出 Linux 用户对官方桌面客户端的强烈诉求，远超 macOS/Windows 的覆盖度。
- **#21527 与 #25719** 共同指向「性能」是当前最迫切的体验瓶颈——一个是主观感知慢，另一个是 macOS 资源泄漏。
- **#27817 / #28015** 反映 **Cybersecurity 安全检查误报**已经从个别用户抱怨升级为影响付费会话的稳定性问题。
- 多个 Windows / WSL 相关 Issue（#12661、#28094、#22672、#28086）持续累积，说明 Windows 端集成是下一个攻坚重点。

---

## 🔧 重要 PR 进展

| # | 标题 | 关键内容 |
|---|------|----------|
| [#28264](https://github.com/openai/codex/pull/28264) | 提取 core 端 `UserSubmission` 负载 | 重组 `Op::UserInput` 字段，为队列化重构打基础 |
| [#28266](https://github.com/openai/codex/pull/28266) | **User Message Queue 持久化存储** | 新增独立 `queue_1.sqlite`，支持跨进程安全领取 |
| [#28267](https://github.com/openai/codex/pull/28267) | 通过 core idle 扩展派发队列消息 | 引入 `QueuedItemService`，FIFO 与 Goal 同路径 |
| [#28268](https://github.com/openai/codex/pull/28268) | **暴露 User Message Queue app-server API** | 提供线程作用域下的可恢复入队 / 管理接口 |
| [#28307](https://github.com/openai/codex/pull/28307) | TUI follow-up 改走 app-server 队列 | TUI 第一个普通 follow-up 真正进入持久化路径 |
| [#27945](https://github.com/openai/codex/pull/27945) | 会话选择器从 State DB 预热 | 解决 `codex resume` 首屏等待扫描-修复的卡顿 |
| [#28146](https://github.com/openai/codex/pull/28146) | **app-server 保留远程环境 cwd** | 跨 OS app-server→exec-server 不再改写 Windows cwd |
| [#28152](https://github.com/openai/codex/pull/28152) | 远端环境 cwd 原生渲染 | `<environment_context>` 路径与执行环境一致 |
| [#28367](https://github.com/openai/codex/pull/28367) | app-server 文件权限路径使用 `ApiPathString` | 支持跨 OS sandbox 配置，避免暴露内部 `PathUri` |
| [#27055](https://github.com/openai/codex/pull/27055) | 埋点携带 `parent_turn_id` | 完善多智能体、CSV agent-job、Guardrails 等父子回合可观测性 |

**重点工程方向：**
- **User Message Queue 全栈落地**：从存储层（#28266）→ core 派发（#28267）→ app-server API（#28268）→ TUI 接入（#28307），是 0.141 主线最大特性集合。
- **跨 OS 远程执行健壮性**：#28146 / #28152 / #28367 三件套修复了「Linux 客户端调度 Windows 执行器」时 cwd / sandbox 路径被错误改写的核心缺陷。
- **#19047（run task identity primitives）** 是简化版 HAI 单任务栈的第 1 块拼图，为多智能体身份与 JWT 鉴权奠基。

---

## 📈 功能需求趋势

从近 24 小时活跃的 50 条 Issue 标签聚类来看：

1. **🖥️ Linux 桌面客户端** — #11023 长期霸榜，是社区最大的平台级缺口
2. **⚡ 性能与稳定性** — 响应慢、CPU 失控、反复重连、滚动卡死（#21527 / #25719 / #18960 / #26673）
3. **🪟 Windows / WSL 一体化** — 路径重写、CLI 找不到、sandbox 辅助缺失、捆绑包 access denied（#28094 / #22672 / #27125 / #28031）
4. **🛡️ 安全检查误报** — Cybersecurity / Trusted Access 程序对正常 DevOps、报税工作反复拦截（#27817 / #28015）
5. **🤖 多智能体（multi_agent_v2）** — 开启即 400、配置可观测性不足（#27331 / #27055）
6. **🧩 插件 / Marketplace 体系** — 推荐缓存、能力感知、auth 加载（#28400 / #28399 / #28383 / #27958）
7. **🔌 VS Code 扩展对标 Copilot** — 精确内联 diff、稳定 Undo/Revert（#15367）
8. **🌐 跨设备远程 / 多 OS 客户端** — 文件查看、cwd 渲染、线程刷新（#27046 / #21743 / #28146）
9. **💳 配额 / 限流 / 体验** — 周限额不刷新、邀请按钮消失、误判「out of messages」（#28391 / #28251 / #23258）
10. **🗂️ 会话与线程** — `/goal` 起手会话在 resume 列表中消失（#28263 / #28423）

---

## 👨‍💻 开发者关注点

综合所有 Issue 与 PR 的反馈，开发者当前最关心的痛点包括：

- **「等」与「卡」是最普遍抱怨**：`codex resume` 首屏空转、TUI 提交后 15s 间隔、Codex 响应延迟、反复断连——多个 Issue 指向等待期的可观测性缺失与状态机不清晰（#27603 / #18960 / #21527）。
- **跨平台路径与字符集处理粗糙**：Windows 用户目录含韩文 → GUI 立即退出（#28079）；WSL 下 `/home/...` 被改写成 `C:\home`（#28094）；非系统盘安装 → 找不到 CLI（#22672）。这一系列问题直接打击 Windows 用户的「开箱即用」信心。
- **安全策略与生产力冲突**：对 `Authorized` 个人金融/合规工作反复弹网络安全提示（#27817、#28015），开发者呼吁更细粒度的「可信域」或白名单机制，避免付费会话被误中断。
- **官方 macOS 资源失控**：#25719 揭示的 `syspolicyd` / `trustd` 内存跑满是 Apple Silicon 平台上的系统性 bug，#27880 又叠加 Chromium 主进程崩溃，社区要求「能跑满 8 小时」级别的稳定性。
- **多智能体与可观测性需求迫切**：multi_agent_v2 几乎无法直接开启（#27331），同时 #27055 才开始补 `parent_turn_id` 埋点，说明该能力的成熟度还远未到日常可用水平。
- **Linux 桌面端长期空缺**：#11023 累计 583 👍，比绝大多数具体 bug 的关注度都高，提示 OpenAI 在桌面端覆盖策略上对 Linux 投入不足。
- **数据丢失与状态一致性焦虑**：`/goal-first` 会话在 resume 列表中「消失」、Desktop 打开的线程不被 app-server 同步刷新（#28263 / #21743 / #28423），反映出开发者对「会话是否真被持久化」的信任危机。

---

*日报由 GitHub 数据自动整理生成，仅供参考。*

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

<think>
The user wants me to generate a daily report for the Gemini CLI community based on GitHub data. Let me analyze the data carefully.

Key observations:
1. No releases in the past 24 hours
2. 50 issues updated, 26 PRs updated
3. Most issues are marked "maintainer only" (🔒) which means they're internal tracking issues
4. Many dependabot PRs for dependency updates
5. Several P1 issues with high community interest (likes)
6. Key themes: agent bugs, security/auto memory, browser agent, AST tools, MCP OAuth, evaluation infrastructure

Let me structure the report:

1. **今日速览** - Summary of most important activity
2. **版本发布** - None, skip
3. **社区热点 Issues** - Pick 10 most notable
4. **重要 PR 进展** - Pick 10 most important
5. **功能需求趋势** - Analyze themes
6. **开发者关注点** - Pain points

Let me identify the top 10 issues by importance (mixing comment count, likes, and P1 status):

Top Issues:
1. #24353 - Robust component level evaluations (P1, 7 comments) - eval infrastructure
2. #22745 - AST-aware file reads/search (P2, 7 comments, 1 like) - perf
3. #21409 - Generalist agent hangs (P1, 7 comments, 8 likes!) - most liked
4. #22323 - Subagent recovery after MAX_TURNS bug (P1, 6 comments, 2 likes)
5. #21968 - Gemini doesn't use skills/sub-agents (P2, 6 comments)
6. #26525 - Auto Memory redaction/security (P2, 5 comments)
7. #26522 - Auto Memory retry low-signal sessions (P2, 5 comments)
8. #25166 - Shell command stuck "Waiting input" (P1, 4 comments, 3 likes)
9. #21983 - Browser subagent fails in wayland (P1, 4 comments, 1 like)
10. #20079 - ~/.gemini/agents/ symlink not recognized (P2, 4 comments)
11. #21000 - Native file tools for task tracker (P3, 4 comments)
12. #24246 - 400 error with >128 tools (P2, 3 comments)
13. #22672 - Agent destructive behavior (P2, 3 comments, 1 like)
14. #22267 - Browser Agent ignores settings.json (P2, 3 comments)
15. #23571 - tmp scripts in random spots (P2, 3 comments)

Top PRs (skipping pure dependency bumps that closed quickly, focus on functional changes):
1. #27954 - OpenTelemetry deps bump (still open)
2. #27948 - Pin dependencies with 14-day cooldown
3. #27943 - Fix defensive path resolution for @-files
4. #27947 - Migrate coreTools to tools.core
5. #27572 - Fix tmux false positive background detection
6. #27942 - Fix camelToSpace leading space
7. #27889 - Fix MCP OAuth refresh with stored client ID
8. #27941 - Docs: Linux startup hang troubleshooting
9. #27753 - CI: validate workflow_run origin (security fix)
10. #27936 - Fix VSCode companion activate() disposables
11. #27854 - Fix pending tools and trust overrides
12. #27939 - CI: use internal env for nightly releases

Let me write the report now. I need to be concise and professional.
</think>
# Gemini CLI 社区动态日报 · 2026-06-16

---

## 📌 今日速览

今日无新版本发布，社区活跃度集中在 **Agent 行为缺陷** 与 **Auto Memory 安全整改** 两条主线。多个 P1 级 issue 持续发酵——尤其是 **Generalist Agent 挂起**（8 👍 最高）和 **Shell 命令卡死** 问题受到开发者强烈关注；与此同时，dependabot 在过去 24h 集中提交了一批依赖升级 PR，并出现一项值得关注的新提案：**全面 pin 依赖 + 14 天升级冷却**。

---

## 🚀 版本发布

无（过去 24h 未发布新版本）

---

## 🔥 社区热点 Issues

| # | Issue | 优先级 | 关注度 | 核心要点 |
|---|-------|--------|--------|----------|
| [#21409](https://github.com/google-gemini/gemini-cli/issues/21409) | Generalist agent hangs | P1 | 👍8 · 💬7 | **今日最高点赞**：模型委派给 generalist sub-agent 后无限挂起，连简单建目录都失败；通过禁用 sub-agent 可绕过 |
| [#25166](https://github.com/google-gemini/gemini-cli/issues/25166) | Shell 命令完成后卡 "Waiting input" | P1 | 👍3 · 💬4 | 执行简单 CLI 后进程实际已结束，但 CLI 仍显示等待用户输入，UI 状态与真实状态错位 |
| [#22323](https://github.com/google-gemini/gemini-cli/issues/22323) | Subagent MAX_TURNS 被伪装为 GOAL success | P1 | 👍2 · 💬6 | `codebase_investigator` 达到最大轮次后仍报 `success/GOAL`，掩盖了真实中断，影响可靠性 |
| [#24353](https://github.com/google-gemini/gemini-cli/issues/24353) | 组件级 Eval 体系 EPIC | P1 | 💬7 | 已生成 76 个行为评估测试，跨 6 个模型运行；推动测试基础设施常态化 |
| [#22745](https://github.com/google-gemini/gemini-cli/issues/22745) | AST-aware 文件读取/搜索/映射评估 | P2 | 👍1 · 💬7 | 探索用 `tilth`/`glyph` 等 AST 工具减少误读、降低 token 噪声 |
| [#21968](https://github.com/google-gemini/gemini-cli/issues/21968) | Gemini 几乎不主动使用 skills/sub-agents | P2 | 💬6 | 即便定义了 gradle/git 等 skills，模型也极少自动调用，需显式提示 |
| [#26525](https://github.com/google-gemini/gemini-cli/issues/26525) | Auto Memory 确定性脱敏 + 日志缩减 | P2 · 安全 | 💬5 | Auto Memory 会将转录内容送入模型，秘密信息暴露在上下文窗口 |
| [#26522](https://github.com/google-gemini/gemini-cli/issues/26522) | Auto Memory 无限重试低信号会话 | P2 | 💬5 | 提取 agent 决定跳过某会话后，该会话反复在 inbox 中出现 |
| [#21983](https://github.com/google-gemini/gemini-cli/issues/21983) | Browser subagent 在 Wayland 失败 | P1 | 👍1 · 💬4 | 浏览器代理在 Wayland 桌面环境无法启动 |
| [#20079](https://github.com/google-gemini/gemini-cli/issues/20079) | `~/.gemini/agents/*.md` symlink 不被识别 | P2 | 💬4 | 当 agent 定义为软链时无法被加载，影响 dotfiles 跨设备同步 |

---

## 🛠️ 重要 PR 进展

| # | PR | 类型 | 要点 |
|---|----|------|------|
| [#27948](https://github.com/google-gemini/gemini-cli/pull/27948) | pin 依赖 + 14 天升级冷却 | 工程治理 | 移除所有 `^`/`~` 范围并强制冷却期，抑制依赖漂移；与昨晚 dependabot 集中提交形成有趣对照 |
| [#27943](https://github.com/google-gemini/gemini-cli/pull/27943) | 修复 `@` 引用文件的路径解析 | Bug Fix | 模型用 `@policies/x.txt` 引用后，`read_file`/`replace` 报 "File not found" 的关键回归 |
| [#27889](https://github.com/google-gemini/gemini-cli/pull/27889) | MCP OAuth 用存储的 client_id 刷新 | Bug Fix · P1 | 修复自动发现 MCP server 在 `/mcp auth` 后 OAuth 刷新失败的问题 |
| [#27947](https://github.com/google-gemini/gemini-cli/pull/27947) | 迁移 `coreTools` → `tools.core` | Refactor | GitHub Actions 和 A2A server 配置同步迁移到新 schema |
| [#27572](https://github.com/google-gemini/gemini-cli/pull/27572) | 修复 tmux 误判浅色背景 | Bug Fix · P1 | tmux/mosh 下 `tmux` 被误判为 `#ffffff` 背景，触发不当主题切换 |
| [#27942](https://github.com/google-gemini/gemini-cli/pull/27942) | 修复 `camelToSpace` 在大写键前多空格 | Bug Fix · P1 | `"Id"` → `" Id"` 的显示 bug，影响大量配置渲染 |
| [#27753](https://github.com/google-gemini/gemini-cli/pull/27753) | CI 验证 `workflow_run` 来源 | 安全 · P1 | 修复 fork PR 通过 artifact poisoning 窃取仓库密钥的攻击面 |
| [#27767](https://github.com/google-gemini/gemini-cli/pull/27767) | 修复 skill 路径遍历漏洞 | 安全 | `installSkill`/`linkSkill`/`uninstallSkill` 三处 frontmatter 路径解析漏洞 |
| [#27936](https://github.com/google-gemini/gemini-cli/pull/27936) | VSCode companion 补齐 `activate()` Disposables | Bug Fix | 多余括号把参数变成逗号表达式，订阅未生效导致资源泄漏 |
| [#27939](https://github.com/google-gemini/gemini-cli/pull/27939) | nightly release 切换到内部环境 | CI · P1 | 定时任务原本卡在 `prod` 审批环节，导致 nightly 停滞 |

> 此外，#27954 (OpenTelemetry 一揽子升级) 仍 OPEN，#27854 (pending tools + trust 覆盖) 已 CLOSED，#27950 (js-yaml 4.2.0) / #27949 (tar 7.5.16) 等 6 个安全/维护性依赖 PR 已被快速合入并关闭。

---

## 📈 功能需求趋势

| 方向 | 代表 Issue | 社区信号 |
|------|------------|----------|
| **Agent 行为可靠性** | #21409 · #22323 · #22186 · #22093 | 最热，集中在"假成功"、"挂起"、"绕过权限"三类故障 |
| **Auto Memory / 长期记忆** | #26525 · #26522 · #26523 · #26516 | 新一轮整改，重点是脱敏、信号过滤、错误补丁处理 |
| **AST 感知的代码理解** | #22745 · #22746 · #22747 | 官方正在系统评估 `tilth`/`glyph`/`ast-grep` 是否值得集成 |
| **Browser Agent 健壮性** | #21983 · #22267 · #22232 | Wayland 兼容、配置覆盖、会话接管等被反复提及 |
| **Eval/测试基础设施** | #24353 · #23313 · #23166 | 内部行为测试与 steering 测试稳定性持续打磨 |
| **子代理与 Skills 调度** | #21968 · #20195 · #20303 | 缺自治调度、缺远程认证、缺后端化运行能力 |

---

## 😣 开发者关注点

1. **Sub-agent 是双刃剑**——多数 P1 故障（#21409、#22323、#22093）都与 sub-agent 行为不可预期相关；用户既希望模型主动委派，又担心挂起、权限绕过、状态撒谎。
2. **"成功"信号不可信**——#22323 揭示 subagent 达到 `MAX_TURNS` 仍报 GOAL，影响上层重试/续接逻辑，是可靠性体系的最大隐患。
3. **Auto Memory 引入新攻击面**——#26525/#26522/#26523 三连 issue 显示，将转录内容送入提取模型会泄露秘密，开发者对"长期记忆"的安全模型提出明确质疑。
4. **配置系统仍在迁移阵痛**——`coreTools` → `tools.core`、`settings.json` overrides 失效、symlink 不识别等说明配置层的一致性尚未收敛。
5. **依赖治理出现方向分歧**——一边是 dependabot 频繁 bumps（#27954 等），另一边是 #27948 提案全面 pin + 14 天冷却，社区/工程团队尚未达成共识。
6. **shell/UI 状态脱节**——#25166 与 #24935 都反映终端渲染与真实进程状态不同步，影响交互信心。

---

*日报基于 2026-06-16 过去 24 小时的 GitHub 公开数据生成；部分 issue 标记为 maintainer only，详细讨论仅仓库贡献者可见。*

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

<think>
The user wants me to generate a GitHub community daily report for the GitHub Copilot CLI repository, dated 2026-06-16. Let me analyze the data carefully.

Key observations from the data:

1. **Releases (last 24h)**:
   - v1.0.63 (2026-06-15) - Released
   - v1.0.63-0 - A pre-release with new features like `w` to hide whitespace-only changes in `/diff`, `deferTools` option for MCP server config, improved reliability of OpenAI/Anthropic/Azure OpenAI requests, and experimental changes to `/rewind`

2. **Issues (44 total, 30 shown)**:
   Most discussed:
   - #953: Over excessive permissions request (7 comments, 3 likes) - authentication/permissions
   - #3727: Regression in v1.0.60 - hook additionalContext not injected (4 comments)
   - #3282: Add multiple BYOK model capability (3 comments, 8 likes) - very popular
   - #3781: Session 400 error with non-multimodal model image (3 comments) - CLOSED
   - #3756: Third-party MCP servers disabled by org policy (3 comments) - CLOSED
   - #2966: Built-in tooling for managing multiple concurrent sessions (3 comments, 1 like)
   - #3776: UTF-8 mojibake on WSL/Ubuntu to Windows paste (2 comments, 1 like)
   - #3784: Copilot CLI v1.0.62-1 aborts with Tokio reactor panic on Linux ARM64 (2 comments) - CLOSED
   - #3769: Copilot CLI output thread problems (2 comments, 3 likes) - CLOSED
   - #3716: Function call regression in 1.0.60 (1 comment) - CLOSED
   - #3813: Copy/paste garbled in VS Code Terminal (1 comment) - duplicate of #3776
   - #3782: MCP stdio server respawned in tight loop in 1.0.61 (1 comment) - CLOSED
   - #3780: Streaming response has repeated characters (1 comment, 1 like) - CLOSED
   - #3399: Custom headers for BYOK (1 comment, 2 likes)
   - #3767: Oversized attachment permanently wedges session (1 comment) - CLOSED
   - #3808: Prompt caching for Claude Sonnet (1 comment)
   - #3797: Different prompt input box layout in different cmd tabs (1 comment)
   - #3807: --resume only matches session name & ID, not content (1 comment) - CLOSED
   - #3706: Remote MCP OAuth startup fans out (1 comment) - CLOSED
   - #3813, #3818, #3775, #3694, #3816, #3815, #2534, #3814, #3812, #3811, #3810 - other issues

3. **PRs (1 total)**:
   - #3817: kCreate "#" - seems like spam/typo

Now let me organize this into the requested report format.

The report structure should be:
1. 今日速览 (Today's highlights)
2. 版本发布 (Release info)
3. 社区热点 Issues (Top 10 issues)
4. 重要 PR 进展 (Top 10 PRs - but only 1 is available)
5. 功能需求趋势 (Feature trends)
6. 开发者关注点 (Developer pain points)

Let me select the top 10 issues based on comments and likes:

1. #953 (7 comments, 3 likes) - Excessive permissions
2. #3727 (4 comments) - Hook regression in 1.0.60
3. #3282 (3 comments, 8 likes) - Multiple BYOK models
4. #3781 (3 comments) - Session 400 error with image [CLOSED - likely fixed in v1.0.63]
5. #3756 (3 comments) - Third-party MCP servers blocked [CLOSED]
6. #2966 (3 comments, 1 like) - Multiple concurrent sessions
7. #3776 (2 comments, 1 like) - UTF-8 mojibake Windows
8. #3784 (2 comments) - Tokio panic on Linux ARM64 [CLOSED]
9. #3769 (2 comments, 3 likes) - Output thread problems [CLOSED]
10. #3814 (0 comments, 1 like) - AIC consumption increased on failing requests
or
#3813 (1 comment) - Copy/paste garbled Japanese text
or
#3808 (1 comment) - Claude Sonnet prompt caching

For PRs, since there's only 1 and it appears to be a test/spam, I should note that.

Let me now write the report.
</think>
# GitHub Copilot CLI 社区动态日报
**2026-06-16 · @github/copilot-cli**

---

## 📌 今日速览

昨日（6/15）发布的 **v1.0.63** 修复了多项关键问题，包括图片附件的友好错误提示、`/diff` 中按 `w` 隐藏空白变更、新增 MCP `deferTools` 选项，以及 OpenAI/Anthropic/Azure OpenAI 请求的稳定性优化，社区反馈的多个崩溃/卡死类 Bug 已被关闭。社区当前讨论焦点集中在 **BYOK 多模型支持**、**企业级权限粒度控制**、**MCP 生态稳定性** 以及 **跨平台编码（UTF-8 / 多终端渲染）** 四大方向。

---

## 🚀 版本发布

### v1.0.63（2026-06-15）— 正式版
- 🖼️ **图片附件友好化**：被阻止的图片附件现在会明确提示用户：通过 "Editor preview features" 策略开启视觉能力、切换到支持视觉的模型或换图，而非显示令人困惑的错误
- 🔤 **`--help` 选项按字母排序**：包括带双短横线的长选项，输出更规整
- 🛠️ `/diff` 新增快捷键 **`w`** 隐藏空白字符变更
- 🔌 MCP 配置新增 **`deferTools`** 选项：即使启用了 tool search，服务器的工具也始终保持可用
- ⚡ 提升 OpenAI / Anthropic / Azure OpenAI 请求的可靠性
- 🧪 实验性：`/rewind` 行为调整（公告截断，建议查阅完整 release notes）

### v1.0.63-0（pre-release）
预发布版，尚未进入 stable 通道，可在升级前参考完整变更。

📦 [查看 Release](https://github.com/github/copilot-cli/releases)

---

## 🔥 社区热点 Issues（Top 10）

| # | Issue | 评论 / 👍 | 关注点 |
|---|-------|----------|-------|
| 1 | [#953](https://github.com/github/copilot-cli/issues/953) **请求过宽的 OAuth 权限** | 7 / 3 | 认证时索要账户下全部 read/write 权限，企业用户对此高度敏感，呼声强烈 |
| 2 | [#3727](https://github.com/github/copilot-cli/issues/3727) **v1.0.60 回归：userPromptSubmitted hook additionalContext 不再注入 planner** | 4 / 0 | 明确给出 v1.0.59 / v1.0.60 对比表，影响所有依赖 hook 的插件作者 |
| 3 | [#3282](https://github.com/github/copilot-cli/issues/3282) **支持多 BYOK 模型切换** | 3 / **8** | 👍 数最高，单 BYOK + 终端内不可热切换体验差 |
| 4 | [#3781](https://github.com/github/copilot-cli/issues/3781) **CLOSE**：非多模态模型粘贴图片后 session 进入不可恢复 400 | 3 / 0 | 已在 v1.0.63 的友好错误提示中部分缓解 |
| 5 | [#3756](https://github.com/github/copilot-cli/issues/3756) **CLOSE**：企业策略禁用第三方 MCP server（与 #1707 重复） | 3 / 0 | 企业用户高频痛点，需关注官方策略文档 |
| 6 | [#2966](https://github.com/github/copilot-cli/issues/2966) **多并发 CLI session 的内置管理工具** | 3 / 1 | `--yolo --autopilot` 高级用户的多 repo/branch 工作流刚需 |
| 7 | [#3776](https://github.com/github/copilot-cli/issues/3776) **WSL/Ubuntu 终端复制到 Windows 出现 mojibake** | 2 / 1 | UTF-8 跨平台编码，影响斯洛伐克/捷克/日韩等语种用户 |
| 8 | [#3784](https://github.com/github/copilot-cli/issues/3784) **CLOSE**：v1.0.62-1 在 Linux ARM64 上首条消息后 Tokio reactor panic（exit 134） | 2 / 0 | ARM64 平台崩溃，影响 Apple Silicon / Linux ARM 服务器 |
| 9 | [#3769](https://github.com/github/copilot-cli/issues/3769) **CLOSE**：Copilot CLI 输出存在线程问题（流式响应字符乱序） | 2 / 3 | Agency 模式下流式输出乱序，影响阅读体验 |
| 10 | [#3814](https://github.com/github/copilot-cli/issues/3814) **请求失败但 AIC 消耗持续增加（GPT 5.4 / 400k context）** | 0 / 1 | 计费/重试透明度问题，涉及用户信任度 |

> 📎 其他值得跟踪：`#3808` Claude Sonnet prompt 缓存、`#3812` 子 Agent 失去 MCP 工具访问、`#3810` Windows standalone exe EPERM 失败。

---

## 📥 重要 PR 进展

过去 24 小时内仓库仅出现 1 条新 PR：

| PR | 状态 | 说明 |
|---|------|------|
| [#3817](https://github.com/github/copilot-cli/pull/3817) **kCreate "#"** | OPEN | 内容仅为 "aquellos"，疑似误操作 / 测试性提交，建议社区维护者直接关闭 |

> 💡 PR 活跃度处于低潮，官方合并节奏以 v1.0.63 后期的 hotfix 为主。可关注 reviewer 团队对 hook 回归（#3727）、MCP 资源管理（#3706, #3782）等方向的修复提交。

---

## 📈 功能需求趋势

从过去 24h 的 44 条 Issue 提炼出以下高需求方向：

1. **🔌 MCP 生态完善（热度最高）**
   - 多模型管理（MCP server 多实例 / 远程 OAuth 风暴 / 子 agent 工具隔离 / stdio 无限重试）
   - 企业级策略可控（#3756、#1707 长期未解）

2. **🧠 模型与 BYOK 能力扩展**
   - 多 BYOK 模型热切换（#3282，👍 8）
   - BYOK 自定义 HTTP header（#3399）
   - Claude Sonnet prompt caching（#3808）

3. **🪟 跨平台 / 终端体验**
   - Windows ARM64 / Linux ARM64 稳定性
   - UTF-8 跨终端字符集（#3776, #3813）
   - WSL 与 Windows 剪贴板互通
   - VS Code Terminal vs iTerm2 渲染差异

4. **📚 会话管理与检索**
   - 多并发 session 内置管理（#2966）
   - `--resume` 搜索会话正文而非仅 ID/name（#3807，已 CLOSE）
   - `/chronicle` 整合 VS Code Copilot Chat 历史（#3816）
   - SQLite 与 DuckDB 方言不兼容（#3775）

5. **🛡️ 安全 / 权限粒度**
   - OAuth 权限范围最小化（#953，长青热门）

6. **🧩 插件 / Hook 体系**
   - 回归修复与可观测性（#3727、#3716）
   - 上下文注入链路稳定性

---

## 🧑‍💻 开发者关注点（痛点 / 高频需求）

- **🔥 回归风险**：v1.0.60 引入的 hook / function call 回归仍未在所有用户场景下得到清晰解释（#3727, #3716），插件作者呼吁更详细的 changelog 与 semver 标注。
- **💸 计费透明度**：失败请求仍计入 AIC 消耗（#3814），开发者希望区分"重试不计费"或提供显式失败重试上限。
- **🧱 平台碎片化**：Windows ARM64 standalone exe 安装失败（#3810）、Linux ARM64 Tokio panic（#3784）、WSL↔Windows 编码错乱（#3776），跨平台 QA 是当前主要短板。
- **🖼️ 多模态边界**：图片附件处理路径仍不够稳健——既存在未配置视觉能力时的会话污染（#3781），又有 5MB CAPI 上限下的硬失败（#3767），需统一可恢复策略。
- **🗂️ 本地数据一致性**：`/chronicle` 删除 session 后仍在 insights 中出现（#3811）、`/resume` 因仓库大小写不匹配失败（#3694），本地存储与同步层需要更鲁棒的迁移逻辑。
- **🧭 可见性缺失**：工作区处于 git worktree 时无 UI 提示（#2534），MCP tool 调用对子 agent 不可见（#3812），缺乏上下文信号影响高级用户的可预测性。

---

> 📊 **数据口径**：基于 github.com/github/copilot-cli 公开 API 抓取，Issues/PRs 范围为 2026-06-15 ~ 2026-06-16 24h 内有更新的条目。
> ✍️ 本日报由 AI 自动生成，仅供社区参考。

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

<think>
The user wants me to generate a Chinese daily report for the Kimi Code CLI community based on the GitHub data provided. Let me analyze the data:

**Date**: 2026-06-16

**Releases (past 24 hours)**: None

**Issues (past 24 hours, updated)**: 4 total
- #2402 - [bug] Compaction failed with APIStatusError 400 (high risk)
- #2303 - [bug] UserPromptSubmit hook receives empty prompt from shell UI
- #2222 - [bug] kimi --continue reports "No previous session found"
- #2455 - [bug] FetchURL doesn't read system proxy

**Pull Requests (past 24 hours, updated)**: 2 total
- #2454 - fix(hooks): pass prompt text to UserPromptSubmit (fixes #2303)
- #2453 - fix(session): resume latest session when last_session_id is missing (fixes #2222)

Let me structure the report:

1. **今日速览** - 2-3 sentences summarizing the most important updates today
2. **版本发布** - No new releases, so skip
3. **社区热点 Issues** - Need to pick 10, but only 4 are available. I should only list what's available (4 issues)
4. **重要 PR 进展** - Need to pick 10, but only 2 are available. I should only list what's available (2 PRs)
5. **功能需求趋势** - Trends from issues
6. **开发者关注点** - Developer pain points

Let me write a professional, concise Chinese report suitable for technical developers.

Key observations:
- No new releases in past 24 hours
- Two bug fixes were submitted as PRs that directly address two existing bug reports
- The bugs cover: compaction failure, hook prompt empty, --continue session not found, FetchURL proxy issue
- Patterns: session management, hooks integration, network/proxy handling, API safety filters

Let me draft the report now.
</think>
# Kimi Code CLI 社区动态日报

**📅 2026-06-16**

---

## 📌 今日速览

今日社区动态以 **Bug 修复 PR 集中提交** 为主要特征：开发者 @logicwu0 连续提交两个 PR，分别针对 `UserPromptSubmit` Hook 接收空 prompt 和 `kimi --continue` 无法恢复会话的长期未解问题，响应速度值得肯定。同时，社区仍存在 **Compaction 失败被风控拦截** 和 **FetchURL 不读取系统代理** 两类影响可用性的问题，尚未得到解决方案。**过去 24 小时内无新版本发布。**

---

## 🚀 版本发布

*过去 24 小时内无新版本发布。*

---

## 🔥 社区热点 Issues

> 说明：今日过去 24 小时内有更新的 Issue 共 **4 条**，全部为 Bug 报告，整理如下：

### 1. [#2402 [bug] Compaction 失败报 APIStatusError 400](https://github.com/MoonshotAI/kimi-cli/issues/2402)
- **重要性**：🔴 高 —— 长会话压缩（Compaction）是 Kimi CLI 的核心能力之一，该问题会导致用户无法继续对话
- **现状**：在 v0.6.0 版本使用 Kimi-k2.6 模型时被风控系统拦截，错误信息为"high risk"
- **社区反应**：2 条评论，0 👍，已被关注但尚未定位根因
- **关联方向**：涉及模型层安全策略与 Compaction 流程的兼容性

### 2. [#2303 [bug] UserPromptSubmit Hook 在 Shell UI 中收到空 prompt](https://github.com/MoonshotAI/kimi-cli/issues/2303)
- **重要性**：🟡 中 —— 阻止了基于正则匹配的 Hook 规则生效，限制了扩展能力
- **现状**：v1.44.0，macOS M1 Max，键入纯文本时 Hook 收到 `"prompt": ""`
- **社区反应**：1 条评论，0 👍，**已有对应修复 PR #2454**

### 3. [#2222 [bug] `kimi --continue` 报"No previous session found"](https://github.com/MoonshotAI/kimi-cli/issues/2222)
- **重要性**：🟡 中 —— 影响会话连续性，但有临时绕过方案（直接进入目录）
- **现状**：v1.41.0，Windows 平台，**已有对应修复 PR #2453**
- **社区反应**：1 条评论，0 👍

### 4. [#2455 [bug] FetchURL 不读取系统代理](https://github.com/MoonshotAI/kimi-cli/issues/2455)
- **重要性**：🟠 较高 —— 直接影响中国大陆、局域网等"被墙"环境下的网络工具调用能力
- **现状**：v1.43.0，WSL2 (Linux 6.18)，`FetchURL` 工具未继承 shell/curl 的代理设置
- **社区反应**：0 评论，🆕 今日新报，尚待响应
- **建议**：开发团队应优先排查网络模块的环境变量继承逻辑

---

## 🛠 重要 PR 进展

> 说明：今日过去 24 小时内有更新的 PR 共 **2 条**，均针对已存在的 Bug 报告，由同一开发者提交，修复质量较高。

### 1. [#2454 fix(hooks): pass prompt text to UserPromptSubmit from structured input](https://github.com/MoonshotAI/kimi-cli/pull/2454)
- **作者**：@logicwu0
- **修复对象**：[Issue #2303](https://github.com/MoonshotAI/kimi-cli/issues/2303)
- **核心改动**：在 `KimiSoul._turn` 中，Hook 文本原本从结构化输入中错误地推断，PR 修正其从用户实际键入文本派生
- **意义**：恢复 Hook 正则匹配能力，对插件生态至关重要

### 2. [#2453 fix(session): resume latest session when last_session_id is missing](https://github.com/MoonshotAI/kimi-cli/pull/2453)
- **作者**：@logicwu0
- **修复对象**：[Issue #2222](https://github.com/MoonshotAI/kimi-cli/issues/2222)
- **核心改动**：`Session.continue_` 仅依赖 `work_dir` 索引；PR 增加了当 `last_session_id` 缺失时回退到最新会话的逻辑
- **意义**：使 `kimi --continue` 在无显式会话 ID 时仍能正常恢复

---

## 📈 功能需求趋势

从今日更新的 Issue 与近期讨论中，可提炼出以下社区关注方向：

| 方向 | 具体诉求 | 代表 Issue |
|------|---------|-----------|
| **网络与代理适配** | FetchURL/网络工具应继承系统代理，适配受限网络环境 | #2455 |
| **Hook/扩展体系** | UserPromptSubmit 等 Hook 应正确接收用户输入 | #2303 / #2454 |
| **会话管理** | `--continue` 等快捷命令的鲁棒性 | #2222 / #2453 |
| **长会话稳定性** | Compaction 流程的兼容性与风控绕过 | #2402 |
| **跨平台一致性** | Windows / macOS / WSL 等多平台行为对齐 | #2402, #2222, #2455 |

---

## 👨‍💻 开发者关注点

综合 Issue 反馈与 PR 修复方向，开发者社区的高频痛点主要集中于：

1. **🐛 稳定性问题频发**
   - 长会话中的 Compaction 失败、Hook 异常、会话恢复失效等问题，反映出 CLI 在核心流程的健壮性上仍有提升空间。

2. **🌐 网络环境适配不足**
   - 在受限网络环境下，`FetchURL` 等工具与 `curl` 行为不一致，是国内/企业网络场景下的关键阻碍。

3. **🔌 Hook/扩展能力受限**
   - 现有 Hook 设计存在结构化输入与文本输入混用的问题，影响开发者自定义扩展。

4. **💻 跨平台体验参差**
   - Windows、WSL、macOS 三类平台上均报告了独立 Bug，提示需要在 CI 中加强多平台回归测试。

5. **⚡ 维护响应效率值得肯定**
   - 两位长期未响应的 Issue（#2303、#2222）在今日均被快速定位并提交 PR，体现了社区协作的活跃度。建议官方对剩余高优问题（特别是 #2402、#2455）加快响应节奏。

---

> 📊 **数据时间范围**：2026-06-15 ~ 2026-06-16  
> 📦 **数据来源**：[github.com/MoonshotAI/kimi-cli](https://github.com/MoonshotAI/kimi-cli)  
> ✍️ 报告由 AI 自动生成，仅供技术参考。

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

<think>
Let me analyze the GitHub data for OpenCode community dynamics on 2026-06-16. I need to create a structured Chinese daily report covering the key sections requested.

Let me organize the data:

**Releases**: None in past 24 hours

**Top Issues by comments (top 10 to highlight)**:
1. #20695 Memory Megathread - 96 comments, 65 👍 - Critical memory issues tracking
2. #2242 Sandbox the agent - 69 comments, 53 👍 - Long-standing security/sandboxing feature request
3. #27167 Native session goals with /goal - 49 comments, 83 👍 - High demand feature
4. #6930 [CLOSED] Anthropic OAuth ToS violation - 22 comments
5. #2156 [CLOSED] Stale LSP errors - 22 comments
6. #5374 Show tokens/second - 17 comments, 81 👍 - High demand
7. #1735 [CLOSED] max_tokens default issue - 17 comments
8. #28567 Full MCP client capabilities - 14 comments, 22 👍
9. #28957 "Upstream idle timeout exceeded" - 14 comments
10. #19252 Build command freezes - 10 comments
11. #30869 bash.ts hardcoded UTF-8 - 5 comments
12. #32493 Moonshot provider missing kimi - 4 comments
13. #31456 Upstream idle timeout - 4 comments
14. #32457 [CLOSED] Tool capabilities in system prompt - 4 comments
15. #28955 DeepSeek V4-Pro no response - 4 comments
16. #10037 [CLOSED] LiteLLM proxy error - 4 comments
17. #31475 Composer 2.5 not available - 4 comments
18. #21345 Move git/PR instructions out of bash tool - 3 comments, 9 👍
19. #32484 [CLOSED] build agent worse than subagents - 3 comments
20. #32420 Paid Go subscription not activated - 3 comments

**Top PRs**:
1. #31645 CLI upgrade progress feedback
2. #32490 MCP server instructions to context
3. #31644 ACP compact/summarize commands
4. #29006 opencode-datarobot-skills plugin docs
5. #32489 OpenAI MCP tool schemas sanitize
6. #28466 [CLOSED] MCP resource file downloads
7. #27673 [CLOSED] localhost HTTP servers workspace picking
8. #32487 Cost display currency config
9. #32479 [CLOSED] Clipboard image paste Windows
10. #27800 [CLOSED] Lazy-load CLI commands

Let me write the report in Chinese, professional and technical.
</think>
# OpenCode 社区动态日报
**日期：2026-06-16**

---

## 📌 今日速览

今日 OpenCode 社区关注度最高的是 **MCP（Model Context Protocol）能力补齐**与 **订阅/计费问题**。一方面，#28567「完整 MCP 客户端能力」与配套 PR #32490（追加服务器 instructions 到上下文）正协同推进；另一方面，多名用户集中反馈 **OpenCode Go 付费后未激活**（#32420、#32466、#32482），并质疑订阅流程透明度，已引发小范围信任危机。此外，**内存治理**（#20695，96 条评论）仍是核心工程议题，需社区配合提交 heap snapshot。

---

## 🚀 版本发布

过去 24 小时内无新 Release。建议关注 [GitHub Releases](https://github.com/anomalyco/opencode/releases) 后续更新。

---

## 🔥 社区热点 Issues

| # | Issue | 热度 | 关注理由 |
|---|-------|------|---------|
| 1 | [\#20695 Memory Megathread](https://github.com/anomalyco/opencode/issues/20695) | 💬96 👍65 | 官方挂号的"内存问题中枢帖"，呼吁用户提交 heap snapshot（手动 / DevTools 两种方式）。是判断下一版本稳定性修复优先级的重要信号源。 |
| 2 | [\#2242 Agent 沙箱化](https://github.com/anomalyco/opencode/issues/2242) | 💬69 👍53 | 长期高赞议题：希望限制 Agent 在工作目录外执行命令/读写文件，对标 gemini-cli、codex-cli 的 seatbelt。涉及核心安全模型，进展缓慢。 |
| 3 | [\#27167 原生会话目标 /goal](https://github.com/anomalyco/opencode/issues/27167) | 💬49 👍83 | 社区呼声极高的功能：会话级持久化目标/生命周期管理。👍 数远超评论数，说明大量用户"潜水"支持。 |
| 4 | [\#6930（已关闭）Anthropic OAuth 触发封号](https://github.com/anomalyco/opencode/issues/6930) | 💬22 👍14 | 用户从 Claude Max 5 升 20 后被 Anthropic 封号，怀疑 OAuth 用法违反 ToS。已关闭，但风险提示仍对所有使用官方登录的用户具有警示意义。 |
| 5 | [\#2156（已关闭）陈旧 LSP 错误](https://github.com/anomalyco/opencode/issues/2156) | 💬22 👍2 | Claude 在修复后仍看见旧 LSP 诊断，导致死循环。反映 LSP 状态清理与 Agent 反馈链路的设计问题。 |
| 6 | [\#5374 显示 tokens/second](https://github.com/anomalyco/opencode/issues/5374) | 💬17 👍81 | 跨 Provider 性能对比刚需。👍 81 高居不下，请求显示当前/平均 token 生成速率。 |
| 7 | [\#28567 完整 MCP 客户端能力](https://github.com/anomalyco/opencode/issues/28567) | 💬14 👍22 | 明确指出 OpenCode MCP 客户端落后于 MCP 2.x 规范。今日 PR #32490 即为该议题推进。 |
| 8 | [\#28957 / #31456 Upstream idle timeout](https://github.com/anomalyco/opencode/issues/28957) | 💬14+4 | 多个 Provider（Nemotron、含 writing-plans skill 的会话）出现"上游空闲超时"。影响面广，与会话/技能系统均有关。 |
| 9 | [\#19252 构建命令卡死](https://github.com/anomalyco/opencode/issues/19252) | 💬10 👍7 | AI 不识别任务已完成而继续挂起。`oh-my-opencode` 插件复现率高，与 bash 工具的进程回收逻辑相关。 |
| 10 | [\#32420 Go 付费未激活（多用户复现）](https://github.com/anomalyco/opencode/issues/32420) | 💬3 👍0 | 单条评论少但已聚合至少 3 个相同问题（#32466、#32482），并涉及澳大利亚消费者保护法。是当前最显性的商业化信任风险。 |

---

## 🛠 重要 PR 进展

| # | PR | 关键内容 |
|---|----|---------|
| 1 | [\#31645 CLI upgrade 进度反馈](https://github.com/anomalyco/opencode/pull/31645) | 解决 `opencode upgrade` 静默下载、看似卡死的问题，新增实时下载/安装进度。**体验级修复，强烈建议合并。** |
| 2 | [\#32490 MCP 服务器 instructions 注入上下文](https://github.com/anomalyco/opencode/pull/32490) | 将 `InitializeResult.instructions` 拼入 system prompt，关闭 #30084、#7373。是 MCP 规范对齐的里程碑。 |
| 3 | [\#31644 修复 /compact、/summarize 命令不可见](https://github.com/anomalyco/opencode/pull/31644) | ACP 服务中特殊处理的两条命令没注册到自动补全，PR 补齐。修小但影响日常使用。 |
| 4 | [\#29006 文档：opencode-datarobot-skills 插件](https://github.com/anomalyco/opencode/pull/29006) | 生态位扩展：DataRobot 官方提供的 Agent skills 插件。 |
| 5 | [\#32489 清洗 OpenAI MCP tool schema](https://github.com/anomalyco/opencode/pull/32490) | MCP 工具 schema 中部分 JSON Schema 关键字不被 OpenAI 支持，统一清洗。**关键兼容性修复。** |
| 6 | [\#28466 忽略 MCP 资源文件下载（已关闭）](https://github.com/anomalyco/opencode/pull/28466) | MCP 资源 @mentions 不再被当作工作区文件加载。修复 #14753、#8920、#29245。 |
| 7 | [\#27673 localhost HTTP 视为非本地（已关闭）](https://github.com/anomalyco/opencode/pull/27673) | 修复 WSL 中 Desktop 通过 localhost:4096 误判为本地工作区的问题。 |
| 8 | [\#32487 费用显示货币可配置](https://github.com/anomalyco/opencode/pull/32487) | 新增 `display.currency`、`display.cost_currency`、`display.currency_rate`，支持按用户偏好展示成本。 |
| 9 | [\#32479 Windows TUI 剪贴板图片粘贴（已关闭）](https://github.com/anomalyco/opencode/pull/32479) | 改用 FileDrop 格式读取截图。修复 #31737。 |
| 10 | [\#27800 CLI 懒加载（已关闭）](https://github.com/anomalyco/opencode/pull/27800) | `--help`/`--version`/tab 补全路径延迟加载命令模块，**显著提升 CLI 启动速度。** |

---

## 📈 功能需求趋势

通过聚合 Issues 标签与摘要，社区诉求集中在以下方向：

1. **🏗 性能与可观测性**
   - Tokens/second 实时显示（#5374）
   - 会话目标 / 进度追踪（#27167）
   - 费用货币本地化（#32487）
   - 内存治理（#20695）

2. **🔌 MCP 生态对齐**
   - 完整 MCP 2.x 客户端能力（#28567）
   - server instructions 注入（#32490）
   - OpenAI schema 兼容（#32489）

3. **🛡 安全与权限模型**
   - Agent 沙箱（#2242）
   - .env 文件在 grep/glob 中也需保护（#17073）
   - 文件/命令权限粒度（#16914）

4. **🤖 新 Provider / 模型支持**
   - Moonshot kimi-k2.7-code-highspeed（#32493）
   - xAI/Grok Composer 2.5（#31475）
   - DeepSeek V4-Pro 推理输出空白（#28955）

5. **🪟 Windows / 跨平台体验**
   - GBK 等非 UTF-8 locale 输出乱码（#30869）
   - TUI 剪贴板图片粘贴（#32479）
   - Desktop 渲染线程阻塞（#32452）

6. **🧠 Agent 编排优化**
   - 按 Agent 范围懒加载 skill（#19344）
   - git/PR 指令从 bash 工具描述中剥离以节省约 1.7K tokens（#21345）
   - build agent 能力弱于子 agent（#32484）

---

## 💬 开发者关注点

| 痛点 | 代表 Issue |
|------|-----------|
| **OAuth/订阅流程不透明** | 多名用户付费未到账且无客服响应，#32420、#32466、#32482 几乎相同的描述被快速关闭；Kaspersky 误报为 trojan（#32350）加剧不信任 |
| **LSP 状态陈旧导致 AI 误判** | #2156、#30869 显示底层工具的输出/诊断生命周期管理仍是短板 |
| **MCP 兼容与 OpenAI schema 冲突** | #28567、#32489 共同指向 MCP 规范演进与多 Provider 适配的工程债 |
| **长时间任务（Gradle、build）终端不退出** | #19252、#22154 反映 bash 工具进程回收逻辑与 build agent 协同存在问题 |
| **冷启动 token 开销过大** | #21345 指出 16 个工具 .txt 文件共占 ~40K token，存在系统性 prompt 优化空间 |
| **构建 Agent 实际表现不及子 Agent** | #32484（已关闭）虽被快速驳回，但跨模型复现，说明 prompt/调度仍有结构性差距 |

---

*数据来源：[anomalyco/opencode](https://github.com/anomalyco/opencode) Issues & Pull Requests（截至 2026-06-16 UTC）*

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

<think>
The user wants me to generate a Chinese daily report about Qwen Code community dynamics for 2026-06-16. Let me analyze the data carefully.

Let me organize the information:

## Releases (past 24 hours)
1. v0.18.1-nightly.20260616.a68b2e1e7 - nightly build
   - fix: warn on oversized context instructions (#5073)
   - docs: fix stale defaults, CLI syntax
   
2. v0.18.1 - stable release
   - chore(release): v0.18.0
   - feat(daemon): gate direct session shell behind explicit opt-in
   
3. desktop-v0.0.4 - desktop version
   - fix(cli): persist MCP server removals
   - fix(models): refresh raw model-derived defaults

4. desktop-latest - auto-update feed

## Top Issues to feature
Let me pick the most important 10:

1. #5142 - Virtualized History Mode bug - 4 comments, UI/UX issue
2. #5160 - /model lists discontinued qwen-oauth coder-model - bug, UX confusion
3. #5173 - Model provider disambiguation fails when multiple providers share same model id - high impact
4. #5147 - OOM after /quit when managed auto-memory builds transcript - critical performance issue
5. #5159 - Trackpad scroll in tmux session triggers prompt history navigation - macOS UX issue
6. #5101 - Qwen Code carries repeated large tool results through provider history - P1 priority, critical
7. #5176 - request: allow sub-agent max parallel count setting - feature request
8. #3979 - ghostty terminal flickering in plan mode - long-standing UI bug
9. #4941 - Add QWEN.md length warning that scales with model context window - closed, useful feature
10. #5154 - Discussion: does the cli-entry.js --expose-gc wrapper earn the extra process? - design discussion
11. #5124 - Track /loop alignment work - parent issue for loop alignment series
12. #4966 - SchemaValidator missing numeric string coercion - MCP tool failures

I should pick 10 - the most impactful:
- #5142 (UI bug, 4 comments)
- #5160 (model picker bug)
- #5173 (model provider disambiguation)
- #5147 (OOM issue, critical)
- #5101 (P1 priority, large tool results)
- #5176 (sub-agent parallel control, new feature request)
- #5124 (parent /loop tracking issue, 1 like)
- #3979 (long-standing terminal bug)
- #5154 (design discussion on --expose-gc)
- #4966 (MCP SchemaValidator)

## Top PRs (10 most important)
1. #5155 - fix(agent): make forking explicit
2. #5145 - feat(cli): show follow-up suggestion in input placeholder
3. #5175 - feat(daemon): deliver web-shell mid-turn messages
4. #5174 - feat(cli): Add daemon status API
5. #5172 - docs: fix MCP token path, daemon UI event count, add Feishu channel
6. #5171 - fix(core): auto-retry transport stream errors before the first chunk
7. #5168 - fix: Qwen PR review proxy bypass
8. #5141 - fix(core): Track supported sed edits in file history
9. #5094 - feat(core+cli): Workflow P4 — meta + /workflows + phase-tree
10. #5167 - fix(cli): hide unconfigured discontinued OAuth model
11. #4850 - feat(extensions): interactive multi-tab /extensions manager
12. #4793 - fix: coerce non-string tool params for self-hosted LLMs
13. #5157 - Upgrade GitHub Actions for Node 24 compatibility
14. #4598 - feat(tui): collapsible thinking blocks
15. #4971 - fix(cli): reduce retained interactive tool output memory

Let me select 10:
- #5155 - make forking explicit (closed)
- #5145 - show follow-up suggestion in input placeholder
- #5175 - web-shell mid-turn messages
- #5174 - daemon status API
- #5171 - auto-retry transport stream errors
- #5167 - hide unconfigured discontinued OAuth model
- #5141 - track supported sed edits in file history
- #5094 - Workflow P4
- #4793 - coerce non-string tool params (high impact for self-hosted LLMs)
- #4850 - interactive multi-tab /extensions manager
- #5168 - PR review proxy bypass
- #4598 - collapsible thinking blocks

I'll pick the most impactful 10.

## Trends in Feature Requests
Looking at the issues:
- /loop alignment work (large series from @qqqys) - background automation
- Sub-agent parallel control (#5176)
- QWEN.md length warning (#4941) - context management
- Display git branch in Desktop UI (#4769)
- Sudo command support (#5119)
- token usage / cost visibility (#4564 in PRs)
- Interactive extensions manager (#4850)
- Workflow system (#4721, #5094)
- Thinking blocks collapsible (#4598)
- OAuth model picker improvements
- Self-hosted LLM support

## Developer Pain Points
- OOM in managed auto-memory
- Terminal flickering in macOS (ghostty, tabby)
- Model provider disambiguation
- tmux scroll conflicts
- Discontinued OAuth model confusion
- PR review CI false success
- Tool result repetition in history

Now let me write the report in Chinese, professional and concise.

Let me structure this:

# Qwen Code 社区动态日报 · 2026-06-16

## 今日速览
v0.18.1 稳定版正式发布，同时桌面端 v0.0.4 也带来 MCP 持久化与模型默认值刷新。社区焦点集中在 `/loop` 后台自动化系列、子代理调度、模型选择器 UI 改进以及多类内存/终端渲染问题修复上。

## 版本发布
- v0.18.1（稳定版）
- v0.18.1-nightly.20260616.a68b2e1e7
- desktop-v0.0.4

## 社区热点 Issues (10个)
## 重要 PR 进展 (10个)
## 功能需求趋势
## 开发者关注点

Let me write this out in detail.
</think>
# Qwen Code 社区动态日报 · 2026-06-16

---

## 📌 今日速览

**v0.18.1 稳定版与桌面端 v0.0.4 同日发布**，重点涵盖 Daemon 直接 shell 会话显式 opt-in、MCP 持久化修复以及模型默认值刷新。社区讨论热度集中在 **`/loop` 后台自动化重构系列**（@qqqys 主导）、**子代理并发控制**、**模型选择器 UI 改进**，以及 **macOS 终端下的渲染与滚动冲突**等老问题。

---

## 🚀 版本发布

| 版本 | 类型 | 主要变化 |
|------|------|---------|
| **v0.18.1** | 稳定版 | feat(daemon): direct session shell 改为显式 opt-in（[#5050](https://github.com/QwenLM/qwen-code/pull/5050)） |
| **v0.18.1-nightly.20260616** | Nightly | 修复 QWEN.md 超大上下文告警（[#5073](https://github.com/QwenLM/qwen-code/pull/5073)）、文档默认值与 CLI 语法修正 |
| **desktop-v0.0.4** | 桌面端 | 修复 MCP server 移除不持久化（[#4535](https://github.com/QwenLM/qwen-code/pull/4535)）、刷新模型派生默认值 |

> 注：v0.18.1 之前曾出现一次 release workflow 失败（[#5150](https://github.com/QwenLM/qwen-code/issues/5150)），目前已恢复。

---

## 🔥 社区热点 Issues

| # | 标题 | 优先级 | 为何值得关注 |
|---|------|--------|--------------|
| [#5142](https://github.com/QwenLM/qwen-code/issues/5142) | Virtualized History Mode 历史不可见 | P2 · Bug | 交互式 UI 的虚拟化渲染回归，影响所有 CLI 用户，4 条评论 |
| [#5160](https://github.com/QwenLM/qwen-code/issues/5160) | `/model` 列出已停服的 qwen-oauth coder-model | P2 · Bug | 在非 OAuth 环境下误显停服模型，干扰用户判断 |
| [#5173](https://github.com/QwenLM/qwen-code/issues/5173) | 多 provider 共享同 model id 时无法消歧 | P2 · Bug | Token Plan / IdeaLab / BFF 共享 `qwen3.7-max` 时选择不持久化 |
| [#5101](https://github.com/QwenLM/qwen-code/issues/5101) | 重复的大工具结果回灌到 provider history | **P1** · Bug | 本地 provider 场景下大量重复大输出导致请求膨胀，关键性能/成本问题 |
| [#5147](https://github.com/QwenLM/qwen-code/issues/5147) | `/quit` 后 managed auto-memory 触发 OOM | P2 · Bug | 在退出阶段构造 transcript 时出现 V8 堆溢出，#4644 / #4717 修复后仍残留 |
| [#5159](https://github.com/QwenLM/qwen-code/issues/5159) | macOS + tmux 下触控板滚动触发历史切换 | P3 · Bug | 触控板被劫持为上下方向键，无法正常滚动 |
| [#5124](https://github.com/QwenLM/qwen-code/issues/5124) | `/loop` 对齐工作追踪（父 issue） | P2 · Feature | 1 👍，将原本的 cron-only 行为转向 self-paced 循环的元任务，得到 👍 关注 |
| [#5176](https://github.com/QwenLM/qwen-code/issues/5176) | sub-agent 最大并行数与排队设置 | Feature | 本地 LLM 资源受限用户的强需求 |
| [#5154](https://github.com/QwenLM/qwen-code/issues/5154) | 讨论：`cli-entry.js --expose-gc` 包装是否值得 | P3 · Discussion | 来自 #4914 的设计延续，影响未来 GC 策略 |
| [#3979](https://github.com/QwenLM/qwen-code/issues/3979) | plan mode 在 ghostty 终端闪屏 | Bug | 已存在月余，影响 macOS + ghostty 用户 |

---

## 🛠️ 重要 PR 进展

| PR | 标题 | 状态 | 要点 |
|----|------|------|------|
| [#5155](https://github.com/QwenLM/qwen-code/pull/5155) | fix(agent): fork 行为显式化 | 已合并 | `subagent_type: "fork"` 仅在交互会话下生效，省略时不再误用 fork |
| [#5175](https://github.com/QwenLM/qwen-code/pull/5175) | feat(daemon): web-shell 中途消息注入当前 turn | OPEN | 允许在 turn 进行中向其投递用户输入，跨工具批之间 drain |
| [#5174](https://github.com/QwenLM/qwen-code/pull/5174) | feat(cli): daemon 状态 API | OPEN | 新增只读 `GET /daemon/status`，提供 summary / full 两个层级 |
| [#5171](https://github.com/QwenLM/qwen-code/pull/5171) | fix(core): 首个 chunk 之前的传输错误自动重试 | OPEN | 受 `classifyRetryError()` 驱动，bounded retry，提升流式稳定性 |
| [#5167](https://github.com/QwenLM/qwen-code/pull/5167) | fix(cli): 隐藏未配置的停服 OAuth 模型 | OPEN | 配合 [#5160](https://github.com/QwenLM/qwen-code/issues/5160) 修复模型选择器 |
| [#5141](https://github.com/QwenLM/qwen-code/pull/5141) | fix(core): 将安全的 `sed -i` 纳入 file history | OPEN | 单一文件 sed 替换可走 diff 预览与文件历史，避免黑盒 shell 执行 |
| [#5168](https://github.com/QwenLM/qwen-code/pull/5168) | fix: PR review 代理绕过、worktree 清理、footer 换行 | OPEN | 修复 PR review 工作流的代理误判与残留 worktree |
| [#5094](https://github.com/QwenLM/qwen-code/pull/5094) | feat(core+cli): Workflow P4 — meta + `/workflows` + phase-tree | OPEN | Dynamic Workflows 移植第四阶段，依赖 #4732 / #4947 / #5034 |
| [#4793](https://github.com/QwenLM/qwen-code/pull/4793) | fix: 自托管 LLM 非字符串工具参数强制转字符串 | OPEN | 解决 LMStudio / sglang / vllm 场景下 `SchemaValidator` 误拒问题 |
| [#4850](https://github.com/QwenLM/qwen-code/pull/4850) | feat(extensions): 多 tab 交互式 `/extensions` 管理器 | OPEN | Installed / Discover / Sources 三 tab，覆盖扩展全生命周期 |

---

## 📈 功能需求趋势

1. **后台自动化与 `/loop` 重构（最热）**
   - 由 @qqqys 主导的 #5124 父 issue + #5129 / #5130 / #5131 / #5132 / #5133 / #5134 / #5135 / #5136 / #5156 子任务组成完整路线图，目标是把 `/loop` 从 10 分钟 cron 改为自驱动的 session wakeup + tick 模板。

2. **子代理（sub-agent）调度增强**
   - #5176 提出并行度与排队；#5155 显式化 fork 行为，反映出社区对"多代理协作稳定性"的持续关注。

3. **上下文与 Token 管理**
   - #5101 (P1)、#4941 (QWEN.md 长度告警)、#4564 (token 用量 / 成本可见) 形成系列——开发者希望量化"我的 prompt 到底有多贵"。

4. **Workflow 与扩展生态**
   - P4 工作流（#5094）、多 tab `/extensions`（#4850）、DaemonTransport 抽象（#5026）表明 SDK 与生态集成正在走向可插拔。

5. **本地/自托管 LLM 体验**
   - #4793、#4966、#5173 全部聚焦在"自托管 / 多 provider"场景的健壮性，伴随 #5060 的 TrustedRouter 预设，自托管用户群诉求明显上升。

6. **桌面端 UI 细节**
   - #4769（git 分支显式展示）、desktop-v0.0.4（MCP 持久化、模型默认刷新）显示桌面端进入"细节打磨"阶段。

---

## 💬 开发者关注点（高频痛点）

- **内存与 OOM**：`/quit` 后 managed auto-memory 仍能 OOM（#5147），`--expose-gc` 包装是否值得保留（#5154）；#4971 也在压缩交互式工具输出内存。
- **macOS / 终端渲染**：ghostty 闪屏（#3979）、tabby 闪屏（#3949）、tmux 中触控板劫持（#5159）——这一组几乎全部是 macOS 上的终端兼容性老问题。
- **模型选择器混乱**：#5160 + #5167 + #5173 串成一条线，说明 provider / model 命名空间急需更清晰的"未配置则隐藏 + 同 id 消歧"语义。
- **PR review CI 假成功**（#5052）：review job 提前结束却标绿、零评论，对自动化基础设施的可靠性是较大冲击，#5168 给出配套修复。
- **OAuth / 鉴权过渡期体验**：停服模型还残留在 picker 中（#5160 / #5167）让老用户感到"系统不清爽"，反映迁移期 UX 欠打磨。
- **大工具结果回灌**（#5101）：本地确定性 provider 反复触发同一命令并回传大输出，最终击穿上下文窗口，是当前最值得 P1 投入的方向。

---

> 📎 完整数据来源：[github.com/QwenLM/qwen-code](https://github.com/QwenLM/qwen-code) · 报告时间：2026-06-16

</details>

---
*本日报由 [Big Model Radar](https://github.com/96loveslife/big_model_radar) 自动生成。*
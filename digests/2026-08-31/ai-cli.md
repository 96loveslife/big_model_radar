# AI CLI 工具社区动态日报 2026-08-31

> 生成时间: 2026-08-31 04:51 UTC | 覆盖工具: 8 个

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

<think>The user wants me to synthesize a horizontal comparative analysis report based on the daily reports of 7 AI CLI tools. Let me organize the key data points and themes from each tool's report:

**Key Data Points:**

1. **Claude Code** (anthropics/claude-code)
   - 0 releases, 1 PR closed, multiple issues
   - Hot topics: Windows Desktop stability, Subagent lifecycle management, Max plan quota transparency (#38335 with 839 comments/476 likes)
   - 10 issues highlighted, 1 PR

2. **OpenAI Codex** (openai/codex)
   - 3 alpha releases (rust-v0.152.0-alpha.4/5/6)
   - 10 issues, 10 PRs all closed
   - Hot topics: Windows/WSL consistency, rate limit transparency, update_plan opt-in, TUI improvements, MCP ecosystem

3. **Gemini CLI** (google-gemini/gemini-cli)
   - 1 nightly release
   - 10 issues, 10 PRs (many old PRs auto-closed)
   - Hot topics: Agent reliability (subagent hangs), Auto Memory system, MCP schema compatibility, token metering accuracy

4. **GitHub Copilot CLI** (github/copilot-cli)
   - 0 releases, 0 PRs
   - 10 issues (mostly new bugs), 5 closed
   - Hot topics: 1.0.81 regression (OAuth/proxy), session lifecycle (OOM, FileWatch loop), compaction reliability, OTEL telemetry

5. **Kimi Code CLI** (MoonshotAI/kimi-cli)
   - 0 releases, 0 PRs
   - Only 2 issues (limited activity)
   - Hot topics: Tool call reliability, cross-platform mobile remote control

6. **OpenCode** (anomalyco/opencode)
   - 0 releases, 50 PRs, 50 issues
   - Most active PR merge rate
   - Hot topics: Compaction stability, empty assistant messages, Windows issues, SQLite growth, multi-provider compatibility

7. **jcode** (1jehuang/jcode)
   - 2 releases (v0.81.3, v0.81.4)
   - 18 open issues, 1 closed, 0 PRs
   - Hot topics: Memory system retrieval gaps, security/privacy compliance, session isolation, provider compatibility

8. **pi** (earendil-works/pi)
   - 0 releases, 8 PRs
   - 35 issues
   - Hot topics: New provider integrations (Tencent, DeepSeek), session JSONL corruption, Windows support, OpenAI-compat gateway issues

Now let me analyze cross-cutting themes:

**Common themes across tools:**
1. **Windows platform pain** - Codex, Claude Code, OpenCode, Gemini CLI, Copilot CLI all have Windows-specific issues
2. **Subagent/Agent reliability** - Claude Code (nested subagents), Gemini CLI (generalist hangs), OpenCode (compaction loops), pi (session JSONL)
3. **Compaction / Context Management** - Claude Code (per-agent windows), OpenCode (#41358, #45125), Copilot CLI (#2861, #4646)
4. **MCP ecosystem maturation** - Claude Code (schema), Codex (package names), Gemini CLI (schema normalization)
5. **Cost transparency / Quota** - Claude Code (#38335), Codex (#33685)
6. **Session lifecycle management** - Multiple tools
7. **TUI/UX improvements** - Codex, Gemini, pi

**Differentiation:**
- Claude Code: Heavy focus on subagent architecture
- Codex: Industrial-grade tool governance (update_plan opt-in, Guardian)
- Gemini CLI: Auto Memory system investment, browser agent
- Copilot CLI: Enterprise integration (BYOK, OAuth, OTEL)
- Kimi Code CLI: Smaller community, focus on remote control
- OpenCode: Provider compatibility breadth, plugin SDK
- jcode: Memory system deep review, security audit
- pi: Provider ecosystem (Tencent, DeepSeek), small focused tool

**Maturity assessment:**
- Most mature / active: Codex (3 alpha releases, lots of PRs), OpenCode (50 PRs/50 issues)
- Highly active: Claude Code, Gemini CLI
- Stable but slow: Copilot CLI, jcode
- Limited activity: Kimi Code CLI
- Fast iteration: pi

Let me write this in a professional Chinese technical analyst style with clear structure and data support.

Let me think about what would be most valuable:
1. Need a summary table for activity comparison
2. Need to identify truly common themes (not just one or two tools)
3. Need to differentiate clearly
4. Need to highlight trends with implications

I'll write this in a polished, professional way suitable for tech decision-makers and developers.</think>

# AI CLI 工具生态横向对比分析报告
**报告日期：2026-08-31**
**覆盖工具：Claude Code、Codex、Gemini CLI、Copilot CLI、Kimi Code CLI、OpenCode、jcode、pi**

---

## 一、生态全景

当前 AI CLI 工具生态已从"模型能力竞赛"转向 **"工程化与可治理性" 阶段**：头部工具（Codex、OpenCode、Claude Code）进入高频小步迭代，每日合并数十 PR，焦点从"能不能用"转向"稳不稳、可不可控、贵不贵";中部工具（Gemini CLI、Copilot CLI、pi）在补齐 Windows 体验、Provider 兼容、可观测性等基础设施；而垂直型工具（jcode、Kimi Code CLI）则围绕**记忆系统、安全合规、跨端远程控制**等差异化方向建立身份认同。社区普遍呈现的信号是：**Agent 体系可靠性、上下文/会话生命周期、跨平台一致性、计费透明性** 已成为下一阶段竞争的四大主轴。

---

## 二、各工具活跃度对比

| 工具 | Release | PR 数 (24h) | Issue 数 (24h) | 整体活跃度 | 当前阶段 |
|------|---------|------------|---------------|-----------|---------|
| **OpenAI Codex** | 3 alpha (0.152.0-α.4/5/6) | 10（全部合并） | 30+ | 🔥🔥🔥🔥🔥 极高 | 密集预发布 |
| **OpenCode** | 0 | 50（大量合入） | 50 | 🔥🔥🔥🔥🔥 极高 | Bug 收敛期 |
| **Gemini CLI** | 1 nightly | 10（含历史 nudge） | 20+ | 🔥🔥🔥🔥 高 | 持续打磨 |
| **Claude Code** | 0 | 1 | 30+ | 🔥🔥🔥 中高 | 问题累积期 |
| **pi** | 0 | 8 | 35 | 🔥🔥🔥 中 | 快速功能扩展 |
| **jcode** | 2 (v0.81.3/0.81.4) | 0 | 19 | 🔥🔥 中低 | 安全/合规整改 |
| **GitHub Copilot CLI** | 0 | 0 | 20+ | 🔥🔥 中低 | 1.0.81 回归修复期 |
| **Kimi Code CLI** | 0 | 0 | 2 | 🔥 低 | 平稳过渡 |

> **关键观察**：活跃度最高的两极（Codex、OpenCode）都处于"密集修复 + 工具治理"阶段，PR 合并节奏明显领先；而 Copilot CLI 与 Kimi Code CLI 处于"问题报告 > 修复"的不对称期，需关注后续修复节奏。

---

## 三、共同关注的功能方向

以下为**至少 3 个工具社区同时聚焦**的需求方向：

### 1. 🪟 Windows 平台一致性体验（6/8 工具）
- **Claude Code**：Desktop 自动更新静默重启、CoworkVMService DACL 权限、Browser pane 崩溃
- **Codex**：WSL 环境切换、Remote SSH 审批、code-mode 握手失败
- **Gemini CLI**：Wayland 兼容、多行粘贴、终端 resize
- **OpenCode**：ARM64 TUI 启动失败、UTF-8 乱码、WSL UNC 路径
- **Copilot CLI**：终端渲染一致性、Voice NuGet 鉴权
- **jcode**：源码构建后所有 Provider TLS/DNS 故障

**共同诉求**：把 Windows 从"二等公民"提升至与 macOS/Linux 平级，**安装/启动/键位/路径全链路开箱即用**。

### 2. 🤖 Subagent/Agent 生命周期与可靠性（5/8 工具）
- **Claude Code**：嵌套子代理异步/同步、所有权错乱、按 agent 角色区分 compact 阈值
- **Gemini CLI**：Subagent 误报 GOAL success、generalist agent 挂起、Shell 执行卡死
- **OpenCode**：自动压缩丢失任务目标、空会话无限压缩循环
- **pi**：JSONL 会话 seq 冲突、子 agent OOM（20GB+ RSS）
- **Copilot CLI**：FileWatch 死循环、`sessionStart` 内容重复注入

**共同诉求**：从"Agent 能跑"走向 **Agent 状态机可控、可恢复、可观测**，特别是 **暂停/恢复、错误恢复、任务所有权** 这三个维度。

### 3. 📚 Compaction / 上下文压缩可靠性（4/8 工具）
- **Claude Code**：要求按 agent 角色设置独立 compact 窗口
- **OpenCode**：自动压缩后 agent 继续思考丢失目标（#41358、#45125）
- **Copilot CLI**：Opus 4.6 三次空响应、自定义模型 `tool_choice` 不匹配
- **pi**：分支摘要硬编码 2048、长会话 `contextWindow` 死亡螺旋

**共同诉求**：长会话/多 Agent 场景下，**压缩不应"偷走"任务上下文**，且需对多 Provider/多模型保持协议一致性。

### 4. 💸 订阅/计费透明度（3/8 工具）
- **Claude Code**：[#38335](https://github.com/anthropics/claude-code/issues/38335) Max 配额异常消耗（839 评论、476 👍）
- **Codex**：周限额耗速与原 5h 一致（#33685）、5h 窗口突被清零（#19944）
- **pi**：Anthropic cache 从不读回（#8849）、OpenRouter auto 负定价（#8875）

**共同诉求**：用户强烈希望 **看见到底发生了什么、扣了多少、为什么扣**，反对"沉默扣费"和"节奏切换无解释"。

### 5. 🔌 MCP 生态工业化（4/8 工具）
- **Claude Code**：draft-07 schema 被拒、嵌套对象被序列化为字符串
- **Codex**：包风格服务名（PR #41700）、环境型 MCP 测试目录（PR #41683）、OAuth 工具导入（#20009）
- **Gemini CLI**：Schema 规范化（PR #28839）、工具截断名唯一性（PR #28971）、工具数 >128 报错（#24246）
- **OpenCode**：Provider 协议差异治理（Kimi K3、Bedrock、OpenRouter）

**共同诉求**：MCP 正从"能跑"走向"工业化"——**命名规范、Schema 校验、错误归因、工具数治理** 成为新焦点。

### 6. � 安全/隐私/会话隔离（3/8 工具）
- **jcode**：OAuth↔API Key 切换泄漏 `JCODE_RUNTIME_PROVIDER`、首启遥测先于提示、配置解析失败静默回退
- **Claude Code**：MCP 参数序列化隐性问题、模型安全分类器过严
- **Gemini CLI**：Auto Memory 脱敏滞后（敏感数据已入上下文）

**共同诉求**：进程级状态污染、隐私边界模糊、配置静默回退形成**系统性风险**，需明确"边界 + 告警 + 可观测"三位一体。

---

## 四、差异化定位分析

| 工具 | 核心定位 | 目标用户 | 技术路线亮点 | 当前护城河 |
|------|---------|---------|------------|-----------|
| **Claude Code** | Subagent 编排旗舰 | 企业研发团队 / 多 Agent 工作流 | 嵌套 Subagent、Skill 体系、Plan Mode | Subagent 工程化最深入 |
| **OpenAI Codex** | 工具治理与 TUI 体验 | Pro 个人用户 / 严肃生产力场景 | `update_plan` opt-in、Guardian 鉴权、限流横幅 | 工具治理策略最成熟 |
| **Gemini CLI** | 模型与生态集成 | Gemini 生态用户 / 大上下文场景 | Auto Memory、Browser Agent、多模型 fallback | Auto Memory + Gemini 3 长上下文 |
| **Copilot CLI** | 企业合规与 GitHub 生态 | GitHub Enterprise / 企业合规场景 | BYOK、OTEL、sessionStart Hook | GitHub 原生集成 + 企业合规 |
| **OpenCode** | 极客向多 Provider 工具 | 跨 Provider 重度用户 / 插件作者 | Plugin SDK、Session Goal 提案、空消息治理 | 多 Provider 兼容深度 |
| **jcode** | 记忆系统深度优化 | 重度个人知识工作者 | 记忆图谱、混合检索、Supersedes 边 | 记忆系统最完整 |
| **Kimi Code CLI** | 跨端远程开发 | 国内移动办公用户 | 远程控制 + iPad/微信浏览器适配 | 国内移动端远程控制 |
| **pi** | 轻量 Provider Hub | 模型尝鲜 / 扩展开发者 | OpenAI-Compat 统一适配、扩展 SDK、Tencent/DeepSeek 接入 | 国内云端 Provider 接入最快 |

---

## 五、社区热度与成熟度

### 🟢 高度活跃 + 快速迭代（建议持续跟进）
- **Codex**：3 个 alpha 同步发布，10 个 PR 全量合并，节奏最激进
- **OpenCode**：50 个 PR、50 个 Issue 同时处理，修复密度极高
- **pi**：35 个 Issue + 8 个 PR，新增 Provider 速度快

### 🟡 活跃但承压（需关注稳定性）
- **Claude Code**：声量集中在配额争议（#38335）和 Windows Desktop bug 堆积
- **Gemini CLI**：夜间版本迭代正常，但 PR 出现大规模 nudge 关闭（仓库清理）
- **Copilot CLI**：1.0.81 集中回归，建议生产环境暂留 1.0.80

### 🟠 中等活跃 + 战略调整（关注定位演进）
- **jcode**：连续两个版本聚焦体验与可靠性，Issues 集中在**记忆系统蓝图**和**安全审计整改**

### 🔴 活跃度较低（建议观察）
- **Kimi Code CLI**：仅 2 条 Issue，建议关注后续是否进入快速迭代

---

## 六、值得关注的趋势信号

### � 信号 1：Agent 体系进入"状态机工程化"阶段
**现象**：5 个工具同时出现 Agent 状态机相关 Bug（Claude 嵌套所有权、Gemini 误报成功、OpenCode 压缩死循环、pi OOM、Copilot sessionStart 重复）。
**对开发者的参考**：
- 评估 Agent 类工具时，重点测试 **嵌套、中断、并发、压缩** 四类边界场景
- 自研 Agent 框架应提前规划 **per-agent 独立 compaction、暂停/恢复、所有权追踪** 三件套

### 📡 信号 2："Windows 一等公民"成为产品力分水岭
**现象**：6 个工具都把 Windows 作为关键改进项；多数工具仍处于"能跑但难用"。
**对开发者的参考**：
- Windows 优先的团队应优先选择 **Copilot CLI、OpenCode**（已有 ARM64/WSL 修复）
- 选型时关注 **WSL 集成、路径处理、终端渲染、字体编码** 四项硬指标

### 📡 信号 3：MCP 生态从"协议落地"进入"工程治理"
**现象**：命名规范、Schema 校验、工具数上限、OAuth 流程成为集中话题。
**对开发者的参考**：
- 开发者 MCP 服务需**主动声明 type:object、避免工具名截断冲突、控制工具总数 < 128**
- 关注 #41700（包风格命名）等规范形成生态事实标准的方向

### 📡 信号 4：可观测性成为生产化瓶颈
**现象**：Copilot CLI 的 OTEL、Codex 的限流横幅、Gemini CLI 的 token 计量、Claude Code 的配额争议共同指向"看不见/不可控"。
**对开发者的参考**：
- 工具选型时**OTEL 兼容性、cost/banner 透传、approval 通道一致性** 应作为硬性指标
- 自研集成时，把"日志/计费/审批"作为一等接口设计

### 📡 信号 5：国内云端 Provider 成为新增量
**现象**：pi 接入 Tencent Token Plan、StepFun、zai-api；Codex 与 OpenCode 在 DeepSeek/Kimi 路径上的反复治理。
**对开发者的参考**：
- 国内场景工具选型应优先评估 **Tencent Token Plan、DeepSeek V4、Kimi K3** 等国内 Provider 路径
- 关注 OpenAI-compatible 网关的协议差异治理（markdown-fenced、双 tool_call 共享 index、dangling tool_use 等）

### 📡 信号 6："安全/隐私合规"成为开源工具的下一个必修课
**现象**：jcode 一日涌入 6 条安全/隐私 Issue（进程级污染、首启遥测、opt-out 不覆盖赞助计量）。
**对开发者的参考**：
- 选型时关注**遥测默认关闭、配置失败显式告警、会话作用域隔离** 三项
- 部署侧考虑提供**审计日志、配置 lint、隐私提示前置** 的能力

---

## 总结

2026-08-31 的 AI CLI 工具生态呈现"**高频迭代 + 共识收敛**"的双重特征：一方面，头部工具通过密集的 alpha/nightly 推送快速收敛 Bug（Codex、OpenCode 是典型）；另一方面，社区共识正在围绕 **Agent 状态机、跨平台一致性、MCP 工业化、可观测性、隐私合规** 五条主线快速凝聚。

对**技术决策者**：建议把"Windows 支持、MCP 兼容性、OTEL/可观测、Provider 多样性"作为下一代工具选型的核心评估维度。

对**开发者**：建议把"嵌套 Agent 边界、Provider 协议差异、长会话成本治理、隐私边界"作为自研框架与脚本设计的优先考量。

> 📌 **明日值得关注**：Codex 是否发布 0.152.0 正式版（连续 3 个 alpha 后）；OpenCode 是否解决 #27167 Session Goals（139 👍）的主线 PR；Claude Code 是否对 #38335 Max 配额争议给出官方说明。

---

## 各工具详细报告

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills 社区热点

> 数据来源: [anthropics/skills](https://github.com/anthropics/skills)

<think>The user wants me to analyze data from the anthropics/skills repository and generate a community hotspot report. Let me carefully analyze the data provided.

Looking at the data:

**Pull Requests (top 20 by comments/activity):**
1. #1298 - fix(skill-creator): run_eval.py always reports 0% recall (MartinCajiao) - 2026-06-10
2. #514 - Add document-typography skill (PGTBoos) - 2026-03-04
3. #1615 - Add scnet-hpc skill (lql341) - 2026-08-20
4. #538 - fix(pdf): correct case-sensitive file references (Lubrsy706) - 2026-03-06
5. #486 - Add ODT skill (GitHubNewbie0) - 2026-03-01
6. #210 - Improve frontend-design skill clarity (justinwetch) - 2026-01-05
7. #83 - Add skill-quality-analyzer and skill-security-analyzer (eovidiu) - 2025-11-06
8. #541 - fix(docx): prevent tracked change w:id collision (Lubrsy706) - 2026-03-06
9. #539 - fix(skill-creator): warn on unquoted description (Lubrsy706) - 2026-03-06
10. #1628 - Add Hivemind: Zero-Cost Multi-Agent Orchestration (Hanishchow) - 2026-08-21
11. #1607 - Update claude-api skill: mark retired model IDs (adi-IL) - 2026-08-18
12. #1602 - fix: resolve evaluation serialization, benchmark metrics (AbhiPra24) - 2026-08-17
13. #1595 - docs: add UIZZE to partner skills (samuelbushi) - 2026-08-17
14. #1367 - feat(skills): add self-audit (YuhaoLin2005) - 2026-06-28
15. #1099 - skill-creator: fix run_eval.py crash on Windows (joshuawowk) - 2026-05-07
16. #1050 - skill-creator: fix Windows subprocess + encoding bugs (gstreet-ops) - 2026-04-27
17. #723 - feat: add testing-patterns skill (4444J99) - 2026-03-22
18. #568 - feat: add ServiceNow platform skill (Vanka07) - 2026-03-08
19. #525 - Add pyxel skill for retro game development (kitao) - 2026-03-05
20. #509 - docs: add CONTRIBUTING.md (narenkatakam) - 2026-03-03

**Issues (top 15 by comments):**
1. #492 - Security: Community skills distributed under anthropic/ namespace (43 comments) - security concern
2. #228 - Enable org-wide skill sharing in Claude.ai (16 comments)
3. #556 - run_eval.py: claude -p never triggers skills/commands (12 comments)
4. #62 - All my skills have disappeared (10 comments)
5. #1329 - Proposing compact-memory skill (9 comments)
6. #202 - skill-creator should be updated to best practice (8 comments) - CLOSED
7. #412 - Skill proposal: agent-governance (6 comments) - CLOSED
8. #189 - document-skills and example-skills plugins install identical content (6 comments)
9. #1487 - claude-api skill eagerly injects ~156k tokens (4 comments)
10. #1390 - mcp-builder: evaluation.py scores 0/N (4 comments)
11. #1385 - [Proposal] Reasoning Quality Gate Pipeline (4 comments)
12. #1175 - Concerns regarding Security and Context Window with SharePoint (4 comments) - CLOSED
13. #29 - Usage with bedrock (4 comments)
14. #16 - Expose Skills as MCPs (4 comments)
15. #12 - Add guidance to avoid whitespace reformatting in docx/ooxml (4 comments)

Key observations:
- The user noted that "评论数" (comment counts) are undefined for PRs, so I should look at the comment counts in issues and infer activity from creation/update dates and context
- The most commented issue is #492 about security namespace abuse (43 comments)
- The PRs show a strong focus on bug fixes for skill-creator tooling, particularly around run_eval.py and Windows compatibility
- Multiple Windows-related fixes are trending
- Multiple PRs focus on quality assurance skills (skill-quality-analyzer, self-audit, Reasoning Quality Gate)
- New skill proposals cover: typography, ODT, ServiceNow, testing-patterns, retro gaming (Pyxel), HPC clusters (scnet-hpc), multi-agent orchestration (Hivemind)

Let me structure the report according to the requested format. I should be clear that PR comment counts are not available, so I'll use issue comments + activity indicators (age, updates) as proxies for community attention.

Let me think about which 5-8 PRs to highlight. Looking at the data:
- #1298 - skill-creator fix is linked to the highest-commented issue #556 (12 comments), making it highly relevant
- #514 - document-typography, often-updated
- #1628 - Hivemind multi-agent orchestration, very recent
- #1367 - self-audit (reasoning quality gate), connected to issue #1385
- #83 - skill-quality-analyzer/security-analyzer, meta skills
- #210 - frontend-design improvements
- #723 - testing-patterns
- #1615 - scnet-hpc (recent)

For community needs from issues:
- Security/trust (#492)
- Org-wide sharing (#228)
- Better tooling/evaluation (#556, #1487, #1390)
- Compact memory (#1329)
- Skill creator improvements (#202)
- Agent governance (#412)
- Plugin duplication (#189)
- Reasoning quality (#1385)
- Bedrock compatibility (#29)
- Skills as MCPs (#16)

For high-potential unmerged PRs:
- All listed are still OPEN
- #1298 (high-impact bug fix)
- #1628 (Hivemind - multi-agent orchestration)
- #1367 (self-audit)
- #1615 (scnet-hpc)
- #514 (document-typography)
- #210 (frontend-design improvements)
- #83 (quality/security analyzers)

Now let me write the report in Chinese, professional and concise, with GitHub links.</think>

# Claude Code Skills 社区热点报告
**数据截止：2026-08-31**

> 说明：本次数据中 PR 的评论数未提供（标记为 undefined），因此"热门"综合 PR 创建/更新活跃度、相关 Issue 的讨论密度与被引用频次来判定；Issues 则以实际评论数排序。

---

## 1. 热门 Skills（PR）排行

| # | PR / Skill | 关注度来源 | 当前状态 |
|---|---|---|---|
| 🥇 | **[#1298 skill-creator 修复](https://github.com/anthropics/skills/pull/1298)** — `run_eval.py` 始终报告 0% recall，叠加 Windows 子进程流读取/触发检测/并行 worker 修复 | 与热门 Issue [#556](https://github.com/anthropics/skills/issues/556)（12 评论）强绑定，影响 description 优化闭环 | OPEN |
| 🥈 | **[#514 document-typography](https://github.com/anthropics/skills/pull/514)** — AI 生成文档的排版质量控制（孤行/寡行/编号错位） | 解决"每个 Claude 生成的文档都受影响"的普遍痛点 | OPEN |
| 🥉 | **[#1628 Hivemind（零成本多 Agent 编排）](https://github.com/anthropics/skills/pull/1628)** — 把机械工作委派给免费模型的 headless workers | 新近提交（08-21），契合"贵模型只做规划者"的资源策略 | OPEN |
| 4 | **[#1367 self-audit v1.3.0](https://github.com/anthropics/skills/pull/1367)** — 机械校验 + 四维推理质量门禁 | 与 Proposal Issue [#1385](https://github.com/anthropics/skills/issues/1385)（4 评论）形成设计-实现闭环 | OPEN |
| 5 | **[#83 skill-quality-analyzer + skill-security-analyzer](https://github.com/anthropics/skills/pull/83)** — 元 Skill，覆盖结构/安全五维评估 | 提交最早但仍 OPEN，反映社区对 Skill 自审与安全的长期需求 | OPEN |
| 6 | **[#210 frontend-design 改进](https://github.com/anthropics/skills/pull/210)** — 提升可执行性与内部一致性 | 跨越数月的活跃迭代，开发者实际使用反馈密集 | OPEN |
| 7 | **[#723 testing-patterns](https://github.com/anthropics/skills/pull/723)** — 完整测试栈指南（Testing Trophy + React + Mock + E2E） | 工程实践类高频需求 | OPEN |
| 8 | **[#1615 scnet-hpc](https://github.com/anthropics/skills/pull/1615)** — 通过 SSH + Slurm 操作 SCNet HPC 集群 | 企业/科研 HPC 场景的填补 | OPEN |

> 讨论热点速览：①**质量/评测基础设施缺陷**（#1298 / #556 / #1390 / #1487）几乎贯穿所有热门 PR；②Windows 兼容性正在成为 skill-creator 的系统性议题（#1099、#1050、#1298 三连）；③"AI 输出质量门禁"成为新增长点（#1367、#1385）。

---

## 2. 社区需求趋势（Issues 提炼）

| 需求方向 | 代表 Issue | 社区信号 |
|---|---|---|
| 🔒 **Skill 供应链安全与信任边界** | [#492](https://github.com/anthropics/skills/issues/492)（43 评论，远超第二名） | 社区 Skill 冒用 `anthropic/` 命名空间，引发权限提升风险；最迫切 |
| 🏢 **企业级 Skill 共享与分发** | [#228](https://github.com/anthropics/skills/issues/228)（16 评论） | 现状需下载 .skill 文件后手动上传，缺少 Org 级共享库 |
| 🧪 **Skill 评测基础设施修正** | [#556](https://github.com/anthropics/skills/issues/556)（12 评论）、[#1390](https://github.com/anthropics/skills/issues/1390)（4 评论） | `run_eval.py`、MCP 评测存在静默错误，整个优化回路形同噪声 |
| 🧠 **Agent 长期记忆压缩** | [#1329](https://github.com/anthropics/skills/issues/1329)（9 评论） | 提出 `compact-memory`：用符号化记号压缩 Agent 持久化状态 |
| 🛡️ **Agent 治理与安全模式** | [#412](https://github.com/anthropics/skills/issues/412)（6 评论，已 CLOSED） | 策略执行、威胁检测、信任评分、审计追踪的系统化模式 |
| 🧩 **插件去重与命名空间隔离** | [#189](https://github.com/anthropics/skills/issues/189)（6 评论，9 👍） | `document-skills` 与 `example-skills` 内容重复，污染上下文 |
| 📐 **Skill-Creator 自身质量** | [#202](https://github.com/anthropics/skills/issues/202)（8 评论，已 CLOSED） | 当前更像开发文档而非操作 Skill，违反命名规范 |
| 📄 **大文档处理的上下文爆炸** | [#1487](https://github.com/anthropics/skills/issues/1487)（4 评论） | `claude-api` Skill 单次注入 ~156k token 直接撑爆上下文 |
| 🔗 **Skill ↔ MCP 互操作** | [#16](https://github.com/anthropics/skills/issues/16)（4 评论） | 提议把 Skill 暴露为 MCP，统一软件 API 协议 |
| ☁️ **AWS Bedrock 兼容** | [#29](https://github.com/anthropics/skills/issues/29)（4 评论） | 企业云上跑通 Skill 的路径仍不清晰 |

> 趋势小结：需求呈现"**评测/安全/分发/记忆**"四大支柱——底层是评测基础设施失灵（多条 PR/Issue 联动），中层是供应链信任与命名空间治理，上层是企业分发与长期 Agent 能力（记忆、治理）。

---

## 3. 高潜力待合并 Skills

以下 PR 评论活跃或被多个 Issue 引用，落地概率较高：

| PR | Skill / 修复 | 关注依据 |
|---|---|---|
| [#1298](https://github.com/anthropics/skills/pull/1298) | skill-creator：run_eval.py recall 修复 + Windows 多项修复 | 阻塞整个 description 优化闭环，多 Issue 联动 |
| [#538](https://github.com/anthropics/skills/pull/538) | pdf：8 处大小写引用错误修复 | 影响 case-sensitive 文件系统，最小风险高收益 |
| [#541](https://github.com/anthropics/skills/pull/541) | docx：tracked change 与 bookmark `w:id` 冲突修复 | 防止文档损坏，根因明确 |
| [#539](https://github.com/anthropics/skills/pull/539) | skill-creator：YAML 特殊字符未引号告警 | 提前捕获 silent 解析失败 |
| [#1367](https://github.com/anthropics/skills/pull/1367) | self-audit v1.3.0（推理质量门禁） | 与 Proposal #1385 互锁，生态位明确 |
| [#1628](https://github.com/anthropics/skills/pull/1628) | Hivemind 零成本多 Agent 编排 | 新近且契合"上下文是稀缺资源"的社区共识 |
| [#1615](https://github.com/anthropics/skills/pull/1615) | scnet-hpc | 填补 HPC 垂直场景 |
| [#83](https://github.com/anthropics/skills/pull/83) | skill-quality-analyzer / skill-security-analyzer | 元 Skill，呼应 #492 安全焦虑 |
| [#514](https://github.com/anthropics/skills/pull/514) | document-typography | 解决"所有文档都受影响"的普遍痛点 |
| [#1607](https://github.com/anthropics/skills/pull/1607) | claude-api：标记 4 个已退役模型 ID | 与 #1487 上下文爆炸问题联动 |

---

## 4. Skills 生态洞察（一句话）

> **当前社区最集中的诉求是"让 Skill 生态可信、可评测、可分发"——评测基础设施的失灵（#556 / #1298 / #1390 / #1487）、命名空间滥用带来的信任崩塌（#492，43 评论一骑绝尘）以及企业级分发缺位（#228）正成为压制 Skills 规模化的三大瓶颈，"质量门禁 + 供应链治理 + Org 共享库"是下一阶段最值得押注的方向。**

---

<think>The user wants me to generate a daily report for the Claude Code community based on GitHub data. Let me analyze the data carefully and create a structured Chinese daily report.

Key observations from the data:
1. No new releases in the past 24 hours
2. Issues are heavily skewed toward Windows/desktop app bugs, agent/subagent issues, and MCP-related problems
3. The biggest issue by far is #38335 with 839 comments about Claude Max plan session limits
4. There are many issues about Windows Desktop crashes, service problems, scheduled task issues
5. There's only 1 PR updated in the past 24 hours

Let me structure the report carefully:

1. **今日速览** - Summarize most important dynamics
2. **版本发布** - Skip since none
3. **社区热点 Issues** - Top 10 issues worth attention
4. **重要 PR 进展** - Only 1 PR, can't pick 10
5. **功能需求趋势** - Community feature requests trends
6. **开发者关注点** - Developer pain points

Let me pick the top 10 issues:
1. #38335 - Claude Max plan session limits (839 comments, 476 👍) - most important
2. #10238 - Subdirectories in skills (CLOSED, 53 comments, 168 👍) - enhancement
3. #85891 - Claude Desktop Windows always-on-top (45 comments, 101 👍)
4. #85603 - Typed input dropped (24 comments)
5. #75043 - Nested subagents bugs (20 comments)
6. #85840 - CoworkVMService Windows (8 comments)
7. #70678 - Keyboard navigation between messages (5 comments)
8. #90172 - Stealth restart destroys sessions (5 comments)
9. #78224 - Pause-and-resume background subagents (4 comments)
10. #89639 - macOS scheduled-task sessions wedge (3 comments)

For PRs, there's only 1, so I'll mention it but note the limited activity.

Feature trends:
- Subagent/agent management (multiple issues)
- Auto-compaction windows per agent
- Keyboard navigation
- Pause/resume background tasks
- Subdirectories in skills

Developer pain points:
- Windows Desktop stability issues
- Subagent reliability
- Session lifecycle management
- Background task management
- Permission boundaries

Let me write this in Chinese, professional tone for developers.</think>

# Claude Code 社区动态日报
**日期：2026-08-31**

---

## 1. 今日速览

过去 24 小时仓库无新版本发布，社区重心继续集中在 **桌面端稳定性** 和 **子代理(Subagent)生命周期管理** 两大方向。Windows 平台相关 Bug 报告密集出现，多个 Desktop 自动更新与服务恢复链路被指认为根因；同时，越来越多开发者提出"按 agent 角色区分 compaction 阈值"、"后台子代理可暂停/恢复"等细粒度控制诉求。

---

## 2. 版本发布

过去 24 小时无新 Release。

---

## 3. 社区热点 Issues

> 以下按讨论量与社区共鸣度排序，挑选 10 条最具代表性的 Issue。

| # | Issue | 关键点 |
|---|-------|--------|
| 1 | [#38335](https://github.com/anthropics/claude-code/issues/38335) — Claude Max 套餐配额异常消耗 | 评论 **839**、👍 **476**，自 2026-03 起持续发酵。大量 Max 订阅用户反馈 CLI 用量被过早耗尽，已被官方标记为 `[invalid]` 但社区普遍质疑分类错误，是目前声量最高的争议话题。 |
| 2 | [#10238](https://github.com/anthropics/claude-code/issues/10238) — Skills 支持子目录 | 👍 **168**，已 CLOSED。当前 skills 体系不支持嵌套目录结构，团队用户在规模化复用 skills 时遇到明显摩擦。 |
| 3 | [#85891](https://github.com/anthropics/claude-code/issues/85891) — Claude Desktop (Win11) 窗口强制置顶 | 评论 45 / 👍101。Windows 端长期未提供 always-on-top 关闭开关，与 macOS/Linux 行为不一致。 |
| 4 | [#85603](https://github.com/anthropics/claude-code/issues/85603) — TUI 输入在 turn 结束时被静默丢弃 | 评论 24。在 tmux + 长会话场景下尤为突出，影响交互可靠性。 |
| 5 | [#75043](https://github.com/anthropics/claude-code/issues/75043) — 嵌套子代理强制异步、TaskStop 报错 | 评论 20。被 Orchestrator 子代理派生的 child agent 无法被正确同步管理，resume 后任务所有权错乱。 |
| 6 | [#85840](https://github.com/anthropics/claude-code/issues/85840) — Windows CoworkVMService 恢复动作失效 | 评论 8。根因被定位为 `NT SERVICE\AppXSvc` 的 DACL 权限配置错误，导致 claude.exe 无 crash dump 的"沉默挂起"。 |
| 7 | [#70678](https://github.com/anthropics/claude-code/issues/70678) — 用户消息间键盘跳转（↑/↓ 上一/下一条） | 评论 5。开发者高频需求：长对话场景下的快速导航能力。 |
| 8 | [#90172](https://github.com/anthropics/claude-code/issues/90172) — Desktop 静默重启吞掉运行中的会话 | 评论 5。Electron 内嵌 Claude Code 自动更新机制导致会话无预警中断，造成未保存工作丢失。 |
| 9 | [#78224](https://github.com/anthropics/claude-code/issues/78224) — 后台子代理遇到可恢复错误时"暂停-恢复"而非终止 | 评论 4。当前对限额/瞬时 API 错误的处理粒度过粗，错失可恢复机会。 |
| 10 | [#89639](https://github.com/anthropics/claude-code/issues/89639) — macOS 计划任务会话在 ~30s 后卡死 | 评论 3。WebSearch/WebFetch 阶段僵死，pin 住全局并发槽位致整个调度饿死。 |

---

## 4. 重要 PR 进展

过去 24 小时仅有 1 条 PR 更新：

- [#35350](https://github.com/anthropics/claude-code/pull/35350) — **`fix(plugins): use portable shebangs in shell scripts`** ✅ CLOSED
  - 将 11 个仍使用 `#!/bin/bash` 的插件脚本改为 `#!/usr/bin/env bash`，修复 NixOS 等非标准 bash 路径环境下插件 hook 失效问题。

> 仓库 PR 活跃度处于低位，建议关注上游 `anthropics/claude-code` 主线分支的合并节奏。

---

## 5. 功能需求趋势

从近 24 小时及近期延续活跃的 Issues 中提炼出以下社区共识方向：

| 方向 | 代表 Issue | 社区诉求摘要 |
|------|-----------|--------------|
| **子代理生命周期精细化** | [#75043](https://github.com/anthropics/claude-code/issues/75043)、[#78224](https://github.com/anthropics/claude-code/issues/78224)、[#90347](https://github.com/anthropics/claude-code/issues/90347)、[#90862](https://github.com/anthropics/claude-code/issues/90862) | coordinator 与 child agent 的 **独立 compact 窗口**、**独立 compaction 阈值**、**可暂停/恢复** 的后台子代理，呼声集中在长任务 / 多轮 agent 工作流场景。 |
| **会话/任务调度可靠性** | [#89639](https://github.com/anthropics/claude-code/issues/89639)、[#89859](https://github.com/anthropics/claude-code/issues/89859)、[#80372](https://github.com/anthropics/claude-code/issues/80372) | 计划任务卡死、调度进程泄漏、后台 Bash 被 ~30 分钟超时 —— **scheduled-task / background task 的资源回收** 成为新增焦点。 |
| **桌面端一致性** | [#85891](https://github.com/anthropics/claude-code/issues/85891)、[#90172](https://github.com/anthropics/claude-code/issues/90172)、[#90891](https://github.com/anthropics/claude-code/issues/90891)、[#90892](https://github.com/anthropics/claude-code/issues/90892) | Windows/macOS Desktop 行为差异、自动更新策略、Browser pane 崩溃 —— 桌面端"一致性 + 可控更新"是核心痛点。 |
| **导航与 UX** | [#70678](https://github.com/anthropics/claude-code/issues/70678) | 长对话中用户消息间的键盘跳转能力。 |
| **Skills 组织能力** | [#10238](https://github.com/anthropics/claude-code/issues/10238) | 支持嵌套子目录，便于团队级 skills 仓库的维护。 |

---

## 6. 开发者关注点 / 高频痛点

1. **🪟 Windows Desktop 稳定性**：过去 24h 内 Windows 平台 bug 报告数量明显压倒 macOS/Linux。问题集中在：自动更新引发的"静默重启"（#90172、#90891）、Electron Browser pane 崩溃（#90892）、打包服务 DACL 权限错配导致无法自愈（#85840、#89711）、计划任务进程泄漏（#89859）。**首尾呼应的根因都指向"进程生命周期与服务恢复链"的设计**。

2. **🤖 子代理体系还不"工程化"**：Orchestrator → Subagent 的多级嵌套是 Claude Code 当前最被热捧的能力形态，但配套的"暂停-恢复、所有权、嵌套同步/异步、coordinator 与 child 的独立 compact 窗口"均处于缺失状态，几乎所有该方向 Issue 都拿到较多 👍。

3. **💸 配额与计费透明度**：[#38335](https://github.com/anthropics/claude-code/issues/38335) 虽然被标 `[invalid]`，但 476 个 👍 与 839 条评论显示社区对 **Max 计划配额计数逻辑** 存在强烈不信任 —— 这是当前最易引发负面情绪的单点问题。

4. **🔌 MCP 集成健壮性**：draft-07 JSON Schema 被拒绝（#88882）、嵌套对象参数被序列化为字符串（#87361）等问题已多发 —— MCP 工具在 Claude Code 内的参数序列化与 schema 校验一致性是隐性问题。

5. **🌐 跨平台 CLI 兼容性**：[#90800](https://github.com/anthropics/claude-code/issues/90800) 报告 headless Linux 上所有子命令（除 `--version`）无限挂起 —— 在 CI/CD 场景下影响严重；与本次 PR #35350 的 shebang 修复共同提示：**非主流 Linux 发行版的兼容性正在被忽视**。

6. **🛡 模型行为边界**：[#90896](https://github.com/anthropics/claude-code/issues/90896)（Fable 5 safeguard 误判）与 [#90893](https://github.com/anthropics/claude-code/issues/90893)（OPUS 5 输出 harness scaffolding）说明新模型上线初期的 **安全分类器过严 / 输出越界** 是当前模型迭代需要直面的副作用。

---

> **小结**：今日社区呈典型"无 Release、问题累积"形态。Windows Desktop 与子代理体系是两面承压墙，开发者既要求功能更强（per-agent 控制），又要求基础体验更稳（不静默重启、调度不泄漏、配额要透明）。

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

<think>The user wants me to generate a daily report for the OpenAI Codex community based on GitHub data from 2026-08-31. Let me analyze the data carefully.

Let me organize the key information:

**Releases (3 alpha versions in 24 hours):**
- rust-v0.152.0-alpha.6
- rust-v0.152.0-alpha.5
- rust-v0.152.0-alpha.4

**Top Issues by comments:**
1. #38350 - Recurring scheduled tasks disable themselves (57 comments)
2. #39903 - Disable "Ran N commands" collapsing (51 comments, 70 thumbs up)
3. #41049 - code-mode host exited during handshake (41 comments)
4. #33685 - Weekly limit draining like 5-hour limit (31 comments)
5. #40968 [CLOSED] - Windows Send button spins forever (17 comments)
6. #41290 - WSL project creation/removal fails (17 comments)
7. #34652 - Windows file-edit approval buttons unresponsive (13 comments)
8. #39823 - Session resume fails with "already has an active writer" (11 comments)
9. #25317 - Windows Desktop + WSL shell stays poisoned (9 comments)
10. #41513 - Floating pets become click-through (9 comments)
11. #34898 - Self-reinforcing governance loops (8 comments)
12. #38766 - Desktop app headless during startup (7 comments)
13. #20009 - OAuth MCP server tools not imported (7 comments)
14. #40913 - code-mode host exited during handshake (Windows) (7 comments)
15. #20090 - "Ran N commands" expansion shows blank (6 comments)
16. #20165 - codex resume --all doesn't list sessions (6 comments)
17. #30233 - thread-management tools not exposed (6 comments)
18. #41472 - Non-image attachments rejected (5 comments)
19. #38839 - TUI replays entire transcript on resize (5 comments)
20. #27344 - macOS Intel traffic light controls clipped (5 comments)
21. #41327 - Computer Use helper SIGTRAPs (5 comments)
22. #41712 - Text output obscured by input box (4 comments)
23. #41353 - Paginated rollout writers emit overlapping ordinals (3 comments)
24. #19944 - 5 Hour usage wiped with 6 prompts (3 comments)
25. #41501 - Windows pet overlay loses hit region (3 comments)
26. #41584 - Bulk project archive fails with stale entries (3 comments)
27. #41246 - Agent-created tab disappears (3 comments)
28. #39467 - ChatGPT login redirects to add-phone (3 comments)
29. #40433 - Linux bubblewrap bootstrap fails (3 comments)
30. #40956 - Managed network proxy breaks Yarn Berry (2 comments)

**PRs (10 PRs, all CLOSED, all by copyberry[bot]):**
1. #41744 - Make update_plan tool opt-in
2. #41743 - Mark history ingestion requests in turn metadata
3. #41742 - Show actionable rate-limit banners in TUI
4. #41700 - Support package-style MCP server names
5. #41683 - Set working directories for environment MCP tests
6. #41673 - Repair cursor-style rendering on older JediTerm
7. #41666 - Approve first Node REPL execution without Guardian wait
8. #41660 - Preserve Guardian authorization across history compaction
9. #41630 - Update tests for default-enabled update_plan
10. #41613 - Move Vim history tests into history search module

Let me now compose the report in Chinese.

Key themes I notice:
1. Windows-specific issues dominate (WSL, Desktop app, code-mode handshake)
2. Rate limit issues (5-hour → weekly transition)
3. MCP server improvements (package-style names, OAuth issues)
4. update_plan tool changes (PRs #41744 and #41630 - clearly related)
5. Guardian authorization changes
6. TUI improvements (rate-limit banners, cursor rendering, session resume)
7. Pet feature issues on Windows (overlay problems)

Let me write this report.</think>

# OpenAI Codex 社区动态日报

**日期：2026-08-31**
**数据来源：[github.com/openai/codex](https://github.com/openai/codex)**

---

## 一、今日速览

Codex 今日集中发布 **3 个 0.152.0 alpha 迭代版本**，Rust 引擎进入密集预发布节奏。社区层面，**Windows 桌面端的稳定性问题仍是头号热点**，尤其是 WSL 集成、`code-mode host` 握手失败、宠物（Pets）浮层交互异常等历史顽疾持续积累反馈；同时 `update_plan` 工具、MCP 服务包名规范、Guardian 鉴权持久化等核心机制也在快速重构。

---

## 二、版本发布

过去 24 小时连续发布 **3 个 alpha 预发布版本**，节奏明显加快：

| 版本 | 标签 | 发布时间 |
|------|------|---------|
| [rust-v0.152.0-alpha.6](https://github.com/openai/codex/releases/tag/rust-v0.152.0-alpha.6) | alpha | 2026-08-31 |
| [rust-v0.152.0-alpha.5](https://github.com/openai/codex/releases/tag/rust-v0.152.0-alpha.5) | alpha | 2026-08-31 |
| [rust-v0.152.0-alpha.4](https://github.com/openai/codex/releases/tag/rust-v0.152.0-alpha.4) | alpha | 2026-08-31 |

> 注：上述 Release 说明未提供详细 changelog，建议结合今日 10 个 PR（见后文）理解变更内容，重点关注 `update_plan` 默认行为调整、TUI 限流横幅、MCP 命名规范等。

---

## 三、社区热点 Issues（精选 10 条）

| # | 标题 | 热度 | 重要性 |
|---|------|------|--------|
| [#38350](https://github.com/openai/codex/issues/38350) | **定时任务成功执行后自动被禁用**（ChatGPT Web 自动化场景） | 57 评论 | 严重影响 Pro 用户自动化工作流，多个不相关任务同时自停；属长期未修复的回归类问题 |
| [#39903](https://github.com/openai/codex/issues/39903) | 希望可关闭「Ran N commands」折叠，始终展示执行命令 | 51 评论 / 👍70 | **今日获赞最高的 Issue**，社区对 TUI 可控性诉求强烈，与 [#20090](https://github.com/openai/codex/issues/20090) 的"展开后空白"互为补充 |
| [#41049](https://github.com/openai/codex/issues/41049) | Windows：`code-mode host exited during handshake`，GPT-5.6 模型无法工作 | 41 评论 | 与 [#40913](https://github.com/openai/codex/issues/40913) 同源，集中在 Windows 桌面端 + GPT-5.6 模型路径 |
| [#33685](https://github.com/openai/codex/issues/33685) | 周限额消耗速度与原 5 小时限制一致 | 31 评论 / 👍17 | 用户对 5h→weekly 切换后的"节奏不变"强烈不满，是订阅体验层面的核心吐槽 |
| [#41290](https://github.com/openai/codex/issues/41290) | Windows + WSL：切换 Agent Environment 至 WSL 后项目创建/删除失败 | 17 评论 | 反映 WSL 模式切换时工作区状态机存在缺陷 |
| [#34652](https://github.com/openai/codex/issues/34652) | Windows 桌面：Remote SSH 会话中文件编辑审批按钮无响应（CLI 审批正常） | 13 评论 | 桌面与远端桥接层审批通道脱节的经典 bug |
| [#39823](https://github.com/openai/codex/issues/39823) | CLI/TUI 会话恢复时报 `already has an active writer` | 11 评论 | approval-mode 与会话切换的状态污染问题 |
| [#34898](https://github.com/openai/codex/issues/34898) | Codex 陷入自强化治理循环，耗尽用量却未完成任务 | 8 评论 | GPT-5.6 + 高推理强度下的行为治理漏洞，对 Pro 用户成本影响显著 |
| [#41513](https://github.com/openai/codex/issues/41513) | Windows Pets 浮层首次拖拽后失去点击区域 | 9 评论 | 与 [#41501](https://github.com/openai/codex/issues/41501) 同源，体现 Windows 浮层 hit-testing 缺陷 |
| [#20009](https://github.com/openai/codex/issues/20009) | Codex Desktop 完成 OAuth MCP 鉴权但未将工具导入线程 | 7 评论 / 👍5 | **长期未修复**的 MCP 集成问题，影响第三方工具接入体验 |

---

## 四、重要 PR 进展（精选 10 条）

> 所有 PR 均由自动化机器人 [`copyberry[bot]`](https://github.com/copyberry) 提交，且当日全部已合并（CLOSED）。

| PR | 主题 | 关键变更 |
|----|------|---------|
| [#41744](https://github.com/openai/codex/pull/41744) | **`update_plan` 工具改为 opt-in** | 默认 `tools.update_plan.enabled = false`；同步从多类系统提示中移除其引导语。直接影响 [#41630](https://github.com/openai/codex/pull/41630) 的测试调整 |
| [#41743](https://github.com/openai/codex/pull/41743) | 在 turn metadata 中标记历史摄入请求 | 为 Responses API 增加 `history_ingest_requested` 标志位，并保留核心自有字段不被覆盖 |
| [#41742](https://github.com/openai/codex/pull/41742) | TUI 中展示可操作的限流横幅 | 透传后端 banner 与账户身份信息，并在 composer 上方渲染限流提示 — **直接回应 #33685 类吐槽** |
| [#41700](https://github.com/openai/codex/pull/41700) | 支持包风格的 MCP 服务名 | 允许 MCP 服务名包含 `:`, `@`, `/`, `.`，覆盖 `mcp add/get/list/remove`、运行时命名空间与 OAuth 流程 |
| [#41683](https://github.com/openai/codex/pull/41683) | 为环境型 MCP 测试设置工作目录 | 修复 stdio MCP 测试因无 `cwd` 回退而失败的隐患 |
| [#41673](https://github.com/openai/codex/pull/41673) | 修复老版 JediTerm 终端的光标样式渲染 | 解决 `DECSCUSR` 中间空格覆盖字形的问题 |
| [#41666](https://github.com/openai/codex/pull/41666) | Node REPL 首次执行免 Guardian 等待 | 首次 `js` 执行放行，异步分类在后台继续 — 改善交互首屏延迟 |
| [#41660](https://github.com/openai/codex/pull/41660) | 跨历史压缩保留 Guardian 授权 | 压缩与宿主注入上下文不应被视作授权变更，Guardian 可复用已有 review |
| [#41630](https://github.com/openai/codex/pull/41630) | 更新 `update_plan` 默认开启后的测试 | 覆盖默认/显式启用/显式禁用三种状态，与 #41744 配套 |
| [#41613](https://github.com/openai/codex/pull/41613) | 将 Vim 历史测试迁移至 history search 模块 | 代码结构整理，共享人类键入测试工具 |

---

## 五、功能需求趋势

从近 24 小时高活跃 Issue 与 PR 综合提炼：

1. **Windows / WSL 一致性体验**（绝对热点）
   - 涉及 WSL 环境切换、Remote SSH、code-mode 握手、宠物浮层、Pets hit-testing、`unified_exec` 路径泄漏等多个长尾问题，反映 Windows 桌面端与底层引擎对齐度不足。

2. **限流与订阅体验透明化**
   - 用户对周限额"耗速过快"（#33685）和 5h 窗口突被清零（#19944）持续不满；PR #41742 直接把后端 banner 推到 TUI，预计将形成"可解释限流"趋势。

3. **TUI 可控性与可读性**
   - #39903（取消折叠）、#20090（展开空白）、#38839（resize 重放整段）、#41673（光标渲染）共同指向 TUI 终端兼容性与细节打磨。

4. **MCP 生态完善**
   - 包风格命名（#41700）、环境型工作目录（#41683）、OAuth 工具导入（#20009）显示 MCP 正在从"能跑"走向"工业化"。

5. **`update_plan` 与 Guardian 策略重构**
   - PR #41744 把规划工具改为 opt-in、#41660 保留跨压缩授权、#41666 减少 REPL 首次等待 — 这是 Codex 在"工具治理"层面的一次明显收紧。

6. **会话/项目持久化**
   - #39823（resume 冲突）、#41353（rollout ordinal 重叠）、#41584（批量归档 stale rollout）共同暴露长会话状态机的脆弱性。

---

## 六、开发者关注点

1. **"我能看见到底发生了什么"**
   围绕折叠命令、限流横幅、审批按钮无响应、文本被输入框遮挡等"看不见/点不到"问题反复出现，开发者渴望更高的 TUI 可观测性。

2. **"别替我做主"**
   `update_plan` 改为 opt-in、关闭/开启 `Ran N commands` 折叠请求等，本质都希望 **关闭默认智能行为、把决策权交给用户**。

3. **"Windows 是二等公民"**
   WSL 路径污染、捆绑 `node.exe` 0xC0000022、宠物浮层 hit-testing、code-mode 握手失败——Windows 用户几乎在每个高频 Issue 中都有出现，**这是当前最突出的开发者痛点**。

4. **"GPT-5.6 治理缺位"**
   #34898 描述的"自我强化治理循环"和 #41049/#40913 的握手异常表明，新模型（gpt-5.6 / 5.6-sol max）在 Windows 路径与高推理强度下的行为尚未稳定。

5. **"会话和项目是脆的"**
   resume --all 列表缺失、rollout 序号冲突、批量归档仅处理已加载项——长任务流的可恢复性与并发安全仍是社区高频担忧。

---

> **日报小结**：今日 Codex 处于 alpha 高频迭代 + 架构收敛的双线状态：前端着重 TUI 体验（限流、命令折叠、光标），后端着重工具治理（`update_plan` opt-in、Guardian 持久化）与 MCP 工业级命名。Windows 桌面端的体验差距，是下一个版本最值得跟踪的改进主线。

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

<think>The user wants me to generate a Chinese daily report about Gemini CLI community dynamics for 2026-08-31. Let me analyze the data carefully and structure the report according to the requested sections.

Let me analyze the data:

**Releases:**
- v0.59.0-nightly.20260831.g0bd1d4397 - This is a nightly release. The changelog comparison shows it's between two nightly versions (20260830 and 20260831) with the same git hash g0bd1d4397. This suggests there might not be significant changes between these two nightlies, or this is just a standard nightly cut.

**Issues (Top 30 by comments):**
1. #22323 - Subagent recovery after MAX_TURNS reported as GOAL success (P1, 13 comments, 2 👍)
2. #21409 - Generalist agent hangs (P1, 8 comments, 8 👍)
3. #19873 - Zero-Dependency OS Sandboxing & Post-Execution Intent Routing (P2, 8 comments, 1 👍)
4. #22745 - Assess impact of AST-aware file reads, search, and mapping (P2, 7 comments, 1 👍)
5. #21968 - Gemini does not use skills and sub-agents enough (P2, 6 comments, 0 👍)
6. #26525 - Add deterministic redaction and reduce Auto Memory logging (P2, 5 comments)
7. #25166 - Shell command execution gets stuck with "Waiting input" (P1, 4 comments, 3 👍)
8. #22232 - Browser agent resilience (P3, 4 comments)
9. #21983 - browser subagent fails in wayland (P1, 4 comments, 1 👍)
10. #21000 - Native file tools for task tracker (P3, 4 comments)
11. #20079 - Symlink in ~/.gemini/agents/ not recognized (P2, 4 comments)
12. #26523 - Surface or quarantine invalid Auto Memory inbox patches (P2, 3 comments)
13. #26522 - Stop Auto Memory from retrying low-signal sessions (P2, 3 comments)
14. #24246 - 400 error with > 128 tools (P2, 3 comments)
15. #23571 - Model frequently creates tmp scripts in random spots (P2, 3 comments)
16. #22672 - Agent should stop/discourage destructive behavior (P2, 3 comments, 1 👍)
17. #22267 - Browser Agent ignores settings.json overrides (P2, 3 comments)
18. #22186 - get-shit-done output hook causes crash (P1, 3 comments)
19. #20195 - [Agents] - Local Subagent - Sprint 1 (P3, 3 comments)
20. #26516 - Memory system bugs and quality improvements (P2, 2 comments)

**PRs (Top 20):**
Most are closed with pr-nudge-sent status, which suggests they're being closed by a bot for inactivity. Let me look at the more important ones:

1. #26848 - IPv6 loopback in Host header validation (security)
2. #26905 - Bracketed-paste markers for multi-line pastes (Windows)
3. #26907 - Remove redundant double-quote wrap
4. #26914 - Include gemini-2.5-flash-lite in default fallback chain
5. #26930 - Restore previous extension on failed update
6. #26932 - Handle refreshAuth rejection in non-interactive
7. #26931 - Deep-merge user and workspace settings
8. #29132 - Normalize line endings in diff context (OPEN)
9. #28834 - Suppress spurious ENOENT warning (workspace scan)
10. #28835 - Skip user agents dir when workspace is home
11. #28839 - Normalize MCP tool schemas
12. #28840 - Populate cached/thought tokens in PromptResponse
13. #28832 - Skip environment-dependent tests
14. #28848 - Handle refreshAuth failures gracefully
15. #28838 - Update ripgrep import
16. #28837 - Wrap logChatCompression OTel calls
17. #28836 - Show Auto in /model when dynamicModelConfiguration enabled
18. #28971 - Keep truncated MCP tool names unique (OPEN)
19. #28983 - Detect mixed line endings (OPEN)
20. #28982 - Add Build Remote Agent phone pairing (OPEN)

Now let me identify key themes:
- **Agent reliability**: Many issues around subagent hangs, crashes, MAX_TURNS handling
- **Memory system**: Multiple issues from SandyTao520 about Auto Memory (26525, 26523, 26522, 26516)
- **Browser agent**: Several issues around browser subagent (22232, 21983, 22267)
- **Tool/Schema issues**: MCP tool schema normalization, tool count limits
- **Shell/terminal issues**: Windows paste handling, line endings, terminal resize
- **Security**: Host header validation, secret redaction
- **Model fallback**: gemini-2.5-flash-lite fallback
- **AST-aware tooling**: Investigation of AST-aware file reads
- **Sandboxing**: Zero-dependency OS sandboxing

Now let me draft the report. I should be selective and pick the most important ones.

Let me think about what's most important:

Top 10 Issues to highlight:
1. #22323 - P1 bug, subagent reports success incorrectly - reliability issue
2. #21409 - P1 bug, generalist agent hangs - has 8 upvotes, very impactful
3. #25166 - P1 bug, shell command stuck "Waiting input" - has 3 upvotes
4. #21983 - P1 bug, browser subagent fails in Wayland
5. #22186 - P1 bug, get-shit-done crash
6. #21968 - Skills and sub-agents underutilization - usability
7. #19873 - OS sandboxing enhancement - strategic
8. #22745 - AST-aware file reads - strategic investigation
9. #26525 - Security/privacy in Auto Memory
10. #24246 - 400 error with > 128 tools

Top 10 PRs:
1. #26914 - gemini-2.5-flash-lite fallback (very impactful)
2. #26932 / #28848 - refreshAuth failure handling
3. #28839 - MCP tool schema normalization
4. #28840 - Token accounting fix (3x cost overestimation)
5. #26905 - Windows paste fix
6. #26848 - IPv6 loopback validation
7. #26930 - Extension update recovery
8. #26931 - Settings deep merge
9. #29132 - Line ending normalization
10. #28971 / #28983 - Tool name uniqueness / mixed line endings

Trends I see:
- Agent reliability and stability (hangs, crashes)
- Memory system improvements
- Cross-platform compatibility (Windows, Wayland)
- MCP ecosystem robustness
- Security hardening (redaction, validation)
- Developer experience (settings merge, terminal UX)

Let me write the report in Chinese now. I'll be concise and professional.

Important note: Most PRs are being closed automatically (status/pr-nudge-sent). This is interesting to mention - looks like there's an automated process nudging old PRs.

Let me structure the report:

1. 今日速览 - 2-3 sentences
2. 版本发布 - nightly release
3. 社区热点 Issues - 10 picks
4. 重要 PR 进展 - 10 picks
5. 功能需求趋势 - synthesized from issues
6. 开发者关注点 - pain points

Let me write this now.</think>

# Gemini CLI 社区动态日报
**日期：2026-08-31**

---

## 📌 今日速览

今日社区焦点集中在 **Agent 子代理可靠性** 与 **Auto Memory 系统** 两条主线：P1 级 subagent 误报 `GOAL success`、generalist agent 无限挂起、shell 执行卡在 "Waiting input" 等问题持续发酵；同时 SandyTao520 集中提交了 4 个 Auto Memory 跟踪 Issue，覆盖隐私脱敏、补丁隔离、低信号会话防抖等系统性问题。PR 层面则出现大量旧 PR 被自动 nudge 后关闭（多见于 `pr-nudge-sent` 状态），新合并/活跃的 PR 主要围绕 **模型 fallback、token 计量准确性、MCP 工具兼容性** 等方向。

---

## 🚀 版本发布

**v0.59.0-nightly.20260831.g0bd1d4397** 已发布（nightly 通道）

- 与昨日 nightly 版本对比 git hash 一致（`g0bd1d4397`），增量改动较少，典型的常规 nightly 切割，建议关注明天的版本说明确认是否合入了相关修复。
- [Full Changelog](https://github.com/google-gemini/gemini-cli/compare/v0.59.0-nightly.20260830.g0bd1d4397...v0.59.0-nightly.20260831.g0bd1d4397)

---

## 🔥 社区热点 Issues（Top 10）

| # | Issue | 优先级 | 评论数 | 重要原因 |
|---|-------|--------|--------|----------|
| 1 | [#22323](https://github.com/google-gemini/gemini-cli/issues/22323) Subagent recovery after MAX_TURNS reports GOAL success | P1 | 13 | **可靠性核心 bug**：subagent 实际已触达 MAX_TURNS 上限却上报"成功"，掩盖了真实中断，对调试和成本控制危害极大 |
| 2 | [#21409](https://github.com/google-gemini/gemini-cli/issues/21409) Generalist agent hangs | P1 | 8 (👍8) | **最高赞问题**：触发 generalist agent 后整 CLI 永久挂起，连简单建目录都无法完成，用户体验严重受损 |
| 3 | [#19873](https://github.com/google-gemini/gemini-cli/issues/19873) Zero-Dependency OS Sandboxing & Post-Execution Intent Routing | P2 | 8 | **战略性增强**：围绕 Gemini 3 模型的 bash-native 训练特性，提出 OS 层零依赖沙箱方案，安全与能力并重 |
| 4 | [#22745](https://github.com/google-gemini/gemini-cli/issues/22745) AST-aware file reads, search, and mapping | P2 | 7 | **效率优化 EPIC**：评估 AST 感知工具对减少误读、降低 token 噪声的价值，可能带来新一轮上下文优化 |
| 5 | [#21968](https://github.com/google-gemini/gemini-cli/issues/21968) Gemini 不主动使用 skills 和 sub-agents | P2 | 6 | **可用性问题**：模型在无显式指令时几乎不调用自定义 skills/sub-agents，影响用户自定义能力的发挥 |
| 6 | [#25166](https://github.com/google-gemini/gemini-cli/issues/25166) Shell 命令完成后仍卡在 "Waiting input" | P1 | 4 (👍3) | **高频 P1 bug**：即使简单 shell 命令结束后 CLI 也持续显示活跃，强制打断流程 |
| 7 | [#26525](https://github.com/google-gemini/gemini-cli/issues/26525) Auto Memory 确定性脱敏与日志精简 | P2/security | 5 | **安全/隐私**：当前依赖模型在 prompt 中"事后"脱敏，存在敏感数据已进入模型上下文的窗口期风险 |
| 8 | [#21983](https://github.com/google-gemini/gemini-cli/issues/21983) browser subagent 在 Wayland 下失败 | P1 | 4 | **跨平台 P1**：Wayland 用户被排除在 browser 子代理能力之外，Linux 桌面场景覆盖不全 |
| 9 | [#24246](https://github.com/google-gemini/gemini-cli/issues/24246) 工具数 >128 触发 400 错误 | P2 | 3 | **扩展性硬限**：当启用工具过多时直接 API 报错，缺少智能裁剪机制，制约扩展生态 |
| 10 | [#22672](https://github.com/google-gemini/gemini-cli/issues/22672) Agent 应避免破坏性操作 | P2 | 3 | **安全护栏**：模型偶尔使用 `git reset --force` 等危险命令，需要在 system prompt 层面强化防御 |

---

## 🛠️ 重要 PR 进展（Top 10）

> 注：今日多个早期 PR 已被自动 nudge 流程关闭（`status/pr-nudge-sent`），显示仓库正开展 PR 清理工作；以下挑选仍具价值或正在推进的 PR。

| # | PR | 状态 | 要点 |
|---|----|------|------|
| 1 | [#26914](https://github.com/google-gemini/gemini-cli/pull/26914) 默认 fallback 链加入 `gemini-2.5-flash-lite` | CLOSED | **免费用户友好**：Pro/Flash 配额耗尽时不再报错，自动 fallback 到 lite 版（1000 RPD），体验闭环 |
| 2 | [#26932](https://github.com/google-gemini/gemini-cli/pull/26932) / [#28848](https://github.com/google-gemini/gemini-cli/pull/28848) 非交互模式下 refreshAuth 失败优雅处理 | CLOSED×2 | 修复 `--prompt` 模式下 OAuth 刷新网络抖动导致 CLI 直接崩溃的问题，改为干净退出并给出认证错误码 |
| 3 | [#28840](https://github.com/google-gemini/gemini-cli/pull/28840) ACP PromptResponse 补齐 cached/thought tokens | CLOSED | **成本核算修复**：之前 ACP 客户端对启用 prompt caching 的会话**虚高估算约 3 倍费用**，现在 `_meta.quota` 字段补齐这两类 token 计数 |
| 4 | [#28839](https://github.com/google-gemini/gemini-cli/pull/28839) 规范化 MCP 工具 schema 确保 `type:object` | CLOSED | 修复部分 MCP server schema 不合规（如缺 type 或非 object）导致 Vertex AI 严格模式直接拒绝的问题 |
| 5 | [#26905](https://github.com/google-gemini/gemini-cli/pull/26905) 为无 bracketed-paste 标记的多行粘贴合成序列 | CLOSED | **Windows Terminal/PowerShell/WSL2 修复**：通过 ConPTY 时多行粘贴不再被提前提交，提升 Windows 体验 |
| 6 | [#26848](https://github.com/google-gemini/gemini-cli/pull/26848) Host header 校验放行 IPv6 loopback `[::1]` | CLOSED | **安全细节修复**：避免合法 IPv6 回环地址在 IDE companion server 校验中被误拒 |
| 7 | [#26930](https://github.com/google-gemini/gemini-cli/pull/26930) 扩展更新失败时回滚至原版本 | CLOSED | `loadExtension` 及后续步骤失败时，扩展不再是"半坏"状态，保证可用性 |
| 8 | [#26931](https://github.com/google-gemini/gemini-cli/pull/26931) A2A server 用户/工作区设置深度合并 | CLOSED | 修复顶层 spread 导致工作区 settings 覆盖 user settings 其它嵌套键的 bug |
| 9 | [#29132](https://github.com/google-gemini/gemini-cli/pull/29132) diff 上下文片段统一换行符 | OPEN | 计算 diff 前规范化 CRLF/CR，避免跨平台误判 |
| 10 | [#28971](https://github.com/google-gemini/gemini-cli/pull/28971) MCP 工具截断名保持唯一性 | OPEN | 修复超过 30 字符上限时首尾 30 字符截断**不具单射性**导致工具名冲突的 bug |

---

## 📈 功能需求趋势

从过去 24 小时的 Issue 分布看，社区关注呈现以下方向：

1. **🧠 Agent 体系可靠性（最高频）**  
   Subagent 状态报告错误、generalist agent 挂起、shell 执行卡死、Browser Agent 失败等问题密集出现，反映 Agent 架构在稳定性、错误传播、状态机一致性上仍是当前最大短板。

2. **💾 Auto Memory 系统化重构**  
   SandyTao520 在 5 月集中提出的 4 个跟踪 Issue（[#26525](https://github.com/google-gemini/gemini-cli/issues/26525)、[#26523](https://github.com/google-gemini/gemini-cli/issues/26523)、[#26522](https://github.com/google-gemini/gemini-cli/issues/26522)、[#26516](https://github.com/google-gemini/gemini-cli/issues/26516)）被持续更新，议题集中在 **隐私脱敏、补丁隔离、低信号防抖、整体质量**——这是中长期方向演进。

3. **🛡️ 沙箱化与安全护栏**  
   [#19873](https://github.com/google-gemini/gemini-cli/issues/19873) 提出的 OS 级零依赖沙箱、 [#22672](https://github.com/google-gemini/gemini-cli/issues/22672) 提出的破坏性操作拦截，反映社区对 **安全/可控执行** 的强需求。

4. **🌐 跨平台与终端体验**  
   Wayland 兼容、Windows 粘贴、终端 resize 高性能（[#21924](https://github.com/google-gemini/gemini-cli/issues/21924)）、`\n` 转义问题——非 macOS 平台与终端兼容性是热点。

5. **🔧 AST-aware 工具链探索**  
   [#22745](https://github.com/google-gemini/gemini-cli/issues/22745)、[#22746](https://github.com/google-gemini/gemini-cli/issues/22746)、[#19561](https://github.com/google-gemini/gemini-cli/issues/19561)（Tactful Extraction）共同指向 **更精确的代码读取/检索**，目的是减少 token 浪费与上下文污染。

6. **🤝 MCP 生态兼容性**  
   Schema 规范化（[#28839](https://github.com/google-gemini/gemini-cli/pull/28839)）、工具名唯一性（[#28971](https://github.com/google-gemini/gemini-cli/pull/28971)）、工具数上限（[#24246](https://github.com/google-gemini/gemini-cli/issues/24246)）——MCP 工具生态的稳健接入正在成为新的工程焦点。

---

## 🧑‍💻 开发者关注点

综合 Issue 评论与 PR 反馈，开发者当前的高频痛点与需求：

- **🔁 Subagent 透明度严重不足**  
  Bug report 不含 subagent 上下文（[#21763

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

<think>The user wants me to generate a GitHub Copilot CLI community daily report for 2026-08-31 based on the provided data. Let me analyze the data carefully.

Let me look at what's available:
- No releases in the past 24 hours
- 20 issues updated in the past 24 hours
- No PRs in the past 24 hours

Let me categorize the issues:

**OPEN issues (still active):**
1. #1285 - Organisation level Agent not showing up (8 comments, 9 👍) - HIGH engagement
2. #4612 - Runaway FileWatch host-event loop freezes TUI (8 comments, 1 👍) - Critical bug
3. #2861 - Compaction failed with empty response from model (2 comments, 3 👍)
4. #4646 - Compaction fails with CAPIError 400 on custom models (1 comment, 0 👍)
5. #4594 - Custom agent tools web/search aliases bind zero tools (1 comment, 1 👍)
6. #4169 - copilot -p does not emit OTEL telemetry (1 comment, 0 👍)
7. #4664 - CLI crashes with heap OOM when resuming long session (1 comment, 0 👍)
8. #3978 - CLI incorrectly switches back to previous model after BYOK (1 comment, 4 👍)
9. #4671 - 1.0.81 regression: OAuth fails behind TLS-inspecting proxy (0 comments, 0 👍) - NEW today
10. #4670 - Tool call hangs after extension startup fails (0 comments, 0 👍) - NEW today
11. #4669 - Managed telemetry.headers prevents OTEL export (0 comments, 0 👍) - NEW today
12. #4668 - Interrupted create_session still creates session ~1.6 hours later (0 comments, 0 👍) - NEW today
13. #4667 - Voice on can not be activated (0 comments, 0 👍) - NEW today
14. #4666 - Show GitHub hostname for all footer account identities (0 comments, 0 👍) - NEW today
15. #4665 - sessionStart additionalContext duplicated on each turn (0 comments, 0 👍) - NEW today

**CLOSED issues (recently resolved):**
1. #2369 - Unable to scroll to view long results (3 comments, 4 👍) - FIXED
2. #4660 - Remote ADO MCP server with OAuth fails (2 comments, 0 👍) - FIXED
3. #3797 - Different prompt input box layout in cmd tabs (2 comments, 0 👍) - FIXED
4. #2851 - Configured thinking effort vanishes (1 comment, 0 👍) - FIXED
5. #3606 - Newly installed plugin skills aren't usable (0 comments, 0 👍) - FIXED

The key observations:
- No releases today
- No PRs in the past 24 hours
- Several critical bugs reported around session management and performance
- Compaction failures appearing in multiple forms
- 1.0.81 regression issues (OAuth, proxy)
- New bug cluster around session extension/MCP behavior

Let me craft a well-structured Chinese daily report.

For the "10 most noteworthy issues" - I should pick based on:
- High engagement (comments + likes)
- Severity of the bug
- Recency (new issues)
- Topic importance

Top 10 picks:
1. #4612 - Runaway FileWatch loop (HIGH severity - freezes TUI, 13GB log)
2. #1285 - Organisation level Agent not showing (9 likes, high visibility)
3. #4664 - OOM crash on session resume (critical)
4. #2861 - Compaction failed empty response
5. #4646 - Compaction fails CAPIError custom models
6. #4671 - 1.0.81 OAuth regression
7. #4594 - Custom agent tools aliases broken
8. #3978 - BYOK model switching bug
9. #4169 - Telemetry not emitted
10. #4665 - sessionStart context duplication (subagent issue)

For feature trends:
- Session management stability
- Compaction feature reliability
- OAuth/proxy enterprise support
- BYOK model handling
- Custom agent configuration
- OTEL/observability
- Terminal rendering issues
- Voice support

For developer pain points:
- Session resume/crash issues
- Compaction reliability
- Proxy/corporate network compatibility
- Telemetry/observability
- Custom agent configuration

Let me write the report now in Chinese.</think>

# GitHub Copilot CLI 社区动态日报

**日期：2026-08-31**

---

## 1. 今日速览

过去 24 小时仓库没有新的 Release 或 PR 更新，但社区活跃度集中在 **会话管理稳定性** 与 **1.0.81 回归问题** 两大主题：多条近期新增 Issue 指向长会话恢复时的 OOM 崩溃、FileWatch 事件循环失控导致 TUI 卡死，以及 1.0.81 在 TLS 检测代理后 OAuth 登录失败等严重缺陷。与此同时，#2369、#3606、#3797、#2851 等历史问题在今日关闭，显示终端渲染与插件体验方面有一波修复落地。

---

## 2. 版本发布

⚠️ **无新版本发布**。过去 24 小时 `github/copilot-cli` 未推送新 Release。当前社区讨论的 1.0.81 多个回归问题（见下文）尚无新补丁释放。

---

## 3. 社区热点 Issues（Top 10）

| # | Issue | 状态 | 为什么重要 | 社区反应 |
|---|-------|------|------------|----------|
| 1 | [#4612](https://github.com/github/copilot-cli/issues/4612) **FileWatch 事件循环失控导致 TUI 冻结、debug 日志膨胀至 13GB** | OPEN | 长会话/恢复场景下会进入死循环，终端 UI 完全无响应，日志文件无上限增长——属于严重可用性与磁盘安全双重缺陷 | 💬 8 / 👍 1 |
| 2 | [#1285](https://github.com/github/copilot-cli/issues/1285) **组织级 Agent 在 CLI/VS Code 中不显示** | OPEN | 涉及企业（Enterprise）层面的 Agent 发现机制，影响 `.github-private` 仓库模板下的 Agent 可见性，对组织级落地至关重要 | 💬 8 / 👍 9（最高赞） |
| 3 | [#4664](https://github.com/github/copilot-cli/issues/4664) **恢复长会话时 Node.js 堆内存溢出崩溃** | OPEN | 用户在加载/恢复旧会话阶段直接 OOM 退出，进程接近 Node 默认堆上限，属于核心场景的功能性故障 | 💬 1 / 👍 0（新增即高优先级） |
| 4 | [#2861](https://github.com/github/copilot-cli/issues/2861) **Opus 4.6 上 `/compact` 三次重试均返回空响应** | OPEN | 上下文压缩（compaction）是 CLI 核心能力，连续 3 次空响应意味着用户在长任务中无法压缩上下文 | 💬 2 / 👍 3 |
| 5 | [#4671](https://github.com/github/copilot-cli/issues/4671) **1.0.81 在 TLS 检测代理后 OAuth 登录失败（1.0.80 正常）** | OPEN | 明确标注的版本回归，device-code 与 web 流程同时挂掉，直接影响企业内网用户升级 | 💬 0 / 👍 0（今日新增，回归性质严重） |
| 6 | [#4646](https://github.com/github/copilot-cli/issues/4646) **自定义模型下 `/compact` 触发 `CAPIError: 400 Tool choice must be auto`** | OPEN | OpenRouter/自定义模型用户无法使用压缩，暴露出 compaction 对模型 tool_choice 协议的处理缺失 | 💬 1 / 👍 0 |
| 7 | [#4594](https://github.com/github/copilot-cli/issues/4594) **自定义 Agent 中 `tools: web`/`search` 别名静默绑定零工具** | OPEN | 文档承诺的类别别名实际未生效，且无任何警告——典型的"沉默错误"，对自定义 Agent 作者非常坑 | 💬 1 / 👍 1 |
| 8 | [#4665](https://github.com/github/copilot-cli/issues/4665) **`sessionStart` 钩子的 `additionalContext` 每轮重复注入并传递到子 Agent** | OPEN | 导致 token 成本失控，并污染子 Agent 上下文；Hook 系统的语义定义需要被修复 | 💬 0 / 👍 0（今日新增） |
| 9 | [#4668](https://github.com/github/copilot-cli/issues/4668) **`create_session` 标记中断后 ~1 小时 38 分仍自动启动，重复执行 Agent 工作** | OPEN | 会话生命周期与工具状态机不一致，重复任务可能造成数据副作用；可信度问题 | 💬 0 / 👍 0（今日新增） |
| 10 | [#3978](https://github.com/github/copilot-cli/issues/3978) **切换到 BYOK 后 CLI 自动回退到原 Copilot 模型** | OPEN | BYOK 用户的模型选择被忽略，等同于计费/合规配置失效 | 💬 1 / 👍 4 |

**今日关闭的代表性 Issue**：[#2369 滚动查看长结果失败](https://github.com/github/copilot-cli/issues/2369)（终端渲染）、[#3606 插件装完需手动 `/skills reload`](https://github.com/github/copilot-cli/issues/3606)、[#2851 思考强度设置 5-10 秒消失](https://github.com/github/copilot-cli/issues/2851)、[#3797 同窗口 cmd 标签页输入框布局不一致](https://github.com/github/copilot-cli/issues/3797)、[#4660 Azure DevOps 远程 MCP 在 1.0.81 WAM 下 OAuth 失败](https://github.com/github/copilot-cli/issues/4660)——主要覆盖了 Windows/终端渲染与插件刷新两类体验问题。

---

## 4. 重要 PR 进展

⚠️ **无在过去 24 小时内更新的 PR**。今日无可合并/审查进展可汇报。结合上述已关闭 Issue 推测，相关修复可能正在内部开发或 PR 尚未开放，待社区进一步跟踪。

---

## 5. 功能需求趋势

从今日与近期活跃 Issue 提炼，社区需求聚焦在以下方向：

- **🤖 Agent 与扩展生态**
  - 组织级 Agent 发现（#1285）
  - 自定义 Agent 工具别名一致性（#4594）
  - 扩展/MCP 启动失败的健壮性（#4666、#4670、#4660）

- **📚 会话与上下文管理**
  - 长会话的恢复稳定性与 OOM 防护（#4664、#4612）
  - `/compact` 在多模型（含自定义模型）下的可靠性（#2861、#4646）
  - `sessionStart` 钩子语义与子 Agent 上下文隔离（#4665）

- **🔐 企业接入与合规**
  - BYOK 模型选择持久化（#3978）
  - TLS 检测代理后的 OAuth 兼容（#4671）
  - Footer 中多 GitHub 主机名身份展示（#4666）

- **📊 可观测性**
  - 非交互模式（`copilot -p`）的 OTEL 遥测（#4169）
  - `managed-settings.json` 下 `telemetry.headers` 的 OTEL 导出（#4669）

- **🖥️ 终端与本地体验**
  - Windows 终端渲染一致性（#2369、#3797、#2851 已关）
  - Voice 运行时（Microsoft.AI.Foundry.Local.Core）下载鉴权（#4667）

---

## 6. 开发者关注点与高频痛点

1. **1.0.81 回归成为焦点**：OAuth 在企业代理场景下不可用（#4671）、自定义 Agent 别名静默失效（#4594）、ADO MCP 鉴权失败（#4660）——三个问题都指向"升级即坏"，建议生产环境暂留 1.0.80。

2. **会话生命周期 Bug 集中爆发**：#4664（恢复 OOM）、#4668（中断后 1.6 小时自动启动）、#4612（FileWatch 死循环）、#4665（Hook 内容重复注入）——长会话/恢复路径仍是当前最薄弱的模块。

3. **Compaction 在多模型下脆弱**：Opus 4.6 返回空响应（#2861）、自定义模型 `tool_choice` 不匹配（#4646），暴露出 compaction 流程缺少统一的模型协议适配层。

4. **遥测/可观测性缺口**：`copilot -p` 不发 OTEL（#4169）、`telemetry.headers` 配置直接阻断导出（#4669）——企业想接 Datadog/Honeycomb 时遇到阻塞。

5. **沉默错误令人担忧**：#4594 自定义 Agent 的 `tools: web`/`search` 无报错无日志，开发者难以自查。社区呼吁为 Agent 配置校验提供 dry-run/lint 入口。

6. **Voice 功能在中国/受限网络下不可用**：NuGet feed 401（#4667），凸显对离线/自托管 NuGet 源配置的需求。

---

📌 **编辑建议**：今日最值得追踪的是 #4612、#4664、#4671——三者均为 1.0.81 版本上的严重可用性问题，且无 PR 进展；若社区在下一次 Release 前能获得任一修复，对企业升级决策影响最大。

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

<think>The user wants me to generate a daily report for Kimi Code CLI community dynamics based on GitHub data. Let me analyze the data carefully.

Looking at the data:
- No new releases in the past 24 hours
- Only 2 issues updated in the past 24 hours:
  - #2628: Model emits Read tool calls instead of Write/Edit
  - #2627: Remote Control login fails on iPadOS 16.6
- No PRs in the past 24 hours

The user wants me to:
1. 今日速览 - 2-3 sentence summary
2. 版本发布 - skip if none
3. 社区热点 Issues - pick 10, but only 2 available
4. 重要 PR 进展 - pick 10, but 0 available
5. 功能需求趋势 - extract from issues
6. 开发者关注点 - summarize pain points

Since there are only 2 issues and 0 PRs, I need to be honest about the limited data. I should not fabricate data or pretend there are more issues/PRs than there actually are. I'll need to adapt sections 3 and 4 to reflect the actual data available while still providing value.

Let me generate the report honestly, noting the limited activity.</think>

# Kimi Code CLI 社区动态日报
**日期：2026-08-31**

---

## 📌 今日速览

过去 24 小时仓库活跃度较低，无新版本发布，无 PR 合并或新增。社区仅提交了 2 条 Bug 反馈 Issue，其中 1 条涉及模型工具调用异常（声明 Write 实际触发 Read），另 1 条涉及 iPadOS 16.6 上的远程控制登录失败问题。整体处于一个相对安静的过渡期，但这两条 Issue 均指向版本 0.39.1，建议关注后续修复进展。

---

## 🚀 版本发布

无（过去 24 小时内未发布新版本）。

---

## 🔥 社区热点 Issues

由于 24 小时内仅 2 条 Issue 更新，以下为全部新增/更新条目：

### 1. #2628 - 模型工具调用错位：声明 Write 却执行 Read
- **作者**：@776138506
- **链接**：https://github.com/MoonshotAI/kimi-cli/issues/2628
- **版本**：0.39.1（homebrew 安装）
- **模型**：kimi-code/k3-256k
- **重要性**：⚠️ 高
- **说明**：模型在文本输出中明确表示"calling Write"，但底层实际触发的是 Read 工具调用。这种**声明与执行不一致**的 Bug 会直接破坏 Agent 的核心工作流，导致文件写入失败、回滚、上下文污染等问题。对于依赖 Agent 自动改文件的开发者来说属于严重缺陷。目前 0 评论、0 👍，可能是用户刚提交尚未扩散，需关注后续跟进。

### 2. #2627 - iPadOS 16.6 远程控制登录失败
- **作者**：@VBS-you
- **链接**：https://github.com/MoonshotAI/kimi-cli/issues/2627
- **版本**：0.39.1
- **环境**：Debian 12 + iPadOS 16.6（Safari/微信内置浏览器）
- **重要性**：⚠️ 中高
- **说明**：在 code-rc.kimi.com 远程控制登录入口提示"无法开始登录"。报告者使用的是较老的 iPadOS 16.6，且涉及微信内置浏览器这一特殊场景。**移动端/平板端的远程控制体验**是 Kimi Code CLI 区别于纯 CLI 工具的差异化能力之一，此类兼容性问题若被忽略可能影响跨端用户增长。0 评论、0 👍，建议开发者主动跟进。

---

## 🔧 重要 PR 进展

无（过去 24 小时内无 PR 更新或合并）。

---

## 📈 功能需求趋势

由于 24 小时内仅有 2 条 Issue 且均为 Bug 报告，**无法充分提炼功能需求方向**。但从这两条 Issue 的指向可观察到以下信号：

| 趋势方向 | 信号 |
|---------|------|
| **Agent 工具调用可靠性** | #2628 反映出 K3-256k 模型在工具选择层面的鲁棒性问题，是 Agent 体验的核心 |
| **跨端/移动端远程控制** | #2627 表明已有用户在尝试 iPad 等移动设备进行远程开发，期待多端覆盖 |
| **版本稳定性** | 两条 Issue 均出现在 0.39.1，提示该版本可能存在尚未全面覆盖的回归问题 |

> 💡 建议结合近 7 日 / 30 日数据进一步分析需求趋势。

---

## 👨‍💻 开发者关注点

综合今日 Issue，开发者社区的关注焦点集中在以下两点：

1. **工具调用层的可靠性是 Agent 体验的"信任基石"**
   - #2628 直接反映：用户已高度依赖模型自主选择工具的能力，一旦模型在 Write/Read 之间"口是心非"，整个自动化链路即刻失效。这是 Agent 类工具最不能容忍的故障类型。

2. **远程控制功能的跨端兼容性亟待补齐**
   - #2627 揭示 iPadOS 旧版本 + 微信内置浏览器这一典型国内用户场景下的登录链路断裂。随着远程开发需求增长，浏览器兼容性矩阵需要更系统地维护。

3. **0.39.1 版本的潜在回归需排查**
   - 两条 Issue 均锚定该版本，虽然样本量不足以断言，但建议团队优先 Review 0.39.1 与上一版本之间的变更日志。

---

*本日报基于 github.com/MoonshotAI/kimi-cli 公开数据自动生成。*

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

<think>The user wants me to generate a daily report for the OpenCode community based on GitHub data from 2026-08-31. Let me analyze the data carefully and structure the report.

Key observations:
1. No new releases in the past 24 hours
2. 50 issues updated, with many closed (bug fixes being resolved)
3. 50 PRs updated, many recent merges
4. Top issues by comment count include #27167 (139 likes, 76 comments - session goals feature)
5. Major themes: compaction bugs, empty assistant messages breaking providers, Windows-specific issues, SQLite growth, model provider issues

Let me organize the report:

**Top Issues to highlight (10):**
1. #27167 - Session goals feature (most popular with 139 likes, 76 comments)
2. #33356 - SQLite unbounded growth (13GB+, 25 comments, 8 likes)
3. #19130 - Windows ARM64 OpenTUI fails (20 comments)
4. #41358 - Auto-compaction loses task goal (7 comments)
5. #37354 - OpenRouter unauthorized Gemini requests (7 comments)
6. #31152 - Infinite compaction loop (CLOSED, 7 comments)
7. #32202 - Skill duplicate roots (6 comments)
8. #37946 - Aborted turn bricks session (5 comments)
9. #23982 - LSP timeout for Java/Gradle (CLOSED, 5 comments)
10. #34638 - acp mode ignores config (CLOSED, 5 comments)
11. #32669 - Glob tool dot directories (CLOSED, 5 comments)

Also worth noting newer issues:
- #46330 - Moving project leaves stale worktree
- #46310 - Agent loops stalls
- #46258 - 文字凭空显示

**Top PRs (10):**
1. #46085 - Shell post-exit pipe draining
2. #46298/#46340 - Skill discovery crash fix
3. #46339 - Reveal pasted composer content
4. #46338 - Composer select all scoped
5. #33247 - Queued message editing
6. #45807 - Recover reads with non-breaking spaces
7. #46336 - Preserve Windows editing shortcuts
8. #46326 - Flush trailing stream chunks
9. #46337 - Price Anthropic 1-hour cache writes
10. #46333 - Validate Bedrock media data
11. #46335 - Sanitize blank Bedrock text blocks
12. #46290/#46334 - Skip unused compaction clone
13. #46328 - Goal-loop example plugin
14. #45125 - Enhanced compaction with ratios

Let me write the report in Chinese, professional and technical style.</think>

# OpenCode 社区动态日报 · 2026-08-31

## 📌 今日速览

今日 OpenCode 仓库活跃度较高，过去 24 小时内有 **50 个 Issues** 与 **50 个 PR** 更新，呈现明显的"修 bug 集中爆发"态势。核心焦点围绕三大方向：**会话压缩（compaction）稳定性**、**空 assistant 消息导致的 provider 拒绝（Kimi K3 / Bedrock）**，以及 **Windows/桌面端用户体验**。多个关于空消息、shell 管道、skill 发现崩溃的 PR 已被快速合入主干。

---

## 🚀 版本发布

⚠️ 过去 24 小时**无新版本发布**。从 Issues/PR 提及的版本看，社区仍在使用 `v1.18.x`（桌面端）与 `v1.17.x`（CLI），主线版本号未推进。

---

## 🔥 社区热点 Issues（Top 10）

| # | Issue | 状态 | 热度 | 为什么重要 |
|---|-------|------|------|------------|
| [#27167](https://github.com/anomalyco/opencode/issues/27167) | Add native session goals with /goal | OPEN | 👍139 · 💬76 | **全场最热门功能请求**。社区呼吁引入持久化的会话目标/生命周期管理（`/goal`），已有 139 赞且 PR #46328 提交了 plugin 示例 |
| [#33356](https://github.com/anomalyco/opencode/issues/33356) | `event` 表无限增长至 13GB+ | OPEN | 👍8 · 💬25 | **严重运维风险**：长期运行的实例中 `opencode.db` 因 `message.updated.1` 快照无保留/压缩策略而膨胀到 13GB+，填满 22GB 卷至 97-99%，亟需 retention/compaction 策略 |
| [#19130](https://github.com/anomalyco/opencode/issues/19130) | Windows ARM64 OpenTUI 初始化失败 | OPEN | 👍13 · 💬20 | ARM64 原生二进制在 Windows 11 下能用 CLI，但 TUI 因 `bun:ffi` dlopen TinyCC 报错无法启动，影响 ARM 设备用户 |
| [#41358](https://github.com/anomalyco/opencode/issues/41358) | 自动压缩后丢失任务目标且不暂停确认 | OPEN | 💬7 | 自动 compaction 后 agent 立刻继续思考、忘记原任务目标，PR #45125 部分解决 |
| [#37354](https://github.com/anomalyco/opencode/issues/37354) | OpenRouter 未授权请求 Gemini 模型 | OPEN | 👍1 · 💬7 | 选定 OpenRouter 下其他模型时仍偷偷调用 Gemini 模型，泄露凭证风险 |
| [#31152](https://github.com/anomalyco/opencode/issues/31152) | 空会话也触发无限压缩循环 | CLOSED ✅ | 💬7 | 极简配置（无 AGENTS.md/CLAUDE.md）下仍进入无限 compaction 循环，已修复 |
| [#32202](https://github.com/anomalyco/opencode/issues/32202) | Skill 重复根目录导致重启后 `available_skills` 变化 | OPEN | 💬6 | Skill 发现逻辑存在非确定性，影响插件/技能系统稳定性 |
| [#37946](https://github.com/anomalyco/opencode/issues/37946) | 中止的 assistant turn 导致 session 不可用 | OPEN | 💬5 | OS suspend/resume 后中止的流产生零内容 assistant 消息，重放给 provider 返回 400，session 被"砖" |
| [#23982](https://github.com/anomalyco/opencode/issues/23982) | LSP `initialize` 超时太短（JDTLS 需 114s） | CLOSED ✅ | 💬5 | Java/Gradle 项目 LSP 诊断一直超时，已修复 |
| [#32669](https://github.com/anomalyco/opencode/issues/32669) | Glob 工具跳过点目录 | CLOSED ✅ | 👍5 | `glob` 无法匹配 `.ai/current-task.md` 等明确命中的路径，已修复 |

**新出现值得关注的 Issue：**
- [#46330](https://github.com/anomalyco/opencode/issues/46330) — Desktop 移动项目目录后残留 `worktree`，所有 prompt 失败 ENOENT
- [#46310](https://github.com/anomalyco/opencode/issues/46310) — 标记 2.0：Agent loop 随机静默卡死（GLM-5.3-Flash 长会话）
- [#46258](https://github.com/anomalyco/opencode/issues/46258) — 输入栏凭空出现文字 + DeepSeek v4 flash 思考中断

---

## 🛠 重要 PR 进展（Top 10）

| # | PR | 状态 | 内容 |
|---|-----|------|------|
| [#46328](https://github.com/anomalyco/opencode/pull/46328) | OPEN | **示例插件**：基于 plugin SDK 实现 `/goal` 和 `/loop`，回应 #27167。无核心改动，纯 SDK 演示 |
| [#46085](https://github.com/anomalyco/opencode/pull/46085) | OPEN | **跨平台 shell 修复**：限制退出后管道排空，防止 `bunx agent-browser`、`dotnet build/test` 等长生命周期子进程阻塞 shell 完成 |
| [#46326](https://github.com/anomalyco/opencode/pull/46326) | CLOSED ✅ | **流式输出修复**：provider 暂停时也能 flush 尾部 chunk，修复 100ms 批处理只在有 chunk 到达时才检查的问题 |
| [#46333](https://github.com/anomalyco/opencode/pull/46333) | CLOSED ✅ | **Bedrock 媒体校验**：在构造 `source.bytes` 前对 base64 进行校验/规范化，对畸形数据返回 `InvalidRequest` |
| [#46335](https://github.com/anomalyco/opencode/pull/46335) | CLOSED ✅ | **Bedrock 空白文本块清理**：阻止 whitespace-only 文本块到达 Converse API，避免 HTTP 400 ValidationException |
| [#46337](https://github.com/anomalyco/opencode/pull/46337) | OPEN | **Anthropic 1h cache 定价修正**：1 小时 cache write 按 5min 写价的 1.6×（2/1.25）计费，修复内部结算与显示价不一致 |
| [#46309](https://github.com/anomalyco/opencode/pull/46309) | CLOSED ✅ | **工具结果历史归一化**：在缓存策略与协议 lowering 前统一本地工具历史，合成未解析调用的错误结果，避免空白输出被 provider 拒绝 |
| [#45125](https://github.com/anomalyco/opencode/pull/45125) | OPEN | **增强型 compaction**：引入比率 + 综合 context 恢复机制，部分修复 #41358（自动压缩后丢失任务目标） |
| [#46290](https://github.com/anomalyco/opencode/pull/46290) / [#46334](https://github.com/anomalyco/opencode/pull/46334) | CLOSED / OPEN | **跳过无用 compaction 克隆**：无 message-transform hook 时不再 `structuredClone` 选中历史，保留 hook 路径下的现有行为 |
| [#46329](https://github.com/anomalyco/opencode/pull/46329) | OPEN | **共享事件消费者隔离**：为每个订阅者独立缓冲事件，暂停的 permission 消费者不再阻塞无关 session |

**其他亮点：**
- [#33247](https://github.com/anomalyco/opencode/pull/33247) — **队列消息编辑、wrap & steer、halt & steer**（大型功能，关联 9 个 issue）
- [#46298](https://github.com/anomalyco/opencode/pull/46298) / [#46340](https://github.com/anomalyco/opencode/pull/46340) — Skill 发现不再因 unscoped scan error 崩溃（fix #45961）
- [#46339](https://github.com/anomalyco/opencode/pull/46339) / [#46338](https://github.com/anomalyco/opencode/pull/46338) / [#46336](https://github.com/anomalyco/opencode/pull/46336) — 桌面端 composer/快捷键相关一组小修（Hona 提交）

---

## 📈 功能需求趋势

从全部 Issues 中提炼的社区关注方向：

1. **会话生命周期与目标管理** — `#27167` /goal、PR `#33247` queue/steer、PR `#46328` goal-loop 插件，反映用户希望 OpenCode 从"聊天工具"进化为"长任务编排器"
2. **持久化与运维健康** — `#33356` DB 膨胀、compaction 相关 PR（#45125、#46290、#46334）显示数据生命周期成为核心痛点
3. **多 Provider 兼容性** — Kimi K3（#39451、#37887）、Bedrock（#46333、#46335）、OpenRouter（#37354）、Anthropic 1h cache 定价（#46337）反映出 provider 协议差异治理工作量巨大
4. **空消息与流中断恢复** — `#37946`、`#31046`、`#46309` 反复出现"空 assistant 消息触发 400/422"，需要从根因解决
5. **Windows 平台质量** — `#19130` ARM64、`#34573` 标题栏、`#34749` UTF-8 mojibake、`#19473` WSL UNC 路径、`#34734` scoop 检测，构成 Windows 体验的"长尾问题群"
6. **IDE/编辑器集成** — LSP 超时（#23982，已修）、desktop 编辑快捷键（#46336、#46338）持续打磨中
7. **新模型支持与速率** — Codex OAuth Fast（#39864 service_tier priority 失效）

---

## 👨‍💻 开发者关注点

社区反馈中最集中的痛点：

| 痛点 | 典型表现 |
|------|----------|
| **Compaction 行为不可预测** | 自动压缩后 agent 不暂停确认、丢失原任务目标、空会话也会进入无限循环（#41358、#31152） |
| **Provider 协议 strict 校验下的空消息被拒绝** | 仅含 tool call 的助手消息在重放时变成空文本，Kimi K3 / 严格 provider 返回 400（#39451、#37887、#37946） |
| **本地 SQLite 无保留策略** | `event` 表只增不删，长会话实例磁盘占用失控（#33356） |
| **Windows 平台细节问题堆积** | ARM64 TUI 启动失败、桌面端 UTF-8 乱码、WSL 路径拼接错误、窗口无法拖动（多个 #34xxx、#19xxx） |
| **Skill/插件发现非确定性** | 重复根目录、scoped 错误导致崩溃，使插件生态不稳定（#32202、#45961） |
| **快捷键与桌面交互细节** | Ctrl+B 抢占背景化语义、Ctrl+A 误选整页、composer 自定义滚动条焦点丢失（#46336、#46338、#46339） |

**高频需求小结：** 开发者最希望 OpenCode 在 *2.0 前* 解决 —— **会话生命周期的可控性**（可暂停、可编辑、可中止并干净恢复）、**长会话存储的可持续性**（retention + compaction 策略）、以及 **跨 provider 协议层的一致性治理**（避免每次新增 provider/模型都要打补丁）。

---

> 📊 **日报数据范围**：2026-08-30 → 2026-08-31 · 来源 [anomalyco/opencode](https://github.com/anomalyco/opencode)

</details>

<details>
<summary><strong>jcode</strong> — <a href="https://github.com/1jehuang/jcode">1jehuang/jcode</a></summary>

<think>The user wants me to generate a Chinese daily report for the jcode community based on GitHub data. Let me analyze the data carefully and structure the report according to their requirements.

Key data points:
- 2 releases in past 24 hours: v0.81.4 and v0.81.3
- 19 issues updated (18 open, 1 closed)
- 0 PRs in past 24 hours

Let me organize this into the requested sections. Since there are 0 PRs, I'll handle that gracefully by noting it but still structuring section 4 around recent merged/closed PRs (the closed issue #257 could be mentioned) or recent PR activity if any. Actually, the user asked for 10 PRs but there are 0 - I should note this honestly.

Let me identify the most important issues:

1. #960 - Memory retrieval gaps (high priority bug, 3 comments, recurring theme)
2. #1117 - Restart restore safety issue (new today)
3. #1116 - Provider env var leak when switching (new today)
4. #1085 - Security audit remediation branch (high priority, security)
5. #1110 - Gemini OAuth issue
6. #1115 - First-run telemetry sent before notice (privacy)
7. #1114 - Telemetry opt-out doesn't suppress sponsor metering (privacy)
8. #1113 - Malformed config silent fallback (config safety)
9. #1112 - Auth login can change provider of later sessions (security)
10. #1109 - OpenRouter free router 404
11. #1111 - Homebrew Core submission
12. #1108 - TLS/connectivity error on Windows
13. #1107 - Memory graph utilization
14. #1106 - Validity period for state memories
15. #1105 - Memory explainability
16. #1104 - Supersedes edges don't deactivate
17. #1103 - Memory tools don't use hybrid retrieval
18. #1102 - Pin/no-auto-upgrade feature request
19. #257 - Allow shell configuration (CLOSED)

Themes emerging:
- Memory system (multiple issues #960, #1103, #1104, #1105, #1106, #1107)
- Security/privacy (multiple issues #1117, #1116, #1115, #1114, #1113, #1112, #1085)
- Provider/integration (#1110, #1108, #1109)
- Packaging/distribution (#1111, #1102)

Let me write a professional Chinese tech report.</think>

# jcode 社区动态日报

**日期：2026-08-31**

---

## 📌 今日速览

jcode 在过去 24 小时内连续发布了 v0.81.3 与 v0.81.4 两个版本，主要聚焦终端交互体验与可靠性优化；与此同时，Issues 区迎来一波以**内存系统召回质量**和**配置/会话安全**为主轴的集中反馈，多条高优先级问题被提交或更新，凸显当前社区对智能体长期记忆与多会话隔离的强烈关注。

---

## 🚀 版本发布

### v0.81.4（最新）
- **改进**：内部可靠性与性能优化（具体变更未列出）
- 平台可用性：Linux x86_64、Linux aarch64、macOS Apple Silicon 均已支持
- 完整变更日志：[v0.81.3...v0.81.4](https://github.com/1jehuang/jcode/compare/v0.81.3...v0.81.4)

### v0.81.3
- **改进**：
  - 运行状态行更突出当前活跃工具，便于快速扫读进度
  - 终端中复制选中文本时，选区视觉保持清晰
- **修复**：多个客户端并发连接时，会话附件正确关联到对应连接

---

## 🔥 社区热点 Issues（Top 10）

| # | Issue | 关键看点 |
|---|------|---------|
| 1 | [#960](https://github.com/1jehuang/jcode/issues/960) Memory retrieval gaps：近字面搜索无命中、陈旧记忆不失效、中文 Embedding 召回退化 | **high 优先级 + recurring-theme**，3 条评论；揭示本地 `all-MiniLM-L6-v2` 后端在三类典型场景下的系统性缺陷，是当日最具技术深度的问题 |
| 2 | [#1117](https://github.com/1jehuang/jcode/issues/1117) `restart restore` 可在无新指令下恢复陈旧 agent/工具执行 | **新提交当日**：安全风险——单条"恢复窗口"命令可能在多个仓库中继续执行旧 agent 的工具调用，需立即关注 |
| 3 | [#1085](https://github.com/1jehuang/jcode/issues/1085) 第三方安全审计：完整修复分支就绪（SEC-01…07 + RC-01/REL-01/02/A11Y-01/VC-01） | **high 优先级 + 安全审计**：外部审计师已为所有确认项准备修复代码，作者希望通过 PR 上游合入，但仓库目前对外部 PR 有限制 |
| 4 | [#1116](https://github.com/1jehuang/jcode/issues/1116) OAuth ↔ API Key 切换时 `JCODE_RUNTIME_PROVIDER` 进程级泄漏 | **当日新提交**：污染进程级环境变量会导致同一 daemon 托管的其他会话误识别 provider，进而破坏 restore |
| 5 | [#1115](https://github.com/1jehuang/jcode/issues/1115) 首次安装遥测在隐私提示前即已发送 | **隐私合规**：普通新用户首启即被采集 `install` 事件，未给出知情同意窗口 |
| 6 | [#1114](https://github.com/1jehuang/jcode/issues/1114) 全局遥测 opt-out 无法抑制赞助用量计量 | **隐私合规**：即使设置了 `JCODE_NO_TELEMETRY`/`DO_NOT_TRACK`，赞助 MCP/工具的连接/调用/错误上报仍会发出 |
| 7 | [#1113](https://github.com/1jehuang/jcode/issues/1113) 配置解析失败静默回退为默认配置 | **配置安全**：操作员的安全/隐私/工具/路由设置被默默丢弃，且无任何告警 |
| 8 | [#1112](https://github.com/1jehuang/jcode/issues/1112) `auth login` 会污染后续新 daemon 会话的 provider | **会话隔离**：共享 daemon 中某次成功登录会改写进程级 provider 环境变量，新会话继承错认 |
| 9 | [#1110](https://github.com/1jehuang/jcode/issues/1110) Gemini OAuth 成功但 Code Assist 客户端下线后个人账号推理失败 | **模型集成**：Google 已不支持该 OAuth client 的 Code Assist 个人访问，影响 jcode 的 Gemini 路径 |
| 10 | [#1108](https://github.com/1jehuang/jcode/issues/1108) Windows 下任何 provider（OpenAI/Gemini）均无法连接——TLS/DNS 故障 | **平台兼容性**：源码构建后即便认证成功，所有消息仍报连接错误；浏览器与 PowerShell 可正常访问 |

> 备选关注：[#1109](https://github.com/1jehuang/jcode/issues/1109)（OpenRouter Free Router 间歇性 404）、[#257](https://github.com/1jehuang/jcode/issues/257)（允许配置 Shell，已 CLOSED——终于落地！）

---

## 🛠️ 重要 PR 进展

> ⚠️ 过去 24 小时内**暂无 PR 更新**。仓库对外部 PR 的可见限制也已被 [#1085](https://github.com/1jehuang/jcode/issues/1085) 的安全审计作者明确提及——建议维护者评估是否放宽贡献通道，以加速安全修复合并。

值得跟踪的外部修复资产：
- **第三方安全审计修复分支**（[#1085](https://github.com/1jehuang/jcode/issues/1085)）：SEC/RC/REL/A11Y/VC 全套补丁已就绪等待上游化
- **Homebrew Core 提交通道**（[#1111](https://github.com/1jehuang/jcode/issues/1111)）：外部贡献者请求支持 `--no-self-update` 编译特性以满足 Homebrew 收录策略

---

## 📈 功能需求趋势

按主题归类过去 24 小时 Issues，可清晰看到三条主线：

### 1️⃣ 内存系统全面重审（占比最高，约 1/3）
由 [@erelst](https://github.com/erelst) 一人集中提交 5 个相关 issue，呈现一份完整的"记忆系统升级蓝图"：

- [#1103](https://github.com/1jehuang/jcode/issues/1103) `memory search/recall` 未复用内部 agent 的混合检索
- [#1104](https://github.com/1jehuang/jcode/issues/1104) `Supersedes` 边未停用旧记忆
- [#1105](https://github.com/1jehuang/jcode/issues/1105) 召回无可解释性、无全局可视化面板
- [#1106](https://github.com/1jehuang/jcode/issues/1106) 状态类记忆缺乏时间有效性管理
- [#1107](https://github.com/1jehuang/jcode/issues/1107) 记忆图谱利用率低（边权重静态、聚类未自动发现）

加上 [@ckw-123](https://github.com/ckw-123) 的 [#960](https://github.com/1jehuang/jcode/issues/960)，揭示了 **embedding/检索/图谱/生命周期/可解释性** 五个层面的改进机会——社区普遍认为这是 jcode 智能体长期可用性的核心短板。

### 2️⃣ 安全与隐私：会话隔离 + 遥测合规
几乎同一时段涌入 **6 条** 紧密相关的安全/隐私反馈：[#1117](https://github.com/1jehuang/jcode/issues/1117)、[#1116](https://github.com/1jehuang/jcode/issues/1116)、[#1115](https://github.com/1jehuang/jcode/issues/1115)、[#1114](https://github.com/1jehuang/jcode/issues/1114)、[#1113](https://github.com/1jehuang/jcode/issues/1113)、[#1112](https://github.com/1jehuang/jcode/issues/1112)，加上既有的 [#1085](https://github.com/1jehuang/jcode/issues/1085) 安全审计，反映出 **进程级状态污染 + 静默回退 + 隐私边界模糊** 已形成系统性风险。

### 3️⃣ 生态扩展：分发渠道与多 provider 兼容
- 分发：[#1111](https://github.com/1jehuang/jcode/issues/1111)（Homebrew Core）、[#1102](https://github.com/1jehuang/jcode/issues/1102)（pin/no-auto-upgrade）
- Provider 兼容：[#1110](https://github.com/1jehuang/jcode/issues/1110)（Gemini Code Assist）、[#1109](https://github.com/1jehuang/jcode/issues/1109)（OpenRouter Free）、[#1108](https://github.com/1jehuang/jcode/issues/1108)（Windows TLS）

---

## 👨‍💻 开发者关注点

综合当天反馈，开发者社区集中表达了以下痛点：

1. **🔴 记忆系统"召回不可信"**
   - 字面近邻查询返回 0 命中、中文 Embedding 退化、`Supersedes` 失效
   - 急需：统一的混合检索 + 图谱增强 + 召回可解释性 + 时间衰减机制

2. **🔴 多会话/多客户端隔离缺失**
   - `restart restore`、provider 切换、`auth login` 都可能污染进程级状态，影响其他会话
   - 急需：会话作用域 provider/restore 状态，避免环境变量/快照的全局副作用

3. **🔴 隐私与遥测边界不清**
   - 首启遥测先于提示、opt-out 不覆盖赞助计量
   - 急需：将遥测开关统一覆盖全部出站事件，并前置隐私告知

4. **🟡 配置可观测性不足**
   - 配置解析失败静默回退默认 → 用户无感丧失安全/隐私设置
   - 急需：解析失败时显式告警或拒绝启动

5. **🟡 Provider 集成碎片化**
   - Gemini OAuth 客户端下线、OpenRouter Router 路由冲突、Windows TLS 异常
   - 急需：更明确的 provider 兼容性矩阵与错误归因提示

6. **🟢 打包与版本治理**
   - Homebrew 收录需禁用自更新，跨版本回归测试需"pin"机制
   - 建议：提供 `--disable-self-update` 构建特性 + 显式版本固定模式

7. **🟢 外部贡献通道受限**
   - 安全审计作者无法直接提 PR，限制了上游化速度
   - 建议：评估外部 PR 接收策略，加快高价值修复合并

---

> 📎 全部数据均来自 [github.com/1jehuang/jcode](https://github.com/1jehuang/jcode) 过去 24 小时的更新。报告由社区动态聚合生成，仅作信息汇总，不代表项目官方立场。

</details>

<details>
<summary><strong>pi</strong> — <a href="https://github.com/earendil-works/pi">earendil-works/pi</a></summary>

<think>The user wants me to generate a Chinese daily report for the Pi community based on GitHub data from 2026-08-31. Let me analyze the data carefully and structure the report according to the requested format.

Let me parse through the data:

**Issues (35 total, showing top 30 by comments):**
- #7547 - Windows usage - 51 comments (most discussed)
- #4748 - pi-tui keybindings singleton bug - 6 comments
- #2941 - shortcut for thinking effort - 4 comments (CLOSED)
- #8746 - 0.84.3 OOM issues - 4 comments (CLOSED)
- #4706 - Ollama Cloud provider RFC - 4 comments (CLOSED)
- #8751 - markdown soft line breaks - 3 comments (CLOSED)
- #8852 - JSONL session duplicate seq - 3 comments (CLOSED)
- #8878 - GitHub Copilot GPT context defaults - 2 comments
- #8877 - Read tool U+202F path issue - 2 comments
- #8871 - openai-completions cache field - 2 comments
- #8869 - SDK bash full-output dir - 2 comments
- #6723 - zai-api provider - 2 comments
- #8860 - npm:ext@latest doesn't refresh - 2 comments
- #8864 - Long sessions contextWindow death spiral - 2 comments
- #8845 - Branch summarization maxTokens - 2 comments (OPEN)
- #2930 - Event hook for skills - 2 comments
- #8856 - Extension API tool errors - 2 comments
- #8854 - pi-prompt-diet RFC - 2 comments
- #8849 - Anthropic prompt cache - 2 comments
- #7559 - DeepSeek /responses API - 2 comments
- And more 1-comment issues...

**PRs (8 total):**
- #8876 - Tencent Token Plan provider
- #8232 - Dev branch (DONT MERGE)
- #8873 - DeepSeek V4 via OpenAI Responses API
- #8872 - Extension API host keybinding (fixes #4748)
- #8866 - Codex WebSocket unref
- #8862 - Branch summary output budget (fixes #8845)
- #8853 - Prevent duplicate JSONL writers
- #8635 - Preserve aborted stop reason

Let me identify themes:

1. **New model providers** - Several requests for new providers:
   - Ollama Cloud (#4706)
   - zai-api (#6723)
   - DeepSeek Responses (#7559)
   - StepFun (#8867)
   - Tencent Token Plan (PR #8876)

2. **Bug fixes related to session/context management**:
   - OOM in 0.84.3 (#8746)
   - JSONL session corruption (#8852)
   - Long session contextWindow death spiral (#8864)
   - Branch summarization failure (#8845)
   - Branch summary fix (PR #8862)
   - JSONL writers fix (PR #8853)

3. **Extension API issues**:
   - pi-tui keybindings (#4748, PR #8872)
   - Tool errors distinction (#8856)
   - Event hooks for skills (#2930)
   - Prompt bloat from extensions (#8854)

4. **Windows support**:
   - #7547 - How to use Pi on Windows (51 comments!)

5. **Performance/cost issues**:
   - Anthropic cache never reads (#8849)
   - openai-completions cache field (#8871)
   - OpenRouter auto negative costs (#8875)

6. **Provider-specific issues**:
   - GitHub Copilot context defaults (#8878)
   - Codex WebSocket idle (#8866 PR)
   - openai-completions tool call drops (#8861)
   - openai-completions markdown fence (#8858)
   - Dangling tool_use after branching (#8859)
   - DeepSeek migration (#8873 PR)

7. **SDK/embedding**:
   - SDK bash full-output (#8869)
   - pi-ai typings (#8868)

8. **UX/DX improvements**:
   - bash tool description (#8863)
   - pi list version numbers (#8865)
   - npm ext@latest refresh (#8860)

9. **Aborted/cancellation handling**:
   - Aborted stop reason during lazy setup (PR #8635)

Let me now structure the report.

For 社区热点 Issues, I should pick 10 most important. The criteria should be:
- Most discussed
- Most impactful for users
- Representative of trends

Top 10 candidates:
1. #7547 - Windows usage (51 comments) - clearly most important
2. #4748 - pi-tui keybindings bug (has PR fix)
3. #8746 - 0.84.3 OOM regression
4. #4706 - Ollama Cloud RFC
5. #2941 - thinking effort shortcut
6. #8852 - JSONL session corruption (critical data integrity)
7. #8845 - Branch summarization deterministic failure
8. #8864 - Long session death spiral
9. #8849 - Anthropic prompt cache waste
10. #8854 - Prompt bloat from extensions

For 重要 PR 进展:
1. #8876 - Tencent Token Plan provider
2. #8873 - DeepSeek V4 Responses API
3. #8872 - Fix keybindings singleton (#4748)
4. #8866 - Codex WebSocket unref
5. #8862 - Branch summary fix (#8845)
6. #8853 - JSONL writers fix
7. #8635 - Preserve aborted stop reason
8. #8232 - Dev branch
(Maybe also #8862 is more important than #8876 actually for community)

Let me write the report now in Chinese, keeping it concise and professional.</think>

# Pi 社区动态日报 · 2026-08-31

## 📌 今日速览

今日 Pi 仓库活跃度集中在 **Bug 修复与新模型集成两条主线**：社区集中提交了多个影响会话完整性的稳定性修复（JSONL 重复写入、长会话上下文死循环、`/tree` 分支摘要失败），同时 OpenAI-compatible 协议层（DeepSeek V4 迁移 Responses API、Codex WebSocket 泄漏、工具调用解析）成为重点 PR 区域。**Windows 使用体验调研**继续是最高讨论度议题（51 评论），反映 Pi 在跨平台落地层面仍有显著需求缺口。

---

## 🚀 版本发布

今日无新版本发布。

---

## � 社区热点 Issues（Top 10）

| # | Issue | 重要性 |
|---|-------|--------|
| 1 | **#7547** — Windows 下如何使用 Pi？常见问题征集（51 评论） | 持续最高讨论度，反映 Windows 用户增长与文档/原生支持缺口的张力 |
| 2 | **#8852** — JSONL 会话在同一进程内打开两次导致 `seq` 冲突、文件损坏 | 数据完整性级 bug，影响所有子 agent 场景，已通过 #8853 修复 |
| 3 | **#8746** — 0.84.3 引入推理消息膨胀，子 agent 会话 OOM 杀进程（20GB+ RSS） | 严重回归，5 次 OOM 报告；0.84.2 正常，催促 0.84.4 释出 |
| 4 | **#8864** — 长会话陷入 `contextWindow??128000` + `max_tokens: 1` 不可恢复死循环 | 静默默认值陷阱，长期使用必踩，已在多个模型/版本复现 |
| 5 | **#8845** — `/tree` 分支摘要硬编码 `maxTokens: 2048`，大型分支确定失败 | 已通过 #8862 修复 |
| 6 | **#8849** — Anthropic 提示缓存从不读回 transcript，`cacheRead` 平直在 system+tools | 长期 Anthropic 用户成本异常的核心根因 |
| 7 | **#4748** — pi-tui `keybindings` 模块单例破坏扩展对 `keyText` 的访问 | 扩展生态基础设施 bug，影响提示渲染，已通过 #8872 修复 |
| 8 | **#8854** — RFC：`pi-prompt-diet` 解决第三方扩展 `promptGuidelines` 累积造成基础 System Prompt 膨胀 | 代表"扩展生态 vs 上下文预算"的系统性思考 |
| 9 | **#4706** — RFC：将 Ollama Cloud 设为内置 provider（支持 DeepSeek-V4 / Gemma4 / Kimi-2.6） | 本地 + 云端混合部署趋势的代表提案 |
| 10 | **#2941** — 在根层添加 `/effort` 类快捷方式切换 thinking effort | 已关闭，体现 UX 简化方向 |

🔗 [全部 Issues](https://github.com/earendil-works/pi/issues)

---

## 🛠️ 重要 PR 进展（Top 8）

| # | PR | 内容 |
|---|----|----|
| 1 | **#8876** — feat(ai): 新增 Tencent Token Plan Individual provider | 覆盖 tc-code-latest、deepseek-v4-flash/pro、glm-5.2、minimax-m2.7，国内用户关键通道 |
| 2 | **#8873** — fix(ai): 将 DeepSeek V4 系列迁移到 OpenAI Responses API | 统一代理协议路径，减少 OpenAI-compatible 网关兼容性问题 |
| 3 | **#8872** — fix(coding-agent): 在扩展 API 上暴露宿主 keybinding 访问 | 修复 #4748，扩展与宿主 TUI 的 keyText 一致性问题 |
| 4 | **#8866** — fix(ai): 解除 Codex WebSocket 空闲缓存定时器；文档化扩展侧 session 资源清理 | 修复 `pi -p` 完成后进程挂死 5 分钟的 socket 泄漏 |
| 5 | **#8862** — fix(agent): 从 `reserveTokens` 推导分支摘要输出预算 | 修复 #8845，分支摘要不再因硬编码 2048 而截断 |
| 6 | **#8853** — fix(agent): 防止 JSONL 重复写入器 | 修复 #8852，按规范路径序列化写入，123 个 session 测试通过 |
| 7 | **#8635** — fix(ai): 在 lazy setup 阶段保留 aborted stop reason | 修复 #8409，在鉴权 lazy 设置前 abort 不再被误报为工具错误 |
| 8 | **#8232** — DONT MERGE: dev 分支（持续维护中） | CI 与评论用集成分支 |

🔗 [全部 PR](https://github.com/earendil-works/pi/pulls)

---

## 📈 功能需求趋势

通过对 35 条 Issue 的语义聚类，社区关注度集中于以下方向：

### 1. 新模型/新 Provider 接入（占比最高）
- **云端模型**：Tencent Token Plan (#8876)、Ollama Cloud (#4706)、StepFun (#8867)、zai-api (#6723)、DeepSeek Responses (#7559)
- **直接对接**：GitHub Copilot 上下文对齐 (#8878)

### 2. 稳定性与数据完整性
- 会话 JSONL 损坏 (#8852 → #8853)、OOM 回归 (#8746)、长会话死循环 (#8864)、分支摘要 (#8845 → #8862)、WebSocket 泄漏 (#8866)

### 3. 上下文与成本优化
- Anthropic cache 失效 (#8849)、OpenAI-completions 缓存字段丢失 (#8871)、OpenRouter auto 负定价 (#8875)、扩展 prompt 膨胀 (#8854)

### 4. 跨平台体验
- Windows 全流程支持 (#7547，本月最热议题)

### 5. 扩展 SDK / 嵌入能力
- pi-tui keybindings (#4748 → #8872)、Bash 输出目录配置 (#8869)、tool_result 错误语义 (#8856)、pi-ai typings (#8868)、skill 事件钩子 (#2930)

### 6. DX/UX 微改进
- `pi list` 显示版本 (#8865)、bash 工具 description 参数 (#8863)、`npm:<ext>@latest` 强制刷新 (#8860)、`/effort` 快捷键 (#2941)

---

## 💡 开发者关注点

### 高频痛点
- **OpenAI-compatible 网关协议差异**：今日有 4 条相关问题（#8858 markdown-fenced arguments、#8861 共享 `index` 的双 tool_call 被丢弃、#8859 dangling tool_use / 413 字节限制、#8871 cache 字段归零），反映出 **不同网关（OpenRouter / 各类代理）重序列化行为差异** 是当前最大兼容性问题。
- **静默默认值陷阱**：`contextWindow??128000` 与 `max_tokens` clamp 形成"死亡螺旋" (#8864)，社区呼吁对硬编码默认值提供**显式警告或健康检查**。
- **长会话成本可观测性**：Anthropic cache 不命中 (#8849) 与 OpenRouter auto 负定价 (#8875) 共同表明，**计费/cost 字段的 Provider↔Pi 契约** 需要更严格的一致性测试。

### 高频需求
1. **统一的 Provider 接入规范** —— 多条 RFC（Ollama Cloud、StepFun、zai-api）重复出现类似诉求。
2. **扩展隔离与上下文预算边界** —— pi-prompt-diet (#8854) 与 keybinding 单例 (#4748) 共同指向 **第三方扩展对宿主 TUI 状态的"渗透"问题**。
3. **Windows 一等公民体验** —— 不仅是文档，更是安装/启动/键位/路径全链路的开箱即用。

---

> 报告数据截止：2026-08-31 · 数据源：[github.com/earendil-works/pi](https://github.com/earendil-works/pi)

</details>

---
*本日报由 [Big Model Radar](https://github.com/96loveslife/big_model_radar) 自动生成。*
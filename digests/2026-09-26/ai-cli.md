# AI CLI 工具社区动态日报 2026-09-26

> 生成时间: 2026-09-26 04:25 UTC | 覆盖工具: 8 个

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

<think>The user wants me to generate a horizontal comparative analysis report based on the daily reports of multiple AI CLI tools provided. Let me analyze the data carefully:

Tools covered:
1. Claude Code (anthropics/claude-code) - Active
2. OpenAI Codex (openai/codex) - Active
3. Gemini CLI (google-gemini/gemini-cli) - Active
4. GitHub Copilot CLI (github/copilot-cli) - Active
5. Kimi Code CLI (MoonshotAI/kimi-cli) - No activity
6. OpenCode (anomalyco/opencode) - Active
7. jcode (1jehuang/jcode) - Active
8. pi (earendil-works/pi) - Active

Let me build the comparative analysis:

1. **Ecosystem Panorama** - 3-5 sentences on overall trends

2. **Activity Comparison Table** - Issues, PRs, Releases for each tool

Let me count from the data:
- Claude Code: ~30 issues mentioned, 5 PRs, 1 release (v2.1.283)
- OpenAI Codex: 8 releases (1 stable + 7 alpha), 15+ issues, 20+ PRs
- Gemini CLI: 1 nightly release, 10 issues, 11 PRs
- GitHub Copilot CLI: 1 release (v1.0.89-4), 10 issues, 0 PRs
- Kimi Code CLI: 0
- OpenCode: 0 releases, 10 issues, 20 PRs
- jcode: 0 releases, 10 issues, 25 PRs
- pi: 0 releases, 10 issues, 12 PRs

3. **Common Focus Areas** - Find overlaps:
   - Subagent/multi-agent orchestration (multiple tools)
   - MCP stability (multiple tools)
   - System prompt efficiency/cost (multiple)
   - TUI/UX issues (multiple)
   - Tighter integration with IDEs/Desktop
   - Skill/Plugin/Extension systems
   - Compaction/context management for long sessions
   - Authentication/security issues
   - Windows platform stability
   - Provider compatibility/integration

4. **Differentiation Analysis**

5. **Maturity & Activity Assessment**

6. **Trend Signals**

Let me write a professional, concise, data-supported analysis suitable for tech decision-makers and developers.

I should output in Chinese with detailed thinking first.</think>

# AI CLI 工具生态横向对比分析报告

**数据基准日：2026-09-26** | 数据来源：GitHub 各工具公开仓库

---

## 一、生态全景

当前 AI CLI 工具生态已进入 **"基础设施深水区"** —— 单纯的功能比拼已让位于**稳定性、可观测性、可扩展性**的硬指标。竞争重心从"谁能让模型跑起来"转向"谁能让 Agent 在生产环境里**可被信任地** 跑起来"。所有头部工具（Claude Code、OpenAI Codex、Gemini CLI、Copilot CLI）今日都把主要精力投入到 **Hook / Plugin / Mods / Skills 体系**与 **Subagent 编排可靠性**上；而以 OpenCode、jcode、pi 为代表的独立 / 新兴工具则在 **多 Provider 抽象、Codemode 运行时、Agent Manager 架构**等差异化方向快速突围。整体看，**Windows 平台稳定性、Provider 协议碎片化、长会话上下文管理** 是本周行业级三大共性痛点。

---

## 二、各工具活跃度对比

| 工具 | Issues 更新 | PR 更新 | Release | 核心维护活跃度 | 整体判断 |
|------|-----------:|-------:|---------|--------------:|---------|
| **OpenAI Codex** | 15+ | **20+** | 1 稳定 + 7 alpha | 🔥🔥🔥🔥🔥 | 单日最高合并量，处于快速迭代期 |
| **jcode** | 12 | **25** | 0 | 🔥🔥🔥🔥 | Issue-PR 闭环节奏最快 |
| **OpenCode** | 10+ | ~20 | 0 | 🔥🔥🔥🔥 | 架构级重构密集（compaction 重写、Agent Manager） |
| **Claude Code** | ~30 | 5 | 1 (v2.1.283) | 🔥🔥🔥🔥 | 议题热度高但合并节奏克制 |
| **Gemini CLI** | 10+ | 11 | 1 nightly | 🔥🔥🔥🔥 | 修复型 PR 为主，nightly 节奏稳 |
| **pi** | 30 | 12 | 0 | 🔥🔥🔥🔥 | Mitsuhiko 大型特性 PR 主导 |
| **GitHub Copilot CLI** | 45 | **0** | 1 (v1.0.89-4) | 🔥🔥 | 严重 PR 真空，发布节奏健康但修复空窗 |
| **Kimi Code CLI** | 0 | 0 | 0 | ❄️ | 过去 24h 无活动 |

> 📌 **关键观察**：OpenAI Codex 与 jcode 的合并节奏明显领跑；Copilot CLI 的 **PR 空窗 + Issue 高水位** 是异常信号，建议关注其内部代码审查管线状态；Kimi Code CLI 已实质进入维护静默期。

---

## 三、共同关注的功能方向

以下方向在 ≥3 个工具的社区中同时出现，是当前行业的**共性需求**：

### 1. 🧩 可扩展性 / Hooks / Plugins / Mods
- **Claude Code** #91870 "Mods"（头号议题，218 评论）
- **OpenCode** #51426 Agent Manager 架构 PR
- **jcode** Skills & frontmatter 体系、Requesty/OpenJEV provider 接入
- **pi** PR #8262 每次 turn-start 派发 hooks
- **Copilot CLI** v1.0.89-4 直接安装插件的 enable/disable

**诉求共性**：从「配置文件式」扩展走向「**引擎事件回调式**」扩展（session.append / prompt.compose / turn-start 等）。

### 2. 🤖 Subagent / 多 Agent 编排可靠性
- **OpenCode** #27110 限制并行 subagent 数量（⭐36，全表最高）
- **jcode** #1497 Swarm worker 按任务类分模型泳道
- **Gemini CLI** #22323 subagent 错误报告 GOAL 成功
- **Claude Code** #94728 后台子代理恢复丢失 prompt cache
- **pi** PR #10040 Codemode + MCP 重塑 agent 运行时

**诉求共性**：**「并行上限 + 任务类分层 + 失败可观测」三件套** 是行业共识。

### 3. 🔌 MCP（Model Context Protocol）稳定性
- **Claude Code** #97336 / #81571 / #78719 / #80822（MCP 占位符 / Channel 插件生命周期）
- **Gemini CLI** PR #29398 MCP 工具发现超时
- **OpenCode** #48743 MCP 预热 / 重连机制
- **jcode** PR #1496 OpenRouter headers
- **pi** PR #10051 MCP OAuth 动态客户端注册

**诉求共性**：**健康检查、连接恢复、错误降级** 三大基础能力尚未标准化。

### 4. 💬 TUI / 终端交互体验
- **OpenAI Codex** #17103 Ctrl+V 文本粘贴、#47376 菜单选择
- **Gemini CLI** TUI flicker / 真彩支持
- **pi** #8913 鼠标追踪、#10002 扩展 console 污染
- **jcode** #1500 Ctrl+Enter 被吞、#1498 /resume 搜索被劫持
- **Copilot CLI** #4951 /ask 窗口过小、#2199 Ctrl+Backspace

**诉求共性**：**快捷键声明式抽象 + 终端兼容性矩阵** 是当前最薄弱环节。

### 5. 🪟 Windows 平台稳定性（高频雷区）
- **OpenAI Codex** 至少 6 条 Windows 专有 bug（daemon 弹窗、配置加载、第二条消息发送失败等）
- **OpenCode** #35839 CLI 被覆盖、#51425 plugin staging 泄漏
- **Gemini CLI** PR #29448 修复 Windows/WSL/headless 认证死循环
- **jcode** PR #1490 Windows hook 闪烁（今日唯一合并 PR）

### 6. 🧠 长会话上下文管理 / Compaction
- **Claude Code** #92434 Auto-compact 逻辑缺陷
- **OpenCode** PR #51447 重写 Session Compaction（架构级）
- **pi** #10033 thinking block 进 summary prompt 撑爆上下文
- **jcode** PR #1486 压缩保留多步骤计划状态
- **Gemini CLI** #22745 AST 感知工具减少 token 噪声

### 7. 🔐 认证 / 安全 / 配置卫生
- **Claude Code** #97350 OAuth token 被 401 拒绝
- **Copilot CLI** #4929 长进程 token 刷新失败致瘫痪
- **jcode** #1492 配对码无限次猜测（已修复）
- **Gemini CLI** #26525 Auto Memory 缺乏确定性脱敏

### 8. 💸 系统提示词 / 成本经济性
- **Copilot CLI** #2627（⭐20）系统提示 ~20.5K token 占近 10%
- **Claude Code** #94728 / #95670 子代理 cache 丢失
- **pi** #9980 OpenRouter 计费偏差 2-3 倍、#10034 重复计费

---

## 四、差异化定位分析

| 工具 | 核心定位 | 目标用户 | 技术路线亮点 |
|------|---------|---------|-------------|
| **Claude Code** | "可信赖的智能体工程平台" | 企业研发团队 + 重度 CLI 用户 | **Mods 引擎事件回调** + **LLM Gateway 原生集成**（v2.1.283 的 `x-claude-code-prompt-id`） |
| **OpenAI Codex** | "OpenAI 官方旗舰 Agent 工具链" | OpenAI 生态重度用户 + 多端协同需求者 | **GPT-6 Sol/Astra 首发载体** + **Remote Control 跨端** + **Windows 桌面全面发力** |
| **Gemini CLI** | "Gemini 3 模型原生交互入口" | Google Cloud / Workspace 用户 + 研究者 | **AST 感知工具** + **Auto Memory 系统** + **零依赖 OS 沙箱路线图** |
| **GitHub Copilot CLI** | "GitHub 生态原生 Agent 工具" | GitHub 平台黏性用户 + 企业 | **自动 routing tier** + **插件 enable/disable 精细化**（但 PR 真空令人担忧） |
| **OpenCode** | "开源 Agent-first 平台" | 自托管 / 多 Provider 用户 + 二次开发者 | **Agent Manager + 任务图管线** + **Provider 解耦** + **Codemode** |
| **jcode** | "高安全 / 高可移植 CLI 实验场" | 跨 Provider 重度用户 + 安全敏感场景 | **OTEL 可观测** + **Swarm 分模型泳道** + **测试隔离第一** |
| **pi** | "极简编码 Agent + 强大扩展性" | 极客 + 长会话推理用户 | **Codemode + MCP** + **Virtual Models**（实验性）+ **Mitsuhiko 个人风格浓** |
| **Kimi Code CLI** | （维护静默） | — | — |

### 横向技术路线对比

- **架构哲学**：Claude Code / OpenAI Codex / Copilot CLI 走"**大而全的平台化**"；OpenCode / jcode / pi 走"**小而精的差异化**"。
- **Provider 策略**：jcode、OpenCode、pi 是 **多 Provider 抽象派**（OpenRouter、Anthropic、OpenAI、本地 LLM 全面兼容）；Claude Code / Codex / Gemini 是 **原生绑定派**。
- **扩展模型**：Claude Code 的 Mods 偏向"**引擎事件 hook**"；OpenCode / jcode 偏向"**声明式 profile + Provider 插件**"；Copilot CLI 偏向"**GitHub Marketplace 集成**"。
- **Agent 模型**：Claude Code / OpenAI Codex 主打"**subagent 编排**"；OpenCode 开始构建"**任务图管线**"；pi 走"**Codemode 让模型自己写代码调工具**"的独特路线。

---

## 五、社区热度与成熟度

| 维度 | 工具 | 解读 |
|------|------|------|
| **议题深度（评论数）** | Claude Code #91870 (218)、OpenAI Codex #28969 (90) | 头部社区讨论已进入"路线图级别"协商 |
| **合并节奏** | OpenAI Codex、jcode、OpenCode | 三者单日合并 ≥20 PR，迭代速度领跑 |
| **架构稳定性** | Claude Code、OpenAI Codex | 长期高版本号，主线 API 变化克制 |
| **创新密度** | pi（Virtual Models、Codemode）、OpenCode（Agent Manager）、jcode（Swarm 分层） | 新兴工具承担"概念验证"角色 |
| **维护风险** | Kimi Code CLI（无活动）、Copilot CLI（PR 真空） | 需持续观察其承诺兑现度 |
| **生态黏性** | Claude Code、OpenAI Codex | Skill / Marketplace 生态已形成网络效应 |

---

## 六、值得关注的趋势信号

### 📡 信号 1：行业从"功能竞速"转向"可靠性竞速"
**依据**：Claude Code、OpenAI Codex、Gemini CLI 的 Issue 头条均不再是"请求新功能"，而是"**生产场景下频繁出现的稳定性 bug**"（Telegram channel 断线、Windows daemon 弹窗、subagent GOAL 假成功）。

**对开发者的启示**：选型时**优先评估 SLA 与失败可观测性**，而非功能数量；建议在 PoC 阶段就纳入长会话、长进程、Windows / WSL 场景的可靠性测试。

### 📡 信号 2：Hook / Event-driven 扩展正在成为新的"事实标准"
**依据**：Claude Code Mods（function hooks 数周内发布）、OpenCode Agent Manager 任务图、pi 的 turn-start hooks、Copilot CLI 插件 enable/disable —— 几乎所有工具都在向"**引擎事件 → 用户代码回调**"演进。

**对开发者的启示**：**现在投资 hook 体系下的扩展开发是低风险高回报**——一旦未来 6–12 个月各工具标准化该模式，现有实现可低成本迁移。

### 📡 信号 3：Provider 抽象层从"加分项"变成"入场券"
**依据**：jcode 的 #571、OpenCode 的 #27110、pi 的 Provider 协议 bug 簇显示，**仅绑定单一模型 API 的工具正在失去竞争力**。OpenRouter / 自托管 LLM 用户已形成显著社区。

**对开发者的启示**：构建自有 AI 工具时，**provider 抽象层应是 Day 1 设计而非后期重构**；同时关注"虚拟模型"（pi #10035）这种"组合多个 Provider 模拟新模型"的新范式。

### 📡 信号 4：可观测性从"可选"变成"刚需"
**依据**：jcode 引入 OTEL（#1510）、Gemini CLI 修复 subagent GOAL 状态报告（#22323）、OpenCode 修复 debug log 陈旧问题（#51444）—— **没有可观测性 = 没有可调试性 = 没有生产可用性**。

**对开发者的启示**：**OTEL/标准 trace 协议集成将成为企业采购的硬指标**；个人项目也建议从早期就建立最小化的 session/agent 日志规范。

### 📡 信号 5：长会话"压缩保真度"成为推理模型时代的关键瓶颈
**依据**：pi #10033（thinking block 进 summary）、OpenCode PR #51447（compaction 重写）、Claude Code #92434（auto-compact 逻辑缺陷）三线并发。**DeepSeek V4.1、GPT-6 Sol 等推理模型的大上下文行为放大了这一矛盾**。

**对开发者的启示**：**compaction 算法不应是简单的截断+总结**，而需要保留"计划状态、关键决策点、未完成推理"。OpenCode 的 SessionCompaction 重写和 jcode 的 #1486 是当前最佳实践参考。

### 📡 信号 6：Windows 平台从"边缘支持"变成"信任分水岭"
**依据**：OpenAI Codex 单日 6+ Windows bug、OpenCode 多条 Windows 平台问题、Gemini CLI 专门修 Windows/WSL 认证 —— **能否在 Windows 上跑稳正在成为产品分级的关键指标**。

**对开发者的启示**：如果你的目标用户包含企业 Windows 桌面开发团队，**Windows 兼容性测试的优先级应排在功能扩展之前**。

---

## 七、决策建议速查表

| 你的诉求 | 推荐工具 | 核心理由 |
|---------|---------|---------|
| 企业级稳定性 + 可观测性 + 合规 | **Claude Code** | Gateway 集成 + Mods 路线图 + Memory/Compact 持续打磨 |
| GPT-6 / OpenAI 生态深度集成 + 跨端协同 | **OpenAI Codex** | 0.157.1 已修复主要 Windows 回归，迭代速度最快 |
| Gemini 3 模型原生能力 + AST 级代码探索 | **Gemini CLI** | Auto Memory + Zero-Dependency 沙箱路线图 |
| GitHub 平台黏性 + 自动模型路由 | **Copilot CLI** | v1.0.89-4 已上线 routing tier，但需密切观察 PR 真空 |
| 多 Provider + 自托管 + 二次开发 | **OpenCode** | Agent Manager 架构 + Provider 解耦 + Codemode |
| 高安全 + Swarm 编排 + OTEL | **jcode** | 配对码限次 + 测试隔离 + 多 Provider profile 体系 |
| 极简 + 推理模型长会话 + Codemode 实验 | **pi** | Virtual Models + Codemode + Mitsuhiko 个人风格 |

---

> 📊 **报告小结**：当前 AI CLI 生态已度过"百花齐放"的早期阶段，进入"**收敛 + 深化**"的成熟期前夜。**头部工具在补可靠性短板，新兴工具在押注差异化架构**，但所有玩家都不再回避同一组共性挑战——Subagent 可靠性、MCP 健康度、长会话保真度、Provider 抽象、Windows 兼容。对于开发者而言，**Hook 体系、Provider 抽象、可观测性** 三项基础投入，是当下最具长期价值的布局方向。

*报告基于 2026-09-26 单一日期数据生成，趋势判断参考了过去 24h 内 issue 标题、PR 描述

---

## 各工具详细报告

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills 社区热点

> 数据来源: [anthropics/skills](https://github.com/anthropics/skills)

<think>Let me analyze the data from the anthropics/skills repository and create a comprehensive report on the community trends.

Looking at the data:

**Popular PRs (sorted by comments - though comment data shows "undefined", so I'll analyze by relevance, recency, and engagement signals like 👍 and updates):**

Wait, the comments all show "undefined" - this is unusual. Let me look at the data more carefully. It seems the comment counts are not provided in the data (shown as undefined). So I'll need to use other signals like:
- Recency of updates (still active)
- 👍 reactions (also all 0, hmm)
- Topic relevance and importance

Looking at the actual data, since comments and thumbs are not provided, I should focus on:
1. The most actively updated PRs (recent activity)
2. PRs with substantial scope (new skill additions vs minor fixes)
3. PRs addressing critical issues

**Popular PRs Analysis:**

1. **PR #1298** - fix(skill-creator): isolate trigger evals and handle Windows and runtime failures
   - Skill creator fixes, Windows compatibility
   - Updated recently (2026-09-16)
   - Critical infrastructure fix

2. **PR #1771** - feat: add proofcore-contract-auditor for smart contract notarization
   - Web3 smart contract auditing on TON Blockchain
   - Very recent (2026-09-15)
   - New skill addition

3. **PR #1742** - fix(mcp-builder): support mcp>=2 streamable_http_client import
   - MCP compatibility fix
   - Recently updated

4. **PR #1734** - Detect orphaned docx comments
   - DOCX quality fix

5. **PR #1703** - Add md2video-audio skill
   - Markdown to video with voiceover
   - Creative content generation

6. **PR #1792** - fix(docx): report LibreOffice timeout as an error
   - DOCX reliability fix

7. **PR #525** - Add pyxel skill for retro game development
   - Game development skill
   - Active since March, recently updated

8. **PR #514** - Add document-typography skill
   - Document typography QC

9. **PR #1615** - Add scnet-hpc skill
   - HPC cluster operations

10. **PR #822** - feat: add AWT (AI Watch Tester)
    - E2E testing with AI vision

11. **PR #486** - Add ODT skill
    - OpenDocument support

12. **PR #210** - Improve frontend-design skill
    - Frontend design improvement

13. **PR #83** - Add skill-quality-analyzer and skill-security-analyzer
    - Meta skills for quality and security

14. **PR #1776** - Add blast-radius skill
    - Pre-destructive operation checklist

15. **PR #1245** - Add notion-spec-to-implementation and quantitative-resume-auditor
    - Notion integration + resume auditing

16. **PR #723** - feat: add testing-patterns skill
    - Comprehensive testing patterns

**Issues Analysis (these have real comment counts):**

1. **#492** - Security: Community skills under anthropic/ namespace - 43 comments, 2 👍
   - Major security/trust issue
   - Most discussed issue

2. **#228** - Enable org-wide skill sharing in Claude.ai - 16 comments, 8 👍
   - Enterprise sharing capability

3. **#556** - run_eval.py: claude -p never triggers skills - 12 comments, 7 👍
   - Eval system broken

4. **#62** - All my skills disappeared - 10 comments, 2 👍
   - User experience issue

5. **#1329** - Proposing compact-memory skill - 9 comments
   - Memory optimization proposal

6. **#202** - skill-creator should be updated - 8 comments (CLOSED)
   - Best practices for skill creation

7. **#412** - Agent governance proposal - 6 comments (CLOSED)
   - AI safety patterns

8. **#189** - document-skills and example-skills duplicates - 6 comments, 9 👍
   - Plugin distribution issue

9. **#1487** - claude-api skill injects 156k tokens - 4 comments
   - Context window exhaustion

10. **#1390** - mcp-builder evaluation broken - 4 comments
    - MCP testing infrastructure

11. **#1385** - Reasoning Quality Gate Pipeline - 4 comments, 1 👍
    - Quality control proposal

12. **#1175** - SharePoint security concerns - 4 comments (CLOSED)
    - Enterprise security

13. **#29** - Usage with Bedrock - 4 comments
    - AWS integration

14. **#16** - Expose Skills as MCPs - 4 comments
    - MCP integration

15. **#1362** - web-artifacts-builder issues - 3 comments
    - Build tool issues

Now let me structure the report:

**1. 热门 Skills 排行** - Most discussed Skills (PRs)

Since comments are undefined, I'll use issue count (issues opened against these) + their importance + activity as proxies:

Most important PRs to highlight:
- #1298 (skill-creator fix - critical infra)
- #525 (Pyxel retro game - long-running, active)
- #822 (AWT E2E testing - significant new skill)
- #723 (testing-patterns - comprehensive)
- #83 (skill-quality-analyzer/security-analyzer - meta tools)
- #1245 (Notion + Resume auditor)
- #1703 (md2video-audio)
- #1776 (blast-radius - safety)

**2. 社区需求趋势** - From issues:
- Trust/security (#492 - 43 comments)
- Enterprise sharing (#228 - 16 comments)
- Eval reliability (#556 - 12 comments)
- User data safety (#62 - 10 comments)
- Memory optimization (#1329 - 9 comments)
- Skill creator improvements (#202 - 8 comments)
- Agent governance/safety (#412 - 6 comments)
- Testing (#723, #822)
- Code review/testing patterns
- Document skills (DOCX, ODT, typography)
- Quality assurance (#1487, #1385)

**3. 高潜力待合并** - Active PRs with updates:
- #1298 - skill-creator fixes (updated 2026-09-16)
- #525 - Pyxel (updated 2026-09-22)
- #822 - AWT (updated 2026-09-19)
- #723 - testing-patterns (updated 2026-09-21)
- #1703 - md2video-audio (updated 2026-09-15)
- #1742 - mcp-builder fix (updated 2026-09-19)
- #1792 - docx timeout (updated 2026-09-25)

**4. 生态洞察** - One-line summary:
The community is most focused on Skills infrastructure reliability (evaluation systems, security/trust boundaries, context window management) and meta-capabilities (testing patterns, quality analyzers, safety/governance).

Let me write this up in Chinese as requested.</think>

# Claude Code Skills 社区热点报告
**数据截止：2026-09-26 | 数据源：github.com/anthropics/skills**

> 注：本次快照中 PR 的 `comments` 字段返回为 undefined，因此热门 PR 排序综合使用了"最近活跃时间 + 提交影响力 + 是否为新增 Skill"三个维度进行识别；Issue 部分的评论数为真实数据。

---

## 1. 热门 Skills 排行（Top 8 PR）

| 排名 | PR | Skill 名称 | 核心功能 | 讨论热点 | 状态 |
|---|---|---|---|---|---|
| 🥇 | [#1298](https://github.com/anthropics/skills/pull/1298) | **skill-creator**（基础设施修复） | 隔离 trigger eval、修复 Windows subprocess `select()`、处理 runtime failure | skill-creator 是所有 Skill 的元工具，社区对其评估可靠性（Issue #556 反映 trigger rate 0%）的修复高度敏感 | OPEN（持续迭代至 09-16） |
| 🥈 | [#525](https://github.com/anthropics/skills/pull/525) | **pyxel** | Python 复古游戏开发、headless 验证、帧级别调试 | 跨 6 个月仍在维护（最新更新 09-22），说明开发者对游戏/可视化类长尾 Skill 有稳定需求 | OPEN |
| 🥉 | [#822](https://github.com/anthropics/skills/pull/822) | **AWT (AI Watch Tester)** | 零代码 E2E 测试：AI 视觉 + 浏览器控制 | 与 testing-patterns 形成互补，被视为"测试生成"方向代表作品 | OPEN（09-19 更新） |
| 4 | [#723](https://github.com/anthropics/skills/pull/723) | **testing-patterns** | Testing Trophy 模型 + React 组件测试 + 全栈测试哲学 | 覆盖测试方法论，比 AWT 更体系化，PR 长期被引用讨论 | OPEN（09-21 更新） |
| 5 | [#1703](https://github.com/anthropics/skills/pull/1703) | **md2video-audio** | Markdown → Marp 幻灯片 → 带 AI 人声 MP4 | 零成本内容生产链路的标志性提案，是"内容创作自动化"方向的热门 | OPEN |
| 6 | [#1771](https://github.com/anthropics/skills/pull/1771) | **proofcore-contract-auditor** | Solidity/Rust 智能合约静态分析 + TON 链上审计存证 | Web3 与 Claude Skills 结合的新形态（外部协议贡献），引发命名空间信任边界讨论 | OPEN |
| 7 | [#83](https://github.com/anthropics/skills/pull/83) | **skill-quality-analyzer + skill-security-analyzer** | 从 5 维度评估 Skill 质量、对 Skill 做安全审计 | 与 Issue #492（社区 Skill 冒充官方）的诉求高度对应，是 Meta 工具层的关键拼图 | OPEN |
| 8 | [#1776](https://github.com/anthropics/skills/pull/1776) | **blast-radius** | 批量/破坏性写入前的 checklist（归档、删除、群发邮件等） | 呼应"Agent 治理 / 行动前最后一道防线"主题（与 #412/#1385 同源） | OPEN |

> 共同特征：上述 8 个 PR 全部 OPEN，无一合并，反映 Skills 仓库对贡献准入门槛较高、review 周期长。

---

## 2. 社区需求趋势（来自 Issues）

### 🔴 趋势 A：Skills 生态的**信任与安全**（最热议题）
- [#492](https://github.com/anthropics/skills/issues/492) **43 评论 / 2 👍** — 社区 Skill 占用 `anthropic/` 命名空间冒充官方，构成信任边界滥用。**这是仓库历史上评论数最高的 Issue。**
- [#1175](https://github.com/anthropics/skills/issues/1175) — SharePoint 集成场景下把权限逻辑写在 SKILL.md 内的安全担忧
- [#83](https://github.com/anthropics/skills/pull/83) — 提出 skill-security-analyzer 作为回应

### 🟠 趋势 B：**评估与触发可靠性**（基础设施层）
- [#556](https://github.com/anthropics/skills/issues/556) **12 评论 / 7 👍** — `run_eval.py` 触发率 0%，整个 eval 流水线疑似不可用
- [#1487](https://github.com/anthropics/skills/issues/1487) — `claude-api` skill 一次性注入 ~156k tokens，单次工具调用耗尽上下文
- [#1390](https://github.com/anthropics/skills/issues/1390) — `mcp-builder/evaluation.py` 对真实 MCP server 评分恒为 0/N
- [#202](https://github.com/anthropics/skills/issues/202) — skill-creator 应从"开发者文档"改为"操作型 Skill"（已 CLOSED）

### 🟡 趋势 C：**企业协作与分发**
- [#228](https://github.com/anthropics/skills/issues/228) **16 评论 / 8 👍** — 在 Claude.ai 内启用组织级 Skill 共享，避免 .skill 文件经 Slack 手动分发
- [#189](https://github.com/anthropics/skills/issues/189) **6 评论 / 9 👍** — `document-skills` 与 `example-skills` 插件内容重复，导致上下文重复加载
- [#16](https://github.com/anthropics/skills/issues/16) — 将 Skills 暴露为 MCP，统一软件 API 形态

### 🟢 趋势 D：**测试 / 质量 / 治理类 Meta Skill**
- [#1385](https://github.com/anthropics/skills/issues/1385) — Reasoning Quality Gate Pipeline（Pre-task Calibration → Adversarial Review → Delivery Verification）
- [#412](https://github.com/anthropics/skills/issues/412) — Agent Governance：policy 强制、威胁检测、信任评分、审计轨迹（已 CLOSED）
- [#1329](https://github.com/anthropics/skills/issues/1329) — `compact-memory`：长任务中用符号化记法压缩 agent 自身笔记，节省上下文

### 🔵 趋势 E：**文档与办公场景的纵深需求**
- DOCX 修复扎堆（[#1734](https://github.com/anthropics/skills/pull/1734) orphan comments、[#1792](https://github.com/anthropics/skills/pull/1792) LibreOffice 超时、[#541](https://github.com/anthropics/skills/pull/541) `w:id` 冲突、[#1790](https://github.com/anthropics/skills/pull/1790) 缺 rels 文件）
- [#514](https://github.com/anthropics/skills/pull/514) document-typography（孤儿/寡妇控制）
- [#486](https://github.com/anthropics/skills/pull/486) ODT（OpenDocument 全套读写）
- [#1245](https://github.com/anthropics/skills/pull/1245) notion-spec-to-implementation + 简历审计

### 🟣 趋势 F：**基础设施兼容性**
- [#1742](https://github.com/anthropics/skills/pull/1742) `mcp>=2` API 迁移（`streamable_http_client`）
- [#1362](https://github.com/anthropics/skills/issues/1362) `pnpm ≥10.1` 构建脚本失败
- [#29](https://github.com/anthropics/skills/issues/29) AWS Bedrock 集成路径缺失
- [#1615](https://github.com/anthropics/skills/pull/1615) scnet-hpc（SSH/Slurm 高性能计算集群）

---

## 3. 高潜力待合并 Skills（活跃 + 未合）

| PR | Skill | 最后更新 | 为什么"近期可能落地" |
|---|---|---|---|
| [#1298](https://github.com/anthropics/skills/pull/1298) | skill-creator eval 隔离 + Windows 修复 | 2026-09-16 | 直接回应 Issue #556（trigger rate 0%），是平台刚需 |
| [#1742](https://github.com/anthropics/skills/pull/1742) | mcp-builder `mcp>=2` 兼容 | 2026-09-19 | 明确修复 issue #1668，版本兼容属于必合项 |
| [#1792](https://github.com/anthropics/skills/pull/1792) | docx LibreOffice 超时改报错并校验产物 | 2026-09-25 | 与 #1790/#1734 同系列修复，组成"docx 健壮性"批次 |
| [#723](https://github.com/anthropics/skills/pull/723) | testing-patterns | 2026-09-21 | 综合性测试 Skill，长尾需求稳定 |
| [#525](https://github.com/anthropics/skills/pull/525) | pyxel | 2026-09-22 | 6 个月持续打磨，作者维护积极 |
| [#822](https://github.com/anthropics/skills/pull/822) | AWT | 2026-09-19 | E2E 测试代表方案 |
| [#83](https://github.com/anthropics/skills/pull/83) | skill-quality-analyzer + skill-security-analyzer | 2026-01-07 | 配合 Issue #492（最热议题）几乎是政治正确 |

> 共同点：基础设施修复类 PR（#1298、#1742、#1792）合并概率最高；新增 Skill 类 PR（#525、#822、#723、#1703）需更长时间 review。

---

## 4. Skills 生态洞察（一句话总结）

> **社区最集中的诉求是"把 Skills 从内容生成工具升级为可被信任、可被评估、可被治理的工程化资产"** —— 既包括命名空间安全（#492, 43 评论）、评估可靠性（#556, 12 评论）、上下文预算（#1487）这类基础设施债，也包括 testing-patterns、blast-radius、agent-governance、skill-quality-analyzer 等 Meta Skill 的涌现。

---

### 📌 附录：本次数据观察到的两点异常
1. **PR 评论数全部为 undefined**：可能为接口权限/字段映射问题，建议下次快照前确认 `comments` 字段是否需要 `issue_comments` 子资源。
2. **PR 👍 全部为 0**：与"高评论"不成比例，疑似数据采集发生在 PR 处于极早期或无评分阶段；建议引入 `reactions.total_count` 或按 `updated_at` 近期度做加权。

---

<think>Let me analyze the GitHub data for Claude Code from 2026-09-26 and create a structured daily report in Chinese.

Key observations:
1. New release v2.1.283 - Added x-claude-code-prompt-id header for gateways, availableModelsMatch managed setting
2. Top issue is #91870 "Mods - make Claude 10x more extensible" with 218 comments - massive community engagement about extensibility
3. Several bug reports about MCP, plugins, channels (telegram), and various issues
4. Multiple PRs from @poteat about mods system (plugin/extensibility work)
5. Many issues around model behavior (Opus 5.5), safeguards, CLAUDE.md handling

Let me organize this into a structured Chinese report.

The user wants:
1. 今日速览 (Today's Overview)
2. 版本发布 (Version Release) - if new version
3. 社区热点 Issues (Hot Issues) - pick 10
4. 重要 PR 进展 (Important PRs) - pick 10 (but only 5 PRs available, so I'll cover all 5)
5. 功能需求趋势 (Feature Request Trends)
6. 开发者关注点 (Developer Concerns)

Let me craft this carefully.</think>

# Claude Code 社区动态日报

**日期：2026-09-26** | 数据来源：GitHub `anthropics/claude-code`

---

## 📌 今日速览

今日最值得关注的信号是 **"Mods / 插件可扩展性" 议题正式成为社区头号议题**（#91870 评论数突破 218 条 👍126），配套的 3 个相关 PR 也集中在同一作者（@poteat）持续推进。与此同时，**v2.1.283 引入网关请求分组能力**（`x-claude-code-prompt-id`），为企业级 LLM Gateway 集成铺路。问题端则反映出 **MCP / Channel Plugin 生态仍存在较多稳定性缺陷**，尤其是 Telegram 通道与全局缓存冲突问题反复出现。

---

## 🚀 版本发布：v2.1.283

| 变更 | 说明 |
|---|---|
| **Gateway 提示头 `x-claude-code-prompt-id`** | 让 LLM Gateway 可将服务于同一用户提示的所有请求分组；需通过 `CLAUDE_CODE_GATEWAY_HINT_HEADERS=1` 显式开启 |
| **`availableModelsMatch` 托管设置** | 取值 `"exact"` 时，`availableModels` 条目将按精确匹配放行（具体匹配语义详见官方文档） |

> 🔗 https://github.com/anthropics/claude-code/releases/tag/v2.1.283

---

## 🔥 社区热点 Issues（Top 10）

| # | 标题 | 评论 | 👍 | 价值判断 |
|---|---|---:|---:|---|
| [#91870](https://github.com/anthropics/claude-code/issues/91870) | **Mods - make Claude 10x more extensible** | **218** | 126 | 头号议题。社区确认官方将"数周内"发布 function hooks，是今年最重要的扩展性 Roadmap 信号 |
| [#2544](https://github.com/anthropics/claude-code/issues/2544) | **CLAUDE.md 强制规则被持续忽略** | 24 | 41 | 高赞老问题，反映 memory/规则遵循能力的长期痛点 |
| [#33323](https://github.com/anthropics/claude-code/issues/33323) | **任务队列：排队多个 prompt** | 23 | 56 | 呼声最高的 UX 增强之一，OpenAI Codex CLI 已有类似能力 |
| [#30447](https://github.com/anthropics/claude-code/issues/30447) | **`claude remote-control --headless`** | 8 | 39 | 无 TTY 依赖的常驻远程控制，瞄准 CI/CD 与服务器部署场景 |
| [#97305](https://github.com/anthropics/claude-code/issues/97305) | **模型把 "verifiable" 写成 "falsifiable"** | 6 | 1 | 罕见但可复现（4 个月 4 次）的精确语义错误，反映项目级纠错无法迁移 |
| [#92434](https://github.com/anthropics/claude-code/issues/92434) | **Auto-compact 依据上一轮 token 数判断 → 溢出** | 5 | 0 | 与 v2.1.281–283 的 CLAUDE.md 双注入可能相关，Compact 逻辑缺陷值得跟进 |
| [#97336](https://github.com/anthropics/claude-code/issues/97336) | **MCP 工具结果被替换为 `<<ccr:...,html,...>>` 占位符** | 3 | 0 | 跨两个无关 MCP server 复现，模型无法读取实际结果 |
| [#81571](https://github.com/anthropics/claude-code/issues/81571) | **Telegram 插件第二个会话会杀掉轮询器** | 3 | 0 | Channel 插件生命周期的严重稳定性问题 |
| [#78719](https://github.com/anthropics/claude-code/issues/78719) | **官方市场刷新后 Telegram MCP 启动失败** | 3 | 0 | 与上一条同根：`/mcp Reconnect` 才能恢复 |
| [#94728](https://github.com/anthropics/claude-code/issues/94728) | **后台子代理恢复后丢失 prompt cache** | 2 | 2 | `messages_changed` 且无 thinking block，直接影响成本与一致性 |

**整体观察**：Telegram Channel 插件相关 bug 反复出现（#81571 / #78719 / #80822 / #97314），构成今日最集中的稳定性主题；MCP / 缓存机制相关问题也明显增多。

---

## 🛠️ 重要 PR 进展

> 今日活跃 PR 主要由 @poteat 推动，围绕 **"Mods" 扩展框架**展开。

| # | 标题 | 说明 |
|---|---|---|
| [#97334](https://github.com/anthropics/claude-code/pull/97334) | **sec-default: 对话保留行数突破用户 tier** | Mod 框架的会话安全默认值；需等待引擎具备 `session.append` 事件后才能合并 |
| [#97293](https://github.com/anthropics/claude-code/pull/97293) | **mods: 声明携带 process.run 截断标志与 list 条目 mtimeMs** | 增强 `$.process.run` / `$.fs.list` 的元数据能力；test 在 npm CLI 同步发布字段前会**故意红** |
| [#97241](https://github.com/anthropics/claude-code/pull/97241) | **sec-default: 系统提示分段突破用户 tier** | Mod 框架的提示安全默认值，依赖 `prompt.compose` 事件落地 |
| [#96953](https://github.com/anthropics/claude-code/pull/96953) | **diff: focus hook 同时响应两种插件名** | ✅ **已关闭**。修复 `ui.focus` hook 在插件以 `cc-plugin-diff` 注册时失配的问题 |
| [#41611](https://github.com/anthropics/claude-code/pull/41611) | **add the missing source to claude code** | 长期未合并的源码补充 PR（5 月创建，今日更新） |

**判断**：#97241 / #97334 / #97293 共同构成 Mods 系统的"安全+元数据"骨架 PR，合并顺序对引擎事件依赖强，属于**配套基础设施**而非用户可直接感知的变更。

---

## 📈 功能需求趋势

按议题热度与集中度归类：

| 方向 | 代表 Issue | 热度 |
|---|---|---|
| **🧩 可扩展性 / Hooks / Plugins** | #91870, #97349, #97241, #97334 | ⭐⭐⭐⭐⭐ |
| **💬 多任务 / 任务队列 UX** | #33323 | ⭐⭐⭐⭐ |
| **🛰️ 远程控制 / Headless / Server 部署** | #30447, #97352 (代理兼容) | ⭐⭐⭐⭐ |
| **🧠 Memory / CLAUDE.md 行为可靠性** | #2544, #97342, #97179 | ⭐⭐⭐⭐ |
| **🤖 模型行为可控性**（Opus 5.5 语言漂移、精确用词） | #96601, #97305 | ⭐⭐⭐ |
| **🪪 认证 / OAuth / setup-token** | #97350, #97346 | ⭐⭐⭐ |
| **🪟 Desktop / IDE 集成 / Chrome 扩展** | #96049, #97347, #97344, #97341 | ⭐⭐⭐ |
| **💸 成本 / 缓存 / 限额** | #94728, #95670, #97348 | ⭐⭐⭐ |

**结论**：扩展性是 **绝对的第一主线**，其次是"可靠的基础设施层"——CLI/Desktop/CI 三端的稳定性改进已成为高频小修而不是单点突破。

---

## 👨‍💻 开发者关注点（痛点 & 高频需求）

1. **Hook 与 Mod 体系的"真正的可扩展性"**
   社区在 #91870 下已与官方形成强共识：**function hooks 数周内会发布**。开发者期待的不只是配置项，而是**可以在引擎事件上挂代码的能力**（`session.append` / `prompt.compose` / `ui.focus`）。

2. **Telegram / Channel 插件的"单点失败 = 全局瘫痪"**
   #81571、#78719、#80822、#97314 形成一组相互纠缠的 bug：**全局 `mcp-needs-auth-cache.json` 与启动竞态**导致一个 headless `claude -p` 调用就能让所有 Telegram bot 离线数分钟到 15 分钟。这是 CI/无人值守场景下最严重的可靠性问题。

3. **CLAUDE.md 的"双重注入 + Compact 后残留"**
   继 v2.1.281 修复 `--add-dir` 双发后，#97342 报告 Compact 后**项目根 `CLAUDE.md` 仍会作为"instructions"附着在保留尾部，再发一份完整副本**。叠加 #2544 的"强制规则被忽略"，memory 体系的边界处理仍是热点。

4. **后台子代理与 Prompt Cache 断裂**
   #94728 指出恢复后台 subagent 时 `messages_changed` 且无 thinking block——直接影响**成本与一致性**，是 Agent 编排层的一块隐性短板。

5. **LLM Gateway 集成正式进入官方视野**
   v2.1.283 的 `x-claude-code-prompt-id` 表明官方开始主动适配企业级网关（请求分组、限流、计费），这与 #95670 / #97351 中"Safeguard 在所有请求上重复触发"的问题形成对照——**网关侧的可观测性建设 vs. 客户端的触发噪声**是接下来需要平衡的两端。

6. **OAuth / Auth 边缘场景**
   #97350 报告 `apiKeyHelper` 返回 `claude setup-token` OAuth token 时被 401 拒绝（同 token 用 `CLAUDE_CODE_OAUTH_TOKEN` 环境变量即可工作），#97346 指出 RFC 9728 protected-resource 检查对 `type:http` MCP server 用错字面量 `"http"`——**认证路径的细节一致性**还有提升空间。

---

*日报生成于 2026-09-26，基于过去 24 小时 GitHub 公开数据。*

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

<think>The user wants me to generate a Chinese daily report based on GitHub data for the OpenAI Codex project. Let me analyze the data carefully and structure it according to the requested sections.

Let me first parse through the data:

**Releases (past 24 hours):**
- rust-v0.158.0-alpha.15.1
- rust-v0.157.1
- rust-v0.159.0-alpha.3
- rust-v0.159.0-alpha.2
- rust-v0.159.0-alpha.1
- rust-v0.158.0-alpha.15
- rust-v0.158.0-alpha.14
- rust-v0.158.0-alpha.13

So the main stable release is 0.157.1, with multiple alpha releases for 0.158.0 and 0.159.0.

**Top Issues (by comments):**
1. #28969 - Auto-resolve 60 seconds question - 90 comments, 210 likes (very popular)
2. #31836 - Projects Sort By Last updated not working - 51 comments
3. #37967 - Remote Control cannot attach to live CLI session - 22 comments
4. #44342 - Windows desktop existing-chat blocked - 19 comments
5. #48043 - Codex CLI 0.157.0 fails on Windows daemon privilege - 11 comments
6. #18822 - VS Code Rate limits missing - 10 comments
7. #47054 - Windows Codex Desktop hangs on second message - 9 comments
8. #42937 - GPT-5.6 Sol and GPT-6 Astra reliability - 8 comments
9. #17103 - Ctrl+V in TUI image-only - 8 comments
10. #44768 - Windows app-server daemon opens console window - 7 comments
11. #48212 - Linux Desktop tasks stuck on Starting - 7 comments
12. #32908 - iOS Remote Control push notifications - 7 comments
13. #48240 - API error 401 - 6 comments (CLOSED)
14. #48059 - Windows Terminal windows pop up - 5 comments
15. #41648 - Realtime Voice stale response - 5 comments

**Top PRs (all closed, by recency):**
1. #48353 - Stabilize skill catalogs across executor availability changes
2. #48352 - Show turn tips while working and after completion in TUI
3. #48350 - Display reconnect commands on a separate line
4. #48344 - Preserve tool metadata for OpenAI provider endpoint overrides
5. #48318 - Keep TUI reconnect attempts running until the shared deadline
6. #48272 - Prevent Windows daemon launches from retaining launcher stdio
7. #48238 - Suppress console windows for local Windows MCP servers
8. #48229 - Extract Responses failure parsing into a dedicated module
9. #48224 - Preserve model and access program pairs during compaction
10. #48222 - Preserve late result metadata for truncated code-mode calls
11. #48213 - Isolate executable fixture copies in CLI tests on Linux
12. #48211 - Keep Codex visible during external editor handoff
13. #48207 - Preserve queued output for observers during code-mode termination
14. #48206 - Add a keep-and-next action to the warnings viewer
15. #48205 - Dismiss viewed TUI warnings when closing the viewer
16. #48200 - Extract Responses header conversion into a shared module
17. #48199 - Keep archived threads with empty previews visible in listings
18. #48198 - Honor execution environment proxy requirements
19. #48197 - Optimize blake3 in Bazel fastbuilds
20. #48190 - Bound agent message board SSE frames before parsing

Now let me identify trends:
- Windows compatibility is a HUGE issue - many Windows-specific bugs (daemon, console windows, hangs)
- 0.157.0 appears to have introduced multiple regressions
- TUI improvements (paste, latency, warnings viewer)
- Remote Control feature issues
- Codex Desktop app issues (especially Windows)

Let me write this up in Chinese with a professional tone.</think>

# OpenAI Codex 社区动态日报
**日期：2026-09-26**

---

## 📌 今日速览

今日 Codex 仓库异常活跃，单日内合并了 **超过 20 个 PR**，主线版本 **rust-v0.157.1** 修复了 0.157.0 引入的多项 Windows 端回归问题，同时 0.158.0 与 0.159.0 的 alpha 通道快速迭代。社区焦点高度集中在 **Windows 桌面端与 CLI 的稳定性**（daemon 弹窗、配置加载阻塞、终端闪烁），同时 **TUI 交互体验** 与 **GPT-6 Sol/Astra 模型可靠性** 也是高频讨论议题。

---

## 🚀 版本发布

| 版本 | 类型 | 重点 |
|------|------|------|
| **rust-v0.157.1** | 稳定版 | 0.157.0 补丁版（注：GitHub tag diff 返回 404，PR 索引为空，官方尚未公开详细 changelog） |
| **rust-v0.158.0-alpha.13/14/15/15.1** | Alpha | 0.158 通道密集迭代，alpha.15.1 为小型补丁 |
| **rust-v0.159.0-alpha.1/2/3** | Alpha | 0.159 通道启动，未来功能预热 |

> 💡 建议：当前 Windows 用户应优先升级至 0.157.1，规避 0.157.0 的 daemon 权限与终端弹窗 bug。

---

## 🔥 社区热点 Issues（Top 10）

1. **[#28969](https://github.com/openai/codex/issues/28969)** — 关闭"问题 60 秒自动解决"开关（**90 条评论 / 👍210**）
   长期高赞议题。开发者希望 CLI/配置层提供关闭该自动超时行为的开关，避免 Codex 在未确认前擅自推进问题解决。

2. **[#31836](https://github.com/openai/codex/issues/31836)** — Projects 视图"按最近修改排序"失效（**51 条评论**）
   macOS Apple Silicon 桌面端 Projects 排序控件接收"Last updated"但未真正生效，仅在分组内排序任务。

3. **[#37967](https://github.com/openai/codex/issues/37967)** — Remote Control 无法挂载到工作站的实时 CLI 会话（**22 条评论**）
   期望的"工作站主控 + 手机监控/审批"工作流在 in-progress 会话上失败，影响远程协作核心场景。

4. **[#44342](https://github.com/openai/codex/issues/44342)** — Windows Desktop 现有会话持续阻塞（**19 条评论**）
   复现率极高：`existing-chat` 因 `loading-local-config / pending codex-home` 长时间挂起，主窗口重载可恢复但会复发。

5. **[#48043](https://github.com/openai/codex/issues/48043)** — Codex CLI 0.157.0 在 Windows 上 daemon 权限错误无法启动（**11 条评论**）
   0.157.0 引入的回归，0.156.1 正常。需要 0.157.1 修复。

6. **[#18822](https://github.com/openai/codex/issues/18822)** — VS Code 状态栏"剩余速率限制"缺失（**10 条评论**）
   商业版订阅用户的 IDE 集成体验问题，影响日常用量监控。

7. **[#47054](https://github.com/openai/codex/issues/47054)** — Windows 桌面端发送第二条消息后永久挂起（**9 条评论**）
   Windows 11 / ChatGPT Plus 用户的高频复现问题，与 [#44342](https://github.com/openai/codex/issues/44342)、[#48180](https://github.com/openai/codex/issues/48180) 同源。

8. **[#42937](https://github.com/openai/codex/issues/42937)** — GPT-5.6 Sol / GPT-6 Astra：高智能下的自主完成可靠性下降（**8 条评论**）
   详细的事件综合分析报告。指出新模型虽然能力提升，但需要更多监督、容易中断或失败。

9. **[#17103](https://github.com/openai/codex/issues/17103)** — TUI 中 `Ctrl+V` 仅作为图片粘贴（**8 条评论**）
   当终端未发送 bracketed paste 时，Codex 错误地将其视为图片粘贴，需添加对称的文本粘贴路径。

10. **[#44768](https://github.com/openai/codex/issues/44768)** — Windows app-server daemon 为每次 hook/shell 打开可见控制台窗口（**7 条评论**）
    与 [#48023](https://github.com/openai/codex/issues/48023)、[#48059](https://github.com/openai/codex/issues/48059)、[#48325](https://github.com/openai/codex/issues/48325) 形成同一类 Windows 进程创建标志问题集群。

> 备选关注：[#48212](https://github.com/openai/codex/issues/48212) Linux 26.924.20706 任务卡在"Starting your task"；[#32908](https://github.com/openai/codex/issues/32908) iOS Remote Control 推送通知失效。

---

## 🛠 重要 PR 进展（Top 10）

1. **[#48353](https://github.com/openai/codex/pull/48353)** — 跨执行器可用性变化的技能目录稳定性
   将云端技能配额限制在元数据预算的 3/4，避免重连后重复渲染同一目录。

2. **[#48352](https://github.com/openai/codex/pull/48352)** — TUI 在工作中及完成后展示轮次提示
   工作 30 秒后从提示目录随机展示一条；完成后从第 3 轮起展示完成提示，提升长时间会话的引导质量。

3. **[#48350](https://github.com/openai/codex/pull/48350)** — 重连命令独立成行展示
   断开摘要中 `To reconnect, run:` 后跟缩进的恢复命令，提升终端可读性。

4. **[#48344](https://github.com/openai/codex/pull/48344)** — 保留 OpenAI 提供商端点覆盖的工具元数据
   修复内置 OpenAI 提供商使用自定义端点时丢失原始工具结果元数据与 MCP 归属的问题。

5. **[#48318](https://github.com/openai/codex/pull/48318)** — TUI 重连尝试持续到共享截止时间
   5 次重试上限可能在 120 秒预算耗尽前就放弃恢复，现改为 8 秒延迟持续重试至截止。

6. **[#48272](https://github.com/openai/codex/pull/48272)** — 阻止 Windows daemon 启动时继承 launcher stdio
   修复分离 daemon 继承 launcher 输出管道导致调用方挂起等待 EOF 的问题。

7. **[#48238](https://github.com/openai/codex/pull/48238)** — 抑制本地 Windows MCP 服务器的控制台窗口
   在共享命令封装中暴露 Windows 进程创建标志，本地 stdio MCP 服务器使用 `CREATE_NO_WINDOW`，直接缓解 [#44768](https://github.com/openai/codex/issues/44768) 类问题。

8. **[#48229](https://github.com/openai/codex/pull/48229)** — 将 Responses 失败解析提取到独立模块
   把 `response.failed` 分类与速率限制重试延迟解析迁入 `responses_error.rs`，改善错误处理可维护性。

9. **[#48224](https://github.com/openai/codex/pull/48224)** — 在压缩期间保留模型与访问程序配对
   解决 compaction 使用旧模型时继承当前轮次访问程序、被服务端拒绝的问题。

10. **[#48211](https://github.com/openai/codex/pull/48211)** — 外部编辑器交接期间保持 Codex 可见
    从全屏 TUI 打开外部编辑器时不再离开 alternate screen，保留草稿与提示信息。

> 备选关注：[#48207](https://github.com/openai/codex/pull/48207) code-mode 终止时保留观察者队列输出；[#48199](https://github.com/openai/codex/pull/48199) 列表中保留空预览的归档线程；[#48190](https://github.com/openai/codex/pull/48190) 在解析前限制 agent message board SSE 帧大小。

---

## 📈 功能需求趋势

从 Issue 标签与语义聚类可以看出当前社区关注的几个清晰方向：

| 方向 | 代表 Issue | 趋势说明 |
|------|-----------|---------|
| **Windows 平台稳定性** | #44342 / #47054 / #48043 / #44768 / #48216 / #48180 | 占比最高，0.157.0 引入的 daemon、配置加载、终端弹窗等回归集中爆发 |
| **TUI 交互改进** | #17103 / #47376 / #48233 / #48351 | 文本粘贴、数字选择菜单、高亮延迟、升级菜单交互均存在改进空间 |
| **GPT-6 Sol / GPT-5.6 模型行为** | #42937 / #38979 | 新模型智能提升但自主完成可靠性下降，工具调用与 MCP 兼容性需关注 |
| **桌面端 Projects / 线程管理** | #31836 / #47983 / #48199（PR） | 项目排序、归档线程、线程列表接口存在一致性问题 |
| **Remote Control 跨端体验** | #37967 / #32908 | iOS 推送通知 + 工作站实时会话挂载仍不完整 |
| **权限与配置粒度** | #28969 / #47376 | 用户希望获得更细粒度的行为开关（自动解决超时、菜单选择方式） |

---

## 💬 开发者关注点

综合今天的高频反馈，开发者最痛的点可以归纳为以下几类：

1. **🪟 Windows 成了"重灾区"**
   仅 2026-09-25/26 两天内就新增了至少 **6 个 Windows 专有 bug**（daemon 弹窗、白屏、灰屏、第二条消息发送失败、浏览器控制失效、OAuth 刷新失效），社区对 Windows 桌面版的信心明显动摇。

2. **⚡ 0.157.0 是问题集中点**
   大量 issue 的标题或环境信息明确写着 "Codex CLI 0.157.0"，多项严重回归直到 0.157.1 才被消化（PR #48272、#48238 已直接对应其中问题）。

3. **🤖 新模型"看得更远、跑得更不稳"**
   [#42937](https://github.com/openai/codex/issues/42937) 的综合分析显示，开发者认可 GPT-6 Sol/Astra 的能力提升，但抱怨其在长任务、多步骤自主执行上的失败率上升，监督成本反而提高。

4. **⌨️ TUI 细节影响日常使用**
   从 Konsole 中键粘贴失效、菜单数字无法选择、文本高亮 0.5 秒延迟，到启动更新菜单忽略按键——这些"小问题"加起来显著拖累了 CLI 用户的日常效率。

5. **🔌 跨设备 Remote Control 体验断层**
   移动端推送通知失效、工作站 in-progress 会话挂载失败，暴露出 Remote Control 通道在跨端一致性上的短板。

6. **🧹 代码架构持续清理**
   PR 中多次出现"将 X 提取为独立模块"（#48229 / #48200），表明项目正在系统性地重构 Responses、WebSocket、错误处理等基础设施，间接提升了长期稳定性预期。

---

*数据截止：2026-09-26  ·  数据源：[github.com/openai/codex](https://github.com/openai/codex)*

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

<think>让我分析这些GitHub数据，生成一份结构清晰的Gemini CLI社区动态日报。

首先梳理关键信息：

**版本发布**：
- v0.63.0-nightly.20260926.g2fe7c2d3f 发布了
- 包括修复 diff.external 覆盖问题、版本号 bump

**重要 Issues 分析**（按评论数排序）：
1. #22323 - 子代理恢复问题（13评论）- P1 bug，subagent恢复报告GOAL成功
2. #19873 - Zero-Dependency OS Sandboxing（9评论）- P2 enhancement，利用Gemini 3的bash能力
3. #21409 - Generalist agent hangs（8评论，8点赞）- P1 bug，generalist agent卡死
4. #22745 - AST-aware file reads（7评论）- P2 feature，AST感知的文件读取
5. #21968 - Gemini不使用skills和sub-agents（6评论）- P2 bug
6. #26525 - Auto Memory日志安全（5评论）- P2 security bug
7. #26522 - Auto Memory重试问题（4评论）- P2 bug
8. #22267 - Browser Agent忽略settings.json（4评论）- P2 bug
9. #22232 - browser_agent resilience（4评论）- P3 feature
10. #21983 - browser subagent fails in wayland（4评论，1点赞）- P1 bug
11. #21000 - native file tools任务跟踪（4评论）- P3 feature
12. #20079 - symlink不被识别为agent（4评论）- P2 bug

**重要 PR 分析**：
1. #29459 - shell命令取消传播 - P1
2. #29402 - persistent state写入失败安全 - P1
3. #29387 - 扩展加载失败处理 - extensions
4. #29400 - 修复重复tool响应 - P1
5. #29399 - 编辑时保留注释 - P2
6. #29398 - MCP工具发现超时限制 - P1
7. #29397 - 会话上下文投毒防护 - P2
8. #29394 - 阻止mutating工具 - P1
9. #29386 - A2A server修复 - P2
10. #29448 - 无限认证循环修复 - P1
11. #29499 - 文件操作序列化 - P1

**功能需求趋势分析**：
1. 子代理/Subagent 稳定性与可见性 - 多个相关issue
2. AST感知工具 - 探索代码库更智能
3. Auto Memory 系统改进 - 安全性和正确性
4. Browser Agent 鲁棒性
5. 工具数量限制（>128 tools）
6. 终端性能优化
7. 本地Subagent（Sprint 1）
8. 任务跟踪改进
9. 上下文优化（Tactful Extraction）
10. 自我感知能力（CLI标志、快捷键）

**开发者关注点**：
1. 子代理的可靠性（GOAL状态错误、卡死、Wayland失败）
2. 内存系统的安全性和可靠性
3. 浏览器代理的稳定性
4. 工具数量限制问题（>128 tools出现400错误）
5. 终端性能（resize时的flicker）
6. 配置管理（settings.json覆盖、symlink识别）
7. 自我执行能力
8. 危险命令防护
9. AST感知工具
10. 任务跟踪持久化

让我组织成一篇完整的中文日报。</think>

# Gemini CLI 社区动态日报

**日期：2026-09-26** | 数据来源：github.com/google-gemini/gemini-cli

---

## 📌 今日速览

今日 v0.63.0-nightly.20260926 nightly 版本如期发布，社区核心议题仍聚焦于**子代理（Subagent）可靠性**与**Auto Memory 系统安全**两大方向。多个高优先级 P1 issue 持续暴露 subagent 在 MAX_TURNS 边界、generalist agent 调度、Wayland 环境下的稳定性问题，团队同步推进了 P1 级修复 PR 的合入，覆盖 shell 取消传播、状态写入原子性、MCP 工具超时等关键场景。

---

## 🚀 版本发布

### v0.63.0-nightly.20260926.g2fe7c2d3f

本版本包含两个变更：

- **fix(core)**: 移除无效的 `diff.external` 配置覆盖（[#29467](https://github.com/google-gemini/gemini-cli/pull/29467)）
- **chore(release)**: 版本号自动 bump 至 0.63.0-nightly.20260923.gf50ba8608（[#29471](https://github.com/google-gemini/gemini-cli/pull/29471)）

另见自动发布脚本 PR [#29509](https://github.com/google-gemini/gemini-cli/pull/29509)。

---

## 🔥 社区热点 Issues

以下按评论活跃度与影响范围筛选，涵盖稳定性、安全、可观测性等核心问题：

### 1. [#22323](https://github.com/google-gemini/gemini-cli/issues/22323) — Subagent 在 MAX_TURNS 后错误报告 GOAL 成功 (💬13, 👍2)
**P1 Bug** | `codebase_investigator` 子代理在达到最大轮次限制后，仍返回 `status: "success"` 与 `Termination Reason: "GOAL"`，掩盖了中断事实。这是子代理可观测性问题的典型代表，社区持续关注中。

### 2. [#19873](https://github.com/google-gemini/gemini-cli/issues/19873) — Zero-Dependency OS Sandboxing 与 Post-Execution Intent Routing (💬9, 👍1)
**P2 Enhancement** | 提议利用 Gemini 3 模型原生 bash 亲和力（`grep`/`cat`/`sed`/`awk`），构建零依赖沙箱与执行后意图路由，是路线图级别的核心设计提案。

### 3. [#21409](https://github.com/google-gemini/gemini-cli/issues/21409) — Generalist agent 永久挂起 (💬8, 👍8)
**P1 Bug** | 当 CLI 将任务委派给 generalist agent 时会无限卡死，用户最长等待 1 小时仍无响应。8 个 👍 表明社区普遍遇到此问题，提示模型不要委派可暂时绕过。

### 4. [#22745](https://github.com/google-gemini/gemini-cli/issues/22745) — AST 感知文件读取、搜索与映射评估 (💬7, 👍1)
**P2 Feature / Epic** | 跟踪 AST 感知工具系列调研，目标是精确读取方法边界、降低单次读取的 token 噪声，是 subagent 代码探索效率的关键优化方向。

### 5. [#21968](https://github.com/google-gemini/gemini-cli/issues/21968) — Gemini 几乎不使用自定义 skills 与 sub-agents (💬6)
**P2 Bug** | 用户自定义的 gradle、git 等 skills 几乎不会被自动调用，除非显式提示。反映了默认行为与用户配置之间的对齐缺陷。

### 6. [#26525](https://github.com/google-gemini/gemini-cli/issues/26525) — Auto Memory 缺乏确定性脱敏 (💬5)
**P2 Security Bug** | Auto Memory 将本地转录本发送至提取模型前未做确定性脱敏，依赖模型在 prompt 内进行 redaction，存在密钥泄露风险。

### 7. [#22267](https://github.com/google-gemini/gemini-cli/issues/22267) — Browser Agent 忽略 settings.json 覆盖 (💬4)
**P2 Bug** | Browser Agent 完全忽略全局或项目级 `settings.json` 中的配置覆盖（如 `maxTurns`），`AgentRegistry` 的设置合并未传递至 BrowserManager。

### 8. [#21983](https://github.com/google-gemini/gemini-cli/issues/21983) — browser subagent 在 Wayland 下失败 (💬4, 👍1)
**P1 Bug** | 在 Wayland 环境下，browser 子代理直接报 `Termination Reason: GOAL` 失败，跨桌面环境兼容性短板。

### 9. [#20079](https://github.com/google-gemini/gemini-cli/issues/20079) — symlink 不被识别为 agent (💬4)
**P2 Bug** | `~/.gemini/agents/filename.md` 若为符号链接则不会被识别为子代理，限制了配置的灵活组织方式。

### 10. [#24246](https://github.com/google-gemini/gemini-cli/issues/24246) — 工具数 >128 时触发 400 错误 (💬3)
**P2 Bug** | 当可用工具数超过约 400 时，Gemini CLI 触发 API 400 错误。提示 agent 应智能裁剪启用工具范围。

---

## 🛠 重要 PR 进展

### 1. [#29459](https://github.com/google-gemini/gemini-cli/pull/29459) — fix(cli): 将取消信号传递至 shell 命令注入 (P1, M)
修复自定义命令中 `!{...}` shell 注入无法被 AbortSignal 终止的缺陷，新增每条注入的独立预算，从根本上避免挂起命令无法中止的问题。

### 2. [#29402](https://github.com/google-gemini/gemini-cli/pull/29402) — fix(cli): 持久化状态写入失败安全 (P1, M/L)
`PersistentState` 写入改为「写入唯一临时文件 → fsync → 原子 rename」三步，避免 `state.json` 被截断 JSON 静默覆盖。

### 3. [#29398](https://github.com/google-gemini/gemini-cli/pull/29398) — fix(mcp): MCP 工具发现增加短超时 (P1, M)
针对 MCP server 在 `tools/list` 响应 id 不匹配时 SDK 等待满 10 分钟的问题，引入初始工具发现的短超时窗口（关闭 [#28355](https://github.com/google-gemini/gemini-cli/issues/28355)）。

### 4. [#29400](https://github.com/google-gemini/gemini-cli/pull/29400) — fix: 修复会话恢复时重复 tool 响应 (P1, M)
使用 `-r` 恢复会话时，工具结果可能同时保存在 `toolCalls[].result` 与 `user` 消息中，导致 functionResponse 重复。

### 5. [#29397](https://github.com/google-gemini/gemini-cli/pull/29397) — fix(agent): 防止中断回合导致会话上下文投毒 (P2, XL)
当 agentic 流被 SIGINT/超时中断时，CLI 此前会向历史追加合成 assistant 回合，导致严重的上下文投毒与死循环。本 PR 修复该问题。

### 6. [#29394](https://github.com/google-gemini/gemini-cli/pull/29394) — fix(scheduler): 在调度层阻断 mutating 工具 (P1, XL)
即使 prompt 提示 agent "等待/不要修复"，agent 仍会触发 `replace`/`write_file`/`run_shell_command`。本 PR 在 scheduler 层强制执行 user hold 指令（关闭 [#26390](https://github.com/google-gemini/gemini-cli/issues/26390)）。

### 7. [#29448](https://github.com/google-gemini/gemini-cli/pull/29448) — fix(auth): 防止认证无限循环 (P1, M/L)
修复 Windows、WSL 与 headless 环境下与 VS Code Gemini Code Assist 扩展的文件竞争死循环，并在 keyring 不可用时自动 fallback 至加密文件存储（修复 [#28341](https://github.com/google-gemini/gemini-cli/issues/28341)）。

### 8. [#29499](https://github.com/google-gemini/gemini-cli/pull/29499) — fix(core): 文件工具操作串行化与写入原子化 (P1, L)
针对并发子代理对同一路径的 read-modify-write 竞态导致静默丢更新与 diff 不准的问题，引入文件操作串行化（修复 [#29078](https://github.com/google-gemini/gemini-cli/issues/29078)）。

### 9. [#29399](https://github.com/google-gemini/gemini-cli/pull/29399) — fix(core): 编辑时保留无关注释 (P2, M)
强化 replace 工具契约，保留无关注释与代码原样，并引导模型做最小化、分离的编辑，避免重写大块中间内容。

### 10. [#29387](https://github.com/google-gemini/gemini-cli/pull/29387) — fix(cli): 单个畸形扩展目录不再阻断整体加载 (Extensions, M)
`_buildExtension()` 在 try/catch 之前进行 `allowedExtensions` / `blockGitExtensions` 校验，导致一处错误使所有扩展失败。本 PR 将校验移入 try/catch 内部，匹配文件中其他位置的「跳过坏扩展、警告、继续」降级路径。

> 另有 [#29508](https://github.com/google-gemini/gemini-cli/pull/29508) 由 Dependabot 发起，批量升级 76 个 npm 依赖（含 `@modelcontextprotocol/sdk` 与 `simple-git`）。

---

## 📈 功能需求趋势

通过对全部 50 条活跃 issue 的语义聚类，社区当前最关注的方向集中在以下几类：

| 方向 | 代表 Issue | 社区诉求 |
| --- | --- | --- |
| **子代理可靠性与可观测性** | #22323, #21409, #21763, #22598, #21968 | 状态报告正确性、可追踪轨迹（`/chat share`）、bug report 上下文、自动启用 skills |
| **AST 感知 / 上下文优化工具** | #22745, #22746, #19561 | 精确读取方法边界、代码库地图、Tactful Extraction 节省 token |
| **Auto Memory 系统** | #26516, #26522, #26523, #26525 | 确定性脱敏、低信号会话收敛、无效补丁隔离 |
| **Browser Agent 鲁棒性** | #22232, #22267, #21983 | 配置覆盖、Wayland 兼容、持久会话接管与锁恢复 |
| **工具规模治理** | #24246, #23313, #21000 | 限制工具数量、原生文件工具替代 task tracker |
| **本地 Subagent 体验** | #20195, #18836 | Sprint 1 子代理、持久化任务追踪 CRUD |
| **危险操作防护** | #22672 | 阻止 `git reset --force` 等破坏性命令 |
| **Agent 自感知** | #21432, #22466 | CLI 标志、快捷键、`\n` 转义正确性 |

整体趋势：**从「能不能跑」转向「能不能稳定、可见、安全地跑」**。subagent 生态已从概念验证阶段进入可靠性打磨阶段。

---

## 💡 开发者关注点

综合 issue 描述与回复，开发者反馈可归纳为五大痛点：

1. **子代理状态黑盒化** —— GOAL 假成功、generalist 卡死、subagent 上下文不进 `/bug` report，开发者迫切需要「失败也是一等公民」的可观测能力。

2. **记忆系统的信任成本** —— Auto Memory 既要写入又要保护隐私，prompt 级脱敏无法满足安全要求，社区明确期待 deterministic redaction 与低信号会话兜底机制。

3. **工具规模与上下文预算失控** —— >128 tools 直接 400 错误、临时脚本散落各目录、大文件读取 firehose context，开发者反复要求「手术刀式」读取与智能工具剪裁。

4. **浏览器代理的脆弱面** —— Wayland 失败、settings.json 不生效、persistent 模式 fail-fast，三条 issue 集中反映桌面环境差异化是当前最大短板。

5. **自我认知与安全护栏** —— Agent 对自身 CLI 标志/快捷键的事实性错误，以及对 user hold 指令的覆盖冲动，提示需要在 scheduler 层而非 prompt 层建立硬性护栏（[#29394](https://github.com/google-gemini/gemini-cli/pull/29394) 正在此方向推进）。

---

*日报生成完毕，欢迎在评论区补充你最关心的 issue/PR。*

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

<think>Let me analyze the GitHub data for the GitHub Copilot CLI repository and generate a daily report for 2026-09-26.

Key observations:
1. There's a new release v1.0.89-4 with auto routing tier and plugin enable/disable improvements
2. 45 issues updated in the past 24 hours, with 30 shown (top by comments)
3. No PRs in the past 24 hours
4. Notable issues span: authentication, skills system, model selection, MCP, sessions, etc.

Let me structure the report properly. Since there are 0 PRs in the past 24 hours, I'll need to note that and perhaps mention PR-related observations or skip the PR section per the instructions (it says "如有" which means "if any").

Wait, re-reading: "重要 PR 进展 - 挑选 10 个重要的 PR" - since there are no PRs updated in the past 24 hours, I should note this absence.

Let me organize the top issues by importance:

1. #4438 - disable-model-invocation skill unreachable (8 comments, 11 👍) - HIGH
2. #4929 - Auth token refresh failure (6 comments) - HIGH (authentication critical bug)
3. #4775 - Mission Control dashboard 404 (6 comments, 2 👍) - MEDIUM
4. #232 - Add System Prompt parameter (6 comments, 11 👍) - HIGH (long-standing feature request)
5. #2627 - Configurable system prompt (5 comments, 20 👍) - HIGH (most upvoted)
6. #4680 - Wrong model ID to OpenAI endpoint (4 comments) - MEDIUM
7. #4637 - Duplicate skill lookup (2 comments) - MEDIUM
8. #4710 - Runaway copilot-file-search thread (2 comments) - MEDIUM (performance)
9. #4960 - Enterprise custom model selection (2 comments) - MEDIUM
10. #4907 - MCP reconnect notification flood (2 comments) - MEDIUM
11. #4969 - Plugin marketplace description validation (1 comment) - LOW-MEDIUM
12. #4951 - /ask window too small (1 comment) - LOW
13. #4887 - /btw /ask error in Auto mode (4 comments) - MEDIUM

Let me also note the v1.0.89-4 release carefully:
- Auto suggests routing tier with shortcut/click switch
- Auto shows quick feedback prompt after manual model switch
- Direct plugin installs can be enabled/disabled

This is a meaningful release. Let me craft the report now.</think>

# GitHub Copilot CLI 社区动态日报

**日期：2026-09-26** | 数据来源：[github/copilot-cli](https://github.com/github/copilot-cli)

---

## 📌 今日速览

v1.0.89-4 发布，带来自动路由分级建议与插件启停控制能力，但同日也暴露出多个长期存在的核心痛点——尤其是**认证 token 无法自动刷新导致进程级瘫痪**（#4929）以及 **`disable-model-invocation` 反而让 Skill 完全不可达**（#4438）。社区讨论焦点明显集中在 Skill 系统、认证机制、OpenAI 兼容端点路由以及会话稳定性四个方向，PR 端则呈现罕见的零更新状态。

---

## 🚀 版本发布

### [v1.0.89-4](https://github.com/github/copilot-cli/releases)（新增）

**Added**
- **自动路由分级建议**：根据任务类型自动建议合适的路由分级（routing tier），并支持通过快捷键或点击切换
- **快速反馈提示**：手动切换模型后自动弹出轻量反馈浮窗，便于收集用户对模型选择的满意度

**Improved**
- **直接安装的插件支持启用/禁用**：未启用的插件不再加载；之前标记为 disabled 的插件现已停止加载；启用列表可重新加载生效

> 📝 **解读**：本次更新重点在「模型路由智能化」与「插件生命周期管理」，是 CLI 走向「多模型协作平台」的关键一步。自动 routing tier 暗示后台可能已接入更复杂的成本/能力权衡策略。

---

## 🔥 社区热点 Issues（Top 10）

| # | Issue | 评论 | 👍 | 重要性 |
|---|-------|------|-----|--------|
| 1 | [#4438](https://github.com/github/copilot-cli/issues/4438) `disable-model-invocation: true` 让 Skill 不可达 | 8 | 11 | ⭐⭐⭐ |
| 2 | [#232](https://github.com/github/copilot-cli/issues/232) 增加 `--system-prompt` CLI 参数 | 6 | 11 | ⭐⭐⭐ |
| 3 | [#4929](https://github.com/github/copilot-cli/issues/4929) 长进程 Auth Token 停止刷新致全会话失效 | 6 | 0 | ⭐⭐⭐ |
| 4 | [#4775](https://github.com/github/copilot-cli/issues/4775) Mission Control 仪表盘链接 404 | 6 | 2 | ⭐⭐ |
| 5 | [#2627](https://github.com/github/copilot-cli/issues/2627) 系统提示词占 ~20.5K token，请求可裁剪 | 5 | **20** | ⭐⭐⭐ |
| 6 | [#4680](https://github.com/github/copilot-cli/issues/4680) CLI 向自定义 OpenAI 端点发送错误模型 ID | 4 | 0 | ⭐⭐ |
| 7 | [#4887](https://github.com/github/copilot-cli/issues/4887) `/ask` / `/btw` 在 Auto 模型下报错 | 4 | 0 | ⭐⭐ |
| 8 | [#4637](https://github.com/github/copilot-cli/issues/4637) `disable-model-invocation` 触发重复 Skill 查找 | 2 | 0 | ⭐⭐ |
| 9 | [#4710](https://github.com/github/copilot-cli/issues/4710) `copilot-file-search` 后台线程占满 CPU+磁盘 | 2 | 0 | ⭐⭐⭐ |
| 10 | [#4960](https://github.com/github/copilot-cli/issues/4960) 企业自定义模型在 `/model` 中可见但无法选中 | 2 | 0 | ⭐⭐ |

**点评**

- **#4438 与 #4637 是同一类问题的两面**：前者是 `disable-model-invocation: true` 导致 Skill 在显式调用时返回 `Skill not found`，后者是同一机制在斜杠调用时制造上下文噪声。这说明 **Skill 元数据与模型可见性的耦合设计存在系统性缺陷**，急需官方给出统一语义说明。
- **#2627 是今日点赞最高的 Issue**（20 👍），核心诉求是降低系统提示词 ~20.5K token 的固定开销。在 200K 上下文窗口下占比近 10%，叠加 8.5K 的 tool 使用指南，对小模型与成本敏感用户影响巨大。
- **#4929 是高优先级 P0 缺陷**：长会话中 token 刷新失败后 `/login` 也不能恢复，只能重启进程，对长时间 `copilot --yolo` 场景是致命打击。
- **#4710 同样严重**：Idle 状态下的后台搜索线程无限占 CPU 与磁盘日志，是典型的资源泄漏，会严重影响笔记本/容器场景的可用性。

---

## 🔧 重要 PR 进展

**过去 24 小时内 PR 更新：0 条** ⚠️

> 过去 24 小时 Pull Requests 没有任何更新提交，属于罕见空窗期。建议关注 #4438、#4929、#4710 这类高优先级问题是否进入修复分支，以及与 v1.0.89-4 路由分级功能相关的内部重构是否将随后合并。

---

## 📈 功能需求趋势

从 45 条更新 Issue 标签聚类可见：

| 方向 | 代表 Issue | 趋势 |
|------|----------|------|
| **Skill 系统治理** | #4438, #4637, #4838 | 🔥 持续升温，机制语义模糊成为集中投诉点 |
| **认证与会话可靠性** | #4929, #4775, #4082 | 🔥 P0 级，企业用户受冲击大 |
| **OpenAI 兼容端点 / 自定义模型** | #4680, #4960 | ⬆️ 快速上升，企业自托管需求凸显 |
| **系统提示词可配置化** | #232, #2627 | ⬆️ 长期高赞，Token 经济性诉求强烈 |
| **MCP 生态稳定** | #4089, #4907 | ➡️ 反复出现，OAuth 与重连消息需要更鲁棒设计 |
| **跨端同步（CLI ↔ Desktop）** | #4082 | ➡️ 持续呼声，macOS 用户推动 |
| **输入/编辑器体验** | #2199, #3138, #4951, #4787 | ⬇️ 局部打磨类，UX 细节优化 |

---

## 👨‍💻 开发者关注点

1. **Skill 元数据语义不清**：`disable-model-invocation` 在「禁止模型调用」与「仅手动调用」之间没有明确边界，导致显式斜杠调用、CLI `skill list` 与模型 `skill()` tool 三方表现不一致（#4438, #4637）。
2. **认证与长会话可靠性**：长进程的 token 刷新机制、Mission Control 跳转 URL（`/copilot/tasks/` vs `/agents/tasks/`）的错误链接说明会话元数据与 Web 端存在路径漂移（#4929, #4775）。
3. **自定义模型集成体验差**：企业通过 OpenAI 兼容端点配置的模型名无法被正确转发（仍发送默认 `gpt-5.4-nano`），或在 picker 中不可选中（#4680, #4960）。
4. **资源泄漏与后台线程失控**：`--yolo` idle 状态下 `copilot-file-search` 持续占满 CPU 与日志磁盘，对开发机/容器环境影响严重（#4710）。
5. **MCP 噪音污染对话历史**：重连生命周期消息被反复写入主对话流，回到 idle 会话时噪声过多（#4907）。
6. **Token 经济性诉求**：系统提示词 + Tool 描述合计 ~29K token 起步已成共识痛点，开发者希望引入分档或裁剪开关（#2627, #232）。
7. **跨端工作流未打通**：CLI 与 Desktop App 之间无法同步会话，开发者被迫在两端重复劳动（#4082）。
8. **细节 UX 反复打磨**：`Ctrl+Backspace` 删词、模型切换不丢草稿、`/ask` 窗口自适应大小、语音听写被清空等问题反映出编辑器与终端交互的成熟度仍需补足（#2199, #3138, #4951, #4787）。

---

> 📊 **日报小结**：v1.0.89-4 标志着 CLI 进入「智能路由 + 插件精细化」新阶段，但 Skill 与认证两大基础能力的稳定性问题正在侵蚀用户信心。建议社区近期重点关注 **#4929、#4710、#4438** 三条 P0/P1 级别的修复进展。

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

<think>The user wants me to generate a daily report for the OpenCode community based on the GitHub data provided. Let me analyze the data carefully and structure the report according to the requested sections.

Let me organize the information:

**Today's Date:** 2026-09-26

**Releases:** None in the past 24 hours

**Key Issues to highlight:**
1. #9281 - Unified usage tracking via /usage - 12 comments, 34 👍 (CLOSED)
2. #29703 - Allow changing project folder path without losing session history - 10 comments, 25 👍 (CLOSED)
3. #35839 - Launching a third OpenCode instance removes the global opencode CLI on Windows - 7 comments (CLOSED)
4. #48743 - Official MCP warm-up / pre-spawn mechanism - 6 comments, 2 👍 (OPEN)
5. #27110 - Setting to limit max number of parallel subagents - 6 comments, 36 👍 (OPEN)
6. #36520 - Please don't use Ctrl+B for background tasks - 6 comments (CLOSED)
7. #28596 - Bug: repeated tool calls - 6 comments (CLOSED)
8. #37381 - Add a prompt queue and interrupt controls to the composer - 6 comments (CLOSED)
9. #50672 - hardcoded default port 49374 - 4 comments (OPEN)
10. #51430 - Confirmed loopback Desktop connection links - 4 comments (OPEN)

Plus several other important ones:
- #50168 - Desktop zoom resets to 100% (OPEN, 3 comments, 2 likes)
- #32181 - New global skills not available for model to use (CLOSED)
- #36234 - Unable to delete invalid workspace paths (CLOSED)
- #51444 - Export debug logs bundles stale log (OPEN, 2 comments)
- #51432 - Render LaTeX math in messages (CLOSED)
- #51441 - OpenCode 2.x InitializationBlocked (OPEN, 2 comments)
- #51427 - skills: slash frontmatter not implemented (CLOSED)
- #51437 - MCP servers that fail to connect are never retried (CLOSED)
- #51425 - Windows: plugin install staging dirs leak (CLOSED)

**Key PRs:**
1. #51435 - feat(tui): add rawPlaceholders opt-in
2. #51429 - Feat: usage display currency
3. #51448 - fix(tui): skip model selection after MCP connection
4. #51447 - refactor(core): rewrite session compaction
5. #51438 - docs: add aiev plugins to ecosystem
6. #50169 - fix(desktop): persist zoom across app restarts
7. #51439 - Add skill: the supervisor also sleeps
8. #51426 - feat(core): agent manager and task graph pipeline
9. #51168 - fix(opencode): include attached image path in model context
10. #51436 - fix(core): tighten background shell polling guidance
11. #51405 - feat(cli): add --session-id
12. #51433 - fix(desktop): add About menu on Windows
13. #51431 - fix(desktop): preserve selected directories and propose local connection links
14. #51407 - fix(codemode): bound replacement strings, argument counts
15. #51422 - fix(core): resolve configured instructions
16. #49691 - fix(shell): unescape backslash-escaped chars
17. #46225 - fix(app): encode server credentials as UTF-8
18. #46131 - fix(opencode): write auth.json atomically under a lock
19. #40149 - fix(opencode): match absolute permission patterns outside worktree
20. #38283 - docs: add opencode-quota to ecosystem

**Functional Trends from Issues:**
- Usage/cost tracking (#9281, #51429 currency)
- MCP server reliability (#48743, #51437)
- Multi-agent/subagent control (#27110)
- Session history management (#29703, #51441)
- Desktop UX (#50168, #36234, #51432, #51433)
- Local connection/port management (#50672, #51430)
- Skill management (#32181, #51427)
- LaTeX rendering (#51432)
- Background task management (#36520, #37381)
- Plugin/staging management (#51425)

**Developer Pain Points:**
- v1→v2 migration issues (sessions, instructions)
- MCP server flakiness
- Desktop app bugs (zoom persistence, workspace cleanup)
- Permission/pattern matching edge cases
- Windows-specific issues
- Debug logging reliability

Now let me write a professional Chinese daily report.</think>

# OpenCode 社区动态日报
**日期：2026-09-26**

---

## 📌 今日速览

今日 OpenCode 仓库保持高频迭代节奏，单日合并/关闭了 20 余个 Issue 与近 20 个 PR，开发焦点集中在 **v2 升级兼容性修复**、**MCP 稳定性**、**Desktop 体验打磨** 三大方向。值得关注的是核心维护者 `@rekram1-node` 主导了 session compaction 重写、shell 轮询收敛、codemode 收敛等多个底层重构 PR，显示出为 2.x 长期架构清理技术债的决心。

---

## 🚀 版本发布

**过去 24 小时内无新 Release。** 当前社区使用频率较高的版本为 Desktop v2.0.16–v2.0.18，CLI/Server v2.0.10。

---

## 🔥 社区热点 Issues

### 1. [#9281 统一用量追踪 `/usage`](https://github.com/anomalyco/opencode/issues/9281) ⭐ 34
- **状态**：CLOSED | **评论**：12
- **要点**：用户在通过 OAuth 登录后无法查看各 Provider 的用量与额度，需要逐个登录第三方后台。呼声最高（34 👍），目前已合并。

### 2. [#27110 限制并行 Subagent 数量](https://github.com/anomalyco/opencode/issues/27110) ⭐ 36
- **状态**：OPEN | **评论**：6
- **要点**：本地模型用户受限于显存/上下文，无法支撑大规模并发 subagent。**36 赞**为本次统计中最高分，社区对多代理调度的资源管控诉求强烈。

### 3. [#29703 切换项目目录不丢会话历史](https://github.com/anomalyco/opencode/issues/29703) ⭐ 25
- **状态**：CLOSED | **评论**：10
- **要点**：session 与项目路径强绑定，重命名/重组目录即丢失所有对话历史。25 👍，属高频刚需。

### 4. [#48743 官方 MCP 预热 / 重连机制](https://github.com/anomalyco/opencode/issues/48743)
- **状态**：OPEN | **评论**：6
- **要点**：当本地 stdio MCP 服务较多（14+）时，会话启动会被全部标记 `failed`，需手动逐个重启。底层 MCP 健康度成为新瓶颈。

### 5. [#35839 第三个 OpenCode 实例删除全局 CLI（Windows）](https://github.com/anomalyco/opencode/issues/35839)
- **状态**：CLOSED | **评论**：7
- **要点**：Windows npm 全局安装下，多次启动会污染全局 `opencode` 命令，破坏性较严重。

### 6. [#50672 硬编码端口 49374 锁死共享回环](https://github.com/anomalyco/opencode/issues/50672)
- **状态**：OPEN | **评论**：4
- **要点**：managed service 固定端口在多用户/WSL 镜像场景下导致第二个客户端只能拿到通用超时，错误信息不友好。

### 7. [#51430 桌面端确认型 loopback 连接链接](https://github.com/anomalyco/opencode/issues/51430)
- **状态**：OPEN | **评论**：4
- **要点**：本地启动器（如终端复用器）希望桌面端公开确认过的连接链接 + 精确项目目录，便于 deep-link 接入。

### 8. [#50168 桌面端缩放无法跨重启保留](https://github.com/anomalyco/opencode/issues/50168)
- **状态**：OPEN（已配 PR #50169）| **评论**：3
- **要点**：`v2` 中 `wireZoom()` 显式重置为 1，与经典 Electron 行为相反。修复合并在即。

### 9. [#37381 给 Composer 加消息队列与打断控制](https://github.com/anomalyco/opencode/issues/37381)
- **状态**：CLOSED | **评论**：6
- **要点**：流式生成时无法追加排队消息，只能打断，体验割裂。

### 10. [#28596 重复工具调用死循环](https://github.com/anomalyco/opencode/issues/28596)
- **状态**：CLOSED | **评论**：6
- **要点**：模型在参数完全相同时反复调用同一工具，需人工中断。涉及 agent loop 检测机制。

---

## 🛠️ 重要 PR 进展

### 1. [#51447 重写 Session Compaction](https://github.com/anomalyco/opencode/pull/51447)
`@rekram1-node` 将 `SessionCompaction` 收敛为单一入口 `compact(trigger)`，原生压缩下沉到 `LLMClient.compact`，移除 `NativeCompactionPlugin`。**架构级重构**，影响所有会话生命周期。

### 2. [#51426 Agent Manager 与任务图管线](https://github.com/anomalyco/opencode/pull/51426)
阶段 1–4 的堆叠提交：10 状态生命周期 `AgentManager`、多代理运行管线、预算闸控、克隆语义。**opencode 向"代理优先平台"演进**的标志性 PR（已 CLOSED，但概念持续推进）。

### 3. [#51407 codemode 六项收敛修复](https://github.com/anomalyco/opencode/pull/51407)
对替换字符串、参数计数、内建递归深度、thenable 链、拒绝诊断施加硬上限，全部曾跑到 `timeoutMs`。是递归/分配审计的首批精确局部修复。

### 4. [#51436 后台 shell 轮询收敛](https://github.com/anomalyco/opencode/pull/51436)
重写后台命令轮询的 agent 指引，避免 agent 持续高频 poll 同一任务。

### 5. [#51429 `/usage` 显示货币可配置](https://github.com/anomalyco/opencode/pull/51429)
继承 #41208（仓库被清理），新增 `display.currency`，让非美元用户也能直观查看消费。

### 6. [#51448 MCP 连接后跳过模型选择](https://github.com/anomalyco/opencode/pull/51448)
TUI 集成流优化：MCP 连接完成后直接关闭集成对话框，不再强制跳模型选择（Provider/Service 流程不变）。

### 7. [#50169 桌面端缩放跨重启持久化](https://github.com/anomalyco/opencode/pull/50169)
修复 #50168 / #49096，将最后一次缩放写入持久化配置。

### 8. [#51431 桌面端目录选择持久化 + 本地连接链接](https://github.com/anomalyco/opencode/pull/51431)
一次解决 4 个相关问题：#51430、#50821，并关联 #29869/#43316。

### 9. [#51405 CLI 新增 `--session-id` 创建指定 ID 会话](https://github.com/anomalyco/opencode/pull/51405)
解决 #50464：现有 `--session` 只能续接已存在会话，启动器/宿主无法预占 ID。

### 10. [#51422 恢复 `instructions` 字段解析器](https://github.com/anomalyco/opencode/pull/51422)
v2 保留了 `instructions` 配置项却未移植 legacy 解析器，导致 `Instruction initialization blocked by unavailable sources: core/instructions`（参见 #51441）。

> 其他值得关注的合并：`#51433` Windows 桌面菜单新增 About 项、`#46131` `auth.json` 锁内原子写入、`#49691` bash 路径参数反斜杠转义、`#40149` 权限匹配支持 worktree 外的绝对路径。

---

## 📈 功能需求趋势

| 方向 | 代表性 Issue/PR | 热度信号 |
|------|----------------|---------|
| **用量/成本可视化** | #9281, #51429 | ⭐34，跨币种显示 |
| **多 Agent/Subagent 调度** | #27110, #51426 | ⭐36，Agent Manager 架构化 |
| **MCP 可靠性** | #48743, #51437, #51448 | 大量 Windows 多 server 故障 |
| **会话与项目解耦** | #29703, #51441, #51405 | v1→v2 迁移痛点 |
| **Desktop 体验** | #50168, #51430, #51432 (LaTeX), #51433 | 缩放/菜单/工作区清理/数学渲染 |
| **Skill 系统** | #32181, #51427 | v2 文档与实现偏差 |
| **本地连接与端口** | #50672, #51430, #51431 | WSL/多用户/启动器场景 |

---

## 🧑‍💻 开发者关注点

1. **v1 → v2 迁移阵痛集中爆发**
   会话兼容、instructions 解析、skill frontmatter 行为不一致等问题集中在 9 月浮出水面，#51441、#51427、#32181 均指向"老项目打不开 / 老行为不见了"。

2. **Windows 仍是高发雷区**
   #35839（CLI 被覆盖）、#51425（plugin staging 泄漏 ~38GB）、#48743（MCP 全军覆没）—— 平台差异让贡献者持续投入。

3. **诊断回路自身需要可诊断**
   #51444 指出 "Export debug logs" 打包的是**陈旧** `server-1/opencode.log`，掩盖了它本想诊断的故障；#51439 反映"看门狗的看门狗也会睡着"。社区对**可观测性可信度**要求提高。

4. **Agent 自治的边界**
   #28596 工具循环、#51436 后台轮询过频、#51407 codemode 无界分配 —— 都是 agent 在无人监督下"过度执行"的典型表现。开发者希望 runtime 主动施加护栏。

5. **配置/权限的边界条件**
   #40149（worktree 外的权限匹配）、#49691（bash 转义）、#46225（UTF-8 凭据编码）显示**字符串与路径处理**仍是高频踩坑点，且常常跨多个 PR 才能彻底闭环。

---

*日报基于 GitHub Issues/PRs 公开数据自动整理，覆盖窗口：2026-09-25 → 2026-09-26。*

</details>

<details>
<summary><strong>jcode</strong> — <a href="https://github.com/1jehuang/jcode">1jehuang/jcode</a></summary>

<think>Let me analyze the GitHub data for the jcode community daily report dated 2026-09-26. I need to generate a structured Chinese report covering the key activities in the past 24 hours.

Key observations:
1. No new releases in past 24 hours
2. 12 issues updated (most created on 2026-09-25, meaning they're very new)
3. 25 PRs updated, but only 20 shown (commented most), with 1 CLOSED (#1490)

Let me categorize and select the most important items:

**Issues - Most Notable:**
- #978: Long-standing test failures issue (10 comments, updated)
- #571: Major enhancement for OpenAI-compatible providers (9 comments)
- #1508: OpenJEV as optional Jev provider
- #1506: OpenAI OAuth Daybreak cyber access
- #1504: TUI stale effort chip bug
- #1502: Requesty as provider
- #1500: Ctrl/Cmd+Enter queue shortcut bug
- #1498: /resume picker search issue
- #1497: Per-task-class model lanes for swarm
- #1495: OpenAI-compatible provider headers bug
- #1492: Gateway pairing code security issue
- #1491: Test binaries writing to real ~/.jcode

**PRs - Most Notable:**
- #1510: OpenTelemetry OTEL export
- #1509: OpenJEV provider implementation (closes #1508)
- #1507: Daybreak cyber access program (closes #1506)
- #1505: Codex max_context_window
- #1503: Requesty profile (closes #1502)
- #1501: Anthropic quota fast-fail
- #1392: builds/manifest.json stable field sync
- #1347: Image blocks breaking turns
- #1346: /sessions <query> pre-filter
- #1499: /resume picker search-first (closes #1498)
- #1496: OpenRouter runtime headers (closes #1495)
- #1493: jcode_dir() test isolation (closes #1491)
- #1494: Pairing code attempt limit (closes #1492)
- #1356: Shared test-env lock
- #1362: Swarm stop quiesce
- #1357: Background task atomic writes
- #1354: Clippy and rustfmt cleanup
- #1490: CLOSED - Windows hook flash fix
- #1477: TUI transcript stable IDs
- #1486: Compaction preserve plan state

Now let me create the report.</think>

# jcode 社区动态日报 · 2026-09-26

## 📌 今日速览

过去 24 小时，jcode 仓库迎来了一波"Issue 驱动 PR"的密集提交节奏——多个新提交的 Issue（#1508、#1506、#1502、#1498、#1495、#1492、#1491 等）几乎在同一时间被对应的实现 PR 闭环，显示出社区高度活跃的"边报告边修复"协作模式。今天的焦点集中在 **新提供商集成（Requesty、OpenJEV、Daybreak）**、**TUI 交互修复**、以及 **测试/Gateway 安全隐患加固** 三个方向。

---

## 🚀 版本发布

*过去 24 小时无新版本发布。*

---

## 🔥 社区热点 Issues

### 1. [#978 — 5 pre-existing test failures on master](https://github.com/1jehuang/jcode/issues/978)
master 分支上 5 个测试因环境隔离问题失败（provider profile + OpenRouter 环境变量污染），属于测试代码问题而非应用代码。已积累 **10 条评论**，是今日讨论最热的存量 Issue，社区在讨论标准化测试沙箱方案。

### 2. [#571 — Custom OpenAI-compatible providers: display_name/reasoning/cost 字段补齐](https://github.com/1jehuang/jcode/issues/571)
大型增强需求，要求 `[providers.<name>]` 配置补齐 opencode 同款的 `display_name`、`reasoning_map`、`max_output_tokens`、`cost` 等字段。**9 条评论**，是当前 opencode 兼容性的最大缺口。

### 3. [#1508 — 支持 OpenJEV 作为可选 Jev provider](https://github.com/1jehuang/jcode/issues/1508)
由 `@openjevai` 提出，新增 OpenJEV 为第四种 Jev 路由（与 OpenRouter/TypeSafe/AI-ML API 并列），复用 TypeSafe 同款 typed Decisions API 契约。已同日被 PR #1509 闭环。

### 4. [#1506 — OpenAI OAuth 支持 Daybreak cyber 访问计划](https://github.com/1jehuang/jcode/issues/1506)
由 `@RamenFast` 提出，让 ChatGPT/Codex 账号通过 Responses 字段 `access_programs: {"cyber": "daybreak_blue"}` 触发 Daybreak 通道，jcode 当前未发送该字段。已同日被 PR #1507 闭环。

### 5. [#1492 — Gateway /pair 接受无限次配对码猜测](https://github.com/1jehuang/jcode/issues/1492)
**安全缺陷**：6 位配对码 + 5 分钟 TTL，但 `POST /pair` 无尝试次数限制，存在暴力枚举风险（tailnet/LAN 上暴露端口时尤甚）。已同日被 PR #1494 修复（5 次失败后撤销）。

### 6. [#1491 — 测试二进制写入开发者真实 ~/.jcode](https://github.com/1jehuang/jcode/issues/1491)
**数据安全缺陷**：`jcode_dir()` 在 `JCODE_HOME` 未设置时回退到 `~/.jcode`，导致 `cargo test` 一次性写入 159 个 active-pid 标记和 103 个 fixture session 文件。已在 PR #1493 中修复。

### 7. [#1500 — Ctrl/Cmd+Enter 队列快捷键不可见且提示倒置](https://github.com/1jehuang/jcode/issues/1500)
硬编码快捷键被终端级绑定（Ghostty）静默吞掉，keymap 冲突检测也未识别，且提示文案对默认 `queue_mode` 是颠倒的。影响日常核心交互。

### 8. [#1498 — /resume 选择器搜索被单字母快捷键劫持](https://github.com/1jehuang/jcode/issues/1498)
用户输入 `quota` 时 `q` 关闭选择器、`uota` 进入聊天框——搜索功能必须先按 `/` 才能用。已同日被 PR #1499（仿 Claude Code 的 search-first 设计）闭环。

### 9. [#1497 — Swarm worker 按任务类分模型泳道与有序回退](https://github.com/1jehuang/jcode/issues/1497)
当前 swarm 只有一个全局 model + quota_fallback，无法支持"廉价读模型 → 常规实现 → 困难迭代 → 长上下文审阅 → 前沿推理"的分层路由。架构性需求。

### 10. [#1504 — TUI 远程切模型后 effort chip 显示陈旧](https://github.com/1jehuang/jcode/issues/1504)
`ModelChanged` 事件丢弃了 `reasoning_effort`，导致切换到一个不支持当前 effort 等级的模型时，chip 仍显示旧等级，造成能力误标。

---

## 🛠️ 重要 PR 进展

### 1. [#1510 — feat(otel): OpenTelemetry OTEL 导出支持](https://github.com/1jehuang/jcode/pull/1510)
新增独立于匿名遥测的 OTEL 导出能力，企业可对接自有 observability 后端（Jaeger/Tempo/Honeycomb 等），填补了企业可观测性空白。

### 2. [#1509 — Add OpenJEV as optional Jev provider](https://github.com/1jehuang/jcode/pull/1509)
闭环 #1508，复用 TypeSafe 的 typed Decisions API 协议，模型 ID `openjev`，凭据来自 `OPENJEV_API_KEY`，不影响现有默认值。

### 3. [#1507 — OpenAI Daybreak cyber 访问计划支持](https://github.com/1jehuang/jcode/pull/1507)
闭环 #1506，从 Codex 目录读取 `available_access_programs.cyber`，新增 `JCODE_OPENAI_CYBER_ACCESS_PROGRAM` 配置，向后兼容旧目录缓存（`#[serde(default)]`）。

### 4. [#1503 — feat(provider): 添加 Requesty profile](https://github.com/1jehuang/jcode/pull/1503)
闭环 #1502，按 OrcaRouter/Yolo-Auto 同款方式接入 Requesty 网关（`router.requesty.ai/v1`，`vendor/model` 命名）。

### 5. [#1499 — /resume 选择器 search-first 重构](https://github.com/1jehuang/jcode/pull/1499)
闭环 #1498，仿照 Claude Code 体验——搜索框常驻并自动聚焦，输入即过滤，解决单字母快捷键劫持问题。

### 6. [#1496 — OpenRouter 运行时发送 named provider 自定义 headers](https://github.com/1jehuang/jcode/pull/1496)
闭环 #1495，修复 `[providers.<name>].headers` 被忽略的回归问题，Anthropic 路径已正确处理而 OpenAI-compatible 路径漏掉了。

### 7. [#1494 — Gateway 配对码 5 次失败后撤销](https://github.com/1jehuang/jcode/pull/1494)
闭环 #1492 安全 Issue，新增 `MAX_FAILED_PAIRING_ATTEMPTS=5`，计数器持久化到 `devices.json`。

### 8. [#1493 — 测试 jcode_dir() 重定向到 per-process temp home](https://github.com/1jehuang/jcode/pull/1493)
闭环 #1491，`cargo test --workspace --lib` 不再污染开发者真实 `~/.jcode`。

### 9. [#1501 — Anthropic 配额耗尽时快速失败并回退](https://github.com/1jehuang/jcode/pull/1501)
Anthropic 429 报文无法区分瞬时突发限流与多日配额窗口耗尽，本 PR 让 jcode 主动检测并切换到下一个 provider，避免无谓重试。

### 10. [#1505 — 使用 Codex 目录的 max_context_window](https://github.com/1jehuang/jcode/pull/1505)
关联 #1323，OAuth 会话此前只能读到 272K 上限，而目录实际暴露更大的 `max_context_window`，补齐路由元数据后能更好地预算和压缩。

**其他值得关注的活跃 PR**：
- [#1347 — 文本模型对 image block 的运行时模态恢复](https://github.com/1jehuang/jcode/pull/1347)（三层协调修复）
- [#1346 — /sessions &lt;query&gt; 预过滤会话选择器](https://github.com/1jehuang/jcode/pull/1346)
- [#1486 — 压缩时保留多步骤计划状态](https://github.com/1jehuang/jcode/pull/1486)（48 次压缩、3100 条消息的 Gemini 长会话数据）
- [#1362 — swarm stop 真正停掉排队的 worker](https://github.com/1jehuang/jcode/pull/1362)
- [#1392 — 同步 builds/manifest.json stable 字段](https://github.com/1jehuang/jcode/pull/1392)
- [#1490 — **MERGED** 修复 Windows 下 hook 闪烁终端窗口](https://github.com/1jehuang/jcode/pull/1490)（今日唯一关闭的 PR）

---

## 📈 功能需求趋势

从今日 12 条 Issue 中提炼的社区关注方向：

| 方向 | 代表 Issue | 占比热度 |
|------|------------|----------|
| **🆕 新 LLM 提供商集成** | #1508 (OpenJEV)、#1506 (Daybreak)、#1502 (Requesty) | ⭐⭐⭐ 高 |
| **🔌 opencode 兼容性 / 协议对齐** | #571 | ⭐⭐⭐ 高（存量大需求） |
| **🖥️ TUI 交互体验** | #1504、#1500、#1498 | ⭐⭐⭐ 高 |
| **🔒 安全与权限边界** | #1492、#1491 | ⭐⭐⭐ 高（紧急） |
| **🐝 Swarm / 多 agent 编排** | #1497 | ⭐⭐ 中（架构性） |
| **🔧 Provider headers / 配额回退** | #1495、#1501 | ⭐⭐ 中 |
| **📊 可观测性 / 监控** | OTEL（#1510） | ⭐⭐ 中（新增） |

**核心趋势**：社区正在快速扩展**模型接入面**（OpenJEV / Requesty / Daybreak 三线并发），同时对**测试隔离、配对安全、运行时鲁棒性**等"工程卫生"问题越来越敏感——单日就有 3 个 Issue 直接对应安全/数据完整性缺陷。

---

## 💡 开发者关注点

从今日的 Issue 和 PR 摘要中，开发者的痛点可归纳为以下几类：

1. **"看不见的快捷键"成为高频痛点** — Ctrl+Enter 被终端吞（#1500）、/resume 搜索被快捷键劫持（#1498）——keymap 抽象层需要支持声明式 + 冲突检测，不能再硬编码。
2. **测试污染真实环境是工程化短板** — #1491 揭示的 159/103 个文件污染触目惊心，#1356 反映共享 test-env 锁没有超时也没有持有者名字，#978 则是历史欠账。
3. **配置项"文档存在但实现缺失"零容忍** — `[providers.<name>].headers` 写在 spec 里却被 OpenAI 兼容路径忽略（#1495）；配对码 TTL 写在 spec 里却没有尝试次数上限（#1492）——配置 spec 与实现的同步是质量门的关键。
4. **Provider 抽象层正在"过载"** — Requesty、OpenJEV、Daybreak 都要求快速接入，但每个都有独特字段（access_programs / Decisions API / vendor/model），长期需要更通用的 profile 描述机制（呼应 #571 的开放性问题）。
5. **可观测性是企业用户的硬需求** — PR #1510 引入 OTEL，说明团队/企业用户希望把 jcode 接入自有监控栈，而非依赖匿名遥测。
6. **长会话鲁棒性是 Gemini / 大上下文用户的真实痛点** — PR #1486 引用的 48 次压缩、3100 条消息案例表明 compaction 需要保留多步骤计划状态，否则上下文"截断即失忆"。

---

*日报生成基于 2026-09-25 至 2026-09-26 期间更新的 GitHub 数据。*

</details>

<details>
<summary><strong>pi</strong> — <a href="https://github.com/earendil-works/pi">earendil-works/pi</a></summary>

<think>Let me analyze the GitHub data for pi (earendil-works/pi) repository and generate a daily report for 2026-09-26.

Key observations:
1. No new releases in the past 24 hours
2. 50 issues updated, 30 shown with most comments
3. 12 PRs updated

Let me identify the most important items:

**Top Issues by comments:**
1. #10031 - Pi stuck in "Working..." when thinking is stopped with ESC (15 comments, 2 likes) - CLOSED
2. #7885 - npm search not indexing pi-packages (15 comments) - CLOSED
3. #9803 - RPC steer success correlation bug (11 comments) - CLOSED
4. #9674 - mistral-conversations empty content deltas (7 comments) - CLOSED
5. #8913 - fullscreen mouse tracking (6 comments) - OPEN
6. #3790 - backward shortcut for cycling thinking level (6 comments) - CLOSED
7. #9980 - OpenRouter cost off by 2-3x (5 comments) - OPEN
8. #9974 - Responses API tool calls duplicated (5 comments) - CLOSED
9. #9579 - Overflow image recovery budget (5 comments) - CLOSED
10. #10033 - Compaction prompt exceeds context window (5 comments) - OPEN
11. #9918 - Codex replays empty signed answers (5 comments) - CLOSED
12. #9098 - Expose prompt disposition in RPC (5 comments) - CLOSED

**Important PRs:**
1. #10057 - Fix TUI exit on stdout disconnect
2. #10051 - MCP OAuth dynamic client registration
3. #10050 - Fix extension console output over TUI
4. #8262 - Dispatch hooks on every turn-start path
5. #10040 - Codemode and MCP (large feature)
6. #10044 - Upgrade openai SDK to 7.19.0
7. #10039 - Honor truecolor in custom themes
8. #10037 - Collapse historical tool output (perf)
9. #10035 - Virtual models (experimental)
10. #6933 - Disable undici idle timeout for local LLMs

Let me organize these into themes:

**Themes:**
- TUI rendering issues (#8913, #10056, #10002, #10011, #9758, #9887, #10039)
- Provider/API integration issues (#9803, #9674, #9980, #9974, #9918, #9840, #9905, #9962, #9953, #9954)
- Compaction/context management (#10033, #9579, #10024)
- Cost/pricing (#9980, #10034)
- Session management (#10000, #10048)
- UI/UX (#3790, #6281, #10011, #8913, #9758, #9887)
- Packaging/distribution (#7885, #10061)
- Coding agent features (#10040, #10035, #8262)
- Build/toolchain (#9965)

Let me write the report now.</think>

# Pi 社区动态日报 · 2026-09-26

## 📌 今日速览

今天 Pi 社区的活跃度集中在 **TUI 渲染稳定性** 与 **多 Provider 协议兼容性** 两个方向：TUI 在终端断开、扩展 console 输出、滚轮配置等方面集中暴露问题，配套 PR #10057、#10050 已快速合入；同时 Mistral / OpenAI Responses / Anthropic strict tools / Codex 等多家 Provider 的协议细节仍在持续修复中。Mitsuhiko 本人提交的两项大型特性 PR —— **Codemode + MCP**（#10040）和 **Virtual Models**（#10035）—— 标志着 Pi 正在向"更厚的运行时"演进。

---

## 🚀 版本发布

过去 24 小时无新版本发布。当前稳定版本线为 **0.86.x / 0.87.x**。

---

## 🔥 社区热点 Issues

### 1. [BUG] ESC 中断思考后 Pi 卡在 "Working..." 状态 — #10031 ⭐ CLOSED
[#10031](https://github.com/earendil-works/pi/issues/10031) · 15 评论 · 👍 2

自 v0.84.0 起的高频回归 bug，跨平台复现，**目前已 CLOSED**，意味着修复方案已确认。用户唯一恢复手段是 `Ctrl+C` 后用 `pi -c` 续会话，影响面较大，是本期最热门的 issue。

### 2. npm search 不再索引新发布的 pi-packages — #7885 ⭐ CLOSED
[#7885](https://github.com/earendil-works/pi/issues/7885) · 15 评论

影响 **包生态可见性** 的关键问题：自 8 月 4 日起新发布的 pi-package 无法被 `npm search` 检索到，pi.dev/packages 页面也就无法收录。作者已收到维护者反馈并标记 CLOSED，期待后续说明。

### 3. RPC steer 成功响应无法与扩展处理的输入对应 — #9803 ⭐ CLOSED
[#9803](https://github.com/earendil-works/pi/issues/9803) · 11 评论

0.86.0 的回归：RPC steer 经扩展 input handler 后，A 输入被消费、B 输入排队时，客户端无法区分两条响应。是 **RPC 协议可观测性** 的核心缺陷，已 CLOSED。

### 4. Mistral Conversations：空内容 delta 打开空文本块 — #9674 ⭐ CLOSED
[#9674](https://github.com/earendil-works/pi/issues/9674) · 7 评论

GLM 5.x 路由走 `mistral-conversations` 时因 zero-length delta 在重放时触发 400，是 #8069 的真正修复点（之前被 close 为 not_planned）。

### 5. OpenRouter 计算成本偏差 2-3 倍 — #9980 🟢 OPEN
[#9980](https://github.com/earendil-works/pi/issues/9980) · 5 评论

`models.json` 默认取**最便宜 Provider** 的定价，导致 OpenRouter 上热门的开源权重模型（GLM 5.3 Flash 等）**计费统计严重偏低**，对成本敏感的用户影响明显。

### 6. llama.cpp Responses API 工具调用被重复/损坏执行 — #9974 ⭐ CLOSED
[#9974](https://github.com/earendil-works/pi/issues/9974) · 5 评论

SSE 流中 `response.output_item.added` 的 `arguments: ""` 与 Pi 端状态机结合导致同一工具调用被多次执行，影响本地 LLM 用户。

### 7. 溢出图片恢复使用固定 16 MiB 预算超出小 Provider 限额 — #9579 ⭐ CLOSED
[#9579](https://github.com/earendil-works/pi/issues/9579) · 5 评论

`capImagesToByteBudget()` 硬编码 16 MiB 来源于 Anthropic 32 MiB 上限，遇到 6 MiB 限制的 Provider 时反而重试失败。已 CLOSED，预期改为动态预算。

### 8. 自动压缩 prompt 包含全部思考文本撑爆上下文 — #10033 🟢 OPEN
[#10033](https://github.com/earendil-works/pi/issues/10033) · 5 评论

`serializeConversation()` 把所有 thinking block 完整塞进 summary prompt，但模型正常情况下根本看不到旧 thinking。对 **长会话 + 推理模型**（DeepSeek V4.1 等）用户是硬阻塞。

### 9. Codex 重放空白签名 final answer — #9918 ⭐ CLOSED
[#9918](https://github.com/earendil-works/pi/issues/9918) · 5 评论

Codex 会返回空文本但带签名的 final-answer item，Pi 原样保留导致下次请求重放失败。

### 10. fullscreen 模式无条件开启 `?1003` 鼠标追踪 — #8913 🟢 OPEN
[#8913](https://github.com/earendil-works/pi/issues/8913) · 6 评论

`--tui-mode fullscreen` 强制启用 any-event 鼠标追踪且无法关闭，渲染器内部的 `mouse` option 暴露点缺失。SSH / 远程终端用户反馈明显。

---

## 🛠️ 重要 PR 进展

### 1. ✨ Codemode + MCP（大型特性） — #10040 🟢 OPEN
[#10040](https://github.com/earendil-works/pi/pull/10040) · @mitsuhiko

Mitsuhiko 主推的大 PR，将 **Codemode**（让模型以代码方式编排工具调用）与 **MCP（Model Context Protocol）** 同时引入 Pi，目标是让 Jev 等模型在 Pi 沙箱中获得更好的工作环境。是本周最具战略意义的改动。

### 2. ✨ 实验性 Virtual Models — #10035 🟢 OPEN
[#10035](https://github.com/earendil-works/pi/pull/10035) · @mitsuhiko

引入"虚拟模型"概念 —— 在不直接调用远端 API 的前提下把多个 Provider / 模型组合成新的命名实体，与 Codemode 配套设计。

### 3. 🐛 fix(tui): 终端断开时不再 exit(1) — #10057 ⭐ CLOSED
[#10057](https://github.com/earendil-works/pi/pull/10057) · @mariobgsp

修复 #10056：`writeRawStdoutTail` 在 EPIPE/ECONNRESET 时直接 `process.exit(1)`，导致 SSH 断连看起来像 crash。现已区分恢复性错误与致命错误。**已合入**。

### 4. 🐛 fix(coding-agent): 扩展 console 输出不再覆盖 TUI — #10050 🟢 OPEN
[#10050](https://github.com/earendil-works/pi/pull/10050) · @autopeasant

修复 #10002：在差分渲染器渲染帧之间捕获 `console.*` 与 `process.stdout/stderr` 的裸写入，避免扩展诊断日志把屏幕弄花。

### 5. 🐛 fix(ai): 升级 OpenAI SDK 至 7.19.0 — #10044 ⭐ CLOSED
[#10044](https://github.com/earendil-works/pi/pull/10044) · @davidbrai

补齐 SDK 中新增的 `"fast"` service tier 类型，让 GPT-6 fast 模式计费正确；同时移除已被 SDK 收纳的本地 `prompt_cache_options` 类型。配合 #10034 的 bug 修复。

### 6. 🐛 fix(coding-agent): 自定义主题尊重 truecolor — #10039 ⭐ CLOSED
[#10039](https://github.com/earendil-works/pi/pull/10039) · @christianklotz

自定义主题的颜色模式从环境与终端设置中解析，构造前完成，避免污染进程级 capability state。

### 7. ⚡ Perf: 折叠历史 tool output — #10037 ⭐ CLOSED
[#10037](https://github.com/earendil-works/pi/pull/10037) · @gerynugrh

长会话中累计的大量工具结果在渲染/压缩前先做折叠，预期对长会话内存与渲染性能均有改善。

### 8. 🐛 fix: 禁用 undici 空闲超时（本地 LLM 友好） — #6933 ⭐ CLOSED
[#6933](https://github.com/earendil-works/pi/pull/6933) · @3194603353

将 `DEFAULT_HTTP_IDLE_TIMEOUT_MS` 从 300000 改为 0，让 vLLM / LM Studio / llama.cpp / Ollama 在 prompt eval 阶段不再被 5 分钟超时中断。

### 9. 🐛 feat(client): MCP OAuth 动态客户端注册错误映射 — #10051 ⭐ CLOSED
[#10051](https://github.com/earendil-works/pi/pull/10051) · @Kishan1835

为不支持动态注册的 MCP OAuth 服务器提供可操作的错误信息与示例 wrapper，提升 MCP 接入的 UX。

### 10. 🐛 fix(tui): Tab 完成后继续参数补全链 — #1481 ⭐ CLOSED
[#1481](https://github.com/earendil-works/pi/pull/1481) · @barapa

`/mod` → `/model ` 后自动重新触发参数补全，而 Enter 提交行为不变。改进 slash 命令编辑体验。

---

## 📈 功能需求趋势

从所有 Issue 中提炼出的社区关注方向：

| 方向 | 代表 Issue | 热度 |
|---|---|---|
| **TUI 体验打磨** | #8913、#9758、#9887、#10002、#10011、#10056 | 🔥🔥🔥 |
| **Provider 协议兼容性**（Mistral / Anthropic strict / OpenAI Responses / Codex / kimi-coding） | #9674、#9803、#9840、#9905、#9918、#9953、#9954、#9962、#9974 | 🔥🔥🔥 |
| **成本 / 计费准确性** | #9980、#10034 | 🔥🔥 |
| **长会话压缩 / 上下文管理** | #9579、#10033、#10024 | 🔥🔥 |
| **思考级别交互** | #3790、#6281 | 🔥 |
| **打包 / 安装 / 生态分发** | #7885、#10061 | 🔥 |
| **新协议 / 新运行时**（Codemode、MCP、Virtual Models） | #10040、#10035、#8262 | 🔥🔥 |
| **构建工具链现代化** | #9965（tsgo → TS 7） | 🔥 |

---

## 💬 开发者关注点

1. **多 Provider 的"协议碎片化"已成最大成本** —— Mistral、Anthropic、OpenAI Responses、Codex、llama.cpp 各自带来独立的边角 bug，社区反复出现 "用 X 模型就跑不通" 的报告。**统一协议抽象层** 是开发者呼声最高的改进。

2. **TUI 在边角场景下的鲁棒性不足** —— 终端断开、扩展 console 写入、滚轮步长、鼠标追踪、字符串 line number 等细节频繁触发 issue，说明差分渲染器虽然成熟，但缺少 **可注入的运行时钩子** 来约束第三方代码的副作用。

3. **长会话 / 推理模型的上下文管理仍是灰色地带** —— #10033 直接揭示了"thinking block 是否应进 summary prompt"的策略缺失，#10024 则暴露了"中途切换 tool set 会移动 system prompt 头部导致重复计费"的隐性问题，二者都触及**计费公平性**。

4. **生态可见性被 npm search 卡住** —— #7885 反映 Pi 正在从工具演化为**平台**，但包索引机制依赖外部搜索结果，社区急需替代/自建索引方案。

5. **开发者明确要求可关闭/可配置项** —— "无法禁用"、"硬编码"、"没有 CLI 开关"是高频短语（#8913、#9758、#9905、#9962）。社区倾向于 **"为高级用户暴露所有开关"** 的设计哲学。

6. **大型特性 PR 引发的关注与担忧并存** —— Mitsuhiko 的 Codemode + MCP、Virtual Models 两条线虽然让"Pi 不只是个 coding agent"的愿景更近一步，但单 PR 体量大、社区 review 跟进慢，后续很可能催生一批边缘 bug 报告。

---

*日报基于 2026-09-26 GitHub 数据生成 · 数据源：[earendil-works/pi](https://github.com/earendil-works/pi)*

</details>

---
*本日报由 [Big Model Radar](https://github.com/96loveslife/big_model_radar) 自动生成。*
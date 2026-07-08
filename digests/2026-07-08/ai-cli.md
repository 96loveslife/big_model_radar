# AI CLI 工具社区动态日报 2026-07-08

> 生成时间: 2026-07-08 03:21 UTC | 覆盖工具: 7 个

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

<think>The user wants me to generate a horizontal comparison analysis report based on the daily reports of 7 AI CLI tools (Claude Code, OpenAI Codex, Gemini CLI, GitHub Copilot CLI, Kimi Code CLI, OpenCode, Qwen Code). I need to create a comprehensive report with 6 sections:

1. 生态全景 - Overall ecosystem overview
2. 各工具活跃度对比 - Activity comparison table
3. 共同关注的功能方向 - Common concerns across tools
4. 差异化定位分析 - Differentiation analysis
5. 社区热度与成熟度 - Community activity and maturity
6. 值得关注的趋势信号 - Trend signals

Let me extract key data from each report:

**Claude Code (anthropics/claude-code)**:
- Releases: v2.1.204 (regression issues), v2.1.203
- Issues: 50 total (top 10 highlighted), top issue #41506 (54 comments, Max Plan usage spike 3-5x)
- PRs: 3 (all documentation)
- Key focus: Cost/billing transparency, Auto Mode classifier, TUI regressions, cross-platform

**OpenAI Codex (openai/codex)**:
- Releases: rust-v0.143.0 (Remote Plugins default), alpha versions
- Issues: top issue #30364 (156 comments, GPT-5.5 reasoning token clustering), 50 issues
- PRs: 10+ active, focus on paginated history, plugin commands, web search metadata
- Key focus: GPT-5.5 behavior, Windows desktop bugs, MCP integration, plugin ecosystem

**Gemini CLI (google-gemini/gemini-cli)**:
- Releases: None (nightly build failed #28308)
- Issues: top issue #21409 (generalist agent hangs), focus on agent reliability
- PRs: 18 total, focus on security (SSRF, OAuth), memory system, evaluation
- Key focus: Agent reliability, memory system, security (CVE-2026-48931), evaluation infrastructure

**GitHub Copilot CLI (github/copilot-cli)**:
- Releases: v1.0.69 (sandbox policy labels, plugin dashboard)
- Issues: 28 total, top issue #53 (75 likes, 37 comments, restore CLI commands)
- PRs: 0 in past 24 hours
- Key focus: Plugin/MCP lifecycle, sandbox stability, TUI issues

**Kimi Code CLI (MoonshotAI/kimi-cli)**:
- Releases: None
- Issues: Only 1 updated (#1604 Figma MCP)
- PRs: 0
- Activity level: Very low

**OpenCode (anomalyco/opencode)**:
- Releases: v1.17.15 (Z.ai context overflow, config dir handling)
- Issues: 30 shown, mostly closed (cleanup batch), only #35841 open today
- PRs: 20 active, focus on browser tool, metadata preservation, i18n
- Key focus: Multi-provider support, plugin stability, desktop/CLI consistency, browser tool (new)

**Qwen Code (QwenLM/qwen-code)**:
- Releases: v0.19.7 stable, v0.19.6-preview, v0.19.7-nightly
- Issues: 34 total, top issue #6378 (RFC multi-workspace daemon)
- PRs: 10+ active, focus on hooks, channel integration (QQ Bot), session management
- Key focus: Multi-workspace, Channel integration, Hooks system, token optimization

Now let me structure the comparison report. I should:
- Be data-driven
- Compare across tools
- Identify common patterns vs differentiators
- Provide actionable insights for developers

Let me draft this carefully.

Common themes I'm seeing:
1. **Plugin/MCP Ecosystem** - Almost every tool is dealing with plugin/MCP lifecycle issues (Copilot, OpenCode, Codex, Claude Code)
2. **Token/Cost Transparency** - Claude Code (#41506), Qwen Code (#6264), Codex (GPT-5.5 behavior)
3. **Windows/cross-platform issues** - Almost universal
4. **Session/State management** - All tools have session resume/continuation issues
5. **Sub-agent/Agent reliability** - Gemini (generalist hangs), Codex (subagent), Claude Code (auto mode classifier)
6. **Hook system evolution** - Claude Code, Qwen Code, Codex
7. **Security** - Gemini (SSRF, CVE), Claude Code (ZDR)
8. **Multi-provider/Model agnostic** - OpenCode leads here

Differentiation:
- Claude Code: Heavy focus on cost/usage, Anthropic-specific
- Codex: OpenAI model behavior, plugin marketplace
- Gemini CLI: Agent infrastructure, evaluation, memory
- Copilot CLI: GitHub integration, enterprise
- Kimi: Very low activity, MCP exploration
- OpenCode: Multi-provider, model agnostic, browser tool
- Qwen Code: Daemon/ACP architecture, Chinese channels, channel ecosystem

Activity ranking (based on data):
1. Claude Code - 50 issues, but only 3 PRs (docs only)
2. Codex - 50 issues, 10+ PRs (high)
3. Gemini CLI - 30 issues, 18 PRs (very high)
4. OpenCode - 30 issues, 20 PRs (very high), many closes
5. Qwen Code - 34 issues, 10+ PRs (high)
6. Copilot CLI - 28 issues, 0 PRs (low)
7. Kimi Code - 1 issue, 0 PRs (lowest)

Maturity indicators:
- High iteration: Gemini, OpenCode, Codex (many PRs)
- Stabilization: Copilot, Claude Code (more bug reports, fewer PRs)
- Light activity: Kimi

Trend signals:
1. MCP/Plugin standardization - common pain point
2. Agent orchestration becoming core - subagents, hooks, delegation
3. Context engineering - AGENTS.md, dynamic loading, AST-aware tools
4. Multi-provider strategy - users want flexibility
5. Browser/UI automation - browser-use tool emergence
6. Channel/integration expansion - Qwen leading with QQ/WeCom
7. Cost transparency demand - critical for paid users
8. Session persistence/replay - universal need

Let me write the report now.</think>

# 2026-07-08 AI CLI 工具横向对比分析报告

> 数据来源：Claude Code、OpenAI Codex、Gemini CLI、GitHub Copilot CLI、Kimi Code CLI、OpenCode、Qwen Code 等 7 个主流项目的当日社区动态

---

## 一、生态全景

当前 AI CLI 赛道呈现**"两超多强 + 垂直分化"**格局：**Claude Code** 与 **OpenAI Codex** 凭借模型深度绑定保持舆论高点，前者聚焦计费透明度与 Auto Mode 架构，后者主攻 GPT-5.5 模型行为争议与插件市场化；**Gemini CLI** 与 **OpenCode** 进入以 Agent 可靠性与多 Provider 编排为代表的"工程深水区"，PR 密度显著高于其他项目；**Qwen Code** 凭借 ACP/Daemon 架构与本土渠道（QQ/企微/钉钉）形成差异化护城河；**Copilot CLI** 当日陷入"高互动、低迭代"的产品节奏低谷；**Kimi Code CLI** 几乎处于静默状态，社区活跃度为全榜最低。整体而言，MCP/插件生态成熟度、Agent 子任务可靠性、Token 与成本治理已成为衡量各工具竞争力的三大核心标尺。

---

## 二、各工具活跃度对比

| 工具 | Issues 更新 | 新 Release | PR 更新 | 关键活跃信号 | 当日情绪 |
|------|------------|-----------|---------|------------|---------|
| **Claude Code** | 50 | ✅ v2.1.204（含回归） | 3（全部文档） | Max 计费争议 #41506（54 评论） | 🔴 偏负面 |
| **OpenAI Codex** | 50 | ✅ v0.143.0（Remote Plugins） | 10+ | GPT-5.5 token 聚集 #30364（156 评论） | 🟡 慎观望 |
| **Gemini CLI** | 50 | ❌（nightly 构建失败 #28308） | 18 🔥 | Subagent 可靠性多 issue | 🟢 迭代积极 |
| **GitHub Copilot CLI** | 28 | ✅ v1.0.69（沙箱标签） | **0** | #53（75 👍 / 37 评论）长期积压 | 🟠 节奏滞后 |
| **Kimi Code CLI** | 1 | ❌ | 0 | 仅 Figma MCP #1604 被激活 | ⚫ 静默 |
| **OpenCode** | 30（多数被批量关闭） | ✅ v1.17.15 | 20 🔥 | 新增 browser-use 工具 #35844 | 🟢 高密度 |
| **Qwen Code** | 34 | ✅ v0.19.7 + preview + nightly | 10+ | 多 workspace RFC #6378（19 评论） | 🟢 架构升级中 |

**核心解读**：
- **PR 密度**排名：OpenCode（20）> Gemini CLI（18）> Codex / Qwen Code（10+）> Claude Code（3）> Copilot CLI / Kimi（0）
- **Issue 高峰**：Codex #30364（156 评论）+ Claude #41506（54 评论）+ Copilot #53（37 评论）构成跨工具"用户怒火三角"，分别指向**模型行为、成本不透明、命令兼容性**三大痛点。
- **批量 Issue 关闭**仅 OpenCode 出现，提示该项目正在做季度级清理。
- **Release 出新率**：7 家中 5 家当日有版本发布或更新，发布节奏普遍较高。

---

## 三、共同关注的功能方向

### 1. 🧩 MCP / 插件生命周期管理（7/7 关注）
- **Claude Code**：plugin `mcpServers` 配置文档化（#75252）、Zoho Books multipart Bug（#75502）
- **Codex**：Remote Plugins 市场化、npm marketplace + agent roles（#28845 / #31482）
- **Gemini CLI**：MCP OAuth SSRF 防护（#28112）、keep-alive 漏洞 CVE-2026-48931（#28103）
- **Copilot CLI**：Docker stdio MCP 进程泄漏（#4049）、项目级扩展 canvas 路由失效（#4056）
- **OpenCode**：Electron sidecar 加载 npm 插件失败（#26085）、`@latest` 缓存陈旧（#35777）
- **Kimi Code**：Figma MCP 支持请求（#1604）——MCP 生态正从概念走向具体工具集成
- **Qwen Code**：插件 Skill 在仓库级/企业级路径下注册不一致

### 2. 🔄 Session 状态持久化与会话恢复（6/7）
- **Claude Code**：`--resume` 在 v2.1.204 跨平台失效（#75496/#75497/#75513）
- **Codex**：`history_mode=paginated` TurnItems 持久化（#30188）、review mode 重放（#31473）
- **Copilot CLI**：`/resume` 对非 Git 会话完全失效（#4054）、重启后顺序错乱
- **OpenCode**：session 重启恢复（#35820）、Review 面板标签内联化（#35829）
- **Qwen Code**：`MessageDisplay` Hook 实现流式观察（#6488/#6489）、replay snapshot 内存裁剪（#6482）
- **Gemini CLI**：会话"幽灵"出现/消失、会话导入失败子错误遥测（#31518）
- Kimi Code 未观察到该方向进展

### 3. 💰 Token 消耗与计费透明度（4/7）
- **Claude Code**：Max Plan 自 3 月起消耗 3-5×（#41506 / 54 评论）
- **OpenAI Codex**：GPT-5.5 推理 token 在 516/1034/1552 分桶聚集（#30364 / 156 评论）
- **Qwen Code**：`/review` 单次调用大量 token（#6264）、hard limit 计算出错（#6384）
- **Copilot CLI**（间接）：免费版"固执"响应（#4055）背后也是模型策略问题

### 4. 🤖 Sub-agent / Agent 编排可靠性（4/7）
- **Gemini CLI**：generalist 委派后无限挂起（#21409 / 8 👍）、`codebase_investigator` 状态错报（#22323）
- **Claude Code**：Auto Mode safety classifier 反复不可用（#63819 / #38618）
- **Codex**：`spawn_agent` agent roles（#28845）
- **Qwen Code**：sub-agent 并发上限与队列化（#5176、已 CLOSED）、worktree 隔离（#6456）
- **OpenCode**：browser 工具接入（#35844）将 Agent 能力边界推向"全栈"

### 5. 🪟 跨平台稳定性（Windows 尤为突出）（5/7）
- Claude Code Cowork Win11 unsupported（#47327）
- Codex apply_patch / sandbox / app-server Win 端连环 Bug（#31511/#15016/#31499/#31236）
- Copilot CLI Win-1252 编码问题（#3604）
- OpenCode Ctrl+V Windows 失效（#26283）
- Qwen Code `cat` 在 cmd.exe 缺失（#6298）；Gemini CLI 终端 resize 闪烁（#21924）

### 6. 🪝 Hook 事件体系增强（4/7）
- Codex 推动与 Claude Code Hook 完整对齐（#21753、26 评论）
- Qwen Code 新增 `MessageDisplay` 流式粒度（#6488/#6489）
- Claude Code Code Review 与 command 命名空间化（#75529）
- OpenCode TUI 插件刷新 hook（#26118）

---

## 四、差异化定位分析

| 工具 | 功能侧重 | 目标用户 | 技术路线 |
|------|---------|---------|---------|
| **Claude Code** | Auto Mode + Hook + 计费治理 | 重视安全边界与可控性、对成本敏感的重度用户 | 单一模型（Claude）、Skills + Commands + MCP 三件套 |
| **OpenAI Codex** | Plugin Marketplace + Web 搜索回显 | 偏好 GPT 生态、希望"插件即应用"的工作流构建者 | Rust 内核 + app-server v2 + Skills/Custom Prompts 双轨 |
| **Gemini CLI** | Agent 编排 + Memory + Eval 基建 | 研究型/实验性用户、团队协作场景 | Agent-as-User 模型、Auto Memory、Carekate Triage Worker 后台 Agent |
| **Copilot CLI** | GitHub 平台打通 + 沙箱合规 | 已深耕 GitHub 生态的企业开发团队 | sandbox policy + extensions + 模型选择器 + ACP 服务器模式 |
| **Kimi Code CLI** | 长上下文场景（历史路径） | 中文圈、长文档/单次任务用户 | 数据低调，侧重 MCP 接入探索 |
| **OpenCode** | 多 Provider 编排 + 模型无关抽象 + Browser Agent | 模型/工具组合实验者、对供应商锁定敏感的高级用户 | 严格多 Provider、AI SDK 元数据保真、自研 browser-use 工具 |
| **Qwen Code** | Daemon/ACP 运行时 + 渠道生态 + 工作空间管理 | 中后台机器人场景、需要长时 session 的团队 | `qwen serve` 长驻进程、Channels 多端推送、Worktree 隔离 |

**关键洞察**：
- **单一模型绑定**（Claude Code、Codex、Gemini CLI、Copilot CLI）vs **模型无关**（OpenCode、Qwen Code 部分）的两条路径开始清晰分化
- **CLI 即运行时**的趋势在 Qwen Code 的 Daemon 与 OpenCode 的 browser 工具上最为突出
- **企业级 / 合规 / 沙箱** 是 Copilot 的保留赛道；**记忆与 Agent 自治** 是 Gemini 的保留赛道；**渠道触达** 是 Qwen 的保留赛道

---

## 五、社区热度与成熟度

### 🔥 高活跃 + 高迭代 = 一线阵营
- **OpenCode**：30 issues（含大规模清理）+ 20 PR，新增 browser-use 工具与国际化收尾，进入"功能扩张 + Bug 治理"双轨并进阶段
- **Gemini CLI**：50 issues + 18 PR，但当日**无版本发布**且 nightly 构建失败，处于"密集打磨、暂缓发版"状态
- **Qwen Code**：daemon 架构升级中（#6378 RFC + 多渠道 + Webhook + 新 Hook），技术债务与功能扩展同步推进

### 🟡 高活跃 + 低迭代 = 触顶风险
- **Copilot CLI**：28 issues + 0 PR，#53 长期积压（9 个月未解），反映管理节奏与社区期望之间存在落差
- **Claude Code**：50 issues + 仅 3 篇文档 PR，#41506（54 评论）连续暴露，反映现有功能下用户已经"功能触顶"，开始投诉稳定性与计费
- **OpenAI Codex**：50 issues + 10 PR 节奏正常，但 v0.143.0 的 Window 端稳定性被指仍有债务

### ⚪ 低活跃 = 静默期
- **Kimi Code CLI**：1 issue + 0 PR，与其他项目明显差距，需观察是否进入新一轮迭代周期

### 成熟度信号
- **批量化关闭历史 issue**（仅 OpenCode 出现）→ 项目已进入"长尾治理"阶段
- **PR 中"安全/合规/国际化"占比上升**（Gemini 3 个安全 PR、OpenCode 葡语完成度 100%）→ 项目向企业级与全球化迈进
- **客户端 Web 搜索元数据栈**（Codex #31379/#31515/#31516 三 PR 形成 stack）→ 提示该方向开始产品化

---

## 六、值得关注的趋势信号

### 🔮 趋势 1：MCP 从"协议概念"走向"基础设施"，安全成为新焦点
**证据**：Gemini CLI 当日合并 SSRF 防护 PR（#28112）+ OAuth keep-alive CVE-2026-48931 修复（#28103），OpenCode 修复 `webfetch` charset 解码（#35838）；OAuth/auth 已经成为高优议题。

**对开发者的价值**：在选择 MCP server 时，应优先评估**OAuth metadata 合规性**与**上游 DNS rebinding 防护**；自建 MCP 服务时即应内置 SSRF 防护。

### 🔮 趋势 2：Agent 编排进入"分层化"阶段
**证据**：Qwen Code 提出多 workspace daemon（#6378）；OpenCode 引入独立 browser 工具（#35844）；Gemini CLI 持续推进 Caretaker T

---

## 各工具详细报告

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills 社区热点

> 数据来源: [anthropics/skills](https://github.com/anthropics/skills)

<think>
The user wants me to analyze the GitHub data from anthropics/skills repo and produce a report in Chinese. Let me carefully read through the data and structure my analysis.

Looking at the data:

**Pull Requests (sorted by comments, showing top 20):**
1. #1298 - fix(skill-creator): run_eval.py always reports 0% recall (MartinCajiao) - OPEN
2. #514 - Add document-typography skill (PGTBoos) - OPEN
3. #538 - fix(pdf): correct case-sensitive file references in SKILL.md (Lubrsy706) - OPEN
4. #486 - Add ODT skill (GitHubNewbie0) - OPEN
5. #210 - Improve frontend-design skill clarity (justinwetch) - OPEN
6. #83 - Add skill-quality-analyzer and skill-security-analyzer (eovidiu) - OPEN
7. #541 - fix(docx): prevent tracked change w:id collision (Lubrsy706) - OPEN
8. #539 - fix(skill-creator): warn on unquoted description with YAML special characters (Lubrsy706) - OPEN
9. #1367 - feat(skills): add self-audit (YuhaoLin2005) - OPEN
10. #1099 - skill-creator: fix run_eval.py crash on Windows (joshuawowk) - OPEN
11. #1050 - skill-creator: fix Windows subprocess + encoding bugs (gstreet-ops) - OPEN
12. #723 - feat: add testing-patterns skill (4444J99) - OPEN
13. #509 - docs: add CONTRIBUTING.md (narenkatakam) - OPEN
14. #362 - Fix skill-creator UTF-8 panic on multi-byte characters (Mr-Neutr0n) - OPEN
15. #361 - Detect unquoted YAML special characters (Mr-Neutr0n) - OPEN
16. #181 - Add SAP-RPT-1-OSS predictor skill (amitlals) - OPEN
17. #95 - Add comprehensive system documentation and flowcharts (TylerALofall) - OPEN
18. #1323 - fix(skill-creator): run_eval trigger detection (Polluelo978) - OPEN
19. #1302 - Add color-expert skill (meodai) - OPEN
20. #806 - feat: add sensory skill (AdelElo13) - OPEN

Note: The PR comment counts are "undefined" so I need to consider engagement based on description content and other factors. The task says "按评论数排序" but the actual comment count is undefined. I'll need to use my judgment based on the importance and content of each PR.

**Issues (top 15):**
1. #492 - Security: Community skills distributed under anthropic/ namespace - 34 comments - OPEN
2. #228 - Enable org-wide skill sharing in Claude.ai - 14 comments - OPEN
3. #556 - run_eval.py: claude -p never triggers skills/commands - 12 comments - OPEN
4. #62 - All my skills have disappeared - 10 comments - OPEN
5. #1329 - Proposing compact-memory skill - 9 comments - OPEN
6. #202 - skill-creator should be updated to best practice - 8 comments - CLOSED
7. #412 - Skill proposal: agent-governance - 6 comments - CLOSED
8. #189 - document-skills and example-skills plugins duplicate - 6 comments - OPEN
9. #1175 - Concerns regarding Security and Context Window - 4 comments - CLOSED
10. #29 - Usage with bedrock - 4 comments - OPEN
11. #16 - Expose Skills as MCPs - 4 comments - OPEN
12. #1362 - web-artifacts-builder bundle issues - 3 comments - OPEN
13. #1169 - skill-creator description-optimisation loop recall=0% - 3 comments - OPEN
14. #1061 - Windows compatibility: skill-creator - 3 comments - OPEN
15. #184 - agentskills.io page too many redirects - 3 comments - CLOSED

Now let me structure the report:

**1. 热门 Skills 排行** - Top PRs by engagement. Since the PR data doesn't have comment counts, I'll prioritize based on:
- Number of related issues
- Cross-references (e.g., #1298 references #556)
- Importance/impact

The most discussed cluster is clearly the skill-creator/run_eval.py 0% recall problem:
- #1298, #1323, #1099, #1050, #362, #361, #539, #1169, #1061, #556

Top skills by impact:
1. #1298 - skill-creator fixes (0% recall) - hub of the issue
2. #514 - document-typography - new skill proposal
3. #1367 - self-audit skill
4. #83 - skill-quality-analyzer & skill-security-analyzer
5. #1302 - color-expert
6. #486 - ODT skill
7. #723 - testing-patterns
8. #210 - frontend-design improvement
9. #806 - sensory skill (AppleScript)
10. #181 - SAP-RPT-1-OSS

**2. 社区需求趋势**
- 安全/权限治理 (#492, #412, #1175)
- 组织级共享 (#228)
- skill-creator 工具链稳定性 (#556, #1298, #1323, #1169)
- Windows 兼容 (#1061, #1099, #1050)
- 新技能方向：颜色专家、自审计、测试模式、紧凑记忆 (#1329)
- MCP 集成 (#16)
- 平台集成（Bedrock）(#29)

**3. 高潜力待合并 Skills**
- #1298 (skill-creator核心修复)
- #1367 (self-audit)
- #1302 (color-expert)
- #83 (skill-quality-analyzer & skill-security-analyzer)
- #514 (document-typography)
- #486 (ODT)
- #723 (testing-patterns)
- #806 (sensory)

**4. 生态洞察**
Most concentrated demand: tooling stability and self-governance for Skills ecosystem - the community is most focused on fixing the skill-creator toolchain (0% recall) and adding quality/security analyzers to ensure the Skills ecosystem itself is reliable and trustworthy.

Let me write this report now in Chinese, with appropriate detail and links.
</think>
# Claude Code Skills 社区热点报告
*数据截止 2026-07-08 · 仓库: anthropics/skills*

---

## 1. 热门 Skills 排行（PR 维度）

由于热门 PR 数据中评论数字段未返回，以下排名综合 **跨 Issue 引用密度、问题影响面、技术深度** 三个维度排序。

### 🥇 #1298 — skill-creator 评测体系全面修复
**作者**: @MartinCajiao | 状态: OPEN
**链接**: https://github.com/anthropics/skills/pull/1298
- 修复 `run_eval.py` 始终报告 `recall=0%` 的核心 Bug（关联 #556、#1169 等 10+ 复现）
- 解决 eval 工件未被作为真实 skill 安装、Windows 流读取、触发检测、并行 worker 等多个问题
- **讨论热点**: 这是当前社区最关注的"卡脖子"问题——description 优化循环（`run_loop.py` / `improve_description.py`）事实上在"对着噪声优化"，所有用户无法使用自动描述优化功能

### 🥈 #1367 — self-audit 自审计技能 v1.3.0
**作者**: @YuhaoLin2005 | 状态: OPEN（最新活动 7-02）
**链接**: https://github.com/anthropics/skills/pull/1367
- 通用 AI 输出审计技能：先做文件存在性机械校验，再按"伤害严重度优先级"做四维推理质量门控
- 跨项目、跨技术栈、跨模型通用
- **讨论热点**: 反映社区对"AI 输出可信度"和"交付前自检"的高度需求

### 🥉 #83 — skill-quality-analyzer + skill-security-analyzer
**作者**: @eovidiu | 状态: OPEN（已等 8 个月）
**链接**: https://github.com/anthropics/skills/pull/83
- 5 维度质量分析（结构 20% / 文档 / 示例 / 资源…）
- 配套安全分析技能
- **讨论热点**: 元技能（meta-skills）方向，配合 Issue #492 社区安全担忧（34 评论），反映"先把 Skills 生态自身治理好"的诉求

### 4️⃣ #514 — document-typography 文档排版质量控制
**作者**: @PGTBoos | 状态: OPEN
**链接**: https://github.com/anthropics/skills/pull/514
- 防止 AI 生成文档的孤儿词/寡头段落/编号错位
- **讨论热点**: "用户极少主动要求好的排版"——反映社区对 **AI 输出默认质量** 的不满

### 5️⃣ #1302 — color-expert 颜色专家
**作者**: @meodai | 状态: OPEN
**链接**: https://github.com/anthropics/skills/pull/1302
- 覆盖 ISCC-NBS / Munsell / OKLCH / OKLAB 等命名与色彩空间，含"何时用哪个"决策表
- **讨论热点**: 高质量垂直领域专家技能的代表，结构自洽、内容深度大

### 6️⃣ #486 — ODT（OpenDocument）技能
**作者**: @GitHubNewbie0 | 状态: OPEN
**链接**: https://github.com/anthropics/skills/pull/486
- OpenDocument 格式（.odt / .ods）的创建、模板填充、HTML 解析
- **讨论热点**: 补齐文档格式生态的最后一块（DOCX / PDF 已有）

### 7️⃣ #723 — testing-patterns 测试模式
**作者**: @4444J99 | 状态: OPEN
**链接**: https://github.com/anthropics/skills/pull/723
- Testing Trophy 模型、AAA 模式、React 组件测试、Mock 边界
- **讨论热点**: 软件工程垂直知识沉淀，开发者社区高需求方向

### 8️⃣ #210 — frontend-design 改版
**作者**: @justinwetch | 状态: OPEN
**链接**: https://github.com/anthropics/skills/pull/210
- 重写 frontend-design 让指令"在单轮对话内可执行"
- **讨论热点**: 反映早期 Skill 普遍存在"读起来像文档而不是操作指令"的共性问题

---

## 2. 社区需求趋势（Issues 视角）

| 主题 | 代表 Issue | 评论数 | 趋势判断 |
|---|---|---|---|
| **🔐 命名空间安全/信任边界** | [#492](https://github.com/anthropics/skills/issues/492) | 34 | **最热议题**。社区技能冒充官方 anthropic/ 命名空间，被攻击者用于提权欺骗 |
| **🏢 组织级共享能力** | [#228](https://github.com/anthropics/skills/issues/228) | 14 | 企业落地最大摩擦点：需下载 .skill 文件、手动上传 |
| **🛠️ skill-creator 工具链失效** | [#556](https://github.com/anthropics/skills/issues/556) | 12 | 配合 PR #1298/#1323/#1169 — 自动优化描述能力全面失灵 |
| **🧠 紧凑记忆/Agent 状态压缩** | [#1329](https://github.com/anthropics/skills/issues/1329) | 9 | 长期 Agent 上下文开销大，需要符号化压缩 |
| **📦 插件重复安装** | [#189](https://github.com/anthropics/skills/issues/189) | 6 👍9 | document-skills 与 example-skills 内容重复，占用上下文 |
| **🛡️ Agent 治理模式** | [#412](https://github.com/anthropics/skills/issues/412) | 6 | 政策执行、威胁检测、信任评分、审计追踪（已 CLOSED） |
| **🪟 Windows 兼容性** | [#1061](https://github.com/anthropics/skills/issues/1061) | 3 | PATHEXT / cp1252 / pipe select 三大 Unix-first 假设 |
| **🔗 Skills → MCP 化** | [#16](https://github.com/anthropics/skills/issues/16) | 4 | 早期愿景性议题，希望 Skill 暴露为 MCP 工具 |
| **☁️ 跨平台（Bedrock）支持** | [#29](https://github.com/anthropics/skills/issues/29) | 4 | 企业 AWS 用户无法使用 |

**核心趋势**: 社区关注点正从"加新技能"转向"把现有技能工程化"——质量分析、安全审计、跨平台兼容、命名空间治理成为新焦点。

---

## 3. 高潜力待合并 Skills

以下 PR 具备"影响力大、问题清晰、方案明确、跨用户痛点"特征，最可能近期落地：

| 优先级 | PR | 主题 | 推荐理由 |
|---|---|---|---|
| ⭐⭐⭐ | [#1298](https://github.com/anthropics/skills/pull/1298) | skill-creator 评测修复 | 阻塞整个描述优化工作流，10+ 复现，社区第一诉求 |
| ⭐⭐⭐ | [#83](https://github.com/anthropics/skills/pull/83) | skill-quality / security-analyzer | 与 #492 安全议题共振，是生态治理基础设施 |
| ⭐⭐ | [#1367](https://github.com/anthropics/skills/pull/1367) | self-audit 技能 | 通用性强、版本号 v1.3.0 表明已较成熟 |
| ⭐⭐ | [#514](https://github.com/anthropics/skills/pull/514) | document-typography | 解决全用户痛点、方案简单 |
| ⭐⭐ | [#486](https://github.com/anthropics/skills/pull/486) | ODT 技能 | 补齐文档格式生态 |
| ⭐ | [#1302](https://github.com/anthropics/skills/pull/1302) | color-expert | 垂直深度足够 |
| ⭐ | [#723](https://github.com/anthropics/skills/pull/723) | testing-patterns | 开发者高频需求 |
| ⭐ | [#806](https://github.com/anthropics/skills/pull/806) | sensory（macOS AppleScript） | 平台特定但价值明确 |

> 💡 值得注意的是，**所有列出的热门 PR 目前均为 OPEN 状态**，合并率偏低——这本身是社区反馈中需要重点关注的现象。

---

## 4. Skills 生态洞察（一句话总结）

> **当前社区最集中的诉求是"基础设施治理"——具体表现为：修复 skill-creator 评测失灵（#1298 集群）、建立 Skills 自身的质量与安全分析能力（#83 + #492）、并补齐 Windows/企业平台兼容性。社区正从"造技能"过渡到"建生态"。**

---

### 📌 关键观察
- **同源问题集群**: 围绕 `run_eval.py` recall=0% 的问题出现了 5+ PR（#1298、#1323、#1099、#1050、#1169、#1061）和 3+ Issue（#556、#1169、#1061），**这是生态最紧迫的待解问题**
- **PR 评论数据缺失**: 50 个热门 PR 中评论数全为 undefined，建议结合 GitHub 真实互动数据复核热度排名
- **元技能（meta-skills）成为新热点**: quality-analyzer / security-analyzer / self-audit / testing-patterns 表明社区开始系统化地"对 Skills 自身做工程化"

---

<think>The user wants me to generate a Chinese daily report for the Claude Code community based on GitHub data from 2026-07-08. Let me analyze the data carefully and structure it according to the requested format.

Let me categorize the information:

**Releases (past 24 hours):**
- v2.1.204: Fixed hook events not streaming during SessionStart hooks in headless sessions
- v2.1.203: Added login expiration warning, grey ⏸ badge for manual permission mode, additional working directory info

**Top Issues (by comment count):**
1. #41506 (54 comments) - Max Plan token usage increased 3-5x since March
2. #47327 (18 comments) - Cowork tab disabled on Windows 11
3. #39678 (17 comments) - Code Review incorrectly reports overage limit
4. #74066 (17 comments) - Session/cache leakage between workspace instances
5. #56281 (14 comments) - Can't upgrade Max 5x → Max 20x
6. #63819 (14 comments) - Auto mode classifier unavailable
7. #30930 (11 comments) - /api/oauth/usage returns 429
8. #38618 (11 comments) - Safety Classifier unavailable
9. #74803 (7 comments) - Token burning issue
10. #42765 (6 comments) - OAuth redirect_uri uses localhost

**PRs (3 total):**
1. #75529 - Clarify code-review plugin relationship
2. #73476 - Fix GitHub capitalization
3. #75252 - Clarify plugin MCP configuration scope

I'll structure the report now with thorough analysis.

Let me identify key trends:
- Cost/billing concerns (multiple issues)
- v2.1.204 regression issues (`--resume` broken, TUI freeze)
- Security/safety classifier issues
- Session management issues
- Cross-platform issues (Windows, macOS, Linux, WSL)
- Enterprise/ZDR workspace concerns
- MCP integration issues

Let me write this in clean, professional Chinese.</think>

# Claude Code 社区动态日报
**📅 2026-07-08** ｜ 数据来源：[anthropics/claude-code](https://github.com/anthropics/claude-code)

---

## 🔥 今日速览

**v2.1.204 紧急回归导致 `--resume` 全面失效**，跨 Windows/macOS/WSL2 出现 TUI 输入无响应、终端冻结问题，已集中爆发 6+ 个高频 Issue。同时社区持续关注 **Max 套餐 token 用量异常激增（3-5×）** 与 **Auto Mode 安全分类器不可用** 两大长期未解问题。整体来看，社区情绪偏负面，版本质量与计费透明度成为当下两大焦点。

---

## 📦 版本发布

### v2.1.204（最新）
修复了 headless 模式下 `SessionStart` hook 事件流式传输失败导致远程 worker 被 idle-reap 中断的问题。
🔗 [Release 链接](#)

### v2.1.203
- 新增 **登录过期提前警告**，避免后台会话被中断；
- Footer 增加 **灰色 ⏸ 标识** 显示当前处于手动权限模式；
- 显示会话的额外 working directory 信息。

> ⚠️ **注意**：v2.1.204 同步引入了多个严重回归（见下），建议暂缓升级或关注 #75496、#75497、#75513、#75521 的修复进展。

---

## 🚨 社区热点 Issues（Top 10）

| # | 编号 | 标题 | 评论 | 平台/类别 | 重要性 |
|---|------|------|------|-----------|--------|
| 1 | [#41506](https://github.com/anthropics/claude-code/issues/41506) | Max Plan 用量自 3/28 起暴增 3-5×，无配置变更 | 54 💬 | Linux / Cost | ⭐⭐⭐⭐⭐ |
| 2 | [#74066](https://github.com/anthropics/claude-code/issues/74066) | ZDR Workspace 间疑似 session/cache 泄露 | 17 💬 | macOS / 核心+安全 | ⭐⭐⭐⭐⭐ |
| 3 | [#63819](https://github.com/anthropics/claude-code/issues/63819) | Auto mode classifier 反复不可用，Bash/Write/Edit 全堵 | 14 💬 | Windows / 工具+API | ⭐⭐⭐⭐ |
| 4 | [#30930](https://github.com/anthropics/claude-code/issues/30930) | `/api/oauth/usage` 持续 429 限流（Max 用户） | 11 💬 | API+状态栏 | ⭐⭐⭐⭐ |
| 5 | [#38618](https://github.com/anthropics/claude-code/issues/38618) | Safety Classifier unavailable，自动模式卡死 | 11 💬 | 工具+API | ⭐⭐⭐⭐ |
| 6 | [#39678](https://github.com/anthropics/claude-code/issues/39678) | Code Review 误报超额限额（消费 $0/$250） | 17 💬 | Cost | ⭐⭐⭐⭐ |
| 7 | [#47327](https://github.com/anthropics/claude-code/issues/47327) | Cowork tab 在 Win11 上 yukonSilver 显示 "unsupported" | 18 💬 | Windows / Cowork | ⭐⭐⭐ |
| 8 | [#42765](https://github.com/anthropics/claude-code/issues/42765) | OAuth redirect_uri 用 `localhost` 而非 `127.0.0.1`（违反 RFC 8252） | 6 💬 | Linux / Auth+MCP | ⭐⭐⭐ |
| 9 | [#41954](https://github.com/anthropics/claude-code/issues/41954) | TUI 流式渲染期间刷屏剪贴板 | 5 💬 | TUI | ⭐⭐⭐ |
| 10 | [#75496](https://github.com/anthropics/claude-code/issues/75496) | v2.1.204 `claude --resume` 冷启动键盘无响应（WSL2） | 4 💬 | WSL / TUI | ⭐⭐⭐ |

**重点解读**：
- **#41506** 是当前持续时间最长、评论数最高的问题（54 条评论 + 26 👍），自 2026-03 以来 Max 用户普遍反馈 token 消耗失控，严重影响付费用户信任。
- **#74066** 虽然 👍 为 0，但涉及企业 ZDR（零数据保留）workspace 的 session 隔离问题，**安全影响面巨大**，值得特别警惕。
- **#63819 / #38618** 共同指向同一个核心组件：Auto Mode 的安全分类器（model-based safety gate），其反复不可用直接阻断 Bash/Edit/Write，影响开发者日常。
- v2.1.204 多个回归（#75496、#75497、#75513、#75521、#75517）指向 `claude --resume` 路径下的 TUI 渲染层缺陷，建议降级到 v2.1.203。

---

## 🛠️ 重要 PR 进展

> 过去 24 小时仅 3 条 PR 更新，**全部为文档类**，可见近期功能开发节奏较缓，质量修复优先。

| # | PR | 内容 | 状态 |
|---|----|------|------|
| 1 | [#75529](https://github.com/anthropics/claude-code/pull/75529) | 澄清 `code-review` plugin 与内建 `/code-review` skill 的区别（命令命名空间化为 `code-review:code-review`） | OPEN |
| 2 | [#75252](https://github.com/anthropics/claude-code/pull/75252) | 澄清 plugin 的 `mcpServers` 配置作用域，区别于用户级 `~/.claude.json` MCP allow/deny | OPEN |
| 3 | [#73476](https://github.com/anthropics/claude-code/pull/73476) | README 中 "Github" → "GitHub" 大小写修正 | OPEN |
| 4 | [#75523](https://github.com/anthropics/claude-code/issues/75523) | Desktop 请求：暴露"始终保持侧边栏展开"持久化设置 | Enhancement |
| 5 | [#75511](https://github.com/anthropics/claude-code/issues/75511) | Cowork 请求：固定聊天排序在 Mobile/Desktop 间不一致，需统一排序模式 + reset 入口 | Enhancement |
| 6 | [#75502](https://github.com/anthropics/claude-code/issues/75502) | Zoho Books MCP：`doc` 二进制附件被错误作为 query param 发送，multipart 无法上传 | Bug |
| 7 | [#74612](https://github.com/anthropics/claude-code/issues/74612) | 项目级 `--scope project` 插件在 CLI 可加载但 VS Code 扩展静默忽略 | Bug |
| 8 | [#75497](https://github.com/anthropics/claude-code/issues/75497) | v2.1.204 `claude --resume` 导致 Windows 终端完全冻结（regression） | Bug |
| 9 | [#75508](https://github.com/anthropics/claude-code/issues/75508) | `/insights` 定性 facet 分析在新会话静默停止重新生成，报告降级为空白 | Bug |
| 10 | [#75517](https://github.com/anthropics/claude-code/issues/75517) | Fable 5 自身预压缩输出回灌触发自有 "safety gate"（"Self-caged" 设计质疑） | Bug / 设计挑战 |

---

## 📈 功能需求趋势分析

通过对 50 条 Issues 的语义聚类，社区关注焦点呈现以下分布：

### 1️⃣ 成本与计费透明度（占比 ~30%，最热）
- Max Plan 用量失控（#41506、#74803、#75518）
- 配额条形图与实际扣费脱节
- Code Review 超额限额误报（#39678）
- OAuth 用量 API 限流（#30930）

**趋势**：用户对"配额内仍被多收费"的不信任度持续上升，需要官方对计费公式做透明化披露。

### 2️⃣ Auto Mode 与安全分类器稳定性
- #63819、#38618、#75517 共同指向 **Claude Opus 4.8 / Sonnet 4.6 作为 classifier 频繁不可用**
- 这是架构性缺陷：auto mode 完全依赖该分类器判定 Bash 安全

**趋势**：需要 classifier fallback 机制或本地启发式兜底。

### 3️⃣ TUI / `--resume` 路径质量下滑
- v2.1.204 在 WSL2、macOS、Windows 同时出现 `claude --resume` / `--continue` 完全不响应键盘
- 鼠标追踪泄漏、orphan daemon（#59720、#59511）

**趋势**：TUI 的回归测试覆盖率需要加强。

### 4️⃣ 跨平台体验
- Windows 仍是受影响的"重灾区"（#47327、#59511、#59720、#63819、#75386）
- Mac M-series 上 WSL/Warp 终端的兼容问题（#41954、#75521）
- Podman/Docker 安装脚本破坏（#67178）

### 5️⃣ MCP 生态
- Zoho Books connector 的 multipart 上传 Bug（#75502）
- 项目级插件在 VS Code 扩展中被忽略（#74612）
- plugin MCP 配置文档（#75252）

### 6️⃣ Enterprise / 安全
- ZDR workspace session 泄露疑似（#74066）
- OAuth redirect_uri 不合规（#42765，违反 RFC 8252 §7.3）
- Cyber safety filter 对授权的内存取证工作误报（#75506）

---

## 💬 开发者关注点 & 痛点

| 高频痛点 | 出现频次 | 代表 Issue |
|----------|---------|-----------|
| **月底账单异常翻倍** | 极高 | #41506、#74803、#75518 |
| **`claude --resume` 失效** | 高（v2.1.204 集中爆发） | #75497、#75496、#75513、#75521 |
| **Auto Mode 分类器可用性** | 高 | #63819、#38618、#75517 |
| **TUI 终端污染/冻结** | 中 | #59720、#59511、#41954 |
| **平台一致性差（尤其 Win11）** | 中 | #47327、#59720、#75386 |
| **MCP 文档与实际行为不一致** | 中 | #75252、#75502、#74612 |
| **安全策略过严误伤合法工作** | 中 | #75506、#75517 |
| **付费升级/客服响应** | 中 | #56281（标签 `invalid`，但 14 人争论） |

### 高频需求
- 🔧 **计费透明面板**：统一展示配额、实际扣费、超额来源
- 🔧 **`--resume` 启动态的稳定性回滚**
- 🔧 **Classifier fallback**：在 classifier 不可用时降级为只读或询问模式
- 🔧 **Project-scope plugin 在 VS Code 扩展中的支持**
- 🔧 **Desktop 端的"持久侧边栏"开关**（#75523）
- 🔧 **Pinned chat 跨端排序一致性**（#75511）

---

## 📌 一句话总结

> **社区情绪承压**：v2.1.204 短期内不建议生产环境升级，建议回退 v2.1.203；Max 计费透明度与 Auto Mode 分类器的可靠性仍是开发者最关心的话题。

---
*报告生成时间：2026-07-08 ｜ 数据窗口：过去 24 小时*

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

<think>The user wants me to generate a daily report for OpenAI Codex community dynamics based on GitHub data dated 2026-07-08. Let me analyze the data carefully and create a structured Chinese daily report.

Let me organize the key information:

**Releases:**
- rust-v0.143.0 (main release with remote plugins enabled by default)
- rust-v0.143.0-alpha.39
- rust-v0.143.0-alpha.38

**Key Issues to highlight (top 10 by comments/reactions):**
1. #30364 - GPT-5.5 reasoning token clustering at 516/1034/1552 (156 comments, 252 likes) - HIGHLY IMPORTANT
2. #14297 - Codex App reconnecting 5 times (52 comments)
3. #21753 - Full Claude Code Hook Parity (26 comments)
4. #12115 - Dynamically loading nested AGENTS.md (23 comments, 83 likes)
5. #24103 - Meta Ads MCP fails OAuth login (12 comments)
6. #23840 - Codex Desktop Computer Use MCP times out (11 comments)
7. #25127 - Unable to send message (11 comments)
8. #24086 - Locked Computer Use fails on Mac mini M4 (10 comments)
9. #23574 - VS Code extension allocates 1M inotify watches (9 comments)
10. #20930 - Codex App notification doesn't work with remote (5 comments)

**Important PRs (top 10):**
1. #30188 - Persist TurnItems for paginated thread rollouts
2. #31473 - Emit canonical review mode items
3. #31515 - Add client-only web search result metadata
4. #31482 - Migrate plugin commands into skills
5. #28845 - Support plugin agent roles
6. #31379 - Decode hosted web search sources for clients
7. #31466 - Capture tool search pipeline diagnostics
8. #31518 - Add import failure sub-error telemetry
9. #31500 - Code-mode: move to hosted mode by default
10. #31516 - Return standalone web search previews

Let me create a comprehensive daily report in Chinese.</think>

# OpenAI Codex 社区动态日报
**日期：2026-07-08**

---

## 📌 今日速览

今日 Codex 迎来 **v0.143.0 正式版**，**Remote Plugins 默认启用** 并新增 npm 市场源与远程/本地版本可见性，同时 macOS/Windows 系统代理（含 PAC）支持 Responses API 路由。社区焦点集中在三大方向：**GPT-5.5 推理 token 在固定边界（516/1034/1552）聚集导致的性能争议**（#30364 评论 156 条）、**Windows Desktop 的 MCP/沙箱/app-server 多处连锁 Bug**，以及 **App/Desktop 端的会话持久化与状态恢复问题** 持续高发。

---

## 🚀 版本发布

### rust-v0.143.0（正式版）
**核心变更：**
- **Remote Plugins 默认启用**：插件目录新增展示维度，支持 npm marketplace 源，并可同时显示远程与本地版本号 (#30297, #26705, #29375, #30981)
- **系统代理支持**：Codex 认证流程和 Responses API 流量现可走 macOS / Windows 系统代理，包括 PAC 文件
- 尚未发布完整说明，更多细节可关注后续 changelog

### rust-v0.143.0-alpha.38 / alpha.39
预发布版同步迭代，主要面向 alpha 通道测试用户。

---

## 🔥 社区热点 Issues（按热度排序）

### 1. [#30364](https://github.com/openai/codex/issues/30364) — GPT-5.5 推理 token 边界聚集导致性能下降 ⭐252 💬156
**标签**：`bug` `model-behavior` `rate-limits`
社区发现 `gpt-5.5` 模型的 `reasoning_output_tokens` 异常集中在 516/1034/1552 等固定值，疑似上游截断或配额分桶引发，影响复杂任务表现。这是本周最大型讨论，OpenAI 工程团队需要回应。

### 2. [#14297](https://github.com/openai/codex/issues/14297) — Codex App 回复前连续 5 次 "Reconnecting..."（已关闭）💬52
旧版本未出现的连接抖动问题，建议升级后复测验证是否在新版本中修复。

### 3. [#21753](https://github.com/openai/codex/issues/21753) — Full Claude Code Hook Parity (29+) ⭐19 💬26
呼吁为 Codex Hooks 提供与 Claude Code 完整生命周期/自动化层面的 29+ 个事件对齐，作为 umbrella tracker 跟踪。

### 4. [#12115](https://github.com/openai/codex/issues/12115) — 动态加载嵌套 `AGENTS.md` ⭐83 💬23
借鉴 Claude Code 对子目录 `CLAUDE.md` 的按需加载机制，减轻上下文压力，已列为 Top 100 客户需求。

### 5. [#24103](https://github.com/openai/codex/issues/24103) — Meta Ads MCP OAuth 登录失败 `invalid_client_metadata` 💬12
官方 Meta Ads MCP（`https://mcp.facebook.com/ads`）在 OAuth 同意页面前以 HTTP 400 报错，影响广告集成链路。

### 6. [#23840](https://github.com/openai/codex/issues/23840) — Codex Desktop Computer Use MCP initialize 超时 💬11
相同 client 在 Terminal 中握手正常，但 Desktop 内置 MCP 超时，表明 Desktop 与 app-server 之间存在握手拦截或资源隔离差异。

### 7. [#25127](https://github.com/openai/codex/issues/25127) — App 无法发送消息 💬11
macOS Darwin 25.2.0 arm64 上 Pro 用户遭遇完整 UI 卡死，需排查 recent regressions。

### 8. [#24086](https://github.com/openai/codex/issues/24086) — Mac mini M4 + Studio Display 锁屏 Computer Use 失败 ⭐9 💬10
仅在 Mac 锁定状态报 `cgWindowNotFound`，需权限/合成层相关修复。

### 9. [#23574](https://github.com/openai/codex/issues/23574) — VS Code 扩展在 Linux 大工作区耗尽 inotify 监视 ⭐9 💬9
可瞬间创建近 100 万个 inotify watch，威胁系统稳定性，应优先修复。

### 10. [#20930](https://github.com/openai/codex/issues/20930) — Codex App 远程连接下通知失效 ⭐6 💬5
跨 Linux 远程 + macOS Desktop 时，turn 完成不弹通知，影响远程开发体验。

---

## 🔧 重要 PR 进展

### 1. [#30188](https://github.com/openai/codex/pull/30188) — `history_mode = "paginated"` 持久化 TurnItems
让新线程的 rollout JSONL 持久化 `ItemCompleted(item: <turn_item>)`，与旧版格式互不污染。

### 2. [#31473](https://github.com/openai/codex/pull/31473) — Review Mode 使用 canonical TurnItem 生命周期
将 `EnteredReviewMode` / `ExitedReviewMode` 统一接入 `ItemStarted` / `ItemCompleted` 体系。

### 3. [#31515](https://github.com/openai/codex/pull/31515) — 客户端 Web 搜索结果元数据
为 web search items 增加 URL/title/snippet 元数据，并在 rollout 与 app-server v2 中持久化、恢复。

### 4. [#31482](https://github.com/openai/codex/pull/31482) — Plugin commands 迁移为 skills
把 command→skill 转换下沉到 `codex-core-plugins`，规避依赖环，并在原子安装阶段暴露生成 skills。

### 5. [#28845](https://github.com/openai/codex/pull/28845) — 插件 agent roles 支持
允许 `spawn_agent` 使用命名空间 `agent_type`（如 `sample:researcher`），完善插件 scaffolding 校验。

### 6. [#31379](https://github.com/openai/codex/pull/31379) — 解析托管 Web 搜索源
把 hosted web search 的源 URL 反序列化为 transient metadata，并转换为客户端 `WebSearchItem.results`。

### 7. [#31466](https://github.com/openai/codex/pull/31466) — `/feedback` 工具搜索诊断快照
用 always-on、按线程隔离的快照取代 `RUST_LOG` 自定义诊断，无需重建。

### 8. [#31518](https://github.com/openai/codex/pull/31518) — 导入失败子错误遥测
新增 `sub_error_type` 字段，按隐私安全的 operation 上下文分类 I/O/会话导入失败。

### 9. [#31500](https://github.com/openai/codex/pull/31500) — `code-mode` 默认托管化
将 `code_mode_host` 升级为 stable 并默认启用，可通过 `features.code_mode_host = false` 关闭。

### 10. [#31516](https://github.com/openai/codex/pull/31516) — 独立 Web 搜索预览回传客户端
解析 `/alpha/search` 输出中的 URL/title/snippet，去重并持久化。

---

## 📈 功能需求趋势

从近期 Issues 标签云看，社区关注点呈现以下分布：

| 方向 | 代表 Issue | 关注度 |
|------|------------|--------|
| **Hook / 自动化生态** | #21753、#12115 | 🔥🔥🔥 |
| **App / Desktop 稳定性** | #25127, #25595, #29561, #29868, #31208, #30608 | 🔥🔥🔥 |
| **Windows 沙箱/工具调用** | #18451, #15016, #31511, #31499, #31236 | 🔥🔥 |
| **新模型（Gpt-5.5）行为** | #30364 | 🔥🔥🔥 |
| **MCP 生态接入** | #24103, #23840, #31499 | 🔥🔥 |
| **远程 / 跨设备体验** | #20930, #25595, #28715 | 🔥 |
| **性能 / 资源管理** | #23574, #31236, #31499 | 🔥🔥 |
| **国际化与本地化** | #31206 | 🔥 |

**趋势洞察：**
- **Claude Code 兼容 / Hook 体系** 已成为社区呼声最强的功能扩展诉求
- **`AGENTS.md` / 上下文按需加载** 被多次提及，与 IDE 类工具的上下文工程趋势一致
- **Web 搜索在客户端的元数据持久化** 是过去 24 小时 PR 端最大主题（#31379/#31515/#31516 形成 stack）

---

## 🧑‍💻 开发者关注点

### 痛点 Top 5

1. **GPT-5.5 推理 token 量化分桶** — 怀疑上游有截断/配额二分行为，导致 reasoning 质量与成本可控性同时恶化 (#30364)。
2. **Windows 桌面端连环 Bug**：`apply_patch` 伪文件名超长 (#31511)、sandbox `Win32 error 5` (#15016)、app-server 重复创建 node.exe 进程池（183 个进程/13GB 内存，#31499）、PowerShell 高频调用冻屏任务栏 (#31236)，表明 Windows 自动化栈在 0.142.x 上仍未稳定。
3. **App 会话状态机脆弱**：会话"幽灵"出现/消失 (#29868)、diff-comment 空 wrapper 隐藏会话 (#24077)、Windows 重启后顺序错乱 (#29561)、重启后历史丢失 (#25397)。
4. **代理/网络适配缺口**：ChatGPT 登录 token 缺少 `api.responses.write` scope (#31506)，系统代理与 PAC 在 0.143 之前基本不通。
5. **MCP 兼容碎片化**：官方第三方 MCP（Meta Ads）以 OAuth metadata 不合规、初始化握手超时等多形态失效，影响 Codex 即插即用心智。

### 高频需求
- **远程插件市场化**（npm marketplace + 统一版本展示）已经在 0.143 落地，开发者关注点将转向"插件签名 / SBOM / 沙箱执行"。
- **会话回放/快照可移植性**（#30188/#29725/#31473）：围绕 paginated rollout、review mode 持久化的 PR 数量增加，期待稳定 replay 协议。
- **命令/Skill 化插件体系**（#31482, #28845）：从 manifest 解析到 agent role namespace，社区希望 Codex 拥有自己的"插件市场"而非命令数组。

---

**日报小结**：v0.143 的 Remote Plugins 与系统代理是本周最大功能改进，但 Windows 端的稳定性债务仍在累积；GPT-5.5 推理 token 聚集的指控若属实，将是下一阶段 OpenAI 模型行为审查的重要议题。

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

<think>The user wants me to generate a Chinese daily report for the Gemini CLI community based on the GitHub data provided. Let me analyze the data carefully and structure it according to the requested format.

Let me first understand the data:

1. **Releases in past 24 hours**: None
2. **Issues updated in past 24 hours**: 50 issues, top 30 shown. Many are about agents, subagents, memory system, security, browser agents
3. **Pull Requests updated in past 24 hours**: 18 PRs, covering fixes for security (SSRF, OAuth), emoji truncation, settings.json parsing, caretaker triage worker, eval coverage, etc.

Key themes I notice:
- Agent/Subagent issues dominate (hanging, bug reports, recovery, missing subagent context)
- Memory system bugs (Auto Memory redaction, inbox patches)
- Security concerns (SSRF, OAuth keep-alive, deterministic redaction)
- Browser agent issues (Wayland, settings.json overrides, session takeover)
- Caretaker triage system development (multiple PRs by @chadd28)
- Eval infrastructure improvements
- Nightly release failure (#28308)

Let me pick the top 10 issues for "Community Hot Issues":
1. #22323 - Subagent recovery after MAX_TURNS (10 comments, P1)
2. #24353 - Robust component level evaluations (7 comments, P1)
3. #22745 - AST-aware file reads evaluation (7 comments, P2)
4. #21409 - Generalist agent hangs (7 comments, P1, 8 thumbs up)
5. #21968 - Gemini doesn't use skills and sub-agents enough (6 comments, P2)
6. #26522 - Stop Auto Memory from retrying low-signal sessions (5 comments, P2)
7. #25166 - Shell command execution stuck (4 comments, P1)
8. #26468 - "bro what" bug report (4 comments, P2, Stale)
9. #21983 - browser subagent fails in wayland (4 comments, P1)
10. #21000 - Experiment with native file tools for task tracker (4 comments, P3)
11. #26525 - Add deterministic redaction (3 comments, security)
12. #24246 - Gemini CLI 400 error with > 128 tools (3 comments, P2)

I'll pick top 10 with rationale.

Top 10 PRs:
1. #28112 - SSRF protection to OAuth metadata discovery (security)
2. #28103 - avoid keep-alive socket reuse during OAuth token exchange (CVE-2026-48931)
3. #28105 - fix ellipsis logic in EditTool
4. #28223 - bypass LLM correction for JSON and IPYNB files
5. #28224 - avoid splitting emoji when truncating
6. #28219 - parse commented settings.json
7. #28306 - caretaker-triage main worker execution loop
8. #28305 - add tool call formatter and failure summaries for evals
9. #28304 - show clear message when account has no Code Assist tier
10. #27200 - retry transient directory cleanup failures (extensions)
11. #27971 - strip thoughts from scrubbed history (Thought Leakage)
12. #28244 - docs: don't use rm -rf / as test command

I'll pick the most important 10.

Trends:
- Agent reliability (subagent hangs, recovery, status reporting)
- Memory system quality
- Security (SSRF, OAuth, secrets redaction)
- Browser agent robustness
- Eval infrastructure expansion
- AST-aware tooling exploration

Developer pain points:
- Subagent reliability issues
- Terminal/UI bugs (corruption, emoji truncation, flicker)
- Tool count limits (>128/400 tools causes 400 errors)
- Auto Memory loops
- Settings.json parsing edge cases
- Bug reports missing subagent context

Let me write this in Chinese, professional and concise, suitable for technical developers.

Now I'll write the report.</think>

# Gemini CLI 社区动态日报 · 2026-07-08

## 📌 今日速览

今日社区动态以 **Agent 与 Memory 系统的健壮性改进**为核心议题，最受关注的两个 P1 级别问题分别聚焦于 subagent 在达到 `MAX_TURNS` 后的状态报告错误，以及 generalist agent 的"假死"挂起现象。与此同时，#28308 报告了 v0.51.0-nightly.20260708 夜间发布失败，需要关注后续修复进展。

---

## 🚀 版本发布

过去 24 小时内**无新版本发布**。夜间版本 v0.51.0-nightly.20260708.gc988cbb1e 因发布失败被标记为 release-failure（[#28308](https://github.com/google-gemini/gemini-cli/issues/28308)）。

---

## 🔥 社区热点 Issues

| # | Issue | 重要性 |
|---|-------|--------|
| 1 | **[#22323](https://github.com/google-gemini/gemini-cli/issues/22323)** — `codebase_investigator` subagent 在达到 `MAX_TURNS` 后仍上报 `status: "success"` 和 "GOAL" 完成原因，掩盖了任务中断事实。(10 评论, 👍2) | **高**：状态错报会直接误导上层编排决策，P1 优先级 |
| 2 | **[#21409](https://github.com/google-gemini/gemini-cli/issues/21409)** — `generalist` agent 委派后无限挂起，简单的文件夹创建任务也能卡死 1 小时以上，需显式指令才能绕过。(7 评论, 👍8) | **高**：👍 最高的 P1 issue，影响范围广，社区痛点强烈 |
| 3 | **[#24353](https://github.com/google-gemini/gemini-cli/issues/24353)** — 组件级评估体系 EPIC：从已有 76 个行为测试拓展到 6 个 Gemini 模型覆盖，是评估基础设施的长期工程 | **中**：决定未来模型迭代决策能力 |
| 4 | **[#22745](https://github.com/google-gemini/gemini-cli/issues/22745)** — AST 感知的文件读取/搜索/mapping 价值评估 EPIC，潜在可减少误读轮次与 token 噪音 | **中**：探索性研究，对长上下文效率有显著影响 |
| 5 | **[#21968](https://github.com/google-gemini/gemini-cli/issues/21968)** — Gemini 几乎不会主动调用自定义 skills 和 sub-agents，即便任务语义高度匹配也不触发 | **高**：暴露 prompt 工程与工具调度策略问题 |
| 6 | **[#26522](https://github.com/google-gemini/gemini-cli/issues/26522)** — Auto Memory 因低信号会话无法被 `read_file` 处理，陷入无限重试循环 | **高**：Memory 系统的可靠性基石，影响长期使用体验 |
| 7 | **[#21983](https://github.com/google-gemini/gemini-cli/issues/21983)** — browser subagent 在 Wayland 环境下失败，终止原因标记为 GOAL | **中**：Linux 桌面兼容性，影响 WSL/Linux 用户群 |
| 8 | **[#25166](https://github.com/google-gemini/gemini-cli/issues/25166)** — 简单的 CLI 命令完成后 shell 仍卡在 "Waiting input" 状态 | **中**：高频工作流阻塞，P1 但复现条件需进一步定位 |
| 9 | **[#24246](https://github.com/google-gemini/gemini-cli/issues/24246)** — 工具数量超过 ~400 个时触发 400 错误，agent 缺乏工具剪枝策略 | **中**：扩展/MCP 重度用户的关键瓶颈 |
| 10 | **[#26525](https://github.com/google-gemini/gemini-cli/issues/26525)** — Auto Memory 在转录内容发送至模型后才做脱敏，存在 secret 泄露窗口；需确定性脱敏与降低日志输出 | **高**：安全相关，已设为 maintainer-only |

> 其他值得关注：#22267（Browser Agent 忽略 settings.json 覆盖）、#21763（`/bug` 命令缺少 subagent 上下文）、#28308（夜间版本构建失败）。

---

## 🛠 重要 PR 进展

| # | PR | 内容简介 |
|---|-----|----------|
| 1 | **[#28112 🔒](https://github.com/google-gemini/gemini-cli/pull/28112)** — MCP OAuth 元数据发现增加 SSRF 防护，复用 `isLoopbackHost()` 与 DNS 校验 | 关闭 OAuth 发现链路的 SSRF 漏洞 |
| 2 | **[#28103 🔒](https://github.com/google-gemini/gemini-cli/pull/28103)** — 修复 OAuth token 交换在受 CVE-2026-48931 影响的 Node.js 版本（24.17.0/22.23.0/26.3.x）上的 "Premature close" 错误 | 解决 keep-alive socket 复用导致的安全补丁兼容问题 |
| 3 | **[#27971 🔒](https://github.com/google-gemini/gemini-cli/pull/27971)** — 剥离历史 turns 中泄漏的 "thought" 片段，防止模型模仿草稿式推理或陷入无限 monologue | 修复 Thought Leakage，提升多轮对话稳定性 |
| 4 | **[#28304 🔓](https://github.com/google-gemini/gemini-cli/pull/28304)** — 当账号无 Code Assist 等级时（如 Workspace/无 GCP 工程），`/privacy` 显示更清晰提示 | 改进 enterprise 用户 onboarding 体验 |
| 5 | **[#28306 🔓](https://github.com/google-gemini/gemini-cli/pull/28306)** — Caretaker Triage Worker 主循环与 Pub/Sub egress action 发布器 | Caretaker Agent 自动化基础设施关键里程碑 |
| 6 | **[#28305 🔓](https://github.com/google-gemini/gemini-cli/pull/28305)** — 行为评估加入 tool-call timeline 格式化器与失败摘要，便于调试 | 改善评估可观测性，加速 debug 周期 |
| 7 | **[#28223 🔓](https://github.com/google-gemini/gemini-cli/pull/28223)** — `write_file` / `replace` 对 `.json` 与 `.ipynb` 文件绕过 LLM 纠错，避免破坏结构 | 修复数据科学工作流常见破坏性 bug |
| 8 | **[#28224 🔓](https://github.com/google-gemini/gemini-cli/pull/28224)** — `sanitizeForDisplay` 截断时按 UTF-16 code unit 切分导致 emoji surrogate pair 断裂，改为代码点感知 | 修复含 emoji 输出乱码，体验细节 |
| 9 | **[#27200 🔓](https://github.com/google-gemini/gemini-cli/pull/27200)** — 扩展更新时重试 transient 目录清理失败，规避 Windows 文件锁时序 | 改善 Windows 平台扩展可靠性 |
| 10 | **[#28244 🔓](https://github.com/google-gemini/gemini-cli/pull/28244)** — 文档中 `policy-engine` 快速入门示例将 `rm -rf /` 替换为更安全的测试命令 | 防止读者/AI 误执行高危操作 |

---

## 📈 功能需求趋势

从今日活跃 issues 综合提炼，社区关注的功能方向主要集中于以下几条主线：

1. **Agent 可观测性与可靠性**：`/bug` 报告加入 subagent 上下文（#21763）、subagent 轨迹通过 `/chat share` 可见（#22598）、终端 resize 高性能无闪烁渲染（#21924）。社区希望"黑盒 agent"变得可诊断。
2. **Memory / 长期上下文化的工程化**：Auto Memory 重试策略（#26522）、脱敏确定性（#26525）、invalid patch 处理（#26523）形成一组需要系统化重构的 tracking issues（#26516 汇总）。
3. **评估体系扩展**：从行为测试到组件级评估（#24353）、AST 感知的工具探索（#22745/#22746）、失败摘要（#28305）、评估覆盖率报告（#28169）。这是项目迈向工程化迭代的重要方向。
4. **Browser Agent 的鲁棒性**：Wayland 兼容（#21983）、`settings.json` 覆盖生效（#22267）、持久会话自动接管与锁恢复（#22232）。
5. **AST-aware 代码库工具**：探索是否值得集成 tilth/glyph 等工具以减少误读、节省 token（#22745）。
6. **Caretaker Agent 基础设施**：issues 中虽未直接体现，但 PR 端出现了 triage worker 主体循环、Egress 服务、Octokit action handler 等一组连贯工作，构建自动处理 issue/triage 的后台 agent。

---

## 💬 开发者关注点（高频痛点）

- **Subagent 易挂起/状态错报**：generalist 与 codebase_investigator 都存在"未真正完成但报告 GOAL"或"长时间无响应"的问题（#21409、#22323），这是当前最一致的痛点反馈。
- **`/bug` 报告信息缺失**：缺失 subagent 内部行为导致用户难以自助诊断（#21763）。
- **Shell / 终端层交互脆弱**：`Waiting input` 假死（#25166）、外部编辑器退出后终端破坏（#24935）、emoji 截断乱码（#28224）、终端 resize 闪烁（#21924）。
- **工具数量上限**：~400 个工具触发 400 错误（#24246），对 MCP + 多扩展用户是硬限制。
- **Auto Memory 反复处理同一份低信号会话**：缺少"已处理"语义，导致 inbox 持久膨胀（#26522、#26523）。
- **安全/合规面收紧**：SSRF（#28112）、OAuth keep-alive 与 CVE-2026-48931 兼容（#28103）、transcript 脱敏确定性（#26525）、文档中危险示例替换（#28244）——都在往纵深防御方向推进。
- **Windows 扩展更新竞态**：文件锁过早释放引发 abort（#27200）。

---

> 📅 报告生成时间：2026-07-08 ｜ 数据源：[google-gemini/gemini-cli](https://github.com/google-gemini/gemini-cli)

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

<think>The user wants me to generate a daily report for GitHub Copilot CLI community dynamics for 2026-07-08. Let me analyze the data provided:

1. **Releases**: 
   - v1.0.69 (2026-07-07) - with changes about sandbox policy labeling, plugin extensions reload, /plugins dashboard
   - v1.0.69-3 - bypass sandbox for built-in file edits, web_fetch sandbox policy compliance

2. **Issues**: 28 issues total, mostly updated in the last 24 hours. Let me identify the most important ones:
   - #53 - Most reacted issue, about CLI commands breaking workflows (75 likes, 37 comments)
   - #2643 - preToolUse hook issue
   - #3123 - /research can't write reports
   - #2729 - /delegate command ignoring specified branches
   - #3440 - session.disconnect() not killing stdio MCP processes (CLOSED)
   - #4053 - TUI hang on NFS/GPFS
   - #4055 - Copilot becoming unstable (French user)
   - #4054 - /resume broken for non-git sessions
   - #3954 - explore tool hardcoding model
   - #3604 - Windows 1252 encoding issues
   - #4038 - Non-interactive mode MCP issue
   - #4056 - Project-scoped extension canvases not routable
   - #4051 - Random text in input field
   - #4050 - ask_user tool Ctrl-G support
   - #4049 - Docker stdio MCP server duplication
   - #4048 - Skills not invocable from plugins
   - #4047 - Custom agent reverts to Default
   - #4046 - Sandbox system requirement docs
   - #4044 - Branch prefix control (CLOSED)
   - #4045 - Ctrl+V image paste repeat
   - #4035 - Voice installer 401 error
   - #4036 - Desktop notifications suppressed
   - #4037 - BYOK for ACP server mode
   - #4039 - Enterprise plugin sync issue
   - #4041 - web_fetch IPv4-only sandbox issue
   - #4042 - Interactive input variables for plugins
   - #4043 - Model picker UI issue

3. **PRs**: 0 in the last 24 hours

Let me categorize:
- High priority (most comments/likes): #53
- Active bugs being discussed
- New bugs in latest version
- Feature requests

Let me now structure the report properly. Since the user asked for 10 important PRs but there are 0 PRs, I'll need to note that. Let me focus on what's available.

For the 10 most important issues, I'll select based on:
- # of comments/likes
- Severity of the issue
- Recency
- Impact on users

Top 10 Issues:
1. #53 - Highest engagement (75 likes, 37 comments) - Community-built alternatives
2. #4055 - Copilot free tier instability (critical user impact)
3. #4053 - TUI hang on NFS/GPFS (new, technical)
4. #4054 - /resume broken for non-git sessions (new, common use case)
5. #4056 - Project-scoped extension canvases not routable (new)
6. #4049 - Docker MCP server duplication (v1.0.68 bug)
7. #4048 - Plugin skills not invocable (plugin ecosystem issue)
8. #4047 - Custom agent reverts to Default (user experience)
9. #4041 - web_fetch IPv4 sandbox issue (networking)
10. #4043 - Model picker UI issue (visible to all users)

Let me also pick some that affect specific areas:
- #4050 - ask_user Ctrl-G support (UX improvement)
- #4038 - Non-interactive mode MCP issue
- #4039 - Enterprise plugin sync
- #4037 - BYOK for ACP server mode

For functionality trends, I can see:
- Plugin ecosystem issues (multiple issues)
- MCP server management issues
- Sandbox feature stability across platforms
- BYOK support
- Model picker/UI improvements
- Custom agent behavior
- File encoding handling

For developer concerns:
- Plugin/skill system stability
- MCP server lifecycle management
- Sandbox feature cross-platform compatibility
- UI/UX polish issues
- File encoding preservation
- Session management

Let me draft the report now.</think>

# GitHub Copilot CLI 社区动态日报

**日期**：2026-07-08
**数据范围**：github.com/github/copilot-cli 过去 24 小时更新

---

## 📌 今日速览

GitHub Copilot CLI 昨日发布 **v1.0.69** 版本，正式引入沙箱策略标签机制、`/plugins` 管理面板以及插件热加载能力；同日社区围绕插件/MCP 生态稳定性掀起一波新 Bug 报告潮，包含 Docker MCP 重复连接、TUI 在 NFS 上的死锁、以及 `/resume` 在非 Git 仓库下完全失效等问题。最受关注的 Issue #53（呼吁恢复旧 CLI 命令）累计已达 75 👍 / 37 评论，社区自建替代方案持续涌现。

---

## 🚀 版本发布

### v1.0.69（2026-07-07）
🔗 [Release 链接](https://github.com/github/copilot-cli/releases)

**核心变更：**
- **沙箱标签语义调整**：内置文件编辑使用 `(sandbox policy)` 徽章取代 `(sandboxed)`，更准确反映其"尽力遵循策略"而非"运行于 OS 沙箱"的实际行为。
- **插件热加载**：无需重启会话即可重新加载已安装的插件扩展。
- **新增 `/plugins` 仪表盘**：集中管理插件启用、配置与生命周期。
- **`web_fetch` 沙箱策略遵守**（v1.0.69-3）：在 `sandbox.allowBypass` 开启时支持一次性审批绕过；内置文件编辑在用户批准后可绕过沙箱。

---

## 🔥 社区热点 Issues

### 1. [#53](https://github.com/github/copilot-cli/issues/53) — 恢复 GitHub Copilot CLI 命令以避免破坏现有工作流
- **热度**：👍 75 · 💬 37（仓库历史最高互动）
- **意义**：自 2025 年 9 月提出至今已逾 9 个月，官方仍未给出明确回应，社区已自行衍生出 `shell-ai` 等多个替代方案。这是衡量 Copilot CLI 与开发者既有生态兼容性的核心议题。

### 2. [#4055](https://github.com/github/copilot-cli/issues/4055) — Copilot 免费版变得不稳定、不一致且危险
- **热度**：1 评论 · 全新
- **意义**：用户（法语）报告免费版出现响应固执、忽略系统提示与持久化记忆等现象，反映出当前模型策略对免费用户的影响正在放大。

### 3. [#4053](https://github.com/github/copilot-cli/issues/4053) — TUI 在 NFS/GPFS 下挂起：SIGCHLD 竞争导致 Tokio 子进程僵死
- **热度**：全新
- **意义**：Linux 环境下 `Loading: N skills` 阶段因 `which gh` 子进程死锁而完全失去响应，属于罕见的并发竞态问题，对企业级 NAS 用户影响严重。

### 4. [#4054](https://github.com/github/copilot-cli/issues/4054) — `/resume` 对所有非 Git 会话失效
- **热度**：全新
- **意义**：因会话元数据中 `repository = '/'`，resume 列表的 Git 过滤门禁将其全部隐藏，构成"先有鸡还是先有蛋"的死锁，对日常非 Git 项目工作流是阻断性 Bug。

### 5. [#4056](https://github.com/github/copilot-cli/issues/4056) — 项目级扩展 canvas 已声明但不可由 `open_canvas` 路由
- **热度**：全新
- **意义**：揭示扩展系统的注册态与运行时路由表存在不一致，影响自定义画布/工作面板的端到端可用性。

### 6. [#4049](https://github.com/github/copilot-cli/issues/4049) — `/new` 与 `/resume` 导致 Docker stdio MCP 服务端进程重复累积
- **热度**：全新 · 影响 v1.0.68
- **意义**：每次会话切换都会泄漏一组 `docker run` 子进程，揭示 stdio MCP 生命周期与 CLI 会话生命周期的解耦缺陷，长期运行将耗尽资源。

### 7. [#4048](https://github.com/github/copilot-cli/issues/4048) — 仓库级自动安装的插件其 Skill 无法通过 `/<name>` 调用
- **热度**：全新
- **意义**：插件可通过自然语言调用但 `/skills` 列表与斜杠命令均不显示，反映 Skill 注册路径在不同安装来源下的不一致。

### 8. [#4047](https://github.com/github/copilot-cli/issues/4047) — 自定义 Agent 选择在会话中途回退至 Default
- **热度**：全新
- **意义**：用户明确选择的自定义 Agent 在后续轮次被默认覆盖，与 agent 切换语义不符，影响多 Agent 工作流的预期行为。

### 9. [#4041](https://github.com/github/copilot-cli/issues/4041) — `web_fetch` 在纯 IPv4 沙箱环境下完全失败
- **热度**：全新
- **意义**：所有 URL 均返回 `TypeError: fetch failed`，暗示网络栈在沙箱/DNS 解析层存在双栈兼容性问题，对受限网络环境用户是阻断性故障。

### 10. [#4043](https://github.com/github/copilot-cli/issues/4043) — `/model` 选择器中上方向键导航时状态栏遮挡输入框
- **热度**：全新
- **意义**：模型选择器作为高频入口的视觉/交互缺陷，影响所有用户的模型切换体验。

---

## 🔧 重要 PR 进展

⚠️ **过去 24 小时内无 PR 更新**。这是值得关注的信号——发布日（v1.0.69）后社区提交的修复 PR 数量为 0，可能意味着：
1. 新 Bug 主要集中在 v1.0.68/69 引入的功能（如 `/plugins` 仪表盘、热加载）上，开发者仍处于"先复现再开 PR"阶段；
2. 维护节奏相对滞后，建议关注 Issue #53 等历史积压问题是否会随新版发布得到批量治理。

---

## 📈 功能需求趋势

从过去 24 小时的 Issue 分布可以提炼出以下社区热点方向：

| 方向 | 代表 Issue | 社区诉求 |
|------|------------|----------|
| **插件 / Skill 生态治理** | #4048、#4056、#4039、#4042 | 插件安装来源（仓库级/企业级/市场）行为统一；交互式变量 `${input:...}` 支持；canvas 路由 |
| **MCP 服务端生命周期管理** | #4049、#4038、#3440 | `/new`/`/resume` 下的进程清理；stdio 子进程在 `session.disconnect()` 后正确终止 |
| **沙箱特性跨平台稳定化** | #4046、#4041、#4053 | Windows/Linux 不同内核版本下的行为对齐；纯 IPv4 网络兼容；NFS 等慢文件系统 |
| **BYOK / 自定义模型** | #4037、#3954 | ACP 服务端模式下支持 BYOK；`explore` 等内建工具不再硬编码 `gpt-5.4-mini` |
| **TUI / 终端交互打磨** | #4051、#4043、#4045、#4050 | 输入框渲染异常、模型选择器遮挡、长答案 `$EDITOR` 调用、图片粘贴防抖 |
| **会话与 Agent 状态一致性** | #4054、#4047、#2729 | `/resume` 对非 Git 会话的可达性；自定义 Agent 不被回退；`/delegate` 正确读取源分支 |

---

## 💡 开发者关注点

综合 Issue 反馈，开发者当前最集中的痛点可以归纳为以下五类：

1. **🔄 状态机碎片化**：`/new`、`/resume`、`session.disconnect()` 三类操作与 MCP 进程、Skill 缓存、Agent 选择之间的状态传播不一致，是当前 Bug 报告的最密集来源。
2. **🧩 插件/MCP 抽象尚未稳定**：插件的"声明—注册—路由"链路在仓库级、企业级、用户级三种安装来源下表现分裂（#4048、#4039、#4056），开发者难以构建可移植的扩展。
3. **🛡️ 沙箱策略粒度粗糙**：v1.0.69 重新标注 `(sandbox policy)` 表明团队已意识到当前"非黑即白"沙箱语义不够精准，但跨平台（Windows 特定 Build）、纯 IPv4 网络等边缘场景仍暴露稳定性问题（#4046、#4041）。
4. **🤖 模型选择可见性不足**：`/model` 选择器存在 UI 遮挡（#4043），且内建工具（`explore`）仍硬编码特定模型，削弱了 BYOK 与自定义模型路线的实际价值（#3954、#4037）。
5. **📜 兼容性债**：`/research` 写文件失败（#3123）、Windows-1252 编码被强转 UTF-8（#3604）、`/delegate` 分支参数被忽略（#2729）——这些"小坑"虽不致命，但在生产工作流中频繁触发，累积影响开发者对工具稳定性的信任。

---

> 📊 **数据快照**：过去 24 小时共 28 条 Issue 更新，0 条 PR 更新；新建/更新 Issue 中涉及 v1.0.69 回归的有 4 条，建议在下一次发版前优先验证 `/plugins` 仪表盘与插件热加载路径。

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

<think>The user wants me to generate a daily report for Kimi Code CLI community dynamics based on GitHub data from 2026-07-08. Let me analyze the data provided:

1. No new releases in the past 24 hours
2. Only 1 issue updated in the past 24 hours: #1604 about Figma MCP Support
3. No new pull requests in the past 24 hours

Given that there's very limited data (only 1 issue updated), I need to be honest about this in the report. I shouldn't fabricate information or fill in with made-up issues/PRs. The user asked me to pick 10 issues and 10 PRs, but there aren't 10 of either. I should be transparent about this limitation.

Let me create an honest report that:
1. Acknowledges the limited activity
2. Reports on the single issue that was updated
3. Notes the lack of releases and PRs
4. Provides some analysis based on what's available

I should write this in clear, professional Chinese suitable for technical developers.</think>

# Kimi Code CLI 社区动态日报

**日期：** 2026-07-08
**数据来源：** github.com/MoonshotAI/kimi-cli

---

## 📌 今日速览

今日社区活跃度较低，**过去 24 小时内仅有 1 条 Issue 被更新，无新版本发布，也无新 PR 提交**。值得关注的是，Issue #1604（Figma MCP 支持请求）在沉寂数月后被重新激活并引发了新讨论，暗示该项目正逐步探索对 Figma 等设计协作工具的集成可能性。

---

## 🚀 版本发布

⚠️ **无新版本发布。** 建议关注 [Releases 页面](https://github.com/MoonshotAI/kimi-cli/releases) 获取最新动态。

---

## 🔥 社区热点 Issues

由于过去 24 小时内仅 1 条 Issue 被更新，无法筛选出"10 个最值得关注"的 Issues。以下是今日更新的全部 Issue：

### 1. #1604 - Figma MCP 支持请求
- **链接：** https://github.com/MoonshotAI/kimi-cli/issues/1604
- **状态：** OPEN
- **作者：** @maoxian-1
- **创建时间：** 2026-03-27
- **今日互动：** +1 条评论
- **点赞数：** 👍 2

**为什么值得关注？**
该 Issue 提出支持 [Figma MCP](https://www.figma.com/mcp-catalog/) 的功能需求。Figma MCP 目前需要预注册才能使用，用户希望 Kimi CLI 能原生集成，从而打通"设计稿 → 代码生成"的工作流。在沉寂 3 个多月后今日重新获得关注，说明社区对**设计工具与 AI 编码助手联动**的需求正在升温，这可能预示着未来 CLI 在前端开发场景中的能力扩展方向。

---

## 🔧 重要 PR 进展

⚠️ **过去 24 小时内无任何 PR 更新。** 当前活跃 PR 列表为空。

---

## 📈 功能需求趋势

基于目前可见的 Issue 数据，虽然样本量有限，但仍可观察到一个明显趋势：

| 趋势方向 | 代表 Issue | 说明 |
|---------|-----------|------|
| **设计工具集成（MCP 生态）** | #1604 | 开发者希望 CLI 能够接入更多 MCP Server（如 Figma），扩展多模态协作能力 |
| **预注册 / 凭据管理优化** | #1604 | 涉及第三方服务的预注册流程，提示用户在 MCP 集成的"开箱即用"体验上仍有改进空间 |

**观察结论：** 单一 Issue 尚不足以得出全面趋势，但 MCP（Model Context Protocol）生态的扩展可能是当前社区的一个潜在关注点。

---

## 💬 开发者关注点

从 Issue #1604 的反馈中可总结出以下几点：

1. **第三方工具集成的摩擦点**  
   开发者对 Figma MCP 的预注册流程感到不便，希望 CLI 层面能提供更平滑的接入体验。

2. **跨工具协作工作流**  
   用户期望 CLI 不仅是一个编码工具，更是一个**连接设计、文档、代码的统一入口**。Figma MCP 的需求正是这一愿景的体现。

3. **MCP 生态扩张信号**  
   即便仅凭一条 Issue，"Figma MCP" 这一关键词的出现本身，就反映了 MCP 协议正在从概念走向具体工具集成，社区开始主动提出与主流 SaaS 工具对接的诉求。

---

## 📊 今日数据总览

| 指标 | 数量 |
|------|------|
| 新版本发布 | 0 |
| Issue 更新 | 1 |
| 新增评论 | 1 |
| PR 更新 | 0 |
| 新增点赞 | 0 |

---

> **分析师备注：** 今日为典型的"低活跃日"，可能与项目处于版本稳定期或开发者周末休整有关。建议关注接下来 1-2 周的活跃度变化，以判断 MCP 相关集成是否会形成更明确的社区共识。

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

<think>The user wants me to generate a Chinese daily report for the OpenCode community based on GitHub data from 2026-07-08. Let me analyze the data carefully and structure the report according to the requested sections.

Let me analyze the data:

1. **Releases**: v1.17.15 - bugfixes for Z.ai context-window overflow errors and config directory handling, desktop improvements for model details tooltips

2. **Issues** (top 30 by comment count shown, all from past 24 hours update):
- #7030: Ollama qwen2.5-coder tool calls not creating files (23 comments, 24 thumbs) - CLOSED
- #25840: Desktop plugin list not showing (12 comments) - CLOSED
- #17052: Answer looping (11 comments) - CLOSED
- #17343: Docs search doesn't work (6 comments) - CLOSED
- #21108: Unscrollable in VSCode (6 comments) - CLOSED
- #15475: Plan mode can't answer questions directly (6 comments, 18 thumbs) - CLOSED
- #24709: Bad Request error (5 comments) - CLOSED
- #9875: GetThreadDescription error on Windows (5 comments) - CLOSED
- #19268: Web mode crash (5 comments) - CLOSED
- #15023: session-list empty (5 comments) - CLOSED
- #21728: prompt_async overriding agent (4 comments) - CLOSED
- #26133: Japanese translation bug (4 comments) - CLOSED
- #26118: Plugin file refresh hook (4 comments, feature) - CLOSED
- #25912: Google Vertex AI support (3 comments, feature) - CLOSED
- #26157: Homepage search not working in zh/jp locales (3 comments) - CLOSED
- #26166: Desktop keeps summarizing (3 comments) - CLOSED
- #25253: Clipboard fails in tmux (3 comments, 3 thumbs) - CLOSED
- #26129: server_is_overloaded not retried (3 comments) - CLOSED
- #26107: Free models thinking crashes (3 comments) - CLOSED
- #26283: Ctrl+V not working on Windows (2 comments) - CLOSED
- #26281: IDE navigation bug (2 comments) - CLOSED
- #18906: Auto start server (2 comments, feature) - CLOSED
- #26181: Title generation fails (2 comments) - CLOSED
- #26172: Last session switch keybinding (2 comments, feature) - CLOSED
- #26165: Direct project URL not adding to sidebar (2 comments) - CLOSED
- #26160: Auto Image Read feature (2 comments) - CLOSED
- #26085: Electron sidecar npm plugins fail (2 comments, 2 thumbs) - CLOSED
- #35841: TUI file index should refresh (2 comments) - OPEN, today!
- #26073: kimi k2.6 usage wrong (2 comments) - CLOSED
- #26131: Parallel tool calls malformed JSON (2 comments) - CLOSED

Notable: Only ONE open issue today (#35841), the rest are all closed. This is interesting - looks like the maintainers closed a massive batch of issues. Looking at the data, all issues were created between Jan-May 2026 and updated/closed today (July 8). This looks like a major cleanup/closure batch.

3. **PRs** (top 20 by comment count, all undefined comments shown):
- #35844 [OPEN]: feat: add browser tool powered by browser-use
- #35842 [OPEN]: fix(app): keep session routes within layouts
- #35838 [OPEN]: fix(tool): decode webfetch bodies using declared charset via iconv-lite
- #35817 [CLOSED]: fix(core): preserve provider metadata namespaces
- #34123 [OPEN]: fix(tui): add plain text paste (Ctrl+Alt+V)
- #35755 [OPEN]: fix(core): wait for plugin readiness
- #35835 [OPEN]: fix(ui): preserve code spans adjacent to tildes
- #35837 [CLOSED]: test(core): fix mutable plugin fixture
- #35836 [OPEN]: feat(i18n): complete Portuguese (Brazil) translation
- #35833 [OPEN]: fix(opencode): unignore build-node.ts in gitignore
- #35826 [OPEN]: fix(cli): elect one managed daemon
- #35793 [CLOSED]: refactor(schema): apply session review decisions
- #26840 [CLOSED]: fix(cli): track and display subagent session output
- #35812 [OPEN]: fix(core): preserve AI SDK provider metadata
- #35832 [CLOSED]: test(core): simplify runner test fixtures
- #35777 [OPEN]: fix(core): refresh stale @latest npm package cache
- #35723 [CLOSED]: fix(opencode): unignore build-node.ts in gitignore (duplicate, closed)
- #35829 [OPEN]: feat(app): add inline file browser tabs
- #35818 [OPEN]: fix(core): skip non-vcs location watcher
- #35820 [CLOSED]: fix(core): resume sessions after restart

Many PRs related to provider metadata, web content charset handling, plugin loading, etc.

Let me now structure the report:

**今日速览**: 
- v1.17.15 released with critical bugfixes (Z.ai context overflow classification, config dir handling, desktop model tooltips)
- Massive issue cleanup - many old issues closed today
- Active PR work on browser tool, metadata preservation, TUI improvements, and internationalization

**版本发布**:
v1.17.15 with bugfixes for Z.ai context-window overflow errors, config directory reading, and desktop model details tooltips

**社区热点 Issues** (top 10):
1. #7030 - Ollama qwen2.5-coder tool calls (24 thumbs, 23 comments) - Most popular
2. #15475 - Plan mode direct answer (18 thumbs) - High engagement
3. #25840 - Desktop plugin list not showing
4. #17052 - Looping answers
5. #25253 - tmux clipboard (3 thumbs)
6. #17343 - Docs search
7. #26133 - Japanese translation
8. #26085 - Electron npm plugins fail (2 thumbs)
9. #35841 - TUI file refresh (OPEN, today only - noteworthy)
10. #24709/#9875/#19268 - Various bugs

**重要 PR 进展**:
1. #35844 - Browser tool powered by browser-use (major new feature)
2. #34123 - Plain text paste Ctrl+Alt+V
3. #35838 - webfetch charset via iconv-lite (fixes windows-* charset pages)
4. #35836 - Brazilian Portuguese complete translation
5. #35829 - Inline file browser tabs (V2 review pane)
6. #35755 - Plugin readiness barrier
7. #35826 - Elect one managed daemon
8. #35812/#35817 - Provider metadata preservation
9. #35777 - Refresh stale @latest npm cache
10. #35820 - Resume sessions after restart

**功能需求趋势**:
From issues I can see:
- Provider integration: Google Vertex AI (#25912), Z.ai support, gpt-5-nano fallback issues
- IDE integration: VSCode/Cursor issues, navigation
- Desktop features: Auto-start server, file browser tabs, image preprocessing
- Internationalization: Japanese translations, Portuguese, locale-specific search
- Plugin ecosystem: File refresh hooks, npm plugin loading issues
- Browser automation: New browser tool feature
- Multi-session: Last session switch keybinding

**开发者关注点 (pain points)**:
- Provider error handling (server_is_overloaded, context overflow, rate limiting)
- Cross-platform compatibility (Windows, tmux, VSCode integrated terminal)
- Plugin system robustness (Electron sidecar issues, npm @latest cache)
- JSON parsing in parallel tool calls
- Search functionality across different locales

Now let me write the report in Chinese, keeping it concise and professional.</think>

# OpenCode 社区动态日报
**📅 2026-07-08**

---

## 1. 今日速览

今日 OpenCode 发布 **v1.17.15** 版本,聚焦核心错误处理与桌面端体验改进;社区方面出现一次大规模 Issue 批量清理,大量积压问题被集中关闭;同时 Pull Request 活跃度极高,在浏览器工具、Provider 元数据保真、TUI 体验与国际化方向均有重要进展。

---

## 2. 版本发布

### 🔖 v1.17.15

**Core 修复**
- **Z.ai 上下文溢出错误归类优化**(@fengjikui):更准确地识别 Z.ai 模型的上下文窗口溢出错误,使超长请求能暴露正确的失败模式,便于上层重试与降级。
- **配置文件读取容错**:当配置目录不可用时,读取配置文件的行为更优雅,不再硬崩溃。

**Desktop 改进**
- 恢复 Model Picker 中**模型详情 tooltip**(该功能曾在 Electron 重构后丢失)。

> 这是一个典型的"小而精"补丁版本,主要服务于外部 Provider 适配与桌面端 UI 细节回填。

---

## 3. 社区热点 Issues(Top 10)

| 排名 | Issue | 关注度 | 为何重要 |
|---|---|---|---|
| 🥇 | [#7030](https://github.com/anomalyco/opencode/issues/7030) Ollama (qwen2.5-coder) 工具调用假执行 | 👍24 · 💬23 | 影响最广,**工具调用显示成功但文件未落盘**;`/init` 也无法生成 `AGENTS.md`,直接影响本地模型用户的工作流,👍 量最高 |
| 🥈 | [#15475](https://github.com/anomalyco/opencode/issues/15475) Plan 模式提问应直达 Build Agent | 👍18 · 💬6 | UX 痛点高;Plan 模式下的多选题被迫再走一轮 Plan Agent,`ctrl+x a` 快捷键失效,被压抑的核心交互诉求 |
| 🥉 | [#25840](https://github.com/anomalyco/opencode/issues/25840) Desktop v14.37 插件列表缺失 | 💬12 | Electron 重构后遗症;CLI 正常而桌面端异常,反映桌面端对插件加载路径的处理尚未完全对齐 |
| 4 | [#17052](https://github.com/anomalyco/opencode/issues/17052) 回答无限循环重复 | 💬11 | 失控循环只能按 Esc 两次强制退出,涉及流式生成结束条件判定 |
| 5 | [#17343](https://github.com/anomalyco/opencode/issues/17343) Docs 站内搜索失效 | 💬6 | 文档站控制台报错;影响整个 docs.opencode.ai 的可检索性 |
| 6 | [#21108](https://github.com/anomalyco/opencode/issues/21108) 在 VSCode/Cursor 终端中内容不可滚动 | 💬6 | TUI 在外部终端模拟器下的输入/输出边界问题 |
| 7 | [#25253](https://github.com/anomalyco/opencode/issues/25253) tmux 下 OSC 52 剪贴板包裹逻辑错误 | 👍3 · 💬3 | 当 `allow-passthrough=off` 时强制套 tmux DCS 外壳,破坏原生剪贴板协议 |
| 8 | [#26133](https://github.com/anomalyco/opencode/issues/26133) 日语 "ToDo" 列表数字倒置翻译 | 💬4 | 国际化文本细节:`1/4` 与 `4/1` 的语序问题 |
| 9 | [#26085](https://github.com/anomalyco/opencode/issues/26085) Electron sidecar 加载 npm 插件失败 | 👍2 · 💬2 | `@opencode-ai/plugin` 被解析为 `@local` 版本,Dockerless 桌面端插件生态受阻 |
| 10 | [#35841](https://github.com/anomalyco/opencode/issues/35841) ⭐TUI 文件索引(`@`)需支持手动刷新 | 💬2 · **OPEN** | **今日唯一未关闭的新 Issue**;AI 生成或外部新增的文件无法实时出现在补全列表中 |

> 📌 **观察**:今日绝大多数高活跃 Issue 状态被刷新为 **CLOSED**,疑似维护者进行了一次系统性巡检与关闭;`#35841` 是当日诞生的开放 Issue,后续值得跟踪。

---

## 4. 重要 PR 进展(Top 10)

### 🆕 新功能
| PR | 功能 |
|---|---|
| [#35844](https://github.com/anomalyco/opencode/pull/35844) ⭐**feat: add browser tool powered by browser-use** | 引入内置 `browser` 工具,Agent 可开页、点击、执行 JS、抓取真实浏览器内容——这是 OpenCode 迈向"全栈 Agent"的关键能力 |
| [#35829](https://github.com/anomalyco/opencode/pull/35829) feat(app): add inline file browser tabs | V2 Review 面板新增内联 Open File Tab、项目树与 TanStack 支持的文件搜索,统一 Session / Review / Preview 三种标签页 |
| [#35836](https://github.com/anomalyco/opencode/pull/35836) feat(i18n): 完善葡语(BR)翻译 | UI 补 23 键、App 补 142 键,达成与英文完全对等 |
| [#34123](https://github.com/anomalyco/opencode/pull/34123) fix(tui): 添加纯文本粘贴 | `prompt.paste_plain` 命令绑定 `Ctrl+Alt+V`,直接读取剪贴板文本并插入,绕开富文本/格式粘贴问题 |

### 🛠️ Bug 修复
| PR | 修复内容 |
|---|---|
| [#35838](https://github.com/anomalyco/opencode/pull/35838) `webfetch` 使用 `iconv-lite` 按声明 charset 解码 | 解决 `windows-1252` 等非 UTF-8 页面乱码,关闭 #35752 |
| [#35812](https://github.com/anomalyco/opencode/pull/35812) ⭐AI SDK provider 元数据保真 | 在降级到 AI SDK 时保留 reasoning、tool-call replay 等 Provider 特有延续数据(如 thought signatures、provider item IDs) |
| [#35755](https://github.com/anomalyco/opencode/pull/35755) 等待插件就绪屏障 | V2 Session 在解析 Agent 前等待插件加载完毕,失败时抛 `Session.AgentNotFoundError`,提升插件竞争场景下稳定性 |
| [#35826](https://github.com/anomalyco/opencode/pull/35826) 选举唯一托管守护进程 | 启动时获取 channel-scoped 进程锁,落选者直接退出,避免重复注册;为 #35646 的前置依赖 |
| [#35777](https://github.com/anomalyco/opencode/pull/35777) 刷新过期 `@latest` npm 包缓存 | `Npm.add` 在 `node_modules/{name}` 存在时短路导致 `@latest` 配置不更新,本次修复后与 #25293 联动 |
| [#35833](https://github.com/anomalyco/opencode/pull/35833) `build-node.ts` 不应被 `gitignore` | `script/build-*.ts` 通配误伤已提交的 `build-node.ts`,导致源码仓库缺失 |

> 🔍 **可看出 PR 主线**:V2 会话重构收尾、Provider 适配层保真、桌面/CLI 一致性、国际化与开发者体验打磨。

---

## 5. 功能需求趋势

从今日活跃 Issue 中可提炼以下社区诉求主线:

| 方向 | 代表 Issue | 社区诉求 |
|---|---|---|
| **🌐 多 Provider 支持** | [#25912](https://github.com/anomalyco/opencode/issues/25912) Google Vertex AI;v1.17.15 Z.ai 错误处理 | OpenCode 正成为"多 Provider 编排器",新增边缘 Provider 支持与错误归类是高频诉求 |
| **🧠 小模型/标题生成稳定性** | [#26181](https://github.com/anomalyco/opencode/issues/26181) gpt-5-nano 回退失败; [#26107](https://github.com/anomalyco/opencode/issues/26107) 免费模型崩溃 | 围绕 `small_model` / `title` 的 fallback 链路与"Provider did not respond" 重试逻辑 |
| **🖥️ Desktop 体验一致性** | [#25840](https://github.com/anomalyco/opencode/issues/25840) 插件缺失; [#26281](https://github.com/anomalyco/opencode/issues/26281) IDE 导航; [#26166](https://github.com/anomalyco/opencode/issues/26166) 过度总结 | Electron 重构后 CLI / Desktop 行为一致性回补 |
| **🔌 插件生态** | [#26085](https://github.com/anomalyco/opencode/issues/26085) npm peer dep; [#26118](https://github.com/anomalyco/opencode/issues/26118) 文件刷新 hook | 插件加载可靠性 + 暴露更多插件可编程接口 |
| **🌍 国际化 & 文档站** | [#26133](https://github.com/anomalyco/opencode/issues/26133) 日语; [#26157](https://github.com/anomalyco/opencode/issues/26157) 文档站搜索限英文; PR #35836 葡语 | 多语言文案 + 多语种搜索的"长尾"治理 |
| **🤖 Agent 自动化扩展** | [#35844](https://github.com/anomalyco/opencode/pull/35844) browser 工具; [#26160](https://github.com/anomalyco/opencode/issues/26160) 自动图片读取 | 从"代码编辑"走向"通用 Agent"的能力补齐 |
| **⌨️ 快捷键与导航** | [#26172](https://github.com/anomalyco/opencode/issues/26172) 上一会话快捷; [#26283](https://github.com/anomalyco/opencode/issues/26283) Win Ctrl+V | 终端键盘效率优化 |

---

## 6. 开发者关注点(高频痛点)

1. **🔁 流式生成/工具调用的边界处理**
   并行同类型工具调用 JSON 合并丢闭合 `}` (#26131)、回答无限循环 (#17052)、`prompt_async` 静默覆盖 agent (#21728)——**流式解析与并发合并**仍是稳定性重灾区。

2. **🧯 Provider 错误归类与重试**
   `server_is_overloaded` 未被 Error 包装路径触发 (#26129)、`Bad Request` 无法继续会话 (#24709)、`completions < reasoning` 用量错乱 (#26073)。错误模型标准化、覆盖全异常路径是核心痛点。

3. **🪟 跨平台/终端

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

<think>
Let me analyze the GitHub data for Qwen Code (qwen-code) for 2026-07-08 and generate a comprehensive Chinese daily report.

Key observations from the data:

**Releases:**
- v0.19.7-nightly.20260708.394c1a289
- v0.19.6-preview.0
- v0.19.7

**Top Issues (by comment count):**
1. #6378 - RFC: Support multiple workspaces in one qwen serve daemon (19 comments)
2. #6264 - /review skill consume large amount of tokens (8 comments)
3. #6384 - hard limit: 0 when env-configured model (5 comments)
4. #6312 - reduce per-session overhead on daemon (5 comments)
5. #6298 - Shell tool fails on Windows (5 comments, CLOSED)
6. #6265 - tool_search invalidates LLM server KV-cache (5 comments, CLOSED)
7. #6414 - vscode qwen code Failed to connect (4 comments)
8. #6318 - Unable to /rewind after /compress (4 comments, CLOSED)
9. #5176 - sub-agent max parallel count (4 comments, CLOSED)
10. #6488 - feat: add MessageDisplay hook event (3 comments)

**Top PRs:**
1. #6457 - feat(qqbot): group message handling
2. #6498 - Show permission mode badge in footer
3. #6502 - fix(session): bridge broken parentUuid chains
4. #6495 - support webhook-triggered channel tasks
5. #6489 - add MessageDisplay hook
6. #6482 - Bound replay snapshot history
7. #6456 - add working_dir to the Agent tool
8. #6500 - refine markdown table interactions
9. #6421 - bound the live streaming-table pending height
10. #6431 - surface workspace memory task error details

Let me now structure the report:

1. 今日速览 - Qwen Code 0.19.7 正式发布，重点修复 PR 分类逻辑；社区聚焦多工作空间、token 优化、daemon 性能等议题
2. 版本发布 - v0.19.7 stable, v0.19.6-preview, v0.19.7-nightly
3. 社区热点 Issues - 选取 10 个
4. 重要 PR 进展 - 选取 10 个
5. 功能需求趋势 - 多工作空间、Hooks 事件、Channels 集成、Session 管理、Memory 系统、Sub-agent
6. 开发者关注点 - Token 消耗、平台兼容性、性能、UI 细节

Let me write a professional, technical Chinese report.
</think>
# Qwen Code 社区动态日报 · 2026-07-08

## 📌 今日速览

Qwen Code 今日同时发布 v0.19.7 稳定版、v0.19.6-preview 与 v0.19.7-nightly 三个版本，主要围绕 PR 分流闸门加固、文档与渠道集成展开。社区讨论焦点集中在 **`qwen serve` 多工作空间支持**（#6378）、**token 消耗优化**（#6264、#6384）以及 **session/daemon 鲁棒性** 等长期议题，多个高优先级 P2 Bug 与新 Hook 事件提案并行推进。

---

## 🚀 版本发布

| 版本 | 性质 | 关键变更 |
|------|------|----------|
| **v0.19.7** | 稳定版 | 强化 PR Triage 闸门（#5723），增加批量检测、问题存在性校验与红词模式；review 路由优化 |
| **v0.19.6-preview.0** | 预览版 | 同步文档变更：WeCom 加入 channels 总览（#6490） |
| **v0.19.7-nightly.20260708** | 每日构建 | 跟随 main 分支，与 v0.19.7 保持一致 |

> 注：v0.19.6 渠道集成（WeCom 等）的文档变更被同步到 v0.19.7，反映了"通道生态"作为本阶段产品的重点方向。

---

## 🔥 社区热点 Issues

1. **[#6378] RFC: 单 daemon 多工作空间支持**（评论 19）
   `qwen serve` 长期被设计为"1 daemon = 1 workspace × N sessions"，作者 @doudouOUC 提议打破该假设，向后兼容现有客户端。这是当前讨论度最高的 RFC，可能改变 daemon 架构走向。
   👉 https://github.com/QwenLM/qwen-code/issues/6378

2. **[#6264] `/review` skill 消耗过多 token**（评论 8）
   用户报告该 skill 触发后 token 用量异常，截图显示单次调用消耗显著。需要评估是否能做预算/摘要控制。
   👉 https://github.com/QwenLM/qwen-code/issues/6264

3. **[#6384] hard limit: 0 导致自动压缩失败**（评论 5）
   当通过环境变量配置模型并保留完整默认上下文窗口作为输出时，hard limit 计算为 0，请求在送出前即失败。涉及模型切换与 token 管理的交叉。
   👉 https://github.com/QwenLM/qwen-code/issues/6384

4. **[#6312] 降低 daemon session 创建路径开销**（评论 5）
   `qwen serve` 的 ACP 子进程在共享事件循环上服务多 session，但 `session/new`/`session/load` 反复执行同步 I/O。@doudouOUC 提出的追踪议题，与 #6378 共同构成 daemon 演进方向。
   👉 https://github.com/QwenLM/qwen-code/issues/6312

5. **[#6298] Windows 下 Shell 工具执行失败**（评论 5，🟢 CLOSED）
   `run_shell_command` 在 Windows 上将输出通过 `cat` 管道，而 `cat` 在 cmd.exe 中不可用。属于典型跨平台回归。
   👉 https://github.com/QwenLM/qwen-code/issues/6298

6. **[#6265] `tool_search` 失效 KV-cache**（评论 5，🟢 CLOSED）
   每次延迟工具加载都会重新 `setTools()`，导致 LLM 服务端 KV-cache 命中失效，性能与成本双输。
   👉 https://github.com/QwenLM/qwen-code/issues/6265

7. **[#6414] VSCode 插件无法连接 Qwen Agent**（评论 4）
   错误截图显示连接阶段失败，缺少 `need-information`，需补充日志。
   👉 https://github.com/QwenLM/qwen-code/issues/6414

8. **[#6318] `/rewind` 在 `/compress` 后失效**（评论 4，🟢 CLOSED）
   即使 rewinding 到非压缩位置也被禁止，反映了 compress 与 rewind 状态机未正确解耦。
   👉 https://github.com/QwenLM/qwen-code/issues/6318

9. **[#6488] 新增 `MessageDisplay` Hook 事件**（评论 3）
   当前所有文本相关 Hook（`Stop`、`SubagentStop`）都在整轮结束后才触发，无法在流式输出过程中介入。是 Hook 体系的一次重要能力补全。
   👉 https://github.com/QwenLM/qwen-code/issues/6488

10. **[#5176] 子智能体并发上限与队列化**（评论 4，🟢 CLOSED，👍 1）
    长期诉求：限制 sub-agent 并发数，超出部分进入队列而非超时。本地 LLM 资源受限场景下的核心需求。
    👉 https://github.com/QwenLM/qwen-code/issues/5176

---

## 🛠 重要 PR 进展

1. **[#6457] QQ Bot 群消息 & 定时消息** — 关键词触发、@ 检测、cron-msg-experimental 合并自 #5902 拆分出来的最后一部分。
   👉 https://github.com/QwenLM/qwen-code/pull/6457

2. **[#6498] Footer 始终显示权限模式徽章** — 修复 DEFAULT 模式（"Ask permissions"）下 footer 无指示的视觉歧义。
   👉 https://github.com/QwenLM/qwen-code/pull/6498

3. **[#6502] 修复 session 链断裂时的静默截断** — 以前 `reconstructHistory` 遇到缺失 `parentUuid` 即停止；改为桥接缺失链段。
   👉 https://github.com/QwenLM/qwen-code/pull/6502

4. **[#6495] Webhook 触发 channel 任务** — 外部 webhook POST 到 `qwen serve` 即触发 channel worker 生成并主动投递回复。
   👉 https://github.com/QwenLM/qwen-code/pull/6495

5. **[#6489] `MessageDisplay` Hook 实现** — 配套 #6488，在流式输出过程中持续触发，弥补观察缺口。
   👉 https://github.com/QwenLM/qwen-code/pull/6489

6. **[#6482] 限制 replay snapshot 内存窗口** — 解决长 session 中 replay 缓冲无限增长问题，按序列化字节上限裁剪。
   👉 https://github.com/QwenLM/qwen-code/pull/6482

7. **[#6456] Agent 工具新增 `working_dir` 参数** — 将子智能体绑定到调用方已有的 git worktree 中，防止目录逃逸。
   👉 https://github.com/QwenLM/qwen-code/pull/6456

8. **[#6421] 修复流式表格渲染三大缺陷** — 顶部锁定、卡顿-倾倒、header 闪烁；优化 live streaming-table 的高度边界。
   👉 https://github.com/QwenLM/qwen-code/pull/6421

9. **[#6431] workspace memory 任务错误细节透出** — 失败快照新增 `error.details` 字段，保留 `error.message` 兼容。
   👉 https://github.com/QwenLM/qwen-code/pull/6431

10. **[#6466] OpenAI 流式管道非 SSE 响应检测** — HTTP 200 + `text/html`（如网关拦截页）抛 `NonSSEResponseError` 并附带诊断信息，避免误记为空交互。
    👉 https://github.com/QwenLM/qwen-code/pull/6466

---

## 📈 功能需求趋势

通过对 34 条 Issue 的归类，当前社区最关注的方向呈现出明显的"**多端协同 + 性能与稳定性**"双主线：

| 趋势 | 代表性 Issue/PR | 说明 |
|------|-----------------|------|
| **多 Workspace & 多 Session 管理** | #6378、#6312、#6451（Fleet View） | Daemon 走向"多租户"是当前最显著架构级呼声；UI 层也希望引入 Claude Code 式 Fleet View。 |
| **Channel / 渠道生态扩展** | #6208（WeCom，CLOSED）、#6457（QQ Bot）、#6443（DingTalk 卡片）、#6495（Webhook 触发） | 飞书/钉钉/企微/QQ 全渠道推进，Webhook 作为统一入口的雏形已现。 |
| **Hooks / 事件体系增强** | #6488、#6489 | 从"整轮粒度"演进到"流式 token 粒度"，是 CLI + ACP 双向受益的基础设施。 |
| **Session & Memory 鲁棒性** | #6487、#6449、#6318、#6502、#6419 | 长 session 下的状态重建、记忆索引刷新、worktree 隔离、auto-title 污染等问题集中爆发。 |
| **大文件/PDF/Token 边界** | #6264、#6265、#6384、#6403（CLOSED）、#6408（CLOSED） | 用户越来越频繁地把"大文件 + 多模型切换 + KV-cache"组合在一起用，触发一系列边界 Bug。 |
| **认证与订阅体验** | #6475、#6477、#6428、#6433 | 多为非英语用户（俄语、token-plan 区域）报告的订阅/认证问题，UX 仍是薄弱环节。 |
| **IDE 集成** | #6414、#6446（ACP 权限代理） | VSCode / ACP 链路上的权限交互仍存在断点。 |

---

## 👨‍💻 开发者关注点

从评论密度与已合并/已关闭比例综合看，开发者的核心痛点可归纳为以下四类：

1. **Token 与成本控制**：`/review` skill、延迟工具加载、PDF/大文本读取——任何"看似免费"的功能背后都可能在悄悄放大 token 账单。社区对**显式的预算/限额/缓存机制**呼声强烈（#6264、#6265、#6384、#6408）。

2. **Session 状态机的正确性**：compress / rewind / title / memory / chain 之间的耦合点已成为 Bug 高发区（#6318、#6419、#6487、#6501、#6502）。开发者尤其在意**"静默截断"与"静默丢失"**——错误不暴露比错误本身更危险。

3. **跨平台一致性**：Windows 路径校验、Shell 工具的 `cat` 依赖、VSCode 插件连接异常，#6483 与 #6298 的修复路径表明团队正在系统性补齐。

4. **扩展点的可编程性**：Hook 事件粒度（#6488/6489）、Channel 适配器、sub-agent 工作目录（#6456）、Fleet View（#6451）说明开发者正把 Qwen Code 当作**可被二次编排的运行时**而非封闭 CLI，这种"平台化"诉求与 daemon RFC 形成正反馈。

> 建议关注的下一步信号：#6378 RFC 的最终走向、`MessageDisplay` Hook 的合并时点、以及 v0.19.7 之后下一个 minor 是否会引入 Channel Webhook 统一抽象。

---

*数据来源：github.com/QwenLM/qwen-code · 报告生成时间 2026-07-08*

</details>

---
*本日报由 [Big Model Radar](https://github.com/96loveslife/big_model_radar) 自动生成。*
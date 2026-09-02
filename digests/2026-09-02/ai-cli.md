# AI CLI 工具社区动态日报 2026-09-02

> 生成时间: 2026-09-02 03:54 UTC | 覆盖工具: 8 个

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

<think>The user wants a comprehensive cross-comparison analysis report based on the daily reports from 6 AI CLI tools (Claude Code, OpenAI Codex, Gemini CLI, GitHub Copilot CLI, Kimi Code CLI, OpenCode, jcode, pi). Let me carefully synthesize the information from all of them.

Let me note the data carefully:

1. **Claude Code (Anthropic)**
   - 2 releases (v2.1.257, v2.1.258)
   - 50 issues updated (30 shown)
   - 2 PRs updated
   - Hot topics: Max plan quota (842 comments!), Windows desktop GPU crash, macOS kernel leak, Fable 5.1 model

2. **OpenAI Codex**
   - 1 stable release (v0.152.1) + 5 alphas
   - 50 issues (top 30 shown)
   - ~15+ PRs shown
   - Hot: macOS GPU, Windows app launch, Remote Control thread lock, capacity errors

3. **Gemini CLI**
   - 3 releases (v0.58.0, v0.59.0-preview.0, v0.59.0-nightly)
   - ~16 issues shown
   - ~15+ PRs
   - Hot: Agent hanging, OAuth/MCP security hardening, Auto Memory system

4. **GitHub Copilot CLI**
   - 1 release (v1.0.83-1)
   - 37 issues (top 30 shown)
   - 0 PRs
   - Hot: Vi/Vim mode closed, MCP compat, BYOK, memory leaks

5. **Kimi Code CLI**
   - 1 release (v1.50.0)
   - 5 issues (all closed)
   - 4 PRs
   - Hot: Yolo mode transparency, brand migration to Kimi Code

6. **OpenCode**
   - 1 release (v1.18.26)
   - 50 issues (showing 30)
   - 20 PRs shown
   - Hot: "stale project path" after move/rename (over 70% of issues!)

7. **jcode**
   - 0 releases
   - 50 issues (showing 30)
   - 7 PRs (all from owner)
   - Hot: TUI degradation, macOS regressions, test isolation

8. **pi**
   - 0 releases
   - 50 issues (showing 30)
   - 20 PRs
   - Hot: XDG compliance, multi-Provider, TUI fullscreen

Now let me identify common themes:

**Common Themes Across Multiple Tools:**
1. **Desktop app stability (Windows/macOS)** - Claude Code, OpenAI Codex, Kimi Code CLI, OpenCode all have Windows/macOS desktop stability issues
2. **MCP (Model Context Protocol) ecosystem** - All tools dealing with MCP integration issues (initialization, OAuth, configuration)
3. **Quota/billing transparency** - Claude Code (#38335), OpenAI Codex (Pro Lite)
4. **TUI/UI experience** - All have TUI issues (clipboard, scrolling, themes)
5. **Multi-Provider compatibility** - Especially pi, Gemini CLI, jcode
6. **Session management bugs** - OOM, leaks, stale paths (OpenCode especially)
7. **Authentication issues** - OAuth client version, Claude/Google auth
8. **Sub-agent reliability** - All have issues
9. **Memory/persistence issues** - Auto Memory (Gemini), Sidecar (jcode), session file (pi)
10. **Windows-specific issues** - PowerShell, GPU crashes, Bash tool orphans
11. **macOS-specific issues** - Keychain, kernel leaks, Computer Use
12. **Security hardening** - OAuth RFC 9207, MCP server trust, extension permissions

**Differentiation:**
- Claude Code: Enterprise focus, billing/quota concerns dominate
- OpenAI Codex: Heavy on Remote Control, app-server architecture
- Gemini CLI: Heavy on security hardening, multi-agent
- GitHub Copilot CLI: BYOK and MCP ecosystem
- Kimi Code CLI: Smaller community, brand migration
- OpenCode: Project lifecycle management is the biggest pain
- jcode: TUI experience focus, test infrastructure
- pi: Multi-Provider compatibility, XDG compliance

**Activity/Maturity:**
- Most active by issue count: OpenCode (50), jcode (50), pi (50), Claude Code (50), OpenAI Codex (50) - all at 50 cap
- Most active by PR count: pi (20), OpenCode (20), OpenAI Codex (15+)
- Releases: Most tools shipping daily/weekly
- Claude Code's #38335 with 842 comments is exceptional - single biggest pain point
- OpenCode's "stale path" cluster is unusual - same root cause for 70%+ of issues

**Trend Signals:**
- All tools are pivoting to multi-model support
- MCP becoming de facto standard
- Security hardening is top of mind for all
- Desktop app stabilization is universal pain
- TUI polish becoming table stakes
- Sub-agent orchestration is the new battleground

Let me write a concise, professional Chinese report with data support. I'll structure it according to the 6 sections requested.

Let me draft this report. I should use the thinking block first as instructed.</think>

# 2026-09-02 AI CLI 工具生态横向对比分析

**样本范围**：Claude Code、OpenAI Codex、Gemini CLI、GitHub Copilot CLI、Kimi Code CLI、OpenCode、jcode、pi 共 8 款主流 AI CLI 工具
**数据口径**：GitHub Issues / PRs / Releases 过去 24 小时动态

---

## 一、生态全景

2026 年 9 月初，AI CLI 工具生态已从"功能追赶期"进入**"稳定性与生态互操作期"**——所有主流工具的版本号均进入 1.x 后期或 2.x 阶段，单日版本发布成为常态，PR 流入量稳定在 15-20 条/工具量级。当前最显著的特征是**社区讨论的同质化**：跨工具的桌面端崩溃、MCP 兼容性、限流可见性、Sub-agent 鲁棒性四大议题在 8 款工具中至少有 6 款同步暴露，反映行业进入"全栈工程化深水区"。与此同时，**多 Provider 适配与 MCP 生态成熟度**正在取代"模型选型"成为新的核心差异化竞争点。

---

## 二、各工具活跃度对比

| 工具 | Issues 更新 | PR 更新 | 今日 Release | 关键特征 |
|------|------------|---------|-------------|---------|
| **Claude Code** | 50（Top30 展示） | 2 | 2（v2.1.257、v2.1.258） | 出现单 issue 842 评论极端值 |
| **OpenAI Codex** | 50（Top30 展示） | 15+ | 1 稳定 + 5 alpha（v0.152.1 / v0.153.0-alpha.1~5） | alpha 滚动预热，发布密度最高 |
| **Gemini CLI** | ~30 | 15+ | 3（v0.58.0、v0.59.0-preview、nightly） | 同步进入 0.59 开发周期 |
| **GitHub Copilot CLI** | 37 | **0** | 1（v1.0.83-1） | **PR 流入为零**，社区进入静默期 |
| **Kimi Code CLI** | 5（全部关闭） | 4 | 1（v1.50.0） | 体量最小但节奏稳定 |
| **OpenCode** | 50（Top30 展示） | 20 | 1（v1.18.26） | PR 数量并列最高 |
| **jcode** | 50（Top30 展示） | 7（均为 owner） | 0 | 单人维护特征明显 |
| **pi** | 50（Top30 展示） | 20 | 0 | **PR 流入并列最高**，工程化程度领先 |

**观察**：
- **PR/Issue 比值**反映维护负载：pi（0.40）、OpenCode（0.40）> Gemini CLI（0.50）> OpenAI Codex（0.30）> Claude Code（0.04，仓库 PR 极少）≈ Copilot CLI（0）
- **GitHub Copilot CLI 是唯一当日 PR 流入为 0 的工具**，社区进入需求沉淀期
- **Kimi Code CLI** 体量虽小，但 PR/Issue 比最高（0.80），团队响应效率领先

---

## 三、共同关注的功能方向

下表汇总跨工具共性诉求（出现 ≥3 款工具的高频议题）：

| 方向 | 涉及工具 | 具体诉求 |
|------|---------|---------|
| **🪟 桌面端稳定性** | Claude Code、OpenAI Codex、Copilot CLI、OpenCode | Windows GPU 进程崩溃、MSIX 启动失败、App 重定向错误（#40700）、macOS 内核泄漏（#66020）。几乎所有桌面端产品均在 GPU/打包/路径处理上踩坑 |
| **🔌 MCP 生态成熟化** | Claude Code、Copilot CLI、OpenAI Codex、jcode、pi | MCP OAuth Refresh Token 未自动使用（Copilot #4203）、initialize 协议版本不兼容（#4525）、缺 User-Agent（#4681）、配置路径漂移（Codex #26011）、tool calling thought_signature（Gemini #6996） |
| **📊 限流/计费透明度** | Claude Code、OpenAI Codex | Claude #38335（842 评论，指控额度静默下调）、Codex Pro Lite 周配额瞬时清零（#41969）。付费用户的"钱包感知"问题已升级为共性痛点 |
| **🪝 Hooks / Permissions 回归** | Claude Code、Copilot CLI、OpenAI Codex | ExitPlanMode 自 2.1.199 失效（Claude #74256）、Windows ACL 下 deny-read 被绕过（Codex #31265） |
| **🧠 Sub-agent 可靠性** | Claude Code、OpenAI Codex、jcode、pi、OpenCode | 子代理卡死/挂起/超时无反馈、Ambient 模式永久卡死（jcode #1044）、Swarm spawn 引用陈旧 binary（#1119） |
| **🎨 TUI / 终端体验** | Claude Code、Copilot CLI、jcode、pi、OpenCode | 长会话输入延迟（jcode #540）、Vi/Vim 模式（Copilot #13 获赞 75）、TUI 全屏布局多行 widget、滚动模型（pi #8938 / #8923） |
| **💾 会话持久化与跨端同步** | Claude Code、OpenAI Codex、OpenCode、jcode、pi | 项目目录移动后路径残留（OpenCode 70%+ issue 同源）、Desktop + Mobile Remote Control 写锁冲突（Codex #37403）、会话压缩后 AGENTS.md 丢失（Copilot #4687） |
| **🔐 认证与 Provider 适配** | Claude Code、Copilot CLI、pi、jcode | Claude OAuth client 版本需对齐（jcode #1135）、`CLAUDE_CODE_OAUTH_TOKEN` 支持（pi #3591）、BYOK 模型路由错误（Copilot #4680） |
| **📁 配置规范合规** | Kimi Code CLI、pi、jcode | XDG Base Directory 支持（Kimi #1294、pi #2870）成为 Linux 用户呼声最强的规范诉求 |

---

## 四、差异化定位分析

| 工具 | 功能侧重 | 目标用户 | 技术路线特征 |
|------|---------|---------|------------|
| **Claude Code** | 企业级生产力 + 模型商业化深度 | 付费订阅用户（Max/Pro）、大型工程团队 | 强计费治理、订阅额度体验；模型迭代快（Fable 5 → 5.1）但 Hooks 回归频繁 |
| **OpenAI Codex** | 全栈集成 + 多端 Remote | ChatGPT Pro 用户、需要"桌面 + 移动 + Web"多端协作者 | app-server 多端写入权管理是核心架构债；PR 流入量与发布节奏最密集 |
| **Gemini CLI** | 多 Agent + 安全合规 | Google Cloud / Workspace 用户、安全敏感团队 | 安全加固（OAuth RFC 9207、A2A 鉴权、扩展权限）成体系化推进 |
| **GitHub Copilot CLI** | GitHub 原生集成 + BYOK | GitHub 生态企业用户、本地模型/LM Studio 自托管用户 | MCP / BYOK / Agent Plugins 是三大主轴；社区进入静默沉淀期 |
| **Kimi Code CLI** | 轻量化 + 中文生态 | 中文开发者、个人/小团队 | 体量小但节奏稳定；品牌整合期（kimi-cli → Kimi Code） |
| **OpenCode** | 本地优先 + 跨平台 | macOS / Linux 重度用户、需要 project-level 生命周期的开发者 | **路径持久化是当前最大架构债**——70%+ issue 同根因；PR 量级领先 |
| **jcode** | TUI 手感打磨 + 单人快迭代 | 极客开发者、注重交互细节的 power user | 单人维护（owner 占 100% PR），macOS 平台化修复集中 |
| **pi** | 多 Provider + 配置可移植性 | Linux 桌面用户、需要"随意切换 Provider"的开发者 | **工程化程度最高**（PR/Issue 0.40），Subagent 与 TUI 双线推进 |

**关键差异信号**：
- **桌面端策略分化**：Claude Code、OpenAI Codex 押注 Electron 桌面（带来 GPU/路径问题）；OpenCode 跨平台一致但路径处理细节暴露最多；pi 维持纯 TUI 路线反而最稳
- **MCP 接入深度**：Copilot CLI 与 Claude Code 投入最深（OAuth 流程、init 协议）；Gemini CLI 偏向 A2A 协议体系
- **Sub-agent 路线**：Gemini CLI（Browser Agent + Zero-dep sandbox）、pi（subagent 工具覆写）、OpenAI Codex（Remote Control）三种路线并立

---

## 五、社区热度与成熟度

### 热度分层

| 层级 | 工具 | 判断依据 |
|------|------|---------|
| **🔥 超高活跃** | Claude Code、OpenAI Codex | 单 issue 评论数突破 800 级别（#38335）；日均版本 2+；24h 涉及面广 |
| **🔥 高活跃** | OpenCode、pi | Issue/PR 持续高位、出现同根因 issue 集群（OpenCode 70%）、PR 流入并列第一 |
| **🟡 中活跃** | Gemini CLI | Issue 总量较低，但 PR 流入密集，且安全相关 PR 系统化推进 |
| **🟡 稳定沉淀** | Copilot CLI | PR 流入为 0、长期需求（#13 Vi/Vim）被关闭，进入版本迭代空档期 |
| **🟢 小而稳** | Kimi Code CLI | 体量小但 PR/Issue 比最高（0.80）、单日关闭率 100% |

### 成熟度信号

- **架构债可见度**：OpenCode > OpenAI Codex > Claude Code > Copilot CLI > pi > Gemini CLI > jcode > Kimi Code CLI
  - OpenCode 70%+ issue 同根因 = 仍未触及系统性重构
  - pi 与 jcode PR 量级高 = 已进入"小步快跑"治理阶段
- **发布纪律**：OpenAI Codex（1 稳定 + 5 alpha）> Gemini CLI（3 版本）> Claude Code（2 版本）≈ Copilot CLI（1 版本）> OpenCode（1 版本）≈ Kimi Code CLI（1 版本）> pi ≈ jcode（0 版本）
- **社区响应一致性**：Kimi Code CLI（5/5 issue 关闭）> jcode（PR 全部由 owner 提交，闭环极快）> pi / OpenCode（PR 与 issue 处理并行）> Copilot CLI（需求沉淀中）

---

## 六、值得关注的趋势信号

### 信号 1：MCP 已成事实标准，但"互操作性鸿沟"正在扩大
- 8 款工具中至少 5 款（Claude Code、Copilot CLI、OpenAI Codex、jcode、pi）正在同时处理 MCP 相关 issue
- 但暴露的问题层次不一：从"initialize 协议版本不兼容"（Copilot #4525）到"OAuth Refresh Token 未自动使用"（#4203），说明**各家实现深度仍处于早期**
- **对开发者的参考**：构建 MCP Server 时需在 SDK 版本、UA 头、init 请求路径上做兼容矩阵；选择 MCP Client 时需关注其"现代发现协议"支持程度

### 信号 2：Sub-agent / 多 Agent 编排成为下一阶段主战场
- Gemini CLI（Browser Agent + Zero-dep sandbox）、pi（subagent model/effort 覆写 PR #8969）、OpenAI Codex（Remote Control app-server）、OpenCode（project/worktree lifecycle）
- **共性瓶颈**：子代理错误状态上报失真（Gemini #22323）、Ambient 模式卡死（jcode #1044）、Swarm spawn 陈旧引用（#1119）
- **对开发者的参考**：评估 AI CLI 工具时，"subagent observability" 应成为与"上下文窗口"同等重要的指标

### 信号 3：桌面端稳定性是全行业的隐性瓶颈
- 8 款工具中至少 6 款存在 Windows/macOS 桌面端崩溃/路径/进程残留问题
- 尤其集中在 **GPU 进程、MSIX/打包路径、Finder 移动目录后缓存失效** 三类问题
- **对开发者的参考**：依赖桌面端做长会话时需配置会话快照与项目元数据持久化；macOS 长期任务需关注内核资源（kalloc）累积

### 信号 4：限流/计费透明度正成为付费用户的关键决策点
- Claude #38335（842 评论）与 Codex Pro Lite #41969 是本周最具代表性的两条 issue
- 共同诉求：**实际基线数值展示、滚动截止日期、配额结算与 gpt-reserve 时序透明**
- **对开发者的参考**：选型时应将"额度可视化成熟度"纳入评估；自托管/企业部署是规避该风险的有效路径

### 信号 5：安全合规正成为版本发布的"标配节奏"
- Gemini CLI 单周期内同步推进 OAuth RFC 9207 校验、扩展环境变量清理、A2A 鉴权声明三项安全治理
- OpenCode PR #40125（per-MCP-server TLS fingerprint pinning）代表"细粒度信任配置"正在取代"全局 insecure 开关"
- **对开发者的参考**：关注工具是否提供

---

## 各工具详细报告

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills 社区热点

> 数据来源: [anthropics/skills](https://github.com/anthropics/skills)

<think>The user wants me to analyze the Claude Code Skills community repository data and produce a structured report in Chinese. Let me carefully analyze the data provided.

Let me look at what's been shared:**

1. **PR data (Top 20 by comment count, but comments are all "undefined" which seems odd):**
- The comments field shows "undefined" for all PRs, which is strange. This might mean the data is missing. I should note this limitation.
- Looking at the PRs, I need to assess which are most notable based on content, description quality, and relevance.

2. **Issues data (Top 15 by comment count):**
- These have actual comment counts: 43, 16, 12, 10, 9, 8, 6, 6, 4, 4, 4, 4, 4, 4

Let me organize my analysis:

**Hot PRs (Top 5-8):**
1. PR #1298 - skill-creator fix (run_eval.py recall 0% bug) - hot because it ties to issue #556 which has 12 comments
2. PR #514 - document-typography skill - addresses common AI doc generation issues
3. PR #1615 - scnet-hpc skill - HPC cluster operations
4. PR #538 - PDF case-sensitivity fix
5. PR #486 - ODT skill - OpenDocument support
6. PR #210 - frontend-design skill improvement
7. PR #83 - skill-quality-analyzer and skill-security-analyzer meta skills
8. PR #541 - DOCX tracked change ID collision fix
9. PR #539 - skill-creator YAML validation
10. PR #1628 - Hivemind multi-agent orchestration
11. PR #1607 - claude-api model retirement
12. PR #1602 - evaluation/benchmark fixes
13. PR #1595 - UIZZE partner skill
14. PR #1367 - self-audit skill
15. PR #1099 - skill-creator Windows fix
16. PR #1050 - skill-creator Windows fixes
17. PR #723 - testing-patterns skill
18. PR #568 - ServiceNow platform skill
19. PR #525 - pyxel retro game skill
20. PR #509 - CONTRIBUTING.md

**Hot Issues (top):**
1. #492 - Security: Community skills under anthropic/ namespace (43 comments) - CRITICAL
2. #228 - org-wide skill sharing in Claude.ai (16 comments)
3. #556 - run_eval.py 0% trigger rate (12 comments)
4. #62 - skills disappeared (10 comments)
5. #1329 - compact-memory proposal (9 comments)
6. #202 - skill-creator best practices (8 comments) - CLOSED
7. #412 - agent-governance skill (6 comments) - CLOSED
8. #189 - duplicate skills between plugins (6 comments)
9. #1487 - claude-api 156k tokens context (4 comments)
10. #1390 - mcp-builder evaluation 0/N (4 comments)
11. #1385 - Reasoning Quality Gate Pipeline (4 comments)
12. #1175 - SharePoint security concerns (4 comments) - CLOSED
13. #29 - Usage with bedrock (4 comments)
14. #16 - Expose Skills as MCPs (4 comments)
15. #12 - docx whitespace reformatting (4 comments)

Now let me think about the trends:

**Community demand trends:**
- Security/trust (highest priority - 43 comments on #492)
- Org-level sharing/distribution (#228)
- Multi-agent orchestration (#1628 Hivemind, #1367 self-audit)
- Self-auditing/quality gates (#1367, #1385)
- Memory/context optimization (#1329 compact-memory, #1487 context window)
- Testing patterns (#723)
- Domain-specific skills: HPC, ServiceNow, SharePoint, etc.
- Game development (#525 pyxel)
- Document format support: ODT, typography

**High potential pending PRs (still open):**
- All 20 PRs listed are still OPEN
- Notable ones with cross-cutting impact:
  - PR #1298 - critical bug fix for skill-creator eval
  - PR #210 - frontend-design improvements
  - PR #83 - meta skills (quality & security analyzers)
  - PR #1628 - Hivemind multi-agent
  - PR #1367 - self-audit
  - PR #514 - document-typography
  - PR #486 - ODT support
  - PR #723 - testing-patterns

Let me write a detailed but professional report in Chinese. I should note the limitation about PR comment counts being undefined - but actually since I need to make sense of this data, I'll focus on what we can analyze: PRs that have content indicating high impact, and use the issue data which has proper metrics.

Actually, looking more carefully at the task - the user wants analysis based on "评论数排序" but the PRs all show "undefined" for comments. This is a data limitation. I should:
1. Use the issue comment counts (which are valid)
2. For PRs, use cross-references to issues, descriptions, and topic weight as proxies
3. Note this in the report

Let me structure the final report now.

I need to use the thinking tag at the start of every turn. Let me write a high-quality report.

For the format, the user wants:
1. 热门 Skills 排行 (5-8 PRs)
2. 社区需求趋势 (from Issues)
3. 高潜力待合并 Skills (active but unmerged PRs)
4. Skills 生态洞察 (one-sentence summary)

Each item should have a GitHub link. Language: concise professional Chinese.

Let me draft:

---

# Claude Code Skills 社区热点报告（2026-09-02 截止）

## 1. 热门 Skills 排行

Based on cross-referencing with issue activity, description impact, and breadth:

1. **skill-creator 修复（PR #1298）** - https://github.com/anthropics/skills/pull/1298
   - 功能：修复 skill-creator 中 run_eval.py 永远报告 0% recall 的核心 bug，并解决 Windows 流读取、触发检测、并行工作器问题
   - 讨论热点：关联 issue #556（12 条评论），10+ 独立复现，是当前最影响生态可用性的基础设施问题
   - 状态：OPEN

2. **document-typography（PR #514）** - https://github.com/anthropics/skills/pull/514
   - 功能：AI 生成文档的排版质量控制，处理孤词、寡行、编号错位等典型问题
   - 讨论热点：影响"所有 Claude 生成的文档"，是基础文档质量的通用补丁
   - 状态：OPEN

3. **scnet-hpc（PR #1615）** - https://github.com/anthropics/skills/pull/1615
   - 功能：基于 profile 的 SSH 和 Slurm 工作流操作 SCNet HPC 集群
   - 讨论热点：科研/HPC 场景的细分技能，体现 Skills 向垂直行业渗透
   - 状态：OPEN

4. **frontend-design 改进（PR #210）** - https://github.com/anthropics/skills/pull/210
   - 功能：提升 frontend-design skill 的清晰度、可执行性和内部一致性
   - 讨论热点：针对早期低质量 skill 的成熟化改造，影响前端开发用户群
   - 状态：OPEN

5. **meta skills: skill-quality-analyzer / skill-security-analyzer（PR #83）** - https://github.com/anthropics/skills/pull/83
   - 功能：质量分析（5 维度）+ 安全分析两个元技能，进入 marketplace
   - 讨论热点：与 #492 安全信任问题（43 评论）形成呼应，社区急需治理工具
   - 状态：OPEN

6. **ODT Skill（PR #486）** - https://github.com/anthropics/skills/pull/486
   - 功能：OpenDocument 格式（.odt/.ods）的创建、模板填充、HTML 解析
   - 讨论热点：填补开源文档格式支持的空白，与 LibreOffice 生态打通
   - 状态：OPEN

7. **Hivemind 多代理编排（PR #1628）** - https://github.com/anthropics/skills/pull/1628
   - 功能：将机械任务委托给 headless opencode worker，Claude Code 保留规划/评审/合并
   - 讨论热点：聚焦"贵模型上下文是稀缺资源"的成本控制思路
   - 状态：OPEN

8. **self-audit / Reasoning Quality Gate（PR #1367）** - https://github.com/anthropics/skills/pull/1367
   - 功能：交付前自动审计——机械文件验证 + 四维度推理质量门禁
   - 讨论热点：与 #1385（4 评论）提案呼应，是 Agent 可靠性基础设施
   - 状态：OPEN

## 2. 社区需求趋势

按热度（评论数）排序：

1. **信任与安全（最高优先级）**
   - #492（43 评论）：社区 skill 在 anthropic/ 命名空间下的信任边界滥用——这是当前社区最大公约数问题

2. **企业级分发与协作**
   - #228（16 评论）：组织内 Skill 共享机制
   - #189（6 评论）：避免 document-skills / example-skills 内容重复导致 context 重复

3. **核心基础设施缺陷**
   - #556（12 评论）：run_eval.py 完全失效，导致描述优化在噪声上训练
   - #1487（4 评论）：claude-api skill 单次 tool call 即注入 ~156k token
   - #1390（4 评论）：mcp-builder evaluation 对所有真实 MCP 都评 0/N

4. **Agent 治理与质量门禁**
   - #412（6 评论，CLOSED）：agent-governance 提案
   - #1385（4 评论）：Reasoning Quality Gate Pipeline 三阶段提案
   - #1329（9 评论）：compact-memory——长会话状态压缩的符号化表示

5. **新场景拓展**
   - #29（4 评论）：Bedrock 上的 Skills 使用
   - #16（4 评论）：把 Skills 暴露为 MCP 协议
   - #12（4 评论）：docx 空白重排问题

6. **Skill 自身质量**
   - #202（8 评论，CLOSED）：skill-creator 自身的冗长文档化问题
   - #1175（4 评论，CLOSED）：SharePoint 场景下 SKILL.md 内嵌 ACL 的安全顾虑

## 3. 高潜力待合并 Skills

（注：当前热门榜 20 个 PR 均仍处于 OPEN 状态，下列为跨多 issue、影响面最广的候选）

| PR | 名称 | 关键影响 |
|----|------|----------|
| #1298 | skill-creator 评估修复 | 阻塞 skill 描述优化闭环，关联 #556 |
| #83 | quality/security analyzer | 直接缓解 #492 信任问题 |
| #514 | document-typography | 影响所有文档类 skill 输出质量 |
| #1628 | Hivemind | 多代理成本架构创新 |
| #1367 | self-audit | 与 #1385 治理提案形成组合 |
| #541 | docx tracked change ID 修复 | 防止现有书签的文档损坏 |
| #210 | frontend-design | 提升最常用 skill 的可用性 |
| #1602 | mcp-builder 综合修复 | 关联 #1390 评估失效问题 |
| #1099 / #1050 | Windows 兼容性 | 让 skill-creator 真正跨平台 |

## 4. Skills 生态洞察

> **当前社区最集中的诉求是：构建"可治理、可审计、可分发"的 Skills 信任体系**——以 #492（43 评论）的安全/命名空间信任问题为锚点，向 quality-analyzer、self-audit、reasoning quality gate 等"Skill 健康基础设施"扩散，同时倒逼 skill-creator 的评估闭环（#556/#1298）和企业级共享机制（#228）必须尽快落地。

---

OK let me refine this a bit. I think I should make the PR comment counts more honest - the data showed "undefined" so I should be clear about what I'm using as a proxy. Let me also tighten up the format.

Actually, looking again, the task asks for "按评论数排序" but the data shows undefined. I should note this is a data limitation and explain what I'm using instead. But honestly, this might make the report awkward. Let me focus on substance and note this briefly.

I'll write this up now in a clean format.</think>

# Claude Code Skills 社区热点报告
*数据截止：2026-09-02 ｜ 数据源：[anthropics/skills](https://github.com/anthropics/skills)*

> ⚠️ 数据说明：本批次 PR 的评论数字段均为 undefined，因此热度排序主要依据 **关联 Issue 评论数、跨 PR/Issue 引用关系、功能覆盖面与基础设施属性** 综合判定。

---

## 1. 热门 Skills 排行（Top 8）

| # | PR | Skill | 核心功能 | 社区关注点 | 状态 |
|---|---|---|---|---|---|
| 1 | [#1298](https://github.com/anthropics/skills/pull/1298) | **skill-creator 评估修复** | 修复 `run_eval.py` 永远报 0% recall 的核心 bug，附带 Windows 流读取/触发检测/并行 worker 修复 | 关联 [#556](https://github.com/anthropics/skills/issues/556)（12 评论），10+ 独立复现——整个 skill 描述优化闭环在噪声上训练 | OPEN |
| 2 | [#83](https://github.com/anthropics/skills/pull/83) | **skill-quality-analyzer + skill-security-analyzer** | 五维质量分析 + 安全审计两个元技能进入 marketplace | 直接呼应 [#492](https://github.com/anthropics/skills/issues/492)（43 评论）信任边界议题，是社区治理工具链的雏形 | OPEN |
| 3 | [#514](https://github.com/anthropics/skills/pull/514) | **document-typography** | 防孤词、寡行、编号错位等 AI 文档常见排版缺陷 | "影响所有 Claude 生成的文档"，是基础设施级补丁 | OPEN |
| 4 | [#1367](https://github.com/anthropics/skills/pull/1367) | **self-audit** | 交付前机械验证 + 四维推理质量门禁（v1.3.0） | 与 [#1385](https://github.com/anthropics/skills/issues/1385) 三阶段质量门禁提案互为补充 | OPEN |
| 5 | [#1628](https://github.com/anthropics/skills/pull/1628) | **Hivemind** | 用 headless opencode worker 分流机械任务，主模型只做规划/评审/合并 | "上下文是稀缺资源而非智能"的成本控制新范式 | OPEN |
| 6 | [#210](https://github.com/anthropics/skills/pull/210) | **frontend-design 改进** | 提升 skill 清晰度、可执行性、内部一致性 | 早期大流量 skill 的成熟化改造 | OPEN |
| 7 | [#486](https://github.com/anthropics/skills/pull/486) | **ODT Skill** | OpenDocument (.odt/.ods) 的创建、模板填充、HTML 解析 | 填补开源文档格式 + LibreOffice 生态空白 | OPEN |
| 8 | [#541](https://github.com/anthropics/skills/pull/541) | **docx tracked-change ID 修复** | 修复 OOXML `w:id` 共享命名空间与书签冲突导致的文档损坏 | 关键可靠性修复，影响所有 docx 工作流 | OPEN |

---

## 2. 社区需求趋势（按 Issue 评论热度提炼）

### 🔴 信任与安全（最高优先级）
- [#492](https://github.com/anthropics/skills/issues/492)（**43 评论**）：社区 Skill 在 `anthropic/` 命名空间下的信任边界滥用，是当前社区最大公约数议题。

### 🟠 企业级分发与去重
- [#228](https://github.com/anthropics/skills/issues/228)（**16 评论**）：组织内 Skill 共享链路太重（下载 → Slack → 手动上传）。
- [#189](https://github.com/anthropics/skills/issues/189)（**6 评论**）：`document-skills` 与 `example-skills` 内容重复导致 context 污染。

### 🟡 基础设施隐性 Bug
- [#556](https://github.com/anthropics/skills/issues/556)（**12 评论**）：`run_eval.py` 对所有 query 0% 触发率。
- [#1487](https://github.com/anthropics/skills/issues/1487)（**4 评论**）：`claude-api` 单次 tool call 注入 ~156k token。
- [#1390](https://github.com/anthropics/skills/issues/1390)（**4 评论**）：`mcp-builder` evaluation 对所有真实 MCP 评 0/N。

### 🟢 Agent 治理 / 质量门禁
- [#1329](https://github.com/anthropics/skills/issues/1329)（**9 评论**）：`compact-memory` 长会话状态压缩。
- [#1385](https://github.com/anthropics/skills/issues/1385)（**4 评论**）：Pre-task Calibration → Adversarial Review → Delivery Verification 三阶段提案。
- [#412](https://github.com/anthropics/skills/issues/412)（**6 评论，CLOSED**）：agent-governance 安全模式。

### 🔵 Skill 元问题与跨平台
- [#62](https://github.com/anthropics/skills/issues/62)（**10 评论**）：用户 Skill 莫名消失。
- [#202](https://github.com/anthropics/skills/issues/202)（**8 评论，CLOSED**）：`skill-creator` 自身更像人读而非机读。
- [#1099](https://github.com/anthropics/skills/pull/1099) / [#1050](https://github.com/anthropics/skills/pull/1050)：Windows 兼容——`skill-creator` 跨平台可用性的最大短板。

### ⚪ 协议与生态扩展
- [#16](https://github.com/anthropics/skills/issues/16)（**4 评论**）：把 Skill 暴露为 MCP。
- [#29](https://github.com/anthropics/skills/issues/29)（**4 评论**）：Skills 在 AWS Bedrock 上的可用性。
- [#1175](https://github.com/anthropics/skills/issues/1175)（**4 评论，CLOSED**）：SharePoint + SKILL.md 内嵌 ACL 的安全顾虑。

---

## 3. 高潜力待合并 Skills

> 当前 Top 20 PR 全部仍为 OPEN。以下为 **跨多个 Issue 引用、影响基础设施层、近期最

---

<think>Let me carefully parse the provided GitHub data and compose a structured Chinese-language daily report for Claude Code community dynamics on 2026-09-02.

Key observations from the data:

**Releases:**
- v2.1.258: Fixed Claude Code failing to launch on macOS 12 (Monterey), regression introduced in 2.1.255; Fixed remote and scheduled sessions failing with "user messages must have non-empty content" after a re-sent permission approval could not be applied
- v2.1.257: Added Claude Fable 5.1 (`claude-fable-5-1`), now the default Fable model — 1M context, $10/$50 per Mtok with $0.25/Mtok cache reads; Added "Time format" (`timeFormat`) and `timeZone` settings

**Hot Issues (top 10 by comment count):**
1. #38335 - Max plan session limits exhausted abnormally fast since March 23, 2026 (842 comments, 476 thumbs up) - HIGHLY IMPORTANT
2. #80444 - Desktop app Windows fatal GPU-process crash (100 comments)
3. #79337 - Fable 5 prompts 'usage credits required' on Max plan (76 comments) - closed but important
4. #85891 - Claude Desktop main window stays always-on-top (58 comments, 128 thumbs up)
5. #66020 - macOS kernel zone leak from CLI (26 comments)
6. #27474 - `claude --worktree` overwrites core.hooksPath (14 comments)
7. #62659 - Windows Bash tool orphans (11 comments) - closed
8. #50719 - Computer Use clicks blocked on macOS 26.4 (10 comments)
9. #87895 - Same always-on-top duplicate (7 comments)
10. #74256 - PermissionRequest hook 'allow' for ExitPlanMode ignored (4 comments)

**PRs:** Only 2, neither very active
- #20448 - web4-governance plugin (open)
- #78371 - ralph-wiggum plugin hardening (closed)

**Feature trends:**
- New model support (Fable 5.1)
- Desktop app stability (Windows, macOS)
- Performance/memory issues on macOS
- Always-on-top window behavior
- Hook/MCP permissions
- Cloud ultrareview
- Session limit billing transparency
- Security: adversarial review gates
- Usage limits UI clarity

**Developer pain points:**
- Session/quota consumption not transparent
- macOS kernel panic from memory leak
- Desktop app crashes (Windows GPU, file locks)
- Always-on-top behavior
- Hook regressions
- TUI clipboard/SSH login
- Windows process management (Bash orphans)
- Security filter false positives
- Cost/usage UI clarity

Now let me structure this into a clean Chinese daily report.

Note: The report format requested has these sections:
1. 今日速览 - 2-3 sentences
2. 版本发布 - new versions
3. 社区热点 Issues - top 10
4. 重要 PR 进展 - 10 (but only 2 exist, I'll include them)
5. 功能需求趋势 - from all issues
6. 开发者关注点 - pain points

I should be careful — there are only 2 PRs, not 10. I should mention them all but not pad with fake content. I'll note that PR volume is low.

Let me write the report.</think>

# Claude Code 社区动态日报
**日期：2026-09-02**

---

## 📌 今日速览

今日 Anthropic 发布两个更新版本：v2.1.258 修复了 2.1.255 在 macOS 12 Monterey 上的启动回归问题，v2.1.257 推出默认 Fable 模型 **Claude Fable 5.1**（1M 上下文、$10/$50 每 Mtok）。社区方面，**Max 套餐"额度异常消耗"长尾 issue #38335** 持续高热度（842 评论、476 👍），同时 Windows 桌面端 GPU 崩溃、macOS 内核内存泄漏、以及"窗口始终置顶"问题依然是开发者讨论焦点。

---

## 🚀 版本发布

### v2.1.258（最新）
- ✅ **修复**：macOS 12 (Monterey) 启动失败问题（2.1.255 引入的回归）
- ✅ **修复**：远程/定时会话在权限审批重发失败后报 `user messages must have non-empty content`

🔗 https://github.com/anthropics/claude-code/releases/tag/v2.1.258

### v2.1.257
- 🆕 **新增模型**：Claude Fable 5.1 (`claude-fable-5-1`)，成为 Fable 默认模型
  - 1M 上下文；定价 $10 / $50 每 Mtok；缓存读取 $0.25/Mtok
- 🆕 **新增设置**：`timeFormat`、`timeZone`，支持 12h / 24h / 24h UTC / strftime 自定义模式（用于回合结束计时与传输计时）

🔗 https://github.com/anthropics/claude-code/releases/tag/v2.1.257

---

## 🔥 社区热点 Issues（按评论数排序 Top 10）

| # | Issue | 关键点 | 反应 |
|---|---|---|---|
| 1 | **[#38335](https://github.com/anthropics/claude-code/issues/38335)** Max 套餐 CLI 会话额度自 2026-03-23 起异常快速耗尽 | 标记 `[invalid]` 但社区强烈反对（476 👍）；指控 Anthropic 将额度静默下调，要求透明披露计费逻辑 | 842 评论 / 476 👍 |
| 2 | **[#80444](https://github.com/anthropics/claude-code/issues/80444)** Windows 桌面端 GPU 进程致命崩溃（0x060C201E） | 在 Chrome in-app 标签页触发，崩溃后 MSIX 包无法启动，需"修复"安装 | 100 评论 |
| 3 | **[#79337](https://github.com/anthropics/claude-code/issues/79337)** Fable 5 在 Max 套餐上报"需要使用额度" | 自 Fable 5 进入 Max 标准日（2026-07-20）起出现；会话被静默降级到 Opus 4.8 | 76 评论（已关闭） |
| 4 | **[#85891](https://github.com/anthropics/claude-code/issues/85891)** Windows 桌面窗口始终置顶且无设置关闭 | 与 macOS 的 [#66516](https://github.com/anthropics/claude-code/issues/66516) 对称问题；用户强烈要求"可关闭" | 58 评论 / 128 👍 |
| 5 | **[#66020](https://github.com/anthropics/claude-code/issues/66020)** macOS 26.5.1 内核区内存泄漏（data.kalloc.1024） | `claude.exe` 在 ~20GB 时触发 panic；泄漏速率随 agent 负载从 21→1027/秒线性放大 | 26 评论 |
| 6 | **[#27474](https://github.com/anthropics/claude-code/issues/27474)** `claude --worktree` 覆盖 `$GIT_COMMON_DIR/config` 的 `core.hooksPath` | 长期未修复，影响团队 hooks 配置 | 14 评论 / 16 👍 |
| 7 | **[#62659](https://github.com/anthropics/claude-code/issues/62659)** Windows：Bash tool 子进程成不可杀孤儿 | 无 per-command Job Object；`SILENT_BREAKAWAY_OK` 破坏保护 | 11 评论（已关闭） |
| 8 | **[#50719](https://github.com/anthropics/claude-code/issues/50719)** Computer Use 在 macOS 26.4/26.4.1 点击被 Dock layer-20 命中测试拦截 | 自 26.4 起回归；前置 26.4 正常 | 10 评论 |
| 9 | **[#87895](https://github.com/anthropics/claude-code/issues/87895)** Desktop 窗口始终置顶（同 #85891 重复） | 反映此类问题被官方多次以"invalid"关闭 | 7 评论 / 57 👍 |
| 10 | **[#74256](https://github.com/anthropics/claude-code/issues/74256)** PermissionRequest hook 对 `ExitPlanMode` 的 `allow` 自 v2.1.199 起被忽略 | 计划审批选择器仍阻塞；hooks 关键回归 | 4 评论 |

> **共性观察**：标 `[invalid]` 的高热度 issue 多与**计费透明度**与**桌面 UI 默认行为**有关，社区对此类关闭决策普遍不满。

---

## 🛠️ 重要 PR 进展

> ⚠️ 过去 24 小时仅 2 条 PR 更新，社区 PR 活动显著放缓。

| PR | 内容 | 状态 |
|---|---|---|
| **[#20448](https://github.com/anthropics/claude-code/pull/20448)** 新增 **web4-governance 插件**：基于 T3 信任张量、实体见证、R6 审计轨迹的轻量 AI 治理能力 | 🟢 OPEN |
| **[#78371](https://github.com/anthropics/claude-code/pull/78371)** **`ralph-wiggum` 插件加固**：引入有界迭代、push/publish 守卫、stop-hook 修复，防止无人值守循环推半成品 | 🔴 CLOSED |

> 💡 两条 PR 都不是核心仓库主分支的功能/PR，**今日缺乏实质性功能合并**。

---

## 📈 功能需求趋势（综合 30 条 Issue）

| 方向 | 代表 Issue | 社区情绪 |
|---|---|---|
| 🪟 **Windows / macOS 桌面端稳定性** | #80444、#90389、#91377、#91381 | 🔥 高（崩溃 / 进程残留 / UI 行为） |
| 🧠 **新模型支持（Fable 5.1）** | #91345、#79337、#91380 | ⚠️ 配套稳定性和内容安全策略待打磨 |
| 🪝 **Hooks / Permissions 回归** | #74256、#89063、#27474 | 🔥 高（破坏现有自动化工作流） |
| 📊 **额度 / 计费透明度** | #38335、#91282 | 🔥🔥 极高（直接影响付费用户体验） |
| 🖥️ **桌面 UI 行为** | #85891、#87895、#91377 | 🔥 窗口置顶、缩放、剪贴板等体验问题 |
| 🧰 **MCP / Chrome 集成** | #89063、#90153 | 🟡 中 |
| ☁️ **Cloud ultrareview** | #87203 | 🟡 中（功能可用性） |
| 🔒 **安全与对抗审查门** | #90887、#91383 | 🟡 中（社区提议尚未落地） |
| 🛠️ **可观测性（OTLP）** | #91165 | 🟡 中（疑似回归 #50567） |

---

## 🎯 开发者关注点与高频痛点

1. **💸 计费透明度严重不足**：#38335 高居榜首却仍被标 `invalid`，开发者明确呼吁：
   > "请公开每个模型在 Max/Pro 计划下的真实使用上限和衡量方式。"
   - 衍生需求：#91282 要求 Usage-limits UI 展示**实际基线数值**与**滚动截止日期**，而非模糊的"提升 50% 至 X 月 X 日"。

2. **🍎 macOS 内核层稳定性问题多发**：
   - `data.kalloc.1024` 内核区泄漏（#66020、#82941）导致 panic，长会话风险高；
   - Computer Use 在 26.4+ 被 Dock 拦截（#50719）；
   - 桌面应用在 Monterey 上 dyld 失败（#91381，今日修复已覆盖）。

3. **🪟 Windows 桌面端频繁崩溃与进程泄漏**：
   - GPU 进程崩溃（#80444）、文件锁冲突（#90389）、Artifacts 缩放作用于主窗口（#91377）、Bash 子进程成孤儿（#62659）。

4. **🪝 Hooks 是高敏感回归面**：
   - `ExitPlanMode` 权限 hook 自 2.1.199 失效（#74256）；
   - `--worktree` 静默改写全局 git config（#27474）。

5. **🧷 SSH / TUI 体验细节**：
   - `/login` URL 在 SSH 下不可见且不可复制（#91358）；
   - Rewind 命令缺少恢复码展示（#89440）；
   - Windows 剪贴板图片粘贴失败（#90657）。

7. **🔐 假阳性内容安全策略**：#91380 报告安全关键字审查将合法支付安全分析项目强制降级模型，导致低模型级反复出错、形成"循环退版"。

8. **🤖 "不可绕过"的治理需求**：#90887 提出 harness 强制的对抗性 review 门（PreCommit），反映社区对 agent 自审局限性的警惕。

---

## 📊 数据总览

| 指标 | 数值 |
|---|---|
| 今日发布版本 | 2（v2.1.257、v2.1.258） |
| 24h 更新 Issues | 50（展示 30） |
| 高热度（≥50 评论） | 4 |
| 24h 更新 PR | 2 |
| 涉及平台分布 | macOS ≈ 13 / Windows ≈ 9 / 跨平台/其他 ≈ 8 |
| 主要标签 | `bug` ≈ 70% / `regression` 多 / `enhancement` 仅 2 |

---

> 📝 **分析师备注**：本周社区呈现"**模型迭代快、生态修复慢**"的态势。Fable 5 / 5.1 接连登场，但围绕桌面端稳定性、Hooks 回归、计费透明度的存量问题仍未得到系统性回应。建议开发者关注 v2.1.258 是否完全覆盖 macOS Monterey 场景，并留意即将到来的桌面端重构信号（多个 GPU / MSIX / 窗口行为类 issue 在并发累积）。

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

<think>The user wants me to generate a Chinese daily report about OpenAI Codex community dynamics based on GitHub data. Let me analyze the data carefully and produce a structured report.

Key observations from the data:

1. **Releases**: 
   - rust-v0.153.0-alpha.5, alpha.4, alpha.2, alpha.1 (multiple alpha releases)
   - rust-v0.152.1 (stable bug fix for Guardian approval review)

2. **Top Issues** (by comments):
   - #37403: macOS Desktop cannot resume Remote Control/CLI thread - 50 comments, 34 likes
   - #16857: High GPU usage due to tiny useless animation - 43 comments, 52 likes
   - #40700: Windows Codex Desktop cannot start - 43 comments
   - #41463: Windows + WSL cannot create projects - 16 comments
   - #41790: Repeated "Selected model is at capacity" errors - 14 comments
   - #26011: config.toml MCP paths stale after auto-update - 14 comments
   - #26736: macOS high GPU when window visible - 12 comments
   - #37856: VS Code extension stale thread owner - 9 comments
   - #30464: macOS App high GPU/CPU/heat - 9 comments
   - #34263: macOS Browser/node_repl not on Remote SSH - 7 comments
   - #41439: macOS Local project loses shell tools - 6 comments
   - #22844: Remote SSH browser tools unavailable - 6 comments, 25 likes
   - #31265: Windows deny-read permission ineffective - 5 comments
   - #41810: Long-running tasks stop with capacity error - 5 comments
   - #41969: Pro Lite weekly quota depletion - 5 comments

3. **Key Themes**:
   - macOS performance issues (GPU/CPU/heat) - very prevalent
   - Windows app start/stability issues
   - Remote SSH / app-server thread ownership conflicts
   - Rate limit / capacity errors
   - Browser/node_repl tool provisioning in remote contexts
   - Desktop pet interaction issues (Windows)

4. **PR Highlights**:
   - Vim replace mode (#42194)
   - Native spawning for macOS MCP (#42192)
   - Structured async user input (#42178)
   - Cacheable Bazel schema bundle (#42174)
   - Network requirements header injections (#42173)
   - Tool JSON Schema module split (#42161)
   - Model settings in app-server thread metadata (#42151)
   - Remote marketplaces in plugin CLI (#42150)
   - Git marketplaces upgrade (#42149)
   - Skip Guardian reviews in Full Access (#42147)
   - Permission requests in executor context (#42146)
   - Guardian V2 analytics (#42144)
   - Early rate-limit warnings for Plus/Team (#42142)
   - Vim composer redo (#42140)
   - Prewarm shell snapshots (#42137)
   - Thread forks from symlinked session roots (#42135)
   - MCP approval elicitations with link metadata (#42134)
   - Managed worktree creation (#42196)

Let me structure the report now.</think>

# OpenAI Codex 社区动态日报
**日期：2026-09-02**

---

## 📌 今日速览

OpenAI Codex 今日发布了 **v0.152.1 稳定版**，修复了 Guardian 审批审查未遵守 Node REPL 策略的回归问题，同时连发 **v0.153.0 四个 alpha 版本**预热下一轮迭代。社区焦点高度集中于 **macOS 性能问题**（GPU 占用、发热、远程会话冲突）与 **Windows 应用启动/工具链兼容性**（App 启动失败、WSL 项目创建、Pet 交互异常），同时"模型容量耗尽"和"Pro Lite 配额异常"等订阅与限流相关抱怨显著抬头。

---

## 🚀 版本发布

| 版本 | 性质 | 关键内容 |
|------|------|---------|
| **rust-v0.152.1** | 稳定版（Bug Fix） | Guardian 审批审查现在会遵守通过模型元数据传入的 Node REPL 策略 |
| **rust-v0.153.0-alpha.1 ~ alpha.5** | 预发布版（5 个 alpha 连续滚动） | 面向 0.153 主线持续集成新特性，具体变更日志待官方披露 |

> 📎 [v0.152.1 Changelog](https://github.com/openai/codex/compare/rust-v0.152.0...rust-v0.152.1)

---

## 🔥 社区热点 Issues（按关注度筛选 10 条）

### 1. [#37403](https://github.com/openai/codex/issues/37403) — macOS Desktop 无法恢复 Remote Control / CLI 线程
- **评论 50 / 👍 34**（本期最热）
- 8 月 7 日更新后，ChatGPT 桌面端与 Codex 移动端 Remote Control 共用同一线程时报 `already has an active writer`。
- **为什么重要**：影响"桌面 + 移动端"核心远程工作流，社区广泛共鸣，是 app-server 多端写入冲突的典型回归。

### 2. [#16857](https://github.com/openai/codex/issues/16857) — 思考中的微小动画导致高 GPU 占用
- **评论 43 / 👍 52**（👍 数最高）
- Codex 应用在"思考"阶段播放的微动画导致 Mac 高负载 GPU 占用。
- **为什么重要**：与 #26736、#30464、#40330、#41038 一同构成"macOS 性能"主题簇，反映桌面端渲染管线的长期问题。

### 3. [#40700](https://github.com/openai/codex/issues/40700) — Windows 26.820 Codex Desktop 无法启动
- **评论 43 / 👍 2**
- 打包的 `codex.exe` 从 WindowsApps 重定位失败，桌面端完全打不开。
- **为什么重要**：Windows 打包与权限路径问题，与 #25886、#41252、#41850 一起暴露 Windows 端打包/签名链条的脆弱。

### 4. [#41463](https://github.com/openai/codex/issues/41463) — Windows + WSL 无法创建项目（AbsolutePathBuf 缺少 base path）
- **评论 16 / 👍 7**
- WSL2 项目路径反序列化失败，导致 Codex Desktop 不能创建任何工程。
- **为什么重要**：直接影响 Windows 主力开发人群体的"上手即用"体验。

### 5. [#41790](https://github.com/openai/codex/issues/41790) — ChatGPT Pro 用户反复遭遇 "Selected model is at capacity"
- **评论 14 / 👍 9**
- 8 月 31 日起，Pro 用户在常规任务中频繁被容量错误中断，无优雅恢复机制。
- **为什么重要**：与 #41810、#41969、#42182（功能请求）一起，反映"限流可视化 + 优雅恢复"已成为用户体验关键短板。

### 6. [#26011](https://github.com/openai/codex/issues/26011) — Windows 自动更新后 config.toml 中 MCP 路径过期
- **评论 14 / 👍 7**
- 更新后旧 bin 路径仍残留在配置中，导致 `node_repl` MCP 启动报 `os error 3`。
- **为什么重要**：暴露"自动更新 + 路径迁移"流程长期缺失，社区呼吁 OpenAI 加入路径刷新钩子。

### 7. [#37856](https://github.com/openai/codex/issues/37856) — VS Code 扩展陈旧 owner 导致线程被锁
- **评论 9 / 👍 7**
- VS Code Web 重载或断开后，旧扩展实例仍持有线程写锁，出现"This chat is open in another application"。
- **为什么重要**：与 #41849（VS Code Remote-SSH 同类问题）、#37403（macOS 同类问题）共同表明 **app-server 写入权生命周期管理**是当前最大的架构债。

### 8. [#34263](https://github.com/openai/codex/issues/34263) — macOS 桌面 Remote SSH 任务未下发 Browser/node_repl 工具
- **评论 7**
- 本地任务可用 Browser，远程任务侧栏能开浏览器，但 `@browser`/`node_repl` 不可用，工具下发不对称。
- **为什么重要**：与 #22844 同主题，反映"Remote SSH 工具一致性"成为新的产品诉求点。

### 9. [#31265](https://github.com/openai/codex/issues/31265) — Windows 原生 ACL 状态下 deny-read 权限规则失效
- **评论 5**
- 沙箱内 `deny` 规则对读操作无效（写操作有效），命令可绕过读取 `~/.codex/config.toml`。
- **为什么重要**：属于**安全语义**问题，在 0.142.5 中仍未修复，影响企业合规场景。

### 10. [#41969](https://github.com/openai/codex/issues/41969) — Pro Lite 周配额异常耗尽 + gpt-reserve 消失
- **评论 5**
- 9 月 1 日更新 CLI 后，Pro Lite / Pro 5x 用户周配额瞬时清零，已存储的 gpt-reserve 也未赎回。
- **为什么重要**：直接关系到 **付费用户的钱包感知**，且涉及"配额结算与重置时序"——这是订阅业务敏感问题。

---

## 🛠 重要 PR 进展

> 今日 PR 高度集中在"工程化 + 体验打磨"两个维度，Vim/TUI 增强、Guardian 流程优化、远程与插件体系扩展是主线。

### 1. [#42196](https://github.com/openai/codex/pull/42196) — 增加托管 Worktree 创建
新增 `WorktreeManager::create`，可在 `HEAD` 或指定 base 上创建与 Desktop 兼容的 detached worktree，并与源工作目录路径隔离。

### 2. [#42194](https://github.com/openai/codex/pull/42194) — TUI Composer 新增 Vim Replace 模式
按下 `R` 进入覆盖式输入，支持 Backspace 撤销、undo 与 dot-repeat，同时保留附件/光标/选择行为。

### 3. [#42192](https://github.com/openai/codex/pull/42192) — macOS MCP 启动使用原生 spawn
将裸命令名与相对可执行路径都纳入子进程 `PATH` 解析（包括默认 PATH 与空条目），改善 macOS 沙箱下 MCP 启动体验。

### 4. [#42178](https://github.com/openai/codex/pull/42178) — 结构化异步用户输入请求
用 `request_user_input_async` 替换 `send_user_message_async`，支持多个问题、可选推荐答案，且 turn 可继续推进。

### 5. [#42174](https://github.com/openai/codex/pull/42174) — Bazel app-server schema bundle 可缓存化
新增 `schema_bundle` Bazel 规则生成稳定与实验性 schema 目录，内置 zstd 标准化生成的 JSON。

### 6. [#42173](https://github.com/openai/codex/pull/42173) — 网络需求支持 header 注入规则
解析 `experimental_network.header_injections`（host/method/path-prefix/header）并传入 `NetworkConstraints`，导出至 `codex_config`。

### 7. [#42151](https://github.com/openai/codex/pull/42151) — app-server Thread 元数据暴露模型设置
Thread 对象新增可空 `model` 与 `reasoningEffort` 字段，跨 thread/list 路径统一报告最新/已加载设置。

### 8. [#42150](https://github.com/openai/codex/pull/42150) — 插件 CLI 支持远程 marketplace
`codex plugin list` 展示远程目录条目（含来源、版本、安装/认证策略），支持远端插件的增删与缓存。

### 9. [#42147](https://github.com/openai/codex/pull/42147) — Full Access 下跳过 Guardian 审查
Full Access 已是 `approvalPolicy=never` + 全开放权限，模型再审无意义；统一识别后仅走执行。

### 10. [#42142](https://github.com/openai/codex/pull/42142) — Plus / Team 计划加入早期限流预警
在 5 小时窗口剩余 <50% 时提醒，保留其他计划的 75/90/95% 阈值，继续做去重——直接呼应 #41790/#41810 等抱怨。

> 此外值得点名的延伸：**[#42144 Guardian V2 分析事件](https://github.com/openai/codex/pull/42144)**、**[#42140 Vim composer redo](https://github.com/openai/codex/pull/42140)**、**[#42137 Shell Snapshot 预热](https://github.com/openai/codex/pull/42137)**、**[#42134 MCP 审批附带 link 元数据](https://github.com/openai/codex/pull/42134)**。

---

## 📈 功能需求趋势

从 Issue 标签与讨论聚类看，社区最关注的方向（按强度排序）：

1. **macOS / Windows 桌面端性能与稳定性**（最热）
   - GPU/CPU 占用过高、发热、渲染面积耦合（#16857、#26736、#30464、#40330、#41038）
   - Windows 启动/打包/WindowsApps 路径（#40700、#25886、#41252、#41850）

2. **多端/远程会话的写入权冲突**
   - app-server 重复持有线程写锁（#37403、#37856、#41849）

3. **限流可见性与任务优雅恢复**
   - "Selected model is at capacity" 频繁中断、配额异常（#41790、#41810、#41969、#42182）

4. **Remote SSH 工具一致性**
   - Browser / node_repl 在远程任务下发不对称（#34263、#22844）

5. **沙箱与权限语义正确性**
   - Windows ACL 下 deny-read 失效（#31265）、Full Access 下 Guardian 仍误触发（#41068）

6. **Windows 桌面 Pet 交互**
   - 点击穿透/无法拖拽（#41960、#41535、#42061）

7. **WSL 项目创建**（#41463）

8. **CLI ↔ App 体验一致性**（#41439 本地工程丢失 shell 工具）

---

## 💡 开发者关注点

- **架构层最痛的点**：`app-server` 在多端/多进程（VS Code Remote-SSH、Desktop Remote、Mobile Remote）下对**线程写锁的生命周期管理**问题反复出现，社区强烈期待引入"过期写锁回收 + 客户端心跳"机制。
- **macOS 用户最痛的点**：渲染管线与可见窗口面积耦合导致 GPU 持续高占用，影响 MacBook Air 等散热受限机型；用户希望最小化窗口或隐藏动画可显著降低负载。
- **Windows 用户最痛的点**：自动更新后**路径不迁移**导致 MCP 工具集体崩溃（#26011 已持续 3 个月），同时新版打包后**应用直接无法启动**（#40700/25886），企业用户升级风险高。
- **付费用户的痛点**：限流错误缺乏可视化与优雅恢复，任务被"硬中断"且没有 checkpoint 续跑；Pro Lite 周配额结算顺序与 gpt-reserve 行为不透明。
- **安全/合规痛点**：Windows 沙箱 `deny-read` 规则被绕过是少数**安全语义类**问题，社区希望优先修复。
- **正面信号**：开发者普遍欢迎 PR #42194（Vim Replace）、#42140（Vim redo）、#42178（结构化异步输入）、#42142（早期限流预警）等"贴近日常使用"的增强，说明社区更在意**手感、可控感、可观测性**三大体验维度。

---

*报告生成时间：2026-09-02 · 数据来源：[github.com/openai/codex](https://github.com/openai/codex)*

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

<think>The user wants me to generate a Chinese daily report for the Gemini CLI community based on GitHub data from 2026-09-02. Let me analyze the data carefully and structure the report.

Let me review the data:

**Releases:**
1. v0.59.0-nightly.20260902.g4963a4456 - New contributor @diegogodinezr, fix for web fetch utilities (destination validation and connection routing)
2. v0.59.0-preview.0 - Contains changelog for v0.58.0-preview.0 and version bump
3. v0.58.0 - Contains symlink evaluation fix and refactoring

**Top Issues (by comment count, need to pick 10):**
1. #22323 - Subagent recovery after MAX_TURNS reports GOAL success (13 comments, 2 likes) - P1 bug
2. #19873 - Zero-Dependency OS Sandboxing & Post-Execution Intent Routing (9 comments, 1 like) - P2 enhancement
3. #21409 - Generalist agent hangs (8 comments, 8 likes) - P1 bug, very popular
4. #22745 - AST-aware file reads, search, mapping (7 comments, 1 like) - P2 feature
5. #21968 - Gemini does not use skills and sub-agents enough (6 comments, 0 likes) - P2 bug
6. #26525 - Add deterministic redaction and reduce Auto Memory logging (5 comments, 0 likes) - P2 security bug
7. #25166 - Shell command execution stuck with "Waiting input" (4 comments, 3 likes) - P1 bug
8. #22232 - browser_agent resilience (4 comments, 0 likes) - P3 feature
9. #21983 - browser subagent fails in wayland (4 comments, 1 like) - P1 bug
10. #21000 - Native file tools for task tracker (4 comments, 0 likes) - P3 bug
11. #20079 - ~/.gemini/agents/filename.md not recognized if symlink (4 comments, 0 likes) - P2 bug
12. #26523 - Surface or quarantine invalid Auto Memory inbox patches (3 comments) - P2 bug
13. #26522 - Stop Auto Memory from retrying low-signal sessions (3 comments) - P2 bug
14. #24246 - Gemini CLI encounters 400 error with > 128 tools (3 comments) - P2 bug
15. #23571 - Model frequently creates tmp scripts (3 comments) - P2 bug
16. #22672 - Agent should stop destructive behavior (3 comments, 1 like) - P2

**Top PRs (need to pick 10):**
1. #28863 - fix(extensions): prompt for consent on environment changes (security)
2. #29163 - fix(cli): prevent crash during authentication in git repositories (P1)
4. #29117 - fix(core): enforce RFC 9207 issuer identification in MCP OAuth (security)
5. #29067 - fix(a2a-server): remove misleading security schemes (P1 security)
6. #28888 - fix(a2a): allow launcher workspace outside home (security)
7. #29165 - chore/release: bump version to 0.59.0-nightly
8. #28889 - fix(cli): restore paused stdin after capability detection
9. #28893 - fix(core): preserve explicit flash model IDs
10. #28895 - fix(core): recognize mixed function-call turns
11. #28897 - fix(core): respect plan-routing model availability
12. #28875 - fix(cli): reject fetchJson on malformed JSON
13. #28898 - feat(pr-generator-core): harden subprocess execution security
14. #29089 - fix(core): forward abortSignal to retryWithBackoff
15. #29088 - fix(vscode-ide-companion): resolve stop() with MCP stream open
16. #29087 - fix(cli): prevent concurrent extension install races
17. #29063 - fix(core): stop Plan Mode from waiting in non-interactive (P1)
18. #28951, #28953, #28952 - PR generation pipeline improvements

**Trend Analysis:**
- Security issues: OAuth, MCP, environment variables, A2A server security
- Agent issues: hanging, recovery, browser agent issues
- Memory system issues: Auto Memory has many bug reports
- AST-aware tools for better performance
- Non-interactive mode improvements
- Terminal/UI performance
- Skills and sub-agents improvements

Let me now structure the report in Chinese, being professional and concise.

Let me write the report now:</think>

# Gemini CLI 社区动态日报
**日期：2026-09-02** | 数据来源：github.com/google-gemini/gemini-cli

---

## 📌 今日速览

今日 Gemini CLI 发布 v0.58.0 稳定版及 v0.59.0-preview.0 / nightly 三连版本，正式进入 0.59 开发周期。社区高度关注的话题集中在 **Agent 稳定性**（子代理挂起、错误终止报告）与 **安全加固**（OAuth、MCP、扩展环境变量）；同时针对 Auto Memory 系统、AST 感知文件读取等长期改进方向有持续讨论。值得注意的是，安全相关 PR 在今日合并/更新中占比明显提升，OAuth (RFC 9207)、A2A server、扩展权限三大方向同步推进。

---

## 🚀 版本发布

### v0.58.0（稳定版）
- `fix(core): ensure consistent symlink evaluation in ignore path handling` —— 修复忽略路径处理中符号链接评估不一致的问题
- 包含多项 `refactor(core)` 内核重构
- [Release 链接](https://github.com/google-gemini/gemini-cli/pull/28918)

### v0.59.0-preview.0
- 同步 v0.58.0-preview.0 变更日志
- 版本号预升级至 0.59.0-nightly.20260825
- [Release 链接](https://github.com/google-gemini/gemini-cli/pull/29082)

### v0.59.0-nightly.20260902.g4963a4456
- `fix(core): improve destination validation and connection routing in web fetch utilities` —— 改进 Web 抓取工具中的目标验证与连接路由
- 🎉 欢迎新贡献者 **@diegogodinezr** 首次提交
- [Release 链接](https://github.com/google-gemini/gemini-cli/pull/29120)

---

## 🔥 社区热点 Issues

| # | Issue | 优先级 | 评论 | 要点 |
|---|-------|--------|------|------|
| [22323](https://github.com/google-gemini/gemini-cli/issues/22323) | Subagent 触发 MAX_TURNS 后仍报告 GOAL 成功 | P1 🔴 | 13 | `codebase_investigator` 在达到最大轮次前直接报告 `Termination Reason: "GOAL"`，掩盖真实中断状态；影响子代理的可观测性 |
| [19873](https://github.com/google-gemini/gemini-cli/issues/19873) | 零依赖 OS 沙箱与执行后意图路由 | P2 | 9 | 利用 Gemini 3 模型的"原生 bash 倾向"，结合零依赖沙箱执行 POSIX 工具链；平衡安全性与模型能力释放，是大型增强方向 |
| [21409](https://github.com/google-gemini/gemini-cli/issues/21409) | Generalist agent 长时间挂起 | P1 🔴 | 8 👍8 | 任何委托给通用代理的简单任务（如创建文件夹）都会无限挂起；👍 8 个 upvote，是当前社区痛点最强烈的体验问题之一 |
| [22745](https://github.com/google-gemini/gemini-cli/issues/22745) | 评估 AST 感知文件读取/搜索/映射的价值 | P2 | 7 | EPIC 级技术调研，意图以 AST 工具降低误读与 token 噪声；与 #22746 配套 |
| [21968](https://github.com/google-gemini/gemini-cli/issues/21968) | Gemini 不会主动调用自定义 skills 与 sub-agents | P2 | 6 | 用户反馈除非显式要求，否则模型几乎不主动委派任务；涉及调度提示与编排设计 |
| [26525](https://github.com/google-gemini/gemini-cli/issues/26525) | Auto Memory 增加确定性脱敏并减少日志 | P2 | 5 | Auto Memory 在提取阶段后才脱敏，存在密钥泄漏窗口；需要确定性脱敏并降低日志冗余 |
| [25166](https://github.com/google-gemini/gemini-cli/issues/25166) | Shell 命令完成后仍卡在 "Waiting input" | P1 🔴 | 4 👍3 | 简单 CLI 命令执行完毕后，CLI 仍显示 shell 处于等待状态；影响日常体验 |
| [22232](https://github.com/google-gemini/gemini-cli/issues/22232) | browser_agent 自动接管与锁恢复 | P3 | 4 | 当前 BrowserManager 对锁定的浏览器 profile 采取 "fail-fast"，缺少自动会话接管能力 |
| [21983](https://github.com/google-gemini/gemini-cli/issues/21983) | Wayland 下 browser 子代理失败 | P1 🔴 | 4 | Wayland 桌面环境下浏览器子代理直接失败；与 Linux 桌面兼容性相关 |
| [24246](https://github.com/google-gemini/gemini-cli/issues/24246) | 工具数量 > 128 触发 400 | P2 | 3 | 当工具清单过大时，模型调用直接返回 400；需要更智能的工具范围管理 |

> 总体观察：Agent 子代理错误状态上报（#22323）、Agent 挂起（#21409、#25166）以及 Auto Memory 体系（#26516、#26522、#26523、#26525）构成了近期最核心的 P1/P2 议题。

---

## 🛠 重要 PR 进展

| # | PR | 类别 | 内容 |
|---|----|------|------|
| [29163](https://github.com/google-gemini/gemini-cli/pull/29163) | 修复 Git 仓库内认证崩溃 | P1 安全 | 在 macOS Seatbelt 等受限权限环境下启动时，`useGitBranchName` hook 会触发崩溃；本次修复避免认证流程中断 |
| [29117](https://github.com/google-gemini/gemini-cli/pull/29117) | MCP OAuth 实现 RFC 9207 发行者校验 | 安全 | 扩展 `OAuthAuthorizationResponse` 支持 `iss` 字段，校验响应来源一致性，防止 token 被错误路由 |
| [28863](https://github.com/google-gemini/gemini-cli/pull/28863) | 扩展环境变更需用户同意 | 安全 | 将 MCP server 环境配置纳入 consent 字符串，并清理运行时环境变量注入；解决扩展更新绕过授权的问题 |
| [29067](https://github.com/google-gemini/gemini-cli/pull/29067) | 清理 A2A server 误导性安全声明 | P1 安全 | 移除 `coderAgentCard` 中不实的 `securitySchemes` 与硬编码凭证，修正本地开发接口未鉴权的事实 |
| [28888](https://github.com/google-gemini/gemini-cli/pull/28888) | A2A 启动器工作区可置于 home 外 | P2 安全 | 引入 `CODER_AGENT_WORKSPACE_PATH` 作为默认限制根，并保留 `CODER_AGENT_ALLOWED_ROOT` 显式覆盖（已合并相关修复） |
| [29063](https://github.com/google-gemini/gemini-cli/pull/29063) | 非交互会话中 Plan Mode 不再空等用户反馈 | P1 体验 | 修复 #28913：`gemini -p "..." -y` 模式下 Plan Mode 提示等待不存在的用户轮次，导致挂起 |
| [29089](https://github.com/google-gemini/gemini-cli/pull/29089) | BaseLlmClient 将 abortSignal 透传给 retryWithBackoff | 可靠性 | 解决会话总结、分类器等组件的取消信号未真正触发底层重试退出的问题 |
| [29087](https://github.com/google-gemini/gemini-cli/pull/29087) | 防止并发扩展安装竞态 | 稳定性 | 利用现有 `proper-lockfile` 给扩展安装/更新加锁，避免两个进程交错写入元数据 |
| [29088](https://github.com/google-gemini/gemini-cli/pull/29088) | VS Code 扩展关闭 MCP 流时正确 stop() | 核心 | 修复 `IdeServer.stop()` 因 MCP 长连接持有而不 resolve，导致扩展 deactivate 阻塞 |
| [28951](https://github.com/google-gemini/gemini-cli/pull/28951) / [28952](https://github.com/google-gemini/gemini-cli/pull/28952) / [28953](https://github.com/google-gemini/gemini-cli/pull/28953) | PR 生成流水线完整化 | 平台/评估 | 为 Caretaker PR Generation 流水线补齐 Cloud Run Job、Workflow 编排、部署脚本、HTML diff 可视化与自动提 PR 工具链 |

> 同时段关闭的修复还包括：[#28889](https://github.com/google-gemini/gemini-cli/pull/28889)（能力探测后恢复 stdin 暂停态）、[#28893](https://github.com/google-gemini/gemini-cli/pull/28893)（保留显式 Flash 模型 ID）、[#28895](https://github.com/google-gemini/gemini-cli/pull/28895)（识别混合 function-call 轮）、[#28897](https://github.com/google-gemini/gemini-cli/pull/28897)（plan-routing 尊重模型可用性）、[#28875](https://github.com/google-gemini/gemini-cli/pull/28875)（fetchJson 容错）。

---

## 📈 功能需求趋势

1. **AST 感知的代码理解** ：`#22745` 与 `#22746` 形成 EPIC 调研线，意在用 AST 工具替代粗粒度文件读取，**显著降低 token 消耗** 与误读率，与 #19561（"Tactful Extraction"）方向一致。
2. **Agent 鲁棒性与可观测性** ：子代理终止状态上报（#22323）、挂起问题（#21409、#25166）、浏览器子代理的 Wayland 兼容性（#21983）、Bug 报告缺子代理上下文（#21763）形成集群，需要更完善的 **execution trace** 与 **会话接管机制**。
3. **Auto Memory 体系全面加固** ：#26516 / #26522 / #26523 / #26525 一组四个 issue 集中治理记忆提取、补丁校验、低信号会话与日志脱敏问题，说明 **长期记忆** 已成为优先级提升的能力方向。
4. **沙箱与权限模型演进** ：#19873（零依赖 OS 沙箱）、#29067（A2A 鉴权声明）、#28863（扩展环境变量清理）共同构成 **"在不破坏 UX 的前提下收紧执行边界"** 主题。
5. **非交互/CI 体验** ：#29063 修复 Plan Mode 在非交互模式下挂起，配合 #21000（任务跟踪原生化）、#18836（持久化任务追踪）—— 反映 **headless 与自动化场景** 在被严肃对待。
6. **CLI 工具承载能力** ：#24246 触发"工具数 > 128 即 400"，提示需要 **工具作用域裁剪** 与 **动态启用** 机制，避免大规模工具集成为瓶颈。

---

## 💬 开发者关注点

- **稳定性 > 新功能**：今日讨论热度最高的几个 issue（#22323、#21409、#25166）都不是新特性，而是 **子代理错误状态、挂起、命令执行假死** 等基础可靠性问题，反映社区对"Agent 行为可预测性"的耐心正在消耗。
- **Linux 桌面与浏览器代理**：Wayland 兼容性问题（#21983）、BrowserManager 锁恢复（#22232）、配置覆盖被忽略（#22267）说明 **浏览器子代理** 仍是体验短板，需要补齐跨平台与异常恢复能力。
- **Skills/Sub-agent 调度**：开发者反复反馈 Gemini "除非显式要求否则不主动用 skills"（#21968），希望模型具备更强的 **任务特征识别 → 工具/子代理路由** 能力，而非依赖提示词绕路。
- **Token 经济性**：AST 工具调研（#22745/#22746）+ Tactful Extraction（#19561）+ 任务跟踪从 in-context 走向持久化文件（#18836/#21000）共同反映 **降低每轮 token 消耗、减少 context rot** 是长期工程化方向。
- **安全合规日趋严格**：OAuth 发行者校验（#29117）、扩展环境变量清理（#28863）、A2A 安全声明（#29067、#28888）三个 PR 在同一周期内推进，说明 **扩展生态与多代理通信的安全治理** 已成为发布节奏的一部分。
- **可分享/可复盘的子代理轨迹**：#22598（`/chat share` 暴露子代理轨迹）、#21763（bug 报告需含子代理上下文）显示开发者对 **跨子代理 debug 工具** 的需求强烈。

---

*报告基于 GitHub 公开数据生成，仅反映仓库层面动态。更多细节请查阅上述链接。*

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

<think>The user wants me to generate a Chinese daily report for GitHub Copilot CLI community activity on 2026-09-02. Let me analyze the data carefully:

1. **Releases**: v1.0.83-1 released with new features around session sorting and enterprise login settings, plus MCP config improvements.

2. **Issues**: 37 issues updated, top 30 shown. I need to pick 10 most noteworthy ones.

3. **Pull Requests**: 0 PRs in the last 24 hours.

Let me organize by importance:

**Top Issues by comments/relevance**:
- #13 - vi/vim input mode (CLOSED, 9 comments, 75 likes) - major feature request, now closed
- #4664 - JavaScript OOM crash on long sessions (5 comments)
- #4525 - MCP initialization error with Python SDK 2.0 (4 comments)
- #3688 - Repository-level custom agents path resolution (3 comments, 3 likes)
- #3421 - Azure DevOps MCP Server error (3 comments)
- #4438 - disable-model-invocation makes skill unreachable (3 comments, 6 likes)
- #4681 - MCP OAuth missing User-Agent header (2 comments, new)
- #4680 - CLI sends wrong model ID to custom endpoint (2 comments, new)
- #4414 - BYOK 403 error (CLOSED, 2 comments)
- #4672 - /model command broken with BYOK (2 comments, 1 like)
- #4203 - OAuth refresh token not used (1 comment)
- #4686 - Node.js OOM after 37 min with libuv handle leaks (1 comment)
- #4683 - PowerShell ConstrainedLanguage mode error (1 comment)
- #4684 - closed
- #4637 - duplicate skill lookup (1 comment)
- #4655 - Agent Plugins 1.0 custom agents not discovered (1 comment)
- #4113 - ACP mode session/close (CLOSED, 1 comment)
- #4691 - apply_patch attribution missing (new)
- #4633 - view tool rejects 8.6KB file (new)
- #4690 - marketplace add fails on long paths (new)
- #4689 - Issues/Panels resolve to fork (new)
- #4688 - subagent concurrency limiter load-blind (new)
- #4687 - AGENTS.md not preserved across /compact (new)
- #4685 - Vietnamese bug report (no info)
- #4682 - path-scoped write approvals (new)
- #4413 - session.resume replays reasoning metadata (CLOSED)
- #4645 - session.resume ignores model parameter (CLOSED)
- #4679 - Sandbox bug blocking shell (new)
- #4678 - ACP session/new blocks 192s (new)

I'll pick the 10 most important issues considering:
- High community engagement (comments + likes)
- Severity of the bug
- New reports (just opened)
- Feature requests with high demand
- Recently closed issues (showing team responsiveness)

Top 10 picks:
1. #13 - vi/vim mode (CLOSED after high demand) - shows responsiveness to long-standing feature request
2. #4664 - JS OOM crash on session resume - critical stability bug
3. #4525 - MCP initialize error - SDK compatibility
4. #4438 - disable-model-invocation issue - skills feature bug
5. #4680 - wrong model ID to OpenAI endpoint - BYOK bug
6. #4681 - MCP OAuth User-Agent missing - OAuth bug
7. #4672 - /model broken with BYOK - regression
8. #4686 - Node.js OOM with libuv handles - serious stability
9. #4678 - ACP session/new blocks 192s - UX issue
10. #3688 - Repository-level path resolution inconsistency

For PRs: There are 0 PRs in the last 24 hours, so I'll need to note this and perhaps reference some from issues context.

Feature trends:
- MCP integration issues (OAuth, model compatibility, timeouts)
- BYOK (Bring Your Own Key) issues - OpenAI/Anthropic compatible providers
- Session management (OOM, resume, attribution)
- PowerShell/Windows compatibility
- Skills and agents system
- ACP (Agent Client Protocol) integration
- Vim/vi input mode (long-standing)
- Agent Plugins 1.0

Developer concerns:
- Stability/memory leaks in long sessions
- BYOK model handling
- MCP OAuth token refresh
- Skills system bugs
- Cross-platform issues (Windows PowerShell)

Let me write the report now.</think>

# GitHub Copilot CLI 社区动态日报

**日期：2026-09-02**

---

## 1. 今日速览

今日最值得关注的是 **v1.0.83-1 版本发布**，带来 Sessions 侧边栏排序、Enterprise 登录策略管控等增强。社区方面，长期呼声最高的 **#13（Vi/Vim 输入模式）正式关闭**，标志着团队已通过其他方式回应此需求；但同时，多个 **MCP 兼容性问题**、**BYOK 回归 Bug** 与 **长时间会话内存泄漏** 持续引发开发者关注。

---

## 2. 版本发布

### v1.0.83-1 已发布

**新增（Added）**
- Sessions 分屏侧边栏支持「Recent / Created / Name / 经典 None」四种排序方式，所选排序在重启后仍保留。
- Enterprise 管理员可通过 `forceLoginOrgs` 受管设置，将登录限定在已批准的 GitHub 组织范围内。

**改进（Improved）**
- `/mcp config` 命令与 MCP 添加/编辑流程的体验优化（详细变更说明被截断，建议查看 release notes）。

> 建议升级：特别是使用 BYOK 或在企业策略下运行的团队，请尽快验证兼容性。

---

## 3. 社区热点 Issues

### 🔥 #13 【已关闭】CLI 应支持 vi/vim 输入模式
- 作者：@RyanHecht ｜ 评论 9 ｜ 👍 **75**
- 链接：https://github.com/github/copilot-cli/issues/13
- **为什么重要**：这是仓库内获赞最高的功能请求之一。历经近一年讨论后被关闭，说明团队可能通过其他方式（如外部编辑器集成或键盘快捷键）满足了部分需求。建议关注后续是否会以新 issue 形式重新提出。

### ⚠️ #4664 【进行中】恢复长会话时 JavaScript 堆内存溢出崩溃
- 作者：@shrijitnair ｜ 评论 5
- 链接：https://github.com/github/copilot-cli/issues/4664
- **为什么重要**：直接命中 Copilot CLI 的核心使用场景——**长时间会话恢复**。在加载旧会话阶段即触发 OOM，意味着用户无法继续先前工作流，对依赖 CLI 进行多日开发协作的用户影响严重。

### 🔌 #4525 【进行中】1.0.81-1 在 MCP 现代发现后仍发送旧版 `initialize`，触发 -32022 错误
- 作者：@dmbutko ｜ 评论 4
- 链接：https://github.com/github/copilot-cli/issues/4525
- **为什么重要**：暴露了 CLI 与 **Python MCP SDK 2.0.0** 双时代运行器的协议兼容性问题，影响所有使用 Python 实现 MCP Server 的开发者，是 MCP 生态互操作性的关键障碍。

### 🧩 #4438 【进行中】`disable-model-invocation: true` 导致技能完全不可调用
- 作者：@grammy-jiang ｜ 评论 3 ｜ 👍 6
- 链接：https://github.com/github/copilot-cli/issues/4438
- **为什么重要**：本意为「禁止模型自动调用」的标记，反而让 **用户在显式请求时也无法触发**，语义严重偏离预期，对 Skills 体系可信度构成挑战。

### 📂 #3688 【进行中】仓库级自定义 agent 基于 git 根目录解析，但 skills 与 .mcp.json 基于 cwd
- 作者：@NiceAsiv ｜ 评论 3 ｜ 👍 3
- 链接：https://github.com/github/copilot-cli/issues/3688
- **为什么重要**：揭示了仓库级配置三类来源（agents / skills / MCP）使用了 **两种不同基准目录**，这种不一致极容易导致「在我机器上能跑」的诡异问题，需要统一规范。

### 🌐 #4680 【新】CLI 向自定义 OpenAI 兼容端点发送错误的 model ID
- 作者：@arisng ｜ 评论 2
- 链接：https://github.com/github/copilot-cli/issues/4680
- **为什么重要**：在 BYOK 配置 `mimo-v2.5` 等非 OpenAI 模型名时，CLI 仍发送 `gpt-5.4-nano`，导致会话立即中断。这是 BYOK 场景下又一个 **模型路由错误** 类问题，影响所有自托管模型用户。

### 🔐 #4681 【新】MCP OAuth：初始化请求遗漏 User-Agent 头，忽略自定义 headers
- 作者：@halo14 ｜ 评论 2
- 链接：https://github.com/github/copilot-cli/issues/4681
- **为什么重要**：基于 `rmcp`/`reqwest` 的 HTTP 客户端在 OAuth 成功后的 `initialize` 请求未携带 `User-Agent`，与该请求之前后的行为不一致，可能影响部分严格校验 UA 的 MCP Server。

### 📉 #4672 【进行中】1.0.82 回归：BYOK 场景下 `/model` 命令报「Unknown command」
- 作者：@extedosse ｜ 评论 2 ｜ 👍 1
- 链接：https://github.com/github/copilot-cli/issues/4672
- **为什么重要**：1.0.81/82 引入的回归 Bug，对 Azure AI Foundry 等多模型托管平台用户尤其致命——无法在会话中切换模型意味着模型选择权被剥夺。

### 💥 #4686 【新】Node.js 在约 37 分钟后 OOM 崩溃——31,965 个 libuv 句柄泄漏
- 作者：@Marcus-Lindbloom ｜ 评论 1
- 链接：https://github.com/github/copilot-cli/issues/4686
- **为什么重要**：诊断报告极为详尽，定位到 **SEA 嵌入的 Node.js 忽略 `NODE_OPTIONS`** 与大量异步句柄未释放。意味着即便用户尝试调大堆内存也无效，必须由团队在运行时层修复。

### 🐢 #4678 【进行中】ACP 模式下 `session/new` 因单个无响应 MCP 服务器阻塞 192 秒
- 作者：@jessmi ｜ 评论 0
- 链接：https://github.com/github/copilot-cli/issues/4678
- **为什么重要**：缺乏 **MCP 启动超时预算**，让一个坏掉的服务器拖死整个客户端启动流程。ACP 是面向 IDE 与第三方 Agent 集成的关键协议，此类阻塞将直接破坏集成体验。

### 🌳 #4688 【新】子智能体并发限制器对主机负载无感知，导致 CLI UI 卡死
- 作者：@scorp508
- 链接：https://github.com/github/copilot-cli/issues/4688
- **为什么重要**：12 线程笔记本上并发子智能体即可让 CLI 自 UI 冻结，反映出 **静态计数器式并发控制** 缺乏负载反馈，在「Agent 舰队」场景下体验崩塌。

---

## 4. 重要 PR 进展

**过去 24 小时内无 PR 更新。**

建议关注状态：当前仓库的活跃贡献者主要集中在 issue 反馈与 bug 定位上，PR 流入明显放缓，可能与近期版本聚焦稳定性修复相关。开发者若有意提交，可优先认领以上高频问题对应的修复方向（如 MCP OAuth 刷新、BYOK 模型路由、`/compact` 上下文保留等）。

---

## 5. 功能需求趋势

综合 30 条高互动 Issue 提炼出以下热点方向：

| 方向 | 代表 Issue | 社区热度 |
|------|-----------|---------|
| **MCP 生态成熟化** | #4525、#3421、#4681、#4678、#4203 | ⭐⭐⭐⭐⭐ |
| **BYOK 与自定义模型** | #4680、#4672、#4414 | ⭐⭐⭐⭐ |
| **长时间会话稳定性 / 内存管理** | #4664、#4686、#4413、#4645 | ⭐⭐⭐⭐ |
| **Skills / Agents 体系语义修正** | #4438、#4637、#4655、#3688 | ⭐⭐⭐ |
| **键盘与编辑器体验** | #13（Vi/Vim）、#3971（文件树） | ⭐⭐⭐ |
| **跨平台兼容（Windows/PowerShell）** | #4683、#4679 | ⭐⭐ |
| **Agent Client Protocol (ACP)** | #4678、#4113 | ⭐⭐ |

**趋势洞察**：MCP 与 BYOK 已成为当前两大核心议题，反映社区正在从「能否跑起来」走向「能否在自定义栈上稳态运行」。

---

## 6. 开发者关注点

整理自开发者反馈与 bug 报告：

1. **🔴 长会话可靠性是头号痛点**
   OOM、libuv 句柄泄漏、`/compact` 后丢失 AGENTS.md 指令——多条 Issue 指向同一根因：**会话持久化与上下文压缩路径未做充分压力测试**。这与企业级长期任务需求直接冲突。

2. **🟠 MCP OAuth 流程尚未达到「开箱即用」**
   涉及 User-Agent 缺失、refresh token 未自动使用、初始化协议版本不一致等问题，使开发者在配置远程 MCP Server 时频繁踩坑。

3. **🟡 BYOK 模型路由缺乏严格校验**
   端点配置错误时不会立即报错，而是静默替换为默认模型 ID，调试体验差。建议增加 dry-run 或校验阶段。

4. **🟢 Windows / 企业环境适配仍有缺口**
   PowerShell ConstrainedLanguage、AppLocker、SEA 内嵌 Node.js 等企业级约束未被识别，导致在受管设备上几乎无法使用。

5. **🟣 文档与可发现性不足**
   多位开发者反映 Skills/MCP 配置路径不统一、AGENTS.md 等指令文件作用域不明，希望官方文档提供更明确的「优先级与作用域」说明。

---

**📌 报告说明**
- 数据范围：github.com/github/copilot-cli 过去 24 小时（2026-09-01 ~ 2026-09-02）动态
- 引用条目均附 GitHub 链接，建议结合 issue 评论时间线持续追踪修复进度
- 如需补充 PR 数据或更细维度分析，可基于完整 JSON 进一步钻取

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

<think>The user wants me to generate a Chinese daily report based on GitHub data for the Kimi Code CLI repository. Let me analyze the data carefully:

**Date**: 2026-09-02

**Releases**: 1.50.0 was released, with changes including:
- Fix for empty anthropic-beta header
- Bump kosong to 0.56.0
- Deprecation-aware shell update flow

**Issues (5 total, all CLOSED)**:
1. #1287 - Cannot write prompt for next task while executing current one
2. #1298 - Yolo mode: needs to view shell execution and file writing content
3. #1297 - Cancelling subagents with escape key displays errors (Windows)
4. #1294 - Follow XDG Base Directory specification
5. #1292 - Task calling sometimes gets stuck

**Pull Requests (4 total)**:
1. #2614 - OPEN - Documentation for plugin security and persistent data
2. #2632 - CLOSED - Chore release: bump kimi-cli to 1.50.0
3. #742 - CLOSED - Add $ list skills like codex
4. #2630 - CLOSED - feat(shell): deprecation-aware update flow with one-key migration to Kimi Code

Now I need to structure the report. Note that there are only 5 issues and 4 PRs, not 10 each as requested. I should mention all of them since the data only has these.

Let me also note that the issues are all marked as [CLOSED] which is interesting - they may have been resolved quickly. The issues were created in February-March 2026 but only updated recently. So they were old issues that were recently closed.

Let me write the report now in Chinese, with proper structure:

1. 今日速览 - Brief overview of the most important developments
2. 版本发布 - 1.50.0 release details
3. 社区热点 Issues - All 5 issues
4. 重要 PR 进展 - All 4 PRs
5. 功能需求趋势 - Identify themes
6. 开发者关注点 - Pain points and high-frequency needs

Looking at the issues, I can identify several themes:
- Yolo mode transparency (need to see what shell commands are executed)
- Task system issues (parallel task execution, prompt input during execution)
- Cross-platform issues (Windows escape key error)
- Configuration management (XDG Base Directory compliance)
- Subagent control

For the data: The issues are old (created in Feb-March 2026) but recently updated and closed. The user asking for the latest 24h dynamics - the 24h updates are from 2026-09-01 to 2026-09-02.

Let me write this report carefully, professionally, and concisely.

Actually, looking again, the user wants 10 entries but only 5 issues and 4 PRs exist. I'll list all of them and note the smaller count.</think>

# Kimi Code CLI 社区动态日报

**日期**: 2026-09-02
**数据来源**: [MoonshotAI/kimi-cli](https://github.com/MoonshotAI/kimi-cli)

---

## 1. 今日速览

今日最核心的动态是 **Kimi Code CLI v1.50.0 正式发布**，本次更新重点引入了"Shell 命令的废弃感知更新流程"，并支持一键迁移至 Kimi Code 产品线，标志着该项目正式从 `kimi-cli` 向 `Kimi Code` 品牌过渡。与此同时，过去 24 小时内有 **5 个 Issues 被集中关闭**，涉及任务并行执行、Yolo 模式透明度、XDG 目录规范等长期社区诉求。整体来看，社区生态正处于品牌整合与体验打磨并行的关键阶段。

---

## 2. 版本发布

### 🚀 v1.50.0 已发布

**发布 PR**: [#2632](https://github.com/MoonshotAI/kimi-cli/pull/2632)

主要更新内容（基于可见的 changelog）：

| 模块 | 更新项 | 关联 PR |
|------|--------|---------|
| **kosong** | 当未声明 beta 特性时，省略空的 `anthropic-beta` 请求头，避免无效请求 | [#2580](https://github.com/MoonshotAI/kimi-cli/pull/2580) |
| **依赖升级** | `kosong` 升级至 `0.56.0` | [#2581](https://github.com/MoonshotAI/kimi-cli/pull/2581) |
| **Shell** | 引入废弃感知（deprecation-aware）更新流程，当 CDN 发布迁移通知时，自动引导用户一键迁移到 Kimi Code | [#2630](https://github.com/MoonshotAI/kimi-cli/pull/2630) |

> 📌 **注意**：本次发版在功能层面是一个里程碑式节点——CLI 将主动检测 `https://cdn.kimi.com/kimi-code-tips/kimi_cli/migration.json` 中的废弃通知，意味着旧版 `kimi-cli` Python 包将在未来某一节点停止维护。

---

## 3. 社区热点 Issues

> 过去 24 小时内共有 **5 条 Issues 更新**，且全部状态为 `CLOSED`。以下是按社区关注度整理：

### 🥇 #1298 — Yolo 模式下查看 Shell/文件写入内容
- **链接**: https://github.com/MoonshotAI/kimi-cli/issues/1298
- **作者**: @Wolido | 👍: 0
- **重要性**: 触及 **安全可控性** 这一核心痛点。在 Yolo（自动批准）模式下，长 Shell 命令中段常被 `...` 截断，用户无法审计实际行为；项目执行涉及文件写入时同样缺乏可视化手段。该需求是 AI Coding 工具迈向企业级使用的关键信任门槛。
- **社区反应**: 相似诉求长期存在，反映了"AI 自动执行"与"用户可观测性"之间的天然张力。

### 🥈 #1297 — Escape 取消子 Agent 时抛出异常（Windows）
- **链接**: https://github.com/MoonshotAI/kimi-cli/issues/1297
- **作者**: @chriswingler | 👍: 1 | **平台**: Windows 11
- **重要性**: 这是 Subagent（子任务）取消链路上的 **未捕获异常**（Unhandled exception），属于稳定性问题。Windows + ESC 中断的交互路径恰好覆盖了高频使用场景，建议关注修复是否进入下一个补丁版本。

### 🥉 #1294 — 请遵循 XDG Base Directory 规范
- **链接**: https://github.com/MoonshotAI/kimi-cli/issues/1294
- **作者**: @sisrfeng | 👍: 1
- **重要性**: 提议将默认配置目录从 `~/.kimi` 迁移到 `~/.config/kimi`，符合 [XDG Base Directory Specification](https://specifications.freedesktop.org/basedir-spec/)。Linux 桌面用户对 `$HOME` 目录整洁度的诉求强烈，社区附带了 antidot、xdotool 等项目的引用作为背书，反映了对长期可维护配置的期待。

### 🏅 #1287 — 任务执行中无法预备下一条 Prompt
- **链接**: https://github.com/MoonshotAI/kimi-cli/issues/1287
- **作者**: @XiaoPengYouCode | 👍: 0
- **重要性**: 反映了 **任务编排效率** 的需求——当 Agent 还在执行长任务时，用户希望提前草拟下一轮交互的 prompt，类似 IDE 中的"待发送消息草稿"。该诉求与"批量任务流"的产品形态紧密相关。

### 🏅 #1292 — 调用 Task 子任务偶发卡死
- **链接**: https://github.com/MoonshotAI/kimi-cli/issues/1292
- **作者**: @Wolido | 👍: 0 | **平台**: macOS (Darwin arm64)
- **重要性**: 多子任务并行时，存在某一子任务无响应卡死的稳定性问题。该 Bug 直接影响 v1.16.0 的可靠性，需要明确 1.50.0 是否已通过 kosong 升级或调度改造覆盖此场景。

---

## 4. 重要 PR 进展

> 过去 24 小时共有 **4 条 PR 更新**，覆盖版本发布、文档、新功能与跨产品迁移：

### ✅ #2632 (CLOSED) — chore(release): bump kimi-cli to 1.50.0
- **作者**: @sailist | **链接**: https://github.com/MoonshotAI/kimi-cli/pull/2632
- 同步 `packages/kimi-code` 包装器与 `kimi-cli==1.50.0` 依赖 pin，运行版本一致性检查脚本。本次发版的元数据 PR。

### ✅ #2630 (CLOSED) — feat(shell): deprecation-aware update flow
- **作者**: @jackfish212 | **链接**: https://github.com/MoonshotAI/kimi-cli/pull/2630
- **亮点**: CLI 拉取 CDN 中的 `migration.json` 通知，识别到 `kimi-cli` Python 包被废弃后，引导用户**一键升级/迁移到 Kimi Code**。这是产品形态调整的关键 UX 设施。
- **意义**: 平滑过渡避免存量用户"被突然通知停止维护"。

### 🔵 #2614 (OPEN) — docs(plugins): 安全与持久化数据文档化
- **作者**: @QIANLING-0831 | **链接**: https://github.com/MoonshotAI/kimi-cli/pull/2614
- **亮点**: 文档化插件契约（`plugin.json`、命令注册、`inject` 安装于 `~/.kimi/plugins/`）。**纯文档 PR**，但补充了"插件能访问什么数据、持久化策略如何"这块空白，是插件生态走向正规化的前置工作。

### ✅ #742 (CLOSED) — Add `$ list skills` like codex
- **作者**: @ZacharyZhang-NY | **链接**: https://github.com/MoonshotAI/kimi-cli/pull/742
- **亮点**: 模仿 Codex 增加 `$ list skills` 命令，便于用户浏览可用技能。由于缺乏维护者预先确认（依据 Contributing Guide），该 PR 被关闭——可作为社区贡献者的"流程提示"参考。

---

## 5. 功能需求趋势

将过去 24 小时内更新的 5 条 Issue 的诉求提炼为以下趋势方向：

| 趋势方向 | 关联 Issue | 关键洞察 |
|----------|-----------|---------|
| 🔒 **可观测性与安全审计** | #1298 | Yolo 模式下需要"玻璃箱"视图，查看 Shell 内容、文件 Diff，否则无法在生产场景长期使用 |
| 🪟 **跨平台稳定性** | #1297 | Windows + ESC 取消路径存在异常未捕获，需要重新梳理 Subagent 生命周期 |
| 📁 **配置标准合规** | #1294 | Linux 桌面用户期待 XDG 规范，社区对 `$HOME` 整洁度的诉求强烈 |
| ⏭️ **任务编排升级** | #1287、#1292 | Agent 串行/并行执行期间：① 需要"任务草稿区"；② 多 Subagent 并行存在调度卡死风险 |
| 🧩 **插件生态规则化** | PR #2614 | 社区需要清晰的插件安全与持久化策略文档支撑 |

> 综合来看，**"AI 自动执行"与"用户可观测性/可控性"之间的张力**，仍是当前最突出的产品矛盾。

---

## 6. 开发者关注点

开发者反馈中集中体现以下**痛点与高频需求**：

1. **🛡️ 信任赤字 (Trust Deficit)**
   在 Yolo 模式下无法回溯具体 Shell 命令或文件 Diff 改动（#1298），是阻碍企业/团队采用的核心障碍。开发者普遍呼吁：即便开启自动批准，也必须保留**事后审计**能力。

2. **🧵 多 Subagent 调度的可靠性**
   #1292 报导"多子任务并行时某个任务卡死"，#1297 报导 Windows 下按 ESC 取消会触发未捕获异常。这两条 Issue 共同指向 Subagent 生命周期管理（启动、取消、超时、并发上限）仍需加固。

3. **🗂️ 配置管理的长期化诉求**
   #1294 提议遵循 XDG Base Directory，反映开发者对**配置可移植性**、**家目录整洁性**的长期期待——这也意味着未来需为 Windows/macOS/Linux 设计一致的配置加载抽象。

4. **📜 插件生态需要"白纸黑字"**
   PR #2614 的存在表明，社区贡献者已经在写插件，但缺乏权威的"安全模型"与"持久化边界"文档。这是一类**生态就绪度**（ecosystem readiness）问题。

5. **🔁 产品品牌过渡需要平滑机制**
   PR #2630 引入的 CDN 拉取 + 一键迁移方案，标志着 `kimi-cli` → `Kimi Code` 的品牌过渡进入执行阶段。开发者关心：**老的 Python 入口是否会保留兼容窗口？配置文件是否需要手工迁移？**

---

*日报生成完毕。如需追溯某条 Issue/PR 的讨论细节，可点击对应 GitHub 链接。*

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

<think>The user wants me to generate a daily report for OpenCode community based on GitHub data. Let me analyze the data carefully:

1. **Release**: v1.18.26 was released with bugfixes for Claude 5 sessions, Bedrock GPT-5.6 models, Bedrock reasoning, and tool call timing.

2. **Issues**: 50 issues total, showing top 30. Notable patterns:
   - **HUGE cluster of issues about "stale project path after moving/renaming folder"** - This is clearly the dominant theme. At least 20+ issues are about project path persistence bugs:
     - #34737, #35240, #31888, #31074, #39471, #31401, #44538, #44101, #34373, #33909, #31869, #46330, #45392, #42315, #40986, #40699, #40596, #40336, #38151, #37697, #36150, #36004, #35674, #35491, #35427, #33995, #33615, #33359
   - #33704 - Feature request for GUI to manage custom providers (open issue)
   - #42263 - Memory leak with PDF attachments (open issue)

3. **PRs**: 50 PRs total, top 20 shown:
   - #46728 - docs(zen): add Claude Fable 5.1
   - #46724 - feat(core): add hidden glob option (closed)
   - #46719 - Add Windows NSIS
   - #46726 - fix(tui): exit cleanly when startup probes cannot reach the server
   - #46682 - fix(cli): await plugin activation before caching ACP catalog
   - #46725 - fix(core): rebuild registry state on read
   - #46631 - fix(core): rebuild registry state on read (closed duplicate)
   - #46328 - feat(plugin): add goal-loop example plugin
   - #46721 - refactor(core): carry typed job outcomes for stops
   - #46717 - feat(app): add timeline detail presets
   - #46650 - fix(tui): show session scrollbar by default
   - #46720 - feat(client): isolate optimistic submission lifecycle (closed)
   - #46723 - fix(app): stabilize optimistic prompt position
   - #46710 - fix(core): copy models.dev snapshot without structuredClone (closed)
   - #46626 - chore(tui): upgrade OpenTUI to 0.5.10 (closed)
   - #40125 - feat(opencode): Allow per-MCP-server trust configuration
   - #46718 - fix(core): report duplicate plugin IDs as inventory failures (closed)
   - #46716 - feat(core): add grep matching options (closed)
   - #46713 - fix(app): keep new local sessions in the selected directory (closed)
   - #46715 - fix(app): keep background hint visible for at least one second (closed)

Let me organize this into a structured daily report in Chinese.

Key insights:
- The dominant theme is the "stale project path" bug after moving/renaming folders - this is a critical, long-standing problem affecting many users
- v1.18.26 has been released with bugfixes
- New feature: Claude Fable 5.1 documentation
- MCP server trust configuration is being added
- Timeline UI improvements
- Windows NSIS installer being added

Let me write the report.</think>

# OpenCode 社区动态日报
**2026-09-02**

---

## 📌 今日速览

今天 OpenCode 发布了 **v1.18.26** 修复版本，重点修复 Claude 5 会话中陈旧 thinking block 导致失败、Bedrock GPT-5.6 推理参数及工具调用计时等问题。社区讨论几乎被 **"项目目录移动/重命名后路径残留（stale project path）"** 这类长期待解的 bug 所主导——仅 Top 30 Issues 中就有超过 20 条与之相关，本月已批量关闭一批但根因尚未根除。PR 方面，Windows NSIS 安装包、OpenTUI 0.5.10 升级、MCP 服务器级 TLS 指纹配置等方向均取得进展。

---

## 🚀 版本发布

### v1.18.26（2026-09-02）
**核心修复（Bugfixes）：**
- **Claude 5 会话**：现在能容忍陈旧的 thinking block，不再因 prompt 或工具变更而失败。
- **Bedrock GPT-5.6**：支持 `none` 推理强度（reasoning effort）。
- **Bedrock 推理与重放**：稳定性提升（致谢 @pengzh1）。
- **工具调用计时**：在工具运行/响应生命周期内维持准确性。

---

## 🔥 社区热点 Issues（Top 10）

> ⚠️ **本日报最重要的洞察**：今日 Issues 中超过 70% 都围绕同一个根因——**当用户在 Finder / 文件系统中移动或重命名项目目录后，OpenCode Desktop 仍缓存旧路径，导致会话失效、ENOENT 报错、侧边栏错乱**。以下挑选 Top 10 代表性问题：

| # | Issue | 状态 | 评论 | 关键点 |
|---|---|---|---|---|
| [#34737](https://github.com/anomalyco/opencode/issues/34737) | 项目目录移动后路径不更新，打开已删除路径 | CLOSED | 8 | 桌面端核心场景，最高讨论度 |
| [#35240](https://github.com/anomalyco/opencode/issues/35240) | 服务端 `project.worktree` 残留；远程客户端反复打开死路径 | CLOSED | 6 | 涉及 `opencode web` 服务端 + Desktop 客户端的同步链路 |
| [#31888](https://github.com/anomalyco/opencode/issues/31888) | Windows 工作区重置后陈旧路径仍存在 | CLOSED | 6 | Windows 11 平台典型案例 |
| [#31074](https://github.com/anomalyco/opencode/issues/31074) | macOS 桌面端持续打开已移动的项目文件夹 | CLOSED | 6 | 👍 3，社区影响较广 |
| [#39471](https://github.com/anomalyco/opencode/issues/39471) | 项目目录不存在时桌面端静默返回空响应 | CLOSED | 5 | 无错误提示、仅播放完成音，UX 极差 |
| [#31401](https://github.com/anomalyco/opencode/issues/31401) | 创建新 session 后仍自动重新打开已删除项目路径 | CLOSED | 5 | Windows 11 + v1.16.2 |
| [#33909](https://github.com/anomalyco/opencode/issues/33909) | 移动项目目录破坏原路径下所有会话 | CLOSED | 4 | 👍 5，社区**最痛**的 case：`session.directory` 与项目路径解耦缺失 |
| [#44538](https://github.com/anomalyco/opencode/issues/44538) | 重命名后 session 消失，目录匹配大小写敏感 | CLOSED | 4 | Windows 路径归一化问题 |
| [#44101](https://github.com/anomalyco/opencode/issues/44101) | 同一仓库的两个 clone 显示错误项目名/路径 | CLOSED | 4 | `project_id` 派生自 normalized git remote 的设计缺陷 |
| [#33704](https://github.com/anomalyco/opencode/issues/33704) | **[功能请求]** GUI 中管理自定义 Provider 与模型列表 | OPEN | 4 | 👍 2，本期**少数仍未关闭的开放议题**，反映社区对 LM Studio/Jan AI 本地推理集成的需求 |

**社区反应**：如此高密度的同质化 Issue 表明这是一个**长期架构级问题**（涉及 SQLite 中 `session.directory`、`project.worktree`、`project_id` 派生逻辑、跨端同步状态机），而非零散 bug。

---

## 🛠️ 重要 PR 进展（Top 10）

| PR | 标题 | 状态 | 说明 |
|---|---|---|---|
| [#46728](https://github.com/anomalyco/opencode/pull/46728) | docs(zen): add Claude Fable 5.1 | OPEN | 在多语言 Zen 文档中添加 Claude Fable 5.1 文档 |
| [#46719](https://github.com/anomalyco/opencode/pull/46719) | Add Windows NSIS | OPEN | **Windows 原生安装包**，长期缺失的能力，标记 `needs:title, needs:compliance` 等待合规审查 |
| [#46717](https://github.com/anomalyco/opencode/pull/46717) | feat(app): add timeline detail presets and placement controls | OPEN | 5 档时间线详情预设（Everything → Text only）+ 独立 Placement 与 Details 控制 |
| [#46626](https://github.com/anomalyco/opencode/pull/46626) | chore(tui): upgrade OpenTUI to 0.5.10 | CLOSED | 修复丢帧、Markdown 流式丢失、scrollback 图像保留等 |
| [#40125](https://github.com/anomalyco/opencode/pull/40125) | feat(opencode): Allow per-MCP-server trust configuration | OPEN | **MCP 服务器级 TLS 指纹钉扎（fingerprint pinning）+ CA 文件配置**，兼顾安全与企业内网 CA |
| [#46726](https://github.com/anomalyco/opencode/pull/46726) | fix(tui): exit cleanly when startup probes cannot reach the server | OPEN | 修复 #36688：后台 server 冷启动时 TUI 不再卡死 |
| [#46682](https://github.com/anomalyco/opencode/pull/46682) | fix(cli): await plugin activation before caching ACP catalog | OPEN | 修复 ACP 目录过早缓存导致的模型/agent 列表不完整 |
| [#46725](https://github.com/anomalyco/opencode/pull/46725) | fix(core): rebuild registry state on read | OPEN | 解决 OAuth 注册时序问题，账户专属模型不再丢失 |
| [#46723](https://github.com/anomalyco/opencode/pull/46723) | fix(app): stabilize optimistic prompt position | OPEN | 优化消息滚动虚拟化时乐观提示的位置稳定性 |
| [#46716](https://github.com/anomalyco/opencode/pull/46716) | feat(core): add grep matching options | CLOSED | 为 grep 工具添加 `literal` 和 `caseSensitive` 选项，透传至 ripgrep |

---

## 📈 功能需求趋势

从今日活跃 Issues 与 PR 中可提炼以下社区最关注方向：

1. **🗂️ 项目生命周期管理（最热）**
   路径持久化、会话迁移、项目身份 vs git remote 解耦、目录大小写归一化——本质诉求是 *"我的目录移动后不应让所有历史作废"*。

2. **🪟 Windows 体验完善**
   Windows NSIS 安装包（#46719）、Windows + WSL 工作流（#45392）、Windows 工作区行为一致性。

3. **🔌 MCP 与 Provider 生态**
   MCP 服务器级 TLS 信任配置（#40125）、自定义 Provider GUI 管理（#33704，本地推理引擎如 LM Studio / Jan AI 集成）。

4. **🧠 多模型适配**
   Claude 5 thinking block 兼容、Bedrock GPT-5.6 推理档位新增、Zen 中追加 Claude Fable 5.1——显示多模型适配仍是高频需求。

5. **🎨 UI/UX 优化**
   时间线详情预设（#46717）、长会话默认显示滚动条（#46650）、后台提示最少显示 1 秒（#46715）、乐观提示位置稳定（#46723）。

---

## 👨‍💻 开发者关注点

综合 Issue 评论与 PR 描述，开发者痛点可归纳为：

- **💥 SQLite 状态陈旧化是头号痛点**：开发者普遍反映 `project.worktree`、`session.directory`、派生自 git remote 的 `project_id` 三类字段一旦写下就难以更新，导致"幽灵项目""不可用会话""静默 ENOENT"。**强烈呼声**：提供手动清理入口（参见 #40699）、UI 层给出明确错误提示（参见 #40596）。

- **🔇 静默失败最令人沮丧**：当旧路径已删除时，#39471 中出现"请求秒完成、播放完成音、无任何输出"的体验；#33359 中甚至出现 **503 Service Unavailable 循环崩溃**。开发者呼吁可观察性（observability）增强。

- **🔐 安全配置粒度不足**：MCP 长期只能"全局禁用校验"或 `insecure: true`（#40125 引用 #23506），急需 per-server 信任配置——目前 PR 提供了指纹钉扎与 CA 文件两种方案。

- **⏱️ 启动竞态与时序耦合**：TUI 启动探测、ACP 目录缓存、OAuth 注册、plugin 激活顺序等多个并发时序缺陷集中在近两批 PR 中修复，说明 Effect/插件系统的初始化链路正在被系统化梳理。

- **📦 安装与分发的"最后一公里"**：Windows 仍缺原生安装包（#46719），Linux 多以裸 binary 运行；macOS 上从 Finder 重命名导致整个 binding 失效（#40986），反映出 OS 集成层仍是短板。

---

*数据来源：[github.com/anomalyco/opencode](https://github.com/anomalyco/opencode) · 统计窗口：2026-09-01 至 2026-09-02*

</details>

<details>
<summary><strong>jcode</strong> — <a href="https://github.com/1jehuang/jcode">1jehuang/jcode</a></summary>

<think>Let me analyze the GitHub data for jcode community on 2026-09-02 and generate a comprehensive daily report in Chinese.

Key observations:
1. No new releases in the past 24 hours
2. 50 issues updated, showing the top 30 by comment count
3. 7 PRs updated, all from @1jehuang (the repo owner)
4. Many issues are from @alecuba16 - appears to be a prolific contributor
5. Recent issues (Sept 1-2) focus on:
   - macOS-specific bugs (Keychain, Ctrl+5, stdin detection)
   - Test isolation issues
   - Auth/login issues (Gemini OAuth, usage limits)
   - Session management bugs
   - websearch reliability

Let me organize this into a structured daily report.

For the top 10 issues, I should pick based on:
- Comment count (engagement)
- Recency (updated recently)
- Diversity of topics

Top issues by comments:
1. #540 (7 comments) - TUI degradation in long sessions
2. #677 (6 comments) - Auto-retry backoff hardcoded
3. #836 (6 comments) - /theme slash command
4. #679 (6 comments) - Configurable memory sidecar backend
5. #440 (5 comments) - TUI console toggler for MCP
6. #837 (5 comments) - @file completion with frecency
7. #608 (5 comments) - /model picker persistence
8. #583 (5 comments) - Info widgets flicker
9. #835 (5 comments) - /mcp slash command
10. #437 (4 comments) - Configurable TUI themes

For the 7 PRs (all from @1jehuang):
1. #1145 - claude-fable-5-1 model catalog
2. #1139 - clear inline images with session
3. #1140 - accept disabled failover aliases
4. #1138 - isolate sandboxed homes from macOS Keychain
5. #1137 - preserve macOS Ctrl+5 prompt jump
6. #1135 - update Claude OAuth client version
7. #1136 - isolate git info cache in tests

Trends I see:
- TUI improvements (themes, MCP toggle, @file completion)
- macOS-specific fixes (Keychain, Ctrl+5, stdin detection)
- Test infrastructure improvements
- Auth/OAuth issues (Gemini, Claude)
- Session management bugs
- New model support (claude-fable-5-1)
- Memory system improvements
- Bash risk gate configuration
- Provider parity (opencode)
- Swarm agent fixes
- Websearch reliability

Let me write this in a professional, concise Chinese style suitable for developers.</think>

# jcode 社区动态日报 · 2026-09-02

## 📌 今日速览

今天 jcode 仓库进入了一个**密集修复日**，主线提交者 @1jehuang 在过去 24 小时内连发 7 个 PR，集中处理 macOS 平台回归问题（Keychain 隔离、Ctrl+5 失效）、测试基础设施的 ABBA 死锁与并发隔离、以及 Claude OAuth 客户端版本升级。与此同时，社区持续围绕 TUI 体验打磨（主题系统、MCP/文件补全、模型切换持久化）展开讨论，#540 关于长会话下 TUI 输入与滚动降级的高优先级 Bug 仍维持最热议题地位。

---

## 🚀 版本发布

过去 24 小时内**无新版本发布**。

---

## 🔥 社区热点 Issues（Top 10）

| # | Issue | 标题 | 评论 | 为什么值得关注 |
|---|---|---|---|---|
| 1 | [#540](https://github.com/1jehuang/jcode/issues/540) | **TUI input and scrolling degrade in long sessions** | 7 | 高优先级 Bug：长会话下输入延迟、滚轮触发过度重绘、片段化鼠标报告被当作文本写入。涉及渲染路径与多终端读取器混用，是 TUI 体验的核心痛点。 |
| 2 | [#677](https://github.com/1jehuang/jcode/issues/677) | Auto-retry backoff hardcoded on shared gateways | 6 | 在共享 LLM 网关下，2s/4s/6s 的硬编码退避策略过早终止 agent。直接影响多人共用代理/中转场景的可用性。 |
| 3 | [#836](https://github.com/1jehuang/jcode/issues/836) | Feature: `/theme` slash command and custom theme palettes | 6 | 提议 `/theme` 切换 + TOML 自定义主题文件（`~/.jcode/themes/*.toml`）。填补"内置三套主题"以外的用户个性化空白。 |
| 4 | [#679](https://github.com/1jehuang/jcode/issues/679) | Configurable memory sidecar backend | 6 | 记忆 Sidecar 后端硬编码为 OpenAI > Claude > 当前 Provider，Codex 凭证过期时会静默选错。需 `auto/openai/claude/provider` 可配。 |
| 5 | [#837](https://github.com/1jehuang/jcode/issues/837) | `@file` completion with frecency ranking in TUI | 5 | 输入 `@` 触发文件路径补全，git ls-files + frecency 排序。在大型代码库里是高频提效诉求。 |
| 6 | [#608](https://github.com/1jehuang/jcode/issues/608) | `/model` picker switch doesn't survive relaunches | 5 | 模型选择无法跨会话持久化，每次重启回到 `config.toml` 的默认值。状态持久化是基础体验。 |
| 7 | [#583](https://github.com/1jehuang/jcode/issues/583) | Info widgets jump/hide/disappear as content scrolls | 5 | 三套并行的 HUD/状态栏/事实栈重复渲染相同字段，导致跳动与闪烁。需要统一信息显示架构。 |
| 8 | [#835](https://github.com/1jehuang/jcode/issues/835) | Feature: `/mcp` slash command for MCP servers | 5 | 用 `/mcp` 在 TUI 里开关 MCP 服务器，状态持久化到 `~/.jcode/mcp.json`。MCP 已是 MCP 生态核心。 |
| 9 | [#440](https://github.com/1jehuang/jcode/issues/440) | Add TUI console toggler for MCP servers | 5 | 与 #835 类似，更早提出，已 rebase 到 v0.41，反映 MCP TUI 控制是长期未满足的需求。 |
| 10 | [#978](https://github.com/1jehuang/jcode/issues/978) | 5 pre-existing test failures on master | 4 | 主分支 5 个测试失败（环境变量隔离与过期断言），是测试基础设施债务，影响 CI 健康度。 |

> 此外，新近（09-01 / 09-02）出现的几个 1 评论 Issue 值得关注但尚未积累讨论：**#1148**（auth-test 把硬性用量上限当作瞬态限流等 6 分钟）、**#1147**（websearch 在 DDG/Bing HTML 被封时无可用后端）、**#1141**（`jcode-tui` 测试 ABBA 死锁，180s 不退出）。

---

## 🛠️ 重要 PR 进展

| # | PR | 内容 | 关键点 |
|---|---|---|---|
| 1 | [#1145](https://github.com/1jehuang/jcode/pull/1145) | **feat(anthropic): add `claude-fable-5-1` to direct Anthropic catalog** | Anthropic 于 2026-08-28 发布 `claude-fable-5-1`，缺目录条目会导致新家目录 + 显式 `-m` 时静默回退到 `claude-opus-5`。补齐模型目录，避免"看上去设置了但实际没生效"的隐式失败。 |
| 2 | [#1135](https://github.com/1jehuang/jcode/pull/1135) | **fix: update Claude OAuth client version 2.1.123 → 2.1.257** | 三处 OAuth 客户端版本身份统一升级，恢复 Anthropic 服务端最低版本校验下的登录能力。**这是今天最高优先级的修复之一**，直接关系到所有 Claude 登录用户。 |
| 3 | [#1138](https://github.com/1jehuang/jcode/pull/1138) | **fix: isolate sandboxed homes from macOS Keychain** | 对应 #1132。检测 `$JCODE_HOME` 重定向后跳过 Keychain 探测，避免测试/onboarding 把真实 macOS Keychain 内容拉进沙箱。 |
| 4 | [#1137](https://github.com/1jehuang/jcode/pull/1137) | **fix: preserve macOS Ctrl+5 prompt jump** | 对应 #1131。停止把 macOS `Ctrl+5` 重写为遗留 `Ctrl+]`，恢复第 5 个最近 prompt 跳转，同时保留 `Esc → Ctrl+[` 的明确回退路径。 |
| 5 | [#1139](https://github.com/1jehuang/jcode/pull/1139) | **fix: clear inline images with session** | 对应 #1123。`/clear` 后旧会话内联图片继续渲染，统一走一个清理助手同时清理本地与远程 `/clear` 路径、失效 image signature 缓存。 |
| 6 | [#1140](https://github.com/1jehuang/jcode/pull/1140) | **fix: accept disabled failover aliases** | 允许 `off / false / disabled / none` 作为手动跨 Provider 故障转移的别名，TOML 反序列化与环境变量解析均覆盖。 |
| 7 | [#1136](https://github.com/1jehuang/jcode/pull/1136) | **fix: isolate git info cache in tests** | 阻止测试二进制启动真实 Git 后台探测，仅读取显式 seed 数据；生产环境的 stale-while-revalidate 行为不变。 |
| — | (额外：#1143 / #1144 等尚未合入的修复在 Issues 列中已出现，PR 列表内暂未单独列出) | | |

---

## 📈 功能需求趋势

从近 50 条更新的 Issue 中可清晰看到社区当前最关心的方向：

1. **TUI 体验打磨（最热）** —— 主题系统（#437、#836）、MCP 开关（#440、#835）、`@file` 补全（#570、#837）、`/model` 持久化（#608）、信息小部件去重（#583）。社区对"统一、可配置、不抖动"的 TUI 有强烈诉求。
2. **新模型与 Provider 兼容** —— `claude-fable-5-1`（#1145）、Claude OAuth 版本升级（#1135）、Cursor CLI ACP provider（#575）、Gemini Code Assist 弃用迁移（#1110）、OpenAI-兼容 Provider 与 opencode 字段对齐（#571）。
3. **macOS 平台化修复** —— Keychain 隔离（#1132/#1138）、`Ctrl+5`（#1131/#1137）、stdin 检测误判（#1146）。macOS 路径上的边界问题正在被集中清理。
4. **测试基础设施** —— 并发隔离（#1142）、Git 缓存（#1136）、ABBA 死锁（#1141）、主分支 5 个失败测试（#978）。CI 健康度是当前的隐性债务。
5. **可观测性与可解释性** —— 记忆召回可视化（#1105）、OSC 9 进度上报（#574 herdr 集成）、`websearch` 回退诊断（#1147）。社区希望"为什么"和"发生了什么"更可见。
6. **Swarm/Ambient 多 agent 可靠性** —— Ambient 模式永久卡死（#1044）、Swarm spawn 引用陈旧 binary（#1119）、Swarm 模型选择错误（#981）。

---

## 💬 开发者关注点

- **隐式失败 vs 显式失败**：多个 Issue 反映"设置看上去生效但实际静默回退"（如 #1145 中 `-m claude-fable-5-1` 静默走 `claude-opus-5`，#981 中 Swarm 静默选错模型）。开发者强烈希望**错误可被观察、被记录、被上报**，而不是被吞掉。
- **状态持久化的"承诺边界"**：`/model` 切换、`/theme` 切换、`/mcp` 切换、bash risk gate 开关（#897）都存在"运行时改完下次启动就没了"的问题，社区呼吁**统一的设置持久化层**。
- **共享/受限环境的退避策略**：#677（共享网关 429）、#1148（用量上限当作瞬态限流）、#1110（Gemini 个人账户 OAuth 客户端弃用）—— 在代理、限流、账户封禁场景下，**重试与降级逻辑需要按"故障语义"细分**，而不是一类错误统一对待。
- **并发与测试可信度**：#1142 / #1141 / #978 集中暴露"测试不再可信"的隐患，开发者需要**严格的 env lock、独立的 cache、明确的隔离单元**，否则回归会悄悄溜进主分支。
- **三套并行显示系统打架**：#583 的根因（margin HUD + overscroll 状态行 + 右侧事实栈各自渲染）暗示当前 TUI 缺乏**单一信息真源**，这是后续 TUI 重构的明确抓手。

---

*日报基于 github.com/1jehuang/jcode 在 2026-09-02 公开的 Issues 与 PR 数据生成。*

</details>

<details>
<summary><strong>pi</strong> — <a href="https://github.com/earendil-works/pi">earendil-works/pi</a></summary>

<think>Let me analyze the GitHub data for the pi community (earendil-works/pi) for the daily report on 2026-09-02.

Key observations:
- No new releases in the past 24 hours
- 50 issues updated, 20 PRs updated
- Many issues are CLOSED with various tags (bug, no-action, untriaged, last-read, etc.)
- Several issues relate to specific providers (Anthropic, OpenAI, Gemini, xAI, Bedrock, Fireworks, llama.cpp)
- TUI-related issues are common (fullscreen mode, footer, scrolling, images)
- Provider/model catalog issues are frequent
- Subagent tool is being enhanced
- RPC mode improvements are ongoing

Let me organize this into the requested report structure. I need to be concise and professional, in Chinese, suitable for technical developers.

Let me categorize the issues:

**Top issues to highlight:**
- #2870 [CLOSED] - XDG Base Directory - 21 comments, 54 thumbs up - most popular
- #4338 [CLOSED] - Agent stuck loop - 8 comments
- #5931 [CLOSED] - Copy-paste extra spaces - 8 comments
- #8134 [OPEN] - Plain HTTP forward proxy bug - 7 comments
- #6996 [OPEN] - Gemini 3.x thought_signature - 7 comments
- #6374 [CLOSED] - model catalog fixes - 5 comments
- #4758 [CLOSED] - Split settings.json - 4 comments
- #3591 [CLOSED] - CLAUDE_CODE_OAUTH_TOKEN - 4 comments
- #8938 [OPEN] - Wide images stretched - 3 comments
- #8797 [OPEN] - keybinding rebind issue - 2 comments
- #8919 [OPEN] - fullscreen footer - 2 comments
- #8717 [OPEN] - get_commands docs mismatch - 2 comments

**Top PRs to highlight:**
- #8980 - external entries in in-memory sessions
- #8969 - subagent model and thinking overrides
- #8966 - --provider without --model fix
- #8898 - SIGWINCH seccomp fix
- #8941 - supportsMaxOutputTokens flag
- #8951 - hide headless sessions from resume picker
- #8737 - NO_PROXY subdomain matching
- #8900 - TUI selections two-column layout
- #8799 - prettier Working spinner
- #8936 - stop prepared tools after preflight abort
- #8828 - detect Zed terminal capabilities

Let me write the report now.</think>

# Pi 社区动态日报 · 2026-09-02

---

## 📌 今日速览

过去 24 小时 pi 仓库无新版本发布，但社区活跃度维持高位：50 个 Issue 被更新、20 个 PR 推进。其中多个长期追踪议题（XDG 配置目录规范、模型目录元数据修正）迎来阶段性关闭，**多 Provider 兼容性与 TUI 全屏体验**成为本日两大焦点。值得关注的是，多个围绕 **subagent 工具的能力扩展**（model/effort 覆写）正从需求转为合并中的 PR。

---

## 🚀 版本发布

无（过去 24 小时未发布新版本）。

---

## 🔥 社区热点 Issues

| # | 标题 | 状态 | 热度 | 重要性 |
|---|------|------|------|--------|
| [#2870](https://github.com/earendil-works/pi/issues/2870) | 遵循 XDG Base Directory 规范 | CLOSED | 👍 54 · 💬 21 | **历史最热**：Linux 用户长期呼吁将配置目录移至 `$XDG_CONFIG_HOME`，避免污染 home；今日正式关闭，预计已落地。 |
| [#4338](https://github.com/earendil-works/pi/issues/4338) | Agent 卡在"working"无进展 | CLOSED | 👍 2 · 💬 8 | 用户体验痛点：Agent 自称 working 但实际空转循环，需手动重启；反映推理模型的"虚假进度"问题。 |
| [#5931](https://github.com/earendil-works/pi/issues/5931) | TUI 复制粘贴引入多余空格/换行 | CLOSED | 👍 1 · 💬 8 | 长期 TUI 体验缺陷：在视觉折行处多出空白，影响结果直接复用。 |
| [#8134](https://github.com/earendil-works/pi/issues/8134) | 通过 forward proxy 时 plain-HTTP Provider 首工具调用后挂起 | OPEN | 👍 0 · 💬 7 | **0.84.0 引入的回归**：影响企业内网代理用户；首个模型请求成功后，工具执行后的 follow-up 请求挂死。 |
| [#6996](https://github.com/earendil-works/pi/issues/6996) | Gemini 3.x 工具调用因缺失 `thought_signature` 失败 | OPEN | 👍 0 · 💬 7 | Gemini 新模型兼容性阻塞问题，工具结果回传后模型拒绝继续；影响所有使用 Gemini 3.x 的用户。 |
| [#6374](https://github.com/earendil-works/pi/issues/6374) | 模型目录元数据修正 | CLOSED | 👍 1 · 💬 5 | 跨 Provider 的 reasoning-level 元数据冲突，影响下游应用做去重目录构建。 |
| [#4758](https://github.com/earendil-works/pi/issues/4758) | 拆分 `settings.json` 以分离用户设置与运行时状态 | CLOSED | 👍 0 · 💬 4 | 关注配置文件 ownership 与可移植性的设计议题。 |
| [#3591](https://github.com/earendil-works/pi/issues/3591) | 支持 `CLAUDE_CODE_OAUTH_TOKEN` 环境变量 | CLOSED | 👍 0 · 💬 4 | 头部 CI/无头场景下 Anthropic 认证的关键补丁，影响订阅用户的离机使用。 |
| [#8938](https://github.com/earendil-works/pi/issues/8938) | 宽幅矮图被纵向拉伸 | OPEN | 👍 0 · 💬 3 | TUI 图像渲染比例算法缺陷，0.84.4 仍未修复。 |
| [#8797](https://github.com/earendil-works/pi/issues/8797) | 重绑 `app.models.save` 不影响 `/model` 与思考选择器 | OPEN | 👍 0 · 💬 2 | 暴露硬编码快捷键而非读取 `keybindings.json` 的多处位置，扩展性受损。 |

---

## 🛠 重要 PR 进展

| # | 标题 | 状态 | 说明 |
|---|------|------|------|
| [#8980](https://github.com/earendil-works/pi/pull/8980) | 在内存会话中引入外部条目 | OPEN | 跟随 #8885 推进，允许会话复用时导入外部 transcript 条目。 |
| [#8969](https://github.com/earendil-works/pi/pull/8969) | subagent 工具支持 model/thinking 覆写 | CLOSED | **核心功能**：调用方可在调度时为子代理指定不同 model 与思考等级，无需新建 session。 |
| [#8966](https://github.com/earendil-works/pi/pull/8966) | `--provider` 无 `--model` 时使用该 Provider 默认值 | CLOSED | CLI 行为修正：认证失败时报错明确指出失败的 Provider，调试体验提升。 |
| [#8898](https://github.com/earendil-works/pi/pull/8898) | 包装 SIGWINCH 自信号以兼容 seccomp 受限策略 | CLOSED | 解决受限容器（如 `--cap-drop ALL`）下窗口大小变更失效问题。 |
| [#8941](https://github.com/earendil-works/pi/pull/8941) | openai-responses 增加 `supportsMaxOutputTokens` 兼容标志 | CLOSED | 让部分拒绝 `max_output_tokens` 的代理网关（Codex-protocol 代理）正常工作。 |
| [#8951](https://github.com/earendil-works/pi/pull/8951) | 默认在 `/resume` 列表中隐藏 headless 会话 | CLOSED | 减少 RPC / subagent 生成的机器会话污染用户手动恢复列表。 |
| [#8737](https://github.com/earendil-works/pi/pull/8737) | `NO_PROXY` 匹配支持子域与裸域 | CLOSED | 修正通配符/裸域一致性问题，并正确处理 IPv6（带括号/不带括号）。 |
| [#8900](https://github.com/earendil-works/pi/pull/8900) | TUI 在思考模式/模型选择器使用两列布局 | CLOSED | 当前激活项前显示 ✓，提升 `/thinking` 与 `/model` 的视觉清晰度。 |
| [#8799](https://github.com/earendil-works/pi/pull/8799) | 更美观的 "Working..." 旋转指示 | OPEN | 将指示器移入编辑器边框并匹配思考等级颜色，支持重试态。 |
| [#8936](https://github.com/earendil-works/pi/pull/8936) | preflight abort 后停止已准备的工具调用 | CLOSED | 并行工具调用中后阶段中止时，已准备好的工具被标记为 `Operation aborted`，避免悬挂执行与错误的 afterToolCall。 |

> 另值得关注：#8957 修复 UI prompt context 原型链丢失；#8828 新增 Zed 终端能力检测；#8946 修复会话切换时旧预信任 runtime 泄漏给最终加载阶段。

---

## 📈 功能需求趋势

从近 24 小时更新的 Issue 提炼，社区关注主要集中在以下方向：

1. **多 Provider 兼容性与认证扩展**（最热）
   - Anthropic OAuth 用户代理钉死 `claude-cli/2.1.75`（#8981）、Anthropic Workspace ID 支持（#8948）
   - Gemini 3.x thought_signature（#6996）、xAI Responses 工具结果忽略（#8973）
   - Bedrock 工具 schema 强校验（#8804）、Fireworks GLM 5.x 路由（#8978）
   - openai-codex 代理鉴权（#8982）、llama.cpp 在 `--cap-drop ALL` 下 catalog 为空（#8977）
   - NO_PROXY 子域匹配（#8737）、forward proxy 与 plain HTTP 协同（#8134）

2. **TUI 全屏体验与图像渲染**
   - 宽图纵向拉伸（#8938）、全屏 footer 多余空行（#8919）、整文档滚动（#8953）、focus-in 不重绘（#8923）、复制粘贴多余空白（#5931）

3. **Subagent 能力增强**
   - 调度时指定 model/effort（#8969/#8970）、启动新上下文窗口（#8972）

4. **配置/状态分离与可移植性**
   - XDG 规范（#2870）、settings.json 拆分（#4758）、`CLAUDE_CODE_OAUTH_TOKEN`（#3591）

5. **扩展/RPC 接口完整性**
   - `sendUserMessage` preflight 结果回调（#8975）、`get_commands` 字段文档不一致（#8717）、abort 不取消 compaction（#8920）

6. **会话文件可靠性**
   - 头部行丢失导致恢复失败（#8939）、`pi update --extensions` 重复扩展处理（#8971）

---

## 💡 开发者关注点

从反馈密度看，开发者群体当前最强烈的痛点是：

- **🔁 跨 Provider 一致性仍是首要痛点**：几乎每家 Provider（Anthropic / OpenAI / Gemini / xAI / Bedrock / Fireworks / llama.cpp / openai-codex）都在 0.84.x 周期暴露独立缺陷或认证/协议边界问题。Provider matrix 的维护成本与生态扩张速度之间存在张力。
- **📐 TUI 全屏布局仍处早期**：零行 footer、多行 widget、终端缩放后的重绘、滚动模型——大量 issue 都围绕同一组文件（`packages/coding-agent/src/modes/interactive/components/*`），说明全屏重构仍未收敛。
- **🧰 扩展 API 的"半成品契约"**：文档与实际行为不一致（如 `get_commands` 的 `sourceInfo` vs 文档的 `path/location`）、硬编码快捷键忽略 `keybindings.json`，让扩展作者调试成本偏高。
- **🪪 认证与会话文件可靠性**：会话文件 header 缺失、`pi update --extensions` 静默忽略重复项目级扩展，反映磁盘状态机与并发场景下的鲁棒性需要持续加固。
- **🔄 模型上下文窗口管理**：用户开始主动寻求"同会话内干净上下文"的能力（#8972），配合 subagent 的灵活调度，反映 Pi 正向"长会话内多上下文"过渡。

---

*日报基于 GitHub 公开数据自动汇总。如需聚焦某方向深入，请告诉我。*

</details>

---
*本日报由 [Big Model Radar](https://github.com/96loveslife/big_model_radar) 自动生成。*
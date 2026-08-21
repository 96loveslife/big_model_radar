# AI CLI 工具社区动态日报 2026-08-21

> 生成时间: 2026-08-21 01:40 UTC | 覆盖工具: 8 个

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

<think>The user wants me to generate a horizontal comparison analysis report based on the daily dynamics of various AI CLI tools. Let me carefully analyze the data from each tool and create a comprehensive comparative report.

Let me organize the data:

1. **Claude Code** - v2.1.238 released, 0 new PRs, 50 issues updated, top concerns: Desktop stability, MCP integration, model quality regression
2. **OpenAI Codex** - rust-v0.149.0 stable + multiple alpha versions, 0 new PRs by humans (only bot), 30 issues, focus on cross-platform session persistence, remote control
3. **Gemini CLI** - v0.56.0-nightly, 1 PR symlink fix, focus on Agent subagent stability, Auto Memory system
4. **GitHub Copilot CLI** - v1.0.81-6 prerelease, only 1 PR, focus on MCP ecosystem, OAuth, model availability
5. **Kimi Code CLI** - No release, only 1 issue + 1 PR, focus on plugin memory system
6. **OpenCode** - v1.18.19, focus on performance/CPU issues, V2 Beta issues
7. **jcode** - No release, 22 issues, 1 PR, focus on Swarm agent bugs, TUI bugs
8. **pi** - No release, 30 issues, 16 PRs, focus on Windows support, auto-compaction, slash commands

Now let me identify common themes:
- **MCP ecosystem maturity** - Claude Code, Gemini CLI, Copilot CLI, OpenCode all actively working on MCP
- **Cross-platform compatibility** - Windows, macOS, Linux issues widespread
- **Cost/Token optimization** - Claude Code (cache invalidation), OpenAI Codex (compaction), jcode (symbolic compression), Gemini (memory)
- **Multi-agent/Subagent orchestration** - All major tools are developing this
- **Session persistence/Resume** - Universal pain point
- **Authentication/OAuth issues** - Widespread
- **TUI/UX issues** - All have these
- **Security concerns** - Sandbox escapes, secret leakage, environment variable sanitization
- **Long-running session reliability** - Memory leaks, CPU spikes, resource exhaustion

Differentiation:
- Anthropic Claude Code: Focus on Desktop app stability, plugin marketplace, MCP protocol
- OpenAI Codex: Cloud-first, multi-agent, providers like Bedrock, compaction as core
- Gemini CLI: Strong Google ecosystem integration, Auto Memory pioneered
- GitHub Copilot CLI: Enterprise focus, ACP protocol, strict managed settings
- Kimi Code CLI: Plugin/MCP plugins, simpler scope
- OpenCode: Performance focused, V2 architecture transition
- jcode: Swarm mode pioneer, experimental nature
- pi: TUI/UX focus, slash commands culture, theme/extension system

Activity level:
- Highest: Claude Code (50 issues), OpenAI Codex (30), pi (30+16)
- Medium: OpenCode (50), Copilot CLI (35), Gemini CLI (lots)
- Lower: jcode (22), Kimi Code CLI (1+1)

Let me now write the report in a structured, professional manner as requested.</think>

# AI CLI 工具生态横向对比分析报告

**报告日期**：2026-08-21
**覆盖工具**：Claude Code / OpenAI Codex / Gemini CLI / GitHub Copilot CLI / Kimi Code CLI / OpenCode / jcode / pi

---

## 一、生态全景

2026 年 8 月，AI CLI 工具市场已从"功能堆叠"阶段进入"可靠性与生态化"阶段。**Anthropic 与 OpenAI 两家"巨头"的仓库维持高频迭代**（Claude Code v2.1.238、Codex rust-v0.149.0 同期发布），但**社区热度转向"长尾痛点"**——会话持久化、跨平台一致性、计费可预测性等问题集中爆发。**MCP（Model Context Protocol）已成事实标准**，五款主流工具围绕其构建生态；与此同时，**多 Agent / Subagent 架构**与**长期记忆系统**是各家共同的前沿探索方向。值得注意的是，**小型/独立工具（jcode、pi、OpenCode）凭借差异化定位维持活跃**，未出现"巨头碾压"的局面。

---

## 二、各工具活跃度对比

| 工具 | 今日 Release | 过去 24h Issue 更新 | 过去 24h PR 更新 | 主要维护节奏 | 社区互动强度 |
|---|---|---|---|---|---|
| **Claude Code** | v2.1.238 | 50 | 0 | 高频小版本 + 稳定主干 | ⭐⭐⭐⭐⭐ 高互动（#36151 达 161 评论） |
| **OpenAI Codex** | v0.149.0 stable + 4 alpha | 30 | 0（仅 bot 自动化） | 自动化 PR 主导，alpha 通道活跃 | ⭐⭐⭐⭐ 中高（#23200 49 👍，👍 数领先） |
| **Gemini CLI** | v0.56.0-nightly | 30+ | ~10 | 双轨：nightly + 自动化 PR Generation | ⭐⭐⭐⭐ 中高 |
| **GitHub Copilot CLI** | v1.0.81-6 prerelease | 35 | 1 | 预发布谨慎放量 | ⭐⭐⭐ 中等（近 7 天多 issue 已关闭） |
| **Kim

---

## 各工具详细报告

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills 社区热点

> 数据来源: [anthropics/skills](https://github.com/anthropics/skills)

<think>The user wants me to analyze the Claude Code Skills community data and generate a report. Let me carefully go through the data and extract insights.

**Popular PRs Analysis (top 20 shown, but I need to select 5-8 most notable):**

Looking at the PRs, the data shows comments are "undefined" which is odd - this means the data may not have comment counts. So I'll need to use other signals like 👍 counts (also 0 across the board), update dates, and topic relevance. Let me look at the most substantive PRs:

1. **#1298** - fix(skill-creator): run_eval.py always reports 0% recall - This is CRITICAL because it breaks the entire description optimization loop. Has 10+ independent reproductions. Updated 2026-06-23.

2. **#514** - Add document-typography skill - Addresses quality issues in every document Claude generates (orphan words, widow paragraphs, numbering).

3. **#538** - fix(pdf): correct case-sensitive file references - Cross-platform compatibility fix.

4. **#486** - Add ODT skill - OpenDocument format support.

5. **#210** - Improve frontend-design skill clarity and actionability.

6. **#83** - Add skill-quality-analyzer and skill-security-analyzer to marketplace - Meta skills for quality analysis.

7. **#541** - fix(docx): prevent tracked change w:id collision - Document corruption fix.

8. **#539** - fix(skill-creator): warn on unquoted description with YAML special characters.

9. **#1367** - feat(skills): add self-audit — mechanical verification + four-dimension reasoning quality gate.

10. **#1099** - skill-creator: fix run_eval.py crash on Windows.

11. **#1050** - skill-creator: fix Windows subprocess + encoding bugs.

12. **#723** - feat: add testing-patterns skill.

13. **#568** - feat: add ServiceNow platform skill.

14. **#525** - Add pyxel skill for retro game development.

15. **#509** - docs: add CONTRIBUTING.md.

16. **#181** - Add SAP-RPT-1-OSS predictor skill.

17. **#95** - Add comprehensive system documentation and flowcharts.

18. **#1595** - docs: add UIZZE to partner skills.

19. **#1538** - fix: bring two skills back under the Agent Skills spec.

20. **#1528** - FIX (vague).

**Issues Analysis (15 most discussed):**

1. **#492** - Security: Community skills distributed under anthropic/ namespace (43 comments, 2 👍)
2. **#228** - Enable org-wide skill sharing in Claude.ai (16 comments, 8 👍)
3. **#556** - run_eval.py: claude -p never triggers skills/commands (12 comments, 7 👍)
4. **#62** - All my skills have disappeared (10 comments, 2 👍)
5. **#1329** - Proposing compact-memory skill (9 comments, 0 👍)
6. **#202** - skill-creator should be updated to best practice (8 comments, 1 👍)
7. **#412** - Skill proposal: agent-governance (6 comments, 0 👍)
8. **#189** - document-skills and example-skills plugins install identical content (6 comments, 9 👍)
9. **#1487** - claude-api skill eagerly injects ~156k tokens (4 comments, 0 👍)
10. **#1385** - [Proposal] Reasoning Quality Gate Pipeline (4 comments, 1 👍)
11. **#1175** - Concerns regarding Security and Context Window with SharePoint (4 comments, 0 👍)
12. **#29** - Usage with bedrock (4 comments, 0 👍)
13. **#16** - Expose Skills as MCPs (4 comments, 0 👍)
14. **#12** - Add guidance to avoid whitespace reformatting in docx/ooxml (4 comments, 1 👍)
15. **#1362** - web-artifacts-builder bundle issues (3 comments, 0 👍)

The data quality issue: comments are "undefined" and 👍 are "0" for PRs. This suggests the data extraction didn't capture these metrics, OR these PRs genuinely have no engagement. Looking at the issue data, comments and 👍 numbers are populated. This is inconsistent. Let me assume the PR data is incomplete, and I should focus on the substantive content and update dates as signals of activity/importance.

Actually, wait - I should look more carefully. The data shows "评论: undefined" for all PRs - this means the field wasn't populated, not that there are 0 comments. So I can't rank by comment count for PRs directly. I should use the existing comments in the PR summaries (referenced issues) and update recency as a signal.

Let me structure the report:

**1. 热门 Skills 排行 (Top Skills):**
Since I can't reliably rank by comments, I'll select based on:
- Substantive impact
- Cross-references to issues with high engagement
- Recency of updates

I'll select these top ones:
- #1298 - skill-creator fix (CRITICAL, links to issue #556 with 12 comments)
- #514 - document-typography
- #486 - ODT skill
- #1367 - self-audit skill
- #83 - skill-quality-analyzer
- #723 - testing-patterns
- #568 - ServiceNow skill
- #210 - frontend-design improvement

**2. 社区需求趋势 (Community Demand Trends):**
From the issues:
- Security/trust (issues #492, #1175)
- Skill sharing/management (issues #228, #16, #12)
- Tooling/quality (issues #556, #202, #1487, #1362)
- New skill domains (issues #1329 compact-memory, #412 agent-governance, #1385 reasoning quality)
- Platform integration (issues #29 Bedrock, #189 duplicates)

**3. 高潜力待合并 Skills:**
- #1298 (skill-creator eval fix - critical)
- #538 (PDF case-sensitivity)
- #541 (DOCX bookmark collision)
- #539 (skill-creator YAML validation)
- #1099 (Windows skill-creator fix)
- #1050 (Windows subprocess fix)
- #1367 (self-audit)

**4. 生态洞察:**
The community's most concentrated demand is around **skill infrastructure integrity** - fixing the skill-creator's broken eval loop, addressing security/trust boundaries, and improving cross-platform compatibility. The meta-issues (evaluator broken, namespace trust abuse, eager token injection) suggest the Skills ecosystem is in a maturation phase where infrastructure concerns now dominate feature requests.

Now let me format this in a clean, professional Chinese report.</think>

# Claude Code Skills 社区热点报告
*数据截止 2026-08-21 · 样本：50 PR + 50 Issues*

---

## 一、热门 Skills 排行（按影响力与社区关注度综合排序）

注：原始数据中 PR 评论数与点赞数未抓取到具体数值，下文热度基于"问题交叉引用、提交更新频率与摘要中提及的复现规模"综合判断。

| 排名 | Skill | 热度信号 | 状态 |
|---|---|---|---|
| 1 | **[#1298](https://github.com/anthropics/skills/pull/1298)** skill-creator eval 修复 | 关联 Issue [#556](https://github.com/anthropics/skills/issues/556) 12 评论 7 👍；10+ 独立复现；整个描述优化循环在跑"噪声" | OPEN |
| 2 | **[#514](https://github.com/anthropics/skills/pull/514)** document-typography | 命中"每份 Claude 生成文档都受影响"的普适痛点（orphan / widow / 编号错位） | OPEN |
| 3 | **[#1367](https://github.com/anthropics/skills/pull/1367)** self-audit（自审计 Skill） | "通用 + 四维度推理质量门"，是质量基础设施层提案 | OPEN |
| 4 | **[#83](https://github.com/anthropics/skills/pull/83)** skill-quality-analyzer / skill-security-analyzer | Meta-Skills，填补"如何评估 Skill 本身"的空白 | OPEN |
| 5 | **[#568](https://github.com/anthropics/skills/pull/568)** ServiceNow 平台 Skill | 覆盖 ITSM/SecOps/ITAM/FSM/SAM 等 7 大模块，企业级需求明确 | OPEN |
| 6 | **[#486](https://github.com/anthropics/skills/pull/486)** ODT Skill（OpenDocument） | 补齐开源办公格式短板（ODT/ODS/ODF） | OPEN |
| 7 | **[#723](https://github.com/anthropics/skills/pull/723)** testing-patterns | 完整覆盖 Testing Trophy + React + Mock + 集成测试栈 | OPEN |
| 8 | **[#210](https://github.com/anthropics/skills/pull/210)** frontend-design 改进 | 解决"Skill 指令可执行性"这一长期痛点 | OPEN |

**讨论热点聚焦：**
- **Skill-Creator 失灵成头号工程事件**：`run_eval.py` 在 Win/Linux/macOS 上都返回 `recall=0%`，[#1298](https://github.com/anthropics/skills/pull/1298)、[#1099](https://github.com/anthropics/skills/pull/1099)、[#1050](https://github.com/anthropics/skills/pull/1050) 三个 PR 在交叉修复同一根因，且都被刷到 5–6 月持续更新。
- **DOCX/PDF 兼容性小修复密集**：[#538](https://github.com/anthropics/skills/pull/538)、[#541](https://github.com/anthropics/skills/pull/541)、[#539](https://github.com/anthropics/skills/pull/539) 集中处理大小写引用、tracked change `w:id` 冲突、YAML 引号缺失等"长尾损坏"。

---

## 二、社区需求趋势（来自 Issues 洞察）

| 趋势方向 | 代表 Issue | 情绪强度 |
|---|---|---|
| 🔴 **安全与信任边界** | [#492](https://github.com/anthropics/skills/issues/492) 43💬2👍 社区 Skill 在 `anthropic/` 命名空间下冒充官方 | 极高，被反复讨论 |
| 🔴 **Skill 描述优化循环不可用** | [#556](https://github.com/anthropics/skills/issues/556) 12💬7👍、`claude -p` 0% 触发 | 极高，3 个 PR 同源修复 |
| 🟠 **企业级协作分发** | [#228](https://github.com/anthropics/skills/issues/228) 16💬8👍 Claude.ai 内组织级 Skill 共享 | 高，👍 数第一 |
| 🟠 **Skill 元能力反哺生态** | [#202](https://github.com/anthropics/skills/issues/202) skill-creator 需重写 (#412) agent-governance (#1385) Reasoning Quality Gate | 高 |
| 🟡 **Token / 上下文经济性** | [#1487](https://github.com/anthropics/skills/issues/1487) `claude-api` 注入 156k tokens 直接爆窗 | 中 |
| 🟡 **跨平台与外部生态** | [#29](https://github.com/anthropics/skills/issues/29) AWS Bedrock [#16](https://github.com/anthropics/skills/issues/16) Skills → MCP [#189](https://github.com/anthropics/skills/issues/189) 插件重复 (#1362) web-artifacts-builder | 中 |
| 🟢 **新场景 Skill 提案** | [#1329](https://github.com/anthropics/skills/issues/1329) compact-memory (#412) agent-governance (#1175) SharePoint 安全 | 中（新功能呼唤） |

> **结构性观察**：排序前 5 的 Issues 中，3 条直接关于"Skill 基础设施的正确性"——表明社区焦点已从"提交新 Skill"过渡为"修正 Skill 运行机制"。

---

## 三、高潜力待合并 Skills（最可能近期落地）

| Skill | 价值点 | 推荐合并理由 |
|---|---|---|
| [#1298](https://github.com/anthropics/skills/pull/1298) | skill-creator 评测基线 | 直接解锁描述优化流水线，10+ 用户遭遇 |
| [#538](https://github.com/anthropics/skills/pull/538) | PDF 大小写修复 | 1 行 PR，恢复 macOS/Linux 用户使用 |
| [#539](https://github.com/anthropics/skills/pull/539) | YAML 特殊字符校验 | 防 silent failure，零破坏性升级 |
| [#1367](https://github.com/anthropics/skills/pull/1367) | self-audit 质量门 | 与 [#1385](https://github.com/anthropics/skills/issues/1385) 提案呼应，生态刚需 |
| [#1050](https://github.com/anthropics/skills/pull/1050) / [#1099](https://github.com/anthropics/skills/pull/1099) | Windows 兼容 | 是 [#556](https://github.com/anthropics/skills/issues/556) 同源；落地 Windows 用户就被激活 |
| [#1538](https://github.com/anthropics/skills/pull/1538) | SKILL.md 规范回归 | 仓库自身是规范参考实现，必须自洽 |
| [#83](https://github.com/anthropics/skills/pull/83) | 质量/安全分析器 | 顺带回应 [#492](https://github.com/anthropics/skills/issues/492) 的安全焦虑 |

---

## 四、Skills 生态洞察（一句话总结）

> **当前社区最集中的诉求是"Skills 自身的可信度"——既要让 skill-creator 的评估与描述优化循环真的能运转（[#1298](https://github.com/anthropics/skills/pull/1298) / [#556](https://github.com/anthropics/skills/issues/556)），又要把社区 Skill 与官方 Skill 之间的命名空间、注入体积、跨平台等"信任边界"夯实（[#492](https://github.com/anthropics/skills/issues/492) / [#1487](https://github.com/anthropics/skills/issues/1487) / [#556](https://github.com/anthropics/skills/issues/556)）。功能交付，正让位于基础设施治理。**

---

<think>The user wants me to generate a Chinese daily report for the Claude Code community based on GitHub data for 2026-08-21. Let me analyze the data carefully and structure it properly.

Key observations:
1. Latest release: v2.1.238 - added `keybindingFlavor` setting for readline-style keybindings, and Plugin marketplaces update
2. No new PRs in the past 24 hours
3. 50 issues updated, but I need to focus on the top 30 most commented

Let me categorize the issues:
- High engagement (#36151, #42776, #77136): Feature/bug with 50+ comments
- Mid engagement (#86012, #25286, #61044): 15-31 comments
- New issues from past 24h (#88383, #88412, #88405, #88410, #88370): Latest issues
- Model-related bugs (#77136, #87491, #75607, #88383)
- Desktop app issues (#42776, #86012, #87879, #87607, #88087, #79782)
- MCP related issues (#88370, #61044, #86459)
- CLI/Core issues (#25286, #88383, #88412, #88405)

Let me draft the report now. I should pick 10 most worth-noting issues and 10 PRs (but there are 0 PRs so I'll note that).

Since there are no new PRs in the past 24 hours, I'll note that and potentially mention some referenced PRs in issues.

Let me structure:

1. 今日速览
2. 版本发布 - v2.1.238
3. 社区热点 Issues (10个)
4. 重要 PR 进展 (无新PR)
5. 功能需求趋势
6. 开发者关注点

I need to be thorough but concise, professional tone for technical developers.</think>

# Claude Code 社区动态日报
**日期：2026-08-21**

---

## 📌 今日速览

今天 Claude Code 发布了 **v2.1.238** 版本，新增 `keybindingFlavor` 设置（支持 Readline 风格快捷键）以及插件市场 `headersHelper` 的相关改进。社区讨论热度集中在 **Desktop 应用稳定性**、**新模型（Opus 5 / Fable）输出质量问题** 与 **MCP 集成回归** 三大方向，其中 #36151（多账户切换）继续以 161 条评论位居榜首。需特别警惕的是，已出现 2 起针对 v2.1.238 新版本本身的回归报告。

---

## 🚀 版本发布

### v2.1.238

**更新要点：**

| 类型 | 内容 |
|---|---|
| ✨ 新功能 | 新增 `keybindingFlavor` 配置项：设为 `"readline"` 时，Ctrl+W 将按 Bash 习惯删除至上一个空白符；默认 `"classic"` 行为不变 |
| 🔌 插件市场 | 远程市场/目录条目新增 `headersHelper` 字段，可在请求市场元数据时运行命令（用于注入鉴权头等场景） |

⚠️ **同日已报告回归问题**（详见下文 #88383、#88405），升级前建议关注。

📎 [v2.1.238 Release Notes](https://github.com/anthropics/claude-code/releases/tag/v2.1.238)

---

## 🔥 社区热点 Issues（Top 10）

### 1. #36151 — [FEATURE] Mobile 多账户切换（不共享邮箱）
- **作者**: @CorneAussems | 💬 161 | 👍 621
- **状态**: Open（标签 invalid，疑似被误标）
- **要点**: 用户希望在 Claude Mobile App 中支持同一设备登录多个账号（无需共享邮箱），满足团队/家人共用设备的场景。
- **社区反应**: 👍 621，是仓库内 👍 数最高的 issue 之一，反映强烈的产品需求。虽标签 `invalid` 但讨论持续活跃。

📎 [#36151](https://github.com/anthropics/claude-code/issues/36151)

### 2. #42776 — [BUG] Windows 上 Claude Code Desktop 因孤立进程文件锁无法重新启动
- **作者**: @RonGamzu | 💬 125 | 👍 62
- **要点**: Windows 平台 Desktop 应用退出后残留文件锁，导致无法再次启动；需手动清理。
- **社区反应**: 长期高活跃度，125 条评论积累了多种 workaround，与近期 #87879、#87607 属于同类问题族。

📎 [#42776](https://github.com/anthropics/claude-code/issues/42776)

### 3. #77136 — [BUG] Claude 4.7/4.8/5.0/Fable 输出重复修辞癖好，难以生成连贯散文
- **作者**: @pbower | 💬 50 | 👍 316
- **要点**: 即便在 system prompt 中显式约束，新一代模型仍反复出现重复的修辞"小动作"（rhetorical tics），严重影响长文写作质量。
- **社区反应**: 👍 316，影响面广、内容质量相关的高优先级反馈。

📎 [#77136](https://github.com/anthropics/claude-code/issues/77136)

### 4. #86012 — [BUG] 跨会话消息使接收方查询完全无响应（15-20 分钟才被空闲超时强杀）
- **作者**: @WarmBed | 💬 31 | 👍 6
- **要点**: Desktop 1.28929.0.0 + CCD 2.1.227 下，跨 session messaging 触发后接收方 `hadFirstResponse=false, reason=no_response`，必须等自身 idle-timeout 强杀。
- **社区反应**: 包含完整抓包与日志的技术深挖帖，被多份 issue 引用。

📎 [#86012](https://github.com/anthropics/claude-code/issues/86012)

### 5. #25286 — [BUG] Claude Code 终端渲染卡死，键盘输入完全失效
- **作者**: @davidpmclaughlin | 💬 19 | 👍 18
- **要点**: CLI 会话中终端渲染进入 100% 写入状态，Ctrl+C / Ctrl+D / 输入均失效，仅能从外部 `kill` 进程。
- **社区反应**: 用户报告至少出现 5 次，跨 macOS 平台。

📎 [#25286](https://github.com/anthropics/claude-code/issues/25286)

### 6. #61044 — [BUG] CCR Routines 中 MCP 工具调用被错误标记为"需审批"，无审批 UI
- **作者**: @beer89447-spec | 💬 18 | 👍 6
- **要点**: Routine（计划任务）场景下调用 MCP 工具持续失败，提示 "requires approval" 但 UI 未弹出授权入口；重连无效。

📎 [#61044](https://github.com/anthropics/claude-code/issues/61044)

### 7. #88370 — [BUG] MCP Apps widgets 在 2.1.234 服务端版本协商上线后停止渲染
- **作者**: @liran-ws | 💬 5 | 👍 0
- **要点**: 客户端、服务器均无变更的情况下，2026-08-20 晚间所有 MCP Apps widgets（`_meta.ui.resourceUri`）集体停渲，疑似服务端灰度开启 `server/discover` 协议协商导致。
- **为何重要**: 当日新增、指向最新版本回归。

📎 [#88370](https://github.com/anthropics/claude-code/issues/88370)

### 8. #88383 — [BUG] 2.1.238 回归：交互式 CLI 会话的 thinking 块退化为空签名占位
- **作者**: @jaidhyani | 💬 2 | 👍 1
- **要点**: v2.1.238 后，`entrypoint: "cli"` 会话 JSONL 中 thinking 块变为 `{"thinking": "", "signature": "<sig>"}` —— 与 #87947 中 SDK-CLI/print 模式表现一致，破坏了会话恢复与缓存命中。
- **为何重要**: 升级当日即暴露回归，影响所有交互式 CLI 用户。

📎 [#88383](https://github.com/anthropics/claude-code/issues/88383)

### 9. #87491 — [BUG] Opus 5：将直接指令视为协商，向任务响应中注入自我/人际内容
- **作者**: @ExploreAITogether | 💬 4 | 👍 1
- **要点**: Opus 5 出现"把指令当谈判"的回归行为，回复中混入不必要的自指、人际寒暄内容，干扰自动化任务输出。

📎 [#87491](https://github.com/anthropics/claude-code/issues/87491)

### 10. #88412 — [BUG] 唤醒空闲 fork agent 时继承的 prompt cache 全部失效
- **作者**: @NubeBuster | 💬 1 | 👍 0
- **要点**: `subagent_type: "fork"` agent 唤醒后，`messages_changed` 触发 `cache_read` 被钉死在某一固定边界而非按 TTL 自然失效，造成成本突增。
- **为何重要**: 直接影响多 agent 架构的成本控制，是核心痛点。

📎 [#88412](https://github.com/anthropics/claude-code/issues/88412)

---

## 🔧 重要 PR 进展

⚠️ 过去 24 小时内仓库无新增 Pull Request 更新。

可关注的相关工作（间接通过 issue/PR 关联）：

- **#87947** — 与 #88383 同源的 SDK-CLI thinking 块空签名问题
- **#75607** — 涉及服务端实验 `x-cc-atis` 关闭 Opus 4.8 thinking summaries，引发关于"自动更新越权设置"的争议
- 多个 Desktop MSIX / TCC 相关 issue（#87879、#87607、#70094）尚未合并修复 PR

如需了解具体 PR，请直接检索 [anthropics/claude-code/pulls](https://github.com/anthropics/claude-code/pulls)。

---

## 📈 功能需求趋势

从活跃 issue 中提炼，社区当前最强烈的诉求集中在以下方向：

| 方向 | 代表 issue | 关注度 |
|---|---|---|
| **🖥️ Desktop 应用稳定性** | #42776, #86012, #87879, #87607, #88087, #79782 | ⭐⭐⭐⭐⭐ 多个平台（Windows/macOS）反复出现文件锁、容器 silo 泄漏、对话框取消等问题，已形成问题族 |
| **🤖 新模型质量回归** | #77136, #87491, #75607, #87273 | ⭐⭐⭐⭐⭐ Opus 5、Fable 的输出风格、thinking 控制、reasoning_extraction 误触发被频繁报告 |
| **🔌 MCP 生态可靠性** | #88370, #61044, #86459 | ⭐⭐⭐⭐ 协议协商升级导致 widgets 停渲、参数被静默字符串化、Routine 中授权失效 |
| **💰 成本与缓存可预测性** | #88412, #75607 | ⭐⭐⭐⭐ Fork agent 唤醒后 cache 失效、服务端实验绕过用户设置 |
| **🔐 账户/认证体验** | #36151, #78037 | ⭐⭐⭐ 多账户切换 + OAuth refresh token 每 24h 失效 |
| **🛠️ CLI/Agent View 增强** | #88197, #86092, #87959, #79128 | ⭐⭐⭐ 后台守护进程、`--resume --bg` 行为修正、worktree-isolation Bash 守卫过严 |
| **🧩 插件与 Hook 文档/可发现性** | #79143, #88405, #79147 | ⭐⭐ hookify 前缀不一致、`rules/` 目录符号链接与文档矛盾

---

## 💬 开发者关注点

综合当日社区反馈，开发者最关心的高频痛点：

1. **升级即踩雷** — v2.1.238 当日已出现 #88383（thinking 块退化）和 #88405（`.claude/rules/` 符号链接失效）两条回归报告。建议生产用户在升级前观察 24-48 小时。

2. **Desktop 在 Windows 上的"不可重入"陷阱** — MSIX 在更新/退出未彻底清理文件锁或容器 silo（#87879、#42776、#87607），且 MSIX 路径下 CCD 无法 `autoUpdates`（#86012）。企业部署需要规避。

3. **服务端实验的"暗箱"行为** — #75607 暴露 `x-cc-atis` 在用户设置 `autoUpdates: false` 的情况下仍生效，社区呼吁对服务端实验提供显式 opt-in/opt-out。

4. **新模型"过度社交化"** — #87491 / #77136 集中反映 Opus 5、Fable 在自动化场景下生成冗余的人际/自我元内容，与"工具型调用"预期不符。

5. **MCP 协议变更缺乏兼容性承诺** — #88370 中 widgets 集体失效，但服务端无对应公告。开发者要求 Anthropic 在协议层面提供变更通知与灰度机制。

6. **后台/远程会话能力薄弱** — #88197 借 Codex 的 daemon 模式作对照，希望 Claude Code 也能提供原生后台进程管理与跨设备会话持久化。

7. **文档与实现脱节** — `.claude/rules/` 对 symlink 的支持（#88405）、hookify 文件命名（#79143）、`--fork-session` 与 `--bg` 的组合行为（#86092）均存在文档与代码不一致的问题。

---

*日报由 GitHub 公开数据汇总生成，仅供参考。*

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

<think>The user wants me to generate a Chinese daily report for OpenAI Codex community dynamics based on GitHub data. Let me analyze the data carefully and structure the report according to the requirements.

Let me first identify the key information:

**Releases (Past 24 hours):**
- rust-v0.149.0 (stable): New interactive `codex agents` dashboard, /cd, /pwd, /cwd commands
- rust-v0.150.0-alpha.1
- rust-v0.149.0-alpha.7
- rust-v0.149.0-alpha.4
- rust-v0.149.0-alpha.3

**Most active Issues (top 30 by comments, pick 10):**
1. #39162 - macOS auth invalidated on opening existing conversation (28 comments, 21 👍)
2. #28276 - Failed to archive conversation (23 comments, 5 👍)
3. #23200 - Headless remote Linux hosts support for Codex mobile (20 comments, 49 👍) - HIGH UPVOTES
4. #33493 - Local compaction v2 retains unbounded input_image (19 comments)
5. #39189 - Windows signing out Pro account (16 comments)
6. #35746 - Paginated history drops rollout records (16 comments)
7. #20930 - Codex App notification doesn't work with remote connection (12 comments, 18 👍)
8. #31973 - Windows Remote Control stuck in "Reconnecting..." (12 comments)
9. #39150 - Cannot archive conversations with \\?\ prefix (12 comments)
10. #34026 - Windows completed threads stuck thinking (11 comments)

Also notable:
- #38364 - Subagents panel stuck (11 comments)
- #37695 - Declared capabilities absent at runtime (8 comments)
- #39705 - thread/archive schedules rollout twice (8 comments)
- #39627 - Legacy local tasks fail to archive (8 comments)
- #37674 - Bedrock cache controls (7 comments)
- #38939 - CRITICAL macOS V8 OOM crash (5 comments)
- #38503 - "Too many requests" blocks chat (5 comments, 10 👍)
- #38425 - apply_patch targeting AppX inaccessible (5 comments)

**Most important PRs (top 20):**
1. #39827 - Add history and notes tools for token-budget sessions
2. #39825 - Use Responses compaction for Amazon Bedrock
3. #39822 - Preserve uncapped Guardian classifier instructions
4. #31817 - Update models.json (bot)
5. #39813 - Defer legacy filesystem policy projection
6. #39812 - Avoid materializing writable-root carveouts
7. #39811 - Restrict macOS preference reads
8. #39809 - Preserve WINDIR in Windows shell environments
9. #39807 - Finalize reserved PDF uploads with C2PA
10. #39804 - Use multi-agent V1 for Bedrock
11. #39802 - Optimize case-insensitive thread history matching
12. #39798 - Update rmcp to 3.1.3
13. #39797 - Enrich thread archive analytics
14. #39795 - Add hostname to TUI status line
15. #39794 - Install build tools in CI
16. #39792 - Reject settings updates for parent-owned subagents
17. #39791 - Handle standalone tool outputs as external context
18. #39790 - Deduplicate zsh fork test setup
19. #39786 - Support host-accepted exec-server WebSockets

Let me now write the report in Chinese, with technical, concise language.

Trends to identify:
- Auth/session issues (especially macOS, Windows) - cross-cutting
- Remote control/mobile issues - trending
- Subagents/multi-agent architecture - new feature area
- Bedrock integration - cost/cache controls
- Windows-specific issues (sandbox, paths, archive)
- Performance (compaction, V8 OOM, archive conflicts)

Developer concerns:
- Cross-platform reliability (Windows, macOS)
- Archive/conversation persistence bugs
- Remote control / mobile connectivity
- Auth token management
- Multi-agent overhead/cost
- Sandbox escape concerns (#31434)
- Skill/plugin discovery

Let me write the report now.</think>

# OpenAI Codex 社区动态日报
**日期：2026-08-21**

---

## 📌 今日速览

今日 Codex 完成了 `rust-v0.149.0` 正式版发布，重点引入了交互式 `codex agents` 仪表盘和 TUI 工作目录管理命令；同时社区反馈集中爆发在 **跨平台会话持久化** 与 **远程控制连接稳定性** 两大方向，macOS/Windows 的会话归档失败、签名注销问题成为讨论焦点。Pull Request 侧则集中在 **Amazon Bedrock 多 Agent 适配**、**沙箱策略细化** 与 **token-budget 会话记忆恢复** 等内部架构优化。

---

## 🚀 版本发布

### `rust-v0.149.0`（稳定版）
- 新增交互式 `codex agents` 仪表盘，支持任务搜索、启动、打开、重命名与停止，并可配置快捷键（[#39094](https://github.com/openai/codex/pull/39094)、[#39112](https://github.com/openai/codex/pull/39112)、[#39114](https://github.com/openai/codex/pull/39114)、[#39142](https://github.com/openai/codex/pull/39142)）
- TUI 会话中新增 `/cd`、`/pwd`、`/cwd` 工作目录管理命令（[#38894](https://github.com/openai/codex/pull/38894)）

### 预发布通道
- `rust-v0.150.0-alpha.1`
- `rust-v0.149.0-alpha.7 / alpha.4 / alpha.3`

> 主线快速迭代，0.149 系列 alpha 通道已迭代至 alpha.7，0.150 同步开启 alpha 通道。

---

## 🔥 社区热点 Issues

| # | Issue | 关键看点 |
|---|---|---|
| [#39162](https://github.com/openai/codex/issues/39162) | **macOS 打开既有会话导致 ChatGPT 鉴权失效并跳转到登录页**（💬 28，👍 21） | 影响 `26.814.41407`，相比 `26.810.52044` 出现的回归。鉴权状态被打开会话动作无效化，影响所有 ChatGPT 账户登录用户。 |
| [#23200](https://github.com/openai/codex/issues/23200) | **希望 Codex Mobile 支持无头远程 Linux 主机，不再依赖桌面端在线**（💬 20，👍 **49**） | 今日获赞最高的 issue。开发者真实场景多在常驻 Linux 服务器，桌面端仅作控制层。直接命中 Codex Mobile 的产品定位痛点。 |
| [#28276](https://github.com/openai/codex/issues/28276) | **macOS 会话归档失败 + 出现无主线程**（💬 23，👍 5） | 长期未解决的历史 bug，反映会话元数据管理存在一致性问题。 |
| [#33493](https://github.com/openai/codex/issues/33493) | **Local compaction v2 保留无上限的 input_image，导致反复自动压缩**（💬 19，👍 4） | 长会话图片密集场景下进入压缩循环，性能与成本双重问题。 |
| [#39189](https://github.com/openai/codex/issues/39189) | **Windows 26.814 打开既有线程后 Pro 个人账户被登出**（💬 16） | 与 #39162 高度同源，跨平台鉴权回归；workspace-only settings 触发 401 后导致 Pro 账户被强制重签。 |
| [#35746](https://github.com/openai/codex/issues/35746) | **CLI 分页历史丢失有效 rollout 记录并复用 ordinal**（💬 16） | 内部数据模型层面问题，影响历史回溯与多 session 重建流程。 |
| [#39150](https://github.com/openai/codex/issues/39150) | **Windows 因 `\\?\` 路径前缀无法归档会话**（💬 12） | Windows 扩展长度路径导致的归档失败，是 Windows 平台多个相关 issue 的共性根因之一。 |
| [#31973](https://github.com/openai/codex/issues/31973) | **Windows Remote Control 永久卡在 "Reconnecting..." 无法远程恢复**（💬 12） | QR 配对的远程控制场景下出现死锁，远程主机无任何恢复手段。 |
| [#20930](https://github.com/openai/codex/issues/20930) | **远程连接下 Codex App 通知失效**（💬 12，👍 18） | 长期 issue，覆盖 API 订阅用户在远程 Linux + 桌面 macOS 场景下的通知路由问题。 |
| [#38939](https://github.com/openai/codex/issues/38939) | **macOS computer-use 线程失控耗尽 Dispatch Thread 并触发 V8 OOM 崩溃**（💬 5） | 标记为 App-Unusable 级 Critical 问题，computer-use 路径的资源回收存在缺陷。 |

**社区关注补遗**：[#38503](https://github.com/openai/codex/issues/38503) ChatGPT 网页端 "Too many requests" 模态干扰 Work 任务（👍 10）；[#37695](https://github.com/openai/codex/issues/37695) Windows 上声明的 owner-auth 与 secret-manager 能力在运行时实际缺失。

---

## 🛠️ 重要 PR 进展

| # | PR | 内容 |
|---|---|---|
| [#39827](https://github.com/openai/codex/pull/39827) | **为 token-budget 会话增加 history / notes 工具** | 直接模型层的 history 工具，可列窗/读条目；为跨上下文窗口迁移提供状态保留能力。 |
| [#39825](https://github.com/openai/codex/pull/39825) | **Amazon Bedrock 改用 Responses 压缩** | Bedrock 远端压缩切换至 `/v1/responses` 的 `compaction_trigger`，下线遗留协议。 |
| [#39822](https://github.com/openai/codex/pull/39822) | **保留未设上限的 Guardian 分类器指令** | Guardian v2 曾隐式截断 classifier 指令，现恢复为默认无界并继续显式 honor 已配置上限。 |
| [#39813](https://github.com/openai/codex/pull/39813) | **延迟遗留文件系统策略投影** | 仅在 cwd 真正会触发策略重绑时才计算遗留投影，减少无效重建开销。 |
| [#39812](https://github.com/openai/codex/pull/39812) | **避免为存在性检查物化可写根 carveout** | 新增 `has_writable_roots_with_cwd`，分类权限画像与补丁选择时更高效。 |
| [#39811](https://github.com/openai/codex/pull/39811) | **限制 macOS 偏好读取仅在 full-disk 策略下生效** | Seatbelt 偏好与 `cfprefsd` 授权移入独立段，避免越权读取沙箱外偏好。 |
| [#39809](https://github.com/openai/codex/pull/39809) | **Windows 核心 shell 环境保留 `WINDIR`** | 加入白名单并测试大小写变体（如 `WinDir`）。 |
| [#39804](https://github.com/openai/codex/pull/39804) | **Bedrock 模型使用 multi-agent V1** | Bedrock 不支持 V2 所需 response items；目录层显式归一化为 V1。 |
| [#39802](https://github.com/openai/codex/pull/39802) | **优化大小写不敏感线程历史匹配** | 用单调游标回填原始字节偏移，避免每次匹配重扫全字符跨度。 |
| [#39786](https://github.com/openai/codex/pull/39786) | **支持宿主已接受的 exec-server WebSocket** | 新增 `EnvironmentManager::from_accepted_websocket` 与 `replace_accepted_websocket`，嵌入宿主可直接接管已认证 Axum WS。 |

> 注：所有 PR 均由 `copyberry[bot]` 自动提交，主仓库近期代码改动以自动化重构为主，缺乏人工 PR 讨论热度。

---

## 📈 功能需求趋势

1. **移动端 / 远程控制能力扩展** —— [#23200](https://github.com/openai/codex/issues/23200)（👍 49）、[#31973](https://github.com/openai/codex/issues/31973)、[#38023](https://github.com/openai/codex/issues/38023)、[#22947](https://github.com/openai/codex/issues/22947)（👍 7）持续推高，社区希望 Codex Mobile 直接驱动无头 Linux 主机、接管 host 上的普通 Chat、并改善远程控制恢复能力。
2. **多 Agent（Subagents）成本与可观测性** —— [#39808](https://github.com/openai/codex/issues/39808) 指出 fan-out 会因每 agent 固定 overhead 抬高整体消耗；[#38364](https://github.com/openai/codex/issues/38364) 反映 Subagents 面板状态不一致。Subagents 正成为新焦点。
3. **AWS Bedrock / 第三方 Provider 能力补齐** —— [#37674](https://github.com/openai/codex/issues/37674)（GPT-5.6 Sol 缺显式缓存控制致 cache-write 暴涨），配合 #39804、#39825 形成连贯改进线。
4. **IDE 与扩展体验** —— [#37972](https://github.com/openai/codex/issues/37972) 建议 VS Code 输入框 markdown 可选；[#37695](https://github.com/openai/codex/issues/37695) 提出 Windows Desktop 声明能力与运行时不一致。
5. **TUI / CLI 细节打磨** —— 0.149.0 新增 `/cd` 系列命令；[#39795](https://github.com/openai/codex/pull/39795) 把 hostname 加入状态栏；[#39802](https://github.com/openai/codex/pull/39802) 优化历史匹配性能。

---

## 🧩 开发者关注点（高频痛点）

| 痛点 | 证据 |
|---|---|
| **跨平台会话持久化与归档可靠性** | #28276、#39150、#39705、#39627、#34026 —— Windows 扩展路径、SQLite verbatim alias、legacy rollout、Subagent 状态机等均导致归档失败或线程卡死。 |
| **鉴权状态被会话操作意外重置** | #39162（macOS）、#39189（Windows）高度同源：打开既有线程/会话会触发账户登出，影响所有 ChatGPT 订阅用户。 |
| **沙箱越权与能力声明不一致** | #31434（apply_patch 越权）、#37695（声明能力运行时缺失）、#38425（Windows 沙箱无法访问 AppX）、#35914（Google Drive VFS 挂起）。沙箱安全模型仍是高频高优问题。 |
| **多 Agent 开销与配额消耗** | #39808（fan-out 隐性增耗）、[#38503](https://github.com/openai/codex/issues/38503)（web 端 "Too many requests" 误伤 Work）。开发者对计费可预测性敏感。 |
| **远程控制 / Mobile 连通性** | #20930、#31973、#38023、#39817 —— 通知、QR 配对、Android turn/start 30s 超时、Windows 更新后断连，跨场景均无清晰恢复路径。 |
| **Compression / Context 长会话成本** | #33493（input_image 无界保留导致循环压缩）、#39827（PR 引入 history 工具尝试缓解）。 |
| **Skills / Plugins 发现与配置** | #39805（`~/.codex` skills 未被找到）、#39682（`remote_plugin=false` 仍下载 curated remote plugins）。 |

---

**总结**：今日 Codex 仓库的信号清晰指向 **"会话层 + 跨平台一致性"** 是当前最大短板，同时 **多 Agent 架构与 Bedrock 第三方 Provider 适配** 成为新的产品演进主线。`copyberry[bot]` 主导的自动化 PR 节奏很快，但社区人工维护的 issue 仍有相当数量未进入实质解决通道，建议关注 0.149.0 后续补丁与 0.150.0 alpha 是否触及上述高频痛点。

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

<think>Let me analyze the GitHub data for Gemini CLI community dynamics on 2026-08-21 and generate a comprehensive Chinese daily report.

Key observations:
1. New nightly release v0.56.0-nightly.20260821.g30573d2e4 with symlink fix and refactor
2. Many high-priority issues around agents (subagents hanging, recovery, browser subagent issues)
3. Memory system issues clustering around #26516, #26522, #26523, #26525
4. Auto Memory system bugs are a theme
5. PR Generation feature is being actively developed (multiple PRs from @joneba-google)
6. Security concerns: sandbox escapes, environment variable sanitization
7. Model additions: Gemini 3.7 Flash, 3.6 Flash, 3.5 Flash-Lite
8. Windows compatibility issues

Let me organize this into the requested structure.

Top 10 Issues to highlight:
1. #22323 - Subagent recovery after MAX_TURNS reported as GOAL success (12 comments, p1)
2. #21409 - Generalist agent hangs (8 comments, 8 thumbs up, p1)
3. #19873 - Zero-Dependency OS Sandboxing (8 comments, p2, enhancement)
4. #24353 - Robust component level evaluations (7 comments, p1)
5. #22745 - AST-aware file reads (7 comments, p2)
6. #21968 - Gemini doesn't use skills and sub-agents enough (6 comments, p2)
7. #26522 - Auto Memory retrying low-signal sessions (5 comments, p2)
8. #25166 - Shell command stuck with "Waiting input" (4 comments, p1, 3 thumbs up)
9. #26525 - Auto Memory secret redaction (4 comments, p2, security)
10. #22267 - Browser Agent ignores settings.json overrides (3 comments, p2)

Top 10 PRs:
1. #28941 - Version bump to 0.56.0-nightly
2. #28934 - History rollback and retry nudge optimizations
3. #28940 - Fix A2A server stale cancellation error
4. #28862 - Refactor shellExecutionService (closed)
5. #28938 - Fix GIT_CONFIG_* environment inconsistency (p1)
6. #28939 - Avoid persisting interrupted response placeholder
7. #28936 - PR generation worker entrypoint
8. #28863 - Extension consent and environment sanitization
9. #28933 - PR generation orchestrator state machine
10. #28935 - Sandbox isolation for Docker sockets (security)
11. #28930 - Drop unsafe diff.external override (p1)
12. #28910 - Gemini 3.7 Flash, 3.6 Flash, 3.5 Flash-Lite (closed)
13. #28915 - Symlink evaluation fix (closed)
14. #28828 - Warn when preview model is substituted (p1)

Let me write this in a professional, concise manner in Chinese.</think>

# Gemini CLI 社区动态日报

**日期**: 2026-08-21
**数据来源**: [google-gemini/gemini-cli](https://github.com/google-gemini/gemini-cli)

---

## 📌 今日速览

今日 Gemini CLI 发布了 **v0.56.0-nightly** 版本，重点修复了符号链接处理一致性。社区讨论热度集中在 **Agent 子代理稳定性**（12+ 评论）和 **Auto Memory 系统**（多个相关 issue 集中更新）。与此同时，后端基础设施层面的 PR 自动生成（PR Generation）流水线正在快速推进，多个核心组件协同落地。

---

## 🚀 版本发布

### v0.56.0-nightly.20260821.g30573d2e4

- 🔧 **fix(core)**: 通过 [#28915](https://github.com/google-gemini/gemini-cli/pull/28915) 确保 `.geminiignore`/`.gitignore` 在符号链接场景下的求值一致性
- ♻️ **refactor(core)**: 通过 [#28862](https://github.com/google-gemini/gemini-cli/pull/28862) 移除 `shellExecutionService` 中的 `eslint-disable` 与类型断言（已合入 macOS PTY 资源泄漏修复分支）

> 📎 [Release 链接](https://github.com/google-gemini/gemini-cli/releases/tag/v0.56.0-nightly.20260821.g30573d2e4) · [自动化版本升级 PR #28941](https://github.com/google-gemini/gemini-cli/pull/28941)

---

## 🔥 社区热点 Issues（Top 10）

| # | Issue | 优先级 | 评论 | 关注理由 |
|---|-------|--------|------|----------|
| 1 | [#22323](https://github.com/google-gemini/gemini-cli/issues/22323) 子代理达到 MAX_TURNS 后被误报为 GOAL 成功 | p1 | 12 | **状态语义严重错误**，子代理在未完成任务时返回 "success"，会掩盖真实失败，需重新测试 |
| 2 | [#21409](https://github.com/google-gemini/gemini-cli/issues/21409) Generalist Agent 无限挂起 | p1 | 8（👍8） | **用户痛点最强**，影响所有委派子代理的场景（如简单文件夹创建），社区高赞 |
| 3 | [#19873](https://github.com/google-gemini/gemini-cli/issues/19873) 零依赖 OS 沙箱与执行意图路由 | p2 | 8 | **架构性改进**，利用 Gemini 3 模型对 POSIX 工具链的亲和性，在沙箱安全前提下提升执行效率 |
| 4 | [#24353](https://github.com/google-gemini/gemini-cli/issues/24353) 组件级评估体系（EPIC） | p1 | 7 | 已有 76 个行为评估测试覆盖 6 个模型，**质量保障体系**的关键里程碑 |
| 5 | [#22745](https://github.com/google-gemini/gemini-cli/issues/22745) AST 感知的文件读取/搜索/映射 | p2 | 7 | **降低 token 消耗与误读率**的探索方向，配套 [#22746](https://github.com/google-gemini/gemini-cli/issues/22746) |
| 6 | [#21968](https://github.com/google-gemini/gemini-cli/issues/21968) Gemini 极少主动调用 Skills 与子代理 | p2 | 6 | **能力利用率问题**，用户反馈需显式指令才会触发 |
| 7 | [#25166](https://github.com/google-gemini/gemini-cli/issues/25166) Shell 命令执行完成后卡在 "Waiting input" | p1 | 4（👍3） | **高频复现的体验性 bug**，简单 CLI 命令都会陷入挂起 |
| 8 | [#26522](https://github.com/google-gemini/gemini-cli/issues/26522) Auto Memory 无限重试低信号会话 | p2 | 5 | **资源浪费与索引污染**，低信号会话无法被正确归档 |
| 9 | [#26525](https://github.com/google-gemini/gemini-cli/issues/26525) Auto Memory 需确定性脱敏与日志缩减 | p2 | 4 | **安全合规**问题：secret 可能在进入模型上下文后才被识别 |
| 10 | [#22267](https://github.com/google-gemini/gemini-cli/issues/22267) Browser Agent 忽略 `settings.json` 覆盖（如 `maxTurns`） | p2 | 3 | 配置层 bug，影响所有 Browser Agent 用户行为定制 |

> 集中关注的话题还有：[#26523 内存补丁无效处理](https://github.com/google-gemini/gemini-cli/issues/26523)、[#21983 Wayland 下 Browser 子代理失败](https://github.com/google-gemini/gemini-cli/issues/21983)、[#24246 超过 128 个工具触发 400 错误](https://github.com/google-gemini/gemini-cli/issues/24246)。

---

## 🛠️ 重要 PR 进展（Top 10）

| # | PR | 说明 |
|---|----|----|
| 1 | [#28934](https://github.com/google-gemini/gemini-cli/pull/28934) 历史回滚与重试提示优化 | **性能与成本优化**，工具取消改为回滚而非追加合成响应，提升前缀缓存命中率并减少 API 调用 |
| 2 | [#28940](https://github.com/google-gemini/gemini-cli/pull/28940) 修复 A2A Server 陈旧取消错误 | **彻底解决 GCA "Execution stopped" 问题**，消除因状态污染导致的下一次请求直接崩溃 |
| 3 | [#28938](https://github.com/google-gemini/gemini-cli/pull/28938) 保持 `GIT_CONFIG_*` 环境变量内部一致 | **p1 修复**：sanitizeEnvironment 会输出 git 无法解析的指令，导致所有 git 调用失败 |
| 4 | [#28939](https://github.com/google-gemini/gemini-cli/pull/28939) 避免持久化中断响应的占位文本 | 修复中断回合污染后续模型历史的问题（[issue #28927](https://github.com/google-gemini/gemini-cli/issues/28927)） |
| 5 | [#28930](https://github.com/google-gemini/gemini-cli/pull/28930) 移除不安全的 `diff.external` 覆盖 | **p1 安全修复**：空字符串配置导致所有 git 操作失败（[issue #28928](https://github.com/google-gemini/gemini-cli/issues/28928)） |
| 6 | [#28935](https://github.com/google-gemini/gemini-cli/pull/28935) macOS Seatbelt 沙箱隔离 Docker/容器运行时 | **安全加固**：阻止通过 Docker Desktop VirtioFS 挂载实现的沙箱逃逸 |
| 7 | [#28863](https://github.com/google-gemini/gemini-cli/pull/28863) 扩展环境变更的用户同意与运行时变量净化 | **安全修复**：扩展更新可绕过 consent 检查注入未授权环境变量 |
| 8 | [#28933](https://github.com/google-gemini/gemini-cli/pull/28933) PR 生成迭代式 Orchestrator 状态机 | **新功能**：协调多轮编码、评估沙箱隔离、ESLint 静态分析与轨迹日志 |
| 9 | [#28936](https://github.com/google-gemini/gemini-cli/pull/28936) PR 生成 Worker 入口与日志配置 | Cloud Run job 异步入口、结构化日志、退出码管理 |
| 10 | [#28932](https://github.com/google-gemini/gemini-cli/pull/28932) PR 生成 Antigravity Agent Runner | 异步 agent 执行、超时强制、轨迹流分块解析 |

> 其他值得关注的：[#28828 模型静默替换时告警（p1）](https://github.com/google-gemini/gemini-cli/pull/28828)、[#28910 Gemini 3.7/3.6/3.5 Flash-Lite 模型配置（已合入）](https://github.com/google-gemini/gemini-cli/pull/28910)、[#28931 README 文档澄清默认安装通道](https://github.com/google-gemini/gemini-cli/pull/28931)。

---

## 📈 功能需求趋势

从过去 24 小时活跃的 Issues 中提炼出五大社区关注方向：

1. **🤖 Agent 子代理生态完善**
   稳定性（挂起、MAX_TURNS 误判、Wayland 兼容）、能力调用率（[#21968](https://github.com/google-gemini/gemini-cli/issues/21968)）、配置优先级（[#22267](https://github.com/google-gemini/gemini-cli/issues/22267)）、会话隔离与多 agent 编排（[#22598](https://github.com/google-gemini/gemini-cli/issues/22598)）

2. **🧠 记忆系统与上下文工程**
   Auto Memory 系列（[#26516](https://github.com/google-gemini/gemini-cli/issues/26516)、[#26522](https://github.com/google-gemini/gemini-cli/issues/26522)、[#26523](https://github.com/google-gemini/gemini-cli/issues/26523)、[#26525](https://github.com/google-gemini/gemini-cli/issues/26525)）以及 Tactful Extraction（[#19561](https://github.com/google-gemini/gemini-cli/issues/19561)）共同指向：减少 token 浪费、提升召回质量、保证安全性

3. **🛡️ 沙箱与安全**
   OS 级沙箱（[#19873](https://github.com/google-gemini/gemini-cli/issues/19873)）、容器运行时隔离（[#28935](https://github.com/google-gemini/gemini-cli/pull/28935)）、环境变量净化（[#28863](https://github.com/google-gemini/gemini-cli/pull/28863)）、secret 脱敏（[#26525](https://github.com/google-gemini/gemini-cli/issues/26525)）形成多层次防御

4. **🧩 评估与质量保障**
   组件级评估（[#24353](https://github.com/google-gemini/gemini-cli/issues/24353)）、行为评估、steering eval 改造（[#23313](https://github.com/google-gemini/gemini-cli/issues/23313)）表明团队在系统化建设评估基础设施

5. **🌐 跨平台兼容性**
   Windows 长路径（[#28926](https://github.com/google-gemini/gemini-cli/pull/28926)）、macOS 沙箱（[#28935](https://github.com/google-gemini/gemini-cli/pull/28935)）、Linux Wayland（[#21983](https://github.com/google-gemini/gemini-cli/issues/21983)）三大平台覆盖仍是核心需求

---

## 💬 开发者关注点

基于近 24 小时高活跃度的 Issue/PR 评论，以下痛点值得产品团队优先关注：

- **🔴 可靠性 > 体验性**：挂起类问题（[#21409](https://github.com/google-gemini/gemini-cli/issues/21409)、[#25166](https://github.com/google-gemini/gemini-cli/issues/25166)、[#22465](https://github.com/google-gemini/gemini-cli/issues/22465)）位居反馈榜首，**Agent 不稳定是当前第一拦路虎**。

- **🟡 静默失败令人担忧**：preview 模型无提示降级（[#28828](https://github.com/google-gemini/gemini-cli/pull/28828)）、MAX_TURNS 被报告为 GOAL 成功（[#22323](https://github.com/google-gemini/gemini-cli/issues/22323)）、配置被忽略（[#22267](https://github.com/google-gemini/gemini-cli/issues/22267)）——**开发者期望"失败可见、行为可解释"**。

- **🟢 自动化流水线正在成形**：PR Generation 系列 PR（[#28932](https://github.com/google-gemini/gemini-cli/pull/28932)、[#28933](https://github.com/google-gemini/gemini-cli/pull/28933)、[#28936](https://github.com/google-gemini/gemini-cli/pull/28936)、[#28937](https://github.com/google-gemini/gemini-cli/pull/28937)）显示团队在投入构建 **端到端自动化修复流水线**，未来或将显著降低维护成本。

- **🟣 安全成体系化建设**：从环境变量净化到容器沙箱隔离再到 secret 脱敏，**安全不再是单点修复而是分层防御**。

- **🔵 Token 经济性**：Tactful Extraction（[#19561](https://github.com/google-gemini/gemini-cli/issues/19561)）、AST 工具（[#22745](https://github.com/google-gemini/gemini-cli/issues/22745)）、工具数量限制（[#24246](https://github.com/google-gemini/gemini-cli/issues/24246)）共同反映 **降低单回合 token 消耗** 是长期方向。

---

> 🤖 本日报基于 2026-08-21 GitHub Issues/PRs 公开数据自动生成，仅供参考。

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

<think>The user wants me to generate a Chinese daily report for GitHub Copilot CLI community dynamics for 2026-08-21. Let me analyze the data carefully and structure the report according to the requirements.

Key observations from the data:

1. **Release**: v1.0.81-6 was released with two notable additions (defaultMode/defaultPermissionMode settings, --with-token for login) and improvements to ACP clients.

2. **Issues**: 35 issues updated in past 24 hours, 30 shown. Most are CLOSED. Several are OPEN. Let me categorize:
   - MCP-related issues (very prominent): #1481, #4390, #3162, #4096, #4503, #4439, #4206, #4038, #3698, #4349, #4542
   - Model-related: #4390, #4422
   - Authentication: #4096, #4503, #4439, #4103
   - Windows/platform: #4524, #4492, #4540, #4543, #4546, #4529, #4531
   - Sandbox/permissions: #4524, #4528, #4349, #4546
   - UI/UX: #1481 (SHIFT+ENTER), #4544 (paste images), #4541 (queue editor), #4538 (/ask multi-turn), #4547 (scheduled workflow)
   - Session management: #4529, #4539, #4543, #4545 (skills discovery)
   - Memory: #4535 (store_memory fails in v1.0.81 prereleases)

3. **PRs**: Only 1 PR shown (#4510) - removes documentation from README.

4. **Feature requests**:
   - Reasoning effort persistence (#4530)
   - Multi-turn /ask (#4538)
   - Paste images in freeform questions (#4544)
   - Queue editor improvements (#4541)
   - Skills discovery in ~/.copilot/skills/ (#4545)

5. **Pain points**:
   - MCP server issues (very high frequency - OAuth, registry, connection, leaks)
   - Authentication/OAuth issues
   - Claude models being disabled/greyed out
   - Windows-specific issues (WebView2, sandbox, wsl, paths)
   - Session management across reconnects

Let me now write the report. Since only 1 PR is shown, I'll need to handle the PR section carefully - I should note that only 1 PR was updated, not fabricate 10. The user said "挑选 10 个重要的 PR" but only 1 exists. I should be honest about this.

Let me structure it properly:

## 今日速览
- v1.0.81-6 发布，带来 defaultMode/defaultPermissionMode 配置和 --with-token 登录改进
- MCP 相关问题仍然是社区热点，包括 OAuth、注册表、连接稳定性等多个维度
- 模型可用性问题引发关注，特别是 Anthropic Claude 模型在 CLI 中被禁用

## 版本发布
v1.0.81-6 details

## 社区热点 Issues
Top 10 most notable based on comments, recency, importance:

1. #1481 (28 comments, CLOSED) - SHIFT+ENTER bug, classic UX issue
2. #4390 (15 comments, CLOSED) - Claude models missing, business org
3. #3162 (7 comments, CLOSED) - MCP false positive block
4. #4096 (6 comments, CLOSED) - OAuth MCP token not bridged to sessions
5. #4503 (5 comments, CLOSED) - SDK auth token missing
6. #4439 (5 comments, CLOSED) - GitLab MCP OAuth RFC 8414
7. #4422 (4 comments, CLOSED) - All Claude disabled - this is very recent
8. #4206 (4 comments, CLOSED) - MCP loading stuck
9. #4038 (3 comments, CLOSED) - Non-interactive MCP empty message
10. #4524 (3 comments, CLOSED) - Sandbox breaks git
11. #4535 (3 comments, OPEN) - store_memory fails in v1.0.81 prereleases - this is important because it's a regression in latest prerelease
12. #3698 (1 comment, CLOSED) - MCP server leak

Let me pick the most important 10:
1. #1481 - highest comments, classic UX issue
2. #4390 - Anthropic models unavailable, high-impact for business
3. #4535 - OPEN regression in latest prerelease, critical
4. #3162 - MCP policy false-positive
5. #4096 - OAuth MCP token bridging
6. #4503 - SDK auth token init
7. #4439 - GitLab MCP OAuth compliance
8. #4422 - All Claude disabled (recent)
9. #4038 - Non-interactive mode MCP issue
10. #4524 - Sandbox regression
11. #4492 - WebView2 crash
12. #3698 - MCP leak

I'll pick the top 10 most important.

## 重要 PR 进展
Only 1 PR is shown. I should be honest and mention this.

## 功能需求趋势
- MCP ecosystem improvements (OAuth, registry validation, leak handling)
- Anthropic Claude model support in CLI
- Sandbox/permissions policy enforcement (esp. managed settings)
- Windows-specific improvements (WebView2, WSL integration, sandbox paths)
- Session management (persistence, multi-turn, reconnect)
- Skills discovery and personal skill sources
- UI improvements (paste images, queue editor, multi-turn /ask)
- Reasoning effort persistence
- Memory subsystem (store_memory in prerelease)

## 开发者关注点
- MCP server stability and OAuth flow maturity
- Enterprise policy enforcement (managed-settings.json) inconsistencies
- Windows platform reliability gaps
- Session lifecycle robustness across disconnects/restarts
- Model availability parity with VS Code Copilot

Let me write this all out in clear Chinese now.</think>

# GitHub Copilot CLI 社区动态日报
**日期：2026-08-21**

---

## 📌 今日速览

- **v1.0.81-6 预发布版本上线**，引入 `defaultMode` / `defaultPermissionMode` 配置项与 `copilot login --with-token` 标准化登录方式，同时强化 ACP 客户端的子代理与事件订阅能力。
- **MCP（Model Context Protocol）生态仍是社区主战场**：过去 24 小时内更新的 35 条 Issue 中，逾 40% 与 MCP 相关，覆盖 OAuth 元数据校验、注册表误判、子进程泄漏、Token 桥接等多类深水区问题。
- **模型可用性问题集中爆发**，多条已关闭 Issue 反映企业账户下 Claude Sonnet 5 / Opus 5 等启用模型在 CLI 中被误标为禁用，影响范围从 Business 账户延伸到 Enterprise 个人账户。

---

## 🚀 版本发布

### v1.0.81-6（预发布）

**新增（Added）**
- `defaultMode` 与 `defaultPermissionMode` 配置项：用于在新建交互式会话时选择启动模式与权限审批行为，弥补了此前每次手动设置的繁琐。
- `copilot login --with-token`：允许从 stdin 读取认证令牌，便于 CI / 自动化场景下完成登录。

**改进（Improved）**
- ACP（Agent Client Protocol）客户端现在可接收 **子代理 ID**、**原始事件订阅** 以及 **实时会话标题变更**，对集成 Copilot CLI 的第三方 IDE 与自动化平台至关重要。

> 🔗 [v1.0.81-6 Release](https://github.com/github/copilot-cli) — 当前为预发布通道，正式通道仍为 v1.0.80。

---

## 🔥 社区热点 Issues（Top 10）

| # | Issue | 状态 | 热度 | 为什么值得关注 |
|---|---|---|---|---|
| 1 | [#1481](https://github.com/github/copilot-cli/issues/1481) SHIFT+ENTER 应插入换行却直接提交 | CLOSED | 💬28 👍17 | 历史最高评论数之一，反映开发者对 CLI 交互层与主流编辑器习惯不一致的长期不满；已关闭但修复策略值得跟进。 |
| 2 | [#4390](https://github.com/github/copilot-cli/issues/4390) Copilot Business 启用的 Claude Sonnet 5/Opus 5 与 Kimi K3 在 CLI 中缺失 | CLOSED | 💬15 👍7 | 直接触及企业付费用户核心模型可用性，是当前 Business/Enterprise 场景的代表性事件。 |
| 3 | [#4535](https://github.com/github/copilot-cli/issues/4535) `store_memory` 在 v1.0.81 预发布版本失败（"Instance id is required"） | **OPEN** | 💬3 | **唯一 OPEN 且与最新预发布版本强相关**的回归缺陷，影响原生记忆写入链路，建议 1.0.81 正式版前优先修复。 |
| 4 | [#3162](https://github.com/github/copilot-cli/issues/3162) v1.0.42 将已注册的 MCP 自定义服务器误判为策略阻止 | CLOSED | 💬7 👍1 | 揭示 MCP 注册表匹配逻辑的误报链路，跨版本复发风险较高。 |
| 5 | [#4096](https://github.com/github/copilot-cli/issues/4096) 第三方 MCP（OAuth）连接成功但工具在 CLI 会话中不可见 | CLOSED | 💬6 👍2 | OAuth Token 从 App 桥接到 CLI 会话失败的典型案例，影响 Atlassian Remote MCP 等主流第三方。 |
| 6 | [#4503](https://github.com/github/copilot-cli/issues/4503) SDK 服务器未鉴权即报告就绪，导致 Slack 会话创建失败 | CLOSED | 💬5 | 暴露 SDK 启动时缺少 `COPILOT_SDK_AUTH_TOKEN` 的隐性假设，是 Slack/Teams 类集成方的踩坑指南。 |
| 7 | [#4439](https://github.com/github/copilot-cli/issues/4439) CLI 1.0.79 拒绝 GitLab MCP OAuth 元数据（RFC 8414 issuer 不匹配） | CLOSED | 💬5 👍3 | 严格 RFC 8414 校验导致的兼容性问题，影响自托管 GitLab 用户的接入路径。 |
| 8 | [#4422](https://github.com/github/copilot-cli/issues/4422) Enterprise 个人账户下所有 Claude 模型被禁用 | CLOSED | 💬4 👍3 | 与 #4390 互为补充，进一步证实 CLI 与 Web 设置之间存在模型目录同步漂移。 |
| 9 | [#4038](https://github.com/github/copilot-cli/issues/4038) 非交互模式下后接入 MCP 注入空消息，模型回显系统提示 | CLOSED | 💬3 | `-p` 模式下 MCP 连接时序问题，影响脚本化与自动化流水线。 |
| 10 | [#4524](https://github.com/github/copilot-cli/issues/4524) 沙箱启用后无法使用 git | CLOSED | 💬3 | 强化沙箱策略的过度收紧案例，反映安全模型与基础工作流的摩擦点。 |

> 其余受关注但未入榜： [#4492](https://github.com/github/copilot-cli/issues/4492)（桌面端 WebView2 崩溃 22 次）、[#3698](https://github.com/github/copilot-cli/issues/3698)（stdio MCP 子进程泄漏）、[#4349](https://github.com/github/copilot-cli/issues/4349)（Managed Settings 校验过严）。

---

## � 重要 PR 进展

> ⚠️ 过去 24 小时内仓库仅有 **1 条 PR 更新**，远低于历史正常水位，可能预示维护团队集中处理 v1.0.81 预发布版本。

1. **[#4510](https://github.com/github/copilot-cli/pull/4510) Remove GitHub Copilot CLI documentation from README**（OPEN）
   - 作者将 README 中的安装与使用说明移除，反映仓库可能正在将文档外迁至官方站点或独立文档仓库；关注后续是否会引入指向独立文档站的链接。

---

## 📈 功能需求趋势

通过对过去 24 小时 Issue 标签、标题与摘要的聚类，社区关注方向呈现以下六大主线：

1. **MCP 生态成熟化**（最高频）
   - OAuth 元数据合规（RFC 8414）、Token 在 App ↔ CLI 之间的桥接、stdio 进程生命周期管理（避免泄漏）、注册表匹配与策略校验的去误报化。

2. **企业级策略一致性**
   - `managed-settings.json` 中的 `disableBypassPermissionsMode` 等字段在 CLI、桌面端、Web 三端的解析与执行口径不一致（#4349、#4528）。

3. **模型可用性对齐**
   - Claude Sonnet 5 / Opus 5、Kimi K3 等启用模型在 CLI 中不可见或被误判（#4390、#4422），反映出模型目录同步机制存在漏洞。

4. **Windows / WSL 平台可靠性**
   - WebView2 崩溃（#4492）、WSL 沙箱路径（#4546）、会话锚定到 Windows 主机而非 WSL（#4543）、`wta.exe` 路径引号错误（#4540）。

5. **会话生命周期与状态持久化**
   - Remote-SSH 重连后 transcript 丢失（#4529）、Ctrl+Z 后 Recent Session 消失（#4539）、Reasoning Effort 不持久化（#4530）。

6. **UI / 交互增强**
   - 在 freeform 问题输入框粘贴图片（#4544）、队列编辑器增加 Add 与暂停出队（#4541）、`/ask` 支持多轮（#4538）、个人技能路径 `~/.copilot/skills/` 未被发现（#4545）。

---

## �‍💻 开发者关注点（痛点与高频需求）

综合 Issue 评论、点赞与跨条目关联性，开发者社区的三大核心痛点尤为突出：

- **"能跑但难信"——认证与会话可信度**
  OAuth 桥接缺失、SDK 未鉴权即报告 Ready、Managed Settings 校验漂移等问题集中暴露：**对自动化、CI、Slack/Teams 集成方而言，可观测的状态并不等于可信的状态**。社区强烈呼吁增加启动前的鉴权自检日志与会话级别的 token 来源回溯。

- **"能用但不齐"——模型与功能矩阵的跨端一致性**
  Claude 系列在 CLI 与 Web 设置间的目录漂移、ACP 子代理 ID 与原始事件订阅刚刚在 v1.0.81-6 才被补齐、桌面端能力落后于 CLI 等现象表明：**Copilot CLI 与其他端的产品矩阵尚未形成单一事实来源**，开发者不得不在多个 Issue 中互相印证同一类问题。

- **"能装但不稳"——Windows / WSL / 沙箱的边缘场景**
  WebView2 `STATUS_BREAKPOINT`、WSL 中 `wslpath` 缺失、沙箱策略将 `git` 拒之门外、智能终端路径引号断裂……这些 **跨子系统边界的失败模式往往没有清晰归属**，让自托管与企业用户的接入体验充满不确定性。社区期望平台团队建立跨端故障归类的统一标签与公开的事故复盘机制。

> 💡 **给关注 v1.0.81 正式版的开发者**：建议在升级前重点关注 #4535（`store_memory` 回归）与 #4542（工作区 MCP 未在会话内连接）两条 OPEN Issue 的修复进展。

---

*本报告基于 github.com/github/copilot-cli 仓库 2026-08-21 当日公开数据整理。*

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

<think>Let me analyze the GitHub data provided for Kimi Code CLI on 2026-08-21 and generate a Chinese community daily report.

Looking at the data:
- No new releases in the past 24 hours
- 1 updated issue (#2613 - Kimi Memory Plus proposal)
- 1 updated PR (#2614 - docs for plugins security and persistent data)

Both are from the same author @QIANLING-0831 and seem to be related - one is a feature proposal (memory plugin) and the other is documentation for plugins.

The user wants:
1. 今日速览 (Today's Highlights) - 2-3 sentences
2. 版本发布 (Version Releases) - skip if none
3. 社区热点 Issues - pick 10, but only 1 available
4. 重要 PR 进展 - pick 10, but only 1 available
5. 功能需求趋势 (Feature Trend Analysis)
6. 开发者关注点 (Developer Concerns)

Since there are only 1 issue and 1 PR, I need to handle this honestly. I should not fabricate data. I'll note that the activity is limited today and focus on what we have, while still providing analytical insights.

Let me create a professional report based on the actual data available.</think>

# Kimi Code CLI 社区动态日报

**日期：2026-08-21**
**数据来源：GitHub - MoonshotAI/kimi-cli**

---

## 📌 今日速览

今日社区活跃度较低，仓库仅有一条 Issue 和一条 PR 更新，且均由同一作者 `@QIANLING-0831` 提交，内容紧密关联于**插件（Memory）系统**：一方面提出工作区范围的长期记忆插件 `Kimi Memory Plus` 的功能提案（#2613），另一方面提交了插件安全与持久化数据的文档补充（#2614）。无新版本发布，社区整体处于静默迭代期。

---

## 🚀 版本发布

> 过去 24 小时内无新版本发布，本节略过。

---

## 🔥 社区热点 Issues

由于过去 24 小时内仅有 1 条 Issue 更新，以下完整呈现：

### #2613 — 提案：Kimi Memory Plus — 工作区范围的长期记忆插件
- **作者**：@QIANLING-0831
- **链接**：https://github.com/MoonshotAI/kimi-cli/issues/2613
- **状态**：OPEN | 👍: 0 | 💬: 0
- **重要性**：这是首个明确提出"工作区级长期记忆"概念的功能提案，触及 AI Agent 在多任务、多项目场景下的核心痛点——**跨会话上下文保留**。提案指出当前 Kimi Code CLI 已支持将显式记忆工具注册为 stdio MCP server，但仍无法识别仓库自带的实验性 `kimi-...` schema，说明 Kimi 团队正在为"插件化记忆"做准备。
- **社区反应**：提交时间较短（昨日创建、今日更新），尚无评论或点赞，但话题方向命中 AI Agent 领域的长期热点，建议持续关注后续讨论走向。

---

## 🛠️ 重要 PR 进展

### #2614 — docs(plugins): 完善插件安全与持久化数据文档
- **作者**：@QIANLING-0831
- **链接**：https://github.com/MoonshotAI/kimi-cli/pull/2614
- **状态**：OPEN | 👍: 0
- **变更要点**：
  - 说明插件工具以**本地子进程**方式运行，继承当前用户的文件与网络权限
  - 文档化 `inject` 的凭据处理流程，并警告不要记录或提交注入值
  - 澄清**重新安装插件会替换已安装目录**，防止用户误操作导致数据丢失
  - 建议为插件持久化数据使用独立目录
- **意义**：这是 Kimi 插件生态走向成熟的标志——**从"能用"到"安全地用"**。文档安全边界的明确，对吸引企业开发者与处理敏感数据的用户至关重要。

---

## 📈 功能需求趋势

虽然今日仅有一条 Issue，但其指向的趋势非常清晰：

| 趋势方向 | 具体表现 | 优先级判断 |
|---------|---------|-----------|
| **插件化生态** | `Kimi Memory Plus` 提案 + 插件安全文档同步推进 | ⭐⭐⭐⭐⭐ |
| **长期记忆 / 上下文管理** | 显式记忆工具 + stdio MCP server 标准化 | ⭐⭐⭐⭐⭐ |
| **工作区级作用域** | 从"会话级"扩展到"项目级"持久化 | ⭐⭐⭐⭐ |
| **安全与凭据治理** | 文档化 `inject` 行为、子进程权限边界 | ⭐⭐⭐⭐ |
| **数据持久化规范** | 独立目录、重新安装语义、用户数据保护 | ⭐⭐⭐ |

**结论**：Kimi Code CLI 正在从"单次命令行工具"向"可扩展的 AI Agent 平台"演进，**Memory（记忆）**与**Plugin（插件）**是当前两条主线。

---

## 💡 开发者关注点

从今日仅有的两条互动中可以提炼出以下开发者社区的隐性诉求：

1. **🔐 安全透明化**
   开发者越来越关心插件运行时的权限模型——子进程继承用户权限意味着任何插件都可能造成数据泄露，需要清晰的边界声明。#2614 的出现正是对此的系统性回应。

2. **🧠 上下文跨会话延续**
   重复输入项目背景、约定、规范是当前 AI CLI 的最大摩擦之一。`Kimi Memory Plus` 提案直指这一痛点，反映社区对"长期记忆"已成为基础期待的共识。

3. **📦 插件生命周期管理**
   重装即覆盖、安装目录语义不清等问题会让生产环境部署充满不确定性。#2614 在文档层面先于代码层修复这类隐患，体现"文档先行"的工程素养。

4. **🔌 MCP 标准化路径**
   通过 stdio MCP server 注册插件能力，意味着 Kimi CLI 正在对齐 Anthropic 主导的 MCP 生态，便于复用现有工具链。

---

## 📊 数据总结

| 指标 | 数值 |
|------|------|
| 今日 Release | 0 |
| 今日 Issue 更新 | 1 |
| 今日 PR 更新 | 1 |
| 主要贡献者 | @QIANLING-0831（2 条） |
| 社区互动量（👍 + 💬） | 0 |
| 活跃度评级 | ⭐⭐（低活跃，高信号） |

> **分析师注**：今日虽"静"，但两条更新均围绕**插件记忆系统**这一战略方向，质量高于数量。建议持续观察 #2613 后续是否被官方 Label 为 `enhancement` 或 `accepted`，以及 #2614 的 review 与合并节奏。

---

*日报生成时间：2026-08-21 | 数据采集窗口：过去 24 小时*

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

<think>Let me carefully analyze the GitHub data provided and generate a comprehensive daily report for OpenCode community dynamics on 2026-08-21.

Key observations from the data:

**Releases:**
- v1.18.19 released
  - Native OpenAI and Anthropic passthroughs for Cloudflare AI Gateway models
  - Codex rate limits matched to ChatGPT subscription limits
  - Removed built-in Qwen sampling defaults that could send unsupported settings
  - A "Properl..." (truncated, likely a bugfix)

**Top Issues (by comments):**
1. #30086 - High CPU usage in newer versions (48 comments, 24 thumbs) - critical perf issue
2. #4754 - Linux copy/paste behavior (17 comments, 18 thumbs) - long-standing UX issue, now closed
3. #30158 - Terminal button in web UI disappeared since v1.15.12 (12 comments, 14 thumbs)
4. #27474 - TypeError: Failed to fetch (10 comments)
5. #27875 - Stuck at permission granting, Enter key not working (9 comments)
6. #43619 - subagent: required sessionID prevents spawning first child session (9 comments, closed)
7. #20458 - mouse escape sequences garbled after TUI exit (8 comments)
8. #31433 - Cannot set context window limits for local models (4 comments, closed)
9. #35107 - Memory keeps growing until bun process killed (4 comments)
10. #43054 - Models other than hy3-free fail with Forbidden (4 comments)
11. #31074 - Desktop keeps opening old project folder after move (4 comments)
12. #43179 - Primary-agent switches silently keep previous model in V2 (3 comments)
13. #43591 - Opencode v2 crashed while running agent (3 comments)
14. #38869 - free usage exceed (3 comments, closed)
15. #42657 - TUI lag with multi-subagent sessions (3 comments)
16. #43730 - Inappropriate complaint issue (2 comments, closed)
17. #37131 - ID stripping produces invalid item_reference (2 comments, closed)
18. #43051 - Backspace broken in Warp since v0.2026.08.12 (2 comments)
19. #43739 - Option to hide diffs in TUI output (2 comments)
20. #34878 - Backspace key unresponsive in herdr (2 comments)
21. #37103 - Desktop doesn't reference newly created file in chat (2 comments)
22. #43281 - Refreshing provider credentials without restarting CLI (2 comments)
23. #43726 - filesystem_move_file race condition causes data loss (2 comments, closed)
24. #43714 - Responses API Error (2 comments, closed)
25. #34574 - Memory leak in AI SDK Effect runtime (2 comments)
26. #43700 - Store OpenCode root files in single directory (2 comments, closed)
27. #43694 - I write, but there is no reply (2 comments, closed)
28. #43711 - Blank TUI (2 comments, closed)
29. #43699 - TUI crash: remove expects a renderable child (2 comments, closed)
30. #43672 - opencode go套餐使用glm-5.3会报错 (2 comments, closed)

**Top PRs (by activity):**
1. #43724 - fix(core): steer manual compaction by default
2. #43741 - refactor(core): remove dead AI SDK ID stripping
3. #43681 - fix(core): resolve Bedrock AWS profile credentials for V2
4. #32370 - feat(tui): add linux_clipboard_selection config
5. #43738 - fix(app): speed up cold home navigation
6. #42980 - fix(core): reduce Windows server CPU under parallel sessions
7. #43736 - fix(opencode): preserve Cerebras completion limit
8. #43677 - fix(core): send console anthropic api key header
9. #43675 - fix(opencode): answer subagent permissions in run
10. #43650 - fix(core): prevent shell eviction loop
11. #43715 - fix(opencode): preserve Cerebras completion limit (Cerebras contributor)
12. #43735 - fix(client): authenticate PTY websocket connections
13. #43734 - fix(tui): scope prompt history by session
14. #43733 - fix(core): avoid deep cloning session parts (fixes #35107)
15. #43637 - refactor(app): establish session vertical slice
16. #43718 - feat(plugin): expose session selection methods
17. #40125 - feat(opencode): Allow per-MCP-server trust configuration
18. #43728 - fix(tui): align informational dialogs
19. #37994 - feat: replace Intelephense with PHPantom as default PHP LSP
20. #37991 - feat(console): block reported model providers

Now let me identify the trends and themes:

**Functional needs/Themes:**
1. **Performance/CPU/Memory issues** - Multiple issues about high CPU (#30086, #42657), memory leaks (#35107, #34574), slow navigation (#43738 PR)
2. **V2 (OpenCode 2) beta issues** - Several 2.0 specific issues (#43619, #43179, #43591, #43637 PR)
3. **Terminal/Input compatibility** - Backspace issues (#43051, #34878), clipboard (#4754, #32370 PR), mouse sequences (#20458)
4. **Local model support** - Context window limits for local models (#31433)
5. **Cloud provider integrations** - Cloudflare AI Gateway (v1.18.19), Bedrock (#43681), Cerebras (#43736, #43715)
6. **Authentication & credentials** - Anthropic API key header (#43677), refresh credentials (#43281)
7. **Subagent/multi-agent workflows** - Permission granting (#27875), session management (#43619)
8. **Linux desktop experience** - Clipboard, terminal issues
9. **Data integrity** - Race conditions (#43726), memory leaks

Let me now write the report in Chinese. I need to be concise, professional, and include all GitHub links.</think>

# OpenCode 社区动态日报 · 2026-08-21

> 数据来源：github.com/anomalyco/opencode | 统计窗口：过去 24 小时

---

## 📌 今日速览

OpenCode 发布 **v1.18.19**，重点引入 Cloudflare AI Gateway 的 OpenAI / Anthropic 原生直通能力，并收紧 Codex 速率限制与 ChatGPT 订阅对齐；与此同时，**CPU/内存性能问题**持续发酵（#30086 评论数已达 48 条，48 👍），多个 2.0 Beta 子代理（subagent）相关缺陷被快速合入修复，社区正集中攻坚「并行会话下的资源消耗」与「V2 架构稳定性」。

---

## 🚀 版本发布

### v1.18.19

**Core 改进：**
- 为 Cloudflare AI Gateway 模型新增 **OpenAI / Anthropic 原生直通**（passthrough）支持（[#release](https://github.com/anomalyco/opencode/releases)）
- Codex 速率限制与 ChatGPT 订阅限额更贴近（贡献者 @GameOn223）

**Bug 修复：**
- 移除可能导致 Qwen 发送不支持参数的**内置采样默认值**
- 修正若干发布说明截断未展示的修复项（"Properl..."）

---

## 🔥 社区热点 Issues

| # | Issue | 热度 | 关键意义 |
|---|---|---|---|
| 1 | [#30086](https://github.com/anomalyco/opencode/issues/30086) **新版本 CPU 占用飙升** | 48 评论 / 24 👍 | 7 天前开始，3 个并行会话即出现卡顿；性能回归问题，社区密切关注 |
| 2 | [#4754](https://github.com/anomalyco/opencode/issues/4754) **Linux 复制/粘贴行为** | 17 评论 / 18 👍 | 长达 9 个月的 Linux 双缓冲痛点，本次关闭（[CLS]），将由 #32370 引入 `linux_clipboard_selection` 配置 |
| 3 | [#30158](https://github.com/anomalyco/opencode/issues/30158) **Web UI 终端按钮消失（v1.15.12+）** | 12 评论 / 14 👍 | 自 v1.15.12 起 Web 终端按钮神秘消失，降级可恢复，影响 Web 用户 |
| 4 | [#27474](https://github.com/anomalyco/opencode/issues/27474) **TypeError: Failed to fetch** | 10 评论 | 点击 explore/智能体未跳转子 agent 时报错，影响中文用户较多 |
| 5 | [#27875](https://github.com/anomalyco/opencode/issues/27875) **权限弹窗 Enter 键失灵** | 9 评论 | 子代理循环无效工具调用时无法用 Enter 确认，Ctrl+Enter 仅能换行，用户被卡死 |
| 6 | [#43619](https://github.com/anomalyco/opencode/issues/43619) **subagent 首子会话无法生成** | 9 评论 / [CLS] | V2 文档说省略 sessionID 即可，但 schema 强制要求 → 直接阻断子代理委派工作流 |
| 7 | [#20458](https://github.com/anomalyco/opencode/issues/20458) **TUI 退出后鼠标转义序列乱码** | 8 评论 / 5 👍 | 退出 TUI 后终端持续输出 `35;89;19M...` 乱码序列 |
| 8 | [#35107](https://github.com/anomalyco/opencode/issues/35107) **会话内存持续增长至进程被 kill** | 4 评论 | `updatePart` 中 `structuredClone(part)` 导致 200 个会话产生 ~93K PartUpdated 事件，堆压力巨大 |
| 9 | [#43054](https://github.com/anomalyco/opencode/issues/43054) **非免费模型返回 `Forbidden: {"model":"big-pickle"}`** | 4 评论 | 除 hy3-free / deepseek-flash-free 外所有模型被拒绝，疑似上游网关策略变更 |
| 10 | [#42657](https://github.com/anomalyco/opencode/issues/42657) **多子代理 TUI 卡顿（97% CPU）** | 3 评论 | 2-4 个并发子代理时 TUI 输入延迟 1-3 秒，渲染线程满载 |

---

## 🛠 重要 PR 进展

| # | PR | 内容 |
|---|---|---|
| 1 | [#43724](https://github.com/anomalyco/opencode/pull/43724) **`/compact` 手动压缩按边界流转** | 修复：手动 `/compact` 在活动 turn 中可立即在下一步边界执行（默认改为 `steer`），不再静默等待整 turn |
| 2 | [#43741](https://github.com/anomalyco/opencode/pull/43741) **移除 AI SDK ID 剥离的死代码** | 删除 OpenAI/Azure/Bedrock Mantle AI SDK 的 request-body rewrite（已转为原生 provider），同步修复 #37131 |
| 3 | [#43681](https://github.com/anomalyco/opencode/pull/43681) **V2 Bedrock AWS profile 凭证解析** | 由 One Medical 团队提交，修复 V2 中 AWS profile 凭据加载，已本地稳定运行 1.5 周 |
| 4 | [#32370](https://github.com/anomalyco/opencode/pull/32370) **`linux_clipboard_selection` 配置** | 新增 Linux 主选择缓冲区（middle-click）支持，关闭 #43176，并解决 #4754 |
| 5 | [#43738](https://github.com/anomalyco/opencode/pull/43738) **冷启动 Home 导航加速** | 修复 Desktop 首次 Home 点击 495-639ms 的延迟（warm 86ms），通过 Home 查询缓存优化（[CLS]） |
| 6 | [#42980](https://github.com/anomalyco/opencode/pull/42980) **Windows 并行会话 CPU 占用降低** | 四 SSE 订阅吞吐从 77,537 → 145,942 Events/s（+88%），CPU 降低 48.4%（[CLS]） |
| 7 | [#43736](https://github.com/anomalyco/opencode/pull/43736) **保留 Cerebras completion limit** | 新增 Cerebras 内置插件，当指定 `max_completion_tokens` 时抑制通用输出上限（[CLS]） |
| 8 | [#43677](https://github.com/anomalyco/opencode/pull/43677) **Console Anthropic 发送 x-api-key 头** | OpenCode Console Bearer 凭据在 Anthropic Messages 请求中转译为 `x-api-key`，并加入回归测试（[CLS]） |
| 9 | [#43675](https://github.com/anomalyco/opencode/pull/43675) **Run 中子代理权限自动应答** | 非交互 run 会话树内自动批准/拒绝权限请求，新增子进程测试覆盖（[CLS]） |
| 10 | [#43650](https://github.com/anomalyco/opencode/pull/43650) **防止 shell 驱逐死循环** | 从退出顺序队列中清理已失效的 shell ID，避免 retention 驱逐在已移除的运行 shell 上死循环（[CLS]） |

> 补充亮点：**[#43733](https://github.com/anomalyco/opencode/pull/43733)** 修复了 #35107 的 `structuredClone` 深拷贝问题；**[#43734](https://github.com/anomalyco/opencode/pull/43734)** 给 prompt 历史按 session 作用域隔离；**[#40125](https://github.com/anomalyco/opencode/pull/40125)** 引入 per-MCP-server 信任配置（指纹固定）。

---

## 📈 功能需求趋势

从过去 24 小时 50 条 Issue 中提炼出以下社区关注方向：

1. **性能与稳定性（占比最高）** — 高 CPU、内存泄漏、会话进程被杀等问题成为首要痛点，尤其在多子代理并行场景下，**#30086 / #35107 / #34574 / #42657** 形成共识需求。
2. **V2 (opencode2) Beta 适配** — 多个 [2.0] 标记 Issue 集中在子代理 sessionID、agent 切换 model 不更新、运行崩溃等问题，V2 即将进入可用性攻坚阶段。
3. **终端/TUI 兼容性** — Backspace 在 Warp / herdr 下失灵（#43051 / #34878）、Linux 剪贴板、鼠标转义序列（#20458）等终端交互问题持续高频反馈。
4. **本地 & 边缘模型支持** — 自定义上下文窗口（#31433）、本地 provider 上下文限制默认为 0 等问题被多次提出。
5. **多 Provider 集成扩展** — Cloudflare AI Gateway 直通（v1.18.19 已落地）、Bedrock（#43681）、Cerebras（#43736/#43715）、MCP server 信任（#40125）形成企业接入主线。
6. **凭据与认证运维** — 提供商凭据热刷新（#43281）、Console Anthropic 头转换（#43677）等需求反映生产环境部署诉求。
7. **数据安全/隐私** — `filesystem_move_file` race 引发数据丢失（#43726 已 CLS）警示工具可靠性需求。

---

## 💡 开发者关注点

- **痛点 #1：资源消耗失控** — 并行子代理、多会话、长时间 stream 让 Bun 进程内存从百 MB 涨至 GB 级直至 OOM 杀掉。`structuredClone` 深拷贝、`updatePart` 高频调用是主要怀疑点（#35107）。
- **痛点 #2：V2 切换体验割裂** — 切换 primary agent 仅改 prompt/权限，**session model 与 variant 仍沿用旧配置**（#43179），用户对"静默行为"反馈强烈。
- **痛点 #3：终端交互碎片化** — Warp 的 KKP 编码变更让 Backspace 发送 `\x1b[127u`（CSI-u）而 OpenCode 未处理（#43051），Windows ConPTY、herdr 多路复用器也存在同类问题。
- **痛点 #4：中文用户体验** — Go 套餐（#43672）、付费与免费模型质量差异、转发链路不稳定等抱怨（#43730、#38869）凸显本地化与计费透明度需求。
- **痛点 #5：工具调用可靠性** — `filesystem_move_file` 在 source==dest 时存在 3/10 概率数据丢失的竞态（#43726），提示工具语义需要更严格的不变量校验。
- **高频需求** — 凭据热刷新、Provider 凭证缓存优化、子代理权限边界、Home 冷启动性能、TUI 弹窗对齐等小但高频的 UX/工程优化项被持续提出并快速合入（#43738、#43728、#43677、#43675）。

---

*日报生成完毕。如需对某一 Issue / PR 进行深度剖析或跟踪特定方向，欢迎追加需求。*

</details>

<details>
<summary><strong>jcode</strong> — <a href="https://github.com/1jehuang/jcode">1jehuang/jcode</a></summary>

<think>The user wants me to generate a Chinese daily report for the jcode community based on GitHub data from 2026-08-21. Let me analyze the data carefully.

Key observations:
1. No new releases in the past 24 hours
2. 22 issues updated in the past 24 hours
3. Only 1 PR (#992) updated in the past 24 hours

Let me categorize the issues by importance and topic:

**Critical/High Priority Issues:**
- #1013 - /productivity command completes on disk but TUI drops result (high priority, reproducible)
- #1006 - Swarm agent hardcoded anthropic-fable-5 cost $11 over 2 minutes (high priority, UX issue)
- #1009 - Alt+Y and Alt+I keys not working (default chord broken)

**Notable Bugs:**
- #1014 - open/reveal suppressed in shared server session
- #1017 - /keys reports false conflict (CLOSED)
- #1004 - Startup writes raw OSC 11 bytes
- #1021 - Can't paste API key when login
- #1022 - Periodic pings to anthropic/claude-sonnet-4
- #1020 - Swarm worker uses coordinator endpoint instead of provider_key override
- #1003 - Windows overload-killed turns, Unix-only tests
- #1007 - Release commits not merged into master

**Feature Requests:**
- #1019 - Deferred MCP tool exposure
- #1018 - Todo side panel fills screen
- #1016 - Clear context without leaving swarm
- #1015 - side_panel can't load local images
- #1011 - xai-oauth for SuperGrok
- #1010 - Make installable with mise
- #1008 - Auto retry for HTTP 422 errors
- #1005 - Show worker model in swarm strip
- #60 - Symbolic compression to save tokens (large enhancement)

**UX Issues:**
- #1012 - /subagent-model picker blocks for seconds
- #1004 - Startup OSC 11 garbage
- #1018 - Todo panel overflow

**Performance:**
- #1012 - Subagent model picker slow with large catalogs
- #1019 - MCP tools causing request bloat

Let me craft the response now.

For the PR section, there's only one PR (#992) so I'll focus on that.

Let me write the report in Chinese, professional and concise, suitable for technical readers.</think>

# jcode 社区动态日报 · 2026-08-21

## 📌 今日速览

今日 jcode 仓库无新版本发布，社区讨论热度集中在 **三大方向**：① Swarm 多 Agent 模式的多处缺陷（高额意外计费、Worker 路由错误、上下文/任务隔离）；② 终端 UI 的交互体验问题（按键失效、面板溢出、模型选择器卡顿）；③ 性能与成本优化（MCP 工具暴露膨胀、符号化压缩降 Token）。新提交 PR #992 一次性修复了 7 个可复现的 triage 问题，反映维护者正在集中清理 issue backlog。

---

## 🚀 版本发布

> 过去 24 小时内无新版本发布。可关注的最新已发布版本：`v0.78.0` / `v0.78.1`（社区对 master 是否合并了这些提交存在疑问，见 [#1007](https://github.com/1jehuang/jcode/issues/1007)）。

---

## 🔥 社区热点 Issues（Top 10）

| # | 标题 | 重要性 | 社区反应 |
|---|------|--------|---------|
| [#1006](https://github.com/1jehuang/jcode/issues/1006) | **[Bug · High]** Swarm 测试 2 分钟消耗 $11，因硬编码 `anthropic-fable-5` | ⭐⭐⭐⭐⭐ | 新用户强烈不满，硬编码昂贵模型是"踩坑"级问题，已标 high priority |
| [#60](https://github.com/1jehuang/jcode/issues/60) | **[Enhancement]** llm-interlang 风格的符号压缩层大幅降低 Token | ⭐⭐⭐⭐⭐ | 提交者为外部贡献者，已升级到 `v0.11.0` 二进制，对成本敏感用户价值极大 |
| [#1013](https://github.com/1jehuang/jcode/issues/1013) | **[Bug · High]** `/productivity` 在远端 TUI 静默丢失结果（PNG 已落盘） | ⭐⭐⭐⭐ | Bug 可稳定复现，影响核心生产力命令，疑似 `BusEvent` 通道问题 |
| [#1022](https://github.com/1jehuang/jcode/issues/1022) | **未配置 anthropic 时仍周期性 ping `claude-sonnet-4`** | ⭐⭐⭐⭐ | 涉及默认行为与隐私/计费清晰度，LiteLLM 400 错误佐证 |
| [#1023](https://github.com/1jehuang/jcode/issues/1023) | **安全：硬化 fallback 邮件回复与审批解析** | ⭐⭐⭐⭐ | 今日新增安全问题，呼吁优先修复 |
| [#1019](https://github.com/1jehuang/jcode/issues/1019) | **Feature：延迟暴露 MCP 工具 (`--mcp-tools=deferred`)** | ⭐⭐⭐⭐ | 单 MCP 94 工具导致请求体膨胀，作者附详细 cost 拆解，是高 ROI 优化 |
| [#1012](https://github.com/1jehuang/jcode/issues/1012) | **Bug：`/subagent-model` 在大模型目录下降级到秒级响应** | ⭐⭐⭐⭐ | UX 不可用级 bug，社区已被多个用户遇到 |
| [#1014](https://github.com/1jehuang/jcode/issues/1014) | **Bug：`open`/`reveal` 在共享服务器会话中被错误压制** | ⭐⭐⭐ | 生产环境正确性问题，`NO_BROWSER` 标志误判 |
| [#1009](https://github.com/1jehuang/jcode/issues/1009) | **Bug：macOS 默认 `Alt+Y`/`Alt+I` 失效，输入裸字母** | ⭐⭐⭐ | 默认键位即坏，新用户首屏体验受损 |
| [#1007](https://github.com/1jehuang/jcode/issues/1007) | **Question：`v0.78.0/v0.78.1` 的提交未合入 master** | ⭐⭐⭐ | 触及发布流程透明度，与 #1006 的计费问题可能同源 |

> 其余更新但关注度稍低的包括 [#1020](https://github.com/1jehuang/jcode/issues/1020)（Swarm worker 路由回 coordinator 端点）、[#1018](https://github.com/1jehuang/jcode/issues/1018)（Todo 侧栏占满屏幕）、[#1015](https://github.com/1jehuang/jcode/issues/1015)（`side_panel` 无法预览本地图片）、[#1004](https://github.com/1jehuang/jcode/issues/1004)（启动写裸 OSC 11 查询字节污染终端）、[#1003](https://github.com/1jehuang/jcode/issues/1003)（Windows overload 测试缺失，分支已备好等待 PR）。

---

## 🛠 重要 PR 进展

| PR | 摘要 |
|----|------|
| [#992](https://github.com/1jehuang/jcode/pull/992) | **fix: 一次性解决 7 个可复现 triage 问题** — 保留非空 swarm `prompt`、可见启动失败时回退 headless ambient、内联 diff 预览显示文件路径与多文件边界、关闭 one-shot session 并清理活跃 PID 标记等。维护者集中清理 issue backlog，建议 review 时重点关注 swarm 语义是否变化。 |

> 由于过去 24 小时仅此一条 PR 活跃更新，社区合并节奏较慢可能与 #1007 揭示的 release↔master 同步问题相关。

---

## 📈 功能需求趋势

按主题提炼今日社区诉求：

1. **🐝 Swarm 多 Agent 体验完善**（热度最高）
   - 防止误用昂贵模型（#1006）
   - Worker 正确路由到 `provider_key` 指定端点（#1020）
   - 不离开 swarm 即可清上下文（#1016）
   - Live strip 显示 worker 模型名（#1005）

2. **⚡ 性能 / Token / 成本优化**
   - 符号化压缩重复上下文（#60）
   - MCP 工具按需延迟暴露（#1019）
   - HTTP 422 token-limit 自动重试（#1008）
   - 模型选择器需虚拟化/分页（#1012）

3. **🖥️ TUI / 终端体验打磨**
   - 按键 chord 在 macOS/SSH 下行为正确（#1009、#1021）
   - 侧栏布局与图像预览能力（#1015、#1018）
   - 启动期不污染终端的 OSC 11 查询（#1004）

4. **🔌 集成与扩展**
   - `xai-oauth`/SuperGrok 接入（#1011）
   - `mise` 一键安装（#1010）
   - 多 provider 路由配置清晰化

5. **🛡️ 安全与默认行为**
   - 环境邮件回退硬化（#1023）
   - 默认配置应遵循"最小权限/最小成本"原则（#1006、#1022）

---

## 💡 开发者关注点

从今日讨论可归纳出以下 **高频痛点**：

- **"默认即合理"原则被破坏**：硬编码昂贵模型（#1006）、未配置却主动 ping Anthropic（#1022）——开发者普遍期待 default 与当前 provider 严格一致。
- **大模型目录下的 UI 可用性退化**：`/subagent-model`、`/todos`、MCP 工具列表在数据量增长后未做虚拟化或懒加载（#1012、#1018、#1019）。
- **远端/共享服务器会话边界模糊**：`NO_BROWSER` 误判、`/productivity` 静默丢结果、Swarm worker 路由串扰（#1014、#1013、#1020），提示环境标志传递链路需要审计。
- **发布↔master 同步缺乏透明度**（#1007）：社区已无法靠 release tag 判断 bug 是否修复，呼吁发版流程文档化或自动化。
- **安装与跨平台细节**：Windows 测试缺失（#1003）、Linux 安装命名不一致（#1010）、macOS 按键 chord 与 SSH 粘贴兼容性（#1009、#1021），提示平台矩阵仍是非核心但持续累积的债务。

---

*日报基于 2026-08-21 GitHub 公开数据整理；社区互动可能仍在持续发酵，欢迎维护者针对以上热点议题置顶/合并以稳定预期。*

</details>

<details>
<summary><strong>pi</strong> — <a href="https://github.com/earendil-works/pi">earendil-works/pi</a></summary>

<think>The user wants me to generate a daily report for the Pi community based on GitHub data from 2026-08-21. Let me analyze the data carefully and produce a structured Chinese report.

Let me organize the information:

**Releases (past 24 hours):** None

**Issues (past 24 hours, top 30 by comments):**
1. #7547 - Windows support discussion (36 comments, 1 👍)
2. #6879 - Auto-compaction not triggering (18 comments, 17 👍)
3. #5023 - Terminal scroll bug (17 comments, 2 👍) - CLOSED
4. #3442 - WebSocket transport for openai-responses (9 comments) - CLOSED
5. #6300 - Windows TUI input redraw bug (8 comments) - OPEN
6. #8157 - Migrate grok-mermaid to lovely-mermaid (7 comments) - OPEN
7. #6093 - Scoped Anthropic API keys (6 comments) - CLOSED
8. #5340 - /config and /exit aliases (5 comments) - CLOSED
9. #4538 - /exit alias (5 comments) - CLOSED
10. #6996 - Gemini 3.x thought_signature bug (5 comments) - OPEN
11. #8344 - per-tool output expansion (4 comments) - CLOSED
12. #8126 - OpenAI Daybreak Blue alias (3 comments) - CLOSED
13. #8409 - Regression aborted turns (3 comments) - CLOSED
14. #4427 - theme_changed extension event (3 comments) - CLOSED
15. #5161 - /exit and /bye aliases (3 comments) - CLOSED
16. #5863 - add /exit command (3 comments) - CLOSED
17. #6193 - /exit alias (3 comments) - CLOSED
18. #8133 - Per-model compaction settings (3 comments, 3 👍) - OPEN
19. #8348 - No inter session cache on openai (3 comments) - CLOSED
20. #8370 - fullscreenWheelScrollLines setting (2 comments) - CLOSED
21. #8417 - SSH passphrase prompt (2 comments) - CLOSED
22. #8390 - agent_settled extension control (2 comments) - CLOSED
23. #6995 - TUI overlays behind kitty images (2 comments) - CLOSED
24. #8404 - Add Umans AI provider (2 comments) - CLOSED
25. #8081 - Unknown slash commands sent to model (2 comments) - CLOSED
26. #8396 - Auto-retry leaves superseded errors (2 comments) - CLOSED
27. #7696 - Extension tool-name conflicts fatal (2 comments) - CLOSED
28. #7774 - mcp 2.0 (2 comments) - CLOSED
29. #8419 - Ctrl+D escape sequence leak (1 comment) - CLOSED
30. #8418 - bash tool Took/Elapsed inflated (1 comment) - CLOSED

**Pull Requests (past 24 hours, 16 total):**
1. #4537 - Exit alias - CLOSED
2. #8416 - fix triggerTurn-false custom messages - CLOSED
3. #8118 - requiresNonNullAssistantContent compat flag - OPEN
4. #8232 - dev branch (DONT MERGE) - OPEN
5. #8405 - kimi-coding thinking signatures - CLOSED
6. #8407 - preserve logical lines in copy - CLOSED
7. #8402 - Server tool - CLOSED
8. #8363 - prevent wrapped table link color leaks - CLOSED
9. #5268 - render hardware cursor - CLOSED
10. #8302 - Amazon bedrock mantle - OPEN
11. #8399 - settings-selector searchable default - CLOSED
12. #5160 - /exit and /bye commands - CLOSED
13. #8398 - color values and theme styling - OPEN
14. #8395 - prevent TUI crash on large diffs - CLOSED
15. #8383 - LOW to disable thinking on gemini-3.7 - OPEN
16. #8384 - security surfacemd manifest - CLOSED

Now let me think about the themes:

1. **Windows support** - Major theme with #7547 (big discussion), #6300 (TUI bug)
2. **/exit alias** - Many duplicate issues all being addressed (#5340, #4538, #5161, #5863, #6193, #8081, #4537, #5160)
3. **Auto-compaction bugs** - #6879 (highly upvoted), #8133 (per-model compaction)
4. **Provider-specific bugs** - Gemini (#6996, #8383), Kimi-coding (#8405), Bedrock (#8302)
5. **TUI rendering bugs** - Multiple issues (#5023, #6300, #6995, #8344, #8395, #8407)
6. **Extension system improvements** - #7696, #8390, #4427
7. **New providers/models** - Umans AI (#8404), Bedrock Mantle (#8302), Daybreak (#8126)

Let me select the top 10 issues and PRs:

Top 10 Issues:
1. #7547 - Windows support (36 comments, most active)
2. #6879 - Auto-compaction (17 👍, critical bug)
3. #5023 - Terminal scroll (17 comments, common bug)
4. #6996 - Gemini 3.x bug (provider compatibility)
5. #8157 - Mermaid migration (refactor)
6. #6300 - Windows TUI redraw (Windows support)
7. #8133 - Per-model compaction (3 👍, popular feature request)
8. #3442 - WebSocket transport
9. #8081 - Unknown slash commands sent to model (important UX)
10. #8396 - Auto-retry errors persistence

For the /exit cluster, I'll mention this as a thematic trend rather than listing all of them.

Top 10 PRs:
1. #8398 - Color values and theme styling (mitsuhiko, big refactor)
2. #8302 - Amazon Bedrock Mantle (provider support)
3. #8405 - kimi-coding signatures (bug fix)
4. #8395 - TUI crash on large diffs (critical bug fix)
5. #8407 - preserve logical lines in copy (TUI fix)
6. #8118 - requiresNonNullAssistantContent compat flag
7. #8383 - Gemini thinking disable fix
8. #8399 - settings-selector searchable default (UX)
9. #8416 - triggerTurn-false custom messages fix
10. #4537 - /exit alias (long-pending feature)

Let me write the report now.</think>

# Pi 社区动态日报 · 2026-08-21

> 数据来源：GitHub `earendil-works/pi`（Issues & PRs，过去 24 小时更新）

---

## 📌 今日速览

过去 24 小时内 Pi 仓库无新版本发布，但社区活跃度集中在三件事：**Windows 平台支持的优先级讨论**（#7547，36 条评论持续发酵）、**自动压缩（auto-compaction）机制的 Bug 与改进需求**（#6879 仍有 17 个 👍，相关 #8133 新增），以及 **`/exit` 别名的"众包合并"**——过去几天密集提交的重复 Issue 集中关闭，并由多个对应 PR 落地。此外，`mitsuhiko` 本人提交的重大 TUI 主题系统重构 PR #8398 是值得长期关注的信号。

---

## 🚀 版本发布

无（过去 24 小时未发布新版本）。

---

## 🔥 社区热点 Issues（Top 10）

### 1. [#7547](https://github.com/earendil-works/pi/issues/7547) — Windows 平台现状与优先级征集
**状态**：OPEN | 💬 36 | 👍 1
维护者 `@petrroll` 发起的"Windows 体验摸底"讨论贴。Pi 在 Windows 上的运行方式过于多样（cmd / PowerShell / WSL / Windows Terminal / Git Bash），维护团队希望集中收敛，明确核心修复路径 vs 委托扩展承担。这是当前社区讨论量最高的 Issue。

### 2. [#6879](https://github.com/earendil-works/pi/issues/6879) — 自动压缩在 100% 上下文后不触发，直至 API 报错
**状态**：OPEN | 💬 18 | 👍 17 ⭐
报告人在 gpt-5.6-sol 会话中出现 373k tokens 才触发的"溢出后才压缩"现象。**这是当前 Issue 列表中获得 👍 最高的开放 Bug**，反映出长会话压缩机制的鲁棒性问题直接关系到 Token 成本。

### 3. [#5023](https://github.com/earendil-works/pi/issues/5023) — 终端无理由跳转到开头
**状态**：CLOSED | 💬 17 | 👍 2
高频报告的 TUI 渲染闪烁 Bug，已关闭。表明 TUI 在长流式输出下的滚动状态管理得到修复。

### 4. [#6996](https://github.com/earendil-works/pi/issues/6996) — Gemini 3.x 因缺失 `thought_signature` 在工具调用后失败
**状态**：OPEN | 💬 5
Gemini 3.5/3.6 Flash 在 tool result 回传时丢失 `thought_signature`，导致整个 session 不可用。直接影响了 Google 最新模型的可用性。

### 5. [#8157](https://github.com/earendil-works/pi/issues/8157) — 将 grok-mermaid 迁移到 lovely-mermaid
**状态**：OPEN | 💬 7 | 👍 1
`@xl0` 提议用修复了大量边界情况的 lovely-mermaid 替换当前 1:1 移植自 grok 的版本，提升 Mermaid 渲染的鲁棒性。

### 6. [#6300](https://github.com/earendil-works/pi/issues/6300) — Windows 下 TUI 输入每按一键都重绘（每个字符独占一行）
**状态**：OPEN | 💬 8
Windows 10 / cmd.exe + Windows Terminal 复现，影响 Pi 在 Windows 上的基本可用性，与 #7547 主题高度相关。

### 7. [#8133](https://github.com/earendil-works/pi/issues/8133) — 按模型分别配置压缩参数
**状态**：OPEN | 💬 3 | 👍 3
提出 `compaction.profiles` 配置，按 model id 覆盖全局 `reserveTokens` 等参数。与 #6879 共同反映出社区对**精细化压缩控制**的强烈需求。

### 8. [#3442](https://github.com/earendil-works/pi/issues/3442) — 为 `openai-responses` 增加 WebSocket 传输
**状态**：CLOSED | 💬 9
`/v1/responses` 此前仅支持 HTTP/SSE，不识别 `transport: "websocket"`。已关闭，说明能力已交付。

### 9. [#8081](https://github.com/earendil-works/pi/issues/8081) — 未知斜杠命令（如 `/exit`）被静默发送给模型
**状态**：CLOSED | 💬 2
用户敲 `/exit` 时被当成普通消息提交，浪费一次模型调用并污染 transcript。已与 `/exit` 别名 PR 一并处理。

### 10. [#8396](https://github.com/earendil-works/pi/issues/8396) — 自动重试导致错误消息持久化在活跃会话分支中
**状态**：CLOSED | 💬 2 | 标签：`bug, untriaged`
`AgentSession` 在重试前持久化了带错误的 assistant 消息，`_prepareRetry()` 仅清理内存，磁盘 SessionManager leaf 仍保留错误记录。影响会话重放正确性。

> 💡 **未进 Top 10 但值得注意**：`#6093`（scoped Anthropic API key header 推断）、`#4427`（`theme_changed` 扩展事件）、`#8348`（OpenAI fork 会话无 prompt cache 命中）均已关闭。

---

## 🛠️ 重要 PR 进展（Top 10）

### 1. [#8398](https://github.com/earendil-works/pi/pull/8398) — 主题与 TUI 颜色系统重构 ⭐
**作者**：`@mitsuhiko` | 状态：OPEN
核心维护者亲自下场。**直接暴露颜色值并重构主题支持**，保留旧 API 兼容；同时为非 Terminal UI（如未来可能的 GUI/IDE 嵌入）铺路。这是近一周最具战略意义的 PR。

### 2. [#8302](https://github.com/earendil-works/pi/pull/8302) — Amazon Bedrock Mantle 新 API 支持
**作者**：`@cristinaponcela` | 状态：OPEN
Bedrock 上 GPT-5.x 等新模型走 Mantle 而非原有 Converse，原有路径会 `Validation error`。WIP 阶段，待 API key 权限到位即可 e2e。

### 3. [#8405](https://github.com/earendil-works/pi/pull/8405) — 修复 kimi-coding 推理签名非 base64url
**作者**：`@ytspar` | 状态：CLOSED
FD-2120 任务。kimi-coding 推理模型第二轮起 400 报错，原因是 signature 不是合法 base64url。统一规范化解决。

### 4. [#8395](https://github.com/earendil-works/pi/pull/8395) — 修复大 diff 导致 TUI 崩溃
**作者**：`@Battleplus` | 状态：CLOSED
解决 #8036：edit 工具渲染 ~14.5MB diff 时 `lines.push(...contentLines)` 超过 V8 调用栈上限。改为循环 push，救场大文件编辑场景。

### 5. [#8407](https://github.com/earendil-works/pi/pull/8407) — 复制软换行文本时保留逻辑行
**作者**：`@smrnjeet222` | 状态：CLOSED
Fullscreen TUI 模式下用 `lines.join("\n")` 把 viewport 软换行变成硬换行，破坏段落、URL、列表。修复后保留逻辑行边界。

### 6. [#8118](https://github.com/earendil-works/pi/pull/8118) — 新增 `requiresNonNullAssistantContent` 兼容开关
**作者**：`@gaoyk19` | 状态：OPEN
部分 OpenAI 兼容网关拒绝 content 为 null 的 assistant 消息，要求 `""`。原 `requiresAssistantAfterToolResult` 副作用太大，新开关更精准。

### 7. [#8383](https://github.com/earendil-works/pi/pull/8383) — Gemini 3.7 Flash 关闭思考时发送 `LOW` 而非 `MINIMAL`
**作者**：`@jingtao-wisdomgraph` | 状态：OPEN
`MINIMAL` 在 gemini-3.7-flash 上不被接受，改为 `LOW` 即可关闭思考。微小但关键的兼容性修复。

### 8. [#8399](https://github.com/earendil-works/pi/pull/8399) — `/model` 与 `/thinking` 选择器支持搜索与默认项标记
**作者**：`@cristinaponcela` | 状态：CLOSED
配合 Ctrl+S 持久化快捷键，在选择器中明示"默认"项并使其可被搜索。

### 9. [#8416](https://github.com/earendil-works/pi/pull/8416) — `triggerTurn:false` 自定义消息等到工具批次结束再追加
**作者**：`@BetterAndBetterII` | 状态：CLOSED
避免自定义消息落在 `toolCall` 与 `toolResult` 之间，触发严格 provider 的下一轮拒绝。

### 10. [#4537](https://github.com/earendil-works/pi/pull/4537) — `/exit` 别名
**作者**：`@AttAditya` | 状态：CLOSED
与 #5160、#5161、#5863、#6193、#8081 等同步关闭——长达数月的"/exit 缺失导致误发给模型浪费 token"诉求终于落地。

> 另有 **#8363**（wrapped table 链接颜色泄漏修复）、**#5268**（硬件光标渲染，焦点失焦时变空心）、**#8404**（Umans AI 内置 provider 贡献）值得关注。

---

## 📈 功能需求趋势

将过去 24 小时内更新（含新增与历史）的 50 条 Issue 归类，社区关注焦点集中在以下方向：

| 方向 | 代表性 Issue | 热度信号 |
|---|---|---|
| **Windows 平台一等公民支持** | #7547, #6300 | 讨论量最大，维护者主动召集反馈 |
| **压缩机制精细化与鲁棒性** | #6879（17 👍）, #8133（3 👍） | 高 👍，直接关联成本与稳定性 |
| **斜杠命令 UX 统一** | #5340, #4538, #5161, #5863, #6193, #8081 | 多人独立提相同诉求，"muscle memory"被反复提及 |
| **新模型 / Provider 适配** | #6996（Gemini 3.x）, #8126（OpenAI Daybreak）, #8404（Umans AI）, #8302（Bedrock Mantle） | 模型生态快速迭代的下游压力 |
| **TUI 渲染细节打磨** | #5023, #6995, #8344, #8370, #8395, #8407, #8363 | 长会话/全屏模式下的视觉与交互边界 |
| **扩展系统能力扩展** | #4427（`theme_changed`）, #7696（tool 名冲突降级）, #8390（`agent_settled` 控制） | 第三方扩展作者推动 API 演进 |
| **缓存与 Fork 性能** | #8348（OpenAI fork 无 cache） | 已有用户开始关注 fork 工作流的 token 经济性 |

---

## 👨‍💻 开发者关注点

从 24 小时窗口的高频反馈中，可以归纳出几个明显痛点：

1. **"误发消息即烧钱"** —— 多名新用户报告从 Claude Code / Codex / opencode 切换过来时，`/exit`、`/bye`、`/config` 之类的肌肉记忆命令会被当成普通对话发给模型，每次消耗若干 token 并污染 transcript。这一诉求被十余人重复提交，**是当前最一致、最强的社区共识**。

2. **Windows 上的"能用但不好用"** —— TUI 重绘（#6300）、终端闪烁跳屏

</details>

---
*本日报由 [Big Model Radar](https://github.com/96loveslife/big_model_radar) 自动生成。*
# AI CLI 工具社区动态日报 2026-07-04

> 生成时间: 2026-07-04 03:39 UTC | 覆盖工具: 7 个

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

<think>The user wants me to synthesize the seven daily reports into a horizontal comparative analysis. Let me carefully extract the key data from each report and organize them according to the six requested sections.

Let me start by gathering the raw data:

**Claude Code:**
- 50 issues updated, 7 PRs updated
- Releases: v2.1.200 and v2.1.201
- Key themes: v2.1.200 behavior changes (AskUserQuestion no auto-continue, default permission mode changed to Manual); security (credential leakage, session cross-account leak); Fable 5/Sonnet 5 model issues

**OpenAI Codex:**
- No releases in 24h
- Key themes: GPT-5.5 / Responses-Lite routing errors, Git security hardening PRs (@bookholt-oai), Windows experience issues

**Gemini CLI:**
- 1 release (v0.51.0-nightly auto-bump)
- Key themes: Subagent governance (generalist hangs, MAX_TURNS false success), Auto Memory system bugs cluster, AGENTS.md cross-tool support

**GitHub Copilot CLI:**
- No releases in 24h
- Key themes: TUI rendering issues, MCP ecosystem, BYOK/auth regression, Windows crash since May 2026

**Kimi Code CLI:**
- No activity in 24h

**OpenCode:**
- 50 PRs (heavily active), many issues closed
- No releases in 24h
- Key themes: SubAgent governance, desktop stability, V2 MCP CodeMode, ACP/TUI skills

**Qwen Code:**
- 3 releases (v0.19.6, v0.19.6-nightly, cua-driver-rs v0.7.0)
- 50 PRs, 29 issues
- Key themes: Prompt cache misses, Web Shell UI, multi-channel (QQ Bot/WeCom), auth reliability

Now I need to organize this in a comparative manner.

Let me build the table for "各工具活跃度对比":

| 工具 | Issue 数 | PR 数 | Release 数 |
|---|---|---|---|
| Claude Code | ~50 | 7 | 2 (v2.1.200, v2.1.201) |
| OpenAI Codex | ~30 | ~50 (many by bookholt-oai) | 0 |
| Gemini CLI | ~30 | 18 (incl. 6 closed) | 1 (nightly) |
| GitHub Copilot CLI | 30 | 0 | 0 |
| Kimi Code CLI | 0 | 0 | 0 |
| OpenCode | 50 | 50 | 0 |
| Qwen Code | 29 | 50 | 3 |

Common directions to identify:
1. **Subagent/Agent governance** - Claude Code (Sonnet 5 issues), Gemini CLI (MAX_TURNS, generalist hangs), OpenCode (recursion limits), Codex (subagent model selection)
2. **Permission / Sandbox / Safety** - Claude Code (default Manual mode, data loss), Codex (Git hardening), Gemini CLI (shell parameter expansion), Qwen Code (transform_data sandbox)
3. **TUI / Terminal rendering** - Copilot CLI (alt-screen), OpenCode (TUI improvements), Claude Code (Sonnet 5 silent text)
4. **Session/Memory/Context** - Gemini CLI (Auto Memory cluster), OpenCode (compaction), Claude Code (.claude/memory)
5. **Cross-tool compatibility** - Gemini CLI (AGENTS.md), Qwen Code multi-channel
6. **Windows experience** - Codex, Copilot CLI, Claude Code (WSL), OpenCode (debian package deps)
7. **Authentication/OAuth** - Copilot CLI, Qwen Code, Codex
8. **Model availability/reliability** - GPT-5.5 (Codex), Sonnet 5 (Claude), Gemini 3 references

Differentiation:
- Claude Code: Enterprise-oriented, security emphasis, Fable model focus
- Codex: Backend model focus, strong Git safety engineering
- Gemini CLI: Subagent-heavy ecosystem, AGENTS.md cross-tool
- Copilot CLI: Platform integration (GitHub), MCP ecosystem
- OpenCode: ACP protocol, V2 runner architecture, desktop app
- Qwen Code: Chinese market, multi-channel (WeChat ecosystem), model-agnostic

Let me now draft a comprehensive comparison report. I should aim for a balanced, insightful analysis that provides actionable intelligence.

I'll structure it carefully and use tables for comparison and trend signals.</think>

# AI CLI 工具生态横向对比分析报告
**数据窗口：2026-07-03 → 2026-07-04** | **数据来源：七份日报**

---

## 一、生态全景

当前 AI CLI 工具生态已进入**"能力收敛 + 安全加固"双主线并行期**：一方面 Anthropic、OpenAI、Google 等头部厂商通过小版本迭代（Claude Code v2.1.20x）收紧默认行为以提升安全基线，同时把更多上下文/会话/MCP 能力暴露给企业用户；另一方面 OpenCode、Qwen Code 等中等量级项目正以高密度 PR（单日 50 条）重构核心架构（V2 Runner、Session Fragment、Web Shell）。社区讨论重心从"能不能跑"转向"能不能稳定长跑、可控可观测"，**Sonnet 5 / GPT-5.5 / Gemini 3 等新一代模型的可用性争议**与**SubAgent 治理、权限沙箱、跨账户会话隔离**是当前的三大矛盾交汇点。

---

## 二、各工具活跃度对比

| 工具 | Issues 更新 | PRs 更新 | Release 数 | 主要技术动作 |
|---|---|---|---|---|
| **Claude Code** | ~50 | 7 | **2**（v2.1.200, v2.1.201） | 默认权限改 Manual、AskUserQuestion 不再自动继续 |
| **OpenAI Codex** | ~30 | ~20 | 0 | `apply_patch` Git 安全硬化系列 5 PR 集中提交 |
| **Gemini CLI** | ~30 | 18（6 已 CLOSED） | 1（nightly 自动 bump） | 限制递归推理 15 轮、默认支持 `AGENTS.md` |
| **GitHub Copilot CLI** | 30 | 0 | 0 | 无代码层动作，反馈集中在 TUI 与 MCP |
| **Kimi Code CLI** | 0 | 0 | 0 | 仓库静默期 |
| **OpenCode** | ~50 | **50** | 0 | V2 Runner / Session Fragment / MCP CodeMode 重构集中合入 |
| **Qwen Code** | 29 | **50** | **3**（v0.19.6、nightly、cua-driver-rs v0.7.0） | 模型回退链、WeCom 通道、Daemon NDJSON 优化 |

> 📊 **活跃度梯队划分**：
> - **高活跃（PR ≥ 50）**：OpenCode、Qwen Code
> - **中活跃（混合反馈型）**：Claude Code、OpenAI Codex、Gemini CLI、GitHub Copilot CLI
> - **静默期**：Kimi Code CLI

---

## 三、共同关注的功能方向

### 🔴 1. Subagent / Agent 治理（共识度最高）
| 工具 | 具体诉求 |
|---|---|
| Claude Code | Sonnet 5 advisor 工具在 >100K token 失效（#67609） |
| OpenAI Codex | 期望 per-subagent 模型/profile 选择，死锁需手动 kill（#14039, #31036） |
| Gemini CLI | Generalist agent 无限挂起（#21409, 👍8）+ MAX_TURNS 误报 success（#22323） |
| OpenCode | SubAgent 无限递归（#18100）+ overflow 静默挂起（#25187） |

**统一诉求**：递归深度上限、状态语义清晰化、可观测/可中断/可恢复。

### 🟡 2. 权限与沙箱强化（厂商策略已分化）
| 工具 | 措施倾向 |
|---|---|
| Claude Code | **激进保守**：默认 Manual、`@file` 引用绕过 Hook 被报告（#72236） |
| OpenAI Codex | **纵深防御**：`apply_patch` 五层 PR 重构 Git 信任边界 |
| Gemini CLI | **精细化分级**：Shell 参数扩展强制确认 + YOLO 模式直接拒绝（#28175） |
| Qwen Code | **安全债清理**：`transform_data` 子进程隔离缺失（#6282, P1） |

**共同模式**：从"工具白名单"向"运行时边界 + 后置审计"演进。

### 🟢 3. 终端与 TUI 体验修补
- **Copilot CLI**：alt-screen 强制启用遭集体吐槽（#1799，👍7，11 评论）
- **OpenCode**：shell completion 启动开销大（#25692）→ PR #35247 优化进度输出
- **Claude Code**：Sonnet 5 文本在 TUI 渲染层丢失但 transcript 仍记录（#67051）
- **Gemini CLI**：Shell "Waiting input" 卡死（#25166）+ 终端 resize 性能问题

**行业信号**：CLI 工具进入 TUI 时代，渲染稳定性成为基础门槛。

### 🔵 4. 上下文与会话管理
| 工具 | 关注点 |
|---|---|
| Gemini CLI | Auto Memory 重试低信号会话 + 日志泄漏（#26522/23/25）四联发 |
| OpenCode | 通用 `/compact` + fork-aware 分支（#4317）+ V2 Session Fragment 重构 |
| Claude Code | `.claude/memory/` 项目本地化（#25947，👍29 长期高赞） |
| OpenAI Codex | Context compaction 丢失 AGENTS 规则，进度从 97%→42%（#25792） |

**统一方向**：从"全局记忆"向"项目本地 + 团队 Git 化"演进。

### 🟣 5. Windows / 企业环境适配
- **Codex**：Win11 Pro 高配仍卡顿（#20214）+ WSL Computer Use 不可用
- **Copilot CLI**：跨版本 Windows crash 自 5 月未解决（#4026）
- **Claude Code**：WSL2 bash E2BIG（#51126）
- **OpenCode**：Linux deb 依赖 `libgtk-3-0t64`（Ubuntu 24.04）
- **Qwen Code**：国内淘宝镜像源滞后 3 个版本（#6218）

### 🟠 6. 跨工具上下文约定
- **Gemini CLI** PR #28240：默认启用 `AGENTS.md`，与 Claude Code 互通
- **OpenCode**：ACP Client 支持呼声强烈（#5182，👍22）
- **Codex**：开箱即用的 `AGENTS.md` 已成事实标准

### ⚫ 7. 凭据与会话隔离（安全风暴）
| 工具 | Issue |
|---|---|
| Claude Code | #71654（session transcript 泄漏 GitHub PAT）+ #74066（跨账户 session 疑似泄漏） |
| Copilot CLI | #4025（session 跨项目污染） |
| Codex | OpenAI OAuth 劫持直连 key（#18862，OpenCode 同步报告） |

**统一诉求**：默认拒绝读 `.env`/`.ssh`、Bash 输出 secret 脱敏、ZDR workspace 严格隔离。

---

## 四、差异化定位分析

| 维度 | Claude Code | OpenAI Codex | Gemini CLI | Copilot CLI | OpenCode | Qwen Code |
|---|---|---|---|---|---|---|
| **核心定位** | 安全优先的 Agent 终端 | 模型强依赖的 Coding Harness | 模型能力驱动的 Subagent 平台 | GitHub 工作流绑定 | 协议化/可扩展的开放平台 | 多通道触达 + 国内生态 |
| **目标用户** | 企业工程团队 | OpenAI 付费用户 | Google AI 开发者 | GitHub 深度用户 | 高级用户 / 二次开发者 | 国内/中文生态 |
| **技术路线亮点** | Harness-level 行为收敛 | `apply_patch` 信任链绑定 | Subagent + Auto Memory 系统 | MCP 优先 / ACP 过渡 | ACP / V2 Runner / CodeMode MCP | 模型回退链 / Channel loop |
| **本期最显著动作** | 默认权限切到 Manual | Git 安全 5 层 PR | 递归轮数硬上限 15 | （无） | 50 PR 重构 | 3 Releases 集中发布 |
| **品牌调性** | 严谨 / 收敛 | 平台化 / 高密度 | 实验性 / 能力前沿 | 集成型 | 工程化 / 协议化 | 渠道化 / 本地化 |

---

## 五、社区热度与成熟度

### 🟢 成熟期：Claude Code
- 社区进入"行为收敛期"，issue 反弹集中在已上线功能的回归（v2.1.200 一日催生 354 👍）。
- 含义：**用户量与质量已饱和**，连变更都得小心翼翼。

### 🟠 快速迭代期：OpenCode、Qwen Code
- **OpenCode**：单日 50 PR、core 重构 + Desktop 体验 + V2 Runner 同时推进，**架构升级窗口**。
- **Qwen Code**：单日 50 PR + 3 Release，国内分发链路（淘宝镜像、macOS 预构建）和多通道触达同步发力，**扩张期**。

### 🟡 能力爆发期：Gemini CLI
- 借 Gemini 3 原生 bash 亲和力，主推 Zero-Dependency OS 沙箱等"放手干"路线（#19873），但 Subagent/Memory 子系统 bug 集群暴露治理滞后。

### 🔵 平台修补期：OpenAI Codex
- 模型层（GPT-5.5）+ Windows 平台稳定性是两条未愈伤口，但 `apply_patch` 五层重构显示**安全侧已主动收紧**。

### ⚪ 静默期：Kimi Code CLI
- 单日 0 活动，可能处于内部测试或战略调整期，建议观察下个 release 节点。

### 🟤 集成痛点期：GitHub Copilot CLI
- 30 条 issue 集中爆发但 0 PR 更新，**需要警惕反馈堰塞**。TUI 与 MCP 是两大瓶颈。

---

## 六、值得关注的趋势信号

### 🚨 信号 1：模型可用性成为新的不稳定性维度
**证据**：GPT-5.5 reasoning token 聚簇（Codex #30364）、Sonnet 5 advisor 失效（Claude #67609）、Gemini 3 bash 亲和力与沙箱诉求（#19873）。

**对开发者的启示**：选型时**模型稳定性权重已高于模型上限**；需建立 prompt cache、subagent 模型、限流回退的多层缓冲。

### 🚨 信号 2：SubAgent 治理从"可选"变为"必选"
**证据**：4/7 工具（除 Copilot/Kimi）都把 SubAgent 列为高优问题，OpenCode V2 runner 与 Gemini 限递归 15 轮都是直接响应。

**对开发者的启示**：长任务流必须自实现 depth limit + state machine + resume capability，**不能信任默认行为**。

### 🚨 信号 3：AGENTS.md 成为事实标准
**证据**：Gemini CLI 主动适配（#28240）、Codex 开箱即用、OpenCode ACP 协议化呼声高、Qwen Code 也跟进。

**对开发者的启示**：在仓库根写 `AGENTS.md` 已不再"Claude 专属"，**通用化的指令约定正在形成**。建议把团队约定沉淀到此文件。

### 🚨 信号 4：MCP 信任边界进入深水区
**证据**：Codex 五层 PR 重构 apply_patch；Gemini CLI 拆分 to 工具上限 > 128 报 400；Copilot CLI OAuth/pagination/插件合并三大痛点。

**对开发者的启示**：MCP 已从"功能扩展"变成"安全攻击面"，需要建立**配置源 → 子进程 → helper 调用的全链路审计**。

### 🚨 信号 5：CLI 工具进入 TUI 与桌面二轨竞争
**证据**：OpenCode Desktop 黑屏/退出崩溃问题集中；Copilot CLI alt-screen 反馈密集；Claude Code 文本渲染丢失。

**对开发者的启示**：CLI/TUI 与 Desktop/Web 的"渲染一致性"是新阶段关键问题。**关注可观测性与 transcript 回放能力**将成为工具选型差异化指标。

### 🚨 信号 6：凭据泄漏从"个案"变"行业级"
**证据**：Claude Code 一日 3 条凭证泄漏 issue（#71654, #74066, #72274）；OpenCode OpenAI OAuth 劫持（#18862）；Copilot CLI 跨项目 session 污染（#4025）。

**对开发者的启示**：在企业内推广任何 AI CLI 工具前，**必须审查其 session 持久化策略与 `.env` 默认行为**。建议默认开启工具提供的"危险命令二次确认 + 敏感文件读取拒绝"。

---

## 七、给技术决策者的建议清单

| 优先级 | 建议 | 适配工具 |
|---|---|---|
| 🔴 P0 | 在 `AGENTS.md` 中固化团队约定，跨工具复用 | 全部 |
| 🔴 P0 | 启用所有可用的"危险命令二次确认"开关 | Claude Code、Qwen Code、Codex |
| 🟡 P1 | 长任务流自实现 SubAgent 深度上限与状态持久化 | 全部 |
| 🟡 P1 | 审查工具的 session 存储路径与跨项目隔离能力 | Copilot CLI、Claude Code |
| 🟢 P2 | 把 prompt cache / 模型回退纳入成本控制指标 | Qwen Code、Codex、Claude Code |
| 🟢 P2 | 在企业网络环境中验证 HTTP 代理 / WSL 兼容 | Copilot CLI、Codex、OpenCode |

---

> 📊 **本报告基于 7 份日报的横向归纳，所有 issue/PR 链接可在各分项日报中查证。** 报告焦点在于"信号识别"而非"事件复述"，对于需要深度跟进的方向已直接给出可操作建议。

---

## 各工具详细报告

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills 社区热点

> 数据来源: [anthropics/skills](https://github.com/anthropics/skills)

<think>The user wants me to analyze the GitHub data from anthropics/skills repository and produce a community hot topic report in Chinese. Let me carefully review the data provided.

Important observation: All the PRs show "评论: undefined" and "👍: 0" - this means the provided data doesn't actually contain real comment/thumbs-up counts. I need to be honest about this limitation and analyze based on what is actually available - the PR/issue content, recency of updates, nature of the issue, and topical relevance.

Let me note this issue clearly. Then I'll do the analysis based on:
- Recency (most recently updated suggests ongoing engagement)
- Issue discussion count (where available)
- Topical importance (security issues, infrastructure bugs)
- Cross-referenced issues (issues/PRs that reference each other)

Let me analyze:

**Top PRs by actual significance (despite undefined comment counts):**

1. **#1298** - Fix skill-creator run_eval.py showing 0% recall - This is a CRITICAL bug since it affects the optimization loop. References #556 which has 12 comments. Very recent activity (June 23, 2026).

2. **#514** - Add document-typography skill - tackles a real quality issue in AI-generated documents (orphans, widows, numbering). Recent March activity.

3. **#538** - Fix PDF case-sensitive references - Bug fix affecting case-sensitive filesystems (Linux). Important for cross-platform.

4. **#486** - Add ODT (OpenDocument) skill - adds support for another document format.

5. **#210** - Improve frontend-design skill clarity - iteratively improving existing important skill.

6. **#83** - Add skill-quality-analyzer and skill-security-analyzer - META skills that analyze other skills. Very strategic.

7. **#541** - Fix DOCX tracked change w:id collision - critical data corruption fix.

8. **#539** - Fix skill-creator YAML validation - prevents silent YAML parsing failures.

9. **#1367** - Add self-audit skill - mechanical verification + four-dimension reasoning audit. Very recent (July 2).

10. **#1099** - Fix run_eval.py crash on Windows - Cross-platform compat.

11. **#1050** - Fix Windows subprocess + encoding bugs - Another Windows compat fix.

12. **#723** - Add testing-patterns skill - Testing best practices skill.

13. **#509** - Add CONTRIBUTING.md - Community health improvement.

14. **#362** - Fix skill-creator UTF-8 panic - Internationalization fix.

15. **#361** - Detect unquoted YAML special characters - Validation improvement.

16. **#181** - Add SAP-RPT-1-OSS predictor skill - Enterprise/SAP integration.

17. **#95** - Add comprehensive system documentation.

18. **#1323** - Fix run_eval trigger detection - Another fix to the same eval bug.

19. **#1302** - Add color-expert skill - Color expertise skill.

20. **#806** - Add sensory skill for macOS AppleScript - Platform automation.

**Top Issues by actual comment count:**

1. **#492** (34 comments, 2 👍) - Security: Community skills under anthropic/ namespace enables trust boundary abuse - HIGH SECURITY CONCERN
2. **#228** (14 comments, 7 👍) - Enable org-wide skill sharing in Claude.ai - Enterprise need
3. **#556** (12 comments, 7 👍) - run_eval.py: claude -p never triggers skills/commands (0% trigger rate) - The root bug that multiple PRs are trying to fix
4. **#62** (10 comments, 2 👍) - All my skills have disappeared now I get errors - User data loss
5. **#1329** (8 comments) - Proposing compact-memory skill
6. **#202** (CLOSED, 8 comments) - skill-creator should be updated to best practice
7. **#412** (CLOSED, 6 comments) - Skill proposal: agent-governance
8. **#189** (6 comments, 9 👍) - document-skills and example-skills plugins install identical content, causing duplicates
9. **#1175** (CLOSED, 4 comments) - SharePoint Online security concerns
10. **#29** (4 comments) - Usage with bedrock - Integration question
11. **#16** (4 comments) - Expose Skills as MCPs - Architectural proposal
12. **#1362** (3 comments) - web-artifacts-builder bundle/init scripts fail
13. **#1169** (3 comments) - skill-creator description-optimisation loop recall=0%
14. **#1061** (3 comments) - Windows compatibility skill-creator scripts
15. **#184** (CLOSED, 3 comments, 4 👍) - agentskills.io redirects

Now let me organize this into a clean report.

Since PRs don't have comment data, I'll need to infer significance from:
- Issue #556 (12 comments) is directly referenced by multiple PRs (#1298, #1323, #1099, #1050, #1169), making those fixes part of a critical priority
- Issue #492 (34 comments) is the most-discussed security issue
- Cross-references show community momentum

Let me write this report now.</think>

# Claude Code Skills 社区热点报告
**数据截止：2026-07-04 | 报告生成自 anthropics/skills 仓库**

> ⚠️ **数据说明**：本次拉取的 PR 评论数（comment / 👍）字段均为 `undefined`，因此本报告以"Issues 评论数（真实有效）+ PR 活动迹象（创建/更新时间、跨引用关系）"作为热度主要依据。

---

## 1. 热门 Skills 排行（Top PRs）

虽然 PR 评论数缺失，但结合 **被多个 Issue 引用的关联密度** 和 **最近更新活跃度**，以下 PR 构成当前社区最关注的焦点：

### 🏆 #1298 — skill-creator 评测信号修复（关键基础件）
- **作者**：`@MartinCajiao` | **状态**：OPEN
- **功能**：修复 `run_eval.py` 永远报告 `recall=0%` 的根因，并修复 Windows 流读取、触发检测、并发 worker 问题
- **社区热度**：本 PR 关闭/合并 Issue **#556（12 评论 / 7 👍）** 的核心链。多用户独立复现（10+ 次），并被 #1099、#1050、#1323、#1169 等多条 PR 同源修复
- **意义**：这是 `run_loop.py` / `improve_description.py` 全套描述优化工具的"心脏"，信号是噪声意味着整个 Skill 自优化能力形同虚设
- 🔗 https://github.com/anthropics/skills/pull/1298

### 🥈 #514 — document-typography（AI 文档排印质量控制）
- **作者**：`@PGTBoos` | **状态**：OPEN
- **功能**：防止 Claude 生成文档中的"孤字/寡行/编号错位"等排印问题
- **社区讨论点**：所有 Skill 用户都被迫接收低质量排版，本质是"用户从不主动要求好排版，却默认期望"的痛点
- 🔗 https://github.com/anthropics/skills/pull/514

### 🥉 #538 / #541 / #539 — 文档格式 Skill 的三大 Bug 修复集群
- **作者**：`@Lubrsy706` | **状态**：OPEN
- 内容：PDF 大小写引用错（Linux 必坏）/ DOCX tracked-changes `w:id` 与 bookmark 冲突导致文档损坏 / YAML 未加引号描述被静默截断
- **热度信号**：三个 PR 集中来自同一作者，针对 docx/pdf 系列做"打补丁"，说明 document-skills 是被广泛使用 + 但稳定性欠缺的"明星 Skill 区"
- 🔗 https://github.com/anthropics/skills/pull/538 | https://github.com/anthropics/skills/pull/541 | https://github.com/anthropics/skills/pull/539

### 🛡️ #83 — skill-quality-analyzer + skill-security-analyzer 元能力
- **作者**：`@eovidiu` | **状态**：OPEN（自 2025-11 长期 pending）
- **功能**：对 Skills 做五维质量评估 + 安全审计，直接对接 Issue **#492（34 评论 / 2 👍，安全议题 Top1）** 的诉求
- **关注度**：是当前社区"Skills 安全 / 命名空间混淆"焦虑的官方层面回应，长期未合并说明审核门槛较高
- 🔗 https://github.com/anthropics/skills/pull/83

### 🎨 #210 — frontend-design Skill 清晰度改造
- **作者**：`@justinwetch` | **状态**：OPEN
- **功能**：重写 frontend-design 的指令结构，让 Claude 在单轮会话内可执行、可被具体引导
- 🔗 https://github.com/anthropics/skills/pull/210

### 📄 #486 — ODT（OpenDocument）技能
- **作者**：`@GitHubNewbie0` | **状态**：OPEN
- **功能**：覆盖 `.odt` / `.ods` 的创建、模板填充、HTML 解析，填补 OOXML 之外的开放文档格式空白
- 🔗 https://github.com/anthropics/skills/pull/486

### 🧪 #723 — testing-patterns Skill
- **作者**：`@4444J99` | **状态**：OPEN
- **功能**：Testing Trophy 哲学、单元测试、React 组件测试全覆盖
- 🔗 https://github.com/anthropics/skills/pull/723

### 🪟 #1099 / #1050 — Windows 兼容性两条 PR
- **作者**：`@joshuawowk`、`@gstreet-ops` | **状态**：OPEN
- **功能**：分别修复 `run_eval.py` 在 Windows 上的 pipe 读取崩溃与 `claude.cmd` 找不到 / cp1252 编码问题
- **热度信号**：直接对应 Issue **#1061（3 评论）**与多个 PR 同源修复 Windows 体验
- 🔗 https://github.com/anthropics/skills/pull/1099 | https://github.com/anthropics/skills/pull/1050

---

## 2. 社区需求趋势（Top Issues 提炼）

按真实评论数排序，**社区正在塑造下一波 Skill 的需求方向**：

| 趋势 | 代表 Issue | 评论 / 👍 | 一句话解读 |
|---|---|---|---|
| 🔒 **Skills 安全 & 信任边界** | #492（OPEN） | **34 / 2** | 社区贡献的 Skill 被发布在 `anthropic/` 命名空间，伪装成官方，触发权限滥用风险——是 Top1 议题，已多次被维护者更新讨论 |
| 🏢 **企业内部 Skill 共享** | #228（OPEN） | 14 / 7 | Claude.ai 缺乏 Org 级 Skill 库，分发靠"下载 → Slack → 手动上传"，是 Enterprise 落地的关键阻力 |
| 🧰 **skill-creator 评测信号失真** | #556（OPEN） | 12 / 7 | `run_eval.py` 触发率永久 0%，描述优化闭环形同虚假；对应 #1169 同根 |
| 💾 **Skill 数据丢失 & UX** | #62（OPEN） | 10 / 2 | 用户已上传 Skill"无故消失"，暴露本地文件管理与上传流程的脆弱性 |
| 🧠 **节省 Context 的紧凑记忆** | #1329（OPEN） | 8 / 0 | Agent 自我笔记耗 context，希望用符号化的 compact-memory 表达替代散文笔记 |
| 🔁 **skill-creator 范式现代化** | #202（CLOSED） | 8 / 1 | 当前更"开发者文档"而非"面向 Claude 的可执行指令"，冗长且违反自身命名规范 |
| 🧭 **Agent 治理/可观测** | #412（CLOSED） | 6 / 0 | 缺 policy enforcement、威胁检测、审计痕迹的 agent-governance Skill |
| 📦 **插件内容重复污染 Context** | #189（OPEN） | 6 / **9** | `document-skills` 与 `example-skills` 同内容被同时装载，引起 Context 重复，9 赞是当前 issues 区最高 |
| 🔌 **Skills 与 MCP 接口化** | #16（OPEN） | 4 / 0 | 希望把每个 Skill 暴露成 MCP，标准化对外签名 |
| 🌐 **跨平台（Windows/编码）** | #1061（OPEN） | 3 / 1 | Unix-first 假设让 Windows 用户的 skill-creator 几近不可用 |

**趋势归纳**：
1. **可观测、可审、可信** > 单纯"加新 Skill"
2. **企业级（Org 共享 + 权限）** 已是核心刚需
3. **元 Skill（自我审计、自描述优化）** 是社区共识方向

---

## 3. 高潜力待合并 PR（评论活跃 / 关联密集）

下表以"是否被多 Issue 引用、最近更新、Issue 评论热度加权"为依据：

| PR | 关键性 | 关联 Issue | 落地概率评分（主观） |
|---|---|---|---|
| **#1298** `run_eval.py` 0% Recall 根因修复 | ⭐⭐⭐⭐⭐ | 关联 **#556（12 评论）** 及 5 个同源 PR | 极高：基础设施性，关闭 #556 的唯一系统级方案 |
| **#538 + #541 + #539** 文档 Skill 三件套修复 | ⭐⭐⭐⭐ | docx/pdf 用户群最广 | 高：纯 Bug 修复，几乎无设计争议 |
| **#1099 / #1050** Windows 兼容性 | ⭐⭐⭐⭐ | #1061（3 评论） | 高：1 行修改，跨平台刚需 |
| **#362** UTF-8 多字节 panic 修复 | ⭐⭐⭐ | i18n 普遍 | 高：纯 Bug |
| **#361** YAML 未引号字段检测 | ⭐⭐⭐ | 与 #539 重复方向 | 中：建议合并到 #539 单 PR |
| **#514** document-typography | ⭐⭐⭐ | 用户体验口碑型 | 中：涉及设计美学，主观分歧可能拖慢合并 |
| **#1323** run_eval trigger detection | ⭐⭐⭐ | 同 #1298 根因 | 中：与 #1298 互有重叠，存在冲突 |
| **#1367** self-audit（机械验证 + 四维推理质量门） | ⭐⭐⭐ | 元 Skill、契合 #492 安全感 | 中-高：近期（2026-07-02 更新），方向直击痛点 |
| **#83** skill-quality-analyzer + skill-security-analyzer | ⭐⭐⭐ | **#492**（34 评论）直接诉求 | 中：长期 pending，原因可能是命名空间 / 供应链模型待定 |
| **#1302** color-expert | ⭐⭐ | 创意/前端场景 | 中-低 |
| **#806** sensory（macOS AppleScript） | ⭐⭐ | Apple 生态独占 | 中-低 |

**结论**：最有可能在 2026Q3 合入主干的是 **#1298 + #538/#541/#539 + Windows 兼容三件套**——它们是阻塞大量用户工作的系统级 Bug。

---

## 4. Skills 生态洞察（一句话）

> **社区最集中的诉求是"让 Skills 这套基础设施自身可被信任、可被验证、可被协作"——信任边界（#492）、评测信号可信（#556）、跨平台可靠（#1061）、企业内可共享（#228）四件事的优先级，已远高于"再新增一个 Skill"。**

---

### 附：方法论披露

- 本次 50 条 PR 中所有 `comments` 与 `👍` 字段为 `undefined`，判断热度使用的是：① Issues 评论/👍 真实数据；② PR 与 Issue 的多向引用关系；③ 最近更新时间（如 #1298 与 #1367 在 7 月仍在活动）；④ 同源修复聚类（如 run_eval、YAML、Windows 三个 Bug 集群）
- 报告未对未在数据中出现的内容做推断；如需更精确的 PR 互动数，请补抓 GitHub REST API 的 `pulls.get` 端点（含 `comments`、`review_comments`、`reactions`）
- 想深入看 Issue #492（安全命名空间）的处理思路，参见 PR #83 摘要中"skill-security-analyzer"维度设计，二者在生态上构成"问题 ↔ 答案"的最清晰配对

---

<think>Let me analyze the GitHub data for Claude Code community dynamics on 2026-07-04 and generate a comprehensive daily report in Chinese.

Key observations:
1. Two new releases in past 24 hours: v2.1.201 and v2.1.200
2. v2.1.200 has significant changes - AskUserQuestion no longer auto-continues by default, default permission mode changed to "Manual"
3. v2.1.201 - Claude Sonnet 5 sessions no longer use mid-conversation system role for harness reminders
4. Many issues related to AskUserQuestion timeout (related to v2.1.200 change)
5. Security-related issues are prominent (session leakage, secret leaks)
6. Fable 5 model issues
7. Data loss issues with auto-accept mode and rm commands
8. 7 PRs updated, mostly from @sourabharsh working on plugin-dev and feature-dev

Let me structure the report properly:

Top issues by comments/importance:
1. #73125 - AskUserQuestion 60s timeout issue (111 comments, 354 likes) - HOT
2. #19673 - Usage limit hit at 84% (101 comments, 75 likes)
3. #61682 - GitHub connector in Cowork Windows (13 comments)
4. #67609 - Advisor tool unavailable with Fable 5 at 100K tokens (8 comments)
5. #69059 - Auto-accept mode runs destructive commands (7 comments, data loss)
6. #74006 - Contradictory session limit times (7 comments)
7. #51537 - Hook output 10K char limit (6 comments)
8. #54066 - Project paths with underscores split memory (6 comments, CLOSED)
9. #73105 - Make AskUserQuestion timeout configurable (6 comments, 27 likes)
10. #25947 - Store project memory in .claude folder (5 comments, 29 likes)
11. #46461 - Sandbox deny rules E2BIG (4 comments, CLOSED)
12. #51126 - WSL2 Bash tool E2BIG (4 comments, CLOSED)
13. #71654 - Session transcripts leak secrets (4 comments)
14. #67051 - Assistant text not rendered in CLI (4 comments)

Let me now create the report.</think>

# Claude Code 社区动态日报
**日期：2026-07-04**

---

## 📌 今日速览

今日最大的关注点是 **v2.1.200** 引入的重大行为变更——`AskUserQuestion` 默认不再自动继续、权限模式默认值由 "auto" 改为 "Manual"，引发社区关于 60 秒超时和数据丢失的密集讨论；同时 `Claude Sonnet 5`（Fable 5）相关问题（advisor 工具失效、文本渲染丢失、对话限速误报）持续占据 issue 主流，安全相关（会话凭证泄漏、跨账户数据泄漏、自动执行破坏性命令）成为本周高优痛点。

---

## 🚀 版本发布

### v2.1.201（最新）
- **Claude Sonnet 5 会话**：不再在会话中途使用系统角色注入 harness 提醒，减少模型推理干扰。

### v2.1.200 ⚠️ 重要行为变更
- **`AskUserQuestion`**：对话框默认不再自动继续。若需 idle 超时自动跳过，需通过 `/config` 显式开启。
- **默认权限模式**：从 "auto" 改为 **"Manual"**，覆盖 CLI、`--help`、VS Code、JetBrains 全平台。对应参数：`--permission-mode manual`、`"defaultMode": "manual"`。

> 💡 解读：这是 v2.1.200 系列最大的用户感知变化，配套变更直接催生了 #73125（111 评论）、#73105（27 👍）等头部 issue，开发者需要显式适配。

---

## 🔥 社区热点 Issues

| # | Issue | 评论 / 👍 | 重要性 |
|---|-------|----------|--------|
| [#73125](https://github.com/anthropics/claude-code/issues/73125) | **AskUserQuestion 60s 超时后无答案自动继续** | 111 / 354 | ⭐⭐⭐⭐⭐ |
| [#19673](https://github.com/anthropics/claude-code/issues/19673) | 会话使用 84% 却显示 "hit your limit" | 101 / 75 | ⭐⭐⭐⭐⭐ |
| [#73105](https://github.com/anthropics/claude-code/issues/73105) | **AskUserQuestion 超时应可配置** | 6 / 27 | ⭐⭐⭐⭐⭐ |
| [#61682](https://github.com/anthropics/claude-code/issues/61682) | GitHub 连接器在 Cowork Windows 无 tool 暴露 | 13 / 8 | ⭐⭐⭐⭐ |
| [#67609](https://github.com/anthropics/claude-code/issues/67609) | Fable 5 在 >100K token 时 advisor 工具 unavailable | 8 / 14 | ⭐⭐⭐⭐ |
| [#69059](https://github.com/anthropics/claude-code/issues/69059) | 自动模式下执行 `php artisan migrate:fresh` 致数据丢失 | 7 / 0 | ⭐⭐⭐⭐⭐ |
| [#74006](https://github.com/anthropics/claude-code/issues/74006) | 同会话内重置时间前后矛盾，子 agent 静默挂掉 | 7 / 0 | ⭐⭐⭐⭐ |
| [#25947](https://github.com/anthropics/claude-code/issues/25947) | 项目内存文件应存储在 `.claude/memory/` 而非全局目录 | 5 / 29 | ⭐⭐⭐⭐ |
| [#71654](https://github.com/anthropics/claude-code/issues/71654) | 会话转录泄漏 GitHub PAT 与 API token | 4 / 0 | ⭐⭐⭐⭐⭐ |
| [#74066](https://github.com/anthropics/claude-code/issues/74066) | **跨工作区/账户的会话/缓存疑似泄漏** | 2 / 0 | ⭐⭐⭐⭐⭐ |

**重点解读：**

- **#73125**：截至目前是本周最热 issue（354 👍），直接对应 v2.1.200 的 AskUserQuestion 行为变更。用户反馈 60 秒超时后会被默认一个空选项继续，明显背离了之前 "indefinite wait" 的体验。
- **#73105**：与 #73125 配套，是同一变更下的"功能增强"分支——社区强烈希望恢复可配置。
- **#69059**：真实生产环境的数据丢失案例。`auto` 模式下 `php artisan migrate:fresh` 无确认即执行，连锁引发权限模式变更是否安全的广泛讨论。
- **#71654 / #74066 / #72274**：本周三条凭证/会话泄漏类问题集中出现，Anthropic 安全响应进入公众视野。

---

## 🛠️ 重要 PR 进展

| # | PR | 内容要点 |
|---|----|--------|
| [#74021](https://github.com/anthropics/claude-code/pull/74021) | **fix(security-guidance)** 允许 StructuredOutput schema 接收 `null` findings | 修复 agentic commit reviewer 在无漏洞时返回 `null` 导致 schema 校验失败、浪费一轮重试的问题（观测于 7 个 repo 的 31 次 review 会话） |
| [#74010](https://github.com/anthropics/claude-code/pull/74010) | **enhance(feature-dev)** code-architect agent 增加系统设计模式与边界场景分析 | 新增 Step 0（系统设计模式分析），桥接高层设计与代码库实现 |
| [#74009](https://github.com/anthropics/claude-code/pull/74009) | **fix(plugin-dev)** 完成 "wants to" → "asks to" 文案一致性 | 补完 #13204 中漏改的 `skill-development` 和 `plugin-settings` 两处 |
| [#74007](https://github.com/anthropics/claude-code/pull/74007) | enhance(feature-dev) code-architect agent 增强 | ⚠️ 与 #74010 内容重复，已 CLOSED，估计为 rebase/命名问题 |
| [#73999](https://github.com/anthropics/claude-code/pull/73999) | fix(plugin-dev) 文案修复 | ⚠️ 与 #74009 内容重复，已 CLOSED |
| [#42701](https://github.com/anthropics/claude-code/pull/42701) | **fix init-firewall.sh**：ipset 对重复 IP 的 crash | marketplace.visualstudio.com 解析到重复 IP 时启动 devcontainer 失败，加 `-exist` 修复 |

> 注：今日 PR 以插件（plugin-dev、feature-dev、security-guidance）维护为主，作者 `@sourabharsh` 占据多个 commit，关注代码审查 agent 的稳定性。

---

## 📈 功能需求趋势

从过去 24 小时 50 条 issue 中提炼，开发者最聚焦的方向：

1. **🔒 安全与凭证保护（占比 ~28%）**
   - Bash 输出 secret 脱敏（#65122）
   - 默认拒绝读取 `.env`/`.envrc`/`~/.ssh/*`（#59296）
   - session transcript 持久化泄漏（#71654）
   - 跨账户/工作区 session 隔离（#74066、#72274）
   - `@file` 引用绕过 PreToolUse 钩子（#72236）

2. **🤖 Claude Sonnet 5 / Fable 5 模型适配（~22%）**
   - advisor 工具在长上下文失效（#67609）
   - turn 内工具调用前文本不渲染（#67051、#67112）
   - 误判 T&S 反欺诈内容（#73784）
   - session limit 时间计算矛盾（#74006、#74079）

3. **🛡️ 工作流可配置与防误操作（~18%）**
   - AskUserQuestion 可配置超时/恢复（#73105）
   - 默认权限改为 Manual 的副作用（#69059、#70024）
   - Hook `additionalContext` 10K 字符上限（#51537）
   - Session 默认无限等待回归（社区共识）

4. **🔌 IDE / Cowork 集成（~14%）**
   - GitHub connector in Cowork 无 tool 暴露（#61682、#74072）
   - Cloud web（claude.ai/code）挂起（#74060）

5. **💾 项目本地化与内存管理（~10%）**
   - `.claude/memory/` 项目本地存储（#25947，29 👍）
   - Windows 下 `_` 路径分裂双键（#54066，CLOSED）

6. **🪟 Sandbox / WSL 兼容性（~8%）**
   - bwrap E2BIG on Linux（#46461、#51126，CLOSED）
   - bubblewrap 调用过长触发 MAX_ARG_STRLEN

---

## 💬 开发者关注点（痛点 & 高频诉求）

1. **v2.1.200 默认权限模式切换的反噬**——大量原本在 `auto` 模式下顺滑工作的用户遭遇破坏性命令（migrate、rm）引发数据丢失，呼吁保留"危险命令需二次确认"的白名单机制（如 `php artisan migrate:fresh`、`rm -rf`）。

2. **AskUserQuestion 超时不可控**——一条变更打破了"无限等待"的肌肉记忆，影响交互式 coding 体验，热点 #73125 一天内冲到 354 👍，是社区最具象的情绪指标。

3. **Sonnet 5 / Fable 5 "speech-but-silent" 缺陷**——模型生成的文字被 CLI 渲染层吞掉，但 hook 与 transcript 仍能读到，导致上下文中"假设已告知用户"而实际 UX 出现断层（#67051、#67112）。

4. **凭证 / 跨账户泄漏频发**——本周 3 条以上 issue 提到 secret 或 session 跨用户可见，开发者要求：(a) 默认拒绝读取 `.env` 类文件；(b) harness 层 Bash 输出脱敏；(c) Enterprise ZDR workspace 严格隔离。

5. **会话配额计算不一致**——84% 使用却被告知超额、跨时区重置时间矛盾（#19673、#74006、#74079），反映会话和账户两个维度的限速状态未对齐。

6. **想要"项目级 memory"**——呼声长期稳定（#25947，2 月至今仍 OPEN），开发者希望 `.claude/memory/` 跟随仓库入 Git，让 agent 记忆成为团队资产而非个人 global。

7. **可观测性与调试**——"模型以为说了什么" 与 "CLI 实际显示什么" 不一致，开发者希望能开关 transcript 完整日志或 hook 在中间层补一份独立视图。

---

> 📊 **社区氛围总览**：本周仓库进入 v2.1.20x 阶段的"行为收敛期"——Anthropic 把更多默认从"便利"切到"安全"，但落地路径较激进，引发了大量回归型 issue。预计下一批补丁（小版本号递增）会集中在 AskUserQuestion 超时配置与 Sonnet 5 TUI 文本渲染丢失两点。

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

<think>Let me analyze the GitHub data for OpenAI Codex dated 2026-07-04 and generate a comprehensive daily report in Chinese.

Key observations:
1. No new releases in past 24 hours
2. Top issues are about:
   - X-OpenAI-Internal-Codex-Responses-Lite errors (multiple duplicates) - GPT-5.5 not supported
   - VSCode extension failed to revert changes
   - GPT-5.5 Codex reasoning-token clustering issues
   - Codex App freezes on Windows 11
   - Context compaction forgetting AGENTS rules
   - Windows sandbox errors with apply_patch
   - Rate limit / capacity issues
   - Authentication routing issues between macOS and Windows

3. Top PRs are mostly about Git security/safety:
   - Multiple PRs about Git configuration binding
   - Git filter blocking
   - Rate limit reset credits exposure
   - Model capacity error retry
   - Referral invites in /usage
   - Removing unused git-cliff config

4. There's a clear pattern of:
   - GPT-5.5 model issues
   - Windows-specific issues (especially Windows 11 Pro)
   - Git security hardening (lots of PRs from @bookholt-oai)
   - Rate limits and capacity issues

Let me draft the report now. I should keep it concise and technical.</think>

# OpenAI Codex 社区动态日报
**日期：2026-07-04**

---

## 📌 今日速览

今日 Codex 社区最显著的动态集中在 **GPT-5.5 模型与 Responses-Lite 路由不兼容**的多平台报错，以及围绕 **`apply_patch` 链路**的 Git 安全加固系列 PR 集中推进。昨天没有正式版本发布，但代码层正围绕"仓库可信执行边界"做系统性重构。

---

## 🚀 版本发布

过去 24 小时内**无新版本发布**。当前主线版本仍为 Codex App `26.623.*`、Codex CLI `0.142.x`、VS Code 扩展 `1.117.x` 等近期版本。

---

## 🔥 社区热点 Issues

以下为评论数与点赞数综合排名前 10 的活跃 Issue：

| # | Issue | 重要性 |
|---|-------|--------|
| 1 | **#30224** [bug/custom-model] `This model is not supported when using X-OpenAI-Internal-Codex-Responses-Lite.` | 评论 68 / 👍22。是近一周最热的模型路由报错，Plus 订阅用户在 Win11 上调用 GPT-5.x 时持续返回该错误，影响范围广。 |
| 2 | **#7291** [bug/extension] VSCode 扩展无法回滚改动 | 评论 47 / 👍16。`v0.4.46` 在 macOS 下 `codex.deleted` 流程异常，回滚失败直接影响用户对扩展的信任。 |
| 3 | **#18993** [CLOSED] [bug/extension] 无法打开历史会话 | 评论 41 / 👍53。Windows + VS Code `1.117.0` 下"open past conversation"失效。已关闭，但社区关注度高，期待回归说明。 |
| 4 | **#30364** [bug/model-behavior] GPT-5.5 reasoning_token 聚簇在 516/1034/1552 | 评论 37 / 👍53。深度数据分析型反馈，指出 reasoning 输出 token 集中在固定边界，可能影响复杂任务表现。 |
| 5 | **#20214** [bug/windows-os] Codex App 在 Win11 Pro 高配机器上频繁卡顿 | 评论 27 / 👍40。Ryzen 5 + 32GB 仍出现 stutter，疑似渲染或事件循环层问题。 |
| 6 | **#30009** [bug/windows-os/sandbox] `apply_patch` 触发 Windows 沙箱错误 | 评论 20。Win 沙箱下文件编辑失败，是 Windows 体验长期未解决的老问题。 |
| 7 | **#25792** [bug/model-behavior] Context 压缩后丢失 AGENTS 规则，进度从 97% 跳回 42% | 评论 12。长任务可靠性问题，反映自动压缩策略对系统提示词的破坏。 |
| 8 | **#30575** [bug/rate-limits] 所选模型已满，请切换其他模型 | 评论 11。Pro 用户在 `26.623.61825` 上频繁遇到容量上限。 |
| 9 | **#30595** [bug/auth] 同一 ChatGPT 账号在 macOS CLI 上被错误路由到 Responses-Lite | 评论 11。认证层按平台分流不一致，与 #30224、#30406 形成"路由 bug 三角"。 |
| 10 | **#30406** [bug/app] GPT-5.5 在 Codex App 失败，GPT-5.4 正常 | 评论 10。macOS Codex App 选 GPT-5.5 立即报错，是当前最直观的"模型可用性分裂"现象。 |

📎 *所有 Issue 链接请参考上表 ID，在 https://github.com/openai/codex/issues/{ID} 查看。*

---

## 🛠 重要 PR 进展

由 **@bookholt-oai** 主导的"Git 安全硬化"系列 PR 在今日集中提交/更新，主题是**把 apply_patch 的执行边界与 Git 配置来源绑定**：

| # | PR | 内容要点 |
|---|----|---------|
| 1 | **#31072** Bind patch application to guarded Git configuration | 将已验证的 Git 配置、仓库权威性与允许的操作三者在执行 mutation 的子进程上下文中保持绑定，防止后续流程使用裸命令重放。 |
| 2 | **#31071** Authorize included Git configuration sources before patch operations | 处理 `include.path` / `includeIf` 递归引入仓库受控配置的攻击面。 |
| 3 | **#31070** Authorize primary Git configuration sources before patch operations | 在 patch 操作前显式授权来自 env / HOME / XDG / Windows profile 等主配置源。 |
| 4 | **#31069** Bind Git configuration environment for patch operations | 把 `GIT_CONFIG_GLOBAL`、`GIT_CONFIG_SYSTEM`、`GIT_CONFIG_KEY_*` 一并绑定到单一子进程执行环境。 |
| 5 | **#30896** Centralize repository authority for Git helper launches | 将仓库权威集中到一次校验，避免每条命令重复选择 trust executable。 |
| 6 | **#30866** fix(app-server): reconcile loaded thread history on resume | 修复 `thread/resume` 重复加载历史时的状态协调问题，活跃 turn 保留 live overlay。 |
| 7 | **#31058** fix(core): retry model capacity errors | 对 503 capacity-coded 失败做 30s / 2min / 5min 三次抖动重试，从快速重试层剥离。直接回应 #30575 类问题。 |
| 8 | **#30395** [app-server] Expose rate-limit reset credit details | 在 `account/rateLimits/read` v2 协议中暴露可用 credit、过期时间、消费通道，配合 UI 兑换流程。 |
| 9 | **#30488** [codex-cli] Show reset details in redemption picker | 在 `/usage` 的 Redeem 面板展示每条 credit 的可用量与到期时间。 |
| 10 | **#30313** [codex-cli] add referral invites to /usage | 在 CLI 的 `/usage` 中接入 ChatGPT referral HTTP endpoints，复用嵌入式 app-server 鉴权会话。 |

📎 所有 PR 见：https://github.com/openai/codex/pulls

---

## 📈 功能需求趋势

综合近 24h 活跃 Issue 标签，提炼出以下社区最关注的方向：

1. **🪟 Windows 体验稳定性** — 卡顿（#20214）、沙箱报错（#30009, #29413）、WSL 下 Computer Use 不可用（#25301, #30435）、VSCode 扩展回滚（#7291）。Windows 是被吐槽最密集的端。
2. **🤖 GPT-5.5 模型可用性** — Responses-Lite 路由失败（#30224, #30406, #30912）、capacity 上限（#30575）、reasoning token 聚簇（#30364）、主观能力下降（#30137）。GPT-5.5 模型层是当前最大变量。
3. **🔐 Git / 文件编辑安全** — 近 1/3 的活跃 PR 围绕 Git 配置、过滤、合并驱动、传输 helpers 的信任边界重塑。
4. **📊 用量与计费透明度** — 重置 credit 详情（#30395, #30488）、购买 credit 后仍不可用（#19830）、多端 quota 不同步（#23192）。
5. **🧩 子代理 (subagent) 体验** — per-subagent 模型/Provider 选择（#14039）、`/agent` 无线程选择器（#30813）、`close_agent` 死锁阻塞父线程（#31036）。
6. **🖥 TUI / 桌面体验细节** — 多行 statusline（#21653）、CLI 粘贴图片（#17050）、文件查看器滚动保持（#22095）、Dock 图标回归（#28861）。

---

## 🧑‍💻 开发者关注点与痛点

- **多端一致性差**：同一账号在 Win/macOS/CLI/Web 上路由、quota、可用模型不一致（#30224, #30595, #30406, #23192），是用户最强烈的挫败来源。
- **GPT-5.5 仍未"稳"**：用户既报告随机报错，也报告能力疑似下降，社区对模型层的稳定性信心动摇。
- **长任务的 context compaction 破坏规则系统**：#25792 的"97% → 42%"是高度戏剧化的可靠性问题，影响复杂工程任务流。
- **apply_patch 安全模型被反复质疑**：开发者实际使用中经常遇到路径/symlink/子模块相关报错（#30009, #29413），同时官方也在交付层做更深的改造。
- **Windows + WSL 是新热点**：WSL agent 模式下的 cwd、Chrome/Computer Use 不可用（#25301, #29413, #30435）成为新的高频反馈来源。
- **渴望 subagent 灵活性**：开发者期待 subagent 能选不同 model / profile（#14039），并能稳定观测/终止子线程（#30813, #31036）。

---

> 📊 *本日报基于 2026-07-04 当日 GitHub 仓库 `openai/codex` 的 Issues 与 PR 公开数据自动汇总。请以仓库实际状态为准。*

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

<think>The user wants me to generate a daily community report for Gemini CLI based on GitHub data. Let me analyze the data carefully and produce a well-structured Chinese report.

Let me look at the data:

1. **Latest Release**: v0.51.0-nightly.20260704.gf7af4e518 - this is just a nightly bump, nothing major

2. **Issues** - 50 issues total, 30 shown. Top issues by comments:
   - #22323: Subagent recovery after MAX_TURNS reported as GOAL success (9 comments, P1)
   - #19873: Zero-Dependency OS Sandboxing & Post-Execution Intent Routing (8 comments, P2)
   - #24353: Robust component level evaluations (7 comments, P1)
   - #22745: AST-aware file reads, search, and mapping (7 comments, P2)
   - #21409: Generalist agent hangs (7 comments, P1, 8 thumbs up - high community interest)
   - #21968: Gemini doesn't use skills and sub-agents enough (6 comments, P2)
   - #26522: Auto Memory retrying low-signal sessions (5 comments, P2)
   - #25166: Shell command execution stuck "Waiting input" (4 comments, P1, 3 thumbs up)
   - #21983: browser subagent fails in wayland (4 comments, P1)
   - #21000: native file tools for task tracker (4 comments, P3)
   - #20079: symlink not recognized as agent (4 comments, P2)
   - #26525: Auto Memory logging redaction (3 comments, P2)
   - #26523: Auto Memory inbox patches (3 comments, P2)
   - #24246: 400 error with > 128 tools (3 comments, P2)
   - #23571: Model creates tmp scripts in random spots (3 comments, P2)
   - #22672: Agent should stop destructive behavior (3 comments, P2)
   - #22267: Browser Agent ignores settings.json (3 comments, P2)
   - #22232: browser_agent session takeover (3 comments, P3)
   - #22186: get-shit-done output hook crash (3 comments, P1)
   - #20195: Local Subagent Sprint 1 (3 comments, P3)
   - #26516: Memory system bugs (2 comments, P2)

3. **Pull Requests** - 18 total
   Notable PRs:
   - #27971 (CLOSED): fix thoughts leakage - SURGICAL but closed without merge
   - #28055 (CLOSED): preserve dollar sequences
   - #28049 (CLOSED): PascalCase markdown
   - #28044 (CLOSED): strip trailing .json
   - #28035 (CLOSED): MseeP.ai badge
   - #28033 (CLOSED): MCP tool name parsing
   - #28164 (OPEN): limit recursive reasoning turns to 15 - IMPORTANT
   - #28163 (OPEN): Caretaker Agent Triage Worker
   - #28162 (OPEN): buffer chat compression telemetry
   - #28144 (OPEN): lazy editor detection for startup
   - #28250 (OPEN): version bump 0.51.0
   - #28175 (OPEN): shell parameter expansion confirmation
   - #28178 (OPEN): require approved bot patch artifacts
   - #28248 (OPEN): docs for MCP env expansion
   - #28247 (OPEN): ls ignore globs by relative path
   - #28183 (OPEN): VS Code companion preserve terminal focus
   - #28240 (OPEN): AGENTS.md out of the box - INTERESTING, cross-tool compat

Key themes I observe:
1. Agent/Subagent issues dominate the issue tracker
2. Memory/Auto Memory system has multiple related issues (#26522, #26525, #26523, #26516)
3. Browser agent has multiple issues (#21983, #22267, #22232)
4. Tool count limits and bash sandboxing
5. AST-aware tooling exploration
6. Security and policy enforcement (shell parameter expansion, bot patch approval)
7. Performance (startup time, terminal resize flicker)
8. VS Code integration
9. Cross-tool compatibility (AGENTS.md)

Now let me write a clean, professional Chinese report.

I should be careful about:
- Not exaggerating or making up data
- Being precise about what's in the data
- Including GitHub links
- Professional tone suitable for technical developers
- Concise but informative

Let me structure the response now.</think>

# Gemini CLI 社区动态日报
**日期：2026-07-04**

---

## 📌 今日速览

今日社区动态集中在**子代理（Subagent）行为异常**与**Auto Memory 系统缺陷**两大方向。`generalist` 子代理无限挂起（#21409，获 8 个 👍）与 Auto Memory 重复处理低信号会话（#26522）等高优问题持续引发讨论；同时 PR #28240 拟引入对 `AGENTS.md` 的默认支持，标志着 Gemini CLI 与主流 Agent 生态（Claude Code 等）的上下文约定开始互通。Nightly 版本号已自动 bump 至 `v0.51.0-nightly.20260704.gf7af4e518`。

---

## 🚀 版本发布

**v0.51.0-nightly.20260704.gf7af4e518**（自动化 nightly bump）
由 [@gemini-cli-robot](https://github.com/gemini-cli-robot) 通过 [#28250](https://github.com/google-gemini/gemini-cli/pull/28250) 自动发布。本次仅版本号变更，源码 diff 可在 [compare 链接](https://github.com/google-gemini/gemini-cli/compare/v0.51.0-nightly.20260703.gf7af4e518...v0.51.0-nightly.20260704.gf7af4e518) 中查看。

---

## 🔥 社区热点 Issues

1. **[#22323](https://github.com/google-gemini/gemini-cli/issues/22323) — Subagent 在 MAX_TURNS 后错误报告为 GOAL 成功（P1）**
   子代理达到最大轮次后仍以 `status: "success"` 报告，给用户造成"任务已完成"的误导。9 条评论讨论热度最高，是当前子代理状态语义最严重的歧义问题。

2. **[#21409](https://github.com/google-gemini/gemini-cli/issues/21409) — Generalist agent 无限挂起（P1，👍 8）**
   当 Gemini CLI 调用 generalist agent 处理简单任务（如创建文件夹）时挂死，用户最长等待 1 小时后被迫取消。本期**社区投票数最高**，反映该问题影响面广且无清晰 workaround（只能提示模型不要 defer 到子代理）。

3. **[#25166](https://github.com/google-gemini/gemini-cli/issues/25166) — Shell 执行完成后卡在"Waiting input"（P1，👍 3）**
   简单命令运行结束后，CLI 仍持续显示命令处于活动状态，对话流被阻塞。属核心 shell 交互稳定性问题。

4. **[#19873](https://github.com/google-gemini/gemini-cli/issues/19873) — Zero-Dependency OS 沙箱与 Post-Execution Intent Routing（P2）**
   提议利用 Gemini 3 模型对原生 bash 的亲和力，通过 OS 层沙箱替代传统的工具白名单，同时加入执行后意图路由。8 条评论，社区对"放开 bash 同时保证安全"的方案兴趣浓厚。

5. **[#24353](https://github.com/google-gemini/gemini-cli/issues/24353) — 组件级评估体系 EPIC（P1）**
   跟进 [#15300](https://github.com/google-gemini/gemini-cli/issues/15300) 引入的行为评估机制，目前已在 6 个支持的 Gemini 模型上跑通 76 项 behavioral eval。该 EPIC 决定 Gemini CLI 后续迭代的量化基准。

6. **[#22745](https://github.com/google-gemini/gemini-cli/issues/22745) — AST-aware 文件读取 / 搜索 / 映射评估（P2）**
   调研是否值得引入 AST 感知工具以更精准定位代码边界、减少误读带来的轮次浪费，与 [#22746](https://github.com/google-gemini/gemini-cli/issues/22746)（CLI 工具选型 tilth/glyph）联动。

7. **[#21968](https://github.com/google-gemini/gemini-cli/issues/21968) — Gemini 不会主动调用自定义 skills / 子代理（P2）**
   即便配置了 `gradle`、`git` 等 skills，模型也很少自主调用，必须用户显式指示才能触发，反映 skill 描述与触发机制的脱节。

8. **[#21983](https://github.com/google-gemini/gemini-cli/issues/21983) — Browser subagent 在 Wayland 下失败（P1）**
   与 [#22267](https://github.com/google-gemini/gemini-cli/issues/22267)（Browser Agent 忽略 `settings.json` 覆盖）、[#22232](https://github.com/google-gemini/gemini-cli/issues/22232)（session takeover 与锁恢复）共同构成 browser agent 的三大缺陷面。

9. **[#26522](https://github.com/google-gemini/gemini-cli/issues/26522) — Auto Memory 无限重试低信号会话（P2）**
   配合 [#26523](https://github.com/google-gemini/gemini-cli/issues/26523)、[#26525](https://github.com/google-gemini/gemini-cli/issues/26525)、[#26516](https://github.com/google-gemini/gemini-cli/issues/26516) 形成 Auto Memory 系列 bug 集群，涉及低信号重试、inbox 静默丢弃、日志泄漏、整体质量追踪，是本期**结构性最明显的问题域**。

10. **[#24246](https://github.com/google-gemini/gemini-cli/issues/24246) — 工具数量 > 128 触发 400 错误（P2）**
    随着 MCP / sub-agent 注册的工具增加，上限被快速突破；社区期望 agent 智能裁剪当前任务可见的工具集合。

---

## 🛠 重要 PR 进展

1. **[#28164](https://github.com/google-gemini/gemini-cli/pull/28164) — 限制单个用户请求的递归推理轮数（OPEN）**
   设定单请求硬上限 15 轮（可被 `maxSessionTurns` 覆盖），用于规避 #22323 等递归失控场景导致的本地 CPU 与 API 配额耗尽。

2. **[#28240](https://github.com/google-gemini/gemini-cli/pull/28240) — 默认启用 `AGENTS.md` 上下文（OPEN，P1/P2）**
   将 `memoryTool` 默认 contextFiles 改为 `['GEMINI.md', 'AGENTS.md']`，与 Claude Code 等主流 Agent 工具共享约定，降低用户在多工具间切换的上下文维护成本。

3. **[#28175](https://github.com/google-gemini/gemini-cli/pull/28175) — Shell 参数扩展需用户确认（OPEN）**
   对含 `${}`、`$VAR` 等参数扩展的 allowlist 命令降级为需确认模式；YOLO / 非交互模式直接拒绝。安全策略侧的重要补强。

4. **[#28178](https://github.com/google-gemini/gemini-cli/pull/28178) — Bot 发布必须含明确批准标记（OPEN）**
   发布前需 `bot-changes.patch` 携带显式 approval marker，保证 reasoning→publish 边界 fail-closed，阻止被驳回的 critique 留下陈旧产物。

5. **[#28163](https://github.com/google-gemini/gemini-cli/pull/28163) — Caretaker Agent Triage Worker 基础模块（OPEN，size/l）**
   Caretaker Agent Cloud Run triage worker 的 Part 1，奠定自动分诊基础设施。

6. **[#28144](https://github.com/google-gemini/gemini-cli/pull/28144) — 启动时延迟探测可用编辑器（OPEN）**
   `EditorSettingsManager` 改为按需调用 `hasValidEditorCommand`，避免在 Windows 等进程创建昂贵的系统上启动时同步扫描所有已知编辑器。

7. **[#28247](https://github.com/google-gemini/gemini-cli/pull/28247) — `ls` ignore glob 按相对路径匹配（OPEN）**
   引入 `picomatch`，修复含路径分隔符的忽略模式（如 `**/foo`）此前只能按 basename 匹配的问题。

8. **[#28183](https://github.com/google-gemini/gemini-cli/pull/28183) — VS Code 插件关闭 diff 后保持终端焦点（OPEN，P1）**
   解决 VS Code Companion 中批准编辑后焦点被切走的体验问题，需要 review 协助。

9. **[#28248](https://github.com/google-gemini/gemini-cli/pull/28248) — 文档化 MCP 环境变量扩展（OPEN）**
   显式支持 `$VAR`、`${VAR}`、`${VAR:-fallback}`、Windows `%VAR%`；明确不支持 `{{VAR}}`、`${env:VAR}`、`~`，避免用户踩坑。

10. **[#28162](https://github.com/google-gemini/gemini-cli/pull/28162) — Chat 压缩遥测写入缓冲（OPEN，P2）**
    将 chat compression 的 OTEL 日志与指标包入 telemetry buffer，确保两条通路走同一回调路径，修复 #23445。

> 注：本期 6 个 PR（#27971、#28055、#28049、#28044、#28035、#28033）已被 CLOSED 状态更新，部分带有 `pr-nudge-sent` 标记，疑似机器人触发的自动关闭信号，建议作者关注 PR 归属 issue 后重新发起。

---

## 📈 功能需求趋势

从本期活跃 issue 与 PR 综合判断，社区关注的功能方向集中在以下几条线：

- **🤖 子代理（Subagent）治理**：能力扩展（Local Subagent Sprint #20195、轨迹分享 #22598）与稳定性治理（挂起、状态语义、配置覆盖）并行。
- **🧠 Memory / Auto Memory 系统**：四联发问题（#26516/22/23/25）显示该子系统进入大规模重构期，涵盖 redaction、inbox 验证、低信号处理与日志安全。
- **🛡️ 安全与策略强化**：参数扩展确认、bot patch approval、AST 工具边界，三条 PR 同步推进 fail-closed 治理。
- **🧰 工具生态与 Bash 原生化**：OS 沙箱 + 意图路由（#19873）、AST-aware 工具（#22745）、400 工具上限处理（#24246）反映"放开能力 + 收紧边界"的思路。
- **🪟 终端与编辑器体验**：终端 resize 性能（#21924）、外编辑器退出后渲染损坏（#24935）、启动期编辑器探测（#28144）等 UI 层细节持续打磨。
- **🌐 IDE / 编辑器集成**：VS Code Companion 焦点问题（#28183）、`AGENTS.md` 跨工具兼容（#28240）表明桌面端集成正成为下一阶段重点。

---

## 💬 开发者关注点

1. **子代理"卡死"与"假成功"**：Generalist agent 挂起（#21409）与 MAX_TURNS 误报（#22323）叠加，使开发者无法判断后台真实状态，严重影响信任度。
2. **自定义 skills / sub-agents 触发率低**（#21968）：用户投入精力编写的 skill 很少被模型主动调用，期望改进触发提示与上下文绑定。
3. **Memory 系统的隐私与可观测性**（#26522 / #26525）：既要避免低信号会话无限重试，又要确保 transcript 中的 secret 不会在送到模型后才被 redaction。
4. **Shell 交互稳定性**（#25166 / #23571）：包括执行后卡死、临时脚本遍地等问题直接影响"能用"基线。
5. **工具数量膨胀与上下文开销**（#24246 / #19873）：MCP server 增多后既触发 API 报错，又让 agent 难以挑选合适工具，社区期望"智能工具裁剪"。
6. **跨工具上下文约定**（#28240）：希望默认支持 `AGENTS.md`，减少与 Claude Code 等同类工具切换时的重复配置。
7. **新模型（Gemini 3）能力释放路径**（#19873）：开发者期待模型对原生 bash 的亲和力能转化为更直接的工具能力，同时需要 OS 层沙箱兜底安全。

---

*日报基于 github.com/google-gemini/gemini-cli 公开数据生成，统计窗口为 2026-07-03 ~ 2026-07-04。*

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

<think>Let me analyze the GitHub data for GitHub Copilot CLI and generate a comprehensive daily report in Chinese.

Key observations:
1. No new releases in the past 24 hours
2. 30 issues updated, with 0 PRs updated
3. The issues span various categories: bugs, feature requests, configuration issues
4. Several notable issues:
   - #1799 - Alt-screen toggle request (high engagement, 7 likes, 11 comments)
   - #3997 - Model "gpt-5.3-codex" not available
   - #1112 - Login hangs in VS Code Dev Container (CLOSED)
   - #1504 - Custom theme support (high engagement, 20 likes, 7 comments)
   - #2709 - Plugin MCP merge bug (CLOSED)
   - #4019 - HTTP proxy support issue
   - #4026 - CLI crashes on Windows (unresolved since May 2026)
   - Several terminal rendering issues
   - Authentication and BYOK issues
   - MCP-related issues

Let me filter out the spam/irrelevant issues from user @parezanovicluka863-byte (issues #3226, #3231, #3232, #3233, #3234) - these appear to be spam/non-English nonsensical content.

Let me categorize the genuine issues:

**High engagement / Important:**
- #1799 - Alt-screen views (7👍, 11 comments) - Configuration concern
- #3997 - gpt-5.3-codex unavailable (9 comments) - Model availability
- #1112 - Login hangs in Dev Container (CLOSED, 2👍, 8 comments)
- #1504 - Custom theme support (20👍, 7 comments) - Feature request
- #4017 - MCP OAuth issue (1👍) - Authentication

**Recent issues (July 3-4):**
- #4026 - CLI crashes (critical, unresolved since May)
- #4025 - Session recall cross-project leak
- #4024 - Voice mode ASR models fail
- #4023 - Web/search tool aliases fail
- #4022 - Issues/PRs tabs greyed out
- #4021 - Plugin removal bug
- #4020 - IDE auto-connect false positive
- #4019 - HTTP proxy support
- #4018 - Scroll speed configuration
- #4015 - Theme setting not remembered
- #4014 - Rendering bug with /mcp add
- #4016 - BYOK regression in --acp mode
- #4013 - macOS Ctrl+V image paste
- #4012 - BYOK reasoning effort error
- #4010 - Clipboard notification misleading
- #4009 - Terminal scrollbar copy issue
- #4006 - MCP tools/list pagination
- #4011 - /init non-interactive

Now let me write a structured report in Chinese.

I should note there's some oddness with the dates (2026) but I'll work with the provided data as-is.

Let me structure the report:

1. 今日速览 - Summary of key developments
2. 版本发布 - None, will skip
3. 社区热点 Issues - Top 10
4. 重要 PR 进展 - None, will skip or note absence
5. 功能需求趋势 - Analysis of feature directions
6. 开发者关注点 - Developer feedback summary</think>

# GitHub Copilot CLI 社区动态日报

**日期：2026-07-04** | **数据来源：[github/copilot-cli](https://github.com/github/copilot-cli)**

---

## 📌 今日速览

过去 24 小时仓库无新版本发布，但 **issue 活跃度显著上升**，共 30 条 issue 被更新。社区反馈集中暴露了三类核心痛点：**TUI 渲染与终端交互缺陷**（alt-screen、滚动条、剪贴板）、**MCP 生态兼容性问题**（OAuth、pagination、插件合并），以及 **BYOK/非交互模式下的鉴权回归**。其中 #4026 报告的 Windows 平台 CLI 自 5 月以来持续崩溃仍未解决，影响面较广。

---

## 🚀 版本发布

过去 24 小时无新版本发布。

---

## 🔥 社区热点 Issues（精选 10 条）

### 1. [#1799 - 如何关闭 alt-screen 视图？](https://github.com/github/copilot-cli/issues/1799)
- **标签**：`OPEN` | `configuration` · `terminal-rendering`
- **互动**：11 评论 · 7 👍
- **看点**：新版 alt-screen 模式引发大量兼容性争议，社区要求增加可关闭开关。这是当前 **terminal-rendering** 方向最持续的反馈源，多个新 issue（#4009、#4014）都源于此变更。

### 2. [#1504 - 自定义主题支持](https://github.com/github/copilot-cli/issues/1504)
- **标签**：`OPEN` | `theming-accessibility`
- **互动**：7 评论 · **20 👍**（本周期最高点赞）
- **看点**：社区强烈呼声，希望通过 JSON 文件支持可分享的自定义主题，对应 `/theme` 命令下的"创建自定义"选项。

### 3. [#3997 - Copilot Web：模型 "gpt-5.3-codex" 不可用](https://github.com/github/copilot-cli/issues/3997)
- **标签**：`OPEN` | `triage`
- **互动**：9 评论 · 0 👍
- **看点**：会话创建直接报错 `-32603`，影响所有 agent 模式用户。属于 **后端模型可用性事故**，需平台侧协调修复。

### 4. [#4026 - Copilot CLI 在 Windows 反复崩溃（自 2026-05 起未解决）](https://github.com/github/copilot-cli/issues/4026)
- **标签**：`OPEN` | `triage`
- **互动**：0 评论 · 0 👍
- **看点**：横跨 v1.0.15 → v1.0.53 四个版本均复现，跨版本 crash 是 **稳定性红旗**。建议优先关注。

### 5. [#4017 - MCP OAuth：非第一方 HTTP 服务器认证静默失败](https://github.com/github/copilot-cli/issues/4017)
- **标签**：`OPEN` | `authentication` · `mcp`
- **互动**：0 评论 · 1 👍
- **看点**：Copilot Desktop 远程 MCP（Atlassian、incident.io）取消 host-token 后未弹出浏览器流程，**既无错误也无 UI 反馈**，直接影响 MCP 生态落地。

### 6. [#1112 - `/login` 在 VS Code Dev Container 中挂起（已关闭）](https://github.com/github/copilot-cli/issues/1112)
- **标签**：`CLOSED` | `more-info-needed`
- **互动**：8 评论 · 2 👍
- **看点**：常见于 WSL2 + Debian 12 容器环境，device code 已授权但 CLI 不推进。已关闭但复现路径明确，社区需跟进验证是否真正修复。

### 7. [#4019 - 内置 web_fetch 不支持 HTTP 代理](https://github.com/github/copilot-cli/issues/4019)
- **标签**：`OPEN` | `triage`
- **互动**：2 评论
- **看点**：企业内网用户核心痛点，`/research` 与 web 抓取在强代理环境下完全不可用，**影响 Copilot CLI 进入企业场景**。

### 8. [#4024 - Voice 模式：所有 ASR 模型静默返回空转写](https://github.com/github/copilot-cli/issues/4024)
- **标签**：`OPEN` | `triage`
- **看点**：Foundry Local Core 的 MultiModalProcessor 路由 bug，三个 nemotron 模型（streaming / streaming-0.6b / speech-streaming）全部失败。Voice 功能实际不可用。

### 9. [#2709 - 插件安装未将 `.mcp.json` 合并到 `~/.copilot/mcp-config.json`（已关闭）](https://github.com/github/copilot-cli/issues/2709)
- **标签**：`CLOSED` | `plugins` · `mcp`
- **看点**：插件自带的 MCP 服务器全部失效，是 **插件体系可用性的关键 bug**，已关闭需确认修复版是否发布。

### 10. [#4016 - BYOK 在 `--acp` 模式下被拒绝（1.0.61–1.0.68 回归）](https://github.com/github/copilot-cli/issues/4016)
- **标签**：`OPEN` | `authentication` · `non-interactive` · `models`
- **看点**：`copilot -p` 可用、`copilot --acp --stdio` 仍报 `-32000 Authentication required`，与历史 issue #3048、#3902 同类问题再次回归。

---

## 🔧 重要 PR 进展

过去 24 小时无 PR 更新。

---

## 📈 功能需求趋势

从 30 条 issue 中提炼出的社区关注方向：

| 方向 | 代表 Issue | 热度 |
|---|---|---|
| **TUI / 终端渲染优化** | #1799、#4009、#4014、#4022 | 🔥🔥🔥🔥 |
| **MCP 生态完善**（OAuth、pagination、插件合并） | #4017、#4006、#2709、#4021 | 🔥🔥🔥🔥 |
| **BYOK / 自定义模型支持** | #4012、#4016 | 🔥🔥🔥 |
| **主题与可访问性**（自定义主题、scroll 速度） | #1504、#4015、#4018 | 🔥🔥🔥 |
| **非交互 / Headless 模式** | #4011、#4023 | 🔥🔥 |
| **企业网络（HTTP 代理）兼容** | #4019 | 🔥🔥 |
| **新模型接入与稳定性**（gpt-5.3-codex、voice ASR） | #3997、#4024 | 🔥🔥 |

> **趋势判断**：TUI 渲染与 MCP 兼容性是当前两大瓶颈，直接影响日常可用性；BYOK 与企业代理支持是 **Copilot CLI 进入生产环境** 的关键门槛。

---

## 💬 开发者关注点与痛点

### 🔴 高频痛点
1. **TUI 操作破坏既有终端习惯**：alt-screen 强制启用导致无法关闭、滚动条字符污染复制结果、`/mcp add` 渲染错乱——开发者对"侵入式 TUI"敏感度极高。
2. **稳定性债**：Windows 平台跨版本 crash（#4026）持续两个多月无明确修复版本。
3. **跨项目 session 隔离缺失**：#4025 揭示 `~/.copilot/session-state.json` 全局共享，"what did we work on?" 召回结果污染——**多项目开发者体验直接受损**。

### 🟡 体验类摩擦
- **IDE 自动连接状态误判**：#4020 报告 fork/close 后错误提示"已被其他客户端占用"，无法 auto-connect。
- **剪贴板行为不一致**：#4010 中无 Shift 键的鼠标选择也会触发"Copied to clipboard"提示，造成误操作。
- **macOS 粘贴兼容性**：#4013 中 Ctrl+V 对原始图片数据（如 Preview/SnagIt）无效，仅文件拖拽可用。

### 🟢 活跃建设性需求
- **可分享主题 / JSON 配置** 反映社区希望 CLI **从工具向平台演进**。
- **`/init`、`/mcp show` 等命令的非交互化**（#4011、#3829）表明自动化场景需求增长，CI/CD 与脚本化使用正在成为核心使用模式。

---

> 📊 **日报小结**：今日社区信号集中于 **TUI 渲染回归** 与 **MCP 生态落地最后一公里**。建议关注 #1799、#4026、#4017 三条 issue 的处理进度，它们分别代表体验、稳定性、生态扩展三个最关键维度。

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

<think>Let me analyze the GitHub data for OpenCode (anomalyco/opencode) on 2026-07-04 and generate a comprehensive daily report in Chinese.

Key observations from the data:

**Releases**: None in the past 24 hours - this section can be omitted.

**Issues**: 50 total, showing 30 most commented. Most are CLOSED, meaning they've been resolved. There are 2 OPEN issues:
- #35265 [OPEN] ResourceExhausted: Worker local total request limit reached
- #34468 [OPEN] Perplexity API stops working with "invalid request" error

Top issues by comment count and importance:
1. #23928 - AI responses cut off by < or <= operators (27 comments, 3 thumbs up) - significant bug
2. #5182 - TUI as an ACP Client (11 comments, 22 thumbs up) - highly requested feature
3. #13819 - Deno runtime discussion (9 comments, 4 thumbs up) - architectural discussion
4. #24559 - 9Router context window percentage (9 comments, 2 thumbs up)
5. #19196 - Web UI sessions disappearing (7 comments)
6. #21241 - Desktop blank screen on macOS (6 comments)
7. #4317 - generic /compact command, auto-compaction (6 comments, 6 thumbs up)
8. #25515 - OpenCode ignoring deny permissions (6 comments)
9. #14842 - OpenCode stops generation after tool call (5 comments, 4 thumbs up)
10. #20452 - Java LSP regression in 1.3.13 (5 comments)
11. #23035 - Restrict skill discovery directories (5 comments)
12. #35265 [OPEN] - ResourceExhausted error (4 comments)
13. #25692 - Shell completion slow (4 comments)
14. #18100 - Subagents infinite recursion (4 comments, 5 thumbs up)
15. #25187 - Sub-agents hang on context overflow (4 comments)

**PRs**: 50 total, showing 20. Most are recent (created 2026-07-04). 
Key PRs:
1. #35257 - fix(desktop): match rounded window background
2. #35270 [CLOSED] - stabilize esm shim injection
3. #35272 - refactor(schema): simplify session fragment state
4. #35271 - test(core): release shell test locations
5. #35269 - fix(app): hydrate timeline message parents
6. #35266 [CLOSED] - delay initial tab preview
7. #35268 - fix(opencode): settle pending tool errors
8. #35267 - fix(core): wait for initial catalog readiness
9. #35264 [CLOSED] - tolerate minimal FSWatcher typings
10. #35259 - feat(desktop): add close-to-tray behavior
11. #29217 - feat(tui): Add inline $skill invocations
12. #35262 - fix(tui): reconcile session state after reconnect
13. #35263 [CLOSED] - fix(tui): improve MCP error details
14. #35247 [CLOSED] - feat(tui): compact shell progress output
15. #35235 [CLOSED] - refactor(core): step ledger and classified settlement
16. #35232 - feat(core): wire execute tool for v2 mcp
17. #35222 - fix: surface task_id in interrupted tool error
18. #35075 - docs: add oh-my-loop to ecosystem
19. #35249 [CLOSED] - fix(app): restore unfocused composer typing
20. #35237 - feat(console): enforce 10mb request body limit on zen api

**Feature Trends** from Issues:
- ACP (Agent Client Protocol) support - highly requested (#5182)
- TUI improvements and customization
- Skills system enhancements (#29217 - $skill inline invocations, #23035 - restricted discovery)
- Compaction features (#4317)
- Permission/deny controls (#25515, #25089)
- Deno runtime support discussion (#13819)
- Desktop app stability (multiple issues)
- Sub-agent management (recursion limits, context overflow handling - #18100, #25187)
- Project folder renaming with session persistence (#25625)
- Custom skill directories

**Developer Pain Points**:
- Response cut-off issues with certain operators
- Session disappearance in Web UI
- Desktop app instability (blank screens, crashes on exit)
- Java LSP regression
- Context window tracking not working with some providers
- Rate limiting issues with Worker
- Permissions not being respected
- Tool call failures after model issues

Let me write the report in Chinese now.</think>

# OpenCode 社区动态日报 · 2026-07-04

---

## 📌 今日速览

今天是 OpenCode 仓库非常活跃的一天，**过去 24 小时内共合入/更新 50 条 PR、关闭了数十个历史积压 Issue**，社区反馈的多个长期痛点（如 AI 响应截断、TUI 慢、Desktop 黑屏、SubAgent 递归等）陆续得到关闭。开发主线集中在 **桌面端稳定性修复、V2 Runner 重构、TUI/Shell 体验打磨**。两个尚未解决的 OPEN Issue（Worker 限流、Perplexity API 报错）值得持续关注。

---

## 🚀 版本发布

过去 24 小时内无新版本发布。

---

## 🔥 社区热点 Issues（Top 10）

1. **[#23928](https://github.com/anomalyco/opencode/issues/23928)** — `<` 或 `<=` 运算符导致 AI 响应被截断
   长期存在的输出截断 Bug，追踪到 prompt 解析问题。评论数最多（27），3 个 👍，已关闭。

2. **[#5182](https://github.com/anomalyco/opencode/issues/5182)** — [FEATURE] TUI 作为 ACP Client
   高呼声需求（22 👍），希望让 OpenCode TUI 作为 Agent Client Protocol 客户端使用，扩展性极强，已关闭。

3. **[#4317](https://github.com/anomalyco/opencode/issues/4317)** — 通用 `/compact` 命令、自动压缩、分支对话
   借鉴 Codex 的 conversation 压缩机制（6 👍），是上下文管理路线的关键提案，已关闭。

4. **[#13819](https://github.com/anomalyco/opencode/issues/13819)** — Deno 作为 Bun 的替代/补充运行时
   围绕 Deno 2.x 已实现 npm 全兼容这一背景展开架构讨论（4 👍），涉及安全、部署灵活性，已关闭。

5. **[#24559](https://github.com/anomalyco/opencode/issues/24559)** — 9Router 上下文窗口百分比始终为 0%
   Provider 适配层面的 UI 显示问题，影响用户判断 token 余量，已关闭。

6. **[#21241](https://github.com/anomalyco/opencode/issues/21241)** — OpenCode Desktop macOS 26.3.1 启动白屏
   Desktop 端 M3 Mac 上的高优先级稳定性问题，已关闭。

7. **[#18100](https://github.com/anomalyco/opencode/issues/18100)** — SubAgent 通过 Task 工具无限递归（无最大深度限制）
   严重资源浪费问题（5 👍），与 #25187 一起推动了 SubAgent 治理，已关闭。

8. **[#25515](https://github.com/anomalyco/opencode/issues/25515)** — `deny` 权限被忽略
   Plan 模式下 Agent 直接创建 todo.md 而非更新计划——权限执行链路存在绕过，已关闭。

9. **[#20452](https://github.com/anomalyco/opencode/issues/20452)** — Java LSP (jdtls) 在 1.3.13 失效（回归）
   版本回归 Bug，影响 Java 开发者核心 IDE 体验，已关闭。

10. **[#35265](https://github.com/anomalyco/opencode/issues/35265)** — [OPEN] `ResourceExhausted: Worker local total request limit reached`
    当前仍开放的限流错误，多名用户反映，建议关注后续合并的限流插件方案。

> 另可留意：[#34468](https://github.com/anomalyco/opencode/issues/34468) Perplexity API 报错（**OPEN**）、[#19196](https://github.com/anomalyco/opencode/issues/19196) Web UI 会话无故消失（已关闭）、[#14842](https://github.com/anomalyco/opencode/issues/14842) Tool call 后停止生成（已关闭）。

---

## 🛠️ 重要 PR 进展（Top 10）

1. **[#35272](https://github.com/anomalyco/opencode/pull/35272)** — `refactor(schema): simplify session fragment state`
   关闭 #35019。移除 session 事件中的 `textID`/`reasoningID`，强制单一打开 text/reasoning 流，V2 assistant fragment 重构核心 PR（@kitlangton）。

2. **[#35267](https://github.com/anomalyco/opencode/pull/35267)** — `fix(core): wait for initial catalog readiness`
   解决首次会话模型选择时的就绪竞态：catalog 发现不阻塞 Location/TUI 启动，但会话模型选择安全等待。

3. **[#35232](https://github.com/anomalyco/opencode/pull/35232)** — `feat(core): wire execute tool for v2 mcp`
   V2 中默认通过 CodeMode 暴露 MCP 工具（可通过 `OPENCODE_CODE_MODE=false` 切回直连），并加入子调用授权（@rekram1-node）。

4. **[#29217](https://github.com/anomalyco/opencode/pull/29217)** — `feat(tui): Add inline $skill invocations`
   支持在 prompt composer 中键入 `$` 唤起 skill 自动补全并以 pill 形式展示，关闭了 5 个长尾 skill 集成工单（@jjdubski）。

5. **[#35262](https://github.com/anomalyco/opencode/pull/35262)** — `fix(tui): reconcile session state after reconnect`
   TUI 重连到新 daemon 后清理过期 session 状态，重排队列 prompt，抑制 "loading" 假死（@kitlangton）。

6. **[#35268](https://github.com/anomalyco/opencode/pull/35268)** — `fix(opencode): settle pending tool errors`
   修 AI SDK 在 `tool-error` 先于 `tool-call` 发生时把真实错误替换为 `Tool execution aborted` 的问题，新增 processor 回归测试。

7. **[#35222](https://github.com/anomalyco/opencode/pull/35222)** — `fix: surface task_id in interrupted tool error text for LLM resume`
   在子 Agent abort 错误文本里暴露 `task_id`，让父 Agent 可通过 Task 工具的该参数 resume 被中止的子任务（关联 #35177，@flaxodev）。

8. **[#35259](https://github.com/anomalyco/opencode/pull/35259)** — `feat(desktop): add close-to-tray behavior`
   关闭最后一个 Desktop 窗口时隐藏到托盘而非退出，保留后台任务（@SOSANA，关联 #27463/#18134/#26666）。

9. **[#35257](https://github.com/anomalyco/opencode/pull/35257)** — `fix(desktop): match rounded window background`
   同步 Electron 原生窗口背景与 OC-2 深色主题，圆角 Windows 角落保持深色，并新增 Playwright 无头回归（@Hona）。

10. **[#35237](https://github.com/anomalyco/opencode/pull/35237)** — `feat(console): enforce 10MB request body limit on zen api`
    Zen API 请求体上限 10MB，先按 content-length 拒绝，再用流式 byte count 兜底（防 chunked 绕过，@StarpTech）。

> 其余关注：[#35235](https://github.com/anomalyco/opencode/pull/35235) V2 runner step-ledger 与 settlement 重构（已关闭，零测试逻辑变更）、[#35247](https://github.com/anomalyco/opencode/pull/35247) TUI 压缩 shell 进度输出（已关闭）、[#35269](https://github.com/anomalyco/opencode/pull/35269) App 时间线消息父级 hydrate（@Hona）、[#35271](https://github.com/anomalyco/opencode/pull/35271) Shell 测试 Location 释放修复（@kitlangton）。

---

## 📈 功能需求趋势

从过去 24 小时关闭的 Issue 综合提炼，社区关注方向呈以下分布：

| 方向 | 代表 Issue | 热度 |
| --- | --- | --- |
| **协议化/互操作性** | [#5182](https://github.com/anomalyco/opencode/issues/5182) ACP Client | ⭐⭐⭐ |
| **Skills 系统增强** | [#23035](https://github.com/anomalyco/opencode/issues/23035)、[#25686](https://github.com/anomalyco/opencode/issues/25686)、[#29217](https://github.com/anomalyco/opencode/pull/29217) | ⭐⭐⭐ |
| **会话上下文/压缩** | [#4317](https://github.com/anomalyco/opencode/issues/4317) `/compact` & fork-aware | ⭐⭐⭐ |
| **SubAgent 治理** | [#18100](https://github.com/anomalyco/opencode/issues/18100) 递归深度、[#25187](https://github.com/anomalyco/opencode/issues/25187) overflow hang | ⭐⭐⭐ |
| **权限与安全** | [#25515](https://github.com/anomalyco/opencode/issues/25515) deny 被忽略、[#25089](https://github.com/anomalyco/opencode/issues/25089) 可编辑 allow 规则 | ⭐⭐ |
| **运行时生态** | [#13819](https://github.com/anomalyco/opencode/issues/13819) Deno | ⭐⭐ |
| **Desktop UX** | 多项启动/退出/安装崩溃（[#21241](https://github.com/anomalyco/opencode/issues/21241)、[#25691](https://github.com/anomalyco/opencode/issues/25691)、[#25651](https://github.com/anomalyco/opencode/issues/25651)） | ⭐⭐ |
| **项目持久化** | [#25625](https://github.com/anomalyco/opencode/issues/25625) 重命名/移动项目保留会话 | ⭐⭐ |
| **Markdown / UI 渲染** | [#25116](https://github.com/anomalyco/opencode/issues/25116) `<hr>` 渲染 | ⭐ |

**关键信号**：社区正在从"能不能跑"迈向"如何更可靠地长跑"——核心诉求集中在 SubAgent 治理、会话可恢复、配置可控（技能目录/权限）和跨运行时/协议互操作。

---

## 💡 开发者关注点（高频痛点）

1. **AI 输出截断与解析鲁棒性**：`<`/`<=`、`<tool_calls>` 等字面量污染 reasoning，导致后续 JSON 解析失败（[#23928](https://github.com/anomalyco/opencode/issues/23928)、[#25644](https://github.com/anomalyco/opencode/issues/25644)）。
2. **Desktop 客户端稳定性**：macOS 26 黑屏、Linux deb 依赖 `libgtk-3-0`（Ubuntu 24.04 需 `…0t64`）、退出时崩溃 cmd.exe 等问题密集出现（[#21241](https://github.com/anomalyco/opencode/issues/21241)、[#25651](https://github.com/anomalyco/opencode/issues/25651)、[#25691](https://github.com/anomalyco/opencode/issues/25691)、[#25578](https://github.com/anomalyco/opencode/issues/25578)）。
3. **SubAgent "不可观察"**:无递归上限、上下文溢出后静默挂起、无法 resume 中止任务——父 Agent 经常"等几天"才能发现（[#18100](https://github.com/anomalyco/opencode/issues/18100)、[#25187](https://github.com/anomalyco/opencode/issues/25187)，已被 PR #35222 推进）。
4. **Provider 适配矩阵**：OpenAI OAuth 劫持直连 key（[#18862](https://github.com/anomalyco/opencode/issues/18862)）、9Router 不上报 context 百分比（[#24559](https://github.com/anomalyco/opencode/issues/24559)）、Perplexity 报错（[#34468](https://github.com/anomalyco/opencode/issues/34468) OPEN）——多 Provider 共存的稳健性仍是工作重点。
5. **权限与可审计性**：`deny` 规则绕过（[#25515](https://github.com/anomalyco/opencode/issues/25515)）、"Allow always" 模式无法二次编辑（[#25089](https://github.com/anomalyco/opencode/issues/25089)）、Windows 企业环境 symlink 把 `<diffs-container>` ambient 退化（[#25564](https://github.com/anomalyco/opencode/issues/25564)）。
6. **Skills 发现不可控**：默认扫描 6 个目录且无法裁剪（[#23035](https://github.com/anomalyco/opencode/issues/23035)），REST API 会话只加载 user 级 skills（[#25686](https://github.com/anomalyco/opencode/issues/25686)）。
7. **SSE 流可靠性**：长任务 /global/event 断连后丢失事件，且未实现 `Last-Event-ID`（[#25657](https://github.com/anomalyco/opencode/issues/25657)）。
8. **Shell/TUI 启动开销**：tab completion 走完整 CLI 启动路径导致明显卡顿（[#25692](https://github.com/anomalyco/opencode/issues/25692)），本日报已有 PR [#35247](https://github.com/anomalyco/opencode/pull/35247) 从 shell 进度方向缓解。
9. **限流/反滥用**：Worker local request limit 触发 #35265（仍 OPEN），相关讨论中已有人提交 rate-limiter 插件代码，社区期待官方收敛。
10. **文档准确性**：README 错误声称 Claude Code 没有 LSP 支持（[#25639](https://github.com/anomalyco/opencode/issues/25639)），Desktop 模式下 system prompt 仍写"CLI tool"（[#25617](https://github.com/anomalyco/opencode/issues/25617)）——这些细节会影响用户对产品的第一印象。

---

> 📎 本日报数据基于 `github.com/anomalyco/opencode` 仓库过去 24 小时（2026-07-03 → 2026-07-04）的 Issue/PR 更新。完整列表请参考对应 GitHub 链接。

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

<think>Let me analyze the GitHub data for Qwen Code community activity on 2026-07-04 and generate a comprehensive daily report in Chinese.

Key observations:
1. There are 2 releases today: v0.19.6-nightly and v0.19.6, plus cua-driver-rs v0.7.0
2. 29 issues updated in the past 24 hours
3. 50 PRs updated in the past 24 hours

Let me identify the most important items:

**Releases:**
- v0.19.6-nightly.20260704 - fix(triage) improvements
- v0.19.6 - macOS seat fix, web-shell session-switch jank fix
- cua-driver-rs v0.7.0 - relative coordinate fork

**Top Issues (by comments and importance):**
1. #6195 - Vision bridge model UI support (6 comments)
2. #6144 - Incorrect context window calculation (6 comments, 1 👍)
3. #6218 - 淘宝镜像源未更新 (5 comments)
4. #5942 - Anthropic provider cache misses (4 comments)
5. #4421 - debug txt 本地诊断质量 (4 comments)
6. #3804 - AskUserQuestion empty response (4 comments)
7. #6281 - Qwen Autofix branch switch issue (3 comments)
8. #5936 - Claude Chrome extension architecture research (3 comments)
9. #6265 - tool_search KV-cache invalidation (3 comments)
10. #6264 - /review skill high token consumption (3 comments)
11. #5894 - Edit tool result summary appended repeatedly (3 comments)
12. #5939 - max_tokens escalation optimization (3 comments)
13. #6290 - QWEN_CODE_MAX_BACKGROUND_AGENTS not limiting Explorer (2 comments)
14. #6289 - Attached files not treated as read (2 comments)
15. #6230 - Quickpick dropdowns lose focus (2 comments)
16. #6283 - settings.env values shadowed (2 comments)
17. #6252 - daemon status dashboard (2 comments)
18. #6251 - OAuth 504 Gateway Timeout (2 comments)
19. #6249 - Streaming tool calls with empty arguments (P1, 2 comments)
20. #6246 - qwen_code can't recognize its own process (2 comments)
21. #6244 - Extension capability changes not communicated (2 comments)
22. #6167 - Recurring cron/loop job expiration (2 comments)
23. #6231 - npm package size tracking (2 comments)
24. #6228 - web-shell chat bubble wrap (2 comments)
25. #6121 - glob prune ignored directories (1 comment)
26. #5649 - macOS audio prebuild artifact naming (1 comment)
27. #6282 - transform_data subprocess isolation (P1, security, 1 comment)
28. #6199 - VSCode companion release failure (P1, 1 comment)
29. #6237 - Plan Mode Content Leakage (1 comment)

**Top PRs:**
1. #6293 - Web-shell session management (wenshao)
2. #6292 - ACP per-session settings
3. #6204 - QQ Bot streaming infrastructure
4. #6284 - Fix 401 after API key change
5. #6224 - WeCom intelligent robot channel
6. #6278 - Multi-folder workspaces
7. #6240 - Legacy OpenAI function calls
8. #6242 - Web-shell custom @ mention panel
9. #6274 - VSCode auth quick inputs
10. #6294/#6291 - Web-shell theme color fix
11. #6277 - Improve debug txt diagnostics
12. #6287 - Channel loop tools
13. #6288 - Request timeout 0 handling
14. #6273 - Model fallback chain
15. #6123 - glob prune ignored directories
16. #5953 - LSP server hot reload
17. #5780 - qwen update command
18. #6232 - Compact echarts full data blocks
19. #6263 - Daemon NDJSON optimization

**Trends:**
- Performance/caching (KV-cache, prompt cache, max_tokens)
- Web-shell UI improvements
- Authentication (API key, OAuth)
- Channels integration (QQ Bot, WeCom)
- IDE integration (VSCode, multi-folder)
- Security/sandbox (transform_data)
- Diagnostics (debug txt)
- Model fallback/reliability

Let me write a comprehensive Chinese report.</think>

# Qwen Code 社区动态日报
**日期：2026-07-04**

---

## 📌 今日速览

今日 Qwen Code 仓库活跃度极高，共发布 2 个版本（v0.19.6 正式版及 nightly）和 1 个子模块更新（cua-driver-rs v0.7.0），同时涌入 50+ PR 与 29 条 Issue。社区关注焦点集中在 **Prompt Cache 失效问题**、**Web Shell UI 改进**、**多模型/多通道扩展**（QQ Bot、企业微信）以及 **认证/会话稳定性**。P1 级安全与稳定性 Issue（`transform_data` 沙箱逃逸、流式工具调用空参丢失）需要重点跟进。

---

## 🚀 版本发布

### v0.19.6（正式版）
- **fix(web-shell)**: 优化移动端会话切换卡顿，引入 memoized timeline signature 与 replay-first 调度策略（[#6183](https://github.com/QwenLM/qwen-code/pull/6183)）
- **fix**: 修复 macOS 安装路径定位问题

### v0.19.6-nightly.20260704.5dc2e1501
- **fix(triage)**: 强化 PR 准入门槛，新增批量检测、问题存在性校验、危险模式识别（[@pomelo-nwu](https://github.com/QwenLM/qwen-code/pull/...)）

### cua-driver-rs v0.7.0
- 新增 **相对坐标支持**（fork from vendor）
- macOS：通用二进制 + 公证签名 + `QwenCuaDriver.app`
- Linux / Windows：x86_64 + arm64 未签名构建

---

## 🔥 社区热点 Issues（精选 10 条）

| # | Issue | 主题 | 评论 / 👍 | 重要性 |
|---|-------|------|-----------|--------|
| [#5942](https://github.com/QwenLM/qwen-code/issues/5942) | **Anthropic provider: prompt cache 命中率低** | 路由到 Anthropic 协议后端时，side-query 与 conversation breakpoint 导致缓存频繁失效，相同后端下 Claude Code 命中率 100% 而 Qwen Code 远低 | 4 / 0 | ⭐⭐⭐ 涉及成本控制 |
| [#6144](https://github.com/QwenLM/qwen-code/issues/6144) | **Qwen3-Coder 上下文窗口计算错误** | 用户配置 65536 ctx-size，但 qwen-code 错误推断可用上下文，影响实际可用长度 | 6 / 1 | ⭐⭐⭐ 阻塞开发 |
| [#6282](https://github.com/QwenLM/qwen-code/issues/6282) | **[P1] transform_data 不强制子进程隔离** | transform_data 文档声称沙箱隔离，但实际未应用文件系统/网络隔离，存在安全风险 | 1 / 0 | 🔴 **P1 安全** |
| [#6249](https://github.com/QwenLM/qwen-code/issues/6249) | **[P1] 流式工具调用空参被静默丢弃** | OpenAI 兼容提供者流式推送空 `arguments` 字符串时被丢弃，引发"empty response text"重试循环 | 2 / 0 | 🔴 **P1 稳定性** |
| [#6195](https://github.com/QwenLM/qwen-code/issues/6195) | **daemon UI 支持选择 vision bridge 模型** | CLI 已支持 `/model --vision`，daemon UI 需补齐同等选择能力并持久化 | 6 / 0 | ⭐⭐ 功能完善 |
| [#6218](https://github.com/QwenLM/qwen-code/issues/6218) | **淘宝镜像源滞后三个版本** | npmmirror 未同步最新版本，影响国内安装体验 | 5 / 0 | ⭐⭐ 国内用户关切 |
| [#6265](https://github.com/QwenLM/qwen-code/issues/6265) | **`tool_search` 每次延迟加载都作废 KV-cache** | `setTools` + 新 system prompt 推送破坏服务端 KV 缓存，严重拖慢性能 | 3 / 0 | ⭐⭐ 性能瓶颈 |
| [#6264](https://github.com/QwenLM/qwen-code/issues/6264) | **`/review` skill 消耗大量 token** | 体验良好但 token 消耗异常高，需要优化 | 3 / 0 | ⭐⭐ 用户体验 |
| [#6283](https://github.com/QwenLM/qwen-code/issues/6283) | **settings.env 被 .env 与空环境变量遮蔽** | API key 重启失效：`.env` 先于 `settings.env` 加载并覆盖 | 2 / 0 | ⭐⭐ 认证可靠性 |
| [#6237](https://github.com/QwenLM/qwen-code/issues/6237) | **Plan Mode 内容泄漏到后续回复** | `exit_plan_mode` 提交的计划内容在后续助手回复中被泄露输出 | 1 / 0 | ⭐⭐ 信息隔离 |

---

## 🛠️ 重要 PR 进展（精选 10 条）

### 性能与可靠性
- **[#6273](https://github.com/QwenLM/qwen-code/pull/6273)** `feat(core): 模型回退链 — 过载时自动切换备用模型`（[@yiliang114](https://github.com/yiliang114)）— 配置主备模型链，遇容量/可用性错误时按序切换并保留每模型重试逻辑。
- **[#6123](https://github.com/QwenLM/qwen-code/pull/6123)** `perf(glob): 遍历过程中裁剪被忽略目录`（[@minmax](https://github.com/minmax)）— 通过 `ignore` 对象在遍历时跳过 `node_modules` 等目录，避免事后过滤。
- **[#6263](https://github.com/QwenLM/qwen-code/pull/6263)** `fix(serve): 优化 daemon NDJSON 流处理` — 用增量扫描器替换全缓冲切分，已 CLOSED。
- **[#6288](https://github.com/QwenLM/qwen-code/pull/6288)** `fix(core): request timeout=0 视为禁用而非立即中断`（[@Nas01010101](https://github.com/Nas01010101)）

### Web Shell & UI
- **[#6293](https://github.com/QwenLM/qwen-code/pull/6293)** `feat(web-shell): 侧边栏会话管理（归档/取消归档/删除）`（[@wenshao](https://github.com/wenshao)）— 每行新增 Archive 快捷按钮 + 「…」溢出菜单（Rename/Archive/Delete），并支持可折叠的 Archived 区域。
- **[#6242](https://github.com/QwenLM/qwen-code/pull/6242)** `feat(web-shell): 自定义 @ 提及面板`（[@ytahdn](https://github.com/ytahdn)）— 多层级引用面板：分类 → 文件 / 扩展 / MCP 资源，支持搜索。
- **[#6274](https://github.com/QwenLM/qwen-code/pull/6274)** `fix(vscode): auth 快捷输入在失焦时保持打开`（[@barry166](https://github.com/barry166)）— 修复 #6230，已 CLOSED。

### 通道与生态
- **[#6224](https://github.com/QwenLM/qwen-code/pull/6224)** `feat(channels): 新增 WeCom 智能机器人通道`（[@qqqys](https://github.com/qqqys)）— 重写 WeCom 通道，使用官方 `@wecom/aibot-node-sdk` WebSocket，免去自建回调。
- **[#6204](https://github.com/QwenLM/qwen-code/pull/6204)** `fix(qqbot): 流式空闲冲刷 + 工具调用与过期回调保护`（[@Eric-GoodBoy-Tech](https://github.com/Eric-GoodBoy-Tech)）— 2s 空闲合并、工具前即时冲刷、解决多轮竞态。
- **[#6287](https://github.com/QwenLM/qwen-code/pull/6287)** `[codex] 主动通道循环工具`（[@qqqys](https://github.com/qqqys)）— 通过 MCP 让通道会话创建/列出/取消循环提醒。

### IDE / 工程化
- **[#6278](https://github.com/QwenLM/qwen-code/pull/6278)** `feat(cli): 多文件夹工作区文件边界校验` — 支持 VSCode multi-folder workspace。
- **[#6284](https://github.com/QwenLM/qwen-code/pull/6284)** `fix(auth): 防止 API key 变更后持续 401`（[@yiliang114](https://github.com/yiliang114)）— 三种失效模式统一修复：空字符串 env、缓存未清、原值冲突。
- **[#6240](https://github.com/QwenLM/qwen-code/pull/6240)** `fix(core): 保留遗留 OpenAI function_call`（[@VectorPeak](https://github.com/VectorPeak)）— OpenAI 兼容响应正确转换为 Gemini `functionCall`。

---

## 📈 功能需求趋势

从近 24 小时 29 条 Issue 提炼，社区关注热度排行如下：

1. **🔐 认证与可靠性**（热度最高）
   - OAuth 504 故障（[#6251](https://github.com/QwenLM/qwen-code/issues/6251)）、API key 持久化与冲突（[#6283](https://github.com/QwenLM/qwen-code/issues/6283)）、VSCode auth quickpick 失焦（[#6230](https://github.com/QwenLM/qwen-code/issues/6230)）

2. **⚡ 性能与缓存**
   - Anthropic prompt cache（[#5942](https://github.com/QwenLM/qwen-code/issues/5942)）、`tool_search` KV-cache（[#6265](https://github.com/QwenLM/qwen-code/issues/6265)）、`/review` token 消耗（[#6264](https://github.com/QwenLM/qwen-code/issues/6264)）、`max_tokens` no-op 升级（[#5939](https://github.com/QwenLM/qwen-code/issues/5939)）

3. **🖥️ Web Shell & Daemon 可视化**
   - 会话管理（[#6293 PR](https://github.com/QwenLM/qwen-code/pull/6293)）、@ 提及面板升级（[#6242 PR](https://github.com/QwenLM/qwen-code/pull/6242)）、daemon 状态仪表盘（[#6252](https://github.com/QwenLM/qwen-code/issues/6252)）、vision bridge 选择 UI（[#6195](https://github.com/QwenLM/qwen-code/issues/6195)）

4. **🤖 多通道与生态集成**
   - QQ Bot、企业微信、Chrome 扩展调研（[#5936](https://github.com/QwenLM/qwen-code/issues/5936)）、循环提醒工具（[#6287 PR](https://github.com/QwenLM/qwen-code/pull/6287)）

5. **🛡️ 安全沙箱**
   - `transform_data` 隔离失效（[#6282](https://github.com/QwenLM/qwen-code/issues/6282)）、权限/沙箱边界

6. **📦 打包与分发**
   - 国内 npm 镜像同步滞后（[#6218](https://github.com/QwenLM/qwen-code/issues/6218)）、包体积监控（[#6231](https://github.com/QwenLM/qwen-code/issues/6231)）、macOS 预构建产物命名（[#5649](https://github.com/QwenLM/qwen-code/issues/5649)）

7. **🧠 模型与诊断**
   - 上下文窗口计算错误（[#6144](https://github.com/QwenLM/qwen-code/issues/6144)）、本地 debug txt 改进（[#4421](https://github.com/QwenLM/qwen-code/issues/4421) / [#6277 PR](https://github.com/QwenLM/qwen-code/pull/6277)）、`exit_plan_mode` 内容泄漏（[#6237](https://github.com/QwenLM/qwen-code/issues/6237)）

---

## 👨‍💻 开发者关注点

根据 Issue 与 PR 反馈提炼的高频痛点：

1. **服务端缓存命中率偏低** — Anthropic 路由下与 Claude Code 对比明显，是当前最尖锐的成本与延迟痛点，社区期待按"对话边界"重构 cache 切片。
2. **认证/会话状态不稳定** — API key 切换后持续 401、OAuth 504、quickpick 失焦重填等问题在多个 Issue 中反复出现，开发者期望 `/auth` 流程的鲁棒性升级。
3. **Web Shell UI 与 Daemon 体验断层** — CLI 已有能力（如 `/model --vision`、daemon status API）尚未在 Web/IDE 端完全暴露，社区期待侧栏会话管理、模型选择面板、状态仪表盘尽快对齐。
4. **多通道触达能力** — WeCom、QQ Bot 已合并或正在合并，"channel loop"工具的出现意味着社区向"让 Qwen Code 作为后台 agent 主动触达用户"迈进。
5. **国内镜像与发行物维护** — 淘宝镜像滞后、npm 包体积超限、macOS 预构建命名清晰化等"工程分发层"问题集中爆发，需要建立 release-time 自动校验。
6. **安全沙箱边界** — `transform_data` 未应用隔离包装是 P1 漏洞，开发者期望所有"执行脚本"类工具统一接入沙箱框架。
7. **模型容灾与回退** — [#6273](https://github.com/QwenLM/qwen-code/pull/6273) PR 直接回应"主模型过载导致 session 卡死"的开发者呼声，反映出对 **默认高可用** 的强烈诉求。

---

> 📊 **数据快照**：29 Issues（11 OPEN / 18 CLOSED）、50 PRs（约 40 OPEN / 10 CLOSED）、3 Releases。今日整体节奏偏向「**稳定性修复 + Web/IDE 体验补齐 + 多通道拓展**」三线并行。

</details>

---
*本日报由 [Big Model Radar](https://github.com/96loveslife/big_model_radar) 自动生成。*
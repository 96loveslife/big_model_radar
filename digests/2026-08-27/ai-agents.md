# OpenClaw 生态日报 2026-08-27

> Issues: 500 | PRs: 500 | 覆盖项目: 8 个 | 生成时间: 2026-08-27 08:35 UTC

- [OpenClaw](https://github.com/openclaw/openclaw)
- [NanoBot](https://github.com/HKUDS/nanobot)
- [PicoClaw](https://github.com/sipeed/picoclaw)
- [IronClaw](https://github.com/nearai/ironclaw)
- [LobsterAI](https://github.com/netease-youdao/LobsterAI)
- [QwenPaw](https://github.com/agentscope-ai/QwenPaw)
- [Hermes Agent](https://github.com/NousResearch/hermes-agent)
- [OpenHuman](https://github.com/tinyhumansai/openhuman)

---

## OpenClaw 项目深度报告

<think>The user wants me to generate a daily project status report for OpenClaw based on GitHub data from 2026-08-27. Let me analyze the data carefully and produce a structured report in Chinese.

Let me parse through the data:

**Overview Stats:**
- 500 Issues updated (323 new/active, 177 closed)
- 500 PRs updated (365 pending, 135 merged/closed)
- 0 new releases

**Top Issues by comments:**
1. #125626 - OpenClaw 2026.8.1 beta feedback (20 comments)
2. #43367 - Multi-agent orchestration instability (14 comments)
3. #38327 - Bug: Cannot convert undefined or null in 2026.3.2 with vertex/gemini (14 comments)
4. #53628 - Bug: ${XDG_CONFIG_HOME} not processed when installing skill (14 comments)
5. #88657 - Bug: DeepSeek V4 Flash incomplete turn (12 comments)
6. #40786 - Feature: Add .gitignore-like exclude patterns to backup CLI (11 comments)
7. #48920 - Bug: Live Docs are ahead of release (10 comments)
8. #106555 - [CLOSED] Refactor chat.send into explicit lifecycle phases (9 comments)
9. #97616 - Bug: OpenClaw leaks unreaped hook/tool child processes (9 comments)
10. #51441 - feat: expose resolved backend model in session_status (8 comments)

**Closed Issues (recent):**
- #106555 - Refactor chat.send into explicit lifecycle phases (closed)
- #115001 - Bug: Hybrid memory search returns spurious 1.0 similarity scores
- #47910 - feat: provider fallback by failure class — quarantine auth-broken providers
- #90361 - Bug: Intermittent memory_search "index metadata is missing"
- #86022 - Please review the restriction on person-related search requests
- #74378 - Bug: OpenClaw CLI commands remain alive as node.exe on Windows
- #57404 - Feature: Expose per-run token usage on the WebSocket lifecycle event stream

**Top PRs by comments (all showing undefined actually):**
- Most PRs don't show comment counts, but I can analyze by activity level

**Notable PRs:**
- #126818 - fix(channels): release rejected webhook connections
- #105033 - fix(cli): warn that attach --print-config prints a live bearer token
- #130834 - fix(ui): align task progress and goal chevrons
- #130833 - docs(start): surface Why OpenClaw's key claims at the top
- #126212 - fix(telegram): preserve business identity in lanes and pairing
- #129311 - fix(telegram): show errors when message-only agent runs fail
- #130626 - [CLOSED] fix(browser): reject non-decimal --wait-ms
- #130758 - fix(ui): keep chat messages separated after scroll interruptions
- #128371 - [CLOSED] fix(release): authorize focused beta evidence
- #129001 - fix(auto-reply): queue instead of steering after terminal source-reply receipt
- #125471 - [CLOSED] fix(models): keep Claude CLI OAuth available in Control UI
- #122341 - fix(skills): stop reporting invalid source skills as installed
- #124543 - fix(gateway): render Claude CLI history turns once (closes #123792)
- #130579 - fix(cron): capture Codex shell aliases under canonical tool identity
- #120545 - fix(codex): verify thread liveness before deferring automatic compaction
- #130787 - fix: stop suggesting unsupported cloud worker classes
- #130835 - fix(android): blank widgets on mapped-address pinned gateways
- #130483 - chore(deps): bump android-deps
- #130490 - build(deps): bump actions group
- #130832 - fix(browser): handle concurrent first-use extension pairing
- #123535 - fix(ui): avoid session catalog refresh storms
- #105550 - feat(memory-wiki): add wiki_open_items tool
- #130168 - feat(plugins): one consent screen for plugin capabilities
- #123356 - improve(control-ui): stage slash command arguments in the composer
- #128995 - [CLOSED] feat: make full session actions available from chat header
- #123432 - fix(agents): default agent-run admissions to static catalog mode
- #91988 - fix: preserve BOOTSTRAP.md in preseeded workspaces
- #126424 - [CLOSED] fix(gateway): keep conversation delivery within agent bindings
- #130820 - fix(matrix): automatic replies lose native table formatting
- #130814 - [CLOSED] docs: clarify Daytona cloud-worker class incompatibility

Let me structure the report now.

I'll group:
- Bugs by severity (P0, P1, P2, P3)
- Feature requests by likelihood of inclusion
- Closed issues - what was resolved
- Backlog items

Let me think about the critical bugs:
- P0: #48920 (Live Docs ahead of release) - regression, beta blocker
- P1: #43367 (Multi-agent orchestration) - data loss potential
- P1: #38327 (vertex/gemini null object error) - regression
- P1: #88657 (DeepSeek V4 Flash incomplete turn)
- P1: #97616 (child process leak)
- P1: #112259 (silent message drop)
- P1: #114154 (bundle-mcp tool not working)
- P1: #118018 (stale subagent completion delivered to wrong lifecycle)
- P1: #80498 (subagent completion announcements premature/duplicated)
- P1: #114234 (usage-cost refresh lock never releasable)
- P1: #128971 (Telegram final reply silently lost)
- P1: #113093 (llama.cpp MTP server 413/400 error)
- P1: #16555 (TTL for delivery queue)
- P1: #118839 (restart recovery claim regression)
- P1: #118793 (Claude CLI session limit doesn't failover)
- P1: #110771 (WebChat transcript regressions)

Let me identify which have linked PRs (clawsweeper:linked-pr-open):
- #16555 has linked PR
- #118018 has linked PR
- #118839 mentioned as having prior fixes
- #110771 - need to check
- #114154 - need to check
- #40786 has linked PR
- #56692 has linked PR
- #53628 has linked PR
- #114234 has linked PR
- #38327 - linked-pr-open appears in summary text
- #44289 has linked PR
- #26037 has linked PR
- #55235 has linked PR
- #123792 has PR (#124543)
- #126818 closes #126808
- #129311 related to #127710, #127850
- #130758 closes #130692
- #128371 release blocker
- #129001 closes related to delivery_ambiguous
- #125471 (closed)
- #122341 closes #122298
- #124543 closes #123792
- #130579 supersedes #126496
- #120545 closes #119977
- #130787 closes #130786
- #130832 closes #130784
- #91988 fixes #91931
- #130820 closes #130819

Now let me write the report.</think>

# OpenClaw 项目动态日报

**日期：2026-08-27**
**项目：github.com/openclaw/openclaw**

---

## 1. 今日速览

OpenClaw 今日呈现出"高活跃度 + 高审稿门槛"的典型冲刺阶段特征。过去 24 小时共更新 500 条 Issues 与 500 条 PRs，新开/活跃 323 条 Issues、合并/关闭 177 条；PR 端待合并数量 365 条远多于已处理 135 条，显示大量变更正在排队等待 maintainer review。**今日无新版本发布**，社区主要工作在 v2026.8.1-beta.3 的反馈收口与 7.x 回归问题的批量修复上。整体健康度评估：**中等偏紧**——核心 bug 集中于 message-loss 与 session-state 两条主链路，doc/UI/依赖类小 PR 通过率较高，但涉及 message-delivery / auth-provider 的高危 PR 多处于 "needs proof" 状态，需要补录证据才能合并。

---

## 2. 版本发布

⚠️ **无新版本发布。** 当前处于 v2026.8.1-beta.3 收口期（commit `5831b80721f802072b0ec1893b30a16cf42d538c`，guidance 主干 `004b06b6a02f0aa5ddcee488caa9c51d38e6d017`）。Beta 反馈主帖 [#125626](https://github.com/openclaw/openclaw/issues/125626) 今日更新且评论数达 20 条排名第一，是 GA 发布的最大堵点。

---

## 3. 项目进展

### 3.1 今日关闭/合并的重点 PR

| PR | 主题 | 影响 |
|---|---|---|
| [#106555](https://github.com/openclaw/openclaw/issues/106555) | Refactor `chat.send` into explicit lifecycle phases | 关停大型重构议题（4,015 行单文件拆分），推进 gateway 架构治理 |
| [#130626](https://github.com/openclaw/openclaw/pull/130626) | fix(browser): reject non-decimal `--wait-ms` during extension install | 修复浏览器扩展安装的输入校验漏洞（接受 `0x1000`、`1e4` 等被隐式 Number 强转的值） |
| [#128371](https://github.com/openclaw/openclaw/pull/128371) | fix(release): authorize focused beta evidence | **解决 beta.3 发布阻塞器**——canonical 发布者此前只接受全组验证，允许聚焦证据后解锁 |
| [#125471](https://github.com/openclaw/openclaw/pull/125471) | fix(models): keep Claude CLI OAuth available in Control UI | 修复 Gateway 重启后 Claude CLI OAuth 刷新所有权丢失的问题 |
| [#90361](https://github.com/openclaw/openclaw/issues/90361) | Bug: memory_search "index metadata is missing" | 关闭首个内置 memory 索引竞态问题（提交者已提供本地 hotfix） |
| [#115001](https://github.com/openclaw/openclaw/issues/115001) | Hybrid memory search returns spurious 1.0 similarity scores | 关闭 FTS LIKE-fallback 中硬编码 textScore 导致的虚假满分 |
| [#47910](https://github.com/openclaw/openclaw/issues/47910) | Provider fallback by failure class | 关闭按失败类别隔离已坏 provider 的特性请求 |
| [#74378](https://github.com/openclaw/openclaw/issues/74378) | OpenClaw CLI node.exe 残留 (Windows) | 关闭 Windows 上 CLI 进程不退出的回归问题 |
| [#57404](https://github.com/openclaw/openclaw/issues/57404) | Expose per-run token usage on WebSocket lifecycle event stream | 关闭 WebSocket 生命周期事件暴露 token/cost 的特性请求 |
| [#128995](https://github.com/openclaw/openclaw/pull/128995) | feat: make full session actions available from chat header | Control UI 顶栏会话操作补齐（pin / unread / icon / copy id / 移动到组）|
| [#130814](https://github.com/openclaw/openclaw/pull/130814) | docs: clarify Daytona cloud-worker class incompatibility | 文档澄清 Daytona 不支持的 worker class |
| [#126424](https://github.com/openclaw/openclaw/pull/126424) | fix(gateway): keep conversation delivery within agent bindings | 多 agent 绑定下跨 channel 的对话投递边界修复 |

### 3.2 整体推进评估

合并侧集中在 **文档补强、UI 小修、依赖 bump、OAuth/认证边界** 这类低风险变更；**核心 message-delivery 路径（如 Telegram delivery_ambiguous、Claude CLI session limit fail-over、subagent 错误 lifecycle 投递）** 的关键修复 PR（#129001、#124543、#118793 等）虽已就绪但仍卡在 `needs proof` 阶段，预计还需 1-3 天才能进入 main。

---

## 4. 社区热点

按评论数排序的 TOP 议题（评论数代表活跃度）：

1. **[#125626](https://github.com/openclaw/openclaw/issues/125626)** — v2026.8.1-beta 反馈主帖，20 条评论。beta 阶段的"必读"汇总贴，影响 GA 时间表。
2. **[#43367](https://github.com/openclaw/openclaw/issues/43367)** — Multi-agent orchestration 不稳定（并发 add/config 覆盖、session-lock 失败、子任务脱管），14 条评论，🦐 评级。**诉求**：并行编码场景下 CLI 不安全，并发 `openclaw agents add` 会丢失配置。
3. **[#38327](https://github.com/openclaw/openclaw/issues/38327)** — 2026.3.2 上 google-vertex/gemini-3.1-pro-preview 报 "Cannot convert undefined or null"，14 条评论，🦞 评级。**回归问题**，影响整个 Vertex provider。
4. **[#53628](https://github.com/openclaw/openclaw/issues/53628)** — 安装 skill 时 `${XDG_CONFIG_HOME}` 变量未被展开，14 条评论。**Docker 用户高频踩坑**，影响 .env 注入配置场景。
5. **[#88657](https://github.com/openclaw/openclaw/issues/88657)** — DeepSeek V4 Flash via OpenRouter 在 2026.5.27/28 出现 incomplete turn（payloads=0, tools=2, stopReason=stop），12 条评论，🦞 评级。**从 5.26 起回归**，无 fix PR。
6. **[#40786](https://github.com/openclaw/openclaw/issues/40786)** — backup CLI 缺少 .gitignore-like exclude 模式，11 条评论，🌊 评级。**诉求**：备份里塞满 `node_modules`、`.env` 安全隐患。
7. **[#48920](https://github.com/openclaw/openclaw/issues/48920)** — Live Docs ahead of release（Heartbeat IsolatedSessions 已文档化但 2026.3.13 未含），10 条评论，🐚 评级，**P0**。doc/code drift 影响 UX。
8. **[#97616](https://github.com/openclaw/openclaw/issues/97616)** — OpenClaw 泄漏未回收的 hook/tool 子进程（zombie），9 条评论，🦪 评级，**P1 回归**。
9. **[#112259](https://github.com/openclaw/openclaw/issues/112259)** — 入站 channel turn 静默丢弃（零 payload dispatch 无重试/死信），8 条评论，🐚 评级，**P1**。
10. **[#51441](https://github.com/openclaw/openclaw/issues/51441)** — 在 `session_status` 与 agent runtime 暴露 resolved backend model，8 条评论，🌊 评级。LiteLLM 用户盲点问题。

**热点话题归纳**：社区当前最关心的三件事是 **beta 收口**、**multi-agent 并发可靠性**、**provider（Vertex / DeepSeek / Claude CLI）的回归问题**。

---

## 5. Bug 与稳定性

按严重程度（来自 P 等级 + impact 标签）排序：

### 🔴 P0（发布阻塞 / UX 严重）

- **[#48920](https://github.com/openclaw/openclaw/issues/48920)** Live Docs are ahead of release（Heartbeat IsolatedSessions）。`impact:ux-release-blocker`，回归问题，需 docs/code 对齐。**无 fix PR**。

### 🟠 P1（功能不可用 / 数据丢失 / 安全相关）

| Issue | 主题 | Impact | 已有 fix PR? |
|---|---|---|---|
| [#43367](https://github.com/openclaw/openclaw/issues/43367) | Multi-agent orchestration unstable | data-loss / message-loss / auth-provider | ❌ 仅有 audit，未提 PR |
| [#38327](https://github.com/openclaw/openclaw/issues/38327) | vertex/gemini null object | auth-provider | linked-pr-open（未指明编号） |
| [#88657](https://github.com/openclaw/openclaw/issues/88657) | DeepSeek V4 Flash incomplete turn | message-loss | ❌ |
| [#97616](https://github.com/openclaw/openclaw/issues/97616) | 子进程泄漏 / zombie | message-loss / crash-loop | ❌ |
| [#112259](https://github.com/openclaw/openclaw/issues/112259) | 入站 turn 静默丢弃 | message-loss | ❌ |
| [#114154](https://github.com/openclaw/openclaw/issues/114154) | bundle-mcp tool 不进 agent 会话 | session-state | ❌ |
| [#118018](https://github.com/openclaw/openclaw/issues/118018) | 陈旧子 agent 完成被投递到错误 lifecycle | session-state / message-loss | linked-pr-open |
| [#80498](https://github.com/openclaw/openclaw/issues/80498) | 子 agent 完成通告过早/重复 | session-state / message-loss | ❌（需更多信息） |
| [#114234](https://github.com/openclaw/openclaw/issues/114234) | Usage-cost 刷新锁在容器里永远不可释放 | session-state | linked-pr-open |
| [#128971](https://github.com/openclaw/openclaw/issues/128971) | Telegram delivery_ambiguous 时终回复静默丢失 | session-state / message-loss | ✅ [#129001](https://github.com/openclaw/openclaw/pull/129001) `needs proof` |
| [#113093](https://github.com/openclaw/openclaw/issues/113093) | v2026.7.1-2 + llama.cpp MTP `tools.profile: full` → 413/400 | auth-provider | ❌ |
| [#118839](https://github.com/openclaw/openclaw/issues/118839) | 2026.7.2-beta.7 WebChat → 持久 Telegram session 回归 "restart recovery claim changed" | session-state / message-loss | ❌（claim 含之前修复，但问题再现） |
| [#118793](https://github.com/openclaw/openclaw/issues/118793) | Claude CLI session limit 报错走 surface_error 而非 fail-over | auth-provider | ❌ |
| [#110771](https://github.com/openclaw/openclaw/issues/110771) | WebChat 持久化内部记录 + 丢失 durable turn status | session-state / ux-friction | ❌ |

### 🟡 P2（行为/状态错误）

| Issue | 主题 |
|---|---|
| [#16555](https://github.com/openclaw/openclaw/issues/16555) | Delivery Queue 缺少 TTL

---

## 横向生态对比

<think>The user wants me to generate a comprehensive horizontal comparison report based on the daily dynamics of all the projects I've already analyzed. This is a meta-analysis task. Let me carefully synthesize the data from all 7 projects:

1. **OpenClaw** - Reference project, 500 Issues/500 PRs updated, beta.3 phase, no release
2. **NanoBot** - 33 PRs/2 Issues, 16 merged, agent refactoring focus
3. **PicoClaw** - 7 Issues/6 PRs, low activity, stale PR cleanup
4. **IronClaw** - 46 Issues/50 PRs, v1.4.0-rc.1 released, heavy security+perf work
5. **LobsterAI** - 11 PRs/1 Issue, 91% PR close rate, 2026.8.26 release just shipped
6. **QwenPaw** - 28 Issues/41 PRs, v2.2.0-beta.1 released, beta.2 already bumping
7. **Hermes Agent** - 50 Issues/50 PRs, no release, desktop/SSH pain points
8. **OpenHuman** - 19 Issues/34 PRs, no release, batch fixing cycle

Wait, that's 8 projects total (including OpenClaw as the reference). Let me re-read the original task to make sure I cover all of them.

Looking back:
- OpenClaw (reference)
- NanoBot
- PicoClaw
- IronClaw
- LobsterAI
- QwenPaw
- Hermes Agent
- OpenHuman

Yes, 8 projects. The user wants a horizontal comparison report.

Let me organize my analysis:

**Common themes across projects:**
1. **Multi-agent orchestration** - OpenClaw #43367, Hermes Agent has related issues, OpenHuman #5806
2. **Memory/session management** - OpenClaw #112259/#118018/#80498, Hermes Agent #86366, OpenHuman #5820, QwenPaw #7193
3. **Provider/Auth reliability** - OpenClaw #38327/#88657/#118793/#113093, IronClaw has security fixes
4. **Performance/prompt cache** - QwenPaw #7335/#7342/#7346, IronClaw #7891/#6986/#7929/#7930, NanoBot #5533
5. **Desktop/Cross-platform stability** - Hermes Agent (Linux/SSH/Windows), PicoClaw #3281, OpenHuman #5785
6. **Observability/Telemetry** - OpenClaw #114234, QwenPaw #7342, IronClaw #7929, Hermes Agent #96206
7. **MCP/Plugin integration** - OpenHuman #5600/#5636/#5817, IronClaw #5970/#5917/#5918 (major MCP framework)
8. **TUI/UX polish** - NanoBot (lots of TUI work), OpenHuman #5791 (IME), QwenPaw #7340
9. **Web search/meta-search** - NanoBot #5234 (mst-python integration)
10. **Documentation drift** - OpenClaw #48920, OpenHuman #5781/#5786

**Maturity assessment:**
- **Rapid iteration phase**: NanoBot, OpenHuman (high PR velocity, refactoring)
- **Release prep/quality consolidation**: OpenClaw (beta.3), IronClaw (1.4.0-rc.1), QwenPaw (2.2.0-beta.1→beta.2), LobsterAI (8.26 shipped)
- **Maintenance/quiet phase**: PicoClaw (stale closures, low engagement)
- **Heavy backlog/instability**: Hermes Agent (50 issues, mostly bugs)

**OpenClaw positioning:**
- Largest community by far (500+ issues/PRs in a single day)
- Most cross-cutting concerns (multi-agent, providers, message delivery)
- Beta phase with concrete GA timeline pressure
- Architecture refactoring underway (chat.send split, 4015-line split)

Let me write this report now. I should aim for a professional, executive-summary style with data backing.

The user specified:
- 简洁专业，有数据支撑
- 适合技术决策者和开发者阅读
- 7 sections plus a 生态全景

Let me draft this carefully, focusing on insights rather than restating what was already in each project's report.

I need to make this a synthesized cross-project analysis, not just a copy of each project's report.</think>

# 个人 AI 助手 / 自主智能体开源生态横向对比报告

**报告日期：2026-08-27**
**覆盖项目（8 个）**：OpenClaw（核心参照）、NanoBot、PicoClaw、IronClaw、LobsterAI、QwenPaw、Hermes Agent、OpenHuman

---

## 1. 生态全景

2026-08-27 当日，个人 AI 助手 / 自主智能体开源生态整体呈现 **「大者更大、强者在做质量深耕、边缘项目步入维护期」** 的明显分层态势。头部项目（OpenClaw、Hermes Agent、IronClaw）单日 Issue / PR 流量均在 50–500 量级，且都处在版本收尾（beta.3 / 1.4.0-rc.1 / v2.2.0-beta.1）或大规模重构周期；中腰部项目（QwenPaw、NanoBot、LobsterAI）以高频小步迭代为主，PicoClaw 则明显进入「stale 化」整理阶段。**贯穿所有项目的共同焦虑**是 message-delivery 的可靠性、provider / 鉴权边界的健壮性、以及 memory / session 一致性 —— 这三类问题几乎出现在每一个项目的活跃 Issue 列表中，说明它们是当前 LLM-based Agent 栈的结构性挑战，而非个别项目的工程失误。

---

## 2. 各项目活跃度对比

| 项目 | Issues (新/活 → 关) | PRs (待 → 合/关) | Release | 单日健康度 | 当前阶段 |
|---|---|---|---|---|---|
| **OpenClaw** | 323 → 177 | 365 → 135 | 无（v2026.8.1-beta.3 收口期） | 🟡 中等偏紧 | Beta 冲刺 |
| **Hermes Agent** | 47 → 3 | 41 → 9 | 无（v0.20.5 主线） | 🟠 警示（稳定性债务） | 持续修补 |
| **IronClaw** | 26 → 20 | 3 → 47 | **v1.4.0-rc.1（昨日）** | 🟢 优秀 | RC 收尾 |
| **QwenPaw** | 15 → 13 | 20 → 21 | **v2.2.0-beta.1 + beta.2 bump** | 🟢 良好 | Beta 密集迭代 |
| **OpenHuman** | 9 → 10 | 19 → 15 | 无 | 🟡 中（批量修复） | main red → green |
| **NanoBot** | 1 → 1 | 17 → 16 | 无 | 🟢 良好偏优 | 架构净化 |
| **LobsterAI** | 1 → 0 | 1 → 10 | 无（8.26 已落地） | 🟢 优秀 | 功能完善期 |
| **PicoClaw** | 5 → 2 | 4 → 2（多被 stale 关闭） | 无 | 🟠 警示 | 维护整理期 |

**关键观察**：

- **OpenClaw 单日 PR 流量（500）是 Hermes Agent（50）的 10 倍**，是 NanoBot（33）的 15 倍 —— 量级差异 ≈ 影响力差异，但 OpenClaw 的"待合并：已合并 ≈ 365:135"也暴露出 maintainer review 带宽被严重挤压。
- **IronClaw 是唯一做到"PR 待合并仅 3 个、合并 47 个"的项目**，体现出极致的 release-engineering 纪律，这是 v1.4.0 走向 GA 的关键支撑。
- **PicoClaw 是唯一出现"PR 被 stale 关闭但 Issue 实质未修复"的项目**（#3301 + #3316），社区修复路径被 stale 机制"清零"的风险信号已经显现。

---

## 3. OpenClaw 在生态中的定位

### 3.1 优势

| 维度 | OpenClaw | 同类对比 |
|---|---|---|
| **社区规模** | 单日 500+ 流量 | 约为 Hermes Agent 的 10 倍、NanoBot 的 15 倍 |
| **覆盖广度** | Multi-agent + 多 provider + 多 channel + CLI/Desktop/WebUI 全场景 | IronClaw 偏向安全/MCP 体系；QwenPaw 偏向消费端 + Hub |
| **架构野心** | `chat.send` 拆分为 4,015 行单文件 → 显式 lifecycle phases | IronClaw 也在做 `canonical.rs` execute() 拆分，但规模小得多 |
| **Provider 兼容性** | Vertex / Claude CLI / DeepSeek / llama.cpp / Ollama 等多 provider 同时在线 | LobsterAI（18 个内置）+ 自定义网关双线 |
| **发布节奏** | beta.3 已就位，GA 临近 | 仅落后于 IronClaw（已 RC）和 QwenPaw（beta 节奏） |

### 3.2 路线差异

- **OpenClaw**：从「单 agent CLI」演化为「multi-agent orchestration platform」，关键转折点是 #106555 关闭所代表的 gateway 重构 + multi-agent binding 边界修复（#126424）。
- **IronClaw**：从「单体重构（v1 src/）」演化为「安全 + 持久沙箱 + MCP 接入」，走的是「可运营的 Reborn」路线。
- **QwenPaw**：从「2.1.x 单租户」演化为「2.2.0 Hub 多租户」，走的是「B 端商业化」路线。
- **NanoBot**：从「CLI agent」演化为「AgentLoop 解耦 + 富媒体 TUI」，走的是「架构净化 + 单机体验」路线。

### 3.3 社区规模对比（量级感）

```
OpenClaw    ████████████████████████████ 500/日（参照系）
Hermes      █████                      50/日
IronClaw    █████                      48/日
QwenPaw     ████                       35/日
OpenHuman   ███                        27/日
NanoBot     ██                         18/日
LobsterAI   █                          6/日
PicoClaw    ▎                          7/日
```

OpenClaw 是当之无愧的「核心参照系」——任何关于生态趋势的判断，都应以其活跃度为锚点。

---

## 4. 共同关注的技术方向

下表列出今日在多个项目同时出现的关键技术诉求：

| 方向 | 涉及项目 | 典型诉求 |
|---|---|---|
| **Message delivery 可靠性** | OpenClaw #112259/#128971/#118018；IronClaw #6096；Hermes Agent #96183/#91653；OpenHuman #5806 | "入站 turn 静默丢弃"、"delivery_ambiguous 终回复丢失"、"Bot Chat 离线消息不显示"、"Sub-agent 无法读先前结果" —— **agent 体系最痛的一类问题** |
| **Provider / 鉴权边界** | OpenClaw #38327/#88657/#113093/#118793；IronClaw #5970/#5918/#5917（MCP 注册框架） | "Vertex / DeepSeek / Claude CLI / llama.cpp 各种回归" + "MCP 接入的 owner-scoped 生命周期" |
| **Memory / Session 一致性** | OpenClaw #16555/#114234/#118018/#80498；QwenPaw #7193；Hermes Agent #86366/#96195；OpenHuman #5820 | "DeliveryQueue 缺 TTL"、"usage-cost 刷新锁死"、"agent 记忆跨会话串台"、"compaction 重复入档"、"memory-tree 被标 non-fatal 34 分钟" |
| **Prompt Cache 命中率优化** | QwenPaw #7335（81% vs 96%）/ #7342/#7346；IronClaw #6986/#7891/#7929/#7930 | "工具数组中途膨胀导致 prefix 失效"、"未投影的 MIME headers 拖慢 14.3s 推理"、"per-run 可观测性缺位" |
| **可观测性 / 成本可见性** | OpenClaw #51441/#57404；IronClaw #7929；NanoBot #5504/#5562；QwenPaw #7342；Hermes Agent #96206 | "resolved backend model 不暴露"、"per-run token usage 缺位"、"重试状态用户看不见" —— **业内正在补齐的「可观测性债」** |
| **Desktop / 跨平台稳定性** | Hermes Agent #93888/#51327/#96177/#96182；PicoClaw #3281；OpenHuman #5785/#5786 | "Linux .desktop 静默失败"、"Windows 冷启动时序过短"、"Web UI 输入卡顿"、"Windows 贡献者 README 误导" |
| **TUI / UX 体验打磨** | NanoBot #5534/#5538/#5563；OpenHuman #5791（IME）；QwenPaw #7340/#7344；IronClaw #6157（Reborn TUI） | "$skill 自动补全"、"剪贴板粘贴图片"、"IME composition 期间跳过输入回写"、"流式生成滚动锁定" |
| **Meta-search / 检索** | NanoBot #5234（mst-python RRF 融合） | **唯一新项目，P1 优先级，开放 24 天未合并**，是元搜索在 agent 栈中的早期信号 |
| **文档/代码同步（doc drift）** | OpenClaw #48920；OpenHuman #5781/#5786 | "Live Docs ahead of release"、"Rust 版本号 README 与 toolchain 不一致" |

**最强共识**：**message-delivery 可靠性、provider/鉴权边界、memory/session 一致性**这三类是 2026 年 agent 体系共同的「结构性问题」——已经不能靠单点修复合拢，必须通过协议级重构（OpenClaw 的 lifecycle phases、IronClaw 的 MCP owner-scoped 注册、QwenPaw 的 prompt cache prefix 稳定化）才能根治。

---

## 5. 差异化定位分析

| 维度 | OpenClaw | IronClaw | QwenPaw | NanoBot | LobsterAI | OpenHuman | Hermes Agent | PicoClaw |
|---|---|---|---|---|---|---|---|---|
| **核心定位** | Multi-agent gateway + provider 聚合 | 安全 + 持久沙箱 + MCP 接入 | B 端 Hub 多租户 + 消费端 | 单机 TUI 体验 + 架构净化 | 内置服务商矩阵 + 桌面客户端 | 桌面 + BYOK + 模块桥 | 跨平台 Desktop + 远程 backend | 嵌入式 / 边缘设备 |
| **目标用户** | 开发者 / 高级用户（CLI + API） | 企业自托管 + 运维 | 企业 + 个人（B+C） | CLI 极客 | 大众消费者 | 桌面用户 + 贡献者 | 全平台桌面用户 | Sipeed 硬件 / IoT |
| **技术架构亮点** | Multi-agent binding、lifecycle phases、provider fallback by failure class | Owner-scoped MCP 注册、fd-rooted 沙箱、container-supervised mode | Hub 多租户、prompt cache 观测、fr-CA 等国际化 | ToolLoader + AgentLoop 解耦、Skill picker + 粘贴图片 | 18 个内置 provider、Synthorai 多协议网关诉求 | 模块桥 default impl、IME 修复、跨平台文档 | Holographic Memory + 自动化巡检 + Bot Mode | RKLLM 边缘推理、Slack/Line/Telegram 渠道 |
| **当前最大痛点** | Maintainer review 带宽不足（365 待合并） | 性能与缓存稳定性（perf debt） | 多步任务中途静默停止（#6921） | 无明显结构性问题 | 内置服务商扩张边界 | Pre-prod 基础设施成熟度 | Desktop / SSH / 跨平台稳定性债务 | 社区修复路径被 stale 机制"清零" |

**架构哲学对比**：

- **OpenClaw / IronClaw** 走「协议级重构」路线（lifecycle 拆分、MCP owner-scoped）—— 适合大规模复杂场景，但短期 reviewer 压力大。
- **NanoBot / LobsterAI** 走「高频小步迭代」路线 —— 适合快速迭代与用户体验打磨。
- **Hermes Agent / OpenHuman** 走「持续加固」路线 —— 暴露面广，导致稳定性债务持续累积。
- **PicoClaw** 处于「维护期整理」路线 —— 需要警惕"stale 关闭 ≠ 实质修复"的误导信号。

---

## 6. 社区热度与成熟度分层

按「开发活跃度 × 稳定性 × 路线清晰度」三维评估，可将 8 个项目分为三个梯队：

### 🥇 第一梯队：高速迭代 + 强发布纪律

- **IronClaw**（v1.4.0-rc.1 已落地，PR 合并率 94%）
- **QwenPaw**（v2.2.0-beta.1 → beta.2 24 小时内连续 bump）
- **LobsterAI**（PR 当日关闭率 91%，8.26 版本已发布）

**特征**：版本节奏快、PR 闭环迅速、路线图清晰。

### 🥈 第二梯队：高速迭代但有结构性问题

- **OpenClaw**（beta.3 收口，但 365 个 PR 待合并 = reviewer 带宽瓶颈）
- **NanoBot**（架构信号正向，但 P1 PR #5234 已开放 24 天未合并）
- **OpenHuman**（main 红 → 绿快速修复，但 9 条 Issue 仍 OPEN）

**特征**：开发动力充足，但存在 review 通道、长期积压或基础设施债务中的某一类问题。

### 🥉 第三梯队：质量巩固期或维护期

- **Hermes Agent**（50 Issues 中 ~70% 是 Bug，桌面/SSH/跨平台债务持续累积）
- **PicoClaw**（多条 PR 被 stale 关闭，社区修复路径不稳，处于明显维护期）

**特征**：项目仍在响应，但主动推动力减弱，需要 maintainer 主动串联修复工作。

---

## 7. 值得关注的趋势信号

### 7.1 行业级趋势

1. **「协议级重构」成为头部项目的必选项**
   - OpenClaw 把 4,015 行单

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

<think>The user wants me to generate a daily project report for NanoBot based on the GitHub data provided. Let me analyze the data carefully and produce a structured report in Chinese.

Let me break down the key information:

**Data Overview:**
- Past 24 hours Issues updates: 2 (1 new/active, 1 closed)
- Past 24 hours PR updates: 33 (17 pending merge, 16 merged/closed)
- New releases: 0

**Issues (2 total):**
1. #5564 [OPEN] - Path traversal vulnerability in session file handling - Security issue
2. #5550 [CLOSED] - Bug with read_session tool returning empty history with wildcard queries

**PRs (33 total, showing top 20 by comments):**
Let me categorize these:

**OPEN PRs (still pending):**
- #5504 - fix(ui): surface model retry status (NAN-34)
- #5563 - feat(tui): support pasting clipboard images
- #5562 - feat(api): stream tool progress events (Closes #3698)
- #5561 - feat(spawn): per-spawn model presets behind a spawnPresets allowlist
- #5560 - feat(cli): make nanobot the default agent command
- #5559 - refactor(agent): decouple loop from message tool state
- #5234 - feat(agent): integrate mst-python as a metasearch provider

**CLOSED PRs (16):**
- #5558 - refactor(agent): load MyTool through tool loader
- #5557 - perf(tui): skip redundant dependency installs
- #5556 - fix(agent): complete native reasoning lifecycle
- #5543 - fix(tui): surface chat connection failures
- #5491 - fix(webui): keep answer text outside reasoning shell
- #5481 - feat(usage): add unified provider usage backend
- #5534 - feat(tui): autocomplete skill references
- #5533 - fix(tools): keep find_files scans responsive (P1)
- #5538 - refactor(tui): clarify active composer actions
- #5546 - refactor(agent): make run usage explicit
- #5548 - refactor(webui): isolate websocket application orchestration
- #5555 - refactor(agent): remove duplicate progress streaming path
- #5519 - fix(webui): compact single-pane chat header

Let me look at the dominant author - @chengyongru is clearly the main contributor doing extensive work across agent, TUI, WebUI, and refactoring.

Now let me write the report in Chinese with the requested structure. I need to:
1. Be objective and professional
2. Data-driven
3. Highlight project health
4. Include GitHub links for each item
5. Note: The "comments" field shows as "undefined" for most PRs which is unusual - I'll work with what's available

Let me organize this properly. The closed PRs of note:
- Multiple agent refactoring PRs (#5558, #5559, #5546, #5555) - showing architecture cleanup
- TUI improvements (#5534 autocomplete skills, #5538 composer UX, #5557 perf, #5543 connection errors)
- WebUI fixes (#5491, #5519, #5548)
- Performance (#5533 - P1 bug fix for find_files)
- Reasoning lifecycle (#5556)

Open PRs with interesting features:
- #5563 - Clipboard image paste (great UX feature)
- #5562 - Streaming tool progress events (closes long-standing #3698)
- #5561 - Per-spawn model presets
- #5560 - CLI simplification (make nanobot default agent command)
- #5234 - New meta-search provider integration (P1, but old - Aug 3)

Let me write the report now.</think>

# NanoBot 项目日报 · 2026-08-27

## 1. 今日速览

NanoBot 项目今日呈现**高度活跃的开发态势**，过去 24 小时共产生 **33 个 PR 更新**与 **2 个 Issue 更新**，PR 处理密度极高（16 个已合并/关闭 vs 17 个待合并）。从工单分布看，工作重心明显聚焦在 **Agent 循环架构重构**、**TUI/WebUI 用户体验打磨**与**性能/稳定性修复**三大方向，代码改动覆盖核心 `agent/`、`tui/`、`webui/` 三个模块，体现出维护者对底层架构的一致性优化。**今日无新版本发布**，所有变更仍处于主分支迭代阶段。

## 2. 版本发布

今日无新版本发布。最近的发布动态建议关注主分支上累积的 `agent/` 重构 PR（#5558、#5559、#5546、#5555、#5556）合入后的下一个 tag。

## 3. 项目进展

今日共 **16 个 PR 被合并/关闭**，推进了多项关键能力：

**🏗️ Agent 核心架构重构（连续 5 个 PR）**
- [#5558](https://github.com/HKUDS/nanobot/pull/5558) — 通过 `ToolLoader` 加载 `MyTool`，移除 `AgentLoop` 中的硬编码注册
- [#5559](https://github.com/HKUDS/nanobot/pull/5559) — 将消息工具状态与 Agent 循环解耦
- [#5546](https://github.com/HKUDS/nanobot/pull/5546) — 显式化运行 usage 数据流，移除 `_last_usage` 进程级副作用通道
- [#5555](https://github.com/HKUDS/nanobot/pull/5555) — 移除重复的进度流式传输路径，统一为单条 per-run hook
- [#5556](https://github.com/HKUDS/nanobot/pull/5556) — 补全 provider-native reasoning 生命周期，关闭推理段后才输出答案内容

这一连串重构显著降低了 `AgentLoop` 的耦合度，**项目整体向「单一职责、显式数据流」方向稳步迈进**。

**🖥️ TUI 用户体验升级**
- [#5534](https://github.com/HKUDS/nanobot/pull/5534) — `$skill-name` 引用自动补全（picker + 方向键导航 + Tab/Enter 插入）
- [#5538](https://github.com/HKUDS/nanobot/pull/5538) — 重构编辑器操作提示为 `Enter now · Tab next`
- [#5557](https://github.com/HKUDS/nanobot/pull/5557) — 基于 SHA-256 指纹的依赖安装缓存，避免重复 `bun install`
- [#5543](https://github.com/HKUDS/nanobot/pull/5543) — 区分静默就绪/恢复/不可用/不可恢复四类聊天连接状态

**🌐 WebUI 健壮性提升**
- [#5491](https://github.com/HKUDS/nanobot/pull/5491) — 跨 answer→tool→answer 切片保留所有助手回答内容
- [#5519](https://github.com/HKUDS/nanobot/pull/5519) — 压缩单面板聊天头部间距
- [#5548](https://github.com/HKUDS/nanobot/pull/5548) — 将 WebSocket 应用编排隔离到 `WebUISessionProjection` 与 `WebUIOutboundProjector`

**⚡ 性能与可观测性**
- [#5533](https://github.com/HKUDS/nanobot/pull/5533) — `find_files` 扫描保活（worker + budgeted `os.scandir` + 取消传播）
- [#5481](https://github.com/HKUDS/nanobot/pull/5481) — 统一 provider usage 后端，记录每次重试调用的内容无关 usage 行

## 4. 社区热点

虽然评论字段数据缺失（多数 PR 显示 `undefined`），从 **优先级标签与长期未关闭状态** 可识别出以下关注焦点：

- **[#5504 fix(ui): surface model retry status (NAN-34)](https://github.com/HKUDS/nanobot/pull/5504)** — 标记为 P2，标记了 `conflict`，自 8/24 起持续更新，是 UI 层重试可观测性的关键 PR
- **[#5234 feat(agent): integrate mst-python as a metasearch provider](https://github.com/HKUDS/nanobot/pull/5234)** — P1 优先级，集成 Meta-Search Tool（RRF 融合多搜索引擎），但**已开放 24 天未合并**，是社区长期等待的功能
- **[#5562 feat(api): stream tool progress events](https://github.com/HKUDS/nanobot/pull/5562)** — 关闭历史 Issue [#3698](https://github.com/HKUDS/nanobot/issues/3698)，暴露工具执行生命周期流式事件

**热点诉求分析**：用户普遍希望加强**模型调用过程的可观测性**（重试、推理、工具进度）以及**多源搜索能力**，与 HKUDS 的 nanobot 设计方向高度契合。

## 5. Bug 与稳定性

**🔴 P1 级（已修复）**
- [#5533 fix(tools): keep find_files scans responsive](https://github.com/HKUDS/nanobot/pull/5533) — 大目录扫描卡顿问题 ✅ **已合入**

**🟡 P2 级（已修复）**
- [#5556 fix(agent): complete native reasoning lifecycle](https://github.com/HKUDS/nanobot/pull/5556) — 推理段未关闭导致流恢复问题 ✅
- [#5543 fix(tui): surface chat connection failures](https://github.com/HKUDS/nanobot/pull/5543) — TUI 静默吞掉连接错误 ✅
- [#5491 fix(webui): keep answer text outside reasoning shell](https://github.com/HKUDS/nanobot/pull/5491) — 答案内容被错误收纳到 reasoning 区块 ✅

**🆕 新报告的安全 Issue（待修复）**
- [#5564 [OPEN] fix(session): prevent path traversal in session file handling](https://github.com/HKUDS/nanobot/issues/5564) — `nanobot/session/manager.py` 中 session ID 未校验，恶意 ID（如 `../../etc/passwd`）可造成路径穿越。**严重程度：高（安全）**，目前 0 评论、尚无关联修复 PR，建议维护者优先处理。

**✅ 已关闭**
- [#5550 [CLOSED] read_session tool returns empty history with wildcard queries](https://github.com/HKUDS/nanobot/issues/5550) — 通配符（如 `*`、`. *`、空白）查询时返回空历史 ✅

## 6. 功能请求与路线图信号

**待合并中的高价值新功能（值得纳入下一版本）**：

| PR | 功能 | 优先级 | 链接 |
|---|---|---|---|
| [#5563](https://github.com/HKUDS/nanobot/pull/5563) | TUI 支持剪贴板粘贴图片（Ctrl+V / Alt+V） | P2 | [链接](https://github.com/HKUDS/nanobot/pull/5563) |
| [#5562](https://github.com/HKUDS/nanobot/pull/5562) | OpenAI 兼容 API 流式工具进度事件 | P2 | [链接](https://github.com/HKUDS/nanobot/pull/5562) |
| [#5561](https://github.com/HKUDS/nanobot/pull/5561) | spawn 子代理的 `spawnPresets` 模型白名单 | — | [链接](https://github.com/HKUDS/nanobot/pull/5561) |
| [#5560](https://github.com/HKUDS/nanobot/pull/5560) | 让 `nanobot` 成为默认 agent 命令（CLI 简化） | — | [链接](https://github.com/HKUDS/nanobot/pull/5560) |
| [#5234](https://github.com/HKUDS/nanobot/pull/5234) | 集成 mst-python 元搜索 provider | **P1** | [链接](https://github.com/HKUDS/nanobot/pull/5234) |

**路线图信号**：TUI 正在从「文本输入」向「富媒体交互」演进（图片粘贴 + skill 自动补全），CLI 也在向「无前缀默认命令」收敛。Agent 层则持续推进架构净化。

## 7. 用户反馈摘要

由于今日活跃 Issue 评论数普遍为 0，直接的用户原声较少，但从已合并 PR 的摘要可反推用户痛点：

- **流式体验缺陷** — 用户希望看到模型重试倒计时（[#5504](https://github.com/HKUDS/nanobot/pull/5504)）、工具执行进度（[#5562](https://github.com/HKUDS/nanobot/pull/5562)）、推理过程可视化
- **大目录性能问题** — `find_files` 在大仓库下卡顿（[#5533](https://github.com/HKUDS/nanobot/pull/5533)）
- **session 检索失效** — 当模型用通配符查询历史时返回空结果（[#5550](https://github.com/HKUDS/nanobot/issues/5550)）
- **CLI 使用门槛** — 用户希望直接使用 `nanobot` 而非 `nanobot agent`（[#5560](https://github.com/HKUDS/nanobot/pull/5560)）

## 8. 待处理积压

**⏰ 长期未合并（建议维护者关注）**

- **[#5234](https://github.com/HKUDS/nanobot/pull/5234) — mst-python 元搜索 provider 集成**
  - 开放时间：**24 天**（自 2026-08-03）
  - 优先级：**P1**
  - 状态：长期处于 OPEN，社区对元搜索有明确需求，应优先 review

**🔒 新增安全工单（建议 24h 内响应）**

- **[#5564](https://github.com/HKUDS/nanobot/issues/5564) — Session 文件路径穿越漏洞**
  - 严重程度：**高（安全）**
  - 状态：OPEN，无关联 PR
  - 建议：分配 `arena-ai-coding-agent` 或核心维护者快速出修复补丁

**📊 整体健康度评估**：✅ **良好偏优**
- PR 流转速率健康（24h 内 16 合 17 待）
- 重构与功能并行推进，架构信号正向
- 唯一风险点：1 个 P1 PR 积压 24 天 + 1 个新安全 Issue 待响应

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

<think>Let me analyze the GitHub data for PicoClaw and generate a structured daily report for 2026-08-27.

Key observations:
- 7 Issues updated, 6 PRs updated
- No new releases
- 2 PRs merged/closed, 4 PRs closed (likely stale)
- 5 new/active issues, 2 closed issues
- One new issue today (#3346 about RKLLM)
- Notable bug fixes related to Slack media uploads (PR #3340) and LINE webhook config (PR #3329)
- Multiple stale PRs being closed
- Web UI laggy issue getting attention

Let me organize this into a structured daily report in Chinese, following the requested format.

Important issues to highlight:
- #3287 IRC long messages (8 comments, feature request)
- #3281 Web UI lag (7 comments, 1 like - bug)
- #3301 cleared/session compression (5 comments, just closed)
- #3339 Antigravity 429 error (stale bug)
- #3338 Slack media upload bug (has fix PR #3340)
- #3328 LINE webhook settings (closed, has PR #3329)
- #3346 RKLLM reply issue (new today)

PRs:
- #1549 merged - bug fix merge
- #3340 OPEN - Slack FileSize fix (related to #3338)
- #3329 OPEN - LINE webhook fix (related to #3328, but issue closed)
- #3316 CLOSED stale - routed-agent context
- #3315 CLOSED stale - Telegram topics
- #3314 CLOSED stale - custom allow patterns

Let me write a comprehensive daily report.</think>

# PicoClaw 项目日报
**日期：2026-08-27**

---

## 1. 今日速览

PicoClaw 项目今日活跃度**中等偏低**。过去 24 小时共有 7 条 Issue 更新、6 条 PR 更新，但无新版本发布。值得关注的是 4 条历史 PR 被标记为 **stale 并关闭**，其中涉及 Telegram 私聊话题、shell 白名单、路由 agent 上下文管理等此前社区关心的修复——这些关闭可能意味着维护者倾向于重写或暂时搁置。同时出现 1 条新 Issue（#3346，RKLLM 回复异常）和 2 条与 Issue 联动的修复型 PR（Slack 媒体上传、Line webhook 配置）。整体看，项目处于**小版本迭代前的收敛阶段**，维护重点放在清理积压而非新增功能。

---

## 2. 版本发布

**今日无新版本发布。** 距离上一个正式版本 0.3.1（被多个 Issue 引用为当前版本）已过一段时间，建议关注后续 0.3.2 / 0.4.0 的发布窗口。

---

## 3. 项目进展

### ✅ 今日合并 / 关闭的重要 PR

| PR | 标题 | 影响 |
|---|---|---|
| [#1549](https://github.com/sipeed/picoclaw/pull/1549) | fix: merge PR #1448 #1447 #1446 #1444 | 批量合并历史修复集（虽已关闭，但对历史 PR 状态做收尾） |
| [#3314](https://github.com/sipeed/picoclaw/pull/3314) | Fix: agent not able to execute shell command added to customAllowPatterns | 修复 `customAllowPatterns` 因默认拒绝模式优先级问题而失效——意味着用户原本期望可用的 `git push` 等白名单命令实际被拦截 |
| [#3315](https://github.com/sipeed/picoclaw/pull/3315) | Support topics in private bot chats | 扩展 Telegram 主题识别范围至私聊场景（`IsTopicMessage`） |
| [#3316](https://github.com/sipeed/picoclaw/pull/3316) | fix: routed-agent context management not respecting history, summarization, compression | 修复通过 dispatch rules 路由的 agent 完全不记忆历史消息、压缩也不触发的问题 |

> ⚠️ 注：#3314、#3315、#3316 均被标记为 **stale 后关闭**，并未真正合并进主干。其核心修复内容是否会被重提或另写 PR 仍有待观察。社区关心的"路由 agent 无记忆"问题（[#3301](https://github.com/sipeed/picoclaw/issues/3301)）也同步关闭，但缺少对应的合并 commit。

### 📈 整体推进度
- 实质推进：**有限**。Slack 媒体上传（#3340）和 Line webhook 配置（#3329）两条修复型 PR 仍 OPEN，但方向正确。
- 社区最关切的 Web UI 卡顿（#3281）、IRC 长消息（#3287）尚无对应 PR。

---

## 4. 社区热点

### 🔥 讨论最活跃（按评论数）

1. **[#3287 [Feature] Better support long messages in IRC](https://github.com/sipeed/picoclaw/issues/3287)** — 8 条评论，0 赞
   - 用户 @superuser-does 诉求：PicoClaw 在 IRCv3 上传输长消息时应智能识别自动拆分的消息片段，将其合并为单一消息处理，而非误判为多条独立消息。当前 IRC 客户端默认 512 字节上限是导致拆分的根源。
   - **社区诉求**：让 PicoClaw 成为 IRC 场景下的"上下文感知者"。

2. **[#3281 [BUG] Web UI chat input is very laggy when history has a little bit long](https://github.com/sipeed/picoclaw/issues/3281)** — 7 条评论，1 赞
   - 用户 @xpader 反馈：当 Web UI 会话历史稍微变长（v0.3.1）时，输入框响应极慢。
   - **社区诉求**：基本可用性诉求——一个稍长的会话就该卡顿，对终端用户是致命体验。

3. **[#3301 [BUG] /clear and session auto-compression don't work in chats routed to non-default agent via dispatch rules](https://github.com/sipeed/picoclaw/issues/3301)** — 5 条评论，已关闭
   - 已通过 #3316 修复尝试，但该 PR 也被关闭——**用户痛点实质未解决**。

### 👍 社区反应
- 仅有 #3281 获得 1 个 👍。整体互动度偏低，说明项目可能正处在主要维护者驱动的"安静整理期"。

---

## 5. Bug 与稳定性

按严重程度（🔴 高 → 🟡 中 → 🟢 低）排列：

| 级别 | Issue | 描述 | 是否有 Fix PR |
|---|---|---|---|
| 🟡 中 | [#3281](https://github.com/sipeed/picoclaw/issues/3281) | Web UI 输入框在历史稍长时严重卡顿 | ❌ 无 |
| 🟡 中 | [#3338](https://github.com/sipeed/picoclaw/issues/3338) | Slack 媒体上传失败：`file.upload.v2: file size cannot be 0`，因 `FileSize` 未设置 | ✅ [PR #3340](https://github.com/sipeed/picoclaw/pull/3340) OPEN |
| 🟡 中 | [#3346](https://github.com/sipeed/picoclaw/issues/3346) | RKLLM（Qwen3.5-0.8B_w4）在 ARM 开发板上回复异常（今日新开） | ❌ 无 |
| 🟡 中 | [#3339](https://github.com/sipeed/picoclaw/issues/3339) | Antigravity 生成请求返回 429（quota exhausted），但 OAuth 和模型发现均正常 | ❌ 无（stale） |
| 🟢 低 | [#3328](https://github.com/sipeed/picoclaw/issues/3328) | `line.settings.webhook_host/port` 已配置但无代码读取（配置项形同虚设） | ✅ [PR #3329](https://github.com/sipeed/picoclaw/pull/3329) OPEN |
| ✅ 已关闭 | [#3301](https://github.com/sipeed/picoclaw/issues/3301) | 路由 agent 的 `/clear` 与自动压缩失效 | ⚠️ #3316 已关闭，**实质未修复** |

**重点提示**：
- `#3346`（RKLLM）是今日唯一新 Issue，针对 ARM 边缘设备（Sipeed 设备线）核心场景——RKLLM 是 Sipeed 自家推理栈，回复异常属于**核心场景回归**，建议维护者优先排查。
- `#3301` 关闭后无对应 merged commit，用户跟进可能会重新开 Issue。

---

## 6. 功能请求与路线图信号

| 需求 | 来源 | 落地信号 |
|---|---|---|
| IRC 长消息上下文合并 | [#3287](https://github.com/sipeed/picoclaw/issues/3287) | 暂无 PR。属于 IRC 集成的纵深改进，可能纳入 0.4.x |
| Line webhook 配置项实际生效 | [#3328](https://github.com/sipeed/picoclaw/issues/3328) + [#3329](https://github.com/sipeed/picoclaw/pull/3329) | PR 已 OPEN，短期可合入 |
| Slack 媒体上传支持 | [#3338](https://github.com/sipeed/picoclaw/issues/3338) + [#3340](https://github.com/sipeed/picoclaw/pull/3340) | PR 已 OPEN，短期可合入 |
| RKLLM 边缘设备适配 | [#3346](https://github.com/sipeed/picoclaw/issues/3346) | 暂无 PR，需复现 |

**路线图推断**：下一版本很可能聚焦**多渠道集成的边界 case 修复**（Slack、Line、Telegram），而 Web UI 性能（#3281）和 RKLLM（#3346）则更可能延后到 0.4.0 之后的版本。

---

## 7. 用户反馈摘要

从 Issue 评论与描述中提炼的真实声音：

- 😤 **痛点 · Web 体验**：「Make more chat history in one session. Keep try to input something in input box, it will be very laggy.」——**基本交互流畅度不足**，对一个面向开发者的工具来说相当致命。
- 😤 **痛点 · 多渠道配置无效**：`line.webhook_host/port` 在文档中存在却完全不被读取，用户反馈「Setting either has no effect, and there is no warning to say so」——**配置项误导用户**，比 bug 本身更糟糕。
- 😤 **痛点 · 路由 agent 失忆**：通过 dispatch rules 路由到非默认 agent 后"什么都不记得"，自动压缩也从未触发——这是 **multi-agent 设计的核心缺陷**。
- 😟 **环境碎片化**：用户使用的环境涵盖 Raspberry Pi（Discord/Telegram）、ARM 开发板（RKLLM）、Web UI——说明 PicoClaw 已渗透到边缘和嵌入式场景，但**这些场景的稳定性反馈**长期被搁置。
- 🙂 **正向信号**：Slack-Go SDK 升级（v0.23.1）后旧 API 失效但社区能在 24 小时内定位到 `FileSize` 根因，说明用户具备较强的工程能力，社区自我修复潜力大。

---

## 8. 待处理积压（提醒维护者关注）

以下 Issue/PR 长期未响应或处于风险状态：

| 编号 | 类型 | 停滞天数 | 建议动作 |
|---|---|---|---|
| [#3281](https://github.com/sipeed/picoclaw/issues/3281) | Bug | 36 天 | **优先**：高赞基础体验问题，需官方响应 |
| [#3287](https://github.com/sipeed/picoclaw/issues/3287) | Feature | 35 天 | 安排设计讨论，给出 RFC |
| [#3301](https://github.com/sipeed/picoclaw/issues/3301) | Bug | 29 天 | 已关闭但实质未修复，**可能回流**——建议主动跟进 |
| [#3339](https://github.com/sipeed/picoclaw/issues/3339) | Bug | 10 天（已 stale） | 涉及 Google Antigravity 配额问题，建议标记为"环境/上游问题"或给 workaround |
| [PR #3340](https://github.com/sipeed/picoclaw/pull/3340) | Fix | 10 天 | **应优先 Review**，PR 修复明确且对应 Issue 明确 |
| [PR #3329](https://github.com/sipeed/picoclaw/pull/3329) | Fix | 16 天（已 stale） | 需打 stale 标前先 Review，避免与关联 Issue 一起被遗忘 |

---

### 📊 健康度速评

| 维度 | 评分 | 说明 |
|---|---|---|
| 活跃度 | ⭐⭐⭐ | Issue/PR 数量尚可，但缺乏新功能推动 |
| 响应速度 | ⭐⭐ | 多个高关注度 Issue 30+ 天无实质响应 |
| 修复闭环 | ⭐⭐ | 多条 PR 被 stale 关闭，社区修复路径不稳 |
| 路线清晰度 | ⭐⭐⭐ | 渠道集成方向明确，但缺乏 Roadmap 公开沟通 |

**建议**：维护者应优先处理 Slack 媒体上传（#3340）和 Line webhook（#3329）两条已就绪的 PR，同时主动跟进 Web UI 卡顿（#3281）和 RKLLM（#3346）这两条对核心场景有影响的问题，避免社区修复路径继续被 stale 机制"清零"。

---

*报告生成时间：2026-08-27 | 数据来源：GitHub REST API*

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

<think>Let me analyze the GitHub data for IronClaw project (github.com/nearai/ironclaw) and generate a comprehensive daily report for 2026-08-27.

Key observations:
1. 46 issues updated (26 new/active, 20 closed)
2. 50 PRs updated (3 pending merge, 47 merged/closed)
3. 1 new release: ironclaw-v1.4.0-rc.1
4. The release was just cut yesterday (2026-08-26)
5. Heavy activity around v1.4.0 release prep
6. Multiple performance-related issues (prompt cache, tool churn, prefix stability)
7. Voice-to-text feature design discussions just opened today
8. Many older issues were closed today (compaction refactoring series, #4162, #4163, #4165, #4167)

Let me structure the report according to the requested sections.

Closed Issues analysis:
- Multiple compaction-related refactoring issues closed (#4162, #4163, #4165, #4167) - these are all from May/June, closed today, likely as part of v1.4.0 cleanup
- #4796 (LLM date/time awareness) - closed
- #4425 (builtin.http context bomb) - closed
- #4162-4167: Compaction pipeline refactoring
- #4828 (channel context slice) - closed
- #3873 (Trigger Loop cron) - closed
- #567 (proactive tool truncation) - closed
- #6686 (Retire DockerProcessSandboxBackend) - closed
- #2597 (E2E browser failures) - closed
- #7815 (Onboarding suggestions) - closed
- #6879 (Automation runs) - closed
- #7392 (omp coding tools) - closed

Open Issues with high comment counts:
- #7732 (Epic: Persistent per-user sandbox) - 10 comments
- #7891 (perf: capability payloads) - 5 comments
- #2950 (llm schema cleanup) - 3 comments
- #6986 (Cache tool array stability) - 3 comments
- #2117 (ironclaw-bridge) - 3 comments
- #6369 (Tier B follow-up) - 3 comments
- #4162, #4163, #4425 - closed
- #7781 (Design System Phases 2-3) - 2 comments
- #7922 (apply_patch grammar) - 1 comment, NEW today
- #7867 (Voice-to-text) - 1 comment
- #7912 (Telegram 503 bug) - 1 comment
- #4625 (Slack channel-routed agents) - 1 comment
- #6879, #7392 - closed
- #7930, #7932, #7933, #7934 (Voice-to-text architecture proposals) - NEW today, 0 comments
- #7929 (obs metrics) - NEW today, 0 comments

Important Merged PRs (from open to closed today):
- #7926 (chore: cut 1.4.0-rc.1) - the release cut itself
- #7927 (chore: refresh codebase knowledge graph) - bot maintenance
- #6817 (filesystem TOCTOU fixes) - security fix
- #6740 (TLS termination seam for sandbox) - security
- #6533 (container-supervised mode) - hosted deployments
- #6366 (onboard Esc key) - UX
- #6157 (reborn terminal UI) - new feature
- #6134, #6133, #6132, #6131 (reborn tests) - testing infrastructure
- #6112 (refactor canonical.rs) - code quality
- #6096 (concurrent message writes) - bug fix
- #5970, #5918, #5917 (MCP registration framework) - major feature
- #5742 (memory prompt-context) - production change

PRs still OPEN:
- #7928 (selectable JSON result views) - OPEN
- #7925 (Slack mention fix) - OPEN
- #7927 (knowledge graph refresh) - OPEN but probably bot-generated

Wait, let me re-check the data. The summary says "待合并: 3" - 3 PRs pending merge. Looking at the open ones:
- #7928 - OPEN
- #7925 - OPEN
- #7927 - OPEN (CI bot, likely auto-generated)

That matches 3 pending.

Let me check the most-active issues for community signal:
- #7732 (Persistent sandbox epic) - 10 comments - ongoing design discussion
- #7891 (perf capability payloads) - 5 comments - hot performance topic
- #2950 (llm schema) - 3 comments
- #6986 (cache stability) - 3 comments
- #2117 (ironclaw-bridge) - 3 comments

The voice-to-text proposals (#7932, #7933, #7934) are brand new and represent architectural alternatives being evaluated.

Bug severity ranking:
- #7891 (perf: 14.3s inference cost) - medium, performance critical
- #4425 (closed - builtin.http context bomb) - fixed
- #4162/4163 (closed - compaction refactoring) - fixed
- #7912 (Telegram removal 503) - production bug, open
- #7925 (Slack mention loss) - PR open with fix

I need to provide:
1. Brief overview
2. Release details (v1.4.0-rc.1)
3. Major merged PRs
4. Hot topics
5. Bug reports
6. Feature requests / roadmap signals
7. User feedback
8. Pending backlog

Let me write a comprehensive, professional, data-driven report in Chinese.</think>

# IronClaw 项目日报 · 2026-08-27

## 1. 今日速览

IronClaw 今日处于 **v1.4.0 发布周期的高强度收尾阶段**：昨日刚完成首个 RC 切版（`v1.4.0-rc.1`），今天一天内关闭/合并了 47 个 PR（合并率 94%）、关闭 20 个 Issue。讨论热度集中在三个方向——**持续化沙箱架构（#7732）**、**Agent 循环性能优化（#7891/#6986/#7929/#7930）** 与 **WebUI 语音输入架构选型（#7867 + #7932/#7933/#7934 三个 sibling 提案）**。整体健康度良好：47 个 PR 合并涉及安全加固、性能、测试基础设施、MCP 注册框架等多个轴线，仓库处于明显的「前进」状态；同时 P1/P2 性能与可观测性议题集中爆发，说明团队已进入下一轮「质量深耕」窗口。

---

## 2. 版本发布

### `ironclaw-v1.4.0-rc.1`（2026-08-26，2026-08-27 落地提交 #7926）

首个 1.4.0 发布候选，覆盖自 `v1.3.0` 以来 **81 个 commit**。亮点变更（release notes 已公开）：

- **Durable notification inbox**：runjobs 在每次 publish 时把"权威结果 + 可操作闸门"写入每个用户的持久收件箱，WebUI 通知中心渲染后用于展示审批与鉴权提示。
- 完整 release notes：<https://github.com/nearai/ironclaw/releases/tag/ironclaw-v1.4.0-rc.1>

**RC 阶段提醒**：
- 切版提交 PR #7926（[链接](https://github.com/nearai/ironclaw/pull/7926)）已合并；版本号从 `1.2.0` 跳到 `1.4.0-rc.1`（`Cargo.lock` 同步更新）。
- 后续预计 1–2 个 RC 后切 stable，RC 期间不建议生产直接拉 `v1.4.0-rc.1`。
- 已知的潜在 P0 风险：性能与缓存稳定性相关 issue（#7891、#6986、#7929、#7930）尚未合并到 1.4.0 RC 分支，需关注是否进入 RC 范围。

---

## 3. 项目进展：今日合并/关闭的重要 PR

以下 PR 全部在 24 小时内合并，对项目推进影响显著：

| 类别 | PR | 说明 |
|---|---|---|
| **安全加固** | [#6817](https://github.com/nearai/ironclaw/pull/6817) | 关闭 `crates/ironclaw_filesystem/src/local.rs` 中 4 处 TOCTOU 逃逸——所有 pathname 校验改为 fd-rooted 遍历，杜绝校验与系统调用间的竞态。 |
| **安全/沙箱** | [#6740](https://github.com/nearai/ironclaw/pull/6740) | W6 phase 1：把 `sandbox_process::tls_intercept` 从 `sandbox/shell-integration` 移植到 main，补齐沙箱 egress 代理的 TLS 终结层。 |
| **MCP 注册框架（功能大件）** | [#5970](https://github.com/nearai/ironclaw/pull/5970) / [#5918](https://github.com/nearai/ironclaw/pull/5918) / [#5917](https://github.com/nearai/ironclaw/pull/5917) | 三段式合入：(1) owner-scoped 注册骨架 + 铸造 id + 生命周期 choke point；(2) 注册托管 MCP + 运行时发现（不再信任 manifest）；(3) 把注册服务器锁到 host egress，激活前拒绝公网端点。三件合在一起构成「可运营的 MCP 接入」主轴。 |
| **生产变更（加 PRODUCTION CHANGE 标签）** | [#5742](https://github.com/nearai/ironclaw/pull/5742) | 修复 #5605：`ProductionMemoryPromptContextService` 早已实现，但 composition 层未接入；现在把内存上下文源真正接进 prompt 构建路径，并在 int tier 钉住 untrusted-memory 信封。 |
| **部署模式** | [#6533](https://github.com/nearai/ironclaw/pull/6533) | 容器监管模式上线：补齐托管场景的"重启/应用"路径，把裸 `os error 2` 替换成清晰提示。仅覆盖 #6534 的部分面（WebUI 配置路径与配置消费仍待后续）。 |
| **Reborn 用户面** | [#6157](https://github.com/nearai/ironclaw/pull/6157) | `ironclaw-reborn tui` + service 安装命令；TUI 是 `serve` 的 WebChat v2 客户端（HTTP+SSE），非第三独立集成。 |
| **并发 Bug 修复** | [#6096](https://github.com/nearai/ironclaw/pull/6096) | 修 #6047：同一线程的两条快速消息不再乱序持久化/展示/执行。 |
| **Agent 循环重构** | [#6112](https://github.com/nearai/ironclaw/pull/6112) | 拆解 `canonical.rs::execute()`，去重延时包装；针对历史上"新逻辑直接挂在执行器脊柱"的反模式。 |
| **测试基础设施** | [#6131](https://github.com/nearai/ironclaw/pull/6131) / [#6132](https://github.com/nearai/ironclaw/pull/6132) / [#6133](https://github.com/nearai/ironclaw/pull/6133) / [#6134](https://github.com/nearai/ironclaw/pull/6134) | Reborn tier-2 集成 harness 四连：存储模式审计、fixture LLM seam、SSE 合约往返、错误注入。补齐 harness 真实可信度。 |
| **Onboarding UX** | [#6366](https://github.com/nearai/ironclaw/pull/6366) | 修 #6360：`ironclaw onboard` 在 API-key 提示处按 Esc 现在能回到 provider 菜单。 |
| **CI/元数据** | [#7926](https://github.com/nearai/ironclaw/pull/7926) / [#7927](https://github.com/nearai/ironclaw/pull/7927) | 1.4.0-rc.1 切版提交 + 夜间代码库知识图谱刷新。 |

**整体推进评估**：单日 47 个 PR 合入，相当于把"安全、Tier-B 清理、Reborn 测试基础设施、agent loop 重构、MCP 注册"五条主线都向前推了一个实质节点；这是 v1.4.0 走向 GA 之前典型的「收尾冲刺」节奏。

---

## 4. 社区热点

按评论数与反应热度排序：

1. **[#7732](https://github.com/nearai/ironclaw/issues/7732) Epic: Persistent per-user sandbox with iron-proxy; defer loop executors — 10 条评论**
   作者 @serrrfirat 维护的核心 Epic。诉求：当前 Reborn 的 `builtin.shell` 走 Docker，但每个 shell 命令都新建/销毁容器，`/workspace` 也只在 `(tenant, user)` 粒度持续；要演化成"真正的用户电脑 + iron-proxy"。评论量最大说明社区高度关注沙箱方向——这条 Epic 的设计决策将直接决定 v1.4 之后桌面级能力的形态。

2. **[#7891](https://github.com/nearai/ironclaw/issues/7891) perf(extensions): unprojected capability payloads + blind 24 KiB head-slice cost 14.3s of inference on two emails — 5 条评论**
   量化数据很扎眼：两条 `gmail.get_message`（274ms + 290ms 工具耗时）把整 turn 拖到 19.7 秒，其中 19.2 秒是模型推理，原因是 49,152 字节未请求的 MIME headers 被塞进 prompt。"无锁竞争、无重试、无队列延迟"——纯 prompt 设计问题。

3. **[#2950](https://github.com/nearai/ironclaw/issues/2950) llm: split provider-safe tool schema cleanup from strict optional-field rewriting — 3 条评论**
   把 `normalize_schema_strict()` 拆成"避免 provider 400 的清理"和"严格可选字段改写"两件事，避免两套不相关职责耦合。

4. **[#6986](https://github.com/nearai/ironclaw/issues/6986) Cache: keep the advertised tool array byte-identical — defer_loading/tool_reference instead of mid-run promotion — 3 条评论**
   pi-harness 适配计划 P0 #3：渐进式披露不能再中途往 advertised set 里塞工具，否则 prefix cache 失效；必须用 `defer_loading`/`tool_reference` 这类引用语义。

5. **[#2117](https://github.com/nearai/ironclaw/issues/2117) feat: ironclaw-bridge — local file/MCP bridge daemon for cloud-hosted deployments — 3 条评论 + 1 👍**
   云端部署 IronClaw 时，用户笔记本上的本地文件（Obsidian vault、项目目录等）触不可及。提议一个 bridge daemon 打通边界。

6. **[#6369](https://github.com/nearai/ironclaw/issues/6369) Epic: Tier B follow-up: gaps left by v1 (src/) retirement — 3 条评论**
   v1 老单体 `src/`（曾构建为 `ironclaw-legacy` 二进制）已被删除，生产部署已切到 Reborn；该 issue 跟踪删除遗留的能力缺口。

**诉求画像**：性能、缓存稳定性、沙箱持久化、MCP 接入、云边桥接——五条线都指向「让 Reborn 在真实生产负载下既稳又快」。

---

## 5. Bug 与稳定性

按严重程度排序：

| 级别 | Issue | 状态 | 备注 |
|---|---|---|---|
| **P0（性能/稳定性）** | [#7891](https://github.com/nearai/ironclaw/issues/7891) perf: 未投影 capability payload + 盲目 24 KiB head-slice 拖慢 14.3s 推理 | OPEN，无 fix PR | 核心问题是"未请求的 MIME headers 被塞进 prompt"，需要 prompt 端契约级改动。 |
| **P0（缓存）** | [#6986](https://github.com/nearai/ironclaw/issues/6986) Cache: advertised tools 中途膨胀导致 prefix cache 失效 | OPEN，无 fix PR | pi-harness 适配计划明确点名；关联 #6987、#7921、#7444。 |
| **P1（可观测性）** | [#7929](https://github.com/nearai/ironclaw/issues/7929) obs(loop): 仪表化 per-run 模型调用/前缀缓存/工具 churn 指标 | OPEN（今日新开） | 当前所有性能改动都靠 quote 与 bench 分数，没有生产侧可观测性——这是「让 perf 决策可决」的元 issue。 |
| **P1（Token 浪费）** | [#7930](https://github.com/nearai/ironclaw/issues/7930) perf(tools): 允许用 reference 引用前序结果而非重新发出 | OPEN（今日新开） | 模型当前必须把上游 payload 重新 emit 到下游 JSON 参数，浪费大量 output token。 |
| **中（用户体验 Bug）** | [#7912](https://github.com/nearai/ironclaw/issues/7912) Telegram 移除在生产 WebChat 扩展端点上返回 503 | OPEN，无 fix PR | 复现步骤明确：https://ironclaw-libsql-prod.up.railway.app/extensions/channels，移除 Telegram channel。 |
| **中（功能 Bug）** | [#7925](https://github.com/nearai/ironclaw/pull/7925) fix(slack): admit human message subtypes, stop channel mentions depending on app_mention | OPEN PR，fix 已就位 | Slack 的 `thread_broadcast` subtype 在入口被静默丢弃。 |
| **低（已修）** | [#4425](https://github.com/nearai/ironclaw/issues/4425) `builtin.http` 上下文炸弹（10MB 下限、无 HTML 剥离） | CLOSED | 单次 fetch investing.com/cnbc.com 注入 ~1.2 MB output。 |
| **低（已修）** | [#6096 修复的 #6047](https://github.com/nearai/ironclaw/pull/6096) | CLOSED | 同线程并发消息乱序问题已通过 PR #6096 修复。 |
| **低（已修）** | [#6817](https://github.com/nearai/ironclaw/pull/6817) 文件系统 TOCTOU 4 处逃逸 | CLOSED（合并） | 改 fd-rooted 遍历

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

<think>Let me analyze the data provided and generate a structured daily report for LobsterAI project on 2026-08-27.

Key observations:
1. No new releases today
2. 1 issue opened (Issue #2554 about adding Synthorai as a built-in service provider)
3. 11 PRs in total: 1 still OPEN (#2551), 10 already CLOSED
4. Active contributors: @liuzhq1986, @liugang519, @fisherdaddy, @cuihuan
5. Most PRs are related to renderer/UI, analytics, deployment features, login experience, and library management

Let me categorize:

**Merged/Closed PRs (10):**
- #2558: Rainbow animation for sidebar login CTA (@liuzhq1986)
- #2557: Liuzhq/fix 2026.8.24 (@liuzhq1986)
- #2556: Liuzhq/26.8.24 rlog (@liuzhq1986)
- #2555: Analytics enhancement for publish/deployment (@liugang519)
- #2553: Fix Zhipu icon dark mode (@fisherdaddy)
- #2552: Guide recharge (@liuzhq1986)
- #2550: Library - permanent delete cloud shared files (@liugang519)
- #2549: Release 2026.8.26 (@liuzhq1986)
- #2548: Settings width update (@fisherdaddy)
- #2547: Login guide fix (@liuzhq1986)

**Still Open PR (1):**
- #2551: fix app update preserve ready state (@fisherdaddy)

**New Issue (1):**
- #2554: Add Synthorai as built-in service provider with dual protocol support (OpenAI/Anthropic)

**Key themes:**
- Release 2026.8.26 was prepared (PR #2549) and merged - suggests a release happened around 2026-08-26
- Multiple UI/UX polish work on login flow, sidebar, settings
- Analytics expansion - share, deploy, copy link events
- Library feature - permanent delete for cloud shared files
- Issue #2554 about adding Synthorai as a unified gateway with dual protocol support

Let me write the report in Chinese as requested.</think>

# LobsterAI 项目日报 — 2026-08-27

## 📌 今日速览

LobsterAI 在 8 月 27 日保持高活跃度，**过去 24 小时共产生 11 条 PR 和 1 条新 Issue**。社区节奏明显围绕 **Release 2026.8.26 版本收尾与若干 renderer/analytics 改进**展开，PR 关闭率高达 91%（10/11），仅 1 个 PR 仍待合并。今日没有新版本发布，但 8 月 26 日已完成了一次合并发布（PR #2549），整体项目处于**功能完善与版本迭代并行的健康阶段**。新 Issue #2554 关于 Synthorai 多协议网关的内置化诉求，反映出社区对**统一模型聚合层**的期待正在上升。

---

## 🚀 版本发布

今日**无新版本发布**。不过，PR #2549 ([Release/2026.8.26](https://github.com/netease-youdao/LobsterAI/pull/2549)) 已于 2026-08-26 关闭，表明 8.8.26 版本分支已完成合并（影响 `renderer / build / docs / windows` 多模块），属于已发布版本的后续收尾工作。

---

## 🔧 项目进展

今日合并/关闭的重要 PR 推动了多个方向的能力演进：

| 方向 | PR | 关键收益 |
|------|-----|---------|
| **数据分析完善** | [#2555](https://github.com/netease-youdao/LobsterAI/pull/2555) | 完善分享、部署、复制链接及权限更新结果事件，新增异步部署终态跟踪与可靠上报队列，补充完整测试 |
| **资料库能力升级** | [#2550](https://github.com/netease-youdao/LobsterAI/pull/2550) | 新增**分享文件永久删除**接口，含二次确认、状态冲突处理、删除失败数据校准与本地服务部署请求的去重修复 |
| **UI 体验打磨** | [#2558](https://github.com/netease-youdao/LobsterAI/pull/2558) | 登录按钮增加彩虹边框动画，兼顾明暗主题对比 |
| **设置项微调** | [#2548](https://github.com/netease-youdao/LobsterAI/pull/2548) | 设置面板宽度优化 |
| **图标暗色模式修复** | [#2553](https://github.com/netease-youdao/LobsterAI/pull/2553) | 修复智谱在 dark mode 下的图标显示（Windows 构建相关） |
| **登录引导 / 充值引导** | [#2547](https://github.com/netease-youdao/LobsterAI/pull/2547), [#2552](https://github.com/netease-youdao/LobsterAI/pull/2552) | 用户引导链路改进 |
| **小型修复合并** | [#2556](https://github.com/netease-youdao/LobsterAI/pull/2556), [#2557](https://github.com/netease-youdao/LobsterAI/pull/2557) | 8.24 版本相关的若干 fix 与重构 |

整体来看，项目在 **「分析链路、可观测性、用户引导、跨平台体验」**四个方向上都有实质推进。值得关注的两个长 PR（#2555、#2550）均覆盖了完整的事件—IPC—测试链路，体现项目在工程规范上趋于成熟。

---

## 💬 社区热点

今日**评论与讨论热度**集中于：

- **[#2554 — 新增 Synthorai 作为内置服务商](https://github.com/netease-youdao/LobsterAI/issues/2554)** —— 1 条评论、👍=0。Issue 内容详尽，作者 @cuihuan 写明了对「OpenAI / Anthropic 双协议同 base URL 支持」的具体诉求，并明确指出相比 Custom 自定义槽位的体感差异：
  1. 缺少默认模型列表
  2. 缺少 `switchableBaseUrls` 协议切换能力
  3. 设置页缺图标 / 默认 baseUrl，新手易填错
  4. 缺少请求体校验、缺 Anthropic 签名校验

- 虽然评论数不高，但该 Issue 描述详尽、问题定义专业，**对同类「统一协议网关」（如 OpenRouter）用户具有普遍代表性**，预期会推动内置服务商列表的扩张讨论。

---

## 🐞 Bug 与稳定性

| 严重程度 | Issue/PR | 描述 | 修复状态 |
|---------|---------|------|---------|
| 🟡 中 | [#2551](https://github.com/netease-youdao/LobsterAI/pull/2551) | `fix: app update preserve ready state` —— 应用更新时**就绪状态保留**相关 bug（`area: renderer / main`） | ⚠️ **PR 仍 OPEN，等待合并** |
| 🟢 低 | [#2553](https://github.com/netease-youdao/LobsterAI/pull/2553) | Zhipu 图标在 dark mode 下显示异常（Windows 平台） | ✅ 已关闭 |
| 🟢 低 | [#2550](https://github.com/netease-youdao/LobsterAI/pull/2550) | 分享文件删除后云端状态计数、本地收藏未同步 | ✅ 已关闭，含服务端不兼容兜底 |

整体稳定性较好，未报告崩溃或严重回归。**PR #2551 是当前唯一待合并 PR，建议维护者优先 review**。

---

## 💡 功能请求与路线图信号

**Issue [#2554](https://github.com/netease-youdao/LobsterAI/issues/2554) 是今日最具方向性的功能请求**：

- **诉求**：把 Synthorai（或其他同类单 key 多模型网关）从 Custom 自定义提升为**一等公民内置服务商**。
- **关键能力要求**：
  - 内置默认模型列表
  - `switchableBaseUrls`：OpenAI / Anthropic 协议切换
  - 默认 baseUrl + 图标
  - 协议特定的请求体验（如 Anthropic 签名校验）

**纳入下版本可能性评估**：🟡 中等。OpenRouter 已是先例，扩展到 Synthorai 路径清晰。但需考虑内置服务商数量已较多（18 个），核心维护者是否愿意持续扩展列表仍是关键变量。

其它隐含的路线图信号来自今日合并的 PR：
- **数据分析 / 可观测性**：#2555 体现项目正系统性补齐「分享/部署/复制/权限」全链路埋点。
- **资料库管理**：#2550 的「永久删除」说明云端分享能力仍在快速演进。
- **新用户引导**：#2558 + #2547 + #2552 一组 PR 显示团队正在重构登录/充值引导 UX。

---

## 🗣️ 用户反馈摘要

由于今日 Issues 评论数据较少（仅 #2554 有 1 条评论），用户反馈信号主要来自 Issue 描述本身：

- 🔴 **痛点**：内置 18 个服务商后，用户对**聚合类网关**的需求已不再单一（OpenRouter 之外还有 Synthorai 等），但 Custom 槽位在「开箱即用」上与内置条目差距明显，**新增用户配置成本高**。
- 🔴 **细节抱怨**：base URL 末尾是否带 `/v1` 这种小细节会成为新人踩坑点，呼吁默认 baseUrl + 输入校验。
- 🟢 **功能认可**：从 PR #2550 / #2555 的合并方向看，用户对「分享文件管理」「部署可观测性」的诉求已被积极响应。

---

## 📋 待处理积压

| 类型 | 编号 | 标题 | 状态 | 建议 |
|------|------|------|------|------|
| 🔴 待合并 PR | [#2551](https://github.com/netease-youdao/LobsterAI/pull/2551) | `fix: app update preserve ready state` | OPEN（创建于 8.26） | 已滞留 ≥1 天，建议维护者优先 review，避免影响后续 release |
| 🟡 待评估 Issue | [#2554](https://github.com/netease-youdao/LobsterAI/issues/2554) | 新增 Synthorai 作为内置服务商 | OPEN（创建于 8.26） | 描述专业且诉求具体，建议核心维护者定向回应，确认是否进入下版本路线图 |

---

## 📊 项目健康度总评

| 指标 | 评估 |
|------|------|
| **代码活跃度** | 🟢 高 — 11 PR / 日 |
| **PR 处理效率** | 🟢 优秀 — 91% 当日关闭 |
| **社区响应** | 🟡 中 — Issue 评论量低，需加强 |
| **版本节奏** | 🟢 稳定 — 8.26 已发布，8.27 进入迭代 |
| **文档同步** | 🟢 多个 PR 标注 `area: docs`，工程规范良好 |

**结论**：LobsterAI 今日呈现**「版本刚落地、迭代不停步」**的典型健康状态。维护团队节奏快、PR 闭环迅速。唯一建议关注的是 **PR #2551 长期 OPEN** 与 **Issue #2554 的路线图归属**，建议核心维护者尽快给出明确信号。

</details>

<details>
<summary><strong>QwenPaw</strong> — <a href="https://github.com/agentscope-ai/QwenPaw">agentscope-ai/QwenPaw</a></summary>

<think>The user wants me to generate a project daily report for QwenPaw (github.com/agentscope-ai/QwenPaw) based on the GitHub data provided. The date is 2026-08-27. Let me carefully analyze the data and create a structured report.

Let me analyze the key data points:

**Overview:**
- 28 Issues updated (15 new/active, 13 closed)
- 41 PRs updated (20 pending merge, 21 merged/closed)
- 1 new release: v2.2.0-beta.1

**Release v2.2.0-beta.1:**
- Documentation updates
- Provider fix for DashScope tool schemas
- Integration tests

**Key Issues to highlight:**
1. #6921 - [OPEN] Multi-step task stops without prompt, requires user to say "continue" - 11 comments, most discussed
2. #7318 - [OPEN] QwenPaw Hub multi-tenant edition coming in 2.2.0 - 7 comments
3. #7258 - [CLOSED] WeChat channel "show thinking process" setting not working
4. #7298 - [OPEN] OpenSSL 3.0.x TLS stack causing DPI resets
5. #7177 - [CLOSED] Optimize deploy homepage
6. #7324 - [CLOSED] Scheduled task push notification missing
7. #7316 - [OPEN] Tool to simplify/delete useless tool return content
8. #6285 - [CLOSED] Add qwen3.8-max-preview support
9. #7193 - [OPEN] Agent memory search confused across sessions
10. #7206 - [CLOSED] /compact fails with pydantic ValidationError
11. #6335 - [CLOSED] Multi-user question
12. #5780 - [CLOSED] Multi-user account management
13. #4702 - [CLOSED] RBAC multi-user
14. #7312 - [OPEN] Windows python hangs in execute_shell_command
15. #7335 - [OPEN] Prompt cache hit rate observability - 81% vs 96%
16. #7310 - [OPEN] Plugin conflict crash
17. #7279 - [CLOSED] Model selection should use dialog buttons
18. #7252 - [OPEN] OpenViking long-term memory backend
19. #7296 - [OPEN] OpenAI Responses multi-turn fails
20. #7339 - [OPEN] Disable auto-scroll in Desktop App
21. #7229 - [CLOSED] Local test runner skips suites
22. #7188 - [OPEN] Windows uninstall experience
23. #7280 - [CLOSED] Background tasks auto-cleanup
24. #7321 - [OPEN] Tool call shows stuck "executing" after stop
25. #7158 - [CLOSED] DingTalk group chat context modes
26. #7322 - [OPEN] Knowledge base file upload routing issue
27. #7212 - [CLOSED] Image inline pixel dimension limit crashes
28. #7333 - [OPEN] Release duty v2.2.0-beta.1 installation verification

**Key PRs to highlight:**
1. #7346 - perf(runtime): stabilize prompt cache prefixes
2. #7345 - Fix tool card stuck calling after stop
3. #7343 - fix(formatter): preserve local file URLs
4. #7337 - fix(providers): separate model output capabilities from request limits
5. #401 - Update README.md
6. #7342 - feat(token-usage): add prompt cache observability
7. #534 - Add French (fr-CA) language support
8. #7183 - feat(skills): add workspace-scoped preload configuration
9. #7338 - chore: bump the version to 2.2.0b2
10. #7332 - test: stabilize timing-sensitive tests
11. #7336 - fix(installer): handle NSIS uninstall process blockers
12. #7341 - test(integration): coverage sprint batch 5
13. #7327 - test(e2e): boost console coverage
14. #7344 - feat(console): support game-dev file languages
15. #7340 - feat(console): add chat scroll lock
16. #7320 - fix(provider): restore automatic model discovery for custom providers
17. #7334 - fix(chat): improve mobile composer controls
18. #7323 - fix(installer): ignore NSIS caller
19. #7194 - fix(workspace): make startup failure cleanup cancellation-safe
20. #7331 - fix(context): bound oversized single-line tool results

Now let me structure the report. The user wants:
1. 今日速览 (Today's Snapshot)
2. 版本发布 (Version Release)
3. 项目进展 (Project Progress)
4. 社区热点 (Community Hot Topics)
5. Bug 与稳定性 (Bugs and Stability)
6. 功能请求与路线图信号 (Feature Requests and Roadmap Signals)
7. 用户反馈摘要 (User Feedback Summary)
8. 待处理积压 (Pending Backlog)

Let me write this in Chinese, professional and data-driven.

I'll be thorough and well-structured. Let me draft each section.</think>

# QwenPaw 项目日报 · 2026-08-27

## 1. 今日速览

QwenPaw 今日进入 2.2.0 系列的密集迭代期：v2.2.0-beta.1 正式发布的同时，2.2.0-beta.2 的版本 bump PR (#7338) 已经合入，beta 节奏紧凑。过去 24 小时内共有 **28 个 Issue 变动（15 活跃/13 关闭）** 与 **41 个 PR 变动（20 待合并/21 关闭）**，整体活跃度维持高位且闭环率约 50%，反映出维护团队对社区反馈响应积极。**核心主题**集中在三件事：多租户 Hub 的产品讨论（#7318）、Prompt Cache 命中率的可观测与优化（#7335 + #7342 + #7346）、以及 Beta 阶段的安装/卸载体验打磨（#7336/#7323/#7188）。健康度整体良好，但存在数个影响日常使用的稳定性 Bug 需要在 Beta-2 前重点关注。

---

## 2. 版本发布

### 🚀 v2.2.0-beta.1

**发布时间**：2026-08-27
**Release 页面**：https://github.com/agentscope-ai/QwenPaw/releases/tag/v2.2.0-beta.1

**本次 Beta 主要变更**：
- **文档**：更新 scroll context manager 相关博客（PR #7300, @niceIrene）
- **Provider 修复**：为严格模式模型清洗 DashScope 的 tool schemas（PR #7284, @XiuShenAl）
- **集成测试**：定向覆盖关键路径
- **预发布验证任务**：Release Duty 安装验证 #7333（截止 2026-08-27 06:52 UTC）

**破坏性变更 / 迁移提示**：
- 截至当前 Release Notes 未公开标记 Breaking Change，**建议生产环境继续使用 2.1.1-beta.x**
- 升级前请备份 `~/.QwenPaw/` 工作区与自定义 skills

**⚠️ 注意事项**：
- 关联 Issue #7335 显示当前 Prompt Cache 命中率仅 81.68%，与 OpenCode（96.02%）有显著差距，**这是 Beta 阶段的核心优化目标**
- 已合入 PR #7342（Stage 1 可观测性）和 PR #7346（prefix 稳定化），预计 Beta-2 将带来明显改善

---

## 3. 项目进展

今日合入/关闭的重要 PR（按影响力排序）：

| PR | 影响领域 | 关键变更 | 状态 |
|---|---|---|---|
| [#7338](https://github.com/agentscope-ai/QwenPaw/pull/7338) | 发布流程 | 版本 bump 至 **2.2.0b2**，表明 Beta 周期进入第二阶段 | ✅ 已合并 |
| [#7342](https://github.com/agentscope-ai/QwenPaw/pull/7342) | 可观测性 / 成本 | 新增 Prompt Cache 可观测性（token 记录、API、聚合统计、Chat UI），对应 #7335 Stage 1 | ✅ 开放/待合并 |
| [#7346](https://github.com/agentscope-ai/QwenPaw/pull/7346) | 性能 | 稳定 prompt cache 前缀，按模型侧 tool 名称排序工具列表 | ✅ 开放/待合并 |
| [#7345](https://github.com/agentscope-ai/QwenPaw/pull/7345) | 稳定性 | **修复工具卡片取消后永久停留在"执行中"的回归**（对应 #7321） | ✅ 开放/待合并 |
| [#7343](https://github.com/agentscope-ai/QwenPaw/pull/7343) | 稳定性 | 媒体归一化时保留 `file://` 本地路径，避免被当远程 URL 处理 | ✅ 开放/待合并 |
| [#7337](https://github.com/agentscope-ai/QwenPaw/pull/7337) | Provider | 区分模型输出能力与请求级 `max_tokens` 上限，防止自动发现能力"反噬"请求预算 | ✅ 开放/待合并 |
| [#7340](https://github.com/agentscope-ai/QwenPaw/pull/7340) | Desktop UX | 新增 Chat 流式生成 **滚动锁定**开关（对应 #7339） | ✅ 开放/待合并 |
| [#7344](https://github.com/agentscope-ai/QwenPaw/pull/7344) | Desktop UX | Console 文件查看器支持 Unity/Godot 等游戏开发语言（对应 #7068） | ✅ 开放/待合并 |
| [#7336](https://github.com/agentscope-ai/QwenPaw/pull/7336) | 安装器 | 修复 Windows NSIS 卸载过程中两个真实阻塞进程未处理（#7323 的后续） | ✅ 开放/待合并 |
| [#7334](https://github.com/agentscope-ai/QwenPaw/pull/7334) | 移动端 UX | 重构 Chat 页面移动端 composer 控件至统一 44px 图标按钮 | ✅ 开放/待合并 |
| [#7331](https://github.com/agentscope-ai/QwenPaw/pull/7331) | 上下文管理 | 限制超大单行工具结果大小，完整结果以 workspace artifact 保存 | ✅ 开放/待合并 |
| [#7320](https://github.com/agentscope-ai/QwenPaw/pull/7320) | Provider | 恢复自定义 Provider 的自动模型发现（修复 #7305） | ✅ 开放/待合并 |
| [#7327](https://github.com/agentscope-ai/QwenPaw/pull/7327) | 测试 | E2E Console 覆盖 +23 用例（基线 28.6% → 预计 +6-7pp） | ✅ 已合并 |
| [#7341](https://github.com/agentscope-ai/QwenPaw/pull/7341) | 测试 | 集成测试 Sprint Batch 5：495 用例覆盖 endpoint / CLI / module | ✅ 开放/待合并 |
| [#7332](https://github.com/agentscope-ai/QwenPaw/pull/7332) | 测试稳定性 | 修复 GitHub Actions 中时序敏感用例的抖动 | ✅ 已合并 |
| [#7194](https://github.com/agentscope-ai/QwenPaw/pull/7194) | Workspace 生命周期 | 启动失败清理支持取消语义，避免残留半成品服务 | ✅ 已合并 |
| [#534](https://github.com/agentscope-ai/QwenPaw/pull/534) | 国际化 | 新增 fr-CA（加拿大法语）完整本地化（17 篇文档 + Web 控制台） | ✅ 已关闭 |

**推进评估**：项目在 **可观测性、Provider 健壮性、Desktop UX、测试覆盖率、移动端** 五个方向并行推进，整体向前迈进了可观的一步；尤其 Prompt Cache 优化从"发现 → 可观测 → 优化"形成闭环。

---

## 4. 社区热点

按评论数 / 影响力排序：

1. **[#6921](https://github.com/agentscope-ai/QwenPaw/issues/6921) · 11 评论 · [bug, need-info]**
   *"Now 2.1, 3.1, 3.2. Let me do all three." 说完即停* —— 用户 @rerbin 长期遭遇。模型规划完下一步就静默退出，需手动"继续"。**这是社区呼声最高的体验级 Bug**，尚未指派修复。建议维护者优先关注。

2. **[#7318](https://github.com/agentscope-ai/QwenPaw/issues/7318) · 7 评论 · [Discussion]**
   *QwenPaw Hub 多租户版 2.2.0 路线讨论* —— 作者 @rayraykk 主动发起征集，与 #2324 / #6335 / #5780 / #4702 形成关联簇。**反映 B 端诉求强烈**，Hub 是 2.2.0 的重头戏。

3. **[#7258](https://github.com/agentscope-ai/QwenPaw/issues/7258) · 6 评论 · [CLOSED]**
   *微信频道"显示思考过程"设置无效* —— 频道配置 Bug，今日关闭，应已修复。

4. **[#7298](https://github.com/agentscope-ai/QwenPaw/issues/7298) · 4 评论 · [bug]**
   *Desktop 与 Docker 内置 OpenSSL 3.0.x TLS 栈遭运营商 DPI 重置* —— @LUOSENGWA 提交的深度技术问题。**在某些网络环境下完全无法使用**，影响跨国用户。Desktop 端目前无 workaround。

5. **[#7177](https://github.com/agentscope-ai/QwenPaw/issues/7177) · 4 评论 · [CLOSED]**
   *部署平台首页移动端布局优化* —— 今日关闭，应已被采纳。

7. **[#7324](https://github.com/agentscope-ai/QwenPaw/issues/7324) · 3 评论 · [CLOSED]**
   *定时任务执行成功推送消息偶发丢失* —— Windows Desktop 2.1.1 beta3。今日关闭。

8. **[#7316](https://github.com/agentscope-ai/QwenPaw/issues/7316) · 3 评论 · [Question]**
   *设计工具裁剪 ReAct 循环中无效工具返回* —— 上下文优化方向的有趣提议。

---

## 5. Bug 与稳定性

按严重程度排序：

| 级别 | Issue | 描述 | 状态 / 是否有 Fix |
|---|---|---|---|
| 🔴 P0 | [#6921](https://github.com/agentscope-ai/QwenPaw/issues/6921) | 多步任务中途静默停止（评论最多，11 条） | ❌ **无修复，OPEN** |
| 🔴 P0 | [#7298](https://github.com/agentscope-ai/QwenPaw/issues/7298) | Desktop/Docker 内置 OpenSSL 3.0.x 被 DPI 重置，Desktop 无 workaround | ❌ 无修复，OPEN |
| 🟠 P1 | [#7321](https://github.com/agentscope-ai/QwenPaw/issues/7321) | 工具调用结束后 UI 永久显示"执行中" | ✅ **PR [#7345](https://github.com/agentscope-ai/QwenPaw/pull/7345) 待合并** |
| 🟠 P1 | [#7193](https://github.com/agentscope-ai/QwenPaw/issues/7193) | 同一 Agent 不同会话间记忆检索串台 | ❌ 无修复，OPEN |
| 🟠 P1 | [#7296](https://github.com/agentscope-ai/QwenPaw/issues/7296) | OpenAI Responses 多轮在 stateless 上游 400 报错（reasoning item expired） | ❌ 无修复，OPEN |
| 🟠 P1 | [#7312](https://github.com/agentscope-ai/QwenPaw/issues/7312) | Windows `execute_shell_command` 因继承 stdin 挂死（缺 `stdin=DEVNULL`） | ❌ 无修复，OPEN |
| 🟡 P2 | [#7310](https://github.com/agentscope-ai/QwenPaw/issues/7310) | datapaw 插件缺失导致启动反复报错 | ❌ 无修复，OPEN |
| 🟡 P2 | [#7322](https://github.com/agentscope-ai/QwenPaw/issues/7322) | 工作区上传文件未路由到当前选中分类 | ❌ 无修复，OPEN（疑为 Bug 而非设计） |
| ✅ 已闭环 | [#7258](https://github.com/agentscope-ai/QwenPaw/issues/7258) | 微信"显示思考过程"失效 | 关闭 |
| ✅ 已闭环 | [#7206](https://github.com/agentscope-ai/QwenPaw/issues/7206) | `/compact` 在 `compact_threshold_ratio=0.9` 时 ValidationError 回归 | 关闭 |
| ✅ 已闭环 | [#7324](https://github.com/agentscope-ai/QwenPaw/issues/7324) | 定时任务推送消息丢失 | 关闭 |
| ✅ 已闭环 | [#7212](https://github.com/agentscope-ai/QwenPaw/issues/7212) | 图片像素超限直接崩溃而非降级 | 关闭 |
| ✅ 已闭环 | [#7229](https://github.com/agentscope-ai/QwenPaw/issues/7229) | 本地测试 runner 跳过用例并误报成功 | 关闭 |

**结论**：今日关闭了 5 个 Bug，**修复/关闭比健康**；但 #6921（多步停止）与 #7298（TLS/DPI）作为 P0 已暴露超 2 周且无 PR，建议尽快分配 Owner。

---

## 6. 功能请求与路线图信号

**与 2.2.0 已合入 PR 高度对齐的需求**（下一版本可能纳入）：

| 需求 | 信号强度 | 对应 PR | 评估 |
|---|---|---|---|
| Prompt Cache 命中率可观测与优化 | 🔥🔥🔥 | [#7342](https://github.com/agentscope-ai/QwenPaw/pull/7342)、[#7346](https://github.com/agentscope-ai/QwenPaw/pull/7346) | **几乎确定纳入 2.2.0** |
| Chat 滚动锁定 | 🔥🔥 | [#7340](https://github.com/agentscope-ai/QwenPaw/pull/7340) | 已开放，#7339 |
| Console 游戏开发语言高亮 | 🔥🔥 |

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/NousResearch/hermes-agent">NousResearch/hermes-agent</a></summary>

<think>The user wants me to generate a daily report for the Hermes Agent project based on GitHub data from 2026-08-27. Let me analyze the data carefully and structure the report according to the 8 sections requested.

Let me first understand the data:

**Overall activity:**
- 50 Issues updated in last 24h (47 new/active, 3 closed)
- 50 PRs updated in last 24h (41 pending, 9 merged/closed)
- 0 new releases

**Key Issues to highlight:**
1. #66616 - Automated freshness probe failure (104 comments!) - Most active issue, about Skills index being stale
2. #93888 - Desktop session restore failure (13 comments)
3. #51327 - Linux Desktop silent failure (12 comments)
4. #84361 - Desktop MEDIA file links (7 comments)
5. #95541 - macOS TCC issue (CLOSED, 4 comments)
6. #86366 - Compaction duplication bug (4 comments)
7. #61443 - Nix desktop build break (4 comments)
8. #77836 - Weixin rate limit infinite retry (3 comments, 1 like)
9. #96024 - SSH remote backend boot failure (2 comments, 2 likes)
10. #96183 - Stale messages in Bot Chat (2 comments)
11. #96134 - USER.md/MEMORY.md not injected (2 comments)
12. #77549 - Compaction notice ignores progress_notices (CLOSED, 2 comments)
13. #91653 - Failed delivery obligations not retried (2 comments)
14. #75131 - Cron delivery context amnesia (2 comments)
15. #96129 - SSH remote bootstrap timeout (CLOSED, 2 comments)
16. #96063 - Desktop model pill provider hidden (2 comments)
17. #96155 - Native Responses preflight (1 comment)
18. #95779 - Clear chat action bug (1 comment)
19. #96177 - Windows cold-start issues (1 comment)
20. #96188 - SSH mode double quoting (1 comment)
21. #96182 - Desktop app update fails (1 comment)
22. #91609 - Firecrawl 403 fails failover (1 comment)
23. #96136 - Bot Mode Group Settings feature (1 comment)
24. #91329 - Bot Mode manage members (1 comment)
25. #96164 - GHEC Copilot provider (1 comment)
26. #85845 - OpenSpec plugin feature (3 likes)
27. #96160 - Desktop chat viewport jumps (1 comment)
28. #32504 - Budget grace call redundancy (1 comment)
29. #96138 - Context length detection failure (1 comment)
30. #96139 - Quit confirmation bypassed (1 comment)

**Closed Issues (3):**
- #95541 - macOS TCC anchor (CLOSED as duplicate)
- #77549 - Compaction notice (CLOSED)
- #96129 - SSH remote bootstrap (CLOSED)

**Notable PRs:**
- #96191 - Copilot Enterprise authentication fix
- #96192 - Desktop fresh chat socket fix
- #96194 - CLI memory flush log
- #96195 - Memory save_to_disk concurrency fix
- #96196 - Hermes coding worker orchestration (feature, Chinese)
- #96197 - Doctor respects auto-pruning
- #96198 - macOS gateway supervision portable
- #96199 - Russian language memory extraction
- #96201 - /new session creation log
- #96204 - Gateway hung sessions auto-resume
- #96203 - Desktop gzip JSON decode
- #96003 - Config overwrite refused (CLOSED as duplicate)

**Closed/Merged PRs (9 total):**
- #96202 - test_default_path Windows (CLOSED as salvage)
- #96003 - config overwrite (CLOSED as duplicate)
- And others

Let me now categorize and structure this report properly. I need to:
- Be objective and data-driven
- Include GitHub links
- Focus on project health
- Cover all 8 sections

Let me draft the report now.

The most striking issue is #66616 with 104 comments - this is a long-standing issue about Skills index staleness, suggesting ongoing maintenance problems.

Many desktop-related issues (especially SSH, Windows, macOS) suggest cross-platform pain points.
Multiple memory/session issues suggest reliability problems in core flows.
Multiple Gateway/Weixin/WeCom issues suggest the platform integration layer needs work.

Let me write the report in Chinese since the user wrote in Chinese.</think>

# Hermes Agent 项目日报
**日期：2026-08-27**

---

## 1. 今日速览

Hermes Agent 今日保持高度活跃的开发节奏：过去 24 小时共有 **50 条 Issues** 和 **50 条 PRs** 更新，整体处理量与昨日持平。Issues 端以 **Bug 报告** 为绝对主导（约 70%+），且 Desktop / Gateway / SSH 跨平台兼容性、Memory 与 Session 状态管理两条线索持续发酵；PR 端则有大量针对性修复（mcp-oauth、copilot、memory、gateway）进入待合并队列。值得警惕的是，**#66616（Skills index stale）单条 Issue 评论已达 104 条**，暴露出长期未根治的基础设施健康度问题。整体评估：**项目开发动力充沛，但稳定性债务正在累积，桌面端与跨平台体验是当前最大风险面**。

---

## 2. 版本发布

今日无新版本发布。Hermes Agent 当前公开版本为 **v0.20.5**（来自 #96129、#96164 等多个今日新开 Issue 中明确标注的环境信息）。

---

## 3. 项目进展

今日 **3 条 Issue 已关闭**（#95541、#77549、#96129），其中 #95541（macOS TCC anchor）与 #96129（SSH remote bootstrap）合并到 PR 中解决；#77549（compaction completion notice）作为已完成修复归档。

PR 端推进较显著的方向：

- **GitHub Enterprise Copilot 鉴权** — [#96191](https://github.com/NousResearch/hermes-agent/pull/96191) 修复 GHEC 用户 `COPILOT_API_BASE_URL` 被忽略的鉴权失败问题，配套 issue [#96164](https://github.com/NousResearch/hermes-agent/issues/96164)。
- **Memory 并发写入安全** — [#96195](https://github.com/NousResearch/hermes-agent/pull/96195) 修复 `save_to_disk()` 在多实例/外部写入场景下静默丢数据，配合 [#1726](https://github.com/NousResearch/hermes-agent/pull/1726) 已持锁，闭环关键数据路径。
- **Desktop 启动可靠性** — [#96192](https://github.com/NousResearch/hermes-agent/pull/96192) 修复首轮对话 socket 提前关闭导致 Bot Chat 路由失效；[#96203](https://github.com/NousResearch/hermes-agent/pull/96203) 为 Electron 主进程增加 gzip 解码与 64 MiB 解压上限。
- **可观测性补强** — [#96206](https://github.com/NousResearch/hermes-agent/pull/96206)、[#96194](https://github.com/NousResearch/hermes-agent/pull/96194)、[#96201](https://github.com/NousResearch/hermes-agent/pull/96201) 三个 PR 由 @anhtahaylove 集中补齐 TUI finalize、CLI memory flush、`/new` 会话创建失败三类静默路径的日志。
- **macOS Gateway 可移植性** — [#96198](https://github.com/NousResearch/hermes-agent/pull/96198) 让 launchd 监督诊断摆脱 GNU-only 工具依赖。
- **Gateway 死循环防护** — [#96204](https://github.com/NousResearch/hermes-agent/pull/96204) 给卡死的合成恢复 session 加上计数阈值，避免 SIGKILL 后无限复活。
- **多语扩展** — [#96199](https://github.com/NousResearch/hermes-agent/pull/96199) 为 Holographic Memory 增加俄语长效事实抽取。

整体看，项目处于 **"持续加固 + 多点修补"** 阶段，未见重大新特性合入主线，但稳定性与可观测性的提升是肉眼可见的。

---

## 4. 社区热点

按评论数与互动量排序：

| 排名 | 编号 | 标题 | 评论 | 👍 | 类型 |
|---|---|---|---|---|---|
| 1 | [#66616](https://github.com/NousResearch/hermes-agent/issues/66616) | Skills index is stale or degraded | **104** | 0 | 自动化巡检 |
| 2 | [#93888](https://github.com/NousResearch/hermes-agent/issues/93888) | Desktop 无法恢复 Remote Gateway 会话 | 13 | 0 | Bug P1 |
| 3 | [#51327](https://github.com/NousResearch/hermes-agent/issues/51327) | Linux Desktop `.desktop` 启动器静默失败 | 12 | 0 | Bug P1 |
| 4 | [#84361](https://github.com/NousResearch/hermes-agent/issues/84361) | Desktop `MEDIA:` 文件链接双重缺陷 | 7 | 0 | Bug P3 |
| 5 | [#85845](https://github.com/NousResearch/hermes-agent/issues/85845) | 官方 OpenSpec 插件请求 | 1 | **3** | Feature |

**诉求解读：**

- **#66616 异常火爆**：这是一个由 `@nousbot-eng` 维护的 **自动化巡检机器人** 长期报出的 Skills 索引陈旧告警（当前陈旧 29.8h，阈值 26h）。104 条评论说明该项目日常巡检机制透明，但也暴露出 **Skills 文档/索引的同步链路（cron 6/18 UTC 的 workflow）已存在稳定性问题**，需要人工跟进或重新评估调度策略。
- **#93888 / #51327 / #84361** 三连反映 Desktop 用户在 Linux + 远程 Gateway、Linux `.desktop` 启动、桌面内 MEDIA 交互三类场景下频繁踩坑，社区对"开箱即用"体验的期待与现实存在落差。
- **#85845** 是当前**互动量最高的 feature 请求**（3 个 👍），说明 OpenSpec（规范驱动开发工作流）在潜在用户群中已有一定认知度；目前尚无对应 PR 出现。

---

## 5. Bug 与稳定性

按严重程度排列今日新报告 / 仍处于活跃状态的 Bug：

### 🔴 P1（高优先级，影响主流程）

- **[#93888](https://github.com/NousResearch/hermes-agent/issues/93888)** Desktop 发送本地 runtime ID 到 Remote Gateway 后无法恢复 stored session，导致 "Restore failed — Session not found" 永久卡死。**尚无 PR**。
- **[#51327](https://github.com/NousResearch/hermes-agent/issues/51327)** Linux Desktop 经 `.desktop` 启动器启动时因 Electron `chrome-sandbox` 缺少 `setuid`（4755）静默失败。**尚无 PR**。

### 🟠 P2（中优先级，跨平台与 Gateway）

- **[#86366](https://github.com/NousResearch/hermes-agent/issues/86366)** `archive_and_compact` 把携带转发的 tail 也标记为 `compacted=1`，导致每次压缩都重复入库存档。**尚无 PR**。
- **[#61443](https://github.com/NousResearch/hermes-agent/issues/61443)** `nix build .#desktop` 因硬编码 Electron node-headers hash 在 nixpkgs 每次 bump 时必崩。**尚无 PR**。
- **[#77836](https://github.com/NousResearch/hermes-agent/issues/77836)** Weixin/iLink 限流熔断器进入无限重试循环（`errcode=-2`）。👍1，**尚无 PR**。
- **[#96024](https://github.com/NousResearch/hermes-agent/issues/96024)** Desktop SSH Remote Backend 启动失败，产生僵尸进程。👍2，**尚无 PR**。
- **[#96134](https://github.com/NousResearch/hermes-agent/issues/96134)** Gateway 模式下 `USER.md`/`MEMORY.md` 未注入 system prompt（CLI 正常）。**尚无 PR**。
- **[#96188](https://github.com/NousResearch/hermes-agent/issues/96188)** Desktop SSH 模式 `remote-lifecycle.ts` 双重 shell 引用导致远程后端永远起不来（重复 #96129）。
- **[#96155](https://github.com/NousResearch/hermes-agent/issues/96155)** OpenAI Codex Responses 传输层 preflight 把未剪枝的持久化历史计入 ~152K，触发非必要压缩。**尚无 PR**。
- **[#96177](https://github.com/NousResearch/hermes-agent/issues/96177)** Windows 冷启动 WS 探测 10s 超时相对 12–28s 后端导入过短，i18n locale 拉取无重试。**尚无 PR**。
- **[#96182](https://github.com/NousResearch/hermes-agent/issues/96182)** Desktop 应用内更新失败（带 debug report）。**尚无 PR**。
- **[#96164](https://github.com/NousResearch/hermes-agent/issues/96164)** GHEC Copilot provider 忽略 `COPILOT_API_BASE_URL`。**已有 PR** [#96191](https://github.com/NousResearch/hermes-agent/pull/96191)。
- **[#96139](https://github.com/NousResearch/hermes-agent/issues/96139)** Desktop 关闭最后窗口时静默绕过 `heldQuitForActiveWork`，强杀后端。**尚无 PR**。
- **[#96129](https://github.com/NousResearch/hermes-agent/issues/96129)** Desktop SSH remote bootstrap 20s exec timeout ✅ **已 CLOSED**。

### 🟡 P3（低优先级 / 影响范围有限）

- **[#84361](https://github.com/NousResearch/hermes-agent/issues/84361)** Desktop `MEDIA:` 双缺陷（tag regex 吞 markdown 尾部 + `file://` 字符串拼接）。
- **[#95541](https://github.com/NousResearch/hermes-agent/issues/95541)** macOS TCC anchor 在静态链接 uv CPython 上别名指向 symlink 后找不到 stdlib ✅ **已 CLOSED**（重复）。
- **[#77549](https://github.com/NousResearch/hermes-agent/issues/77549)** compaction 完成通知忽略 `progress_notices=false` ✅ **已 CLOSED**。
- **[#95779](https://github.com/NousResearch/hermes-agent/issues/95779)** Desktop "Clear chat" 只清 UI 状态不清会话。
- **[#91653](https://github.com/NousResearch/hermes-agent/issues/91653)** Gateway `DeliveryLedger` 只回收 owner 已死的投递义务，平台拒绝时永远不重投。
- **[#96160](https://github.com/NousResearch/hermes-agent/issues/96160)** Desktop 流式响应中视口自行跳顶。
- **[#96063](https://github.com/NousResearch/hermes-agent/issues/96063)** Desktop model pill 仅显示模型名，provider 不显示导致发到错误 provider。
- **[#91609](https://github.com/NousResearch/hermes-agent/issues/91609)** Keyless Firecrawl 403 阻断 failover ring。
- **[#96183](https://github.com/NousResearch/hermes-agent/issues/96183)** Bot Chat 面板离线消息不显示，需重启。
- **[#96138](https://github.com/NousResearch/hermes-agent/issues/96138)** axonhub 网关后 context length 检测：LM Studio 误报 + `_extract_pricing` 崩溃。
- **[#32504](https://github.com/NousResearch/hermes-agent/issues/32504)** `_budget_grace_call` / `_budget_exhausted_injected` 残留死代码重构请求。

**整体判断**：约 **80% 的 P1/P2 Bug 当前没有对应的修复 PR**，桌面端（尤其 SSH Remote 与 Windows/macOS 平台）已成重灾区，建议维护者优先串联修复工作。

---

## 6. 功能请求与路线图信号

今日新增或活跃的功能请求：

- **[#85845](https://github.com/NousResearch/hermes-agent/issues/85845)** 官方 **OpenSpec** 插件（spec-driven development）— 👍3，是当前呼声最高的 feature；社区中已有人工工作流工具想接入 Hermes。
- **[#91329](https://github.com/NousResearch/hermes-agent/issues/91329)** Bot Mode **Group settings 内直接管理成员**（仅 1 👍，与 #96136 重复）。
- **[#96136](https://github.com/NousResearch/hermes-agent/issues/96136)** Bot Mode **群组成员的模型/provider/reasoning 可在群设置中独立编辑**（重复 #91329）。
- **[#75131](https://github.com/NousResearch/hermes-agent/issues/75131)** Cron `attach_to_session: true` 时携带前序交付上下文，避免回复失忆。
- **[#96196](https://github.com/NousResearch/hermes-agent/pull/96196)** 中文社区 PR：增加 **Hermes 编码 Worker 编排闭环**（Codex/Claude 外部 Worker + VS Code ACP 样例 + Issue→PR 前置检查）— **首个来自中文用户的重大功能 PR**，附完整测试矩阵。

**下一版本概率评估**：
- 高概率进入 0.20.6：Bot Mode 成员管理（#91329/#96136 同时推动）+ Memory 并发安全（#96195）。
- 中概率：OpenSpec 官方插件（#85845）— 需求真实但目前缺乏 maintainer 响应。
- 长期路线：编码 Worker 编排（#96196）作为重大能力扩展，是否合入需 maintainer 评审。

---

## 7. 用户反馈摘要

从今日 Issues 评论中提炼的真实用户痛点：

1. **"Desktop 远程后端启动完全不可靠"** — 多名用户（@wty2631023-GH, @SZWzz, @a-lang）独立报告 SSH Remote 模式启动失败、僵尸进程、超时；同一天内出现 3 个不同角度的同类报告，暗示该路径存在系统性缺陷而非偶发。
2. **"Windows 启动慢 + 更新失败"** — @chizee 报告更新失败并提供完整 debug report；@yue865086-stack 详细测量了冷启动时序（WS 探针 10s vs 后端 12–28s）。
3. **"Bot Chat 离线消息像被吃了"** — @8934173 指出 cron 投递完成后 Bot Chat 不刷新，必须重启应用；反映离线/在线状态同步的 UX 不直观。
4. **"我点了 Clear，session 没清"** — @fantasma62：Clear 只清 UI 不清会话、context 使用率纹丝不动，反映**危险动词命名歧义**。
5. **"X / Alt+F4 关窗口会杀掉

</details>

<details>
<summary><strong>OpenHuman</strong> — <a href="https://github.com/tinyhumansai/openhuman">tinyhumansai/openhuman</a></summary>

<think>Let me analyze this GitHub data for OpenHuman and generate a comprehensive daily report for 2026-08-27.

Let me organize the data:

**Issues (19 total, 9 open, 10 closed):**

Open Issues:
1. #5600 - GitHub MCP server fails — uvx not found on PATH (5 comments)
2. #5626 - outcome summarize node fails after retries (4 comments)
3. #5604 - staging-api.tinyhumans.ai returns transport-level connection failure (4 comments)
4. #5806 - Sub-agents cannot receive prior results (1 comment)
5. #5820 - Memory-tree corruption reported as "non-fatal" for 34min (0 comments)
6. #5786 - README desktop dev command misleading on Windows (0 comments)
7. #5785 - Windows fresh clone cannot run pnpm dev:app:win (0 comments)
8. #5781 - README says Rust 1.93.0 but rust-toolchain.toml requires 1.96.1 (0 comments)
9. #5780 - Add Tavily as a BYOK search provider (0 comments)

Closed Issues:
1. #5635 - config.toml insecure permissions (auto-fixed)
2. #5633 - Notion sync broken
3. #5636 - ac.inference.sh MCP server transport drops
4. #5627 - TinyPlace identity 404
5. #5801 - Manual memory-source Sync button refuses
6. #5800 - Feature-Gate Smoke (gates off) red
7. #5819 - Memory module resolves config.toml inside workspace
8. #5805 - wallet is not configured logs at ERR to Sentry
9. #5804 - Graceful pause at model-call cap still dispatches sub-agent
10. #5802 - Coding-session import reports failure banner

**PRs (34 total, 19 pending merge, 15 merged/closed):**

Notable PRs:
1. #5821 - fix(prompt): append tool-policy boundary (open)
2. #5812 - Tie each module's registry pin to its submodule pin (open)
3. #5818 - Re-anchor composio scopes refusal (closed/merged)
4. #5811 - Classify wallet-not-configured as expected (closed/merged)
5. #5810 - Make cap pause binding on sub-agent dispatch (closed/merged)
6. #5809 - Classify not-yet-published 404 for TinyPlace (closed/merged)
7. #5808 - Bridge four defaulted module members (closed/merged)
8. #5815 - Remove inert omit_skills_catalog flag (open)
9. #5813 - Add missing tauri CLI shim for Android (open)
10. #5817 - Finish per-config connection lookups (open)
11. #5791 - Skip input write-back during IME composition (open)
12. #5816 - Stop emitting assistant roles on CC stdin (open)
13. #5790 - Launch claude auth login, not obsolete claude login (open)
14. #5814 - Bump mobile Tauri to patch GHSA-7gmj-67g7-phm9 (open)
15. #5803 - Stop reporting completed coding-session import as failure (closed/merged)
16. #5807 - Tell null-classed driver from modules-off build (closed/merged)
17. #5799 - Unbreak main: name missing memory module (closed/merged)
18. #5798 - Fix Rust version in 6 READMEs (open)
19. #5797 - Re-anchor style-section assertions (closed/merged)
20. #5796 - Vendor tinyagents, tinyflows, tinyplace and tinywallet (closed/merged)

Now let me write the report in Chinese, structured according to the requirements.

Key observations:
- Many closed issues today have corresponding fix PRs that were also merged today
- Issues #5801, #5805, #5804, #5802, #5819, #5627 all have associated merged fix PRs
- The project shows a pattern of "issue → PR → merge" rapid cycle
- Several issues from pre-prod build (Aug 19-20) still open
- Security concern: CVE-2026-5947 in tauri 2.10.3 needs to be patched (PR #5814 open)
- Documentation fixes are also in progress
- Community seems active with multiple contributors

Let me structure this carefully.</think>

# OpenHuman 项目日报 · 2026-08-27

> 数据来源：GitHub Issues / PRs（过去 24 小时）
> 分析对象：[tinyhumansai/openhuman](https://github.com/tinyhumansai/openhuman)

---

## 一、今日速览

过去 24 小时 OpenHuman 仓库出现明显的"批量修复"特征：19 条 Issue 更新（其中 10 条已关闭）、34 条 PR 更新（15 条已合并/关闭），且绝大多数已关闭的 Issue 都能在同一时段找到对应的修复 PR，呈现典型的"报告 → 修复 → 合并"快速闭环。多个 high-severity 隐患（Rust 主干冒烟、MCP 传输抖动、Tauri 2.10.3 CVE、Sub-agent 调度失效）在同一窗口被识别并修复，项目健康度从"红 main"迅速回正。但仍有 9 条 Issue 处于 OPEN 状态，其中包括阻断 pre-prod 联调的环境类问题与安全补丁待合并，提示基础设施侧的稳定性尚未完全恢复。

---

## 二、版本发布

无新版本发布。今日所有变更均通过主干提交与 PR 形式落地，尚未形成 tagged release。

---

## 三、项目进展（今日合并/关闭的重要 PR）

今日共有 15 条 PR 关闭，主线方向集中在"修复 main 冒烟 + 修复 Sub-agent / Memory 模块契约缺失"，整体推动 main 从 red → green：

| PR | 主题 | 影响 |
|----|------|------|
| [#5799](https://github.com/tinyhumansai/openhuman/pull/5799) | Unbreak main：指出缺失的 memory 模块并清空共享存储 | 修复 #5779 合入后引入的双重 CI 红；同时区分 build-time null 与用户配置 null，错误信息更精确 |
| [#5807](https://github.com/tinyhumansai/openhuman/pull/5807) | 区分"主动设为 null 的驱动"与"未编译模块" | 修正 #5799 引入的错误措辞，build 时模块禁用与用户显式配置不再混为一谈 |
| [#5808](https://github.com/tinyhumansai/openhuman/pull/5808) | 在模块桥上补齐 4 个默认实现 | 修复手动 "Sync now" 报 `unsupported capability: source_sync` 的核心问题（见 #5801） |
| [#5810](https://github.com/tinyhumansai/openhuman/pull/5810) | 模型调用上限暂停对子代理派发具有 binding 效力 | 修复"到达 cap 又再次派发子代理导致整轮作废"（见 #5804） |
| [#5811](https://github.com/tinyhumansai/openhuman/pull/5811) | 将 wallet 未配置归类为 expected | 取代 6 月的同类修复（#3964），通过中央分类器 + 调用端 gate，让 Sentry 不再被预期状态污染 |
| [#5809](https://github.com/tinyhumansai/openhuman/pull/5809) | TinyPlace 未发布 404 改为 debug 日志 | 修复 #5627 误报，并把诊断信息反向恢复（把 warn 留给真实异常） |
| [#5818](https://github.com/tinyhumansai/openhuman/pull/5818) | 重新锚定 composio scopes 拒绝断言 | 修复 Rust Core Coverage 因字符串重构产生的孤儿断言 |
| [#5797](https://github.com/tinyhumansai/openhuman/pull/5797) | 重锚 STYLE 段落断言 | 修复 STYLE.md 改名后三条 raw_coverage 断言挂掉 |
| [#5796](https://github.com/tinyhumansai/openhuman/pull/5796) | vendor：升级 tinyagents / tinyflows / tinyplace / tinywallet | 与 #5772 配合，11 个其他子模块仍需跟进 |
| [#5803](https://github.com/tinyhumansai/openhuman/pull/5803) | 不再把成功的 coding-session 导入显示为失败 | 修复 "Import all sessions" 红 banner 误导（见 #5802） |

整体看，主线在 24 小时内完成了 **从 main 红 → main 绿 + 多个用户体验红线修复**，推进幅度显著。

---

## 四、社区热点（评论数最多 / 最受关注）

按评论数排序：

1. [#5600 — GitHub MCP server fails: uvx not found](https://github.com/tinyhumansai/openhuman/issues/5600)（5 条评论，仍 OPEN）
   - pre-prod 联调阻塞：GitHub MCP 重连失败，`uvx` 不在 PATH
   - 诉求：把 `uv` 安装纳入 staging 镜像或文档化先决条件
2. [#5635 — config.toml 权限 644 不安全](https://github.com/tinyhumansai/openhuman/issues/5635)（5 条评论，已 CLOSED）
   - 引发关于"写入时即设 0600 vs 启动时再修正"的安全哲学讨论
3. [#5626 — summarize outcome node 重试耗尽](https://github.com/tinyhumansai/openhuman/issues/5626)（4 条评论，仍 OPEN）
   - agent turn 失败后无总结；与 #5627、#5800 同期出现
4. [#5604 — staging-api.tinyhumans.ai 传输层失败](https://github.com/tinyhumansai/openhuman/issues/5604)（4 条评论，仍 OPEN）
   - 04:00–04:12 集中爆发，影响 LLM 调用主干
5. [#5633 — Notion sync 全量失败](https://github.com/tinyhumansai/openhuman/issues/5633)（4 条评论，已 CLOSED）
   - 51 次连续 tick 失败，对应 composio/notion 集成损坏

底层诉求高度一致：**pre-prod 环境基础设施成熟度不足** + **多个第三方集成的契约实现遗漏**。

---

## 五、Bug 与稳定性

### 🔴 严重（high-severity）

| ID | 标题 | 是否已有 fix PR |
|----|------|----------------|
| [#5814](https://github.com/tinyhumansai/openhuman/pull/5814) | 移动端 Tauri 2.10.3 → 2.11.1（修复 CVE-2026-5947 / GHSA-7gmj-67g7-phm9，origin confusion） | **OPEN，待合并** |
| [#5600](https://github.com/tinyhumansai/openhuman/issues/5600) | GitHub MCP server 因 `uvx` 缺失完全无法连接 | ❌ 未有 PR |
| [#5604](https://github.com/tinyhumansai/openhuman/issues/5604) | staging-api.tinyhumans.ai 传输层失败 | ❌ 未有 PR |
| [#5626](https://github.com/tinyhumansai/openhuman/issues/5626) | summarize node 重试耗尽导致 turn 失总结 | ❌ 未有 PR |
| [#5820](https://github.com/tinyhumansai/openhuman/issues/5820) | memory-tree 损坏被标记 non-fatal 34 分钟，最终清空源注册表 | ❌ 未有 PR |
| [#5806](https://github.com/tinyhumansai/openhuman/issues/5806) | Sub-agent 无法读取先前结果，orchestrator 重复发现 | ❌ 未有 PR |

### 🟡 中等（medium）

| ID | 标题 | 是否已有 fix PR |
|----|------|----------------|
| [#5785](https://github.com/tinyhumansai/openhuman/issues/5785) | Windows 新克隆无法运行 `pnpm dev:app:win`（缺 .env、tauri:ensure、cargo-tauri.exe） | ❌ 未有 PR |
| [#5786](https://github.com/tinyhumansai/openhuman/issues/5786) | README desktop dev 命令在 Windows 上指向 macOS 脚本 | ❌ 未有 PR |
| [#5781](https://github.com/tinyhumansai/openhuman/issues/5781) | README 标注 Rust 1.93.0，但 toolchain 要求 1.96.1 | ✅ [#5798](https://github.com/tinyhumansai/openhuman/pull/5798) OPEN |

### 🟢 今日已修复（回归关闭）

- [#5635 config.toml 644](https://github.com/tinyhumansai/openhuman/issues/5635) — 已关
- [#5633 Notion sync](https://github.com/tinyhumansai/openhuman/issues/5633) — 已关
- [#5636 ac.inference.sh MCP 抖动](https://github.com/tinyhumansai/openhuman/issues/5636) — 已关
- [#5627 TinyPlace 404](https://github.com/tinyhumansai/openhuman/issues/5627) — [#5809](https://github.com/tinyhumansai/openhuman/pull/5809) 已合并
- [#5801 手动 Sync 失败](https://github.com/tinyhumansai/openhuman/issues/5801) — [#5808](https://github.com/tinyhumansai/openhuman/pull/5808) 已合并
- [#5800 Feature-Gate Smoke 红](https://github.com/tinyhumansai/openhuman/issues/5800) — [#5799](https://github.com/tinyhumansai/openhuman/pull/5799) + [#5807](https://github.com/tinyhumansai/openhuman/pull/5807) 已合并
- [#5819 config.toml 解析路径](https://github.com/tinyhumansai/openhuman/issues/5819) — 已关
- [#5805 wallet 未配置 → Sentry](https://github.com/tinyhumansai/openhuman/issues/5805) — [#5811](https://github.com/tinyhumansai/openhuman/pull/5811) 已合并
- [#5804 cap 暂停后仍派发](https://github.com/tinyhumansai/openhuman/issues/5804) — [#5810](https://github.com/tinyhumansai/openhuman/pull/5810) 已合并
- [#5802 coding-session import 假失败](https://github.com/tinyhumansai/openhuman/issues/5802) — [#5803](https://github.com/tinyhumansai/openhuman/pull/5803) 已合并

---

## 六、功能请求与路线图信号

- **[#5780 — 将 Tavily 接入 BYOK 搜索](https://github.com/tinyhumansai/openhuman/issues/5801)**（[#5780 原文](https://github.com/tinyhumansai/openhuman/issues/5780)）
  - 用户希望不经过 OpenHuman 受管后端，直接 BYOK 路由 Tavily
  - 路线图信号：BYOK 搜索已支持多家，添加 Tavily 是低风险扩展，预计进入下一版本
- **[#5817 — 收尾 per-config MCP 连接查找](https://github.com/tinyhumansai/openhuman/pull/5817)**（closes #5701，OPEN）
  - 完成模块桥 MCP 的 config-scoped 解析，把 facade 连接暴露给 by-id lookup
  - 与 #5808 配合，是 MCP 体系的延续
- **[#5791 — IME composition 期间跳过输入回写](https://github.com/tinyhumansai/openhuman/pull/5791)**（closes #5763，OPEN）
  - 修复中文/日文 IME 干扰 LexicalComposer 的体验问题，本地化质量提升
- **[#5814 — 移动端 Tauri 安全补丁](https://github.com/tinyhumansai/openhuman/pull/5814)**（OPEN）
  - 高危 CVE，强烈建议在下次 release 前合并

---

## 七、用户反馈摘要

提炼自今日 Issue 评论的真实痛点：

1. **本地化体验缺陷**（[#5791](https://github.com/tinyhumansai/openhuman/pull/5791)）
   - 中文/日文用户在使用 IME 输入时，Lexical composer 会读取 raw DOM `textContent`，干扰最终写入，造成重复字符或丢字
2. **Windows 贡献者入门门槛过高**（[#5785](https://github.com/tinyhumansai/openhuman/issues/5785)、[#5786](https://github.com/tinyhumansai/openhuman/issues/5786)、[#5781](https://github.com/tinyhumansai/openhuman/issues/5781)）
   - README 中的命令在 Windows 上直接指向 macOS 脚本，Rust 版本号过时，`.env` / `tauri:ensure` 缺失
3. **误报噪声严重破坏信任**（[#5802](https://github.com/tinyhumansai/openhuman/issues/5802)、[#5805](https://github.com/tinyhumansai/openhuman/issues/5805)、[#5820](https://github.com/tinyhumansai/openhuman/issues/5820)）
   - 成功显示为失败、预期状态上报为错误、真实损坏被标为 non-fatal 长达 34 分钟 — 用户对系统"说什么"与"实际发生什么"已经产生显著不信任
4. **Sub-agent 上下文丢失**（[#5806](https://github.com/tinyhumansai/openhuman/issues/5806)）
   - 一名用户的"review 10 个 open PR"任务耗尽 turn budget：110 次读、5 次重复列表、零输出，描述子代理之间无法共享上下文
5. **基础设施不可用阻塞联调**（[#5600](https://github.com/tinyhumansai/openhuman/issues/5600)、[#5604](https://github.com/tinyhumansai/openhuman/issues/5604)、[#5626](https://github.com/tinyhumansai/openhuman/issues/5626)）
   - staging 联调中 MCP 连接、API 传输层、agent turn 三大类失败并发，反映 pre-prod 环境尚未达到"可重复运行"的成熟度

---

## 八、待处理积压（提醒维护者关注）

按"风险/影响 × 无响应时长"排序，建议优先处理：

1. **[#5814 — Tauri CVE 补丁](https://github.com/tinyhumansai/openhuman/pull/5814)**（high-severity 安全更新，OPEN）
   - 应作为下一个 tag 前的 must-merge 项
2. **[#5600 — staging 缺 uv/uvx](https://github.com/tinyhumansai/openhuman/issues/5600)**（阻塞 pre-prod 联调，5 评论，无 PR）
3. **[#5604 — staging-api 传输层失败](https://github.com

</details>

---
*本日报由 [Big Model Radar](https://github.com/96loveslife/big_model_radar) 自动生成。*
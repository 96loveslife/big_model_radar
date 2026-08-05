# OpenClaw 生态日报 2026-08-05

> Issues: 500 | PRs: 500 | 覆盖项目: 8 个 | 生成时间: 2026-08-05 02:54 UTC

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

<think>The user wants me to generate a daily project report for OpenClaw based on GitHub data. Let me analyze the data carefully and produce a structured report in Chinese.

Key observations from the data:
- 500 Issues updated (450 new/active, 50 closed)
- 500 PRs updated (380 pending, 120 merged/closed)
- 0 new releases
- Several P1/P0 bugs with diamond lobster ratings
- Many subagent completion delivery issues
- Multiple subagent completion silently lost issues
- Crash-loop breaker issues
- Gateway migration issues
- Plugin metadata snapshot issues causing main thread saturation

Let me organize this into the 8 sections requested.

Looking at the issues more carefully:

Top issues by comment count:
1. #116277 - DeepSeek v4 Flash silent reply failure (104 comments, CLOSED)
2. #116201 - Realtime voice work unbounded provider/consult state (58 comments, OPEN)
3. #115326 - Crash-loop breaker suppresses Discord/WhatsApp (25 comments, CLOSED)
4. #44925 - Subagent completion silently lost (23 comments, OPEN, 👍2)
5. #48788 - Centralized filename encoding utility (20 comments, OPEN, 👍1)
6. #118846 - Gateway main thread saturated (14 comments, OPEN)
7. #115908 - Session transcript projection livelock (13 comments, OPEN)
8. #67777 - Subagent completion delivery loss (10 comments, OPEN)
9. #91363 - Isolated cron fails (10 comments, OPEN, 👍6)
10. #43747 - Memory management chaos (10 comments, OPEN)

PRs - several refactoring PRs from maintainers (steipete) for LOC reduction campaign, plus several bug fixes.

Now let me write a comprehensive, professional report.

I should note that some issues have closes-related PRs:
- #119441 closes #118503 (systemd dotenv)
- #119420 closes #119419 (TUI PTY)
- #119277 relates to #71136
- #116562 closes #96534
- #117213 closes #89606
- #119371 closes #119370 (Feishu delivery retry)
- #116404 closes #100778

Let me also think about which issues are most critical:
- P0 #112395: startup migration preflight blocks gateway (ux-release-blocker)
- P1 #116201: realtime voice unbounded state
- P1 #115908: session transcript projection livelock
- P1 #118846: gateway main thread saturated
- P1 #119263: agent DB migration v14->v15 fails

These are stability/regression issues that need attention.

Let me draft the report now.</think>

# OpenClaw 项目动态日报
**日期：2026-08-05**

---

## 1. 今日速览

OpenClaw 仓库今日保持高强度运作，过去 24 小时共触发 1000 条工单更新（500 Issues + 500 PRs），但活跃度伴随明显积压信号：Issues 新开/活跃 450 条仅关闭 50 条（关闭率 ≈ 11%），PR 待合并 380 条远高于已合并/关闭 120 条，且当日 **0 个版本发布**。仓库讨论集中在四大方向——**子代理（subagent）投递沉默丢失**、**Gateway 启动/迁移失败**、**会话状态失序**、**Provider 计费冷却误判**——其中至少 5 条已被标记 `impact: ux-release-blocker` 或 `issue-rating: 🦞 diamond lobster`。整体而言，仓库进入高讨论但低落地阶段，维护团队资源紧张，回归风险上行。

---

## 2. 版本发布

本周（截至 2026-08-05）**无新 Release**。最新线上版本停留于 `2026.7.1` / `2026.7.2-beta`，但仓库中已出现针对这两个版本的多条 P0/P1 回归报告（如 [#112395](https://github.com/openclaw/openclaw/issues/112395)、[#119263](https://github.com/openclaw/openclaw/issues/119263)、[#115700](https://github.com/openclaw/openclaw/issues/115700)），下一稳定版的合并窗口明显被推迟。

---

## 3. 项目进展

今日重点推进以 **maintainer 发起的"LOC 缩减重构战役"** 为主线，配合若干 bug fix 与 QA 基础设施加固。

**合并/关闭的重要 PR（提交活跃）**

- [#119441](https://github.com/openclaw/openclaw/pull/119441) `fix(systemd): apply dotenv changes on gateway restart`（Closed 相关 issue #118503）—— 解决 `.env` 修订在 systemd 重启后不生效的运维痛点。
- [#119442](https://github.com/openclaw/openclaw/pull/119442) `fix(qa): release failed transport leases and always stop owned labs` —— 修复隔离 QA 任务在清理失败时永久泄漏通道凭据 lease 的问题。
- [#119439](https://github.com/openclaw/openclaw/pull/119439) `fix(qa): preserve required scenario isolation in serial suites` —— 修复串行/fail-fast 套件下场景共享 Gateway 的隔离漏洞。
- [#119431](https://github.com/openclaw/openclaw/pull/119431) `fix(qa): wait for the selected channel account to become ready` —— 杜绝假 ready 状态触发误判。
- [#119420](https://github.com/openclaw/openclaw/pull/119420) `fix(ci): stabilize TUI PTY proof ownership`（合并 #119419）—— 缓解 PR 之间因 PTY 套件共享造成的误失败。
- [#119371](https://github.com/openclaw/openclaw/pull/119371) `fix: retry delivery when outbound adapter is unavailable`（合并 #119370）—— Feishu 渠道在适配器离线时不再丢失发送意图。

**Maintainer 重构 PR 集群（@steipete，今日集中提交）**

`[#119413](https://github.com/openclaw/openclaw/pull/119413)`（Google Meet）、`[#119435](https://github.com/openclaw/openclaw/pull/119435)`（会话）、`[#119436](https://github.com/openclaw/openclaw/pull/119436)`（自动回复）、`[#119437](https://github.com/openclaw/openclaw/pull/119437)`（plugin-sdk）、`[#119434](https://github.com/openclaw/openclaw/pull/119434)`（CLI）、`[#119433](https://github.com/openclaw/openclaw/pull/119433)`（基础设施）、`[#119432](https://github.com/openclaw/openclaw/pull/119432)`（browser）、`[#119429](https://github.com/openclaw/openclaw/pull/119429)`（插件生命周期 17 处去重）—— 体现仓库在维护者主导下进行结构性生产代码量收敛，与日常 bug 修复同步推进，这是积极的健康度信号。

**整体推进评估**

合并层以 QA 基础设施与系统运维（systemd、.env）为主，bug 修复以通道投递恢复与 preflight 韧性为主；功能新增较少。仓库方向明显倾向于"先稳住基础设施"，功能开发节奏有所放缓。

---

## 4. 社区热点

按评论数排序的 Top Issues 反映出社区最关心的三类问题——**模型/通道沉默失败**、**子代理结果丢失**、**状态机/迁移可用性**。

**讨论最活跃（评论数 TOP 5）**

1. [openclaw#116277](https://github.com/openclaw/openclaw/issues/116277)（104 评论，**已 CLOSED**）—— DeepSeek v4 Flash 在 Telegram 群组静默失败，触发"通用回退"。热度虽高但已落地，社区显然对"模型无回复"的可靠性零容忍。
2. [openclaw#116201](https://github.com/openclaw/openclaw/issues/116201)（58 评论，OPEN）—— Realtime 语音会话中 provider/consult 状态无上限占用，影响多家模型与硬件 TTS。
3. [openclaw#115326](https://github.com/openclaw/openclaw/issues/115326)（25 评论，**已 CLOSED**）—— Discord/WhatsApp 被 crash-loop breaker 永久压制，`channels.start` 恢复 WebSocket 1006 失败。
4. [openclaw#44925](https://github.com/openclaw/openclaw/issues/44925)（23 评论，👍 2，OPEN）—— Subagent 完成结果静默丢失（E31/E42/E45 模式），自 3 月创建至今近 5 个月仅有零星反馈。
5. [openclaw#48788](https://github.com/openclaw/openclaw/issues/48788)（20 评论，👍 1，OPEN）—— 多编码 Content-Disposition 中心化工具，覆盖 Shift-JIS / EUC-KR / GB18030，跨通道适配。

**最受欢迎（👍 票数高）**

- [#91363](https://github.com/openclaw/openclaw/issues/91363)（👍 6）：isolated cron `LLM request failed` 不可恢复。
- [#42840](https://github.com/openclaw/openclaw/issues/42840)（👍 10）：Control UI 加入 MathJax/LaTeX，是今日票数最高的诉求。
- [#118430](https://github.com/openclaw/openclaw/pull/118430)（pending PR，⚠️ 评分 `clawsweeper-recovery-stuck`）：systemd linger 缺失提示，PR 提出方为社区。

**背后诉求归纳**：可靠性 ≫ 功能扩展。社区渴望"沉默失败"全部具备可观测、可重试、可恢复路径；其次是中文/日韩文本流在多渠道的稳定性；再次才是数学渲染、移动端 UI 这类体验升级。

---

## 5. Bug 与稳定性

按严重程度（impact 标签 + 复现确定性）排序列出今日高频/高严重度 Bug：

**P0 / 升级阻塞（最高优）**

| Issue | 标题 | 状态 | 关键信号 | 已关联 PR |
|---|---|---|---|---|
| [#112395](https://github.com/openclaw/openclaw/issues/112395) | 6.11→7.1 升级后启动迁移 preflight 卡住网关，迁移表与 lease 为空 | OPEN | `P0` · `ux-release-blocker` · 🦞 diamond lobster | 无 |
| [#119263](https://github.com/openclaw/openclaw/issues/119263) | Agent DB v14→v15 迁移失败 `no such column: entry_valid`，Gateway 拒启动 | OPEN | `P1` · 🦞 diamond lobster | 无 |

**P1 · 高严重度（影响会话/消息/认证）**

| Issue | 标题 | 状态 | 关键信号 | 已关联 PR |
|---|---|---|---|---|
| [#116201](https://github.com/openclaw/openclaw/issues/116201) | Realtime 语音 provider/consult 状态无界占用 | OPEN | 🦞 · `impact:session-state` | 无 |
| [#115908](https://github.com/openclaw/openclaw/issues/115908) | 会话 transcript projection 在持续写时下 livelock，事件循环阻塞数十秒 | OPEN | 🦞 · 已 `source-repro` | 无 |
| [#118846](https://github.com/openclaw/openclaw/issues/118846) | 启动期 plugin-metadata 快照 + fs statting 占用主线程 ~100% | OPEN | 🦐 gold shrimp · `crash-loop` | 无 |
| [#111498](https://github.com/openclaw/openclaw/issues/111498) | Anthropic 认证恢复后 workspace-state 迁移卡死主 agent | OPEN | 🦞 · `regression` | 无 |
| [#115700](https://github.com/openclaw/openclaw/issues/115700) | `chat.send` 被 "thread switched branches" 持续拒绝，stale `expectedLeafEntryId` 未刷新 | OPEN | 🦞 · 已 linked PR | 有 linked PR |
| [#91363](https://github.com/openclaw/openclaw/issues/91363) | Isolated cron 始终 `LLM request failed`，usage.input=0 | OPEN | 🦐 · 👍 6 | 无 |
| [#115642](https://github.com/openclaw/openclaw/issues/115642) | 计费 cooldown 5 小时固定窗口，订阅型 provider 故障恢复无门 | OPEN | 🦞 · `auth-provider` | 无 |

**子代理投递沉默失败类（社区痛点 P1）**

- [#44925](https://github.com/openclaw/openclaw/issues/44925) — 23 评论
- [#67777](https://github.com/openclaw/openclaw/issues/67777) — 10 评论
- [#92433](https://github.com/openclaw/openclaw/issues/92433) — 9 评论
- [#92369](https://github.com/openclaw/openclaw/issues/92369) — 8 评论（cron isolated 内 subagent 串行不可靠）
- [#114690](https://github.com/openclaw/openclaw/issues/114690) — 6 评论（Codex compaction 后 Discord 重复发送）

**P1·认证/Provider 链路**

- [#89278](https://github.com/openclaw/openclaw/issues/89278) Codex OAuth refresh OK 但 cron/heartbeat 10s 超时失败（regression）
- [#46031](https://github.com/openclaw/openclaw/issues/46031) `auth.order` 对 GitHub Copilot 不生效（有关联 PR）
- [#116116](https://github.com/openclaw/openclaw/issues/116116) Anthropic `catalog.json` 自违反 schema，CLI 崩溃（已 linked PR）
- [#116010](https://github.com/openclaw/openclaw/issues/116010) 所有 persistent session 锁定 128k context

**P2·质量/可用性**

- [#43747](https://github.com/openclaw/openclaw/issues/43747) Memory 管理行为混乱（多人存储路径不一致）
- [#77136](https://github.com/openclaw/openclaw/issues/77136) WebChat 渲染丢消息（TUI 正常）
- [#97616](https://github.com/openclaw/openclaw/issues/97616) Hook/tool 子进程未收割，僵尸进程累积
- [#117609](https://github.com/openclaw/openclaw/issues/117609) Embedded-assistant 阶段不重试瞬时 LLM/socket 错误
- [#75380](https://github.com/openclaw/openclaw/issues/75380) `provider-payload.jsonl` / `cache-trace.jsonl` 无上限增长（运维隐患）
- [#77733](https://github.com/openclaw/openclaw/issues/77733)（已 linked PR）`/new` `/reset` 不再触发 persona greeting 回归

**健康度研判**：P0/P1 Bug 中仅少数拥有 linked PR（如 [#46031](https://github.com/openclaw/openclaw/issues/46031)、[#116116](https://github.com/openclaw/openclaw/issues/116116)、[#115700](https://github.com/openclaw/openclaw/issues/115700)、[#77733](https://github.com/openclaw/openclaw/issues/77733)），多数仍停留在 `clawsweeper:no-new-fix-pr` 状态，**社区信心边际下行**。

---

## 6. 功能请求与路线图信号

按票数/评论数筛选出可能被纳入下一版本的候选：

| 候选需求 | 票数 | 已有 PR | 路线图判断 |
|---|---|---|---|
| Control UI MathJax/LaTeX 渲染 [#42840](https://github.com/openclaw/openclaw/issues/42840) | 👍10 | 无 | 体验类，**极可能纳入**，最受欢迎的诉求 |
| YAML 配置格式 [#45758](https://github.com/openclaw/openclaw/issues/45758) | 👍2 | 无 | DevOps 友好，下一版本合理候选 |
| Webchat TTS 走网关（自托管 STT/TTS）[#45508](https://github.com/openclaw/openclaw/issues/45508) | 👍2 | 无 | 与 [#45508](https://github.com/openclaw/openclaw/issues/45508)/[#45501](https://github.com/openclaw/openclaw/issues/45501) 一并与 voice 系统重构 |
| `session.resetPrompt` 可配置 [#45501](https://github.com/openclaw/openclaw/issues/45501) | 👍1 | 无 | 配合 [#77733](https://github.com/openclaw/openclaw/issues/77733) bug 修复，**概率高** |
| OpenRouter usage cost 暴露给 agent [#9016](https://github.com/openclaw/openclaw/issues/9016) | 👍1 | 无 | 长期挂起（>180 天），纳入下一窗口概率**偏低** |
| Browser 工具 7 项改进 [#44431](https://github.com/openclaw/openclaw/issues/44431) | 👍1 | 无 | 字段测试丰富，可作为新一轮插件 workstream |
| Control UI 插件贡献槽 [#71736](https://github.com/openclaw/openclaw/issues/71736) | 👍1 | 无 | RFC 阶段，需 maintainer 决策，**较长期** |
| Heading-aware 切片 + 实体抽取 [#44395](https://github.com/openclaw/openclaw/issues/44395) | 👍2 | 无 | 与 [#116562](https://github.com/openclaw/openclaw/pull/116562)（memory-core 恢复）形成方向一致性 |
| Chat-first Android 表面 [#46058](https://github.com/openclaw/openclaw/issues/46058) | 👍1 | 无 | 上下游社区沟通阶段，官方表态待定 |
| 内容型 prompt-injection 扫描 [#79168](https://github.com/openclaw/openclaw/issues/79168) | 👍1 | 无 | 安全性需求，建议优先纳入企业版 |

**Maintainer 已开 PR 显示的方向优先级**：

- 会话/转录/状态层重构（[#119435](https://github.com/openclaw/openclaw/pull/119435)）
- 自动回复层去重（[#119436](https://github.com/openclaw/openclaw/pull/119436)）
- CLI 注册层收敛（[#119434](https://github.com/openclaw/openclaw/pull/119434)）
- 插件生命周期 17 处去重（[#119429](https://github.com/openclaw/openclaw/pull/119429)）

可见下一版本主线是 **"生产代码量收敛 + 关键路径可靠性"**，而非激进功能新增。

---

## 7. 用户反馈摘要

从最高评论与最高票 Issues 提炼：

**核心痛点（集中出现）**

- **沉默丢失**：用户表达"任务发出去、模型明明回了一半、结果就消失了，没有重试也没有通知"—— 这是 [#44925](https://github.com/openclaw/openclaw/issues/44925)/[#67777](https://github.com/openclaw/openclaw/issues/67777)/[#92433](https://github.com/openclaw/openclaw/issues/92433) 共同的措辞。
- **升级恐惧**："升级后所有东西都不能

---

## 横向生态对比

<think>The user wants me to generate a horizontal comparison analysis report based on the daily dynamics of 7 projects: OpenClaw, NanoBot, PicoClaw, IronClaw, LobsterAI, QwenPaw, Hermes Agent, and OpenHuman (8 projects total, but they listed 7 headings - let me recount: OpenClaw, NanoBot, PicoClaw, IronClaw, LobsterAI, QwenPaw, Hermes Agent, OpenHuman = 8 projects).

Let me synthesize key information from all reports:

**OpenClaw (github.com/openclaw/openclaw)**
- 1000 工单更新 (500 Issues + 500 PRs)
- 关闭率 ≈ 11%, 0 版本发布
- P0/P1 bugs with diamond lobster ratings
- 关注: subagent投递沉默丢失, Gateway启动/迁移失败, 会话状态失序, Provider计费冷却误判
- LOC缩减重构战役
- 多渠道 (Discord, WhatsApp, Telegram, Feishu)
- 社区庞大且活跃但积压严重
- 5+ 条 P0/P1 无 linked PR
- Control UI MathJax/LaTeX 票数最高(👍10)

**NanoBot (github.com/HKUDS/nanobot)**
- 24小时: 5 Issues, 26 PRs (19 merged)
- 无新版本发布
- WebUI打磨, 多渠道兼容, Anthropic Opus 5适配, 新搜索provider
- 关键安全Issue #4784 (API Key跨Provider泄漏) 30天未关闭
- 健康度高产, 评审通道畅通

**PicoClaw (github.com/sipeed/picoclaw)**
- 24小时: 3 Issues, 4 PRs, 无版本
- 中等偏静, 存量清理为主
- 3个bug中2个长期Open无PR (#3269 MCP hang)
- 2个stale PR (OAuth fix, Anthropic cache) 关闭
- 健康度: 稳定但需关注响应时效

**IronClaw (github.com/nearai/ironclaw)**
- 100工单 (50 Issues + 50 PRs)
- v1.1.0-rc.1冲刺
- 17 PR合并/关闭
- Reborn架构重构 Wave 0-4批量合并
- CI治理 + 错误恢复 epic关闭
- Champions周会反馈: 跨会话记忆断裂, 抓取不稳定, 模型选择被锁死
- 引入Nostr host functions for WASM tools (Web3生态)
- Windows平台问题

**LobsterAI (github.com/netease-youdao/LobsterAI)**
- 1 Issue活跃, 13 PR (9 closed)
- 重要: PR #2430 (Release: 2026.8.3) 合并
- 安全Issue #1202 (model key泄漏) 4个月未关闭
- 桌面应用, 启动积分活动, 错误处理精细化

**QwenPaw (github.com/agentscope-ai/QwenPaw)**
- 30 Issues, 49 PRs
- 无新版本发布
- v2.1.0-beta.1发布, 但桌面端有2个高严重度回归 (#6697 PYTHONHOME crash, #6698 Browser SDK WireProtocolError)
- Volcengine Agent Plan, Xiaomi MiMo, GPT-5.6缓存
- 按需技能加载需求
- Channels/Plugins健壮性改进
- Tauri Desktop (Windows)

**Hermes Agent (github.com/NousResearch/hermes-agent)**
- 50 Issues + 50 PRs
- 无新版本发布 (latest v0.20.0)
- 插件接口扩展 (#64182, #64231)
- P0 缓存缺陷 (#78959 prompt_cache_key)
- 多profile数据隔离修复
- 分布式编排器 RFC (#79042)
- 国际化(CJK)支持缺口
- "静默失败"是用户最大挫败感

**OpenHuman (github.com/tinyhumansai/openhuman)**
- 45 Issues + 33 PRs (10 merged/closed)
- 无新版本发布
- Rust核心内存后端重构 (#5372 父任务, 18+子任务)
- Voice/UI卡顿闭环
- Tinyflows工作流引擎支持有界循环
- ElevenLabs Voice Agents替换提议
- Discord bot扩展用户驱动

Now let me structure the cross-project analysis report.

For section 1 (生态全景): Need 3-5 sentences summarizing overall trends.

For section 2 (各项目活跃度对比): Table comparing Issues, PRs, Releases, Health.

For section 3 (OpenClaw生态定位): Need to position OpenClaw against peers - it's the largest community but has the biggest backlog, focused on multi-channel delivery, LOC reduction campaign, broad feature scope.

For section 4 (共同关注的技术方向):
- WebUI/Desktop体验打磨 (NanoBot, QwenPaw, OpenHuman, IronClaw)
- 模型适配滞后 (OpenClaw - DeepSeek v4 Flash, NanoBot - Opus 5, Hermes - DeepSeek v4-flash)
- 多渠道兼容性 (几乎所有项目都在做)
- 安全/密钥管理 (NanoBot #4784, LobsterAI #1202, Hermes #46199)
- 插件生态/扩展机制 (Hermes #64182, OpenClaw重构, OpenHuman #5372)
- MCP集成 (OpenClaw, NanoBot, PicoClaw)
- 跨会话记忆可靠性 (IronClaw #7185, OpenClaw)
- 沉默失败/可观测性 (Hermes, OpenClaw, NanoBot)

For section 5 (差异化定位分析):
- OpenClaw: 综合型AI Agent平台, 多渠道重投, 大社区大积压
- NanoBot: WebUI打磨专家, Anthropic生态深度
- PicoClaw: 轻量级/桌面Agent
- IronClaw: WASM沙箱 + Windows原生, Web3集成(Nostr), 严格CI治理
- LobsterAI: 桌面端商业产品(网易有道), 营销+错误处理精细化
- QwenPaw: 多Provider生态(国内模型支持), Tauri Desktop
- Hermes Agent: 分布式架构探索, 插件治理
- OpenHuman: Rust核心 + 内存后端可插拔化, voice chat

For section 6 (社区热度与成熟度):
- 高活跃: OpenClaw (1000), IronClaw (100), Hermes (100), QwenPaw (79)
- 中活跃: OpenHuman (78), NanoBot (31)
- 低活跃: PicoClaw (7), LobsterAI (14)
- 成熟期: LobsterAI (商业发布节奏), IronClaw (RC阶段), OpenClaw
- 快速迭代: NanoBot, QwenPaw, Hermes, OpenHuman
- 质量巩固: OpenClaw, IronClaw (CI治理)

For section 7 (值得关注的趋势信号):
- 可靠性/沉默失败成为核心痛点 (跨多个项目)
- 多渠道扩展仍是主战场
- 分布式架构开始萌芽 (Hermes RFC)
- 内存后端可插拔化 (OpenHuman)
- WASM沙箱生态 (IronClaw)
- 模型版本适配滞后成系统性问题
- CJK/国际化短板凸显
- 安全/密钥隔离成为生产部署关键
- LOC缩减成为治理趋势 (OpenClaw)
- Desktop平台质量分化 (Tauri/Electron)

Now let me write this comprehensive report. The user wants it to be concise, professional, data-supported, suitable for technical decision makers and developers.

I'll write in Chinese as the source content is in Chinese.

Let me also be careful about the format - the user wants:
1. 生态全景 - 3-5 sentences
2. 各项目活跃度对比 - 表格
3. OpenClaw在生态中的定位
4. 共同关注的技术方向
5. 差异化定位分析
6. 社区热度与成熟度
7. 值得关注的趋势信号

Let me also make sure the report is structured well with clear headings and tables where appropriate. I'll aim for thorough but concise - each section should be substantive but not bloated.</think>

# 个人 AI 助手 / 自主智能体开源生态横向对比分析报告
**日期：2026-08-05** ｜ 覆盖项目：OpenClaw · NanoBot · PicoClaw · IronClaw · LobsterAI · QwenPaw · Hermes Agent · OpenHuman

---

## 1. 生态全景

2026-08-05 当日 8 个项目累计产生约 **1,400 条 Issue/PR 更新**，开源 AI 智能体生态整体处于**"高活跃 + 高分化"**阶段：头部项目（OpenClaw、IronClaw、Hermes Agent）单日破百工单已进入常态化运营，NanoBot、QwenPaw、OpenHuman 处于快速迭代的中坚段，PicoClaw、LobsterAI 节奏相对克制但各自卡在关键版本节点。**可靠性（沉默失败/可恢复性）、多渠道兼容性、内存/上下文管理** 是本周期横跨所有项目的三大共性痛点；与此同时，**架构治理（CI 门禁、LOC 缩减、插件标准化）与新范式探索（WASM 沙箱、分布式编排、可插拔内存后端）** 的分化明显加大，生态正从"功能堆叠"过渡到"治理 + 范式之争"。

---

## 2. 各项目活跃度对比

| 项目 | 24h Issues (新/活·关) | 24h PRs (待·合/关) | Release | 主要活动焦点 | 健康度评估 |
|---|---|---|---|---|---|
| **OpenClaw** | 450 / 50 | 380 / 120 | 🚫 无 | LOC 重构战役 / 沉默失败修复 | ⚠️ 高讨论低落地，积压严重 |
| **IronClaw** | 38 / 12 | 33 / 17 | 🚫 无（v1.1.0-rc.1） | Reborn Wave 0-4 合入 / CI 治理 | ✅ RC 冲刺稳健 |
| **Hermes Agent** | 47 / 3 | 46 / 4 | 🚫 无（v0.20.0） | 插件接口治理 / 缓存 P0 | 🟡 高活跃 + 安全债 |
| **QwenPaw** | 17 / 13 | 28 / 21 | 🚫 无（v2.1.0-beta.1） | 多 Provider 集成 / 桌面回归 | ⚠️ Beta 桌面阻塞 |
| **OpenHuman** | 41 / 4 | 23 / 10 | 🚫 无 | 内存后端重构 / Voice 修复 | ✅ 重构期高活跃 |
| **NanoBot** | 4 / 1 | 7 / 19 | 🚫 无 | WebUI 打磨 / Anthropic Opus 5 | ✅ 评审通道畅通 |
| **LobsterAI** | 1 / 0 | 4 / 9 | ✅ 实质合并 2026.8.3 | 错误处理精细化 / 启动积分 | 🟡 商业节奏稳，安全债 |
| **PicoClaw** | 2 / 1 | 2 / 2 | 🚫 无 | 存量清理 / 可观测性 PR | �️ 活跃度下行 |

> **关键观察**：合并率（PR 合/总）最高为 **LobsterAI 69%** 与 **NanoBot 73%**；积压率最高为 **OpenClaw 380 待合并 / 120 已合并 ≈ 3.2 倍待合并**。Release 产出仅 LobsterAI（通过 PR #2430 实质合入主线）。

---

## 3. OpenClaw 在生态中的定位

| 维度 | OpenClaw | 横向对照 |
|---|---|---|
| **社区规模** | 单日 1,000 工单级别（≈生态总量的 70%） | 远超第二梯队（IronClaw/Hermes 各 100），是 PicoClaw 的 143 倍 |
| **功能广度** | 全栈：多渠道 + 多 Provider + Plugin SDK + WebUI + Control UI + Desktop | LobsterAI/QwenPaw 偏桌面，IronClaw 偏 WASM，NanoBot 偏 WebUI 体验 |
| **技术路线** | TypeScript 主导，maintainer 主导 LOC 收敛战役（@steipete 单日发起 8+ 重构 PR） | IronClaw 走 Rust + WASM 沙箱；OpenHuman 走 Rust 核心 + 可插拔内存；NanoBot 走 WebUI 优先 |
| **风险敞口** | P0/P1 阻塞 5+ 条无 linked PR，关闭率仅 11% | LobsterAI 同样存在 4 月份未关闭的安全 Issue；NanoBot #4784 30 天未合 |
| **差异化护城河** | Plugin SDK + 多渠道深度适配（Discord/WhatsApp/Telegram/Feishu）+ 大社区飞轮 | IronClaw 通过 WASM 沙箱 + Nostr 切入 Web3；Hermes 通过分布式 RFC 探索架构；OpenHuman 通过内存后端标准化建立技术深度 |

**定位结论**：OpenClaw 已成为"**类 ChatOps/ChatBot 综合平台的 de-facto 标准**"，但正面临"**大型单体仓库的典型治理难题**"——功能广度优势反过来成为积压源头。其在生态中的位置类似 Node.js 之于服务端运行时：生态最厚但治理最复杂。维护者主动发起 LOC 战役、关闭 stale PR 集群、聚焦可靠性修复，是**对治理难题的正确响应**。

---

## 4. 共同关注的技术方向

| 技术方向 | 涉及项目 | 具体诉求 |
|---|---|---|
| **"沉默失败"修复 / 错误可观测性** | OpenClaw（subagent 投递丢、E31/E42/E45 模式）、Hermes（MEDIA 投递静默、Dashboard INSTALL 静默、`api_key_env` 静默）、NanoBot（MCP 业务错误被吞）、IronClaw（提取器误报 Failed） | 跨项目普遍诉求：**所有失败路径需具备可观测、可重试、可恢复** |
| **多渠道兼容性扩展** | OpenClaw（Feishu/Discord/WhatsApp/WebChat）、NanoBot（Telegram/Matrix/Mattermost/WeCom）、QwenPaw（Matrix 重试、WeChat iLink）、Hermes（Feishu 多路复用、OpenCode） | 自托管渠道、企业 IM 网关、消息投递去重是当前焦点 |
| **模型版本适配滞后** | OpenClaw（DeepSeek v4 Flash 静默失败）、NanoBot（Anthropic Opus 5 拒服务）、Hermes（DeepSeek v4-flash responses API） | 模型版本 ↔ 客户端硬编码名单的人肉维护链条脆弱，**全行业共性短板** |
| **安全/密钥隔离** | NanoBot（#4784 跨 Provider 泄漏，30 天 OPEN）、LobsterAI（#1202 model key 路径泄漏，4 个月 OPEN）、Hermes（#46199 Windows 隔离部署，50+ 天无回应） | per-provider env 命名空间、sandbox-exec、portable 模式 |
| **WebUI / Desktop 体验打磨** | NanoBot（8 个 WebUI PR）、QwenPaw（桌面回归 + Tauri）、IronClaw（WebUI 乐观消息锚点）、OpenHuman（Voice 锁定 tab 修复） | Markdown 渲染、视觉一致性、桌面卡顿成为普遍痛点 |
| **Plugin/Skill 扩展机制治理** | Hermes（#64182 插件接口追踪、#64231 生命周期目录）、OpenClaw（plugin-sdk 重构、plugin 生命周期 17 处去重）、OpenHuman（memory backend 适配器矩阵 #5372） | 插件生态成熟度开始决定产品上限 |
| **内存/上下文可靠性** | IronClaw（#7185 跨会话记忆断裂）、OpenClaw（session transcript projection livelock）、Hermes（`prompt_cache_key` 跨会话 P0） | 长期记忆 + 缓存复用是 LLM 应用核心议题 |
| **CI / 架构治理** | OpenClaw（LOC 缩减）、IronClaw（#7156 执法 ratchet 收紧）、Hermes（#57470 Windows PYTHONPATH 泄漏） | 治理工程化（ratchet / preflight / per-package clippy）成头部项目必做项 |

---

## 5. 差异化定位分析

| 项目 | 功能侧重 | 目标用户 | 技术架构关键差异 |
|---|---|---|---|
| **OpenClaw** | 综合 ChatOps 平台 + 多渠道 Bot 框架 | 企业 IM 运营团队、ChatBot 集成商 | TypeScript 全栈 + Plugin SDK + 大社区飞轮，**优势是覆盖面** |
| **IronClaw** | 安全沙箱 + 严格 CI 治理 + Web3 集成 | 安全敏感企业、Web3 工具开发者 | Rust + WASM 沙箱（Nostr host functions）+ ratchet CI，**优势是可信执行环境** |
| **Hermes Agent** | 分布式架构探索 + 插件治理 | 高阶开发者、架构师 | Remote Brain ↔ Local Nodes 设想 + 集中 hook taxonomy，**优势是架构前沿性** |
| **QwenPaw** | 国内 Provider 矩阵 + 桌面 Agent | 国内 LLM 使用者、桌面用户 | Tauri Desktop + 多 Provider 抽象 + Channels 重试，**优势是国内生态深度** |
| **NanoBot** | WebUI 体验 + Anthropic 生态深度 | 终端用户、UI 优先的开发者 | 快速 PR 通道 + WebUI 持续打磨 + 安全意识强（trusted proxy），**优势是开发者体验** |
| **OpenHuman** | 内存后端可插拔化 + Voice 体验 | 重度 agent 用户、研究型开发者 | Rust 核心 + TinyCortex + supermemory/mem0/cognee 适配器矩阵，**优势是架构可扩展性** |
| **LobsterAI** | 桌面商业产品 + 错误处理精细化 | 商业终端用户（C 端） | Electron + 营销活动集成 + 错误分类（overloaded vs rate-limit），**优势是产品化完整度** |
| **PicoClaw** | 轻量级 Agent + 可观测性 PR | 小团队、桌面用户 | 简洁架构 + 缓存 token 日志 + 多搜索引擎生态，**优势是轻量** |

**关键差异点提炼**：

- **后端语言**：Rust 派（IronClaw、OpenHuman）vs TypeScript 派（OpenClaw、Hermes、QwenPaw 主体、NanoBot）vs Python 派（部分子模块）；
- **沙箱策略**：WASM 强隔离（IronCl

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

<think>Let me analyze the GitHub data for NanoBot (HKUDS/nanobot) for 2026-08-05 and generate a comprehensive daily report.

Key observations from the data:

1. **Activity overview:**
   - 24-hour Issues: 5 (4 new/active, 1 closed)
   - 24-hour PRs: 26 (7 pending, 19 merged/closed)
   - 0 new releases

2. **Issues analysis:**
   - #4784 [OPEN] - Security issue about API keys leaking between providers via global os.environ mutation (from 2026-07-06, still active)
   - #5235 [CLOSED] - Bug about Anthropic Opus 5 configuration being rejected (closed)
   - #5237 [OPEN] - MCP tool "data not found" envelope not being handled
   - #5247 [OPEN] - Matrix bot doesn't auto-join when invited (Continuwuity compatibility)
   - #5246 [OPEN] - Enhancement: .gitignore specifies memory/ but leaves memory/.cursor and memory/history.jsonl untracked

3. **Notable PRs (merged/closed):**
   - #5238 - P1: refactor session, remove request-scoped access grants
   - #5233 - P2: Mattermost thread group policy + WebUI
   - #4919 - P2: Telegram custom Bot API base URL (OPEN, older)
   - #5234 - P1: mst-python metasearch provider (OPEN)
   - #5248 - P2: Matrix Continuwuity fix (OPEN)
   - #5249 - P2: WebUI visual consistency (OPEN)
   - #5223 - P2: WeCom filename sanitization fix
   - #5210 - P1: WebUI trusted proxy bootstrap auth
   - #5222 - P2: Telegram code block fix
   - #5156 - P2: Telegram polling recovery (OPEN, fixing #5171)
   - #1776 - CLOSED: Telegram group_mode config
   - #5244 - P2: WebUI markdown in prompt rail
   - #5245 - P2: WebUI timestamp tooltip styles
   - #5240 - WebUI unify floating controls
   - #5184 - OPEN: WebUI Quick Chat and Temporary Chat
   - #5243 - P2: WebUI automation metadata timestamps
   - #5242 - P2: reject malformed slash commands
   - #5239 - P1: WebUI integrated Vite dev mode
   - #5241 - WebUI inline token highlights
   - #5236 - P1: Anthropic Opus 5 effort controls

4. **PRs not shown in detail (6 more):** I should mention there are 26 total but only 20 shown.

Activity evaluation: This is a high-activity day with 26 PRs (mostly WebUI focused - polish, dev tooling, features) and multiple P1 security/auth/provider fixes. The project is in active development.

Let me structure the report now. I'll write in Chinese as the user prompt is in Chinese.

Privacy/security concerns:
- #4784 is a security issue about API keys leaking via global os.environ - this is significant
- #5210 is a P1 security feature for trusted proxy auth

Let me also analyze the patterns:
- Many PRs are by @chengyongru - heavily involved in WebUI and core agent work
- @whisperity - involved in security and memory issues
- @goodtiding5 - mattermost and search providers
- @santhreal - Telegram and WeCom fixes
- @orrinwitt - Matrix compatibility
- @Re-bin - WebUI
- @concertypin - WebUI auth

The Day's themes:
1. WebUI polishing/UX overhaul (multiple PRs from @chengyongru and @Re-bin)
2. Anthropic Opus 5 support (closed issue #5235, closed PR #5236)
3. Security hardening (#4784 still open, #5210 closed)
4. Channel compatibility fixes (Matrix, Telegram, WeCom, Mattermost)
5. New search provider (mst-python)

Bug severity ranking:
- Critical: None new
- High: #4784 (API key leakage - security), #5237 (MCP error handling)
- Medium: #5247 (Matrix auto-join broken), #5246 (memory .gitignore)

Let me write the report now.</think>

# NanoBot 项目日报 · 2026-08-05

> 数据来源：[github.com/HKUDS/nanobot](https://github.com/HKUDS/nanobot) ｜ 采样窗口：2026-08-04 ~ 2026-08-05 UTC

---

## 1. 今日速览

NanoBot 今日进入 **高活跃开发期**：24 小时内提交 26 个 PR（19 个已合并/关闭、7 个待合并），新开/活跃 Issue 4 条、关闭 1 条，**无新版本发布**。讨论高度集中在三条主线——**WebUI 全方位打磨**（视觉一致性、Markdown 时间戳、Quick Chat、Vite Dev 模式、trusted proxy 鉴权）、**多渠道兼容性修复**（Telegram / Matrix / WeCom / Mattermost），以及 **Anthropic Opus 5 适配**与**新搜索 provider（mst-python）**。同时仍有一个高优先级 **API Key 跨 Provider 泄漏**的安全 Issue 未关闭，需维护者关注。

---

## 2. 版本发布

🚫 **今日无新版本发布。** 合并的 PR 集中在 WebUI、Provider、Channel 三个模块，预计将在下一次常规发版中随 WebUI 重构一并打包。

---

## 3. 项目进展（已合并/关闭 PR）

### 🔐 安全与鉴权
- **#5210 [P1] Trusted proxy bootstrap auth for WebUI**（已关闭）  
  为 Cloudflare Tunnel + Cloudflare Access 等部署场景提供可选的信任上游代理鉴权，模式经过显式 CIDR 校验，零 token。  
  https://github.com/HKUDS/nanobot/pull/5210

### 🤖 Provider / 模型能力
- **#5236 [P1] Anthropic Opus 5 effort controls**（已关闭）  
  用模型族版本阈值替代 Anthropic 硬编码 sampling-parameter 排除；为 Opus 5 发送 adaptive thinking + `output_config.effort`，同时保留老模型的 `budget_tokens`。配套关闭了相关 bug issue #5235。  
  https://github.com/HKUDS/nanobot/pull/5236
- **#5234 [P1] mst-python meta-search provider**（待合并）  
  新增 Meta-Search Tool，使用 RRF 融合 DuckDuckGo / Google / Brave / Bing 等多源结果，丰富搜索覆盖。  
  https://github.com/HKUDS/nanobot/pull/5234

### 🧩 会话与指令
- **#5238 [P1] refactor session: remove request-scoped access grants**（已关闭）  
  删除 #5211 引入的 request-scoped `Tool.available()` 与 `SessionAccessScope`，恢复"`Tool.enabled()` 是唯一构造期开关"的单一职责。  
  https://github.com/HKUDS/nanobot/pull/5238
- **#5242 [P2] reject malformed slash commands**（已关闭）  
  不再将未识别的 `/` 前缀输入透传给 LLM，会推荐最近命令并校验参数。  
  https://github.com/HKUDS/nanobot/pull/5242

### 🛠 渠道（Channel）兼容性
- **#5233 [P2] Mattermost thread group policy + WebUI**（已关闭）  
  为 thread 与主频道引入独立的 `groupPolicyInThread` 字段，并暴露在 WebUI。  
  https://github.com/HKUDS/nanobot/pull/5233
- **#5223 [P2] fix(wecom): 文件名净化兜底**（已关闭）  
  修复"仅包含点/空格/非法字符"的 inbound filename 被净化为空字符串，导致写入目标变成目录路径的 bug。  
  https://github.com/HKUDS/nanobot/pull/5223
- **#5222 [P2] fix(telegram): 围栏代码块语言标签**（已关闭）  
  修复 `c++` / `objective-c` / `html+django` 等含特殊字符语言标签被截断，导致代码块首字符污染。  
  https://github.com/HKUDS/nanobot/pull/5222
- **#1776 [已关闭] Telegram `group_mode` 字段补齐**（已关闭）  
  久远的字段缺失补齐，终于合并。  
  https://github.com/HKUDS/nanobot/pull/1776

### 🖥 WebUI 大修
- **#5239 [P1] integrated Vite dev mode**（已关闭）  
  `nanobot webui --dev` 一键启动 gateway + Vite dev server，附带 HMR 与 sidecar 清理。  
  https://github.com/HKUDS/nanobot/pull/5239
- **#5240 refactor(webui): unify floating controls**（已关闭）  
- **#5241 fix(webui): refine inline token highlights**（已关闭）
- **#5243 [P2] align automation metadata with timestamps**（已关闭）
- **#5244 [P2] render markdown in prompt rail previews**（已关闭）
- **#5245 [P2] align timestamp tooltip styles**（已关闭）
- **#5249 [P2] visual consistency pass**（待合并）  
  https://github.com/HKUDS/nanobot/pull/5249

### 📈 整体推进度
今日合并的 PR 横跨 **Security → Provider → Session → 4 个 Channel → WebUI 视觉系统** 多个层级，项目在 **生产可用性 + 开发者体验** 两条线同步推进，**单日合并 19 个 PR** 显示维护团队节奏稳定、代码评审通道畅通。

---

## 4. 社区热点

| 议题 | 关注点 | 链接 |
|---|---|---|
| **#4784 Provider API Key 跨 Provider 泄漏** | 安全。`OpenAICompatProvider._setup_env()` 通过 `os.environ` 写入会**覆盖**已有值；多 Provider 并存时密钥互相污染。0 👍 / 2 评论，少量评论说明仍在评估修复方案。 | [#4784](https://github.com/HKUDS/nanobot/issues/4784) |
| **#5237 MCP 业务错误信封被吞** | 集成可靠性。`isError=False` 的 `{"code":404, ...}` envelope 被当成功，LLM 不知失败 → 触发 `tool_timeout`，根因追溯困难。 | [#5237](https://github.com/HKUDS/nanobot/issues/5237) |
| **#5235 Anthropic Opus 5 拒绝服务**（已关闭） | 模型适配。揭示 `omit_temperature` 名单未及时随模型版本（Opus 5）更新。已由 #5236 修复。 | [#5235](https://github.com/HKUDS/nanobot/issues/5235) |
| **#5247 Matrix bot 无法加入被邀请房间** | 渠道兼容。Continuwuity 拒绝 nio 的空 POST body。已对应修复 PR #5248（待合并）。 | [#5247](https://github.com/HKUDS/nanobot/issues/5247) |
| **#5184 [OPEN] WebUI Quick Chat / Temporary Chat** | UX 期待值高。Quick Chat 作为常驻 Tab、Temporary Chat 作为连接内 in-memory 会话。仍在评审中。 | [#5184](https://github.com/HKUDS/nanobot/pull/5184) |

---

## 5. Bug 与稳定性（按严重度排序）

| 严重度 | Issue | 状态 | 是否有修复 PR |
|---|---|---|---|
| 🔴 **Critical (Security)** | [#4784](https://github.com/HKUDS/nanobot/issues/4784) Provider API Key 跨 Provider 泄漏 | OPEN（已 30 天） | ❌ 无 |
| 🟠 **High** | [#5237](https://github.com/HKUDS/nanobot/issues/5237) MCP 业务错误被吞，触发 timeout | OPEN | ❌ 无 |
| 🟡 **Medium** | [#5247](https://github.com/HKUDS/nanobot/issues/5247) Matrix bot 收到邀请后无法加入 | OPEN | ✅ [#5248](https://github.com/HKUDS/nanobot/pull/5248) 待合并 |
| 🟡 **Medium** | [#5246](https://github.com/HKUDS/nanobot/issues/5246) `.gitignore` 未覆盖 `memory/.cursor` 与 `memory/history.jsonl` | OPEN | ❌ 无 |
| 🟢 **Low** | [#5235](https://github.com/HKUDS/nanobot/issues/5235) Opus 5 temperature 拦截 | 已关闭 | ✅ [#5236](https://github.com/HKUDS/nanobot/pull/5236) |
| 🟢 **Low** | [#5171 → #5156](https://github.com/HKUDS/nanobot/pull/5156) Telegram 静默卡死 polling | 待合并 | ✅ [#5156](https://github.com/HKUDS/nanobot/pull/5156) |

---

## 6. 功能请求与路线图信号

| 类型 | 编号 | 可能纳入下一版本判断 |
|---|---|---|
| **Meta-Search Provider** | [#5234](https://github.com/HKUDS/nanobot/pull/5234) | ⭐⭐⭐⭐ 高度可能。P1 标签 + 完整 test + 与现有 provider 抽象契合。 |
| **Telegram 自托管 Bot API** | [#4919](https://github.com/HKUDS/nanobot/pull/4919) | ⭐⭐⭐ 中等可能。已 open 21 天，社区有企业网关需求。 |
| **Quick Chat / Temporary Chat** | [#5184](https://github.com/HKUDS/nanobot/pull/5184) | ⭐⭐⭐ 中等。Quick Chat 价值高但涉及会话持久层改动。 |
| **`.gitignore` 完善** | [#5246](https://github.com/HKUDS/nanobot/issues/5246) | ⭐⭐⭐⭐⭐ 几乎必合。1 行配置级的修复。 |
| **WebUI 视觉一致性** | [#5249](https://github.com/HKUDS/nanobot/pull/5249) | ⭐⭐⭐⭐ 紧跟 #5240 节奏。 |
| **provider 配置 key 隔离** | 隐含在 #4784 | ⭐⭐⭐⭐⭐ 安全硬性要求，需要架构改动。 |

---

## 7. 用户反馈摘要

- 🛡 **生产场景信任感不足**：#4784 评论中开发者反映在 **多 Provider 共享同一进程**（gateway + 直连）部署下，密钥泄露风险被低估；期望引入 per-provider env 命名空间或显式 scope 隔离。
- 🔌 **MCP 集成可观测性差**：#5237 指出当工具返回业务错误信封时，LLM 既不知失败、agent 也不重试，只能等 timeout 暴露——需要正确将业务错误编码为 `isError=true` 或新增 `business_error` 通道。
- 🏢 **企业自托管敏感**：Telegram 渠道 #4919 揭示存在 **企业 Bot API 网关 / 自托管 Bot API** 的真实诉求；同样地，#5210 反映 **Cloudflare Tunnel + Cloudflare Access** 已经是 WebUI 部署的常见组合，零 token trusted-proxy 模式正是为此而来。
- 🤖 **新模型适配滞后**：#5235 直接点名 `omit_temperature` 字符串名单刚更新 Opus 5，反映出"模型版本 → 客户端白名单"的人工维护链条脆弱，未来需要版本阈值化（#5236 已经回应）。
- 🎨 **WebUI 仍处于"持续打磨"阶段**：今日 8 个 WebUI PR 多数围绕视觉一致性、tooltip、markdown 预览、floating control 统一，说明 WebUI 已成为产品化推进的核心战场。

---

## 8. 待处理积压（提醒维护者关注）

| 编号 | 类型 | 闲置天数 | 备注 |
|---|---|---|---|
| [#4784](https://github.com/HKUDS/nanobot/issues/4784) | 🔴 Security | 30 天 | API Key 跨 Provider 泄漏仍未合修复 PR，建议下周内部排期。 |
| [#4919](https://github.com/HKUDS/nanobot/pull/4919) | PR · P2 | 21 天 | Telegram 自托管 Bot API，社区已反馈需求，请 reviewer 介入。 |
| [#5156](https://github.com/HKUDS/nanobot/pull/5156) | PR · P2 | 6 天 | 修复 Telegram polling 静默卡死，附详尽生产日志，价值高。 |
| [#5246](https://github.com/HKUDS/nanobot/issues/5246) | Enhancement | 1 天 | 一行 `.gitignore` 修复，零风险可快速合。 |
| [#5237](https://github.com/HKUDS/nanobot/issues/5237) | Bug | 1 天 | MCP 错误处理根因明确，需要架构层面回应（isError 约定 / business_error 通道）。 |
| [#5247](https://github.com/HKUDS/nanobot/issues/5247) | Bug | 1 天 | 已有修复 PR #5248，可走快速通道。 |

---

### 📊 项目健康度评分

| 维度 | 评分 | 说明 |
|---|---|---|
| **活跃度** | ⭐⭐⭐⭐⭐ | 26 PR / 5 Issue，远高于日常基线 |
| **响应速度** | ⭐⭐⭐⭐ | Bug 报告当天即出现修复 PR（#5247 → #5248） |
| **代码评审通道** | ⭐⭐⭐⭐⭐ | 19/26 PR 在 24h 内合并 |
| **安全响应** | ⭐⭐ | #4784 仍 OPEN 30 天，是当前最大风险敞口 |
| **路线图清晰度** | ⭐⭐⭐⭐ | WebUI 化、Provider 矩阵、Channel 扩列方向明确 |
| **文档同步** | ⭐⭐⭐ | #5239 强调 contributor 文档，但散点 PR 难得提一次主文档 |

> **总评**：项目处于 **健康且高产的稳定迭代期**，但 **#4784 安全 Issue** 与 **#5237 MCP 错误处理协议** 两项若再不跟进，将成为下一版本质量风险点。

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

<think>The user wants me to generate a daily project report for PicoClaw (github.com/sipeed/picoclaw) based on the GitHub data provided. The report date is 2026-08-05. Let me analyze the data carefully.

Looking at the data:
- Past 24 hours Issues: 3 total (2 new/active, 1 closed)
- Past 24 hours PRs: 4 total (2 to merge, 2 merged/closed)
- New releases: 0

Let me analyze each item:

**Issues:**
1. #3182 [CLOSED] [stale] [BUG] Android version - by @Monessem, created 2026-06-26, closed (stale)
2. #3281 [OPEN] [BUG] Web UI chat input is very laggy - by @xpader, 3 comments, 1 👍
3. #3269 [OPEN] [BUG] MCP server connection failure causes hang - by @ruiyigen, 3 comments, 1 👍

**Pull Requests:**
1. #3280 [CLOSED] [stale] fix(auth) OAuth login - by @honbou
2. #3251 [CLOSED] [stale] fix(providers) Anthropic cache tokens - by @hydrogenbond007
3. #3299 [OPEN] Add native Exa web search provider - by @kesku
4. #3317 [OPEN] feat(providers) log prompt cache tokens - by @vmuliadi-astro

Now I'll structure the report according to the requested 8 sections. The language should be objective, professional, data-driven, and highlight project health.

Let me craft this in Chinese as requested.

Key observations:
- No new releases today
- Activity level is moderate - 3 issues and 4 PRs in 24 hours
- Two stale items were closed (one issue, two PRs) - this suggests some housekeeping
- Two open PRs show active development: Exa web search provider integration and prompt cache token logging
- Two significant open bugs: Web UI lag, MCP server hang
- Most engagement is low (0-3 comments, 0-1 likes)

For section 8 (待处理积压), I should highlight:
- #3281 - open bug from 2026-07-21 (about 2 weeks old)
- #3269 - open bug from 2026-07-20 (about 2 weeks old) - more severe since it causes hang
- #3299 - open PR from 2026-07-26

Let me write the report now.</think>

# PicoClaw 项目动态日报

**报告日期：2026-08-05**
**数据范围：过去 24 小时（基于 GitHub 截至 2026-08-04 24:00 UTC 数据）**
**项目地址：https://github.com/sipeed/picoclaw**

---

## 一、今日速览

PicoClaw 过去 24 小时整体活跃度处于 **中等偏静** 水平，共产生 3 条 Issue 更新与 4 条 PR 更新，未发布新版本。从数据看，项目当日动作以 **存量清理** 为主：1 条 Issue 与 2 条 PR 因长期无响应被系统标记为 `stale` 并关闭。值得关注的是仍有 2 条 PR 处于待合并状态、2 条严重程度较高的 Bug 处于 Open 状态，社区参与度（评论数与点赞数）整体偏低（单条最高仅 3 评 / 1 赞），项目健康度评级为 **稳定但需关注响应时效**。

---

## 二、版本发布

**今日无新版本发布。** 上一可观测版本仍为社区问题中提及的 `PicoClaw 0.3.1`，距今已有数周，期间合并内容尚未整合为新的可发布版本。

---

## 三、项目进展（PR 合并 / 关闭动态）

过去 24 小时 PR 净变化：合并 0 条、关闭 2 条（均为 stale）、新增待合并 2 条。整体推进 **有限**，但仍有实质性新工作流入：

| 类型 | 编号 | 标题 | 状态 | 价值说明 |
|------|------|------|------|----------|
| 🆕 新增 | [#3299](https://github.com/sipeed/picoclaw/pull/3299) | Add native Exa web search provider | Open | 引入 Exa 作为原生 `tools.web` / `web_search` 提供方，补齐搜索引擎生态 |
| 🆕 新增 | [#3317](https://github.com/sipeed/picoclaw/pull/3317) | feat(providers): log prompt cache tokens in LLM response debug output | Open | 完善网关调试可观测性，支持 DeepSeek 等带 cache metadata 的厂商 |
| 🗑️ 关闭 | [#3280](https://github.com/sipeed/picoclaw/pull/3280) | fix(auth): make browser OAuth login survive real-world callback conditions | Closed (stale) | 修复 OAuth headless/remote 流程失效问题，但因长期无更新被关闭，建议作者跟进 |
| 🗑️ 关闭 | [#3251](https://github.com/sipeed/picoclaw/pull/3251) | fix(providers): capture the prompt cache token usage in Anthropic providers | Closed (stale) | 补全 Anthropic 缓存 token 捕获；功能与 #3317 形成上下游互补，值得重新开放 |

**评估**：今日无 PR 进入主干，对版本演进贡献约 **+0 步**；但两条 Open PR 都指向 **可观测性增强与生态扩展**，质量较高，建议维护者优先 Review。

---

## 四、社区热点

按评论数与点赞数综合评估，**今日无明显"爆款"讨论**，社区互动整体平淡。近 24h 更新热度排名：

| 排名 | 编号 | 主题 | 评论 | 👍 | 链接 |
|------|------|------|------|-----|------|
| 1 | [#3182](https://github.com/sipeed/picoclaw/issues/3182) | Android 端无法启动服务 | 6 | 0 | [链接](https://github.com/sipeed/picoclaw/issues/3182) |
| 2 | [#3281](https://github.com/sipeed/picoclaw/issues/3281) | Web UI 长聊天记录输入卡顿 | 3 | 1 | [链接](https://github.com/sipeed/picoclaw/issues/3281) |
| 3 | [#3269](https://github.com/sipeed/picoclaw/issues/3269) | MCP 连接失败导致 agent loop 卡死 | 3 | 1 | [链接](https://github.com/sipeed/picoclaw/issues/3269) |

**诉求分析**：
- 用户最关心的不是"新功能"，而是 **"现有流程跑不起来"**（Android、OAuth、MCP）；
- 三条高互动 Issue 中有两条直接指向 **可用性 / 崩溃性回归**，提示核心链路仍存在稳定性缺口；
- 点赞数偏低，说明这些痛点虽存在但社区扩散度有限，可考虑通过版本说明、Release Notes 等渠道加大曝光。

---

## 五、Bug 与稳定性

按严重程度排序：

| 等级 | 编号 | 标题 | 状态 | 是否有 fix PR |
|------|------|------|------|---------------|
| 🔴 P0-严重 | [#3269](https://github.com/sipeed/picoclaw/issues/3269) | MCP 服务器连接失败 → agent loop 挂死 → 聊天无响应 | Open（**自 2026-07-20 起**） | ❌ 无 |
| 🟠 P1-高 | [#3281](https://github.com/sipeed/picoclaw/issues/3281) | Web UI 输入框在长历史下严重卡顿 | Open（**自 2026-07-21 起**） | ❌ 无 |
| 🟡 P2-中 | [#3182](https://github.com/sipeed/picoclaw/issues/3182) | Android 端服务无法启动、设置无法修改路径 | Closed（stale，已 40 天） | ❌ 无（被系统关闭，非修复） |

**稳定性观察**：
- **3 条 Bug 中 2 条目前处于"无 fix PR"且"长期 Open"状态**，尤其 #3269 直接阻塞核心聊天功能；
- #3182 被自动关闭 ≠ 已修复，Android 平台可能仍存在未确认的可运行性问题；
- 建议维护者将 #3269 与 #3281 标记为 **good first issue** 或优先 backport，避免长期悬空。

---

## 六、功能请求与路线图信号

直接以"Feature Request"标签提交的 Issue 今日无新增，但 **Open PR 中已透露出路线图信号**：

| 信号 | 编号 | 指向方向 | 是否可能进入下个版本 |
|------|------|----------|------------------------|
| 拓展 Web 搜索提供方（Exa） | [#3299](https://github.com/sipeed/picoclaw/pull/3299) | 多搜索引擎生态 | 🟢 高：与现有 `tools.web` 抽象契合，重构成本低 |
| 调试日志打印 prompt cache tokens | [#3317](https://github.com/sipeed/picoclaw/pull/3317) | 可观测性 / 成本监控 | 🟢 高：纯加日志、无破坏性变更 |
| 重新落地 Anthropic cache token 统计 | [#3251](https://github.com/sipeed/picoclaw/pull/3251) | 成本与缓存利用率监控 | 🟡 中：需作者重新激活 PR |

**路线图建议**：上述三个方向均围绕 **"成本可观测 + 检索能力扩展"** 展开，可考虑合并入下一个 minor 版本（如 `0.4.0`）作为 "可观测性增强"主题。

---

## 七、用户反馈摘要

从有限评论中提炼的真实痛点：

1. **"Android 跑不起来"**（#3182）—— 用户即使拥有完整权限，仍无法启动服务或修改存储路径，属于 **平台首次落地门槛问题**；社区需要清晰的 Android 部署文档或官方构建产物。
2. **"Web UI 一旦聊久就卡"**（#3281）—— 真实场景为 **单会话长上下文**，反映前端可能未对历史消息做虚拟滚动 / 增量渲染。后端或前端任一侧优化均可缓解。
3. **"配错 MCP 就把整个聊天聊死"**（#3269）—— 用户希望 **agent loop 在外部依赖失败时能优雅降级或超时**，而非阻塞 UI。此项是当前最影响日常使用的体验黑洞。

综合判断：用户满意度偏低，社区情绪以 **"能跑但不稳"** 为主，暂无明显不满，但响应速度与平台覆盖是被反复提及的隐忧。

---

## 八、待处理积压（提醒维护者关注）

按积压时长排序：

| 编号 | 类型 | 创建时间 | 已等待 | 风险提示 |
|------|------|----------|--------|----------|
| [#3269](https://github.com/sipeed/picoclaw/issues/3269) | Bug - MCP hang | 2026-07-20 | **~16 天** | 🔴 影响核心聊天功能，建议本周内有人接手 |
| [#3182](https://github.com/sipeed/picoclaw/issues/3182) | Bug - Android | 2026-06-26 | **~40 天** | 🟠 已被标记 stale，可能误判"已修"，建议人工确认 |
| [#3281](https://github.com/sipeed/picoclaw/issues/3281) | Bug - Web UI lag | 2026-07-21 | **~15 天** | 🟠 影响日常使用体验，需前端 / 性能 owner 介入 |
| [#3299](https://github.com/sipeed/picoclaw/pull/3299) | PR - Exa 集成 | 2026-07-26 | **~10 天** | 🟡 待 Review，与路线图契合，建议分配 reviewer |
| [#3280](https://github.com/sipeed/picoclaw/pull/3280) | PR - OAuth fix | 2026-07-21 | ~15 天 | 🟠 已被 stale 关闭，但描述详尽（覆盖 4 个独立根因），建议联系作者重启 |
| [#3251](https://github.com/sipeed/picoclaw/pull/3251) | PR - Anthropic cache | 2026-07-12 | ~24 天 | 🟡 价值明确，被 stale 误伤，可与 #3317 协同合并 |

**维护建议**：
1. 立即处理 #3269 的 MCP 超时熔断；
2. 重新评估两条被 stale 关闭的 PR，必要时主动联系作者 reopen；
3. 为 #3299 指定 Reviewer，避免拖延错过 release window。

---

### 健康度评分（仅供参考）

| 维度 | 评分（5 分制） | 说明 |
|------|----------------|------|
| 代码合入节奏 | ⭐⭐☆☆☆ | 24h 内无合并 |
| Issue 响应及时性 | ⭐⭐☆☆☆ | 存在 16 天+ 未处理 Bug |
| 社区参与度 | ⭐⭐☆☆☆ | 评论与点赞双低 |
| 路线清晰度 | ⭐⭐⭐☆☆ | 待合并 PR 主题集中、可整合 |
| 整体健康度 | ⭐⭐½☆☆ | **稳定但活跃度下行，需维护者主动驱动** |

---

*本报告由 AI 智能体开源项目分析师自动生成，数据来源：GitHub REST API。*

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

<think>The user wants me to generate a daily report for the IronClaw project based on the GitHub data provided. Let me analyze the data carefully and structure the report according to the 8 sections requested.

Let me analyze the data:

**Overview:**
- 50 Issues updated in 24h (38 new/active, 12 closed)
- 50 PRs updated in 24h (33 pending, 17 merged/closed)
- 0 new releases

**Key observations:**
1. The project is in v1.1.0-rc.1 phase, working towards v1.1.0 release
2. Heavy refactoring work ("Reborn" architecture) is ongoing
3. Multiple epics for v1.1.0 are being tracked
4. There's a focus on error recovery, test coverage, skill discovery
5. Many PRs are stacked/stacked-merge dependent on each other
6. Documentation upgrades for V1 launch
7. Windows CI issues being resolved during release smoke

**Top Issues (by comments):**
- #6284 (15 comments) - error-recoverability endgame epic - CLOSED
- #6524 (4 comments) - Hermetic capability testing platform epic - CLOSED
- #7119 (4 comments) - clippy package-set-dependent bug
- #6752 (3 comments) - Instance deletion bug
- #7145 (3 comments) - WS2 extension_host re-layer
- #7194 (2 comments) - shared channel outbound delivery target
- #7193 (2 comments) - run-now automation manual fire
- #7192 (2 comments) - optimistic user messages anchor bug
- #7191 (2 comments) - builtin.time relative offset
- #6565 (2 comments) - reliable skill discovery epic
- #7144 (2 comments) - pre-existing defects in trace contribution
- #7147 (2 comments) - shrink-only architecture ratchets
- #7168 (1 comment, CLOSED) - agent-installed skills invisible
- #6941 (1 comment) - skills self-creation epic
- #7177 (1 comment) - deferred tool retrieval improvement
- #7105 (1 comment) - cloud API identity/payments service
- #6731 (1 comment) - IronHub integration epic
- #7148 (1 comment, CLOSED) - conversations -> turns layer matrix
- #7151 (1 comment) - composition mass gate defect
- #6947 (1 comment) - classify-test-scope.sh defection
- #7103 (1 comment) - latency-trace field bug
- #7104 (1 comment) - extractors failed vs empty
- #7146 (1 comment) - tracing target field bug
- #7115 (1 comment) - docker entrypoint.sh env var bug
- #7178 (0 comments) - 1.0.0-rc.1 -> 1.1.0-rc.1 migration lossless
- And more

**Top PRs:**
- Most are XL size, suggesting significant changes
- #7184 - Nostr host functions for WASM tools
- #7029 - restore durable delivery claim
- #7198 - preserve rc1 state during 1.1 startup
- #7063 - delegate Platform-owned paths in Reborn planner
- #7027 - disable ambient proxy discovery
- #7048 - sanitize guest diagnostics
- #7157 - explicit channel delivery tool
- #7059 - cover automation lifecycle E2E
- #6970 - upgrade documentation for V1
- #5101 - reuse cargo-component installer
- #7034 - report ignored ambient proxy settings
- #5598 - release PR (stale)
- #7167 (CLOSED) - fix per-package clippy
- #7028 - preserve terminal status
- #7200 (CLOSED) - fix icacls writing to CLI stdout on Windows
- #7001 - keep cached system prefix byte-stable
- #7197 (CLOSED) - Windows identity variables
- #7181 - Waves 0-4 batch 2
- #6965 - IronHub docs
- #7156 (CLOSED) - enforcement ratchets

**Closed/merged PRs today:**
- #7167 - per-package clippy fix
- #7200 - icacls Windows fix
- #7197 - Windows identity variables
- #7156 - enforcement ratchets

**Feedback from Champions check-in (2026-07-23):**
- Memory not reliably recalled (#7185)
- Per-user LLM model selection (#7183)
- Web scraping hit-or-miss (#7180)

Now let me write the report in Chinese, structured as requested. I'll be objective, data-driven, and highlight project health.

The date is 2026-08-05. Let me write this in a professional tone.</think>

# IronClaw 项目日报 · 2026-08-05

> 数据源：[nearai/ironclaw](https://github.com/nearai/ironclaw) GitHub 仓库 · 报告时间窗口：过去 24 小时

---

## 1. 今日速览

IronClaw 正处于 **v1.1.0-rc.1 发布冲刺的关键阶段**，仓库过去 24 小时共产生 **50 条 Issue 更新**（38 新开/活跃、12 关闭）与 **50 条 PR 更新**（33 待合并、17 合并/关闭），活跃度处于高位，但 **当日无新版本发布**。当前主要工作流集中在三件事上：**Reborn 架构重构的"Wave 0–4"批量合并**、**v1.1.0-rc.1 → 1.1.0 的无损迁移**、以及 **V1 发布前的文档与 CI 收口**。值得注意的是，Issue 关闭量（12）小于新开量（38），积压在持续累积，但其中关闭的两条 Epic（#6284、#6524）以及 #7119、#7168、#7148 等关键缺陷均被及时清掉，说明核心团队在结构性任务上保持了执行力。整体项目健康度评估：**活跃但承压**，稳定性处于 RC 阶段特征。

---

## 2. 版本发布

**本周期无新版本发布。** 当前最新发布为 `ironclaw-v1.1.0-rc.1`（commit `ae1dc1178ace23a345e941dd17eb0e93...`），相关自动化发布 PR [#5598](https://github.com/nearai/ironclaw/pull/5598) 仍处于 OPEN 状态。

---

## 3. 项目进展关键合并/关闭

过去 24 小时有 **17 条 PR 合入/关闭**，其中以下 4 条对项目推进具有结构性意义：

| PR | 标题 | 影响 |
|---|---|---|
| [#7156](https://github.com/nearai/ironclaw/pull/7156) | **Enforcement: 同层依赖清单、composition 绝对 LOC 上限、D-E vendor census、ratchet 收紧** | 修复 4 项让"绿色 CI 名存实亡"的执法缺陷（合并了 #7149/#7151/#7150/#7147），每条门禁都进行了"破坏性反向验证 + 正常变更不误报 + 非零扫描"三重 sabotage-test，**显著提升 CI 信任度** |
| [#7167](https://github.com/nearai/ironclaw/pull/7167) | **fix(ci): 修复 bin-only crate 的 per-package clippy；分类 `.gitignore`** | 根因 `--lib` 标志在 bin-only 包上硬报错（exit 101），导致任何首个变更包为 `ironclaw` 的 PR 都会先于 lint 失败——**修复了首个 PR 永远红的体验性问题** |
| [#7200](https://github.com/nearai/ironclaw/pull/7200) | **fix(composition): 阻止 Windows 上 icacls 写入 CLI stdout** | 解决 v1.1.0-rc.1 的第 4 个 Windows 阻塞缺陷；preflight 到 `profile list --json` 全部通过，仅 icacls 仍泄漏 |
| [#7197](https://github.com/nearai/ironclaw/pull/7197) | **ci: 向 Windows release smoke 传递身份变量** | 清理 `USERNAME is unset` 失败，主动收窄 scope（移除产品侧 Windows ACL 账户解析变更，回归到 1.0.0 以来行为） |

**已关闭的关键 Issue：**
- [#6284](https://github.com/nearai/ironclaw/issues/6284) — **error-recoverability endgame**（15 条评论最高热门）—— 强调 100% 错误可恢复契约的 EPIC 关闭，是 v1.1.0 重大里程碑
- [#6524](https://github.com/nearai/ironclaw/issues/6524) — Hermetic capability/journey testing EPIC 关闭
- [#7119](https://github.com/nearai/ironclaw/issues/7119) — Code Style clippy 包集依赖问题
- [#7168](https://github.com/nearai/ironclaw/issues/7168) — agent-installed skills 不可见 bug
- [#7148](https://github.com/nearai/ironclaw/issues/7148) — `conversations -> turns` 缺少 CHECKLIST 所有权行

**整体推进度：** 项目向 v1.1.0 又向前迈进了一格——CI 治理、错误恢复、测试平台、键值卫生等四个长期债务被一次性处理。

---

## 4. 社区热点

### 4.1 讨论最多的 Issue

| 排名 | Issue | 评论 | 话题 |
|---|---|---|---|
| 🥇 | [#6284](https://github.com/nearai/ironclaw/issues/6284) error-recoverability endgame | 15 | "模型必须 100% 看到、识别、行动所有错误"，已关闭，定调 v1.1.0 错误处理哲学 |
| 🥈 | [#6524](https://github.com/nearai/ironclaw/issues/6524) Hermetic capability testing platform | 4 | 解决"每个能力是否真有确定性测试覆盖"的元问题，已关闭 |
| 🥉 | [#7119](https://github.com/nearai/ironclaw/issues/7119) clippy 包集依赖 | 4 | 反映 PR 作者一手体验（"我第一个 PR 就红了"），已通过 #7167 修复 |
| 4 | [#6752](https://github.com/nearai/ironclaw/issues/6752) 实例删除失败 + 重登"Loading your agents..."卡死 | 3 | v1-launch-checklist 阻断性 bug，**至今未合并修复 PR** |
| 5 | [#7145](https://github.com/nearai/ironclaw/issues/7145) WS2: extension_host → loops re-layer | 3 | 续 #7092，用"四端口残量"而非"文件数"来评估规模，工程方法论反思 |

### 4.2 讨论最热的 PR

| PR | 标题 | 反映的诉求 |
|---|---|---|
| [#7184](https://github.com/nearai/ironclaw/pull/7184) | **Nostr host functions for WASM tools** | 社区新贡献者 (@Kampouse) 推动 WASM 沙箱新增 Nostr 签名（Schnorr/BIP-340）—— 私钥不出主机。**信号：IronClaw 正在吸引 Web3 工具生态。** |
| [#6970](https://github.com/nearai/ironclaw/pull/6970) | **docs: 升级 V1 文档** | PR #6766 的衍生清理，**移除"Reborn"术语**（公开文档用普通语言），代表项目对外"用产品语言、不是内部代号"的成熟化 |
| [#7157](https://github.com/nearai/ironclaw/pull/7157) | **explicit channel delivery tool** | 设计 spec 化（2026-07-27 spec/plan 双文档），引入"两车道"模型：会话生命周期 vs 通知频道，**删除投递启发式**——意味着送达路径从"智能判断"转为"显式选择"，可解释性大幅提升 |

---

## 5. Bug 与稳定性

按严重程度排序：

### 🔴 严重 / 影响 v1 发布

| Issue | 标题 | 状态 |
|---|---|---|
| [#6752](https://github.com/nearai/ironclaw/issues/6752) | 实例删除失败，重登卡 "Loading your agents..." | OPEN，**无修复 PR**——v1-launch-checklist 阻塞项 |
| [#7185](https://github.com/nearai/ironclaw/issues/7185) | 跨会话记忆不可靠召回 | OPEN，**无修复 PR**——由 Champions 周会（Devon 等法律场景）反馈 |
| [#7180](https://github.com/nearai/ironclaw/issues/7180) | Web 抓取飘忽不定：agent 用 http 而非 web_search | OPEN，**无修复 PR**——根因可能涉及工具选路由 |

### 🟠 中等 / 内部缺陷

| Issue | 标题 | 是否有 fix |
|---|---|---|
| [#7119](https://github.com/nearai/ironclaw/issues/7119) clippy 包集依赖 | ✅ 已通过 [#7167](https://github.com/nearai/ironclaw/pull/7167) 修复 |
| [#7168](https://github.com/nearai/ironclaw/issues/7168) agent-installed skills 不可见 | ⚠️ Issue 已关闭但**未见对应 fix PR** |
| [#7115](https://github.com/nearai/ironclaw/issues/7115) docker entrypoint.sh 把 legacy Slack 迁移门控在死 env var 上 | OPEN，**无修复 PR**——文档驱动会跳过迁移 |
| [#7146](https://github.com/nearai/ironclaw/issues/7146) tracing 121 处 `target = "…"` 字段写错 | OPEN，**无修复 PR**——导致按 metadata target 过滤的事件全部不可见 |
| [#7103](https://github.com/nearai/ironclaw/issues/7103) 延迟跟踪字段在关闭时仍计算 | OPEN，**无修复 PR**——WS6 切片中发现 |
| [#7104](https://github.com/nearai/ironclaw/issues/7104) 提取器 "no text found" 误报为 Failed | OPEN，**无修复 PR**——模型看到的错误类型错误 |
| [#7119](https://github.com/nearai/ironclaw/issues/7119) → 见上合并 | ✅ |
| [#7147](https://github.com/nearai/ironclaw/issues/7147) 两个 shrink-only 架构棘轮在 main 上有未追踪 slack | ⚠️ Issue OPEN，但 [#7156](https://github.com/nearai/ironclaw/pull/7156) 已合并修复部分 |

### 🟡 轻微 / 行为变更类

| Issue | 标题 |
|---|---|
| [#7192](https://github.com/nearai/ironclaw/issues/7192) WebUI 乐观用户消息锚点错位：渲染到 agent 输出下方 |
| [#7191](https://github.com/nearai/ironclaw/issues/7191) `builtin.time` 不支持相对偏移算术，错误消息不分类 |
| [#7148](https://github.com/nearai/ironclaw/issues/7148) 已关闭（含在 [#7156](https://github.com/nearai/ironclaw/pull/7156)） |

---

## 6. 功能请求与路线图信号

| 需求 | Issue | 评估 |
|---|---|---|
| **自动化"立即运行"**（手动触发，跨触发域/产品面/能力/WebUI） | [#7193](https://github.com/nearai/ironclaw/issues/7193) | 列表/暂停/恢复/重命名/删除之后明显缺失的能力，**几乎肯定进 v1.1.x** |
| **管理员允许的共享频道作为出站送达目标** | [#7194](https://github.com/nearai/ironclaw/issues/7194) | 配合 #7157"显式通道送达工具"主线，**结构契合**，应当是同一波功能 |
| **每用户 LLM 模型选择**（目前仅管理员） | [#7183](https://github.com/nearai/ironclaw/issues/7183) | Champions 周会（Jeremy Koch, marketing）诉求，**v1.1.0 之后可能性大** |
| **IronHub 集成（动态工具/技能市场）** | [#6731](https://github.com/nearai/ironclaw/issues/6731) | 与 [#6965](https://github.com/nearai/ironclaw/pull/6965) docs 同步推进，**v1.x 长期方向** |
| **独立身份/会话/支付服务**（云 API） | [#7105](https://github.com/nearai/ironclaw/issues/7105) | 架构级评估，**v1.2+ 议题** |
| **追溯成本可观测：候选技能"未选 vs 选中改变结果"分离日志** | [#7199](https://github.com/nearai/ironclaw/issues/7199) | 来自外部用户 (PostChairmanLock / FaceSeek) 的洞察，**与 #6565 skill discovery epic 高度对齐** |
| **改善延迟工具检索（schema-aware ranked search）** | [#7177](https://github.com/nearai/ironclaw/issues/7177) | v1.1.0 scope、P2 |

---

## 7. 用户反馈摘要

以下痛点来自 **2026-07-23 IronClaw Champions 周会**反馈（[转述来源](https://github.com/nearai/ironclaw/issues/7185)）：

1. **跨会话记忆断裂**（Devon，法律场景）——"Agent 在不同时间/会话中无法回拉到上下文信息"。这是 AI 助手场景下最昂贵的一次性失忆，对法务/合规类工作尤其致命。
2. **抓取能力不稳定**（Michael Kelly, builder ops）——"有的源能成功，有的完全失败，且用户侧看不到规律"。典型症状：模型走了错误的工具（http 替代 web_search），暴露了工具选择路由器的不成熟。
3. **模型选择被锁死**（Jeremy Koch, marketing）——用户希望"自己换底层模型"，但当前只有管理员（Tobias）能够操作。意味着当前产品的"个人 AI 助手"叙事与现实权限模型存在张力。
4. **实例删除 UX 卡死**（Slack 反馈 elliot.braem）—— 删除实例触发"Loading your agents..."长期挂起，新用户重新登录即被劝退。**v1 上线后这是首屏负面体验**。

**正面信号：**
- 外部用户（PostChairmanLock, FaceSeek）主动提出方法论建议（"候选 vs

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

<think>Let me analyze the GitHub data for LobsterAI and generate a comprehensive daily report for 2026-08-05.

Key observations:
1. No new releases today
2. 1 Issue active (security bug about model key leakage)
3. 13 PR updates - 4 still open, 9 closed/merged
4. Major release PR #2430 "Release: 2026.8.3" was closed/merged - this is significant
5. Several dependabot PRs were closed
6. One security issue about agent leaking model key info - quite serious
7. Stale PRs from April 2026 being closed (dependabot dependency updates)

Let me structure the report properly with all 8 sections requested.

Active/open PRs (4):
- #2431 Liuzhq/fix rlog - just created today
- #2374 add permanent setting to hide sidebar ad banner
- #1277 dependabot electron bump
- #1205 fix session rename toast (stale)

Closed PRs (9):
- #2430 Release: 2026.8.3 - this is the major release merge
- #2429 optimize login page
- #2428 complete startup credit campaign analytics fields
- #2427 bundle startup credit campaign artwork
- #2426 classify model capacity overload separately
- #1282, #1283, #1284 - dependabot closes (stale)
- #2425 add artifact auto-preview toggle

The most significant event is PR #2430 - the 2026.8.3 release merge, which includes multiple features. This is essentially a release event even though there's no formal "Release" tag in the Releases section.

Issues:
- #1202 - Security bug about agent leaking model key information - marked stale but very serious

Let me write this in Chinese as the request is in Chinese.</think>

# LobsterAI 项目日报
**日期：2026-08-05** | 项目：[netease-youdao/LobsterAI](https://github.com/netease-youdao/LobsterAI)

---

## 1. 今日速览

LobsterAI 今日活跃度**较高**，以版本发布合并为主线：PR #2430（`Release: 2026.8.3`）完成合入，标志着 8 月首个正式版本的关键特性已落地主线。过去 24 小时共有 13 条 PR 变动，其中 9 条关闭、4 条仍待处理，关闭/合并比例约 69%，整体推进节奏紧凑。社区端仅 1 条 Issue 处于活跃状态，但内容涉及**敏感信息泄漏**，安全风险等级较高，需维护者优先关注。总体而言，项目处于"版本交付 → 新一轮迭代"的过渡期，工程节奏健康，但存在长期未响应的积压项（stale PR/Issue）需清理。

---

## 2. 版本发布

**无独立的 GitHub Release tag 发布**，但今日合并的 **PR #2430 ([Release: 2026.8.3](https://github.com/netease-youdao/LobsterAI/pull/2430))** 实质上完成了 `release/2026.8.3` → `main` 的合入，构成本次版本的核心交付。该版本关键变更如下：

- **新增**：原生集成的"启动积分奖励"（startup credit campaign）活动
- **优化**：首次启动登录流程（参见 PR #2429）
- **新增**：Artifact 自动预览开关（PR #2425）
- **改进**：模型错误分类（区分 ModelOverloaded 与普通 rate-limit，PR #2426）
- **可靠性**：Windows 安装包稳定性提升

> ⚠️ 破坏性变更 / 迁移事项：摘要中暂未披露破坏性 API 变更；建议用户从 8 月初版本升级时留意 Windows 安装器的安装路径与旧版配置兼容性。

---

## 3. 项目进展

今日合并/关闭的关键 PR（共 9 条），按重要性排序：

| PR | 主题 | 类别 | 链接 |
|---|---|---|---|
| #2430 | Release: 2026.8.3 主线合入 | 🚀 版本发布 | [链接](https://github.com/netease-youdao/LobsterAI/pull/2430) |
| #2429 | 登录页优化 | 🎨 UX 改进 | [链接](https://github.com/netease-youdao/LobsterAI/pull/2429) |
| #2428 | 启动积分活动分析字段补全 | 📊 数据/可观测性 | [链接](https://github.com/netease-youdao/LobsterAI/pull/2428) |
| #2427 | 启动积分活动素材打包 | 🎁 功能 | [链接](https://github.com/netease-youdao/LobsterAI/pull/2427) |
| #2426 | 模型容量超载与限流分类分离 | 🐛 错误处理 | [链接](https://github.com/netease-youdao/LobsterAI/pull/2426) |
| #2425 | Artifact 自动预览开关设置 | ⚙️ 设置项 | [链接](https://github.com/netease-youdao/LobsterAI/pull/2425) |
| #1282 / #1283 / #1284 | dependabot 依赖升级关闭（stale） | 📦 依赖管理 | [#1282](https://github.com/netease-youdao/LobsterAI/pull/1282) / [#1283](https://github.com/netease-youdao/LobsterAI/pull/1283) / [#1284](https://github.com/netease-youdao/LobsterAI/pull/1284) |

**整体评估**：项目在"活动营销 + 错误处理精细化 + 用户设置可定制化"三个方向同时推进，2026.8.3 版本已具备上线条件。Error classification 改进（#2426）是技术债层面的一项重要修复，有助于降低用户对模型侧故障的误判。

---

## 4. 社区热点

今日**评论/讨论活跃度整体偏低**——Issues 区仅有 1 条 Issue（#1202），且评论数仅为 1；所有 PR 均无评论。最值得关注的焦点仍是 **Issue #1202**：

- 🔗 **[#1202](https://github.com/netease-youdao/LobsterAI/issues/1202) — agent 泄漏 model key 信息，存在敏感信息泄漏风险**
  - 作者：@blueb0ne | 创建：2026-04-01 | 最新更新：2026-08-04 | 👍 0
  - **诉求分析**：用户在询问 agent "当前 key 配置"时，agent 不仅暴露了配置路径，还可通过环境变量进一步推断真实 model key。这反映了 Agent 工具调用与系统 Prompt 在"敏感配置"边界保护上的**设计缺陷**，而不仅仅是输出过滤问题。

> 📌 该 Issue 长期处于 open 状态（已 4 个月）且被标记为 [stale]，但其内容涉及**安全风险**，不应按普通 stale 处理。

---

## 5. Bug 与稳定性

按严重程度排序：

| 严重度 | Issue/PR | 描述 | 状态 | 链接 |
|---|---|---|---|---|
| 🔴 **高（安全）** | [Issue #1202](https://github.com/netease-youdao/LobsterAI/issues/1202) | agent 泄漏 model key 路径与敏感配置信息 | OPEN（stale），**无 fix PR** | [链接](https://github.com/netease-youdao/LobsterAI/issues/1202) |
| 🟡 中 | [PR #2426](https://github.com/netease-youdao/LobsterAI/pull/2426) | "overloaded"/capacity 错误被错误归类为 rate-limit，误导用户立即重试 | 已合并 ✅ | [链接](https://github.com/netease-youdao/LobsterAI/pull/2426) |
| 🟢 低（已修复） | [PR #1205](https://github.com/netease-youdao/LobsterAI/pull/1205) | 会话重命名失败时静默吞错，无用户反馈 | OPEN（stale），有 PR 待合 | [链接](https://github.com/netease-youdao/LobsterAI/pull/1205) |

**重点提醒**：Issue #1202 的安全风险在 2026.8.3 版本中**未被明确修复**，建议维护者评估是否应在下一个补丁版本中纳入"敏感配置项输出过滤"机制。

---

## 6. 功能请求与路线图信号

| 需求 | 来源 | 当前进展 | 纳入下一版本可能性 |
|---|---|---|---|
| 永久隐藏侧边栏广告横幅（设置开关） | [PR #2374](https://github.com/netease-youdao/LobsterAI/pull/2374)（关联 Issue #2342） | OPEN，自 2026-07-21 起未更新 | 🟢 **高** — 已具备成熟实现，仅缺评审合入 |
| Artifact 文件自动预览开关 | 已有 PR 落地 | 已合并到 2026.8.3（#2425） | ✅ 已纳入 |
| 启动积分奖励活动 | 运营驱动 | 已合并（#2427, #2428） | ✅ 已纳入 |
| 模型错误分类精细化 | 内部反馈 | 已合并（#2426） | ✅ 已纳入 |

**信号解读**：用户对"广告可关闭"这一基础设置项存在明确诉求，且 PR 已停留 2 周未推进，存在被遗忘风险，建议维护者优先 review #2374。

---

## 7. 用户反馈摘要

由于 Issues 区评论数据稀少，今日可提炼的真实用户痛点如下：

- 🔐 **隐私/安全焦虑**：Issue #1202 反映用户对"AI agent 能否访问本地敏感配置"的普遍担忧。期望 agent 对"key / token / 密码"类查询**主动拒绝**，而非泄露路径信息。
- 🙈 **广告控制诉求**（来自 Issue #2342，经 PR #2374 间接传递）：用户希望拥有对 UI 元素的永久控制权，而非只能逐次关闭。
- 🪪 **会话重命名失败静默化**（PR #1205）：操作失败无任何反馈是桌面应用最反人性的体验之一，用户需要明确的"成功/失败"反馈链。

**正面信号**：暂无明确的不满意/投诉性反馈；本次 8.3 版本的多项 UX 改进（登录页、错误提示、设置项）符合用户预期方向。

---

## 8. 待处理积压

| 类型 | 编号 | 标题 | 创建日期 | 积压时长 |
|---|---|---|---|---|
| 🛑 安全 Issue | [#1202](https://github.com/netease-youdao/LobsterAI/issues/1202) | agent 泄漏 model key 信息 | 2026-04-01 | **~4 个月** |
| 📦 依赖升级 PR | [#1277](https://github.com/netease-youdao/LobsterAI/pull/1277) | electron 40.2.1 → 43.2.0（跨 3 个大版本） | 2026-04-02 | ~4 个月 |
| 🐛 错误反馈 PR | [#1205](https://github.com/netease-youdao/LobsterAI/pull/1205) | 会话重命名失败 toast | 2026-04-01 | ~4 个月 |
| ⚙️ 用户设置 PR | [#2374](https://github.com/netease-youdao/LobsterAI/pull/2374) | 永久隐藏侧边栏广告横幅 | 2026-07-21 | ~15 天 |

**维护者提醒**：
1. **#1202 应优先处理**——安全类 Issue 不应仅因"stale"标签被忽略。
2. **#1277 electron 大版本升级**涉及 Electron 40 → 43，可能引入构建/兼容性风险，需评估测试成本。
3. **#2374**实现成熟，建议在下个 minor 版本中合入，避免被新迭代淹没。

---

## 📊 项目健康度总评

| 维度 | 评分 | 说明 |
|---|---|---|
| 活跃度 | ⭐⭐⭐⭐ | 当日 13 条 PR 变动，节奏良好 |
| 安全性 | ⭐⭐ | 存在未修复的敏感信息泄漏 Issue |
| 响应及时性 | ⭐⭐ | 多条 4 月份 Issue/PR 仍未关闭 |
| 交付能力 | ⭐⭐⭐⭐⭐ | 2026.8.3 版本成功合入主线 |
| 社区互动 | ⭐⭐ | 评论与讨论较少 |

**总评**：🟡 **良好但需关注安全债**。版本工程能力出色，但对存量安全 Issue 与依赖升级的响应节奏偏慢，建议下一周内启动专项清理。

</details>

<details>
<summary><strong>QwenPaw</strong> — <a href="https://github.com/agentscope-ai/QwenPaw">agentscope-ai/QwenPaw</a></summary>

<think>Let me analyze the GitHub data for QwenPaw and generate a comprehensive daily report for 2026-08-05.

Let me first understand the data:
- 30 Issues updated in last 24 hours (17 new/active, 13 closed)
- 49 PRs updated in last 24 hours (28 pending merge, 21 merged/closed)
- 0 new releases

Let me categorize and analyze:

**Issues Analysis:**

Top commented issues (most active):
1. #6649 - GPT-5.6 prompt caching parameters (13 comments, OPEN)
2. #6655 - Console channel doesn't render security approval (12 comments, CLOSED)
3. #6643 - Task outputs piling in media dir (6 comments, OPEN)
4. #6667 - DeepSeek thinking mode fails in multi-turn (5 comments, OPEN)
5. #6642 - Drag file in chat - direct read vs upload (5 comments, CLOSED)
6. #6684 - Channel retry functionality (4 comments, OPEN)
7. #4947 - Kanban Board for Playground (3 comments, CLOSED, old)
8. #6455 - Agent using multiple models (3 comments, OPEN)
9. #5906 - Anti-duplicate malfunction (3 comments, CLOSED)
10. #6490 - Volcengine Agent Plan and Xiaomi MiMo providers (3 comments, OPEN)

New bugs from today (2026-08-05):
- #6697 - v2.1.0b1 desktop PYTHONHOME crash (HIGH severity)
- #6698 - v2.1.0b1 browser SDK WireProtocolError
- #6700 - Large tool output causes UI to freeze
- #6690 - cron pause/resume doesn't persist
- #6687 - OpenRouter multimodal probe overwrites capabilities
- #6695 - WeChat approval prompts unreachable (CLOSED)
- #6696 - WeChat iLink context_token consumed by typing indicator

New feature requests:
- #6699 - On-Demand Skill Loading (token efficiency)
- #6694 - Global rules (.agent / .claude style)

Closed issues:
- #6655 - Console approval prompts (fixed)
- #6642 - Drag file in chat - direct read (fixed)
- #4947 - Kanban Board (closed)
- #5906 - Anti-duplicate malfunction (fixed)
- #6301 - Timestamp timezone (fixed)
- #6583 - File names display on multiple lines (fixed)
- #6695 - WeChat approval prompts (fixed)
- #6693 - DELETE (test/no-content)
- #6673 - Frontend conversation window (fixed)
- #6633 - Skills/Skill Pool pages fail on slow networks (fixed)
- #6656 - Release duty v2.1.0-beta.1 (verification done)
- #6374 - token usage persistence (fixed)
- #6692 - log command arguments (related PR closed)

**PRs Analysis:**
Top PRs:
- #6676 - fix(onebot): bind loopback by default (security)
- #6701 - fix(website): website add blog
- #6504 - feat: unify project directories and harden file workspace
- #6645 - Feat/os enhancements (large feature)
- #6691 - fix(crons): persist enabled state on pause/resume
- #6692 - fix: avoid logging conversation command arguments (CLOSED)
- #6689 - feat(channels): retry transient startup failures
- #6688 - fix(plugins): isolate bare absolute imports per plugin
- #4267 - feat(security): Mac OS file path whitelist (CLOSED)
- #6331 - chore(console): specify Node.js version requirement
- #6615 - fix(agentscope): resolve compatibility
- #6628 - fix(scroll): use SystemMsg for compressed memory (CLOSED)
- #6398 - feat: add reranker support for ReMe memory search
- #6629 - fix(memory): trigger summarize on auto-compression
- #6678 - fix(ci): install Playwright Chromium (CLOSED)
- #6686 - test(integration): fix chrome contract mismatches (CLOSED)
- #6679 - test(integration): align import-local (CLOSED)
- #6669 - fix(desktop): stabilize Chrome native messaging
- #6685 - fix(timestamp): improve timestamp handling (CLOSED)
- #6492 - fix(files): preserve uploaded filenames in hints

Now let me think about severity of bugs:
- HIGH: #6697 (desktop crash, all python subprocesses fail), #6698 (browser SDK broken), #6700 (UI freeze)
- MEDIUM: #6690 (cron persistence), #6687 (capabilities false), #6696 (WeChat token)
- LOW: Others

Let me think about feature requests and roadmap signals:
- #6699 (skill on-demand loading) - related to token efficiency
- #6694 (global rules) - similar to .claude-style rules
- #6455 (multi-model per agent) - significant feature
- #6490 (Volcengine Agent Plan, Xiaomi MiMo providers)
- #6684 (channel retry)
- #6649 (GPT-5.6 prompt caching)
- #6643 (per-task output directory)
- #6645 (OS-like desktop features)
- #6504 (project directory unification)
- #6398 (reranker for ReMe memory)

Let me now draft the report in Chinese as requested.

For "待处理积压" (backlog) - looking at older open issues:
- #4947 is closed but was opened in June - just closed
- #6455 from 2026-07-24 still open
- #6301 just closed
- #6490 from 2026-07-27 still open

Let me also note the v2.1.0-beta.1 release verification issue (#6656) was closed - good sign.

Let me write the report now.</think>

# QwenPaw 项目动态日报

**报告日期**：2026-08-05
**数据周期**：过去 24 小时（基于 GitHub Issues/PRs 更新）

---

## 1. 今日速览

QwenPaw 在过去 24 小时内维持了**较高的开发活跃度**：30 条 Issue 更新（17 新开/活跃、13 已关闭）、49 条 PR 更新（28 待合并、21 已合并/关闭）。Issues 与 PR 的"关闭/开放比"接近 1:1.2，社区反馈得到较快消化。**当日无新版本发布**，但 `v2.1.0-beta.1` 的安装验证工单 (#6656) 已关闭，说明该 beta 版的发布准入流程已通过。今日热点集中在 v2.1.0b1 桌面端的回归问题（PYTHONHOME 注入、Browser SDK WireProtocolError）、多模型/多 Provider 集成诉求（Volcengine、Xiaomi MiMo、GPT-5.6 缓存）以及 Channels/Plugins 健壮性改进（频道重试、插件命名空间隔离）。项目整体处于**v2.1.0 beta 收尾 + 2.0.x 稳定维护双线并行**的状态。

---

## 2. 版本发布

**今日无新版本发布。**

值得关注的近期版本动态：
- `v2.1.0-beta.1` 已于近日发布，其 Release Duty 安装验证工单 [Issue #6656](https://github.com/agentscope-ai/QwenPaw/issues/6656) 今日被关闭（通过验证）。
- 桌面版 (`v2.1.0-beta.1`, Tauri Desktop, Windows) 出现两个高严重度回归，详见第 5 节。

---

## 3. 项目进展（今日合并/关闭的重要 PR）

| PR | 说明 | 状态 | 影响 |
|---|---|---|---|
| [#6692](https://github.com/agentscope-ai/QwenPaw/pull/6692) | 不再以 INFO 级别记录对话命令的原始参数，保留命令名用于运维可观测性 | ✅ CLOSED | 修复敏感参数泄露日志的隐私/安全风险 |
| [#6678](https://github.com/agentscope-ai/QwenPaw/pull/6678) | CI 集成测试套件安装 Playwright Chromium | ✅ CLOSED | 修复 nightly 7 个 `tests/integration/browser/` 用例失败 |
| [#6686](https://github.com/agentscope-ai/QwenPaw/pull/6686) | 修复 Chrome 契约测试不匹配，补充 p-tier 标记 | ✅ CLOSED | 修复 PR 准入门禁的覆盖率缺口 |
| [#6679](https://github.com/agentscope-ai/QwenPaw/pull/6679) | 对齐 `/import-local` 与 #6487 的 `$HOME` 来源限制 | ✅ CLOSED | 修复集成测试中 3 平台确定性失败 |
| [#6685](https://github.com/agentscope-ai/QwenPaw/pull/6685) | 改进 `agentscope_msg_to_message` 的时间戳处理 | ✅ CLOSED | 修复 #6301 naive UTC 时间戳被误读为本地时间 |
| [#6628](https://github.com/agentscope-ai/QwenPaw/pull/6628) | Scroll 压缩占位符改用 `SystemMsg` 而非 `role=user` | ✅ CLOSED | 修复 DeepSeek 等 OpenAI 兼容 API 报 400 |
| [#4267](https://github.com/agentscope-ai/QwenPaw/pull/4267) | macOS 文件路径白名单 + sandbox-exec 保护 | ✅ CLOSED | 强化 macOS 工具执行安全 |

**项目整体推进**：今日在 **日志脱敏、CI/集成测试稳定性、Scroll 压缩协议、macOS 安全沙箱** 四个维度均有推进，2.0.1→2.1.0 链路的关键阻塞点正在被逐个清除。

---

## 4. 社区热点

### 🔥 评论数 Top 5 Issues

| Rank | Issue | 评论 | 状态 | 反映诉求 |
|---|---|---|---|---|
| 1 | [#6649](https://github.com/agentscope-ai/QwenPaw/issues/6649) GPT-5.6 prompt caching parameters | 13 | OPEN | 紧跟 GPT 新模型能力、要求多轮对话缓存复用降本 |
| 2 | [#6655](https://github.com/agentscope-ai/QwenPaw/issues/6655) Console 通道不渲染审批提示 | 12 | CLOSED | 桌面/Console 场景下安全审批体验**完全失声**，用户需修复 |
| 3 | [#6643](https://github.com/agentscope-ai/QwenPaw/issues/6643) media 目录按任务分目录 | 6 | OPEN | 任务产出物管理混乱 |
| 4 | [#6667](https://github.com/agentscope-ai/QwenPaw/issues/6667) DeepSeek 多轮 reasoning_content 丢失 | 5 | OPEN | 国产模型深度思考能力在多轮中失效 |
| 5 | [#6642](https://github.com/agentscope-ai/QwenPaw/issues/6642) 拖入文件直接读路径而非上传 | 5 | CLOSED | 类桌面 Agent 工具的对齐期望 |

### 🔥 讨论焦点分析

- **#6649（13 评论）**：用户对 GPT-5.6 缓存参数落地诉求强烈，是高频追问的技术债；
- **#6655（12 评论）**：反映出 **Console 通道的安全审批 UX 缺陷** 已形成具体可复现的"agent 卡 300 秒静默超时"流程；
- **#6667**：与 [PR #6628](https://github.com/agentscope-ai/QwenPaw/pull/6628)（已关闭）相关联，DeepSeek 多轮思考链断裂问题已有同方向修复推进。

---

## 5. Bug 与稳定性

### 🔴 高严重度（建议优先处理）

| Issue | 描述 | 修复 PR |
|---|---|---|
| [#6697](https://github.com/agentscope-ai/QwenPaw/issues/6697) | v2.1.0b1 桌面端注入 `PYTHONHOME` 导致**所有 python 子进程崩溃**（encodings ModuleNotFoundError） | ❌ 待修复 |
| [#6698](https://github.com/agentscope-ai/QwenPaw/issues/6698) | v2.1.0b1 Browser SDK：`open()` 每次报 `WireProtocolError: Target crashed`（Playwright isolated session） | ❌ 待修复 |
| [#6700](https://github.com/agentscope-ai/QwenPaw/issues/6700) | 超大工具输出污染历史会话，**网页端重开会话卡死** | ❌ 待修复（建议输出截断+分页） |

### 🟡 中严重度

| Issue | 描述 | 修复 PR |
|---|---|---|
| [#6690](https://github.com/agentscope-ai/QwenPaw/issues/6690) | cron pause/resume 不持久化 enabled 状态，重启丢失 | ✅ [#6691](https://github.com/agentscope-ai/QwenPaw/pull/6691) 待合并 |
| [#6687](https://github.com/agentscope-ai/QwenPaw/issues/6687) | OpenRouter 多模态探测把已读取的能力覆写为 false | ❌ 待修复 |
| [#6696](https://github.com/agentscope-ai/QwenPaw/issues/6696) | WeChat iLink 一次性 `context_token` 被 typing indicator 消耗 | ❌ 待修复 |
| [#6667](https://github.com/agentscope-ai/QwenPaw/issues/6667) | DeepSeek 多轮 reasoning_content 缺失 | 🟡 部分缓解（[#6628](https://github.com/agentscope-ai/QwenPaw/pull/6628) 已合并相邻修复） |
| [#6683](https://github.com/agentscope-ai/QwenPaw/issues/6683) | App Center 安装 `qwenpaw-creator` 失败：插件顶层模块命名冲突 | ✅ [#6688](https://github.com/agentscope-ai/QwenPaw/pull/6688) 待合并 |

### 🟢 已关闭（确认修复）

[#6655](https://github.com/agentscope-ai/QwenPaw/issues/6655)、[#6642](https://github.com/agentscope-ai/QwenPaw/issues/6642)、[#5906](https://github.com/agentscope-ai/QwenPaw/issues/5906)（防重复误触发）、[#6301](https://github.com/agentscope-ai/QwenPaw/issues/6301)（时区）、[#6583](https://github.com/agentscope-ai/QwenPaw/issues/6583)（多文件名分行）、[#6695](https://github.com/agentscope-ai/QwenPaw/issues/6695)（WeChat 审批）、[#6673](https://github.com/agentscope-ai/QwenPaw/issues/6673)（前端显示）、[#6633](https://github.com/agentscope-ai/QwenPaw/issues/6633)（Skills 慢网络超时）、[#6374](https://github.com/agentscope-ai/QwenPaw/issues/6374)（token 写入重试）。

**稳定性评估**：⚠️ **v2.1.0-beta.1 桌面端存在两个高严重度阻塞性回归（#6697、#6698），不建议生产环境升级**。

---

## 6. 功能请求与路线图信号

| Issue | 需求 | 落地信号 |
|---|---|---|
| [#6699](https://github.com/agentscope-ai/QwenPaw/issues/6699) **按需加载技能** | 用户 27+ 技能时 8k-10k token 浪费（约 25-30% 系统提示词） | 🟢 **强信号**：明显是 token 经济性痛点，建议纳入下个版本 |
| [#6455](https://github.com/agentscope-ai/QwenPaw/issues/6455) **单 Agent 多模型并行** | "ds v4 pro / qwen 3.7 max / kimi k3 各跑一次汇总并集" | 🟡 大型架构变更，无对应 PR，需 PoC |
| [#6490](https://github.com/agentscope-ai/QwenPaw/issues/6490) **Volcengine Agent Plan + Xiaomi MiMo 内置 Provider** | 国内生态接入 | 🟢 已有明确 API 端点描述，实现成本低 |
| [#6684](https://github.com/agentscope-ai/QwenPaw/issues/6684) **频道重试机制** | Matrix 自建服务启动期连接失败需手动重连 | 🟢 已有 [PR #6689](https://github.com/agentscope-ai/QwenPaw/pull/6689) 实现通用重试契约 |
| [#6649](https://github.com/agentscope-ai/QwenPaw/issues/6649) **GPT-5.6 prompt caching** | 多轮对话前缀缓存 | 🟡 等待 OpenAI Responses API 适配 |
| [#6643](https://github.com/agentscope-ai/QwenPaw/issues/6643) **按任务分目录** | media 目录治理 | 🟡 与 [PR #6504](https://github.com/agentscope-ai/QwenPaw/pull/6504)（统一项目目录）方向一致 |
| [#6694](https://github.com/agentscope-ai/QwenPaw/issues/6694) **全局规则（.agent / .claude 风格）** | 置顶系统提示词 | 🟡 无对应 PR |

**路线图预判**：
- **近版本可纳入**：按需技能加载 (#6699)、Volcengine/MiMo Provider (#6490)、频道重试 (#6684)；
- **中版本规划**：项目目录统一 (#6504)、多模型并行 (#6455)；
- **远期规划**：全局规则 (#6694)、GPT-5.6 缓存 (#6649)。

---

## 7. 用户反馈摘要

### 用户痛点（提炼自 Issue 评论）

1. **Console 通道是"沉默的杀手"**（[#6655](https://github.com/agentscope-ai/QwenPaw/issues/6655)）：agent 在 console 通道执行 `rm`/`del` 时，审批请求**完全无终端可见提示**，导致用户无感知、agent 卡 300 秒后超时。**用户原话**："用户完全看不到有人在等他审批"。
2. **文件处理流程与主流桌面 Agent 不一致**（[#6642](https://github.com/agentscope-ai/QwenPaw/issues/6642)）：用户反映拖入文件先上传再读取"很奇怪"，并在 media 产生冗余文件。
3. **任务产物目录混乱**（[#6643](https

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/NousResearch/hermes-agent">NousResearch/hermes-agent</a></summary>

<think>The user wants me to generate a daily report for the Hermes Agent project based on the GitHub data provided. Let me analyze the data carefully and create a structured report.

Let me go through the data:

1. **Overview**: 50 issues updated (47 new/active, 3 closed), 50 PRs updated (46 pending, 4 merged/closed), no new releases

2. **Most active issues**:
   - #64182 - Plugin Interface Expansion tracking (21 comments)
   - #64231 - Plugin lifecycle-event catalog (17 comments)
   - #46199 - Windows portable deployment (7 comments)
   - #75791 - Windows 11 25H2 dashboard bug (5 comments)
   - #62254 - Custom provider api_key_env bug (3 comments)
   - #51684 - Feishu wildcard bug (3 comments)
   - #18594 - CLOSED - get_hermes_home() cross-profile data corruption (3 comments)
   - #75801 - OpenCode Luna streaming bug (3 comments)
   - #76457 - hermes config set stringification bug (3 comments)
   - #77047 - read_file UTF-8/CJK detection (3 comments)
   - #53328 - Desktop home directory scan (3 comments)
   - #78122 - Cron max_in_progress regression (3 comments)
   - #73599 - CLOSED - Dashboard stale session (2 comments)
   - #50747 - CLOSED - Feishu adapter container (2 comments)
   - #78932 - MEDIA delivery silent rejection (2 comments)
   - #78862 - Cron reasoning model timeout (2 comments)
   - #77950 - Security: brace-expansion override (2 comments)
   - #78514 - Feishu multiplex dedup (2 comments)
   - #79017 - prompt_cache_key session rotation (1 comment)
   - #79021 - npm vulnerabilities (1 comment)
   - #78980 - cron lifecycle guard false positive (1 comment)
   - #78406 - OpenAI RemoteProtocolError (1 comment)
   - #64615 - Disable auto project discovery (1 comment)
   - #78997 - Desktop token usage display (1 comment)
   - #79042 - RFC Distributed Orchestrator (0 comments)
   - #79039 - deepseek-v4-flash responses api (0 comments)
   - #79040 - hermes update hangs (0 comments)
   - #79034 - MEMORY_GUIDANCE conflict (0 comments)
   - #79035 - skills frontmatter convention (0 comments)
   - #79029 - Desktop session sidebar empty (0 comments)

3. **Important PRs**:
   - #78959 - prompt_cache_key scoping (P0, high impact)
   - #79043 - Don't resend rate-limited messages
   - #63671 - TUI foreground turn preservation
   - #45755 - Block sed/perl -i on yaml files (security)
   - #79041 - Cron lifecycle guard NUL byte
   - #79031 - DingTalk ping timeout
   - #79038 - Cron lifecycle guard NUL byte
   - #64364 - Memory drain on shutdown
   - #57470 - Windows PYTHONPATH leak
   - #79016 - Relay scope.pop metadata
   - #79037 - CJK tokenization BM25
   - #72570 - Tool search MCP bridge cache
   - #67823 - Desktop navigation profile scope
   - #79011 - Email platform env arming
   - #78356 - TencentDB memory v2
   - #79036 - Cache scope investigation
   - #78889 - Feishu multiplex dedup
   - #79007 - OAuth re-auth guidance
   - #76670 - Profile clone memory contract
   - #76650 - Tool search flattened args

Let me now organize this into a comprehensive Chinese daily report.

I need to make sure to:
- Be objective and professional
- Use data-driven insights
- Highlight project health
- Include GitHub links for each item
- Cover all 8 sections requested

Let me draft the report:

For section 4 (Community hot topics):
- #64182 has 21 comments - clearly the most discussed
- #64231 with 17 comments
- #46199 with 7 comments and 2 thumbs up

For section 5 (Bugs and stability):
- P0: #79017, #78959 (P0 PR), #79036
- P2: Most are P2
- P3: Some are P3

For section 8 (Pending backlog):
- #18594 was just closed (recent activity, but very old issue from May)
- #46199 from June 14 with 7 comments - Windows portable deployment - not yet addressed
- #73599 closed 
- #50747 closed - these are getting cleaned up

Let me write the report now.</think>

# Hermes Agent 项目日报
**日期：2026-08-05**

---

## 1. 今日速览

Hermes Agent 仓库保持高强度开发节奏，过去 24 小时共更新 50 条 Issues 和 50 条 PRs，整体活跃度处于高位。社区讨论高度集中在**插件接口扩展**（#64182、#64231）和 **OpenAI `prompt_cache_key` 跨会话共享**这一 P0 级缓存缺陷（#78959/#79017/#79036 联合修复链）上。3 个长期悬而未决的 P1/P2 Bug（#18594、#73599、#50747）正式关闭，积压问题正在被系统化清理，项目整体处于**功能扩展 + 稳定性修复并行的密集迭代期**。无新版本发布，最新稳定版仍为 v0.20.0（2026.8.3）。

---

## 2. 版本发布

**无新版本发布**。当前 main 分支正在累积大量待合并修复，建议关注 #78959（缓存作用域 P0 修复）合并后的下一个版本号（预计 v0.20.1 或 v0.21.0）。

---

## 3. 项目进展

今日**已关闭 3 个长期 Issues**，标志着项目在几个关键稳定性方向取得实质推进：

| Issue | 主题 | 创建日期 | 意义 |
|---|---|---|---|
| [#18594](https://github.com/NousResearch/hermes-agent/issues/18594) | `get_hermes_home()` 在 profile 模式下静默回退到 `~/.hermes` 导致跨 profile 数据损坏 (P1) | 2026-05-02 | 修复了多 profile 隔离的核心数据安全缺陷，避免用户配置/记忆被错误共享 |
| [#73599](https://github.com/NousResearch/hermes-agent/issues/73599) | Dashboard 标签页在 gateway 重启后因 session token 过期而失效 (P3) | 2026-07-28 | 修复了 Plugins 页 INSTALL 操作的"无任何反馈"静默失败 |
| [#50747](https://github.com/NousResearch/hermes-agent/issues/50747) | Feishu/Lark 适配器在容器重建后失败但 `docker restart` 可恢复 (P2) | 2026-06-22 | 改善了容器化部署的可恢复性 |

此外，PR 队列中已合并/关闭 4 个，重点是 #79043 等尚未合并的修复正在快速 PR 化。**项目当前在多 profile 数据隔离、Dashboard 状态同步、容器部署可靠性三条主线上同步推进。**

---

## 4. 社区热点

**讨论最热烈的三个议题（按评论数）：**

### 🔥 [#64182](https://github.com/NousResearch/hermes-agent/issues/64182) — 插件接口扩展追踪 Issue（21 条评论）
由 @teknium1 创建的元 Issue，汇总了来自 Discord 社区（#plugins-interface-ideas, 7 月 4 日）的插件扩展建议。核心诉求：为拥有长期排队 PR 的贡献者提供一个**稳定、公开的发布契约**，让 plugin 接口的演进有可遵循的规范。这是社区参与 Hermes 扩展生态的"指南针"。

### 🔥 [#64231](https://github.com/NousResearch/hermes-agent/issues/64231) — 插件生命周期事件目录与 hook 分类法（17 条评论）
针对积压的十多个零散 `VALID_HOOKS` PR，统一制定 **生命周期事件目录**和 **hook 验收标准**，然后一次性批处理这些 PR（合并 / 回收 / 拒绝）。这反映了一个治理诉求：**插件 hook 的添加需要一个清晰的架构性分类法**（taxonomy），而非 ad-hoc 追加。

### 👍 [#46199](https://github.com/NousResearch/hermes-agent/issues/46199) — Windows Desktop 受支持的便携/隔离部署指南（7 条评论，2 👍）
Windows 11 安全敏感用户希望 Hermes Desktop 提供**官方便携/隔离部署模式**，避免写入全局 PATH 和持久系统目录。该 Issue 已被自动标记为 `needs-decision`，但 50+ 天无实质性回应，是今日社区"高赞同/低进展"的代表。

**背后诉求分析**：社区当前最关注的两类问题——(1) **架构治理**（插件接口标准化）和 (2) **企业/高安全用户场景**（Windows 隔离部署）。前者由核心维护者主导，后者尚未得到回应。

---

## 5. Bug 与稳定性

按严重程度排列今日报告及相关的 Bug：

### 🔴 P0 — 关键功能失效
| Issue/PR | 描述 | 是否有修复 PR |
|---|---|---|
| [#79017](https://github.com/NousResearch/hermes-agent/issues/79017) | `prompt_cache_key` 在 context-compression 会话轮换后失去连续性，OpenAI 缓存命中率归零 | ✅ [#78959](https://github.com/NousResearch/hermes-agent/pull/78959)（核心修复，待合并） |
| [#79036](https://github.com/NousResearch/hermes-agent/pull/79036) | 上述问题的独立复现/设计评审 PR（P0, needs-decision） | — 配套 #78959 |

### 🟠 P1 — 安全/数据完整性
| Issue | 描述 |
|---|---|
| [#18594](https://github.com/NousResearch/hermes-agent/issues/18594) | `get_hermes_home()` 跨 profile 数据损坏（**今日已关闭**） |

### 🟡 P2 — 主要功能缺陷
| Issue | 描述 | 是否有修复 PR |
|---|---|---|
| [#75791](https://github.com/NousResearch/hermes-agent/issues/75791) | Windows 11 25H2 `hermes dashboard --status` 错误报告无 dashboard | ❌ 待认领 |
| [#62254](https://github.com/NousResearch/hermes-agent/issues/62254) | `_get_named_custom_provider` 静默忽略 `api_key_env`，仅读取 `key_env` | ❌ 待认领 |
| [#75801](https://github.com/NousResearch/hermes-agent/issues/75801) | OpenCode Go `gpt-5.6-luna` 缺 `finish_reason` → TUI 误判 mid-stream drop，Desktop 丢弃流式回复 | ❌ 待认领 |
| [#76457](https://github.com/NousResearch/hermes-agent/issues/76457) | `hermes config set` 将列表值序列化为字符串字面量而非 YAML 列表 | ❌ 待认领 |
| [#77047](https://github.com/NousResearch/hermes-agent/issues/77047) | `read_file` 在 1000 字节采样落在多字节字符中间时将 CJK UTF-8 文件误判为二进制 | ❌ 待认领 |
| [#53328](https://github.com/NousResearch/hermes-agent/issues/53328) | Desktop 在每次启动时扫描整个 home 目录寻找 git repos，无法关闭 | ✅ [#64615](https://github.com/NousResearch/hermes-agent/issues/64615)（功能请求关联） |
| [#78122](https://github.com/NousResearch/hermes-agent/issues/78122) | `max_in_progress` 回归：按 board 而非 gateway-wide 强制 | ❌ 待认领 |
| [#78862](https://github.com/NousResearch/hermes-agent/issues/78862) | Cron 作业在推理模型非流式超时下死亡，回退永不触发 | ❌ 待认领 |
| [#78406](https://github.com/NousResearch/hermes-agent/issues/78406) | OpenAI 兼容网关出现 `RemoteProtocolError: incomplete chunked read`（生产环境 161 次/天） | ❌ 待认领 |
| [#78932](https://github.com/NousResearch/hermes-agent/issues/78932) | 被拒绝的 MEDIA 投递路径对模型静默——模型认为投递成功 | ❌ 待认领 |
| [#78514](https://github.com/NousResearch/hermes-agent/issues/78514) | Feishu 多路复用模式下消息去重按 profile 而非共享 → 重放事件被处理两次 | ✅ [#78889](https://github.com/NousResearch/hermes-agent/pull/78889) |

### ⚪ P3 — 次要/边缘场景
| Issue | 描述 | 是否有修复 PR |
|---|---|---|
| [#51684](https://github.com/NousResearch/hermes-agent/issues/51684) | Feishu `FEISHU_ALLOWED_USERS=*` 通配符不适用于审批卡片点击 | ❌ |
| [#78980](https://github.com/NousResearch/hermes-agent/issues/78980) | cron lifecycle guard 对含 `~/...` 路径字面量的 Python 脚本误报 | ❌ |
| [#77950](https://github.com/NousResearch/hermes-agent/issues/77950) | `brace-expansion` 5.0.8 通过根 `overrides` 锁定（GHSA-rgw5-rvv9-x895 高危） | ❌ |
| [#79021](https://github.com/NousResearch/hermes-agent/issues/79021) | `hermes doctor` 报告 3 个高危 npm 漏洞，自动修复失败 | ❌ |
| [#79040](https://github.com/NousResearch/hermes-agent/issues/79040) | `hermes update` 完成后永不退出，破坏 cron 自动更新 | ❌ |
| [#79029](https://github.com/NousResearch/hermes-agent/issues/79029) | Desktop session sidebar 在 `hermes update` 后显示为空 | ❌ |

**今日亮点修复（合并/关闭的 PR）**：[#79043](https://github.com/NousResearch/hermes-agent/pull/79043) 修复了 Telegram 在收到 429+`retry_after` 后被错误重发整条消息导致重复投递的问题；[#57470](https://github.com/NousResearch/hermes-agent/pull/57470) 修复了 Windows gateway venv 导入泄漏 `PYTHONPATH` 到全局环境的 P2 隐患。

---

## 6. 功能请求与路线图信号

| Issue | 描述 | 关联/可能进展 |
|---|---|---|
| [#79042](https://github.com/NousResearch/hermes-agent/issues/79042) | **RFC: Hermes 分布式编排器**（Remote Brain ↔ Local Nodes） | 🆕 架构级提案，将认知层（Brain）与执行层（Local Nodes）解耦。这是一份"重量级" RFC，可能影响未来主要版本架构 |
| [#79039](https://github.com/NousResearch/hermes-agent/issues/79039) | DeepSeek v4-flash responses API 支持 | 已有 DeepSeek v4-flash 在 [#78862](https://github.com/NousResearch/hermes-agent/issues/78862) 的 cron 场景中被引用，新增 responses API 是合理跟进 |
| [#79035](https://github.com/NousResearch/hermes-agent/issues/79035) | 引入 `related_skills` frontmatter 约定，建立 skill 依赖图谱 | 🆕 提供结构化声明 skill 依赖的机制，避免对正文 prose 全文扫描 |
| [#79034](https://github.com/NousResearch/hermes-agent/issues/79034) | `MEMORY_GUIDANCE` 与基于 skill 的内存 doctrine 冲突 | 🆕 需要决策（needs-decision） |
| [#79021](https://github.com/NousResearch/hermes-agent/issues/79021) | `hermes doctor` 修复 npm 漏洞 | 与 [#77950](https://github.com/NousResearch/hermes-agent/issues/77950) 共同指向依赖安全方向 |
| [#78997](https://github.com/NousResearch/hermes-agent/issues/78997) | Desktop 底部状态栏显示订阅/token 用量 | 中度使用场景，关注 quota 的用户诉求明确 |
| [#64615](https://github.com/NousResearch/hermes-agent/issues/64615) | 禁用自动项目/仓库发现 | 与 [#53328](https://github.com/NousResearch/hermes-agent/issues/53328) Bug 直接挂钩，下版本大概率一起修复 |
| [#46199](https://github.com/NousResearch/hermes-agent/issues/46199) | Windows Desktop 便携/隔离部署 | 高 👍（2），但 50+ 天无实质响应 ⚠️ |

**路线图信号**：从 #79042 RFC 和 #79035/#79034 的设计讨论来看，下一个主版本可能聚焦于**分布式架构 + 技能/内存规范化**。短期补丁版本（v0.20.1）几乎可以确定包含 #78959 的 P0 缓存修复 + #57470 的 Windows PYTHONPATH 修复 + #53328/#64615 的 Desktop 项目扫描关闭开关。

---

## 7. 用户反馈摘要

从 Issue 文本和评论中提炼的真实用户痛点：

- 🔥 **"安全/隔离部署"是反复出现的诉求**：[#46199](https://github.com/NousResearch/hermes-agent/issues/46199) 的用户在 Windows 11 上希望最小化对全局系统的写入（尤其是 PATH 和持久化注册表项），反映企业/隐私敏感用户的核心担忧。

- 😤 **"静默失败"是用户最大的挫败感来源**：多个 P2 Bug（[#62254](https://github.com/NousResearch/hermes-agent/issues/62254) api_key_env、[#78932](https://github.com/NousResearch/hermes-agent/issues/78932) MEDIA 投递、[#75801](https://github.com/NousResearch/hermes-agent/issues/75801) Luna streaming、#73599 Dashboard INSTALL）都表现为**没有任何错误提示、警告或日志**，导致用户不知道发生了什么。

- 🐛 **生产环境稳定性痛点**：[#78406](https://github.com/NousResearch/hermes-agent/issues/78406) 报道多租户 Feishu gateway 中 OpenAI 兼容网关**每天 161 次**的 `RemoteProtocolError`；[#78862](https://github.com/NousResearch/hermes-agent/issues/78862) 报道推理模型 cron 作业死亡无回退。这些都是高频生产事故，需要优先关注。

- 🌏 **国际化（CJK）支持缺失是结构性短板**：[#77047](https://github

</details>

<details>
<summary><strong>OpenHuman</strong> — <a href="https://github.com/tinyhumansai/openhuman">tinyhumansai/openhuman</a></summary>

<think>The user wants me to generate a daily report for the OpenHuman project based on GitHub data. Let me analyze the data carefully and produce a structured report in Chinese.

Let me organize the information:

**Data Overview:**
- Past 24h Issues: 45 (41 new/active, 4 closed)
- Past 24h PRs: 33 (23 pending, 10 merged/closed)
- New releases: 0

**Key Themes I can identify:**

1. **Memory subsystem refactor (huge initiative)**: Issue #5372 is a parent issue for a massive memory backend refactoring project. There are 19+ child issues (#5374-#5395) all about moving memory engines into TinyCortex and adding adapters for external memory backends (supermemory, mem0, agentmemory, cognee). This is the dominant theme.

2. **Voice chat issues**: Multiple voice-related issues (#5197 native text-input deps, #5399 ElevenLabs replacement, #5357 tab switching bug)

3. **Discord issues**: #5350 restart loop on Linux

4. **Bug fixes being merged**: PR #5369 (lipsync tab lock - CLOSED) and PR #5366 (tinyflows - CLOSED) were closed

5. **PRs opened today (2026-08-05)**:
- #5400 - retry domain subscriber registration
- Various existing PRs updated

6. **API key issue**: #5349 DeepSeek API key saved but dialog says not saved

7. **Memory bugs**: #5324 - managed embedding budget exhausted silently

8. **Discord bot expansion**: #5072 - TinyHumans Discord bot expansion

Let me structure the report now. The date is 2026-08-05.

Active issues to highlight (most comments):
- #5197 (2 comments) - Voice deps gating
- #5269 (1 comment) - DomainGroup subscriber retry
- #5349 (1 comment) - DeepSeek API key
- #5072 (1 comment) - Discord bot expansion
- #5357 (CLOSED) - tab switching bug
- #5399 - ElevenLabs replacement

Most issues have 0 comments actually. The #5197 has 2 comments.

Key closed issues:
- #5357 - Cannot switch tabs (fixed by PR #5369)

Key closed PRs:
- #5369 - fix(human): lipsync re-renders locking tab navigation
- #5366 - feat(flows): surface bounded loops from tinyflows

Let me look at what's important for the "今天合并/关闭的PR" section:
- PR #5369 closed - fixes tab navigation
- PR #5366 closed - tinyflows bounded loops

PR #5398 has the Ollama embed fix (interesting but still open)

For "待处理积压" - look at older issues that are still open:
- #5072 (created 2026-07-20) - Discord bot expansion - still open after 15 days
- #4861 (PR) - created 2026-07-14 - Contract gate extension, still open

Let me now write the report in Chinese with the appropriate structure.

I should be objective, data-driven, professional. Include links. Highlight project health.

Let me think about the project's overall health:
- Very high activity: 45 issues, 33 PRs in 24 hours
- Mix of bug fixes and major refactoring
- The #5372 memory backend refactoring is a major initiative
- Some bugs being fixed (#5357 closed via #5369)
- New features planned (Discord bot expansion, ElevenLabs voice)
- 0 releases - typical for active development

Let me draft this report now.</think>

# OpenHuman 项目日报
**日期：2026-08-05**
**仓库：github.com/tinyhumansai/openhuman**

---

## 1. 今日速览

OpenHuman 今日保持高强度开发节奏，**24 小时内共有 45 条 Issue 与 33 条 PR 更新**，整体活跃度处于项目高位。Issue 端以新增/活跃为主（41 条新开或活跃，仅 4 条关闭），PR 端则有 10 条被合并/关闭。讨论重心集中在两大方向：**Rust 核心的内存（Memory）后端重构**（围绕 #5372 拆解出的 18+ 子任务）以及 **agent/composio/mcp 的稳定性修复**。当前没有新的 Release 发布，说明项目仍处于密集重构期，尚未达到可发版的状态。

---

## 2. 版本发布

**无新版本发布。** 鉴于 #5372「Pluggable memory backends」大重构仍在拆分子任务阶段（参见 #5376–#5395），短期内预计不会出现稳定版本标签；建议关注 `vendor/tinycortex` 子模块的升级与 #5396/#5397 的合并窗口。

---

## 3. 项目进展

今日有 **10 条 PR 合并/关闭**，以下为对项目方向影响较大的几条：

| PR | 标题 | 意义 |
|---|---|---|
| [#5369](https://github.com/tinyhumansai/openhuman/pull/5369) | fix(human): stop mascot lipsync re-renders from locking tab navigation | 修复了 TTS 播放期间 Human tab 无法切换的 UX 阻塞问题，对应 Issue #5357 直接闭环 |
| [#5366](https://github.com/tinyhumansai/openhuman/pull/5366) | feat(flows): surface bounded loops from the tinyflows engine | Tinyflows 工作流引擎支持有界循环，是 Layer 2/3 的拼图，依赖于上游 tinyhumansai/tinyflows#29 |

其余已关闭的 PR 多为微调或栈式依赖清理。整体而言，今日**确实推进了「Voice/UI 卡顿闭环」与「工作流可循环」两条线**，但更大型的内存重构仍在子任务拆解阶段。

---

## 4. 社区热点

按评论数与关注度排序：

- **[#5197](https://github.com/tinyhumansai/openhuman/issues/5197)** — Gate native text-input dependencies behind the voice feature（2 条评论）  
  呼吁把 `arboard`/`enigo`/`rdev` 这三个原生依赖收回 `voice` feature 后面，缩小默认构建 footprint，是仓库里最被讨论的清洁度话题。

- **[#5269](https://github.com/tinyhumansai/openhuman/issues/5269)** — core/jsonrpc: make DomainGroup subscriber registration retryable（1 条评论）  
  来自 CodeRabbit 评审 #5265 时挑出的主问题：临时性总线失败会把整个 DomainGroup 错误地标记为已完成。PR [#5400](https://github.com/tinyhumansai/openhuman/pull/5400) 已于今日提交，是该议题的真正修复。

- **[#5349](https://github.com/tinyhumansai/openhuman/issues/5349)** — DeepSeek API key saved but dialog says not saved（1 条评论）  
  设置 UI 与配置持久化之间的不一致，会让用户误以为配置丢失，反映出 settings ↔ provider 同步链路的脆弱。

- **[#5072](https://github.com/tinyhumansai/openhuman/issues/5072)** — Expand TinyHumans Discord bot: ticket support (RAG), meme engagement, daily AI digest relay（1 条评论）  
  描述非常完整：在现有 Discord bot 上叠加 ticket RAG、表情包互动与每日 AI 摘要转发，是用户社区侧的明确需求。

- **[#5399](https://github.com/tinyhumansai/openhuman/issues/5399)** — Replace current voice chat with ElevenLabs Voice Agents  
  提议直接用 ElevenLabs Voice Agents 替换当前 voice chat，并列出 TTS 400 等已知缺陷，属于战略性方向议题。

**诉求解读**：社区关注点明显分为两派——一类关心**默认构建体积与依赖卫生**（#5197、#5269），一类关心**实际使用体验的痛点**（#5349、#5072、#5399）。前者更偏工程，后者偏产品。

---

## 5. Bug 与稳定性

按严重程度排列：

| 严重度 | Issue | 描述 | 是否已有 Fix PR |
|---|---|---|---|
| 🔴 高 | [#5349](https://github.com/tinyhumansai/openhuman/issues/5349) | DeepSeek API key 保存提示与实际状态不一致，跨重启仍存在 | ❌ 暂未关联 |
| 🔴 高 | [#5350](https://github.com/tinyhumansai/openhuman/issues/5350) | Linux (EndeavourOS/Hyprland) 上 Discord 通道进入重启死循环并占满 CPU | ❌ 暂未关联 |
| 🟠 中 | [#5324](https://github.com/tinyhumansai/openhuman/issues/5324) | Managed embedding budget 用尽后 Memory Tree 静默停止写入（936 起不可恢复失败），重度用户最先受影响 | ❌ 暂未关联 |
| 🟠 中 | [#5269](https://github.com/tinyhumansai/openhuman/issues/5269) | DomainGroup 注册一次性失败即被标记完成 | ✅ [#5400](https://github.com/tinyhumansai/openhuman/pull/5400) |
| 🟡 低 | [#5357](https://github.com/tinyhumansai/openhuman/issues/5357) *(已关闭)* | TTS 播放时无法切换 tab | ✅ [#5369](https://github.com/tinyhumansai/openhuman/pull/5369) |
| 🟡 低 | [#5370](https://github.com/tinyhumansai/openhuman/pull/5370) 关联的 [#5359] | 用户图像附件被以文本形式发送，PNG 完全失败、JPEG 描述失真 | ✅ [#5370](https://github.com/tinyhumansai/openhuman/pull/5370) |

> 额外提一条**潜在稳定性提升**：PR [#5398](https://github.com/tinyhumansai/openhuman/pull/5398) 把 Ollama 不可用（daemon 未监听 / 模型未拉取）的失败归类为 `local_model_unavailable`，让内存状态面板能给出可执行的修复建议，避免用户面对通用 transient 错误一头雾水。

---

## 6. 功能请求与路线图信号

1. **外部内存后端适配器矩阵（明确路线图）**  
   Issue [#5372](https://github.com/tinyhumansai/openhuman/issues/5372) 是「Pluggable memory backends behind one driver contract」的父任务，下挂子任务覆盖了完整路径：
   - 适配器层：[#5390](https://github.com/tinyhumansai/openhuman/issues/5390) 建仓 → [#5391](https://github.com/tinyhumansai/openhuman/issues/5391) supermemory → [#5393](https://github.com/tinyhumansai/openhuman/issues/5393) mem0 → [#5394](https://github.com/tinyhumansai/openhuman/issues/5394) agentmemory → [#5395](https://github.com/tinyhumansai/openhuman/issues/5395) cognee
   - 兼容性：[#5389](https://github.com/tinyhumansai/openhuman/issues/5389) `memory-spec` HTTP 契约 + 一致性套件，让第三方可以零 Rust 接入
   - 内核改造：[#5387](https://github.com/tinyhumansai/openhuman/issues/5387) auto-recall/auto-capture 转为内核钩子 + [#5386](https://github.com/tinyhumansai/openhuman/issues/5386) 按能力过滤 RPC/工具
   - 安全：[#5376](https://github.com/tinyhumansai/openhuman/issues/5376) MemoryGuard 装饰器 + [#5374](https://github.com/tinyhumansai/openhuman/issues/5374) source scope 显式传参  
   配合 PR [#5396](https://github.com/tinyhumansai/openhuman/pull/5396)（Phase 2 transcript soak）与 [#5397](https://github.com/tinyhumansai/openhuman/pull/5397)（managed Node.js runtime 门控），**Memory 正在从「嵌入主机」走向「绑定子系统」**，下一版本大概率会包含 supermemory / mem0 之一作为首个外部后端。

2. **ElevenLabs Voice Agents 替换**  
   [#5399](https://github.com/tinyhumansai/openhuman/issues/5399) 提出现有 voice chat 的替代方案，但尚未形成 PR，**纳入下一版本的概率中等偏低**——更可能先观察 ElevenLabs 商业条款稳定性。

3. **Discord bot 扩展（用户驱动）**  
   [#5072](https://github.com/tinyhumansai/openhuman/issues/5072) 提议扩展社区 Discord bot 能力，定位清晰、文档完整，**容易被纳入下一迭代**。

---

## 7. 用户反馈摘要

从近 24 小时的活跃评论里可以提炼出几条**真实用户痛点**：

- **「保存了但显示没保存」的信任危机**：#5349 反映出用户对 settings UI 的可靠性产生了怀疑，重启后仍复现意味着数据落地链路有问题，会直接动摇付费/订阅功能的可信度。
- **Linux 桌面端的边缘体验**：#5350 描述了在 Hyprland 上 Discord 通道占满 CPU 的情形，说明 Linux 仍不是一等公民发布目标；与此呼应，#5369 的修复仅针对 mascot 重渲染。
- **重度用户的预算静默耗尽**：#5324 中「936 起不可恢复失败」说明 embedding budget 用尽没有任何预警，**重度用户——恰好是项目最有粘性的群体——被静默甩下**，是一个清晰的留存风险信号。
- **依赖卫生担忧**：#5197 的 2 条评论说明仓库的原生依赖膨胀已经被工程侧注意到，社区对「非必要 feature 默认关闭」有共识。
- **正面信号**：#5072 的 Discord bot 提案展示出活跃用户在主动围绕 OpenHuman 构建社区工具，反映生态自发的扩张意愿。

---

## 8. 待处理积压

以下条目**已超过 10 天未关闭**，建议维护者关注：

| 类型 | 编号 | 创建日 | 已等待 | 备注 |
|---|---|---|---|---|
| Issue | [#5072](https://github.com/tinyhumansai/openhuman/issues/5072) | 2026-07-20 | ~16 天 | 社区 Discord bot 扩展，方案成熟但未获回应 |
| PR | [#4861](https://github.com/tinyhumansai/openhuman/pull/4861) | 2026-07-14 | ~22 天 | 把 contract gate 扩展到 composio_execute / MCP registry / workflows，体积较大，需要评审分解 |
| PR | [#5033](https://github.com/tinyhumansai/openhuman/pull/5033) | 2026-07-18 | ~18 天 | 手填（custom）MCP servers，涉及 RPC 新增与 UI 改动 |
| PR | [#5257](https://github.com/tinyhumansai/openhuman/pull/5257) | 2026-07-29 | ~7 天 | 修复 compact→retrieve→re-run 死循环 |
| PR | [#5258](https://github.com/tinyhumansai/openhuman/pull/5258) | 2026-07-29 | ~7 天 | connector-aware recall，**依赖尚未合并的 tinycortex PR** |
| PR | [#5259](https://github.com/tinyhumansai/openhuman/pull/5259) | 2026-07-29 | ~7 天 | composio 写入动作审批门 |
| PR | [#5261](https://github.com/tinyhumansai/openhuman/pull/5261) | 2026-07-29 | ~7 天 | 启动时清理孤儿 agent run |

> **健康度总评**：项目处于**高活跃、高重构**阶段——内存后端抽象、Voice 体验、agent 工具稳定性三条主线都在并行推进，但**发版信号尚未出现**，#5372 这类大重构的合并窗口一旦打开，会显著推动项目从「功能堆叠」走向「架构稳定」阶段。建议社区 PR 评审优先关注**阻塞链路**：tinycortex 上游 → #5258 → #5372 子任务链。

</details>

---
*本日报由 [Big Model Radar](https://github.com/96loveslife/big_model_radar) 自动生成。*
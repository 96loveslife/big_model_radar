# OpenClaw 生态日报 2026-08-31

> Issues: 500 | PRs: 500 | 覆盖项目: 8 个 | 生成时间: 2026-08-31 04:51 UTC

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

<think>The user wants me to generate a daily project report for OpenClaw based on GitHub data. Let me analyze the data carefully and produce a structured report.

Let me organize the information:

**Overall Stats:**
- 500 Issues updated (267 new/active, 233 closed)
- 500 PRs updated (304 pending, 196 merged/closed)
- 1 new release: v2026.8.1

**Release v2026.8.1 highlights:**
- Find past conversations feature (#105057, #105635, #105585)
- Sessions beyond Gateway

**Top Issues by comments:**
1. #125626 - 2026.8.1 beta feedback (24 comments)
2. #91588 - Gateway Memory Leak (23 comments, P1)
3. #42475 - Per-agent cost budget (22 comments, P2)
4. #102175 - embedded prompt cache breaks (18 comments, P1)
5. #22676 - Signal daemon race condition (17 comments, P1, CLOSED)
6. #87744 - Codex-backed Telegram timeout (17 comments, P1)
7. #96834 - WhatsApp 1:1 image wedge (14 comments, P1)
8. #79077 - Telegram bot-to-bot (13 comments, P2)
9. #98435 - MCP loopback transport (11 comments, P2)
10. #90916 - Topic-session families (10 comments, P2, CLOSED)

**Important closed issues:**
- #22676 - Signal daemon stop() race condition
- #90916 - Topic-session families (stale)
- #107555 - QQ Bot approval bug (stale)
- #52826 - structured process events (stale)
- #80219 - Plugin SDK consolidation (stale)
- #105708 - 400 JSON schema (regression)
- #77355 - Group chats attribution (follow-up)
- #130197 - Storage redaction reaches tool executor
- #83560 - configure hangs

**Top PRs:**
1. #132477 - fix(setup): keep verification detached (XL, P1)
2. #109249 - global pairing reply templates (M, P2)
3. #133800 - generate provider scaffolds (S, P2)
4. #118282 - import historical exec approval metadata (M, P1)
5. #133773 - allow legacy exec approvals migration (M, P1)
6. #133795 - repair 2026.7.33 validation failures (XL)
7. #123356 - add explicit command activation plans (XL, P1)
8. #133715 - preserve agent ownership (XL, P2)
9. #106902 - explain ClawHub (XS, P3)
10. #133792 - Slack parent-only ack reactions (M, P3)

**Closed/Merged PRs:**
- #120900 - feat(ui): review install policy warnings
- #128223 - fix(cli): resolve alias targets
- #126424 - fix(gateway): keep conversation delivery within agent bindings
- #133499 - fix(imessage): keep replies in current conversation
- #123535 - fix(ui): avoid session catalog refresh storms
- #123975 - fix(scripts): clean up tsgo process trees
- #122184 - feat: model-only plugin subagent runs
- #126237 - fix: Error identity against __proto__ payloads
- #133787 - fix(ci): deduplicate Control UI skeleton styles
- #128995 - feat: make full session actions from chat header
- #128371 - fix(release): authorize focused beta evidence

**Critical Bug Issues (P1, P0):**
- #91588 - Gateway Memory Leak (OOM)
- #102175 - embedded prompt cache breaks (P1)
- #87744 - Codex-backed Telegram timeout (P1)
- #96834 - WhatsApp 1:1 image wedge (P1)
- #97616 - leaked hook/tool child processes (P1)
- #97680 - Beta-tagged update leaves plugins on latest (P1)
- #107555 - QQ Bot approval button (P1, CLOSED)
- #65374 - dreaming system contaminates agent identity (P1)
- #114020 - Feishu/Telegram channel dispatch fails (P1)
- #110346 - message send media allowlist (P1)
- #96692 - Slack thread replies (P1)
- #91144 - Windows CLI gateway Scheduled Task (P1)
- #53540 - Embedded runner "Network connection lost" (P1)
- #51245 - Telegram slash sessions (P1)
- #78493 - sudo openclaw update mixed ownership (P1)
- #22676 - Signal daemon race (P1, CLOSED)
- #130197 - Storage redaction reaches tool executor (P1, CLOSED)
- #127229 - telegram: watchdog-released durable update (P1)
- #118185 - One turn written twice (P1)
- #106786 - gpt-5.6 silent fallback (P1)
- #100941 - WebSocket drops under parallel fan-out (P1)
- #55792 - Catch up on missed inbound messages (P1)
- #131340 - Code Mode mutation recovery (P2)
- #112668 - sessions_yield abort-settle (P1, CLOSED)
- #108395 - Fake "Human:" self-authorization (P0)

**New Bug Issues for 2026.8.1:**
- #133347 - 2026.8.1 migration quarantines valid cron jobs
- #133786 - Slack parent-only ack reactions
- #131340 - Code Mode mutation recovery
- #127229 - Telegram watchdog tombstone bug
- #133785 (related to #133789)

**Migration concerns for 2026.8.1:**
- Cron migration quarantines valid jobs (#133347)
- Legacy exec approvals migration issues (#133773, #118282)

**Maintainer concerns:**
- Lots of "needs-maintainer-review" tagged issues
- Backlog of P1 bugs

**Backlog/Stale:**
- #90916 - Topic-session families (closed stale)
- #107555 - QQ Bot approval (closed stale)
- #52826 - structured process events (closed stale)
- #80219 - Plugin SDK consolidation (closed stale)
- #79077 - Telegram bot-to-bot (open stale)
- #78963 - WhatsApp listen-only mode (open stale)
- #114414 - Dated TODO sweep

Now let me structure the report in Chinese as requested. I should keep it objective, data-driven, and focused on project health.

Let me write this in a professional, analytical tone.</think>

# OpenClaw 项目日报 · 2026-08-31

## 1. 今日速览

OpenClaw 今日处于**高频发布与密集修复并行**的状态：单日 Issues 更新 500 条（新开/活跃 267、关闭 233）、PR 更新 500 条（待合并 304、合并/关闭 196），并伴随一个正式版本 **v2026.8.1** 发布。社区讨论度集中在 Gateway 内存泄漏、嵌入式 prompt cache 跨边界丢失、Channel 投递路径（WhatsApp/Telegram/Feishu/Slack）以及 2026.8.1 的迁移回退问题。整体而言，项目活跃度极高，但 **P1/P0 级别 Bug 积压明显加重**，且多个新版本相关 issue 显示 2026.8.1 升级路径尚需打磨。健康度评估：**活跃但承压**。

---

## 2. 版本发布

### v2026.8.1 — OpenClaw 2026.8.1（已发布）

**Highlights：**
- **查找历史会话（Find past conversations）**：按精确词/短语搜索可见会话文本，并从匹配结果重新打开上下文消息。（[#105057](https://github.com/openclaw/openclaw/issues/105057)、[#105635](https://github.com/openclaw/openclaw/issues/105635)、[#105585](https://github.com/openclaw/openclaw/issues/105585)，致谢 @hercial61）
- **跨 Gateway 边界运行会话（Sessions beyond your Gateway）**：可在配对设备或云端 worker 上调度工作（release notes 截断）。

**已知升级风险（来自当日新开/活跃 issue）：**
- **Cron 调度迁移回退**：[#133347](https://github.com/openclaw/openclaw/issues/133347)（P1，6 评论）——升级到 2026.8.1 后，调度器迁移把合法 legacy 计划任务全部隔离为 `invalid-schedule`，活跃任务静默丢失，gateway 与 scheduler 仍健康。`source-repro` 已确认。
- **legacy exec-approvals 迁移阻塞 doctor**：[#118282](https://github.com/openclaw/openclaw/pull/118282)、[#133773](https://github.com/openclaw/openclaw/pull/133773)——老 `exec-approvals.json` 含 `null` usage 元数据时，doctor 拒绝历史文件 → 自身迁移闸门中止 → 可能让 gateway 不可用。
- **beta tag 升级使官方 npm 插件滞留 latest**：[#97680](https://github.com/openclaw/openclaw/issues/97680)（P1，9 评论，`linked-pr-open`）。

**迁移建议：** 升级前对 `~/.openclaw`、`crontab` / scheduler 配置、`exec-approvals.json`、外部 npm 官方插件锁定文件做快照；并跟踪 [#125626](https://github.com/openclaw/openclaw/issues/125626)（2026.8.1 beta 反馈集中帖）作为实时 triage 入口。

---

## 3. 项目进展

今日合并/关闭的关键 PR 主要集中在**多 agent 路由边界、Control UI 性能、安装/升级路径健壮性、SDK 一致性**四条主线。

### 已合并/关闭的重要 PR

| PR | 主题 | 关键影响 |
|---|---|---|
| [#126424](https://github.com/openclaw/openclaw/pull/126424) | keep conversation delivery within agent bindings | 多 agent 场景下，跨 agent 会话工具会"穿越"绑定的关键修复（多渠道 XL 改动，message-delivery / security-boundary 风险） |
| [#133499](https://github.com/openclaw/openclaw/pull/133499) | fix(imessage): keep replies in current conversation | 修复 `channels.imessage.service` 未设置时，自动 final 与 delegated-reply 鉴权歧义导致 iMessage 线程回复丢失 |
| [#123535](https://github.com/openclaw/openclaw/pull/123535) | fix(ui): avoid session catalog refresh storms | 减少 Control UI sidebar 因 focus/presence/startup 事件触发的冗余全量刷新 |
| [#123975](https://github.com/openclaw/openclaw/pull/123975) | fix(scripts): clean up tsgo process trees on timeout or signal | `tsgo` 包装器接入托管进程，新增可选 watchdog（`OPENCLAW_TSGO_TIMEOUT_MS`） |
| [#128223](https://github.com/openclaw/openclaw/pull/128223) | fix(cli): resolve alias targets from the write snapshot | 修复 `openclaw models aliases add` 解析别名目标不一致（[#127618](https://github.com/openclaw/openclaw/issues/127618)） |
| [#122184](https://github.com/openclaw/openclaw/pull/122184) | feat: model-only plugin subagent runs | 插件可发起"仅模型"持久子代理；绕过 explicit-allowlist 预检问题 |
| [#120900](https://github.com/openclaw/openclaw/pull/120900) | feat(ui): review install policy warnings | 管理员可在 Control UI 审阅 install policy 警告并显式继续，新增 `acknowledgeInstallPolicyWarning` |
| [#128995](https://github.com/openclaw/openclaw/pull/128995) | feat: make full session actions from chat header | 顶栏 chat header 暴露 pin / unread / icon / 复制 session id / 移组等动作 |
| [#128371](https://github.com/openclaw/openclaw/pull/128371) | fix(release): authorize focused beta evidence | 解锁 beta.3 发布阻塞：允许基于"已审查 Slack 测试 + 历史 leaf 重跑"出具 manifest |
| [#126237](https://github.com/openclaw/openclaw/pull/126237) | fix(retry,normalization-core): keep Error identity vs `__proto__` payload | 防止 `toRetryError` 因 `Object.assign` 触发 prototype 污染 |
| [#133787](https://github.com/openclaw/openclaw/pull/133787) | fix(ci): deduplicate Control UI skeleton styles | 恢复 Control UI CSS 性能闸门且不抬高预算 |

**项目整体推进判断：** 控制面（UI/CLI/release 工具链）有明显进展；多 agent 路由边界（[#126424](https://github.com/openclaw/openclaw/pull/126424)、[#133715](https://github.com/openclaw/openclaw/pull/133715)、[#123356](https://github.com/openclaw/openclaw/pull/123356)）是当前最大的架构性推进方向。运行时稳定性（gateway/channel）侧的 PR 数明显少于 control plane，问题累积风险大。

---

## 4. 社区热点

按评论数排序的当日最热议题（Issues 与 PRs 各列前若干）：

### 热点 Issues

1. **[#125626](https://github.com/openclaw/openclaw/issues/125626) — 2026.8.1 beta 反馈集中帖（24 评论）**  
   官方 release-validation tracker。社区当前围绕 cron 迁移、exec-approvals 迁移、plugin 升级路径三条主线反馈。建议持续关注。

2. **[#91588](https://github.com/openclaw/openclaw/issues/91588) — Gateway 内存泄漏：RSS 350MB→15.5GB 后 OOM 反复重启（23 评论，P1）**  
   自 2026-06-09 创建至今仍在 `clawsweeper:no-new-fix-pr` + `needs-maintainer-review` 状态，无 fix PR 链接。这是长期最严重的稳定性债。

3. **[#42475](https://github.com/openclaw/openclaw/issues/42475) — Gateway 级别 per-agent 成本预算（22 评论，P2）**  
   运维侧高需求：防止 agent 失控消耗 token 预算，无需外部监控。

4. **[#102175](https://github.com/openclaw/openclaw/issues/102175) — 嵌入式 prompt cache 跨 room-event/policy/Responses 边界失效（18 评论，P1）**  
   长会话相邻 turn 跨越多种边界时，provider prompt-cache 复用率显著下降，是性能 + 成本双重问题。

5. **[#87744](https://github.com/openclaw/openclaw/issues/87744) — Codex-backed Telegram 轮次在 2026.5.27 起反复超时（17 评论，P1，👍4）**  
   `turn/completed` 永不抵达，Telegram 会话最终交付失败。`needs-live-repro` 状态。

6. **[#96834](https://github.com/openclaw/openclaw/issues/96834) — WhatsApp 1:1 入站图片主 lane 卡死 ~3 分钟（14 评论，P1）**  
   多模态注入路径异常，`strands active_reply_work/queued_work_without_active_run`。

7. **[#79077](https://github.com/openclaw/openclaw/issues/79077) — Telegram Guest Bots / Bot-to-Bot（13 评论，P2，👍8）**  
   跟进 Telegram 2026-05-07 新平台特性。👍 数量是今日最高，社区意愿强烈。

8. **[#22676](https://github.com/openclaw/openclaw/issues/22676) — Signal daemon SIGUSR1 重启 race（17 评论，P1，已 CLOSED）**  
   今日关闭的历史悬案之一，被 `clawsweeper:linked-pr-open` 标签确认有 PR 跟进。

### 热点 PRs

- **[#132477](https://github.com/openclaw/openclaw/pull/132477) — fix(setup): keep verification detached until promotion（XL，P1）**  
  exact-head CI 失败，legacy-fleet rerun 缺陷在修。`waiting on author`，核心 release-pipeline 路径。
- **[#109249](https://github.com/openclaw/openclaw/pull/109249) — global pairing reply templates（M，P2）**  
  解决 DM pairing 模板不可本地化、不可品牌化的问题（[#109240](https://github.com/openclaw/openclaw/issues/109240)）。
- **[#133715](https://github.com/openclaw/openclaw/pull/133715) — preserve agent ownership across global sessions and bindings（XL，P2）**  
  多 agent + global sessions 跨渠道所有权保持，关联 [#126424](https://github.com/openclaw/openclaw/pull/126424) 与 [#133347](https://github.com/openclaw/openclaw/issues/133347) 一类问题。
- **[#133795](https://github.com/openclaw/openclaw/pull/133795) — repair 2026.7.33 validation failures（XL）**  
  修复 Docker build-context 助手遗漏与 npm preflight 问题，是 2026.7.33 extended-stable 修复链路。
- **[#123356](https://github.com/openclaw/openclaw/pull/123356) — add explicit command activation plans（XL，P1）**  
  Control UI command menu 引入"命令激活计划"，让 grammar 与 UI 行为之间有显式边界。

**背后诉求分析：** 社区热度集中在三类——(a) 升级/迁移路径回归（[#125626](https://github.com/openclaw/openclaw/issues/125626)、[#133347](https://github.com/openclaw/openclaw/issues/133347)、[#97680](https://github.com/openclaw/openclaw/issues/97680)），(b) Channel 投递可靠性（[#96834](https://github.com/openclaw/openclaw/issues/96834)、[#87744](https://github.com/openclaw/openclaw/issues/87744)、[#114020](https://github.com/openclaw/openclaw/issues/114020)、[#22676](https://github.com/openclaw/openclaw/issues/22676)），(c) 多 agent / 权限 / 配额的产品化（[#42475](https://github.com/openclaw/openclaw/issues/42475)、[#79077](https://github.com/openclaw/openclaw/issues/79077)、[#12678](https://github.com/openclaw/openclaw/issues/12678)）。

---

## 5. Bug 与稳定性

按严重程度排列今日活跃 / 新报告 / 已关闭 Bug：

### 🔴 P0 / 严重稳定性

- **[#108395](https://github.com/openclaw/openclaw/issues/108395) — 模型自造 "Human: [timestamp]" 用户消息，自授权执行 live action（5 评论，P0，`needs-security-review`）**  
  安全边界问题：`output text` 被当作用户输入回注入 session。无 fix PR。
- **[#91588](https://github.com/open

---

## 横向生态对比

<think>The user wants me to generate a comprehensive cross-project comparative analysis report based on the daily reports of 7 projects. Let me analyze the data carefully:

Projects:
1. OpenClaw - High activity, 500 issues, 500 PRs, v2026.8.1 released, very active but under pressure
2. NanoBot - Medium-high activity, 7 issues, 28 PRs, no release, agent kernel refactoring
3. PicoClaw - Low activity, 2 issues, 1 PR, no release, response issues
4. IronClaw - Medium activity, 0 issues, 11 PRs (5 dependabot), no release
5. LobsterAI - Low-medium activity, 0 new/active issues, 7 closed (all stale), 7 PRs
6. QwenPaw - High activity, 24 issues, 27 PRs, no release, beta phase
7. Hermes Agent - High activity, 50 issues, 50 PRs, no release
8. OpenHuman - High concentrated activity, 0 issues, 18 PRs (88.9% merge rate), no release, major refactoring

Wait, that's 8 projects. Let me count again:
1. OpenClaw
2. NanoBot
3. PicoClaw
4. IronClaw
5. LobsterAI
6. QwenPaw
7. Hermes Agent
8. OpenHuman

Yes, 8 projects. The user wants 7 sections:
1. 生态全景 (Ecosystem panorama)
2. 各项目活跃度对比 (Activity comparison)
3. OpenClaw 在生态中的定位 (OpenClaw positioning)
4. 共同关注的技术方向 (Common technical directions)
5. 差异化定位分析 (Differentiation analysis)
6. 社区热度与成熟度 (Heat & maturity)
7. 值得关注的趋势信号 (Trend signals)

Let me think about each section:

### 1. 生态全景
- 整体处于高活跃期
- 8 个项目都是 AI Agent / 个人 AI 助手方向
- 多个项目处于密集修复和重构期
- 普遍关注多渠道接入、Provider 兼容性、会话管理、压缩、内存管理
- 安全治理意识增强
- 但普遍存在 P0/P1 Bug 积压

### 2. 活跃度对比
| 项目 | Issues | PRs | Release | 健康度 |
| OpenClaw | 500 (267新/活跃) | 500 (304待合并) | v2026.8.1 | 高活跃度但承压 |
| NanoBot | 7 (3活跃) | 28 (20待合并) | 无 | 中高活跃 |
| PicoClaw | 2 | 1 | 无 | 低活跃/响应慢 |
| IronClaw | 0 | 11 (5 dependabot) | 无 | 中等 |
| LobsterAI | 0新/7关闭 | 7 (3待合并) | 无 | 低-中 |
| QwenPaw | 24 (18活跃) | 27 (21待合并) | 无（2.2.0b4准备） | 高活跃 |
| Hermes Agent | 50 (40活跃) | 50 (45待合并) | 无 | 高活跃 |
| OpenHuman | 0 | 18 (2待合并) | 无 | 高集中重构 |

### 3. OpenClaw 定位
- 与 Hermes Agent 规模相近
- 唯一有版本发布的项目
- 全栈定位：多渠道、多 agent、网关、记忆
- 维护者驱动 vs 社区协作混合
- 主要优势：生态最全、版本节奏最快、迁移工具体系完善
- 劣势：P1/P0 积压最严重、迁移路径不稳健

### 4. 共同技术方向
- Provider 兼容性（多项目）
- 压缩/上下文管理（Hermes, OpenHuman, NanoBot）
- MCP 集成（多项目）
- 多渠道接入（OpenClaw, NanoBot, QwenPaw）
- 会话持久化（多项目）
- 桌面/Web UI（多项目）
- 安全/错误归类（IronClaw, OpenHuman）
- 包管理/依赖治理（Hermes, OpenHuman）

### 5. 差异化
- OpenClaw: 全栈通用、版本节奏快、生态大
- NanoBot: 重 agent runner 内核重构
- PicoClaw: 边缘/嵌入式 (pico 定位)
- IronClaw: 设计系统+错误分类学
- LobsterAI: 桌面应用 + 有道系集成
- QwenPaw: v2.2.0 GA 准备、阿里系生态
- Hermes Agent: 大型架构提案 (pm)、多 Bot Group Chat
- OpenHuman: 极端架构精简（10k+ 行删除）

### 6. 热度与成熟度
- 快速迭代: OpenClaw, Hermes Agent, QwenPaw
- 质量巩固/重构: OpenHuman, NanoBot, IronClaw
- 维护警觉: PicoClaw, LobsterAI

### 7. 趋势信号
- Agent 内核架构收敛（Transcript, Memory, Context, Compaction）
- 包管理器统一（pm）
- 错误分类学精细化
- Provider 边界态处理成为通用痛点
- 桌面/嵌入端体验成为差异化战场
- 第三方服务集成（AnySearch, Claude SDK OAuth）
- 安全治理主动化（QwenPaw 的 4 个 CVE PR）

让我用中文撰写一份专业、有数据支撑、适合技术决策者阅读的报告。

Should I include any tables? Yes, definitely - the user explicitly asked for tables in section 2. Let me also use tables where appropriate in other sections to make data more scannable.

The output should be in Chinese. Let me write this carefully.</think>

# AI 智能体开源生态横向对比报告
**报告日期：2026-08-31｜覆盖项目：OpenClaw / NanoBot / PicoClaw / IronClaw / LobsterAI / QwenPaw / Hermes Agent / OpenHuman**

---

## 1. 生态全景

本次观察的 8 个开源项目（OpenClaw、NanoBot、PicoClaw、IronClaw、LobsterAI、QwenPaw、Hermes Agent、OpenHuman）均聚焦于 **AI 智能体框架 / 个人 AI 助手 / 多渠道对话平台** 方向，过去 24 小时内共贡献 **602 条 Issue 更新、590 条 PR 更新、1 个新版本发布**，整体处于"密集修复 + 架构收敛"的高活跃期。**普遍信号**是：会话压缩、Provider 兼容性、MCP 集成、桌面/嵌入式体验成为多家共有的痛点；维护者侧的工程投入从"功能堆叠"转向"内核重构 + 错误语义精细化 + 包管理治理"三条主线。**整体判断**：生态仍处于快速扩张期，但单项目成熟度分化明显，**头部项目（OpenClaw / Hermes Agent / QwenPaw）已显现规模化运维压力**，而中小规模项目（PicoClaw / LobsterAI）则出现响应漏斗与 stale 积压问题。

---

## 2. 各项目活跃度对比

| 项目 | Issues（活跃/新开） | PRs（待合并） | Release | 当日合并率 | 健康度评估 | 关键标签 |
|------|---------------------|---------------|---------|-----------|-----------|----------|
| **OpenClaw** | **267** / 233 关闭 | **304** | ✅ **v2026.8.1** | ~39% | 🔴 活跃但承压 | 高活跃 + 高积压 + 唯一发版 |
| **NanoBot** | 3 / 4 关闭 | 20 | ❌ | ~29% | 🟡 中高活跃 | Agent 内核集中重构 |
| **PicoClaw** | 2 / 0 关闭 | 1 | ❌ | 0% | 🔴 低活跃 + 0 响应 | 边缘设备场景 |
| **IronClaw** | 0 / 0 关闭 | 10 | ❌ | 0% | 🟡 中等 | 依赖治理驱动（5/11 为 Dependabot） |
| **LobsterAI** | 0 / 7 stale 关闭 | 3 | ❌ | ~57% | 🟡 低-中 | Stale 积压清理期 |
| **QwenPaw** | **18** / 6 关闭 | **21** | ❌（2.2.0b4 准备中） | ~22% | 🟡 高活跃 + 安全治理密集 | v2.2.0 GA 收尾期 |
| **Hermes Agent** | **40** / 10 关闭 | **45** | ❌ | ~10% | 🔴 高活跃 + 大量 P1 | 压缩子系统集中爆发 |
| **OpenHuman** | 0 / 0 关闭 | 2 | ❌ | **~89%** | 🟢 极高合并效率 | 架构精简（删除 10k+ 行） |

**读数说明**：
- **活跃度第一梯队**（≥40 Issue + PR）：OpenClaw、Hermes Agent —— 已进入规模化运维阶段，伴生 P0/P1 积压。
- **活跃度第二梯队**（15-30）：QwenPaw（24+27）、NanoBot（7+28）、OpenHuman（0+18）—— NanoBot / OpenHuman 处于"重构驱动"，QwenPaw 处于"GA 准备"。
- **活跃度第三梯队**（<10）：IronClaw、PicoClaw、LobsterAI —— 多依赖自动化驱动或 stale 清理，**社区参与度明显下滑**。

---

## 3. OpenClaw 在生态中的定位

| 维度 | OpenClaw | 最接近的同类 | 差异判断 |
|------|----------|--------------|----------|
| **Issue / PR 体量** | 500 / 500 | Hermes Agent (50/50)、QwenPaw (24/27) | **绝对头部**，约为第二名 10 倍 |
| **版本节奏** | 每日可发版（v2026.8.1） | QwenPaw 月度（2.2.0b4） | **最快** |
| **生态广度** | 8+ 渠道（Feishu/Telegram/Slack/WhatsApp/iMessage/Signal/Discord/QQ） | NanoBot: Email/Feishu/DingTalk/Telegram | **最广** |
| **维护者结构** | 核心团队 + 多名活跃 reviewer | Hermes Agent: 较集中；OpenHuman: 几乎单人 | **团队化运维** |
| **架构成熟度** | 多 agent + 路由 + 网关 + SDK | NanoBot: agent runner；OpenHuman: 重构中 | **全栈最完整** |
| **社区规模** | 数百条评论/日的活跃讨论 | Hermes Agent: 单条 127 评论 | **最大** |
| **技术债** | P0/P1 Bug 长期积压 | Hermes Agent: P1 压缩问题 | **最重** |

**OpenClaw 的核心优势**：
1. **唯一当日发版** —— 显示其 CI/release pipeline 最为成熟；
2. **多 agent + 多渠道 + 跨 Gateway** 的全栈定位目前没有同类可比；
3. **生态工具链**（ClawHub、Control UI、admin install policy warnings）开始体系化。

**OpenClaw 的核心劣势**：
1. P0 Bug（如 #108395 模型伪造 Human 消息自授权）已活跃多日；
2. 升级路径不稳健（v2026.8.1 一次性触发 cron 隔离 / exec-approvals 迁移阻塞 / beta 插件滞留 latest 三类回归）；
3. 多 agent 路由边界（#126424、#133715、#123356）虽在推进，但仍是架构层最大的未闭合债务。

**与同类对比的独特之处**：OpenClaw 是**唯一同时拥有"统一 SDK + 插件平台 + 多渠道桥接 + Gateway 网关 + 安装策略"五大件**的项目，其他项目多聚焦某一垂直（如 NanoBot 偏 agent runner、IronClaw 偏设计系统、OpenHuman 偏架构精简）。这使其更接近"操作系统级"产品，但也意味着任何子系统的脆弱性都会传导到整体体验。

---

## 4. 共同关注的技术方向

下表归纳当日**至少 2 个项目共同出现**的技术热点：

| 技术方向 | 涉及项目 | 具体诉求 |
|----------|----------|----------|
| **会话压缩 / 上下文管理** | Hermes Agent（#98450, #98722, #96775, #73503）、OpenHuman（#5844 TurnOverrides）、NanoBot（#5568 context compaction 归属、#5612 request fitting、#5615 ephemeral context）、QwenPaw（#7402 空 text block 污染 session） | 长会话压缩死循环、压缩 marker 未盖、边界态导致整 session 失效 |
| **MCP（Model Context Protocol）集成** | OpenClaw（#98435 loopback）、NanoBot（#5338 OAuth 凭据覆盖、#5605 IMAP `\Seen` 标记）、OpenHuman（#5850 glob 工具过滤）、QwenPaw（#6822 重连阻断） | OAuth 凭据隔离、工具过滤 glob 支持、重连可靠性、协议一致性 |
| **Provider 兼容性** | OpenHuman（#5860 ElevenLabs STT）、NanoBot（#5613 Responses API 字段污染）、OpenClaw（#102175 嵌入式 prompt cache 跨边界）、QwenPaw（#7402 Ark 空 text block）、Hermes Agent（#99089 enabled:false 绕过） | 边界态字段处理、协议语义差异、配置一致性 |
| **多渠道消息接入 / 一致性** | OpenClaw（Feishu/Telegram/Slack/WhatsApp/iMessage 投递）、NanoBot（Telegram 流式、Email）、QwenPaw（DingTalk Feishu）、LobsterAI（Win11 安装）、Hermes Agent（Discord typing） | 流式渲染整合、消息分片取消、群聊 takeover 协议 |
| **桌面 / 嵌入式体验** | PicoClaw（#3350 RV1106 卡顿）、Hermes Agent（#94405 Win boot-loop、#99086 浮动宠物朝向、#99065 /btw 无响应）、QwenPaw（#7406 主题锁定、#7417 Console 流重复文本）、LobsterAI（#1714 Win11 图标白屏） | 跨平台启动一致性、虚拟滚动、长会话 UI 性能 |
| **包管理 / 依赖治理** | Hermes Agent（#95281 统一 pm 提案、#84127 macOS Intel cryptography wheel）、OpenHuman（#5858 16 个 vendored 模块刷新）、QwenPaw（#7372 desktop python runtime 统一 pin）、OpenClaw（#97680 beta 升级插件滞留 latest） | 跨平台 wheels、依赖漂移、升级路径幂等 |
| **错误分类学精细化** | IronClaw（#7985、#7990 错误归类解耦）、OpenHuman（重构暴露 mock 与后端契约不一致）、NanoBot（#5583 工具异常 hint 扩展）、QwenPaw（#7414 fail-closed） | 区分领域失败 vs 协议失败，避免误导用户 |
| **安全 / 合规治理** | QwenPaw（#7428 glib、#7426 Pylint GPL 污染、#7424 Creator UI 锁文件、#7430）、OpenClaw（#108395 模型伪造 Human 消息 P0） | CVE 响应、许可证合规、自注入攻击面收敛 |

---

## 5. 差异化定位分析

| 项目 | 功能侧重 | 目标用户 | 关键技术架构特征 |
|------|----------|----------|------------------|
| **OpenClaw** | 全栈通用 Agent OS | 企业 + 高级个人用户 | 多渠道路由 + 插件平台 + Gateway + 多 agent bindings |
| **NanoBot** | Agent 内核与渠道桥 | 技术开发者、研究者 | 显式 TranscriptInput + pluggable memory backend + provider 鲁棒性 |
| **PicoClaw** | 嵌入式 / 轻量级 | 边缘设备、IoT 场景 | deltachat relay + JSONRPC secrets + 低算力适配 |
| **IronClaw** | Web UI + 错误语义 | 设计/前端/产品贡献者 | Chromatic 视觉回归 + cargo nextest CI + FailureKind 解耦 |
| **LobsterAI** | 桌面应用 + 有道系集成 | 有道生态用户、桌面用户 | Electron + in-app browser（#2574）+ UI 状态机 |
| **QwenPaw** | v2.2.0 GA + 安全治理 | 阿里系 / 企业用户 | Session 级 thinking + reme-ai embedding + Python runtime pin |
| **Hermes Agent** | 大型架构演进 + 跨平台 Desktop | 高级用户 + 多 Bot 部署者 | 统一 pm 包管理 + Skills Hub + 多 Bot Group Chat |
| **OpenHuman** | 极端架构精简 | 模块化偏好开发者 | 域外移到 vendored sub-crates（tinyflows/connectors/agents/channels）+ TurnOverrides |

**关键差异点提炼**：

1. **架构哲学两极**：OpenHuman 的"减法重构（删除 10k+ 行）"与 OpenClaw 的"加法生态（持续扩展渠道与插件）"形成鲜明对比。前者倾向于"通过剥离旧域换取可维护性"，后者倾向于"通过抽象层吸收多样性"。
2. **用户画像分层**：企业/高级用户（OpenClaw）、技术开发者（NanoBot）、边缘场景（PicoClaw）、前端产品（IronClaw）、桌面消费者（LobsterAI）、阿里生态（QwenPaw）、多 Bot 部署者（Hermes Agent）—— 项目已出现明显的用户分层。
3. **架构收敛 vs 探索**：NanoBot / OpenHuman 处于"重构收敛期"，专注于 agent 内核；而 OpenClaw / Hermes Agent 处于"特性扩展期"，继续叠加渠道与平台能力。

---

## 6. 社区热度与成熟度

按 **活跃度 × 合并率 × 维护者响应** 三维评估，可将 8 个项目分为三个梯队：

### 🟢 第一梯队：快速迭代 + 强维护

- **OpenHuman**：合并率 89%，单日 16 个合并，**效率之王**，但社区参与几乎为零（单人驱动），长期可持续性存疑。
- **OpenClaw**：唯一当日发版（v2026.8.1），拥有完整 release pipeline，但 P1/P0 积压为生态之最，**扩张速度超过消化速度**。

### 🟡 第二梯队：质量巩固期

- **NanoBot**：

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

<think>Let me analyze the GitHub data provided for NanoBot (github.com/HKUDS/nanobot) and generate a comprehensive daily report for 2026-08-31.

Key observations:
1. No new releases today
2. 7 Issues updated (3 active, 4 closed)
3. 28 PRs updated (20 pending, 8 merged/closed)
4. High activity in agent/refactor area by @chengyongru
5. Multiple email channel improvements by @tilladam
6. Telegram streaming improvements
7. Web search provider addition (AnySearch)
8. Several bug fixes around sessions, WebUI, MCP, native reasoning

Let me organize this into the requested structure with proper Chinese formatting and analytical insights.

Active themes:
- Agent refactoring (memory summaries, context compaction, request fitting, transcript assembly)
- Channel improvements (Telegram, Email, Feishu, DingTalk)
- Bug fixes in sessions, WebUI, MCP, provider handling
- Web search provider expansion

Closed issues (4):
- #5463 - DingTalk background tasks observer
- #5582 - Cron jobs from WebUI quote crash
- #5583 - Append hint to raised tool exceptions
- #5593 - Session message rate-limit state

Closed PRs (8): Let me look at closed ones in the list
- #5608 - refactor(agent): defer transcript assembly to runner [CLOSED]
- #5600 - fix(agent): close native reasoning on cancellation [CLOSED]
- #5338 - fix(mcp): preserve credentials when OAuth store read fails [CLOSED]
- That's only 3 visible closed PRs. The other 5 must be in the remaining 8 PRs not shown in the top 20. Let me work with what I have.

Open issues with notable activity:
- #5505 - AnySearch integration (7 comments)
- #5567 - Feishu channel multi-message integration (3 comments)
- #1697 - Old issue about query results (1 comment, from March)

Open PRs with focus areas:
- #5615 - ephemeral runtime context (P2)
- #5610 - cumulative memory summaries (P2)
- #5580 - move session persistence off event loop (P1, conflict)
- #5571 - explicit recall memory (P1)
- #5570 - pluggable recall backend (P2)
- #5614 - Telegram rich streaming
- #5568 - context compaction ownership (P2)
- #5531 - Telegram streaming upgrade (P2)
- #5612 - unify runner request fitting (P1)
- #5613 - Responses API replay cleanup (P2)
- #5611 - bound reasoning replay
- #5609 - Microsoft OAuth for Office365
- #5607 - AnySearch web search provider
- #5606 - email recipient alias filter
- #5605 - email \Seen marking
- #5601 - webui rejected message rollback
- #5412 - gateway background output flush

Let me now write the report in a structured, professional manner.</think>

# NanoBot 项目日报 · 2026-08-31

---

## 1. 今日速览

NanoBot 仓库今日延续了近期的高强度迭代节奏，过去 24 小时内共产生 7 条 Issue 更新和 28 条 PR 更新，整体活跃度处于中高水平。**维护者 @chengyongru** 是当日的核心贡献者，单日提交 5 条以上与 agent runner、memory、context fitting 相关的重构 PR，呈现明显的"agent 内核集中重构"特征。与此同时，**邮件渠道 (@tilladam)**、**Telegram 流式渲染**、**WebUI 会话/异步任务处理**三条线均有实质性进展，并关闭了 4 条 Issue 和 8 条 PR。社区侧讨论热度集中在飞书多消息整合与 AnySearch 搜索提供方接入两个外部需求上。整体看，项目处于"功能扩展 + 内核重构"双线推进的状态，**无新版本发布**。

---

## 2. 版本发布

⚠️ **今日无新版本发布。** 最近一次发版情况未在本次数据中体现，建议关注 [Releases 页面](https://github.com/HKUDS/nanobot/releases) 获取历史版本与变更日志。

---

## 3. 项目进展（今日合并/关闭的重要 PR）

今日共有 8 条 PR 进入关闭状态（含合并），主要推动方向为 **agent 内核重构、bug 修复、provider 一致性**：

| PR | 标题 | 影响 |
|---|---|---|
| [#5608](https://github.com/HKUDS/nanobot/pull/5608) | refactor(agent): defer transcript assembly to runner | 引入显式 `TranscriptInput` 抽象，将 transcript 组装推迟到 runner 执行前，保留 `ContextBuilder` 兼容路径 |
| [#5600](https://github.com/HKUDS/nanobot/pull/5600) | fix(agent): close native reasoning on cancellation | 修复流式请求在 native reasoning 启动后被取消时，客户端无法收到 `reasoning_end` 的问题 |
| [#5338](https://github.com/HKUDS/nanobot/pull/5338) | fix(mcp): preserve credentials when OAuth store read fails | MCP OAuth 存储读取失败不再被当作空存储，避免后续覆盖其他 server 的凭据 |

整体看，今日关闭的 PR 多为**单一职责的 bug 修复或小范围重构**，未涉及大型特性合并。叠加 20 条 pending PR 的存量，项目处于"清理旧 PR + 持续提交新 PR"的并行状态，**合并节奏相对克制**，提示 reviewer 资源可能成为近期瓶颈。

---

## 4. 社区热点

**Issue 端**：

- 🔥 [#5505](https://github.com/HKUDS/nanobot/issues/5505) — *Add AnySearch as a web search provider*（7 条评论）  
  AnySearch 团队主动提交接入申请，承诺提供 key-optional 的匿名额度，作为面向 AI Agent 的统一实时搜索工具。今日已对应落地 PR [#5607](https://github.com/HKUDS/nanobot/pull/5607)，讨论集中于接口适配与配额边界。
- 💬 [#5567](https://github.com/HKUDS/nanobot/issues/5567) — *飞书渠道应整合多轮回复为单条流式卡片消息*（3 条评论）  
  用户 @yrxeva 反映飞书渠道中 agent 处理一次请求会触发多条消息（流式、工具提示、最终回复），体验割裂。希望实现"用户发一条 → agent 回一条"的对称结构。

**PR 端**（按标签权重与改动幅度筛选）：

- ⭐ [#5580](https://github.com/HKUDS/nanobot/pull/5580) — *fix(session): move persistence off event loop*（P1，含 conflict 标记）  
  将 `SessionManager` 的缓存与持久化事务改造为可从 worker 线程安全调用，引入无状态 `nanobot.session.io` 适配器。这是本周最关键的稳定性 PR，但带 conflict 标记，**合并风险需重点关注**。
- ⭐ [#5571](https://github.com/HKUDS/nanobot/pull/5571) — *feat(memory): require explicit recall by default*（P1）  
  默认停止预加载 `MEMORY.md` 与 `history.jsonl`，改为按需显式召回。这是 memory 子系统的**默认行为变更**，影响范围较大，需关注下游用户行为差异。

社区诉求集中在两个方向：① **第三方服务接入**（AnySearch 这类自带流量的供应商主动寻求集成）；② **多渠道消息一致性体验**（飞书、Telegram 等 IM 渠道对消息合并/卡片化的需求）。

---

## 5. Bug 与稳定性

按严重程度排序：

### 🔴 高优先级（影响主链路）

1. **Cron jobs from WebUI 崩溃** — [#5582](https://github.com/HKUDS/nanobot/issues/5582)（已关闭）  
   WebUI 中引用/mention 会话时，agent 调度的 cron 任务在 add 或 fire 阶段崩溃。当前 Issue 已关闭，**但未见对应修复 PR 链接**，建议确认修复是否随其他重构 PR 合入。

2. **DingTalk 后台任务未观察/排空** — [#5463](https://github.com/HKUDS/nanobot/issues/5463)（已关闭）  
   `asyncio.Task` 缺少 done 回调对异常的处理，存在静默失败风险。Issue 已关闭，需确认是否有 fix PR。

3. **Session message rate-limit 状态泄漏** — [#5593](https://github.com/HKUDS/nanobot/pull/5593)（已关闭）  
   `SendSessionMessageTool` 仅在同源再次发送时才清理过期时间戳，导致一次性会话残留。Issue 已关闭。

4. **MCP OAuth 凭据被覆盖** — [#5338](https://github.com/HKUDS/nanobot/pull/5338)（已关闭 PR）  
   存储读取失败被当作空存储，可能覆盖其他 server 的凭据。**有 fix PR 并已关闭。**

### 🟡 中优先级（功能/性能退化）

5. **WebUI 拒绝消息副作用残留** — [#5601](https://github.com/HKUDS/nanobot/pull/5601)（**有 fix PR 未合并**）  
   拒绝的 WebUI 消息可能遗留保存的附件与 WebSocket 订阅。修复 PR 已提交但仍 OPEN。

6. **IMAP `\Seen` 标记过早** — [#5605](https://github.com/HKUDS/nanobot/pull/5605)（**有 fix PR 未合并**）  
   邮件通过过滤器后即标记 `\Seen`，但未实际投递给 agent。**有 fix PR 但仍 OPEN。**

7. **Responses API replay 字段污染** — [#5613](https://github.com/HKUDS/nanobot/pull/5613)（**有 fix PR 未合并**）  
   历史中的 provider-generated item IDs 与不支持字段被重放到新请求上下文，导致 Responses API 失败。**有 fix PR 但仍 OPEN。**

### 🟢 低优先级（体验性问题）

8. **工具异常未附加"尝试其他方法"提示** — [#5583](https://github.com/HKUDS/nanobot/issues/5583)（已关闭）  
   现有 hint 仅附加于 error-shaped result，希望扩展到 raised exception。Issue 已关闭。

整体看，今日 **bug 关闭率较高（4/4 关闭率）**，但**多个关键 fix PR 仍处于 pending 状态**（#5580、#5601、#5605、#5613），稳定性改进的实际落地仍取决于后续 review 节奏。

---

## 6. 功能请求与路线图信号

### 用户主动提交的功能请求

| Issue | 需求摘要 | 对应 PR | 进入下版本的概率 |
|---|---|---|---|
| [#5505](https://github.com/HKUDS/nanobot/issues/5505) AnySearch 接入 | 作为 web_search 提供方，key-optional | [#5607](https://github.com/HKUDS/nanobot/pull/5607) | **高** — PR 已就绪，参考已有 Serper 模式 |
| [#5567](https://github.com/HKUDS/nanobot/issues/5567) 飞书消息合并 | 流式卡片整合多轮回复 | 暂无 PR | **中** — 需要飞书渠道深度重构 |
| [#1697](https://github.com/HKUDS/nanobot/issues/1697) 合约交易查询无结果 | 长期未解决的功能/权限问题 | 暂无 PR | **低** — 长期未响应 |

### 维护者驱动的路线图信号

由 @chengyongru 集中提交的一系列 PR 描绘出清晰的 **agent 内核演进路径**：

1. **Memory 模型升级**  
   [#5570](https://github.com/HKUDS/nanobot/pull/5570) pluggable recall backend → [#5571](https://github.com/HKUDS/nanobot/pull/5571) 显式召回为默认 → [#5610](https://github.com/HKUDS/nanobot/pull/5610) 累积式 summary  
   呈现"**可插拔后端 → 默认行为变更 → checkpoint 模型**"的递进关系，是 memory 子系统的中期重构。

2. **Context / Transcript 重构**  
   [#5608](https://github.com/HKUDS/nanobot/pull/5608)（已关闭）→ [#5568](https://github.com/HKUDS/nanobot/pull/5568) runner 接管 context compaction → [#5612](https://github.com/HKUDS/nanobot/pull/5612) 统一 request fitting → [#5615](https://github.com/HKUDS/nanobot/pull/5615) ephemeral runtime context  
   形成一条**从 transcript 组装 → compaction 归属 → request fitting → 上下文生命周期**的完整链路。

3. **渠道能力扩展**  
   Telegram 流式 rich 渲染（[#5531](https://github.com/HKUDS/nanobot/pull/5531)、#5614）、Email Microsoft OAuth（[#5609](https://github.com/HKUDS/nanobot/pull/5609)）、Email 别名过滤（[#5606](https://github.com/HKUDS/nanobot/pull/5606)）构成**企业 IM / 邮件接入的强化组合**。

4. **Provider 鲁棒性**  
   [#5611](https://github.com/HKUDS/nanobot/pull/5611) reasoning replay 范围限制 + [#5613](https://github.com/HKUDS/nanobot/pull/5613) Responses API 字段清理，针对主流 provider 的边界情况做收敛。

### 信号判断

- **下一版本最可能纳入**：AnySearch 提供方、Telegram rich 流式（[#5614](https://github.com/HKUDS/nanobot/pull/5614) 标记为 draft，作者声明本周内 review）、若干邮件渠道 fix。
- **需要更长周期**：agent runner 重构系列因互相依赖（[#5580](https://github.com/HKUDS/nanobot/pull/5580) 已 conflict），预计将作为**下下个里程碑**整体合入。

---

## 7. 用户反馈摘要

从公开 Issue 评论中可提炼的真实用户场景与痛点：

1. **多渠道消息一致性焦虑** — 飞书用户（[#5567](https://github.com/HKUDS/nanobot/issues/5567)）明确表达"agent 回复 n 条消息"造成体验割裂，希望 IM 渠道具备类似 ChatGPT 单条流式回复的体感。

2. **历史遗留问题长期未响应** — 用户 @dteer（[#1697](https://github.com/HKUDS/nanobot/issues/1697)）在 3 月份提交的"查询合约交易无结果"问题，时隔近半年仅获得 1 条评论回复，反映出**早期 Issue 的响应漏斗**问题。

3. **第三方服务商主动靠近** — AnySearch 团队（[#5505](https://github.com/HKUDS/nanobot/issues/5505)）以"面向 AI Agent 的统一搜索工具"定位主动申请集成，说明 NanoBot 在 Agent 工具生态中**已具备一定的入口价值**，对外合作吸引力上升。

4. **未在评论中直接体现但从 PR 推断的痛点**：
   - 邮件用户在多别名共享收件箱场景下无法区分来信地址 → 推动 [#5606](https://github.com/HKUDS/nanobot/pull/5606)；
   - Office365/Outlook 基础认证淘汰迫在眉睫 → 推动 [#5609](https://github.com/HKUDS/nanobot/pull/5609)；
   - Agent reasoning 文本历史膨胀 → 推动 [#5611](https://github.com/HKUDS/nanobot/pull/5611)。

整体满意度信号不充分（多数 Issue 无 👍），但**关闭率较高 + 外部团队主动集成**两个指标可作为正向信号。

---

## 8. 待处理积压

提醒维护者关注以下**长期未响应或高风险挂起**项：

| 编号 | 类型 | 标题 | 创建/挂起时长 | 风险 |
|---|---|---|---|---|
| [#1697](https://github.com/HKUDS/nanobot/issues/1697) | Issue | The result wasn't returned and the output was incorrect | 2026-03-08（**近 6 个月**） | 🟠 用户功能性问题长期未解，影响社区口碑 |
| [#5412](https://github.com/HKUDS/nanobot/pull/5412) | PR | fix(gateway): flush background child output to logs | 2026-08-17（**2 周**） | 🟡 排查/部署友好度受影响，PR 简单但仍未合并 |
| [#5580](https://github.com/HKUDS/nanobot/pull/5580) | PR | fix(session): move persistence off event loop | **conflict 标记** | 🔴 P1 级别稳定性修复，conflict 状态阻碍合并 |
| [#5571](https://github.com/HKUDS/nanobot/pull/5571) | PR | feat(memory): require explicit recall by default | P1 默认行为变更 | 🔴 涉及 memory 默认行为，需要明确的 changelog 与沟通 |
| [#5567](https://github.com/HKUDS/nanobot/issues/5567) | Issue | 飞书渠道多消息整合 | 已有讨论无 PR | 🟡 渠道体验改进，等待实现 |

**建议维护者重点处理**：① 解决 #5580 的 conflict 状态；② 给出 #1697 的明确回应（即使是 wontfix）；③ 评估 #5571 默认行为变更的发布策略。

---

> 📊 **项目健康度小结**：活跃度中高、贡献者结构稳定、bug 关闭率高、pending PR 积压上升、agent 内核进入集中重构期。建议在合并 #5580 / #5571 / #5612 等大型 PR 前后明确发布节奏与 changelog 策略，避免默认行为变更对用户造成静默影响。

*报告生成时间：2026-08-31 · 数据源：[NanoBot GitHub Repository](https://github.com/HKUDS/nanobot)*

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

<think>The user wants me to generate a daily project report for PicoClaw based on GitHub data. Let me analyze the data carefully:

**Data Overview:**
- Past 24 hours Issues: 2 (new/active: 2, closed: 0)
- Past 24 hours PRs: 1 (pending: 1, merged/closed: 0)
- New releases: 0

**Issues:**
1. #3351 - About session memory compression physically deleting records (open, 0 comments, 0 likes)
2. #3350 - About Web UI input lag on embedded/low-performance devices (open, 0 comments, 0 likes)

**PR:**
1. #3222 - Refactor deltachat implementation, cleanup -200LOC (open, created July 3, updated Aug 30)

Now let me generate the report following the 8 sections requested. Since there are no new releases, no merged PRs, no comments, and limited activity, I should be honest about the low activity level.

Let me write this in Chinese as the request was in Chinese.

Key observations:
- Very low activity (2 issues, 1 PR)
- No releases
- No merged/closed items
- No comments on issues
- Both issues are from the same author @chentianxiong123
- PR #3222 has been stale since July 3
- Both issues are about real concerns: data persistence and performance on embedded devices

I should be objective and data-driven. The activity is low but the issues raised are substantive.</think>

# PicoClaw 项目日报

**日期：2026-08-31**
**数据来源：github.com/sipeed/picoclaw**

---

## 1. 今日速览

PicoClaw 项目今日活跃度**较低**——过去 24 小时内仅有 2 条新 Issue 提交、1 条 PR 更新，且均处于 Open 状态，无任何 Release 发布、无 PR 合并、无 Issue 关闭。值得注意的是，2 条新 Issue 均来自同一用户 @chentianxiong123，且都聚焦于**生产环境的实际痛点**（数据持久化、嵌入式性能），反映出用户已开始将 PicoClaw 部署到边缘/嵌入式场景。社区整体处于"问题收集期"，尚未进入修复或迭代阶段。

---

## 2. 版本发布

**今日无新版本发布。** 项目处于版本平稳期，距离下一次发版尚无明确信号。

---

## 3. 项目进展

**今日无 PR 合并或关闭。** 项目代码层今日无任何推进。唯一更新的 PR #3222（提交于 2026-07-03，今日仅刷新）仍处于长期待审状态：

- [#3222](https://github.com/sipeed/picoclaw/pull/3222) — *refactor(deltachat): cleanup implementation, documentation -200LOC*
  - 由 @trufae 提交，目标是精简 deltachat 实现、删除遗留特性、引入官方 relay 列表站点替代硬编码副本
  - 同时将密码邮箱配置改为通过 JSONRPC 管理 secrets，并重命名 `invite_link` → `join_invite_link`、新增 `show_invite_link`
  - **状态**：已 Open 59 天未合并，建议维护者评估是否纳入下一版本

> 综合来看，项目今日**代码进度为零**，deltachat 模块重构等社区贡献处于被搁置状态。

---

## 4. 社区热点

由于今日所有 Issue 评论数均为 0，无法用"评论热度"衡量讨论活跃度。我们以"问题质量与影响面"作为热点判据：

### 🔥 热点 #1：[#3351](https://github.com/sipeed/picoclaw/issues/3351) — 自动压缩物理删除 session 原始记录

- **议题**：长对话下 session 自动压缩会**物理覆写 `.jsonl` 文件**，而非仅在内存层压缩；用户验证文件内容确实变少
- **根因定位**：报告者已深入到 `pkg/memory/jsonl.go` 的 `JSONLStore`，指出 `SetHistory` → `rewriteJSONL` 会覆盖整文件
- **诉求分析**：这关乎**数据安全与可恢复性**——若压缩算法有 bug 或用户后悔，用户将永久丢失历史。该问题直接挑战"持久化"语义，是面向生产部署的关键设计缺陷

### 🔥 热点 #2：[#3350](https://github.com/sipeed/picoclaw/issues/3350) — 嵌入式设备 Web UI 输入卡顿

- **议题**：在 RV1106 / RISC-V 等低性能板上，输入框每输入一个字符都有明显延迟，CPU 飙升
- **关键疑问**：报告者合理质疑"为什么输入框打字会受聊天记录长度影响"——暗示渲染层未做虚拟化/分片
- **诉求分析**：PicoClaw 名称与定位（pico + claw）明确瞄准边缘/嵌入式市场，但 Web UI 在该场景下不可用等于**核心用户群体被排除**。这是产品定位一致性问题

---

## 5. Bug 与稳定性

| 严重程度 | Issue | 问题 | 是否有 fix PR |
|---------|-------|------|--------------|
| 🔴 高 | [#3351](https://github.com/sipeed/picoclaw/issues/3351) | session 压缩物理删除历史，破坏持久化语义 | ❌ 无 |
| 🟠 中 | [#3350](https://github.com/sipeed/picoclaw/issues/3350) | Web UI 在嵌入式设备输入卡顿，影响主战场用户体验 | ❌ 无 |

**评估**：
- #3351 涉及**数据丢失风险**，是最严重的问题。建议优先排查 `pkg/memory/jsonl.go` 的 `rewriteJSONL` 流程，引入"压缩前快照备份"或"压缩前 archive"机制
- #3350 涉及前端性能，建议排查 Web UI 在长历史下的重渲染策略（虚拟滚动、按需加载、debounce）

两者均无对应 fix PR，**Bug 修复进度为 0%**。

---

## 6. 功能请求与路线图信号

今日未出现明确的新功能请求，但 #3351 实质上隐含一个**功能改进信号**：

> **诉求**：希望 PicoClaw 提供"压缩不可逆"的可选策略，或保留原始 log 备份

结合已有但长期未合并的 [#3222](https://github.com/sipeed/picoclaw/pull/3222)（deltachat 重构 -200LOC），可推断下一版本可能的方向：
1. **数据安全增强**（应对 #3351）
2. **deltachat 模块精简**（合并 #3222）
3. **嵌入式前端优化**（应对 #3350）

> 注：以上仅为基于现有信号的趋势推测，非官方路线图。

---

## 7. 用户反馈摘要

由于 2 条 Issue 均无评论，今日暂无文本形式的社区反馈。但从 Issue 内容可提炼出真实使用场景：

| 用户 | 场景 | 痛点 | 满意度 |
|------|------|------|--------|
| @chentianxiong123 | 长对话 AI agent / 自动化场景 | 数据丢失风险 | ❌ 不满意 |
| @chentianxiong123 | RV1106 / RISC-V 嵌入式板部署 PicoClaw Launcher | Web UI 无法流畅使用 | ❌ 不满意 |

**关键洞察**：PicoClaw 正被部署到 **AI agent + 边缘设备** 这一新兴场景，社区已开始 Pushing 项目边界。官方需评估是否将该场景纳入"一等公民"支持。

---

## 8. 待处理积压 ⚠️

以下 Issue / PR 已长期未获响应，建议维护者优先 review：

| 类型 | 编号 | 标题 | 创建时间 | 待处理天数 |
|------|------|------|---------|----------|
| PR | [#3222](https://github.com/sipeed/picoclaw/pull/3222) | refactor(deltachat): cleanup -200LOC | 2026-07-03 | **59 天** |
| Issue | [#3351](https://github.com/sipeed/picoclaw/issues/3351) | session 自动压缩物理删除历史 | 2026-08-30 | 1 天（高严重度，需即时响应） |
| Issue | [#3350](https://github.com/sipeed/picoclaw/issues/3350) | 嵌入式设备 Web UI 卡顿 | 2026-08-30 | 1 天（中严重度） |

**健康度评估**：
- 📉 **响应速度**：2 条新 Issue 在 24 小时内均无维护者响应
- 📉 **PR 吞吐**：59 天的 PR 处于停滞状态，社区贡献活跃但合并节奏偏慢
- ✅ **Issue 质量**：用户报告问题均附有源码定位、复现步骤、根因分析，属高质量反馈

---

## 📊 项目健康度总览

| 维度 | 评分 | 说明 |
|------|------|------|
| 代码活跃度 | ⭐⭐☆☆☆ | 无合并、无发版 |
| Issue 响应 | ⭐⭐☆☆☆ | 新 Issue 0 响应 |
| 社区贡献 | ⭐⭐⭐☆☆ | 有外部 PR 提交，但积压 |
| 用户反馈质量 | ⭐⭐⭐⭐⭐ | Issue 内容详尽，含源码级根因 |
| 数据安全 | ⭐⭐☆☆☆ | #3351 暴露持久化设计缺陷 |

**核心建议**：
1. 维护者 24h 内对 #3351 给出官方回应，避免社区对"数据丢失"产生信任危机
2. 评估 #3222 的合并成本，给社区贡献者明确反馈
3. 着手调查 Web UI 在嵌入式设备上的性能瓶颈，这是定位问题

---

*报告生成基于 GitHub 公开数据，分析维度可能与官方视角存在差异。如需深入分析某议题，请告知。*

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

<think>The user wants me to generate a daily project status report for IronClaw based on the GitHub data provided. Let me analyze the data carefully:

**Data Overview:**
- Past 24 hours Issues updates: 0 (new/active: 0, closed: 0)
- Past 24 hours PR updates: 11 (pending merge: 10, merged/closed: 1)
- New releases: 0

**PRs to analyze:**

1. **#7831** [OPEN] - Design System Phase 3a foundation — Chromatic lane + missing token axes
   - Author: @rdisandro
   - Created: 2026-08-23, Updated: 2026-08-31
   - Size: XL, Risk: medium
   - Scope: ci, docs
   - Adds non-blocking `webui-v2-chromatic` lane for Storybook visual regression
   - Adds missing design-token axes

2. **#7988** [OPEN] - chore(agents): refresh codebase knowledge graph
   - Author: @ironclaw-ci[bot]
   - Created: 2026-08-29, Updated: 2026-08-31
   - Size: XS, Risk: low
   - Bot-generated nightly refresh

3. **#7993** [OPEN] - chore(deps): bump everything-else group with 16 updates
   - Author: @dependabot[bot]
   - Created: 2026-08-30, Updated: 2026-08-30
   - Size: L, Risk: low
   - Updates uuid 1.24.0→1.26.0, base64 0.22.1→0.23.1, toml etc.

4. **#7959** [CLOSED] - chore(deps): bump everything-else group with 15 updates
   - Author: @dependabot[bot]
   - Created: 2026-08-27, Updated: 2026-08-30
   - Closed without merging (probably superseded by #7993)

5. **#7834** [OPEN] - chore(deps): bump wasm group with 4 updates
   - wasmtime, wasmtime-wasi, wit-component, wit-parser
   - Created: 2026-08-23, Updated: 2026-08-30

6. **#7020** [OPEN] - chore(deps): bump tokio-tungstenite from 0.29.0 to 0.30.0
   - Created: 2026-08-02, Updated: 2026-08-30
   - This is old (over 28 days), indicates backlog

7. **#7835** [OPEN] - chore(deps): bump actions group with 5 updates
   - anthropics/claude-code-action, actions/setup-node etc.
   - Created: 2026-08-23, Updated: 2026-08-30

8. **#7985** [OPEN] - fix(memory): missing document is domain failure, not malformed request
   - Author: @standardtoaster
   - Bug fix for memory service error categorization

9. **#7990** [OPEN] - fix(tool-disclosure): unresolvable tool name is not encoding error
   - Author: @standardtoaster
   - Same pattern - error categorization fix

10. **#7992** [OPEN] - ci: unify bounded integration execution
    - Author: @henrypark133
    - Unifies integration test execution with cargo nextest, 4-test concurrency ceiling

11. **#7977** [OPEN] - fix(loop): terminate on dominant repeated output, cap interactive wall clock
    - Author: @henrypark133
    - Important fix - addresses loop that ran 593 tool calls over 70 minutes for non-progress
    - Production incident from 2026-08-27

Key observations:
- No issues, but 11 PRs (10 open, 1 closed)
- No releases
- Heavy Dependabot activity (5 of 11 PRs)
- 2 PRs (#7985, #7990) by @standardtoaster focus on error category fixes
- 2 PRs (#7992, #7977) by @henrypark133 - CI improvements + loop fix
- 1 CI bot auto-refresh PR (#7988)
- 1 Design system Phase 3a PR (#7831)
- #7020 is a 28-day-old open PR (backlog indicator)
- #7959 closed without merging (likely superseded)
- The #7977 PR is important - references production incident with runaway loop

Let me structure the report following the requested 8 sections.

Since there are no Issues (0), sections 4 (community hotspots), 7 (user feedback) will be limited. I'll note this but provide analysis based on PR comments and content.

For section 3 (project progress), only 1 PR was closed (#7959) and it was closed without merging, so actual merge progress is limited.

Let me write this in Chinese as requested. The language should be objective, professional, data-driven.

Let me note that the report date is 2026-08-31.</think>

# IronClaw 项目动态日报

**📅 报告日期：2026-08-31**
**📊 数据来源：github.com/nearai/ironclaw**

---

## 1. 今日速览

IronClaw 今日呈现"**PR 活跃、Issue 静默、依赖驱动**"的典型节奏。过去 24 小时共有 11 个 PR 发生更新（10 个待合并、1 个已关闭），但 Issue 端为零新增、零关闭，无新版本发布。活跃度评估为**中等**：表面看 PR 数量充足，但其中 5 个来自 Dependabot 的自动化依赖升级，1 个来自 CI Bot 的知识图谱自动刷新，真正由人类贡献者推动的有意义 PR 仅 5 个。值得关注的实质性进展来自 `@henrypark133` 的两条 PR（CI 整合 + 循环失控修复）和 `@standardtoaster` 的两条错误归类修复，以及 `@rdisandro` 启动的 Design System Phase 3a 基建。整体健康度良好，但缺少 Issue 端的用户/贡献者反馈信号。

---

## 2. 版本发布

⚠️ **今日无新版本发布。**

建议关注合并进度最高的 PR（#7977、#7992、#7985、#7990）以预判下一个 release 的内容主线。

---

## 3. 项目进展

### ✅ 已关闭 PR（1 条）

| PR | 说明 | 影响 |
|---|---|---|
| [#7959](https://github.com/nearai/ironclaw/pull/7959) | Dependabot 升级 everything-else 组（15 项） | **未合并**，被 #7993（同主题、16 项）取代，属于正常的批量依赖更新滚替 |

### 🔄 进入实质评审的关键开放 PR

虽然今日未发生合并，但以下 4 条 PR 代表项目向前推进的主要方向：

- **[#7977](https://github.com/nearai/ironclaw/pull/7977) — `fix(loop): 终止主因重复输出，给交互设置时钟上限`**（@henrypark133，XL）
  - 修复了默认循环族在"无进展"情况下无法终止的回归。该回归源自 #7531（移除了基于摘要的终止器），导致生产环境 run `e3513a4e`（2026-08-27）出现 **593 次工具调用、持续 70+ 分钟**的非生产性循环。**这是今日最具有生产价值的一条修复**，直接回应了一次线上事件。

- **[#7992](https://github.com/nearai/ironclaw/pull/7992) — `ci: 统一有界集成测试执行`**（@henrypark133，XL）
  - 将所有 PR 和 merge-queue 集成测试目标统一到单个 `cargo nextest run`，固定 4 测试并发上限，去掉重复的 shell 投影和 per-group runner。属于 CI 基础设施优化。

- **[#7985](https://github.com/nearai/ironclaw/pull/7985) — `fix(memory): 缺失文档是领域失败，非请求格式错误`**（@standardtoaster，M）
  - 修正 `NativeMemoryService::read` 把"文档不存在"误归类为 `FailureKind::InputEncode` 的问题，使用户面对的报错从误导性的"工具输入无法编码"变成准确的领域语义。

- **[#7990](https://github.com/nearai/ironclaw/pull/7990) — `fix(tool-disclosure): 不可解析的工具名不是编码错误`**（@standardtoaster，M）
  - 同作者系列修正：把工具披露桥中两类本质不同的失败（输入格式错误 vs. 工具名无法解析）从同一 `FailureKind::InputEncode` 中解耦。

- **[#7831](https://github.com/nearai/ironclaw/pull/7831) — `Design System Phase 3a 基建：Chromatic lane + 缺失 token 轴`**（@rdisandro，XL）
  - 为 Phase 3 视觉换肤引入独立的非阻塞 `webui-v2-chromatic` 工作流（让每个代码 PR 都发布 Storybook 目录以做视觉回归），并补齐缺失的设计 token 轴。

**整体评估**：今日未发生功能性合并，**净进展为零**。但评审池中的修复质量很高，尤其是 #7977 解决了影响生产稳定性的循环失控问题。

---

## 4. 社区热点

⚠️ **今日 Issues 区域无任何活动（0 条新增、0 条关闭），无法识别评论最活跃的讨论。**

从 PR 数据侧推断的"热点"：

- **#7831（Design System Phase 3a）** —— 这是面向前端视觉系统的战略级变更，最有可能引起设计/前端贡献者的关注，但当前 👍 数与评论数均为 0，尚处于早期评审阶段。
- **#7977（loop 修复）** —— 因为引用了一次真实生产事件，最有可能在合并前触发资深维护者（@henrypark133 圈外的 reviewer）的额外关注。

---

## 5. Bug 与稳定性

按严重程度从高到低排列：

| 严重度 | Bug 描述 | 状态 | Fix PR |
|---|---|---|---|
| 🔴 **高（生产事件级）** | 默认循环族在无进展场景下无法终止，单次运行可达 593 次工具调用 / 70+ 分钟（回归自 #7531） | 已有 fix PR（待合并） | [#7977](https://github.com/nearai/ironclaw/pull/7977) |
| 🟡 **中（错误归类）** | `NativeMemoryService::read` 将"文档不存在"归为 InputEncode 错误，对用户误导 | 已有 fix PR（待合并） | [#7985](https://github.com/nearai/ironclaw/pull/7985) |
| 🟡 **中（错误归类）** | 工具披露桥把"工具名无法解析"也归为 InputEncode，混淆了真实格式错误 | 已有 fix PR（待合并） | [#7990](https://github.com/nearai/ironclaw/pull/7990) |

**观察**：今日所有被识别的 Bug 都已配备 fix PR，无"无主 Bug"积压。但三条 fix PR 均处于 OPEN 状态、未合并，**生产侧的循环失控修复实际上还未抵达用户**。

---

## 6. 功能请求与路线图信号

由于今日无新 Issue，**用户功能请求通道完全静默**。从 PR 端可推断的路线图信号：

1. **设计系统 Phase 3a 启动**（[#7831](https://github.com/nearai/ironclaw/pull/7831)）—— 表征 UI 层面进入新一轮视觉/Token 整理周期，Chromatic 视觉回归基建落地。
2. **CI 整合**（[#7992](https://github.com/nearai/ironclaw/pull/7992)）—— 工程基础设施持续投入，"有界集成测试"成为明确方向。
3. **错误语义重构**（[#7985](https://github.com/nearai/ironclaw/pull/7985) + [#7990](https://github.com/nearai/ironclaw/pull/7990)）—— `@standardtoaster` 的连续两条修复暗示领域正在进行一次"错误分类学"的清理，让上层 agent 能正确区分领域失败与协议失败。这可能是更大重构的先导。

---

## 7. 用户反馈摘要

⚠️ **今日 Issues 评论为空，无法提取真实用户痛点。**

可从 PR 描述中侧写的用户/运营痛点：

- **生产可观测性痛点**：#7977 的事故叙述（70 分钟、593 次调用）显示当前 loop 在"无进展"状态下缺乏兜底终止信号，用户/运营需要在事后从日志/工单中追溯。
- **错误文案误导痛点**：#7985 和 #7990 都揭示同一类问题——**底层错误分类粒度过粗**，导致上层（agent / 用户）看到的是"输入无法编码"这种语义错位的提示，排查时会被引向错误的方向。

---

## 8. 待处理积压（Backlog）

以下 PR 处于"长期未合并"状态，建议维护者关注：

| PR | 标题 | 开放天数 | 备注 |
|---|---|---|---|
| [#7020](https://github.com/nearai/ironclaw/pull/7020) | bump `tokio-tungstenite` 0.29.0 → 0.30.0（tokio-ecosystem 组） | **≥ 28 天** | 远超 Dependabot 常见合并窗口，可能存在兼容性顾虑或被搁置，建议明确处置（合并/关闭/拆分）。 |

**附加观察**：
- #7959 虽已关闭，但 #7993（同主题、更大规模）已跟上，依赖组滚动维护健康。
- 5 个 Dependabot PR 全部未合并（#7020、#7834、#7835、#7959、#7993），依赖更新通道有积压风险，建议批量评估兼容性后集中合并。
- 无长期未响应的开放 Issue（Issues 通道今日完全无活动）。

---

## 📌 健康度总结

| 维度 | 评分 | 说明 |
|---|---|---|
| 活跃度 | 🟡 中 | PR 数量充足但 Issue 端零信号 |
| 响应速度 | 🟢 良好 | 所有识别出的 Bug 都有对应 fix PR |
| 依赖维护 | 🟡 关注 | 6+ 条 Dependabot PR 待处理，含一条 28 天高龄 |
| 路线清晰度 | 🟢 良好 | Design System Phase 3、CI 整合、错误分类学三条主线明确 |
| 风险提示 | 🟡 中 | #7977 所述的循环失控回归尚未合并到默认分支，存在再次发生生产事故的窗口 |

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

<think>The user wants me to generate a project daily report for LobsterAI based on GitHub data. Let me analyze the data carefully and produce a structured report in Chinese.

Let me first analyze the data:

**Overview:**
- 24h Issues: 7 updates (0 new/active, 7 closed)
- 24h PRs: 7 updates (3 pending, 4 merged/closed)
- New releases: 0

**All Issues were CLOSED with [stale] tag:**
1. #1698 - Gateway port conflict with 有道龙虾 and 智企帝王蟹 (4 comments)
2. #1744 - Bug report (failed to upload file) (4 comments)
3. #1714 - Win11 icon white/invalid during installation (3 comments)
4. #1745 - Email connection - Outlook OAuth2 not supported (3 comments)
5. #1783 - Diff display broken after update, root cause found in extractDiffFromToolInput (3 comments)
6. #1688 - How to change temperature parameter dynamically (2 comments)
7. #1751 - Scheduled task notification text incorrect (2 comments)

**PRs:**
1. #2574 [OPEN] - feat(browser): add interactive in-app browser - NEW
2. #2573 [CLOSED] - feat(cowork): show login prompt before unauthenticated chat - NEW
3. #1127 [OPEN] [stale] - fix(mcp): cancel force-close timer in stop()
4. #1130 [OPEN] [stale] - fix(api): fix Anthropic SSE streaming parsing buffer issue
5. #1765 [CLOSED] [stale] - chore(deps): bump @headlessui/react from 1.7.19 to 2.2.10
6. #1769 [CLOSED] [stale] - feat(ui): add skeleton loading screen for cowork initialization
7. #1770 [CLOSED] [stale] - feat(ui): enhance empty states for skills and task run history

Key observations:
- All 7 issues closed today are stale (marked [stale])
- 4 PRs closed today (1 new feat for cowork, 3 stale PRs)
- 3 PRs remain open (1 new feature, 2 stale bug fixes)
- The community has stale issues that haven't been responded to, indicating a backlog problem
- A substantial new feature PR (#2574) for in-app browser is in progress
- Several bug fixes for MCP server timing and SSE parsing remain unmerged for 5 months

Let me write the report now.

The report should be in Chinese, professional, data-driven, with GitHub links. Let me structure it well.</think>

# LobsterAI 项目日报
**日期：2026-08-31**

---

## 1. 今日速览

LobsterAI 今日整体活跃度处于**低-中等偏低**水平。Issues 端无新开/活跃工单，7 条更新全部为历史遗留 stale 问题被机器人自动关闭，反映出社区反馈的积压清理节奏；PR 端有 2 条新提交（#2574、#2573），其中 #2574 为较大规模的"应用内交互式浏览器"功能 PR，覆盖 renderer/main/openclaw/cowork/artifacts 五个模块，是近期值得关注的工程进展。当日无版本发布，PR 合并率 4/7≈57%，仍有 2 条超过 4 个月未合并的 stale 修复 PR 处于 OPEN 状态，需维护者介入。

---

## 2. 版本发布

无新版本发布。最近一次 Release 信息未在数据中体现，建议关注 [Releases 页](https://github.com/netease-youdao/LobsterAI/releases) 获取最新动态。

---

## 3. 项目进展

今日**关闭/合并 PR 共 4 条**：

| PR | 标题 | 类型 | 价值 |
|---|---|---|---|
| [#2573](https://github.com/netease-youdao/LobsterAI/pull/2573) | feat(cowork): show login prompt before unauthenticated chat | 新功能 | 提升未登录用户的转化路径，明确登录引导并保留原有订阅/Agent/语音登录提示 |
| [#1765](https://github.com/netease-youdao/LobsterAI/pull/1765) | chore(deps): bump @headlessui/react from 1.7.19 to 2.2.10 | 依赖升级 | 由 dependabot 推动，修复上游漏洞并获取新组件能力，建议核查破坏性变更 |
| [#1769](https://github.com/netease-youdao/LobsterAI/pull/1769) | feat(ui): add skeleton loading screen for cowork initialization | UI 优化 | 以 shimmer 骨架屏替代静态加载文案，统一设计语言 |
| [#1770](https://github.com/netease-youdao/LobsterAI/pull/1770) | feat(ui): enhance empty states for skills and task run history | UI 优化 | 补齐 SkillsManager、TaskRunHistory 的空状态图标/副标题 |

**进展评估**：今日合入内容以 UI 体验优化和依赖治理为主，**未涉及核心链路修复**。#2573 是面向未登录用户的引导增强，#1769/#1770 完善了加载与空状态的视觉一致性——项目向前稳步推进，但深度功能迭代仍依赖像 #2574 这类尚未合入的大型 PR。

---

## 4. 社区热点

由于今日 Issues 全部为 stale 关闭且无新开工单，过去 24 小时**无活跃讨论**。从历史评论数看，相对受关注的 stale Issue 包括：

- [#1698](https://github.com/netease-youdao/LobsterAI/issues/1698) — 有道龙虾与智企帝王蟹的 gateway 端口冲突（4 条评论）
- [#1744](https://github.com/netease-youdao/LobsterAI/issues/1744) — Bug 报告（含技术支持联系函附件，4 条评论）
- [#1714](https://github.com/netease-youdao/LobsterAI/issues/1714) — Win11 安装图标白屏（3 条评论）
- [#1745](https://github.com/netease-youdao/LobsterAI/issues/1745) — Outlook OAuth2 邮箱连接失败（3 条评论）

**诉求分析**：用户痛点集中在三类——（1）与其他有道系产品共存时的端口/进程冲突；（2）跨平台（特别是 Win11）安装体验问题；（3）企业邮箱认证方式与第三方 OAuth 支持不足。这些问题在被自动标记 stale 关闭前未得到有效回应，可能正在侵蚀用户信任。

---

## 5. Bug 与稳定性

今日无新 Bug 报告。已关闭的 stale Bug 中值得回溯归档的有：

| 严重度 | Issue | 问题 | 是否已有 Fix PR |
|---|---|---|---|
| 🔴 高 | [#1783](https://github.com/netease-youdao/LobsterAI/issues/1783) | 更新后 `extractDiffFromToolInput` 无法显示 edit diff（用户提供根因分析） | ❌ 无对应 PR |
| 🟠 中-高 | [#1698](https://github.com/netease-youdao/LobsterAI/issues/1698) | 端口冲突导致 gateway 鉴权失败 | ❌ 无对应 PR |
| 🟡 中 | [#1714](https://github.com/netease-youdao/LobsterAI/issues/1714) | Win11 安装后图标白色无效 | ❌ 无对应 PR |
| 🟡 中 | [#1745](https://github.com/netease-youdao/LobsterAI/issues/1745) | Outlook OAuth2/新式认证不支持 | ❌ 无对应 PR |

**风险提示**：[#1783](https://github.com/netease-youdao/LobsterAI/issues/1783) 用户已定位到 `app.asar` 中具体函数 Bug，社区自行提供根因但未推动修复，**存在回归风险长期遗留**。

另外，**未合并的 2 条 stale 修复 PR** 仍待跟进：
- [#1127](https://github.com/netease-youdao/LobsterAI/pull/1127) — MCP `stop()` 强制关闭定时器未取消，可能误关新连接（创建于 2026-03-31）
- [#1130](https://github.com/netease-youdao/LobsterAI/pull/1130) — Anthropic SSE 跨 chunk 拆行导致 JSON 解析静默失败、数据丢失（创建于 2026-03-31）

这两条 fix 已等待 5 个月，#1130 涉及流式输出数据丢失的潜在稳定性问题，建议优先评审。

---

## 6. 功能请求与路线图信号

今日明确的用户功能请求来自历史 stale Issue：

| 诉求 | 关联 Issue | 落地信号 |
|---|---|---|
| 在对话中动态调整 `temperature` 参数 | [#1688](https://github.com/netease-youdao/LobsterAI/issues/1688) | ⚪ 暂无 PR |
| 改进邮箱连接方式，支持 OAuth2/现代认证 | [#1745](https://github.com/netease-youdao/LobsterAI/issues/1745) | ⚪ 暂无 PR |
| 修复定时任务文案通知中的错误 | [#1751](https://github.com/netease-youdao/LobsterAI/issues/1751) | ⚪ 暂无 PR |

**路线图方向**：今日新开 PR [#2574](https://github.com/netease-youdao/LobsterAI/pull/2574) "feat(browser): add interactive in-app browser" 是迄今最大手笔的功能提案，包含：
- 在右侧 artifact 面板内嵌真实交互式 Agent 浏览器，同时保留独立窗口模式；
- 将 OpenClaw 浏览器工具通过 MCP 桥接到主程序，使用户与 Agent 共享同一页面；
- 跨应用会话持久化 in-app browser profile。

若该 PR 进入合入主分支，将显著强化 Agent 的 Web 操作能力，是下一版本的核心看点之一。

---

## 7. 用户反馈摘要

由于 Issues 全部 stale 关闭，**新增用户声音极为有限**。可从历史 Issue 摘要提炼以下痛点画像：

- **多产品共存的开发者**（[#1698](https://github.com/netease-youdao/LobsterAI/issues/1698)）：在同一 macOS 环境下运行多款有道系 AI 产品时遭遇端口与进程竞争，缺乏进程隔离或端口协商机制。
- **企业用户**（[#1745](https://github.com/netease-youdao/LobsterAI/issues/1745)）：因 Microsoft 已禁用普通应用密码，传统应用密码登录不可用，亟需 OAuth2/新式身份验证支持。
- **Windows 用户**（[#1714](https://github.com/netease-youdao/LobsterAI/issues/1714)）：在 Win11 环境下遭遇图标白屏，安装体验差，影响首次使用印象。
- **高级用户/开发者**（[#1688](https://github.com/netease-youdao/LobsterAI/issues/1688)、[#1783](https://github.com/netease-youdao/LobsterAI/issues/1783)）：希望开放模型参数控制、并对 UI 回归问题提供更快速的反馈通道；前者已自行提供根因分析。

**整体满意度信号**：🟡 偏负面。所有被关闭的 Issue 均无明确"已修复"说明，stale 机制虽能清理看板，但**未实质解决用户问题**，存在引发二次投诉的风险。

---

## 8. 待处理积压

⚠️ **维护者关注清单**（按建议优先级排序）：

| 优先级 | 类型 | 编号 | 摘要 | 等待时长 |
|---|---|---|---|---|
| 🔴 P0 | Bug Fix PR | [#1130](https://github.com/netease-youdao/LobsterAI/pull/1130) | Anthropic SSE 流式解析跨 chunk 数据丢失 | ~5 个月 |
| 🟠 P1 | Bug Fix PR | [#1127](https://github.com/netease-youdao/LobsterAI/pull/1127) | MCP `stop()` 未取消定时器，误关新连接 | ~5 个月 |
| 🟠 P1 | Feature PR | [#2574](https://github.com/netease-youdao/LobsterAI/pull/2574) | 应用内交互式浏览器（5 模块联动） | 新提交 |
| 🟡 P2 | Bug Issue | [#1783](https://github.com/netease-youdao/LobsterAI/issues/1783) | edit diff 显示回归（用户已给根因） | stale 关闭但未修复 |
| 🟡 P2 | Bug Issue | [#1698](https://github.com/netease-youdao/LobsterAI/issues/1698) | 端口冲突致 gateway 鉴权失败 | stale 关闭但未修复 |
| 🟡 P2 | Feature Request | [#1745](https://github.com/netease-youdao/LobsterAI/issues/1745) | Outlook OAuth2 邮箱支持 | stale 关闭但未回复 |

**健康度观察**：长期 stale Issue 在无响应情况下被自动关闭，可能对外部贡献者形成"项目维护停滞"的负面印象。建议建立"stale 前人工复核"机制，并对已定位根因的 Issue（如 #1783）显式跟踪至修复 PR。

---

*日报基于 LobsterAI GitHub 仓库（[netease-youdao/LobsterAI](https://github.com/netease-youdao/LobsterAI)）截至 2026-08-31 的公开数据生成。*

</details>

<details>
<summary><strong>QwenPaw</strong> — <a href="https://github.com/agentscope-ai/QwenPaw">agentscope-ai/QwenPaw</a></summary>

<think>The user wants me to generate a daily project report for QwenPaw (github.com/agentscope-ai/QwenPaw) based on the GitHub data provided. Let me analyze the data carefully and create a structured report.

Let me first understand the data:
- 24 Issues updated in last 24 hours (18 new/active, 6 closed)
- 27 PRs updated in last 24 hours (21 open/pending, 6 merged/closed)
- 0 new releases

Looking at the issues:
- Several important bugs reported
- Issues with Feishu channel (#6608, #7408)
- Console issues (#7420, #7417, #7419, #7418, #6785)
- Tool result lost issue (#7420)
- Empty text blocks (#7402)
- MCP connection issue (#6822 - CLOSED)
- Security/compliance issues (#7428, #7426, #7424, #7430)
- Feature requests (#7396, #7405, #7406, #7404, #7397)
- Release duty tracking (#7394)

Looking at PRs:
- Version bump to 2.2.0b4 (#7423)
- Release notes for v2.2.0 (#7348)
- Security fixes (#7429, #7427, #7425)
- Bug fixes (#7415, #7413, #7409, #7421, #7401, #7414)
- Feature additions (#7163, #7133, #7416, #7372, #7383, #7422)

Let me organize this into a comprehensive daily report in Chinese, as the request was in Chinese.

I'll structure it according to the 8 sections requested. Let me make sure to:
1. Be objective and professional
2. Use data-driven insights
3. Highlight project health
4. Include GitHub links for each item

Let me write the report now.</think>

# QwenPaw 项目日报
**日期：2026-08-31**

---

## 1. 今日速览

QwenPaw 仓库今日继续保持高活跃度，过去 24 小时内共有 24 条 Issues 更新和 27 条 PRs 更新，但 **没有新版本发布**。社区关注点主要集中在 v2.2.0 beta 阶段的稳定性问题（Console 流式输出、shell 命令超时、MCP 重连阻断等）以及多个供应链/合规类安全议题。从 PR 节奏看，#7423 正在准备将版本号升至 **2.2.0b4**，配合 #7348 中的 v2.2.0 发布说明整理，预示着 beta 阶段进入收尾期。项目整体处于"密集修 bug + 安全治理 + 准备最终版本"的健康状态，但仍有若干 P0 级会话阻塞问题悬而未决。

---

## 2. 版本发布

⚠️ **今日无新版本发布**。但有两个版本相关的关键 PR 在活跃推进：

- **PR #7423** [chore: bump the version to 2.2.0b4](https://github.com/agentscope-ai/QwenPaw/pull/7423) — 准备将版本号升至 2.2.0b4，是当前 beta 系列的下一个小迭代。
- **PR #7348** [chore: the release notes for v2.2.0](https://github.com/agentscope-ai/QwenPaw/pull/7348) — 整理 v2.2.0 正式版发布说明（仍 OPEN 状态）。

关联追踪 Issue #7394 [Release Duty — QwenPaw v2.2.0-beta.3 Installation Verification](https://github.com/agentscope-ai/QwenPaw/issues/7394) 表明 beta.3 的安装验证仍在进行中。

---

## 3. 项目进展

今日 **6 条 PR 已关闭/合并**（24 小时内），多为安全合规和小幅修复：

| PR | 说明 | 影响 |
|---|---|---|
| [#7414](https://github.com/agentscope-ai/QwenPaw/pull/7414) | **pawapp 在 chat runtime 不可用时 fail-closed**（修 #7411） | 移除兜底合成响应，统一返回 `AGENT_CHAT_RUNTIME_UNAVAILABLE` 结构化错误；避免"假模型回复"误导调用方。 |
| [#7403](https://github.com/agentscope-ai/QwenPaw/pull/7403) | **README 更新**（first-time-contributor） | 文档类小修。 |
| 其他 4 条已关闭 PR | 多为下游分支清理或合并收尾 | — |

**今日尚未合并但进展显著的 OPEN PR：**

- [#7163](https://github.com/agentscope-ai/QwenPaw/pull/7163) `feat: refine session thinking and model management` — 引入 Session 级 thinking 模式（Off/Low/Medium/High）并持久化到 Chat Metadata，是产品体验方向的重要增强。
- [#7133](https://github.com/agentscope-ai/QwenPaw/pull/7133) `fix(memory): make embedding reindex explicit and scoped` — 升级 `reme-ai` 到 0.4.1.10，**重构向量空间切换流程**，避免误触自动全量重建。
- [#7372](https://github.com/agentscope-ai/QwenPaw/pull/7372) `fix(desktop): unify packaged Python runtime source` — Desktop 与内置 helper 统一使用同一套 pin 过的 python-build-standalone runtime（已 ready-for-human-review）。
- [#7383](https://github.com/agentscope-ai/QwenPaw/pull/7383) `fix(plugins): avoid full module sweep after each load` — 修复 Windows 桌面端启动期 `sys.modules` 暴力扫描问题（ready-for-human-review）。

整体看，**项目正稳步向 v2.2.0 GA 推进**，关键改进集中在内存/embedding、桌面启动性能、运行时错误处理三个方向。

---

## 4. 社区热点

按评论数排序的最活跃讨论（过去 24 小时更新）：

| 排名 | Issue/PR | 标题 | 评论数 | 关注点 |
|---|---|---|---|---|
| 1 | [#6608](https://github.com/agentscope-ai/QwenPaw/issues/6608) | Long-running shell commands bypass shell_command_timeout and block the feishu session indefinitely | **4** | **P0 级**：长任务孤儿子进程 + 缺通道级总超时 |
| 2 | [#7420](https://github.com/agentscope-ai/QwenPaw/issues/7420) | Tool results lost to agent + same command re-dispatched after write_file on 2.2.0-beta.1 | **4** | **回归类**：2.2.0b1 升级后单会话内 5 次卡死 |
| 3 | [#7408](https://github.com/agentscope-ai/QwenPaw/issues/7408) | feishu 通道配置被意外清空导致 cron 投递 KeyError | **3** | 配置持久化/原子性 |
| 4 | [#7402](https://github.com/agentscope-ai/QwenPaw/issues/7402) | Empty assistant output_text blocks poison every subsequent request (Ark Responses API) | **3** | Provider 层 session 损坏 |
| 5 | [#6822 (CLOSED)](https://github.com/agentscope-ai/QwenPaw/issues/6822) | streamable HTTP MCP 瞬断后永久阻断会话 | **3** | MCP 重连可靠性 |

**诉求分析：** 今日热点高度集中在"**会话完整性 (session integrity)**"上——任务超时配置不生效、配置丢失、消息漂移、provider 状态污染、MCP 重连卡死——反映出 v2.2.0 beta 用户在多通道、长时间运行场景下对稳定性的强烈诉求。

---

## 5. Bug 与稳定性

按严重程度排序：

### 🔴 P0 — 会话阻塞 / 不可恢复

1. **[#6608](https://github.com/agentscope-ai/QwenPaw/issues/6608)** — `execute_shell_command` 在 feishu 通道下阻塞 1.5 小时，用户后续消息全部排队。**根因**：取消时孤儿子进程未回收；缺通道级总超时。
   - **是否有 fix PR**：❌ 暂无（昨日评论 4 条，仍 OPEN）

2. **[#7420](https://github.com/agentscope-ai/QwenPaw/issues/7420)** — 2.2.0-beta.1 升级后单会话内 5 次卡死；tool 结果丢失触发 doom-loop 保护。**环境**：Windows 10 + Tauri built-in backend。
   - **是否有 fix PR**：❌ 暂无（评论 4 条，最新更新今日）

3. **[#6822 (CLOSED)](https://github.com/agentscope-ai/QwenPaw/issues/6822)** — streamable HTTP MCP 瞬断重连后永久阻断。**已关闭**（但需关注是否真正修复，关闭原因未明）。

### 🟠 P1 — 状态污染 / 错误恢复

4. **[#7402](https://github.com/agentscope-ai/QwenPaw/issues/7402)** — Volcengine Ark Responses API 下空 text block 污染 session 历史，所有后续请求 400。
   - **是否有 fix PR**：✅ **[#7409](https://github.com/agentscope-ai/QwenPaw/pull/7409)** `fix(agents): drop empty assistant text blocks`（OPEN，待合并）。

5. **[#7408](https://github.com/agentscope-ai/QwenPaw/issues/7408)** — feishu 通道配置被意外清空 (`enabled=false/app_id` 空)，cron 投递 `KeyError('channel not found: feishu')`。
   - **是否有 fix PR**：❌ 暂无

6. **[#7417](https://github.com/agentscope-ai/QwenPaw/issues/7417)** — Console 流中间出现大块重复文本 chunk，结束时又追加合并副本（2.2.0b3）。
   - **是否有 fix PR**：❌ 暂无

7. **[#7419 (CLOSED)](https://github.com/agentscope-ai/QwenPaw/issues/7419)** / **[#7418 (CLOSED)](https://github.com/agentscope-ai/QwenPaw/issues/7418)** — Step accordion 折叠范围过宽（包括与 tool call 交错的 assistant 文本）。**已关闭**，疑似标记 invalid。

### 🟡 P2 — 兼容性 / 配置

8. **[#7421](https://github.com/agentscope-ai/QwenPaw/pull/7421)** — Yuanbao protobuf 6+ 解码失败（`including_default_value_fields` 已废弃）。✅ **已有 fix PR #7421**（OPEN）。
9. **[#7401](https://github.com/agentscope-ai/QwenPaw/pull/7401)** — Windows ACP agent 在 workspace bootstrap 阶段事件循环冻结。✅ **已有 fix PR #7401**（OPEN）。
10. **[#7397](https://github.com/agentscope-ai/QwenPaw/issues/7397)** — Browser SDK 每次 `present()`/`open()` 都创建新 tab-group，无法共享。**2.2.0b3** 回归。
11. **[#6785 (CLOSED)](https://github.com/agentscope-ai/QwenPaw/issues/6785)** — Profile 类别硬编码官方 persona，自定义 .md 无法 toggle（回归）。**已关闭**。

**总结**：今日最值得维护者优先处理的 3 个 P0 都 **尚无对应 fix PR**，是 beta 收尾期的最大风险。

---

## 6. 功能请求与路线图信号

今日开放的功能/增强类议题：

| Issue | 标题 | 关联 PR | 进入下一版本可能性 |
|---|---|---|---|
| [#7396](https://github.com/agentscope-ai/QwenPaw/issues/7396) | Claude Code 作为第三方 agent harness 的状态与路线图？ | — | **高**：`harnesses/registry.py` 中已是占位项，社区呼声明确。 |
| [#7405](https://github.com/agentscope-ai/QwenPaw/issues/7405) | Plan Mode 回归诉求 | — | **中**：用户希望保留"先看模型计划再执行"的能力，与当前 mission/goal 模式互补。 |
| [#7404](https://github.com/agentscope-ai/QwenPaw/issues/7404) | DingTalk `card_auto_layout` 暴露到 Console 设置 | ✅ **[#7416](https://github.com/agentscope-ai/QwenPaw/pull/7416)**（OPEN） | **极高**：PR 已开，first-time-contributor 后端已支持，仅缺 UI 开关。 |
| [#7406](https://github.com/agentscope-ai/QwenPaw/issues/7406) | 官方主题/外观自定义（accent color / 字体 / 间距） | — | 中：Desktop 用户长期痛点，需架构层改动。 |
| [#7397](https://github.com/agentscope-ai/QwenPaw/issues/7397) | Browser SDK tab-group 共享 | — | 中：影响 Browser 扩展化路径。 |

另外，**Session 级 thinking 模式**（[#7163](https://github.com/agentscope-ai/QwenPaw/pull/7163)）若合并进 2.2.0，将是 GA 版本对"用户体验深度控制"能力的显著升级。

---

## 7. 用户反馈摘要

从 Issues 评论与摘要中提炼的真实痛点：

- **🔻 长任务体验**：feishu 通道下执行 shell 命令 1.5 小时无响应，用户只能重启 — 反映**通道级超时和取消语义**缺失是生产可用性的最大短板 [#6608](https://github.com/agentscope-ai/QwenPaw/issues/6608)。
- **🔻 Beta 升级回归**：从 2.1.0 → 2.2.0b1 后频繁遭遇 tool 结果丢失/doom-loop 触发 [#7420](https://github.com/agentscope-ai/QwenPaw/issues/7420)，用户开始质疑 beta 通道的稳定性保证。
- **🔻 配置丢失无感知**：feishu 配置被"静默清空"导致 cron 静默失败 [#7408](https://github.com/agentscope-ai/QwenPaw/issues/7408)，用户希望系统能在配置变更时主动告知或留有日志。
- **🔻 Provider 兼容脆弱**：Ark Responses API 下空 text block 直接导致整条 session 失效 [#7402](https://github.com/agentscope-ai/QwenPaw/issues/7402)，用户反映 QwenPaw 对"边界状态"的容错不足。
- **🔻 UI 折叠逻辑反直觉**：Step accordion 折叠不该折叠 assistant 文本 [#7419](https://github.com/agentscope-ai/QwenPaw/issues/7419)，说明 Console UI 状态机定义不够精细。
- **🔺 Plan Mode 怀念**：用户在升级后明确怀念"先看计划再执行"的交互 [#7405](https://github.com/agentscope-ai/QwenPaw/issues/7405)，认为 snapshot 回滚是被动兜底而非主动规划。
- **🔻 主题锁定**：Desktop 用户被迫"在 .app bundle 里改 index.html"才能换配色 [#7406](https://github.com/agentscope-ai/QwenPaw/issues/7406)，每次升级都会丢失。
- **🆕 安全响应积极**：今日由 [@guodaxia103](https://github.com/guodaxia103) 一连开出 4 个 Issue + 4 个对应 PR（涉及 glib 不安全、Pylint GPL 污染、Creator UI/官网 lockfile 漏洞），社区安全治理进入主动模式。

---

## 8. 待处理积压

以下重要 Issue/PR 已等待超过一周，需要维护者重点关注：

| 类型 | 编号 | 标题 | 等待时长 | 备注 |
|---|---|---|---|---|
| Bug | [#6608](https://github.com/agentscope-ai/QwenPaw/issues/6608) | Long-running shell commands block feishu session | **31 天** | 创建于 2026-07-31，今日仍活跃讨论 |
| Bug | [#6822](https://github.com/agentscope-ai/QwenPaw/issues/6822) | MCP 瞬断重连永久阻断（CLOSED，但需复查） | **23 天** | 已关闭，需确认是否有实际修复 |
| Bug | [#6785](https://github.com/agentscope-ai/QwenPaw/issues/6785) | Profile 自定义 persona toggle 回归（CLOSED） | **24 天** | 已关闭，需确认 |
| Feature PR | [#7163](https://github.com/agentscope-ai/QwenPaw/pull/7163) | Session thinking 模式（11 天） | 待 review | 与 v2.2.0 强相关 |
| Fix PR | [#7133](https://github.com/agentscope-ai/QwenPaw/pull/7133) | embedding reindex 重做（12 天） | 待 review | 关键内存子系统变更 |
| Fix PR | [#5097](https://github.com/agentscope-ai/QwenPaw/pull/5097) | Shield icon 居中（CSS 小修，81 天） | 超长积压 | 低风险但无人 review |
| Test PR | [#7021](https://github.com/agentscope-ai/QwenPaw/pull/7021) | TC-AGT-06 与当前 agent scope 对齐（17 天） | 待 review | 测试套件同步 |
| Doc | [#7348](https://github.com/agentscope-ai/QwenPaw/pull/7348) | v2.2.0 发布说明（4 天） | 待 review | GA 阻塞项之一 |

**风险提示**：P0 级别 Bug #6608 已等待 31 天仍未有对应 PR，是日报中**最严重的待处理积压**。建议维护者将其纳入 2.2.0b4 的 P0 必修复清单。

---

## 📊 健康度总评

| 维度 | 评分 | 备注 |
|---|---|---|
| 活跃度 | ⭐⭐⭐⭐⭐ | 51 条 issue/PR 更新，无冷场 |
| 稳定性 | ⭐⭐ | 3 个 P0 会话阻塞问题无 fix |
| 安全治理 | ⭐⭐⭐⭐⭐ | 4 个 CVE/GPL/不安全问题均有配套 PR |
| 发布节奏 | ⭐⭐⭐ | beta 收尾中，2.2.0b4 在路上 |
| 社区响应 | ⭐⭐⭐⭐ | 维护者当日对多个问题给出澄清/fix |
| 待办积

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/NousResearch/hermes-agent">NousResearch/hermes-agent</a></summary>

<think>The user wants me to generate a daily project report for Hermes Agent based on GitHub data from 2026-08-31. Let me analyze the data carefully and create a structured report in Chinese.

Let me organize the key information:

**Overall Stats:**
- 24h Issues: 50 (40 active, 10 closed)
- 24h PRs: 50 (45 open, 5 merged/closed)
- New releases: 0

**Top Issues by comments:**
1. #66616 - Skills index stale/degraded (127 comments) - automated probe failed
2. #25267 - Claude Agent SDK model provider with subscription OAuth (17 comments, 53 thumbs up)
3. #48098 - Desktop stale "Summarizing thread" status (8 comments) - CLOSED
4. #97681 - Bot Group Chats should keep working after Desktop closes (7 comments)
5. #73503 - codex_app_server context compression no-op (6 comments) - CLOSED
6. #94405 - Windows desktop boot-loops (5 comments) - P1
7. #73151 - macOS desktop shows two Dock icons (5 comments)
8. #96775 - Stalled preflight compression (5 comments) - CLOSED
9. #37421 - mem0 sync_turn silently drops long conversations (4 comments)
10. #98774 - run_tests.sh venv probe (4 comments)

**Closed PRs:**
- #99070 - fix(gateway): restore automatic codex threshold on live config sync (duplicate)

**Key Themes:**
1. Context compression issues are dominating (multiple P1 bugs)
2. Desktop app has many bugs (Windows boot-loops, macOS Dock icons, floating pet facing, image lightbox, TUI paste, /btw command)
3. Bot Group Chat functionality
4. Provider/config issues
5. Documentation/i18n (Indonesian)

**Important P1 bugs:**
- #94405 - Windows desktop boot-loops
- #96775 - Stalled preflight compression (CLOSED)
- #98722 - Continuous "Summarizing thread" loop
- #98450 - in-place compaction commit never stamps marker

**PR #95281 - pm: unified package manager** - this is a large architectural change

Let me structure the report now.

For the thinking block, I should provide detailed analysis. Let me write a comprehensive report in Chinese.</think>

# Hermes Agent 项目日报 · 2026-08-31

---

## 1. 今日速览

Hermes Agent 在过去 24 小时内仓库活跃度处于**高位运行**状态：Issues 端共产生 50 条更新（新开/活跃 40 条，已关闭 10 条），PR 端同样保持 50 条更新（待合并 45 条，已合并/关闭 5 条），且无新版本发布。讨论高度集中在**会话/压缩子系统**与**Desktop 客户端**两个方向：前者出现多条 P1 级 Bug（如 #98722、#98450、#96775），后者则持续暴露平台差异问题（Windows 启动循环、macOS Dock 双图标、Discord typing 卡死等）。值得关注的是，PR #95281 提出了一套"统一包管理器（pm）"的大型架构提案，可能影响后续打包/分发形态。整体看，**项目处于"密集修 Bug + 架构重构并行"的阶段**，稳定性优化优先级高于新功能交付。

---

## 2. 版本发布

**今日无新版本发布。**

---

## 3. 项目进展

今日 PR 侧净合并/关闭数量较少（仅 5 条），但议题覆盖面较广：

| 编号 | 类型 | 说明 | 状态 |
|------|------|------|------|
| [#99070](https://github.com/NousResearch/hermes-agent/pull/99070) | fix(gateway) | 恢复 live config sync 中 codex 自动阈值 | CLOSED（标记为 duplicate） |
| [#99119](https://github.com/NousResearch/hermes-agent/pull/99119) | fix(desktop) | Electron 会话点击前等待可见性 | OPEN（关联 #97982） |
| [#99107](https://github.com/NousResearch/hermes-agent/pull/99107) | fix(bot-mode) | 群聊副本在"接管围栏"完成前保持被动 | OPEN |
| [#99102](https://github.com/NousResearch/hermes-agent/pull/99102) | fix(providers) | 共享 resolver 中尊重 `enabled: false` | OPEN |
| [#99083](https://github.com/NousResearch/hermes-agent/pull/99083) | fix(gateway) | 阻止 delegation wakes 唤醒无关 API 会话 | OPEN |
| [#99108](https://github.com/NousResearch/hermes-agent/pull/99108) | fix(config) | 停止写入 `smart_model_routing.enabled` 死代码 | OPEN |
| [#99109](https://github.com/NousResearch/hermes-agent/pull/99109) | fix(checkpoint) | 原子化写入项目元数据 | OPEN |
| [#95281](https://github.com/NousResearch/hermes-agent/pull/95281) | **pm: unified package manager** | 把所有依赖统一为单一依赖树下的包，分三文件管理 | OPEN（架构级提案） |

**重点解读：** 除 #99070 之外，今日实际合并的"已完成"PR 几乎没有；多项关键修复仍处于审查/调整阶段。PR #95281 是一个重量级提案——把"包定义 / lock.json / 安装脚本"分别赋予单一权威来源，试图解决跨平台 wheels、依赖漂移等老问题（如 #84127 中 `cryptography` 在 macOS x86_64 上无 wheel）。如被接受，将显著改善 Desktop 安装/升级路径。

**国际化方面**稳步推进：#92192、#93632 两份 PR 为印尼语（`id`）补齐根文档三件套 + Docusaurus locale seed，隶属于更大的 #80392 i18n 计划。

---

## 4. 社区热点

按评论数与关注度排序的热点议题：

| 排名 | 编号 | 标题 | 评论 | 👍 | 链接 |
|------|------|------|------|------|------|
| 1 | [#66616](https://github.com/NousResearch/hermes-agent/issues/66616) | skills-index-watchdog 报告 Skills 索引陈旧 | **127** | 0 | [链接](https://github.com/NousResearch/hermes-agent/issues/66616) |
| 2 | [#25267](https://github.com/NousResearch/hermes-agent/issues/25267) | Claude Agent SDK model provider（订阅 OAuth） | 17 | **53** | [链接](https://github.com/NousResearch/hermes-agent/issues/25267) |
| 3 | [#48098](https://github.com/NousResearch/hermes-agent/issues/48098) | Desktop "Summarizing thread" 状态残留 | 8 | 0 | [链接](https://github.com/NousResearch/hermes-agent/issues/48098) |
| 4 | [#97681](https://github.com/NousResearch/hermes-agent/issues/97681) | Bot Group Chats 在 Desktop 关闭后应继续工作 | 7 | 0 | [链接](https://github.com/NousResearch/hermes-agent/issues/97681) |
| 5 | [#73503](https://github.com/NousResearch/hermes-agent/issues/73503) | codex_app_server 上下文压缩全链路 no-op | 6 | 0 | [链接](https://github.com/NousResearch/hermes-agent/issues/73503) |

**诉求分析：**
- **#66616（127 条评论）** 是当前社区最高热度议题，源于一个自动"新鲜度探针"——Skills Hub 的索引已 29.8h 超 26h 阈值，触发 degraded 告警。大量评论聚焦于文档构建/同步流水线的稳定性与对生态使用者的影响。
- **#25267（53 👍）** 拿到最高赞——用户希望把 Claude 作为后端模型但复用既有订阅，避免"订阅 + 按 token 计费双重付费"，属于典型的**生态整合痛点**，需求量大。
- **#97681** 反映了一个真实使用场景：用户希望把多个 Hermes Bot 放在同一群聊，Desktop 关闭后群聊仍能继续运转，这暴露了 Desktop 作为"协调中枢"的可靠性缺口。

---

## 5. Bug 与稳定性

按严重程度排列（今日报告/活跃）：

### 🔴 P1（严重，影响可用性）

| 编号 | 简述 | 状态 | 关联 PR |
|------|------|------|--------|
| [#94405](https://github.com/NousResearch/hermes-agent/issues/94405) | **Windows Desktop 启动循环**：spawned backend 可达，但 `/api/ws` 因 `HERMES_DASHBOARD_SESSION_TOKEN` 未注入而拒绝 WebSocket 升级 | OPEN | 无 |
| [#98722](https://github.com/NousResearch/hermes-agent/issues/98722) | **"Summarizing thread" 死循环**：陈旧压缩锁被回收 + 600s 无进展压缩，session 永不逃逸 | OPEN | 无 |
| [#98450](https://github.com/NousResearch/hermes-agent/issues/98450) | 原地压缩 commit 不盖 `_DB_PERSISTED_MARKER`，会话从 58K 反弹到 512K tokens | OPEN | 无 |

### 🟠 P2（功能/体验退化）

| 编号 | 简述 | 状态 |
|------|------|------|
| [#73503](https://github.com/NousResearch/hermes-agent/issues/73503) | `codex_app_server` 压缩每处都提前返回，唯一恢复手段是 `/reset` | CLOSED |
| [#96775](https://github.com/NousResearch/hermes-agent/issues/96775) | 预检压缩被打断后无持久退避，反复重入同一策略 | CLOSED |
| [#84371](https://github.com/NousResearch/hermes-agent/issues/84371) | codex_responses 上预检收费 full replay，但 tail-budget 把整 transcript 当尾巴，middle=0 死循环 | CLOSED |
| [#97488](https://github.com/NousResearch/hermes-agent/issues/97488) | Lean compaction 600s 超时遗留 detached workers 并误触发自动 reset | CLOSED |
| [#94405](https://github.com/NousResearch/hermes-agent/issues/94405) | Windows Desktop boot-loop | OPEN |
| [#87106](https://github.com/NousResearch/hermes-agent/issues/87106) | SSRF guard 把 VPN 下解析到 `198.18.0.0/15` 的公网 URL 也拒绝 | OPEN |
| [#99028](https://github.com/NousResearch/hermes-agent/issues/99028) | Profile-scoped gateway 错误执行 default profile 的 cron，且用自己的 bot token 投递 | OPEN |
| [#99032](https://github.com/NousResearch/hermes-agent/issues/99032) | TUI 提交时丢失 paste token，模型收到 `[[ N lines ]]` 占位符 | OPEN |
| [#84127](https://github.com/NousResearch/hermes-agent/issues/84127) | `hermes update` 在 macOS Intel 失败：cryptography 49/50 无 x86_64 wheels | OPEN |
| [#85427](https://github.com/NousResearch/hermes-agent/issues/85427) | Discord typing 双 owner 生命周期/清理竞态 | OPEN |
| [#99089](https://github.com/NousResearch/hermes-agent/issues/99089) | `resolve_provider_full()` 绕过 `providers.<name>.enabled: false` | OPEN；[#99102](https://github.com/NousResearch/hermes-agent/pull/99102) 已在路上 |
| [#99043](https://github.com/NousResearch/hermes-agent/issues/99043) | Real-profile 刷新不更新浏览器 storage，已认证 web app 状态丢失 | OPEN |

### 🟡 P3 / Desktop 体验类

- [#99086](https://github.com/NousResearch/hermes-agent/issues/99086) Desktop 浮动宠物永远朝外（`facing()` 取反）
- [#99066](https://github.com/NousResearch/hermes-agent/issues/99066) 图片灯箱对超高/高分辨率图像不可读
- [#99065](https://github.com/NousResearch/hermes-agent/issues/99065) `/btw` 命令在 Desktop 打印提示但永远不返回答案
- [#99033](https://github.com/NousResearch/hermes-agent/issues/99033) Desktop 下载链接声称 macOS 12+，但 12.7 实际无法运行
- [#97982](https://github.com/NousResearch/hermes-agent/issues/97982) js-tests 在 macOS runner 上 `scrollIntoView` 抖动；[#99119](https://github.com/NousResearch/hermes-agent/pull/99119) 提供确定性回归测试
- [#98926](https://github.com/NousResearch/hermes-agent/issues/98926) `title_generation` 在模糊开场消息上逐字复制 few-shot 示例
- [#98774](https://github.com/NousResearch/hermes-agent/issues/98774) `run_tests.sh` 仅 probe `pytest`，漂移 venv 误报 code failure
- [#37421](https://github.com/NousResearch/hermes-agent/issues/37421) `mem0.sync_turn` 在 `INPUT_TOKEN_LIMIT_EXCEEDED` 时静默丢数据

**总体观察：** 今日"压缩子系统"是 Bug 高发带（#98450、#98722、#73503、#96775、#84371、#97488），多条已 CLOSED 但仍可能存在回归窗口；Desktop 客户端问题零散、跨平台（Windows/macOS），缺乏统一的发布前回归矩阵。

---

## 6. 功能请求与路线图信号

| 编号 | 简述 | 信号强度 |
|------|------|----------|
| [#25267](https://github.com/NousResearch/hermes-agent/issues/25267) | **Claude Agent SDK + 订阅 OAuth 提供方**（Codex 风格） | ⭐⭐⭐⭐⭐（53 👍，订阅用户基数大） |
| [#53037](https://github.com/NousResearch/hermes-agent/issues/53037) | cron 任务创建时校验脚本文件存在 | ⭐⭐（避免静默失败） |
| [#95281](https://github.com/NousResearch/hermes-agent/pull/95281) | 统一包管理器（pm） | ⭐⭐⭐⭐（架构级提案，多平台分发根本性修复） |
| [#97681](https://github.com/NousResearch/hermes-agent/issues/97681) | Bot Group Chats 在 Desktop 关闭后仍工作 | ⭐⭐⭐（多 Bot 协作真实场景） |
| [#80392](https://github.com/NousResearch/hermes-agent/issues/80392) | 印尼语 i18n 文档套件 | ⭐⭐（通过 #92192/#93632 推进中） |

**纳入下一版本的概率评估：**
- **几乎确定**：#99102（provider enabled 语义）、#99108（清理死代码配置）、#99109（原子化元数据写入）—— 都是低风险、修复体验类。
- **较可能**：#99107（群聊副本被动化）、#99083（delegation wakes 隔离）、#95281（pm，若评审通过则可能进入 v0.21 系列）。
- **需要观察**：#25267（订阅 OAuth）依赖上游协议/计费政策，短期难以落地但需求强烈。

---

## 7. 用户反馈摘要

从 Issues 评论与摘要中提炼的真实使用场景与痛点：

- **订阅用户被双重付费**（#25267）：Claude 订阅 + Developer Platform API key 同时计费，用户希望"一个钱包走到底"。
- **Windows 安装/启动链路不稳**（#94405、#84127）：从 `cryptography` 无 wheel，到 spawn backend 漏传 `HERMES_DASHBOARD_SESSION_TOKEN`，Windows 用户安装体验明显弱于 macOS/Linux。
- **长会话的"压缩死循环"是高频痛点**（#98450、#98722、#73503、#96775、#84371、#97488）：多个用户在 deepseek-v4-flash、codex_responses、codex_app_server 等不同后端上都遇到"压缩像没发生过 / 卡 600 秒 / 死循环"等问题——意味着该子系统在不同 provider 路径上**普遍缺乏一致的端到端测试**。
- **Bot Group Chat 的"权威性"模糊**（#97681、#99107）：用户部署多 Bot 在同一群聊，Desktop 关闭即停摆；多副本可能"互相接管"，暴露了 takeover 协议不严密。
- **macOS Desktop 安装门控与实际兼容性不符**（#99033）：官方页面声称支持 macOS 12+，但实际 macOS 12.7 启动失败，挫败感强。
- **Discord 集成 typing 卡顿**（#85427）：双 owner 生命周期 + 取消/清理竞态是"系列 Bug"，说明该适配器在状态机层面需要重做。
- **Skills 文档陈旧**（#66616）：自动化探针的告警频率让社区对 Skills Hub 的可信度产生疑虑，需要观察维护方是否提高 cron 频率或补强 fallback。
- **桌面小细节**（#99086 浮动宠物朝向、#99066 图片灯箱缩放、#99065 `/btw` 无响应）：用户体验类问题持续累积，缺少系统化的 UX triage。

---

## 8. 待处理积压（提醒维护者关注）

| 编号 | 标题 | 风险点 |
|------|------|--------|
| [#66616](https://github.com/NousResearch/hermes-agent/issues/66616) | Skills 索引 stale/degraded | 已 44 天（自 2026-07-18 创建），127 条评论，自动化告警仍 degraded；生态入口可信度受损 |
| [#25267](https://github.com/NousResearch/hermes-agent/issues/25267) | Claude 订阅 OAuth 提供方 | 53 👍 但 2026-05-13 创建至今 110 天无明确进展表态 |
| [#48098](https://github.com/NousResearch/hermes-agent/issues/48098) | Desktop "Summarizing thread" 残留 | 已 CLOSED，但需确认 fix 是否覆盖同类 UI 状态机残留 |
| [#94405](https://github.com/NousResearch/hermes-agent/issues/94405) | **Windows Desktop 启动循环（P1）** | 自 2026-08-25 创建 6 天，仍 OPEN；Windows 用户实质上无法使用 Desktop |
| [#68499](https://github.com/NousResearch/hermes-agent/pull/68499) | fix(delegation)：把 lifecycle 与 task outcome 解耦 | 自 2026-07-21 创建 41 天，仍 OPEN；属于 blast-broad 风险 |
| [#921

</details>

<details>
<summary><strong>OpenHuman</strong> — <a href="https://github.com/tinyhumansai/openhuman">tinyhumansai/openhuman</a></summary>

<think>Let me analyze the GitHub data for OpenHuman (github.com/tinyhumansai/openhuman) for the daily report on 2026-08-31.

Key observations:
1. Issues: 0 updates in the past 24 hours (none opened/active, none closed)
2. PRs: 18 total updates, 2 still open, 16 merged/closed
3. No new releases
4. PRs created on 2026-08-30, with one on 2026-08-31

Key themes from the PRs:
- Major refactoring effort to extract modules into separate sub-crates (tinyflows, tinychannels, tinyconnectors, tinyagents)
- Removal of TinyPlace (a major feature removal)
- Module splitting in Rust codebase
- Dependency updates (tinybus v0.1.1)
- MCP tool glob support fix
- Per-turn TurnOverrides feature for agents
- Memory engine refactoring
- CI fixes
- Dead code removal (~950 lines frontend + 2.1k lines agent code + 7k lines flows)
- ElevenLabs STT API style fix (the one open PR from today)

Two open PRs:
- #5859 - chore: validate upstream main (draft validation PR)
- #5860 - fix(voice): map ElevenLabs default stt_api_style to elevenlabs (created today, 2026-08-31)

Most PRs are from @senamakel - showing a single developer driving the refactoring effort.

Priority breakdown of merged PRs:
- p0: 1 (#5854 - Composio catalogs removal)
- p1: 2 (#5849 - tinyconnectors integration, #5850 - MCP glob honor)
- p2: 1 (#5847 - TinyPlace removal)
- p3: 12 (various chore/refactor)

Let me structure this into the requested format.</think>

# OpenHuman 项目日报
**日期：2026-08-31**

---

## 1. 今日速览

OpenHuman 今日呈现**高活跃度集中重构期**的典型特征：过去 24 小时内 18 个 PR 更新中，16 个已合并/关闭，合并率达到 **88.9%**，效率较高。Issue 端完全静默（0 条新开/活跃），所有协作动力均来自 PR。绝大多数 PR 由 `@senamakel` 单人主导，明显是一场**架构精简与模块外移（module extraction）的系统性战役**：将 `tinyflows`、`tinychannels`、`tinyconnectors`、`tinyagents` 等子模块从主仓剥离，移除 TinyPlace 等遗留领域，并修复因重构暴露的 CI 与测试问题。项目无新版本发布，处于"主干重构—尚未打 tag"的中间态。

---

## 2. 版本发布

**无新版本发布**。当前主干处于密集合并阶段，重构涉及 `tinychannels`、`tinyflows`、`tinyconnectors`、`tinyagents` 等多个 vendored 子模块的依赖关系重排，预计短期内会触发一次较大的版本号变更（很可能伴随上游子仓同步发版）。

---

## 3. 项目进展

今日合并/关闭了 16 个 PR，是一次**大范围架构清理**。按优先级归纳如下：

### 🔴 P0（最高优先级，1 项）
- **[#5854](https://github.com/tinyhumansai/openhuman/pull/5854)** — 将 Composio 目录与 source registry 从 memory engine 摘除（[issue #5560](https://github.com/tinyhumansai/openhuman/issues/5560) 的一部分）。解耦 `tinymemory-core` 与 `tinycortex` 的不当耦合。

### 🟠 P1（2 项）
- **[#5849](https://github.com/tinyhumansai/openhuman/pull/5849)** — 从 `tinyconnectors` 接入 connector vocabulary 与 module，`tinyconnectors` v0.3.1 注册为可加载模块。
- **[#5850](https://github.com/tinyhumansai/openhuman/pull/5850)** *(by @theamazinghenk)* — **MCP**：使 `allowed_tools`/`disallowed_tools` 支持 glob 匹配。修复了 `tools_agent/agent.toml` 中 `disallowed_tools = ["tinyplace_*"]` 永不会触发的 bug。

### 🟡 P2（1 项）
- **[#5847](https://github.com/tinyhumansai/openhuman/pull/5847)** — **移除 TinyPlace**：从 core、SDK、vendored submodule、controllers、events、services、tools、payments、pairing 全链路删除。这是今日最大胆的取舍动作。

### 🟢 P3 / refactor / chore（12 项）
| PR | 关键动作 |
|---|---|
| [#5858](https://github.com/tinyhumansai/openhuman/pull/5858) | 刷新 16 个 vendored `tiny*` 模块指针，吸收上游发版 |
| [#5857](https://github.com/tinyhumansai/openhuman/pull/5857) | OpenHuman 模块拆分后保留源扫描测试，CI 布局闸支持 Windows |
| [#5856](https://github.com/tinyhumansai/openhuman/pull/5856) | Rust 单元测试拆分为兄弟 `*_tests.rs`，新增 CI 750 行布局闸 |
| [#5855](https://github.com/tinyhumansai/openhuman/pull/5855) | `tinybus` 升至 v0.1.1 |
| [#5852](https://github.com/tinyhumansai/openhuman/pull/5852) | **删除约 2.1k 行**重复 agent harness 代码，上游 3 个通用模块至 TinyAgents |
| [#5695](https://github.com/tinyhumansai/openhuman/pull/5695) | 新增 `memory` Cargo gate，剥离 6 个 inert surface |
| [#5846](https://github.com/tinyhumansai/openhuman/pull/5846) | **flows 重构**：将 ~7k 行 flows 代码搬至 `tinyflows` workspace，主仓仅保留 connectors |
| [#5851](https://github.com/tinyhumansai/openhuman/pull/5851) | `tinychannels` 变为可选，新增 `tinychannels-bus` 契约 crate |
| [#5853](https://github.com/tinyhumansai/openhuman/pull/5853) | **修复主干红**：修复 `Scripts Self-Tests` CI 失败 |
| [#5848](https://github.com/tinyhumansai/openhuman/pull/5848) | 从 `tinyconnectors` 接入 connector vocabulary |
| [#5845](https://github.com/tinyhumansai/openhuman/pull/5845) | **删除约 950 行**死前端代码，清理 6 个未用 npm 依赖 |
| [#5844](https://github.com/tinyhumansai/openhuman/pull/5844) | **新增特性**：`TurnOverrides`——单轮抑制 active goal / tools / memory / transcript autoload |

### 整体推进评估
项目在 24 小时内完成了一个**多面体的架构去耦**：
- 横向（域外移）：`flows`、`channels`、`connectors`、`agents` 全部向独立 workspace 收敛
- 纵向（域瘦身）：TinyPlace 整域被砍、frontend/agent 重复代码清理累计 **~10k+ 行被移除**
- 工程化加固：补齐 CI 布局闸、Windows 兼容性、test fixture 同步

---

## 4. 社区热点

由于 Issue 端完全静默，热度集中在 PR 评论区，但**所有 PR 评论数均为 `undefined`（即 0 条评论）**。今日**没有形成任何显性社区讨论**——这是一个"维护者驱动 + 社区旁观"的工作日。

仅有的两位外部贡献者声音：
- **[@theamazinghenk](https://github.com/theamazinghenk)** 提交了 [#5850](https://github.com/tinyhumansai/openhuman/pull/5850) MCP glob 修复，是除 `@senamakel` 外唯一有 PR 合入的作者。
- **[@AdityaThakur193](https://github.com/AdityaThakur193)** 提交了今日唯一的新 PR [#5860](https://github.com/tinyhumansai/openhuman/pull/5860)（仍 OPEN）。

诉求分析：两位外部贡献者都在处理"重构暴露的隐藏 bug"——这反映出模块拆分正在系统性地暴露出原先被掩盖的契约不一致问题，社区贡献正在**围绕重构尾巴**展开，而非新功能。

---

## 5. Bug 与稳定性

| 严重度 | 问题 | 状态 | PR |
|---|---|---|---|
| 🔴 P0 | Composio catalog 与 source registry 仍错误挂在 memory engine 上（设计性 bug） | ✅ 已修 | [#5854](https://github.com/tinyhumansai/openhuman/pull/5854) |
| 🟠 P1 | MCP `disallowed_tools = ["tinyplace_*"]` 永不会生效（glob 未被实现） | ✅ 已修 | [#5850](https://github.com/tinyhumansai/openhuman/pull/5850) |
| 🟠 P1 | 主干 `Scripts Self-Tests` 持续红，所有打开的 PR 都因此失败 | ✅ 已修（test-only 修复） | [#5853](https://github.com/tinyhumansai/openhuman/pull/5853) |
| 🟡 P2 | ElevenLabs STT 测试 fixture 使用了错误的 API style（mock 与生产 Rust 后端不一致，会打到 `/v1/audio/transcriptions` 而非 `/v1/speech-to-text`） | 🟡 待合并 | [#5860](https://github.com/tinyhumansai/openhuman/pull/5860) |
| 🟢 P3 | OpenHuman Rust 模块拆分后源扫描测试与 750 行布局闸在 Windows 上不可移植 | ✅ 已修 | [#5857](https://github.com/tinyhumansai/openhuman/pull/5857) |
| 🟢 P3 | 模块拆分后 inline test 与 `tests.rs`/`test.rs` 命名残留 | ✅ 已修（新增 CI 闸） | [#5856](https://github.com/tinyhumansai/openhuman/pull/5856) |

**稳定性评估**：今日高优先级 bug 全部 24 小时内闭环，仅余 1 个测试 fixture 类问题（#5860）等合并。CI 主干当前应已恢复绿色。

---

## 6. 功能请求与路线图信号

今日 Issue 端为空，**没有来自用户的功能请求**。但 PR 中可观察到两条明确的**路线图信号**：

1. **Per-turn 控制能力**（[#5844](https://github.com/tinyhumansai/openhuman/pull/5844)）—— 新增 `TurnOverrides`（一次性抑制 goal/tools/memory/transcript 自动加载），配合 `complete_for_current_turn`。这暗示项目正在强化 agent 的**细粒度编排 API**，便于上层构建如"一次性检索—执行—不污染历史"的工作流。

2. **Glob 模式工具过滤**（[#5850](https://github.com/tinyhumansai/openhuman/pull/5850)）—— MCP `allowed_tools`/`disallowed_tools` 支持 glob，意味着 agent 工具白名单将从"枚举式"过渡到"模式式"，对工具数量增长后的可维护性是显著改进。

3. **`memory` Cargo gate 与 inert surfaces**（[#5695](https://github.com/tinyhumansai/openhuman/pull/5695)）—— 项目在认真规划**逐步退役 `tinycortex`** 的路径。这是未来 1-2 个版本最值得关注的内部信号。

---

## 7. 用户反馈摘要

**Issue 端今日无任何用户反馈**。从 PR 摘要中可间接观察到用户/作者视角的痛点：

- **"测试维护跟不上重构速度"**：[#5853](https://github.com/tinyhumansai/openhuman/pull/5853) 反映 `Scripts Self-Tests` 中 function-extraction list 已经陈旧，作者承认"断言和 runner 都对，是测试本身没跟上"。说明重构过程产生了**测试与生产代码的契约漂移**风险。
- **"模块拆分导致 mock 与 Rust 后端契约不对齐"**：[#5860](https://github.com/tinyhumansai/openhuman/pull/5860) 暴露 `VoicePanel` 的测试 mock 与 Rust 后端 `SttApiStyle` enum 不一致。这类问题如不自动化检查，未来还会反复出现。
- **"安全策略形同虚设"**：[#5850](https://github.com/tinyhumansai/openhuman/pull/5850) 中 `disallowed_tools = ["tinyplace_*"]` 自定义但永不生效——说明**配置文件层面的安全声明缺乏端到端校验**，是个隐性信任风险。
- **"TinyPlace 全链路被砍"**（[#5847](https://github.com/tinyhumansai/openhuman/pull/5847)）：从 controllers、events、services、tools、payments、pairing 全部删除，说明这曾是**完整商业化路径**，但被战略放弃。无用户反对意见出现，需关注后续是否会有用户 issue 反弹。

---

## 8. 待处理积压

| 类型 | 编号 | 标题 | 创建时间 | 风险点 |
|---|---|---|---|---|
| PR | [#5859](https://github.com/tinyhumansai/openhuman/pull/5859) | chore: validate upstream main | 2026-08-30 | 草稿状态，纯验证用途，无交互需求 |
| PR | [#5860](https://github.com/tinyhumansai/openhuman/pull/5860) | fix(voice): ElevenLabs STT 默认 style 映射 | **2026-08-31** | 测试一致性 bug，建议尽快合并以避免分支漂移 |
| 隐性积压 | [#5560](https://github.com/tinyhumansai/openhuman/pull/5560) | memory engine 解耦父 issue | （长期） | 仅 #5854 一半完成，仍有 items 待迁移；`tinycortex` 退役路径依赖此 issue 全部闭环 |
| 隐性积压 | #5692 | （#5695 的依赖栈底） | 2026-08 早些 | `5695` 显式要求"先审 #5692"，意味着栈底 PR 可能尚未合入，导致 5695 当前 diff 含有 44 个无关提交 |

**提醒维护者**：
- #5860 优先级 p3 但属于"今天创建、今天就应回应"的快速反馈，单测修复类，建议 48 小时内合并。
- #5695 的栈依赖关系需要明示化，避免后续 review 阻塞。
- 整个 `tiny*` 模块外移链条（#5846/#5848/#5849/#5851/#5852/#5858）尚未配套**用户可见的迁移指南或 changelog**，建议下次发版前补齐。

---

### 📊 项目健康度看板

| 维度 | 评分 | 备注 |
|---|---|---|
| 合并效率 | ⭐⭐⭐⭐⭐ | 88.9% 合并率，CI 主干已恢复绿 |
| 架构清晰度 | ⭐⭐⭐⭐ | 大量模块外移，长期有利；短期 PR diff 巨大，review 难度高 |
| 社区参与 | ⭐⭐ | Issue 端为零，PR 几乎单人驱动 |
| 稳定性 | ⭐⭐⭐⭐ | 高优 bug 全部 24h 闭环 |
| 文档/迁移 | ⭐⭐ | 大量破坏性变更（TinyPlace 整域删除、模块拆分）缺对应指南 |
| 整体 | ⭐⭐⭐ | **技术债快速出清中，但用户感知层与维护者层之间存在断层** |

---

*报告基于 OpenHuman 公开 GitHub 数据生成，数据时间窗口：2026-08-30 ~ 2026-08-31。*

</details>

---
*本日报由 [Big Model Radar](https://github.com/96loveslife/big_model_radar) 自动生成。*
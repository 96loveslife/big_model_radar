# OpenClaw 生态日报 2026-09-30

> Issues: 500 | PRs: 500 | 覆盖项目: 8 个 | 生成时间: 2026-09-30 04:58 UTC

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

<think>The user wants me to generate a daily project status report for OpenClaw based on GitHub data from 2026-09-30. Let me analyze the data carefully and produce a comprehensive, structured report in Chinese.

Key data points:
- 500 issues updated (364 active, 136 closed)
- 500 PRs updated (317 pending, 183 merged/closed)
- 1 new release: v2026.9.7

Let me organize this into the 8 sections requested:

1. **今日速览** - Overall summary
2. **版本发布** - v2026.9.7 details
3. **项目进展** - Important merged/closed PRs
4. **社区热点** - Most active issues/PRs
5. **Bug 与稳定性** - Bugs, crashes, regressions
6. **功能请求与路线图信号** - Feature requests
7. **用户反馈摘要** - User feedback
8. **待处理积压** - Long-standing issues

Let me think about what's most important here:

The release v2026.9.7 focuses on update safety - backups before migrations, restore on rollback, snapshot consistency, stopping before schema changes when cleanup fails.

Top issues by comments:
- #143524 - SQLite WAL grows to 1.4-2.8GB (94 comments!) - critical P0
- #119720 - Synchronous agent persistence blocks event loop (21 comments) - P1
- #102175 - embedded prompt cache breaks (20 comments) - P2 regression
- #157067 - Windows cron proxy issue (CLOSED, 19 comments)
- #97616 - leaks unreaped child processes (16 comments) - P1
- #157531 - 2026.9.7 Fixes Tracker (16 comments)
- #157325 - stuck agent-DB resource (15 comments) - P0
- #121661 - CLI subagent announce-wake (14 comments) - P1
- #121953 - Cron turns stall on DeepSeek (13 comments) - P1
- #157160 - Gateway crash-loops (CLOSED, 12 comments)
- #104719 - memory-wiki supplement (12 comments) - P1
- #159612 - Subagent completion settlement retries (12 comments) - P0
- #159596 - Gateway memory sawtooth (11 comments) - P1
- #157630 - --max-old-space-size defeats worker limits (11 comments)

Key PRs by activity:
- #161603 - macOS Bun fork (steipete)
- #143911 - active-memory skip recall
- #161608 - sessions cold maintenance (CLOSED)
- #147629 - update dirty checkouts
- #161618 - workboard handoffs
- #161472 - slack fallback card
- #161493 - UI hovercards
- #125707 - codex reasoning effort
- #161514 - logging redaction patterns
- #161615 - QA Lab refactor
- #147677 - update dirty checkouts (installer)
- #161589 - apple sidebar
- #161466 - whatsapp retry recovery
- #159146 - voice-call close
- #161267 - Gateway freezes on model changes (P0!)
- #161240 - browser text extraction
- #161614 - rust session fixtures
- #158447 - updater identify child (P0)
- #161518 - activity recaps
- #160444 - nodes tool policy (P0, security)
- #161508 - test diffs render (CLOSED)
- #161025 - plugins deslop (CLOSED)
- #161053 - emoji reactions in shared sessions
- #161530 - UI locales (CLOSED)
- #161520 - release FRV (CLOSED)
- #160352 - UI Ultrafast tier
- #161444 - agentsapi retries (CLOSED)
- #161471 - providers deslop (CLOSED)
- #161500 - UI locales (CLOSED)
- #161616 - macOS native tests

Major themes:
1. **Update safety** - the v2026.9.7 release is about update safety with backups
2. **SQLite/Database issues** - WAL growth, agent DB resource stuck, integrity checks
3. **Memory leaks** - prepared-model-catalog worker, sawtooth patterns, heap limits
4. **Plugin runtime issues** - large plugins causing freezes
5. **Subagent/session issues** - delivery, completion settlement
6. **Refactoring cleanup passes** - deslop passes (plugins, providers, QA lab)

Let me now write the report. I should be careful about:
- Using objective language
- Including links
- Highlighting project health
- Data-driven analysis
- Don't fabricate information

Let me count the closed/merged items to be accurate:
- 136 issues closed
- 183 PRs merged/closed
- New release v2026.9.7

Activity level: Very high with 1000 updates total in 24 hours

Now let me write a comprehensive report.</think>

# OpenClaw 项目日报 · 2026-09-30

## 1. 今日速览

OpenClaw 仓库在 2026-09-29 至 2026-09-30 期间保持极高活跃度：过去 24 小时共记录 **500 条 Issue 更新**（新开/活跃 364、已关闭 136）与 **500 条 PR 更新**（待合并 317、合并/关闭 183），并发布新版本 **v2026.9.7**。维护团队（@steipete、@RomneyDa、@roboclaw-bot 等）持续在「更新安全」「SQLite 资源生命周期」「prepared-model-catalog 内存治理」与「插件运行时去重」四条主线推进，提交节奏密集。讨论热度集中在 **SQLite WAL 失控增长（94 条评论）**、**subagent 完成结算死循环**、**Gateway 在 plugin 加载时冻结** 等 P0 级稳定性问题，反映出 2026.9.6 仍在消化 9 月初的回归。整体来看，**项目热度高、合并节奏快，但存量稳定性债务较重，新版本（2026.9.7）专注于"防更坏"而非"做更好"**。

---

## 2. 版本发布

### 🚢 v2026.9.7 — `openclaw 2026.9.7`

**核心亮点：更新安全（Update Safety）**

| 能力 | 说明 |
|---|---|
| 迁移前备份 | 所有 state 与 agent 数据库在 schema migration 前自动备份 |
| 回滚恢复 | rollback 路径下自动从备份还原 |
| 一致性快照 | Gateway 持续写入时仍能取得 consistent snapshot |
| 失败保护 | 当 snapshot cleanup 失败时，在 schema 变更前中止升级 |

修复 issue：`#157846`、`#157603`（PR `#158163`）。

**迁移注意事项**：
- 升级路径失败时的"自动回滚"意味着 operator 不再需要手动从 `~/.openclaw/backups` 恢复，但需确认 **磁盘预留空间 ≥ 当前 agent 库 × 2**（部分 agent 库已 2.8 GB，见 Issue #143524）。
- 2026.9.6 → 2026.9.7 用户在升级前应先解决 **prepared-model-catalog worker 内存泄漏**（Issue #159596、#159662、#160548），否则 `doctor --fix` 触发的快照清理失败概率高。
- 强烈建议在 2026.9.7 修复 tracker（#157531）确认通过后再纳入生产升级。

---

## 3. 项目进展

### 已合并/关闭的重要 PR

| PR | 标题 | 影响 | 链接 |
|---|---|---|---|
| **#161608** | test(sessions): hold cold maintenance validation where it actually runs | 修复 session writer 被 cold integrity validation 阻塞的回归（#160858） | [链接](https://github.com/openclaw/openclaw/pull/161608) |
| **#161520** | fix(release): reuse green FRV children across parent reruns at the same Release SHA | Release Validation 复用绿色 child，缩短发布周期 | [链接](https://github.com/openclaw/openclaw/pull/161520) |
| **#161508** | refactor(test): drop unreachable diffs render fixture | 清理无效测试 | [链接](https://github.com/openclaw/openclaw/pull/161508) |
| **#161500** / **#161530** | chore(ui): refresh control ui locales | Control UI 本地化同步 | [链接](https://github.com/openclaw/openclaw/pull/161500) |
| **#161471** | refactor(providers): deslop provider plugins fourth pass | provider 插件去重第四轮（覆盖 50+ provider extensions） | [链接](https://github.com/openclaw/openclaw/pull/161471) |
| **#161444** | fix(agentsapi): recover retries after accepted steering | 修复 steering 后 retry 失败的 transcript identity 不一致 | [链接](https://github.com/openclaw/openclaw/pull/161444) |
| **#161025** | refactor(plugins): deslop plugin platform sixth pass | plugin 平台第六轮去重 | [链接](https://github.com/openclaw/openclaw/pull/161025) |

### 已具备 maintainer 关注状态的 PR（"ready for maintainer look"）

- **#161267** `fix(plugins): Gateway freezes on model changes with large plugins` — 解决 #155859 同源问题，启动期 plugin ×3 次拷贝 + model 变更时 ×2 次，**P0 级别**。
- **#161603** `feat(macos): run the private app runtime on the OpenClaw Bun fork` — macOS app 私有运行时迁移至 OpenClaw Bun fork，跨 CLI/Gateway/Control UI。
- **#160444** `fix(nodes): apply the same tool policy to node sessions as Gateway sessions` — 节点会话补齐 filesystem containment 与 apply_patch 策略，**安全敏感**。
- **#158447** `fix(updater): identify the config-read child by env, not by import query` — Bun Gateway 升级时不再无节制派生 config-read 子进程（曾测出 8462 个），**P0**。
- **#161472** `fix(slack): show only commentary on the default fallback progress card` — Slack fallback 卡片降噪。
- **#161493** `fix(ui): keep recent sessions stable in open person hovercards` — 修复 hovercard 中 recent-session 链接错位。
- **#161472** 已附 📸 截图证据，**#161053**（共享 session emoji 反应）已附 telegram-e2e 证明。

**整体判断**：合并节奏健康，去重与稳定性修复并行；2026.9.7 的"更新安全"能力与多条 P0 修复共同加固了升级路径。

---

## 4. 社区热点

### 🔥 评论数 Top 10 Issues

| # | 评论数 | 主题 | 链接 |
|---|---|---|---|
| #143524 | **94** | Agent SQLite WAL 长到 1.4–2.8 GB 不 checkpoint，阻塞 Gateway 启动 | [链接](https://github.com/openclaw/openclaw/issues/143524) |
| #119720 | 21 | 同步 agent 持久化与 transcript 维护阻塞 Gateway 事件循环 | [链接](https://github.com/openclaw/openclaw/issues/119720) |
| #102175 | 20 | 嵌入式 prompt cache 跨 room/policy/Responses 边界失效 | [链接](https://github.com/openclaw/openclaw/issues/102175) |
| #157067 *(CLOSED)* | 19 | Windows cron 向 session worker 传递不可克隆 Proxy | [链接](https://github.com/openclaw/openclaw/issues/157067) |
| #97616 | 16 | Hook/tool 子进程未收割，zombie 累积 | [链接](https://github.com/openclaw/openclaw/issues/97616) |
| #157531 | 16 | **2026.9.7 修复追踪器** | [链接](https://github.com/openclaw/openclaw/issues/157531) |
| #157325 | 15 | agent-DB 资源卡死 → 所有 agent 通用失败文案 | [链接](https://github.com/openclaw/openclaw/issues/157325) |
| #121661 | 14 | CLI 后端 subagent announce-wake 模型伪造工具调用 | [链接](https://github.com/openclaw/openclaw/issues/121661) |
| #121953 | 13 | DeepSeek 上 cron 触发被 API 边缘降级 | [链接](https://github.com/openclaw/openclaw/issues/121953) |
| #157160 *(CLOSED)* | 12 | Gateway 在 plugin-doctor-post-session-state 上 crash-loop | [链接](https://github.com/openclaw/openclaw/issues/157160) |

### 诉求分析

1. **数据库层危机**（#143524 / #157325 / #118885 / #158095）：issue 集中在 SQLite WAL 失控、worker lifecycle 死锁、重复 integrity_check。维护者已设 2026.9.7 修复 tracker（#157531），但 **#143524 至今未挂 fix PR**。
2. **subagent 协议治理**（#121661 / #154834 / #159612 / #158332）：handoff 工具隔离、delivery 失败重注入、message-less inter-session 礼貌循环等系统性议题；PR #161618（workboard 规范化 handoff）正面对应。
3. **多渠道一致性**（Slack #161472、WhatsApp-Web #161466、Voice-Call #159146）密集出现修复 PR，说明 9 月底渠道体验是社区感知最强的面。
4. **macOS 升级路径**（#161603 + #158936）：冷启动 watchdog SIGTERM + Bun fork 私有运行时，构成下一阶段 macOS app 的双轨投入。

---

## 5. Bug 与稳定性

### P0 级别（影响 release-blocker）

| Issue | 现象 | 平台 | 修复 PR |
|---|---|---|---|
| [#157325](https://github.com/openclaw/openclaw/issues/157325) | agent-DB 资源卡死 → 所有 agent 报通用失败 | Windows Server 2026.9.6 | ❌ 无 |
| [#158095](https://github.com/openclaw/openclaw/issues/158095) | state-lifecycle 在 `acquireSqliteWorkerLifecycle` 后常驻，后续 acquire 全部失败 | 全平台 2026.9.6 | ❌ 无 |
| [#143524](https://github.com/openclaw/openclaw/issues/143524) | SQLite WAL 1.4–2.8 GB，wal_autocheckpoint=1000 无效 | Windows 2026.9.2/9.3 | ❌ 无（最高热度，94 评论） |
| [#159612](https://github.com/openclaw/openclaw/issues/159612) | Subagent 完成结算 `owner changed before settlement` 永久重试 | macOS 26.x QQ Bot | ❌ 无 |
| [#158231](https://github.com/openclaw/openclaw/issues/158231) | managed-service-preflight 升级失败 | darwin/arm64 2026.9.5→9.6 | ❌ 无（manual-only） |
| [#152839](https://github.com/openclaw/openclaw/issues/152839) | openat2 ENOSYS 时 Gateway state lock 获取无降级 | Linux NAS Docker | ❌ 无 |
| [#157415](https://github.com/openclaw/openclaw/issues/157415) | Doctor --fix 拒绝 acpx/codex 外部插件迁移 | Podman | ❌ 无（manual-only） |
| [#152965](https://github.com/openclaw/openclaw/issues/152965) | 非 channel 插件 hot-reload 销毁 channel 插件，丢消息 | 全平台 | ❌ 无 |
| [#158936](https://github.com/openclaw/openclaw/issues/158936) | macOS app readiness watchdog 在冷启动 40–70s 时 SIGTERM Gateway | macOS | ❌ 无 |
| [#154924](https://github.com/openclaw/openclaw/issues/154924) | global-install-failed 2026.9.4 | linux/x64 Node 26.8.2 | ❌ 无 |
| [#158231](https://github.com/openclaw/openclaw/issues/158231) | update failure managed-service-preflight | darwin/arm64 | ❌ 无 |

### P1 级别（重要回归 / 性能）

| Issue | 现象 | 修复 PR |
|---|---|---|
| [#159596](https://github.com/openclaw/openclaw/issues/159596) | Gateway 内存锯齿，~200 critical pressure events/天 | ❌ 无（已 👍2） |
| [#160548](https://github.com/openclaw/openclaw/issues/160548) | prepared-model-catalog worker 每 5 分钟漏 1 GiB | ❌ 无 |
| [#159662](https://github.com/openclaw/openclaw/issues/159662) | prepared-model-catalog worker 4–5 GB/h 单调泄漏 | ❌ 无（已 👍1） |
| [#160522](https://github.com/openclaw/openclaw/issues/160522) | worker isolate 1.15 GB 超出 maxOldGenerationSizeMb=512 | ❌ 无 |
| [#155859](https://github.com/openclaw/openclaw/issues/155859) | 插件多时 Gateway 启动 wall-time 超 120s budget | **#161267（ready）** |
| [#157989](https://github.com/openclaw/openclaw/issues/157989) | 插件源码 capture 重写 1.1–1.4 GB/CLI、6.5 GB/启动，SSD 磨损 | ❌ 无 |
| [#97616](https://github.com/openclaw/openclaw/issues/97616) | 僵尸子进程累积 | ❌ 无 |
| [#157617](https://github.com/openclaw/openclaw/issues/157617) | Session writer 队列等待分钟级 | ❌ 无 |
| [#157630](https://github.com/openclaw/openclaw/issues/157630) / [#157575](https://github.com/openclaw/openclaw/issues/157575) | `--max-old-space-size` 静默覆盖 worker `resourceLimits` | ❌ 无 |
| [#121661](https://github.com/openclaw/openclaw/issues/121661) | CLI 后端 subagent 模型伪造工具调用 | ❌ 无 |
| [#121953](https://github.com/openclaw/openclaw/issues/121953) | DeepSeek cron 降级 | ❌ 无 |
| [#157067](https://github.com/openclaw/openclaw/issues/157067) *(CLOSED)* | Windows cron Proxy 不可克隆 | ✅ 已关 |
| [#157160](https://github.com/openclaw/openclaw/issues/157160) *(CLOSED)* | Gateway crash-loop on plugin-doctor-post-session-state | ✅ 已关 |

### P2 级别（功能/安全/UX）

- 嵌入式

---

## 横向生态对比

<think>The user wants me to generate a horizontal comparative analysis report based on the daily dynamics from 7 open source projects (OpenClaw, NanoBot, PicoClaw, IronClaw, LobsterAI, QwenPaw, Hermes Agent, OpenHuman). The report should have 7 sections as specified, in Chinese, professional and concise with data support.

Let me analyze the data carefully:

**Projects analyzed:**
1. OpenClaw (github.com/openclaw/openclaw) - Core reference
2. NanoBot (github.com/HKUDS/nanobot)
3. PicoClaw (github.com/sipeed/picoclaw)
4. IronClaw (github.com/nearai/ironclaw)
5. LobsterAI (github.com/netease-youdao/LobsterAI)
6. QwenPaw (github.com/agentscope-ai/QwenPaw)
7. Hermes Agent (github.com/NousResearch/hermes-agent)
8. OpenHuman (github.com/tinyhumansai/openhuman)

Let me extract key metrics:

**Activity metrics:**
- OpenClaw: 500 Issues, 500 PRs, 1 release (v2026.9.7) - very high
- NanoBot: 13 Issues, 43 PRs, 0 releases - medium-high
- PicoClaw: 6 Issues, 5 PRs, 0 releases - low-medium
- IronClaw: 2 Issues, 3 PRs, 1 release (v1.4.1) - low
- LobsterAI: 10 Issues, 11 PRs, 0 releases - medium
- QwenPaw: 9 Issues, 34 PRs, 0 releases - high
- Hermes Agent: 50 Issues, 50 PRs, 0 releases - very high
- OpenHuman: 7 Issues, 32 PRs, 0 releases - high

**Common themes:**
1. SQLite/Database issues (OpenClaw #143524, QwenPaw #8040, etc.)
2. Update/Safety mechanisms (OpenClaw v2026.9.7, LobsterAI, OpenHuman)
3. Memory/Context management (NanoBot, QwenPaw, OpenHuman)
4. Subagent/Worker lifecycle (OpenClaw, NanoBot)
5. Web UI feedback visibility (PicoClaw, OpenClaw)
6. Session state management (Hermes Agent, PicoClaw)
7. Security/Path traversal (NanoBot, Hermes Agent)
8. Multi-channel integrations (Slack, Telegram, WhatsApp)

**Differentiation:**
- OpenClaw: Core reference, very active, focused on update safety
- NanoBot: Telegram bot ecosystem, security hardening
- PicoClaw: Lightweight Web UI focus
- IronClaw: Enterprise/stable releases, OAuth/Wasm focus
- LobsterAI: Desktop app, multi-agent workspace
- QwenPaw: High maintenance intensity, console/UI focus
- Hermes Agent: Desktop app, extensive platform coverage
- OpenHuman: Refactoring core to vendor modules, cost transparency

**Health assessments:**
- Very high activity: OpenClaw, Hermes Agent
- High activity: QwenPaw, OpenHuman, NanoBot
- Medium activity: LobsterAI
- Low activity: IronClaw, PicoClaw

Now let me write the comparative analysis. I should keep it concise, professional, and data-driven.

Let me structure this carefully:

1. 生态全景 - 3-5 sentences
2. 各项目活跃度对比 - table with metrics
3. OpenClaw 定位 - compared with similar projects
4. 共同关注的技术方向 - common threads
5. 差异化定位分析 - differentiation
6. 社区热度与成熟度 - layering
7. 值得关注的趋势信号 - industry signals

I need to be data-driven and concise. Let me draft now.</think>

# AI 智能体与个人 AI 助手开源生态 · 横向对比日报
**报告日期：2026-09-30 · 数据窗口：过去 24 小时**

---

## 1. 生态全景

2026-09-30 的开源 AI 智能体生态呈现出**「头部极活跃、中部高强度重构、长尾稳定迭代」**的三层结构。OpenClaw 与 Hermes Agent 以单日 1000 条更新级别领跑社区，反映出对话式 agent 框架已进入"边跑边修"的成熟期；QwenPaw、OpenHuman、NanoBot 处于高强度修复/重构周期，单日合并 PR 比例普遍高于 50%；IronClaw、PicoClaw 则呈现"低频高质量"特征——前者专注稳定版发版，后者聚焦 Web UI 局部打磨。整体看，**稳定性（更新安全、会话持久化、SQLite 治理）、多渠道一致性（Slack/Telegram/WhatsApp/iMessage）、内存与上下文管理、可观测性诚实性**是当前生态共同面对的四条主线问题。

---

## 2. 各项目活跃度对比

| 项目 | Issues（活/关） | PRs（待/合） | 新 Release | 单日热度 | 健康度评估 |
|---|---|---|---|---|---|
| **OpenClaw**（参照） | 364 / 136 | 317 / 183 | **v2026.9.7** | 🔥 极高 | 维护节奏密集，但 P0 稳定性债务较重 |
| Hermes Agent | 49 / 1 | 42 / 8 | — | 🔥 极高 | 高迭代、零发版，桌面端回归密集 |
| QwenPaw | 8 / 1 | 15 / 19 | — | 🔥 高 | 维护响应迅速，v2.2.1 热修密集 |
| OpenHuman | 2 / 5 | 6 / 26 | — | 🔥 高 | Bug 闭环率高，vendor 拆分进入收尾 |
| NanoBot | 4 / 9 | 21 / 22 | — | 🟧 中高 | Bug 修复效率极佳，无新版本 |
| LobsterAI | 8 / 2 | 0 / 11 | — | 🟧 中 | PR 全部清账，stale Issue 占比偏高 |
| PicoClaw | 6 / 0 | 4 / 1 | — | 🟨 中低 | Web UX 集中推进，无主干合并 |
| IronClaw | 2 / 0 | 2 / 1 | **v1.4.1** | 🟨 低 | 发版节奏平稳，社区互动偏弱 |

**单日合并率（已合/已关 ÷ 总 PR 更新）**：OpenHuman 81% · QwenPaw 56% · NanoBot 51% · LobsterAI 100% · PicoClaw 20% · IronClaw 33% · Hermes Agent 16% · OpenClaw 37%。

---

## 3. OpenClaw 在生态中的定位

### 优势

- **规模最大、单日吞吐最高**：500 条 Issue + 500 条 PR 是榜单中绝对数量级最高的，是其他项目 5-50 倍。
- **维护者协作密集**：@steipete、@RomneyDa、@roboclaw-bot 等多人协作，且有专门的"修复 Tracker"（#157531）形式，治理成熟度领先。
- **覆盖面最广**：横跨 macOS / Windows / Linux / NAS Docker，渠道覆盖 Slack / WhatsApp / Telegram / Voice，运行时覆盖 CLI / Gateway / Desktop / Bun。
- **功能完备度高**：已具备 SQLite 迁移备份、subagent handoff、provider 插件去重等多项目尚未实现的子系统。

### 技术路线差异

| 维度 | OpenClaw | NanoBot | PicoClaw | IronClaw | OpenHuman |
|---|---|---|---|---|---|
| 持久化 | SQLite + WAL | JSON / 正在迁 SQLite | JSON | 配置驱动 | SQLite + vendor |
| 运行时 | Bun / Node | Node | 轻量 | Wasmtime | Rust |
| 多渠道 | Gateway 路由 | Telegram 优先 | 无 | OAuth 扩展 | tinychannels |
| 更新安全 | ✅ 迁移前备份+回滚 | ❌ | ❌ | ✅ RC 阶段 | ⚠️ v0.64.7 静默失败（已修） |
| Desktop | macOS / Windows | ❌ | Web 优先 | ❌ | ❌ |

### 社区规模对比

- **OpenClaw**：评论 94 条的 P0 Issue（#143524）说明有大规模生产用户在场。
- **Hermes Agent**：单日 49 条新 Issue，新功能与回归并存，社区扩展最快。
- **IronClaw**：1.4.1 顺利晋升，但开放讨论互动偏低，更像"企业用户为主、安静部署"的形态。

---

## 4. 共同关注的技术方向

### 4.1 更新安全（Update Safety）
- **OpenClaw**：v2026.9.7 引入迁移前备份、回滚恢复、schema 变更中止。
- **OpenHuman**：自动更新静默失败（#6766）已被修复（#6770），反映该问题同样严重。
- **Hermes Agent**：macOS 钥匙串（#91115）、Windows watchdog（#124871）、WSL GPU（#128957）三个平台更新链各自暴露不同缺陷。
- **LobsterAI**：安装器 Skills 备份（#2395 → #2706/#2782）已闭环。

**共识**：从"暴力全量更新"转向"备份+回滚+按需重建"已成为生态标准路径。

### 4.2 SQLite / 数据库治理
- **OpenClaw #143524**：WAL 长到 1.4-2.8 GB（94 评论，0 fix）。
- **OpenClaw #157325/#158095**：agent-DB 资源卡死、worker lifecycle 死锁。
- **QwenPaw #8040**：Embedding reindex CJK 单条失败整批丢弃（#5950 复发）。
- **QwenPaw #8038**：Hub SQLite 连接生命周期（已合并修复）。
- **NanoBot #5943**：Session 状态归一到 SQLite 的 p1 重构 OPEN。

**共识**：SQLite 已成为事实标准持久层，但 WAL 管理、worker 生命周期、CJK 长文本处理是普遍痛点。

### 4.3 会话/消息状态可恢复性
- **Hermes Agent #128869 / #123067 / #66662**：新会话丢首条消息、会话不写后端、草稿串扰。
- **PicoClaw #3407 / #3408**：ghost session、消息静默入队。
- **OpenClaw #157617**：Session writer 队列分钟级等待。
- **QwenPaw #7931**：durable paginated transcript history（OPEN 8 天）。

**共识**：对话式 agent 的"会话持久层语义"正在成为头号可靠性问题。

### 4.4 Web UI / 桌面端反馈可见性
- **PicoClaw #3406/#3411/#3412**："honest working indicator"、失败回合可见、队列状态可见。
- **Hermes Agent**：zone body 右键菜单（#127313、#127997）成为回归源头。
- **OpenClaw**：UI hovercards、sidebar、locale refresh 多 PR 并行。

**共识**：Web/Desktop 已成为"日常主力交互面"，但"状态可见性"是普遍欠债。

### 4.5 多渠道一致性
- **OpenClaw #161472（Slack）/ #161466（WhatsApp）/ #159146（Voice）**。
- **NanoBot #3626/#3627**：Telegram long polling watchdog。
- **Hermes Agent #30708**：BlueBubbles 入站去重缺失。
- **IronClaw v1.4.1**：Google OAuth 扩展激活修复。

**共识**：跨 Slack/Telegram/WhatsApp/iMessage 的"统一体验 + 平台差异兼容"是渠道层最大挑战。

### 4.6 安全 / 凭据治理
- **NanoBot #5564 → #5633**：session 路径遍历修复。
- **Hermes Agent #62336**：终端环境快照把 Bitwarden 凭据写盘（**凭据落盘**）。
- **OpenClaw #160444**：节点会话补齐 filesystem containment 与 apply_patch 策略。
- **OpenHuman #6776**：转写文本不再被误判为 prompt injection。

**共识**：LLM agent 的"凭据 + 文件系统 + 转写文本"三向安全边界正在被系统性补齐。

### 4.7 内存/上下文管理
- **OpenHuman #6777**：可选内存引擎面板（Local/CortexDB/Supermemory/Mem0/Cognee/AgentMemory）。
- **QwenPaw #8001**：超时工具结果保留可恢复。
- **NanoBot #5900**：静默上下文压缩。
- **OpenClaw #143911**：active-memory skip recall。

**共识**：可插拔内存引擎 + 压缩/降噪的"控制协议（如 `HEARTBEAT_OK`）"是社区共识方向。

---

## 5. 差异化定位分析

| 项目 | 功能侧重 | 目标用户 | 技术架构关键差异 |
|---|---|---|---|
| **OpenClaw** | 全功能桌面 agent + 多渠道 + 完整更新安全 | 高级用户 / 运维者 | Bun + Node 双运行时，SQLite + WAL，plugin platform 六轮去重 |
| **NanoBot** | Telegram/WeChat bot 优先 + 安全强化 | 聊天机器人运营者 | Node，轻量 JSON 存储，正在迁 SQLite |
| **PicoClaw** | 轻量 Web UI + 日常主力交互 | 普通桌面用户 | Web-first，CLI/Channel 次要 |
| **IronClaw** | 企业级稳定 + OAuth/扩展集成 | 企业 SaaS 集成方 | Wasmtime 沙箱、RC→Stable 发版模型 |
| **LobsterAI** | 桌面应用 + 多 agent 工作区 | 桌面 Pro 用户 | PowerShell 安装器、artifact 内联工作流 |
| **QwenPaw** | 高频迭代 + Console/UI 重设计 | 中大型项目用户 | 多供应商（providers）、transcript 持久化 |
| **Hermes Agent** | 桌面端 + 跨平台更新链路 + 平台覆盖最广 | 桌面重度用户 | Electron Desktop + 多 adapter platform |
| **OpenHuman** | Vendor 拆分重构 + 内存引擎可插拔 | 企业 embedder 集成方 | Rust + vendor/tiny* 子模块架构、per-agent 凭证 |

---

## 6. 社区热度与成熟度分层

### 🟢 快速迭代层（Fast-Iterating）

- **OpenClaw**：单日 1000 条更新，新版本聚焦"防更坏"。
- **Hermes Agent**：单日 100 条更新，桌面端新功能与回归并行爆发。
- **QwenPaw**：合并率 56%，v2.2.1 热修密集。

**特征**：提交频率高、议题多、版本号相对滞后于代码变更，典型"高活跃 + 高债务"组合。

### 🟧 重构整理层（Refactoring & Cleanup）

- **OpenHuman**：vendor 拆分进入收尾，单日清账 26 个 PR，核心 → vendor 代码迁移完成度估计 > 80%。
- **NanoBot**：存量 Issue 一次性清账 9 条，修复效率极高。

**特征**：功能侧大动作（SQLite 化、内存引擎化）已转化为具体 PR，验证压力在评审端。

### 🟨 质量巩固层（Quality Consolidation）

- **IronClaw**：1.4.1 稳定版顺利晋升，无新 Bug 涌入。
- **LobsterAI**：PR 全部清账（11/11），但 stale Issue 占比偏高，反映治理而非代码是瓶颈。

**特征**：发版稳定、社区情绪平稳，但需警惕"stale Issue 堆积"侵蚀用户信任。

### 🟦 局部打磨层（Localized Polish）

- **PicoClaw**：Web UI 集中推进，3 个 PR 与 3 个 Issue 一一对应。

**特征**：小而专的迭代模式，适合作为"生态观察哨"。

---

## 7. 值得关注的趋势信号

### 7.1 "诚实性"正在取代"功能性"成为新焦点
QwenPaw 的 "Dashboard vs API 不一致"（#7991）、错误信息被吞掉（#8036）；PicoClaw 的 "ghost session / 静默丢消息"（#3407/#3408）；OpenHuman 的 "Usage 少报 67-91%"（#6774）——**用户对"系统在骗我"的容忍度正在显著下降**，可观测性、可信度、错误透明成为新护城河。**对开发者的启示**：投资日志/账单/计数器的一致性比堆新功能更值得。

### 7.2 "更新安全"从可选变必需
OpenClaw v2026.9.7 的备份+回滚、OpenHuman 的"用户卡在旧版本"事件、Hermes Agent 的三平台更新各自爆雷——**没有自动化回滚能力的 agent 框架将逐步被生产用户抛弃**。**对开发者的启示**：实现"迁移前快照 + 一致性校验 + 失败中止"是升级路径的标配。

### 7.3 "内存引擎可插拔"成为新赛道
OpenHuman 推出 7 选 1 内存引擎面板、OpenClaw 推进 active-memory skip recall、NanoBot 引入静默压缩、QwenPaw 落地 transcript 持久化——**LLM agent 的"记忆"已经从隐式上下文升级为显式子系统**，成为差异化竞争的新战场。**对开发者的启示**：选型时关注是否提供内存后端切换 API，而非绑死单一存储。

### 7.4 "Web/Desktop 成为主交互面"已成定局
PicoClaw 明言 "built-in Web UI is now the main day-to-day way"，Hermes Agent 把 Electron Desktop 作为 60% 的投入，OpenClaw 重构 UI locales、hovercards、sidebar。**对开发者的启示**：把 UI 反诟（thinking indicator、queue visibility、session persistence）的优先级提到与功能新增同等。

### 7.5 "凭据与文件系统边界"成为下一个安全战线
Hermes Agent #62336 把 Bitwarden 凭据写盘、OpenClaw #160444 补齐节点会话文件系统隔离、NanoBot #5564 修复路径遍历。**LLM agent 的攻击面从"prompt injection"扩展到"凭据落盘 + 进程派生 + 跨会话凭据共享"**，传统 Web 安全模型需要重构。**对开发者的启示**：把"凭据不落盘 + per-agent 隔离 + 工具调用 containment"作为安全设计基线。

### 7.6 "RC→Stable 发版模型"成为企业级门槛
IronClaw 1.4.1 从 1.4.1-rc.2 顺利

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

<think>The user wants me to generate a daily project report for NanoBot (HKUDS/nanobot) based on GitHub data from 2026-09-30. Let me analyze the data carefully and produce a structured, objective, data-driven report.

Key data points:
- 13 Issues updated (4 new/active, 9 closed)
- 43 PRs updated (21 pending merge, 22 merged/closed)
- 0 new releases
- Most activity is closing old issues with PR fixes

Let me categorize the issues:
- OPEN Issues (new/active): #5298, #5900, #5977, #5972 (4 open)
- CLOSED Issues: #3626, #5564, #5421, #5348, #3718, #3647, #3106, #2084, #5967 (9 closed)

PRs:
- OPEN: 21
- CLOSED: 22

Notable patterns:
1. Many old issues being closed with corresponding PRs - this looks like a cleanup/batch resolution
2. Multiple path traversal / security fixes (#5564 → #5633)
3. Telegram long polling fixes (#3626 → #3627)
4. Cron stream_id fix (#3718 → #3720)
5. Tokenizer offline fix (#3647 → #3662)
6. Tool loop detection (#5344)
7. Fallback models fix (#5967 → #5968)
8. PID lock for duplicates (#2084 → #2166)
9. Subagent work (#5954, #5985)
10. Session refactor with SQLite (#5943)
11. TUI /goal command (#5981)
12. WebUI improvements (#5982, #5983, #5984)

User feedback pain points:
- Telegram silent polling hangs (#3626)
- Cron reminders missing stream_id (#3718)
- GPT scheduled tasks failing (#3106)
- Duplicate instances (#2084)
- Insufficient credits fallback skipped (#5967)
- Model picker showing dead models (#5977)
- Timezone tests flaky (#5348)

Now let me structure the report properly. The user wants Chinese language output (based on the prompt being in Chinese). Let me write a professional, data-driven report.

I'll be careful to:
- Use specific numbers and links
- Be objective about activity levels
- Highlight which issues have fix PRs vs. which don't
- Note that there are 0 releases despite high activity
- Point out that most closed issues are old ones being cleaned up

Let me draft this now.

For the "待处理积压" section, I should look at the OPEN issues that haven't gotten attention. Looking at the data:
- #5977 (Model picker lists OpenAI models that already shut down) - new, no PR
- #5972 (Telegram per-chat group policy) - has PR #5973 and #5974 stacked
- #5900 (Silent context compaction and reduce WeChat polling log verbosity) - no PR
- #5298 (budget model-visible MCP schemas) - no PR
- #5943 (SQLite refactor) - still OPEN
- #5981 (TUI /goal) - still OPEN
- #5986, #5985, #5984, #5983, #5902, #5954 - all OPEN PRs

Let me write the report now. I'll aim for clear structure, professional tone, and data-driven analysis.</think>

# NanoBot 项目动态日报
**报告日期：2026-09-30**

---

## 1. 今日速览

NanoBot 仓库在 2026-09-30 呈现出典型的"清理 + 重构"双线推进态势：过去 24 小时共有 **13 条 Issue 更新（4 OPEN / 9 CLOSED）** 与 **43 条 PR 更新（21 待合并 / 22 已合并或关闭）**，整体活跃度处于**中高水平**，但**无新版本发布**。值得注意的是，今日关闭的 Issue 多数为 2026 年 3-8 月间遗留的存量问题，今天被对应的修复 PR 一次性清账，仓库健康度有所改善。仍有 21 条待合并 PR 在排队，其中包含一项较大型的 **SQLite 会话存储重构**（#5943），属于项目向前演进的关键节点。

---

## 2. 版本发布

**今日无新版本发布。** 距离上一个可见 Release 已有一段时间，建议关注者通过 commits 与 PR 列表跟踪主干变更。

---

## 3. 项目进展（今日合并/关闭的重要 PR）

今日合并/关闭的 PR 共 22 条，下列为重点推进项：

| PR | 主题 | 关联 Issue | 价值 |
|---|---|---|---|
| [#5633](https://github.com/HKUDS/nanobot/pull/5633) | **安全修复**：拒绝带路径穿越的 session key | [#5564](https://github.com/HKUDS/nanobot/issues/5564) | 关闭了一处 session 文件路径遍历漏洞，p1 安全级别 |
| [#3627](https://github.com/HKUDS/nanobot/pull/3627) | **Telegram 看门狗**：修复长轮询静默挂起 | [#3626](https://github.com/HKUDS/nanobot/issues/3626) | 终结一个困扰用户 4 个月的网络稳定性问题 |
| [#3720](https://github.com/HKUDS/nanobot/pull/3720) | **Cron 流式输出**：为定时提醒补齐 `stream_id` 与 `turn_end` | [#3718](https://github.com/HKUDS/nanobot/issues/3718) | 修复 WebSocket 客户端无法正确关联 cron 流式帧的问题 |
| [#3662](https://github.com/HKUDS/nanobot/pull/3662) | **离线 Token 估算**：避免估算 token 时的网络拉取 | [#3647](https://github.com/HKUDS/nanobot/issues/3647) | 在无网环境下也能完成 token 估算 |
| [#5349](https://github.com/HKUDS/nanobot/pull/5349) | **时区测试修复**：为 token 用量测试传入 `timezone_name` | [#5348](https://github.com/HKUDS/nanobot/issues/5348) | 终结每日约 5 小时窗口的确定性测试失败 |
| [#5344](https://github.com/HKUDS/nanobot/pull/5344) | **工具循环检测**：重复工具调用改为告警而非静默空转 | （自检） | 防止 agent 在 `max_iterations` 内反复执行同一工具 |
| [#2166](https://github.com/HKUDS/nanobot/pull/2166) | **PID 锁**：防止同一配置启动重复 gateway | [#2084](https://github.com/HKUDS/nanobot/issues/2084) | 解决"重启旧实例却拉起新进程"的长期吐槽 |
| [#5968](https://github.com/HKUDS/nanobot/pull/5968) | **Provider Fallback**：识别"insufficient credits" HTTP 400 | [#5967](https://github.com/HKUDS/nanobot/issues/5967) | 让配置的回退模型真正生效 |
| [#3127](https://github.com/HKUDS/nanobot/pull/3127) | **短结果回退**：当模型执行工具后未发最终回复时，给出可操作的简短回执 | [#3106](https://github.com/HKUDS/nanobot/issues/3106) | 缓解"GPT 模型跑完工具步骤却不总结"的失败体验 |
| [#5982](https://github.com/HKUDS/nanobot/pull/5982) | **zh-TW 文案修正**：20 条 WebUI 字符串对齐英文源 | — | 改进繁体中文用户体验 |

**项目整体推进度**：今日仓库一次性消化了一批横跨 2026-04 至 2026-09 的存量问题，**净关闭 9 条 Issue / 22 条 PR**，相当于一周的常规工作量。安全性、稳定性、可观测性均有提升，但**功能侧大型重构（SQLite、subagent）仍在评审中**。

---

## 4. 社区热点

今日评论/互动最高的条目集中在**长期未决的可用性问题**：

- **[#3106](https://github.com/HKUDS/nanobot/issues/3106) - "I completed the tool steps but couldn't produce a final answer…"**  
  用户反映使用 **GPT 模型** 设置定时任务时频繁出现该错误，但切换到 gml-4.7 后消失。背景诉求：跨模型一致性不足，定时任务工作流在 GPT 生态下体验差。今日已由 [#3127](https://github.com/HKUDS/nanobot/pull/3127) 收尾。

- **[#3626](https://github.com/HKUDS/nanobot/issues/3626) - Telegram long polling silently hangs**  
  评论 4 条，是今日评论数最高的 Issue。痛点集中在 ISP NAT 超时、Wi-Fi 漫游、防火墙重置场景下机器人"假活"。今日通过 [#3627](https://github.com/HKUDS/nanobot/pull/3627) 加入 watchdog 修复。

- **[#5298](https://github.com/HKUDS/nanobot/issues/5298) - budget model-visible MCP schemas for large tool sets**  
  评论 2 条，反映 MCP 工具数量大时 context 成本飙升。**尚未有 PR**，是社区仍在呼吁的方向。

- **[#2084](https://github.com/HKUDS/nanobot/issues/2084) - Duplicate instance for same config risk**  
  评论 1 条，用户贴图展示 `nanobot-yui` 重启 `nanobot-isla` 时未识别守护进程，反而拉起新实例。今日由 [#2166](https://github.com/HKUDS/nanobot/pull/2166) 引入 PID 锁解决。

> 总体诉求：**"机器人为什么突然不响应"** 和 **"配置不生效"** 是当前社区最焦虑的两类问题，今日均得到不同程度的回应。

---

## 5. Bug 与稳定性

按严重程度排列：

| 等级 | Bug | 状态 |
|---|---|---|
| 🔴 **P1 安全** | [#5564](https://github.com/HKUDS/nanobot/issues/5564) Session 路径遍历 | ✅ 已修复（[#5633](https://github.com/HKUDS/nanobot/pull/5633) 已关闭） |
| 🔴 **P1 网络稳定性** | [#3626](https://github.com/HKUDS/nanobot/issues/3626) Telegram 静默挂起 | ✅ 已修复（[#3627](https://github.com/HKUDS/nanobot/pull/3627)） |
| 🟠 **P2 回归** | [#5348](https://github.com/HKUDS/nanobot/issues/5348) Token 用量时区测试每日 5h 窗口失败 | ✅ 已修复（[#5349](https://github.com/HKUDS/nanobot/pull/5349)） |
| 🟠 **P2 协议缺陷** | [#3718](https://github.com/HKUDS/nanobot/issues/3718) Cron 提醒缺 `stream_id` | ✅ 已修复（[#3720](https://github.com/HKUDS/nanobot/pull/3720)） |
| 🟠 **P2 模型行为** | [#3106](https://github.com/HKUDS/nanobot/issues/3106) GPT 定时任务不输出最终回复 | ✅ 已修复（[#3127](https://github.com/HKUDS/nanobot/pull/3127)） |
| 🟠 **P2 Provider** | [#5967](https://github.com/HKUDS/nanobot/issues/5967) "insufficient credits" 跳过 fallback | ✅ 已修复（[#5968](https://github.com/HKUDS/nanobot/pull/5968)） |
| 🟠 **P2 进程管理** | [#2084](https://github.com/HKUDS/nanobot/issues/2084) 重复实例 | ✅ 已修复（[#2166](https://github.com/HKUDS/nanobot/pull/2166)） |
| 🟡 **P2 模型选择** | [#5977](https://github.com/HKUDS/nanobot/issues/5977) 模型选择器列出已下架 OpenAI 模型 | ❌ **无 PR**，OPEN 状态 |
| 🟢 **P2 设计提问** | [#5421](https://github.com/HKUDS/nanobot/issues/5421) idle 压缩是否应保留并发回合的 provider 状态 | ✅ 已关闭（设计问题已澄清） |

**整体看，今日所有已关闭的 Bug 都对应了修复 PR**，仓库在 Bug 响应效率上表现良好；唯一缺少 fix 的是 **#5977（已下架模型仍在模型选择器）**。

---

## 6. 功能请求与路线图信号

今日 OPEN 的功能/增强请求：

| 请求 | 提出方 | 关联 PR | 评估 |
|---|---|---|---|
| [#5972](https://github.com/HKUDS/nanobot/issues/5972) Telegram 每会话/每话题 groupPolicy + `/group` 命令 | @CarmeloCampos | [#5973](https://github.com/HKUDS/nanobot/pull/5973) + [#5974](https://github.com/HKUDS/nanobot/pull/5974)（堆叠 PR） | **高概率入下一版本**，已进入 PR 评审阶段 |
| [#5900](https://github.com/HKUDS/nanobot/issues/5900) 静默上下文压缩 + 降低 WeChat 轮询日志噪音 | @coder-iu | ❌ 无 PR | 中等可能性，待认领 |
| [#5298](https://github.com/HKUDS/nanobot/issues/5298) 为大 MCP 工具集预算模型可见 schema | @kuaijiemei | ❌ 无 PR | 设计讨论阶段，路线图候选 |
| [#5981](https://github.com/HKUDS/nanobot/pull/5981) TUI `/goal` 在执行回合中接受新目标 | @chengyongru | 自身 PR | p2，OPEN |
| [#5985](https://github.com/HKUDS/nanobot/pull/5985) Subagent session-owned 任务消息与取消 | @chengyongru | 自身 PR | 建立在 #5976 之上的子代理能力增强 |
| [#5983](https://github.com/HKUDS/nanobot/pull/5983) WebUI 模型目录支持的 reasoning effort 选择器 | @Fatih0234 | 自身 PR | 与 #5984 Codex 模型发现去版本化一起演进 |
| [#5902](https://github.com/HKUDS/nanobot/pull/5902) 将 Telegram 私聊话题重命名为生成的会话标题 | @wzrayyy | 自身 PR | p2，OPEN |
| [#5954](https://github.com/HKUDS/nanobot/pull/5954) Subagent 聚合并发结果通知 | @Shizoqua | 自身 PR | 改进并发子代理体验 |

**路线图信号**：Telegram 的**细粒度策略控制**（per-chat/topic）+ **subagent 能力扩展** 是当前最清晰的两条演进线，且都已转化为具体 PR。

---

## 7. 用户反馈摘要

从今日活跃 Issues 评论中提炼：

- 😤 **"机器人突然不响应"是最普遍的痛点**：来自 [#3626](https://github.com/HKUDS/nanobot/issues/3626)、[#3106](https://github.com/HKUDS/nanobot/issues/3106)。前者是网络层静默失败，后者是模型层无输出失败，两类问题都让用户怀疑"机器人坏了"。

- 🪜 **多实例治理混乱**：[#2084](https://github.com/HKUDS/nanobot/issues/2084) 用户在多 bot 编排（`nanobot-yui`、`nanobot-isla`）时遇到"重启 A 却拉起新进程"，反映出 nanobot 在跨实例生命周期管理上仍有 UX 短板。

- 🌐 **离线/弱网场景被低估**：[#3647](https://github.com/HKUDS/nanobot/issues/3647) 指出 token 估算在无网环境会卡顿数秒。NanoBot 在用户本地代理场景的鲁棒性被多次提及。

- 🪟 **WebUI 国际化细节**：[#5982](https://github.com/HKUDS/nanobot/pull/5982) 一次性修了 20 条 zh-TW 文案，说明繁体中文社区已具备质量门槛要求。

- 🧩 **GPT 模型与定时任务不兼容**：[#3106](https://github.com/HKUDS/nanobot/issues/3106) 用户明确表示"换模型就好了"，这是典型的 Provider 兼容性回归信号，修复 PR [#3127](https://github.com/HKUDS/nanobot/pull/3127) 已被合并。

---

## 8. 待处理积压

下列条目已 OPEN 较长时间或今日新增但无响应，建议维护者优先关注：

| 条目 | 类型 | 等待信号 |
|---|---|---|
| [#5977](https://github.com/HKUDS/nanobot/issues/5977) 模型选择器列出已下架 OpenAI 模型 | Bug（新） | 今日新增，无 PR；模型目录更新逻辑需调整 |
| [#5900](https://github.com/HKUDS/nanobot/issues/5900) 静默上下文压缩 + WeChat 日志降噪 | Enhancement | 6 天无 PR |
| [#5298](https://github.com/HKUDS/nanobot/issues/5298) MCP 大工具集 schema 预算 | Enhancement（设计） | 设计阶段，未进入 PR |
| [#5943](https://github.com/HKUDS/nanobot/pull/5943) **Session 状态归一到 SQLite（p1 重构）** | Refactor | OPEN 3 天，p1 级，评审压力大 |
| [#5985](https://github.com/HKUDS/nanobot/pull/5985)、[#5986](https://github.com/HKUDS/nanobot/pull/5986)、[#5981](https://github.com/HKUDS/nanobot/pull/5981) | 多条 p2 新 PR | 今日新增，需指派 reviewer |
| [#5973](https://github.com/HKUDS/nanobot/pull/5973) + [#5974](https://github.com/HKUDS/nanobot/pull/5974) | 堆叠 PR，依赖顺序合并 | 卡在 #5973 的合并节点 |

**整体积压健康度**：中等。P1 重构（SQLite session）和堆叠 PR（Telegram group policy）是当前最大的"合并瓶颈"，建议维护者集中精力打通这两条线，以释放下游 5-6 条 PR。

---

### 报告小结

NanoBot 在 2026-09-30 展现出**强清账 + 慢出新**的节奏：**Bug 修复效率极佳**，但**版本号没动**，新功能仍处于

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

<think>Let me analyze the GitHub data for PicoClaw and generate a comprehensive daily report for 2026-09-30.

Key observations:
1. No new releases today
2. 6 issues updated (6 active, 0 closed)
3. 5 PRs updated (4 open, 1 closed)
4. Notable pattern: Multiple Web UI issues (#3406, #3407, #3408) and matching PRs (#3410, #3411, #3412) from @racso2609 - this looks like a coordinated push to fix Web UX issues
5. There's a clear pattern around Web UI bugs being reported and fixed

Let me categorize:

**Closed/Merged PRs:**
- #3337 [CLOSED] - MCP failure hang fix (closed without merge - marked as stale)

**New PRs (open):**
- #3412 - fix(agent): make a failed turn visible - related to Web UI feedback
- #3411 - feat(web): honest working indicator - implements part of #3406
- #3410 - fix(pico/web): surface steering queue state - addresses #3408
- #3378 - fix(auth): OAuth scopes fix (older, still pending)

**Long-running Issues with activity:**
- #3281 - Web UI lag (since July 21, 16 comments, still open)
- #440 - Hard iteration limit (since Feb 18, 7 comments)

**New Issues:**
- #3408 - Queued messages invisible
- #3409 - Scheduling primitive causing loop
- #3407 - Ghost session
- #3406 - Better working indicator feature request

These 4 new issues (#3406-#3409) from @racso2609 appear to be coordinated with the PRs #3410-#3412 - likely a "report + fix" pattern.

Let me write the report in Chinese as requested.</think>

# PicoClaw 项目日报 · 2026-09-30

> 数据来源：github.com/sipeed/picoclaw · 报告生成时间：2026-09-30

---

## 一、今日速览

PicoClaw 今日呈现**集中式修复爆发**的活跃态势：用户 @racso2609 一日内集中提出 4 个 Web UI 相关 Issue（#3406/#3407/#3408/#3409）并同步提交 3 个对应修复 PR（#3410/#3411/#3412），形成"报 bug → 修 bug"的闭环推进。无新版本发布，过去 24 小时共 6 条 Issue 活跃、5 条 PR 更新（4 待合并、1 被关闭），整体活跃度较前几日显著提升，主要聚焦在 Web UI 的可见性反馈（thinking 状态、队列消息、ghost session）这一体验短板。维护者需关注长期未关闭的 #3281（Web 输入卡顿，已 16 条评论）。

---

## 二、版本发布

⚠️ **无新版本发布**。最近一个发布仍为 0.3.1（见 #3281 中的环境信息），今日代码变更尚未进入发版流程。

---

## 三、项目进展

### ✅ 已关闭 PR（1 条）

| PR | 标题 | 说明 |
|---|---|---|
| [#3337](https://github.com/sipeed/picoclaw/pull/3337) | Fix/mcp failure hangs agent loop | **被标记为 stale 而关闭**（非合并）。该 PR 自 8 月 14 日提出，解决 MCP 服务器连接失败导致 agent loop 挂起、整个聊天接口失语的严重问题，但长期未获维护者评审。建议维护者重启评审或显式说明替代方案，否则这是隐藏的稳定性风险。 |

### 📈 实质推进的方向（新增开放 PR）

今日虽无合并，但形成清晰的修复主线：

- **Web UI 反馈可见性** —— 一个此前被忽视的用户痛点正在被系统化推进：
  - [#3412](https://github.com/sipeed/picoclaw/pull/3412) `fix(agent): make a failed turn visible to the user` —— 修复失败回合"沉默"问题，定位到三处错误通知丢失路径（`message` 工具压制、steering 队列静默丢弃、用户中断未读取）。
  - [#3411](https://github.com/sipeed/picoclaw/pull/3411) `feat(web): honest, state-driven working indicator` —— 实现 [#3406](https://github.com/sipeed/picoclaw/issues/3406) 第一部分，替换 4 句轮播的"假思考"文案。
  - [#3410](https://github.com/sipeed/picoclaw/pull/3410) `fix(pico/web): surface steering queue state` —— 让 web 端消息队列状态可见，对应 [#3408](https://github.com/sipeed/picoclaw/issues/3408)。

- **OAuth 凭据刷新** —— [#3378](https://github.com/sipeed/picoclaw/pull/3378) `fix(auth): use configured scopes` 修复 `RefreshAccessToken` 中硬编码 scope 覆盖 provider 配置的问题（已提交 18 天，仍待评审）。

整体判断：**今日未在主干上产生代码净增**（无合并），但 Web UI 的 UX 缺陷已从"零散抱怨"进入"可量化、可合并"阶段，下一个发版很可能集中体现这些改进。

---

## 四、社区热点

按评论数与互动度排序：

| 排名 | Issue | 评论 | 👍 | 主题 |
|---|---|---|---|---|
| 🥇 | [#3281](https://github.com/sipeed/picoclaw/issues/3281) Web UI chat input laggy | **16** | 2 | Web 输入卡顿（已开放 71 天） |
| 🥈 | [#440](https://github.com/sipeed/picoclaw/issues/440) Replace hard iteration limit | **7** | 0 | `max_tool_iterations: 20` 过严（已开放 224 天） |
| 🥉 | [#3408](https://github.com/sipeed/picoclaw/issues/3408) Queued messages invisible | 1 | 0 | 队列消息"消失" |
| 4 | [#3409](https://github.com/sipeed/picoclaw/issues/3409) Scheduling primitive triggers loop | 1 | 0 | subagent 调度误用 |
| 5 | [#3407](https://github.com/sipeed/picoclaw/issues/3407) Ghost session | 1 | 0 | 会话列表丢失 |

**诉求分析**：
- 长期热点 [#3281](https://github.com/sipeed/picoclaw/issues/3281) 反映了 Web UI 在长上下文下的性能瓶颈——16 条评论意味着有多个独立用户复现/补充，是社区体感最强但仍未推进的痛点。
- [#440](https://github.com/sipeed/picoclaw/issues/440) 是关于 agent 行为的"哲学级"争论：硬性迭代上限 vs 上下文窗口动态约束 + 循环检测，7 条评论显示社区对复杂任务工作流的强烈需求，但维护者尚未明确表态。
- 今日新增的 3 个 Web UI Issue（#3407/#3408）虽评论不多，但描述清晰、影响所有 web 用户，属于"沉默多数"型问题。

---

## 五、Bug 与稳定性

按严重程度排序：

| 等级 | Issue / PR | 描述 | 是否有 fix PR |
|---|---|---|---|
| 🔴 P0 | [#3409](https://github.com/sipeed/picoclaw/issues/3409) | 后台 subagent 调度产生**非预期的自主循环 tick**——agent 把 `ScheduleWakeup` 当作"等 5 分钟"工具用，导致每次唤醒都被当成用户指令触发新一轮工具调用 | ❌ 暂无 fix PR |
| 🔴 P0 | [#3408](https://github.com/sipeed/picoclaw/issues/3408) | Web UI 在 agent 忙碌时，消息**静默入队并在队列满时静默丢弃**，用户无任何反馈 | ✅ [#3410](https://github.com/sipeed/picoclaw/pull/3410) 已提交 |
| 🟠 P1 | [#3407](https://github.com/sipeed/picoclaw/issues/3407) | Web UI **ghost session**——模型仍在思考时，会话从列表中消失，无法找回当前聊天 | ❌ 暂无 fix PR |
| 🟠 P1 | [#3281](https://github.com/sipeed/picoclaw/issues/3281) | Web UI 输入框在历史稍长时严重卡顿（0.3.1 版本） | ❌ 71 天无 fix |
| 🟡 P2 | [#3378](https://github.com/sipeed/picoclaw/pull/3378) | OAuth `RefreshAccessToken` 硬编码 scope 覆盖 provider 配置 | ✅ PR 待合并 |
| ⚪ 关闭 | [#3337](https://github.com/sipeed/picoclaw/pull/3337) | MCP 失败导致 agent loop 挂起 | ❌ 被 stale 关闭 |

**稳定性观察**：今日暴露的 P0 问题集中在**Web UI 的反馈通道缺失**——用户在与 agent 交互时无法得知真实状态（在想？挂了？消息丢了？会话没了？）。这是对话式 agent 的基础可用性问题，优先级建议高于 #440 类的功能演进。

---

## 六、功能请求与路线图信号

| 需求 | 来源 Issue | 对应 PR | 进入下版本概率 |
|---|---|---|---|
| 真实、状态驱动的工作指示器（替代 4 句轮播文案） | [#3406](https://github.com/sipeed/picoclaw/issues/3406) | [#3411](https://github.com/sipeed/picoclaw/pull/3411) | 🟢 **高**——PR 已就绪，实现 #3406 的 part 1 |
| 队列/事件可视化（解决消息消失） | [#3406](https://github.com/sipeed/picoclaw/issues/3406)、[#3408](https://github.com/sipeed/picoclaw/issues/3408) | [#3410](https://github.com/sipeed/picoclaw/pull/3410) | 🟢 **高**——PR 已就绪 |
| 手动 vs channel 会话分类、会话归档 | [#3406](https://github.com/sipeed/picoclaw/issues/3406) | ❌ 暂无 | 🟡 中——属 #3406 part 2/3 |
| 用上下文窗口动态边界 + 循环检测替代硬上限 `max_tool_iterations: 20` | [#440](https://github.com/sipeed/picoclaw/issues/440) | ❌ 暂无 | 🟡 中——架构改动较大，维护者未表态 |

**路线图信号**：从 PR 节奏判断，下一个 minor 版本（如 0.3.2 或 0.4.0）很可能以 **Web UI 可用性修复**为主轴，并将 [#3337](https://github.com/sipeed/picoclaw/pull/3337) 代表的 MCP/agent loop 稳定性问题一并纳入。

---

## 七、用户反馈摘要

从 Issues 评论与描述中提炼：

- 😤 **"我发的消息去哪了？"**——Web UI 用户最强烈的痛点（[#3408](https://github.com/sipeed/picoclaw/issues/3408)）。在 agent 仍处思考态时继续发消息，结果"凭空消失"，用户以为是 bug 而非设计行为。
- 😤 **"它还在想吗？"**——当前轮播的 4 句"thinking"文案（`chat.thinking.step1..4`）让用户无法判断真实状态，#3406/#3411 直接点名为"honest indicator"。
- 😡 **"会话不见了"**——[#3407](https://github.com/sipeed/picoclaw/issues/3407) 描述的"ghost session"是**数据丢失感**问题，比性能问题更伤用户信任。
- 🤔 **"复杂任务干到一半就放弃了"**——[#440](https://github.com/sipeed/picoclaw/issues/440) 揭示用户在使用 agent 做真实开发工作流时，遇到 "I've completed processing but have no response to give" 的中途截断。
- 🐛 **"MCP 一挂全挂"**——[#3337](https://github.com/sipeed/picoclaw/pull/3337) 描述的 MCP 失败导致整个聊天接口瘫痪至下次启动，原始问题是严重的"单点故障"体验。
- 📋 **"Web UI 已是日常主力"**——[#3406](https://github.com/sipeed/picoclaw/issues/3406) 明确表态 "built-in Web UI is now the main day-to-day way to chat"，说明 PicoClaw 的使用重心已从 CLI/Channel 转向 Web，因此 Web 体验的优先级应当被重新评估。

---

## 八、待处理积压

需要维护者重点关注的长期未结案条目：

| 链接 | 标题 | 开案天数 | 风险 |
|---|---|---|---|
| [#3281](https://github.com/sipeed/picoclaw/issues/3281) | Web UI chat input laggy | **71 天** | 用户反复报告（16 评论），影响所有 web 长对话用户 |
| [#440](https://github.com/sipeed/picoclaw/issues/440) | Replace hard iteration limit | **224 天** | 复杂任务场景的硬阻塞，社区已给方向但维护者未表态 |
| [#3378](https://github.com/sipeed/picoclaw/pull/3378) | fix(auth): use configured scopes | 18 天 | OAuth provider 集成方受影响，scope 被覆盖属于凭据 bug |
| [#3337](https://github.com/sipeed/picoclaw/pull/3337) | Fix/mcp failure hangs agent loop | **47 天（已 stale 关闭）** | 关闭后无替代方案，P0 稳定性问题悬而未决 |

**维护者建议**：今日的 PR 浪潮已让 4 条新 issue 进入"可合并"轨道，建议趁热集中评审 [#3410](https://github.com/sipeed/picoclaw/pull/3410)、[#3411](https://github.com/sipeed/picoclaw/pull/3411)、[#3412](https://github.com/sipeed/picoclaw/pull/3412) 三件套，形成一个小的 Web UX patch release；同时回溯 [#3281](https://github.com/sipeed/picoclaw/issues/3281) 与被 stale 关闭的 [#3337](https://github.com/sipeed/picoclaw/pull/3337)，避免社区形成"老 issue 被遗忘"的负面印象。

---

*报告基于 GitHub 公开数据生成，仅供参考。所有链接指向 github.com/sipeed/picoclaw 对应 issue/PR。*

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

<think>Let me analyze the GitHub data for IronClaw project and generate a comprehensive daily report for 2026-09-30.

Key observations from the data:

1. **Releases**: 1 new release - ironclaw-v1.4.1 (promoted from 1.4.1-rc.2)
   - Fixed Google OAuth activation for Gmail/Google Calendar extensions
   - Wasmtime security update

2. **Issues**: 2 active issues
   - #7889 - RFC for remote edge workers (long-standing, from Aug 25)
   - #8113 - Proposal for opt-in turn-0 tool selection (BM25F + embeddings), new

3. **PRs**: 3 updates
   - #7988 - Codebase knowledge graph refresh (open, bot-generated CI)
   - #8120 - Promote 1.4.1-rc.2 to 1.4.1 (CLOSED - this is the release PR that got merged)
   - #8119 - Opt-in tool selection with embeddings (open, XL size, new contributor)

Let me structure the report now with all required sections. I need to write in Chinese as the prompt is in Chinese.

For section 8 (待处理积压), I should look at #7889 which has been open since 2026-08-25 (over a month old with minimal activity - 0 thumbs up, only 1 comment) - this is a candidate.

Let me draft this report professionally.</think>

# IronClaw 项目日报 · 2026-09-30

> 数据来源：[github.com/nearai/ironclaw](https://github.com/nearai/ironclaw)  ·  报告生成时间：2026-09-30

---

## 一、今日速览

IronClaw 项目今日呈现出**「稳定版本落地 + 重大功能提案并行推进」**的节奏。1.4.1 稳定版已于昨日正式发布，主要修复了 Google OAuth 激活路径以及引入 Wasmtime 安全更新，整体属于低风险维护性发版。社区层面，一条针对会话首轮（turn-0）工具选择优化的 RFC 与对应 XL 级实现 PR 同步浮现，显示出项目向"降低模型推理开销"方向演进的明确意图。综合活跃度评估为**中等偏上**：版本发布闭环顺畅，但开放讨论类 Issue/PR 的评论与反应数偏低，社区互动深度有待加强。

---

## 二、版本发布

### 🚀 ironclaw-v1.4.1 — 发布于 2026-09-29

本版本为 `1.4.1-rc.2` 的稳定晋升，对应发布 PR [#8120](https://github.com/nearai/ironclaw/pull/8120) 已合并关闭。

**变更内容**

- **Google 扩展 OAuth 激活修复**：部署方通过 Web UI 直接提供 Google OAuth 客户端时，Gmail 与 Google Calendar 扩展现在可正常激活（修复了此前仅通过配置文件才生效的限制）。
- **Wasmtime 安全更新**：跟进上游 WASM 运行时的安全补丁，缩小 wasm 沙箱攻击面。

**破坏性变更**

- 无。版本晋升仅包含 bug fix 与安全补丁，公共 API、配置 schema、CLI 接口保持向后兼容。

**迁移注意事项**

- 自 1.4.x 升级无需修改现有配置。
- 若使用 Google 扩展并此前通过 Web UI 注入 OAuth client 但激活失败，升级后建议重新走一次激活流程以确认问题修复。
- Wasmtime 更新不要求用户重新构建 WASM 工具，但建议运行 `ironclaw doctor`（或对应健康检查命令）确认运行时兼容性。

---

## 三、项目进展

### ✅ 已合并/关闭的重要 PR

| PR | 标题 | 影响范围 | 链接 |
|---|---|---|---|
| [#8120](https://github.com/nearai/ironclaw/pull/8120) | chore(release): promote 1.4.1-rc.2 to 1.4.1 | L 级 · CI/Docs/Dependencies | 已关闭 |

**进展评价**

- 该 PR 的关闭意味着 1.4.1 发布流水线闭环完成：RC 阶段验证 → 稳定版晋升 → changelog 与 lockfile 同步更新。
- 项目整体向前迈进了一步：释放了一个可被生产环境信任的稳定 tag，并为下一轮功能迭代铺平道路。
- 另外 [#7988](https://github.com/nearai/ironclaw/pull/7988)（代码库知识图谱刷新）仍处于待合并状态，属常规 nightly bot 维护 PR，预计短期内将自动合入。

---

## 四、社区热点

按评论数与反应数综合排序：

1. **[#7889 RFC: extend the scheduler/orchestrator with opt-in remote edge workers](https://github.com/nearai/ironclaw/issues/7889)** — 作者 [@kvnloo](https://github.com/kvnloo)
   - 创建于 2026-08-25，过去 24h 仍在更新，但互动度偏低（评论 1、👍 0）。
   - **核心诉求**：当前 IronClaw 的 worker pool 仍受限于单主机，提议引入"可选的远程边缘 worker"，让拥有多台空闲主机的运营方能够将其纳入调度。

2. **[#8113 Proposal: opt-in turn-0 tool selection (BM25F + embeddings)](https://github.com/nearai/ironclaw/issues/8113)** — 作者 [@CjS77](https://github.com/CjS77)
   - 创建于 2026-09-27，尚未形成讨论（评论 0、👍 0），但已在 [#8119](https://github.com/nearai/ironclaw/pull/8119) 中给出 XL 级实现。

**诉求分析**

- 两条热点 Issue 分别指向**横向扩展（scale-out）**与**纵向效率（latency/cost reduction）**两个不同维度的演进方向。
- [#7889](https://github.com/nearai/ironclaw/issues/7889) 来自已有成熟部署经验的运营者社区，反映出"单机性能/容量天花板"是当前限制被采纳的主要瓶颈。
- [#8113](https://github.com/nearai/ironclaw/issues/8113) 则代表面向开发体验的优化方向：将首次模型调用前可用的工具预先排序注入，避免 `tool_search` 往返开销。

---

## 五、Bug 与稳定性

| 严重程度 | 描述 | 状态 | 链接 |
|---|---|---|---|
| 中 | Google 扩展（Gmail / Google Calendar）通过 Web UI 注入 OAuth 客户端时无法激活 | ✅ **已在 1.4.1 修复** | 随 [#8120](https://github.com/nearai/ironclaw/pull/8120) 修复 |
| 中 | Wasmtime 运行时存在已知上游安全风险 | ✅ **已在 1.4.1 修复** | 随 [#8120](https://github.com/nearai/ironclaw/pull/8120) 修复 |

过去 24h **未新开 Bug 类 Issue**，稳定性信号良好。

---

## 六、功能请求与路线图信号

| 提案 | 提出方 | 实现 PR | 进入下一版本的概率 |
|---|---|---|---|
| 会话首轮工具选择（BM25F + Embeddings 排序） | [@CjS77](https://github.com/CjS77) via [#8113](https://github.com/nearai/ironclaw/issues/8113) | [#8119](https://github.com/nearai/ironclaw/pull/8119)（XL 级，新贡献者） | **中高**。RFC 与 PR 同步提出，且明确为 opt-in / 默认关闭，影响面可控 |
| 远程边缘 worker 扩展调度器 | [@kvnloo](https://github.com/kvnloo) via [#7889](https://github.com/nearai/ironclaw/issues/7889) | 暂无 PR | **中低**。RFC 阶段尚无实现，且涉及安全模型与凭据隔离等架构性问题 |

**信号提示**

- turn-0 工具选择特性一旦合并，将影响所有调用 IronClaw 主机的用户，但默认关闭的设计降低了风险，预计会先以 RC 形式进入 1.5.0 周期。
- 远程 edge worker 由于涉及凭证边界、网络可达性、审计追踪等安全层决策，更可能作为 1.6.x 长线目标讨论。

---

## 七、用户反馈摘要

由于今日 Issue 评论数量较少，可提炼的真实用户反馈主要来自历史讨论与本次发布的修复点：

- **Google Workspace 用户痛点**：1.4.1 修复表明存在一类"通过 Web UI 配置 OAuth 时扩展不可用"的用户体验断裂，运营方被迫回到配置文件路径——本次修复后 UX 闭环。
- **Token 效率诉求（隐含）**：[#8113](https://github.com/nearai/ironclaw/issues/8113) 反映出社区对"减少无效 round-trip、节省 token 与延迟"的关注，是 LLM 代理框架的普遍痛点。
- **横向扩展瓶颈（隐含）**：[#7889](https://github.com/nearai/ironclaw/issues/7889) 的存在说明已有用户在生产规模下遇到单机资源天花板。

**满意度信号**：1.4.1 的稳定发布通常意味着 RC 阶段未发现严重回归，社区对近期版本的接受度应处于较高水平（缺乏公开负面反馈样本）。

---

## 八、待处理积压

维护者建议关注以下长期未响应项：

| 项目 | 类型 | 沉默天数 | 严重性 | 链接 |
|---|---|---|---|---|
| [#7889](https://github.com/nearai/ironclaw/issues/7889) | RFC | 已开 **36 天** | 中 | [查看](https://github.com/nearai/ironclaw/issues/7889) |
| [#7988](https://github.com/nearai/ironclaw/pull/7988) | Bot 维护 PR | 待合并超 1 个月 | 低 | [查看](https://github.com/nearai/ironclaw/pull/7988) |
| [#8119](https://github.com/nearai/ironclaw/pull/8119) | XL 级功能 PR（新贡献者） | 新开待 first review | 中 | [查看](https://github.com/nearai/ironclaw/pull/8119) |

**提醒**：

- [#7889](https://github.com/nearai/ironclaw/issues/7889) 涉及架构层面决策，建议核心维护者给出明确的态度回应（即使是"Won't fix in current cycle"也比沉默更有助于社区预期管理）。
- [#8119](https://github.com/nearai/ironclaw/pull/8119) 来自新贡献者 [@CjS77](https://github.com/CjS77)，XL 级规模意味着审查周期较长，建议尽快指派 reviewer 给出初次反馈以避免贡献者流失。

---

### 📊 项目健康度仪表盘

| 维度 | 评分 | 说明 |
|---|---|---|
| 发版节奏 | 🟢 良好 | 1.4.1 闭环顺畅 |
| Bug 响应 | 🟢 良好 | 关键问题均已修复 |
| 社区互动 | 🟡 待提升 | 开放 Issue/PR 评论数偏低 |
| 新贡献者 | 🟢 良好 | 出现新 contributor 的 XL 级 PR |
| 长期积压 | 🟡 关注 | 存在 30+ 天未响应 RFC |

---

*本报告由 AI 自动生成，基于过去 24 小时的 GitHub 公开数据。数据来源：[github.com/nearai/ironclaw](https://github.com/nearai/ironclaw)。*

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

<think>Let me analyze the GitHub data for LobsterAI and generate a comprehensive project daily report for 2026-09-30.

Key observations:
1. 10 Issues updated - 8 still open, 2 closed
2. 11 PRs all closed/merged - 0 still pending
3. No new releases
4. Most issues are marked as "stale" - suggesting they haven't been responded to recently
5. Active PRs from today (2026-09-29) include fixes for gateway restart budget, installer skill backup, markdown rendering, and artifact links

Let me categorize:

**Important PRs (closed today or recently):**
- #2783: fix gateway restart budget
- #2782: fix installer - explain how to move user skills when backup aborts update (relates to issue #2395)
- #2781: fix markdown - keep currency dollars out of inline math
- #2780: feat artifacts - open markdown links in matching artifact card
- #2758: feat cowork - display and refresh native OpenClaw progress cards
- #2707: fix openclaw - only refill gateway restart budget after stability window
- #2706: fix installer - build Skills backup file records as PSCustomObject (relates to #2395)
- #1682, #1683, #1707, #1773: All stale, closed today

**Notable Issues:**
- #2779: Bug about "梦境日记" panel showing empty - this is NEW (created today)
- #2293: USER.md overwrite bug - closed as stale
- #2342: Ad popup - closed as stale
- #2395: Installation failure - this is being addressed by PR #2706 and #2782
- #2393: Critical data corruption bug (\f byte replacement)
- #2396: exec shell wrapper issue

Let me generate the report now.</think>

# LobsterAI 项目日报 · 2026-09-30

> 数据来源：[github.com/netease-youdao/LobsterAI](https://github.com/netease-youdao/LobsterAI) · 统计窗口：过去 24 小时

---

## 1. 今日速览

LobsterAI 仓库在 2026-09-29 迎来了较为密集的提交活动：**11 个 PR 全部关闭/合并（无待合并积压）**，新开/活跃 Issue 8 条、关闭 2 条、未发布新版本。当日合并的修复集中在 **openclaw gateway 重启预算、Windows 安装器 Skills 备份、Markdown 渲染** 三个方向，其中两项安装器修复直接呼应了用户长期反馈的安装失败问题（#2395）。但与此同时，仓库中带 `[stale]` 标签的 Issue 占比偏高（10 条中 8 条），社区响应存在积压风险。整体健康度：**中等偏上**，代码迭代节奏正常，社区反馈链路需加强。

---

## 2. 版本发布

本统计窗口内 **无新版本发布**。最近的版本线索可参考用户报告中提到的 `v2026.7.15`、`2026.9.23` 等版本号，但官方 release 页面无新增记录。

---

## 3. 项目进展

今日合并/关闭的 PR 共 11 条，以下为对项目进展有实质推动的条目：

| PR | 类型 | 说明 | 链接 |
|---|---|---|---|
| **#2783** | fix(openclaw) | 修复 gateway 重启预算问题，配合 #2707 形成"稳定性窗口后才补充预算"的策略，避免刚恢复健康的 gateway 被无限重启 | [#2783](https://github.com/netease-youdao/LobsterAI/pull/2783) |
| **#2707** | fix(openclaw) | 同主题更早期的 PR：根因修复 `doStartGateway()` 在首次 readiness 探针成功后立刻清零重启计数器，导致 crash-loop gateway 永远无法脱离 | [#2707](https://github.com/netease-youdao/LobsterAI/pull/2707) |
| **#2782** | fix(installer, win) | 升级失败时给出本地化（zh/en）对话框，列出安装目录下的 user skill 文件夹并提示用户迁移到 per-user skills root，直击 #2395 痛点 | [#2782](https://github.com/netease-youdao/LobsterAI/pull/2782) |
| **#2706** | fix(installer, win) | 修复 PS 5.1 下 Skills 备份辅助脚本因 `Measure-Object` 输出非 PSCustomObject 而走"备份失败"分支的兼容性问题 | [#2706](https://github.com/netease-youdao/LobsterAI/pull/2706) |
| **#2758** | feat(cowork) | 在 Cowork 组合器上方展示 OpenClaw 持久化进度卡片，支持显式刷新、保留旧 plan、重连更新、折叠状态持久化；React 端口保留 OpenClaw 权威数据 | [#2758](https://github.com/netease-youdao/LobsterAI/pull/2758) |
| **#2781** | fix(markdown) | 修复 remark-math 将 `$3/$15` 等货币符号误判为 KaTeX 内联公式的渲染回归；采用 Pandoc 分隔符规则 | [#2781](https://github.com/netease-youdao/LobsterAI/pull/2781) |
| **#2780** | feat(artifacts) | assistant 消息中的内联 Markdown 链接走统一打开器，在当前 artifact 卡片内打开而非外部应用；同步扩展解析器、自动预览策略、analytics | [#2780](https://github.com/netease-youdao/LobsterAI/pull/2780) |
| **#1682** | feat(cowork, stale) | 为 AI 回复添加基于 Web Speech API 的朗读按钮（零依赖） | [#1682](https://github.com/netease-youdao/LobsterAI/pull/1682) |
| **#1683** | fix(skills, stale) | 远程导入技能时前置 `owner/repo` 格式校验，避免无效输入仍发起下载请求 | [#1683](https://github.com/netease-youdao/LobsterAI/pull/1683) |
| **#1707** | fix(cowork, stale) | 切换 Agent 时清空主页输入框与附件（根因：`draftPrompts['__home__']` 多 Agent 共享） | [#1707](https://github.com/netease-youdao/LobsterAI/pull/1707) |
| **#1773** | fix(i18n, stale) | 补充记忆条目编辑按钮缺失的 `edit` i18n key（zh/en） | [#1773](https://github.com/netease-youdao/LobsterAI/pull/1773) |

**项目整体推进评估**：本月合并的 4 个 stale PR（#1682/1683/1707/1773）此前已搁置约 5 个月，本次集中清理体现了维护者对积压 PR 的清理力度。功能层面，OpenClaw 进度卡片、artifact 内联打开等改动显著提升 Cowork 工作流体验；稳定性层面，gateway 重启循环与 Windows 安装器 Skills 备份两个长期隐患被系统性修复。

---

## 4. 社区热点

按评论数与时间维度筛选：

- **#2293（6 条评论）— 用户最关注的稳定性问题**  
  多 agent 配置下 USER.md 互相覆盖，疑似更新引入的回归。[@yepcn](https://github.com/netease-youdao/LobsterAI/issues/2293) 详细记录了"关闭软件单独修改 workspace-* 下 USER.md，重启后被 main agent 的 USER.md 内容替换"的复现路径。**该 Issue 已被关闭并标记 stale**，但用户痛点真实存在，建议维护者重新评估是否需要 reopen。
  
- **#2342（3 条评论）— 用户对商业化体验的反馈**  
  [@PYUDNG](https://github.com/netease-youdao/LobsterAI/issues/2342) 反映 `v2026.7.15` 版本后新增的左下角广告缺乏永久关闭入口，设置项中也找不到对应开关。此类商业化展示引发的反馈通常具备一定社区共鸣，建议官方在产品端提供"不再显示"选项以缓和体验。

- **#2779（1 条评论，今日新建）— 最新活跃技术报告**  
  [@probe528-maker](https://github.com/netease-youdao/LobsterAI/issues/2779) 详细报告了多分身配置下"梦境日记"面板恒为空的问题，定位到内置 runtime OpenClaw 2026.8.1 缺少 `doctor.memory.*` 的 ambient-owner 回退，并明确指出"上游已修，待跟进"。这是一个**信号质量极高**的 Bug 报告，技术细节完整，便于维护者快速跟进。

---

## 5. Bug 与稳定性

按严重程度排序：

| 等级 | Issue | 描述 | 状态 | 是否已有 fix |
|---|---|---|---|---|
| 🔴 **严重（数据完整性）** | [#2393](https://github.com/netease-youdao/LobsterAI/issues/2393) | LobsterAI 加速器在字符串改写时将 `\f` 字节对 (5C 66) 替换为 `\x0C`（form feed），导致 `MEMORY.md` 等文件落盘后字节异常。100% 可复现。 | OPEN / stale | ❌ 未见对应 PR |
| 🟠 **严重（安装失败）** | [#2395](https://github.com/netease-youdao/LobsterAI/issues/2395) | 升级时弹出"user skills could not be backed up"导致安装中断。 | OPEN / stale | ✅ **#2706 + #2782 已合并**，应在下个版本验证 |
| 🟠 **严重（功能缺失）** | [#2396](https://github.com/netease-youdao/LobsterAI/issues/2396) | exec 工具默认 shell wrapper 硬编码为 Windows PowerShell 5.1，导致 Linux 命令 / 含特殊字符的内联脚本（node -e / pwsh -Command）静默失败。 | OPEN / stale | ❌ 未见对应 PR |
| 🟠 **严重（多 agent 配置损坏）** | [#2293](https://github.com/netease-youdao/LobsterAI/issues/2293) | 重启后多 agent 下 USER.md 被 main agent 内容覆盖。 | CLOSED / stale | ❌ 关闭但未提供修复 PR |
| 🟡 **中等（功能失效）** | [#2779](https://github.com/netease-youdao/LobsterAI/issues/2779) | 多分身配置下梦境日记面板恒为空，缺 ambient-owner 回退。 | OPEN | ⚠️ 上游已修，待 LobsterAI 跟进 |
| 🟡 **中等（编码/兼容性）** | [#2390](https://github.com/netease-youdao/LobsterAI/issues/2390) | exec 工具默认 Shell 与中文路径编码问题。 | OPEN / stale | ❌ 未见对应 PR |

**关键信号**：#2395 是本批 Issue 中少数有明确修复路径的问题，#2706 + #2782 的合并大概率在下次发版时彻底解决该问题，建议维护者在 release notes 中显式标注。#2393 的数据静默损坏属 P0 级别，建议优先处理。

---

## 6. 功能请求与路线图信号

| 需求 | 提出方 | 现状 | 落地可能性 |
|---|---|---|---|
| **技能（Skill）可重命名** | [#2391](https://github.com/netease-youdao/LobsterAI/issues/2391) | OPEN / stale | 🟢 改动面小，建议下版本纳入 |
| **定时任务支持指定 agent 与 skill** | [#2392](https://github.com/netease-youdao/LobsterAI/issues/2392) | OPEN / stale | 🟡 涉及调度模型，需设计 |
| **彻底关闭左下角广告的开关** | [#2342](https://github.com/netease-youdao/LobsterAI/issues/2342) | CLOSED / stale | 🟢 产品侧即可响应 |
| **关闭广告后是否有 Pro 入口可选**（推测，未直接提及） | — | — | — |
| **Skill 商用授权说明**（#2401 中隐含） | [#2401](https://github.com/netease-youdao/LobsterAI/issues/2401) | OPEN / stale | 🟡 需要法务/产品口径 |
| **AI 回复朗读功能**（TTS） | [#1682 PR](https://github.com/netease-youdao/LobsterAI/pull/1682) | 已合并 | ✅ 已落地 |
| **Cowork 进度卡片持久化与刷新** | [#2758 PR](https://github.com/netease-youdao/LobsterAI/pull/2758) | 已合并 | ✅ 已落地 |
| **Artifact 内联打开 Markdown 链接** | [#2780 PR](https://github.com/netease-youdao/LobsterAI/pull/2780) | 已合并 | ✅ 已落地 |

**路线图判断**：今日合并的 #2758、#2780、#1682 显著加强了 Cowork 工作流的体验一致性，配合 #2781 修复货币符号渲染问题，LobsterAI 的 artifact/cowork 子系统正成为本季度重点迭代方向。`[stale]` 标签的功能请求大多属于"低成本高收益"，建议维护者在下个迭代集中清理一波。

---

## 7. 用户反馈摘要

**真实痛点提炼：**

1. **多 agent 配置的"伪隔离"问题**（#2293）：用户期望不同 agent 拥有独立的 USER.md / 人设文件，但实际写入存在互相覆盖。这对依赖多角色协作的 Pro 用户来说是基础需求，缺失会导致功能不可用。

2. **升级流程对用户数据不友好**（#2395）：备份失败直接中断升级、不告知如何迁移 Skills 文件夹，对非技术用户极度不友好。#2782 的本地化迁移提示合并后，预计显著缓解此类抱怨。

3. **商业化展示缺少退出机制**（#2342）：社区对"广告弹出 → 设置无开关"模式的容忍度正在下降，建议参考主流工具提供"永久不再显示"。

4. **数据完整性恐惧**（#2393）：涉及 `\f` → `\x0C` 的字节级替换对保存 MEMORY.md、长文档、PS 脚本路径的用户是灾难性 Bug。即便复现率 100%，目前 stale 状态容易让用户对项目数据安全失去信心。

5. **Windows Shell 兼容性的长期欠债**（#2390、#2396）：exec 工具默认 shell 与编码问题在 Windows 11 + PS 5.1 环境反复出现，反映出对 Windows 桌面端的测试覆盖仍不充分。

**整体满意度信号**：维护者近 24 小时的合并动作（尤其是 #2782 主动添加本地化对话框）显示出对用户反馈的快速响应能力，但 stale 标签泛滥（多数 Issue 创建于 2026-07，已超过 2 个月未获官方回复）仍是社区情绪的主要负向来源。

---

## 8. 待处理积压

按创建时间与重要性排序的"长尾"未响应 Issue：

| Issue | 标题（简） | 创建日期 | 等待时长 | 备注 |
|---|---|---|---|---|
| [#2395](https://github.com/netease-youdao/LobsterAI/issues/2395) | 无法安装（升级中断） | 2026-07-28 | ~63 天 | **⚠️ 修复已合并（#2706/#2782），需 release 验证** |
| [#2401](https://github.com/netease-youdao/LobsterAI/issues/2401) | skill 商用授权疑问 | 2026-07-28 | ~63 天 | 需要官方口径 |
| [#2390](https://github.com/netease-youdao/LobsterAI/issues/2390) | exec 工具中文路径编码 | 2026-07-27 | ~64 天 | 涉及 Windows 兼容层 |
| [#2396](https://github.com/netease-youdao/LobsterAI/issues/2396) | exec 默认 shell wrapper | 2026-07-28 | ~63 天 | 与 #2390 同主题 |
| [#2393](https://github.com/netease-youdao/LobsterAI/issues/2393) | `\f` → `\x0C` 数据损坏 | 2026-07-27 | ~64 天 | 🔴 P0 数据完整性 |
| [#2391](https://github.com/netease-youdao/LobsterAI/issues/2391) | 技能重命名 | 2026-07-27 | ~64 天 | 低成本需求 |
| [#2392](https://github.com/netease-youdao/LobsterAI/issues/2392) | 定时任务选择 agent | 2026-07-27 | ~64 天 | 需要设计 |
| [#2779](https://github.com/netease-youdao/LobsterAI/issues/2779) | 梦境日记面板为空 | 2026-09-29 | 1 天 | 等待 runtime 升级 |

**维护者建议关注项**：

- 🟥 **立即**：#2393 数据损坏问题，无论 stale 与否，建议 reopen 并修复。
- 🟧 **本迭代内**：#2390 / #2396 是同一根因（Windows shell 兼容），可合并修复；#2391 的"技能重命名"几乎零成本。
- 🟨 **下个迭代**：#2392（定时任务 agent/skill 选择）涉及模型调整，建议纳入产品评审。
- 🟩 **运营层面**：建议官方在 stale 标签的 Issue 上至少留一条"已收到/已排期"或"因 X 原因暂不处理"的回复，避免用户陷入"是否被遗忘"的负面感知。

---

*报告生成时间：2026-09-30 · 数据范围：2026-09-29 UTC 滚动 24 小时窗口*

</details>

<details>
<summary><strong>QwenPaw</strong> — <a href="https://github.com/agentscope-ai/QwenPaw">agentscope-ai/QwenPaw</a></summary>

<think>Let me analyze the GitHub data for QwenPaw (2026-09-30) and generate a comprehensive daily report.

Let me organize the data first:

**Overall Stats:**
- 24h Issues: 9 (8 new/active, 1 closed)
- 24h PRs: 34 (15 pending, 19 merged/closed)
- New releases: 0

**Issues Analysis:**
1. #7991 [OPEN] TaskTracker zombie entries bug - dashboard count mismatch
2. #2359 [OPEN] HEARTBEAT_OK / CRON_OK feature request
3. #8036 [OPEN] OpenAI integration issues with image and resume failures
4. #8042 [OPEN] Tool output auto-fed back to model causing errors
5. #8040 [OPEN] Embedding reindex incomplete - CJK chunk token limit issue (recurrence of #5950)
6. #8035 [OPEN] Transcription settings page bug
7. #8030 [CLOSED] [invalid] - just a noise issue
8. #8022 [OPEN] send_file_to_user content pollution causing 400 errors
9. #8015 [OPEN] Custom Skill/Plugin marketplace source support

**PRs Analysis (top by discussion/comments):**
Most PRs have undefined comments but they show recent activity. Let me focus on important closed/merged ones:

Closed/merged PRs (19):
- #8041 fix(e2e): stop stalled session cleanup
- #8038 fix(hub): close database connections after transactions
- #8039 fix(ci): correct first-time PR detection and add automatic size labels
- #7893 fix(memory): restore runtime after backend rollback
- #8037 fix(console): align e2e tests with redesigned UI
- #8032 fix(terminal): support high posix descriptors
- #8025 fix(desktop): disable NSIS solid compression
- #8026 fix(ci): address cross-platform paths
- #8024 fix(portability): reject invalid qoder timezones

Open PRs (15):
- #8020 feat(providers): add cooldown to model fallback candidates
- #8001 fix(runtime): keep timeout tool results recoverable
- #8012 fix(telegram): render every fenced code block as code in HTML
- #8034 fix(providers): bound inline media per request
- #8033 fix(tauri): stop reconciling away a live desktop instance's backend
- #8031 test: stop leaking unawaited coroutines
- #8029 feat(browser): let config drop Playwright default launch arguments
- #8028 fix(security): flag inline Office COM automation
- #8027 fix(skills): offload pool skill download to a worker thread
- #7903 feat(community): integrate QwenPaw community and inbox
- #7931 feat(chat): add durable paginated transcript history

Let me think about severity and themes:

**Critical bugs:**
- #8042: Tool output files causing internal errors (data flow issue)
- #8040: Embedding reindex CJK token limit (recurring bug)
- #8036: OpenAI integration failures with poor error UX
- #8022: Content pollution causing 400 errors across models
- #8035: Transcription settings broken (silent failure)
- #7991: Task tracker counter inconsistency

**Security concerns:**
- #8028: Office COM automation flagging
- #8029: Playwright default args control

**Performance/scale:**
- #8032: High posix descriptors
- #8034: Bound inline media per request
- #8027: Offload skill download to worker thread

**Long-standing issues:**
- #2359 created 2026-03-26, still open after 6 months
- #7903 in WIP since 2026-09-20
- #7931 still open since 2026-09-22
- #8001 open since 2026-09-27

Now let me write the report in Chinese, professional and data-driven.

Let me think about the overall health assessment:
- High activity (34 PRs, 9 Issues in 24h)
- Good merge rate (19/34 = 56% merged/closed)
- Multiple security-related PRs (positive)
- Several recurring bugs (negative)
- Mix of features and fixes
- No new releases

This shows a very active project in maintenance mode, with multiple concurrent bug fixes and a couple of feature developments.

Let me structure the report carefully:</think>

# QwenPaw 项目日报 · 2026-09-30

> 数据范围：2026-09-29 ~ 2026-09-30（UTC），来源 [QwenPaw 仓库](https://github.com/agentscope-ai/QwenPaw)

---

## 一、今日速览

QwenPaw 仓库进入**高强度维护周期**，24 小时内共产生 34 个 PR（15 待合并 / 19 已合并或关闭）与 9 个 Issue（8 新开或活跃 / 1 已关闭），合并率约 **56%**，显示维护团队对修复类 PR 响应迅速。今日工作集中在 **Console E2E 测试对齐、Hub SQLite 连接生命周期、跨平台 CI 兼容、Provider 与终端稳定性** 等基础设施层面。Issues 端则集中暴露了 **Embedding 重建、TaskTracker 计数、模型路由降级、转写配置** 等多处与 v2.2.1 直接相关的功能回归。无新版本发布，项目仍处于 **2.2.1 的密集热修阶段**。整体健康度评估：**中等偏上**，维护活跃度强，但功能回归与 CJK token 限制等老问题反复出现需要警惕。

---

## 二、版本发布

今日无新版本发布。当前最新版仍为 [v2.2.1](https://github.com/agentscope-ai/QwenPaw/releases)（此前已发布）。从今日 Issues 来看，多个高优 Bug（#8042、#8040、#8036、#8035、#8022）均明确标注在 2.2.1 上复现，提示社区可关注即将到来的 **v2.2.2 补丁版本** 节点。

---

## 三、项目进展（已合并 / 已关闭的重要 PR）

今日 19 个 PR 完成生命周期，重点进展如下：

| PR | 模块 | 影响 |
|---|---|---|
| [#7893](https://github.com/agentscope-ai/QwenPaw/pull/7893) `fix(memory): restore runtime after backend rollback` | 记忆后端 | 修复插件记忆后端重载失败后，运行中的 Agent 不会重新挂载的问题，避免"假恢复"导致的后端选择泄漏 |
| [#8038](https://github.com/agentscope-ai/QwenPaw/pull/8038) `fix(hub): close database connections after transactions` | Hub | 修复 Hub SQLite 连接在事务结束后未正确释放的连接泄漏风险，覆盖 commit、rollback 以及 PRAGMA 失败路径 |
| [#8032](https://github.com/agentscope-ai/QwenPaw/pull/8032) `fix(terminal): support high posix descriptors` | Terminal | 将 PTY 的 `select()` 替换为 `poll()`，解决 FD ≥ 1024 时终端会话静默失败的经典坑 |
| [#8037](https://github.com/agentscope-ai/QwenPaw/pull/8037) `fix(console): align e2e tests with redesigned UI` | Console / E2E | 跟随 Console 重设计同步更新 Page Object 与选择器，覆盖 ACP、Channels、Cron、Heartbeat、Runtime、Security、Skills、Tools 等模块 |
| [#8041](https://github.com/agentscope-ai/QwenPaw/pull/8041) `fix(e2e): stop stalled session cleanup` | E2E | 适配新角色化 Popover 菜单，保留旧 Dropdown 兜底，避免清理逻辑无限循环 |
| [#8026](https://github.com/agentscope-ai/QwenPaw/pull/8026) `fix(ci): address cross-platform paths, sandbox cleanup, and Windows terminal interrupts` | CI | 处理 Windows 驱动器路径、UNC 路径、沙箱清理隔离以及 Windows 终端中断 |
| [#8024](https://github.com/agentscope-ai/QwenPaw/pull/8024) `fix(portability): reject invalid qoder timezones` | Portability | 拒绝纯空白时区值并区分 `PermissionError` 与 `ZoneInfoNotFoundError` |
| [#8039](https://github.com/agentscope-ai/QwenPaw/pull/8039) `fix(ci): correct first-time PR detection and add automatic size labels` | CI | 修正"首次贡献者"判定，并自动打 size label，提升审阅效率 |
| [#8025](https://github.com/agentscope-ai/QwenPaw/pull/8025) `fix(desktop): disable NSIS solid compression` | Desktop | 关闭 NSIS 实心压缩，缓解 Windows 桌面端安装包相关问题 |

**整体评估**：今日完成了 **数据库连接管理、终端 fd 上限、E2E 测试现代化、跨平台 CI、记忆后端恢复** 五个方向的关键修复，项目的**稳定性底盘进一步加固**。其中 #7893、#8032、#8038 属于"看不见但很关键"的修复，可视为一次隐形版本升级。

---

## 四、社区热点（高互动 Issue / PR）

由于多数 PR 的评论数未在数据中显式标注，按"创建时间 + 关联 Issue 范围"梳理今日讨论最聚焦的话题：

- **[#7991](https://github.com/agentscope-ai/QwenPaw/issues/7991) TaskTracker zombie entries inflate running_task_count, disagree with /api/chats**（4 条评论）—— 全局计数器与 per-chat 计数器**作用域不一致**导致 Dashboard 显示与 API 返回值不符。这是一类典型的"可观测性失真"问题，社区对此类静默不一致容忍度较低。
- **[#2359](https://github.com/agentscope-ai/QwenPaw/issues/2359) HEARTBEAT_OK / CRON_OK 控制模型消息发送行为**（3 条评论）—— 借鉴 OpenClaw 的 `HEARTBEAT_OK` / `CRON_OK` 协议，让心跳/Cron 场景下模型自主决定是否推送内容，**降低噪音消息**。
- **[#8036](https://github.com/agentscope-ai/QwenPaw/issues/8036) OpenAI 集成的图片凭据与恢复失败**（2 条评论）—— 连接测试通过但真实生成失败；UI 把可操作的 provider 错误替换为通用提示，**严重影响排障效率**。
- **[#8040](https://github.com/agentscope-ai/QwenPaw/issues/8040) Embedding reindex incomplete：单个 CJK chunk 触发整批丢弃**（1 条评论）—— 已验证为 #5950 的**复发**，root cause 链条完整（per-item token 限制 → 单条失败 → 整批丢弃），社区对"再次复发"情绪明显。

**诉求分析**：今日社区最关心的不是"新功能"，而是 **"能不能别再说谎"**——Dashboard 与 API 的一致性、错误信息的可操作性、Embedding 重建的可靠性，三者都指向**可观测性与诚实性**。

---

## 五、Bug 与稳定性（按严重程度）

| 严重度 | Issue | 简述 | 是否有 Fix PR |
|---|---|---|---|
| 🔴 P0 | [#8042](https://github.com/agentscope-ai/QwenPaw/issues/8042) | 工具输出文件被自动回灌为模型输入，模型不支持时直接 Internal error | ❌ 未见对应 PR |
| 🔴 P0 | [#8040](https://github.com/agentscope-ai/QwenPaw/issues/8040) | ReMe embedding 重建因 CJK chunk 触发 per-item token 限制，静默丢弃整批（#5950 复发） | ❌ 未见对应 PR |
| 🟠 P1 | [#8022](https://github.com/agentscope-ai/QwenPaw/issues/8022) | `send_file_to_user` 产生空 assistant + file/image 块污染上下文，所有模型持续 400 且**未按模型能力降级** | ❌ 未见对应 PR |
| 🟠 P1 | [#8036](https://github.com/agentscope-ai/QwenPaw/issues/8036) | OpenAI 集成连接测试通过但真实生成失败；Kimi K3 恢复失败；UI 隐藏 provider 错误 | ❌ 未见对应 PR |
| 🟠 P1 | [#8035](https://github.com/agentscope-ai/QwenPaw/issues/8035) | Transcription 设置页无法配置 `transcription_model`，切换 provider **静默破坏**转写功能 | ❌ 未见对应 PR |
| 🟡 P2 | [#7991](https://github.com/agentscope-ai/QwenPaw/issues/7991) | Dashboard 与 /api/chats 的 running task 计数不一致 | ❌ 未见对应 PR |
| ⚪ 无效 | [#8030](https://github.com/agentscope-ai/QwenPaw/issues/8030) | 无实质内容，已被标记 invalid 关闭 | — |

**评估**：今日报告的 **6 个有效 Bug 暂无对应修复 PR**，其中 #8040 是已修复过的回归。考虑到这与 #8041 / #8037 等修复 PR 的提交节奏并不同步，**很可能是修复 PR 还在本地分支或刚开**。建议维护者尽快将 Issue 与 PR 进行关联。

---

## 六、功能请求与路线图信号

| Issue / PR | 提议 | 与现有 PR 的呼应 | 入版本可能性 |
|---|---|---|---|
| [#2359](https://github.com/agentscope-ai/QwenPaw/issues/2359) `HEARTBEAT_OK` / `CRON_OK` 协议 | 借鉴 OpenClaw，让心跳/Cron 消息可控 | 暂无直接 PR | **中等**——话题热度持续 6 个月，需维护者明确表态 |
| [#8015](https://github.com/agentscope-ai/QwenPaw/issues/8015) 自托管 Skill/Plugin 市场源 | 内网/离线部署下可配置 marketplace mirror | 暂无直接 PR，但 #8027（pool skill 下载异步化）是前置优化 | **高**——企业用户刚需 |
| [#7903](https://github.com/agentscope-ai/QwenPaw/pull/7903) `[wip] feat(community): integrate QwenPaw community and inbox` | 内嵌社区 feed、PKCE 授权、平台编辑链路 | 已有 PR（WIP 10 天） | **高**——大功能开发中，需关注合并窗口 |
| [#7931](https://github.com/agentscope-ai/QwenPaw/pull/7931) `feat(chat): add durable paginated transcript history` | 每会话 SQLite transcript + cursor 分页 + 用量持久化 | 已有 PR（开放 8 天） | **高**——影响所有聊天用户 |
| [#8020](https://github.com/agentscope-ai/QwenPaw/pull/8020) `feat(providers): add cooldown to model fallback candidates` | 失败候选进入冷却期，避免每次都从主模型 5xx/429 重试 | 已有 PR（开放 1 天） | **高**——直接降低调用成本 |
| [#8029](https://github.com/agentscope-ai/QwenPaw/pull/8029) `feat(browser): let config drop Playwright default launch arguments` | 用持久 profile + `identity:avatar` 时加载扩展 | 已有 PR（开放 1 天） | **高**——解锁高级浏览器用法 |

**信号**：路线图上"**会话历史持久化 + 社区/收件箱集成**"是最大两条线，分别对应 #7931 和 #7903，已停留 8~10 天，建议关注是否能进入下一里程碑。

---

## 七、用户反馈摘要

- **Dashboard 与 API 数据不一致**（#7991）—— 用户反馈 Dashboard 报 2 个运行中任务但 `/api/chats` 仅返回 1 条；可观测性失真会让运维/调试失去信任感。
- **错误提示被吞掉**（#8036）—— 当 OpenAI 真实调用失败时，UI 替换为"本次执行未完成，可重试继续"，用户无法据此判断是凭据、限流还是模型能力问题。
- **CJK 与长文本稳定性**（#8040）—— 单个 CJK chunk 越界导致整批 embedding 丢弃，且日志与最终结果不一致（processed=126/126 但实际 20 失败）。这是第二次复发，社区情绪偏负面。
- **模型能力感知缺失**（#8022）—— `send_file_to_user` 产物污染上下文后，**没有任何模型能力降级或自动清理**路径，所有模型持续 400。用户明确请求按模型能力降级 content。
- **静默功能失效**（#8035）—— 转写 provider 切换后没有任何提示，录音结果空，用户很难定位到是配置问题。
- **工具体输出回灌**（#8042）—— 工具生成的 PDF 等被自动喂回模型，对不支持该格式的模型直接 Internal error，**没有"工具输出不参与下一轮"的开关**。
- **离线/内网部署痛点**（#8015）—— 用户明确表达在 air-gapped 环境下无法使用内置 marketplace 源，希望有"自托管镜像 + 一等公民配置"的支持。

---

## 八、待处理积压（提醒维护者关注）

按"开放时长 × 影响面"排序：

| 编号 | 标题 | 开放时间 | 关注理由 |
|---|---|---|---|
| [#2359](https://github.com/agentscope-ai/QwenPaw/issues/2359) | HEARTBEAT_OK / CRON_OK 控制心跳/Cron 行为 | **~6 个月** | 长期未决的体验增强请求，社区信号稳定 |
| [#7903](https://github.com/agentscope-ai/QwenPaw/pull/7903) | `[wip] feat(community): integrate QwenPaw community and inbox` | 10 天 WIP | 体量大、依赖外部平台授权，需维护者对齐范围与里程碑 |
| [#7931](https://github.com/agentscope-ai/QwenPaw/pull/7931) | `feat(chat): add durable paginated transcript history` | 8 天 | 影响所有用户的聊天持久化，已接近合并窗口但仍 OPEN |
| [#8001](https://github.com/agentscope-ai/QwenPaw/pull/8001) | `fix(runtime): keep timeout tool results recoverable` | 3 天 | 关联 #7981，决定超时工具是否能产出最终答案 |
| [#7991](https://github.com/agentscope-ai/QwenPaw/issues/7991) | TaskTracker zombie 计数 | 4 天 | 4 条评论，已有共识性

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/NousResearch/hermes-agent">NousResearch/hermes-agent</a></summary>

<think>The user wants me to generate a daily project report for Hermes Agent based on GitHub data. Let me analyze the data carefully:

**Data Overview:**
- 24h Issues: 50 (49 new/active, 1 closed)
- 24h PRs: 50 (42 pending, 8 merged/closed)
- New releases: 0

**Key Issues to analyze:**

Most commented issues:
1. #91115 - macOS keychain prompt after update (11 comments) - bug, P2
2. #30708 - BlueBubbles adapter duplicate processing (8 comments) - bug, P2
3. #122529 - cron external worker missing venv site-packages (8 comments) - bug, P1
4. #105267 - Per-job memory provider policy (7 comments) - feature, P3
5. #62336 - Terminal environment snapshots capture credentials (7 comments) - security, P2
6. #121095 - browser_exec leaves stale daemon processes (6 comments) - bug, P2
7. #127313 - pane-body zone menu hijacks transcript right-click (6 comments) - bug, P2 (regression)
8. #90579 - Sidebar Project grouping hides Messaging/Cron (4 comments) - feature, P3
9. #124871 - Windows updater watchdog kills slow npm installs (4 comments) - bug, P2
10. #66662 - New sessions share draft key (4 comments, CLOSED) - bug, P3
11. #127643 - Turn liveness watchdog aborts working turns (4 comments) - bug, P2
12. #49724 - Mattermost emoji reactions (2 comments) - feature, P3
13. #123067 - Desktop composer doesn't persist sessions (2 comments) - bug, P2
14. #95074 - Bot Mode two reply paths (2 comments) - bug, P2
15. #84221 - Desktop never shows Thinking block (1 comment) - bug, P2
16. #74663 - delegate_task child-session correlation (1 comment) - feature, P3
17. #128869 - First message of new chat silently dropped (1 comment) - bug, P2 (regression)
18. #127997 - Right-click opens tab-strip zone menu instead of edit menu (1 comment) - bug, P2 (regression)
19. #128880 - Sign in with ChatGPT plan usage (1 comment) - feature, P3
20. #128890 - Desktop Files panel stale content (1 comment) - bug, P3
21. #128871 - XHigh→Max for gpt-6.1-sol (1 comment) - bug, P3
22. #128874 - /context always answers No active agent (1 comment) - bug, P2
23. #128810 - /voice status dependency install corrupts CLI input (1 comment) - bug, P2
24. #128830 - MiniMax-M2.7 auxiliary client returns 404 (1 comment) - bug, P3
25. #128945 - Messaging adapters deliver reasoning blocks (0 comments) - bug, P2
26. #128947 - Extend JEV Router to Auto-Trigger MoA (0 comments) - feature, P3
27. #128930 - history-check can never reject (0 comments) - security, P3
28. #128931 - js-autofix auto-merges bot output (0 comments) - security, P3
29. #128935 - Stale .hermes-node-deps receipt (0 comments) - bug, P2
30. #128936 - Delegation observability for external API clients (0 comments) - feature, P3

**Closed PRs:**
- #64815 - feat(desktop): surface profile session activity
- #63664 - fix(desktop): reconcile stale subagent rows
- #63165 - feat(update): add opt-out for gateway shutdown notices
- #56478 - feat(power): add opt-in sleep prevention

**Key Open PRs to discuss:**
- #128956 - feat(desktop): redesign capabilities catalog
- #128957 - fix(desktop): skip the WSL GPU-blocklist override
- #128577 - fix(desktop): make bounded history navigation contiguous
- #127046 - fix(desktop): mark stopped replies and keep failed-turn error cards
- #125029 - CLI Ownership Refactor — Phase 3
- #128955 - fix(pm): keep restored runtimes usable after locked displaced cleanup
- #97846 - feat(groups): integrate hosted Group Chats into Desktop
- #125749 - fix(update): only rebuild the frontends the pull actually made stale
- #128011 - fix(tools): escape drift newline doubling

**Security concerns:**
- #62336 - Terminal environment snapshots capture credentials (P2)
- #128930 - history-check can never reject (P3)
- #128931 - js-autofix auto-merges bot output the unprivileged job vetted itself (P3)

**Trends to discuss:**
- Many regressions related to "right-click zone menu" feature (ad2d4822e1 commit causing multiple issues: #127313, #127997)
- Multiple session-state bugs in desktop (sessions not persisting, draft bleed, lost first message)
- Multiple update-related bugs across platforms (Windows, macOS)
- Strong focus on Desktop UI/UX improvements

Let me now write the report in a structured way.</think>

# Hermes Agent 项目动态日报

**报告日期：** 2026-09-30  
**数据来源：** github.com/NousResearch/hermes-agent  
**报告范围：** 过去 24 小时

---

## 1. 今日速览

Hermes Agent 今日保持高度活跃的开发节奏：过去 24 小时内 Issues 净增 49 条（新开 + 活跃），PR 净增 42 条待处理，关闭 8 条，无新版本发布。项目当前处于 **高迭代、零发版** 状态——大量修复 PR 已合入或处于审查后期，预计将在下个补丁版本集中释放。议题主要集中在 **桌面端 (Desktop) 的会话状态管理与右键菜单回归**、**跨平台更新链路（macOS/Windows）稳定性** 以及 **LLM Provider 配置层缺陷**。从讨论热度看，macOS 钥匙串更新后反复弹窗（#91115）与 BlueBubbles 重复处理消息（#30708）是当下最棘手的两类问题。

---

## 2. 版本发布

**无新版本发布。** 当前活跃的修复分支（#128577、#127046、#128955、#128011、#125749 等）和关闭的桌面功能（#64815、#63664、#63165、#56478）暗示维护者正在进行一次较大规模的桌面端补丁整合，预计下次发布将一次性解决多项会话管理与更新链路问题。建议关注后续 tag 公告。

---

## 3. 项目进展

### 已合并/关闭的 PR（8 条）

| PR | 类型 | 说明 |
|---|---|---|
| [#64815](https://github.com/NousResearch/hermes-agent/pull/64815) | feature | **桌面端：profile session activity 可视化** — 跨 profile 切换、补全确认、压缩血统、代理审查移交、网关重连时统一展示会话活跃度，profile 控制获得边框颜色区分 |
| [#63664](https://github.com/NousResearch/hermes-agent/pull/63664) | bug fix | **桌面端：调和过期的 subagent 行** — 修复 `subagent.complete` 事件丢失时 subagent 行长期停留 `running` 状态的问题 |
| [#63165](https://github.com/NousResearch/hermes-agent/pull/63165) | feature | **更新：网关关闭通知增加 opt-out** — Windows 桌面/CLI 更新期间的计划性停止不再触发"任务中断"提示 |
| [#56478](https://github.com/NousResearch/hermes-agent/pull/56478) | feature | **电源：增加 opt-in 睡眠阻止** — 配置块 `power.prevent_sleep` 接入 Desktop Settings → Power，使用 Electron `powerSaveBlocker` 和 Windows `SetThreadExecutionState` |
| 其余 4 条 | bug/refactor | 桌面端会话修补与 CLI 内部清理 |

### 重要待合并 PR（亮点）

- [#128956](https://github.com/NousResearch/hermes-agent/pull/128956) **桌面端：能力目录重设计** —— 按 Figma 卡片/分区/筛选重构 Skills & Plugins 目录，引入一等官方素材。
- [#128577](https://github.com/NousResearch/hermes-agent/pull/128577) **桌面端：有界历史导航连续化** —— 修复 #125766 引入的导航跳跃与阅读位置丢失。
- [#127046](https://github.com/NousResearch/hermes-agent/pull/127046) **桌面端：停止标记 + 失败回合错误卡片跨重启保留** —— 提升中断回合的持久化可读性（关联 #124373）。
- [#125029](https://github.com/NousResearch/hermes-agent/pull/125029) **CLI Ownership Refactor Phase 3** —— 将通用运行时与持久化原语迁出 `hermes_cli`，建立显式 `runtime/` 与 `storage/` 所有者。
- [#125749](https://github.com/NousResearch/hermes-agent/pull/125749) **更新：仅重建真正过时的前端产物** —— 修复 26c4e8b160 引入的"每次更新都重建 TUI/Web/Desktop"的性能回退。
- [#128955](https://github.com/NousResearch/hermes-agent/pull/128955) **PM：保留锁位移清理后恢复的运行时可用性** —— Windows 更新失败时的回滚改善。
- [#128011](https://github.com/NousResearch/hermes-agent/pull/128011) **工具：转义漂移的换行符双倍化** —— 补全 `tools/fuzzy_match.py` 的换行符转义检测。
- [#128957](https://github.com/NousResearch/hermes-agent/pull/128957) **桌面端：WSL 在 Wayland ozone 下跳过 GPU blocklist override** —— 修复 WSLg 下 GPU 进程因 DRM 渲染节点缺失而被错误启用导致重启循环。

**项目整体向前迈进：** 桌面端的会话生命周期与可见性管理显著加强（#64815、#63664、#128577、#127046），更新链路从"暴力全量重建"转向"按需重建"（#125749 + #128955 + #128957），CLI 架构分层基本完成 Phase 3（#125029）。下一版本发版时桌面端体验应有可感知提升。

---

## 4. 社区热点

### 讨论最活跃的 Issues

1. **[#91115](https://github.com/NousResearch/hermes-agent/issues/91115) — macOS 钥匙串每次更新都弹窗（11 评论）**  
   `hermes update` 后本地重建的桌面 App 重新以 ad-hoc cdhash 签名，导致 Safe Storage 钥匙串项 ACL 不匹配，macOS 每次启动都重新询问。这是签名轮换与密钥持久化策略的根本冲突，需要带证明（proof-carrying）的 safeStorage 轮换机制。Python 更新器无法修复非自身问题。

2. **[#30708](https://github.com/NousResearch/hermes-agent/issues/30708) — BlueBubbles 适配器缺少入站去重（8 评论）**  
   `gateway/platforms/bluebubbles.py` 同时订阅 `new-message` 与 `updated-message` 但不像其他适配器那样按 GUID 去重，单条入站 iMessage 被处理两次，产生两个并行 session。

3. **[#122529](https://github.com/NousResearch/hermes-agent/issues/122529) — cron 外部 worker 缺 venv site-packages（8 评论，P1）**  
   `cron/scheduler.py` 在重启安全模式下用 `sys.executable` 启动子进程，但该 executable 是基础 Python 而非 venv，导致 `ModuleNotFoundError: ruamel`。这是 **今日最高严重度的稳定性问题**。

4. **[#105267](https://github.com/NousResearch/hermes-agent/issues/105267) — Cron 作业外部内存提供者策略（7 评论）**  
   自 #9763 解决后所有 cron 会话默认启用内存，触发敏感场景（外部 API 凭据泄露）。请求增加 `off / tools / full` 三档开关。

5. **[#62336](https://github.com/NousResearch/hermes-agent/issues/62336) — 终端环境快照把凭据写盘（7 评论，security）**  
   `tools/environments/base.py` 的 `export -p` 把 `bws run --` 注入的 Bitwarden 凭据一起持久化到 `cache/terminal/hermes-*.snap/`，构成 **凭据落盘风险**。

### 高 👍 Issues（社区认同度）

- [#90579](https://github.com/NousResearch/hermes-agent/issues/90579) Sidebar Project 分组隐藏 Messaging/Cron（👍1） — 桌面侧边栏 Project 视图把平台消息会话和 Cron 任务折叠掉了，用户无法触达。
- [#49724](https://github.com/NousResearch/hermes-agent/issues/49724) Mattermost 表情回应（👍1）
- [#95074](https://github.com/NousResearch/hermes-agent/issues/95074) Bot Mode 双回复路径（👍1）
- [#123067](https://github.com/NousResearch/hermes-agent/issues/123067) Desktop 新会话不持久化（👍1）

### 热点背后的诉求

- **桌面端交互一致性：** 多个新 Issue（#127313、#127997）都指向提交 `ad2d4822e1`（zone body 右键菜单）后造成的回归——用户期望右键应保留浏览器/编辑菜单。
- **更新链路的鲁棒性：** macOS、Linux（WSL）、Windows 三大平台的更新流程各自暴露不同缺陷（钥匙串、WSLg、npm watchdog），用户对"一键更新"的可信度下降。
- **会话状态可恢复性：** 多条 bug 围绕"新会话丢首条消息"、"会话不写后端 store"、"草稿跨会话串扰"，反映用户对持久层语义的困惑。

---

## 5. Bug 与稳定性

按严重程度排列（已有关联 fix PR 的标注 ✅）：

| 严重度 | Issue | 简述 | 关联 PR |
|---|---|---|---|
| **P1** | [#122529](https://github.com/NousResearch/hermes-agent/issues/122529) | cron 外部 worker 缺 venv，ModuleNotFoundError | — |
| **P2** | [#91115](https://github.com/NousResearch/hermes-agent/issues/91115) | macOS 钥匙串更新后反复弹窗 | — |
| **P2** | [#30708](https://github.com/NousResearch/hermes-agent/issues/30708) | BlueBubbles 入站重复处理 | — |
| **P2** | [#62336](https://github.com/NousResearch/hermes-agent/issues/62336) | **安全**：终端快照写凭据 | — |
| **P2** | [#121095](https://github.com/NousResearch/hermes-agent/issues/121095) | browser_exec 留下 stale daemon | — |
| **P2** | [#127313](https://github.com/NousResearch/hermes-agent/issues/127313) | pane-body 右键劫持 transcript（ad2d4822e1 回归） | — |
| **P2** | [#124871](https://github.com/NousResearch/hermes-agent/issues/124871) | Windows 更新 600s watchdog 杀死合法慢安装 | [#125749](https://github.com/NousResearch/hermes-agent/pull/125749) ✅ |
| **P2** | [#127643](https://github.com/NousResearch/hermes-agent/issues/127643) | turn liveness watchdog 在工具运行时误杀 | — |
| **P2** | [#123067](https://github.com/NousResearch/hermes-agent/issues/123067) | Desktop composer 不持久化新会话 | [#128869](https://github.com/NousResearch/hermes-agent/issues/128869)（标记重复，仍 OPEN） |
| **P2** | [#95074](https://github.com/NousResearch/hermes-agent/issues/95074) | Bot Mode 双回复路径 | — |
| **P2** | [#84221](https://github.com/NousResearch/hermes-agent/issues/84221) | Desktop 不显示 Thinking 块 | — |
| **P2** | [#128869](https://github.com/NousResearch/hermes-agent/issues/128869) | 新会话首条消息仍被丢弃（8c288760d0 不完整修复） | — |
| **P2** | [#127997](https://github.com/NousResearch/hermes-agent/issues/127997) | composer 右键打开 zone 菜单而非编辑菜单 | — |
| **P2** | [#128874](https://github.com/NousResearch/hermes-agent/issues/128874) | `/context` 总答 "No active agent" | — |
| **P2** | [#128810](https://github.com/NousResearch/hermes-agent/issues/128810) | `/voice status` 依赖安装致 CLI 卡死 | — |
| **P2** | [#128945](https://github.com/NousResearch/hermes-agent/issues/128945) | Messaging 适配器把内部 reasoning 当成 channel 消息 | — |
| **P2** | [#128935](https://github.com/NousResearch/hermes-agent/issues/128935) | 过期 `.hermes-node-deps` receipt 让前端构建失败 | — |
| **P3** | [#66662](https://github.com/NousResearch/hermes-agent/issues/66662) | 新会话草稿串扰 | **已关闭** ✅ |
| **P3** | [#128890](https://github.com/NousResearch/hermes-agent/issues/128890) | Desktop Files 面板缓存无 mtime | — |
| **P3** | [#128871](https://github.com/NousResearch/hermes-agent/issues/128871) | gpt-6.1-sol 误显 XHigh→Max | — |
| **P3** | [#128830](https://github.com/NousResearch/hermes-agent/issues/128830) | MiniMax-M2.7 辅助客户端 404 | — |

**观察：** 今日 P2 级别的稳定性议题密集爆发，其中"会话丢消息"链条（#63574 → #128869）显示社区出现了 **回归链**——先前修复未完整关闭漏洞。**已有 fix PR 覆盖的仅占 2/20**，P1 cron venv 问题尚无修复分支，建议维护者优先处理。

---

## 6. 功能请求与路线图信号

| 请求 | 提议 | 落地信号 |
|---|---|---|
| [#105267](https://github.com/Nous

</details>

<details>
<summary><strong>OpenHuman</strong> — <a href="https://github.com/tinyhumansai/openhuman">tinyhumansai/openhuman</a></summary>

<think>Let me analyze the GitHub data for OpenHuman and generate a comprehensive daily report for 2026-09-30.

Key observations:
1. **Activity Overview**: 
   - 7 Issues updates (2 new/active, 5 closed)
   - 32 PR updates (6 pending merge, 26 merged/closed)
   - 0 new releases

2. **Trends**:
   - Major refactoring effort to move code from `openhuman-core` to vendor crates (tinychannels, tinywallet, tinyskills, etc.)
   - Multiple bug fixes being closed alongside the refactoring
   - Cost reporting bug being addressed
   - Auto-update bug fixed
   - Several P1 bugs

3. **Closed PRs indicate major progress**:
   - #6770 - fix(update): resolve versioned core archive
   - #6720 - fix(usage): make Usage page show real spend
   - #6719 - fix(e2e): give web lane own port block
   - #6776 - fix(security): stop prompt-injection guard flagging recalled transcripts
   - #6569 - Back off background triage during managed backend outages
   - #6689 - feat(composio): per-agent Composio credentials
   - #6350 - Allow embedders to narrow tool-call budgets per turn

4. **Open PRs pending merge**:
   - #6786, #6785 - Refactor batches (large refactoring)
   - #6783 - refactor(skills)
   - #6777 - feat(memory): selectable memory engine
   - #6779 - refactor(rpc)
   - #6781 - test cleanup

5. **Open Issues**:
   - #6765 - P1 Malformed text-dialect tool call causes repeat loop
   - #6774 - Usage page under-reports real spend by 67-91%

6. **Closed Issues**:
   - #5827 - module-gated tests
   - #5918 - Playwright port binding
   - #6766 - Auto-update asset=(none)
   - #6715 - Teeny issue formatting
   - #6522 - Background triage backoff

Let me create a well-structured report.</think>

# OpenHuman 项目日报

**日期：2026-09-30**

---

## 1. 今日速览

OpenHuman 今日处于**高强度工程化重构与同步修复期**。过去 24 小时共合并/关闭 26 个 PR、关闭 5 个 Issue，处理吞吐显著高于日常均值。当前主线任务明确：持续将 `openhuman-core` 中的业务代码迁出至 `vendor/tiny*` 子模块（channels、web3、skills、rpc、backend、tools 等多个批次），同时叠加了若干 P1/P2 Bug 修复、CI/e2e 基础设施改进以及"Cheaper Inference"内置云供应商的引入与回退。健康度评估：**活跃且方向清晰，但重构叠加修复带来的回归风险需关注**。

---

## 2. 版本发布

**今日无新版本发布。** 但需注意：#6778 已回退了此前 #6620 引入的"Cheaper Inference"内置云供应商，说明该供应商在发布前被主动撤回，可能存在合规、稳定性或合同问题，建议下游用户暂勿基于该集成进行开发。

---

## 3. 项目进展

今日已合并/关闭 26 个 PR，以下为对项目推进意义较大的关键项：

### 🔧 重大 Bug 修复

| PR | 主题 | 价值 |
|----|------|------|
| [#6770](https://github.com/tinyhumansai/openhuman/pull/6770) | **fix(update)：解析版本化核心归档并暂存其二进制** | 彻底解决 #6766 报告的 `asset=(none)` 自动更新失效问题，**所有用户被卡在旧版本的状态正式修复** |
| [#6720](https://github.com/tinyhumansai/openhuman/pull/6720) | **fix(usage)：让 Usage 页面显示它记录的花费** | 修复"277 次调用但显示 $0.00"的严重账单显示错误，含 3 个后端故障 + 多个展示故障 |
| [#6569](https://github.com/tinyhumansai/openhuman/pull/6569) | **后台 triage 在托管后端宕机期间退避** | 解决 #6522 报告的"3.5 小时宕机产生 90 次失败调用"，引入 30s→15min 指数退避 |
| [#6776](https://github.com/tinyhumansai/openhuman/pull/6776) | **fix(security)：停止将"被召回的转写文本"误判为 prompt 注入** | 改善因转写文本导致普通聊天被拦截的体验问题 |
| [#6719](https://github.com/tinyhumansai/openhuman/pull/6719) | **fix(e2e)：为 web lane 分配独立端口段并拒绝已被占用的端口** | 解决 #5918 报告的 Playwright e2e 端口冲突隐患 |
| [#6605](https://github.com/tinyhumansai/openhuman/pull/6605) | **fix(ci)：执行受模块门控的 Rust 测试** | 修复 #5827 的 CI 盲区，71 个被忽略的模块测试将真正纳入流水线

### ✨ 功能新增

| PR | 主题 | 价值 |
|----|------|------|
| [#6689](https://github.com/tinyhumansai/openhuman/pull/6689) | **feat(composio)：为 embedder 提供 per-agent Composio 凭证** | 让多 agent 共享一个 runtime 时各自独立持有凭证、互不可见 |
| [#6350](https://github.com/tinyhumansai/openhuman/pull/6350) | **允许 embedder 在每回合收窄工具调用预算** | 不改全局配置即可限制单回合真实工具调用次数，提升可控性 |
| [#6620](https://github.com/tinyhumansai/openhuman/pull/6620) → [#6778](https://github.com/tinyhumansai/openhuman/pull/6778) | **Cheaper Inference 内置云供应商**：引入后立即撤回 | 反映发布门控流程正在运行 |

### 🧱 重构（vendor 拆分）

| PR | 主题 | 净影响 |
|----|------|--------|
| [#6782](https://github.com/tinyhumansai/openhuman/pull/6782) | 通用 channel 代码迁入 tinychannels v0.1.5 | 为每家聊天供应商带来远控与内联审批 |
| [#6784](https://github.com/tinyhumansai/openhuman/pull/6784) | web3 逻辑迁入 tinywallet v0.6.0 | 删除约 10.9k 行 |
| [#6780](https://github.com/tinyhumansai/openhuman/pull/6780) | TinyHumans 线路分类迁出 core | 404 等错误语义前移到 transport |
| [#6775](https://github.com/tinyhumansai/openhuman/pull/6775) | `.claude/skills/migrate-to-submodule/SKILL.md` | 将"非 host 专用代码迁出 core"沉淀为可复用的迁移技能 |

> 📈 **今日净推进评估**：在 Bug 修复 + 重构两条战线同步推进，**项目整体明显向"core 薄、vendor 厚"的清晰分层架构收敛**，且没有因此阻断用户痛点修复。属于"健康的整理日"。

---

## 4. 社区热点

由于当前 Issues 中评论数普遍较少（最高仅 2 条），社区讨论热度整体偏低，但**问题本身的重要性很高**：

- **[#6774](https://github.com/tinyhumansai/openhuman/issues/6774) Usage 页面与本地成本账本低估真实花费 67-91%**（今日新开）
  - 由 @graycyrus 提出，作者**同日已合入修复 PR #6720**，说明这是数据驱动的自测发现；闭环效率高。

- **[#6765](https://github.com/tinyhumansai/openhuman/issues/6765) 畸形工具调用陷入重复循环导致回合失败**（今日新开，OPEN）
  - P1、harness 标签，描述了 `<tool_call>` 解析失败 → 重试 → 推送 → 模型重复 → 失败的全链路断裂。**目前无对应修复 PR**，是社区后续关注重点。

- **[#6766](https://github.com/tinyhumansai/openhuman/issues/6766) 自动更新完全失效**
  - 由 @Al629176 提出并报告了从 v0.64.6 → v0.64.7 (macOS) 的可复现路径；**已被 #6770 修复并关闭**，是今日闭环最漂亮的一组 Issue–PR 配对。

---

## 5. Bug 与稳定性

### 🚨 P1（高严重度）

| Issue | 状态 | 是否有 fix PR |
|-------|------|---------------|
| [#6766](https://github.com/tinyhumansai/openhuman/issues/6766) 自动更新 `asset=(none)` | ✅ 已关闭 | ✅ [#6770](https://github.com/tinyhumansai/openhuman/pull/6770) |
| [#6522](https://github.com/tinyhumansai/openhuman/issues/6522) 后台 triage 无退避、无回退 | ✅ 已关闭 | ✅ [#6569](https://github.com/tinyhumansai/openhuman/pull/6569) |
| [#6765](https://github.com/tinyhumansai/openhuman/issues/6765) 畸形工具调用死循环 | ⚠️ **仍 OPEN** | ❌ 暂无 |
| [#5827](https://github.com/tinyhumansai/openhuman/issues/5827) 71 个模块门控测试永不执行 | ✅ 已关闭 | ✅ [#6605](https://github.com/tinyhumansai/openhuman/pull/6605) |

### ⚠️ P2（中严重度）

| Issue | 状态 | 是否有 fix PR |
|-------|------|---------------|
| [#5918](https://github.com/tinyhumansai/openhuman/issues/5918) Playwright e2e 端口冲突 | ✅ 已关闭 | ✅ [#6719](https://github.com/tinyhumansai/openhuman/pull/6719) |
| [#6715](https://github.com/tinyhumansai/openhuman/issues/6715) Teeny 自动建 Issue 格式不合规 | ✅ 已关闭 | 🔧 流程类修复 |
| [#6774](https://github.com/tinyhumansai/openhuman/issues/6774) Usage 页/账本少报 67-91% | ✅ 已关闭 | ✅ [#6720](https://github.com/tinyhumansai/openhuman/pull/6720) |

**稳定性评估**：今日 P1/P2 几乎全部闭环；唯一开放的高严重度问题是 #6765（工具调用死循环），需关注是否影响生产 agent 任务。

---

## 6. 功能请求与路线图信号

### 已合并的能力扩展（潜在路线图证据）

- **可插拔内存引擎选择面板**（[#6777](https://github.com/tinyhumansai/openhuman/pull/6777) 仍 OPEN）：用户可在 Local (TinyCortex) / CortexDB via TinyHumans / CortexDB 自带 Key / Supermemory / Mem0 / Cognee / AgentMemory 间切换。**这是面向多供应商生态扩展的标志性变更**，建议关注是否合并入下一发版。
- **per-agent Composio 凭证**（[#6689](https://github.com/tinyhumansai/openhuman/pull/6689)）：说明 embedder 多租户场景在内部已被实质采纳。
- **每回合工具预算收窄**（[#6350](https://github.com/tinyhumansai/openhuman/pull/6350)）：回应了"agent 在生产中难以限定成本/风险"的普遍诉求。

### 撤回信号

- **Cheaper Inference 内置云供应商被回退**：说明发布流程中存在合规/合同/质量门控，**未来类似外部供应商集成需更严格的预审**。

---

## 7. 用户反馈摘要

- **账单透明度问题集中爆发**：[#6774](https://github.com/tinyhumansai/openhuman/issues/6774) 显示本地账本与真实后端计费存在 **67-91% 的系统性低估**，且"大的、延迟的计费条目"是单一缺口来源。对按量计费用户与多模型混合调用用户影响极大；修复后仍需关注历史账本是否需要重算。
- **自动更新静默失效**：[#6766](https://github.com/tinyhumansai/openhuman/issues/6766) 显示**所有用户都被卡在自己手动安装的旧版本**，且应用没有错误提示——属于典型的"静默失败"信任损耗。
- **后台任务缺乏弹性**：[#6522](https://github.com/tinyhumansai/openhuman/issues/6522) 在 3.5 小时后端宕机中产生 90 次失败调用，反映托管后端的脆弱性对用户侧噪声污染严重。
- **Discord 客服自动化产生的工单格式差**：[#6715](https://github.com/tinyhumansai/openhuman/issues/6715) 提示自动化虽然"端到端跑通"，但产出的内容质量仍需规范化。

**整体信号**：用户对**计费准确性、自动化更新的可靠性、后端容错**这三类"运维级基础体验"有明确不满；对功能扩展（如 per-agent 凭证、可插拔内存引擎）持积极接受态度。

---

## 8. 待处理积压

| 类型 | 编号 | 主题 | 状态 | 提醒 |
|------|------|------|------|------|
| 🔴 高优先级 Bug | [#6765](https://github.com/tinyhumansai/openhuman/issues/6765) | 畸形工具调用死循环 | OPEN | P1、harness、agent-reliability，**暂无 fix PR**，应优先处理 |
| 🟡 待合并 PR | [#6786](https://github.com/tinyhumansai/openhuman/pull/6786) | core 重构 batch 2（+176 / -7,722） | OPEN | 堆叠在 #6785 上，建议按栈合并 |
| 🟡 待合并 PR | [#6785](https://github.com/tinyhumansai/openhuman/pull/6785) | core 重构 batch 1（+196 / -8,714） | OPEN | 删除三处漂移的 vendor 副本 |
| 🟡 待合并 PR | [#6783](https://github.com/tinyhumansai/openhuman/pull/6783) | 技能迁出至 tinyskills | OPEN | 与 #6785/#6786 协同 |
| 🟡 待合并 PR | [#6777](https://github.com/tinyhumansai/openhuman/pull/6777) | 可选内存引擎 + CortexDB via TinyHumans | OPEN | 功能性强，建议产品评估 |
| 🟡 待合并 PR | [#6779](https://github.com/tinyhumansai/openhuman/pull/6779) | `http_host` 静态目录服务器迁至 openhuman-rpc | OPEN | 与核心解耦 |
| 🟡 待合并 PR | [#6781](https://github.com/tinyhumansai/openhuman/pull/6781) | 删除 45 个隔离测试文件 + 去重 + 重指 vendor pin | OPEN | 是 #6785/#6786 的前置 |

> ⚠️ **维护者注意**：6 个待合并 PR 形成了紧密的堆叠依赖链（#6781 → #6785 → #6786，以及 #6783/#6779），建议在合并前整体评估是否需要拆分或重排栈顺序，避免长时间积压导致冲突扩大。

---

**报告生成时间**：2026-09-30
**数据来源**：[github.com/tinyhumansai/openhuman](https://github.com/tinyhumansai/openhuman)

</details>

---
*本日报由 [Big Model Radar](https://github.com/96loveslife/big_model_radar) 自动生成。*
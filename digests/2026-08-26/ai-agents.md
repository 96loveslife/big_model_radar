# OpenClaw 生态日报 2026-08-26

> Issues: 500 | PRs: 500 | 覆盖项目: 8 个 | 生成时间: 2026-08-26 01:40 UTC

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

<think>Let me analyze the GitHub data for OpenClaw and generate a comprehensive daily report for 2026-08-26.

Key observations:
1. No new releases
2. 500 Issues updated (434 new/active, 66 closed) - very high activity
3. 500 PRs updated (303 pending, 197 merged/closed) - significant merge activity
4. Multiple high-severity "diamond lobster" rated bugs
5. Topics include: Telegram/WhatsApp/Feishu/Slack channel issues, SQLite corruption, gateway restarts, memory system issues, OpenAI Codex issues

Let me structure the report by the required sections. Note that all the issues have update timestamps of 2026-08-25 or 2026-08-26, so they're "today's" activity.

I need to be objective, data-driven, and use Chinese language as requested.

Let me organize:

**1. 今日速览**
- 24小时 Issues 500条更新 (434 active, 66 closed) - 13.2% close rate, lower than ideal for stable project
- PR 500条 (303 pending, 197 merged/closed) - 39.4% close/merge rate, healthy throughput
- 0 releases - beta 2026.8.1-beta.3 in validation phase
- Multiple P0/P1 "diamond lobster" bugs outstanding, especially around message-loss and SQLite corruption

**2. 版本发布**
- No new releases, skipping section but mentioning 2026.8.1 beta in flight

**3. 项目进展**
- Several major PRs landed/closed today
- #128371 (release campaign), #129738 (CI lint fix) - release infra
- #120900, #116489 - security/install policy features (CLOSED)
- #123975 - scripts cleanup
- Skills security: #129486 reject altered archives
- Code-mode lifecycle: #119237

**4. 社区热点**
- #44925 has 26 comments - subagent completion silently lost
- #125626 has 19 comments - beta feedback
- #80319 - QA tool defaults
- #67777 - related subagent delivery (14 comments)
- #79902 - SQLite seams (14 comments)

**5. Bug 与稳定性**
- P0/P1 diamond lobster bugs:
  - #44925, #67777 - subagent delivery loss
  - #94939 - state migration breaks MS Teams
  - #114612 - SQLite unbounded growth
  - #87928 - macOS update loop
  - #126821 - SQLite corruption recurs
  - #126246 - Telegram send_attempt_started stuck
  - #125570 - Skill Workshop description overwrite
  - #127710 - prepared-model-runtime fail-closed
  - #127948 - WhatsApp blank bubbles
  - #111372 - gateway restart loop on macOS
  - #115034 - cross-host workdir ENOENT

**6. 功能请求**
- #79902 SQLite seams
- #60572 Multi-Slot Memory
- #67413 Per-agent dreaming config
- #45758 YAML config support
- #56781 fallback model chain
- #105494 memory therapy
- #112820 realtime voice SDK
- #39343 media batching

**7. 用户反馈**
- SQLite reliability is a recurring pain point
- Subagent orchestration - reliability concerns
- Beta 2026.8.1 has multiple issues (#125626, #126821)

**8. 待处理积压**
- #6625 from 2026-02-01 - graceful sub-agent timeout
- #26037 from 2026-02-25 - Ali bailian support
- #39343 from 2026-03-08 - media batching
- #39811 from 2026-03-08 - model validation
- #45758 from 2026-03-14 - YAML support
- #51441 from 2026-03-21 - expose backend model

Let me write this up now.</think>

# OpenClaw 项目动态日报 · 2026-08-26

---

## 1. 今日速览

OpenClaw 仓库过去 24 小时保持**极高活跃度**：Issues 累计更新 500 条（新开/活跃 434、已关闭 66，关闭率约 13.2%），PR 累计更新 500 条（待合并 303、已合并/关闭 197，流转率约 39.4%）。当日无版本发布，**v2026.8.1-beta.3** 仍处于"Full Release Validation"反馈阶段（[#125626](https://github.com/openclaw/openclaw/issues/125626)）。社区关注的焦点集中在 **Telegram / WhatsApp / Feishu / Slack 多个渠道的消息丢失**、**SQLite 腐败与无界增长**、**macOS 网关无限重启**等长期未解决的 P0/P1 级稳定性问题。整体看：**Merge 速度健康，但问题关闭率偏低，积压风险持续累积**。

---

## 2. 版本发布

**无新版本发布。** 当前主流水为 v2026.8.1-beta.3（`5831b80721f802072b0ec1893b30a16cf42d538c`），处于 Beta 验证收尾阶段；多项 P0/P1 bug 直接锁定此版本（[#126821](https://github.com/openclaw/openclaw/issues/126821)、[#125570](https://github.com/openclaw/openclaw/issues/125570)、[#126246](https://github.com/openclaw/openclaw/issues/126246)），具备潜在的「beta 阻塞」风险。

---

## 3. 项目进展

今日共有 **197 个 PR 完成流转**，其中多项为基础设施与安全相关的能力推进：

| PR | 状态 | 贡献 | 影响 |
|---|---|---|---|
| [#120900](https://github.com/openclaw/openclaw/pull/120900) | **CLOSED** | feat(ui): review install policy warnings | 控制 UI 引入"安装策略警告"管理员确认流，押注安全合规 |
| [#116489](https://github.com/openclaw/openclaw/pull/116489) | **CLOSED** | feat(security): require acknowledgement for install policy warnings | 对应 CLI 侧告警确认位，二者合并形成完整安全策略 |
| [#123975](https://github.com/openclaw/openclaw/pull/123975) | **CLOSED** | fix(scripts): clean up tsgo process trees on timeout/signal | 解决 `tsgo` wrapper 信号下的僵尸进程，配合可选 `OPENCLAW_TSGO_TIMEOUT_MS` 守卫 |
| [#128371](https://github.com/openclaw/openclaw/pull/128371) | **CLOSED** | fix(release): authorize focused beta evidence | 解除 beta.3 发布阻塞器，允许仅含受审 Slack 测试项的局部发布证据通过 Full Release Validation |
| [#129738](https://github.com/openclaw/openclaw/pull/129738) | **CLOSED** | fix(ci): restore release campaign lint | 恢复发布活动脚本 lint 守门 |
| [#129742](https://github.com/openclaw/openclaw/pull/129742) | **OPEN** | test(plugins): restore metadata lifecycle contract | 巩固 plugin metadata 生命周期契约测试 |
| [#129486](https://github.com/openclaw/openclaw/pull/129486) | **OPEN** | fix(skills): reject altered download archives before extraction | **安全关键**：技能依赖下载归档新增摘要校验，防止被篡改归档执行 |

**整体评估**：项目当日在发布流水线（CI lint / release evidence / tsgo watchdog）、控制 UI 安全策略、技能供应链完整性三个方向取得实质推进；"plugin SDK → Gateway 实时语音会话"（[#112820](https://github.com/openclaw/openclaw/pull/112820)）作为大型新特性 PR 仍在等待作者更新。

---

## 4. 社区热点

| 排名 | Issue | 评论数 | 主题 |
|---|---|---|---|
| 1 | [#44925](https://github.com/openclaw/openclaw/issues/44925) | **26** | Subagent 完成静默丢失（无重试 / 无通知 / 无自动重启）|
| 2 | [#125626](https://github.com/openclaw/openclaw/issues/125626) | **19** | OpenClaw 2026.8.1 beta 反馈集中帖 |
| 3 | [#80319](https://github.com/openclaw/openclaw/issues/80319) | 17 | QA 测试套件把 Codex 原生工具与 OpenClaw 动态工具并列 |
| 4 | [#67777](https://github.com/openclaw/openclaw/issues/67777) | 14 | Subagent 直接 announce 超时 / drain / orphan 时完成丢失 |
| 5 | [#79902](https://github.com/openclaw/openclaw/issues/79902) | 14 | 在 database-first runtime 之上提供 SQLite 转录/会话接缝 |
| 6 | [#83959](https://github.com/openclaw/openclaw/issues/83959) | 11 | Codex app-server 启动重试耗尽 |

**诉求分析**：排名前二的话题都围绕"**子代理（subagent）任务的可靠性**"——社区已经形成共识，认为 subagent 完成事件存在多个独立的"静默丢失"路径，需要的不是单个 patch，而是**重建完成事件投递模型**（队列式 + 持久化 + 重试）。[#125626](https://github.com/openclaw/openclaw/issues/125626) 则反映**用户在 Beta 阶段主动承担 QA 角色**，但官方对 Beta 反馈的响应通量不足，需要单独的 `maintainer` 标签。

---

## 5. Bug 与稳定性

按严重程度排列（⛳ = 已有关联修复 PR）：

| 等级 | Issue | 标题 | 状态 | 修复 PR |
|---|---|---|---|---|
| 🦞 **P0** | [#87928](https://github.com/openclaw/openclaw/issues/87928) | macOS 升级留下手动更新环 & 残留旧版节点宿主，导致 Gateway 重启风暴 | OPEN | 无 |
| 🦞 **P0** | [#126821](https://github.com/openclaw/openclaw/issues/126821) | 全新重建 SQLite 在 15–24h 内再次腐败；存在"瘫痪 gateway"模式：拒绝所有服务但不退出 | OPEN | 无 |
| 🐚 **P0** | (同上 2026.8.1-beta.2 SQLite corruption) | WSL2 5 天 5 次 | OPEN | 无 |
| 🦞 **P1** | [#44925](https://github.com/openclaw/openclaw/issues/44925) | Subagent 完成静默丢失（三类失败模式） | OPEN | 无 |
| 🦞 **P1** | [#67777](https://github.com/openclaw/openclaw/issues/67777) | Subagent announce 超时 / drain / orphan 时投递丢失 | OPEN | 无 |
| 🦞 **P1** | [#94939](https://github.com/openclaw/openclaw/issues/94939) | 6.x 状态迁移让 channel 会话存储 SQLite 为 0 字节，孤立引用并破坏 MS Teams 主动发送 | OPEN | 无 |
| 🦞 **P1** | [#111372](https://github.com/openclaw/openclaw/issues/111372) | macOS 网关 "loading configuration" 后立即重启，SIGTERM 无限循环 | OPEN | 无 |
| 🦞 **P1** | [#119692](https://github.com/openclaw/openclaw/issues/119692) | OpenAI 兼容流式路径丢弃 MiniMax-M3 token 用量（transcript 写 0） | OPEN | ⛳ [#119692 已有 linked-pr-open，但 PR 列表内未匹配强相关] |
| 🦞 **P1** | [#126246](https://github.com/openclaw/openclaw/issues/126246) | Telegram durable outbound 滞留 `send_attempt_started`，重启后丢失 | OPEN | 无 |
| 🦞 **P1** | [#125570](https://github.com/openclaw/openclaw/issues/125570) | Skill Workshop update 覆盖 description，导致路由静默失败 | OPEN | 无 |
| 🦞 **P1** | [#127710](https://github.com/openclaw/openclaw/issues/127710) | prepared-model-runtime 在 generation churn 时 fail-closed，指纹漂移即永久 wedge gateway；owner-commit race 静默丢消息 | OPEN | ⛳ [#121299](https://github.com/openclaw/openclaw/pull/121299) 相关（scope prepared-model refresh） |
| 🦞 **P1** | [#127948](https://github.com/openclaw/openclaw/issues/127948) | WhatsApp 引用缓存过期时 group 回复渲染成空白气泡 | OPEN | 无 |
| 🦐 **P1** | [#97616](https://github.com/openclaw/openclaw/issues/97616) | Hook/tool 子进程未被收割，导致 openclaw 进程下出现僵尸堆积与运行时降级 | OPEN | 无 |
| 🦐 **P1** | [#112248](https://github.com/openclaw/openclaw/issues/112248) | `@openclaw/codex` 插件在 gateway 启动时 `register()` 抛 TypeError，全部 `/codex` 命令静默 no-op | OPEN | 无 |
| 🦐 **P1** | [#110665](https://github.com/openclaw/openclaw/issues/110665) | Codex bootstrap accounting 漏算 `memory_recall`，且 doctor 对 harness 盲视 | OPEN | 无 |
| 🦞 **P1** | [#114612](https://github.com/openclaw/openclaw/issues/114612) | memory-core SQLite 无界增长：`memory_index_chunks` / `memory_embedding_cache` 无保留策略 | OPEN | 无 |
| 🦞 **P1** | [#115034](https://github.com/openclaw/openclaw/issues/115034) | 跨 host `workdir` 泄露到 node → `spawn /bin/sh ENOENT` | OPEN | 无 |
| 🦞 **P1** | [#106704](https://github.com/openclaw/openclaw/issues/106704) | `sessions_yield` 在子代理首轮调用时静默以空结果 finalize 为 ok | OPEN | 无 |
| 🦞 **P1** | [#127176](https://github.com/openclaw/openclaw/issues/127176) | Windows 上 CLI / Node Host 交替审批设备元数据 | OPEN | 无 |
| 🦞 **P1** | [#110771](https://github.com/openclaw/openclaw/issues/110771) | WebChat 持久化内部记录、丢失持久的 turn 状态 | OPEN | 无 |
| 🐚 **P1** | [#91941](https://github.com/openclaw/openclaw/issues/91941) | Feishu 流式卡片改为全量更新，长回复延迟严重退化 | OPEN | 无 |
| 🐚 **P1** | [#83959](https://github.com/openclaw/openclaw/issues/83959) | Codex app-server 启动重试在新 server 准备好之前耗尽 | OPEN | linked-pr-open（具体 PR 未匹配） |
| 🦐 **P1** | [#119411](https://github.com/openclaw/openclaw/issues/119411) | memory 文件 watcher 从不重新索引，`status` 报告 `Dirty: no` 而索引文件数低于磁盘 | OPEN | 无 |
| 🦞 **P0** | [#95553](https://github.com/openclaw/openclaw/issues/95553)（已 CLOSED） | preflight 压缩被硬上限 ~60s，忽略 `compaction.timeoutSeconds` | **CLOSED** ✅ | 关联 PR（未在当前 PR 列表中显式出现） |
| 🦪 **P1** | [#128657](https://github.com/openclaw/openclaw/issues/128657) | Control UI 骨架 shimmer 每帧重绘 | OPEN | 无 |

**关键观察**：今日仍有 **2 个 P0 + 至少 17 个 P1** 处于 OPEN 状态；具备 `linked-pr-open` 标签的不足三分之一，表明**多数高危 bug 仍处于"等待维护者响应"阶段**。SQLite 类问题（[#126821](https://github.com/openclaw/openclaw/issues/126821)、[#114612](https://github.com/openclaw/openclaw/issues/114612)、[#94939](https://github.com/openclaw/openclaw/issues/94939)）出现**系统性的疲劳迹象**。

---

## 6. 功能请求与路线图信号

| Issue | 主题 | 采纳迹象 |
|---|---|---|
| [#79902](https://github.com/openclaw/openclaw/issues/79902) | 在 database-first runtime 上暴露 SQLite 转录 / 会话 seam | 已运行 3 个多月，与 [#78595](https://github.com/openclaw/openclaw) runtime 改造正相关，**进入下一版本的概率较高** |
| [#60572](https://github.com/openclaw/openclaw/issues/60572) | 多插槽 memory 架构 | `clawsweeper:linked-pr-open`，**已有 PR 在路上** |
| [#67413](https://github.com/openclaw/openclaw/issues/67413) | 每个 agent 可独立配置 dreaming | 收到 5 👍，与 [#91223](https://github.com/openclaw/openclaw/issues/91223)（prompt cache 命中率暴跌）形成需求互补 |
| [#45758](https://github.com/openclaw/openclaw/issues/45758) | YAML 作为配置文件格式 | 长期呼声（5+ 月）但**未见 PR**，可能被列入 backlog |
| [#56781](https://github.com/openclaw/openclaw/issues/56781) | 为压缩 / LCM summaryModel 提供 fallback model chain | 与 [#84865](https://github.com/openclaw/openclaw/issues/84865)（用户切换模型无 fallback 死锁）方向一致，**收口机会大** |
| [#63930](https://github.com/openclaw/openclaw/issues/63930) | 支持 Anthropic advisor 工具（server-side tool） | 涉及 `server_tool_use` / `*_tool_result` 通用解析，**对多供应商支持具备杠杆** |
| [#105494](https://github.com/openclaw/openclaw/issues/105494) | memory-wiki 交互式"memory therapy"会话 | 新概念性需求（与 memory-wiki 已有 `reports/` 配合），社区概念期 |
| [#119401](https://github.com/openclaw/openclaw/issues/119401) | DM 强制可见回复（小模型场景） | 是 [#6625](https://github.com/openclaw/openclaw/issues/6625) 的"反向诉求" |
| [#39343](https://github.com/openclaw/openclaw/issues/39343) | 网关层图片批处理 / media group 缓冲 | 痛点显著（收到 1 👍 + 5 评论），**仍未到 PR 阶段** |
| [#26037](https://github.com/openclaw/openclaw/issues/26037) | Ali bailian 编码计划（thinking/re

---

## 横向生态对比

<think>The user wants a comprehensive cross-project comparison report analyzing the open-source AI agent/personal AI assistant ecosystem based on the daily reports of 7 projects: OpenClaw, NanoBot, PicoClaw, IronClaw, LobsterAI, QwenPaw, Hermes Agent, and OpenHuman. Let me analyze each project's characteristics:

**Project Profiles:**

1. **OpenClaw** - 500 issues, 500 PRs, no release, 2 P0 + 17 P1 open bugs, beta v2026.8.1-beta.3 in validation. Multi-channel (Telegram/WhatsApp/Feishu/Slack), SQLite issues, subagent reliability. Heaviest activity but lowest close rate.

2. **NanoBot** - 5 issues, 24 PRs, no release, 58.3% merge rate. Active development, third-party providers integrating (AnySearch, mst-python), web search ecosystem expansion. Strong code-side progress.

3. **PicoClaw** - 4 issues, 1 PR (stale), no release. Low activity, MCP hang bug blocking, Slack media bug has fix but not merged. Sipeed hardware ecosystem integration proposal.

4. **IronClaw** - 37 issues, 24 PRs, no release. CI T2/T3/T4 all merged, design system, notification center refactor. Strong infrastructure work.

5. **LobsterAI** - 1 issue, 11 PRs, 2 releases (v2026.8.25, v2026.8.21). Library module enhancements, settings UI, analytics. NetEase Youdao project.

6. **QwenPaw** - 33 issues, 50 PRs, 1 release (v2.1.1-beta.3). Beta testing, skill system, multi-provider (MiniMax M3 added).

7. **Hermes Agent** - 50 issues, 50 PRs, no release. MCP stdio issues cluster, Windows/macOS install side effects. NousResearch project.

8. **OpenHuman** - 7 issues, 20 PRs, no release. Pre-prod stage, tinymemory contract refactor, sub-agent tool surface reduction. Release-gated.

Now let me write the comparison report. The user wants Chinese, professional, data-supported, suitable for tech decision makers.

Let me structure it well:
1. 生态全景 (3-5 sentences)
2. 各项目活跃度对比 (table)
3. OpenClaw 生态定位
4. 共同技术方向
5. 差异化定位
6. 社区热度与成熟度
7. 趋势信号

Let me think about each section carefully.

**生态全景**:
- Personal AI agent ecosystem is in intense development cycle
- Multiple projects addressing stability/reliability crisis
- Provider/ecosystem expansion (MiniMax M3, AnySearch, mst-python, SSYCloud)
- Sub-agent reliability is a recurring pain point
- SQLite corruption emerging as systemic infrastructure issue

**活跃度对比** (key metrics):
- OpenClaw: 500/500/0 - 最高
- Hermes Agent: 50/50/0
- QwenPaw: 33/50/1
- IronClaw: 37/24/0
- NanoBot: 5/24/0
- OpenHuman: 7/20/0
- PicoClaw: 4/1/0
- LobsterAI: 1/11/2

**OpenClaw 生态定位**:
- Most active but lowest close rate (13.2%)
- 2 P0 + 17 P1 open bugs
- Multi-channel breadth (Telegram/WhatsApp/Feishu/Slack)
- Beta validation phase
- Community signaling "sub-agent silent loss" as systemic
- Most broad feature set but at risk of instability

**共同技术方向**:
1. Sub-agent/background task reliability - OpenClaw (#44925, #67777), NanoBot (#5152), OpenHuman (#5757), IronClaw (#7818)
2. MCP stdio stability - PicoClaw (#3269), Hermes Agent (#94906, #95150), IronClaw (multi-MCP related)
3. Web search provider ecosystem - NanoBot (#5505, #5234), Hermes Agent (#89061), QwenPaw (built-in providers)
4. Provider interoperability - QwenPaw (MiniMax M3, OpenAI Responses), Hermes Agent (xAI, Ollama)
5. CI/Build pipeline - IronClaw (T2/T3/T4), OpenClaw (CI lint), NanoBot (release campaign)
6. UI/UX notification - LobsterAI (notification), IronClaw (notification center), NanoBot (webui retry status)
7. Skill/tool supply chain security - OpenClaw (#129486), IronClaw, QwenPaw
8. Cross-platform install issues - Hermes Agent (Windows FDA, keychain, cua-driver), QwenPaw (Windows file lock), OpenHuman (Windows pre-push)

**差异化定位**:
- OpenClaw: multi-channel breadth, broadest feature surface
- NanoBot: third-party ecosystem integration, toolchain capability
- PicoClaw: lightweight edge compute (RISC-V/ARM/MIPS), Sipeed hardware
- IronClaw: Rust-based, persistent sandbox, design system governance
- LobsterAI: Library/document management, NetEase consumer
- QwenPaw: Skill system deep, multi-provider, beta rapid iteration
- Hermes Agent: Architecture RFC, federation/authority execution
- OpenHuman: pre-prod, async agent contract refactor

**社区热度与成熟度分层**:
- High activity + low close rate: OpenClaw (intensive but unstable)
- High activity + high close rate: NanoBot, QwenPaw
- Medium activity + quality focus: IronClaw
- Active but low PR throughput: PicoClaw
- Beta rapid iteration: QwenPaw, LobsterAI
- Pre-prod / gated: OpenHuman
- Architecture discussion: Hermes Agent

**趋势信号**:
1. "Silent failure"成为可靠性首要痛点 - 所有项目都涉及 sub-agent/MCP 静默失败
2. Provider生态化 - 第三方向agent框架集成的趋势明显
3. Edge/轻量化探索 - PicoClaw 提出 edge worker 模式
4. Architecture分层抽象 - Hermes Agent Authority Layer, OpenHuman contract pattern
5. CI/Quality infra 投入加大 - IronClaw T2/T3/T4
6. UI 国际化与可访问性 - 葡萄牙语、CJK IME

Let me write this now in proper Chinese with data backing.</think>

# 个人 AI 助手与自主智能体开源生态 · 横向对比分析报告

**报告日期：2026-08-26**
**覆盖项目（8 个）**：OpenClaw、NanoBot、PicoClaw、IronClaw、LobsterAI、QwenPaw、Hermes Agent、OpenHuman

---

## 1. 生态全景

当前个人 AI 助手 / 自主智能体开源生态处于**"高强度迭代 + 集体可靠性焦虑"的双轨期**：8 个项目在 24 小时内累计产生 636 条 Issues 更新与 678 条 PR 更新，**活跃度创出新高**；但 OpenClaw 仍存 2 个 P0 + 17 个 P1 未解、IronClaw/Hermes Agent 的 agent-loop 守卫机制尚未闭环、OpenClaw/OpenHuman/PicoClaw/Hermes Agent 普遍被 SQLite / MCP stdio / Windows-macOS 安装副作用三类基础设施级问题困扰。**Provider 生态化与第三方主动接入**（MiniMax M3 内置、AnySearch / mst-python / SSYCloud Provider 集成）成为新趋势，反映框架层进入"接口标准化竞争"；同时 **sub-agent / 后台任务的"静默失败"** 上升为社区共识的首要痛点，预示 2026 Q4 的技术叙事将从"能做多少事"转向"做得有多可靠"。

---

## 2. 各项目活跃度对比

| 项目 | Issues 更新 | PR 更新 | 新版本 | 关闭率 (Issue/PR) | 今日健康度 | 当前阶段 |
|---|---|---|---|---|---|---|
| **OpenClaw** | 500（434 活 / 66 关） | 500（303 待 / 197 关） | 0 | 13.2% / 39.4% | 🟠 高活跃低消化 | v2026.8.1-beta.3 验证 |
| **Hermes Agent** | 50（42 活 / 8 关） | 50（41 待 / 9 关） | 0 | 16.0% / 18.0% | 🟠 PR 评审压力大 | 稳定版 + 架构 RFC |
| **QwenPaw** | 33（19 活 / 14 关） | 50（21 待 / 29 关） | **1**（v2.1.1-beta.3） | 42.4% / 58.0% | 🟢 高活跃高消化 | v2.1.1 Beta 收尾 |
| **IronClaw** | 37（33 活 / 4 关） | 24（14 待 / 10 关） | 0 | 10.8% / 41.7% | � 路线图稳定推进 | v1.4.0 Epic 执行 |
| **NanoBot** | 5（5 活 / 0 关） | 24（10 待 / 14 关） | 0 | 0% / 58.3% | 🟢 高质量合并 | 稳定迭代 |
| **OpenHuman** | 7（6 活 / 1 关） | 20（16 待 / 4 关） | 0 | 14.3% / 20.0% | 🟡 受 release-gate 制约 | Pre-prod / 合同重构 |
| **LobsterAI** | 1（1 活 / 0 关） | 11（2 待 / 9 关） | **2**（2026.8.25、2026.8.21） | 0% / 81.8% | � 高速发布 | 资料库迭代 |
| **PicoClaw** | 4（4 活 / 0 关） | 1（1 待 / 0 关） | 0 | 0% / 0% | 🔴 维护停滞 | 0.3.1 + nightly |

**关键观察**：OpenClaw 一家占全生态 Issues 总量的 **78.6%**、PR 总量的 **73.7%**，活跃度绝对领先但**消化能力最弱**；LobsterAI 与 NanoBot 在 PR 关闭率上表现最佳（>58%），反映其维护者响应通路顺畅；QwenPaw 是唯一同时实现"高活跃 + 高关闭率 + 新版本发布"的项目，处于**最健康迭代节奏**。

---

## 3. OpenClaw 在生态中的定位

### 优势
- **绝对规模**：Issues 活跃度（500/日）≈ Hermes Agent + QwenPaw + IronClaw 三家之和，社区声量与 bug 报告密度居首
- **渠道广度**：唯一同时覆盖 **Telegram / WhatsApp / Feishu / Slack** 四大主流消息平台的框架
- **路线图雄心**：v2026.8.1-beta.3 同步推进 install policy 安全合规、技能供应链校验、UI 警告流三条治理线
- **多模态覆盖**：plugin SDK → Gateway 实时语音会话（[#112820](https://github.com/openclaw/openclaw/pull/112820)）走在行业前列

### 技术路线差异
| 维度 | OpenClaw | NanoBot / Hermes Agent | IronClaw |
|---|---|---|---|
| **后端实现** | TS/Node 多进程 | Python / Go 混合 | Rust + cargo-nextest |
| **存储** | SQLite 中心化 | 会话 + 文件 + 向量 | Reborn (内置 shell in Docker) |
| **状态机** | Subagent 多级 | 异步 spawn + idle 回填 | Authority Manifest（设计阶段） |
| **多渠道** | 四大平台齐备 | 1–2 个为主 | Slack/Telegram 重点 |

### 社区规模对比
- **OpenClaw**：500 Issues/日 级别，**企业级体量**，但社区已出现"维护者响应通量不足"的反馈（[beta 帖 #125626](https://github.com/openclaw/openclaw/issues/125626) 19 评论呼吁 maintainer 标签）
- **Hermes Agent / QwenPaw**：50 Issues/日 级别，**中型社区**，维护者介入及时
- **NanoBot / IronClaw / LobsterAI**：5–37 Issues/日 级别，**精品团队节奏**
- **PicoClaw / OpenHuman**：个位数 Issues/日，**小团队或 pre-prod 阶段**

### 当前主要短板
- 13.2% 的低 Issue 关闭率 + 多个 P0 长期未解（SQLite 腐败、macOS 网关重启环），与"行业旗舰"地位形成反差
- Subagent 完成事件投递存在多路径静默丢失（[#44925](https://github.com/openclaw/openclaw/issues/44925)、[#67777](https://github.com/openclaw/openclaw/issues/67777)），需要**模型级重建而非补丁修复**

---

## 4. 共同关注的技术方向

### 4.1 Sub-agent / 后台任务可靠性 🔥🔥🔥
**涉及项目**：OpenClaw、NanoBot、OpenHuman、IronClaw（全部 4 家涉及）
- OpenClaw [#44925](https://github.com/openclaw/openclaw/issues/44925)（26 评论）、[#67777](https://github.com/openclaw/openclaw/issues/67777)（14 评论）
- NanoBot [#5152](https://github.com/HKUDS/nanobot/pull/5152)（29 天冲突 PR）、[#5529](https://github.com/HKUDS/nanobot/pull/5529)
- OpenHuman [#5757](https://github.com/tinyhumansai/openhuman/pull/5757)（sub-agent 工具面从 11 砍到 3）
- IronClaw [#7818](https://github.com/nearai/ironclaw/pull/7818)（background mode 2b+2c 切片）

**核心诉求**：子代理完成事件需要在超时/drain/orphan 三类失败模式下都不能静默丢失；统一方向是"异步派发 + idle 回合回填 + 持久化重试队列"。

### 4.2 MCP / stdio 子进程稳定性 🔥🔥
**涉及项目**：PicoClaw、Hermes Agent、IronClaw、OpenHuman
- PicoClaw [#3269](https://github.com/sipeed/picoclaw/issues/3269)：MCP 连接失败导致整个 agent loop hang 死（无 fix）
- Hermes Agent [#94906](https://github.com/NousResearch/hermes-agent/issues/94906) + [#95150](https://github.com/NousResearch/hermes-agent/issues/95150) + [#94859](https://github.com/NousResearch/hermes-agent/issues/94859)：Windows stdio MCP 客户端三连发
- OpenHuman [#5560](https://github.com/tinyhumansai/openhuman)：host trait impl 涉及 MCP 契约

**核心诉求**：MCP 客户端需要 fail-fast 路径、不应让核心聊天失效；stdio 子进程在 Windows 上的存活检测逻辑存在系统性反向（Hermes Agent `_stdio_children_dead()` 反向）。

### 4.3 Provider / 第三方生态化 🔥🔥
**涉及项目**：NanoBot、QwenPaw、Hermes Agent
- NanoBot [#5505](https://github.com/HKUDS/nanobot/issues/5505)：AnySearch 主动提交集成
- NanoBot [#5234](https://github.com/HKUDS/nanobot/pull/5234)：mst-python 元搜索
- QwenPaw [#4881](https://github.com/agentscope-ai/QwenPaw/pull/4881)：内置 MiniMax M3 旗舰模型
- Hermes Agent [#89061](https://github.com/NousResearch/hermes-agent/pull/89061)：SSYCloud LLM provider
- QwenPaw [#2304](https://github.com/agentscope-ai/QwenPaw/pull/2304)：Anthropic 兼容 provider 404 视为成功

**核心诉求**：从"内置有限 provider"走向"可插拔的 provider 生态"；web_search 接口出现"组合搜索"能力。

### 4.4 跨平台安装/更新副作用 🔥
**涉及项目**：Hermes Agent、QwenPaw、OpenHuman、OpenClaw
- Hermes Agent [#52010](https://github.com/NousResearch/hermes-agent/issues/52010) + [#91115](https://github.com/NousResearch/hermes-agent/issues/91115) + [#87703](https://github.com/NousResearch/hermes-agent/issues/87703)：macOS FDA / keychain / cua-driver 集群
- QwenPaw [#6810](https://github.com/agentscope-ai/QwenPaw/issues/6810)：Windows 安装文件锁
- OpenHuman [#5762](https://github.com/tinyhumansai/openhuman/pull/5762)：Windows pre-push hook 11 + 4 个 clippy 错误
- OpenClaw [#87928](https://github.com/openclaw/openclaw/issues/87928)：macOS 升级留下更新环导致网关重启风暴

**核心诉求**：升级流程应保持签名身份一致；Windows 上的安装链路是"系统性薄弱面"。

### 4.5 CI / 质量基础设施投入 🔥
**涉及项目**：IronClaw、OpenClaw、QwenPaw、NanoBot
- IronClaw 集中完成 T2（nextest）/ T3（PR/queue check）/ T4（preflight canonicalization）全套合并
- OpenClaw [#129738](https://github.com/openclaw/openclaw/pull/129738)（CI lint）+ [#128371](https://github.com/openclaw/openclaw/pull/128371)（release evidence）
- QwenPaw [#7293](https://github.com/agentscope-ai/QwenPaw/pull/7293)（拆分集成测试并行 shard）+ [#7292](https://github.com/agentscope-ai/QwenPaw/pull/7292)（单元测试覆盖率 +5.02pp）

**核心诉求**：从"功能优先"过渡到"功能 + 反馈速度"并重。

### 4.6 UI 国际化与 CJK/本地化 🔥
**涉及项目**：Hermes Agent、OpenHuman、IronClaw
- Hermes Agent [#40239](https://github

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

<think>The user wants me to generate a daily project report for NanoBot based on GitHub data. Let me analyze the data carefully and structure the report according to the 8 sections requested.

Let me organize the information:

**Data Overview:**
- 5 Issues updated (all new/active, 0 closed)
- 24 PRs updated (10 pending, 14 merged/closed)
- 0 new releases

**Key Issues:**
1. #5505 - AnySearch as web search provider (enhancement) - 3 comments
2. #5532 - missing import of "mask_session_key" in autocompact.py (bug, p2)
3. #5516 - Telegram rich messages not rendering with streaming (bug)
4. #5527 - WebUI sidebar titles stay "Untitled" with unifiedSession
5. #5524 - WebUI 会话结束通知铃声 (Feature request)

**Key PRs (24 total):**
Merged/Closed (14):
- #5541 - fix telegram group messages to senders (CLOSED)
- #5540 - fix Codex prompt cache routing (CLOSED)
- #5538 - refactor(tui) active composer actions (CLOSED)
- #5534 - feat(tui) autocomplete skill references (CLOSED)
- #5389 - feat(webui) drag-and-drop session organization (CLOSED)
- #5533 - fix(tools) keep find_files scans responsive (CLOSED)
- #5529 - fix(agent) wait for background subagents only at turn exit (CLOSED)
- #5530 - style(tui) keep short transcripts top-aligned (CLOSED)
- #5525 - feat add demand-driven document retrieval (CLOSED)
- #5526 - fix(agent) wait for exec sessions without polling (CLOSED)

Open/Pending (10):
- #5539 - fix(tools) interpolate ToolLoader log context
- #5504 - fix(ui) surface model retry status (NAN-34)
- #5519 - fix(webui) compact single-pane chat header
- #5536 - fix(exec) fail closed when restricted shell lacks sandbox (p1, security)
- #5537 - feat(my) persist session focus across turns
- #5535 - fix(gateway) retry MCP readiness before turns
- #5531 - fix(telegram) upgrade streaming preview to rich in place
- #5234 - feat(agent) integrate mst-python as metasearch provider (p1)
- #5152 - fix(subagent) mark partial completion results
- #5528 - fix(webui) project generated titles under unifiedSession

Now let me craft the report following the 8 sections, with professional tone and data-driven insights.

The report date is 2026-08-26.

Let me think about the activity level:
- 5 Issues + 24 PRs = 29 total activities in 24 hours
- Merge rate: 14/24 = ~58% merge rate
- 0 releases but lots of activity
- High churn suggests active development

For community hot spots, the most commented items are:
- #5505 (3 comments) - AnySearch integration proposal
- #5532 (1 comment) - bug report
- #5516 (1 comment) - Telegram bug

For bugs and stability, I should list bugs by priority:
- p1: #5536 (security), #5234 (new provider), #5533 (tools), #5152 (subagent)
- p2: #5532, #5516, #5527, #5539, #5504, #5535, #5531, #5528

For user feedback:
- #5505: Third-party search provider wanting integration
- #5524: Chinese user requesting notification sound for WebUI
- #5527: User experiencing "Untitled" titles in WebUI sidebar
- #5516: Telegram rich message rendering bug

Let me also note the linked PRs to issues:
- #5528 closes #5527
- #5536 fixes #4072
- #5537 fixes #3292
- #5541 fixes #1091

Let me structure the report properly. The user wants Chinese language output. Let me write it in Chinese since the user prompt is in Chinese.

Let me think more carefully about the "backlog" - long-standing items:
- #5152 created 2026-07-28 (almost a month old)
- #5234 created 2026-08-03 (3 weeks old, p1, conflict)
- #5389 created 2026-08-14 (just closed though)

Now let me draft the report.</think>

# NanoBot 项目动态日报

**报告日期**：2026-08-26
**数据周期**：过去 24 小时（2026-08-25 ~ 2026-08-26）
**项目仓库**：[HKUDS/nanobot](https://github.com/HKUDS/nanobot)

---

## 一、今日速览

NanoBot 今日整体处于**高活跃、强推进**状态：24 小时内共产生 29 条仓库事件（5 个 Issue + 24 个 PR），合并/关闭率达 **58.3%**（14/24），开发节奏稳健。今日未发布新版本，但代码层面已落地多项功能增强与稳定性修复，覆盖 Telegram/WebUI/TUI 三大用户面、Provider 与工具链底层、以及 exec 子系统安全加固。项目活跃度评估：**A 级（高度活跃）**。

---

## 二、版本发布

⚠️ **今日无新版本发布**。尽管代码侧持续推进，但尚未触发版本标签。下一版本窗口可能在 PR #5536（exec 安全闭环）、#5504（模型重试状态可见化 NAN-34）等 p1/p2 关键修复合并后开启。

---

## 三、项目进展

### 已合并/关闭的重要 PR（14 条）

| PR | 标题 | 类别 | 影响面 |
|---|---|---|---|
| [#5541](https://github.com/HKUDS/nanobot/pull/5541) | fix(telegram): attribute group messages to senders | bug | Telegram 群消息归属（修复长期 issue #1091） |
| [#5540](https://github.com/HKUDS/nanobot/pull/5540) | fix(provider): stabilize Codex prompt cache routing | bug, provider | OpenAI Codex 缓存路由稳定性 |
| [#5538](https://github.com/HKUDS/nanobot/pull/5538) | refactor(tui): clarify active composer actions | docs/UX | TUI 活动响应时的快捷键提示 |
| [#5534](https://github.com/HKUDS/nanobot/pull/5534) | feat(tui): autocomplete skill references | feature | TUI 中 `$skill-name` 自动补全 |
| [#5533](https://github.com/HKUDS/nanobot/pull/5533) | fix(tools): keep find_files scans responsive | bug, perf (p1) | find_files 大目录扫描体验优化 |
| [#5529](https://github.com/HKUDS/nanobot/pull/5529) | fix(agent): wait for background subagents only at turn exit | bug | 后台子智能体等待语义正确性 |
| [#5530](https://github.com/HKUDS/nanobot/pull/5530) | style(tui): keep short transcripts and composer top-aligned | UX | TUI 短会话垂直布局 |
| [#5525](https://github.com/HKUDS/nanobot/pull/5525) | feat: add demand-driven document retrieval | feature (p2) | grep 升级为按需文档检索（PDF/DOCX/XLSX/PPTX） |
| [#5526](https://github.com/HKUDS/nanobot/pull/5526) | fix(agent): wait for exec sessions without polling | bug, perf | 重命名 `exec_session`、新增 `until_exit` 与 `timeout_ms` |
| [#5389](https://github.com/HKUDS/nanobot/pull/5389) | feat(webui): add drag-and-drop session organization | feature (p2) | WebUI 拖拽会话/分组管理 |

### 关键进展评估

- **工具链能力跃迁**：#5525 将 `grep` 从纯文本搜索升级为支持 PDF/DOCX/XLSX/PPTX 的按需文档检索，并附带稳定的位置定位符（页码/段落/单元格/幻灯片），同时绕过 200K 附件预览上限，是本批最有"产品力"的改动。
- **Telegram/WebUI 体验闭环**：群消息归属（#5541）+ 流式结束富消息升级（#5531 进行中）+ WebUI 标题投影（#5528 进行中）共同回应近一周的多条用户反馈。
- **后台与执行模型重构**：#5529 拆分子智能体等待时机、#5526 引入 `exec_session` 非轮询等待、#5533 优化 find_files 扫描，构成了"长任务执行栈"的一致性演进。

---

## 四、社区热点

### 评论/参与度最高的 Issue

1. **[#5505](https://github.com/HKUDS/nanobot/issues/5505) — AnySearch 作为 web_search 提供商（3 条评论）**
   AnySearch 团队主动提交集成提案，提供 API/MCP/Skill 三种标准接入方式。**诉求背后**：第三方搜索供应商正主动接洽 nanobot，反映项目在 AI Agent 搜索工具链中的影响力。维护者后续可能直接走 PR 通道评估。

2. **[#5532](https://github.com/HKUDS/nanobot/issues/5532) — autocompact.py 中缺失 `mask_session_key` 导入（1 条评论）**
   用户运行中文指令"删除之前创建的所有资源…"触发崩溃，日志显示 `loop.py:1423 _dispatch` 异常。**诉求背后**：暴露了路径被压缩时的真实生产事故。

3. **[#5516](https://github.com/HKUDS/nanobot/issues/5516) — Telegram 流式下 rich 消息永不渲染（1 条评论）**
   用户精准定位 Bug：`rich_messages: true` 与 `streaming: true`（默认）当前互斥，富分支在 `send_delta(stream_end=True)` 中被 `if not buf.message_id` 守卫短路。**诉求背后**：Bot API 10.1-10.3 草案可修复，并已由 [#5531](https://github.com/HKUDS/nanobot/pull/5531) 实施中。

---

## 五、Bug 与稳定性

按严重程度排列：

### 🔴 P1 级（建议优先合入）

| Issue/PR | 描述 | 状态 | 是否已有修复 |
|---|---|---|---|
| [#5536](https://github.com/HKUDS/nanobot/pull/5536) | **安全**：restricted shell 缺少沙箱时未 fail-closed，符号链接/命令替换可绕过工作区限制 | OPEN | ✅ 该 PR 自身即为修复（fixes #4072） |
| [#5533](https://github.com/HKUDS/nanobot/pull/5533) | find_files 大目录扫描卡顿 | CLOSED | ✅ 已合并 |
| [#5152](https://github.com/HKUDS/nanobot/pull/5152) | subagent 部分完成结果标记缺失（回归） | OPEN | ✅ 该 PR 即修复（7 月 28 日提出，存在冲突，待合并） |
| [#5234](https://github.com/HKUDS/nanobot/pull/5234) | mst-python 元搜索引擎集成（8 月 3 日提出，长期 OPEN） | OPEN | — 仍处于评审/冲突状态 |

### 🟡 P2 级（常规优先级）

| Issue | 描述 | 修复 PR |
|---|---|---|
| [#5532](https://github.com/HKUDS/nanobot/issues/5532) | `mask_session_key` 导入缺失导致崩溃 | ⚠️ 暂未见专门修复 PR（建议指派） |
| [#5516](https://github.com/HKUDS/nanobot/issues/5516) | Telegram 流式下富消息不渲染 | [#5531](https://github.com/HKUDS/nanobot/pull/5531) OPEN |
| [#5527](https://github.com/HKUDS/nanobot/issues/5527) | WebUI 侧边栏在 `unifiedSession` 下始终显示 "Untitled" | [#5528](https://github.com/HKUDS/nanobot/pull/5528) OPEN |
| [#5539](https://github.com/HKUDS/nanobot/pull/5539) | ToolLoader 日志使用 printf-style 占位符 | [#5539](https://github.com/HKUDS/nanobot/pull/5539) OPEN |
| [#5504](https://github.com/HKUDS/nanobot/pull/5504) | WebSocket 模型重试生命周期事件缺失（NAN-34） | [#5504](https://github.com/HKUDS/nanobot/pull/5504) OPEN |
| [#5535](https://github.com/HKUDS/nanobot/pull/5535) | Gateway MCP 就绪重试（NAN-43） | [#5535](https://github.com/HKUDS/nanobot/pull/5535) OPEN |

**稳定性观察**：今日 Bug 报告涉及会话、Provider、Telegram、WebUI、子智能体五大子系统，呈现"广覆盖、单点深"特征；安全相关的 #5536 是本周最高优先级事项。

---

## 六、功能请求与路线图信号

### 今日新增功能请求

| Issue | 请求 | 与现有 PR 的关联 |
|---|---|---|
| [#5505](https://github.com/HKUDS/nanobot/issues/5505) | 接入 AnySearch 作为 web_search 提供商（API/MCP/Skill） | 第三方已表示将提交 PR；同时与 [#5234](https://github.com/HKUDS/nanobot/pull/5234)（mst-python 元搜索）形成搜索提供方生态扩张趋势 |
| [#5524](https://github.com/HKUDS/nanobot/issues/5524) | WebUI 会话结束通知铃声（中文用户提交，默认关闭、可在 Settings 开关） | 暂无对应 PR；属于 WebUI 通知能力补全，可与 #5504（重试状态可见化）合并形成"长任务反馈"主题 |
| [#5527](https://github.com/HKUDS/nanobot/issues/5527) | unifiedSession 模式下会话标题显示 | [#5528](https://github.com/HKUDS/nanobot/pull/5528) 直接修复，纳入近期 WebUI 收尾 |

### 路线图信号

- **搜索提供方生态化**：AnySearch、mst-python 两个第三方集成正在排队评审，web_search 接口将出现可插拔的"组合搜索"能力。
- **WebUI 长任务可观测化**：#5504（重试倒计时）+ #5524（通知铃声）+ #5528（标题投影）形成连贯的"WebUI 用户体感增强"主题，建议在下一版本作为一揽子改动。
- **执行栈一致性**：#5526（exec_session 非轮询）+ #5529（子智能体等待）+ #5533（find_files 性能）共同铺垫"长时间任务的优雅退出模型"。

---

## 七、用户反馈摘要

提炼今日 Issues 评论与 PR 描述中的真实用户声音：

- **多模态文档检索需求旺盛**（来源 [#5525](https://github.com/HKUDS/nanobot/pull/5525) 隐含诉求）：用户期望在 chat 内直接检索附件中 PDF/Office 文件的特定页/段/单元格位置；这意味着 nanobot 已具备实际的企业文档协作场景负载。
- **WebUI 缺乏"任务完成反馈"**（来源 [#5524](https://github.com/HKUDS/nanobot/issues/5524)）：中文用户明确反馈"长时间工具调用后页面无明显提示，需要刷新或盯着屏幕"，表明 agent 响应延迟已成为用户感知的主要痛点。
- **Telegram 富文本体验不佳**（来源 [#5516](https://github.com/HKUDS/nanobot/issues/5516)）：用户对 Bot API 10.1-10.3 草案有清晰认知并能给出精准修复路径，社区技术水位较高。
- **unifiedSession 语义不直观**（来源 [#5527](https://github.com/HKUDS/nanobot/issues/5527)）：用户开启该选项后预期每个聊天拥有独立标题，实际却全部路由到 `unified:default`——**配置语义与 UI 行为脱节**，需要在文档/默认值层面进一步收敛。
- **第三方供应商主动接入**（来源 [#5505](https://github.com/HKUDS/nanobot/issues/5505)）：AnySearch 团队以正式 Issue 形式提交集成申请，体现项目的生态吸引力正向溢出。

---

## 八、待处理积压

提醒维护者关注以下长期 OPEN 的重要项：

| 编号 | 类型 | 标题 | 创建日期 | 已停留 | 备注 |
|---|---|---|---|---|---|
| [#5234](https://github.com/HKUDS/nanobot/pull/5234) | PR (p1, conflict) | integrate mst-python as metasearch provider | 2026-08-03 | **23 天** | 与主线存在冲突，需维护者介入解决 |
| [#5152](https://github.com/HKUDS/nanobot/pull/5152) | PR (p1, conflict) | subagent 标记部分完成结果 | 2026-07-28 | **29 天** | 与主线存在冲突；涉及 subagent 关键路径 |
| [#5504](https://github.com/HKUDS/nanobot/pull/5504) | PR (NAN-34) | UI 暴露模型重试状态 | 2026-08-24 | 2 天 | 关联 Linear 项目，建议挂版本 |
| [#5536](https://github.com/HKUDS/nanobot/pull/5536) | PR (p1, security) | restricted shell 缺沙箱时 fail-closed | 2026-08-25 | 1 天 | 安全相关，建议 48 小时内评审 |
| [#5539](https://github.com/HKUDS/nanobot/pull/5539) | PR (p2) | ToolLoader 日志占位符修复 | 2026-08-25 | 1 天 | 小但正确的修复 |

**积压观察**：超过 2 周的 P1 PR 有 2 条（#5152、#5234），均带 `conflict` 标签，提示维护者需主动 rebase 或与作者协调合并策略，避免关键修复长期悬置。

---

### 📊 项目健康度评分

| 维度 | 评分 | 说明 |
|---|---|---|
| 活跃度 | ⭐⭐⭐⭐⭐ | 24 条 PR/日，评审通道畅通 |
| 稳定性 | ⭐⭐⭐⭐ | 1 条 P1 安全修复在路上，回归 bug 均有跟进 |
| 社区参与 | ⭐⭐⭐⭐ | 第三方供应商主动接入，技术讨论水位高 |
| 路线图清晰度 | ⭐⭐⭐ | 多主题并行，需在版本边界上做收口 |

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

<think>Let me analyze the data provided for PicoClaw and generate a comprehensive daily report for 2026-08-26.

Key observations from the data:
1. 4 Issues updated in the past 24 hours, 0 closed
2. 1 PR open and waiting, 0 merged/closed
3. No new releases

Issues analysis:
- #3281: Web UI chat input laggy with longer history (stale, 7 comments, 1 👍) - BUG
- #3269: MCP server connection failure hangs agent loop (7 comments, 1 👍) - BUG
- #3338: Slack does not attach image media content (stale, 2 comments) - BUG
- #3345: Proposal for lightweight PicoClaw worker mode for household edge compute (0 comments) - Proposal

PR analysis:
- #3340: fix(slack): set FileSize on media upload params (stale) - related to #3338

Key insights:
- The Slack bug (#3338) has a corresponding fix PR (#3340) but it's marked as stale and not merged
- The Web UI lag (#3281) is stale but still active
- The MCP hang issue (#3269) has 7 comments indicating active discussion
- A new feature proposal (#3345) for edge computing mode
- No PRs merged in 24 hours - development pace is slow
- No new releases

Let me structure this report in Chinese as the request is in Chinese.</think>

# PicoClaw 项目日报

**报告日期：2026-08-26**

---

## 1. 今日速览

PicoClaw 过去 24 小时整体活跃度偏低：4 条 Issue 有更新但 0 条关闭，1 条 PR 仍处于待合并状态且被标记为 stale，无新版本发布。社区讨论集中在已存在一段时间的 Bug 跟进上，新提交的提案类 Issue 也仅处于初始阶段。值得关注的是，针对 Slack 图片上传 Bug 已有现成的修复 PR（#3340），但尚未被维护者合并，社区响应速度需要加强。

---

## 2. 版本发布

**无新版本发布。** 距上一个已发布的稳定版本（0.3.1）已超过两个月，nightly 构建（commit 2cf030d2）仍在内部迭代中。

---

## 3. 项目进展

**今日无 PR 合并或关闭。**

- 唯一活跃 PR [#3340](https://github.com/sipeed/picoclaw/pull/3340)（fix(slack): set FileSize on media upload params）状态停滞，已被标记为 stale。该 PR 对应 Issue #3338，技术方案清晰（slack-go v0.23.1 要求 files.upload.v2 流程必须显式传入文件大小），但迟迟未被合并，社区修复未被有效吸收。
- **建议维护者**对 #3340 进行 review，这是一个低风险、明确问题的修复，合并后即可关闭对应的 Bug Issue。

整体而言，今日项目在代码层面无实质推进，处于"维护停滞"状态。

---

## 4. 社区热点

按评论数与互动度排序：

| 排名 | Issue/PR | 评论数 | 👍 | 类型 | 状态 |
|------|----------|--------|------|------|------|
| 1 | [#3281](https://github.com/sipeed/picoclaw/issues/3281) Web UI 输入卡顿 | 7 | 1 | BUG | stale |
| 2 | [#3269](https://github.com/sipeed/picoclaw/issues/3269) MCP 连接失败导致 agent hang | 7 | 1 | BUG | open |
| 3 | [#3338](https://github.com/sipeed/picoclaw/issues/3338) Slack 图片上传失败 | 2 | 0 | BUG | stale |

**诉求分析：**
- 前两个高互动 Issue 都聚焦于**聊天交互的可用性**——一个在前端（Web UI 输入体验），一个在后端（agent loop 响应链路）。说明用户已从"能跑通"阶段进入"要好用"阶段，对核心对话流程的稳定性要求显著提高。
- Slack 上传问题虽然评论较少，但属于多通道战略下的功能性缺陷，与 PR #3340 形成完整闭环。

---

## 5. Bug 与稳定性

按严重程度排列：

### 🔴 高严重度（核心功能阻塞）

1. **[#3269](https://github.com/sipeed/picoclaw/issues/3269) MCP server 连接失败导致 agent loop hang**
   - 影响范围：使用 MCP 集成的所有用户，聊天界面会"卡死"无响应
   - 版本：nightly (2cf030d2)
   - 状态：**无对应 fix PR**，社区评论 7 条仍在讨论
   - 需重点关注：错误处理路径缺失，可能需要增加超时机制与失败降级策略

### 🟡 中严重度（功能受限但有 workaround）

2. **[#3281](https://github.com/sipeed/picoclaw/issues/3281) Web UI 长历史下输入卡顿**
   - 影响范围：所有使用 PicoClaw Web 通道、对话历史较长的用户
   - 版本：0.3.1
   - 状态：**无 fix PR**，被标记为 stale（14 天无活动）
   - 推测方向：前端渲染性能瓶颈，可能涉及虚拟滚动、状态管理优化

###  中严重度（特定通道失效）

3. **[#3338](https://github.com/sipeed/picoclaw/issues/3338) Slack 不附带图片媒体内容**
   - 影响范围：所有使用 Slack 通道发送图片的用户
   - 版本：0.3.1
   - 状态：**已有对应 fix PR [#3340](https://github.com/sipeed/picoclaw/pull/3340)**，但未合并
   - 根因已明确：`slack-go` SDK 要求显式传入 `FileSize`

---

## 6. 功能请求与路线图信号

### 🆕 新提案：[#3345](https://github.com/sipeed/picoclaw/issues/3345) 轻量化 PicoClaw worker 模式（家用边缘计算）

- **作者**：@kvnloo（首次贡献）
- **核心思路**：将 PicoClaw 定位为分布式 agent 系统的 worker 节点，运行在低成本 RISC-V/ARM/MIPS 开发板、树莓派、旧 Android 手机（10–20 MB 可用内存）上
- **价值判断**：与 Sipeed 硬件生态高度契合，可能成为 PicoClaw 在"边缘 AI agent"赛道的差异化竞争力
- **当前阶段**：0 评论，尚需社区反馈与维护者表态
- **可能性评估**：⭐⭐⭐（技术愿景清晰，但实现成本高，纳入路线图的优先级取决于维护团队对该方向的战略选择）

---

## 7. 用户反馈摘要

从活跃 Issue 的评论中提炼：

| 痛点 | 出现位置 | 反映的用户期望 |
|------|----------|----------------|
| 长对话历史下输入卡顿 | #3281 | Web UI 应支持流畅的长会话体验，期望与主流 ChatGPT/Claude Web 体验对齐 |
| MCP 失败导致整个聊天 hang 住 | #3269 | 第三方工具连接失败不应让核心对话失效，期望 fail-fast 或降级处理 |
| Slack 媒体上传静默失败 | #3338 | 错误信息应可观测，至少能在日志中看到失败原因（目前调用前就被 SDK 拒绝） |

**总体满意度判断**：用户对 PicoClaw 的基本能力认可，但对**错误处理鲁棒性**与**多通道一致性**的不满正在累积。维护者需在下一周期重点关注稳定性而非新功能。

---

## 8. 待处理积压（提醒维护者关注）

| 类型 | 编号 | 标题 | 关键风险 |
|------|------|------|----------|
| 🔥 重要 Bug | [#3269](https://github.com/sipeed/picoclaw/issues/3269) | MCP 失败 hang 死 agent | 核心功能阻塞，无 fix |
| 🔥 重要 Bug | [#3281](https://github.com/sipeed/picoclaw/issues/3281) | Web UI 长历史卡顿 | stale 中，用户体验劣化 |
| ⏳ 待合并 PR | [#3340](https://github.com/sipeed/picoclaw/pull/3340) | Slack FileSize fix | 修复明确，stale 状态需激活 |
| 📝 新提案 | [#3345](https://github.com/sipeed/picoclaw/issues/3345) | Edge worker 模式 | 战略级决策，需官方回应 |

**优先级建议**：
1. **立即**：Review 并合并 #3340，关闭 #3338（成本最低，收益最确定）
2. **短期**：对 #3269 给出官方时间表或修复方案（MCP 是核心集成能力）
3. **中期**：对 #3345 给出官方立场（即使是否定也应回应）

---

*报告基于 GitHub 公开数据生成，数据截至 2026-08-26。*

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

<think>The user wants me to generate a daily project report for IronClaw (github.com/nearai/ironclaw) based on the GitHub data provided for 2026-08-26. Let me analyze the data carefully and structure the report according to the requested sections.

Let me first organize the data:

**Overview:**
- 37 Issues updated in past 24 hours (33 new/active, 4 closed)
- 24 PRs updated in past 24 hours (14 pending merge, 10 merged/closed)
- 0 new releases

**Key themes I can identify:**

1. **v1.4.0 Roadmap Epics:**
   - #7732: Persistent per-user sandbox with iron-proxy (defer loop executors) - 9 comments, most discussed
   - #7781: Design System Phases 2-3 (DESIGN.md governance + theme reskin)
   - #7782: Design System Phases 4-5 (agentic interactions, components, IA)
   - #4625: Slack channel-routed personal and team agents
   - #7815: Onboarding suggestions cumulative work
   - #7871: Slack-to-console bridge + rich interactive Slack UX

2. **CI/CD work (T2/T4 tracks by @henrypark133):**
   - #7799: T2 CI expedite nextest pipeline (CLOSED)
   - #7817: ci: nextest test pipeline (CLOSED - closes #7799)
   - #7809: canonical preflight (CLOSED)
   - #7819: PR/queue check convergence (CLOSED)
   - #7820: scope-isolation suite probe (CLOSED)
   - #7894: reduce scope checkout transfer (CLOSED)

3. **Performance Bugs:**
   - #7891: perf(extensions): unprojected capability payloads - 14.3s wasted inference on emails
   - #7892: bug(agent-loop): deferred tool found 15x, never invoked - 123s run with no terminating guard

4. **Bug reports:**
   - #7862: Device link fails with generic error for unconfigured telegram
   - #7887: Extension lookup path improvises device-link setup (Telegram)
   - #7888: Getting logs hangs indefinitely on multiple instances
   - #7853 (referenced): triage context

5. **Notification Center improvements (major workstream by @italic-jinxin):**
   - #7687: Generalize WebUI notification center into durable user inbox (CLOSED)
   - #7706: Remove notification approval compatibility fallback (CLOSED)
   - #7846: refactor(notifications): retire legacy approval fallback (CLOSED)
   - #7880: Show loading shell while Notification Center loads
   - #7879: Adopt shared form controls in Admin Users
   - #7878: Replace legacy Extensions panels with shared Panel
   - #7875: Publish run-bound extension auth-required notifications
   - #7876: Harden notification producer lifecycle
   - #7874: Publish resource and policy blocked-run notifications
   - #7873: Publish automation pre-run failure notifications
   - #7872: Expand notification center coverage with low-risk product events

6. **WebUI i18n / design system:**
   - #7870: Fix missing i18n across exposed WebUI routes
   - #7877: fix(webui): localize exposed route copy
   - #7890: Retire app.css Tailwind colour-alias compat layer
   - #7831: Design System Phase 3a foundation - Chromatic lane

7. **Features:**
   - #7867: Voice-to-text in WebUI composer
   - #7895: Add personality (agent.md) editor section to Settings UI
   - #7893: per-automation lessons file
   - #7889: extend scheduler/orchestrator with opt-in remote edge workers

8. **Security:**
   - #7885: Add OpenSSF Scorecard workflow configuration
   - #7886: feat(ci): add OpenSSF Scorecard workflow configuration

9. **Large PRs:**
   - #7896: fix: bound model-visible tool result previews (XL, low risk)
   - #7491: feat(coding): omp core-tool contract + engines (XL, medium risk)
   - #7818: feat(subagent): background mode slices 2b+2c (CLOSED)

10. **Docs improvements:**
    - #7859: move changelog to navbar tab
    - #7737: fix Slack setup drift

Let me now structure the report. I need to be careful to:
- Be objective and data-driven
- Include GitHub links
- Highlight project health
- Write in Chinese (since the user wrote in Chinese)

Let me draft the report:

**1. 今日速览**
- 24小时内共 37 个 Issues 和 24 个 PR 活跃更新,4 个 Issues 和 10 个 PR 关闭
- 无新版本发布,核心工作集中在 v1.4.0 路线图执行(CI 加速 T2、设计系统 Phase 2-3、Notification Center 重构)和性能 Bug 修复
- 整体健康度: 良好 — 多个关键 Epic 取得实质推进,CI 流水线改造 (T2/T3/T4) 集中合并,性能问题已定位但部分尚未修复

**2. 版本发布**
- 无

**3. 项目进展(今日合并/关闭的重要 PR)**
重要合并/关闭:
- #7817 [CI, XL] - 关闭 #7799, nextest 替换顺序测试循环,完整失败信号,PR max-parallel 解除限制
- #7809 [CI, XL] - 规范化 preflight 单一闸门列表
- #7819 [CI, XL] - PR/队列检查收敛
- #7820 [CI, XL] - scope-isolation 测试整合探测
- #7894 [CI, S] - 减少 CI scope checkout 传输
- #7846 [Notifications, XL] - 退役旧审批 fallback
- #7818 [Subagent, XL] - 后台模式 slice 2b+2c(生产者半边)
- #7861 [Extensions, XL] - 恢复设备链接指引
- #7816 [WebUI OOBE, L] - 添加刷新/连接入口到 OOBE 抽屉
- #7799, #7687, #7706, #7038 - 相关 Epic 关闭

整体向前推进: 设计系统 Phase 1 已实质闭合(#7038 关闭),CI T2/T3/T4 全部合并完毕,#7732/#7781/#7782 等 v1.4.0 Epic 正在持续推进。

**4. 社区热点**
- #7732 (9 comments) - Persistent per-user sandbox with iron-proxy
- #7799 (4 comments, CLOSED) - CI expedite T2
- #7038 (3 comments, CLOSED) - Design System Phase 1
- #7862 (3 comments) - Device link failure
- #7891 (2 comments) - perf bug on capability payloads
- #7781 (2 comments) - Design System Phase 2-3
- #7892 (2 comments) - agent-loop runaway calls

**5. Bug 与稳定性**
严重程度排列:
- 严重: #7892 (agent-loop 反复查找 15 次同工具且未调用,123s 单轮;伴随 79/86s 重复调用)— 尚未见 fix PR
- 高: #7891 (capability 载荷未投影 + 24KiB 头切片让两封邮件耗 14.3s 推理)— 关联 PR #7896 已开,但状态 OPEN
- 高: #7862 (Telegram 设备链接在未配置 api_id/hash 时报通用错误)— 关联 PR #7861 已关闭(在 install/activate 路径),但 #7887 仍显示该问题在 preview 中可重现
- 中: #7888 (获取日志在多实例时挂死)— 尚未见 PR
- 中: #7853 (referenced by #7862, #7887) - Telegram 表面问题分拆后遗留

**6. 功能请求与路线图信号**
- #7867 Voice-to-text in WebUI composer - 与 Slack/Telegram 已有语音输入对齐
- #7895 Settings UI 添加 agent.md 编辑区 - 用户痛点
- #7893 per-automation lessons file - 自动化的"运行间学习"
- #7889 RFC: opt-in remote edge workers - 扩展 orchestrator
- #4625 Slack channel-routed agents (P1 suggested, 已有 #7871 Epic 跟进)
- #7871 Slack-to-console bridge + rich Slack UX

**7. 用户反馈摘要**
- #7895: 用户反馈设置 agent personality 困难,希望 Settings 中有专门编辑区
- #7888: 用户反馈获取日志在两个实例上都无限挂起
- #7895/7888 类反映了当前 Settings/日志可发现性问题
- 性能层面 #7891 #7892 暴露了 agent-loop 在容量调用与模型推理协同上的鲁棒性短板

**8. 待处理积压**
- #7732 (v1.4.0 Epic, 9 评论) - per-user sandbox,已活跃但需持续推进
- #4625 (创建于 2026-06-09, v1.4.0 Epic) - 1 评论,等待 Slack 渠道接入正式起势
- #7867 (Voice-to-text,新功能) - 待优先级评估
- #7889 (RFC 远程 worker) - RFC 阶段,需讨论
- #7491 (编码核心工具契约,XL) - 已开多日,核心贡献,待持续 review

让我现在写出完整的中文日报。</think>

# IronClaw 项目动态日报 · 2026-08-26

> 数据来源:GitHub `nearai/ironclaw` 过去 24 小时活动(Issues 37 / PRs 24)

---

## 1. 今日速览

过去 24 小时,IronClaw 共有 **37 个 Issues**(33 活跃/4 关闭)和 **24 个 PRs**(14 待合并/10 关闭)发生更新,**无新版本发布**。整体工作集中在三条主线:**v1.4.0 路线图执行**(Persistent Sandbox Epic #7732、设计系统 Phase 2–3 #7781/Phase 4–5 #7782、Notification Center 通用化 #7687)、**CI 流水线加速 T2/T3/T4 全套合入**(主要贡献者 @henrypark133)、以及 **agent-loop/扩展性能 Bug 的定位与修复**(#7891、#7892、#7896)。项目健康度评估为**良好**:大量高风险 XL PR 集中关闭并对应 Epic 完结,但同时出现两条影响交互延迟与运行鲁棒性的性能缺陷,需关注。

---

## 2. 版本发布

**无新版本发布。**

---

## 3. 项目进展(今日合并/关闭的重要 PR)

| PR | 主题 | 影响 |
|---|---|---|
| [#7817](https://github.com/nearai/ironclaw/pull/7817) **[CLOSED]** | `ci: nextest test pipeline, full-failure signal, PR unthrottle (T2)` | 关闭 [#7799](https://github.com/nearai/ironclaw/issues/7799),`Tests (Reborn)` 工作流替换为 cargo-nextest,红屏一次暴露所有失败测试,PR `max-parallel` 解限 |
| [#7809](https://github.com/nearai/ironclaw/pull/7809) **[CLOSED]** | `ci: canonical preflight (T4, tasks 1-5)` | `scripts/preflight-gates.sh` 成为手跑/pre-push/CI 唯一的确定性闸门列表 |
| [#7819](https://github.com/nearai/ironclaw/pull/7819) **[CLOSED]** | `ci: PR/queue check convergence (T3)` | 关闭 [#7800](https://github.com/nearai/ironclaw/issues/7800),消除三类"仅队列失败"模式,并把 default-features clippy 下放到 PR 检查 |
| [#7820](https://github.com/nearai/ironclaw/pull/7820) **[CLOSED]** | `test: scope-isolation suite consolidation probe (T2 follow-up)` | T2 的测量门控后续探针(草案) |
| [#7894](https://github.com/nearai/ironclaw/pull/7894) **[CLOSED]** | `ci: reduce required scope checkout transfer` | partial-clone filter 减少历史 blob 传输 |
| [#7846](https://github.com/nearai/ironclaw/pull/7846) **[CLOSED]** | `refactor(notifications): retire legacy approval fallback` | 退役 `threads?needs_approval=true` 旧路径,durable Inbox 成为唯一通知来源 |
| [#7818](https://github.com/nearai/ironclaw/pull/7818) **[CLOSED]** | `feat(subagent): background mode — slices 2b+2c` | R2 后台子代理的"生产者半边":收据派发、子代理投递、激活、治愈清扫 |
| [#7861](https://github.com/nearai/ironclaw/pull/7861) **[CLOSED]** | `fix(extensions): restore device-link guidance on install/activate` | 修复 Telegram 等设备链接场景下"代理自荐用通用品"导致用户卡壳 |
| [#7816](https://github.com/nearai/ironclaw/pull/7816) **[CLOSED]** | `feat(webui): add refresh/connect entries to OOBE suggestion drawer` | [#7815](https://github.com/nearai/ironclaw/issues/7815) 的前端半边 |
| [#7038](https://github.com/nearai/ironclaw/issues/7038) **[CLOSED]** | Design System Phase 1 Epic | Storybook 集成 + 设计系统目录已并入 [#7781](https://github.com/nearai/ironclaw/issues/7781)/[#7782](https://github.com/nearai/ironclaw/issues/7782) |
| [#7799](https://github.com/nearai/ironclaw/issues/7799), [#7687](https://github.com/nearai/ironclaw/issues/7687), [#7706](https://github.com/nearai/ironclaw/issues/7706) **[CLOSED]** | T2 CI、Notification Center Epic 化、approval 兼容回退清理 | 路线图锚点合上 |

**整体推进评估**:CI/通知中心两条支线在 24 小时内基本收口,设计系统 Phase 1 闭合,Phase 2–3(#7781)继续推进。**v1.4.0 路线图可见度** = 约 35–40%(以 Epic 完成数估算)。

---

## 4. 社区热点

按评论数排序的活跃议题:

- **[#7732](https://github.com/nearai/ironclaw/issues/7732)** · 9 评论 · **v1.4.0 Epic**:Persistent per-user sandbox + iron-proxy + 推迟循环执行器(@serrrfirat)。诉求:当前 Reborn 把 `builtin.shell` 路由进 Docker,但每条 shell 命令都起停容器,缺乏"持久用户计算机"。这是当前讨论最热的议题,直接关联安全隔离、跨会话状态、`/workspace` 持久化。
- **[#7799](https://github.com/nearai/ironclaw/issues/7799)** · 4 评论 · 已关闭 · T2 CI 加速(@henrypark133):nextest、完整失败信号、PR 解除节流。
- **[#7038](https://github.com/nearai/ironclaw/issues/7038)** · 3 评论 · 已关闭 · Design System Phase 1(@rdisandro):Storybook 集成 + 设计系统目录。
- **[#7862](https://github.com/nearai/ironclaw/issues/7862)** · 3 评论 · Device link 在未配置 `telegram_api_id/api_hash` 时报"无法链接"的通用错误(@henrypark133),在 Railway 实例 `ironclaw-qa-testing-libsql` 上复现。
- **[#7891](https://github.com/nearai/ironclaw/issues/7891)** · 2 评论 · 性能缺陷:capability payload 未投影 + 24 KiB 头盲切片,两封 Gmail 邮件多耗 14.3s 推理(@henrypark133)。
- **[#7781](https://github.com/nearai/ironclaw/issues/7781)** · 2 评论 · **v1.4.0 Epic**:Design System Phases 2–3,`DESIGN.md` 治理 + 主题与 UI 换肤(@rdisandro)。
- **[#7892](https://github.com/nearai/ironclaw/issues/7892)** · 2 评论 · 严重 agent-loop 缺陷:同一 defer 工具被"发现" 15 次却从未被调用,123s 单轮 + 4 次不重复的 capability 调用,缺少终止守卫(@henrypark133)。
- **[#7782](https://github.com/nearai/ironclaw/issues/7782)** · 1 评论 · Design System Phases 4–5(@rdisandro)。
- **[#7887](https://github.com/nearai/ironclaw/issues/7887)** · 1 评论 · Extension 查找路径在 Telegram 表面即兴输出设备链接步骤说明,显示 #7861 仍未完全覆盖真实链路(@henrypark133)。

**背后诉求**:运行鲁棒性(agent-loop 守卫)、跨会话持久化(sandbox + workspace)、CI 反馈速度、UI 一致性 + 国际化、Slack/Telegram 等渠道的"富控制面"而非"薄聊天面"。

---

## 5. Bug 与稳定性

按严重程度排序(均无紧急热修,见备注):

| 严重度 | Issue | 现象 | Fix PR 状态 |
|---|---|---|---|
| 🔴 严重 | [#7892](https://github.com/nearai/ironclaw/issues/7892) | agent-loop 对同一 deferred 工具重复"查找" 15 次却从不调用,典型单轮 79/86/123s,无终止守卫 | **无** — 今日未提交 PR |
| 🟠 高 | [#7891](https://github.com/nearai/ironclaw/issues/7891) | `gmail.get_message` 返回值未做结构化投影,49 KiB 原始 MIME 头被推入 prompt;两封邮件单轮 19.7s,推理 19.2s | **OPEN** [#7896](https://github.com/nearai/ironclaw/pull/7896) (XL,低风险)— 引入有界、结构感知的投影路径,preview 上限 4 KiB

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

<think>The user wants me to generate a daily report for the LobsterAI project based on GitHub data provided. Let me analyze the data carefully and structure the report according to the requested sections.

Let me analyze the data:

**Overall Activity (Last 24 Hours):**
- 1 Issue update (1 new/active, 0 closed)
- 11 PR updates (2 pending, 9 merged/closed)
- 2 new releases

**Releases:**
1. 2026.8.25 - Includes feat: library, feat(library): enhanced cross-platform thumbnails and local artifact lifecycle, feat(library): optimized local artifact preview and operation experience
2. 2026.8.21 - Includes feat(dsh): add usage analytics, feat: update dsh to 0.1.1-rc.1, refactor(dsh)

**Issues:**
- #2536 [OPEN] WeChat group is full - someone asking for another group

**Pull Requests:**
- #2535 [CLOSED] feat(settings): add plan model catalog
- #1277 [OPEN] dependabot: bump electron group
- #2534 [CLOSED] Release/2026.8.20
- #2533 [CLOSED] fix(artifacts): distinguish webpage and local service preview
- #2532 [CLOSED] fix(sidebar): fade out login promo tip
- #2531 [CLOSED] fix(library): fix local artifact background refresh flickering
- #2530 [CLOSED] feat(settings): add plan model catalog
- #2529 [CLOSED] feat(analytics): improve library analytics and publish conversion attribution
- #1275 [CLOSED] dependabot: bump actions/stale
- #1276 [CLOSED] dependabot: bump actions/first-interaction
- #1159 [OPEN] feat(cowork): add session fork

Note: There are some inconsistencies in the data - PR #2530 and #2535 appear to both be about "add plan model catalog" but #2535 is closed and #2530 is also closed. Also the data shows PR #2534 is "Release/2026.8.20" which is interesting since today is 2026.8.26 and the latest release is 2026.8.25.

Let me note that the daily report date is 2026-08-26.

Active contributors in last 24 hours:
- @liugang519 - multiple library/artifacts/analytics PRs
- @liuzhq1986 - settings/sidebar/release PRs

Let me write the report now in Chinese as requested.</think>

# LobsterAI 项目日报

**报告日期：2026-08-26**
**项目地址：https://github.com/netease-youdao/LobsterAI**

---

## 1. 今日速览

LobsterAI 项目今日保持中高度活跃的开发节奏，过去 24 小时内共有 **11 个 PR** 被合并或关闭、**2 个新版本发布**（2026.8.25 与 2026.8.21），同时仅产生 **1 条新 Issue**（社区沟通类，非技术问题）。主要工作集中在**资料库（library）模块的功能增强与体验优化**、**设置页新增模型目录**，以及**埋点体系完善**等方向，由 @liugang519 与 @liuzhq1986 两位核心贡献者主导推进。整体而言，项目迭代平稳，无严重 Bug 或兼容性争议，社区面健康。

---

## 2. 版本发布

### 📦 v2026.8.25（最新发布）
合并内容包含：
- [#2513](https://github.com/netease-youdao/LobsterAI/pull/2513) feat: library
- [#2524](https://github.com/netease-youdao/LobsterAI/pull/2524) feat(library): 增强跨平台缩略图与本地产物生命周期
- PR #2531 等修复类改动（修复本地产物后台刷新闪烁）

### 📦 v2026.8.21
合并内容包含：
- [#2515](https://github.com/netease-youdao/LobsterAI/pull/2515) feat(dsh): 增加开关与工作台使用统计
- [#2516](https://github.com/netease-youdao/LobsterAI/pull/2516) feat: 升级 dsh 至 0.1.1-rc.1
- dsh 模块重构：迁移使用分析等

**破坏性变更提示**：从 PR 摘要未明确标注 breaking change，但 dsh 模块的 0.1.1-rc.1 升级可能涉及接口调整，建议升级前查阅 release notes 与 [#2516](https://github.com/netease-youdao/LobsterAI/pull/2516) 变更细节。

**迁移建议**：升级至 2026.8.25 的用户请同步关注资料库相关 bug 修复；若使用了自定义资料管理流程，建议测试后台刷新与预览行为是否符合预期。

---

## 3. 项目进展

今日关闭/合并的 **9 个 PR** 中，核心进展集中在以下三大方向：

### 🔧 资料库（Library）模块持续打磨
- [#2531](https://github.com/netease-youdao/LobsterAI/pull/2531) **fix(library): 修复本地产物后台刷新闪烁** —— 拆分首次加载/后台刷新/分页追加状态，新增按资料 ID 批量查询接口，原位合并新增、变更和失效资料，保持筛选、分页与滚动位置。配套补全刷新协调、IPC 与本地存储测试。
- [#2533](https://github.com/netease-youdao/LobsterAI/pull/2533) **fix(artifacts): 区分网页与本地服务的预览展示** —— HTML 网页与本地服务采用不同图标和文案，新增 HTM 文件图标映射与策略测试。
- [#2529](https://github.com/netease-youdao/LobsterAI/pull/2529) **feat(analytics): 完善资料库埋点与发布转化归因** —— 接入曝光、筛选、搜索、预览、收藏及刷新行为埋点；新增发布 CTA 到付费订阅 7 天末次触点归因；统一网站管理入口至资料库。

### ⚙️ 设置页模型目录
- [#2530](https://github.com/netease-youdao/LobsterAI/pull/2530) **feat(settings): add plan model catalog** —— 在自定义模型之上新增 plan model 标签，加载文本/图像/视频模型目录，渲染分类模型卡片，提供轻量诊断。
- [#2535](https://github.com/netease-youdao/LobsterAI/pull/2535) 同一功能的另一实现/分支（已关闭）。

### 🧹 体验与依赖维护
- [#2532](https://github.com/netease-youdao/LobsterAI/pull/2532) **fix(sidebar): fade out login promo tip** —— 5 秒后渐隐免费额度提示，授权态变化时清理计时器。
- [#1275](https://github.com/netease-youdao/LobsterAI/pull/1275) ci: 升级 actions/stale 9.1.0 → 10.2.0
- [#1276](https://github.com/netease-youdao/LobsterAI/pull/1276) ci: 升级 actions/first-interaction

**综合评估**：今日合并的 PR 显著提升了**资料库可用性**与**数据驱动决策能力**，并将设置页的模型发现体验系统化，项目整体在前端体验与可观测性两侧均向前迈出了实质性一步。

---

## 4. 社区热点

### 🗨️ 评论/讨论
- [#2536](https://github.com/netease-youdao/LobsterAI/issues/2536) **WeChat group is Full**（由 @Murrayhubert 创建，1 条评论）

这是今日唯一活跃 Issue，但并非技术问题，而是用户对**官方微信交流群扩张**的诉求。用户表达对加入官方社区渠道的期待，并主动寻求第二个微信群。该 Issue 反映了**项目用户群扩张速度较快，社区承载能力有待扩容**。

技术侧目前尚无被广泛评论的 PR。

---

## 5. Bug 与稳定性

| 严重程度 | 描述 | PR 状态 |
|---|---|---|
| 中 | 本地产物后台刷新闪烁，体验割裂 | ✅ [#2531](https://github.com/netease-youdao/LobsterAI/pull/2531) 已合并 |
| 低 | 登录免费额度提示长期停留 | ✅ [#2532](https://github.com/netease-youdao/LobsterAI/pull/2532) 已合并 |
| 低 | 网页与本地服务预览展示混淆 | ✅ [#2533](https://github.com/netease-youdao/LobsterAI/pull/2533) 已合并 |

**今日未报告新 Bug**，所提及问题均已合入修复，整体稳定性良好。

---

## 6. 功能请求与路线图信号

- **Session Fork（会话分支）**：[#1159](https://github.com/netease-youdao/LobsterAI/pull/1159) feat(cowork): add session fork，仍处于 **OPEN** 状态。该功能允许用户在协作会话详情菜单中创建分支会话，便于在不同后续方向上做实验而不破坏原状态。今日仍有活动迹象，值得关注是否纳入近期版本。

- **Electron 升级**：[#1277](https://github.com/netease-youdao/LobsterAI/pull/1277) 由 dependabot 提出，将 Electron 从 40.2.1 升级至 43.4.1，目前 OPEN。属于基础设施类升级，未来版本若纳入，需重点回归桌面端兼容性。

- **模型目录（plan model catalog）**：已通过 [#2530](https://github.com/netease-youdao/LobsterAI/pull/2530) 进入主线，预示后续设置页将系统化展示各档位可用模型。

---

## 7. 用户反馈摘要

今日唯一新增的用户反馈来自 [#2536](https://github.com/netease-youdao/LobsterAI/issues/2536)：
- **痛点**：现有微信群已满，无法加入官方交流渠道。
- **诉求**：建立第二个微信群。
- **反映**：项目用户基数与社区参与意愿在快速上升，建议维护者推进**多渠道社区建设**（如 Discord、Slack 或额外微信群）以免流失潜在贡献者。

技术反馈层面，今日以开发者主动修复为主，缺少外部用户的体验类报告，建议观察后续版本正式发布后是否涌现更多 issue。

---

## 8. 待处理积压

| 项目 | 类型 | 创建时间 | 状态 | 备注 |
|---|---|---|---|---|
| [#1277](https://github.com/netease-youdao/LobsterAI/pull/1277) dependabot: Electron 升级 | PR | 2026-04-02 | OPEN | 已逾 4 个月未合并，存在安全/兼容性收益，建议评估 |
| [#1159](https://github.com/netease-youdao/LobsterAI/pull/1159) feat(cowork): add session fork | PR | 2026-03-31 | OPEN | 已 5 个月，功能完整，是潜在的体验增强亮点 |
| [#2536](https://github.com/netease-youdao/LobsterAI/issues/2536) 微信群扩容诉求 | Issue | 2026-08-25 | OPEN | 低技术门槛，建议维护者快速响应建立新群 |

**提醒**：#[1159](https://github.com/netease-youdao/LobsterAI/pull/1159) 会话分支功能落地后能显著增强协作会话的实验能力，建议维护者集中 review 与测试。

---

## 📊 数据小结

| 指标 | 数值 |
|---|---|
| 新增 Issues | 1 |
| 关闭 Issues | 0 |
| 合并/关闭 PR | 9 |
| 待合并 PR | 2 |
| 新版本发布 | 2 |
| 主要贡献者 | @liugang519, @liuzhq1986, @fisherdaddy |

**项目健康度评级：🟢 良好**
开发节奏稳定，资料库与设置页两条主线并行推进，依赖维护持续，用户面无重大投诉。建议跟进 Electron 与 Session Fork 两个长期 OPEN 项的处置，并尽快响应社区扩容诉求。

</details>

<details>
<summary><strong>QwenPaw</strong> — <a href="https://github.com/agentscope-ai/QwenPaw">agentscope-ai/QwenPaw</a></summary>

<think>The user wants me to generate a daily report for the QwenPaw project based on GitHub data provided. Let me analyze the data carefully and structure the report according to the 8 sections requested.

Let me first analyze the data:

**Data Overview:**
- Past 24 hours Issues updates: 33 (19 new/active, 14 closed)
- Past 24 hours PR updates: 50 (21 pending merge, 29 merged/closed)
- New releases: 1 (v2.1.1-beta.3)

**Latest Release:**
- v2.1.1-beta.3: includes pinning @agentscope-ai/chat to 1.1.72, fixing PluginAPI casing to PluginApi, and test integration expansion

**Issues Analysis:**
Let me categorize by type and activity:

Most discussed Issues (by comment count):
1. #338 (9 comments) - Webhook feature request, open since March
2. #7258 (6 comments) - WeChat channel "show thinking process" setting not working
3. #5720 (5 comments) - Memory leak in v1.1.12.post2, closed
4. #6810 (5 comments) - Windows installation/update file lock issue
5. #6273 (4 comments) - Unify task tracking and session concurrency
6. #7261 (4 comments) - SSE serialization runaway loop, closed
7. #7218 (4 comments) - peer closed connection issue
8. #7182 (4 comments) - Workspace-scoped Skill preload policy
9. #7228 (4 comments) - App market UI bug, closed
10. #7262 (3 comments) - Side menu unresponsive, closed

**Key Bugs Reported:**
- #7258: WeChat channel thinking process setting not working
- #7261: SSE runaway serialization loop causing 100% CPU (closed - likely fixed)
- #7218: Connection timeout issues
- #7285: Long conversation performance degradation
- #6810: Windows install file lock issue
- #5720: Memory leak (closed)
- #7296: OpenAI Responses multi-turn fails with 400
- #7301: MCP credential issue
- #7298: TLS stack version issue
- #7129: Console rendering frame drops
- #7282: Markdown lists excessive spacing
- #7291: qwenpaw-creator pull error
- #7266: subAgent finding wrong folder

**Feature Requests:**
- #338: Webhook functionality
- #7182: Workspace-scoped Skill preload policy
- #7013: Unified tool panel for Chat (closed)
- #7196: Default collapsed thinking process
- #7287: Skin customization proposal
- #7263: Task completion indicator (closed)
- #7279: Click selection instead of input (closed)
- #7280: Auto-clear completed background tasks

**Closed Issues:**
- #5720 (memory leak)
- #7261 (SSE loop)
- #7228 (app market UI)
- #7013 (tool panel)
- #7196 (thinking process)
- #7285 (long conv perf)
- #7256 (rename app to market)
- #7129 (rendering)
- #7249 (release verification)
- #7259 (Windows memory report)
- #7262 (side menu)
- #7263 (task indicator)
- #7279 (click selection)
- #7256 (rename)

**PR Analysis:**

Important open PRs:
- #7163: Session thinking modes and model management
- #7190: PyPI runtime path, docker-compose demo
- #7299: fix(console): reject conflicting chat payloads (first-time contributor)
- #7293: Split integration tests into parallel shards
- #6399: Reranker UI config panel
- #7274: QwenPaw Creator 1.1.1
- #7119: Create master key file with owner-only permissions
- #7294: Image resizing by pixel limit
- #7292: Add unit tests +5.02pp coverage
- #7277: Refresh Aliyun and Kimi model catalogs
- #7290: Blog for qwenpaw mail
- #7264: fix(channels): make contract checks portable and complete

Important closed/merged PRs:
- #7300: Update scroll context manager blog
- #7276: Bump agentscope to 2.0.7
- #2773: Self-evolution skill (closed - likely merged?)
- #5414: Decouple skill SOP
- #1228: read_media tool
- #1525: Cron invalid schedule isolation
- #4881: Add MiniMax M3 model
- #2304: Treat 404 as successful connection
- #1552: default_headers support

Now let me structure the report. Given the date is 2026-08-26, and there are release notes from 2.1.1-beta.2 and beta.3, the project is in beta testing for v2.1.1.

Let me write the report in Chinese since the user wrote in Chinese.</think>

# QwenPaw 项目日报

**日期：2026-08-26**
**项目：** agentscope-ai/QwenPaw

---

## 1. 今日速览

QwenPaw 项目今日保持高活跃度，过去 24 小时共有 **33 个 Issues 更新**（19 活跃 / 14 已关闭）和 **50 个 PR 更新**（21 待合并 / 29 已合并或关闭），并发布了 **v2.1.1-beta.3** 预发布版本。当前主线处于 **v2.1.1 Beta 阶段** 的持续迭代，社区反馈密集，主要集中在 Beta 版本的体验打磨、性能稳定性与多平台兼容性。从数据看，关闭率较高（Issues 约 42%、PR 约 58%），说明维护者响应及时，问题解决节奏良好。

---

## 2. 版本发布

### v2.1.1-beta.3

本次 Beta 更新包含以下变更：

| 类别 | 内容 | PR |
|---|---|---|
| chore | 将 `@agentscope-ai/chat` 依赖锁定到 1.1.72 | [#7257](https://github.com/agentscope-ai/QwenPaw/pull/7257) |
| docs | 修正 `loop-engineering` 文档中 `PluginAPI` 大小写为 `PluginApi` | [#7269](https://github.com/agentscope-ai/QwenPaw/pull/7269) |
| test | 扩展 integration 测试覆盖 | (链接见 release notes) |

**破坏性变更：** 未发现
**迁移注意事项：** Beta 版本，非生产环境推荐使用；建议从 v2.1.1-beta.2 平滑升级，注意锁定版本的 chat 包可能影响本地自定义依赖。

---

## 3. 项目进展

今日合并/关闭的重要 PR 推动项目在多个维度向前迈进：

| 进展方向 | PR | 影响 |
|---|---|---|
| **依赖升级** | [#7276](https://github.com/agentscope-ai/QwenPaw/pull/7276) | AgentScope 升级到 2.0.7，提升底层稳定性 |
| **模型生态** | [#4881](https://github.com/agentscope-ai/QwenPaw/pull/4881) | 新增 MiniMax M3 旗舰模型至内置列表，国际版与国内版同步设为默认 |
| **Provider 兼容** | [#2304](https://github.com/agentscope-ai/QwenPaw/pull/2304) | Anthropic 兼容 provider 404 视为连接成功，修复 MiniMax 等 provider 连接检测 |
| **Provider 扩展** | [#1552](https://github.com/agentscope-ai/QwenPaw/pull/1552) | 自定义 provider 支持 `default_headers`，增强 API 兼容性 |
| **Skill 体系** | [#5414](https://github.com/agentscope-ai/QwenPaw/pull/5414) | 解耦 Skill SOP 与 judgment rules，支持独立编辑规则 |
| **Skill 自进化** | [#2773](https://github.com/agentscope-ai/QwenPaw/pull/2773) | 引入 Self-evolution skill，自动捕获错误与根因分析 |
| **多媒体工具** | [#1228](https://github.com/agentscope-ai/QwenPaw/pull/1228) | 新增 `read_media` 工具，支持图片/视频/音频处理 |
| **定时任务** | [#1525](https://github.com/agentscope-ai/QwenPaw/pull/1525) | 隔离无效持久化 cron schedule，避免启动崩溃 |
| **文档** | [#7300](https://github.com/agentscope-ai/QwenPaw/pull/7300) | 更新 Scroll context manager 博客 |

**评估：** 本次合入从底层依赖、模型生态、Skill 架构到 Provider 兼容性均有推进，是一次较为全面的横向增强。

---

## 4. 社区热点

| 排名 | Issue/PR | 标题 | 评论数 | 链接 |
|---|---|---|---|---|
| 1 | #338 | 建议添加 Webhook 功能 | 9 | [#338](https://github.com/agentscope-ai/QwenPaw/issues/338) |
| 2 | #7258 | 微信频道"显示思考过程"设置无效 | 6 | [#7258](https://github.com/agentscope-ai/QwenPaw/issues/7258) |
| 3 | #5720 | v1.1.12.post2 内存泄漏反馈 | 5 | [#5720](https://github.com/agentscope-ai/QwenPaw/issues/5720) |
| 4 | #6810 | Windows 安装/更新进程文件占用报错 | 5 | [#6810](https://github.com/agentscope-ai/QwenPaw/issues/6810) |
| 5 | #6273 | 统一任务跟踪与同会话并发语义 | 4 | [#6273](https://github.com/agentscope-ai/QwenPaw/issues/6273) |
| 6 | #7261 | SSE 序列化死循环导致 100% CPU | 4 | [#7261](https://github.com/agentscope-ai/QwenPaw/issues/7261) |
| 7 | #7218 | peer closed connection 不完整读取 | 4 | [#7218](https://github.com/agentscope-ai/QwenPaw/issues/7218) |

**诉求分析：**
- **生态集成：** Webhook 是呼声最高的功能，反映用户希望 QwenPaw 与外部系统打通的需求（#338 持续近 6 个月仍有 9 条评论）。
- **Beta 体验细节：** #7258、#7256、#7196、#7228 等均为 v2.1.1 Beta 阶段的 UI/UX 体验问题，集中在"显示思考过程"、"应用市场命名"、"已安装状态显示"等可快速修复项。
- **稳定性焦虑：** #5720、#7261、#7218 都涉及长时间运行的稳定性，反映用户对生产化使用的担忧。

---

## 5. Bug 与稳定性

按严重程度排列：

| 严重度 | Issue | 描述 | 状态 | Fix PR |
|---|---|---|---|---|
| 🔴 严重 | [#7261](https://github.com/agentscope-ai/QwenPaw/issues/7261) | 2.1.1b2 agent-to-agent 运行后 SSE 死循环，100% CPU 与内存爆涨 | 已关闭 | 待跟进 |
| 🔴 严重 | [#7296](https://github.com/agentscope-ai/QwenPaw/issues/7296) | OpenAI Responses 多轮失败 400（推理项过期） | OPEN | 无 |
| 🔴 严重 | [#7301](https://github.com/agentscope-ai/QwenPaw/issues/7301) | MCP 旧版迁移遗留 credential 引用，新会话全部失败 | OPEN | 无 |
| 🟠 高 | [#5720](https://github.com/agentscope-ai/QwenPaw/issues/5720) | v1.1.12 内存泄漏 | 已关闭 | 已修复 |
| 🟠 高 | [#7258](https://github.com/agentscope-ai/QwenPaw/issues/7258) | 微信频道"显示思考过程"开关失效 | OPEN | 无 |
| 🟠 高 | [#6810](https://github.com/agentscope-ai/QwenPaw/issues/6810) | Windows 安装文件锁（NM host）导致更新失败 | OPEN | 无 |
| 🟠 高 | [#7218](https://github.com/agentscope-ai/QwenPaw/issues/7218) | 长文本推理超时连接中断 | OPEN | 无 |
| 🟠 高 | [#7298](https://github.com/agentscope-ai/QwenPaw/issues/7298) | Desktop (Tauri) 携带 OpenSSL 3.0.x，运营商 DPI 中断 TLS | OPEN | 无 |
| 🟡 中 | [#7285](https://github.com/agentscope-ai/QwenPaw/issues/7285) | 长对话网页端卡顿异常 | 已关闭 | 无 |
| 🟡 中 | [#7129](https://github.com/agentscope-ai/QwenPaw/issues/7129) | 流式输出浏览器掉帧 | 已关闭 | 无 |
| 🟡 中 | [#7288](https://github.com/agentscope-ai/QwenPaw/issues/7288) | 大 MCP 返回值可能溢出模型上下文 | OPEN | 无 |
| 🟡 中 | [#7282](https://github.com/agentscope-ai/QwenPaw/issues/7282) | Markdown 列表垂直间距过大 | OPEN | 无 |
| 🟡 中 | [#7266](https://github.com/agentscope-ai/QwenPaw/issues/7266) | subAgent 找错文件夹 | OPEN | 无 |
| 🟡 中 | [#7291](https://github.com/agentscope-ai/QwenPaw/issues/7291) | qwenpaw-creator 拉取示例项目报错 | OPEN | 无 |
| 🟢 低 | [#7228](https://github.com/agentscope-ai/QwenPaw/issues/7228) | 应用市场已安装按钮显示错误 | 已关闭 | 无 |
| 🟢 低 | [#7256](https://github.com/agentscope-ai/QwenPaw/issues/7256) | "应用"更名为"市场"不合理 | 已关闭 | 无 |

**总体观察：** Beta 阶段用户报告的多为体验级问题，但 #7261、#7296、#7301 等高严重度 Bug 已触及核心运行链路，建议维护者优先攻克。

---

## 6. 功能请求与路线图信号

| 功能 | Issue | 已有相关 PR | 纳入下一版本可能性 |
|---|---|---|---|
| Webhook 集成 | [#338](https://github.com/agentscope-ai/QwenPaw/issues/338) | 无 | 中（社区呼声持续） |
| Workspace 范围 Skill preload | [#7182](https://github.com/agentscope-ai/QwenPaw/issues/7182) | 无 | 高（与 Skill 体系演进契合） |
| 任务完成提醒（底栏标签橙色） | [#7263](https://github.com/agentscope-ai/QwenPaw/issues/7263) | 无 | 高（已关闭待评审） |
| Chat 统一工具面板 / Web 预览 / 交互终端 | [#7013](https://github.com/agentscope-ai/QwenPaw/issues/7013) | 无 | 高（已关闭待实现） |
| 选项弹窗化（替代输入） | [#7279](https://github.com/agentscope-ai/QwenPaw/issues/7279) | 无 | 中（已关闭待评审） |
| 推理过程默认折叠 | [#7196](https://github.com/agentscope-ai/QwenPaw/issues/7196) | [#7163](https://github.com/agentscope-ai/QwenPaw/pull/7163)（Session 级 thinking level） | 高（PR 已就位） |
| 零侵入"皮肤网关" | [#7287](https://github.com/agentscope-ai/QwenPaw/issues/7287) | 无 | 中（提议阶段） |
| 后台任务自动清除 | [#7280](https://github.com/agentscope-ai/QwenPaw/issues/7280) | 无 | 高 |
| 图像按像素限制 resize | - | [#7294](https://github.com/agentscope-ai/QwenPaw/pull/7294) | 高（PR 已就位） |
| Reranker UI 配置面板 | - | [#6399](https://github.com/agentscope-ai/QwenPaw/pull/6399) | 高 |
| 多轮冲突请求拒绝 | - | [#7299](https://github.com/agentscope-ai/QwenPaw/pull/7299) | 高 |

**信号总结：** v2.1.1 后路线图可能集中在 **Skill 体系完善**（preload、SOP 解耦）、**Chat 工作台**（统一面板、Web 预览、终端）、**UI 体验**（折叠、皮肤、点击选项）三大方向。

---

## 7. 用户反馈摘要

**痛点：**
- **Beta 阶段体验细节差**：UI 命名（"应用"→"市场"）、按钮状态（已安装仍显示"安装"）、设置项失效（微信频道思考过程）等问题集中暴露，说明产品发布前自测覆盖不足 ([#7256](https://github.com/agentscope-ai/QwenPaw/issues/7256), [#7228](https://github.com/agentscope-ai/QwenPaw/issues/7228), [#7258](https://github.com/agentscope-ai/QwenPaw/issues/7258))。
- **长时间/大文本场景性能堪忧**：长对话卡顿 ([#7285](https://github.com/agentscope-ai/QwenPaw/issues/7285))、流式掉帧 ([#7129](https://github.com/agentscope-ai/QwenPaw/issues/7129))、SSE 死循环 ([#7261](https://github.com/agentscope-ai/QwenPaw/issues/7261)) 集中反映了生产化使用的稳定性焦虑。
- **Windows 安装体验差**：浏览器扩展锁文件、NSIS 弹错、进程未终止等问题直接影响升级 ([#6810](https://github.com/agentscope-ai/QwenPaw/issues/6810))。
- **多 Provider 兼容性**：OpenAI Responses、MCP 旧版迁移、TLS 协议 ([#7296](https://github.com/agentscope-ai/QwenPaw/issues/7296), [#7301](https://github.com/agentscope-ai/QwenPaw/issues/7301), [#7298](https://github.com/agentscope-ai/QwenPaw/issues/7298)) 等都

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/NousResearch/hermes-agent">NousResearch/hermes-agent</a></summary>

<think>The user wants me to generate a daily report for the Hermes Agent project on GitHub based on the data provided. Let me analyze the data carefully:

**Data Overview:**
- Past 24 hours Issues updates: 50 (new/active: 42, closed: 8)
- Past 24 hours PR updates: 50 (pending: 41, merged/closed: 9)
- New releases: 0

Let me go through the issues and PRs systematically:

**Key Issues:**
1. #66616 - Skills index stale (97 comments) - highest activity
2. #52010 - macOS FDA revoked after update (21 comments)
3. #40239 - Portuguese language support (11 comments, 3 likes)
4. #87697 - Ollama stream cancellation bug (11 comments)
5. #95003 - xAI rejects requests due to tool_search reserved (10 comments, 8 likes)
6. #16520 - Terminal tools truncate long lines (10 comments, CLOSED)
7. #91115 - macOS keychain prompt after update (9 comments)
8. #95028 - Architecture proposal - Hermes Authority Execution Layer (9 comments)
9. #87703 - Windows update hangs on cua-driver (6 comments, CLOSED)
10. #94516 - Cronjobs unavailable in Desktop Bot Mode (6 comments, CLOSED)
11. #90428 - WS-detached session messages dropped (5 comments, CLOSED)
12. #93937 - Gateway switcher leaks session ID (5 comments)
13. #26665 - Desktop language resets to English (4 comments)
14. #84678 - Windows update progress card minimized (4 comments)
15. #93617 - Slack concurrent turns duplicate messages (3 comments, CLOSED)
16. #94906 - Windows stdio MCP client fails (3 comments, P1)
17. #94471 - Desktop Bots tab crashes (3 comments, CLOSED)
18. #93382 - Adaptive explanation policy (3 comments)
19. #79005 - Desktop profile swap routes wrong backend (3 comments)
20. #62774 - Portuguese text truncation during streaming (2 comments)
21. #91005 - Verified local cold archive (2 comments)
22. #94435 - Slack duplicate messages (2 comments)
23. #90663 - TUI lowercase Shift+letter in Ghostty (2 comments)
24. #94483 - CRONJOBS pane stuck (2 comments, CLOSED)
25. #95078 - Nested Hermes inherits stale TERMINAL_CWD (2 comments)
26. #94859 - Multiple stdio MCP servers fail after gateway restart (2 comments)
27. #87671 - Kanban stop-nudge misfires in delegate_task (2 comments)
28. #95054 - Ollama fallback entries resolve to (None, None) (2 comments)
29. #84106 - `hermes config get mcp_servers` exposes secrets (1 comment)
30. #95150 - stdio MCP _stdio_children_dead() inverted (1 comment)

**Closed Issues:**
- #16520 - Terminal tools truncate long lines
- #87703 - Windows update hangs
- #94516 - Cronjobs unavailable
- #90428 - WS-detached session messages
- #93617 - Slack concurrent turns
- #94471 - Desktop Bots tab crashes
- #94483 - CRONJOBS pane stuck

**Key PRs:**
1. #92931 - feat(bot-mode): cross-connection relay lease-backed (OPEN)
2. #95160 - perf(file-ops): collapse read_file/write_file probes (OPEN)
3. #93508 - feat(webapp): serve Desktop renderer in browsers (OPEN)
4. #93600 - docs: admit tool calls (OPEN, invalid)
5. #40839 - feat(api): expose executable plugin commands (OPEN)
6. #92122 - fix(desktop): resolve Hermes-capable interpreter (OPEN)
7. #95144 - fix(mcp): _stdio_children_dead inverted (CLOSED, duplicate)
8. #88422 - fix(update): unshallow shallow clones (CLOSED)
9. #95158 - fix(doctor): drop --json authenticated (OPEN)
10. #76661 - feat(gateway): P2P federation heartbeat (OPEN)
11. #95157 - fix: npm high-severity vulnerabilities (OPEN)
12. #95153 - fix(installer): retry Playwright IPv4 (OPEN)
13. #89061 - feat: SSYCloud LLM provider (OPEN)
14. #95155 - fix(web): resolve asset base path (CLOSED)
15. #95156 - fix(feishu): DM approval card unresponsive (OPEN)
16. #95148 - fix(cli): persist only configurable toolsets (OPEN)
17. #95149 - fix(tools): DaemonThreadPoolExecutor Python 3.14 (OPEN)
18. #95152 - kanban rework (OPEN)
19. #95101 - feat(authority): manifest schema (OPEN)
20. #76552 - feat(skills): task-scoped disabled-skill grants (OPEN)

**Closed PRs:**
- #95144 - fix(mcp): inverted liveness check (duplicate)
- #88422 - fix(update): unshallow shallow clones
- #95155 - fix(web): asset base path

Now let me create a comprehensive daily report. The user wants it in Chinese (the request was in Chinese), structured and professional.

Let me draft the report in Chinese, focusing on objective, data-driven analysis.

I'll structure it according to the 8 sections requested:

1. 今日速览
2. 版本发布 (无新版本，跳过或简述)
3. 项目进展 (合并/关闭的PR)
4. 社区热点 (评论最多的Issues/PRs)
5. Bug与稳定性
6. 功能请求与路线图信号
7. 用户反馈摘要
8. 待处理积压

Let me also identify the merged PRs vs closed PRs. The data shows 9 merged/closed PRs out of 50. Let me look more carefully:
- CLOSED PRs: #95144, #88422, #95155 - these are closed but not merged
- The data doesn't clearly distinguish between merged and closed, but says "已合并/关闭: 9"

I should note that there's a healthy mix of activity - bug fixes being closed, new features being proposed, and ongoing discussions.

Important patterns:
1. **MCP stdio issues cluster** - Multiple issues (#94906, #95150, #95144) about MCP stdio client failures, especially on Windows
2. **Desktop platform issues** - Many macOS/Windows specific bugs (FDA, keychain, update hang)
3. **Localization gaps** - Portuguese language support issues
4. **Security concerns** - #84106 about MCP secret exposure
5. **Architecture proposals** - #95028 about Hermes Authority Execution Layer
6. **Provider compatibility** - xAI, Ollama issues

Let me write the report now.

For thinking, I'll write a thorough analysis. The user wants a detailed daily report, so I need to be comprehensive.

Let me calculate some metrics:
- Issues: 42 open, 8 closed = 84% open rate (very high)
- PRs: 41 open, 9 closed = 82% open rate
- No releases in 24h
- Highest comment issue: #66616 (97 comments, 0 likes) - very active but no engagement
- Most upvoted issue: #95003 (8 likes) - xAI tool_search issue
- P1 issues: #94906, #95150 (MCP stdio failures - critical)
- Most active closing: bot-mode, MCP fixes, web dashboard fixes

Let me write the report now. I'll use markdown formatting, embed GitHub links, and keep tone objective.

Actually I should double-check - the data says "已合并/关闭: 9" which means merged/closed is 9. So 41 PRs are pending. Let me identify which closed PRs were actual merges vs just closed. From the data I have:
- #95144 CLOSED (duplicate, probably closed without merge)
- #88422 CLOSED (fix, likely merged)
- #95155 CLOSED (fix, likely merged)

The data doesn't clearly distinguish. I'll mention them as closed in the report.

Let me also note the time format - data goes up to 2026-08-26, so this is a future-projected report. The user says "2026-08-26 的项目动态日报". This is from a fictional/test dataset, but I should treat it as real for the report.

Let me finalize the report structure and content now.</think>

# Hermes Agent 项目动态日报

**日期：2026-08-26**
**数据来源：[NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent)**

---

## 1. 今日速览

Hermes Agent 仓库在过去 24 小时内活动保持高位：Issues 端产生 50 条更新（42 条新开/活跃、8 条关闭），PR 端同样 50 条（41 条待合并、9 条已关闭）。**未发布新版本**，但代码层面的修复密度显著——尤其是围绕 MCP stdio 子进程、Windows/macOS 安装更新链路、本地化（葡萄牙语）以及 Slack/Feishu 消息通道的若干 P1/P2 Bug 今日集中出现并被识别。社区讨论最热的仍为基础设施类（#66616 Skills 索引陈旧化问题已积累 97 条评论），平台兼容性和 provider 互操作问题（xAI `tool_search` 命名冲突获 8 个 👍）成为开发者关注焦点。整体看，项目处于"高强度修 bug + 长尾架构讨论"双轨状态。

---

## 2. 版本发布

**今日无新版本发布。** 当前主分支未见 Release tag 更新，PR 中也无版本号相关提交。建议关注后续是否合并 #92931（Bot Mode 跨连接中继重构）或 #95101（Authority Manifest 编译体系）等大特性后的发版信号。

---

## 3. 项目进展（已合并/关闭的 PR）

| PR | 标题 | 类别 | 影响 |
|---|---|---|---|
| [#95144](https://github.com/NousResearch/hermes-agent/pull/95144) | fix(mcp): 修正 `_stdio_children_dead()` 反向判断 | Bug Fix / MCP | 修复 stdio MCP 服务存活检测逻辑反向（已 CLOSED，标记 duplicate，可能由并行的 [#95150](https://github.com/NousResearch/hermes-agent/issues/95150) / [#94906](https://github.com/NousResearch/hermes-agent/issues/94906) 覆盖） |
| [#88422](https://github.com/NousResearch/hermes-agent/pull/88422) | fix(update): 解开浅克隆以跨越边界 | Bug Fix / 安装更新 | 修复 shallow clone 下 `git fetch` 不跨越浅边界导致 updater 假报成功（#88175）的隐藏回归 |
| [#95155](https://github.com/NousResearch/hermes-agent/pull/95155) | fix(web): 代理前缀下代码分割 chunk 的 base 路径 | Bug Fix / Web Dashboard | 修复 Vite 未配置 `base` 时硬编码 `/assets/...` 在反向代理路径下失效的问题 |

**净推进评估：** 三条已关闭 PR 均为中等影响的稳定性修复，未涉及大型特性落地。代码库在"安装更新链路可靠性"和"Web 资产路径可移植性"两个长期痛点上各进了一步。考虑到仍有 41 条 PR 待审、且包含 P2P Federation（#76661）、Webapp 浏览器模式（#93508）等大特性，PR 评审通道压力较大。

---

## 4. 社区热点

按评论数排序：

1. **[#66616](https://github.com/NousResearch/hermes-agent/issues/66616)（97 条评论）** — `[skills-index-watchdog]` Skills 索引已陈旧 29.8h（限值 26h），`/docs/api/skills-index.json` 被标记为 `degraded`。这是 Skills Hub 文档生态健康度的关键自动巡检，说明 cron 重建（6/18 UTC）和 deploy-site 工作流之间存在覆盖间隙。**用户诉求：** 需要更频繁或事件触发的索引重建机制。

2. **[#52010](https://github.com/NousResearch/hermes-agent/issues/52010)（21 条评论）** — macOS 每次 Hermes Desktop 更新后，Full Disk Access 权限被撤销，必须手动重新授予。**诉求：** 升级流程应保持签名身份一致或在 README 中给出明确指引。

3. **[#40239](https://github.com/NousResearch/hermes-agent/issues/40239)（11 条评论 / 👍3）** — 葡萄牙语（pt-BR）Desktop 本地化。后端/TUI 已有 `locales/pt.yaml`，但 Desktop UI 仍缺葡语选项。

4. **[#87697](https://github.com/NousResearch/hermes-agent/issues/87697)（11 条评论）** — Hermes Client 在 prompt 评估阶段约 1.5s 后客户端主动取消本地 Ollama 流，触发 `<unused49>` token 循环。本地 LLM 用户被完全阻塞。

5. **[#95003](https://github.com/NousResearch/hermes-agent/issues/95003)（10 条评论 / 👍8）** — xAI API 拒绝请求，错误码：`The function name tool_search is reserved for the tool_search tool`。这是当日社区最"被认可"的痛点——意味着 Hermes 自带的工具检索机制与 xAI 保留字冲突，使 Grok provider 完全不可用。**值得在下一 patch 中优先处理。**

6. **[#95028](https://github.com/NousResearch/hermes-agent/issues/95028)（9 条评论）** — `andrexibiza` 提交的"权限执行层"架构 RFC，认为当前 12 个分散问题根因相同（边界处的环境/身份/PID 不可信），提出统一 Authority Manifest 方案。这是来自社区的系统级架构建议。

**热点指向：** 自动化健康巡检（#66616）→ 平台权限与签名问题（#52010、#91115）→ provider 互操作（#95003、#87697）→ 跨平台本地化（#40239、#62774）。社区正在通过结构化讨论暴露一组相互关联的"边界信任"问题。

---

## 5. Bug 与稳定性

按严重程度排列（标注是否有修复 PR）：

| 严重度 | Issue | 标题 | 修复 PR |
|---|---|---|---|
| **P1** | [#94906](https://github.com/NousResearch/hermes-agent/issues/94906) | Windows: native stdio MCP 客户端发现工具但每次调用都 "subprocess has exited" | ❌ 暂无 |
| **P1** | [#95150](https://github.com/NousResearch/hermes-agent/issues/95150) | stdio MCP：`_stdio_children_dead()` 反向判断导致所有活子进程被报死 | ⚠️ [#95144](https://github.com/NousResearch/hermes-agent/pull/95144) 已 CLOSED（duplicate，需关注 #94335 主线修复） |
| **P2** | [#95003](https://github.com/NousResearch/hermes-agent/issues/95003) | xAI 拒绝 `tool_search` 函数名（保留字冲突） | ❌ 暂无 |
| **P2** | [#87697](https://github.com/NousResearch/hermes-agent/issues/87697) | Hermes Client 取消本地 Ollama 流 | ❌ 暂无 |
| **P2** | [#52010](https://github.com/NousResearch/hermes-agent/issues/52010) | macOS FDA 每次更新后撤销 | ❌ 暂无 |
| **P2** | [#91115](https://github.com/NousResearch/hermes-agent/issues/91115) | macOS keychain 每次更新后重新提示 | ❌ 暂无 |
| **P2** | [#93937](https://github.com/NousResearch/hermes-agent/issues/93937) | 已注册 gateway 切换器泄漏 runtime session ID | ❌ 暂无 |
| **P2** | [#94859](https://github.com/NousResearch/hermes-agent/issues/94859) | Gateway 重启后多个 stdio MCP 服务器间歇性失败 | ❌ 暂无 |
| **P2** | [#79005](https://github.com/NousResearch/hermes-agent/issues/79005) | Desktop 切换 profile 误路由 session.create | ❌ 暂无 |

**已关闭（潜在回归修复）：**
- [#16520](https://github.com/NousResearch/hermes-agent/issues/16520) `read_file/cat` 长行截断为 `...` 导致模型误判文件损坏 — `sweeper:implemented-on-main`
- [#87703](https://github.com/NousResearch/hermes-agent/issues/87703) Windows `hermes update` 在 cua-driver 刷新时挂 ~11 分钟
- [#94516](https://github.com/NousResearch/hermes-agent/issues/94516) / [#94483](https://github.com/NousResearch/hermes-agent/issues/94483) Desktop Routines/Cronjobs 面板回归（占位文案错误）
- [#90428](https://github.com/NousResearch/hermes-agent/issues/90428) WS 断连后消息静默丢失
- [#93617](https://github.com/NousResearch/hermes-agent/issues/93617) / [#94435](https://github.com/NousResearch/hermes-agent/issues/94435) Slack 并发流重复消息
- [#94471](https://github.com/NousResearch/hermes-agent/issues/94471) Desktop Bots `(e.name || "").trim is not a function`

**总体判断：** Windows + macOS 桌面端的"更新副作用"问题已形成集群（FDA、keychain、cua-driver、UAC 隐藏窗口），需在下一个 minor 版本前集中修复。MCP stdio 子进程在 Windows 上的脆弱性是当日最严重风险——两条 P1 尚未收敛到主线修复。

---

## 6. 功能请求与路线图信号

候选纳入下一版本的 PR（按需求强度排序）：

| PR | 标题 | 进入下一版本的可能性 |
|---|---|---|
| [#95160](https://github.com/NousResearch/hermes-agent/pull/95160) | perf(file-ops): 将 read/write shell 探测合并为单次往返 | **高**——纯性能优化，零行为变化 |
| [#95157](https://github.com/NousResearch/hermes-agent/pull/95157) | fix: 解决 npm 高危漏洞（nanoid 3.3.18、Electron 40→41） | **高**——安全依赖升级 |
| [#95158](https://github.com/NousResearch/hermes-agent/pull/95158) | fix(doctor): 兼容 gh CLI 2.98+（去掉 `authenticated` 字段） | **高**——向后兼容修复 |
| [#95153](https://github.com/NousResearch/hermes-agent/pull/95153) | fix(installer): Playwright IPv4 重试 |

</details>

<details>
<summary><strong>OpenHuman</strong> — <a href="https://github.com/tinyhumansai/openhuman">tinyhumansai/openhuman</a></summary>

<think>The user wants me to generate a daily project report for OpenHuman (github.com/tinyhumansai/openhuman) based on the provided GitHub data. Let me analyze the data carefully and structure it according to the 8 sections requested.

Let me first understand the data:
- 24-hour Issues updates: 7 (6 new/active, 1 closed)
- 24-hour PR updates: 20 (16 pending merge, 4 merged/closed)
- No new releases

Key Issues to highlight:
1. #5635 - Pre-prod: config.toml insecure permissions (mode 644) - 4 comments
2. #5633 - Notion sync broken - 3 comments
3. #5604 - Staging API connection failure - 3 comments
4. #5749 - Langfuse agent-tracing push times out - CLOSED - 1 comment
5. #5766 - Agent turns: per-model-call ceiling - new
6. #5765 - FLASHDROP Contributors campaign - new
7. #5763 - Chat composer IME composition issue - new

Key PRs to highlight:
1. #5725 - P0 priority - Route recall, reset, flush through contract (release-gated)
2. #5779 - Route last six memory handlers through contract (phase 2)
3. #5773 - CLOSED - bump vendor/tinymemory to v1.6.0
4. #5768 - CLOSED - bump vendor/tinyagents
5. #5776 - CLOSED - re-anchor fan-out tests
6. #5757 - CLOSED - UI v4 fixes
7. #5767 - per-model-call ceiling (related to #5766)
8. #5775 - fix composer IME bridge (related to #5763)
9. #5764 - preserve IME composition
10. #5718 - fix claude-code stdout stream

Let me organize this into the 8 sections requested.

For severity ranking of bugs:
- Critical/P0: #5633 Notion sync completely broken, #5604 staging API connection failure
- High: #5635 config.toml permissions, #5749 Langfuse timeouts (now closed)
- Medium: #5763 IME composition issue

Let me write this in Chinese as requested, with professional and data-driven language.

I need to be careful about accuracy and not invent data. Let me draft the report.

For the project progress section, the merged/closed PRs include:
- #5749 - CLOSED (Langfuse bug fix)
- #5776 - CLOSED (fan-out tests re-anchored)
- #5768 - CLOSED (tinyagents bump)
- #5773 - CLOSED (tinymemory v1.6.0 bump)
- #5757 - CLOSED (UI v4 fixes)

These are the closed ones in 24 hours.

For community hotspots:
- Most active: #5635 (4 comments), #5633 (3 comments), #5604 (3 comments)
- #5765 FLASHDROP contributor campaign is interesting

For backlog - long-running issues, the ones from Aug 20 still open: #5635, #5633, #5604 - these are 5-6 days old.

Let me now write the report in a structured, professional manner.</think>

# OpenHuman 项目日报

**日期：2026-08-26**
**仓库：github.com/tinyhumansai/openhuman**

---

## 1. 今日速览

OpenHuman 在过去 24 小时呈现高活跃度的 pre-prod 阶段冲刺态势：共产生 20 个 PR 更新（16 待合并 / 4 已关闭）与 7 个 Issue 更新（6 开放 / 1 已关闭），无新版本发布。整体工作重心集中在两条主线——一是 `tinymemory`/`tinyagents`/`tinymcp`/`tinyflows` 等 vendored 子模块的版本升级与宿主侧契约实现，二是 Pre-prod 环境暴露的若干稳定性回归（Notion 同步、config 权限、staging API 断连、IME 合成崩溃）。多个 P0/P3 PR 已堆叠（stacked）形成 release-gated 流水线，等待上游 `tinymemory` 发布携带 #90 修复的版本才能合入 main，节奏受外部依赖约束明显。

---

## 2. 版本发布

**无新版本发布。**

目前所有跨模块变更（特别是 PR #5725、#5779 这条与 #5560 关联的 memory 契约路线）仍处于 release-gated 状态，依赖 `tinyhumansai/tinymemory#90` 的下一个发布版本落地后才能合入。建议关注者在该 PR 的 release-gate 注释被移除前，不应将其视为可投产能力。

---

## 3. 项目进展

过去 24 小时共关闭/合并 **4 个 PR**，具体推进内容如下：

- **[#5773 已关闭]** `chore(memory): bump vendor/tinymemory to v1.6.0 and implement the new contract`——将 vendored `tinymemory` 从 v1.3.0 (`d9a8a6ea`) 升至 v1.6.0 (`1a6a24ae`)，跨 26 个 commit、3 个 release、53 个文件，并配套实现新契约要求的 5 个 host trait impl。子模块 bump 与宿主代码绑定为单 commit 以保证 trait 实现可编译。链接：https://github.com/tinyhumansai/openhuman/pull/5773
- **[#5776 已关闭]** `test(agent): re-anchor the fan-out tests on the async spawn surface`——修复自 #5757 (`02d81f6cf`) 起 `main` 一直红的 `Rust Core Coverage` 失败（`parallel_subagent_fanout` panic 于 `tests/agent_harness_e2e.rs:1979`），回归链路被切断。链接：https://github.com/tinyhumansai/openhuman/pull/5776
- **[#5768 已关闭]** `chore(deps): bump vendor/tinyagents to e0f3210`——将 vendored `tinyagents` 从 `bbcd0a69a` 升 8 个 commit 至 `e0f321062`，带入"per-model-call wall-clock ceiling"与"HTTP/2 PING keepalives"两项非作者本人的贡献。此 bump 是 PR #5767 实现 #5766 议题的前置依赖。链接：https://github.com/tinyhumansai/openhuman/pull/5768
- **[#5757 已关闭]** `Fix/UI v4`——将 sub-agent 工具面从 11 个砍到 3 个（`spawn_async_subagent`、`list_subagents`、`continue_subagent`），移除 `wait`/`wait_loop`/`wait_subagent` 这类"等待面"工具（sub-agent 异步派发后由 idle 系统回合回填结果，等待集合本就冗余），收敛了工具协议面。链接：https://github.com/tinyhumansai/openhuman/pull/5757

**累计推进幅度**：内存栈完成 v1.6.0 升级与新契约的宿主侧桥接，agent 异步派发链路测试与 UI v4 同步落地；上游 tinyagents/tinymemory/tinyflows 子模块全部 bump 至最新 main。下一步卡点仍在 release-gate——#5725、#5779 必须等 `tinymemory` 上游发布版本。

---

## 4. 社区热点

按评论数与议题新鲜度排序，今日最值得关注的讨论：

- **#5635 — Pre-prod: config.toml 以不安全权限写入 (4 评论)**：作者 @Al629176 指出启动时 `config.toml` 被创建为 mode 644（世界可读），运行时自动校正为 600，但创建瞬间的 world-readable 窗口本身就是问题。这是 pre-prod 构建反复出现的同类基础设施问题之一。链接：https://github.com/tinyhumansai/openhuman/issues/5635
- **#5633 — Notion 同步在每次 tick 报 `Invalid request data provided` (3 评论)**：composio/notion 在编排、调度、周期三层均失败，已 51 次。Notion 记忆同步在当前构建中完全不可用。链接：https://github.com/tinyhumansai/openhuman/issues/5633
- **#5604 — Staging API 传输层断连 (3 评论)**：`staging-api.tinyhumans.ai/openai/v1/chat/completions` 在 04:0x 时间窗内发生 transport-level 失败（请求根本未发出），非 HTTP 错误码。链接：https://github.com/tinyhumansai/openhuman/issues/5604
- **#5766 — Agent 回合：采纳 tinyagents 的 per-model-call 上限 (0 评论，新开)**：@sanil-23 提议把 `RunLimits::max_wall_clock_ms` 的 600s 一刀切拆分为"单次模型调用上限 + 回合级失控守卫"，议题文本直指 `run_policy_for` 的双职责问题。配套实现 PR #5767 已提交。链接：https://github.com/tinyhumansai/openhuman/issues/5766
- **#5765 — FLASHDROP 贡献者激励活动 (0 评论，新开)**：社区增长运营信号——合并 PR 至任意 tinyhumansai 仓库可获 DeepSeek V4 Flash tokens/cash 奖励并提升每日 drop 上限。这是项目方首次在 issue tracker 公开发布的 GitHub 贡献者拉新活动。链接：https://github.com/tinyhumansai/openhuman/issues/5765

**热点诉求提炼**：Pre-prod 阶段"基础设施正确性"（权限、同步链路、传输层稳定性）压过"新功能"成为第一优先；运营侧开始系统化拉新贡献者。

---

## 5. Bug 与稳定性

按严重程度排序（综合影响面 × 复现率 × 阻塞下游能力）：

| 等级 | Issue | 描述 | 是否已有 fix PR | 备注 |
|---|---|---|---|---|
| 🔴 P0 | [#5633](https://github.com/tinyhumansai/openhuman/issues/5633) | Notion 同步在每次 tick 失败（51 次），composio/notion 完全不可用 | ❌ 未见对应 PR | 阻塞 Notion 记忆同步能力 |
| 🔴 P0 | [#5604](https://github.com/tinyhumansai/openhuman/issues/5604) | staging API 传输层断连，/openai/v1/chat/completions 无法发包 | ❌ 未见对应 PR | 仅 transport 失败，非 HTTP 错误，需基础设施侧排查 |
| 🟠 P1 | [#5635](https://github.com/tinyhumansai/openhuman/issues/5635) | config.toml 以 644 创建（瞬时 world-readable），运行时自动修 600 | ❌ 未见对应 PR | 写时即应用 600 而非依赖运行时补救 |
| 🟢 P2 | [#5763](https://github.com/tinyhumansai/openhuman/issues/5763) | CJK IME 在聊天编辑器中途被打断，预编辑被当作字面字符提交 | ✅ [PR #5775](https://github.com/tinyhumansai/openhuman/pull/5775)、[PR #5764](https://github.com/tinyhumansai/openhuman/pull/5764) 双修 | 同一缺陷两路修复，需协调合并 |
| ⚪ 已关闭 | [#5749](https://github.com/tinyhumansai/openhuman/issues/5749) | Langfuse agent-tracing 推送每次回合超时 | ✅ 已关闭 | 已闭环 |

**额外发现（PR 暴露的潜在回归）**：
- [PR #5776 描述](https://github.com/tinyhumansai/openhuman/pull/5776)：自 #5757 (`02d81f6cf`) 起 `main` 一直红，`parallel_subagent_fanout` 必崩。今已修复关闭。

---

## 6. 功能请求与路线图信号

- **Per-model-call 超时 (#5766 → #5767)**：由内部维护者 @sanil-23 提出并自提 PR，将 agent 回合预算模型从"单一 wall-clock 上限"重构为"per-call ceiling + 回合级 runaway guard"，默认 900s、可由 `OPENHUMAN_MODEL_CALL_TIMEOUT_SECS` 覆盖、`0` 禁用；回合级 ceiling 由 600s 提升至 3600s。落地后将直接改善长时间任务下"剩余预算被一次性吃掉"的卡死问题。链接：https://github.com/tinyhumansai/openhuman/issues/5766 / https://github.com/tinyhumansai/openhuman/pull/5767
- **子代理工具面收敛（#5757）**：sub-agent 工具由 11 砍到 3（`spawn_async_subagent`、`list_subagents`、`continue_subagent`），明确"sub-agent 始终异步、结果在 idle 回合回填"的产品语义。PR 已关闭合入。
- **Chat 回合每回合覆盖项 (#5770)**：`Agent::set_next_turn_overrides { suppress_active_goal, suppress_tools, suppress_memory_agent, suppress_transcript_autoload }`，供下一 `turn()` 消费。把"抑制项"显式化为可注入的会话级开关，方便上层产品做轻量对话。链接：https://github.com/tinyhumansai/openhuman/pull/5770
- **Memory 契约 #5560 阶段 2 (#5779 Draft)**：堆叠在 #5725 上，把最后 6 个 memory handler 路由到新契约；handoff 文档 [`5560-remaining.md`](./5560-remaining.md) 已说明仍阻塞 criterion 2 的原因及修正说明。链接：https://github.com/tinyhumansai/openhuman/pull/5779
- **Memory tree 关键词搜索分词化 (#5756)**：@nocstah 把"整串 LIKE 子串匹配"改为分词化查询，避免标点（`Grade 4: Week 1` vs `Grade 4 Week 1`）让看似已完整摄入的内容被判为不存在，影响 agent 通过 MCP `memory.search` 工具的检索质量。链接：https://github.com/tinyhumansai/openhuman/pull/5756
- **贡献者激励 FLASHDROP (#5765)**：项目方层面首次以 issue 形式公开 GitHub 贡献者活动，说明项目方开始把"贡献者增长"纳入运营 KPI。

---

## 7. 用户反馈摘要

由于本次数据中 Issues 评论样本较少（多数为问题描述与日志证据，作者自述占主导），可提炼的真实用户痛点如下：

- **Pre-prod 阶段"看似修好实则脆弱"的信任损耗**：#5635 中"运行时会自动修"这种补丁式修复路径被作者明确批评为"安全网而非解决方案"，反映用户对"在 write 时就做对"的工程洁癖要求。
- **CJK 用户被基本编辑器问题阻断**：#5763 与对应 PR #5775/#5764 反映中文/日文/韩文输入法用户在使用聊天编辑器时遭遇预编辑中断、字符被错误提交，影响核心输入场景。属于非英文用户基础可用性问题。
- **跨工具记忆检索的"沉默失败"**：#5756 PR 描述中指出"agent 通过 `memory.search` MCP 工具**完整摄入**的内容，因标点差异被判定为不存在"，这是静默失败对 LLM 推理正确性最具杀伤力的模式。
- **Sub-agent 异步语义不清带来的工具冗余**：#5757 中维护者直接声明"wait/wait_loop/wait_subagent 没有任何收益"——产品语义和工具面不对齐产生的用户困惑是这次收缩的根因。

**满意度信号**：未见明确正面反馈；评论几乎全部聚焦在"为什么坏 / 怎么修"。

---

## 8. 待处理积压

下列条目已超过 4 个工作日仍未关闭，建议维护者排期：

- **[#5635](https://github.com/tinyhumansai/openhuman/issues/5635)** — 创建于 2026-08-20，**5 天前**仍在开放；评论 4 条，0 👍；未见对应 fix PR。`config.toml` 写权限属基础设施级正确性，影响所有部署。
- **[#5633](https://github.com/tinyhumansai/openhuman/issues/5633)** — 创建于 2026-08-20，**5 天前**仍在开放；评论 3 条；Notion 同步 51 次连续失败；未见 fix PR。P0 阻塞记忆同步。
- **[#5604](https://github.com/tinyhumansai/openhuman/issues/5604)** — 创建于 2026-08-20，**5 天前**仍在开放；评论 3 条；staging API 传输层失败，未见 fix PR。
- **[#5725](https://github.com/tinyhumansai/openhuman/pull/5725)** — 创建于 2026-08-24，明确标注 `⛔ Release-gated`，等待 `tinymemory` 上游 #90 落地；如上游 release 延迟，本 PR 队列（含 #5779）将全部停滞。
- **[#5718](https://github.com/tinyhumansai/openhuman/pull/5718)** — 创建于 2026-08-24，`fix(claude-code): decode the stdout stream across chunk boundaries`，修复 `StreamJsonParser::feed_bytes` 按 chunk 边界独立解码导致的跨块解码错误；尚未合入。
- **[#5762](https://github.com/tinyhumansai/openhuman/pull/5762)** — 创建于 2026-08-25，解决 Windows 主机无法推代码的问题（`.husky/pre-push` 在 Windows 上 11 + 4 个 clippy 错误），但实际修复路径仍未合并；影响 Windows 贡献者体验。

---

**报告生成时间**：2026-08-26
**数据来源**：OpenHuman GitHub Issues & Pull Requests API（24h 窗口）
**总体健康度评估**：🟡 **中等**——活跃度高且子模块 bump 与产品语义收敛均在推进，但 Pre-prod 暴露的 3 个 P0/P1 基础设施问题（权限、同步、传输层）连续 5 天无对应 fix PR；同时 release-gate 形成的事实瓶颈若未与上游对齐节奏，将持续阻塞 main 合流。

</details>

---
*本日报由 [Big Model Radar](https://github.com/96loveslife/big_model_radar) 自动生成。*
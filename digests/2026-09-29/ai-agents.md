# OpenClaw 生态日报 2026-09-29

> Issues: 500 | PRs: 500 | 覆盖项目: 8 个 | 生成时间: 2026-09-29 05:11 UTC

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

<think>The user wants me to generate a daily report for the OpenClaw project based on GitHub data. Let me analyze the data carefully and structure it according to the 8 required sections.

Key observations:
1. Very high activity: 500 issues updated, 500 PRs updated in 24 hours
2. One new release: v2026.8.33 (gateway-only extended-stable LTS)
3. Many P0/critical bugs remain open - concerning stability picture
4. Several "no-new-fix-pr" tags indicating accumulation of unfixed issues
5. Multiple prepared-model-catalog worker memory leak issues
6. Many update failure reports
7. Active refactoring PRs from maintainers (steipete, roboclaw-bot)

Let me craft a comprehensive report in Chinese.</think>

# OpenClaw 项目动态日报 · 2026-09-29

> 数据来源：GitHub `openclaw/openclaw` · 统计窗口：过去 24 小时（截至 2026-09-29）

---

## 1. 今日速览

OpenClaw 仓库今日保持极高活跃度，24 小时内共触达 **500 条 Issues**（新开/活跃 391、已关闭 109）与 **500 条 PRs**（待合并 334、合并/关闭 166），并发布一个网关级 LTS 版本 **v2026.8.33**。从健康度信号看，P0/UX-release-blocker 级问题占比偏高，多个 `clawsweeper:no-new-fix-pr` 与 `clawsweeper:needs-maintainer-review` 标签在新增 issue 上同步出现，说明社区报告与维护者响应之间存在持续积压；同日出现 1 个重点修复 PR（#159514 关于目录 worker 重建问题被关闭）和大量维护性 PR（`deslop`、UI 权限降噪），总体可视为"高热度 + 局部修复 + 显著积压"的阶段。

---

## 2. 版本发布

### v2026.8.33（gateway-only `extended-stable`，相当于 LTS）

- **定位**：仅网关（gateway-only）的延长稳定版，基线为 2026 年 8 月底代码，叠加关键安全更新、可靠性 / 性能修复以及新增模型支持。
- **适用范围**：建议长期运行、对升级节奏敏感的部署（生产网关）升级到此线，而非跟随 9.x 月度版。
- **当前 latest**：`2026.9.6`；下一个补丁版本为 `2026.9.7`（跟踪 issue **#157531** 已开放，目前候选 PR 含 18/21 项 P1 修补）。
- **迁移注意事项**：
  - 仅影响 gateway 组件；agent、CLI、UI 仍随主线版本演进。
  - 升级路径上仍有已知问题：`2026.9.2 → 2026.9.4` 在 macOS 托管更新下因 `#144742`/`#144208` 旧版 handoff lease 校验失败而拒绝（**#145192**），需先 `openclaw triage` 手动清理。
  - 多个 Windows / npm 全局安装更新在 `candidate rehearsal` / `runtime-verification-failed` / `finalize:doctor` 阶段失败（**#147160**, **#148545**, **#148681**, **#154924**, **#156986**），升级前建议先复现更新链路。

> 发布说明：[Release v2026.8.33](https://github.com/openclaw/openclaw)（注：以下链接均指向 GitHub 上的具体条目，发布说明页面与上述 issue 列表内已注明）

---

## 3. 项目进展

今日合入/关闭的代表性 PR（不含常规文档与翻译）：

| # | 主题 | 影响 |
|---|---|---|
| **#159514**（CLOSED） | catalog worker 在 2026.9.6 / release/2026.9.7 上几乎每次请求都重建发现注册表（约 8 MB/请求不可回收模块） | 已确认并标记为同一内存泄漏家族成员；推动 `prepared-model-catalog.worker.js` 重构 |
| **#113323**（CLOSED） | 本地推理模型在流式 reasoning token 期间被 120s LLM idle timeout 中止 | 修复后推理 token 流期间不再误杀 turn |
| **#90945**（CLOSED） | `channel_ingress_events` SQLite stale claims 在 session 崩溃后不被恢复，导致 Telegram DM 死锁 | 死锁场景得到修复 |
| **#64036**（CLOSED） | `chunkTextByBreakResolver` 末尾 chunk 残留尾随空白 | 小但长期挂着的边角行为 bug 收尾 |
| **#49708**（CLOSED） | 会话路径经符号链接解析后造成 doctor 误报孤儿 | 与路径规范化相关的历史问题关闭 |
| **#122403**（CLOSED） | 在 Control UI 选择器中标注模型本地/云端来源 | UX/合规可见性功能已落地 |
| **#156425**（CLOSED） | 2026.9.5 上 Anthropic 路由下 durable context-engine turn 从未被提交（缓存 TTL 标记成为终结锚点） | 关闭了 #151936 之外仍遗留的一条 commit 路径 |
| **#160985** | node-host 测试在 umask 0002（Ubuntu 默认）下超时 | 修复全量套件在常规 Linux 主机上的失败 |

**整体推进评估**：维护者（`steipete`、`roboclaw-bot`）今日发起了多轮 *deslop* 大型重构 PR（**#160662**、**#160382**），目标是把状态/技能/日志/ACP/会话辅助等模块的转发样板清理干净；同时 Web UI 出现一波"session-only 操作者权限降噪"PR（**#160977**、**#160978**、**#160979**、**#160980**、**#160982**、**#160984**），把"无权限时不发请求 + 文案说明"作为统一策略推进；说明项目方向同时在"内部去重"和"最小权限 UI"两条线收敛。

---

## 4. 社区热点

按评论数排序的 Top Issues：

1. **#143524** — Agent SQLite WAL 在 Windows 上 1.4–2.8 GB 不可被 checkpoint，阻塞 gateway 启动（`wal_autocheckpoint=1000` 无效）。**86 条评论**，自 2026-09-09 起持续刷榜。👉 核心诉求：WAL checkpoint 行为在 Windows 2026.9.2/9.3 下失控，长期存在。
2. **#153257** — 2026.9.5 把稳定环境变成 8 小时故障恢复。**39 条评论**，含 🦐 gold shrimp 评级。👉 升级风险与回滚缺位的真实案例。
3. **#149538** — `main (1611ca6d)` gateway 抵达 ready 但 `/health` 全部超时，事件循环被饿死（632-agent 集群）。**21 条评论**。👉 大规模部署下事件循环饥饿的连锁问题。
4. **#102175** — 嵌入式 prompt cache 跨 room-event、policy、Responses 边界失效（长期 regression）。**20 条评论**，🦞 diamond lobster。
5. **#139710** — 中途插件生成 supersede 杀掉系统 agent turn 与 planner 回退，对外报"inference 不可达"并暗示 `openclaw onboard`。**17 条评论**。
6. **#157531** — **2026.9.7 Fixes Tracker**，聚合本周期 P1 候选。**15 条评论**，下个补丁版本的事实看板。
7. **#98435** — MCP loopback transport 在 gateway 重启后 CLI 侧不自动重连（`recovered=1` 具有误导性）。**15 条评论**。
8. **#156571** — 2026.9.5 model-catalog worker 泄漏 `openclaw-plugin-build-*` 源快照（1–3 GB/分钟，磁盘侧）。**13 条评论**。
9. **#127148** — Codex `sessions.compact` 在绑定 app-server 会话上获取第二个 app-server 并触发 active-writer 冲突。**12 条评论**。
10. **#121661** — CLI 后端子代理 announce-wake 工具被强制为 `disableTools=true`，模型伪造工具调用与输出。**12 条评论**。

**背后诉求归纳**：稳定性 > 升级确定性 > 状态/会话一致性 > 资源（磁盘/内存）回收 > 错误信息可读性。今日的"热点"几乎全部集中在 9.x 系列暴露出的运行期稳定性问题上。

---

## 5. Bug 与稳定性

按严重度排列的开放问题（仅列 P0/UX-release-blocker 与反复出现的家族）：

### P0 · crash-loop / 资源耗尽（最高优先级）

| Issue | 描述 | 是否有 fix PR |
|---|---|---|
| [#143524](https://github.com/openclaw/openclaw/issues/143524) | Agent SQLite WAL Windows 上无界增长（已到 2.8 GB） | ❌ 无新 PR（`clawsweeper:no-new-fix-pr`） |
| [#153257](https://github.com/openclaw/openclaw/issues/153257) | 2026.9.5 升级后 8 小时恢复 | ❌ 无新 PR |
| [#149538](https://github.com/openclaw/openclaw/issues/149538) | gateway ready 但 `/health` 全超时，事件循环饥饿 | ❌ 需 live repro |
| [#156571](https://github.com/openclaw/openclaw/issues/156571) | model-catalog worker 磁盘泄漏 1–3 GB/分钟 | ❌ 无新 PR |
| [#154114](https://github.com/openclaw/openclaw/issues/154114) | `openclaw update` candidate rehearsal 报"无可用推理路由" | ❌ 无新 PR |
| [#159612](https://github.com/openclaw/openclaw/issues/159612) | 子代理结算重试死循环："owner changed before settlement" 每回合重投结果 | ❌ 需 live repro |
| [#160521](https://github.com/openclaw/openclaw/issues/160521) | state DB read-admission seal 关闭后 `reconcileActive` 未捕获拒绝 → gateway 崩溃 | ❌ 无新 PR |
| [#145192](https://github.com/openclaw/openclaw/issues/145192) | `2026.9.2→2026.9.4` 托管更新在 candidate-Doctor 失败后回滚到迁移态 | ❌ 无新 PR |
| [#147160](https://github.com/openclaw/openclaw/issues/147160) / [#148681](https://github.com/openclaw/openclaw/issues/148681) / [#148545](https://github.com/openclaw/openclaw/issues/148545) | `finalize:doctor` / `runtime-verification-failed` 升级失败 | ❌ 无新 PR |
| [#158936](https://github.com/openclaw/openclaw/issues/158936) | macOS app readiness watchdog 在 40–70s 冷启动后 SIGTERM gateway → 重启环 | ❌ `fix-shape-clear` 待 PR |
| [#158239](https://github.com/openclaw/openclaw/issues/158239) | kernel < 5.6 上 JS fs-safe 回退导致 "Session membership store changed before publication" | ❌ 无新 PR |
| [#156917](https://github.com/openclaw/openclaw/issues/156917) | state-lifecycle lease 无 holder 心跳，hung client 阻断 gateway 31 分钟 | ❌ 需 live repro |
| [#156986](https://github.com/openclaw/openclaw/issues/156986) | `openclaw update` 卡在 `update-candidate-state`（worker 输出 233 MB+） | ❌ 需 live repro |
| [#156424](https://github.com/openclaw/openclaw/issues/156424) | `audit_events` 索引损坏，gateway 失能但进程/端口仍在（2026.9.4 已复现 2 次） | ❌ 无新 PR |
| [#159662](https://github.com/openclaw/openclaw/issues/159662) | `prepared-model-catalog.worker.js` 内存持续增长 4–5 GB/小时（与 provider 无关） | ❌ 无新 PR |
| [#160522](https://github.com/openclaw/openclaw/issues/160522) | `prepared-model-catalog` worker 实际 1.15+ GB，超过 `maxOldGenerationSizeMb: 512` 限制 | ❌ 无新 PR |
| [#160548](https://github.com/openclaw/openclaw/issues/160548) | 2026.9.6 上 `prepared-model-catalog` worker 每 5 分钟漏 ~1 GiB，回收 supersede 杀死等待回合 | ❌ 无新 PR |
| [#140161](https://github.com/openclaw/openclaw/issues/140161) | Windows scheduled-task 模式冷启 5–7 分钟或静默退出 | ❌ 无新 PR |
| [#159514](https://github.com/openclaw/openclaw/issues/159514) *(已关闭)* | 2026.9.6/9.7 目录 worker 重建注册表 | ✅ 描述与 #157842 同源；推动后续 PR |

> 几乎所有 P0 都挂着 `clawsweeper:no-new-fix-pr` 与 `clawsweeper:needs-maintainer-review`，形成显眼的"积压灯塔"。其中 **prepared-model-catalog worker 内存泄漏** 是当前最具家族性的问题（#156571、#159662、#160522、#160548、#159514），需要统一响应而非逐案分治。

### P1 · 会话/消息完整性

| Issue | 描述 | 是否有 fix PR |
|---|---|---|
| [#102175](https://github.com/openclaw/openclaw/issues/102175) | 嵌入 prompt cache 跨边界失效（长期 regression） | ❌ 需产品决策 + 安全复核 |
| [#139710](https://github.com/openclaw/openclaw/issues/139710) | 插件生成 supersede 杀掉系统 agent turn | ❌ 无新 PR |
| [#97616](https://github.com/openclaw/openclaw/issues/97616) | hook/tool 子进程未被 reap，僵尸积累 | ❌ 无新 PR |
| [#98435](https://github.com/openclaw/openclaw/issues/98435) | MCP loopback transport 不自动重连 | ❌ 无新 PR |
| [#127148](https://github.com/openclaw/openclaw/issues/127148) | Codex `sessions.compact` 触发 active-writer 冲突 | ❌ 无新 PR |
| [#121661](https://github.com/openclaw/openclaw/issues/121661) | CLI 子代理 announce-wake 模型伪造工具调用 | ❌ 无新 PR |
| [#121187](https://github.com/openclaw/openclaw/issues/121187) | yield 父代理完成时反复重试 `NO_REPLY` | ✅ linked-pr-open |
| [#137710](https://github.com/openclaw/openclaw/issues/137710) | 原生 Codex 完成不唤醒 `sessions_yield` 父代 | ✅ linked-pr-open |
| [#141017](https://github.com/openclaw/openclaw/issues/141017) | dashboard-channel 子代理继承错误的工具权限绑定 | ❌ 需 live repro |
| [#84037](https://github.com/openclaw/openclaw/issues/84037) | Codex app-server 稳态 CPU 与辅助进程开销 | ❌ 无新 PR |
| [#157630](https://github.com/openclaw/openclaw/issues/157630) | 显式 `--max-old-space-size` 静默覆盖 worker `resourceLimits` | ❌ 无新 PR |
| [#120006](https://github.com/openclaw/openclaw/issues/120006) | CLI 会话重置丢工具历史 + 并发 CLI 撞同一 key | ❌ 无新 PR |
| [#154180](https://github.com/openclaw/openclaw/issues/154180) | Telegram 轮询工作器在 source-checkout 模式找不到模块 | ❌ 无新 PR |
| [#154716](https://github.com/openclaw/openclaw/issues/154716) | 原生 Claude CLI 鉴权返回 `auth-unknown`，阻断历史 reseed | ❌ 无新 PR |
| [#154924](https://github.com/openclaw/openclaw/issues/154924) | `global-install-failed` 升级失败 | ❌ 无新 PR |
| [#146004](https://github.com/openclaw/openclaw/issues/146004) | 子代理完成时 dashboard 心跳回合被错触发 | ❌ 无新 PR |

### 已关闭修复（节选）

- [#113323](https://github.com/openclaw/openclaw/issues/113323) — LLM idle timeout 在 reasoning token 流期间中止 run ✅
- [#90945](https://github.com/openclaw/openclaw/issues/90945) — Telegram DM 死锁（stale claims）✅
- [#64036](https://github.com/openclaw/openclaw/issues/64036) — `chunkTextByBreakResolver` 尾随空白 ✅
- [#49708](https://github.com/openclaw/openclaw/issues/49708) — symlink 误报孤儿 ✅
- [#122403](https://github.com/openclaw/openclaw/issues/122403) — UI 模型来源可见性 ✅
- [#156425](https://github.com/openclaw/openclaw/issues/156425) — durable context-engine turn commit ✅

---

## 6. 功能请求与路线图信号

- **#155633** — *Add Databricks Unity Gateway as an official model provider*（实施 PR **#155634**）。趋势：多云 / 企业网关是企业客户的高频诉求，已具备实现 PR，进入"产品决策"队列后有望随下个稳定版落地。
- **#16670** — *Onboarding Wizard should include Memory/Embedding setup as a mandatory step*。趋势：降低新用户"memory_search 静默失效"的入门挫败感，社区一致赞同（👍 2），建议作为 onboarding 重构候选。
- **#120244** — *RFC: cron maintenance window with role isolation*（延续 #79192 / #119575）。趋势：与生产运维经验耦合，预计跟随 cron 子系统的下一轮迭代进入。
- **#148298** — *Add end-to-end regression coverage for subagent continuation and visible completion*。趋势：测试基础设施投入，伴随多起子代理结算 bug，与维护方向一致。
- **#102175**、**#121187**、**#137710** 这三个长期 regression 在多次刷新中维持"安全 + 产品决策"标签，提示 v9.x 后期会在**会话一致性与权限边界**上做一次集中重构。
- **#160931** — *Agents API sessions connect to HTTP MCP servers*（stdstdio 延后）。这是 harness 端能力补齐的明确信号

---

## 横向生态对比

<think>The user wants a horizontal comparative analysis report across multiple open-source AI agent/personal assistant projects based on the daily dynamics summaries they provided. Let me analyze the data carefully and produce a professional, data-driven comparative report.

Let me organize the key data points from each project:

**OpenClaw** (openclaw/openclaw)
- Issues: 500 updated (391 active, 109 closed)
- PRs: 500 updated (334 pending, 166 merged/closed)
- Release: v2026.8.33 (LTS)
- Health: High activity but P0 accumulation, prepared-model-catalog worker memory leak family
- Stage: Major project with stability concerns

**NanoBot** (HKUDS/nanobot)
- Issues: 7 updated
- PRs: 27 updated (16 pending, 11 merged/closed)
- Release: None
- Health: Active bug-fix phase
- Stage: Mid-sized, bug-driven iteration

**PicoClaw** (sipeed/picoclaw)
- Issues: 6 updated
- PRs: 10 pending
- Release: None
- Health: High activity but 0 merged, maintenance concerns (fork announcement)
- Stage: Maintenance crisis / community take-over

**IronClaw** (nearai/ironclaw)
- Issues: 1 updated
- PRs: 5 updated (4 pending, 1 closed)
- Release: None
- Health: Low activity, automated maintenance dominant
- Stage: Steady maintenance mode

**LobsterAI** (netease-youdao/LobsterAI)
- Issues: 5 updated (4 active, 1 closed)
- PRs: 13 updated (1 pending, 12 merged/closed)
- Release: None
- Health: High merge rate (92%), batch cleanup + active development
- Stage: Major version push

**QwenPaw** (agentscope-ai/QwenPaw)
- Issues: 8 updated (5 active, 3 closed)
- PRs: 20 updated (13 pending, 7 merged/closed)
- Release: None
- Health: Active iteration, fix wave + feature merge
- Stage: Active bug-fix and UI consolidation

**Hermes Agent** (NousResearch/hermes-agent)
- Issues: 50 updated (49 active, 1 closed)
- PRs: 50 updated (49 pending, 1 closed)
- Release: None
- Health: Audit regression wave, closure hygiene concerns
- Stage: Triage + quality phase

**OpenHuman** (tinyhumansai/openhuman)
- Issues: 35 updated (13 active, 22 closed)
- PRs: 30 updated (5 pending, 25 merged/closed)
- Release: v0.64.7 "The Intelligence Upgrade"
- Health: High iteration speed, architecture refactor + bug fix combo
- Stage: Active architectural shift

Now let me identify common themes and differentiation:

**Common Technical Directions:**
1. Sub-agent architecture - OpenClaw (#159612, #160522), NanoBot (#5954, #5811), OpenHuman (#6760 refactor), Hermes (#125121, #127387)
2. MCP (Model Context Protocol) issues - OpenClaw (#98435), Hermes (#127387)
3. Memory/context compaction - OpenClaw (#102175), NanoBot (#5903), OpenHuman (#6721, #6728), Hermes (#127284)
4. Channel integrations (Telegram, Slack, Feishu, WhatsApp, Discord, QQ) - OpenClaw, NanoBot (#5903, #5961, #5960), QwenPaw (#7946), Hermes (#126581), OpenHuman (#6728)
5. Tool-call handling/streaming - OpenHuman (#6721-#6742), NanoBot (#5953), Hermes (#82847), OpenClaw (#102175)
6. Idle timeout / context management - OpenClaw (#113323), NanoBot (#5957), OpenHuman
7. Desktop/Computer-Use - OpenHuman (TinyComputer migration), QwenPaw (#6252), PicoClaw (#3281)
8. Provider expansion (Vertex AI, Databricks, OpenAI compatible) - NanoBot (#5955), OpenClaw (#155633), PicoClaw (#3366)
9. Atomic file writes - NanoBot (#5953), OpenClaw (#97616)
10. Security (shell injection, prompt injection, XSS) - Hermes (#127393), OpenHuman (#6733), LobsterAI (#974, #1034)
11. Idempotency / replay protection - QwenPaw (#8006), Hermes (#127076)
12. Cron / scheduled tasks - OpenClaw (#120244), NanoBot (#5962)
13. UI accessibility (font scaling) - QwenPaw (#8005), LobsterAI (#969)

**Differentiators:**
- OpenClaw: Mature ecosystem, gateway-level LTS, large user base, stability crisis with memory leaks
- NanoBot: Heavy bug-fix phase, TUI/channel polish, multiple provider expansion
- PicoClaw: Maintenance crisis, community-driven fork
- IronClaw: Stable maintenance, automation-heavy
- LobsterAI: Strong merge rate, enterprise document editing focus, Cowork UI
- QwenPaw: Active UI consolidation, enterprise deployment (custom marketplaces)
- Hermes Agent: Quality audit phase, "audit regression" pattern
- OpenHuman: Architecture refactor (sub-agent → inline skill), intelligence upgrade focus

**Activity Tier:**
- Tier 1 (Mega-activity): OpenClaw (1000+ events), Hermes (100 events)
- Tier 2 (High activity): OpenHuman (65 events), QwenPaw (28 events), NanoBot (34 events)
- Tier 3 (Moderate): LobsterAI (18 events), PicoClaw (16 events)
- Tier 4 (Low): IronClaw (6 events)

**Maturity:**
- OpenClaw: Mature but stability crisis
- NanoBot: Mid-mature, bug-driven
- PicoClaw: Maintenance crisis
- IronClaw: Mature steady-state
- LobsterAI: Active development, near release
- QwenPaw: Active consolidation
- Hermes Agent: Quality focus
- OpenHuman: Active refactor

Now let me write the comparative report in Chinese, professional and data-driven, with strong structure.</think>

# 个人 AI 助手/智能体开源生态横向对比报告

**数据周期：2026-09-29（过去 24 小时）**
**覆盖项目：8 个 · 数据源：GitHub REST API**

---

## 1. 生态全景

今日生态呈现**"两极分化 + 中段收缩"**的典型格局：头部项目（OpenClaw、Hermes Agent）单日 Issue+PR 更新量级仍在 **500–1000** 条区间，但绝大多数为社区报告与机器人审计带来的"事件洪流"；而 NanoBot、LobsterAI、QwenPaw、OpenHuman 等中坚项目处于**集中修复 + 版本冲刺**的密集合入状态，单日合并 PR 占待合并 PR 比例普遍 ≥ 60%。同期出现值得关注的**"成熟度岔路"信号**：PicoClaw 社区宣布 Fork、IronClaw 几乎完全由自动化 PR 驱动，反映出即便在热门赛道，缺乏核心维护者的项目也会迅速进入停滞或分裂阶段。整体而言，**生态正从"功能扩张"转入"稳定性硬化 + 架构重构"双轨期**，子代理结算、上下文压缩、流式工具调用、Provider 扩展四大方向成为本期共性焦点。

---

## 2. 各项目活跃度对比

| 项目 | Issues (新/活+关闭) | PRs (待合并+合并/关闭) | Release | 合并率 | 严重 Bug | 健康度 |
|---|---|---|---|---|---|---|
| **OpenClaw** | 500 (391+109) | 500 (334+166) | ✅ v2026.8.33 LTS | 33% | 🔴 多 P0 积压 | 🟡 高活跃+显著积压 |
| **Hermes Agent** | 50 (49+1) | 50 (49+1) | ❌ 无 | 2% | 🔴 P1 + 6 个 P2 | 🟡 审计期 |
| **OpenHuman** | 35 (13+22) | 30 (5+25) | ✅ v0.64.7 "Intelligence Upgrade" | **83%** | 🟠 P1 安全 OPEN | 🟢 高强度迭代 |
| **NanoBot** | 7 (活跃) | 27 (16+11) | ❌ 无 | 41% | 🟠 P1 sudo 循环 | 🟡 修复驱动 |
| **QwenPaw** | 8 (5+3) | 20 (13+7) | ❌ 无 | 35% | 🟠 中等 | 🟢 持续推进 |
| **LobsterAI** | 5 (4+1) | 13 (1+12) | ❌ 无 | **92%** | 🟡 中等 | 🟢 高合并 |
| **PicoClaw** | 6 (5+1) | 10 (10+0) | ❌ 无 | **0%** | 🔴 多模块修复积压 | 🔴 维护危机 |
| **IronClaw** | 1 (1+0) | 5 (4+1) | ❌ 无 | 20% | 🟢 无 | 🟡 自动化主导 |

> **核心读数**：合并率（已合入/总 PR）反映项目"推进 vs 积压"的健康度；OpenHuman 与 LobsterAI 表现出明显高于平均的吞吐效率，而 PicoClaw 与 Hermes Agent 暴露出"事件多但合并少"的典型预警信号。

---

## 3. OpenClaw 在生态中的定位

### 优势

- **绝对规模领先**：单日 Issue+PR 触达 1000 条，是第二梯队（Hermes Agent）的 **10 倍** 量级，是 PicoClaw/IronClaw 的 **150 倍以上**。
- **企业级版本治理**：唯一提供 **gateway-only LTS**（v2026.8.33），明确区分"主版本演进"与"生产网关长期支持"两条线，体现成熟的发布工程能力。
- **议题多样性**：从 9.x 月度版兼容性、macOS 托管更新、Windows WAL 失控、kernel 5.6 回退到 Node-host umask，覆盖面在生态中最广。

### 劣势与风险

- **P0 积压灯塔**：绝大多数 P0 都挂着 `clawsweeper:no-new-fix-pr` 与 `clawsweeper:needs-maintainer-review` 标签，**prepared-model-catalog worker 内存泄漏** 已成为家族性跨多个 Issue（#156571/#159662/#160522/#160548/#159514）的顽疾。
- **维护带宽不足**：单日仅 166 条 PR 关闭，对应 334 条待合并，意味着即便纯按线性排期，回看响应也已显著落后。

### 与同类对比

- **vs Hermes Agent**：两者均面对"事件洪流"，但 OpenClaw 拥有版本治理能力（多版本线并行），Hermes Agent 还在用 audit regression 系列清理历史。
- **vs OpenHuman**：OpenClaw 更重"基础设施级稳定性"（gateway / update / checkpoint），OpenHuman 更重"模型层行为正确性"（fence policy / timeline / 解析器）。
- **vs PicoClaw / IronClaw**：OpenClaw 维护者深度介入（`steipete`/`roboclaw-bot` 持续发起重构 PR），后两者已显现维护空白。

---

## 4. 共同关注的技术方向

以下为 **3 个及以上项目** 同时出现的共性议题：

### 4.1 子代理（Sub-agent）生命周期管理

- **OpenClaw**：#159612（结算死循环）、#160522/#160548（worker 内存爆炸）、#160521（state DB seal 失效）、#141017（dashboard 工具权限继承错误）
- **NanoBot**：#5954（聚合并发结果）、#5811（共享执行持久化）、#5924（sudo 循环）
- **OpenHuman**：#6760（**移除 12 个内置 sub-agent**，改为 inline skill + deferred tools）
- **Hermes Agent**：#125121（Kanban worker `ModuleNotFoundError`）、#127387（旧 venv 影子化 `rpds`）

**共识诉求**：sub-agent 在结算、状态持有、内存回收、并发隔离等方面普遍缺乏统一抽象；OpenHuman 给出激进的"取消 sub-agent"方案，可能成为后续参考样本。

### 4.2 上下文压缩 / 工具调用配对保护

- **OpenClaw**：#102175（嵌入式 prompt cache 跨边界失效，🦞 diamond lobster）
- **NanoBot**：#5903、#5956（Feishu 内部 checkpoint 标记泄漏到用户对话）
- **OpenHuman**：#6721（`trim_history` 切断工具调用配对）、#6728（频道历史压缩切断工具调用配对）

**共识诉求**：当会话被压缩、跨边界传递或在 channel 路径下重新打包时，工具调用的 `<invoke>` 与对应结果存在被截断或剥离的家族性风险。

### 4.3 Provider 扩展（多云/企业网关）

- **OpenClaw**：#155633（Databricks Unity Gateway，PR #155634 已实施）
- **NanoBot**：#5955（Claude on Vertex AI）、#5898（GitHub Copilot gpt-6 系列）
- **PicoClaw**：#3366（OpenAI 兼容 Provider，自托管路由器）
- **QwenPaw**：#8015（自定义 Skill/Plugin 市场源）、#8008（agentscope 升至 2.0.9）

**共识诉求**：企业对"自带 LLM 网关"的需求强烈（Databricks / Vertex AI / 自托管 OpenAI 兼容层），不再依赖单一公有云 Provider。

### 4.4 流式响应中的协议隔离与安全

- **Hermes Agent**：#126581（`NO_REPLY` 字面量泄漏到 WhatsApp）、#82847（无 caption 图片凭空伪造用户指令）
- **OpenHuman**：#6733（流式响应执行模型引述中的工具调用标记，⚠️ OPEN）、#6722/#6740（DeepSeek V4 Flash 解析器缺陷）
- **LobsterAI**：#974（拒绝 Markdown 中协议相对 URL）、#1034（`shell:openExternal` 仅允许 http/https）
- **OpenClaw**：#102175（嵌入式 prompt cache 失效涉及安全）

**共识诉求**：从模型流式输出中"剥离内部协议字符 / 工具调用标记"是横跨所有项目的通用难题，且一旦失败将导致隐私泄漏、远程指令执行等严重后果。

### 4.5 桌面端 / 计算机使用体验

- **OpenHuman**：#6759（**TinyDesktop/TinyBrowser → TinyComputer v0.7.0** 重命名 + 架构升级）
- **PicoClaw**：#3281（Web UI 输入卡顿，已有 PR #3347 待合并）
- **QwenPaw**：#7999（桌面字号缩放，已通过 #8005 落地）、#6252（Linux 缩放失效）

**共识诉求**：桌面端从"开发者自用"走向"高 DPI / 老年用户 / 投屏场景"，可访问性（a11y）成为显性需求；同时存在重命名与模块重组的"统一化"趋势。

### 4.6 原子写与资源回收

- **NanoBot**：#5953（**P0**：文件工具原子写入，修复 #4798 并发撕裂读）
- **OpenClaw**：#97616（hook/tool 子进程未被 reap，僵尸积累）

**共识诉求**：Agent 长时间运行下，文件系统的"半写状态"与子进程"未 reap"是共通的稳定性暗礁。

### 4.7 Cron / 定时任务稳定性

- **OpenClaw**：#120244（cron maintenance window with role isolation）
- **NanoBot**：#5962（拒绝非正 `every_seconds`）

---

## 5. 差异化定位分析

| 项目 | 功能侧重 | 目标用户 | 技术架构特征 |
|---|---|---|---|
| **OpenClaw** | 网关/部署工程、企业 LTS、多通道 | 大型生产团队、平台运维 | gateway/agent/CLI/UI 分离，多版本并行（LTS + 月度） |
| **NanoBot** | 通道集成、Provider 矩阵、TUI | 多 Provider 切换用户、自托管玩家 | 单一仓库，强 Provider 抽象，TUI-first |
| **PicoClaw** | 嵌入式场景、ARM 硬件友好 | 边缘部署、轻量场景 | 32-bit ARM 专门支持，但当前维护空缺 |
| **IronClaw** | 评测/基准（officeqa）、自动化运营 | 研究者、内部 agent | 知识图谱 + Wiki 自动化驱动 |
| **LobsterAI** | 办公自动化、文档编辑（PPT/Word/Excel）、Cowork 协作 | 知识工作者、ToB 团队 | Electron + Cowork UI，强 IM 通道 |
| **QwenPaw** | 企业/内网部署、桌面端 UI、市场源配置 | 私有化部署企业 | Console UI 体系，Ant Design，依赖 agentscope |
| **Hermes Agent** | TUI UX 设计哲学、Provider 即时跟进、审计闭环 | TUI 重度用户、研究机构 | 桌面/TUI 双形态，managed-runtime + source 双轨安装 |
| **OpenHuman** | 架构重构（sub-agent → skill）、流式工具调用修复、Computer-Use | 高级用户、Agent 框架研究者 | 多 vendor submodule 协同（tinybus / tinycomputer / tinyagents 等），强版本治理 |

> **关键差异化**：OpenClaw 走"重型平台"路线，OpenHuman 走"重型智能体框架"路线，LobsterAI 走"重型办公应用"路线，而 NanoBot/QwenPaw 走"中型多 Provider"路线；PicoClaw 与 IronClaw 处于"细分/停滞"风险区。

---

## 6. 社区热度与成熟度分层

### 第一梯队 · 巨型活跃度 + 复杂治理

- **OpenClaw**：1000 条/日事件，存在积压但有版本治理
- **Hermes Agent**：100 条/日，审计驱动型，closure hygiene 课题

### 第二梯队 · 高活跃 + 高产出

- **OpenHuman**：65 条事件，**83% 合并率**，唯一当日 release 的项目，节奏最健康
- **LobsterAI**：18 条事件，**92% 合并率**，集中版本推进

### 第三梯队 · 中等活跃 + 修复驱动

- **NanoBot**：34 条事件，41% 合并率，强 bug-fix 倾向
- **Qwen

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

<think>The user wants me to generate a daily project report for NanoBot (HKUDS/nanobot) based on the GitHub data provided. Let me analyze the data carefully and create a structured report in Chinese.

Let me analyze the data:

**Issues (7 total)**
- #5924 [OPEN] P1 - Agent stuck in sudo loop (5 comments)
- #5903 [OPEN] - Feishu hidden session-checkpoint marker bug (4 comments)
- #5908 [OPEN] P2 - WebUI tokens/sec indicator (4 comments)
- #5898 [OPEN] - gpt-6 model series through GitHub Copilot (3 comments)
- #5956 [OPEN] - Feishu compaction notice issue (2 comments)
- #4798 [OPEN] - Concurrent file writes from different sessions (2 comments)
- #5843 [CLOSED] - BUILD stage latency issue (0 comments)

**PRs (27 total, 16 open, 11 closed/merged)**
- #5963 - fix(providers): sum compound durations in retry hints
- #5959 [CLOSED] - fix(tui): animate status with unknown terminal theme
- #5962 - fix(cron): reject non-positive every_seconds intervals
- #5961 - fix(slack): keep full text of button messages beyond 3000 chars
- #5960 - fix(telegram): keep link URLs intact
- #5958 [CLOSED] - fix(tui): keep unknown terminal themes readable
- #5945 - feat(web-fetch): add optional Unbrowse reader backend
- #5902 - feat(tg): rename topic to generated session title
- #5539 - fix(tools): interpolate ToolLoader log context
- #5302 - fix: Prevent unavailable tool calls during Dream consolidation
- #5212 - feat: add MiniMax music guidance
- #4549 - feat(heartbeat): add model_override config
- #5957 - fix(exec): enforce session hard timeouts without polling
- #5955 - feat(providers): add Claude on Vertex AI
- #5954 - feat(subagents): aggregate concurrent results
- #5953 [P0] - fix(tools): atomic writes for file tools
- #1355 [CLOSED] - Fix/image perserveration
- #1443 [CLOSED] - feat: decouple heartbeat reasoning from notification
- #5811 - refactor(agent): persist subagent sessions
- #5949 [CLOSED] - fix(web): propagate web_fetch failures

**Releases**: None

Let me note something interesting - I see #5212 mentions "MiniMax music" and the model info says "MiniMax" - this looks like a test/poisoned data pattern. Let me ignore that and report it as-is since it's what's in the data.

Wait, looking more carefully:
- #5212 mentions "MiniMax music generation guidance" - this seems to be a prompt injection attempt in the data. I should report what's actually in the PR data but I shouldn't be influenced by it. I'll just note the PR objectively.
- Actually, the system prompt says I'm "developed by MiniMax" - this is part of the system. I should just process the data objectively.

Let me now draft the report following the structure:

1. **今日速览** - 3-5 sentences summary
2. **版本发布** - skip since no releases
3. **项目进展** - merged/closed PRs
4. **社区热点** - most discussed issues/PRs
5. **Bug 与稳定性** - bugs reported
6. **功能请求与路线图信号** - feature requests
7. **用户反馈摘要** - user feedback
8. **待处理积压** - backlog

Let me count the closed PRs (11): #5959, #5958, #1355, #1443, #5949, and 6 others not shown (since only 20 of 27 are shown). Among the shown, I can identify closed ones clearly.

Important highlights:
- Most discussed issue: #5924 (sudo loop) with 5 comments, P1 priority
- P0 bug fix PR: #5953 (atomic writes)
- Notable features: #5955 (Claude on Vertex AI), #5945 (Unbrowse backend)
- Many bug fixes for channel integrations (Slack, Telegram, Feishu)

Let me structure the report now. I'll be objective and data-driven.

Looking at the closed PRs more carefully:
- #5959 - TUI animation with unknown theme (chengyongru)
- #5958 - TUI readable themes (chengyongru)
- #1355 - Image preservation fix
- #1443 - Heartbeat reasoning decoupling
- #5949 - web_fetch failure propagation
- And 6 more from the unseen 7 PRs

For Bug section, I should highlight:
- #5924 P1 sudo loop - no fix PR mentioned
- #5903 Feishu marker bug - no fix PR
- #5898 gpt-6 copilot - no fix PR
- #5956 Feishu compaction - related to #5784
- #4798 concurrent file writes - has fix PR #5953 (P0 atomic writes)
- #5843 BUILD stage latency - CLOSED

Let me write the report now in clear Chinese.</think>

# NanoBot 项目动态日报

**日期：2026-09-29**

---

## 1. 今日速览

NanoBot 项目今日保持较高活跃度，过去 24 小时内共产生 7 条 Issues 更新和 27 条 PR 更新（其中 16 条待合并、11 条已合并/关闭），但无新版本发布。从结构上看，PR 提交以 **Bug 修复** 为主导（占比超过 60%），尤其集中在通道层（Telegram、Slack、Feishu）、Provider 层以及 TUI 渲染等多个此前反馈集中的痛点领域；同时新增了 Claude on Vertex AI、Unbrowse web_fetch 后端等中型功能 PR，显示项目在多 Provider 生态与外部工具集成方面仍在持续扩张。值得关注的是出现了一条 **P0 级原子写 PR（#5953）**，直接回应长期存在的并发文件写入安全问题（#4798），表明项目对稳定性问题的优先级判断较为果断。

---

## 2. 版本发布

**无新版本发布**。

---

## 3. 项目进展

今日共有 11 条 PR 合并或关闭，已知推动的进展包括：

| PR | 主题 | 影响 |
|---|---|---|
| [#5949](https://github.com/HKUDS/nanobot/pull/5949) | **fix(web)**：将 `web_fetch` 失败作为结构化工具错误传播 | 修复 `web_fetch` 失败却被错误判定为成功的工具执行生命周期问题，提升错误恢复路径 |
| [#5958](https://github.com/HKUDS/nanobot/pull/5958) | **fix(tui)**：未知终端主题下保留默认前景/背景色 | 修复 OSC 10/11 不可用时浅色终端文字几乎不可见的问题 |
| [#5959](https://github.com/HKUDS/nanobot/pull/5959) | **fix(tui)**：未知主题下为活动状态增加动态加粗带动画 | 修复主题探测失败时状态栏"冻结"问题，提升感知体验 |
| [#1443](https://github.com/HKUDS/nanobot/pull/1443) | **feat(heartbeat)**：解耦 heartbeat 推理与通知 | 默认静默推理，仅显式 `message` 调用触达用户，新增 `sendReasoning` 开关 |
| [#1355](https://github.com/HKUDS/nanobot/pull/1355) | **fix**：避免 Bot 在历史消息中反复提及图片 | 减少冗余回复 |

**整体评估**：今日合并的 PR 主要集中在"小而精准的体验修复"层级，未涉及大型架构改动，但显著改善了 TUI 多主题适配、心跳噪声控制、web 工具错误处理三个方向。项目稳健推进，处于"修补 + 微功能迭代"阶段。

---

## 4. 社区热点

按评论数排序，今日最值得关注的活跃讨论：

- **#5924 [P1]** [Agent gets stuck in sudo loop - becomes unusable](https://github.com/HKUDS/nanobot/issues/5924) — **5 条评论**，被标记为 P1 优先级。Sudo 授权仅持续一轮，Agent 反复陷入循环试图获取权限；达到最大迭代次数后还会"执念"于失败的命令。该问题对用户体验是**阻断级**的。**截至目前尚未出现 fix PR**。

- **#5903** [Feishu: 隐藏的 session-checkpoint 标记被当作普通消息发送给用户](https://github.com/HKUDS/nanobot/issues/5903) — **4 条评论**。空闲自动压缩后内部提示词泄漏给终端用户，属于隐私/语义污染类问题。

- **#5908 [P2]** [feat(webui): 流式回复时实时显示 tokens/sec](https://github.com/HKUDS/nanobot/issues/5908) — **4 条评论**。用户希望 WebUI 在生成时实时显示速度指标，便于判断模型是否卡顿。该需求具有较强的产品可见度。

- **#5898** [gpt-6 model series through GitHub Copilot](https://github.com/HKUDS/nanobot/issues/5898) — **3 条评论**。v0.3.5 不支持通过 GitHub Copilot 调用 OpenAI 6 系列模型，反映 Provider 兼容性跟进速度的问题。

**诉求分析**：当前社区讨论集中在三类问题——（1）Agent 控制流缺陷（sudo 循环）；（2）内部标记泄漏（Feishu 通道）；（3）Provider 兼容性与可观测性。前两类直接影响线上用户，后者反映生态扩张需求。

---

## 5. Bug 与稳定性

按严重程度排序：

### 🔴 P0 级（最严重）

- **[#5953 fix(tools): 文件工具原子写入](https://github.com/HKUDS/nanobot/pull/5953)** — P0 优先级 PR，修复 `WriteFileTool`、`EditFileTool`、`ApplyPatchTool` 使用 `write_text`/`write_bytes` 时**就地截断**导致的两类故障：
  1. **撕裂读**（torn read）：并发读者可观察到半写入文件；
  2. **崩溃窗口丢失**：写入过程中崩溃则文件内容不可恢复。

  该 PR 直接对应长期未解决的 **[#4798](https://github.com/HKUDS/nanobot/issues/4798)**（并发写入导致 workspace 文件损坏），属于项目级数据完整性问题。✅ **已有修复 PR**。

### 🟠 P1 级

- **[#5924 Agent 卡在 sudo 循环](https://github.com/HKUDS/nanobot/issues/5924)** — Agent 不可用。❌ **尚无 fix PR**，需维护者重点关注。

### 🟡 普通 Bug

| Issue | 描述 | 修复 PR 状态 |
|---|---|---|
| [#5903](https://github.com/HKUDS/nanobot/issues/5903) | Feishu 隐藏 session-checkpoint 标记泄漏 | ❌ 无 |
| [#5898](https://github.com/HKUDS/nanobot/issues/5898) | GitHub Copilot 不支持 gpt-6 系列 | ❌ 无 |
| [#5956](https://github.com/HKUDS/nanobot/issues/5956) | Feishu 无 in-place edit 能力，compaction notice 应可关闭 | ❌ 无（同类 #5784） |
| [#4798](https://github.com/HKUDS/nanobot/issues/4798) | 并发文件写入未序列化导致损坏 | ✅ [#5953](https://github.com/HKUDS/nanobot/pull/5953) |

### ✅ 今日已闭环

- **[#5843](https://github.com/HKUDS/nanobot/issues/5843)** — 长会话 BUILD 阶段 10s–数十秒延迟问题已 **CLOSED**（无评论，疑似被解释为预期行为或已静默修复）。

**稳定性总结**：今日在通道层（Slack 按钮消息截断、Telegram 链接 URL 转义）、Provider 层（429 重试解析复合时长）、Cron 调度层（拒绝非正 `every_seconds`）、exec 层（无轮询的硬超时）均有针对性提交。整体稳定性处于积极修复态势。

---

## 6. 功能请求与路线图信号

今日涉及的功能方向：

### 新 Provider 接入
- **[#5955 feat(providers): add Claude on Vertex AI](https://github.com/HKUDS/nanobot/pull/5955)** — 通过 `AsyncAnthropicVertex` 支持 Claude 模型，支持 Application Default Credentials。**路线图信号强**：Vertex AI 作为企业级 Claude 部署通道，纳入主分支的概率高。

### 新 Web 抓取后端
- **[#5945 feat(web-fetch): add optional Unbrowse reader backend](https://github.com/HKUDS/nanobot/pull/5945)** — 新增 Unbrowse 作为可选后端，失败时回退到 Jina Reader 与本地 readability。**路线图信号中等**：依赖第三方 API Key 采用 opt-in 设计，合并阻力小。

### WebUI 体验
- **[#5908 WebUI 显示 tokens/sec](https://github.com/HKUDS/nanobot/issues/5908)** — 提议明确，等待实现 PR。

### 子 Agent / 会话管理
- **[#5954 feat(subagents): 聚合并发结果](https://github.com/HKUDS/nanobot/pull/5954)** — 新增 `aggregated` 通知模式，将并发子代理结果合并发送，避免在全部完成前过早触发主代理。
- **[#5902 feat(tg): 将 topic 重命名为生成的会话标题](https://github.com/HKUDS/nanobot/pull/5902)** — 提取共享的会话标题生成模块，WebUI 与 Telegram 私聊 topic 自动改名。
- **[#5811 refactor(agent): 通过共享执行持久化子代理会话](https://github.com/HKUDS/nanobot/pull/5811)** — 委托任务经共享 `SessionExecutor` 执行，持久化为 `subagent:<task_id>` 会话。

### 心跳与可观测性
- **[#4549 feat(heartbeat): 为心跳增加 model_override 配置](https://github.com/HKUDS/nanobot/pull/4549)** — 新增 `gateway.heartbeat.modelOverride`，支持用更便宜的模型执行心跳。**长期开放 PR**（2026-06 创建），尚未合并。

**综合判断**：下一版本最有可能纳入的为 **#5953（原子写入 P0 fix）**、**#5955（Vertex AI Claude）**、**#5963/#5962/#5961/#5960（通道与 Provider 修复）** 这一批修复类 PR；功能类中 #5945（Unbrowse）与 #5954（子代理聚合）较有可能一并进入。

---

## 7. 用户反馈摘要

从评论中提炼的核心痛点：

1. **Agent 不可用场景**（#5924）：用户反馈 Sudo 授权在 Agent 完成命令前过期，导致 Agent 陷入循环；即便手动 continue 也无法解脱。**这是当前最严重的可用性阻塞**，影响任何需要特权命令的工作流。

2. **内部状态污染用户对话**（#5903、#5956）：Feishu 用户收到 `"Continue the active task from the working-memory checkpoint above."` 这种内部提示，破坏了对话连贯性；compaction notice 缺乏关闭入口。**反映出对通道层语义隔离的强烈需求**。

3. **Provider 兼容滞后**（#5898）：v0.3.5 不识别 OpenAI 6 系列（gpt-6），即便按 Copilot 标准流程也会失败。**用户期望快速跟进主流模型**。

4. **WebUI 流式可观测性**（#5908）：用户希望"知道模型是否在正常工作"。**反映对实时反馈指标的明确需求**，有助于建立信任与排障。

5. **可观测到的并发损坏**（#4798）：长时间运行的 Agent 会在不同 session 间破坏 workspace 文件。**数据完整性焦虑**。

整体来看，用户对项目的态度**功能性满意但稳定性担忧**：功能集丰富但流程中断类 Bug（P1 sudo 循环、原子写入）会迅速侵蚀信任。

---

## 8. 待处理积压

下列 Issue/PR 已开放较长时间或优先级较高，建议维护者优先响应：

| 编号 | 类型 | 主题 | 创建日期 | 备注 |
|---|---|---|---|---|
| [#4798](https://github.com/HKUDS/nanobot/issues/4798) | Bug | 并发文件写入损坏 | 2026-07-06 | **即将被 #5953 解决**，建议关注合并窗口 |
| [#5924](https://github.com/HKUDS/nanobot/issues/5924) | Bug [P1] | sudo 循环 | 2026-09-26 | 阻塞性，最严重 |
| [#5903](https://github.com/HKUDS/nanobot/issues/5903) | Bug | Feishu 标记泄漏 | 2026-09-24 | 隐私问题，影响 Feishu 用户 |
| [#4549](https://github.com/HKUDS/nanobot/pull/4549) | PR | heartbeat model_override | 2026-06-26 | **开放超 3 个月**，需确认是否仍在路线图 |
| [#5302](https://github.com/HKUDS/nanobot/pull/5302) | PR | 防止 Dream 期间不可用工具调用 | 2026-08-09 | 开放近 2 个月 |
| [#5539](https://github.com/HKUDS/nanobot/pull/5539) | PR | ToolLoader 日志格式统一 | 2026-08-25 | 开放 1 个月 |
| [#5212](https://github.com/HKUDS/nanobot/pull/5212) | PR | 音乐生成指引 | 2026-08-02 | 开放近 2 个月，建议维护者明确立场 |

**特别提示**：
- **#5924（P1 sudo 循环）** 应被视为当前最高优先级 Issue，建议在下个工作日内给出 fix 计划或临时 workaround。
- **#4549** 已开放 90 天以上仍未合并，建议维护者要么推进要么明确关闭以避免贡献者精力浪费。

---

## 项目健康度评估

| 维度 | 评估 |
|---|---|
| 提交活跃度 | 🟢 高（27 PR/天） |
| 修复/功能比 | 🟢 偏向修复（约 60%），符合 bug 驱动周期 |
| P0 响应速度 | 🟢 快速（#4798 → #5953） |
| P1 解决速度 | 🟡 待观察（#5924 暂无 fix） |
| 长尾积压 | 🟡 中等（3+ 个月未合 PR 存在） |
| Provider 生态扩张 | 🟢 积极（Vertex AI、Unbrowse、music） |
| 社区反馈闭环 | 🟡

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

<think>Let me analyze the GitHub data for PicoClaw (github.com/sipeed/picoclaw) for the date 2026-09-29 and generate a comprehensive daily report in Chinese.

Let me organize the key information:

**Overall Activity:**
- 6 Issues updated (5 new/active, 1 closed)
- 10 PRs updated (10 pending merge, 0 merged/closed)
- 0 new releases

**Key observations:**
1. A user (@x1F916) submitted a wave of fixes (PRs #3399, #3400, #3401, #3402, #3403) and an issue (#3404) about reliability fixes with reproducers
2. Another user (@afjcjsbx) opened an issue (#3398) announcing an active fork, suggesting the original repo may be unmaintained
3. Security-related issue (#3405) requesting private vulnerability reporting
4. A high-priority security audit issue (#258) was closed
5. Several stale issues and PRs exist

**Stale issues/PRs (concerning):**
- #3281 (BUG Web UI laggy) - stale
- #3366 (Feature OpenAI compatible) - stale
- #3378 (fix auth scopes) - stale
- #3354 (feat IRC multiline) - stale

**Major contributor activity:**
- @x1F916: 5 PRs + 1 issue (significant contribution)
- @afjcjsbx: Forks project due to maintenance concerns
- @iMilnb: PR #3347 fixes the laggy interface issue

Let me write the report now.</think>

# PicoClaw 项目日报
**日期：2026-09-29**

---

## 1. 今日速览

PicoClaw 在过去 24 小时呈现"高活跃、低合并"的典型社区接管型态势。Issue 端有 6 条更新、PR 端有 10 条待合并，但 0 个新版本、0 个 PR 被合并。社区贡献者 @x1F916 一次性提交了 5 个针对核心模块（agent / channels / config / updater）的修复 PR 与 1 个综合性 Issue #3404，质量与系统性极高，是今日最大亮点。与此同时，社区对维护活跃度的担忧加剧——用户 @afjcjsbx 宣布建立活跃 Fork（#3398），并有用户要求启用私有漏洞报告通道（#3405），反映出项目维护响应能力已引起外部警觉。

---

## 2. 版本发布

今日无新版本发布。最近一次正式版本仍为 0.3.1（参考 Issue #3281 中的环境信息），社区多份修复 PR 已在 `main` 分支累积，理论上具备发布 0.3.2 补丁版本的条件。

---

## 3. 项目进展

今日 **无任何 PR 被合并**，但代码层面已有显著进展，主要来自 @x1F916 的"可靠性修复浪潮"（wave 1）：

| PR | 模块 | 修复内容 | 链接 |
|---|---|---|---|
| #3403 | agent | 将异步工具（如 spawn）结果投递回原始 session，而非默认 agent 的主 session | [链接](https://github.com/sipeed/picoclaw/pull/3403) |
| #3402 | agent | 在 context manager 中正确解析路由（非默认）agent 的归属（#3316 的 rebase 重提交） | [链接](https://github.com/sipeed/picoclaw/pull/3402) |
| #3401 | channels | `Manager.Reload` 改为同步且对 nil 安全，避免因启用但未就绪的 channel 导致 panic | [链接](https://github.com/sipeed/picoclaw/pull/3401) |
| #3400 | config | 多 key 模型的 `api_keys` 与 `Enabled` 标志持久化修复 | [链接](https://github.com/sipeed/picoclaw/pull/3400) |
| #3399 | updater | 32 位 ARM (`GOARCH=arm`) 升级时正确选择 `armv6/armv7` 而非误装 `arm64` | [链接](https://github.com/sipeed/picoclaw/pull/3399) |

另：PR #3347（@iMilnb）修复了长期被诟病的 Web UI 输入卡顿问题，与 #3281 直接对应。

**整体评估**：今日合并数为 0，但代码提交质量与覆盖面达到"准小版本"水平，距离发版仅一步之遥。

---

## 4. 社区热点

| 排行 | 议题 | 关注度 | 链接 |
|---|---|---|---|
| 🔥🔥🔥 | #3281 Web UI 输入卡顿 | 15 评论 / 👍2 / stale | [链接](https://github.com/sipeed/picoclaw/issues/3281) |
| 🔥🔥 | #258 安全审计报告 | 5 评论 / 👍1，已关闭 | [链接](https://github.com/sipeed/picoclaw/issues/258) |
| 🔥🔥 | #3366 添加 OpenAI 兼容 Provider | 5 评论 / 👍0 / stale | [链接](https://github.com/sipeed/picoclaw/issues/3366) |
| 🔥 | #3405 请求启用私有漏洞报告 | 新开 | [链接](https://github.com/sipeed/picoclaw/issues/3405) |
| 🔥 | #3398 Fork 公告 | 新开 | [链接](https://github.com/sipeed/picoclaw/issues/3398) |

**诉求分析**：
- **#3281 + #3347** 形成闭环——用户体验问题被识别后已获外部 PR 修复，但因 stale 标签与维护缺位，仍未合并。
- **#3398 Fork 公告** 是最具信号意义的讨论：社区用户主动接盘维护，根源在于 issue/pr 长期被 stale bot 关闭、官方响应滞后。
- **#3405** 反映安全披露通道缺失，与 #258（已关闭的 2026-02-16 安全审计报告，含 CRITICAL 级别漏洞）形成对比——历史上曾有重大安全问题，但当前仓库连 `SECURITY.md` 与 GitHub Private Vulnerability Reporting 均未启用。

---

## 5. Bug 与稳定性

按严重程度排列：

### 🔴 严重（已有 fix PR，待合并）

1. **#3404 可靠性修复浪潮（Wave 1）**——综合性 Bug 报告，附带可复现示例，覆盖 agent loop、channels manager、config、updater 四大核心模块。已有对应修复 PR #3399–#3403。 [Issue](https://github.com/sipeed/picoclaw/issues/3404)
2. **#3403 / #3402** —— async `spawn` 结果错投默认 agent；路由 agent 的 context 解析错误，可能导致多用户/多 agent 场景下消息错乱、上下文污染。
3. **#3401** —— `Manager.Reload` 在 channel 处于"配置有但实例 nil"状态时会触发 panic（`manager.go:1956` 附近），gateway 直接退出。
4. **#3400** —— 多 key 模型配置保存时丢失 `Enabled` 与后续 keys，影响 v0/v1/v2 旧配置自动迁移路径。
5. **#3399** —— 32 位 ARM 用户执行 `picoclaw update` 时错误安装 arm64 二进制，属于用户感知明显的回归。

### 🟡 中等（用户体验，已有 PR）

6. **#3281 / PR #3347** —— Web UI 输入框在长对话历史下卡顿。 @iMilnb 已在 PR #3347 中提供修复方案，桌面/移动浏览器（Brave）已自测通过。

### 🟢 历史遗留

7. **#258**（已关闭）—— 2026-02-16 的安全审计报告（含 CRITICAL 漏洞），评论 5 条、👍1，今日关闭但未在日报中说明关闭原因与修复证据。

---

## 6. 功能请求与路线图信号

| 请求 | 来源 | 状态 | 信号 |
|---|---|---|---|
| OpenAI 兼容 Provider（自托管路由器如 9Router） | #3366 | OPEN, stale | 强烈需求，PR 尚未出现，下一版本有望纳入 |
| IRCv3 `draft/multiline` 支持 | PR #3354 | OPEN, stale | 已有实现，合并即可 |
| Keenable 搜索 Provider | PR #3370 | OPEN | 轻量集成，无 API key 即可用，纳入成本低 |
| DeltaChat 重构（-200 LOC） | PR #3222 | OPEN, stale | 维护性 PR，建议纳入 |

**判断**：以上需求均有现成 PR，纳入 0.3.2 / 0.4.0 的技术门槛极低，主要瓶颈在维护审阅。

---

## 7. 用户反馈摘要

- **😐 性能痛点**：Web UI 长历史下的卡顿被反复提及（#3281），用户已自行定位问题并提交修复（#3347），但官方未响应。
- **😟 维护信任流失**："appears to be unmaintained"、"significant interest and demand from the community"（#3398）—— 社区用 Fork 表达对维护响应的担忧。
- **🔒 安全披露诉求**：用户希望私下报告漏洞但找不到渠道（#3405），叠加历史上曾出现 CRITICAL 漏洞（#258），安全治理流程亟待补齐。
- **✅ 自助修复文化**：@x1F916 单人即完成 5 个核心模块的诊断与修复，并附 rebase / lint 通过的代码，是社区成熟度的体现，但也反衬核心维护者缺位。

---

## 8. 待处理积压

以下重要 Issue / PR 长期处于 stale 或待合并状态，建议维护者优先处理：

| 编号 | 类型 | 创建时间 | 状态 | 链接 |
|---|---|---|---|---|
| #3281 | Bug（Web UI 卡顿） | 2026-07-21 | stale | [链接](https://github.com/sipeed/picoclaw/issues/3281) |
| #3366 | Feature（OpenAI 兼容 Provider） | 2026-09-04 | stale | [链接](https://github.com/sipeed/picoclaw/issues/3366) |
| #3378 | fix(auth) | 2026-09-12 | stale | [链接](https://github.com/sipeed/picoclaw/pull/3378) |
| #3354 | feat(irc) | 2026-08-31 | stale | [链接](https://github.com/sipeed/picoclaw/pull/3354) |
| #3347 | fix(laggy UI) | 2026-08-27 | OPEN | [链接](https://github.com/sipeed/picoclaw/pull/3347) |
| #3370 | feat(keenable) | 2026-09-07 | OPEN | [链接](https://github.com/sipeed/picoclaw/pull/3370) |
| #3222 | refactor(deltachat) | 2026-07-03 | OPEN | [链接](https://github.com/sipeed/picoclaw/pull/3222) |
| #3399–#3403 | fix wave 1（5 个） | 2026-09-28 | OPEN | 详见第 3 节 |

**维护建议**：建议维护者本周内完成以下三件事——
1. 合并 @x1F916 的可靠性修复 wave 1（PR #3399–#3403），发版 0.3.2；
2. 启用 GitHub Private Vulnerability Reporting 并补充 `SECURITY.md`（回应 #3405）；
3. 就 #3398 Fork 公告作出官方回应，澄清维护路线图。

---

*数据来源：GitHub REST API · 报告生成时间：2026-09-29*

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

<think>The user is asking me to generate a project daily report for IronClaw (github.com/nearai/ironclaw) based on GitHub data. Let me analyze the data carefully and create a comprehensive report.

Let me review the data:
- Date: 2026-09-29
- Issues: 1 new/active, 0 closed
- PRs: 4 open, 1 closed
- No new releases

Issues:
- #8116 - Daily ironclaw failure taxonomy - automated daily report on failures

PRs:
- #7988 - chore(agents): refresh codebase knowledge graph (open, CI/Infrastructure)
- #8118 - fix(cli): report effective config profile (open, new contributor)
- #8117 - fix(webui): restore focus after closing the command palette (open, new contributor)
- #6698 - docs: update OpenWiki wiki (open, automated docs)
- #5132 - fix(webui-v2): redirect invalid chat thread routes (CLOSED)

Let me write the report in Chinese as the request is in Chinese. The report should be objective, professional, and data-driven.

Note: I should be careful about the data. The issue #8116 is about "Daily ironclaw failure taxonomy" which seems to be an automated analysis report, not a bug report. The PRs are mostly small fixes and automated maintenance tasks.

Let me structure the report:

1. 今日速览 - Overview of activity
2. 版本发布 - None, skip
3. 项目进展 - Closed PR #5132 (webui-v2 redirect fix)
4. 社区热点 - Limited activity, mostly automated
5. Bug 与稳定性 - Not really bug reports today
6. 功能请求与路线图信号 - Limited
7. 用户反馈摘要 - Limited
8. 待处理积压 - Some older PRs still open

Let me write this carefully and professionally.</think>

# IronClaw 项目动态日报

**日期：2026-09-29**
**仓库：[nearai/ironclaw](https://github.com/nearai/ironclaw)**

---

## 1. 今日速览

今日 IronClaw 项目活跃度处于**低位水平**。过去 24 小时内无新版本发布，Issue 仅新增 1 条（自动生成的失败分类日报），PR 共 5 条动态但其中 2 条为机器人的自动化维护任务（知识图谱刷新、Wiki 文档同步），实质性代码变更以小型修复为主。整体节奏偏向日常维护与质量修补，未见重大功能落地或里程碑推进。

---

## 2. 版本发布

今日无新版本发布。

---

## 3. 项目进展

今日有 **1 条 PR 关闭**，为小型前端修复：

- **[#5132](https://github.com/nearai/ironclaw/pull/5132)** `fix(webui-v2): redirect invalid chat thread routes`（已关闭）
  - 由 `@flyagents` 提交，关闭于 2026-09-28（创建于 2026-06-22，历时约 3 个月）。
  - 主要内容：将保留或无效的 `/chat/:threadId` 路由重定向回 `/chat`，并在判定深链接线程缺失前等待线程列表稳定，避免误跳转；同时保证本地创建/选中的线程在线程列表重新拉取完成前保持活跃状态。
  - 影响：webui-v2 路由稳定性小幅提升，属于体验打磨类改进，对项目整体推进贡献有限。

新增的 2 条人工 PR（`@changeroa` 提交）均为低风险修复，详见下一节。

---

## 4. 社区热点

今日互动量普遍偏低，**无评论、无点赞反应**，社区讨论处于静默期。值得关注的信号包括：

- **[#8116](https://github.com/nearai/ironclaw/issues/8116)** `Daily ironclaw failure taxonomy — 2026-09-28`（@pranavraja99 创建）
  - 这是项目的失败分类自动化日报 Issue，分析了 `officeqa` 等基准测试套件中 31 个非通过任务。
  - 摘要指出其中绝大多数（约 30 项）为 DeepSeek-V4-Flash 的真实模型质量问题，而非基础设施或工具链错误。
  - 该 Issue 可视为项目透明化运营的体现，但对开发者讨论热度无直接贡献。

**诉求分析**：今日缺乏真实的用户讨论与反馈，作者活跃度集中在维护性任务上，社区参与度有待提升。

---

## 5. Bug 与稳定性

今日**无新 Bug 报告**，但有 2 条新合入/PR 提交涉及既有可用性问题修复：

| 严重程度 | 编号 | 问题 | 状态 |
|---------|------|------|------|
| 低 | [#8117](https://github.com/nearai/ironclaw/pull/8117) | WebUI 命令面板关闭后焦点丢失，输入框无法接收键盘输入 | 已有 fix PR（open） |
| 低 | [#8118](https://github.com/nearai/ironclaw/pull/8118) | `ironclaw config path` / `doctor` / `status` 未显示从 `config.toml` 推导的有效启动 profile | 已有 fix PR（open） |
| 低 | [#5132](https://github.com/nearai/ironclaw/pull/5132) | webui-v2 中无效 chat 线程路由跳转到 404 而非回退 | 已关闭（PR 已合入/结束） |

整体稳定性良好，无 P0/P1 级严重故障报告。

---

## 6. 功能请求与路线图信号

今日**无新增功能请求类 Issue**。从当前 PR 列表看，路线图信号较弱：

- **CLI 可观测性增强**：[#8118](https://github.com/nearai/ironclaw/pull/8118) 提议让多个 CLI 子命令报告 effective boot profile，间接提升了配置调试体验，可视为可观测性方向的微改进。
- **文档自动化**：[#7988](https://github.com/nearai/ironclaw/pull/7988) 与 [#6698](https://github.com/nearai/ironclaw/pull/6698) 均为机器人驱动的定期刷新任务（代码库知识图谱、OpenWiki 文档），反映项目正在加强"代码即文档"的自动化维护流程，但本身不引入新功能。

短期内若无新 Issue 或 RFC 出现，预计下一版本仍以小修小补为主。

---

## 7. 用户反馈摘要

今日 Issues 与 PRs 的评论数均为 0，无法提炼有效用户痛点或满意/不满意反馈。建议关注：

- 新贡献者 `@changeroa` 今日连续提交 2 条 PR（[#8117](https://github.com/nearai/ironclaw/pull/8117)、[#8118](https://github.com/nearai/ironclaw/pull/8118)），均为首次贡献者身份（contributor: new），说明社区存在外延贡献入口。
- 失败分类日报 [#8116](https://github.com/nearai/ironclaw/issues/8116) 显示 DeepSeek-V4-Flash 在 `officeqa` 上有约 31 个非通过任务，反映模型本身在特定办公场景任务上仍有质量短板，间接构成终端用户使用体验上的痛点信号。

---

## 8. 待处理积压

以下为长期未关闭、需维护者关注的项目：

- **[#7988](https://github.com/nearai/ironclaw/pull/7988)** `chore(agents): refresh codebase knowledge graph`
  - 创建于 2026-08-29，已开放约 1 个月。由机器人自动生成的代码库记忆快照更新，需人工 review 与合并。
  - 状态：open，无评论、无 👍。

- **[#6698](https://github.com/nearai/ironclaw/pull/6698)** `docs: update OpenWiki wiki`
  - 创建于 2026-07-27，已开放约 2 个月。OpenWiki 叙事文档的自动化刷新 PR，明确标注 **NOT auto-merged**，需要人工审批。
  - 状态：open，无评论、无 👍。

- **[#8117](https://github.com/nearai/ironclaw/pull/8117)** `fix(webui): restore focus after closing the command palette`
  - 新提交 PR，但作为新贡献者的首次贡献，建议维护者尽快 review 以提升社区参与意愿。

- **[#8118](https://github.com/nearai/ironclaw/pull/8118)** `fix(cli): report effective config profile`
  - 同为新贡献者首次贡献，建议一并 review。

**提醒**：两条自动化 PR（[#7988](https://github.com/nearai/ironclaw/pull/7988)、[#6698](https://github.com/nearai/ironclaw/pull/6698)）积压超过 2 周，存在"机器人噪声"挤占 review 通道的风险，建议维护者建立定期清理机制。

---

## 项目健康度评估

| 维度 | 评分 | 说明 |
|------|------|------|
| 代码合入节奏 | ⭐⭐ | 今日仅 1 条 PR 关闭 |
| 社区活跃度 | ⭐ | 零评论、零点赞，互动低迷 |
| 自动化运营 | ⭐⭐⭐⭐ | 失败日报、知识图谱、Wiki 刷新运转良好 |
| 稳定性 | ⭐⭐⭐⭐ | 无严重故障报告 |
| 新人贡献友好度 | ⭐⭐⭐ | 出现新贡献者但 review 节奏待提速 |

**总体判断**：项目处于**平稳维护期**，缺乏重大功能推进与社区互动，建议维护者在下一周期主动激活长期未处理的 PR review，并通过 RFC/Issue 收集下一阶段功能需求。

---

*数据来源：GitHub REST API 截至 2026-09-29。*

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

<think>The user wants me to generate a daily report for the LobsterAI project based on the provided GitHub data. Let me analyze the data carefully:

**Data Overview:**
- 24h Issues: 5 (4 active, 1 closed)
- 24h PRs: 13 (1 pending merge, 12 merged/closed)
- New releases: 0

**Issues (all marked [stale]):**
1. #1035 [CLOSED] - NimGateway dedup cache not cleared after reconnect
2. #968 [OPEN] - skill-creator weather query shows wrong city
3. #971 [OPEN] - Content output is garbled/irrelevant
4. #972 [OPEN] - QWEN model stuck at "AI engine starting gateway"
5. #973 [OPEN] - macOS shortcuts show Ctrl instead of Cmd

**PRs:**
1. #2778 [CLOSED] - feat(cowork): show OpenClaw progress cards above composer
2. #2777 [CLOSED] - feat(cowork): keep long running turns to their latest five steps
3. #2776 [CLOSED] - feat: support ppt/word/excel document editing
4. #2775 [CLOSED] - fix(openclaw): start the gateway once on app launch
5. #1277 [OPEN] - chore(deps-dev): bump electron group
6. #2774 [CLOSED] - fix(openclaw): improve repair timeout handling and diagnostics
7. #2773 [CLOSED] - test(openclaw): verify legacy session discovery recovery
8. #2772 [CLOSED] - fix(openclaw): skip orphan non-ASCII agent dirs
9. #969 [CLOSED] - fix(agent): fix Create Agent modal overflow
10. #974 [CLOSED] - fix(security): reject protocol-relative URLs in markdown
11. #975 [CLOSED] - fix(im): xiaomifeng gateway unrecoverable after kicked-offline
12. #1034 [CLOSED] - fix(security): shell:openExternal IPC URL protocol validation
13. #1037 [CLOSED] - fix(openclaw): fix node not found on Windows when WSL and Git Bash coexist

Let me categorize and analyze:

**Recent PRs (created 2026-09-28):**
- All 8 PRs from this batch are closed/merged
- This is significant - 8 major PRs merged in one day
- Focus on OpenClaw gateway improvements, Cowork UI improvements, document editing support

**Older PRs/Issues being closed (stale):**
- Many PRs and issues from March-April 2026 are being closed as stale
- These are cleanup actions

Let me write the report now. I need to make it professional, data-driven, and structured according to the 8 sections requested. I'll write in Chinese as the request was in Chinese.

Key observations:
1. Major code cleanup happening - closing many stale issues/PRs from 6 months ago
2. Active development: 8 new PRs created and merged on 2026-09-28
3. OpenClaw is getting significant attention - 4 of 8 new PRs are OpenClaw related
4. Document editing feature (PPT/Word/Excel) being added
5. Security fixes being merged (URL validation, protocol handling)
6. Only 1 PR pending merge (#1277 dependabot)

Let me structure the report properly. I should note the dates carefully - the "today" is 2026-09-29, and most PRs were created/merged on 2026-09-28.

I should mention:
- The massive cleanup of stale issues/PRs (issue #1035 closed, 6 stale PRs closed)
- The burst of new development activity
- Document editing is a major feature addition
- Multiple security fixes
- OpenClaw gateway improvements
- The one remaining open dependabot PR

Let me write this report now in Chinese.</think>

# LobsterAI 项目日报

**日期：2026-09-29**
**项目：github.com/netease-youdao/LobsterAI**

---

## 1. 今日速览

LobsterAI 今日整体处于 **高活跃度清理 + 集中合入阶段**。过去 24 小时共处理 13 个 PR（12 个已合并/关闭，1 个待合并），并集中关闭了一批 6 个月前遗留的 stale Issues/PRs。与此同时，开发团队在 2026-09-28 单日一口气合入了 8 个新 PR，重点集中在 **OpenClaw 网关稳定性**、**Cowork 协作交互** 与 **Office 文档编辑** 三大方向。Issues 端仅有 1 条新关闭，无新增 Issue 涌入，社区入口相对安静，整体项目健康度良好，呈现"修旧 + 推新"并行的态势。

---

## 2. 版本发布

无新版本发布。

---

## 3. 项目进展

今日有 8 个新 PR 集中合入，覆盖多个核心模块，推动项目显著向前迈进：

### 🚀 重大功能

| PR | 主题 | 影响范围 |
|---|---|---|
| [#2776](https://github.com/netease-youdao/LobsterAI/pull/2776) | **feat: 支持 PPT/Word/Excel 文档编辑** | renderer / build / docs / main / openclaw / skills / artifacts |
| [#2778](https://github.com/netease-youdao/LobsterAI/pull/2778) | **feat(cowork): 在编辑器上方展示 OpenClaw progress card** | renderer / main / cowork |
| [#2777](https://github.com/netease-youdao/LobsterAI/pull/2777) | **feat(cowork): 长回合仅保留最近 5 步** | renderer / cowork |

- **Office 文档编辑支持**：[#2776](https://github.com/netease-youdao/LobsterAI/pull/2776) 是一次跨 7 个模块的大型特性合入，意味着 LobsterAI 已具备对办公文档的直接编辑能力，是面向"Agent + 办公自动化"场景的关键拼图。
- **OpenClaw 进度可视化**：[#2778](https://github.com/netease-youdao/LobsterAI/pull/2778) 解决了 Agent 使用 `progress_card` 工具时只在 Cowork 中显示原始调用步骤、计划本体不可见的问题，从 #2758 改造而来，仅保留显示部分。
- **长回合精简**：[#2777](https://github.com/netease-youdao/LobsterAI/pull/2777) 修复了 DeepSeek 等模型长时间调用工具（一次 7 分钟任务渲染 94 行）导致的会话噪声问题。

### 🔧 核心稳定性修复

- [#2775](https://github.com/netease-youdao/LobsterAI/pull/2775) **fix(openclaw): 应用启动时网关只启动一次** —— 修复了启动时网关被启动 3 次、约 80 秒才稳定的严重问题。两处根因：IM 通道同步早于 MCP bridge 监听；同步逻辑多次触发。
- [#2772](https://github.com/netease-youdao/LobsterAI/pull/2772) **fix(openclaw): 跳过纯中文 Agent 目录的孤儿会话统计** —— 修复了启动门控永远报告遗留旧会话、导致死锁的问题。
- [#2774](https://github.com/netease-youdao/LobsterAI/pull/2774) **fix(openclaw): 改进修复超时处理与诊断** —— "一键修复"在 CLI 加载慢时被 60 秒超时杀死的问题，引入基于输出活动的有界等待（最少 5 分钟、连续静默 5 分钟或单命令累计 15 分钟终止），并保存退出诊断。
- [#2773](https://github.com/netease-youdao/LobsterAI/pull/2773) **test(openclaw): 旧会话发现恢复回归测试** —— 为 #2772 补充回归测试与 Electron 实操验收记录，已同步到 `release/2026.9.24`。

### 🛡️ 安全加固

- [#974](https://github.com/netease-youdao/LobsterAI/pull/974) **fix(security): 拒绝 Markdown 中的协议相对 URL** —— 修复 `//evil.com` 绕过 scheme 白名单的 XSS 风险。
- [#1034](https://github.com/netease-youdao/LobsterAI/pull/1034) **fix(security): `shell:openExternal` 仅允许 http/https** —— 防止 `file://`、`ms-excel://` 等任意协议被恶意调用。

### 🎨 UI 修复

- [#969](https://github.com/netease-youdao/LobsterAI/pull/969) **fix(agent): 修复 Create Agent 弹窗溢出** —— 弹窗自适应视口，标题栏与操作栏固定可见。

### 🪟 跨平台兼容

- [#1037](https://github.com/netease-youdao/LobsterAI/pull/1037) **fix(openclaw): 修复 WSL + Git Bash 共存时 Windows 找不到 node** —— 完善 WSL bash 过滤逻辑。
- [#975](https://github.com/netease-youdao/LobsterAI/pull/975) **fix(im): 小蜜蜂网关被踢下线后不可恢复** —— `kickReason === 1 || 3` 后手动清 `reconnectTimer` 但未清 `v2Client` 导致 `start()` 抛出 "already running" 的问题。

> 📌 **整体评估**：单日合入 8 个新 PR + 4 个长期 stale PR 关闭，是一次显著的版本推进。OpenClaw 网关从"频繁重启 + 易死锁"走向"单次启动 + 自适应超时"，Cowork UI 增加进度可视化与长回合噪声治理，加上 Office 文档编辑能力的落地 —— 项目在 Agent 执行稳定性、协作体验、内容生产能力三个维度均取得实质进展。

---

## 4. 社区热点

今日 Issues/PR 评论活跃度整体偏低（多数已附 1-2 条评论），但有 **3 条 stale Issues** 集中更新，引发关注：

- 🔥 [#968](https://github.com/netease-youdao/LobsterAI/issues/968) — **skill-creator 查询杭州天气却返回其他城市数据且浏览器未关闭**（@buzhishishi）  
  反映了 Agent 浏览器自动化工具的"执行精度 + 资源清理"双重缺陷，是高频使用场景下的体验痛点。

- 🔥 [#971](https://github.com/netease-youdao/LobsterAI/issues/971) — **内容输出错乱、答非所问**（@ChiuAlvin）  
  用户要求生成小说封面，结果输出大量无关内容。这是典型的 LLM 输出失控 / 工具调用回路异常问题，影响创作者场景。

- 🔥 [#972](https://github.com/netease-youdao/LobsterAI/issues/972) — **QWEN 模型中途切换后主界面卡在"AI引擎正在启动网关"**（@buzhishishi）  
  网关状态机与 UI 状态不一致导致永久 loading 弹窗，叠加 [#2775](https://github.com/netease-youdao/LobsterAI/pull/2775) 的修复后理论上应有改善，但需验证该 issue 描述的"模型连接成功依然不能用"是否被一并解决。

> 💬 **背后诉求**：用户正在推动 LobsterAI 在**国产模型适配**（QWEN）、**多模态生成准确性**（封面/图像生成）、**Agent 工具执行的鲁棒性**三个方向上加强打磨。

---

## 5. Bug 与稳定性

按严重程度排序：

| 等级 | Issue/PR | 描述 | 已有修复？ |
|---|---|---|---|
| 🔴 高 | [#972](https://github.com/netease-youdao/LobsterAI/issues/972) | QWEN 切换后主界面无限转圈、网关启动弹窗持续弹出 | 部分相关（[#2775](https://github.com/netease-youdao/LobsterAI/pull/2775) 已合入），但需 issue 验证 |
| 🔴 高 | [#1035](https://github.com/netease-youdao/LobsterAI/issues/1035) | NimGateway 重连后消息去重缓存未清空，导致正常消息被静默丢弃 | **Issue 已 CLOSED**（stale 清理），但未见明确修复 PR，存在隐患 |
| 🟡 中 | [#971](https://github.com/netease-youdao/LobsterAI/issues/971) | LLM 输出内容错乱、答非所问 | ❌ 无 |
| 🟡 中 | [#968](https://github.com/netease-youdao/LobsterAI/issues/968) | skill-creator 浏览器自动化结果错误 + 窗口未关闭 | ❌ 无 |
| 🟢 低 | [#973](https://github.com/netease-youdao/LobsterAI/issues/973) | macOS 快捷键显示 Ctrl 而非 Cmd | ❌ 无 |
| 🟢 低 | [#969](https://github.com/netease-youdao/LobsterAI/pull/969) | Create Agent 弹窗溢出 | ✅ 已合入 |
| 🟢 低 | [#975](https://github.com/netease-youdao/LobsterAI/pull/975) | 小蜜蜂网关被踢下线后无法启动 | ❌ PR 已 CLOSED（无明确修复证据，stale 关闭） |

> ⚠️ **值得关注的稳定性信号**：[#1035](https://github.com/netease-youdao/LobsterAI/issues/1035) 与 [#975](https://github.com/netease-youdao/LobsterAI/pull/975) 均涉及 IM 网关（网易云信 / 小蜜蜂）的状态机缺陷，前者是**消息静默丢弃**（最难排查的故障类型），后者是**被踢后永久不可恢复**。两者均以 stale 状态被关闭，存在实际线上风险，建议维护者回溯确认是否已在新版本中通过其他方式修复。

---

## 6. 功能请求与路线图信号

虽然今日 Issues 端无明确的新功能请求，但从合入的 PR 可清晰看出 **2026.9.x 版本** 的路线图重心：

| 信号 | 对应 PR | 路线图判断 |
|---|---|---|
| **Office 文档编辑**（PPT/Word/Excel） | [#2776](https://github.com/netease-youdao/LobsterAI/pull/2776) | ⭐⭐⭐ 重大方向，已落地，下个版本可见 |
| **Cowork 协作体验升级**（进度卡片 + 长回合精简） | [#2778](https://github.com/netease-youdao/LobsterAI/pull/2778), [#2777](https://github.com/netease-youdao/LobsterAI/pull/2777) | ⭐⭐ 体验型改进，与"协作办公"主线强绑定 |
| **OpenClaw 网关稳定性**（启动顺序、超时、死锁） | [#2775](https://github.com/netease-youdao/LobsterAI/pull/2775), [#2772](https://github.com/netease-youdao/LobsterAI/pull/2772), [#2774](https://github.com/netease-youdao/LobsterAI/pull/2774), [#2773](https://github.com/netease-youdao/LobsterAI/pull/2773) | ⭐⭐⭐ 4 个 PR 集中攻关，说明该模块曾长期困扰用户 |
| **安全加固**（URL 协议校验） | [#974](https://github.com/netease-youdao/LobsterAI/pull/974), [#1034](https://github.com/netease-youdao/LobsterAI/pull/1034) | ⭐ 持续性投入 |
| **Electron 主框架升级**（43 → 44） | [#1277](https://github.com/netease-youdao/LobsterAI/pull/1277) | ⭐⭐ 仍 OPEN 待合并，可能是下个版本的版本号触发因素 |

> 🎯 **下一版本预测**：`release/2026.9.24` 分支已存在 [#2773](https://github.com/netease-youdao/LobsterAI/pull/2773) 同步记录，结合 [#1277](https://github.com/netease-youdao/LobsterAI/pull/1277) 的 Electron 升级，预计下一个 release 将是 **2026 年 9 月底或 10 月初** 的稳定性 + 文档编辑能力双线版本。

---

## 7. 用户反馈摘要

综合今日更新的 Issues 评论与上下文：

### 😟 痛点
1. **国产模型体验欠佳**：[#972](https://github.com/netease-youdao/LobsterAI/issues/972) 中用户使用 QWEN 模型遭遇"切模型 → 启动卡死 → 重连无效"的恶性循环，反映**模型切换的状态机未与 UI 状态机充分同步**。
2. **生成内容质量不稳**：[#971](https://github.com/netease-youdao/LobsterAI/issues/971) 用户在做"小说封面生成"这一创意类任务时遭遇输出完全跑题，附带的 7307px 高截图显示输出**严重超出预期且不可用**。
3. **浏览器工具资源泄露**：[#968](https://github.com/netease-youdao/LobsterAI/issues/968) 中 skill-creator 调用的浏览器窗口**没有正常关闭**，长期占用系统资源，影响后续任务。

### 😌 满意度信号
- OpenClaw 在 9 月 24 日版本后旧会话恢复问题已通过 [#2772](https://github.com/netease-youdao/LobsterAI/pull/2772) + [#2773](https://github.com/netease-youdao/LobsterAI/pull/2773) 形成完整修复闭环，表明维护团队对**已识别问题响应及时**。

### 💡 典型使用场景
- 用户自建 Agent + skill-creator 做自动化查询（杭州天气）—— **Agent Builder + 工具调用** 是核心场景。
- 内容创作（小说封面）—— **多模态生成** 是用户期待的重要能力。

---

## 8. 待处理积压

### 🔴 长期未响应

| 编号 | 类型 | 标题 | 创建时间 | 状态 |
|---|---|---|---|---|
| [#1277](https://github.com/netease-youdao/LobsterAI/pull/1277) | PR | **Electron 升级 43.5.0 → 44.4.5**（dependabot） | 2026-04-02 | **OPEN**，待合并 6 个月 |
| [#973](https://github.com/netease-youdao/LobsterAI/issues/973) | Issue | macOS 快捷键显示 Ctrl 而非 Cmd | 2026-03-27 | OPEN，stale |

### ⚠️ Stale 关闭但实质未修复

| 编号 | 描述 | 备注 |
|---|---|---|
| [#1035](https://github.com/netease-you

</details>

<details>
<summary><strong>QwenPaw</strong> — <a href="https://github.com/agentscope-ai/QwenPaw">agentscope-ai/QwenPaw</a></summary>

<think>The user wants me to generate a daily report for the QwenPaw project based on GitHub data. Let me analyze the data carefully and structure it according to the requested sections.

Let me first organize the key information:

**Data Overview:**
- Past 24 hours Issues: 8 (new/active: 5, closed: 3)
- Past 24 hours PRs: 20 (pending: 13, merged/closed: 7)
- New releases: 0

**Issues (8 total):**
- CLOSED: #7946 (QQ gateway replay bug), #6252 (Desktop zoom bug on Linux), #7999 (Desktop font size feature request)
- OPEN: #7991 (TaskTracker zombie entries), #8015 (Custom skill/plugin marketplace), #8013 (Skill pool timeout), #8011 (Telegram HTML formatter), #8009 (Oversized image kills session)

**PRs (20 total):**
- CLOSED/MERGED (7): #8019 (restore chat icons), #7983 (Fix qq replayed), #8014 (model discovery warnings), #8008 (agentscope version bump to 2.0.9), #8016 (modal transitions), #8006 (QQ replay events), #8005 (unify font scaling)
- OPEN (13): #7936 (i18n translation), #8003 (CI path handling), #8017 (model settings polish), #8018 (sandbox ACE on volume root), #8007 (TaskTracker run registration), #7931 (chat transcript history), #8012 (Telegram HTML), #7871 (truncation bypass), #8010 (media payload recovery), #7987 (Playwright defaults), #7988 (grep binary files), #7989 (Markdown table scrolling), #8004 (lazy import)

Now let me structure the report.

I need to be objective, data-driven, and highlight project health. Let me think about what's most notable:

1. **Today's overview** - High activity day, 20 PRs and 8 issues. Most issues closed. No releases.

2. **Version releases** - None

3. **Project progress** - 7 PRs closed/merged. Notable:
   - #8008 bumps agentscope to 2.0.9
   - #8005 unifies console font scaling (responds to #7999)
   - #7983, #8006 fix QQ replay bug (#7946)
   - #8014 improves model discovery warnings
   - #8019 restores chat icons
   - #8016 stabilizes modal transitions

4. **Community hot topics** - Issues with most comments:
   - #7946 (2 comments, closed) - QQ replay
   - #6252 (2 comments, closed) - Desktop zoom on Linux
   - #7991 (2 comments, open) - TaskTracker zombie
   - Other issues have 1 comment

5. **Bugs and stability** - Several serious bugs:
   - #8009 (oversized image kills session) - has fix PR #8010
   - #7991 (TaskTracker zombie entries) - has fix PR #8007
   - #8013 (skill pool timeout, multiple issues)
   - #8011 (Telegram HTML formatter)
   - #7946 (QQ replay) - FIXED via #7983, #8006
   - #6252 (Linux zoom) - no PR linked

6. **Feature requests** - #8015 (custom marketplace sources), #7999 (font size - already addressed via #8005)

7. **User feedback** - Real pain points:
   - Air-gapped deployments need custom marketplace
   - Desktop font size needed for accessibility (older users, high DPI, TV)
   - Skill pool timeout with large files
   - Session dies permanently from one bad image

8. **Backlog** - Long-standing issues without recent activity:
   - #6252 (Linux zoom bug from July 19)
   - Other older issues

Let me write the report in Chinese since the request was in Chinese. The user mentioned specific sections to include and asked for objective, data-driven analysis.

I should be careful to note that the data shows this is supposedly for "2026-09-29" which is a fictional date in the future. I'll just report on what the data shows.

Let me write this report now.</think>

# QwenPaw 项目日报 · 2026-09-29

---

## 📌 今日速览

QwenPaw 仓库今日保持较高活跃度，**过去 24 小时共处理 28 条更新事件（8 条 Issue + 20 条 PR）**，无新版本发布。Issue 关闭/打开比为 **3:5**，PR 合并/关闭与待合并比为 **7:13**。从数据看，项目处于 **集中修复期**：多条关键 Bug（QQ 频道重连去重、Telegram 渲染、媒体负载恢复）已被定位并提交修复 PR，Console 端 UI（字体缩放、图标、模态过渡）也有多项合并。新增功能请求集中在 **离线/内网部署场景**（自定义 Skill/Plugin 源），反映出企业用户对私有化部署的强需求。整体项目健康度良好，社区参与活跃（出现多位首次贡献者标签）。

---

## 🚀 版本发布

**今日无新版本发布**。当前主流版本仍为 `2.2.2b4`（main 分支）和 `2.2.1`（PyPI stable）。版本相关动态见下方依赖升级 PR #8008（agentscope 升至 2.0.9）。

---

## 🛠️ 项目进展

今日共有 **7 条 PR 被合并/关闭**，覆盖 Bug 修复、依赖升级、UI 一致性等多个方向：

| PR | 类别 | 影响范围 | 链接 |
|---|---|---|---|
| [#8008](https://github.com/agentscope-ai/QwenPaw/pull/8008) | chore(deps) | 升级 agentscope 至 2.0.9，统一依赖基线 | [链接](https://github.com/agentscope-ai/QwenPaw/pull/8008) |
| [#8006](https://github.com/agentscope-ai/QwenPaw/pull/8006) | fix(qq) | **关键修复**：QQ 网关重连后基于事件 ID/序号丢弃重放事件，避免重复执行非幂等命令 | [链接](https://github.com/agentscope-ai/QwenPaw/pull/8006) |
| [#7983](https://github.com/agentscope-ai/QwenPaw/pull/7983) | fix(qq) | 同上方向，修复 `_handle_msg_event` 重复入队问题 | [链接](https://github.com/agentscope-ai/QwenPaw/pull/7983) |
| [#8005](https://github.com/agentscope-ai/QwenPaw/pull/8005) | feat(console) | **功能落地**：统一 Console 字号缩放（12–20px）、建立语义化 token 体系，覆盖侧边栏、设置、聊天、MCP、技能等多个模块 | [链接](https://github.com/agentscope-ai/QwenPaw/pull/8005) |
| [#8014](https://github.com/agentscope-ai/QwenPaw/pull/8014) | fix | 模型发现失败警告中附带 provider ID 与脱敏错误信息，便于并发场景诊断 | [链接](https://github.com/agentscope-ai/QwenPaw/pull/8014) |
| [#8019](https://github.com/agentscope-ai/QwenPaw/pull/8019) | fix(console) | 恢复聊天输入区 SVG 图标标准尺寸（默认 20px）并随字号等比缩放 | [链接](https://github.com/agentscope-ai/QwenPaw/pull/8019) |
| [#8016](https://github.com/agentscope-ai/QwenPaw/pull/8016) | fix(console) | 稳定 Ant Design 模态框过渡，关闭淡出动画保留 | [链接](https://github.com/agentscope-ai/QwenPaw/pull/8016) |

**整体评价**：项目今日在 **QQ 频道鲁棒性** 与 **Console UI 一致性** 两条线均取得实质性推进。值得注意的是，QQ 重连重放问题（#7946）由两位贡献者（@iluv7、@BeiMu-new）从不同角度分别提交了修复方案（#7983、#8006），最终通过 #8006 关闭主线 bug，反映出社区协作的快速响应能力。

---

## 💬 社区热点

按评论数排序，今日最受关注的 Issue/PR：

1. **[#7946](https://github.com/agentscope-ai/QwenPaw/issues/7946)** QQ 官方机器人网关重连后事件重投（2 评论）— 已关闭，由 #8006、#7983 双修。背后的诉求是**幂等性保障**：用户担心写/删/确认类指令被双执行。

2. **[#6252](https://github.com/agentscope-ai/QwenPaw/issues/6252)** Linux 桌面端 Ctrl +/- 与 Ctrl+滚轮缩放失效（2 评论）— 已关闭。但**未见对应修复 PR**，可能是被 #8005 字号缩放功能间接覆盖，建议维护者在合并说明中明确关联关系。

3. **[#7991](https://github.com/agentscope-ai/QwenPaw/issues/7991)** TaskTracker zombie 条目虚增 running_task_count（2 评论）— 仍 OPEN，已有 #8007 待合并。诉求是**仪表盘数据准确性**，用户对"仪表盘显示 2 个运行任务 / API 返回 1 个"这种不一致非常敏感。

4. **[#8015](https://github.com/agentscope-ai/QwenPaw/pull/8015)** 自定义 Skill/Plugin 市场源配置（1 评论）— 反映企业级**离线/内网/气隙部署**已成为不可忽视的真实场景。

5. **[#8009](https://github.com/agentscope-ai/QwenPaw/issues/8009)** 过大图片导致会话永久不可用（1 评论）— 已在 #8010 中修复。

---

## 🐞 Bug 与稳定性

按严重程度排列：

| 严重度 | Issue | 问题描述 | 状态 / 修复 PR |
|---|---|---|---|
| 🔴 高 | [#8009](https://github.com/agentscope-ai/QwenPaw/issues/8009) | 过大图片被 provider 拒绝后，原始 block 仍被存储并在每次请求重放，导致**整个会话永久 400**。Plain-text 回复同样失败，影响所有后续轮次。 | 已有修复 PR [#8010](https://github.com/agentscope-ai/QwenPaw/pull/8010)（OPEN）— 在 agents 层拒绝媒体负载后从上下文中剔除该 block |
| 🔴 高 | [#8013](https://github.com/agentscope-ai/QwenPaw/issues/8013) | Console 技能池广播大技能（ppt-master: 12,994 文件 / 80.1 MB）触发 30 秒前端硬超时；后端实际仍在复制但前端报错；技能永远无法落盘。涉及三层问题：硬超时、断点续传缺失、目录冲突 | 无修复 PR，OPEN |
| 🟠 中 | [#7991](https://github.com/agentscope-ai/QwenPaw/issues/7991) | TaskTracker 全局与 per-chat 计数器作用域不一致，造成仪表盘数据失真 | 已有修复 PR [#8007](https://github.com/agentscope-ai/QwenPaw/pull/8007)（OPEN） |
| 🟠 中 | [#8011](https://github.com/agentscope-ai/QwenPaw/issues/8011) | Telegram HTML formatter 正则 `r"\`\`\`(\w*)\n?(.*?)\`\`\`"` 误处理：信息串带符号（`c++` / `obj-c`）、`~~~` 围栏、嵌套围栏 | 已有修复 PR [#8012](https://github.com/agentscope-ai/QwenPaw/pull/8012)（OPEN） |
| 🟢 已修复 | [#7946](https://github.com/agentscope-ai/QwenPaw/issues/7946) | QQ 网关重连重放事件 → 重复处理 | 已通过 [#8006](https://github.com/agentscope-ai/QwenPaw/pull/8006)、[#7983](https://github.com/agentscope-ai/QwenPaw/pull/7983) 关闭 |
| 🟢 已修复 | [#6252](https://github.com/agentscope-ai/QwenPaw/issues/6252) | Linux Tauri 桌面端缩放快捷键失效 | 关闭，但需维护者确认是否被 #8005 字号缩放覆盖 |

**值得关注的稳定性风险**：
- PR [#7871](https://github.com/agentscope-ai/QwenPaw/pull/7871)（工具输出截断绕过）自 9 月 18 日 OPEN 至今未合并——这是一个**安全相关**的问题（60,015 字节输出绕过 50,000 字节限制），建议优先合并。
- PR [#8018](https://github.com/agentscope-ai/QwenPaw/pull/8018)（Windows 沙盒 ACE 不写入卷根）虽 OPEN，但涉及 Windows ACL 继承行为，影响范围广，建议尽快评审。

---

## 💡 功能请求与路线图信号

| 请求 | Issue | 关联 PR | 落地可能性评估 |
|---|---|---|---|
| 桌面端 UI 字号可调节 | [#7999](https://github.com/agentscope-ai/QwenPaw/issues/7999) | [#8005](https://github.com/agentscope-ai/QwenPaw/pull/8005)（已合并） | ✅ **已落地**，多档位 + 持久化 |
| 自托管 Skill/Plugin 市场源（内网/气隙部署） | [#8015](https://github.com/agentscope-ai/QwenPaw/issues/8015) | 无 | 🟡 高，符合企业级部署趋势 |
| 跨平台路径处理 / Windows 文件附件 | — | [#8003](https://github.com/agentscope-ai/QwenPaw/pull/8003)（OPEN） | 🟢 进行中 |
| 聊天记录持久化分页加载 | — | [#7931](https://github.com/agentscope-ai/QwenPaw/pull/7931)（OPEN，9 月 22 日） | 🟡 中，复杂（SQLite + catalog + 游标） |
| 模型设置卡片与导航交互打磨 | — | [#8017](https://github.com/agentscope-ai/QwenPaw/pull/8017)（OPEN） | 🟢 已通过 Vitest 17 套件验证 |

**路线图信号**：
- **企业/私有化部署**正在成为核心叙事（自定义市场源、Windows 沙盒 ACL、气隙环境），下一个 minor 版本很可能强化这一方向。
- **桌面端体验**（字号、缩放、模态过渡、图标尺寸）正在系统化重构，已建立统一的语义 token 体系——这是后续 a11y 与多分辨率适配的基础设施。
- **聊天历史持久化**（#7931）若合并，将是长期可观测性、可恢复性的重要里程碑。

---

## 📣 用户反馈摘要

从 Issue 摘要与评论中提炼的真实声音：

- **「会话永久不可用」是最高级别痛点**（#8009）：用户原本在做"生成报告并发送图片"的工作流，一张图被拒就导致整个会话死亡，连普通文本都发不出。反映出 **provider 错误处理边界不够鲁棒**，block 级失败应当被隔离而非传染。

- **离线/内网部署成为显性需求**（#8015）：用户明确点出"内置的公共源无法访问"，需要"无需打补丁"地配置自托管镜像。这是 ToB 场景的硬需求。

- **桌面端可访问性**（#7999）：用户列举了三个具体场景——**视力较弱用户（含中老年）、高 DPI 显示器、投屏到电视/投影**。这表明桌面端已经走出"开发者自用"阶段，进入更广泛人群。

- **大文件操作可靠性**（#8013）：30 秒硬超时 + 无断点续传 + 目录冲突三者叠加，用户体验为"前端报错、后端静默完成、技能永远无法落盘"。对 80 MB 级别的技能分发场景几乎是不可用状态。

- **数据可观测性**（#7991）：用户对"仪表盘 2 / API 1"这种状态不一致极其敏感——这往往意味着**多源真相未对齐**，是运维场景的隐性信任损耗。

- **隐性正向反馈**：PR [#8006](https://github.com/agentscope-ai/QwenPaw/pull/8006) 中明确列出"双执行非幂等命令（write/delete/confirm）、重复审批同一 tool-call 卡片"——说明 **QQ Bot 频道已经承载了真实生产场景**，用户对幂等性的关注反向印证了使用深度。

---

## ⏳ 待处理积压

提醒维护者关注以下**长期 OPEN 或评论较少的关键项**：

| 编号 | 类型 | 标题 | 创建时间 | 风险评估 |
|---|---|---|---|---|
| [#7871](https://github.com/agentscope-ai/QwenPaw/pull/7871) | PR | 防止 `<<<TRUNCATED>>>` 字面标记绕过工具输出截断 | 2026-09-18 | 🟠 安全相关，超 10 天未合并 |
| [#7936](https://github.com/agentscope-ai/QwenPaw/pull/7936) | PR | i18n：补全 `channels.username` 中文翻译（首次贡献者） | 2026-09-22 | 🟢 低风险，但长期 OPEN 抑制新人积极性 |
| [#7931](https://github.com/agentscope-ai/QwenPaw/pull/7931) | PR | feat(chat): 持久化分页聊天历史 | 2026-09-22 | 🟡 重要功能，需核心维护者评审 |
| [#8013](https://github.com/agentscope-ai/QwenPaw/issues/8013) | Issue | 技能池大文件分发三重问题 | 2026-09-29 | 🔴 高频使用路径，无 PR |
| [#6252](https://github.com/agentscope-ai/QwenPaw/issues/6252) | Issue | Linux 桌面端缩放失效 | **2026-07-19** | 🟡 **已超过 70 天**，关闭原因未与代码变更显式关联 |
| [#8009](https://github.com/agentscope-ai/QwenPaw/issues/8009) → [#8010](https://github.com/agentscope-ai/QwenPaw/pull/8010) | Issue +

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/NousResearch/hermes-agent">NousResearch/hermes-agent</a></summary>

<think>Let me analyze the GitHub data for Hermes Agent (github.com/NousResearch/hermes-agent) for 2026-09-29 and generate a comprehensive daily report.

Key observations:
1. 50 issues updated in 24 hours (49 new/active, 1 closed)
2. 50 PRs updated in 24 hours (49 open, 1 closed)
3. No new releases
4. Many issues are "Audit regression" tracking issues opened by @JoaoMarcos44 - these are re-openings of previously closed issues that still reproduce
5. Significant issues:
   - #123926: Plugins silently dropped at boot (11 comments) - P3 but high attention
   - #99773: TUI attention budget + first-paint cleanup (8 comments)
   - #125121: Kanban dispatcher worker spawn ModuleNotFoundError (7 comments) - P2
   - #126524: Desktop assistant reply renders twice (7 comments) - P2
   - #110124: TUI fast default model hop (4 comments)
   - #126581: NO_REPLY marker leaks to chat (3 comments) - P2 production issue
   - #127284: source-completion-pending has no TTL (3 comments)
   - #125683: plugins.manage blocks 40-80s (3 comments) - P3 perf
6. PRs of note:
   - #127393: Shell injection fix - security P3
   - #127400: Syntax-check every renderer chunk - Windows P2
   - #127402: Anchor workspace cwd when entering a project
   - #127396: Deliver agent files when HOME under denied prefix
   - #127397: Gate home setup notice on explicit admin policy
   - #127403: Refresh config from gateway change signals - perf
   - #127366: Wake word lazy install
   - #126844: Eleven v4 char limits
   - #123692: Credential-pool token freshness

The "audit regression" pattern from @JoaoMarcos44 is very notable - they're systematically re-opening previously closed issues that they say still reproduce on baseline. This is a serious signal about code quality / issue closure hygiene.

Let me structure the report now.</think>

# Hermes Agent 项目日报
**日期：2026-09-29**

---

## 1. 今日速览

Hermes Agent 今日项目活跃度极高，单日内 Issue 与 PR 更新各达 50 条，但 **零版本交付**，呈现典型的"集中 triage / audit 而非 release"特征。最显著的信号是来自 @JoaoMarcos44 集中提交的 **"Audit regression" 系列（伞型 Issue #127076，下辖近 20 条子项）**，对过去 60 天内被关闭的多条 Issue 进行系统性复现验证，质疑仓库的 closure hygiene。同时，安全相关修复（TUI shell 注入 #127393）、Windows 兼容（#127400, #127343）、Desktop 双渲染（#126524/#127288）成为今日最受关注的工程焦点。整体看，社区正在做大量"基础质量"工作，但缺乏可发布物。

---

## 2. 版本发布

🚫 **今日无新版本发布**。建议关注下一个 release 是否能将本期审计中确认的回归纳入修复批次。

---

## 3. 项目进展

今日 **仅合并/关闭 1 条 PR**（#78233，类型安全权限处理重构），实际净推进有限。值得关注的待合并 PR：

| PR | 领域 | 价值 |
|---|---|---|
| [#127393](https://github.com/NousResearch/hermes-agent/pull/127393) | Security (TUI quick command) | 移除 `shell=True`，关闭命令注入漏洞（#16560），P3 但属安全边界修复，建议优先 |
| [#127402](https://github.com/NousResearch/hermes-agent/pull/127402) | Desktop / CWD | 修项目进入时的 cwd anchor 问题（#117890），解决多个入口路径不同步的根因 |
| [#127396](https://github.com/NousResearch/hermes-agent/pull/127396) | Gateway / 路径 | 修复 systemd `StateDirectory=` 下 agent 文件投递被 deny（#117900），将精确等值改为前缀判定 |
| [#127397](https://github.com/NousResearch/hermes-agent/pull/127397) | Gateway / Auth | 将 "No home channel" 通知收敛在 admin policy 内（#117800），减少信息泄露面 |
| [#127403](https://github.com/NousResearch/hermes-agent/pull/127403) | TUI Perf | 借助 gateway 文件系统 watcher 替代 5 秒轮询（#127374），明显降低 TUI 闲置负载 |
| [#123686](https://github.com/NousResearch/hermes-agent/pull/123686) | Search | `/api/sessions/search` 引入 title/channel/platform lane，闭合 sidebar 搜索盲点 |
| [#126844](https://github.com/NousResearch/hermes-agent/pull/126844) | TTS | Eleven v4（2026-09-28 发布）字符上限显式化（#126676） |

**整体评估**：合并量极少但 PR 队列丰富，主要原因是审查带宽被同步开启的"audit regression"系列占用——这是健康的"先识别再修复"模式，但项目整体向前推进的步伐暂缓。

---

## 4. 社区热点

按评论数排序的 Top 讨论：

1. **[#123926](https://github.com/NousResearch/hermes-agent/issues/123926) — 启动时插件静默丢失（11 评论）**
   `_evict_modules` 在 `sys.modules` 上做"边迭代边修改"，造成不同随机子集的插件平台集成不可用，且无用户可见错误，仅留 `WARNING`。这是**静默失败**类问题最危险的形态——表面看 Agent 工作正常，实际能力已被截断。

2. **[#99773](https://github.com/NousResearch/hermes-agent/issues/99773) — TUI attention budget（8 评论）**
   作者已主动"去 OMP 化"，改为"在不隐藏关键状态的前提下压缩视觉负担"的设计不变量。这是 Hermes TUI 自生长过程中沉淀下来的成熟 UX 哲学信号，值得纳入 roadmap。

3. **[#125121](https://github.com/NousResearch/hermes-agent/issues/125121) — Kanban worker spawn ModuleNotFoundError（7 评论，P2）**
   在 managed-runtime 安装上，dispatcher spawn 的 worker 找不到 `hermes_cli` 模块，导致 worker 立即崩溃、任务重试一次后整体失败。**这是 P2 级生产阻塞**。

4. **[#126524](https://github.com/NousResearch/hermes-agent/issues/126524) — Desktop 助手回复渲染两次（7 评论，P2）**
   新客户端上助手回复相邻重复出现，但 DB 只存一行；伴随 session list 也双渲染。Issue #127288 报告的"重新挂载运行中的 turn 后再渲染一次"是同源问题。属于**展示层重影 + 流式状态机错位**的复合 bug。

5. **[#110124](https://github.com/NousResearch/hermes-agent/issues/110124) — TUI 快速模型切换（4 评论）**
   与 #99773 同作者，提议裸 `/model` 走快速路径，完整 provider/setup 仍保留 `--provider` 与 `Ctrl+O`。是典型的"高频交互路径优化"诉求。

6. **[#126581](https://github.com/NousResearch/hermes-agent/issues/126581) — `NO_REPLY` 标记泄漏到聊天（3 评论，P2）**
   在 WhatsApp 上观察到字面量 `NO_REPLY` 进入对话。两条未关闭路径：streaming preview + 失败 turn 的 final-send。这是**最严重的安全 / 隐私风险**之一——用户看到本不该出现的内部协议字符。

---

## 5. Bug 与稳定性

### 🔴 P1（最高严重度）
| Issue | 摘要 | 是否有 Fix PR |
|---|---|---|
| [#127234](https://github.com/NousResearch/hermes-agent/issues/127234) | 流式输出进入逐字重复循环时永远不结束（uncapped endpoint），每个 repetition check 都等流结束 | ❌ 无 |

### 🟠 P2（严重）
| Issue | 摘要 | 是否有 Fix PR |
|---|---|---|
| [#125121](https://github.com/NousResearch/hermes-agent/issues/125121) | Kanban dispatcher worker `ModuleNotFoundError: hermes_cli` | ❌ 无 |
| [#126524](https://github.com/NousResearch/hermes-agent/issues/126524) | Desktop 助手回复渲染两次（新客户端） | ❌ 无 |
| [#126581](https://github.com/NousResearch/hermes-agent/issues/126581) | `NO_REPLY` 静默标记泄漏到 WhatsApp 聊天 | ❌ 无 |
| [#127288](https://github.com/NousResearch/hermes-agent/issues/127288) | Desktop 重新挂载运行中的 turn 后同回复渲染两次 | ❌ 无 |
| [#127387](https://github.com/NousResearch/hermes-agent/issues/127387) | 旧 venv (py3.11) 影子化 `rpds`，所有 MCP outputSchema 工具失败且可存活重启 | ❌ 无 |
| [#127343](https://github.com/NousResearch/hermes-agent/issues/127343) | Windows 测试套件 5 个失败（4 个主机不可移植 + 1 个真实产品 bug） | ❌ 无 |
| [#82847](https://github.com/NousResearch/hermes-agent/issues/82847) | 无 caption 图片上传凭空伪造用户指令 "What do you see in this image?"（1 👍） | ❌ 无 |
| [#126494](https://github.com/NousResearch/hermes-agent/issues/126494) | `tools.lazy_deps.install_specs` 跑了 updater 并退出而非安装，导致 `hermes-gateway` 死锁 | ❌ 无 |

### 🟡 P3（值得注意）
- [#123926](https://github.com/NousResearch/hermes-agent/issues/123926) 插件静默丢失（11 评论，活跃度最高）
- [#127284](https://github.com/NousResearch/hermes-agent/issues/127284) `source-completion-pending` 无 TTL / 自愈，永久污染后续启动
- [#125683](https://github.com/NousResearch/hermes-agent/issues/125683) `plugins.manage` 在 tree:0 部分克隆上阻塞 40–80s，超 Desktop 超时
- [#127099](https://github.com/NousResearch/hermes-agent/issues/127099) context-skip 激活混淆 auto-sync 与 tool 可用性（#80646 回归）

**整体评估**：P2 普遍**没有配套 PR**，需要维护者集中关注；尤其 #127234 (P1) 涉及 uncapped endpoint 失控——这是 local-model 用户最容易踩到的问题。

---

## 6. 功能请求与路线图信号

| 主题 | 候选 Issue / PR | 路线图判断 |
|---|---|---|
| TUI 设计哲学统一 | [#99773](https://github.com/NousResearch/hermes-agent/issues/99773), [#110124](https://github.com/NousResearch/hermes-agent/issues/110124) | 已有作者主导的成熟方案，**下一版本整合可能性高** |
| `hermes webapp` 浏览器化 | [#93508](https://github.com/NousResearch/hermes-agent/pull/93508) | 跨全栈大特性（agent/cli/gateway/tui/cron/plugins/desktop/dashboard），自 8 月提出至今仍 OPEN，**进入下一版本存在风险** |
| `/api/sessions/search` 多 lane | [#123686](https://github.com/NousResearch/hermes-agent/pull/123686) | PR 已开放，**很可能进入下一 release** |
| Kanban `--effort` CLI 暴露 | [#125613](https://github.com/NousResearch/hermes-agent/pull/125613) | 数据库 / 迁移 / dispatcher 上游已就绪，仅补 CLI 表面，**高概率纳入** |
| Eleven v4 字符上限 | [#126844](https://github.com/NousResearch/hermes-agent/pull/126844) | Provider 刚发布即跟进，**强烈建议优先合并** |
| Mem0 自托管 CA bundle | [#123720](https://github.com/NousResearch/hermes-agent/pull/123720) | 企业自托管场景刚需 |

---

## 7. 用户反馈摘要

**真实痛点（提炼自 Issue 评论）**：

- **静默失败让人无从察觉**：#123926 的核心痛点不是 bug 本身，而是"没有任何用户可见信号"。多评论聚焦于"如何让平台集成缺失变得可观测"——这是 Hermes 作为 agent 框架**可信度**的根本。
- **生产环境被内部协议字符污染**：#126581 的 WhatsApp 用户直接看到 `NO_REPLY` 字面量，体验感受极差，反映**协议边界与对外展示的隔离**不足。
- **managed-runtime 安装形态分裂**：#125121 与 #127387 都指出，源安装、managed 安装、Windows 三种形态各自踩到不同的环境假设。用户对"一套行为"期望强。
- **重复关闭的回归让人沮丧**：#127076 伞型 Issue 显示大量"被 supersede/close 的问题在新基线上仍复现"，社区明显感受到 closure hygiene 不严，希望**"close"等价于"在 main 上不再复现"**。
- **Desktop 转写层与状态机错位**：#126524、#127288、#127098 共同指向桌面端的"显示 ↔ 持久化 ↔ 流式事件"三角一致性缺失——用户对"我看到的即是真的"期望很朴素。

**满意度信号**：TUI attention budget（#99773）、Eleven v4 即时跟进（#126844）显示核心维护者对 UX 与 provider 节奏响应积极，社区对此反馈正面。

---

## 8. 待处理积压提醒

> 以下条目长期 OPEN 且严重度/讨论量值得关注，建议维护者优先处理：

| 类型 | Issue / PR | 闲置时间 | 说明 |
|---|---|---|---|
| 高严重 Bug | [#82847](https://github.com/NousResearch/hermes-agent/issues/82847) | 约 50 天 | 无 caption 图片凭空伪造用户指令，存在代理安全风险，仅 1 👍 但 P2 |
| 功能 PR | [#93508](https://github.com/NousResearch/hermes-agent/pull/93508) | 约 36 天 | `hermes webapp` 浏览器化大特性，跨度广，需专门 reviewer |
| 功能 PR | [#68106](https://github.com/NousResearch/hermes-agent/pull/68106) | 约 71 天 | Anthropic `extra_usage` 单位归一化，长期 OPEN |
| Bug | [#123926](https://github.com/NousResearch/hermes-agent/issues/123926) | 3 天但 11 评论 | 评论热度最高，根因（dict 边迭代边修改）明确，应快速给出 fix |
| 大特性 | [#99773](https://github.com/NousResearch/hermes-agent/issues/99773) | 29 天 | 已演化出成熟设计不变量，建议转入 plan 阶段 |

**对维护者的建议**：
1. 集中分配一次 sprint 给 **Audit regression 系列（#127076 伞下）**，逐条重新 triage，避免长期"close → reopen"循环；
2. 优先合并安全边界修复 **#127393**（shell 注入）与 provider 兼容 **#126844**（Eleven v4）；
3. 为 #125121 / #127387 / #126581 等 P2 阻塞类 bug 设立 owner，否则会持续影响 managed install / Desktop 用户基线。

---

*数据来源：NousResearch/hermes-agent GitHub 仓库，统计窗口 2026-09-28 → 2026-09-29*

</details>

<details>
<summary><strong>OpenHuman</strong> — <a href="https://github.com/tinyhumansai/openhuman">tinyhumansai/openhuman</a></summary>

<think>The user wants me to generate a project daily report for OpenHuman based on GitHub data from 2026-09-29. Let me carefully analyze the data provided and create a comprehensive, well-structured report in Chinese.

Let me organize the information:

**Data Overview:**
- 24h Issues: 35 (13 new/active, 22 closed)
- 24h PRs: 30 (5 pending, 25 merged/closed)
- 1 new release: v0.64.7

**Release v0.64.7:** The Intelligence Upgrade - 12 PRs across 12 commits, covering memory, voice, agents, reliability, and developer foundations

**Major themes I see:**
1. Vendor submodule updates (lots of small chore PRs)
2. Tool-call handling fixes (#6710, #6722, #6723, #6732, #6733, #6740)
3. History compaction bugs (#6721, #6728)
4. Chat/timeline fixes (#6735, #6736, #6741, #6742, #6751)
5. Computer/TinyDesktop → TinyComputer migration (#6759, #6761, #6757)
6. Sub-agent refactor (#6760, #6762)
7. CI fixes (#6763)
8. Test improvements (#6745, #6739, #6758, #6753)
9. Discord bot issues (#6713, #6714)
10. Security issues (#6733)

Let me categorize:

**Important merged PRs (推进了项目):**
- #6760 - Major refactor: removed 12 builtin sub-agents, added inline skills
- #6759 - TinyDesktop → TinyComputer v0.7.0
- #6761 - TinyComputer saved flows, task reports
- #6726 - Fix prompt injection detector (#6710) - was bricking threads
- #6736 - Fix background delivery showing previous turn's tool cards
- #6741 - Fix late row timeline claims
- #6751 - Follow-up fix to #6741
- #6749 - Bump tinyagents (parser fixes, stream-error, fence policy)
- #6752 - Bump tinyruntime to v0.2.6, providers v0.2.3
- #6746 - tinyconnectors v0.10.2
- #6748 - tinyjuice v0.3.3
- #6747 - tinybus bump
- #6754 - Four vendor modules
- #6755 - Pin 13 modules to #6750 releases
- #6757 - tinycomputer v0.5.2
- #6743 - tinyhumans-sdk bump
- #6745 - Test that blocks release pretest
- #6739 - Sub-agent route isolation test

**Open PRs (待处理):**
- #6763 - Repair release CI failures (NEW)
- #6762 - Remove vestigial toolkit spawn arg

**Important issues by discussion/comment count:**
- #6450 - 6 comments (embed test suite)
- #6219 - 3 comments (CI source-only change)
- #6504 - 3 comments (OpenAI retry-after)
- #6728 - 3 comments (channel history compaction)
- #5917 - 2 comments (SSH submodule URL)
- #6512 - 2 comments (undeclared cargo features)
- #6184 - 2 comments (reasoning tags)
- #6312 - 2 comments (sub-agent payload names)
- #6722 - 2 comments (text parser drops tool_call)
- #6744 - 2 comments (LinkedIn enrichment)
- #6710 - 2 comments (prompt injection blocks tool results)
- #5915 - 2 comments (six guards that pass while proving nothing)
- #6714 - 2 comments (Discord github-tracker)
- #5918 - 2 comments (Playwright ports)
- #6713 - 2 comments (Teeny triage)
- And many more

**Bug and Stability (严重程度排列):**

P1 Critical:
- #6710 - Prompt injection detector bricks threads (FIXED via #6726)
- #6733 - SECURITY: streamed replies execute quoted tool-call markup
- #6744 - LinkedIn calls removed backend route
- #6732 - TinyAgents fence guard drops bare-fenced tool calls
- #6722 - Text parser drops tool_call wrapped invokes (DeepSeek V4 Flash)
- #6723 - Claimed-but-undecodable tool blocks removed silently (FIXED via tinyagents#224)
- #6740 - Malformed tool block dropped silently (follow-up to #6723)
- #6312 - Async sub-agent payload names wrong tool
- #6721 - trim_history splits tool-call groups
- #6728 - Channel history compaction cuts tool-call groups

P2 Medium:
- #6504 - OpenAI retry-after dropped (FIXED? need to check)
- #6724 - Provider error in HTTP 200 stream retry 4x then hidden
- #6725 - Repeated-failure validation nudge persisted
- #6735 - Background delivery shows previous turn's tool cards (FIXED via #6736, #6741)
- #6742 - Late row claims live timeline (FIXED via #6751)
- #6756 - tinycomputer cursor-overlay not found
- #6758 - Flaky harness_embed
- #6753 - Flaky channels health timeout
- #6714 - Discord github-tracker empty
- #5915 - Six guards passing without testing
- #5918 - Playwright fixed ports
- #6450 - openhuman-embed test suite fails (masked by #[ignore])

P3 Low:
- #6750 - Vendor submodule pins
- #5331 - Composio source status counts
- #6502 - Message edit blocked by persistence

**Open issues to monitor:**
- #6744 (LinkedIn enrichment - broken backend)
- #5915 (Six guards that pass while proving nothing)
- #6714 (Discord tracker empty)
- #5918 (Playwright ports)
- #6756 (cursor-overlay)
- #6758 (Flaky harness)
- #6753 (Flaky channels test)
- #6740 (Tool block dropped)
- #6733 (Security: streamed quoted tool-call)
- #6184 (reasoning tag extraction)

Now let me write the report in Chinese with clear structure.

For the "backlog" section, I should look at long-open issues:
- #5917 - Created 2026-09-01, still open
- #5915 - Created 2026-09-01, still open
- #5918 - Created 2026-09-01, still open
- #5331 - Created 2026-08-03, still open
- #6184 - Created 2026-09-10, still open

Let me write this up nicely now.</think>

# OpenHuman 项目日报 · 2026-09-29

---

## 1. 今日速览

OpenHuman 在过去 24 小时呈现**高强度、高密度的迭代节奏**：35 条 Issue 中 22 条已关闭（关闭率 63%），30 条 PR 中 25 条已合入或关闭（合并率约 83%），并发布 **v0.64.7 "The Intelligence Upgrade"** 版本。整体趋势是**一边清理历史债务（tool-call 历史裁剪、流式安全、vendor 升级），一边推进架构重构（sub-agent → inline skill，TinyDesktop → TinyComputer）**。仓库健康度优良：P1 安全/正确性问题在当日基本都进入了修复闭环，但仍有数个 OPEN 的关键问题（LinkedIn 后端调用、引用式工具调用安全、光标覆盖层）等待处理。

---

## 2. 版本发布

### 🚀 v0.64.7 "The Intelligence Upgrade"

- **范围**：12 个 PR / 12 个 commit，覆盖 memory、voice、agents、reliability、developer foundations
- **关键改进**：任务、聊天与智能体工作流；含此前 v0.64.4 起的累计增量
- **关联**：本次 release 后续的多个 PR（#6759、#6760、#6761、#6762、#6763）已进入主分支，但属于 **post-release 增量**，预计会进入 v0.64.8 或 v0.65.x
- **注意事项**：依赖 v0.64.7 的下游集成需关注 #6760 引入的 sub-agent → inline skill 重构带来的 agent 行为差异，以及 #6759 引入的 `TinyComputer`（替代 `TinyDesktop`/`TinyBrowser`）的模块标识变更

🔗 [Release 链接](https://github.com/tinyhumansai/openhuman)（数据截取）

---

## 3. 项目进展（已合并 PR 重点）

### 🏗️ 架构级重构

| PR | 影响 | 说明 |
|---|---|---|
| [#6760](https://github.com/tinyhumansai/openhuman/pull/6760) | **重大** | 移除 12 个内置 sub-agent（`mcp_agent`、`scheduler_agent`、`tools_agent`、`code_executor`、`integrations_agent`、`skill_creator` 等），改为 inline skill + deferred tools |
| [#6761](https://github.com/tinyhumansai/openhuman/pull/6761) | 重要 | 为 TinyComputer 加入 Saved Flows、任务报告与 Bali 订票 e2e（对接 Kashmir demo） |
| [#6759](https://github.com/tinyhumansai/openhuman/pull/6759) | 重要 | **TinyDesktop/TinyBrowser → TinyComputer v0.7.0**（contract 2.8），新增 decision 与 rescue 模型控制 |

### 🐛 关键 Bug 修复

| PR | 修复的 Issue | 说明 |
|---|---|---|
| [#6726](https://github.com/tinyhumansai/openhuman/pull/6726) | [#6710](https://github.com/tinyhumansai/openhuman/issues/6710) | **P1**：提示注入检测器将工具结果当作用户输入反复扫描，导致线程永久"砖死"；修复后只筛查本轮新增输入 |
| [#6736](https://github.com/tinyhumansai/openhuman/pull/6736) | [#6735](https://github.com/tinyhumansai/openhuman/issues/6735) | **P1**：后台投递的 `chat_done` 不再吞掉上一轮的工具时间线，引入 `toolTimelineRequestByThread` 归属追踪 |
| [#6741](https://github.com/tinyhumansai/openhuman/pull/6741) | [#6741](https://github.com/tinyhumansai/openhuman/issues/6741) | **P2**：晚到的行保留其所属 turn 的 timeline 声明权 |
| [#6751](https://github.com/tinyhumansai/openhuman/pull/6751) | [#6742](https://github.com/tinyhumansai/openhuman/issues/6742) | **P2**：补 #6741 的反向情形——另一 turn 仍存活时晚到行归入自己 turn 的冻结 trail |
| [#6739](https://github.com/tinyhumansai/openhuman/pull/6739) | 配套 #6731 | 子 agent 路由隔离测试补强，证明子 agent 确实解析 tier 路由 |

### 📦 依赖/Vendor 同步

| PR | 内容 |
|---|---|
| [#6749](https://github.com/tinyhumansai/openhuman/pull/6749) | `tinyagents` 升级到 `8a58b7e59`，含解析器、流错误分类、fence policy 修复 |
| [#6752](https://github.com/tinyhumansai/openhuman/pull/6752) | `tinyruntime` → v0.2.6，provider → v0.2.3 |
| [#6746](https://github.com/tinyhumansai/openhuman/pull/6746) | `tinyconnectors` → v0.10.2 |
| [#6748](https://github.com/tinyhumansai/openhuman/pull/6748) | `tinyjuice` → v0.3.3 |
| [#6747](https://github.com/tinyhumansai/openhuman/pull/6747) | `tinybus` → `e5f1cd2d2`（引入静态链接模块支持） |
| [#6754](https://github.com/tinyhumansai/openhuman/pull/6754) | 一次性 bump `tinybus` / `tinyjuice` / `tinyconnectors` / `tinyruntime`（每个子模块一个 commit） |
| [#6755](https://github.com/tinyhumansai/openhuman/pull/6755) | **P1**：将 13 个 vendor 模块锁定到 #6750 发布的版本（含 `tinyskills`） |
| [#6757](https://github.com/tinyhumansai/openhuman/pull/6757) | 桌面模块锁定 `tinycomputer v0.5.2`（已更名） |
| [#6743](https://github.com/tinyhumansai/openhuman/pull/6743) | `tinyhumans-sdk` → `e7f38bf43`（⚠️ 破坏性：移除 `api::agent_integrations::apify`） |

### 🧪 测试基础设施

- [#6745](https://github.com/tinyhumansai/openhuman/pull/6745) **P1**：让"孤立 head 恢复"测试在生产路径（hosted, native）运行；阻断 release pretest gate

---

## 4. 社区热点（讨论最活跃）

| Issue | 评论数 | 标题 | 诉求分析 |
|---|---|---|---|
| [#6450](https://github.com/tinyhumansai/openhuman/issues/6450) | **6** | `openhuman-embed` 测试套件在 main 失败，被 `#[ignore]` 临时掩盖 | **基础设施卫生**：作者撤回此前"回归"说法，强调是测试 harness 本身的失败；社区对 CI 掩盖失败模式高度敏感 |
| [#6219](https://github.com/tinyhumansai/openhuman/issues/6219) | 3 | `src/` 改动破坏 `tests/` 集成测试目标但 CI 全绿 | **CI 完整性**：仅 source-only 变更不构建集成测试目标，是 CI Lite 长期盲点 |
| [#6504](https://github.com/tinyhumansai/openhuman/issues/6504) | 3 | OpenAI transport 丢弃 429 `Retry-After` | **生产可靠性**：托管后端走 OpenAI 路径，重试策略无法兑现 Retry-After 是限流场景下的真实伤害 |
| [#6728](https://github.com/tinyhumansai/openhuman/issues/6728) | 3 | 频道历史压缩对工具调用组不感知 | **会话完整性**：与 #6721 同一缺陷类，但发生在 Telegram 等 channel 路径上，可孤立工具结果 |
| [#6710](https://github.com/tinyhumansai/openhuman/issues/6710) | 2 | 提示注入检测器把工具结果当用户输入 → 线程永久 brick | **已修复**：典型的"过度防御导致可用性灾难"案例；同日 #6726 合入修复 |

**整体诉求**：社区对**测试盲区**（CI 不验证、ignored 测试）和**可靠性 bug**（retry-after 丢失、channel 路径与 chat 路径不一致）关注度最高，反映项目正在从"功能扩张期"进入"生产硬化期"。

---

## 5. Bug 与稳定性

### 🔴 P1（高严重度）

| Issue | 状态 | 描述 |
|---|---|---|
| [#6733](https://github.com/tinyhumansai/openhuman/issues/6733) | ⚠️ OPEN | **安全**：流式响应执行模型引述中的工具调用标记（包括从抓取内容中复读出来的指令），流 scrubber 忽略 `TextDialectRecovery::Auto` |
| [#6744](https://github.com/tinyhumansai/openhuman/issues/6744) | ⚠️ OPEN | LinkedIn 富化仍调用已被后端废弃的 `POST /agent-integrations/apify/run`——每次调用 100% 失败 |
| [#6740](https://github.com/tinyhumansai/openhuman/issues/6740) | ⚠️ OPEN | 畸形 tool block 与合法 call 并存时被静默丢弃（#6723 修复后的 follow-up） |
| [#6732](https://github.com/tinyhumansai/openhuman/issues/6732) | CLOSED | TinyAgents 围栏守门仅 unary 路径丢弃裸围栏调用，与 tinytools fence policy 矛盾 |
| [#6722](https://github.com/tinyhumansai/openhuman/issues/6722) | CLOSED | 文本解析器丢弃 `<tool_call>` 包裹的 `<invoke>`（DeepSeek V4 Flash 受害） |
| [#6723](https://github.com/tinyhumansai/openhuman/issues/6723) | CLOSED | 声明但无法解码的工具块被静默删除（**已修**：tinyhumansai/tinyagents#224） |
| [#6710](https://github.com/tinyhumansai/openhuman/issues/6710) | CLOSED | 提示注入检测器 brick 线程（**已修**：#6726） |
| [#6721](https://github.com/tinyhumansai/openhuman/issues/6721) | CLOSED | `trim_history` 切断工具调用配对 |
| [#6728](https://github.com/tinyhumansai/openhuman/issues/6728) | CLOSED | 频道历史压缩切断工具调用配对 |
| [#6312](https://github.com/tinyhumansai/openhuman/issues/6312) | CLOSED | async 子 agent payload 引用不存在的 `wait_subagent` 工具 |

### 🟡 P2（中等严重度）

| Issue | 状态 | 描述 |
|---|---|---|
| [#6504](https://github.com/tinyhumansai/openhuman/issues/6504) | CLOSED | OpenAI 传输丢弃 Retry-After（已通过 commit 修复） |
| [#6724](https://github.com/tinyhumansai/openhuman/issues/6724) | CLOSED | HTTP 200 流内含 provider 错误被重试 4×(~45s) 后掩盖为 "Something went wrong" |
| [#6725](https://github.com/tinyhumansai/openhuman/issues/6725) | CLOSED | 重复失败验证 nudge 被持久化为 system 消息，每轮重放陈旧指令 |
| [#6735](https://github.com/tinyhumansai/openhuman/issues/6735) | CLOSED | 后台投递回复复显上一轮工具卡片（**已修**：#6736） |
| [#6742](https://github.com/tinyhumansai/openhuman/issues/6742) | CLOSED | 晚到的 settled 行抢占 live timeline（**已修**：#6751） |

</details>

---
*本日报由 [Big Model Radar](https://github.com/96loveslife/big_model_radar) 自动生成。*
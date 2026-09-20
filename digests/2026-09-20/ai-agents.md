# OpenClaw 生态日报 2026-09-20

> Issues: 500 | PRs: 500 | 覆盖项目: 8 个 | 生成时间: 2026-09-20 04:22 UTC

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

<think>The user wants me to generate a daily project status report for OpenClaw, an AI agent/personal AI assistant open source project, based on GitHub data. Let me analyze the data carefully and produce a comprehensive report.

Let me organize the key information:

**Overall Stats:**
- 500 Issues updated in last 24h (356 new/active, 144 closed)
- 500 PRs updated in last 24h (285 pending merge, 215 merged/closed)
- 1 new release: v2026.9.5 (Linux companion)

**Key Issues to analyze:**
1. #149361 - WebUI performance and stability umbrella (50 comments, top)
2. #97616 - Process leak/zombie accumulation (31 comments)
3. #152744 - Codex retained-state migration stuck (CLOSED, 19 comments)
4. #22438 - Tiered bootstrap file loading (18 comments)
5. #38327 - Google Vertex/Gemini regression (16 comments, 3 thumbs)
6. #68596 - Configurable streaming watchdog timeout (16 comments, 8 thumbs)
7. #139847 - Message dropped during active reply run (16 comments)
8. #152759 - Update from 2026.9.4 to 2026.9.5 fails (15 comments)
9. #79902 - SQLite transcript/session seams (14 comments)
10. #107220 - Gateway crash-loop 2026.7.1 (CLOSED, 10 comments)

**Key PRs to analyze:**
1. #153159 - Move Board writes off Gateway thread
2. #153402 - Complete schema upgrades from 2026.9.2
3. #152889 - Resolve deep config nesting
4. #147886 - Feishu markdown table mode
5. #153216 - Await model and thinking persistence
6. #153198 - Navigate image attachments in galleries
7. #153302 - Settle task events before registry cleanup
8. #153075 - Slack/Discord discussion recovery (CLOSED)
9. #153424 - Reduce GitHub API work
10. #153337 - Preserve admitted worker history
11. #153399 - Reduce Gateway memory for shared-state workers
12. #153147 - Retain Doctor advisories (P0)
13. #153383 - MacOS Quick Chat redesign
14. #153249 - Show retained computer screenshots
15. #153320 - Stop rejecting preserved short status requests
16. #119674 - Scope systemd unit resolution
17. #153340 - Dynamic two-stage skill/tool pre-filtering
18. #112811 - MS Teams multiple bot accounts
19. #152510 - Reuse session snapshots

**Release Notes (v2026.9.5):**
- Linux companion v2026.9.5
- AppImage and Debian package

**Critical P0 issues for v2026.9.5:**
- #152744: Codex retained-state migration stuck
- #152759: Update 2026.9.4 to 2026.9.5 fails with doctor-failed
- #107220: Gateway crash-loop on 2026.7.1 (CLOSED)
- #153257: 8-hour failure recovery after upgrade
- #152689: Codex resident catalog retry loop fills tmpdir (CLOSED)
- #145929: Auth profile logout lock busy (CLOSED)
- #152981: Gateway startup hangs 17 minutes
- #153067: Gateway re-copies state DB every 5s (~5.9 TB/day)
- #101814: All channels broken after 2026.6.11 update
- #56217: 1Password secret provider crash-loop

**Patterns I notice:**
1. Many P0 issues relate to the just-released v2026.9.5 release, suggesting a problematic release
2. Several issues relate to Codex plugin integration
3. Memory/state management issues are prominent
4. Update/upgrade path issues are common
5. Several issues remain stale without progress

Let me write a comprehensive report in Chinese, professional and data-driven tone.

I should make sure to:
- Use precise data points
- Include GitHub links
- Be objective about the issues (v2026.9.5 seems problematic)
- Highlight community concerns
- Note any unaddressed issues

Let me draft the report now.</think>

# OpenClaw 项目动态日报

**日期**：2026-09-20  
**数据周期**：过去 24 小时  
**报告人**：开源项目分析师

---

## 1. 今日速览

OpenClaw 今日整体处于**高强度修复与发布质量整改**状态。过去 24 小时 Issues 与 PRs 各有 500 条更新，其中 Issues 关闭 144 条、PRs 合并/关闭 215 条，活跃度较平日显著上升，体现出 v2026.9.5 发布后的"震荡期"特征。

刚刚发布的 **Linux companion v2026.9.5**（含 AppImage 与 .deb 包）已引发**至少 4 个 P0 级 release-blocker** 缺陷（Codex retained-state 卡死、`openclaw update` 静默失败、Gateway 启动 17 分钟挂起、单 Worker 线程耗尽 CPU），版本质量承压明显。

社区讨论热度集中在三条主线：① 2026.9.5 升级路径与数据迁移缺陷；② Codex 插件与 session/state 一致性问题；③ WebUI 与 Gateway 长期累积的性能债。维护者侧已同步合入 30+ PR、关闭多项历史 P0，表明团队响应速度良好，但 backlog 中仍存在多项数月未动的"stale" 高优 issue。

**项目健康度评估**：⚠️ **承压运行** — 单次发版触发多条 P0，但响应与合并节奏稳健，长期 issue 积压需要清理。

---

## 2. 版本发布

### Linux companion v2026.9.5（新增）

| 类型 | 说明 |
|---|---|
| 包名 | OpenClaw-2026.9.5-amd64 (AppImage / .deb) |
| Commit | `ec9c1a1` |
| 配套插件 | Codex plugin 2026.9.5（含 `@openai/codex` 0.154.0） |
| 发布渠道 | `linux-stable`（OpenClaw Linux update channel） |

**已知严重问题（截至 2026-09-20 24h 内报告）**：

- [#152744](https://github.com/openclaw/openclaw/issues/152744)（已关闭）：Codex retained-state 迁移永不收敛，session-catalog 永久 cold — 影响范围广
- [#152759](https://github.com/openclaw/openclaw/issues/152759)（P0）：从 2026.9.4 升级到 2026.9.5 失败，`reason=doctor-failed`，自动回滚成功但用户无感知，npm 仍显示旧版本
- [#152689](https://github.com/openclaw/openclaw/issues/152689)（已关闭，P0）：Codex resident catalog 重试循环把 `os.tmpdir()` 写满 342 MB 重复抓取
- [#152981](https://github.com/openclaw/openclaw/issues/152981)（P0）：Gateway 启动在 `sidecars.model-runtime` 阶段挂死约 17 分钟
- [#152961](https://github.com/openclaw/openclaw/issues/152961)（已关闭）：单 agent Gateway 的一个 WorkerThread 持续吃满一核 CPU 且 RSS 不断增长
- [#153257](https://github.com/openclaw/openclaw/issues/153257)（P0）：用户报告升级后原本稳定的部署陷入长达 8 小时的故障恢复

**迁移注意事项**：
1. 升级前**强烈建议**手动备份 `~/.openclaw/workspace` 与 agent database
2. 若升级失败停留在 9.4，需查看 Doctor 是否给出 actionable 信息（[#152759](https://github.com/openclaw/openclaw/issues/152759) 反映目前提示缺失）
3. Codex 用户应关注 session-catalog 是否卡在空状态（[#152744](https://github.com/openclaw/openclaw/issues/152744)）

> 维护者侧已启动 [#153147](https://github.com/openclaw/openclaw/pull/153147)（P0，修复 Doctor 报告与升级终止状态丢失）和 [#153402](https://github.com/openclaw/openclaw/pull/153402)（P1，schema 升级修复）进行回应。

---

## 3. 项目进展（今日合并/关闭的重要 PR）

| PR | 标题 | 领域 | 状态 | 影响 |
|---|---|---|---|---|
| [#153075](https://github.com/openclaw/openclaw/pull/153075) | fix: recover Slack and Discord discussion after restarts | Discord/Slack | ✅ 关闭 | 修复 #152978；通道监视器重启后能恢复最近会话上下文，避免下一轮缺上下文 |
| [#153286 / #153296 / #153351](https://github.com/openclaw/openclaw/pull/153159) | Board 写入离 Gateway 线程 / 共享 fixture 修复（PR #153159 系列） | Gateway | 🔁 合并基础层 | 为 "Board 写入离 Gateway 线程"（[#153159](https://github.com/openclaw/openclaw/pull/153159)）奠定基础，缓解主线程被阻塞问题 |

**面向 v2026.9.5 修复的活跃 PR（已 close/ready）**：

- [#153147](https://github.com/openclaw/openclaw/pull/153147) **P0**：保留 Doctor 诊断信息与终端报告（修 #152759, #152918）— *ready for maintainer look*
- [#153402](https://github.com/openclaw/openclaw/pull/153402) **P1**：完成 2026.9.2 起的 schema 升级（修 #153401 系列回滚问题）
- [#153406](https://github.com/openclaw/openclaw/pull/153406)：更新前对 legacy exec-approvals 文件做冲突演练
- [#153409](https://github.com/openclaw/openclaw/pull/153409)：update repair 在 Gateway 已停时给出明确说明
- [#153419](https://github.com/openclaw/openclaw/pull/153419)：避免循环 plugin 迁移恢复建议

**关键架构与性能改进**：

- [#153335](https://github.com/openclaw/openclaw/pull/153335) + [#153337](https://github.com/openclaw/openclaw/pull/153337)：将 worker 转录读取异步化，保留已确认 worker history
- [#153216](https://github.com/openclaw/openclaw/pull/153216)：session 模型与思考写入改为异步走 agent database worker
- [#153399](https://github.com/openclaw/openclaw/pull/153399)：shared-state workers 启动时降低 Gateway 内存占用
- [#153279](https://github.com/openclaw/openclaw/pull/153279)：减少 outbound shared-state worker 启动导入
- [#153424](https://github.com/openclaw/openclaw/pull/153424)：降低 PR review 与 CI 轮询的 GitHub API 消耗

**UI 改进**：

- [#153198](https://github.com/openclaw/openclaw/pull/153198)：WebUI 图像附件左右键导航（带截图 proof）
- [#153383](https://github.com/openclaw/openclaw/pull/153383)：macOS Quick Chat 单一 composer 重设计
- [#153249](https://github.com/openclaw/openclaw/pull/153249)：在聊天中显示已保留的 computer screenshots
- [#153418](https://github.com/openclaw/openclaw/pull/153418)：async questions 在折叠态仍可见
- [#152510](https://github.com/openclaw/openclaw/pull/152510)：跨 subagent 树复用 session snapshot（与 #152067 联动，证据显示约 6 req/s × 49 viewer 的负载下降）

**整体进展评估**：🚧 **质量整改期** — 单日提交了 30+ 合并/关闭 PR，多数聚焦"线程卸载、状态一致性、升级路径可靠性"。架构层正在把同步 I/O 与阻塞路径逐步迁出 Gateway 主线程。

---

## 4. 社区热点

| 排名 | Issue / PR | 评论数 | 👍 | 关注点 |
|---|---|---|---|---|
| 1 | [#149361](https://github.com/openclaw/openclaw/issues/149361) — Umbrella: WebUI 性能与稳定性 | 50 | 0 | 跨桌面/移动端的 WebUI 综合缺陷集，需维护者驱动 |
| 2 | [#97616](https://github.com/openclaw/openclaw/issues/97616) — OpenClaw 泄漏未收割的 hook/tool 子进程 | 31 | 1 | 长期未修的僵尸进程积累，引发运行时降级 |
| 3 | [#152744](https://github.com/openclaw/openclaw/issues/152744) — Codex retained-state 迁移卡死 | 19 | 0 | 2026.9.5 重大回归；已关闭 |
| 4 | [#22438](https://github.com/openclaw/openclaw/issues/22438) — 分层 bootstrap 文件加载 | 18 | 0 | 节省 20-30% token；已有关联 PR open |
| 5 | [#38327](https://github.com/openclaw/openclaw/issues/38327) — Vertex/Gemini 3.1-pro-preview 回归 | 16 | 3 | 嵌入式 agent 直接报错 |
| 6 | [#68596](https://github.com/openclaw/openclaw/issues/68596) — 可配置 streaming watchdog 超时 | 16 | 8 | 长期推理模型（Kimi-K2.5, DeepSeek-R1）频繁触发误判 |
| 7 | [#139847](https://github.com/openclaw/openclaw/issues/139847) — reply 进行中到达的消息被丢弃 | 16 | 0 | 2026.9.2 回归 |

**背后诉求分析**：

1. **"稳定性 > 新功能"** — [#149361](https://github.com/openclaw/openclaw/issues/149361) 评论数最高但 0 赞，体现用户在 WebUI 上累积的体验债务。社区希望维护者主动整治而非持续打补丁
2. **"可控的资源行为"** — [#97616](https://github.com/openclaw/openclaw/issues/97616)、[#153067](https://github.com/openclaw/openclaw/issues/153067)（每 5s 复制 170 MB state DB，单实例一天 5.9 TB staging 写）、[#69242](https://github.com/openclaw/openclaw/issues/69242)（exec 工具 SIGKILL broad find）共同指向资源使用缺乏可观测性与限制
3. **"可调的策略边界"** — [#68596](https://github.com/openclaw/openclaw/issues/68596) 的 8 赞是今日 issue 中最高，反映用户希望根据模型特性调整运行时阈值
4. **"Context 工程优化"** — [#22438](https://github.com/openclaw/openclaw/issues/22438)、[#67419](https://github.com/openclaw/openclaw/issues/67419)（每轮重复注入 bootstrap 文件浪费 20-30% token）共同诉求：把 context 预算还给用户

---

## 5. Bug 与稳定性

### 🔴 P0（release-blocker）— 2026.9.5 直接关联

| Issue | 描述 | 状态 | 关联 Fix PR |
|---|---|---|---|
| [#152744](https://github.com/openclaw/openclaw/issues/152744) | Codex retained-state 迁移永不收敛，session-catalog 永久空 | ✅ 已关闭 | 已被合并基础层处理 |
| [#152759](https://github.com/openclaw/openclaw/issues/152759) | `openclaw update` 9.4→9.5 静默失败 | OPEN | [#153147](https://github.com/openclaw/openclaw/pull/153147) ready |
| [#152981](https://github.com/openclaw/openclaw/issues/152981) | Gateway 启动在 sidecars.model-runtime 挂 17 分钟 | OPEN | 待关联 |
| [#153257](https://github.com/openclaw/openclaw/issues/153257) | 9.5 升级后 8 小时故障恢复 | OPEN | 待关联 |
| [#152689](https://github.com/openclaw/openclaw/issues/152689) | Codex 重试循环填满 tmpdir (342 MB × N) | ✅ 已关闭 | — |
| [#152961](https://github.com/openclaw/openclaw/issues/152961) | 单 WorkerThread 吃满 CPU + RSS 持续上涨 | ✅ 已关闭 | — |
| [#56217](https://github.com/openclaw/openclaw/issues/56217) | 1Password secret provider crash-loop | OPEN | 待关联 |

### 🟠 P1（高优先级回归）

| Issue | 描述 | 状态 |
|---|---|---|
| [#38327](https://github.com/openclaw/openclaw/issues/38327) | Vertex/Gemini 3.1-pro-preview "Cannot convert undefined or null to object" | OPEN |
| [#97616](https://github.com/openclaw/openclaw/issues/97616) | 进程泄漏 / 僵尸积累 | OPEN（无 fix PR） |
| [#139847](https://github.com/openclaw/openclaw/issues/139847) | reply 进行中消息丢失（2026.9.2 回归） | OPEN，标 `fix-shape-clear` + `queueable-fix` |
| [#131150](https://github.com/openclaw/openclaw/issues/131150) | Slack DM 重启后静默丢失（19 账号 socket mode） | OPEN |
| [#90944](https://github.com/openclaw/openclaw/openclaw/issues/90944) | sessions_yield resume 不送达，用户拿到子 agent 原始摘要 | OPEN |
| [#114211](https://github.com/openclaw/openclaw/issues/114211) | Matrix 房间 agent 可见无回复输出循环 + stale session 重放 | OPEN，`platinum hermit` |
| [#119401](https://github.com/openclaw/openclaw/issues/119401) | Direct/DM NO_REPLY 无条件压制，无法强制可见回复 | OPEN |
| [#120162](https://github.com/openclaw/openclaw/issues/120162) | Safeguard compaction 共享超时预算导致整轮失败 | OPEN |
| [#107244](https://github.com/openclaw/openclaw/issues/107244) | WhatsApp 群消息永不进入 inbound（LID groups?） | OPEN |
| [#138139](https://github.com/openclaw/openclaw/issues/138139) | providerConfigMatchesRuntimeSnapshot 递归哈希大目录卡死事件循环 | OPEN |
| [#124133](https://github.com/openclaw/openclaw/issues/124133) | Beta blocker: snowluma `formatInboundEnvelope is not a function` | OPEN |
| [#101814](https://github.com/openclaw/openclaw/issues/101814) | 2026.6.11 升级后所有通道"每会话一条消息后永久沉默" | OPEN |
| [#92241](https://github.com/openclaw/openclaw/issues/922

---

## 横向生态对比

<think>The user is asking me to generate a horizontal comparative analysis report of the AI agent/personal AI assistant open source ecosystem based on the project dynamics summaries from 2026-09-20. I need to provide a well-structured, professional, data-driven report suitable for technical decision makers and developers.

Let me analyze the data from each project carefully:

**OpenClaw**: 
- 500 issues updated, 500 PRs updated, 1 new release (v2026.9.5)
- Very high activity, multiple P0 issues from latest release, quality rectification period
- Largest community by far (500 issues/PRs is enormous)
- Concerns: v2026.9.5 release quality issues, Codex integration problems
- Many first-time contributor activity

**NanoBot**:
- 2 issues, 33 PRs (all in 24h - very unusual, suggesting bulk rebases/cleanups)
- No releases
- Heavy internal refactoring by @chengyongru
- Security debt (#4072 open since May)
- Suspicious PR #5821 (potential spam)

**PicoClaw**:
- Very low activity (0 PRs, 0 releases)
- 3 issues, critical: TLS cert expired 10 days
- #3382 v0.3.1 regression
- Project in dormant state

**IronClaw**:
- Minimal activity (1 PR, no issues)
- Near-zero engagement
- Backlog of 1 PR (#7499, 40 days old)

**LobsterAI**:
- 2 issues, 7 PRs (all closed, none merged)
- Concern: stale-bot closing valid PRs
- Commercial direction
- 1 new PR for subscription features

**QwenPaw**:
- 16 issues, 23 PRs, 1 release (v2.2.2-beta.3)
- High activity, healthy mix
- Multiple security issues, plugin policy hooks trend
- Strong first-time contributor engagement

**Hermes Agent**:
- 50 issues, 50 PRs, no releases
- Big PR merge wave (model-provider plugin architecture)
- Many unresolved bugs (only 2 of 50 have fix PRs)
- Multiple platforms (Telegram, Discord) issues

**OpenHuman**:
- 5 issues, 20 PRs (85% merge rate)
- Major architectural refactor (SDK decoupling)
- 3 P0 fixes today
- Heavy single-contributor dependency (@senamakel)

Now let me structure the comparative analysis:

1. **生态全景** - Overall ecosystem status
2. **各项目活跃度对比** - Activity comparison table
3. **OpenClaw 在生态中的定位** - OpenClaw's positioning
4. **共同关注的技术方向** - Common technical directions
5. **差异化定位分析** - Differentiation analysis
6. **社区热度与成熟度** - Community heat & maturity
7. **值得关注的趋势信号** - Trend signals

Let me write this as a professional comparative analysis report in Chinese.</think>

# AI 智能体与个人 AI 助手开源生态横向对比分析

**报告日期**：2026-09-20
**覆盖项目**：OpenClaw、NanoBot、PicoClaw、IronClaw、LobsterAI、QwenPaw、Hermes Agent、OpenHuman（共 8 个）

---

## 1. 生态全景

当前 AI 智能体与个人 AI 助手开源生态呈现**高度分层、马太效应显著**的格局：以 OpenClaw 为代表的"超级项目"日均吞吐 500+ Issues/PRs，已形成事实上的生态中枢，而 PicoClaw、IronClaw 等项目则处于维护停滞或近休眠状态，活跃度差距高达百倍以上。整体技术演进集中在三条主线——**Provider 插件化架构收敛、Agent 上下文管理透明化、多通道（Discord/Telegram/Slack）适配器鲁棒性提升**。值得关注的是，几乎所有项目都面临共同的"成长阵痛"：**版本升级路径脆弱（Codex 迁移、OAuth PKCE、自更新崩溃）、Context 工程债务累积、WebUI/Console 自愈能力缺失**，这反映出整个行业仍处于从"功能堆叠"向"生产可用"过渡的关键阶段。

---

## 2. 各项目活跃度对比

| 项目 | 24h Issues | 24h PRs | Release | 合并/关闭 PR | 健康度 | 当前阶段 |
|---|:---:|:---:|:---:|:---:|:---:|:---|
| **OpenClaw** | 500 | 500 | ✅ v2026.9.5 | 215 | ⚠️ 承压运行 | 大规模修复期 |
| **Hermes Agent** | 50 | 50 | ❌ | 18 | 🟡 清理阶段 | 架构收敛 |
| **QwenPaw** | 16 | 23 | ✅ v2.2.2-beta.3 | 3 | 🟢 稳健迭代 | 多线并进 |
| **OpenHuman** | 5 | 20 | ❌ | 17 | 🟢 重构落地 | 架构解耦 |
| **NanoBot** | 2 | 33 | ❌ | 10 | 🟡 内部收敛 | 质量整顿 |
| **LobsterAI** | 2 | 7 | ❌ | 0（全部关闭） | 🔴 PR 通道受阻 | 商业化倾斜 |
| **PicoClaw** | 3 | 0 | ❌ | 0 | 🔴 基础设施告急 | 休眠 |
| **IronClaw** | 0 | 1 | ❌ | 0 | ⚪ 静默 | 停滞 |

**关键观察**：
- **OpenClaw 单日吞吐是其他所有项目之和的 3 倍以上**，社区规模优势极其显著
- **NanoBot 33 个 PR 但仅 2 条 Issue** 的不对称分布，提示项目正处于批量 rebase / 内部清理状态
- **LobsterAI 7 个 PR 全部关闭、零合并**，是当日最严重的 PR 处理通道异常
- **PicoClaw 与 IronClaw** 已跌出活跃梯队，进入维护风险区

---

## 3. OpenClaw 在生态中的定位

### 规模优势（断层式领先）

| 指标 | OpenClaw | 第二名（Hermes Agent） | 差距 |
|---|:---:|:---:|:---:|
| 日均 Issue 流量 | 500 | 50 | **10×** |
| 日均 PR 流量 | 500 | 50 | **10×** |
| 历史 P0 积压 | 14+ | 0–5 | — |
| 维护者响应速度 | 当日合并 215 PR | 当日合并 18 PR | **12×** |

### 与同类项目的关键差异

| 维度 | OpenClaw | Hermes Agent | OpenHuman | QwenPaw |
|---|---|---|---|---|
| **架构哲学** | 多线程 Gateway + Plugin Registry | Plugin-first + 外部进程 Provider | Core/Backend 严格分层 | Console-first + 多 Provider 治理 |
| **核心复杂度** | 极高（Gateway 多线程、Codex 集成） | 中（重点在 Plugin 系统） | 中（关注架构清晰度） | 中（关注 UI/UX 与扩展点） |
| **目标用户** | 企业+个人重度用户 | 第三方模型生态接入者 | 开发者与 embedder | 企业+第三方 MCP 集成者 |
| **生态广度** | 桌面+Linux+多通道 | CLI+Plugin | Rust crate 嵌入 | Web Console+Plugin |

**核心定位判断**：OpenClaw 已成为个人 AI 助手领域的**事实标准**与**基础设施层项目**——其 Gateway 多进程架构、Provider/Plugin 双层抽象、Linux companion 跨发行版分发能力，构成其他项目难以快速复制的护城河。但其复杂性也直接体现为版本质量震荡（v2026.9.5 触发 4+ P0），是"大项目病"的典型表征。

---

## 4. 共同关注的技术方向

| 技术方向 | 涉及项目 | 核心诉求 |
|---|---|---|
| **Provider 插件化 / OAuth PKCE** | OpenClaw（#153424）、Hermes Agent（#85139, #111194, #21695）、OpenHuman（#6362）、QwenPaw（#7843） | 第三方模型商可声明式接入，统一鉴权与能力元数据 |
| **Agent 上下文管理透明化** | OpenClaw（#68596, #22438）、NanoBot（#5820, #5403）、QwenPaw（#6668） | 解决"长会话突然失忆"与"token 静默截断"，让 consolidation 行为可观测、可配置 |
| **多通道适配器鲁棒性** | OpenClaw（#131150, #68502, #101814）、Hermes Agent（#68502, #116568）、QwenPaw（#107244）、PicoClaw（#3382） | Slack DM、Discord 线程、Telegram 重复消息等问题集中爆发，通道层生命周期管理尚未成熟 |
| **WebUI/Console 自愈能力** | OpenClaw（#149361, #68596）、QwenPaw（#7815, #7888, #7889）、NanoBot（#5808→#5809） | "页面崩溃必须硬刷新"是高频痛点，社区要求 React/前端层具备错误恢复能力 |
| **零停机升级 / State Migration** | OpenClaw（#152759, #152744, #153402）、Hermes Agent（#115638, #116614, #115466）、NanoBot（#5748） | 升级路径上的数据迁移与回滚机制成为"升级恐惧症"根源 |
| **Plugin 治理与 Policy Hook** | QwenPaw（#7878, #7880）、OpenClaw（#97616）、OpenHuman（#6362） | 暴露 pre-tool-call 策略钩子、Escalation-only tool policy 成为新的治理共识 |
| **依赖审计与供应链安全** | OpenHuman（#6353, #6355）、OpenClaw（#153424）、NanoBot（#4072） | 自动依赖审计脚本与 Dependabot 配置进入主流 |
| **自更新与 CLI 工具链** | NanoBot（#5817）、OpenClaw（#153424）、Hermes Agent（#115638） | `--dev` 快进、PyPI/源码双通道、健康检查成为标配 |

> **共识洞察**：上述方向中，**Provider 插件化**与**Context 透明化**是行业级共识，预计将在 2026 Q4–2027 Q1 形成可互操作的标准；**升级路径可靠性**则是当前最被低估的"隐性竞争力"。

---

## 5. 差异化定位分析

### 按功能侧重划分

| 侧重类型 | 代表项目 | 关键特征 |
|---|---|---|
| **桌面/个人助手级** | OpenClaw、LobsterAI、OpenHuman | 强 GUI、Tauri/Rust 桌面端、跨平台分发 |
| **CLI/开发者工具级** | Hermes Agent、NanoBot | 终端优先、Plugin 生态、CLI-first 工作流 |
| **Console/Web 优先** | QwenPaw | Web Console + 多 Provider 治理 + Plugin 策略 |
| **嵌入式/库级** | OpenHuman、IronClaw | Rust crate、embedder 友好、轻量宿主 |
| **轻量/单文件** | PicoClaw | Go 实现、单二进制、低资源占用 |

### 按目标用户划分

| 用户类型 | 推荐项目 | 理由 |
|---|---|---|
| **企业级重用户** | OpenClaw、QwenPaw | 多通道、多 worker、可观测性、生产可用性 |
| **独立开发者/CLI 重度用户** | Hermes Agent、NanoBot | 插件生态丰富、终端体验成熟 |
| **Rust 库集成者** | OpenHuman、IronClaw | crate 级 API、清晰分层、易嵌入 |
| **轻量部署/边缘场景** | PicoClaw | 单二进制、Go 性能、运维简单 |

### 关键技术架构差异

```
OpenClaw       : Gateway 主线程 + Worker Thread 池 + Plugin Registry + Codex 深度集成
Hermes Agent   : Plugin Catalog + External Process Provider + ACP 后端
OpenHuman      : Core/Backend 严格分层 + registry extension + TinyAgents Runtime
QwenPaw        : Web Console + 多 Provider 适配层 + Plugin Policy Hook
NanoBot        : WebSocket 实时 + 回放统一管线 + Provider 配置 UI 系统化
LobsterAI      : Electron + SQLite + MCP Bridge + 商业化订阅
PicoClaw       : 单进程 + Stream SDK + 轻量通道适配
IronClaw       : 无进程代理 + Host-mediated Passport + 嵌入式适配
```

---

## 6. 社区热度与成熟度

### 活跃度分层（基于当日数据）

**🥇 第一梯队（高活跃 · 大规模修复）**
- **OpenClaw**：500+500，单日 P0 数 ≥4，但响应迅速（215 PR 合并）。特征：典型"大项目阵痛期"，质量整改进行中。
- **Hermes Agent**：50+50，18 PR 合入形成合并浪潮。特征：v0.13.0 plugin 体系收尾。

**🥈 第二梯队（稳健迭代 · 多线并进）**
- **QwenPaw**：16+23，发布 v2.2.2-beta.3，新人贡献者密集。特征：生态扩张期，安全议题上升。
- **OpenHuman**：5+20，85% 合并率，重大架构解耦落地。特征：成熟期重构，单核心驱动。

**🥉 第三梯队（内部收敛 / 质量整顿）**
- **NanoBot**：2+33（不对称），批量 rebase 现象。特征：成熟项目收尾过渡。
- **LobsterAI**：2+7（全部关闭），商业化倾斜。特征：PR 通道受阻风险显现。

**⚠️ 第四梯队（停滞 / 风险）**
- **PicoClaw**：0 PR、官网 TLS 过期 10 天。特征：基础设施失守，需社区介入。
- **IronClaw**：1 PR 积压 40 天、零互动。特征：项目治理需要重启。

### 成熟度判断矩阵

```
高活跃  │  OpenClaw ●        Hermes ●
        │
        │
        │
        │  QwenPaw ●
中活跃  │           OpenHuman ●
        │  NanoBot ●
        │                            LobsterAI ●
低活跃  │                                    PicoClaw ●  IronClaw ●
        └──────────────────────────────────────────────
           早期/扩张         成熟/重构           衰退/停滞
```

---

## 7. 值得关注的趋势信号

### 🚀 趋势 1：Provider 插件化成为生态级共识

**信号强度**：⭐⭐⭐⭐⭐
**涉及项目**：OpenClaw、OpenHuman、Hermes Agent、QwenPaw
**关键证据**：单日内 4 个项目同时推进 Provider plugin 抽象（OAuth PKCE、External Process、BackendTransport、AgentScope Platform 内置）
**对开发者的参考价值**：构建第三方模型接入时，应以**声明式 plugin manifest**（含 OAuth flow、capability metadata、account usage 上报）为标准接口，避免重复造轮子。

### 🚀 趋势 2：Context 透明化与"consolidation"成为新战场

**信号强度**：⭐⭐⭐⭐
**涉及项目**：NanoBot（#5820, #5403）、OpenClaw（#68596, #22438）、QwenPaw（#6668）
**关键证据**：tiktoken 估算偏差、context 静默截断、bootstrap 文件重复注入成为高频痛点
**对开发者的参考价值**：现代模型下 prompt token 估算偏差可达 30-50%，**必须使用 API-reported prompt_tokens 而非本地 tiktoken** 触发 consolidation；暴露 consolidation 触发阈值给用户配置。

### 🚀 趋势 3：升级路径可靠性成为"隐性竞争力"

**信号强度**：⭐⭐⭐⭐
**涉及项目**：OpenClaw（#152759, #153147）、Hermes Agent（#115638, #116614）、NanoBot（#5748）
**关键证据**：所有"大项目"都遭遇过升级导致的数据丢失、migration 卡死、状态污染
**对开发者的参考价值**：设计 update 流程时需考虑 ① idempotent marker（如 fleet_restart_pending）② schema 升级的回滚路径 ③ Doctor 诊断信息的保留 ④ 失败时 actionable 的用户提示。

### 🚀 趋势 4：Plugin Policy Hook / 治理管线正在标准化

**信号强度**：⭐⭐⭐
**涉及项目**：QwenPaw（#7878, #7880）、OpenClaw、OpenHuman（registry extension）
**关键证据**：plugin 可见的 pre-tool-call policy hook 几乎同时在两个项目独立提出
**对开发者的参考价值**：插件生态的下一阶段不再是"能不能装"，而是"装上后能不能治理"——暴露决策预言机（policy oracle）是关键能力。

### 🚨 风险信号 1：Stale Bot 误杀有效 PR

**信号强度**：⭐⭐⭐
**涉及项目**：LobsterAI（#1069, #1070, #1072, #1075, #1076, #1077 全部关闭未合并）
**对开发者的参考价值**：维护者应建立"stale PR 维护者预审"中间环节，避免一次性自动关闭造成有效补丁流失与贡献者信任崩塌。

### 🚨 风险信号 2：基础设施失守

**信号强度**：⭐⭐⭐
**涉及项目**：PicoClaw（TLS 证书过期 10 天）、OpenHuman（Dependabot 配置缺失）
**对开发者的参考价值**：Let's Encrypt + certbot 自动续期、Dependabot 配置、安全公告 RSS 已成基础设施标配，任何一项缺失都会严重损害项目可信度。

### 📈 趋势 5：单核心驱动风险与社区韧性

**信号强度**：⭐⭐
**涉及项目**：NanoBot（@chengyongru 单人 5 PR）、OpenHuman（@senamakel 单人 15/20 PR）
**对开发者的参考价值**：单人高产是项目效率的体现，也是 bus factor 风险；建议维护者定期将核心决策权下放、明确 CODEOWNERS，避免关键人员流失导致项目停摆。

---

## 决策建议

### 对技术决策者

| 优先级 | 行动建议 |
|:---:|---|
| 🔴 | **短期内避免生产环境升级到 OpenClaw v2026.9.5**，等待 #153147, #153402 合并后再评估 |
| 🟠 | **建立跨项目监控**：针对 Provider 插件、Context consolidation、Plugin Policy Hook 三大方向，跟踪 4+ 项目的标准收敛进度 |
| 🟠 | **供应商风险分散**：避免将核心

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

<think>The user wants me to generate a daily report for the NanoBot project based on GitHub data. Let me analyze the data carefully and structure the report according to the 8 sections requested.

Let me go through the data:

**Issues (2 total):**
- #5808 [CLOSED] - WebUI follow-ups canceled by /stop replay after gateway restart - by @yu-xin-c
- #4072 [OPEN] - Security: ExecTool restricted workspace can be bypassed through relative symlinks - by @hamb1y (created 2026-05-29, updated 2026-09-19)

**PRs (33 total):**
- 23 open, 10 closed/merged

Let me look at the most important ones:

**New PRs (created today, 2026-09-20):**
- #5822 - refactor: remove expired write_stdin compatibility (chengyongru)
- #5821 - [security] added malicious skill (radhika-singh-10) - looks suspicious/malicious, low quality
- #5819 - refactor(webui): unify live and replay event projection (chengyongru)
- #5820 - fix(agent): remove local context tail truncation (chengyongru) - p1 priority

**Closed PRs (recent):**
- #5814 - fix(webui): remove intermediate answer footer gap (chengyongru) - p2
- #5809 - fix(agent): discard stopped follow-up recovery journal (yu-xin-c) - p2 - this closed #5808
- #5818 - chore: remove CLAUDE.md (chengyongru) - p2
- #5816 - feat(webui): polish provider setup and unify settings controls (Re-bin)

**Notable open PRs:**
- #5776 - feat(webui): add search to shared ProviderPicker (nikkoxgonzales) - p2
- #5606 - feat(email): filter by recipient alias (tilladam) - p2
- #4819 - fix(memory): replace WeakValueDictionary with plain dict for consolidation locks (axelray-dev) - p2, conflict
- #4820 - fix(runtime): reject non-string web fetch URLs (axelray-dev) - p2
- #4919 - feat(telegram): support custom Bot API base URL (nolanchic) - p2
- #5666 - feat(providers): add aimlapi.com provider (hugoaimlapi) - p2, conflict (commercial)
- #5641 - fix(webui): iOS PWA tap and status-bar fixes (morandot) - p2
- #5453 - feat(providers): add SenseNova provider (morandot) - p2, conflict
- #5403 - fix(memory): use API-reported prompt tokens to trigger consolidation (rickererer) - p1
- #5352 - Add model provider removal controls (bingqilinweimaotai) - p2, conflict
- #5748 - fix(recovery): persist partial tool progress at batch boundaries (xiexiahao) - p2
- #5817 - feat: add stable and source self-update flows (chengyongru)

Key observations:
1. Activity is very high - 33 PRs in 24 hours is unusual. This could indicate bulk updates/rebases, or that the project is in heavy development
2. The PR #5821 titled "[security, priority: p2] added malicious skill" looks suspicious - it's from a new contributor and has empty summary. This could be a spam/malicious PR
3. chengyongru is dominating the activity with multiple refactors and fixes
4. There's a security issue #4072 about symlink bypass that's been open since May 2026
5. Multiple conflicts in PRs suggest ongoing merge conflicts that haven't been resolved
6. Several provider additions (aimlapi, SenseNova) - ecosystem expansion

For the report, I should:
1. Be objective and professional
2. Note the suspicious PR #5821
3. Highlight the active contributors
4. Identify the security concern #4072 that's been open for months
5. Discuss the conflict PRs as backlog
6. Note the heavy refactor activity

Let me draft the report in Chinese as requested.</think>

# NanoBot 项目日报 · 2026-09-20

> 数据周期：2026-09-19 至 2026-09-20 · 数据源：GitHub REST API · 项目：HKUDS/nanobot

---

## 1. 今日速览

NanoBot 今日呈现出**高强度内部重构**态势：过去 24 小时内共 33 个 PR 变动（23 待合并、10 已关闭），远超日常节奏，提示项目处于一个明显的清理与收敛周期。核心贡献者 `@chengyongru` 单人今日提交 5 个 PR，覆盖 WebUI 重构、agent 上下文截断修复、过期兼容代码移除、自更新流程等关键路径，显示其正在系统性收尾 v0.3.x 阶段的遗留工作。社区侧 Issue 流量清淡（仅 2 条），但其中 **#4072（ExecTool 相对符号链接工作区绕过）自 2026-05-29 创建以来长期未得到修复**，是当前最值得维护者关注的存量安全债务。

---

## 2. 版本发布

今日无新版本发布。

---

## 3. 项目进展

今日共有 10 个 PR 进入已合并/已关闭状态，其中以下 4 个对项目方向具有实质推进意义：

| PR | 标题 | 影响域 | 链接 |
|---|---|---|---|
| #5809 | fix(agent): discard stopped follow-up recovery journal | Agent 会话状态一致性 | [#5809](https://github.com/HKUDS/nanobot/pull/5809) |
| #5814 | fix(webui): remove intermediate answer footer gap | WebUI 渲染细节 | [#5814](https://github.com/HKUDS/nanobot/pull/5814) |
| #5816 | feat(webui): polish provider setup and unify settings controls | WebUI 提供商 UX 一致性 | [#5816](https://github.com/HKUDS/nanobot/pull/5816) |
| #5818 | chore: remove CLAUDE.md | 仓库治理（删除仓库级 AI 协作说明文档） | [#5818](https://github.com/HKUDS/nanobot/pull/5818) |

**关键进展解读：**

- **#5809 关闭了 #5808**：用户通过 `/stop` 取消 WebUI 回合后，被取消的 follow-up 队列会残留在持久化恢复日志中，并在下一次 gateway 启动时由 `RecoveryCoordinator` 错误地重新入队。修复采用"在显式取消开始时为 durable ID 做快照，会话 worker 停止后仅确认该快照"的策略，避免误恢复已被用户主动中止的请求。
- **#5816 推进了设置面板的一致化**：统一 Provider logo 视觉规范（紧凑圆角、保留品牌色背景、移除白边 halo），并把 32px 控件规格应用到所有设置入口。这是从"功能堆叠"走向"设计系统化"的明显信号。
- **#5818 删除 CLAUDE.md**：暗示项目正在调整 AI 辅助开发文档的存放策略（可能转移到更细粒度的 AGENTS.md 或子目录指令），是 v0.4 准备期的治理动作之一。

**项目整体方向判断：** 今日的合并密度表明项目正在为下一版本做"减法"——剥离过渡期兼容代码、统一分散的 UI 组件、修复耐久化层的一致性缺陷，属于成熟期项目典型的"质量收敛"阶段。

---

## 4. 社区热点

由于今日 Issues 评论数普遍为 0，热点主要由 **PR 创建密度与评审压力** 体现：

**高关注度 PR（按交互时间排序，今日新增）：**

1. **#5822 — refactor: remove expired write_stdin compatibility**（@chengyongru）
   [链接](https://github.com/HKUDS/nanobot/pull/5822)
   诉求：在 v0.3.5 已发布的前提下，移除版本门控的 `write_stdin → exec_session` 重放迁移，让遗留 `write_stdin` 走通用工具展示路径。
   *诉求分析：清理已过期的迁移分支，降低维护表面积。*

2. **#5819 — refactor(webui): unify live and replay event projection**（@chengyongru）
   [链接](https://github.com/HKUDS/nanobot/pull/5819)
   诉求：让一个 React-free 的 TypeScript 线程事件投影器成为单一真相源，统一处理 delta、reasoning、tool/progress、file-edit、compaction、turn-end 等 UI 语义，让 WebSocket 实时推送与持久化线程回放走同一 reducer。
   *诉求分析：这是今日结构性影响最大的 PR，把"双轨渲染"收敛为单一管线，预计可消除一类长期潜伏的"实时与回放行为不一致"类 bug。*

3. **#5820 — fix(agent): remove local context tail truncation**（@chengyongru，**p1**）
   [链接](https://github.com/HKUDS/nanobot/pull/5820)
   诉求：删除静默截断历史尾部的本地路径，让 ephemeral turn 和 subagent 走共享的 LLM 驱动 consolidator，仅在摘要失败时保留有界原始 checkpoint 并显式失败。
   *诉求分析：这是今日唯一 p1 优先级 PR，直指"上下文窗口溢出时静默丢消息"这一对用户极不透明的行为问题，影响信任基础。*

4. **#5821 — [security] added malicious skill**（@radhika-singh-10，**⚠️ 标题与作者可疑**）
   [链接](https://github.com/HKUDS/nanobot/pull/5821)
   *风险提示：标题为"added malicious skill"，作者为低账号龄的外部贡献者，PR 描述为空。**此 PR 高度疑似垃圾/试探性提交**，维护者应在合并前严格审查 diff，并核实是否触碰 Skills 注册表、是否引入了新的可加载模块。建议直接关闭并标记 spam。*

---

## 5. Bug 与稳定性

按严重程度排列：

### 🔴 P1（高优先）

| 编号 | 标题 | 状态 | 链接 |
|---|---|---|---|
| #5820 | fix(agent): remove local context tail truncation | PR OPEN（今日新开） | [#5820](https://github.com/HKUDS/nanobot/pull/5820) |
| #5403 | fix(memory): use API-reported prompt tokens to trigger consolidation | PR OPEN（自 2026-08-16 起，已 #5402 引用） | [#5403](https://github.com/HKUDS/nanobot/pull/5403) |

**说明：**
- **#5820** 修复"上下文超限时本地路径静默截断尾部历史"，可能导致 agent 丢失关键早期指令而用户毫不知情。今日已提交，待评审。
- **#5403** 修复本地 tiktoken 估算对现代模型低估 30-50% prompt token、导致 consolidation 永不触发的严重 bug。该 PR 仍是 OPEN 状态，**已存在超过一个月**，建议尽快合并或分配 reviewer。

### 🟡 P2（中优先）

| 编号 | 标题 | 状态 | 链接 |
|---|---|---|---|
| #5808 → #5809 | WebUI follow-up 在 /stop 后被错误恢复 | ✅ 已通过 #5809 关闭 | [#5808](https://github.com/HKUDS/nanobot/issues/5808) |
| #5814 | WebUI 中部回答 footer 留白 | ✅ 已合并 | [#5814](https://github.com/HKUDS/nanobot/pull/5814) |
| #5748 | 恢复时只在批边界外持久化 tool 进度，批中间崩溃会丢失已完成副作用的证据 | PR OPEN | [#5748](https://github.com/HKUDS/nanobot/pull/5748) |
| #5641 | iOS PWA 侧栏首击被吞 + 状态栏问题 | PR OPEN | [#5641](https://github.com/HKUDS/nanobot/pull/5641) |
| #4820 | runtime 未拒绝非字符串 web fetch URL，导致缓存签名污染 | PR OPEN（自 2026-07-06） | [#4820](https://github.com/HKUDS/nanobot/pull/4820) |
| #4819 | memory 用 WeakValueDictionary 存 consolidation 锁导致 GC 后锁失效 | PR OPEN（自 2026-07-06，**标记 conflict**） | [#4819](https://github.com/HKUDS/nanobot/pull/4819) |

**回归风险提示：**
- #4819 与 #5403 同属 memory 子系统，但 #4819 已有 conflict 标记，提示与主线已发生偏离，需要 rebase 后再审。

### 🔒 安全类（未修复，长期 open）

- **#4072 — ExecTool 工作区限制可通过相对符号链接绕过**（自 2026-05-29 OPEN）
  [链接](https://github.com/HKUDS/nanobot/issues/4072)
  Shell 守卫检查命令文本与绝对路径，但**未在 shell 执行前解析相对符号链接**，攻击者可在工作区内放置指向 `/etc/passwd` 等敏感路径的 symlink，从而读取工作区外内容。**截至今日仍无关联 PR**，是项目目前最显眼的存量安全债。

---

## 6. 功能请求与路线图信号

今日有较高概率进入下一版本的功能方向：

### 强烈信号（已有 PR，处于活跃评审区）

| 方向 | 代表 PR | 成熟度 | 链接 |
|---|---|---|---|
| 自更新流程（PyPI 稳定版 + `--dev` 源码快进） | #5817 | 新，今日提交 | [#5817](https://github.com/HKUDS/nanobot/pull/5817) |
| 统一 WebUI 事件投影（实时 + 回放） | #5819 | 新，今日提交 | [#5819](https://github.com/HKUDS/nanobot/pull/5819) |
| Provider 移除控件（带引用检查） | #5352 | 中等，conflict 需 rebase | [#5352](https://github.com/HKUDS/nanobot/pull/5352) |
| ProviderPicker 搜索/过滤 | #5776 | 中等 | [#5776](https://github.com/HKUDS/nanobot/pull/5776) |
| Email 按收件人别名过滤 | #5606 | 中等 | [#5606](https://github.com/HKUDS/nanobot/pull/5606) |
| Telegram 自定义 Bot API base + 额外 header | #4919 | 中等 | [#4919](https://github.com/HKUDS/nanobot/pull/4919) |

### 路线图扩张信号（新 Provider 集成）

- **aimlapi.com** —— #5666（commercial 50/50 partnership 提议，需评估商业关系）
  [链接](https://github.com/HKUDS/nanobot/pull/5666)
- **SenseNova（商汤日日新）** —— #5453（OpenAI 兼容协议，三模型覆盖）
  [链接](https://github.com/HKUDS/nanobot/pull/5453)

两个 Provider PR 均带 **conflict** 标记，意味着它们与主线 Provider 接口演进存在摩擦，可能需要合并前先抽象出新的 Provider 注册接口。

### 潜在下一版本主打功能

综合今日合并动作与待审 PR 密度，下一版本（推测为 v0.4 或 v0.3.6）主打方向可能为：

1. **agent 上下文管理透明化**（#5820 去除静默截断）
2. **耐久化恢复一致性**（#5809 + #5748）
3. **WebUI 设置面板设计系统化**（#5816 + #5776）
4. **nanobot CLI 自更新能力**（#5817）

---

## 7. 用户反馈摘要

今日 Issues 评论数均为 0，无新的显式用户反馈涌入。但从已关闭的 #5808 摘要可推断的**真实用户痛点**：

> **痛点场景**：用户在 WebUI 中通过 `/stop` 中断一个长任务回合后，重启 gateway 时被中断的 follow-up 又"复活"，导致 agent 在用户已经放弃的上下文上继续执行、产生不可预期的副作用或回复。
>
> **用户期望**：主动取消必须是幂等且持久的——取消动作必须一次性、不可逆地终结关联的所有排队与持久化请求，而不是仅仅清空内存队列。
>
> **满意方向**：#5809 通过"快照 durable ID + 取消完成前不确认"的策略正面回应了这一痛点，预期可在下一版本消除该用户挫败感。

其他可从 PR 描述中提炼的**用户场景信号**：

- **iOS PWA 用户**（#5641）：在 Safari 中点击会话行首次点击被 `:hover` 链式应用吞掉，需要两次点击才进入会话——这是从桌面端迁入移动端的典型 PWA UX 摩擦。
- **共享邮箱用户**（#5606）：同一邮箱被多个 alias（`assistant@` / `team@`）共用时，agent 无法区分来信原本投递到哪个 alias，导致 channel 误把同一封邮件当作多来源处理。
- **Telegram 企业自托管用户**（#4919）：需要把 bot 流量指向私有 Bot API 代理网关以满足合规要求。
- **memory 上下文用户**（#5403）：现代模型下本地 tiktoken 估算严重低估 token 数，导致 consolidation 永远不触发，长会话在数小时后"突然失忆"——这是 LLM 应用层的隐性数据丢失场景。

---

## 8. 待处理积压

按"重要性 × 久期"排序，提醒维护者关注：

### 🔴 必须尽快响应

| 编号 | 类型 | 标题 | 久期 | 链接 |
|---|---|---|---|---|
| #4072 | Issue | **Security**: ExecTool 工作区可通过相对符号链接绕过 | **116 天**（2026-05-29 起） | [#4072](https://github.com/HKUDS/nanobot/issues/4072) |
| #5403 | PR (p1) | memory: 用 API 报告的 prompt token 触发 consolidation | 35 天 | [#5403](https://github.com/HKUDS/nanobot/pull/5403) |
| #5402 | Issue | memory consolidation 在现代模型下永不触发的根因 issue | （#5403 引用） | — |

### 🟡 需 rebase 解决的 conflict PR

| 编号 | 标题 | 久期 | 链接 |
|---|---|---|---|
| #4819 | fix(memory): WeakValueDictionary → plain dict 存 consolidation 锁 | 107 天 | [#4819](https://github.com/HKUDS/nanobot/pull/4819) |
| #5352 | Add model provider

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

<think>Let me analyze the GitHub data for PicoClaw and generate a daily report for 2026-09-20.

Key observations from the data:
1. Activity is low - 0 PRs, 0 releases in the past 24 hours
2. 3 issues updated, 1 closed, 2 still open/active
3. Issue #3377 is CRITICAL - TLS certificate expired on 2026-09-10, making picoclaw.io inaccessible
4. Issue #3382 is a regression - bug from #973 (closed in March 2026) has resurfaced in v0.3.1
5. The channel panic bug (send on closed channel in client.go:161) appears to be a regression

Let me structure this report professionally and objectively.</think>

# PicoClaw 项目动态日报
**日期：2026-09-20**

---

## 1. 今日速览

PicoClaw 今日整体活跃度**偏低**，过去 24 小时内无 PR 提交、无新版本发布，Issue 层面仅有 3 条更新记录。但需要警惕的是，其中两条均指向**严重的稳定性与可用性问题**：一是官方站点 picoclaw.io 的 TLS 证书已于 10 天前过期仍未续签，导致网站对所有浏览器不可达；二是此前在 v0.3.0 阶段已修复并关闭的 QQ/钉钉通道 panic 问题，在 v0.3.1 中疑似**回归**。社区反馈渠道当前畅通，但维护者响应节奏明显放缓。

---

## 2. 版本发布

**无新版本发布。** 最近一次发版节奏未在今日数据中体现，建议关注仓库 tags 以确认最新可用版本与 v0.3.1 的修复状态。

---

## 3. 项目进展

今日**无 PR 合并或关闭**，项目代码层面向前推进为零。具体表现：

- 待合并 PR 数：**0**
- 已合并/关闭 PR 数：**0**
- 关联 commit 活动：仅 Issue #3382 中提及 v0.3.1 对应 commit `2cf030d2`，表明构建已发布但修复未跟进。

**评估**：在已有 CRITICAL 级 Issue（证书过期）和疑似回归 Bug 双重压力下，维护者当日零代码提交属于异常信号，建议社区主动 ping 维护组。

---

## 4. 社区热点

### 🔥 #3377 - TLS 证书过期，官网全面瘫痪 ⭐ 最高优先级
- **链接**：https://github.com/sipeed/picoclaw/issues/3377
- **作者**：@dimonb
- **创建**：2026-09-12 | **更新**：2026-09-19
- **评论**：1 | **👍**：1
- **标签**：[OPEN] [stale] [CRITICAL]
- **摘要**：picoclaw.io 的 TLS 证书于 2026-09-10 23:59:59 UTC 到期，所有浏览器与 TLS 客户端均拒绝连接。该问题从 9 月 12 日报告至今已 8 天，issue 仍处于 OPEN 状态，并被标记为 [stale]（疑似 Bot 自动标记为无活动），暗示维护者尚未介入。
- **诉求分析**：这并非代码 Bug，而是**基础设施运维失守**。对于一个开源项目而言，官网是用户第一印象来源，证书过期 10 天未处理严重损害项目可信度。用户痛点集中在"找不到入口""以为是项目已停更"。

### 🔥 #3382 - v0.3.1 中钉钉网关 panic 回归
- **链接**：https://github.com/sipeed/picoclaw/issues/3382
- **作者**：@HenryLoveMiller
- **创建**：2026-09-20 | **评论**：0 | **👍**：0
- **摘要**：报告者明确指出这是已关闭 issue #973 的**同款回归**，在 v0.3.1（commit 2cf030d2）+ `dingtalk-stream-go` v0.9.1 的 pin 条件下，`client.go:161` 仍会因 `send on closed channel` 触发 panic。复现时间为今日 10:46 CST。
- **诉求分析**：报告者措辞专业、复现步骤完整、附带 commit 引用与上游 SDK 版本信息，属于高质量 Bug 报告。这暗示 v0.3.0 → v0.3.1 升级过程中**未充分覆盖通道层回归测试**。

---

## 5. Bug 与稳定性

按严重程度排列：

| 优先级 | Issue | 描述 | 状态 | Fix PR |
|:---:|:---|:---|:---:|:---:|
| 🔴 P0 | [#3377](https://github.com/sipeed/picoclaw/issues/3377) | picoclaw.io TLS 证书过期，官网不可达 | OPEN（已被标记 stale） | ❌ 无 |
| 🟠 P1 | [#3382](https://github.com/sipeed/picoclaw/issues/3382) | v0.3.1 DingTalk 流式 SDK 重连 panic（`send on closed channel` @ `client.go:161`） | OPEN（今日新建） | ❌ 无 |
| 🟢 P2 | [#973](https://github.com/sipeed/picoclaw/issues/973) | 历史 Bug：QQ/钉钉长连接隔夜后 panic（client.go:244 ws 消息队列关闭） | CLOSED | ✅ 已关闭，但未阻止 #3382 复发 |

**关键信号**：
- #973 虽于 2026-03-02 关闭，但其 panic 模式（`message queue is closed`）与 #3382 的 `send on closed channel` 高度同构，**说明原修复可能仅做了表层处理**，未根治通道生命周期管理问题。
- 维护者需要审视 v0.3.0 → v0.3.1 的 changelog，明确是否引入或调整了 `client.go` 相关逻辑。

---

## 6. 功能请求与路线图信号

今日**无新增功能请求 Issue**。但从两条现有 Issue 可推断路线图隐患：

1. **通道连接鲁棒性**应成为下一版本的明确主题——钉钉 Stream SDK 重连逻辑显然缺乏幂等与 channel 关闭保护。
2. **运维自动化**短板暴露：官网证书管理、stale issue 巡检均缺乏自动化守护流程，建议纳入 v0.3.2 或 v0.4.0 的"项目治理"工作流。

---

## 7. 用户反馈摘要

提炼自今日活跃 Issue 的评论与描述：

- **😡 痛点 1（基础设施信任）**：用户因 picoclaw.io 不可达，可能误判项目已停止维护（#3377 评论）。
- **😟 痛点 2（生产可用性）**：企业用户使用 DingTalk 网关时遭遇 panic 重连，无法支撑"夜间挂机"场景，对 7×24 在线机器人需求强烈（#3382 复现动机）。
- **😌 满意点**：暂无新增积极反馈。
- **🤔 隐含期待**：#3382 报告者主动引用 commit hash 与 SDK 版本，体现出**深度集成用户**对项目的期待——他们要求明确的回归测试覆盖，而不仅仅是 issue 关闭。

---

## 8. 待处理积压

| Issue | 标题 | 创建日期 | 已开天数 | 风险 |
|:---|:---|:---:|:---:|:---|
| [#3377](https://github.com/sipeed/picoclaw/issues/3377) | TLS 证书过期 | 2026-09-12 | **8 天** | 🔴 官网瘫痪、用户流失、品牌损害 |
| [#3382](https://github.com/sipeed/picoclaw/issues/3382) | DingTalk panic 回归 | 2026-09-20 | 0 天 | 🟠 新建但已影响 v0.3.1 用户 |

**对维护者的建议**：
1. **立即**续签 picoclaw.io 的 TLS 证书（或启用自动续期如 Let's Encrypt + certbot）。
2. **优先**为 #3382 提一个 PR：在 `client.go:161` 附近增加 `select { case ch <- msg: default: ... }` 与 `recover()` 兜底，并补充长连接隔夜测试用例。
3. 检查所有被标 stale 但实际未解决的 Issue，避免被自动关闭。

---

## 项目健康度评分：⭐⭐☆☆☆（2/5）

**评分依据**：
- ❌ 官网证书过期 10 天未处理
- ❌ 0 PR / 0 Release
- ❌ 存在已修复 Bug 的回归
- ✅ 社区能产出高质量复现报告
- ✅ Issue 通道畅通

> **一句话总结**：PicoClaw 今日处于"代码层休眠、运维层告急"的非典型状态，建议社区与维护者尽快就 #3377 和 #3382 协同推进修复，以恢复项目基础公信力。

---
*报告生成基于 GitHub 公开数据，数据时点：2026-09-20。*

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

<think>The user wants me to generate a daily report for the IronClaw project based on the GitHub data provided. Let me analyze the data carefully:

1. No issues updated in the last 24 hours
2. 1 PR updated (still open), created on 2026-08-11, last updated 2026-09-19
3. No new releases

The PR is #7499 about "host-mediated Passport for practitioners" - it's a large docs + dependencies PR from a new contributor, still open with 0 likes and undefined comments.

Let me write a structured daily report in Chinese, being objective and data-driven. I need to be careful to note that since there's very little activity, the report should reflect the relatively quiet state of the project on this particular day.

Let me think about each section:

1. **今日速览** - Very low activity, only 1 PR still open, no new releases, no issue activity. Overall the project seems to be in a quiet period.

2. **版本发布** - None, skip or briefly mention.

3. **项目进展** - No merged PRs, so the main "progress" is that there's an open PR that's been pending for over a month.

4. **社区热点** - The only notable item is PR #7499. 0 likes, undefined comments count (which is interesting - might mean it has no comments yet).

5. **Bug 与稳定性** - No bug reports.

6. **功能请求与路线图信号** - The PR itself is a feature addition (host-mediated Passport), which could be a roadmap signal.

7. **用户反馈摘要** - No issue comments to summarize.

8. **待处理积压** - PR #7499 has been open since 2026-08-11 (about 39 days), which qualifies as a backlog item. 0 thumbs up suggests low community engagement so far.

Let me write this up properly with all the links and dates.</think>

# IronClaw 项目动态日报

**报告日期：2026-09-20**
**数据来源：[nearai/ironclaw](https://github.com/nearai/ironclaw)**

---

## 1. 今日速览

过去 24 小时 IronClaw 仓库整体活跃度处于**低位静默期**：无新增/活跃 Issues、无已关闭议题、无新版本发布，唯一可见的代码仓动态是 1 条仍待合并的 Pull Request（[#7499](https://github.com/nearai/ironclaw/pull/7499)）。项目当前没有显著的社区互动信号（0 评论、0 👍），需要关注积压 PR 的处理进度以避免社区贡献者流失。

---

## 2. 版本发布

**本节无内容。** 过去 24 小时内未检测到任何新的 Release 发布。

---

## 3. 项目进展

**本节无内容。** 过去 24 小时没有 PR 被合并或关闭，未产生实际合入主线或文档站点的代码进展。

---

## 4. 社区热点

| 排名 | 类型 | 标题 | 链接 | 互动数据 |
|------|------|------|------|----------|
| 1 | PR | feat(identyclaw): host-mediated Passport for practitioners | [#7499](https://github.com/nearai/ironclaw/pull/7499) | 👍 0 · 💬 评论数未返回 |

**分析：**
[#7499](https://github.com/nearai/ironclaw/pull/7499) 是过去 24 小时唯一被更新的条目，但其社区关注度极低（0 👍、评论数未返回），表明尚未在社区层面形成讨论热度。该 PR 由新贡献者 [@discernible-io](https://github.com/discernible-io) 提交，主题聚焦于"host-mediated Passport"——一种让无 Shell 环境、无扩展安装权限的 IronClaw 代理能够调用 IdentyClaw Passport 身份认证能力的轻量宿主适配层，属于面向"从业者（practitioners）"落地场景的关键能力补充。

---

## 5. Bug 与稳定性

**本节无内容。** 过去 24 小时未报告任何新的 Bug、崩溃或回归问题。

---

## 6. 功能请求与路线图信号

- **host-mediated Passport 能力**（[#7499](https://github.com/nearai/ironclaw/pull/7499)）
  - 该 PR 提议通过内置宿主接缝（`builtin.idcp` + 策略授权/AskAlways 例外）让 IronClaw 代理能够直接调用 IdentyClaw Passport 身份认证。
  - 同时在 `deploy/identyclaw/` 下提供从业者宿主工具包（Node CLI + 可选的回环辅助服务监听 `:3921`）。
  - 涉及范围为 **文档 + 依赖**，size 标注为 **XL**，风险评估为 **low**，由新贡献者提交。
  - **纳入下一版本的概率判断：** 中等偏低——尽管设计方向与 IronClaw 向"无进程代理 / 嵌入式场景"扩展的战略契合，但 XL 体积 + 0 社区互动 + 新贡献者的组合通常需要核心维护者 1-2 轮 review 才能推进，短期进入下一 release 的可能性不高。

---

## 7. 用户反馈摘要

**本节无内容。** 过去 24 小时没有活跃的 Issues 可用于提炼用户评论与痛点。

---

## 8. 待处理积压

| 编号 | 类型 | 标题 | 创建日期 | 已开时长 | 风险/规模 | 链接 |
|------|------|------|----------|----------|-----------|------|
| #7499 | PR | feat(identyclaw): host-mediated Passport for practitioners | 2026-08-11 | **40 天** | low / XL | [🔗](https://github.com/nearai/ironclaw/pull/7499) |

**维护者提醒：**
- PR [#7499](https://github.com/nearai/ironclaw/pull/7499) 自 2026-08-11 创建起已开放约 40 天，最近一次更新为 2026-09-19（昨日），但社区反馈与维护者审阅迹象不明显。
- 鉴于贡献者为首次提交者，建议核心维护者主动跟进：
  1. 确认 PR 是否仍与主分支兼容（防止长期积压导致的合并冲突）；
  2. 评估 XL 体积是否可拆分（例如将文档与代码变更分离）；
  3. 给出明确的 review 时间窗口，避免新贡献者流失。

---

### 📊 项目健康度小结

| 指标 | 当前值 | 评估 |
|------|--------|------|
| Issues 活跃度 | 0 | 🟢 无积压但也无新输入，建议关注上游渠道 |
| PR 流转速度 | 1 待合并 / 0 合并 | 🟡 单点积压，需维护者介入 |
| Release 节奏 | 24h 内 0 发布 | ⚪ 数据样本不足以判定，需拉长周期观察 |
| 社区互动 | 0 👍 / 评论缺失 | 🟡 新贡献者 PR 缺乏可见支持信号 |
| 整体判断 | **静默期** | 建议维护者在本周内对积压 PR 做出明确响应，以维持贡献者信心 |

---

*报告生成时间：2026-09-20 · 数据样本窗口：2026-09-19 → 2026-09-20（UTC）*

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

<think>Let me analyze the GitHub data provided for LobsterAI and generate a daily report for 2026-09-20.

Key observations:
1. **Activity Level**: Moderate - 2 issues, 7 PRs all closed, no new releases
2. **Important pattern**: Most issues and PRs are marked as "[stale]" - they were created back in March 2026 but only updated on 2026-09-19, then closed on 2026-09-20. This suggests a stale-bot cleanup or maintainer batch review.
3. **Today's fresh activity**: Only PR #2720 was created today (2026-09-20) - about subscription features (¥0.01 trial, low-credit offers)
4. **Stale cleanup**: 6 PRs (#1069, #1070, #1072, #1075, #1076, #1077) and 1 issue (#1071) were all closed likely due to staleness

Notable PRs being closed (stale):
- #1072: SQLite data integrity fixes (closing issue #1071) - concerning that this fix is being closed as stale
- #1075: Windows build fix when WSL installed - useful fix
- #1076: Scheduled task migration data loss bug - serious bug
- #1077: UI refresh after agent deletion
- #1069: Major refactor of CoworkSessionDetail
- #1070: Per-session MCP toggle

Open issue: #1014 - about adding a description for Dispatch discoverability

Let me craft the report now, being careful about the stale issue - these appear to be closed by automated stale bot rather than meaningful merge, which is significant for project health.

Actually, looking more carefully - PRs being closed as "stale" rather than "merged" is a major concern. These are real PRs with real fixes that got closed without merging. This should be highlighted as a project health concern.

Let me write a comprehensive report in Chinese as requested.</think>

# LobsterAI 项目日报
**日期：2026-09-20**

---

## 一、今日速览

LobsterAI 今日整体活跃度处于**中等偏低**水平：过去 24 小时内共产生 2 条 Issue 更新与 7 条 PR 更新，但**无新版本发布**，且**所有 7 条 PR 均以关闭收尾（无任何合并）**。最值得警惕的是，6 条 PR 与 1 条 Issue 在 2026-09-19 被刷新后于今日被批量关闭，且标题均带有 `[stale]` 标签，**极可能是 Stale Bot 自动清理或维护者批量处置长期未跟进贡献的结果**，而非正常合并流程。这意味着仓库中多个实际可用补丁（包括 SQLite 数据完整性修复、Windows 构建修复、定时任务数据丢失修复等）未进入主干。唯一今日新建的 PR #2720 围绕订阅商业化功能（¥0.01 试用 + 低余额优惠），反映出团队重心向商业化倾斜。整体项目健康度：**需要关注，PR 处理通道存在堵塞风险**。

---

## 二、版本发布

**无新版本发布。** 当前暂无 release 标签更新。建议维护者明确版本节奏，避免长期无发版导致用户与贡献者信心流失。

---

## 三、项目进展

### 今日新建 PR（1 条）

| PR | 标题 | 作者 | 状态 |
|---|---|---|---|
| [#2720](https://github.com/netease-youdao/LobsterAI/pull/2720) | feat(subscription): add one-cent trial and low-credit purchase offers | @Mind-Hand | 待处理 |

**推进方向分析：**
- PR #2720 是今日唯一"活着"的 PR，覆盖**主进程 IPC 活动状态获取 → 客户端频控（每周一次、累计关闭 3 次后停止弹窗）→ Portal 结算跳转 → 埋点完整链路**，体现出订阅产品商业化的成熟思路。
- 模块涉及 `area: renderer`、`area: docs`、`area: main`、`area: cowork` 四端联动，是一项端到端功能。

### 今日关闭的 PR（7 条，全部为 stale）

**需特别警示：以下 6 条 PR 在被刷新后又批量关闭，未合并进主干，可能造成有效补丁流失：**

| PR | 内容 | 实际价值 |
|---|---|---|
| [#1072](https://github.com/netease-youdao/LobsterAI/pull/1072) | SQLite 存储层三个数据完整性/可靠性缺陷修复 | ⭐ 高价值（修孤儿消息、非原子写、永久故障） |
| [#1075](https://github.com/netease-youdao/LobsterAI/pull/1075) | Windows + WSL 环境下构建失败修复 | ⭐ 高价值（解锁一类 Windows 用户构建链路） |
| [#1076](https://github.com/netease-youdao/LobsterAI/pull/1076) | 定时任务 Run History 迁移写入失败后仍标记完成（数据永久丢失） | ⭐ 严重 Bug 修复 |
| [#1077](https://github.com/netease-youdao/LobsterAI/pull/1077) | 删除当前 agent 后任务列表不自动刷新 | 中价值（UI 一致性） |
| [#1069](https://github.com/netease-youdao/LobsterAI/pull/1069) | 拆分 2100+ 行 CoworkSessionDetail.tsx 单文件 | ⭐ 高价值（性能 + 可维护性） |
| [#1070](https://github.com/netease-youdao/LobsterAI/pull/1070) | 支持 per-session MCP 开关控制 | ⭐ 高价值（多场景 Agent 灵活配置） |

**项目整体推进评估：净进展为负**——今日并无新功能或修复正式合入主干，反而损失了多个有效贡献。

---

## 四、社区热点

| 话题 | 链接 | 评论数 | 分析 |
|---|---|---|---|
| Dispatch 工具发现能力描述补充 | [#1014](https://github.com/netease-youdao/LobsterAI/issues/1014) | 1 | 由第三方（VisionAIrySE 的 Dispatch 服务）主动提议添加 `technology-search` skill 的描述以提升在 Claude Code runtime 中的可发现性，反映 LobsterAI 的生态已被外部 Agent 工具市场收录。 |
| 商业化功能（¥0.01 试用 / 低余额优惠） | [#2720](https://github.com/netease-youdao/LobsterAI/pull/2720) | 0 | 商业化功能首次集中提交，预期会引起付费用户与转化漏斗相关讨论。 |

**社区诉求信号**：外部生态已开始反向寻找 LobsterAI 的能力节点，但项目本身对社区贡献（PR）的响应通路明显受阻。

---

## 五、Bug 与稳定性

按严重程度排序：

| 等级 | 问题 | 关联 | 是否有 Fix PR |
|---|---|---|---|
| 🔴 P0 数据丢失 | 定时任务 Run History 迁移失败仍标记完成 → **生产数据永久丢失** | [#1076](https://github.com/netease-youdao/LobsterAI/pull/1076) | ❌ Fix PR 已关闭（stale） |
| 🔴 P0 数据丢失 | SQLite `save()` 非原子写，崩溃可致数据库损坏 | [#1071](https://github.com/netease-youdao/LobsterAI/issues/1071) / [#1072](https://github.com/netease-youdao/LobsterAI/pull/1072) | ❌ Fix PR 已关闭（stale） |
| 🟠 P1 永久故障 | `storeInitPromise` 超时后系统进入永久不可用状态 | [#1071](https://github.com/netease-youdao/LobsterAI/issues/1071) | ❌ |
| 🟠 P1 数据膨胀 | `ON DELETE CASCADE` 失效，孤儿消息无限累积 | [#1071](https://github.com/netease-youdao/LobsterAI/issues/1071) | ❌ |
| 🟡 P2 构建阻塞 | Windows 安装 WSL 后构建失败（`scripts/build-openclaw-runtime.sh: No such file or directory`） | [#1075](https://github.com/netease-youdao/LobsterAI/pull/1075) | ❌ Fix PR 已关闭（stale） |
| 🟢 P3 UI 一致性 | 删除当前 agent 后左侧任务列表未刷新 | [#1077](https://github.com/netease-youdao/LobsterAI/pull/1077) | ❌ |

**⚠️ 严重提示**：所有 P0/P1 级别的数据丢失类 Bug 虽已有明确修复 PR，但**今日均被关闭而非合并**，意味着这些缺陷在主干代码中仍然存在，对生产用户构成持续风险。建议维护者优先复核 #1072、#1076 是否可快速合并。

---

## 六、功能请求与路线图信号

1. **Per-session MCP 开关（#1070）**：方向与"OpenClaw 生态桌面级 Agent 功能拓展"一致，是用户对 MCP 灵活编排能力的典型诉求。该 PR 已在引擎层（McpBridgeServer）和 UI 层（Popover）都做了实现，**纳入下一版本的概率较高**（前提是 PR 被重新激活）。
2. **CoworkSessionDetail 重构（#1069）**：纯性能与可维护性改进，无业务风险，路线图友好的"应该做"类工作。
3. **¥0.01 试用 + 低余额优惠（#2720）**：明确的商业化路线图项目，预计与下个商业版本绑定发布。
4. **Dispatch 生态接入（#1014）**：来自第三方工具市场的可发现性请求，虽小但**信号意义大**——意味着 LobsterAI 正在进入外部 Agent runtime 的视野。

---

## 七、用户反馈摘要

由于今日活跃评论极少（总评论数 ≤ 3），可直接抽取的真实用户痛点有限：

- **来自 Issue #1014 的间接反馈**：第三方 Claude Code 工具发现平台 Dispatch 已索引 LobsterAI 的 `technology-search` skill，反映出**该 skill 在开发者圈层已具备一定曝光度**，但缺乏官方描述文档支持发现体验。
- **来自 PR 描述中的隐性用户痛点**：
  - SQLite 层缺陷（#1071/#1072）暗示有用户在长时间使用后遇到了**消息丢失或数据库损坏**，影响信任。
  - 定时任务迁移失败（#1076）说明**升级路径上的数据迁移可靠性未达生产标准**。
  - WSL 用户构建失败（#1075）说明 **Windows 开发者群体是被阻塞的潜在贡献者来源**。

---

## 八、待处理积压提醒

| 项目 | 状态 | 风险 | 链接 |
|---|---|---|---|
| SQLite 三项数据完整性缺陷修复 PR #1072 | 今日被关闭（stale） | 🔴 数据丢失风险未消除 | [链接](https://github.com/netease-youdao/LobsterAI/pull/1072) |
| 定时任务数据丢失修复 PR #1076 | 今日被关闭（stale） | 🔴 数据丢失风险未消除 | [链接](https://github.com/netease-youdao/LobsterAI/pull/1076) |
| Windows WSL 构建修复 PR #1075 | 今日被关闭（stale） | 🟠 Windows 贡献者受阻 | [链接](https://github.com/netease-youdao/LobsterAI/pull/1075) |
| Per-session MCP 开关 PR #1070 | 今日被关闭（stale） | 🟠 用户核心诉求未落地 | [链接](https://github.com/netease-youdao/LobsterAI/pull/1070) |
| CoworkSessionDetail 重构 PR #1069 | 今日被关闭（stale） | 🟡 性能债务累积 | [链接](https://github.com/netease-youdao/LobsterAI/pull/1069) |
| Agent 删除 UI 刷新 PR #1077 | 今日被关闭（stale） | 🟢 小回归 | [链接](https://github.com/netease-youdao/LobsterAI/pull/1077) |
| Issue #1014（Dispatch 描述补充） | OPEN（stale） | 🟢 生态接入机会 | [链接](https://github.com/netease-youdao/LobsterAI/issues/1014) |

**给维护者的建议**：
1. **优先复核 #1072 与 #1076**——这两个 P0 数据丢失修复不应因 staleness 而流失，建议合并或转交给内部工程师跟进。
2. **审慎对待 stale 关闭策略**：当前批量关闭有效 PR 的方式会显著打击外部贡献者积极性，建议对 `[stale]` PR 增加"维护者预审 → 合并或拒绝 → 再关闭"的中间环节。
3. **明确版本节奏**：长期不发版会同时影响用户信心与贡献者动机。

---

*数据来源：GitHub Issues & Pull Requests (narrative 范围 2026-09-19 ~ 2026-09-20)。本报告由 AI 分析生成，仅供参考。*

</details>

<details>
<summary><strong>QwenPaw</strong> — <a href="https://github.com/agentscope-ai/QwenPaw">agentscope-ai/QwenPaw</a></summary>

<think>The user wants me to generate a project status report for QwenPaw (an open-source project in the AI agent and personal AI assistant domain) based on GitHub data from the past 24 hours. Let me analyze the data carefully and create a comprehensive report.

Let me organize the information:

**Data Overview:**
- 24h Issues updates: 16 (all new/active, 0 closed)
- 24h PR updates: 23 (20 pending, 3 merged/closed)
- New releases: 1 (v2.2.2-beta.3)

**Release v2.2.2-beta.3:**
- fix(console): restore assistant response actions by @zhijianma (#7851)
- fix(e2e): re-anchor console selectors broken by the #7502 redesign and harden session-list assertions by @yutai78786

**Issues Analysis:**
1. #7815 - Console recovery from failed lazy page chunk load
2. #7859 - Persistent prompt injection in tool-result system-reminders (security)
3. #7878 - Feature: plugin-visible pre-tool-call policy hook
4. #5182 - Feature: optimize model configuration (long-standing)
5. #7881 - Bug: kimi-code ACP runner bypasses boundary checks
6. #7599 - Bug: MissingSessionID on opencode go
7. #7884 - Question: chat history too short
8. #7888 - Bug: Chat page stuck on "Something went wrong" - insertBefore NotFoundError
9. #7895 - Bug: idle cleanup can untrack replacement consumers
10. #7883 - Bug: tool-returned PDF serialization issue with DeepSeek
11. #7866 - Bug: file-area tab shows pre-edit content
12. #7879 - Bug: MCP OAuth handshake failure for static Bearer Key MCP servers
13. #7877 - Bug: session-level working directory panel issues
14. #7890 - Bug: zero-downtime reload loses plugin runtime hooks
15. #7882 - Bug: OpenCode "free" models return 403
16. #7891 - Release duty for v2.2.2-beta.3

**PR Analysis:**
Closed/Merged:
- #7892 - chore: bump version to 2.2.2b4 (CLOSED)
- #6399 - feat: add reranker UI config panel (CLOSED)
- #7863 - fix(ci): stabilize Windows reload and snapshot tests (CLOSED)

Open PRs (key ones):
- #7893 - fix(memory): restore runtime after backend rollback
- #7894 - test(console): raise frontend statement coverage
- #7345 - Fix/tool card stuck calling after stop
- #7861 - feat(console): add authenticated multi-tab chat terminal
- #7843 - feat(providers): add AgentScope Platform as built-in provider
- #7835 - fix(memory): stop leaking auto-memory-recall payload to channels
- #7889 - fix(console): recover from transient DOM-mutation render errors
- #6668 - feat(providers): support responses prompt caching
- #6381 - perf(drivers): avoid blocking on stale capabilities
- #7880 - feat(plugins): add escalation-only tool policy hooks
- #7867 - fix(console): revalidate file-area tab content on activation
- #7832 - fix(providers): make context-window override explicit
- #7869 - fix(providers): send OpenCode session header
- #7868 - perf(runtime): cache immutable artifacts on per-request build hot path
- #7865 - fix(console): recover when chat stream dies mid-run
- #7829 - perf(console): split chat dependencies and lazy-load locales
- #7886 - fix(agents): handle unknown input_audio rejections

Let me structure the report according to the requested format:

1. 今日速览 - Overall status summary
2. 版本发布 - v2.2.2-beta.3 details
3. 项目进展 - Merged/closed important PRs
4. 社区热点 - Most active issues/PRs
5. Bug 与稳定性 - Bugs reported today
6. 功能请求与路线图信号 - Feature requests
7. 用户反馈摘要 - User feedback
8. 待处理积压 - Backlog

I should be objective, professional, data-driven, and highlight project health. Each item should include a GitHub link.

Let me think about the project health:
- Very active day: 16 issues, 23 PRs, 1 release
- Healthy mix of bug fixes, features, and tests
- Multiple security-related concerns (#7859 prompt injection, #7881 kimi-code boundary bypass, #7879 MCP OAuth)
- Strong first-time contributor activity (multiple [first-time-contributor] tagged PRs)
- Some long-standing issues like #5182 from June
- Good test coverage improvements

Let me write this in Chinese as requested (the user prompt is in Chinese).</think>

# QwenPaw 项目动态日报
**日期：2026-09-20**
**项目：agentscope-ai/QwenPaw**

---

## 1. 今日速览

QwenPaw 今日呈现**高强度、多线并进**的研发节奏：过去 24 小时内共有 16 条 Issue 活跃更新、23 条 PR 提交，其中 3 条已完成流转，1 个 Beta 版本（v2.2.2-beta.3）正式发布。社区参与度持续高涨，多位首次贡献者（[first-time-contributor] 标签）集中提交了 Console 体验修复、性能优化和插件治理等方向的 PR。值得关注的是，**安全相关 Issue**（#7859 提示词注入、#7881 kimi-code 边界绕过、#7879 MCP OAuth 失败）密集出现，反映出生态扩展过程中权限与接口边界正成为新的关注焦点。整体而言，项目活跃度处于高位，健康度良好，研发节奏稳定。

---

## 2. 版本发布

### v2.2.2-beta.3（Beta）

- **发布日期**：2026-09-20
- **安装核验跟踪 Issue**：[#7891](https://github.com/agentscope-ai/QwenPaw/issues/7891)（release-duty bot，截止 2026-09-20 07:07 UTC 需四项检查全部通过）

**主要变更**：

| 类型 | 内容 | 作者 | 链接 |
|---|---|---|---|
| fix(console) | 恢复 assistant 响应区域的交互操作按钮 | @zhijianma | [#7851](https://github.com/agentscope-ai/QwenPaw/pull/7851) |
| fix(e2e) | 修复 #7502 重构导致的 console 选择器失效，并加固会话列表断言 | @yutai78786 | — |

**破坏性变更**：根据现有变更内容，未发现破坏性 API/配置变更。  
**迁移注意事项**：从 v2.2.1 升级至 beta 通道需要切换 release 通道；前端用户在 #7502 重构之后可能遇到选择器失效问题，本 beta 已修复。建议在生产环境继续使用 v2.2.1 稳定版，beta 通道主要用于早期验证。

---

## 3. 项目进展

今日 **3 条 PR 完成流转**：

| PR | 类型 | 内容 | 链接 |
|---|---|---|---|
| [#7892](https://github.com/agentscope-ai/QwenPaw/pull/7892) | chore | 将版本号 bump 至 2.2.2b4 | @cuiyuebing |
| [#6399](https://github.com/agentscope-ai/QwenPaw/pull/6399) | feat | 在 ReMeLightMemoryCard 中加入 reranker 后端 UI 配置面板（Under Review 已闭环） | @lecheng2018 |
| [#7863](https://github.com/agentscope-ai/QwenPaw/pull/7863) | fix(ci) | 稳定 Windows 上 reload 与快照测试（设置 `app_dir`、固定 LF checkout 校验 SHA-256） | @jinliyl |

**整体推进**：项目在 **Console 自愈能力**（#7885/#7889/#7865 流死亡恢复、#7888 DOM mutation 错误恢复、#7815 chunk 加载失败恢复）、**运行时性能**（#7829 chat bundle 拆分 + locale 懒加载、#7868 per-request 不可变产物缓存、#6381 MCP capability stale 优化）以及 **Provider 治理**（#7843 AgentScope Platform 内置、#7869 OpenCode Session header、#7832 context window 显式化）三条主线上同步推进，前端鲁棒性与后端性能均有实质性进展。

---

## 4. 社区热点

按评论数与互动密度排序：

| 排名 | 主题 | 类型 | 评论 | 链接 |
|---|---|---|---|---|
| 1 | Console 懒加载 chunk 失败后无法自愈（需硬刷新） | Bug | 5 | [#7815](https://github.com/agentscope-ai/QwenPaw/issues/7815) |
| 2 | 工具结果 system-reminder 中持续存在要求删除所有 skills 的提示词注入 | 安全 Bug | 4 | [#7859](https://github.com/agentscope-ai/QwenPaw/issues/7859) |
| 3 | 请求暴露 plugin 可见的 pre-tool-call policy hook（治理管线决策预言机） | Feature | 3 | [#7878](https://github.com/agentscope-ai/QwenPaw/issues/7878) |
| 4 | kimi-code ACP runner 边界/破坏性命令检查绕过（Edit 拦截、Write 与 Bash 完全盲区） | Bug | 2 | [#7881](https://github.com/agentscope-ai/QwenPaw/issues/7881) |
| 5 | opencode go 模型返回 MissingSessionID | Bug | 2 | [#7599](https://github.com/agentscope-ai/QwenPaw/issues/7599) |
| 6 | 聊天历史太短，翻不到旧消息 | 用户反馈 | 2 | [#7884](https://github.com/agentscope-ai/QwenPaw/issues/7884) |
| 7 | Chat 页因 `<font>` 包装 React 节点卡死"Something went wrong" | Bug | 2 | [#7888](https://github.com/agentscope-ai/QwenPaw/issues/7888) |

**诉求分析**：热点集中在 **Console 鲁棒性** 与 **安全治理** 两个方向。前者反映出用户对"页面崩了必须手动刷新"的强不满；后者提示词注入与 ACP runner 边界绕过问题则表明，随着 QwenPaw 接入更多第三方模型与协议（kimi-code、企查查 MCP），安全审计的需求正在上升。**#7878 的 policy hook 提案** 与 **#7880 的 escalation-only tool policy hooks PR** 几乎同时出现，说明社区已经在为"插件化治理"形成共识。

---

## 5. Bug 与稳定性

按严重程度排列：

### 🔴 高危（安全 / 数据 / 不可恢复）

| Issue | 描述 | 是否有 Fix PR |
|---|---|---|
| [#7859](https://github.com/agentscope-ai/QwenPaw/issues/7859) | 工具结果 system-reminder 中持续存在 prompt injection，要求 agent 删除全部 skills | ❌ 暂无 |
| [#7881](https://github.com/agentscope-ai/QwenPaw/issues/7881) | kimi-code ACP runner 中 Write(新文件) 与 Bash 完全绕过边界/破坏性命令检查 | ❌ 暂无（设计层面讨论中） |
| [#7879](https://github.com/agentscope-ai/QwenPaw/issues/7879) | MCP 配置触发 OAuth 握手失败（缺 client_id/resource），无法接入静态 Bearer Key MCP（如企查查 QCC） | ❌ 暂无 |
| [#7890](https://github.com/agentscope-ai/QwenPaw/issues/7890) | 零停机 reload 静默丢弃 plugin runtime hook（middleware 仍保留），一致性 bug | ❌ 暂无 |

### 🟠 中危（功能阻塞 / 体验严重受损）

| Issue | 描述 | 是否有 Fix PR |
|---|---|---|
| [#7815](https://github.com/agentscope-ai/QwenPaw/issues/7815) | Console 懒加载页面失败后无法自愈 | ❌ 暂无 PR |
| [#7888](https://github.com/agentscope-ai/QwenPaw/issues/7888) | Chat 页因 React 节点 `<font>` 包装卡死 | ✅ [#7889](https://github.com/agentscope-ai/QwenPaw/pull/7889) |
| [#7883](https://github.com/agentscope-ai/QwenPaw/issues/7883) | 工具返回 PDF 序列化为 OpenAI 嵌套 file part，DeepSeek 返回 400 | ❌ 暂无（#7597 修复不完整） |
| [#7866](https://github.com/agentscope-ai/QwenPaw/issues/7866) | Agent 改写文件后 file-area tab 仍显示旧内容 | ✅ [#7867](https://github.com/agentscope-ai/QwenPaw/pull/7867) |
| [#7599](https://github.com/agentscope-ai/QwenPaw/issues/7599) | opencode go 模型 MissingSessionID | ⚠️ [#7869](https://github.com/agentscope-ai/QwenPaw/pull/7869)（部分相关，发送 session header） |

### 🟡 低危（UI / 体验细节）

| Issue | 描述 | 是否有 Fix PR |
|---|---|---|
| [#7877](https://github.com/agentscope-ai/QwenPaw/issues/7877) | 会话级工作目录面板：浏览可视区仅约 3 行、"最近项目"恒为空、"应用"按钮禁用 | ❌ 暂无 |
| [#7895](https://github.com/agentscope-ai/QwenPaw/issues/7895) | UnifiedQueueManager idle cleanup 取消错误的 replacement consumer | ❌ 暂无 |
| [#7882](https://github.com/agentscope-ai/QwenPaw/issues/7882) | OpenCode "免费"模型 403 FreeTierError，UI 仍标为免费 | ❌ 暂无 |
| [#5182](https://github.com/agentscope-ai/QwenPaw/issues/5182) | 模型配置功能统一化（长期 Issue，2026-06-14 创建） | ❌ 暂无 |

---

## 6. 功能请求与路线图信号

| Issue / PR | 诉求 | 状态 | 链接 |
|---|---|---|---|
| [#7878](https://github.com/agentscope-ai/QwenPaw/issues/7878) + [#7880](https://github.com/agentscope-ai/QwenPaw/pull/7880) | 暴露 plugin 可见的 pre-tool-call policy hook，作为治理管线的"决策预言机" | PR 已 Open，ready for maintainer review | 高优先级候选 |
| [#5182](https://github.com/agentscope-ai/QwenPaw/issues/5182) | 统一模型配置（向量/文本/音视频） | 长期未处理 | 路线图建议纳入 |
| [#7884](https://github.com/agentscope-ai/QwenPaw/issues/7884) | 聊天历史留存更长 | 用户反馈 | 需要官方说明默认窗口策略 |
| [#7843](https://github.com/agentscope-ai/QwenPaw/pull/7843) | 内置 AgentScope Platform provider（OpenAI 兼容） | PR Open | 与官方生态绑定 |
| [#7861](https://github.com/agentscope-ai/QwenPaw/pull/7861) | Console 增加鉴权的多 tab 聊天终端（xterm） | PR Open | 大型功能 |
| [#6668](https://github.com/agentscope-ai/QwenPaw/pull/6668) | OpenAI Responses provider 支持 prompt caching（GPT-5.6+） | PR Open（长期） | 路线图候选 |

**预测**：基于 Issue + PR 配对模式，**plugin policy hook（#7880）** 与 **AgentScope Platform provider（#7843）** 极有可能在 v2.2.x 后续版本或 v2.3.0 落地。统一模型配置（#5182）虽然是高呼声议题，但近 3 个月未见 PR，落地时机仍不明朗。

---

## 7. 用户反馈摘要

| 反馈主题 | 来源 | 用户痛点 |
|---|---|---|
| **聊天历史太短** | [#7884](https://github.com/agentscope-ai/QwenPaw/issues/7884) | 用户语气强烈（"知道这个体验多差么？？？"），反映出"上下文回溯"是高频被忽视的体验短板 |
| **页面崩溃需手动刷新** | [#7815](https://github.com/agentscope-ai/QwenPaw/issues/7815) | 多个 Console 自愈类 Issue 集中爆发，用户对"白屏/Error 屏"容忍度低 |
| **接入第三方 MCP 不顺畅** | [#7879](https://github.com/agentscope-ai/QwenPaw/issues/7879) | 静态 Bearer Key MCP（如企查查 QCC）用户被 OAuth 流程挡在门外，典型"配置体验与文档不一致"问题 |
| **"免费"标签与实际行为不符** | [#7882](https://github.com/agentscope-ai/QwenPaw/issues/7882) | OpenCode 多个模型在 UI 标"免费"，实际 API 返回 403，损害用户信任 |
| **kimi-code 工具调用边界存在盲区** | [#7881](https://github.com/agentscope-ai/QwenPaw/issues/7881) | 用户已经从"报告 bug"升级到"提供 4 条设计层面事实"，是高级用户深度参与的体现 |
| **首次贡献者积极** | [#7880](https://github.com/agentscope-ai/QwenPaw/pull/7880)、[#7865](https://github.com/agentscope-ai/QwenPaw/pull/7865)、[#7867](https://github.com/agentscope-ai/QwenPaw/pull/7867)、[#7868](https://github.com/agentscope-ai/QwenPaw/pull/7868) | 单日 4 条 [first-time-contributor] PR，社区新鲜血液充沛 |

---

## 8. 待处理积压

维护者需要关注的**长期或高优先级未结 Issue**：

| 优先级 | Issue | 创建时间 | 等待天数 | 说明 |
|---|---|---|---|---|
| 🔴 高 | [#5182](https://github.com/agentscope-ai/QwenPaw/issues/5182) | 2026-06-14 | ~98 天 | 统一模型配置，社区高呼声但无 PR，建议维护者发起设计讨论 |
| 🟠 中 | [#

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/NousResearch/hermes-agent">NousResearch/hermes-agent</a></summary>

<think>The user wants me to generate a daily project report for Hermes Agent based on GitHub data from 2026-09-20. Let me analyze the data carefully and produce a structured report in Chinese.

Let me first understand the data:
- 50 Issues updated in past 24h (43 new/active, 7 closed)
- 50 PRs updated in past 24h (32 pending, 18 merged/closed)
- No new releases
- This is a NousResearch/hermes-agent project

Key observations:
1. Multiple "fleet_restart_pending marker" bugs - this seems to be a recurring issue (#115638, #116614, #115466)
2. Lots of model provider plugin work (closed PRs around it)
3. Telegram gateway issues
4. Discord platform issues
5. OpenRouter integration issues
6. LSP issues
7. Auth/scope issues

Let me categorize:

**Most commented Issues:**
- #115638 (8 comments): fleet_restart_pending marker undischargeable
- #115466 (7 comments): self-update TypeError
- #32737 (5 comments): Tirith shell scanner blocking pipe-to-interpreter
- #49567 (5 comments): Docker dashboard 0.0.0.0 issue
- #21685 (4 comments, CLOSED): v0.13.0 provider plugins
- #68502 (4 comments): Telegram gateway duplicate messages
- #114456 (4 comments): Async delegation completion notice
- #105560 (4 comments): Windows computer_use
- #116213 (4 comments): Cron openai-codex OAuth
- #115306 (4 comments): Gemini keys no longer work

**Important merged/closed PRs:**
- #116644 (closed/invalid): merge from upper
- #94231 (closed): fix auth defer config import
- #85139 (closed): OAuth PKCE plugins
- #21695 (closed): wire API-key model-provider plugins
- #116437 (closed): honor provider catalogs in API-key setup
- #113870 (closed): admit plugin external_process providers
- #113653 (closed): plugin-declared per-model capability metadata
- #113466 (closed): plugins report account usage
- #113418 (closed): opencode-go plan limits in /usage
- #111610 (closed): plugin-owned interactive auth
- #111194 (closed): Support out-of-tree external_process model providers
- #103319 (closed): support generic external-process providers
- #102548 (closed): auto-inject ACP external-process providers

Lots of closed PRs around model-provider plugin architecture - looks like a big merge wave happened today.

**Open PRs (still pending):**
- #116649: cron satellite results to primary Discord bot
- #116642: Telegram LaTeX rendering
- #116650: accept live OpenRouter models
- #116645: opt-in below 64K context floor
- #116647: xmemo community memory provider
- #116646: cron preserve custom provider model choices
- #116572: model-provider plugin error classification

Let me organize this into the requested format.

Note: The dates in the data span May-September 2026, which is the future, but that's what the prompt specifies. The "today" is 2026-09-20.

I'll write in Chinese with a professional tone, data-driven.

Let me draft the report:

1. **今日速览**: 
   - High activity: 50 issues + 50 PRs
   - Major cleanup wave: 18 PRs merged/closed, mostly model-provider plugin architecture
   - Several P2 bugs still open (fleet_restart_pending markers, Telegram duplicates)
   - No releases today
   - Active community engagement with 8 comments on top issue

2. **版本发布**: None

3. **项目进展**: Big PR merge wave - 18 closed/merged, including:
   - OAuth PKCE declarative plugins (#85139)
   - External process providers (#111194, #103319, #102548, #113870)
   - Provider capability metadata (#113653)
   - Plugin auth (#111610)
   - Account usage reporting (#113466, #113418)
   - Provider catalogs in API-key setup (#116437)
   - API-key plugin integration (#21695)
   - Auth config import order (#94231)

4. **社区热点**: 
   - #115638 (8 comments) fleet_restart_pending issue
   - #115466 (7 comments) self-update TypeError
   - #32737 (5 comments) Tirith shell scanner
   - #49567 (5 comments, 2 likes) Docker dashboard auth gate

5. **Bug 与稳定性**:
   - Critical: fleet_restart_pending marker (multiple issues)
   - High: Telegram duplicate messages, Gemini key auth regression, OpenRouter model rejection
   - Medium: Windows computer_use bounds, Discord admission gate, LSP timeout
   - With fix PR: #115466 related to self-update, #115656 (salvage in #116649)

6. **功能请求**:
   - #90319: profile/Bot creation as opt-in agent-callable tool
   - #89325: Auto-unarchive sessions on inbound activity
   - #116648: Bot Mode metadata API
   - #99051 (closed): OAuth PKCE - now done in PR #85139

7. **用户反馈**:
   - Real users hitting update errors (claudiolozano)
   - Pain with Docker + dashboard (chic1018)
   - Gemini key regression (DanielArndt)
   - Large state.db restart loop (nesquena-hermes)
   - Hermes agent itself filing bugs (shira022)

8. **待处理积压**:
   - #32737 from 2026-05-26 still open (Tirith)
   - #105560 Windows computer_use still open
   - Many features labeled P3 backlog

Let me write the final report now. I should be detailed and use specific numbers and links.</think>

# Hermes Agent 项目日报

**日期：2026-09-20**
**项目：NousResearch/hermes-agent**

---

## 1. 今日速览

Hermes Agent 今日维持高活跃度，过去 24 小时共处理 **50 条 Issue 更新**（新开/活跃 43、关闭 7）与 **50 条 PR 更新**（待合并 32、合并/关闭 18）。**未发布新版本**，但 Git 端出现一次明显的合并浪潮——约 18 个历史遗留 PR（多数与 model-provider 插件架构相关）被集中关闭/合并，显示出 v0.13.0 插件体系正在收尾并向主干汇合。社区端反馈依然以**安装/更新路径上的崩溃**、**多通道（Discord/Telegram）消息重复或丢失**、**第三方模型商鉴权回归**为三大主线，最热的 #115638（fleet_restart_pending 无法清除）已累计 8 条评论但暂无修复 PR。整体看项目处于"清理阶段"：批量合入架构性补丁 + 多条高优先级 Bug 待根治。

---

## 2. 版本发布

无新版本发布。

---

## 3. 项目进展

今日合并/关闭 18 个 PR，集中体现了 model-provider 插件架构的成熟与多个长期挂在低优先级的功能落地：

| PR | 模块 | 进展 |
|---|---|---|
| [#85139](https://github.com/NousResearch/hermes-agent/pull/85139) | providers / auth | **新增声明式 OAuth 2.0 PKCE 插件支持**（自 2026-08-13 起累积） |
| [#111194](https://github.com/NousResearch/hermes-agent/pull/111194) | agent / acp / plugins | 支持 out-of-tree `external_process` 模型提供者（ACP 后端） |
| [#102548](https://github.com/NousResearch/hermes-agent/pull/102548) | cli / acp / plugins | ACP `external_process` 提供者自动注入 `/model` 选择器 |
| [#103319](https://github.com/NousResearch/hermes-agent/pull/103319) | cli / plugins / auth | 通用外部进程提供者支持（接续 #111194） |
| [#113870](https://github.com/NousResearch/hermes-agent/pull/113870) | agent / cli / acp | 修补 #102421：让 plugin `external_process` provider 出现在 model picker 中 |
| [#113653](https://github.com/NousResearch/hermes-agent/pull/113653) | agent / plugins / config | **插件可声明每模型能力元数据** |
| [#113466](https://github.com/NousResearch/hermes-agent/pull/113466) | agent / plugins / usage-cost | 插件可上报账户/套餐用量 |
| [#113418](https://github.com/NousResearch/hermes-agent/pull/113418) | agent / usage-cost | `/usage` 显示 opencode-go 套餐额度（对齐 openai-codex/anthropic/openrouter） |
| [#111610](https://github.com/NousResearch/hermes-agent/pull/111610) | cli / plugins / auth | 插件可拥有自己的交互式鉴权（`hermes auth` UX 复用） |
| [#21695](https://github.com/NousResearch/hermes-agent/pull/21695) | cli / plugins | **API-key model-provider 插件接入运行时与 `/model`**（关闭 #21685） |
| [#116437](https://github.com/NousResearch/hermes-agent/pull/116437) | cli / plugins | API-key 首次设置时尊重插件目录 |
| [#94231](https://github.com/NousResearch/hermes-agent/pull/94231) | cli / auth | 鉴权模块推迟 config 导入（修复插件注册竞态） |

> **评估：** 这次合并浪潮基本把 v0.13.0 plugin 系统的"打地基"工作收口，下一阶段应聚焦在现有插件在多通道、多 profile、auth-gate 下的实际跑通。今日无 PR 明确推进更新/安装器路径（虽然它仍是用户最大痛点之一）。

---

## 4. 社区热点

按评论数排序的活跃议题：

| 排名 | Issue | 评论 | 👍 | 主题 |
|---|---|---|---|---|
| 1 | [#115638](https://github.com/NousResearch/hermes-agent/issues/115638) | 8 | 0 | fleet_restart_pending 在 `hermes update` 崩溃后无法清除（无 inventory） |
| 2 | [#115466](https://github.com/NousResearch/hermes-agent/issues/115466) | 7 | 0 | v0.21.1→v0.21.3 自更新报 `TypeError: _find_stale_dashboard_pids() got 'scope_home'`（代码混态） |
| 3 | [#32737](https://github.com/NousResearch/hermes-agent/issues/32737) | 5 | 0 | Tirith shell-scanner 把"用户本地脚本 + 管道到解释器"误判为 HIGH |
| 4 | [#49567](https://github.com/NousResearch/hermes-agent/issues/49567) | 5 | 2 | 官方 Docker 示例开 dashboard 监听 0.0.0.0 被鉴权门拒绝（自交付文档不通） |
| 5 | [#68502](https://github.com/NousResearch/hermes-agent/issues/68502) | 4 | 0 | Telegram gateway 重复处理同一条入站消息，造成重复回复 |
| 6 | [#114456](https://github.com/NousResearch/hermes-agent/issues/114456) | 4 | 0 | `/stop` 不重放已排队的 async delegation 完成通知，注入还破坏 prompt cache |
| 7 | [#105560](https://github.com/NousResearch/hermes-agent/issues/105560) | 4 | 0 | Windows `computer_use` 的 `_bounds_hints()` 用未缩放 UIA 元素推断坐标系 |
| 8 | [#116213](https://github.com/NousResearch/hermes-agent/issues/116213) | 4 | 0 | Cron preflight 无法从 credential_pool 解析 openai-codex OAuth |
| 9 | [#115306](https://github.com/NousResearch/hermes-agent/issues/115306) | 4 | 0 | Google AI Studio Gemini 密钥（含 `AQ.` 前缀）在 `1e4952d` 之后失效 |

**诉求分析：**
- **#115638、#115466、#116614**（同一根因的不同入口）反映更新路径缺乏 idempotency 与 marker 校验，**典型升级恐惧症**——一次崩溃永远卡住后续更新。
- **#68502 + #116568（Telegram 重复 + Discord 静默丢消息）**显示多通道适配器在消息去重与入场鉴权上各自为政。
- **#49567** 是少有的"官方示例无法跑通"案例，对新人上手体验杀伤极大。
- **#116213** 是 OAuth-first 趋势下 cron 这类后台路径尚未跟上 credential_pool 的典型案例。

---

## 5. Bug 与稳定性

### 🔴 严重（影响安装/启动/数据）

| Issue | 标题 | 是否有修复 PR |
|---|---|---|
| [#115638](https://github.com/NousResearch/hermes-agent/issues/115638) | `fleet_restart_pending` 标记在中途崩溃后无法清除 | ❌ |
| [#116614](https://github.com/NousResearch/hermes-agent/issues/116614) | Windows 上 inventory-less marker 永远触发 catch-up 并杀死健康 gateway | ❌ |
| [#115466](https://github.com/NousResearch/hermes-agent/issues/115466) | 自更新 v0.21.1→v0.21.3 `TypeError` 中止 tail（**代码混态窗口期**） | ❌ |
| [#115542](https://github.com/NousResearch/hermes-agent/issues/115542) | 37 GB `state.db` 启动 `PRAGMA quick_check(1)` 无进度租约 → 永久重启循环 | ❌ |
| [#116611](https://github.com/NousResearch/hermes-agent/issues/116611) | 多 profile 下 `/compress` 抛 `UnscopedSecretError`，辅助 provider 读到无关 `key_env` | ❌ |

### 🟠 高（影响多通道/鉴权/模型可用性）

| Issue | 标题 | 是否有修复 PR |
|---|---|---|
| [#68502](https://github.com/NousResearch/hermes-agent/issues/68502) | Telegram gateway 重复回复 | ❌ |
| [#116568](https://github.com/NousResearch/hermes-agent/issues/116568) | Discord 线程中提及第三方用户的消息被静默丢弃 | ❌ |
| [#49567](https://github.com/NousResearch/hermes-agent/issues/49567) | Docker 官方示例 dashboard 监听 0.0.0.0 被鉴权门拒绝 | ❌ |
| [#116213](https://github.com/NousResearch/hermes-agent/issues/116213) | Cron preflight 不解析 openai-codex OAuth | ❌ |
| [#115306](https://github.com/NousResearch/hermes-agent/issues/115306) | 含 `AQ.` 前缀的 Gemini 密钥回归 | ❌ |
| [#116620](https://github.com/NousResearch/hermes-agent/issues/116620) | `/model` 拒绝 OpenRouter 上真实存在但不在 Hermes 清单的 `:free` 模型 | ✅ [#116650](https://github.com/NousResearch/hermes-agent/pull/116650) |

### 🟡 中（影响体验/特定平台）

| Issue | 标题 | 是否有修复 PR |
|---|---|---|
| [#105560](https://github.com/NousResearch/hermes-agent/issues/105560) | Windows `computer_use` 给模型矛盾的坐标提示 | ❌ |
| [#32737](https://github.com/NousResearch/hermes-agent/issues/32737) | Tirith 把本地脚本管道全部判为 HIGH（5 个月未根治） | ❌ |
| [#116593](https://github.com/NousResearch/hermes-agent/issues/116593) | `config.yaml` 单个缩进错误会让整个迁移 ladder 崩溃 | ❌ |
| [#116609](https://github.com/NousResearch/hermes-agent/issues/116609) | Langfuse 插件硬编码 max depth=4，无法配置 | ❌ |
| [#108744](https://github.com/NousResearch/hermes-agent/issues/108744) | `goal_judge`/`auto` 路径不刷新 xAI OAuth（`api.x.ai` 不在刷新表里） | ❌ |
| [#116613](https://github.com/NousResearch/hermes-agent/issues/116613) | Desktop Artifacts 页不索引 `.xlsx/.docx/.pptx`（`FILE_EXT_RE` 门） | ❌ |
| [#115656 / 115664](https://github.com/NousResearch/hermes-agent/issues/115656) | 无凭据卫星 profile 的 cron 结果无法送达 Discord 主 bot | ✅ [#116649](https://github.com/NousResearch/hermes-agent/pull/116649) |

> **修复率：** 50 条中**仅 2 条已有修复 PR**（OpenRouter 模型白名单、Discord cron 投递），说明今日 Bug 报告远跑赢 fix 落地。

---

## 6. 功能请求与路线图信号

| Issue / PR | 性质 | 趋势 |
|---|---|---|
| [#85139](https://github.com/NousResearch/hermes-agent/pull/85139) ✅ 已合 | 声明式 OAuth PKCE（外部 provider 插件） | **已落地**——解决 #99051 |
| [#111610](https://github.com/NousResearch/hermes-agent/pull/111610) ✅ 已合 | 插件自有交互鉴权 | **已落地** |
| [#113653](https://github.com/NousResearch/hermes-agent/pull/113653) ✅ 已合 | 插件声明每模型能力 | **已落地**——第三方模型接入门槛显著降低 |
| [#113466](https://github.com/NousResearch/hermes-agent/pull/113466) ✅ 已合 | 插件上报账户用量 | **已落地** |
| [#116647](https://github.com/NousResearch/hermes-agent/pull/116647) | 新增 xmemo 社区记忆插件（Plugin Catalog） | 待审 |
| [#116645](https://github.com/NousResearch/hermes-agent/pull/116645) | agent 模型上下文长度可显式低于 64K（Ollama 32K 模型场景） | 待审，可能成为下个 release note |
| [#90319](https://github.com/NousResearch/hermes-agent/issues/90319) | 把 profile/Bot 创建暴露为 agent-callable tool（避免 fall back 到 `computer_use`） | **信号**：Bot 元数据已计划增加 `ui_meta['hermes-bots']` 受支持 API（#116648）——这两个需求相互呼应，强烈预示下个版本会出现 |

</details>

<details>
<summary><strong>OpenHuman</strong> — <a href="https://github.com/tinyhumansai/openhuman">tinyhumansai/openhuman</a></summary>

<think>The user wants me to generate a daily project report for OpenHuman based on GitHub data. Let me analyze the data carefully and structure it according to the requested sections.

Let me first understand the project:
- OpenHuman (github.com/tinyhumansai/openhuman) - an open source AI agent and personal AI assistant project
- Date: 2026-09-20
- Data: 5 Issues (4 open, 1 closed), 20 PRs (3 open, 17 closed/merged), 0 releases

Let me analyze each section:

**Issues (5):**
1. #6324 [OPEN, P2] - Proton Mail Bridge support missing - by @ukautz, 3 comments
2. #6337 [CLOSED, P1] - Google OAuth sign-in fails (loopback /auth callback 405) - by @dkdue, 2 comments
3. #6365 [OPEN, P2] - Point library recipe at openhuman-tinyhumans for hosted-backend embedding - by @senamakel, 1 comment
4. #6364 [OPEN, P2] - Assert feature-gate forwarding across embed, tinyhumans and cli crates - by @senamakel, 1 comment
5. #6363 [OPEN, P3] - Run core registry-extension tests once lib test target compiles - by @senamakel, 1 comment

**PRs (20):**
Open (3):
- #6351 - fix: restore full test suite compatibility (by @senamakel)
- #6350 - Allow embedders to narrow tool-call budgets per turn (by @theamazinghenk)
- #6349 - ci: run complete test suites for changed areas (by @senamakel)

Closed/Merged (17):
- #6361 - refactor(agent): complete TinyAgents session and orchestration cutover
- #6362 - refactor(core): drop tinyhumans-sdk from core (P4)
- #6360 - refactor(cli): move openhuman-core binary into crates/openhuman-cli (P3)
- #6358 - fix(scripts/dep-audit): correctness fixes from PR #6353 review
- #6359 - fix(openhuman-tinyhumans): drop forward of removed peripheral-rpi feature
- #6357 - chore: ignore Dependabot patch releases
- #6356 - fix(openhuman-tinyhumans): drop stale peripheral-rpi feature forward
- #6353 - chore(scripts): add tinyanalyzer-driven dependency audit (P1)
- #6346 - fix(agent): run a tool call the model narrated as text (P0)
- #6355 - chore(deps): drop unused dependencies and stale pins (P0)
- #6354 - refactor(tinyhumans): merge openhuman-session into openhuman-tinyhumans (P2)
- #6352 - feat(core): backend transport port + openhuman-tinyhumans crate (P1, SDK out of core)
- #6348 - Migrate agent runtime to TinyAgents hosted harness
- #6325 - Update README.md (P3)
- #6330 - test(agent): fleet-wide prompt invariants (P1)
- #6336 - fix(flows): stop new flow's builder turn resuming another flow's session (P2)
- #6328 - feat(scripts): pnpm prompt:report + CI lane (P3)

Key themes:
1. Major refactoring: SDK removal from core, CLI reorganization, session crate merging
2. Tool call narration bug fix (P0)
3. Dependency audit tooling (P1)
4. Flow session isolation bug (P2)
5. Proton Mail Bridge feature request
6. Google OAuth sign-in bug (P1, closed)
7. Test suite restoration

Let me write a structured report in Chinese.

For the activity assessment:
- Very high activity - 20 PRs in 24 hours is a lot
- Mostly by @senamakel (15 out of 20 PRs)
- Major architectural changes (SDK out of core, CLI reorganization, session merging)
- 3 P0 fixes merged

Let me organize this into the requested sections and make sure to include GitHub links for each item.

I should note:
- Most activity concentrated from @senamakel - suggests one major contributor driving large refactoring
- Major architectural milestone: SDK completely removed from core
- P0 fixes: tool call narration bug (#6346) and dependency cleanup (#6355)

Let me write this in Chinese as requested, with objective, data-driven, professional language.

For sections that don't have data (like Releases), I should skip them or note accordingly.

Section 8 (backlog) - I should look for issues/PRs that might be stale. Most issues are from 09/17-09/19, so they are quite fresh. I'll note any that don't have assignee or have low activity but seem important.

Let me draft the report now.</think>

# OpenHuman 项目日报

**报告日期：2026-09-20**
**数据来源：[github.com/tinyhumansai/openhuman](https://github.com/tinyhumansai/openhuman)**
**报告窗口：过去 24 小时**

---

## 1. 今日速览

OpenHuman 过去 24 小时呈现**极高活跃度**，共发生 5 次 Issue 更新、20 次 PR 更新，其中 17 个 PR 已合并/关闭，合并率高达 85%。活动高度集中于单一贡献者 `@senamakel`（20 个 PR 中占 15 个），显示项目正处于一次**大规模架构重构**的密集落地阶段：核心完成了 `tinyhumans-sdk` 的全面剥离、`openhuman-session` 的合并、以及 `openhuman-cli` crate 的拆分。同期修复了 2 个 P0 级别问题（工具调用文本解析与依赖清理）和 1 个 P1（Google OAuth 登录 405 错误），整体项目健康度良好，重构与稳定性修复并行推进。

---

## 2. 版本发布

**今日无新版本发布。** 当前最新桌面版本仍为 Issue #6337 中提到的 `v0.63.12`。考虑到今日合并的多个 P0/P1 修复（特别是 #6346、#6336）与大量底层重构，下一个版本（预计 `v0.64.x`）的发布窗口应已临近。

---

## 3. 项目进展

### 🔬 核心架构重构（重大里程碑）

今日合并的 PR 共同推进了一个清晰的**架构简化主题：将 OpenHuman 核心与 `tinyhumans-sdk` 解耦，并把 hosted backend 逻辑下沉到独立 crate**。这一系列动作显著降低了核心代码库的依赖面。

| PR | 主题 | 优先级 | 链接 |
|---|---|---|---|
| #6352 | 在 core 引入 `BackendTransport` 端口，新增 `openhuman-tinyhumans` crate，将 hosted HTTP 调用从核心剥离 | P1 | [#6352](https://github.com/tinyhumansai/openhuman/pull/6352) |
| #6362 | **完全删除 `tinyhumans-sdk` 核心依赖**（含 P1 兼容垫片 `sdk_compat.rs`），通过 registry extension 承载 hosted/* 能力 | P0 | [#6362](https://github.com/tinyhumansai/openhuman/pull/6362) |
| #6354 | 将 `openhuman-session` 合并进 `openhuman-tinyhumans::session`，Tauri 与 TUI 切换至自管 transport | P2 | [#6354](https://github.com/tinyhumansai/openhuman/pull/6354) |
| #6360 | 把 `openhuman-core` 二进制、44 个根级集成测试、4 个 examples 全部迁入新 crate `openhuman-cli` | P0 | [#6360](https://github.com/tinyhumansai/openhuman/pull/6360) |

**效果**：`cargo tree -p openhuman -i tinyhumans-sdk` 已空置，核心仅保留 transport 抽象；`openhuman-tinyhumans` 成为 hosted backend 的唯一宿主。

### 🐞 P0 关键修复

- **[#6346](https://github.com/tinyhumansai/openhuman/pull/6346)**：新增 `NarratedToolCallMiddleware`，将模型以**纯文本形式叙述**的工具调用转回结构化调用执行。此前工具永远不会真正运行，原始标记要么直呈用户要么被子代理当作回复 —— 这是一个影响所有 agent 路径的严重 bug。
- **[#6355](https://github.com/tinyhumansai/openhuman/pull/6355)**：根据 #6353 审计报告清理未使用的依赖与陈旧 pin。**注意**：该 PR 此前包含了 #6353 的 commits，因为上游不允许推送基分支（已合并）。

### ⚙️ 工程基础设施

- **[#6353](https://github.com/tinyhumansai/openhuman/pull/6353) / [P1]**：新增 `pnpm dep:audit` 脚本，覆盖 24 个 Cargo 目标（约 20 秒），产出 `REPORT.md` 与 `summary.json`。
- **[#6358](https://github.com/tinyhumansai/openhuman/pull/6358) / [P2]**：承接 #6353 漏掉的 28 条 CodeRabbit/tinysweeper review 修复。
- **[#6357](https://github.com/tinyhumansai/openhuman/pull/6357)**：新增 Dependabot 配置（npm / Cargo / GitHub Actions），忽略 semver patch，安全更新不受影响。
- **[#6328](https://github.com/tinyhumansai/openhuman/pull/6328) / [P3]**：`pnpm prompt:report` 与 prompt-budget ratchet 的 CI lane，固化每个 agent 的 prompt token 预算。

### 🧪 Agent 与 Flow 质量

- **[#6330](https://github.com/tinyhumansai/openhuman/pull/6330) / [P1]**：fleet-wide prompt 不变量测试，确保每个 agent prompt 中引用的工具都真实可调用。
- **[#6336](https://github.com/tinyhumansai/openhuman/pull/6336) / [P2]**：修复 flows_build 跨会话串扰 —— 新 workflow 不应继承前一个 workflow 的 builder 会话上下文。
- **[#6361](https://github.com/tinyhumansai/openhuman/pull/6361)**：完成 TinyAgents session 与 orchestration 的完全切换，本地运行时与子代理 runner 被 `tinyagents-runtime`/`session`/`orchestration` 替代。

### 📝 文档

- **[#6325](https://github.com/tinyhumansai/openhuman/pull/6325)**：README 介绍文案语法与可读性优化（@baadaldev 贡献）。

---

## 4. 社区热点

今日社区讨论度整体偏低（Issue 总评论数 7 条），最高热度仍集中在产品功能缺口：

| 排名 | Issue/PR | 评论数 | 状态 | 链接 |
|---|---|---|---|---|
| 1 | #6324 Proton Mail Bridge 不支持 | 3 | 仍 OPEN（P2） | [#6324](https://github.com/tinyhumansai/openhuman/issues/6324) |
| 2 | #6337 Google OAuth 登录 405 | 2 | **今日已关闭** | [#6337](https://github.com/tinyhumansai/openhuman/issues/6337) |

**诉求分析**：
- **#6324（Proton Mail Bridge）**：用户（@ukautz）已准备在 vendored 的 `tinychannels` crate 中提 PR —— 表明社区对 IMAP/SMTP 通道的真实需求，根因在三方依赖而非 OpenHuman 主体代码。维护者应考虑协调该 PR 的合并节奏或将该能力封装在 OpenHuman 适配层中，以避免每个用户都要绕道 vendor crate。
- **#6337（OAuth 405）**：由 P1 紧急缺陷快速关闭，但桌面端 OAuth 流程对 GET/POST 的处理方式仍值得写一条回归测试，避免再次回潮。

---

## 5. Bug 与稳定性

### 🔴 P0（已修复 ✅）

| Issue/PR | 描述 | 修复状态 |
|---|---|---|
| [#6346](https://github.com/tinyhumansai/openhuman/pull/6346) | 模型以纯文本叙述工具调用时，工具未真正运行，原始标记泄露到用户/子代理 | ✅ 已合并 `NarratedToolCallMiddleware` |
| [#6355](https://github.com/tinyhumansai/openhuman/pull/6355) | 未使用的依赖与陈旧 pin 引发潜在构建/审计噪声 | ✅ 已合并 |
| [#6362](https://github.com/tinyhumansai/openhuman/pull/6362) | `tinyhumans-sdk` 仍在核心中（架构债务） | ✅ 已合并（结构性 P0） |
| [#6360](https://github.com/tinyhumansai/openhuman/pull/6360) | CLI 二进制与 48 个测试/示例混杂在核心 crate | ✅ 已合并（结构性 P0） |

### 🟠 P1（已修复 ✅）

| Issue/PR | 描述 | 修复状态 |
|---|---|---|
| [#6337](https://github.com/tinyhumansai/openhuman/issues/6337) | Windows 11 v0.63.12：Google OAuth loopback `/auth` 仅接受 POST，浏览器 GET 重定向返回 405 | ✅ Issue 已关闭（修复应已包含在 v0.63.12 补丁或下一次发布中，建议发布说明明确标注） |
| [#6353](https://github.com/tinyhumansai/openhuman/pull/6353) | 缺少系统化的依赖审计工具 | ✅ 已合并 dep-audit 脚本 |

### 🟡 P2（已修复 ✅）

- **[#6336](https://github.com/tinyhumansai/openhuman/pull/6336)**：flows_build 会话串扰（数据隔离 bug）。
- **[#6354](https://github.com/tinyhumansai/openhuman/pull/6354)** + **[#6356](https://github.com/tinyhumansai/openhuman/pull/6356)** + **[#6359](https://github.com/tinyhumansai/openhuman/pull/6359)**：因 #6353 与 #6355 顺序合并导致 `peripheral-rpi` feature 悬挂、`main` 分支无法编译的连锁问题，已通过两个 PR 修复。
- **[#6358](https://github.com/tinyhumansai/openhuman/pull/6358)**：补全 #6353 的 review 线程修复。

### 📋 待修复的稳定性回归

- **[#6351](https://github.com/tinyhumansai/openhuman/pull/6351) - OPEN**：恢复因上游依赖更新而被破坏的前端 / Rust / 浏览器 / 桌面完整测试套件，并补充桌面 session 命令 ACL 覆盖。**这是当前最关键的未合并 PR**，应在下一发布窗口前落地。

---

## 6. 功能请求与路线图信号

### 📨 用户提出的功能需求

- **[#6324 Proton Mail Bridge 集成](https://github.com/tinyhumansai/openhuman/issues/6324)**（P2）：用户已准备上游 PR，说明这是社区真实痛点，但根因在 vendored `tinychannels`。**建议**：维护者评估是否将 IMAP/SMTP 通道适配层上移到 OpenHuman 仓库，并明确 Proton Bridge 兼容性承诺。

### 🛠️ 内部驱动的功能演进（已进入主分支或 PR 队列）

- **[#6362 registry extension 机制](https://github.com/tinyhumansai/openhuman/pull/6362)**：`core::all::register_controller_extension` 提供第三方扩展点。Issue #6363 紧跟着规划了相关测试，已构成一个**完整的可扩展性故事**，后续第三方集成（如 Proton）有清晰接入路径。
- **[#6365 文档指向 hosted backend](https://github.com/tinyhumansai/openhuman/issues/6365)**（P2）：将 library recipe 文档指向 `openhuman_tinyhumans::RuntimeBuilder`，并说明无 backend core 的能力边界 —— 表明项目正在严肃对待 embedder 集成体验。
- **[#6350 工具调用预算窄化](https://github.com/tinyhumansai/openhuman/pull/6350)**（OPEN）：允许 embedder 在不修改 agent 配置的前提下，对单轮工具调用做更严格的预算控制。这是 #6362 之后的自然延伸，可能在下一个 minor 版本进入 embedder API。
- **[#6349 CI 全量测试](https://github.com/tinyhumansai/openhuman/pull/6349)**（P1, OPEN）：CI Lite 改造，从 changed-file-only 测试选择转为变更区域的完整测试套件 —— 是 #6351 测试恢复工作的 CI 端配套。

### 📌 路线图推断

合并中的 PR 序列（#6353 → #6355 → #6354 → #6356/#6359 → #6358 → #6360 → #6361 → #6362 → #6363/#6364/#6365）勾勒出一个清晰的发布候选轨迹：**v0.64.x 很可能以"核心 SDK 剥离 + embedder 友好"作为主旋律**，并附带测试套件恢复与 prompt budget ratchet。

---

## 7. 用户反馈摘要

> 真实用户声音（来自 Issue 评论摘要）：

- **@ukautz (#6324)**：明确表达 Proton Bridge 用户的对接障碍，并表态愿意在 `tinychannels` crate 提 PR —— 体现**用户从抱怨者转向贡献者**的良性社区互动。
- **@dkdue (#6337)**：在 Windows 11 上完整描述了 v0.63.12 安装包路径（`OpenHuman_0.63.12_x64-setup.exe` NSIS per-user 安装到 `%LOCALAPPDATA%\OpenHuman`）、默认浏览器为 Chrome、新装环境无历史账户 —— 提供了**高度可复现的 bug 报告**，是后续回归测试的理想用例。
- **@M3gA-Mind (#6346, #6330)**：从 agent 内部角度揭示了"模型叙述工具调用"作为真实使用场景的存在（即模型以文本方式而非结构化方式发起工具），这提示**当前 agent 提示/输出协议可能并未对模型端做强制约束**，未来值得在 PromptSource 层加一道 schema 校验。

**痛点集中方向**：① 邮件/IMAP 通道的兼容广度（Proton Bridge）；② 桌面安装包对主流 OAuth 流程的回归覆盖；③ agent 与第三方 host 系统的语义对齐。

---

## 8. 待处理积压

虽然今日无明显长期积压，但以下几项需要维护者持续关注，避免被高频合并节奏掩盖：

| 优先级 | 编号 | 主题 | 当前状态 | 风险点 |
|---|---|---|---|---|
| **P1** | [#6349](https://github.com/tinyhumansai/openhuman/pull/6349) | CI 区域感知全量测试 | OPEN，0 评论 | 等待合并，是 #6351 的 CI 配套，单独搁置会让测试恢复成果在 CI

</details>

---
*本日报由 [Big Model Radar](https://github.com/96loveslife/big_model_radar) 自动生成。*
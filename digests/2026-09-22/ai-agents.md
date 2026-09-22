# OpenClaw 生态日报 2026-09-22

> Issues: 500 | PRs: 500 | 覆盖项目: 8 个 | 生成时间: 2026-09-22 04:15 UTC

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

<think>The user wants me to generate a daily report for OpenClaw project based on GitHub data from 2026-09-22. Let me analyze the data carefully and produce a comprehensive, structured report in Chinese.

Key observations from the data:
1. Very high activity: 500 issues updated, 500 PRs updated in 24 hours
2. 1 new release: v2026.7.35 (extended-stable/LTS)
3. The project has many serious bugs and stability issues
4. Many issues marked as "stale" suggesting backlog
5. Strong themes: session-state bugs, memory-core issues, billing/auth issues, channel/messaging bugs

Let me categorize the issues:

**P0/Beta blockers:**
- #48920 Live Docs ahead of release (P0, ux-release-blocker)
- #115642 Billing cooldown outlives outage (P0, ux-release-blocker)
- #107207 Update left managed install linked to old Node (P0, ux-release-blocker)

**P1 Critical:**
- #115908 Session transcript projection livelock (23 comments, diamond lobster)
- #111897 Concurrent runs duplicate replies (19 comments)
- #114211 Matrix room agents loop
- #112259 Visible channel turn dropped silently
- #114154 bundle-mcp tool never bundled
- #115546 CLI-budget compaction timeout
- #115424 V8 heap OOM crash loop
- #113701 Context overflow failure loop
- #114234 Usage-cost refresh lock frozen
- #139578 llama.cpp EmbeddingGemma regression
- #121187 NO_REPLY retry bug
- #99910 Memory dreaming pegs event loop
- #107244 WhatsApp group messages never arrive
- #103804 service-env generator double-quotes
- #112160 SSH sandbox doesn't stage media
- #114204 fix(openai): preserve Responses controls

**Closed important PRs:**
- #155323 fix: provider discovery after clock changes
- #154694 test(qa): register repeated-request recovery
- #154642 test(qa): register visible child waited-send proof
- #103356 fix(cli): align gateway agent timeout default

**Recent active PRs (high merge potential):**
- #155024 keep retained databases held
- #155425 share reference input limit checks
- #155424 avoid U+FFFD in catalog thread metadata
- #155409 xiaomi MiMo V2.6 support
- #155405 TUI natural language intent matching
- #154839 respect role model restrictions
- #155423 memory forget tests isolation
- #154534 avoid approval prompts for read-only audit searches
- #155335 let session owners answer their agent's questions
- #155398 doctor re-flags sessions as legacy routes
- #155377 acpx lifecycle repairs
- #155349 visible work sessions belong to requester
- #145001 read approval ledger from terminal
- #152118 continue settled file-tool work after native quota
- #137483 preserve restart-safe tool ownership
- #154655 enforce requester permissions for shared GitHub publication
- #154136 allow updates when deleted agents retain databases
- #154607 default managed Chromium to headless launches
- #114204 preserve OpenAI Responses controls
- #112898 browser extension relay stays offline
- #155414 cron retention discovery blocking
- #155422 perf(diagnostics) filter stability events
- #155293 put Enable first for disabled plugins
- #103961 reclaim refresh locks leaked by current process

Let me write the report now. I'll be objective, data-driven, and focus on project health.</think>

# OpenClaw 项目日报

**日期**：2026-09-22  
**数据范围**：过去 24 小时  
**项目**：openclaw/openclaw (GitHub)

---

## 1. 今日速览

OpenClaw 仓库今日呈现 **极高活跃度但伴随明显稳定性压力** 的典型状态：24 小时内 Issues 更新 500 条（活跃 423 / 关闭 77），PRs 更新 500 条（待合并 392 / 已合闭 108），并发布 1 个 extended-stable 通道版本 `v2026.7.35`。从标签分布看，**session-state、message-loss、crash-loop** 是当前最高频的故障面，多个 P0/P1 Issue 直指 release-blocker 级别问题，反映项目在 2026.7.x 通道与 2026.9.x 最新通道之间存在持续的张力。社区评论密度最高的 Issue 仍围绕 session 投影 livelock、并发回合重复投递、Memory 子系统（dreaming / SQLite 膨胀）等长尾问题，整体处于"积极修 bug，但积压很深"的状态。

---

## 2. 版本发布

### v2026.7.35 — Gateway-only `extended-stable`（即 LTS 等价通道）

- **通道定位**：当前 LTS 等价通道，**仅包含 Gateway**。
- **基线**：源自 2026 年 7 月底主干，外加：
  - 关键安全更新
  - 可靠性 / 性能修复
  - 新增模型支持
- **当前最新版本**：[2026.9.5](https://github.com/openclaw/openclaw)（latest 通道），本次 LTS 不等同于 latest。
- **升级注意事项**：
  - 仅推荐用于生产 Gateway，扩展（extensions）行为可能与 latest 通道存在差异。
  - 升级前请确认自定义 plugin 与 2026.7.x API 兼容，因为部分 7 月后修复未合入此通道。
- **关联**：#115642、#48920、#107207 等 P0 release-blocker 在该 LTS 中是否已修复需逐项核对；建议查阅 changelog 比对 issue 编号。

---

## 3. 项目进展（今日合闭的代表性 PR）

虽然 PR 关闭 ≠ 全部合并，但以下合闭的 PR 显示项目在 QA、CLI、Provider Discovery 等横向能力上稳步推进：

| PR | 说明 | 意义 |
|---|---|---|
| [#155323](https://github.com/openclaw/openclaw/pull/155323) | fix: provider discovery fails or overruns its budget after clock changes | 解决壁钟变更后分页模型发现提前停止 / 超时，影响 Discord/Matrix/Telegram/Anthropic/Codex/openshell/browser 等大量扩展 |
| [#154694](https://github.com/openclaw/openclaw/pull/154694) | test(qa): register repeated-request recovery | 把真实 Gateway 的重复请求恢复 E2E 注册为 QA Lab 场景，提升稳定性回归覆盖 |
| [#154642](https://github.com/openclaw/openclaw/pull/154642) | test(qa): register visible child waited-send proof | 把 waited `sessions_send` → visible child 的真实回归从 opt-in 提升为可重复执行的 QA 场景 |
| [#103356](https://github.com/openclaw/openclaw/pull/103356) | fix(cli): align gateway agent timeout default | 修正 CLI `openclaw agent` 调用未传 `--timeout` 时使用 10 分钟默认值覆盖 Gateway 服务端配置的问题 |

**整体判断**：今日合闭的 PR 主要落在"可观测性 / 测试覆盖 / CLI 默认值对齐"这类偏基础设施层面，**面向用户的关键 crash / livelock / OOM 修复仍未合入**。`v2026.7.35` 的发布是这一周期最实质性的进展。

---

## 4. 社区热点（评论数 Top Issues）

| 排名 | Issue | 评论 | 主题 |
|---|---|---|---|
| 1 | [#115908](https://github.com/openclaw/openclaw/issues/115908) Session transcript projection livelock | 23 | 持续写入下 session 投影进入非收敛重建循环，事件循环阻塞数秒至数十秒，**所有 channel transport 停摆** |
| 2 | [#111897](https://github.com/openclaw/openclaw/issues/111897) 同一 session lane 并发回合重复投递 | 19 | 与 #54488 关联（"session lane starvation"），但本 Issue 描述的是 *并发* 而非 *延迟* 派发 |
| 3 | [#114612](https://github.com/openclaw/openclaw/issues/114612) memory-core SQLite 无界增长 | 16 | `memory_index_chunks` + `memory_embedding_cache` 缺保留策略，长期会撑爆磁盘 |
| 4 | [#43367](https://github.com/openclaw/openclaw/issues/43367) 多智能体编排不稳定 | 14 | `agents add` 并发覆盖、session-lock 失败、子任务脱离等组合故障 |
| 5 | [#113306](https://github.com/openclaw/openclaw/issues/113306) SQLite snapshot restore 缺少崩溃与身份保证 | 13 | 父子目录未持久链接，清理仍走旧路径，可能导致数据不一致 |

**背后诉求**：用户正在用更复杂的真实负载压测 OpenClaw（多 agent、长会话、外部 MCP server、多 channel），暴露的不是单点 bug，而是 **session state machine + memory-core + multi-agent orchestration** 三者之间的耦合缺陷。这是一类"系统成熟度"问题，单 PR 难以根治。

---

## 5. Bug 与稳定性（按严重度排序）

### 🔴 P0 / Release Blocker（高优先级关注）

| Issue | 摘要 | 是否有 Fix PR |
|---|---|---|
| [#48920](https://github.com/openclaw/openclaw/issues/48920) | Live Docs 领先于发布版本：`IsolatedSessions` 在文档但 2026.3.13 中缺失（回归） | ❌ 未见 |
| [#115642](https://github.com/openclaw/openclaw/issues/115642) | 订阅型 provider 的 billing cooldown（~5h）在故障恢复后无法退出；缺 probe-based 恢复与手动 reset | ❌ 未见 |
| [#107207](https://github.com/openclaw/openclaw/issues/107207) | 2026.7.1 升级后 managed install 与 WhatsApp 插件仍链接到旧 embedded Node | ❌ 未见 |

### 🟠 P1 / 核心崩溃与消息丢失

| Issue | 摘要 | Fix PR 状态 |
|---|---|---|
| [#115908](https://github.com/openclaw/openclaw/issues/115908) | Session 投影 livelock，主线程阻塞，所有 channel transport 停摆 | ❌ |
| [#111897](https://github.com/openclaw/openclaw/issues/111897) | 同一 session lane 并发回合重复回复 | ❌ |
| [#114211](https://github.com/openclaw/openclaw/issues/114211) | Matrix room agent 在 no-reply 上自循环 + 重启后 stale session 重放 | ❌ |
| [#112259](https://github.com/openclaw/openclaw/issues/112259) | 可见入站 channel turn 被静默丢弃：零载荷分派无重试 / 死信 / 用户可见失败 | ❌ |
| [#114154](https://github.com/openclaw/openclaw/issues/114154) | bundle-mcp 工具通过 policy 与 mcp probe/doctor 健康，但 agent session 永不 bundle | ❌ |
| [#115546](https://github.com/openclaw/openclaw/issues/115546) | CLI-budget compaction 在大 session 上 100% 失败，4.9s 即触发超时（远低于 180s 截止） | ❌ |
| [#115424](https://github.com/openclaw/openclaw/issues/115424) | Gateway V8 堆 OOM，restart-recovery 热恢复导致 7 次 core dump 循环 | ❌ |
| [#113701](https://github.com/openclaw/openclaw/issues/113701) | Context overflow：大工具输出超过上下文窗口，compaction 无法恢复 | ❌ |
| [#114234](https://github.com/openclaw/openclaw/issues/114234) | Usage-cost refresh lock 在容器 PID 复用后永久冻结缓存 | [#103961](https://github.com/openclaw/openclaw/pull/103961)（等待 proof） |
| [#139578](https://github.com/openclaw/openclaw/issues/139578) | llama.cpp EmbeddingGemma 在 2026.9.2 跑回默认 ubatch 512（疑似 #134389 回归） | ❌ |
| [#121187](https://github.com/openclaw/openclaw/issues/121187) | Yielded requester 把显式 NO_REPLY 重试为缺失输出 | ❌ |
| [#99910](https://github.com/openclaw/openclaw/issues/99910) | Memory dreaming 把事件循环占满约 10 分钟，短时 recall 永远无法持久化 | ❌ |
| [#107244](https://github.com/openclaw/openclaw/issues/107244) | WhatsApp 群消息永远不到达入站处理（LID 群？） | ❌ |
| [#103804](https://github.com/openclaw/openclaw/issues/103804) | service-env 生成器双重引号值，破坏 `AWS_REGION` 主机名 | ❌ |
| [#112160](https://github.com/openclaw/openclaw/issues/112160) | SSH sandbox 不把入站 media 转移到现有远端工作区 | ❌ |

### 🟡 P2 / 中等严重度（节选）

| Issue | 摘要 |
|---|---|
| [#114612](https://github.com/openclaw/openclaw/issues/114612) | memory_index_chunks + memory_embedding_cache 无保留策略 |
| [#67419](https://github.com/openclaw/openclaw/issues/67419) | Session 上下文膨胀：bootstrap 文件每回合重新注入，浪费 20-30% tokens |
| [#95610](https://github.com/openclaw/openclaw/issues/95610) | OpenAI 模型 prompt-cache prefix 被每回合动态注入破坏 |
| [#49381](https://github.com/openclaw/openclaw/issues/49381) | Feishu：主模型限流降级后产生重复最终回复 |
| [#82662](https://github.com/openclaw/openclaw/issues/82662) | Isolated cron agentTurn 在 2026.5.12 上 6 个 fallback 全失败 |
| [#112349](https://github.com/openclaw/openclaw/issues/112349) | memory-core dreaming 深度阶段忽略 `minRecallCount` / `minUniqueQueries` |
| [#113014](https://github.com/openclaw/openclaw/issues/113014) | WebChat 中 `MEDIA:` 指令裸路径泄露到可见回复 |
| [#112313](https://github.com/openclaw/openclaw/issues/112313) | 死信出站队列条目永久存在：所有 accessor 仅过滤 `status='pending'` |
| [#84110](https://github.com/openclaw/openclaw/issues/84110) | Codex app-server 在工具调用续接回合重写 prompt，击穿 OpenAI prompt cache |
| [#109478](https://github.com/openclaw/openclaw/issues/109478) | 多行工具调用字符串参数在冒号+缩进边界插入字面 `\n` |
| [#115400](https://github.com/openclaw/openclaw/issues/115400) | `sessions_send` 无同步等待选项 + 同步返回后异步宣告造成重复投递 |
| [#115642](https://github.com/openclaw/openclaw/issues/115642) | （同时列为 P0）billing cooldown outlives outage |

### 🟢 已有 fix PR 在路上的 P1/P2

- [#103961](https://github.com/openclaw/openclaw/pull/103961) `fix(usage): reclaim refresh locks leaked by the current process` → 对应 [#114234](https://github.com/openclaw/openclaw/issues/114234)
- [#114204](https://github.com/openclaw/openclaw/pull/114204) `fix(openai): preserve Responses controls and terminal state` → 关闭 #114200/201/202/203

### 🔒 安全相关（值得维护者关注）

| Issue | 类型 |
|---|---|
| [#58730](https://github.com/openclaw/openclaw/issues/58730)（已 CLOSED） | exec() 沙箱隔离 / 工具权限模型（受 Claude Code 源码泄露启发） |
| [#137705](https://github.com/openclaw/openclaw/openclaw/issues/137705) | Telegram 流式通道在非白名单链接 scheme 时泄露原始 `[label](file://…)` Markdown |
| [#55914](https://github.com/openclaw/openclaw/issues/55914)（已 CLOSED） | `openclaw invite` 命令建议（短码配对） |

---

## 6. 功能请求与路线图信号

按可见 PR + Issue 信号判断**下一版本大概率纳入**的需求：

| 需求 | 信号强度 | 依据 |
|---|---|---|
| **Xiaomi MiMo V2.6 模型支持** | 🟢 强（已 PR） | [#155409](https://github.com/openclaw/openclaw/pull/155409) `feat(xiaomi): support MiMo V2.6 models`，已 ready for maintainer look |
| **TUI 自然语言意图匹配与关键词 slash 发现** | 🟢 强（已 PR） | [#155405](https://github.com/openclaw/openclaw/pull/155405)，降低 slash 命令记忆成本 |
| **角色模型限制在 picker 中强制** | 🟢 强（已 PR） | [#154839](https://github.com/openclaw/openclaw/pull/154839) `fix: respect role model restrictions in model pickers`，标记 security-sensitive |
| **Doctor / Update 流程支持 retained database** | 🟢 强（已 PR） | [#154136](https://github.com/openclaw/openclaw/pull/154136) + 堆叠 PR [#155024](https://github.com/openclaw/openclaw/pull/155024)；release-blocker 候选 |
| **CLI 终端读取审批 ledger** | 🟢 强（已 PR） | [#145001](https://github.com/openclaw/openclaw/pull/145001)，曾因 PR 上限被自动关闭后重提 |
| **续接已结算文件工具工作在原生配额耗尽后** | 🟡 中（已 PR） | [#152118](https://github.com/openclaw/openclaw/pull/152118)，security-sensitive |
| **Visible Team Session 归属修正为 requester** | 🟡 中（已 PR） | [#155349](https://github.com/openclaw/openclaw/pull/155349) |
| **Session owner 答复自己 agent 的问题** | 🟡 中（已 PR） | [#155335](https://github.com/openclaw/openclaw/pull/155335) |
| **acpx 0.19.0 生命周期修复（不阻塞 session 迁移）** | 🟡 中（已 PR） | [#155377](https://github.com/openclaw/openclaw/pull/155377) |
| **Memory Wiki 批操作（bounded）** | 🟡 中（已 PR） | [#113706](https://github.com/openclaw/openclaw/issues/113706) |
| **Anthropic 原生流式 O(n²) 解析优化** | 🟡 中（已 PR） | [#113124](https://github.com/openclaw/openclaw/issues/113124) |
| **共享 GitHub

---

## 横向生态对比

<think>The user wants a horizontal comparative analysis report across multiple open-source AI agent projects based on today's dynamics. Let me carefully synthesize the information from all 7 projects and produce a professional, data-driven report.

Let me think about the structure:

1. **生态全景** - 3-5 sentences on overall ecosystem
2. **各项目活跃度对比** - Table with Issues, PRs, Releases, Health assessment
3. **OpenClaw 在生态中的定位** - Position vs competitors
4. **共同关注的技术方向** - Common themes across projects
5. **差异化定位分析** - Differentiation across projects
6. **社区热度与成熟度** - Activity tiering
7. **值得关注的趋势信号** - Industry trends

Let me draft this carefully.

Key observations:
- OpenClaw has by far the highest activity (500 issues + 500 PRs, 1 release)
- Hermes Agent also very high (50 + 50, 1 release)
- QwenPaw high (23 + 36, no release)
- OpenHuman high (29 + 26, no release)
- NanoBot moderate (3 + 31, no release)
- PicoClaw low (3 + 3, no release)
- IronClaw very low (1 + 0, no release)

Common themes I see:
1. **Session/Transcript stability** - OpenClaw (#115908 livelock), NanoBot (#5843/#5849), Hermes Agent (Desktop transcript issues #118002, #118670, #118693, #118755), OpenHuman (#6345 background sub-agent)
2. **Memory subsystem bugs** - OpenClaw (#114612 SQLite growth, #99910 dreaming), QwenPaw (#7655 FTS corruption), OpenHuman (#6393 embed)
3. **Multi-channel/platform integration** - All projects (Discord, WhatsApp, Telegram, Matrix, Feishu, etc.)
4. **Desktop/WebUI regressions** - Hermes Agent (4 Desktop transcript issues), PicoClaw (#3281), NanoBot (5+ WebUI PRs)
5. **Provider integration issues** - OpenClaw (multiple), QwenPaw (DeepSeek, OpenCode, JD Cloud)
6. **Security/permissions** - OpenClaw (multiple), OpenHuman (Composio contract gate), Hermes Agent (profile isolation)
7. **Cost/billing governance** - OpenClaw (#115642), OpenHuman (#6431 remove spend cap)
8. **Release cadence** - Only OpenClaw and Hermes Agent shipped releases today; others are accumulating PRs

Differentiation:
- OpenClaw: Most comprehensive, LTS strategy, broadest provider/channel coverage, P0 release-blocker concerns
- Hermes Agent: Desktop-heavy, profile isolation, v0.21.4 with 1800 PRs rolled up
- QwenPaw: AgentScope integration, v2.2.2 prep, mixed UI work
- OpenHuman: Backend infrastructure focus, security emphasis, cost governance shift
- NanoBot: WebUI intensive iteration, lightweight gateway pattern
- PicoClaw: Minimal activity, version 0.3.1 stagnation
- IronClaw: Benchmark/monitoring infrastructure, no code progress

Trends:
1. Session state management has become the central engineering challenge
2. Memory subsystem (compaction, dreaming, retention) is the next frontier
3. Desktop UI regressions are common when shipping rapidly
4. Provider fragmentation requires constant maintenance
5. Security boundaries (profile/credential isolation) emerging as first-class concern
6. Release cadence diverging - mature projects shipping more frequently, smaller ones accumulating debt

Let me write this report in Chinese, professional and data-driven.</think>

# 个人 AI 助手 / 自主智能体开源生态横向对比日报
**日期：2026-09-22 ｜ 数据来源：7 个代表性 GitHub 仓库**

---

## 1. 生态全景

今天的生态呈现出**"两极加速、底部沉淀"的鲜明分化**：OpenClaw 与 Hermes Agent 继续以单日 50–500 量级的 Issue/PR 流通主导第一梯队，且都完成了版本发布（v2026.7.35 LTS 与 v0.21.4 聚合补丁），QwenPaw / OpenHuman 处于高强度质量修复期但暂未发版；NanoBot 在 WebUI 与底层 Bug 双线高速迭代但缺乏发版节奏；PicoClaw、IronClaw 则已进入明显的"静默沉淀期"。从横向议题看，**Session 状态机稳定性、Memory 子系统治理、多 Provider/Channel 兼容矩阵、Desktop 转写回归** 已成为整个生态的四大共性痛点，没有任何项目完全规避。整体上，AI 智能体已经从"功能可用"阶段进入"长会话 / 多通道 / 复杂负载下的工程成熟度"攻坚阶段，**单点修复的边际收益递减，架构级重构（Provider 层抽象、Profile 隔离、Transcript 流式 hydration）成为下一阶段的关键**。

---

## 2. 各项目活跃度对比

| 项目 | 仓库 | 24h Issues | 24h PRs | 今日 Release | 健康度 | 当前阶段 |
|---|---|---|---|---|---|---|
| **OpenClaw** | openclaw/openclaw | 500（活跃 423 / 关闭 77） | 500（待合并 392 / 已合闭 108） | ✅ v2026.7.35 (extended-stable/LTS) | ⭐⭐☆☆☆ | 高度活跃 + P0 积压 |
| **Hermes Agent** | NousResearch/hermes-agent | 50（活跃 43 / 关闭 7） | 50（待合并 49 / 已合闭 1） | ✅ v0.21.4 (v2026.9.21) | ⭐⭐⭐☆☆ | 刚发版 + 补丁收尾 |
| **QwenPaw** | agentscope-ai/QwenPaw | 23（活跃 11 / 关闭 12） | 36（待合并 16 / 已合闭 20） | ❌（PR #7928 准备中） | ⭐⭐⭐⭐☆ | v2.2.2 发布前夜 |
| **OpenHuman** | tinyhumansai/openhuman | 29（活跃 24 / 关闭 5） | 26（待合并 4 / 已合闭 22） | ❌ | ⭐⭐⭐☆☆ | 密集修复 + 主线震荡 |
| **NanoBot** | HKUDS/nanobot | 3（活跃 2 / 关闭 1） | 31（待合并 27 / 已合闭 4） | ❌ | ⭐⭐⭐⭐☆ | WebUI 迭代 + 底层 Bug |
| **PicoClaw** | sipeed/picoclaw | 3（活跃 2 / 关闭 1） | 3（待合并 2 / 已合闭 1） | ❌ | ⭐⭐☆☆☆ | 静默沉淀 |
| **IronClaw** | nearai/ironclaw | 1（活跃 1 / 关闭 0） | 0 | ❌ | ⭐⭐☆☆☆ | 监控运行期 |

**说明**：活跃度 ≠ 健康度。OpenClaw 数字最大但伴随最多 P0 release-blocker；PicoClaw 数字最小但社区讨论质量高（#3281 60 天未解仍 13 条评论），说明用户活跃 ≠ Issue 数量。

---

## 3. OpenClaw 在生态中的定位

### 3.1 体量与社区规模

- **Issue/PR 流通量约为第二名 Hermes Agent 的 10 倍**，处于"超大单体仓库"级别，反映其作为参照项目的中心地位。
- **LTS 通道策略（extended-stable）** 在生态内独一无二：其他项目均采用 latest-only 单通道策略，OpenClaw 通过 2026.7.35 这种"网关专用 LTS"面向生产用户，体现成熟商业化思维。
- **Provider / Channel 覆盖最广**：Discord / Matrix / Telegram / Anthropic / Codex / openshell / browser 等大量扩展均依赖其 Provider Discovery 抽象（见 #155323）。

### 3.2 技术路线差异

| 维度 | OpenClaw | Hermes Agent | OpenHuman | QwenPaw |
|---|---|---|---|---|
| **架构核心** | Gateway + 多通道分发 | Profile 隔离 + Desktop 一等公民 | 后台子代理 + Socket 编排 | AgentScope 框架 + 多终端 |
| **状态管理** | Session 投影（当前痛点） | Wire contract + Row 契约 | Background delivery 回路 | Provider 层重构（#7899 已合） |
| **安全边界** | 工具权限模型（受 Claude Code 启发） | Profile 凭据隔离（#111724 已关） | Composio 合同门控（#6407 P0） | 主题/皮肤系统（设计阶段） |
| **生态策略** | LTS 双通道 | 滚动聚合（~1,800 PR/patch） | 嵌入式 + 托管 | v2.2.x 稳态化 |

### 3.3 优势与隐忧

**优势**：
1. **唯一具有明确 LTS 策略**，可承担生产负载；
2. **Provider Discovery 抽象**为生态扩展提供基础设施；
3. **QA Lab 注册机制**（#154694、#154642）将真实回归场景制度化。

**隐忧**：
1. **P0 release-blocker 长期未解**（#48920、#115642、#107207）显示 LTS 通道的修复节奏跟不上 latest 通道的故障暴露速度；
2. **Session state + Memory core + Multi-agent orchestration 三方耦合**的架构债务日益加重，单 PR 难以根治；
3. **待合并 PR 392 条**：评审吞吐压力巨大，存在"PR 老死"风险。

---

## 4. 共同关注的技术方向

横向扫描 7 个项目，今日**至少有 4 个技术方向在多项目同时涌现**，呈现生态级共识：

### 4.1 🔴 Session / Transcript 稳定性（6/7 项目涉及）

| 项目 | 代表性 Issue |
|---|---|
| OpenClaw | #115908 投影 livelock、#111897 并发回合重复 |
| Hermes Agent | #118002/#118670/#118693/#118755 Desktop 转写四连回归 |
| OpenHuman | #6345 后台子代理陈旧失败覆盖正确答案 |
| NanoBot | #5843 BUILD 阶段 10s+ 延迟、#5849 自动压缩死锁 |
| QwenPaw | #7628 上下文压缩超出预算 |
| IronClaw | （间接：47 个非通过任务主要源自模型层失败而非框架） |

**共同诉求**：长会话下的 transcript projection、compaction、background delivery 已成为**所有项目的核心稳定性瓶颈**，且往往不是单点 bug，而是状态机与持久化层的耦合问题。

### 4.2 🟠 Memory 子系统治理（5/7 项目涉及）

- **OpenClaw #114612** SQLite 无界增长、#99910 dreaming 占满事件循环、#112349 忽略 `minRecallCount`
- **NanoBot #5849** summarize_transcript 死锁、#4819 WeakValueDictionary 导致 consolidation lock 被 GC
- **QwenPaw #7655** FTS 损坏修复、#7923 tool_result 按 retention 过期
- **OpenHuman #6393** 嵌入式 API 内存健康问题
- **Hermes Agent #118672** mnemosyne_invalidate 跨 session 静默 no-op

**共同诉求**：**Memory 从"能用"转向"可控"**——保留策略、压缩预算、索引一致性、并发安全，已成为 Memory 子系统的四大共性挑战。

### 4.3 🟡 多 Provider / Channel 兼容矩阵（6/7 项目涉及）

| 项目 | 涉及渠道/模型 |
|---|---|
| OpenClaw | WhatsApp/Matrix/Telegram/Discord/Feishu/Codex/openshell/browser（#155323 一次性影响 7+ 扩展） |
| Hermes Agent | Discord (#118487)、WhatsApp (#102329)、ntfy (#118684) |
| QwenPaw | DeepSeek (#7883)、OpenCode (#7882/#7531)、JD Cloud Coding Plan (#3419)、Telegram (#7585) |
| OpenHuman | Composio (#6407)、Gmail (#6416)、Calendar (#6247) |
| NanoBot | Telegram (#5803)、MCP (#5858 Adam Network) |
| PicoClaw | QQ (#3365 botgo 兼容) |

**共同诉求**：**Provider 抽象层是产品力而非成本**——一次性 PR 可同时修复 7+ 渠道，但反向也意味着任一上游变动都会引发"修复雪崩"。

### 4.4 🟢 Desktop / WebUI 转写回归（4/7 项目涉及）

- **Hermes Agent** 4 条 Desktop 转写/流式回归集中在 24h 内爆发
- **PicoClaw #3281** Web UI 长历史下输入卡顿（60 天未解）
- **NanoBot** 5+ 个 WebUI PR 集中提交（@Re-bin）
- **QwenPaw** Console 多标签终端、Markdown 表格宽度等

**共同诉求**：当 Agent 进入"长会话 + 多模态 + 多通道"形态，**前端 hydration 路径**与**后端转写存储**的不一致开始集中显现。

### 4.5 安全与凭据边界（3/7 项目涉及）

- **OpenClaw #58730** exec() 沙箱、#137705 Telegram 流式 scheme 泄露
- **Hermes Agent #111724** 无凭据 profile 继承 root、#118310 dashboard_auth 默认密码
- **OpenHuman #6407** Composio 合同门控 4 次未送达即放行

**共同诉求**：Agent 能力越强，**"权限边界 + 凭据隔离 + 合约门控"** 越成为第一类问题。

---

## 5. 差异化定位分析

### 5.1 功能侧重

| 项目 | 一等公民 | 边缘功能 |
|---|---|---|
| OpenClaw | 多通道 Gateway + 扩展生态 | Desktop（非首要） |
| Hermes Agent | Desktop + Profile 隔离 | 嵌入式 |
| QwenPaw | AgentScope 框架 + Provider 抽象 | 主题系统（设计阶段） |
| OpenHuman | 后台子代理 + 嵌入式 + 托管 | 移动端 |
| NanoBot | WebUI + 轻量 Gateway | 多 Profile（设计阶段） |
| PicoClaw | Web UI + 简洁 Provider | 嵌入式 |
| IronClaw | Benchmark / 评估管线 | 终端用户功能 |

### 5.2 目标用户分层

- **OpenClaw**：DevOps / 自托管爱好者 / 多 SaaS 工具重度用户（LTS 策略明示）
- **Hermes Agent**：Desktop 重度用户 + 安全敏感组织（profile 隔离卖点）
- **QwenPaw**：AgentScope 框架用户 / 中国 AI 应用开发者
- **OpenHuman**：嵌入式集成商 + 后台任务密集场景
- **PicoClaw / NanoBot**：个人轻量用户 / 教学 / 探索性场景
- **IronClaw**：研究人员 / 模型选型决策者

### 5.3 技术架构关键差异

1. **OpenClaw**：**Provider Discovery + 投影**——任何扩展可被自动发现，但带来配置膨胀与 livelock 风险；
2. **Hermes Agent**：**Wire Contract + Row 契约**——前后端协议形式化，但契约变更成本高（#118067 即违反契约案例）；
3. **OpenHuman**：**In-flight Handshake + 后台交付回路**——对异步任务正确性极度敏感（#6345/#6426）；
4. **QwenPaw**：**AgentScope 框架集成**——依托上层框架，自身演进受 AgentScope 版本制约（#7913 升级到 2.0.8）；
5. **NanoBot / PicoClaw**：**轻量 Gateway + WebUI**——架构最简单，但功能深度有限。

---

## 6. 社区热度与成熟度分层

### 6.1 第一梯队：高度活跃 + 大体量

- **OpenClaw** ⭐⭐☆☆☆（活跃度极高但 P0 积压）
- **Hermes Agent** ⭐⭐⭐☆☆（刚发版 + 补丁收尾）

**特征**：单日 50+ Issue 流通、有专门 QA / release 流程、存在 P0/P1 分级体系。

### 6.2 第二梯队：快速迭代 + 中等体量

- **QwenPaw** ⭐⭐⭐⭐☆（v2.2.2 准备期，闭环率高）
- **OpenHuman** ⭐⭐⭐☆☆（密集修复但主线震荡）
- **NanoBot** ⭐⭐⭐⭐☆（WebUI 密集但发版节奏滞后）

**特征**：单日 3–36 条动态、有明确版本计划、PR 合并率较高。

### 6.3 第三梯队：沉淀期 / 维护期

- **PicoClaw** ⭐⭐☆☆☆（PR 静默、Issue 仍活跃但缺少响应）
- **IronClaw** ⭐⭐☆☆☆（仅有自动化监控报告）

**特征**：用户层面反馈可能仍在，但代码层面推进停滞，需警惕"社区失血"。

### 6.4 成熟度信号

- **具有 LTS/双通道策略**：仅 OpenClaw；
- **具有正式 release notes PR 流程**：OpenClaw、QwenPaw（#7928 准备中）；
- **具有版本-Issue 编号关联机制**：OpenClaw（v2026.7.35 ↔ P0 release-blocker 列表）；
- **具有 QA Lab 注册机制**：OpenClaw（#154694/#154642）、Hermes Agent（conftest.py）。

---

## 7. 值得关注的趋势信号

### 7.1 📈 Session 状态机 = 下一代 Agent 工程的"登月难题"

**信号强度**：🟢🟢🟢🟢🟢
- 6/7 项目同时在 Session / Transcript 层面暴露问题；
- 单 PR 修复边际收益递减（见 OpenClaw #115908 23 评论仍未收敛）；
- Hermes Agent 24h 内爆发 4 条 Desktop 转写回归。

**对开发者的启示**：
1. 设计 Agent 系统时，**transcript projection / 流式 hydration / compaction** 应作为一等架构考虑；
2. 考虑引入**事件溯源（Event Sourcing）** 或 **CRDT** 而非简单的"当前状态投影"，从根源避免 livelock；
3. **Background sub-agent delivery** 是当前正确性盲点，OpenHuman #6345 案例值得深入研究。

### 7.2 📈 Memory 子系统从"黑盒"走向"白盒"

**信号强度**：🟢🟢🟢🟢
-

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

<think>Let me analyze the GitHub data for NanoBot and create a comprehensive daily report. Let me organize the information carefully.

Key observations:
- 3 issues (2 open, 1 closed)
- 31 PRs (27 open, 4 merged/closed)
- 0 releases
- No version releases

Notable items:
- Issue #5849: Auto-compaction deadlock bug - critical, summarization has no token budget guard
- Issue #5843: BUILD stage latency bug - 10s+ delays in long sessions
- Issue #5770: WebUI sidebar search tooltip bug - closed
- PR #5857: Fixes #5849 directly - bound automatic transcript summarization
- PR #5846: Fixes #5843 - adds BUILD substage latency tracing
- Multiple WebUI enhancements (5856, 5855, 5854, 5853, 5852, 5851, 5850, 5848, 5847)
- Multiple edit_file bug fixes (#5795, #5796)
- PR #4819 from July 6 still open - long-pending bug fix
- PR #5412 from Aug 17 still open - has conflict marker

Activity assessment:
- High PR activity (31 PRs in 24h, mostly from @Re-bin who has many WebUI features)
- Bug fixes paired with issues (#5843→#5846, #5849→#5857)
- No new versions released
- Long-standing unresolved items (#4819, #5412)

Let me structure the report now.</think>

# NanoBot 项目日报 · 2026-09-22

> 数据范围：2026-09-21 08:00 UTC ~ 2026-09-22 08:00 UTC
> 数据源：[HKUDS/nanobot](https://github.com/HKUDS/nanobot)

---

## 1. 今日速览

NanoBot 今日呈现 **"WebUI 密集迭代 + 关键 Bug 集中修复"** 的双轨格局：过去 24 小时共录得 31 个 PR 更新（以 `@Re-bin` 的 WebUI 体验增强为主力），3 条 Issue 更新，且每条新开的重大 Bug 都已在当日附带修复 PR 提交，呈现出 **"报告即修"** 的高效响应节奏。但单日 **0 次版本发布**，意味着这些改进尚停留在代码评审阶段，暂未向用户交付。无合并/关闭的里程碑型变更，项目整体节奏温和偏稳。

---

## 2. 版本发布

无新版本发布。最新一次 Release 信息未在今日数据窗口内，建议关注下个发版窗口以纳入当前批次的 WebUI 与内存相关修复。

---

## 3. 项目进展

今日 PR 总量高达 31 条，但合并/关闭仅 4 条，说明仓库处于 **重度积累期**。最值得关注的两条已修复闭环：

- **[#5846](https://github.com/HKUDS/nanobot/pull/5846) `fix(agent): trace BUILD substage latency`** —— 修复 Issue [#5843](https://github.com/HKUDS/nanobot/issues/5843)。为 BUILD 生命周期各子阶段增加结构化 DEBUG 时间事件，并在元数据中记录模型、context-window、消息数、持久化标志等关键信息。这是首次系统性把长会话延迟问题做成可观测能力，对未来性能调优至关重要。
- **WebUI 会话分屏文件预览修复 [#5847](https://github.com/HKUDS/nanobot/pull/5847)** —— 恢复 PNG/JPEG/GIF/WebP 在侧边面板的内联预览，且让选中文件与侧栏宽度与会话生命周期严格绑定，避免跨会话串扰。
- **Telegram 频道改进 [#5803](https://github.com/HKUDS/nanobot/pull/5803)** —— 修复富文本换行、`my` 工具暴露 `topic_id`、Topic typing indicator 三处小问题，提升多 Topic 群组场景的体验完整性。

整体而言，项目今日向前推进了 **WebUI 可观测性、长会话性能调试基础设施、频道细节打磨** 三个方向，但尚无里程碑级合并。

---

## 4. 社区热点

按评论数与相关性筛选，本日最具讨论势能的 Issue/PR：

| 排名 | Issue/PR | 关注点 | 链接 |
| --- | --- | --- | --- |
| 1 | [#5849](https://github.com/HKUDS/nanobot/issues/5849) | 自动上下文压缩存在死锁风险 | [issue](https://github.com/HKUDS/nanobot/issues/5849) / [fix #5857](https://github.com/HKUDS/nanobot/pull/5857) |
| 2 | [#5843](https://github.com/HKUDS/nanobot/issues/5843) | BUILD 阶段 10 秒+ 延迟 | [issue](https://github.com/HKUDS/nanobot/issues/5843) / [fix #5846](https://github.com/HKUDS/nanobot/pull/5846) |
| 3 | [#5854](https://github.com/HKUDS/nanobot/pull/5854) | 范围化 Prompt 命令与管理 UI | [PR](https://github.com/HKUDS/nanobot/pull/5854) |
| 4 | [#5858](https://github.com/HKUDS/nanobot/pull/5858) | Adam Network MCP 集成示例 | [PR](https://github.com/HKUDS/nanobot/pull/5858) |
| 5 | [#5770](https://github.com/HKUDS/nanobot/issues/5770) | 移动端 Sidebar 搜索按钮误触 | [issue](https://github.com/HKUDS/nanobot/issues/5770)（已关闭） |

**诉求分析**：当前社区关注点集中在 **长会话稳定性**（同一会话两个 P0 级 Bug） 与 **WebUI/会话任务可视化增强**。这两类诉求背后是"专业级 Agent 用户对生产环境质量的高要求"，与 NanoBot 自我定位为个人 AI 助手方向高度吻合。

---

## 5. Bug 与稳定性

按严重程度排序：

| 严重等级 | Issue | 描述 | 修复状态 |
| --- | --- | --- | --- |
| 🔴 **P0** | [#5849](https://github.com/HKUDS/nanobot/issues/5849) | `summarize_transcript` 无 token-budget 守卫，超出 input budget 后 compaction 永久死锁 | ✅ 已有修复 PR [#5857](https://github.com/HKUDS/nanobot/pull/5857)，估算 prompt/工具 schema 开销并保留已接受前缀 |
| 🔴 **P0** | [#5843](https://github.com/HKUDS/nanobot/issues/5843) | 长会话每轮 user turn 在 BUILD 阶段需等待 10s~数十秒才发起 LLM 调用 | ✅ 已有修复 PR [#5846](https://github.com/HKUDS/nanobot/pull/5846)，引入子阶段耗时埋点便于定位根因 |
| 🟡 **P1** | [#5770](https://github.com/HKUDS/nanobot/issues/5770) | 移动端 Sidebar 打开后默认渲染 `Search ⌘K` 浮窗 | ✅ 已关闭（修复随 [#5848](https://github.com/HKUDS/nanobot/pull/5848) 或后续 commit 发布） |
| 🟢 **P2** | [#5795](https://github.com/HKUDS/nanobot/pull/5795) | `edit_file` 在 fallback 匹配 + 末尾换行场景丢失缩进 | 🔄 待合并（修复就绪） |
| 🟢 **P2** | [#5796](https://github.com/HKUDS/nanobot/pull/5796) | `edit_file` 删除内联替换的分隔空白，导致相邻 token 粘连 | 🔄 待合并（修复就绪） |
| 🟢 **P2** | [#4819](https://github.com/HKUDS/nanobot/pull/4819) | `WeakValueDictionary` 可能导致 per-session consolidation lock 被 GC | 🔄 旧 PR 已重新激活 |

**稳定性观察**：今日最大的两块稳定性风险均已在 24 小时内产出可合并的 PR，**响应时延极短**。但 P0 死锁与延迟两个问题仍待合并进 master，建议在下一 Release 前优先纳入。

---

## 6. 功能请求与路线图信号

今日最有可能进入下一版本的功能矩阵：

- **WebUI 全栈增强（5 个 PR，来源 `@Re-bin`）**
  - [#5856](https://github.com/HKUDS/nanobot/pull/5856) 命令面板（inspect & stop session）
  - [#5855](https://github.com/HKUDS/nanobot/pull/5855) 父作用域子任务输出展示
  - [#5853](https://github.com/HKUDS/nanobot/pull/5853) 类型化图片产物（无需二次 tool call）
  - [#5852](https://github.com/HKUDS/nanobot/pull/5852) 链接操作菜单与隔离网站预览
  - [#5851](https://github.com/HKUDS/nanobot/pull/5851) Token 用量区间 + 活动日历 + 模型拆分
  - [#5848](https://github.com/HKUDS/nanobot/pull/5848) 安全 Mermaid 渲染（懒加载、source 兜底）

- **命令系统正式化 [#5854](https://github.com/HKUDS/nanobot/pull/5854)**：可重用 prompt commands（实例用户/工作区两种 scope、字面量 `$ARGUMENTS`、命名保留），配套 Commands Tab 管理 UI。预示 NanoBot 正从 "Skills + 临时 prompt" 双轨走向 **三层可扩展抽象（Skill / Command / Tool）**。

- **第三方 MCP 接入示例 [#5858](https://github.com/HKUDS/nanobot/pull/5858)**：Adam Network 集成示例，强化 **agent × open social** 叙事。

- **OpenRouter JEV 复用客户端 [#5825](https://github.com/HKUDS/nanobot/pull/5825)**：为心跳、shell 策略、provider selection 提供统一抽象。

**路线图信号**：WebUI 收尾阶段 + Memory/Tooling 稳定性巩固 + Provider/Channel 边界清晰化，是近期三大主线。

---

## 7. 用户反馈摘要

由于多数新增 Issue 评论数仍为 0，公开反馈集中在 **易复现 + 高频痛点** 维度：

- **🔴 长会话不可控**（[#5843](https://github.com/HKUDS/nanobot/issues/5843)）：用户使用 `nanobot gateway --verbose` 实时观察，发现每轮 10s+ 等待发生在 **provider 请求前**，意味着问题不在上游 LLM，而在 NanoBot 自身的预处理链路。`@Lucky314159` 期望维护者明确"是否预期"——这其实是性能回归。
- **🔴 自动压缩不可逆**（[#5849](https://github.com/HKUDS/nanobot/issues/5849)）：用户报告 manual `archive_session` 走得通，但 `summarize_transcript` 在历史超长后陷入死循环，可能导致 **数据丢失式 Bug**。
- **🟡 移动端 UX 错觉**（[#5770](https://github.com/HKUDS/nanobot/issues/5770)）：触屏环境没有 hover 状态，搜索按钮浮窗被用户误解为"搜索框自动弹出"。提示维护者：hover 衍生样式需主动区分触屏设备。
- **🟢 编辑器体验退化**（[#5795](https://github.com/HKUDS/nanobot/pull/5795)/[#5796](https://github.com/HKUDS/nanobot/pull/5796)）：fallback 缩进丢失、空白挤压——这是 high-frequency 低严重度的"小坑"。

**整体满意度推断**：用户对 **底层能力（记忆、压缩、长会话）** 容忍度较低、对 **WebUI** 改进持有较高期待。修复侧响应速度让社区信任度得以维持，但 **版本发布节奏** 需要跟进。

---

## 8. 待处理积压

需维护者优先关注的长期未结项：

| 编号 | 类型 | 首次提交 | 当前停留 | 风险等级 | 链接 |
| --- | --- | --- | --- | --- | --- |
| [#5412](https://github.com/HKUDS/nanobot/pull/5412) | PR (标记 conflict) | 2026-08-17 | ~36 天 | 中 | [链接](https://github.com/HKUDS/nanobot/pull/5412) |
| [#4819](https://github.com/HKUDS/nanobot/pull/4819) | PR (bug fix) | 2026-07-06 | ~78 天 | 高 | [链接](https://github.com/HKUDS/nanobot/pull/4819) |
| [#4820](https://github.com/HKUDS/nanobot/pull/4820) | PR (bug fix) | 2026-07-06 | ~78 天 | 中 | [链接](https://github.com/HKUDS/nanobot/pull/4820) |

**关注建议**：
- `#4819` 涉及的 consolidation lock 在 GC 时被回收，是一个 **潜在并发安全** 风险，已 78 天未见合并，应优先处置。
- `#5412` 标题已被作者自标 `[conflict]`，建议作者 rebase 后重新提请评审。
- 新进入的 `#5843`、`#5849` 若不及时合并进 release，分支将逐渐 drift。

---

## 综合评估

| 维度 | 评分 | 说明 |
| --- | --- | --- |
| **响应敏捷度** | ⭐⭐⭐⭐⭐ | Bug 当日 → 修复 PR 当日 |
| **版本节奏** | ⭐⭐ | 0 发版，31 PR 待消化 |
| **稳定性** | ⭐⭐⭐ | P0 风险已识别但尚未发布修复 |
| **社区活跃度** | ⭐⭐⭐⭐ | 高频 PR 提交，跨领域并行 |
| **技术债治理** | ⭐⭐ | 78 天的 #4819 仍未合并 |

**一句话总结**：修复足够敏捷，但发版节奏需要跟上。今日若能完成 #5846、#5857 的合并并发布 patch 版本，将显著提升项目健康度与社区信心。

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

<think>Let me analyze the data provided for PicoClaw (github.com/sipeed/picoclaw) and generate a project daily report for 2026-09-22.

Key data points:
- 3 Issues updated in past 24 hours (2 active, 1 closed)
- 3 PRs updated in past 24 hours (2 pending, 1 closed/merged)
- 0 new releases
- No recent releases

Issues:
1. #3281 - BUG - Web UI chat input laggy with longer history (OPEN, 13 comments, 2 likes)
2. #3366 - Feature - OpenAI compatible providers support (OPEN, 4 comments)
3. #3365 - QQ channel 401 error - stale botgo issue (CLOSED)

PRs:
1. #3378 - fix(auth): use configured scopes (OPEN)
2. #3384 - Misplaced PR - CLOSED (AI agent wrong repo)
3. #3354 - feat(irc): IRCv3 multiline messages (OPEN)

Now let me write the report in Chinese, professional, data-driven, focused on project health.</think>

# PicoClaw 项目动态日报

**日期：2026-09-22**
**仓库：[sipeed/picoclaw](https://github.com/sipeed/picoclaw)**
**当前版本：0.3.1**

---

## 1. 今日速览

PicoClaw 过去 24 小时整体活跃度处于**中等偏低水平**：共 3 条 Issue 更新（2 活跃 / 1 关闭）、3 条 PR 更新（2 待合并 / 1 已关闭），无新版本发布。社区讨论集中在 Web UI 性能缺陷（#3281）与 OpenAI 兼容 Provider 扩展（#3366）两条主线，外部依赖导致的 QQ 频道故障（#3365）已以 stale 形式归档关闭。值得注意的是 PR #3384 为 AI Agent 误投递（错放仓库），已由维护者快速处置并关闭。

---

## 2. 版本发布

⚠️ **今日无新版本发布。**

当前最新稳定版本仍为 **0.3.1**。从历史节奏看，距离上次正式发版已有较长时间，社区沉淀了多条未修复的 Bug 与 Feature 请求，亟需一次新的发布（如 0.3.2 补丁版或 0.4.0 功能版）来收尾积压。

---

## 3. 项目进展

今日无 PR 合并或实质性推进。值得记录的事项：

- **PR #3384 已关闭**：[链接](https://github.com/sipeed/picoclaw/pull/3384) —— 该 PR 为 AI Agent 在错误仓库提交（"Misplaced PR, please ignore"），维护者当日即关闭，避免了噪声扩散，仓库治理效率良好。
- **PR #3378 仍待合并**：[链接](https://github.com/sipeed/picoclaw/pull/3378) —— 修复 `RefreshAccessToken` 中硬编码 `openid profile email` scope 的问题，已存在 10 天但尚未获得维护者 Review。
- **PR #3354 仍待合并**：[链接](https://github.com/sipeed/picoclaw/pull/3354) —— IRCv3 `draft/multiline` 接收能力支持，已存在 22 天，无任何评论反馈，处于"悬挂"状态。

> 📉 **评估**：今日项目**净推进为零**。两条待合并 PR 均进入"静默期"，建议维护者介入 review，避免贡献者流失。

---

## 4. 社区热点

### 🔥 热点 1：Web UI 输入卡顿 — Issue #3281
- 链接：[#3281](https://github.com/sipeed/picoclaw/issues/3281)
- **13 条评论 / 👍2 / 已开放 60 天**
- **诉求分析**：用户反馈当会话历史稍长时，Web UI 聊天输入框打字严重卡顿（PicoClaw Web 通道，v0.3.1）。该问题讨论数高、跨时长持续活跃，说明并非偶发，而是影响日常使用的**普遍体验问题**。至今无明确修复方案或对应 PR 关联，是当前 Web 用户最大的痛点。

### 🔥 热点 2：OpenAI 兼容 Provider 支持 — Issue #3366
- 链接：[#3366](https://github.com/sipeed/picoclaw/issues/3366)
- **4 条评论 / 👍0 / 已开放 17 天**
- **诉求分析**：用户希望增加"OpenAI Compatible"通用 Provider，以接入自托管路由（如 9Router）等第三方兼容服务。这反映了 PicoClaw 用户群体中**自部署 / 私有化**诉求正在增强，Provider 体系从单一官方扩展到生态兼容是合理演进方向。

### 热点 3：QQ 频道 401 故障归档 — Issue #3365
- 链接：[#3365](https://github.com/sipeed/picoclaw/issues/3365)
- 3 条评论 / 👍1 / 已关闭（stale）
- 根因为 `botgo v0.2.1` 与 `resty >= v2.17` 不兼容，属外部依赖问题，与 PicoClaw 主仓库代码无关。

---

## 5. Bug 与稳定性

| 严重程度 | Issue | 描述 | 状态 | 是否已有 Fix PR |
|---|---|---|---|---|
| 🟠 **中高** | [#3281](https://github.com/sipeed/picoclaw/issues/3281) | Web UI 长历史下输入卡顿 | OPEN | ❌ 无 |
| 🟡 中 | [#3365](https://github.com/sipeed/picoclaw/issues/3365) | QQ 频道 401（botgo + resty 兼容性问题） | CLOSED（stale） | ❌ 非本仓库问题 |

> **建议**：#3281 是当前唯一持续影响终端用户日常使用的 Bug，建议优先排查前端渲染或输入防抖逻辑，关联到 Web 模块的近期 PR 中。

---

## 6. 功能请求与路线图信号

### 📌 Feature #3366 — OpenAI 兼容 Provider
- 链接：[#3366](https://github.com/sipeed/picoclaw/issues/3366)
- 实现成本较低（提案者建议直接复用 OpenAI provider 模板），社区共鸣度高（4 条讨论），**纳入下个版本可能性较高**。
- 建议路线：纳入 0.4.0 作为 Provider 矩阵扩展项。

### 📌 PR #3354 — IRCv3 multiline 支持
- 链接：[#3354](https://github.com/sipeed/picoclaw/pull/3354)
- IRC 通道增强，属于"补全协议能力"性质，对 IRC 场景用户有意义。已待合并 22 天，若通过审查，可作为 0.4.0 通道增强项一并发布。

### 📌 PR #3378 — OAuth Refresh Scope 修复
- 链接：[#3378](https://github.com/sipeed/picoclaw/pull/3378)
- 虽标为 fix，但实质扩展了 OAuth provider 的配置自由度，可视为**轻量功能增强**。建议优先合并至下一个补丁版本。

---

## 7. 用户反馈摘要

- **Web 终端用户痛点集中**：#3281 高达 13 条评论表明，Web UI 的中长会话性能问题已经成为 PicoClaw 用户最普遍的负面体验，涉及 UI 流畅度、输入响应、状态管理等基础交互质量。
- **私有化部署需求上升**：#3366 反映出用户不再满足于官方 Provider 列表，希望接入自托管路由 / 多模型聚合层，这要求 PicoClaw 在 Provider 抽象层做得更通用。
- **外部依赖治理欠缺**：#3365 暴露了 QQ 通道底层依赖 (`botgo`) 维护停滞、版本兼容性无人跟进的问题，用户在 issue 中已自行定位到根因，但项目侧缺乏对第三方库的版本约束管理。
- **AI Agent 噪声**：PR #3384 提示仓库需要更明确的 CONTRIBUTING 引导，避免自动化代理误投。

---

## 8. 待处理积压 ⚠️

下表列出已进入"静默期"但尚未关闭的重要项，建议维护者本周内跟进：

| 编号 | 类型 | 标题 | 待处理天数 | 链接 |
|---|---|---|---|---|
| #3378 | PR | fix(auth): use configured scopes instead of hardcoded default | **10 天** | [查看](https://github.com/sipeed/picoclaw/pull/3378) |
| #3354 | PR | feat(irc): assemble IRCv3 multiline messages | **22 天** | [查看](https://github.com/sipeed/picoclaw/pull/3354) |
| #3281 | Issue | Web UI chat input is very laggy when history has a little bit long | **63 天** | [查看](https://github.com/sipeed/picoclaw/issues/3281) |
| #3366 | Issue | Add support for OpenAI compatible providers | **18 天** | [查看](https://github.com/sipeed/picoclaw/issues/3366) |

> 🎯 **特别提醒**：#3281 已积压 63 天且仍是当前最高活跃度 Issue，强烈建议设置一个 milestone 或挂上 in-progress 标签，给社区明确预期。

---

## 📊 项目健康度评分

| 维度 | 评分 | 说明 |
|---|---|---|
| 活跃度 | ⭐⭐☆☆☆ | Issue/PR 更新量低，无新发布 |
| 响应及时性 | ⭐⭐⭐☆☆ | 杂项 PR 处理快，但核心 Bug 与功能 PR 长期挂起 |
| 社区参与度 | ⭐⭐⭐⭐☆ | 用户讨论质量高，能自定位根因 |
| 路线透明度 | ⭐⭐☆☆☆ | 缺少 milestone、roadmap 公示 |
| 综合 | ⭐⭐⭐☆☆ | 整体稳健但推进节奏偏慢，需激活 release 周期 |

---

*报告基于 GitHub 公开数据自动生成，数据时点 2026-09-22。*

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

<think>The user wants me to generate a daily report for the IronClaw project based on GitHub data from the last 24 hours. Let me analyze the data carefully:

**Data Summary:**
- Issues updates: 1 (new/active: 1, closed: 0)
- PR updates: 0
- New releases: 0
- Only 1 issue: #8106 "Daily ironclaw failure taxonomy — 2026-09-21" by @pranavraja99, opened and updated on 2026-09-21, 0 comments, 0 likes
- The issue is about analyzing failure suites, specifically officeqa with 47 non-pass tasks attributed to genuine model-quality errors with DeepSeek-V4-Flash

Let me craft a professional, data-driven daily report in Chinese. Since the activity is very low (only 1 issue, 0 PRs, 0 releases), I need to be honest about this while still providing useful analysis.

I should structure it according to the requested sections:
1. 今日速览
2. 版本发布 (skip if none)
3. 项目进展
4. 社区热点
5. Bug 与稳定性
6. 功能请求与路线图信号
7. 用户反馈摘要
8. 待处理积压

Let me write this thoughtfully and professionally.</think>

# IronClaw 项目日报
**日期：2026-09-22**
**数据周期：过去 24 小时**

---

## 1. 今日速览

IronClaw 在过去 24 小时内社区活跃度处于**低位**。仅新增/更新 1 条 Issue（#8106），无新 PR 提交，无版本发布。该 Issue 属于自动化生成的"每日失败分类（Daily failure taxonomy）"系列报告，由 @pranavraja99 创建，用于记录 Benchmark 测试套件的失败模式分析。整体来看，项目当日处于"维护观察期"，无代码层面的推进迹象，但基准测试的持续监控机制仍在正常运转。

---

## 2. 版本发布

**无新版本发布。** 过去 24 小时内未检测到任何 Release 事件。建议关注 `nearai/ironclaw` 的 Releases 页面以获取下一次发版信息。

---

## 3. 项目进展

**今日无 PR 合并或关闭。** 项目代码主干在过去 24 小时内无任何 Pull Request 层面的推进。这意味着：

- 没有新功能合入主干
- 没有 Bug 修复通过 PR 渠道落地
- 项目当日整体向前推进幅度：**≈ 0**

如需评估更长时间窗口的进展，请参考 GitHub 项目 Insights 中的近期合并趋势。

---

## 4. 社区热点

过去 24 小时内讨论/互动热度极低，**仅 1 条 Issue 被创建或更新，且评论数为 0、点赞数为 0**。

| 排名 | Issue | 评论数 | 点赞数 | 链接 |
|------|-------|--------|--------|------|
| 1 | #8106 Daily ironclaw failure taxonomy — 2026-09-21 | 0 | 0 | [链接](https://github.com/nearai/ironclaw/issues/8106) |

**分析：** 该 Issue 属于 NearAI 团队的**自动化质量监控流程产物**，而非用户驱动型讨论。它系统性地记录了 `officeqa` 套件中 47 个非通过任务的失败归因，初步结论是这些失败主要归因于 **DeepSeek-V4-Flash 模型自身的质量问题**，而非 IronClaw 框架缺陷。这一信号对项目维护者具有参考价值——它表明当前框架在基准测试中的失败主要源自上游模型能力，而非架构或集成层问题。

---

## 5. Bug 与稳定性

**今日未报告新的 Bug、崩溃或回归问题。**

需要注意的是，#8106 中提到的"47 个非通过任务"虽然形式上看起来是质量事件，但其本质是**模型层失败**而非 IronClaw 的工程缺陷：

- **严重程度评估：** 低（框架侧）
- **是否已有修复 PR：** 否（且当前阶段无需框架侧修复）
- **建议行动：** 持续观察后续每日 taxonomy 报告，确认失败分布是否稳定

如用户在使用过程中遇到实际 Bug，建议通过标准 Bug Report 模板提交，以便与每日 taxonomy 报告区分开来。

---

## 6. 功能请求与路线图信号

**今日无新功能请求（Feature Request）提交。**

由于社区互动为零，暂时无法从用户侧提取路线图信号。维护者可考虑以下方向来提升路线图透明度：

1. 在 Issue 模板中区分"功能请求"与"自动监控报告"
2. 定期汇总 DeepSeek-V4-Flash 等模型在 IronClaw 上的失败模式，作为模型选型与替换决策依据
3. 关注上游 `nearai` 组织在 Benchmarks 项目上的演进（参考 Issue 中链接的 [benchmarks dashboard](https://nearai.github.io/benchmarks/#/runs/ironclaw/officeqa/ef1d4e48-f5c3-46c7-9666-64a03d750b2a)）

---

## 7. 用户反馈摘要

过去 24 小时内**无真实用户反馈产生**。唯一更新的 Issue（#8106）为内部自动化报告，评论数为 0，未包含任何用户痛点、使用场景或满意度表达。

**当前可观察的间接信号：**
- 项目公开 Issue 渠道的当日用户参与度为零
- 失败分类机制已迁移到 GitHub Issues 进行归档（而非仅在内部系统），说明 NearAI 团队在提升基准测试透明度

---

## 8. 待处理积压

由于当日新增/活跃 Issue 仅 1 条且无 PR，**今日无新增积压**。

**长期提醒（基于历史观察）：**
- 建议维护者定期审查 `nearai/ironclaw` 中标签为 `good first issue`、`help wanted` 的长期未响应 Issue
- 由于自动化 taxonomy Issue 会持续每日生成（预计 Issue 编号将持续递增），建议建立归档/锁定机制，避免淹没人工 Issue 列表，影响真实用户反馈的可发现性

---

## 📊 项目健康度总评

| 维度 | 评分 | 说明 |
|------|------|------|
| 代码推进 | ⭐☆☆☆☆ | 无 PR 活动 |
| 社区活跃 | ⭐☆☆☆☆ | 无用户互动 |
| 质量监控 | ⭐⭐⭐⭐☆ | 自动化 taxonomy 机制稳定运行 |
| 文档透明度 | ⭐⭐⭐⭐☆ | Benchmark 结果通过 Issue 公开发布 |

**一句话总结：** IronClaw 当日处于"静默维护期"，无实质代码或社区层面的推进，但自动化质量监控体系仍在稳定产出，框架本身未报告工程缺陷。

---

*报告生成时间：2026-09-22 ｜ 数据来源：GitHub REST API（nearai/ironclaw）*

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

<think>The user wants me to generate a daily report for the LobsterAI project based on the GitHub data provided. Let me analyze the data carefully and structure the report according to the 8 sections requested.

Let me go through the data:

**Issues (2 total, both OPEN):**
1. #2738 - [Feature]支持不重启网关切换工作区 - Created 2026-09-21, 1 comment
2. #989 - [stale] Tavily mcp 不可用 - Created 2026-03-27, updated 2026-09-21 (stale, ~6 months old)

**PRs (15 total):**
- OPEN: #2739 (Parallel web search), #1277 (dependabot electron update - stale since 2026-04-02)
- CLOSED: #2741, #2740, #2736, #2737, #2734, #2704, #2735, #2733, #2719, #2732, #998, #999, #1067

**No new releases**

Key themes from PRs:
- Many openclaw-related fixes (IM, scheduled tasks, Feishu delivery, gateway startup, identity migration, weixin pairing)
- macOS-specific issues (tmpdir symlinks, CJK font weight)
- Browser credential storage improvements
- Legacy migration fixes
- Web search engine addition
- Electron dependency updates (stale)

Let me now structure the report:

1. **今日速览** - High activity: 15 PRs (mostly closed/merged), 2 issues, no releases. The project shows strong maintenance activity with multiple bug fixes, particularly around the openclaw gateway and macOS-specific issues.

2. **版本发布** - No new releases, skip or briefly note.

3. **项目进展** - Multiple merged/closed PRs focused on openclaw stability, macOS fixes, and legacy data migration. Specific PRs:
   - #2741: Fix nsp-clawguard startup issue
   - #2740: CJK font weight fix
   - #2736: Browser credentials explicit access
   - #2737: Restore native scheduled tasks and Feishu delivery
   - #2734: Weixin allowFrom migration
   - #2735: Legacy identity conflict resolution
   - #2719: Repair leftovers from older builds
   - #2704/2733: macOS tmpdir symlinks test fix
   - #998, #999: Cmd+K panel and floating toolbar (stale, just closed)
   - #1067: Stop auto-creating [OpenClaw] session

4. **社区热点** - #2738 is the most recent feature request with 1 comment. #989 is a long-standing issue. Not much engagement visible.

5. **Bug 与稳定性** - Critical fixes for:
   - nsp-clawguard startup failure (#2741) - HIGH
   - OpenClaw gateway startup failures from legacy data (#2735, #2719, #2734) - HIGH
   - IM scheduled tasks broken (#2737) - MEDIUM
   - macOS test failures (#2704/2733) - LOW
   - Tavily mcp 401 error (#989) - MEDIUM, stale

6. **功能请求与路线图信号** - #2738 (hot-swap workspaces without gateway restart), #2739 (Parallel web search)

7. **用户反馈摘要** - Performance issues with workspace switching (#2738), Tavily API authentication issues (#989)

8. **待处理积压** - #989 (stale, 6 months), #1277 (stale dependabot, ~5 months)

Let me write this in Chinese as the user requested.</think>

# LobsterAI 项目日报
**日期：2026-09-22**

---

## 1. 今日速览

LobsterAI 今日维持高强度维护节奏，单日合并/关闭 PR 达 **13 个**，新开 Issue **2 条**，无新版本发布。修复热点高度集中于 **OpenClaw 网关启动链路**与 **macOS 平台兼容性**两大方向，体现出 2.4.13 升级后稳定性收尾阶段的特征。仍有 2 条 PR 处于待合并状态（#2739、#1277），需要关注后续评审进展。整体项目健康度：**稳定修复期，活跃度高，但缺乏新功能发布**。

---

## 2. 版本发布

⚠️ **今日无新版本发布。**

从 PR 内容推断，2.4.13 发布包的若干问题（manifest 版本号标注、旧版模块加载、npm 安装残留指向不存在目录等）正通过 #2741 等 PR 进行修复，预计将很快整合进 2.4.14 或 2.5.0。

---

## 3. 项目进展

今日合并/关闭的 13 个 PR 集中在以下三条主线：

### 🚀 OpenClaw 网关稳定性强化（高优先级集群修复）

| PR | 内容 | 影响 |
|---|---|---|
| [#2741](https://github.com/netease-youdao/LobsterAI/pull/2741) | 修复升级后 `nsp-clawguard` 无法启动 | 解决 2.4.13 manifest 错标、旧 npm 路径残留导致 `gateway ready` 阻断 |
| [#2737](https://github.com/netease-youdao/LobsterAI/pull/2737) | 恢复 IM 原生定时任务与飞书投递 | "两分钟后提醒我喝水"等指令可重新走原生调度，飞书账号与会话权限保留 |
| [#2735](https://github.com/netease-youdao/LobsterAI/pull/2735) | 修复 legacy identity 冲突导致启动失败 | SQLite 设备标识与旧 `identity/device.json` 冲突场景下，遵循运行时读取者权威规则 |
| [#2734](https://github.com/netease-youdao/LobsterAI/pull/2734) | 迁移遗留 weixin allowFrom 文件 | 解决 OpenClaw 2026.8.1 因残留 JSON 拒绝进入 ready 状态的问题 |
| [#2719](https://github.com/netease-youdao/LobsterAI/pull/2719) | 启动时自修复旧构建残留 | 卸载重装（Windows 保留 `%APPDATA%\LobsterAI`）后无需用户干预即可启动 |
| [#1067](https://github.com/netease-youdao/LobsterAI/pull/1067) | 阻止心跳事件自动创建 `[OpenClaw]` 会话 | 解决删除后复现的会话污染问题 |

### 🍎 macOS 平台兼容性

| PR | 内容 | 影响 |
|---|---|---|
| [#2736](https://github.com/netease-youdao/LobsterAI/pull/2736) | 浏览器凭据显式请求 OS 安全存储 | 增加 `requestAccess` IPC 流程，仅在用户授权时校验 keychain，避免每次可用性检查触发 OSCrypt |
| [#2740](https://github.com/netease-youdao/LobsterAI/pull/2740) | 还原 CJK 字体正文 weight 至 400 | PingFang SC 可变字重上限 600，原 445 与 markdown `<strong>` 视觉对比塌陷 |
| [#2704](https://github.com/netease-youdao/LobsterAI/pull/2704) / [#2733](https://github.com/netease-youdao/LobsterAI/pull/2733) | 解决 macOS tmpdir 软链接导致单测失败 | `/var/folders/...` → `/private/var` 软链接导致 4 个测试用例本地失败 |

### 🧹 积压清理

- [#998](https://github.com/netease-youdao/LobsterAI/pull/998)（选中文本浮动工具栏）、[#999](https://github.com/netease-youdao/LobsterAI/pull/999)（Cmd+K 命令面板）—— 这两个 2026-03 创建的特性 PR 长期 stale 后今日关闭。

**整体评估：** 项目向前迈进了显著一步，OpenClaw 升级阵痛期的核心痛点基本闭合，但仍未形成新版本发布。

---

## 4. 社区热点

| 议题 | 链接 | 评论数 | 关注点 |
|---|---|---|---|
| 不重启网关切换工作区 | [#2738](https://github.com/netease-youdao/LobsterAI/issues/2738) | 1 | 用户体验层面最直接的效率痛点 |
| Tavily MCP 不可用（401） | [#989](https://github.com/netease-youdao/LobsterAI/issues/989) | 1 | API Key 配置正确但仍鉴权失败，疑为官方端或代理层异常 |

> 📊 当前社区参与度偏低（评论数均为个位数），但功能诉求非常具体且场景化——前者聚焦"高频切换工作区"性能，后者聚焦"已配置但不可用"的鉴权链路，反映出用户对工具可靠性与性能敏感度较高。

---

## 5. Bug 与稳定性

按严重程度排序：

| 严重度 | 问题 | 状态 |
|---|---|---|
| 🔴 **P0** | macOS 升级后 `nsp-clawguard` 启动失败，网关无法进入 ready | ✅ 已有 fix（[#2741](https://github.com/netease-youdao/LobsterAI/pull/2741)） |
| 🔴 **P0** | OpenClaw 升级后因 SQLite/legacy identity 冲突无法启动 | ✅ 已有 fix（[#2735](https://github.com/netease-youdao/LobsterAI/pull/2735)） |
| 🔴 **P0** | 卸载重装后 `%APPDATA%\LobsterAI` 残留配置导致每次启动失败 | ✅ 已有 fix（[#2719](https://github.com/netease-youdao/LobsterAI/pull/2719)） |
| 🟠 **P1** | 微信 pairing 旧 JSON 文件残留阻断启动 | ✅ 已有 fix（[#2734](https://github.com/netease-youdao/LobsterAI/pull/2734)） |
| 🟠 **P1** | IM 通道下"提醒类"指令无法调用原生调度工具，飞书投递失效 | ✅ 已有 fix（[#2737](https://github.com/netease-youdao/LobsterAI/pull/2737)） |
| 🟡 **P2** | PingFang SC 下 markdown `<strong>` 与正文区分度丢失 | ✅ 已有 fix（[#2740](https://github.com/netease-youdao/LobsterAI/pull/2740)） |
| 🟡 **P2** | macOS 本地单测因 `/var` 软链接失败 4 个用例 | ✅ 已有 fix（[#2704](https://github.com/netease-youdao/LobsterAI/pull/2704)） |
| 🟠 **P1** | Tavily MCP 持续返回 401 未授权 | ❌ **无 fix PR**，Issue [#989](https://github.com/netease-youdao/LobsterAI/issues/989) 已 stale ~6 个月 |

**稳定性评估：** 升级阵痛期的核心阻塞 bug 今日已基本闭环，仅剩 Tavily MCP 鉴权问题未获响应。

---

## 6. 功能请求与路线图信号

### 🆕 新增需求

| 需求 | 链接 | 可行性 | 进入下一版本概率 |
|---|---|---|---|
| 支持不重启网关切换工作区 | [#2738](https://github.com/netease-youdao/LobsterAI/issues/2738) | 中——需重新设计网关工作区隔离层 | ⭐⭐⭐（诉求普遍，预计纳入中期路线图） |

### 🔍 待合并 PR 中的能力扩展

| 能力 | PR | 状态 |
|---|---|---|
| Parallel 无密钥 Web Search 引擎（支持匿名 Fast 速率） | [#2739](https://github.com/netease-youdao/LobsterAI/pull/2739) | 🟡 OPEN，由 Parallel 官方账号提交，明显为合作型集成，合并概率高 |
| Electron 43.5.0 → 44.4.2 依赖升级 | [#1277](https://github.com/netease-youdao/LobsterAI/pull/1277) | 🟡 OPEN（stale ~5 个月），需评估升级风险 |

> 💡 **信号**：OpenClaw 稳定化即将进入收尾，下一步重点可能转向**工作流体验优化**与**第三方搜索/工具集成扩展**。

---

## 7. 用户反馈摘要

- **"网关启动耗时超过 10 秒"**（[#2738](https://github.com/netease-youdao/LobsterAI/issues/2738)）—— 用户明确指出本机性能有限时切换工作区的体验损耗，反映出 LobsterAI 在中低端机器上的可用性问题。
- **"api-key 已配置但仍 401"**（[#989](https://github.com/netease-youdao/LobsterAI/issues/989)）—— 用户已自行排除了基础原因，问题长期无回应，反映出官方对第三方 API 集成的排障支持不足。

> 😐 满意度信号：未观察到针对近期版本的正向反馈；活跃讨论均集中在缺陷与体验痛点。

---

## 8. 待处理积压

| 类型 | 编号 | 主题 | 滞留时长 | 风险 |
|---|---|---|---|---|
| Issue | [#989](https://github.com/netease-youdao/LobsterAI/issues/989) | Tavily MCP 401 | ~6 个月 | 第三方集成实质不可用 |
| PR | [#1277](https://github.com/netease-youdao/LobsterAI/pull/1277) | Electron 依赖升级（Dependabot） | ~5 个月 | 安全/版本滞后 |
| PR | [#2739](https://github.com/netease-youdao/LobsterAI/pull/2739) | Parallel 无密钥搜索 | 1 天 | 刚开，暂无评审风险 |

> ⚠️ **维护者建议**：Tavily MCP 问题虽然 stale，但代表了"已配置却失效"这一类高度影响信任的用户场景，建议在下一个迭代周期优先排查（即便关闭 Issue 也应给出官方排障文档或解决方案）。

---

**报告生成时间：2026-09-22 ｜ 数据来源：GitHub REST API**

</details>

<details>
<summary><strong>QwenPaw</strong> — <a href="https://github.com/agentscope-ai/QwenPaw">agentscope-ai/QwenPaw</a></summary>

<think>The user wants me to generate a daily project report for QwenPaw (github.com/agentscope-ai/QwenPaw) based on the GitHub data provided. Let me analyze the data carefully and structure the report according to the 8 sections requested.

Let me analyze the data:

**Issues (23 total):**
- 12 closed, 11 open
- Notable issues:
  - #7739 [CLOSED] - UI enhancement: history to right side
  - #7559 [CLOSED] - Bug: 409 error when sending messages during task execution
  - #7859 [OPEN] - SECURITY: Persistent prompt injection trying to delete all skills
  - #7883 [OPEN] - Bug: PDF serialization issue with DeepSeek
  - #7628 [OPEN] - Bug: Context compaction exceeds budget
  - #5909 [CLOSED] - Design proposal: theme/skin module
  - #7905 [CLOSED] - Bug: DoomLoopGate escalates on text-only
  - #3419 [OPEN] - Bug: JD Cloud Coding Plan session interruption
  - #7585 [CLOSED] - Bug: Telegram Markdown tables not rendering
  - #7287 [CLOSED] - Enhancement: Skin gateway proposal
  - #7841 [OPEN] - Bug: Console UI loads before backend ready
  - #7882 [CLOSED] - Bug: OpenCode free models 403 error
  - #7531 [CLOSED] - Bug: OpenCode requires x-opencode-session header
  - #7916 [OPEN] - AgentScope Platform validator missing memory plugin types
  - #7925 [OPEN] - Question: Benchmarks comparison
  - #7924 [OPEN] - Bug: Markdown tables too wide in Console
  - #7921 [OPEN] - Bug: omp-roles SKILL.md missing YAML frontmatter
  - #7907 [CLOSED] - Bug: Responses API tool schema nullable removal
  - #6167 [CLOSED] - Feature: Model Provider Layer Optimization
  - #7912 [OPEN] - Docs: Authenticated MCP web-research example
  - #5921 [CLOSED] - Design proposal: KaTeX math rendering
  - #7866 [CLOSED] - Bug: File-area tab shows pre-edit content
  - #7908 [OPEN] - Bug: Windows Console Ctrl event terminates host

**PRs (36 total):**
- 16 pending, 20 merged/closed
- Notable PRs:
  - #7928 - Release notes for v2.2.2
  - #7639 [CLOSED] - perf(scroll): history integrity scans
  - #7713 [CLOSED] - feat(telegram): Rich Messages for tables
  - #7922 - fix(omp): SKILL.md frontmatter
  - #7920 [CLOSED] - fix: default thinking and model onboarding
  - #7927 - fix(web): html2text to markdownify
  - #7861 - feat(console): multi-tab terminal
  - #7926 - fix(tools): run_tool_batch governance bypass
  - #7655 - fix(history): FTS corruption
  - #7910 - fix(shell): Windows console isolation
  - #7923 - feat(scroll): age out tool_result blocks
  - #7917 [CLOSED] - fix(console): API loading
  - #7889 - fix(console): DOM-mutation errors
  - #7874 - feat(pawapp): SDK and app control plane
  - #5992 - per-session model overrides
  - #6399 [CLOSED] - reranker UI config
  - #7915 [CLOSED] - fix(responses): default non-strict mode
  - #7899 [CLOSED] - feat(providers): unify model discovery
  - #7919 [CLOSED] - fix: doom loop escalation
  - #7913 [CLOSED] - chore(deps): agentscope 2.0.8

Now let me write the report in Chinese, structured according to the 8 sections.

Let me think about the key insights:

1. **Activity level**: Very high - 59 total updates (23 issues + 36 PRs), 20 closed issues, multiple security-related issues, v2.2.2 release prep
2. **Notable trends**: 
   - Multiple provider integration issues (OpenCode, DeepSeek, Responses API)
   - Windows-specific issues
   - Security concern about prompt injection
   - Strong feature work on console/terminal
   - v2.2.2 release notes being prepared
3. **Cross-references**: 
   - #7905 (closed) → #7919 (closed): DoomLoopGate fix
   - #7883 (open) → #7597: PDF serialization regression
   - #7866 (closed): File area tab fix
   - #7628 (open): Context compaction needs work
   - #7908 (open) → #7910: Windows console isolation
   - #7921 (open) → #7922: omp-roles frontmatter fix
   - #7585 (closed) → #7713 (closed): Telegram tables fix
   - #7531 (closed) → #7882 (closed): OpenCode provider issues
   - #7907 (closed) → #7915 (closed): Responses API strict mode fix
   - #6167 (closed) → #7920 (closed) / #7899 (closed): Model provider layer optimization

Let me write a comprehensive but concise report.</think>

# QwenPaw 项目动态日报

**日期：2026-09-22**
**数据来源：[github.com/agentscope-ai/QwenPaw](https://github.com/agentscope-ai/QwenPaw)**

---

## 1. 今日速览

QwenPaw 今日继续保持高活跃度，过去 24 小时共产生 **59 条动态**（23 个 Issue 更新 + 36 个 PR 更新），整体节奏明显在为 **v2.2.2 版本发布做准备**（PR #7928 正在准备 release notes）。当日关闭 12 个 Issue 与 20 个 PR，闭环效率良好；同时出现一条 **较为严重的安全类 Issue（#7859 提示词注入试图删除全部 skills）** 及多个平台兼容性问题（Windows 控制台中断、DeepSeek PDF 序列化、OpenCode 提供商变更）。社区贡献面广，含首次贡献者（first-time-contributor）参与修复，整体项目健康度处于活跃迭代期。

---

## 2. 版本发布

⚠️ **无正式版本发布**，但 PR [#7928](https://github.com/agentscope-ai/QwenPaw/pull/7928) **「chore: release notes for v2.2.2」** 已于今日创建（OPEN 状态），表明维护者正在为 v2.2.2 做收尾。同时 PR [#7913](https://github.com/agentscope-ai/QwenPaw/pull/7913) 已被关闭，将 `agentscope` 依赖升级到 **2.0.8**，预计将在 v2.2.2 中生效。

建议关注 v2.2.2 候选中可能合入的修复（见下文"项目进展"）。

---

## 3. 项目进展

今日合并/关闭的 PR 中，对项目推进意义较大的包括：

| PR | 类型 | 意义 |
|---|---|---|
| [#7899](https://github.com/agentscope-ai/QwenPaw/pull/7899) `feat(providers): unify model discovery, pricing, selection and thinking controls` | 合并 | 落实 Issue [#6167](https://github.com/agentscope-ai/QwenPaw/issues/6167) 的提供商层架构重构，统一模型发现 / 定价 / 选择 / 思考控制，**属于 v2.2.2 关键里程碑** |
| [#7920](https://github.com/agentscope-ai/QwenPaw/pull/7920) `fix: resolve default thinking and streamline model onboarding` | 合并 | 修复默认思考深度解析、模型选择器空白等体验问题 |
| [#7919](https://github.com/agentscope-ai/QwenPaw/pull/7919) `fix: require new tool-call evidence for doom loop escalation` | 合并 | 关闭 Issue [#7905](https://github.com/agentscope-ai/QwenPaw/issues/7905)：DoomLoopGate 在无新工具调用证据时不再升级至 TERMINATE |
| [#7915](https://github.com/agentscope-ai/QwenPaw/pull/7915) `fix(responses): default function tools to non-strict mode` | 合并 | 关闭 Issue [#7907](https://github.com/agentscope-ai/QwenPaw/issues/7907)：修复 Responses API 在 nullable 字段移除后把可选参数变成必填的回归 |
| [#7713](https://github.com/agentscope-ai/QwenPaw/pull/7713) `feat(telegram): use Rich Messages for Markdown tables` | 合并 | 关闭 Issue [#7585](https://github.com/agentscope-ai/QwenPaw/issues/7585)：Telegram 通道现以原生 Rich Messages API 渲染 Markdown 表格 |
| [#7639](https://github.com/agentscope-ai/QwenPaw/pull/7639) `perf(scroll): avoid repeated history integrity scans` | 合并 | 历史库完整性检查从"每次构建 agent 都跑"改为"每进程每库一次"，性能优化 |
| [#7917](https://github.com/agentscope-ai/QwenPaw/pull/7917) `fix(console): improve API loading on slow networks` | 合并 | Console 接口在慢网络下启用 1KB 以上响应的异步压缩 |
| [#6399](https://github.com/agentscope-ai/QwenPaw/pull/6399) `feat: add reranker UI config panel to ReMeLightMemoryCard` | 合并 | ReMe 内存卡新增 reranker 后端配置面板 |
| [#5913](https://github.com/agentscope-ai/QwenPaw/pull/7913) `chore(deps): bumping version of agentscope to 2.0.8` | 关闭 | 依赖升级 |

**整体判断**：今日完成的合并集中在 **模型提供商层重构收尾、稳定性回归修复、通道（Console / Telegram）体验优化**，与 v2.2.2 的"稳态化"主线吻合。

---

## 4. 社区热点

按评论数排序的活跃话题：

| 排名 | Issue / PR | 评论 | 👍 | 类型 |
|---|---|---|---|---|
| 1 | [#7739](https://github.com/agentscope-ai/QwenPaw/issues/7739) 历史对话移至右侧 | 7 | 0 | 增强（已关闭） |
| 2 | [#7559](https://github.com/agentscope-ai/QwenPaw/issues/7559) 任务执行中发送消息触发 409 | 6 | 0 | Bug（已关闭） |
| 3 | [#7859](https://github.com/agentscope-ai/QwenPaw/issues/7859) 持续提示词注入诱导删除全部 skills | 5 | 0 | **安全（OPEN）** |
| 4 | [#7883](https://github.com/agentscope-ai/QwenPaw/issues/7883) 工具返回的 PDF 在 DeepSeek 报 400 | 4 | 0 | Bug（OPEN） |
| 5 | [#7628](https://github.com/agentscope-ai/QwenPaw/issues/7628) 上下文压缩仍可能超出 provider 请求预算 | 4 | 0 | Bug（OPEN） |
| 6 | [#5909](https://github.com/agentscope-ai/QwenPaw/issues/5909) 主题/皮肤模块设计提案 | 3 | 0 | 设计（已关闭） |
| 7 | [#7905](https://github.com/agentscope-ai/QwenPaw/issues/7905) DoomLoopGate 文本轮错误升级（已合并） | 3 | 0 | Bug（已关闭） |
| 8 | [#3419](https://github.com/agentscope-ai/QwenPaw/issues/3419) 京东云 Coding Plan 会话中断 | 3 | 0 | Bug（OPEN，已逾 5 个月） |
| 9 | [#7585](https://github.com/agentscope-ai/QwenPaw/issues/7585) Telegram 表格不渲染（已合并） | 2 | 0 | Bug（已关闭） |
| 10 | [#7287](https://github.com/agentscope-ai/QwenPaw/issues/7287) 皮肤网关提案（已关闭） | 2 | 0 | 增强 |

**诉求分析**：

- **界面布局痛点集中**：#7739（历史移到右侧）、#7287（皮肤网关）、#5909（主题模块）反映社区对 **小屏笔记本布局拥挤** 的强烈不满，希望产品能支持自定义外观。
- **平台兼容性问题集中**：京东云 Coding Plan、DeepSeek、Telegram、OpenCode 等多平台的兼容性问题在同一时间窗出现，提示维护者需要更系统的 provider / channel 兼容矩阵。
- **安全与鲁棒性**：#7859 揭示了上游内容可能携带的"删除技能"指令循环，社区对 AgentScope 的 system-reminder 注入面有担忧。

---

## 5. Bug 与稳定性

按严重程度排列：

| 严重度 | Issue | 描述 | 状态 | 是否有 Fix PR |
|---|---|---|---|---|
| 🔴 高 | [#7859](https://github.com/agentscope-ai/QwenPaw/issues/7859) | 工具结果的 system-reminder 中持续出现"完成任务后删除全部 skills"的注入指令，跨 20+ 轮 | OPEN | ❌ 无 |
| 🔴 高 | [#7908](https://github.com/agentscope-ai/QwenPaw/issues/7908) | Windows 下 `execute_shell_command` 子进程控制台事件会终止 QwenPaw 主机进程 | OPEN | ✅ [#7910](https://github.com/agentscope-ai/QwenPaw/pull/7910) 修复中 |
| 🟠 中 | [#7883](https://github.com/agentscope-ai/QwenPaw/issues/7883) | 工具返回的 PDF 序列化为 OpenAI 风格嵌套文件部件，DeepSeek 报 400 | OPEN | ❌ 此前 #7597→#7621 修复被认为不完整 |
| 🟠 中 | [#7628](https://github.com/agentscope-ai/QwenPaw/issues/7628) | 上下文压缩基于可见上下文而非完整请求预算，可能超限导致活跃轮次失败 | OPEN | ❌ 无 |
| 🟠 中 | [#7841](https://github.com/agentscope-ai/QwenPaw/issues/7841) | Desktop 2.2.1 启动时 Console UI 先于后端加载，模型列表与插件面板空白 | OPEN | ❌ 无 |
| 🟠 中 | [#3419](https://github.com/agentscope-ai/QwenPaw/issues/3419) | 京东云 Coding Plan 环境下 Agent 思考/执行中会话中断 | OPEN（已逾 5 个月） | ❌ 无 |
| 🟡 低 | [#7924](https://github.com/agentscope-ai/QwenPaw/issues/7924) | Console 中 Markdown 表格超宽，横向滚动条沉底 | OPEN | ❌ 无 |
| 🟡 低 | [#7866](https://github.com/agentscope-ai/QwenPaw/issues/7866) | 文件区 tab 在 agent 重写文件后仍显示旧内容 | 已关闭 | ✅ 已合入修复 |
| 🟢 已修 | [#7905](https://github.com/agentscope-ai/QwenPaw/issues/7905) | DoomLoopGate 在文本轮错误升级 | 已关闭 | ✅ [#7919](https://github.com/agentscope-ai/QwenPaw/pull/7919) |
| 🟢 已修 | [#7907](https://github.com/agentscope-ai/QwenPaw/issues/7907) | Responses API 可选参数变必填 | 已关闭 | ✅ [#7915](https://github.com/agentscope-ai/QwenPaw/pull/7915) |
| 🟢 已修 | [#7531](https://github.com/agentscope-ai/QwenPaw/issues/7531) / [#7882](https://github.com/agentscope-ai/QwenPaw/issues/7882) | OpenCode 提供商需要 `x-opencode-session` 头与"免费"模型 403 | 已关闭 | ✅ 已在 v2.2.x 处理 |
| 🟢 已修 | [#7559](https://github.com/agentscope-ai/QwenPaw/issues/7559) | 任务执行中发消息触发 409 | 已关闭 | ✅ 已修复 |

> **关键观察**：`#7859`（提示词注入安全）与 `#7908`（Windows 进程隔离）应作为 **v2.2.2 的 P0 候选**。

---

## 6. 功能请求与路线图信号

| 请求 | Issue | 状态 | 关联 PR | 是否纳入 v2.2.2 的可能性 |
|---|---|---|---|---|
| 历史对话移至右侧 | [#7739](https://github.com/agentscope-ai/QwenPaw/issues/7739) | 已关闭（讨论结束） | — | 待设计 |
| 皮肤/主题模块 | [#5909](https://github.com/agentscope-ai/QwenPaw/issues/5909) / [#7287](https://github.com/agentscope-ai/QwenPaw/issues/7287) | 设计提案已关闭 | — | 后续版本（涉及 UI 重构） |
| Console 多标签终端 | — | 提案中 | [#7861](https://github.com/agentscope-ai/QwenPaw/pull/7861) feat(console): 多标签聊天终端 | OPEN，待 Review |
| PawApp SDK 与控制面重设计 | — | 提案中 | [#7874](https://github.com/agentscope-ai/QwenPaw/pull/7874) | OPEN，重构型 |
| 历史 tool_result 块按 retention 过期 | — | 提案中 | [#7923](https://github.com/agentscope-ai/QwenPaw/pull/7923) | OPEN |
| 历史 FTS 损坏修复 + retention 清理 | — | 修复中 | [#7655](https://github.com/agentscope-ai/QwenPaw/pull/7655) fix(history): FTS 损坏 | OPEN（已逾 13 天） |
| 每会话模型覆盖 | — | 长期 Open | [#5992](https://github.com/agentscope-ai

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/NousResearch/hermes-agent">NousResearch/hermes-agent</a></summary>

<think>The user wants me to generate a daily report for the Hermes Agent project based on the GitHub data provided. Let me analyze the data carefully and structure the report according to the requested sections.

Let me first organize the key data points:

**Overall Activity:**
- Issues: 50 updates (43 new/active, 7 closed)
- PRs: 50 updates (49 pending, 1 merged/closed)
- New releases: 1 (v2026.9.21 / v0.21.4)

**Release:**
- v0.21.4 (v2026.9.21) - Patch release rolling up ~1,800 PRs since v0.21.3

**Top Issues by comments:**
1. #95916 (4 comments) - RFC: reusable capability assignments across profiles
2. #102329 (4 comments) - WhatsApp allow_from JSON-array string bug
3. #113673 (4 comments) - disk-cleanup deletes PostgreSQL maintenance dirs
4. #111724 (CLOSED, 4 comments) - profile with no credentials inherits root
5. #118067 (CLOSED, 4 comments) - profiles.list wire contract violation
6. #118002 (4 comments) - Desktop old message at newest position
7. #118487 (4 comments) - Discord liveness watchdog dies
8. #75761 (3 comments) - Image uploads collision
9. #93711 (3 comments) - Graceful gateway restart blocked
10. #87069 (3 comments, 2 👍) - Stray "l" in composer
11. #87041 (CLOSED, 3 comments) - WhatsApp docs wrong link
12. #118026 (CLOSED, 3 comments) - Windows hermes_state_lockguard.py fcntl
13. #118684 (2 comments) - ntfy adapter doesn't register
14. #118693 (2 comments) - Desktop transcript fails during background review
15. #108768 (2 comments) - setup.status provider_configured bug

**Top PRs (most are newly created):**
- #118768 - browser-use own-tab target
- #118423 - Add Hopper to plugin catalog
- #118740 - derived conversation indexing
- #118756 - protect swarm role skills from archival
- #118757 - terminal symlink cleanup
- #118758 - preserve reasoning-only stream turns
- #118759 - OpenRouter downstream provider diagnostics
- #118767 - Google Meet realtime GA API
- #118587 - Simple/Advanced interface mode
- #118299 - hermes-lossless-context-manager plugin
- #118766 - Unicode profile labels
- #118764 - Telegram reaction ack
- #118610 - preserve transcript occurrences
- #106461 - pre_turn_finalize continuation hook
- #92193 - stream_only_base_urls on retry
- #112864 - pre-compress checkpoint for forks
- #105999 (CLOSED) - warm model metadata
- #118591 - photon markdown stripping
- #118763 - session model for /fast
- #74440 - quarantine open-policy platform

**Severity assessment of bugs:**
- P0: #118026 (Windows hermes_state_lockguard)
- P1: #118487 (Discord liveness watchdog)
- P2: many (WhatsApp allow_from, ntfy, image uploads, etc.)
- P3: many

**Bug fixes with corresponding PRs (newer PRs):**
- #118487 (Discord) - no PR yet visible
- #118002 (Desktop old message) - no PR
- #118693 (Desktop transcript) - no PR
- #118670 (Desktop streaming rendered twice) - no PR
- #118755 (Desktop reasoning vanishes) - #118758 ✅
- #118684 (ntfy) - no PR
- #118673 (zai GLM-5.x <think> leak) - no PR
- #118672 (mnemosyne_invalidate no-op) - no PR
- #118761 (/fast wrong model) - #118763 ✅
- #118765 (profile rail ?) - #118766 ✅
- #118753 (Curator archives kanban skills) - #118756 ✅

**Merged/closed in last 24 hours:**
- Issues closed: #111724, #118067, #87041, #118026, #118132, #117696, #118310
- PR closed: #105999 (1 merged/closed)

Now let me draft the report in Chinese as requested.

Let me think about what should be in each section:

1. **今日速览** - Summary of activity level
2. **版本发布** - v0.21.4 details
3. **项目进展** - merged/closed PRs
4. **社区热点** - Most discussed issues/PRs
5. **Bug 与稳定性** - Bug analysis with severity
6. **功能请求与路线图信号** - Feature requests
7. **用户反馈摘要** - User pain points
8. **待处理积压** - Backlog

Let me write this comprehensively. I should follow the format and be data-driven and objective.

Let me make sure I have all the data correct by re-reading.

Actually looking more carefully:
- #105999 is shown as [CLOSED] - it was opened 2026-09-08, so it was likely merged/closed recently
- The 1 merged/closed PR matches this
- 7 closed issues listed: #111724, #118067, #87041, #118026, #118132, #117696, #118310

For the report:
- Total active issues today: 43
- Total active PRs today: 49  
- 1 release
- 7 issues closed, 1 PR closed

This is a high activity day. The patch release v0.21.4 rolled up ~1800 PRs.

Let me now draft the report in a structured way. I'll write it in Chinese since the prompt is in Chinese.

One more thing to consider - I should identify "backlog" issues. Looking at creation dates:
- #75761 (2026-08-01) - 52 days old
- #87041 (CLOSED 2026-08-15) - closed
- #87069 (2026-08-15) - 38 days old
- #93711 (2026-08-24) - 29 days old
- #95916 (2026-08-26) - 27 days old
- #96758 (2026-08-28) - 25 days old
- #98801 (2026-08-30) - 23 days old
- #99277 (2026-08-31) - 22 days old
- #102329 (2026-09-03) - 19 days old
- #106461 (2026-09-09) - PR still open
- #108768 (2026-09-12) - 10 days old
- #109664 (2026-09-13) - 9 days old
- #112864 (2026-09-16) - PR
- #113673 (2026-09-17) - 5 days old

Most active backlog items: #75761 (52 days), #87069 (38 days), #93711 (29 days), #95916 (27 days), #98801 (23 days), #102329 (19 days), #109664 (9 days)

Now let me write the report.</think>

# Hermes Agent 项目日报 · 2026-09-22

## 1. 今日速览

Hermes Agent 今日呈现**高活跃度、补丁发布与多模块并发修复**的状态：过去 24 小时共更新 50 条 Issues（43 条新开/活跃，7 条关闭）与 50 条 PRs（49 条待合并，1 条关闭/合并），并发布了 **v0.21.4 (v2026.9.21)** 补丁版本（聚合自 v0.21.3 以来的 ~1,800 个 PR）。Issues 讨论集中于 **Desktop 转写与流式渲染回归**、**Profile 隔离/凭据边界**、**平台适配器（Discord/WhatsApp/ntfy）可用性** 与 **磁盘清理副作用** 四大主题；PR 端则以 Desktop 转写修复、Unicode 适配、`/fast` 路由修正等小颗粒度 hotfix 为主。整体处于 **"刚发版、围绕热补丁密集收尾"** 的阶段，社区反馈强烈但方向集中。

---

## 2. 版本发布

### v2026.9.21 · Hermes Agent v0.21.4（补丁版）

- **类型**：Patch（无 Breaking Change）
- **聚合范围**：自 v0.21.3 以来的 ~1,800 个 PR
- **下游消费**：Docker 镜像 `nousresearch/hermes-agent:latest`、Hermes Cloud、hosted deployments 已同步
- **完整说明**：策划后的完整 release notes 暂缓发布（"deferred"），标签本身作为稳定基线
- **迁移注意**：标注为 patch，用户可直接升级；但鉴于聚合 PR 数量极大，仍建议在升级前 review 与持久化、profile、plugin 相关的 PR（[#118067](https://github.com/NousResearch/hermes-agent/issues/118067)、[#111724](https://github.com/NousResearch/hermes-agent/issues/111724) 等均在窗口期内被处理）

---

## 3. 项目进展

过去 24 小时仅 1 条 PR 标记为已合并/关闭（[#105999](https://github.com/NousResearch/hermes-agent/pull/105999) · `perf(gateway): warm model metadata before the first inbound turn`，把 provider 上下文发现从首次入站 turn 前移到启动预热，**修复 #105986**）。同时有 7 条 Issues 在窗口期内关闭：

| Issue | 主题 | 价值 |
|---|---|---|
| [#118067](https://github.com/NousResearch/hermes-agent/issues/118067) | `profiles.list` 违反自身契约（缺 `previous_names`） | 影响 Electron Desktop 与 TUI 全部调用方，已通过 [#117696](https://github.com/NousResearch/hermes-agent/issues/117696) 修复 |
| [#118026](https://github.com/NousResearch/hermes-agent/issues/118026) | `hermes_state_lockguard.py` 未处理 Windows 上 `fcntl.F_RDLCK` 缺失 | **P0 Windows 启动崩溃**，已关闭 |
| [#111724](https://github.com/NousResearch/hermes-agent/issues/111724) | 无凭据 profile 静默继承 root 凭据/OAuth | **安全边界类**，已关闭 |
| [#118310](https://github.com/NousResearch/hermes-agent/issues/118310) | 隔离 profile 的 dashboard_auth 误用默认 profile 密码 | **安全边界类**，已关闭 |
| [#117696](https://github.com/NousResearch/hermes-agent/issues/117696) | `ProfileRow` 缺 `previous_names` 字段 | 与 #118067 同一根因的修复方 |
| [#118132](https://github.com/NousResearch/hermes-agent/issues/118132) | `tests/conftest.py` 每次 pytest 泄漏 `hermes-pytest-basetemp-*` 目录 | 测试基础设施小问题，已关闭 |
| [#87041](https://github.com/NousResearch/hermes-agent/issues/87041) | WhatsApp "Open setup guide" 链接错链 whatsmeow | 文档类，已关闭 |

**净进展**：Desktop TUI 契约类问题形成 1 个修复闭环；安全边界（profile 凭据隔离）有 1 条已关闭但仍有结构性争议；Windows 启动崩溃得到处理。**项目整体向前推进约 0.3 个版本步幅**（以"问题闭环率 7/50、PR 闭环率 1/50"衡量）。

---

## 4. 社区热点

按评论数排序，今日讨论最活跃的 5 个 Issues 全部为 4 评论，但**真实关注度需结合严重度与 PR 联动**判断：

| 排名 | Issue | 评论 | 👍 | 主题 |
|---|---|---|---|---|
| 1 | [#95916](https://github.com/NousResearch/hermes-agent/issues/95916) | 4 | 0 | **RFC**：跨 profile 复用 capability（skills/MCP/plugins） |
| 2 | [#102329](https://github.com/NousResearch/hermes-agent/issues/102329) | 4 | 0 | WhatsApp `allow_from` 接受 JSON-array 字符串后**静默拒收所有消息** |
| 3 | [#113673](https://github.com/NousResearch/hermes-agent/issues/113673) | 4 | 0 | `disk-cleanup` 误删 `$HERMES_HOME/.pg0` 下 PostgreSQL 维护目录 |
| 4 | [#111724](https://github.com/NousResearch/hermes-agent/issues/111724) *(已关闭)* | 4 | 0 | 无凭据 profile 静默继承 root 凭据 |
| 5 | [#118067](https://github.com/NousResearch/hermes-agent/issues/118067) *(已关闭)* | 4 | 0 | `profiles.list` 违反 wire contract |
| 6 | [#118002](https://github.com/NousResearch/hermes-agent/issues/118002) | 4 | 0 | Desktop 旧消息跳到最新位置 |
| 7 | [#118487](https://github.com/NousResearch/hermes-agent/issues/118487) | 4 | 0 | Discord liveness watchdog 一次性 strike 后僵尸化 |

**讨论背后的共同诉求**：
- **配置/契约的正确性**：#95916、#118067、#111724 都指向 profile 体系缺乏一致契约——"如何描述一个 profile 应有/不应有的能力与凭据"。
- **静默失败**：#102329、#113673、#118487 都是"系统无声地吃掉了错误"，社区明确要求 **doctor finding、warning、fatal error** 三档信号。

`👍` 最高项为 [#87069](https://github.com/NousResearch/hermes-agent/issues/87069)（2 赞，Dashboard Chat 切换 session 时光标串 'l'），表明终端可用性问题是 Desktop 用户的高频痛点。

---

## 5. Bug 与稳定性

按严重度排列今日报告的 Bug：

### 🔴 P0（启动崩溃级）
- **[#118026](https://github.com/NousResearch/hermes-agent/issues/118026)** · Windows `hermes_state_lockguard.py` 未处理 `fcntl.F_RDLCK` 缺失 → 后端启动失败。**状态**：已关闭（应有对应修复 PR，未在今日数据中显式列出）。

### 🟠 P1（消息送达风险）
- **[#118487](https://github.com/NousResearch/hermes-agent/issues/118487)** · Discord liveness watchdog 在首次 `socket_closed` 后永久沉默，适配器僵尸化。**状态**：尚无关联修复 PR，社区高度关注。
- **[#118755](https://github.com/NousResearch/hermes-agent/issues/118755)** · Desktop 推理-only turn（本地 Qwen）流式输入后 vanish。**状态**：✅ 已有 [#118758](https://github.com/NousResearch/hermes-agent/pull/118758) `fix(desktop): preserve reasoning-only stream turns`。

### 🟡 P2（功能降级/安全边界）
- **[#102329](https://github.com/NousResearch/hermes-agent/issues/102329)** · WhatsApp `allow_from` 静默拒收全部消息。**状态**：无 PR。
- **[#118002](https://github.com/NousResearch/hermes-agent/issues/118002)** · Desktop 虚拟化时间线旧消息跳到最新位置。**状态**：无 PR。
- **[#118693](https://github.com/NousResearch/hermes-agent/issues/118693)** · 后台 review 运行期间 Desktop 转写无法渲染完成的 turn。**状态**：无 PR。
- **[#118670](https://github.com/NousResearch/hermes-agent/issues/118670)** · 长流式 turn（178s/4 工具调用）在 Desktop 上重复渲染两遍（DB 仅一份）。**状态**：无 PR。
- **[#118761](https://github.com/NousResearch/hermes-agent/issues/118761)** · Gateway `/fast` 检查 default model 而非 effective session route。**状态**：✅ 已有 [#118763](https://github.com/NousResearch/hermes-agent/pull/118763) `fix(gateway): honor session model for fast command`。
- **[#93711](https://github.com/NousResearch/hermes-agent/issues/93711)** · 卡住的 cron agent turn 阻塞 gateway 优雅重启（drain 永不结束）。**状态**：无 PR。
- **[#118753](https://github.com/NousResearch/hermes-agent/issues/118753)** · Curator 自动闲置归档会破坏 kanban swarm verifier/synthesizer。**状态**：✅ 已有 [#118756](https://github.com/NousResearch/hermes-agent/pull/118756) `fix(kanban): protect swarm role skills from archival`。
- **[#118670](https://github.com/NousResearch/hermes-agent/issues/118670) / [#118002](https://github.com/NousResearch/hermes-agent/issues/118002) / [#118693](https://github.com/NousResearch/hermes-agent/issues/118693)** · Desktop 三连回归，可能共享流式 hydration 路径。**状态**：均无 PR。

### 🟢 P3（功能/兼容性）
- [#113673](https://github.com/NousResearch/hermes-agent/issues/113673) · `disk-cleanup` 误删 pg0 维护目录（影响 Hindsight checkpoints 与 pg0 启动）
- [#118684](https://github.com/NousResearch/hermes-agent/issues/118684) · ntfy 适配器从 config.yaml 无法注册（仅读 env）
- [#118673](https://github.com/NousResearch/hermes-agent/issues/118673) · zai GLM-5.x 未闭合 `<think>` 泄漏到 mnemosyne
- [#118672](https://github.com/NousResearch/hermes-agent/issues/118672) · `mnemosyne_invalidate` 跨 session 静默 no-op
- [#87069](https://github.com/NousResearch/hermes-agent/issues/87069) · Dashboard Chat 切换 session 串 'l'
- [#75761](https://github.com/NousResearch/hermes-agent/issues/75761) · Desktop 同 profile 会话秒级图像上传覆盖

**稳定性观察**：今日 Desktop 端集中爆发约 **4 条转写/流式相关回归**（#118002、#118670、#118693、#118755），强烈建议下个补丁专门做一次 "Desktop transcript hydration regression sweep"。

---

## 6. 功能请求

</details>

<details>
<summary><strong>OpenHuman</strong> — <a href="https://github.com/tinyhumansai/openhuman">tinyhumansai/openhuman</a></summary>

<think>Let me analyze the GitHub data for OpenHuman and generate a comprehensive daily report for 2026-09-22.

Let me break down the key information:

**Activity Overview:**
- 29 Issues updates (24 new/active, 5 closed)
- 26 PR updates (4 pending merge, 22 merged/closed)
- 0 new releases

**Key Themes I'm seeing:**

1. **Agent reliability issues** - Multiple P1 issues about agent failures, retries, context loss
2. **Socket/Connection issues** - WebSocket reconnect bugs being fixed
3. **Background sub-agent problems** - Major fix series around background delivery
4. **Performance issues** - 7s delay per message due to cache misses, 43s time-to-first-visible
5. **Security concerns** - Composio contract gate, MCP auth, plain-text credential prompts
6. **CI/Build issues** - Main branch red, rustc toolchain mismatches
7. **Tool search improvements** - Jev-ranked tool search
8. **Wallet UI overhaul** - Complete redesign

**PRs that were merged/closed (most important):**
- #6438 (OPEN) - tool-search with embedding retriever
- #6435 (CLOSED) - Jev-ranked tool_search
- #6433 (CLOSED) - code-style tool dialects
- #6367 (OPEN) - test compatibility fixes
- #6432 (CLOSED) - CI prompt-prefix guard fix
- #6437 (CLOSED) - inference capture proxy improvements
- #6436 (OPEN) - orchestrator prompt diet
- #6434 (CLOSED) - OpenRouter price-sorted routing
- #6431 (CLOSED) - remove spend cap entirely
- #6430 (CLOSED) - socket reconnect counter fix
- #6429 (CLOSED) - in-flight handshake fix
- #6405 (CLOSED) - background sub-agents UI fix
- #6428 (CLOSED) - background-delivery retry storm fix
- #6427 (CLOSED) - prompt: answer research directly
- #6422 (CLOSED) - i18n em-dash fix
- #6426 (CLOSED) - background delivery thread context
- #6425 (CLOSED) - AgentEditorPage vision test fix
- #6424 (CLOSED) - live thinking blocks
- #6421 (CLOSED) - Coverage Matrix Sync fix
- #6402 (OPEN) - Wallet UI overhaul

**Critical Issues (P0/P1):**
- #6407 [P0] - Composio contract gate auto-executes tools
- #6423 [P1] - CI red on prompt-prefix guard
- #6345 [P1] - Background sub-agent stale failures (CLOSED but related PRs merged)
- #6412 [P1] - MCP 401 retried forever
- #6414 [P1] - Session agent cache never hits (+7s per message)
- #6413 [P1] - Upstream 429 kills turn
- #6409 [P1] - BUILT-IN skills 60s hang on 429
- #6408 [P1] - No artifact store, oversized results truncated
- #6406 [P1] - Background triage approvals not surfaced
- #6404 [P1] - embed Agent.turn() rejected by hosted policy
- #6393 [P1] - Restore caller-provided providers after TinyAgents migration
- #6256 [P1, CLOSED] - WebSocket connection drops

**P2 Issues:**
- #6246 [P2, CLOSED] - Image attachment blank space
- #6247 [P2] - Multi-account calendar wrong default
- #6417 [P2, CLOSED] - Socket reconnect counter
- #6418 [P2, CLOSED] - Two socket handshakes at boot
- #6419 [P2] - agent-tracing journal-shadow parity
- #6410 [P2] - Model selection not persisted
- #6416 [P2] - Gmail credential scrubber
- #6415 [P2] - MCP registry search 15s hang
- #6411 [P2] - MCP secret prompt never renders
- #6398 [P2] - Playwright focus-trap suite
- #6399 [P2] - Remove retired Rewards E2E
- #6396 [P2] - Discord Composio modal
- #6395 [P2] - Managed catalog Playwright
- #5420 [P2] - rustc toolchain alignment

**P3 Issues:**
- #6400 [P3] - Independent Telegram uptime bot
- #6401 [P3] - TinyHiveMind as OpenHuman module

**Long-standing issues:**
- #5417 - Memory health flag toggle (open since 2026-08-06)

Let me organize this into a coherent report in Chinese, with objective professional tone, data-driven, focusing on project health.

I should structure this clearly with all 8 requested sections. Let me write this up.</think>

# OpenHuman 项目日报

**日期：** 2026-09-22
**仓库：** [github.com/tinyhumansai/openhuman](https://github.com/tinyhumansai/openhuman)

---

## 1. 今日速览

OpenHuman 今日进入了一个高强度、多线并进的修复日。**24 小时内累计有 29 条 Issue 更新与 26 条 PR 更新**，其中 PR 端以合入为主（22 条已合并/关闭，仅 4 条仍待合并），但 Issue 端仍有 24 条处于活跃/新开状态，积压压力并未缓解。今日合并的修复集中在三个方向：**后台子代理（background sub-agent）交付回路重构**、**Socket 重连与握手逻辑修正**、**Orchestrator 提示词与提示预算治理**。同期出现了 1 个 P0 安全问题（Composio 合同门控绕过）、1 个主分支 CI 红屏（Prompt 前缀守卫），以及多个 P1 级别的性能与可用性问题（+7s 缓存未命中、模型选择不持久化、上游 429 直接掉线）。整体而言，**项目处于"密集修复期 + 主线质量震荡期"**，推进力强但稳定性指标短期承压。

---

## 2. 版本发布

**今日无新版本发布。** 仓库当前可观测的最新 Build 编号为 `v0.63.31`（见 [#6420](https://github.com/tinyhumansai/openhuman/issues/6420)），与昨日闭环的若干问题（[#6246](https://github.com/tinyhumansai/openhuman/issues/6246)、[#6256](https://github.com/tinyhumansai/openhuman/issues/6256)、[#6417](https://github.com/tinyhumansai/openhuman/issues/6417)、[#6418](https://github.com/tinyhumansai/openhuman/issues/6418)）均出现在该区间。建议关注下一个补丁版本的发布说明，预计将包含今日合入的多项 socket 修复、后台交付修复与 i18n 修正。

---

## 3. 项目进展（今日合并/关闭的重要 PR）

今日 PR 节奏极快，单日合入 22 条，以下为最具结构性意义的合并：

| PR | 优先级 | 内容要点 | 链接 |
|---|---|---|---|
| [#6426](https://github.com/tinyhumansai/openhuman/pull/6426) | P1 | 修复后台子代理交付回路：给 system turn 注入线程近况上下文，**解决"陈旧失败覆盖已完成回答"的根因** | [→](https://github.com/tinyhumansai/openhuman/pull/6426) |
| [#6428](https://github.com/tinyhumansai/openhuman/pull/6428) | P1 | 修复后台交付重试风暴：线上观测到 **178 次/分钟重试、单日 432MB 日志**，本次合并加入有界重试 | [→](https://github.com/tinyhumansai/openhuman/pull/6428) |
| [#6405](https://github.com/tinyhumansai/openhuman/pull/6405) | P2 | 修复"Background tasks"面板不显示后台子代理的问题（两个独立缺陷同时处理） | [→](https://github.com/tinyhumansai/openhuman/pull/6405) |
| [#6430](https://github.com/tinyhumansai/openhuman/pull/6430) | P0 | 修复 Socket 重连计数器溢出（`attempt 32/5`），将阈值语义从"重试上限"修正为"分页阈值" | [→](https://github.com/tinyhumansai/openhuman/pull/6430) |
| [#6429](https://github.com/tinyhumansai/openhuman/pull/6429) | P3 | 修复启动双重握手（将 `Connecting` 状态纳入"正在服务身份"判定），节省 ~2s 启动耗时 | [→](https://github.com/tinyhumansai/openhuman/pull/6429) |
| [#6434](https://github.com/tinyhumansai/openhuman/pull/6434) | P0 | OpenRouter 直连端点加 `provider.sort = "price"`，与托管后端路由策略对齐；新增稳定 prompt-cache key | [→](https://github.com/tinyhumansai/openhuman/pull/6434) |
| [#6431](https://github.com/tinyhumansai/openhuman/pull/6431) | P0 | **完全移除推理花销上限**（日 / 月），保留所有花销遥测与可视化 | [→](https://github.com/tinyhumansai/openhuman/pull/6431) |
| [#6435](https://github.com/tinyhumansai/openhuman/pull/6435) | — | `tool_search` 接入 Jev 排序 + 延迟加载；Composio 全量动作注册为 `Deferred` | [→](https://github.com/tinyhumansai/openhuman/pull/6435) |
| [#6433](https://github.com/tinyhumansai/openhuman/pull/6433) | P0 | 新增 `agent.tool_dispatcher = "python" / "typescript"` 代码风格工具方言 | [→](https://github.com/tinyhumansai/openhuman/pull/6433) |
| [#6432](https://github.com/tinyhumansai/openhuman/pull/6432) | P3 | 将 prompt-prefix 守卫移至 Rust Quality Job 末尾，**避免单步失败连带屏蔽 5 个验证步骤** | [→](https://github.com/tinyhumansai/openhuman/pull/6432) |
| [#6427](https://github.com/tinyhumansai/openhuman/pull/6427) | P3 | 研究/查询类问题不再走 `request_plan_review`，并在工具调用前输出可见提示行 | [→](https://github.com/tinyhumansai/openhuman/pull/6427) |
| [#6424](https://github.com/tinyhumansai/openhuman/pull/6424) | P2 | 在转进行中渲染实时 thinking 块，关闭"首 token 前的空白等待" | [→](https://github.com/tinyhumansai/openhuman/pull/6424) |
| [#6422](https://github.com/tinyhumansai/openhuman/pull/6422) | P2 | 移除 13 种语言下 MCP 文案的 U+2014，破除 i18n 覆盖测试的 14 语言失败 | [→](https://github.com/tinyhumansai/openhuman/pull/6422) |
| [#6421](https://github.com/tinyhumansai/openhuman/pull/6421) | P3 | 移除已下线"Rewards & Progression"6 个孤立目录项，解锁 Coverage Matrix Sync | [→](https://github.com/tinyhumansai/openhuman/pull/6421) |
| [#6437](https://github.com/tinyhumansai/openhuman/pull/6437) | P2 | 调试代理同时上报请求与响应摘要（含 TTFB、缓存 token、错误文本等） | [→](https://github.com/tinyhumansai/openhuman/pull/6437) |

**整体评估：** 单日净合入对项目的稳定性、可观测性与成本治理均有实质推进；但需关注的是 [#6431](https://github.com/tinyhumansai/openhuman/pull/6431) **完全移除花销上限**这一 P0 改动属于重大策略变更，建议在发布说明中重点标注。

---

## 4. 社区热点

今日 Issue 评论数整体偏低（多数 ≤ 2 条），但有 4 条 P1 级别的对话值得关注：

- **[#6345 Background sub-agent stale failures overwriting completed answers](https://github.com/tinyhumansai/openhuman/issues/6345)**（已关闭，2 评论）— 该 Issue 描述了一个**严重的对话正确性问题**：当异步子代理完成时，其结果通过"独立 session"唤醒编排者，该 session 看不到主对话历史，导致陈旧失败消息覆盖用户已收到的正确答案。该 Issue 直接催生了今日的 [#6426](https://github.com/tinyhumansai/openhuman/pull/6426) 与 [#6428](https://github.com/tinyhumansai/openhuman/pull/6428) 两个核心修复，是今日最具结构性影响的讨论之一。

- **[#6423 CI: main is red on the prompt-prefix guard](https://github.com/tinyhumansai/openhuman/issues/6423)**（2 评论）— 报告 main 分支在 `scripts/check-prompt-budget.sh` 步骤失败：**9 个错误，6 个真实回归**。该问题由 [#6432](https://github.com/tinyhumansai/openhuman/pull/6432) 通过"将守卫移至 Job 末尾"先行止血，但**真正的回归清理尚未完成**。

- **[#6246 Image attachment blank space](https://github.com/tinyhumansai/openhuman/issues/6246)**（已关闭，4 评论）— 用户在 Chat Composer 附加图片后，预览区为空白，无法在发送前确认附件。该 Bug 出现在 v0.63.25，**用户反馈"无法看到自己附加的内容"** 是典型的高频交互缺陷。

- **[#6256 WebSocket ping timeout drops](https://github.com/tinyhumansai/openhuman/issues/6256)**（已关闭，3 评论）— 用户报告每 30–90 分钟即出现连接中断，最坏情况下重连耗时 10 分钟，**期间应用实质不可用**。

**社区诉求信号：** 讨论集中指向三个共性痛点——**对子代理 / 后台任务"可见、可信、可控"**、**连接稳定性**、**附件/UI 反馈完整性**。这些也是今日合并的核心 PR 所共同回应的方向。

---

## 5. Bug 与稳定性

按严重程度排列（仅列出 P0 / P1 及已修复项；完整 P2/P3 列表见 Issue 池）：

### 🔴 P0（最高严重度）

| Issue | 状态 | 描述 | 是否有修复 PR |
|---|---|---|---|
| [#6407 Composio contract gate auto-executes after 4 missed surfaces](https://github.com/tinyhumansai/openhuman/issues/6407) | OPEN | 合同门控本应在工具首次执行前向用户呈现合约，但**当合约无法送达用户时，4 次后自动放行工具执行**。属于安全/信任类缺陷 | ❌ 暂无 |

### 🟠 P1（高严重度）

| Issue | 状态 | 描述 | 修复 PR |
|---|---|---|---|
| [#6345 Background sub-agent stale failure overwrites answer](https://github.com/tinyhumansai/openhuman/issues/6345) | CLOSED | 后台子代理结果覆盖已完成回答 | ✅ [#6426](https://github.com/tinyhumansai/openhuman/pull/6426) |
| [#6423 CI main red on prompt-prefix guard](https://github.com/tinyhumansai/openhuman/issues/6423) | OPEN | 6 个真实回归 + 3 个未约束改进 | 🟡 部分止血 [#6432](https://github.com/tinyhumansai/openhuman/pull/6432) |
| [#6412 MCP server 401 retried forever, no auth UI](https://github.com/tinyhumansai/openhuman/issues/6412) | OPEN | 401 错误无限重试（18+ 次，每 300s），UI 无"需要鉴权"状态 | ❌ 暂无 |
| [#6414 Session agent cache never hits (+7s/msg)](https://github.com/tinyhumansai/openhuman/issues/6414) | OPEN | 100% 缓存未命中，且每轮重建两次（先 0 集成、后 119 集成） | ❌ 暂无 |
| [#6413 Upstream 429 kills turn after 1 retry](https://github.com/tinyhumansai/openhuman/issues/6413) | OPEN | 无 backoff、无 fallback、无 UI 提示；一次会话两次触发 | ❌ 暂无 |
| [#6408 No artifact store, oversized results truncated to 16KB](https://github.com/tinyhumansai/openhuman/issues/6408) | OPEN | 工具结果被截断 → Agent 重试同一工具 8–14 次直至熔断 | ❌ 暂无 |
| [#6409 BUILT-IN skills fetch live from NousResearch raw → 60s hang on 429](https://github.com/tinyhumansai/openhuman/issues/6409) | OPEN | 标记为 BUILT-IN 但仍实时拉取 GitHub raw，限流时静默挂起 60s | ❌ 暂无 |
| [#6406 Background triage approvals never surfaced, parked 600s then denied](https://github.com/tinyhumansai/openhuman/issues/6406) | OPEN | 后台 triage 升级到审批门后**用户完全看不到**，10 分钟后自动拒绝 | 🟡 相关 [#6405](https://github.com/tinyhumansai/openhuman/pull/6405) |
| [#6404 openhuman_embed Agent.turn() rejected by hosted policy](https://github.com/tinyhumansai/openhuman/issues/6404) | OPEN | 嵌入式 API 在 provider 调用前即被托管策略拒绝 | ❌ 暂无 |
| [#6393 Restore caller-provided providers for embedded runtime after TinyAgents migration](https://github.com/tinyhumansai/openhuman/issues/6393) | OPEN | `cargo test -p openhuman-embed --test runtime_agents` 失败，两个本地 OpenAI 兼容 wiremock 都跑不通 | ❌ 暂无 |

### 🟡 已闭环 P1（验证修复有效性）

- ✅ [#6256 WebSocket ping timeout drops](https://github.com/tinyhumansai/openhuman/issues/6256) — 已关闭
- ✅ [#6345 Background sub-agent stale failure](https://github.com/tinyhumansai/openhuman/issues/6345) — 已关闭（PR

</details>

---
*本日报由 [Big Model Radar](https://github.com/96loveslife/big_model_radar) 自动生成。*
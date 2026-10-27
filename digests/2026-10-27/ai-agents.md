# OpenClaw 生态日报 2026-10-27

> Issues: 500 | PRs: 500 | 覆盖项目: 8 个 | 生成时间: 2026-10-27 04:28 UTC

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

# OpenClaw 项目动态日报

**统计日期：2026-10-27**  
**项目：** [openclaw/openclaw](https://github.com/openclaw/openclaw)  
**数据范围：** 过去 24 小时

---

## 一、今日速览

- 过去 24 小时共更新 **500 条 Issues**，其中 **209 条新开或活跃、291 条关闭**；同时更新 **500 条 PR**，其中 **190 条待合并、310 条已合并或关闭**，项目整体保持高强度开发。
- 今日发布 **v2026.9.35 extended-stable**，这是当前等价于 LTS 的网关版本，重点包含安全、可靠性、性能修复及新模型支持。
- 社区讨论主要围绕 **SQLite/WAL 膨胀与事务阻塞、Worker 内存泄漏、Windows 更新和服务恢复、模型回退失效**，其中多个 P0/P1 问题仍有较高积压风险。
- PR 侧集中推进了 **Windows 命令执行、Mattermost 消息顺序、iMessage 投递验证、Web UI 长会话性能、数据库搜索兼容性和升级流程**等方向。
- 综合判断：**开发活跃度高、发布节奏稳定，但运行时稳定性和升级可靠性仍明显拖累项目健康度**；当前最需要关注的不是功能数量，而是 P0/P1 缺陷能否形成可验证、可回滚的闭环修复。

---

## 二、版本发布

### v2026.9.35 — extended-stable

[Release 链接](https://github.com/openclaw/openclaw/releases/tag/v2026.9.35)

**版本定位**

- 该版本为 **gateway-only extended-stable**。
- 官方称其是当前等价于 **LTS** 的版本。
- 发布内容基于 2026 年 9 月末的 OpenClaw，并加入：
  - 关键安全更新；
  - 可靠性与性能修复；
  - 新模型支持。

**破坏性变更与迁移注意事项**

现有摘要未明确列出完整破坏性变更清单，建议升级前重点检查：

1. **Gateway 兼容性**  
   该版本仅针对 Gateway 发布，Agent、插件和 CLI 侧仍需确认是否存在版本耦合。

2. **配置与数据库迁移**  
   今日 Issues 多次涉及 SQLite WAL、锁竞争、checkpoint、快照保留和升级 preflight。升级前应备份：
   - `~/.openclaw/agents/*/agent/`；
   - SQLite 主文件及 WAL/SHM 文件；
   - Cron、session、transcript 等关键状态。

3. **Windows 用户**  
   当前仍有 Windows 更新失败、服务重启不可靠、后台进程识别异常等问题。建议先在独立环境验证：
   - `openclaw update`；
   - Gateway 停止与恢复；
   - Scheduled Task 服务状态；
   - 更新后的 MCP、插件和模型连接。

4. **升级回滚预案**  
   在修复 #143524、#166634 等 WAL/checkpoint 问题前，不建议在关键生产环境中无备份直接升级。

---

## 三、项目进展

> 下列 PR 来自过去 24 小时更新列表；由于数据未提供每个 PR 的精确合并时间，以下按高关注度、已关闭及明确带 `fix`/`perf` 方向的变更整理。

### 1. 修复 Windows 上显式 npm/npx 命令被错误替换

[#185425 — fix: honor explicit npm commands on Windows](https://github.com/openclaw/openclaw/pull/185425)

- 修复 Windows 命令执行时静默使用宿主内置 npm，而不是调用方显式指定的 npm/npx 路径或包装器。
- 对插件 command runner 和自定义企业工具链具有直接影响。
- 该 PR 今日创建，尚待合并。

### 2. 修复 Mattermost 最终回复顺序和通知问题

[#185422 — fix(mattermost): final answer lands above posts sent during the run and does not notify](https://github.com/openclaw/openclaw/pull/185422)

- 修复流式输出开启时，最终答案被插入到运行期间进度消息之前的问题。
- 同时解决最终回复未触发通知的问题。
- 直接改善机器人频道中的阅读顺序和响应感知。

### 3. 改进 PostgreSQL 关键词搜索兼容性

[#183547 — fix(database): split punctuation-joined tokens in PostgreSQL keyword search like SQLite FTS5](https://github.com/openclaw/openclaw/pull/183547)

- 使 PostgreSQL 后端的关键词搜索行为更接近 SQLite FTS5。
- 修复日期、路径、文件名和 `a/b` 等标点连接词无法命中的问题。
- 对迁移到 PostgreSQL、同时依赖 memory keyword search 或 transcript full-text search 的部署较重要。

### 4. 优化大型已完成会话的打开速度

[#183800 — perf(ui): open large completed chat runs faster](https://github.com/openclaw/openclaw/pull/183800)

- 解决包含约 2,000 条消息的已完成会话需要一次性构建完整 Markdown 和工具卡片子树的问题。
- 通过延迟渲染和减少滚动帧中的冷行准备，改善长会话首次打开体验。

### 5. 延迟非必要 Chat 引擎和可选功能

[#183601 — perf(ui): defer dormant chat engines while preloading common interactions](https://github.com/openclaw/openclaw/pull/183601)

- 将可选工具、媒体渲染、编辑器辅助和其他非首屏能力延后加载。
- 目标是降低冷启动时不必要的下载、解析和执行成本。
- 与 #184591 的“推迟 New Session 提交操作”共同构成近期 Web UI 性能优化主线。

### 6. 改进新会话意图和操作延迟

[#184591 — perf(ui): defer New Session submission operations](https://github.com/openclaw/openclaw/pull/184591)

- 用户仅阅读现有会话时，不再提前执行创建会话和放置相关操作。
- 只有出现明确的 New Session 意图或恢复放置流程时才触发。
- 该 PR 标注了兼容性和安全边界风险，仍需要充分验证。

### 7. 修复节点 origin clone 不完整时污染索引

[#185420 — fix(node): discard incomplete origin clones before snapshot fallback](https://github.com/openclaw/openclaw/pull/185420)

- origin 克隆不完整时，先丢弃残留 Git 元数据，再进入 canonical snapshot fallback。
- 避免 worker 停留在无关 HEAD 或带有污染索引的本地 checkout。

### 8. 修复升级时历史 Cron 分区路径变化导致的失败

[#185097 — fix: updates fail with one moved cron partition](https://github.com/openclaw/openclaw/pull/185097)

- 解决旧状态数据库中历史 Cron 分区路径与当前 state directory 不一致时，候选版本校验失败的问题。
- 目标是让升级自动保留唯一可用的 Cron 分区，而不是因路径迁移直接中断更新。

### 9. 修复 MCP OAuth 过期但状态仍显示 authorized

[#183674 — fix(mcp): warn when OAuth credentials expire without a refresh token](https://github.com/openclaw/openclaw/pull/183674)

- `openclaw mcp status` 不再把“已过期且无 refresh token”的凭据简单显示为可用。
- `doctor` 将提供更明确的过期提示和重新登录指引。

### 10. 修复 Skill Workshop 未经确认修改技能行为的安全风险

相关问题：[#184600 — Skill Workshop has become a deadly plague](https://github.com/openclaw/openclaw/issues/184600)

- Issue 指出后台“经验复盘”会自动修改已学习技能，而这些技能直接构成 Agent 行为指令。
- 用户希望增加审阅、同意和可恢复机制。
- 今日列表中尚未出现可明确确认对应修复的合并 PR，建议将其作为下一版本安全优先事项。

### 推进程度评估

项目今日在以下方向取得了明确进展：

- **升级可靠性**：修复 Cron 路径迁移、保留 Git 下载批次等。
- **跨平台执行**：改善 Windows npm/npx 行为。
- **渠道体验**：修复 Mattermost 最终消息顺序及 iMessage 投递证明。
- **数据层一致性**：改善 PostgreSQL 搜索行为和 SQLite 快照清理。
- **前端性能**：长会话、Chat 首屏和 Details 面板均出现针对性优化。

不过，**SQLite WAL 膨胀、Worker 内存泄漏、Windows 服务恢复和模型回退**等高优先级问题尚未形成完整闭环，因此项目整体属于“功能与性能推进明显，但生产可靠性债务仍高”的状态。

---

## 四、社区热点

### 1. SQLite WAL 持续膨胀并阻塞 Gateway 启动

[#143524 — Agent SQLite WAL grows to 1.4–2.8 GB in days](https://github.com/openclaw/openclaw/issues/143524)

- **状态：已关闭**
- **评论数：139，为今日最活跃条目**
- 报告 Windows 单 Gateway 环境中 WAL 文件持续增长至 1.4–2.8 GB，即使设置 `wal_autocheckpoint=1000` 仍无法控制，并可能阻塞 Gateway 启动。
- 关闭说明该问题已进入处理流程，但结合仍开放的 #181432、#143640、#166634，数据库并发和 checkpoint 问题并未整体解决。

**背后诉求：** 用户需要可预测的数据库维护机制，包括可靠 checkpoint、事务超时恢复、明确的内存上限，以及不会在升级后丢失或阻塞 agent 的存储行为。

### 2. prepared-model-catalog Worker 内存泄漏

[#159662 — prepared-model-catalog.worker.js: unbounded memory leak](https://github.com/openclaw/openclaw/issues/159662)

- **状态：开放**
- **评论数：26**
- Worker 线程内存以约 **4–5 GB/小时**增长，低负载下也可从 2.5 GB 增至 8–10 GB。
- 报告称问题与提供商、插件配置和业务流量关系不大。

**背后诉求：** Gateway 作为长期运行服务必须具备可回收的 Worker 生命周期、内存水位监控和自动回收机制，而不能依赖重启恢复。

### 3. Windows 启动、关闭和更新链路不可靠

[#170956 — Windows: slow startup, unclean plugin shutdown, and schtasks permission error](https://github.com/openclaw/openclaw/issues/170956)

- **状态：开放**
- **评论数：21**
- 涉及 Gateway 慢启动、插件未完全关闭、`schtasks` 权限错误及客户端偶发断连。

**背后诉求：** Windows 部署应具备幂等的服务重启、明确的升级失败回滚，以及无需大量人工重试的更新体验。

### 4. 长时间会话上下文膨胀与提示缓存失效

[#67419 — Session context bloat: bootstrap files re-injected every turn](https://github.com/openclaw/openclaw/issues/67419)  
[#143017 — Prompt-cache: five ways a persistent session rewrites its prefix](https://github.com/openclaw/openclaw/issues/143017)

- **评论数：14、10**
- 前者称 bootstrap 文件每轮重复注入，浪费约 20%–30% token。
- 后者记录持续会话通过五种方式重写 prompt 前缀，并测得约 **21.3M cache-write tokens**。
- #146902 还指出工具数量相同但成员变化，也会破坏 prompt-cache 复用。

**背后诉求：** 用户希望平台提供稳定的会话前缀、确定性的工具集合、可缓存的上下文组织，以及真正可观测的缓存命中率，而不是仅在提示层临时修补。

### 5. 崩溃恢复后 Agent 永久不可用

[#166634 — Late reclamation commit checkpoint failure leaves agent unavailable](https://github.com/openclaw/openclaw/issues/166634)

- **状态：开放**
- **评论数：13**
- Gateway 异常退出后，agent 准备阶段可能报 `SQLite session reclamation commit checkpoint expired`，随后 `chat.history`、`chat.metadata`、`models.list` 等接口持续返回 `UNAVAILABLE`。

**背后诉求：** 崩溃恢复应具备幂等性和自愈能力；单个后台回收任务失败不能永久污染 agent 可用状态。

### 6. Mattermost 最终回复顺序与通知体验

[#185422 — Mattermost final answer ordering fix](https://github.com/openclaw/openclaw/pull/185422)

- 今日新提交的直接缺陷修复。
- 背后诉求是渠道输出必须遵循可理解的时序，且最终答复必须可靠通知，而不能被运行期辅助消息遮蔽。

---

## 五、Bug 与稳定性

### P0 / 发布阻断级

| 问题 | 状态 | Fix PR 情况 |
|---|---|---|
| [#143524 SQLite WAL 增至 1.4–2.8 GB，阻塞 Gateway 启动](https://github.com/openclaw/openclaw/issues/143524) | 已关闭 | Issue 已关闭，但列表中未见可明确关联的合并 PR；关联的 #181432、#143640、#166634 仍开放 |
| [#159662 prepared-model-catalog Worker 泄漏 4–5 GB/小时](https://github.com/openclaw/openclaw/issues/159662) | 开放 | 今日列表未见明确修复 PR；标注 needs-maintainer-review |
| [#170956 Windows 启动、插件关闭及更新不可靠](https://github.com/openclaw/openclaw/issues/170956) | 开放 | 今日相关 PR 有 [#185425](https://github.com/openclaw/openclaw/pull/185425)，但仅覆盖显式 npm 命令，不足以覆盖全部问题 |
| [#166634 崩溃恢复后 agent 永久 UNAVAILABLE](https://github.com/openclaw/openclaw/issues/166634) | 开放 | 未见明确 fix PR |
| [#172091 Worker SQLite 事务永久阻塞共享状态 checkpoint](https://github.com/openclaw/openclaw/issues/172091) | 已关闭 | 已进入处理流程；与 WAL 增长问题高度相关 |

### P1 / 高优先级

| 问题 | 状态 | Fix PR 情况 |
|---|---|---|
| [#140010 Windows 睡眠唤醒后 WebSocket 重连失败](https://github.com/openclaw/openclaw/issues/140010) | 开放 | 未见明确修复 PR |
| [#177656 Native host exec 返回 shared-state admission error](https://github.com/openclaw/openclaw/issues/177656) | 开放 | 未见明确修复 PR |
| [#183786 Windows beta 升级重复查询已停止 PID](https://github.com/openclaw/openclaw/issues/183786) | 开放 | 未见明确修复 PR |
| [#181432 2026.10.5 启动 RSS 约 1.9 GB 并伴随 SQLite 超时](https://github.com/openclaw/openclaw/issues/181432) | 开放 | 未见明确修复 PR |
| [#145203 SSE 流挂起 48.5 分钟，stall watchdog 无法恢复](https://github.com/openclaw/openclaw/issues/145203) | 开放 | 未见明确修复 PR |
| [#166017 MCP session 未应用默认 TTL，子进程堆积至 256](https://github.com/openclaw/openclaw/issues/166017) | 开放 | 未见明确修复 PR |
| [#168456 模型回退因 transcript turn-key assertion 失败](https://github.com/openclaw/openclaw/issues/168456) | 开放 | 未见明确修复 PR |
| [#178300 1-token length stop 被错误标记为成功](https://github.com/openclaw/openclaw/issues/178300) | 开放 | 未见明确修复 PR |
| [#126906 禁用写入工具后 memory persistence 静默失效](https://github.com/openclaw/openclaw/issues/126906) | 开放 | 今日有相关 PR [#184956](https://github.com/openclaw/openclaw/pull/184956) 恢复 allowlist 警告，但不覆盖“禁用写入仍报告成功”的全部语义 |
| [#158070 Lane queue 中 compaction 失败导致投递丢失](https://github.com/openclaw/openclaw/issues/158070) | 开放 | 未见明确修复 PR |
| [#128067 beta.7 报告六类持久化、投递和恢复缺陷](https://github.com/openclaw/openclaw/issues/128067) | 开放 | 未见明确修复 PR |
| [#134993 文件系统发现忙循环占满单核](https://github.com/openclaw/openclaw/issues/134993) | 开放 | 未见明确修复 PR |

### P2 / 中等优先级及功能回归

| 问题 | 状态 | Fix PR 情况 |
|---|---|---|
| [#129314 runtime context 被错误作为独立可见消息发送](https://github.com/openclaw/openclaw/issues/129314) | 开放 | 未见明确修复 PR |
| [#151962 heartbeat、异步命令等内部字符串被伪装为用户消息](https://github.com/openclaw/openclaw/issues/151962) | 开放 | 未见明确修复 PR |
| [#146902 工具成员变化破坏 prompt-cache 复用](https://github.com/openclaw/openclaw/issues/146902) | 开放 | 未见明确修复 PR |
| [#144797 复用 claude-cli session 时保留已删除的 MCP 配置并持续 401](https://github.com/openclaw/openclaw/issues/144797) | 开放 | 未见明确修复 PR |
| [#118793 Claude CLI session limit 不触发模型回退](https://github.com/openclaw/openclaw/issues/118793) | 开放 | 未见明确修复 PR |
| [#143640 memory index 全量发布事务耗尽 5 秒 busy timeout](https://github.com/openclaw/openclaw/issues/143640) | 开放 | 未见明确修复 PR |
| [#141556 NO_REPLY 在定向线程中变成错误回复](https://github.com/openclaw/openclaw/issues/141556) | 开放 | 未见明确修复 PR |
| [#142606 原生 App 中 Dashboard 外链点击无反应](https://github.com/openclaw/openclaw/issues/142606) | 开放 | 未见明确修复 PR |
| [#184600 Skill Workshop 自动修改技能行为且无用户审核](https://github.com/openclaw/openclaw/issues/184600) | 开放 | 未见明确修复 PR；安全敏感 |
| [#149631 PR preflight 因 121 个 Node job 超过 120 上限而失败](https://github.com/openclaw/openclaw/issues/149631) | 开放 | 未见明确修复 PR |

### 已关闭但曾造成发布阻断的问题

以下问题今日已关闭，说明至少完成了分流、修复或状态确认，但关闭并不必然意味着根因已经彻底消除：

- [#156112 `openclaw update` 在 global install swap 失败](https://github.com/openclaw/openclaw/issues/156112)
- [#154924 global-install-failed](https://github.com/openclaw/openclaw/issues/154924)
- [#158231 managed-service-preflight](https://github.com/openclaw/openclaw/issues/158231)
- [#153333 database-schema-preflight](https://github.com/openclaw/openclaw/issues/153333)
- [#173765 更新后 LaunchAgent 丢失，造成约 30 分钟静默中断](https://github.com/openclaw/openclaw/issues/173765)
- [#139813 macOS LaunchDaemon 所有权扫描被端点安全软件阻断](https://github.com/openclaw/openclaw/issues/139813)
- [#162027 Windows managed update 验证阶段退出码 13](https://github.com/openclaw/openclaw/issues/162027)
- [#170335 更新后数据库快照被删除](https://github.com/openclaw/openclaw/issues/170335)

---

## 六、功能请求与路线图信号

### 1. 官方支持 Databricks Unity Gateway

[#155633 — Add Databricks Unity Gateway as an official model provider](https://github.com/openclaw/openclaw/issues/155633)  
实现 PR：[#155634](https://github.com/openclaw/openclaw/pull/155634)

- 企业用户希望模型流量统一经过 Unity Gateway，而不是手写通用 provider 配置。
- 该需求已具备实现 PR，进入下一版本的可能性较高。
- 需要重点确认认证、模型发现、流式响应和错误映射是否与官方 provider 一致。

### 2. iOS/macOS 可选个人身份，同时保留 Shared owner

[#162164 — Opt-in personal identity in iOS/macOS while preserving Shared owner](https://github.com/openclaw/openclaw/issues/162164)

- 方向是让个人设备可绑定独立身份，同时不破坏现有共享配置和权限模型。
- Issue 已包含较完整的交付状态图，属于跨配置、身份和原生客户端的系统性路线。
- 短期进入稳定版概率低于 provider 接入，但仍可能成为后续原生端重点版本。

### 3. Teams 动态解析团队 SharePoint 站点

[#136271 — msteams: resolve team SharePoint site dynamically](https://github.com/openclaw/openclaw/issues/136271)

- 允许 Teams 渠道上传文件时自动定位团队 SharePoint，减少硬编码 `sharePointSiteId`。
- 已有 linked PR 迹象。
- 若验证通过，具备进入近期版本的现实可能。

### 4. `sessions_send` 增加可选的延迟完成机制

[#112372 — Add opt-in, origin-bound deferred completion to sessions_send](https://github.com/openclaw/openclaw/issues/112372)

- 目标是将跨 Agent 调用从同步等待改为可选的、来源绑定且可持久化的完成通知。
- 可缓解长时间阻塞、队列等待和跨 Agent 编排复杂度。
- 由于涉及会话状态、恢复和消息路由，更可能进入后续版本，而非小修版本。

### 5. Android 对齐浏览器端问答和审批体验

[#175826 — Android: match browser in-chat optional questions and native approval requests](https://github.com/openclaw/openclaw/issues/175826)

- 复用现有 Gateway contract 和权限所有者，使 Android 原生端支持浏览器已有的可选问题与审批交互。
- 说明原生端功能对齐仍是明确路线。
- Issue 当前要求设计确认，适合列入下一轮原生端里程碑。

### 6. Skill Workshop 增加审阅与恢复机制

[#184600 — Skill Workshop 自动修改技能行为](https://github.com/openclaw/openclaw/issues/184600)

- 用户诉求包括：
  - 自动修改前展示 diff；
  - 用户明确同意；
  - 保留可回滚版本；
  - 区分技能内容与行为污染风险；
  - 对自动生成内容建立信任边界。
- 该需求兼具安全和产品治理属性，若无法近期解决，可能通过禁用后台自动变更或改为显式审批来止损。

### 7. Prompt 与上下文效率优化

[#67419](https://github.com/openclaw/openclaw/issues/67419)、[#143017](https://github.com/openclaw/openclaw/issues/143017)、[#146902](https://github.com/openclaw/openclaw/issues/146902)

- 近期明显路线是降低 bootstrap 重复注入、保持会话前缀稳定、减少工具集合无意义变动。
- 相关 PR 主要集中在 Agent 工具装配、UI 首屏和 session lifecycle。
- 下一版本更可能先落地“稳定提示前缀”和“减少重复准备”，完整缓存指标体系仍需持续建设。

---

## 七、用户反馈摘要

### 核心使用场景

1. **长期运行的个人 Gateway**
   - 用户会在 Windows 笔记本、macOS 和 Linux 服务上持续运行 Gateway。
   - Gateway 不只是短时 CLI，而是连接 Telegram、WhatsApp、Teams、Slack、WebChat 和多个 Agent 的长期基础设施。
   - 因此，内存泄漏、WAL 增长和睡眠恢复问题会直接影响日常可用性。

2. **多 Agent 与定时任务**
   - 多 Agent 路由、cron `agentTurn`、MCP server 和会话间调用是高频场景。
   - 用户特别关注模型回退、任务最终状态、消息是否丢失，以及长时间运行后的资源回收。

3. **企业模型网关与身份治理**
   - Databricks Unity Gateway、MCP OAuth、Claude CLI MCP 配置、共享 owner 与个人身份都反映企业用户对可治理集成的需求。
   - 单纯“能够接入”不够，运维侧还期待状态诊断、过期提醒和清晰的权限边界。

4. **大型历史会话**
   - 2,000 条消息级别的会话已带来明显的 Web UI 首屏性能问题。
   - 工具卡片、流式输出和 Markdown 渲染成为主要性能瓶颈。

### 用户满意点

- 新版本继续提供稳定网关定位及安全、可靠性、性能修复；
- Mattermost、iMessage、Windows npm 等针对性修复覆盖了真实生产摩擦；
- PostgreSQL 搜索兼容性和数据库快照清理显示项目正在加强跨后端、跨生命周期的一致性；
- Web UI 性能 PR 已使用大型会话和截图进行验证，维护者对性能问题的响应速度较高。

### 主要不满意点

- **升级不可靠**：用户在 Windows、macOS 和 Linux 上报告过 global install、managed-service、schema preflight、runtime verification、快照丢失等不同阶段的失败。
- **问题关闭与根因闭环之间存在认知落差**：部分 Issue 被快速关闭，但相同症状仍在其他版本或其他数据库路径中复现。
- **缺少运维可观测性**：用户难以判断 WAL 为什么增长、Worker 为什么占内存、更新停在哪一步、Gateway 是否已恢复。
- **缓存与上下文成本不透明**：大量 token 被重复注入或缓存重写，但缺少可直接观测的“缓存前缀稳定性”和“每轮上下文增量”指标。
- **自动行为变更缺少信任边界**：Skill Workshop 自动修改行为指令，是当前社区中非常明确的不信任点。

---

## 八、待处理积压

### 需要维护者优先响应的开放 Issue

1. [#159662 Worker 内存泄漏](https://github.com/openclaw/openclaw/issues/159662)  
   P0，影响长期运行稳定性；建议明确负责人、复现基线和修复版本。

2. [#143640 memory index 发布事务阻塞](https://github.com/openclaw/openclaw/issues/143640)  
   与 SQLite busy timeout 和 checkpoint 链路直接相关，建议与 WAL 问题合并为统一稳定性专题。

3. [#166634 崩溃恢复后 agent 永久不可用](https://github.com/openclaw/openclaw/issues/166634)  
   P0，且涉及不可恢复状态；建议加入 crash-restart E2E 回归。

4. [#177656 Native host exec shared-state admission error](https://github.com/openclaw/openclaw/issues/177656)  
   已在稳定版出现至少多次失败，应尽快确认影响范围和可用降级路径。

5. [#145203 SSE 长时间挂起且 watchdog 无效](https://github.com/openclaw/openclaw/issues/145203)  
   建议增加心跳、最大静默时间和可取消恢复机制。

6. [#166017 MCP session TTL 未生效](https://github.com/openclaw/openclaw/issues/166017)  
   子进程数量可能增长至硬上限，应优先检查默认配置应用路径。

7. [#140010 Windows 睡眠恢复后重连失败](https://github.com/openclaw/openclaw/issues/140010)  
   用户影响广，但 Issue 标记 needs-info；维护者应提供统一日志采集模板。

8. [#184600 Skill Workshop 自动修改技能行为](https://github.com/openclaw/openclaw/issues/184600)  
   安全敏感且涉及用户信任，建议设置临时默认策略，并公开处置计划。

9. [#67419 Bootstrap 文件重复注入](https://github.com/openclaw/openclaw/issues/67419)  
   已积累较长讨论，应从“用户优化建议”升级为正式上下文架构议题。

10. [#149631 Node matrix 121 超过 120 上限](https://github.com/openclaw/openclaw/issues/149631)  
    这是 CI 基础设施阻塞问题，修复成本通常较低，但会阻碍相关 PR 验证。

### 长期或重复出现、需要收敛的 Issue

- [#143524 SQLite WAL 膨胀](https://github.com/openclaw/openclaw/issues/143524)：虽已关闭，但 [#143640](https://github.com/openclaw/openclaw/issues/143640)、[#166634](https://github.com/openclaw/openclaw/issues/166634) 和 [#181432](https://github.com/openclaw/openclaw/issues/181432) 显示问题可能仍以不同形式存在。
- [#128067 beta.7 六类可靠性缺陷报告](https://github.com/openclaw/openclaw/issues/128067)：适合作为稳定性回归清单，而非继续作为单一问题堆叠。
- [#129314](https://github.com/openclaw/openclaw/issues/129314)、[#151962](https://github.com/openclaw/openclaw/issues/151962)、[#126906](https://github.com/openclaw/openclaw/issues/126906)：共同指向“系统信号与真实用户消息、工具权限和持久化状态边界不清”。
- [#143017](https://github.com/openclaw/openclaw/issues/143017)、[#146902](https://github.com/openclaw/openclaw/issues/146902)、[#67419](https://github.com/openclaw/openclaw/issues/67419)：共同指向 prompt prefix、工具集合和上下文注入缺乏稳定契约。

---

## 项目健康度结论

| 维度 | 评价 | 依据 |
|---|---|---|
| 开发活跃度 | **高** | 24 小时更新 500 Issues、500 PR，PR 中覆盖功能、修复、性能、测试和文档 |
| 发布节奏 | **稳定** | 发布 extended-stable 版本，强调安全、可靠性和新模型支持 |
| 社区反馈 | **非常活跃** | 最高评论 Issue 达 139 条，真实部署场景丰富 |
| 缺陷收敛 | **偏弱** | 多个 P0/P1 问题仍开放，且数据库、内存、Windows 升级问题存在重复症状 |
| 测试与性能投入 | **上升** | 多项 E2E、数据库兼容、长会话性能及测试清理 PR 同步推进 |
| 生产可靠性 | **需重点改善** | Gateway 内存、WAL、事务阻塞、升级失败和服务恢复仍是主要风险 |
| 综合健康度 | **活跃但承压** | 产出能力充足，关键是建立稳定版准入、回滚验证和跨平台升级的统一质量门槛 |

**今日判断：** OpenClaw 正处于高吞吐开发阶段，Web UI 性能、渠道可靠性和数据兼容正在改善；但若下一阶段不能优先解决 **资源泄漏、SQLite 状态一致性、Windows/macOS 升级回滚和模型回退**，持续的高 Issue/PR 吞吐反而会放大维护压力和用户升级风险。

---

## 横向生态对比

# 个人 AI 助手 / 自主智能体开源生态横向分析报告

**分析日期：2026-10-27**  
**数据口径：各项目过去 24 小时 GitHub 动态；Issue/PR 的“关闭”不等同于已合并或已进入正式版本。**

---

## 1. 生态全景

个人 AI 助手与自主智能体正从“聊天 UI + 工具调用”快速转向可长期运行、跨渠道、多智能体协作的个人 AI 基础设施，OpenClaw、QwenPaw、Hermes Agent 和 OpenHuman 的高 Issue/PR 吞吐均体现了这一点。与此同时，生态的主要矛盾已从功能缺位转向生产可靠性：资源泄漏、SQLite 一致性、升级回滚、任务取消、超时、上下文压缩和渠道幂等成为高频问题。

模型接入日益统一，但各项目正在形成差异化路径：OpenClaw 强调 Gateway 与全渠道中台，Hermes 强调 Unified Gateway 和多客户端一致性，QwenPaw 强调桌面端、多供应商和插件化，NanoBot 强调轻量个人助手，OpenHuman 强调统一渠道 API 与可评测性，Picoclaw 则聚焦低成本本地运行与多智能体编排。

社区反馈也从“模型不够聪明”转向“系统能否可靠、经济地完成任务”，单轮 Token 失控、空会话泄漏、上下文膨胀、自动任务重复执行等问题受到高度关注。整体生态**功能扩张迅速，但发布治理、合并吞吐、回归测试和可观测性明显落后于功能开发速度**。

---

## 2. 各项目活跃度对比

| 项目 | 今日 Issues | 今日 PR | Release | 活跃度 / 健康度 |
|---|---:|---:|---|---|
| **OpenClaw** | 500 | 500 | **有：v2026.9.35 extended-stable** | 极高活跃度；生态规模领先，但 P0/P1 积压和生产可靠性承压 |
| **NanoBot** | 3 | 34 | 无 | 高活跃度；功能迭代快，WebUI 集中，sudo 循环和取消竞态待闭环 |
| **Picoclaw** | 4 | 5 | 无 | 中等偏高；PR 流转较快，但智能路由缺少成本熔断 |
| **IronClaw** | 0 | 0 | 无 | 无活动；当前社区存在感很弱 |
| **LobsterAI** | 1 | 4 | 无 | 中等偏活跃；产品迭代存在，PR 积压、封禁申诉和发布节奏偏弱 |
| **QwenPaw** | 18 | 48 | 无正式 Release；Creator 2.0.3 PR 已关闭 | 高活跃度；架构扩张快，但 34 个待合并 PR 带来集成压力 |
| **Hermes Agent** | 50 | 50 | 无 | 极高活跃度；功能覆盖广，但 Unified Gateway 迁移后问题高度集中 |
| **OpenHuman** | 10 | 19 | 无 | 高修复密度；16 条 PR 已合并或关闭，工程收敛能力较强 |

### 数据解读

- **社区规模与吞吐明显分层**：OpenClaw 的 1000 条 Issue/PR 更新远超其他项目，Hermes、QwenPaw构成第二梯队，OpenHuman 和 NanoBot 属于中等规模高响应项目。
- **发布节奏并不与活跃度一致**：除 OpenClaw 外，多数项目没有正式 Release；大量“关闭”PR仍需确认是否真正进入可升级版本。
- **待合并积压值得警惕**：QwenPaw 有 34 个待合并 PR，Hermes 有 44 个待合并 PR。功能产出很高，但代码进入稳定版的效率偏低。
- **OpenHuman 的 PR 完成率较高**：19 条 PR 中 16 条已合并或关闭，呈现更明显的工程收敛和缺陷修复导向。

---

## 3. OpenClaw 在生态中的定位

### 3.1 核心优势

1. **生态规模与社区反馈领先**  
   24 小时内更新 500 个 Issue 和 500 个 PR，规模约为第二梯队项目的数倍至数十倍。其优势不只是代码量，更在于拥有覆盖 Windows、macOS、Linux，以及 Telegram、WhatsApp、Teams、Slack、Mattermost、WebChat 等场景的真实用户反馈网络。

2. **Gateway 中台定位最清晰**  
   OpenClaw 将长期运行服务、Agent、插件、会话、模型路由、渠道和多端交互集中到 Gateway，是当前项目中最接近“个人 AI 操作系统 / Agent 基础设施”的形态。

3. **全栈产品化程度较高**  
   除 Gateway 外，还覆盖 Web UI、移动端思路、渠道接入、模型 Provider、数据库搜索、升级机制和技能系统。相比 PicoClaw 或 NanoBot，它更像一个完整个人 Agent 平台；相比 QwenPaw，它更偏服务端和多渠道；相比 Hermes，它更强调终端个人自动化与消息渠道。

4. **发布与安全治理意识较强**  
   extended-stable 定位接近 LTS，并明确强调安全、可靠性和性能修复，在生态中具备较强的稳定版品牌意识。

### 3.2 技术路线差异

| 维度 | OpenClaw | 同类项目主要差异 |
|---|---|---|
| 核心形态 | Gateway + Agent + 插件 + 多渠道 + Web UI | NanoBot 更轻量；Picoclaw 更本地/低成本；QwenPaw 桌面端更突出；Hermes 更强调统一客户端控制面 |
| 持久化 | SQLite/WAL 为主，同时改善 PostgreSQL 搜索兼容 | OpenHuman 重点暴露 MongoDB 导入；QwenPaw 重点处理 ReMe 记忆和多后端组件 |
| 扩展方式 | 插件、Provider、渠道和 Agent 生态 | QwenPaw 正在把渠道和 Whisper SDK 插件化；OpenHuman 推进 TinyChannels 统一 API |
| 长期运行 | Gateway 常驻设计突出 | QwenPaw 同样面向 Docker/桌面长期运行，但当前资源与 watcher 问题更突出 |
| 多智能体 | 支持会话、工具与跨 Agent 编排 | Picoclaw 明确推进 Agent Teams；Hermes 推进插件 subagent lifecycle；OpenClaw 更强调生态与工作流扩展 |

### 3.3 社区规模对比

OpenClaw 是本组项目中社区规模最大的项目，但“高吞吐”也带来明显治理负担：

- 24 小时处理 500 Issue、500 PR；
- SQLite WAL、Worker 内存泄漏、Windows 更新和恢复、模型回退等 P0/P1 问题仍未完全闭环；
- 部分 Issue 虽已关闭，但相似症状仍出现在其他 Issue 中，削弱“关闭即解决”的可信度。

因此，OpenClaw 的真正优势是**规模、场景覆盖与基础设施完整度**；其核心挑战是**如何把社区吞吐转化为稳定版质量**。

---

## 4. 共同关注的技术方向

### 4.1 Gateway、长期运行与状态一致性

- **OpenClaw**：SQLite/WAL 膨胀、事务阻塞、崩溃恢复后 Agent 永久不可用、Windows 服务恢复。
- **Hermes Agent**：Unified Gateway 合并后的 session registry、route、lineage、权限和跨客户端恢复不一致。
- **QwenPaw**：插件导入阻塞全局启动、ReMe watcher 线程耗尽、渠道静默丢消息。
- **OpenHuman**：MongoDB legacy import 每次启动失败、线程删除/清理竞态。
- **Picoclaw**：Agent turn 空转和成本失控。
- **LobsterAI**：Electron 升级与开发环境缓存导致应用挂载异常。

**共同诉求**：从“能启动”转向“长期稳定运行、崩溃可恢复、状态可解释、失败可隔离”。

### 4.2 取消、超时与任务生命周期

- OpenClaw：SSE 挂起、watchdog 无法恢复、MCP session TTL 未生效。
- NanoBot：并行工具取消后兄弟工具仍继续运行。
- QwenPaw：流式请求无限挂起、取消后工具仍执行、ReMe 线程耗尽。
- Hermes：hard interrupt 后 sibling tool 仍可能派发。
- PicoClaw：智能路由缺少单轮调用上限和熔断。

**共同诉求**：超时、取消信号、任务所有权和资源释放必须形成一致契约，不能只修某一个工具。

### 4.3 上下文、Token 成本与提示缓存

- OpenClaw：bootstrap 每轮重复注入、工具集合变化破坏 prompt cache、长会话 UI 渲染缓慢。
- PicoClaw：单轮 222 次 LLM 调用，消耗约 1310 万输入 Token。
- QwenPaw：上下文压缩失败、摘要请求 400、长会话任务中断。
- Hermes：provider 400 被误判为上下文溢出，`cache_control` 在 failover 时不兼容。
- NanoBot：取消工具、复杂参数校验等直接影响单轮执行成本。

**共同诉求**：用户需要可观测的 Token、费用、缓存命中率和上下文增量指标，同时需要单轮预算、循环检测与强制熔断。

### 4.4 渠道统一与消息可靠性

- OpenClaw：Mattermost 最终回复顺序、通知缺失和 iMessage 投递验证。
- Hermes：Discord `admission_conflict`、父子会话无法恢复。
- OpenHuman：TinyChannels v2、Discord 工单按钮与 PII 脱敏。
- QwenPaw：官方渠道插件化和子进程隔离。
- NanoBot：Discord 静默进度消息、最终答案突出显示。
- PicoClaw：Telegram MarkdownV2 转义不完整导致整条回复降级。
- LobsterAI：渠道投递及长文本交互持续完善。

**共同诉求**：渠道不再只是消息出口，而需要统一的发送顺序、幂等、通知、重试、状态回执、权限和隐私边界。

### 4.5 模型与供应商兼容层

- OpenClaw：PostgreSQL 搜索兼容、模型回退失效、MCP OAuth 过期状态。
- QwenPaw：ChatGPT Subscription 登录、非 OpenAI 模型目录刷新、供应商能力矩阵。
- Hermes：system prefill、多 provider failover、严格 JSON Schema、Anthropic/OpenAI 格式转换。
- NanoBot：复杂 MCP JSON Schema 校验。
- OpenHuman：云 provider headers、User-Agent、模型调用观测字段。
- PicoClaw：Anthropic Provider 请求体修复。

**共同诉求**：Provider 差异需要被显式建模，不能依赖单个调用点临时兼容；模型目录、鉴权、fallback、流式事件和结构化输出都需要统一测试矩阵。

### 4.6 跨平台与升级可靠性

- OpenClaw：Windows 更新、服务恢复、MCP 与插件重连。
- NanoBot：Windows 原子写入破坏换行。
- QwenPaw：Linux 打包、Windows/macOS/Linux 构建矩阵、CRLF 被转成 LF。
- LobsterAI：Electron 43→45 大版本升级。
- Hermes：Windows watchdog 退出后不重启。
- OpenHuman：多模块版本 pin 与 CI 环境不一致。

**共同诉求**：升级必须具备统一 preflight、备份、迁移、失败回滚和跨平台回归测试，不能依赖用户手工排障。

### 4.7 WebUI 从“可用”进入“可管理”阶段

涉及 OpenClaw、NanoBot、Picoclaw、LobsterAI：

- 大型历史会话加载性能；
- 长文本粘贴折叠；
- 会话批量归档；
- 文件夹分类；
- 未读状态跨设备同步；
- 子任务详情入口；
- Shell 输出和文件路径原样展示。

共同诉求已从“增加 UI 功能”转向**降低长会话、多任务、多文件场景的信息密度和操作成本**。

---

## 5. 差异化定位分析

| 项目 | 功能侧重 | 目标用户 | 技术架构与优势 | 主要短板 |
|---|---|---|---|---|
| **OpenClaw** | 全渠道个人 Agent 平台、Gateway、插件、多模型、Web UI | 高级个人用户、自动化重度用户、小型私有部署 | Gateway 中台、多渠道、多 Agent、Provider 和插件生态；社区规模最大 | SQLite/Worker/Windows 稳定性债务；升级与回滚复杂；治理压力高 |
| **NanoBot** | 轻量 WebUI、文件与 Shell、命令执行、会话管理 | 希望快速搭建个人助手的开发者与轻量用户 | 迭代快、架构相对聚焦；WebUI 体验改进密集 | sudo 循环、取消竞态、Windows 持久化；19 个待合并 PR |
| **Picoclaw** | 低成本本地 Agent、渠道接入、Agent Teams | 边缘设备、本地部署、多智能体实验用户 | Go 架构、边缘友好；Provider 与多 Agent 方向明确 | 路由无预算/熔断，可出现极端 Token 消耗；PR 状态需核实 |
| **LobsterAI** | 桌面 Cowork、Electron、多 Provider、第三方平台整合 | 桌面个人用户及有道生态用户 | Electron 桌面产品、OpenClaw provider descriptor、Cowork 工作流 | PR 积压、账号风控不透明、Electron 升级风险；暂无 Release |
| **QwenPaw** | 桌面端、多 Provider、OAuth、插件化渠道、ReMe 记忆、Linux 支持 | 桌面用户、企业模型用户、多平台自动化用户 | Tauri 桌面、Provider/插件/记忆体系完整，架构野心强 | 34 个待合并 PR；流式、压缩、记忆和取消机制仍有主链路缺陷 |
| **Hermes Agent** | Unified Gateway、多客户端、插件、模型路由、语音 | 高级用户、远程/多端 Agent 用户、插件开发者 | CLI、TUI、Desktop、API、Bot、Cron 等统一到 Gateway | 迁移后 session/权限/lineage 不一致；PR 和 Issue 积压最重 |
| **OpenHuman** | 统一渠道 API、Discord、语音/附件、多 Provider、Agent 评测 | 重渠道、重隐私、重可观测性的个人用户 | TinyChannels v2、模块化生态、修复吞吐高、隐私治理主动 | MongoDB 导入未闭环；模块升级导致 CI/E2E 组合复杂 |
| **IronClaw** | 暂无足够当日动态可判断 | — | — | 无活动，暂不具备活跃生态项目的比较条件 |

### 关键路线差异

- **OpenClaw 是“个人 AI 中台”**：连接面最广，复杂度也最高。
- **Hermes 是“统一控制面”**：重点在 CLI、Desktop、移动端、Bot、Cron 的会话一致性。
- **QwenPaw 是“桌面 Agent 平台”**：桌面发行、OAuth、插件和多 Provider 并行推进。
- **OpenHuman 是“统一渠道与可评测 Agent”**：TinyChannels 和 Terminal-Bench 是差异化重点。
- **NanoBot 是“轻量 Web 个人助手”**：更接近可快速部署的个人机器人。
- **Picoclaw 是“低成本边缘与多 Agent 实验平台”**：但必须先补齐成本治理。
- **LobsterAI 是“桌面 Cowork 产品”**：优势在桌面工作流，短板在运营与发布治理。

---

## 6. 社区热度与成熟度

### 第一层：高吞吐、高曝光、体系化建设

#### OpenClaw

- 500 Issue + 500 PR，生态规模断层领先。
- 功能、Provider、渠道、Web UI、升级、安全同时推进。
- 已有 extended-stable 发布机制。
- 成熟度：**中高**，但生产可靠性低于开发吞吐所暗示的水平。

#### Hermes Agent

- 50 Issue + 50 PR，统一网关讨论最集中。
- 已形成 Desktop、CLI、Bot、Cron、插件、模型路由的完整产品轮廓。
- 成熟度：**中等**；统一迁移完成度高，但一致性模型尚未稳定。

#### QwenPaw

- 18 Issue + 48 PR，架构扩张速度非常快。
- 桌面、OAuth、Linux、渠道插件化、记忆系统均有实现信号。
- 成熟度：**中等**；功能完整度高，主链路稳定性仍需补齐。

### 第二层：快速迭代、局部质量收敛

#### OpenHuman

- 10 Issue + 19 PR，其中 16 条 PR 已合并或关闭。
- Discord 隐私修复、线程竞态、事件日志脱敏、模型观测字段均已落地。
- 成熟度：**中高**，处于从功能开发向质量巩固过渡阶段。

#### NanoBot

- 34 个 PR 更新，19 个待合并。
- WebUI 改善密集，核心运行时开始补取消和参数校验。
- 成熟度：**中等**；产品体验提升快，但关键运行时问题仍开放。

#### Picoclaw

- PR 数量较少，但覆盖 Provider、WebSocket 和 Agent Teams。
- 成熟度：**中等偏低至中等**；架构扩展快于可靠性治理。

### 第三层：产品活跃但治理偏弱

#### LobsterAI

- 迭代主题明确：Cowork 长文本、Provider、Electron。
- 但缺少 Release，且存在陈旧 PR 和账号申诉问题。
- 成熟度：**中等**，更像处于产品打磨与运营体系补齐阶段。

### 非活跃层

#### IronClaw

- 过去 24 小时无 Issue、PR 或 Release 活动。
- 成熟度：**暂无法判断**；若长期无活动，将显著落后于上述项目。

### 整体阶段判断

- **快速迭代期**：Picoclaw、NanoBot、QwenPaw、OpenClaw。
- **质量巩固期**：OpenHuman、Hermes Agent。
- **产品运营与治理补齐期**：LobsterAI。
- **活跃度不足或处于沉寂状态**：IronClaw。

---

## 7. 值得关注的趋势信号

### 7.1 Agent 的核心竞争力正在从模型能力转向执行治理

Picoclaw 单轮 1310 万 Token 事故、OpenClaw 的模型回退失效、Hermes 的 provider 错误误分类都说明：决定 Agent 能否进入生产环境的，越来越不是“能不能调用强模型”，而是能否做到：

- 有预算地执行；
- 及时取消；
- 正确回退；
- 避免重复副作用；
- 解释失败原因。

**开发建议**：把 max iterations、Token/费用预算、循环检测、熔断和降级作为 Agent runtime 的基础能力，而不是后补功能。

### 7.2 Gateway 正成为个人 AI 助手的标准架构，但“统一”不等于“一致”

OpenClaw、Hermes、QwenPaw、OpenHuman 均在推进 Gateway 或统一渠道抽象。下一阶段竞争点将从“是否统一”转向：

- 会话能否跨端恢复；
- 权限模型是否一致；
- reset、archive、delete 是否语义统一；
- 路由和 lineage 是否可追踪；
- 升级后旧会话是否仍可操作。

**开发建议**：先定义 Session、Route、Lineage、Receipt、Owner 的统一状态机，再扩展渠道和客户端，避免每个入口各自实现。

### 7.3 渠道适配正从连接层升级为可靠性层

Mattermost 顺序、Discord `admission_conflict`、Telegram 转义、OpenHuman 工单链路等表明，渠道问题已深入到消息顺序、幂等、权限、回执和隐私。个人 Agent 的核心交互界面已经从 Web 聊天框扩展到 Discord、Telegram、WhatsApp、Teams、Slack、Email 和 iMessage。

**开发建议**：建立统一渠道测试矩阵，至少覆盖发送顺序、重试幂等、超时、格式降级、附件、通知、权限失败和 PII 脱敏。

### 7.4 长期运行能力成为新的产品分水岭

OpenClaw Worker 内存泄漏、QwenPaw watcher 线程耗尽、Hermes Chromium 残留、OpenHuman 线程竞态都表明，短时 Demo 与长期个人基础设施之间存在巨大工程鸿沟。

**开发建议**：优先建设进程/线程所有权、TTL、水位监控、自动回收、崩溃恢复和残留资源巡检，而不是仅依赖用户重启服务。

### 7.5 上下文缓存正成为成本优化核心

多个项目同时暴露重复注入、前缀重写、工具集合变化和压缩失败。Prompt cache 不再只是供应商性能细节，而是直接决定个人助手长期使用的 Token 成本与延迟。

**开发建议**：提供稳定前缀、确定性工具排序、缓存命中率、cache-write tokens、每轮上下文增量和压缩前后大小等指标，并保证工具成员变化可观测。

### 7.6 升级治理正在成为开源 Agent 产品的核心信誉

多个项目在 Windows、Electron、Linux 打包、数据库迁移、插件版本 pin 和依赖升级上出现失败。个人助手往往持有长期记忆、会话和凭据，其升级风险远高于普通桌面应用。

**开发建议**：稳定版必须包含：

1. 数据库和状态备份；
2. 配置迁移兼容；
3. preflight；
4. 失败回滚；
5. 服务恢复验证；
6. 跨平台构建矩阵；
7. 插件与 provider 版本兼容检查；
8. 可直接复现的升级日志。

### 7.7 自动行为修改必须有明确的人类控制边界

OpenClaw Skill Workshop 自动修改 Agent 行为、QwenPaw 技能目录与 OAuth、LobsterAI 第三方凭据复用、PicoClaw 委派与自动工具执行，都指向同一问题：Agent 正在获得越来越强的自动化权限。

**开发建议**：自动修改技能、记忆、权限、凭据和外部副作用时，应提供 diff、审批、版本回滚、作用域限制和审计日志。

### 7.8 可评测性正在成为 Agent 项目的核心竞争力

OpenHuman 的 Terminal-Bench、模型调用 `served_by`/`response_id`/`first_token_ms`，以及各项目对 harness failure 与 intelligence failure 的区分，说明社区开始从“看 demo”转向“用可复现指标判断 Agent 是否真的变强”。

**开发建议**：建立任务成功率、工具执行成功率、恢复成功率、平均轮数、Token/任务成本、P95 首 token 延迟和人工接管率等统一指标。

---

## 结论

生态整体已从单项目、单助手产品阶段进入**个人 Agent 基础设施竞争阶段**。OpenClaw 以最大社区规模和最完整的 Gateway/渠道生态保持领先，但其生产可靠性债务也最突出；Hermes Agent 和 QwenPaw 分别在统一控制面、桌面与多 Provider 方向快速扩张；OpenHuman 正通过统一渠道、隐私治理和评测体系进入质量巩固阶段；NanoBot 与 Picoclaw 更轻量，但必须优先解决授权循环、取消竞态和调用成本失控；LobsterAI 聚焦桌面 Cowork，却需要改善发布与账号治理；IronClaw 当前缺乏足够活跃度。

**对技术决策者的核心建议**：下一阶段选型不应只看 Issue/PR 数量或功能覆盖，而应重点验证五项能力：

1. **长期运行不泄漏、不假死；**
2. **任务可取消、可限预算、可熔断；**
3. **升级可备份、可迁移、可回滚；**
4. **多渠道和多客户端状态一致；**
5. **关键行为有人类审批和可观测性。**

在这些能力形成稳定闭环前，功能数量越多，反而越可能放大生产风险。

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目动态日报

**统计日期：2026-10-27**  
**数据范围：过去 24 小时**  
**项目地址：** [HKUDS/nanobot](https://github.com/HKUDS/nanobot)

---

## 1. 今日速览

过去 24 小时 NanoBot 保持较高开发活跃度，共更新 **3 个 Issues**、**34 个 PR**，其中 **19 个 PR 仍待合并**、**15 个已合并或关闭**，另有 **2 个新问题已有对应修复 PR**。今日提交主要围绕 **WebUI 交互与可维护性、工具参数校验、Agent 并发任务收尾、系统证书信任以及跨平台文本写入** 展开。整体看，项目处于“功能快速迭代、稳定性同步补强”的阶段；但仍有 sudo 循环、取消任务后的并行工具竞态等高优先级问题尚未完全闭环，当前没有新版本发布。

---

## 3. 项目进展

> 今日没有新版本发布，因此本节重点总结已关闭或合并的重要 PR。

### WebUI 交互与功能完善

- **完整 Bang 命令与原样输出**  
  PR [#6173](https://github.com/HKUDS/nanobot/pull/6173) 已关闭。WebUI 现在能够区分普通 `!command` 与用户明确提交的 Shell 命令，并避免 Shell 输出经过 Markdown 渲染后破坏路径、下划线、表格及反引号内容。  
  **价值：** 提升 WebUI 的命令执行可靠性与输出准确性。

- **批量归档会话**  
  PR [#6476](https://github.com/HKUDS/nanobot/pull/6476) 已关闭。新增批量 Archive/Unarchive 操作，同时兼顾窄侧边栏的工具栏布局。  
  **价值：** 改善会话整理效率与响应式体验。

- **显式文件链接预览校验**  
  PR [#6483](https://github.com/HKUDS/nanobot/pull/6483) 已关闭。模型生成的 Markdown 文件链接会先检查网关是否可预览，再决定是否显示为可点击的文件引用。  
  **价值：** 减少无效或拼写错误文件链接带来的误导。

- **Mention 候选展示统一**  
  PR [#6489](https://github.com/HKUDS/nanobot/pull/6489) 已关闭。候选 Mention 改为优先显示可扫描的 `@handle`，同时保留头像、显示名及原有交互。  
  **价值：** 提升长列表中的目标识别效率。

- **长结果中的子任务详情入口**  
  PR [#6478](https://github.com/HKUDS/nanobot/pull/6478) 已关闭。针对长结果场景，确保子任务详情入口不会被滚动区域隐藏。  
  **价值：** 解决“结果可见但详情难打开”的可用性问题。

- **工具上下文元数据重构**  
  PR [#1515](https://github.com/HKUDS/nanobot/pull/1515) 已关闭，但带有冲突标记。方案将底层工具从仅接收 `message_id` 扩展为接收完整 `metadata`，以便 Message、Cron、Spawn 等工具获取平台和路由上下文。  
  **价值：** 增强多平台扩展能力；后续合并前仍需解决冲突并确认兼容性。

### 稳定性与核心行为修复

- **取消运行时等待并行工具收尾**  
  PR [#6468](https://github.com/HKUDS/nanobot/pull/6468) 仍待合并。它处理了并行工具批次取消时，AgentRunner 可能先结束、兄弟工具仍在清理的竞态，也覆盖工具钩子失败后的残留执行问题。  
  **价值：** 降低会话锁提前释放和后台任务泄漏风险，建议优先合入。

### 综合评价

今日共处理 **34 个 PR 更新**，其中一半已进入合并或关闭状态，说明功能提交与代码收敛速度较快。WebUI 是最集中的改动方向；核心运行时则开始处理取消、收尾和证书信任等稳定性问题。整体向前推进明显，但多数高价值修复仍处于待合并状态，实际发布收益尚取决于后续审核与发布节奏。

---

## 4. 社区热点

> 当前数据未提供完整的点赞数和评论数排序；以下按可见评论数及近期关注度整理。

### 1. Agent 卡在 sudo 授权循环

- **Issue：** [#5924](https://github.com/HKUDS/nanobot/issues/5924)
- **评论数：** 9，为今日可见 Issues 中讨论最多
- **状态：** Open，P1
- **诉求：** sudo 授权仅持续一轮，Agent 随即再次申请授权，形成循环；达到最大迭代次数后，Agent 仍持续执着于未能执行的命令。
- **背后需求：** 用户需要授权流程具备明确的可恢复机制，避免 Agent 在不可执行任务上无限消耗资源并阻塞正常交互。

### 2. MCP 工具复杂参数校验缺失

- **Issue：** [#6485](https://github.com/HKUDS/nanobot/issues/6485)
- **评论数：** 0
- **状态：** Open
- **诉求：** 当前校验逻辑不解析本地 `$ref`，也不处理 `anyOf`、`oneOf` 和 tuple-form `items`，而这些正是 MCP 服务常用的模型类型与联合参数结构。
- **背后需求：** 第三方 MCP 工具应能够直接使用常见 JSON Schema 表达，而不必为适配 NanoBot 改写参数定义；错误参数也应被稳定拦截，而不是延迟到执行阶段崩溃。

### 3. Windows 文本原子写入破坏换行

- **Issue：** [#6474](https://github.com/HKUDS/nanobot/issues/6474)
- **评论数：** 0
- **状态：** Open
- **诉求：** `atomic_write_text` 在 Windows 上会将 LF 转为 CRLF，并把已有 CRLF 变成 CRCRLF。
- **影响范围：** 该帮助函数被 cron、trigger 持久化和自动化运行记录使用，可能造成文本内容污染及幂等性问题。
- **背后需求：** 持久化层应保证“写入内容与输入完全一致”，不能依赖平台默认换行转换。

### 4. WebUI 近期 PR 集中涌现

今日 WebUI 相关 PR 数量较多，主要包括：

- [PR #6492：精简重复浏览器测试](https://github.com/HKUDS/nanobot/pull/6492)
- [PR #6493：Discord 静默进度消息](https://github.com/HKUDS/nanobot/pull/6493)
- [PR #6491：简化重试状态文案](https://github.com/HKUDS/nanobot/pull/6491)
- [PR #6484：统一聊天链接与编辑文件名的颜色](https://github.com/HKUDS/nanobot/pull/6484)
- [PR #6490：展示所有预设的上下文与推理信息](https://github.com/HKUDS/nanobot/pull/6490)
- [PR #6487：从任务内容打开子任务详情](https://github.com/HKUDS/nanobot/pull/6487)
- [PR #6482：集中化 WebUI 出站交付逻辑](https://github.com/HKUDS/nanobot/pull/6482)
- [PR #6481：跨设备同步未读状态](https://github.com/HKUDS/nanobot/pull/6481)

**社区关注点：** 用户和贡献者正在集中完善 WebUI 的信息架构、状态反馈、跨设备体验、测试覆盖和可维护性。这表明 WebUI 已从“基本可用”进入“持续打磨”的阶段。

---

## 5. Bug 与稳定性

### P1：Agent 陷入 sudo 循环

- **Issue：** [#5924](https://github.com/HKUDS/nanobot/issues/5924)
- **严重程度：** 高
- **影响：** Agent 可能反复请求 sudo、达到迭代上限后仍继续尝试，最终变得不可用。
- **修复状态：** 今日列表中**未看到明确对应 fix PR**。
- **建议：** 增加授权状态识别、单轮任务内的授权记忆、超限后的安全终止策略，以及“无法执行 sudo”场景下的显式用户提示。

### P2：复杂 JSON Schema 参数校验失效

- **Issue：** [#6485](https://github.com/HKUDS/nanobot/issues/6485)
- **修复 PR：** [#6486](https://github.com/HKUDS/nanobot/pull/6486)，Open
- **严重程度：** 中高
- **影响：** `$ref`、`anyOf`、`oneOf` 和 tuple-form `items` 中的参数可能被错误放行，导致 MCP 工具调用在后续执行时失败或崩溃。
- **修复状态：** **已有修复 PR，等待合并**。
- **优先级建议：** 优先审核合并，因为该问题直接影响 MCP 工具生态兼容性。

### P2：Windows 换行符被重复转换

- **Issue：** [#6474](https://github.com/HKUDS/nanobot/issues/6474)
- **严重程度：** 中
- **影响：** cron、trigger 及自动化运行记录可能保存被污染的文本。
- **修复状态：** 今日列表中**未看到明确对应 fix PR**。
- **建议：** 原子写入时显式以二进制或 `newline=""` 语义保存原文，并补充 Windows CRLF 回归测试。

### P2：取消并行工具批次后的竞态

- **PR：** [#6468](https://github.com/HKUDS/nanobot/pull/6468)
- **严重程度：** 中高
- **影响：** Agent 回合可能先完成并释放会话锁，而其他并行工具仍在运行或清理，造成竞态、后台残留及状态不一致。
- **修复状态：** **已有修复 PR，等待合并**。

### P2：文件预览路径解析错误

- **PR：** [#6462](https://github.com/HKUDS/nanobot/pull/6462)
- **严重程度：** 中
- **影响：** `C#/Program.cs`、`notes#1.md`、`report?.txt` 等合法路径会被错误截断。
- **修复状态：** 已有修复 PR，仍待合并。

### P2：系统 SSL 证书验证兼容性

- **PR：** [#6488](https://github.com/HKUDS/nanobot/pull/6488)
- **严重程度：** 中
- **影响：** 在依赖企业代理、系统证书或非默认 CA 的环境中，HTTPX/标准 SSL 连接可能发生验证失败。
- **修复状态：** 已有修复 PR，仍待合并。
- **安全说明：** 方案通过 `truststore` 注入系统证书存储，并非直接关闭 TLS 验证；仍需确认启动开销、依赖兼容性与失败降级行为。

### P2：WebUI 重试状态提示不准确

- **PR：** [#6491](https://github.com/HKUDS/nanobot/pull/6491)
- **严重程度：** 低至中
- **影响：** 重试期间状态可能显示为零秒，且文案包含冗余标点与尝试次数，影响用户判断。
- **修复状态：** 已有修复 PR，仍待合并。

---

## 6. 功能请求与路线图信号

### 高概率进入近期版本

1. **MCP 参数校验增强**
   - Issue：[#6485](https://github.com/HKUDS/nanobot/issues/6485)
   - PR：[#6486](https://github.com/HKUDS/nanobot/pull/6486)
   - **判断：较高。** 已具备明确实现与测试，且直接提升 MCP 工具兼容性，适合进入下一批修复发布。

2. **系统证书信任支持**
   - PR：[#6488](https://github.com/HKUDS/nanobot/pull/6488)
   - **判断：中高。** 对企业网络和代理环境价值明显，但需完成依赖及安全审查。

3. **Discord 静默进度消息**
   - PR：[#6493](https://github.com/HKUDS/nanobot/pull/6493)
   - **判断：中高。** 解决一次普通问答触发 3–6 次通知、最终答案被中间消息淹没的问题，直接改善聊天体验。

4. **WebUI 预设信息补全**
   - PR：[#6490](https://github.com/HKUDS/nanobot/pull/6490)
   - **判断：中高。** 为 primary、fallback、disabled 预设统一展示模型、上下文长度和推理强度，属于明确的产品体验增强。

5. **WebUI 未读状态跨设备同步**
   - PR：[#6481](https://github.com/HKUDS/nanobot/pull/6481)
   - **判断：中等。** 将阅读进度存储在 Gateway，可解决手机已读、桌面仍显示未读的不一致问题，契合多端使用场景。

6. **子任务内容可打开详情**
   - PR：[#6487](https://github.com/HKUDS/nanobot/pull/6487)
   - **判断：中等。** 对运行中的工具调用、错误文本及完成后的 Markdown 结果均可打开任务详情，是现有功能的交互补全。

### 可能纳入后续版本

- **会话列表分页**
  - PR：[#6315](https://github.com/HKUDS/nanobot/pull/6315)
  - 增加可选 `offset` 和 `limit`，同时保持原有完整列表默认行为。
  - **判断：中等。** 对大规模会话管理有价值，但当前缺少真实性能数据或明确版本计划。

- **新增 aimlapi.com Provider**
  - PR：[#5666](https://github.com/HKUDS/nanobot/pull/5666)
  - 新增 OpenAI-compatible 网关 Provider。
  - **判断：中等偏低。** 技术实现已完成，但属于外部商业 Provider，合并通常取决于维护者对供应商中立性、长期维护和测试标准的审查。

- **WebUI 出站交付层集中化**
  - PR：[#6482](https://github.com/HKUDS/nanobot/pull/6482)
  - 集中处理展示、流状态、持久化和回合完成逻辑。
  - **判断：架构性价值高。** 更可能作为后续 WebUI 功能迭代的基础设施合入，而非单独形成用户可见功能。

- **工具上下文传递完整 metadata**
  - PR：[#1515](https://github.com/HKUDS/nanobot/pull/1515)
  - **判断：潜在高价值。** 为多平台路由与工具扩展提供基础，但当前存在冲突，且改动范围较大，需要先完成设计与兼容性审查。

---

## 7. 用户反馈摘要

### sudo 授权无法跨回合延续

在 [#5924](https://github.com/HKUDS/nanobot/issues/5924) 中，用户反馈 sudo 授权只对当前一轮有效。Agent 尚未执行命令，授权窗口就已结束，随后不断重新申请授权。该问题在高迭代、命令失败或执行环境需要提权的场景下尤其明显。

用户的核心不满不是单次提权失败，而是：

- Agent 无法理解授权已经失效；
- 没有清晰的恢复或终止机制；
- 达到最大迭代次数后仍持续执行同类命令；
- 最终表现为“Agent 变得不可用”。

这是今日最值得优先处理的真实用户体验问题。

### MCP 工具参数需要绕开框架限制

[#6485](https://github.com/HKUDS/nanobot/issues/6485) 反映出实际 MCP 服务大量使用 `$ref`、联合类型和 tuple 参数。当前 NanoBot 校验器没有覆盖这些结构，意味着用户可能需要：

- 修改 MCP 服务端 schema；
- 简化工具参数定义；
- 或在框架侧另加适配。

对生态集成而言，这类兼容性问题会直接增加第三方工具接入成本。

### Windows 自动化记录可能保存被修改的内容

[#6474](https://github.com/HKUDS/nanobot/issues/6474) 表明用户在原生 Windows 环境中发现持久化文本与输入不一致。由于相关文件用于 cron、trigger 和运行记录，潜在影响包括：

- 文本 diff 出现异常；
- 多次保存后换行持续膨胀；
- 自动化配置解析或比较出现偏差；
- 跨平台恢复同一份状态时结果不一致。

### WebUI 用户希望减少操作与状态歧义

近期 WebUI PR 集中反映了以下诉求：

- 减少 Discord 中间进度通知，让最终答案更突出：[PR #6493](https://github.com/HKUDS/nanobot/pull/6493)
- 更清楚地比较不同模型预设：[PR #6490](https://github.com/HKUDS/nanobot/pull/6490)
- 更容易从任务内容进入详情：[PR #6487](https://github.com/HKUDS/nanobot/pull/6487)
- 跨设备保持未读状态一致：[PR #6481](https://github.com/HKUDS/nanobot/pull/6481)
- 改善重试状态表达：[PR #6491](https://github.com/HKUDS/nanobot/pull/6491)
- 保持文件路径和 Shell 输出原样：[PR #6462](https://github.com/HKUDS/nanobot/pull/6462)、[PR #6173](https://github.com/HKUDS/nanobot/pull/6173)

整体反馈方向是：**减少噪声、保留原始信息、降低操作成本、增强状态一致性**。

---

## 8. 待处理积压

### 长期高优先级 Issue

- **Agent sudo 循环**  
  [#5924](https://github.com/HKUDS/nanobot/issues/5924)  
  自 2026-09-26 创建以来已有多轮讨论和 9 条评论，但截至今日仍未关闭，也未看到明确修复 PR。属于最需要维护者明确处理方案的积压项。

### 长期开放且跨度较大的 PR

- **工具上下文 metadata 重构**  
  [#1515](https://github.com/HKUDS/nanobot/pull/1515)  
  自 2026-03-04 创建至今仍处开放状态，并出现冲突标记。若该能力是后续多平台工具扩展的基础，建议明确维护者态度、拆分方案和关闭条件，避免长期占用审查队列。

- **aimlapi.com Provider 集成**  
  [#5666](https://github.com/HKUDS/nanobot/pull/5666)  
  自 2026-09-04 提交后持续开放。若项目不接受特定商业网关，应公开说明准入标准；若接受，应推进配置、测试、文档和密钥管理检查。

- **会话列表分页**  
  [#6315](https://github.com/HKUDS/nanobot/pull/6315)  
  自 2026-10-19 开放至今，已进入较高质量的验证阶段，但仍未合并。可结合性能或大规模会话场景确认是否达到合入标准。

### 今日待合并积压

今日共有 **19 个 PR 待合并**，其中建议维护者优先关注：

1. [#6468](https://github.com/HKUDS/nanobot/pull/6468)：并行工具取消与收尾竞态  
2. [#6486](https://github.com/HKUDS/nanobot/pull/6486)：复杂 JSON Schema 校验  
3. [#6488](https://github.com/HKUDS/nanobot/pull/6488)：系统 SSL 证书信任  
4. [#6462](https://github.com/HKUDS/nanobot/pull/6462)：文件预览路径解析  
5. [#6493](https://github.com/HKUDS/nanobot/pull/6493)：Discord 静默进度  
6. [#6490](https://github.com/HKUDS/nanobot/pull/6490)：模型预设信息展示  

---

## 项目健康度结论

**健康度：较活跃，稳定性风险中等偏高。**

- **开发活跃度：高。** 24 小时内有 34 个 PR 更新，贡献密集。
- **功能推进：较快。** WebUI、Discord、Provider、会话管理和工具扩展均有明确方向。
- **稳定性修复：覆盖较全面，但尚未全部落地。** 复杂参数校验、并行工具收尾和 SSL 信任已有修复 PR。
- **主要风险：** sudo 循环属于高优先级体验阻塞；Windows 持久化问题影响自动化数据完整性。
- **维护压力：中等。** 19 个待合并 PR、2 个长期开放 PR，以及快速增长的 WebUI 改动面，都可能增加审查与回归风险。
- **建议下一阶段：** 优先合入 [#6468](https://github.com/HKUDS/nanobot/pull/6468) 和 [#6486](https://github.com/HKUDS/nanobot/pull/6486)，为 [#6474](https://github.com/HKUDS/nanobot/issues/6474) 建立修复 PR，并为 [#5924](https://github.com/HKUDS/nanobot/issues/5924) 明确处理方案和目标版本。

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目动态日报

**日期：2026-10-27**  
**数据范围：过去 24 小时**  
**项目：** [sipeed/picoclaw](https://github.com/sipeed/picoclaw)

## 1. 今日速览

过去 24 小时共更新 **4 条 Issues**、**5 条 PR**，其中 **3 条 Issue 活跃或新开、1 条关闭**，**1 条 PR 待合并、4 条已合并或关闭**。  
项目当日无新版本发布，主要推进集中在 **Anthropic Provider 修复、WebSocket 鉴权与请求头标准化、Agent Teams 架构整合**等方向。社区侧新增了 **Web UI 会话文件夹**需求，同时暴露出智能路由单轮空转、Telegram MarkdownV2 格式降级等问题。  
整体活跃度评估为 **中等偏高**：PR 处理节奏较快，但核心 Agent 路由缺乏单轮调用熔断和重复调用保护，可能带来显著成本与稳定性风险；当前唯一待合并 PR 已标记为 stale，合并状态值得关注。

---

## 3. 项目进展

> 今日无新版本发布，因此暂无版本级更新说明、破坏性变更或迁移指南。

### 已关闭或合并的重要 PR

- **PR #1550：合并多个既有修复**
  - 汇总并合并 PR **#1442、#1435、#1434、#1430**。
  - 体现了维护者通过批量整合方式清理历史修复分支、提高主干集成效率。
  - 链接：[PR #1550](https://github.com/sipeed/picoclaw/pull/1550)

- **PR #2363：修复 WebSocket 鉴权并统一请求头大小写**
  - 修复 WebSocket authentication 问题，并标准化 HTTP header casing。
  - 对跨代理、反向代理及不同 WebSocket 客户端的兼容性有直接改善，可降低握手失败和鉴权异常概率。
  - 关联 Issue：[Issue #2354](https://github.com/sipeed/picoclaw/issues/2354)
  - 链接：[PR #2363](https://github.com/sipeed/picoclaw/pull/2363)

- **PR #898：修复 Anthropic Provider 请求错误**
  - 针对 Anthropic 接口返回 **400 Bad Request / Request body format invalid** 的问题提供修复。
  - 修复方向聚焦 Provider 请求体格式及参数兼容性，有助于减少 Anthropic 渠道调用失败。
  - 链接：[PR #898](https://github.com/sipeed/picoclaw/pull/898)

- **PR #976：实现 Agent Teams 多智能体架构**
  - 引入协调 Agent、任务拆解、专用子 Agent，以及基于 goroutine 的并发执行。
  - 提供 `team` 工具，为复杂任务编排、多角色协作和并行执行奠定基础。
  - 该 PR 规模较大，涉及 Agent、Tool 等核心领域，后续仍需关注其是否以其他形式进入主干及配置兼容性。
  - 链接：[PR #976](https://github.com/sipeed/picoclaw/pull/976)

### 进展判断

今日共关闭 **4 条 PR**，覆盖 Provider、Channel、Agent 和 Tool 多个领域，说明维护者仍在持续收敛长期分支。不过，当前没有新版本发布，部分修复是否已经进入可供用户升级的正式版本无法从现有数据确认；应优先核对上述关闭 PR 的实际合并状态及对应提交。

---

## 4. 社区热点

### 1. 智能路由单轮空转，造成千万级 Token 消耗

- **Issue：** [#3445](https://github.com/sipeed/picoclaw/issues/3445)
- **评论数：** 1
- **状态：** OPEN，已标记 stale
- **真实事故数据：**
  - 单轮产生 **222 次 LLM 调用**
  - 持续约 **561 秒**
  - 消耗约 **13,098,285 输入 Token**
  - 输出几乎不变，未形成有效进展，最终由用户手动中止

这是今日最重要且最具成本风险的议题。其核心诉求并非单纯提高模型质量，而是为 Agent turn 增加：

1. 单轮最大调用次数；
2. 重复输出或无进展检测；
3. Token 或费用预算；
4. 路由重判定机制；
5. 熔断与自动降级；
6. 可观测的调用统计及告警。

### 2. Telegram MarkdownV2 转义不完整

- **Issue：** [#3426](https://github.com/sipeed/picoclaw/issues/3426)
- **评论数：** 3，为今日评论最多的 Issue
- **状态：** CLOSED，已标记 stale

用户关注 Telegram 链接标签和引用块中的保留字符未完整转义，导致 Telegram 拒绝整条格式化回复，随后 PicoClaw 回退为纯文本，造成**整条回复格式丢失**。该问题体现的是“局部格式错误导致整段降级”的体验问题。

### 3. Web UI 缺少聊天文件夹

- **Issue：** [#3450](https://github.com/sipeed/picoclaw/issues/3450)
- **创建时间：** 2026-10-27
- **评论数：** 0
- **状态：** OPEN

用户希望 Web UI 不再以单一、按时间排列的平铺列表管理所有会话，而是引入 chat folders 分类整理 session history。该需求直指长期使用场景下的会话管理瓶颈。

### 4. Web UI 会话存储与迁移问题

- **Issue：** [#3449](https://github.com/sipeed/picoclaw/issues/3449)
- **状态：** OPEN
- **信息完整度：** 较低

现有摘要主要保留环境与工具字段，关键复现步骤、错误信息仍不完整，暂时无法判断具体根因和影响范围。需要在补充信息前保持低置信度，不宜将其与已确认故障并列视为高严重度事故。

---

## 5. Bug 与稳定性

### 严重：高风险——智能路由缺少熔断与调用预算

- **问题：** [#3445](https://github.com/sipeed/picoclaw/issues/3445)
- **影响：** 单轮最多观测到 222 次调用，约 9 分钟消耗 1310 万输入 Token，并可能形成无限空转。
- **用户后果：** Token 成本失控、响应延迟不可控、任务无法自行收敛，需要人工中止。
- **已有 fix PR：** **未发现直接关联 PR**
- **建议优先级：** P0 / 最高
- **建议措施：**
  - 为 turn 设置硬性最大迭代次数；
  - 对相同或高度相似输出进行循环检测；
  - 增加单轮 Token、费用及时间预算；
  - 在路由命中轻量模型后允许中途重判；
  - 熔断后返回明确错误或切换备用模型；
  - 在 Web UI/日志中展示迭代次数、Token 与费用。

### 中等：Anthropic Provider 请求体不兼容

- **问题 PR：** [#898](https://github.com/sipeed/picoclaw/pull/898)
- **现象：** Anthropic API 返回 400 Bad Request，报错为 `Request body format invalid`。
- **影响：** 使用 Anthropic Provider 的对话或 Agent 请求可能直接失败。
- **已有 fix PR：** **有，PR #898 已关闭**
- **待确认：** 数据仅显示 PR 已关闭，未明确是“已合并”还是“未合并关闭”，需要核对提交记录，不能直接认定正式版本已修复。

### 中等：WebSocket 鉴权及请求头大小写差异

- **问题 PR：** [#2363](https://github.com/sipeed/picoclaw/pull/2363)
- **影响：** 鉴权失败、握手异常或特定代理环境下连接不稳定。
- **已有 fix PR：** **有，PR #2363 已关闭**
- **关联 Issue：** [#2354](https://github.com/sipeed/picoclaw/issues/2354)
- **待确认：** 同样需核实该关闭 PR 是否已合并进入主干。

### 中低：Telegram MarkdownV2 格式降级

- **问题：** [#3426](https://github.com/sipeed/picoclaw/issues/3426)
- **影响：** 链接标签或引用块中的保留字符可能使整条消息被 Telegram 拒绝，继而回退为纯文本。
- **已有 fix PR：** **未发现直接关联 PR**
- **建议优先级：** P1 / 中等
- **备注：** Issue 虽已关闭，但摘要中没有明确修复提交或关联 PR，需要确认关闭原因。

### 未知：Web UI 相关报告 #3449

- **问题：** [#3449](https://github.com/sipeed/picoclaw/issues/3449)
- **影响：** 暂无法判断。
- **已有 fix PR：** 未发现。
- **建议：** 补充实际错误、复现步骤、版本/commit、Provider 与操作系统信息后再评估严重度。

---

## 6. 功能请求与路线图信号

### Web UI 会话文件夹

- **需求：** [#3450](https://github.com/sipeed/picoclaw/issues/3450)
- **用户场景：** 会话数量持续增加后，当前 300px 高的平铺下拉列表难以检索和整理，用户希望通过 folders 对 launcher session history 分类。
- **可能实现方向：**
  - 前端增加 folder 数据结构与拖拽归类；
  - 后端 `GET /api/sessions` 增加 folder 字段；
  - 支持创建、重命名、删除、移动会话；
  - 提供未归档与按最近更新时间排序；
  - 处理旧会话数据迁移。

**路线图判断：** 需求明确、场景普遍，但尚无对应 PR，也没有迹象表明已进入当前开发队列。可视为下一版本的中优先级候选，但不宜判断为近期必发功能。

### Sendblue iMessage 与 SMS 通道

- **PR：** [#3416](https://github.com/sipeed/picoclaw/pull/3416)
- **能力：**
  - 原生接入 Sendblue；
  - 支持通过 iMessage/SMS 与 PicoClaw Agent 对话；
  - 文档覆盖免费账户注册、手机号/联系人验证、模型前置条件、Secrets 与 webhook 配置。
- **路线图判断：** 与现有多渠道能力方向一致，具有明确产品价值；但 PR 已标记 stale 且仍为 OPEN，短期合并确定性较低。若维护者恢复评审，可能进入后续渠道扩展版本。

### Agent Teams 多 Agent 编排

- **PR：** [#976](https://github.com/sipeed/picoclaw/pull/976)
- **能力：**
  - 协调 Agent 拆解复杂任务；
  - 并发调用专用子 Agent；
  - 通过 `team` 工具编排多 Agent pipeline。
- **路线图判断：** 这是项目从单 Agent 助手向多 Agent 平台演进的重要信号，但架构改动较大，需重点评估并发资源控制、递归调用限制、Token 预算、状态持久化和失败回滚。尤其是 [#3445](https://github.com/sipeed/picoclaw/issues/3445) 暴露的调用失控问题，会放大多 Agent 编排的成本风险。

---

## 7. 用户反馈摘要

### 主要痛点

- **成本与任务失控**
  - 用户在真实使用中出现 222 次无进展调用、1310 万 Token 消耗。
  - 不满意点不是“响应慢”，而是系统没有及时终止无效循环，也没有展示预算告警。
  - 来源：[Issue #3445](https://github.com/sipeed/picoclaw/issues/3445)

- **格式化能力可用但不稳定**
  - Telegram MarkdownV2 在链接和引用块场景下存在转义缺陷。
  - 局部语法问题会导致整条回复降级为纯文本，格式体验明显受损。
  - 来源：[Issue #3426](https://github.com/sipeed/picoclaw/issues/3426)

- **会话管理能力不足**
  - Web UI 将所有聊天放入平铺列表，随着使用时间增长，查找、组织和回顾历史会变得困难。
  - 用户明确提出按文件夹管理会话的需求。
  - 来源：[Issue #3450](https://github.com/sipeed/picoclaw/issues/3450)

### 满意度与积极信号

- WebSocket 鉴权和 header casing 修复方向获得明确工程价值，有助于改善真实部署中的连接可靠性：[PR #2363](https://github.com/sipeed/picoclaw/pull/2363)。
- Sendblue 提案将 iMessage/SMS 接入与账户、验证、密钥和 webhook 配置文档一并提供，体现出较完整的落地准备：[PR #3416](https://github.com/sipeed/picoclaw/pull/3416)。
- 今日 Issue 整体评论和点赞较少，暂无广泛用户点赞形成的高热度共识；当前主要反馈来自少量真实使用事故和功能建议。

---

## 8. 待处理积压

### 优先处理的长期问题

1. **智能路由空转与费用失控**
   - Issue 已存在多日并被标记 stale，但真实事故的 Token 成本与影响都很高。
   - 不应因 stale 标签降低优先级，建议重新激活并制定熔断方案。
   - 链接：[Issue #3445](https://github.com/sipeed/picoclaw/issues/3445)

2. **Sendblue 渠道 PR 长期挂起**
   - PR 自 2026-10-05 创建，10 月 26 日更新时仍为 OPEN，并带有 stale 标记。
   - 需要维护者明确接受、拆分、改造或关闭，避免草案长期占用评审队列。
   - 链接：[PR #3416](https://github.com/sipeed/picoclaw/pull/3416)

3. **Agent Teams 架构 PR 状态需确认**
   - PR #976 创建时间较早，当日状态为 CLOSED，但其摘要显示内容较为完整。
   - 需要明确关闭是否意味着功能已合并、已被替代，或仅放弃该实现方式。
   - 链接：[PR #976](https://github.com/sipeed/picoclaw/pull/976)

4. **历史修复 PR 的最终去向需核对**
   - PR #898、#1550、#2363 均显示 CLOSED，但“关闭”不等同于“已合并”。
   - 应核查对应 commit、目标分支和正式 release tag，避免用户误判 Anthropic、WebSocket 等问题已经通过升级解决。
   - 链接：[PR #898](https://github.com/sipeed/picoclaw/pull/898)、[PR #1550](https://github.com/sipeed/picoclaw/pull/1550)、[PR #2363](https://github.com/sipeed/picoclaw/pull/2363)

5. **信息不完整的 Bug 报告**
   - Issue #3449 缺少明确标题、实际错误和复现信息。
   - 建议维护者主动补充模板信息，避免问题长期停留或被误判。
   - 链接：[Issue #3449](https://github.com/sipeed/picoclaw/issues/3449)

---

## 项目健康度结论

**综合健康度：中等偏积极，但存在明显可靠性风险。**

积极面在于当日 PR 关闭数量较多，Provider、Channel 和多 Agent 架构均有推进；负向面集中在 Agent 执行安全与成本治理上。当前最关键的工作不是继续扩张功能，而是为智能路由和多 Agent 编排补齐**调用上限、循环检测、Token/费用预算、熔断降级及可观测性**。与此同时，应核实历史关闭 PR 是否真正进入发布分支，并尽快处理 stale 的高成本问题，避免社区对核心 Agent 稳定性产生负面预期。

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI 项目动态日报

**统计日期：2026-10-27**  
**数据范围：过去 24 小时**  
**项目健康度：中等偏活跃，但仍有明显积压与治理风险**

## 1. 今日速览

过去 24 小时项目共有 **1 条活跃 Issue 更新、4 条 PR 更新**，其中 **3 条 PR 待合并、1 条 PR 已关闭**，暂无新版本发布。  
今日开发重点集中在 **Cowork 长文本粘贴体验优化、开发环境缓存修复、模型供应商扩展及 Electron 依赖升级**。  
Issue #2936 涉及两个账号被封禁并已积累 **5 条评论**，是当前社区讨论最集中的用户反馈，显示账号风控与申诉机制是近期明显痛点。  
项目保持较高迭代活跃度，但 **3 条待合并 PR 中包含跨月未合并事项**，且部分 PR 已标记 `stale`，反映合并与维护节奏仍有积压。  
综合判断：**功能开发活跃、问题修复有推进，但发布节奏、账号支持和 PR 治理健康度偏弱**。

---

## 2. 版本发布

过去 24 小时 **无新版本发布**，因此暂无对应的更新说明、破坏性变更或迁移事项。

---

## 3. 项目进展

### 已合并/关闭的重要 PR

#### [PR #2945 — fix(dev): stop stale immutable Vite deps from blocking the dev renderer](https://github.com/netease-youdao/LobsterAI/pull/2945)

- **状态：已关闭**
- **今日贡献：** 针对 Electron 开发环境中 Vite 预构建依赖缓存过期，导致渲染进程请求已不存在的 chunk、页面无法挂载的问题进行修复。
- **修复方式：**
  - 为开发服务器增加 `Cache-Control: no-cache`；
  - 每次加载通过 ETag 校验；
  - 引入 `developmentHttpCache.ts` 并补充相关测试。
- **实际意义：** 降低本地开发中因 Electron HTTP 缓存与 Vite hash 复用不一致造成的白屏、加载失败和重复启动异常。
- **评估：** 该 PR 已关闭，但提供的摘要中没有明确写明是“合并后关闭”还是因替代方案关闭；结合数据中的“已合并/关闭”统计，不宜直接认定为已合并。建议维护者在 PR 页面补充关闭原因，避免贡献者误判。

### 今日待合并的重要进展

#### [PR #2946 — feat(cowork): collapse large pastes into pasted-text cards](https://github.com/netease-youdao/LobsterAI/pull/2946)

将输入框中的大段粘贴内容转换为可预览的“粘贴文本”卡片，并支持在提交时以带标签的块嵌入 prompt；同时适配模型、排队消息、导出、历史记录、会话详情、搜索、会话标题、steer 载荷及 subagent tracker/run store 等链路，并补充 Vitest 测试。

这是今日功能贡献中最完整的一项，涉及 Cowork、渲染层和主进程的多个数据流。若完成审查合并，可明显改善长文本输入的可用性、上下文可读性与导出/检索一致性。

#### [PR #2766 — feat(providers): add Requesty as a model provider](https://github.com/netease-youdao/LobsterAI/pull/2766)

新增 Requesty 作为内置模型供应商，采用与 OpenRouter 类似的统一 provider registry、OpenClaw provider descriptor 和图标配置，默认处于关闭状态。

该 PR 自 **2026-09-25** 创建后仍有更新，但已标记 `stale`。其功能方向符合多模型聚合服务的扩展路线，但需尽快确认维护状态，避免长期滞留影响贡献者信心。

#### [PR #2852 — chore(deps-dev): bump the electron group across 1 directory with 2 updates](https://github.com/netease-youdao/LobsterAI/pull/2852)

由 Dependabot 提交，将 Electron 从 **43.5.0 升级至 45.0.0**，并同步更新 electron-builder。该 PR 创建于 **2026-10-13**，跨度较大，且涉及两个主要版本跳跃，存在 API、运行时兼容性及构建链回归风险。

---

## 4. 社区热点

### [Issue #2936 — LobsterAI 账号被误封，未恶意使用却被封禁](https://github.com/netease-youdao/LobsterAI/issues/2936)

- **评论数：5**
- **点赞数：0**
- **状态：开放**
- **创建时间：2026-10-23**
- **最后更新：2026-10-26**

这是过去 24 小时唯一更新 Issue，也是当前评论最多的讨论帖。申诉人称两个账号均被提示封禁或异常，并声明未刷接口、未批量调用；曾将 LobsterAI 账号凭据配置于本地第三方 DSH 插件中调用有道模型服务。

**背后的核心诉求：**

1. 用户希望获得人工复核和明确申诉结果；
2. 账号封禁原因不透明，用户无法判断正常使用、第三方插件调用与自动化风控之间的边界；
3. 第三方插件保存凭据的场景暴露了账号凭据复用、共享和权限隔离问题；
4. 帖子更新和评论较多但尚无点赞，说明热度主要来自少数受影响用户，而非广泛社区共识。

**建议：** 维护者应提供封禁原因分类、人工复核入口、申诉 SLA，并明确禁止或限制在第三方工具中共享主账号凭据，同时避免在公开评论中暴露完整手机号等敏感信息。

### [PR #2946 — Cowork 大段粘贴折叠为文本卡片](https://github.com/netease-youdao/LobsterAI/pull/2946)

- **状态：开放**
- **今日新建并更新**
- **当前未展示评论或点赞数据**

虽然互动数据尚未形成，但从改动规模看，这是今日最值得关注的功能讨论。其需求指向长 prompt、长日志或大段材料输入时的界面拥挤与上下文识别困难。

---

## 5. Bug 与稳定性

### 高优先级：账号不可用/疑似误封

#### [Issue #2936 — 两个 LobsterAI 账号无法登录或使用](https://github.com/netease-youdao/LobsterAI/issues/2936)

- **严重程度：高**
- **影响范围：** 被封禁用户的核心登录与调用能力
- **是否有明确 fix PR：否**
- **当前状态：** 开放，已有 5 条评论

该问题会直接阻断用户使用，属于账号可用性和风控可信度问题。目前没有对应的公开修复 PR；应优先确认是否可通过后台人工解封、规则复核或申诉流程解决。

### 中优先级：开发环境渲染进程无法挂载

#### [PR #2945 — stale immutable Vite deps 阻塞开发渲染器](https://github.com/netease-youdao/LobsterAI/pull/2945)

- **严重程度：中**
- **影响范围：** Electron 开发环境，可能造成页面白屏或无法加载
- **是否有修复 PR：有，即 #2945**
- **当前状态：** 已关闭，具体合并结果需以 PR 页面为准

这是典型的开发回归/缓存一致性问题。修复方向合理，但该变更也可能增加开发服务器 ETag 校验开销，建议后续观察缓存命中率和启动稳定性。

### 中优先级：Electron 大版本升级潜在回归

#### [PR #2852 — Electron 43.5.0 → 45.0.0](https://github.com/netease-youdao/LobsterAI/pull/2852)

- **严重程度：中高（潜在风险）**
- **影响范围：** Electron 运行时、自动更新、窗口生命周期、构建与打包
- **是否有配套修复 PR：当前未见**
- **当前状态：** 开放

这不是已确认的线上 Bug，但跨两个主版本升级可能引入 API 弃用、渲染行为变化、构建兼容性和打包问题。合并前应至少完成启动、窗口、IPC、下载更新、打包安装与 smoke test。

### 低至中优先级：第三方凭据复用引发的风控边界问题

关联 [Issue #2936](https://github.com/netease-youdao/LobsterAI/issues/2936)

- **严重程度：中**
- **是否有明确 fix PR：否**
- **风险点：** 同一账号在多个客户端或第三方插件中出现，可能触发异常调用、并发调用、共享凭据或自动化滥用风控。

目前没有公开 issue/PR 显示已增加凭据隔离、设备风控提示或异常调用诊断能力。

---

## 6. 功能请求与路线图信号

### Cowork 长文本交互优化

[PR #2946](https://github.com/netease-youdao/LobsterAI/pull/2946) 明确反映出 Cowork 正在补齐长 prompt、长消息和批量粘贴场景的交互能力。除视觉折叠外，该 PR 还覆盖搜索、导出、标题生成、队列消息、steer 和历史记录，说明需求重点已经从单一输入框体验延伸至完整会话数据链。

**下一版本可能性：较高。**  
若测试覆盖和跨模块适配通过，这是一项相对聚焦且用户体验价值明确的功能。

### 新模型供应商接入

[PR #2766](https://github.com/netease-youdao/LobsterAI/pull/2766) 表明 provider registry 与 OpenClaw descriptor 正持续扩展，Requesty 等多模型网关预计会继续被纳入。  
**下一版本可能性：中等。** 功能实现已较完整，但 PR 已陈旧，需维护者明确是否仍符合当前 provider 架构。

### Electron 运行时与构建链升级

[PR #2852](https://github.com/netease-youdao/LobsterAI/pull/2852) 体现了持续跟踪上游依赖的维护策略。  
**下一版本可能性：中等，但取决于回归验证。** 若测试体系完善且关键流程通过，可能随常规版本或依赖维护版本合入。

### 账号风控与申诉透明度

[Issue #2936](https://github.com/netease-youdao/LobsterAI/issues/2936) 暴露出另一个路线图信号：项目需要明确用户凭据使用边界、第三方集成规范、封禁判据和申诉机制。  
**下一版本可能性：目前无法判断。** 这更可能需要运营、客服和风控流程配合，而非单纯代码发布。

---

## 7. 用户反馈摘要

### 核心痛点

- **账号被封后无法使用，且自认为没有滥用行为。** 用户明确强调未刷接口、未批量调用，说明其对风控规则的可见性和可解释性存在明显质疑。[Issue #2936](https://github.com/netease-youdao/LobsterAI/issues/2936)
- **第三方插件调用场景容易产生信任冲突。** 用户为本地 DSH 插件配置 LobsterAI 凭据，侧面表明部分用户会将 LobsterAI 作为其他 AI 工具或模型服务的上游。
- **申诉结果与处理时效是主要未满足点。** Issue 在创建后持续更新并积累 5 条评论，表明用户期待得到明确的人工处理结论。
- **长文本输入体验正在被优先改善。** [PR #2946](https://github.com/netease-youdao/LobsterAI/pull/2946) 试图减少大段粘贴内容对输入区的挤占，并让完整内容继续参与模型调用、搜索和导出。

### 满意与不满意

- **不满意：** 账号封禁原因不可见、申诉路径与预期不明确；此外，本地开发者可能受到 Vite/Electron 缓存问题影响。[Issue #2936](https://github.com/netease-youdao/LobsterAI/issues/2936) / [PR #2945](https://github.com/netease-youdao/LobsterAI/pull/2945)
- **潜在满意点：** Cowork 粘贴卡片兼顾“可预览”与“完整保留”，有望改善长内容会话的可读性，同时尽量不破坏现有 prompt、导出和历史数据语义。[PR #2946](https://github.com/netease-youdao/LobsterAI/pull/2946)
- **信息不足：** 当前 Issue 和 PR 均缺少足够的评论、点赞和测试结果反馈，无法据此判断更广泛的社区满意度。

---

## 8. 待处理积压

### 长期开放的 Issue

#### [Issue #2936 — 账号误封申诉](https://github.com/netease-youdao/LobsterAI/issues/2936)

虽然创建时间较新，但涉及用户核心访问权限且已有 5 条评论，应列为高优先级处理事项。建议维护者给出人工复核结论、处理时限以及第三方凭据使用的安全建议。

### 长期未合并的 PR

#### [PR #2766 — 新增 Requesty provider](https://github.com/netease-youdao/LobsterAI/pull/2766)

- 创建于 **2026-09-25**
- 已标记 `stale`
- 涉及 provider registry、OpenClaw descriptor 与图标等共享架构

需检查是否因架构演进产生冲突，并由维护者明确接受、继续推进或关闭。

#### [PR #2852 — Electron 依赖升级](https://github.com/netease-youdao/LobsterAI/pull/2852)

- 创建于 **2026-10-13**
- 跨越 Electron **43.5.0 → 45.0.0**
- 由 Dependabot 自动提交，但仍需人工验证

建议明确测试清单和负责人，避免自动依赖 PR长期占用待处理队列。

### 需要确认关闭结果的 PR

#### [PR #2945 — 修复 Vite/Electron 开发缓存问题](https://github.com/netease-youdao/LobsterAI/pull/2945)

该 PR 虽已关闭，但摘要未说明关闭原因。建议补充最终处置说明：若已通过其他 PR 合入，应明确关联；若未合入，则需确认 stale immutable Vite 缓存问题是否仍可复现。

---

## 今日结论

LobsterAI 今日保持了较好的功能迭代活跃度，Cowork 长文本交互和开发环境稳定性均有实质改进或修复方案；同时，新 provider 与 Electron 升级体现了持续扩展和依赖维护意图。当前主要风险不在于缺少开发活动，而在于 **PR 合并积压、发布节奏缺失、账号风控透明度不足，以及自动化依赖升级的兼容性验证压力**。建议下一阶段优先完成 [PR #2946](https://github.com/netease-youdao/LobsterAI/pull/2946) 的审查、明确 [PR #2945](https://github.com/netease-youdao/LobsterAI/pull/2945) 的关闭结果、处理 [Issue #2936](https://github.com/netease-youdao/LobsterAI/issues/2936) 的账号申诉，并清理 [PR #2766](https://github.com/netease-youdao/LobsterAI/pull/2766) 与 [PR #2852](https://github.com/netease-youdao/LobsterAI/pull/2852) 的陈旧状态。

</details>

<details>
<summary><strong>QwenPaw</strong> — <a href="https://github.com/agentscope-ai/QwenPaw">agentscope-ai/QwenPaw</a></summary>

# QwenPaw 项目动态日报

**日期：2026-10-27**  
**仓库：** [agentscope-ai/QwenPaw](https://github.com/agentscope-ai/QwenPaw)

## 1. 今日速览

- 过去 24 小时共更新 **18 个 Issue** 和 **48 个 PR**，其中 **13 个 Issue 新开或活跃、5 个已关闭**，**34 个 PR 待合并、14 个已合并或关闭**，开发活跃度较高。
- 今日无新版本发布，主要工作集中在 **稳定性修复、桌面端平台补齐、模型供应商接入、插件与渠道架构重构**。
- 多个高优先级问题已出现对应修复 PR，包括 MCP 协议回退、邮箱认证、流式请求卡死、文件编辑换行符损坏等，说明问题响应速度较好，但仍有 **34 个 PR 等待合并**，维护压力上升。
- 今日暴露的问题主要涉及 **上下文压缩、流式调用、ReMe 记忆组件、线程资源泄漏及跨平台兼容性**，部分问题会直接导致会话中断或任务无法完成。
- 综合判断：项目处于 **高活跃、高并发演进期**；功能面扩张明显，但稳定性、兼容性和发布回归风险同步上升，建议优先处理影响主链路可用性的修复。

---

## 3. 项目进展

> 今日无新版本发布，因此不单列“版本发布”章节。

### 已合并或关闭的重要 PR

根据当前数据，48 个 PR 中有 **14 个已合并或关闭**。由于列表只完整展示前 20 个 PR，且未提供其余 PR 的标题，以下归纳仅基于已展示条目和已关闭 Issue，不对未展示 PR 的具体合并内容作推断。

#### 1. Creator 2.0.3 发布准备完成，但对应 PR 已关闭

- **PR：** [#8357 feat(creator): release 2.0.3 with skills, narration, scratch and script import](https://github.com/agentscope-ai/QwenPaw/pull/8357)
- **状态：** CLOSED
- **进展：** 面向 QwenPaw Creator 2.0.3，引入 skills、narration、scratch 和脚本导入等能力。
- **判断：** PR 已关闭，但仓库当天没有生成正式 Release，因此用户端暂不能确认已获得完整更新包。
- **关注点：** 发布分支、构建产物和正式版本标签之间可能需要进一步对齐。

#### 2. 渠道插件化与子进程隔离持续推进

- **PR：** [#8187 feat(channels): extract channels into plugins with subprocess isolation](https://github.com/agentscope-ai/QwenPaw/pull/8187)
- **状态：** OPEN
- **进展方向：**
  - 将除 Console 外的官方渠道迁移为插件；
  - 通过 `channel.json` 静态描述符发现渠道，减少宿主进程 SDK 导入；
  - 使用子进程隔离渠道故障，避免单个渠道异常拖垮主进程。
- **项目意义：** 这是架构层面的重要调整，有助于改善扩展性、故障隔离和第三方渠道接入能力。
- **风险：** 改动范围达到 XXXL，合并前需要重点验证消息收发、认证、进程重启和配置兼容性。

#### 3. 本地 Whisper 能力插件化

- **PR：** [#8431 feat(local whisper): Convert local Whisper into an SDK plugin with framework-managed lifecycle](https://github.com/agentscope-ai/QwenPaw/pull/8431)
- **状态：** OPEN
- **进展方向：** 将本地 Whisper 转换为 SDK 插件，由框架统一管理生命周期。
- **项目意义：** 进一步推动语音能力模块化，降低本地模型与核心运行时之间的耦合。

#### 4. ReMeLight 记忆写入模型解耦

- **PR：** [#7719 feat(memory): allow a separate model for ReMeLight memory writing](https://github.com/agentscope-ai/QwenPaw/pull/7719)
- **状态：** OPEN，Under Review
- **进展方向：** 允许 ReMeLight 记忆写入使用独立模型，而不是强制复用聊天主模型。
- **项目意义：** 可为 `auto_memory`、`auto_dream`、`daily_paper`、`auto_fin` 等后台任务降低推理成本并独立调优。
- **风险：** 需要增加模型兼容性和输出结构校验，避免后台记忆任务因模型能力差异产生新的失败模式。

#### 5. Linux 桌面端支持进入实现阶段

- **PR：** [#8444 feat(desktop): add Linux deb and AppImage packaging to the Tauri build](https://github.com/agentscope-ai/QwenPaw/pull/8444)
- **状态：** OPEN
- **进展方向：** 在 Tauri 构建链中加入 Linux `deb` 和 `AppImage` 打包。
- **关联需求：** [#8442 Linux desktop parity](https://github.com/agentscope-ai/QwenPaw/issues/8442)
- **项目意义：** 补齐 Linux 桌面发行能力，推动 Linux 与 Windows/macOS 的体验对齐。
- **后续范围：** Computer Use 的 Wayland portal 支持、Chrome Native Messaging 等桌面能力仍需继续实现和验证。

#### 6. 非 OpenAI 模型目录和供应商配置刷新

- **PR：** [#8447 feat(providers): refresh non-OpenAI model catalog and provider configuration](https://github.com/agentscope-ai/QwenPaw/pull/8447)
- **状态：** OPEN
- **进展方向：** 更新非 OpenAI 供应商的模型目录及配置。
- **项目意义：** 改善多模型生态兼容性和供应商接入时效性。

#### 7. ChatGPT 订阅账号登录进入开发阶段

- **PR：** [#8437 feat(providers): add local ChatGPT subscription sign-in](https://github.com/agentscope-ai/QwenPaw/pull/8437)
- **状态：** OPEN
- **进展方向：**
  - 增加 ChatGPT Subscription 登录方式；
  - 使用回环 OAuth 与 PKCE；
  - 支持加密账号持久化、令牌刷新和账号切换；
  - 使用账号发现的模型，减少对 Platform API Key 的依赖。
- **关联需求：** [#500 支持 OpenAI Codex 和 Claude OAuth 登录](https://github.com/agentscope-ai/QwenPaw/issues/500)
- **判断：** OpenAI/ChatGPT 方向已有明确实现信号；Claude OAuth 尚无对应 PR。

### 总体推进程度

今天项目主要在推进四条主线：

1. **平台覆盖：** Linux `deb`、AppImage 与桌面能力补齐；
2. **模型接入：** ChatGPT 订阅登录、非 OpenAI 模型目录更新；
3. **架构解耦：** 渠道插件化、子进程隔离、Whisper SDK 插件化；
4. **记忆体系：** ReMeLight 独立写入模型。

功能覆盖面继续扩大，但多项超大 PR 尚未完成合并，且主链路稳定性问题仍较集中。

---

## 4. 社区热点

### 4.1 OpenAI Responses API 流式空响应问题

- **Issue：** [#8162 OpenAI Responses API 的流式事件-空响应问题](https://github.com/agentscope-ai/QwenPaw/issues/8162)
- **状态：** CLOSED
- **评论：** 8
- **热度判断：** 今日展示条目中评论最多。
- **用户诉求：** 旧版流式解析只处理增量事件，升级后可能在会话运行 1–3 步时无提示中断，且没有明确错误反馈。
- **背后诉求：** 用户期待模型流式调用具备完整事件覆盖、明确错误日志，以及升级前后的行为连续性。

### 4.2 插件导入失败导致全局服务长时间不可用

- **Issue：** [#4946 Plugin import failure blocks startup for 6+ minutes](https://github.com/agentscope-ai/QwenPaw/issues/4946)
- **状态：** CLOSED
- **评论：** 2
- **热度判断：** 虽评论数不高，但属于影响面较大的稳定性问题。
- **用户诉求：** 某个插件缺少第三方依赖并触发 `ImportError` 后，不应阻塞 QwenPaw 启动六分钟以上，更不应让飞书、QQ 等全部渠道静默丢消息。
- **背后诉求：** 插件故障必须隔离，核心服务应具备快速失败、降级和可观测性。

### 4.3 Cron 任务在宽限窗口内重复调度

- **Issue：** [#7476 cron 任务在 misfire_grace 窗口内被重复调度](https://github.com/agentscope-ai/QwenPaw/issues/7476)
- **状态：** CLOSED
- **评论：** 5
- **热度判断：** 今日评论较多的生产环境稳定性问题。
- **用户诉求：** 每日备份任务被执行两次并生成重复文件，说明调度器的去重与幂等语义存在缺口。
- **背后诉求：** Cron 调度不仅要“按时触发”，还要保证同一任务在恢复、misfire 或多实例环境下只执行一次。

### 4.4 邮箱旧配置升级后认证失败

- **Issue：** [#8425 邮箱 name 字段含完整地址时导致 AUTHENTICATIONFAILED](https://github.com/agentscope-ai/QwenPaw/issues/8425)
- **状态：** CLOSED
- **评论：** 3，👍 1
- **热度判断：** 今日新开且已有明确修复 PR 的高时效问题。
- **用户诉求：** 老配置中 `name="user@qq.com"` 升级后被拼接成 `user@qq.com@qq.com`，造成 IMAP 登录失败。
- **背后诉求：** 配置升级需要兼容历史格式，并对明显已包含 `@` 的值做规范化处理。

### 4.5 模型上下文超限与压缩失败

- **Issue：** [#8312 上下文控制失效，导致任务中断](https://github.com/agentscope-ai/QwenPaw/issues/8312)
- **状态：** OPEN
- **评论：** 3
- **热度判断：** 直接影响智能体长会话主链路。
- **用户诉求：** 上下文压缩无法将请求压到模型窗口以内时，应主动减少工具集、输出清晰提示或切换模型，而不是直接中断任务。
- **关联问题：**
  - [#8417 上下文压缩摘要固定返回 400](https://github.com/agentscope-ai/QwenPaw/issues/8417)
  - [#8435 LLM 流式请求无限挂起](https://github.com/agentscope-ai/QwenPaw/issues/8435)

### 4.6 重点 PR 观察

以下 PR 虽在数据中评论数未明确，但代码体量较大、覆盖面较广，应作为社区重点审查对象：

- [#8431 Local Whisper SDK 插件化](https://github.com/agentscope-ai/QwenPaw/pull/8431)
- [#8450 修复发布构建和跨平台测试失败](https://github.com/agentscope-ai/QwenPaw/pull/8450)
- [#8187 渠道插件化和子进程隔离](https://github.com/agentscope-ai/QwenPaw/pull/8187)
- [#7719 ReMeLight 独立记忆写入模型](https://github.com/agentscope-ai/QwenPaw/pull/7719)
- [#8447 非 OpenAI 模型目录刷新](https://github.com/agentscope-ai/QwenPaw/pull/8447)
- [#7874 PawApp SDK 与控制面重构](https://github.com/agentscope-ai/QwenPaw/pull/7874)
- [#8034 限制单次请求的内联媒体总量](https://github.com/agentscope-ai/QwenPaw/pull/8034)

---

## 5. Bug 与稳定性

### 严重级别：S1 / 阻断主链路

#### 1. LLM 流式调用无限挂起，限流信号量可能永不释放

- **Issue：** [#8435 LLM stream hangs indefinitely with zero logs](https://github.com/agentscope-ai/QwenPaw/issues/8435)
- **状态：** OPEN
- **影响：** 多轮工具调用期间，下一次 LLM 请求可能无日志永久等待；watchdog 也未触发。
- **风险：** 会话假死、资源无法回收、服务实例不可用。
- **Fix PR：** 展示列表中未见明确对应 PR。
- **建议：** 优先检查信号量获取、取消传播、watchdog 生命周期及异常释放路径。

#### 2. 上下文压缩失败导致任务中断

- **Issue：** [#8312 上下文控制失效，导致任务中断](https://github.com/agentscope-ai/QwenPaw/issues/8312)
- **状态：** OPEN
- **影响：** 请求大小超过模型窗口，压缩后仍无法满足限制，任务直接失败。
- **风险：** 长会话、自动任务和工具调用场景稳定性显著下降。
- **Fix PR：** 展示列表中未见明确对应 PR。
- **建议：** 增加压缩后的二次校验、工具裁剪和明确的超限错误分类。

#### 3. OpenAI Responses API 流式事件处理不完整

- **Issue：** [#8162 OpenAI Responses API 的流式事件-空响应问题](https://github.com/agentscope-ai/QwenPaw/issues/8162)
- **状态：** CLOSED
- **影响：** 会话运行数步后无提示中断。
- **Fix PR：** 展示列表中未见明确对应 PR；Issue 已关闭，表明问题可能已由其他提交处理。
- **建议：** 补充完整事件类型与空响应场景回归测试。

### 严重级别：S2 / 核心功能不可用或配置失效

#### 4. ReMe embedding 重建索引静默漏掉超限 CJK 分块

- **Issue：** [#8040 embedding reindex incomplete](https://github.com/agentscope-ai/QwenPaw/issues/8040)
- **状态：** OPEN
- **影响：** 实际出现 `20 chunks failed`，但批处理日志显示 `processed=126/126`；包含 CJK 的单项超限可能拖垮整批。
- **风险：** 索引不完整且缺乏可信统计，可能导致记忆检索静默降级。
- **Fix PR：** 展示列表中未见明确对应 PR。
- **建议：** 单项失败隔离、显式失败计数，并提供失败 chunk 的诊断信息。

#### 5. 上下文压缩摘要请求固定返回 400

- **Issue：** [#8417 上下文压缩摘要固定 400](https://github.com/agentscope-ai/QwenPaw/issues/8417)
- **状态：** OPEN
- **影响：** 火山引擎 AgentPlan 的 `glm-5.3-flash` 不支持 `thinking.type=disabled`，兼容层又同时下发另一套关闭思考参数。
- **风险：** 手动 `/compact` 和自动压缩都可能长期失败。
- **Fix PR：** 展示列表中未见明确对应 PR。
- **建议：** 在供应商能力矩阵中区分“禁止思考”“忽略思考”和参数互斥关系。

#### 6. ReMe reranker 空 API Key 被视为已启用

- **Issue：** [#8276 ReMe reranker enablement accepts an empty api_key](https://github.com/agentscope-ai/QwenPaw/issues/8276)
- **状态：** OPEN
- **影响：** 配置校验将空凭证视为有效，最终只呈现模糊的 “unexpected error”。
- **风险：** 排障困难，记忆重排功能在运行期才暴露失败。
- **Fix PR：** 展示列表中未见明确对应 PR。
- **建议：** 启用时校验凭证、模型名和供应商参数，并返回字段级错误。

#### 7. MCP 新协议探测失败后无法回退旧协议

- **Issue：** [#8424 server/discover 返回 404 + -32601 后无法 legacy 回退](https://github.com/agentscope-ai/QwenPaw/issues/8424)
- **状态：** OPEN
- **影响：** 旧版 MCP 服务对未知方法返回 `404 / -32601` 时，客户端直接硬失败。
- **风险：** 旧 MCP 服务无法接入。
- **Fix PR：** **有**，[#8445 fix(mcp): fall back when discover returns HTTP 404 and -32601](https://github.com/agentscope-ai/QwenPaw/pull/8445)，待合并。

#### 8. 邮箱完整地址配置导致认证失败

- **Issue：** [#8425 邮箱完整地址被重复拼接域名](https://github.com/agentscope-ai/QwenPaw/issues/8425)
- **状态：** CLOSED
- **影响：** 老用户升级后 IMAP 登录失败。
- **Fix PR：** **有**，[#8438 fix(mail): do not append domain when account name is already a full address](https://github.com/agentscope-ai/QwenPaw/pull/8438)，待合并。

#### 9. Daily Paper 输出截断后整批失败

- **Issue：** [#8123 Daily Paper fails when model digest output is truncated](https://github.com/agentscope-ai/QwenPaw/issues/8123)
- **状态：** OPEN
- **影响：** 模型摘要被截断后触发 `ToolJSONDecodeError`，没有逐论文重试，整个任务标记失败。
- **风险：** 少量单篇异常拖累整批自动任务。
- **Fix PR：** 展示列表中未见明确对应 PR。
- **建议：** 增加逐论文重试、增量落盘和部分成功状态。

### 严重级别：S3 / 特定环境或边缘场景故障

#### 10. 长期运行的 ReMe watcher 耗尽 AnyIO 线程限制

- **Issue：** [#8279 Long-lived ReMe watchers exhaust AnyIO's default thread limiter](https://github.com/agentscope-ai/QwenPaw/issues/8279)
- **状态：** OPEN
- **影响：** 长期部署后同步 HTTP 端点停滞。
- **Fix PR：** 展示列表中未见明确对应 PR。
- **建议：** 为 watcher 生命周期设置上限，复用异步客户端或调整线程池隔离策略。

#### 11. `edit_file` 定向编辑时把 CRLF 全部转换为 LF

- **Issue：** [#8415 edit_file converts all CRLF line endings to LF](https://github.com/agentscope-ai/QwenPaw/issues/8415)
- **状态：** OPEN
- **影响：** Windows 风格文件发生大范围、隐式的换行符变更，且非 UTF-8 文件可能发生字符损坏。
- **Fix PR：** 展示列表中未见明确对应 PR。
- **建议：** 二进制安全读取、保留原始换行符，并增加非 UTF-8 编码保护。

#### 12. `cancellable_wait` 外层取消后工具任务仍继续运行

- **Issue：** [#8440 cancellable_wait leaves owned tool task running after outer cancellation](https://github.com/agentscope-ai/QwenPaw/issues/8440)
- **状态：** OPEN
- **影响：** 用户取消等待后，内部工具任务可能继续占用资源或产生副作用。
- **风险：** 取消语义不可靠，尤其影响有写入或外部调用副作用的工具。
- **Fix PR：** 展示列表中未见明确对应 PR。
- **建议：** 明确任务所有权、传播取消信号，并在退出时等待或终止子任务。

#### 13. 插件导入失败阻塞启动并导致所有渠道无响应

- **Issue：** [#4946 Plugin import failure blocks startup for 6+ minutes](https://github.com/agentscope-ai/QwenPaw/issues/4946)
- **状态：** CLOSED
- **影响：** 插件缺少依赖时全局不可用，消息静默丢失。
- **Fix PR：** 展示列表中未见明确对应 PR；Issue 已关闭。
- **建议：** 验证是否已采用插件级异常隔离和快速失败策略。

### 稳定性趋势判断

今日 Bug 集中在四个共同根因：

1. **错误被吞掉或缺少结构化反馈；**
2. **取消、超时和资源释放路径不完整；**
3. **供应商能力差异没有统一建模；**
4. **单项失败扩散为批次、插件或全局服务失败。**

项目目前“修复响应快于问题暴露速度”，但仍需要从逐点补丁升级为系统性的超时、取消、错误分类和故障隔离机制。

---

## 6. 功能请求与路线图信号

### 6.1 Linux 桌面端完整对齐

- **需求：** [#8442 Linux desktop parity](https://github.com/agentscope-ai/QwenPaw/issues/8442)
- **已有 PR：** [#8444 Linux deb 和 AppImage 打包](https://github.com/agentscope-ai/QwenPaw/pull/8444)
- **需求范围：**
  - `deb` 与 `AppImage`；
  - 内置 Python、PyInstaller 后端和 Node Runtime；
  - Wayland portal Computer Use；
  - Chrome Native Messaging。
- **下一版本可能性：** **高**。打包部分已有对应 PR；Computer Use 和 Native Messaging 是否进入同一版本仍取决于 PR 范围和测试进度。

### 6.2 ChatGPT 订阅与 OAuth 登录

- **需求：** [#500 支持 OpenAI Codex 和 Claude 的 OAuth 登录](https://github.com/agentscope-ai/QwenPaw/issues/500)
- **已有 PR：** [#8437 add local ChatGPT subscription sign-in](https://github.com/agentscope-ai/QwenPaw/pull/8437)
- **需求范围：**
  - 支持 OpenAI/Codex 订阅账号；
  - 支持 Claude 订阅账号；
  - 无需用户手工填写 Base URL 和 API Key。
- **下一版本可能性：**
  - ChatGPT 订阅登录：**高**；
  - Claude OAuth：**中等或偏低**，当前未见对应实现 PR。
- **注意：** OAuth、令牌加密、刷新、账号切换和多设备授权均涉及安全设计，合并前需要更严格的安全审查。

### 6.3 Cron 任务独立配置 `thinking_level`

- **需求：** [#8439 support thinking_level in JobRuntimeSpec](https://github.com/agentscope-ai/QwenPaw/issues/8439)
- **原 Issue：** [#8429](https://github.com/agentscope-ai/QwenPaw/issues/8429) 已关闭。
- **目标：** 让纯数据采集、报告生成、格式转换类任务默认关闭深度推理，以减少 token 消耗。
- **下一版本可能性：** **高**。需求已转化为独立功能 Issue，且与现有 cron 配置体系直接相关。

### 6.4 Skills 支持嵌套分类目录

- **PR：** [#8178 support nested (categorised) skill directories](https://github.com/agentscope-ai/QwenPaw/pull/8178)
- **状态：** OPEN，Under Review
- **需求方向：** 支持 `<root>/<category>/<skill>/SKILL.md`，同时保持扁平目录兼容。
- **下一版本可能性：** **中高**。改动明确、兼容策略清晰，评审通过后适合进入近期版本。

### 6.5 ReMeLight 记忆任务使用独立模型

- **PR：** [#7719 allow a separate model for ReMeLight memory writing](https://github.com/agentscope-ai/QwenPaw/pull/7719)
- **状态：** OPEN，Under Review
- **需求方向：** 后台记忆任务与聊天模型解耦，支持成本优化。
- **下一版本可能性：** **中高**。用户价值明确，但需要确认所有 ReMeLight 工作流的模型能力兼容。

### 6.6 本地 Whisper 作为 SDK 插件

- **PR：** [#8431 Convert local Whisper into an SDK plugin](https://github.com/agentscope-ai/QwenPaw/pull/8431)
- **状态：** OPEN
- **需求方向：** 统一插件生命周期，降低核心运行时耦合。
- **下一版本可能性：** **中等**。架构方向合理，但本地模型下载、设备兼容、生命周期和安装体积需要验证。

---

## 7. 用户反馈摘要

### 真实使用场景

1. **长期运行的生产服务**
   - 用户将 QwenPaw 部署在 Docker 中持续运行，并使用 Feishu、QQ 等渠道。
   - 反馈集中在 watcher 线程耗尽、插件导入阻塞启动和渠道静默丢消息。
   - 痛点不是单次功能不可用，而是服务上线后逐渐失去响应。

2. **Windows 桌面端升级**
   - 用户从 2.2.2.b4 前后版本升级后，遇到 Responses API 流式调用中断。
   - 说明升级回归对桌面用户影响明显，版本兼容测试需要覆盖完整事件流。

3. **Cron 自动任务**
   - 用户使用后台 shell 脚本执行每日备份，并等待任务完成。
   - 反馈集中于重复执行和重复文件，反映调度幂等性不足。

4. **邮箱自动化**
   - 用户已有可工作的邮箱配置，升级后因地址拼接规则变化而无法登录。
   - 用户期望升级保持旧配置兼容。

5. **长会话与大型工具调用**
   - 用户触发模型上下文超限、自动压缩和手动 `/compact`。
   - 现有兜底插件能保住旧摘要和数据，但压缩无法成功，反映“保数据”已实现，“完成压缩”仍有缺口。

6. **跨平台文件编辑**
   - 用户在 Windows 风格仓库中进行定向编辑，却发现整个文件由 CRLF 变为 LF，且可能丢失非 UTF-8 字符。
   - 这类小问题容易被忽略，但可能造成大范围无意义 diff。

### 满意与积极信号

- 多个用户问题在短时间内获得明确修复 PR，例如邮箱兼容和 MCP 回退，表明社区反馈能直接进入开发流程。
- [#500](https://github.com/agentscope-ai/QwenPaw/issues/500) 获得 **4 个赞**，说明 OAuth 订阅登录是用户期待度较高的能力。
- 功能诉求集中在成本控制、Linux 支持、旧配置兼容和自动任务稳定性，方向总体一致。

### 主要不满意点

- 升级后旧配置或旧行为发生变化；
- 长任务缺少可靠超时、取消和恢复；
- 错误信息过于笼统，例如 “unexpected error”；
- 批处理日志与真实结果不一致；
- 单项失败扩散为整批、插件级甚至全局故障；
- 部分任务“数据保住了，但功能始终无法完成”，修复仍停留在兜底而非根治。

---

## 8. 待处理积压

### 8.1 长期存在且影响面较大的 Issue

#### 1. OAuth 登录支持仍未完整落地

- **Issue：** [#500 支持 OpenAI Codex 和 Claude OAuth 登录](https://github.com/agentscope-ai/QwenPaw/issues/500)
- **状态：** OPEN
- **时间跨度：** 自 2026-03-03 起持续存在。
- **积压风险：** 用户已购买 OpenAI/Claude 订阅，却仍无法直接使用，核心诉求长期未闭环。
- **当前进展：** ChatGPT 方向已有 [#8437](https://github.com/agentscope-ai/QwenPaw/pull/8437)，但 Claude 方向仍缺实现。

#### 2. 插件故障拖垮全局服务

- **Issue：** [#4946 Plugin import failure blocks startup for 6+ minutes](https://github.com/agentscope-ai/QwenPaw/issues/4946)
- **状态：** CLOSED
- **时间跨度：** 自 2026-06-03 起。
- **关注建议：** 即使关闭，也建议补充回归测试，确认所有渠道在单插件损坏时仍可启动和响应。

#### 3. ReMe embedding 索引静默失败

- **Issue：** [#8040 embedding reindex incomplete](https://github.com/agentscope-ai/QwenPaw/issues/8040)
- **状态：** OPEN
- **时间跨度：** 自 2026-09-30 起。
- **关注建议：** 这是 #5950 的复发，说明此前修复未覆盖 CJK、单项 token 超限和批处理失败传播机制。

#### 4. Cron 重复调度问题

- **Issue：** [#7476 cron 任务在 misfire_grace 窗口内被重复调度](https://github.com/agentscope-ai/QwenPaw/issues/7476)
- **状态：** CLOSED
- **时间跨度：** 自 2026-09-01 起。
- **关注建议：** 建议补充多实例、进程重启和 misfire 恢复场景测试，避免重复执行在更复杂环境中回归。

### 8.2 等待评审或合并的大体量 PR

#### 1. 渠道插件化和子进程隔离

- **PR：** [#8187](https://github.com/agentscope-ai/QwenPaw/pull/8187)
- **风险：** 涉及所有官方渠道，属于高影响架构变更。
- **建议：** 优先安排专项评审，重点检查渠道启动顺序、认证、崩溃恢复、日志和跨平台行为。

#### 2. PawApp SDK 与控制面重构

- **PR：** [#7874 redesign the SDK and app control plane](https://github.com/agentscope-ai/QwenPaw/pull/7874)
- **风险：** 涉及任务身份、重试、权限、安装、问答和审批等核心契约。
- **建议：** 明确稳定 API、迁移指南和向后兼容策略。

#### 3. ReMeLight 独立模型写入

- **PR：** [#7719](https://github.com/agentscope-ai/QwenPaw/pull/7719)
- **风险：** 模型切换可能影响结构化输出质量和记忆写入稳定性。
- **建议：** 增加质量对比、成本指标和失败回退机制。

#### 4. 内联媒体请求级上限

- **PR：** [#8034 bound inline media per request, not just per file](https://github.com/agentscope-ai/QwenPaw/pull/8034)
- **风险：** 改变请求组装行为，可能影响此前允许累积多图的会话。
- **建议：** 在合并说明中明确限制单位、触发行为和用户提示。

#### 5. Skills 嵌套目录

- **PR：** [#8178](https://github.com/agentscope-ai/QwenPaw/pull/8178)
- **风险：** 技能发现、身份匹配及路径解析可能存在兼容问题。
- **建议：** 确保扁平目录与嵌套目录混用时无重名、漏载或循环扫描。

#### 6. 发布构建与跨平台测试修复

- **PR：** [#8450 fix release builds and cross-platform test failures](https://github.com/agentscope-ai/QwenPaw/pull/8450)
- **风险：** 直接关联发布稳定性。
- **建议：** 在正式发版前优先合并，并验证 Windows、macOS、Linux 构建矩阵。

---

## 今日健康度结论

**项目健康度：中高，但稳定性风险正在快速累积。**

- **优势：** Issue 与 PR 响应活跃，多个关键问题已有对应修复；模型接入、Linux 支持、插件化和成本优化路线清晰。
- **主要风险：** 34 个待合并 PR 中包含多项超大架构改动，同时上下文、流式调用、ReMe 和取消机制仍存在影响主链路的问题。
- **维护建议：**
  1. 将流式挂起、上下文压缩、embedding 静默失败列为最高优先级；
  2. 优先合并 [#8445](https://github.com/agentscope-ai/QwenPaw/pull/8445)、[#8438](https://github.com/agentscope-ai/QwenPaw/pull/8438)、[#8450](https://github.com/agentscope-ai/QwenPaw/pull/8450) 等直接改善稳定性和发布的修复；
  3. 对 [#8187](https://github.com/agentscope-ai/QwenPaw/pull/8187)、[#7874](https://github.com/agentscope-ai/QwenPaw/pull/7874) 等大改安排专项评审；
  4. 在下个版本前集中补齐超时、取消、资源释放、错误分类和插件隔离回归测试。

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/NousResearch/hermes-agent">NousResearch/hermes-agent</a></summary>

# Hermes Agent 项目动态日报

**日期：2026-10-27**  
**数据范围：过去 24 小时 GitHub 更新**  
**总体判断：活跃度高，但工程债务与技术债明显升温。**

---

## 1. 今日速览

过去 24 小时共更新 **50 条 Issue** 和 **50 条 PR**，其中 Issue 新开或持续活跃 **47 条**、关闭 **3 条**；PR 待合并 **44 条**、已合并或关闭 **6 条**。社区讨论最集中的是 **Unified Gateway 合并后的遗留问题**，以及 Discord `admission_conflict`、跨客户端会话恢复、会话删除失败等网关稳定性问题。

当前没有新版本发布，功能开发继续集中在 **Dashboard 中文化、模型路由、插件能力、Desktop 体验和会话生命周期管理**。PR 积压明显高于当日合并吞吐，且多个高优先级稳定性修复仍处于待合并状态，项目整体推进活跃，但发布节奏、问题收敛速度和统一网关迁移后的稳定性需要重点关注。

---

## 3. 项目进展

过去 24 小时有 **6 条 PR 已合并或关闭**，另有 **44 条 PR 仍待合并**。由于提供的数据未列出已合并 PR 的具体编号与标题，以下重点归纳今日仍在推进、且与当前缺陷直接相关的已开放修复；这些修复可视为下一轮版本或主干收敛的重点候选。

### 2.1 网关与会话生命周期

- **P1：统一长会话中的 provider 故障分类**  
  [#134274](https://github.com/NousResearch/hermes-agent/pull/134274) 修复在长会话中把内容策略、请求格式类 400 错误误判为上下文溢出的问题，并统一异常回复路径的判定。该 PR 直接关联消息可靠投递与会话压缩风险，值得优先合入。

- **修复网关重启后丢失 turn 导致会话永久暂停**  
  [#140175](https://github.com/NousResearch/hermes-agent/pull/140175) 为经典 CLI 增加暂停会话恢复路径：遇到未知状态的遗留 turn 时拒绝新 prompt，并允许 `/discard` 清理后继续运行。

- **恢复网关重连后的 reasoning 显示**  
  [#140503](https://github.com/NousResearch/hermes-agent/pull/140503) 修复 CLI 与网关重新连接后 reasoning 展示偏好丢失的问题。

- **网关 socket 断开不再终止 spinner 线程**  
  [#144050](https://github.com/NousResearch/hermes-agent/pull/144050) 避免一次网关断连导致经典 CLI 的 spinner 和实时工作区在余下会话中失效。

- **修复 Bot Relay 在 `/reset` 后指向错误 lineage tip**  
  [#145371](https://github.com/NousResearch/hermes-agent/pull/145371) 将会话发现从“创建时 ID”改为重置后的 lineage tip，与相关 reset lineage 缺陷相互对应。

### 2.2 Agent、模型与工具链

- **将 system prefill 合并进主 system prompt**  
  [#31734](https://github.com/NousResearch/hermes-agent/pull/31734) 减少严格 OpenAI-compatible provider 因收到多个 system 消息而拒绝请求的情况。

- **向 Codex Responses 请求传递辅助 JSON Schema 约束**  
  [#145374](https://github.com/NousResearch/hermes-agent/pull/145374) 修复调用方要求严格 JSON 输出、实际请求却未携带 `json_schema` 的问题。

- **修复 `/compress here N` 边界行为**  
  [#145020](https://github.com/NousResearch/hermes-agent/pull/145020) 确保最近 N 轮按承诺原样保留，避免默认保护窗口与显式边界发生冲突。

- **DeepSeek Responses replay 保留 reasoning 文本**  
  [#133799](https://github.com/NousResearch/hermes-agent/pull/133799) 防止多轮续聊因加密 reasoning 内容缺少非空 `reasoning_text` 而返回 HTTP 400。

- **OpenCode Go 遇到模型级 429 时保留密钥**  
  [#140713](https://github.com/NousResearch/hermes-agent/pull/140713) 区分计划额度耗尽与特定模型不可用，避免错误地将整个 API key 冷却或切换。

- **Gateway 缓存会话应实时应用 memory 配置变更**  
  [#145373](https://github.com/NousResearch/hermes-agent/pull/145373) 修复修改 `memory_char_limit` 后缓存 Agent 仍沿用旧限制的问题。

- **hard interrupt 后仍可能派发已授权 sibling tool**  
  [#145255](https://github.com/NousResearch/hermes-agent/issues/145255) 报告 `pre_tool_call` 中断后，其他已授权工具仍可能执行。该问题目前未见明确对应 fix PR，属于需要重点补齐的隔离语义缺口。

### 2.3 平台、桌面端与安全性

- **MCP 连接诊断信息脱敏**  
  [#133734](https://github.com/NousResearch/hermes-agent/pull/133734) 对 MCP HTTP/SSE 诊断中的凭据进行脱敏，补充了此前针对日志记录和 `httpx2` 的保护。

- **允许通过 SSH 在远端执行生命周期命令**  
  [#123701](https://github.com/NousResearch/hermes-agent/pull/123701) 调整终端安全检查，使 `ssh host "systemctl restart hermes-gateway"` 不再因命令外形被误判为自杀式生命周期操作。

- **统一长生命周期子进程的所有者死亡监督**  
  [#137057](https://github.com/NousResearch/hermes-agent/pull/137057) 试图用统一的 owner-death supervisor 管理浏览器、模型服务、语言服务器、shell 和 code cell 子进程，并限制新的 detached spawn。影响面较大，合并前需要重点审查兼容性。

- **Desktop 会话中间出现的文件改为行内链接**  
  [#126734](https://github.com/NousResearch/hermes-agent/pull/126734) 避免文件名以大块卡片形式打断正文，改善 Desktop 聊天可读性。

- **CLI 状态栏新增可选 reasoning 字段**  
  [#145356](https://github.com/NousResearch/hermes-agent/pull/145356) 支持显示 `high`、`medium`、`none`、`default` 等推理强度，默认行为不变。

### 2.4 整体推进评估

今日开发覆盖面广，既有 Dashboard 国际化、模型路由等大型功能，也有 provider 兼容、会话恢复、凭据脱敏和子进程治理等底层修复。但 **44 条待合并 PR** 与 **6 条已合并或关闭** 的比例显示，代码进入正式发布的效率可能偏低；其中部分 PR 仍是跨多个组件的大改，存在较高集成与回归风险。

---

## 4. 社区热点

### 4.1 Unified Gateway 合并后问题总览

- [#143547：Unified gateway：main 分支上的合并后问题](https://github.com/NousResearch/hermes-agent/issues/143547)  
  **23 条评论，为今日最活跃 Issue。**

  该 Issue 汇总了 Unified Gateway 将 CLI、TUI、Desktop、API Server、编辑器、消息机器人、Cron、Kanban 和 Group Chat 统一到一个 Gateway 进程后暴露的跨组件问题。热度背后反映出的核心诉求不是单点功能，而是：

  1. 用户需要一个稳定、可预测的统一会话生命周期；
  2. Desktop、移动端、CLI 和机器人需要共享一致的权限与路由语义；
  3. 网关重启、压缩、reset、归档和删除不能破坏 lineage 或会话状态；
  4. 迁移后需要清晰的可观测性和故障边界，避免问题分散在大量子 Issue 中。

### 4.2 Discord 自动线程被永久拒绝

- [#142461：Automation wake 进入自动创建的 Discord 线程后持续 admission_conflict](https://github.com/NousResearch/hermes-agent/issues/142461)  
  **11 条评论、6 个赞，为今日反应最多的 Issue。**

  自动唤醒任务无法进入自动创建的 Discord thread，父会话在子会话完成后也无法恢复。问题直接影响自动化任务与 Discord 群聊组合场景，用户需要一个可靠的“子线程完成—父会话续跑”闭环。

- [#145261：Watch-pattern completion injection 持续 admission_conflict](https://github.com/NousResearch/hermes-agent/issues/145261)  
  **5 条评论。**

  在 Hermes 0.22.5、multiplex profile 和 Discord group session 环境下，单日出现 **2,641 次拒绝**。这说明 `admission_conflict` 已不只是低频边缘问题，而可能形成日志风暴、任务饥饿和资源占用。

### 4.3 跨客户端会话恢复和权限不一致

- [#144814：hermes-mobile 创建的会话无法被 Desktop 恢复](https://github.com/NousResearch/hermes-agent/issues/144814)  
  **6 条评论。**

  Desktop 侧栏能显示完整 transcript，却无法打开并继续回复，返回 `session.resume 4001 not_found`。用户期待所有客户端通过统一 Gateway 看到一致且可操作的会话。

- [#143839：Desktop 无法归档、删除或恢复自己的新式会话](https://github.com/NousResearch/hermes-agent/issues/143839)  
  **4 条评论。**

  `source='desktop'` 且未路由的会话在 REST mutation 阶段被 `permission_denied` 拒绝，恢复则返回 `not_found`。这与统一网关的授权和路由模型直接相关。

- [#143845：Dashboard 删除已完成的 Cron 会话返回 404，但记录仍存在](https://github.com/NousResearch/hermes-agent/issues/143845)  
  **8 条评论。**

  CLI 删除同一 ID 可以成功，说明 Dashboard 与 CLI 的会话定位或删除语义不一致。对用户而言，这是明显的状态与操作入口不一致问题。

### 4.4 项目积压治理讨论

- [#7335：未关闭 Issue 已超过 1000 个](https://github.com/NousResearch/hermes-agent/issues/7335)  
  **21 条评论，今日已关闭。**

  Issue 数量持续增长已引发社区对治理方式的关注。该讨论本身关闭，不代表积压已经解决；后续应关注是否形成标签自动清理、重复 Issue 合并、长期 Issue 分诊或版本里程碑机制。

---

## 5. Bug 与稳定性

### 严重级别：P1

- **长会话 provider 错误误分类**  
  [#134274](https://github.com/NousResearch/hermes-agent/pull/134274)  
  内容策略和请求格式类 400 错误可能被误判为上下文溢出，影响压缩、重试和续聊。**已有 P1 fix PR，待合并。**

### 高风险：P2

- **Discord 自动化任务永久 `admission_conflict`**  
  [#142461](https://github.com/NousResearch/hermes-agent/issues/142461)、[#145261](https://github.com/NousResearch/hermes-agent/issues/145261)  
  涉及自动化、Discord、multiplex profile 和父子会话恢复；单日可产生数千次拒绝。**当前展示数据中未见明确对应 fix PR。**

- **Windows Gateway watchdog 退出 75 后不自动重启**  
  [#140012](https://github.com/NousResearch/hermes-agent/issues/140012)  
  Telegram 传输异常后可能造成所有 profile 静默离线，需要人工执行 `hermes gateway start`。**未见明确 fix PR。**

- **Desktop 与移动端会话无法互相恢复**  
  [#144814](https://github.com/NousResearch/hermes-agent/issues/144814)  
  会话可见但不可操作，破坏统一 Gateway 的核心承诺。**未见明确 fix PR。**

- **Desktop 会话归档、删除和恢复权限错误**  
  [#143839](https://github.com/NousResearch/hermes-agent/issues/143839)  
  `permission_denied` 与 `not_found` 同时影响多个会话操作。**未见明确 fix PR。**

- **Dashboard 删除 Cron 会话与 CLI 行为不一致**  
  [#143845](https://github.com/NousResearch/hermes-agent/issues/143845)  
  界面返回 404，但数据库记录仍存在。**未见明确 fix PR。**

- **Anthropic provider 错误文本误关闭 streaming**  
  [#144896](https://github.com/NousResearch/hermes-agent/issues/144896)  
  `"upstream ... not supported"` 被错误识别为 provider 不支持流式输出。**未见明确 fix PR。**

- **Gateway 事件循环中同步等待 token writer，最长可达 5 秒**  
  [#141966](https://github.com/NousResearch/hermes-agent/issues/141966)  
  `get_session()` 被 13 个 handler 在 event loop 上调用，可能造成明显延迟尖刺。**未见明确 fix PR。**

- **0-message 会话记录持续泄漏**  
  [#144053](https://github.com/NousResearch/hermes-agent/issues/144053)  
  Gateway route 注册阶段会创建空会话，但自动回收机制未覆盖该生成路径。**已有读取侧修复背景，但未看到完整生成侧回收 PR。**

- **Gateway 异常退出后 Chromium 进程树长期残留**  
  [#145010](https://github.com/NousResearch/hermes-agent/issues/145010)  
  orphan browser reap 只在后续浏览器使用触发，网关被强杀时会持续泄漏进程。  
  **可能由 [#137057](https://github.com/NousResearch/hermes-agent/pull/137057) 的统一进程监督方案部分覆盖，但需确认是否包含 browser reap。**

- **Telegram 执行审批卡片不可见，终端等待超时**  
  [#138133](https://github.com/NousResearch/hermes-agent/issues/138133)  
  用户无法完成交互式命令审批，直接影响远程操作安全与可用性。**未见明确 fix PR。**

- **Provider failover 携带不兼容的 `cache_control` 字段**  
  [#100819](https://github.com/NousResearch/hermes-agent/issues/100819)  
  Anthropic 风格消息在切换到 OpenAI-wire provider 时可能触发 400。**未见明确 fix PR，且需确认当前版本是否仍可复现。**

### 中风险：P3

- **Desktop 切换含空格的自定义模型名失败**  
  [#145363](https://github.com/NousResearch/hermes-agent/issues/145363)  
  模型 ID 被按空白拆分，触发 `use_session_mutation_model`。**未见明确 fix PR。**

- **Windows Desktop 无法打开旧 Bot Chat**  
  [#145332](https://github.com/NousResearch/hermes-agent/issues/145332)  
  已保存的 cwd `/` 被重新送入 `build_policy`，返回 `invalid_params`。**未见明确 fix PR。**

- **插件注册的 CLI 命令不出现在 help 和 completion 中**  
  [#145347](https://github.com/NousResearch/hermes-agent/issues/145347)  
  命令本身可调用，但发现与补全机制缺失，降低插件可用性。**未见明确 fix PR。**

- **本地会话在网关重启后长期保持 active 状态**  
  [#142592](https://github.com/NousResearch/hermes-agent/issues/142592)  
  `source='local'` 会话无法被现有 orphan sweep 回收，形成“幽灵活跃会话”。**未见明确 fix PR。**

- **`hard_interrupt` 后 sibling tool 仍可能派发**  
  [#145255](https://github.com/NousResearch/hermes-agent/issues/145255)  
  涉及中断语义与工具执行隔离，可能产生非预期副作用。**未见明确 fix PR。**

- **Bot Mode 的 `clarify` 卡片不渲染且持有 session lease**  
  [#145308](https://github.com/NousResearch/hermes-agent/issues/145308)  
  未渲染的澄清请求仍阻塞会话，并可能导致重启等待。**未见明确 fix PR。**

- **reset 后 resume 清除父会话 `end_reason`，破坏 receipt lineage**  
  [#145372](https://github.com/NousResearch/hermes-agent/issues/145372)  
  与 Bot Relay lineage 修复方向相关。  
  **已有邻近修复 [#145371](https://github.com/NousResearch/hermes-agent/pull/145371)，但是否完整覆盖 `end_reason` 校验仍需确认。**

### 依赖与兼容性

- **npm monorepo 仍有 2 个高危 Electron 链漏洞**  
  [#132924](https://github.com/NousResearch/hermes-agent/issues/132924)  
  相比此前 7 个漏洞已有改善，但 Electron 相关高危项仍未清零。建议在下一版本前确认是否已有可升级版本及升级破坏性。

- **Anthropic fallback provider 的 URL 被错误重写到 `/v1`**  
  [#79788](https://github.com/NousResearch/hermes-agent/issues/79788)  
  `anthropic_messages` API mode 下可能产生 404。**未见明确 fix PR。**

- **严格 provider 不接受空 assistant 消息或未匹配 tool call**  
  [#90614](https://github.com/NousResearch/hermes-agent/issues/90614)  
  影响 Moonshot、OpenRouter 等严格上游。**未见明确 fix PR。**

- **OpenRouter 端口冲突重试风暴与文件描述符泄漏**  
  [#83582](https://github.com/NousResearch/hermes-agent/issues/83582)  
  Issue 标记为 duplicate，需确认当前 `main` 是否已包含完整修复，不能仅按重复 Issue 关闭。

---

## 6. 功能请求与路线图信号

### 6.1 Dashboard 中文化、模型路由和原生音频

- [#130634](https://github.com/NousResearch/hermes-agent/pull/130634)  
  这是当前最值得关注的路线型 PR，涵盖：

  - Dashboard 全站简体中文化；
  - 主代理与子代理模型路由、回退链管理；
  - 热重载开关；
  - 原生音频处理；
  - 修复“添加路由”按钮无响应。

  **进入下一版本的概率较高。**  
  原因是其覆盖用户可见核心工作流，且与当前模型 provider、fallback 和多代理需求直接相关。不过 PR 自 10 月 1 日创建后持续更新，范围较大，合并前需要确认中文文案质量、音频实现和国际化回退逻辑。

### 6.2 插件子代理生命周期 API

- [#133212](https://github.com/NousResearch/hermes-agent/issues/133212)  
  请求为插件编排器提供更完整的 subagent lifecycle：steer、host isolation transport、effort/route/follow-up facade。

  **进入下一版本的概率中等。**  
  API 已存在一定基础，但仍标记 `needs-decision`，并牵涉插件隔离与远程 facade 边界。更可能先以独立版本或小步 API 调整落地，而不是直接整体纳入稳定版。

### 6.3 Composio 插件目录与凭据复用

- [#145313](https://github.com/NousResearch/hermes-agent/issues/145313)  
  希望社区插件能够：

  - 复用已有 Composio 用户凭据；
  - 查询官方 toolkit catalog；
  - 处理超过 1000 条目的分页；
  - 保持 OAuth、账户清单和断开连接仍由现有 Composio CLI 管理。

  **进入下一版本的概率中等偏低。**  
  该需求依赖外部 API、凭据授权边界和插件生命周期，跨项目协调成本较高。更可能作为插件 SDK 增强单独发布。

### 6.4 会话内时间感知

- [#28290](https://github.com/NousResearch/hermes-agent/issues/28290)  
  用户希望 Hermes 在长会话中注入时间边界标记，准确理解“昨天”“今天”“刚刚”等相对时间，而不是依赖模型猜测。

  **进入下一版本的概率中等。**  
  需求具备普适性，但标记策略会影响上下文长度、缓存、压缩和 prompt 稳定性，可能先以可选配置或实验性功能进入。

### 6.5 插件 CLI 命令注册

- [#145347](https://github.com/NousResearch/hermes-agent/issues/145347)  
  `ctx.register_cli_command()` 已能注册命令，但 `--help` 和 `completion` 未反映插件命令。

  **进入下一版本的概率较高。**  
  这是明确的 SDK 一致性缺陷，改动范围相对可控，预计适合作为小版本修复。

### 6.6 CLI reasoning 状态字段

- [#145356](https://github.com/NousResearch/hermes-agent/pull/145356)  
  可在状态栏单独显示 reasoning effort。

  **进入下一版本的概率较高。**  
  属向后兼容的可选 UI 能力，默认不变，风险较低。

### 6.7 unbroker 电话号码处理能力

- [#145118](https://github.com/NousResearch/hermes-agent/pull/145118)  
  为垃圾电话催收场景加入 phone-led intake、DNC one-shot 和 FTC registry 流程。

  **进入下一版本的概率偏低。**  
  该 PR 场景和政策依赖较强，更适合作为 skill/plugin 生态项目单独演进，而非进入 Hermes 核心。

---

## 7. 用户反馈摘要

### 核心痛点

1. **统一网关“可见但不可用”**  
   移动端创建的会话能出现在 Desktop，Desktop 也展示完整 transcript，但无法恢复、归档或删除。用户对统一 Gateway 的预期是“一个会话，多端一致操作”，当前实现尚未达到这一目标。  
   参考：[#144814](https://github.com/NousResearch/hermes-agent/issues/144814)、[#143839](https://github.com/NousResearch/hermes-agent/issues/143839)

2. **不同入口对同一会话操作结果不一致**  
   Dashboard 删除 Cron 会话返回 404，而 CLI 可以删除；Windows Desktop、旧 Bot Chat、插件 CLI 命令也存在类似“入口存在但无法完成操作”的情况。  
   参考：[#143845](https://github.com/NousResearch/hermes-agent/issues/143845)、[#145332](https://github.com/NousResearch/hermes-agent/issues/145332)、[#145347](https://github.com/NousResearch/hermes-agent/issues/145347)

3. **Discord 自动化组合场景高度不稳定**  
   自动线程、watch pattern、multiplex profile、群聊同时使用时，持续出现 `admission_conflict`，且父会话无法恢复。用户关注的不只是报错，而是自动化任务是否真正执行、是否可重放、是否会造成重复副作用。  
   参考：[#142461](https://github.com/NousResearch/hermes-agent/issues/142461)、[#145261](https://github.com/NousResearch/hermes-agent/issues/145261)

4. **会话状态不可信**  
   已结束会话仍显示 active、0-message 行持续泄漏、reset 后 lineage 校验再次失败，说明 session registry、owner、route、receipt 和数据库状态之间仍缺少统一的一致性模型。  
   参考：[#142592](https://github.com/NousResearch/hermes-agent/issues/142592)、[#144053](https://github.com/NousResearch/hermes-agent/issues/144053)、[#145372](https://github.com/NousResearch/hermes-agent/issues/145372)

5. **无人值守环境容易进入静默故障**  
   Windows watchdog 退出后不重启、Telegram 审批卡不可见、Gateway 崩溃后 Chromium 残留，用户需要更明确的自动恢复、健康检查和残留进程回收机制。  
   参考：[#140012](https://github.com/NousResearch/hermes-agent/issues/140012)、[#138133](https://github.com/NousResearch/hermes-agent/issues/138133)、[#145010](https://github.com/NousResearch/hermes-agent/issues/145010)

### 积极信号

- 用户愿意提交详尽复现步骤、环境版本、commit、平台和日志，说明高质量 Issue 的比例较高。
- Unified Gateway 汇总 Issue 得到 23 条讨论，表明社区正在围绕迁移后的统一行为形成系统反馈。
- Dashboard 中文化 PR 提供大规模中文词条与页面覆盖，显示中文社区参与度和产品本地化需求都很强。  
  参考：[#130634](https://github.com/NousResearch/hermes-agent/pull/130634)

### 不满与治理担忧

- 未关闭 Issue 超过 1000 个，社区已公开担忧维护能力和分流机制。  
  参考：[#7335](https://github.com/NousResearch/hermes-agent/issues/7335)
- 44 条 PR 待合并，而当日仅 6 条合并或关闭，用户可能将大量活跃 PR 理解为“长期等待评审”。
- 多个问题虽已存在修复 PR，但仍处于长期 OPEN，包括自 5 月、6 月创建的兼容性修复，说明 review 周期可能过长。  
  参考：[#31734](https://github.com/NousResearch/hermes-agent/pull/31734)、[#90614](https://github.com/NousResearch/hermes-agent/issues/90614)、[#100819](https://github.com/NousResearch/hermes-agent/issues/100819)

---

## 8. 待处理积压

### 8.1 长期开放但今日仍有讨论的重要 Issue

- [#28290：会话内时间感知](https://github.com/NousResearch/hermes-agent/issues/28290)  
  5 月创建、10 月仍持续讨论。需求明确，但尚未形成成熟实现路径。

- [#136582：Hermes 压缩行为与 Codex CLI、Claude Code 的差异分析及测试工具](https://github.com/NousResearch/hermes-agent/issues/136582)  
  自 10 月创建并持续更新，属于压缩语义的重要 umbrella issue，应尽快整理为可验收的子问题。

- [#133212：插件 subagent lifecycle v1.1](https://github.com/NousResearch/hermes-agent/issues/133212)  
  跨插件、委派、CLI、Gateway 和 Desktop，仍标记 `needs-decision`。

- [#79788：Anthropic fallback provider URL 重写错误](https://github.com/NousResearch/hermes-agent/issues/79788)  
  自 8 月创建，属于 provider fallback 兼容性问题，建议尽快确认当前版本复现状态并关联修复 PR。

- [#90614：严格 provider 的空消息与 tool call 清洗](https://github.com/NousResearch/hermes-agent/issues/90614)  
  自 8 月创建，影响 Moonshot/OpenRouter 多轮会话，建议纳入 provider 兼容性回归套件。

- [#100819：Provider failover 携带 Anthropic cache_control](https://github.com/NousResearch/hermes-agent/issues/100819)  
  自 9 月创建，涉及 failover 与缓存协议转换，应明确是否仍影响当前稳定版。

- [#83582：端口冲突重试风暴和 fd 泄漏](https://github.com/NousResearch/hermes-agent/issues/83582)  
  虽标记 duplicate，但建议将“当前 main 已验证”形成可引用的回归测试，避免误关闭。

### 8.2 长期待评审的重要 PR

- [#31734：合并 system prefill 到主 system prompt](https://github.com/NousResearch/hermes-agent/pull/31734)  
  5 月创建，至今仍开放；涉及严格 provider 兼容性，建议优先完成 review。

- [#123701：允许 SSH 远端生命周期命令](https://github.com/NousResearch/hermes-agent/pull/123701)  
  9 月创建，涉及安全边界，需要维护者明确批准远程重启豁免策略。

- [#130634：Dashboard 中文本地化、模型路由与原生音频](https://github.com/NousResearch/hermes-agent/pull/130634)  
  10 月创建，范围大、用户价值高，但需要拆分或明确合并门槛。

- [#134274：长会话 provider 故障分类](https://github.com/NousResearch/hermes-agent/pull/134274)  
  P1、涉及消息投递和压缩风险，应优先处理。

- [#137057：统一长生命周期子进程监督](https://github.com/NousResearch/hermes-agent/pull/137057)  
  影响组件广、架构风险高，需要专项回归测试：浏览器、模型服务、terminal、cron、插件和 Desktop。

- [#140175：丢失 turn 后恢复暂停会话](https://github.com/NousResearch/hermes-agent/pull/140175)  
  直接影响 Gateway 重启后的可用性，应优先合入。

### 8.3 维护者建议

1. **立即建立 Unified Gateway 问题收敛看板**：按认证、session registry、route、lineage、CLI/Desktop 兼容分组，避免同一根因在多个 Issue 中重复修复。
2. **优先处理 P1/P2 稳定性 PR**：尤其是 [#134274](https://github.com/NousResearch/hermes-agent/pull/134274)、[#140175](https://github.com/NousResearch/hermes-agent/pull/140175)、[#145020](https://github.com/NousResearch/hermes-agent/pull/145020)、[#145371](https://github.com/NousResearch/hermes-agent/pull/145371)。
3. **为 Discord `admission_conflict` 设置专项回归测试**：覆盖 auto thread、watch pattern、multiplex profile、父子恢复与高频拒绝。
4. **公开 PR 评审 SLA 与里程碑**：当前 44 条待合并 PR 已形成明显积压，应明确哪些将在下一稳定版合并、哪些需要拆分或关闭。
5. **处理超过 1000 个开放 Issue 的治理问题**：可采用版本标签、过期自动归档、重复项合并和 stale-bot 策略，但需保留高价值长期讨论。  
   参考：[#7335](https://github.com/NousResearch/hermes-agent/issues/7335)

---

## 项目健康度结论

**活跃度：高。** 24 小时内共有 100 条 Issue/PR 更新，社区提交意愿强，功能路线覆盖 Dashboard、Desktop、插件、模型路由、语音、进程治理等多个方向。

**发布状态：偏慢。** 当日没有新版本发布，且大量修复仍停留在待合并状态。尤其在 Unified Gateway 迁移后，`admission_conflict`、会话恢复、权限、lineage 与状态清理问题相互交织，说明当前主干尚未达到稳定收敛状态。

**风险等级：中高。** 高风险问题多集中在会话状态、跨客户端一致性、无人值守恢复和 provider 兼容性，而这些问题会直接影响消息送达和自动化执行。

**积极因素：** 社区复现质量较高，已有多个针对性 fix PR，且 Dashboard 本地化、模型路由和 Desktop 体验等用户可见功能正在推进。若维护者能够加快高优先级 PR 评审并统一 Unified Gateway 的状态与权限模型，项目下一阶段仍有较明显的可交付空间。

</details>

<details>
<summary><strong>OpenHuman</strong> — <a href="https://github.com/tinyhumansai/openhuman">tinyhumansai/openhuman</a></summary>

# OpenHuman 项目动态日报

**日期：2026-10-27**  
**统计窗口：过去 24 小时**  
**数据来源：OpenHuman GitHub Issues、Pull Requests、Releases**

---

## 1. 今日速览

OpenHuman 过去 24 小时共更新 **10 个 Issues** 和 **19 个 PR**，其中 Issue 新开/活跃 2 条、关闭 8 条；PR 已合并或关闭 16 条、待处理 3 条，整体呈现出**高修复密度、低版本发布节奏**的特征。

今日工作的重点集中在三条主线：**渠道与 Discord 集成稳定性、MongoDB 存储导入修复、底层模块依赖升级**。其中 TinyChannels v2 主机集成已完成合入，Discord 工单、Markdown 导出、字体设置持久化等用户可见问题陆续关闭；但 MongoDB 启动导入故障和 Terminal-Bench 基准测试仍未解决。

项目当前健康度可评估为**总体健康、局部风险可控**：19 条 PR 更新中约 84% 已完成流转，且没有新增版本发布；不过仍有 3 条 PR 等待合并，以及多个跨模块升级、测试稳定性和端到端测试任务需要继续收敛。建议下一阶段重点关注 **#8424、#8421、#8059** 的合并进展，以及 MongoDB、Discord 和 Terminal-Bench 三条问题链是否真正闭环。

---

## 2. 版本发布

过去 24 小时**无新版本发布**，因此暂无对应的功能变更、破坏性变更和迁移说明。

不过底层模块在当天有较集中升级，包括 TinyAgents、TinyChannels、TinyVoice、TinyEventQueues、TinyBox、TinyHosts、TinyMCP 等版本 pin 更新。需要注意：

- 这些变更大多已进入 PR 合并流程，但**不等同于 OpenHuman 正式版本发布**；
- 用户可能在下一次 OpenHuman 版本中体验到依赖升级；
- 建议发布前重点验证 MongoDB 存储、Discord/Telegram 渠道、会话存储兼容性和渠道 E2E 测试。

相关依赖升级：

- [PR #8412：刷新全部 tiny* vendor release 并重新 pin 模块](https://github.com/tinyhumansai/openhuman/pull/8412)
- [PR #8409：升级 TinyBox、TinyHosts、TinyMCP](https://github.com/tinyhumansai/openhuman/pull/8409)
- [PR #8407：tinyagents pin 到 v3.1.1](https://github.com/tinyhumansai/openhuman/pull/8407)
- [PR #8418：pin TinyEventQueues v0.2.3](https://github.com/tinyhumansai/openhuman/pull/8418)
- [PR #8410：升级 tinyskills、tiny-artifacts、tinyhumans-sdk](https://github.com/tinyhumansai/openhuman/pull/8410)

---

## 3. 项目进展

### 3.1 TinyChannels v2 主机集成完成合入

[PR #8397：feat: epic 7964 — TinyChannels v2 host integration](https://github.com/tinyhumansai/openhuman/pull/8397) 是今日最重要的功能推进。该 PR 已关闭，并关联：

- [Issue #7964：TinyChannels v2 统一渠道 API Epic](https://github.com/tinyhumansai/openhuman/issues/7964)

主要交付内容包括：

- 将 `web_chat` 重构为基于 TinyAgents turn runner 和 TinyChannels web adapter 的轻量宿主模块；
- 统一 OpenHuman 的渠道策略、端口实现及模块边界；
- 推进语音、附件、图片、视频、流式响应、输入状态、已读回执和表情回应等统一渠道能力；
- 为后续 WhatsApp、Telegram、Discord、Slack、Signal、iMessage、邮件等适配器奠定统一接口。

这标志着项目从“多个渠道分别实现”向“统一渠道抽象层”转型迈出关键一步。不过，渠道层稳定性仍需继续验证，尤其是 Discord 和 Telegram 的端到端路径。

### 3.2 Discord 报告到 GitHub Issue 的闭环得到集中修复

今日关闭的多个 Issue 共同指向 Discord/Teeny 集成问题：

- [Issue #6714：`githubTrackerChannelID` 为空，发布通知被静默丢弃](https://github.com/tinyhumansai/openhuman/issues/6714)
- [Issue #7055：修复 Teeny 将 Discord 报告提交为 Issue 的端到端流程](https://github.com/tinyhumansai/openhuman/issues/7055)
- [Issue #6671：“Open a ticket”按钮返回 integration failed](https://github.com/tinyhumansai/openhuman/issues/6671)
- [Issue #6694：因暴露个人信息而关闭并由脱敏 Issue 替代](https://github.com/tinyhumansai/openhuman/issues/6694)

从结果看，维护者已经集中处理了：

1. Discord 目标频道 ID 缺失；
2. 工单按钮交互失败；
3. Teeny 对聊天片段作答而非生成规范报告；
4. 向公开仓库提交 Issue 时可能泄露 PII；
5. 原 Issue 中已暴露个人数据的清理与替代。

这是重要的用户信任修复，尤其降低了公共仓库中的隐私泄露风险。

### 3.3 MongoDB 存储导入问题已有针对性修复 PR

当前仍开放的问题：

- [Issue #8422：MongoDB 后端下 legacy store import 每次启动均失败](https://github.com/tinyhumansai/openhuman/issues/8422)

对应修复：

- [PR #8424：允许 claimed imports 在 MongoDB 上声明 collections](https://github.com/tinyhumansai/openhuman/pull/8424)

PR 处于开放待合并状态。问题根因是 conditioned handle 无法声明 collections，而 `cron`、`sessions` 旧数据导入依赖这一能力，导致启动阶段失败并持续重试。修复方案改为通过 scope 的无条件 handle 声明和校验 collections，同时保持写入仍受 claim 范围约束。

在 #8424 合入并完成回归验证前，MongoDB 用户仍可能遇到启动导入失败。

### 3.4 事件总线隐私日志问题得到修复

- [PR #8417：避免在事件总线 debug 日志中记录事件 payload](https://github.com/tinyhumansai/openhuman/pull/8417)

原实现会在 debug 日志中完整记录 `DomainEvent`，可能包含：

- 语音输入转写；
- 渠道消息；
- 智能体回复；
- 其他用户内容。

修复后只记录事件 domain 和 variant 名称。这是重要的隐私与可观测性改进，避免调试日志意外成为用户内容泄漏点。

### 3.5 线程删除和清理竞态得到修复

- [PR #8414：将取消前已完成的子任务视为 settled](https://github.com/tinyhumansai/openhuman/pull/8414)
- [PR #8413：修复 purge cancellation 测试的 flaky 行为](https://github.com/tinyhumansai/openhuman/pull/8413)

第一项修复了 `thread_delete` 和 `threads_purge` 在竞态窗口下的误报：子任务在“被枚举为运行中”和“实际收到取消”之间自行完成时，不再抛出“无法安全 settle 所有线程任务”的错误。第二项针对测试中完成与取消状态判定不一致导致的随机失败。

这说明线程生命周期管理正在从“依赖时序运气”转向更确定的状态处理。

### 3.6 CI 与端到端测试基础设施继续收敛

- [PR #8421：在 native chat suite 中只调度一次 agent-teams-live](https://github.com/tinyhumansai/openhuman/pull/8421) — 开放待合并
- [PR #8416：native Telegram E2E 加载已 staging 的模块版本](https://github.com/tinyhumansai/openhuman/pull/8416)
- [PR #8415：让 testkit-gated embed 测试在每个 CI lane 执行](https://github.com/tinyhumansai/openhuman/pull/8415)
- [PR #8405：公开 SessionStoreLease 并从 embed facade 重导出](https://github.com/tinyhumansai/openhuman/pull/8405)
- [PR #8404：升级 tinyagents，修复内存 transcript locator 探测问题](https://github.com/tinyhumansai/openhuman/pull/8404)

这些改动主要解决“测试没有真正执行”“模块版本与 CI 环境不一致”和“重复调度”的基础设施问题，有利于提升发布前信号可信度。

### 3.7 安全依赖升级

- [PR #8423：将 zstd 从 0.13 升级至 0.14](https://github.com/tinyhumansai/openhuman/pull/8423)

该 PR 已关闭，用于处理 `RUSTSEC-2026-0391/0398/0403` 涉及的 zstd 风险。变更范围集中于 `crates/openhuman-core` 及锁文件，不涉及业务逻辑，但属于应优先纳入下一次发布的依赖安全维护。

### 3.8 模型调用可观测性增强

- [Issue #8419：接入 served_by、response_id、first_token_ms](https://github.com/tinyhumansai/openhuman/issues/8419)
- [PR #8420：升级 tinyagents并暴露上述模型调用字段](https://github.com/tinyhumansai/openhuman/pull/8420)
- [PR #8408：升级 tinyagents 以兼容旧版本声明的 session store](https://github.com/tinyhumansai/openhuman/pull/8408)
- [PR #8407：tinyagents pin 到 v3.1.1](https://github.com/tinyhumansai/openhuman/pull/8407)

项目开始记录：

- `served_by`：实际承载请求的上游提供商；
- `response_id`：提供商返回的响应 ID；
- `first_token_ms`：首 token 延迟。

这将提升多模型路由、缓存命中和冷启动性能分析能力，也是 [Issue #6999 Terminal-Bench 基准](https://github.com/tinyhumansai/openhuman/issues/6999) 所需要的诊断基础之一。

---

## 4. 社区热点

### 4.1 讨论最集中：Teeny 与 Discord 工单链路

今日评论量最高的是：

- [Issue #6999：Terminal-Bench 基准、区分模型智能与 harness 故障、关闭缓存/冷启动差距](https://github.com/tinyhumansai/openhuman/issues/6999) — **9 条评论**
- [Issue #6714：Discord 发布通知因频道 ID 为空而全部丢弃](https://github.com/tinyhumansai/openhuman/issues/6714) — **6 条评论**
- [Issue #7055：Teeny 端到端修复，包括工单按钮与 PII 泄漏](https://github.com/tinyhumansai/openhuman/issues/7055) — **5 条评论**
- [Issue #6671：“Open a ticket”按钮 integration failed](https://github.com/tinyhumansai/openhuman/issues/6671) — **4 条评论**

这些 Issue 反映出同一类用户诉求：**Discord 不应只是一个聊天入口，而应成为可靠的问题反馈入口**。具体包括：

- 点击按钮后必须能成功创建工单；
- 报告应自动整理为结构化 GitHub Issue；
- 应包含优先级、分类和必要上下文；
- 不应将个人信息提交到公开仓库；
- 发布通知必须发送到配置正确的频道；
- Teeny 不应只回复聊天片段，而应完成稳定的报告生成与提交。

### 4.2 技术路线热点：Terminal-Bench 与能力/基础设施分层评测

- [Issue #6999](https://github.com/tinyhumansai/openhuman/issues/6999)

核心诉求不是简单追求更高 benchmark 分数，而是将失败明确拆分为：

1. **模型智能不足；**
2. **harness、工具调用、状态管理或任务编排失败。**

这反映项目已进入“系统性评估 agent 实际能力”的阶段。社区关注点包括缓存命中、上下文冷启动、工具执行失败归因，以及如何让 benchmark 结论可复现。

### 4.3 隐私与公开仓库治理

- [Issue #6694](https://github.com/tinyhumansai/openhuman/issues/6694)

该 Issue 因包含操作系统账户名和用户 ID 而关闭，并由脱敏后的 Issue 替代。它表明用户反馈治理已开始强调：

- 公共 Issue 提交前脱敏；
- 避免 Discord 用户信息直接进入公开仓库；
- 修复 Teeny 的报告内容过滤。

这是社区信任建设的必要方向。

### 4.4 PR 热度与合并倾向

PR 列表未提供 reaction 数，但当日共 19 条 PR 更新，其中 16 条已合并或关闭，说明维护团队处理吞吐较高。值得关注的开放 PR：

- [PR #8424：MongoDB claimed import 修复](https://github.com/tinyhumansai/openhuman/pull/8424)
- [PR #8421：agent-teams-live E2E 去重调度](https://github.com/tinyhumansai/openhuman/pull/8421)
- [PR #8059：云提供商自定义 headers、User-Agent 与 OpenCode Go session](https://github.com/tinyhumansai/openhuman/pull/8059)

---

## 5. Bug 与稳定性

### P1：高优先级

#### 1. MongoDB 后端启动导入持续失败

- [Issue #8422](https://github.com/tinyhumansai/openhuman/issues/8422)
- 状态：开放
- 影响：使用 MongoDB 时，`cron` 和 `sessions` legacy import 在每次启动时失败；数据未写入，后续启动还会继续重试。
- 修复状态：**已有 fix PR**
- [PR #8424](https://github.com/tinyhumansai/openhuman/pull/8424) 尚待合并。
- 建议：合入前必须验证首次导入、重复启动、空集合、旧数据恢复和失败回滚场景。

#### 2. Discord/Teeny 工单链路整体不可用

涉及：

- [Issue #6714](https://github.com/tinyhumansai/openhuman/issues/6714)
- [Issue #7055](https://github.com/tinyhumansai/openhuman/issues/7055)
- [Issue #6671](https://github.com/tinyhumansai/openhuman/issues/6671)

状态：均已关闭。  
影响包括频道 ID 为空、按钮失败、无法生成规范 Issue，以及 PII 可能进入公开仓库。

已有明确修复方向并完成 Issue 闭环，但在正式版本发布前仍建议进行 Discord 实机回归，覆盖按钮点击、权限、频道缺失、重复提交和脱敏行为。

### P2：用户可见功能问题

#### 3. Markdown 对话导出生成空文件

- [Issue #8406](https://github.com/tinyhumansai/openhuman/issues/8406)
- 状态：已关闭
- 环境：OpenHuman 0.64.15，Windows 11
- 影响：任何对话导出后，目标文件存在但没有内容。
- 修复状态：数据中没有对应 fix PR，无法确认具体修复 PR，但 Issue 已关闭。

该问题直接影响用户保存和分享对话的能力，严重度高于一般 UI 缺陷。

#### 4. 聊天字体大小重启后恢复默认

- [Issue #8411](https://github.com/tinyhumansai/openhuman/issues/8411)
- 状态：已关闭
- 环境：OpenHuman 0.64.15
- 影响：Appearance 中设置的 Large 字体无法跨重启持久化。
- 修复状态：数据中未显示单独 fix PR，但 Issue 已关闭。

#### 5. 事件总线 debug 日志包含用户内容

- [PR #8417](https://github.com/tinyhumansai/openhuman/pull/8417)
- 状态：已关闭
- 影响：语音转写、渠道消息、agent 回复可能出现在 debug 日志中。
- 修复状态：**已有明确 fix PR，且已关闭**。
- 风险等级：技术上是 P3 功能改进，但涉及隐私，应按高敏感度事项验证。

### P3：可靠性与 CI 问题

#### 6. 线程删除/清理竞态误报

- [PR #8414](https://github.com/tinyhumansai/openhuman/pull/8414)
- 状态：已关闭
- 影响：子任务恰好在取消前完成时，删除或清理线程可能错误失败。
- 修复状态：已有回归测试和对应修复。

#### 7. 内存 transcript locator 探测破坏后续 generation

- [PR #8404](https://github.com/tinyhumansai/openhuman/pull/8404)
- 状态：已关闭
- 影响：探测 session 时可能登记错误的空 stem，导致后续 `begin_generation_from_baseline` 失败。
- 修复状态：通过升级 tinyagents 修复。

#### 8. CI 检查未覆盖完整测试集合

- [PR #8415](https://github.com/tinyhumansai/openhuman/pull/8415)
- [PR #8416](https://github.com/tinyhumansai/openhuman/pull/8416)
- [PR #8418](https://github.com/tinyhumansai/openhuman/pull/8418)
- [PR #8421](https://github.com/tinyhumansai/openhuman/pull/8421)

主要问题包括：

- testkit-gated embed 测试在默认 feature lane 实际未运行；
- Telegram E2E 与 CI staging 的模块版本不一致；
- TinyEventQueues 模块边界静态检查失败；
- agent-teams-live E2E 被重复调度。

前三项已有对应关闭 PR；[PR #8421](https://github.com/tinyhumansai/openhuman/pull/8421) 仍开放待合并。

---

## 6. 功能请求与路线图信号

### 6.1 TinyChannels v2：统一所有渠道 API

- [Issue #7964](https://github.com/tinyhumansai/openhuman/issues/7964)
- [PR #8397](https://github.com/tinyhumansai/openhuman/pull/8397)

目标是让文本、语音、附件、图片、视频、流式输出、输入状态、已读回执和表情回应都通过统一渠道 API 暴露，并为各供应商提供适配器。

**纳入下一版本的概率：高。**  
对应 Epic PR 已完成合入，属于当前模块架构的核心方向。下一阶段更可能出现具体 provider adapter、稳定性和端到端测试工作，而非重新讨论接口方向。

### 6.2 云提供商自定义 Headers、User-Agent 与 OpenCode Go Session

- [PR #8059](https://github.com/tinyhumansai/openhuman/pull/8059)

拟支持：

- 为每个 `[[cloud_providers]]` 配置自定义 headers；
- 在 chat completions、model limits 查询和 `list_models` 中携带 headers；
- 为 OpenAI-compatible 路由发送 `User-Agent: openhuman/<core version>`；
- 将 OpenCode Go session 发送给云提供商。

**纳入下一版本的概率：中高。**  
PR 已开放多日并持续更新，功能边界清晰，但需确认第三方服务是否接受自定义 User-Agent，以及 session 传递是否涉及凭据或隐私风险。

### 6.3 Terminal-Bench 评测与缓存/冷启动优化

- [Issue #6999](https://github.com/tinyhumansai/openhuman/issues/6999)

诉求包括：

- 运行 Terminal-Bench；
- 区分 intelligence failure 和 harness failure；
- 修复 harness 侧问题；
- 关闭缓存与冷启动差距。

**纳入下一版本的概率：中等。**  
这是高价值工程方向，但范围较大，可能先以 benchmark 报告、诊断工具和部分 harness 修复的形式进入版本，而非一次性完成全部优化。

### 6.4 模型调用可观测性

- [Issue #8419](https://github.com/tinyhumansai/openhuman/issues/8419)
- [PR #8420](https://github.com/tinyhumansai/openhuman/pull/8420)

`served_by`、`response_id` 和 `first_token_ms` 已通过依赖升级接入，**近期版本落地概率高**。后续预计会继续建设延迟分布、provider 路由、缓存命中和响应追踪能力。

### 6.5 Discord 作为可靠反馈与报告入口

相关已关闭 Issues 表明该方向已经从“功能请求”转为“稳定性修复”。后续路线图信号大概率包括：

- 自动创建结构化 GitHub Issue；
- 自动分类与优先级；
- PII 脱敏；
- 发布和工单通知；
- 人工审核或防重复提交机制。

---

## 7. 用户反馈摘要

### 7.1 真实使用场景

用户主要通过 Discord 与 OpenHuman 交互，并期望：

- 在聊天中直接反馈问题；
- 点击按钮创建 GitHub Issue；
- 收到版本或更新通知；
- 导出对话并保存为 Markdown；
- 持久化外观偏好；
- 在不同供应商和模型上稳定使用 agent 能力。

这些反馈表明 OpenHuman 已进入真实日常工作流，而不只是开发者实验环境。

### 7.2 主要痛点

1. **Discord 反馈链路表面可用、实际不可用。**  
   按钮返回 “integration failed”，通知频道因空配置被静默丢弃，用户无法判断问题是否被系统接收。

2. **隐私保护不足。**  
   自动生成公开 Issue 的流程可能将操作系统账户名、用户 ID 等个人信息带入公开仓库。

3. **基础设置和导出行为影响信任。**  
   字体大小无法持久化、Markdown 导出为空文件，会直接削弱用户对桌面端稳定性的信心。

4. **Agent 能力难以被准确评价。**  
   用户和维护者都希望知道 Terminal-Bench 失败来自模型本身，还是来自 harness、工具调用和运行时编排。

5. **多提供商与渠道的兼容矩阵复杂。**  
   TinyChannels v2、TinyAgents 和各 provider adapter 的版本组合，使 CI 和发布验证成为重要稳定性瓶颈。

### 7.3 满意与积极信号

虽然提供的 Issue 数据没有点赞数据，也没有完整评论文本，因此无法量化满意度；但从今日大量修复关闭、Epic 推进和测试体系完善可以看出：

- 用户愿意提交可复现的详细问题；
- 维护者响应速度较快；
- 高风险问题能够在 24 小时内形成专门修复；
- 项目开始主动处理隐私、可观测性和 benchmark 可信度等工程质量问题。

---

## 8. 待处理积压

### 8.1 今日仍未解决的重要 Issue

#### Terminal-Bench 与缓存/冷启动差距

- [Issue #6999](https://github.com/tinyhumansai/openhuman/issues/6999)
- 状态：开放
- 评论数：9，为当前最高
- 优先级标记：P1
- 风险：该 Issue 是项目能力评测的核心基线，长期不闭环会妨碍模型、harness 和缓存策略的定量优化。

#### MongoDB legacy import 启动失败

- [Issue #8422](https://github.com/tinyhumansai/openhuman/issues/8422)
- 状态：开放
- 已有 [PR #8424](https://github.com/tinyhumansai/openhuman/pull/8424)
- 风险：修复 PR 尚未合并，用户影响仍在持续。

### 8.2 开放待合并 PR

#### MongoDB claimed import 修复

- [PR #8424](https://github.com/tinyhumansai/openhuman/pull/8424)
- 优先级：应优先处理，因为直接对应 P1 数据迁移和启动稳定性问题。

#### E2E 调度去重

- [PR #8421](https://github.com/tinyhumansai/openhuman/pull/8421)
- 优先级：中高。用于消除当前 main 上已知红灯，但尚未合并。

#### 云提供商 headers、User-Agent、OpenCode Go session

- [PR #8059](https://github.com/tinyhumansai/openhuman/pull/8059)
- 优先级：中。已开放约 9 天，需确认产品边界、隐私审查、兼容性测试和下一版本时间表。

### 8.3 结构性路线图积压

- [Issue #7964：TinyChannels v2 Epic](https://github.com/tinyhumansai/openhuman/issues/7964) 已关闭，但统一渠道 API 的 provider 适配矩阵仍需要后续 Epic 拆分。
- [Issue #7055](https://github.com/tinyhumansai/openhuman/issues/7055) 等 Discord 问题虽已关闭，仍应在发布前进行回归，尤其是 PII 脱敏、频道缺失和权限失败路径。
- 多个底层模块在同日升级，需防范跨模块兼容性问题，尤其是 TinyAgents 的 session store、transcript locator 和 lease API。

---

## 结论

OpenHuman 今日整体处于**高强度工程收敛期**：19 条 PR 更新、16 条完成流转，说明维护吞吐较高；TinyChannels v2、模型可观测性、线程生命周期和隐私日志修复均取得了实质进展。与此同时，项目仍暴露三类结构性压力：

1. **真实渠道集成尚未完全稳定**，尤其是 Discord；
2. **MongoDB 与多后端兼容仍是高风险区**；
3. **模块快速升级后，CI、版本兼容和端到端验证成本显著上升**。

近期最值得关注的闭环顺序应为：**合并并验证 #8424 → 完成 #8421 → 发布前回归 Discord/Markdown/字体持久化 → 再推进 Terminal-Bench 与 #8059**。在 MongoDB 导入修复和渠道回归完成前，项目整体健康度可评为 **B+**：活跃度高、修复响应快，但生产可用性仍需由多后端、跨渠道和真实用户场景验证。

</details>

---
*本日报由 [Big Model Radar](https://github.com/96loveslife/big_model_radar) 自动生成。*
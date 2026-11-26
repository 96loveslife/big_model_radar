# OpenClaw 生态日报 2026-11-26

> Issues: 365 | PRs: 500 | 覆盖项目: 8 个 | 生成时间: 2026-11-26 07:43 UTC

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

**统计日期：2026-11-26**  
**数据范围：过去 24 小时 GitHub 活动**  
**项目健康度判断：高活跃、高压力；发布稳定，但更新链路、资源治理与可靠性问题仍较集中。**

---

## 一、今日速览

- OpenClaw 过去 24 小时共有 **365 条 Issue 更新**（248 条新开或活跃，117 条关闭）和 **500 条 PR 更新**（276 条待合并，224 条合并或关闭），另有 **1 个新版本发布**，整体开发吞吐量很高。
- 今日议题明显集中在三条主线：**Gateway 内存与 SQLite/WAL 稳定性、托管更新流程可靠性、会话/消息丢失及跨版本回归**。
- 新发布的 `v2026.10.34` 属于 Gateway-only 的 `extended-stable` 分支，以安全更新、可靠性和性能修复为主，说明项目正在优先保护稳定部署面，而非单纯追求功能扩张。
- PR 队列中已有不少针对性修复，覆盖更新期间 Doctor 重启、Windows 更新、Worker 重连、自动化阻塞展示和附件保存等；但仍有多个 P0/P1 问题缺少明确 fix PR，维护压力偏高。
- 综合判断：**项目推进速度很快、自动化协作活跃，但当前版本分支和主干之间仍存在明显质量落差，尤其更新器、Gateway 资源生命周期与会话状态机尚未完全收敛。**

---

## 二、版本发布

### v2026.10.34

- **标签**：`v2026.10.34`
- **类型**：Gateway-only `extended-stable`，项目当前等价于 LTS 的稳定发布线
- **定位**：在 2026 年 10 月底版本基础上，追加关键安全更新、可靠性与性能修复，以及新的模型支持
- **发布页**：https://github.com/openclaw/openclaw/releases/tag/v2026.10.34

#### 更新重点

结合发布说明，本版本主要面向稳定部署用户，强化以下方面：

1. **关键安全修复**
2. **Gateway 稳定性改进**
3. **性能优化**
4. **新增模型支持**

#### 破坏性变更与迁移注意事项

- 发布说明明确其为 **Gateway-only** 发布，意味着重点是 Gateway 运行面，而不是完整 CLI、插件生态或更新器行为的全面变更。
- 当前数据未提供完整变更清单，因此无法确认具体 API、配置项或插件接口是否发生破坏性调整。
- 建议生产环境升级前：
  - 先在预发布环境验证 Gateway 启动、模型调用、插件加载和会话恢复；
  - 对升级前后状态库、配置和插件来源做备份；
  - 若使用自定义更新流程，避免在升级过程中并发执行 `openclaw doctor --fix`；
  - 对内存敏感型部署，升级后重点观察 RSS、SQLite WAL 和 Worker 内存增长。

---

## 三、项目进展

### 1. 托管更新流程继续收敛

- **PR #205743**：避免包更新过程中 `openclaw doctor --fix` 重启 Gateway。  
  该 PR 已关闭。它针对更新停服与文件替换期间并发 Doctor 可能破坏更新状态的问题，反映维护者正在加强更新流程的互斥与生命周期管理。  
  https://github.com/openclaw/openclaw/pull/205743

- **PR #205760**：修复失败于 2026.11.10 的 pnpm 更新，使后续更新能够完成遗留状态收敛，而不是再次要求用户手工修复。  
  该 PR 仍开放，属于更新状态机继续统一的重要信号。  
  https://github.com/openclaw/openclaw/pull/205760

- **PR #205827**：修复 Windows 下 npm 安装的 Gateway 因残留 Startup 注册项而无法更新的问题。  
  https://github.com/openclaw/openclaw/pull/205827

- **PR #205812**：将 Doctor 修复前状态副本从保留三份改为仅保留最新一份，以减少完整状态存储造成的磁盘占用。  
  https://github.com/openclaw/openclaw/pull/205812

- **设计 Issue #204775**：汇总 prepared-release 更新中的状态、所有权和实施计划，试图减少多个更新方案并行修改同一批文件。  
  https://github.com/openclaw/openclaw/issues/204775

**阶段判断**：项目正从“逐个修补升级错误”转向统一更新路径设计。短期仍会暴露多个旧版本遗留状态兼容问题，但方向正确。

### 2. Gateway 启动与 Worker 稳定性改进

- **PR #205828**：限制 Worker 在短暂 admission 后的无限快速重连，避免每次 hello 重启 admission 超时形成重连风暴。  
  https://github.com/openclaw/openclaw/pull/205828

- **PR #205821**：避免 Windows 启动阶段的 boot probe 同步等待造成约五秒的 Gateway 启动停顿。  
  https://github.com/openclaw/openclaw/pull/205821

- **PR #205818**：Gateway 启动时不再为没有托管 GitHub profile 的用户枚举恢复凭据，减少无意义启动开销。  
  https://github.com/openclaw/openclaw/pull/205818

- **PR #205810**：目录监听失败后，关闭最后一个 watch 时停止辅助进程，避免残留进程继续占用资源。该 PR 已关闭。  
  https://github.com/openclaw/openclaw/pull/205810

- **PR #205807**：在不同客户端支持不同压缩格式时复用相同的 Control UI 静态资源，减少重复读取和缓存副本。  
  https://github.com/openclaw/openclaw/pull/205807

**阶段判断**：启动性能和 Worker 生命周期已成为近期明确的工程重点，但大量问题仍表现为“症状级修复”，核心资源治理尚未完全收口。

### 3. 会话与子 Agent 状态机取得进展

- **PR #205755**：聊天恢复后识别被中断的外层工具调用，避免 Agent 将旧提醒与新的调度结果混淆。该 PR 已关闭。  
  https://github.com/openclaw/openclaw/pull/205755

- **PR #205482**：重构子 Agent 完成记录，尝试以统一规则取代两个交接标记，保证完成结果只交付一次。该 PR 已关闭。  
  https://github.com/openclaw/openclaw/pull/205482

- **PR #205783**：修复 2026.11.10 后大型会话无法再次压缩的问题，根因是压缩准备请求被计入历史池的待处理内存预算。该 PR 已关闭。  
  https://github.com/openclaw/openclaw/pull/205783

- **PR #205800**：修复快速修改附件说明并立即刷新时，仅保留 caption、却静默丢失附件文件的问题。  
  https://github.com/openclaw/openclaw/pull/205800

- **PR #205671**：让长聊天分叉时保留可搜索历史，并避免因子模型输入容量比较而提前失败。该 PR 已关闭。  
  https://github.com/openclaw/openclaw/pull/205671

**阶段判断**：会话连续性和子 Agent “恰好一次”交付语义正在加强，但多个回复丢失问题仍跨越多个版本存在，说明状态机的恢复路径仍需统一。

### 4. 自动化、UI 与安全治理

- **PR #205763**：当自动化实际被阻塞时，不再显示绿色 “Completed”；同时暴露不兼容 reasoning 设置导致任务未执行的问题。  
  https://github.com/openclaw/openclaw/pull/205763

- **PR #205816**：录音没有可用语音或完整转录缺乏有效证据时，不发布确定性会议记录。  
  https://github.com/openclaw/openclaw/pull/205816

- **PR #205820**：提出共享听写词典的设计评审方案，明确共享词汇不应自动发布个人词典内容，也不应将已知集合 ID 视作授权。  
  https://github.com/openclaw/openclaw/pull/205820

- **PR #189559**：修复有效社区 ClawHub 插件被误报为 `provenance-invalid`。该 PR 仍开放但已有较明确的修复方向。  
  https://github.com/openclaw/openclaw/pull/189559

- **PR #198880**：在 secrets migration 中保留其他 Agent 或账户的凭据，避免迁移后出现 `MCP_AUTHORIZATION_RETIRED`。该 PR 已关闭。  
  https://github.com/openclaw/openclaw/pull/198880

---

## 四、社区热点

### 热点 1：Gateway WAL 自动检查点永久阻塞

- **Issue #164294**
- **评论数**：44，当前 Issue 中最高
- **状态**：开放；P2；带 `no-new-fix-pr`、`needs-maintainer-review`
- 链接：https://github.com/openclaw/openclaw/issues/164294

用户报告 `state/openclaw.sqlite` 的 WAL auto-checkpoint 自启动后从未成功完成，持续出现：

- `WAL checkpoint PASSIVE blocked by a reader`
- `checkpointedFrames` 远低于 `logFrames`
- `consecutiveBlocked` 持续增加

**背后诉求**：用户希望 Gateway 不再长期持有不必要的读快照，同时确保状态库能够正常回收 WAL、降低磁盘增长和锁竞争。该问题评论最多，但目前仍缺少明确修复 PR，是维护者应优先推动的积压项。

### 热点 2：Gateway 内存持续增长至 OOM

- **Issue #91588**：44 条评论，开放，P0  
  https://github.com/openclaw/openclaw/issues/91588
- **Issue #159662**：28 条评论，开放，P1  
  https://github.com/openclaw/openclaw/issues/159662
- **Issue #154812**：16 条评论，开放，P1  
  https://github.com/openclaw/openclaw/issues/154812
- **Issue #181432**：16 条评论，开放，P1  
  https://github.com/openclaw/openclaw/issues/181432

共同现象包括：

- RSS 从约 350 MB、1.9 GB 起步，持续升至 8–15.5 GB；
- 最终触发系统 OOM、Gateway 重启或 shutdown timeout；
- 内存增长不完全由 V8 heap 解释；
- `prepared-model-catalog.worker.js` 被报告以约 4–5 GB/小时增长；
- 空闲或轻负载下也可能发生。

**背后诉求**：用户需要的是**可归因、可限额、可观测且能自动恢复**的 Gateway 内存生命周期，而不只是调高容器或主机内存限制。当前相关问题普遍缺少明确 fix PR，属于最高风险积压。

### 热点 3：托管升级激活失败与 Doctor 状态冲突

- **Issue #197083**：40 条评论，P0  
  https://github.com/openclaw/openclaw/issues/197083
- **Issue #200606**：21 条评论，P1  
  https://github.com/openclaw/openclaw/issues/200606
- **Issue #203442**：11 条评论，P1  
  https://github.com/openclaw/openclaw/pull/203442
- **Issue #204816**：9 条评论，P1  
  https://github.com/openclaw/openclaw/pull/204816

典型问题包括：

- 候选版本验证通过，但激活阶段 Doctor 因 WAL 发布、插件迁移、配置校验而失败；
- 更新器拒绝回滚，却留下插件或状态未完全迁移的中间态；
- 2026.11.5 候选版本报告 `migration-input conflict` 且 `changed=[]`；
- 2026.11.4 → 2026.11.8 出现 `Invalid config` 并触发回滚。

**背后诉求**：用户期待升级具备原子性：要么完整激活，要么完整恢复；不希望出现“核心已启动、插件/状态未迁移、只能手工修复”的状态。PR #205760、#205827、#205743 等表明维护者正在处理该方向，但整体升级状态机仍未稳定。

### 热点 4：回复丢失与 Agent 恢复失败

- **Issue #148707**：23 条评论，开放，P1  
  https://github.com/openclaw/openclaw/issues/148707
- **Issue #196199**：20 条评论，开放，P1  
  https://github.com/openclaw/openclaw/issues/196199
- **Issue #185085**：9 条评论，开放，P1  
  https://github.com/openclaw/openclaw/pull/185085
- **Issue #190563**：13 条评论，开放，P0  
  https://github.com/openclaw/openclaw/pull/190563

用户场景包括：

- 同一会话中的后续运行挤掉正在执行的 turn，最终回复完全丢失；
- 原生 Codex helper 完成后无法恢复父 Agent，导致 goal 暂停、用户被锁在会话外；
- 后台 `exec` completion wake 因 `SESSION_DELIVERY_GENERATION_UNAVAILABLE` 丢失；
- 已暂停 Codex 聊天因 provider review 与 native thread 不匹配而无法恢复。

**背后诉求**：核心诉求是持久、可追踪的运行生命周期：任务启动、工具调用、子 Agent 完成、恢复、交付必须具有关联标识和幂等语义。PR #205755 和 #205482 有助于改善，但现有问题跨版本持续出现，尚未形成统一根治。

### 热点 5：Memory 与 USER 上下文被静默排除

- **Issue #153426**：26 条评论，P0  
  https://github.com/openclaw/openclaw/issues/153426
- **Issue #158912**：11 条评论，P0  
  https://github.com/openclaw/openclaw/issues/158912

问题指向 `MEMORY.md` / `USER.md` 的 provenance ratchet：文件一旦被标记为 untrusted，可能永久退出 bootstrap 注入，且没有诊断、CLI 或恢复入口。

**背后诉求**：安全机制不能以“静默改变 Agent 核心人格与长期记忆”为代价。用户需要可解释、可恢复、可审计的信任状态转换，尤其是普通网页搜索等行为不应导致记忆被永久排除。

---

## 五、Bug 与稳定性

### P0：需最高优先级处理

| 问题 | 状态与影响 | Fix PR / 进展 |
|---|---|---|
| [#91588 Gateway RSS 350 MB→15.5 GB 并 OOM](https://github.com/openclaw/openclaw/issues/91588) | 开放；持续内存泄漏、反复 OOM 重启 | 未见明确 fix PR；#170496、#157712 涉及 DB 快照泄漏但已关闭，尚不能覆盖全部 RSS 路径 |
| [#159662 prepared-model-catalog worker 内存泄漏](https://github.com/openclaw/openclaw/issues/159662) | 开放；约 4–5 GB/h，provider 无关 | 未见明确 fix PR |
| [#197083 Doctor WAL publication 验证失败，更新未完全收尾](https://github.com/openclaw/openclaw/issues/197083) | 开放；发布阻断、外部插件可能停留在不一致状态 | [#205760](https://github.com/openclaw/openclaw/pull/205760) 等更新链路 PR 提供间接修复方向，但未见直接关闭该问题的 PR |
| [#153426 MEMORY.md/USER.md 被永久排除](https://github.com/openclaw/openclaw/issues/153426) | 开放；会话人格和长期记忆缺失，且无可恢复路径 | 未见明确 fix PR；[#158912](https://github.com/openclaw/openclaw/issues/158912) 反映同一症状 |
| [#190563 无法恢复已暂停的 Codex chat](https://github.com/openclaw/openclaw/issues/190563) | 开放；provider review/native thread 绑定不一致 | 未见明确 fix PR |
| [#158912 MEMORY.md bootstrap 注入缺失](https://github.com/openclaw/openclaw/issues/158912) | 开放；文档与实际行为不一致 | 未见明确 fix PR |

### P1：高优先级可靠性与数据完整性问题

| 问题 | 状态与影响 | Fix PR / 进展 |
|---|---|---|
| [#164294 WAL auto-checkpoint 永不完成](https://github.com/openclaw/openclaw/issues/164294) | 开放；读快照长期阻塞 checkpoint | 未见明确 fix PR |
| [#154812 V8 heap 外 RSS 失控](https://github.com/openclaw/openclaw/issues/154812) | 开放；OOM 与 shutdown timeout | 未见明确 fix PR |
| [#181432 启动 RSS 约 1.9 GB，SQLite 事务超时](https://github.com/openclaw/openclaw/issues/181432) | 开放；ARM64/受限环境风险明显 | 未见明确 fix PR |
| [#148707 被后续运行挤掉的 turn 回复丢失](https://github.com/openclaw/openclaw/issues/148707) | 开放；无自动重试 | [#205755](https://github.com/openclaw/openclaw/pull/205755) 已关闭，针对恢复时工具执行识别提供部分改进 |
| [#196199 Codex helper 无法恢复父 Agent](https://github.com/openclaw/openclaw/issues/196199) | 开放；goal 暂停、用户锁死 | [#205482](https://github.com/openclaw/openclaw/pull/205482) 已关闭，涉及子 Agent 完成交付语义重构 |
| [#200606 2026.11.5 候选 Doctor 被插件迁移冲突阻塞](https://github.com/openclaw/openclaw/issues/200606) | 开放；稳定版升级受阻 | [#205760](https://github.com/openclaw/openclaw/pull/205760) 开放，可能覆盖部分升级遗留状态问题 |
| [#200756 Windows beta.2→beta.4 package-swap 失败](https://github.com/openclaw/openclaw/issues/200756) | 开放；更新失败，回滚树变化 | [#205827](https://github.com/openclaw/openclaw/pull/205827) 聚焦 Windows 启动项干扰，属于相关修复 |
| [#204816 激活阶段 Doctor Invalid config 后回滚](https://github.com/openclaw/openclaw/issues/204816) | 开放；候选验证与实际激活结果不一致 | 未见直接 fix PR |
| [#185085 exec completion wake 丢失且不重试](https://github.com/openclaw/openclaw/issues/185085) | 开放；相关修复未进入稳定版 | 报告称 #177063 已在 main 修复，但尚未进入当前稳定版本 |
| [#160485 插件模块编译导致 60 秒启动阶段](https://github.com/openclaw/openclaw/issues/160485) | 开放；Windows 启动性能严重退化 | 未见明确 fix PR |
| [#171831 Windows 启动 55 秒→320 秒、单轮阻塞 112 秒](https://github.com/openclaw/openclaw/issues/171831) | 开放；可能造成看门狗误杀或崩溃循环 | [#205821](https://github.com/openclaw/openclaw/pull/205821) 开放，仅覆盖 boot probe 停顿这一部分 |
| [#203442 激活 Doctor 无法加载 deepseek plugin source](https://github.com/openclaw/openclaw/issues/203442) | 开放；插件在更新后不可用 | 未见直接 fix PR |

### P2：重要但影响范围相对受限的问题

- [#123792 CLI backend 助手消息重复渲染](https://github.com/openclaw/openclaw/issues/123792)：Control UI 与 Android 可能显示实时分块和聚合记录两份内容。  
  https://github.com/openclaw/openclaw/issues/123792
- [#127195 16 处“changed while starting work”缺少原因码](https://github.com/openclaw/openclaw/issues/127206)：生产环境无法定位竞态原因。  
  https://github.com/openclaw/openclaw/issues/127195
- [#141172 首次 session commit 前崩溃泄漏 agent.run.started](https://github.com/openclaw/openclaw/issues/141172)：缺少 agent.run.finished，后续轨迹写入失败。  
  https://github.com/openclaw/openclaw/issues/141172
- [#170562 requester settle wake 无法通过受支持方式清理](https://github.com/openclaw/openclaw/issues/170562)：仍可能需要手工修改状态数据库。  
  https://github.com/openclaw/openclaw/issues/170562
- [#150238 超大会话中的 Skill Workshop 缺少上下文预算策略](https://github.com/openclaw/openclaw/issues/150238)：可能挤占前台模型上下文。  
  https://github.com/openclaw/openclaw/issues/150238
- [#121558 Cron narration 与正式消息融合](https://github.com/openclaw/openclaw/issues/121558)：用户收到内部运行旁白。  
  https://github.com/openclaw/openclaw/issues/121558
- [#112638 session maintenance 无法约束 thread/channel 条目](https://github.com/openclaw/openclaw/issues/112638)：磁盘和条目上限可被绕过。  
  https://github.com/openclaw/openclaw/issues/112638
- [#161379 prepared model catalog 刷新循环占满 CPU 核](https://github.com/openclaw/openclaw/issues/161379)：目录 TTL 短于 Agent 刷新耗时会形成持续轮询。  
  https://github.com/openclaw/openclaw/issues/161379
- [#192547 受限 ARM64 主机 Gateway 启动内存过高](https://github.com/openclaw/openclaw/issues/192547)：服务虽可 ready，但首个模型响应前可能 OOM。  
  https://github.com/openclaw/openclaw/issues/192547
- [#164065 Telegram requireMention 未限制群组裸斜杠命令](https://github.com/openclaw/openclaw/issues/164065)：多 Bot 群组可能误唤醒其他 Agent。  
  https://github.com/openclaw/openclaw/issues/164065
- [#165615 Discord Components V2 消息无法编辑](https://github.com/openclaw/openclaw/issues/165615)：editMessage 参数与消息类型冲突。  
  https://github.com/openclaw/openclaw/issues/165615
- [#143206 Dreaming 有失败和待处理 narrative 仍记录为成功](https://github.com/openclaw/openclaw/issues/143206)：失败任务不会自动重试。  
  https://github.com/openclaw/openclaw/issues/143206
- [#162026 Dia 标签组未稳定时共享卡死](https://github.com/openclaw/openclaw/issues/162026)：浏览器扩展工作流无法完成。  
  https://github.com/openclaw/openclaw/issues/162026

### 已关闭或已有明确修复方向的 Bug

- [#182891 Prompt cache 每次从 N 降为 0](https://github.com/openclaw/openclaw/issues/182891)：已关闭。  
- [#177094 系统通知镜像挤占最后回答](https://github.com/openclaw/openclaw/issues/177094)：已关闭。  
- [#191847 512 MB SQLite Worker OOM](https://github.com/openclaw/openclaw/issues/191847)：已关闭。  
- [#170496 每次只读访问都复制状态数据库](https://github.com/openclaw/openclaw/issues/170496)：已关闭；[#157712](https://github.com/openclaw/openclaw/issues/157712) 同类 CLI 快照泄漏也已关闭。  
- [#205783 大型会话无法压缩](https://github.com/openclaw/openclaw/pull/205783)：PR 已关闭，针对 2026.11.10 回归给出根因和修复。  
- [#205800 附件快速编辑后丢失](https://github.com/openclaw/openclaw/pull/205800)：修复 PR 开放。  

---

## 六、功能请求与路线图信号

### 1. 准备式更新与可恢复升级

- **Issue #204775**：集中定义 prepared-release 的状态、所有权和实施计划。  
  https://github.com/openclaw/openclaw/issues/204775
- **PR #205760、#205827、#205743、#205812** 共同表明，更新器的事务性、并发互斥、Windows 绑定识别和备份空间治理正在成为近期发布主线。

**判断**：很可能进入下一稳定版本，但会以持续发布或拆分修复的形式逐步落地，而不是一次性完成全部状态机重构。

### 2. 受限上下文下的 Skill Workshop 策略

- **Issue #150238**：为超大会话增加受支持的 context budget 或 skip policy。  
  https://github.com/openclaw/openclaw/issues/150238

**判断**：需求明确、技术边界清晰，且与近期上下文预算和会话压缩工作高度相关，进入下一版本的可能性较高。

### 3. 集中化会话命名及跨渠道持久化

- **Issue #103067**：统一聊天会话命名，并定义 ACP/子 Agent 会话生命周期及跨渠道持久化。  
  https://github.com/openclaw/openclaw/issues/103067

**判断**：属于平台级架构调整。短期可能先以局部规范化落地，完整跨渠道持久化更可能进入较中期版本。

### 4. Doctor 修复 stranded requester settle wake

- **Issue #170562**：提供受支持的诊断和清理入口，避免手工修改状态数据库。  
  https://github.com/openclaw/openclaw/issues/170562

**判断**：与近期 Doctor 和状态恢复工作高度一致，适合近期版本修复。

### 5. 多个策略别名映射到同一模型

- **Issue #140213**：允许多个 policy alias 指向同一配置模型。  
  https://github.com/openclaw/openclaw/issues/140213

**判断**：已有明确决策包和收敛后的范围，属于可实现的中等优先级功能；可能随模型策略配置重构进入后续版本。

### 6. 共享听写词典

- **PR #205820**：让团队显式选择共享词典，同时防止个人词条泄漏和错误授权。  
  https://github.com/openclaw/openclaw/pull/205820

**判断**：目前仍处于设计评审阶段并标记为需要 proof，不一定进入下一版本。

### 7. 不可绕过的出站策略

- **Issue #56349**：所有出站消息统一经过单一、可执行的发送前策略边界。  
  https://github.com/openclaw/openclaw/issues/56349

**判断**：安全价值很高，但涉及全部渠道和 Agent 工具路径，改造面较大；更可能作为中长期安全架构目标。

### 8. Android 通知体验

- **Issue #143387**：会话感知通知、来源标签、跨设备抑制。  
  https://github.com/openclaw/openclaw/issues/143387

作者已表示不再推进实现或准备 PR，因此当前不应列入近期发布承诺。

---

## 七、用户反馈摘要

### 核心痛点

1. **“能启动，不代表能稳定运行”**  
   多名用户报告 Gateway 虽可完成启动或首个请求，却随后持续增长至数 GB，最终 OOM。对生产用户而言，内存可预测性比新功能优先级更高。

2. **“升级过程不可靠且难以恢复”**  
   用户经常遇到候选验证通过、激活失败、无法自动回滚或只回滚核心但不回滚插件/状态的中间状态。手工修改状态库成为常见恢复手段。

3. **“任务完成了，但用户看不到结果”**  
   回复丢失不仅影响单次消息，还可能让父 Agent、goal 和会话进入无法恢复状态，是当前最影响信任的可靠性问题之一。

4. **“安全机制不能静默改变 Agent 的核心身份”**  
   `MEMORY.md`、`USER.md` 被排除后没有提示，用户难以判断 Agent 为什么“失忆”。这造成信任与可观测性双重问题。

5. **“社区安装被误判为恶意来源”**  
   有效 ClawHub 插件仍可能被标记为 `provenance-invalid`，增加安装成本并降低社区插件信任。  
   https://github.com/openclaw/openclaw/pull/189559

### 典型使用场景

- 24×7 运行的自托管个人 AI 助手；
- Telegram、Discord 等多渠道 Bot；
- 多 Agent、Codex helper 与后台 `exec` 协作；
- ARM64 小型主机、1 GiB 内存容器；
- Windows 计划任务及 npm/pnpm 托管升级；
- 团队知识库、语音会议记录和 Workboard 协作；
- 长期维护 `MEMORY.md` / `USER.md` 的个人助理。

### 满意与积极信号

- 用户愿意投入高质量复现、日志、性能采样和测试证据，推动了多个 P0/P1 问题的定位。
- PR #205671、#205783、#205755、#205482 等已经针对长会话、历史搜索、压缩恢复和子 Agent 交付做出实质性改进。
- Web UI 自动化状态展示、会议证据质量、共享词典授权等 PR 表明项目开始重视“正确呈现”，而不只是后台任务成功。
- 测试、proof、maintainer-review 标签大量出现，说明合并门槛和验证意识较强。

### 不满点

- 同一类问题跨多个版本长期存在；
- 一些高优先级 Issue 被标记为 `stale`、`needs-maintainer-review` 或缺少明确 fix PR；
- 升级错误文本和状态暴露不够一致，用户难以判断下一步；
- 严重问题缺少官方状态页、已知版本范围和临时缓解方案。

---

## 八、待处理积压

### 1. 高风险长期积压

1. **Gateway 内存泄漏与 OOM 组合问题**  
   - [#91588](https://github.com/openclaw/openclaw/issues/91588)  
   - [#159662](https://github.com/openclaw/openclaw/issues/159662)  
   - [#154812](https://github.com/openclaw/openclaw/issues/154812)  
   - [#181432](https://github.com/openclaw/openclaw/issues/181432)  
   **建议**：建立统一 RSS 分解、heap snapshot、Worker 生命周期和 native allocation 仪表盘，并明确一个主责 Issue。

2. **WAL 检查点与只读快照问题**  
   - [#164294](https://github.com/openclaw/openclaw/issues/164294)  
   - [#170496](https://github.com/openclaw/openclaw/issues/170496)，已关闭  
   - [#157712](https://github.com/openclaw/openclaw/issues/157712)，已关闭  
   **建议**：确认关闭项是否已覆盖 Gateway 内部长期 reader；否则需继续跟踪 WAL 阻塞。

3. **Memory provenance ratchet**  
   - [#153426](https://github.com/openclaw/openclaw/issues/153426)  
   - [#158912](https://github.com/openclaw/openclaw/issues/158912)  
   **建议**：明确产品决策、诊断命令与恢复策略，避免两个 Issue 长期并行。

4. **Codex 和子 Agent 恢复/交付一致性**  
   - [#196199](https://github.com/openclaw/openclaw/issues/196199)  
   - [#190563](https://github.com/openclaw/openclaw/issues/190563)  
   - [#185085](https://github.com/openclaw/openclaw/issues/185085)  
   - [#148707](https://github.com/openclaw/openclaw/issues/148707)  
   **建议**：将已关闭的 #205482、#205755 与这些用户报告做一次回归确认。

### 2. 长期开放且需要维护者决策

- [#127195 缺少“changed while starting work”的原因码](https://github.com/openclaw/openclaw/issues/127195)：建议引入结构化错误码，避免生产排障只能靠字符串匹配。
- [#141172 首次提交前崩溃留下孤儿运行记录](https://github.com/openclaw/openclaw/issues/141172)：需要明确启动记录与完成记录的补偿事务。
- [#170562 stranded requester settle wake 清理工具](https://github.com/openclaw/openclaw/issues/170562)：与现有 Doctor 修复能力结合。
- [#112638 session maintenance 容量上限失效](https://github.com/openclaw/openclaw/issues/112638)：应明确受保护会话的例外与总容量上限。
- [#103067 会话命名与跨渠道生命周期](https://github.com/openclaw/openclaw/issues/103067)：需要产品与架构决策。
- [#140213 多策略别名映射模型](https://github.com/openclaw/openclaw/issues/140213)：已有范围收敛，适合排期。
- [#56349 统一出站策略边界](https://github.com/openclaw/openclaw/issues/56349)：长期安全架构项，需要 owner 和分阶段计划。

### 3. PR 队列风险

- **待合并 PR 共 276 条**，明显高于当日关闭/合并的 224 条，积压仍在扩大。
- 多条 PR 标记为 `ready for maintainer look`、`needs proof`、`waiting on author`：
  - [#205760](https://github.com/openclaw/openclaw/pull/205760)
  - [#205763](https://github.com/openclaw/openclaw/pull/205763)
  - [#205820](https://github.com/openclaw/openclaw/pull/205820)
  - [#205783](https://github.com/openclaw/openclaw/pull/205783)，已关闭
- **PR #205826、#205819** 是明确的截图或测试证据 fixture，摘要注明不要合并；维护者应将其与产品 PR 分离，避免阻塞主队列。
- **PR #205657** 覆盖大量扩展和测试库存，虽为 XL 变更，但直接关联已提交的代码卫生工作；应设置独立审阅窗口，避免与高优先级稳定性修复竞争。

---

## 结论

OpenClaw 今日呈现出“**开发吞吐很高、稳定性债务集中暴露、维护者正在重建更新与运行状态机**”的特征。PR 数量和修复覆盖面表明项目并没有停滞；相反，团队正在处理更新器、Windows 启动、Worker 重连、会话压缩、子 Agent 交付和 UI 自动化等横跨多个子系统的问题。

但项目健康度仍不宜评为“稳定”：多个 **P0 内存、上下文注入和更新原子性问题**持续开放，WAL 与消息丢失问题跨版本复现，且 276 条待合并 PR 已形成显著审阅压力。未来一到两个版本的关键不只是再发布多少功能，而是能否做到：

1. 将 Gateway 内存增长定位为可复现、可观测的单一根因；
2. 让升级真正具备原子激活与完整回滚；
3. 统一 Agent 运行、恢复和结果交付语义；
4. 为高风险长期 Issue 指定 owner、目标版本和验证标准；
5. 收缩 PR 队列，优先合并能解除生产事故的修复。

**总体健康度：7/10。活跃度和修复能力较强，但稳定性、升级安全与维护响应速度仍是主要扣分项。**

---

## 横向生态对比

# 个人 AI 助手 / 自主智能体开源生态横向对比报告

**数据日期：2026-11-26｜统计窗口：过去 24 小时**

## 1. 生态全景

生态整体呈现“**平台化扩张与可靠性收敛并行**”的态势：OpenClaw、Hermes Agent、QwenPaw 和 LobsterAI 都在强化插件、模型、多渠道、持久记忆与跨会话能力，而 NanoBot、PicoClaw 更偏向轻量个人助手与桌面端体验。与此同时，生产级瓶颈已经从“能否执行任务”转向“能否长期稳定运行”：内存泄漏、升级原子性、消息丢失、任务恢复、Profile 路由和权限治理成为高频主题。OpenClaw 的社区规模和吞吐明显领先，但 276 个待合并 PR 也带来较高的维护压力；多数项目则处于**功能快速迭代后进入架构收敛与质量巩固**的阶段。

---

## 2. 各项目活跃度对比

> 统计口径为过去 24 小时 GitHub 更新；健康度结合活跃度、积压、发布状态和稳定性风险综合评估。

| 项目 | Issues 更新 | PR 更新 | Release | 活跃度与积压 | 健康度 |
|---|---:|---:|---|---|---|
| **OpenClaw** | 365（248 活跃 / 117 关闭） | 500（276 待合并 / 224 合并或关闭） | `v2026.10.34`，Gateway-only extended-stable | 社区与吞吐最高，但 P0/P1 积压和 PR 队列压力突出 | **7/10** |
| **NanoBot** | 7（5 活跃 / 2 关闭） | 23（3 待合并 / 20 合并或关闭） | 无 | 修复吞吐高，队列较轻；Provider、多模态等边缘问题待闭环 | **8/10** |
| **PicoClaw** | 0 | 4（0 待合并 / 4 关闭） | 无 | 批量归并 11 个历史修复，代码前进但用户侧无版本；社区极静默 | **6/10** |
| **IronClaw** | 0 | 0 | 无 | 过去 24 小时无活动，无法判断是稳定还是维护停滞 | **待观察** |
| **LobsterAI** | 0 | 23（0 待合并 / 23 合并或关闭） | 无 | 高强度架构扩张，PR 全部闭环；缺 Issue 反馈且无版本验证 | **8/10** |
| **QwenPaw** | 28（16 活跃 / 12 关闭） | 50（29 待合并 / 21 合并或关闭） | 无 | 高活跃、修复密集；大型重构和 29 个待合并 PR 带来回归压力 | **7/10** |
| **Hermes Agent** | 50（44 活跃 / 6 关闭） | 50（23 待合并 / 27 合并或关闭） | 1 个 Canary：`v0.23.4` | 路线讨论深、创新快；Gateway、Profile、Worker 生命周期问题集中 | **7/10** |
| **OpenHuman** | 3（2 活跃 / 1 关闭） | 1（1 待合并） | 无 | 活跃度偏低；CortexDB 记忆、BYOK 和隐私问题缺少可见交付 | **5/10，需关注** |

### 活跃度分层

- **第一梯队：OpenClaw、Hermes Agent、QwenPaw**  
  社区讨论、PR 吞吐和架构改造规模最大，但也承受最高的稳定性与评审压力。

- **第二梯队：NanoBot、LobsterAI**  
  PR 闭环率高、队列轻，适合快速发布验证。NanoBot 偏 WebUI/执行器稳定性；LobsterAI 偏桌面端平台能力建设。

- **第三梯队：PicoClaw、OpenHuman**  
  PicoClaw 是“维护者集中清理但发布滞后”；OpenHuman 是“核心记忆链路问题突出、交付速度偏低”。

- **观察项：IronClaw**  
  24 小时无活动，信息不足，不宜直接判断为项目健康或停滞。

---

## 3. OpenClaw 在生态中的定位

### 3.1 优势

1. **社区规模与开发吞吐明显领先**  
   单日更新 365 条 Issue、500 条 PR，规模约为第二梯队项目的十至二十倍。多渠道、多 Provider、插件、升级器、Gateway、会话状态机均有持续贡献，说明其已形成较强的社区协作网络。

2. **覆盖完整个人 Agent 基础设施**  
   同时覆盖 Gateway、插件生态、IM 渠道、记忆、自动化、模型供应商、语音、WebUI 和托管更新，是当前样本中最接近“全栈个人 AI 助手平台”的项目。

3. **稳定发布线意识较强**  
   `v2026.10.34` 采用 Gateway-only `extended-stable`，优先发布安全、稳定性和性能修复，而非盲目扩张功能。

4. **已进入平台治理阶段**  
   更新事务性、状态数据库、插件 provenance、统一出站策略、Agent 运行身份和恢复语义等议题，表明项目正从功能型助手向长期运行的 Agent Runtime 演进。

### 3.2 与同类项目的技术路线差异

| 项目 | 核心路线 |
|---|---|
| **OpenClaw** | Gateway 中心、多渠道、多 Agent、插件与托管更新，强调完整平台能力 |
| **Hermes Agent** | 个人 Agent Runtime + Desktop + A2A + Gateway + 可审计持久记忆，强调主动性和多 Profile |
| **QwenPaw** | ACP/原生双执行路径、模型与 Agent 配置统一、Video Memory、插件和 Console 生态 |
| **LobsterAI** | 桌面端、DSH 运行时、插件平台、模型发现、IM 办公自动化，强调企业级连接与审批 |
| **NanoBot** | 轻量 WebUI、SDK、Provider 兼容和执行器隔离，偏向轻量个人助手 |
| **PicoClaw** | 小型自托管、边缘/桌面部署，强调轻量与低成本，但社区和发布节奏较弱 |
| **OpenHuman** | 个人身份、记忆、BYOK 与本地/云模型接入，强调数据自主和长期记忆 |
| **IronClaw** | 24 小时无数据，暂无法判断定位 |

### 3.3 社区规模判断

- OpenClaw 是样本中唯一达到“**数百条 Issue/PR 日更新**”量级的项目。
- Hermes Agent 与 QwenPaw 已形成高密度核心贡献者社区，但规模仍明显小于 OpenClaw。
- NanoBot、LobsterAI、PicoClaw 的社区参与更依赖维护者或少量活跃贡献者。
- OpenHuman 的社区讨论规模较小，但 BYOK、隐私和长期记忆具有高价值用户需求。

OpenClaw 的优势是规模与生态宽度，短板是规模和复杂度带来的稳定性债务：**276 个待合并 PR、多个无明确 fix PR 的 P0/P1 问题，以及升级、消息交付和内存治理尚未完全收敛。**

---

## 4. 共同关注的技术方向

| 技术方向 | 涉及项目 | 共同诉求 |
|---|---|---|
| **持久记忆与上下文压缩** | OpenClaw、Hermes Agent、QwenPaw、OpenHuman | 压缩后不丢上下文；文件可重新读取；来源可追踪；记忆写入稳定；避免摘要失真 |
| **多模型、多 Provider 与协议兼容** | OpenClaw、NanoBot、LobsterAI、QwenPaw、Hermes Agent、OpenHuman | 统一模型目录、发现、配置和错误语义；兼容 OpenAI、Anthropic、Google、Gemini、Codex、OCI 等协议 |
| **插件与扩展生态平台化** | OpenClaw、LobsterAI、QwenPaw、Hermes Agent | 插件安装、启停、版本检查、热更新、来源校验、工具契约和主题能力标准化 |
| **IM 与跨渠道会话一致性** | OpenClaw、Hermes Agent、QwenPaw、LobsterAI、NanoBot | 保持线程、Profile、Agent、附件和结果路由一致；区分群公告与真实提及；防止消息误回复 |
| **任务生命周期与可恢复执行** | OpenClaw、Hermes Agent、QwenPaw、LobsterAI | 启动、执行、取消、超时、恢复、重试和最终交付必须可追踪、幂等，避免重复副作用 |
| **升级与迁移可靠性** | OpenClaw、LobsterAI、Hermes Agent、PicoClaw | 原子激活、完整回滚、迁移幂等、Windows 兼容；避免验证通过但实际激活失败 |
| **Gateway / Worker 资源治理** | OpenClaw、Hermes Agent、NanoBot、QwenPaw | 控制内存、Worker 重连、任务队列、并发隔离，并提供可观测的限额与恢复 |
| **配置作用域与继承语义** | QwenPaw、Hermes Agent、LobsterAI、OpenHuman | 明确全局、Agent、会话、Profile 各自的配置边界；避免模型、记忆和权限串用 |
| **权限、隐私与可审计性** | OpenClaw、OpenHuman、LobsterAI、Hermes Agent | 默认最小权限；敏感数据不上传或需显式 opt-in；工具执行可解释、可撤销、可追溯 |
| **跨平台部署适配** | OpenClaw、PicoClaw、LobsterAI、NanoBot、QwenPaw、Hermes Agent | Windows、ARM64、Docker、反向代理、Base Path、杀毒软件和文件锁兼容 |

其中最值得重视的共性信号是：**“上下文连续性 + 任务幂等 + 权限可审计”正在取代单纯模型能力，成为个人 Agent 的下一阶段核心竞争点。**

---

## 5. 差异化定位分析

### OpenClaw：全能型个人 Agent 平台

- **功能侧重**：Gateway、多 IM、插件、自动化、记忆、语音、多模型、托管更新。
- **目标用户**：希望部署完整个人 AI 操作层、连接多种渠道并持续扩展插件的 power user。
- **架构特征**：中心化 Gateway + 多 Profile/Worker + 插件与渠道生态。
- **关键优势**：生态宽度、社区规模、集成数量。
- **关键风险**：内存、WAL、升级状态机、消息交付，复杂度最高。

### Hermes Agent：长期个人 Agent Runtime

- **功能侧重**：Desktop、Gateway、A2A、Kanban Worker、主动任务、长期记忆、插件目录。
- **目标用户**：希望拥有可扩展桌面工作站、多 Agent 协作和持久上下文的高级个人用户。
- **架构特征**：Gateway/A2A/Desktop 多 Profile，加持久记录与 provenance RFC。
- **关键优势**：长期记忆和主动性路线最系统，桌面产品化深入。
- **关键风险**：Profile 路由、A2A 状态、Windows Worker 生命周期仍不统一。

### QwenPaw：模型与会话配置统一的 Agent 平台

- **功能侧重**：ACP、原生执行、模型配置、Video Memory、插件主题、Docker/Console。
- **目标用户**：需要多模型、Creator/视频理解、MCP 和可观测用量的开发者。
- **架构特征**：ACP + 原生会话配置、Console/API、插件和渠道共同演进。
- **关键优势**：模型协议适配、会话隔离和部署适配推进快。
- **关键风险**：Windows ReMe、Code Mode、媒体块污染上下文，以及 29 个待合并 PR。

### LobsterAI：桌面办公自动化平台

- **功能侧重**：DSH 运行时、插件热更新、模型发现、网易邮箱 MCP、IM 权限与审批。
- **目标用户**：需要把邮件、IM、定时任务和 Agent 执行结合的桌面办公用户。
- **架构特征**：Electron 桌面端 + DSH Host/Worker + 插件、模型和 IM 渠道。
- **关键优势**：办公连接器、权限预设和企业工作流集成突出。
- **关键风险**：23 条大改集中合入但未发布，跨模块回归和迁移风险较高。

### NanoBot：轻量、快速修复的 WebUI 助手

- **功能侧重**：WebUI、SDK、执行器、Provider、MCP、配置管理。
- **目标用户**：偏好轻量部署、快速迭代和可视化操作的个人开发者。
- **架构特征**：SDK 直接/流式路径逐步统一，前后端状态职责重构。
- **关键优势**：PR 闭环率高，前端和执行器体验改善快。
- **关键风险**：Gemini 并行工具调用、大图重试、Windows TUI 等边缘场景。

### PicoClaw：轻量自托管与边缘助手

- **功能侧重**：小型设备、本地运行、低资源 Web 启动器。
- **目标用户**：希望以较低资源运行个人 Agent 的自托管用户。
- **架构特征**：规模较小、由核心维护者主导。
- **关键优势**：维护动作集中、当前待合并 PR 为零。
- **关键风险**：无 release、社区贡献静默关闭、修复只进入主干，外部贡献者激励不足。

### OpenHuman：数据自主型个人助手

- **功能侧重**：BYOK、CortexDB 持久记忆、本地/云模型、个人身份与隐私。
- **目标用户**：重视数据控制、自有模型密钥和长期个人记忆的用户。
- **架构特征**：BYOK Provider + CortexDB 记忆层。
- **关键优势**：数据自主和私有部署方向明确。
- **关键风险**：核心记忆写入的 actor/scope 映射故障，以及追踪数据默认上传带来的隐私信任问题。

---

## 6. 社区热度与成熟度

### 快速迭代阶段

- **OpenClaw**：功能和架构扩张最快，但已进入“高速迭代下的质量收敛期”。
- **Hermes Agent**：A2A、Desktop、主动任务、记忆治理同时推进，创新密度高。
- **QwenPaw**：Video Memory、Code Mode、模型作用域和多渠道并行推进。
- **LobsterAI**：插件、模型、IM 和 DSH 平台能力快速扩张。

### 质量巩固阶段

- **NanoBot**：高比例 PR 已关闭或合并，正在集中处理 WebUI、执行器、Provider 和配置一致性。
- **PicoClaw**：从历史 PR 清理转向发布整理，理论上属于收敛阶段，但 release 缺失削弱了实际交付。
- **OpenHuman**：核心记忆和隐私问题需要优先收敛，而非继续扩张功能。

### 社区透明度与用户验证

- **最成熟**：OpenClaw、Hermes Agent、QwenPaw，拥有大量 Issue 复现、评论和修复 PR；但“问题多”本身也说明规模复杂。
- **工程效率较高**：NanoBot、LobsterAI，PR 闭环率分别约 87% 和 100%。
- **社区最薄弱**：PicoClaw；唯一外部功能贡献被 stale 关闭且没有解释。
- **交付透明度不足**：OpenHuman 的隐私 Issue 已关闭，但缺少可见修复 PR 和发布说明，无法确认是否真正解决。

---

## 7. 值得关注的趋势信号

### 7.1 竞争重心从“模型调用”转向“运行时可靠性”

用户的主要痛点不再是 Agent 能否调用模型，而是：

- 上下文压缩后是否还能继续工作；
- Gateway 重启后任务是否恢复；
- 消息是否只交付一次；
- 工具调用是否重复执行；
- 升级失败能否完整回滚。

这会推动行业为任务引入统一的 **Run ID、幂等键、状态机、超时与取消语义、最终结果对账机制**。

### 7.2 长期记忆将向“可审计文件系统”演进

OpenClaw 的 `MEMORY.md` provenance ratchet、Hermes 的 Doc-Chain RFC、QwenPaw 的 Video Memory，以及 OpenHuman 的 CortexDB 都指向同一趋势：

> 记忆不再只是“摘要文本”，而是带来源、权限、保留策略、可重读能力和可解释状态的记录层。

未来竞争关键将是：用户能否知道 Agent **记住了什么、为什么记住、谁可以修改，以及如何纠正或删除**。

### 7.3 插件生态进入“安全治理期”

OpenClaw 的 provenance 误报、LobsterAI 的安装/热更新、Hermes 的插件版本固定、QwenPaw 的主题能力说明插件已从简单扩展转向平台基础设施。

下一阶段重点将包括：

- 来源与签名验证；
- 版本锁定及回滚；
- 权限声明；
- 工具调用契约；
- 插件隔离和资源限制。

### 7.4 多 Profile 与多渠道会话必须采用统一身份模型

Hermes 的命名 Profile、OpenClaw 的 Agent/会话、QwenPaw 的 Agent/会话模型、LobsterAI 的桌面与 IM 会话都暴露出类似问题：设置入口、路由、恢复和统计使用的身份不一致。

未来平台需要明确区分：

- 全局配置；
- Agent 默认配置；
- 会话覆盖配置；
- Profile/机器/渠道路由；
- 持久记忆作用域。

### 7.5 “受控主动性”比“完全自主”更容易获得用户信任

Hermes 的主动任务路线图与 OpenClaw 的统一出站策略形成共识：

> Agent 可以后台行动，但必须基于用户批准的任务、受限的数据范围、明确的触发原因和可审计的执行记录。

这将推动产品从“全自动聊天”转向“可监督的个人执行系统”。

### 7.6 跨平台适配成为一等工程指标

Windows、ARM64、容器、反向代理、Docker、杀毒软件文件锁、Base Path 等问题反复出现。个人助手并非只在 Linux 开发机和云环境中运行，**跨平台回归矩阵**将成为发布质量的必要组成，而非边缘补丁。

---

## 决策建议

- **追求完整生态和多渠道自动化**：优先评估 OpenClaw，但应以稳定版为基线，并规避当前内存与升级积压。
- **追求长期个人 Agent Runtime 与桌面体验**：重点关注 Hermes Agent，尤其是持久记忆和受控主动性方向。
- **追求轻量 WebUI 与快速修复**：NanoBot 当前工程效率较高，但需观察关键 Provider PR 的合并情况。
- **追求桌面办公自动化和插件平台**：LobsterAI 潜力较大，但应等待集成回归和正式 Release。
- **追求模型实验、Video Memory、Creator 场景**：QwenPaw 功能丰富，但当前需优先解决 Windows、Code Mode 和媒体上下文污染。
- **追求数据自主和自有密钥**：OpenHuman 方向契合，但 CortexDB 记忆链路与隐私默认策略是采用前必须验证的门槛。
- **边缘设备与低成本自托管**：可关注 PicoClaw，但当前最大风险不是代码能力，而是发布和社区闭环不足。

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目动态日报

**统计日期：2026-11-26**  
**数据范围：过去 24 小时 GitHub 活动**

---

## 1. 今日速览

过去 24 小时共更新 **7 个 Issues** 和 **23 个 Pull Requests**，其中 Issue 新开或活跃 **5 条**、关闭 **2 条**；PR 待合并 **3 条**、合并或关闭 **20 条**。今日开发活动较高，主要集中在 **WebUI 稳定性、消息编辑与会话管理、Provider 兼容性和安全校验** 等方向。  
已关闭或合并的 PR 达 **20 个**，约占地近日 PR 更新量的 **87%**，说明大量问题已快速进入修复或收尾流程。项目今日没有发布新版本，发布节奏暂未变化。  
当前仍有 **3 个 PR 等待合并**，Issues 中则出现了飞书广播误触发、大图静默失败、长文本输入污染上下文等新问题，整体健康度可评为**良好，但需关注 Provider 适配和边缘场景稳定性**。

---

## 3. 项目进展

今日未发布新版本。

### 已关闭或合并的重要 PR

> 原始数据仅明确标注 PR 状态为“已合并/关闭”，未逐项给出具体合并时间或提交详情。以下按影响范围归纳。

#### 1. 修复 Markdown 表格中的 `<br>` 换行显示

- PR：[#6804 fix(webui): render bare HTML line breaks in Markdown](https://github.com/HKUDS/nanobot/pull/6804)
- 对应 Issue：[#6803 WebUI displays `<br>` as literal text in Markdown table cells](https://github.com/HKUDS/nanobot/issues/6803)
- 在现有安全 HTML 处理流程中规范化无属性 `<br>` 标签，使 Markdown 表格单元格内可以正确换行。
- Issue 已关闭，属于可直接验证的 WebUI 渲染回归修复。

#### 2. 修复 WebUI 会话归档误操作

- PR：[#6800 fix(webui): archive only the selected sessions](https://github.com/HKUDS/nanobot/pull/6800)
- 修复多个窗口分别保存完整归档列表、导致某个窗口归档会话时误恢复或影响其他窗口的问题。
- 现在归档与恢复只作用于指定会话，并通过单个 SQLite 事务保证一致性。
- 这是一项数据一致性修复，有助于降低多窗口使用中的会话状态错乱风险。

#### 3. 分离前台命令与后台会话容量

- PR：[#6798 fix(exec): separate foreground commands from background session capacity](https://github.com/HKUDS/nanobot/pull/6798)
- 将前台命令与后台会话容量解耦：前台执行支持 **8 个并发任务并排队**，后台聊天及子代理继续共享 **32 个槽位**。
- 避免大量实时预览占满后台容量后，连 `git status` 等短命令也无法执行。
- 改善了执行器的资源隔离与高并发场景下的可用性。

#### 4. 支持编辑并重新发送当前会话中的消息

- PR：[#6323 feat(webui): edit and resend messages in the same session](https://github.com/HKUDS/nanobot/pull/6323)
- 允许用户在原会话中编辑并重新发送消息。
- PR 当前仍为开放状态，但摘要显示 **20 项 CI 检查全部通过**，包括必需 CI；目前暂未主动请求评审。
- Windows 固定主分支对比中，五项延迟指标通过三项，因此合并节奏可能仍需等待性能验证或冲突处理。

#### 5. 修复 Provider 并行工具调用缺少索引时被混淆

- PR：[#6296 fix(providers): keep parallel tool calls apart when the stream omits index](https://github.com/HKUDS/nanobot/pull/6296)
- 针对 Gemini OpenAI 兼容接口在流式响应中不提供 `tool_calls[].index` 的情况，避免并行工具调用被错误识别为同一个调用。
- 对不同 Provider 的流式协议兼容性有实际价值。
- PR 仍待合并，属于当前较重要的 Provider 稳定性事项。

#### 6. 统一 SDK 直接执行与流式执行路径

- PR：[#6789 refactor(sdk): unify direct and streamed execution](https://github.com/HKUDS/nanobot/pull/6789)
- 抽取直接调用和流式调用共享的轮次初始化与执行逻辑。
- 统一会话锁和模型解析行为，同时保留两类接口各自的返回形式及流式队列差异。
- 这是 SDK 内部架构收敛，可减少两条执行路径长期漂移带来的行为不一致。

#### 7. 修复 WebUI 对不支持图片的预设仍启动任务

- PR：[#6724 fix(webui): open the preset for blocked image input](https://github.com/HKUDS/nanobot/pull/6724)
- 当预设关闭图片输入且没有可用图片能力回退时，不再丢弃图片或启动无效请求，而是保留输入内容并展示提示。
- 相同检查覆盖 Enter 发送、回复期间排队消息和自动发送等路径。

#### 8. 修复 WebUI 删除主题时不必要的确认流程

- PR：[#6723 fix(webui): skip confirmation for undoable topic deletion](https://github.com/HKUDS/nanobot/pull/6723)
- 删除主题后直接展示 **8 秒 Undo** 提示，移动端也会保留撤销入口。
- 降低可撤销操作的中断成本，同时继续保留最终删除机制。

#### 9. 修复侧信道命令回复丢失历史或路由

- PR：[#6736 fix(chat): preserve routing for side-channel command replies](https://github.com/HKUDS/nanobot/pull/6736)
- 修复 `/dream`、`/dream-log`、`/dream-restore`、`/pairing` 等命令在 WebUI 流式回复期间可能覆盖可见答案、丢失历史或脱离线程的问题。
- 提升多入口并发场景下的消息路由可靠性。

#### 10. 在聊天活动中显示标准 MCP 服务图标

- PR：[#6769 Show standard MCP server icons in chat activity](https://github.com/HKUDS/nanobot/pull/6769)
- 从 MCP `initialize` 响应读取服务端图标信息，并用于聊天活动标记。
- 自定义 MCP Server 不再只能显示通用紫色插头图标，WebUI 的可观测性有所改善。

#### 11. 修复不安全主机名在 DNS 解析前未被拒绝

- PR：[#6716 fix(security): reject malformed hostnames before DNS resolution](https://github.com/HKUDS/nanobot/pull/6716)
- URL 校验新增对原始控制字符及解析后主机名中空白的拒绝。
- 连接检查会直接报告无效目标，而不是继续发起 DNS 解析。
- 属于明确的安全边界增强。

#### 12. 支持移除 Provider 连接配置

- PR：[#6148 feat(settings): add removable provider connections](https://github.com/HKUDS/nanobot/pull/6148)
- Provider 连接移除后可持久化，不再在配置重载后恢复为空默认项。
- 运行中的 Gateway 可响应当前连接被移除或恢复的情况。
- 该 PR 依赖另一项前置变更，实际合入完整性需关注依赖关系。

#### 13. 清理空归档摘要与无效系统提示内容

- PR：[#6797 fix(context): omit empty archive summaries from the system prompt](https://github.com/HKUDS/nanobot/pull/6797)
- 当归档摘要仅为 `(nothing)` 或其反引号形式时，不再注入无意义的 `Archived Context Summary`。
- 可减少提示词噪声和无效 token 消耗。

#### 14. 优化 WebUI diff 资源加载

- PR：[#6711 perf(webui): avoid redundant diff bundle assets](https://github.com/HKUDS/nanobot/pull/6711)
- 避免在没有渲染 Markdown 的对话中仍下载 Markdown 解析器，并移除 diff worker 中重复打包的 Shiki 语言和主题资源。
- 属于前端加载体积与冗余资产优化。

#### 15. 重构 WebUI Gateway 写入与 UI 状态职责

- PR：[#6727 refactor(webui): separate gateway mutations and UI state](https://github.com/HKUDS/nanobot/pull/6727)
- 将结构化 WebSocket 写入从“合成 HTTP 请求再转换回来”的路径中拆出。
- 分离 Gateway 数据变更、磁盘工作、历史投影和 UI 状态所有权，提升架构清晰度。

#### 16. 其他已关闭改动

- [ #6799：更新微信群 2 邀请二维码，有效期至 12 月 2 日](https://github.com/HKUDS/nanobot/pull/6799)
- [ #6728：窄屏下隐藏运行计时器，优先保留最新工具活动](https://github.com/HKUDS/nanobot/pull/6728)
- [ #6741：统一 WebUI 设置侧栏底部按钮对齐](https://github.com/HKUDS/nanobot/pull/6741)
- [ #6740：集中整理 WebUI 调色板和自动化日历样式](https://github.com/HKUDS/nanobot/pull/6740)
- [ #6770：清理冗余注释并修正过时诊断说明](https://github.com/HKUDS/nanobot/pull/6770)

### 整体推进判断

今日的推进重点不是新增大型能力，而是对 WebUI、SDK、Provider 和执行器进行一轮密集的稳定性收敛。至少覆盖：

- 消息显示与渲染；
- 会话归档和数据一致性；
- 前台、后台执行资源隔离；
- Provider 并行工具调用；
- 图片输入前置校验；
- 侧信道命令路由；
- URL 安全校验；
- MCP 活动展示；
- SDK 执行路径统一。

从已关闭 PR 数量看，项目维护吞吐较高；但仍有 Provider 流式协议、跨平台 TUI 安装和大图处理等稳定性问题尚未完全闭环。

---

## 4. 社区热点

### 4.1 编辑并重新发送消息：长期关注的核心 WebUI 功能

- PR：[ #6323 feat(webui): edit and resend messages in the same session](https://github.com/HKUDS/nanobot/pull/6323)
- 创建时间：**2026-10-20**
- 最新更新：**2026-11-26**
- 当前状态：**OPEN**
- 热度依据：持续近一个月更新，全部 **20 项 CI 检查通过**，并进行了 Windows 性能对比。
- 核心诉求：允许用户在现有会话中修改历史消息并重新发送，避免因输入错误或意图调整而创建重复会话。
- 关注点：PR 标注存在冲突，Windows 延迟门槛尚未全部通过，功能价值明确，但合并节奏受跨平台性能和集成状态制约。

### 4.2 飞书广播 `@所有人` 导致机器人误回复

- Issue：[ #6801 Feishu: broadcast-only @all wakes the bot and produces a spurious reply](https://github.com/HKUDS/nanobot/issues/6801)
- 更新：**2026-11-26**
- 评论数：**2**
- 当前状态：**OPEN**
- 核心诉求：在 `group_policy: "mention"` 模式下，只有真正提及机器人的消息才应触发回复。
- 根因：飞书将仅用于广播的 `@_all` 视为对群内所有机器人的提及，导致机器人在群公告场景中产生无关回复。
- 影响：在高频群聊中可能造成消息噪声，并增加不必要的模型调用成本。

### 4.3 大尺寸入站图片静默失败

- Issue：[ #6805 Vision: large inbound images fail silently](https://github.com/HKUDS/nanobot/issues/6805)
- 更新：**2026-11-26**
- 评论数：**1**
- 当前状态：**OPEN**
- 核心诉求：典型 iPhone 照片（约 4032×3024、4 MB JPEG）上传成功后，模型请求若遭遇 Provider 502，当前行为可能在重试时静默丢失图片。
- 用户建议：增加可配置的最大图片尺寸，并实施更强的降采样策略。
- 影响：这是多模态功能的可靠性问题，可能出现“文件明明上传成功，模型却没有看到图片”的难以诊断故障。

### 4.4 Windows 原生 TUI 首次安装失败

- Issue：[ #6784 Windows: native TUI fails to install Bun when a virus scanner locks bun.exe](https://github.com/HKUDS/nanobot/issues/6784)
- 创建：**2026-11-24**
- 更新：**2026-11-25**
- 当前状态：**CLOSED**
- 核心诉求：Windows 杀毒软件锁定 `bun.exe` 时，首次运行 `nanobot agent` 因 `WinError 32` 无法安装 Bun，只能使用 `--no-tui`。
- 热点原因：同时涉及原生 TUI、自动运行时安装和安全软件兼容性。
- 关联 Issue：[ #6784](https://github.com/HKUDS/nanobot/issues/6784)；当前数据中未列出明确对应的 fix PR，可能通过其他未展示 PR 或直接提交处理。

---

## 5. Bug 与稳定性

按潜在影响范围、发生频率和可诊断性排序。

### P1 / 高优先级关注

#### 1. Provider 返回 502 后，图片可能在重试中静默丢失

- Issue：[ #6805](https://github.com/HKUDS/nanobot/issues/6805)
- 状态：**OPEN**
- Fix PR：**未见明确关联 PR**
- 风险：上传成功但视觉模型没有收到图片，且缺少直观错误提示。
- 建议：重试时保留媒体载荷；增加最大尺寸配置、自动压缩和明确的降级提示；补充 Provider 502 场景的回归测试。

#### 2. 飞书群公告可能触发机器人错误回复

- Issue：[ #6801](https://github.com/HKUDS/nanobot/issues/6801)
- 状态：**OPEN**
- Fix PR：**未见明确关联 PR**
- 风险：群公告场景产生无关回复和额外模型开销。
- 建议：区分广播型 `@all` 与针对单个机器人或成员的实体提及，并增加飞书群聊回归测试。

#### 3. Gemini 兼容流式接口中的并行工具调用可能相互混淆

- PR：[ #6296](https://github.com/HKUDS/nanobot/pull/6296)
- 状态：**OPEN**
- Fix PR：**该 PR 本身即修复**
- 风险：并行工具调用的 ID、名称或参数被错误归属，可能导致调用丢失、参数错配或执行顺序异常。
- 建议：优先合并并补充“缺少 index、不同 chunk、多个完整调用”组合测试。

### P2 / 中等优先级

#### 4. Windows 杀毒软件锁定 Bun 文件导致原生 TUI 不可用

- Issue：[ #6784](https://github.com/HKUDS/nanobot/issues/6784)
- 状态：**CLOSED**
- Fix PR：**数据中未明确列出**
- 影响：部分 Windows 用户首次启动必须使用 `--no-tui`。
- 建议：检查关闭原因和实际修复方式，确保文件占用具有有限重试与清晰回退提示。

#### 5. WebUI Markdown 表格中的 `<br>` 被显示为字面文本

- Issue：[ #6803](https://github.com/HKUDS/nanobot/issues/6803)
- Fix PR：[ #6804](https://github.com/HKUDS/nanobot/pull/6804)
- 状态：**Issue 已关闭 / PR 已关闭**
- 影响：表格内容可读性下降，属于前端渲染问题，未见核心服务崩溃。

#### 6. WebUI 多窗口归档可能误恢复其他会话

- PR：[ #6800](https://github.com/HKUDS/nanobot/pull/6800)
- 状态：**CLOSED**
- 影响：可能造成会话状态错乱，但修复已通过事务和定向更新降低风险。

#### 7. 前台命令被后台预览占满容量

- PR：[ #6798](https://github.com/HKUDS/nanobot/pull/6798)
- 状态：**CLOSED**
- 影响：运行中的实时预览可能阻塞普通 Shell 命令；修复后前后台容量隔离。

#### 8. WebUI 图片输入与预设能力不匹配

- PR：[ #6724](https://github.com/HKUDS/nanobot/pull/6724)
- 状态：**CLOSED**
- 影响：可能被静默丢弃图片或启动无效任务；修复后改为保留输入并提示。

#### 9. 侧信道命令可能破坏 WebUI 流式回复

- PR：[ #6736](https://github.com/HKUDS/nanobot/pull/6736)
- 状态：**CLOSED**
- 影响：回复前缀、历史或线程归属可能丢失。

### 已明确修复但仍值得回归验证

- Markdown `<br>` 渲染：[#6803](https://github.com/HKUDS/nanobot/issues/6803) / [#6804](https://github.com/HKUDS/nanobot/pull/6804)
- 多窗口会话归档：[#6800](https://github.com/HKUDS/nanobot/pull/6800)
- 前后台执行容量：[#6798](https://github.com/HKUDS/nanobot/pull/6798)
- 无效图片预设：[#6724](https://github.com/HKUDS/nanobot/pull/6724)
- 侧信道命令路由：[#6736](https://github.com/HKUDS/nanobot/pull/6736)
- 畸形主机名校验：[#6716](https://github.com/HKUDS/nanobot/pull/6716)
- 空归档摘要注入：[#6797](https://github.com/HKUDS/nanobot/pull/6797)

---

## 6. 功能请求与路线图信号

### 6.1 WebUI 长文本自动转工作区文件

- Issue：[ #6806 WebUI: option to auto-convert long pasted text into a workspace file instead of inlining it](https://github.com/HKUDS/nanobot/issues/6806)
- 需求：粘贴日志、文章、配置文件或命令输出时，可自动写入 workspace 文件，而不是完整内联到聊天消息。
- 预期收益：
  - 降低聊天记录污染；
  - 减少会话历史和模型上下文膨胀；
  - 更适合长文档分析、代码审查和日志排查。
- 路线图判断：**与近期 WebUI 文件、diff 和工作区方向高度一致，较可能进入近期 WebUI 迭代**。
- 建议形态：提供阈值和开关；保留原消息摘要、生成文件名及可点击引用。

### 6.2 WebUI 希伯来语本地化与双向文本支持

- Issue：[ #6807 WebUI feature proposal: Hebrew localization and bidirectional chat](https://github.com/HKUDS/nanobot/issues/6807)
- 需求：补充希伯来语翻译，并支持双向聊天文本排版。
- 路线图判断：属于国际化扩展，可能进入后续 WebUI 功能批次，但今日没有对应 PR 迹象。
- 关注点：不仅需要翻译字符串，还应处理输入框、Markdown、代码块、表格和流式消息中的 RTL/LTR 混排。

### 6.3 将 Lexmount Web Fetch 作为可选网页读取器

- Issue：[ #6802 Consider Lexmount Web Fetch as an optional reader for web_fetch](https://github.com/HKUDS/nanobot/pull/6802)
- 需求：在现有 `web_fetch` 的 Jina Reader 和本地提取之外，引入可选的第三方阅读器。
- 路线图判断：目前更像生态集成提案，优先级取决于稳定性、隐私、配置复杂度和维护者对第三方服务的接受度。
- 建议：保持可选、明确数据流与隐私边界，并提供超时和失败回退。

### 6.4 消息编辑与重新发送

- PR：[ #6323](https://github.com/HKUDS/nanobot/pull/6323)
- 信号：CI 已全部通过，且持续更新数周，是当前较明确的高价值候选功能。
- 路线图判断：**已进入集成阶段**；若冲突和 Windows 性能验证完成，很可能成为下一批 WebUI 功能的一部分。

### 6.5 Provider 连接可移除

- PR：[ #6148](https://github.com/HKUDS/nanobot/pull/6148)
- 信号：解决配置重载后已删除连接重新出现的问题。
- 路线图判断：配置管理体验的重要补全；需确认其依赖 PR 同步合入。

### 6.6 SDK 执行模型统一

- PR：[ #6789](https://github.com/HKUDS/nanobot/pull/6789)
- 信号：直接调用与流式调用共享会话锁和模型解析逻辑。
- 路线图判断：更偏内部稳定性和维护性工作，短期用户感知有限，但有利于后续 SDK 功能快速演进。

---

## 7. 用户反馈摘要

### 7.1 飞书用户：需要区分“提及机器人”和“群公告”

- 来源：[ #6801](https://github.com/HKUDS/nanobot/issues/6801)
- 真实痛点：在 `group_policy: "mention"` 模式下，飞书广播型 `@所有人` 仍会唤醒机器人。
- 不满意点：机器人主动参与并非针对自己的公告，回复显得突兀，并可能增加调用成本。
- 期望：仅在真正点名机器人或满足明确提及规则时响应。

### 7.2 视觉模型用户：上传成功不代表模型收到图片

- 来源：[ #6805](https://github.com/HKUDS/nanobot/issues/6805)
- 使用场景：通过 WebUI 上传典型 iPhone 高分辨率照片并询问图片内容。
- 真实痛点：Provider 502 后静默重试，重试过程中图片可能消失，用户却得不到明确错误。
- 不满意点：故障不可见、难复现、难判断是上传、Provider 还是重试逻辑导致。
- 期望：支持最大图片尺寸限制和更强降采样，并确保重试不丢媒体。

### 7.3 Windows 用户：安全软件可能阻断原生 TUI 初始化

- 来源：[ #6784](https://github.com/HKUDS/nanobot/issues/6784)
- 使用场景：首次运行 `nanobot agent`，由 NanoBot 下载并安装固定版本 Bun。
- 真实痛点：杀毒软件短暂锁定 `bun.exe` 后出现 `WinError 32`，原生 TUI 无法启动。
- 当前缓解方式：使用 `--no-tui`。
- 期望：Bun 安装具备文件占用重试机制，或在无法自动安装时给出明确、可操作的提示。

### 7.4 WebUI 用户：长文本输入使会话迅速膨胀

- 来源：[ #6806](https://github.com/HKUDS/nanobot/issues/6806)
- 使用场景：粘贴日志、文章、配置和命令输出后继续对话。
- 真实痛点：整段文本进入消息和会话历史，既污染界面，也占用模型上下文。
- 期望：将长文本转换为工作区文件，并在消息中保留引用。

### 7.5 WebUI 表格用户：Markdown 换行标签无法正确渲染

- 来源：[ #6803](https://github.com/HKUDS/nanobot/issues/6803)
- 使用场景：在 Markdown 表格单元格中使用 `Draft<br>Ready`。
- 真实痛点：流式显示、回复完成和刷新后均显示为字面标签。
- 结果：已由 [#6804](https://github.com/HKUDS/nanobot/pull/6804) 处理，属于当日得到明确闭环的用户反馈。

---

## 8. 待处理积压

### 8.1 消息编辑与重发 PR 长期开放

- PR：[ #6323](https://github.com/HKUDS/nanobot/pull/6323)
- 首次创建：**2026-10-20**
- 今日仍处于开放状态。
- 虽然 CI 已全部通过，但存在冲突及 Windows 延迟指标未完全通过的情况。
- 建议：明确最后阻塞项和负责人，优先完成集成，避免高价值功能长期停留在测试通过但无法合并的状态。

### 8.2 Gemini 并行工具调用兼容 PR 长期开放

- PR：[ #6296](https://github.com/HKUDS/nanobot/pull/6296)
- 首次创建：**2026-10-19**
- 今日仍待合并。
- 修复涉及 Provider 流式协议中的调用关联，回归风险和用户影响均高于一般 UI 修复。
- 建议：补充 Gemini OpenAI-compatible 端到端测试并尽快评审合并。

### 8.3 新增 Issue 尚无明确修复归属

以下问题均在近期创建或更新，但当前数据中未见明确关联的开放修复 PR：

- 飞书广播误触发：[ #6801](https://github.com/HKUDS/nanobot/issues/6801)
- 大图静默失败：[ #6805](https://github.com/HKUDS/nanobot/issues/6805)
- 长文本转 workspace 文件：[ #6806](https://github.com/HKUDS/nanobot/issues/6806)
- 希伯来语和 RTL 支持：[ #6807](https://github.com/HKUDS/nanobot/issues/6807)
- Lexmount Web Fetch 集成：[ #6802](https://github.com/HKUDS/nanobot/issues/6802)

建议维护者为前两项明确优先级和修复归属，避免飞书误唤醒与视觉静默失败继续扩大影响。

---

## 结论

NanoBot 今日处于**高修复吞吐、低版本发布**阶段：20 个 PR 已关闭或合并，覆盖 WebUI、执行器、SDK、Provider、安全和配置管理等多个层面，显示出较强的维护响应能力。  
项目当前主要风险集中在 **多模态大图可靠性、飞书提及语义、Gemini 并行工具调用兼容、Windows 原生 TUI 安装**四个方向。短期应优先闭环 #6805、#6801 和 #6296，并推动已通过 CI 的 #6323 完成冲突与跨平台性能确认。

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目动态日报

**报告日期：2026-11-26**
**数据窗口：2026-11-25 ~ 2026-11-26（过去 24 小时）**
**仓库：[sipeed/picoclaw](https://github.com/sipeed/picoclaw)**

---

## 1. 今日速览

- 过去 24 小时内项目 **无新增 Issue、无活跃 Issue**，Issue 侧完全静默，社区讨论热度为 0。
- PR 侧共更新 **4 条**，其中 **4 条均为已合并/已关闭状态，待合并为 0**，说明当日提交的所有变更请求均已闭环处理，未形成新的积压。
- 主要推进力量来自维护者 @xuwei-xy 的 **批量合并 PR 操作**（#1560、#1555、#1558），本质是一次性的“僵尸 PR 清理与修复归并”，而非新增功能开发。
- **今日无新版本发布**，缺乏 release 节奏信号；结合批量清理动作看，项目处于**收敛整理、待整合发布的阶段**。
- 综合活跃度评估：**项目健康度中等偏低但可控**。代码库在持续被维护，但社区参与度极低（Issue 0 条、单条 PR 评论数为 undefined、点赞 0），反映出当前工作流高度依赖单一维护者，属于**“维护活跃 + 生态静默”**的典型状态。

---

## 2. 版本发布

**本周期无新版本发布。**

- Releases 列表为空（[Releases 页](https://github.com/sipeed/picoclaw/releases)），无 tag、无 changelog、无破坏性变更说明。
- 无迁移注意事项可报告。
- ⚠️ **值得关注**：今日有 3 个批量合并 PR 归并了 **#1312、#1311、#1308、#1390、#1389、#1383、#1381、#1344、#1342、#1341、#1331** 等 11 个修复型 PR。这些修复已进入主干，但**尚未以 release 形式对用户可见**，存在“修复已落地、版本未跟上”的发布滞后风险。建议维护者尽快打 tag 并补充 changelog，否则用户无法感知这些稳定性收益。

---

## 3. 项目进展

今日 4 条 PR 全部为 CLOSED 且无一处于待合并状态，核心特征是**归并（merge-in）而非开发**：

| PR | 状态 | 性质 | 覆盖内容 | 链接 |
|---|---|---|---|---|
| [#1560](https://github.com/sipeed/picoclaw/pull/1560) | CLOSED | 批量归并 | 合并 #1312、#1311、#1308 三个修复 | [链接](https://github.com/sipeed/picoclaw/pull/1560) |
| [#1555](https://github.com/sipeed/picoclaw/pull/1555) | CLOSED | 批量归并 | 合并 #1390、#1389、#1383、#1381 四个修复 | [链接](https://github.com/sipeed/picoclaw/pull/1555) |
| [#1558](https://github.com/sipeed/picoclaw/pull/1558) | CLOSED | 批量归并 | 合并 #1344、#1342、#1341、#1331 四个修复 | [链接](https://github.com/sipeed/picoclaw/pull/1558) |
| [#3467](https://github.com/sipeed/picoclaw/pull/3467) | CLOSED（stale） | 功能请求被关闭 | Web 启动器法语 UI 本地化 | [链接](https://github.com/sipeed/picoclaw/pull/3467) |

**推进评估：**

- **功能面**：无新增功能落地。唯一的功能性 PR（法语 UI）被标记 stale 后关闭，说明国际化路线当前**未被主动排期**。
- **修复面**：一次性合入 11 个修复 PR，覆盖面广但深度未知（数据未提供具体改动文件）。从 PR 编号跨度看，#1308–#1390 区间多为早期修复长期挂起，最终由维护者集中清理。
- **整体前进量**：主干代码前进显著（3 个归并 PR 触及 11 个底层修复），**但对用户可见的版本前进量为 0**。可概括为：**“代码前进，用户前进为零。”**

---

## 4. 社区热点

今日**没有任何 Issue 更新**，PR 侧评论数均为 `undefined`、点赞均为 `0`，不存在可排名的高热条目。

- 热度最高（相对而言）：[#3467](https://github.com/sipeed/picoclaw/pull/3467) — 由外部贡献者 @slashr512 提交，是当日**唯一非维护者发起**的 PR，也是唯一被讨论/关注的社区贡献。
  - **背景诉求**：为 PicoClaw Web 启动器新增完整法语本地化，包含 `web/frontend/src/i18n/locales/fr.json` 全量翻译、在 i18next 资源中注册法语、配置 dayjs 法语区域设置，并在登录页、引导（setup）页、仪表盘的语言菜单中加入 **Français** 选项。
  - **诉求性质**：国际化（非英语）用户的可用性诉求，属于**低风险、纯增量**的前端改动。
  - **未获回应**：该 PR 自 2026-11-10 创建，至 2026-11-25 更新期间无评论，最终以 stale 关闭——贡献者投入的翻译工作**未被采纳也未被解释**，是典型的社区动能流失点。
- 其余 3 条 PR 由 @xuwei-xy 批量创建（创建时间同为 2026-03-14，更新于 11-25/11-26），属于**工具型维护操作**，无社区讨论价值。

---

## 5. Bug 与稳定性

**今日无新建 Bug 报告、无崩溃或回归 Issue**（Issue 数为 0）。

- 唯一被显式标记的问题类别是 [#3467](https://github.com/sipeed/picoclaw/pull/3467) 的 `[stale]` 关闭——这属于**流程性缺陷**而非代码缺陷：PR 因长期无响应被机器人关闭，暴露的是响应机制问题。
- 已有 fix 情况：**待合并 PR 为 0**，即当前所有修复均已进入主干，无“已知未修 Bug”外泄。
- ⚠️ **稳定性观察要点**：11 个修复 PR 在无 release 的情况下被合入主干，意味着这些修复**只存在于 `main` 分支**。对于通过 release 安装的用户，缺陷**依然存在**。这构成本日最实质的稳定性风险：
  - 建议维护者立即发布新版本，否则 [#1560](https://github.com/sipeed/picoclaw/pull/1560)、[#1555](https://github.com/sipeed/picoclaw/pull/1555)、[#1558](https://github.com/sipeed/picoclaw/pull/1558) 带来的 11 项修复对终端用户**不可用**。
  - 数据未提供各修复的具体缺陷描述，故无法按严重程度细分；需查阅上述 PR 内部 diff 才能补全。

---

## 6. 功能请求与路线图信号

| 需求 | 提出方 | 现状 | 下一版本纳入可能性 | 链接 |
|---|---|---|---|---|
| Web 启动器法语 UI 本地化 | @slashr512（外部贡献者） | PR 已 stale 关闭 | **中低**。技术上零门槛，但被关闭说明缺乏主动推动信号；若维护者重启 i18n 路线则可能重新纳入 | [#3467](https://github.com/sipeed/picoclaw/pull/3467) |
| 前端多语言基础设施（i18next + dayjs 区域设置注册） | 同上 | 已随 #3467 提交但未合入 | **中**。属于通用基建，一旦被重新捡起可复用 | [#3467](https://github.com/sipeed/picoclaw/pull/3467) |
| 其余功能 | — | 无新需求 | — | [Issues](https://github.com/sipeed/picoclaw/issues) |

**路线图信号解读：**
- 今日唯一的方向性信号来自**归并型 PR 的标题结构**（三次 “fix: merge PR …”），表明维护者当前优先级排序为：**稳定化/收敛 > 新功能**。
- 三个归并 PR 均创建于 2026-03-14，跨度近 8 个月才被处理，说明**修复在主干上的流转极其缓慢**；同时大量 PR 长期滞留，暗示缺少有效的 triage 与批量决策机制。
- **对下一版本的合理预判**：下一版本大概率是**以 bugfix 为主的 patch/minor 版本**，内容为 11 项历史修复；法语本地化被纳入的概率低于 50%，除非出现新的社区推动。

---

## 7. 用户反馈摘要

**今日无可提炼的用户评论**（Issue 数 0，PR 评论数为 undefined）。以下为基于提交记录的**间接反馈**：

- **正面信号**：外部贡献者 @slashr512 愿意为 Web 前端提交完整翻译（fr.json 全量翻译 + 三处语言菜单改造），说明项目仍具备**吸引国际社区贡献者的能力**，且贡献质量规范（有 Summary、有结构化改动列表）。
- **负面信号**：该贡献从 11-10 提交到 11-25 关闭，**全程零评论、零反应**，无感谢、无解释、无关闭原因说明。对外部贡献者而言，这是明确的**负向反馈**，极易导致贡献者不再参与。
- **用户痛点（推断性）**：非英语用户在 Web 启动器上无法使用母语界面；小语种本地化缺少“被优先接纳”的信号。
- **使用场景**：PicoClaw 的 Web 启动器（登录页 / 引导页 / 仪表盘）面向的是自部署的桌面/浏览器用户，其中法语区（法国、比利时、卢森堡、魁北克、非洲法语区）用户群体规模不小，该诉求具备真实基础。
- **满意/不满意**：现有维护者对稳定性的处理偏“事后批量清理”，缺乏对社区反馈的即时闭环；这是本日最值得改进的交互体验点。

---

## 8. 待处理积压

**需维护者关注：**

1. **#3467（法语本地化）** — 已 stale 关闭，但工作成果完整保留。**建议**：在关闭或重开之间做出明确选择并回复贡献者；若重开，成本极低且能挽回一位外部贡献者。链接：[#3467](https://github.com/sipeed/picoclaw/pull/3467)
2. **长期滞留的 11 个修复 PR（#1308、#1311、#1312、#1331、#1341、#1342、#1344、#1381、#1383、#1389、#1390）** — 已通过归并进入主干，但**均未随 release 发布**。链接示例：[#1560](https://github.com/sipeed/picoclaw/pull/1560)、[#1555](https://github.com/sipeed/picoclaw/pull/1555)、[#1558](https://github.com/sipeed/picoclaw/pull/1558)
3. **未打 tag 的主干状态** — 修复已合入但无版本产出，建议立即发布并补 changelog。链接：[Releases](https://github.com/sipeed/picoclaw/releases)
4. **Issue 侧零响应风险** — 24 小时 Issue 更新为 0。需确认是真实的“无问题”还是**监控/自动化抓取失效**；若为后者，项目动态感知将失真。链接：[Issues](https://github.com/sipeed/picoclaw/issues)
5. **归并 PR 的可追溯性缺陷** — “merge PR #A #B #C” 类 PR 合并了 11 个来源 PR 但未在摘要中说明各自修复的缺陷内容、影响版本与回归风险，导致 changelog 无法自动生成。**建议**：后续归并时附修复清单，便于发布与用户核对。

---

## 今日结论

PicoClaw 今日呈现**“代码前进、发布停滞、社区沉默”**的三层结构。维护者在 24 小时内清空了全部待合并 PR 队列并推进了 11 项修复归入主干，这是一个**正向且高效的操作**；但由于无版本发布，用户侧零感知；同时唯一的社区功能贡献被静默关闭，暴露了响应机制的短板。

**项目健康度评分：6/10**（维护动作健康，发布节奏与社区闭环不足）

**明日关注三点**：
1. 是否打出新 tag 并补齐 11 项修复的 changelog；
2. #3467 是否被重新拾起或得到正式回复；
3. Issue 通道是否恢复真实活动。

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI 项目动态日报

**日期：2026-11-26**  
**数据范围：过去 24 小时 GitHub Issues / Pull Requests 更新**

## 1. 今日速览

过去 24 小时项目共更新 **23 条 PR，全部已合并或关闭**，无待合并 PR；同期 **无 Issue 更新、无新版本发布**。今日开发重点集中在 **DSH 运行时稳定性、插件生态、模型供应商接入、IM 机器人能力及 UI/设置体系重构**，功能推进明显。  
由于所有数据均来自 PR，且缺少 Issue 评论、用户反馈和历史积压信息，当前无法准确评估社区讨论热度或长期响应情况。就交付节奏看，项目处于**高强度迭代、工程收敛与稳定性补强阶段**，但发布节奏偏慢，尚未形成可供用户升级验证的正式版本。

---

## 3. 项目进展

### 3.1 DSH 运行时与插件生态

- **插件全生命周期管理及嵌入式插件壳**  
  新增插件列表、查看、从 Registry/Git/本地安装、取消、删除、启停、Registry 管理及本地目录选择，并按 `native`、`hybrid`、`web-only` 区分插件类型。  
  链接：[PR #3202](https://github.com/netease-youdao/LobsterAI/pull/3202)

- **第三方 DSH 插件版本检查与热更新**  
  支持手动检查版本及 HMR 热更新，对接 `pluginManager/listVersions`、`pluginManager/updateBundle` 等 Typert RPC。  
  链接：[PR #3207](https://github.com/netease-youdao/LobsterAI/pull/3207)

- **DSH 工作区同步竞态及视频引用预览修复**  
  修复 Agent 工作区在注册表初始化完成前挂载导致工作区缺失的问题，同时改善视频引用预览。  
  链接：[PR #3205](https://github.com/netease-youdao/LobsterAI/pull/3205)

- **已有 Agent 工作区目录回填**  
  在 Agent 同步过程中注册已有工作目录，解决“没有会话记录的 Agent 目录不出现在工作区树中”的问题。  
  链接：[PR #3191](https://github.com/netease-youdao/LobsterAI/pull/3191)

- **Windows 旧版本 Profile 启动失败修复**  
  修复从远程连接版本升级且拥有旧版 owned Agent 时，迁移触发 SQLite ownership trigger、导致应用在首窗出现前退出的问题。  
  链接：[PR #3194](https://github.com/netease-youdao/LobsterAI/pull/3194)

- **DSH 运行时重新打包**  
  将 `dsh-runtime` 打包至 `app.asar/dsh-runtime`，并调整 `dsh-bundles`、`SKILLs` 与平台资源的打包方式，简化 Windows 安装流程。  
  链接：[PR #3196](https://github.com/netease-youdao/LobsterAI/pull/3196)

### 3.2 模型与供应商能力

- **实时模型发现、模型编辑器及兼容性同步**  
  为 OpenAI Completions/Responses、Anthropic Messages 和 Google Generative AI 增加 `provider:discoverModels`，配套模型发现对话框、Hook 和编辑器重构。  
  链接：[PR #3208](https://github.com/netease-youdao/LobsterAI/pull/3208)

- **模型 thinking 默认值与 Codex Responses 兼容增强**  
  修复内置模型目录在不同 wire protocol 下的 `thinkingLevelMap` 继承问题，并处理未经确认的 reasoning 元数据及 Codex Responses 兼容行为。  
  链接：[PR #3203](https://github.com/netease-youdao/LobsterAI/pull/3203)

### 3.3 IM、权限与自动化

- **网易邮箱 MCP 接入**  
  将网易邮箱置顶至连接器市场，支持查信、读取附件、维护草稿、设置已读和红旗状态；发送、回复、转发及删除前增加操作摘要确认。OAuth 凭据由 Electron 主进程持久化，并支持重新授权、断开及安装包/备份恢复校验。  
  链接：[PR #3209](https://github.com/netease-youdao/LobsterAI/pull/3209)

- **IM 渠道权限预设、审批转发与会话预设**  
  增加渠道级 DSH 权限预设，并实现 IM 审批和提问向桌面的转发，以及会话级预设。  
  链接：[PR #3199](https://github.com/netease-youdao/LobsterAI/pull/3199)

- **恢复问题过滤与富文本 IM 回复**  
  IM 和定时任务会话不再向模型暴露或接受 `ask_user_question` 直接调用，并恢复富文本回复能力。  
  链接：[PR #3210](https://github.com/netease-youdao/LobsterAI/pull/3210)

- **飞书话题会话及定时投递修复**  
  保留飞书 thread/root message ID，重启或升级后复用对应桌面会话与专家，并修复定时投递目标范围。  
  链接：[PR #3192](https://github.com/netease-youdao/LobsterAI/pull/3192)

- **定时提醒投递至私聊**  
  修复 POPO 机器人实例选择、飞书用户 ID/chat ID 路由，以及钉钉私聊 recipient/staff ID 解析问题。  
  链接：[PR #3195](https://github.com/netease-youdao/LobsterAI/pull/3195)

- **移除过时的网关重启提示**  
  DSH Host 保存渠道配置后可直接应用变更，因此删除 IM Bot 设置中的旧网关重启提示。  
  链接：[PR #3198](https://github.com/netease-youdao/LobsterAI/pull/3198)

### 3.4 Agent、记忆与设置体系

- **Agent 草稿生成、规则工具及设置页重构**  
  新增流式 Agent 草稿生成与取消能力、描述后台回填，并重构 Agent 设置。  
  链接：[PR #3200](https://github.com/netease-youdao/LobsterAI/pull/3200)

- **记忆设置重构及旧 Dreaming/IM 权限清理**  
  支持按 Agent 切换记忆、全局/项目范围过滤、分组管理和批量删除，同时移除旧 Dreaming 实现及历史 IM 权限逻辑。  
  链接：[PR #3201](https://github.com/netease-youdao/LobsterAI/pull/3201)

- **浏览器与 Web 访问设置简化**  
  删除 OpenClaw 和冗余旧配置，仅保留当前 DSH 浏览器访问相关选项。  
  链接：[PR #3193](https://github.com/netease-youdao/LobsterAI/pull/3193)

- **统一主操作按钮视觉规范**  
  引入 `action`、`action-foreground`、`action-hover` 语义主题变量，统一内置主题、生成 CSS 与 Tailwind 主题中的主 CTA 样式。  
  链接：[PR #3206](https://github.com/netease-youdao/LobsterAI/pull/3206)

### 3.5 产物与桌面端体验

- **文件重命名后同步侧栏文件标签页**  
  修复文件管理器重命名后，产物侧栏仍保留旧路径并引发保存错误、外部编辑无法同步预览的问题。  
  链接：[PR #3197](https://github.com/netease-youdao/LobsterAI/pull/3197)

**整体推进评估：**  
今日 PR 数量为 24 小时内的 **23 条**，且已全部关闭或合并，表明开发吞吐较高。改动横跨运行时、插件、模型、IM、Agent 和设置层，完整度较高等；但 **没有 Release**，且其中多项属于迁移兼容、竞态和路由修复，说明项目仍处于大规模架构迁移后的“补缺与收敛”阶段。若后续缺少集中回归测试和版本封版，部分问题可能继续以增量修复方式出现。

---

## 4. 社区热点

> 今日 PR 的评论数均为 `undefined`，点赞数均为 `0`，因此无法从公开反应数据识别“讨论最活跃”的条目。以下按功能影响范围和潜在用户关注度排序。

1. **网易邮箱 MCP 接入**  
   链接：[PR #3209](https://github.com/netease-youdao/LobsterAI/pull/3209)  
   **关注点：** 这是直接面向终端用户的高可见功能，涉及连接器市场、邮箱授权、附件、草稿和发信确认。背后的核心诉求是让 LobsterAI 成为可执行日常办公任务的统一入口，而不仅是聊天客户端。

2. **实时模型发现与模型编辑器**  
   链接：[PR #3208](https://github.com/netease-youdao/LobsterAI/pull/3208)  
   **关注点：** 反映用户对多模型、多供应商和快速切换模型目录的持续需求。自动发现能够减少手工录入模型名称、上下文窗口和能力参数的负担。

3. **DSH 插件生态管理及热更新**  
   链接：[PR #3202](https://github.com/netease-youdao/LobsterAI/pull/3202)  
   链接：[PR #3207](https://github.com/netease-youdao/LobsterAI/pull/3207)  
   **关注点：** 插件安装、启停、版本检查和热更新是扩展 AI 智能体能力的关键基础设施。当前实现说明项目正在从固定功能集转向可扩展的平台形态。

4. **IM 权限、审批和会话预设**  
   链接：[PR #3199](https://github.com/netease-youdao/LobsterAI/pull/3199)  
   **关注点：** 体现企业用户对“哪些操作必须人工确认”“不同 IM 渠道应采用不同权限”的需求，是自动化与安全性之间的关键平衡点。

---

## 5. Bug 与稳定性

### 严重

1. **Windows 升级后应用可能在首窗出现前退出**
   - 影响：旧版远程连接 Profile 且包含 owned Agent 的用户存在启动失败风险。
   - 状态：**已有修复 PR**
   - 链接：[PR #3194](https://github.com/netease-youdao/LobsterAI/pull/3194)

2. **DSH 断连后的写入冲突与重复执行风险**
   - 影响：桌面端与后台短暂失联时，可能出现 `already owned by an active write handle`、回执丢失、重复发送或附件重复执行。
   - 状态：**已有修复 PR**
   - 链接：[PR #3204](https://github.com/netease-youdao/LobsterAI/pull/3204)

### 高

3. **DSH Agent 工作区同步竞态**
   - 影响：已配置但没有会话的 Agent 工作区可能不出现在目录树中。
   - 状态：**已有修复 PR**
   - 链接：[PR #3205](https://github.com/netease-youdao/LobsterAI/pull/3205)
   - 链接：[PR #3191](https://github.com/netease-youdao/LobsterAI/pull/3191)

4. **文件重命名导致侧栏标签、保存和预览不同步**
   - 影响：打开的产物可能保留旧路径，随后保存失败，磁盘编辑也无法进入预览。
   - 状态：**已有修复 PR**
   - 链接：[PR #3197](https://github.com/netease-youdao/LobsterAI/pull/3197)

5. **模型 thinking 元数据及 Codex Responses 兼容问题**
   - 影响：模型可能继承错误的思考级别配置，或在未验证元数据下产生不一致行为。
   - 状态：**已有修复 PR**
   - 链接：[PR #3203](https://github.com/netease-youdao/LobsterAI/pull/3203)

### 中

6. **IM 与定时会话错误暴露 `ask_user_question`**
   - 影响：模型可能在不适合提问的渠道调用提问工具，导致响应格式或执行流程异常。
   - 状态：**已有修复 PR**
   - 链接：[PR #3210](https://github.com/netease-youdao/LobsterAI/pull/3210)

7. **飞书话题路由和定时投递异常**
   - 影响：话题回复可能进入错误会话，重启后无法复用原会话，定时消息也可能投递给错误目标。
   - 状态：**已有修复 PR**
   - 链接：[PR #3192](https://github.com/netease-youdao/LobsterAI/pull/3192)

8. **定时提醒无法可靠投递至 IM 私聊**
   - 影响：飞书、钉钉等私聊场景存在收件人或会话 ID 解析错误。
   - 状态：**已有修复 PR**
   - 链接：[PR #3195](https://github.com/netease-youdao/LobsterAI/pull/3195)

9. **IM Bot 设置展示过时的网关重启提示**
   - 影响：用户可能误以为保存后必须重启，造成不必要的操作与支持成本。
   - 状态：**已有修复 PR**
   - 链接：[PR #3198](https://github.com/netease-youdao/LobsterAI/pull/3198)

---

## 6. 功能请求与路线图信号

今日没有新增 Issue，因此以下信号均来自已关闭/合并 PR，代表已进入当前开发分支的需求，而非尚待社区讨论的独立请求。

1. **插件平台化，纳入下一版本的概率较高**  
   插件安装、卸载、启停、版本检查与热更新已形成连续 PR，说明这不是单点试验，而是一组正在落地的基础设施。  
   链接：[PR #3202](https://github.com/netease-youdao/LobsterAI/pull/3202)  
   链接：[PR #3207](https://github.com/netease-youdao/LobsterAI/pull/3207)

2. **多供应商模型目录自动化，纳入下一版本的概率较高**  
   实时发现覆盖 OpenAI、Anthropic、Google，兼容多个 wire protocol，范围完整且已关闭，适合随模型设置重构一同发布。  
   链接：[PR #3208](https://github.com/netease-youdao/LobsterAI/pull/3208)  
   链接：[PR #3203](https://github.com/netease-youdao/LobsterAI/pull/3203)

3. **网易邮箱及个人办公场景扩展，纳入下一版本的概率较高**  
   PR 已覆盖授权、凭据生命周期、操作确认、限额处理和安装包校验，具备较完整的产品闭环。  
   链接：[PR #3209](https://github.com/netease-youdao/LobsterAI/pull/3209)

4. **IM 权限治理，纳入下一版本的概率较高**  
   渠道预设、审批转发、问题转发及会话预设形成完整体系，符合企业自动化安全方向。  
   链接：[PR #3199](https://github.com/netease-youdao/LobsterAI/pull/3199)  
   链接：[PR #3210](https://github.com/netease-youdao/LobsterAI/pull/3210)

5. **Agent 配置生成与记忆管理体验，下一版本继续完善的概率较高**  
   草稿生成、描述回填、记忆按 Agent/范围管理已经落地，后续可能继续补充批量治理、冲突处理与可观测性。  
   链接：[PR #3200](https://github.com/netease-youdao/LobsterAI/pull/3200)  
   链接：[PR #3201](https://github.com/netease-youdao/LobsterAI/pull/3201)

---

## 7. 用户反馈摘要

今日 **没有 Issue 评论或新增 Issue**，因此无法从公开社区反馈中提取可归因的真实用户评价。

可从已关闭 PR 的问题描述中归纳出以下高频使用痛点：

- 用户在桌面端、DSH Host 与 IM 渠道之间切换时，期望会话、Agent、附件及回复状态保持一致；当前主要痛点是**断连恢复、重复发送和跨端路由不稳定**。  
  链接：[PR #3204](https://github.com/netease-youdao/LobsterAI/pull/3204)  
  链接：[PR #3192](https://github.com/netease-youdao/LobsterAI/pull/3192)

- 用户需要通过 IM 直接完成查信、读附件、草稿维护和提醒投递，说明**“在聊天中完成实际工作”**正在成为核心场景。  
  链接：[PR #3209](https://github.com/netease-youdao/LobsterAI/pull/3209)  
  链接：[PR #3195](https://github.com/netease-youdao/LobsterAI/pull/3195)

- 用户对自动执行边界敏感，尤其是发信、删除、审批等高风险动作。明确操作摘要与人工确认可降低误操作风险。  
  链接：[PR #3209](https://github.com/netease-youdao/LobsterAI/pull/3209)  
  链接：[PR #3199](https://github.com/netease-youdao/LobsterAI/pull/3199)

- 用户对模型能力、思考配置和供应商协议差异的容忍度较低；自动发现与统一兼容层可减少手工配置错误。  
  链接：[PR #3208](https://github.com/netease-youdao/LobsterAI/pull/3208)  
  链接：[PR #3203](https://github.com/netease-youdao/LobsterAI/pull/3203)

由于缺少 Issue 评论，不能将以上内容表述为已验证的用户满意度；负面反馈和满意点均需等待正式版本发布后的用户回归数据验证。

---

## 8. 待处理积压

今日数据中：

- **待合并 PR：0 条**
- **活跃 Issue：0 条**
- **已关闭 Issue：0 条**
- 数据未提供历史未响应 Issue/PR 列表

因此，无法识别长期未响应的具体事项，也未发现当日积压。

建议维护者重点关注以下“隐性积压与发布风险”：

1. **23 条 PR 集中合入后的集成回归风险**  
   DSH、IM、模型、插件和设置层改动存在较强关联性，建议在发布前执行跨模块回归矩阵。  
   关联：[PR #3199](https://github.com/netease-youdao/LobsterAI/pull/3199)  
   关联：[PR #3207](https://github.com/netease-youdao/LobsterAI/pull/3207)  
   关联：[PR #3208](https://github.com/netease-youdao/LobsterAI/pull/3208)

2. **正式版本尚未发布**  
   今日无 Release。上述启动、断连、路由和工作区修复需要进入可验证版本，才能形成实际用户价值。  
   关联：[PR #3194](https://github.com/netease-youdao/LobsterAI/pull/3194)  
   关联：[PR #3204](https://github.com/netease-youdao/LobsterAI/pull/3204)

3. **社区反馈数据缺失**  
   当前无法判断用户对邮箱 MCP、插件热更新、模型发现和 IM 权限预设的接受度；建议为高风险改动补充 Issue、迁移说明和灰度验证反馈。

---

## 项目健康度结论

**开发活跃度：高**  
**功能推进度：高**  
**稳定性收敛度：中上**  
**发布与用户验证节奏：偏低**  
**社区透明度：数据不足**

项目今日最重要的成果不是单一功能，而是围绕 DSH 构建了更完整的**插件、模型、IM、Agent 和运行时基础设施**。与此同时，多项 PR 正在处理断连、写入权、升级迁移、跨渠道路由和状态同步等深层稳定性问题，表明架构迁移后的技术债仍较集中。下一阶段应优先完成集成回归、版本封板、升级/备份恢复验证及面向用户的变更说明。

</details>

<details>
<summary><strong>QwenPaw</strong> — <a href="https://github.com/agentscope-ai/QwenPaw">agentscope-ai/QwenPaw</a></summary>

# QwenPaw 项目动态日报

**日期：2026-11-26**  
**数据范围：过去 24 小时 GitHub Issues / Pull Requests 更新**  
**仓库：** [agentscope-ai/QwenPaw](https://github.com/agentscope-ai/QwenPaw)

---

## 1. 今日速览

过去 24 小时项目共更新 **28 条 Issues、50 条 PR**，其中 Issue 新开或仍活跃 16 条、关闭 12 条；PR 待合并 29 条、合并或关闭 21 条，**整体活跃度较高**。今日没有新版本发布，主要工作集中在缺陷修复、会话配置统一、跨渠道行为修正以及视频记忆模块稳定性治理。当前同时存在多项影响核心链路的稳定性问题，尤其是媒体工具结果污染后续模型请求、Windows ReMe 标签索引失败、模型作用域配置不一致等问题，**项目健康度评估为“开发活跃、修复推进中，但稳定性压力偏高”**。PR 数量较多且出现多个跨模块级重构，说明后续版本可能仍需经过较充分的评审和回归验证。

---

## 3. 项目进展

> 今日无新版本发布，暂无 Release 更新、破坏性变更或升级说明。

### 已合并或关闭的重要 PR

1. **媒体请求失败后移除媒体并重试**  
   PR [#8920](https://github.com/agentscope-ai/QwenPaw/pull/8920) 针对历史工具结果中的视频等媒体数据再次进入模型请求、导致后续请求持续返回 400 的问题，增加在通用媒体参数错误时移除媒体并重试的路径。  
   该变更与开放 Issue [#8887](https://github.com/agentscope-ai/QwenPaw/issues/8887) 直接对应，是今日最重要的稳定性修复方向之一。

2. **统一 ACP 与原生执行的会话配置**  
   PR [#8586](https://github.com/agentscope-ai/QwenPaw/pull/8586) 将 ACP 和原生执行流程统一到同一份 `SessionConfig` 快照，使同一 Agent 的不同会话能够使用独立模型与运行参数，而不会修改已保存的默认配置。  
   这为会话级模型隔离、并发运行和多会话配置提供了更一致的基础能力。

3. **清理通道停止流程，要求 Worker 确认完成**  
   PR [#8899](https://github.com/agentscope-ai/QwenPaw/pull/8899) 为渠道停止流程增加 Worker acknowledgment 机制，减少“请求已发送但后台任务尚未真正停止”的不确定状态。  
   对长期运行的 Agent、异步任务和跨渠道控制有直接价值。

4. **支持自定义 Decision Model Endpoint**  
   PR [#8928](https://github.com/agentscope-ai/QwenPaw/pull/8928) 扩展 Decision Model 的解析范围，允许用户为自定义 Provider 配置独立的决策模型端点，并可在 Settings → Models 中新增或编辑。  
   这使 QwenPaw 对私有模型服务和异构模型部署更友好。

5. **插件主题暴露语义颜色角色**  
   PR [#8787](https://github.com/agentscope-ai/QwenPaw/pull/8787) 在已有基础主题色角色之上，进一步向插件开放语义化颜色能力，使插件主题能更完整地适配宿主界面的视觉层级。

6. **支持通过运行时 Base Path 部署 Console/API**  
   PR [#8719](https://github.com/agentscope-ai/QwenPaw/pull/8719) 新增 `QWENPAW_BASE_PATH` 配置，使标准 Console 和 API 可部署在反向代理子路径下。  
   这提升了企业内网、网关和路径前缀环境下的部署兼容性。

7. **Cron 与 Heartbeat 用量写入会话统计**  
   PR [#8707](https://github.com/agentscope-ai/QwenPaw/pull/8707) 修复定时任务和心跳任务未将 Token 用量写入会话 turn records 的问题。  
   修复后 Console 用量面板能够更准确地反映计划任务消耗。

8. **Console 修复对话滚动位置跳回**  
   PR [#8901](https://github.com/agentscope-ai/QwenPaw/pull/8901) 修复发送消息、上下文压缩或推理块展开/收起时，Transcript 突然跳回数屏的问题；相关 Issue 为 [#8888](https://github.com/agentscope-ai/QwenPaw/issues/8888)。

9. **CLI 健康检查改用 GET**  
   PR [#8838](https://github.com/agentscope-ai/QwenPaw/pull/8838) 将不受支持的 `HEAD /api/version` 改为 `GET /version`，修复自动生成 CLI 命令无法识别后台服务的问题；相关 Issue 为 [#8832](https://github.com/agentscope-ai/QwenPaw/issues/8832)。

10. **Discord 分片时避免重复代码围栏**  
    PR 对应 Issue [#8870](https://github.com/agentscope-ai/QwenPaw/issues/8870)，修复代码块起始围栏恰好落在消息分片边界时被重复输出的问题。

11. **Docker 镜像补齐 MCP 前端资源**  
    PR [#8902](https://github.com/agentscope-ai/QwenPaw/pull/8902) 修复 Docker 构建时忽略 `dist` 目录、导致 MCP Console 前端资源未进入 wheel 的问题。  
    这直接改善了容器部署下“后端可用但前端无法加载”的故障。

### 总体推进判断

今日项目在**会话隔离、模型配置、部署适配、渠道控制和用量统计**方面均有实质推进；但 29 个待合并 PR 中包含多项 XL/XXL 级改造，后续仍需重点关注回归测试、配置迁移和跨模块兼容性。

---

## 4. 社区热点

> Issue 数据均显示 0 个点赞，因此“反应最多”无法通过点赞数拉开差异；以下以评论数、影响范围及跨平台关联度排序。

1. **Windows ReMe 标签索引永久失败** — 5 条评论  
   Issue [#8863](https://github.com/agentscope-ai/QwenPaw/issues/8863)  
   用户在两台独立 Windows 机器、QwenPaw `2.3.0` 与 `2.3.0.post1` 上均复现 ReMe 标签索引失败。问题横跨桌面版与内置 `reme-ai 0.4.2.0`，诉求集中于明确平台兼容性边界并提供可靠修复。这是今日最值得优先关注的用户级问题。

2. **AI Prompt Polishing 功能请求** — 3 条评论  
   Issue [#8892](https://github.com/agentscope-ai/QwenPaw/issues/8892)  
   用户希望在聊天输入区增加“AI 提示词润色”按钮，自动将模糊输入整理为更清晰、结构化的高质量提示词。该需求直接提升普通用户使用门槛较低的价值。

3. **Responses continuation summary 在默认推理消耗 Token 预算时失败** — 3 条评论  
   Issue [#8727](https://github.com/agentscope-ai/QwenPaw/issues/8727)  
   OpenAI Responses 协议下，`disable_thinking=True` 可能被处理为移除 `reasoning` 字段，而非限制默认推理消耗，最终使 continuation summary 超出 4000 Token 输出预算。该问题已关闭，说明已有处理路径，但涉及协议兼容性，仍值得检查覆盖范围。

4. **控制命令契约测试在 xdist 下收集阶段中止** — 1 条评论，但影响 CI 稳定性  
   Issue [#8925](https://github.com/agentscope-ai/QwenPaw/issues/8925)  
   `pytest -n` 因不同 worker 的参数化顺序不同而中止，可能导致 CI 无法稳定收集测试。该问题属于工程门禁问题，应尽快修复，避免掩盖真实回归。

5. **MCP 配置页支持 Header 表单** — 1 条评论  
   Issue [#8929](https://github.com/agentscope-ai/QwenPaw/issues/8929)  
   用户指出大量 MCP Server 需要 Header 认证，但当前配置页只能跳转原始 JSON 编辑，配置体验不友好。需求明确、工程量可控，具备进入下一版本的可能。

6. **Console 模型设置缺少 Agent 作用域** — 2 条评论  
   Issue [#8893](https://github.com/agentscope-ai/QwenPaw/issues/8893)  
   用户发现模型选择器仅对当前会话生效，而 Agent 卡片中的“模型”入口实际打开全局模型页，导致已配置的 Agent 模型可能显示为“无模型”。这与会话配置统一 PR [#8586](https://github.com/agentscope-ai/QwenPaw/pull/8586) 高度相关。

---

## 5. Bug 与稳定性

### 严重

1. **媒体数据块导致非多模态模型持续 400**  
   Issue [#8887](https://github.com/agentscope-ai/QwenPaw/issues/8887)  
   `view_video` 或文件发送工具返回的媒体块被写入会话上下文，后续每一轮消息都会再次发送给不支持媒体的模型，最终使会话持续报 `Internal error`。  
   **Fix 状态：** PR [#8920](https://github.com/agentscope-ai/QwenPaw/pull/8920) 已提交，但尚待合并。

2. **Windows ReMe 标签索引永久失败**  
   Issue [#8863](https://github.com/agentscope-ai/QwenPaw/issues/8863)  
   在 `2.3.0` 和 `2.3.0.post1`、多台 Windows 10 x64 设备上稳定复现。  
   **Fix 状态：** 暂未看到明确关联 PR。

3. **代码模式下 `run_tool_batch` 调用失败**  
   Issue [#8903](https://github.com/agentscope-ai/QwenPaw/issues/8903)  
   CodeModeToolkit 仅暴露 `run_code`，真实工具位于 `self.catalog`，工具注册与调用路径可能不一致，影响 Creator 代码模式的核心工具链。  
   **Fix 状态：** 暂未看到明确关联 PR。

### 中等

4. **Code Mode 工具目录访问异常**  
   Issue [#8903](https://github.com/agentscope-ai/QwenPaw/issues/8903) 同时涉及 `run_tool_batch` 在封装后的目录访问问题。建议与上一项一并核查。

5. **Console 模型作用域混乱**  
   Issue [#8893](https://github.com/agentscope-ai/QwenPaw/issues/8893)  
   Agent 默认模型、会话临时模型和全局模型配置边界不清晰，可能造成用户误配。  
   **Fix 状态：** PR [#8586](https://github.com/agentscope-ai/QwenPaw/pull/8586) 正在推进会话配置统一，但 Issue 尚未明确关闭。

6. **手动 `/compact` 使用 Agent 默认模型而非会话模型**  
   Issue [#8464](https://github.com/agentscope-ai/QwenPaw/issues/8464)  
   用户切换会话模型后，压缩摘要仍发给 `agent.json` 的 `active_model`；在模型严格校验参数时可能持续失败。  
   **Fix 状态：** Issue 已关闭，但现有摘要未显示对应 PR，建议确认修复是否覆盖会话级模型切换。

7. **Responses continuation summary 预算失败**  
   Issue [#8727](https://github.com/agentscope-ai/QwenPaw/issues/8727)  
   默认 reasoning 可能占用 continuation summary 的完整输出预算。  
   **Fix 状态：** Issue 已关闭，未展示明确关联 PR。

8. **`pytest -n` 在收集阶段中止**  
   Issue [#8925](https://github.com/agentscope-ai/QwenPaw/issues/8925)  
   xdist worker 的参数化顺序差异触发 collection error，影响并行 CI。  
   **Fix 状态：** 暂未看到明确关联 PR。

9. **Discord 代码围栏分片重复**  
   Issue [#8870](https://github.com/agentscope-ai/QwenPaw/issues/8870)  
   消息分片边界恰好位于代码围栏起始行时出现重复围栏。  
   **Fix 状态：** Issue 已关闭，预计由对应格式化修复处理。

### 较低

10. **JSON Pointer 负索引写入错误元素**  
    Issue [#8904](https://github.com/agentscope-ai/QwenPaw/issues/8904)  
    裸 `int(token)` 接受 RFC 6901 不允许的负数组索引，可能静默写入最后一个元素。  
    **Fix 状态：** PR [#8905](https://github.com/agentscope-ai/QwenPaw/pull/8905) 已提交，待合并。

11. **`allOf` 下的字符串工具参数不执行类型转换**  
    Issue [#8910](https://github.com/agentscope-ai/QwenPaw/issues/8910)  
    `_schema_permits_string()` 未检查 `allOf`，导致部分受限字符串字段无法正确强制转换。  
    **Fix 状态：** PR [#8911](https://github.com/agentscope-ai/QwenPaw/pull/8911) 已提交，待合并。

12. **Web Grounding 将 JSON `null` 转为字符串 `"None"`**  
    Issue [#8908](https://github.com/agentscope-ai/QwenPaw/issues/8908)  
    `as_list()` 对列表元素直接执行 `str(item)`，导致空值污染搜索关键词。  
    **Fix 状态：** PR [#8909](https://github.com/agentscope-ai/QwenPaw/pull/8909) 已提交，待合并。

13. **结构化响应中的空文本块吞掉真实答案**  
    Issue [#8906](https://github.com/agentscope-ai/QwenPaw/issues/8906)  
    `_first_text_in_list()` 遇到首个空字符串即返回，忽略后续有效内容。  
    **Fix 状态：** PR [#8907](https://github.com/agentscope-ai/QwenPaw/pull/8907) 已提交，待合并。

14. **Feishu 非对象 JSON 导致 AttributeError**  
    Issue [#8912](https://github.com/agentscope-ai/QwenPaw/issues/8912)  
    `extract_json_key()` 假定 `json.loads()` 返回字典，数组、字符串、数字等合法 JSON 会触发异常。  
    **Fix 状态：** PR [#8913](https://github.com/agentscope-ai/QwenPaw/pull/8913) 已提交，待合并。

15. **Video Memory JSON 提取边界不稳健**  
    Issues [#8914](https://github.com/agentscope-ai/QwenPaw/issues/8914)、[#8916](https://github.com/agentscope-ai/QwenPaw/issues/8916)  
    前置说明文字中若包含方括号或花括号，可能误识别为 JSON 起点。  
    **Fix 状态：** PR [#8915](https://github.com/agentscope-ai/QwenPaw/pull/8915)、[#8917](https://github.com/agentscope-ai/QwenPaw/pull/8917) 已提交，待合并。

16. **Video Memory 根主题空值或非字符串导致崩溃**  
    Issue [#8931](https://github.com/agentscope-ai/QwenPaw/issues/8931)  
    `merged_graph_payload()` 对 LLM/VLM 返回的 `themes`、`key_entities` 缺少完整空值防护。  
    **Fix 状态：** PR [#8933](https://github.com/agentscope-ai/QwenPaw/pull/8933) 已提交，待合并。

17. **Video Memory 尾段合并超过最大场景时长**  
    Issue [#8930](https://github.com/agentscope-ai/QwenPaw/issues/8930)  
    `plan_segments()` 在吸收短尾片段时可能生成超过 `max_scene_sec` 的分段。  
    **Fix 状态：** PR [#8932](https://github.com/agentscope-ai/QwenPaw/pull/8932) 已提交，待合并。

---

## 6. 功能请求与路线图信号

1. **AI Prompt Polishing**  
   Issue [#8892](https://github.com/agentscope-ai/QwenPaw/issues/8892)  
   用户希望在输入区增加一键润色按钮，生成更清晰、更有结构的 Prompt。它与聊天入口、模型调用和消息编辑组件关联，预计实现成本中等。若作为轻量功能加入下一版本，可明显改善新用户上手体验。

2. **MCP Header 表单化配置**  
   Issue [#8929](https://github.com/agentscope-ai/QwenPaw/issues/8929)  
   当前认证 Header 只能通过原始 JSON 配置，门槛较高。该需求定义清晰，已有成熟字段映射方式，**较可能进入下一版本**。

3. **Agent 级模型配置与作用域完善**  
   Issue [#8893](https://github.com/agentscope-ai/QwenPaw/issues/8893)  
   结合 PR [#8586](https://github.com/agentscope-ai/QwenPaw/pull/8586)，项目正从“全局/会话临时配置”向“Agent 默认 + 会话覆盖”演进。后续大概率会补齐 Agent 卡片入口、模型显示和继承规则，是重要的近期路线信号。

4. **自定义 Decision Model Endpoint**  
   PR [#8928](https://github.com/agentscope-ai/QwenPaw/pull/8928)  
   自定义 Provider 的决策模型现可拥有独立端点。若顺利合并，可视为下一版本在“模型可插拔和企业级部署”方向的重要增强。

5. **运行时 Base Path 部署**  
   PR [#8719](https://github.com/agentscope-ai/QwenPaw/pull/8719)  
   `QWENPAW_BASE_PATH` 支持反向代理子路径，明显扩展 Docker、NAS、内网网关和 SaaS 代理场景。该能力预计会与 Docker/MCP 部署修复一起进入后续版本。

6. **Telegram Forum Topic 会话隔离**  
   Issue [#8827](https://github.com/agentscope-ai/QwenPaw/issues/8827) 已关闭  
   需求是按 Telegram 论坛话题隔离 Agent 会话。Issue 已关闭但摘要未给出关联 PR，表明功能可能已经实现或通过其他方式处理，建议在下一版本说明中关注该能力的正式发布。

7. **插件主题扩展**  
   PR [#8787](https://github.com/agentscope-ai/QwenPaw/pull/8787)  
   主题能力从基础颜色角色向语义角色扩展，是插件生态成熟度提升的明确信号。

---

## 7. 用户反馈摘要

### 主要痛点

- **跨平台一致性不足。** Windows 用户在多台机器、两个 QwenPaw 版本上均遇到 ReMe 标签索引失败，说明问题并非偶发环境因素，而是 Windows 路径或 ReMe 集成中的系统性兼容缺陷。参见 [#8863](https://github.com/agentscope-ai/QwenPaw/issues/8863)。

- **媒体工具会“毒化”整个后续会话。** 用户使用 `view_video` 或文件工具后，后续消息持续报 400/Internal error，即使当前问题与媒体无关也无法继续对话，对长会话影响尤其严重。参见 [#8887](https://github.com/agentscope-ai/QwenPaw/issues/8887)。

- **会话模型与全局/Agent 模型的概念不够清晰。** 用户在 Console 中切换模型后，不清楚修改的是会话还是 Agent；部分已配置模型甚至显示为“无模型”。参见 [#8893](https://github.com/agentscope-ai/QwenPaw/issues/8893)。

- **高级配置仍依赖手工编辑 JSON。** MCP Header 认证需求非常常见，但 UI 不支持会迫使用户回到原始 JSON 配置，降低产品完成度。参见 [#8929](https://github.com/agentscope-ai/QwenPaw/issues/8929)。

- **提示词编写成本较高。** 用户希望一键将模糊需求转化为结构化 Prompt，反映出普通用户对“Agent 编程化交互”的直接需求。参见 [#8892](https://github.com/agentscope-ai/QwenPaw/issues/8892)。

- **失败提示可能诱导用户丢失上下文。** 压缩失败时直接建议 `/clear`，用户担心误清除有价值上下文。相关 Issue [#8848](https://github.com/agentscope-ai/QwenPaw/issues/8848) 已关闭，表明维护者已关注该提示的误导风险。

### 使用场景与积极信号

- Windows 桌面用户是 ReMe 与媒体交互问题的高影响群体，需要作为独立平台建立回归测试矩阵。
- MCP 集成用户普遍需要 Header 认证，说明 MCP 已进入真实部署阶段，而不仅是实验性能力。
- 多渠道用户对会话隔离、停止确认、Discord 格式正确性和飞书消息解析稳定性的需求较明确。
- Creator/Video Memory 用户主动提交了边界测试和 RFC 6901 语义问题，显示出较强的技术参与度。

---

## 8. 待处理积压

1. **Windows ReMe 标签索引无明确修复 PR**  
   Issue [#8863](https://github.com/agentscope-ai/QwenPaw/issues/8863)  
   影响两个已发布版本且可稳定复现，应优先确认维护者响应、定位路径转换逻辑并安排 Windows CI。

2. **代码模式 `run_tool_batch` 失败**  
   Issue [#8903](https://github.com/agentscope-ai/QwenPaw/issues/8903)  
   尚未看到明确关联修复。Code Mode 属于核心执行路径，建议补充工具目录注册和批量调用的端到端测试。

3. **xdist 参数化顺序导致测试无法收集**  
   Issue [#8925](https://github.com/agentscope-ai/QwenPaw/issues/8925)  
   会直接降低 CI 可信度。应统一参数化顺序或确保测试顺序不影响结果。

4. **Console Agent 模型作用域仍待闭环**  
   Issue [#8893](https://github.com/agentscope-ai/QwenPaw/issues/8893)  
   PR [#8586](https://github.com/agentscope-ai/QwenPaw/pull/8586) 已推进底层统一，但 UI 入口和配置继承语义仍需明确，建议维护者补充设计说明和迁移指引。

5. **29 个 PR 等待合并，评审压力偏高**  
   当前待合并 PR 共 **29 个**，其中包括会话配置统一 [#8586](https://github.com/agentscope-ai/QwenPaw/pull/8586)、Base Path 部署 [#8719](https://github.com/agentscope-ai/QwenPaw/pull/8719)、插件主题 [#8787](https://github.com/agentscope-ai/QwenPaw/pull/8787) 等大改。建议按“数据破坏风险、核心链路、用户体验、部署增强”分批评审，避免多个高影响变更长期滞留。

6. **大量已关闭 Issue 的修复映射不清晰**  
   包括 [#8464](https://github.com/agentscope-ai/QwenPaw/issues/8464)、[#8727](https://github.com/agentscope-ai/QwenPaw/issues/8727)、[#8870](https://github.com/agentscope-ai/QwenPaw/issues/8870) 等。当前摘要未完整展示关联 PR，建议在版本汇总中列出“Issue → PR → Release”的可追溯关系。

---

## 项目健康度结论

**活跃度：高。维护吞吐：较高。稳定性：中等偏弱。发布状态：无新版本，修复集中进入评审/合并阶段。**

今日最值得关注的三个方向是：

1. **媒体数据导致会话持续失败**，修复 PR 已出现但尚待合并；  
2. **Windows + ReMe 兼容性**，多版本、多机器稳定复现但缺少明确修复；  
3. **会话与 Agent 模型配置统一**，底层重构已经推进，UI 和迁移体验仍需补齐。

若上述核心问题在下一轮 Release 前完成验证，预计项目健康度将明显改善；否则，新增功能与大量待合并 PR 的累积可能增加发布回归风险。

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/NousResearch/hermes-agent">NousResearch/hermes-agent</a></summary>

# Hermes Agent 项目动态日报

**统计日期：2026-11-26**  
**数据范围：过去 24 小时**  
**项目：** [NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent)

---

## 一、今日速览

Hermes Agent 过去 24 小时保持较高活跃度，共更新 **50 条 Issues**（44 条新开或持续活跃、6 条关闭）和 **50 条 PR**（23 条待合并、27 条已合并或关闭），另有 **1 个 canary 版本发布**。讨论重点集中在 **Agent 上下文压缩与持久记忆、多 Profile 网关、A2A 超时与会话恢复、Windows/Desktop 稳定性** 四条主线。

项目当前呈现出典型的“**高并发开发 + 高密度缺陷暴露**”状态：功能创新和修复吞吐都很高，但网关调度、消息投递、OAuth 刷新及多 Profile 隔离等基础设施问题仍在集中暴露。综合评估，项目健康度为 **良好但存在稳定性压力**：贡献活跃、修复响应及时，不过核心链路的回归风险已接近需要专项收敛的阶段。

---

## 二、版本发布

### `canary.20261125T064800Z-v0.23.4`

- **发布日期：** 2026-11-25
- **发布类型：** Canary
- **版本号：** `v0.23.4+canary.20261125T064800Z`
- **Release 页面：** [GitHub Release](https://github.com/NousResearch/hermes-agent/releases/tag/canary.20261125T064800Z-v0.23.4)

#### 更新重点

现有 Release 说明主要提供版本构建及 Hermes Desktop 下载入口；从当天已合入或推进中的 PR 可看出，该 canary 之后正在持续吸收以下方向：

- 模型 Provider Catalog TTL 配置化；
- A2A 多 Profile 单监听器及路径隔离；
- Desktop 重设计工作区；
- 上下文压缩后重新列出已读或已编辑文件；
- Desktop Unicode 斜杠命令、屏幕阅读器标签；
- 共享 Profile OAuth 刷新串行化；
- Telegram 缓冲消息可靠交付；
- Slack 子团队提及过滤；
- Windows Discord Opus 诊断修复。

#### 破坏性变更与迁移注意事项

当前 Release 正文未展示明确标注的 breaking changes 或完整迁移清单，但建议 Canary 用户重点验证：

1. **多 Profile 网关**：特别关注 A2A、Desktop 会话和命名 Profile 路由；
2. **Desktop 重设计**：可通过“重新设计的界面”开关回退经典 Shell；
3. **OAuth 共享登录**：Codex、Anthropic、xAI 等使用轮换 Refresh Token 的 Provider 可能需要重新授权；
4. **Gateway 重启与 Kanban**：确认在途卡片、Worker 中断和自动恢复行为；
5. **Canary 与稳定版并存**：生产环境不建议直接替换稳定版，升级前应备份 Profile、会话和插件配置。

> 上述内容中，Release 本身仅明确版本和下载信息；具体变更方向来自当日 PR 动态。

---

## 三、项目进展

过去 24 小时共处理 **50 条 PR**，其中 **27 条已合并或关闭**，说明项目迭代吞吐较高。已关闭 PR 中，部分属于功能落地，部分属于重复、替代或问题转移；真正明确的功能完成情况仍需结合合并记录与 Release 差异进一步核验。

### 1. Gateway 迁移与启动流程得到集中修复

- [#159790](https://github.com/NousResearch/hermes-agent/pull/159790)：后端迁移重启后增加落地验证，修复“迁移请求已经发出，但验证与重启竞态”的问题。
- [#159609](https://github.com/NousResearch/hermes-agent/pull/159609)：等待指定网络接口地址就绪后再绑定 WebApp Host，解决动态地址尚未分配导致的 `EADDRNOTAVAIL`。
- [#160146](https://github.com/NousResearch/hermes-agent/pull/160146)：在缺少 `XDG_RUNTIME_DIR` 或 D-Bus 用户总线的 Shell 中也能找到由 `systemd --user` 管理的 Dashboard。
- [#159175](https://github.com/NousResearch/hermes-agent/pull/159175)：正确解析内联 Bootstrap 重新拉起的 Dashboard 与 Serve 参数；对应关闭 Issue [#158686](https://github.com/NousResearch/hermes-agent/issues/158686)。

**进展评价：** 这组改动提升了 Gateway 启停、迁移和异构部署环境的可靠性，尤其利好 SSH、Headless、动态网络及 macOS `launchd` 场景。

### 2. A2A 多 Profile 架构得到修正

- [#160330](https://github.com/NousResearch/hermes-agent/pull/160330)：将 A2A 调整为每个 Gateway 只有一个监听器，多 Profile 通过 `/p/<profile>/` 挂载，避免多个 Adapter 争抢同一端口并触发 `EADDRINUSE`。

**进展评价：** 这是 Gateway 多路复用架构的重要修正，有助于消除 Profile 间端口竞争，并为后续 A2A 路由、超时和结果回收改造提供统一基础。

### 3. 消息平台可靠性持续增强

- [#160253](https://github.com/NousResearch/hermes-agent/pull/160253)：插件平台尚未加载时，不再删除既有会话路由，而是保留路由等待平台恢复注册。
- [#160356](https://github.com/NousResearch/hermes-agent/pull/160356)：共享 Root Profile 登录的多个 Profile 串行执行 OAuth Refresh，避免轮换 Token 相互覆盖。
- [#111162](https://github.com/NousResearch/hermes-agent/pull/111162)：扩大 Telegram 长文本批处理窗口，降低长消息分段到达时被拆成多个 Turn 的概率。
- [#160357](https://github.com/NousResearch/hermes-agent/pull/160357)：Desktop 斜杠命令支持 Unicode 字母和组合字符，中文、韩文查询不再直接关闭命令菜单。

**进展评价：** 消息“收到但丢失”“错误路由”“重复刷新”和多语言命令不可用等基础体验问题正在被系统性修正。

### 4. Desktop 可访问性和性能改进进入合并通道

- [#160329](https://github.com/NousResearch/hermes-agent/pull/160329)：为 Messaging 字段清除按钮添加不暴露敏感值的 `aria-label`，修复 [#160237](https://github.com/NousResearch/hermes-agent/issues/160237)。
- [#152168](https://github.com/NousResearch/hermes-agent/pull/152168)：引入重设计后的 Agent Workspace，并提供一键回退经典 Shell 的恢复路径。
- [#79071](https://github.com/NousResearch/hermes-agent/pull/79071)：新增 Reduced Effects 偏好，减少持续动画和渐变效果。
- [#160359](https://github.com/NousResearch/hermes-agent/issues/160359)：暴露 Artifacts 表格未分页问题，约 3.3 万条记录可能导致 Windows Desktop 整体退出；当前列表中未见直接修复 PR。

### 5. 上下文压缩方向加速演进

- [#145343](https://github.com/NousResearch/hermes-agent/pull/145343)：压缩后重新列出此前已读取或编辑的文件，缩小长会话中“模型仍记得文件内容”的认知偏差。
- [#136541](https://github.com/NousResearch/hermes-agent/pull/136541)：压缩后的原文摘要更准确地反映用户表达，修复错误引用和内容偏置。
- 长期 RFC [#143379](https://github.com/NousResearch/hermes-agent/issues/143379) 正在讨论持久记录、来源追踪、压缩治理与可重读存储。

**进展评价：** 压缩已从单纯的“缩短上下文”转向“记录治理和可恢复性”，属于 Hermes 长期记忆能力的关键路线。

---

## 四、社区热点

### 1. Doc-Chain Substrate：持久记录与压缩治理

- **Issue：** [#143379](https://github.com/NousResearch/hermes-agent/issues/143379)
- **评论数：** 59，为今日最活跃条目
- **热度判断：** 最高

该 RFC 试图建立跨会话压缩仍可追溯的持久记录层，解决 Session 被压缩后 Agent 需要用户重复提供上下文的问题。核心诉求包括：

- 文档及工具调用结果具备来源和 provenance；
- 压缩后可以重新读取关键文件；
- 明确谁可以写、删改或治理持久记录；
- 建立索引、保留策略和安全边界。

其背后的实质诉求是：**让 Hermes 从“单次上下文模型”升级为拥有可审计长期记忆的 Agent Runtime**。

### 2. Proactivity 路线图：后台主动任务的“可控性”

- **Issue：** [#158538](https://github.com/NousResearch/hermes-agent/issues/158538)
- **评论数：** 13

维护者比较了 Hark、OpenAI dots、Meta Muse 和 Grok Bot 等产品的后台主动执行模式。社区关注点不是单纯增加主动行为，而是：

- 每次主动执行必须来自用户已批准的 Job；
- 展示实际运行的 Prompt；
- 限制后台读取范围；
- 避免噪声、越界扫描及不受控时机；
- 让用户清楚知道 Agent 为什么主动行动。

这是 Hermes “Personal AI”定位的重要产品信号：**主动性与可解释性必须绑定，而非单纯追求全自动。**

### 3. Desktop Browser 前台会话误判

- **Issue：** [#133421](https://github.com/NousResearch/hermes-agent/issues/133421)
- **评论数：** 11，👍 1

Browser Foreground Guard 使用 Primary Chat 而不是当前 Focused Chat 判断请求身份，导致真正获得焦点的会话仍被当作后台会话拒绝。背后诉求是：Desktop 多会话操作中，浏览器自动化必须准确绑定到用户当前选中的 Tile。

### 4. Windows Kanban Worker 已绑定却收不到 Prompt

- **Issue：** [#146955](https://github.com/NousResearch/hermes-agent/issues/146955)
- **评论数：** 10

Worker 已成功创建、绑定并保持存活，却停留在 `read_frame` 直到超时，说明调度、Profile 路由和消息注入之间存在断点。相关后续还出现了：

- [#148006](https://github.com/NousResearch/hermes-agent/issues/148006)：Kanban 配置只在 Tick 间重新读取，重启才能应用上限且会杀死在途任务；
- [#160319](https://github.com/NousResearch/hermes-agent/issues/160319)：`gateway restart -y` 无法及时中断受管 Kanban Worker，可能等待约 45 分钟。

这些问题共同表明，**Kanban 与 Gateway 生命周期管理仍是当前最薄弱的集成层之一**。

### 5. Gateway 中断后恢复会话造成命令重复执行

- **Issue：** [#159438](https://github.com/NousResearch/hermes-agent/issues/159438)
- **评论数：** 8

Gateway 在 `terminal` 命令执行途中被杀死后，恢复会话没有保留该次工具调用，模型可能再次运行相同命令。对于终端、文件写入、部署或支付类操作，这是潜在的重复副作用风险。

### 6. Desktop Bot Relay 连接归属抖动

- **Issue：** [#139219](https://github.com/NousResearch/hermes-agent/issues/139219)
- **评论数：** 6

双机部署中 `roster.json` 会在 Local 与 Remote 之间反复改写连接归属，同时 Tool Layer 缺少 machine-root `bot_peers` 信息，造成可见性与路由状态不一致。该问题反映多机 Agent 协作层仍有状态模型不统一的问题。

---

## 五、Bug 与稳定性

### P1：高优先级

| 问题 | 影响 | 状态 |
|---|---|---|
| [#143940](https://github.com/NousResearch/hermes-agent/issues/143940)：HTTP 402 等不可重试 API 错误被写回 User Role，再次触发 Turn | 可能形成无界 Token 消耗和自动重试循环 | **未见明确 fix PR** |
| [#159438](https://github.com/NousResearch/hermes-agent/issues/159438)：Gateway 中断后恢复丢失工具调用上下文 | 终端或写操作可能被重复执行 | **未见明确 fix PR** |

其中 [#143940](https://github.com/NousResearch/hermes-agent/issues/143940) 已被标记 P1，是当前最需要维护者优先确认的稳定性问题之一。

### P2：高影响

| 问题 | 影响 | 状态 |
|---|---|---|
| [#146955](https://github.com/NousResearch/hermes-agent/issues/146955)：Windows 多 Profile Kanban Worker 不收到 Prompt | Worker 假运行、空等至超时 | **未见直接 fix PR**；相关架构修复包括 [#160330](https://github.com/NousResearch/hermes-agent/pull/160330) |
| [#133421](https://github.com/NousResearch/hermes-agent/issues/133421)：Desktop Browser Guard 拒绝真实聚焦会话 | 浏览器工具无法用于当前会话 | **未见 fix PR** |
| [#139219](https://github.com/NousResearch/hermes-agent/issues/139219)：Bot Relay Roster 归属抖动 | 多机消息路由与可见性不一致 | **未见 fix PR** |
| [#148006](https://github.com/NousResearch/hermes-agent/issues/148006)：Kanban 上限配置需重启才能生效 | 配置延迟且重启破坏在途卡片 | **未见 fix PR** |
| [#160319](https://github.com/NousResearch/hermes-agent/issues/160319)：重启无法中断 Kanban Worker | 最长可能约 45 分钟无法完成重启 | **未见 fix PR** |
| [#160309](https://github.com/NousResearch/hermes-agent/issues/160309)：Desktop 读取非默认 Profile 会话时遗漏 `?profile=` | Transcript 返回 404 | **未见 fix PR** |
| [#160360](https://github.com/NousResearch/hermes-agent/issues/160360)：命名 Profile 路由被错误记录为 `agent:main:` | 升级后既有 Desktop Chat 无法恢复 | **未见 fix PR**；与多 Profile 架构相关 |
| [#109089](https://github.com/NousResearch/hermes-agent/issues/109089)：A2A 调用被固定 420 秒并发工具超时截断 | 配置的 Peer Timeout 实际失效 | **未见直接 fix PR** |
| [#145789](https://github.com/NousResearch/hermes-agent/issues/145789)：A2A 超时后任务被标记失败，迟到回复被丢弃 | 长任务无法返回最终结果 | **未见直接 fix PR** |
| [#147303](https://github.com/NousResearch/hermes-agent/issues/147303)：A2A 实际执行成功但接口永久报告失败 | 状态查询与真实执行结果矛盾 | **未见直接 fix PR** |
| [#160276](https://github.com/NousResearch/hermes-agent/issues/160276)：Telegram Buffered Message 在非取消异常下丢失 | 用户消息未进入处理链 | **相关 PR [#111162](https://github.com/NousResearch/hermes-agent/pull/111162) 已关闭，但未明确覆盖此异常路径** |
| [#160359](https://github.com/NousResearch/hermes-agent/issues/160359)：3.3 万 Artifacts 未分页导致 Windows Desktop 硬退出 | 应用崩溃或无响应 | **未见 fix PR** |
| [#160129](https://github.com/NousResearch/hermes-agent/issues/160129)：Windows `/update` 缺少 Job Object Breakaway Fallback | 更新命令返回 Access Denied | **未见 fix PR** |
| [#160199](https://github.com/NousResearch/hermes-agent/issues/160199)：Checkout 位于 `~/.hermes` 时 Home IO Guard 测试失败 | 安全测试出现误报 | **未见 fix PR** |

### P3：中低优先级但影响体验

| 问题 | 影响 | 状态 |
|---|---|---|
| [#127468](https://github.com/NousResearch/hermes-agent/issues/127468)：`hermes pause` 后仍可能继续 Dispatch | 暂停语义失效，可能意外启动 Worker | **未见 fix PR** |
| [#49114](https://github.com/NousResearch/hermes-agent/issues/49114)：Desktop 模型可见性只保存在 localStorage | 换 Origin 或环境后设置丢失 | **未见 fix PR** |
| [#109089](https://github.com/NousResearch/hermes-agent/issues/109089)：A2A 并发批次固定超时 | 长任务被误杀 | **未见直接 fix PR** |
| [#154700](https://github.com/NousResearch/hermes-agent/issues/154700)：Skill Lock 将读取引用路径误判为写入目标 | 合法的解释器命令被拒绝 | **未见 fix PR** |
| [#131082](https://github.com/NousResearch/hermes-agent/issues/131082)：Camofox Vision Screenshot 绕过缓存与清理 | Docker 沙箱中截图持续累积 | **未见 fix PR** |
| [#160308](https://github.com/NousResearch/hermes-agent/issues/160308)：Slack 子团队 Mention 未被过滤 | Bot 对非目标群组消息作出响应 | **未见 fix PR** |
| [#160308](https://github.com/NousResearch/hermes-agent/issues/160308)：Slack Group Mention 误触发 | 噪音与自动化范围扩大 | **未见 fix PR** |
| [#149376](https://github.com/NousResearch/hermes-agent/issues/149376)：系统通知未本地化 | 非英语用户收到硬编码英文提示 | **未见 fix PR** |
| [#160331](https://github.com/NousResearch/hermes-agent/pull/160331)：Windows Opus Doctor 假阴性 | 健康安装被错误提示缺少 DLL | **已有 fix PR** |

---

## 六、功能请求与路线图信号

### 1. 持久记忆与可恢复上下文：最明确的主线

- RFC：[#143379](https://github.com/NousResearch/hermes-agent/issues/143379)
- 压缩后文件索引：[#145343](https://github.com/NousResearch/hermes-agent/pull/145343)
- 用户原文保真：[#136541](https://github.com/NousResearch/hermes-agent/pull/136541)

这是最可能进入下一轮版本的核心方向。重点预计包括：

- 记录 provenance；
- 压缩后自动重读关键文件；
- 记录治理和访问控制；
- 避免模型把 Stub 当成完整文件内容。

### 2. 可控的主动执行能力

- 路线图 Issue：[#158538](https://github.com/NousResearch/hermes-agent/issues/158538)

可能进入后续版本的产品形态包括：

- 用户批准的 Proactive Job；
- 可审计的 Prompt 与执行记录；
- 主动运行范围限制；
- 安静时段或频率控制；
- 明确的“为何触发”解释。

相比“无边界后台 Agent”，Hermes 当前更可能优先发展“**受控且透明**”的主动性。

### 3. Desktop 重设计

- PR：[#152168](https://github.com/NousResearch/hermes-agent/pull/152168)
- 效果偏好 PR：[#79071](https://github.com/NousResearch/hermes-agent/pull/79071)
- 无障碍 PR：[#160329](https://github.com/NousResearch/hermes-agent/pull/160329)

重设计 Shell 已成为默认方向的可能性较高，因为已提供 Classic Shell 回退机制。同时，Reduced Effects、ARIA 标签、Unicode 命令等细节表明 Desktop 正在补齐成熟产品所需的设置持久化、无障碍和本地化能力。

### 4. GUI 暴露上下文长度、压缩和 KV Cache

- Feature：[#141496](https://github.com/NousResearch/hermes-agent/issues/141496)

用户希望在 Windows、本地 GGUF 模型和大显存受限场景中直接控制：

- Context Length；
- Compaction 阈值；
- KV Cache 设置；
- 本地模型资源占用。

结合压缩主线和 [#145343](https://github.com/NousResearch/hermes-agent/pull/145343)，该需求较可能进入近期迭代，但具体优先级仍取决于 Desktop 设置架构改造量。

### 5. Provider Catalog 配置化

- PR：[#160335](https://github.com/NousResearch/hermes-agent/pull/160335)

模型目录 TTL 从硬编码转为配置项，并可通过已声明模型加盐，降低自定义 Endpoint 的缓存冲突。该项已经以明确 PR 形式推进，合并概率相对较高。

### 6. 插件目录继续扩张

- PR：[#151841](https://github.com/NousResearch/hermes-agent/pull/151841)：新增 Kaizen Views 1.0.0，替代原有 AUI/OpenUI 分散条目。
- PR：[#160334](https://github.com/NousResearch/hermes-agent/pull/160334)：Vector Platform 升级至 v0.6.1，并修正工具声明。
- 提交申请：[#149735](https://github.com/NousResearch/hermes-agent/issues/149735)：`spec-driven-data-analysis` 插件。

插件生态正从“单插件接入”走向“版本固定、工具契约校验、统一目录治理”。

### 7. 移动端和跨平台体验

- iOS 截图拖入输入框：[#160358](https://github.com/NousResearch/hermes-agent/issues/160358)
- Windows Update：[#160129](https://github.com/NousResearch/hermes-agent/issues/160129)
- Windows Artifacts 性能：[#160359](https://github.com/NousResearch/hermes-agent/issues/160359)

移动端目前仍偏 Issue 驱动阶段；短期更值得优先处理的是 Windows 稳定性和大型数据集性能，而不是新增移动端交互。

---

## 七、用户反馈摘要

### 1. 长会话压缩后，用户不愿重复提供上下文

用户对压缩的核心抱怨不是“摘要不够短”，而是：

- Agent 忘记先前读取或编辑过的文件；
- 文档被压缩成一行 Stub 后，模型仍假装掌握完整内容；
- 用户原文被摘要失真；
- 重新建立上下文显著降低自动化连续性。

这与 [#143379](https://github.com/NousResearch/hermes-agent/issues/143379)、[#145343](https://github.com/NousResearch/hermes-agent/pull/145343) 和 [#136541](https://github.com/NousResearch/hermes-agent/pull/136136541) 所代表的用户诉求高度一致。

### 2. 多 Profile 和多机器部署难用

Windows 多 Profile 用户报告 Kanban Worker“已启动但不工作”，Desktop 命名 Profile 又出现会话恢复失败。Bot Relay 用户还遇到 Local/Remote 归属来回变化。

这些反馈说明，当前复杂部署中的主要障碍并非基础配置，而是：

- Profile 路由没有稳定贯穿 Gateway、Desktop、Worker 和插件；
- 状态恢复依赖默认 Profile；
- 多机拓扑缺少统一身份和路由模型。

### 3. 后台主动能力有价值，但必须可控

用户和路线图讨论都表明，Hermes 的主动执行不能简单复制竞品。用户更关心：

- 是否由自己批准；
- 实际读取了什么；
- 为什么在此时执行；
- 是否会重复打扰；
- 是否能限制作用范围。

因此，透明度与权限边界是主动能力能否被接受的先决条件。

### 4. Windows Desktop 是当前体验痛点集中区

Windows 用户遇到的典型问题包括：

- `/update` 被 Job Object 权限阻止；
- Discord Voice Doctor 误报 Opus DLL 缺失；
- 大型 Artifacts 列表导致应用硬退出；
- 模型可见性设置无法持久化；
- Kanban Worker Prompt 丢失；
- 重启无法及时中断 Worker。

这表明 Windows 表面功能覆盖较广，但**生命周期管理、性能和系统集成仍需统一治理**。

### 5. 消息平台存在“已收到但未处理/错误处理”的信任问题

Telegram Buffered Message 异常丢失、Slack 子团队 Mention 被错误响应，以及插件尚未加载时路由被删除，均会影响用户对消息自动化的信任。这类问题应按数据完整性事件处理，而不只是普通 UI Bug。

---

## 八、待处理积压

### 1. 长期高热 RFC，需形成明确技术决策

- [#143379](https://github.com/NousResearch/hermes-agent/issues/143379)  
  创建于 2026-10-23，更新至 11-26，59 条评论，是当前讨论量最高的架构议题。建议尽快拆分出：

  1. 持久记录 Schema；
  2. provenance 与权限模型；
  3. 压缩后重读策略；
  4. 保留与清理策略；
  5. 第一阶段可合并 PR。

### 2. Desktop 模型设置仅依赖 localStorage

- [#49114](https://github.com/NousResearch/hermes-agent/issues/49114)  
  自 2026-06-19 起持续存在。虽然今日评论数不高，但属于设置持久化的基础架构问题，应与 Desktop 重设计一并收敛。

### 3. `hermes pause` 未形成全局停止语义

- [#127468](https://github.com/NousResearch/hermes-agent/issues/127468)  
  自 2026-09-29 起存在，5 个调用点忽略 ESTOP。对涉及自动任务、文件修改和终端执行的 Agent 而言，暂停失效属于信任与安全问题，应提升优先级。

### 4. A2A 超时体系存在三层不一致

- [#109089](https://github.com/NousResearch/hermes-agent/issues/109089)
- [#145789](https://github.com/NousResearch/hermes-agent/issues/145789)
- [#147303](https://github.com/NousResearch/hermes-agent/issues/147303)

分别涉及：

- 调用端固定 420 秒截断；
- 超时后迟到回复被丢弃；
- 最终成功无法覆盖中间失败状态。

这些问题相互关联，适合合并为一个统一的 **A2A Deadline / Cancellation / Result Reconciliation** 专项，而不是分别打补丁。

### 5. Browser 会话身份模型仍未统一

- [#133421](https://github.com/NousResearch/hermes-agent/issues/133421)  
  创建于 2026-10-05，已积累 11 条评论。当前 Primary Chat 与 Focused Chat 身份不一致，可能扩展为 Desktop 多窗口、多 Tile 自动化的系统性状态问题。

### 6. Windows Kanban 与 Gateway 生命周期积压

- [#146955](https://github.com/NousResearch/hermes-agent/issues/146955)
- [#148006](https://github.com/NousResearch/hermes-agent/issues/148006)
- [#160319](https://github.com/NousResearch/hermes-agent/issues/160319)

三者分别覆盖 Prompt 丢失、配置热加载和重启中断。建议形成统一的 Worker Supervisor 设计，明确：

- Worker 注册与 Prompt 注入确认；
- 配置热更新；
- 优雅取消；
- 在途任务恢复；
- Gateway 重启的有限等待时间。

### 7. 大数据量 Desktop 渲染问题

- [#160359](https://github.com/NousResearch/hermes-agent/issues/160359)  
  约 3.3 万条 Artifacts 即可触发 Windows Desktop 硬退出，属于容易快速复现且影响明显的问题。建议优先实施分页、虚拟列表或按会话延迟加载。

---

## 结论

Hermes Agent 当前最大的优势是**开发吞吐高、路线讨论深入、功能创新速度快**；最大的风险是**复杂运行时状态与生命周期管理尚未完全收敛**，尤其集中在 Gateway、Profile、Kanban、A2A、Windows 和 Desktop 大数据量场景。

下一阶段的质量关键不一定是继续增加功能数量，而是优先完成三个收敛：

1. **会话与 Profile 路由统一**：确保 Desktop、Gateway、插件、A2A、Worker 使用同一身份和路由模型；
2. **任务生命周期统一**：为超时、取消、重试、恢复和最终结果建立一致语义；
3. **压缩与长期记忆统一**：让持久记录、文件索引和 provenance 真正支撑跨压缩连续工作。

若上述问题得到稳定修复，Hermes Agent 将从“功能非常丰富的个人 AI 框架”进一步迈向“**可持续运行、可审计、可恢复的长期 Agent Runtime**”。

</details>

<details>
<summary><strong>OpenHuman</strong> — <a href="https://github.com/tinyhumansai/openhuman">tinyhumansai/openhuman</a></summary>

# OpenHuman 项目动态日报

**日期：2026-11-26**  
**数据范围：过去 24 小时**  
**项目地址：[tinyhumansai/openhuman](https://github.com/tinyhumansai/openhuman)**

---

## 1. 今日速览

- 过去 24 小时共更新 **3 个 Issues、1 个 PR**，其中 **2 个 Issue 活跃、1 个 Issue 关闭，1 个 PR 尚待合并**；没有新版本发布。
- 今日最重要的议题是 **CortexDB 持久化记忆故障**：BYOK 用户持续遭遇 `401 ACTOR_MISMATCH`，免费方案还受固定 scope root 与权限限制影响。
- 隐私问题 #7016 已关闭，涉及默认向 Langfuse 上传完整提示词、回复、系统提示词及工具调用数据；社区对此已有集中讨论，但关闭状态仍需确认修复覆盖范围与默认策略。
- 新增功能 PR #8183 正在引入 **OCI Generative AI BYOK 云提供商**，目前仍未合并，暂不具备正式发布条件。
- 整体活跃度为 **中等偏低**：24 小时内有 4 条更新，但主要是问题跟踪与提案，缺少已合并代码和版本发布；当前健康度可评估为 **需关注**，核心风险集中在隐私默认值、CortexDB 记忆链路及免费版可用性。

---

## 2. 版本发布

过去 24 小时 **无新版本发布**，因此没有可报告的更新内容、破坏性变更或迁移注意事项。

---

## 3. 项目进展

### 今日没有已合并或关闭的 PR

唯一更新的 PR 仍处于开放状态：

- **[#8183 feat(inference): add OCI Generative AI as a cloud provider](https://github.com/tinyhumansai/openhuman/pull/8183)**
  - **状态：** Open，待合并
  - **作者：** @fede-kamel
  - **最后更新：** 2026-11-25
  - **主要方向：**
    - 为 `[[cloud_providers]]` 增加 `oci` 认证方式；
    - 支持使用 `<slug>:<model>` 路由至 OCI Generative AI，例如 `oci:openai.gpt-5.5`；
    - 非敏感配置由 `[cloud_providers.oci]` 管理，密钥可进入系统 keyring；
    - 延续项目现有的 BYOK 云模型提供商模式。
  - **推进判断：** 该 PR 有助于扩展企业级多云模型接入能力，但尚未进入主分支，不能视为用户已可用的正式能力。

### 今日关闭的重要 Issue

- **[#7016 Prompt/reply traces are uploaded to Langfuse by default without opt-in](https://github.com/tinyhumansai/openhuman/issues/7016)**
  - **状态：** Closed
  - **优先级：** P1
  - **讨论量：** 6 条评论
  - **关闭意味着：** 项目维护者可能已对该隐私问题作出处理或认定；但仅凭“关闭”状态，无法确认是否已通过代码修复、配置调整、补充披露或用户沟通完成闭环。

### 总体进展评估

今日没有代码合并或版本产出，项目主要处于 **问题定位、需求收敛和方案评审阶段**。  
若 #7016 已获得实质修复，并且 #8183 后续完成合并，项目活跃度将得到改善；但当前没有新的交付节点可量化。

---

## 4. 社区热点

### 热点一：#7016 — 默认上传完整 Agent 调用链至 Langfuse

- **链接：** [#7016](https://github.com/tinyhumansai/openhuman/issues/7016)
- **状态：** Closed
- **优先级：** P1
- **评论数：** 6，为今日评论最多的条目
- **反应数：** 👍 0

**核心诉求：**

用户要求默认关闭完整追踪数据上传，或至少改为明确、显式的 opt-in。争议点包括：

- Agent 运行时会向 Langfuse 上传完整 prompt、模型回复和 system prompt；
- 工具参数及执行结果也可能被上传；
- 应用内隐私说明未覆盖该行为，甚至与实际行为存在相反表述；
- 企业密钥、源代码上下文、个人信息和工具返回数据可能因此离开用户预期边界。

**背景分析：**

这是典型的“默认隐私”信任问题。即使 Langfuse 属于项目自有后端，只要上传行为未在首次运行时清楚披露，用户仍可能认为其属于隐式遥测。  
需要关注关闭该 Issue 的具体原因：

1. 是否已将上传改为 opt-in；
2. 是否提供完全关闭追踪的开关；
3. 是否对敏感字段做脱敏；
4. 是否同步更新隐私政策与 UI 披露。

---

### 热点二：#8393 — CortexDB 记忆写入返回 `401 ACTOR_MISMATCH`

- **链接：** [#8393](https://github.com/tinyhumansai/openhuman/issues/8393)
- **状态：** Open
- **优先级：** P1
- **评论数：** 3
- **反应数：** 👍 1，为今日反应最多的 Issue
- **报告版本：** OpenHuman v0.64.15
- **环境：** macOS，使用用户自己的 CortexDB API key

**核心诉求：**

BYOK 用户虽然已选择“Your CortexDB key”并成功连接，但让 Agent 保存持久化事实时，记忆操作仍返回 `401 ACTOR_MISMATCH`。

**可能影响：**

- “Memory”模块表面可连接，但核心写入链路不可用；
- 用户无法区分连接成功与实际具备读写权限；
- 自有密钥场景本应降低平台绑定，却因 actor/scope 映射异常而失去优势；
- 影响 OpenHuman 作为个人 AI 助手的核心长期记忆能力。

---

### 热点三：#8778 — 免费方案无法配置 CortexDB scope root

- **链接：** [#8778](https://github.com/tinyhumansai/openhuman/issues/8778)
- **状态：** Open
- **优先级：** 未标注
- **评论数：** 0
- **反应数：** 0
- **创建/更新时间：** 2026-11-25

**核心诉求：**

免费方案使用自有 CortexDB 密钥时，记忆功能仍无法正常存储，原因包括：

- scope root 被编译为固定值 `app:tinymemory`；
- BYOK 用户无法配置自己的 root；
- 免费方案可能对该 root 不具备写入权限，进一步出现 402/403；
- 该问题与 #8393 的 `401 ACTOR_MISMATCH` 相互关联，但属于不同层面的配置和权限问题。

---

### 热点四：#8183 — OCI Generative AI BYOK 接入提案

- **链接：** [#8183](https://github.com/tinyhumansai/openhuman/pull/8183)
- **状态：** Open
- **评论数：** 未提供
- **反应数：** 👍 0

**社区关注点：**

该 PR 代表模型提供商生态继续扩展，尤其适合已有 Oracle Cloud 基础设施的企业用户。不过当前尚无可见评审反馈，社区参与度有限，功能价值仍需通过合并和发布验证。

---

## 5. Bug 与稳定性

### P1 — CortexDB 持久化记忆因 actor 不匹配而失败

- **Issue：** [#8393](https://github.com/tinyhumansai/openhuman/issues/8393)
- **表现：** 使用自有 CortexDB API key 时，保存事实返回 `401 ACTOR_MISMATCH`
- **影响范围：** BYOK 用户的持久化记忆写入
- **严重程度：** **高**
- **已有 fix PR：** **否**，当前未发现直接关联的修复 PR
- **建议：**
  - 检查 API key 对应的 actor 与 scope root 映射；
  - 在连接阶段增加实际读写权限探测；
  - 为 BYOK 模式补充覆盖“连接—写入—读取—重启后恢复”的集成测试；
  - 在 UI 中明确区分“认证成功”和“记忆写入可用”。

### P1 — Agent 追踪数据默认上传造成隐私风险

- **Issue：** [#7016](https://github.com/tinyhumansai/openhuman/issues/7016)
- **表现：** 完整 prompt、reply、system prompt、工具参数和结果默认上传至 Langfuse
- **影响范围：** 所有可能启用相关追踪的 Agent 运行，具体范围需结合配置确认
- **严重程度：** **高（隐私与合规风险）**
- **已有 fix PR：** **未发现**
- **状态说明：** Issue 已关闭，但数据中没有提供对应修复 PR，因此不能确认是否已通过代码解决。
- **建议：**
  - 明确标注关闭原因；
  - 默认关闭完整追踪上传，或改为显式同意；
  - 对工具结果、密钥和个人信息进行脱敏；
  - 更新隐私披露并提供可审计的数据流说明。

### P1/P2 — 免费方案固定 scope root 导致记忆不可用

- **Issue：** [#8778](https://github.com/tinyhumansai/openhuman/issues/8778)
- **表现：** BYOK + Free plan 无法配置 scope root，并可能收到 402/403
- **影响范围：** 免费方案的自有 CortexDB 密钥用户
- **严重程度：** **中高**
- **已有 fix PR：** **否**
- **建议：**
  - 将 scope root 从编译时常量改为用户可配置项；
  - 对不同套餐定义清晰的存储配额和权限策略；
  - 为旧配置提供兼容迁移和默认值；
  - 在报错中明确区分“无权限”“无配额”和“请求格式错误”。

---

## 6. 功能请求与路线图信号

### 6.1 CortexDB scope root 可配置

- **需求来源：** [#8778](https://github.com/tinyhumansai/openhuman/issues/8778)
- **方向：** 将 `app:tinymemory` 等固定 scope root 改为可配置设置，允许 BYOK 用户选择与自身部署匹配的命名空间。
- **路线图判断：** **较高概率进入近期修复**
  - 需求直接指向核心记忆功能；
  - 与高优先级故障 [#8393](https://github.com/tinyhumansai/openhuman/issues/8393) 紧密关联；
  - 属于配置能力与兼容性问题，实施成本相对可控。
- **需明确的产品决策：**
  - Free plan 是否允许自定义 root；
  - 自定义 root 是否改变计费或配额；
  - 旧 scope root 是否自动迁移；
  - root 非法、越权或冲突时的提示策略。

### 6.2 OCI Generative AI 作为 BYOK 云提供商

- **PR：** [#8183](https://github.com/tinyhumansai/openhuman/pull/8183)
- **方向：** 增加 `oci` provider、认证模式、配置档支持及模型路由。
- **路线图判断：** **已进入实现阶段，但是否进入下一版本取决于评审与合并**
  - PR 已存在完整实现摘要；
  - 与现有多提供商 BYOK 架构一致；
  - 仍需补充凭据校验、错误映射、模型发现、回归测试和文档。

### 6.3 追踪与 Langfuse 上传策略治理

- **需求来源：** [#7016](https://github.com/tinyhumansai/openhuman/issues/7016)
- **方向：** 默认关闭完整 prompt/reply/tool trace 上传，并提供明确的隐私控制。
- **路线图判断：** **应作为高优先级稳定性与信任事项处理**
  - Issue 虽已关闭，但缺少对应 PR 和发布记录；
  - 在没有可见发布说明的情况下，无法确认修复是否已实际交付。

---

## 7. 用户反馈摘要

### 真实用户痛点

1. **自有 CortexDB 密钥无法转化为可用的持久化记忆**
   - 用户已经完成 provider 选择和连接，仍在保存事实时收到 401。
   - 这说明当前流程把“连接成功”误当成“完整能力可用”，缺乏端到端验证。

2. **免费方案与 BYOK 组合存在明显断层**
   - 用户尝试使用自己的 CortexDB key，以降低平台依赖；
   - 但固定 scope root、套餐权限和配额限制仍让记忆功能不可用。
   - 对个人用户而言，这直接削弱了“数据自主”和“长期记忆”的核心价值。

3. **隐私披露与真实数据流不一致**
   - 用户关注的不只是遥测，而是完整 prompt、模型回复、系统指令和工具结果；
   - 这些内容可能包含商业机密、源代码、个人信息及凭证，是比一般使用统计更敏感的数据。

4. **用户需要更清晰的故障边界**
   - 401 actor mismatch、402/403 权限或配额问题在当前体验中容易混为一类；
   - 用户期待应用直接说明是身份映射、scope 权限、套餐限制还是服务端异常。

### 满意与不满意信号

- **积极信号：** 用户愿意主动配置自有 CortexDB key，说明对 BYOK 和数据自主有明确需求；相关 Issue 获得 1 个 👍，显示记忆能力具有较高关注度。
- **消极信号：** #8393 已有 3 条评论但未关闭，#8778 尚无讨论，说明问题虽被识别，但解决方案与责任边界仍未充分收敛。
- **信任风险：** #7016 的关闭没有伴随可见的 fix PR 或发布说明，容易让用户认为问题可能只是被标记关闭而非真正解决。

---

## 8. 待处理积压

### #8393 — CortexDB `401 ACTOR_MISMATCH`

- **链接：** [#8393](https://github.com/tinyhumansai/openhuman/issues/8393)
- **优先级：** P1
- **创建日期：** 2026-10-24
- **最近更新：** 2026-11-25
- **积压判断：** Issue 已存在约一个月，期间持续有评论；直接阻断核心记忆功能，应尽快关联修复 PR、里程碑和回归测试。

### #7016 — 默认上传 Agent traces 的隐私问题

- **链接：** [#7016](https://github.com/tinyhumansai/openhuman/issues/7016)
- **优先级：** P1
- **创建日期：** 2026-10-06
- **最近更新：** 2026-11-26
- **积压判断：** 虽已关闭，但创建时间较早、评论最多，且缺少可见修复 PR 或发布记录。维护者应补充关闭原因、修复提交、测试结果和用户升级说明。

### #8183 — OCI Generative AI provider PR

- **链接：** [#8183](https://github.com/tinyhumansai/openhuman/pull/8183)
- **创建日期：** 2026-10-21
- **最近更新：** 2026-11-25
- **积压判断：** PR 已开放较长时间，仍无可见评审结论。应明确指定 reviewer、检查凭据安全与 provider 行为一致性，并给出合并或关闭时间预期。

### #8778 — 可配置 CortexDB scope root

- **链接：** [#8778](https://github.com/tinyhumansai/openhuman/issues/8778)
- **优先级：** 未标注
- **创建日期：** 2026-11-25
- **积压判断：** 新 Issue 尚无评论，但直接关联 #8393 和免费版记忆可用性，不宜继续低优先级处理，建议尽快合并到同一修复线程。

---

## 项目健康度结论

**综合健康度：需关注（中等偏低）**

- **正向因素：** 过去 24 小时存在持续 Issue/PR 活动；CortexDB 记忆问题已有较明确的根因拆分；OCI provider 已形成具体实现方案。
- **主要风险：**
  1. BYOK 记忆链路存在高优先级故障；
  2. 免费方案可用性受 scope、配额和权限设计影响；
  3. 隐私敏感数据默认上传问题缺少可见修复交付证据；
  4. PR #8183 尚未合并，且近期无版本发布。
- **建议维护者优先顺序：**
  1. 完成 #7016 的可验证闭环；
  2. 统一处理 #8393 与 #8778，发布 BYOK CortexDB 修复；
  3. 评审并推动 #8183；
  4. 补充端到端记忆测试、权限错误提示和隐私披露文档。

</details>

---
*本日报由 [Big Model Radar](https://github.com/96loveslife/big_model_radar) 自动生成。*
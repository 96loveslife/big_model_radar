# OpenClaw 生态日报 2026-11-27

> Issues: 349 | PRs: 500 | 覆盖项目: 8 个 | 生成时间: 2026-11-27 07:42 UTC

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

# OpenClaw 项目动态日报｜2026-11-27

> 数据范围：过去 24 小时 GitHub Issues / Pull Requests 更新；无新版本发布。  
> 数据概览：**349 条 Issue 更新**（246 条新开或活跃，103 条关闭）、**500 条 PR 更新**（277 条待合并，223 条已合并或关闭）。

---

## 1. 今日速览

OpenClaw 今日开发活动极高，24 小时内共有 **849 条 Issue/PR 更新**，说明项目仍处于高频迭代与问题密集暴露期。讨论焦点集中在**更新与回滚流程、Gateway 内存泄漏、子代理生命周期、Codex 会话连续性及 Control UI 稳定性**，其中多条问题被标记为 P0 或发布阻断项。PR 侧有 **500 条更新**，但仍有 **277 条待合并**，且部分大型重构集中在 subagent 状态和终止语义，合并风险与维护审阅压力较高。项目整体仍在快速推进，但健康度呈现“开发活跃、修复吞吐可观、存量稳定性风险偏高”的特征；今日无正式 Release，暂不宜将所有修复视为已交付用户。

---

## 2. 版本发布

**过去 24 小时无新版本发布。**

因此本期不涉及正式版本的更新内容、破坏性变更或官方迁移指南。当前大量修复仍处于 Issue 复现、PR 评审或等待作者补充阶段；生产环境升级前应特别检查 Gateway 更新、Doctor 校验、会话历史迁移和子代理停止行为。

---

## 3. 项目进展

过去 24 小时共处理 **500 条 PR 更新**，其中 **223 条已合并或关闭**。从已关闭或已推进的重要方向看，项目主要在以下领域取得进展：

### 3.1 更新机制与 Doctor 校验继续收敛

- **Git 更新完成后旧验证器提前退出**的更新流程问题已有对应修复草案，目标是在新 Gateway 已健康启动、数据库完成迁移后，不让旧版验证器因无法识别新 schema 而删除 trial。  
  [PR #204344](https://github.com/openclaw/openclaw/pull/204344)

- **Doctor 在会话重新导入前恢复冷存储归档**，用于解决升级回滚时报 `Doctor blocked invalid session-history migration` 和 `sqlite_transcript_count_mismatch` 的问题。  
  [PR #205011](https://github.com/openclaw/openclaw/pull/205011)

- 更新流程正在从多条分散实现转向统一设计。设计 Issue 明确引入“状态、所有权与计划”，以减少不同团队同时修改更新相关文件造成的设计冲突。  
  [Issue #204775](https://github.com/openclaw/openclaw/issues/204775)

这说明更新链路正在从“出现症状后逐个打补丁”转向统一状态机与所有权治理，但目前仍有多条更新失败路径待处理。

### 3.2 Subagent 生命周期重构成为主战场

今日新增了多条围绕 subagent 的集中化重构 PR：

- 将 spawn policy 从准备阶段保留到实际执行阶段，避免准备期间策略变化导致已通过准入的任务被错误拒绝。  
  [PR #206473](https://github.com/openclaw/openclaw/pull/206473)

- 集中管理 collector replay 决策，减少 Code Mode 与插件原生 collector 对“已接受任务能否复用”的重复判断。  
  [PR #206471](https://github.com/openclaw/openclaw/pull/206471)

- 集中管理 subagent 的 end-of-run 决策，包括完成、终止发布、效果派发、清理记账和重试处理。  
  [PR #206454](https://github.com/openclaw/openclaw/pull/206454)

- 统一 registry read projection，修复同步读取与 prepared read 对活跃 child row 判断不一致的问题。  
  [PR #206481](https://github.com/openclaw/openclaw/pull/206481)

- 将 dormant child 的 Stop 决策收回 subagent owner，减少 Gateway Stop 对原始 registry 状态的自行解释。  
  [PR #206479](https://github.com/openclaw/openclaw/pull/206479)

- 修复 fork 子代理把已接受的 spawn 错判为 aborted 的问题。  
  [PR #206435](https://github.com/openclaw/openclaw/pull/206435)

- 将 Codex 原生 completion delivery 纳入统一 completion obligation，减少共享 subagent policy 与 Codex 插件各自维护状态造成的消息丢失风险。  
  [PR #206447](https://github.com/openclaw/openclaw/pull/206447)

整体来看，项目正在把 subagent 从分散式状态机重构为更明确的 owner、registry 和终态模型。这是重要架构进展，但涉及多个调用路径和兼容行为，短期内也可能增加回归面。

### 3.3 会话与消息连续性修复推进

- 修复只刷新 transcript 时错误触发 session recall fencing，避免繁忙 Gateway 上 `sessions_search` 间歇性报出 scope changed。  
  [PR #205652](https://github.com/openclaw/openclaw/pull/205652)

- 修复 Codex 冷启动 web-search capability verdict 导致原生 thread 轮换、完整上下文重复发送的问题。  
  [PR #179635](https://github.com/openclaw/openclaw/pull/179635)

- 修复 oversized request 后 Codex 会话无法继续，下一条消息仍复用超大历史的问题。  
  [PR #206475](https://github.com/openclaw/openclaw/pull/206475)

- 修复 subagent 工具调用完成但 completion relay 在降级路径中报告虚假失败的问题。  
  [PR #198633](https://github.com/openclaw/openclaw/pull/198633)

这些工作直接改善了长会话、委派任务与多轮交互的可靠性。

### 3.4 开发者体验与一次性 CLI 改进

- 一次性 `openclaw agent --local` 不再生成 AGENTS.md、SOUL.md、IDENTITY.md、USER.md、BOOTSTRAP.md 和 Git 初始化，避免无意义人格文件及约 19.5 KB 系统提示词污染。  
  [PR #206477](https://github.com/openclaw/openclaw/pull/206477)

- 新增 cold-start 进程与 worker 的测试门禁，用于约束一次性本地 Agent 的冷启动性能。  
  [PR #206466](https://github.com/openclaw/openclaw/pull/206466)

- 统一 Web UI 媒体附件的 URL 文件名解码，减少 MIME 检测与附件逻辑之间的重复实现。  
  [PR #206482](https://github.com/openclaw/openclaw/pull/206482)

这些改动表明团队除修复稳定性外，也在持续降低 CLI 冷启动成本和维护复杂度。

---

## 4. 社区热点

### 4.1 评论最多的 Issues

1. **更新流程统一设计**
   - [Issue #204775](https://github.com/openclaw/openclaw/issues/204775)｜41 条评论
   - 诉求：为 prepared-release 更新建立统一的状态、所有权和计划，避免不同实现同时修改相同文件。这是今日讨论最密集的 Issue，也是后续版本发布可靠性的核心协调项。

2. **Prompt cache 无法复用**
   - [Issue #182891](https://github.com/openclaw/openclaw/issues/182891)｜29 条评论｜已关闭
   - 用户反馈每次请求都出现 `cache read dropped N -> 0`，涉及 envelope rewrite、runtimeContextCarrier 变化等路径。虽然已关闭，但同类缓存失效仍在其他 Issue 中出现。

3. **prepared model catalog worker 内存泄漏**
   - [Issue #159662](https://github.com/openclaw/openclaw/issues/159662)｜29 条评论
   - 报告称 worker 内存以约 4–5 GB/小时增长，且与 provider、插件配置无关。该问题直接威胁 Gateway 长期运行稳定性，尚未看到明确 fix PR。

4. **Curated memory roots 被永久排除**
   - [Issue #153426](https://github.com/openclaw/openclaw/issues/153426)｜28 条评论｜已关闭
   - `MEMORY.md` / `USER.md` 一旦被 provenance ratchet 标为 untrusted，会从后续 bootstrap 中静默永久排除。相关恢复路径仍由其他 Issue 继续追踪。  
     [Issue #204738](https://github.com/openclaw/openclaw/issues/204738)

5. **Windows beta 更新在 package-swap 阶段失败**
   - [Issue #200756](https://github.com/openclaw/openclaw/issues/200756)｜22 条评论
   - Windows 11 用户从 beta.2 更新到 beta.4 时，候选包验证通过但 package-swap 失败，反映 Windows 原生安装与回滚路径仍有较大不稳定性。

6. **2026.11.5 Doctor 阻断更新**
   - [Issue #200606](https://github.com/openclaw/openclaw/issues/200606)｜21 条评论｜已关闭
   - 插件迁移冲突与 `changed=[]` 同时出现，Doctor 将升级判定为不安全。用户对“明明没有实际变更却阻断更新”的感受尤其明显。

7. **Codex helper 无法恢复父会话**
   - [Issue #196199](https://github.com/openclaw/openclaw/issues/196199)｜21 条评论
   - 原生 Codex helper 完成后无法唤醒父代理，导致目标暂停，用户实质上无法继续使用助手，是高影响的消息丢失与会话状态问题。

8. **ARM64 Gateway 基线内存过高**
   - [Issue #181432](https://github.com/openclaw/openclaw/issues/181432)｜16 条评论
   - 升级后启动 RSS 从约 300 MB 增至 1.89 GB，并在 Telegram 消息期间出现 SQLite transaction timeout。  
   - [Issue #192547](https://github.com/openclaw/openclaw/issues/192547) 同期提出降低受限 ARM64 主机启动内存的需求。

9. **Gateway 长期运行内存持续增长**
   - [Issue #182369](https://github.com/openclaw/openclaw/issues/182369)｜13 条评论  
   - [Issue #184843](https://github.com/openclaw/openclaw/issues/184843)｜8 条评论  
   - [Issue #195497](https://github.com/openclaw/openclaw/issues/195497)｜7 条评论  
   - [Issue #162709](https://github.com/openclaw/openclaw/issues/162709)｜5 条评论  
   - 多个独立环境均报告 RSS 持续增长、worker 不退休或 OOM，说明这是长期运行场景下的系统性问题，而非单一部署配置。

### 4.2 值得关注的开放 PR

- **停止将 foreign recovery records 当作更新准入依据**  
  [PR #206295](https://github.com/openclaw/openclaw/pull/206295)｜P1｜大型更新链路修复  
  直接对应多个更新失败实例，但存在自动化和兼容性合并风险，当前状态为等待作者。

- **统一 subagent end-of-run 决策**  
  [PR #206454](https://github.com/openclaw/openclaw/pull/206454)｜P2｜XL  
  架构价值高，但影响完成、失败、重试、清理和状态持久化，需要充分回归验证。

- **允许 chat owner 在 subagent/exec 完成后 fork chat 并使用 exec**  
  [PR #206483](https://github.com/openclaw/openclaw/pull/206483)｜P1  
  解决插件聊天 fork 被工具策略拒绝的问题，对插件生态和自动化工作流有直接价值。

- **浏览器 Talk 结束时保留已接受的 Agent 任务**  
  [PR #206474](https://github.com/openclaw/openclaw/pull/206474)｜P1  
  避免用户关闭或断开 Talk 后，跨四种 transport 的已接受任务被错误取消。

- **Codex 原生 completion delivery 集中化**  
  [PR #206447](https://github.com/openclaw/openclaw/pull/206447)｜P1｜XL  
  目标是降低 completion 丢失和状态不一致风险，但同时涉及共享 subagent 与 Codex 插件两条生命周期。

---

## 5. Bug 与稳定性

### P0 / 发布阻断级

1. **macOS SecretRef 未携带本地 Gateway token**
   - [Issue #141413](https://github.com/openclaw/openclaw/issues/141413)
   - 影响：macOS App 连接独立管理的本地 Gateway 时无法完成认证。
   - Fix PR：数据中未显示明确对应 PR；需继续关注。

2. **Codex OAuth 刷新超过 10 秒导致 cron/heartbeat 失败**
   - [Issue #89278](https://github.com/openclaw/openclaw/issues/89278)
   - 影响：状态探测成功，但实际定时任务认证失败。
   - Fix PR：标记为 linked PR open，未显示具体 PR 编号。

3. **Codex protected continuation 阻塞后续消息**
   - [Issue #194664](https://github.com/openclaw/openclaw/issues/194664)
   - 影响：CLI OAuth device-login 残留后，会话报告无 active run，但后续消息全部无法执行。
   - Fix PR：数据中未显示明确对应 PR。

4. **Claude CLI 子任务永不退出，后续轮次复用失效 live session**
   - [Issue #202518](https://github.com/openclaw/openclaw/issues/202518)
   - 影响：`sessions_spawn + sessions_yield` 后子进程不关闭，最终形成会话锁死和消息丢失。
   - Fix PR：未显示明确 fix PR；相关 PR #206447 涉及统一 completion delivery，但不等同于该具体修复。

5. **macOS app-owned Gateway 未替换旧版本并进入凭据恢复循环**
   - [Issue #203065](https://github.com/openclaw/openclaw/issues/203065)
   - 影响：App 仍运行旧 Gateway，并反复提示客户端凭据恢复失败。
   - Fix PR：数据中未显示明确 fix PR。

6. **遗留 Gateway lock 阻断 Doctor 与更新**
   - [Issue #201472](https://github.com/openclaw/openclaw/issues/201472)
   - 影响：死锁文件缺少 `processNamespace` 时，被误判为仍有活进程，2026.11.5 更新回滚。
   - Fix PR：未显示明确 fix PR。

### P1 / 高影响

1. **Gateway 内存泄漏与高基线占用**
   - [Issue #159662](https://github.com/openclaw/openclaw/issues/159662)
   - [Issue #181432](https://github.com/openclaw/openclaw/issues/181432)
   - [Issue #182369](https://github.com/openclaw/openclaw/issues/182369)
   - [Issue #184843](https://github.com/openclaw/openclaw/issues/184843)
   - [Issue #195497](https://github.com/openclaw/openclaw/issues/195497)
   - [Issue #162709](https://github.com/openclaw/openclaw/issues/162709)
   - Fix PR：未显示明确 fix PR，属于当前最需要统一诊断和治理的稳定性类别。

2. **Codex helper 完成后父会话无法恢复**
   - [Issue #196199](https://github.com/openclaw/openclaw/issues/196199)
   - Fix PR：未显示明确对应 PR。

3. **Windows 更新与性能回归**
   - [Issue #200756](https://github.com/openclaw/openclaw/issues/200756)
   - [Issue #171831](https://github.com/openclaw/openclaw/issues/171831)
   - 前者更新 package-swap 失败，后者报告启动从 55 秒升至 320 秒及事件循环严重阻塞。
   - Fix PR：未显示明确对应 PR。

4. **2026.11.4 → 2026.11.8 激活阶段 Doctor 报 Invalid config 并回滚**
   - [Issue #204816](https://github.com/openclaw/openclaw/issues/204816)
   - 标记为 source repro、fix shape clear、queueable fix。
   - Fix PR：数据中未显示具体编号。

5. **插件 Doctor source 准备状态导致升级失败**
   - [Issue #203442](https://github.com/openclaw/openclaw/issues/203442)
   - 影响：2026.11.4 → 2026.11.10-beta.1 在 activation Doctor 阶段失败。
   - Fix PR：未显示明确对应 PR。

6. **Control UI 在 `Element.getAnimations()` 循环中占满 CPU**
   - [Issue #196820](https://github.com/openclaw/openclaw/issues/196820)
   - 影响：macOS WebContent 和 Edge 中页面逐渐失去响应。
   - Fix PR：未显示明确对应 PR。

7. **run 在首次 session commit 前死亡会永久遗留 started 状态**
   - [Issue #141172](https://github.com/openclaw/openclaw/issues/141172)
   - 影响：trajectory flush 外键失败，且始终没有 `agent.run.finished`。
   - Fix PR：未显示明确对应 PR。

8. **长驻 Gateway 新建 Worker 越来越慢**
   - [Issue #206264](https://github.com/openclaw/openclaw/issues/206264)｜已关闭
   - 原因是已退出 worker 的 SQLite admission references 仍被序列化进每个新 Worker 的 `environmentData`；主线程创建 Worker 的平均阻塞从 0.27 秒升至 2.5 秒，最高 9–12 秒。
   - Fix PR：未显示明确编号，但 Issue 已关闭。

### P2 / 中等影响

- macOS `/restart` 在 Gateway close 失败后永久挂起，端口关闭但进程仍存活。  
  [Issue #200148](https://github.com/openclaw/openclaw/issues/200148)

- `sessions_spawn` 的 `runTimeoutSeconds` 被误判为模型失败，触发 fallback 重启子任务。  
  [Issue #203465](https://github.com/openclaw/openclaw/issues/203465)

- Control UI Sessions 侧栏只显示 agent header，不显示 session row。  
  [Issue #200781](https://github.com/openclaw/openclaw/issues/200781)

- HEIC 转换失败后每次请求残留约 250–400 MB RSS。  
  [Issue #163107](https://github.com/openclaw/openclaw/issues/163107)

- Codex 原生 thread 因 authority/origin 变化而轮换，导致上下文被完整重发。  
  [Issue #148329](https://github.com/openclaw/openclaw/issues/148329)

- Claude CLI 在 turn surface 变化时重写 prompt cache。  
  [Issue #186683](https://github.com/openclaw/openclaw/issues/186683)

- Secret egress proxy 未继承 Node 启动 CA trust，影响私有 CA 上游 TLS。  
  [Issue #135955](https://github.com/openclaw/openclaw/issues/135955)

---

## 6. 功能请求与路线图信号

### 6.1 Active Memory 引入插件化深度召回决策

- [Issue #151178](https://github.com/openclaw/openclaw/issues/151178)
- 用户希望 Active Memory 在确定性检索未命中时，可选择由单一插件 provider 决定是否启动 deep recall。
- 已有 linked PR open，但需求仍需产品决策。
- **下一版本可能性：中等。** 架构上符合插件化方向，但必须明确单一所有权、失败回退和成本控制。

### 6.2 Cron 支持结束条件与累计运行计数

- [Issue #130247](https://github.com/openclaw/openclaw/issues/130247)
- 当前 cron 缺少 `--until`、`--max-runs` 等终止条件，也不保留累计运行计数。
- **下一版本可能性：中等。** 需求明确、实现边界可控，但当前 Issue 标记 stale 且需产品决策。

### 6.3 Git 备份支持可配置超时和表级排除

- [Issue #204701](https://github.com/openclaw/openclaw/pull/204701)
- `openclaw backup git create` 的 Git 超时目前硬编码为 120 秒，多数据库、大仓库场景容易反复失败。
- **下一版本可能性：较高。** 功能边界清晰，且属于 CLI 易用性改进。

### 6.4 自定义 OpenAI 兼容端点下的 memory search

- [Issue #206478 对应 PR](https://github.com/openclaw/openclaw/pull/206478)
- 当 `models.providers.openai.baseUrl` 指向代理、路由器或计费端点时，memory search/index sync 不应继续请求 `/v1/embeddings`。
- **下一版本可能性：高。** 已有明确 PR，属于可直接落地的兼容性修复。

### 6.5 iOS 增强工具调用可读性

- [Issue #206463 对应 PR](https://github.com/openclaw/openclaw/pull/206463)
- 在 iPhone 聊天中展示类似 Control UI 的工具调用说明，而不是只显示工具名和原始参数。
- **下一版本可能性：高。** 已有完整 PR，用户体验改进明确。

### 6.6 one-shot 本地 Agent 跳过 bootstrap ritual

- [Issue #206477 对应 PR](https://github.com/openclaw/openclaw/pull/206477)
- 避免一次性 CLI 任务写入人格文件、Git 仓库和大量启动提示词。
- **下一版本可能性：高。** 已有 PR，且能显著降低冷启动时间与工作区污染。

### 6.7 Codex oversized request 后恢复会话

- [Issue #206475 对应 PR](https://github.com/openclaw/openclaw/pull/206475)
- 长会话超过 relay 的 32 MiB 请求限制后，后续消息不能继续复用超大历史。
- **下一版本可能性：高。** 已有明确修复 PR，属于长会话稳定性关键项。

---

## 7. 用户反馈摘要

### 7.1 最突出的真实痛点

- **升级不可靠**：用户在 Windows、macOS、npm-global 和 service account 等不同部署中反复遇到候选校验通过、激活失败、Doctor 阻断、自动回滚或旧 Gateway 未替换。  
  典型案例：  
  [Issue #200756](https://github.com/openclaw/openclaw/issues/200756) ·  
  [Issue #204816](https://github.com/openclaw/openclaw/issues/204816) ·  
  [Issue #203065](https://github.com/openclaw/openclaw/issues/203065) ·  
  [Issue #201472](https://github.com/openclaw/openclaw/issues/201472)

- **长期运行不可信**：大量生产型 Gateway 用户报告内存持续增长、SQLite 锁等待、CPU 高占用，最终需要频繁重启。  
  [Issue #159662](https://github.com/openclaw/openclaw/issues/159662) ·  
  [Issue #182369](https://github.com/openclaw/openclaw/issues/182369) ·  
  [Issue #162709](https://github.com/openclaw/openclaw/issues/162709)

- **委派和长会话容易“卡死”**：Codex helper、Claude CLI 子任务、protected continuation 及 oversized request 都会造成父会话暂停、后续消息无法继续或已有任务被复用为失效状态。  
  [Issue #196199](https://github.com/openclaw/openclaw/issues/196199) ·  
  [Issue #202518](https://github.com/openclaw/openclaw/issues/202518) ·  
  [Issue #194664](https://github.com/openclaw/openclaw/issues/194664)

- **ARM64 / 小内存主机场景不适配**：用户使用 1 GiB cgroup、768 MiB service cgroup 等受限配置时，Gateway 虽能启动，却可能在首个模型响应前 OOM。  
  [Issue #192547](https://github.com/openclaw/openclaw/issues/192547)

- **诊断信息不足**：死锁文件、HEIC 转换、Worker 内存增长、缓存降级等问题常缺少明确文件、worker 生命周期或归因信息，增加自助排障成本。  
  [Issue #163107](https://github.com/openclaw/openclaw/issues/163107) ·  
  [Issue #182891](https://github.com/openclaw/openclaw/issues/182891)

### 7.2 积极信号

- 多个 bug 已成功关闭，包括 prompt cache、Doctor 插件迁移冲突、Gateway 主线程 Worker 创建变慢、macOS MCP 进程回收、Windows 备份 EBUSY 诊断等，表明项目在合并和清理历史问题上的吞吐较高。  
  [Issue #182891](https://github.com/openclaw/openclaw/issues/182891) ·  
  [Issue #200606](https://github.com/openclaw/openclaw/issues/200606) ·  
  [Issue #206264](https://github.com/openclaw/openclaw/issues/206264)

- 新 PR 明显更重视可观测性和可复现性，例如 cold-start benchmark、Doctor 恢复顺序、foreign recovery record 隔离及统一终态决策。  
  [PR #206466](https://github.com/openclaw/openclaw/pull/206466) ·  
  [PR #206295](https://github.com/openclaw/openclaw/pull/206295)

### 7.3 用户满意度信号

从 Issue 的 👍 数据看，多数热点问题只有 0–2 个赞，说明用户更倾向于提交可复现报告，尚缺少明显的公开认可信号。当前用户总体评价更可能偏向“功能覆盖广、迭代快，但生产稳定性和升级路径仍不够可信”。这一判断主要来自高评论量问题主题，不能替代正式用户满意度调查。

---

## 8. 待处理积压

### 8.1 长期未关闭的重要 Issues

1. **Codex 子代理策略限制**
   - [Issue #136714](https://github.com/openclaw/openclaw/issues/136714)
   - 自 2026.9.2 起，Codex sub-agent 丢失 native shell、read、apply_patch 等能力，影响长生命周期 Agent 的开发效率。

2. **Active Memory 插件化升级**
   - [Issue #151178](https://github.com/openclaw/openclaw/issues/151178)
   - 自 9 月持续讨论，已有相关 PR，但仍缺产品决策。

3. **Cron 无终止条件**
   - [Issue #130247](https://github.com/openclaw/openclaw/issues/130247)
   - 自 8 月起积压，已标记 stale；长期任务难以控制，容易造成资源和费用失控。

4. **Secret egress proxy CA 信任问题**
   - [Issue #135955](https://github.com/openclaw/openclaw/issues/135955)
   - 企业私有 CA 场景可能持续失败，且涉及安全边界，应提高优先级。

5. **Codex native replay 图片预算**
   - [Issue #187972](https://github.com/openclaw/openclaw/issues/187972)
   - 图片型工具结果可能使下一轮请求超过 relay 的 32 MiB 限制，需要 preservation-safe 的预算策略。

6. **LM Studio embedding 预加载 OOM**
   - [Issue #198830](https://github.com/openclaw/openclaw/issues/198830)
   - 未命中 catalog entry 时请求 32768 上下文，16 GB 主机也可能 OOM。

7. **HEIC 失败后内存残留**
   - [Issue #163107](https://github.com/openclaw/openclaw/issues/163107)
   - 已标记 stale，但问题同时影响可用性和内存稳定性。

### 8.2 长期等待评审或作者补充的 PR

- 更新流程停止使用 foreign recovery records：  
  [PR #206295](https://github.com/openclaw/openclaw/pull/206295)｜等待作者

- 统一 subagent 终态处理：  
  [PR #206454](https://github.com/openclaw/openclaw/pull/206454)｜XL，需维护者重点审阅

- 统一 Codex 原生 completion delivery：  
  [PR #206447](https://github.com/openclaw/openclaw/pull/206447)｜XL，存在兼容性和消息投递合并风险

- 冷存储会话归档恢复：  
  [PR #205011](https://github.com/openclaw/openclaw/pull/205011)｜P1，已有充分证明，等待维护者

- Gateway transcript-only refresh 不再阻断 session recall：  
  [PR #205652](https://github.com/openclaw/openclaw/pull/205652)｜等待作者

- queued follow-up 显示 typing 状态：  
  [PR #201920](https://github.com/openclaw/openclaw/pull/201920)｜等待证明

### 8.3 维护者建议关注顺序

1. **先收敛 P0/P1 发布阻断项**：Codex continuation、Claude CLI 子任务、macOS SecretRef、更新锁与 app-owned Gateway。  
2. **建立统一内存治理专项**：覆盖 worker 退休、SQLite admission 引用、HEIC 残留、model catalog 与 session transcript worker。  
3. **完成更新状态机设计**：优先处理 foreign recovery record、Doctor 激活差异、Windows package-swap 和服务账户权限。  
4. **审阅 subagent 大型重构**：统一验证终态、replay、fork、dormant Stop 和 completion delivery，避免多个 PR 分别改变相同语义。  
5. **清理 stale 积压**：Cron 终止条件、Active Memory、HEIC、Codex 工具策略等待时间已较长，应明确接受、拆解或关闭。

---

## 项目健康度结论

**开发活跃度：高**  
**问题收敛速度：中高**  
**长期稳定性风险：高**  
**更新/发布准备度：中等偏低**  
**下一版本重点：更新链路、subagent 状态模型、Codex/Claude 长会话连续性、Gateway 内存治理**

OpenClaw 今天仍以很高速度推进，PR 数量和架构重构力度都很突出；但高频的内存泄漏、更新回滚和会话锁死问题说明“功能扩展速度”尚未完全转化为“生产可靠性”。在没有新 Release 的情况下，维护者下一阶段应优先完成高严重度修复的统一验证与状态收敛，而不是继续扩大重构范围。

---

## 横向生态对比

# 个人 AI 助手 / 自主智能体开源生态横向分析  
**统计周期：2026-11-27，过去 24 小时**

## 1. 生态全景

当前生态处于**高活跃、强分化、重可靠性治理**阶段：OpenClaw、QwenPaw、Hermes Agent 以高频 Issue/PR 并行推进功能与架构重构，NanoBot、LobsterAI 更偏向快速闭环和产品体验打磨，PicoClaw 则进入依赖维护与历史修复收口期。  
共同主线已从“接入更多模型和渠道”转向**会话连续性、长期记忆、子代理生命周期、工具审批与上下文治理**。与此同时，更新回滚、Gateway 内存、SQLite 锁、状态反馈不一致等生产问题仍普遍存在，说明功能扩张尚未完全转化为可靠性优势。  
所有项目过去 24 小时均**无新 Release**，大量改进仍停留在 PR 或 Issue 阶段；现阶段更适合判断代码方向和风险，不宜将未合并改动视为已交付能力。  
生态内已经出现清晰分层：OpenClaw 偏平台化与复杂 Agent 编排，Hermes Agent 偏长期运行和模块化基础设施，QwenPaw 偏 Console 与本地模型，NanoBot 偏轻量多渠道助手，LobsterAI 偏桌面 Cowork 工作台，PicoClaw 偏边缘与云服务兼容。

---

## 2. 各项目活跃度对比

| 项目 | 今日 Issues | 今日 PR | Release | 活跃度 | 健康度评估 |
|---|---:|---:|---|---|---|
| **OpenClaw** | 349 更新 | 500 更新 | 无 | 极高 | **活跃高、稳定性风险高、发布准备度中低**；Issue/PR 规模断层领先，但 277 条待合并 PR、内存泄漏、更新回滚和会话锁死均构成压力 |
| **NanoBot** | 9 更新 | 11 更新 | 无 | 高 | **良好**；7 个 Issue、8 个 PR 闭环，修复吞吐高，主要风险在代理/SSRF 一致性与长会话兼容 |
| **PicoClaw** | 0 | 5 | 无 | 中低 | **基本稳定**；以 Dependabot 和历史修复归并为主，无新 Bug 或用户讨论 |
| **IronClaw** | 0 | 0 | 无 | 无活动 | **信息不足**；过去 24 小时无活动，无法评估实际健康度 |
| **LobsterAI** | 1 | 17 | 无 | 高 | **良好**；15 条 PR 已闭环，DSH/Cowork/桌面体验迭代快，但账号风控和发布节奏需关注 |
| **QwenPaw** | 19 | 35 | 无 | 极高 | **中高**；54 条更新、修复持续，但 24 条待合并 PR，Console 状态同步、渠道模型切换和长期记忆仍有缺口 |
| **Hermes Agent** | 50 | 50 | 无 | 极高 | **中高、积压偏高**；48 个开放 Issue、44 个待合并 PR，Cron/SQLite、会话路由、安全隔离和长期 RFC 压力明显 |
| **OpenHuman** | 1 | 1 | 无 | 低 | **中低**；唯一 PR 有测试但未合并，核心 Workflow 审批问题长期开放 |

### 活跃度分层

- **超高活跃**：OpenClaw、QwenPaw、Hermes Agent  
- **高活跃**：NanoBot、LobsterAI  
- **维护型活跃**：PicoClaw  
- **低活跃**：OpenHuman  
- **无活动**：IronClaw  

---

## 3. OpenClaw 在生态中的定位

### 3.1 社区规模与吞吐

OpenClaw 今日共有 **849 条 Issue/PR 更新**，约为：

- Hermes Agent（100 条）的 **8.5 倍**
- QwenPaw（54 条）的 **15.7 倍**
- LobsterAI（18 条）的 **47.2 倍**
- NanoBot（20 条）的 **42.5 倍**

这表明 OpenClaw 已是本组项目中**社区活动规模最大、问题暴露面最广、并行开发强度最高**的平台型项目。其 500 条 PR 更新和 277 条待合并 PR，也意味着维护者正承受远超同类的评审与回归压力。

### 3.2 优势

1. **Agent 编排能力最深入**  
   今日核心投入集中在 subagent spawn policy、collector replay、end-of-run、registry projection、dormant Stop 和 completion delivery，明显比多数同类项目更深入地处理多 Agent 状态机。

2. **长会话与跨执行链路覆盖更广**  
   今日同时推进 Codex thread 轮换、oversized request 恢复、transcript refresh、session recall fencing、parent session wake-up 等问题，覆盖的复杂度在本次样本中最强。

3. **CLI、Gateway、Control UI、移动端及插件生态完整**  
   项目已不是单一聊天壳，而是覆盖更新器、Doctor、会话数据库、Gateway、子代理、浏览器、插件、移动端和本地 Agent 的一体化平台。

4. **修复工程化意识增强**  
   cold-start 门禁、更新状态机设计、foreign recovery record 隔离、owner/projection 统一，说明其正从症状式修复转向状态模型治理。

### 3.3 与同类技术路线差异

| 项目 | 技术路线核心 |
|---|---|
| **OpenClaw** | 平台化 Gateway + 插件 + 多 Agent 编排 + 会话数据库，强调复杂生命周期和自动化 |
| **Hermes Agent** | Cron、Gateway、Desktop、插件目录、长期状态，强调长期运行和模块化基础设施 |
| **QwenPaw** | Console 控制台 + 本地模型 + Creator/Relay，强调可视化控制与本地 AI 工作台 |
| **NanoBot** | 轻量 SDK + 多渠道 + Skills，强调低门槛部署和快速兼容 |
| **LobsterAI** | Electron 桌面端 + DSH/Cowork + IM 协作，强调桌面工作台和办公协作 |
| **PicoClaw** | 轻量运行时 + 云服务 SDK/边缘能力，强调低资源与依赖维护 |
| **OpenHuman** | 个人工作流与 Workflow Copilot，强调个人场景自动化，但当前社区规模有限 |

### 3.4 主要挑战

OpenClaw 的规模既是优势，也是当前风险来源。其问题不只是数量多，而是集中在**升级、内存、会话、子代理状态和跨插件一致性**这些生产核心路径。相较 NanoBot、LobsterAI 偏向产品闭环，OpenClaw 更像在承担一个完整 Agent 操作系统的复杂度。

---

## 4. 共同关注的技术方向

### 4.1 会话连续性与长期记忆

- **OpenClaw**：Codex oversized request 后恢复、session recall fencing、Claude CLI 子任务不退出。
- **NanoBot**：Anthropic thinking block 在上下文压缩后签名失效。
- **Hermes Agent**：DOC-CHAIN 持久文档链、Per-Chat Memory Isolation、后台上下文压缩。
- **QwenPaw**：长期记忆引用计数、TTL、衰减和压缩历史查看。
- **LobsterAI**：定时任务复用会话、Cowork 上下文拆解和内存保护。

**共同诉求**：会话被压缩、跨进程、跨渠道或跨定时任务后，Agent 仍应恢复可追溯历史、偏好和任务状态，而不只是保留摘要。

### 4.2 Gateway 与长期运行稳定性

- **OpenClaw**：worker 内存持续增长、ARM64 高基线内存、SQLite timeout。
- **Hermes Agent**：Cron 脚本读取持有 SQLite 锁、孤儿清理阻塞、Gateway 事件循环阻塞。
- **QwenPaw**：Windows `llama-server.exe` 残留、Console 前后端状态脱节。
- **LobsterAI**：DSH 网关心跳与 Electron 主线程卡顿。

**共同诉求**：Agent 长时间运行不能依赖频繁重启；Gateway、worker、数据库和事件循环必须具备明确的资源退休、超时和背压机制。

### 4.3 工具调用安全与执行边界

- **OpenClaw**：browser Talk 断开后的任务状态、subagent stop/replay 语义。
- **QwenPaw**：doom-loop gate 失效、工具调用预算重复计数、`run_tool_batch` 失败。
- **Hermes Agent**：`execute_code` 沙箱、Cron 审批漏检文件写入原语。
- **OpenHuman**：`run_flow` 已确认但无审批卡、仍被拒绝。
- **LobsterAI**：多渠道工具执行、图片处理及账号 API 调用边界。

**共同诉求**：工具权限、审批展示、执行状态、失败原因和会话状态必须保持一致，不能出现“界面显示成功但实际未执行”或“已批准却无审批入口”。

### 4.4 多渠道与插件化

- **OpenClaw**：Codex、插件原生 collector 与共享 subagent policy 统一。
- **Hermes Agent**：Feishu、Lark、QQ 从核心迁为官方插件。
- **NanoBot**：`.agents/skills`、Web/MCP 代理、多语言及多渠道格式。
- **QwenPaw**：Relay 恢复、Console 审批、飞书卡片解析。
- **LobsterAI**：POPO、飞书、钉钉群聊迁移及任务隔离。

**共同诉求**：渠道、模型和技能应成为可插拔能力，但核心层不能继续硬编码渠道名称，也不能因插件重名或配置缺失破坏原生能力。

### 4.5 跨平台和低资源部署

- **OpenClaw**：Windows 更新、macOS Gateway、ARM64/1 GiB 主机。
- **NanoBot**：内网 Docker 代理与 DNS、Windows WebUI 延迟测试。
- **QwenPaw**：Windows 插件测试和本地模型进程管理。
- **Hermes Agent**：Windows junction、Python 3.14 ABI、Desktop 多 Profile。
- **LobsterAI**：Windows 覆盖安装、macOS Skill lockfile。
- **PicoClaw**：AWS/Azure Go SDK 依赖维护。

**共同诉求**：Agent 生态正在从 Linux/macOS 开发环境扩展到 Windows、ARM64、Docker 内网和受限主机，跨平台验证已成为发布门槛。

---

## 5. 差异化定位分析

| 项目 | 功能侧重 | 目标用户 | 关键技术架构特点 |
|---|---|---|---|
| **OpenClaw** | 全渠道个人 Agent、插件生态、Gateway、子代理自动化 | 高频个人用户、Agent 开发者、自动化重度用户 | Gateway 为中心；复杂会话数据库；多 owner 状态机；插件原生与共享策略并存 |
| **NanoBot** | 轻量多渠道助手、WebUI、Skills、SDK | 个人开发者、小团队、偏好轻量部署者 | 轻量核心、渠道清单、插件/Skills 分层；直接与流式 SDK 正在统一 |
| **PicoClaw** | 轻量运行时、云服务接入 | 边缘设备、小型云集成和成本敏感用户 | 依赖驱动、运行环境简洁；当前缺少明显的新产品功能信号 |
| **IronClaw** | 今日无数据 | 暂无法判断 | 无法从本期动态评估 |
| **LobsterAI** | 桌面 Cowork、DSH、IM 办公协作、专家与图片能力 | 桌面办公用户、团队协作用户 | Electron + DSH + Cowork Artifact 面板；群/会话模型向统一标识演进 |
| **QwenPaw** | Console、本地模型、Creator、Relay、IM 渠道 | 本地模型用户、Agent 开发者、重视可视化控制者 | 控制台与本地推理结合；append-only 会话、分页历史、fork、steering |
| **Hermes Agent** | Gateway、Cron、Desktop、插件、长期运行、安全执行 | 高级个人用户、自动化部署者、基础设施开发者 | Gateway/Cron/Desktop 核心加插件目录；强调持久化、沙箱和可插拔 SessionDB |
| **OpenHuman** | 个人 Workflow Copilot、桌面设置与自动化 | 个人工作流用户 | 产品面较窄；当前重点是审批可靠性和 onboarding 体验 |

### 关键差异判断

- **复杂编排能力最强**：OpenClaw  
- **长期运行与插件基础设施最突出**：Hermes Agent  
- **本地模型控制台方向最清晰**：QwenPaw  
- **轻量、多渠道、Skills 兼容最均衡**：NanoBot  
- **桌面办公协作体验最完整**：LobsterAI  
- **边缘/低成本运行定位较明确**：PicoClaw  
- **最聚焦个人 Workflow，但社区支撑较弱**：OpenHuman  

---

## 6. 社区热度与成熟度

### 6.1 快速迭代阶段

**OpenClaw**

- 849 条更新、277 条待合并 PR；
- 大规模推进 subagent、Doctor、Gateway、Codex 和更新状态机；
- 适合跟踪前沿设计，但生产采用需等待 Release 和稳定性验证。

**Hermes Agent**

- 100 条更新，48 个开放 Issue、44 个待合并 PR；
- SessionDB、DOC-CHAIN、Cron/锁竞争、安全沙箱等均在快速演化；
- 架构想象空间大，但长期 RFC 和积压带来的方向风险较高。

**QwenPaw**

- 54 条更新，Console、Relay、Creator、本地模型并行推进；
- 已进入从“功能可用”向“成熟控制台”过渡阶段；
- 但状态同步、渠道模型切换和长期记忆仍影响生产可信度。

### 6.2 快速闭环与质量巩固阶段

**LobsterAI**

- 17 条 PR 中 15 条已闭环；
- 群聊会话、DSH 冷启动、Cowork 侧聊、桌面安装均有系统性修复；
- 冷启动中位耗时从 **4.67 秒降至 1.99 秒，约改善 57.4%**，是本期最明确的可量化性能收益；
- 当前短板是发布落地和账号风控沟通。

**NanoBot**

- 9 个 Issue、11 个 PR，7 个 Issue、8 个 PR 闭环；
- Anthropic、代理、Web/MCP、希伯来语和 WebUI 功能推进迅速；
- 整体更接近“可用性打磨”，主要风险是代理安全边界和跨平台回归。

### 6.3 维护收口阶段

**PicoClaw**

- 今日无 Issue，主要为 AWS/Azure SDK 升级和历史修复批量归并；
- 说明团队在清理长期分支和维护依赖；
- 缺少用户反馈与 Release，无法确认修复最终交付。

### 6.4 低活跃或早期阶段

**OpenHuman**

- 仅 1 个 Issue、1 个 PR；
- onboarding 修复已有测试，但 Workflow 审批问题长期未闭环；
- 更适合作为早期个人自动化项目观察。

**IronClaw**

- 24 小时完全无活动；
- 本期没有足够信息判断其活跃度、成熟度或产品方向。

---

## 7. 值得关注的趋势信号

### 7.1 “长期运行”成为 Agent 的核心竞争维度

多个项目同时暴露 Gateway 内存增长、worker 不退休、SQLite 锁等待、后台任务卡死和进程残留。竞争标准正从单次回答质量转向：

- 24/7 稳定运行；
- 可恢复的执行状态；
- 有界资源占用；
- 可诊断的失败原因；
- 可安全重试和回滚。

**开发者参考**：应把内存上限、worker 退休、锁等待、事件循环延迟和任务幂等纳入默认测试，而不是发布前再补。

### 7.2 上下文治理正在成为独立产品层

压缩、记忆、文档链、历史分页、Turn fork 和记忆衰减在 OpenClaw、Hermes、QwenPaw、NanoBot、LobsterAI 中同时出现。下一阶段竞争重点不是“上下文窗口越大越好”，而是：

- 哪些内容应持久化；
- 记忆何时衰减或升级；
- 用户能否访问和纠正历史；
- 压缩后任务与事实是否仍可恢复；
- 不同会话、Profile 和渠道之间如何隔离。

**开发者参考**：建议从一开始设计可追溯的 session event、memory provenance、归档与恢复协议。

### 7.3 状态一致性是最突出的体验缺口

OpenClaw 存在“工具完成但 relay 报失败”，QwenPaw 存在“提示切换成功但模型未改变”，Hermes 存在“Cron 已投递但状态停在 queued”，OpenHuman 存在“已确认但审批卡不出现”。

这类问题比缺少单一功能更容易破坏用户信任。Agent 系统需要统一的：

> 请求状态 → 权限状态 → 执行状态 → 投递状态 → 用户可见结果

**开发者参考**：UI 不应仅根据工具调用返回推断成功，必须由后端权威状态和可追踪事件驱动。

### 7.4 插件化正在从目录扩展进入核心边界重构

Hermes 将 Feishu/QQ 迁出核心，NanoBot 引入 `.agents/skills`，OpenClaw 统一插件 collector 与 subagent policy，QwenPaw 扩展 Relay 与 Creator。插件已成为主要扩展方向，但下一阶段难点是：

- 默认安装与升级迁移；
- 同名工具、Skill、MCP Server 的命名空间隔离；
- 插件失败是否影响核心会话；
- 插件版本与 Agent 协议兼容；
- 回滚和卸载后的状态残留。

### 7.5 安全边界从“是否执行”转向“如何可解释地执行”

Hermes 的 `execute_code` 沙箱、Cron 审批覆盖、OpenHuman 审批链、QwenPaw 工具循环预算，以及 LobsterAI 账号风控，都表明权限体系将成为产品核心。成熟实现应提供：

- 清晰审批对象；
- 明确拒绝原因；
- 超时、取消和重试路径；
- 工具调用次数与资源预算；
- 高风险文件和网络操作的隔离；
- 用户可追踪的执行记录。

### 7.6 跨平台交付正在取代“Linux 优先”

Windows 更新失败、Windows 本地模型进程泄漏、macOS Gateway 凭据循环、ARM64 高内存、Docker 内网 DNS、Linux/macOS/Windows 插件安装差异同时出现。对团队而言，跨平台测试不应只是 CI 矩阵附属项，而应成为发布门禁。

### 7.7 对技术决策者的建议

1. **生产部署优先级**：OpenClaw、Hermes Agent、QwenPaw 应先等待关键稳定性 PR 合并和正式 Release。  
2. **轻量快速落地优先级**：NanoBot 的闭环效率较高，但代理访问应先验证 SSRF 和 DNS 策略。  
3. **桌面办公场景**：LobsterAI 的 Cowork/DSH 产品完成度较高，但需关注版本发布和账号治理。  
4. **低维护成本场景**：PicoClaw 可继续观察，需确认历史修复是否真正进入发布版本。  
5. **架构借鉴**：无论采用哪个项目，都应优先借鉴 OpenClaw 的状态 owner 划分、Hermes 的锁与资源隔离、QwenPaw 的事件化 Console 历史，以及 NanoBot 的轻量 Skills 兼容模型。

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目动态日报

**统计日期：2026-11-27**  
**数据范围：过去 24 小时**

## 1. 今日速览

过去 24 小时 NanoBot 共更新 **9 条 Issues**、**11 条 Pull Requests**，其中分别有 **2 条 Issues 保持开放、3 条 PR 仍待合并**，处理速度较快。项目今日重点集中在 **WebUI 体验、Anthropic 兼容性、代理与 MCP 网络访问、多语言支持、Skills 扩展机制** 等方向。  
共有 **7 条 Issues 关闭、8 条 PR 关闭**，显示问题响应与修复落地较为积极；不过目前仍有 **3 个待合并 PR**，其中 WebUI 会话内编辑重发和 SDK 执行统一是重要后续集成点。  
整体可评估为：**开发活跃度高、问题闭环能力较强，WebUI 与渠道适配持续完善，但代理安全边界、模型兼容性及部分长会话稳定性仍需重点回归。**

---

## 2. 版本发布

过去 24 小时 **无新版本发布**，因此暂无 Release 更新说明、破坏性变更或版本迁移要求。

---

## 3. 项目进展

### 3.1 WebUI：支持在同一会话中编辑并重新发送消息

- **PR：** [#6323 feat(webui): edit and resend messages in the same session](https://github.com/HKUDS/nanobot/pull/6323)
- **状态：** 待合并
- **进展：**
  - 允许用户修改已发送消息，并在原会话中重新提交。
  - PR 标注全部 **20 项 CI 检查已通过**。
  - 当前仍存在集成风险：Windows 对比测试仅通过 5 项延迟门禁中的 3 项，且 PR 标记为存在冲突。
- **影响：** 这是 WebUI 对话管理能力的显著增强，有助于用户快速修正提示词并复用上下文，但合并前仍需完成冲突处理和跨平台延迟验证。

### 3.2 Skills：支持发现项目级和用户级 `.agents/skills`

- **PR：** [#6821 feat(skills): discover project and user .agents skills](https://github.com/HKUDS/nanobot/pull/6821)
- **状态：** 待合并
- **进展：**
  - 在现有 workspace、plugin 和 bundled skills 之外，新增：
    - `<project>/.agents/skills/`
    - `~/.agents/skills/`
  - `/skill` 可展示当前生效的技能集合。
  - `$name` 可直接调用当前项目选中的技能。
- **影响：** 降低了技能复制和安装成本，扩展了 NanoBot 对外部 Agent 生态的兼容能力，是较有可能进入下一版本的功能方向。

### 3.3 SDK：统一直接执行与流式执行路径

- **PR：** [#6789 refactor(sdk): unify direct and streamed execution](https://github.com/HKUDS/nanobot/pull/6789)
- **状态：** 待合并
- **进展：**
  - 直接调用和流式调用共享 turn setup 与执行逻辑。
  - 统一会话锁和模型解析行为。
  - 保留两类调用不同的返回值，并限制 `max_suffix` 的适用范围。
  - 直接执行模式仍不会分配流式队列。
- **影响：** 有助于减少 SDK 两套执行路径的行为漂移，降低未来模型路由、上下文压缩与会话控制的维护成本。

### 3.4 Anthropic：兼容 Haiku 5.5，并修复 thinking 会话恢复

- **PR：** [#6792 fix(anthropic): recover compacted thinking sessions and honor Haiku 5.5 effort](https://github.com/HKUDS/nanobot/pull/6792)
- **状态：** 已关闭
- **对应 Issues：**
  - [#6785 Anthropic Haiku 5.x fails with reasoningEffort](https://github.com/HKUDS/nanobot/issues/6785)
  - [#6786 Invalid signature in thinking block after compaction](https://github.com/HKUDS/nanobot/issues/6786)
- **进展：**
  - Haiku 5.5 不再发送其不支持的手动 thinking budget，改为使用 adaptive thinking 与 `output_config.effort`。
  - Haiku 4.5 仍保留手动 thinking budget 行为。
  - 上下文压缩后重放 thinking block 时，允许受支持模型重新生成有效签名，缓解旧请求前缀签名失效问题。
- **影响：** 修复了 Anthropic 新模型参数不兼容和长会话压缩后的不可用问题，属于模型适配与稳定性方面的重要进展。

### 3.5 Web 与 MCP：允许共享代理解析远端主机

- **PR（Web Fetch）：** [#6815 fix(web): let the shared proxy resolve web_fetch targets](https://github.com/HKUDS/nanobot/pull/6815)
- **PR（MCP）：** [#6818 fix(mcp): let the selected shared proxy resolve remote servers](https://github.com/HKUDS/nanobot/pull/6818)
- **状态：** 均已关闭
- **对应 Issue：** [#6811 web_fetch and HTTP MCP are unusable on internal-only Docker networks](https://github.com/HKUDS/nanobot/issues/6811)
- **进展：**
  - 启用代理且配置共享代理时，`web_fetch` 可将远端域名交由代理解析，而不再要求容器本地 DNS 可用。
  - MCP 的 SSE 与 Streamable HTTP 传输也允许仅能通过所选共享代理解析远端服务器的场景完成连接和工具注册。
- **影响：** 提升了纯内网 Docker、无公网 DNS 和强制代理环境下的部署兼容性。

### 3.6 国际化：WebUI 和命令目录新增希伯来语

- **PR（WebUI）：** [#6814 feat(webui): add Hebrew translations](https://github.com/HKUDS/nanobot/pull/6814)
- **PR（命令与回复）：** [#6819 fix(i18n): add Hebrew translations for command menus and replies](https://github.com/HKUDS/nanobot/pull/6819)
- **PR（测试）：** [#6820 test(telegram): expect the Hebrew command menu](https://github.com/HKUDS/nanobot/pull/6820)
- **状态：** 均已关闭
- **对应 Issue：** [#6807 WebUI feature proposal: Hebrew localization and bidirectional chat](https://github.com/HKUDS/nanobot/issues/6807)
- **进展：**
  - WebUI、内置渠道配置页和组件库支持希伯来语。
  - 语言选择可在刷新后保持。
  - 为共享的五套命令目录补充希伯来语翻译，覆盖命令菜单、命令回复、配对流程等。
  - Telegram 测试增加 `he` 语言及本地化 `/start` 描述校验。
- **影响：** 显著改善 WebUI 的 RTL 本地化基础，但双向文本布局支持仍需由原 Issue 的后续讨论或实现确认。

### 3.7 渠道格式提示：从核心模板迁移到渠道清单

- **PR：** [#6816 refactor(agent): inject loop dependencies and let channels declare reply formats](https://github.com/HKUDS/nanobot/pull/6816)
- **状态：** 已关闭
- **相关 PR：** [#6810 fix(agent): add a math format hint for WebSocket replies](https://github.com/HKUDS/nanobot/pull/6810)
- **对应 Issue：** [#6809 WebSocket replies lack a default hint for renderable math](https://github.com/HKUDS/nanobot/issues/6809)
- **进展：**
  - 为 WebSocket 渠道增加数学格式提示，建议使用 `\(...\)` 和 `\[...\]`，避免将公式放入行内代码或围栏代码块。
  - 随后将稳定的回复格式指导迁移到渠道清单，减少核心身份模板对具体渠道名称的硬编码。
- **影响：** 提升多渠道输出规范的可维护性，降低新增渠道时重复修改核心模板的成本。

---

## 4. 社区热点

### 4.1 WebUI 长文本粘贴体验

- **Issue：** [#6806 WebUI: auto-convert long pasted text into a workspace file](https://github.com/HKUDS/nanobot/issues/6806)
- **状态：** 开放
- **热度：** **2 条评论**，今日 Issues 中评论最多
- **用户诉求：**
  - 粘贴日志、文章、配置文件或命令输出时，不再将全文直接内联到消息。
  - 自动转换为 workspace 文件，保留聊天记录可读性。
  - 降低会话历史和上下文体积，避免关键信息被大段文本淹没。
- **背后诉求：** 用户希望把 NanoBot 从“聊天界面”进一步提升为可持续处理长材料的工作台。其本质需求是**上下文治理、聊天记录整洁和文件化工作流**。

### 4.2 WebUI 会话内编辑与重发

- **PR：** [#6323 feat(webui): edit and resend messages in the same session](https://github.com/HKUDS/nanobot/pull/6323)
- **状态：** 开放
- **热度：** **20 项 CI 检查通过**，但尚未请求评审
- **用户诉求：**
  - 在同一会话中修改并重发已有消息。
  - 避免重新创建会话或手工复制上下文。
- **背后诉求：** 提升提示词迭代效率，贴近主流 AI 聊天产品的基本编辑体验。当前主要瓶颈不是功能实现，而是**冲突、延迟门禁和跨平台稳定性**。

### 4.3 Anthropic thinking 与新模型兼容性

- **Issues：**
  - [#6785 Haiku 5.x fails with reasoningEffort](https://github.com/HKUDS/nanobot/issues/6785)
  - [#6786 Invalid signature in thinking block after compaction](https://github.com/HKUDS/nanobot/issues/6786)
- **状态：** 均已关闭
- **热度：** 各有 **1 条评论**
- **用户诉求：**
  - Haiku 5.5 使用 `reasoningEffort: medium` 时请求不应全部失败。
  - 上下文压缩并恢复会话后，thinking block 不应因签名失效而使整个会话不可用。
  - CLI 以 `-m` 运行时不应隐藏底层错误。
- **背后诉求：** 用户不仅要求“兼容新模型”，还要求错误可见、长会话可恢复，以及不同 Anthropic 模型的 thinking 参数能够自动适配。该组问题已有对应修复 PR。

---

## 5. Bug 与稳定性

按当前影响范围和是否已有明确修复方案排列：

### 严重：高影响，已有 fix PR

1. **Anthropic thinking 会话在上下文压缩后失效**
   - **Issue：** [#6786 Invalid signature in thinking block after compaction](https://github.com/HKUDS/nanobot/issues/6786)
   - **影响：** 长会话在压缩后可能无法恢复，错误还可能被 CLI 隐藏。
   - **Fix PR：** [#6792](https://github.com/HKUDS/nanobot/pull/6792)，已关闭，预计已有修复落地。

2. **纯内网 Docker 中 `web_fetch` 与 HTTP MCP 无法使用**
   - **Issue：** [#6811 web_fetch and HTTP MCP unusable on internal-only Docker networks](https://github.com/HKUDS/nanobot/issues/6811)
   - **影响：** 无公网 DNS、仅通过共享代理出站的企业或本地部署可能完全无法使用网络工具。
   - **Fix PR：**
     - Web Fetch：[#6815](https://github.com/HKUDS/nanobot/pull/6815)
     - MCP：[#6818](https://github.com/HKUDS/nanobot/pull/6818)
   - 两者均已关闭；仍建议后续关注 SSRF 防护是否与代理路径持续一致。

### 中等：已有明确修复 PR

3. **Haiku 5.5 拒绝手动 thinking budget**
   - **Issue：** [#6785](https://github.com/HKUDS/nanobot/issues/6785)
   - **影响：** 使用 `reasoningEffort: medium` 等配置时，请求可能全部失败。
   - **Fix PR：** [#6792](https://github.com/HKUDS/nanobot/pull/6792)，已关闭。
   - 修复策略为按模型区分 adaptive thinking 与手动 budget。

4. **OpenAI-compatible Claude 路径丢失历史 `cache_control`**
   - **Issue：** [#6817 History cache_control marker is dropped after a textless tool call](https://github.com/HKUDS/nanobot/issues/6817)
   - **状态：** **开放，暂无明确 fix PR**
   - **影响：** 当历史以无文本 assistant tool call 和 tool result 结尾时，只有系统提示和工具定义保持缓存，工具循环步骤的缓存命中率下降。
   - **判断：** 更偏向性能与成本回归，而非请求直接失败，但长工具调用会话可能因此显著增加延迟和 token 成本。

5. **WebSocket 回复缺少数学渲染提示**
   - **Issue：** [#6809](https://github.com/HKUDS/nanobot/issues/6809)
   - **Fix PR：**
     - [#6810](https://github.com/HKUDS/nanobot/pull/6810)
     - 后续重构：[#6816](https://github.com/HKUDS/nanobot/pull/6816)
   - 两者均已关闭，数学公式显示预期已得到改善。

### 较低：无独立修复 PR

6. **WebUI 粘贴长文本导致会话和上下文膨胀**
   - **Issue：** [#6806](https://github.com/HKUDS/nanobot/issues/6806)
   - **状态：** 开放
   - **影响：** 主要是会话可读性、历史体积和上下文利用率问题，目前没有报告崩溃或数据损坏。
   - **判断：** 属于体验与资源治理问题，不应按功能增强需求处理。

---

## 6. 功能请求与路线图信号

### 6.1 长文本自动转为 workspace 文件

- **需求：** [#6806](https://github.com/HKUDS/nanobot/issues/6806)
- **当前信号：** 暂无对应 PR。
- **下一版本可能性：** **中等**
- **判断理由：**
  - 需求明确，且与 NanoBot 的 workspace、文件处理和上下文管理能力高度一致。
  - 实现可能涉及阈值策略、文件命名、引用替换、权限与敏感内容处理。
  - 若要进入下一版本，需明确自动转换阈值、用户确认机制及原始文本的可恢复方式。

### 6.2 `.agents/skills` 目录发现机制

- **PR：** [#6821](https://github.com/HKUDS/nanobot/pull/6821)
- **下一版本可能性：** **较高**
- **判断理由：**
  - 已形成完整 PR，覆盖项目级和用户级目录、命令发现与技能调用。
  - 能直接降低技能安装成本，并增强与其他 Agent 工具链的互操作。
  - 合并前需确认路径优先级、重复技能名处理及跨项目隔离。

### 6.3 WebUI 同会话编辑和重发

- **PR：** [#6323](https://github.com/HKUDS/nanobot/pull/6323)
- **下一版本可能性：** **较高，但尚有合并风险**
- **判断理由：**
  - CI 总体通过，功能范围明确。
  - 冲突标记和 Windows 延迟门禁未完成，可能需要进一步验证后才能发布。

### 6.4 SDK 统一直接与流式执行

- **PR：** [#6789](https://github.com/HKUDS/nanobot/pull/6789)
- **下一版本可能性：** **中高**
- **判断理由：**
  - 属于底层 SDK 稳定性重构，应用价值高，但对现有调用行为和上下文压缩逻辑存在潜在回归面。
  - 需要结合单元测试、流式/非流式一致性测试后判断发布时机。

### 6.5 Web 搜索与模型网关扩展

- **Issue：**
  - [#6812 Add WebRouter as a key-optional web_search provider](https://github.com/HKUDS/nanobot/issues/6812)
  - [#6813 feat(providers): add TrustedRouter gateway](https://github.com/HKUDS/nanobot/issues/6813)
- **状态：** 均已关闭
- **判断：** 说明用户希望降低单一搜索服务或单一模型供应商的故障影响，并支持多密钥、多网关场景。相关功能已经关闭，但当前摘要未给出具体合并 PR 链接，需维护者确认其最终实现范围和文档覆盖情况。

---

## 7. 用户反馈摘要

### 真实使用场景

- **企业内网与代理环境：**
  - 用户在 Docker `internal: true` 网络中运行，通过 `HTTP_PROXY`、`HTTPS_PROXY` 和 `NO_PROXY` 出站。
  - 核心痛点不是“是否配置代理”，而是**本地 DNS 无法解析目标域名时，SSRF 检查和代理请求链路不一致**。
  - 代理修复直接提升了此类部署的可用性。

- **长材料处理：**
  - 用户会粘贴日志、文章、配置和命令输出。
  - 当前 WebUI 会将全文写入消息，污染聊天记录并放大上下文。
  - 用户期待系统自动文件化，而不是仅提供手动附件入口。

- **Anthropic 长会话与模型切换：**
  - 用户使用 Haiku 5.5、Claude Sonnet 5.5 等新模型，并设置 reasoning effort。
  - 既关注新模型参数兼容，也关注上下文压缩后 thinking 签名失效这一长会话可靠性问题。
  - 用户还明确反馈 CLI `-m` 模式隐藏错误，降低了问题可诊断性。

- **多语言与 RTL：**
  - 用户不仅要求 WebUI 翻译，还希望命令、回复和双向聊天完整本地化。
  - 今日已解决大部分希伯来语界面和命令目录翻译，但双向排版仍值得后续验证。

### 满意与改进信号

- **正面信号：**
  - 多条 Issue 在提出后一天内关闭，说明核心维护者对模型兼容、网络代理和国际化问题响应较快。
  - 多个问题已有针对性和较完整的 fix PR，而非仅做临时关闭。
  - WebUI、命令目录和测试同步更新，说明 i18n 改动具备较完整的落地链路。

- **仍不满意的环节：**
  - CLI 隐藏底层错误，影响问题定位。
  - 纯内网部署中代理与 SSRF/DNS 行为不一致，造成“明明配置代理却无法访问”的明显体验落差。
  - 长文本全部内联，使 WebUI 尚不能很好支撑重度资料分析工作流。
  - WebUI 编辑重发功能已经开发，但冲突和跨平台延迟测试尚未完成，用户实际可用性仍需等待合并。

---

## 8. 待处理积压

### 8.1 开放 Issue

1. **[#6806 WebUI 长文本粘贴自动转为 workspace 文件](https://github.com/HKUDS/nanobot/issues/6806)**
   - 今日评论最多，说明需求获得明确关注。
   - 尚无对应 PR。
   - **建议：** 明确产品规则、配置阈值和文件引用协议，并尽快拆分 UI、文件写入及上下文注入三个实施任务。

2. **[#6817 OpenAI-compatible Claude 路径丢失历史 `cache_control`](https://github.com/HKUDS/nanobot/issues/6817)**
   - 今日新建，尚无评论和 fix PR。
   - **建议：** 优先补充最小复现与请求体快照，重点验证“assistant tool call 无文本 + tool result”场景，避免只修复单一 provider。

### 8.2 待合并 PR

1. **[#6323 WebUI 同会话编辑并重发消息](https://github.com/HKUDS/nanobot/pull/6323)**
   - 创建时间较长，核心 CI 已通过，但存在冲突和 Windows 延迟门禁未通过情况。
   - **建议：** 明确阻塞项负责人，完成 rebase/冲突处理和五项延迟门禁后进入评审。

2. **[#6821 发现项目级与用户级 `.agents/skills`](https://github.com/HKUDS/nanobot/pull/6821)**
   - 新功能边界清晰，是近期最可能直接进入下一版本的增强之一。
   - **建议：** 补充路径优先级、同名技能冲突和项目隔离测试。

3. **[#6789 统一 SDK 直接与流式执行](https://github.com/HKUDS/nanobot/pull/6789)**
   - 涉及执行、会话锁、模型解析和压缩逻辑，改动风险高于普通功能 PR。
   - **建议：** 增加直接/流式结果一致性、并发会话锁和压缩路径的回归测试。

---

## 健康度结论

**综合健康度：良好，活跃度较高。**

- **响应效率高：** 24 小时内关闭 7 条 Issues、关闭 8 条 PR。
- **修复覆盖面广：** 已处理 Anthropic 新模型兼容、thinking 恢复、代理 DNS、Web/MCP、WebSocket 数学提示和希伯来语本地化等问题。
- **产品方向清晰：** WebUI 正在从基础聊天界面转向支持长材料、项目级技能和会话内迭代的 Agent 工作台。
- **主要风险：**
  1. 代理支持与 SSRF 防护逻辑需要在后续版本中持续审计；
  2. Anthropic thinking、上下文压缩和多 provider 兼容仍需更多回归；
  3. 两个待合并功能 PR 尚存在冲突或平台验证问题；
  4. 长文本文件化需求尚缺明确实现路径。

下一阶段最值得关注的里程碑是：**合并 `.agents/skills`、完成 WebUI 编辑重发的稳定性验证、推进 SDK 执行路径统一，以及为长文本自动文件化形成可实施方案。**

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目动态日报

**统计日期：2026-11-27**  
**数据范围：过去 24 小时 GitHub 仓库活动**  
**仓库：[sipeed/picoclaw](https://github.com/sipeed/picoclaw)**

---

## 1. 今日速览

- 过去 24 小时项目共有 **5 条 PR 更新**，其中 **2 条仍待合并、3 条已关闭**；没有新的 Issue 更新，也没有新版本发布。
- 今日新增活动主要由 **Dependabot 依赖升级**构成，涉及 AWS SDK for Go v2 和 Azure SDK for Go，均处于开放状态。
- 同期关闭了 **3 条历史合并型 PR**，这些 PR 用于将此前分散的修复 PR 汇总合并，未显示新的独立功能开发。
- 项目整体呈现出“**依赖维护持续推进、功能开发相对平静**”的状态；由于缺少 Issue、评论和版本发布数据，今日无法观察到显著的用户需求或路线图变化。
- 活跃度评估：**中等偏低、维护性活动正常**。短期没有公开的版本发布或高热度讨论，重点应关注依赖升级验证及历史修复分支的实际落地情况。

---

## 3. 项目进展

### 已关闭的重要 PR

#### 1. 合并 PR #1344、#1342、#1341、#1331

- **PR：** [#1558](https://github.com/sipeed/picoclaw/pull/1558)
- **状态：** 已关闭
- **作者：** @xuwei-xy
- **最后更新：** 2026-11-26
- **内容概述：** 该 PR 的目标是将 #1344、#1342、#1341、#1331 中的修复集中合并。

从标题和摘要看，其作用主要是**整合既有修复、降低多个独立 PR 的合并成本**。这有助于统一修复进入主线的路径，但摘要未提供各子 PR 对应的具体功能、缺陷或影响范围，因此不能据此确认具体修复了哪些运行时问题。

#### 2. 合并 PR #1327、#1319、#1318、#1313

- **PR：** [#1559](https://github.com/sipeed/picoclaw/pull/1559)
- **状态：** 已关闭
- **作者：** @xuwei-xy
- **最后更新：** 2026-11-26
- **内容概述：** 汇总合并 #1327、#1319、#1318、#1313 中的修复。

该 PR 同样属于历史修复的集中归并，有助于避免相关修复长期分散。当前摘要未披露具体变更内容，因而对功能提升和稳定性改善的幅度只能做保守判断。

#### 3. 合并 PR #1390、#1389、#1383、#1381

- **PR：** [#1555](https://github.com/sipeed/picoclaw/pull/1555)
- **状态：** 已关闭
- **作者：** @xuwei-xy
- **最后更新：** 2026-11-26
- **内容概述：** 汇总合并 #1390、#1389、#1383、#1381 中的修复。

这是一次批量整理历史修复的活动，体现出维护者正在推进积压变更的归并与收口。不过仅凭当前数据，无法验证这些变更是否已经进入默认分支或发布版本。

### 开放中的依赖升级

#### AWS SDK for Go v2 升级

- **PR：** [#3474](https://github.com/sipeed/picoclaw/pull/3474)
- **状态：** 开放，待合并
- **升级范围：** `github.com/aws/aws-sdk-go-v2` 从 **1.42.0 升至 1.48.0**
- **提交信息：** 包含 `Release 2026-11-10` 等上游发布记录。
- **影响判断：** 属于基础设施依赖更新，可能影响 AWS 相关接口兼容性、请求行为或错误类型。当前没有测试结果、兼容性说明或维护者反馈，不能确认是否存在破坏性变化。

#### Azure SDK for Go `azcore` 升级

- **PR：** [#3473](https://github.com/sipeed/picoclaw/pull/3473)
- **状态：** 开放，待合并
- **升级范围：** `github.com/Azure/azure-sdk-for-go/sdk/azcore` 从 **1.22.0 升至 1.24.0**
- **影响判断：** 可能影响 Azure SDK 调用链、认证流程、错误处理或接口行为。PR 摘要引用了 Azure SDK 的发布说明，但当前数据未显示具体变更内容及回归测试结果。

### 整体推进程度

今日项目主要完成了**历史修复分支的批量收口**，并提出两项云服务 SDK 依赖升级。没有新版本发布，也没有新的独立功能 PR，因此更准确的评价是：

- **功能面：** 无明确新增。
- **稳定性面：** 多个既有修复集合得到归并，但具体收益需结合子 PR 和目标分支确认。
- **维护面：** 云生态依赖更新持续推进，有利于适配上游服务变化。
- **风险点：** 两项依赖升级尚未完成合并验证，可能引入 API 或行为兼容风险。

---

## 4. 社区热点

过去 24 小时没有 Issue 更新，5 条 PR 均显示 **0 条评论、0 个点赞**，因此没有形成明显的社区讨论热点。

### 今日相对值得关注的 PR

1. **AWS SDK 升级**
   - [PR #3474](https://github.com/sipeed/picoclaw/pull/3474)
   - 关注价值：反映项目对 AWS 上游依赖持续性的维护。
   - 背后诉求：及时获得 SDK 修复、新能力及上游兼容性调整。
   - 当前问题：缺少 CI 结果和回归说明，尚不能判断能否直接合并。

2. **Azure SDK 升级**
   - [PR #3473](https://github.com/sipeed/picoclaw/pull/3473)
   - 关注价值：有助于保持 Azure 相关接入能力与上游 SDK 同步。
   - 背后诉求：修复潜在缺陷并适配 Azure 服务端变化。
   - 当前问题：同样需要补充认证、网络请求、错误处理等关键路径的验证。

3. **历史修复归并 PR**
   - [PR #1558](https://github.com/sipeed/picoclaw/pull/1558)
   - [PR #1559](https://github.com/sipeed/picoclaw/pull/1559)
   - [PR #1555](https://github.com/sipeed/picoclaw/pull/1555)
   - 关注价值：这些 PR 汇总了 11 个历史修复 PR 的内容，可能显著影响项目维护效率和变更落地速度。
   - 背后诉求：减少长期分散的修复 PR，降低审查和合并成本。
   - 当前问题：摘要未展开子 PR 内容，社区也未提供足够反馈以评估实际收益。

---

## 5. Bug 与稳定性

### 严重程度

今日没有新 Issue，也没有报告新的崩溃、回归或用户可见故障，因此没有可按“严重/高/中/低”排序的新 Bug 条目。

### 稳定性维护活动

以下均为既有修复的汇总 PR，而非今日新发现的 Bug：

| 关联 PR | 状态 | 说明 |
|---|---|---|
| [#1558](https://github.com/sipeed/picoclaw/pull/1558) | 已关闭 | 汇总 #1344、#1342、#1341、#1331 |
| [#1559](https://github.com/sipeed/picoclaw/pull/1559) | 已关闭 | 汇总 #1327、#1319、#1318、#1313 |
| [#1555](https://github.com/sipeed/picoclaw/pull/1555) | 已关闭 | 汇总 #1390、#1389、#1383、#1381 |

**判断：**

- 没有证据表明今日出现了新的稳定性事故。
- 批量关闭修复归并 PR 表明维护工作正向“集中整理历史变更”推进。
- 由于没有提供子 PR 的正文、目标分支及测试信息，无法确认这些修复是否已经进入发布分支。
- 两项待合并的 SDK 升级存在潜在兼容性风险，但目前没有报告实际回归，应视为**待验证风险**，而不是已发生 Bug。

---

## 6. 功能请求与路线图信号

今日没有新 Issue，也没有带明确功能诉求的开放 PR，因此没有直接的新功能需求进入评估。

可观察到的路线图信号包括：

1. **持续维护多云服务依赖**
   - [AWS SDK 升级 PR #3474](https://github.com/sipeed/picoclaw/pull/3474)
   - [Azure SDK 升级 PR #3473](https://github.com/sipeed/picoclaw/pull/3473)
   - 这说明云服务适配与依赖治理仍是近期工程工作的重点之一。

2. **历史修复集中落地**
   - [PR #1558](https://github.com/sipeed/picoclaw/pull/1558)
   - [PR #1559](https://github.com/sipeed/picoclaw/pull/1559)
   - [PR #1555](https://github.com/sipeed/picoclaw/pull/1555)
   - 项目可能正在优先清理旧 PR、合并已有修复，而非大规模启动新功能。

3. **下一版本可能性**
   - 当前没有新版本，也没有明确版本计划或路线图 Issue。
   - 若依赖升级顺利通过 CI，并确认历史修复已经进入主线，则这些变更较可能进入下一次常规版本。
   - 由于没有 Release 计划、里程碑或维护者说明，不能确定具体版本号和发布范围。

---

## 7. 用户反馈摘要

过去 24 小时没有 Issue 更新，所有列出的 PR 均为 **0 评论、0 点赞**，因此没有可提炼的真实用户评论、痛点或满意度数据。

当前只能从 PR 类型做有限推断：

- 依赖升级通常服务于**兼容性维护、上游缺陷修复和接口同步**，并非直接来自用户功能诉求。
- 批量归并历史修复可能改善**问题收敛速度和维护效率**。
- 没有用户场景反馈，无法判断这些变更是否解决实际部署中的 AWS、Azure 或其他模块问题。
- 建议后续关注 [#3473](https://github.com/sipeed/picoclaw/pull/3473) 和 [#3474](https://github.com/sipeed/picoclaw/pull/3474) 的测试结果，以及历史合并 PR 的实际目标分支。

---

## 8. 待处理积压

### 需要优先处理的开放 PR

#### AWS SDK for Go v2 升级

- [PR #3474](https://github.com/sipeed/picoclaw/pull/3474)
- 当前处于开放状态，尚未看到 CI、审查或兼容性结论。
- 建议维护者确认：
  - AWS 请求构造与响应解析是否兼容；
  - 认证和重试行为是否变化；
  - 相关单元测试、集成测试是否通过；
  - 是否需要同步升级其他 AWS SDK 子模块。

#### Azure SDK for Go `azcore` 升级

- [PR #3473](https://github.com/sipeed/picoclaw/pull/3473)
- 当前处于开放状态。
- 建议维护者确认：
  - 认证、管道构建和错误处理是否受影响；
  - Azure 客户端调用是否通过回归测试；
  - 是否存在最低 Go 版本或传递依赖升级要求。

### 历史长期 PR 的收口风险

- [PR #1558](https://github.com/sipeed/picoclaw/pull/1558)、[#1559](https://github.com/sipeed/picoclaw/pull/1559)、[#1555](https://github.com/sipeed/picoclaw/pull/1555) 均创建于 **2026-03-14**，并于 2026-11-26 更新后关闭。
- 它们一次关联多个历史修复 PR，说明仓库曾存在较长的修复分支和 PR 分散积压。
- 建议维护者补充记录：
  - 哪些子 PR 已实际进入默认分支；
  - 哪些变更尚未发布；
  - 是否需要创建对应的 release note 或测试报告。
- 当前没有长期未响应的开放 Issue，但历史 PR 的合并状态缺乏公开说明，仍应作为维护透明度事项关注。

---

## 项目健康度结论

**健康度：基本稳定，今日活跃度中等偏低。**

积极信号：

- 依赖机器人持续更新云服务 SDK，维护工作没有停滞。
- 维护者关闭了多个历史归并 PR，开始集中清理和推进既有修复。
- 未出现新 Bug 报告、版本事故或明显社区冲突。

风险信号：

- 今日没有 Issue 或评论数据，用户侧反馈不可见。
- 两项关键依赖升级仍待验证和合并。
- 历史修复是否进入默认分支和发布版本缺少明确说明。
- 没有新版本发布，无法确认当前修复集合对实际用户的交付进度。

**今日建议关注顺序：**

1. 完成 [#3473](https://github.com/sipeed/picoclaw/pull/3473) 与 [#3474](https://github.com/sipeed/picoclaw/pull/3474) 的兼容性与 CI 验证。
2. 核实 [#1555](https://github.com/sipeed/picoclaw/pull/1555)、[#1558](https://github.com/sipeed/picoclaw/pull/1558)、[#1559](https://github.com/sipeed/picoclaw/pull/1559) 所含修复的最终落地状态。
3. 在下一次发布前整理依赖升级和历史修复对应的 changelog。
4. 补充或恢复面向 Issue/PR 的用户反馈渠道，以便后续日报能够更准确识别真实痛点和需求优先级。

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI 项目动态日报

**日期：2026-11-27**  
**数据范围：过去 24 小时 GitHub 数据**

---

## 1. 今日速览

过去 24 小时项目保持较高开发活跃度，共更新 **1 条 Issue**、**17 条 PR**，其中 **15 条已合并或关闭、2 条仍待处理**，另有 **1 条开放 Issue**，整体推进节奏较快。  
今日工作重点集中在 **DSH/Cowork 能力完善、会话与任务管理、IM 渠道稳定性、桌面端连接与安装体验**。  
PR 数量较高且多数已闭环，表明项目处于持续集成和快速修复阶段；但仍有 **2 条 PR 待合并**，需关注其评审与合入进度。  
当前未见新版本发布，今日变更尚未形成可对外验证的 Release；Issue #3225 涉及账号封禁与解封，也暴露出官方接口使用边界及风控沟通问题。  
综合来看，项目开发活跃度较高、工程迭代效率较好，但版本发布、用户支持和风控机制仍存在可观察的改进空间。

---

## 3. 项目进展

### 3.1 DSH 会话、任务与上下文能力

- **PR #3228：迁移 DSH 后保留共享群聊会话**  
  修复 POPO 群任务显示首位发言人姓名、普通飞书群升级后新建任务、不同群聊历史割裂，以及多位成员连续 @ 机器人时消息互相打断等问题。方案按群标识生成任务标题、保留发言人和回复目标，并区分机器人、群、私聊及飞书话题。  
  状态：**待合并**。  
  链接：<https://github.com/netease-youdao/LobsterAI/pull/3228>

- **PR #3226：定时任务复用同一会话**  
  同一 Agent 的同一定时任务不再每次创建独立 Cowork 会话，而是复用本地会话，同时保留每次执行独立的 DSH 模型上下文；升级时通过 SQLite 事务迁移已有重复会话消息。  
  状态：**已关闭/已合入或不再维护**，具体合并信息需以 PR 页面为准。  
  链接：<https://github.com/netease-youdao/LobsterAI/pull/3226>

- **PR #3223：保留 Host 身份并避免重复会话标题**  
  调整 `lobsterai-host-identity` 插件注册顺序，确保 LobsterAI Host 身份优先于子 persona 和可编辑工作区文档；同时处理重复会话标题生成问题。  
  状态：**已关闭/已合入或不再维护**。  
  链接：<https://github.com/netease-youdao/LobsterAI/pull/3223>

- **PR #3222：优化初始上下文 Token 并治理空闲能力**  
  推进 P0–P2 初始上下文优化，包括降低静态框架权重、减少低频配置占用，并引入空闲能力清理机制。  
  状态：**已关闭/已合入或不再维护**。  
  链接：<https://github.com/netease-youdao/LobsterAI/pull/3222>

### 3.2 Cowork 交互界面与会话体验

- **PR #3221：重设计 DSH 侧边会话面板**  
  将旧的浮动式 `CoworkBtwFloatingPanel` 替换为右侧 Artifact 面板中的多标签侧聊，支持 `/btw`、`/side`、文本选区引用、新建标签页及恢复最近侧聊，并加入原生 fork 能力。  
  状态：**已关闭/已合入或不再维护**。  
  链接：<https://github.com/netease-youdao/LobsterAI/pull/3221>

- **PR #3220：增加上下文用量拆解与页面文件拖放**  
  订阅 DSH 的 `contextPressure`、`contextBreakdown` 等会话控制数据，实时展示上下文占用；支持将页面文件拖入会话，并增加 DSH 内存保护。  
  状态：**已关闭/已合入或不再维护**。  
  链接：<https://github.com/netease-youdao/LobsterAI/pull/3220>

- **PR #3219：增加对话轮次导航与滚动恢复**  
  新增可搜索的对话轮次大纲、首条/最新/上一条/下一条快速跳转，并保存和恢复会话阅读位置；同时简化 DSH 插件菜单。  
  状态：**已关闭/已合入或不再维护**。  
  链接：<https://github.com/netease-youdao/LobsterAI/pull/3219>

- **PR #3215：插件拖拽排序与首页/Companion UI 优化**  
  支持 DSH 插件生态及侧边栏插件拖拽排序和溢出菜单，移除已弃用的 `dragAssist` 配置，并优化 Desktop Companion 相关界面。  
  状态：**已关闭/已合入或不再维护**。  
  链接：<https://github.com/netease-youdao/LobsterAI/pull/3215>

### 3.3 IM 渠道与媒体能力

- **PR #3211：修复钉钉卡片正文为空**  
  针对钉钉 iOS 私聊收到 AI 卡片但正文为空的问题，在投递后继续写入 Markdown、结束流并标记卡片完成；限流或连接中断时在同一卡片重试一次。  
  状态：**已关闭/已合入或不再维护**。  
  链接：<https://github.com/netease-youdao/LobsterAI/pull/3211>

- **PR #3216：支持专家图片归因与去水印**  
  扩展图片请求以携带专家预设 ID，并为 DSH 打包 LobsterAI 图片处理技能；支持使用已保存图片进行服务端水印移除，模板不匹配时回退发送原图。  
  状态：**已关闭/已合入或不再维护**。  
  链接：<https://github.com/netease-youdao/LobsterAI/pull/3216>

- **PR #3214：修复 Cowork 多项交互与 IM 超时问题**  
  覆盖右侧栏或原生预览打开时模型选择器被裁切、自动压缩导致的轮次拆分、图片编辑状态显示以及 IM 超时等问题。  
  状态：**已关闭/已合入或不再维护**。  
  链接：<https://github.com/netease-youdao/LobsterAI/pull/3214>

### 3.4 桌面端性能、连接与安装体验

- **PR #3227：恢复 Profile 热重载并改善桌面连接稳定性**  
  修复 DSH `0.2.2-rc.5` 中 Electron profile 热重载失效问题，并将桌面网关心跳间隔调整为 10 秒，以降低短暂主线程卡顿造成的断连概率。  
  状态：**已关闭/已合入或不再维护**。  
  链接：<https://github.com/netease-youdao/LobsterAI/pull/3227>

- **PR #3213：优化 DSH 冷启动并增加连接追踪**  
  通过共享固定版本 Zod 依赖、构建时校验依赖树，并加入 `[DshStartup]` 启动里程碑。数据显示，Windows ASAR 测试中从子进程启动到本地 ready URL 的中位时间由 **4.67 秒降至 1.99 秒**，降幅约 **57.4%**。  
  状态：**已关闭/已合入或不再维护**。  
  链接：<https://github.com/netease-youdao/LobsterAI/pull/3213>

- **PR #3217：修复 Windows 覆盖安装时无法停止旧进程**  
  修复因权限不足导致旧应用进程无法确认停止、进而中断更新的问题。  
  状态：**已关闭/已合入或不再维护**。  
  链接：<https://github.com/netease-youdao/LobsterAI/pull/3217>

- **PR #3218：修复 macOS Skill 缺少 lockfile 的打包问题**  
  当内置 macOS Skill 未包含 `package-lock.json` 时，在 `node_modules/.cache/lobsterai-skills/locks/<skill>` 下生成并缓存通用 lockfile，供重复构建及不同架构复用。  
  状态：**待合并**。  
  链接：<https://github.com/netease-youdao/LobsterAI/pull/3218>

- **PR #3212：新安装强制登录门禁**  
  对全新安装启用强制登录，同时保留旧版安装、访客模式及 `ui.login === 'hide'` 企业部署的现有行为。  
  状态：**已关闭/已合入或不再维护**。  
  链接：<https://github.com/netease-youdao/LobsterAI/pull/3212>

- **PR #3224：清理旧实验性 DSH 配置和无用 IPC**  
  新增一次性、非阻塞清理模块，移除旧实验性 DSH Home 中的过时 `lobsterai-*` provider route、悬空 `agent-default-model` 覆盖项和残留 writer lock。  
  状态：**已关闭/已合入或不再维护**。  
  链接：<https://github.com/netease-youdao/LobsterAI/pull/3224>

### 3.5 进展评估

今日项目主要完成了三类能力建设：

1. **会话模型重构**：向“按群、机器人、Agent、任务复用会话，同时保持执行上下文隔离”的方向演进。
2. **Cowork 专业化体验**：侧聊、上下文可视化、轮次导航、文件拖放、插件管理等功能趋于完整。
3. **桌面可靠性提升**：启动速度、连接心跳、安装覆盖、配置清理和 Skill 打包均有针对性优化。

从 17 条 PR 中 15 条已闭环来看，团队处理问题的效率较高；但由于今日没有发布 Release，这些改进对最终用户的实际可见程度仍取决于后续集成测试、版本打包与发布节奏。

---

## 4. 社区热点

### Issue #3225：账号被禁用，申请解封

- 状态：**开放**
- 评论数：**1**
- 点赞数：**0**
- 链接：<https://github.com/netease-youdao/LobsterAI/issues/3225>

这是今日唯一新增 Issue，也是社区讨论最集中条目。用户通过手机号登录 LobsterAI 桌面客户端时被提示“账号已被禁用”，欢迎页登录跳转后直接报错，无法进入应用。

用户说明，其曾通过本地反向代理调用 LobsterAI 内置模型接口，推测因此触发风控；目前已停止代理、清理本地凭据和 Token，并承诺后续仅通过官方客户端使用内置模型。

**背后诉求：**

- 恢复账号访问；
- 明确禁止与允许的本地调用边界；
- 获得可申诉、可解释的风控处理机制；
- 避免客户端缺少更具体的错误原因和自助恢复入口。

### PR #3228：共享群聊会话迁移修复

- 状态：**开放、待合并**
- 链接：<https://github.com/netease-youdao/LobsterAI/pull/3228>

该 PR 虽无公开评论和点赞数据，但直接关联 POPO、飞书等群聊迁移后的核心使用问题，重要性高于一般优化项。其目标是避免群聊历史割裂、发言人和回复目标丢失以及成员消息互相打断。

**背后诉求：**

- 群聊任务应按群而非按成员拆分；
- 升级 DSH 后不能丢失原有群聊上下文；
- 多成员连续调用机器人时需要顺序处理；
- 缺少群标识的事件应被安全忽略，而不是错误创建任务。

---

## 5. Bug 与稳定性

### 严重

#### 1. 账号被禁用导致桌面客户端无法登录
- Issue：<https://github.com/netease-youdao/LobsterAI/issues/3225>
- **影响**：用户无法进入应用，核心功能完全不可用。
- **状态**：开放，尚无公开 fix PR。
- **备注**：该问题更偏账号风控与服务端策略，而非普通客户端崩溃，但用户影响严重。

### 高

#### 2. Windows 首次覆盖安装可能因无法停止旧进程而中止
- PR：<https://github.com/netease-youdao/LobsterAI/pull/3217>
- **影响**：更新失败，旧版本无法被替换。
- **修复状态**：已有修复 PR，当前已关闭/合入或不再维护。

#### 3. DSH 迁移后共享群聊会话割裂、串话或错误建任务
- PR：<https://github.com/netease-youdao/LobsterAI/pull/3228>
- **影响**：群聊历史丢失、成员上下文混淆、机器人回复被其他成员消息打断。
- **修复状态**：已有修复 PR，但**仍待合并**。

#### 4. 钉钉 iOS 私聊卡片正文为空
- PR：<https://github.com/netease-youdao/LobsterAI/pull/3211>
- **影响**：机器人虽然投递了卡片，但用户无法读取回答内容。
- **修复状态**：已有修复 PR，当前已关闭/合入或不再维护；补充了私聊、群聊、重试与重复投递测试。

### 中

#### 5. DSH 冷启动连接慢或桌面网关意外断连
- PR：<https://github.com/netease-youdao/LobsterAI/pull/3213>
- PR：<https://github.com/netease-youdao/LobsterAI/pull/3227>
- **影响**：启动等待时间增加，短时卡顿可能导致活跃连接中断。
- **修复状态**：均已有处理；冷启动中位耗时由 4.67 秒降至 1.99 秒，网关心跳调整为 10 秒。

#### 6. Electron profile 热重载失效
- PR：<https://github.com/netease-youdao/LobsterAI/pull/3227>
- **影响**：开发与配置热更新不稳定，可能导致本地调试反复重启。
- **修复状态**：已有修复。

#### 7. Cowork 模型选择器被裁切、自动压缩轮次拆分、图片编辑状态及 IM 超时
- PR：<https://github.com/netease-youdao/LobsterAI/pull/3214>
- **影响**：影响会话操作、上下文连续性和图片处理反馈。
- **修复状态**：已有集中修复。

### 低

#### 8. macOS Skill 缺少 `package-lock.json` 影响打包一致性
- PR：<https://github.com/netease-youdao/LobsterAI/pull/3218>
- **影响**：可能造成依赖解析不一致、重复构建效率下降。
- **修复状态**：已有修复 PR，**仍待合并**。

#### 9. 遗留 DSH 配置及 writer lock 造成配置污染
- PR：<https://github.com/netease-youdao/LobsterAI/pull/3224>
- **影响**：升级后残留 provider route、默认模型覆盖和锁文件，可能触发异常配置。
- **修复状态**：已有一次性清理方案。

---

## 6. 功能请求与路线图信号

### 6.1 群聊任务与多渠道会话统一

来自 PR #3228 的需求信号表明，DSH 后续路线重点是：

- 以群、机器人、专家、话题为稳定边界管理任务；
- 保留迁移前的历史会话；
- 保留成员、回复目标及消息顺序；
- 对缺失群标识的事件采取保守策略。

该方向很可能进入下一轮 DSH/IM 集成版本，但当前 PR 尚未合并。  
链接：<https://github.com/netease-youdao/LobsterAI/pull/3228>

### 6.2 Cowork 多标签侧聊和会话分支

PR #3221 将 `/btw`、文本引用、多标签和原生 fork 统一到 Artifact 侧栏，说明 Cowork 正从单会话工具向多任务、多分支工作台演进。  
链接：<https://github.com/netease-youdao/LobsterAI/pull/3221>

### 6.3 上下文透明化、内存保护和文件输入

PR #3220 同时引入上下文用量拆解、实时投影、页面文件拖放和 DSH memory guard，反映下一阶段可能继续强化：

- 长会话上下文可视化；
- Token 与内存风险预警；
- 网页/文件作为一等输入；
- 大规模会话下的稳定性保护。

链接：<https://github.com/netease-youdao/LobsterAI/pull/3220>

### 6.4 定时任务会话生命周期管理

PR #3226 将同一 Agent 的同一定时任务聚合到一个会话，同时保持每次运行上下文独立，体现出产品正在完善定时自动化与历史可读性之间的平衡。  
链接：<https://github.com/netease-youdao/LobsterAI/pull/3226>

### 6.5 插件管理与生态体验

PR #3225 增加侧边栏插件排序、溢出菜单以及首页/Companion UI 优化，表明插件生态正在进入更产品化的阶段。  
链接：<https://github.com/netease-youdao/LobsterAI/pull/3215>

### 6.6 账号申诉与风控自助能力

Issue #3225 虽然不是传统功能请求，但释放出明确产品诉求：客户端应提供更清晰的封禁原因、申诉入口、官方 API 使用规范和风险操作提示。该能力虽无对应 PR，但值得列入账号与服务治理路线。  
链接：<https://github.com/netease-youdao/LobsterAI/issues/3225>

---

## 7. 用户反馈摘要

今日 Issue 数据仅有一条，因而反馈样本较少，但用户痛点非常明确：

- **核心痛点：账号被禁用后无法使用客户端。** 用户无法进入应用，影响所有 AI 助手与内置模型能力。
- **真实使用场景：个人本地工具集成。** 用户希望通过反向代理调用内置模型，以接入自己的本地工作流；这说明部分用户对“可编程调用”存在明确需求。
- **风险认知不足：** 用户可能不了解内置接口被本地代理后可能触发账号风控，说明官方边界说明和客户端提示仍有缺口。
- **整改意愿积极：** 用户已停止代理、清除凭据和 Token，并承诺只使用官方客户端，具备恢复账号的申诉基础。
- **当前满意度信号有限：** Issue 没有点赞或更多评论，无法据此判断广泛满意或不满意；但账号封禁本身就是高严重度的负向体验。
- **功能层面的间接反馈：** IM 群聊、钉钉卡片、模型选择器、上下文管理和定时任务等 PR，反映当前用户反馈重点已从“基础可用性”转向“跨渠道协作、会话连续性与操作透明度”。

---

## 8. 待处理积压

### 1. PR #3228：共享群聊会话迁移修复仍待合并
- 重要性：高。直接涉及 DSH 迁移后的群聊历史保留、成员隔离和消息顺序。
- 风险：若延期合入，POPO、飞书等群聊环境可能继续出现上下文割裂或串话。
- 建议：优先完成代码评审、迁移回归测试和多渠道联调，重点验证旧会话迁移及群标识缺失场景。
- 链接：<https://github.com/netease-youdao/LobsterAI/pull/3228>

### 2. PR #3218：macOS Skill lockfile 缓存修复仍待合并
- 重要性：中高。关系到 macOS 构建可复现性和跨架构打包稳定性。
- 风险：未合入前，缺少 `package-lock.json` 的内置 Skill 仍可能造成依赖漂移或重复生成开销。
- 建议：验证 Intel/Apple Silicon、重复构建及缓存失效场景后尽快合入。
- 链接：<https://github.com/netease-youdao/LobsterAI/pull/3218>

### 3. Issue #3225：账号封禁申诉仍开放
- 重要性：高。虽然仅创建 1 天，不属于长期未响应 Issue，但当前唯一开放 Issue，直接阻断用户使用。
- 建议：维护者应尽快核实风控原因、确认是否存在违规接口代理行为，并给出解封结果或明确申诉路径；同时评估客户端错误提示和官方使用边界的改进。
- 链接：<https://github.com/netease-youdao/LobsterAI/issues/3225>

### 积压判断

当前数据中没有可确认的“长期未响应”Issue；仅能确认 **2 条待合并 PR 和 1 条开放 Issue**。积压规模较小，但 #3228 与账号申诉均属于高影响事项，应作为近期优先处理项。整体项目积压风险目前为**低至中等**。

---

## 结论

LobsterAI 今日呈现 **高开发活跃度、快速闭环、发布节奏偏慢** 的状态。DSH、Cowork 和 IM 集成正在快速成熟，会话连续性、上下文治理、桌面性能和渠道稳定性均有系统性改善；其中 DSH 冷启动中位耗时下降约 **57.4%**，是最明确的可量化进展。

下一阶段应重点关注：

1. 完成 PR #3228 和 #3218 的合入；
2. 尽快处理账号封禁申诉及风控说明；
3. 对 DSH 群聊迁移、Windows 覆盖安装、钉钉卡片投递开展发布前回归；
4. 尽快发布包含今日修复的新版本，以便用户验证会话迁移、启动性能和安装体验改进。

</details>

<details>
<summary><strong>QwenPaw</strong> — <a href="https://github.com/agentscope-ai/QwenPaw">agentscope-ai/QwenPaw</a></summary>

# QwenPaw 项目动态日报

**日期：2026-11-27**  
**项目：** [agentscope-ai/QwenPaw](https://github.com/agentscope-ai/QwenPaw)

---

## 1. 今日速览

过去 24 小时项目保持较高活跃度，共更新 **19 条 Issues** 和 **35 条 PR**，其中仍有 **10 条 Issue 未关闭、24 条 PR 待合并**。今日没有发布新版本，但开发重点集中在 **Console 体验、工具调用稳定性、模型与媒体处理、Relay 恢复机制以及 Creator 插件健壮性**。当天更新的 PR 中，至少 **11 条已合并或关闭**，说明多条问题已从讨论进入修复或收尾阶段。与此同时，仍有较多积压任务和跨平台、状态同步类缺陷待处理，整体健康度可评为 **中高活跃、修复持续，但尚未进入全面稳定发布阶段**。

---

## 2. 版本发布

过去 24 小时 **无新版本发布**，因此暂无对应的升级说明、破坏性变更或迁移要求。

当前社区反馈主要基于 `2.3.0.post1`、`2.3.1b2` 及 `main` 分支，说明主干开发较活跃，但用户仍在使用和验证多个近期版本。

---

## 3. 项目进展

### 3.1 Relay 恢复与资源清理链路继续完善

- [PR #8950](https://github.com/agentscope-ai/QwenPaw/pull/8950) 已关闭，尝试修复 **Platform 绑定和 Console 帧恢复**，并针对 Windows/Python 3.11 下版本化 Console 资源背压测试收不到帧的问题，调整了等待与流结束判断逻辑。
- [PR #8952](https://github.com/agentscope-ai/QwenPaw/pull/8952) 仍在评审中，进一步处理 Relay 的**中断恢复与关闭流程**，包括按用户隔离 Hub 恢复和清理、限制等待时间，以及在关闭 HTTP 客户端前解除复用关系。

**推进价值：** Relay 从“异常后能够恢复”继续向“可隔离恢复、可可靠清理”的工程化方向完善，降低单个用户异常影响其他会话的概率。

### 3.2 Console 会话历史、导航与确认交互进入集中改造

- [PR #8532](https://github.com/agentscope-ai/QwenPaw/pull/8532) 已关闭，主要工作覆盖 **append-only 会话存储、分页历史、Turn 级 fork 和运行中 steering**。这为 Console 后续恢复完整聊天时间线提供了底层基础。
- [PR #8951](https://github.com/agentscope-ai/QwenPaw/pull/8951) 仍在评审中，修复迁移后的用户消息导航去重、历史跳转完整性，以及用户纠正消息中持久化与实时 steering 时间戳显示。
- [PR #8859](https://github.com/agentscope-ai/QwenPaw/pull/8859) 仍在评审中，统一改进 Console 的确认弹窗、审批卡片和破坏性操作，强调明确展示授权对象，并修复过早显示成功、状态陈旧和上下文丢失。
- [PR #8719](https://github.com/agentscope-ai/QwenPaw/pull/8719) 仍在评审中，为 Console 和 API 增加运行时 `QWENPAW_BASE_PATH`，支持部署在反向代理子路径下。

**推进价值：** Console 正从单一聊天视图向具备**可恢复历史、消息分叉、运行中干预、统一审批和可部署性**的成熟控制台演进。

### 3.3 工具调用循环保护得到实质修复

- [PR #8713](https://github.com/agentscope-ai/QwenPaw/pull/8713) 已关闭，用于记录一次回复中追加的每一次工具调用，使此前无法触发的 doom-loop gate 能够识别重复调用。
- 对应问题 [Issue #8712](https://github.com/agentscope-ai/QwenPaw/issues/8712) 已关闭，报告曾出现同一 Bash 调用被批准 **14 次**的情况。

**推进价值：** 这是今日较明确的安全稳定性改进，可降低重复工具调用、重复执行命令和资源浪费风险。

### 3.4 Windows 插件安装测试适配完成

- [PR #8942](https://github.com/agentscope-ai/QwenPaw/pull/8942) 已关闭，使插件安装锁与 provisioning 相关测试在 Windows 上通过，处理了符号链接权限、5 秒超时预算和 venv launcher PID 等 Linux CI 未覆盖的问题。
- 对应 [Issue #8941](https://github.com/agentscope-ai/QwenPaw/issues/8941) 已关闭。

**推进价值：** 提升 Windows 开发和 CI 稳定性，降低“Linux 正常、Windows 失败”的跨平台质量缺口。

### 3.5 Creator 与视频记忆模块集中补强

今日多条 Creator 相关 PR 正在处理输入校验和边界条件：

- [PR #8917](https://github.com/agentscope-ai/QwenPaw/pull/8917)：扫描并提取最长有效 JSON，避免尾部杂散括号导致解析失败或错误返回默认结果。
- [PR #8915](https://github.com/agentscope-ai/QwenPaw/pull/8915)：在结构化输出中验证候选 JSON 是否平衡，避免前置说明文字或无效片段干扰提取。
- [PR #8933](https://github.com/agentscope-ai/QwenPaw/pull/8933)：修复视频记忆根主题类型和空值处理问题。
- [PR #8932](https://github.com/agentscope-ai/QwenPaw/pull/8932)：限制折叠后的短尾片段不得超过最大场景时长。
- [PR #8905](https://github.com/agentscope-ai/QwenPaw/pull/8905)：按照 RFC 6901 严格校验 JSON Pointer 数组索引，防止写入错误元素。
- [PR #8911](https://github.com/agentscope-ai/QwenPaw/pull/8911)：补齐 `allOf` 字符串约束识别。
- [PR #8909](https://github.com/agentscope-ai/QwenPaw/pull/8909)：过滤 Web Grounding 列表中的 `null` 项。
- [PR #8907](https://github.com/agentscope-ai/QwenPaw/pull/8907)：响应文本提取时跳过空文本块。

**推进价值：** 这些修复以小而集中的方式提升 Creator 的数据解析、内容处理和文件修改安全性，属于典型的发布前质量收敛。

### 3.6 模型请求与视频回退持续优化

- [PR #8920](https://github.com/agentscope-ai/QwenPaw/pull/8920) 仍在评审中，针对历史 `view_video` 结果被重新带入后续模型请求、并导致 provider 返回通用 400 的情况，增加一次**移除媒体内容后重试**的机制。
- [PR #8928](https://github.com/agentscope-ai/QwenPaw/pull/8928) 仍在评审中，允许自定义 provider 的模型被配置为 decision model，并扩展 endpoint 解析与设置界面能力。

---

## 4. 社区热点

### 4.1 评论最活跃：Console Markdown 表格溢出

- [Issue #8845](https://github.com/agentscope-ai/QwenPaw/issues/8845) — **4 条评论、1 个赞**
- 问题：助手消息中的 Markdown 表格超出消息气泡，既无横向滚动，也会使右侧列不可见。
- 社区诉求：Markdown 内容不能因渲染宽度而丢失可读性；宽表格至少应可横向滚动，或采用自适应布局。

这是当前已展示条目中最受关注的问题，用户反馈直接指向 Console 的高可读性要求。

### 4.2 设计讨论热度最高：长期记忆的引用计数与衰减

- [Issue #8882](https://github.com/agentscope-ai/QwenPaw/issues/8882) — **3 条评论**
- 问题：长期记忆条目没有 TTL、引用追踪或衰减机制，导致“重要信息被遗忘”和陈旧记忆堆积同时发生。
- 社区诉求：以**状态变化和引用关系**代替简单删除，建立可解释、可回收的长期记忆生命周期。

该议题直接关系到项目“Never forgets”的核心承诺，优先级应高于一般体验优化。

### 4.3 实际生产型痛点：渠道内无法切换会话钉住模型

- [Issue #8725](https://github.com/agentscope-ai/QwenPaw/issues/8725) — **1 条评论**
- 问题：在飞书、钉钉等渠道执行 `/model <provider>:<model>` 后，界面提示成功，但当前会话仍使用此前钉住的模型。
- 用户影响：钉住的模型一旦故障，整个会话无法自救，只能脱离渠道处理。

这是典型的“命令反馈成功但业务状态未生效”问题，严重影响故障恢复能力。

### 4.4 新功能提案：接入 WebRouter 搜索提供商

- [Issue #8947](https://github.com/agentscope-ai/QwenPaw/issues/8947) — **1 条评论**
- 提议：在 Tavily、AnySearch、Firecrawl 之外增加 WebRouter，作为第四个 `web_search` provider。
- 社区诉求：通过统一接口聚合多个搜索 API，降低供应商切换和集成成本。

目前仍处于提案阶段，但已有开源维护者参与，具备明确的接入路径。

### 4.5 大型 PR 持续吸引评审资源

以下 PR 虽未显示评论数，但均属于今日更新的重点大型变更：

- [PR #8719](https://github.com/agentscope-ai/QwenPaw/pull/8719) — Console/API 子路径部署
- [PR #8859](https://github.com/agentscope-ai/QwenPaw/pull/8859) — Console 确认与审批交互统一
- [PR #8649](https://github.com/agentscope-ai/QwenPaw/pull/8649) — llama.cpp GPU 控制和运行时自动更新
- [PR #8532](https://github.com/agentscope-ai/QwenPaw/pull/8532) — 会话存储、分页历史、Turn fork 与 steering

这些变更对架构和用户工作流影响较大，评审成本明显高于小型修复。

---

## 5. Bug 与稳定性

### 严重级别：高

#### 5.1 Console 任务状态不持续更新

- [Issue #8949](https://github.com/agentscope-ai/QwenPaw/issues/8949)
- `2.3.0-post1` 中后端任务继续执行，但前端可能长期停留在转圈、提前结束或刷新后才显示真实结果。
- **已有明确修复 PR：暂无直接对应项**；[PR #8951](https://github.com/agentscope-ai/QwenPaw/pull/8951)涉及聊天导航与 steering 时间戳，方向相关，但摘要未表明完整修复该任务状态同步问题。

#### 5.2 渠道内模型切换成功但状态未生效

- [Issue #8725](https://github.com/agentscope-ai/QwenPaw/issues/8725)
- 会话级模型被钉住后，渠道内 `/model` 无法解除或切换；模型故障时缺少自助恢复路径。
- **已有明确修复 PR：暂无。**

#### 5.3 工具调用预算被重复计数

- [Issue #8943](https://github.com/agentscope-ai/QwenPaw/pull/8943)
- `ToolCallBudgetGate` 在同一回复的每次迭代中重复统计早先工具调用，配置为 N 次时可能约在 `√(2N)` 次调用后提前终止。
- **已有明确修复 PR：暂无直接对应项**；PR 列表中未见明确针对该预算计数逻辑的修复。

#### 5.4 代码模式下 `run_tool_batch` 调用失败

- [Issue #8903](https://github.com/agentscope-ai/QwenPaw/issues/8903)
- 代码模式将工具封装为 `CodeModeToolkit`，但执行脚本调用工具时发生失败。
- **已有明确修复 PR：暂无直接对应项。**

### 严重级别：中高

#### 5.5 Windows 残留 `llama-server.exe` 进程

- [Issue #8830](https://github.com/agentscope-ai/QwenPaw/issues/8830)
- 后端异常退出或强制重启后，Windows 上的 llama-server 进程未终止，反复启动会持续累积并耗尽内存，最终阻止本地模型启动。
- 影响：本地模型不可用、内存压力和进程泄漏。
- **已有明确修复 PR：未见直接对应项。**
- 状态：该 Issue 已关闭，关闭原因在摘要中未体现，需维护者补充关联提交。

#### 5.6 工具调用 doom-loop gate 未生效

- [Issue #8712](https://github.com/agentscope-ai/QwenPaw/issues/8712)
- 同一 Bash 调用可连续获批 14 次，默认 doom-loop gate 未正确触发。
- **已有修复 PR：[PR #8713](https://github.com/agentscope-ai/QwenPaw/pull/8713)**，且 Issue、PR 均已关闭。

#### 5.7 模型错误分类阻止 fallback

- [Issue #8776](https://github.com/agentscope-ai/QwenPaw/issues/8776)
- 主模型额度耗尽时，部分 provider 返回 HTTP 400 + quota exceeded，被错误归类为不可 fallback，最终表现为 Internal error。
- **已有明确修复 PR：摘要中未见直接对应项。**
- 状态：Issue 已关闭，建议确认修复是否落在其他提交中。

#### 5.8 多模态能力声明与运行时行为不一致

- [Issue #8093](https://github.com/agentscope-ai/QwenPaw/issues/8093)
- 模型目录或探测结果显示支持多模态，但运行时仍阻止图像输入。
- **已有明确修复 PR：未见直接对应项。**
- 状态：Issue 已关闭，需确认能力探测与运行时门控是否已统一。

### 严重级别：中

#### 5.9 Feishu 表格卡片误解析代码块

- [Issue #8945](https://github.com/agentscope-ai/QwenPaw/issues/8945)
- 以 `|` 开头的代码块内容会被 Feishu 交互卡片误判为表格，并可能错误生成标题。
- **已有明确修复 PR：暂无直接对应项。**

#### 5.10 Markdown 删除线误吞数字区间中的 `~`

- [Issue #8948](https://github.com/agentscope-ai/QwenPaw/issues/8948)
- 单个 `~` 被当作删除线定界符，`600~1500 t/s`、`64~128G` 等表达会被删除线化，并吞掉波浪号。
- **已有明确修复 PR：暂无直接对应项。**

#### 5.11 Console Markdown 表格溢出

- [Issue #8845](https://github.com/agentscope-ai/QwenPaw/issues/8845)
- 宽表格内容不可见且无法横向滚动。
- **已有明确修复 PR：暂无直接对应项。**

#### 5.12 Feishu 合法非对象 JSON 触发 AttributeError

- [Issue #8912](https://github.com/agentscope-ai/QwenPaw/issues/8912)
- `extract_json_key()` 假设 JSON 顶层一定是对象，合法数组、字符串或数字会触发异常。
- **已有明确修复 PR：摘要中未见直接对应项。**
- 状态：Issue 已关闭。

#### 5.13 本地模型列表推荐不存在的下载命令

- [Issue #8872](https://github.com/agentscope-ai/QwenPaw/issues/8872)
- 本地模型管理拆分为插件后，旧 `download` 等 CLI 命令已注销，但列表仍提示用户执行这些命令。
- **已有明确修复 PR：暂无直接对应项。**
- 状态：Issue 已关闭。

### 严重级别：中低或以功能一致性为主

#### 5.14 cron Token 用量未写入 `turns.jsonl`

- [Issue #8705](https://github.com/agentscope-ai/QwenPaw/issues/8705)
- cron 消耗没有进入用量面板的数据源，导致统计不完整。
- **已有明确修复 PR：未见直接对应项。**
- 状态：Issue 已关闭。

#### 5.15 压缩归档的历史轮次无入口

- [Issue #8744](https://github.com/agentscope-ai/QwenPaw/issues/8744)
- 上下文压缩后，早期原始对话不可在 Console 查看，用户容易误判为历史丢失。
- **已有相关 PR：[PR #8532](https://github.com/agentscope-ai/QwenPaw/pull/8532)** 已实现分页历史和持久化会话时间线，但该 PR 已关闭，需确认其后续分支、提交或替代 PR 的落地状态。

---

## 6. 功能请求与路线图信号

### 6.1 长期记忆生命周期管理：最明确的核心路线信号

- [Issue #8882](https://github.com/agentscope-ai/QwenPaw/issues/8882)
- 请求以引用计数、状态变化、TTL 和衰减机制管理长期记忆，而非直接删除。
- 判断：这是对项目核心承诺“Never forgets”的结构性补全，且已有较多讨论，**很可能进入下一轮核心架构迭代**。

### 6.2 WebRouter 成为第四个 Web Search Provider

- [Issue #8947](https://github.com/agentscope-ai/QwenPaw/issues/8947)
- 判断：提案具体、已有维护者背景，实施成本相对可控，**适合纳入下一版本的 provider 扩展批次**。

### 6.3 Console Composer 向富文本编辑器迁移

- [Issue #8938](https://github.com/agentscope-ai/QwenPaw/issues/8938)
- 用户询问是否计划从原生 `<textarea>` 迁移到 Lexical 等富文本编辑器，并重做引用回复交互。
- 判断：属于路线图问询，短期直接迁移概率较低；更可能先通过现有交互 PR 改善引用和 steering，再单独规划富文本编辑器。

### 6.4 会话历史归档入口与会话时间线

- [Issue #8744](https://github.com/agentscope-ai/QwenPaw/issues/8744)
- [PR #8532](https://github.com/agentscope-ai/QwenPaw/pull/8532)
- 判断：需求已获得架构级实现支撑，**应优先确认落地状态**，其价值高于继续增加零散 Console 渲染修复。

### 6.5 本地模型 GPU 控制与运行时自动更新

- [PR #8649](https://github.com/agentscope-ai/QwenPaw/pull/8649)
- 后续还有 managed MLX 和 Console 控制相关 PR，形成明确的堆叠式路线。
- 判断：这是本地模型运行体验的重要增强，**下一版本候选特征明显**，但需关注合并顺序和桌面平台覆盖。

### 6.6 Linux 桌面安装包

- [PR #8444](https://github.com/agentscope-ai/QwenPaw/pull/8444)
- 增加 Linux deb 和 AppImage 打包。
- 状态：PR 已关闭，需确认是已合并、被替代，还是评审后撤回。
- 判断：若功能已完成合并，**很可能进入下一版桌面发行清单**。

---

## 7. 用户反馈摘要

### 真实使用场景

1. **企业消息渠道作为主要工作入口**  
   用户在飞书、钉钉等渠道中固定使用模型和定时任务，一旦渠道内无法切换故障模型，会直接中断工作流。参见 [Issue #8725](https://github.com/agentscope-ai/QwenPaw/issues/8725)。

2. **Windows 本地模型长期运行**  
   用户依赖本地 llama.cpp 后端，且会在调试、崩溃和重启中反复启动；残留进程导致内存耗尽和模型无法启动。参见 [Issue #8830](https://github.com/agentscope-ai/QwenPaw/issues/8830)。

3. **长上下文任务与多轮对话**  
   用户需要在上下文压缩后查看早期历史，也会依赖长期记忆保存重要偏好；当前“记忆过期”和“归档不可见”共同削弱了连续使用体验。参见 [Issue #8882](https://github.com/agentscope-ai/QwenPaw/issues/8882)、[Issue #8744](https://github.com/agentscope-ai/QwenPaw/issues/8744)。

4. **高频 Markdown 和技术内容输出**  
   表格、性能数字范围、代码块等是实际回复中的常见形式，但当前 Console 会造成表格截断、`~` 被吞和飞书卡片误解析。参见 [Issue #8845](https://github.com/agentscope-ai/QwenPaw/issues/8845)、[Issue #8948](https://github.com/agentscope-ai/QwenPaw/issues/8948)、[Issue #8945](https://github.com/agentscope-ai/QwenPaw/issues/8945)。

### 用户满意点

- 后端任务在部分情况下仍能正常完成，问题主要集中于**前端状态呈现**；说明任务执行基础能力尚可。参见 [Issue #8949](https://github.com/agentscope-ai/QwenPaw/issues/8949)。
- 原始消息持久化内容通常是完整的，Console 的 `~` 问题主要发生在前端 Markdown 渲染层。参见 [Issue #8948](https://github.com/agentscope-ai/QwenPaw/issues/8948)。
- 社区愿意提供复现环境、Windows/Python 版本、日志和截图，说明问题反馈质量较高，有利于维护者定位。

### 主要不满意点

- “提示成功但状态未改变”，破坏用户对系统反馈可信度的信任。
- Console 前端状态与后端真实执行状态存在脱节。
- 历史记录、长期记忆和上下文压缩缺少统一且可访问的管理视图。
- 多种内容渲染器对 Markdown 的处理不一致。
- Windows 和渠道环境仍是跨平台质量短板。

---

## 8. 待处理积压

### 8.1 长期存在且影响核心可靠性的 Issues

1. [Issue #8725](https://github.com/agentscope-ai/QwenPaw/issues/8725) — 渠道内无法切换会话钉住模型  
   - 创建于 2026-11-13，已积压约两周。  
   - 缺少直接修复 PR，且模型故障时没有自助恢复路径。

2. [Issue #8093](https://github.com/agentscope-ai/QwenPaw/issues/8093) — 多模态能力声明与运行时不一致  
   - 创建于 2026-10-03，积压近两个月。  
   - 虽已关闭，但应确认是否真正完成能力探测、catalog 与运行时门控的统一。

3. [Issue #8882](https://github.com/agentscope-ai/QwenPaw/issues/8882) — 长期记忆缺少引用追踪和衰减  
   - 直接关联“Never forgets”承诺。  
   - 尚无明确实现 PR，应尽快拆分为可交付任务。

4. [Issue #8705](https://github.com/agentscope-ai/QwenPaw/issues/8705) — cron Token 用量统计缺失  
   - 影响账单与用量归因完整性。  
   - Issue 已关闭但未见直接关联 PR，需确认统计链路是否已覆盖 cron。

5. [Issue #8744](https://github.com/agentscope-ai/QwenPaw/issues/8744) — 压缩归档历史不可查看  
   - 与 [PR #8532](https://github.com/agentscope-ai/QwenPaw/pull/8532) 高度相关，但相关 PR 已关闭。  
   - 应明确替代 PR、提交哈希及是否进入发布版本。

### 8.2 当前仍待合并但规模较大的 PR

- [PR #8719](https://github.com/agentscope-ai/QwenPaw/pull/8719) — Console/API base-path 部署
- [PR #8859](https://github.com/agentscope-ai/QwenPaw/pull/8859) — Console 审批与确认交互
- [PR #8649](https://github.com/agentscope-ai/QwenPaw/pull/8649) — llama.cpp GPU 与自动更新
- [PR #8532](https://github.com/agentscope-ai/QwenPaw/pull/8532) — 持久化会话与 Turn fork

这些 PR 的共同特点是影响面较大，建议避免长期停留在评审状态，应明确拆分、合并顺序和负责人。

### 8.3 需要补充闭环或替代 PR 的已关闭问题

以下 Issue 已关闭，但当前摘要中没有明确列出对应修复 PR，建议维护者补充关联提交或说明关闭原因：

- [Issue #8776](https://github.com/agentscope-ai/QwenPaw/issues/8776) — quota 错误分类导致 fallback 失效
- [Issue #8912](https://github.com/agentscope-ai/QwenPaw/issues/8912) — Feishu 非对象 JSON 崩溃
- [Issue #8872](https://github.com/agentscope-ai/QwenPaw/issues/8872) — 本地模型列表提示无效命令
- [Issue #8830](https://github.com/agentscope-ai/QwenPaw/issues/8830) — Windows llama-server 进程泄漏

---

## 总体健康度判断

**活跃度：高。** 24 小时内 54 条 Issue/PR 更新，且 PR 数量明显高于 Issue，表明项目仍处于密集开发阶段。

**修复吞吐：较高。** 展示的 20 条热门 PR 中已有 11 条处于合并或关闭状态，涵盖 doom-loop、Relay 恢复、Windows 测试和 Creator 数据处理等多个方向。

**稳定性：中等。** 核心执行链路总体可用，但 Console 状态同步、渠道模型切换、工具预算计数、长期记忆和跨平台进程清理仍存在明显缺口。

**发布准备度：尚未完全就绪。** 今日无发布，但大量待合并 PR、新功能堆叠和关键缺陷未闭环，建议下一版本发布前优先处理：

1. Console 任务状态与历史一致性；
2. 渠道模型切换和模型 fallback；
3. 工具调用预算与循环保护；
4. Windows 本地模型进程生命周期；
5. 长期记忆归档、衰减与可访问性；
6. 合并状态的核对，避免“Issue 已关闭但缺少可追溯修复 PR”。

**综合评级：中高健康度。** 项目推进速度较快、工程覆盖面广，但稳定性债务和大型 PR 积压正在累积，需要提高合并与发布收敛节奏。

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/NousResearch/hermes-agent">NousResearch/hermes-agent</a></summary>

# Hermes Agent 项目动态日报  
**统计日期：2026-11-27**  
**数据范围：过去 24 小时**  
**仓库：** [NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent)

---

## 1. 今日速览

过去 24 小时共更新 **50 条 Issues** 和 **50 条 PR**，其中 Issues 有 **48 条仍开放、2 条关闭**，PR 有 **44 条待合并、6 条已合并或关闭**。项目保持高强度开发，议题覆盖 Gateway、Cron、Desktop、插件、安全隔离、上下文压缩和多平台适配等核心方向。  
今日没有发布新版本，但有 **6 条 PR 完成合并/关闭**，主要集中在稳定性、备份可靠性、Gateway 队列和执行边界修复。整体健康度可评为 **活跃但积压偏高**：修复与重构并行推进，然而 44 条待合并 PR 也意味着评审、回归测试和发布节奏面临压力。

---

## 2. 版本发布

**今日无新版本发布。**

当前没有可报告的 Release，因此暂无新增版本的破坏性变更或官方迁移说明。不过，PR 队列中已出现两个较明显的模块化方向：

- [PR #159651：Feishu / Lark 从核心迁出为官方插件](https://github.com/NousResearch/hermes-agent/pull/159651)
- [PR #159640：QQ Bot 从核心迁出为官方插件](https://github.com/NousResearch/hermes-agent/pull/159640)

这两项变更涉及核心架构、插件默认安装和迁移流程，若进入正式版本，应重点关注旧配置的自动迁移、插件启用方式以及升级回滚策略。

---

## 3. 项目进展

今日没有提供具体 PR 的合并时间、提交记录或关闭原因，因此以下依据“已合并/关闭”状态与 PR 描述归纳，不代表全部均为今日实际合并。

### 3.1 备份与快照持久化修复

- [PR #157086：fix(backup): fsync archives and snapshots before publishing them](https://github.com/NousResearch/hermes-agent/pull/157086)  
  **状态：CLOSED**  
  该 PR 针对完整 ZIP 备份、Profile/Kanban 导出和快速快照在发布前未执行 `fsync` 的问题。修复目标是在重命名发布前确保归档内容真正落盘，避免断电或崩溃后出现“备份完成”但文件尾部损坏、成员缺失或中央目录异常。  
  **推进价值：** 直接提升备份和恢复链路的数据完整性，是桌面端及 CLI 用户可感知的重要可靠性改进。

### 3.2 Cron 脚本读取与 Gateway 孤儿清理拆分

- [PR #160379：fix(cron,gateway): isolate script reads and bound orphan sweep waits](https://github.com/NousResearch/hermes-agent/pull/160379)  
  **状态：CLOSED**  
  该 PR 将 Cron 引用脚本的原始读取隔离，并限制 Gateway 孤儿清理的等待时间，解决阻塞脚本读取长期占用 SQLite 生命周期锁、进而拖住异步委派完成通知和模式通知的问题。
- [PR #160694：fix(cron): isolate referenced script reads in a subprocess](https://github.com/NousResearch/hermes-agent/pull/160694)  
  **状态：OPEN**  
  进一步将引用脚本读取放入子进程，确保 Gateway 主进程不会因慢脚本持有 SQLite 注册表锁或文件锁；工作线程失败时采用 fail-closed 策略。
- [PR #160696：fix(gateway): bound orphan sweep waits](https://github.com/NousResearch/hermes-agent/pull/160696)  
  **状态：OPEN**  
  将孤儿任务清理的等待时间限制在 1 秒内，并保持持久化完成项继续排队，避免单个清理动作阻塞整个 Gateway。

**推进价值：** 这组修复把“慢脚本读取—SQLite 锁竞争—Gateway 事件循环阻塞”拆成了两个独立防护层，是今日最明确的稳定性推进之一。

### 3.3 Gateway 会话策略修复

- [PR #160689：fix(gateway): keep built-in toolsets that share an MCP server key](https://github.com/NousResearch/hermes-agent/pull/160689)  
  **状态：OPEN**  
  修复禁用或未启用 MCP Server 与内置工具集重名时，内置工具集被意外移除的问题。尤其当 `mcp_servers.memory` 存在但被禁用时，Desktop 和 `hermes -z` 会话可能失去内置 `memory` 工具。  
  **推进价值：** 防止工具配置刷新时发生名称空间冲突，属于 Gateway 会话策略的重要兼容性修复。

### 3.4 Desktop 会话导航体验

- [PR #160686：Desktop: Go to last session flips back to the chat you just left](https://github.com/NousResearch/hermes-agent/pull/160686)  
  **状态：OPEN**  
  为 Desktop 增加“返回上一个会话”语义，解决 `Ctrl+Tab`、`Ctrl+1…9` 按最近活动排序，在多会话并行时无法准确返回刚刚离开的聊天的问题。  
  **推进价值：** 改善多会话、多代理工作流中的导航确定性。

### 3.5 模型轮询结果与 MLX 兼容

- [PR #160693：fix(gateway): include terminal turn details when polling runs](https://github.com/NousResearch/hermes-agent/pull/160693)  
  **状态：OPEN**  
  当一轮执行达到迭代上限并返回交接消息时，轮询接口现在同时保留终止标记和退出原因，客户端可区分正常交接与提供商失败。
- [PR #160690：fix(auxiliary): retry title generation without unsupported MLX schema](https://github.com/NousResearch/hermes-agent/pull/160690)  
  **状态：OPEN**  
  MLX-VLM 在推测解码时遇到结构化响应格式会返回 HTTP 500。该 PR 识别能力拒绝并以无 schema 请求重试，修复会话标题生成失败。

### 3.6 插件和目录生态扩展

- [PR #160697：SessionCrew 更新至 0.4.0](https://github.com/NousResearch/hermes-agent/pull/160697)
- [PR #160695：taskwatch 更新至 0.2.2](https://github.com/NousResearch/hermes-agent/pull/160695)
- [PR #160688：新增 fresh-context 插件目录项](https://github.com/NousResearch/hermes-agent/pull/160688)
- [PR #160687：新增 straitly 提供商插件目录项](https://github.com/NousResearch/hermes-agent/pull/160687)

这些 PR 显示插件目录正在向会话管理、上下文策略和模型提供商扩展。

### 3.7 整体进展判断

今日推进主要体现为：

1. **Gateway 与 Cron 的锁竞争和阻塞问题被系统性拆分处理；**
2. **备份、工具集策略和模型兼容性得到针对性修复；**
3. **Desktop 会话导航进一步精细化；**
4. **平台功能继续插件化，核心与社区生态边界进一步调整。**

按 PR 状态看，项目功能与修复产出活跃，但多数仍处于待合并阶段，尚未形成新的正式版本交付。

---

## 4. 社区热点

### 4.1 讨论最活跃的 Issues

#### 1. DOC-CHAIN 文档链、治理与压缩机制

- [Issue #143379：RFC: THE DOC-CHAIN SUBSTRATE'S NETWORK](https://github.com/NousResearch/hermes-agent/issues/143379)  
  **70 条评论，Open**  
  这是今日讨论热度最高的问题，核心诉求是建立可长期保存、可追溯、可重新读取的文档链，使智能体在会话压缩后仍能依靠持久记录恢复上下文，而不是要求用户重复说明。  
  该议题涉及文件、记忆、压缩、治理和 Agent 核心行为，反映 Hermes 正从“单次会话助手”向“可长期运行的状态型 Agent”演进。

#### 2. 可插拔 SessionDB Provider

- [Issue #23717：RFC: Pluggable SessionDB Provider — PostgreSQL, MySQL, and Beyond](https://github.com/NousResearch/hermes-agent/issues/23717)  
  **26 条评论，11 个赞，Open**  
  用户希望摆脱 SQLite 在热更新、多实例和规模化部署中的限制。当前 `state.db` 在运行期间更新时容易形成锁与迁移问题，生产环境需要 PostgreSQL、MySQL 等可插拔后端。  
  这是明确的基础设施路线图信号，也反映项目开始认真面对企业化、多节点部署需求。

#### 3. Cron 重启安全 Worker 的数据库锁问题

- [Issue #135487：cron worker dies on `database is locked`](https://github.com/NousResearch/hermes-agent/issues/135487)  
  **15 条评论，Open**  
  `adopt_claimed_execution()` 只执行一次，没有重试机制；超过 5 秒 `busy_timeout` 后即退出，并可能丢失任务 occurrence。  
  该问题直接影响 Cron 的可靠性，且与今日 [PR #160694](https://github.com/NousResearch/hermes-agent/pull/160694) 和 [PR #160696](https://github.com/NousResearch/hermes-agent/pull/160696) 所针对的锁与等待问题高度相关。

#### 4. Desktop 输入框拼写检查

- [Issue #48375：Add spellcheck to the prompt input](https://github.com/NousResearch/hermes-agent/issues/48375)  
  **13 条评论，13 个赞，Open**  
  用户希望 Desktop 聊天输入框支持拼写检查，尤其适用于长提示词及非英语输入。当前功能缺口会影响高频桌面用户的使用流畅度。  
  点赞与评论数一致，说明这是需求明确但实现路径尚未落地的轻量功能。

#### 5. Gateway 空闲压缩问题已关闭

- [Issue #79357：idle_compact_after_seconds never fires in gateway mode](https://github.com/NousResearch/hermes-agent/issues/79357)  
  **13 条评论，6 个赞，CLOSED**  
  Gateway 在新一轮外部活动开始时重置 `_last_activity_ts`，而空闲压缩检查随后读取同一时间戳，导致配置的空闲压缩永远无法触发。  
  关闭说明相关讨论已收敛，但是否已有完全覆盖修复，仍需结合关联 PR 或提交确认。

### 4.2 社区认可度较高的需求

- [Issue #48375：Desktop 拼写检查](https://github.com/NousResearch/hermes-agent/issues/48375)——13 赞
- [Issue #23717：可插拔 SessionDB Provider](https://github.com/NousResearch/hermes-agent/issues/23717)——11 赞
- [Issue #79357：Gateway 空闲压缩](https://github.com/NousResearch/hermes-agent/issues/79357)——6 赞
- [Issue #137289：Google Gmail/Calendar MCP OAuth 授权](https://github.com/NousResearch/hermes-agent/issues/137289)——5 赞

### 4.3 高热 PR

- [PR #160697：SessionCrew 0.4.0](https://github.com/NousResearch/hermes-agent/pull/160697)
- [PR #160696：限制 Gateway 孤儿清理等待](https://github.com/NousResearch/hermes-agent/pull/160696)
- [PR #160694：隔离 Cron 引用脚本读取](https://github.com/NousResearch/hermes-agent/pull/160694)
- [PR #160693：轮询接口暴露终止详情](https://github.com/NousResearch/hermes-agent/pull/160693)
- [PR #160691：使用 bwrap 隔离 execute_code](https://github.com/NousResearch/hermes-agent/pull/160691)
- [PR #159651：Feishu 插件化](https://github.com/NousResearch/hermes-agent/pull/159651)
- [PR #160689：保留与 MCP 同名的内置工具集](https://github.com/NousResearch/hermes-agent/pull/160689)

这些 PR 尚无公开评论数，因此“热门”主要依据当日创建、近期更新和技术影响范围判断。

---

## 5. Bug 与稳定性

### P1：严重

#### Cron 锁错误导致 occurrence 丢失

- [Issue #135487：Cron restart-safe worker 在 `adopt_claimed_execution()` 遇到锁后退出](https://github.com/NousResearch/hermes-agent/issues/135487)  
  **状态：Open**  
  **影响：** 定时任务 occurrence 可能永久丢失，属于任务可靠性问题。  
  **已有修复：** 尚无明确直接关闭该 Issue 的 PR。  
  **相关 PR：**
  - [PR #160694](https://github.com/NousResearch/hermes-agent/pull/160694)
  - [PR #160696](https://github.com/NousResearch/hermes-agent/pull/160696)

### P2：高优先级

#### Cron Bot Chat 投递状态无法收敛

- [Issue #134092：cron job 长期停留在 `delivery_queued`](https://github.com/NousResearch/hermes-agent/issues/134092)  
  **状态：Open**  
  投递已由 Bot Chat 所有者领取并结算，但 Cron 任务记录没有更新，CLI 状态与真实状态不一致。  
  **已有修复：** 今日数据中未见明确对应 PR。

#### Desktop 远程 Gateway 下载 Bot Chat 媒体失败

- [Issue #149979：chat-media downloads fail with “Session not found”](https://github.com/NousResearch/hermes-agent/issues/149979)  
  **状态：Open**  
  跨机器 Gateway 场景下，非默认 Profile 的隐藏 Bot Chat 会话无法被 Desktop 正确解析，影响媒体下载。  
  **已有修复：** 未见明确对应 PR。

#### Gateway 页脚导致回合结算失败

- [Issue #157439：footed reply breaks deepcopy](https://github.com/NousResearch/hermes-agent/issues/157439)  
  **状态：Open**  
  开启 `display.runtime_footer.enabled` 后，页脚对象无法被 `deepcopy`，导致每次回合结算或发布都可能抛出 `TypeError`。  
  **已有修复：** 未见明确对应 PR。

#### Python 3.14 加载旧版 cp311 二进制依赖导致 Gateway 崩溃

- [Issue #139085：gateway worker inherits legacy cp311 site-packages](https://github.com/NousResearch/hermes-agent/issues/139085)  
  **状态：Open**  
  ABI 不匹配的 `pydantic_core` 在导入阶段使工作进程退出，影响升级和混合 Python 环境部署。  
  **已有修复：** 未见明确对应 PR。

#### MCP Server 名称遮蔽内置工具集

- [Issue #160675：禁用的 `mcp_servers.memory` 会移除内置 memory 工具集](https://github.com/NousResearch/hermes-agent/issues/160675)  
  **状态：Open**  
  影响 Desktop 和 `hermes -z` 会话的工具可用性，即使对应 MCP Server 未启用也会触发。  
  **已有 fix PR：**
  - [PR #160689](https://github.com/NousResearch/hermes-agent/pull/160689)

#### 插件发布路径逃逸或重叠

- [Issue #134952：插件目录为 symlink/junction 时 publication path 异常](https://github.com/NousResearch/hermes-agent/issues/134952)  
  **状态：Open**  
  Windows 目录联接和符号链接环境下，插件发布路径校验可能误判或越界。  
  **已有修复：** 未见明确对应 PR。

#### Mobile Push 意外创建无关会话

- [Issue #158115：turn 外 push delivery 创建无关会话](https://github.com/NousResearch/hermes-agent/issues/158115)  
  **状态：Open**  
  Cron 或 `deliver_only` Webhook 的推送可能误建会话，并在清理后出现 “Session not found”。  
  **已有修复：** 未见明确对应 PR。

#### v0.23.4 命名 Profile 的 Desktop 会话无法恢复

- [Issue #160360：multiplexer 会话键为 `agent:main:` 导致路由不匹配](https://github.com/NousResearch/hermes-agent/issues/160360)  
  **状态：Open**  
  命名 Profile 迁入主机 multiplexer 后，新 Desktop 会话恢复失败，显示 `storage_unavailable`。  
  **已有修复：** 未见明确对应 PR。

#### Delegation 凭据池策略失效

- [Issue #140495：不同 provider 的 delegated children 都租用了 priority-0 credential](https://github.com/NousResearch/hermes-agent/issues/140495)  
  **状态：Open**  
  并发子代理仍集中使用首个凭据，其他凭据未按配置策略分担，可能造成限流和负载集中。  
  **已有修复：** 未见明确对应 PR。

#### Feishu 自定义卡片按钮点击丢失

- [Issue #160384：v0.23.4 交互卡片按钮事件未进入 Agent](https://github.com/NousResearch/hermes-agent/issues/160384)  
  **状态：Open**  
  合成 `/card` 命令没有注册 Gateway handler，`form_value` 也未转发。  
  **已有修复：** 未见明确对应 PR；平台插件化 PR [PR #159651](https://github.com/NousResearch/hermes-agent/pull/159651) 可能提供重构入口，但摘要不足以确认已覆盖该回归。

#### SSH 环境析构阻塞事件循环

- [Issue #158591：SSH environment `__del__` 执行阻塞式 sync-back](https://github.com/NousResearch/hermes-agent/issues/158591)  
  **状态：Open**  
  垃圾回收回收 SSH terminal 环境时，阻塞式文件同步在事件循环线程执行，最终触发 Gateway watchdog 并以 exit 75 终止。  
  **已有修复：** 未见明确对应 PR。

### P3：中优先级

- [Issue #141050：skill_manage 对符号链接目录不敏感](https://github.com/NousResearch/hermes-agent/issues/141050)——编辑可能变成错误嵌套创建。
- [Issue #143198：Cron 审批门未识别部分文件写入原语](https://github.com/NousResearch/hermes-agent/issues/143198)——涉及配置和 SSH 目标静默写入风险。
- [Issue #90177：持久会话污染触发 OpenRouter 403 且无恢复路径](https://github.com/NousResearch/hermes-agent/issues/90177)——原始 traceback 文本进入 `state.db` 后可能持续污染提示词。
- [Issue #137289：Google Gmail/Calendar MCP OAuth 无法授权](https://github.com/NousResearch/hermes-agent/issues/137289)——涉及 issuer 尾斜杠、登录不启动和 scope 被忽略。
- [Issue #54214：Pet sprites 使用 LANCZOS 导致像素画模糊](https://github.com/NousResearch/hermes-agent/issues/54214)——建议像素图使用最近邻缩放。
- [Issue #149979 的相邻下载路径问题](https://github.com/NousResearch/hermes-agent/issues/149979)进一步表明会话标识和 Profile 路由仍缺少统一抽象。

### 安全专项

- [Issue #143198：Cron 审批检测覆盖不足](https://github.com/NousResearch/hermes-agent/issues/143198)
- [PR #160691：使用 bwrap 隔离 execute_code kernel](https://github.com/NousResearch/hermes-agent/pull/160691)

后者明确针对模型生成代码在宿主机上缺少文件系统范围和网络阻断的问题。如果合并并完善跨平台回退，将是重要安全提升；但目前 PR 仍开放，需关注 Linux 依赖、Windows/macOS 行为以及权限边界。

---

## 6. 功能请求与路线图信号

### 6.1 上下文压缩与长期记忆

- [Issue #143379：DOC-CHAIN SUBSTRATE](https://github.com/NousResearch/hermes-agent/issues/143379)
- [Issue #28279：Per-Chat Memory Isolation](https://github.com/NousResearch/hermes-agent/issues/28279)
- [Issue #97390：Per-channel background idle context compaction](https://github.com/NousResearch/hermes-agent/issues/97390)
- [Issue #117886：Post-turn background compaction](https://github.com/NousResearch/hermes-agent/issues/117886)
- [PR #160688：fresh-context 上下文引擎插件](https://github.com/NousResearch/hermes-agent/pull/160688)

**判断：** 下一阶段明显聚焦于“压缩不阻塞响应”“会话级记忆隔离”“持久记录可追溯”。其中 `fresh-context` 已以插件形式进入目录，说明部分需求可能先通过插件生态落地；但核心级压缩调度和记忆治理仍需主线 RFC 决策。

### 6.2 存储后端与规模化部署

- [Issue #23717：Pluggable SessionDB Provider](https://github.com/NousResearch/hermes-agent/issues/23717)

**判断：** 需求明确，但涉及存储抽象、迁移、事务兼容和部署配置，短期内更可能先完成 Provider 接口或单一 PostgreSQL 后端，而不是一次完成 PostgreSQL、MySQL 等全部支持。

### 6.3 Desktop 和会话管理

- [Issue #48375：拼写检查](https://github.com/NousResearch/hermes-agent/issues/48375)
- [Issue #147657：Desktop 会话搜索按时间排序](https://github.com/NousResearch/hermes-agent/issues/147657)
- [PR #160686：返回上一个会话](https://github.com/NousResearch/hermes-agent/pull/160686)

**判断：** “返回上一个会话”已有 PR，进入下一版本的可能性较高；拼写检查需求成熟但尚无 PR；搜索时间排序仍需 UI/查询层设计。

### 6.4 Gateway 用户体验和异步委派

- [Issue #16106：First-visible-commitment SLO 与 provider timing trace](https://github.com/NousResearch/hermes-agent/issues/16106)
- [Issue #130226：api_server 会话异步委派完成后不唤醒父 Agent](https://github.com/NousResearch/hermes-agent/issues/130226)
- [PR #160693：轮询接口暴露终止原因](https://github.com/NousResearch/hermes-agent/pull/160693)
- [PR #144701：将有界 control read 移出串行队列](https://github.com/NousResearch/hermes-agent/pull/144701)

**判断：** Gateway 正在从“能运行”转向“交互延迟可控、状态可观测”。轮询终止详情和控制读取解耦较适合近期发布；异步委派自动唤醒涉及会话生命周期策略，落地节奏可能更慢。

### 6.5 国际化

- [PR #101116：Swedish UI translations and documentation](https://github.com/NousResearch/hermes-agent/pull/101116)
- [PR #148618：Swedish web locale](https://github.com/NousResearch/hermes-agent/pull/148618)

**判断：** 瑞典语同时覆盖 Desktop 与 Web，配套较完整，具备进入下一版本的基础，但需确认是否还存在翻译目录或 typed locale 合约阻塞。

### 6.6 平台插件化

- [PR #159651：Feishu / Lark 插件化](https://github.com/NousResearch/hermes-agent/pull/159651)
- [PR #159640：QQ Bot 插件化](https://github.com/NousResearch/hermes-agent/pull/159640)

**判断：** 这是明确的架构路线信号。若进入下一版本，将构成重要架构变化，发布说明必须明确默认安装、旧配置迁移、插件版本兼容和回滚方案。

---

## 7. 用户反馈摘要

### 7.1 真实痛点

1. **长期会话会丢失上下文，用户被迫重复说明**  
   用户希望压缩后的 Agent 仍能通过持久文档链恢复状态，而不是只保留摘要。[Issue #143379](https://github.com/NousResearch/hermes-agent/issues/143379)

2. **SQLite 锁竞争影响 Cron 和 Gateway 的核心可靠性**  
   用户遇到 occurrence 丢失、投递状态卡住、通知阻塞和任务状态无法收敛。[Issue #135487](https://github.com/NousResearch/hermes-agent/issues/135487)、[Issue #134092](https://github.com/NousResearch/hermes-agent/issues/134092)

3. **跨 Profile、跨机器、跨 Gateway 的会话标识不一致**  
   Bot Chat 媒体下载失败、Mobile Push 错误创建会话、命名 Profile 恢复失败，均说明会话路由抽象仍不统一。[Issue #149979](https://github.com/NousResearch/hermes-agent/issues/149979)、[Issue #158115](https://github.com/NousResearch/hermes-agent/issues/158115)、[Issue #160360](https://github.com/NousResearch/hermes-agent/issues/160360)

4. **全局记忆存在多聊天隐私风险**  
   当前记忆会注入所有会话，用户希望按聊天来源、平台或 Profile 隔离。[Issue #28279](https://github.com/NousResearch/hermes-agent/issues/28279)

5. **升级和运行环境兼容问题突出**  
   热更新期间 SQLite 状态库问题、Python 3.14 与旧 cp311 依赖混用、Windows junction/symlink 路径问题，都会让升级过程变得脆弱。[Issue #23717](https://github.com/NousResearch/hermes-agent/issues/23717)、[Issue #139085](https://github.com/NousResearch/hermes-agent/issues/139085)、[Issue #134952](https://github.com/NousResearch/hermes-agent/issues/134952)

6. **用户对交互反馈速度敏感**  
   Provider 延迟时，用户希望看到有界的首次可见承诺，而不只是心跳或输入提示。[Issue #16106](https://github.com/NousResearch/hermes-agent/issues/16106)

### 7.2 满意与积极信号

- Desktop 拼写检查提案获得 **13 个赞且有 13 条评论**，表明社区对桌面端输入质量有明确共识。[Issue #48375](https://github.com/NousResearch/hermes-agent/issues/48375)
- SessionDB Provider 提案获得 **11 个赞**，显示企业部署和数据库可替换性是真实需求，而非边缘场景。[Issue #23717](https://github.com/NousResearch/hermes-agent/issues/23717)
- 插件目录快速扩展，SessionCrew、taskwatch、fresh-context 和 Straitly Provider 均在当日提交更新，说明生态贡献者活跃。[PR #160697](https://github.com/NousResearch/hermes-agent/pull/160697)、[PR #160695](https://github.com/NousResearch/hermes-agent/pull/160695)、[PR #160688](https://github.com/NousResearch/hermes-agent/pull/160688)、[PR #160687](https://github.com/NousResearch/hermes-agent/pull/160687)

### 7.3 不满意点

用户不满主要集中在“配置或任务已成功执行，但系统显示仍失败或未完成”，包括 Cron `delivery_queued` 不收敛、Desktop 媒体下载报会话不存在、命名 Profile 无法恢复、Feishu 卡片按钮无响应。这表明当前主要问题并非单纯功能缺失，而是**状态一致性、路由一致性和跨模块反馈不一致**。

---

## 8. 待处理积压

### 8.1 高价值但长期开放的架构 Issue

- [Issue #143379：DOC-CHAIN SUBSTRATE](https://github.com/NousResearch/hermes-agent/issues/143379)  
  创建于 2026-10-23，70 条评论，是核心架构与长期上下文治理的关键决策项。应尽快明确子任务拆分、提案负责人和可交付阶段。

- [Issue #23717：Pluggable SessionDB Provider](https://github.com/NousResearch/hermes-agent/issues/23717)  
  创建于 2026-05-11，讨论充分且社区认可度高。应避免继续停留在宽泛 RFC，至少明确第一阶段 Provider 接口、迁移工具和 PostgreSQL 支持范围。

- [Issue #28279：Per-Chat Memory Isolation](https://github.com/NousResearch/hermes-agent/issues/28279)  
  创建于 2026-05-19，涉及隐私安全。建议提升优先级，并先落地会话/Profile 作用域和默认迁移策略。

- [Issue #117886：Post-turn background compaction](https://github.com/NousResearch/hermes-agent/issues/117886)  
  创建于 2026-09-21，涉及响应延迟。应明确摘要模型失败、超时和 turn 结算之间的降级策略。

- [Issue #97390：Per-channel background idle context compaction](https://github.com/NousResearch/hermes-agent/issues/97390)  
  创建于 2026-08-28，与 #117886 高度关联，适合合并设计，避免出现两套后台压缩调度。

### 8.2 长期可靠性 Issue

- [Issue #135487：Cron 数据库锁导致 occurrence 丢失](https://github.com/NousResearch/hermes-agent/issues/135487)  
  创建于 2026-10-09，已有多次讨论；建议明确关闭条件、重试与幂等策略。

- [Issue #90177：持久会话污染导致 OpenRouter 持续 403](https://github.com/NousResearch/hermes-agent/issues/90177)  
  创建于 2026-08-19，缺少受支持的恢复路径。应提供清理污染状态或跳过系统诊断文本的机制。

- [Issue #134092：Cron `delivery_queued` 状态不更新](https://github.com/NousResearch/hermes-agent/issues/134092)  
  创建于 2026-10-06，需明确投递结算事件如何回写 Cron 状态。

### 8.3 跨平台与安全积压

- [Issue #143198：Cron 审批门漏检文件写入原语](https://github.com/NousResearch/hermes-agent/issues/143198)
- [Issue #134952：插件目录 symlink/junction 发布路径异常](https://github.com/NousResearch/hermes-agent/issues/134952)
- [Issue #139085：Python 3.14 与旧虚拟环境 ABI 冲突](https://github.com/NousResearch/hermes-agent/issues/139085)
- [Issue #137289：Google 官方 Gmail/Calendar MCP OAuth 授权失败](https://github.com/NousResearch/hermes-agent/issues/137289)

这些问题分别影响安全边界、Windows 安装、Python 升级和主流服务集成，建议按部署覆盖面排序处理。

### 8.4 PR 积压提醒

今日仍有 **44 条 PR 待合并**，其中以下长期开放 PR 需要维护者推动：

- [PR #101116：瑞典语 Desktop UI](https://github.com/NousResearch/hermes-agent/pull/101116)——创建于 2026-09-02
- [PR #144701：Gateway control read 绕开串行队列](https://github.com/NousResearch/hermes-agent/pull/144701)——创建于 2026-10-25
- [PR #154545：Linux AppImage 构建](https://github.com/NousResearch/hermes-agent/pull/154545)——已关闭
- [PR #159640：QQ Bot 插件化](https://github.com/NousResearch/hermes-agent/pull/159640)——创建于 2026-11-24
- [PR #159651：Feishu 插件化](https://github.com/NousResearch/hermes-agent/pull/159651)——创建于 2026-11-24

建议维护者优先完成安全边界、Cron/Gateway 稳定性、会话路由一致性和平台插件迁移四类 PR 的评审，并为长期 RFC 设置明确的里程碑与拆分计划。

---

## 项目健康度结论

**综合健康度：中高，活跃度高，但存在明显的可靠性与架构积压。**

- **优势：** 社区提交量大，议题覆盖真实生产问题；今日已有备份、Cron/Gateway 阻塞和工具集策略方面的实质修复；插件生态活跃。
- **主要风险：** SQLite 锁和会话状态一致性仍影响核心链路；Profile、Gateway、Desktop、移动推送之间存在路由割裂；安全审批与代码执行隔离需要尽快加固。
- **下一版本建议优先级：**
  1. 合并 Cron/Gateway 锁与孤儿清理相关修复；
  2. 修复内置工具集与 MCP 重名冲突；
  3. 统一 Bot Chat、Profile、Push 和 Desktop 的会话标识；
  4. 推进 `execute_code` 沙箱及 Cron 写操作审批覆盖；
  5. 为 Feishu/QQ 插件化准备完整迁移与回滚说明；
  6. 对长期 RFC 明确阶段目标，减少高评论但无实施产出的积压。

</details>

<details>
<summary><strong>OpenHuman</strong> — <a href="https://github.com/tinyhumansai/openhuman">tinyhumansai/openhuman</a></summary>

# OpenHuman 项目动态日报

**统计日期：2026-11-27**  
**数据范围：过去 24 小时**

## 1. 今日速览

- 过去 24 小时共更新 **1 个 Issue** 和 **1 个 PR**，均为未关闭状态；期间**无新版本发布**。
- 当前活跃工作主要集中在两项：**Workflow Copilot 的 `run_flow` 审批流程异常**，以及 **Settings 引导提示在侧边栏较高时超出窗口的问题**。
- PR [#8772](https://github.com/tinyhumansai/openhuman/pull/8772) 已进入待合并状态，针对引导流程布局和回归测试进行了修复，但尚无合并记录。
- Issue [#8378](https://github.com/tinyhumansai/openhuman/issues/8378) 自 10 月 24 日创建以来已有多次跟进，但截至今日仍未关闭，也未看到明确关联的修复 PR。
- 整体活跃度偏低但方向明确：有 **1 个可待合并修复**，同时存在 **1 个跨多日、可能影响核心工具审批体验的未解决问题**；项目健康度评为**中等偏低**。

## 2. 版本发布

过去 24 小时无新版本发布。

---

## 3. 项目进展

### 今日没有已合并或关闭的重要 PR

唯一更新的 PR 为：

- **[#8772 fix(onboarding): keep the Settings walkthrough tip in view](https://github.com/tinyhumansai/openhuman/pull/8772)**  
  - **状态：** Open，待合并  
  - **作者：** @zhangkom  
  - **目标：** 改善首次使用或设置引导中的提示定位，避免向导提示被全高侧边栏遮挡。  
  - **主要改动：**
    - 将 Settings walkthrough 提示限制在应用窗口可视区域内；
    - 为 macOS 等平台的原生窗口控制按钮预留空间；
    - 扩展 guided-tour 回归测试，覆盖首个 Settings 步骤及其相邻步骤。  
  - **推进程度：** 该 PR 已从问题描述进入可评审状态，并补充了相应回归保护，但截至日报生成时尚未合并，因此暂不能计入已发布功能或修复。

**进展评估：** 今日有明确的 UI 修复候选，但没有形成已合并产出；项目向前推进的程度有限。

---

## 4. 社区热点

### Issue：[#8378 Workflow Copilot denies run_flow without showing an approval request](https://github.com/tinyhumansai/openhuman/issues/8378)

- **状态：** Open  
- **优先级：** P2  
- **评论数：** 2  
- **作者：** @derrick099  
- **最后更新：** 2026-11-26  
- **热度判断：** 今日唯一更新的 Issue，也是本期最值得维护者关注的社区问题。

**核心诉求：**

用户明确确认执行 Workflow Copilot 的 `run_flow` 工具后，系统有时仍拒绝运行，并且没有展示可供批准的审批卡片。用户因此既无法执行已确认的操作，也无法理解拒绝原因或完成授权。

**背后需求：**

1. 审批请求应稳定出现，不能在工具调用前被静默拦截；
2. 拒绝执行时应提供明确原因；
3. 用户确认与审批卡之间需要保持状态一致，避免“已确认但仍被拒绝”的黑盒体验；
4. 对工作流执行权限和审批链路进行错误处理与状态同步。

虽然该 Issue 只有 2 条评论、0 个点赞，并非高互动量热点，但其同时具备 **P2 优先级、跨多日未关闭、影响核心工作流执行**三个特征，实际重要性高于单纯的热度指标。

---

## 5. Bug 与稳定性

### P2 · Workflow 执行审批链路异常

- **Issue：** [#8378](https://github.com/tinyhumansai/openhuman/issues/8378)
- **现象：** 用户明确确认后，`run_flow` 仍可能被拒绝；审批卡片未显示，用户无法批准操作。
- **环境：** OpenHuman v0.64.15，macOS。
- **复现路径：** 创建并保存包含手动触发节点的 “Daily Priorities” 工作流，通过 Workflow Copilot 请求执行 `run_flow`。
- **影响范围：** 涉及工作流执行、工具审批和用户确认之间的状态同步，可能导致自动化任务无法启动。
- **当前状态：** Issue 仍开放；本次数据中**未发现明确关联的 fix PR**。
- **稳定性判断：** 暂无证据表明问题影响全部用户，其描述为“有时”发生，因此更适合归类为**条件性但用户阻塞明显的稳定性缺陷**。

### P3 · Settings 引导提示可能超出窗口

- **Issue/修复 PR：** [#8772](https://github.com/tinyhumansai/openhuman/pull/8772)
- **现象：** 当侧边栏较高时，Settings walkthrough 提示可能位于全高侧边栏上方而不可见或布局异常。
- **影响范围：** 主要影响首次设置引导和 macOS 等具有原生窗口控制按钮的平台，属于引导流程可用性问题。
- **修复状态：** **已有待合并 PR**，即 [#8772](https://github.com/tinyhumansai/openhuman/pull/8772)。
- **风险判断：** 当前有明确修复方案及回归测试补充；合并后稳定性风险预计较低。

---

## 6. 功能请求与路线图信号

### 可靠、可追踪的 `run_flow` 审批机制

[#8378](https://github.com/tinyhumansai/openhuman/issues/8378) 虽以 Bug 形式提交，但反映了明确的产品需求：Workflow Copilot 的审批过程需要具备：

- 审批卡可靠呈现；
- 用户确认状态与执行权限正确同步；
- 拒绝时展示可诊断的原因；
- 对审批超时、状态丢失或工具调用失败提供可恢复路径。

**是否可能进入下一版本：** 当前没有直接对应的 PR，因此暂不能判断已进入短期路线图。但该问题阻碍核心工作流执行，且已被标记为 P2，优先级足以进入维护者近期排查范围。若近期发布节奏加快，应重点确认是否已有内部修复或错误处理方案。

### 设置引导在不同窗口尺寸下保持可见

[#8772](https://github.com/tinyhumansai/openhuman/pull/8772) 表明项目正在强化 onboarding 的健壮性和回归覆盖：

- 引导提示应始终位于窗口可视范围内；
- 应适配较高侧边栏；
- 应避让 macOS 原生窗口控制按钮；
- 自动化测试应覆盖连续引导步骤，而非只验证单一页面。

**是否可能进入下一版本：** 该 PR 当前开放且目标明确，已有较高可能随下一次常规合并进入版本；但在完成代码审查、CI 验证和合并前，不应视为已确定发布内容。

---

## 7. 用户反馈摘要

### 真实使用场景

用户在 macOS 上使用 OpenHuman v0.64.15 创建并保存名为 “Daily Priorities” 的工作流，通过 Workflow Copilot 触发 `run_flow`。这类场景强调的是实际任务执行，而非仅查看或编辑工作流，因此审批链路故障会直接阻断用户目标。

### 主要痛点

- **操作确认与系统结果不一致：** 用户已经明确确认，工具却仍然拒绝执行；
- **缺少可见反馈：** 没有审批卡，用户不知道系统是否收到请求；
- **无法自助恢复：** 由于缺少审批入口，用户只能等待或反馈问题；
- **可理解性不足：** 当前反馈无法帮助用户判断问题发生在权限校验、确认状态丢失、审批卡渲染还是工具调度阶段。

### 满意度信号

- [#8378](https://github.com/tinyhumansai/openhuman/issues/8378) 获得了 2 条评论，说明用户进行了持续补充或沟通常见问题；
- 但 Issue 仍无明确修复 PR，核心体验尚未闭环；
- PR [#8772](https://github.com/tinyhumansai/openhuman/pull/8772) 主动处理窗口边界、原生控件避让和回归测试，反映维护侧对 onboarding 细节的关注。

---

## 8. 待处理积压

### 长期未关闭的核心工作流审批问题

- **[#8378 Workflow Copilot denies run_flow without showing an approval request](https://github.com/tinyhumansai/openhuman/issues/8378)**
  - 创建于 **2026-10-24**，最后更新于 **2026-11-26**，已跨约一个月仍未关闭；
  - 当前为 **P2**，有 2 条评论；
  - 本期数据中未见明确 fix PR；
  - 建议维护者优先确认复现条件、影响版本范围，以及审批卡未显示时的错误日志，并补充用户侧 workaround 或临时处理说明。

### 待合并的 onboarding 修复

- **[#8772 fix(onboarding): keep the Settings walkthrough tip in view](https://github.com/tinyhumansai/openhuman/pull/8772)**
  - 创建于 **2026-11-23**，更新于 **2026-11-27**，目前仍开放；
  - 属于可明确评审和验证的小范围修复；
  - 建议尽快完成 CI、窗口尺寸适配验证和合并，避免新手引导问题继续累积。

---

## 今日结论

OpenHuman 今日没有版本发布或已合并 PR，整体产出较为有限。当前最积极信号是 [#8772](https://github.com/tinyhumansai/openhuman/pull/8772) 已提供清晰修复与回归测试；主要风险是 [#8378](https://github.com/tinyhumansai/openhuman/issues/8378) 涉及核心 Workflow Copilot 审批链路，已跨较长时间仍未解决，也暂未发现对应修复 PR。维护重点应放在 **审批状态一致性、错误可诊断性，以及 #8772 的及时合并**。

</details>

---
*本日报由 [Big Model Radar](https://github.com/96loveslife/big_model_radar) 自动生成。*
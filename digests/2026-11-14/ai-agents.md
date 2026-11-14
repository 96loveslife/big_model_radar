# OpenClaw 生态日报 2026-11-14

> Issues: 339 | PRs: 500 | 覆盖项目: 8 个 | 生成时间: 2026-11-14 05:47 UTC

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

**统计日期：2026-11-14**  
**数据范围：过去 24 小时 GitHub Issue / PR 更新**

---

## 1. 今日速览

过去 24 小时 OpenClaw 共更新 **339 条 Issues**（新开或活跃 228 条、关闭 111 条）和 **500 条 PRs**（待合并 264 条、已合并或关闭 236 条），整体开发吞吐很高，但 PR 待处理量已超过一半，仓库处于高并发维护状态。  
今日无新版本发布；当前工作重点集中在 **Gateway 稳定性、托管更新机制、Agent/子代理会话一致性、记忆系统、浏览器安全边界和 Windows/macOS 兼容性**。  
社区反馈仍显示多个关键链路存在较高风险，包括 **托管更新卡死、Gateway 内存增长、SQLite worker OOM、会话消息丢失以及定时任务执行异常**。  
值得注意的是，今日 PR 已出现针对 SSRF 绕过、提示词缓存失效、更新流程原子化和内存占用等问题的系统性修复，但大量变更仍处于“等待维护者审查”“需要证明”或“等待作者修改”阶段。  
**健康度判断：开发活跃度很高，修复响应积极；但高优先级稳定性问题和维护队列积压仍然突出，发布质量风险中高。**

---

## 3. 项目进展

> 今日无新版本发布，因此不单列版本说明。以下汇总已关闭 PR 与今日推进中的关键修复。

### 2.1 已合并或关闭的重要工作

#### Telegram 重复 DM 上下文窗口问题已完成修正

- PR 已关闭：[#183190 fix(telegram): suppress duplicate DM transcript windows while preserving delivery-only context](https://github.com/openclaw/openclaw/pull/183190)
- 该修复处理 Telegram 私聊中近期助手消息同时通过 canonical session replay 与 supplemental `chat_window` 进入模型、导致上下文重复的问题。
- 修复保留仅用于投递的上下文，降低重复提示、额外 token 消耗和模型行为漂移。
- 这与近期多个 Telegram callback、重复回复及会话状态问题共同构成 Telegram 链路稳定性治理的一部分。

#### Workboard 不再导出无内部消费者的常量

- PR 已关闭：[#198672 chore(workboard): stop exporting MAX_COMPLETION_CLAIMS](https://github.com/openclaw/openclaw/pull/198672)
- 移除未使用的公共导出，修复 `check:changed` 和相关性能流水线中的继承性失败。
- 虽然用户可见变化有限，但有助于恢复主干 CI 绿灯并降低后续合并阻塞。

#### Codex prompt hook 测试适配协作策略变化

- PR 已关闭：[#198660 test(codex): prompt hook test fails on main after the collaboration policy change](https://github.com/openclaw/openclaw/pull/198660)
- 调整 Codex 测试以适配新的协作策略，避免扩展测试分片因主干策略变更而失败。
- 对应的是持续集成稳定性改善，不涉及用户功能变化。

### 2.2 今日尚未合并、但推进明确的重要 PR

#### 托管更新流程向“分阶段切换 + 原子切换”演进

- PR：[#198375 feat(update): stage runtime slots, flip one pointer, restart through a frozen launcher](https://github.com/openclaw/openclaw/pull/198375)
- 拟将运行目录分阶段部署，通过单一指针完成切换，并通过冻结的 launcher 重启服务。
- 直接针对现实中“候选版本已经通过检查，但在激活阶段失败”的更新故障，是今日最重要的可靠性改造方向之一。
- 同一方向还包括开发检出更新被中断后无法恢复的修复：[#198673](https://github.com/openclaw/openclaw/pull/198673)。

#### 浏览器 SSRF 防护修复

- PR：[#198452 fix(browser): pages reach SSRF-blocked addresses by navigating after an action's 250 ms guard](https://github.com/openclaw/openclaw/pull/198452)
- 配套重构：[#198638 refactor(browser): keep one document-interception session per tab](https://github.com/openclaw/openclaw/pull/198638)
- 修复浏览器在动作执行后的短暂窗口内仍可导航至 SSRF 禁止地址的问题。
- 这是明确的安全边界修复，涉及兼容性、安全边界和持续拦截生命周期，合并前需要较完整的环境验证。

#### 修复长会话提示词缓存失效

- PR：[#198410 fix(agents): long sessions lose the prompt cache when a wake, subagent turn or replay changes sent bytes](https://github.com/openclaw/openclaw/pull/198410)
- 针对 wake、子代理回合、silent reply 或历史重放改变已发送字节的问题，保持 provider 端提示词缓存稳定。
- 预期收益包括降低长会话成本、减少首 token 延迟，并改善模型请求稳定性。
- 该变更涉及会话序列化和 provider prompt 行为，属于兼容性敏感改造。

#### 降低受限主机上的 Gateway 常驻内存

- PR：[#198194 fix(gateway): reduce resident memory on constrained hosts](https://github.com/openclaw/openclaw/pull/198194)
- 复用有界 reader、回收不必要对象和独立维护资源，以改善 ARM64 等内存受限部署。
- 与当前长期会话 SQLite worker OOM、Gateway RSS 持续增长等反馈直接相关。
- 若充分验证，可能成为下一轮稳定性版本的核心修复之一。

#### 子代理完成消息误报失败

- PR：[#198633 fix(agents): completion relays report spurious failures on tool-free turns](https://github.com/openclaw/openclaw/pull/198633)
- 配套调整：[#198689 fix(agents): align tool-free completion relay instructions with tool surface](https://github.com/openclaw/openclaw/pull/198689)
- 修复子代理实际已完成，但因为使用降级交接路径、无工具回合或权限剥离而被误报为“失败/受阻”的问题。
- 直接改善多 Agent 编排的完成状态准确性和用户可见反馈。

#### 节点解绑后丢弃陈旧队列输入

- PR：[#198684 fix(gateway): discard queued input after node unpairing](https://github.com/openclaw/openclaw/pull/198684)
- 当节点配对关系已经改变时，Gateway 丢弃原配对下排队中的请求和语音转录，避免其在新状态下继续执行。
- 属于节点生命周期与任务隔离边界修复。

#### 插件安装和更新统一兼容性校验

- PR：[#198663 refactor(plugins): share package compatibility validation](https://github.com/openclaw/openclaw/pull/198663)
- 合并插件安装与更新路径中的重复兼容性判断，减少行为漂移。
- 用户可见变化较小，但有利于插件生态的一致性和维护成本控制。

#### 模板发布失败可重试

- PR：[#198674 fix(templates): keep pre-upload ClawHub failures retryable in draft publication](https://github.com/openclaw/openclaw/pull/198674)
- 当 ClawHub 登录过期、限流或服务不可达发生在制品上传前时，保留可重试状态。
- 降低网络瞬态故障导致的草稿发布不可恢复问题。

#### CLI 参数和错误可观测性改善

- `cron run` 缺少 `--wait` 却传入等待参数时直接报错，避免任务被意外排队：  
  [#198683](https://github.com/openclaw/openclaw/pull/198683)
- `cron add` 在非脚本任务中传入脚本专属限制时提前报错：  
  [#198688](https://github.com/openclaw/openclaw/pull/198688)
- `capability inspect --json` 输出实际失败原因，便于脚本和 Agent 正确处理：  
  [#198662](https://github.com/openclaw/openclaw/pull/198662)

#### 控制 UI 与运维体验

- 推荐插件和技能统一使用 Install 操作，移除不合适的 Dismiss：  
  [#198561](https://github.com/openclaw/openclaw/pull/198561)
- 语音输入反馈随首次听写一并加载，减少首屏资源负担：  
  [#198643](https://github.com/openclaw/openclaw/pull/198643)
- 模板创建时先挂载聊天，再等待依赖初始化，降低首轮对话阻塞：  
  [#198637](https://github.com/openclaw/openclaw/pull/198637)
- 大型备份展示阶段及字节级进度：  
  [#198675](https://github.com/openclaw/openclaw/pull/198675)
- macOS 支持通过邀请加入 OpenClaw ID claw：  
  [#198499](https://github.com/openclaw/openclaw/pull/198499)

### 2.3 整体推进评估

今日项目推进并非单一功能开发，而是明显偏向 **基础设施可靠性重构**：

1. 更新器从“原地修改后重启”转向“预部署、原子切换”；
2. 浏览器从临时动作级拦截转向 tab 级持续拦截；
3. Gateway 尝试控制资源生命周期和常驻内存；
4. Agent 会话开始关注提示词缓存与完成消息真实性；
5. 插件、模板、CLI 和 CI 流程持续统一校验与错误语义。

这些改动若完成验证和合并，将显著改善平台级可靠性；但它们同时触及安装、升级、会话、插件和浏览器安全边界，短期内也可能增加回归与合并风险。

---

## 4. 社区热点

### 4.1 Windows 托管服务重启与更新不可靠

- Issue：[#170956 Windows: slow startup, unclean plugin shutdown, and schtasks permission error make restarts/updates unreliable](https://github.com/openclaw/openclaw/issues/170956)
- **32 条评论**，今日最活跃 Issue，标记 P0 和 release blocker。
- 诉求集中在 Windows `schtasks` 托管安装模式：启动慢、插件关闭不干净、权限错误频繁导致更新和重启失败。
- 用户已经出现“多次重试后才偶尔成功”的体验，说明问题直接影响日常可用性，而不只是边缘环境。
- 当前标签显示暂无新修复 PR，是最值得维护者立即介入的积压之一。

### 4.2 同步持久化阻塞 Gateway 事件循环

- Issue：[#119720 Synchronous agent persistence and transcript maintenance block the Gateway event loop at scale](https://github.com/openclaw/openclaw/issues/119720)
- **26 条评论**，P1，影响 message loss 和 crash loop。
- 诉求是将会话持久化及 transcript maintenance 的同步 I/O 移出主事件循环，避免规模化部署时 Gateway 整体停顿。
- 数据显示已有部分修复落地，但最新重写仍被指出存在性能与可靠性风险；这是当前 Agent 核心链路的关键架构债。

### 4.3 Telegram callback payload 被静默丢弃

- Issue：[#126950 Telegram: opaque callback payloads silently dropped for non-plugin callers](https://github.com/openclaw/openclaw/issues/126950)
- **16 条评论**，现已关闭。
- 核心诉求是 `message` 工具创建的 inline button callback 不应因为采用内部 opaque 格式而被静默忽略。
- 该问题体现渠道适配器内部协议与 Agent 工具公共接口之间的边界不一致；关闭说明近期已有处理路径，但值得补充非插件调用场景的回归覆盖。

### 4.4 Windows 插件 reload 卡死

- Issue：[#163139 Windows plugins.reload fails preparing host-package link with EPERM and stalls Gateway](https://github.com/openclaw/openclaw/pull/163139)
- **9 条评论**。
- 用户希望插件热重载在 Windows 上可靠工作，尤其要避免 `EPERM` 导致整个 Gateway 停滞。
- 与 #170956 共同说明 Windows 文件链接、权限和进程关闭机制仍不够稳健。

### 4.5 macOS Gateway 因 MessagePort 关闭而挂起

- Issue：[#181120 macOS Gateway stops responding with main thread blocked closing a worker MessagePort](https://github.com/openclaw/openclaw/issues/181120)
- **8 条评论**，P1。
- 进程采样显示主线程在关闭 worker MessagePort 时等待写锁，形成 Gateway 无响应并需要重启的故障。
- 这是明确的并发与资源关闭死锁风险，用户体验严重，但目前没有新的修复 PR 可见。

### 4.6 子代理完成结果丢失

- Issue：[#155119 Subagent completion: final answer lost + duplicate settle events + deliveryStatus stuck pending](https://github.com/openclaw/openclaw/issues/155119)
- **13 条评论**。
- 诉求是确保子代理最终答案不因 retention 截断而丢失，并避免重复 settle 与 `pending` 状态卡死。
- 今日 #198633、#198689 对“误报失败”已有推进，但“结果丢失、重复事件、状态卡住”仍需完整修复。

### 4.7 浏览器 SSRF 安全问题获得高优先级处理

- PR：[#198452 fix(browser): pages reach SSRF-blocked addresses by navigating after an action's 250 ms guard](https://github.com/openclaw/openclaw/pull/198452)
- 配套 PR：[#198638](https://github.com/openclaw/openclaw/pull/198638)
- 今日安全方向最受关注的 PR。
- 诉求不是简单增加黑名单，而是确保拦截在整个 tab 生命周期内持续存在，避免时间窗口绕过。
- 该修复已进入维护者审查/证明阶段，若验证充分，应优先合并。

### 4.8 Agent 运行预算与历史重复计费

- Issue：[#178373 Agent loop has no run-level turn/token budget, tool-loop detection is opt-in, and retained history is re-billed every turn](https://github.com/openclaw/openclaw/issues/178373)
- **10 条评论**。
- 用户关注无限工具循环、token 成本失控和每轮重复携带完整历史。
- 属于成本、可靠性和治理能力的综合诉求，可能推动 Agent runtime 配置体系继续扩展。

---

## 5. Bug 与稳定性

### P0 / 发布阻断级

#### 1. Windows 托管安装重启和更新频繁失败

- Issue：[#170956](https://github.com/openclaw/openclaw/issues/170956)
- 涉及启动延迟、插件关闭残留、`schtasks` 权限异常、客户端 1006 断连和更新失败。
- **已有 fix PR：否。**
- 维护状态：32 条评论、P0、release blocker；虽然已有部分历史修复 PR，但当前 Issue 标签仍为 `no-new-fix-pr`，说明最新复发或场景尚未覆盖。

#### 2. Codex 暂停会话无法恢复

- Issue：[#190563 Cannot resume paused Codex chat: provider review/native thread mismatch](https://github.com/openclaw/openclaw/issues/190563)
- Provider review 与 native Codex thread 绑定不一致，导致人工确认恢复失败。
- **已有 fix PR：当前列表中未见明确对应 PR。**
- 属于核心会话恢复回归，影响工作连续性。

#### 3. 托管更新在 validating 阶段挂起并被 SIGKILL

- Issue：[#193094 Managed update hangs in validating for 57 min and is then SIGKILLed](https://github.com/openclaw/openclaw/issues/193094)
- 实际耗时 3414 秒，远超 1800 秒预算，随后更新子进程被杀。
- **已有相关 fix PR：有。**
  - [#198375](https://github.com/openclaw/openclaw/pull/198375)：更新流程分阶段部署并原子切换；
  - [#198673](https://github.com/openclaw/openclaw/pull/198673)：开发检出更新中断后的恢复；
  - [#198489](https://github.com/openclaw/openclaw/pull/198489)：补充已发布 updater 在新布局下的测试。
- 这些 PR 尚未合并，需重点观察验证结果。

### P1 / 高严重度

#### 4. 大会话反复触发 SQLite worker 512 MB OOM

- Issue：[#191847 Large session repeatedly kills the 512 MB SQLite worker](https://github.com/openclaw/openclaw/issues/191847)
- 升级后每轮均可能触发 `ERR_WORKER_OUT_OF_MEMORY`，最终报 `admission is closed`。
- **已有相关 fix PR：部分。**
  - [#198194](https://github.com/openclaw/openclaw/pull/198194) 降低 Gateway 常驻内存并共享有界 reader；
  - 但尚不能确认已完整覆盖 worker heap 和大会话写入路径。
- 建议作为下一版本回归测试重点。

#### 5. Gateway RSS 持续增长且内部监控无法触发

- Issue：[#182369 Gateway RSS grows ~0.1 GiB/h off-heap until restart](https://github.com/openclaw/openclaw/issues/182369)
- 内部 `rss_threshold` 监控未对该类 off-heap 增长报警。
- **已有相关 fix PR：部分。**
  - [#198194](https://github.com/openclaw/openclaw/pull/198194) 针对受限主机减少常驻资源；
  - [#198638](https://github.com/openclaw/openclaw/pull/198638) 将浏览器拦截 session 常驻到 tab，可能影响该场景的内存表现，需要联合观察。
- 仍需补充长期运行和 off-heap 专项测试。

#### 6. macOS Gateway 因 worker MessagePort 关闭发生挂起

- Issue：[#181120](https://github.com/openclaw/openclaw/issues/181120)
- 主线程持写锁等待 worker MessagePort 关闭，Gateway 整体无响应。
- **已有 fix PR：未见。**

#### 7. `memory_search` 工具固定 15 秒超时，但 CLI 正常

- Issue：[#128140 memory_search tool always times out while CLI works fine](https://github.com/openclaw/openclaw/issues/128140)
- 表明底层 embedding provider 和索引可能可用，问题更可能位于 Agent 工具路径的超时、调度或资源竞争。
- **已有 fix PR：未见。**
- 与 #194164、#176187 共同构成本周记忆系统的高频故障簇。

#### 8. 记忆索引不会在 Gateway 启动后自动建立

- Issue：[#194164 Memory indexing does not start after Gateway boot](https://github.com/openclaw/openclaw/issues/194164)
- 只有 Agent 首次调用 `memory_search` 后才创建索引管理器和 watcher。
- **已有 fix PR：未见。**

#### 9. 子代理完成消息丢失或状态卡住

- Issue：[#155119](https://github.com/openclaw/openclaw/issues/155119)
- 另有相关问题：[#154785](https://github.com/openclaw/openclaw/issues/154785) 已关闭，但仍反映 session-effect owner 退休时提交失败。
- **已有 fix PR：部分。**
  - 今日 [#198633](https://github.com/openclaw/openclaw/pull/198633) 和 [#198689](https://github.com/openclaw/openclaw/pull/198689) 处理完成消息误报失败；
  - 最终答案丢失、重复 settle、delivery status 卡死仍需专项修复。

#### 10. `exec` 完成唤醒在稳定版仍丢失

- Issue：[#185085 Exec completion wakes still lost with SESSION_DELIVERY_GENERATION_UNAVAILABLE](https://github.com/openclaw/openclaw/issues/185085)
- 已知 #177063 在 main 修复，但未进入 2026.10.7 等稳定版本，且错误没有重试。
- **已有 fix PR：历史修复存在，但稳定分支落地不完整。**
- 建议进行稳定分支 backport 核验。

#### 11. helper completion 后续回合自行失去权限

- Issue：[#194403 Helper-completion continuations invalidate their own authority and leave conversations blocked](https://github.com/openclaw/openclaw/issues/194403)
- 失败 continuation 会遗留后台工作，阻塞后续人工消息。
- **已有 fix PR：未见。**

#### 12. macOS TTS 转换成功但音频大幅截断

- Issue：[#197531 macOS TTS: reported truncated CAF from segmented MP3 despite successful conversion](https://github.com/openclaw/openclaw/issues/197531)
- 转换进程成功退出，但解码后只保留部分音频，疑似首段 metadata 处理问题。
- **已有 fix PR：未见。**

### P2 / 中等严重度

#### 13. `openclaw message send --dry-run` 仍耗时约 17 秒并可能长时间不退出

- Issue：[#187355 CLI: openclaw message send needs ~17s even with --dry-run](https://github.com/openclaw/openclaw/issues/187355)
- 在 Gateway 已投递消息后，CLI 仍可能继续运行数分钟。
- **已有 fix PR：未见。**

#### 14. macOS 26 iMessage 翻译消息缺少 edit 能力

- Issue：[#173599 iMessage hides edit action for macOS 26 translation selector](https://github.com/openclaw/openclaw/issues/173599)
- 新 selector `editMessageItemTranslation` 未纳入能力发现。
- **已有相关 PR：标签显示 `linked-pr-open`，但当前 PR 列表中未给出明确编号。**

#### 15. 项目父会话 `sessions_spawn` 模型验证错误

- Issue：[#182467 Project-parent sessions_spawn fails model validation while models.list reports available models](https://github.com/openclaw/openclaw/issues/182467)
- Gateway 模型列表与实际 spawn 准入逻辑不一致。
- **已有相关 PR：标签显示 `linked-pr-open`，当前列表未给出明确编号。**

#### 16. CLI backend 缺少 `modelProvider` 时被静默忽略

- Issue：[#172969 registerCliBackend without modelProvider is silently dropped](https://github.com/openclaw/openclaw/issues/172969)
- 最终仅暴露模糊的 `Invalid URL` 错误。
- **已有 fix PR：未见。**

#### 17. 长会话 compaction 静默降级

- Issue：[#197374 Compaction silently degrades on long sessions](https://github.com/openclaw/openclaw/issues/197374)
- 默认 120 秒 idle timeout 小于配置的 compaction budget，且质量守卫不给出原因。
- **已有 fix PR：未见。**

#### 18. Post-install Doctor 验证失败导致升级仅部分完成

- Issue：[#197083 Post-install Doctor WAL publication verification leaves 11.3 update partially finalized](https://github.com/openclaw/openclaw/issues/197083)
- 新核心已激活，但外部插件等状态未完全收尾。
- **已有相关修复方向：#198375 更新架构 PR，但尚未合并。**

---

## 6. 功能请求与路线图信号

### 6.1 跨 Provider 的 Cron fallback 授权

- 已关闭 Issue：[#192009 Explicitly authorize cross-provider cron fallback accounts](https://github.com/openclaw/openclaw/issues/192009)
- 诉求：定时任务的主模型与 fallback 模型可使用不同 provider/account，但必须显式授权。
- Issue 已关闭，说明该方向至少完成了需求收敛或已有替代方案。
- 与 fallback 账号语义、usage-limit cooldown 和模型绑定逻辑共同构成下一阶段模型治理重点。

### 6.2 Dream Diary 语言和提示词可配置

- 已关闭 Issue：[#79223 Configurable Dream Diary language / prompt](https://github.com/openclaw/openclaw/issues/79223)
- 用户希望非英语工作区生成同样语言的记忆产物。
- 需求合理、实现边界清晰；若功能确已关闭，较可能通过配置项或插件配置完成，而非继续硬编码 prompt。

### 6.3 Teams 动态解析 SharePoint site

- Issue：[#136271 msteams: resolve team SharePoint site dynamically for channel file uploads](https://github.com/openclaw/openclaw/issues/136271)
- 用户希望在上传频道文件时自动解析对应团队的 SharePoint site，而不是硬编码 `sharePointSiteId`。
- 这是企业部署体验的重要增强；虽然当前标记 `not-repro-on-main`，仍值得纳入 Teams 适配器路线图。

### 6.4 隐藏 Agent 但保持可生成目标

- Issue：[#166678 Hide agents from the agent picker while keeping them spawnable](https://github.com/openclaw/openclaw/issues/166678)
- 多 Agent 组织希望隐藏内部 worker，只展示面向用户的 Agent，同时保留被其他 Agent spawn 的能力。
- 对应的是 UI 展示与执行权限分离，产品逻辑清晰，具备进入下一版本的可能。

### 6.5 Telegram 原生骰子动作

- Issue：[#137110 Telegram sendDice support for the message tool](https://github.com/openclaw/openclaw/issues/137110)
- 允许 Agent 发送 Telegram 原生动画骰子，并从工具结果读取点数。
- 属于低成本、高可见度的渠道增强；当前标签显示有 linked PR open，落地概率较高。

### 6.6 Active Memory 由插件决定深度召回升级

- Issue：[#151178 Let Active Memory delegate escalation decisions to a plugin provider](https://github.com/openclaw/openclaw/issues/151178)
- 诉求：确定性检索无强命中时，允许单一插件 provider 决定是否启动 deep recall。
- 与当前 memory_search 超时和向量检索性能问题紧密相关；若没有先解决超时和索引生命周期，扩展该能力需谨慎。

### 6.7 不可绕过的出站策略边界

- Issue：[#56349 Unbypassable outbound policy enforcement](https://github.com/openclaw/openclaw/issues/56349)
- 要求所有消息出口统一经过 pre-send 策略检查，覆盖 Agent reply、自动回复、message tool 和渠道适配器。
- 这是长期安全架构诉求，涉及全部出站路径，改造面较大，不太可能在一个小版本内完成，但可能成为后续安全版本的核心路线。

### 6.8 MCP Events 触发 Agent 运行

- Issue：[#166586 Consume MCP Events from configured MCP servers and start an agent run per event](https://github.com/openclaw/openclaw/issues/166586)
- 将 MCP server 事件映射为 Agent run，类似现有 hooks mapping。
- 这是从“Agent 调用 MCP”扩展到“MCP 主动驱动 Agent”的重要生态方向，具备明显路线图价值。

### 6.9 macOS 邀请加入 OpenClaw ID claw

- PR：[#198499 feat(macos): join an OpenClaw ID claw as a member with an invite](https://github.com/openclaw/openclaw/pull/198499)
- 补齐此前只有邀请链接却无法加入的流程。
- 属于身份和成员管理体验的重要完善，当前等待作者处理。

### 6.10 插件可向嵌入式最终回复附加展示内容

- PR：[#179763 feat: let plugins attach presentation to embedded final replies](https://github.com/openclaw/openclaw/pull/179763)
- 允许插件在 `before_agent_finalize` 阶段返回 `finalPresentation`。
- 对插件生态和富交互输出意义较大，但涉及嵌入式 runner 的协议与兼容性，适合进入下一插件 API 版本而非紧急热修。

---

## 7. 用户反馈摘要

### 7.1 更新与部署是最突出的用户痛点

多个用户在真实托管环境中遇到更新失败或恢复不完整：

- Windows `schtasks` 安装在启动、插件关闭和权限层反复失败：[#170956](https://github.com/openclaw/openclaw/issues/170956)
- 更新 validating 阶段运行近 57 分钟后被杀：[#193094](https://github.com/openclaw/openclaw/issues/193094)
- Post-install WAL 验证失败后形成“核心已升级、外部状态未完成”的半完成状态：[#197083](https://github.com/openclaw/openclaw/issues/197083)
- 开发检出更新被中断后，后续更新全部被拒绝：[#198673](https://github.com/openclaw/openclaw/pull/198673)

用户期待升级过程具备 **原子性、可回滚性、可恢复性**，而不是仅在候选版本校验阶段成功。当前 #198375 代表正确的架构方向。

### 7.2 长会话和大历史场景稳定性不足

高频反馈集中在：

- 大会话 SQLite worker OOM：[#191847](https://github.com/openclaw/openclaw/issues/191847)
- Gateway off-heap RSS 每小时约增长 0.1 GiB：[#182369](https://github.com/openclaw/openclaw/issues/182369)
- 长会话 compaction 被 120 秒 idle timeout 静默截断：[#197374](https://github.com/openclaw/openclaw/issues/197374)
- 每轮重新计费全部 retained history：[#178373](https:///openclaw/openclaw/issues/178373)
- 子代理最终答案因 retention 丢失：[#155119](https://github.com/openclaw/openclaw/issues/155119)

这表明 OpenClaw 在长时间运行、长期驻留和高频 Agent 编排场景下，资源生命周期与上下文管理仍不够稳健。

### 7.3 记忆系统“CLI 正常、工具调用失败”的不一致体验

用户对 [#128140](https://github.com/openclaw/openclaw/issues/128140) 的描述很有代表性：底层服务和索引可用，CLI 搜索也正常，但 Agent 工具固定在 15 秒超时。  
这类问题会显著降低用户对工具调用链路的信任，因为故障边界不透明。类似情况还包括 Gateway 启动后索引不自动建立：[#194164](https://github.com/openclaw/openclaw/issues/194164)，以及大规模向量检索超过 deadline：[#176187](https://github.com/openclaw/openclaw/issues/176187)。

### 7.4 子代理编排的反馈状态不可靠

用户遇到的不只是“消息丢了”，还包括：

- 实际完成却被报告为失败；
- 完成事件重复；
- delivery status 永久 `pending`；
- 权限撤销后无法投递；
- parent session 永久等待。

相关 Issues：[#155119](https://github.com/openclaw/openclaw/issues/155119)、[#166964](https://github.com/openclaw/openclaw/issues/166964)、[#194403](https://github.com/openclaw/openclaw/issues/194403)。  
这说明子代理完成链路需要统一的事务语义、权限生命周期和可观测状态，而不能由各投递路径分别处理。

### 7.5 跨平台体验差异明显

- Windows：托管启动、插件 reload、文件链接权限均不稳定；
- macOS：Gateway MessagePort 死锁、TTS 截断、iMessage 新 selector 漏检；
- Safari：Control UI 聊天输入框消失，Chrome 正常：[#195192](https://github.com/openclaw/openclaw/issues/195192)；
- macOS 26：新 iMessage translation edit selector 未支持：[#173599](https://github.com/openclaw/openclaw/issues/173599)。

用户期待“同一 Gateway、不同客户端和 OS 上行为一致”。目前部分问题仍是浏览器或系统版本特定回归。

### 7.6 CLI 反馈速度和可诊断性不足

- `message send --dry-run` 仍需约 17 秒，并可能在投递后继续运行：[#187355](https://github.com/openclaw/openclaw/issues/187355)
- `capability inspect --json` 只输出泛化失败信息：[#198662](https://github.com/openclaw/openclaw/pull/198662)
- `registerCliBackend` 配置错误被静默吞掉，最终表现为 `Invalid URL`：[#172969](https://github.com/openclaw/openclaw/issues/172969)

用户和自动化 Agent 都需要结构化、明确、可机器消费的错误信息。近期多项 CLI PR 正朝这一方向改进。

### 7.7 用户对功能丰富度总体持积极态度

正面需求包括：

- Telegram 原生骰子：[#137110](https://github.com/openclaw/openclaw/issues/137110)
- Teams 动态 SharePoint 定位：[#136271](https://github.com/openclaw/openclaw/issues/136271)
- Agent picker 隐藏内部 Agent：[#166678](https://github.com/openclaw/openclaw/issues/166678)
- MCP Events 驱动 Agent：[#166586](https://github.com/openclaw/openclaw/issues/166586)
- 插件提供最终展示内容：[#179763](https://github.com/openclaw/openclaw/pull/179763)

用户并未表现出对功能方向的否定，主要不满集中在实现质量、跨平台一致性和升级可靠性。

---

## 8. 待处理积压

### 8.1 P0 / 发布阻断但缺少最新修复

#### Windows 托管服务更新与重启失败

- Issue：[#170956](https://github.com/openclaw/openclaw/issues/170956)
- **32 条评论**，持续时间超过一个月。
- 当前处于高热度、高严重度、低修复可见性状态。
- 建议维护者：
  1. 按 `schtasks`、插件关闭、启动耗时分别拆分复现；
  2. 明确 2026.11.x 是否已包含部分修复；
  3. 建立 Windows 托管升级 E2E CI。

#### Codex paused chat 无法恢复

- Issue：[#190563](https://github.com/openclaw/openclaw/issues/190563)
- P0 回归、release blocker、已有安全审查需求。
- 需要确认 provider review 和 native thread 的迁移策略，以及旧会话升级后的兼容行为。

### 8.2 高严重度但长期无明确修复 PR

#### 同步持久化阻塞 Gateway 事件循环

- Issue：[#119720](https://github.com/openclaw/openclaw/issues/119720)
- 26 条评论、P1，影响消息丢失和 crash loop。
- 虽已有部分修复，但当前重写仍需规模化压测和阻塞调用审计。

#### macOS Gateway MessagePort 关闭挂起

- Issue：[#181120](https://github.com/openclaw/openclaw/issues/181120)
- P1、已有进程采样证据。
- 建议建立 MessagePort 生命周期、超时和强制关闭测试。

#### `memory_search` 工具超时

- Issue：[#128140](https://github.com/openclaw/openclaw/issues/128140)
- P1、长期存在、13 条评论。
- 建议分别记录 embedding、SQLite/vec0 retrieval、工具调度和序列化耗时，避免仅调整 15 秒阈值。

#### Gateway off-heap RSS 持续增长

- Issue：[#182369](https://github.com/openclaw/openclaw/issues/182369)
- P1、已有长期运行观测。
- #198194 可能缓解部分常驻资源，但需要明确 off-heap 泄漏是否被覆盖。

#### helper completion 权限失效并阻塞会话

- Issue：[#194403](https://github.com/openclaw/openclaw/issues/194403)
- 新近高影响问题，涉及权限撤销和后台工作清理。
- 建议增加 authority generation、continuation retry 和 orphan cleanup 的端到端测试。

### 8.3 PR 审查队列积压

过去 24 小时有 **264 条 PR 待合并**，其中大量处于以下状态：

- `ready for maintainer look`
- `needs proof`
- `waiting on author`
- `waiting on maintainer`

值得优先清理的合并风险项目包括：

1. [浏览器 SSRF 修复 #198452](https://github.com/openclaw/openclaw/pull/198452)  
   安全敏感，应优先完成复现、截图和跨浏览器验证。
2. [长会话提示词缓存修复 #198410](https://github.com/openclaw/openclaw/pull/198410)  
   涉及协议字节和 provider cache，需防止历史重放变化。
3. [托管更新架构 #198375](https://github.com/openclaw/openclaw/pull/198375)  
   变更范围大，应建立失败注入、崩溃恢复和回滚测试。
4. [Gateway 内存优化 #198194](https://github.com/openclaw/openclaw/pull/198194)  
   需与 SQLite worker OOM、长期 RSS 增长联合验证。
5. [插件最终展示协议 #179763](https://github.com/openclaw/openclaw/pull/179763)  
   需明确插件 API 版本和向后兼容策略。

### 8.4 建议的维护优先级

1. **立即处理 P0：** #170956、#190563。
2. **优先合并稳定性修复：** #198375、#198194、#198410、#198452。
3. **建立跨平台回归矩阵：** Windows 托管更新、macOS Gateway 长跑、Safari Control UI、macOS TTS/iMessage。
4. **统一记忆系统生命周期：** 启动索引、Agent 工具超时、vec0 性能、Gateway 启动后 watcher。
5. **统一子代理完成状态机：** delivery、authority、retention、retry 和最终答案完整性。
6. **清理长期无响应高评论 Issue：** #119720、#128140、#182369、#181120。
7. **控制 PR 队列规模：** 264 条待合并已构成维护压力，应优先处理安全、更新、会话与资源生命周期类 PR。

---

## 总体结论

OpenClaw 今日呈现出 **“高吞吐开发、强需求反馈、稳定性仍待收敛”** 的状态。修复方向总体正确：更新器原子化、浏览器持续拦截、提示词缓存稳定、Gateway 资源收缩、子代理状态纠偏都在触及用户真正遇到的问题。  
但当前最需要关注的并非功能数量，而是这些核心改动能否安全、及时地合并，以及 Windows、macOS、长会话和托管升级等高风险路径是否具备充分自动化验证。若下一轮发布不能优先解决 **更新可靠性、Gateway 内存/事件循环、子代理交付、记忆检索超时和浏览器安全边界**，项目健康度仍会受到高优先级积压的持续拖累。

---

## 横向生态对比

# 个人 AI 助手 / 自主智能体开源生态横向分析

**分析日期：2026-11-14**  
**数据口径：过去 24 小时 GitHub Issue、PR 与 Release 更新**

---

## 1. 生态全景

过去 24 小时，9 个项目合计出现约 **438 条 Issue/PR 更新**，其中 **277 条 PR**，显示生态仍处于高密度并行开发阶段。共同主线已从单纯扩展模型与工具能力，转向 **更新可靠性、Gateway/会话状态机、长上下文资源管理、跨平台一致性、安全边界和可观测性**。

各项目呈现明显分层：OpenClaw、Hermes Agent、QwenPaw 处于高并发工程迭代期；LobsterAI 和 OpenHuman 更偏桌面产品化与集成收敛；NanoBot 处于 WebUI、工具链和发布工程完善阶段；PicoClaw 主要进行上游同步与批量收口；IronClaw 暂无社区活动。

整体功能供给充足，但“PR 已提交”尚未等同于“稳定版本已交付”：除 Hermes Agent 发布 Canary 外，多数项目今日没有正式版本，合并积压、冲突 PR、缺少 Changelog 和跨平台回归不足，是当前生态的主要风险。

---

## 2. 各项目活跃度对比

| 项目 | 今日 Issues | 今日 PRs | Release 情况 | 待合并 PR | 健康度评估 |
|---|---:|---:|---|---:|---|
| **OpenClaw** | 339（活跃/新开 228，关闭 111） | 500（待合并 264） | 无新版本 | 264 | **高活跃、高风险**：开发吞吐领先，但队列和稳定性债务最大 |
| **Hermes Agent** | 50（活跃/新开 49，关闭 1） | 50（待合并 44） | 1 个 Canary | 44 | **中等偏活跃**：安全治理密集，但核心可靠性与交付收敛承压 |
| **QwenPaw** | 13（活跃/新开 11，关闭 2） | 29（待合并 26） | 无；最新正式版 2.3.0 | 26 | **中等偏上**：响应快，但 2.3.0 回归面广、合并吞吐不足 |
| **LobsterAI** | 2 | 24（待合并 4） | 无；Release PR 已关闭 | 4 | **良好**：修复收敛较快，桌面产品与数据安全持续改善 |
| **OpenHuman** | 4（1 活跃、3 关闭） | 19（待合并 8） | 无新版本 | 8 | **良好偏积极**：安全与渠道修复扎实，处于高变更收敛期 |
| **NanoBot** | 3 | 22（待合并 9） | 无新版本 | 9 | **良好偏活跃**：功能推进明显，发布闭环与冲突 PR 偏弱 |
| **PicoClaw** | 1 | 3（待合并 0） | 无新版本 | 0 | **一般偏积极**：代码同步活跃，但用户问题和发布闭环不足 |
| **IronClaw** | 0 | 0 | 无 | 0 | **无活动/证据不足**：无法据此判断项目健康度 |
| **QwenPaw、OpenClaw 等合计** | **约 438 条 Issue/PR 更新** | — | 仅 Hermes 发布 Canary | — | 生态总体处于高并发开发期 |

> 注：各项目对“活跃/关闭 Issue”及“合并/关闭 PR”的统计口径略有差异，因此绝对值适合判断量级，不宜作为精确横向排名。

### 活跃度分层

- **超高吞吐层：OpenClaw**
  - Issue 和 PR 数量显著领先，已形成接近企业级多维护者仓库的规模。
- **高并发层：Hermes Agent、QwenPaw**
  - 问题和 PR 密度高，功能与安全并行，但合并积压明显。
- **稳定收敛层：LobsterAI、OpenHuman**
  - 今日多数 PR 已关闭，问题到修复的闭环较清晰。
- **中等迭代层：NanoBot**
  - 开发活跃，但版本发布和冲突处理落后于功能开发。
- **低活动层：PicoClaw、IronClaw**
  - 前者主要进行批量合入与上游同步；后者当日无可见动态。

---

## 3. OpenClaw 在生态中的定位

### 3.1 生态角色

OpenClaw 更接近当前生态中的 **“全栈自主智能体运行平台”**，而非单一聊天助手或轻量 Agent 框架。其覆盖面横跨：

- Gateway 生命周期与托管部署；
- Agent、子代理和多轮会话；
- Telegram、Discord、QQ、Teams、iMessage 等渠道；
- 浏览器与本地工具执行；
- 记忆、搜索、MCP、插件和技能生态；
- Windows、macOS、Linux 跨平台托管。

从今日数据看，OpenClaw 的 **339 条 Issue、500 条 PR、264 条待合并 PR** 都远高于其他项目，反映其社区规模和贡献吸引力处于第一梯队。

### 3.2 相对优势

1. **功能面最宽**
   - NanoBot 更偏轻量 Agent + WebUI；PicoClaw 偏嵌入式/轻量运行；LobsterAI 更偏桌面产品。
   - OpenClaw 同时覆盖渠道、插件、浏览器、Gateway、记忆和托管部署。

2. **真实生产场景反馈最丰富**
   - 更新挂起、Windows `schtasks`、macOS MessagePort、SQLite worker OOM、记忆检索超时等问题，都来自长期运行和多平台部署。
   - 这类反馈使项目更接近“可运营基础设施”，而非功能原型。

3. **技术路线更偏平台化和状态机化**
   - 更新器走向原子切换；
   - 浏览器拦截从动作级转为 tab 生命周期级；
   - Gateway 开始控制 reader 和常驻资源；
   - Agent 完成状态、提示词缓存和投递语义持续统一。

4. **插件与渠道生态潜力强**
   - 插件 API、最终回复展示、MCP Events、OpenClaw ID、跨渠道 Provider 等信号表明其正在向 Agent 操作系统演进。

### 3.3 相对短板

1. **维护吞吐无法完全消化社区规模**
   - 264 条待合并 PR 超过当日 PR 更新的一半，审查、证明和冲突处理成为瓶颈。
   - QwenPaw、LobsterAI、OpenHuman 的待合并 PR 分别为 26、4、8，规模明显更可控。

2. **稳定性债务集中暴露**
   - 相比 Hermes Agent 的 Canary 交付和 QwenPaw 的 2.3.1 修复候选，OpenClaw 今日没有版本落地。
   - 用户关注点已从“能不能做”转向“升级、恢复、长跑是否可靠”。

3. **架构复杂度带来较高回归面**
   - 更新器、Gateway、浏览器、插件、会话、记忆同时改造，技术方向正确，但短期集成风险较高。

### 3.4 社区规模对比

- **第一梯队：OpenClaw**
  - 更新量与积压量均为生态最大。
- **第二梯队：Hermes Agent、QwenPaw**
  - 都有高密度贡献和快速修复响应，但分别面临 Canary 收敛和大 PR 评审问题。
- **第三梯队：LobsterAI、OpenHuman、NanoBot**
  - 迭代积极且更聚焦，但社区规模和跨场景反馈密度相对有限。
- **第四梯队：PicoClaw**
  - 主要表现为维护者集中整合，外部讨论信号较弱。
- **IronClaw**
  - 仅凭当日数据无法与上述项目进行有效社区规模比较。

---

## 4. 共同关注的技术方向

### 4.1 Gateway 生命周期与状态机

涉及项目：**OpenClaw、Hermes Agent、QwenPaw、LobsterAI、OpenHuman**

- OpenClaw：Gateway 内存增长、SQLite worker OOM、同步持久化阻塞事件循环。
- Hermes Agent：Gateway 中途重启导致 session FIFO 永久阻塞，提出空闲时重启。
- QwenPaw：Codex app-server 断连后当前 turn 挂起。
- LobsterAI：Gateway 未及时记录消息导致任务轮次不可编辑或分叉。
- OpenHuman：工具、IPC 与桌面 Gateway 生命周期持续收敛。

**共同诉求：** Gateway 不应只是“进程还活着”，还必须保证 turn、session、任务和消息具有明确状态，并能在重启、超时或异常后自动恢复。

### 4.2 长会话、长上下文和资源治理

涉及项目：**OpenClaw、QwenPaw、OpenHuman、LobsterAI、Hermes Agent**

- OpenClaw：大会话 SQLite worker OOM、RSS 持续增长、compaction 静默降级、历史重复计费。
- QwenPaw：append-only 会话存储、分页历史、原生 Turn fork。
- LobsterAI：分页读取时容忍损坏消息元数据。
- OpenHuman：工作流状态和消息元数据的一致性更新。
- Hermes Agent：长会话 steer、Profile FIFO 与 Memory 生命周期。

**共同诉求：** 从简单截断上下文转向 **持久化记录 + 分页加载 + 分叉 + compaction + 资源上限** 的完整生命周期。

### 4.3 子代理和多 Agent 交付可靠性

涉及项目：**OpenClaw、Hermes Agent、LobsterAI**

- OpenClaw：子代理完成消息误报失败、最终答案丢失、重复 settle、delivery status 卡住。
- Hermes Agent：delegate 配置不生效、工具循环硬停止后任务静默终止。
- LobsterAI：分叉后工具调用和结果配对被破坏。

**共同诉求：** 子代理需要事务化完成语义，明确区分运行中、成功、失败、拒绝、投递中和不可达，并保证最终答案与工具调用链完整。

### 4.4 跨平台一致性与托管安装

涉及项目：**全部活跃项目**

- OpenClaw：Windows `schtasks`、插件 reload、macOS MessagePort/TTS/iMessage。
- Hermes Agent：Windows `write_file`、SSH 安装、macOS 更新退出码。
- QwenPaw：Windows 沙箱锁卷、Creator 写路径非法。
- LobsterAI：Windows NSIS 打包失败、Electron 升级。
- NanoBot：QQ 附件上传超时。
- PicoClaw：Web UI 与 CLI 对无 API Key Provider 支持不一致。
- OpenHuman：Windows 安装后 PATH 与 PowerShell Profile 配置失败。

**共同诉求：** 安装、更新、文件权限、工具执行和配置解析必须在不同 OS、入口和托管模式下保持一致，而不能只保证“主路径可用”。

### 4.5 工具与插件安全边界

涉及项目：**OpenClaw、Hermes Agent、OpenHuman、NanoBot、QwenPaw**

- OpenClaw：浏览器 SSRF 绕过、出站策略不可绕过。
- Hermes Agent：审批配置保护、危险命令正则阻塞、工具集意外扩权、日志脱敏。
- OpenHuman：浏览器密钥与来源站点绑定、跨页面持续遮蔽。
- NanoBot：复杂 JSON Schema 校验、文件操作统一授权。
- QwenPaw：回环代理鉴权绕过风险。

**共同诉求：** 工具执行必须采用 **最小权限、默认拒绝、来源绑定、持续拦截、敏感信息不进入模型上下文** 的安全模型。

### 4.6 模型与 Provider 路由准确性

涉及项目：**QwenPaw、NanoBot、LobsterAI、OpenClaw**

- QwenPaw：Hub 内置 Anthropic/MiniMax 预设瞬间 502；渠道内 `/model` 假成功但未切换。
- NanoBot：已退役 OpenAI 图像模型仍显示；混合模型链中图片被静默移除。
- LobsterAI：内置 Provider 模型目录过期，需要迁移和下线模型清理。
- OpenClaw：跨 Provider Cron fallback 授权、provider prompt 缓存稳定性。

**共同诉求：** 模型目录、路由声明和真实能力必须一致；切换失败不能返回假成功；模型退役和 fallback 必须可自动同步或显式授权。

### 4.7 发布工程与可观测性

涉及项目：**全部项目**

- NanoBot：推进 PyPI Trusted Publishing，但无新版本。
- QwenPaw：2.3.0 回归集中，2.3.1 尚未发布。
- LobsterAI：Release PR 关闭，但正式 Release 状态不明确。
- OpenClaw：大量修复未进入发布。
- Hermes Agent：Canary 已发布，但缺少完整 Changelog。
- OpenHuman：多项修复已合并但无 Release。

**共同诉求：** 从“提交修复”升级为“可追溯发布”：明确版本范围、修复清单、迁移说明、自动发布和回滚策略。

---

## 5. 差异化定位分析

| 项目 | 功能侧重 | 目标用户 | 技术架构与路线特征 |
|---|---|---|---|
| **OpenClaw** | 全渠道 Agent 平台、托管 Gateway、浏览器、插件、记忆、多 Agent | 高级个人用户、自动化重度用户、私有部署及二次开发者 | TypeScript/Node 生态倾向；Gateway 为中心，插件和多渠道扩展；强调托管更新与状态恢复 |
| **NanoBot** | 轻量 Agent 核心、WebUI、Provider、搜索、文件工具 | 希望快速搭建个人助手、学习 Agent 开发或使用多 Provider 的用户 | Python 生态；偏简洁核心和 WebUI；重点在体验、工具 Schema、Provider 接入和低门槛配置 |
| **PicoClaw** | 轻量/嵌入式 Agent、CLI、Web UI、上游同步 | 边缘设备、本地化部署及偏好 Go 实现的用户 | Go 技术栈；轻量运行时；当前重点是同步上游与目录模块化，而非快速扩展生态 |
| **LobsterAI** | 桌面 Cowork、OpenClaw 集成、技能包、图像能力、广告与发布 | 期望开箱即用桌面助手的普通及专业用户 | Electron/桌面产品路线；强调 GUI、技能资产、模型目录和安装包交付 |
| **QwenPaw** | 多渠道接入、插件、本地推理、Console、办公文档预览 | 需要国内模型、渠道接入、本地引擎和桌面/控制台组合的用户 | Python 后端 + Web Console；功能扩展广，当前处于 2.3.0 回归与大型会话存储重构阶段 |
| **Hermes Agent** | Gateway、MCP、插件、A2A、安全治理、Desktop/Cloud | 需要自托管、多 Profile、多工具集及安全边界的企业/高级用户 | 异步 Gateway 与工具生态；安全治理突出，强调隔离、脱敏、审批和可恢复运行 |
| **OpenHuman** | 浏览器自动化、钱包/x402、工作流、桌面端、凭据安全 | 需要浏览器操作、支付和本地自动化的个人/技术用户 | Rust 核心与桌面集成；工作流对象生命周期、密钥材料和支付链是差异化重点 |
| **IronClaw** | 当日信息不足 | 无法判断 | 无可见活动，不宜据此推断路线 |
| **PicoClaw（补充）** | 相比 OpenClaw 更轻量 | 更关注小体积和可控部署者 | 上游同步频繁，模块化重组明显 |

### 核心差异归纳

- **OpenClaw**：胜在“平台广度”和复杂生产场景覆盖，代价是状态机与维护复杂度最高。
- **NanoBot**：胜在低门槛、多 Provider 和 WebUI 易用性，主要短板是发布闭环与冲突管理。
- **PicoClaw**：胜在轻量与 Go 生态，短板是外部反馈和版本交付信号较弱。
- **LobsterAI**：胜在桌面产品化，核心是让复杂 Agent 能力以 GUI 和安装包形式交付。
- **QwenPaw**：胜在渠道、本地模型、插件与 Console 的组合，短板是 2.3.0 后缺陷面过宽。
- **Hermes Agent**：胜在安全治理、Gateway 隔离和多 Profile 运维，短板是大量修复尚未合并、正式版本边界不清。
- **OpenHuman**：胜在浏览器、钱包和本地工作流的垂直整合，短板是复杂依赖链与并发状态问题。

---

## 6. 社区热度与成熟度

### 6.1 社区热度分层

#### 高热度、高压力：OpenClaw

- 单日 839 条 Issue/PR 更新，264 条待合并。
- 热点集中在更新失败、Gateway 内存、长会话、子代理交付、记忆系统、Windows/macOS。
- 社区规模最大，但“需求增长 > 维护吞吐”是当前最突出矛盾。

#### 高密度、较高质量：QwenPaw

- 社区反馈集中于 2.3.0 的真实生产回归，并普遍附版本、commit、日志或具体代码位置。
- 至少 8 个开放 PR 直接对应已报告 Issue，Issue 到 PR 的响应速度较快。
- 主要短板是 26 条待合并 PR、多个 XXXL 大 PR 和 3 条 PR/日的合并吞吐。

#### 高活跃、可靠性承压：Hermes Agent

- 50 条 Issue 与 50 条 PR 并行，安全主题形成明显批次。
- 长期 Issue 获得较多讨论，说明用户在多 Profile、后台任务、远程后端上有真实生产使用。
- 但 44 条待合并 PR 和 Canary 缺少完整 Changelog，使成熟度低于开发活跃度所显示的水平。

#### 中等热度、产品化导向：LobsterAI

- 24 条 PR 中 20 条已关闭，修复闭环相对充分。
- Issue 几乎无公开评论、点赞，热度更多体现在代码和发布 PR，而不是社区讨论。
- 产品成熟度相对较高，但开放社区信号偏弱。

#### 中等热度、安全修复明显：OpenHuman

- 19 条 PR、11 条已闭环，浏览器密钥、Telegram、Windows 和 x402 均有实质修复。
- 讨论样本有限，当前更像维护者驱动的高效收敛。
- 大规模死代码删除与工作流并发问题使其仍处于高风险开发阶段。

#### 中低热度、体验导向：NanoBot

- 22 条 PR、13 条已闭环，WebUI 改进密集。
- Issue 讨论量少，但 Dream 截断、QQ 上传和模型目录过期都来自真实使用。
- 成熟度中等，当前卡点在发布与冲突 PR，而不是创意不足。

#### 低热度、维护整合期：PicoClaw

- 仅 1 个活跃 Issue，3 个 PR 全部关闭。
- 主要动作是批量合入和同步 1,095 个上游提交。
- 属于维护整合期，而非社区扩张期。

#### 无可见活动：IronClaw

- 仅凭 24 小时无动态，不能判断其是否停滞、归档或处于私有开发阶段。

### 6.2 成熟度判断

| 成熟阶段 | 项目 | 判断依据 |
|---|---|---|
| **快速迭代 / 高风险收敛** | OpenClaw、Hermes Agent、QwenPaw | 大量新功能和修复并行，待合并队列庞大 |
| **质量巩固 / 产品收敛** | LobsterAI、OpenHuman | 大部分 PR 已闭环，重点转向安全、数据一致性、发布 |
| **体验完善 / 发布补强** | NanoBot | WebUI 和工具链推进快，但版本与冲突管理不足 |
| **上游整合 / 架构同步** | PicoClaw | 批量合入和大规模上游同步，外部反馈较少 |
| **证据不足** | IronClaw | 当日无活动 |

---

## 7. 值得关注的趋势信号

### 趋势一：Agent 项目的竞争焦点正从“模型调用”转向“运行时可靠性”

用户越来越关注：

- 更新是否能原子完成；
- Gateway 重启后会话是否可恢复；
- 工具结果是否丢失；
- 子代理是否真实完成；
- 长会话是否 OOM；
- 后台任务状态是否可信。

这说明下一阶段的关键指标不应只是模型能力和工具数量，而是 **任务不丢、状态不假、故障可恢复**。

### 趋势二：会话存储将逐步从“快照式”转向“事件式”

QwenPaw 的 append-only SQLite、OpenClaw 的会话一致性和缓存修复、LobsterAI 的分叉与消息容错，都指向同一方向：

- 原始消息和工具调用不可变保存；
- 分页加载替代一次性大窗口；
- Turn fork 成为原生能力；
- 元数据更新具备条件写入和并发控制。

这会直接影响记忆系统、成本、审计和多 Agent 协作的设计。

### 趋势三：安全治理从单点检查转向“默认拒绝 + 最小权限”

多个项目同时推进：

- SSRF 持续拦截；
- 浏览器密钥来源绑定；
- 审批策略防自修改；
- 显式工具集不扩权；
- MCP 坏工具隔离；
- 文件操作统一授权；
- 日志和 URL 凭据脱敏。

未来插件/MCP 生态的竞争，不只是“能不能接入”，而是 **接入后是否默认安全、故障是否隔离、权限是否可审计**。

### 趋势四：跨平台一致性已成为产品基本盘

Windows 安装、计划任务、ACL、文件写入、macOS 更新、Linux PATH、浏览器兼容不再是边缘问题。头部项目正在形成跨平台回归矩阵。

对于技术决策者，应重点查看项目是否具备：

- Windows/macOS/Linux CI；
- 安装—升级—回滚 E2E；
- 托管服务生命周期测试；
- 长跑、内存和断电恢复测试。

### 趋势五：多 Agent 生态需要统一的交付协议

子代理问题反复出现在 OpenClaw、Hermes Agent 和 LobsterAI，说明下一阶段需要标准化：

- task/run ID；
- 幂等完成事件；
- 最终答案与 retention；
- 工具调用—结果关联；
- 权限代际和撤销；
- delivery/retry 状态；
- 父会话取消与恢复。

缺乏统一协议时，多 Agent 能力越强，状态分裂和消息丢失越严重。

### 趋势六：Provider 路由正在从静态配置走向能力感知

QwenPaw、NanoBot、LobsterAI、OpenClaw 都在处理模型目录、fallback、图片能力和会话模型绑定问题。未来需要：

- 自动同步供应商模型生命周期；
- 明确多模态和工具能力；
- 路由切换具备真实结果验证；
- fallback 显式授权；
- 废弃模型自动迁移或禁用。

### 趋势七：版本发布和 PR 合并能力将成为生态分化点

功能差距正在缩小，但交付差距明显：

- OpenClaw：修复量最大，但 264 条待合并；
- QwenPaw：Issue 响应快，但合并吞吐偏低；
- Hermes Agent：Canary 已发，但正式内容和兼容性边界不清；
- LobsterAI/OpenHuman：多数修复闭环更干净；
- NanoBot：功能多，但没有新 Release。

生态下一阶段不只看谁提交得快，更要看谁能把安全与稳定性修复 **稳定、可审计地交付到用户环境**。

---

## 决策建议

### 若目标是构建完整个人 AI 助手平台

优先关注 **OpenClaw**，其渠道、Gateway、插件、浏览器和记忆覆盖最完整；但应等待其 Windows 托管、原子更新、长会话内存和子代理交付问题进入正式稳定版本。

### 若目标是快速搭建轻量 Agent 或研究多 Provider

优先关注 **NanoBot**，其 Python 架构、WebUI 和 Provider 接入较友好；主要风险是发布闭环和长期冲突 PR。

### 若目标是大规模自托管、多 Profile 和安全治理

优先关注 **Hermes Agent**，其 Gateway 隔离、审批、脱敏和工具集治理最系统；需要等待安全批次合并并提供更完整的 Canary Changelog。

### 若目标是渠道、本地模型和 Console 组合

优先关注 **QwenPaw**。其功能广、Issue 质量高、修复响应快，但 2.3.0 回归较多，应优先等待 2.3.1 补丁包。

### 若目标是桌面开箱即用体验

优先关注 **LobsterAI**；其 Cowork、技能管理、模型目录和 Windows/macOS 打包最接近成熟桌面产品。

### 若目标是浏览器自动化、工作流和支付

优先关注 **OpenHuman**；其浏览器密钥安全、x402 和工作流对象模型具有差异化，但依赖链复杂，需关注后续集成回归。

### 若目标是轻量、本地或边缘部署

可关注 **PicoClaw**，但当前应将其视为维护整合阶段项目，不宜仅凭上游同步量判断产品成熟度。

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目动态日报

**统计日期：2026-11-14**  
**数据范围：过去 24 小时 GitHub 更新**  
**项目健康度评估：良好偏活跃，但存在发布与问题闭环压力**

## 1. 今日速览

过去 24 小时共更新 **3 条 Issues** 与 **22 条 PR**，其中 PR 已合并或关闭 **13 条**、仍待处理 **9 条**，整体开发吞吐较高。  
今日工作主要围绕 **WebUI 体验优化、模型与 Provider 路由、工具安全校验、发布流程自动化** 展开，并有一批 PR 完成合并或关闭，项目持续向前推进。  
社区反馈暴露了三个值得关注的问题：Dream 记忆压缩内容截断、OpenAI 已退役图像模型仍被展示、QQ 附件上传因超时随机失败。  
当前没有新版本发布，且仍有 **7 条带 conflict 标记的重要 PR** 长期待处理；此外，已有多个功能 PR 尚未合并，说明版本落地和积压治理仍有空间。

---

## 2. 版本发布

过去 24 小时 **无新版本发布**，因此暂无可确认的更新内容、破坏性变更或迁移事项。

不过，项目正在推进 PyPI 可信发布流程：PR [#6642](https://github.com/HKUDS/nanobot/pull/6642) 提议在维护者发布经批准的 GitHub Release 后，自动启动受保护的 PyPI 发布任务。该改动有助于降低手工发布成本，但尚未进入待合并状态。

---

## 3. 项目进展

### 3.1 WebUI 交互与会话体验持续完善

今日多条 WebUI PR 被合并或关闭，主要覆盖会话切换、历史加载、运行状态展示和视觉细节：

- PR [#6653](https://github.com/HKUDS/nanobot/pull/6653)：稳定 WebUI 会话切换，改善输入框布局，并加入类似 macOS 的目标缺口展示。
- PR [#6659](https://github.com/HKUDS/nanobot/pull/6659)：修复历史内容尚未准备好时过早结束加载，避免九宫格加载指示器提前消失；**目前仍待合并**。
- PR [#6661](https://github.com/HKUDS/nanobot/pull/6661)：在折叠的对话轮次中展示最新活动，同时避免计时器位置跳动；**目前仍待合并**。
- PR [#6657](https://github.com/HKUDS/nanobot/pull/6657)：将远程健康检查限制在存在可见需求时，减少后台目录轮询和无效远程连接检查。
- PR [#6650](https://github.com/HKUDS/nanobot/pull/6650)：刷新空白聊天欢迎界面，以更克制、稳定的 nanobot 标识替代随机问候语。
- PR [#6654](https://github.com/HKUDS/nanobot/pull/6654)：明确命令会话活动，避免将内部 session ID 或进程状态误解为已完成命令。
- PR [#6304](https://github.com/HKUDS/nanobot/pull/6304)：将安全的执行活动投影到跨渠道共享的进度边界，减少 WebUI 与其他渠道收到内部执行句柄或虚高活动计数。

此外，PR [#6656](https://github.com/HKUDS/nanobot/pull/6656)、[#6655](https://github.com/HKUDS/nanobot/pull/6655)、[#6658](https://github.com/HKUDS/nanobot/pull/6658) 分别优化欢迎标识描边、引用消息圆角和动画缓动工具类冲突，提升了视觉一致性。

### 3.2 模型路由与 Provider 能力增强

- PR [#6651](https://github.com/HKUDS/nanobot/pull/6651)：按模型预设能力路由图片输入，在文本模型与视觉模型组成的链路中保留用户原始图片输入，解决图片被静默移除后重试的问题。
- PR [#6647](https://github.com/HKUDS/nanobot/pull/6647)：新增“胜算云”Provider 配置模板，支持填写 Router API URL、API Key，并默认使用 Chat Completions；**仍待合并**。
- PR [#5234](https://github.com/HKUDS/nanobot/pull/5234)：接入 `mst-python` 元搜索 Provider，通过聚合多个搜索引擎并使用 RRF 融合结果，提高搜索覆盖度；该 PR 自 8 月创建以来仍未合并，且存在冲突。

### 3.3 工具安全、文件操作与抓取能力持续加固

- PR [#6486](https://github.com/HKUDS/nanobot/pull/6486)：补全工具参数 JSON Schema 校验，支持本地 `$ref`、`anyOf`、`oneOf` 和元组形式的 `items`，修复 MCP 工具嵌套参数漏检问题；已关闭。
- PR [#6616](https://github.com/HKUDS/nanobot/pull/6616)：集中管理具备作用域的文件操作，统一文件读写、编辑、补丁、目录列举及 Python 搜索的授权策略；**待合并且存在冲突**。
- PR [#6317](https://github.com/HKUDS/nanobot/pull/6317)：为 `web_fetch` 增加连续抓取偏移量，返回 `nextOffset` 与 `totalLength`，使 Agent 可分页读取长网页；**待合并且存在冲突**。
- PR [#6447](https://github.com/HKUDS/nanobot/pull/6447)：修复 Grep 对带 BOM 的 UTF-8、UTF-16、UTF-32 文件处理不正确的问题；**待合并且存在冲突**。
- PR [#6645](https://github.com/HKUDS/nanobot/pull/6645)：统一 Shell 执行与设置页沙箱检查的启动路径，减少平台判断重复并强化可信启动器边界。

### 3.4 整体推进程度

今日已关闭或合并的 PR 达到 **13 条**，占全部 PR 更新的 **59.1%**，说明大多数当日活动已经完成闭环。  
项目在 WebUI 稳定性、模型能力路由、工具权限与 Schema 校验方面均有实质推进；但 9 条待合并 PR 中包含多项高优先级或长期功能改动，说明“完成开发”与“进入可发布版本”之间仍有明显距离。

---

## 4. 社区热点

### 4.1 Issue #6649：Dream 只读取每个 checkpoint 的前 1000 个字符

- 链接：[Issue #6649](https://github.com/HKUDS/nanobot/issues/6649)
- 状态：Open
- 创建时间：2026-11-13；更新于 2026-11-14
- 评论数：2
- 热度判断：今日最值得关注的 Issue

**核心诉求：**  
自 [#5610](https://github.com/HKUDS/nanobot/issues/5610) 后，每次 compaction 都会将完整累计 checkpoint 追加到 `memory/history.jsonl`，但 `build_dream_prompt` 仍只保留每条记录的前 1000 个字符。checkpoint 尾部和中部的重要内容因此无法进入 Dream 的上下文，且游标随后继续前移，可能造成内容永久遗漏。

**背后的用户需求：**

1. Dream 应消费完整 checkpoint，而非固定截取开头内容；
2. 记忆压缩不能因字符上限而静默丢失长期信息；
3. 游标推进必须与实际消费范围保持一致。

当前没有直接对应的 fix PR，建议尽快补充。

### 4.2 Issue #6660：OpenAI 已退役图像模型仍出现在模型列表

- 链接：[Issue #6660](https://github.com/HKUDS/nanobot/issues/6660)
- 状态：Open
- 创建时间：2026-11-13
- 评论数：0

**核心诉求：**  
`gpt-image-1`、`dall-e-3` 和 `dall-e-2` 已分别被 OpenAI 退役，但 nanobot 仍在图像模型列表中提供这些选项。用户选择后会收到 API 错误，而不是在配置阶段获得明确反馈。

**背后的用户需求：**

- 模型目录应与供应商实际可用性同步；
- 退役模型应下架、禁用或明确标注；
- Provider 模型元数据需要具备可持续更新机制，避免依赖手工维护。

暂无直接对应的 fix PR。

### 4.3 Issue #6652：QQ 大附件随机上传失败

- 链接：[Issue #6652](https://github.com/HKUDS/nanobot/pull/6652)
- 状态：Open
- 创建时间：2026-11-13
- 评论数：0

**核心诉求：**  
QQ 渠道上传约 2.4 MB 的 PDF 时，约有一半概率报错：

```text
media upload failed: empty response
```

报告指出 botpy 默认 HTTP 超时仅 5 秒且没有重试，失败后用户只收到兜底文本。

**背后的用户需求：**

- 中等体积附件应可靠送达；
- 上传超时需要明确区分网络超时、服务端错误和空响应；
- 对幂等或可控重试的上传请求应增加退避重试；
- 失败时需保留原文件并向用户提供可理解的错误信息。

暂无直接对应的 fix PR。

### 4.4 PR 热度与协作情况

当前展示的 PR 均未提供明确评论数，点赞数也均为 0，因此无法仅根据现有数据确定“评论最多”或“反应最多”的 PR。  
从功能影响与更新规模看，值得维护者优先评审的是：

- [PR #6647](https://github.com/HKUDS/nanobot/pull/6647)：新增胜算云 Provider；
- [PR #6661](https://github.com/HKUDS/nanobot/pull/6661)：WebUI 最新活动展示；
- [PR #6616](https://github.com/HKUDS/nanobot/pull/6616)：统一作用域文件操作；
- [PR #6317](https://github.com/HKUDS/nanobot/pull/6317)：`web_fetch` 分页抓取；
- [PR #5234](https://github.com/HKUDS/nanobot/pull/5234)：元搜索 Provider 集成。

---

## 5. Bug 与稳定性

按潜在影响范围、发生概率及是否已有修复方案排序如下。

### P1 / 高优先级：Dream 记忆内容可能被永久遗漏

- Issue：[#6649](https://github.com/HKUDS/nanobot/issues/6649)
- 影响：长会话记忆压缩后，仅 checkpoint 前 1000 个字符进入 Dream；游标推进后遗漏内容可能无法再次处理。
- 已有 fix PR：**否**
- 建议：优先检查 `build_dream_prompt` 的截断逻辑和游标推进语义，补充超长 checkpoint、多轮 compaction 及游标一致性测试。

### P1 / 高优先级：QQ 附件上传存在高失败率

- Issue：[#6652](https://github.com/HKUDS/nanobot/issues/6652)
- 影响：约 2 MB 以上附件可能因 5 秒超时随机失败，且缺少重试与有效错误恢复。
- 已有 fix PR：**否**
- 建议：增加可配置超时、指数退避重试、上传状态诊断，并测试不同文件大小和弱网环境。

### P2 / 中优先级：已退役 OpenAI 图像模型仍可选择

- Issue：[#6660](https://github.com/HKUDS/nanobot/issues/6660)
- 影响：配置阶段看似可用，请求时失败，造成无效调用和用户困惑。
- 已有 fix PR：**否**
- 建议：立即移除或标记退役模型，并增加模型元数据更新时间或自动同步机制。

### P2 / 中优先级：WebUI 历史内容可能过早显示加载完成

- Issue：暂无独立 Issue
- PR：[#6659](https://github.com/HKUDS/nanobot/pull/6659)
- 影响：首次响应可能只有记账信息或不完整片段，导致加载指示器过早撤回，历史消息显示不完整。
- 已有 fix PR：**是，待合并**

### P2 / 中优先级：图片输入在混合模型链路中可能被移除

- Issue：未提供直接 Issue 链接
- PR：[#6651](https://github.com/HKUDS/nanobot/pull/6651)
- 影响：链式回退到纯文本模型时，原始图片输入可能丢失，造成请求失败或语义损失。
- 已有 fix PR：**是，已关闭，通常意味着已合并**

### P2 / 中优先级：工具 Schema 校验遗漏复杂结构

- Issue：[#6485](https://github.com/HKUDS/nanobot/issues/6485)
- PR：[#6486](https://github.com/HKUDS/nanobot/pull/6486)
- 影响：MCP 工具使用 `$ref`、`anyOf`、`oneOf` 时，缺失必填字段或错误类型可能绕过校验。
- 已有 fix PR：**是，已关闭**

### P2 / 中优先级：Grep 对 BOM 文本识别失败

- Issue：未提供直接 Issue 链接
- PR：[#6447](https://github.com/HKUDS/nanobot/pull/6447)
- 影响：UTF-16、UTF-32 或带 BOM 的 UTF-8 文件可能被当作二进制，或导致 `^Hello` 等锚点搜索无结果。
- 已有 fix PR：**是，待合并且存在冲突**

### 稳定性积极信号

- WebUI 远程健康检查优化已完成：[PR #6657](https://github.com/HKUDS/nanobot/pull/6657)
- 跨渠道执行活动状态已统一：[PR #6304](https://github.com/HKUDS/nanobot/pull/6304)
- 命令会话状态展示已澄清：[PR #6654](https://github.com/HKUDS/nanobot/pull/6654)
- Shell 与沙箱检查已统一启动路径：[PR #6645](https://github.com/HKUDS/nanobot/pull/6645)

总体而言，今日稳定性建设覆盖了 WebUI、工具调用、文件访问、模型路由和渠道执行，但三个新报告的用户侧问题仍缺少明确修复闭环。

---

## 6. 功能请求与路线图信号

### 6.1 Provider 生态扩展

- [PR #6647](https://github.com/HKUDS/nanobot/pull/6647)：增加胜算云网关配置模板。
- [PR #5234](https://github.com/HKUDS/nanobot/pull/5234)：增加 `mst-python` 元搜索 Provider。
- [PR #5797](https://github.com/HKUDS/nanobot/pull/5797)：为 Parallel 请求增加稳定的 nanobot User-Agent，以便统计集成采用情况。

**路线图判断：** Provider 扩展是明确方向，但新增 Provider 正从“代码支持”走向“可视化配置模板”。胜算云 PR 新鲜度更高，合并可能性相对更大；元搜索 PR 已积压约三个月且存在冲突，应先完成 rebase 和维护者决策。

### 6.2 WebUI 运行态与历史记录体验

- [PR #6661](https://github.com/HKUDS/nanobot/pull/6661)：折叠轮次中展示最新活动。
- [PR #6659](https://github.com/HKUDS/nanobot/pull/6659)：历史加载等待真实内容就绪。
- [PR #6653](https://github.com/HKUDS/nanobot/pull/6653)：稳定会话切换与目标展示。

**路线图判断：** WebUI 正在从“可用”向“可观察、可追踪、连续会话”演进。运行活动、加载状态和会话切换均属于同一体验主线，较可能进入下一批 WebUI 更新。

### 6.3 工具链和网页信息获取能力

- [PR #6317](https://github.com/HKUDS/nanobot/pull/6317)：`web_fetch` 增加分页偏移与长度元数据。
- [PR #6486](https://github.com/HKUDS/nanobot/pull/6486)：增强复杂 JSON Schema 校验。
- [PR #6616](https://github.com/HKUDS/nanobot/pull/6616)：统一作用域文件操作及授权策略。

**路线图判断：** 这些改动共同指向更可靠的长任务执行：Agent 能分页读取网页、正确理解 MCP 工具 schema，并在统一权限边界内访问文件。功能价值较高，但多项 PR 存在冲突，纳入下一版本前需要优先完成冲突解决和回归测试。

### 6.4 发布与供应链自动化

- [PR #6642](https://github.com/HKUDS/nanobot/pull/6642)：为获批 Release 增加 PyPI Trusted Publishing。

**路线图判断：** 自动化发布是近期版本工程的重要信号。它不直接产生用户功能，但可提升稳定版本发布频率和凭据安全性。由于没有新版本发布，该 PR 可能需要与下一批 release 准备同步推进。

---

## 7. 用户反馈摘要

### 真实使用痛点

1. **长会话记忆不可靠**  
   [#6649](https://github.com/HKUDS/nanobot/issues/6649) 表明用户已经在使用 Dream 与 checkpoint 压缩能力，并主动检查 `history.jsonl` 的行为。用户期望长期记忆能完整进入 Dream，而非只保留开头片段。其 2 条评论是今日唯一可见的 Issue 讨论，说明该问题获得了真实关注。

2. **多模态模型配置与实际能力脱节**  
   [#6660](https://github.com/HKUDS/nanobot/issues/6660) 反映用户会直接依据 nanobot 展示的模型列表选择图像模型。因此，列表陈旧不仅造成请求失败，也会降低用户对模型配置可信度的判断。

3. **实际附件交付仍不稳定**  
   [#6652](https://github.com/HKUDS/nanobot/issues/6652) 使用 2.4 MB PDF 作为可复现样本，说明问题已超出纯文本聊天范畴，进入文件处理工作流。随机失败比稳定失败更难排查，默认 5 秒超时是关键风险点。

4. **长网页读取能力仍有缺口**  
   [PR #6317](https://github.com/HKUDS/nanobot/pull/6317) 提议返回 `nextOffset` 和 `totalLength`，反映用户需要处理超出单次抓取窗口的长文档，而不是只获取截断摘要。

5. **多 Provider 用户需要更低的配置成本**  
   [PR #6647](https://github.com/HKUDS/nanobot/pull/6647) 强调可搜索模板、默认协议和用户自备 API Key，体现 Provider 接入正从开发者手工配置转向普通用户可配置化。

### 满意与积极信号

虽然现有数据没有提供更多用户评论，但多个已关闭 PR 表明维护团队正在积极处理：

- WebUI 会话与历史加载体验；
- 图片输入保留；
- MCP 工具参数校验；
- 文件权限和沙箱安全；
- 空白页、引用消息与动画细节。

这说明项目并非只在新增功能，也在持续修复影响日常使用的细节和可靠性问题。

---

## 8. 待处理积压

### 8.1 长期存在且存在冲突的重要 PR

以下 7 条待合并 PR 被标记为 conflict，应成为近期维护重点：

1. [PR #5234](https://github.com/HKUDS/nanobot/pull/5234)：`mst-python` 元搜索 Provider，2026-08-03 创建，积压约三个月。
2. [PR #6616](https://github.com/HKUDS/nanobot/pull/6616)：集中管理作用域文件操作，涉及安全边界。
3. [PR #6447](https://github.com/HKUDS/nanobot/pull/6447)：修复 BOM 文本 Grep 失败。
4. [PR #6317](https://github.com/HKUDS/nanobot/pull/6317)：`web_fetch` 分页抓取。
5. [PR #5797](https://github.com/HKUDS/nanobot/pull/5797)：Parallel 请求 User-Agent 标识。
6. [PR #6647](https://github.com/HKUDS/nanobot/pull/6647)：胜算云 Provider。
7. [PR #6659](https://github.com/HKUDS/nanobot/pull/6659)：修复历史内容加载完成判断。

**风险：** 冲突会持续扩大 rebase 成本。若长期不处理，功能价值较高的 PR 可能最终失去可合并性。

### 8.2 建议优先处理的开放 Issue

1. [Issue #6649](https://github.com/HKUDS/nanobot/issues/6649)：Dream 截断导致潜在记忆永久丢失；已有 2 条评论。
2. [Issue #6660](https://github.com/HKUDS/nanobot/issues/6660)：退役图像模型仍展示，修复成本较低、可快速闭环。
3. [Issue #6652](https://github.com/HKUDS/nanobot/issues/6652)：QQ 附件上传随机失败，建议补充超时、重试和错误分类。

### 8.3 版本闭环提醒

- 过去 24 小时没有新版本发布；
- [PR #6642](https://github.com/HKUDS/nanobot/pull/6642) 尚未合并；
- 多个已完成或接近完成的 WebUI、模型路由、工具安全修复尚未形成新 Release。

建议维护者明确下一版本范围，优先纳入安全与正确性修复，再安排 Provider 和 WebUI 增强功能，避免积压继续扩大。

---

## 总结

NanoBot 今日呈现 **高开发吞吐、重体验与安全修复、但发布闭环偏弱** 的状态。13 条 PR 已合并或关闭，WebUI、模型路由、工具校验和执行权限均有推进；同时，Dream 截断、QQ 附件超时和模型目录过期说明真实部署中的可靠性仍需加强。下一阶段的关键不只是继续增加功能，而是解决冲突 PR、关闭三个用户可见问题，并尽快形成可验证的新版本发布。

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目动态日报

**日期：2026-11-14**  
**数据范围：过去 24 小时 GitHub Issues / Pull Requests 更新**  
**项目健康度评估：一般偏积极（维护活跃，但问题闭环与版本发布不足）**

---

## 1. 今日速览

- 过去 24 小时共更新 **1 条 Issue**、**3 条 PR**，所有 PR 均已关闭，无待合并 PR，也没有新版本发布。
- 今日关闭的 PR 主要用于**批量合并既有修复**及**同步上游主分支**，说明项目仍在快速吸收外部贡献和上游变更。
- 唯一活跃 Issue 报告：在使用无需 API Key 的模型提供商时，控制台可以正常运行，但 **Web UI 无法启动 Gateway**；问题已标记为 `stale`，目前未见对应修复 PR。
- 整体来看，项目维护活动不低，但当前更新以“合并收口”和“代码同步”为主，缺少面向用户的新版本、发布说明以及明确的功能路线图。
- 综合健康度判断：**代码整合活跃，用户问题响应与发布节奏偏弱**。

---

## 3. 项目进展

> 今日无新版本发布，因此暂无版本更新内容、破坏性变更或升级迁移说明。

### 重要 PR 更新

#### [PR #1558：合并 PR #1344、#1342、#1341、#1331](https://github.com/sipeed/picoclaw/pull/1558)

- **状态：CLOSED**
- **作者：** @xuwei-xy
- **今日进展：** 集中合并多个既有修复 PR。
- **作用：** 将分散在多个 PR 中的修复统一纳入主线，降低后续维护和评审成本。
- **风险提示：** PR 摘要未列出各修复对应的具体 Issue、行为变化和测试结果，需结合被合并 PR 进一步确认是否包含配置兼容性或行为调整。

#### [PR #1546：合并 PR #1480、#1479、#1478、#1473、#1467](https://github.com/sipeed/picoclaw/pull/1546)

- **状态：CLOSED**
- **作者：** @xuwei-xy
- **今日进展：** 批量汇总并关闭五个修复 PR。
- **作用：** 推进既有修复进入主线，属于典型的维护收口工作。
- **风险提示：** 当前摘要只说明合并范围，缺少逐项变更清单、回归验证结果和升级注意事项；对于下游用户是否需要调整配置无法仅凭当前数据判断。

#### [PR #2810：同步上游 1095 个提交并迁移 MagicForm 定制](https://github.com/sipeed/picoclaw/pull/2810)

- **状态：CLOSED**
- **作者：** @nuestraai
- **今日进展：** 同步 `sipeed/picoclaw` 上游约 **1,095 个提交**，并将 6 个自定义提交迁移到新版目录和模块结构。
- **结构变化：**
  - Agent Loop 拆分为多个 `agent_*.go` 文件；
  - 工具模块重组为 `pkg/tools/{fs,integration}/`；
  - Channel 配置迁移到新的目录布局。
- **推进程度：** 这是今日影响范围最大的工程更新，有助于降低长期分叉成本，并将定制代码重新对齐上游架构。
- **风险提示：** 大规模同步涉及目录、模块和配置结构变化。虽然 PR 标题未声明存在破坏性变更，但自定义分支在合并后仍应重点回归 Agent Loop、工具调用、Channel 配置及 MagicForm 定制逻辑。

### 今日整体推进评价

- **代码推进：较积极。** 三个 PR 均已关闭，且包含多修复合入和大规模上游同步。
- **交付推进：一般。** 今日没有新版本发布，用户无法从 Release 层面直接确认修复与变更是否已可获取。
- **维护质量：需关注。** 批量关闭 PR 有助于清理贡献队列，但摘要缺少逐项变更说明，可能增加审计和回归成本。

---

## 4. 社区热点

### [Issue #3461：使用无 API Key 提供商时，Web UI 无法启动 Gateway](https://github.com/sipeed/picoclaw/issues/3461)

- **状态：** OPEN
- **标签：** `stale`、`BUG`
- **作者：** @AuthorProxy
- **创建时间：** 2026-11-06
- **最近更新：** 2026-11-13
- **互动数据：** 1 条评论、0 个点赞

这是过去 24 小时内唯一活跃的 Issue，也是当前最值得关注的社区问题。

**用户诉求：**

1. 控制台可以正常启动并使用无 API Key 的模型提供商；
2. Web UI 却缺少可用的启动入口，或启动 Gateway 失败；
3. 用户希望 CLI 与 Web UI 在此类提供商配置下保持一致的操作能力。

**热度判断：**

- 评论数与点赞数都不高，尚不能称为高热度讨论；
- 但问题直接影响 Web UI 的核心使用流程，且标签已经包含 `stale`，说明其价值更多体现在**功能可用性缺口**，而不是短期热度。

---

## 5. Bug 与稳定性

### P1｜高关注：Web UI 无法启动 Gateway（无 API Key 提供商场景）

- **Issue：** [#3461](https://github.com/sipeed/picoclaw/issues/3461)
- **现象：** 控制台运行正常，但在配置无需 API Key 的模型提供商时，Web UI 无法启动 Gateway。
- **影响范围：** 使用 `provider` 为空或使用免 Key 网关的 Web UI 用户；可能影响对无 API Key 模型服务的统一接入。
- **当前状态：** Issue 仍为开放状态，并被标记为 `stale`。
- **是否有修复 PR：** **当前数据中未见明确对应的 fix PR。**
- **稳定性评价：** 单个场景问题，未见崩溃或大面积故障报告，因此不应判定为全局阻断；但对目标用户而言属于核心流程不可用。
- **建议关注：**
  - 确认 Web UI 是否错误地将无 API Key 提供商判定为“未配置”；
  - 补充 CLI 与 Web UI 的配置解析一致性测试；
  - 若暂不修复，应移除 `stale` 标签或给出明确回应，避免问题被自动清理。

### 今日其他 Bug

- 今日没有新增 Bug Issue。
- 关闭的 PR 中包含多个既有修复，但当前摘要没有给出具体 Bug 编号与行为描述，无法可靠列出逐项修复清单或确认是否覆盖 #3461。

---

## 6. 功能请求与路线图信号

### 明确的功能可用性诉求

- **Web UI 支持免 API Key 提供商并可正常启动 Gateway：**  
  来源为 [#3461](https://github.com/sipeed/picoclaw/issues/3461)。严格而言这是 Bug，但同时反映了“CLI 与 Web UI 能力对齐”的产品需求。
- 潜在纳入下一版本的优先级：
  1. 修复 Web UI 对无 API Key 配置的识别；
  2. 为此类提供商补充端到端或集成测试；
  3. 在 UI 中提供明确的启动失败原因及配置提示；
  4. 后续通过 Release Notes 验证修复是否进入可发布版本。

### 大规模同步后的架构演进信号

- 来源为 [PR #2810](https://github.com/sipeed/picoclaw/pull/2810)。
- Agent Loop、工具系统和 Channel 配置的结构重组表明项目正从单体式目录布局向更模块化架构演进。
- 若同步后的代码通过完整回归测试，下一版本可能重点体现：
  - 上游功能与修复的集中同步；
  - MagicForm 定制能力在新架构上的延续；
  - 工具模块和 Channel 配置管理能力的改善。
- 但当前没有新版本，也没有公开路线图，因而只能判断为**架构演进信号**，不能确认具体发布时间。

---

## 7. 用户反馈摘要

基于 [#3461](https://github.com/sipeed/picoclaw/issues/3461) 当前提供的 Issue 摘要及 1 条评论元数据，可提炼出以下反馈：

### 真实使用场景

- 用户正在使用 `api_base` 指向兼容网关、且不要求 API Key 的模型服务；
- 用户能够通过控制台正常运行 PicoClaw，说明其模型连接和基础执行链路大概率可用；
- 用户转向 Web UI 后，无法从界面启动 Gateway，暴露出不同入口之间的能力不一致。

### 主要痛点

- **入口不一致：** CLI 可用而 Web UI 不可用，增加排障成本。
- **配置兼容性存疑：** 无 API Key 提供商可能是合法配置，不应仅因缺少 Key 就阻断启动。
- **错误提示不足：** 摘要未显示明确的失败原因，用户难以判断是配置解析、前端按钮逻辑，还是 Gateway 鉴权假设导致。

### 满意度信号

- 正面信号：控制台路径能够工作，表明核心能力并非完全不可用。
- 不满点：Web UI 未覆盖同一配置场景，降低了产品完整性和可信赖感。
- 社区反馈量较少，当前主要依据单条 Issue，无法代表更广泛用户意见。

---

## 8. 待处理积压

### 重要未闭环 Issue

#### [Issue #3461：Web UI 无法启动 Gateway](https://github.com/sipeed/picoclaw/issues/3461)

- 已创建约 8 天，最近仍有更新，但标签为 `stale`。
- 没有明确修复 PR，也没有关闭记录。
- 建议维护者：
  - 确认是否已有可复现路径；
  - 分配维护者或贡献者跟进；
  - 补充 Web UI 与 CLI 配置解析差异；
  - 若已修复或不再适用，及时关闭并说明原因。

### PR 积压变化

- 今日 3 条 PR 均已关闭，**待合并 PR 为 0**。
- [#1558](https://github.com/sipeed/picoclaw/pull/1558) 和 [#1546](https://github.com/sipeed/picoclaw/pull/1546) 对多个历史 PR 进行了集中合并，说明历史贡献队列正在被批量收口。
- [PR #2810](https://github.com/sipeed/picoclaw/pull/2810) 的同步规模达约 1,095 个提交并涉及目录重构，合并后应保留足够的测试观察期，特别关注：
  - Agent Loop 行为一致性；
  - 文件系统与集成工具调用；
  - Channel 配置兼容性；
  - MagicForm 定制功能回归。

---

## 今日结论

PicoClaw 今日的主要动作是**批量合入修复并完成大规模上游同步**，代码维护活跃度较高；但 **Issue #3461 的 Web UI 启动问题仍缺少明确修复闭环**，同时今日无新版本发布，外部用户难以及时获取和验证这些改进。当前最值得维护者关注的是明确 #3461 的状态与责任人，并为 #2810 所涉及的大规模架构同步补充可追踪的回归测试与发布说明。

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI 项目动态日报

**日期：2026-11-14**  
**数据范围：过去 24 小时 GitHub Issues / Pull Requests 更新**  
**项目主页：** [netease-youdao/LobsterAI](https://github.com/netease-youdao/LobsterAI)

---

## 1. 今日速览

过去 24 小时共更新 **2 条 Issues** 与 **24 条 PR**，其中 **20 条 PR 已合并或关闭、4 条仍待处理**，今日没有新版本发布。开发重点集中在 **Cowork 会话可靠性、OpenClaw 集成维护、技能包管理、模型目录更新及发布工程稳定性** 等方向。两个仍有较高现实影响的存量问题——损坏消息元数据导致会话不可加载、子 Agent 人格配置双轨——均于今日关闭，且前者已有对应修复 PR 合入。

整体来看，项目保持较高开发吞吐，今日 PR 更新量达到 Issues 更新量的 **12 倍**，说明当前主要处于集中修复、收敛和发布准备阶段。短期项目健康度评估为 **良好**：缺陷修复与工程维护推进明显，但仍有 **4 个开放 PR**、Electron 升级及模型目录刷新等待完成验证，且 Issues 数据几乎无评论、点赞与新讨论，社区反馈信号偏弱。

---

## 2. 版本发布

过去 24 小时 **无新版本发布**，因此暂无正式版本更新说明、破坏性变更或迁移指南。

不过，[Release/2026.11.9](https://github.com/netease-youdao/LobsterAI/pull/3083) 发布 PR 已关闭，意味着相关发布流程可能已经完成，但数据源未显示新的 GitHub Release。建议维护者补充核对正式 Release、安装包及变更日志是否同步发布。

---

## 3. 项目进展

### 3.1 Cowork 会话可靠性获得系统性修复

今日最重要的进展集中在 Cowork 历史消息、会话分叉和版本切换：

- [PR #3087：共享具备韧性的消息元数据解析逻辑](https://github.com/netease-youdao/LobsterAI/pull/3087)  
  将损坏的 `metadata` 字段改为逐条解析，避免单条坏数据导致整个会话历史加载失败，并与 `CoworkStore` 共用恢复逻辑。

- [PR #3061：分页读取时容忍损坏的元数据](https://github.com/netease-youdao/LobsterAI/pull/3061)  
  修复分页会话消息中任意一行 JSON 损坏导致读取整体失败的问题，直接关联 [#639](https://github.com/netease-youdao/LobsterAI/issues/639)。

- [PR #3086：支持编辑和切换 Gateway 未记录的对话轮次](https://github.com/netease-youdao/LobsterAI/pull/3086)  
  修复用户快速停止任务时，Gateway 尚未记录用户消息，进而导致该轮消息无法编辑或切换版本的问题。

- [PR #3082：分叉会话中保留工具调用与结果配对关系](https://github.com/netease-youdao/LobsterAI/pull/3082)  
  分叉时不再直接删除 `toolUseId`，而是生成每个分叉会话独立的工具调用标识，避免并行工具结果失去对应关系。

- [PR #3078：修复历史记录加载守卫无法释放](https://github.com/netease-youdao/LobsterAI/pull/3078)  
  解决旧消息锚点未完成固定、手势取消固定或提交先于重新挂载等情况造成加载状态永久卡住的问题。

这些变更共同提升了 Cowork 的**历史消息容错、编辑一致性、分叉可用性和加载稳定性**，属于直接影响核心使用体验的实质性进展。

### 3.2 OpenClaw 集成及删除安全得到加强

- [PR #3092：维护任务尊重已删除 Agent](https://github.com/netease-youdao/LobsterAI/pull/3092)  
  自动维护将跳过已删除智能体对应的逻辑或物理归属，媒体 GC 也会检查删除日志和路径保护，避免误删仍需保留的数据库、附件或清理存活智能体数据。该 PR 描述称已完成 **98 个补丁的干净应用校验**，以及 **7 个定向测试文件、166 项测试**。

- [PR #3085：精简托管的 AGENTS.md 内容和初始模板](https://github.com/netease-youdao/LobsterAI/pull/3085)  
  减少每次模型请求中重复或未使用的上下文，降低冷启动 Token 消耗，同时保留必要规则。

这两项分别解决了**删除后的数据安全**与**长期上下文成本**问题，表明团队正在同步改善运行时可靠性和资源效率。

### 3.3 技能管理持续收敛

- [PR #3091：将字节完全一致的本地 ZIP 视为同一技能](https://github.com/netease-youdao/LobsterAI/pull/3091)  
  当前仍开放。该 PR 拟修复重复导入同一本地技能包时生成带 `-1` 后缀副本的问题。

- [PR #3088：减少内置技能打包数量并保留用户副本](https://github.com/netease-youdao/LobsterAI/pull/3088)  
  新安装的内置技能从 **27 个减少至 19 个**，已有用户的技能副本、启用状态和本地化名称继续保留，原有技能转为可删除的用户技能。

- [PR #3079：技能选择器增加“最近使用”分组](https://github.com/netease-youdao/LobsterAI/pull/3079)  
  最近使用技能最多展示 5 个并按新到旧排列；用户技能改为按显示名称排序，减少同步或升级后的位置跳动。

技能模块正在从“功能堆叠”转向**去重、减包、发现效率与用户资产保护**，方向较清晰。

### 3.4 Cowork 执行模式配置修复

- [PR #3090：读取已存储的 executionMode，而不是强制为 local](https://github.com/netease-youdao/LobsterAI/pull/3090)  
  当前仍开放。修复 `auto` 和 `sandbox` 模式写入后重新加载即丢失的问题，避免 OpenClaw 同步收到错误执行环境配置。

这是直接影响沙箱能力可用性的配置持久化缺陷，预计若测试通过，应优先纳入近期版本。

### 3.5 发布工程和跨平台构建修复

- [PR #3081：修复 Windows NSIS 卸载统计脚本路径](https://github.com/netease-youdao/LobsterAI/pull/3081)  
  将 `!include` 路径中的正斜杠改为反斜杠，解决 Windows `makensis` 阶段找不到 `nsis-uninstall-analytics.nsh`、导致打包失败的问题。

- [PR #3076：发布清单加入下载地址和部署入口](https://github.com/netease-youdao/LobsterAI/pull/3076)  
  提升发布快照的运营可用性，方便直接获取构建产物并提交人工部署任务。

### 3.6 模型与媒体能力继续扩展

- [PR #2859：刷新内置 Provider 模型目录](https://github.com/netease-youdao/LobsterAI/pull/2859)  
  当前仍开放。拟依据官方文档更新 DeepSeek、Moonshot、Qwen、智谱、MiniMax、小米等 Provider 的默认模型，并为已有用户执行本地配置迁移，删除下线模型 ID、注入新模型 ID。

- [PR #3080：支持 Seedream 图层分解和异常告警](https://github.com/netease-youdao/LobsterAI/pull/3080)  
  图像生成可请求图层分解，并向 Agent 暴露基础图、图层顺序、边界、OCR 文本及保存文件；分解不完整时保留图像和用量记录，同时展示告警而非盲目自动重试。

- [PR #3084：启动页显示应用内广告目标](https://github.com/netease-youdao/LobsterAI/pull/3084)  
  改善 `lobsterai://` 广告链接在 Gateway 启动期间的交互反馈，减少用户误以为点击无效。

### 3.7 UI 与广告体验优化

- [PR #3089：统一助手回复底部信息栏间距和中性朗读状态](https://github.com/netease-youdao/LobsterAI/pull/3089)  
  调整时间、模型、积分、复制、分叉和朗读入口的视觉间距及状态表现。

- [PR #2374：增加永久隐藏侧边栏广告的设置项](https://github.com/netease-youdao/LobsterAI/pull/2374)  
  在设置中加入持久化开关，解决用户只能临时关闭单条广告、无法长期隐藏的问题。

---

## 4. 社区热点

### 4.1 讨论与反应数据说明

今日更新的 Issues 和 PR 页面几乎均显示：

- **评论数：0 或 undefined**
- **点赞数：0**

因此，当前无法仅凭评论数或点赞数识别真正的“最热门”内容。以下为今日**业务影响较高、持续时间较长或修复关注度较高**的条目，而非严格意义上的社区互动榜首。

### 4.2 重点热点

1. **[Issue #639：损坏的 metadata 导致整个 Session 无法加载](https://github.com/netease-youdao/LobsterAI/issues/639)**  
   - 创建于 2026-03-22，历时约八个月后关闭。  
   - 核心诉求是提高历史消息的局部容错，避免单条坏数据造成整个会话不可用、用户无法自行恢复。  
   - 已有 [#3061](https://github.com/netease-youdao/LobsterAI/pull/3061) 和 [#3087](https://github.com/netease-youdao/LobsterAI/pull/3087) 两个直接修复 PR。

2. **[Issue #3035：子 Agent 的 IDENTITY.md / SOUL.md 双轨存储](https://github.com/netease-youdao/LobsterAI/issues/3035)**  
   - 创建于 2026-11-09，短时间即关闭。  
   - 用户痛点是 UI 配置、文件内容和运行时实际读取来源不一致，Agent 自主修改还可能被静默回滚。  
   - 该问题体现用户对“配置单一事实来源”和人格修改可追踪性的强烈需求。

3. **[PR #3092：维护流程尊重已删除 Agent](https://github.com/netease-youdao/LobsterAI/pull/3092)**  
   - 虽无公开评论，但涉及已删除智能体的数据库、附件与自动 GC，属于高数据风险场景。  
   - PR 声称进行了完整补丁校验和 166 项定向测试，是今日验证信息最充分的变更之一。

4. **[PR #3083：Release/2026.11.9](https://github.com/netease-youdao/LobsterAI/pull/3083)**  
   - 覆盖主程序、OpenClaw、Skills、Cowork、Windows/macOS、Artifacts 等多个模块。  
   - 其关闭意味着阶段性发布工作已收敛，但需确认正式 Release 是否同步。

5. **[PR #3037：Electron 43.5.0 升级至 43.8.7](https://github.com/netease-youdao/LobsterAI/pull/3037)**  
   - 当前仍开放。  
   - 关注点是 Electron 运行时安全修复与兼容性收益，同时需要评估升级带来的渲染进程、IPC、窗口行为变化。

### 社区信号判断

今日没有形成高评论、高点赞的公开讨论热点，说明项目当前更多由维护者和自动化机器人驱动，而不是开放式社区协作。对 AI Agent 项目而言，这并不等于用户参与度健康：两个关键问题均无评论和点赞，可能意味着用户遇到问题后缺少持续反馈、确认或复测渠道。

---

## 5. Bug 与稳定性

按对用户数据、会话连续性和任务执行的影响排序：

### 严重

1. **单条消息元数据损坏导致整个 Session 加载失败**
   - Issue：[#639](https://github.com/netease-youdao/LobsterAI/issues/639)
   - 影响：历史消息无法打开，UI 加载失败，用户可能无法自行恢复会话。
   - Fix 状态：**已有修复**
     - [#3061](https://github.com/netease-youdao/LobsterAI/pull/3061)
     - [#3087](https://github.com/netease-youdao/LobsterAI/pull/3087)
   - 建议关注：是否需要进一步提供数据库修复工具、损坏记录定位和用户级导出能力。

2. **子 Agent 人格配置双轨，运行时与 UI 读取不一致**
   - Issue：[#3035](https://github.com/netease-youdao/LobsterAI/issues/3035)
   - 影响：`IDENTITY.md` / `SOUL.md` 修改可能被静默回滚，Agent 行为与用户设置不一致。
   - Fix 状态：**Issue 已关闭，但本次数据未展示直接对应 PR**。
   - 风险：需确认是否通过未展示的关联 PR、其他 PR 或手工处理完成，并验证多 Agent 场景不会回退。

3. **删除 Agent 后维护流程可能误开受保护数据库或误删附件**
   - PR：[#3092](https://github.com/netease-youdao/LobsterAI/pull/3092)
   - 影响：潜在触发启动迁移、插件清理失败，或错误删除保留会话的附件。
   - Fix 状态：**修复已关闭合并**。
   - 验证：摘要显示已覆盖启动迁移、插件清理、只读删除日志及媒体保留/清理等场景。

### 较高

4. **Cowork 执行模式重新加载后被强制重置为 local**
   - PR：[#3090](https://github.com/netease-youdao/LobsterAI/pull/3090)
   - 影响：`auto` / `sandbox` 配置失效，可能改变命令执行环境和安全边界。
   - Fix 状态：**已有 PR，仍待合并**。

5. **快速停止任务后，Gateway 未记录的消息无法编辑或切换版本**
   - PR：[#3086](https://github.com/netease-youdao/LobsterAI/pull/3086)
   - 影响：用户无法修正刚发出但被快速取消的任务，也无法比较其不同版本。
   - Fix 状态：**已关闭合并**。

6. **分叉会话破坏工具调用与工具结果配对**
   - PR：[#3082](https://github.com/netease-youdao/LobsterAI/pull/3082)
   - 影响：并行工具调用在分叉后可能无法正确解析，造成结果缺失或上下文错乱。
   - Fix 状态：**已关闭合并**。

7. **历史记录加载守卫永久卡住**
   - PR：[#3078](https://github.com/netease-youdao/LobsterAI/pull/3078)
   - 影响：旧消息无法继续加载，界面可能长期保持加载状态。
   - Fix 状态：**已关闭合并**。

### 中等

8. **Windows NSIS 打包失败**
   - PR：[#3081](https://github.com/netease-youdao/LobsterAI/pull/3081)
   - 影响：Windows 安装包无法完成构建或发布。
   - Fix 状态：**已关闭合并**。

9. **重复导入同一本地技能 ZIP**
   - PR：[#3091](https://github.com/netease-youdao/LobsterAI/pull/3091)
   - 影响：产生 `-1` 等重复技能目录，污染技能列表并可能造成执行歧义。
   - Fix 状态：**已有 PR，仍待合并**。

10. **Electron 升级引入潜在兼容性风险**
    - PR：[#3037](https://github.com/netease-youdao/LobsterAI/pull/3037)
    - 影响：若升级后 IPC、窗口、下载、自动更新或打包行为变化，可能形成回归。
    - Fix 状态：**已有 PR，仍待合并**，需以完整测试结果为准。

---

## 6. 功能请求与路线图信号

### 已进入实现阶段

1. **技能包去重**
   - [#3091](https://github.com/netease-youdao/LobsterAI/pull/3091)
   - 明确提出用内容一致性判断本地技能包是否重复，而不是只依赖 `_meta.json`。
   - 若测试覆盖不同压缩元数据、时间戳和路径场景，预计适合近期合入。

2. **Cowork 沙箱与自动执行模式持久化**
   - [#3090](https://github.com/netease-youdao/LobsterAI/pull/3090)
   - 这是执行环境一致性问题，可能纳入下一版稳定性修复。
   - 建议增加 local / auto / sandbox 三种模式的重启保持及同步回归测试。

3. **Provider 默认模型目录更新**
   - [#2859](https://github.com/netease-youdao/LobsterAI/pull/2859)
   - 自 10 月创建以来持续更新，显示“官方模型目录同步”是近期路线图事项。
   - 由于涉及本地配置迁移和下线模型清理，建议在正式合入前验证旧模型引用、会话恢复和用户自定义模型不会被覆盖。

4. **Seedream 图层分解**
   - [#3080](https://github.com/netease-youdao/LobsterAI/pull/3080)
   - 已完成合并，说明项目正从单图生成向结构化图像编辑与 Agent 可消费产物延伸。

### 由存量 Issue 推导出的后续路线图

5. **子 Agent 人格配置统一存储**
   - [#3035](https://github.com/netease-youdao/LobsterAI/issues/3035)
   - 下一阶段可能需要建立 `IDENTITY.md` / `SOUL.md` 与 UI 配置、运行时加载之间的单一事实来源。
   - 建议增加文件修改检测、冲突提示、版本历史和明确回滚机制。

6. **损坏历史数据的用户级恢复工具**
   - [#639](https://github.com/netease-youdao/LobsterAI/issues/639)
   - 当前 PR 重点是“坏一条不拖垮全部”，后续仍可提供损坏消息诊断、导出、重建和迁移工具。

### 成熟度判断

近期最可能进入下一版本的内容是：

- Cowork 元数据容错、执行模式持久化；
- 技能包去重与内置包瘦身；
- Windows 构建修复；
- Provider 模型目录同步。

图层分解和模型目录更新涉及能力与数据迁移，仍需更充分的多平台回归验证。

---

## 7. 用户反馈摘要

今日 Issues 均无评论，公开数据中没有可直接提炼的满意评价或追加复现反馈。根据 Issue 和 PR 描述，可归纳出以下真实痛点：

### 核心痛点

- **历史会话的可用性优先于单条记录的完整性**：一条非法 JSON 不应阻断整个 Session，用户强调需要自行恢复能力。
- **配置必须与实际运行行为一致**：子 Agent 的 UI 人格设置、磁盘文件和运行时读取来源分裂，会直接破坏用户对 Agent 身份的信任。
- **快速操作不能造成不可编辑状态**：用户停止任务后仍可能需要修改原请求，不能因 Gateway 写入延迟而永久失去编辑机会。
- **分叉与并行工具调用必须保持语义完整性**：工具结果需要稳定关联工具调用，否则 Agent 的执行轨迹不可信。
- **删除操作必须具备明确的数据安全边界**：删除 Agent 后仍需保留日志、数据库和附件，后台维护不能越权清理。
- **广告和交互反馈应可预测**：应用内链接点击后应有明确目标提示，侧边栏广告则应允许永久关闭。

### 满意度信号

今日没有点赞或评论数据，无法量化用户满意度。PR 中出现“最近使用技能”“永久隐藏广告”“图层分解”等体验增强，说明维护者在主动响应高频操作与内容生成需求，但缺少社区反馈闭环。

---

## 8. 待处理积压

### 8.1 当前开放 PR

1. **[PR #3091：本地技能 ZIP 内容去重](https://github.com/netease-youdao/LobsterAI/pull/3091)**  
   - 直接解决重复安装和目录污染。
   - 建议补充 ZIP 元数据不同但文件内容相同、压缩算法不同、部分同名不同内容的测试。

2. **[PR #3090：恢复 Cowork executionMode](https://github.com/netease-youdao/LobsterAI/pull/3090)**  
   - 影响沙箱和自动执行模式，属于应优先处理的配置正确性问题。
   - 建议验证升级迁移、旧版本配置默认值及 OpenClaw 同步方向。

3. **[PR #3037：升级 Electron 至 43.8.7](https://github.com/netease-youdao/LobsterAI/pull/3037)**  
   - 自 2026-11-09 创建，已持续数天。
   - 建议确认 Windows/macOS 全量回归、自动更新、下载、窗口生命周期、IPC 与签名打包结果。

4. **[PR #2859：刷新内置模型目录](https://github.com/netease-youdao/LobsterAI/pull/2859)**  
   - 自 2026-10-13 创建，是当前开放项中存续时间最长者。
   - 需要重点审核下线模型迁移是否会影响用户会话、Agent 配置和自定义 Provider。

### 8.2 已关闭但需跟进确认

5. **[Issue #3035：子 Agent 人格配置双轨](https://github.com/netease-youdao/LobsterAI/issues/3035)**  
   - Issue 已关闭，但所给数据没有明确对应修复 PR。
   - 建议补充关联 PR、测试场景及回滚说明，并请报告者复测 Windows 新建子 Agent 场景。

6. **[Issue #639：损坏 metadata 阻断会话](https://github.com/netease-youdao/LobsterAI/issues/639)**  
   - 已有多个修复 PR，但该 Issue 存续时间较长。
   - 建议确认修复已进入正式版本，并补充“损坏记录标识、导出、重建”能力，避免用户仍只能依赖人工数据库操作。

### 8.3 项目维护建议

- 今日 **24 条 PR 更新中 20 条已关闭、4 条仍开放**，合并收敛率较高。
- 建议维护者明确剩余 4 个 PR 的合入条件，优先处理 `executionMode` 与技能去重。
- Electron 升级和模型目录迁移应各自建立明确验收清单。
- 对两个长期问题建立回归测试闭环，避免同类损坏数据或双轨配置再次出现。

---

## 总体健康度结论

**综合评级：良好，偏高开发活跃度、中等社区活跃度、稳定性持续改善。**

项目今日的主要成就是将多个 Cowork 与 OpenClaw 边缘故障转化为可恢复、可测试的稳定行为，并同步降低技能包与模型请求冗余。当前最值得关注的不是新增功能数量，而是以下四项：

1. 4 个开放 PR 是否及时合入；  
2. 子 Agent 双轨人格问题是否有可追溯修复；  
3. 元数据损坏修复是否进入正式版本；  
4. Electron 与模型目录迁移的跨平台、存量用户回归是否充分。

</details>

<details>
<summary><strong>QwenPaw</strong> — <a href="https://github.com/agentscope-ai/QwenPaw">agentscope-ai/QwenPaw</a></summary>

# QwenPaw 项目动态日报 · 2026-11-14

## 一、今日速览

- 过去 24 小时共 **13 条 Issue 更新**（11 条新开/活跃、2 条关闭）与 **29 条 PR 更新**（26 条待合并、3 条已合并/关闭），今日**无新版本发布**，最新正式版仍为 2.3.0（2026-11-11）。
- 社区活跃度处于**高位**：单日新增 Issue 11 条、PR 29 条，贡献者来源广泛（含 2 位首次贡献者标记），说明 2.3.0 发布后的缺陷反馈与功能开发并行推进。
- 缺陷反馈**高度集中于 2.3.0 版本**：Hub 模型网关、渠道（微信/钉钉）、会话模型钉住、插件升级迁移等均出现线上可复现问题，属于典型的"发版后回归暴露期"。
- 修复侧同样密集：至少 **8 个 open PR 直接对应已报告的 Issue**（#8718→#8729、#8727→#8728、#8714→#8719、#8709→#8715/#8721/#8720 等），响应链路较通畅。
- 需要关注的是**积压**：多个 10 月及更早的长期 PR（#8431、#8532、#8133、#8268）仍处于 Under Review 状态未推进，合并节奏明显慢于新 PR 流入速度。

---

## 二、版本发布

**今日无新版本发布。**

- 现行最新版本：**v2.3.0**（2026-11-11 发布，PyPI）。
- 版本相关 Issue 显示 **2.3.1 尚未发布**，用户明确提及"no 2.3.1 available"（见 [#8709](https://github.com/agentscope-ai/QwenPaw/issues/8709)）。
- 待发布信号：
  - **Creator 子模块** 2.0.4 → 2.0.5 打包 PR 已就绪（[#8654](https://github.com/agentscope-ai/QwenPaw/pull/8654)），仅包含上次上游发布（`d09c34f6c`）之后完成的改动。
  - 主版本 2.3.1 的候选修复已散落在多个 open PR 中，若收敛合并，很可能成为下一个补丁版本的核心内容（详见第六节"下一版本路线图信号"）。

---

## 三、项目进展（今日合并/关闭）

> 数据快照显示今日 PR 合并/关闭共 3 条，但未提供具体合并条目详情；以下按"已闭环的重要变更"与"待合并的关键推进项"两部分说明。

**已闭环（2 条 Issue 关闭）**

| 编号 | 标题 | 价值 |
|---|---|---|
| [#6321](https://github.com/agentscope-ai/QwenPaw/issues/6321) | [Feature] AGENTS.md 支持工具调用的前置条件规则 | 让 Agent 在改文件前自动执行强制校验步骤（如同步检查 MEMORY.md 中的日期、用户姓名等），显著降低"规则写了但 Agent 不遵守"的概率。属**治理能力**升级，已完成。 |
| [#7943](https://github.com/agentscope-ai/QwenPaw/issues/7943) | [Bug] Windows 沙箱在盘符根目录工作区可能锁死卷 | 修复 Windows 沙箱 ACL 继承写入导致卷锁定的问题，对 Windows 部署用户是关键稳定性修复。 |

**待合并的关键推进项（今日有更新的重点 PR）**

- **会话存储重构**：[#8532](https://github.com/agentscope-ai/QwenPaw/pull/8532)（size/XXXL, Under Review）引入 append-only SQLite 会话存储、分页历史与原生 Turn fork，替代原有的"可变快照 + 大窗口加载"。这是运行时恢复、重连、历史分叉一致性的**基础设施级改造**，影响面最大。
- **插件 CLI 与扩展点**：[#8554](https://github.com/agentscope-ai/QwenPaw/pull/8554)（size/XXXL）将插件命令挂入 Click 命令树，并打通插件注册表、依赖检查与资源生命周期；同时 [#8071](https://github.com/agentscope-ai/QwenPaw/issues/8071) 提出"插件可感知的主题扩展点"，二者共同指向**插件生态的可扩展性方向**。
- **Console 本地推理控制**：[#8648](https://github.com/agentscope-ai/QwenPaw/pull/8648)（size/XL）配合 #8649（llama.cpp GPU + 自动更新）、#8647（托管 MLX + 自动更新）构成同一功能栈，为 Console 引入本地引擎、GPU 调度与自动更新三件套。
- **Codex/Harness 稳定性**：[#8723](https://github.com/agentscope-ai/QwenPaw/pull/8723) 处理 app-server 断连时当前轮挂起，下一轮重建连接并恢复已保存 Codex 线程；[#8722](https://github.com/agentscope-ai/QwenPaw/pull/8722) 将工具输出实时预览限制为最近 4096 字符，解决事件体积随输出膨胀的问题。
- **任务追踪器清理**：[#8268](https://github.com/agentscope-ai/QwenPaw/pull/8268) 修复完成回调挂起导致 `TaskTracker._runs` 永久残留 `running` 状态的问题（#8173 的清理半边）。

**整体推进评估**：今日合并量（3）明显小于 PR 流入量（29），"提出快、合并慢"是当前最突出的节奏特征；但待合并 PR 覆盖了会话存储、插件扩展、本地推理三条主线，**技术方向清晰，质量门槛较高**，健康度中等偏上。

---

## 四、社区热点

**最活跃讨论（按评论数）**

| 排名 | 条目 | 评论/反应 | 链接 |
|---|---|---|---|
| 1 | [#8071](https://github.com/agentscope-ai/QwenPaw/issues/8071) 插件侧主题扩展点（语义 token 覆盖层） | 13 评论 | [#8071](https://github.com/agentscope-ai/QwenPaw/issues/8071) |
| 2 | [#8711](https://github.com/agentscope-ai/QwenPaw/issues/8711) RetryChatModel 空响应自动重试一次 | 2 评论 | [#8711](https://github.com/agentscope-ai/QwenPaw/issues/8711) |
| 3 | [#8718](https://github.com/agentscope-ai/QwenPaw/issues/8718) Hub 模型网关 Anthropic/MiniMax 预设瞬间失败 | 2 评论 | [#8718](https://github.com/agentscope-ai/QwenPaw/issues/8718) |
| 4 | [#8727](https://github.com/agentscope-ai/QwenPaw/issues/8727) Responses 续写摘要因默认推理消耗 4000 token 预算而失败 | 2 评论 | [#8727](https://github.com/agentscope-ai/QwenPaw/issues/8727) |
| 5 | [#7608](https://github.com/agentscope-ai/QwenPaw/issues/7608) 钉钉渠道流式模式支持交互卡片回调 | 2 评论 / 👍1 | [#7608](https://github.com/agentscope-ai/QwenPaw/issues/7608) |
| 6 | [#6321](https://github.com/agentscope-ai/QwenPaw/issues/6321) AGENTS.md 前置条件规则 | 2 评论（已关闭） | [#6321](https://github.com/agentscope-ai/QwenPaw/issues/6321) |

**背后诉求分析**

- **#8071 是今日讨论深度最高的需求**：Console 主题系统（#7741）已支持 6 套内置配色与 accent/hover/background/surface/圆角自定义，但插件侧仅有 `window.QwenPaw.chat.theme.set(pluginId, { colorPrimary })` 一个旋钮。插件作者希望获得**语义 token 级别的覆盖能力**（如 surface/elevated/danger 语义色），说明插件方已从"接入"阶段进入"品牌化/深度定制"阶段——这是生态成熟的正向信号。
- **#8727 与 #8711 同属"模型可靠性"诉求簇**：前者是推理模型吃掉输出预算导致续写摘要失败，后者是 HTTP 200 但流内容为空/thinking-only EOF。两者共同指向用户对**长任务连续性**的强需求，AI 编程助手"跑一半断掉"的容忍度很低。
- **#7608 钉钉交互卡片**：回调主题（`callback_type="STREAM"`）已创建但流客户端未订阅卡片回调 topic，用户在卡片上的单选、反馈等交互**无响应**。这说明"能力已铺好、链路未接通"的半成品状态需要收敛。

**响应最快的新 PR（今日新建）**

- [#8729](https://github.com/agentscope-ai/QwenPaw/pull/8729)（XS，@BeiMu-new）— 暴露 Anthropic/MiniMax 预设的 `request_headers`，直接修 #8718
- [#8728](https://github.com/agentscope-ai/QwenPaw/pull/8728)（S，首次贡献者 @deosiree）— 使用模型声明的 ThinkingControl 关闭推理，修 #8727
- [#8730](https://github.com/agentscope-ai/QwenPaw/pull/8730)（S）— 为 `/chat/stream` 与工具调用 SSE 端点补 `X-Accel-Buffering: no`，延续 #8522

---

## 五、Bug 与稳定性（按严重程度排列）

### P0 — 阻断核心链路

| 问题 | 影响 | 修复状态 |
|---|---|---|
| [#8718](https://github.com/agentscope-ai/QwenPaw/issues/8718) Hub 模型网关 Anthropic/MiniMax 预设**瞬间失败**（`provider_headers()` 调用缺失的 `request_headers()`），报 HTTP 502 `hub_upstream_error`，请求**根本没离开 Hub 进程** | 使用内置预设的 Hub 组织模型连接 100% 不可用 | ✅ 已有 fix PR [#8729](https://github.com/agentscope-ai/QwenPaw/pull/8729)（XS，11-14 提交） |
| [#8709](https://github.com/agentscope-ai/QwenPaw/issues/8709) 微信渠道**无法启动**（`ACCOUNT_IN_USE`），且发送成功被报为 `PLATFORM_RESULT_UNKNOWN` | 渠道完全不可用 + 状态误报，排障困难 | 🟡 拆分为 3 个 PR：[#8715](https://github.com/agentscope-ai/QwenPaw/pull/8715)（只修 bug 3 发送回执）、[#8721](https://github.com/agentscope-ai/QwenPaw/pull/8721)（重试恢复）、[#8720](https://github.com/agentscope-ai/QwenPaw/pull/8720)（避免误判 Bot 冲突、隔离工作区状态）；bug 1/2/4 未覆盖 |
| [#8725](https://github.com/agentscope-ai/QwenPaw/issues/8725) `/model` 在渠道内**无法切换会话级钉住模型**（只改 Agent 默认），钉住模型故障时无法自救 | 飞书/钉钉等渠道中，用户被锁死在故障模型上，会话彻底不可用（生产实测） | ❌ 暂未见对应 fix PR |

### P1 — 功能不可用 / 静默错误

| 问题 | 影响 | 修复状态 |
|---|---|---|
| [#8727](https://github.com/agentscope-ai/QwenPaw/issues/8727) Responses 续写摘要在模型默认推理消耗 4000 token 输出预算时**仍然失败**（`disable_thinking=True` 在 Responses 协议下反而剥离 `reasoning` 字段） | Scroll 生成的续写摘要不可用 | ✅ 已有 fix PR [#8728](https://github.com/agentscope-ai/QwenPaw/pull/8728)（首次贡献者，S） |
| [#8684](https://github.com/agentscope-ai/QwenPaw/issues/8684) 升级**不迁移内置渠道插件**，已安装的 Matrix 停留在旧源码，2.3.0 的修复永不生效 | 升级用户获得"假修复"：#8559/#8558/#8584/#8599/#8411 全部落空 | ❌ 暂未见对应 fix PR（属升级器设计缺陷） |
| [#8711](https://github.com/agentscope-ai/QwenPaw/issues/8711) RetryChatModel 遇到 HTTP 200 但无答案内容（空/thinking-only EOF）**不触发重试** | 重试机制对最常见的"空返回"失效 | ❌ 暂未见对应 fix PR |
| [#8712](https://github.com/agentscope-ai/QwenPaw/issues/8712) `execute_shell_command` 资源保护终止时**结果对模型不可见**，模型重复调用同一命令 | 触发 `QWENPAW_SHELL_MEMORY_LIMIT_MB=128` 时形成重复调用循环 | ❌ 暂未见对应 fix PR（由 @BeiMu-new 提交，同一作者活跃度高） |
| [#8723](https://github.com/agentscope-ai/QwenPaw/pull/8723) Codex app-server 断连时当前轮一直等待结束通知 | 对话轮次悬挂 | 🟡 PR 已提交 [#8723](https://github.com/agentscope-ai/QwenPaw/pull/8723)（S） |

### P2 — 平台/环境相关

| 问题 | 影响 | 修复状态 |
|---|---|---|
| [#8716](https://github.com/agentscope-ai/QwenPaw/issues/8716) Windows Creator 素材理解**写路径**仍用 raw `source_id`（`source:<uuid4 hex>`）作落盘目录分量 | Windows 下路径非法/冲突；与 #8547 的读侧修复形成"写侧根因未解" | ❌ 暂未见对应 fix PR（#8547 已有修复 PR #254） |
| [#7943](https://github.com/agentscope-ai/QwenPaw/issues/7943) Windows 沙箱 ACL 在盘符根工作区**锁死卷** | Windows 部署灾难性风险 | ✅ 已关闭（Issue 关闭，修复已合入） |
| [#7608](https://github.com/agentscope-ai/QwenPaw/issues/7608) 钉钉流式卡片回调未订阅 topic | 卡片交互全部失效 | ❌ 暂未见对应 fix PR |

### 稳定性隐患（安全向）

- [#8724](https://github.com/agentscope-ai/QwenPaw/pull/8724)（XS）修复 [#8695](https://github.com/agentscope-ai/QwenPaw/issues/8695)：`AuthMiddleware._should_skip_auth()` 在解析到回环客户端 IP 时跳过令牌校验，而 `_resolve_client_ip()` 仅在 TCP 对端属于 `security.trusted_proxies` 时才信任 `X-Forwarded-For`/`X-Real-IP`。**回环代理转发头**若被信任，则构成认证绕过风险。此项虽为修复 PR，但暴露了鉴权边界的敏感度，建议高优先合入。

---

## 六、功能请求与路线图信号

**今日新提出的功能需求**

| 需求 | 诉求 | 对应 PR | 入下一版本概率 |
|---|---|---|---|
| [#8714](https://github.com/agentscope-ai/QwenPaw/issues/8714) Console/API 挂载在可配置运行时 base path 下 | 反向代理前缀（如 `/app/`）下 pip/uv/Docker 安装无法干净部署 | ✅ [#8719](https://github.com/agentscope-ai/QwenPaw/pull/8719)（L，新增 `QWENPAW_BASE_PATH`） | **高** —— 纯配置项、低风险、部署刚需，很可能进 2.3.1 |
| [#8711](https://github.com/agentscope-ai/QwenPaw/issues/8711) 空响应自动重试一次 | 长任务可靠性 | ❌ 无 PR | 中高 —— 改动面小，易被纳入补丁版 |
| [#8071](https://github.com/agentscope-ai/QwenPaw/issues/8071) 插件侧语义 token 主题覆盖层 | 插件深度定制 | 🟡 [#8554](https://github.com/agentscope-ai/QwenPaw/pull/8554)（插件扩展点，同一生态方向） | 中 —— 涉及 API 设计，可能延后至小版本 |
| [#7608](https://github.com/agentscope-ai/QwenPaw/issues/7608) 钉钉流式模式交互卡片回调 | 渠道交互闭环 | ❌ 无 PR | 中 |
| [#8726](https://github.com/agentscope-ai/QwenPaw/pull/8726)（XL，首次贡献者）Console 文件抽屉预览 docx/xlsx/pptx | Agent 产出办公文档可直接读 | 该 PR 自身 | 中高 —— 纯前端只读预览，风险低 |
| [#8626](https://github.com/agentscope-ai/QwenPaw/pull/8626)（M）Cron 任务级 `thinking_level` 覆写 | 定时流水线任务不必承担推理延迟与 token 成本 | 该 PR 自身 | 中高 —— 属成本优化，用户价值明确 |
| [#8431](https://github.com/agentscope-ai/QwenPaw/pull/8431)（XXXL, Under Review）本地 Whisper 转为 SDK 插件、框架托管生命周期 | 语音能力插件化 | 该 PR 自身 | 中 —— 大 PR 积压中 |
| [#8648](https://github.com/agentscope-ai/QwenPaw/pull/8648) + #8649 + #8647 | Console 本地引擎 / GPU / 自动更新 | 三个堆叠 PR | 中高 —— 需按序合并（#8649 → #8647 → #8648） |

**下一版本（预计 2.3.1）最可能的构成**

1. **必选修复**：#8729（Hub 预设 502）、#8728（Responses 推理关闭）、#8715/#8721/#8720（微信三件套）、#8719（base path）、#8724（鉴权绕过）、#8723（Codex 断连）。
2. **高概率**：#8726（文档预览）、#8626（Cron thinking_level）、#8711（空响应重试）。
3. **需持续推进**：#8684（插件升级迁移）、#8725（渠道内模型切换）、#8712（资源保护结果可见性）、#8716（Windows 写侧路径）。
4. **大版本信号**：#8532（会话存储重构）、#8554（插件 CLI）、#8648 系列（本地推理）体量均达 XL/XXXL，更像**下一个 minor 版本（2.4.x）**的主线。

---

## 七、用户反馈摘要

**真实痛点（从 Issue 描述与复现细节提炼）**

1. **"升级了但修复没生效"** —— [#8684](https://github.com/agentscope-ai/QwenPaw/issues/8684)：用户从旧版升到 2.3.0，`~/.qwenpaw/plugins/matrix` 仍是旧源码，2.3.0 的 Matrix 全套修复（E2EE 依赖、session/device-key 重置等）全部落空。这是**升级器语义不透明**导致的信任损伤，用户会认为"官方修复是假的"。
2. **"被故障模型锁死"** —— [#8725](https://github.com/agentscope-ai/QwenPaw/issues/8725)：飞书会话通过 Console 钉住了 `provider-b:m...` 模型后，在渠道内执行 `/model` 返回 "Model Switched" 成功提示，但**实际模型不变**。假成功提示 + 无法自救，是典型的**信任侵蚀型**缺陷。
3. **"Hub 接的模型全是死的"** —— [#8718](https://github.com/agentscope-ai/QwenPaw/issues/8718)：内置 `anthropic`/`minimax`/`minimax-cn` 预设瞬间 502，请求未离开进程，说明预设能力**宣称支持但实际不可用**，用户需自行绕过 Hub。
4. **"微信渠道根本用不了"** —— [#8709](https://github.com/agentscope-ai/QwenPaw/issues/8709)（2.3.0 + agentscope 2.0.10）：启动即 `ACCOUNT_IN_USE`；发送实际成功却被报 `PLATFORM_RESULT_UNKNOWN`，用户既无法启动、也无法确认真实状态。
5. **"滚动摘要悄悄失败"** —— [#8727](https://github.com/agentscope-ai/QwenPaw/issues/8727)：推理模型默认吃掉 4000 token 输出预算，续写摘要失败；用户感知是"长对话到一半就断了"。
6. **"工具输出把模型卡住了"** —— [#8712](https://github.com/agentscope-ai/QwenPaw/issues/8712)：资源保护终止（exit code 15）明明是正确行为，但结果对模型不可见，模型**重复调用同一条命令**，浪费配额并可能造成副作用。
7. **"大模型协作的项目不一致"** —— [#8711](https://github.com/agentscope-ai/QwenPaw/issues/8711) 与 #8712 均附 **AI 辅助起草声明**，并称已对照源码与运行日志逐条验证。AI 辅助 Issue 正在成为社区常态，**验证严谨度（是否复现、是否给版本/commit）**成为 Issue 质量的关键区分项——#8718 给出 `main @ 19363e6069fb`、#8714 给出 wheel + commit 复验、#8727 给出 pip site-packages 环境，质量较高；#8718 作者还**先行提交了 fix PR**（#8729），是理想范式。

**满意点 / 正面反馈**

- 用户对 **AGENTS.md 前置条件规则** 的诉求（[#6321](https://github.com/agentscope-ai/QwenPaw/issues/6321)）被采纳并关闭，确实验证了"规则写在文件里 Agent 不遵守"是高频痛点，官方响应了该方向。
- Windows 沙箱锁卷问题（[#7943](https://github.com/agentscope-ai/QwenPaw/issues/7943)）在 22 天后闭环，说明**长尾安全/平台问题仍在持续修复**。
- 社区对 Windows 路径/ACL、Creator 素材理解等细分场景的**问题定位质量很高**（#8716 精确到 `services/source_analysis/service.py:2077-2082` 与 `driver.py:3282`），说明贡献者已具备读源码定位根因的能力。

---

## 八、待处理积压（提醒维护者关注）

**长期未合并的重要 PR**

| PR | 大小 | 首次提交 | 状态 | 积压风险 |
|---|---|---|---|---|
| [#8431](https://github.com/agentscope-ai/QwenPaw/pull/8431) 本地 Whisper 插件化 | XXXL | 2026-10-26 | Under Review | 20 天未推进，语音能力整条线阻塞 |
| [#8532](https://github.com/agentscope-ai/QwenPaw/pull/8532) append-only 会话存储 + 分页历史 + Turn fork | XXXL | 2026-11-02 | Under Review | 12 天，运行时核心改造，阻塞后续多会话特性 |
| [#8133](https://github.com/agentscope-ai/QwenPaw/pull/8133) 修复聊天 Markdown 的 CJK 强调边界 | L | 2026-10-08 | OPEN | 37 天，中文用户日常可见的渲染缺陷 |
| [#8268](https://github.com/agentscope-ai/QwenPaw/pull/8268) 绑定 run 完成回调并始终清理 | M | 2026-10-16 | OPEN | 29 天，run 状态泄漏，属于易复现的稳定性缺陷 |
| [#8654](https://github.com/agentscope-ai/QwenPaw/pull/8654) Creator 2.0.5 发布 | XXXL | 2026-11-10 | OPEN | 发布型 PR 长期滞留会拖慢 Creator 交付节奏 |

**长期未响应的 Issue**

| Issue | 首次提交 | 状态 | 说明 |
|---|---|---|---|
| [#8071](https://github.com/agentscope-ai/QwenPaw/issues/8071) 插件主题扩展点 | 2026-10-01 | OPEN，13 评论 | **今日评论最多但仍未推进**；44 天，插件生态方向需求，需要明确的"排期/暂不做"回复以免社区空转 |
| [#7608](https://github.com/agentscope-ai/QwenPaw/issues/7608) 钉钉流式卡片回调 | 2026-09-07 | OPEN，👍1 | 68 天，渠道交互能力缺口；虽被 👍，但仍无 PR 承接 |

**积压小结**

- 合并吞吐（3/日）远低于新增吞吐（29/日），**积压池在持续扩大**。
- 建议：① 优先清掉 #8133（CJK 渲染，37 天，中文用户体验直接受损）与 #8268（29 天，run 泄漏）；② 为 #8071、#7608 这类高关注长 Issue 给出官方结论；③ 将 XXXL 级 PR（#8431、#8532、#8654）拆解或明确评审窗口，避免成为"隐形黑洞"；④ 针对 2.3.0 回归簇（Hub 预设、微信渠道、插件迁移）打包一个 2.3.1 补丁集，避免缺陷持续外溢到生产环境。

---

**项目健康度综合评估：中等偏上（Developing / 需要收敛）**
- 优势：提交密度高、Issue 质量高（含 commit 级复现）、响应速度快（有 fix PR 对应）、发版后即时反馈闭环明确。
- 风险：合并吞吐不足、大 PR 长期滞留、2.3.0 回归面较广（Hub/渠道/升级/网关四线并发）、部分关键缺陷（#8725、#8684、#8712、#8716、#8711）尚无 PR 承接。
- 建议关注优先级：**P0（Hub 502、微信、渠道模型钉死）→ P0 安全（#8724 鉴权绕过）→ P1（插件迁移、Responses 摘要、空响应重试）→ 积压清理（#8133、#8268、#8071）**。

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/NousResearch/hermes-agent">NousResearch/hermes-agent</a></summary>

# Hermes Agent 项目动态日报

**统计日期：2026-11-14**  
**数据范围：过去 24 小时 GitHub Issues、PR 与 Releases**

---

## 1. 今日速览

过去 24 小时项目保持较高活跃度，共更新 **50 条 Issue**（49 条新开或活跃、1 条关闭）和 **50 条 PR**（44 条待合并、6 条已合并或关闭），另发布 **1 个 Canary 版本**。当前工作重点明显集中在 **Gateway 生命周期与会话可靠性、工具执行安全、身份/凭据状态、跨平台兼容性**四个方向。安全方向出现一批集中式加固 PR，涉及审批策略、敏感信息脱敏、WhatsApp 日志隐私和工具集隔离；与此同时，多项 P1/P2 稳定性问题仍待处理。整体可判断为：**开发与安全治理活跃、工程收敛速度一般，版本已发布但关键可靠性债务仍然较重**。

---

## 2. 版本发布

### `v0.23.1+canary.20261113T064447Z`

- **发布时间：** 2026-11-13
- **类型：** Canary 预发布版本
- **Release：** [v0.23.1+canary.20261113T064447Z](https://github.com/NousResearch/hermes-agent/releases/tag/v0.23.1%2Bcanary.20261113T064447Z)

#### 更新重点

当前 Release 页面主要提供 Hermes Agent Canary 构建及 Hermes Desktop 下载入口，未提供完整的 Changelog。根据当天 PR 与 Issue，Canary 可能覆盖或正在推进以下方向：

- Gateway 改为**空闲时重启**，避免定时重启冻结消息接收或中断正在运行的任务  
  [PR #155532](https://github.com/NousResearch/hermes-agent/pull/155532)
- 修复单个异常 MCP 工具导致整个 MCP Server 被停用的问题  
  [PR #146693](https://github.com/NousResearch/hermes-agent/pull/146693)
- 修复 mid-turn steer/redirect 消息落盘时间晚于助手回复的问题  
  [PR #155543](https://github.com/NousResearch/hermes-agent/pull/155543)
- 多项安全加固：
  - 防止代理自行修改审批配置  
    [PR #155547](https://github.com/NousResearch/hermes-agent/pull/155547)
  - 修复危险命令检测中的超线性正则阻塞  
    [PR #155269](https://github.com/NousResearch/hermes-agent/pull/155269)
  - 脱敏数据库 URL 查询参数中的密码  
    [PR #155545](https://github.com/NousResearch/hermes-agent/pull/155545)
  - 脱敏 Grafana `glsa_` / `glc_` Token  
    [PR #155544](https://github.com/NousResearch/hermes-agent/pull/155544)
  - 避免 WhatsApp bridge 日志记录联系人 ID 和 Signal Session Key  
    [PR #155542](https://github.com/NousResearch/hermes-agent/pull/155542)
  - 技能锁文件不可读时，写入路径统一 fail-closed  
    [PR #155541](https://github.com/NousResearch/hermes-agent/pull/155541)
  - 显式工具集选择不再意外附带未命名插件工具和 MCP Server  
    [PR #155540](https://github.com/NousResearch/hermes-agent/pull/155540)
  - 对最终会被拒绝的发送者不提前展示 typing/reaction  
    [PR #155535](https://github.com/NousResearch/hermes-agent/pull/155535)

#### 破坏性变更与迁移注意事项

Release 页面未明确列出破坏性变更，但结合当日变更，建议 Canary 用户重点验证：

1. **Gateway 重启语义变化**：由定时强制重启转向空闲重启，升级后应检查服务管理器的重启策略是否仍与新行为匹配。
2. **工具集解析更严格**：使用 `-t` / `toolsets` 或显式指定插件工具时，应重新确认所需 MCP Server 与插件工具均被显式纳入。
3. **审批配置调整**：配置审批模式和命令白名单时，应验证 CLI 交互提示与既有自动化流程。
4. **敏感信息脱敏范围扩大**：日志、工具输出及 transcript 中可能出现更多被掩码字段，依赖明文解析日志的脚本需同步调整。
5. **技能锁文件改为 fail-closed**：若 `skills/.usage.json` 损坏或不可读，文件写入、补丁及终端路径可能比此前更严格地拒绝操作。

> 结论：Canary 已具备较强的新增与安全修复密度，但在缺少正式 Changelog 和兼容性说明的情况下，不建议直接用于要求严格稳定性的生产环境。

---

## 3. 项目进展

### 3.1 Gateway 可用性与生命周期改进

当日最重要的进展之一是调整 Gateway 重启行为。新方案在请求期间保持服务可用，并在空闲后执行重启，避免此前冻结新消息、后台任务通知和子代理结果长达数十分钟的问题。

- [PR #155532：restart when idle — keep serving, never kill live work on a timer](https://github.com/NousResearch/hermes-agent/pull/155532)

该变更直接回应了多个 Gateway 重启、drain 超时和会话卡死问题，属于对核心运行模型的实质性改进。配套待合并修复还包括：

- Gateway SIGTERM 错误进入 restart-drain 路径，可能被拖到 systemd 停止超时  
  [Issue #155539](https://github.com/NousResearch/hermes-agent/issues/155539)
- Profile 重启在 drain 阶段触发 `ManagedWorker.interrupt()` TypeError  
  [Issue #144068](https://github.com/NousResearch/hermes-agent/issues/144068)
- Gateway 在 turn 中途重启后，整个 session 的输入 FIFO 可能永久阻塞  
  [Issue #139532](https://github.com/NousResearch/hermes-agent/issues/139532)

**推进判断：** Gateway 可靠性正在从“超时后强杀”转向“保持服务、空闲切换”，方向正确；但状态机、会话 fencing 与关闭路径尚未完全统一。

### 3.2 MCP 隔离能力提升

[PR #146693](https://github.com/NousResearch/hermes-agent/pull/146693) 修复了一个格式错误的 MCP 工具定义导致整个 MCP Server 被停用、最终变成零工具可用的问题。修复后，单个坏工具只影响自身，不再拖垮整个 Server。

该改动对大量依赖第三方 MCP Server 的用户意义较大，可降低插件生态中单个 schema 异常造成全局不可用的概率，属于明确的可用性提升。

### 3.3 会话时间线一致性修复

[PR #155543](https://github.com/NousResearch/hermes-agent/pull/155543) 修复 mid-turn steer/redirect 消息在 transcript flush 时丢失原始时间戳的问题。

对应问题为：

- [Issue #155494：steered user message 的时间戳晚于 assistant reply](https://github.com/NousResearch/hermes-agent/issues/155494)

修复后，延迟写入 SQLite 的 steer 消息能够保持与真实注入时间一致，改善 Desktop/Web 会话展示、审计和消息排序。

### 3.4 安全治理形成集中批次

当日至少 7 个 PR 带有 `sec-marathon-2026-11-13` 标记，涵盖审批、危险命令检测、凭据脱敏、日志隐私和工具隔离：

- 审批配置不可被无提示修改  
  [PR #155547](https://github.com/NousResearch/hermes-agent/pull/155547)
- 危险命令检测正则阻塞  
  [PR #155269](https://github.com/NousResearch/hermes-agent/pull/155269)
- DB URL 查询参数密码脱敏  
  [PR #155545](https://github.com/NousResearch/hermes-agent/pull/155545)
- Grafana Token 脱敏  
  [PR #155544](https://github.com/NousResearch/hermes-agent/pull/155544)
- WhatsApp 日志隐私  
  [PR #155542](https://github.com/NousResearch/hermes-agent/pull/155542)
- 技能锁读取失败时写入路径 fail-closed  
  [PR #155541](https://github.com/NousResearch/hermes-agent/pull/155541)
- 显式工具集选择意外扩展权限  
  [PR #155540](https://github.com/NousResearch/hermes-agent/pull/155540)

**推进判断：** 安全工作从单点修补进入成体系治理阶段，尤其重视“默认拒绝、最小工具集、敏感输出不外泄”。但多数 PR 尚处于待合并状态，实际保护能力仍取决于合并和发布节奏。

### 3.5 插件与生态更新

- `live-video` 插件升级到 1.3.4，并增加 Windows 支持  
  [PR #155030](https://github.com/NousResearch/hermes-agent/pull/155030)
- `ceo-pack` 升级到 v0.4.0，路由匹配、seat 优先级、also-consult 与 confidence 等行为得到改进  
  [PR #155549](https://github.com/NousResearch/hermes-agent/pull/155549)
- OpenAny MCP 目录项更新为 B2A Marketplace，宣称覆盖 3,200+ API 和 168+ AI 模型  
  [PR #155551](https://github.com/NousResearch/hermes-agent/pull/155551)
- A2A 调用改为“接受后轮询”流程，增加瞬时重试和基于 Task ID 的恢复  
  [PR #141947](https://github.com/NousResearch/hermes-agent/pull/141947)

**整体向前程度：** 当日约有 6 个 PR 已合并或关闭，另有 44 个待合并；核心功能与安全修复均有推进，但大量变更尚未进入正式版本，交付节奏仍受合并与验证压力制约。

---

## 4. 社区热点

### 4.1 评论最多的 Issues

| 热度 | Issue | 评论/反应 | 核心诉求 |
|---|---|---:|---|
| 1 | [#122813 gateway_state.json 未持久化 cron/API active_agents](https://github.com/NousResearch/hermes-agent/issues/122813) | 9 评论 | 外部状态监控无法准确反映定时任务和 API 任务是否运行 |
| 2 | [#139532 Gateway 中途重启会永久阻塞 session FIFO](https://github.com/NousResearch/hermes-agent/issues/139532) | 9 评论，1 👍 | 需要可恢复、可在应用内解除的 turn/session fencing 状态 |
| 3 | [#78307 内置 Memory 生命周期管理与维护 UX](https://github.com/NousResearch/hermes-agent/issues/78307) | 7 评论 | 需要去重、整合、冲突检测、健康检查和待处理队列维护 |
| 4 | [#142889 共享 webhook 丢失 profile-bound delivery](https://github.com/NousResearch/hermes-agent/issues/142889) | 6 评论 | 多 Profile Gateway 下动态 webhook 需要正确路由并持久化接收 |
| 5 | [#154749 截断输出写入错误主机](https://github.com/NousResearch/hermes-agent/issues/154749) | 5 评论 | SSH/Docker 后端下工具产物必须落在实际执行主机 |
| 6 | [#144883 profile scope 在事件循环读取配置导致 watchdog 误杀](https://github.com/NousResearch/hermes-agent/issues/144883) | 5 评论 | 磁盘 I/O 不应阻塞 Gateway 心跳 |
| 7 | [#5867 Ollama 工具调用未使用 tool_calls 字段](https://github.com/NousResearch/hermes-agent/issues/5867) | 5 评论 | 兼容更多本地模型的结构化工具调用变体 |

这些高热 Issue 表明用户诉求并非集中于“增加更多 Agent 能力”，而是更关注 **后台任务可观测性、长会话恢复、配置隔离、路由正确性和本地模型兼容**。换言之，当前主要瓶颈是可运营性与一致性。

### 4.2 评论最多或反应最明显的 PR

当日展示的 PR 大多尚无公开评论，因此评论热度有限；PR 列表主要由**新增修复与安全加固密度**驱动：

- [PR #155532：Gateway 空闲重启](https://github.com/NousResearch/hermes-agent/pull/155532)  
  直接影响 Gateway 日常可用性，属于当日最值得优先审阅的核心变更。
- [PR #155547：保护审批配置](https://github.com/NousResearch/hermes-agent/pull/155547)  
  阻止 Agent 在无确认情况下降低自身安全策略，安全价值较高。
- [PR #155269：消除危险命令检测正则停顿](https://github.com/NousResearch/hermes-agent/pull/155269)  
  可避免单条命令阻塞整个 Gateway。
- [PR #155542：清理 WhatsApp bridge 日志敏感信息](https://github.com/NousResearch/hermes-agent/pull/155542)  
  面向真实多用户或多设备部署，直接降低隐私暴露。
- [PR #146693：隔离异常 MCP 工具](https://github.com/NousResearch/hermes-agent/pull/146693)  
  提升第三方 MCP 生态的故障隔离能力。
- [PR #150883：数据库 URL 密码脱敏](https://github.com/NousResearch/hermes-agent/pull/150883)  
  获得了 1 个 👍，且与同方向 PR #155545 形成并行修复，合并时需避免重复或冲突。
- [PR #155543：修复 steer 时间戳](https://github.com/NousResearch/hermes-agent/pull/155543)  
  修复范围清晰，已有对应 Issue #155494，适合快速验证合并。

### 4.3 热点背后的共性诉求

1. **状态必须可信**：active agent、credential、cooldown、session 状态不能只在部分路径持久化。
2. **失败必须可恢复**：Gateway 重启、Profile 重启、工具异常不能导致整个会话或服务器不可用。
3. **隔离必须严格**：Profile、Webhook、工具集、SSH/Docker 主机之间不能串状态、串路由或串权限。
4. **安全策略不能自修改**：审批、工具选择与日志脱敏需要默认安全、失败关闭。

---

## 5. Bug 与稳定性

### P1 / 高优先级

#### 5.1 Gateway 在 turn 中途重启后永久阻塞整个 session

- [Issue #139532](https://github.com/NousResearch/hermes-agent/issues/139532)
- **影响：** 正在执行的 turn 被标记为 `unknown`，后续用户消息永久排队；Desktop 没有恢复入口，只能通过终端处理。
- **已有修复：** **未见直接 fix PR**。
- **相关推进：** [PR #155532](https://github.com/NousResearch/hermes-agent/pull/155532) 改变重启策略，但不能完全替代 fencing 状态机的显式恢复机制。

#### 5.2 Gateway 事件循环上的磁盘读取可触发 watchdog 误杀

- [Issue #144883](https://github.com/NousResearch/hermes-agent/issues/144883)
- **影响：** profile scope 构建读取 `.env/config.yaml` 时发生阻塞，连续三次 liveness probe 失败后 Gateway 以 exit 75 退出。
- **已有修复：** **未见直接 fix PR**。
- **建议：** 将文件读取移出事件循环，或让 watchdog 区分“事件循环阻塞”与“进程死亡”。

### P2 / 严重稳定性问题

| Issue | 现象 | 已有 fix PR |
|---|---|---|
| [#122813](https://github.com/NousResearch/hermes-agent/issues/122813) | `gateway_state.json` 不记录 cron/API run 的 active agent 生命周期 | 未见 |
| [#142889](https://github.com/NousResearch/hermes-agent/issues/142889) | 共享 webhook 对二级 profile 投递报 `route_digest not_found` | 未见 |
| [#154749](https://github.com/NousResearch/hermes-agent/issues/154749) | 截断工具输出被写到 Hermes 主机，而非 SSH/终端后端主机 | 未见 |
| [#126622](https://github.com/NousResearch/hermes-agent/issues/126622) | Windows `write_file` 因 `st_ctime_ns` 不一致而永久拒绝写入 | 未见 |
| [#64322](https://github.com/NousResearch/hermes-agent/issues/64322) | Tool loop guardrail hard-stop 后任务静默终止，需用户再次提示 | 未见 |
| [#128510](https://github.com/NousResearch/hermes-agent/issues/128510) | Anthropic 模型 cooldown 隐藏有效 OAuth 凭据并错误提示重新认证 | 未见；与 [#155550](https://github.com/NousResearch/hermes-agent/issues/155550) 同域 |
| [#154936](https://github.com/NousResearch/hermes-agent/issues/154936) | `delegate_task` 忽略配置的 delegation provider/model | 未见 |
| [#155032](https://github.com/NousResearch/hermes-agent/issues/155032) | Windows SSH 会话执行 `hermes gateway install` 时 `schtasks` 解析用户失败 | 相关诊断增强：[PR #155320](https://github.com/NousResearch/hermes-agent/pull/155320)，非完整修复 |
| [#155494](https://github.com/NousResearch/hermes-agent/issues/155494) | steer 用户消息时间戳晚于最终 assistant 回复 | **有：** [PR #155543](https://github.com/NousResearch/hermes-agent/pull/155543) |
| [#155451](https://github.com/NousResearch/hermes-agent/issues/155451) | Webapp launch 将 redeem-refused 与 ticket-expired 混为一谈 | 未见 |
| [#155550](https://github.com/NousResearch/hermes-agent/issues/155550) | Anthropic per-model cooldown 不提前重检，早期恢复窗口无法使用 | 未见 |
| [#155539](https://github.com/NousResearch/hermes-agent/issues/155539) | poweroff SIGTERM 错走 restart-drain，Shutdown 超过 systemd 120 秒限制 | **部分相关：** [PR #155532](https://github.com/NousResearch/hermes-agent/pull/155532) |
| [#144068](https://github.com/NousResearch/hermes-agent/issues/144068) | Profile restart 在 drain 中触发 `ManagedWorker.interrupt()` TypeError | 未见 |
| [#154959](https://github.com/NousResearch/hermes-agent/issues/154959) | cron monitor 在 wake gate 跳过 Agent 前就标记 change 为 seen | 未见 |

### P2 / 安全与权限边界问题

- Smart Approval 在判断命令风险时不知道用户原始请求，可能误拒绝用户明确授权的操作  
  [Issue #155022](https://github.com/NousResearch/hermes-agent/issues/155022)
- 已提出审批配置保护、危险命令正则优化和敏感信息脱敏修复：
  - [PR #155547](https://github.com/NousResearch/hermes-agent/pull/155547)
  - [PR #155269](https://github.com/NousResearch/hermes-agent/pull/155269)
  - [PR #155545](https://github.com/NousResearch/hermes-agent/pull/155545)
  - [PR #150883](https://github.com/NousResearch/hermes-agent/pull/150883)

### P3 / 其他重要功能回归

- Ollama `qwen2.5-coder` 将工具调用放在 `content` 而非 `tool_calls`，Hermes 不执行  
  [Issue #5867](https://github.com/NousResearch/hermes-agent/issues/5867)
- macOS `hermes update` 更新成功但退出码为 1，并可能重启旧 launchd plist  
  [Issue #126883](https://github.com/NousResearch/hermes-agent/issues/126883)
- iOS Beta 在蜂窝网络 HTTPS 认证成功后取消所有 in-flight 请求  
  [Issue #151836](https://github.com/NousResearch/hermes-agent/issues/151836)
- Hermes Cloud 实例长期 OFFLINE/Reconnecting，Stop 无效  
  [Issue #147208](https://github.com/NousResearch/hermes-agent/issues/147208)
- Desktop 空白黑窗  
  [Issue #138274](https://github.com/NousResearch/hermes-agent/issues/138274)
- Desktop 自定义 Endpoint 的 API Key 保存后被清空  
  [Issue #108785](https://github.com/NousResearch/hermes-agent/issues/108785)
- Codex Runtime 导出的 MCP TOML 对控制字符和非 ASCII key 处理不完整，可能生成无效 TOML  
  [PR #155546](https://github.com/NousResearch/hermes-agent/pull/155546)

**稳定性结论：** 当日 Bug 覆盖面非常广，说明 Canary 功能扩张速度快于跨平台、异步状态与边缘路径的验证能力。已有明确 fix PR 的问题相对有限，尤其是 Gateway fencing、profile scope I/O、Anthropic cooldown 状态和 SSH/Docker 主机归属仍需维护者重点跟进。

---

## 6. 功能请求与路线图信号

### 6.1 内置 Memory 生命周期管理

- [Issue #78307](https://github.com/NousResearch/hermes-agent/issues/78307)
- 请求包括检查、健康状态、去重、整合、冲突检测、pending queue 清理和可恢复清理。
- **路线图判断：高概率进入下一版本或后续 Memory UX 迭代。**  
  诉求具体、边界明确，且与长期 Agent 的知识质量直接相关；但这是产品体验层功能，优先级可能低于当前 Gateway 和安全债务。

### 6.2 Tool Search 豁免白名单

- [Issue #86620](https://github.com/NousResearch/hermes-agent/issues/86620)
- 允许将指定插件/MCP 工具固定为 always-eager，其余工具继续延迟加载。
- **路线图判断：中高概率。**  
  它直接解决渐进式工具暴露造成的兼容问题，与当前插件/MCP 工具集治理方向一致；但需同步考虑 [PR #155540](https://github.com/NousResearch/hermes-agent/pull/155540) 所强调的显式工具集与最小权限原则。

### 6.3 A2A 接受后轮询与恢复

- [PR #141947](https://github.com/NousResearch/hermes-agent/pull/141947)
- A2A 1.0 立即返回 Task ID，并支持有界轮询、瞬时读取重试和基于 Task ID 的恢复。
- **路线图判断：已进入实现阶段。**  
  若测试稳定，可能随下一批 Gateway 功能发布；当前仍为开放 PR。

### 6.4 Gateway 空闲重启

- [PR #155532](https://github.com/NousResearch/hermes-agent/pull/155532)
- **路线图判断：高概率。**  
  这是维护者直接提交的修复型 PR，且针对多个高频 Gateway 生命周期问题，具备进入近期版本的较高可能性。

### 6.5 Windows 生态完善

- `live-video` 插件支持 Windows  
  [PR #155030](https://github.com/NousResearch/hermes-agent/pull/155030)
- `hermes gateway attach` 报告 Windows SSH 启动上下文  
  [PR #155320](https://github.com/NousResearch/hermes-agent/pull/155320)
- **路线图判断：明确在推进。**  
  Windows 已成为独立方向，但当前仍存在文件写入、计划任务安装和 TOML 导出问题。

### 6.6 自主系统状态变更的“意图日志”

- [PR #155548](https://github.com/NousResearch/hermes-agent/pull/155548)
- 提议在自主子系统修改技能或状态前记录预声明意图，便于审计、解释和恢复。
- **路线图判断：设计信号明确，但短期合入概率较低。**  
  这是架构设计提案，需要先明确日志边界、回滚语义及隐私要求。

### 6.7 可能纳入下一版本的优先级建议

1. **Gateway 空闲重启与会话恢复状态机**
2. **安全加固批次**
3. **MCP 单工具故障隔离**
4. **Anthropic/OAuth cooldown 状态一致性**
5. **Windows 文件、Gateway 安装与 Runtime 兼容性**
6. **Memory 管理 UX、Tool Search 白名单**

---

## 7. 用户反馈摘要

### 7.1 真实使用场景

- **多 Profile Gateway 自动化**：用户通过 `--route-profile` 绑定动态 webhook，希望不同业务身份、订阅和投递记录互不串扰。  
  [Issue #142889](https://github.com/NousResearch/hermes-agent/issues/142889)
- **定时任务与后台 Agent 监控**：用户依赖 `gateway_state.json` 判断 cron/API 任务是否活跃，当前状态不准确会影响外部编排系统。  
  [Issue #122813](https://github.com/NousResearch/hermes-agent/issues/122813)
- **长会话中实时转向 Agent**：用户在 turn 执行中继续发送 steer/redirect 指令，并期待时间线和顺序准确无误。  
  [Issue #155494](https://github.com/NousResearch/hermes-agent/issues/155494)  
  [PR #155543](https://github.com/NousResearch/hermes-agent/pull/155543)
- **远程与容器后端**：SSH 终端、文件工具和 Docker 部署用户希望所有工具产物落到真实执行主机。  
  [Issue #154749](https://github.com/NousResearch/hermes-agent/issues/154749)
- **本地模型**：Ollama 用户希望 Hermes 兼容 `content` 字段中的 JSON 工具调用，而不是仅支持标准 `tool_calls`。  
  [Issue #5867](https://github.com/NousResearch/hermes-agent/issues/5867)
- **移动端连接**：iOS Beta 用户在公共蜂窝网络完成认证后仍遇到请求被统一取消，表明网络切换与认证生命周期耦合明显。  
  [Issue #151836](https://github.com/NousResearch/hermes-agent/issues/151836)

### 7.2 主要不满意点

- **故障后缺少应用内恢复入口**：Gateway 重启造成 session 永久卡住，用户只能进入终端。  
  [Issue #139532](https://github.com/NousResearch/hermes-agent/issues/139532)
- **更新体验不可信**：macOS 更新明明成功却返回失败，Desktop 随后显示更新失败。  
  [Issue #126883](https://github.com/NousResearch/hermes-agent/issues/126883)
- **配置保存造成数据丢失感**：Desktop 保存自定义 Endpoint API Key 后字段被清空，即使界面可能使用环境变量占位符，也容易被理解为密钥丢失。  
  [Issue #108785](https://github.com/NousResearch/hermes-agent/issues/108785)
- **云实例控制失效**：用户无法 Stop、重启或查看长期离线实例日志。  
  [Issue #147208](https://github.com/NousResearch/hermes-agent/issues/147147208)
- **凭据提示误导**：Anthropic cooldown 时明明仍有有效 OAuth，却提示重新认证，增加不必要的用户操作。  
  [Issue #128510](https://github.com/NousResearch/hermes-agent/issues/128510)
- **Windows 基础能力不一致**：文件写入、Gateway 安装和 Desktop 启动均存在独立故障，削弱跨平台信任。  
  [Issue #126622](https://github.com/NousResearch/hermes-agent/issues/126622)  
  [Issue #155032](https://github.com/NousResearch/hermes-agent/issues/155032)

### 7.3 正面信号

- 用户对 `live-video` 的跨平台能力有明确需求，贡献者已在真实硬件上验证 Windows 支持。  
  [PR #155030](https://github.com/NousResearch/hermes-agent/pull/155030)
- `ceo-pack` v0.4.0 已在真实 Hermes 运行中验证路由 P0 修复，说明插件生态正在从目录展示走向实际集成。  
  [PR #155549](https://github.com/NousResearch/hermes-agent/pull/155549)
- A2A 客户端工作流已开始支持恢复和重试，表明多 Agent 互操作需求正在从概念进入工程实现。  
  [PR #141947](https://github.com/NousResearch/hermes-agent/pull/141947)

---

## 8. 待处理积压

### 8.1 长期存在但今日重新活跃的高优先级 Issue

以下 Issue 创建时间较早，今日仍有评论或状态更新，已形成明显的长期积压：

- [Issue #5867：Ollama 工具调用兼容](https://github.com/NousResearch/hermes-agent/issues/5867)  
  自 2026-04-07 起未解决；本地模型兼容性问题已持续约七个月。
- [Issue #64322：Tool loop guardrail 静默终止](https://github.com/NousResearch/hermes-agent/issues/64322)  
  自 2026-07-14 起存在，直接影响 Agent 能否从工具错误中自主恢复。
- [Issue #78307：Memory 生命周期 UX](https://github.com/NousResearch/hermes-agent/issues/78307)  
  自 2026-08-04 起持续讨论，是当前热度最高的长期功能请求之一。
- [Issue #86620：Tool Search deferral 白名单](https://github.com/NousResearch/hermes-agent/issues/86620)  
  自 2026-08-15 起未实现，反映插件工具数量增长后的真实兼容压力。
- [Issue #94193：白俄罗斯 IP 无法访问文档与 Nous Portal OAuth](https://github.com/NousResearch/hermes-agent/issues/94193)  
  自 2026-08-24 起存在；标签包含 `cause/upstream`，需确认外部依赖进展。
- [Issue #108785：Desktop 自定义 Endpoint API Key 保存异常](https://github.com/NousResearch/hermes-agent/issues/108785)  
  自 2026-09-12 起存在，已有 3 个 👍，但仍为开放状态。
- [Issue #122813：active_agents 持久化](https://github.com/NousResearch/hermes-agent/issues/122813)  
  自 2026-09-25 起未解决，已成为高评论、高可观测性价值事项。
- [Issue #126622：Windows write_file 永久拒绝](https://github.com/NousResearch/hermes-agent/issues/126622)  
  自 2026-09-28 起存在；Windows 文件工具基础能力应尽快恢复。
- [Issue #126883：macOS hermes update 退出码错误](https://github.com/NousResearch/hermes-agent/issues/126883)  
  自 2026-09-28 起存在；直接影响升级体验。
- [Issue #128510：Anthropic cooldown 隐藏 OAuth](https://github.com/NousResearch/hermes-agent/issues/128510)  
  自 2026-09-29 起存在，并与新 Issue #155550 形成同一状态管理债务。
- [Issue #138274：Desktop 空白窗口](https://github.com/NousResearch/hermes-agent/issues/138274)  
  自 2026-10-14 起存在，仍缺乏稳定复现与修复结论。
- [Issue #139532：Gateway 重启永久阻塞 session](https://github.com/NousResearch/hermes-agent/issues/139532)  
  自 2026-10-16 起存在，虽有新 PR 触及重启机制，但缺少直接恢复方案。
- [Issue #142889：profile webhook durable admission 失败](https://github.com/NousResearch/hermes-agent/issues/142889)  
  自 2026-10-22 起存在，影响多租户路由可靠性。
- [Issue #144068：Profile restart drain TypeError](https://github.com/NousResearch/hermes-agent/issues/144068)  
  自 2026-10-24 起存在，直接造成 profile 长期停留在 draining。
- [Issue #144883：profile scope 文件读取触发 watchdog 误杀](https://github.com/NousResearch/hermes-agent/issues/144883)  
  自 2026-10-26 起存在，属于 P1 服务可用性问题。
- [Issue #147208：Cloud 实例长期离线且无法停止](https://github.com/NousResearch/hermes-agent/issues/147208)  
  自 2026-10-31 起存在，涉及托管服务的控制面可靠性。

### 8.2 长期开放的 PR

- [PR #141947：A2A accept-then-poll 与恢复](https://github.com/NousResearch/hermes-agent/pull/141947)  
  自 2026-10-20 起开放，功能价值明确，但需确认测试、接口兼容和合并窗口。
- [PR #146693：单个异常 MCP 工具不再拖垮 Server](https://github.com/NousResearch/hermes-agent/pull/146693)  
  自 2026-10-30 起开放，标记 `ci-reviewed`，应优先完成冲突检查与发布。
- [PR #148015：技能锁读取异常时写入路径 fail-closed](https://github.com/NousResearch/hermes-agent/pull/148015)  
  已关闭，但同日出现 [PR #155541](https://github.com/NousResearch/hermes-agent/pull/155541) 继续修复相同方向，需确认是替代、拆分还是遗漏。
- [PR #150883：数据库 URL 密码脱敏](https://github.com/NousResearch/hermes-agent/pull/150883)  
  自 2026-11-07 起开放，与 [PR #155545](https://github.com/NousResearch/hermes-agent/pull/155545) 重复度较高，建议合并为一个权威实现。
- [PR #155030：live-video Windows 支持](https://github.com/NousResearch/hermes-agent/pull/155030)  
  已完成硬件验证，仍需确认目录发布、签名或平台测试。

### 8.3 维护者建议关注顺序

1. **立即合并或拆分出 hotfix**：Gateway 会话 fencing、profile scope watchdog、Windows `write_file`、macOS update 退出码。
2. **统一重复修复**：PR #148015 / #155541，以及 PR #150883 / #155545，避免安全补丁分叉。
3. **补齐直接 fix PR**：Anthropic cooldown、cron monitor seen-state、SSH 截断输出主机归属、Profile drain TypeError。
4. **明确 P1/P2 响应 SLA**：多个高优先级 Issue 已积压数周，且今日仍缺少直接修复链接。
5. **发布 Canary Changelog 与升级说明**：明确 Gateway 重启、工具集解析、审批策略及 fail-closed 行为的兼容性影响。
6. **统一产品状态真源**：Gateway active agent、Anthropic credential/cooldown、Profile/webhook route digest 应采用一致的状态持久化和恢复模型。

---

## 项目健康度结论

**综合健康度：中等偏活跃，但可靠性与交付收敛仍承压。**

- **活跃度：高**——24 小时 100 条 Issue/PR 更新，且有多个独立方向并行开发。
- **安全态势：改善中**——集中式加固覆盖审批、命令检测、脱敏、日志和工具集权限，但多数尚未合并。
- **稳定性：偏弱**——P1/P2 问题覆盖 Gateway、Profile、Windows、macOS、Ollama、Anthropic 和远程后端。
- **交付状态：中等**——Canary 已发布，核心 PR 持续产出，但 44 个 PR 仍待合并，正式版本内容与兼容性边界不清晰。
- **社区信号：有效**——用户能提供具体复现、环境和真实工作流；问题描述质量较高，有利于维护者定位。
- **下一阶段关键指标**：P1/P2 直接修复率、44 个待合并 PR 的收敛速度、Canary Changelog 完整度，以及 Gateway 状态机能否从“超时强杀”升级为“可恢复、可观测、严格隔离”。

</details>

<details>
<summary><strong>OpenHuman</strong> — <a href="https://github.com/tinyhumansai/openhuman">tinyhumansai/openhuman</a></summary>

# OpenHuman 项目动态日报

**日期：2026-11-14**  
**统计范围：过去 24 小时**  
**数据来源：GitHub Issues / Pull Requests**

---

## 1. 今日速览

过去 24 小时 OpenHuman 共更新 **4 条 Issues、19 条 PR**，其中 **1 条 Issue 新开或仍活跃、3 条已关闭；8 条 PR 待合并、11 条已合并或关闭**，整体活跃度较高。今日重点集中在 **浏览器密钥安全、Telegram 消息可靠投递、Windows CLI 安装、钱包与 x402 稳定性、工作流提案保存链路** 等方向。PR 数量明显高于 Issue 数量，且多个历史缺陷已有对应修复提交，说明项目当前更偏向“集中收敛问题与清理技术债”。  
不过仍有 **8 条 PR 尚未合并**，其中包括工作流保存重复副本修复、核心瘦身清理及 Windows/测试修复等，合并节奏和回归验证仍是下一阶段的主要健康度指标。

---

## 2. 版本发布

过去 24 小时 **无新版本发布**。

今日未产生可直接确认的正式 Release，因此暂无对应的版本号、发布说明、破坏性变更或升级迁移指南。需要注意，虽然多项修复已合并或关闭，但这些变更是否能进入用户版本，仍取决于后续打包发布流程。

---

## 3. 项目进展

### 3.1 浏览器密钥安全：连续补强密码泄露防护

今日关闭了 3 个高度相关的浏览器安全 PR：

- **[#8709：后续浏览器回复中持续遮蔽钥匙串密码](https://github.com/tinyhumansai/openhuman/pull/8709)**  
  修复代理将占位符误输入普通文本框后，密码会在后续 `snapshot`、`read_page` 或任务步骤中再次暴露的问题。变更确保密码在后续浏览器交互中持续被遮蔽。

- **[#8708：为 `fill` / `type` 增加绑定来源站点的钥匙串占位符](https://github.com/tinyhumansai/openhuman/pull/8708)**  
  代理使用 `{{keychain:<site>}}`，浏览器工具仅在当前页面为对应 HTTPS 站点或其子域名时，才在发送给 TinyComputer 前替换为真实密码，降低相似域名和错误上下文中的凭据泄露风险。

- **[#8707：升级 TinySecurity 至 0.21.1](https://github.com/tinyhumansai/openhuman/pull/8707)**  
  修复 TinySecurity 0.21.0 在强制审计模式下拒绝三个浏览器拨号成员、导致浏览器无法打开页面的问题。升级后浏览器拨号权限重新获得授权。

**进展判断：**  
这组修复覆盖了“浏览器无法使用”“密钥泄漏到页面内容”“跨站或后续步骤泄密”三个层面，是今日最明确的安全与可用性改进。

---

### 3.2 通道可靠性：Telegram 临时故障可重试

- **[#8593：Telegram 出站回复对临时故障执行退避重试](https://github.com/tinyhumansai/openhuman/pull/8593)**  
  对网络错误、HTTP 429 及 5xx 等临时故障进行重试；同时修复失败信息仅写入 `stderr`、桌面端无法捕获而造成回复静默丢失的问题。该 PR 已关闭并关联修复 [#8590](https://github.com/tinyhumansai/openhuman/issues/8590)。

**进展判断：**  
Telegram 从“失败即丢失且不可见”向“可恢复、可观测”推进，显著改善机器人渠道在弱网或服务端限流下的可靠性。

---

### 3.3 Windows 命令行安装体验修复

- **[#8555：Windows 安装后将 OpenHuman 加入用户 PATH](https://github.com/tinyhumansai/openhuman/pull/8555)**  
  安装程序检测 `OpenHuman.exe` 所在目录并去重写入当前用户 PATH，同时刷新环境变量、通知 Windows 环境已变更，并补充新终端及 PowerShell Profile 配置说明。该 PR 已关闭并关联 [#8497](https://github.com/tinyhumansai/openhuman/issues/8497)。

**进展判断：**  
安装后命令不可用是直接影响首日体验的问题。修复不仅调整 PATH，还覆盖 PowerShell Profile 的创建提示，完整度较好。

---

### 3.4 工作流提案身份与保存链路继续收敛

- **[#8557：工作流提案获得稳定唯一身份](https://github.com/tinyhumansai/openhuman/pull/8557)**  
  为每个工作流提案生成核心层唯一 ID，并在前端解析、React 卡片 Key、保存及完成状态匹配中持续使用该 ID，同时增加同名实时提案的回归测试。该 PR 已关闭，关联 [#8456](https://github.com/tinyhumansai/openhuman/issues/8456)。

- **[#8564：从卡片保存后交接到 Builder 时保留已保存 Flow ID](https://github.com/tinyhumansai/openhuman/pull/8564)**  
  修复聊天中点击“保存”后，工作流 Builder 再次创建同一 Flow 副本的问题。该 PR 仍待合并，并触发新的并发元数据问题 [#8702](https://github.com/tinyhumansai/openhuman/issues/8702)。

**进展判断：**  
工作流提案的“身份唯一”和“保存不重复”分别得到推进，但关键保存交接 PR 尚未合并，完整闭环仍需等待。

---

### 3.5 钱包与 x402：修复支付和密钥材料调用链

今日关闭了多项钱包相关修复：

- **[#8698：TinyWallet 固定至 v0.30.1](https://github.com/tinyhumansai/openhuman/pull/8698)**  
  引入 deBridge Solana 交易签名前刷新占位 blockhash 的修复，避免相关交换和 DLN 订单在预检阶段因 `BlockhashNotFound` 被拒绝。

- **[#8697：vendor 中升级 TinyWallet](https://github.com/tinyhumansai/openhuman/pull/8697)**  
  将 vendor 版本更新到包含同一 Solana blockhash 修复的提交。

- **[#8696：链接式钱包在发送密钥材料前接受宿主代码证明](https://github.com/tinyhumansai/openhuman/pull/8696)**  
  修复 linked wallet 模式下因构建固定产物校验不匹配，所有密钥材料调用均失败的问题。

- **[#8695：向 TinyWallet 开放 v1 x402 目标权限](https://github.com/tinyhumansai/openhuman/pull/8695)**  
  修复 `openhuman.x402_fetch` 支付在 ledger migration 阶段因 `target-not-granted` 失败的问题。

- **[#8692：x402_fetch 加入网络固定及 Sign-In-With-X](https://github.com/tinyhumansai/openhuman/pull/8692)**  
  固定 TinyWallet 0.30.0、升级 `rusqlite` 至 0.41，并为 x402 请求增加网络约束与身份认证能力。该 PR 后续又由新的 TinyWallet 固定和供应商升级修正。

**进展判断：**  
钱包、x402 和跨链支付是今日变更最密集的领域。多个问题已在生产环境中暴露，当前修复覆盖面较广，但相关 PR 数量多、依赖关系复杂，仍需关注合并后的集成回归。

---

### 3.6 核心瘦身与死代码清理

待合并 PR 中包含多项大规模清理：

- **[#8706：删除死工具管线](https://github.com/tinyhumansai/openhuman/pull/8706)**：约 **+84 / −716** 行。
- **[#8705：删除无行为作用的 MCP 胶水代码](https://github.com/tinyhumansai/openhuman/pull/8705)**：24 个文件，约 **+47 / −241** 行。
- **[#8704：删除重复 WAV 封装、语音默认配置及 viseme 重映射](https://github.com/tinyhumansai/openhuman/pull/8704)**。
- **[#8703：删除从未发布版本写入过的 v1 存储转换器](https://github.com/tinyhumansai/openhuman/pull/8703)**：18 个文件，约 **+22 / −320** 行。
- **[#8700：删除无调用的安全助手和凭据重导出层](https://github.com/tinyhumansai/openhuman/pull/8700)**：25 个文件，约 **+61 / −160** 行。
- **[#8701：按项目规范调整迁移测试模块声明位置](https://github.com/tinyhumansai/openhuman/pull/8701)**。

**进展判断：**  
项目正在通过删除死代码降低核心复杂度，并推动 `tools/` 接受 `dead_code` lint 检查。若这些变更顺利合并并通过回归测试，将降低后续维护成本；但大规模跨模块删除也会提高合并冲突和回归风险。

---

## 4. 社区热点

### Issues

#### 1. [#8702：会话消息元数据需要条件更新能力](https://github.com/tinyhumansai/openhuman/issues/8702)  
**状态：OPEN｜优先级：P2｜评论：1**

这是今日唯一新开或仍活跃的 Issue，源于 [#8564](https://github.com/tinyhumansai/openhuman/pull/8564) 的代码审查反馈。两个宿主路径会先读取 `extra_metadata`，据此判断后再执行无条件的 `merge_extra_metadata` 写入，存在并发覆盖窗口。

**核心诉求：**

- 支持 compare-and-set 语义；
- 元数据更新前重新验证原值；
- 避免多个工作流保存路径并发更新同一消息时互相覆盖。

**关注价值：**  
这是数据一致性问题，而不只是 UI 缺陷。若不解决，聊天代理、工作流卡片与 Builder 之间的状态同步仍可能出现竞态。

#### 2. [#8456：同名实时工作流提案共享卡片身份](https://github.com/tinyhumansai/openhuman/issues/8456)  
**状态：CLOSED｜优先级：P2｜评论：2**

用户反馈两个同名、来自不同消息的实时工作流提案会因 `sourceMessageId + name` 身份键冲突而共享卡片身份。核心诉求是让每个提案拥有稳定、唯一且可贯穿前后端的 ID。

**处理结果：**  
由 [#8557](https://github.com/tinyhumansai/openhuman/pull/8557) 提供修复。

#### 3. [#8590：Telegram 出站回复失败后不重试且无日志](https://github.com/tinyhumansai/openhuman/issues/8590)  
**状态：CLOSED｜优先级：P2｜评论：1**

真实用户在使用 Windows 11 桌面版、OpenAI 兼容本地端点和 owner chat 时遇到回复丢失，且没有用户可见的错误记录。

**处理结果：**  
由 [#8593](https://github.com/tinyhumansai/openhuman/pull/8593) 增加临时故障退避重试及可观测日志。

#### 4. [#8497：Windows 安装后无法识别 `OpenHuman` 命令](https://github.com/tinyhumansai/openhuman/issues/8497)  
**状态：CLOSED｜优先级：P2｜评论：1**

用户在全新 Windows 环境按文档安装后，安装器未把二进制加入 PATH，同时 `$PROFILE` 创建/写入步骤失败。

**处理结果：**  
由 [#8555](https://github.com/tinyhumansai/openhuman/pull/8555) 修复。

### Pull Requests

今日 PR 多数尚无评论或点赞数据，因此无法以社区互动量客观排名。相对值得关注的是：

- **[#8564：修复卡片保存后产生重复 Flow](https://github.com/tinyhumansai/openhuman/pull/8564)**  
  反映工作流用户对“保存一次却出现两个副本”的高敏感度。

- **[#8699：修复 locale、IPC 与 Windows 测试套件](https://github.com/tinyhumansai/openhuman/pull/8699)**  
  涉及 Rust 侧多个 `service_*_direct` 命令、ACL 配置、废弃 `conscious_loop_run` 清理及测试修复，反映当前工程质量和跨平台稳定性仍在集中治理。

- **[#8692：x402_fetch 网络固定与 Sign-In-With-X](https://github.com/tinyhumansai/openhuman/pull/8692)**  
  是今日功能与安全影响较大的 PR 之一，但因后续钱包版本和 blockhash 问题又产生多轮修正，反映该链路集成复杂度较高。

---

## 5. Bug 与稳定性

### P2：中等优先级

1. **工作流提案并发元数据覆盖风险**  
   - Issue：[#8702](https://github.com/tinyhumansai/openhuman/issues/8702)
   - 相关 PR：[#8564](https://github.com/tinyhumansai/openhuman/pull/8564)
   - **Fix PR 状态：尚无独立、可确认已完成的修复；需求由 #8564 评审产生。**
   - 影响：可能出现元数据状态丢失、保存状态不一致或竞态覆盖。

2. **工作流卡片同名身份冲突**  
   - Issue：[#8456](https://github.com/tinyhumansai/openhuman/issues/8456)
   - Fix PR：[#8557](https://github.com/tinyhumansai/openhuman/pull/8557)
   - **状态：已有修复，PR 已关闭。**

3. **Telegram 回复静默丢失**  
   - Issue：[#8590](https://github.com/tinyhumansai/openhuman/issues/8590)
   - Fix PR：[#8593](https://github.com/tinyhumansai/openhuman/pull/8593)
   - **状态：已有修复，PR 已关闭。**

4. **Windows 安装后 CLI 不可用**  
   - Issue：[#8497](https://github.com/tinyhumansai/openhuman/issues/8497)
   - Fix PR：[#8555](https://github.com/tinyhumansai/openhuman/pull/8555)
   - **状态：已有修复，PR 已关闭。**

5. **浏览器无法打开页面**  
   - Fix PR：[#8707](https://github.com/tinyhumansai/openhuman/pull/8707)
   - **状态：已通过 TinySecurity 0.21.1 升级修复。**

6. **浏览器密码在后续页面读取中泄露**  
   - Fix PR：[#8708](https://github.com/tinyhumansai/openhuman/pull/8708)、[#8709](https://github.com/tinyhumansai/openhuman/pull/8709)
   - **状态：已有修复，PR 均已关闭。**

### P3：修复待落地或链路风险

1. **保存工作流后创建重复副本**  
   - PR：[#8564](https://github.com/tinyhumansai/openhuman/pull/8564)
   - **状态：待合并。**

2. **x402 支付、钱包密钥材料及 Solana blockhash 失败**  
   - PR：[#8692](https://github.com/tinyhumansai/openhuman/pull/8692)、[#8695](https://github.com/tinyhumansai/openhuman/pull/8695)、[#8696](https://github.com/tinyhumansai/openhuman/pull/8696)、[#8697](https://github.com/tinyhumansai/openhuman/pull/8697)、[#8698](https://github.com/tinyhumansai/openhuman/pull/8698)
   - **状态：均已关闭，但需关注实际发布包中的最终依赖固定版本是否统一。**

3. **locale、IPC 与 Windows 测试链修复**  
   - PR：[#8699](https://github.com/tinyhumansai/openhuman/pull/8699)
   - **状态：待合并。**

---

## 6. 功能请求与路线图信号

### 6.1 工作流保存的原子性与幂等性

来自 [#8702](https://github.com/tinyhumansai/openhuman/issues/8702) 和 [#8564](https://github.com/tinyhumansai/openhuman/pull/8564) 的信号非常明确：

- 保存操作不应创建重复 Flow；
- 元数据更新应具备条件写入能力；
- 卡片、Agent、Builder 应共享同一稳定对象身份；
- 保存交接应具备幂等性。

**下一版本可能性：较高。**  
这是由现有 PR 审查直接导出的工程需求，技术边界清晰，且修复已进入 PR 阶段。

### 6.2 浏览器凭据使用与跨站防护

来自 [#8708](https://github.com/tinyhumansai/openhuman/pull/8708) 和 [#8709](https://github.com/tinyhumansai/openhuman/pull/8709)：

- 代理不直接接触明文密码；
- 凭据注入与来源站点绑定；
- 防止后续快照或页面读取再次暴露秘密；
- 保持 TinySecurity 审计链有效。

**下一版本可能性：高。**  
三个相关 PR 已连续关闭，安全价值明确，预计属于近期安全维护内容。

### 6.3 x402 网络固定与 Sign-In-With-X

[#8692](https://github.com/tinyhumansai/openhuman/pull/8692) 表明 x402 正从单纯的支付调用向更严格的网络约束和身份认证发展。

**下一版本可能性：中高。**  
功能方向明确，但 PR 后续经历了 TinyWallet、rusqlite、目标授权及 Solana blockhash 多轮修正，发布前仍需集成验证。

### 6.4 IPC 直接服务命令与跨平台测试治理

[#8699](https://github.com/tinyhumansai/openhuman/pull/8699) 显示项目正在：

- 将 `service_*_direct` 能力迁入 Rust；
- 补齐 ACL；
- 清理废弃命令；
- 修复 locale、IPC 和 Windows 测试。

**下一版本可能性：中高。**  
这更偏基础设施而非用户可见功能，但会影响 Windows 与 IPC 功能的稳定性。

---

## 7. 用户反馈摘要

### 真实使用痛点

1. **消息回复可能静默消失**  
   在 Telegram owner chat 场景下，用户遇到网络或服务端错误后，回复没有送达，也没有可见日志。修复后，临时故障将自动退避重试。  
   来源：[#8590](https://github.com/tinyhumansai/openhuman/issues/8590)、[#8593](https://github.com/tinyhumansai/openhuman/pull/8593)

2. **Windows 安装后命令立即不可用**  
   用户按官方步骤在 Windows 11 全新环境安装，却无法运行 `OpenHuman`，且 PowerShell Profile 配置也失败。这是典型的首次使用阻断问题。  
   来源：[#8497](https://github.com/tinyhumansai/openhuman/issues/8497)、[#8555](https://github.com/tinyhumansai/openhuman/pull/8555)

3. **工作流保存结果不符合用户直觉**  
   用户从聊天卡片点击“保存”后，预期是保存现有 Flow，而不是再生成一份副本。该问题直接影响工作流 Builder 的可信度。  
   来源：[#8564](https://github.com/tinyhumansai/openhuman/pull/8564)

4. **同名工作流提案出现卡片串号**  
   当多个实时提案同名时，用户可能看到身份合并、保存状态错配或 React Key 冲突。稳定唯一 ID 是必要的基础体验保障。  
   来源：[#8456](https://github.com/tinyhumansai/openhuman/issues/8456)

5. **浏览器代理可能把密码暴露给模型或页面内容**  
   如果代理把秘密输入到普通文本框，后续 `snapshot`、`read_page` 或任务步骤可能再次显示密码。用户虽未在当前数据中留下评论，但该问题属于高敏感凭据安全风险。  
   来源：[#8708](https://github.com/tinyhumansai/openhuman/pull/8708)、[#8709](https://github.com/tinyhumansai/openhuman/pull/8709)

### 满意度信号

今日评论数普遍较低，尚未出现大量点赞或明确“已解决、体验改善”的正向反馈。因此，当前可以确认的是：

- 关键问题有明确复现环境；
- 多个问题已进入修复；
- 但缺少正式 Release 和用户侧验证，无法确认安装后或线上环境中的最终满意度。

---

## 8. 待处理积压

### 8.1 优先处理：元数据条件更新

- **[#8702](https://github.com/tinyhumansai/openhuman/issues/8702)**  
  今日唯一 OPEN Issue，直接影响并发一致性。建议在合并 [#8564](https://github.com/tinyhumansai/openhuman/pull/8564) 前明确 compare-and-set API、冲突处理和回归测试。

### 8.2 核心修复仍待合并

以下 PR 均处于 OPEN 状态：

- **[#8564：工作流卡片保存交接去重](https://github.com/tinyhumansai/openhuman/pull/8564)**  
  直接影响用户流程，应优先完成评审与合并。

- **[#8699：locale、IPC、Windows 测试套件修复](https://github.com/tinyhumansai/openhuman/pull/8699)**  
  变更范围较大，可能同时带来编译、ACL 或跨平台回归，需要维护者重点审核。

### 8.3 大规模清理 PR 积压

- **[#8706：删除死工具管线](https://github.com/tinyhumansai/openhuman/pull/8706)**
- **[#8705：删除 MCP 胶水代码](https://github.com/tinyhumansai/openhuman/pull/8705)**
- **[#8704：删除语音重复实现](https://github.com/tinyhumansai/openhuman/pull/8704)**
- **[#8703：删除未发布存储转换器](https://github.com/tinyhumansai/openhuman/pull/8703)**
- **[#8700：删除安全助手与凭据重导出层](https://github.com/tinyhumansai/openhuman/pull/8700)**
- **[#8701：迁移测试模块声明整理](https://github.com/tinyhumansai/openhuman/pull/8701)**

这些 PR 合计减少数千行代码，有助于核心瘦身，但建议按依赖关系分批合并，并要求完整测试通过，避免多个领域同时变动导致问题定位困难。

---

## 项目健康度结论

**综合健康度：良好偏积极，但处于高变更、高风险收敛期。**

- **积极因素：** 19 条 PR 更新、多个 P2 问题得到闭环修复；浏览器安全、Telegram、Windows 安装和钱包支付均出现实质性改进。
- **主要风险：** 8 条 PR 待合并，多个 PR 涉及数百至数千行清理；工作流保存仍存在未解决的并发元数据问题；钱包与 x402 修复链较复杂。
- **近期建议：**
  1. 优先解决 [#8702](https://github.com/tinyhumansai/openhuman/issues/8702) 并合并 [#8564](https://github.com/tinyhumansai/openhuman/pull/8564)；
  2. 对浏览器凭据链路执行跨页面、跨会话和相似域名测试；
  3. 对 TinyWallet、x402 与 Solana 修复进行统一依赖版本和集成回归；
  4. 将大规模死代码清理拆分合并，避免与功能修复同时进入发布分支；
  5. 在正式 Release 中明确列出 Windows PATH、Telegram 重试和浏览器安全相关迁移说明。

</details>

---
*本日报由 [Big Model Radar](https://github.com/96loveslife/big_model_radar) 自动生成。*
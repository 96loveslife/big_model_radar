# OpenClaw 生态日报 2026-11-15

> Issues: 390 | PRs: 500 | 覆盖项目: 8 个 | 生成时间: 2026-11-15 05:47 UTC

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

**统计日期：2026-11-15**  
**数据范围：过去 24 小时**

---

## 一、今日速览

- OpenClaw 过去 24 小时共更新 **390 条 Issues**，其中 **338 条仍活跃、52 条已关闭**；更新 **500 条 PR**，其中 **366 条待合并、134 条已合并或关闭**，整体开发吞吐很高。
- 项目今日发布 **1 个新版本：`v2026.11.5-beta.3`**，重点改善长时间会话场景下的可靠性，重点处理 transcript 索引、裁剪和压缩带来的内存压力。
- 今日开发重点集中在 **会话状态与子代理恢复、Gateway 性能优化、Web UI 状态表达、升级运行时可靠性、知识库并发读写** 等方向，说明项目正在从“功能快速扩张”继续转向“运行时稳定性与状态一致性”。
- 社区活跃但问题积压较重：大量 Issues 同时带有 `stale`、`no-new-fix-pr`、`needs-maintainer-review`、`needs-product-decision` 等标签，显示不少需求已经进入**等待产品决策或维护者审阅**阶段。
- 综合评估：**开发活跃度高、版本迭代快，核心工程方向正确；但可靠性债务和安全治理积压明显。** 当前最需要关注的是子代理交付失联、升级流程卡死、Prompt Cache 失效以及 Windows 插件构建失控等问题。

---

## 二、版本发布

### [v2026.11.5-beta.3](https://github.com/openclaw/openclaw/releases/tag/v2026.11.5-beta.3)

本次为 Beta 版本，主要亮点是**大会话可靠性优化**：

- 降低 transcript 在**索引、裁剪与压缩（compaction）**过程中的内存压力；
- 仅按需流式加载指定的 hydration payload；
- 遵循可配置的 summary limit，避免摘要内容无上限增长；
- 关联主要工作：
  - `#194099`
  - `#194066`
  - `#194536`
  - `#196207`

#### 破坏性变更

现有 Release Notes 未明确列出 breaking changes。但从实现方向看，涉及 transcript hydration、摘要限制和内存管理，开发者在升级时应重新验证：

- 超长会话的启动、压缩和恢复行为；
- 自定义摘要长度限制相关配置；
- 依赖旧 transcript hydration 行为的插件；
- 大型会话在低内存环境下的稳定性。

#### 迁移建议

1. **Beta 用户优先备份状态目录和 SQLite 数据**；
2. 重点回归“会话重载—压缩—恢复—分支切换”链路；
3. 观察 Gateway 内存峰值、SQLite worker 状态和会话加载耗时；
4. 第三方插件需确认没有依赖隐式加载全部 hydration payload；
5. 生产环境建议先灰度升级，不建议直接全量替换稳定版。

---

## 三、项目进展

### 1. 会话切换不再复制完整 transcript

#### [PR #198929：rewind and switch without copying the transcript](https://github.com/openclaw/openclaw/pull/198929)

该 PR 是今日最重要的性能改进之一。现有 rewind 和 branch switch 会为仅追加一条约 200 字节的 leaf 控制记录而复制完整 transcript；在约 **5.7 万事件、357 MB transcript** 的生产会话中，曾触发 SQLite worker 的 `ERR_WORKER_OUT_OF_MEMORY`。

改进方向：

- rewind 与 branch switch 不再复制完整历史；
- 避免大 transcript 带来的内存峰值和 SQLite worker 崩溃；
- 明显改善大型长期会话的可用性。

**影响评估：** 这是面向核心会话架构的高价值优化，有助于缓解“大会话可靠性”债务，但仍需等待维护者验证其兼容性。

---

### 2. Gateway 重启后恢复子代理结果

#### [PR #199488：recover child results when restart interrupts requester delivery](https://github.com/openclaw/openclaw/pull/199488)

该 PR 针对 Gateway 重启发生在 requester settle/announce 阶段时的结果丢失问题：

- 已保留的成功子代理结果可在重启后重新交还 requester；
- 目标是避免重复交付；
- 与近期多个“子代理完成后父会话无法恢复”的 P0/P1 Issue 高度相关。

**影响评估：** 对子代理、后台任务和长期工作流可靠性意义重大，可视为今日最接近生产事故修复的变更之一。

---

### 3. 会话与状态检查的性能优化

#### [PR #199482：避免重复 transcript writer assertion](https://github.com/openclaw/openclaw/pull/199482)

减少 durable transcript append 前重复执行完整 writer assertion。目标是保留 admission 和 commit 阶段必要的权限检查，同时去掉冗余同步回调。

#### [PR #199477：避免重复 progress-card authority checks](https://github.com/openclaw/openclaw/pull/199477)

减少进度卡写入过程中重复的 caller authority check；单次写入可减少约 **12 次调用方检查**。

#### [PR #199481：减少重复 source authority 分配](https://github.com/openclaw/openclaw/pull/199481)

减少重复 session-source authority 检查中产生的闭包分配及 composition guard 重入，目标是降低高频路径上的分配和检查成本。

#### [PR #199480：复用 sealed history proof](https://github.com/openclaw/openclaw/pull/199480)

在加载 retained session history 时复用已封存历史，避免重复创建深检查数组、property descriptor 和 Set，以降低会话加载的内存与 CPU 消耗。

**影响评估：** 这些改动方向一致，说明维护者正在系统治理 session state 路径中的重复校验和分配问题。短期收益可能不如 PR #198929 直观，但有助于改善高并发和高频工具调用场景。

---

### 4. Knowledge 搜索不再阻塞写入

#### [PR #199489：keep filtered searches from blocking writers](https://github.com/openclaw/openclaw/pull/199489)

修复 filtered Knowledge 搜索在构建查询级全文索引时阻塞无关 SQLite 写入的问题，同时保持：

- 排序；
- 分页；
- 引用；
- freshness；
- superseded-record 结果。

**影响评估：** 对知识库、记忆与检索场景非常重要，可降低读操作对写入延迟和生产稳定性的影响。

---

### 5. 升级后保留 bundled hooks

#### [PR #199280：preserve bundled hooks after npm updates](https://github.com/openclaw/openclaw/pull/199280)

修复 npm 更新过程中 runtime retention 使用硬链接，导致 bundled hooks 静默消失的问题。被拒绝的 hook 文件还将产生包含文件名和原因的明确警告。

**影响评估：** 直接改善升级后的插件/Hook 可发现性，与多个“升级后功能异常”的 Issue 有关。

---

### 6. Web UI 状态准确性持续改善

今日还有一批面向 Web UI 的修复：

- [PR #199093：修复 image-only 工具结果显示“Full output unavailable”](https://github.com/openclaw/openclaw/pull/199093)
- [PR #199281：自动化投递账户改为按名称选择](https://github.com/openclaw/openclaw/pull/199281)
- [PR #199279：拒绝保存后保留 Decision assistance 开关状态](https://github.com/openclaw/openclaw/pull/199279)
- [PR #199487：移除服务器资源后不再误附着到其他服务器](https://github.com/openclaw/openclaw/pull/199487)
- [PR #199486：Template 草稿变化后禁用 Publish](https://github.com/openclaw/openclaw/pull/199486)
- [PR #199485：导航后保留 Incognito 草稿权限](https://github.com/openclaw/openclaw/pull/199485)
- [PR #199322：结果尚未知时不再显示零 Activity 计数](https://github.com/openclaw/openclaw/pull/199322)
- [PR #199317：WhatsApp 状态未知时不显示“未关联”](https://github.com/openclaw/openclaw/pull/199317)
- [PR #199314：读取配对清单失败时不再误报“没有账号”](https://github.com/openclaw/openclaw/pull/199314)
- [PR #199276：移除含义不清的 Sessions avg/errors 行](https://github.com/openclaw/openclaw/pull/199276)
- [PR #199274：为关闭的 Templates Lab 提供启用入口](https://github.com/openclaw/openclaw/pull/199274)

**影响评估：** 单项改动较小，但集中体现了 UI 层“未知状态不可伪装成否定状态”的设计准则，可减少用户误解和错误操作。

---

### 7. Telegram 会话身份统一

#### [PR #198934：one conversation identity, owned by the channel](https://github.com/openclaw/openclaw/pull/198934)

将 Telegram 会话身份判断集中到 channel 层，避免多个调用点分别解析 `chat:topic:N` 导致身份判断不一致。

**影响评估：** 对 Telegram DM topic、频道 topic 和 agent 路由正确性有直接帮助；由于属于兼容性重构，合并前需要重点关注回归测试。

---

### 8. 模板写入失败后可重试

#### [PR #199447：allow retrying creation after a partial write](https://github.com/openclaw/openclaw/pull/199447)

`openclaw templates create` 在磁盘写入中途失败后可能留下空文件或部分文件；此前释放磁盘空间再重试会被“非空文件”检查拒绝。该 PR 改为保留独占创建语义，同时允许安全重试。

**影响评估：** 改善 CLI 的故障恢复能力，减少人工删除残留文件的操作成本。

---

### 今日整体推进程度

今日没有提供具体 PR 的合并时间线，因此无法准确计算“已合并数量对应的功能完成度”。但从状态看：

- **134 条 PR 已合并或关闭**，其中包含部分直接修复；
- 至少 **366 条 PR 仍待合并**；
- 高价值改动集中在会话可靠性、子代理恢复、状态权限、升级保留和 UI 正确性。

项目今日明确向前推进，但评审吞吐仍落后于 PR 创建速度，维护者审阅与产品决策可能成为下一阶段瓶颈。

---

## 四、社区热点

### 1. Prompt Cache 持续被会话前缀重写破坏

- [Issue #143017：persistent session rewrites its prefix，测得 21.3M cache-write tokens](https://github.com/openclaw/openclaw/issues/143017)
- [Issue #182891：Prompt cache never reused，cache read 每次降为 0](https://github.com/openclaw/openclaw/issues/182891)
- [Issue #177506：Skill Workshop reviews 破坏 prompt-cache prefix](https://github.com/openclaw/openclaw/issues/177506)
- [Issue #84662：Codex app-server 每轮写入 runtime context，导致输入持续增长](https://github.com/openclaw/openclaw/issues/84662)

**背后诉求：**

用户真正关心的不是“缓存是否存在”，而是：

- 长会话是否能够稳定复用缓存；
- 成本是否因前缀重写而失控；
- runtime context、skill review 和工具历史是否会污染稳定前缀；
- 是否有明确的缓存命中率指标、诊断工具和架构级约束。

这是今日最集中、成本影响最明显的社区议题。它同时涉及运行时架构、Provider 计费和长会话性能，预计会继续成为下一阶段的高优先级路线。

---

### 2. 子代理完成交付与会话阻塞

- [Issue #172837：Codex nativeSubagentAssignments 在交付放弃后未清理](https://github.com/openclaw/openclaw/issues/172837) — 已关闭
- [Issue #194403：helper completion continuation 使自身 authority 失效](https://github.com/openclaw/openclaw/issues/194403) — P1
- [Issue #196199：Codex helper completion 无法恢复 parent](https://github.com/openclaw/openclaw/issues/196199) — P1 回归
- [Issue #196656：Windows 子代理运行与 completion announce 不可靠](https://github.com/openclaw/openclaw/issues/196656) — P1
- [Issue #166964：requester authority 被撤销后完成交付永久失败](https://github.com/openclaw/openclaw/issues/166964)
- [Issue #180941：agents 反复调用 `sessions_yield`，未发现 task tools](https://github.com/openclaw/openclaw/issues/180941)

**背后诉求：**

用户希望子代理具备真正可靠的“后台任务”语义：

- 父会话可以安全让出执行权；
- 子代理结束后必然恢复父会话；
- Gateway 重启不丢结果；
- authority 撤销不会留下永久等待；
- 工具发现应避免 `nothing_pending` 无进展循环。

其中 [PR #199488](https://github.com/openclaw/openclaw/pull/199488) 已直接覆盖重启恢复路径，其他问题仍缺少明确 fix PR。

---

### 3. 升级、更新器与运行时保留

- [Issue #193094：Managed update 在 validating 阶段挂起 57 分钟后被 SIGKILL](https://github.com/openclaw/openclaw/issues/193094) — P0
- [Issue #197083：Post-install Doctor WAL 校验失败，11.3 更新半完成](https://github.com/openclaw/openclaw/issues/197083)
- [Issue #187917：updater-runtime-retention 更新失败](https://github.com/openclaw/openclaw/issues/187917)
- [Issue #183479：update repair 被 retained package recovery 阻塞](https://github.com/openclaw/openclaw/issues/183479)
- [PR #199280：npm 更新后保留 bundled hooks](https://github.com/openclaw/openclaw/pull/199280)

**背后诉求：**

升级流程必须具备：

- 明确的阶段超时；
- 可恢复的事务状态；
- 回滚或人工修复路径；
- 不因 runtime retention 丢失 hooks；
- 不留下“核心已更新、插件/状态未同步”的半完成状态。

这一组问题直接关系到用户能否安全部署新版本，是当前对生产运维风险最高的领域之一。

---

### 4. Memory Search 超时、召回阻塞与 FTS 回退

- [Issue #136405：远程 embedding 卡住导致 memory_search 15 秒挂起](https://github.com/openclaw/openclaw/issues/136405)
- [Issue #180978：Active Memory 熔断器在聊天节奏下从未打开](https://github.com/openclaw/openclaw/issues/180978)
- [Issue #114913：主 embedding 消耗全部 deadline，未回退 FTS](https://github.com/openclaw/openclaw/issues/114913) — 已关闭
- [Issue #143206：Dreaming 有失败和待处理 narrative 仍记录为成功](https://github.com/openclaw/openclaw/issues/143206)
- [Issue #179954：支持逐条 memory chunking](https://github.com/openclaw/openclaw/issues/179954)

**背后诉求：**

Memory 功能需要从“功能存在”提升到“故障可预测”：

- 远程 embedding 慢或失败时快速降级；
- 熔断器必须符合真实调用间隔；
- Cron/Dreaming 失败不能被记为成功；
- 用户需要控制索引粒度和成本。

---

### 5. 控制台与桌面端体验

- [Issue #196820：Control UI 在 macOS/Edge 中 `Element.getAnimations()` 循环并占用 100% CPU](https://github.com/openclaw/openclaw/issues/196820) — P1 回归
- [Issue #163739：Ctrl+Shift+A 归档快捷键与浏览器冲突且不可配置](https://github.com/openclaw/openclaw/issues/163739)
- [Issue #192667：macOS App 打开会话后 Settings 卡顿，深色主题下输入框不可见](https://github.com/openclaw/openclaw/issues/192667)
- [Issue #163564：终端型助手回复缺少 Reply/Copy 操作](https://github.com/openclaw/openclaw/issues/163564)
- [Issue #161800：iOS 内嵌 Dashboard 每次加载创建新浏览器身份并循环配对](https://github.com/openclaw/openclaw/issues/161800) — P0 安全/发布阻塞

**背后诉求：**

用户期待 Web、iOS、macOS 客户端在状态表达、快捷键、主题和资源生命周期上达到产品级一致性，而不只是功能可用。

---

## 五、Bug 与稳定性

### P0 / 发布阻塞级

| 问题 | 状态 | Fix PR / 说明 |
|---|---|---|
| [Managed update validating 阶段运行 3414 秒，超过 1800 秒预算后被 SIGKILL](https://github.com/openclaw/openclaw/issues/193094) | Open | 暂无明确 fix PR |
| [Codex protected continuation 阻止所有后续消息，但 Stop 报告没有活动运行](https://github.com/openclaw/openclaw/issues/194664) | Open | 暂无明确 fix PR |
| [iOS 内嵌 Dashboard 每次加载创建新设备身份，循环产生配对请求](https://github.com/openclaw/openclaw/issues/161800) | Open | 暂无明确 fix PR；要求安全审查和实机复现 |

### P1 / 高优先级

| 问题 | 状态 | Fix PR / 说明 |
|---|---|---|
| [Helper completion continuation 使自身 authority 失效并阻塞后续对话](https://github.com/openclaw/openclaw/issues/194403) | Open | 暂无明确 fix PR |
| [2026.10.10 后 native Codex helper completion 约每次失败一次，父会话无法恢复](https://github.com/openclaw/openclaw/issues/196199) | Open | [PR #199488](https://github.com/openclaw/openclaw/pull/199488) 覆盖重启恢复，但未证明覆盖全部回归路径 |
| [Windows 子代理运行、announce 和 completion delivery 不可靠](https://github.com/openclaw/openclaw/issues/196656) | Open | 暂无明确 fix PR |
| [macOS Gateway 主线程关闭 worker MessagePort 时阻塞](https://github.com/openclaw/openclaw/issues/181120) | Open | 暂无明确 fix PR |
| [Control UI 在 macOS App WebContent/Edge 中 100% CPU 死循环](https://github.com/openclaw/openclaw/issues/196820) | Open | 暂无明确 fix PR |
| [Codex app-server 将每轮 runtime context 写入 native history，输入持续膨胀](https://github.com/openclaw/openclaw/issues/84662) | Open | 暂无明确 fix PR |
| [Prompt cache 每次都变为 read 0](https://github.com/openclaw/openclaw/issues/182891) | Open | 暂无明确 fix PR；与长会话架构相关 |
| [Subagent completion delivery 在 requester authority 被撤销后永久失败](https://github.com/openclaw/openclaw/issues/166964) | Open | 暂无明确 fix PR |

### P2 / 重要稳定性与数据一致性问题

| 问题 | 状态 | Fix PR / 说明 |
|---|---|---|
| [Windows 插件 source-capture staging 重复物化自身依赖，24 分钟从 290 MB 增至 612 MB+](https://github.com/openclaw/openclaw/issues/162585) | Open | 暂无明确 fix PR |
| [16 个调用点输出相同的“changed while starting work”，缺少原因码](https://github.com/openclaw/openclaw/issues/127195) | Open | 暂无明确 fix PR |
| [Post-install Doctor WAL publication 校验失败，更新停留在半完成状态](https://github.com/openclaw/openclaw/issues/197083) | Open | 暂无明确 fix PR |
| [远程 embedding 阻塞使 `memory_search` 挂起，缺少每次调用超时/重试配置](https://github.com/openclaw/openclaw/issues/136405) | Open | 暂无明确 fix PR |
| [Cron 绑定 persistent session 时在 session rotation admission 阶段被拒绝](https://github.com/openclaw/openclaw/issues/160494) | Open | 暂无明确 fix PR |
| [sessions.delete 返回 `ok:true / deleted:false`，运行中的 session_windows 无法清理](https://github.com/openclaw/openclaw/issues/160719) | Open | 暂无明确 fix PR |
| [macOS TTS 将分段 MP3 转为 CAF 后出现音频截断](https://github.com/openclaw/openclaw/issues/197531) | Open | 暂无明确 fix PR |
| [Prompt cache 被 Skill Workshop review 重写，单晚丢约 16.7M tokens](https://github.com/openclaw/openclaw/issues/177506) | Open | 暂无明确 fix PR |
| [Dreaming 存在失败和 pending narrative 仍记为 OK，且不重试](https://github.com/openclaw/openclaw/issues/143206) | Open | 暂无明确 fix PR |
| [Outbound queue 无 CLI 检查或结算 `unknown_after_send` 项](https://github.com/openclaw/openclaw/issues/183048) | Open | 暂无明确 fix PR |
| [Telegram 独立 `MEDIA:` 行未发送已有本地 PDF，且无错误日志](https://github.com/openclaw/openclaw/issues/187588) | Open | 暂无明确 fix PR |
| [Windows `openclaw.cmd` shim 截断多行 CLI 参数](https://github.com/openclaw/openclaw/issues/158817) | Open | 暂无明确 fix PR |
| [HEIC 图片转换失败后每次残留约 250–400 MB RSS](https://github.com/openclaw/openclaw/issues/163107) | Open | 暂无明确 fix PR |

### 已有明确修复方向的代表性 PR

- [PR #199488](https://github.com/openclaw/openclaw/pull/199488)：Gateway 重启后恢复子代理结果；
- [PR #198929](https://github.com/openclaw/openclaw/pull/198929)：避免 rewind/branch 复制大 transcript；
- [PR #199280](https://github.com/openclaw/openclaw/pull/199280)：升级后保留 bundled hooks；
- [PR #199089](https://github.com/openclaw/openclaw/pull/199089)：Knowledge 搜索不阻塞写入；
- [PR #199447](https://github.com/openclaw/openclaw/pull/199447)：模板部分写入后可安全重试；
- [PR #198934](https://github.com/openclaw/openclaw/pull/198934)：统一 Telegram 会话身份解析。

---

## 六、功能请求与路线图信号

### 1. Claude 原生 Web Search Provider

#### [Issue #192632](https://github.com/openclaw/openclaw/issues/192632)

提议新增 `claude` web_search provider：

- 通过 Anthropic Messages API 的服务端 `web_search` 工具执行搜索；
- 返回与 Gemini、Perplexity provider 相似的引用结构。

**路线图判断：中高概率。**  
需求边界清晰，现有 provider 架构具备可复用接口，用户基础也较明确。下一版本若扩展搜索 provider，Claude 支持是自然增量。

---

### 2. A2A 单向 dispatch/handoff 模式

#### [Issue #44309](https://github.com/openclaw/openclaw/issues/44309)

为 agent-to-agent 消息增加只投递、不回告的 dispatch-only 模式，避免 handoff 后出现 reply-back ping-pong。

**路线图判断：中等概率。**  
Issue 已有 18 条评论并关闭，说明社区讨论充分，但标签包含 `needs-product-decision`。是否进入近期版本取决于多代理通信语义是否被纳入统一设计。

---

### 3. Microsoft Teams 动态解析 SharePoint Site

#### [Issue #136271](https://github.com/openclaw/openclaw/issues/136271)

上传 Teams 频道文件时自动解析当前团队 SharePoint site，而不是要求硬编码 `sharePointSiteId`。

**路线图判断：中等概率。**  
场景明确，但标签为 `not-repro-on-main` 且偏企业集成功能，可能需要维护者确认当前支持边界和 API 权限限制。

---

### 4. Control UI 快捷键可配置

#### [Issue #163739](https://github.com/openclaw/openclaw/issues/163739)

允许用户修改或禁用 Ctrl/Command+Shift+A，归档快捷键不应与浏览器冲突。

**路线图判断：中高概率。**  
属于低成本、高用户价值的基础可用性改进，也与近期多项 Web UI 状态和交互 PR 的方向一致。

---

### 5. Chat Session 命名与子代理会话生命周期统一

#### [Issue #103067](https://github.com/openclaw/openclaw/issues/103067)

集中定义：

- ACP/subagent session 的命名；
- 会话创建者；
- 生命周期；
- 跨渠道持久化；
- 过期和回收策略。

**路线图判断：中等概率，但架构价值高。**  
近期 PR 已开始优化 transcript、authority、session identity 和 subagent result recovery，说明项目正在为更统一的会话模型铺路。

---

### 6. 出站消息统一安全边界

#### [Issue #56349](https://github.com/openclaw/openclaw/issues/56349)

建立不可绕过的 pre-send 策略验证与修改层，让所有出站路径——agent reply、auto-reply、message tool 和 channel adapter——都经过同一策略检查。

**路线图判断：短期不确定，中长期高优先级。**  
该需求涉及安全边界、插件兼容性和消息语义，不能作为普通小功能处理；但它符合当前 Gateway 集中治理方向，值得进入正式架构路线图。

---

### 7. Memory 逐条分块

#### [Issue #179954](https://github.com/openclaw/openclaw/pull/179954)

允许 `MEMORY.md`、`USER.md` 之外的 memory 文件按 entry 粒度建立索引。

**路线图判断：中等概率。**  
已有明确实现基础和 linked PR，需求边界清晰，适合与 Memory timeout/FTS fallback 一并进入下一轮检索可靠性工作。

---

### 8. Talk 语音任务回执可关闭或替换

#### [Issue #184803](https://github.com/openclaw/openclaw/issues/184803)

允许关闭或自定义 realtime Talk 调用中的语音任务回执。

**路线图判断：较低至中等概率。**  
需求真实但属于交互偏好增强，需判断是否会影响语音确认、可访问性与自动化流程。

---

### 9. Cron 生命周期与终止条件

#### [Issue #130247](https://github.com/openclaw/openclaw/issues/130247)

建议提供 `--until`、`--max-runs`、expire 等终止条件，并记录累计运行次数。

**路线图判断：中高概率。**  
当前 cron 在持续运行、失败重试和状态统计方面已有多个相关 Issue。补充生命周期控制能同时改善运维可预测性与资源管理。

---

### 10. ACP 子代理成本记账

#### [Issue #130257](https://github.com/openclaw/openclaw/issues/130257)

Tasks ledger 未记录 delegated ACP run 的 token 和成本，导致父轮次显示 `$0.04`、子任务却实际消耗 `$14.14`。

**路线图判断：中等概率。**  
随着任务、memory 和子代理使用量快速增长，成本归因会成为重要运维能力，建议与 session/subagent 遥测统一设计。

---

## 七、用户反馈摘要

### 真实使用场景

- **长期持久化会话**：用户持续运行 WhatsApp、Mattermost、Teams 和多渠道 agent，最关心长会话内存、缓存命中和任务连续性。
- **后台子代理编排**：用户频繁使用 native Codex/ACP helper，并依赖父会话自动恢复；近期故障直接造成目标暂停和用户被锁在会话外。
- **无人值守 Cron/Dreaming**：用户要求任务在失败、pending、重启及 session rotation 后仍可恢复，且状态必须准确。
- **企业文件投递**：Teams 和 Telegram 用户希望文件上传无需额外硬编码配置，失败时必须有明确日志。
- **多平台客户端**：macOS、iOS、Windows、浏览器 Control UI 用户遇到不同表现，说明跨平台状态语义仍不统一。
- **成本敏感型 agent 运营**：多用户通过真实流量测得 21.3M cache-write tokens、16.7M cache drops，说明 Prompt Cache 已直接影响实际费用。

### 主要不满意点

1. **状态不可信**：很多 UI 或 CLI 在“不知道”时显示成确定的否定、空状态或成功状态。
2. **错误不可诊断**：大量错误使用相同文案且无 reason code、call-site 或阶段信息。
3. **恢复能力不足**：子代理、Cron、升级和 Dreaming 在重启、rotation、权限撤销后容易丢失完成结果。
4. **升级风险高**：更新器可能超时、被杀、半完成或导致 hooks 丢失。
5. **平台差异明显**：Windows 插件构建、Windows CLI shim、macOS TTS、macOS Gateway、iOS Dashboard 分别出现独立问题。
6. **治理标签积压**：很多需求长期没有 fix PR，但仍在等待维护者审阅或产品决策。

### 相对积极信号

- 用户愿意提供流量捕获、内存数据、状态数据库副本、系统采样和跨版本复现，说明社区具备较强调试能力；
- 今日大量 PR 附带复现、截图、proof 和兼容性说明，表明项目正在提高变更的工程可审查性；
- 新版本直接聚焦大会话可靠性，说明维护者开始把用户暴露出的核心运行时问题纳入正式发布目标。

---

## 八、待处理积压

### 1. Prompt Cache 架构问题

- [Issue #143017](https://github.com/openclaw/openclaw/issues/143017)：标记 `stale`、`no-new-fix-pr`；
- [Issue #182891](https://github.com/openclaw/openclaw/issues/182891)：无明确 fix PR；
- [Issue #177506](https://github.com/openclaw/openclaw/issues/177506)：无明确 fix PR。

**建议：**  
建立稳定 prompt prefix 的不可变区域、runtime context 注入规范和缓存命中诊断页；否则长会话成本会持续随历史增长。

---

### 2. 子代理 authority 与完成交付

- [Issue #194403](https://github.com/openclaw/openclaw/issues/194403)
- [Issue #196199](https://github.com/openclaw/openclaw/issues/196199)
- [Issue #196656](https://github.com/openclaw/openclaw/issues/196656)
- [Issue #166964](https://github.com/openclaw/openclaw/issues/166964)

**建议：**  
将 authority 生命周期、child result persistence、restart recovery 和 parent wake-up 统一为一个可测试的状态机。PR #199488 可作为第一步，但不能替代全链路治理。

---

### 3. 更新器事务性与超时

- [Issue #193094](https://github.com/openclaw/openclaw/issues/193094)
- [Issue #197083](https://github.com/openclaw/openclaw/issues/197083)
- [Issue #183479](https://github.com/openclaw/openclaw/issues/183479)
- [Issue #187917](https://github.com/openclaw/openclaw/issues/187917)

**建议：**  
增加阶段级硬超时、可恢复 checkpoint、Doctor 失败后的明确修复入口，并避免 runtime retention 通过硬链接破坏 bundled hooks。

---

### 4. 会话状态错误缺少可观测性

- [Issue #127195](https://github.com/openclaw/openclaw/issues/127195)
- [Issue #160494](https://github.com/openclaw/openclaw/issues/160494)
- [Issue #160719](https://github.com/openclaw/openclaw/issues/160719)

**建议：**  
统一错误码与 reason code，至少包含 call-site、phase、session key、authority result 和 retry decision，避免十六处相同错误文案。

---

### 5. 等待产品决策的长期需求

- [Issue #44309](https://github.com/openclaw/openclaw/issues/44309)：A2A 单向 dispatch；
- [Issue #56349](https://github.com/openclaw/openclaw/issues/56349)：统一出站安全边界；
- [Issue #130247](https://github.com/openclaw/openclaw/issues/130247)：Cron 终止条件；
- [Issue #130257](https://github.com/openclaw/openclaw/issues/130257)：子代理成本记账；
- [Issue #103067](https://github.com/openclaw/openclaw/issues/103067)：会话命名和生命周期。

**建议：**  
这些 Issue 的主要阻塞不是技术实现，而是缺少统一的会话模型、消息模型和插件 API 决策。应安排一次专门的架构决策评审，而不是继续逐项打补丁。

---

### 6. 长期无人跟进但仍影响生产的问题

- [Issue #162585](https://github.com/openclaw/openclaw/issues/162585)：Windows 插件 staging 线性膨胀；
- [Issue #158817](https://github.com/openclaw/openclaw/issues/158817)：Windows 多行参数截断；
- [Issue #163107](https://github.com/openclaw/openclaw/issues/163107)：HEIC 失败后的高内存残留；
- [Issue #183048](https://github.com/openclaw/openclaw/issues/183048)：outbound queue 缺少排查 CLI；
- [Issue #187588](https://github.com/openclaw/openclaw/issues/187588)：Telegram 本地 PDF 静默不发送。

**建议：**  
这些问题的用户影响明确，但因标记为 `stale` 或缺少 fix PR 容易被遗漏。建议按“数据/消息丢失、内存泄漏、跨平台兼容”重新分诊。

---

## 结论

OpenClaw 今日呈现出**“高吞吐开发 + 高强度稳定性治理”**的典型阶段。`v2026.11.5-beta.3` 对大会话内存和 transcript 可靠性的改进，以及 PR #198929、#199488 对大 transcript 与子代理恢复的修复，说明团队正在正面处理核心架构问题。

不过，当前仍有三类关键健康度风险：

1. **大量 P0/P1 可靠性问题缺少明确 fix PR；**
2. **500 条 PR 更新对应 366 条待合并，评审与决策吞吐可能滞后；**
3. **Prompt Cache、更新器事务性和子代理状态机已形成跨 Issue 的系统性债务。**

项目健康度可评估为：**开发活跃度很高，功能推进有效，发布方向务实；但生产稳定性仍处于修复期，维护者审阅和产品决策是当前最明显的瓶颈。**

---

## 横向生态对比

# 个人 AI 助手 / 自主智能体开源生态横向对比分析

**分析日期：2026-11-15**  
**统计口径：各项目过去 24 小时的 GitHub Issue、PR 与 Release 更新。**  
**说明：** Issue/PR 数量包含状态更新；“已关闭”不一定等同于已合并或问题已彻底解决。

---

## 1. 生态全景

个人 AI 助手与自主智能体生态正从“功能接入期”进入“**运行时可靠性与状态治理期**”：模型、渠道和工具接入仍持续扩张，但用户关注点已明显转向长会话、子代理恢复、超时取消、升级事务性、成本核算和可观测性。OpenClaw、Hermes Agent 和 QwenPaw 展现出高强度并行开发，其中 OpenClaw 的会话状态治理和 Hermes 的统一网关收敛最系统；NanoBot、OpenHuman 更偏向 WebUI、跨平台体验与模块化重构。与此同时，PR 评审积压、产品决策滞后和测试覆盖不足，成为多个项目共同面临的规模瓶颈。

---

## 2. 各项目活跃度对比

| 项目 | 今日 Issues | 今日 PRs | Release | 活跃度判断 | 健康度评估 |
|---|---:|---:|---|---|---|
| **OpenClaw** | 390 更新：338 活跃 / 52 关闭 | 500 更新：366 待处理 / 134 合并或关闭 | `v2026.11.5-beta.3` | **极高** | **较高，但可靠性与评审积压明显** |
| **Hermes Agent** | 50 更新：48 活跃 / 2 关闭 | 50 更新：41 待处理 / 9 合并或关闭 | 1 个 canary | **高** | **中等偏积极；功能强、稳定性欠账较多** |
| **QwenPaw** | 14 更新：9 活跃 / 5 关闭 | 16 更新：15 待处理 / 1 关闭 | 无 | **高** | **良好；修复候选密集，但合并与发布不足** |
| **OpenHuman** | 6 更新 | 24 更新：19 合并或关闭 / 5 待处理 | 无 | **高** | **良好偏积极；架构治理强，需防重构回归** |
| **NanoBot** | 2 更新：1 新开 / 1 关闭 | 32 更新：29 合并或关闭 / 3 待处理 | 无 | **高** | **良好；闭环快，长期 PR 积压需清理** |
| **PicoClaw** | 2 更新 | 10 更新：7 合并或关闭 / 3 待处理 | 无 | **中等偏高** | **中等；偏清理积压，Provider 评审机制不足** |
| **IronClaw** | 1 更新 | 1 更新：均待处理 | 无 | **低** | **中等偏积极；方向清晰但交付节奏慢** |
| **LobsterAI** | 0 | 1 更新，待处理 | 无 | **低** | **中等偏稳定；单一体验修复，社区信号不足** |

### 活跃度分层

- **第一梯队：OpenClaw、Hermes Agent、QwenPaw、OpenHuman**
  - OpenClaw 在绝对吞吐和版本发布上明显领先；
  - Hermes、QwenPaw 的问题发现密度高，修复候选丰富；
  - OpenHuman 的架构重构和代码治理最集中。

- **第二梯队：NanoBot、PicoClaw**
  - NanoBot 合并闭环效率较高，但开放 PR 中存在数月积压；
  - PicoClaw 主要在消化历史 PR 和扩大 Provider 生态，新需求交付偏慢。

- **第三梯队：IronClaw、LobsterAI**
  - IronClaw 聚焦成本预算这一高价值方向，但产出量较低；
  - LobsterAI 今日仅有一项 Cowork 文件编辑展示改进。

---

## 3. OpenClaw 在生态中的定位

### 3.1 生态位置

OpenClaw 已接近“**个人 AI 助手平台与自主智能体运行时**”的定位，而不仅是单用途聊天机器人。其能力边界覆盖：

- 多渠道消息接入；
- 多会话与长期持久化；
- ACP/Codex 等子代理编排；
- Knowledge、Memory、搜索与工具系统；
- Gateway、CLI、Web UI、桌面端及移动端；
- 插件、Hook、Skills 与升级治理。

在本次样本中，OpenClaw 的绝对活跃度显著领先：**390 条 Issue 更新、500 条 PR 更新、1 个 Beta Release**，远高于第二梯队项目的 14–50 条量级。

### 3.2 主要优势

1. **会话架构成熟度领先**
   - 直接处理 transcript 复制、hydration、compaction、缓存前缀和 SQLite worker 内存压力；
   - PR #198929 避免 rewind/branch switch 复制完整 transcript，属于影响核心数据模型的高价值优化。

2. **子代理与长期任务能力更完整**
   - 覆盖子代理启动、交付、authority、Gateway 重启恢复和后台续接；
   - PR #199488 对重启后结果恢复的修复，直接回应生产级任务连续性需求。

3. **全栈产品化程度高**
   - 同时维护 Web UI、macOS、Windows、iOS、渠道、Gateway、更新器与插件生态；
   - 同类项目往往只覆盖其中一部分。

4. **发布节奏与治理信号强**
   - Beta 版本明确聚焦大会话可靠性，而不是仅堆叠新功能；
   - 大量 PR 附带复现、内存数据、状态库副本和兼容性说明。

### 3.3 技术路线差异

| 项目 | 核心路线 |
|---|---|
| **OpenClaw** | 以 Gateway 为中心的多渠道 Agent 运行时，强调整体会话状态、子代理、Memory/Knowledge 与长期任务连续性 |
| **Hermes Agent** | 以 Unified Gateway 为中心，先完成 CLI、TUI、Desktop、API、Bot、Cron、Kanban 的统一接入，再集中修复网关回归 |
| **QwenPaw** | 偏“个人 AI 设备/桌面助手 + 渠道生态”，强调飞书、钉钉、移动端、本地模型与 Console 管理 |
| **OpenHuman** | Rust Core 驱动的本地优先个人 AI 助手，强调浏览器、MCP、Artifacts、TinyComputer 与可观测性 |
| **NanoBot** | 轻量 Python Agent，强调 WebUI、模型/渠道兼容、低成本安全 HTTP 访问与快速维护 |
| **PicoClaw** | Go/多平台嵌入式 Agent，Provider 适配广，重视上游同步、跨平台部署与轻量化 |
| **IronClaw** | 聚焦 Agent 执行治理，尤其是成本计量、预算限制与任务生命周期 |
| **LobsterAI** | 偏 AI 工作台/助手产品，强调 Cowork 文件操作、渲染层与任务体验 |

### 3.4 社区规模判断

虽然摘要没有提供统一口径的贡献者、Stars 或总 Issue/PR 数，不能做严格社区规模排名；但从单日 890 条 Issue/PR 更新可见，OpenClaw 拥有本样本中最明显的社区吞吐和关注规模。

其社区优势是：

- 用户覆盖长会话、多渠道、个人助理和后台自动化场景；
- 真实环境反馈丰富，内存、缓存、数据库和跨平台问题均有数据；
- 第三方插件与 Provider 生态活跃。

其社区负担则是：

- 需求和 PR 增长快于维护者评审；
- 大量问题等待产品决策；
- 高复杂度问题被拆成大量局部 Issue/PR，容易形成“已修复单点、但全链路仍不可靠”的状态。

---

## 4. 共同关注的技术方向

### 4.1 长会话可靠性与 Prompt Cache

**涉及项目：OpenClaw、Hermes Agent、QwenPaw、NanoBot**

- **OpenClaw**：长会话前缀被 runtime context、Skill review 等重写，造成 cache read 归零和大量 cache-write tokens。
- **Hermes Agent**：Gateway turn 重启后，session FIFO 可能永久暂停；Desktop transcript 存在重复、乱序和丢失。
- **QwenPaw**：上下文压缩后缺少归档历史查看入口，用户容易误以为历史丢失。
- **NanoBot**：超大回合历史分页此前会静默遗漏回答、推理和工具活动。

**共同诉求：**

- 长会话保持稳定的上下文边界；
- 压缩、恢复、分支和重启不能造成数据丢失；
- 工具历史、运行时状态和模型响应应分层管理；
- 提供缓存命中率、归档和恢复诊断能力。

### 4.2 子代理与后台任务交付

**涉及项目：OpenClaw、Hermes Agent、QwenPaw、NanoBot**

- **OpenClaw**：authority 撤销、Gateway 重启、Windows announce 导致子代理结果无法交付。
- **Hermes Agent**：Bot 首条 DM 静默 fork、跨机 mailbox 路径歧义影响 Agent 间通信。
- **QwenPaw**：Subagent 完成会错误触发桌面主回复通知；部分完成结果可能被过早标记。
- **NanoBot**：同一父回合多个后台任务尚未全部完成时，结果标记不准确。

**共同诉求：**

- 子代理结果应持久化且可恢复；
- 父会话必须最终恢复；
- 任务状态需要区分运行中、部分完成、成功、失败、取消；
- 权限撤销与进程重启后不能永久等待；
- 应有后台任务和子代理成本记账。

### 4.3 超时、取消与“静默卡死”

**涉及项目：OpenClaw、Hermes Agent、QwenPaw、PicoClaw、IronClaw**

- OpenClaw 的更新器 validating 阶段超时并被 SIGKILL；
- Hermes 的 Kanban blocker_auth 与 Gateway 重启可造成永久停摆；
- QwenPaw 的飞书队列 consumer 和长 Shell 任务可导致 Session 阻塞；
- PicoClaw 的 Discord Gateway 握手死锁让机器人看似在线却无法收发消息；
- IronClaw 正从时间/次数限制迁移到 USD 成本预算。

**共同诉求：**

- 所有阶段都必须有明确硬超时；
- 取消必须真正终止底层进程和队列任务；
- 卡死必须有 UI 或 CLI 可见状态和解除入口；
- 限制机制应基于真实成本和可预测资源消耗，而不只是调用次数。

### 4.4 状态表达与错误可观测性

**涉及项目：全部项目**

典型表现包括：

- OpenClaw：未知状态被显示成“没有账号”或“零 Activity”；
- NanoBot：空流显示虚假 reasoning；
- QwenPaw：模型静默回退但调用方不知道实际模型；
- Hermes：失败只进入 logger，CLI 显示 `Errors: 1` 却无原因；
- LobsterAI：`+N/-N` 被误解为费用扣除；
- OpenHuman：Langfuse rejected span 被静默当成成功。

**共同诉求：**

- “未知”不能伪装成“否定”或“成功”；
- 错误需要稳定 reason code、阶段、调用位置和可操作建议；
- UI、CLI 和日志应共享一致的状态语义；
- 数据丢失和部分失败必须显式报告。

### 4.5 Provider、工具与渠道生态扩张

**涉及项目：全部项目**

- Provider：QwenPaw 增加 Olostep；NanoBot 增加 ShengSuanYun；PicoClaw 推进 LLMTR、CloudGPU、Standard Compute；OpenHuman 推进 SpecStream；OpenClaw 有 Claude Web Search 需求。
- 渠道：QwenPaw 强化飞书、钉钉；OpenClaw 统一 Telegram 会话身份；PicoClaw 修复 Discord；Hermes 处理飞书和多平台 Bot。
- 工具：OpenHuman 扩展 TinyComputer 验证码求解；IronClaw 强化成本预算；各项目普遍增加安全边界控制。

### 4.6 安装、升级与发行包一致性

**涉及项目：OpenClaw、Hermes Agent、QwenPaw、PicoClaw、OpenHuman**

- OpenClaw：更新挂起、WAL 校验失败、bundled hooks 丢失；
- Hermes：musl/glibc 误判、borrowed-root 安装失败、更新链路问题；
- QwenPaw：中文 Windows 编码导致插件加载失败；
- PicoClaw：pnpm 锁文件重复键阻塞构建；
- OpenHuman：正式桌面构建缺少 Claude Code 登录权限。

**共同诉求：**

- 开发环境、CI 与正式发行包必须行为一致；
- 更新过程需要事务性、阶段超时和可恢复状态；
- 跨平台路径、编码和权限应纳入发行验证。

---

## 5. 差异化定位分析

| 项目 | 功能侧重 | 目标用户 | 技术架构特征 | 最适合关注的场景 |
|---|---|---|---|---|
| **OpenClaw** | 多渠道、长期会话、Memory/Knowledge、子代理、插件 | 高频个人用户、自动化用户、复杂助理部署者 | Gateway 中心；多渠道适配；持久化会话；Web/桌面/移动端一体化 | 生产级个人 AI 助手、长期上下文、后台 Agent |
| **Hermes Agent** | CLI/TUI/Desktop/API/Bot/Kanban 统一接入，插件安全与自动化 | 开发者、平台工程师、任务自动化重度用户 | Unified Gateway；Bot/Kanban 调度；插件生态；canary 发布 | 多客户端 Agent 平台、任务调度、插件化扩展 |
| **QwenPaw** | 飞书/钉钉、移动端、本地模型、Console | 办公场景用户、桌面 AI 设备用户、本地部署用户 | Provider/渠道适配；Console/PawApp；本地引擎与 GPU 管理 | 企业沟通入口、本地 AI 助手、跨端办公 |
| **OpenHuman** | 浏览器、MCP、Artifacts、语音、TinyComputer | 个人生产力用户、MCP/开发者工具用户 | Rust Core；领域化 crate；本地浏览器与工具执行；可观测性 | 本地优先 Agent、浏览器自动化、MCP 集成 |
| **NanoBot** | 轻量 WebUI、模型接入、工具调用、渠道 | Python 开发者、个人用户、快速部署者 | Python；轻量 gateway；WebUI；供应商注册表 | 轻量个人助理、二次开发、低门槛部署 |
| **PicoClaw** | 广谱 Provider、跨平台嵌入式运行 | 边缘设备用户、Go 开发者、模型网关用户 | Go；轻量、多平台；上游同步与定制迁移 | 边缘/本地部署、多网关切换、嵌入式 Agent |
| **IronClaw** | 成本预算、任务资源治理 | 关注成本和自动化的 Agent 开发者 | 跨 Agent、DB、Config 的预算与计量模型 | Agent 成本控制、任务限额、计费审计 |
| **LobsterAI** | Cowork 文件编辑与结果呈现 | 文档工作流和 AI 办公用户 | Renderer + Cowork + Docs | 文件操作可视化、AI 工作台体验 |

### 关键架构差异

- **OpenClaw 与 Hermes** 都向统一网关演进，但 OpenClaw 更强调个人多渠道、长会话与 Memory/Knowledge；Hermes 更强调开发者终端、Bot、Kanban 和插件平台。
- **OpenHuman** 是样本中 Rust Core 与本地优先路线最突出的项目，强调浏览器执行、Artifacts、MCP 和本地数据边界。
- **NanoBot 与 PicoClaw** 更接近轻量、多 Provider 的个人 Agent 框架，胜在部署简单和模型接入灵活。
- **QwenPaw** 更偏完整桌面/移动/办公渠道产品；**IronClaw** 更像 Agent 执行治理组件；**LobsterAI** 更偏 AI 工作台产品体验。

---

## 6. 社区热度与成熟度

### 6.1 社区热度分层

#### 高热度、高讨论密度

- **OpenClaw**
  - 单日更新规模远超其他项目；
  - Prompt Cache、子代理、更新器、Memory 和跨平台问题形成多个持续性议题。

- **Hermes Agent**
  - Unified Gateway 总账 Issue 达 70 条评论；
  - Kanban、测试环境和 Desktop transcript 议题均有较强讨论。

- **QwenPaw**
  - 飞书、Shell 长任务、空响应和移动端问题获得多名用户持续反馈；
  - 多数问题已形成对应 PR。

#### 中等热度、交付效率较好

- **NanoBot**
  - Issue 数量少，但修复闭环快；
  - 用户讨论深度有限，更多体现为工程修复驱动。

- **OpenHuman**
  - PR 活跃度很高，但 Issue 评论普遍较少；
  - 社区参与以代码贡献、Provider 提案和外部目录收录为主。

#### 热度偏低或处于需求验证阶段

- **PicoClaw**：Provider 需求持续出现，但缺少统一评审机制，多个 PR 已被标记 stale。
- **IronClaw**：成本预算方向重要，但当前只有少量讨论，仍需架构评审。
- **LobsterAI**：今日唯一 PR 无社区互动，路线信号有限。

### 6.2 成熟度分层

#### 快速迭代期

- **OpenClaw**
  - 功能面扩张极快，已进入核心运行时重构与可靠性治理并行阶段。
- **Hermes Agent**
  - Unified Gateway 刚完成大规模接入，正处于回归收敛期。
- **QwenPaw**
  - 渠道、移动端、本地模型和 Console 快速迭代，功能边界持续扩张。
- **OpenHuman**
  - Rust Core 和模块化重构密集，仍在快速形成稳定架构。

#### 质量巩固期

- **NanoBot**
  - 已从功能扩张转向 WebUI、流式输出和部署安全修整。
- **PicoClaw**
  - 主要工作是清理历史 PR、同步上游和统一 Provider 接入方式。
- **IronClaw**
  - 正从粗粒度执行限制升级到精确成本治理。
- **LobsterAI**
  - 当前集中于细节体验和状态表达，迭代规模较小。

### 6.3 成熟度共同短板

所有项目都不同程度存在：

1. PR 数量高于维护者评审能力；
2. “Issue 已关闭”不等于生产问题已闭环；
3. 稳定性测试通常落后于新功能；
4. 跨平台问题主要在用户现场暴露；
5. 成本、状态和恢复机制缺乏统一可观测模型。

---

## 7. 值得关注的趋势信号

### 7.1 “有回答”不再等于“可靠完成”

用户越来越关注任务是否：

- 真正结束；
- 可恢复；
- 可取消；
- 不丢结果；
- 失败时可见；
- 成本可预测。

这意味着 Agent 产品的核心竞争力正从模型能力转向**运行时状态机和故障恢复能力**。

### 7.2 子代理将成为独立于主会话的一等执行单元

未来子代理不会只是“一次性工具调用”，而需要具备：

- 持久化任务 ID；
- 明确的 parent/child 关系；
- 结果 inbox/outbox；
- 重启恢复；
- 幂等交付；
- 成本归因；
- 权限撤销后的终止语义。

OpenClaw、Hermes、QwenPaw 和 NanoBot 都在这一方向上演进。

### 7.3 长会话架构需要从“追加日志”升级为分层状态存储

Transcript、压缩摘要、工具历史、运行时上下文、模型缓存前缀和用户记忆不应继续混在同一追加链中。未来更合理的架构是：

- 稳定系统/技能前缀；
- 可缓存对话历史；
- 独立工具事件；
- 可重建运行态；
- 可追溯归档；
- 按需 hydration。

Prompt Cache 的成本问题本质上是**状态布局问题**，而非单纯的缓存参数问题。

### 7.4 可观测性需要从日志升级为产品能力

统一 reason code、阶段状态、部分成功、实际模型、缓存命中、成本和任务生命周期，应通过 CLI、Web UI、桌面端和遥测接口一致暴露。多个项目同时出现的“未知显示成否定”“失败显示为成功”，表明这一能力尚未产品化。

### 7.5 Provider 数量增长正在让“统一适配规范”变得比单个 Provider 更重要

PicoClaw 的 LLMTR/CloudGPU/Standard Compute、QwenPaw 的 Olostep、NanoBot 的 ShengSuanYun、OpenHuman 的 SpecStream，以及 OpenClaw 的 Claude Web Search 需求，共同说明：

- 接入门槛将不再是主要差异；
- Provider metadata、能力声明、超时、重试、模型发现和弃用管理将成为核心；
- 维护者应建设模板化 Provider SDK，而非逐个硬编码。

### 7.6 成本治理正从 Token 统计转向任务预算

IronClaw 的 USD 分层预算、OpenClaw 的 Prompt Cache 成本问题，以及 OpenClaw/Hermes 的子代理成本归因诉求，共同表明用户需要回答：

> “这个任务最多花多少钱、由谁消耗、为何超限、超限后如何安全停止？”

成本预算将逐步成为 Agent 运行时的一等控制面。

### 7.7 本地优先与本地模型管理会成为第二增长曲线

OpenHuman 的浏览器与 TinyComputer、QwenPaw 的本地引擎/GPU/自动更新、PicoClaw 的边缘平台定位，表明生态正在突破纯云端 API 客户端模式。但本地执行会同时放大：

- 凭据管理；
- 浏览器 profile 隔离；
- 验证码和网站合规；
- 模型能力路由；
- 本地资源成本控制。

### 7.8 发行质量将决定下一阶段口碑

多个项目的问题集中在“开发环境正常、正式发行包失败”：

- OpenHuman 的 Claude Code 登录权限；
- Hermes 的 Python/平台打包；
- QwenPaw 的中文 Windows 编码；
- OpenClaw 的升级与 Hook 保留；
- PicoClaw 的 pnpm 锁文件。

因此，**跨平台发行矩阵测试、升级事务性和可恢复安装**应成为 Agent 项目的一等工程指标。

---

## 结论

生态已形成清晰分层：

- **OpenClaw** 是当前功能覆盖最广、吞吐最高、最接近完整个人 Agent 平台的参照项目；
- **Hermes Agent** 正在经历统一网关后的关键收敛期；
- **QwenPaw 与 OpenHuman** 分别在办公渠道产品和 Rust 本地优先架构上快速推进；
- **NanoBot 与 PicoClaw** 更适合轻量部署和多 Provider 场景；
- **IronClaw** 聚焦成本治理这一垂直但关键的基础能力；
- **LobsterAI** 侧重工作台体验。

对开发者和决策者而言，下一阶段不应只比较“支持多少模型、多少渠道、多少工具”，而应重点评估：**状态一致性、恢复能力、安全边界、成本可观测性、发行质量和维护吞吐**。这些指标将决定个人 AI 助手能否从“功能可用”真正进入“长期可信运行”。

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目动态日报

**日期：2026-11-15**  
**统计范围：过去 24 小时（截至 2026-11-15）**  
**数据源：GitHub Issues / Pull Requests / Releases**

---

## 1. 今日速览

- 过去 24 小时共更新 **2 条 Issues**（1 条新开、1 条关闭）和 **32 条 PRs**（3 条待合并、29 条已合并或关闭），代码协作活跃度较高。
- 今日没有发布新版本，暂无正式 Release 或版本迁移公告。
- 本轮更新重点集中在 **WebUI 稳定性、流式响应处理、模型与供应商接入、渠道兼容性和执行安全**。
- 多个修复已进入关闭状态，说明问题闭环效率较高；但仍有 **3 条重要 PR 处于待合并状态**，包括子代理结果标记、BOM 文本搜索和 CI 交付测试。
- 综合判断：项目处于**高频维护与持续集成阶段，整体健康度良好**；主要风险集中在 WebUI 状态恢复、流式输出边界和部分长期 PR 的合并积压。

---

## 2. 版本发布

过去 24 小时内**无新版本发布**。

因此，暂无可确认的正式版本更新、破坏性变更或迁移注意事项。

---

## 3. 项目进展

### 3.1 WebUI 与对话状态稳定性继续加强

今日关闭的多项 PR 集中解决 WebUI 在异常、重连和大数据量场景下的问题：

- **修复 WebUI 在网关重启后错误处理已中断回合的问题**  
  重启后，系统可能在旧请求尚未正确结束状态时直接执行后续请求，导致页面继续显示停止按钮，或将新输入错误地排队。相关修复要求在重放后续请求前先收敛中断回合状态。  
  PR：[ #6628 ](https://github.com/HKUDS/nanobot/pull/6628)

- **改善聊天请求与重连流程中的请求关联和取消机制**  
  修复创建或 fork 话题时误打开已有话题、排队请求超时后仍创建聊天、关闭客户端后旧连接重新打开或应用过期认证信息等问题。  
  PR：[ #6617 ](https://github.com/HKUDS/nanobot/pull/6617)

- **支持超大回合历史记录的连续分页读取**  
  旧实现可能只保留选中记录并静默遗漏其他回答、推理和工具活动；新实现改为基于记录的分页，保证超大 WebUI 会话可以完整回放。  
  PR：[ #6586 ](https://github.com/HKUDS/nanobot/pull/6586)

- **优化模型预设保存性能**  
  原流程需要连续执行两次设置变更，并反复构造可能包含高成本用量聚合的完整设置响应；此次修改减少重复写入，降低模型预设创建失败或“已创建但未启用”的概率。  
  PR：[ #6631 ](https://github.com/HKUDS/nanobot/pull/6631)

- **避免空流产生虚假的“思考过程”展示**  
  对没有实际推理内容的空流进行区分，避免 WebUI 在工具调用旁错误显示误导性的 reasoning。  
  PR：[ #6640 ](https://github.com/HKUDS/nanobot/pull/6640)

- **修复 Markdown 中单美元数学表达式与行内代码冲突**  
  修复 `$ref` 等普通文本被误识别为数学公式、并跨越后续行内代码范围的问题，避免 KaTeX 渲染破坏粗体或代码格式。  
  PR：[ #6646 ](https://github.com/HKUDS/nanobot/pull/6646)

### 3.2 流式输出和 Agent 行为得到修复

- **保留流式续接中的空白字符**  
  当回答达到输出限制并通过下一次模型请求继续输出时，换行或缩进可能在拼接处丢失。此次修复确保跨分段输出保留原有空白格式。  
  PR：[ #6627 ](https://github.com/HKUDS/nanobot/pull/6627)

- **重构 Agent 的运行输入与检查点归属**  
  将队列快照、回滚、授权、终止等待和检查点关闭等状态明确归并到运行级所有者，减少后续维护时对隐式状态流的依赖。  
  PR：[ #6641 ](https://github.com/HKUDS/nanobot/pull/6641)

- **清理未被引用的代码和依赖**  
  删除已完成迁移后的遗留代码、无效 WebUI 快照构建器、未使用图标和 npm 依赖；该 PR 标注为无行为变化、无公共 CLI 或 wire-format 变化。  
  PR：[ #6644 ](https://github.com/HKUDS/nanobot/pull/6644)

### 3.3 模型、供应商和渠道能力持续扩展

- **新增胜算云 ShengSuanYun 网关**  
  在供应商注册表和配置 schema 中加入 `shengsuanyun`，并提供对应 Quick Start、供应商表单和模型目录。  
  PR：[ #6647 ](https://github.com/HKUDS/nanobot/pull/6647)

- **旧版 OpenAI API 选择器正式退役**  
  在两个版本的迁移窗口后，移除旧的 `apiType` / `api_type` 配置。显式指定旧选择器将被拒绝；旧的默认值 `auto` 仍可加载，当前 `api` 字段（包括 `null`）继续支持。该项属于配置层面的破坏性调整，但迁移窗口已经结束。  
  PR：[ #6615 ](https://github.com/HKUDS/nanobot/pull/6615)

- **按模型能力路由图像输入**  
  为模型预设增加 `supportsImages` 能力字段，避免图像请求被错误发送给仅支持文本的模型，并在模型链中保留图像输入。  
  PR：[ #6651 ](https://github.com/HKUDS/nanobot/pull/6651)

- **Telegram 命令别名统一由映射表派生**  
  解决 Telegram 不支持在可点击命令中使用 `-` 的问题，并减少命令别名、显示名和路由规则多处维护造成的不一致。  
  PR：[ #6643 ](https://github.com/HKUDS/nanobot/pull/6643)

### 3.4 执行与系统服务安全性提升

- **共享有界 HTTP 重定向实现**  
  Web 抓取与生成图片下载共用同一套有限次数的 HTTP GET 逻辑，保留每次跳转的 URL 校验、DNS 固定和代理设置，并确保重定向响应及时关闭。  
  PR：[ #6637 ](https://github.com/HKUDS/nanobot/pull/6637)

- **避免停止 systemd 服务后被自动拉起**  
  修复由 `Restart=always` 导致的“停止后进程重新启动”问题，并改进前台冲突提示。  
  PR：[ #6625 ](https://github.com/HKUDS/nanobot/pull/6625)

---

## 4. 社区热点

当前数据中 Issues 和 PR 的评论数普遍较低，提供的 PR 列表中评论数多为未定义，因此无法据此判断“评论最多”的条目。以下条目更适合按近期活跃度、影响范围和与用户直接相关程度进行关注。

### 4.1 Issues：WebUI 行内代码渲染异常

- **Issue：[ #6662 — WebUI inline code may become a scrolling block or show only a filename](https://github.com/HKUDS/nanobot/issues/6662)**
- **状态：OPEN**
- **热度：** 1 条评论，0 个 👍
- **诉求：** 过长的单行行内代码可能被渲染成横向滚动块，或者只显示文件名，影响代码片段、命令和路径的可读性。
- **分析：** 这是典型的 WebUI Markdown 渲染体验问题，用户希望行内代码在较长内容下仍保持清晰、可复制，同时避免不必要的布局破坏。当前没有直接对应的已关闭 fix PR。

### 4.2 PR：图像输入能力路由修复

- **PR：[ #6651 — fix(models): route image input by preset capability](https://github.com/HKUDS/nanobot/pull/6651)**
- **状态：CLOSED**
- **热度：** 未提供评论数或 reaction 数据
- **影响：** 直接关联多模态模型使用体验，解决图像输入在模型链中被错误路由或静默移除的问题。
- **分析：** 该 PR 虽无明显评论热度，但功能价值较高，体现了 NanoBot 在模型能力描述和路由准确性方面的完善。

### 4.3 PR：子代理部分完成结果标记

- **PR：[ #5152 — fix(subagent): mark partial completion results](https://github.com/HKUDS/nanobot/pull/5152)**
- **状态：OPEN**
- **热度：** 未提供评论数或 reaction 数据
- **影响：** 处理同一父回合中多个后台子任务仍有待完成时的部分结果标记，避免任务完成状态和后续通知出现歧义。
- **分析：** 这是当前较重要的开放 PR，直接关系到子代理任务的正确性和生命周期管理。

### 4.4 PR：支持 BOM 编码文本搜索

- **PR：[ #6364 — fix(search): find matches in BOM-encoded text files](https://github.com/HKUDS/nanobot/pull/6364)**
- **状态：OPEN**
- **热度：** 未提供评论数或 reaction 数据
- **影响：** 修复 Python `grep` 工具将带 BOM 的 UTF-16、UTF-32 文件当作二进制跳过，以及 UTF-8 BOM 影响首行锚点匹配的问题。
- **分析：** 属于工具链一致性和可检索性问题，虽非核心 UI 功能，但会直接影响文件处理任务的可靠性。

---

## 5. Bug 与稳定性

### 严重程度：较高

1. **WebUI 重启后的回合状态不一致**
   - 可能导致旧回合未正确终止、后续请求替换正在执行的请求，或前端持续显示停止按钮。
   - 已有修复 PR：  
     [#6628](https://github.com/HKUDS/nanobot/pull/6628)
   - 状态：已关闭，预计已合并或完成处理。

2. **图像输入可能无法正确路由至视觉模型**
   - 图像请求在文本模型与视觉模型链中可能失败，或发生静默去图重试，影响多模态任务。
   - 已有修复 PR：  
     [#6651](https://github.com/HKUDS/nanobot/pull/6651)
   - 状态：已关闭。

### 严重程度：中等

3. **流式续接丢失换行和缩进**
   - 长回答跨模型请求续接时，拼接边界可能造成格式损坏。
   - 已有修复 PR：  
     [#6627](https://github.com/HKUDS/nanobot/pull/6627)

4. **WebUI 聊天请求与重连竞态**
   - 可能出现误打开已有话题、超时后仍创建聊天、旧连接重新建立或认证状态过期等问题。
   - 已有修复 PR：  
     [#6617](https://github.com/HKUDS/nanobot/pull/6617)

5. **超大回合历史记录无法完整回放**
   - 旧逻辑可能静默遗漏部分回答、推理和工具活动。
   - 已有修复 PR：  
     [#6586](https://github.com/HKUDS/nanobot/pull/6586)

6. **systemd 服务停止后自动重启**
   - 服务管理行为不符合用户停止操作的预期，可能影响部署和运维控制。
   - 已有修复 PR：  
     [#6625](https://github.com/HKUDS/nanobot/pull/6625)

7. **BOM 编码文件搜索结果不完整**
   - UTF-16、UTF-32 文件可能被跳过，UTF-8 BOM 文件的首行正则匹配可能失败。
   - 已有 fix PR，但仍在开放状态：  
     [#6364](https://github.com/HKUDS/nanobot/pull/6364)

8. **子代理部分完成状态标记不准确**
   - 后台任务尚未全部完成时，结果可能被过早视为完整完成。
   - 已有 fix PR，但仍在开放状态：  
     [#5152](https://github.com/HKUDS/nanobot/pull/5152)

### 严重程度：较低至中等

9. **Markdown 行内代码和数学公式渲染冲突**
   - 普通 `$` 文本可能误触发 KaTeX，破坏代码和粗体格式。
   - 已有修复 PR：  
     [#6646](https://github.com/HKUDS/nanobot/pull/6646)

10. **空流显示虚假 reasoning**
    - 无实际模型推理时，WebUI 仍可能显示误导性的“思考过程”。
    - 已有修复 PR：  
      [#6640](https://github.com/HKUDS/nanobot/pull/6640)

11. **模型预设保存性能和一致性下降**
    - 重复设置写入会增加延迟，并存在创建成功但未启用的中间状态风险。
    - 已有修复 PR：  
      [#6631](https://github.com/HKUDS/nanobot/pull/6631)

12. **WebUI 行内代码显示异常**
    - 长代码片段可能变成滚动块或只显示文件名，影响可读性。
    - Issue：  
      [#6662](https://github.com/HKUDS/nanobot/issues/6662)
    - 当前未看到明确对应的开放或已关闭修复 PR。

---

## 6. 功能请求与路线图信号

### 6.1 OpenAI 图像模型列表清理

- **Issue：[ #6660 — `gpt-image-1`, `dall-e-3` and `dall-e-2` are retired but still offered in the OpenAI image model list](https://github.com/HKUDS/nanobot/issues/6660)**
- **状态：CLOSED**
- **诉求：** 删除已退役的 OpenAI 图像模型，避免用户选择后请求失败。
- **路线图判断：** 该问题已被关闭，说明供应商模型目录的时效性维护正在加强。类似机制应继续支持动态下线和弃用提示，避免模型列表与官方生命周期脱节。

### 6.2 胜算云网关接入

- **PR：[ #6647 — feat(providers): add ShengSuanYun gateway](https://github.com/HKUDS/nanobot/pull/6647)**
- **状态：CLOSED**
- **路线图判断：** 说明项目仍在持续扩充国内模型供应商和网关覆盖范围。后续可关注是否补齐模型能力标记、图像输入支持、文档示例和可观测性。

### 6.3 模型预设能力路由

- **PR：[ #6651 — fix(models): route image input by preset capability](https://github.com/HKUDS/nanobot/pull/6651)**
- **状态：CLOSED**
- **路线图判断：** `supportsImages` 等能力字段可能成为下一阶段多模态路由、工具能力声明和模型链编排的基础，值得持续观察其是否扩展到音频、工具调用、上下文长度等维度。

### 6.4 WebUI 长行内代码展示

- **Issue：[ #6662](https://github.com/HKUDS/nanobot/issues/6662)**
- **状态：OPEN**
- **路线图判断：** 该问题更适合纳入 WebUI Markdown 渲染器统一修复，目标是建立明确的行内代码长度阈值、换行策略和文件名显示规则。由于当前仍开放，暂不能确认会进入下一版本。

### 6.5 CI 中可靠完成交付与关闭流程

- **PR：[ #6194 — test: allow durable delivery and shutdown to finish on CI](https://github.com/HKUDS/nanobot/pull/6194)**
- **状态：OPEN**
- **路线图判断：** 该 PR 直接服务于可靠交付测试，可能成为后续 CI 稳定性改造的基础。建议维护者优先审查其与当前主分支的兼容性，尤其是此前 API server 相关代码被移除后的测试依赖调整。

---

## 7. 用户反馈摘要

### 主要用户痛点

- **代码与 Markdown 展示不稳定**  
  长行内代码出现滚动块或仅显示文件名，数学公式识别也可能跨越代码片段，进一步说明 WebUI 的 Markdown 渲染仍是用户高频感知问题。  
  相关链接：  
  [#6662](https://github.com/HKUDS/nanobot/issues/6662)  
  [#6646](https://github.com/HKUDS/nanobot/pull/6646)

- **旧模型仍出现在可选项中**  
  用户发现官方已退役的 `gpt-image-1`、`dall-e-3` 和 `dall-e-2` 仍可被选择，担心配置完成后才在请求阶段失败。这反映出模型目录的弃用状态需要更快同步。  
  相关链接：  
  [#6660](https://github.com/HKUDS/nanobot/issues/6660)

- **多模态请求存在能力路由问题**  
  图像输入在模型链中可能被错误发送或移除，用户核心诉求是保留原始图片并交给真正支持视觉的模型。  
  相关链接：  
  [#6651](https://github.com/HKUDS/nanobot/pull/6651)

- **工具对特殊编码文件支持不一致**  
  用户期望 `grep` 与 `read_file` 对 UTF-16、UTF-32、UTF-8 BOM 文件具备一致的可读和可搜索能力。  
  相关链接：  
  [#6364](https://github.com/HKUDS/nanobot/pull/6364)

### 满意度与反馈质量判断

- 今日 Issue 总数仅 2 条，且其中 1 条已关闭，说明直接用户投诉量不高。
- 现有反馈以可复现的具体问题和明确期望为主，技术诉求较清晰。
- 由于评论数和 reaction 数普遍偏低，当前数据不足以判断整体社区满意度；更准确的结论是：**问题反馈集中、短期修复响应较快，但社区讨论深度有限**。

---

## 8. 待处理积压

### 8.1 长期开放的子代理结果修复

- **PR：[ #5152 — fix(subagent): mark partial completion results](https://github.com/HKUDS/nanobot/pull/5152)**
- **创建时间：2026-07-28**
- **当前状态：OPEN**
- **积压判断：** 已开放约三个月，属于长期未合并的重要功能修复。建议维护者确认其与当前 Agent/子代理状态模型是否仍然兼容，并补充评审结论或拆分重做计划。

### 8.2 长期开放的 BOM 搜索修复

- **PR：[ #6364 — fix(search): find matches in BOM-encoded text files](https://github.com/HKUDS/nanobot/pull/6364)**
- **创建时间：2026-10-21**
- **当前状态：OPEN**
- **积压判断：** 虽非最新创建，但已持续较长时间。该问题与文件读取工具的一致性直接相关，建议优先进行兼容性测试并明确合并阻塞点。

### 8.3 长期开放的 CI 可靠交付测试

- **PR：[ #6194 — test: allow durable delivery and shutdown to finish on CI](https://github.com/HKUDS/nanobot/pull/6194)**
- **创建时间：2026-10-13**
- **当前状态：OPEN**
- **积压判断：** 该 PR 因主分支移除独立 API server 及其测试而需要重新整合，当前仍包含冲突处理和 CI 收尾逻辑。建议维护者重点检查其是否仍有必要保留，以及与现有测试架构的适配情况。

### 8.4 新开放的 WebUI 行内代码问题

- **Issue：[ #6662](https://github.com/HKUDS/nanobot/issues/6662)**
- **当前状态：OPEN**
- **积压判断：** 属于新问题，暂不应视为长期积压，但建议尽快补充复现样例，并判断是否已有 WebUI Markdown 相关 PR 可顺带修复。

---

## 总体健康度评估

**健康度：良好**

- **活跃度：高**——24 小时内有 32 条 PR 更新。
- **问题闭环：较好**——29 条 PR 已合并或关闭，多个 WebUI、流式输出和系统服务问题均有对应修复。
- **版本节奏：稳定但偏保守**——今日无 Release，近期改动较多，建议关注后续版本是否集中打包配置迁移、模型路由和 WebUI 稳定性更新。
- **主要技术债：** 3 条开放 PR 中有两条已积累较长周期，尤其需要避免子代理状态逻辑和 BOM 搜索修复长期漂移。
- **用户反馈重点：** WebUI Markdown 渲染、模型列表时效性、多模态路由，以及特殊编码文件的工具一致性。

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目动态日报

**日期：2026-11-15**  
**数据范围：过去 24 小时 GitHub Issues / Pull Requests 更新**  
**整体判断：活跃度中等偏高，但以旧 PR 状态更新和关闭为主；新增需求集中在 OpenAI 兼容 Provider 接入，核心质量债务仍待处理。**

---

## 1. 今日速览

- 过去 24 小时共有 **2 条 Issue 更新**、**10 条 PR 更新**，其中 **3 条 PR 仍待合并、7 条已合并或关闭**，Issues 暂无关闭记录。
- 社区新增的主要需求是接入 **LLMTR、CloudGPU、Standard Compute** 等 OpenAI 兼容服务，Provider 生态仍在持续扩展，但相关实现主要以外部贡献 PR 的形式出现。
- 今日关闭的 PR 多为历史同步、批量合并或长期停滞事项；**没有明确的新版本发布**，当前发布面相对平静。
- 值得关注的质量问题包括：Skills 安装因 frontmatter 重名失败、Discord 网关握手死锁，以及前端 `pnpm-lock.yaml` 重复键导致依赖安装失败。
- 项目健康度评估为 **中等**：讨论和贡献输入不低，但维护焦点偏向清理积压与合并历史修复，核心需求仍缺少明确的版本化交付安排。

---

## 3. 项目进展

### 3.1 今日合并或关闭的重要 PR

#### 修复合并批次：#1546、#1558、#1559

- [#1546：合并 PR #1480、#1479、#1478、#1473、#1467](https://github.com/sipeed/picoclaw/pull/1546)
- [#1558：合并 PR #1344、#1342、#1341、#1331](https://github.com/sipeed/picoclaw/pull/1558)
- [#1559：合并 PR #1327、#1319、#1318、#1313](https://github.com/sipeed/picoclaw/pull/1559)

这些 PR 均已关闭，主要用于集中合并此前已验收的修复。三个批次合计覆盖至少 **15 个上游修复 PR**，有助于减少分散 PR 长期滞留造成的维护成本。不过，现有摘要没有逐项披露具体修复内容，因此无法判断这些变更是否已经进入正式 Release。

#### 上游同步与定制迁移：#2810

- [#2810：同步 upstream/main，并迁移 Magicform 定制](https://github.com/sipeed/picoclaw/pull/2810)

该 PR 已关闭，目标是同步约 **1,095 个上游提交**，并将 **6 个定制提交**迁移到重构后的代码结构中，包括：

- Agent Loop 拆分为 `agent_*.go`
- Tools 重组至 `pkg/tools/{fs,integration}/`
- Channel 配置迁移

其价值在于降低长期分叉的合并成本，并保持下游定制与上游重构同步。由于变更规模很大，仍需关注正式版本中是否明确记录迁移影响及配置兼容性。

#### 多智能体协作框架：#423

- [#423：多智能体协作框架与共享上下文 WIP](https://github.com/sipeed/picoclaw/pull/423)

该 PR 已关闭。其探索内容包括：

- 线程安全的共享上下文池（Blackboard）
- Agent handoff
- Agent discovery tools
- 多智能体路由与模型 fallback 能力衔接

尽管 PR 已关闭，但其中体现的共享上下文、任务交接和 Agent 编排仍是 PicoClaw 从单 Agent 助手向智能体协作平台演进的重要方向。

#### Discord 握手死锁修复：#3452

- [#3452：升级 DiscordGo fork，修复 Gateway handshake deadlock](https://github.com/sipeed/picoclaw/pull/3452)

该 PR 已关闭。问题表现为机器人虽然显示已连接，但无法收发消息、心跳停止且日志无明显异常。其根因是固定版本 DiscordGo fork 中的握手死锁，修复方式是升级到包含相关修复的 fork 版本。这是今日明确涉及运行稳定性的改动。

#### 前端锁文件修复：#3318

- [#3318：修复无法解析的 `pnpm-lock.yaml`](https://github.com/sipeed/picoclaw/pull/3318)

该 PR 已关闭。原因是 `web/frontend/pnpm-lock.yaml` 中 `semver@7.8.5` 被重复写入 `packages` 与 `snapshots`，YAML 不允许重复 mapping key，导致 pnpm 报 `ERR_PNPM_BROKEN_LOCKFILE`。修复对开发环境构建、依赖安装及 CI 可复现性具有直接价值。

### 3.2 整体推进程度

- **功能层面**：Provider 接入需求明显增多，但今日待合并 PR 尚未形成可确认的新增 Provider 能力。
- **稳定性层面**：Discord 死锁和前端锁文件问题均有对应修复 PR 并关闭，方向明确。
- **维护层面**：多个历史批量合并 PR、上游同步 PR 被关闭，说明项目正在清理长期积压，但大量关闭事项也降低了今日“净新增功能”的可见度。
- **发布层面**：今日无版本发布，因此无法确认这些变更何时面向最终用户交付。

---

## 4. 社区热点

> 今日数据中，Issue #3462 有 **1 条评论**，为当前明确有社区互动的条目；其余条目暂无评论或反应数据。

### Skills 安装兼容性讨论

- [#3462：Skills 因 frontmatter `name` 重名而安装失败](https://github.com/sipeed/picoclaw/issues/3462)

**热度：** 1 条评论，当前评论最多。  
**诉求：** 当已安装 Skill 与待安装 Skill 在 `SKILL.md` frontmatter 中使用相同 `name` 时，`picoclaw skills install` 和 Agent 的 `install_skill` 工具均报错：

```text
failed to install "<slug>": registry archive is not a valid skill
```

**背景分析：**

- 该问题并非 Registry 包本身损坏，而是安装流程可能错误地以全局 frontmatter `name` 判断 Skill 冲突。
- 更合理的冲突维度应是 Skill 的唯一标识、slug、来源或完整身份，而不是仅依赖可重复的展示名称。
- 此问题会直接影响 Skill 市场、插件批量安装和 Agent 自动安装流程，属于影响扩展生态可用性的中等优先级 Bug。

### LLMTR Provider 新增需求

- [#3470：Feature——将 LLMTR 添加为 OpenAI-compatible Provider](https://github.com/sipeed/picoclaw/issues/3470)
- 对应实现：[#3471：feat(providers)—添加 LLMTR Provider](https://github.com/sipeed/picoclaw/pull/3471)

**热度：** 新建需求，暂无评论。  
**诉求：** 用户希望模型目录中提供具名的 `llmtr` Provider，默认 API Base 为 `https://llmtr.com/v1`，从而避免通过自定义 OpenAI-compatible endpoint 覆盖其他 Provider 配置。

**价值：**

- 降低 LLMTR 用户配置门槛。
- 避免自定义 endpoint 方案对现有 Provider 设置产生覆盖。
- 与近期 CloudGPU、Standard Compute 的贡献方向一致，反映“可插拔兼容网关”正在形成明确生态趋势。

### Provider 接入相关 PR

- [#3464：添加 CloudGPU OpenAI-compatible Provider](https://github.com/sipeed/picoclaw/pull/3464)
- [#3431：添加 Standard Compute Provider](https://github.com/sipeed/picoclaw/pull/3431)

这两项贡献与 LLMTR 需求共同构成了今日最集中的功能方向。当前均有待合并状态，但被标记为 `stale`，说明新 Provider 虽持续涌现，维护者对第三方 Provider 的评审和收敛速度仍可能成为瓶颈。

---

## 5. Bug 与稳定性

### 中等：Discord Gateway 握手死锁

- Issue/PR：[#3452](https://github.com/sipeed/picoclaw/pull/3452)
- **影响：** Discord 机器人可能永久失联，表现为连接状态正常、消息双向不通、心跳停止且缺少有效日志。
- **严重程度：中高**，直接影响核心 Channel 可用性，但不影响其他 Channel。
- **修复状态：** **已有 fix PR，且 PR 已关闭。**
- **后续建议：** 确认所用 DiscordGo fork 的最终提交版本已进入主分支，并补充 Gateway 重连、心跳超时和断线恢复测试。

### 中等：Skills 安装因名称重名失败

- Issue：[#3462](https://github.com/sipeed/picoclaw/issues/3462)
- **影响：** `picoclaw skills install` 与 Agent `install_skill` 无法安装部分完全有效的 Skill。
- **严重程度：中**，主要影响 Skill 生态和自动安装流程。
- **修复状态：** **尚未发现对应 fix PR。**
- **风险点：** 如果错误信息仍为“archive is not a valid skill”，用户可能误判 Registry 包损坏，进一步增加排障成本。

### 中等：前端 pnpm 锁文件不可解析

- PR：[#3318](https://github.com/sipeed/picoclaw/pull/3318)
- **影响：** `pnpm` 拒绝读取 `web/frontend/pnpm-lock.yaml`，可能阻塞本地开发、依赖安装和 CI 构建。
- **严重程度：中**，影响 Web 前端工程链路，但不直接影响 Agent 后端运行。
- **修复状态：** **已有 fix PR，且 PR 已关闭。**
- **验证建议：** 补充锁文件唯一性检查或 CI 锁文件校验，防止重复键再次进入主分支。

### 较低：批量合并与上游同步范围较大

- PR：[#1546](https://github.com/sipeed/picoclaw/pull/1546)、[#1558](https://github.com/sipeed/picoclaw/pull/1558)、[#1559](https://github.com/sipeed/picoclaw/pull/1559)、[#2810](https://github.com/sipeed/picoclaw/pull/2810)
- **风险：** 批量合并不利于逐项定位回归；约 1,095 个提交的上游同步还可能伴随配置、目录结构及依赖行为变化。
- **修复状态：** 已关闭，指向变更已进入合并链路。
- **建议：** 在下一次 Release Notes 中提供迁移说明，并重点验证 Agent Loop、Tools 路径和 Channel 配置兼容性。

---

## 6. 功能请求与路线图信号

### 6.1 OpenAI-compatible Provider 生态扩展

当前相关需求与实现：

- [#3470：LLMTR Provider 需求](https://github.com/sipeed/picoclaw/issues/3470)
- [#3471：LLMTR Provider 实现](https://github.com/sipeed/picoclaw/pull/3471)
- [#3464：CloudGPU Provider](https://github.com/sipeed/picoclaw/pull/3464)
- [#3431：Standard Compute Provider](https://github.com/sipeed/picoclaw/pull/3431)

**路线图判断：高概率纳入后续版本，但仍取决于统一 Provider 接入规范与维护资源。**

这些 PR 都试图提供具名 Provider，而不是要求用户覆盖已有 OpenAI-compatible 配置。需求重复出现说明以下方向具有现实用户基础：

- 独立 Provider metadata
- 独立默认 API Base
- 独立鉴权配置
- 模型列表显式固定
- 避免自定义 endpoint 覆盖其他 Provider

维护者应优先抽取统一的 Provider 注册与测试模板，否则每新增一个兼容网关都可能引入重复代码和维护负担。

### 6.2 多智能体协作与共享上下文

- [#423：Multi-agent collaboration framework WIP](https://github.com/sipeed/picoclaw/pull/423)

**路线图判断：属于中期方向信号，短期进入正式版本的确定性低于 Provider 扩展。**

相关能力涉及 Blackboard、handoff、discovery 和共享上下文，属于 Agent 平台核心架构。其技术风险高于单纯 Provider 接入，建议在 API、上下文隔离、并发访问和路由语义稳定后再分阶段合并。

### 6.3 Skills 唯一标识与安装兼容性

- [#3462：frontmatter 重名导致安装失败](https://github.com/sipeed/picoclaw/issues/3462)

**路线图判断：应作为近期稳定性修复纳入版本。**

建议不仅修复重名场景，还建立明确规则：

- `name`：展示名称，可重复但给出提示；
- `slug` 或稳定 ID：安装与冲突检测主键；
- 来源 Registry、版本与内容哈希：用于溯源和防冲突；
- Agent 自动安装：提供更明确的冲突错误信息。

---

## 7. 用户反馈摘要

### 有效痛点

1. **用户实际需要安装来自 Registry 的多个 Skill**  
   不同 Skill 使用相同 frontmatter `name` 并不罕见。当前行为将合法安装误报为无效归档，阻碍正常扩展使用。

2. **错误信息无法准确反映问题根因**  
   “registry archive is not a valid skill”会让用户怀疑下载包、Registry 镜像或压缩结构，而真实原因可能是名称冲突。错误分类和可操作提示需要改善。

3. **OpenAI-compatible 不等于“开箱即用”**  
   LLMTR 用户虽然可以通过自定义 endpoint 连接，但必须覆盖其他 Provider 配置，配置隔离不足。具名 Provider 能显著降低使用门槛。

4. **多模型网关用户重视密钥与配置隔离**  
   LLMTR、CloudGPU、Standard Compute 均强调单一密钥访问多个模型，表明用户希望快速切换和并行配置不同网关，而不仅是兼容 API 协议。

### 满意度与积极信号

- 社区已有较明确的功能诉求，并开始形成“Issue + 实现 PR”的配套提交方式。
- [#3471](https://github.com/sipeed/picoclaw/pull/3471) 对 LLMTR Provider 的默认地址、模型固定方式和 Provider 隔离说明较清晰，体现了贡献者对现有 Provider 架构已有一定理解。
- 但今日没有足够评论和 reaction 数据，无法判断用户对现有功能的普遍满意度。

---

## 8. 待处理积压

### 8.1 Skills 安装重名 Bug

- [#3462](https://github.com/sipeed/picoclaw/issues/3462)

虽然 Issue 创建于 2026-11-06，但截至今日仍为开放状态，且没有发现对应修复 PR。它直接影响 Skill 安装，建议尽快补充可复现测试并修复。

### 8.2 被标记为 stale 的 Provider PR

- [#3464：CloudGPU Provider](https://github.com/sipeed/picoclaw/pull/3464)
- [#3431：Standard Compute Provider](https://github.com/sipeed/picoclaw/pull/3431)

两条 PR 都被标记为 `stale`。由于同类需求 #3470 / #3471 仍在推进，维护者宜尽快给出统一评审标准：

- 是否必须预置模型；
- API Base 是否允许自定义；
- Provider metadata 的最小字段；
- 是否需要端到端测试；
- 第三方 Provider 的长期维护责任。

### 8.3 LLMTR Provider 待收敛

- [#3470](https://github.com/sipeed/picoclaw/issues/3470)
- [#3471](https://github.com/sipeed/picoclaw/pull/3471)

这是最新且需求、实现已配套的 Provider 项，优先级较高。建议明确 PR 是否满足现有 Provider 规范，并给出合并或可执行修改意见，避免新需求也进入 stale 队列。

### 8.4 大规模上游同步后的验证债务

- [#2810](https://github.com/sipeed/picoclaw/pull/2810)

该 PR 已关闭，但涉及约 **1,095 个上游提交**与目录结构迁移。后续仍需通过集成测试确认：

- Agent Loop 拆分后行为一致；
- File System / Integration Tools 路径调整无回归；
- Channel 配置迁移可正常加载；
- Magicform 定制与 upstream/main 无冲突。

---

## 结论

PicoClaw 今日呈现出两条清晰主线：一是围绕 **LLMTR、CloudGPU、Standard Compute** 等网关扩展 Provider 生态；二是清理 **Discord 死锁、前端锁文件损坏、历史批量合并及上游同步**等工程债务。

项目整体活跃度评估为 **中等偏高**，但生产效率暂时受以下因素制约：

1. 新 Provider 需求较多，但缺少清晰的统一接入与评审机制；
2. Skills 安装重名 Bug 尚无可见修复；
3. 多个关键 PR 被标记为 stale；
4. 当日无 Release，阶段性成果尚未形成清晰的版本交付。

近期建议优先处理 [#3462](https://github.com/sipeed/picoclaw/issues/3462)，并围绕 [#3471](https://github.com/sipeed/picoclaw/pull/3471)、[#3464](https://github.com/sipeed/picoclaw/pull/3464)、[#3431](https://github.com/sipeed/picoclaw/pull/3431) 建立统一的 Provider 扩展规范，以推动功能需求在下一版本中形成可规模化交付。

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw 项目动态日报

**日期：2026-11-15**  
**数据范围：过去 24 小时 GitHub 活跃记录**  
**项目健康度：中等偏积极，但当日产出有限**

## 1. 今日速览

过去 24 小时，IronClaw 共更新 **1 个 Issue、1 个 Pull Request**，均为新建或持续活跃状态，暂无 Issue/PR 关闭，也没有版本发布。  
当日讨论焦点是：用 **USD 成本预算**替代现有迭代次数与执行时长限制，并在用户、项目、任务、线程及子线程之间建立分层预算机制。  
同时，PR #8171 修正了模型价格表中的多项偏差，为后续 USD 预算核算提供基础。  
整体活跃度偏低：当日仅有少量核心工程议题推进，尚未形成合并、发布或可验证的版本交付；但预算治理方向较明确，说明项目正从“限制调用次数”转向“可量化的成本控制”。

---

## 2. 版本发布

过去 24 小时**无新版本发布**，因此暂无对应的更新说明、破坏性变更或迁移指南。

需要关注的是，Issue #2843 计划替换现有限额机制，可能涉及配置、运行时行为及成本统计方式的变更；在正式落地前，应关注其兼容策略与迁移文档：

- [Issue #2843：引入基于 USD 的分层预算](https://github.com/nearai/ironclaw/issues/2843)

---

## 3. 项目进展

### 今日没有合并或关闭的重要 PR

过去 24 小时共更新 **1 个 PR**，状态为 **待合并**，已合并/关闭数量为 **0**。因此今日没有可计入正式版本交付的功能或修复进展。

### 待合并 PR

- [PR #8171：使用 `llm-prices` 表校准模型价格](https://github.com/nearai/ironclaw/pull/8171)  
  **作者：** @Mattbusel  
  **状态：** OPEN  
  **主要工作：**
  - 修正 `model_cost()` 中多组模型输入/输出价格。
  - 例如：
    - GPT-5.5：原记录为 `$2/$8`，实际应为 `$5/$30`
    - GPT-5.2 Pro：原记录为 `$2/$8`，实际应为 `$21/$168`
    - Opus 4.5、4.6：原记录为 `$15/$75`，实际应为 `$5/$25`
    - Haiku 4.5：原记录为 `$0.80/$4`，实际应为 `$1/$5`
  - PR 摘要明确指出，USD 预算工作依赖准确的价格数据。

**推进判断：**  
该 PR 是成本预算体系的重要前置工作，可降低预算估算偏差，但当前尚未合并，不能视为已交付能力。它也更可能进入近期开发或后续预算功能相关版本，而非直接构成独立用户版本。

### 今日整体前进程度

- **已正式合入：** 0 项
- **已关闭：** 0 项
- **待评审/待合并：** 1 项
- **新版本：** 0 个
- **工程推进评估：** 完成了成本治理链路中的一个基础校准环节，但尚未产生可发布增量。

---

## 4. 社区热点

### 热点 1：基于成本的预算体系

- [Issue #2843：Cost-based budgeting](https://github.com/nearai/ironclaw/issues/2843)
- **状态：** OPEN
- **标签：** enhancement、risk: high、scope: agent、scope: db、scope: config
- **作者：** @ilblackdragon
- **评论数：** 1
- ** 👍：** 0
- **更新日期：** 2026-11-15

**核心诉求：**

将当前基于执行次数和时间的限制：

- 50 次迭代限制
- Python VM 5 分钟超时
- Worker 500 次迭代限制

改造为基于 **美元成本** 的预算系统，并支持以下层级级联：

**用户 → 项目 → 任务（mission） → 线程（thread） → 子线程（sub-thread）**

**背景与价值：**

现有时间/次数限制无法准确反映不同模型、任务复杂度和 token 单价的实际成本差异。尤其在同一任务需要切换不同价位模型时，固定次数上限可能导致：

- 便宜模型上的限制过于严格；
- 昂贵模型上的实际支出风险过高；
- 用户难以预测一次任务最多会花费多少；
- 后台任务与交互式任务难以采用统一、直观的成本治理方式。

**社区热度判断：**  
这是今日唯一获得更新的 Issue，也是当日最重要的架构议题。不过目前只有 1 条评论、0 个 👍，尚不能视为形成广泛社区共识。它更像是由核心贡献者或维护相关人员推动的高风险设计提案。

### 热点 2：模型价格数据准确性

- [PR #8171：fix(common): price models from the llm-prices table](https://github.com/nearai/ironclaw/pull/8171)
- **状态：** OPEN
- **作者：** @Mattbusel
- **创建/更新时间：** 2026-11-15
- **评论/反应数据：** 暂未显示

**核心诉求：**

修正 `model_cost()` 与供应商实际价格之间的偏差，确保成本计算、预算控制及用量展示建立在可靠价格源上。

**社区热度判断：**  
该 PR 刚创建，尚无公开评论或点赞数据，当前属于“技术关注点”而非“社区热点”。其重要性主要来自对预算功能的前置支撑。

---

## 5. Bug 与稳定性

### 严重度：中等——模型成本数据不准确

- [PR #8171](https://github.com/nearai/ironclaw/pull/8171)
- **问题类型：** 成本计算错误 / 数据准确性 Bug
- **影响范围：** 依赖 `model_cost()` 的预算估算、用量统计、成本展示或计费相关逻辑
- **是否有 fix PR：** **有**
  - [PR #8171：按 `llm-prices` 表修正模型价格](https://github.com/nearai/ironclaw/pull/8171)
  - 当前尚未合并
- **风险特征：**
  - 不一定直接导致运行时崩溃；
  - 但可能造成预算超额、提前停止、成本报表偏差或错误限制；
  - GPT-5.2 Pro 等模型的价格偏差幅度较大，可能显著影响高成本任务的控制效果。

### 严重度：高风险设计项——预算层级与限额迁移

- [Issue #2843](https://github.com/nearai/ironclaw/issues/2843)
- **问题类型：** 现有预算/限额模型不足
- **是否已有 fix PR：** **未看到直接实现或修复 PR**
- **风险说明：**
  - 需要同时涉及 Agent、数据库和配置模块；
  - 涉及用户、项目、任务、线程及子线程的数据归属和预算继承；
  - 还要处理后台调用、预算耗尽后的中断语义、并发消费及部分层级预算不足的情况；
  - Issue 本身标记为 `risk: high`。

### 今日崩溃与回归情况

过去 24 小时未提供新的：

- 崩溃报告
- 明确回归 Bug
- 稳定性事故
- 已关闭的故障修复

因此，今日没有可确认的线上稳定性事件；但价格数据偏差可能对成本控制类功能产生间接影响。

---

## 6. 功能请求与路线图信号

### 核心功能请求：USD 成本预算与分层继承

- [Issue #2843](https://github.com/nearai/ironclaw/issues/2843)

**预期能力：**

1. 以 USD 消耗替代固定迭代次数及墙钟时间限制。
2. 建立用户、项目、任务、线程、子线程五级预算层次。
3. 支持预算从上层向下层级联，并在下层额度不足时约束实际执行。
4. 为后台调用建立一致的成本控制机制。
5. 避免仅依赖执行次数来估算资源消耗。

**可能进入下一版本的候选项：**

- **高概率：** [PR #8171](https://github.com/nearai/ironclaw/pull/8171) 的模型价格修正  
  这是独立、低耦合的数据修复，适合优先合并；也是预算功能落地前需要完成的基础工作。

- **中高概率：** [Issue #2843](https://github.com/nearai/ironclaw/issues/2843) 中的价格数据层或预算统计基础组件  
  该 Issue 标记为高风险且横跨 Agent、DB、Config，完整方案不太可能无测试直接进入近期稳定版本。更合理的路径是分阶段交付：
  1. 统一模型价格来源；
  2. 增加成本计量与预算账本；
  3. 引入层级预算模型；
  4. 将限额从迭代/时间逐步迁移至成本预算；
  5. 保留旧配置兼容期和迁移工具。

### 路线图判断

今日信号显示 IronClaw 正强化“可观测、可预测、可中止”的 AI 任务执行能力。预算体系如果落地，将直接影响：

- 代理执行策略；
- 数据库中的任务和用量记录；
- 配置格式及默认值；
- 用户界面中的成本展示；
- 后台任务与子代理的权限边界。

不过，由于相关 Issue 创建时间较早、当前仅少量互动，尚不能仅凭本日数据断言其已获得维护者正式排期。

---

## 7. 用户反馈摘要

过去 24 小时仅 Issue #2843 有 **1 条评论**，评论内容未在提供的数据中展开，因此无法可靠提取具体用户评价、满意点或不满意点。

可从 Issue 诉求中确认的主要痛点包括：

- 固定迭代次数无法反映真实资源成本；
- 固定超时不能适配不同模型速度与任务复杂度；
- 当前限制对用户而言不够直观，用户缺少“最多花费多少”的明确预期；
- 不同任务层级缺少统一的预算归属与继承机制；
- 后台调用的成本不可控或不可预测。

满意度方面，由于没有公开点赞或评论反馈，今日无法判断社区对具体方案的支持程度。当前应将其视为**高价值但仍待充分评审的需求**。

---

## 8. 待处理积压

### 需要维护者优先处理

1. **高风险、长期开放的预算架构需求**
   - [Issue #2843](https://github.com/nearai/ironclaw/issues/2843)
   - 创建于 **2026-04-22**，更新于 **2026-11-15**
   - 涉及 Agent、DB、Config 多个核心模块，风险等级为高。
   - 当前只有 1 条评论和 0 个 👍，仍缺少明确的维护者结论、技术方案收敛或分阶段实施计划。
   - **建议关注：** 是否接受五级层级、预算耗尽后的行为、旧限额机制兼容策略、后台任务如何计费，以及是否拆分里程碑。

2. **模型价格修复 PR 等待评审与合并**
   - [PR #8171](https://github.com/nearai/ironclaw/pull/8171)
   - 创建于 **2026-11-15**
   - 当前没有可见评论或反应数据。
   - **建议关注：** 价格数据是否具备自动更新或定期同步机制，避免同类静态价格再次失真；合并后是否需要补充价格快照、回归测试及来源校验。

3. **缺乏版本交付与问题关闭**
   - 今日无新版本、无合并/关闭 PR。
   - 如该 PR 与预算设计近期推进，建议尽快形成可验证的提交链路，避免关键基础设施长期停留在提案和待审状态。

---

## 结论

IronClaw 今日处于**低量、高相关度**的开发状态：只有一个 Issue 和一个 PR 更新，但二者都围绕同一主线——**准确计量模型成本，并将其升级为可继承的美元预算控制体系**。项目技术方向清晰，不过正式交付速度偏慢，且预算方案跨数据库、代理和配置模块，仍存在较高实施风险。

**今日优先事项：**

- 评审并合并 [PR #8171](https://github.com/nearai/ironclaw/pull/8171)，先确保成本数据准确；
- 为 [Issue #2843](https://github.com/nearai/ironclaw/issues/2843) 明确分阶段路线、兼容策略和验收标准；
- 补充价格数据更新机制及预算计算测试，降低未来成本漂移和错误限额风险。

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI 项目动态日报

**日期：2026-11-15**  
**统计范围：过去 24 小时 GitHub 更新**  
**项目地址：** [netease-youdao/LobsterAI](https://github.com/netease-youdao/LobsterAI)

## 1. 今日速览

- 过去 24 小时共更新 **1 条 PR、0 条 Issue**，无新版本发布。
- 当前唯一动态为待合并 PR **#3093**，聚焦改善 Cowork 文件编辑过程与结果展示，属于**渲染交互与文档体验优化**。
- PR 已获得作者提交，但暂无评论、点赞或审查反馈，合并状态仍为 **Open**。
- 今日缺少新 Issue、用户讨论及版本发布数据，无法确认社区需求趋势或整体活跃度是否提升。
- 综合判断：项目今日处于**低动态、正常维护状态**；有明确体验改进在推进，但缺少可见的社区互动和验证闭环。

## 3. 项目进展

### 待合并 PR

- [PR #3093 — fix(cowork): clarify file edit progress and details](https://github.com/netease-youdao/LobsterAI/pull/3093)  
  **状态：** Open｜**作者：** @fisherdaddy｜**标签：** renderer、docs、cowork  
  **创建/更新时间：** 2026-11-14

  **主要改进：**
  - 针对文件编辑步骤中原有绿色/红色 `+N / -N` 计数器缺少单位的问题进行澄清。
  - 调整默认展示方式，优先呈现文件动作及执行结果，减少用户将数字误认为积分或费用消耗的可能性。
  - 新增明确的 **“View changes”** 控制入口，用于查看编辑前后差异。

  **影响范围：**
  - Cowork 文件编辑流程。
  - Renderer 层的进度与结果反馈。
  - 相关文档或界面说明。

  **进展评价：**  
  该 PR 修复了具有误导风险的界面表达，并补齐差异查看路径，属于直接提升可理解性和用户信任感的改动。若通过审查并合并，可降低文件编辑状态被误解为“费用扣除”的概率。

## 4. 社区热点

今日没有新增或更新的 Issue，也没有其他活跃 PR；因此暂无“讨论最活跃、评论最多或反应最多”的条目。

- [PR #3093](https://github.com/netease-youdao/LobsterAI/pull/3093) 是今日唯一动态，但当前 **0 条评论、0 个点赞**，尚不足以认定为社区热点。
- 其核心诉求来自既有用户反馈：文件编辑进度中的 `+N / -N` 数字缺少单位，容易被理解为信用点或费用变化。该问题现已形成对应修复 PR。

## 5. Bug 与稳定性

### 中等：文件编辑进度提示可能引发错误预期

- **问题描述：** 文件编辑步骤显示绿色或红色 `+N / -N` 计数器，但没有标明其代表新增和删除的行数或变更量。
- **潜在影响：** 用户可能将其理解为积分消耗、余额变化或其他系统计费信息，导致对执行状态和成本产生误解。
- **严重程度：** 中等。更偏向交互可理解性与信任问题，未见数据显示存在崩溃、数据损坏或任务执行失败。
- **修复状态：** **已有对应 fix PR，但尚未合并**：
  - [PR #3093](https://github.com/netease-youdao/LobsterAI/pull/3093)

### 崩溃、回归与高严重度问题

过去 24 小时没有新增 Issue，也没有报告新的崩溃、数据损坏、任务失败或明确回归问题。

## 6. 功能请求与路线图信号

- 今日没有新开或更新的功能请求 Issue，暂无足够信息判断下一版本的具体功能优先级。
- 从 [PR #3093](https://github.com/netease-youdao/LobsterAI/pull/3093) 可以观察到以下路线图信号：
  1. **强化 Cowork 文件操作的可解释性**：默认展示“执行了哪些文件操作、结果如何”，而非只显示容易产生歧义的数字。
  2. **明确区分操作结果与系统计费信息**：避免变更计数被误认为 credit charges。
  3. **提供按需差异审查**：默认信息保持简洁，同时通过 “View changes” 深入查看前后内容。
  4. **Renderer 与文档同步调整**：PR 同时涉及 `renderer` 和 `docs` 标签，说明改动目标不仅是局部 UI，也包括用户认知与说明的一致性。

若项目近期版本以 Cowork 稳定性、任务执行透明度和成本感知为重点，该 PR 很可能被纳入下一轮发布；但目前没有 Release 或版本计划，不能确认具体发布批次。

## 7. 用户反馈摘要

过去 24 小时没有新增 Issue 评论，无法从当日评论中提取更多真实使用场景、满意度或集中负反馈。

现有反馈线索来自 [PR #3093](https://github.com/netease-youdao/LobsterAI/pull/3093) 摘要：

- **用户痛点：** 文件编辑进度中的 `+N / -N` 缺少单位和语义，用户容易误认为系统正在扣除 credits。
- **使用场景：** 用户通过 Cowork 执行文件修改，并关注编辑过程、变更规模及实际结果。
- **期望改进：** 界面应明确区分“文件变更统计”“操作状态”和“费用/额度变化”，并提供直观方式查看修改前后差异。
- **满意度判断：** 暂无可用评论数据，无法评估用户对现有实现或修复方案的整体满意度。

## 8. 待处理积压

- [PR #3093](https://github.com/netease-youdao/LobsterAI/pull/3093) 仍处于待合并状态，当前无评论、点赞或审查记录。
- 建议维护者优先确认：
  - `+N / -N` 是否已统一替换为带明确单位和操作语义的结果提示；
  - “View changes” 是否能准确展示编辑前后差异；
  - 是否存在国际化文案、键盘操作、屏幕阅读器及移动端适配问题；
  - 是否需要补充自动化测试或界面截图，以防止该类歧义回归。
- 今日数据未提供长期未响应的 Issue/PR 清单，除上述唯一活跃 PR 外，无法确认是否存在更早的积压事项。

</details>

<details>
<summary><strong>QwenPaw</strong> — <a href="https://github.com/agentscope-ai/QwenPaw">agentscope-ai/QwenPaw</a></summary>

# QwenPaw 项目动态日报

**日期：2026-11-15**  
**统计范围：过去 24 小时 GitHub Issues / Pull Requests 更新**  
**仓库：[agentscope-ai/QwenPaw](https://github.com/agentscope-ai/QwenPaw)**

---

## 1. 今日速览

过去 24 小时项目共更新 **14 条 Issues**（9 条新开或活跃、5 条关闭）和 **16 条 PRs**（15 条待合并、1 条关闭），日更新量达到 **30 条**，整体开发活跃度较高。  
Issue 侧主要围绕 **渠道稳定性、长任务超时、空响应重试、移动端体验、模型提供商集成** 展开；PR 侧则集中补充 **渠道配置保护、空流重试、Web 搜索提供商、Console 交互与本地模型管理** 等改进。  
当前有 **5 个高相关 fix PR 已与今日 Issue 一一对应**，说明反馈到修复的闭环效率较好。  
不过，PR 大多仍处于 Open 或 Under Review 状态，今日仅关闭 1 条 PR、没有版本发布，因此**功能尚未形成可发布的稳定增量**。  
综合评估：项目处于**高需求、高并发推进阶段**，健康度良好，但渠道可靠性和长任务治理仍是近期主要风险点。

---

## 3. 项目进展

### 3.1 今日合并/关闭的重要 PR

今日列表中仅发现 **1 条关闭的 PR**，其余 15 条仍处于 Open、Under Review 或等待审查状态。

- **[#4411](https://github.com/agentscope-ai/QwenPaw/pull/4411) — `fix: add LLM call timeout and task watchdog to prevent stuck sessions`**
  - **状态：CLOSED**
  - **作者：** @cls3389
  - **主要方向：**
    - 为 LLM 调用增加超时；
    - 引入任务 watchdog，避免任务长期停留在 `running`；
    - 缓解代理服务或多 Key 服务无响应时 Session 永久卡死。
  - **推进价值：** 该 PR 聚焦会话稳定性，与近期飞书队列卡死、Shell 长任务阻塞等问题高度相关。
  - **注意：** PR 已关闭，数据中没有说明是合并、被替代还是主动撤回，因此不能确认修复已进入主干。

### 3.2 已建立明确 Issue 对应关系的待合并 PR

这些 PR 尚未合并，但已形成较清晰的缺陷闭环：

- **[#8743](https://github.com/agentscope-ai/QwenPaw/pull/8743) — 修复 Provider 集成测试请求错误**
  - 对应 **[Issue #8742](https://github.com/agentscope-ai/QwenPaw/issues/8742)**。
  - 将测试从不存在的 GET 路由改为现有模型池 GET 路由，使测试能够实际验证“Provider 不存在”时应返回 404。

- **[#8735](https://github.com/agentscope-ai/QwenPaw/pull/8735) — 对正常结束但内容为空的流自动重试一次**
  - 对应 **[Issue #8711](https://github.com/agentscope-ai/QwenPaw/issues/8711)**。
  - 对无答案、无工具调用的正常 EOF 执行一次重试；
  - 对 thinking 或纯空白输出进行有限缓冲，并设置 64 KiB、128 chunks 上限，避免无限积压；
  - 是提升模型输出可靠性的直接修复。

- **[#8734](https://github.com/agentscope-ai/QwenPaw/pull/8734) — CloudPaw JSON 显式按 UTF-8 读取**
  - 对应 **[Issue #8733](https://github.com/agentscope-ai/QwenPaw/issues/8733)**。
  - 修复中文 Windows、GBK/CP936 环境下 `legacy_cloudpaw.py` 使用系统默认编码读取 UTF-8 文件而导致插件加载失败的问题。

- **[#8741](https://github.com/agentscope-ai/QwenPaw/pull/8741) — 新增 Olostep Web Search Provider**
  - 对应 **[Issue #8740](https://github.com/agentscope-ai/QwenPaw/issues/8740)**。
  - 在 Tavily、AnySearch、Firecrawl 之外增加第四个 Web 搜索提供商；
  - Issue 与 PR 均由 Olostep 团队提交，属于较明确的产品集成请求。

- **[#8630](https://github.com/agentscope-ai/QwenPaw/pull/8630) — 局部更新渠道配置时保留 enabled 状态**
  - 修复只提交凭据等部分字段时，遗漏字段被重置为 schema 默认值、导致渠道被意外关闭的问题；
  - 与今日关闭的 **[Issue #7408](https://github.com/agentscope-ai/QwenPaw/issues/7408)** 直接相关；
  - 有助于防止飞书等渠道因重新保存配置而停用。

- **[#7066](https://github.com/agentscope-ai/QwenPaw/pull/7066) — OAuth2 Authorization Code Provider 持久化轮换后的 refresh token**
  - 修复远程 MCP 服务在 refresh token 轮换后仍保存旧 token、进而导致刷新失败的问题；
  - 对需要 OAuth2 授权码流程的第三方服务集成具有普遍价值。

### 3.3 今日功能与体验推进

- **[#8738](https://github.com/agentscope-ai/QwenPaw/pull/8738) — 拖动会话时保持分组稳定**
  - 修复长按拖动会话时分组展开状态和滚动位置突变，导致会话被放入错误分组的问题。

- **[#8737](https://github.com/agentscope-ai/QwenPaw/pull/8737) — 对齐侧边栏拖动与停靠热区**
  - 修复触摸型桌面设备上 44px 拖动区域与 32px 容器不匹配造成的视觉和点击偏移。

- **[#8739](https://github.com/agentscope-ai/QwenPaw/pull/8739) — 隐藏终端后不继续压缩聊天区域**
  - 修复终端关闭后仍保留可调整面板、导致聊天区和输入框下方出现空白的问题。

- **[#8133](https://github.com/agentscope-ai/QwenPaw/pull/8133) — 修复中文 Markdown 强调边界**
  - 针对 CJK 标点与 CommonMark flanking 规则之间的冲突，改善中文聊天内容的粗体、斜体等渲染效果。

- **[#8628](https://github.com/agentscope-ai/QwenPaw/pull/8628) — 在 Chat Response 中增加模型回退元数据**
  - 暴露 `model_used`、请求模型等字段；
  - 当守护进程静默切换模型时，让调用方能够知道实际响应模型，提升可观测性。

- **[#8648](https://github.com/agentscope-ai/QwenPaw/pull/8648) — Console 增加本地引擎、GPU 和自动更新控制**
  - 与 `#8649`、`#8647` 构成一组堆叠 PR；
  - 目标是统一管理本地模型引擎、GPU 后端和自动更新流程，但合并顺序和依赖关系需要维护者协调。

- **[#8477](https://github.com/agentscope-ai/QwenPaw/pull/8477) — 技能池安装改为就地重命名**
  - 将“pool → staging → workspace”的二次完整复制优化为重命名，减少 I/O 与安装耗时。

- **[#6325](https://github.com/agentscope-ai/QwenPaw/pull/6325) — Console 展示内置工具文档与参数**
  - 增加工具详情抽屉和参数表，提升内置工具的可发现性与使用效率。

### 3.4 整体推进判断

今日的推进重点可概括为：

1. **可靠性优先**：空流重试、LLM 超时、渠道状态保留、OAuth token 持久化；
2. **渠道与跨平台体验**：飞书配置保护、DingTalk 卡片回调、移动端体验；
3. **Console 产品化**：工具文档、历史归档、交互修复、外观设置；
4. **生态扩展**：Web Search Provider 增加 Olostep；
5. **本地模型能力**：本地引擎、GPU 与自动更新管理。

由于多数变更仍在审查中，今日更接近一个**高质量修复与功能候选集中收敛日**，而非已经形成正式版本发布的里程碑日。

---

## 4. 社区热点

> 今日数据没有提供完整评论正文排序和 reaction 明细，以下按已给出的评论数与点赞数识别热点。

### 4.1 讨论最集中：飞书会话无响应

- **[Issue #7534](https://github.com/agentscope-ai/QwenPaw/issues/7534)** — **4 条评论**
- **[Issue #6608](https://github.com/agentscope-ai/QwenPaw/issues/6608)** — **4 条评论**
- **[Issue #7408](https://github.com/agentscope-ai/QwenPaw/issues/7408)** — **4 条评论**
- **[Issue #4963](https://github.com/agentscope-ai/QwenPaw/issues/4963)** — **4 条评论**

这四个旧 Issue 均在今日关闭，且都由 **@feng183043996** 提交或更新，体现出同一重度用户对 QwenPaw 渠道可靠性和自动化的持续关注。

其中前两项分别暴露：

- 飞书单 Session 的 queue consumer 卡死后持续存活，消息只入队、不消费；
- 长时间 Shell 命令绕过 `shell_command_timeout`，取消后遗留孤儿进程，导致 Session 无限阻塞。

二者共同指向同一个诉求：**任务必须有硬超时、取消必须真正终止底层执行、队列消费者必须具备故障恢复能力。**

### 4.2 点赞最高：DingTalk 流式卡片回调

- **[Issue #7608](https://github.com/agentscope-ai/QwenPaw/issues/7608)** — **1 👍，3 条评论**
  - 标题：`DingTalk channel: support interactive card callbacks in stream mode`
  - 当前 DingTalk 流式客户端没有订阅 `/v1.0/card/instances/callback` 主题。
  - 用户在卡片中做出的单选、反馈等交互无法进入 Agent 流程。
  - 该问题直接限制 DingTalk 通道从“消息收发工具”向“可交互应用入口”发展，是今日唯一明确获得 👍 的 Issue。

### 4.3 新增高关注反馈：空响应与移动端体验

- **[Issue #8711](https://github.com/agentscope-ai/QwenPaw/issues/8711)** — **3 条评论**
  - 用户关注模型返回 HTTP 200、但流式响应没有正文或只有 thinking 就 EOF 的情况。
  - 诉求是自动重试一次，降低“请求成功但用户收到空白”的静默失败率。
  - 对应 PR [#8735](https://github.com/agentscope-ai/QwenPaw/pull/8735) 已提交。

- **[Issue #8745](https://github.com/agentscope-ai/QwenPaw/issues/8745)** — **1 条评论**
  - 集中反馈 PawApp 移动端的三个体验问题：Session 隔离提示误导、发送报错、输入法遮挡。
  - 表明移动端目前已不是“可用即满意”，用户开始对交互完整性和跨端一致性提出更高要求。

### 4.4 PR 热点：Console 本地模型能力

- **[PR #8648](https://github.com/agentscope-ai/QwenPaw/pull/8648)** — **size/XL**
  - 涉及本地引擎、GPU 和自动更新控制，是今日体量较大的系统性功能之一。
  - 与 `#8649`、`#8647` 存在堆叠依赖。
  - 反映出社区对“一站式本地 AI 设备管理”的需求正在增强。

---

## 5. Bug 与稳定性

按用户影响范围、阻塞程度和数据丢失风险排序如下。

### 严重

1. **飞书 Session 静默卡死，新消息无法被处理**
   - Issue：[#7534](https://github.com/agentscope-ai/QwenPaw/issues/7534) — **CLOSED**
   - queue consumer 在处理高优先级卡片消息后停止拉取，但进程不退出、无 Traceback。
   - 后续消息虽然被接收，却只会积压在队列中。
   - **Fix PR：** 数据中未显示直接对应的独立 PR；关联候选包括已关闭的 **[#4411](https://github.com/agentscope-ai/QwenPaw/pull/4411)**，但不能确认其最终覆盖范围。

2. **长时间 Shell 命令可无限阻塞飞书 Session**
   - Issue：[#6608](https://github.com/agentscope-ai/QwenPaw/issues/6608) — **CLOSED**
   - 长任务绕过 `shell_command_timeout`，取消后遗留孤儿进程。
   - 用户实测阻塞达 **1.5 小时**，后续消息全部排队。
   - **Fix PR：** 未发现明确对应的开放 PR；关联候选为已关闭的 **[#4411](https://github.com/agentscope-ai/QwenPaw/pull/4411)**。

3. **模型正常结束但返回空内容**
   - Issue：[#8711](https://github.com/agentscope-ai/QwenPaw/issues/8711) — **OPEN**
   - HTTP 200 且流正常 EOF，但没有答案内容或只有 thinking。
   - 对用户而言属于无错误提示的响应丢失。
   - **Fix PR：有，[#8735](https://github.com/agentscope-ai/QwenPaw/pull/8735)**。

### 高

4. **飞书渠道配置被意外清空并停用**
   - Issue：[#7408](https://github.com/agentscope-ai/QwenPaw/issues/7408) — **CLOSED**
   - 局部配置更新会将遗漏字段重置为默认值，可能造成 `enabled=false`、`app_id` 为空。
   - Cron 投递随后报 `KeyError('channel not found: feishu')`。
   - **Fix PR：有，[#8630](https://github.com/agentscope-ai/QwenPaw/pull/8630)**，尚待合并。

5. **Subagent 完成错误触发桌面“Reply completion”通知**
   - Issue：[#8736](https://github.com/agentscope-ai/QwenPaw/issues/8736) — **OPEN**
   - 后台子 Agent 完成时，用户会收到主回复完成通知。
   - 会造成通知噪声，并可能暴露不必要的后台活动。
   - **Fix PR：未发现。**

6. **中文 Windows 下 CloudPaw 插件无法加载**
   - Issue：[#8733](https://github.com/agentscope-ai/QwenPaw/issues/8733) — **OPEN**
   - `legacy_cloudpaw.py` 未指定 UTF-8，系统默认 GBK/CP936 环境读取失败。
   - **Fix PR：有，[#8734](https://github.com/agentscope-ai/QwenPaw/pull/8734)**。

### 中

7. **Provider 集成测试使用错误 HTTP 方法**
   - Issue：[#8742](https://github.com/agentscope-ai/QwenPaw/issues/8742) — **OPEN**
   - GET 请求命中仅注册 PUT 的路由，收到 405，未真正覆盖“不存在 Provider”分支。
   - 主要影响测试有效性，而非生产运行。
   - **Fix PR：有，[#8743](https://github.com/agentscope-ai/QwenPaw/pull/8743)**。

8. **PawApp 移动端 Session 隔离误导、发送报错与输入遮挡**
   - Issue：[#8745](https://github.com/agentscope-ai/QwenPaw/issues/8745) — **OPEN**
   - 同时包含语义误导、功能错误和输入区布局问题。
   - **Fix PR：未发现。**

9. **Console 拖动会话可能落入错误分组**
   - Issue：暂无单独 Issue；修复 PR：[#8738](https://github.com/agentscope-ai/QwenPaw/pull/8738)
   - 分组在拖动期间自动折叠、滚动跳转，造成释放位置与初始位置不一致。

10. **Console 隐藏终端后仍压缩聊天区域**
    - Issue：暂无单独 Issue；修复 PR：[#8739](https://github.com/agentscope-ai/QwenPaw/pull/8739)
    - 终端内容虽隐藏，但可调整面板未禁用，留下异常空白。

11. **Console 侧边栏拖动与停靠点击热区错位**
    - Issue：暂无单独 Issue；修复 PR：[#8737](https://github.com/agentscope-ai/QwenPaw/pull/8737)
    - 主要影响触摸型桌面设备和可访问性。

### 稳定性结论

- **高风险区：** 渠道队列、长任务取消、模型空响应、局部配置更新。
- **正向信号：** 5 个高相关缺陷已有明确 fix PR，测试、编码、空流重试和配置合并均有对应补丁。
- **主要缺口：**
  1. 飞书队列 consumer 卡死是否真正具备自恢复与 watchdog；
  2. Shell 子进程是否在取消时被强制终止；
  3. Subagent 通知和 PawApp 移动端问题仍无补丁；
  4. 已关闭 PR [#4411](https://github.com/agentscope-ai/QwenPaw/pull/4411) 的关闭原因需要补充说明。

---

## 6. 功能请求与路线图信号

### 6.1 高概率进入近期版本：Olostep Web Search Provider

- Issue：[#8740](https://github.com/agentscope-ai/QwenPaw/issues/8740)
- PR：[#8741](https://github.com/agentscope-ai/QwenPaw/pull/8741)

这是外部 Provider 提供的完整集成 PR，设计上沿用现有 provider 架构，且 Issue 与 PR 一一对应，**进入下一版本的概率较高**。建议维护者重点核查 API 兼容性、密钥管理、超时与错误映射。

### 6.2 中高概率：模型回退可观测性

- PR：[#8628](https://github.com/agentscope-ai/QwenPaw/pull/8628)
- 关联需求：Issue [#8711](https://github.com/agentscope-ai/QwenPaw/issues/8711) 的相邻稳定性方向。

暴露 `model_used` 和请求模型，有助于回答“实际是谁回答了”“为何回答风格变化”等问题。虽然当前没有独立 Issue，但属于运维和模型路由的重要基础能力。

### 6.3 中概率：Console 内置工具文档

- PR：[#6325](https://github.com/agentscope-ai/QwenPaw/pull/6325)

该 PR 自 7 月创建、长期处于 Open，说明需求存在但合并意愿或实现成本可能存在争议。其用户价值明确，可能在下一轮 Console 体验更新中择机纳入。

### 6.4 中概率：历史归档查看入口

- Issue：[#8744](https://github.com/agentscope-ai/QwenPaw/issues/8744)

上下文压缩后，早期原始轮次已归档，但 Console 无查看入口，用户容易误判“历史对话丢失”。这属于数据可访问性和信任问题，建议纳入 Console 下一轮迭代，并优先复用已有归档存储能力。

### 6.5 中概率：Settings Center 外观配置

- Issue：[#8732](https://github.com/agentscope-ai/QwenPaw/issues/8732)

需求包括欢迎头像、问候语、布局位置、背景色与样式。Issue 指出多数底层能力已经存在，因此主要工作是配置暴露和 UI 集成，**实现成本可控**。

### 6.6 中低概率：DingTalk 流式卡片回调

- Issue：[#7608](https://github.com/agentscope-ai/QwenPaw/issues/7608)

需求价值较高，是今日唯一获得 👍 的功能 Issue，但需要接入 DingTalk callback topic，并处理流式模式下的交互生命周期。由于涉及第三方协议，建议确认维护者是否愿意继续维护该通道能力。

### 6.7 中低概率：Cron 直接执行 Shell/脚本

- Issue：[#4963](https://github.com/agentscope-ai/QwenPaw/issues/4963) — **CLOSED**
- 允许定时任务绕过 Agent，直接运行脚本或 Shell。
- 对运维和数据管道自动化很有吸引力，但与当前长任务、进程取消、权限隔离风险高度相关。
- 即使该需求已关闭，也建议不要在没有 timeout、kill process group、权限白名单的情况下重新引入。

### 6.8 路线图观察

近期信号显示 QwenPaw 正从“渠道接入层”向更完整的 Agent 产品演进：

- **渠道能力：** DingTalk 交互卡片、飞书配置保护；
- **模型基础设施：** 回退可观测性、空流重试、Provider 扩展；
- **Console：** 工具文档、历史归档、外观设置、拖拽体验；
- **本地部署：** 引擎、GPU、自动更新；
- **自动化：** Cron 直接执行脚本。

下一版本最可能优先收录的是**修复类 PR 和低风险 Provider 集成**；大型 Console、本地引擎或高权限 Cron 能力则更可能分阶段发布。

---

## 7. 用户反馈摘要

### 7.1 核心痛点：任务“看似在运行”，实际已经失活

来自 **[#7534](https://github.com/agentscope-ai/QwenPaw/issues/7534)** 和 **[#6608](https://github.com/agentscope-ai/QwenPaw/issues/6608)** 的反馈表明：

- 飞书消息确实到达，但 Session 不再处理；
- 没有异常堆栈或明确错误提示；
- 用户只能通过等待、取消或重启恢复；
- 长任务会导致后续消息排队，甚至达到 1.5 小时。

用户真正需要的不是单一超时数值，而是**可观察、可取消、不会静默失活的任务生命周期**。

### 7.2 配置保存不应破坏正在运行的渠道

来自 **[#7408](https://github.com/agentscope-ai/QwenPaw/issues/7408)**：

- 用户只想更新部分凭据，却导致整个通道被停用；
- Cron 随后的报错只有 `channel not found`，缺少配置变更原因和恢复提示。
- 修复 PR [#8630](https://github.com/agentscope-ai/QwenPaw/pull/8630) 已直接覆盖核心诉求。

### 7.3 模型供应商“成功但无答案”

来自 **[#8711](https://github.com/agentscope-ai/QwenPaw/issues/8711)**：

- 请求返回 HTTP 200，却只有 thinking 或直接 EOF；
- 用户看到的是空回复，而不是明确失败。
- 自动重试一次是合理预期，但应避免无限重试和重复工具调用。

### 7.4 移动端体验仍未达到可用预期

来自 **[#8745](https://github.com/agentscope-ai/QwenPaw/issues/8745)**：

- 用户无法明确判断移动端与网页端是否共享 Session；
- 发送消息存在报错；
- 软键盘会遮挡输入区域。
- 这三项问题叠加后，用户对移动端可靠性的疑虑会显著高于单个 UI 问题。

### 7.5 Windows 中文环境兼容性仍需保障

来自 **[#8733](https://github.com/agentscope-ai/QwenPaw/issues/8733)**：

- 插件在中文 Windows 下直接无法加载；
- 用户使用 pip 安装的 2.3.0，并确认 main 分支仍有相同代码。
- 显式 UTF-8 是明确且低成本的兼容修复。

### 7.6 用户对交互型渠道的需求正在提升

来自 **[#7608](https://github.com/agentscope-ai/QwenPaw/issues/7608)**：

- 用户不仅需要文本消息，还需要在卡片里进行选择和反馈；
- 当前流式模式无法接收卡片交互，导致 DingTalk 的交互能力停留在展示层。
- 这表明渠道生态正从消息投递转向 Agent UI。

---

## 8. 待处理积压

### 8.1 长期开放的 PR

- **[#6325](https://github.com/agentscope-ai/QwenPaw/pull/6325)** — Console 工具文档与参数表  
  - 创建于 2026-07-22，已持续约 4 个月。
  - 建议维护者明确：继续合并、缩小范围，或关闭并另开更聚焦的实现。

- **[#7066](https://github.com/agentscope-ai/QwenPaw/pull/7066)** — OAuth2 refresh token 轮换持久化  
  - 创建于 2026-08-16。
  - 属于明确的基础设施正确性问题，建议优先审查并说明是否被其他 PR 替代。

- **[#6660](https://github.com/agentscope-ai/QwenPaw/pull/6660)** — 更新 `.dockerignore`  
  - 创建于 2026-08-03，内容较小，适合快速清理。

### 8.2 长期未关闭的旧 Issue

- **[#6125](https://github.com/agentscope-ai/QwenPaw/issues/6125)** — 标题和摘要仅为 `out of date`
  - 创建于 2026-07-15，今日已关闭；
  - 该 Issue 信息不足，虽已关闭，仍值得确认是否存在未被替代的真实需求。

### 8.3 关闭状态需要复核的 PR

- **[#4411](https://github.com/agentscope-ai/QwenPaw/pull/4411)** — LLM 调用超时与任务 watchdog
  - 创建于 2026-05-15，属于较早期的核心稳定性方案；
  - 今日已关闭，但没有说明是合并、替代还是放弃。
  - 鉴于飞书队列和 Shell 长任务阻塞仍然重要，建议维护者补充关闭原因，并确认超时、watchdog、进程终止是否已进入当前主干。

### 8.4 当前无 PR 的活跃问题

以下问题应避免继续积压：

- **[#8736](https://github.com/agentscope-ai/QwenPaw/issues/8736)** — Subagent 错误触发桌面通知；
- **[#8744](https://github.com/agentscope-ai/QwenPaw/issues/8744)** — 缺少压缩归档历史查看入口；
- **[#8745](https://github.com/agentscope-ai/QwenPaw/issues/8745)** — PawApp 移动端综合体验问题；
- **[#7608](https://github.com/agentscope-ai/QwenPaw/issues/7608)** — DingTalk 流式卡片回调缺失；
- **[#8732](https://github.com/agentscope-ai/QwenPaw/issues/8732)** — Settings Center 外观配置页。

---

## 今日结论

QwenPaw 今日呈现出明显的“**高并发反馈、高密度修复候选**”特征：用户问题覆盖面广，但多个关键问题已经快速形成对应 PR。  
项目当前最值得维护者关注的三件事是：

1. **确认渠道与长任务卡死问题是否真正修复，而不是仅关闭 Issue；**
2. **优先合并可观测性、空流重试、配置保留和跨平台编码修复；**
3. **明确长期 PR 的去留，并避免大型堆叠 PR 与多个独立功能长期并行堆积。**

在 15 条待合并 PR 中若能完成高优先级稳定性修复的收敛，QwenPaw 的下一版本将有望显著提升渠道可用性、模型响应可靠性和跨平台体验。

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/NousResearch/hermes-agent">NousResearch/hermes-agent</a></summary>

# Hermes Agent 项目动态日报 · 2026-11-15

> 数据来源：github.com/NousResearch/hermes-agent 过去 24 小时 Issues / PR / Release 更新
> 覆盖窗口：2026-11-14 ~ 2026-11-15（统计口径：Issues 更新 50 条、PR 更新 50 条、Release 1 个）

---

## 1. 今日速览

Hermes Agent 今日保持**高强度、多线程并行**的演进节奏：24 小时内 Issues 更新 50 条（48 条新开/活跃、2 条关闭）、PR 更新 50 条（41 条待合并、9 条已合并/关闭），另发布 1 个 canary 版本 `v0.23.1+canary.20261114T064334Z`。议题集中在**统一网关（Unified Gateway）落地后的稳定性收敛**这一条主线上——会话状态、Kanban 调度器、Bot 模式投递三个方向同时暴露"卡死/静默阻塞"类缺陷。安全侧热度同样突出：per-turn taint 审批机制、插件扫描器 docstring 误判、审批器 shell 注释绕过三条线同日推进。值得关注的是**待合并 PR 比例高达 82%（41/50）**，说明维护者评审带宽明显不足，积压风险正在累积。整体健康度评估：**功能推进正常、稳定性欠账偏多、安全响应及时**。

---

## 2. 版本发布

### v0.23.1+canary.20261114T064334Z（2026-11-14）

- **类型**：canary 预发布通道（非稳定版），基于 v0.23.1
- **发布节奏**：延续 `+canary.<UTC 时间戳>` 的自动化构建标记，说明上游 `main` 分支处于活跃迭代中
- **构建产物**：包含 macOS Apple Silicon (M-series) DMG 等桌面端分发包及对应资产表
- **破坏性变更**：从本窗口可见的 PR/Issue 反推，canary 期间的主要变更方向为
  - **Provider 路由语义调整**：不再在"本机断网"时切换到备用 provider（[#111293](https://github.com/NousResearch/hermes-agent/pull/111293)、[#155979](https://github.com/NousResearch/hermes-agent/pull/155979)）——这会改变用户观察到的 fallback 行为
  - **会话/网关所有权模型收紧**：`owner-backfill` 在 split topology 下会拒绝独占维护（[#148531](https://github.com/NousResearch/hermes-agent/issues/148531)），需注意多机部署用户的行为差异
  - **Windows 终端隔离**：前台命令改为各自独立 Job Object 收敛（[#155628](https://github.com/NousResearch/hermes-agent/pull/155628)）
- **迁移注意事项**：
  1. 桌面端用户升级后建议执行 `hermes doctor` 复核运行时 venv 与工具链路径（参见 [#155948](https://github.com/NousResearch/hermes-agent/issues/155948) 的 Windows TTS 包路径问题）
  2. 依赖 fallback provider 行为的用户需重新验证断网场景下的会话连续性
  3. 不建议在生产环境直接采用 canary，等待 v0.23.x stable 或 v0.24
- **发布页**：[v0.23.1+canary.20261114T064334Z](https://github.com/NousResearch/hermes-agent/releases)

---

## 3. 项目进展

今日已合并/关闭的 PR 共 9 条，主要集中在**安全护栏修复**与**可观测性/工具链健壮性**两类：

| 主题 | PR | 推进内容 |
|---|---|---|
| 插件安装安全 | [#155924](https://github.com/NousResearch/hermes-agent/pull/155924) (CLOSED, ci-reviewed) | 修复插件扫描器把 Python docstring 里的"防御性描述"误判为危险行为的问题；12 月 12 日起扫描器会把"拒绝 `rm -rf /`"这类文档说明当作实际执行，导致插件无法安装、连 `--force` 也无效。salvage 自 #155830 |
| 插件护栏降级 | [#155830](https://github.com/NousResearch/hermes-agent/pull/155830) (CLOSED) | `_is_defensive_documentation` 的 prose cap 扩展到 docstring，prose 本身不再能单独把插件打成"不可覆写的 dangerous" |
| 审批器绕过 | [#117827](https://github.com/NousResearch/hermes-agent/pull/117827) (CLOSED) | 修复 shell 注释处理同时对审批检测器与 smart-review guardian 隐藏可执行后缀的问题（如 `echo $(printf hi)#x; reboot`），保留可执行 shell 文本 |
| 网关投递一致性 | [#155959](https://github.com/NousResearch/hermes-agent/pull/155959) (CLOSED) | 平台适配器重连时，回复的**文本与附件**走不同通道的问题修复：最终文本走替换后的适配器、附件走旧适配器，现统一跟随文本 |
| 用量计费可见性 | [#129262](https://github.com/NousResearch/hermes-agent/pull/129262) (CLOSED) | `hermes -z --usage-file` 现在能报告**实际生效**的 `service_tier`（含 `/fast` 降级），并在降级时告警，补齐账单审计字段 |
| 插件目录版本 | [#155619](https://github.com/NousResearch/hermes-agent/pull/155619) (CLOSED, ci-reviewed) | `circuit-bench` 插件目录条目升级 0.1.0 → 0.1.1（pin 到 `0c9585a3`） |
| 语法卫生 | [#89828](https://github.com/NousResearch/hermes-agent/pull/89828) (CLOSED) | 清理 5 个文件中 7 处 docstring 的非法转义序列（Python 3.12+ `SyntaxWarning`，未来版本将升级为 `SyntaxError`） |

**整体前进度评估**：本批次以"缺陷修补"为主，**没有新增大功能合入**，但安全面推进密集（3 条安全 PR 全部关闭/合入）。可以判断：**v0.23.x 的主线工作重心已从"统一网关功能上线"切换到"网关落地后的稳定性与安全收敛"**。

---

## 4. 社区热点

### Tier 1 · 讨论最密集

**[#143547 — Unified gateway: open post-merge problems on main](https://github.com/NousResearch/hermes-agent/issues/143547)** · 70 条评论 · 👍1
> 10 月 14 日 #106742 把所有本地会话迁入单一 gateway 进程，CLI / TUI / Desktop / API server / 编辑器 / 消息 bot / cron / Kanban / Group Chat 全部改为向该进程提交 turn。
这是当日**唯一一个"总账本式"追踪 issue**，由 @dokterdok 维护，专门承接统一网关合入后的遗留问题。它是理解当前所有会话类缺陷的最佳入口。

**[#129455 — import-time PM activation 触发 home_io_guard，默认安装下测试全红](https://github.com/NousResearch/hermes-agent/issues/129455)** · 30 条评论
> 默认安装（checkout 位于 `$HERMES_HOME` 内）时，导入期 PM 激活链会探测 manifest，`tests/home_io_guard.py` 触发导致**大范围测试套件失败**。属于**测试基础设施与默认安装路径的耦合问题**，直接影响 CI 信号可信度。

**[#119070 — Kanban：限流后成功的卡片被永久 park 为 blocker_auth](https://github.com/NousResearch/hermes-agent/issues/119070)** · 26 条评论
> 一次限流 + 重试成功的任务，`check_respawn_guard` 在每个 tick 都返回 `blocker_auth`，reviewer 永不生成，网关日志持续打印 `kanban dispatcher stuck: ready queue non-empty for N consecutive...`。这是**自动化流水线直接停摆**级别的问题。

### Tier 2 · 高价值 / 高反应

**[#148898 — Codex 后端对部分 zstd 压缩 /responses body 返回 HTTP 400](https://github.com/NousResearch/hermes-agent/issues/148898)** · 13 条评论 · 👍3（当日最高 👍）
> 自 #136916 引入 zstd 请求压缩后，`openai-codex` 间歇性 400 `{"detail":"Bad Request"}`，且被归类为**不可重试**，直接导致 Codex 用户任务失败。这是当日的**头号用户可见故障**。

**[#29458 — Kanban active_pr respawn guard 无运维清除路径且忽略已关闭 PR](https://github.com/NousResearch/hermes-agent/issues/29458)** · 12 条评论
> worker 提交 GitHub PR URL 后若该 PR 被关闭或被运维声明为无关，guard 仍将任务视为活跃，**没有运维侧的解除手段**——典型的"自动化 + 人工审批"死锁。

**[#137287 — Desktop transcript 随机重复/乱序/丢失消息](https://github.com/NousResearch/hermes-agent/issues/137287)** · 11 条评论 · 👍1
> 桌面端会话记录随机损坏：用户消息与助手回复成对重复、随机散落，有时**整段消失**，有时凭空新增重复项。涉及 Desktop / sessions / chat 三个标签，风险等级 `sweeper:risk-session-state`。

**[#139532 — 网关 turn 中途重启导致会话永久静默阻塞](https://github.com/NousResearch/hermes-agent/issues/139532)** · 10 条评论 · 👍1
> turn 在飞行中被网关重启打断，turn 被 fence 为 `unknown`，**整个会话的输入 FIFO 被暂停**；Bot Chat 后续消息永远排队。唯一恢复手段是终端命令，桌面端**没有任何 UI  affordance**。

**[#155595 — Profile 创建与生命周期追踪（新建，11-14 创建，1 日内 8 评论）](https://github.com/NousResearch/hermes-agent/issues/155595)** · 8 条评论
> 新开的**交接型 tracker**，覆盖 profile 创建正式调研、网关所有权与恢复、共享 provisioning 与凭证、模型继承、clone 安全、Honcho 抽取与 provider seam、客户端反馈等。热度上升极快，说明 profile 生命周期是当前**最活跃的产品级议题**。

### 反应最强（新问题）

- **[#155891 — checkpoints prune 把 "store above its size cap" 计为错误](https://github.com/NousResearch/hermes-agent/issues/155891)** · 1 评论 · 由 `qveys-hermes-bot[bot]` 自动提交
  运维命令在完全健康的 store 上报 `Errors: 1`，且原因只走 `logger.warning`，**CLI 无 console handler，用户完全看不到解释**——典型的"可观测性缺失导致误报"。
- **[#155908 — 插件给服务器成员 bot 但不给工具：fail-closed 策略 seam](https://github.com/NousResearch/hermes-agent/issues/155908)** · 新开安全提案
  第三方插件 `ctx_discord_policy` 允许 Discord 全员与 bot 对话，但只有白名单 user ID 能调用工具。诉求是**安全策略应 fail-closed 地随插件一起分发**。

---

## 5. Bug 与稳定性

按严重程度排列（🔴 阻塞/静默停摆 → 🟠 功能不可用 → 🟡 体验与可观测性 → ⚪ 边缘）：

### 🔴 严重 — 会话/任务静默停摆

| Issue | 症状 | 是否有 fix PR |
|---|---|---|
| [#119070](https://github.com/NousResearch/hermes-agent/issues/119070) Kanban 限流后成功仍 park 为 blocker_auth，reviewer 永不生成 | 派发器永久卡死，日志刷 `dispatcher stuck` | ❌ 无直接 PR；与 [#126190](https://github.com/NousResearch/hermes-agent/issues/126190)（stale `rate_limited` 文本残留）、[#29458](https://github.com/NousResearch/hermes-agent/issues/29458)（active_pr guard 无清除路径）构成**同一族三连**，建议合并治理 |
| [#139532](https://github.com/NousResearch/hermes-agent/issues/139532) 网关 turn 中途重启 → 会话 FIFO 永久暂停，桌面端无恢复入口 | 用户消息永远排队 | ❌ 无 PR，属设计缺口 |
| [#126190](https://github.com/NousResearch/hermes-agent/issues/126190) 依赖晋升后 `last_failure_error` 未清理 → ready 任务卡死 | 任务永不重跑 | ❌ 无 PR |
| [#155955](https://github.com/NousResearch/hermes-agent/issues/155955) Bot 模式首条 DM 静默 fork 会话：旧行被改名、替换行隐藏、用户窗口冻结 | 用户侧完全无感知的会话丢失 | ❌ 无 PR（11-15 新开） |

### 🟠 高 — 功能不可用 / 直接报错

| Issue | 症状 | 是否有 fix PR |
|---|---|---|
| [#148898](https://github.com/NousResearch/hermes-agent/issues/148898) Codex 后端 zstd 压缩 body 返回 400 且不可重试 | openai-codex 用户任务间歇性失败 | ⚠️ 无直接 PR，但 [#154792](https://github.com/NousResearch/hermes-agent/pull/154792) 触及 anthropic_messages fallback 构造，可作为相邻修复参考 |
| [#148531](https://github.com/NousResearch/hermes-agent/issues/148531) split topology 下 desktop 每次启动 `owner-backfill` 409 "Exclusive maintenance refused" | 桌面端启动即报错 | ❌ 无 PR |
| [#137287](https://github.com/NousResearch/hermes-agent/issues/137287) Desktop transcript 随机重复/乱序/丢失 | 对话记录损坏，**用户信任度直接受损** | ❌ 无 PR |
| [#146035](https://github.com/NousResearch/hermes-agent/issues/146035) bot-relay mailbox 路径歧义，profile 作用域写入分裂到两处 | 跨机 agent DM 停滞 | ❌ 无 PR |
| [#155461](https://github.com/NousResearch/hermes-agent/issues/155461) borrowed-root 启动用 `-I` 重入裸 tools python，丢弃 site-packages | 安装即坏 | ❌ 无 PR |
| [#145469](https://github.com/NousResearch/hermes-agent/issues/145469) / [#150951](https://github.com/NousResearch/hermes-agent/issues/150951) PM 与 install.sh 在装了 musl-libc 的 glibc 主机上误判为 `linux-x64-musl` | `hermes update` 失败 | ❌ 无 PR（两 issue 重复，建议合并） |
| [#146527](https://github.com/NousResearch/hermes-agent/issues/146527) Dashboard 批量删除会话 409 Conflict | 批量运维不可用 | ❌ 无 PR |
| [#155932](https://github.com/NousResearch/hermes-agent/issues/155932) mid-turn steer 打断前台命令时替换回复丢失，`interrupted_during_api_call` | 转向交互失效 | ❌ 无 PR（11-15 新开） |

### 🟡 中 — 体验、可观测性、兼容性

- **[#96801](https://github.com/NousResearch/hermes-agent/issues/96801)** Feishu 计划重启在断连取消跳过本地清理时卡住数分钟（网关 / 飞书，P2）— 无 PR
- **[#98160](https://github.com/NousResearch/hermes-agent/issues/98160)** goal-mode Kanban 任务在同卡 request_review 与 reviewer close-out 之间死锁 — 无 PR
- **[#148861](https://github.com/NousResearch/hermes-agent/issues/148861)** Kanban notifier 投递已被取代的生命周期事件，无陈旧性校验/顺序保证/投递时快照 — 无 PR
- **[#155829](https://github.com/NousResearch/hermes-agent/issues/155829)** hermes-mobile-push：`deliver: bot-chat` 的 cron 触发**双推送通知** — 无 PR
- **[#152295](https://github.com/NousResearch/hermes-agent/issues/152295)** 对仅支持 `xhigh` 的模型提供 `max` 推理档位 → 服务端 400（llama.cpp）— 无 PR
- **[#155948](https://github.com/NousResearch/hermes-agent/issues/155948)** Windows 桌面端 `hermes pm install --extra tts-premium` 后仍报 "elevenlabs package not installed" — 无 PR
- **[#155891](https://github.com/NousResearch/hermes-agent/issues/155891)** `hermes checkpoints prune` 把超限 store 计为错误且 CLI 无输出 — 无 PR
- **[#129455](https://github.com/NousResearch/hermes-agent/issues/129455)** 默认安装下导入期 PM 激活触发 home_io_guard，**大面积测试失败** — 无 PR（属测试基础设施）
- **[#149262 关联]** [#155461](https://github.com/NousResearch/hermes-agent/issues/155461) — 同上

### ⚪ 低 / 边缘

- **[#98160](https://github.com/NousResearch/hermes-agent/issues/98160)**、**[#152295](https://github.com/NousResearch/hermes-agent/issues/152295)**、**[#143214](https://github.com/NousResearch/hermes-agent/issues/143214)**（browser_vault list 未过滤时吐出全部登录标识符，属**凭据暴露面**，实际风险不低）、**[#155891](https://github.com/NousResearch/hermes-agent/issues/155891)**

### ✅ 已闭环 / 有修复路径

- **[#147969](https://github.com/NousResearch/hermes-agent/issues/147969)**（CLOSED）per-turn taint：turn 读取过不可信内容后仍可执行副作用工具 — 安全提案已关闭，属设计决策记录
- **[#155823](https://github.com/NousResearch/hermes-agent/issues/155823)**（CLOSED）插件扫描器 docstring 绕过防御性文档上限 — 已由 [#155924](https://github.com/NousResearch/hermes-agent/pull/155924) 修复
- [#154792](https://github.com/NousResearch/hermes-agent/pull/154792) / [#155979](https://github.com/NousResearch/hermes-agent/pull/155979) / [#111293](https://github.com/NousResearch/hermes-agent/pull/111293) / [#155628](https://github.com/NousResearch/hermes-agent/pull/155628) / [#155980](https://github.com/NousResearch/hermes-agent/pull/155980) / [#24304](https://github.com/NousResearch/hermes-agent/pull/24304) / [#155975](https://github.com/NousResearch/hermes-agent/pull/155975) / [#112414](https://github.com/NousResearch/hermes-agent/pull/112414) / [#123850](https://github.com/NousResearch/hermes-agent/pull/123850) / [#123846](https://github.com/NousResearch/hermes-agent/pull/123846) / [#101127](https://github.com/NousResearch/hermes-agent/pull/101127) / [#149360](https://github.com/NousResearch/hermes-agent/pull/149360) / [#153896](https://github.com/NousResearch/hermes-agent/pull/153896) — 均已有 PR 在途

> **统计观察**：当日可见的 ~22 个未闭环 Bug 中，**具备明确 fix PR 的不足 7 个**，其余依赖维护者手工修复或尚无人认领。这是当前项目健康度的**主要扣分项**。

---

## 6. 功能请求与路线图信号

### 已被 PR 承接（高概率进入下一版本）

| 需求 | Issue / PR | 判断 |
|---|---|---|
| 网关 fallback 不再因本机断网而切换 provider | [#111293](https://github.com/NousResearch/hermes-agent/pull/111293) + salvage PR [#155979](https://github.com/NousResearch/hermes-agent/pull/155979) | 🔥 **极大概率合入**。由 @teknium1 亲自 salvage，说明是明确的产品意图 |
| 桌面端可重绑的 "Show Kanban" 快捷键（Linux Ctrl+Alt+K） | [#155975](https://github.com/NousResearch/hermes-agent/pull/155975) | 🔥 高概率。新增原生 `kanban.open` action，保留既有 board 选择与用户覆盖 |
| 会话批量取消归档（archive 的逆操作），带预览 | [#112414](https://github.com/NousResearch/hermes-agent/pull/112414) | 🔥 高概率。归档目前是**单向门**，需求明确（`hermes sessions archive` 无 unarchive、`list` 无 archived 过滤） |
| 批量模式支持 Fire tuple 参数与数字型 run name | [#123846](https://github.com/NousResearch/hermes-agent/pull/123846) | 🔥 高概率，小而明确的修复 |
| Tool Search bridge trajectory 不被误判失效 | [#123850](https://github.com/NousResearch/hermes-agent/pull/123850) | 🟡 中高概率 |
| `hermes update` 对本地 fork commit 做 rebase 而非跳过 sync | [#101127](https://github.com/NousResearch/hermes-agent/pull/101127) | 🟡 中高概率，长期 PR（09-02 起） |
| 工具预览 diff-aware 截断（省略公共前缀、显示差异尾部） | [#24304](https://github.com/NousResearch/hermes-agent/pull/24304) | 🟡 中概率，5 月起的老 PR |
| TTS 命令型 provider 必须收到调用方输出路径 | [#155980](https://github.com/NousResearch/hermes-agent/pull/155980) | 🟡 中概率，安全向 |
| Windows 前台命令各自独立 Job Object | [#155628](https://github.com/NousResearch/hermes-agent/pull/155628) | 🟡 中概率，Windows 平台关键路径 |
| init-time fallback 落到 anthropic_messages 时构造原生 Anthropic client | [#154792](https://github.com/NousResearch/hermes-agent/pull/154792) | 🟡 中概率，11-13 新建 |

### 无 PR、需求明确（建议排入下一版本）

| 需求 | Issue | 诉求分析 |
|---|---|---|
| `browser_vault action=list` 支持按站点/标签过滤 | [#143214](https://github.com/NousResearch/hermes-agent/issues/143214) | 🟢 **优先级应上调**：当前无过滤时会把所有后端的**全部登录标识符**注入上下文，属凭据暴露面，既是可用性问题也是安全问题 |
| Kanban 排除特定 profile 不参与通用自动拆解 | [#83046](https://github.com/NousResearch/hermes-agent/issues/83046) | 🟡 明确的多租户需求（`_build_roster` + LLM assignee 归一化应支持白/黑名单） |
| Kanban 同 assignee "Recent work" 注入可关闭 / 租户隔离 | [#78834](https://github.com/NousResearch/hermes-agent/issues/78834) | 🟡 涉及压缩上下文下的**跨任务上下文串味**，多租户场景明确诉求 |
| 插件 fail-closed 策略随插件分发 | [#155908](https://github.com/NousResearch/hermes-agent/issues/155908) | 🟢 安全向，值得纳入 roadmap |
| Profile 创建与生命周期体系化 | [#155595](https://github.com/NousResearch/hermes-agent/issues/155595) | 🟢 **战略性信号**：这是新建的正式 tracker，说明"profile 生命周期"已被提升为独立产品议题，未来版本大概率出现 profile provisioning / clone / 模型继承相关的新命令面 |

### 插件生态扩张（路线图侧翼）

- **[#153896](https://github.com/NousResearch/hermes-agent/pull/153896)** — `focus` 插件（认知上下文引擎，v0.1.0，community tier，tools 类）
- **[#149360](https://github.com/NousResearch/hermes-agent/pull/149360)** — `harness2` 插件（Harness² 自改进循环，arXiv:2610.14224）
- **[#155619](https://github.com/NousResearch/hermes-agent/pull/155619)** — `circuit-bench` 0.1.1 已合入

> 社区正以**插件目录**为载体构建"自我改进 / 上下文工程"扩展层，这是 Hermes 生态侧最明确的第三方扩展方向。

---

## 7. 用户反馈摘要

### 真实痛点（来自现场报告）

1. **"任务静默卡死，用户完全无感"** —— 这是当日最集中的抱怨形态。
   - Kanban 侧：限流后成功的任务永不派发（[#119070](https://github.com/NousResearch/hermes-agent/issues/119070)、[#126190](https://github.com/NousResearch/hermes-agent/issues/126190)、[#29458](https://github.com/NousResearch/hermes-agent/issues/29458)）
   - 会话侧：网关重启即永久阻塞（[#139532](https://github.com/NousResearch/hermes-agent/issues/139539)）、Bot DM 静默 fork 冻结窗口（[#155955](https://github.com/NousResearch/hermes-agent/issues/155955)）
   - **共同诉求**：**失败要可见、要可自愈、要能在 UI 内解除**，而不只是写进 `logger.warning`（[#155891](https://github.com/NousResearch/hermes-agent/issues/155891) 正是"原因只进 logger"的镜像案例）

2. **"桌面端是信任的最后一道防线，但它正在失守"**
   - transcript 随机重复/丢失（[#137287](https://github.com/NousResearch/hermes-agent/issues/137287)）
   - 每次启动即 409（[#148531](https://github.com/NousResearch/hermes-agent/issues/148531)）
   - 批量删除 409（[#146527](https://github.com/NousResearch/hermes-agent/issues/146527)）
   - TTS 包"装了却说没装"（[#155948](https://github.com/NousResearch/hermes-agent/issues/155948)）
   - 移动推送一次运行两次通知（[#155829](https://github.com/NousResearch/hermes-agent/issues/155829)）
   > **净信号**：桌面端（尤其 Windows 打包版）的质量感知明显低于 CLI/TUI 用户。

3. **"跨平台、跨机、跨 profile 的拓扑假设不成立"**
   - bot-relay mailbox 双路径（[#146035](https://github.com/NousResearch/hermes-agent/issues/146035)）
   - split topology 独占维护冲突（[#148531](https://github.com/NousResearch/hermes-agent/issues/148531)）
   - 跨机 agent DM 停滞
   > 诉求：**路径解析必须有唯一权威根**，profile 作用域写不得分裂 relay。

4. **"安装/更新链路在真实发行版上不可靠"**
   - musl 误判（[#145469](https://github.com/NousResearch/hermes-agent/issues/145469)、[#150951](https://github.com/NousResearch/hermes-agent/issues/150951)）
   - borrowed-root `-I` 丢 site-packages（[#155461](https://github.com/NousResearch/hermes-agent/issues/155461)）
   - 默认安装下测试套件大面积失败（[#129455](https://github.com/NousResearch/hermes-agent/issues/129455)）
   - fork 更新策略跳过 upstream sync（[#101127](https://github.com/NousResearch/hermes-agent/pull/101127)）
   > 典型环境分布：Fedora 44 glibc 2.43、Arch Linux x64 + Python 3.14.9、macOS 27.2 arm64、Windows 11 x64 原生（非 WSL）。

5. **"我只是想看一眼，别把整个 vault 吐出来"**
   - [#143214](https://github.com/NousResearch/hermes-agent/issues/143214) —— 明确的大型 vault 场景下的上下文膨胀与凭据暴露双诉求。

### 满意度信号

- 👍 最高票 [#148898](https://github.com/NousResearch/hermes-agent/issues/148898)（3 票）指向**对 Codex 主路径稳定性的高关注**——说明 openai-codex 是当前主力用户群之一，其可用性直接影响口碑。
- [#143547](https://github.com/NousResearch/hermes-agent/issues/143547) 获 70 条评论，显示社区**愿意深度参与**统一网关的问题梳理；#129455 的 30 条评论说明测试/CI 议题也有强社区驱动力。
- 多个 PR 由**社区成员主动 salvage**（[#155979](https://github.com/NousResearch/hermes-agent/pull/155979) salvage #111293、[#155924](https://github.com/NousResearch/hermes-agent/pull/155924) salvage #155830）——这既是社区活力的证明，也暴露**评审带宽不足**的现实。

---

## 8. 待处理积压

### ⏳ 长期未合入的重要 PR（评审积压）

| PR | 首次创建 | 待处理时长 | 备注 |
|---|---|---|---|
| [#101127](https://github.com/NousResearch/hermes-agent/pull/101127) fix(update): rebase fork commit 而非跳过 sync | 2026-09-02 | **~2.5 个月** | 更新路径核心，**长期无人响应** |
| [#111293](https://github.com/NousResearch/hermes-agent/pull/111293) fix(fallback): 本机离线时不切 provider | 2026-09-14 | **~2 个月** | 昨日由社区另开 salvage PR 救火，说明**已实质阻塞** |
| [#112414](https://github.com/NousResearch/hermes-agent/pull/112414) feat(sessions): bulk unarchive | 2026-09-15 | ~2 个月 | 明确单向门痛点 |
| [#24304](https://github.com/NousResearch/hermes-agent/pull/24304) diff-aware tool preview truncation | 2026-05-12 | **~6 个月** | 修复 #24298，已 rebase 到 main，仍待决 |
| [#123850](https://github.com/NousResearch/hermes-agent/pull/123850) / [#123846](https://github.com/NousResearch/hermes-agent/pull/123846) batch trajectory 修复 | 2026-09-26 | ~1.7 个月 | 同作者，可批量评审 |
| [#149360](https://github.com/NousResearch/hermes-agent/pull/149360) plugin-catalog: harness2 | 2026-11-05 | 10 天 | 新生态入口 |
| [#153896](https://github.com/NousResearch/hermes-agent/pull/153896) plugin-catalog: focus | 2026-11-11 | 4 天 | 新生态入口 |

> 累计待合并 **41 条**，其中至少 6 条创建已逾 2 个月。**老 PR 的评审队列是当前最直接的项目效率瓶颈**。

### ⏳ 长期未响应的重要 Issue

| Issue | 首次创建 | 待处理时长 | 风险 |
|---|---|---|---|
| [#29458](https://github.com/NousResearch/hermes-agent/issues/29458) active_pr respawn guard 无清除路径 | 2026-05-20 | **~6 个月** | 与 #119070 / #126190 同族，自动化停摆 |
| [#83046](https://github.com/NousResearch/hermes-agent/issues/83046) Kanban 排除 profile 自动拆解 | 2026-08-10 | 3 个月+ | 多租户刚需 |
| [#98160](https://github.com/NousResearch/hermes-agent/issues/98160) goal-mode Kanban 同卡死锁 | 2026-08-29 | 2.5 个月 | 目标模式完全不可用 |
| [#96801](https://github.com/NousResearch/hermes-agent/issues/96801) Feishu 计划重启停滞 | 2026-08-28 | 2.5 个月 | 飞书用户运维阻塞 |
| [#143214](https://github.com/NousResearch/hermes-agent/issues/143214) browser_vault 按站点过滤 | 2026-10-22 | ~3.5 周 | 凭据暴露面 |
| [#146035](https://github.com/NousResearch/hermes-agent/issues/146035) bot-relay mailbox 路径歧义 | 2026-10-28 | ~2.5 周 | 跨机 DM 中断 |
| [#137287](https://github.com/NousResearch/hermes-agent/issues/137287) Desktop transcript 损坏 | 2026-10-12 | ~5 周 | **口碑级风险** |
| [#139532](https://github.com/NousResearch/hermes-agent/issues/139532) 网关重启永久阻塞会话 | 2026-10-16 | ~4.5 周 | 需产品决策（是否需 UI 解除） |
| [#119070](https://github.com/NousResearch/hermes-agent/issues/119070) / [#126190](https://github.com/NousResearch/hermes-agent/issues/126190) Kanban blocker_auth 死锁 | 2026-09-22 / 09-28 | ~7 周 | 自动化停摆 |
| [#148898](https://github.com/NousResearch/hermes-agent/issues/148898) Codex zstd 400 | 2026-11-04 | ~1.5 周 | 主力 provider 可用性 |
| [#143547](https://github.com/NousResearch/hermes-agent/issues/143547) 统一网关遗留总账 | 2026-10-23 | ~3.5 周 | 需系统性梳理，否则其余 issue 难以收敛 |

---

### 📌 今日结论与维护者行动建议

1. **立即处理（本周内）**：[#119070](https://github.com/NousResearch/hermes-agent/issues/119070) + [#126190](https://github.com/NousResearch/hermes-agent/issues/126190) + [#29458](https://github.com/NousResearch/hermes-agent/issues/29458) Kanban respawn guard 三件套——它们共享同一根因族，且都导致**自动化流水线静默停摆**，是最高 ROI 的修复。
2. **补齐 UI 解除路径**：[#139532](https://github.com/NousResearch/hermes-agent/issues/139532) 与 [#29458](https://github.com/NousResearch/hermes-agent/issues/29458) 都明确要求"不要逼用户去敲终端命令"。建议提供统一的 `hermes sessions unblock` / `hermes kanban unblock` 运维命令 + 桌面端按钮。
3. **评审带宽治理**：41 条待合并、6 条超 2 个月。建议设置**周度 PR 清仓窗口**，优先处理 [#111293](https://github.com/NousResearch/hermes-agent/pull/111293)（已有 salvage 版本）与 [#101127](https://github.com/NousResearch/hermes-agent/pull/101127)（更新路径核心）。
4. **安全优先排队**：[#143214](https://github.com/NousResearch/hermes-agent/issues/143214) 凭据暴露面、[#155908](https://github.com/NousResearch/hermes-agent/issues/155908) fail-closed 策略 seam、[#147969](https://github.com/NousResearch/hermes-agent/issues/147969) per-turn taint 后续。
5. **CI 信号修复**：[#129455](https://github.com/NousResearch/hermes-agent/issues/129455) 使默认安装下测试全红，会直接**污染后续所有 PR 的合并信号**，建议优先修复。
6. **路线图确认**：profile 生命周期（[#155595](https://github.com/NousResearch/hermes-agent/issues/155595)）已成为独立 tracker，插件生态（focus / harness2 / circuit-bench）持续扩张——建议在下一个 minor 版本给出正式的 profile provisioning 命令面与插件目录分层策略。

**项目健康度评分（主观数据驱动评估）**：
- 提交与讨论活跃度：🟢 **高**（50 Issues + 50 PR / 24h，社区深度参与）
- 功能推进：🟡 **中**（本窗口以修补为主，无重大新特性合入）
- 稳定性：🔴 **偏低**（~22 个未闭环 Bug，Kanban/会话/桌面三条线同时报障）
- 安全响应：🟢 **良好**（3 条安全 PR 同日闭环，per-turn taint 提案已决议）
- 维护吞吐：🟡 **中偏低**（41 条待合并 + 6 条超 2 个月老 PR）
- **综合：活跃但欠账偏多，"网关收敛期"特征明显；下一阶段的关键在于把"发现问题"转化为"闭环修复"。**

</details>

<details>
<summary><strong>OpenHuman</strong> — <a href="https://github.com/tinyhumansai/openhuman">tinyhumansai/openhuman</a></summary>

# OpenHuman 项目动态日报

**日期：2026-11-15**  
**统计范围：过去 24 小时**  
**仓库：[tinyhumansai/openhuman](https://github.com/tinyhumansai/openhuman)**

> **数据说明：**当前提供的 Issue 均未展示评论，PR 的评论与点赞字段也基本缺失。因此，“最活跃”主要依据过去 24 小时是否更新、当前状态及内容重要性判断，不等同于评论数排名。

---

## 1. 今日速览

过去 24 小时共更新 **6 个 Issue**、**24 个 PR**，其中 **19 个 PR 已合并或关闭、5 个仍待处理**，整体更新密度较高。  
今日主线是明显的 **Rust Core 架构收敛与代码清理**：服务层、MCP、Artifacts、可观测性、CLI、配置与安全模块中的遗留代码被迁移或删除，多个 PR 合计显著减少重复代码和技术债。  
功能与稳定性方面，重点推进了 **Langfuse 数据可靠性、浏览器跨站导航、持久化浏览器配置、Telegram 配对持久化，以及 TinyComputer 验证码求解能力**。  
用户侧问题仍集中在 **Claude Code 登录和模型发现、security-module 配置更新、搜索供应商扩展**，其中 Langfuse 已有明确修复 PR，但多数 Claude Code 与配置问题目前尚无对应修复。  
综合判断：**项目开发活跃、工程治理较强，但核心模块重构密集，当前应重点关注回归测试与用户反馈闭环；健康度评为“良好偏积极”**。

---

## 3. 项目进展

### 3.1 架构治理：Rust Core 持续瘦身

今日最重要的进展不是单一功能，而是对 `core/`、MCP、Artifacts、语音与存储模块进行系统性收敛：

- **[#8724 refactor(core): relocate business leftovers in core/ to their domains](https://github.com/tinyhumansai/openhuman/pull/8724)**  
  将 envelope、状态/RPC/CLI、profile provider 和 Agent CLI 等残留业务逻辑从 `core/` 迁回所属领域，降低核心 crate 的职责耦合。

- **[#8723 refactor(rpc): relocate serving code from core to openhuman-rpc](https://github.com/tinyhumansai/openhuman/pull/8723)**  
  将 `/events` bind-token store、public-bind 校验、SaaS Gateway HMAC 签名及端口选择迁入 `openhuman-rpc`。职责边界更清晰，但属于服务端链路重构，需要持续关注鉴权与事件订阅回归。

- **[#8715 refactor(mcp): move MCP tool adapters into mcp/ and show_ui into tools/impl/ui](https://github.com/tinyhumansai/openhuman/pull/8715)**  
  MCP 桥接工具被拆分为独立文件，`show_ui` 等 UI 工具迁入更合适的位置，改善 MCP 工具维护性。

- **[#8719 refactor(artifacts): move document and presentation tools into artifacts/tools](https://github.com/tinyhumansai/openhuman/pull/8719)**  
  文档和演示文稿生成工具统一归入 `artifacts/tools`，使 artifact 生产能力和文件根目录管理更加内聚。

- **[#8716 refactor(core): share the controller-schema helpers from util::params](https://github.com/tinyhumansai/openhuman/pull/8716)**  
  合并核心 crate 与 `openhuman-tinyhumans` 中重复的 controller schema 辅助函数 reportedly 覆盖 **90 个文件、约减少 490 行**，同时保留单一共享实现。

- **[#8714 refactor(core): relocate hosted observability to openhuman-tinyhumans](https://github.com/tinyhumansai/openhuman/pull/8714)**  
  将 hosted backend 的会话过期、计费 sentinel、消息过滤、Langfuse 环境分类和 OTLP push 等逻辑迁至 `openhuman-tinyhumans`，为后续 Langfuse 修复建立更清晰的责任边界。

### 3.2 代码清理与技术债削减

- **[#8706 delete dead tool plumbing](https://github.com/tinyhumansai/openhuman/pull/8706)**  
  删除未调用工具管线和重复工具，**35 个文件、净减少约 632 行**，并对 `tools/` 启用 `dead_code` 检查。

- **[#8705 remove dead MCP glue](https://github.com/tinyhumansai/openhuman/pull/8705)**  
  移除仅记录日志的 MCP subscriber、无用 re-export 等，**24 个文件、净减少约 194 行**。

- **[#8704 remove duplicate WAV framing, voice-default block and viseme re-map](https://github.com/tinyhumansai/openhuman/pull/8704)**  
  合并重复 WAV 编码与 voice 默认逻辑。PR 特别标注一项行为变化：“Test STT”改为通过 TinyVoice 模块生成静音片段，需留意语音测试语义。

- **[#8703 drop v1 converters for never-released storage shapes](https://github.com/tinyhumansai/openhuman/pull/8703)**  
  清理从未在正式版本写入的数据结构转换器，**净减少约 298 行**。风险总体较低，但需要确保不存在旧开发版数据兼容需求。

- **[#8700 delete dead security helpers and credential re-export shims](https://github.com/tinyhumansai/openhuman/pull/8700)**  
  删除无效安全辅助函数和凭据 re-export，同时保持公开 embed API 不变。

- **[#8701 declare migrate test module at bottom](https://github.com/tinyhumansai/openhuman/pull/8701)**  
  按仓库 `AGENTS.md` 约定调整测试模块声明位置，属于规范性整理。

### 3.3 功能与体验改进

- **[#8711 feat(computer): captcha solver settings for TinyComputer browser tasks](https://github.com/tinyhumansai/openhuman/pull/8711)**  
  新增 `captcha_solver`、`captcha_model` 和 `max_captcha_attempts` 配置，验证码求解默认关闭，最多尝试次数限制为 1–10。功能扩张明显，同时引入了新的策略与安全边界。

- **[#8712 fix(modules): send the persistent browser profile to TinyComputer](https://github.com/tinyhumansai/openhuman/pull/8712)**  
  修复 `profile_mode = "persistent"` 在 TinySecurity egress policy 开启时被拒绝的问题，使浏览器会话可保留 Cookie 和登录状态。

- **[#8726 test(computer): platform-native profile paths; sync app lockfile](https://github.com/tinyhumansai/openhuman/pull/8726)**  
  修正持久化 profile 测试的跨平台路径，并同步应用锁文件，增强测试可靠性。

- **[#8732 fix(browser): cross-site navigation is a result, not a permission failure](https://github.com/tinyhumansai/openhuman/pull/8732)**  
  修复点击或跳转到其他站点时被错误报告为 `BlockedByPolicy` 的问题，使跨站跳转被正确视为一次有效导航结果。

- **[#8727 chore(deps): bump vendor/tinyagents](https://github.com/tinyhumansai/openhuman/pull/8727)**  
  更新 TinyAgents 及 TinyInference 依赖，以适配 TinyComputer 对 `BoxQuestion`、`BoxAnswer`、`ImageAsset` 等新接口的使用。

### 3.4 总体推进程度

今日从架构、测试、依赖、安全、语音、MCP、浏览器和可观测性多个维度推进项目，**不是局部修补，而是持续的模块化收敛**。  
代码清理规模较大：仅已明确统计的数个清理 PR，就涉及逾百个文件并显著减少重复实现。其长期价值较高；但在短时间合并大量跨 crate 变更后，建议下一阶段优先进行集成测试、桌面端端到端测试和真实 provider 回归。

---

## 4. 社区热点

由于所有 Issue 当前均为 **0 条评论**，今日没有传统意义上的高评论议题。以下按更新活跃度与影响范围排序：

1. **[#8729 fix(core): Langfuse OTLP sink: reject partial success by count, accept API-key credential](https://github.com/tinyhumansai/openhuman/pull/8729)**  
   - 当前仍为 Open，待合并。  
   - 直接对应用户报告的 Langfuse 数据丢失与 API-key 推送失败，是今日最接近生产可用的修复。

2. **[#8168 fix(channels): persist Telegram allowlist via resolved workspace config path](https://github.com/tinyhumansai/openhuman/pull/8168)**  
   - 自 2026-10-21 创建，今日仍有更新，属于跨日活跃 PR。  
   - 修复 Telegram `/start` 配对身份写入运行时不会读取的旧路径，导致重启后配对丢失。

3. **[#8728 Langfuse OTLP sink: positive rejectedSpans without errorMessage passes, API-key credential is skipped](https://github.com/tinyhumansai/openhuman/issues/8728)**  
   - 用户报告 Langfuse span 被静默丢弃，属于可观测性数据完整性问题。  
   - 已有对应修复 PR [#8729](https://github.com/tinyhumansai/openhuman/pull/8729)，目前等待合并。

4. **[#8717 Claude Code model picker cannot load models](https://github.com/tinyhumansai/openhuman/issues/8717)**  
   - 反映 provider 集成不完整：模型列表通过 `cli://claude-code` 发起 HTTP 请求失败，用户只能手填模型 ID。

5. **[#8718 Claude Code reconnect always fails](https://github.com/tinyhumansai/openhuman/issues/8718)**  
   - 反映正式桌面构建缺少 `claude_code_login_launch` 权限，属于发布构建与开发环境差异。

6. **[#8730 Openhuman MCP is listed on MCP ServerList](https://github.com/tinyhumansai/openhuman/issues/8730)**  
   - 外部目录收录 OpenHuman MCP，并请求在 README 增加 “Listed on MCP ServerList” 徽章，属于生态曝光与品牌合作机会。

### 背后的主要诉求

社区需求可归纳为四类：

- **数据不能静默丢失**：Langfuse 上报必须准确报告 rejected spans，并支持 API-key 身份。
- **Claude Code 集成需达到可用状态**：登录、模型发现均应在正式桌面构建中工作。
- **持久化能力应跨重启保留**：浏览器 profile 与 Telegram allowlist 不能因配置路径设计而丢失。
- **希望获得更多搜索与 MCP 生态入口**：新增搜索 provider，并利用第三方目录提升 OpenHuman MCP 曝光。

---

## 5. Bug 与稳定性

### 严重程度：高

#### 1. Langfuse OTLP 上报静默丢失数据

- Issue：**[#8728](https://github.com/tinyhumansai/openhuman/issues/8728)**
- Fix PR：**[#8729](https://github.com/tinyhumansai/openhuman/pull/8729)**，当前 Open、待合并
- 影响：
  - 当响应包含正数 `rejectedSpans` 但没有 `errorMessage` 时，服务错误地视为成功；
  - 被拒绝的 span 没有留下失败 trace，形成不可见的数据丢失；
  - library/API-key host 会跳过仅支持 session credential 的推送路径。
- 修复方向：
  - 根据拒绝数量判断部分成功；
  - 接受并使用 API-key credential；
  - 避免向错误路径提交 telemetry。
- **状态：已有明确 fix PR，但尚未合并。**

### 严重程度：中高

#### 2. Claude Code 正式桌面构建无法重新登录

- Issue：**[#8718](https://github.com/tinyhumansai/openhuman/issues/8718)**
- 表现：Reconnect / Sign in 立即报“无法打开登录终端”，`claude_code_login_launch` 未获正式构建许可。
- 影响：用户无法恢复 Claude Code provider 连接。
- Fix PR：**当前提供的数据中未见对应修复。**
- **状态：待处理。**

#### 3. security-module 构建无法更新 TinyComputer 配置

- Issue：**[#8725](https://github.com/tinyhumansai/openhuman/issues/8725)**
- 表现：加载后若配置与加载时 blob 不同，`reinitialize_module` 被拒绝；安全模块构建中的 callback-bound 配置被视为不可变。
- 影响：运行时重新配置、代理重建或配置热更新可能失败。
- Fix PR：**当前数据中未见明确对应修复。**
- **状态：待处理。**

### 严重程度：中

#### 4. Claude Code 模型选择器无法加载模型列表

- Issue：**[#8717](https://github.com/tinyhumansai/openhuman/issues/8717)**
- 表现：显示 “Could not load models from this provider”，只能手工输入模型 ID。
- 影响：降低 provider 可发现性，并增加配置错误概率。
- Fix PR：**未见明确对应修复。**

#### 5. 浏览器跨站点击被误判为策略阻断

- Issue：数据中未单独列出对应 Issue。
- Fix PR：**[#8732](https://github.com/tinyhumansai/openhuman/pull/8732)**，已关闭
- 原表现：点击或重定向到其他站点后返回 `BlockedByPolicy`，使有效导航被错误终止。
- **状态：已有修复 PR；是否已合并无法从当前字段确定。**

#### 6. 持久化浏览器 profile 在安全策略下不可用

- Issue：数据中未单独列出对应 Issue。
- Fix PR：**[#8712](https://github.com/tinyhumansai/openhuman/pull/8712)**，已关闭
- 原表现：TinySecurity egress policy 拒绝携带 profile 的浏览器启动，只能使用 `fresh` 模式，无法保留 Cookie 和登录态。
- **状态：已有修复 PR；是否已合并无法从当前字段确定。**

#### 7. Telegram 配对 allowlist 重启后丢失

- Issue：数据中未单独列出对应 Issue。
- Fix PR：**[#8168](https://github.com/tinyhumansai/openhuman/pull/8168)**，仍 Open
- 原表现：Telegram `/start` 配对身份写入硬编码旧路径 `~/.openhuman/config.toml`，而运行时实际读取的是解析后的 workspace 配置。
- **状态：已有长期活跃修复 PR，但尚未合并。**

### 回归与测试风险

- **[#8704 voice cleanup](https://github.com/tinyhumansai/openhuman/pull/8704)** 明确包含行为变化，需要重点回归 STT 静音输入生成与 viseme 映射。
- **[#8712](https://github.com/tinyhumansai/openhuman/pull/8712)** 调整持久化 profile 传递方式，应验证 egress policy、登录态隔离与 profile 路径安全。
- **[#8732](https://github.com/tinyhumansai/openhuman/pull/8732)** 放宽跨站导航结果判定，需要确认不会绕过既有站点权限策略。
- 大量 Rust Core 跨 crate 迁移已合并或关闭，建议重点检查 RPC 鉴权、MCP 工具发现、Artifacts 生成和 telemetry 上报链路。

---

## 6. 功能请求与路线图信号

### 6.1 新增 SpecStream 搜索供应商

- 请求：**[#8710 Add SpecStream as a search provider](https://github.com/tinyhumansai/openhuman/issues/8710)**
- 提议能力：
  - `search`：排序后的搜索结果；
  - `contents`：提取 URL 页面文本；
  - `answer`：支持 `depth` 的深度回答；
  - 使用用户自有 API key；
  - 作为 opt-in provider 接入。
- **路线图判断：中高概率进入后续版本。**  
  理由是请求与现有 TinySearch 三类能力直接对齐，集成边界清晰；但需要维护者评估 provider 协议稳定性、凭据管理、结果质量与错误处理规范。

### 6.2 扩展 Claude Code provider 能力

相关反馈：

- **[#8717 模型列表加载失败](https://github.com/tinyhumansai/openhuman/issues/8717)**
- **[#8718 登录终端无法打开](https://github.com/tinyhumansai/openhuman/issues/8718)**

**路线图判断：较可能进入近期修复版本。**  
两者均属于现有 provider 的基础工作流，而非大型新功能。合理顺序应为：

1. 恢复正式桌面构建的登录命令权限；
2. 修复 `cli://claude-code` 模型发现协议；
3. 增加正式构建下的登录和模型拉取端到端测试。

### 6.3 TinyComputer 验证码自动求解

- PR：**[#8711 feat(computer): captcha solver settings](https://github.com/tinyhumansai/openhuman/pull/8711)**
- 已覆盖：
  - 开关；
  - 模型配置；
  - 最大尝试次数；
  - 默认关闭。
- **路线图判断：已进入实现阶段。**  
  该功能可能成为下一版本的重要能力，但需要同步完善失败降级、隐私告知、站点合规与审计策略。

### 6.4 MCP 生态曝光

- 请求：**[#8730](https://github.com/tinyhumansai/openhuman/issues/8730)**
- 建议动作：
  - 在 README 增加 MCP ServerList 徽章；
  - 核对目录页中的安装方式、能力描述和版本信息；
  - 建立 MCP Server 列表页与实际工具能力的一致性检查。
- **路线图判断：近期可采纳。**  
  主要是文档和生态运营动作，实施成本低。

---

## 7. 用户反馈摘要

### 真实使用场景

- 用户在 **macOS 桌面版 OpenHuman 0.64.15** 中将 Claude Code 作为 AI provider，并依赖登录连接和模型选择器。
- 用户使用 **TinySearch** 接入自有密钥搜索服务，希望进一步支持搜索结果、正文提取和深度回答三类统一能力。
- 运维或集成方通过 **MCP ServerList** 收录 OpenHuman MCP，说明项目已进入更广泛的 MCP 生态目录。

### 主要痛点

1. **正式桌面构建与开发构建能力不一致**  
   登录命令在 shipped build 中不可用，用户无法恢复连接，体现出发布权限配置或打包能力清单可能未同步。

2. **Claude Code 模型发现协议不一致**  
   其他 provider 可正常加载模型，而 Claude Code 使用 `cli://claude-code` 发起 HTTP 请求，提示 provider 适配层存在协议或 URI 处理问题。

3. **可观测性故障缺少可见性**  
   Langfuse 接收部分数据时既未产生错误，也未完整记录 rejected spans，使“部分失败”表现得像“完全成功”。

4. **持久化配置受路径设计影响**  
   Telegram allowlist 和 TinyComputer profile 都出现了“代码支持持久化，但运行时路径或策略使其失效”的问题。

5. **安全策略下的运行时灵活性不足**  
   `security-module` 构建将 callback 配置视为不可变，可能导致合理的后续重初始化被拒绝。

### 满意与积极信号

- Issue 数据没有评论，因此没有足够依据判断用户对现有功能的满意程度。
- 正面信号主要来自社区行为：外部 MCP 目录主动收录、供应商主动提交集成方案，说明 OpenHuman 的 MCP 与 provider 生态正在扩大。
- 今日大量 PR 主动清理重复代码、修正架构边界、补充测试和修复持久化，表明维护侧对工程质量有较强投入。

---

## 8. 待处理积压

### 8.1 Telegram allowlist 修复 PR 已跨日约 25 天

- PR：**[#8168](https://github.com/tinyhumansai/openhuman/pull/8168)**
- 创建时间：2026-10-21
- 当前状态：Open，今日仍有更新
- 建议：明确审查结论并尽快合并或拆分，避免 Telegram 配对数据持续因重启丢失。

### 8.2 Langfuse 修复仍待合并

- Issue：**[#8728](https://github.com/tinyhumansai/openhuman/issues/8728)**
- PR：**[#8729](https://github.com/tinyhumansai/openhuman/pull/8729)**
- 建议：优先完成 CI 和 telemetry 集成测试；确认 API-key 与 session credential 两条路径均覆盖。

### 8.3 Claude Code 两项基础集成缺陷尚无可见修复

- **[#8717 模型列表加载失败](https://github.com/tinyhumansai/openhuman/issues/8717)**
- **[#8718 登录命令未获许可](https://github.com/tinyhumansai/openhuman/issues/8718)**
- 建议：为这两个问题设置近期修复目标，并补充 packaged desktop build 测试；开发环境成功不能替代发行包验证。

### 8.4 TinyComputer 配置不可变问题尚无明确修复

- Issue：**[#8725](https://github.com/tinyhumansai/openhuman/issues/8725)**
- 建议：明确设计预期：
  - 若配置应允许热更新，则提供安全重载机制；
  - 若必须不可变，则应给出可理解的错误和恢复步骤；
  - 增加 `security-module` 专属回归测试。

### 8.5 SpecStream 集成提案需要维护者响应

- Issue：**[#8710](https://github.com/tinyhumansai/openhuman/issues/8710)**
- 建议：维护者应尽快确认是否接受自有密钥 provider、接口兼容性和文档要求，避免外部贡献者长期等待。

---

## 总体健康度评估

| 维度 | 评价 | 依据 |
|---|---|---|
| 开发活跃度 | **高** | 24 小时内 24 个 PR 更新、6 个 Issue 更新 |
| 架构质量 | **持续改善** | 多个 PR 推进 Rust Core 瘦身、领域拆分和重复代码清理 |
| 稳定性 | **中等** | Langfuse、浏览器、持久化配置等问题已有部分修复，但 Claude Code 和 security-module 仍有空缺 |
| 社区参与 | **一般偏积极** | 有外部目录收录和 provider 提案，但 Issue 评论为零，需求验证不足 |
| 发布状态 | **平稳** | 今日无新版本；更适合先完成当前修复收敛和回归测试 |
| 综合健康度 | **良好偏积极** | 工程投入显著，但需避免大规模重构后出现集成回归 |

**今日结论：**OpenHuman 正处于一次较明显的工程治理与模块化收敛阶段。维护工作量和代码清理规模都很高，功能侧也覆盖搜索、浏览器、验证码、Claude Code 和可观测性等关键方向。下一阶段重点应从“快速重构与合并”转向 **合并后回归、发行包验证、关键 Issue 闭环，以及对新 provider 与验证码能力的安全边界审查**。

</details>

---
*本日报由 [Big Model Radar](https://github.com/96loveslife/big_model_radar) 自动生成。*
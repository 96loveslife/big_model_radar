# OpenClaw 生态日报 2026-11-13

> Issues: 371 | PRs: 500 | 覆盖项目: 8 个 | 生成时间: 2026-11-13 05:57 UTC

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

**统计日期：2026-11-13**  
**数据范围：过去 24 小时**

> 说明：日报基于所提供的 Issues、PRs 与版本数据整理。今日无新版本发布；PR 数据中“评论数”未提供，因此 PR 热度主要依据优先级、改动范围、状态、关联 Issue 及当日创建情况判断。

---

## 1. 今日速览

OpenClaw 过去 24 小时共更新 **371 条 Issues**，其中 **224 条新开或活跃、147 条已关闭**；同时更新 **500 条 PR**，其中 **303 条待合并、197 条已合并或关闭**，整体开发吞吐很高。

今日议题高度集中在 **Gateway 稳定性、SQLite/WAL 与会话持久化、Agent 运行时一致性、跨平台兼容性和浏览器接管能力**。多个高优先级问题仍缺乏明确修复 PR，且部分问题已影响稳定版或生产环境使用。

项目今日没有发布新版本，说明大量代码变更仍处于评审、合并或发布准备阶段。整体可评估为：**开发活跃度高，但稳定版修复落地、积压治理与安全边界审查压力较大**。

---

## 3. 项目进展

### 3.1 今日重点推进方向

虽然提供的 PR 列表以仍处于 `OPEN` 状态的候选变更为主，但这些 PR 已覆盖多个关键方向。

#### Agent 路由与会话前缀稳定性

- [PR #198100](https://github.com/openclaw/openclaw/pull/198100) 尝试将“会话系统前缀在会话生命周期内不可变”从特定 provider 路由扩展为所有路由的通用保证，并引入 Anthropic Messages 路径支持。
- [PR #198127](https://github.com/openclaw/openclaw/pull/198127) 修复 steer 指令在准备下一次请求时丢失的问题。该 PR 标记为等待作者，但属于直接影响运行时可控性的重要修复。
- [PR #198110](https://github.com/openclaw/openclaw/pull/198110) 修复 Code Mode 与 Tool Search 对 `web_fetch` 结果重复包装的问题，避免模型收到重复的 `MARKER_SANITIZED` 帧和警告文本。

这些改动共同指向同一目标：减少不同 provider、工具调用模式和续跑路径之间的行为差异。

#### Sandbox、工作区与执行稳定性

- [PR #197953](https://github.com/openclaw/openclaw/pull/197953) 在会话间预热 sandbox 依赖模板，目标是缩短首次会话准备时间；摘要称原生 fixture 中首次准备中位数降低约 41%。
- [PR #198128](https://github.com/openclaw/openclaw/pull/198128) 允许 Agent 在 atomic workspace snapshot 期间继续运行，避免工作区快照造成容器冻结。
- [PR #198121](https://github.com/openclaw/openclaw/pull/198121) 将 scratch 清理的绑定保护缩小到可能的实际所有者，避免一个异常活跃会话长期饿死其他闲置 worktree 的过期清理。
- [PR #197510](https://github.com/openclaw/openclaw/pull/197510) 旨在降低文件系统压力下 Gateway 主线程阻塞；相关事故曾出现约 **36.358 秒**的主线程停顿。

整体来看，项目正在同时处理启动延迟、快照阻塞、长会话失活和 I/O 压力等运行效率问题。

#### 浏览器控制与人机协作

- [PR #197928](https://github.com/openclaw/openclaw/pull/197928) 提议允许用户从 Browser 面板接管 Agent 浏览器，解决验证码、登录和表单操作时 Agent 与用户争夺控制权的问题。
- [PR #198082](https://github.com/openclaw/openclaw/pull/198082) 修复 Browser 面板在 Agent 每次操作后都短暂变黑并重连的问题。
- [PR #197927](https://github.com/openclaw/openclaw/pull/197927) 降低输入延迟和实时视图卡顿，涉及移除每轮输入固定的 **250ms** 导航保护等待，以及减少 screencast 帧请求间隔。

这组变更体现了 OpenClaw Web UI 从“自动化控制面板”向“可监督、可人工接管”的 Agent 操作台演进。

#### CLI、诊断与平台体验

- [PR #198071](https://github.com/openclaw/openclaw/pull/198071) 增加从 CLI 浏览 Agent workspace 的入口，调用 `agents.workspace.list/get` 等 Gateway RPC，补充了当前 CLI 缺失的只读工作区视图。
- [PR #198090](https://github.com/openclaw/openclaw/pull/198090) 修复 Skills 页面把已被 Agent allowlist 排除的技能错误计入“Needs setup”的问题。
- [PR #198126](https://github.com/openclaw/openclaw/pull/198126) 改进 Gateway 媒体附件跳过日志，使运营者能够看到附件无法嵌入的具体原因。
- [PR #198116](https://github.com/openclaw/openclaw/pull/198116) 修复只读预览、拒绝命令和 Doctor 拒绝启动时，诊断日志意外改变状态的问题。

### 3.2 已关闭或已合并的重要事项

数据中可明确看到：

- [PR #198124](https://github.com/openclaw/openclaw/pull/198124) 已关闭，修复 cron continuation CI 将“正确阻止的动作”误判为失败的问题；该 PR 明确无运行时行为变化，主要调整测试预期。
- 今日共有 **197 条 PR 已合并或关闭**。其中包含功能收口、测试修复、文档更新及部分产品决策型工作。
- 多个 Issues 同期被关闭，显示项目在清理旧讨论和推进已解决问题，但仍有大量被标记为 `stale` 的事项。

### 3.3 整体推进程度

从覆盖面看，项目今日推进了以下能力：

1. Agent 会话与 provider 路由一致性；
2. Sandbox 生命周期和启动性能；
3. 浏览器人机协作与实时可观测性；
4. 磁盘压力下的 Gateway 响应能力；
5. CLI、Skills UI 与诊断日志准确性；
6. 安全边界下个人身份和定时任务授权。

但由于今日 **无新 Release**，这些改进对终端用户的实际可用性仍取决于后续合并、测试与发布节奏。

---

## 4. 社区热点

### 4.1 讨论最活跃的 Issues

#### 1. Gateway WAL 自动 checkpoint 永远无法完成

- **Issue:** [#164294](https://github.com/openclaw/openclaw/issues/164294)
- **评论数：40**
- **优先级：P2**
- **状态：开放；标记为无新增 fix PR、需要维护者审查**

问题指向 Gateway 自身 SQLite WAL 自动 checkpoint 被进程内 reader 长期阻塞，checkpoint 从启动后一直无法完成。其影响不仅是 WAL 文件持续增长，还可能放大数据库写入、发布和启动稳定性问题。

这是今日评论最多的问题，说明用户对“Gateway 长时间运行后状态库持续膨胀”的感受非常集中。该问题应优先检查长生命周期 reader 生命周期，而不是仅调整 checkpoint 参数。

#### 2. macOS 上无法停止 Gateway

- **Issue:** [#191944](https://github.com/openclaw/openclaw/issues/191944)
- **评论数：27**
- **优先级：P2**
- **状态：开放；无明确 fix PR**

`openclaw gateway stop` 与 `stop --force` 均可能因进程祖先关系无法完整检查而失败。对普通用户而言，这直接破坏了基本服务控制能力；当前只能绕道使用 Gateway update action 或从独立终端重试。

#### 3. 同步持久化阻塞 Gateway 事件循环

- **Issue:** [#119720](https://github.com/openclaw/openclaw/issues/119720)
- **评论数：26**
- **优先级：P1**
- **状态：开放；存在部分历史修复，仍需维护者审查**

Agent 持久化和 transcript maintenance 在规模化场景下同步阻塞 Gateway event loop。已有部分修复降低历史重载和原子写入问题，但核心架构风险仍然存在，且直接影响会话状态、崩溃恢复和整体并发能力。

#### 4. Cron 与 memory flush 场景缺失 MCP 工具

- **Issue:** [#120385](https://github.com/openclaw/openclaw/issues/120385)
- **评论数：26**
- **优先级：P2**
- **状态：开放；标记 stale、需维护者审查和补充信息**

Code Mode 工具目录在 scheduled/cron 和 memory-flush turn 中构建不完整，表现为 `Unknown tool id`，最终用户只看到泛化的 `Exec failed`。该问题反映了 Code Mode、动态工具注册和后台任务之间的契约不一致。

#### 5. Telegram 不透明 callback payload 被静默丢弃

- **Issue:** [#126950](https://github.com/openclaw/openclaw/issues/126950)
- **评论数：16**
- **优先级：P1**
- **状态：开放；存在关联开放 PR**

普通调用方通过 `message` 工具生成的 Telegram inline button 使用 `tgcb1:` 格式，但入口逻辑只接受插件注册过的 opaque callback，因此点击后事件被直接丢弃。该问题会造成明确的交互消息丢失，且用户很难从日志中定位原因。

#### 6. 配置热重载会中止正在执行的 Agent turn

- **Issue:** [#144291](https://github.com/openclaw/openclaw/issues/144291)
- **评论数：15**
- **优先级：P1**
- **状态：开放；需维护者与产品决策**

任意热重载配置变更可能使运行中的模型 runtime/plugin generation 被替代，从而抛出 `prepared model runtime plugin generation was superseded` 并中止当前 turn。对于长期运行和多 Agent 部署而言，这是明显的运维可靠性问题。

### 4.2 今日值得关注的开放 PR

#### 浏览器人工接管

- **PR:** [#197928](https://github.com/openclaw/openclaw/pull/197928)
- **类型：功能增强**
- **状态：等待作者；带浏览器扩展验证材料**

这是今日最明确的产品方向信号之一：允许用户临时接管 Agent 浏览器，完成登录、验证码和表单操作。该能力可显著改善 Agent 在需要人工授权或身份验证场景下的可用性。

#### 跨设备个人身份识别

- **PR:** [#198093](https://github.com/openclaw/openclaw/pull/198093)
- **类型：功能增强**
- **状态：需要证明与安全审查**
- **涉及：Web、iOS、macOS、Android、CLI、Gateway**

该 PR 试图让已登记的操作端共享 Gateway 本地个人身份配置，对应 [#162164](https://github.com/openclaw/openclaw/issues/162164)。方向具有明显平台价值，但涉及身份边界和兼容风险，预计不会立即进入下一版本。

#### Telegram 调用者范围的个人提醒

- **PR:** [#198119](https://github.com/openclaw/openclaw/pull/198119)
- **类型：功能增强**
- **状态：等待作者；需要安全审查**

该 PR 允许非 owner 的已链接 Telegram 用户创建一次性个人提醒，但授权仅限当前 turn 和原始投递路径。这是典型的“便利性与权限隔离”权衡，需重点验证权限继承、身份冒用和子 Agent 继承边界。

#### Agent workspace CLI 浏览

- **PR:** [#198071](https://github.com/openclaw/openclaw/pull/198071)
- **类型：CLI 功能**
- **状态：等待维护者**
- **优先级：P3**

实现范围清晰、风险相对可控，是较有可能较早进入后续版本的项目。

---

## 5. Bug 与稳定性

### 5.1 P0 / 发布阻断级

#### 1. macOS 应用连接本地 Gateway 时遗漏 SecretRef token

- **Issue:** [#141413](https://github.com/openclaw/openclaw/issues/141413)
- **优先级：P0**
- **影响：认证边界、UX 发布阻断**
- **Fix PR：未显示明确关联 PR**

受保护的 `gateway.auth.token` SecretRef 在 macOS 客户端连接独立托管的本地 Gateway 时未被正确携带，导致认证失败或客户端行为不一致。该问题涉及认证链路，应视为高优先级发布风险。

#### 2. Codex 暂停聊天无法恢复

- **Issue:** [#190563](https://github.com/openclaw/openclaw/issues/190563)
- **优先级：P0**
- **影响：会话恢复、UX 发布阻断**
- **Fix PR：未显示明确关联 PR**

Provider review 与 Codex native thread 不匹配，导致暂停聊天恢复失败。这是跨 provider 状态绑定的一致性问题，可能造成用户无法继续已有任务。

### 5.2 P1 / 严重稳定性与数据可靠性问题

#### 1. Gateway 事件循环被同步持久化阻塞

- **Issue:** [#119720](https://github.com/openclaw/openclaw/issues/119720)
- **Fix 状态：**已有部分历史修复，但未形成完整闭环
- **建议：**将所有 transcript、run event 和 session commit 路径做异步化与背压审计。

#### 2. Telegram callback 静默丢失

- **Issue:** [#126950](https://github.com/openclaw/openclaw/issues/126950)
- **Fix 状态：**有开放关联 PR
- **建议：**合并前增加非插件调用方、插件调用方和未知格式三组回归测试。

#### 3. 配置热重载中止当前 Agent turn

- **Issue:** [#144291](https://github.com/openclaw/openclaw/issues/144291)
- **Fix 状态：**未显示明确 fix PR
- **建议：**区分配置 generation 与运行中 execution generation，允许 turn 在安全边界完成或明确排队。

#### 4. Codex 最终答案恢复期间触发 `provenance_rejected`

- **Issue:** [#155396](https://github.com/openclaw/openclaw/issues/155396)
- **Fix 状态：**未显示明确 fix PR
- **影响：**已完成工具调用的实质答案丢失，仅展示通用失败。

#### 5. macOS Gateway stop 失败

- **Issue:** [#191944](https://github.com/openclaw/openclaw/issues/191944)
- **Fix 状态：**未显示明确 fix PR

#### 6. 大型 Agent DB 导致启动极慢或不可用

- **Issue:** [#181459](https://github.com/openclaw/openclaw/issues/181459)
- **Fix 状态：**未显示明确 fix PR
- **表现：**3.5GB 数据库启动约 4–6 分钟，并可能进入 `commit checkpoint expired` 的 UNAVAILABLE 状态。

该问题说明会话、embedding 与索引数据共同增长后，SQLite 已接近单机数据库架构的容量边界。

#### 7. Linux glibc < 2.31 上所有子进程执行失败

- **Issue:** [#191841](https://github.com/openclaw/openclaw/issues/191841)
- **Fix 状态：**未显示明确 fix PR
- **影响：**RHEL 8 等环境中的 exec 和 child process 全部不可用，属于平台兼容性回归。

#### 8. 稳定版仍丢失 exec completion wake

- **Issue:** [#185085](https://github.com/openclaw/openclaw/issues/185085)
- **Fix 状态：**主线已有相关修复，但未进入所报告稳定版本
- **影响：**后台 exec 完成后无法唤醒会话，可能导致任务永久等待。

#### 9. Windows 插件 source capture 无限膨胀

- **Issue:** [#162585](https://github.com/openclaw/openclaw/issues/162585)
- **Fix 状态：**未显示明确 fix PR
- **表现：**目录从约 290MB 增至 612MB 以上，24 分钟仍不收敛，Gateway 无法进入健康状态。

### 5.3 P2 / 重要但非全面阻断的问题

- [Issue #120385](https://github.com/openclaw/openclaw/issues/120385)：Cron 与 memory-flush 场景的 MCP 工具目录不完整。
- [Issue #164355](https://github.com/openclaw/openclaw/issues/164355)：插件缺少在工具结果后、模型最终回答前插入内容的扩展点。
- [Issue #141172](https://github.com/openclaw/openclaw/issues/141172)：Agent 在首次 session commit 前崩溃会遗留 `agent.run.started`，并导致 trajectory flush 外键失败。
- [Issue #172031](https://github.com/openclaw/openclaw/issues/172031)：延迟生成 `modelPromptProjection` 会使自定义 context engine 的 admission 结果失效。
- [Issue #167854](https://github.com/openclaw/openclaw/issues/167854)：Home 的 20 条系统事件队列满后，后续 session notice 被静默丢弃。
- [Issue #144876](https://github.com/openclaw/openclaw/issues/144876)：Dashboard 工具会话在长度最终化失败后可无回复结束。
- [Issue #182467](https://github.com/openclaw/openclaw/issues/182467)：已有 project-parent 会话中的 `sessions_spawn` 模型校验与 `models.list` 结果矛盾。
- [Issue #197374](https://github.com/openclaw/openclaw/issues/197374)：长会话 compaction 受默认 120 秒 idle timeout 限制，且质量保护未说明原因。
- [Issue #197083](https://github.com/openclaw/openclaw/issues/197083)：Post-install Doctor 的 WAL publication 验证失败，可令 11.3 更新处于部分完成状态。
- [Issue #192667](https://github.com/openclaw/openclaw/issues/192667)：macOS 应用打开会话后 Settings 变慢，深色主题输入框不可见。
- [Issue #165041](https://github.com/openclaw/openclaw/issues/165041)：会话恢复时的内部 context injection 被错误渲染成用户可见消息。
- [Issue #138528](https://github.com/openclaw/openclaw/issues/138528)：stuck-session recovery 丢失 `blocked_tool_call` 分类，导致 cron 审批中断时没有可见原因。

### 5.4 稳定性判断

今日 Bug 呈现明显的 **数据库与状态一致性聚类**：

- WAL checkpoint；
- Agent DB 膨胀；
- run event 外键泄漏；
- compaction 降级；
- transcript 持久化阻塞；
- Codex thread/review 不匹配；
- hot reload 打断当前 turn。

这表明当前主要风险并非单一函数缺陷，而是多个异步任务共享 SQLite、Gateway 主线程和 generation 状态后形成的系统性耦合。

---

## 6. 功能请求与路线图信号

### 6.1 高概率进入近期版本

#### 1. CLI 浏览 Agent workspace

- **PR:** [#198071](https://github.com/openclaw/openclaw/pull/198071)
- **相关需求：**补充 `agents.workspace.*` Gateway RPC 的 CLI 只读界面。

改动边界清晰，主要涉及 CLI、commands 和文档，较适合作为低风险功能随近期版本发布。

#### 2. Browser 面板人工接管

- **PR:** [#197928](https://github.com/openclaw/openclaw/pull/197928)
- **相关 Issues:** [#197902](https://github.com/openclaw/openclaw/issues/197902)

这是高价值用户需求，可直接解决验证码、登录和人工表单操作。由于已有截图和证明材料，且与 Browser 面板近期稳定性修复形成配套，进入下一版本的可能性较高。

#### 3. Browser 面板稳定性和低延迟修复

- **PRs:** [#198082](https://github.com/openclaw/openclaw/pull/198082)、[#197927](https://github.com/openclaw/openclaw/pull/197927)

属于明确缺陷修复，优先级高于新功能。若现有测试覆盖稳定，可能先于人工接管功能发布。

#### 4. 每 Agent 的 compaction/context pruning 覆盖

- **Issue:** [#52732](https://github.com/openclaw/openclaw/issues/52732)
- **状态：**已关闭

该请求已被关闭，可能意味着需求已被吸收、合并或被产品决策替代。其方向与当前多 Agent、长时间会话需求高度相关。

#### 5. 单向 A2A handoff

- **Issue:** [#44309](https://github.com/openclaw/openclaw/issues/44309)
- **状态：**已关闭

需求是取消 `sessions_send` 的 reply-back ping-pong，降低多 Agent 任务中的递归噪声。方向合理，但需要统一定义任务完成、失败和回执语义，短期直接发布的信号较弱。

### 6.2 需要产品或安全决策

#### 1. 每 Agent dreaming 配置

- **Issue:** [#67413](https://github.com/openclaw/openclaw/issues/67413)
- **状态：**已关闭
- **诉求：**允许单独关闭某个 Agent 的 dreaming，避免所有 workspace 同时运行导致内存峰值和 OOM。

该功能价值明确，但需要定义默认并发数、资源预算和调度公平性。

#### 2. Skill Workshop 超大 session 的上下文预算

- **Issue:** [#150238](https://github.com/openclaw/openclaw/issues/150238)
- **状态：**开放；有开放关联 PR

需要为 Experience Review 增加独立 context budget 或 skip policy，避免复用前台 session 时把超长上下文继续带入。

#### 3. Telegram 个人提醒

- **PR:** [#198119](https://github.com/openclaw/openclaw/pull/198119)
- **状态：**需安全审查

调用者范围授权是合理方向，但必须明确提醒所有权、投递路径继承、取消权限及管理用户可见性。

#### 4. 跨设备个人身份识别

- **PR:** [#198093](https://github.com/openclaw/openclaw/pull/198093)
- **状态：**需证明与安全审查
- **相关 Issue:** [#162164](https://github.com/openclaw/openclaw/issues/162164)

涉及所有主要客户端和 Gateway 安全边界，产品价值高，但兼容性与安全成本较大，更可能进入专门版本而非小版本更新。

#### 5. A2A 单向交付

- **Issue:** [#44309](https://github.com/openclaw/openclaw/issues/44309)

适合作为多 Agent 编排下一阶段能力，但需要先形成清晰协议。

### 6.3 较长期或低优先级需求

- [Issue #131457](https://github.com/openclaw/openclaw/issues/131457)：为 Feishu 增加统一的 progress streaming 模式。
- [Issue #137110](https://github.com/openclaw/openclaw/issues/137110)：Telegram `message` 工具支持 `sendDice`。
- [Issue #154524](https://github.com/openclaw/openclaw/issues/154524)：将聊天消息暴露为 heading，改善屏幕阅读器导航。
- [Issue #164355](https://github.com/openclaw/openclaw/issues/164355)：提供工具结果后的插件内容注入扩展点。
- [Issue #150238](https://github.com/openclaw/openclaw/issues/150238)：Skill Workshop 独立上下文预算。

---

## 7. 用户反馈摘要

### 7.1 高频真实痛点

#### Gateway 服务控制不可靠

在 macOS 上，[#191944](https://github.com/openclaw/openclaw/issues/191944) 表明 `stop` 与 `stop --force` 都可能失败。用户无法按常规方式停止服务，只能借助更新流程或重启系统，属于基础运维能力缺口。

#### 长时间运行后数据库持续膨胀

[#164294](https://github.com/openclaw/openclaw/issues/164294) 中，WAL checkpoint 自启动后从未完成；[#181459](https://github.com/openclaw/openclaw/issues/181459) 则显示 Agent DB 达到 3.5GB 后启动时间恶化至数分钟。用户对“单实例长期运行”的可靠性预期明显高于当前实现。

#### 会话持久化影响整个 Gateway

[#119720](https://github.com/openclaw/openclaw/issues/119720) 指出同步 Agent persistence 和 transcript maintenance 会阻塞事件循环。其影响从单个会话扩大到整个 Gateway，意味着后台维护任务不能继续依赖同步 SQLite 操作。

#### 配置修改会中断当前工作

[#144291](https://github.com/openclaw/openclaw/issues/144291) 显示，修改 heartbeat prompt、model 等热加载字段会使正在执行的 turn 失败。对运维人员而言，配置变更应是可控切换，而不是直接中断业务执行。

#### 工具错误不可见、回调消息丢失

- [#120385](https://github.com/openclaw/openclaw/issues/120385) 只显示泛化的 `Exec failed`，没有指出缺失工具 ID。
- [#126950](https://github.com/openclaw/openclaw/issues/126950) 中 Telegram callback 被静默丢弃。
- [#144876](https://github.com/openclaw/openclaw/issues/144876) 中工具调用获得 HTTP 200，但最终没有可见回复。

这些反馈共同表明，当前错误可观测性不足：用户能看到“失败”，却往往无法判断是工具目录、provider、状态发布还是消息投递环节出错。

#### 人工操作与 Agent 控制冲突

[#197928](https://github.com/openclaw/openclaw/pull/197928) 所解决的问题很具体：用户处理验证码或登录时，Agent 仍在同一浏览器点击、输入或导航，只能停止整个运行才能取得控制权。用户期望的是**临时接管后交还控制权**，而不是粗暴终止任务。

### 7.2 正向信号

- [PR #197953](https://github.com/openclaw/openclaw/pull/197953) 的预热方案显示，首次 sandbox session 准备中位数可减少约 41%，说明项目已开始系统优化新会话启动体验。
- [PR #198121](https://github.com/openclaw/openclaw/pull/198121) 和 [PR #198128](https://github.com/openclaw/openclaw/pull/198128) 表明维护者关注 worktree 清理公平性和 Agent 在快照期间不中断等细节。
- [PR #198090](https://github.com/openclaw/openclaw/pull/198090) 与 [PR #198126](https://github.com/openclaw/openclaw/pull/198126) 主动改善 UI 状态准确性和日志可操作性，有助于减少“配置正确但界面显示错误”的困惑。
- [PR #197928](https://github.com/openclaw/openclaw/pull/197928) 说明社区正在推动 OpenClaw 从完全自动化转向可监督、可协作的人机 Agent 工作流。

### 7.3 用户不满与信任风险

1. **静默失败**：callback、session notice、工具结果或 wake-up 被丢弃，但用户没有即时告警。
2. **错误解释不足**：只展示通用错误，缺少具体 failure stage、tool ID 或 attachment 原因。
3. **版本与修复错位**：主线已有修复但稳定版未包含，例如 [#185085](https://github.com/openclaw/openclaw/issues/185085)。
4. **平台行为不一致**：macOS、Windows、Linux 以及不同渠道在 exec、stop、plugin capture 上呈现不同结果。
5. **配置变更副作用过大**：热重载直接中止正在运行的 turn，而非平滑排队或完成。

---

## 8. 待处理积压

### 8.1 长期开放、仍需维护者决策的重要 Issues

#### Gateway WAL checkpoint 永久阻塞

- [#164294](https://github.com/openclaw/openclaw/issues/164294)
- 评论 **40**
- 自 2026-10-03 持续至今
- 当前无明确 fix PR

这是今日最值得尽快处理的积压项。建议先定位具体 reader，再评估 checkpoint 调度与长事务治理，避免仅通过提高 timeout 掩盖问题。

#### 同步持久化阻塞事件循环

- [#119720](https://github.com/openclaw/openclaw/issues/119720)
- P1
- 自 2026-08-05 持续至今
- 虽有部分修复，但主问题仍未关闭

需要明确架构级验收标准，例如在固定 transcript 规模下不阻塞 Gateway 主线程超过指定阈值。

#### Cron/memory-flush 工具目录缺失

- [#120385](https://github.com/openclaw/openclaw/issues/120385)
- P2，且被标记 stale
- 仍需维护者审查及补充信息

该问题直接影响后台自动化成功率，不应仅因讨论长期未更新而关闭。

#### 插件无法在工具结果后注入上下文

- [#164355](https://github.com/openclaw/openclaw/issues/164355)
- P2
- 尚无明确实现 PR

这是扩展生态的关键 API 缺口。若不解决，类似 callback、post-processing 和模型二次校验场景会继续以插件绕行方式实现。

#### Tool-backed Dashboard 会话静默结束

- [#144876](https://github.com/openclaw/openclaw/issues/144876)
- 涉及消息丢失
- 尚无明确 fix PR

建议为 HTTP 200 但无最终回复的情况建立专门日志与重试状态。

### 8.2 高优先级但缺乏明确 fix PR 的积压

- [#144291](https://github.com/openclaw/openclaw/issues/144291)：配置热重载中止 Agent turn，P1。
- [#190563](https://github.com/openclaw/openclaw/issues/190563)：Codex paused chat 无法恢复，P0。
- [#141413](https://github.com/openclaw/openclaw/issues/141413)：macOS SecretRef token 遗漏，P0。
- [#191841](https://github.com/openclaw/openclaw/issues/191841)：旧版 glibc 上 exec 全部失败，P1。
- [#185085](https://github.com/openclaw/openclaw/issues/185085)：稳定版 exec wake 丢失，P1。
- [#181459](https://github.com/openclaw/openclaw/issues/181459)：大型 Agent DB 启动不可用，P1。
- [#126950](https://github.com/openclaw/openclaw/issues/126950)：Telegram callback 丢失，P1；存在开放关联 PR。

这些事项已获得较多真实环境反馈，继续积压会直接影响稳定版用户信任。

### 8.3 待处理开放 PR

今日有 **303 条 PR 待合并**。在展示的高关注 PR 中：

- 等待作者：  
  [PR #197953](https://github.com/openclaw/openclaw/pull/197953)、[#198122](https://github.com/openclaw/openclaw/pull/198122)、[#198125](https://github.com/openclaw/openclaw/pull/198125)、[#198127](https://github.com/openclaw/openclaw/pull/198127)
- 需要证明或截图：  
  [PR #198110](https://github.com/openclaw/openclaw/pull/198110)、[#198093](https://github.com/openclaw/openclaw/pull/198093)、[#198075](https://github.com/openclaw/openclaw/pull/198075)、[#198094](https://github.com/openclaw/openclaw/pull/198094)
- 需要安全审查：  
  [PR #198093](https://github.com/openclaw/openclaw/pull/198093)、[#198119](https://github.com/openclaw/openclaw/pull/198119)、[#198110](https://github.com/openclaw/openclaw/pull/198110)、[#197960](https://github.com/openclaw/openclaw/pull/197960)
- 等待维护者或已标记 ready：  
  [PR #198121](https://github.com/openclaw/openclaw/pull/198121)、[#198082](https://github.com/openclaw/openclaw/pull/198082)、[#198120](https://github.com/openclaw/openclaw/pull/198120)、[#198123](https://github.com/openclaw/openclaw/pull/198123)、[#198090](https://github.com/openclaw/openclaw/pull/198090)、[#198092](https://github.com/openclaw/openclaw/pull/198092)、[#198091](https://github.com/openclaw/openclaw/pull/198091)

维护者应避免让高价值修复长期停留在“等待证明”或“等待作者”阶段，尤其是 Browser 面板、Gateway 阻塞和 Code Mode 结果完整性相关变更。

---

## 今日结论

OpenClaw 今天呈现出典型的 **高吞吐开发、但生产稳定性债务集中暴露** 状态。浏览器协作、Agent workspace 管理、会话前缀稳定性和 Sandbox 性能等方向进展明显；与此同时，SQLite/WAL、会话持久化、provider 状态绑定、热重载和跨平台回归问题仍可能影响真实部署。

**项目健康度判断：开发活跃度高，功能演进明确；稳定性中等偏承压，发布准备度不足。** 下一阶段最需要关注的是：

1. 为 P0/P1 稳定性问题建立明确 fix PR 和发布验收；
2. 将 Gateway 主线程与 SQLite 持久化路径解耦；
3. 缩短“主线已修、稳定版未含”的发布滞后；
4. 对身份、提醒、callback 等安全边界变更加快审查；
5. 在下一次 Release 前集中验证 macOS、Windows、旧版 Linux 和大型数据库场景。

---

## 横向生态对比

# 个人 AI 助手 / 自主智能体开源生态横向分析

**统计日期：2026-11-13｜观察窗口：过去 24 小时**

> 注：以下“Issues/PR 数”按日报提供的更新量统计；“Closed”不一定代表已合并或已发布。由于各项目数据口径不完全一致，活跃度更适合用于判断项目所处阶段，不宜直接等同于社区绝对规模。

## 1. 生态全景

当前生态呈现“**高功能密度、高修复吞吐、稳定性债务同步暴露**”的态势：9 个项目合计更新约 **159 个 Issues、222 个 PR**，但仅 OpenHuman 有较高比例的 PR 收敛速度，所有项目过去 24 小时均无新版本发布。竞争重心已从单纯的聊天能力，转向 **持久化可靠性、长任务恢复、渠道连接、插件治理、浏览器人机协作、支付与身份边界**。OpenClaw、Hermes Agent、QwenPaw 属于高强度迭代型平台，LobsterAI 更偏完整桌面产品，NanoBot、PicoClaw 强调轻量与可嵌入，IronClaw 则处于低频维护状态。总体而言，生态功能扩张迅速，但**发布滞后、PR 积压、跨平台一致性和安全授权**已成为共同瓶颈。

---

## 2. 各项目活跃度对比

| 项目 | Issues 更新 | PR 更新 | 今日 Release | 活跃特征 | 健康度评估 |
|---|---:|---:|---|---|---|
| **OpenClaw** | 371 | 500 | 无 | 24 小时处理 303 条待合并 PR，议题密集 | **高活跃、稳定性承压** |
| **Hermes Agent** | 50 | 50 | 无 | 43 条 PR 已合并或关闭，7 条待合并 | **高活跃，安全与生命周期风险较高** |
| **QwenPaw** | 19 | 42 | 无 | 31 条 PR 待合并，发布后回归面较大 | **中高活跃、收敛压力明显** |
| **OpenHuman** | 2 | 26 | 无 | 24 条 PR 合并或关闭，收敛率约 92% | **良好偏高、工程治理顺畅** |
| **LobsterAI** | 0 | 17 | 无 | 16 条 PR 合并或关闭，产品与发布链路并进 | **良好、迭代密集** |
| **NanoBot** | 3 | 18 | 无 | 8 条待合并，10 条合并或关闭 | **良好、偏工程质量与安全重构** |
| **PicoClaw** | 4 | 11 | 无 | 4 条待处理，多项修复被 stale 关闭 | **中等偏低、治理承压** |
| **IronClaw** | 1 | 0 | 无 | 仅提出 Actions 锁文件提案 | **稳定但低活跃** |
| **NanoBot / LobsterAI** | 见对应项目 | — | 无 | 产品体验与工程链路持续推进 | **良好** |
| **合计** | **约 500+** | **约 666+** | **0** | — | — |

> 注：上游摘要中的总量按 Issue/PR 条目统计；不同项目还存在同一条目重复列入不同章节的情况，因此合计仅用于判断量级，不宜作为精确社区规模指标。

### 活跃度分层

- **超高吞吐层：OpenClaw**  
  500 条 PR 更新、371 条 Issue 更新，规模和吞吐量显著领先，但也拥有最大的待审队列与稳定性债务。
- **高吞吐层：Hermes Agent、QwenPaw**  
  两项目均处在密集修复阶段；Hermes 收敛速度较快，QwenPaw 则有 31 条 PR 积压。
- **高质量收敛层：OpenHuman、LobsterAI**  
  OpenHuman PR 收敛率突出；LobsterAI 同时推进产品、模型、渠道、签名与打包。
- **稳定推进层：NanoBot**  
  规模较小但工程方向清晰，重点在 Schema 标准、安全边界和 WebUI 状态一致性。
- **维护承压层：PicoClaw、IronClaw**  
  前者贡献仍活跃，但 stale 关闭与 Fork 讨论反映治理问题；后者活动极低。

---

## 3. OpenClaw 在生态中的定位

### 3.1 核心优势

1. **生态规模与开发吞吐最强**  
   单日 371 条 Issue、500 条 PR 更新，说明其拥有更大的问题发现面、贡献者和测试反馈面。相比 NanoBot、PicoClaw、IronClaw，OpenClaw 显然处于更成熟但也更复杂的平台阶段。

2. **功能覆盖接近“个人智能体操作系统”**  
   已覆盖 Agent 路由、Workspace、Sandbox、浏览器、Cron、Skills、CLI、Gateway、跨设备身份、渠道权限等完整链路。其产品边界明显宽于轻量框架型项目。

3. **浏览器人机协作方向领先**  
   Browser 面板人工接管、实时视图低延迟、黑屏重连修复等改动，回应了自主 Agent 在验证码、登录和表单场景中的现实限制。相比主要聚焦 CLI/渠道的同类项目，这一能力更具产品差异化。

4. **安全与授权机制已进入产品设计层**  
   跨设备个人身份、Telegram 调用者范围提醒、插件工具结果扩展点等，说明项目不只关注“Agent 能做什么”，也在处理“谁可以授权它做什么”。

### 3.2 技术路线差异

- **OpenClaw**：Gateway 中心化、插件与渠道生态、桌面/Web/CLI 多端、Browser 与 Workspace 深度集成，强调持续运行的个人 Agent 平台。
- **Hermes Agent**：更强调多后端执行、CLI/插件管理、Docker/SSH/Home/Desktop 跨环境一致性和长任务自治。
- **QwenPaw**：以插件化渠道为明显主线，重点解决渠道安装、升级、隔离、状态机和跨工作区并发。
- **LobsterAI**：不是单纯框架，而是完整桌面 AI 工作产品，包含 PPT、Cowork、多智能体、模型配置、遥测和正式分发。
- **NanoBot / PicoClaw**：更适合作为轻量个人助手或嵌入式基座，架构和运维负担相对较低。
- **OpenHuman**：强调 Rust Core、事件语义、支付协议、本地 Runtime 与可验证的工具权限。
- **IronClaw**：今日没有显示明显产品迭代，暂不具备与 OpenClaw 直接竞争的功能证据。

### 3.3 社区规模对比

从“单日问题与 PR 更新量”看，OpenClaw 明显领先：

- OpenClaw：约 **871 条** Issue/PR 更新；
- Hermes Agent：约 **100 条**；
- QwenPaw：约 **61 条**；
- LobsterAI：17 条；
- OpenHuman：28 条；
- NanoBot：21 条；
- PicoClaw：15 条；
- IronClaw：1 条。

这表明 OpenClaw 拥有最广泛的活动面，但也意味着更高的架构复杂度和维护压力。其核心挑战不是缺少需求，而是**把高吞吐转化为可发布、可验证、可长期维护的稳定版本**。

---

## 4. 共同关注的技术方向

| 技术方向 | 涉及项目 | 具体诉求与信号 |
|---|---|---|
| **持久化与数据库稳定性** | OpenClaw、OpenHuman、QwenPaw | OpenClaw 面临 WAL checkpoint 永久阻塞、同步持久化堵塞事件循环、大 DB 启动数分钟；OpenHuman 修复 storage rebind 原子性；QwenPaw 聚焦 cron 状态、token 用量与 turn 记录完整性。 |
| **长任务可靠性与可恢复性** | OpenClaw、Hermes Agent、QwenPaw、LobsterAI | OpenClaw 推进 Steer 指令、热重载不中断 turn；Hermes 提出子代理自动恢复；QwenPaw 修复 DoomLoopGate 误杀/漏杀；LobsterAI 完善停止后的状态追溯。 |
| **渠道连接与多工作区隔离** | QwenPaw、PicoClaw、NanoBot、OpenClaw | QwenPaw 集中暴露 Matrix/飞书/微信启动竞态；PicoClaw 出现 Discord 握手死锁；NanoBot 寻求 Discord 历史回填；OpenClaw 修复 Telegram callback 丢失。 |
| **工具 Schema 与调用协议标准化** | NanoBot、QwenPaw、Hermes Agent、OpenHuman | NanoBot 用标准 `jsonschema` 支持 `$ref/anyOf/oneOf`；QwenPaw 保留布尔类型 `additionalProperties`；Hermes 修复自由格式对象被注入空 properties；OpenHuman 统一参数校验。 |
| **配置热更新与无需重启生效** | OpenClaw、QwenPaw、LobsterAI、PicoClaw、OpenHuman | OpenClaw 的热重载会中止运行中 turn；QwenPaw 推进插件更新和版本守卫；LobsterAI 修复专家删除同步；PicoClaw 出现“已热重载但 UI 提示需重启”；OpenHuman 推进 Registry 热刷新。 |
| **浏览器与远程执行一致性** | OpenClaw、Hermes Agent、QwenPaw、LobsterAI | OpenClaw 推进 Browser 人工接管；Hermes 暴露 Docker Chromium 探测与 SSH 文件落盘错误；QwenPaw 修复附件路径和超大图片；LobsterAI 修复桌面签名和 OpenClaw 网关启动。 |
| **安全授权和最小权限** | OpenClaw、QwenPaw、Hermes Agent、OpenHuman | QwenPaw 出现反向代理认证绕过；Hermes 后台线程工具白名单失效；OpenHuman 修复工具权限展示、遗留审批拒绝；OpenClaw 推进跨设备身份与调用者隔离。 |
| **插件生态与供应链治理** | Hermes Agent、QwenPaw、OpenClaw、IronClaw | Hermes 推默认插件安装；QwenPaw 建设官方市场、版本守卫和内置插件迁移；OpenClaw 扩展插件注入点；IronClaw 提议 Actions 依赖锁文件。 |
| **可观测性与准确状态** | QwenPaw、OpenClaw、NanoBot、PicoClaw、OpenHuman | 多个项目都在修复“实际成功但 UI/日志显示失败”或相反问题，包括 cron 误记成功、空流伪推理、热重载状态错误、Voice provider 状态错误等。 |
| **发布与供应链可靠性** | 所有项目 | 今日均无 Release；OpenClaw、LobsterAI、QwenPaw 出现主线已修但稳定版未含；OpenHuman 遇到 Rust 工具链漂移；PicoClaw 的依赖升级 PR 全部 stale。 |

---

## 5. 差异化定位分析

| 项目 | 功能侧重 | 目标用户 | 关键技术架构取向 |
|---|---|---|---|
| **OpenClaw** | 持续运行的个人 Agent、Browser、Workspace、Skills、渠道与自动化 | 高级个人用户、开发者、需要人机协作和多渠道自动化的团队 | Gateway 中心化，事件循环 + 插件/Provider 路由 + 多种客户端共用状态 |
| **Hermes Agent** | CLI/Desktop、多后端终端、插件、Kanban、子代理与自治任务 | 开发者、远程运维者、需要自动化 Agent 编排和无人值守任务的用户 | 本地/SSH/Docker 多执行后端，强调安装诊断、插件管理和长任务生命周期 |
| **QwenPaw** | 微信/飞书/Matrix/小艺等渠道、Cron、插件市场、多工作区 | 需要把个人助手部署到多种聊天渠道和后台自动化的用户 | 渠道插件化、workspace 隔离、动态工具注册、后台任务与统一状态机 |
| **LobsterAI** | PPT、Cowork、专家智能体、长上下文、桌面应用与运营遥测 | 重视成品交付和桌面体验的普通办公用户、创作者 | 完整桌面应用 + 后端服务 + OpenClaw 网关 + 多 Provider/模型配置 |
| **NanoBot** | 轻量 Agent、工具调用、WebUI、Discord/Telegram、成本可视化 | 希望自行部署、快速迭代并控制代码复杂度的开发者 | Python 轻量运行时，强调工具 Schema、安全执行边界和 WebUI 状态管理 |
| **PicoClaw** | 轻量个人助手、Skills、Memory、多渠道、边缘设备 | 开发者、硬件玩家、追求低资源占用的个人用户 | Go 主体、轻量进程、文件/Skills 驱动、跨平台与旧设备支持 |
| **OpenHuman** | 事件驱动 Agent、语音、本地模型、工具权限、x402 支付 | 重视本地运行、事件可靠性、支付和可组合架构的开发者 | Rust Core，强调原子状态、事件去重、Registry、工具权限与嵌入式隔离 |
| **IronClaw** | 今日主要体现 CI 供应链加固 | 关注安全维护和部署稳定性的现有用户 | 当前缺少足够公开信号，尚不能确认其具体产品差异化 |
| **LobsterAI** | 偏向消费级桌面生产力套件 | 相比 OpenClaw 更偏“开箱即用的工作应用” | 应用层封装比底层平台更重，跨平台打包与签名是重要成本 |

### 架构层面的核心分野

- **平台型 vs. 工具型**：OpenClaw、Hermes、QwenPaw 都在构建可扩展运行时；NanoBot、PicoClaw 更接近可嵌入的个人助手基座。
- **自主性 vs. 人工确认**：OpenClaw 和 LobsterAI 的 Browser 接管、审批机制都强调人在回路；Hermes 更强调无人值守自治。
- **渠道优先 vs. 本地优先**：QwenPaw 的插件渠道路线最明确；OpenHuman 偏本地 Runtime、事件和支付；OpenClaw 处于两者之间。
- **开发框架 vs. 成品应用**：LobsterAI 已明显是完整产品；其余多数更接近运行时或框架。

---

## 6. 社区热度与成熟度

### 第一层：超大生态、高压稳定期

**OpenClaw**

- 热度：最高，单日 Issue/PR 更新约 871 条。
- 阶段：快速迭代，但稳定性、PR 积压与发布滞后明显。
- 成熟度：功能成熟度高，运维与状态一致性成熟度中等偏低。
- 关键观察：WAL、事件循环阻塞、热重载打断 turn、P0/P1 缺少明确 Fix PR。

### 第二层：高活跃、缺陷收敛期

**Hermes Agent**

- 热度：高，Issue/PR 各 50 条。
- 阶段：批量扫描 Telegram/gateway 历史 Bug，已识别 339 个真实问题，仍有 207 个开放。
- 成熟度：安装和工具链修复较成熟，但安全线程授权、Kanban 停止语义、跨后端一致性仍不成熟。
- 核心风险：用户要求与后台 Agent 行为之间缺乏确定性边界。

**QwenPaw**

- 热度：中高，42 条 PR、19 条 Issue。
- 阶段：2.3.0 发布后的集中回归治理期。
- 成熟度：渠道插件架构已进入产品化阶段，但迁移、升级和多工作区并发仍明显不稳。
- 核心风险：认证绕过和插件旧源码残留具有较高优先级。

### 第三层：高质量工程收敛期

**OpenHuman**

- 热度：中等偏低，但 PR 收敛率约 92%。
- 阶段：持续偿还技术债并强化 CI。
- 成熟度：事件语义、原子写入、工具权限与配置隔离较成熟。
- 核心风险：x402 依赖升级与 Sign-In-With-X 仍需安全审查；缺少 Release 节点。

**LobsterAI**

- 热度：数据以 PR 为主，17 条更新，16 条已收敛。
- 阶段：密集产品打磨和发布准备期。
- 成熟度：桌面产品完整度高，模型、Cowork、专家生命周期和打包链路均有明确修复。
- 核心风险：macOS/Windows 分发与签名验证，以及 1M 上下文对压缩和额度的影响。

### 第四层：轻量、渐进式完善期

**NanoBot**

- 热度：社区讨论少，但 PR 活跃。
- 阶段：从功能扩展转向安全边界、Schema 兼容和 WebUI 状态一致性。
- 成熟度：工程方向清晰，单项问题闭环较快。
- 核心风险：多个 PR 仅“Closed”而未确认合并，且 Discord 历史、heartbeat 语义仍无明确 Fix。

**PicoClaw**

- 热度：贡献仍存在，但关键修复大量 stale 关闭。
- 阶段：维护治理不确定期。
- 成熟度：轻量与跨设备潜力仍在，通道和依赖维护节奏较弱。
- 核心风险：用户开始寻找 Fork，官方维护连续性成为产品风险。

### 第五层：低活动维护期

**IronClaw**

- 热度：极低，仅 1 条安全加固 Issue。
- 阶段：低频维护或早期收敛。
- 成熟度：缺少足够证据支持全面评价。
- 核心风险：若无版本和 PR 推进，用户难以判断项目是否仍会持续维护。

---

## 7. 值得关注的趋势信号

### 7.1 “静默失败”正在成为比普通崩溃更严重的体验问题

多个项目都出现：

- 请求成功但没有最终回复；
- 消息实际未发送却返回成功确认；
- cron 被终止却记录成功；
- 配置已生效但 UI 提示需要重启；
- callback、session notice、工具结果被丢弃；
- 空模型流被显示成推理内容。

**行业启示**：Agent 产品的核心质量指标不应只有任务成功率，还应包括 **状态真实性、结果可解释性、失败阶段可定位性和资源生命周期可观测性**。建议统一引入结构化事件：

```text
requested → accepted → dispatched → executed → delivered / failed / suppressed
```

并明确区分 `success`、`partial_success`、`suppressed`、`unknown`、`failed`。

### 7.2 持久化层正在成为自主 Agent 的架构瓶颈

OpenClaw 的 WAL 和事件循环问题、QwenPaw 的 turn/cron 记录问题、OpenHuman 的 storage rebind 原子性，都指向同一结论：**Agent 已从短请求程序演变为长期运行系统，但状态存储仍带有“单请求函数”时代的同步设计假设。**

**开发者应重点投入**：

- SQLite 读写与 Gateway 主线程解耦；
- 事务、WAL、checkpoint 和 reader 生命周期治理；
- 幂等事件键与 exactly-once 效果；
- 大数据库迁移、压缩、归档和冷启动；
- 崩溃一致性与可重放状态机。

### 7.3 渠道插件化正在成为标配，但“安装成功”不等于“运行成功”

QwenPaw、PicoClaw、OpenClaw、Hermes 都暴露了插件及渠道治理问题：

- 旧插件源码未随主程序迁移；
- 多工作区启动互相占用；
- 依赖环境变量缺失；
- callback 协议不兼容；
- Provider 插件升级后仍运行旧逻辑。

**关键结论**：插件生态需要像移动应用商店一样管理版本，而不是仅提供“复制代码并加载”。未来竞争力将更多体现在：

- manifest 与版本兼容矩阵；
- 插件签名、来源和更新通道；
- 运行时隔离与资源配额；
- 一键升级、迁移与回滚；
- 跨平台、跨工作区启动测试。

### 7.4 人工接管是人机 Agent 协作的重要产品层

OpenClaw 的 Browser 人工接管说明，自主 Agent 无法无限回避验证码、登录、支付确认和人工审批。未来主流形态更可能是：

> Agent 自动推进 → 遇到权限或身份边界 → 暂停并请求人工接管 → 用户完成敏感操作 → Agent 恢复。

这要求浏览器、消息渠道和审批系统共享统一的 **任务暂停/恢复协议**，而不是让用户中止整个 Agent 进程。

### 7.5 长任务自治能力正在从“能运行”转向“可证明可恢复”

Hermes 的子代理自动恢复、OpenClaw 的 checkpoint/持久化、QwenPaw 的 Cron 状态，都指向无人值守 Agent 的下一阶段要求：

- 每一步具备可恢复检查点；
- 停止、归档、取消具有确定语义；
- 重试有幂等保障；
- 用量、失败和接管过程可审计；
- 网关重启后能恢复，而不是从头执行。

**评价标准**将从“单轮成功率”升级为“小时级任务的完成率、恢复率、重复副作用率和成本可预测性”。

### 7.6 跨平台一致性将成为用户选择框架的核心门槛

macOS、Windows、Linux、Docker、SSH、旧版 glibc、Android、Homebrew、Nix 等问题在多个项目中重复出现。用户真正需要的不是“理论上支持”，而是：

- 官方镜像开箱可用；
- 安装、升级、卸载和诊断路径一致；
- 路径、权限、凭据和代理配置语义一致；
- 平台特有失败能给出准确提示。

建议把跨平台矩阵作为发布门禁，而不是发布后的社区反馈项。

### 7.7 安全边界正在从事后补洞转向能力设计

QwenPaw 的认证绕过、Hermes 的线程局部工具白名单、OpenHuman 的工具权限与遗留审批、OpenClaw 的身份和 Telegram 调用者隔离，共同表明：

- 身份来源不能只依赖 IP、线程或本地配置；
- 后台线程、插件和渠道必须继承同一权限上下文；
- 工具列表展示必须与实际暴露能力一致；
- 所有高风险动作应具备作用域、审计记录和可撤销授权。

对 Agent 开发者而言，**授权传播模型** 将与 Agent 编排模型同等重要。

---

## 决策建议

### 若目标是构建完整个人 Agent 平台

优先参考 **OpenClaw 的产品面、Hermes 的跨后端执行与安装体系、QwenPaw 的渠道插件治理、OpenHuman 的事件一致性与安全抽象**。核心投入应放在持久化、权限、恢复和渠道状态机，而非单纯增加 Provider。

### 若目标是快速构建轻量个人助手

优先参考 **NanoBot 的工具 Schema 标准化与执行安全、PicoClaw 的低资源 Skills/Memory 设计**。但需提前建设：

- 插件版本锁定；
- 平台兼容测试；
- 失败语义；
- 可靠的状态日志；
- 依赖安全更新机制。

### 若目标是交付桌面级商业产品

优先参考 **LobsterAI** 的完整产品化路径，尤其是模型配置、Cowork 会话、专家生命周期、遥测、macOS/Windows 打包和签名流程。其主要教训是：**桌面产品的稳定性往往不取决于 Agent 算法，而取决于安装、签名、更新、配置同步和错误诊断链路。**

### 当前最值得行业持续关注的共同问题

1. 长时间运行的持久化与 WAL 生命周期；
2. 后台任务的停止、恢复和幂等；
3. 渠道插件的版本、升级与隔离；
4. 配置热更新不能打断正在执行的任务；
5. 工具调用和身份授权的跨线程、跨渠道传播；
6. 安装、升级、跨平台和官方镜像的开箱可用性；
7. 将“静默失败”改造成可观测、可重试、可审计的状态机。

**总体判断：生态已进入“平台化和可信化竞争”阶段。下一轮赢家不仅能把 Agent 跑起来，还要能让它在数小时、数天乃至数周运行中保持状态正确、权限可信、过程可查、故障可恢复。**

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目动态日报

**统计日期：2026-11-13**  
**数据范围：过去 24 小时 GitHub Issues / Pull Requests 更新**

## 1. 今日速览

- 过去 24 小时共更新 **3 个 Issues**（2 个活跃、1 个关闭）和 **18 个 PRs**（8 个待合并、10 个已合并或关闭），代码侧活动显著高于问题反馈侧。
- 本日 PR 工作主要集中在 **WebUI 稳定性与体验优化、工具参数校验、HTTP/文件执行安全重构、模型与搜索提供商扩展** 等方向。
- [#6485](https://github.com/HKUDS/nanobot/issues/6485) 已关闭，且对应修复 PR [#6648](https://github.com/HKUDS/nanobot/pull/6648) 当日关闭，说明工具参数校验这一核心稳定性问题已有明确处理路径。
- 当前仍有 **8 个 PR 待合并**，其中 [#6040](https://github.com/HKUDS/nanobot/pull/6040) 带有冲突标记；社区讨论热度整体偏低，Issue 仅新增/活跃 2 条，尚未形成高热度热点。
- 今日无新版本发布。整体项目健康度评估为 **良好且持续推进中**，但发布节奏偏慢，仍需关注待合并 PR 数量及长期开放事项。

---

## 3. 项目进展

今日没有新版本发布，主要进展来自已合并或关闭的 PR。

### 3.1 工具参数校验修复

- [#6648 fix(tools): validate arguments with jsonschema without coercion](https://github.com/HKUDS/nanobot/pull/6648)  
  **状态：CLOSED**  
  使用成熟的 `jsonschema` 实现替代手写校验器，修复对 `$ref`、`anyOf`、`oneOf` 等组合 Schema 的支持缺失，并处理位置数组 Schema 可能导致的调用准备崩溃。
- 关联问题：[#6485 Tool parameter validation silently skips `$ref` / `anyOf` / `oneOf` schemas and crashes on tuple-form items](https://github.com/HKUDS/nanobot/issues/6485)  
  **状态：CLOSED**  
  这是今日最明确的核心 Bug 闭环之一。不过 PR 当前显示为关闭而非合并，是否已进入主分支仍需以最终提交记录为准。

### 3.2 WebUI 子代理历史读取性能优化

- [#6634 perf(subagent): read saved task history by loaded turns](https://github.com/HKUDS/nanobot/pull/6634)  
  **状态：CLOSED**  
  将子代理任务历史查询限定到当前实际加载的回合，避免打开长会话时一次性返回所有历史任务。摘要显示，原有 500 回合、5000 个任务的会话曾传输约 **7.3 MB JSON**，优化后能显著降低 WebUI 打开会话时的载荷和渲染成本。

### 3.3 WebUI 完整 Token 用量视图

- [#6638 feat(webui): show the full token-usage picture in settings](https://github.com/HKUDS/nanobot/pull/6638)  
  **状态：CLOSED**  
  基于 SQLite 中已有的无内容调用记录完善 30 天用量图表和模型下钻分析，展示缓存命中、未命中、写入及未知输入等类别，无需数据库 Schema 变更。该能力提升了成本观测与模型使用透明度。

### 3.4 WebUI 推理内容展示修复

- [#6640 fix(webui): avoid phantom reasoning on empty streams](https://github.com/HKUDS/nanobot/pull/6640)  
  **状态：CLOSED**  
  修复空答案流被错误显示为“思考过程”的问题，避免用户看到不存在的推理内容，属于直接改善交互可信度的回归修复。

### 3.5 WebUI 外观与预览调整

- [#6639 fix(webui): reorder appearance settings and trim preview](https://github.com/HKUDS/nanobot/pull/6639)  
  **状态：CLOSED**  
  将界面设置前置，并精简阅读预览中的品牌标题和装饰区域，使设置入口与阅读内容更加聚焦。

### 3.6 WebUI 会话缓存与重连可靠性

- [#6636 fix(webui): preserve session caches during history revalidation](https://github.com/HKUDS/nanobot/pull/6636)  
  **状态：CLOSED**  
  调整历史重新验证期间的会话缓存处理，限制超大 LRU 条目，避免因缓存淘汰影响当前会话。
- [#6617 fix(webui): correlate chat requests and cancel stale reconnects](https://github.com/HKUDS/nanobot/pull/6617)  
  **状态：CLOSED**  
  为聊天请求与重连流程建立关联并取消过期任务，降低重连期间误开已有话题、排队请求超时后仍创建会话，以及旧认证结果覆盖新状态等竞态问题。

### 3.7 Telegram 命令维护性重构

- [#6643 refactor(telegram): derive command regexes from the alias map](https://github.com/HKUDS/nanobot/pull/6643)  
  **状态：CLOSED**  
  从统一别名映射派生命令相关正则，减少 Telegram 命令在多个位置重复维护造成的遗漏和漂移。

### 3.8 Agent 执行循环所有权重构

- [#6641 refactor(agent): clarify run-local input and checkpoint ownership](https://github.com/HKUDS/nanobot/pull/6641)  
  **状态：CLOSED**  
  明确运行期队列状态、检查点及 Loop–Runner 适配层的所有权，降低注入输入、回滚、授权和终端等待逻辑之间的耦合。

### 3.9 清理未引用代码

- [#6644 refactor: drop unreferenced dead code](https://github.com/HKUDS/nanobot/pull/6644)  
  **状态：CLOSED**  
  移除迁移遗留代码、未使用导出、WebUI 快照构建器、图标及 npm 依赖。该 PR 明确声明不改变公共 CLI、Wire 或业务行为，有利于降低维护成本。

### 总体推进程度

今日已完成或关闭的重要改动覆盖了：

- **1 项核心工具校验缺陷**
- **3 项 WebUI 显示或交互修复**
- **1 项会话历史性能优化**
- **2 项 WebUI 缓存与竞态稳定性改进**
- **2 项 Telegram/Agent 内部架构重构**
- **1 项死代码清理**

整体不仅在增加功能，也在系统性强化参数校验、状态管理、资源访问和 WebUI 交互可靠性。不过，部分 PR 显示为 **CLOSED** 而非 **MERGED**，因此日报仅将其视为已关闭的推进项，不直接认定已进入正式版本。

---

## 4. 社区热点

### 4.1 工具参数校验与 Schema 兼容性

- Issue：[#6485 Tool parameter validation silently skips `$ref` / `anyOf` / `oneOf` schemas and crashes on tuple-form items](https://github.com/HKUDS/nanobot/issues/6485)
- PR：[#6648 fix(tools): validate arguments with jsonschema without coercion](https://github.com/HKUDS/nanobot/pull/6648)

**热度：1 条 Issue 评论；相关修复在当日关闭。**

这是今日唯一被明确关闭的 Issue，也是工程影响最明确的问题。诉求集中于两点：

1. MCP 服务常用的 `$ref`、`anyOf`、`oneOf` Schema 必须被完整验证；
2. tuple-form `items` 不得导致调用准备阶段崩溃。

用户痛点本质是 **工具参数校验与真实生态 Schema 不兼容**。社区给出的复现和修复方向较具体，且已有对应 PR，问题已进入收尾阶段。

### 4.2 Discord 线程上下文连续性

- Issue：[#6632 feat(discord): backfill recent thread history + optional startup presence](https://github.com/HKUDS/nanobot/issues/6632)
- **热度：1 条评论、0 个 👍，今日更新。**

该需求并非传统 Bug，而是明显的产品能力缺口：Discord 每个线程启动全新会话，无法读取机器人上线前或网关重启前的历史消息，导致 Agent 看不到既有决策、引用消息和自己之前的回复。

它反映出用户对多轮 Agent 的核心期待是：

- 线程级上下文应具备连续性；
- Agent 应能恢复历史决策链；
- 可选启动状态或 presence 能减少“机器人尚未真正上线”的不确定性。

由于已有明确需求描述且实现边界相对清晰，后续可能形成 Discord 专项 PR。

### 4.3 心跳内部轮次的消息发送反馈不一致

- Issue：[#6620 Suppressed message-tool sends during internal turns return a success-phrased ack instead of an error](https://github.com/HKUDS/nanobot/issues/6620)
- **热度：1 条评论、0 个 👍，今日更新。**

用户指出，在 heartbeat/internal turn 中，消息发送本来就会被抑制，但 `message` 工具仍向 Agent 返回“Message acknowledged…”之类的成功确认。该行为会误导 Agent，使内部执行流程无法区分：

- 消息确实已经发送；
- 消息因内部轮次而被有意抑制；
- 发送失败或未执行。

这是典型的 **工具返回语义不准确** 问题，可能导致 Agent 错误推进任务状态或误认为用户已经收到通知。

---

## 5. Bug 与稳定性

按严重程度和影响范围排列：

### P1：工具 Schema 验证失效及 tuple-form 崩溃

- Issue：[#6485](https://github.com/HKUDS/nanobot/issues/6485)
- 修复 PR：[#6648](https://github.com/HKUDS/nanobot/pull/6648)
- **状态：Issue 已关闭；PR 已关闭。**

**影响：** MCP 工具参数可能未被正确验证，`$ref`、`anyOf`、`oneOf` 组合 Schema 被静默跳过；特定数组 Schema 还可能在调用准备阶段崩溃。这会同时影响参数安全、模型调用成功率及工具生态兼容性。

**处置判断：** 已有明确修复实现，但 PR 状态不是“已合并”，建议维护者确认补丁是否已通过其他方式进入主分支。

---

### P2：内部轮次消息发送返回虚假成功确认

- Issue：[#6620](https://github.com/HKUDS/nanobot/issues/6620)
- **修复 PR：暂无明确对应 PR。**
- **状态：开放。**

**影响：** Agent 可能把被抑制的消息发送误判为已送达，影响 heartbeat 流程、任务状态推进和用户通知可靠性。当前尚未看到针对该语义问题的专门修复 PR。

---

### P2：Discord 线程历史缺失导致 Agent “失忆”

- Issue：[#6632](https://github.com/HKUDS/nanobot/issues/6632)
- **修复 PR：暂无。**
- **状态：开放。**

**影响：** Discord 线程在机器人启动前或网关重启后无法恢复上下文，Agent 可能重复提问、遗漏既有决策，或无法理解被回复消息。该问题更接近功能缺口，但用户体验上表现为明显错误行为。

---

### P2：WebUI 单美元符数学表达式误识别

- PR：[#6646 fix(webui): prevent single-dollar math from crossing code spans](https://github.com/HKUDS/nanobot/pull/6646)
- **状态：开放。**

**影响：** 扫描器可能从普通文本中的 `$ref` 开始，把后续代码块中的 `$defs` 等内容一并交给 KaTeX，导致中间的粗体和代码格式被破坏。属于渲染回归，已有明确 fix PR，但尚未合并。

---

### P2：WebUI 重认证期间客户端被关闭后又被重新打开

- PR：[#6040 fix(webui): respect client closure during reauthentication](https://github.com/HKUDS/nanobot/pull/6040)
- **状态：开放，且带有冲突标记。**

**影响：** 异步重新认证完成后，可能重新打开用户已关闭的客户端；旧认证结果也可能覆盖新状态。该问题涉及 WebUI 生命周期和认证竞态，且 PR 已冲突，需优先处理。

---

### P2：WebUI 空流产生虚假“思考过程”

- PR：[#6640 fix(webui): avoid phantom reasoning on empty streams](https://github.com/HKUDS/nanobot/pull/6640)
- **状态：关闭。**

**影响：** 模型没有输出推理内容时，界面仍可能显示误导性的“thought process”。问题已处理，但需确认关闭是否代表代码已合入。

---

### P2：WebUI 会话历史加载成本过高

- PR：[#6634 perf(subagent): read saved task history by loaded turns](https://github.com/HKUDS/nanobot/pull/6634)
- **状态：关闭。**

**影响：** 长会话加载时曾传输约 7.3 MB 子代理历史 JSON，造成明显延迟与内存压力。已有针对性性能修复。

---

### P2：重连期间可能误开已有话题或创建过期会话

- PR：[#6617 fix(webui): correlate chat requests and cancel stale reconnects](https://github.com/HKUDS/nanobot/pull/6617)
- **状态：关闭。**

**影响：** 创建/分叉话题和认证刷新之间存在竞态，可能导致错误话题被打开、过期请求继续执行或旧认证状态生效。已有完整回归测试导向的修复。

---

### 安全性相关重构：积极信号

以下并非已报告 Bug，但直接关系到稳定性与安全边界：

- [#6645 refactor(exec): share the sandbox launch path with settings checks](https://github.com/HKUDS/nanobot/pull/6645)  
  统一 shell 执行与设置沙箱检查的可信启动路径、参数构造和进程树管理，减少命令字符串拆分带来的风险。
- [#6637 refactor(execution): share bounded HTTP redirects](https://github.com/HKUDS/nanobot/pull/6637)  
  统一 Web Fetch 和图片下载的有界重定向处理，保留 DNS 固定、逐跳 URL 校验及代理策略，降低重定向资源耗尽风险。
- [#6616 refactor(tools): centralize scoped file operations](https://github.com/HKUDS/nanobot/pull/6616)  
  将文件读取、写入、编辑、补丁、目录列表和 Python 搜索统一纳入作用域授权机制，强化路径与写操作控制。

这些改动表明项目正在从功能扩展转向安全边界和资源治理的纵深优化。

---

## 6. 功能请求与路线图信号

### 6.1 Discord 历史回填与启动状态

- [#6632 feat(discord): backfill recent thread history + optional startup presence](https://github.com/HKUDS/nanobot/issues/6632)

可能纳入下一版本的要素：

- 回填近期线程消息；
- 在历史缺失时恢复 Agent 的线程上下文；
- 可选 startup presence 或就绪状态展示。

**判断：较高。** 这是 Discord 多轮对话可用性的基础能力，需求具体，且不依赖大规模架构调整。

### 6.2 胜算云模型网关

- [#6647 feat(providers): add ShengSuanYun gateway](https://github.com/HKUDS/nanobot/pull/6647)

该 PR 为胜算云增加 OpenAI-compatible 网关，支持：

- 在 Settings 中配置 API Key；
- 自动发现可用模型；
- 保留完整上游模型 ID 与命名空间；
- Provider Picker 支持中文搜索和品牌展示。

**判断：中高。** 与现有 Provider 扩展模式一致，实施范围清晰，可较直接进入下一批功能版本。

### 6.3 MST 元搜索提供商

- [#5234 feat(agent): integrate mst-python as a metasearch provider](https://github.com/HKUDS/nanobot/pull/5234)

MST 可聚合 DuckDuckGo、Google、Brave、Bing 等多个搜索引擎，并通过 Reciprocal Rank Fusion 合并结果，以提升搜索覆盖率和结果多样性。

**判断：中等。** 搜索聚合对 Agent 的联网能力有直接价值，但 PR 自 8 月创建、持续时间较长，且涉及新增外部依赖、结果合并策略与测试口径，可能还需进一步维护。

### 6.4 PyPI Trusted Publishing

- [#6642 Add trusted PyPI publishing for approved releases](https://github.com/HKUDS/nanobot/pull/6642)

该 PR 计划在维护者发布获批的 GitHub Release 后自动启动受保护的 PyPI 发布流程，同时保留手动测试和恢复工作流。

**判断：中高。** 虽不是终端用户功能，但直接改善稳定版本发布的安全性和可靠性，可能成为下一版本发布前的基础设施事项。

### 6.5 工具校验修复可能进入后续版本

- [#6648](https://github.com/HKUDS/nanobot/pull/6648)
- [#6485](https://github.com/HKUDS/nanobot/issues/6485)

**判断：很高。** 修复已闭环，若当前 PR 关闭不代表合入，维护者应尽快确认补丁落点。此类兼容性修复通常优先级高于一般新增功能。

### 6.6 WebUI 修复可能形成小版本更新

- [#6646](https://github.com/HKUDS/nanobot/pull/6646)
- [#6040](https://github.com/HKUDS/nanobot/pull/6040)

**判断：中高。** 两者分别影响公式渲染和客户端认证生命周期，适合纳入近期 WebUI 修复版本；其中 [#6040](https://github.com/HKUDS/nanobot/pull/6040) 应先解决冲突。

---

## 7. 用户反馈摘要

### Discord 用户

- **真实痛点：** Agent 在 Discord 新线程中看不到早期上下文。
- **使用场景：** 线程创建早于机器人接入，或 Gateway 重启后继续讨论；用户引用旧消息并期待 Agent 理解之前形成的决策。
- **不满意点：** 每个线程都像全新会话，机器人无法接续自己的历史回复，造成重复解释和上下文断裂。
- **期望：** 恢复近期历史记录，并提供可选的启动/在线状态反馈。

### 工具与 MCP 使用者

- **真实痛点：** 复杂工具 Schema 看似通过验证，实际却被跳过；部分参数形式会直接导致调用准备崩溃。
- **使用场景：** 使用 FastMCP 等框架定义模型类型、联合类型、局部引用及 tuple 数组参数。
- **不满意点：** 校验器行为与 JSON Schema 标准不一致，错误难以及时暴露。
- **期望：** 使用标准 `jsonschema` 校验，且不进行隐式类型强制转换。

### 内部 heartbeat / 工具调用开发者

- **真实痛点：** 消息发送被抑制后，工具仍返回成功措辞的确认。
- **使用场景：** heartbeat 等 internal turn 将所有输出集中交给 post-run evaluator。
- **不满意点：** 返回语义与真实执行结果不一致，使 Agent 难以正确判断消息是否已发送。
- **期望：** 被抑制时应返回明确、可识别的状态或错误，而不是伪成功确认。

### 社区参与度观察

今日 Issues 的评论数均为 0 或 1，反应数均为 0，尚无高热度讨论。反馈质量较好，问题描述通常包含具体复现条件和期望行为，但参与规模较小，可能影响 Issue 优先级判断。

---

## 8. 待处理积压

### 8.1 长期开放且带冲突的重认证修复

- [#6040 fix(webui): respect client closure during reauthentication](https://github.com/HKUDS/nanobot/pull/6040)
- **创建：2026-10-04；更新：2026-11-12**
- **风险：高**

该 PR 已存在约 40 天并带有冲突标记，说明长期未完成合并且可能需要重新同步。虽然作者报告相关回归测试、WebUI 全量测试及 ESLint/build 曾通过，但当前冲突可能使验证结果失效。建议优先 rebase、复测并关闭或合并。

### 8.2 长期开放的 MST 元搜索集成

- [#5234 feat(agent): integrate mst-python as a metasearch provider](https://github.com/HKUDS/nanobot/pull/5234)
- **创建：2026-08-03；更新：2026-11-13**
- **风险：中高**

该 PR 已开放约 3 个月，虽然今日仍有更新，但维护周期明显偏长。需明确是否仍计划合入，并检查外部依赖、RRF 排序质量、网络测试稳定性及与现有搜索提供商接口的一致性。

### 8.3 Discord 上下文回填尚无对应 PR

- [#6632](https://github.com/HKUDS/nanobot/issues/6632)

需求明确但尚未看到实现 PR。建议维护者确认范围，例如：

- 回填最近多少条或多长时间；
- 是否允许机器人读取自身历史回复；
- Gateway 重启后如何去重；
- 启动 presence 是否默认开启；
- 隐私和 Discord API 限流如何处理。

### 8.4 心跳消息工具虚假成功确认尚无修复 PR

- [#6620](https://github.com/HKUDS/nanobot/issues/6620)

这是语义正确性问题，建议定义统一结果状态，例如 `suppressed_internal_turn`，避免上层 Agent 将其视为真实送达。

### 8.5 8 个待合并 PR 需要收敛

当前待合并 PR 共 8 个：

- [#6646](https://github.com/HKUDS/nanobot/pull/6646)
- [#6647](https://github.com/HKUDS/nanobot/pull/6647)
- [#5234](https://github.com/HKUDS/nanobot/pull/5234)
- [#6645](https://github.com/HKUDS/nanobot/pull/6645)
- [#6642](https://github.com/HKUDS/nanobot/pull/6642)
- [#6637](https://github.com/HKUDS/nanobot/pull/6637)
- [#6616](https://github.com/HKUDS/nanobot/pull/6616)
- [#6040](https://github.com/HKUDS/nanobot/pull/6040)

建议维护者按以下顺序收敛：

1. **先处理冲突与核心稳定性：** [#6040](https://github.com/HKUDS/nanobot/pull/6040)、[#6646](https://github.com/HKUDS/nanobot/pull/6646)；
2. **确认安全边界重构：** [#6645](https://github.com/HKUDS/nanobot/pull/6645)、[#6637](https://github.com/HKUDS/nanobot/pull/6637)、[#6616](https://github.com/HKUDS/nanobot/pull/6616)；
3. **确认发布基础设施：** [#6642](https://github.com/HKUDS/nanobot/pull/6642)；
4. **评估新增 Provider：** [#6647](https://github.com/HKUDS/nanobot/pull/6647)、[#5234](https://github.com/HKUDS/nanobot/pull/5234)。

---

## 结论

NanoBot 今日呈现 **高开发活跃度、中等社区讨论度、无版本发布** 的状态。工程侧重点已明显从单纯增加功能转向 **工具标准兼容、执行安全、资源边界、WebUI 状态一致性和长会话性能**。核心 Issue [#6485](https://github.com/HKUDS/nanobot/issues/6485) 已关闭，是最重要的稳定性闭环。

下一阶段最值得关注的是：

1. 确认 [#6648](https://github.com/HKUDS/nanobot/pull/6648) 的修复实际进入主分支；
2. 解决 [#6040](https://github.com/HKUDS/nanobot/pull/6040) 的长期冲突；
3. 为 [#6620](https://github.com/HKUDS/nanobot/issues/6620) 补充明确修复；
4. 推进 [#6632](https://github.com/HKUDS/nanobot/issues/6632) 的 Discord 线程历史能力；
5. 收敛 8 个待合并 PR，并据此规划下一次版本发布。

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目动态日报

**日期：2026-11-13**  
**数据范围：过去 24 小时 GitHub Issues / PR 更新**

## 1. 今日速览

- 过去 24 小时共更新 **4 个 Issues、11 个 PR**，其中仍有 **2 个 Issue 开放、4 个 PR 待处理**，社区讨论和代码贡献保持一定活跃度。
- 今日没有发布新版本；当前主要工作集中在 **依赖升级、Discord 通道稳定性、Anthropic 模型兼容、WebSocket 认证**及构建流程修复。
- PR 关闭或合并数量较多，涵盖 Skills 安装、Memory/Cache 优化、WebUI 热重载及 Android 兼容性等多个方向，但部分长期 PR 被标记为 `stale` 后关闭。
- 项目整体呈现出“**持续维护但维护节奏不稳定**”的特征：一方面有明确的功能和缺陷修复贡献，另一方面也暴露出 Issue/PR 响应滞后、维护状态不透明及外部模型兼容性不足等问题。
- 社区出现了“**项目无人维护、由 Fork 接续**”的讨论（[#3417](https://github.com/sipeed/picoclaw/issues/3417)），说明上游维护归属和长期治理已成为用户关注焦点。

---

## 2. 版本发布

过去 24 小时 **无新版本发布**。

因此暂无需要说明的版本更新、破坏性变更或迁移事项。

---

## 3. 项目进展

### 今日关闭/合并的重要 PR

#### 1. Discord 网关握手死锁修复

- **PR：** [#3452](https://github.com/sipeed/picoclaw/pull/3452)
- **状态：** 已关闭
- **方向：** Discord 通道稳定性
- **内容：** 解决 Discord 机器人可能永久失联的问题。现有 `discordgo` fork 在网关握手阶段存在死锁，表现为机器人显示已连接但无法收发消息，也没有心跳和日志。
- **影响：** 该修复直接针对通道可用性、消息收发和故障可观测性，属于实际生产环境稳定性问题。
- **备注：** PR 被标记为 `stale` 并关闭，建议维护者确认修复是否已被其他提交吸收，或重新提交并关联对应 Issue。

#### 2. Anthropic thinking-always 模型兼容修复

- **PR：** [#3447](https://github.com/sipeed/picoclaw/pull/3447)
- **状态：** 已关闭
- **方向：** Anthropic 通道 / 模型参数兼容
- **内容：** 修复使用 Token 凭据调用 `claude-haiku-5-5` 等始终启用 thinking 的模型时，因仍发送 `temperature` 参数而返回 HTTP 400 的问题。
- **影响：** 降低 Anthropic 新模型接入失败率，避免模型已可调用但因参数策略过时而不可用。
- **备注：** 同样被标记为 `stale` 后关闭，建议核验是否已由其他 PR 或主线提交覆盖。

#### 3. WebSocket 认证与请求头大小写标准化

- **PR：** [#2363](https://github.com/sipeed/picoclaw/pull/2363)
- **状态：** 已关闭
- **方向：** 通道 Bug 修复
- **内容：** 修复 WebSocket 认证问题，并统一请求头名称大小写。
- **影响：** 增强不同 WebSocket 服务端、代理及网关之间的互操作性，减少因 Header 规范化差异导致的认证失败。
- **关联 Issue：** [#2354](https://github.com/sipeed/picoclaw/issues/2354)

#### 4. MemoryStore 与 SearchCache 性能优化

- **PR：** [#649](https://github.com/sipeed/picoclaw/pull/649)
- **状态：** 已关闭
- **方向：** Agent / Skill 性能
- **内容：**
  - 为 `MemoryStore` 增加内存缓存，减少长期记忆和每日笔记的文件 I/O；
  - 将基于切片的 LRU 改为双向链表实现；
  - 优化搜索缓存和内存使用效率。
- **影响：** 对高频记忆读写、搜索和多 Agent 场景具有潜在性能收益。
- **风险提示：** 内存缓存涉及持久化一致性、失效策略和数据新鲜度，建议在合入或替代实现中明确缓存刷新与异常恢复机制。

#### 5. Skills 安装/重装 CLI 重构

- **PR：** [#714](https://github.com/sipeed/picoclaw/pull/714)
- **状态：** 已关闭
- **方向：** Skills 管理
- **内容：**
  - 增加安装规格解析、GitHub 目录获取、默认分支识别和子路径校验；
  - 支持 `repo@branch` 和可选 subpath；
  - 增加 `reinstall` 子命令，允许强制覆盖已有 Skill；
  - 生产安装流程改用 GitHub Trees API；
  - 抽离为 `skillsCmd`。
- **影响：** 提升 Skills 安装的可控性、目录级安装能力和重复安装体验。
- **评估：** 这是用户可感知较明显的功能改进，但关闭状态不等同于已确认合入主线，需进一步核验。

#### 6. Go 1.25.10 `X:nodwarf5` 构建兼容修复

- **PR：** [#2976](https://github.com/sipeed/picoclaw/pull/2976)
- **状态：** 已关闭
- **方向：** 构建系统
- **内容：** 修复 Makefile 对 Go 版本字符串处理不正确导致构建失败的问题，尤其涉及 `X:nodwarf5` 等带空格或特殊后缀的版本格式。
- **影响：** 降低特定 Go 工具链或构建标签组合下的构建失败概率。

#### 7. 多项历史修复汇总 PR

- **PR：** [#1546](https://github.com/sipeed/picoclaw/pull/1546)
- **状态：** 已关闭
- **内容：** 汇总合入其他 PR 中的多项修复。
- **评估：** 有利于集中回归和版本发布，但在缺少独立测试结果与变更清单的情况下，评审和回滚成本较高。

#### 8. 热重载状态提示问题

- **相关 Issue：** [#3453](https://github.com/sipeed/picoclaw/issues/3453)
- **状态：** 已关闭
- **内容：** 在 `gateway.hot_reload: true` 时，WebUI 修改默认模型后，网关约 2 秒内已应用配置，但界面仍提示“需要重启”，且 `gateway_restart_required` 持续为 `true`，直至服务重新启动。
- **影响：** 属于状态同步和用户信任问题：配置已经生效，却向用户显示相反提示。
- **备注：** Issue 被标记为 `stale` 关闭，未提供明确 fix PR，建议确认主线是否已有对应修复。

---

## 4. 社区热点

### 热点一：项目维护状态与 Fork 接续

- **Issue：** [#3417](https://github.com/sipeed/picoclaw/issues/3417)
- **状态：** 开放
- **评论数：** 5，为今日所列 Issue 中最高
- **诉求：** 用户认为上游项目可能已缺乏维护，但社区仍有明确使用需求，因此建立活跃 Fork：
  - [afjcjsbx/picoclaw](https://github.com/afjcjsbx/picoclaw)
- **背后诉求：**
  1. 明确 PicoClaw 后续由谁维护；
  2. 修复长期无响应及 PR 被标记 stale 的问题；
  3. 为已有用户提供可持续的升级与安全修复渠道；
  4. 避免因上游停滞导致部署、适配和安全更新中断。

**判断：** 这是当前最重要的治理信号。相比单个功能 Issue，它直接关系到项目长期健康度和用户信任。

### 热点二：模型标识符大小写校验破坏上游模型 ID

- **Issue：** [#3454](https://github.com/sipeed/picoclaw/issues/3454)
- **状态：** 开放
- **评论数：** 3
- **诉求：** WebUI 会将未知 Provider 前缀自动转为小写，例如将 `ACME/gpt-4o-mini` 改为 `acme/gpt-4o-mini`。但上游模型命名空间可能区分大小写，这会导致模型无法调用。
- **背后诉求：**
  - 未知 Provider 不应被直接视为大小写错误；
  - “Fix” 操作不应修改可能具有业务语义的前缀；
  - 校验规则需要区分 PicoClaw 内置 Provider 与透传给上游 API 的模型命名空间。

**判断：** 属于跨 Provider 接入的基础兼容问题，可能影响企业自定义网关、代理服务和自建模型服务。

### 热点三：依赖升级 PR 集中待处理

- **PR：**
  - [#3460](https://github.com/sipeed/picoclaw/pull/3460)：Azure Identity `1.14.0 → 1.15.0`
  - [#3459](https://github.com/sipeed/picoclaw/pull/3459)：LINE Bot SDK `8.20.1 → 8.23.0`
  - [#3458](https://github.com/sipeed/picoclaw/pull/3458)：modernc SQLite `1.53.0 → 1.61.1`
  - [#3457](https://github.com/sipeed/picoclaw/pull/3457)：`golang.org/x/time` `0.15.0 → 0.16.0`
- **状态：** 均开放且被标记为 `stale`
- **背后诉求：**
  - 更新 Azure、Line、SQLite 等运行依赖；
  - 获取安全修复、兼容性改进和上游 Bug 修复；
  - 减少长期依赖旧版本带来的安全与维护风险。

**判断：** 依赖升级本身价值明确，但四个 PR 同时积压并进入 stale，说明自动化安全更新缺少及时评审和合入机制。

---

## 5. Bug 与稳定性

按潜在影响排序如下。

### 高优先级

#### 1. Discord 网关握手死锁导致通道永久失联

- **Issue/修复关联：** [#3452](https://github.com/sipeed/picoclaw/pull/3452)
- **影响：** 机器人可能处于“已连接”假状态，但消息完全无法收发，且缺少心跳和日志；属于静默故障。
- **严重程度：** 高
- **是否已有 fix PR：** 有，PR 已关闭并标记 stale；需确认是否真正进入主线。

#### 2. Anthropic thinking-always 模型调用返回 400

- **修复关联：** [#3447](https://github.com/sipeed/picoclaw/pull/3447)
- **影响：** Token 凭据调用 `claude-haiku-5-5` 等模型失败，核心模型完全不可用。
- **严重程度：** 高
- **是否已有 fix PR：** 有，但已因 stale 关闭，需核验主线状态。

### 中优先级

#### 3. WebSocket 认证失败与 Header 大小写差异

- **修复关联：** [#2363](https://github.com/sipeed/picoclaw/pull/2363)
- **影响：** 可能导致连接握手失败、代理兼容性问题或间歇性通道异常。
- **严重程度：** 中
- **是否已有 fix PR：** 有，已关闭；建议补充回归测试和合入状态说明。

#### 4. WebUI 热重载后错误提示“需要重启”

- **Issue：** [#3453](https://github.com/sipeed/picoclaw/issues/3453)
- **影响：** 实际配置已经生效，但状态接口和 UI 提示未同步，可能导致用户重复重启或误判配置未更新。
- **严重程度：** 中
- **是否已有 fix PR：** 未明确提供。

#### 5. 特定 Go 工具链下 Makefile 构建失败

- **修复关联：** [#2976](https://github.com/sipeed/picoclaw/pull/2976)
- **影响：** 影响构建发布或使用特殊 Go 标签的环境。
- **严重程度：** 中
- **是否已有 fix PR：** 有，已关闭。

### 低优先级

#### 6. 未知模型 Provider 前缀被错误转为小写

- **Issue：** [#3454](https://github.com/sipeed/picoclaw/issues/3454)
- **影响：** 对大小写敏感的上游模型命名空间造成调用失败；影响范围取决于自定义 Provider 使用情况。
- **严重程度：** 中低
- **是否已有 fix PR：** 当前数据中未显示。

---

## 6. 功能请求与路线图信号

### 6.1 Skills 安装与重装能力

- **PR：** [#714](https://github.com/sipeed/picoclaw/pull/714)
- **需求方向：**
  - 支持 GitHub 仓库、分支和子目录安装；
  - 支持 `reinstall` 强制覆盖；
  - 改善已存在 Skill 时的错误提示；
  - 统一为 `skillsCmd`，提升 CLI 可维护性。
- **纳入下一版本的可能性：** **中高。**
- **判断依据：** 功能边界清晰、对 Skill 生态有直接价值，且已有较完整实现；但需确认该 PR 是否已经关闭但未合并，以及是否需拆分、补测。

### 6.2 Memory 与 Cache 性能优化

- **PR：** [#649](https://github.com/sipeed/picoclaw/pull/649)
- **需求方向：**
  - 降低文件 I/O；
  - 提升 LRU 与搜索缓存效率；
  - 控制长期记忆场景下的资源占用。
- **纳入下一版本的可能性：** **中。**
- **判断依据：** 对高频 Agent 和长期记忆场景有实际收益，但缓存一致性、数据失效及多实例部署需要明确设计。

### 6.3 Android API 19 与 x86 架构支持

- **Issue：** [#3451](https://github.com/sipeed/picoclaw/issues/3451)
- **需求方向：**
  - 支持 Android 4.4；
  - 覆盖 `x86_32` 与 `x86_64`；
  - 扩大旧电视盒子、平板和 SBC 设备覆盖范围。
- **纳入下一版本的可能性：** **中低。**
- **判断依据：** 有明确硬件用户群，但 Android 4.4 生态老旧、CI/构建与依赖兼容成本较高，且 Issue 已被标记 stale 关闭。建议先确认维护者是否接受这一长期兼容目标。

### 6.4 依赖升级与安全维护

- **PR：**
  - [#3460](https://github.com/sipeed/picoclaw/pull/3460)
  - [#3459](https://github.com/sipeed/picoclaw/pull/3459)
  - [#3458](https://github.com/sipeed/picoclaw/pull/3458)
  - [#3457](https://github.com/sipeed/picoclaw/pull/3457)
- **需求方向：** 更新 Azure、Line、SQLite 和 Go 时间相关依赖。
- **纳入下一版本的可能性：** **高，但取决于评审。**
- **判断依据：** 通常适合作为下一批常规版本更新内容；其中 SQLite 大版本跨度及 `x/time` 对 Go 版本要求更值得重点验证。

### 6.5 WebUI 模型配置体验

- **相关 Issues：**
  - [#3454](https://github.com/sipeed/picoclaw/issues/3454)
  - [#3453](https://github.com/sipeed/picoclaw/issues/3453)
- **需求方向：**
  - 未知 Provider 前缀保持原样；
  - 更准确地展示热重载结果；
  - 统一 WebUI、Gateway 状态和实际配置状态。
- **纳入下一版本的可能性：** **中高。**
- **判断依据：** 两项均属于配置正确性和用户信任问题，修复范围相对明确，适合小版本补丁发布。

---

## 7. 用户反馈摘要

### 真实使用痛点

1. **配置已经生效，但 UI 给出错误反馈**  
   用户在开启 `gateway.hot_reload` 后确认 Gateway 日志已应用默认模型，WebUI 仍持续显示“需要重启”。这表明当前问题不只是文案错误，还涉及状态字段同步。  
   来源：[#3453](https://github.com/sipeed/picoclaw/issues/3453)

2. **WebUI 的自动修正会破坏自定义模型 ID**  
   对使用 `ACME/gpt-4o-mini` 这类区分大小写上游命名空间的用户而言，点击“Fix”后模型 ID 被改写，直接造成调用失败。  
   来源：[#3454](https://github.com/sipeed/picoclaw/issues/3454)

3. **部分用户担心上游停更**  
   有社区成员主动创建活跃 Fork，以保持项目持续迭代，反映现有用户对维护连续性、响应速度和长期修复保障存在明显担忧。  
   来源：[#3417](https://github.com/sipeed/picoclaw/issues/3417)

4. **旧设备和多架构兼容仍有需求**  
   用户希望运行于 Android 4.4 的 x86 电视盒子、平板和 SBC 也能使用 PicoClaw。  
   来源：[#3451](https://github.com/sipeed/picoclaw/issues/3451)

### 满意点

- Gateway 热重载机制本身能够在约 2 秒内应用模型配置，说明核心能力有效。
- Skills 安装、Memory/Cache、Discord 和 Anthropic 等方向已有明确贡献者与可审查实现。
- 项目即使处于维护争议期，仍持续收到 PR、Issue 和依赖升级提交，尚未完全失去社区贡献。

### 不满意点

- 多个 PR 和 Issue 被标记 `stale` 并关闭，缺少清晰的关闭理由或替代修复链接。
- 上游维护状态不透明，促使用户寻找 Fork。
- WebUI 的自动校验与真实上游 API 约束不匹配。
- 自动化依赖 PR 没有及时评审，安全更新可能持续滞后。

---

## 8. 待处理积压

### 重要开放 Issue

1. **项目维护状态与 Fork 接续**
   - [#3417](https://github.com/sipeed/picoclaw/issues/3417)
   - **优先级：高**
   - **提醒内容：** 维护者应明确上游维护计划、Issue/PR 响应机制，以及 Fork 与官方仓库的协作关系。

2. **模型标识符大小写校验错误**
   - [#3454](https://github.com/sipeed/picoclaw/issues/3454)
   - **优先级：高**
   - **提醒内容：** 建议尽快避免对未知 Provider 前缀执行破坏性小写转换，并补充大小写敏感上游的回归测试。

### 待处理 PR

1. **Azure Identity 升级**
   - [#3460](https://github.com/sipeed/picoclaw/pull/3460)

2. **LINE Bot SDK 升级**
   - [#3459](https://github.com/sipeed/picoclaw/pull/3459)

3. **modernc SQLite 升级**
   - [#3458](https://github.com/sipeed/picoclaw/pull/3458)

4. **golang.org/x/time 升级**
   - [#3457](https://github.com/sipeed/picoclaw/pull/3457)

上述 PR 均处于开放且 `stale` 状态，建议维护者：

- 确认是否仍兼容当前 Go 版本与构建矩阵；
- 优先评审 SQLite 和 Go 时间库升级，避免跨度过大；
- 对暂时不合入的 PR 说明原因，避免用户重复维护。

### 长期积压或需核验合入状态

- **Skills CLI 重构：** [#714](https://github.com/sipeed/picoclaw/pull/714)
- **Memory/Cache 优化：** [#649](https://github.com/sipeed/picoclaw/pull/649)
- **WebSocket 认证修复：** [#2363](https://github.com/sipeed/picoclaw/pull/2363)
- **Discord 死锁修复：** [#3452](https://github.com/sipeed/picoclaw/pull/3452)
- **Anthropic 模型兼容修复：** [#3447](https://github.com/sipeed/picoclaw/pull/3447)
- **Android API 19 支持：** [#3451](https://github.com/sipeed/picoclaw/issues/3451)

---

## 项目健康度结论

**总体健康度：中等偏低，趋势为“贡献活跃、治理承压”。**

积极信号是今日仍有 11 个 PR 更新，覆盖功能、性能、构建、依赖和多通道稳定性；负向信号则是多个关键修复被 `stale` 关闭、自动化依赖升级积压，以及社区开始建立替代 Fork。

当前最需要的不是继续扩大功能面，而是提高维护响应效率：

1. 明确官方维护与发布策略；
2. 对已关闭但未合入的关键修复进行补审或补提交；
3. 建立依赖 PR 的定期评审机制；
4. 优先修复 WebUI 热重载状态同步和模型 ID 大小写校验；
5. 在下一次版本发布前完成 Discord、Anthropic、WebSocket 与构建链路的回归验证。

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw 项目动态日报

**日期：2026-11-13**  
**数据范围：过去 24 小时 GitHub 更新**  
**项目地址：[nearai/ironclaw](https://github.com/nearai/ironclaw)**

## 1. 今日速览

- 过去 24 小时共更新 **1 个 Issue**，无 PR 更新、无 Issue/PR 关闭，也未发布新版本。
- 唯一新增内容为 **CI 工作流依赖锁文件（`actions.lock`）及两个依赖固定项刷新**的安全加固提案，详见 [Issue #8170](https://github.com/nearai/ironclaw/issues/8170)。
- 当前 Issue 尚无评论、点赞或关联 PR，尚未形成明确维护结论或实现计划。
- 今日仓库活跃度偏低，但议题方向明确，聚焦 GitHub Actions 供应链安全和依赖可复现性；整体项目健康度暂评为 **稳定、关注度偏低**。

## 2. 版本发布

过去 24 小时无新版本发布，因此暂无更新内容、破坏性变更或迁移事项。

## 3. 项目进展

今日无 PR 合并或关闭，未出现已落地的功能开发、Bug 修复或 CI 变更。

[Issue #8170](https://github.com/nearai/ironclaw/issues/8170) 提议引入 GitHub Actions 的工作流依赖锁文件，并在提案中报告现有阻塞条件。该事项仍处于讨论阶段，尚不能计入已完成的工程进展；若后续获得维护者认可并落实 PR，预计将进一步提升工作流依赖版本的可控性、可复现性与供应链安全性。

**推进程度：** 今日无已合并代码进展，仅完成一项安全加固方向的问题定义与提案。

## 4. 社区热点

今日唯一活跃议题为：

- **[CI] 添加 GitHub 工作流锁文件 `actions.lock`，并刷新两个依赖固定项** — [Issue #8170](https://github.com/nearai/ironclaw/issues/8170)
  - **状态：** Open
  - **作者：** [@coconux3](https://github.com/coconux3)
  - **评论数：** 0
  - **点赞数：** 0
  - **关注度：** 本时段内唯一活跃 Issue，但暂无社区互动

### 诉求分析

该 Issue 指出，仓库中的 GitHub Actions 工作流已经在多数位置通过 **commit SHA** 固定依赖版本；在此基础上，提案进一步采用 GitHub 官方的[工作流依赖锁文件](https://docs.github.com/actions/concepts/security/workflow-dependency-lockfiles)，解决依赖升级记录、锁定与审计问题。

从内容看，核心诉求并非新增产品功能，而是强化 CI/CD 的安全基线：

1. 降低第三方 Action 供应链漂移与版本被篡改风险；
2. 提升自动化工作流的确定性及可复现性；
3. 明确当前锁文件方案的采用障碍；
4. 顺带刷新两个已有固定项，使依赖状态保持一致。

目前没有其他热门 Issue/PR，也没有出现用户争议或集中讨论。由于评论和反应均为零，该议题更多体现维护者或贡献者的主动安全改进意识，而非广泛社区需求。

## 5. Bug 与稳定性

今日没有新增 Bug、崩溃或回归问题报告，也没有待合并的修复 PR。

| 严重程度 | 问题 | 状态 | Fix PR |
|---|---|---|---|
| 无 | 今日未报告 Bug、崩溃或回归问题 | 无相关记录 | 无 |

需要区分的是，[Issue #8170](https://github.com/nearai/ironclaw/issues/8170) 属于 **CI 供应链安全与依赖管理改进**，不是已确认的运行时 Bug。其潜在价值在于降低依赖供应链风险，但目前仍需解决提案中列出的阻塞条件。

## 6. 功能请求与路线图信号

### 明确的技术改进信号

[Issue #8170](https://github.com/nearai/ironclaw/issues/8170) 是今日唯一明确的技术路线信号，指向以下方向：

- 引入 GitHub Actions 工作流依赖锁文件；
- 保持 Action 依赖的 SHA 固定策略；
- 刷新两个依赖固定项；
- 排查并说明锁文件采用过程中的现有阻碍。

### 纳入下一版本的判断

- **较可能进入近期 CI 维护范围：** 刷新两个依赖固定项属于范围较小、风险可控的常规维护工作，但当前没有对应 PR，无法确认具体版本。
- **待评估后落地：** `actions.lock` 方案需要先确认 GitHub 平台支持情况、锁文件生成与更新流程，以及仓库现有 CI 配置是否兼容。
- **暂无产品功能路线信号：** 今日没有用户提出 AI 智能体、个人助手能力、集成、SDK 或用户体验方面的新功能请求。
- **暂无版本发布依据：** 过去 24 小时没有 Release，不能据此确认该改进会被纳入某个具体版本。

## 7. 用户反馈摘要

今日 Issue 没有评论，无法提炼真实用户反馈、具体使用场景或满意/不满意评价。

现有信息仅能确认：

- 提案者认为仓库当前大量使用 commit SHA 固定 Action 依赖，已经完成较关键的安全工作；
- 其希望进一步利用 GitHub 官方工作流依赖锁文件增强依赖管理；
- 当前讨论尚未披露实际用户遭遇的 CI 故障、部署阻塞或业务损失，因此不应将 [Issue #8170](https://github.com/nearai/ironclaw/issues/8170) 解读为已发生的用户事故。

## 8. 待处理积压

### 今日新增待处理事项

- **[Issue #8170：添加 `actions.lock` 与两个依赖固定项刷新](https://github.com/nearai/ironclaw/issues/8170)**
  - 当前为 Open；
  - 无评论、无点赞、无维护者结论；
  - 尚无关联实现 PR；
  - 建议维护者明确锁文件方案是否存在平台或仓库层面的阻塞，并给出是否采纳、拆分实施或转交 PR 的结论。

### 长期积压情况

提供的数据仅覆盖过去 24 小时，未包含更长时间范围内的未响应 Issue/PR 列表，因此无法可靠识别具体长期积压项目。不能将“无 PR 更新”直接等同于仓库没有长期积压。

---

## 今日结论

IronClaw 今日没有功能交付或版本发布，项目处于低活动状态。唯一值得关注的进展是 [Issue #8170](https://github.com/nearai/ironclaw/issues/8170) 对 GitHub Actions 依赖锁文件与固定项刷新的安全加固提案。整体无新增稳定性风险，但该提案尚无讨论结论和实现 PR，建议尽快确认技术可行性并明确后续负责人。

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI 项目动态日报

**日期：2026-11-13**  
**仓库：** [netease-youdao/LobsterAI](https://github.com/netease-youdao/LobsterAI)

## 1. 今日速览

过去24小时内，仓库有 **17 条 PR 更新**，其中 **16 条已合并或关闭、1 条待合并**，Issues 更新和版本发布均为 0。  
今日开发重点集中在 **PPT 首页体验、Cowork 会话交互、模型上下文窗口、OpenClaw 稳定性及 macOS/Windows 打包发布**，功能推进与问题修复并行。  
整体活跃度较高，说明项目正处于较密集的迭代与发布准备阶段；但当前缺少公开版本发布和 Issue 讨论数据，尚无法评估外部用户反馈强度。  
唯一待合并 PR 为 [#3072](https://github.com/netease-youdao/LobsterAI/pull/3072)，将 PPT 首页从文字快捷入口升级为可配置、可视化示例引导的封面创建流程。  
从变更结构看，项目正同时完善 AI 助手核心能力、Cowork 多智能体体验、模型配置能力和工程发布链路，综合健康度评估为 **良好**。

---

## 3. 项目进展

### 3.1 PPT：从文字入口升级为可视化封面创建

- **[#3072](https://github.com/netease-youdao/LobsterAI/pull/3072) — 待合并**
  - 将 PPT 首页的文本快捷方式替换为可配置的可视化示例。
  - 用户可打开示例卡片，直接套用预置内容或自行定制，并创建匹配的可编辑封面，随后继续生成完整演示文稿。
  - 图片生成仍作为首页默认标签页。
  - **影响：** 降低 PPT 创作入口的理解成本，强化从灵感示例到可编辑成品的闭环。

### 3.2 模型能力：支持最高 1M 上下文窗口选择

- **[#3059](https://github.com/netease-youdao/LobsterAI/pull/3059) — 已关闭**
  - 支持符合条件的托管模型和预设显式选择上下文窗口，最高可达 **1M**。
  - 未显式选择时继续使用模型默认值；重置选择后可恢复默认行为。
  - 同时调整模型详情和设置界面的上下文窗口展示与配置逻辑。
  - **影响：** 为长文档处理、大规模代码库分析和超长会话提供更明确的用户控制权。

### 3.3 Cowork：会话模型、任务停止与历史浏览稳定性提升

- **[#3071](https://github.com/netease-youdao/LobsterAI/pull/3071) — 已关闭**
  - 修复旧会话仍绑定已不可用模型时，重新选择 “Fast” 无效的问题。
  - 现在重新选择无效预设会通过既有会话模型选择流程解析可用模型。
  - **诉求背景：** 模型目录动态变化后，历史会话的预设绑定可能失效，需要具备自恢复能力。

- **[#3064](https://github.com/netease-youdao/LobsterAI/pull/3064) — 已关闭**
  - 修复召唤专家时错误选择自定义模型、与新建任务默认模型不一致的问题。
  - 召唤流程改为复用新建任务的模型选择逻辑，继承套餐模型、自定义模型及思考档位，并保留模型可用性校验。
  - 手动设置过或历史专家继续保留独立选择，用户可重新开启继承。
  - 优化未登录用户登录后的专家召唤恢复、离开专家广场后的任务取消，以及欢迎任务抢占专家页面的问题。
  - **影响：** 统一“新建任务”和“召唤专家”的模型选择语义，减少跨流程配置不一致。

- **[#3053](https://github.com/netease-youdao/LobsterAI/pull/3053) — 已关闭**
  - 修复停止任务后额度信息丢失，或仅显示额度但缺少正常回复操作按钮的问题。
  - 已停止轮次现在可保留时间戳、模型、额度、Fork 和复制等操作，即使没有最终回复。
  - **影响：** 改善任务停止后的状态可追溯性和成本透明度。

- **[#3055](https://github.com/netease-youdao/LobsterAI/pull/3055) — 已关闭**
  - 修复点击“Add to chat”后输入框光标消失的问题。
  - 调整聚焦时序，使清空选中文本与恢复输入焦点不再相互干扰。
  - **影响：** 改善追问编辑体验，属于低风险、高频交互细节优化。

- **[#3054](https://github.com/netease-youdao/LobsterAI/pull/3054) — 已关闭**
  - 修复向上浏览历史会话时，懒加载消息展开或旧消息前置造成页面滚动跳动。
  - 在布局变化、分页和部分轮次状态变化时保持可见消息位置。
  - **影响：** 提升长会话阅读连续性，降低历史记录浏览中的迷失感。

- **[#3052](https://github.com/netease-youdao/LobsterAI/pull/3052) — 已关闭**
  - 修复 Cowork 搜索预取阶段空结果导致的布局偏移。
  - **影响：** 降低界面抖动，改善搜索体验稳定性。

- **[#3062](https://github.com/netease-youdao/LobsterAI/pull/3062) — 已关闭**
  - 修复旧会话切换模型后，已完成回复的朗读按钮消失、无法继续朗读的问题。
  - 朗读资格改为依据最后一次成功执行轮次判断，而非简单取最后一个展示段落。
  - 保留对失败、停止、流式输出和运行中子任务的限制。
  - **影响：** 兼容模型切换场景，增强历史会话内容可访问性。

### 3.4 OpenClaw：专家生命周期、网关启动和上下文校验修复

- **[#3065](https://github.com/netease-youdao/LobsterAI/pull/3065) — 已关闭**
  - 修复删除预设专家后复用固定实例 ID 导致身份冲突的问题。
  - 新建预设专家改用独立实例 ID，已有实例继续按 `presetId` 复用，以保留用户设置。
  - 删除操作进入配置同步队列，网关侧先确认删除，再清理本地记录。
  - 网关失败时保留本地记录和工作目录文件，供后续重试。
  - **影响：** 增强专家创建、复用、删除与同步流程的数据一致性。

- **[#3068](https://github.com/netease-youdao/LobsterAI/pull/3068) — 已关闭**
  - 修复上下文窗口选择补丁引入的发布打包回归。
  - 调整预检压缩校验逻辑，适配 `#3059` 移除的 resolver 和调用点。
  - **影响：** 避免 1M 上下文功能影响发布流水线，属于明确的回归修复。

- **[#3066](https://github.com/netease-youdao/LobsterAI/pull/3066) — 已关闭**
  - 仅在配置 xAI provider 时启用内置 `xai` 插件，避免陈旧配置导致插件持续开启。
  - 在打包时生成精简的 `dist/package.json`，减少 Node 对根目录 `exports` 的重复解析。
  - 进一步收窄 OpenClaw 网关启动范围并优化相关环境配置。
  - **影响：** 降低网关冷启动开销，减少无效插件加载。

### 3.5 工程能力：CI、缓存、打包与遥测

- **[#3069](https://github.com/netease-youdao/LobsterAI/pull/3069) — 已关闭**
  - 将相互独立的 CI 检查并行化，避免串行等待。
  - 应用只构建一次，减少重复构建成本。
  - 使用已提交的依赖图并配置范围受控的下载缓存，替代反复恢复 npm 数据。
  - **影响：** 有望缩短 PR 检查耗时，改善主干开发效率。

- **[#3067](https://github.com/netease-youdao/LobsterAI/pull/3067) — 已关闭**
  - 修复 macOS 上 codown 应用出现 `Restricted entitlements not validated` / `No matching profile found` 的启动失败。
  - 处理启动后 POPO 全局升级 Fabric CLI、修改 Electron Helper.app 并破坏应用签名的问题。
  - **影响：** 同时覆盖签名、权限和外部工具升级对正式应用完整性的影响。

- **[#3056](https://github.com/netease-youdao/LobsterAI/pull/3056) — 已关闭**
  - 设置 `mac.notarize=false`，避免 electron-builder 内置 notarizer 与自定义 `afterSign` 流程重复公证。
  - **影响：** 降低 macOS 打包发布失败风险，并补充回归覆盖。

- **[#3070](https://github.com/netease-youdao/LobsterAI/pull/3070) — 已关闭**
  - 新增 Windows 标准 NSIS 卸载事件 `lobsterai_app_uninstalled`。
  - 通过现有有道分析端点上报，可按日期、安装 UUID 和客户端版本聚合。
  - **影响：** 补齐 Windows 卸载遥测，为留存分析和版本质量评估提供数据。

- **[#3063](https://github.com/netease-youdao/LobsterAI/pull/3063) — 已关闭**
  - 桌面横幅链接现在可打开应用内支持的设置页和主视图。
  - 启动广告弹窗宽度支持服务端配置，范围为 **320–960 px**，默认 400 px，并保留视口限制。
  - **影响：** 提升运营配置灵活性和应用内导流能力。

---

## 4. 社区热点

由于本次数据中 **评论数、点赞数均为 0 或未提供**，无法按真实社区互动量识别热门 Issue/PR。以下按今日更新价值和涉及范围列出重点条目：

1. **[#3072](https://github.com/netease-youdao/LobsterAI/pull/3072)** — PPT 可视化示例与引导式封面创建  
   - 今日唯一待合并 PR，直接影响新用户首屏体验和 PPT 转化链路。
   - 背后的核心诉求是降低“如何开始制作 PPT”的认知门槛。

2. **[#3059](https://github.com/netease-youdao/LobsterAI/pull/3059)** — 最高 1M 上下文窗口  
   - 面向长文档、复杂代码库和长会话场景，是模型能力的重要扩展。
   - 已触发的打包回归由 [#3068](https://github.com/netease-youdao/LobsterAI/pull/3068) 跟进修复。

3. **[#3065](https://github.com/netease-youdao/LobsterAI/pull/3065)** — 专家删除后的身份冲突与网关同步失败  
   - 同时涉及本地数据、OpenClaw 身份保护和同步重试，是今日较重要的稳定性修复。

4. **[#3067](https://github.com/netease-youdao/LobsterAI/pull/3067)** — macOS 启动授权和应用签名修复  
   - 直接影响正式应用启动，涉及签名、权限与第三方 CLI 升级链。

5. **[#3070](https://github.com/netease-youdao/LobsterAI/pull/3070)** — Windows 卸载遥测  
   - 虽非直接用户功能，但为后续分析卸载率、版本分布和留存问题提供基础数据。

> 社区互动数据不足，无法判断用户对上述需求的优先级共识。建议维护者在合并 [#3072](https://github.com/netease-youdao/LobsterAI/pull/3072) 前补充产品验收和视觉回归检查。

---

## 5. Bug 与稳定性

### 严重

1. **macOS 应用无法启动／签名失效**
   - PR：**[#3067](https://github.com/netease-youdao/LobsterAI/pull/3067)**
   - 表现包括 `Restricted entitlements not validated`、`Code=-413 "No matching profile found"`；外部 Fabric CLI 升级还可能修改 Electron Helper.app 并破坏签名。
   - **状态：已有修复 PR，已关闭。**
   - **风险提示：** 涉及正式应用分发与启动，建议在下一版本前验证升级安装、全新安装和辅助进程签名。

2. **OpenClaw 专家删除后身份冲突、网关同步失败**
   - PR：**[#3065](https://github.com/netease-youdao/LobsterAI/pull/3065)**
   - 删除后的固定 ID 与历史身份记录冲突，可能导致专家无法再次召唤、图片示例不可用，并持续重试配置同步。
   - **状态：已有修复 PR，已关闭。**

### 中等

3. **上下文窗口选择引发发布打包回归**
   - PR：**[#3068](https://github.com/netease-youdao/LobsterAI/pull/3068)**
   - 预检压缩验证器仍依赖 `#3059` 已移除的 resolver 和调用点，导致发布打包失败。
   - **状态：已有修复 PR，已关闭。**

4. **macOS 重复公证**
   - PR：**[#3056](https://github.com/netease-youdao/LobsterAI/pull/3056)**
   - electron-builder 内置流程和自定义 `afterSign` 流程可能同时执行 notarization。
   - **状态：已有修复 PR，已关闭。**

5. **旧会话绑定不可用模型，重新选择预设无效**
   - PR：**[#3071](https://github.com/netease-youdao/LobsterAI/pull/3071)**
   - **状态：已有修复 PR，已关闭。**

6. **召唤专家时模型选择与新建任务不一致**
   - PR：**[#3064](https://github.com/netease-youdao/LobsterAI/pull/3064)**
   - **状态：已有修复 PR，已关闭。**

### 轻微

7. **停止任务后额度或回复操作缺失**
   - PR：**[#3053](https://github.com/netease-youdao/LobsterAI/pull/3053)**
   - **状态：已有修复 PR，已关闭。**

8. **旧会话切换模型后朗读按钮消失**
   - PR：**[#3062](https://github.com/netease-youdao/LobsterAI/pull/3062)**
   - **状态：已有修复 PR，已关闭。**

9. **历史会话浏览滚动跳动**
   - PR：**[#3054](https://github.com/netease-youdao/LobsterAI/pull/3054)**
   - **状态：已有修复 PR，已关闭。**

10. **搜索预取时页面布局偏移**
    - PR：**[#3052](https://github.com/netease-youdao/LobsterAI/pull/3052)**
    - **状态：已有修复 PR，已关闭。**

11. **“Add to chat”后输入光标丢失**
    - PR：**[#3055](https://github.com/netease-youdao/LobsterAI/pull/3055)**
    - **状态：已有修复 PR，已关闭。**

---

## 6. 功能请求与路线图信号

### 高概率进入下一版本

1. **PPT 首页可视化引导**
   - 依据：**[#3072](https://github.com/netease-youdao/LobsterAI/pull/3072)** 已开放且实现范围完整。
   - 下一版本重点可能是补齐示例配置、异常配置兜底、首页视觉回归测试及首次使用引导。

2. **长上下文模型能力**
   - 依据：**[#3059](https://github.com/netease-youdao/LobsterAI/pull/3059)** 已完成主体功能，**[#3068](https://github.com/netease-youdao/LobsterAI/pull/3068)** 已修复发布回归。
   - 下一版本可能进一步明确模型资格列表、默认值、重置行为和托管服务限制。

3. **专家模型继承与生命周期治理**
   - 依据：**[#3064](https://github.com/netease-youdao/LobsterAI/pull/3064)**、**[#3065](https://github.com/netease-youdao/LobsterAI/pull/3065)**。
   - 方向包括模型选择继承开关、专家删除重试、工作目录保留和配置同步可靠性。

4. **应用内运营与遥测能力**
   - 依据：**[#3063](https://github.com/netease-youdao/LobsterAI/pull/3063)**、**[#3070](https://github.com/netease-youdao/LobsterAI/pull/3070)**。
   - 横幅深链和 Windows 卸载事件将提高运营配置和版本质量分析能力。

### 需要进一步确认

1. **高上下文窗口对压缩策略、额度消耗和响应时延的影响**
   - 已有 1M 配置能力，但需要明确长上下文下的预检压缩、计费提示和性能反馈。
   - 相关 PR：**[#3059](https://github.com/netease-youdao/LobsterAI/pull/3059)**、**[#3068](https://github.com/netease-youdao/LobsterAI/pull/3068)**。

2. **PPT 示例的可配置范围**
   - PR 已提出服务端可配置示例，但需进一步确认配置来源、审核机制、失效兜底及图片生成与 PPT 入口的优先级。
   - 相关 PR：**[#3072](https://github.com/netease-youdao/LobsterAI/pull/3072)**。

3. **专家删除后的跨端一致性**
   - 修复方案在网关失败时保留本地记录，后续需验证多端登录、离线删除、重复删除和恢复策略。
   - 相关 PR：**[#3065](https://github.com/netease-youdao/LobsterAI/pull/3065)**。

---

## 7. 用户反馈摘要

过去24小时无公开 Issue 评论或新增 Issue，无法从评论中提炼新的用户原声、满意度评价或具体使用场景。

根据已关闭 PR 的问题描述，可归纳出以下真实使用痛点：

- **模型目录变化与历史会话不兼容：** 旧会话保留已下线模型绑定，用户重新选择预设也无效；期望会话能够自动恢复至可用模型。
- **专家召唤与普通任务行为不一致：** 用户希望召唤专家时自动继承新建任务的模型、套餐及思考档位，同时保留手动覆盖能力。
- **停止任务后状态不完整：** 用户不仅需要任务停止，也需要继续查看该轮消耗、时间、模型及复制/Fork 等操作。
- **长会话阅读体验不稳定：** 向上翻阅历史时页面跳动、旧回复无法朗读，会直接影响长会话的连续使用和内容复用。
- **发布版本启动与签名问题：** macOS 权限或签名异常属于阻断级问题，会直接阻止用户进入应用。
- **PPT 创作缺乏直观起点：** 用户需要从可观察的示例卡片快速进入编辑流程，而不是先理解文字指令并自行组织内容。

以上属于基于修复目标的间接归纳，不能替代真实 Issue 评论分析。

---

## 8. 待处理积压

### 待合并 PR

- **[#3072](https://github.com/netease-youdao/LobsterAI/pull/3072)** — PPT 首页可视化示例与引导式封面创建  
  - 今日唯一待合并项。
  - 建议优先确认：示例配置格式、不可用示例的降级策略、首次使用体验、可编辑封面的生成质量及图片生成默认标签是否保留。

### 长期积压

- 本次数据未提供长期未更新的 Issue 或 PR，且过去24小时 Issues 更新为 0，因此无法识别历史未响应事项。
- 建议补充以下积压视图后再判断：
  - 超过 30/60/90 天未更新的开放 Issue；
  - 超过 14 天无维护者响应的开放 PR；
  - 带有 `help wanted`、`bug`、`regression`、`security` 或 `needs-decision` 标签的事项；
  - 与 [#3072](https://github.com/netease-youdao/LobsterAI/pull/3072) 相似、可能重复的 PPT 入口需求。

---

## 总体健康度判断

**综合状态：良好，迭代活跃。**

- **开发吞吐高：** 24小时内处理 17 条 PR，16 条完成合并或关闭。
- **功能覆盖广：** 同时推进 PPT、模型长上下文、专家智能体、Cowork、遥测和发布工程。
- **稳定性投入明显：** 大量 PR 聚焦模型失效、滚动跳动、朗读、专家同步、macOS 签名和打包回归。
- **主要风险：** PR 数量高但无版本发布，需防止修复在发布前积压；[#3072](https://github.com/netease-youdao/LobsterAI/pull/3072) 尚待合并，macOS/Windows 打包链路仍需系统性验证。
- **数据盲区：** 缺少 Issues、评论、点赞、版本发布与回归率数据，无法完整评价用户满意度及线上质量。

</details>

<details>
<summary><strong>QwenPaw</strong> — <a href="https://github.com/agentscope-ai/QwenPaw">agentscope-ai/QwenPaw</a></summary>

# QwenPaw 项目动态日报

**统计日期：2026-11-13**  
**数据范围：过去 24 小时 GitHub Issues / Pull Requests 更新**

---

## 1. 今日速览

过去 24 小时项目共更新 **19 条 Issues** 和 **42 条 PR**，其中仍有 **31 条 PR 待合并**、**16 条 Issue 保持开放**，反映出当前开发活动较高，但代码评审和缺陷收敛压力也明显。  
今日 Issue 主要集中在 **2.3.0 升级后的渠道插件、附件路径、认证安全与安装兼容性**，同时暴露出 cron 用量统计、上下文压缩和 DoomLoopGate 等长期稳定性问题。  
PR 侧已有多项针对关键问题的修复在推进，包括 cron token 持久化、DoomLoopGate 记录、安装镜像、插件更新、媒体降采样及桌面端错误提示等，但多数仍未合并。  
今日无新版本发布，当前更接近“**2.3.0 发布后的集中修复与回归治理阶段**”；项目健康度评估为：**活跃度较高，但发布后回归面较大，合并效率与安全修复优先级需要提升**。

---

## 3. 项目进展

### 3.1 已合并 / 关闭的重要 PR

今日数据中未提供具体已合并 PR 的标题和变更明细，能够确认处于关闭状态的 PR 主要包括：

- [PR #8607 — 保留工具 schema 中布尔类型的 `additionalProperties`](https://github.com/agentscope-ai/QwenPaw/pull/8607)  
  该 PR 标记为 **Closed / Under Review**。其目标是避免将 `additionalProperties: false` 错误改写为嵌套的 `not` schema，降低工具调用参数被模型提供端拒绝的风险。该改动已关闭但从现有数据无法确认是否以合并方式落地，建议维护者核对最终提交状态。

- [PR #8691 — 刷新已完成会话并显示 favicon 状态](https://github.com/agentscope-ai/QwenPaw/pull/8691)  
  PR 已关闭，目标是改善 Console 会话完成后的状态刷新及站点图标显示。不过当前摘要仍保留模板占位内容，无法可靠判断最终合入范围，建议在关闭记录中补充最终实现说明。

### 3.2 正在推进的重要 PR

虽然以下 PR 尚未合并，但已形成较清晰的功能和修复覆盖面：

- [PR #8707 — 将 cron 与 heartbeat 的 token 用量写入 turn records](https://github.com/agentscope-ai/QwenPaw/pull/8707)  
  对应 [Issue #8705](https://github.com/agentscope-ai/QwenPaw/issues/8705)。修复定时任务绕过 `Channel.consume_one`、导致 token 消耗未进入 `turns.jsonl` 的问题，直接提升用量统计的完整性和可归因性。

- [PR #8702 — 将被 DoomLoopGate 终止的 cron 运行记录为错误](https://github.com/agentscope-ai/QwenPaw/pull/8702)  
  对应 [Issue #8184](https://github.com/agentscope-ai/QwenPaw/issues/8184)。当前 cron 执行器可能将 gate 中止误判为成功，该修复有助于避免任务状态和监控数据失真。

- [PR #8701 — 识别追加到同一条 assistant 消息中的工具调用](https://github.com/agentscope-ai/QwenPaw/pull/8701)  
  对应 [Issue #8700](https://github.com/agentscope-ai/QwenPaw/issues/8700)。修复 agentscope 2.0.10 将多轮内容累积到同一消息后，DoomLoopGate 无法按迭代次数触发的问题。

- [PR #8704 — 使用用户选定的 PyPI 镜像创建 seeded venv](https://github.com/agentscope-ai/QwenPaw/pull/8704)  
  对应 [Issue #8698](https://github.com/agentscope-ai/QwenPaw/issues/8698)。修复 `uv venv --seed` 阶段绕过镜像配置、导致安装中断的问题，对网络受限环境尤其重要。

- [PR #8699 — 渠道插件更新、版本守卫与官方市场发布](https://github.com/agentscope-ai/QwenPaw/pull/8699)  
  为内置及官方渠道插件提供版本检测、更新动作和兼容性保护，并计划建设官方市场发布链路。这是渠道生态化的核心 PR，但变更规模为 XXL，评审和拆分压力较大。

- [PR #8632 — 对超大图片降采样并标记被剥离媒体](https://github.com/agentscope-ai/QwenPaw/pull/8632)  
  针对过大图片被模型端拒绝、恢复流程随后移除全部媒体的回归问题，可改善多模态请求的稳定性。

- [PR #8697 — 持久化桌面端早期启动错误并显示原生错误框](https://github.com/agentscope-ai/QwenPaw/pull/8697)  
  解决 Tauri 主窗口创建前失败时“无窗口、无提示、无日志”的可诊断性问题，属于重要的桌面端基础体验修复。

- [PR #8694 — 小艺渠道支持可选流式输出并强化传输层](https://github.com/agentscope-ai/QwenPaw/pull/8694)  
  增加执行状态反馈、WebSocket 独立重连、连接稳定后重置重试计数，并优化附件下载路径，属于渠道能力和健壮性同步增强。

- [PR #8708 — 改善平板端 Markdown 预览](https://github.com/agentscope-ai/QwenPaw/pull/8708)  
  修复竖屏平板预览区域过窄、复制/下载/关闭按钮溢出的问题，属于 Console 响应式体验优化。

- [PR #8133 — 修复聊天 Markdown 中 CJK 强调边界](https://github.com/agentscope-ai/QwenPaw/pull/8133)  
  解决 CommonMark 强调规则对中文标点和无空格 CJK 文本处理不佳的问题，影响中文对话的可读性。

- [PR #8487 — 识别工具结果折叠中的 URL 引用媒体](https://github.com/agentscope-ai/QwenPaw/pull/8487)  
  改善上下文压缩阶段对媒体型工具结果的识别和折叠，减少历史内容膨胀。

- [PR #8512 — 从网关错误文本中提取状态码](https://github.com/agentscope-ai/QwenPaw/pull/8512)  
  提升 OpenAI 兼容网关在流式过程中返回错误时的状态识别能力，有助于重试和故障分类。

- [PR #8268 — 限制任务完成回调并确保清理](https://github.com/agentscope-ai/QwenPaw/pull/8268)  
  修复完成回调挂起或取消后，`TaskTracker._runs` 永远保留运行记录的问题，可降低任务状态“永久 running”的风险。

- [PR #8295 — 在展示边界隐藏注入上下文标记](https://github.com/agentscope-ai/QwenPaw/pull/8295)  
  避免框架内部控制标记被直接呈现给渠道用户，提升消息输出的干净程度。

### 3.3 整体推进判断

上述修复覆盖了插件生命周期、渠道启动、cron 统计、循环终止、上下文管理、附件与媒体、安装器、桌面端诊断等关键链路，说明维护者正集中处理 2.3.0 后的系统性回归。  
但 **31 条 PR 待合并**，且多项高优先级修复仍处于 Open 状态；若发布节奏快于修复收敛速度，下一版本可能继续累积兼容性风险。

---

## 4. 社区热点

> 今日 Issues 中评论最多的是 [#2306](https://github.com/agentscope-ai/QwenPaw/issues/2306)，共 12 条评论；PR 列表未提供有效评论数，因此无法进行跨类型精确排名。

### Issues 热点

1. [#2306 — 定时任务整理 Memory 文件时被莫名中断](https://github.com/agentscope-ai/QwenPaw/issues/2306) · **12 条评论**  
   用户反馈 cron 中途停止，频道回复也显示任务未完成，控制台则显示模型回复被打断。  
   **背后诉求：** 用户需要定时任务具备可观测、可重试和明确失败语义，避免“频道显示失败但实际执行结果不透明”。

2. [#8538 — 多工作区启用 Matrix 时插件无法激活](https://github.com/agentscope-ai/QwenPaw/issues/8538) · **6 条评论**  
   多工作区共享 10 秒启动窗口导致后续 Matrix 账号无法上线。  
   **背后诉求：** 插件启动必须支持多租户、多工作区并发，且不能依赖全局时间窗口串行启动。

3. [#8669 — 飞书渠道启动竞态导致 CHANNEL_NOT_CONNECTED](https://github.com/agentscope-ai/QwenPaw/issues/8669) · **5 条评论**  
   初始 `platform_state="disconnected"` 被误当作致命错误，表现为每次启动均失败。  
   **背后诉求：** 渠道状态机需要区分“尚未连接”和“连接失败”，并消除初始化竞态。

4. [#8312 — 上下文控制失效导致任务中断](https://github.com/agentscope-ai/QwenPaw/issues/8312) · **5 条评论**  
   上下文压缩后仍可能超过模型窗口，引发 `MODEL CONTEXT LENGTH EXCEEDED`。  
   **背后诉求：** 在请求进入模型前提供更可靠的 token 预算管理和强制降级机制。

5. [#8184 — DoomLoopGate 终止合法轮询并错误记录 cron 成功](https://github.com/agentscope-ai/QwenPaw/issues/8184) · **4 条评论**  
   合法等待后台任务也被识别成死循环，随后 cron 又把终止结果记为成功。  
   **背后诉求：** 循环检测需要理解任务意图与后台任务状态，错误状态必须准确落盘。

### PR 热点

- [PR #8694 — 小艺渠道流式输出与传输强化](https://github.com/agentscope-ai/QwenPaw/pull/8694)  
  涉及渠道连接稳定性、执行状态反馈和附件处理，是今日较受关注的功能型 PR。

- [PR #8699 — 渠道插件更新、版本守卫与官方市场](https://github.com/agentscope-ai/QwenPaw/pull/8699)  
  直接影响插件发布、升级和兼容性治理，战略价值较高，但改动规模大。

- [PR #8632 — 超大媒体降采样与剥离标记](https://github.com/agentscope-ai/QwenPaw/pull/8632)  
  面向模型拒绝超大图片后的恢复路径，属于直接影响日常使用成功率的问题。

---

## 5. Bug 与稳定性

### 严重级别：P0 / 高

1. **同主机反向代理绕过 API 认证**  
   [Issue #8695](https://github.com/agentscope-ai/QwenPaw/issues/8695)  
   在启用认证后，经同主机反向代理到达后端的请求可能因 loopback 白名单和空 `trusted_proxies` 配置被当作本地 CLI 请求，跳过 bearer token 校验。  
   **影响：** 可能造成未授权访问，尤其适用于生产部署或多人共享环境。  
   **Fix PR：** 当前展示的 PR 列表中未见明确对应修复，建议按安全事件优先处理。

2. **微信渠道无法启动并伴随发送结果未知**  
   [Issue #8709](https://github.com/agentscope-ai/QwenPaw/issues/8709)、[Issue #8693](https://github.com/agentscope-ai/QwenPaw/issues/8693)  
   渠道启动路径与 workspace projection 争用同一 runtime key，产生 `ACCOUNT_IN_USE`；部分成功发送又被报告为 `PLATFORM_RESULT_UNKNOWN`。  
   **影响：** 微信渠道不可用、消息投递状态不可信。  
   **Fix PR：** 未见明确对应的微信专用修复；[PR #8699](https://github.com/agentscope-ai/QwenPaw/pull/8699) 涉及插件更新机制，但不能替代 runtime key 冲突修复。

3. **官方渠道插件在 Linux 启动崩溃**  
   [Issue #8682](https://github.com/agentscope-ai/QwenPaw/issues/8682)  
   launcher 与 worker bootstrap 未传递 `HOME` / `QWENPAW_WORKING_DIR`，导致无法确定 home directory。  
   **影响：** 官方插件在 Linux 环境无法启动。  
   **Fix PR：** 当前列表中未见明确对应 PR。

4. **渠道插件升级后未迁移内置插件源码**  
   [Issue #8684](https://github.com/agentscope-ai/QwenPaw/issues/8684)  
   升级到 2.3.0 后，已安装 Matrix 插件仍保留旧源码，2.3.0 中相关修复无法生效。  
   **影响：** 用户虽然升级主程序，但关键渠道缺陷仍然存在。  
   **Fix PR：** [PR #8699](https://github.com/agentscope-ai/QwenPaw/pull/8699) 可能覆盖部分更新机制，建议确认是否包含“内置插件迁移/强制更新”逻辑。

### 严重级别：P1 / 中高

5. **附件路径被截断或无法解析**  
   [Issue #8655](https://github.com/agentscope-ai/QwenPaw/issues/8655)：Windows 附件路径被截断到 `C:\`，图片无法加载。  
   [Issue #8696](https://github.com/agentscope-ai/QwenPaw/issues/8696)：工作区路径包含 `#` 时附件无法解析。  
   **影响：** 多模态输入在 Windows 和特殊路径下不可用。  
   **Fix PR：** 当前列表中未见明确对应修复；[PR #8632](https://github.com/agentscope-ai/QwenPaw/pull/8632) 只处理超大图片，不能替代路径修复。

6. **上下文压缩后仍超过模型窗口**  
   [Issue #8312](https://github.com/agentscope-ai/QwenPaw/issues/8312)  
   压缩结果仍大于模型输入窗口，造成任务中断。  
   **Fix PR：** [PR #8487](https://github.com/agentscope-ai/QwenPaw/pull/8487) 改善媒体型工具结果折叠，但尚不足以证明已完整解决 token 超限。

7. **DoomLoopGate 误杀合法轮询且误报成功**  
   [Issue #8184](https://github.com/agentscope-ai/QwenPaw/issues/8184)、[Issue #8700](https://github.com/agentscope-ai/QwenPaw/issues/8700)  
   前者是合法后台轮询被终止，后者是同一条 assistant 消息累积工具调用时 gate 不触发。  
   **Fix PR：**  
   - [PR #8702](https://github.com/agentscope-ai/QwenPaw/pull/8702)：修复 cron 误记成功。  
   - [PR #8701](https://github.com/agentscope-ai/QwenPaw/pull/8701)：修复工具调用累积时 gate 不触发。  
   - 对“合法轮询误杀”的直接修复尚未在列表中出现。

8. **cron 与 heartbeat token 用量未写入 turns.jsonl**  
   [Issue #8705](https://github.com/agentscope-ai/QwenPaw/issues/8705)  
   控制台用量面板漏计自动任务消耗。  
   **Fix PR：** [PR #8707](https://github.com/agentscope-ai/QwenPaw/pull/8707)，待合并。

### 严重级别：P2 / 中

9. **Matrix 多工作区启动失败**  
   [Issue #8538](https://github.com/agentscope-ai/QwenPaw/issues/8538) · 已关闭  
   表明问题已有处理轨迹，但需要确认修复是否进入正式发布。

10. **飞书启动竞态导致每次启动失败**  
    [Issue #8669](https://github.com/agentscope-ai/QwenPaw/issues/8669) · 已关闭  
    建议验证状态机修复是否覆盖桌面版 Windows 打包环境。

11. **升级 2.3.0 时 seeded venv 未使用选定镜像**  
    [Issue #8698](https://github.com/agentscope-ai/QwenPaw/issues/8698)  
    **Fix PR：** [PR #8704](https://github.com/agentscope-ai/QwenPaw/pull/8704)，待合并。

12. **创作助手输入逐键卡顿**  
    [Issue #8706](https://github.com/agentscope-ai/QwenPaw/issues/8706)  
    AgentDock 每次输入都重新渲染并解析全部 Markdown，缺少 memoization。  
    **Fix PR：** 当前列表中未见对应修复。

13. **Creation Assistant 输入延迟及平板预览异常**  
    平板预览问题已有 [PR #8708](https://github.com/agentscope-ai/QwenPaw/pull/8708) 修复；创作助手性能问题仍待处理。

14. **空流 EOF 后不自动重试**  
    [Issue #8711](https://github.com/agentscope-ai/QwenPaw/issues/8711)  
    HTTP 200 流正常结束但没有正文或只有 thinking 内容时，当前不会自动重试。  
    **性质：** 稳定性增强请求，尚未见对应 Fix PR。

15. **深层路径检查误判 Python heredoc 中的 `~,`**  
    [Issue #8688](https://github.com/agentscope-ai/QwenPaw/issues/8688)  
    shell 路径启发式误解析合法代码片段，导致路径检查中断。  
    **Fix PR：** 当前列表中未见对应修复。

---

## 6. 功能请求与路线图信号

### 6.1 渠道会话绑定与会话切换

[Issue #8710 — 为消息渠道提供按会话隔离、切换和真正重置的能力](https://github.com/agentscope-ai/QwenPaw/issues/8710)

当前一个传输身份被永久映射到一个 conversation；微信中的 `session_id` 固定为 `wechat:<sender_id>`，用户无法：

- 开启第二个对话；
- 返回旧会话；
- 让 `/new` 真正生成干净 session；
- 通过 `/chats`、`/switch` 管理多个会话。

**路线图判断：高概率纳入下一版本。**  
这是渠道产品模型层面的核心缺口，与已有多会话需求高度一致。现有 PR 中尚未看到完整实现，但可能作为渠道框架下一阶段重点。

### 6.2 HTTP 200 空响应自动重试

[Issue #8711 — RetryChatModel 对空流或仅 thinking 的 EOF 自动重试一次](https://github.com/agentscope-ai/QwenPaw/issues/8711)

**路线图判断：中高概率。**  
改动范围明确、风险可控，属于模型调用层常见的健壮性增强，也可减少“请求成功但用户没有收到答案”的静默失败。

### 6.3 官方渠道插件更新与市场体系

[PR #8699](https://github.com/agentscope-ai/QwenPaw/pull/8699) 已释放明确信号：

- 检测捆绑插件版本与已安装版本差异；
- 提供插件更新动作；
- 在不直接导入 driver 的情况下读取静态元数据；
- 增加版本守卫；
- 推动官方 marketplace 发布。

**路线图判断：已明确进入实施阶段。**  
但 XXL 规模意味着必须完成拆分、兼容性测试和升级迁移验证，尤其要覆盖 [Issue #8684](https://github.com/agentscope-ai/QwenPaw/issues/8684) 所述旧插件源码残留问题。

### 6.4 小艺渠道流式输出

[PR #8694](https://github.com/agentscope-ai/QwenPaw/pull/8694)

新增执行前 `Working...`、完成后 `Done`，以及 WebSocket 独立重连和稳定连接后的重试计数重置。

**路线图判断：已进入 PR 阶段。**  
预计可作为渠道体验统一规范的一部分，但需要明确“流式输出”和状态提示在其他渠道上的兼容策略。

### 6.5 插件市场与渠道生态统一

结合 [Issue #8538](https://github.com/agentscope-ai/QwenPaw/issues/8538)、[#8669](https://github.com/agentscope-ai/QwenPaw/issues/8669)、[#8682](https://github.com/agentscope-ai/QwenPaw/issues/8682) 和 [#8684](https://github.com/agentscope-ai/QwenPaw/issues/8684)，项目正在从内置渠道实现转向官方插件架构。下一阶段的核心不只是“支持更多渠道”，而是建立：

- 插件安装、升级和版本兼容标准；
- 多工作区隔离与并发启动；
- 稳定的状态机和错误恢复；
- 跨 Linux、Windows、桌面打包环境的 worker bootstrap；
- 内置插件向插件包的可靠迁移。

---

## 7. 用户反馈摘要

### 7.1 主要使用场景

- **定时任务与 Memory 整理**：用户依赖 cron 自动执行长期维护任务，并要求失败可追踪、可重试。  
  参考：[Issue #2306](https://github.com/agentscope-ai/QwenPaw/issues/2306)。

- **多渠道消息接入**：微信、飞书、Matrix、小艺等渠道承担日常沟通入口，用户最关心启动成功率、消息送达状态和会话连续性。  
  参考：[Issue #8709](https://github.com/agentscope-ai/QwenPaw/issues/8709)、[#8710](https://github.com/agentscope-ai/QwenPaw/issues/8710)。

- **多模态附件处理**：用户会上传图片并期望模型正确读取；Windows 路径、含 `#` 路径和超大图片是高频触发条件。  
  参考：[Issue #8655](https://github.com/agentscope-ai/QwenPaw/issues/8655)、[#8696](https://github.com/agentscope-ai/QwenPaw/issues/8696)、[PR #8632](https://github.com/agentscope-ai/QwenPaw/pull/8632)。

- **长会话与自动化运行**：长对话压缩、后台轮询和重复工具调用直接影响任务是否能稳定完成。  
  参考：[Issue #8312](https://github.com/agentscope-ai/QwenPaw/issues/8312)、[#8184](https://github.com/agentscope-ai/QwenPaw/issues/8184)。

### 7.2 核心痛点

1. **“任务失败”但系统状态不准确**  
   cron 可能失败却记录成功，token 消耗也可能未计入账单。  
   参考：[Issue #8184](https://github.com/agentscope-ai/QwenPaw/issues/8184)、[PR #8702](https://github.com/agentscope-ai/QwenPaw/pull/8702)、[Issue #8705](https://github.com/agentscope-ai/QwenPaw/issues/8705)、[PR #8707](https://github.com/agentscope-ai/QwenPaw/pull/8707)。

2. **升级后功能反而不可用**  
   微信、Matrix、飞书和 Linux worker 的问题表明 2.3.0 的插件化迁移尚未完全覆盖真实部署环境。  
   参考：[Issue #8684](https://github.com/agentscope-ai/QwenPaw/issues/8684)、[#8693](https://github.com/agentscope-ai/QwenPaw/issues/8693)、[#8682](https://github.com/agentscope-ai/QwenPaw/issues/8682)。

3. **界面性能影响输入体验**  
   创作助手在长对话下逐键卡顿，说明 Console 在大历史量场景下仍存在重复解析与全量重渲染问题。  
   参考：[Issue #8706](https://github.com/agentscope-ai/QwenPaw/issues/8706)。

4. **中文 Markdown 展示质量仍需提升**  
   CJK 强调和窄屏预览问题直接影响中文用户阅读与复制。  
   参考：[PR #8133](https://github.com/agentscope-ai/QwenPaw/pull/8133)、[PR #8708](https://github.com/agentscope-ai/QwenPaw/pull/8708)。

### 7.3 满意度与积极信号

- 用户愿意提供控制台日志、截图、复现 commit、版本号和源码级分析，说明社区具备较强的问题定位能力。  
- [Issue #8711](https://github.com/agentscope-ai/QwenPaw/issues/8711) 对源码和运行日志进行了验证，并明确披露 AI 辅助，问题描述质量较高。  
- 已关闭的 [Issue #8538](https://github.com/agentscope-ai/QwenPaw/issues/8538) 与 [#8669](https://github.com/agentscope-ai/QwenPaw/issues/8669) 表明 Matrix 和飞书启动问题已有维护者响应。  
- 但评论中的核心情绪仍偏向“升级后出现回归”，尤其是插件渠道和 Windows/Linux 部署场景；后续应优先发布修复版本并提供升级核验说明。

---

## 8. 待处理积压

### 8.1 长期未关闭且评论较多

- [Issue #2306 — 定时任务整理 Memory 时被中断](https://github.com/agentscope-ai/QwenPaw/issues/2306)  
  创建于 2026-03-26，更新至今日并已有 12 条评论。该问题存续时间长、讨论充分，虽已关闭，但仍应确保根因进入可验证的自动化测试，尤其是 cron 中断恢复和结果落盘。

- [Issue #8312 — 上下文控制失效导致任务中断](https://github.com/agentscope-ai/QwenPaw/issues/8312)  
  创建于 2026-10-18，涉及核心模型窗口管理，且尚无明确完整 Fix PR。  
  **建议：** 明确 token 预算、压缩后重试与强制截断策略，并补增长会话回归测试。

- [Issue #8184 — DoomLoopGate 误杀合法轮询](https://github.com/agentscope-ai/QwenPaw/issues/8184)  
  创建于 2026-10-12。尽管 [PR #8702](https://github.com/agentscope-ai/QwenPaw/pull/8702) 可修复误记成功，但“合法轮询被终止”的直接机制仍未解决。

- [Issue #8133 对应 PR — CJK Markdown 强调修复](https://github.com/agentscope-ai/QwenPaw/pull/8133)  
  PR 创建于 2026-10-08，至今仍处于 Open / Under Review。对于中文产品，该问题长期未收敛的优先级偏高。

- [PR #8487 — 工具结果中的 URL 媒体折叠修复](https://github.com/agentscope-ai/QwenPaw/pull/8487)  
  创建于 2026-10-29，仍待合并。该问题与上下文压缩和长会话稳定性直接相关。

- [PR #8308 — 补充 provider 缺失时返回 404 的 API 测试](https://github.com/agentscope-ai/QwenPaw/pull/8308)  
  创建于 2026-10-18，长期停留在待审状态。测试本身改动较小，建议尽快评审，以免阻塞上游 catalog 测试同步。

### 8.2 需要重点清理的 PR 积压

当前有 **31 条 PR 待合并**，其中多个大改 PR 包含多个独立主题：

- [PR #8699](https://github.com/agentscope-ai/QwenPaw/pull/8699)：插件更新、版本守卫、市场发布；
- [PR #8694](https://github.com/agentscope-ai/QwenPaw/pull/8694)：流式输出、连接重连、附件下载；
- [PR #8632](https://github.com/agentscope-ai/QwenPaw/pull/8632)：媒体降采样、请求归一化、恢复路径；
- [PR #8133](https://github.com/agentscope-ai/QwenPaw/pull/8133)：Markdown 解析边界。

建议维护者：

1. 将 XXL PR 拆分为可独立测试的功能单元；
2. 优先合并安全、渠道启动、附件路径和 cron 状态类修复；
3. 对每个修复 PR 标注对应 Issue 和回归测试；
4. 对等待评审超过数周的 PR 给出初步结论，避免长期占用分支；
5. 为 2.3.0 后续补丁版本建立公开的已知问题与升级清单。

---

## 项目健康度结论

**健康度：中高，但处于发布后回归压力期。**

- **积极因素：** Issue 和 PR 活跃度高；社区复现信息丰富；插件更新、渠道稳定性、cron 可观测性、上下文折叠和桌面端诊断均有对应修复在推进。  
- **主要风险：** 2.3.0 插件化迁移带来的渠道启动回归较集中；认证绕过问题具有安全性质；31 条待审 PR 造成修复落地速度受限；cron 状态与用量统计存在数据可信度问题。  
- **建议优先级：**  
  1. 立即修复并评估 [Issue #8695](https://github.com/agentscope-ai/QwenPaw/issues/8695) 的认证绕过；  
  2. 优先合并微信、Matrix、飞书和 Linux worker 启动相关修复；  
  3. 完成 cron 状态与 token 用量闭环；  
  4. 修复 Windows 附件路径问题；  
  5. 对 DoomLoopGate 的误杀与漏杀同时补齐行为测试；  
  6. 尽快发布集中修复版本，并明确插件迁移及回滚方案。

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/NousResearch/hermes-agent">NousResearch/hermes-agent</a></summary>

# Hermes Agent 项目动态日报

**统计日期：2026-11-13**  
**数据范围：过去 24 小时**  
**项目地址：** [NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent)

---

## 1. 今日速览

过去 24 小时共更新 **50 条 Issues** 与 **50 条 PRs**，其中 Issues 新开或保持活跃 48 条、关闭 2 条；PR 待合并 7 条、已合并或关闭 43 条，项目整体处于**高强度维护与缺陷收敛阶段**。  
今日没有发布新版本，主要工作集中在网关、Kanban、工具系统、CLI 安装更新、浏览器沙箱及多平台兼容等核心链路。  
Issue 侧暴露出的主要风险包括：Kanban 停止信号失效、后台审查工具权限绕过、远程后端文件写入错误，以及 Docker/SSH 环境下浏览器和文件访问不一致。  
PR 侧有 **7 条待合并 PR**，其中插件默认安装、子代理自动恢复、Ollama 上下文告警等具有明确的产品演进意义；但大量历史修复仍待审查、合并或回溯。  
综合判断：项目活跃度很高，修复吞吐较强，但当前 Bug 密度较高，安全边界、跨后端一致性和 Kanban 生命周期是近期最需要集中收敛的三个方向。

---

## 2. 版本发布

过去 24 小时**无新版本发布**，因此暂无对应的新增功能、破坏性变更或升级迁移说明。

当前仍需关注以下与版本状态相关的问题：

- [Desktop 安装包显示 “INSTALL DIDN’T FINISH” #153258](https://github.com/NousResearch/hermes-agent/issues/153258)
- [Nix 环境无法构建 patchelf 0.15.2 #154275](https://github.com/NousResearch/hermes-agent/issues/154275)
- [Homebrew 安装被误判为未知来源 #101676](https://github.com/NousResearch/hermes-agent/issues/101676)
- [Windows MSIX 网关无法静默自启动 #154335](https://github.com/NousResearch/hermes-agent/issues/154335)

---

## 3. 项目进展

### 今日已关闭或合并的重要 PR

今日有 **43 条 PR 已合并或关闭**。从公开摘要看，主要推进方向包括：

1. **CLI、插件与包管理安装链路修复**
   - [PM 安装时暂存 launcher，并在 doctor 中检查备用位置 #124059](https://github.com/NousResearch/hermes-agent/pull/124059)
   - [PM 管理环境补齐 install-stamp.json #123421](https://github.com/NousResearch/hermes-agent/pull/123421)
   - [PM 工作区忽略运行时状态，避免成员指纹失配 #122359](https://github.com/NousResearch/hermes-agent/pull/122359)
   - [补齐一方模块根目录识别 #122348](https://github.com/NousResearch/hermes-agent/pull/122348)
   - [Windows bootstrap 避免重复 re-exec 并保留脚本目录 #122334](https://github.com/NousResearch/hermes-agent/pull/122334)

   这些变更集中强化了安装、升级、诊断和环境一致性，对减少“更新成功但运行异常”类问题具有实际价值。

2. **工具与插件兼容性修复**
   - [插件平台 bundle 可通过 toolset 校验 #124054](https://github.com/NousResearch/hermes-agent/pull/124054)
   - [terminal notify 参数兼容布尔值和 anyOf #123356](https://github.com/NousResearch/hermes-agent/pull/123356)
   - [Desktop 外部链接协议允许列表 #129848](https://github.com/NousResearch/hermes-agent/pull/129848)

3. **配置、网关与数据边界加固**
   - [Dashboard 配置边界保护平台 ID，避免 19 位雪花 ID 精度损坏 #123466](https://github.com/NousResearch/hermes-agent/pull/123466)
   - [agent 达到最大迭代次数时先验证响应再生成摘要 #123442](https://github.com/NousResearch/hermes-agent/pull/123442)
   - [hooks accept 记录非 TTY 同意状态 #138421](https://github.com/NousResearch/hermes-agent/pull/138421)

4. **跨平台与编码兼容性**
   - [Windows 非 UTF-8 环境安全解析 Git 输出 #122265](https://github.com/NousResearch/hermes-agent/pull/122265)
   - [修复 Python 3.12+ 文档字符串转义警告 #123493](https://github.com/NousResearch/hermes-agent/pull/123493)

### 待合并的重要 PR

目前仍有 **7 条 PR 待合并**，较值得关注的有：

- [插件目录支持 `default: true`，自动安装到每个 Hermes Home #154858](https://github.com/NousResearch/hermes-agent/pull/154858)  
  将插件从“用户手动安装”推进到“默认可用”，有利于扩展能力开箱即用，但也会提高插件供应链与更新策略的重要性。

- [子代理支持可选自动恢复，父代理只接收最终结果 #154353](https://github.com/NousResearch/hermes-agent/pull/154353)  
  面向用量限制或网关重启后的后台任务续跑，默认最长 6 小时、最多 2 次尝试，体现 Hermes 对长任务可靠性的持续投入。

- [Ollama 静默忽略 `num_ctx` 时告警并按实际窗口压缩上下文 #132872](https://github.com/NousResearch/hermes-agent/pull/132872)  
  解决本地模型上下文窗口与 Hermes 压缩策略不一致的问题，对本地模型部署用户价值较高。

- [Gateway 不再因拒绝 bot 消息而无限延长 chain cooldown #154853](https://github.com/NousResearch/hermes-agent/pull/154853)  
  修复群聊链式响应冷却逻辑中的状态更新错误，有助于避免 bot 消息被持续拒绝。

- [Anthropic 401 提示准确识别 `key_cmd` 凭据来源 #154860](https://github.com/NousResearch/hermes-agent/pull/154860)  
  避免将 callable credential 错误提示为 Microsoft Entra ID；该 PR 已明确关联 [#154707](https://github.com/NousResearch/hermes-agent/issues/154707)。

### 整体推进程度

今日的主要成果不是大型功能发布，而是**围绕安装、升级、配置、工具调用和跨平台运行进行系统性修复**。43 条 PR 已合并或关闭，说明维护吞吐较高；但仍有 7 条待合并以及大量历史开放 Issue，表明功能扩张速度已明显快于部分边缘场景的稳定化速度。

---

## 4. 社区热点

### 评论最多的 Issues

1. [Kanban 中异常的 0 字节 `kanban.db` 导致所有 workspace 清理失败 #133739](https://github.com/NousResearch/hermes-agent/issues/133739)  
   **10 条评论。**  
   诉求集中在一个 0 字节数据库触发 SQLite 异常后，跨 board 的 workspace 共享扫描采用 fail-closed 策略，导致所有清理任务失败。社区核心需求是：区分“真实但不可读 board”和“损坏/空占位文件”，避免局部异常扩散为全局阻塞。

2. [Docker 沙箱浏览器找不到 Chromium #131326](https://github.com/NousResearch/hermes-agent/issues/131326)  
   **8 条评论。**  
   `_CHROMIUM_PROBE` 未覆盖 `chrome-linux-arm64`，且沙箱路径没有正确继承 `AGENT_BROWSER_EXECUTABLE_PATH`。用户需要官方默认 Docker 镜像开箱可用地运行浏览器工具，而不是依赖手工进入容器配置 Chromium。

3. [生命周期守卫仅因命令提到 `config.yaml` 路径就误拦截 #134313](https://github.com/NousResearch/hermes-agent/issues/134313)  
   **7 条评论。**  
   守卫直接读取并扫描配置文件中的审批描述，导致普通命令中的路径字符串被误判为“试图重启 gateway”。诉求是精确识别真实生命周期操作，降低误拦截率。

4. [macOS LaunchAgent 在隐私与安全中显示为 `osascript` #123118](https://github.com/NousResearch/hermes-agent/issues/123118)  
   **7 条评论。**  
   用户希望 macOS 能将后台进程明确识别为 Hermes Agent，改善权限审批、进程管理和可诊断性。

5. [Disposable HERMES_HOME 可能留下指向已删除目录的共享 launcher #136094](https://github.com/NousResearch/hermes-agent/issues/136094)  
   **5 条评论。**  
   反映多 Home、临时任务目录和符号链接布局之间的安装状态耦合问题，容易产生“看起来存在但无法运行”的残留配置。

6. [Desktop 新安装失败并显示 “INSTALL DIDN’T FINISH” #153258](https://github.com/NousResearch/hermes-agent/issues/153258)  
   **5 条评论。**  
   涉及官方 DMG 安装链路，失败信息对用户不够明确，且提示中包含 checkout 相关错误，直接影响新用户安装成功率。

### 值得关注的开放 PR

- [Telegram/gateway 批量 Bug Sweep 跟踪 Issue #152380](https://github.com/NousResearch/hermes-agent/issues/152380)  
  已扫描约 **790 条 Telegram Issues**，识别 **339 个真实 Bug**，其中 **132 个已关闭、207 个仍开放**。这说明网关和 Telegram 集成仍有较大的历史债务，但也具备较系统的批量治理计划。

- [Desktop 长帧指标 PR #153070](https://github.com/NousResearch/hermes-agent/pull/153070)  
  引入 opt-in 的长动画帧统计，反映 Desktop 性能观测能力正在从单点慢帧指标扩展到更完整的性能诊断。

- [Desktop 西班牙语压缩文案修正 #154854](https://github.com/NousResearch/hermes-agent/pull/154854)  
  属于面向现有国际用户的功能完善，说明 Desktop 国际化仍在持续维护。

---

## 5. Bug 与稳定性

### P0／安全边界风险

1. [后台审查可在工作线程中调用未授权的 `terminal` 工具 #154750](https://github.com/NousResearch/hermes-agent/issues/154750)  
   - 类型：**安全**
   - 原因：工具白名单保存在线程局部状态中，而后台审查工具实际在线程池 worker 中执行。
   - 影响：原本被禁止的写文件、补丁和终端能力可能绕过限制。
   - Fix PR：**当前摘要中未见明确关联 PR**。

2. [多路复用环境中的 secret-source 缓存键未使用统一 `hermes_home_key()` #154609](https://github.com/NousResearch/hermes-agent/issues/154609)  
   - 类型：**安全**
   - 影响：不同 Hermes Home 的凭据缓存可能发生键归一化不一致，存在跨 Home 状态串用风险。
   - Fix PR：**未见明确关联 PR**。

### P1／高影响稳定性与正确性问题

3. [Kanban block/archive 后 worker 仍继续推送、评论和修改 PR #154563](https://github.com/NousResearch/hermes-agent/issues/154563)  
   - 影响：操作员已经停止任务，后台代理仍继续执行数分钟。
   - 风险：违反停止语义，可能产生额外提交、评论和 API 消耗。
   - Fix PR：**未见明确关联 PR**。

4. [SSH terminal 后端下，截断的工具输出仍写到 Hermes 本机 #154749](https://github.com/NousResearch/hermes-agent/issues/154749)  
   - 影响：终端与文件工具运行于 SSH 主机，但截断文件写入主控主机，后续读取失败。
   - Fix PR：**未见明确关联 PR**。

5. [Docker 沙箱无法定位 Chromium #131326](https://github.com/NousResearch/hermes-agent/issues/131326)  
   - 影响：官方 Docker Desktop 沙箱中的浏览器工具基本不可用。
   - Fix PR：**当前摘要中未见明确关联 PR**。

6. [Windows MSIX 网关自启动静默失败 #154335](https://github.com/NousResearch/hermes-agent/issues/154335)  
   - 影响：Scheduled Task 无法执行 WindowsApps 下的打包 Python，`wscript //B` 又隐藏错误。
   - Fix PR：**未见明确关联 PR**。

7. [TUI 网关通知轮询线程泄漏 #154716](https://github.com/NousResearch/hermes-agent/issues/154716)  
   - 影响：用户报告 30 小时内积累 17 个轮询线程，内存增长约 1.7GB。
   - Fix PR：**未见明确关联 PR**。

8. [Gateway 群聊在一轮正常对话后永久卡死 #153816](https://github.com/NousResearch/hermes-agent/issues/153816)  
   - 状态：今日已关闭。
   - 影响：出现 `turn.settled references no matching user discussion` / `prepare_failed`，影响群聊继续使用。
   - Fix PR：**公开摘要中未列出对应 PR**。

### P2／重要但通常可通过配置或替代路径规避

- [工具 Schema Sanitizer 为自由格式对象补充 `properties: {}`，导致工具收到空对象 #153097](https://github.com/NousResearch/hermes-agent/issues/153097)
- [Anthropic 401 帮助文案把 `key_cmd` 错认成 Microsoft Entra ID #154707](https://github.com/NousResearch/hermes-agent/issues/154707)  
  **已有明确 Fix PR： [#154860](https://github.com/NousResearch/hermes-agent/pull/154860)。**
- [SSH 后端连接器拒绝读取文件 #154564](https://github.com/NousResearch/hermes-agent/issues/154564)
- [Codex Responses 模式丢弃 `web_search_call`/`web_fetch_call` 输出 #154625](https://github.com/NousResearch/hermes-agent/issues/154625)
- [gateway turn 的浏览器清理未关闭 CDP supervisor，持续产生 502 重连警告 #148885](https://github.com/NousResearch/hermes-agent/issues/148885)
- [Bedrock 在 Python 3.14 下因 truststore/botocore 导入顺序导致递归错误 #126808](https://github.com/NousResearch/hermes-agent/issues/126808)
- [TUI diff 新增/删除行前景色与背景色相同，内容不可见 #143548](https://github.com/NousResearch/hermes-agent/issues/143548)
- [repair-official --restore 将备份识别为重复活动 skill #126612](https://github.com/NousResearch/hermes-agent/issues/126612)
- [Kanban 卡片允许指定 assignee profile 无法解析的 skill，导致 worker 启动崩溃 #140436](https://github.com/NousResearch/hermes-agent/issues/140436)
- [生命周期守卫误拦截仅提及 `config.yaml` 的命令 #134313](https://github.com/NousResearch/hermes-agent/issues/134313)
- [Dashboard Chat 将缺少 TUI bundle 的错误误报为缺少 Node.js #154715](https://github.com/NousResearch/hermes-agent/issues/154715)
- [Disposable HERMES_HOME 留下失效 launcher #136094](https://github.com/NousResearch/hermes-agent/issues/136094)
- [macOS LaunchAgent 无法以 Hermes 名义显示 #123118](https://github.com/NousResearch/hermes-agent/issues/123118)
- [Nix patchelf 0.15.2 构建失败 #154275](https://github.com/NousResearch/hermes-agent/issues/154275)
- [Homebrew 安装来源识别错误 #101676](https://github.com/NousResearch/hermes-agent/issues/101676)

---

## 6. 功能请求与路线图信号

### 高概率进入下一版本或近期迭代

1. **插件默认安装与自动启用**  
   [PR #154858](https://github.com/NousResearch/hermes-agent/pull/154858) 已提出将目录插件标记为 `default: true`，在安装、更新和 profile 切换时自动部署。若合并，Hermes 的扩展模型将从“手工插件”进一步转向“声明式默认能力栈”。

2. **子代理自动恢复**  
   [PR #154353](https://github.com/NousResearch/hermes-agent/pull/154353) 为停止的子代理提供 opt-in 自动恢复，并规定父代理只在最终成功或最终失败时收到结果。该能力直接面向长任务可靠性，预计会成为智能体编排的重要路线。

3. **本地模型实际上下文窗口感知**  
   [PR #132872](https://github.com/NousResearch/hermes-agent/pull/132872) 让 Ollama 在服务端忽略 `num_ctx` 时向用户告警，并按实际窗口调整压缩策略。随着本地模型使用增加，这类“配置意图与运行时能力对齐”很可能继续扩展到更多 provider。

4. **Desktop 性能与国际化完善**  
   [PR #153070](https://github.com/NousResearch/hermes-agent/pull/153070) 和 [PR #154854](https://github.com/NousResearch/hermes-agent/pull/154854) 分别推进长帧监控和西班牙语文案，表明 Desktop 正在从功能可用阶段进入体验与可观测性阶段。

### 仍处于提案阶段

- [Kanban 自动将 blocked 卡分流至 Ready 或 Review #154803](https://github.com/NousResearch/hermes-agent/issues/154803)  
  目标是减少人工 `unblock`，让 dispatcher 对临时故障进行自动处置。该需求与当前 Kanban 停止信号、worker 崩溃等 Bug 高度相关，较可能成为下一轮 Kanban 可靠性改造的一部分。

- [子代理监控中显示每个子代理所用模型 #143882](https://github.com/NousResearch/hermes-agent/issues/143882)  
  提升多代理运行的透明度，但在界面空间、模型别名截断和兼容旧会话方面仍需设计。

- [Desktop 外部协议允许列表 #129848](https://github.com/NousResearch/hermes-agent/pull/129848)  
  PR 今日已关闭；相关需求支持 `obsidian://`、`linear://`、`vscode://` 等深度链接，虽已推进，但若功能未进入稳定分支，仍需确认落地状态。

### 路线图判断

当前可观察到三条清晰主线：

- **自主运行可靠性**：子代理自动恢复、Kanban 自动分流与停止语义。
- **插件生态扩展**：目录插件默认安装、插件工具集兼容。
- **多环境一致性**：Docker、SSH、Windows、macOS、Homebrew、Nix、Ollama 等环境的行为统一。

---

## 7. 用户反馈摘要

### 真实使用场景与痛点

- **多后端部署是主要压力点。**  
  用户同时使用 Docker、SSH、本地 gateway、Desktop 和多 profile 后，暴露出的并非单一功能缺陷，而是文件、终端、浏览器、连接器对“执行主机”的定义不一致。典型案例包括 [#154749](https://github.com/NousResearch/hermes-agent/issues/154749) 和 [#154564](https://github.com/NousResearch/hermes-agent/issues/154564)。

- **自动化任务对停止信号的可靠性要求很高。**  
  Kanban 卡片被阻塞或归档后，后台 worker 仍继续提交、评论，说明用户期待控制命令具备确定性边界。该问题在远程 API 与无人值守场景中会直接造成成本和协作风险，见 [#154563](https://github.com/NousResearch/hermes-agent/issues/154563)。

- **官方默认镜像应开箱可用。**  
  浏览器问题并非边缘配置：用户使用官方 `hermes-sandbox:desktop` 默认镜像时即无法找到 Chromium。这反映发布镜像与工具探测矩阵之间缺少持续集成验证，见 [#131326](https://github.com/NousResearch/hermes-agent/issues/131326)。

- **安装与升级错误信息仍不够友好。**  
  Desktop 安装只显示 “INSTALL DIDN’T FINISH”，Dashboard 错把缺失 TUI bundle 报成缺 Node.js，用户难以判断下一步操作，见 [#153258](https://github.com/NousResearch/hermes-agent/issues/153258) 与 [#154715](https://github.com/NousResearch/hermes-agent/issues/154715)。

- **工具协议边界需要更严格。**  
  自由格式对象被错误添加空 `properties`，后台审查线程未继承工具白名单，说明 schema 转换和多线程工具授权都存在结构性风险，见 [#153097](https://github.com/NousResearch/hermes-agent/issues/153097) 与 [#154750](https://github.com/NousResearch/hermes-agent/issues/154750)。

- **身份与系统品牌呈现受到关注。**  
  macOS 权限页面中显示 `osascript` 而非 Hermes，以及 Anthropic 401 提示引用 Azure 登录，均降低了诊断和授权体验，见 [#123118](https://github.com/NousResearch/hermes-agent/issues/123118) 与 [#154707](https://github.com/NousResearch/hermes-agent/issues/154707)。

### 满意点

- 用户对核心功能方向积极，需求已从“能否运行”转向“长任务能否自动恢复”“插件能否默认安装”“模型与上下文是否透明可见”。
- Telegram/gateway 批量扫描识别出的真实 Bug 已有约三分之一关闭，表明维护者与社区正在形成规模化治理流程，见 [#152380](https://github.com/NousResearch/hermes-agent/issues/152380)。
- 已有明确修复 PR 的反馈闭环较快，例如 Anthropic 401 误提示已由 [#154860](https://github.com/NousResearch/hermes-agent/pull/154860) 直接对应修复。

### 不满意点

- 部分旧问题自 9 月或 10 月创建后仍保持开放，例如 [#133739](https://github.com/NousResearch/hermes-agent/issues/133739)、[#131326](https://github.com/NousResearch/hermes-agent/issues/131326)、[#126808](https://github.com/NousResearch/hermes-agent/issues/126808)，显示高影响问题尚未完全进入稳定版本。
- 相同根因在多个环境重复出现：跨 Home launcher 状态错误、Dashboard 错误分类、SSH 文件访问限制，说明缺少统一的路径与错误语义层。
- 修复 PR 数量较多，但公开摘要中许多关键 Issue 尚看不到明确关联 Fix PR，问题到补丁的追踪仍不够透明。

---

## 8. 待处理积压

### 长期开放但影响较大的 Issues

1. [Kanban 0 字节数据库导致全局 cleanup 失败 #133739](https://github.com/NousResearch/hermes-agent/issues/133739)  
   创建于 2026-10-06，已累计 **10 条评论**；应优先补充损坏数据库识别和隔离策略。

2. [官方 Docker 沙箱浏览器不可用 #131326](https://github.com/NousResearch/hermes-agent/issues/131326)  
   创建于 2026-10-02，已有 **8 条评论**；建议补齐 Chromium 架构探测、路径继承和官方镜像集成测试。

3. [生命周期守卫误拦截 config.yaml 路径 #134313](https://github.com/NousResearch/hermes-agent/issues/134313)  
   创建于 2026-10-07，已有 **7 条评论**；误拦截会持续影响 cron 与终端自动化。

4. [macOS LaunchAgent 身份不可识别 #123118](https://github.com/NousResearch/hermes-agent/issues/123118)  
   创建于 2026-09-25，已有 **7 条评论**；影响权限审批和用户信任，建议明确责任版本。

5. [Disposable HERMES_HOME launcher 残留 #136094](https://github.com/NousResearch/hermes-agent/issues/136094)  
   创建于 2026-10-10，已有 **5 条评论**；涉及多 profile、临时任务 Home 与共享安装的边界。

6. [Bedrock 在 Python 3.14 下递归错误 #126808](https://github.com/NousResearch/hermes-agent/issues/126808)  
   创建于 2026-09-28，已有 **4 条评论**；涉及 provider 可用性及 Python 版本兼容性。

7. [repair-official --restore 重复 skill 检测 #126612](https://github.com/NousResearch/hermes-agent/issues/126612)  
   创建于 2026-09-28，已有 **5 条评论**；影响技能修复与回滚流程。

8. [Homebrew 安装被误判为未知来源 #101676](https://github.com/NousResearch/hermes-agent/issues/101676)  
   创建于 2026-09-02，已有 **3 条评论**；属于包管理器识别和自动更新安全边界问题。

9. [Kanban worker 使用不可解析 skill 后启动崩溃 #140436](https://github.com/NousResearch/hermes-agent/issues/140436)  
   创建于 2026-10-17，已有 **2 条评论**；摘要称已有修复方案，需确认 PR 编号与合并状态。

10. [OAuth 系统提示重写污染 MEMORY.md/USER.md 中的产品名 #137003](https://github.com/NousResearch/hermes-agent/issues/137003)  
    创建于 2026-10-12，已有 **2 条评论**；可能影响用户持久化内容与品牌身份，应避免全字符串替换。

11. [Gateway 浏览器清理不完整并持续产生 502 警告 #148885](https://github.com/NousResearch/hermes-agent/issues/148885)  
    创建于 2026-11-04，已有 **2 条评论**；长会话 gateway 场景下容易积累资源。

12. [Telegram/gateway 批量修复跟踪 #152380](https://github.com/NousResearch/hermes-agent/issues/152380)  
    当前仍称有 **207 个真实 Bug 未关闭**；应建立按模块、平台、风险等级排序的收敛计划，并公开合并节奏。

### 需要维护者重点跟进的开放 PR

- [插件默认安装 #154858](https://github.com/NousResearch/hermes-agent/pull/154858)
- [子代理自动恢复 #154353](https://github.com/NousResearch/hermes-agent/pull/154353)
- [Ollama 实际上下文窗口告警与压缩修正 #132872](https://github.com/NousResearch/hermes-agent/pull/132872)
- [Gateway bot cooldown 修复 #154853](https://github.com/NousResearch/hermes-agent/pull/154853)
- [Desktop 长帧指标 #153070](https://github.com/NousResearch/hermes-agent/pull/153070)

---

## 项目健康度结论

**活跃度：高**  
Issue 与 PR 均有 50 条更新，43 条 PR 已合并或关闭，表明维护吞吐与社区参与度较高。

**功能进展：中高**  
插件默认安装、子代理自动恢复、Ollama 上下文适配和 Desktop 可观测性构成明确的产品演进方向，但今日没有版本发布，成果尚未形成用户可感知的发行节点。

**稳定性压力：较高**  
安全权限边界、Kanban 生命周期、Docker/SSH 一致性、浏览器资源和线程泄漏问题同时存在。部分问题影响核心自动化流程，应优先于一般 UI 或文案改进处理。

**积压风险：中高**  
若按每日 50 条 Issue/PR 的速度观察，历史问题仍在快速累积；尤其 Telegram/gateway sweep 仍称有 207 个真实 Bug 未关闭。建议维护者建立：

1. P0/P1 安全与任务控制问题专项队列；
2. Issue 与 Fix PR 的强制关联；
3. Docker、SSH、Windows、macOS、Homebrew、Nix 的持续集成矩阵；
4. 长生命周期 gateway 的线程、进程和浏览器资源泄漏检测；
5. 每次发行前对高评论、高影响开放 Issue 的发布说明与迁移检查。

**总体判断：项目处于高速开发期，维护动能较强，但尚未完全进入稳定收敛阶段。近期能否发布一个经过跨平台验证、明确包含安全与 Kanban 稳定性修复的版本，将是下一阶段的重要观察点。**

</details>

<details>
<summary><strong>OpenHuman</strong> — <a href="https://github.com/tinyhumansai/openhuman">tinyhumansai/openhuman</a></summary>

# OpenHuman 项目动态日报

**统计日期：2026-11-13**  
**数据范围：过去 24 小时**  
**项目：** [tinyhumansai/openhuman](https://github.com/tinyhumansai/openhuman)

## 1. 今日速览

- 过去 24 小时共更新 **26 个 PR**，其中 **24 个已合并或关闭、2 个待合并**，合并处理率约 **92%**，研发活动很高。
- **2 个 Issue 均已关闭**，没有新开 Issue；其中事件去重和 linked E2E CI 两项问题均已进入修复或测试补强阶段。
- 今日变更主要集中于 **Rust Core 稳定性、CI 可靠性、x402 支付能力、工具注册与运行时配置**；未发现新版本发布。
- 当前仍有 **2 个开放 PR**，分别涉及 x402 网络锁定/签名能力（[#8692](https://github.com/tinyhumansai/openhuman/pull/8692)）和 Agent Registry 刷新（[#8065](https://github.com/tinyhumansai/openhuman/pull/8065)）。
- 综合评估：项目处于**高活跃、持续收敛技术债**的阶段；今日有 24 个 PR 收敛，但缺少版本发布和新增需求信号，交付节奏偏工程治理导向。

---

## 3. 项目进展

> 今日没有新版本发布，因此不单列“版本发布”。

### 3.1 x402 支付与网络能力

- **[#8690](https://github.com/tinyhumansai/openhuman/pull/8690) 已关闭：新增 `x402_fetch` JSON-RPC**
  - 支持本地调用方发起一次 HTTPS 请求，并在收到 HTTP 402 后通过钱包支付挑战。
  - 调用方可通过 `maxAmountAtomic` 设置单次支付上限，扩展了 x402 从 `http_request` 内部钩子向独立 RPC 接口的覆盖范围。
  - [#8691](https://github.com/tinyhumansai/openhuman/pull/8691) 随后补充 RPC 静态注册、拒绝原因前缀和 `update_budget` 参数等细节。

- **[#8692](https://github.com/tinyhumansai/openhuman/pull/8692) 仍开放：锁定 TinyWallet 0.30.0 并加入 Sign-In-With-X**
  - 将 TinyWallet 重新锁定至 **v0.30.0**，更新 bus contract 至 **1.16**。
  - 将 `rusqlite` 升级至 **0.41**。
  - 增加 `x402_fetch` 的网络锁定和 Sign-In-With-X 能力。
  - 该 PR 尚未合并，是当前最值得持续关注的开放变更。

### 3.2 CI 与端到端测试

- **[#8657](https://github.com/tinyhumansai/openhuman/pull/8657) 已关闭：托管 CI 后续修复**
  - 处理托管 CI 大量 “No backend session” 失败，定位到 session store split 产品问题。
  - 同时覆盖 SaaS host-authorised secret grant、结构化错误码传递等 CI 阻塞点。
  - 直接提升 hosted CI gate 的稳定性。

- **[#8663](https://github.com/tinyhumansai/openhuman/pull/8663) 已关闭：提前安装并重试固定 Rust 工具链**
  - 修复容器镜像仍携带 Rust 1.96.1、而项目要求 1.99.1 导致的 lane 失败。
  - 通过提前安装固定工具链和重试机制，降低 CI 环境漂移影响。

- **[#8155](https://github.com/tinyhumansai/openhuman/issues/8155) 已关闭：将 linked inbound E2E 纳入 CI**
  - 要求在 CI lane 中运行 `tests/inbound_linked_e2e.rs` 及其他 linked-module E2E。
  - 该项补足了“本地通过、CI 未覆盖”的关键测试缺口，降低 inbound link 集成回归风险。

### 3.3 Core 稳定性与一致性修复

- **[#8685](https://github.com/tinyhumansai/openhuman/pull/8685) 已关闭：Storage backend、URL 与 driver 原子化写入**
  - 将 `storage::install_for_url` 改为一次写入 backend、URL 和 driver。
  - 避免并发 `rebind` 观察到“新 backend 已安装但 URL 尚未更新”的中间状态，从而错误返回 “nothing to do”。

- **[#8667](https://github.com/tinyhumansai/openhuman/pull/8667) 已关闭：事件摄取超时后只处理一次**
  - 新增 `inbound/claims.rs`，按 `source:event_id` 决定事件由直接路径还是 `Deliver` 队列处理，避免两者同时执行。
  - 对应关闭了事件重复 triage 问题 [#8154](https://github.com/tinyhumansai/openhuman/issues/8154)。

- **[#8688](https://github.com/tinyhumansai/openhuman/pull/8688) 已关闭：Voice 状态与转录路径统一**
  - `voice_status` 改为报告实际生效的 TTS provider。
  - `voice_transcribe` 和 `voice_transcribe_bytes` 统一经过 `finish_transcription`，减少两条路径行为漂移及幻觉风险。

- **[#8687](https://github.com/tinyhumansai/openhuman/pull/8687) 已关闭：内置文件哈希改为稳定 SHA-256**
  - 不再使用可能随 Rust 版本变化的 `DefaultHasher`。
  - 防止用户编辑后的 `SOUL`、`IDENTITY` 或 `ROLE` 文件被误判为未修改内置文件并遭覆盖。

- **[#8689](https://github.com/tinyhumansai/openhuman/pull/8689) 已关闭：无 Task Source Provider 时不再注册相关能力**
  - 当前所有 task-source provider 均无法抓取时，不再向模型暴露 9 个 `task_source_*` 工具。
  - 同时停止 600 秒轮询器，并不再注册 Composio connect hook，减少无效工具和后台任务。

- **[#8681](https://github.com/tinyhumansai/openhuman/pull/8681) 已关闭：Agent library 正确处理 `disallowed_tools` 通配符**
  - 工具库列表现与运行时实际暴露范围保持一致。
  - `direct_tool_count` 和 `write_capable` 的计算也随之修正。

- **[#8682](https://github.com/tinyhumansai/openhuman/pull/8682) 已关闭：附件请求使用正确代理服务**
  - 附件下载客户端改为使用 `inference.attachment`，而非 Ollama provider 的 `provider.ollama`。
  - 统一使用 `attachments::fetch_client()`，减少路径配置漂移。

- **[#8686](https://github.com/tinyhumansai/openhuman/pull/8686) 已关闭：文档生成使用工具自身配置**
  - `generate_document` 不再每次调用 `Config::load_or_init()`。
  - 避免工具调用误读真实用户配置，或在全新机器上写入真实配置，改善嵌入式部署隔离。

- **[#8684](https://github.com/tinyhumansai/openhuman/pull/8684) 已关闭：支持 IPv6 loopback MCP**
  - 将 `http://[::1]:…` 正确识别为 loopback，避免带凭证的本地 MCP 服务被静默过滤。
  - 同时固定 MCP-off registry stub 的 `supervisor::run` 接口签名。

- **[#8683](https://github.com/tinyhumansai/openhuman/pull/8683) 已关闭：统一 dispatch 参数校验**
  - Registry dispatch 统一使用 `core::params::params_to_object`。
  - 非对象参数的错误信息现在与标准 `INVALID_PARAMS_PREFIX` 保持一致。

- **[#8679](https://github.com/tinyhumansai/openhuman/pull/8679) 已关闭：允许用户拒绝遗留待审批请求**
  - 修复旧版本遗留的 TinySecurity pending orphan 无法清除的问题。
  - `approval_decide` 现在可以正常处理此前未登记完整上下文的待审批项。

### 3.4 清理与能力调整

- **[#8694](https://github.com/tinyhumansai/openhuman/pull/8694) 已关闭：删除无效配置**
  - 移除无人读取的配置项、`DaemonConfig`、`WatcherStateStore` 及 loader 遗留逻辑。
  - 净减少 **708 行、涉及 66 个文件**。
  - 兼容策略明确：旧配置中的未知键会被忽略、记录到 `load_diagnostics().unknown_keys`，并在下次保存时移除。

- **[#8693](https://github.com/tinyhumansai/openhuman/pull/8693) 已关闭：删除无效别名并合并 Web3 adapter**
  - 移除 `trigger_*`、无操作的 x402 `init_ledger`，以及 `PaymentRecord`/`PaymentStatus` 别名。
  - 合并重复的 Web3 工具 adapter 文件，压缩维护面。

- **[#8680](https://github.com/tinyhumansai/openhuman/pull/8680) 已关闭：本地 runtime 可选择启用原生工具调用**
  - 新增 `local_ai.native_tool_calling` opt-in 配置。
  - 允许本地 OpenAI runtime 使用模型原生 tool calling，目标是提升 builder agent 等场景的工具调用效率。

### 3.5 整体推进程度

今日改动覆盖 **核心事件语义、存储一致性、语音链路、工具权限、附件代理、CI 工具链、x402 支付和 MCP 网络识别**。24 个 PR 完成合并或关闭，表明项目正在快速偿还可靠性与技术债；但没有新版本发布，暂未形成可供用户立即消费的正式版本节点。

---

## 4. 社区热点

> 所给数据中各条目评论数均为 **0 或未定义**，没有可识别的“高评论、高点赞”热点；以下按技术影响力和开放状态排序。

### 4.1 [#8692](https://github.com/tinyhumansai/openhuman/pull/8692) — OPEN  
**x402 网络锁定、Sign-In-With-X、TinyWallet 0.30.0 与 rusqlite 0.41**

- 热度来源不是评论量，而是其同时涉及**支付协议、钱包依赖、网络安全和 SQLite 依赖升级**。
- 诉求是让 `x402_fetch` 在可控网络和资产范围内工作，并减少手工轮换钱包版本的运维风险。
- 潜在风险：依赖升级可能带来行为兼容、安全告警和迁移要求；合并前需重点验证 attestations、checksums、SQLite API 兼容及签名流程。

### 4.2 [#8065](https://github.com/tinyhumansai/openhuman/pull/8065) — OPEN  
**Agent Registry 更新后刷新进程内注册表**

- 该 PR 自 **2026-10-17** 创建并持续更新，是当前开放 PR 中存续时间最长的一条。
- 诉求是让 `agent_registry_update` 无需重启即可影响 `spawn_async_subagent` 的 allowlist，并兼顾启动时合并注册表条目。
- 用户痛点集中在配置生效延迟和运维重启成本。

### 4.3 [#8657](https://github.com/tinyhumansai/openhuman/pull/8657) — CLOSED  
**托管 CI gate 稳定性修复**

- 解决大量 “No backend session” 失败和结构化错误码丢失问题。
- 反映维护重点正从单纯功能开发转向 CI 可靠性、产品 Bug 根因修复和安全授权设计。

### 4.4 [#8155](https://github.com/tinyhumansai/openhuman/issues/8155) — CLOSED  
**linked inbound E2E 纳入 CI**

- 核心诉求是让真实模块 linked 场景不再只依赖本地测试。
- 背后场景包括 ingest、重复请求拒绝和 `Deliver`，属于 Agent 与外部模块协作的关键链路。

---

## 5. Bug 与稳定性

按严重程度排列如下：

### P1 / 高优先级

1. **CI 托管环境 session 丢失**
   - 表现：hosted CI 出现大量 “No backend session” 失败。
   - 根因：session store split。
   - 修复：已有 PR [#8657](https://github.com/tinyhumansai/openhuman/pull/8657)，状态为已关闭。
   - 评估：关键发布门禁问题，修复价值高；建议关注 CI 是否已持续稳定，而非仅确认 PR 状态。

### P2 / 中高优先级

2. **Storage backend 重绑定存在并发不一致**
   - 表现：并发 `rebind` 可能看到 backend 已更新但 URL 未更新，错误返回 “nothing to do”。
   - 修复：已有 PR [#8685](https://github.com/tinyhumansai/openhuman/pull/8685)，状态为已关闭。
   - 影响范围：涉及存储后端切换和运行中重配置。

3. **Inbound event 重复 triage**
   - 表现：所有 queue ingest 均超时但实际可能已入队时，直接路径和队列路径可能同时处理事件。
   - Issue：[#8154](https://github.com/tinyhumansai/openhuman/issues/8154)。
   - 修复：已有 PR [#8667](https://github.com/tinyhumansai/openhuman/pull/8667)，状态为已关闭。
   - 影响：可能造成重复副作用、重复通知或重复执行，是当前数据中最明确的业务一致性风险。

4. **本地 runtime 缺少原生 tool calling**
   - 表现：本地 OpenAI runtime 即使模型支持，也被统一视为不支持原生工具调用。
   - PR：[#8680](https://github.com/tinyhumansai/openhuman/pull/8680)，状态为已关闭。
   - 影响：更多表现为能力缺失和效率下降，而非直接崩溃。

### P3 / 稳定性与正确性问题

5. **Voice 状态显示错误及转录路径漂移**
   - PR：[#8688](https://github.com/tinyhumansai/openhuman/pull/8688)，已关闭。
   - 风险：TTS provider 状态不准确，转录结果可能出现不一致。

6. **内置哈希算法不稳定**
   - PR：[#8687](https://github.com/tinyhumansai/openhuman/pull/8687)，已关闭。
   - 风险：Rust 升级后用户自定义文件可能被覆盖，属于数据保护问题。

7. **附件下载使用错误代理服务**
   - PR：[#8682](https://github.com/tinyhumansai/openhuman/pull/8682)，已关闭。
   - 影响：特定网络配置下附件抓取可能失败、绕过预期代理或出现认证异常。

8. **`generate_document` 误读真实用户配置**
   - PR：[#8686](https://github.com/tinyhumansai/openhuman/pull/8686)，已关闭。
   - 影响：嵌入式部署隔离被破坏，并可能意外写入用户配置。

9. **IPv6 loopback MCP 被丢弃**
   - PR：[#8684](https://github.com/tinyhumansai/openhuman/pull/8684)，已关闭。
   - 影响：使用 `[::1]` 的本地 MCP 服务无法被正常识别。

10. **Agent 工具权限展示与运行时不一致**
    - PR：[#8681](https://github.com/tinyhumansai/openhuman/pull/8681)，已关闭。
    - 影响：库列表、工具计数和写能力标记不准确，可能误导用户及上层编排逻辑。

11. **遗留审批请求无法拒绝**
    - PR：[#8679](https://github.com/tinyhumansai/openhuman/pull/8679)，已关闭。
    - 影响：用户无法处理旧版本遗留的 pending orphan，属于安全治理缺口。

12. **Rust CI 工具链版本漂移**
    - PR：[#8663](https://github.com/tinyhumansai/openhuman/pull/8663)，已关闭。
    - 影响：项目要求的 Rust 1.99.1 与容器内 1.96.1 不一致，导致检查 lane 失败。

### 崩溃与回归总体判断

- 数据中**没有明确的新崩溃报告或显式 regression issue**。
- 已披露 Bug 大多已有对应修复 PR，说明缺陷响应链条较完整。
- 需要持续验证的重点是并发 storage rebind、inbound 去重、CI session store 和 x402 依赖升级，这几项更容易出现集成层面的二次回归。

---

## 6. 功能请求与路线图信号

### 明确进入实现的请求

1. **本地 runtime 原生工具调用**
   - PR：[#8680](https://github.com/tinyhumansai/openhuman/pull/8680)。
   - 通过 `local_ai.native_tool_calling` 显式启用，属于可控、向后兼容的 opt-in 能力。
   - 路线图判断：**已进入实现并关闭，合并到主干的可能性高**；是否进入下一正式版本仍取决于发布节奏。

2. **x402 独立支付 RPC**
   - PR：[#8690](https://github.com/tinyhumansai/openhuman/pull/8690) 及后续 [#8691](https://github.com/tinyhumansai/openhuman/pull/8691)。
   - 将 x402 支付从工具内部行为提升为可编程 RPC，是近期最明确的能力演进信号之一。
   - 路线图判断：**基础能力已经完成，后续重点是网络、预算和身份验证边界**。

3. **Sign-In-With-X 与受控 x402 网络**
   - PR：[#8692](https://github.com/tinyhumansai/openhuman/pull/8692)。
   - 仍在开放状态，且依赖 TinyWallet 0.30.0 与 rusqlite 0.41。
   - 路线图判断：**较可能进入下一次 x402 能力发布，但合并前仍需完成兼容性和安全审查**。

4. **Agent Registry 热更新**
   - PR：[#8065](https://github.com/tinyhumansai/openhuman/pull/8065)。
   - 满足“修改注册表无需重启即可生效”的长期诉求。
   - 路线图判断：功能边界清晰，但开放时间较长，**应列为近期收敛候选**。

### 测试与工程路线信号

5. **linked module E2E 成为 CI 固定 lane**
   - Issue：[#8155](https://github.com/tinyhumansai/openhuman/issues/8155)。
   - 表明项目正在强化模块间真实连接的自动化验证，而不只依赖单元测试。
   - 路线图判断：属于下一阶段持续投入方向，未来可能扩展更多 linked-module E2E 场景。

6. **CI 静态约束与 surface pinning**
   - 相关 PR：[#8684](https://github.com/tinyhumansai/openhuman/pull/8684)、[#8657](https://github.com/tinyhumansai/openhuman/pull/8657)、[#8663](https://github.com/tinyhumansai/openhuman/pull/8663)。
   - 信号是项目在加强模块边界、接口签名、工具链和 hosted CI 的确定性。

### 需求信号判断

- 今日没有新开 Issue，因此暂无完全来自新用户的新功能需求。
- 路线图更偏向：**支付协议能力、本地模型工具调用、Agent 运行时热管理、CI 回归防护**。
- [#8692](https://github.com/tinyhumansai/openhuman/pull/8692) 是最接近“下一版本核心功能”的开放项。

---

## 7. 用户反馈摘要

### 可确认的用户痛点

1. **配置修改不能即时生效**
   - 来源：[#8065](https://github.com/tinyhumansai/openhuman/pull/8065)。
   - 用户需要更新 Agent Registry 后立即影响子 Agent 启动，而不必重启整个进程。

2. **本地模型支持原生工具调用**
   - 来源：[#8680](https://github.com/tinyhumansai/openhuman/pull/8680)。
   - 典型场景是 builder agent 通过 `glm-5.3-flash` 和 `local-openai` runtime 运行；原先统一降级为无原生工具能力，影响工具调用效率与模型行为一致性。

3. **x402 支付需要更明确的调用边界**
   - 来源：[#8690](https://github.com/tinyhumansai/openhuman/pull/8690)、[#8691](https://github.com/tinyhumansai/openhuman/pull/8691)、[#8692](https://github.com/tinyhumansai/openhuman/pull/8692)。
   - 用户需要本地调用方可控制单次金额、预算、网络与资产，并能够清楚理解拒付原因。

4. **可靠事件处理与可重复验证**
   - 来源：[#8154](https://github.com/tinyhumansai/openhuman/issues/8154)、[#8155](https://github.com/tinyhumansai/openhuman/issues/8155)。
   - 用户关注事件只执行一次，以及 linked 场景必须进入 CI 防止回归。

5. **旧版本遗留数据可被用户处置**
   - 来源：[#8679](https://github.com/tinyhumansai/openhuman/pull/8679)。
   - 待审批项如果只能查看而不能拒绝，会形成安全与运维阻塞。

### 满意度信号

- 所有展示 Issues 均已关闭，没有积压的未解决用户投诉。
- 多数 Bug 都有对应 PR，说明报告到修复的闭环效率较高。
- 但现有数据没有点赞、评论或满意回执，无法据此量化社区满意度；不应将“关闭”直接等同于用户确认解决。

---

## 8. 待处理积压

### 8.1 长期开放的 PR

1. **[#8065](https://github.com/tinyhumansai/openhuman/pull/8065) — 2026-10-17 创建**
   - **开放约 27 天**，是本次数据中最明显的长期积压。
   - 功能价值明确，直接影响 Agent Registry 配置的即时生效。
   - 建议维护者：确认是否已具备合并条件；若暂缓，应明确拆分、补充测试或标注替代实现。

2. **[#8692](https://github.com/tinyhumansai/openhuman/pull/8692) — 2026-11-12 创建**
   - 开放时间短，但涉及依赖升级、供应链校验和网络签名，安全与兼容性审查可能需要更多周期。
   - 建议维护者：优先核对 TinyWallet checksums、rusqlite 0.41 的安全通告，以及 Sign-In-With-X 的失败路径。

### 8.2 已关闭但需验证的长期问题

3. **[#8154](https://github.com/tinyhumansai/openhuman/issues/8154) / [#8155](https://github.com/tinyhumansai/openhuman/issues/8155)**
   - 两个 Issue 均从 2026-10-20 延续至 2026-11-12 才关闭。
   - 虽然已有修复和 CI 覆盖 [#8667](https://github.com/tinyhumansai/openhuman/pull/8667)，建议持续观察事件重复处理是否在多节点、超时重试场景下再次出现。

### 8.3 维护关注项

- **发布节奏**：过去 24 小时完成 24 个 PR，但没有新 Release。大量修复和清理已经进入主干，应关注版本整理、changelog 和回滚验证。
- **开放 PR 收敛**：当前仅 2 个待合并，数量不高；但 [#8065](https://github.com/tinyhumansai/openhuman/pull/8065) 的长期开放值得单独跟进。
- **关闭状态不等同于已发布**：日报数据仅显示 PR 已关闭/合并及 Issue 已关闭，尚无 Release 证据；对外沟通应区分“进入主干”和“已向用户发布”。

---

## 今日健康度结论

**项目健康度：良好偏高，工程活跃度很高。**

- **优势**：24 小时内 24 个 PR 收敛，缺陷大多有明确修复 PR；核心链路、CI、并发一致性、权限展示和配置隔离均有实质推进。
- **风险**：暂无新 Release；x402 网络与依赖升级仍待收敛；一个 Agent Registry PR 长期开放；大量改动集中在一天内合并，需要警惕集中发布带来的回归。
- **后续重点**：确认 [#8692](https://github.com/tinyhumansai/openhuman/pull/8692) 与 [#8065](https://github.com/tinyhumansai/openhuman/pull/8065) 的下一步；验证 hosted CI、inbound 去重和 storage rebind；准备下一版本发布说明与依赖迁移说明。

</details>

---
*本日报由 [Big Model Radar](https://github.com/96loveslife/big_model_radar) 自动生成。*
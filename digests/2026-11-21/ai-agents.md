# OpenClaw 生态日报 2026-11-21

> Issues: 351 | PRs: 500 | 覆盖项目: 8 个 | 生成时间: 2026-11-21 06:31 UTC

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

**统计日期：2026-11-21**  
**数据范围：过去 24 小时**  
**项目地址：** [github.com/openclaw/openclaw](https://github.com/openclaw/openclaw)

---

## 1. 今日速览

- 项目保持高活跃度：过去 24 小时共更新 **351 条 Issues**（259 条新开或活跃、92 条关闭）和 **500 条 PRs**（323 条待处理、177 条已合并或关闭），但其中相当一部分属于高评论量历史问题被重新分类、补证据或推进修复。
- 今日主线集中在 **Gateway 响应性、更新/迁移可靠性、插件准备性能、Prompt Cache 稳定性以及会话与审计能力**；其中插件扫描阻塞、Doctor 活锁、更新基线扫描耗时等问题仍直接影响生产可用性。
- PR 端已有一定交付效率，但仍有 **323 条待合并 PR**，且多项高优先级修复处于维护者审查、作者修改或等待验证阶段，合并节奏尚未完全转化为稳定版本。
- 过去 24 小时没有新的 GitHub Release；不过 macOS **2026.11.6 appcast 更新 PR** 已提交，说明相关版本发布工作正在准备中。
- 综合健康度判断为 **“高活跃、风险偏高”**：问题反馈和修复供给充足，但更新器、Doctor、Gateway 生命周期及插件性能问题形成较强稳定性压力，建议下一阶段优先收敛发布阻塞项。

---

## 2. 版本发布

过去 24 小时 **无新版本发布**，因此没有正式的 Release 更新说明或迁移指南。

不过，发布准备正在继续：

- [PR #202955：更新 macOS 2026.11.6 appcast](https://github.com/openclaw/openclaw/pull/202955) 已提交，拟向 Sparkle 稳定频道发布签名后的 universal、arm64 和 x86_64 构建产物。
- 该 PR 目前仍为开放状态，意味着 **2026.11.6 的 macOS 更新分发尚未完全闭环**。

### 发布前建议关注

1. **Windows 更新链路**  
   [#200756](https://github.com/openclaw/openclaw/issues/200756) 和 [#200610](https://github.com/openclaw/openclaw/issues/200610) 显示，Windows beta 更新仍存在 package-swap 失败与残留目录难以删除的问题。

2. **Doctor 与状态数据库迁移**  
   [#197083](https://github.com/openclaw/openclaw/issues/197083)、[#198218](https://github.com/openclaw/openclaw/issues/198218)、[#200606](https://github.com/openclaw/openclaw/issues/200606) 表明候选版本验证和迁移仍可能阻塞更新。

3. **插件准备导致 Gateway 长时间阻塞**  
   [#160959](https://github.com/openclaw/openclaw/issues/160959) 与 [#174681](https://github.com/openclaw/openclaw/issues/174681) 暴露了插件捕获及准备阶段的同步重活问题，涉及发布质量和启动体验。

---

## 3. 项目进展

### 3.1 Gateway 生命周期与回复可靠性

- [PR #201774：计划重启时不再把预期的 subagent sweep 跳过记录为警告](https://github.com/openclaw/openclaw/pull/201774)  
  对应 [#200440](https://github.com/openclaw/openclaw/issues/200440)。这属于小幅但有价值的可运维性修复：计划重启期间拒绝新后台任务是设计行为，不应持续制造告警噪声。

- [PR #201766：上下文引擎未提供消息时间戳时，修复工具调用后的回答](https://github.com/openclaw/openclaw/pull/201766)  
  覆盖工具调用结束但未返回最终答案的场景，尤其是 `sessions_send` 下需要结果但最终消息为 `NO_REPLY` 的情况。该修复直接关系到 Agent 是否能稳定结束一次交互。

- [PR #197059：允许可选的人类纠正引导当前活跃 turn](https://github.com/openclaw/openclaw/pull/197059)  
  对应 [#196358](https://github.com/openclaw/openclaw/issues/196358)，旨在避免用户补充信息被错误排队为独立回复，改善人机协作时的上下文连续性。

### 3.2 更新器、CLI 与跨平台体验

- [PR #202934：macOS 缺少开发者工具、Git 不可用时给出明确说明](https://github.com/openclaw/openclaw/pull/202934)  
  改善从 npm 安装切换至开发通道时的错误提示，减少用户面对“unmanaged install”或克隆失败时无法判断下一步操作的问题。

- [PR #201762：拒绝空白审计过滤器，避免列出全部记录](https://github.com/openclaw/openclaw/pull/201762)  
  修复 `--agent`、`--session`、`--run`、`--channel`、`--cursor` 为空时被忽略、导致查询范围意外扩大的问题。这是正确的安全边界修复，可避免审计查询意外暴露全部记录。

- [PR #202800：显式恢复已移除的会话工作区](https://github.com/openclaw/openclaw/pull/202800)  
  对话关联的托管工作区被删除后，现在通过明确恢复动作重建，而不是由后续 turn 自动恢复。该 PR 被标记为存在兼容性风险，当前仍在等待作者修改。

- [PR #201049：将 Ciao 排除在根 npm bundle 之外](https://github.com/openclaw/openclaw/pull/201049)  
  针对 npm pack 在 warm-cache hardlink 环境下可能死锁的问题。Bonjour 插件仍可使用其定制 Ciao，但核心根包不再携带该依赖。

### 3.3 Web UI、会话与 Workboard

- [PR #202764：写入展示配置时保留会话数据](https://github.com/openclaw/openclaw/pull/202764)  
  避免 UI 偏好或其他非模型设置变更导致已连接会话重新获取无关数据，并减少不必要的会话投影失效。

- [PR #202961：允许在原 Workboard 卡片上发起修改请求](https://github.com/openclaw/openclaw/pull/202961)  
  审核者可在已完成或审核中的卡片中直接要求 worker 修正，不再需要另开会话，方向上是加强异步 Agent 工作流的闭环。

- [PR #202960：后台模板刷新时，从已就绪模板启动会话](https://github.com/openclaw/openclaw/pull/202960)  
  避免一个已经 ready 的模板被无关的全局刷新阻塞，降低首次发送和沙箱准备延迟。

### 3.4 资源与内存效率

- [PR #202495：让精简版核心 worker 共用同一宿主，以降低小机器内存占用](https://github.com/openclaw/openclaw/pull/202495)  
  对应 [#202377](https://github.com/openclaw/openclaw/issues/202377)。该方向对 1–2 GiB 的小型部署价值较高，但 PR 较大并存在可用性风险，仍需维护者重点审查。

- [PR #201756：PostgreSQL 迁移后保持会话记忆可搜索](https://github.com/openclaw/openclaw/pull/201756)  
  修复会话内嵌入 NUL 字符导致 PostgreSQL 重建记忆索引失败，以及旧 SQLite 索引阻碍数据库迁移的问题。

- [PR #176037：报告重复的 Markdown 记忆块](https://github.com/openclaw/openclaw/pull/176037)  
  新增 `openclaw memory duplicates`，为重复内容提供文件和行号来源，方便用户治理合并进来的记忆文件。

### 3.5 审计与运行时可观测性

- [PR #141004：将实际观察到的运行时 Skill 使用写入审计记录](https://github.com/openclaw/openclaw/pull/141004)  
  目标是让运维人员可以从持久化审计面检查 Agent 实际读取或调用了哪些 Skill。该 PR 仍处于“等待证明”阶段。

### 3.6 工程维护

- [PR #202965：统一 benchmark 堆采样设置](https://github.com/openclaw/openclaw/pull/202965)
- [PR #202903：Android 测试在每轮结束后关闭自有 runtime fixtures](https://github.com/openclaw/openclaw/pull/202903)
- [PR #202964：保证 Telegram 失败测试的 CI artifacts 可读取](https://github.com/openclaw/openclaw/pull/202964)
- [PR #202930：拆分推理 CLI 的能力结果契约与输出所有权](https://github.com/openclaw/openclaw/pull/202930)
- [PR #202895：拆分图片头部元数据与编码职责](https://github.com/openclaw/openclaw/pull/202895)
- [PR #202887：隔离 memory-core 的 embedding vector helper](https://github.com/openclaw/openclaw/pull/202887)

这些改动以重构、测试可靠性和 CI 可诊断性为主，虽不直接产生新功能，但有助于降低后续升级和回归定位成本。

### 整体推进评估

今日 PR 活动覆盖了 **Gateway、会话、审计、Workboard、更新器、CLI、Web UI、Android、memory-core 和性能测试** 等多个层面，项目并没有停滞。但从数据看，仍有大量待处理 PR，且部分关键修复停留在“等待维护者/作者/证明”阶段，因此可概括为：

> **功能与修复供给充足，代码层面推进明显，但发布稳定性和关键修复落地仍是当前瓶颈。**

---

## 4. 社区热点

### 4.1 插件准备阻塞 Gateway

- [#160959：大型外部插件捕获时 Gateway 阻塞数分钟](https://github.com/openclaw/openclaw/issues/160959) — **84 条评论**  
  这是今日评论最多的 Issue。该问题自 2026.9.6 起出现，启动及 prepared model runtime 重发布时均可能阻塞事件循环。
- [#174681：插件准备回归导致 Gateway 主线程停顿数分钟](https://github.com/openclaw/openclaw/issues/174681) — **9 条评论**  
  此前为“保持 Gateway 响应”的修复实际造成相反效果，相关改动已经被回滚。
- [#187350：每次启动都会扫描整个插件树](https://github.com/openclaw/openclaw/issues/187350) — **7 条评论**  
  6,495 文件的插件树扫描耗时约 58 秒，在 Docker/NAS 环境尤其明显。

**社区诉求：** 用户需要插件安装、启动、升级和运行时重载都不能阻塞 Gateway；插件扫描还应具备缓存、增量化或明确性能边界。

### 4.2 Prompt Cache 命中失效

- [#182891：Prompt Cache 从未复用，每次读取均为 0](https://github.com/openclaw/openclaw/issues/182891) — **20 条评论**
- [#198373：轮次间历史被重写，Cache Read 降至约 1%](https://github.com/openclaw/openclaw/issues/198373) — **9 条评论**
- [#155868：Agent 发起的 run 使用缩减工具列表，导致缓存前缀整体失效](https://github.com/openclaw/openclaw/issues/155868) — **11 条评论**
- [#172031：Late modelPromptProjection 使自定义上下文引擎准入失效](https://github.com/openclaw/openclaw/issues/172031) — **10 条评论**

**社区诉求：** 社区不仅关注成本，还关注同一会话、同一 Agent 连续交互时是否能保持稳定提示词前缀。问题横跨历史重写、工具列表变化和上下文引擎投影，反映出缓存键与运行时准入语义缺乏统一约束。

### 4.3 Doctor 与更新迁移故障

- [#197083：Post-install Doctor WAL 验证失败，11.3 更新半完成](https://github.com/openclaw/openclaw/issues/197083) — **31 条评论**
- [#178359：`doctor --fix --non-interactive` 静默卡住 15 分钟以上](https://github.com/openclaw/openclaw/issues/178359) — **31 条评论**
- [#198218：Gateway 停止时 Doctor/update 无限重哈希状态数据库](https://github.com/openclaw/openclaw/issues/198218) — **11 条评论**
- [#200606：2026.11.5 候选 Doctor 因迁移冲突阻塞更新](https://github.com/openclaw/openclaw/issues/200606) — **19 条评论**
- [#201251：更新基线扫描复制数据库五次，耗时 5409 秒](https://github.com/openclaw/openclaw/issues/201251) — **7 条评论**

**社区诉求：** 更新操作必须可预测、可恢复、可观察。用户需要明确知道更新停在哪一步、哪些数据被修改、能否回滚，而不是进入静默等待或“部分完成”状态。

### 4.4 长时间 Agent 运行与安全边界

- [#178373：Agent 缺少 turn/token 预算，工具循环检测默认关闭](https://github.com/openclaw/openclaw/issues/178373) — **11 条评论**
- [#192524：调度任务无法使用 `auth: aws-sdk` 的 Bedrock 凭据](https://github.com/openclaw/openclaw/issues/192524) — **7 条评论**
- [#167622：受限原生 Codex 环境中 `config get` 因 `spawnSync EPERM` 失败](https://github.com/openclaw/openclaw/issues/167622) — **10 条评论**
- [#195397：Gateway run 的 `NO_REPLY` 被 fallback 文本替换](https://github.com/openclaw/openclaw/issues/195397) — **6 条评论**

**社区诉求：** 用户希望长时间运行具备明确的资源预算、工具调用终止策略和可审计的拒绝原因；模型与认证配置则需要在 CLI、Gateway、调度任务和受限环境中保持一致。

### 4.5 PR 热点

- [PR #202800：显式恢复被删除的会话工作区](https://github.com/openclaw/openclaw/pull/202800) — 涉及 Web UI、Gateway、脚本和 Agent，规模为 XL，且存在兼容性风险。
- [PR #202962：移除 Claude CLI 原生工具的 OpenClaw exec approval](https://github.com/openclaw/openclaw/pull/202962) — 社区关注避免“双重权限层”，但属于安全敏感变更。
- [PR #202957：回退针对带原生工具 CLI 的 bounded-mode 分支](https://github.com/openclaw/openclaw/pull/202957) — 修复近期引入的不兼容行为。
- [PR #202495：共享宿主运行精简核心 worker](https://github.com/openclaw/openclaw/pull/202495) — 对低内存机器部署意义较大。
- [PR #201766：修复无消息时间戳时的 tool-only turn 回答](https://github.com/openclaw/openclaw/pull/201766) — P1，直接关系交互完成性。
- [PR #150688：允许过期 OAuth profile 重新连接](https://github.com/openclaw/openclaw/pull/150688) — 已完成浏览器合成验证，但仍需真实过期 xAI 授权验证。

---

## 5. Bug 与稳定性

### P0 / 发布阻塞级

1. **[#160959：大型外部插件捕获导致 Gateway 阻塞数分钟](https://github.com/openclaw/openclaw/issues/160959)**  
   - 影响：Gateway 事件循环冻结，启动及运行时重发布均可触发。  
   - 状态：开放；标签显示 `no-new-fix-pr`、`needs-maintainer-review`。  
   - **是否已有 fix PR：数据中未见明确关联的新修复 PR。**

2. **[#137781：WhatsApp 群组生成重复 direct conversation row，引发 UNIQUE 约束失败](https://github.com/openclaw/openclaw/issues/137781)**  
   - 影响：数据库约束异常、会话状态污染及消息丢失风险。  
   - 状态：开放；需要更多信息。  
   - **是否已有 fix PR：数据中未见明确关联 PR。**

### P1 / 高优先级稳定性问题

3. **[#197083：Doctor WAL publication 验证失败，更新仅部分完成](https://github.com/openclaw/openclaw/issues/197083)**  
   - 影响：升级后状态不一致，外置插件数据可能受影响。  
   - **无明确 fix PR。**

4. **[#178359：Doctor 修复流程静默卡住 15 分钟以上](https://github.com/openclaw/openclaw/issues/178359)**  
   - 影响：维护操作不可用，数据库修复无法执行。  
   - **无明确 fix PR。**

5. **[#198218：Doctor/update 在 Gateway 停止时无限循环](https://github.com/openclaw/openclaw/issues/198218)**  
   - 影响：维护命令活锁。  
   - 已有 live repro 状态，但仍需进一步确认。  
   - **数据中未见明确 fix PR。**

6. **[#200606：候选 Doctor 因插件迁移冲突阻塞 11.3 → 11.5 更新](https://github.com/openclaw/openclaw/issues/200606)**  
   - 影响：稳定版升级路径受阻。  
   - **无明确 fix PR。**

7. **[#153899：Gateway drain 等待完整 TimeoutStopSec](https://github.com/openclaw/openclaw/issues/153899)**  
   - 影响：重启和停机时间过长，关闭后资源仍被定时任务访问。  
   - **无明确 fix PR。**

8. **[#174681：插件准备回归导致 Gateway 主线程停顿](https://github.com/openclaw/openclaw/issues/174681)**  
   - 影响：主线程数分钟不可用。  
   - 原修复已被回滚，仍需新的替代实现。  
   - **未看到完整替代 fix PR。**

9. **[#197515：Codex “data/settings upgrade is unfinished” 持久存在](https://github.com/openclaw/openclaw/issues/197515)**  
   - 影响：升级/修复后仍显示未完成状态。  
   - 关联修复 [#186506](https://github.com/openclaw/openclaw/pull/186506) 已合并但未进入相关发行版。  
   - **有已合并修复，但发布集成尚未完成。**

10. **[#201974：直接 npm 安装回退后 plugin-skills junction 损坏，Gateway 拒绝启动](https://github.com/openclaw/openclaw/issues/201974)**  
    - 影响：npm 生命周期脚本被跳过时服务无法启动。  
    - **数据中未见明确 fix PR。**

11. **[#171831：Windows 插件状态注册严重性能回归](https://github.com/openclaw/openclaw/issues/171831)**  
    - 影响：启动约 320 秒、单轮事件循环阻塞约 112 秒、事务耗时约 173 秒。  
    - **无明确 fix PR。**

12. **[#192524：调度任务拒绝 `aws-sdk` 认证提供方](https://github.com/openclaw/openclaw/issues/192524)**  
    - 影响：Bedrock instance role 等标准 AWS 凭据链无法用于定时 Agent。  
    - **无明确 fix PR。**

13. **[#202246：2026.11.6 goal-continuation 在 Discord 重复发送提醒](https://github.com/openclaw/openclaw/issues/202246)**  
    - 影响：频道刷屏。  
    - 状态：已关闭，说明问题已处理或确认不再复现。

### P2 / 重要功能回归

14. **[#182891](https://github.com/openclaw/openclaw/issues/182891)**、**[#198373](https://github.com/openclaw/openclaw/issues/198373)**：Prompt Cache 基本不命中。  
   - **未见完整 fix PR。**

15. **[#155868](https://github.com/openclaw/openclaw/issues/155868)**：Agent 来源 run 的工具列表变化造成缓存前缀失效。  
   - **未见完整 fix PR。**

16. **[#201251](https://github.com/openclaw/openclaw/issues/201251)**：更新基线扫描及多次数据库复制导致 5409 秒耗时。  
   - **未见完整 fix PR。**

17. **[#200756](https://github.com/openclaw/openclaw/issues/200756)**：Windows beta package-swap 失败。  
   - **未见完整 fix PR。**

18. **[#200224](https://github.com/openclaw/openclaw/issues/200224)**：2026.11.5 beta 拒绝已废弃的 heartbeat 配置，移除后反而恢复心跳。  
   - **未见完整 fix PR。**

19. **[#200781](https://github.com/openclaw/openclaw/issues/200781)**：Control UI Sessions 侧栏只显示 Agent 标题、不显示会话行。  
   - **未见完整 fix PR。**

20. **[#168743](https://github.com/openclaw/openclaw/issues/168743)**：macOS Control UI 在原生认证拒绝后每 12–16 秒无限重连。  
   - **未见完整 fix PR。**

21. **[#195279](https://github.com/openclaw/openclaw/issues/195279)**：`sessions_send` 结束后后台 exec 完成唤醒失败，进程结果丢失。  
   - 状态：已关闭。  
   - **已有处理结论，当前数据未显示具体 fix PR。**

22. **[#164559](https://github.com/openclaw/openclaw/issues/164559)**：`agent_end` hook 按模型尝试而非逻辑 run 触发。  
   - 状态：已关闭。  
   - **已有处理结论。**

### 已关闭的重要问题

- [#186326：Windows managed update 在 npm layout repair 后发生 SQLite 文件锁超时](https://github.com/openclaw/openclaw/issues/186326)
- [#176187：memory-core 的稀疏 vec0 分配放大 KNN 读取并超过 deadline](https://github.com/openclaw/openclaw/issues/176187)
- [#170428：iOS 原生聊天文字大小设置不生效或不持久](https://github.com/openclaw/openclaw/issues/170428)
- [#185064：GPT-6.1 Terra 在 Codex 目录可见但路由/认证准备失败](https://github.com/openclaw/openclaw/issues/185064)

---

## 6. 功能请求与路线图信号

### 6.1 审计与运行时可观测性

- [#197297：每用户 Secret Vault](https://github.com/openclaw/openclaw/issues/197297)  
  希望多用户 Gateway 中每位用户拥有独立凭据空间，Agent 能在其会话中使用该用户自己的 token。  
  **路线图判断：** 与 [#187264 的非 owner 调度](https://github.com/openclaw/openclaw/issues/187264)、[#181791 的 owner-native 执行溯源](https://github.com/openclaw/openclaw/issues/181791) 形成同一安全路线。但涉及密钥隔离、权限边界和插件接口，短期内更可能先以插件或实验能力落地，而非直接进入核心。

- [PR #141004：记录实际运行时 Skill 使用](https://github.com/openclaw/openclaw/pull/141004)  
  **路线图判断：** 已存在完整 PR，且与审计产品方向一致，若补足验证，较可能进入近期版本。

- [PR #202961：Workboard 卡片原地请求修改](https://github.com/openclaw/openclaw/pull/202961)  
  **路线图判断：** 功能边界清晰，直接补齐 worker—reviewer 闭环，进入下一版本的概率较高。

### 6.2 会话与 Agent 运行治理

- [#178373：run 级 turn/token 预算与默认工具循环检测](https://github.com/openclaw/openclaw/issues/178373)  
  **路线图判断：** 这是成本和安全治理能力，但涉及默认行为改变，需要产品决策；更可能分阶段引入。

- [#187264：非 owner 请求的调用者范围调度](https://github.com/openclaw/openclaw/issues/187264)  
  **路线图判断：** 与共享 Slack 编码、CI checkpoint 等真实场景匹配，但需要持久化授权模型，安全评审是主要门槛。

- [#181791：可安全中断恢复的执行溯源](https://github.com/openclaw/openclaw/issues/181791)  
  **路线图判断：** 可作为长任务 Agent 的基础设施方向，但当前更偏 RFC。

- [#195397：允许 Gateway run 显式声明无需回复](https://github.com/openclaw/openclaw/issues/195397)  
  **路线图判断：** 与 [PR #201766](https://github.com/openclaw/openclaw/pull/201766) 的 tool-only turn 修复相邻，可能成为下一轮回复语义修正的一部分。

### 6.3 记忆与检索

- [PR #176037：报告重复 Markdown 记忆块](https://github.com/openclaw/openclaw/pull/176037)  
  **路线图判断：** 纯诊断命令、无破坏性变更，较适合近期合入。

- [PR #201756：PostgreSQL 迁移后保持记忆索引可搜索](https://github.com/openclaw/openclaw/pull/201756)  
  **路线图判断：** 修复数据库兼容性问题，适合近期发布。

### 6.4 定时任务与消息渠道

- [#130247：Cron 支持 `--until` / `--max-runs` 和累计运行计数](https://github.com/openclaw/openclaw/issues/130247)  
  **路线图判断：** 需求明确且能控制长期自动化成本，预计会进入路线图，但当前没有对应 PR。

- [#179685：IMAP 持久处理交接与逐消息可检查结果](https://github.com/openclaw/openclaw/issues/179685)  
  **路线图判断：** 适合作为现有 IMAP 触发器的增量可靠性扩展。

- [#170261：Matrix 流式模式下最终回复另发新消息](https://github.com/openclaw/openclaw/issues/170261)  
  **路线图判断：** 渠道兼容性问题，预计以配置项形式实现。

- [#191203：Agent 对消息 reaction 的上下文反馈](https://github.com/openclaw/openclaw/issues/191203)  
  **路线图判断：** 仍偏 RFC，需要先统一 Telegram 等渠道的事件语义。

### 6.5 工作区与低资源部署

- [PR #202800：显式恢复被移除的会话工作区](https://github.com/openclaw/openclaw/pull/202800)  
  **路线图判断：** 方向明确，但目前等待作者修改且有兼容性风险。

- [PR #202495：共享宿主运行精简核心 worker](https://github.com/openclaw/openclaw/pull/202202495)  
  **路线图判断：** 对 1–2 GiB 设备价值明显，但合并风险标为 availability，需要完整验证。

---

## 7. 用户反馈摘要

### 7.1 更新和迁移是当前最强烈的用户痛点

用户反馈集中在：

- 更新可能停在 candidate validation、package-swap 或 post-install Doctor 阶段；
- 状态库会被重复扫描、复制，甚至一次更新复制数据库五次；
- 更新失败后不清楚是“可回滚”“已迁移不可回滚”还是“服务仍可运行但数据状态不完整”；
- Windows 更新留下超过 `MAX_PATH` 的运行时目录，标准卸载工具无法清理。

代表性案例：

- [#201251：11.3 → 11.5 更新耗时 5409 秒](https://github.com/openclaw/openclaw/issues/201251)
- [#197083：11.3 更新处于部分完成状态](https://github.com/openclaw/openclaw/issues/197083)
- [#200610：Windows 卸载残留目录无法删除](https://github.com/openclaw/openclaw/issues/200610)

**用户满意点：** 项目更新器已经具备候选验证、预发布检查、迁移义务检测等较完整的安全框架。  
**不满意点：** 失败路径的性能、可恢复性和状态可见性仍不足。

### 7.2 插件生态是启动速度和可用性的主要瓶颈

用户使用外部插件、workspace plugin、Bonjour、Codex、memory-core 等扩展时，频繁遭遇：

- 启动扫描数十秒至数分钟；
- Gateway 主线程被同步插件准备阻塞；
- Docker/NAS 文件系统上的放大效应明显；
- npm fallback 后 junction 失效，直接导致 Gateway 拒绝启动。

代表性案例：

- [#160959](https://github.com/openclaw/openclaw/issues/160959)
- [#187350](https://github.com/openclaw/openclaw/issues/187350)
- [#201974](https://github.com/openclaw/openclaw/issues/201974)

**用户真实需求：** 插件数量和依赖规模增加后，OpenClaw 仍应保持可预测的启动时间和事件循环响应性。

### 7.3 Prompt Cache 失效直接增加延迟和模型成本

用户报告：

- 连续对话中缓存读取降为 0；
- 某些 OpenAI-compatible 路由中缓存读取只有约 1–3%；
- Agent 发起的消息与人类消息在同一会话使用不同工具列表，导致整个前缀缓存失效；
- 投影更新和历史重写会破坏缓存键。

代表性案例：

- [#182891](https://github.com/openclaw/openclaw/issues/182891)
- [#198373](https://github.com/openclaw/openclaw/issues/198373)
- [#155868](https://github.com/openclaw/openclaw/issues/155868)

**用户真实需求：** 同一逻辑会话内应尽量保持稳定的历史表示、工具列表和上下文引擎投影。

### 7.4 Doctor 静默卡死严重影响可维护性

用户无法接受“命令运行 15 分钟没有任何输出”。这不仅是慢，更是**失去可观测性**：用户不知道是在备份、迁移、等待锁，还是已经死锁。

相关案例：

- [#178359](https://github.com/openclaw/openclaw/issues/178359)
- [#198218](https://github.com/openclaw/openclaw/issues/198218)

**用户真实需求：** Doctor 需要阶段化日志、明确进度、超时与中断机制，以及对活锁的可诊断错误。

### 7.5 长时间编码 Agent 仍需要成本与终止边界

- [#178373](https://github.com/openclaw/openclaw/issues/178373) 指出工具循环检测默认关闭，且保留历史在每一轮重新计费。
- [#177989](https://github.com/openclaw/openclaw/issues/177989) 报告 Kimi Code 经常重复工具调用、过度轮询后台进程。
- [#186326](https://github.com/openclaw/openclaw/issues/186326) 已关闭，说明部分长任务和更新相关问题已有改善。

**用户真实需求：** Agent 应具备默认安全预算、最小轮次限制、工具调用去重和可观察的终止原因，而不是仅依赖模型自觉停止。

### 7.6 多用户与异步工作流需求正在增长

- [#187264](https://github.com/openclaw/openclaw/issues/187264) 希望非 owner 用户能在同一对话中持久化 CI/审核 checkpoint。
- [#197297](https://github.com/openclaw/openclaw/issues/197297) 希望每个用户拥有独立 secret vault。
- [#200471](https://github.com/openclaw/openclaw/issues/200471) 希望 `agent_end` 能识别 durable context engine 已提交的逻辑 turn。

这些反馈表明，项目正在从“单 Gateway、单操作者”扩展到 **多用户、多 Agent、多渠道、长时间异步协作**场景。

---

## 8. 待处理积压

### 8.1 高优先级、长期未收敛的 Issue

1. **[#160959：插件捕获阻塞 Gateway](https://github.com/openclaw/openclaw/issues/160959)**  
   创建于 2026-09-29，已有 84 条评论，仍标记为需要维护者审查且无新修复 PR。应视为最高优先级技术债。

2. **[#178359：Doctor 静默卡死](https://github.com/openclaw/openclaw/issues/178359)**  
   创建于 2026-10-20，31 条评论，长期没有明确 fix PR，且直接影响维护流程。

3. **[#197083：更新部分完成与 WAL 验证失败](https://github.com/openclaw/openclaw/issues/197083)**  
   31 条评论，属于版本迁移可靠性问题，应明确数据一致性结论和修复负责人。

4. **[#198218：Doctor/update 活锁](https://github.com/openclaw/openclaw/issues/198218)**  
   已有稳定版复现，具备充分调查条件，但尚未看到落地修复。

5. **[#153899：Gateway drain 超时与关闭后任务继续运行](https://github.com/openclaw/openclaw/issues/153899)**  
   创建于 2026-09-20，已被标记 stale；问题同时影响正确性和停机体验，不宜继续搁置。

6. **[#137781：WhatsApp 重复 conversation row](https://github.com/openclaw/openclaw/issues/137781)**  
   P0，涉及唯一约束失败和消息丢失，仍需明确复现与修复。

7. **[#171831：Windows 启动性能严重回归](https://github.com/openclaw/openclaw/issues/171831)**  
   已有量化对比，属于稳定版用户可感知问题，应补做版本复测并确认是否仍存在。

8. **[#182891](https://github.com/openclaw/openclaw/issues/182891)、[#198373](https://github.com/openclaw/openclaw/issues/198373)**  
   Prompt Cache 问题横跨多个版本和提供方，已经形成长期、跨模块的技术债。

### 8.2 长时间等待维护或验证的 PR

- [PR #202800：显式恢复会话工作区](https://github.com/openclaw/openclaw/pull/202800) — XL、兼容性风险、等待作者修改。
- [PR #202495：共享宿主运行精简 worker](https://github.com/openclaw/openclaw/pull/202495) — 可用性风险，需要系统级验证。
- [PR #202962：移除 Claude 原生工具的 OpenClaw exec approvals](https://github.com/openclaw/openclaw/pull/202962) — 安全敏感改动，必须完成安全评审。
- [PR #202306：将无项目会话移入项目](https://github.com/openclaw/openclaw/pull/202306) — XL 且涉及 Codex 与安全敏感代码，等待维护者。
- [PR #141004：记录运行时 Skill 使用](https://github.com/openclaw/openclaw/pull/141004) — 已开放约两个半月，等待证明。
- [PR #150688：过期 OAuth profile 重连](https://github.com/openclaw/openclaw/pull/150688) — 浏览器合成验证已完成，但真实过期 xAI 授权仍未验证。
- [PR #176037：重复 Markdown 记忆块报告](https://github.com/openclaw/openclaw/pull/176037) — 已开放约一个月，存在兼容性风险标记，等待维护者。

### 8.3 建议的维护优先级

1. **先收敛发布阻塞项：** [#160959](https://github.com/openclaw/openclaw/issues/160959)、[#197083](https://github.com/openclaw/openclaw/issues/197083)、[#178359](https://github.com/openclaw/openclaw/issues/178359)、[#198218](https://github.com/openclaw/openclaw/issues/198218)。
2. **再处理跨平台更新恢复：** [#200756](https://github.com/openclaw/openclaw/issues/200756)、[#200610](https://github.com/openclaw/openclaw/issues/200610)、[#201974](https://github.com/openclaw/openclaw/issues/201974)。
3. **建立 Prompt Cache 专项：** 统一处理 [#182891](https://github.com/openclaw/openclaw/issues/182891)、[#198373](https://github.com/openclaw/openclaw/issues/198373)、[#155868](https://github.com/openclaw/openclaw/issues/155868) 和 [#172031](https://github.com/openclaw/openclaw/issues/172031)。
4. **清理长期 PR 队列：** 对高价值 PR 明确补证明、拆分或关闭，避免 323 条待合并 PR 持续扩大审查成本。
5. **把安全与多用户能力拆成可验证的小步：** 优先推进 [#141004](https://github.com/openclaw/openclaw/pull/141004)、[#202961](https://github.com/openclaw/openclaw/pull/202961)，再逐步推进 secret vault、调用者范围调度和执行溯源。

---

## 结论

OpenClaw 今日的问题发现和代码修复活动都非常高，覆盖面广，说明项目拥有活跃的社区和较强的迭代能力。然而，用户侧最突出的矛盾不是“功能不足”，而是 **升级、维护命令、插件加载和缓存行为不够可预测**。

短期内最值得维护者关注的不是继续扩张功能面，而是：

- 让插件和数据库操作彻底移出 Gateway 主线程；
- 为 Doctor 和 updater 增加清晰进度、超时、活锁检测与可恢复状态；
- 统一 Prompt Cache 的会话前缀与工具列表稳定性；
- 完成 Windows、macOS、PostgreSQL、Codex 和 OAuth 路径的发布验证；
- 将 323 条待合并 PR 中的高价值修复优先落地。

**项目健康度：中高，但发布稳定性风险仍偏高。**

---

## 横向生态对比

# 个人 AI 助手 / 自主智能体开源生态横向对比分析报告

**分析日期：2026-11-21**  
**数据口径：各仓库过去 24 小时 GitHub Issues、PR 与 Release 更新**

---

## 1. 生态全景

个人 AI 助手与自主智能体生态正处于**“功能快速扩张、生产可靠性补欠债”并存**的阶段：OpenClaw、LobsterAI、Hermes Agent 和 QwenPaw 保持高强度开发，OpenHuman 推进记忆后端插件化，NanoBot 聚焦 WebUI 打磨，PicoClaw 则进入维护与版本交付压力期。  
共同热点已从“能否调用模型”转向**升级迁移、插件生命周期、Gateway/Worker 稳定性、跨平台兼容、上下文与记忆治理、长任务资源预算**。  
社区需求正在向多 Agent 协作、多渠道入口、本地模型管理、可审计执行和自托管扩展发展，但不少项目仍存在**Issue 已关闭而 PR 未合并、修复未进入 Release、依赖型 PR 大量积压**的交付断点。  
总体而言，生态产品能力丰富，但成熟度分化明显：**LobsterAI、NanoBot 处于交付型迭代，OpenClaw、QwenPaw、Hermes Agent 处于高风险高速迭代，OpenHuman 正进行架构收敛，PicoClaw 则面临治理与发布信心问题**。

---

## 2. 各项目活跃度对比

### 2.1 核心数据

| 项目 | 今日 Issues | 今日 PRs | Release | 待合并 PR | 主要推进方向 | 健康度 |
|---|---:|---:|---|---:|---|---|
| **OpenClaw** | **351**（259 活跃、92 关闭） | **500**（323 待处理、177 合并/关闭） | 无新版本；macOS 2026.11.6 appcast PR 准备中 | **323** | Gateway 响应性、更新迁移、插件性能、Prompt Cache、会话/审计 | **中高，风险偏高** |
| **NanoBot** | 2（1 新开、1 关闭） | 11（1 待合并、10 合并/关闭） | 无 | 1 | WebUI、凭据安全、交互与性能 | **良好** |
| **PicoClaw** | 3（2 开放、1 关闭） | 7（全部关闭） | 无 | 0 | 历史修复合并、维护与依赖治理 | **中等偏弱** |
| **IronClaw** | 0 | 0 | 无 | 0 | 无活动 | **无法判断／静默** |
| **LobsterAI** | 0 | 17（3 待合并、14 合并/关闭） | **有：2026.11.20** | 3 | dsh 能力恢复、多模态、桌面迁移 | **良好** |
| **QwenPaw** | 7（5 活跃、2 关闭） | 30（20 待合并、10 合并/关闭） | 无 | 20 | 审批链路、本地模型、Console、沙箱、跨通道 | **中高，集成压力明显** |
| **Hermes Agent** | 50（46 活跃、4 关闭） | 50（45 待合并、5 合并/关闭） | **有：v0.23.3 canary** | 45 | 升级可靠性、插件、Desktop、多平台生命周期 | **中高，稳定性警戒** |
| **OpenHuman** | 10（均为关闭） | 5（全部待合并） | 无 | 5 | 记忆后端插件化、Rust Core、热更新 | **良好，交付偏慢** |

### 2.2 活跃度判断

#### 第一梯队：高吞吐、高风险

- **OpenClaw**：Issue、PR 均为生态最高规模，但待合并 PR 达 323 条，当前主要矛盾不是贡献不足，而是审查、集成与发布收敛能力。
- **Hermes Agent**：50 条 Issue、50 条 PR、45 条待合并，并已发布 canary；生产反馈密集，但升级、插件依赖、Windows/macOS 生命周期问题集中。
- **QwenPaw**：20/30 PR 尚待合并，且本地模型功能存在堆叠式 PR 链；功能储备强，但集成和回归压力较大。

#### 第二梯队：稳定交付与架构收敛

- **LobsterAI**：当日 14 个 PR 收尾并发布版本，是唯一同时具备明显功能交付和正式 Release 的项目；但 Issue 零活动降低了需求验证信号。
- **OpenHuman**：记忆系统插件化路线清晰，相关任务成组关闭，但 5 个 PR 全未合并，架构成果尚未形成发布闭环。
- **NanoBot**：10 个 PR 完成合并或关闭，以 WebUI 安全和细节修缮为主；规模较小，但交付效率较高。

#### 第三梯队：维护与交付风险

- **PicoClaw**：无待合并 PR，但关键 Bug 仍开放、依赖升级全部关闭、出现活跃 Fork，说明“队列清空”并不等于问题解决。
- **IronClaw**：过去 24 小时完全无活动，无法判断是稳定沉寂、仓库低活跃，还是缺乏社区关注。

---

## 3. OpenClaw 在生态中的定位

### 3.1 核心优势

1. **社区与贡献规模显著领先**  
   OpenClaw 今日更新 351 条 Issue、500 条 PR，约为 Hermes Agent 的 7–10 倍、QwenPaw 的 10–17 倍。其插件、会话、迁移、更新和渠道生态拥有明显规模效应。

2. **覆盖完整的个人 Agent 运行栈**  
   项目同时处理 Gateway、会话、Web UI、Workboard、审计、记忆、插件、渠道、跨平台更新和 Prompt Cache，已不只是聊天 UI，而是趋向完整的个人 Agent 操作系统。

3. **运维与治理意识较强**  
   审计 Skill 实际使用、拒绝空白审计过滤器、显式恢复会话工作区、长期任务预算、Secret Vault、调用者范围调度等议题，说明其正在处理多用户和长期运行治理，而不仅是增加模型调用能力。

4. **跨平台更新体系相对完整**  
   已具备候选验证、预发布检查、迁移义务检测、macOS appcast 等发布框架；但失败路径的进度显示、回滚和幂等恢复仍不足。

### 3.2 与同类项目的技术路线差异

| 维度 | OpenClaw | 同类项目主要路线 |
|---|---|---|
| 核心定位 | 通用 Gateway + 插件化个人/团队 Agent 平台 | LobsterAI 偏桌面多模态工作站；QwenPaw 偏本地模型与 Console；Hermes 偏插件化 Agent 与 Desktop/Kanban；OpenHuman 偏 Rust Core + 可插拔记忆 |
| 架构重点 | Gateway 生命周期、插件准备、会话投影、审计、渠道和更新系统 | 同类项目更强调单一客户端体验、本地模型控制、桌面迁移或记忆标准 |
| 扩展方式 | 插件、会话、工具、渠道、多 Agent 协作 | OpenHuman 使用统一 driver contract；QwenPaw 将本地模型管理插件化；LobsterAI 恢复 dsh 原生工具 |
| 部署形态 | 跨平台服务端与控制面，支持多用户和自托管 | NanoBot、PicoClaw 更轻量；LobsterAI 强桌面绑定；QwenPaw 强本地运行时 |
| 当前短板 | 插件扫描阻塞、更新迁移、Doctor 活锁、缓存失效、PR 积压 | 同类项目分别面临桌面迁移回归、本地模型集成、升级依赖丢失、维护责任不清 |

### 3.3 社区规模对比

- **规模最大**：OpenClaw。
- **次高层级**：Hermes Agent、QwenPaw。
- **中型活跃**：LobsterAI、OpenHuman。
- **小型稳定/低活跃**：NanoBot、PicoClaw。
- **静默项目**：IronClaw。

不过，规模并不等于成熟度：OpenClaw 的 323 条待合并 PR、Hermes 的 45 条待合并 PR，均表明其生态面临共同的**审查吞吐不足**问题。

---

## 4. 共同关注的技术方向

### 4.1 更新、迁移与安装可靠性

涉及项目：**OpenClaw、Hermes Agent、LobsterAI、PicoClaw、QwenPaw、OpenHuman**

共同诉求：

- 更新过程必须具备明确阶段、进度、超时、中断和错误语义；
- 迁移失败后需明确数据是否完整、是否可回滚；
- 插件或 provider 依赖不能在升级后静默丢失；
- Windows、macOS、Linux、Docker 和源码安装应保持一致行为；
- 依赖升级不能长期关闭或积压。

典型案例：

- OpenClaw：Doctor 活锁、WAL 验证失败、数据库重复复制；
- Hermes：插件依赖丢失、owed-restart 无法清除、macOS 重复 App Bundle；
- QwenPaw：Windows 配置保存冲突、子进程退出与孤儿进程；
- OpenHuman：Linux systemd user unit 路径错误。

**判断**：安装与更新已经从“辅助工程”升级为 Agent 产品的核心竞争力。

### 4.2 插件生命周期与生态治理

涉及项目：**OpenClaw、Hermes Agent、QwenPaw、LobsterAI**

共同诉求：

- 插件安装、扫描、准备、升级和重载不得阻塞主进程；
- 插件状态、依赖、权限和失败原因应可观察；
- 第三方后端应通过稳定接口或统一协议接入；
- 插件变更不应触发不必要的完整 Gateway 重启。

典型表现：

- OpenClaw 插件树扫描达 58 秒、Gateway 阻塞数分钟；
- Hermes 插件目录重复解析造成 93 秒延迟，插件变化触发 15–25 分钟 fence；
- QwenPaw 将本地模型生命周期抽为 Provider；
- LobsterAI 恢复皮肤、图片、视频等 dsh 原生能力。

**判断**：插件正在从简单扩展点演变为核心运行时，但多数项目的插件治理尚未跟上生态规模。

### 4.3 Gateway / Worker 生命周期与“假健康”

涉及项目：**OpenClaw、Hermes Agent、QwenPaw**

共同诉求：

- 请求必须在 Agent 就绪后被接受，否则明确拒绝；
- Worker、Gateway、审批、工具调用应有可靠状态机；
- 进程健康不等于业务健康；
- 长任务、超时和并发必须能区分“尚未完成”和“已经崩溃”。

典型表现：

- OpenClaw：Gateway drain 等待完整超时、关闭后资源仍被访问；
- Hermes：2 秒 control socket 超时将 Worker 误判为崩溃；
- QwenPaw：启动期间请求返回 HTTP 200 后挂起、微信轮询死亡但健康检查正常。

**判断**：这是当前自主智能体从 Demo 走向生产环境最关键的一类工程债。

### 4.4 会话连续性、上下文与 Prompt Cache

涉及项目：**OpenClaw、Hermes Agent、LobsterAI、QwenPaw**

共同诉求：

- 工具调用结束后必须产生稳定终态；
- 同一逻辑会话应保持历史、工具列表和系统前缀稳定；
- 会话分叉、压缩、迁移后，消息归属和上下文不能错乱；
- `NO_REPLY`、空回复、工具结果和后续补充输入应有统一语义。

典型表现：

- OpenClaw：tool-only turn、`NO_REPLY`、Prompt Cache 读取降至 0；
- Hermes：Desktop 刷新后已完成回复消失、压缩 segment 无限重试；
- LobsterAI：dsh 会话分叉与视觉历史位置映射；
- QwenPaw：多媒体预算导致内容被省略。

**判断**：上下文稳定性已成为成本、延迟、交互完成性和数据可信度的共同基础能力。

### 4.5 记忆后端标准化与自托管

涉及项目：**OpenHuman、OpenClaw、Hermes Agent**

具体信号：

- OpenHuman 明确推进统一 memory driver contract、conformance suite，以及 Supermemory、mem0、agentmemory、Cognee 适配器；
- OpenClaw 推进 PostgreSQL 迁移后的记忆索引、重复记忆诊断；
- Hermes 涉及 SessionDB 压缩兼容和长期会话恢复。

共同诉求：

- 记忆后端可替换、可自托管；
- 存储、召回、遗忘等行为有一致性测试；
- 数据库迁移后历史记忆仍可搜索；
- 记忆能力不应与宿主运行时深度耦合。

**判断**：记忆层正在经历类似插件接口标准化的过程，OpenHuman 的路线最为系统化。

### 4.6 本地模型、GPU 与运行时管理

涉及项目：**QwenPaw、Hermes Agent、LobsterAI**

具体诉求：

- 支持 llama.cpp、MLX、GPU 和自动更新；
- 正确识别 Ollama `num_ctx`，而非套用云端默认值；
- 解决本地模型子进程退出、孤儿进程和端口占用；
- 在 Console 中提供统一的模型安装、运行和更新控制。

**判断**：个人 AI 助手正在从“远程模型客户端”转向“本地模型运行时管理器”。

### 4.7 多用户、审批与可审计执行

涉及项目：**OpenClaw、QwenPaw、Hermes Agent、OpenHuman**

具体诉求：

- 每用户 Secret Vault 和凭据隔离；
- 审批请求必须送达发起通道，而非只在 Console 出现；
- 记录 Agent 实际调用的 Skill 和工具；
- 非 owner 调度、执行溯源和可中断恢复；
- 防止 Agent 因文档歧义误删环境变量或执行破坏性操作。

**判断**：多用户共享 Gateway 将推动 Agent 平台从“会话工具”演进为具备权限、身份和审计边界的执行系统。

---

## 5. 差异化定位分析

| 项目 | 功能侧重 | 目标用户 | 技术架构特征 | 最适合的采用场景 |
|---|---|---|---|---|
| **OpenClaw** | Gateway、插件、渠道、会话、审计、多 Agent | 高级个人用户、团队运营者、自托管部署者 | 服务端核心 + Web UI + 插件体系，跨平台更新与状态数据库 | 需要多渠道、多插件、长期运行和治理能力的个人/团队 Agent 平台 |
| **NanoBot** | WebUI、凭据配置、编辑重发、目标与编辑器交互 | 注重聊天体验的个人用户 | 轻量客户端、React/UI 导向，性能准入严格 | 轻量个人助手、渠道配置和本地对话界面 |
| **PicoClaw** | 轻量 Gateway、模型配置、Provider、基础 Web UI | 边缘设备、NAS、个人开发者 | Go 倾向的轻量实现，关注低成本部署 | 资源受限设备上的基础 Agent 与多 Provider 接入 |
| **LobsterAI** | 桌面多模态、图片/视频/PPT、浏览器、专家角色、Cowork | 创作者、办公用户、桌面 AI 工作者 | Electron 桌面端 + dsh 引擎 + 本地迁移桥接 | 桌面端创作、媒体生产、专家助手和 Cowork 工作流 |
| **QwenPaw** | 本地模型、Console、审批、Code Mode、多媒体 | 本地模型用户、开发者、企业内网部署者 | 本地运行时 + Console + Provider/沙箱体系 | 本地模型管理、反向代理部署、受控工具调用 |
| **Hermes Agent** | 插件生态、Desktop、渠道、异步任务、Kanban | 高级用户、自动化工作流、多渠道重度用户 | 插件/Provider 驱动，Desktop、TUI、Gateway 协同 | 多渠道个人助理、插件化扩展、异步任务和 Kanban 协作 |
| **OpenHuman** | 记忆、Agent 团队、Rust Core、档案与生态数据 | 自托管开发者、记忆系统研究者、长期 Agent 用户 | Rust Core + memory driver contract + 多后端适配 | 可插拔记忆、多 Agent 编排和私有化部署 |
| **IronClaw** | 暂无当日活动信号 | 暂无法判断 | 暂无法判断 | 需先确认维护状态和产品定位 |

### 关键差异

1. **OpenClaw 是平台型，OpenHuman 是基础设施型**  
   OpenClaw 覆盖运行、插件、渠道、审计和更新完整链路；OpenHuman 当前最鲜明的差异化是可插拔记忆协议。

2. **LobsterAI 强在桌面生产力，Hermes 强在扩展与异步生态**  
   LobsterAI 围绕图像、视频、PPT、浏览器和桌面交互构建完整工作台；Hermes 围绕 Provider、插件、渠道、Desktop 和 Kanban 构建高度可扩展的 Agent 平台。

3. **QwenPaw 的本地模型路线最明确**  
   其 llama.cpp、MLX、GPU、Console 自动更新和 Provider 化组合，比其他项目更系统地覆盖本地模型生命周期。

4. **NanoBot 与 PicoClaw 更轻量**  
   NanoBot 主要竞争 WebUI 细节和交互一致性；PicoClaw 更强调低成本与边缘部署，但当前维护和发布治理较弱。

---

## 6. 社区热度与成熟度

### 6.1 社区热度分层

#### A 层：大型高热社区

- **OpenClaw**：351 Issues、500 PRs，讨论覆盖插件、更新、缓存、多用户等完整生态。
- **Hermes Agent**：50 Issues、50 PRs，最高评论 Issue 达 68 条，生产环境反馈密度高。
- **QwenPaw**：7 Issues、30 PRs，需求侧体量较小但开发侧密度高。

#### B 层：中型、交付导向社区

- **LobsterAI**：17 PR、1 个 Release，贡献集中于桌面和 dsh 迁移。
- **OpenHuman**：10 Issues、5 PRs，记忆插件化议题形成集中讨论。
- **NanoBot**：2 Issues、11 PRs，问题少但 UI 修复响应迅速。

#### C 层：低活跃或治理风险社区

- **PicoClaw**：3 Issues、7 PRs，依赖 PR 全部关闭，Fork 讨论升温。
- **IronClaw**：无活动，成熟度无法判断。

### 6.2 项目所处阶段

#### 快速迭代阶段

- **OpenClaw**：持续扩展治理、插件和缓存能力，但关键稳定性问题积压。
- **QwenPaw**：本地模型、Console、沙箱和审批能力快速铺开，大型堆叠 PR 较多。
- **Hermes Agent**：插件、桌面、渠道和异步任务同时演进，canary 已进入真实环境验证。
- **LobsterAI**：dsh 架构迁移和桌面功能恢复集中冲刺。

#### 质量巩固阶段

- **NanoBot**：重点处理凭据覆盖、路由、焦点、长消息和性能基线，适合下一轮稳定发布。
- **OpenHuman**：从单体记忆逻辑转向 driver contract、conformance suite 和领域化 Core，重点是架构收敛与交付。
- **PicoClaw**：已从功能扩张转向修复合并、依赖维护和治理恢复阶段。

#### 成熟度分级

- **相对成熟且持续交付**：LobsterAI、NanoBot。
- **活跃但集成风险较高**：OpenClaw、Hermes Agent、QwenPaw。
- **架构方向明确、交付偏慢**：OpenHuman。
- **治理与版本交付承压**：PicoClaw。
- **信息不足**：IronClaw。

---

## 7. 值得关注的趋势信号

### 7.1 Agent 产品的核心竞争力正在转向“生命周期管理”

用户越来越少只问“能不能调用模型”，而更关注：

- 能否安全安装和升级；
- 插件和依赖是否完整；
- Gateway/Worker 是否正确退出；
- 会话和记忆是否跨版本连续；
- 失败后能否恢复、回滚和诊断。

**开发启示**：Agent 项目应把 update、Doctor、迁移、插件安装和状态恢复视为一级功能，而非发布后的辅助脚本。

### 7.2 “假健康”将成为比普通崩溃更严重的问题

QwenPaw 微信通道进程正常但消息停止，Hermes Worker 未终态却被判崩溃，OpenClaw 请求成功但挂起。  
这说明未来可观测性必须覆盖：

- 业务链路活性；
- 工具、审批和结果回写；
- 会话与 UI 一致性；
- 通道游标和重试状态；
- 子进程树和版本切换状态。

仅提供 `/health` 返回 200 已不足以证明 Agent 可用。

### 7.3 插件生态正进入“平台治理”阶段

插件数量增长后，瓶颈从发现和安装转向：

- 增量扫描与缓存；
- 依赖完整性；
- 权限与能力隔离；
- 沙箱；
- 版本兼容；
- 热更新和回滚；
- 统一协议与一致性测试。

OpenHuman 的 memory driver contract、QwenPaw 的本地模型 Provider、Hermes 的插件目录体系，代表未来插件化扩展将逐渐标准化。

### 7.4 记忆将成为独立基础设施层

OpenHuman 同时推进统一合约、参考服务、conformance suite 和多个真实后端适配，是明确的架构信号。  
未来竞争点将不只是“是否支持长期记忆”，而是：

- 后端能否自由替换；
- 自托管是否可靠；
- 记忆行为能否被测试；
- 数据迁移是否不丢；
- 不同 Agent 是否能安全共享或隔离记忆。

### 7.5 本地模型竞争将转向完整运行时

只支持加载 GGUF 已不再足够，用户需要：

- 下载、安装和自动更新；
- GPU/MLX 控制；
- 上下文窗口准确识别；
- 进程健康与资源清理；
- Console 可视化管理；
- 云端与本地模型统一路由。

QwenPaw 在这一方向最完整，Hermes 和 LobsterAI 也通过不同方式进入同一竞争维度。

### 7.6 多 Agent 的下一道门槛是治理，而非编排语法

OpenClaw 的 Secret Vault、调用者范围调度、执行溯源，OpenHuman 的 Named Agent Teams，以及 QwenPaw 的跨通道审批，共同说明：

- Agent 数量增加后，身份、权限、凭据、审计和责任归属比“如何让多个 Agent 互相调用”更重要；
- 调度系统必须回答谁发起、谁批准、执行了什么、使用了哪个密钥、结果由谁接收；
- 未来成熟的多 Agent 平台会优先建设统一治理平面。

### 7.7 Prompt Cache 会成为 Agent 成本治理的一部分

OpenClaw 的缓存命中率跌至 0 或 1%，本质上是运行时表示不稳定，而非单一供应商问题。  
对于开发者，应把以下内容纳入缓存键和会话稳定性设计：

- 系统提示与历史投影；
- 工具列表及其顺序；
- 上下文引擎准入结果；
- Skill 和权限集合；
- 会话元数据与压缩边界。

缓存优化不仅是性能调优，也是降低长会话成本和尾延迟的关键。

### 7.8 发布策略需要从“功能发布”转向“场景发布”

LobsterAI 已发布版本，但 dsh 迁移仍需验证媒体历史、角色、会话分叉和跨屏行为；Hermes canary 也需要明确 Windows、macOS、Docker 和源码安装限制。  
建议采用以下发布结构：

1. 核心安装与升级路径；
2. 插件/依赖完整性；
3. 会话与数据迁移；
4. 多平台进程生命周期；
5. 渠道和审批链路；
6. 性能与缓存基线；
7. 已知限制及恢复手册。

---

## 结论

当前生态已经形成清晰分层：

- **OpenClaw** 以最大社区规模占据通用个人/团队 Agent 平台中心，但发布稳定性和 PR 集成吞吐是主要瓶颈；
- **LobsterAI** 以桌面多模态和 dsh 能力恢复领先交付；
- **Hermes Agent** 依靠插件、渠道、Desktop 和异步任务建立差异化，但升级与跨平台债务突出；
- **QwenPaw** 在本地模型与 Console 管理方向最具系统性；
- **OpenHuman** 在可插拔记忆标准与 Rust Core 架构上最具长期潜力；
- **NanoBot** 以小而快的 WebUI 打磨见长；
- **PicoClaw** 当前需要优先解决维护责任、依赖治理和发布闭环；
- **IronClaw** 因缺乏当日活动信号，尚无法评估。

**最重要的行业结论是：个人 AI 助手的竞争已从模型接入和界面功能，转向运行可靠性、上下文与记忆稳定性、插件治理、本地模型生命周期以及多用户权限审计。下一阶段胜出的项目，不一定是功能最多的项目，而更可能是能够把这些基础能力做成可预测、可恢复、可观测产品的项目。**

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目动态日报

**日期：2026-11-21**  
**仓库：**[HKUDS/nanobot](https://github.com/HKUDS/nanobot)

## 今日速览

- 过去 24 小时共更新 **2 条 Issues**（新开 1、关闭 1）和 **11 条 PR**（待合并 1、已合并或关闭 10），开发活动高度集中在 **WebUI 体验、凭据安全和交互稳定性**。
- 今日没有新版本发布，当前变更仍处于 PR 汇总阶段；由于数据未提供合并提交、发布时间及分支信息，无法确认这些改动是否已进入正式版本。
- 已关闭 PR 覆盖频道凭据防自动填充、侧边频道命令路由、键盘焦点、长消息折叠、自动化删除确认及多项 UI 重构，说明 WebUI 正从功能修补逐步转向系统化打磨。
- [#6742](https://github.com/HKUDS/nanobot/issues/6742) 是今日唯一新开 Issue，内容偏向商业服务推荐而非明确的产品缺陷，需要注意自发推广对 Issue 区信噪比的影响。
- 综合活跃度评估：**开发活跃度高、需求侧热度偏低、发布节奏平稳但版本可见度不足**。今日推进主要体现在 WebUI 稳定性与交互一致性，但唯一待合并 PR 明确因性能不达标而暂缓合并。

---

## 项目进展

### 1. 修复浏览器自动填充覆盖频道凭据

[#6733](https://github.com/HKUDS/nanobot/pull/6733) 为频道密钥输入项增加防止登录自动填充的处理，避免 Chrome 将保存的 WebUI 访问密码写入渠道 Token 或密码字段。该修复直接对应已关闭 Issue [#6732](https://github.com/HKUDS/nanobot/issues/6732)，可降低 Telegram 等渠道在下一次启动时因凭据被覆盖而失败的风险。

**推进意义：** 从根因上处理敏感配置被静默破坏的问题，是今日最具实际稳定性价值的改动之一。

### 2. 修复侧边频道命令回复的路由与上下文丢失

[#6736](https://github.com/HKUDS/nanobot/pull/6736) 修复 `/dream`、`/dream-log`、`/dream-restore` 和 `/pairing` 等命令在 WebUI 流式回复期间可能丢失可见回答前缀、历史或线程上下文的问题，并保留侧边频道命令回复的路由信息。

**推进意义：** 改善多渠道、WebUI 与流式响应并发时的消息完整性，减少“内容被截断”“回复进入错误线程”等可靠性风险。

### 3. 改善键盘焦点和焦点指示器行为

- [#6734](https://github.com/HKUDS/nanobot/pull/6734)：根据输入方式控制 `:focus-visible`，避免指针点击后按 `Shift`、`Escape` 或修饰键时浏览器错误显示键盘焦点环。
- [#6735](https://github.com/HKUDS/nanobot/pull/6735)：修复使用文件右键菜单或图片缩放快捷键后，键盘焦点无法恢复的问题。

**推进意义：** 补齐 WebUI 键盘可访问性及指针—键盘交互切换的边界场景，提升桌面端操作一致性。

### 4. 优化 WebUI 设置页与样式结构

- [#6741](https://github.com/HKUDS/nanobot/pull/6741)：统一设置页侧栏底部 Local、Restart、Sign out 的行布局、间距和高度。
- [#6740](https://github.com/HKUDS/nanobot/pull/6740)：将输入框调色板与自动化日历样式迁移至组件附近，集中维护动画、减少动态效果和强制颜色模式相关规则。

**推进意义：** 降低样式分散带来的维护成本，提升设置页视觉一致性和后续迭代效率。

### 5. 升级消息区与编辑器交互

- [#6739](https://github.com/HKUDS/nanobot/pull/6739)：默认折叠超过可见线程区域高度 50% 的用户长消息，并设置最小高度阈值。
- [#6738](https://github.com/HKUDS/nanobot/pull/6738)：抽取统一的 `ComposerPalette` 模块，精炼斜杠命令、技能和提及建议面板。
- [#6737](https://github.com/HKUDS/nanobot/pull/6737)：将 `GoalIsland` 重构为浮动、半透明且可扩展的目标卡片。
- [#6731](https://github.com/HKUDS/nanobot/pull/6731)：删除关联自动化的主题时，改用持续显示的确认 Toast，而非阻塞式确认弹窗。

**推进意义：** 今日 PR 组合表明 WebUI 正在集中推进消息密度、编辑器能力、目标组件视觉和危险操作确认机制的整体升级。

### 6. 会话内消息编辑并重新发送仍未达到性能要求

[#6323](https://github.com/HKUDS/nanobot/pull/6323) 实现同一会话内编辑并重新发送消息，但 PR 明确标注“暂缓合并且存在冲突”。在 64 组配对样本中，配对中位数约慢 **9.27 ms**，95% 区间为 **+3.27 至 +14.12 ms**；其确认环节单独看快约 **1.57 ms**。

**推进意义：** 功能逻辑已经过验证，但尚未满足当前冻结性能基线，因此不能视为已完成交付。

---

## 社区热点

### Issue #6742：Screwtape.ai 的 `agent_fleet_compliance` 服务推广

- 状态：**开放**
- 作者：[@cursor[bot]](https://github.com/HKUDS/nanobot/issues/6742)
- 热度：**0 评论、0 点赞**
- 链接：[GitHub Issue #6742](https://github.com/HKUDS/nanobot/issues/6742)

该 Issue 面向多智能体或 Agent Fleet 运营者，宣传外部服务提供的：

1. 外部工具或供应商风险筛查；
2. 可导出的支出审计；
3. 无需自建合规栈的自助接入方式。

**诉求分析：** 其反映的潜在用户需求是——多 Agent 并行运行时，运营者希望统一管理第三方工具成本、供应商风险和审计记录。不过，该内容带有明显商业推广性质，目前也没有社区互动，尚不能视为高共识需求。建议维护者明确区分产品需求、服务推荐和商业推广，并建立相应 Issue 模板或标签。

### PR #6323：会话内编辑与重新发送

- 状态：**开放、待合并、存在冲突**
- 链接：[GitHub PR #6323](https://github.com/HKUDS/nanobot/pull/6323)
- 热度：数据未提供评论及点赞

这是今日最值得关注的功能型 PR。其功能已完成验证，但因端到端性能回归而主动暂缓，说明项目正在执行明确的性能准入标准，而非以牺牲性能换取功能上线。

### 其他主要 PR

今日关闭的 PR 多由 [@chengyongru](https://github.com/chengyongru) 提交，覆盖 WebUI 稳定性、交互设计和代码组织。相关链接：

- [#6733](https://github.com/HKUDS/nanobot/pull/6733)
- [#6734](https://github.com/HKUDS/nanobot/pull/6734)
- [#6735](https://github.com/HKUDS/nanobot/pull/6735)
- [#6736](https://github.com/HKUDS/nanobot/pull/6736)
- [#6737](https://github.com/HKUDS/nanobot/pull/6737)
- [#6738](https://github.com/HKUDS/nanobot/pull/6738)
- [#6739](https://github.com/HKUDS/nanobot/pull/6739)
- [#6731](https://github.com/HKUDS/nanobot/pull/6731)
- [#6740](https://github.com/HKUDS/nanobot/pull/6740)
- [#6741](https://github.com/HKUDS/nanobot/pull/6741)

---

## Bug 与稳定性

### 高优先级：配置凭据可能被浏览器静默覆盖

- Issue：[#6732](https://github.com/HKUDS/nanobot/issues/6732)
- 修复 PR：[#6733](https://github.com/HKUDS/nanobot/pull/6733)
- 状态：Issue 已关闭，修复 PR 已关闭
- 影响：频道 Token、密码等敏感配置可能被 WebUI 登录密码自动填充并写入 `config.json`，且保存时没有明显提示。
- 风险：**高**。问题可能造成渠道连接中断、机器人启动失败或凭据泄露风险。

### 中高优先级：侧边频道命令回复丢失上下文或路由

- PR：[#6736](https://github.com/HKUDS/nanobot/pull/6736)
- 状态：PR 已关闭
- 影响：在 WebUI 流式回复过程中执行 `/dream`、`/dream-log`、`/dream-restore` 或 `/pairing`，可能出现回答前缀被清除、历史丢失或回复进入错误线程。
- 风险：**中高**。直接影响消息正确性和多渠道场景的一致性。

### 中优先级：指针操作后键盘焦点恢复异常

- PR：[#6735](https://github.com/HKUDS/nanobot/pull/6735)
- 状态：PR 已关闭
- 影响：使用文件右键菜单或图片缩放快捷键后，应用可能持续处于指针交互模式，影响后续键盘操作。
- 风险：**中**。主要影响可访问性和连续操作体验。

### 中优先级：错误显示键盘焦点指示器

- PR：[#6734](https://github.com/HKUDS/nanobot/pull/6734)
- 状态：PR 已关闭
- 影响：指针点击后再使用 `Shift`、`Escape` 等键时，浏览器可能错误显示 `:focus-visible` 焦点环。
- 风险：**中低**。更偏向视觉与可访问性一致性问题。

### 中低优先级：长消息导致会话视图过度拥挤

- PR：[#6739](https://github.com/HKUDS/nanobot/pull/6739)
- 状态：PR 已关闭
- 影响：过长的用户消息可能遮挡或挤压线程内容。
- 风险：**低至中**。已通过折叠机制缓解。

### 性能回归：编辑并重新发送消息端到端变慢

- PR：[#6323](https://github.com/HKUDS/nanobot/pull/6323)
- 状态：仍开放，存在冲突，暂不合并
- 数据：64 组配对测试中，配对中位数变慢 **9.27 ms**，95% 区间为 **+3.27 至 +14.12 ms**；确认环节快约 **1.57 ms**。
- 风险：**中**。功能本身可用，但尚未达到项目性能基线。

---

## 功能请求与路线图信号

### 会话内编辑并重新发送消息

- PR：[#6323](https://github.com/HKUDS/nanobot/pull/6323)
- 信号强度：**高**
- 判断：该能力已进入实现和性能验证阶段，说明编辑与重发属于近期 WebUI 路线。但需先解决与当前分支的冲突，并优化端到端性能，才适合进入下一版本。

### 长消息折叠与更紧凑的会话布局

- PR：[#6739](https://github.com/HKUDS/nanobot/pull/6739)
- 信号强度：**中高**
- 判断：功能已关闭，若对应提交已合入，则可能随下一次常规发布交付；这是提升长会话可用性的直接改进。

### 统一编辑器建议面板

- PR：[#6738](https://github.com/HKUDS/nanobot/pull/6738)
- 信号强度：**中高**
- 判断：统一斜杠命令、技能和提及面板，并抽离为 `ComposerPalette`，很可能成为后续扩展 Agent 技能发现、命令搜索及统一交互的基础设施。

### 目标组件升级

- PR：[#6737](https://github.com/HKUDS/nanobot/pull/6737)
- 信号强度：**中**
- 判断：目标岛从顶部附着式结构升级为浮动卡片，反映 WebUI 对“目标状态可视化”组件的持续投入，预计会继续扩展。

### 多 Agent Fleet 合规、供应商风险和支出审计

- Issue：[#6742](https://github.com/HKUDS/nanobot/issues/6742)
- 信号强度：**低至中**
- 判断：需求方向与多 Agent 运营场景相关，但当前证据仅来自单一推广 Issue，没有社区讨论或产品路线确认。若后续出现多用户需求、RFC 或官方设计讨论，才应上调优先级。

### 下一版本可能纳入的变更

在不确认分支及合并提交的前提下，以下变更最可能随下一次常规版本进入：

1. 频道凭据防自动填充修复；
2. 侧边频道命令路由修复；
3. 键盘焦点行为修复；
4. 长消息折叠；
5. 编辑器面板统一与样式整理；
6. 设置页及目标组件视觉优化。

其中 [#6323](https://github.com/HKUDS/nanobot/pull/6323) 暂不应计入下一版本，除非性能回归和合并冲突得到解决。

---

## 用户反馈摘要

今日 Issues 数据较少，且两条 Issue 均显示 **0 评论、0 点赞**，因此缺少可直接提炼的评论反馈。根据 Issue 与 PR 描述，可归纳出以下真实使用痛点：

1. **敏感配置不可被浏览器误写**  
   用户在 WebUI 配置频道凭据时，可能遭遇浏览器将登录密码自动填入 Token 或密码字段，并在保存时静默覆盖真实配置。这是最明确的用户信任问题。  
   对应：[Issue #6732](https://github.com/HKUDS/nanobot/issues/6732)、[PR #6733](https://github.com/HKUDS/nanobot/pull/6733)。

2. **流式回复与侧边命令并发时消息不可靠**  
   用户在 WebUI 流式输出期间调用 `/dream`、`/pairing` 等命令时，可能丢失回答前缀、历史或线程归属。  
   对应：[PR #6736](https://github.com/HKUDS/nanobot/pull/6736)。

3. **复杂编辑与长会话需要更清晰的交互**  
   长消息折叠、统一建议面板、编辑重发和浮动目标卡片，反映用户对高密度聊天、Agent 命令和目标状态展示的持续需求。  
   对应：[PR #6739](https://github.com/HKUDS/nanobot/pull/6739)、[#6738](https://github.com/HKUDS/nanobot/pull/6738)、[#6737](https://github.com/HKUDS/nanobot/pull/6737)、[#6323](https://github.com/HKUDS/nanobot/pull/6323)。

4. **自动化删除需要明确反馈**  
   用户删除与自动化关联的主题时，需要可靠的二次确认和持续可见的提示，避免误删。  
   对应：[PR #6731](https://github.com/HKUDS/nanobot/pull/6731)。

5. **Agent Fleet 运维成本与风险开始成为潜在需求**  
   外部工具、供应商和模型调用成本的可视化及审计，是多 Agent 运营者可能关注的方向，但当前仅有一条商业推广 Issue，尚未形成用户共识。  
   对应：[Issue #6742](https://github.com/HKUDS/nanobot/issues/6742)。

整体看，今日反馈重点不是功能覆盖不足，而是**配置安全、消息可靠性和复杂交互的一致性**。已关闭的多个修复 PR 表明现有反馈得到了快速落实，但公开评论和点赞数据为空，尚不足以评估用户满意度。

---

## 待处理积压

### PR #6323：编辑并重新发送消息

- 链接：[GitHub PR #6323](https://github.com/HKUDS/nanobot/pull/6323)
- 创建时间：2026-10-20
- 最新更新：2026-11-20
- 状态：开放、存在合并冲突、性能未达基线
- 积压时长：约 1 个月
- 关注重点：重新基于最新分支解决冲突；针对完整编辑—重发链路优化性能，并重新执行配对测试。当前仅确认环节有小幅性能收益，不能抵消整体约 9.27 ms 的中位数回归。

### Issue #6742：Agent Fleet 合规服务推广

- 链接：[GitHub Issue #6742](https://github.com/HKUDS/nanobot/issues/6742)
- 状态：新开、0 评论、0 点赞
- 关注重点：维护者需判断其属于产品需求、服务集成建议还是商业推广。若不计划进入产品路线，建议标记并关闭；若保留，应邀请其他 Fleet 运营者补充具体场景、预算、集成接口和合规要求，避免仅以推广内容占用 Issue 队列。

---

## 项目健康度结论

**综合健康度：良好。**

- **开发吞吐：高。** 24 小时内关闭 10 个 PR，覆盖安全修复、消息路由、可访问性、长消息处理和多项 UI 重构。
- **稳定性趋势：向好。** 最高风险的凭据自动填充问题已有对应修复，核心 WebUI 边界场景也得到集中处理。
- **功能演进：持续推进。** 会话编辑重发、统一建议面板和目标组件升级，为下一阶段交互迭代奠定基础。
- **主要风险：** [#6323](https://github.com/HKUDS/nanobot/pull/6323) 的性能回归和长期冲突；今日没有版本发布，无法从用户侧确认变更落地情况。
- **社区信号：偏弱。** Issues 仅 2 条且无评论、点赞；商业推广 Issue 的出现提示需要加强 Issue 分类与需求验证。
- **维护建议：** 优先解决 [#6323](https://github.com/HKUDS/nanobot/pull/6323) 的性能与合并冲突；明确 [#6742](https://github.com/HKUDS/nanobot/issues/6742) 的处置规则；尽快安排一次包含本轮 WebUI 安全与稳定性改动的版本发布。

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目动态日报

**日期：2026-11-21**  
**统计范围：过去 24 小时**  
**仓库：[sipeed/picoclaw](https://github.com/sipeed/picoclaw)**

---

## 1. 今日速览

过去 24 小时共更新 **3 条 Issue**、**7 条 PR**，其中仍有 **2 条 Issue 开放**、**7 条 PR 全部关闭**，且今日**没有发布新版本**。  
活跃度可评估为**中等偏低**：问题更新量不大，且当前无待合并 PR，但数条高优先级修复已被关闭或合入汇总 PR，项目仍处于集中整理阶段。  
维护侧的主要信号是：社区已出现“上游疑似停维、主动维护 Fork”的讨论，同时多个 Bug 已通过合并修复 PR 的方式推进。  
从数据看，项目暂无发布节奏和待合并积压，但**维护责任归属、维护活跃度与版本发布透明度**正在成为更明显的社区风险。

---

## 2. 版本发布

过去 24 小时**无新版本发布**，因此暂无版本更新说明、破坏性变更及迁移事项。

---

## 3. 项目进展

### 3.1 集中合并修复 PR

今日关闭的 3 条人工汇总 PR 将此前分散的修复分支重新汇入主线，体现了项目对历史修复进行集中整理与合并的意图：

- [#1559 — fix: merge PR #1327 #1319 #1318 #1313](https://github.com/sipeed/picoclaw/pull/1559)  
  汇总合并了 4 条既有修复 PR。具体功能影响需以各原 PR 的变更内容为准，但该 PR 本身已关闭，表明相关修复已进入最终整合路径。

- [#1560 — fix: merge PR #1312 #1311 #1308](https://github.com/sipeed/picoclaw/pull/1560)  
  集中合并了 3 条修复 PR，推动相关问题进入主线整合阶段。

- [#1555 — fix: merge PR #1390 #1389 #1383 #1381](https://github.com/sipeed/picoclaw/pull/1390)  
  同样承担多个历史修复的汇总合并工作，覆盖 4 条既有 PR。

> 链接更正：对应汇总 PR 为 [#1555](https://github.com/sipeed/picoclaw/pull/1555)。

**推进判断：** 今日没有新建功能型 PR，但通过集中合并方式一次性吸收了至少 **11 个历史修复分支**，对项目稳定性具有实质意义。由于没有新版本发布，用户是否已经实际获得这些修复仍需等待后续 release 验证。

### 3.2 依赖升级 PR 全部关闭

以下 Dependabot PR 均已关闭，且当前没有待合并 PR：

- [#3459 — line-bot-sdk-go/v8 8.20.1 → 8.23.0](https://github.com/sipeed/picoclaw/pull/3459)
- [#3458 — modernc.org/sqlite 1.53.0 → 1.61.1](https://github.com/sipeed/picoclaw/pull/3458)
- [#3460 — Azure azidentity 1.14.0 → 1.15.0](https://github.com/sipeed/picoclaw/pull/3460)
- [#3457 — golang.org/x/time 0.15.0 → 0.16.0](https://github.com/sipeed/picoclaw/pull/3457)

这些 PR 带有 `stale` 标签且均未合并，说明自动依赖更新可能存在积压或因发布节奏、工具链兼容性等原因被统一关闭。SQLite、Azure SDK 与 Go 时间库均涉及运行时或构建链，升级长期悬置会增加安全补丁滞后及版本漂移风险。

### 3.3 整体进展评估

- **功能建设：** 今日无明确的新功能 PR 合入。
- **缺陷治理：** 通过 3 个汇总 PR 集中吸收历史修复，是今日最明确的推进事项。
- **依赖维护：** 4 个自动升级 PR 全部关闭，未形成待合并队列。
- **发布交付：** 0 个版本发布，修复向正式版本落地的可见性不足。
- **项目前进程度：** 稳定性整理有进展，发布和维护治理仍显不足。

---

## 4. 社区热点

### 4.1 最活跃 Issue：项目维护与 Fork 讨论

- [#3417 — Active Fork & Continued Maintenance: afjcjsbx/picoclaw](https://github.com/sipeed/picoclaw/issues/3417)  
  **状态：OPEN｜评论：5**

这是今日评论最多的 Issue。提交者因认为原仓库可能缺乏维护，宣布建立并继续维护活跃 Fork：

- [afjcjsbx/picoclaw](https://github.com/afjcjsbx/picoclaw)

**背后诉求：**

1. 用户希望项目能够持续响应 Issue 和 PR；
2. 社区担心上游缺乏维护导致关键问题长期搁置；
3. 用户需要一个明确、稳定的维护入口和可信发布渠道；
4. Fork 可能分流贡献者和用户，降低原仓库的治理压力。

**影响：** 这是当前最值得维护者正面回应的社区议题。若上游不说明维护计划，该 Issue 将持续强化“项目停维”的外部认知，并可能造成用户、Issue 和 PR 进一步分流。

### 4.2 模型标识符大小写问题

- [#3454 — Model identifier validation suggests lowercasing unknown provider prefixes, breaking case-sensitive upstream model IDs](https://github.com/sipeed/picoclaw/issues/3454)  
  **状态：OPEN｜标签：stale｜评论：4**

该 Issue 指出：对于未知 Provider 前缀但实际属于上游模型命名空间、且大小写敏感的模型 ID，界面会错误建议将前缀转为小写；用户点击“Fix”后会破坏原本有效的模型标识。

**背后诉求：**

- 未知 Provider 不应被自动等同于非法 Provider；
- 模型 ID 校验必须保留原始大小写；
- 自动修复操作不应擅自重写可能具有语义的前缀；
- Web UI 与配置校验规则需要保持一致。

**社区反馈信号：** 该问题已获得 **4 条评论**，但仍标记为 `stale` 且保持开放，说明它可能具有真实使用影响，却未获得及时状态更新。

### 4.3 Web UI 无法启动 Gateway

- [#3461 — start gateway not available via web ui (with no-api-key providers)](https://github.com/sipeed/picoclaw/issues/3461)  
  **状态：CLOSED｜标签：stale｜评论：2**

该问题报告：在无 API Key Provider 配置下，Gateway 从控制台可以工作，但 Web UI 没有可用的启动入口或无法正常启动。

**背后诉求：**

- 无 API Key Provider 是合法且受支持的配置；
- Web UI 应能识别并管理这类 Provider；
- 控制台与 Web UI 的功能行为应保持一致；
- 对此类配置应给出清晰可操作的错误提示，而非隐藏启动能力。

**社区反馈信号：** 问题最终已关闭，但没有显示对应修复 PR，因此仅凭现有数据无法确认它是因修复、重复、用户关闭，还是作为 stale 问题结束。

---

## 5. Bug 与稳定性

按用户影响和修复可见性排序如下。

### 高优先级：模型 ID 被错误重写，可能导致调用失败

- [#3454 — 未知 Provider 前缀被建议转换为小写](https://github.com/sipeed/picoclaw/issues/3454)  
  **状态：OPEN｜标签：stale｜已有明确 fix PR：否**

**严重程度：高**

该问题不是单纯提示错误，而是点击“Fix”会实际修改大小写敏感的模型 ID，可能导致上游模型无法识别、鉴权或调用失败。

**稳定性影响：**

- 可能影响自定义网关、代理服务和第三方兼容 API；
- 问题与模型配置校验的核心逻辑相关；
- 错误提示具有诱导性，可能造成用户主动应用破坏性修改。

**修复建议：**

1. 对未知 Provider 前缀采用非阻断式警告；
2. 禁止自动替换未知前缀的大小写；
3. 保留用户输入的原始模型标识；
4. 增加大小写敏感模型 ID 的回归测试；
5. 移除或修正 `stale` 状态。

---

### 中优先级：Web UI 无法启动使用无 API Key Provider 的 Gateway

- [#3461 — start gateway not available via web ui](https://github.com/sipeed/picoclaw/issues/3461)  
  **状态：CLOSED｜标签：stale｜已有明确 fix PR：否**

**严重程度：中**

控制台可用而 Web UI 不可用，构成明显的界面与功能一致性问题。该配置会阻断用户通过 Web UI 完成 Gateway 启动与管理。

**稳定性判断：** Issue 已关闭，但数据中未提供对应修复 PR，无法确认代码层是否真正修复。建议维护者补充关闭原因或关联提交。

---

### 中低优先级：依赖升级未进入主线

以下问题未以用户 Bug 形式报告，但属于潜在稳定性与安全维护风险：

- [#3458 — modernc.org/sqlite 1.53.0 → 1.61.1](https://github.com/sipeed/picoclaw/pull/3458)
- [#3460 — Azure azidentity 1.14.0 → 1.15.0](https://github.com/sipeed/picoclaw/pull/3460)
- [#3457 — golang.org/x/time 0.15.0 → 0.16.0](https://github.com/sipeed/picoclaw/pull/3457)
- [#3459 — line-bot-sdk-go/v8 8.20.1 → 8.23.0](https://github.com/sipeed/picoclaw/pull/3459)

**状态：全部关闭、未合并**

**严重程度：中低，但需持续关注。**  
依赖长期不升级可能导致安全漏洞修复缺失、SQLite 行为差异、SDK 兼容性问题及构建环境漂移。尤其 `golang.org/x/time` 新版本涉及 Go directive 变化，升级前需验证项目工具链兼容性。

---

## 6. 功能请求与路线图信号

### 6.1 明确维护 Fork 与可持续维护机制

- [#3417 — Active Fork & Continued Maintenance](https://github.com/sipeed/picoclaw/issues/3417)

这既是社区议题，也构成路线图信号。上游需要决定是否：

- 公开确认维护状态和响应周期；
- 指定 Issue 与 PR 的 triage 负责人；
- 建立 Release 节奏；
- 与 Fork 协调功能或修复合并；
- 明确 Fork 与上游的长期关系。

**进入下一版本的概率：** 不直接构成版本功能，但会决定下一版本是否能够正常发布和稳定交付。

### 6.2 改进模型标识符校验与自动修复机制

- [#3454 — 模型前缀大小写校验问题](https://github.com/sipeed/picoclaw/issues/3454)

建议纳入下一版本的方向：

- 区分“已知 Provider”和“未知上游命名空间”；
- 未知前缀只警告、不阻断；
- 不对未知前缀自动小写化；
- 自动修复前增加破坏性变更提示；
- 为代理网关和大小写敏感模型 ID 增加测试。

**进入下一版本的概率：中高。** 该问题范围较小、用户影响明确，适合在下一轮版本中快速修复。当前没有可见 fix PR，因此需要维护者主动认领。

### 6.3 Web UI 与无 API Key Provider 的兼容能力

- [#3461 — Web UI 无法启动相关 Gateway](https://github.com/sipeed/picoclaw/issues/3461)

合理的产品方向是让 Web UI 对无 API Key Provider 提供完整的启动、停止和状态展示能力，而不是仅在控制台侧支持。

**进入下一版本的概率：中等。** Issue 已关闭，但缺少明确修复关联；若代码已经修复，应随下一版本发布说明得到验证。

### 6.4 恢复依赖自动升级流程

- [#3458](https://github.com/sipeed/picoclaw/pull/3458)
- [#3459](https://github.com/sipeed/picoclaw/pull/3459)
- [#3460](https://github.com/sipeed/picoclaw/pull/3460)
- [#3457](https://github.com/sipeed/picoclaw/pull/3457)

若下一版本准备发布，应重新生成并评估这些依赖升级，避免因长期关闭自动 PR 而造成版本基线落后。

**进入下一版本的概率：中高。** 尤其 SQLite、Azure SDK 与 Go 时间库，建议在发布前完成升级、测试和兼容性确认。

---

## 7. 用户反馈摘要

### 真实使用场景

1. **通过第三方兼容网关使用模型**  
   用户会使用 `ACME/gpt-4o-mini` 一类“上游命名空间/模型 ID”形式，而不是 PicoClaw 内置 Provider。该场景要求模型 ID 原样保留大小写。  
   来源：[#3454](https://github.com/sipeed/picoclaw/issues/3454)

2. **使用无需 API Key 的 Provider 或网关**  
   用户已经配置 `kilo-auto` 等无 API Key Provider，并成功从控制台启动 Gateway，但希望也能通过 Web UI 管理。  
   来源：[#3461](https://github.com/sipeed/picoclaw/issues/3461)

3. **依赖社区持续维护保障项目可用性**  
   用户因担心上游停维，主动建立 Fork，反映用户更关注长期响应、版本发布和修复落地，而不只是功能数量。  
   来源：[#3417](https://github.com/sipeed/picoclaw/issues/3417)

### 满意与不满意点

**满意点：**

- 控制台工作正常，说明核心 Gateway 与无 API Key Provider 的底层能力基本可用；见 [#3461](https://github.com/sipeed/picoclaw/issues/3461)。
- 社区对项目仍有明显投入，不仅有 Bug 反馈，也有人愿意接管长期维护；见 [#3417](https://github.com/sipeed/picoclaw/issues/3417)。

**不满意点：**

- Web UI 与控制台能力不一致，影响日常管理和可发现性；见 [#3461](https://github.com/sipeed/picoclaw/issues/3461)。
- 模型编辑页的“Fix”建议可能主动破坏合法配置，错误提示与用户意图不匹配；见 [#3454](https://github.com/sipeed/picoclaw/issues/3454)。
- 项目维护状态不清晰，直接催生 Fork 和用户迁移风险；见 [#3417](https://github.com/sipeed/picoclaw/issues/3417)。
- Issue 即使存在有效讨论，也被标记为 `stale` 或关闭而缺少清晰结论；见 [#3454](https://github.com/sipeed/picoclaw/issues/3454)、[#3461](https://github.com/sipeed/picoclaw/issues/3461)。

---

## 8. 待处理积压

### 8.1 维护状态不明确，Fork 分流风险高

- [#3417 — Active Fork & Continued Maintenance](https://github.com/sipeed/picoclaw/issues/3417)  
  **开放｜评论：5｜创建于 2026-10-06**

该 Issue 已开放较长时间，并出现明确维护 Fork。建议上游维护者尽快公开说明维护安排、Issue/PR 处理状态及与 Fork 的协作原则。沉默本身会继续强化“上游停维”的判断。

### 8.2 高影响模型校验问题仍开放且被标记 stale

- [#3454 — 模型标识符大小写校验](https://github.com/sipeed/picoclaw/issues/3454)  
  **开放｜评论：4｜创建于 2026-10-28**

该问题有明确复现场景和潜在破坏性，但仍未解决。建议移除错误的 `stale` 标记、确认维护负责人，并关联修复 PR 与目标版本。

### 8.3 历史汇总 PR 长期滞留

- [#1555](https://github.com/sipeed/picoclaw/pull/1555)
- [#1559](https://github.com/sipeed/picoclaw/pull/1559)
- [#1560](https://github.com/sipeed/picoclaw/pull/1560)

这 3 条 PR 均创建于 **2026-03-14**，今日虽统一关闭，但需要确认：

- 关联的原 PR 是否全部进入主线；
- 是否存在部分修复被遗漏；
- 关闭是因为成功合并、重复清理，还是放弃处理；
- 下一版本中是否包含相应变更。

### 8.4 依赖升级 PR 关闭但未合并

- [#3457](https://github.com/sipeed/picoclaw/pull/3457)
- [#3458](https://github.com/sipeed/picoclaw/pull/3458)
- [#3459](https://github.com/sipeed/picoclaw/pull/3459)
- [#3460](https://github.com/sipeed/picoclaw/pull/3460)

这些 PR 全部处于关闭且未合并状态。建议维护者明确关闭原因，并恢复定期依赖检查；否则安全更新可能持续落后。

### 8.5 缺少发布闭环

过去 24 小时无新版本，虽然项目集中关闭了多个修复 PR，但没有可见的 Release 或版本发布记录。若这些修复尚未进入可安装版本，用户侧不会立即受益。建议在修复合入后尽快发布版本，并在 Release Notes 中列出：

- 模型 ID 大小写修复；
- Web UI 与无 API Key Provider 兼容性修复；
- SQLite、Azure SDK、Go 时间库等依赖变化；
- 可能需要用户调整的配置或迁移项。

---

## 项目健康度结论

**综合健康度：中等偏弱，但尚未失速。**

- **积极信号：** 今日关闭了 3 个历史修复汇总 PR，吸收了多个既有修复分支；无待合并 PR 意味着当前队列不拥挤。
- **主要风险：** 0 个新版本、依赖升级全部关闭、关键模型校验 Bug 仍开放、社区开始建立活跃 Fork。
- **当前核心矛盾：** 项目有代码修复活动和社区需求，但缺少清晰的维护承诺、版本交付和 Issue 闭环。
- **建议优先顺序：**
  1. 修复并关闭 [#3454](https://github.com/sipeed/picoclaw/issues/3454)；
  2. 核实 [#3461](https://github.com/sipeed/picoclaw/issues/3461) 是否获得代码修复；
  3. 公开回应 [#3417](https://github.com/sipeed/picoclaw/issues/3417)；
  4. 评估并重新开启依赖升级 PR；
  5. 发布包含今日整合修复的新版本。

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI 项目动态日报

**统计日期：2026-11-21**  
**数据范围：过去 24 小时**  
**仓库：** [netease-youdao/LobsterAI](https://github.com/netease-youdao/LobsterAI)

---

## 1. 今日速览

- 过去 24 小时项目保持较高开发活跃度，共更新 **17 个 PR**，其中 **14 个已合并或关闭、3 个待合并**，整体以快速合入和收尾为主。
- 今日发布 **LobsterAI 2026.11.20**，重点加入引导式 PPT 封面创建、首页快捷操作与示例优化，以及会话导航和提示词历史能力。
- 当前主要开发方向是让 **dsh 引擎重新接入图片、视频、浏览器、皮肤设计、Cowork 问答和专家角色等原生能力**，说明近期架构迁移已进入“恢复并整合桌面功能”的阶段。
- Issue 侧没有新增或活跃更新，用户反馈、缺陷讨论和优先级信号暂时不可见；这提升了发布节奏，但降低了社区问题透明度和需求验证强度。
- 当前待处理 PR 共 3 个，均为有效开放项；不过依赖升级与 in-app browser 恢复仍待合入，项目健康度可评为**良好，但迁移回归风险仍需关注**。

---

## 2. 版本发布

### LobsterAI 2026.11.20

**发布时间：** 2026-11-20  
**Release：** [LobsterAI 2026.11.20](https://github.com/netease-youdao/LobsterAI/releases/tag/2026.11.20)  
**相关发布 PR：** [#3133](https://github.com/netease-youdao/LobsterAI/pull/3133)

#### 主要更新

1. **引导式 PPT 封面创建**
   - 新增分步骤封面创建向导，降低用户从零生成 PPT 封面的操作门槛。
   - 首页提供可配置示例，帮助用户更快开始使用。
   - 相关实现与体验优化见 [#3129](https://github.com/netease-youdao/LobsterAI/pull/3129)。

2. **会话导航与提示词历史**
   - 支持在历史会话之间后退、前进。
   - 支持召回此前使用过的提示词，减少重复输入。

3. **首页快捷操作体验统一**
   - 抽取可复用的 `QuickActionChip`，统一标准快捷操作与图片创作入口的视觉和交互。
   - 调整提示面板位置、遮罩层及 PPT 向导导航，改善首页操作连贯性。
   - 相关 PR：[#3129](https://github.com/netease-youdao/LobsterAI/pull/3129)。

4. **dsh 能力恢复与桌面迁移适配**
   - 恢复图片生成、视频生成、浏览器、皮肤设计等能力与 dsh 会话的衔接。
   - 修复历史媒体、专家角色、Cowork 问答、会话分叉等迁移问题。
   - 详见下文“项目进展”。

#### 破坏性变更

- Release 摘要未明确列出公开的破坏性 API 或配置格式变更。
- 但多个 PR 涉及 dsh 会话迁移、原生日志位置、视觉历史和工具调用逻辑，属于内部架构迁移的重要调整。旧会话或迁移中的配置可能出现上下文定位、媒体引用、角色恢复方面的兼容问题。

#### 升级与迁移注意事项

- **升级前备份用户配置和会话数据**，尤其是自定义专家角色、工作区文件与历史媒体。
- 从旧版本迁移后，建议重点验证：
  - 自定义和预置专家角色是否仍存在；
  - 已上传、粘贴的图片是否能在历史会话中正常显示；
  - 图片、视频生成任务能否继续执行并正确交付产物；
  - Cowork 问答的答案、取消操作和媒体确认是否完整传递；
  - 多显示器环境下桌面悬浮球是否保持正确吸附。
- dsh 会话分叉后，继承消息、发布版消息及本地历史前缀的位置映射需要实际回归验证，相关修复见 [#3135](https://github.com/netease-youdao/LobsterAI/pull/3135)。

---

## 3. 项目进展

今日共有 **14 个 PR 关闭或完成合入**，3 个仍待处理。主要工作集中在 dsh 能力恢复、桌面迁移稳定性、媒体工具和 Cowork 体验。

### 3.1 dsh 会话与历史能力恢复

- **支持从指定助手消息处分叉会话**
  - 分叉内容包含选中事件，并记录消息所属的 dsh 会话。
  - 对发布版消息或继承消息缺少当前原生日志位置的情况，尝试从复制的本地前缀继续。
  - PR：[#3135](https://github.com/netease-youdao/LobsterAI/pull/3135)

- **保留视觉历史和媒体预览**
  - 在桌面迁移过程中保留上传、粘贴的图片。
  - 将可用图片保存到 LobsterAI profile，并为 dsh 历史桥接提供可供 `read_image` 打开的本地引用。
  - PR：[#3134](https://github.com/netease-youdao/LobsterAI/pull/3134)

这两项修复直接提升了 dsh 迁移后的历史可追溯性和多模态上下文完整性，是今日最重要的稳定性进展之一。

### 3.2 专家角色与 Cowork 工作流恢复

- **恢复专家角色**
  - 启动迁移时从 SQLite 中恢复缺失的自定义及预置专家角色文件。
  - 保留已编辑文件和有意清空的角色字段，避免复制旧工作区时覆盖用户状态。
  - PR：[#3132](https://github.com/netease-youdao/LobsterAI/pull/3132)

- **将 Cowork 用户问答正确传递给 dsh**
  - 保留问题 ID、选中标签、跳过问题和自由文本答案。
  - 返回原生 waterfall 答案批次，并向 dsh 错误通道传播取消状态。
  - PR：[#3131](https://github.com/netease-youdao/LobsterAI/pull/3131)

- **恢复皮肤创建与应用能力**
  - 将 Skin Designer 注册到 dsh host，通过现有会话绑定工具处理器分发操作。
  - 将可信皮肤工作流带入新建和连续会话，支持选择图像模型、保存背景与徽标并完成注册应用。
  - PR：[#3130](https://github.com/netease-youdao/LobsterAI/pull/3130)

这些变更表明，项目正在从“基础壳层迁移”进入“完整恢复原有桌面智能工作流”的阶段。

### 3.3 图像与视频生成能力恢复

- **恢复 dsh 中的图像生成和旧版艺术功能**
  - 将图像生成工具暴露给 dsh 会话，并复用现有模型选择、确认、计费和产物交付流程。
  - 保持会话归属和结构化工具结果，支持连续图像任务。
  - PR：[#3125](https://github.com/netease-youdao/LobsterAI/pull/3125)

- **恢复 dsh 中的视频生成与旧版播放**
  - 通过既有 LobsterAI 媒体服务提供视频生成。
  - 保留模型选择、逐任务桌面确认、任务归属、保存文件链接，并支持模型发现、参数与参考信息、轮询及取消。
  - PR：[#3127](https://github.com/netease-youdao/LobsterAI/pull/3127)

这组改动恢复了核心多模态生产力能力，对个人 AI 助手的实际使用价值较高。

### 3.4 桌面窗口与跨屏体验

- **修复隐藏窗口过早设置缩放导致窗口无法显示**
  - Electron 40.x–43.x 在窗口首次合成绘制前设置缩放，可能触发 `ready-to-show` 被丢弃。
  - 修复方式为延迟 preload 缩放设置，避免隐藏窗口过早执行。
  - PR：[#3126](https://github.com/netease-youdao/LobsterAI/pull/3126)

- **修复桌面悬浮球跨显示器和 Windows DPI 适配**
  - 默认将悬浮球贴靠工作区右边缘，显示器变化时不再把回退坐标写回存储。
  - 新增 `desktop-companion.position.v2` 位置元数据，持久化边缘、`yRatio` 和 `displayId`。
  - PR：[#3124](https://github.com/netease-youdao/LobsterAI/pull/3124)

两项修复均直接作用于桌面端“能否正常显示”和“多屏下能否稳定停靠”，属于高价值稳定性改进。

### 3.5 依赖与 CI 维护

以下历史 Dependabot PR 已关闭：

- `fast-xml-parser` 5.11.1 → 5.12.0：[ #3036](https://github.com/netease-youdao/LobsterAI/pull/3036)，目前仍开放待处理。
- Electron 43.5.0 → 43.8.7：[ #3037](https://github.com/netease-youdao/LobsterAI/pull/3037)，目前仍开放待处理。
- `actions/checkout` 4 → 7：[ #2579](https://github.com/netease-youdao/LobsterAI/pull/2579)
- `actions/cache` 4 → 6：[ #2580](https://github.com/netease-youdao/LobsterAI/pull/2580)
- `actions/stale` 9.1.0 → 11.0.0：[ #2581](https://github.com/netease-youdao/LobsterAI/pull/2581)

CI 依赖升级已集中完成，但 Electron 与 XML 解析器升级仍需安排合入和回归测试。

### 整体推进判断

今日并非零散修补，而是围绕 **dsh 架构迁移后的功能恢复、状态持久化和桌面可靠性**进行系统性收口。按 PR 覆盖面估算，项目已完成大部分核心桌面入口的重新接入；下一阶段重点应转向：

1. 浏览器能力合入与稳定性验证；
2. 媒体任务在多轮会话中的端到端测试；
3. Electron 升级回归；
4. 会话分叉、视觉历史和角色迁移的数据一致性测试。

---

## 4. 社区热点

今日没有新增或活跃 Issue，且所有列出的 PR 均显示 **0 条评论、0 个点赞**。因此没有可确认的“评论最多”或“反应最多”条目。

从技术影响力和覆盖范围看，值得关注的 PR 可视为今日主要“热点”：

1. **图像生成与旧版艺术能力恢复**  
   [ #3125](https://github.com/netease-youdao/LobsterAI/pull/3125)  
   诉求核心：让新 dsh 引擎不丢失既有图像生产工作流，并统一模型选择、确认、计费及产物交付。

2. **视频生成与旧版播放恢复**  
   [ #3127](https://github.com/netease-youdao/LobsterAI/pull/3127)  
   诉求核心：保持多轮会话中的任务连续性、取消机制和文件交付能力。

3. **dsh 会话分叉**  
   [ #3135](https://github.com/netease-youdao/LobsterAI/pull/3135)  
   诉求核心：允许用户从任意助手回答继续探索不同方向，并可靠保留上下文来源。

4. **Cowork 问答传递修复**  
   [ #3131](https://github.com/netease-youdao/LobsterAI/pull/3131)  
   诉求核心：确保用户补充问题、选择答案及取消操作不会在桌面与 dsh 之间丢失。

5. **桌面悬浮球跨屏和 DPI 修复**  
   [ #3124](https://github.com/netease-youdao/LobsterAI/pull/3124)  
   诉求核心：提升多屏用户日常使用的连续性和可靠性。

**社区健康度提示：** 低评论和零点赞不一定代表没有需求，也可能意味着社区反馈没有沉淀到 Issue/PR。当前数据更适合反映“维护者实现节奏”，不足以判断真实用户满意度。

---

## 5. Bug 与稳定性

今日没有 Issue 形式的 Bug 报告，但 PR 摘要暴露了多项稳定性问题。

### 高优先级

#### 1. 桌面窗口可能无法进入可见状态
- **现象：** preload 顶层无条件调用 `webFrame.setZoomFactor(1)`，可能在隐藏窗口首次合成绘制前触发 Electron 回归，导致 `ready-to-show` 丢失。
- **影响：** 桌面窗口无法正常显示，属于启动级可用性问题。
- **修复状态：** 已有修复 PR，已关闭。  
  [ #3126](https://github.com/netease-youdao/LobsterAI/pull/3126)

#### 2. dsh 历史视觉内容可能丢失
- **现象：** 桌面迁移后，上传或粘贴的图片可能无法保留，历史桥接缺少可供 `read_image` 使用的本地引用。
- **影响：** 多模态历史断裂，模型可能无法读取此前上下文中的图片。
- **修复状态：** 已有修复 PR，已关闭。  
  [ #3134](https://github.com/netease-youdao/LobsterAI/pull/3134)

#### 3. 会话分叉后的上下文定位可能错乱
- **现象：** 发布版或继承消息未必存在于当前原生日志的相同位置，分叉时需要回退到复制的本地前缀。
- **影响：** 可能出现分叉点错误、继承消息缺失或上下文重复。
- **修复状态：** 已有针对性修复 PR，已关闭。  
  [ #3135](https://github.com/netease-youdao/LobsterAI/pull/3135)

### 中优先级

#### 4. 专家角色在迁移后可能缺失
- **现象：** 自定义和预置角色文件可能未从 SQLite 正确恢复，旧工作区复制还可能覆盖已编辑或主动清空的状态。
- **影响：** 角色设定丢失、启动后行为与用户预期不一致。
- **修复状态：** 已有修复 PR，已关闭。  
  [ #3132](https://github.com/netease-youdao/LobsterAI/pull/3132)

#### 5. Cowork 答案、跳过状态和取消操作可能未完整传递
- **现象：** dsh 接收问答时可能丢失问题 ID、标签、自由文本答案或取消信号。
- **影响：** 对话状态不完整，自动化工作流可能出现错误确认或流程中断。
- **修复状态：** 已有修复 PR，已关闭。  
  [ #3131](https://github.com/netease-youdao/LobsterAI/pull/3131)

#### 6. 多显示器和 Windows DPI 下悬浮球错位
- **现象：** 显示器切换后可能写入回退坐标，造成悬浮球漂移、贴边异常或 DPI 缩放不一致。
- **影响：** 日常交互体验下降，跨屏场景较明显。
- **修复状态：** 已有修复 PR，已关闭。  
  [ #3124](https://github.com/netease-youdao/LobsterAI/pull/3124)

### 待验证或待处理

#### 7. dsh 内置浏览器能力尚未完全恢复
- **风险：** 浏览器可访问性树、元素 ID、标签页导航、截图返回和后台标签页渲染仍需完善。
- **影响：** dsh 驱动浏览器类任务可能无法稳定完成。
- **修复状态：** 修复 PR 已提交，但仍开放待合并。  
  [ #3128](https://github.com/netease-youdao/LobsterAI/pull/3128)

#### 8. Electron 升级尚未合入
- **版本：** 43.5.0 → 43.8.7。
- **风险：** 当前已出现 Electron 40.x–43.x 缩放相关回归，升级前需要重点验证窗口显示、preload、渲染进程和自动化能力。
- **修复状态：** PR 开放待处理。  
  [ #3037](https://github.com/netease-youdao/LobsterAI/pull/3037)

#### 9. `fast-xml-parser` 升级尚未合入
- **版本：** 5.11.1 → 5.12.0。
- **风险：** 主要涉及 XML 解析兼容性，需要确认配置、工作区或技能定义解析未受影响。
- **修复状态：** PR 开放待处理。  
  [ #3036](https://github.com/netease-youdao/LobsterAI/pull/3036)

---

## 6. 功能请求与路线图信号

虽然今日无新增 Issue，但根据已合并和开放的 PR，可以识别出明确的路线图信号。

### 6.1 dsh 能力全面恢复

这是当前最清晰的路线：让 dsh 不只是对话后端，而是重新成为完整桌面智能体的执行引擎。

已覆盖：

- 图片生成：[ #3125](https://github.com/netease-youdao/LobsterAI/pull/3125)
- 视频生成：[ #3127](https://github.com/netease-youdao/LobsterAI/pull/3127)
- 专家角色：[ #3132](https://github.com/netease-youdao/LobsterAI/pull/3132)
- Cowork 问答：[ #3131](https://github.com/netease-youdao/LobsterAI/pull/3131)
- 皮肤设计：[ #3130](https://github.com/netease-youdao/LobsterAI/pull/3130)
- 会话分叉：[ #3135](https://github.com/netease-youdao/LobsterAI/pull/3135)
- 视觉历史：[ #3134](https://github.com/netease-youdao/LobsterAI/pull/3134)

待推进：

- in-app browser：[ #3128](https://github.com/netease-youdao/LobsterAI/pull/3128)

**判断：** 下一版本大概率继续以“dsh 原生能力补齐和迁移稳定性”为主线。

### 6.2 多模态生产力工具

图像、视频、PPT 封面和皮肤设计在同一天集中推进，说明项目希望强化“个人 AI 助手 + 多模态创作”的定位。

相关信号：

- PPT 封面向导与首页示例：[ #3129](https://github.com/netease-youdao/LobsterAI/pull/3129)
- 图像生成：[ #3125](https://github.com/netease-youdao/LobsterAI/pull/3125)
- 视频生成：[ #3127](https://github.com/netease-youdao/LobsterAI/pull/3127)
- 皮肤设计：[ #3130](https://github.com/netease-youdao/LobsterAI/pull/3130)

**判断：** 后续版本可能进一步统一媒体生成入口、确认流程、产物管理及多轮任务上下文。

### 6.3 浏览器智能体能力

开放的 [#3128](https://github.com/netease-youdao/LobsterAI/pull/3128) 指向以下能力：

- 向 dsh 暴露浏览器可访问性树和稳定元素 ID；
- 根据 Cowork 会话反映浏览器活动；
- 控制选中的标签页；
- 通过 MCP 图像或文件路径返回截图；
- 保持后台标签页可渲染。

**判断：** 如果该 PR 近期合入，dsh 的网页操作能力将更接近完整智能体，而不仅是文本助手。

### 6.4 会话可控性与历史复用

会话前后导航、提示词历史、指定消息处分叉和视觉历史保留共同表明项目正强化“长会话可管理性”。

相关 PR：

- 会话分叉：[ #3135](https://github.com/netease-youdao/LobsterAI/pull/3135)
- 视觉历史：[ #3134](https://github.com/netease-youdao/LobsterAI/pull/3134)
- Release 中的会话导航与提示词历史：[2026.11.20 Release](https://github.com/netease-youdao/LobsterAI/releases/tag/2026.11.20)

**判断：** 下一阶段可能继续补齐会话重命名、标签、搜索、导出或分支管理能力，但当前数据尚无直接实现证据。

---

## 7. 用户反馈摘要

今日 **Issue 更新为 0**，且无新增 Issue、评论或反应，因此无法从 Issue 评论中提炼真实用户反馈。以下判断仅能来自 PR 所体现的问题背景：

- **用户痛点：历史上下文不可靠**
  - 图片、提示词、会话分叉点和视觉历史均需要恢复，说明迁移后的“上下文连续性”是核心体验风险。
  - 相关：[ #3134](https://github.com/netease-youdao/LobsterAI/pull/3134)、[#3135](https://github.com/netease-youdao/LobsterAI/pull/3135)

- **用户痛点：原有工具能力在 dsh 中缺失**
  - 图片、视频、皮肤、浏览器、专家角色的恢复，反映用户需要的是既有工作流的连续性，而非单纯更换模型后端。
  - 相关：[ #3125](https://github.com/netease-youdao/LobsterAI/pull/3125)、[#3127](https://github.com/netease-youdao/LobsterAI/pull/3127)、[#3128](https://github.com/netease-youdao/LobsterAI/pull/3128)、[#3130](https://github.com/netease-youdao/LobsterAI/pull/3130)、[#3132](https://github.com/netease-youdao/LobsterAI/pull/3132)

- **用户痛点：桌面端显示与跨屏可靠性不足**
  - 窗口无法显示属于严重可用性问题；悬浮球在多屏和 Windows DPI 下错位会影响日常使用。
  - 相关：[ #3126](https://github.com/netease-youdao/LobsterAI/pull/3126)、[#3124](https://github.com/netease-youdao/LobsterAI/pull/3124)

- **满意点推断**
  - 新版 PPT 封面向导、首页示例、会话导航和提示词历史，属于直接降低首次使用成本的改进。
  - 但由于没有评论和点赞数据，不能据此确认用户满意度。

---

## 8. 待处理积压

### 8.1 当前开放 PR

| PR | 状态 | 关注点 | 建议 |
|---|---|---|---|
| [#3036](https://github.com/netease-youdao/LobsterAI/pull/3036) | OPEN，创建于 2026-11-09 | `fast-xml-parser` 5.12.0 升级 | 已积压约 12 天，建议尽快验证 XML 解析兼容性并合入或关闭 |
| [#3037](https://github.com/netease-youdao/LobsterAI/pull/3037) | OPEN，创建于 2026-11-09 | Electron 43.8.7 升级 | 已积压约 12 天；鉴于 43.x 已出现窗口回归，应明确测试清单 |
| [#3128](https://github.com/netease-youdao/LobsterAI/pull/3128) | OPEN，创建于 2026-11-20 | 恢复 dsh in-app browser | 新开但范围较大，建议优先完成核心标签页、可访问性树与截图链路验收 |

### 8.2 已关闭但长期积压的依赖 PR

以下 PR 创建于 2026-08-31，直至今日才关闭，存在约三个月的维护积压：

- [ #2579](https://github.com/netease-youdao/LobsterAI/pull/2579)：`actions/checkout` 4 → 7
- [ #2580](https://github.com/netease-youdao/LobsterAI/pull/2580)：`actions/cache` 4 → 6
- [ #2581](https://github.com/netease-youdao/LobsterAI/pull/2581)：`actions/stale` 9.1.0 → 11.0.0

这些 PR 今日统一关闭，说明维护者完成了积压清理。后续建议引入 Dependabot 升级 SLA、过期自动关闭策略及定期批量处理，避免依赖版本长期落后。

### 8.3 长期未响应 Issue 风险

数据中未提供任何历史长期开放 Issue，因而无法确认具体条目及响应时长。但今日 Issue 活跃度为零，至少说明以下治理信号需要关注：

- 缺少用户反馈入口不利于验证 dsh 迁移是否真正解决高频问题；
- 应主动建立 dsh 升级回归 Issue 或检查清单；
- 建议将窗口显示、媒体历史、角色恢复、浏览器控制、多屏 DPI、Electron 升级纳入统一 QA 矩阵；
- 对迁移类问题，建议提供可复现模板，包含旧版本、配置类型、会话状态、dsh 引擎版本和附件。

---

## 结论

LobsterAI 今日处于**高强度发布与架构迁移收口阶段**。17 个 PR 更新、14 个 PR 关闭或合入、1 个新版本发布，表明开发推进速度较快；dsh 正在快速补齐图片、视频、浏览器、角色、皮肤及会话管理等桌面能力。与此同时，窗口显示、视觉历史、角色迁移和多屏适配等回归问题说明迁移风险客观存在，且今日没有 Issue 社区活动可用于验证外部需求。

**项目健康度：良好。**  
核心路线明确、交付节奏快、积压正在清理；下一阶段应重点关注 3 个开放 PR 的处理，以及 dsh 迁移后的端到端稳定性、Electron 升级回归和社区反馈闭环。

</details>

<details>
<summary><strong>QwenPaw</strong> — <a href="https://github.com/agentscope-ai/QwenPaw">agentscope-ai/QwenPaw</a></summary>

# QwenPaw 项目动态日报

**统计日期：2026-11-21**  
**数据范围：过去 24 小时 GitHub Issues / Pull Requests 更新**  
**数据概览：Issues 7 条（活跃 5、已关闭 2）；PR 30 条（待合并 20、已合并/关闭 10）；新版本 0 个**

> 说明：以下“今日”均指过去 24 小时内的创建、更新、合并或关闭活动。现有数据未提供各 PR 的具体合并时间，因此对未显示合并时间的 PR 仅描述其当前关闭状态，不将其全部视为今日合并。

---

## 一、今日速览

QwenPaw 过去 24 小时保持较高开发活跃度，共产生 **30 条 PR 更新**，其中 **20 条仍待合并**，主要覆盖运行时启动保护、审批链路、Console 部署、本地模型管理、沙箱探测和多媒体处理等方向。

Issue 侧共更新 **7 条**，其中 **5 条仍开放、2 条关闭**；用户关注点集中在网关错误重试与降级、Console 可用性、微信通道稳定性、环境变量接口文档以及许可证文本准确性。

本期没有新版本发布，当前推进方式以问题修复和功能 PR 积压为主。大量 PR 尚未合并，部分大型功能还采用堆叠式依赖，说明功能储备较丰富，但发布、评审和集成节奏仍有压力。

**项目健康度判断：中高活跃、稳定性风险可控，但集成积压较明显。**  
工程修复覆盖面较广，也有多个问题已形成对应 PR；不过 Console 体验、通道可靠性、运行时生命周期和本地模型生态仍处于快速迭代阶段，不宜仅依据 PR 数量判断为接近稳定发布。

---

## 二、版本发布

过去 24 小时 **无新版本发布**，暂无 Release Notes、破坏性变更或迁移指南可汇总。

近期代码涉及运行时初始化、审批通道、Console 路径部署、本地模型插件化和沙箱探测等较大改动；在正式发布前，建议维护者明确版本边界并完成大型 PR 的合并顺序管理。

---

## 三、项目进展

### 3.1 重要修复已关闭或进入收尾阶段

#### 1. OpenAI-compatible 网关错误状态识别与重试/降级

- 对应 Issue：[ #8505 ](https://github.com/agentscope-ai/QwenPaw/issues/8505)
- 对应 PR：[ #8512 ](https://github.com/agentscope-ai/QwenPaw/pull/8512)
- 状态：Issue 已关闭，PR 已关闭
- 进展：网关在流式响应中仅通过错误文本返回 `status_code=502` 时，系统此前无法识别真实状态，导致错误被归类为 `unknown`，不会触发重试或模型回退。PR 扩展了错误状态提取逻辑，方向上直接补齐了网关异常处理链路。

#### 2. Android Pad Console 按钮越界修复

- 对应 Issue：[ #8839 ](https://github.com/agentscope-ai/QwenPaw/issues/8839)
- 状态：Issue 已关闭
- 进展：Android 平板横竖屏下 Console 底部按钮组可能超出浏览器可视区域的问题已完成处理。该问题直接影响移动端发送操作的可达性。

#### 3. Windows 配置保存和安装进程退出稳定性

- 对应 PR：[ #8835 ](https://github.com/agentscope-ai/QwenPaw/pull/8835)
- 状态：PR 已关闭
- 进展：针对 Windows 原子替换 `agent.json` 时的临时占用、共享冲突和锁定错误增加重试；同时等待插件依赖安装的子进程真正退出，降低超时或取消后子进程仍存活的概率。

#### 4. Ollama 上下文窗口按 `num_ctx` 计算

- 对应 PR：[ #8236 ](https://github.com/agentscope-ai/QwenPaw/pull/8236)
- 状态：PR 已关闭
- 进展：修正本地 Ollama 模型上下文窗口估算，不再统一沿用云端模型目录或固定 128K 默认值，而按实际 `num_ctx` 识别。对长上下文、本地编码模型和资源规划具有直接意义。

#### 5. 多工作区技能回滚恢复

- 对应 PR：[ #8784 ](https://github.com/agentscope-ai/QwenPaw/pull/8784)
- 状态：PR 已关闭
- 进展：针对多工作区技能安装回滚过程中的恢复失败、备份过早清理和部分工作区未恢复等风险进行加固，减少技能丢失或用户长期等待。

#### 6. 本地模型管理插件化方案

- 对应 PR：[ #8499 ](https://github.com/agentscope-ai/QwenPaw/pull/8499)
- 状态：PR 已关闭
- 进展：尝试把本地模型下载、llama.cpp 安装和服务生命周期迁入插件 Provider，同时保留既有用户配置和模型文件，并让宿主继续负责模型选择与统一推理。该方向反映本地模型能力正向插件生态解耦。

### 3.2 重点待合并功能

#### 1. 启动未完成时拒绝聊天请求

- PR：[ #8770 ](https://github.com/agentscope-ai/QwenPaw/pull/8770)
- 状态：开放、待合并
- 价值：此前在后台启动尚未完成时提交聊天，请求可能返回 HTTP 200，但 Agent 仅构建了部分工作区，随后在首次 LLM 调用前无错误、无超时地挂起。新方案拟直接拒绝未就绪请求，属于重要的运行时生命周期修复。

#### 2. 审批请求送达发起聊天的通道

- PR：[ #8303 ](https://github.com/agentscope-ai/QwenPaw/pull/8303)
- 状态：开放、Under Review
- 价值：解决 Console 能显示审批、微信等聊天通道却收不到审批提示，最终等待五分钟并以 `TIMEOUT` 结束、工具实际未执行的问题。对跨通道个人 AI 助手的安全工具调用非常关键。

#### 3. Console 支持运行时 base-path 部署

- PR：[ #8719 ](https://github.com/agentscope-ai/QwenPaw/pull/8719)
- 状态：开放、Under Review
- 价值：新增可选 `QWENPAW_BASE_PATH`，支持 Console 和 API 部署在反向代理路径前缀下，便于企业内网、NAS、网关和子路径环境落地。

#### 4. 本地模型、GPU 与自动更新能力

- PR：[ #8649 ](https://github.com/agentscope-ai/QwenPaw/pull/8649)：llama.cpp GPU 控制与运行时自动更新
- PR：[ #8647 ](https://github.com/agentscope-ai/QwenPaw/pull/8647)：managed MLX 引擎与自动更新
- PR：[ #8648 ](https://github.com/agentscope-ai/QwenPaw/pull/8648)：Console 本地引擎、GPU 和自动更新控制
- 状态：均开放、按声明顺序堆叠
- 价值：形成从底层引擎到 Console 控制面的完整本地模型功能链。但由于 PR 体积为 XL～XXL，且存在依赖关系，评审和回归测试成本较高，是近期集成压力的主要来源。

#### 5. 沙箱能力探测改进

- PR：[ #8703 ](https://github.com/agentscope-ai/QwenPaw/pull/8703)
- 状态：开放、Under Review
- 价值：容器通常不挂载 securityfs，导致 `/sys/kernel/security/lsm` 不存在，即使宿主支持 Landlock，也会被误判为不可用。新方案拟在无需 securityfs 的情况下探测 Landlock，避免 Code Mode 的 `run_code` 因 fail-closed 被全部拒绝。

#### 6. 多媒体内联预算控制

- PR：[ #8785 ](https://github.com/agentscope-ai/QwenPaw/pull/8785)
- 状态：开放、Under Review
- 价值：同时考虑图片字节预算和边长限制，在模型拒绝缩放后重新评估，并明确报告被省略内容，重点降低多模态请求因预算不完整导致的失败。

---

## 四、社区热点

### 4.1 Issue 热点

#### 1. 环境变量接口文档可能误导 Agent 执行危险操作

- Issue：[ #8843 ](https://github.com/agentscope-ai/QwenPaw/issues/8843)
- 评论：2
- 诉求：配置文档只写明 `GET/PUT/DELETE /envs`，但没有完整解释 PUT 与 DELETE 的真实语义。QA/guidance Agent 可能误认为 `PUT /envs` 是普通更新，从而删除其他环境变量。
- 社区信号：这是典型的“文档不完整转化为 Agent 误操作”的高风险问题。接口设计本身也应考虑幂等性、批量更新语义和防止误删的确认机制。

#### 2. 许可证文本存在多余单词

- Issue：[ #8840 ](https://github.com/agentscope-ai/QwenPaw/issues/8840)
- 评论：2
- 诉求：LICENSE 中 “Contribution” 定义相较 Apache License 2.0 官方文本多了 “the”。
- 社区信号：影响较小，但涉及法律文本准确性，宜快速、低风险修正，并避免在修订过程中引入非预期的许可证变更。

#### 3. 微信通道静默停止收消息

- Issue：[ #8757 ](https://github.com/agentscope-ai/QwenPaw/issues/8757)
- 评论：2
- 诉求：Windows 10、QwenPaw 2.3.0 Desktop 下，微信插件轮询进入错误重试循环后没有日志、没有恢复机制，游标也未重置；进程和健康状态均显示正常，但消息实际不再到达。
- 社区信号：用户最强烈的不满是“假健康”，即监控显示正常而业务链路已经死亡。微信插件需要可观测性、熔断、重置和显式降级状态。

#### 4. Console 键盘滚动不可用

- Issue：[ #8844 ](https://github.com/agentscope-ai/QwenPaw/issues/8844)
- 评论：1
- 诉求：聊天滚动容器不可聚焦，点击消息也不会转移焦点，方向键、PageUp/PageDown、Home/End 均无法使用。
- 社区信号：桌面端辅助功能和无鼠标操作仍不完善，与移动端按钮越界问题共同说明 Console 的响应式和可访问性需要专项检查。

#### 5. Markdown 表格横向溢出

- Issue：[ #8845 ](https://github.com/agentscope-ai/QwenPaw/issues/8845)
- 评论：1
- 诉求：助手消息中的宽表格超出气泡边界，且没有横向滚动，右侧列不可见。
- 社区信号：Console 对结构化 AI 输出的呈现能力不足，尤其影响数据表格、代码结果、比较分析和长链接等高频场景。

### 4.2 PR 热点

#### 1. 审批提示无法送达聊天通道

- PR：[ #8303 ](https://github.com/agentscope-ai/QwenPaw/pull/8303)
- 背景：与既有问题 [#6695](https://github.com/agentscope-ai/QwenPaw/issues/6695)、根因分析 [#6819](https://github.com/agentscope-ai/QwenPaw/pull/6819) 关联。
- 热度原因：该 PR 自 2026-10-18 起持续活跃，反映社区对“工具审批后无人响应、最终超时”的强烈痛点。

#### 2. Console 反向代理子路径部署

- PR：[ #8719 ](https://github.com/agentscope-ai/QwenPaw/pull/8719)
- 热度原因：直接关系 Issue [#8714](https://github.com/agentscope-ai/QwenPaw/issues/8714)，并串联多个相关历史讨论。自 11 月 13 日创建后持续更新，说明部署兼容性是当前明确需求。

#### 3. 本地模型管理三件套

- PR：[ #8649 ](https://github.com/agentscope-ai/QwenPaw/pull/8649)
- PR：[ #8647 ](https://github.com/agentscope-ai/QwenPaw/pull/8647)
- PR：[ #8648 ](https://github.com/agentscope-ai/QwenPaw/pull/8648)
- 热度原因：覆盖 llama.cpp、MLX、GPU 和自动更新，且需按依赖顺序合并，是当前最明显的中长期路线图信号。

> 数据限制：提供的 PR 列表中 `评论数` 均为 `undefined`，且所有展示条目的点赞数均为 0，因此无法基于实际评论或点赞数做精确排名。以上按持续活跃时间、影响范围和关联 Issue 热度排序。

---

## 五、Bug 与稳定性

### 严重级别：高

#### 1. 微信入站轮询静默死亡

- Issue：[ #8757 ](https://github.com/agentscope-ai/QwenPaw/issues/8757)
- 影响：微信消息停止到达，但进程存活、健康检查正常、日志无错误。
- 风险：个人助手可能悄然漏掉关键消息，用户无法及时察觉；这是数据可靠性与“假健康”问题。
- Fix PR：数据中未发现明确对应的修复 PR。

#### 2. 环境变量接口可能引导 Agent 删除其他变量

- Issue：[ #8843 ](https://github.com/agentscope-ai/QwenPaw/issues/8843)
- 影响：Agent 依据不完整文档调用 `PUT /envs` 时，可能覆盖或删除其他环境变量，造成配置丢失、凭据失效或服务异常。
- 风险：属于潜在的数据破坏问题，且 AI 自动化会放大文档歧义。
- Fix PR：数据中未发现明确对应的修复 PR。

#### 3. 启动期间聊天请求被接受后无期限挂起

- Issue/关联背景：[ #8770 ](https://github.com/agentscope-ai/QwenPaw/pull/8770)
- 影响：HTTP 返回成功，但 Agent 在首次 LLM 调用前卡住，没有错误、超时或日志。
- 风险：表现为“假成功”，会造成请求堆积、资源占用和用户体验中断。
- Fix PR：有，正在审查中，尚未确认合并。

### 严重级别：中高

#### 4. 审批请求未送达发起通道

- PR：[ #8303 ](https://github.com/agentscope-ai/QwenPaw/pull/8303)
- 影响：Console 可能出现审批，但微信等通道不显示；五分钟后才超时，工具没有执行。
- 风险：涉及跨通道任务阻塞与安全审批链路。
- Fix PR：有，Under Review，尚未确认合并。

#### 5. 审批和本地模型相关子进程生命周期问题

- PR：[ #8841 ](https://github.com/agentscope-ai/QwenPaw/pull/8841)
- 影响：QwenPaw 崩溃或被强制结束后，Windows 上的 `llama-server.exe` 仍可能继续存活并累积多份进程。
- 风险：资源泄漏、端口占用和后台幽灵进程。
- Fix PR：有，待合并。

#### 6. Landlock 被错误判定为不可用

- PR：[ #8703 ](https://github.com/agentscope-ai/QwenPaw/pull/8703)
- 影响：支持 Landlock 的容器中，Code Mode 可能被错误地完全拒绝执行。
- 风险：安全能力误报或误拒绝，影响功能可用性，但 fail-closed 行为本身避免了无沙箱执行。
- Fix PR：有，Under Review。

### 严重级别：中

#### 7. Console Markdown 表格溢出

- Issue：[ #8845 ](https://github.com/agentscope-ai/QwenPaw/issues/8845)
- 影响：表格右侧列不可见，降低结果可读性。
- Fix PR：数据中未发现明确对应的修复 PR。

#### 8. Console 消息列表无法用键盘滚动

- Issue：[ #8844 ](https://github.com/agentscope-ai/QwenPaw/issues/8844)
- 影响：无法使用方向键、PageUp/PageDown、Home/End 浏览长对话。
- Fix PR：数据中未发现明确对应的修复 PR。

#### 9. Android Pad 按钮组超出屏幕

- Issue：[ #8839 ](https://github.com/agentscope-ai/QwenPaw/issues/8839)
- 影响：发送按钮可能难以触达，横竖屏均可能发生。
- 修复状态：Issue 已关闭，但提供的数据中未展示明确对应 PR。

#### 10. Web Search 配置弹窗保存未修改值

- Issue 背景：[ #8836 ](https://github.com/agentscope-ai/QwenPaw/issues/8836)
- PR：[ #8842 ](https://github.com/agentscope-ai/QwenPaw/pull/8842)
- 影响：用户只打开配置弹窗，防抖自动保存仍会把原值写回服务器。
- 修复状态：已有 PR，待合并。

#### 11. 任务运行完成回调挂起导致运行状态永久残留

- PR：[ #8268 ](https://github.com/agentscope-ai/QwenPaw/pull/8268)
- 影响：完成回调卡住或被取消时，`TaskTracker._runs` 中的条目不会释放，运行状态长期保持为 `running`。
- 修复状态：已有 PR，待合并。

### 严重级别：低

#### 12. LICENSE 文本单词偏差

- Issue：[ #8840 ](https://github.com/agentscope-ai/QwenPaw/issues/8840)
- 影响：法律文本与官方 Apache License 2.0 存在轻微不一致。
- Fix PR：数据中未发现明确对应 PR。

### 已关闭或已有明确修复方向

- 网关错误状态无法识别：[ #8505](https://github.com/agentscope-ai/QwenPaw/issues/8505) / [ #8512](https://github.com/agentscope-ai/QwenPaw/pull/8512)
- Windows 配置保存与安装进程退出：[ #8835](https://github.com/agentscope-ai/QwenPaw/pull/8835)
- Ollama 上下文窗口识别：[ #8236](https://github.com/agentscope-ai/QwenPaw/pull/8236)
- 多工作区技能回滚：[ #8784](https://github.com/agentscope-ai/QwenPaw/pull/8784)
- 本地模型管理插件化：[ #8499](https://github.com/agentscope-ai/QwenPaw/pull/8499)

---

## 六、功能请求与路线图信号

### 6.1 本地模型管理与 GPU 控制：最明确的近期路线

本地模型相关 PR 已形成较完整的产品链条：

1. llama.cpp GPU 与运行时自动更新：[ #8649 ](https://github.com/agentscope-ai/QwenPaw/pull/8649)
2. managed MLX 与运行时自动更新：[ #8647 ](https://github.com/agentscope-ai/QwenPaw/pull/8647)
3. Console 本地引擎、GPU 与自动更新控制：[ #8648 ](https://github.com/agentscope-ai/QwenPaw/pull/8648)
4. 将本地模型管理抽取为插件 Provider：[ #8499 ](https://github.com/agentscope-ai/QwenPaw/pull/8499)

这一组改动表明，下一阶段重点可能是让 QwenPaw 从“能调用模型”进一步发展为“能管理本地模型生命周期”的个人 AI 助手运行时。  
**判断：进入近期版本的可能性较高，但合并依赖重、测试面大，发布时间存在不确定性。**

### 6.2 Console 支持反向代理子路径

- PR：[ #8719 ](https://github.com/agentscope-ai/QwenPaw/pull/8719)
- 价值：支持 `QWENPAW_BASE_PATH`，适配企业网关、NAS 和子路径部署。
- 判断：需求明确、实现边界相对清晰，是较适合快速进入下一版本的基础设施能力。

### 6.3 本地模型插件生命周期治理

- PR：[ #8841 ](https://github.com/agentscope-ai/QwenPaw/pull/8841)
- 价值：防止后端崩溃后 `llama-server.exe` 成为孤儿进程。
- 判断：属于本地模型功能上线前应完成的稳定性补丁，优先级较高。

### 6.4 多模态输入预算与内容省略提示

- PR：[ #8785 ](https://github.com/agentscope-ai/QwenPaw/pull/8785)
- 价值：更可靠地处理高分辨率图片、模型拒绝缩放以及预算不足。
- 判断：与多模态个人助手场景高度相关，可能纳入下一版本，但需完成较大规模回归。

### 6.5 Console 可访问性与响应式体验专项

需求来源：

- 键盘滚动：[ #8844 ](https://github.com/agentscope-ai/QwenPaw/issues/8844)
- Markdown 表格溢出：[ #8845 ](https://github.com/agentscope-ai/QwenPaw/issues/8845)
- Android Pad 布局：[ #8839 ](https://github.com/agentscope-ai/QwenPaw/issues/8839)

**判断：** 三个问题分属不同技术路径，但可归并为 Console 布局与可访问性专项。若下一版本以桌面和移动端体验为目标，这组问题应至少部分进入版本计划。

### 6.6 环境变量 API 的安全语义增强

- Issue：[ #8843 ](https://github.com/agentscope-ai/QwenPaw/issues/8843)
- 可能方向：完善文档、提供单项更新接口、明确 PUT 的覆盖语义、为 DELETE 增加确认或更安全的目标粒度、限制 Agent 自动执行破坏性操作。
- 判断：目前尚无对应 PR，尚未形成明确版本承诺，但优先级应高于一般文档修订。

---

## 七、用户反馈摘要

### 真实使用场景

1. **微信作为个人助手主入口**
   - 用户在 Windows 10 Desktop、QwenPaw 2.3.0、官方微信插件环境中使用。
   - 典型痛点是入站消息静默中断，而健康状态仍显示正常。
   - 用户核心诉求不是单纯“修一个异常”，而是要求系统具备失败可见、自动恢复和游标重置能力。
   - 反馈：[ #8757 ](https://github.com/agentscope-ai/QwenPaw/issues/8757)

2. **通过 QA/guidance Agent 操作配置**
   - 用户发现文档描述不足会让 Agent 生成具有破坏性的环境变量请求。
   - 这表明 QwenPaw 的配置文档不仅面向人，也会被 Agent 直接消费；文档必须具备可执行、无歧义的 API 语义。
   - 反馈：[ #8843 ](https://github.com/agentscope-ai/QwenPaw/issues/8843)

3. **在 Android 平板浏览器使用 Console**
   - 横竖屏均存在底部按钮越界，发送操作变得困难。
   - 反馈：[ #8839 ](https://github.com/agentscope-ai/QwenPaw/issues/8839)

4. **长对话和结构化结果阅读**
   - 用户依赖 Markdown 表格查看分析结果，但宽表格会溢出气泡。
   - 用户同时无法通过键盘滚动长对话，说明“内容可生成”已经实现，但“内容可读、可导航”仍需加强。
   - 反馈：[ #8845 ](https://github.com/agentscope-ai/QwenPaw/issues/8845)、[ #8844 ](https://github.com/agentscope-ai/QwenPaw/issues/8844)

### 满意点

- 社区能够快速定位并提交高质量复现，包含版本、操作系统、方向和具体症状。
- 多个问题已形成明确修复 PR，例如网关状态识别、Windows 文件占用、任务清理和本地模型进程治理。
- 用户关注点与项目方向一致：跨通道可靠性、本地模型管理、Console 部署灵活性和多模态支持。

### 不满意点

- 某些故障表现为“请求成功但实际挂起”“进程健康但业务死亡”，可观测性不足。
- 部分问题缺少明确对应的修复 PR，尤其是微信静默轮询、Console 键盘与表格体验、环境变量接口安全语义。
- 大型功能 PR 数量多、依赖复杂，可能延长从用户诉求到正式发布的周期。
- 文档中的接口细节可能直接触发 Agent 的破坏性操作，文档质量已经构成运行时安全问题。

---

## 八、待处理积压

### 8.1 长时间开放的重要 Issue

#### 1. 微信通道静默轮询死亡

- Issue：[ #8757 ](https://github.com/agentscope-ai/QwenPaw/issues/8757)
- 状态：自 2026-11-15 起持续开放
- 风险：高
- 建议：优先要求维护者确认是否存在独立修复 PR，并补充轮询错误日志、重试上限、断路器、游标重置和健康状态语义。

#### 2. 网关裸 `APIError` 状态识别

- Issue：[ #8505 ](https://github.com/agentscope-ai/QwenPaw/issues/8505)
- 状态：Issue 已关闭，但对应 PR [#8512](https://github.com/agentscope-ai/QwenPaw/pull/8512) 已关闭
- 风险：中
- 建议：确认关闭是“修复已合入其他 PR”还是“方案被放弃”，并补充覆盖流式错误文本、重试和模型回退链路的回归测试。

#### 3. Android Pad Console 布局

- Issue：[ #8839 ](https://github.com/agentscope-ai/QwenPaw/issues/8839)
- 状态：Issue 已关闭
- 建议：核对对应合并 PR 或提交记录，避免问题因缺乏明确修复引用而难以追踪。

### 8.2 长期开放的重要 PR

#### 1. 审批提示送达聊天通道

- PR：[ #8303 ](https://github.com/agentscope-ai/QwenPaw/pull/8303)
- 创建时间：2026-10-18
- 状态：Under Review
- 风险：高
- 建议：涉及 Console、微信等多通道的一致性，应明确协议、幂等性、离线行为和超时策略，并优先完成评审。

#### 2. Ollama 上下文窗口识别

- PR：[ #8236 ](https://github.com/agentscope-ai/QwenPaw/pull/8236)
- 创建时间：2026-10-14
- 状态：PR 已关闭
- 风险：中
- 建议：确认修复是否已进入主干，以及是否已覆盖非默认 `num_ctx`、模型元数据缺失和动态配置场景。

#### 3. 任务跟踪器运行清理

- PR：[ #8268 ](https://github.com/agentscope-ai/QwenPaw/pull/8268)
- 创建时间：2026-10-16
- 状态：开放
- 风险：中高
- 建议：明确完成回调卡住、取消和客户端断开时的状态转换，避免任务永久显示为运行中。

#### 4. 工具结果折叠中的 URL 媒体识别

- PR：[ #8487 ](https://github.com/agentscope-ai/QwenPaw/pull/8487)
- 创建时间：2026-10-29
- 状态：开放
- 风险：中
- 建议：验证 URL 媒体折叠不会丢失可访问地址、引用关系或上下文压缩后的附件能力。

#### 5. AgentScope 依赖升级

- PR：[ #8467 ](https://github.com/agentscope-ai/QwenPaw/pull/8467)
- 创建时间：2026-10-28
- 状态：开放
- 建议：补充升级后的兼容性矩阵、破坏性变更和回滚方案，避免依赖升级与本地模型、审批、运行时改动同时进入版本。

### 8.3 当前积压规模与维护建议

- 待合并 PR 共 **20 条**，约占本期 PR 更新量的 **66.7%**。
- 至少存在一组明确的三 PR 堆叠链：[ #8649 ](https://github.com/agentscope-ai/QwenPaw/pull/8649) → [ #8647 ](https://github.com/agentscope-ai/QwenPaw/pull/8647) → [ #8648 ](https://github.com/agentscope-ai/QwenPaw/pull/8648)。
- 建议维护者建立明确的合并顺序、每阶段回归范围和版本归属：
  1. 先合入高风险稳定性修复：启动保护、审批通道、Windows 进程生命周期、沙箱探测；
  2. 再合入部署与本地模型能力：base-path、llama.cpp、MLX、Console 控制；
  3. 随后处理多模态和 Console 体验专项；
  4. 最后统一完成依赖升级与 Release 验收。

---

## 结论

QwenPaw 当前处于**高功能开发密度、稳定性修复并行、发布集成压力上升**的阶段。过去 24 小时的改进覆盖运行时生命周期、审批分发、错误分类、本地模型、跨平台进程管理和 Console 部署等关键环节，工程方向较完整。

不过，项目健康度仍主要受以下因素制约：

1. **20 条 PR 待合并**，大型堆叠式功能增加集成风险；
2. **微信通道“假健康”**可能造成真实消息静默丢失；
3. **环境变量接口文档歧义**可能转化为 AI 驱动的配置破坏；
4. **Console 可访问性和移动端布局**存在成组体验缺口；
5. **本期无版本发布**，用户尚未获得这些改动的正式交付节点。

综合判断：**项目基础健康、修复响应能力较强，但下一版本应优先收敛高风险稳定性问题，并避免多个大型功能、依赖升级和部署变更同时集中发布。**

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/NousResearch/hermes-agent">NousResearch/hermes-agent</a></summary>

# Hermes Agent 项目动态日报

**统计日期：2026-11-21**  
**数据范围：过去 24 小时 GitHub Issues、Pull Requests 与 Releases**  
**总体活跃度：高，但稳定性风险明显上升**

---

## 1. 今日速览

过去 24 小时项目共更新 **50 条 Issues、50 条 PR**，其中 Issue 新开或活跃 **46 条**、关闭 **4 条**，PR 待合并 **45 条**、合并或关闭 **5 条**，另发布 **1 个 canary 版本**。讨论最集中的是安装升级、插件依赖、桌面端连接和运行时生命周期，说明 v0.23.x 发布后用户正在集中进行真实环境验证。今日话题高度偏向基础设施可靠性，而非新增大型功能；但多个 P1/P2 问题可能影响升级成功率、Windows 服务稳定性及桌面端可用性。综合判断，项目开发吞吐较高、PR 储备充足，但当前版本存在明显的升级链路和跨平台稳定性债务，建议优先收敛关键 P1/P2 缺陷，再扩大 canary 分发。

---

## 2. 版本发布

### v0.23.3+canary.20261120T064609Z

- **发布时间：** 2026-11-20
- **类型：** Canary 预发布版本
- **Release 页面：** [v0.23.3+canary.20261120T064609Z](https://github.com/NousResearch/hermes-agent/releases/tag/v0.23.3%2Bcanary.20261120T064609Z)

#### 更新重点

现有公开 Release 信息未提供完整 changelog，因此无法确认该 canary 的逐项代码变更。不过，结合今日 Issues 和 PR，可确认近期开发重点集中于：

- 修复插件提供商在多会话并发打开时丢失的问题；
- 调整压缩会话的存储回执和错误处理；
- 改进 Telegram 插件处理器注册顺序；
- 支持 Linux AppImage 在桌面端内更新；
- 修复文件编辑预览隐藏控制字符的问题；
- 增强桌面端会话状态展示、分支标题和后台任务区分；
- 改进插件目录、Dead Drop 插件和 provider 参数映射。

相关代表性 PR：

- [PR #157087：并发打开多个聊天时 provider 插件不再消失](https://github.com/NousResearch/hermes-agent/pull/157087)
- [PR #158487：不可解析的压缩 segment id 改为终止性错误](https://github.com/NousResearch/hermes-agent/pull/158487)
- [PR #153037：修复 Telegram 插件处理器注册顺序](https://github.com/NousResearch/hermes-agent/pull/153037)
- [PR #154578：Linux AppImage 支持桌面端内更新](https://github.com/NousResearch/hermes-agent/pull/154578)
- [PR #158483：文件编辑预览显示隐藏控制字节](https://github.com/NousResearch/hermes-agent/pull/158483)
- [PR #158481：修复 OpenCodeGo 的 GLM-5.3 reasoning effort 映射](https://github.com/NousResearch/hermes-agent/pull/158481)

#### 破坏性变更与迁移注意事项

未看到正式声明的破坏性变更，但以下问题可能影响升级用户：

1. **升级后插件依赖可能丢失**  
   `hermes update` 重建 staged runtime venv 时可能只安装核心依赖，导致 provider 插件仍显示已注册、实际调用却失败。  
   参考：[Issue #134469](https://github.com/NousResearch/hermes-agent/issues/134469)

2. **升级后可能出现无法清除的 owed-restart 状态**  
   某些 PID 同时被记录为 mapped 和 stopped_unmapped 时，CLI 会持续要求重启。  
   参考：[Issue #147873](https://github.com/NousResearch/hermes-agent/issues/147873)

3. **macOS 自更新可能产生重复 App Bundle**  
   checkout bundle 与 `/Applications` 中的副本具有相同 Bundle ID，可能导致 LaunchServices 启动错误实例。  
   参考：[Issue #158382](https://github.com/NousResearch/hermes-agent/issues/158382)

4. **Windows、macOS 和 Docker 是当前高风险迁移环境**  
   建议 canary 用户在升级前备份 profile、session 和插件配置，并检查 gateway 是否真正重启到新版本。

---

## 3. 项目进展

### 已关闭的重要 PR

今日展示的 PR 中，有 **4 个已合并或关闭且具有明确工程价值**：

1. [PR #151994：把 generation leases 和 install locks 移出依赖树](https://github.com/NousResearch/hermes-agent/pull/151994)  
   - 解决 source install 依赖目录必须可写的问题。
   - 让依赖树可以只读挂载，提升容器化和沙箱兼容性。
   - 对应 [Issue #151951](https://github.com/NousResearch/hermes-agent/issues/151951)，后者已关闭。

2. [PR #149932：长会话刷新时避免重复绘制运行中的 turn](https://github.com/NousResearch/hermes-agent/pull/149932)  
   - 通过 `submission_id` 关联发送记录和转录条目。
   - 改善桌面端流式聊天的刷新一致性，减少用户看到重复 prompt。

3. [PR #153032：Telegram 首次安装依赖后立即支持 draft streaming](https://github.com/NousResearch/hermes-agent/pull/153032)  
   - 修复首次 gateway 启动后 draft 能力与实际响应模式不一致的问题。
   - 对 Telegram 用户体验和稳定性有直接改善。

4. [PR #154324：修正源码安装的版本升级文档](https://github.com/NousResearch/hermes-agent/pull/154324)  
   - 明确 source checkout 应跟随 GitHub 最新 Release，而不是旧的 R2 release-candidates 指针。
   - 虽属文档修复，但能减少用户升级路径混淆。

### 当前待合并的关键工作

尽管今日有 5 个 PR 完成合并或关闭，仍有 **45 个 PR 等待处理**，其中值得关注的包括：

- [PR #157087：修复并发会话导致 provider 插件消失](https://github.com/NousResearch/hermes-agent/pull/157087)  
  已获 CI reviewed 标记，直接影响多聊天并发场景。

- [PR #154578：Linux AppImage 桌面端内更新](https://github.com/NousResearch/hermes-agent/pull/154578)  
  可将 Linux 更新从手动下载推进到应用内完成。

- [PR #105354：区分“监控中”和“Agent 正在工作”](https://github.com/NousResearch/hermes-agent/pull/105354)  
  改善 Desktop 对长轮询、CI watch 和后台工作的状态表达。

- [PR #104985：根据首个后续消息生成分支标题](https://github.com/NousResearch/hermes-agent/pull/104985)  
  改善 Desktop/TUI 长会话的分支可读性。

- [PR #104380：目标被阻塞后，用户补充输入时提前恢复](https://github.com/NousResearch/hermes-agent/pull/104380)  
  解决目标持续显示 blocked、恢复时机错误的问题。

- [PR #149976：为 `hermes --tui` 增加 OSC 7501 支持](https://github.com/NousResearch/hermes-agent/pull/149976)  
  增强 Hermes 与 Herdr 等终端环境的集成。

- [PR #82451：避免旧版 SessionDB 下压缩成为 no-op](https://github.com/NousResearch/hermes-agent/pull/82451)  
  针对热更新期间版本偏斜导致的上下文压缩失效。

### 整体推进程度

今日已确认完成的是少量底层安装权限、Telegram 流式输出、桌面刷新重复渲染和升级文档修复；更多关键修复仍停留在 45 个待合并 PR 中。整体可以评价为：

- **开发吞吐较高；**
- **修复方向覆盖桌面端、插件、会话、安装和网关；**
- **但合并吞吐不足，部分高优先级稳定性修复尚未进入主干。**

---

## 4. 社区热点

### 4.1 GitHub API 无法创建 Pull Request

- [Issue #131859](https://github.com/NousResearch/hermes-agent/issues/131859)
- **评论数：68**，为今日最活跃 Issue。
- **状态：** Open，标记为 upstream blocked。

用户通过 fork 创建 PR 时遭遇 `CreatePullRequest permission error`，但创建 Issue 和 fork PR 仍可工作，表明问题可能集中在特定账号、GitHub App 权限或上游授权边界。

**核心诉求：**  
恢复通过 GitHub API 创建 PR 的能力。由于评论热度最高但问题持续较久，维护者应优先确认是否存在上游权限变更，并发布临时人工提交或 CLI workaround。

### 4.2 升级后插件依赖丢失

- [Issue #134469](https://github.com/NousResearch/hermes-agent/issues/134469)
- **评论数：9，P1。**

用户升级后 provider 插件仍显示已注册，但运行时依赖已从 staged venv 中消失，失败可能呈“静默”状态。

**核心诉求：**  
升级过程必须保留插件依赖，或在安装阶段明确阻断不完整 runtime；不能让插件“显示可用、运行失败”。

### 4.3 macOS 升级后的 owed-restart 无法清除

- [Issue #147873](https://github.com/NousResearch/hermes-agent/issues/147873)
- **评论数：9，P2。**

每次 CLI 调用都持续提示需要重启 gateway，形成无法自行恢复的告警循环。

**核心诉求：**  
修复 PID 映射状态机，确保升级后的重启义务能够被可靠确认和清除。

### 4.4 Kanban 调度器阻止合法返工

- [Issue #62418](https://github.com/NousResearch/hermes-agent/issues/62418)
- **评论数：7，获得 1 个赞。**

`active_pr` 检查会因最近 24 小时内曾出现 PR URL 而永久阻止 worker respawn，即使任务已经合法解锁。

**核心诉求：**  
让 guard 判断 PR 的实际状态和任务当前阶段，而不是只依据评论中是否出现过 URL，并提供人工 bypass。

### 4.5 桌面端刷新后已完成的回复消失

- [Issue #134290](https://github.com/NousResearch/hermes-agent/issues/134290)
- **评论数：5。**

数据库中的会话行仍完整，但切换会话再返回后，assistant turn 从转录中消失，出现两个连续 user bubble。

**核心诉求：**  
修复 Desktop 的 session hydration/turn association，保证界面与数据库状态一致。

### 4.6 桌面端错误绑定本地 backend，导致 profile 会话 404

- [Issue #156258](https://github.com/NousResearch/hermes-agent/issues/156258)
- **评论数：4。**

多 profile 环境下，Remote Primary 会在刷新时被重新选为 app-managed local backend，非默认 profile 的聊天因此返回 404。

**核心诉求：**  
持久化并尊重 profile 所属 backend，避免刷新后连接目标被错误覆盖。

### 4.7 PR 讨论热度

当前展示 PR 均未提供明确评论数，因此无法按评论量可靠排序。功能上最受关注的待合并 PR 是：

- [PR #157087](https://github.com/NousResearch/hermes-agent/pull/157087)：provider 并发消失修复；
- [PR #154578](https://github.com/NousResearch/hermes-agent/pull/154578)：Linux AppImage 内更新；
- [PR #104985](https://github.com/NousResearch/hermes-agent/pull/104985)：分支标题生成；
- [PR #104380](https://github.com/NousResearch/hermes-agent/pull/104380)：blocked goal 恢复。

---

## 5. Bug 与稳定性

### P1 / 高严重度

| 问题 | 影响 | 已有修复 PR |
|---|---|---|
| [Issue #134469：升级重建 venv 后插件依赖丢失](https://github.com/NousResearch/hermes-agent/issues/134469) | provider 插件可能静默失效，影响 gateway、CLI 和多平台插件 | **未发现直接对应 PR** |
| [Issue #131859：API 创建 PR 权限错误](https://github.com/NousResearch/hermes-agent/issues/131859) | 自动化协作链路受阻，且已被标记 upstream blocked | **未发现直接对应 PR** |

### P2 / 中高严重度

| 问题 | 影响 | 已有修复 PR |
|---|---|---|
| [Issue #147873：owed-restart 永久无法清除](https://github.com/NousResearch/hermes-agent/issues/147873) | 升级后每次 CLI 调用持续告警 | **未发现直接对应 PR** |
| [Issue #156335：删除看板可能使并发写入失联](https://github.com/NousResearch/hermes-agent/issues/156335) | 数据可能未落到活动看板，潜在数据丢失 | **未发现直接对应 PR** |
| [Issue #84102：TTS 语音气泡编码不匹配](https://github.com/NousResearch/hermes-agent/issues/84102) | Ogg/Vorbis 写入 `.ogg`，平台预期 Opus 时静默降质 | **未发现直接对应 PR** |
| [Issue #156311：sealed Docker 镜像持续报告安装不同步](https://github.com/NousResearch/hermes-agent/issues/156311) | Docker 安装每次启动产生错误告警 | **未发现直接对应 PR** |
| [Issue #148601：命名 custom provider 的 model lock 回归](https://github.com/NousResearch/hermes-agent/issues/148601) | 每轮会话均因 provider/model mismatch 失败 | **未发现直接对应 PR** |
| [Issue #156777：Windows ACP session/new、session/load 永久挂起](https://github.com/NousResearch/hermes-agent/issues/156777) | Windows ACP 客户端无法创建或加载会话 | **未发现直接对应 PR** |
| [Issue #134290：Desktop 切换会话后回复消失](https://github.com/NousResearch/hermes-agent/issues/134290) | 转录与数据库不一致，破坏用户对会话历史的信任 | **未发现直接对应 PR** |
| [Issue #155862：Desktop 版本探测超时触发首次启动向导](https://github.com/NousResearch/hermes-agent/issues/155862) | 正常安装被误判为未初始化，并伴随 backend 连接超时 | **未发现直接对应 PR** |
| [Issue #152435：Windows gateway stop 后子进程仍存活](https://github.com/NousResearch/hermes-agent/issues/152435) | 进程残留、旧代码继续服务、端口占用 | **未发现直接对应 PR** |
| [Issue #156258：Desktop 刷新后错误重选本地 backend](https://github.com/NousResearch/hermes-agent/issues/156258) | 非默认 profile 会话出现 404 | **未发现直接对应 PR** |
| [Issue #151162：`pm gc` 删除仍在使用的 install state](https://github.com/NousResearch/hermes-agent/issues/151162) | 可能破坏活动 launcher，涉及数据丢失 | **未发现直接对应 PR** |
| [Issue #148451：长驻 gateway 不再执行 scratch prune](https://github.com/NousResearch/hermes-agent/issues/148451) | 临时文件持续累积 | **未发现直接对应 PR** |
| [Issue #158250：CLI 抢占 pytest 的 `-p` 参数](https://github.com/NousResearch/hermes-agent/issues/158250) | 仓库内测试无法使用 pytest 插件，触发 INTERNALERROR | **未发现直接对应 PR** |
| [Issue #158382：macOS 自更新产生重复 App Bundle](https://github.com/NousResearch/hermes-agent/issues/158382) | LaunchServices 可能启动旧 bundle 或错误副本 | **未发现直接对应 PR** |
| [Issue #158441：control socket 2 秒超时导致 worker 被误判崩溃](https://github.com/NousResearch/hermes-agent/issues/158441) | 高并发下任务失败、worker 状态错误 | **未发现直接对应 PR** |
| [Issue #158472：插件集变化触发完整 source-update tail](https://github.com/NousResearch/hermes-agent/issues/158472) | gateway 被 fence 15–25 分钟，严重影响可用性 | **未发现直接对应 PR** |
| [Issue #144933：Windows 服务下 worker 结果回写失败](https://github.com/NousResearch/hermes-agent/issues/144933) | 成功依赖同步被记录为失败 | **未发现直接对应 PR** |
| [Issue #158487 关联：压缩 segment 查询无限重试](https://github.com/NousResearch/hermes-agent/issues/158487) | 客户端永久轮询 `storage_unavailable` | **有：[PR #158487](https://github.com/NousResearch/hermes-agent/pull/158487)** |
| [Issue #156899 / provider 插件并发消失](https://github.com/NousResearch/hermes-agent/issues/156899) | 多聊天并发时出现 Unknown provider | **有：[PR #157087](https://github.com/NousResearch/hermes-agent/pull/157087)** |
| [Issue #158478：OpenCodeGo GLM-5.3 推理档位锁死](https://github.com/NousResearch/hermes-agent/issues/158478) | reasoning effort 配置失效或静默锁定 | **有：[PR #158481](https://github.com/NousResearch/hermes-agent/pull/158481)** |
| [Issue #84102：旧版 SessionDB 下压缩 no-op](https://github.com/NousResearch/hermes-agent/issues/84102) | 热更新后上下文压缩看似启动却不执行 | **部分关联：[PR #82451](https://github.com/NousResearch/hermes-agent/pull/82451)** |

### P3 / 中低严重度

- [Issue #62418](https://github.com/NousResearch/hermes-agent/issues/62418)：Kanban respawn guard 阻止合法返工。
- [Issue #126337](https://github.com/NousResearch/hermes-agent/issues/126337)：Email 依赖检查产生错误告警。
- [Issue #31336](https://github.com/NousResearch/hermes-agent/issues/31336)：Feishu 话题中的 @mention 消息被静默丢弃。
- [Issue #158251](https://github.com/NousResearch/hermes-agent/issues/158251)：插件测试与 main 分支模块布局不一致，出现 43 个错误。
- [Issue #158249](https://github.com/NousResearch/hermes-agent/issues/158249)：测试期间端口冲突触发 `os._exit(75)`，杀死整个 pytest batch。
- [Issue #158248](https://github.com/NousResearch/hermes-agent/issues/158248)：生命周期测试终止自身进程组，导致整批测试以 SIGTERM 结束。
- [Issue #150969](https://github.com/NousResearch/hermes-agent/issues/150969)：插件目录对无关安装重复解析，造成 93 秒列表延迟和 RPC 超时。

---

## 6. 功能请求与路线图信号

### 已有明确 PR、进入下一版本概率较高

1. **插件目录与插件生态继续扩容**  
   - [PR #158469：新增 Babelii-Diofis 插件](https://github.com/NousResearch/hermes-agent/pull/158469)  
   社区插件目录仍在持续扩张，插件是 Hermes 扩展能力的重要入口。

2. **Dead Drop 增强私有邮箱能力**  
   - [PR #158489：Dead Drop 升级至 0.3.0](https://github.com/NousResearch/hermes-agent/pull/158489)  
   - 扩大私有 mailbox 容量；
   - 兼容当前任务 deadline/history；
   - 延长大交换场景下的有界操作时间；
   - 保留既有 worker identity 和 pending delivery。  
   表明异步委派、任务交接与 Agent 间通信仍是重要方向。

3. **桌面端状态表达更准确**  
   - [PR #105354](https://github.com/NousResearch/hermes-agent/pull/105354)：区分 monitoring 和 active work；
   - [PR #104985](https://github.com/NousResearch/hermes-agent/pull/104985)：根据首个后续消息生成分支标题；
   - [PR #104380](https://github.com/NousResearch/hermes-agent/pull/104380)：修复 blocked goal 恢复。  
   这组 PR 表明 Desktop 正在从“基本聊天界面”向长任务、后台任务和复杂会话管理演进。

4. **Linux 桌面端发行体验改善**  
   - [PR #154578](https://github.com/NousResearch/hermes-agent/pull/154578)：AppImage 内更新。  
   若合并，可显著降低 Linux 用户的升级成本，也与 macOS/Windows 自更新能力形成统一。

5. **终端生态兼容性增强**  
   - [PR #149976](https://github.com/NousResearch/hermes-agent/pull/149976)：支持 OSC 7501，兼容 Herdr。

### 尚处于提案阶段

- [Issue #138458：让 assignee profile 成为 worker 能力的权威来源](https://github.com/NousResearch/hermes-agent/issues/138458)  
  提议通过 opt-in `worker_policy` 控制 skills、toolsets 和 model override。该需求与 Kanban、profile、自动化 worker 紧密相关，属于架构级改动，纳入下一版本的概率低于已有实现 PR，但值得进入路线图讨论。

- [Issue #135982：Feishu 实时过程 UI](https://github.com/NousResearch/hermes-agent/issues/135982)  
  希望在 Feishu 中展示公开 commentary、可展开工具详情，而非只给摘要。若平台体验继续作为重点，下一或后续版本可能纳入。

---

## 7. 用户反馈摘要

### 高频真实痛点

1. **升级不可信**  
   用户最担心“表面升级成功、实际运行环境残缺”。插件依赖丢失、旧 PID 状态无法清除、macOS 双 Bundle、Docker 误报不同步，均指向升级事务缺少可靠的一致性和回滚语义。

2. **跨平台行为不统一**  
   Windows ACP 挂起、gateway 子进程不退出、Windows 服务结果回写失败；macOS 自更新启动错误 bundle；Linux AppImage 仍需手动更新。Windows 与 macOS 是当前最明显的稳定性短板。

3. **桌面端会话状态不一致**  
   数据库内容存在但界面丢失回复、切换会话触发 404、刷新后误回首次启动、remote backend 被重选，说明多 profile、多 backend 和 session hydration 尚未形成统一状态模型。

4. **长任务和高并发下误判增加**  
   control socket 的 2 秒超时把“尚未终态”当作崩溃；Kanban guard 因历史 PR 评论阻止合法 respawn；长驻 gateway 不再清理 scratch。问题本质都是超时与状态机设计未适应真实负载。

5. **插件系统正在扩张，但治理不足**  
   插件目录、Telegram、Email、Feishu、provider、Dead Drop 均在发展，同时出现依赖丢失、模块布局不一致、目录重复解析等问题。用户期待插件“可发现、可安装、可升级、可运行”，但当前治理能力尚未完全跟上生态规模。

### 满意点与积极信号

- Desktop 的流式交互、draft 和长会话展示持续得到改进；
- Telegram 插件与 Dead Drop 获得明确功能贡献；
- 可读性更高的插件目录正在出现；
- provider、压缩、目标恢复等关键路径已有针对性 PR；
- 社区能够快速暴露真实生产场景中的竞态、超时和平台差异。

### 不满意点

- 某些错误“静默发生”，如插件缺依赖但工具仍注册、TTS 编码不匹配但没有明显报错；
- CLI 持续产生无法清除的升级告警；
- 错误信息与真实状态不一致，例如成功同步被记录为失败；
- 测试基础设施会影响开发者自身进程，批量测试可能被杀；
- 45 个 PR 待处理，使社区修复难以快速转化为可用版本。

---

## 8. 待处理积压

### 需要维护者优先响应

1. [Issue #131859：API 创建 PR 权限错误](https://github.com/NousResearch/hermes-agent/issues/131859)  
   - 创建于 2026-10-03；
   - 68 条评论，为最高热度长期问题；
   - 标记为 upstream blocked，应明确同步上游进展或提供 workaround。

2. [Issue #134469：插件依赖在更新后丢失](https://github.com/NousResearch/hermes-agent/issues/134469)  
   - 创建于 2026-10-07；
   - P1，直接影响大量插件用户；
   - 应建立专门修复 PR 和升级回归测试。

3. [Issue #147873：owed-restart 状态无法清除](https://github.com/NousResearch/hermes-agent/issues/147873)  
   - 创建于 2026-11-02；
   - 影响每次 CLI 调用；
   - 需要检查 gateway 重启状态机的幂等性。

4. [Issue #134290：Desktop 会话记录消失](https://github.com/NousResearch/hermes-agent/issues/134290)  
   - 创建于 2026-10-07；
   - 涉及数据可信度，应优先保证数据库与 UI 一致。

5. [Issue #148601：custom provider model lock 回归](https://github.com/NousResearch/hermes-agent/issues/148601)  
   - 创建于 2026-11-03；
   - 属于明确回归，需定位 v0.22 引入点并补测试。

6. [Issue #84102：Telegram 语音气泡编码降级](https://github.com/NousResearch/hermes-agent/issues/84102)  
   - 创建于 2026-08-11；
   - 长期存在，影响语音消息质量但不一定阻断功能。

7. [Issue #151162：`pm gc` 误删活动 install state](https://github.com/NousResearch/hermes-agent/issues/151162)  
   - 创建于 2026-11-08；
   - 涉及潜在数据丢失，应采用 fail-safe GC 策略。

8. [Issue #158472：插件变化导致 15–25 分钟 gateway fence](https://github.com/NousResearch/hermes-agent/issues/158472)  
   - 新问题但影响严重；
   - 建议拆分“插件依赖变化”和“完整源码更新”两条路径。

### 长期待合并 PR

当前有 **45 个 PR 待合并**。以下长期开放且已获得明确方向的项目应安排 review：

- [PR #153037](https://github.com/NousResearch/hermes-agent/pull/153037)：Telegram 插件处理器顺序；
- [PR #154578](https://github.com/NousResearch/hermes-agent/pull/154578)：Linux AppImage 内更新；
- [PR #105354](https://github.com/NousResearch/hermes-agent/pull/105354)：Desktop 工作状态区分；
- [PR #104985](https://github.com/NousResearch/hermes-agent/pull/104985)：分支标题；
- [PR #104380](https://github.com/NousResearch/hermes-agent/pull/104380)：blocked goal 恢复；
- [PR #149976](https://github.com/NousResearch/hermes-agent/pull/149976)：OSC 7501 / Herdr 支持；
- [PR #82451](https://github.com/NousResearch/hermes-agent/pull/82451)：旧 SessionDB 压缩 no-op。

---

## 项目健康度结论

**健康度评级：中高，但存在短期稳定性警戒。**

- **开发活跃度：高。** 24 小时内 100 条 Issue/PR 更新、45 个待合并 PR、1 个 canary Release。
- **社区参与度：高。** 单个 Issue 达到 68 条评论，插件、Telegram、Feishu、Desktop 均有外部贡献。
- **交付速度：中等。** 今日完成项数量有限，大量关键 PR 仍待 review。
- **稳定性：中低。** P1/P2 问题集中在升级、插件依赖、桌面会话、Windows/macOS 生命周期等核心路径。
- **生态扩展态势：积极。** 插件目录、Dead Drop、provider 兼容和 Desktop 长期任务体验均在推进。
- **短期建议：**  
  1. 优先修复 #134469、#147873、#156258、#156777、#152435；  
  2. 尽快合并 #157087、#154578、#82451；  
  3. 为升级流程增加“插件依赖完整性、gateway 重启确认、跨平台进程树”回归测试；  
  4. 在 canary 发布说明中明确 Windows、macOS、Docker 与源码安装的已知限制。

</details>

<details>
<summary><strong>OpenHuman</strong> — <a href="https://github.com/tinyhumansai/openhuman">tinyhumansai/openhuman</a></summary>

# OpenHuman 项目动态日报

**统计日期：2026-11-21**  
**数据范围：过去 24 小时 GitHub Issues / Pull Requests 更新**

## 1. 今日速览

- 过去 24 小时共有 **10 条 Issue 更新、5 条 PR 更新**，但 Issue 均为已关闭状态，未见新开 Issue，PR 则全部仍处于待合并状态。
- 项目当前主要推进两条方向：一是 **记忆后端插件化与供应商适配**，相关父任务及多个子任务已集中关闭；二是 **Rust Core、聊天界面和后台服务稳定性修复**，已有 5 个 PR 等待合并。
- 活跃度可评估为 **中高**：仓库存在明确的模块化工程路线，且关键问题大多已有对应实现；但“Issue 关闭、PR 尚未合并”的比例偏高，实际交付仍取决于后续审查与合并。
- 今日无新版本发布，因此暂不涉及正式版本发布、破坏性变更或升级迁移。
- 项目健康度总体 **稳健偏积极**，但合并队列、长期未响应 PR、跨平台兼容性以及记忆适配器的交付闭环值得继续关注。

---

## 2. 版本发布

今日无新版本发布。

---

## 3. 项目进展

### 3.1 记忆系统插件化完成一轮任务闭环

父任务要求将记忆能力从宿主应用中的融合实现拆分为独立子系统：迁移 TinyCortex 到 `vendor/tinycortex`，统一通过 driver contract 接入，并为外部后端提供统一适配层。该 Issue 已关闭：

- [#5372 Pluggable memory backends behind one driver contract](https://github.com/tinyhumansai/openhuman/issues/5372)

相关子任务也均在过去 24 小时关闭：

- [#5389 memory-spec adapter crate、conformance suite 与 reference server](https://github.com/tinyhumansai/openhuman/issues/5389)
- [#5391 Supermemory memory adapter](https://github.com/tinyhumansai/openhuman/issues/5391)
- [#5392 Supermemory 自托管端到端测试](https://github.com/tinyhumansai/openhuman/issues/5392)
- [#5393 mem0 memory adapter](https://github.com/tinyhumansai/openhuman/issues/5393)
- [#5394 agentmemory memory adapter](https://github.com/tinyhumansai/openhuman/issues/5394)
- [#5395 cognee memory adapter](https://github.com/tinyhumansai/openhuman/issues/5395)

这组任务覆盖了统一 HTTP 合约、一致性测试、参考服务以及四类外部后端，说明记忆系统已从“单一实现”向“可插拔基础设施”迈出关键一步。需要注意，Issue 关闭并不等同于代码已经合入主线；当前数据中未展示这些任务对应的合并 PR，仍建议核对相关分支和主分支状态。

### 3.2 聊天文本截断修复等待合并

- [#8763 fix(chat): keep emoji whole when clipping tool text](https://github.com/tinyhumansai/openhuman/pull/8763)

该 PR 统一了工具调用标签和网页搜索结果中的文本截断逻辑，避免在长度上限处将 emoji 切半，并复用已有共享截断函数。它属于低风险、高可见性的 UI 稳定性修复，预计较适合进入下一次常规发布。

### 3.3 Agent 注册表热更新能力接近完成

- [#8065 fix(agent): refresh process agent registry after agent_registry_update](https://github.com/tinyhumansai/openhuman/pull/8065)

该 PR 让 `agent_registry_update` 后同步刷新进程内 Agent registry，使 subagent allowlist 修改无需重启即可生效，同时覆盖启动时合并注册表数据的场景。它直接改善动态配置和多 Agent 编排体验，但该 PR 自 2026-10-17 创建后仍处于开放状态，合并节奏偏慢。

### 3.4 Rust Core 模块边界重构待审查

- [#8738 refactor(core): move controller schemas to their owning domains](https://github.com/tinyhumansai/openhuman/pull/8738)

该重构将 controller schema 移回所属领域，例如搜索、Composio、Agent Runs、Triage 和 Registry。该方向有助于降低模块耦合并提高 Rust Core 的可维护性，但属于结构性变更，合并前需要更充分的回归验证。

### 3.5 Linux 后台服务安装问题已有修复方案

- [#8745 fix(service): install the Linux user unit where systemd looks for it](https://github.com/tinyhumansai/openhuman/pull/8745)

修复将 systemd user unit 写入正确的 `$XDG_CONFIG_HOME/systemd/user` 路径，解决新安装后 `systemctl --user enable/start openhuman.service` 失败的问题。这直接提升 Linux 后台服务安装成功率，属于应在近期版本优先合入的部署稳定性修复。

### 3.6 Windows 脚本执行兼容性已有修复方案

- [#8755 fix(scripts): run ci-cancel-aware.sh through bash on Windows](https://github.com/tinyhumansai/openhuman/pull/8755)

该 PR 修复 Windows 下直接执行 `ci-cancel-aware.sh` 导致的 `ENOENT`：存在 Bash 时通过 Bash 运行，否则直接调用 `cargo`，从而兼顾 CI 取消机制与无 Bash 环境。

### 3.7 整体推进程度

项目今日在记忆架构、聊天展示、Agent 热更新、Core 模块治理和跨平台部署等方面都有明确推进。综合可评价为：

- **架构进展：明显**
- **稳定性修复：已有多个候选方案**
- **发布交付：暂未形成**
- **合并转化：偏慢，5 个 PR 均未进入已合并状态**

---

## 4. 社区热点

### 4.1 讨论最集中：记忆后端插件化

过去 24 小时更新的 Issue 中，记忆系统相关条目评论数最高，其中多个条目达到 **3—5 条评论**：

- [#5372 Pluggable memory backends behind one driver contract](https://github.com/tinyhumansai/openhuman/issues/5372) — **5 条评论**
- [#5391 Supermemory adapter](https://github.com/tinyhumansai/openhuman/issues/5391) — **3 条评论**
- [#5392 Supermemory E2E test](https://github.com/tinyhumansai/openhuman/issues/5392) — **3 条评论**
- [#5393 mem0 adapter](https://github.com/tinyhumansai/openhuman/issues/5393) — **3 条评论**
- [#5394 agentmemory adapter](https://github.com/tinyhumansai/openhuman/issues/5394) — **3 条评论**
- [#5395 cognee adapter](https://github.com/tinyhumansai/openhuman/issues/5395) — **3 条评论**
- [#5389 memory-spec、conformance suite 与 reference server](https://github.com/tinyhumansai/openhuman/issues/5389) — **3 条评论**

**背后诉求：**

1. 降低记忆系统与 Rust Core 宿主之间的耦合。
2. 允许用户按部署环境选择 Supermemory、mem0、agentmemory 或 cognee。
3. 用统一协议和一致性测试控制第三方后端差异。
4. 让第三方后端即使不编写 Rust 代码，也能通过 HTTP contract 接入。

这是今日最清晰的产品和技术路线信号：**OpenHuman 正在把记忆能力从内部功能升级为可替换基础设施。**

### 4.2 其他高关注议题

- [#3041 Named agent teams via personalities + orchestration](https://github.com/tinyhumansai/openhuman/issues/3041) — **3 条评论**
- [#3470 Onboarding walkthrough for mascot, agent naming and profiles](https://github.com/tinyhumansai/openhuman/issues/3470) — **3 条评论**
- [#5054 Dune Analytics dashboard for Solana on-chain metrics](https://github.com/tinyhumansai/openhuman/issues/5054) — **3 条评论**

这些议题分别反映：

- 用户希望从“单个助手”走向可命名、分工明确的多 Agent 团队。
- 新用户需要更顺畅的吉祥物定制、Agent 命名及档案创建流程。
- 项目运营方需要统一观察 Solana 上的 Token 使用、钱包交互、交易量及生态合约活动。

### 4.3 PR 热度偏低

5 个 PR 均未显示评论或点赞数据，说明当前合并阶段缺少公开讨论热度。可能原因包括：

- PR 多数由熟悉模块的维护者主导，技术讨论发生在其他渠道；
- 审查资源不足；
- 部分 PR 已创建多日，但尚未完成正式 review。

目前尚无明显获得社区广泛共识的单个 PR。

---

## 5. Bug 与稳定性

### 严重程度：中等

#### Linux 后台服务无法通过 systemd user service 启动

- Issue 对应 PR：[#8745 fix(service): install the Linux user unit where systemd looks for it](https://github.com/tinyhumansai/openhuman/pull/8745)
- **状态：已有 fix PR，尚未合并**
- **影响范围：** Linux 新安装、后台服务部署与开机启动
- **风险：** 用户执行 `systemctl --user enable/start openhuman.service` 可能失败，影响服务常驻和系统集成体验。

### 严重程度：中低

#### Agent registry 更新后进程内状态未刷新

- 对应 PR：[#8065 fix(agent): refresh process agent registry after agent_registry_update](https://github.com/tinyhumansai/openhuman/pull/8065)
- **状态：已有 fix PR，尚未合并**
- **影响范围：** 动态修改 Agent 配置、subagent allowlist 和运行时派生 Agent
- **风险：** 配置已保存但运行时仍使用旧值，用户可能认为更新无效，必须重启才能恢复一致状态。

### 严重程度：低

#### Windows 执行 CI 取消包装脚本时报 `ENOENT`

- 对应 PR：[#8755 fix(scripts): run ci-cancel-aware.sh through bash on Windows](https://github.com/tinyhumansai/openhuman/pull/8755)
- **状态：已有 fix PR，尚未合并**
- **影响范围：** Windows 本地脚本与 CI 取消行为
- **风险：** 主要影响开发体验和测试效率，对终端用户影响较小。

### 严重程度：低

#### 工具文本和搜索结果截断时切坏 emoji

- 对应 PR：[#8763 fix(chat): keep emoji whole when clipping tool text](https://github.com/tinyhumansai/openhuman/pull/8763)
- **状态：已有 fix PR，尚未合并**
- **影响范围：** 聊天工具调用标签、网页搜索结果
- **风险：** 视觉显示不完整，可能造成乱码或异常字符，但不影响核心功能。

### 回归风险观察

[#8738 controller schema 领域化重构](https://github.com/tinyhumansai/openhuman/pull/8738) 本身不是已报告 Bug，但属于潜在回归来源。模块移动可能影响：

- schema 导入路径；
- controller 注册和序列化；
- RPC 路由兼容性；
- 跨模块类型依赖和测试覆盖。

该 PR 在合并前应重点验证 controller 暴露接口及序列化兼容性。

---

## 6. 功能请求与路线图信号

### 6.1 可插拔记忆后端：最明确的近期架构方向

相关 Issues：

- [#5372 统一 memory driver contract](https://github.com/tinyhumansai/openhuman/issues/5372)
- [#5389 memory-spec 与 conformance suite](https://github.com/tinyhumansai/openhuman/issues/5389)
- [#5391 Supermemory adapter](https://github.com/tinyhumansai/openhuman/issues/5391)
- [#5392 Supermemory E2E test](https://github.com/tinyhumansai/openhuman/issues/5392)
- [#5393 mem0 adapter](https://github.com/tinyhumansai/openhuman/issues/5393)
- [#5394 agentmemory adapter](https://github.com/tinyhumansai/openhuman/issues/5394)
- [#5395 cognee adapter](https://github.com/tinyhumansai/openhuman/issues/5395)

**纳入下一版本的概率：高。**  
原因是相关 Issue 已集中关闭，任务边界清晰，并同时包含协议、测试和多个实现适配。不过，当前没有明确对应的已合并 PR 或 release，因此正式发布概率仍取决于代码合入和兼容性测试。

### 6.2 Named Agent Teams：重要路线图方向

- [#3041 Named agent teams via personalities + orchestration](https://github.com/tinyhumansai/openhuman/issues/3041)

该任务试图基于现有 Agent 基础设施重新设计命名团队、个性配置和编排机制，并取代早期独立 `[[teams]]` 配置块方案。

**纳入下一版本的概率：中等。**  
产品方向明确，但涉及运行时、配置模型和记忆隔离等较深层改造；今日没有直接对应的开放 PR，短期更可能以设计收敛或分阶段实现为主。

### 6.3 新手引导和档案管理：用户体验改进机会

- [#3470 Onboarding walkthrough for mascot customization, agent naming and profiles](https://github.com/tinyhumansai/openhuman/issues/3470)

**纳入下一版本的概率：中等。**  
该功能直接影响首次使用成功率，且范围相对可控。但今日没有对应 PR，需确认关闭原因是否表示设计已放弃、需求已满足或工作转移至其他 Issue。

### 6.4 Solana 链上指标看板：运营与生态方向

- [#5054 Set up Dune Analytics dashboard for Solana on-chain metrics](https://github.com/tinyhumansai/openhuman/issues/5054)

**纳入下一版本概率：较低至中等。**  
它更像生态运营和数据分析基础设施，而非核心客户端功能；是否进入产品版本取决于项目方的生态运营优先级。

### 6.5 聊天、Agent 与跨平台修复：较适合进入下一补丁版本

- [#8763 emoji 截断修复](https://github.com/tinyhumansai/openhuman/pull/8763)
- [#8065 Agent registry 热刷新](https://github.com/tinyhumansai/openhuman/pull/8065)
- [#8755 Windows Bash 兼容](https://github.com/tinyhumansai/openhuman/pull/8755)
- [#8745 Linux systemd unit 路径修复](https://github.com/tinyhumansai/openhuman/pull/8745)

这些改动大多边界清晰、用户价值直接，适合作为下一补丁或常规版本的优先合入项。

### 6.6 Rust Core 领域化重构：适合进入架构版本，而非仓促发布

- [#8738 controller schemas 领域化重构](https://github.com/tinyhumansai/openhuman/pull/8738)

**纳入下一版本的概率：中等。**  
架构收益明确，但应与相关回归测试和接口兼容检查绑定，避免在缺少充分验证时进入稳定版本。

---

## 7. 用户反馈摘要

根据可见 Issue 摘要及评论数，可提炼出以下真实需求：

### 7.1 记忆后端需要“可选择、可替换、可验证”

用户并不满足于固定的内置记忆引擎，希望：

- 在托管服务与自托管服务之间切换；
- 同时兼容 Supermemory、mem0、agentmemory 和 cognee；
- 通过统一协议降低后端差异；
- 用 conformance suite 和 E2E 脚本验证 store、recall、forget 等核心行为。

这是当前最强的共同诉求。相关讨论集中在：

- [#5372](https://github.com/tinyhumansai/openhuman/issues/5372)
- [#5391](https://github.com/tinyhumansai/openhuman/issues/5391)
- [#5393](https://github.com/tinyhumansai/openhuman/issues/5393)
- [#5395](https://github.com/tinyhumansai/openhuman/issues/5395)

### 7.2 自托管场景是重要使用场景

多个任务明确面向 self-hosted backend，并考虑异步写入、轮询和 Bearer Token 安全。这表明项目存在较强的私有化部署和数据控制需求，而非仅依赖官方云服务。

典型诉求见：

- [#5392 自托管 Supermemory E2E 测试](https://github.com/tinyhumansai/openhuman/issues/5392)
- [#5393 mem0 托管版与 OpenMemory 双传输](https://github.com/tinyhumansai/openhuman/issues/5393)
- [#5394 agentmemory 自托管服务与明文 Bearer Guard](https://github.com/tinyhumansai/openhuman/issues/5394)

### 7.3 用户希望更快地配置多个 Agent

[#3041](https://github.com/tinyhumansai/openhuman/issues/3041) 反映出用户对人格化命名 Agent、团队分工和清晰编排的需求。早期方案中的独立 `[[teams]]` 配置块不够理想，后续方向更强调在现有基础设施上构建。

### 7.4 首次使用流程仍有可用性空间

[#3470](https://github.com/tinyhumansai/openhuman/issues/3470) 指向三类具体痛点：

- 吉祥物外观定制不够直观；
- Agent 命名缺少引导；
- 额外档案创建与任务栏快捷切换不够顺畅。

这说明用户希望产品从“功能可用”进一步走向“低学习成本”。

### 7.5 生态透明度需求

[#5054](https://github.com/tinyhumansai/openhuman/issues/5054) 表明维护者或生态参与者需要统一观察 Solana 上的 Token 使用、钱包行为、交易量和合约活动，以降低生态运营的信息盲区。

### 7.6 满意度信号有限

今日 Issue 没有点赞数据，且 PR 也无公开点赞或评论，因此无法从 reaction 数量判断社区满意度。当前更可靠的信号是：**多条相关 Issue 已被关闭，说明讨论大概率已形成阶段性结论，但没有公开数据证明用户已充分认可最终实现。**

---

## 8. 待处理积压

### 8.1 长期开放的 Agent registry 修复 PR

- [#8065 fix(agent): refresh process agent registry after agent_registry_update](https://github.com/tinyhumansai/openhuman/pull/8065)
- 创建于 **2026-10-17**，截至日报仍有更新但尚未合并。
- **积压时间：至少 35 天**
- **关注重点：** 该修复直接影响运行时配置一致性，应明确 review 状态、测试结果和合并时间表。

### 8.2 5 个开放 PR 全部未合并

当前待合并 PR：

- [#8763 emoji 截断修复](https://github.com/tinyhumansai/openhuman/pull/8763)
- [#8065 Agent registry 热刷新](https://github.com/tinyhumansai/openhuman/pull/8065)
- [#8755 Windows Bash 兼容修复](https://github.com/tinyhumansai/openhuman/pull/8755)
- [#8738 controller schema 领域化重构](https://github.com/tinyhumansai/openhuman/pull/8738)
- [#8745 Linux systemd user unit 路径修复](https://github.com/tinyhumansai/openhuman/pull/8745)

其中后四项均自 2026-11-16 创建后保持开放，#8065 积压更久。建议维护者优先处理：

1. Linux 服务安装修复；
2. Agent registry 一致性修复；
3. Windows 脚本兼容；
4. emoji 截断；
5. Rust Core 重构。

### 8.3 已关闭 Issue 与代码交付状态需要核验

以下架构任务均已关闭，但今日 PR 列表未显示对应合并记录：

- [#5372](https://github.com/tinyhumansai/openhuman/issues/5372)
- [#5389](https://github.com/tinyhumansai/openhuman/issues/5389)
- [#5391](https://github.com/tinyhumansai/openhuman/issues/5391)
- [#5392](https://github.com/tinyhumansai/openhuman/issues/5392)
- [#5393](https://github.com/tinyhumansai/openhuman/issues/5393)
- [#5394](https://github.com/tinyhumansai/openhuman/issues/5394)
- [#5395](https://github.com/tinyhumansai/openhuman/issues/5395)

建议维护者明确标注每个任务是：

- 已实现并合入；
- 已由其他 PR 替代；
- 仅完成设计；
- 因优先级变化而关闭。

否则可能出现 Issue 状态与实际可交付能力不一致。

### 8.4 已关闭但仍具路线图价值的需求

以下 Issue 已关闭，但若对应需求尚未落地，仍应保留后续 tracking：

- [#3041 Named agent teams](https://github.com/tinyhumansai/openhuman/issues/3041)
- [#3470 Onboarding walkthrough](https://github.com/tinyhumansai/openhuman/issues/3470)
- [#5054 Solana Dune dashboard](https://github.com/tinyhumansai/openhuman/issues/5054)

建议补充关闭结论、替代 Issue 或后续里程碑，避免需求在关闭状态下失去可见性。

---

## 项目健康度结论

**综合健康度：良好，交付节奏有待改善。**

- **正向信号：** 记忆系统插件化路线清晰，协议、测试和适配器任务成组推进；聊天、Agent 配置、Linux 服务和 Windows 脚本均有针对性修复。
- **主要风险：** 5 个 PR 全部未合并，其中一项已开放超过一个月；今日无发布；记忆架构任务虽关闭，但公开数据无法确认全部代码已进入主线。
- **近期建议：** 优先合并 [#8745](https://github.com/tinyhumansai/openhuman/pull/8745)、[#8065](https://github.com/tinyhumansai/openhuman/pull/8065)、[#8755](https://github.com/tinyhumansai/openhuman/pull/8755) 和 [#8763](https://github.com/tinyhumansai/openhuman/pull/8763)，随后完成 [#8738](https://github.com/tinyhumansai/openhuman/pull/8738) 的兼容性回归，并同步核验记忆插件化任务的实际合入状态。

</details>

---
*本日报由 [Big Model Radar](https://github.com/96loveslife/big_model_radar) 自动生成。*
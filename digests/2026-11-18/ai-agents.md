# OpenClaw 生态日报 2026-11-18

> Issues: 475 | PRs: 500 | 覆盖项目: 8 个 | 生成时间: 2026-11-18 06:49 UTC

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

**统计日期：2026-11-18**  
**数据窗口：过去 24 小时**  
**数据来源：OpenClaw GitHub（Issues / Pull Requests / Releases）**

---

## 1. 今日速览

OpenClaw 过去 24 小时更新了 **475 条 Issues**（353 条新开或活跃、122 条关闭）和 **500 条 PR**（259 条待合并、241 条已合并或关闭），并发布 **2 个版本**，整体处于高强度开发与发布并行状态。  
今日议题主要集中在 **Gateway 生命周期管理、SQLite/WAL 状态一致性、升级回滚、插件热重载、记忆系统可靠性及多代理会话稳定性**。其中 P0/P1 问题仍有多项涉及消息丢失、会话阻塞或 Gateway 不可用，稳定性压力尚未完全解除。  
PR 侧已经出现针对升级修复、Claude CLI 最终回复、插件 SDK 类型导出、自动化通知和内存索引等问题的针对性补丁；不过相当比例仍处于等待作者、等待证明或等待维护者审查状态。  
综合评估，项目健康度为 **中高但风险偏高**：发布和合并吞吐很高，但更新器、状态数据库与多代理运行链路上的系统性缺陷较为集中，建议下一阶段优先收敛高严重度问题和升级恢复路径。

---

## 2. 版本发布

### v2026.11.5

**Release：** [v2026.11.5](https://github.com/openclaw/openclaw/releases/tag/v2026.11.5)

#### 核心更新

- **重启安全会话**
  - 队列消息、发送权限和最终聊天写入在 Gateway 重启后保留。
  - 重点解决重启期间已接收任务、权限状态或最终回复丢失的问题。
  - 关联工作： [#196923](https://github.com/openclaw/openclaw/pull/196923)、[#196540](https://github.com/openclaw/openclaw/pull/196540)、[#196493](https://github.com/openclaw/openclaw/pull/196493)。

- **更安全的更新流程**
  - Doctor 或 Gateway 启动失败时，更新流程可触发回滚，降低“核心已切换但状态未完成迁移”的风险。

- **可靠性、性能与模型支持**
  - 发布说明还包含关键安全更新、可靠性与性能修复，以及新的模型支持。

#### 破坏性变更与迁移注意事项

- Release 摘要未明确列出新的破坏性配置变更。
- 但升级用户仍需重点检查：
  - **Doctor 迁移是否完整结束**；
  - **插件数据迁移是否收敛**；
  - **Gateway 是否出现 `state-migrated-no-rollback`**；
  - **WAL 发布校验是否失败**。
- 当前仍有多条与该版本相邻的升级故障报告，因此建议升级前备份 `state/`，升级后执行 `openclaw doctor --fix`，并核验插件版本和 Gateway 启动日志。
- 不建议在无人值守的生产环境中直接跨越旧版本升级，应先验证更新回滚路径。

### v2026.10.33

**Release：** [v2026.10.33](https://github.com/openclaw/openclaw/releases/tag/v2026.10.33)

- 这是面向 Gateway 的 **`extended-stable` 发布**，当前定位相当于 LTS。
- 包含 2026 年 10 月末代码基线，以及后续的关键安全更新、可靠性与性能修复和模型支持。
- 该版本强调稳定分支，而非引入大量新接口；升级时仍建议保留现有配置和状态库备份。

---

## 3. 项目进展

今日 PR 总量达到 **500 条**，其中 **241 条已合并或关闭**，显示项目在功能扩展、回归修复和工程治理方面均有较高吞吐。以下是较值得关注的核心进展。

### 3.1 发布与升级链路继续加固

- [#201046 — fix(release): honor 2026.11.6 Kova waiver](https://github.com/openclaw/openclaw/pull/201046)  
  为 2026.11.6 记录已批准的 Kova 性能阈值豁免，使可信发布工具能够正确处理发布校验例外。该 PR 仍待审查。

- [#201009 — fix: let the next update finish a killed source checkout update](https://github.com/openclaw/openclaw/pull/201009)  
  源检出安装在更新中途被杀后，后续 `openclaw update` 不再持续拒绝执行，可降低 Git checkout 用户被迫手动执行 `update repair` 的概率。目前等待作者处理。

- [#200987 — feat: install GBrain without Bun on Apple Silicon Macs and x86-64 Linux](https://github.com/openclaw/openclaw/pull/200987)  
  GBrain 安装不再强制用户预先安装 Bun；Linux 侧也调整了 `unzip` 等依赖处理。PR 已关闭，但具体是合并还是放弃，摘要中无法确认。

- [#201047 — fix(ci): keep scoped restore fixture eligible for scoped backups](https://github.com/openclaw/openclaw/pull/201047)  
  修正升级驱动测试中 scoped 备份夹具与 schema v43 的兼容问题，属于升级回归测试基础设施修复。

### 3.2 Gateway 与代理运行稳定性得到针对性修补

- [#200470 — fix: keep the final answer after a progress message in claude-cli chats](https://github.com/openclaw/openclaw/pull/200470)  
  修复 Claude CLI 后端中，进度消息被误判为最终回复、进而覆盖真正最终答案的问题。该 PR 标记为 P1、证明充分，等待维护者审查。

- [#200966 — fix: reduce completion churn and preserve first-chat authorization](https://github.com/openclaw/openclaw/pull/200966)  
  避免标题、摘要和旁支问题重复复制完整模型目录；摘要称在 500 个模型、200 次短补全场景中可避免约 10 万条模型记录复制，同时保留首次聊天授权语义。标记为兼容性风险，尚未合并。

- [#194276 — fix: stop expected automation skips from posting did-not-start notices](https://github.com/openclaw/openclaw/pull/194276)  
  修复因 `active-hours`、`busy` 等预期跳过原因未向下游传递，导致自动化错误发送“未启动”通知的问题。P1，状态为待维护者审查。

- [#201008 — fix: keep Telegram automations tied to their owner and account](https://github.com/openclaw/openclaw/pull/201008)  
  防止 Telegram 定时任务在后续修复或重新授权过程中丢失创建者、账号上下文，避免机器人健康但任务仍报告账号不可用。

### 3.3 插件 SDK 与插件安装体验改善

- [#201050 — fix(plugin-sdk): restore model and metrics type exports](https://github.com/openclaw/openclaw/pull/201050)  
  恢复插件 SDK 对六个模型钩子及指标类型的公开导出，修复下游插件声明构建和类型检查失败。该修改直接面向插件兼容性。

- [#201044 — fix: clear stale exports and preserve public plugin types](https://github.com/openclaw/openclaw/pull/201044)  
  清理 message-tool 重构后的无效导出，同时避免把公开插件类型错误改为私有。该 PR 已关闭，但带有兼容性风险标记，合并状态需结合仓库进一步确认。

- [#201049 — fix(bonjour): keep Ciao out of the root npm bundle](https://github.com/openclaw/openclaw/pull/201049)  
  避免 Bonjour 的 Ciao 补丁进入根 npm 包，减少本地诊断构建中 npm pack 因硬链接文件发生死锁或打包失败的风险。

- [#200961 — feat(plugins): grant conversation access through the capability review](https://github.com/openclaw/openclaw/pull/200961)  
  将会话读取权限纳入插件安装时的能力审查流程，减少安装后手工修改 `hooks.allowConversationAccess` 的步骤。涉及安全边界，等待作者处理。

### 3.4 Web UI、模板与可观测性

- [#200923 — warn on small-context manual picks and skip them in automatic setup](https://github.com/openclaw/openclaw/pull/200923)  
  对上下文窗口过小的本地模型给出警告，并在自动设置中跳过这类模型，避免首次真实消息才出现 context overflow。状态为需要证明。

- [#196203 — feat(templates): install local projects through live Gateway](https://github.com/openclaw/openclaw/pull/196203)  
  支持通过运行中的 Gateway 安装本地模板项目，避免停机，也不要求提前发布到 ClawHub。

- [#201028 — feat: preview and annotate widgets from their headers](https://github.com/openclaw/openclaw/pull/201028)  
  为内联组件增加标题和精确反馈入口，允许直接从组件头部预览、标注，降低用户用自然语言描述目标或额外截屏的成本。

- [#141004 — feat(audit): record observed runtime skill usage](https://github.com/openclaw/openclaw/pull/141004)  
  将运行时实际读取或调用的 skill 记录到持久化审计面，方便运营者确认技能是否真正生效。该功能仍需要补充证明。

### 3.5 整体推进判断

从已展示 PR 可以看出，项目当天不仅在增加模板、组件和审计能力，也在集中清理更新器、状态数据库、插件 API 和自动化通知等“基础链路”问题。  
但多数高价值修复仍处于开放状态，尤其 P1/P0 问题相关的维护者审查、兼容性验证和回归证明尚未全部完成，因此更适合评价为 **“推进明显，但尚未完全收敛”**。

---

## 4. 社区热点

### 4.1 Issues：讨论最集中的是升级、Gateway 与记忆可靠性

1. [#164294 — Gateway state DB WAL auto-checkpoint never completes](https://github.com/openclaw/openclaw/issues/164294)  
   **42 条评论，当前最高热度。**  
   状态库 WAL checkpoint 自启动以来持续被进程内 reader 阻塞，反映 SQLite 状态层存在长期 reader 生命周期问题。诉求不只是“增加日志”，而是确保 checkpoint 能完成、避免 WAL 无界增长并解除发布校验冲突。

2. [#191944 — macOS 上 gateway stop / stop --force 均失败](https://github.com/openclaw/openclaw/issues/191944)  
   **36 条评论。**  
   报错为 `Process ancestry could not be fully inspected`，反映 macOS 服务停止流程对进程树检查过于脆弱。用户需要可预测、可脚本化的停服能力，而不只是要求使用更新动作绕行。

3. [#150635 — 短期记忆保留在 nightly dreaming 前被逐日淘汰](https://github.com/openclaw/openclaw/issues/150635)  
   **29 条评论。**  
   512 条短期 recall 上限与批量摄入策略冲突，使 deep dreaming 阶段无法晋级内容。这直接关系到长期记忆质量和自我学习功能是否真正可用。

4. [#178359 — doctor --fix --non-interactive 长时间无输出并卡住](https://github.com/openclaw/openclaw/issues/178359)  
   **26 条评论，P1。**  
   Doctor 在进入 Agent DB 修复前长时间空闲，用户无法判断是在工作、等待锁还是已经死锁。核心诉求是修复过程可观测、阶段化输出且有明确超时。

5. [#168955 — Windows 启动时间从约 410 秒升至约 1,030 秒](https://github.com/openclaw/openclaw/issues/168955)  
   **22 条评论，P1。**  
   `sidecars.control-ui-assets` 阶段阻塞 477 秒，属于明显启动回归。用户关注的是冷启动和热启动性能，而不是单个资产步骤的偶发延迟。

6. [#197083 — Post-install Doctor WAL 校验失败导致 11.3 更新半完成](https://github.com/openclaw/openclaw/issues/197083)  
   **21 条评论。**  
   核心升级已激活但回滚被 `state-migrated-no-rollback` 阻止，外部插件状态与核心版本可能不一致。它与 [#164294](https://github.com/openclaw/openclaw/issues/164294)、[#161921](https://github.com/openclaw/openclaw/issues/161921) 构成同一类升级可靠性问题。

7. [#126360 — 显式多代理模式下 AgentSelectionRequiredError 刷屏](https://github.com/openclaw/openclaw/issues/126360)  
   **21 条评论。**  
   插件、Control UI 全局 RPC 和 system-agent turn 缺少 `agentId`，说明“显式所有权”模式尚未贯穿所有调用入口。诉求是统一目标解析规则，并避免将正常的路由错误作为高频错误日志。

8. [#123792 — Claude CLI 后端助手回合被渲染两次](https://github.com/openclaw/openclaw/issues/123792)  
   **19 条评论。**  
   WebChat 与 Android 端同时展示实时分块记录和聚合记录，属于持久化/投影层重复写入或展示去重缺失。相关修复已在 [#200470](https://github.com/openclaw/openclaw/pull/200470) 中推进最终回复选择逻辑，但完整重复渲染问题是否完全覆盖仍需确认。

9. [#161921 — state-migrated-no-rollback 后 doctor 与 plugins update 相互阻塞](https://github.com/openclaw/openclaw/issues/161921)  
   **19 条评论，P0。**  
   Doctor 要求先更新插件，插件更新又要求先运行 Doctor，形成升级死锁。用户需要无人工绕行的状态恢复顺序。

10. [#182891 — Prompt cache 从不复用](https://github.com/openclaw/openclaw/issues/182891)  
    **18 条评论，1 个赞。**  
    `cache read dropped N -> 0` 表明 envelope 重写和 `runtimeContextCarrier` 变化可能持续破坏缓存前缀，直接影响延迟和 token 成本。

### 4.2 PR：今日热点集中于发布、包装、SDK 与可观测性

- [#201046 — 2026.11.6 Kova waiver](https://github.com/openclaw/openclaw/pull/201046)：发布校验豁免机制。
- [#201049 — Bonjour/Ciao npm 打包修复](https://github.com/openclaw/openclaw/pull/201049)：根包依赖与 npm pack 稳定性。
- [#200923 — 小上下文模型预警](https://github.com/openclaw/openclaw/pull/200923)：改善本地模型配置体验。
- [#200470 — Claude CLI 最终回复保留](https://github.com/openclaw/openclaw/pull/200470)：直接面向 P1 消息正确性。
- [#201050 — 恢复插件 SDK 类型导出](https://github.com/openclaw/openclaw/pull/201050)：面向下游插件构建兼容。
- [#200966 — 降低补全开销并保留首次聊天授权](https://github.com/openclaw/openclaw/pull/200966)：性能与权限语义同时调整。

> 注：提供的 PR 列表中评论数均为 `undefined`，因此无法按评论数进行可靠排序；上述 PR 主要依据热度标签、优先级、创建时间和问题关联度选取。

---

## 5. Bug 与稳定性

以下按严重程度排列；“已有 fix PR”仅依据当前展示数据判断。

### P0 / 发布阻断级

| 问题 | 影响 | 修复状态 |
|---|---|---|
| [#161921 — Doctor 与插件更新在 `state-migrated-no-rollback` 后互相阻塞](https://github.com/openclaw/openclaw/issues/161921) | 核心与插件版本可能长期不一致，无法通过标准命令恢复 | **未发现明确关联 fix PR** |
| [#153426 — MEMORY.md / USER.md 被 provenance ratchet 永久排除](https://github.com/openclaw/openclaw/issues/153426) | 用户定制记忆和身份上下文可能静默失效，且无诊断或恢复入口 | **未发现明确关联 fix PR** |
| [#167406 — Windows MSIX 启用 Codex 后 Gateway 主线程饥饿](https://github.com/openclaw/openclaw/issues/167406) | Gateway 启动超时、事件循环阻塞，属于可用性故障 | **未发现明确关联 fix PR** |

### P1 / 高严重度

| 问题 | 影响 | 修复状态 |
|---|---|---|
| [#178359 — `doctor --fix --non-interactive` 卡住 15 分钟以上](https://github.com/openclaw/openclaw/issues/178359) | 自动修复不可用，升级恢复受阻 | [#201040](https://github.com/openclaw/openclaw/pull/201040) 仅修复相关测试；**主修复未明确** |
| [#168955 — Windows 启动严重变慢](https://github.com/openclaw/openclaw/issues/168955) | 冷启动时间最高增加约 2.5 倍 | **未发现明确关联 fix PR** |
| [#181120 — macOS Gateway 卡在关闭 worker MessagePort](https://github.com/openclaw/openclaw/issues/181120) | Gateway 间歇性无响应，需要人工重启 | **未发现明确关联 fix PR** |
| [#196505 — memory index 超过 worker 容量后直接中止](https://github.com/openclaw/openclaw/issues/196505) | 约 864 MiB 记忆语料无法建索引，且不自动重试 | **未发现明确关联 fix PR** |
| [#167557 — 插件延迟迁移无法收敛](https://github.com/openclaw/openclaw/issues/167557) | 插件配置和数据可能停留在旧版本 | **未发现明确关联 fix PR** |
| [#152965 — 非 channel 插件热重载会断开 channel 插件](https://github.com/openclaw/openclaw/issues/152965) | 活跃 WebSocket/消息流中断，入口消息丢失 | **未发现明确关联 fix PR** |
| [#194403 — helper completion 续接后自身权限失效](https://github.com/openclaw/openclaw/issues/194403) | 后续人工消息被阻塞 | **未发现明确关联 fix PR** |
| [#194451 — 运行中发送 `/think` 导致 SQLite transcript mutation conflict](https://github.com/openclaw/openclaw/issues/194451) | 当前 turn 直接失败 | **未发现明确关联 fix PR** |
| [#166641 — `web_fetch` 冷回退在主线程同步加载插件](https://github.com/openclaw/openclaw/issues/166641) | Gateway 主线程停顿，影响整体活性 | **未发现明确关联 fix PR** |
| [#174681 — 插件准备同步阻塞 Gateway 主线程](https://github.com/openclaw/openclaw/issues/174681) | 回归导致 Gateway 可停用数分钟 | **未发现明确关联 fix PR** |
| [#200470 对应缺陷：Claude CLI 进度消息覆盖最终答案](https://github.com/openclaw/openclaw/pull/200470) | 最终回复可能丢失 | **已有 PR，待维护者审查** |

### P2 / 重要但通常不直接阻断发布

| 问题 | 影响 | 修复状态 |
|---|---|---|
| [#191944 — macOS stop / stop --force 失败](https://github.com/openclaw/openclaw/issues/191944) | 停服和自动化运维受阻 | **未发现明确关联 fix PR** |
| [#164294 — WAL checkpoint 长期阻塞](https://github.com/openclaw/openclaw/issues/164294) | WAL 持续增长，并触发更新发布校验问题 | **未发现明确关联 fix PR** |
| [#197083 — WAL 校验失败导致升级半完成](https://github.com/openclaw/openclaw/issues/197083) | 核心与插件状态不一致 | **未发现明确关联 fix PR** |
| [#126360 — 多代理路由错误刷屏](https://github.com/openclaw/openclaw/issues/126360) | 日志噪声、额外运维成本 | **未发现明确关联 fix PR** |
| [#123792 — 助手回合重复渲染](https://github.com/openclaw/openclaw/issues/123792) | UI 混乱、移动端体验下降 | **可能由** [#200470](https://github.com/openclaw/openclaw/pull/200470) **部分覆盖** |
| [#182891 — Prompt cache 从不命中](https://github.com/openclaw/openclaw/issues/182891) | 成本和延迟上升 | **未发现明确关联 fix PR** |
| [#161158 — restart 实际成功却报告失败并退出 0](https://github.com/openclaw/openclaw/issues/161158) | 自动化误判、错误退出码与硬编码 60 秒预算 | **未发现明确关联 fix PR** |
| [#200756 — Windows beta.2 → beta.4 更新在 package-swap 失败](https://github.com/openclaw/openclaw/issues/200756) | 测试版升级失败，回滚树状态异常 | **未发现明确关联 fix PR** |
| [#127195 — 16 处相同错误缺少原因码](https://github.com/openclaw/openclaw/issues/127195) | 生产环境难以定位根因 | **未发现明确关联 fix PR** |
| [#141172 — 首次 session commit 前死亡会泄漏 `agent.run.started`](https://github.com/openclaw/openclaw/issues/141172) | 轨迹 flush 失败、无 finished 记录 | **未发现明确关联 fix PR** |
| [#127195 / #141172 等状态可观测性问题](https://github.com/openclaw/openclaw/issues/127195) | 错误信息和运行生命周期不一致 | **未发现明确关联 fix PR** |

### 已关闭或确认恢复

- [#192667 — macOS Settings 缓慢与暗色主题输入不可见](https://github.com/openclaw/openclaw/issues/192667)：用户确认升级到 **2026.11.5** 后两项问题均已解决。
- [#158592 — 主机休眠后 runtime publication 超时](https://github.com/openclaw/openclaw/issues/158592)：已关闭；仍需关注同类 wake-recovery 路径是否产生复发。
- [#185578 — Gateway heap floor 只升不降](https://github.com/openclaw/openclaw/issues/185578)：已关闭，涉及长期运行进程内存可达性问题。
- [#155396 — Codex final-answer recovery 被 provenance 拒绝](https://github.com/openclaw/openclaw/issues/155396)：已关闭。
- [#144594 — pendingInputs 在 interrupted 状态无重放](https://github.com/openclaw/openclaw/issues/144594)：已关闭。

---

## 6. 功能请求与路线图信号

### 6.1 本地模板与 Gateway 一键安装

- [#196203 — 通过运行中的 Gateway 安装本地模板项目](https://github.com/openclaw/openclaw/pull/196203)  
  已形成较完整 PR，支持 `openclaw templates add ./my-template` 及 Web UI Import。  
  **下一版本可能性：较高。** 它直接改善模板分发和开发者体验，且不需要破坏现有模板格式。

### 6.2 Web UI 内联组件的标题、预览和标注

- [#201028 — 从组件头部预览和标注 widgets](https://github.com/openclaw/openclaw/pull/201028)  
  已提供截图证明，但状态为等待作者。  
  **下一版本可能性：中高。** 方向明确，但需要确认组件 API 是否会引入兼容性变化。

### 6.3 插件安装时的会话访问能力审查

- [#200961 — 通过 capability review 授予会话访问权限](https://github.com/openclaw/openclaw/pull/200961)  
  目标是让第三方插件的会话 hook、session fork 等权限在安装审查中显式授予。  
  **下一版本可能性：中高。** 契合插件安全治理方向，但涉及敏感权限，应经过安全审查后再进入稳定版。

### 6.4 运行时 skill 使用审计

- [#141004 — 记录实际 runtime skill usage](https://github.com/openclaw/openclaw/pull/141004)  
  将“模型声称使用某技能”和“运行时确实读取/调用技能”区分开，对企业审计和 skill 运营价值较高。  
  **下一版本可能性：中。** PR 较成熟且长期存在，但仍需要补充运行时证明。

### 6.5 插件 hook 获取已验证的发起设备

- [#200664 — 让 hooks 获知发送 turn 的配对设备](https://github.com/openclaw/openclaw/pull/200664)  
  Gateway 已持有 `ApprovalReviewerDeviceId`，PR 将其传递给插件 hook。  
  **下一版本可能性：中高。** 对多设备操作、审批和审计有直接价值，但带兼容性风险。

### 6.6 小上下文模型预警及自动设置过滤

- [#200923 — 手工选择小上下文模型时警告](https://github.com/openclaw/openclaw/pull/200923)  
  避免 8,192-token 等模型在测试阶段通过、首次真实请求却 context overflow。  
  **下一版本可能性：高。** 属于低风险、高收益的配置体验修复。

### 6.7 长任务 checkpoint 与有界让出

- [#138990 — 为前台 WebChat run 增加强制 checkpoint 和 bounded yield](https://github.com/openclaw/openclaw/issues/138990)  
  用户希望在长时间无输出或工具调用过多时，运行时主动发布状态并让出控制权。  
  **下一版本可能性：中。** 需求明确，但当前没有展示直接实现 PR。

### 6.8 模型固定时继承 fallback chain

- [#151980 — Session model pin 应继承 Agent fallback chain](https://github.com/openclaw/openclaw/issues/151980)  
  当前 session 级模型固定会替换整个候选列表，单模型故障时无法自动回退。  
  **下一版本可能性：中。** 产品语义需要确认：用户显式 pin 是否应绝对禁止 fallback。

### 6.9 Skill Workshop 超大 session 预算策略

- [#150238 — 为 Experience Review 增加 context budget / skip policy](https://github.com/openclaw/openclaw/issues/150238)  
  诉求是为超长前台 session 建立受支持的跳过或裁剪策略，避免学习流程与前台上下文互相干扰。  
  **下一版本可能性：中。** 与 [#138990](https://github.com/openclaw/openclaw/issues/138990) 共同指向“长任务资源治理”路线。

### 6.10 团队侧栏排序与无障碍增强

- [#155039 — 团队侧栏 agent 分区手动排序](https://github.com/openclaw/openclaw/issues/155039)  
- [#154524 — 将聊天消息暴露为 heading 以便屏幕阅读器导航](https://github.com/openclaw/openclaw/issues/154524)  
- [#169428 — usage footer 暴露 auth profile](https://github.com/openclaw/openclaw/issues/169428)  
  这些属于体验增强型需求，技术门槛相对低。  
  **下一版本可能性：中低到中。** 若近期有 UI 资源，团队排序和 `/usage full` 信息补全较容易进入；完整无障碍语义可能需要更大范围测试。

---

## 7. 用户反馈摘要

### 7.1 真实使用场景

- **多代理、多渠道长期运行**
  - 用户同时运行多个 agent，并接入 Telegram、Discord、Lark、WeChat 等渠道。
  - 典型诉求是：一个插件热重载不能影响其他 channel；session 更新不能丢失消息；子代理完成后不能无限重试。
  - 相关反馈集中于 [#152965](https://github.com/openclaw/openclaw/issues/152965)、[#153417](https://github.com/openclaw/openclaw/issues/153417)、[#194403](https://github.com/openclaw/openclaw/issues/194403)。

- **长期在线和跨设备控制**
  - 用户依赖 Control UI、Android、Telegram 等入口远程查看或干预会话。
  - 重启、刷新后应保留最终答案、权限和排队消息；当前仍有 UI 重建和回复重复问题。
  - 相关反馈见 [#123792](https://github.com/openclaw/openclaw/issues/123792)、[#177094](https://github.com/openclaw/openclaw/issues/177094)。

- **本地模型与自托管部署**
  - 用户会在 Windows、macOS、Linux 和 WSL 中安装本地模型、插件和模板。
  - 他们期待 setup 能提前识别上下文不足、工具 profile 限制和安装依赖问题，而不是在第一次真实请求时才失败。
  - 相关 PR：[#200923](https://github.com/openclaw/openclaw/pull/200923)、[#201043](https://github.com/openclaw/openclaw/pull/201043)、[#201049](https://github.com/openclaw/openclaw/pull/201049)。

- **自学习与长期记忆**
  - 用户投入大量数据构建个人记忆系统，关注 recall 是否真正发生、deep dreaming 是否晋级、`MEMORY.md`/`USER.md` 是否被注入。
  - 当前痛点不是单纯“搜索结果少”，而是部分路径会静默失效，用户难以判断功能是否工作。
  - 相关反馈见 [#150635](https://github.com/openclaw/openclaw/issues/150635)、[#153426](https://github.com/openclaw/openclaw/issues/153426)、[#196505](https://github.com/openclaw/openclaw/issues/196505)。

### 7.2 主要不满意点

- **升级不可预测**：Doctor、插件迁移、更新和回滚之间相互依赖，部分用户需要 `update repair` 或人工处理半完成状态。
- **错误不可诊断**：相同错误字符串覆盖多个调用点，缺少 reason code、阶段日志和超时边界。
- **Gateway 运维命令不可靠**：`stop`、`restart` 在 macOS/Windows 上可能误报失败或无法停止服务。
- **静默行为过多**：记忆被排除、模型 fallback 通知外泄、内部 prompt 变成用户消息等现象，会直接破坏用户信任。
- **性能问题显著**：Windows 启动退化、模型目录重复复制、prompt cache 失效，都会影响大规模或多设备部署。

### 7.3 满意与正向信号

- [#192667](https://github.com/openclaw/openclaw/issues/192667) 用户明确确认升级到 **2026.11.5** 后，macOS Settings 性能与暗色主题输入可见性均已恢复。
- [#200470](https://github.com/openclaw/openclaw/pull/200470) 已定位 Claude CLI 最终回复被进度消息覆盖的根因，并提供了针对性修复，说明近期对消息正确性的响应速度较快。
- [#200966](https://github.com/openclaw/openclaw/pull/200966) 开始从模型目录复制、首次聊天授权等底层成本入手优化，表明团队正在处理规模化使用，而不只是表面 UI 问题。
- [#192667](https://github.com/openclaw/openclaw/issues/192667) 等关闭项也显示，部分用户反馈能够在新版本中得到实际验证和闭环。

---

## 8. 待处理积压

### 8.1 长期高热度但仍缺少明确修复的 Issues

- [#164294 — WAL checkpoint 长期阻塞](https://github.com/openclaw/openclaw/issues/164294)  
  自 2026-10-03 创建，42 条评论，仍开放且标记为无新 fix PR。应优先核查进程内 reader 生命周期及 WAL checkpoint 调度。

- [#191944 — macOS Gateway 无法停止](https://github.com/openclaw/openclaw/issues/191944)  
  自 2026-11-03 创建，36 条评论，直接影响运维操作，仍无明确关联修复。

- [#150635 — 短期 recall 容量导致 deep dreaming 永不晋级](https://github.com/openclaw/openclaw/issues/150635)  
  自 2026-09-17 创建，29 条评论，属于核心记忆质量缺陷，仍待产品决策和实现。

- [#178359 — Doctor 修复长时间卡住](https://github.com/openclaw/openclaw/issues/178359)  
  自 2026-10-20 创建，26 条评论；展示 PR 主要修复测试，未见完整运行时修复。

- [#168955 — Windows 启动回归](https://github.com/openclaw/openclaw/issues/168955)  
  自 2026-10-11 创建，22 条评论，已形成稳定复现和性能数据，但缺少明确修复 PR。

- [#126360 — 多代理 AgentSelectionRequiredError](https://github.com/openclaw/openclaw/issues/126360)  
  自 2026-08-19 创建，21 条评论，暴露多个入口未统一使用 `agentId`。

- [#153426 — curated memory roots 被永久排除](https://github.com/openclaw/openclaw/issues/153426)  
  自 2026-09-20 创建，17 条评论，涉及数据/上下文静默丢失及 provenance 安全策略，产品决策和安全评审均未完成。

- [#112638 — session maintenance 无法约束 thread/channel/topic 会话](https://github.com/openclaw/openclaw/issues/112638)  
  自 2026-07-22 创建，11 条评论，属于长期存储膨胀风险。

- [#157255 — lane timeout 后 turn claim 未释放](https://github.com/openclaw/openclaw/issues/157255)  
  自 2026-09-24 创建，11 条评论，可导致会话楔死超过 90 分钟。

### 8.2 值得维护者重点审查的开放 PR

- [#201046 — 记录 2026.11.6 Kova waiver](https://github.com/openclaw/openclaw/pull/201046)  
  发布关键路径，但涉及豁免机制，应审查其授权来源和审计记录。

- [#200470 — 保留 Claude CLI 最终答案](https://github.com/openclaw/openclaw/pull/200470)  
  P1、证明充分、等待维护者审查，优先级高。

- [#201050 — 恢复插件 SDK 类型导出](https://github.com/openclaw/openclaw/pull/201050)  
  直接影响下游插件构建，建议优先确认合并，避免 SDK 回退。

- [#194276 — 停止发送错误的 automation did-not-start notice](https://github.com/openclaw/openclaw/pull/194276)  
  P1、范围较小，适合快速收敛。

- [#200966 — 降低 completion churn 并保留首次聊天授权](https://github.com/openclaw/openclaw/pull/200966)  
  同时涉及性能和权限语义，已有兼容性风险标记，应重点审查。

- [#201009 — 恢复被中断的 source checkout update](https://github.com/openclaw/openclaw/pull/201009)  
  面向仍在使用 Git checkout 的用户，修复后应补充中断恢复和幂等测试。

- [#201039 — 展示 publication 期间 sandbox 被暂停的具体原因](https://github.com/openclaw/openclaw/pull/201039)  
  有助于定位托管沙箱冻结问题，但 PR 涉及安全敏感路径，状态仍为等待作者。

---

## 结论

OpenClaw 今日呈现出 **“高吞吐、高发布强度，但稳定性债务集中暴露”** 的状态。v2026.11.5 已在重启安全会话和安全更新方面迈出关键一步，尤其值得肯定；但 WAL、Doctor、插件迁移和升级回滚之间仍存在相互放大的系统性问题。  
下一阶段最值得关注的不是新增功能数量，而是以下四个收敛目标：

1. 打通 **Doctor → 插件迁移 → 更新完成 → 回滚** 的无死锁恢复链；
2. 解决 **SQLite reader/WAL checkpoint** 生命周期问题；
3. 避免 **插件热重载和多代理路由** 造成消息或连接丢失；
4. 为 **记忆淘汰、provenance、prompt cache** 建立可诊断、可恢复、可测试的行为契约。

若上述高严重度问题在下一版本前获得修复并完成回归验证，项目健康度有望从当前的 **“中高但风险偏高”** 提升至 **“稳定可控”**。

---

## 横向生态对比

# 个人 AI 助手 / 自主智能体开源生态横向分析报告

**分析日期：2026-11-18**  
**数据口径：各仓库过去 24 小时 GitHub Issues、Pull Requests、Releases 公开动态**

---

## 1. 生态全景

个人 AI 助手与自主智能体生态正从“功能扩张期”进入“架构收敛与生产可靠性建设期”：OpenClaw、QwenPaw、Hermes Agent 保持高吞吐开发，NanoBot、OpenHuman 聚焦运行时安全、上下文治理和 WebUI 体验，PicoClaw 则以清理历史修复为主。  
各项目共同暴露出的核心矛盾是：**能力增长快于状态管理、安全边界和资源隔离的成熟度**，其中会话一致性、升级回滚、审批绕过、路径越界、MCP 上下文超限和长任务资源控制最突出。  
生态分工开始清晰：OpenClaw 强调多渠道、多代理和长生命周期运行，Hermes 强在统一 Gateway、桌面端与插件生态，QwenPaw 推进插件化和工具治理，NanoBot 聚焦轻量 Agent 运行时，OpenHuman 偏个人知识与工作流，PicoClaw 更适合嵌入式、终端及轻量设备场景。  
社区关注点已从“能否调用模型”转向“能否可信、持续、可审计地运行”，安全默认值、可诊断错误、幂等恢复和资源预算成为下一阶段竞争关键。

---

## 2. 各项目活跃度对比

| 项目 | 今日 Issues | 今日 PR | Release | 活跃度 | 健康度评估 |
|---|---:|---:|---|---|---|
| **OpenClaw** | 475 次更新：353 活跃、122 关闭 | 500 次更新：259 待合并、241 合并/关闭 | 2 个：`v2026.11.5`、`v2026.10.33` | 极高 | **中高、风险偏高**；发布吞吐强，但 WAL、Doctor、插件迁移与回滚存在系统性耦合 |
| **NanoBot** | 18 次更新：17 活跃、1 关闭 | 10 次更新：6 待合并、4 合并/关闭 | 无 | 中高 | **中等偏活跃，安全风险偏高**；默认工作区隔离、SSRF、依赖和进程资源限制待收敛 |
| **PicoClaw** | 0 | 5 次更新：1 待合并、4 关闭 | 无 | 低至中 | **中等偏稳**；集中合并至少 9 个历史修复，但发布和社区反馈信号较弱 |
| **IronClaw** | 0 | 10 次更新：全部待合并 | 无 | 中高（依赖维护型） | **中等、交付偏慢**；活动几乎全部来自 Dependabot，多项积压约 15–27 天 |
| **LobsterAI** | 1 活跃 | 4 次更新：2 待合并、2 合并/关闭 | 无 | 中等 | **中等偏积极**；服务端配置与 Windows 体验改善明确，但账号风控和长期 PR 积压需关注 |
| **QwenPaw** | 13 次更新：7 活跃、6 关闭 | 37 次更新：22 待合并、15 合并/关闭 | 无 | 高 | **中高**；修复响应快、插件化方向明确，但 MCP 上下文、镜像内存和 PR 队列仍承压 |
| **Hermes Agent** | 50 次更新：48 活跃、2 关闭 | 50 次更新：43 待合并、7 合并/关闭 | 1 个 Canary：`v0.23.2+canary...` | 极高 | **中高、短期稳定性警戒**；Gateway/Desktop 快速演进，但会话一致性和审批边界风险突出 |
| **OpenHuman** | 2 次更新：1 活跃、1 关闭 | 7 次更新：6 待合并、1 关闭 | 无 | 高 | **良好偏积极**；方向清晰，但合并转化率一般，长期功能 PR 仍多 |

### 活跃度解读

- **第一梯队：OpenClaw、Hermes Agent、QwenPaw**  
  OpenClaw 以 Issues/PR 总量遥遥领先；Hermes 和 QwenPaw 同样处于高频开发状态。
- **第二梯队：NanoBot、OpenHuman、IronClaw**  
  NanoBot 和 OpenHuman 属主动功能与工程改造；IronClaw 数量不低，但活动几乎全部是自动依赖 PR。
- **第三梯队：PicoClaw、LobsterAI**  
  两者当前节奏较慢；PicoClaw 以历史修复为主，LobsterAI 以少量体验 PR 和账号申诉为主。

---

## 3. OpenClaw 在生态中的定位

### 3.1 优势

1. **社区与吞吐规模显著领先**  
   OpenClaw 单日更新约 **975 条 Issues/PR 状态**，并同期发布两个版本；Hermes、QwenPaw 的对应规模约为 100 条，NanoBot 为 28 条。  
   这说明 OpenClaw 已形成更大的贡献者、测试者和问题反馈网络，但也意味着更高的合并与治理压力。

2. **最接近全渠道个人智能体控制平面**  
   项目同时覆盖 Gateway、渠道插件、Telegram 自动化、Web UI、Android、Control UI、模板、Skill、插件 SDK 和多代理路由，产品边界明显宽于多数同类项目。

3. **发布与生产运维意识较强**  
   `v2026.11.5` 已开始处理“重启安全会话”和“更新失败回滚”，说明其重点已从单纯功能发布转向长时间运行和生产恢复。

4. **生态扩展能力突出**  
   本地模板、运行时 Skill 审计、插件会话能力审查、Widget 标注、SDK 类型兼容等方向，使 OpenClaw 正向“可扩展智能体操作系统”发展。

### 3.2 技术路线差异

| 项目 | 核心路线 |
|---|---|
| **OpenClaw** | 多渠道 Gateway + 插件化能力 + 多代理 + 长生命周期状态与升级治理 |
| **Hermes Agent** | 统一 Gateway 收敛 CLI、Desktop、Cron、消息平台；插件生态与多租户扩展 |
| **QwenPaw** | 插件化、MCP/本地模型解耦、语义主题、工具与技能治理 |
| **NanoBot** | 轻量 Python Agent 运行时，强调 WebUI、MCP、记忆和可移植性 |
| **OpenHuman** | 个人知识、工作流、记忆导入、连接器与多模态输入 |
| **LobsterAI** | 桌面产品、服务端驱动配置、模型运营标签与办公文件预览 |
| **PicoClaw** | 轻量、终端/嵌入式、Provider 兼容与 Web Launcher |
| **IronClaw** | Rust/Wasm harness、网络与插件基础设施维护 |

### 3.3 社区规模与成熟度判断

OpenClaw 的社区规模约为本组项目的第一梯队，但**活跃度不等同于稳定性领先**。其 WIP 数量极高，数百条 PR 排队，多项 P0/P1 问题尚未明确闭环；相较之下，QwenPaw 的当日修复闭环更集中，OpenHuman 的社区讨论规模较小但方向更聚焦。

> **定位结论：**OpenClaw 是当前生态中功能覆盖最广、社区规模最大、最接近“个人智能体操作平台”的项目，但也是状态一致性、升级路径和插件生命周期最复杂的项目之一。

---

## 4. 共同关注的技术方向

### 4.1 会话与消息一致性

- **OpenClaw**：Gateway 重启后消息、权限和最终回复保留；Claude CLI 进度消息覆盖最终答案；UI 重复渲染。  
- **Hermes Agent**：Desktop transcript 随机重复、乱序、丢失；Profile 切换和 Group Chat 可见性问题。  
- **QwenPaw**：Agent 切换后最后会话不可点击。  
- **LobsterAI**：内部 OpenClaw 主 Agent 会话暴露在用户列表。  
- **NanoBot**：WebUI 重连后仍显示“正在响应”。

**共同诉求：**会话必须有单一权威状态源、幂等消息 ID、确定性排序，以及跨重启/重连恢复契约。

### 4.2 安全边界与审批一致性

- **Hermes Agent**：`hermes config set`、YOLO 模式和 `write_file`/`patch` 存在审批绕过路径。  
- **NanoBot**：默认可访问工作区外文件；相对符号链接与 TOCTOU 可绕过隔离。  
- **OpenClaw**：插件安装开始纳入会话访问能力审查。  
- **PicoClaw**：修复 Provider 响应泄漏内部思考标签。  
- **QwenPaw**：邮件 MCP 草稿保存需求体现“发送前人工审阅”趋势。

**共同诉求：**安全策略必须由底层能力层统一执行，不能因工具、插件或配置入口不同而出现“前后门”；默认拒绝高风险行为，并保留完整审计。

### 4.3 上下文预算、压缩与缓存

- **OpenClaw**：Prompt cache 从不命中；记忆内容被逐日淘汰。  
- **Hermes Agent**：云端模型被 Ollama `num_ctx` 静默限制；压缩后 Desktop 仍显示旧 segment。  
- **QwenPaw**：连续 MCP 调用导致上下文超限；工具 Schema 和环境字段顺序破坏前缀缓存。  
- **OpenHuman**：文档大小采用固定权重估算，改为纳入真实文本读取量。  
- **NanoBot**：索引超过 worker 容量后直接中止。

**共同诉求：**按 Provider、工具和会话动态计算上下文预算；工具输出需可折叠、摘要化和分页；缓存输入必须稳定排序。

### 4.4 长任务与后台资源治理

- **Hermes Agent**：Gateway housekeeping 阻塞 37–88 秒；Kanban worker 被误杀；Gateway 重启可能接管其他实例任务。  
- **OpenClaw**：Doctor 卡住、插件热重载断开渠道、长期 reader 阻塞 WAL。  
- **NanoBot**：Shell 子进程无 CPU/内存限制；MessageBus 队列无背压；长命令占住 Turn。  
- **QwenPaw**：基础 Docker 镜像 glibc arena 导致高内存占用。  
- **OpenHuman**：记忆队列固定串行，首次导入耗时数天。

**共同诉求：**后台任务需要所有权租约、心跳、超时、取消、资源配额和可观测状态，不能仅依赖超时或人工重启。

### 4.5 升级、迁移与回滚

- **OpenClaw**：Doctor、插件更新与 `state-migrated-no-rollback` 形成升级死锁。  
- **QwenPaw**：文档变更导致 CloudPaw ZIP 发布校验失败。  
- **LobsterAI**：长期会话隐藏 PR 可能与当前数据库迁移流程冲突。  
- **IronClaw**：依赖更新积压，尚未转化为实际合并和发布。

**共同诉求：**迁移需具备幂等性、阶段进度、超时、失败恢复、备份与明确回滚路径。

### 4.6 插件生态与治理

- **Hermes Agent**：插件目录快速扩张，多租户方向明确。  
- **QwenPaw**：MCP、本地模型管理、主题能力插件化。  
- **OpenClaw**：SDK 类型导出、会话访问审查、设备上下文传递。  
- **NanoBot**：Agent Plugins、CLI Apps、MCP 和未签名代码安装风险。  
- **PicoClaw**：Provider 兼容与前端本地化。

**共同诉求：**插件需要签名、权限声明、版本固定、能力审查、兼容 API 和可靠的安装来源。

---

## 5. 差异化定位分析

| 项目 | 功能侧重 | 目标用户 | 关键技术特征 |
|---|---|---|---|
| **OpenClaw** | 多渠道、个人助理、多代理、自动化、插件、模板、记忆 | 高级个人用户、团队运营者、二次开发者 | Gateway 统一接入；状态数据库与插件生态；重升级和长生命周期运行 |
| **Hermes Agent** | CLI、Desktop、消息平台、Cron、Kanban、插件、多租户 | 开发者、远程办公用户、平台型部署者 | Gateway 统一架构；Provider/插件体系；桌面会话与任务编排 |
| **QwenPaw** | Hub、插件主题、技能池、MCP、本地模型、多代理 | 二次开发者、模型与插件重度用户 | 大型插件化重构；工具结果治理；语义 UI 扩展 |
| **NanoBot** | Python Agent、Shell/File 工具、MCP、WebUI、记忆 | 开发者、学习者、自托管用户 | 轻量运行时；工作区工具；WebUI 应用目录 |
| **OpenHuman** | 个人记忆、文件处理、语音、工作流、搜索连接器 | 知识管理、办公与移动端个人用户 | 记忆队列、连接器、文档压缩和跨输入体验 |
| **LobsterAI** | 桌面助手、模型选择、账号菜单、Artifacts/CSV | 办公用户和模型服务消费者 | 服务端配置驱动前端；跨平台桌面体验 |
| **PicoClaw** | 终端/轻量设备、Provider 兼容、Web Launcher | 嵌入式、移动端和轻量部署用户 | Go 倾向的简洁实现；终端优先；Provider 兼容修补 |
| **IronClaw** | Rust/Wasm 基础设施、插件与前端工具链 | 贡献者和内部工程团队 | 强依赖自动化；Rust 网络与 Wasm harness；交付节奏偏慢 |

### 关键差异判断

- **OpenClaw 更像“智能体基础设施平台”**：不仅提供助手，还管理渠道、插件、状态、升级和多代理调度。
- **Hermes 更偏“统一工作台与运行时”**：Desktop、CLI、消息平台和后台任务向 Gateway 收拢。
- **QwenPaw 更偏“可扩展能力框架”**：插件主题、MCP 和本地模型解耦是其核心竞争力。
- **NanoBot 更偏“开发者友好的轻量 Agent 核心”**：易读性较好，但安全默认边界需要明显加强。
- **OpenHuman 更偏“个人知识与工作流助手”**：记忆导入、文件可见性和输入体验是核心。
- **PicoClaw 和 IronClaw 更偏基础组件或轻量运行时**：前者重终端和设备兼容，后者重底层工程维护。

---

## 6. 社区热度与成熟度

### 6.1 快速迭代阶段

- **OpenClaw**：极高吞吐、频繁发版、功能面广；但 WAL、升级和插件生命周期债务明显。  
- **Hermes Agent**：架构迁移和功能扩张并行；Canary 活跃，但 43 条待合并 PR 与 Gateway 遗留问题显示交付压力。  
- **QwenPaw**：37 条 PR、13 条 Issue，修复闭环较好；正在推进 MCP 和本地模型插件化。  
- **OpenHuman**：7 个 PR 中 6 个待合并，功能与基础设施并进，尚未形成新发布节点。

### 6.2 质量巩固阶段

- **NanoBot**：重点由功能转向 SSRF、路径隔离、资源限制和生命周期安全；核心安全债务仍多。  
- **LobsterAI**：主要围绕服务端配置、模型标签、Windows 文件兼容和内部会话治理，适合稳定迭代。  
- **PicoClaw**：集中消化历史修复，发布和社区互动信号偏弱。  
- **IronClaw**：几乎完全处于依赖维护阶段，尚未体现功能路线图变化。

### 6.3 社区热度分层

| 层级 | 项目 | 判断 |
|---|---|---|
| **高热度、高压力** | OpenClaw、Hermes Agent、QwenPaw | Issues/PR/功能发布密集，同时积压明显 |
| **中高活跃、高安全压力** | NanoBot | 讨论规模较小，但问题严重度高，安全治理是成败关键 |
| **中高活跃、交付偏慢** | OpenHuman | PR 质量信号较好，合并转化和版本发布不足 |
| **中等活跃、方向稳定** | LobsterAI | 以体验和运营配置为主，账号风控是短期变量 |
| **低互动维护型** | PicoClaw、IronClaw | 一个偏历史修复收敛，一个偏自动依赖升级 |

---

## 7. 值得关注的趋势信号

### 7.1 “Gateway / Runtime”正在成为智能体产品的中心层

OpenClaw 和 Hermes Agent 都把渠道、Desktop、CLI、Cron、子代理和插件统一到 Gateway。其价值不只是架构整洁，而是能够集中解决：

- 会话权威与消息幂等；
- 权限审批；
- 插件生命周期；
- 后台任务所有权；
- 状态持久化与升级恢复。

未来竞争焦点将从“支持多少入口”转向“入口之间是否行为一致”。

### 7.2 安全默认值成为生态可信度分水岭

NanoBot 的默认文件系统访问、符号链接绕过，Hermes 的多路径审批绕过，以及 OpenClaw 的插件会话权限，均说明：

> 只在某个工具或配置入口上增加安全检查，已经不足以形成可信边界。

下一阶段应采用路径级策略、能力令牌、不可绕过的强制审批，以及按工具来源标记的数据流控制。

### 7.3 上下文工程将比单纯扩窗更重要

MCP 连续调用超限、Prompt cache 失效、文档大小估算不准、云端模型被本地配置限制，说明长任务的核心难题已从“模型窗口够不够大”转向：

- 工具结果如何分页、折叠与摘要；
- 历史如何稳定排序和缓存；
- Provider 参数如何隔离；
- 记忆如何淘汰与晋级；
- 压缩后 UI 和运行时状态如何保持一致。

### 7.4 插件化正在从功能扩展转向架构治理

QwenPaw 的 MCP/本地模型插件化、Hermes 的插件目录与多租户、OpenClaw 的能力审查共同表明，插件将成为下一阶段主要扩展方式。但生态需要同步建立：

- 权限声明与最小授权；
- 版本锁定、签名和来源验证；
- 插件升级及回滚；
- 公共 API 兼容策略；
- 插件行为审计；
- 对敏感文件、凭据和网络的隔离。

### 7.5 “可诊断性”正在成为基础质量指标

OpenClaw 的 Doctor 静默卡住、NanoBot 的 SSRF 与错误码缺口、Hermes 的静默上下文缩小、OpenHuman 的认证错误过度清洗，共同表明：

- 相同错误字符串不足以定位根因；
- 仅记录日志不足以证明任务仍存活；
- 安全脱敏不能以移除可行动信息为代价。

建议错误模型统一包含 **reason code、阶段、owner、超时、重试状态和恢复建议**。

### 7.6 社区活动量正在与交付能力分离

OpenClaw、Hermes、QwenPaw 的更新量极高，但大量 PR 仍待审查；IronClaw 的 10 条 PR 全部是积压的 Dependabot 更新。单纯以 Issue/PR 数量衡量健康度会失真，技术决策者应同时跟踪：

- Issue 关闭周期；
- PR 合并率与中位等待时间；
- 重复开放 Issue 数；
- 开放 P0/P1 数量；
- Release 中修复实际交付比例；
- 回归测试与回滚覆盖。

---

## 综合结论

OpenClaw 已成为这一生态中**规模最大、功能覆盖最广、社区吞吐最高**的项目，但当前挑战已从“产品扩张”转为“复杂系统的一致性与可恢复性治理”。Hermes Agent 的统一 Gateway、QwenPaw 的插件化、NanoBot 的运行时安全和 OpenHuman 的个人知识工作流，分别代表了生态的重要演进方向。  
未来一至两个发布周期，行业竞争的关键不再是 Agent 能否调用多少工具，而是能否同时做到：

1. **会话不丢、不重、不乱序；**
2. **权限不可绕过；**
3. **上下文和内存预算可控；**
4. **升级失败可自动恢复；**
5. **插件可追踪、可审计、可回滚；**
6. **后台任务和进程生命周期可靠。**

对开发者和决策者而言，建议将选型重点从功能清单转向 **权限模型、状态一致性、资源隔离、迁移策略和社区交付能力**；对 OpenClaw 本身，则应优先收敛 **Doctor → 插件迁移 → 更新 → 回滚** 恢复链，以及 SQLite/WAL reader 生命周期问题。

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目动态日报

**统计日期：2026-11-18**  
**数据范围：过去 24 小时**  
**仓库：** [HKUDS/nanobot](https://github.com/HKUDS/nanobot)

---

## 一、今日速览

过去 24 小时共更新 **18 条 Issues**（17 条活跃、1 条关闭）和 **10 条 PRs**（6 条待合并、4 条已合并或关闭），日均互动密度较高，项目正处于功能扩展与安全加固并行的活跃阶段。  
今日新增/活跃议题主要集中在 **SSRF 与路径隔离、子进程资源限制、依赖漏洞、WebUI 凭据泄漏和生命周期竞态**，反映当前主要风险已从一般功能迭代转向生产环境安全与稳定性。  
产品侧重点仍围绕 **WebUI 应用目录统一、交互反馈、推理强度、记忆体系和 MCP 隔离**展开，6 条待合并 PR 显示下一阶段可能集中改善 WebUI 信息架构与 Agent 执行可靠性。  
今日没有新版本发布；短期项目健康度可评估为**开发活跃、技术风险较高但治理及时**，建议优先处理高危安全问题并避免未经充分验证的功能堆积。

---

## 二、版本发布

过去 24 小时**无新版本发布**，暂无版本更新、破坏性变更或迁移事项。

---

## 三、项目进展

### 已合并或关闭的重要 PR

#### 1. 集中化 Session 执行所有权

- PR：[ #6699 refactor(agent): centralize session execution ownership](https://github.com/HKUDS/nanobot/pull/6699)
- **状态：已关闭，未合并**
- 主要内容：重构 Session 执行所有权，处理 `/stop` 清理新 inbox、旧任务仍在清理资源时新任务提前启动，以及关停阶段接纳快照外任务等竞态。
- 项目意义：这是 Agent 生命周期正确性的基础性改造，可降低任务停止、替换和关停过程中的状态不一致。
- 评价：虽然 PR 已关闭，但其定位显示维护者正在系统处理并发与资源归属问题，相关方案可能继续以新 PR 形式推进。

#### 2. 修复 WebUI 重连后的完成态同步

- PR：[ #6683 fix(webui): settle completed turns across reconnect paths](https://github.com/HKUDS/nanobot/pull/6683)
- **状态：已关闭，未合并**
- 主要内容：修复 WebUI 在重连路径中错误显示“正在响应”的问题，并完善新旧 Turn 并存时的完成态 fencing。
- 项目意义：直接改善多端连接、断线重连和长时间使用时的会话状态准确性。

#### 3. 统一推理 Shell 的多语言状态文案

- PR：[ #6689 fix(webui): refine reasoning shell activity copy across locales](https://github.com/HKUDS/nanobot/pull/6689)
- **状态：已关闭，未合并**
- 主要内容：统一 10 种语言环境中的工具调用、超时、重试和运行中状态文案。
- 项目意义：降低复杂执行状态的理解成本，提升 WebUI 可用性与国际化一致性。

#### 4. 区分 Agent Plugins、CLI Apps 与 MCP

- PR：[ #6687 fix(webui): separate agent plugins from CLI apps](https://github.com/HKUDS/nanobot/pull/6687)
- **状态：已关闭，未合并**
- 主要内容：在 Apps 目录中分离三类扩展，增加插件详情、启停控制，并建立 CLI 生成插件与已安装应用的关联。
- 项目意义：推动应用管理从混合入口转向更清晰的分层模型。

### 整体推进判断

今日完成的 PR 大多被关闭而非直接合并，因此不能视为已经进入主分支的功能发布。  
但这些 PR 表明项目当前有三项明确推进主线：

1. **Agent Session 生命周期与并发安全**
2. **WebUI 应用管理、状态反馈和国际化**
3. **MCP 启动隔离与工具可用性**

---

## 四、社区热点

> 今日 Issues/PR 的评论数与点赞数普遍较低，以下按评论活跃度和安全影响排序。提供的 Issue 数据未显示单独 PR 关联，因此“已有 fix PR”仅依据当前公开列表判断。

### 1. 并发写入导致工作区文件损坏

- Issue：[ #4798 Concurrent file writes from different sessions not serialized](https://github.com/HKUDS/nanobot/issues/4798)
- 评论：3；状态：Open
- 诉求：`ReadFileTool`、`WriteFileTool`、`EditFileTool` 缺少文件级锁，多 Session 并发写同一文件时可能产生覆盖、交错写入或损坏。
- 背景：这是较早期 Issue，但今日继续活跃，说明问题已从单点 Bug 上升为 Agent 多任务并发场景的基础一致性问题。
- 关联 PR：当前列表中未见明确对应修复 PR。

### 2. 默认未限制在工作区，存在完整文件系统暴露

- Issue：[ #4796 restrict_to_workspace defaults to False](https://github.com/HKUDS/nanobot/issues/4796)
- 评论：2；状态：Open
- 诉求：默认配置下，Agent 可读写工作区外文件，并执行工作区外命令。
- 背景：涉及提示注入、恶意模型输出及宿主数据泄露，是部署边界和默认安全策略问题。
- 关联 PR：当前列表中未见明确对应修复 PR。

### 3. MessageBus 队列无界，可能耗尽内存

- Issue：[ #4780 Unbounded asyncio.Queue in MessageBus](https://github.com/HKUDS/nanobot/issues/4780)
- 评论：2；状态：Open
- 诉求：入站、出站队列均未设置 `maxsize`，也没有背压机制；高频消息或恶意 WebSocket 客户端可造成内存持续增长。
- 背景：这是典型的服务端拒绝服务风险，尤其在多租户或公网暴露场景下影响较大。
- 关联 PR：当前列表中未见明确对应修复 PR。

### 4. Shell 子进程缺少资源上限

- Issue：[ #4797 No resource limits on shell subprocesses](https://github.com/HKUDS/nanobot/issues/4797)
- 评论：2；状态：Open
- 诉求：ExecTool 没有 CPU、内存、进程数或 cgroup 限制，仅依赖超时。
- 背景：Agent 可被诱导执行 fork bomb、无限输出等命令，影响整个宿主机，而不仅是当前任务。
- 关联 PR：[ #6698 Exec tool hardening](https://github.com/HKUDS/nanobot/pull/6698) 已覆盖输出、运行时间和超时相关硬化，但**不代表已完整解决 OS 级资源限制**。

### 5. API Session Lock 字典无界增长

- Issue：[ #4883 API session lock map grows without bounds](https://github.com/HKUDS/nanobot/issues/4883)
- 评论：1；状态：已关闭
- 诉求：API 为外部提供的 `session_id` 永久创建 `asyncio.Lock`，缺少 TTL、容量限制或清理策略。
- 项目意义：该问题已关闭，说明维护者已对长期资源泄漏风险作出处理；但当前数据未显示最终采用何种方案。

### 6. WebUI 应用目录统一

- PR：[ #6700 feat(webui): unify the Apps catalog](https://github.com/HKUDS/nanobot/pull/6700)
- 状态：Open
- 诉求：统一 Tools、Skills、Chat Platforms 等目录的导航和布局，避免 Automations 切换后内容宽度不一致，并改善空 MCP 视图的引导。
- 背景：这是今日最接近产品级路线图的 PR，反映 WebUI 正从功能堆叠转向统一的信息架构。

---

## 五、Bug 与稳定性

### P0 / 严重：需要优先处置

#### 1. 默认暴露完整文件系统

- Issue：[ #4796](https://github.com/HKUDS/nanobot/issues/4796)
- 风险：Agent 默认可访问工作区外的读写和命令执行能力，提示注入或恶意响应可能造成宿主数据泄露或破坏。
- Fix PR：**未发现明确对应 PR**。
- 建议：将工作区限制默认开启，或在启动时明确提示高风险配置并要求显式确认。

#### 2. ExecTool 工作区限制可被相对符号链接绕过

- Issue：[ #4072](https://github.com/HKUDS/nanobot/issues/4072)
- 风险：安全检查只分析命令文本和绝对路径，没有解析工作区内相对符号链接，可能访问工作区外文件。
- Fix PR：**未发现明确对应 PR**。
- 建议：在执行前基于规范化真实路径进行校验，并结合文件描述符级操作降低 TOCTOU 风险。

#### 3. 文件系统工具存在符号链接 TOCTOU 窗口

- Issue：[ #4790](https://github.com/HKUDS/nanobot/issues/4790)
- 风险：路径检查与实际访问分两步完成，攻击者可在两步之间替换符号链接。
- Fix PR：**未发现明确对应 PR**。
- 建议：使用目录文件描述符、`openat` 等方式原子化完成路径约束和访问。

#### 4. CLI Apps 注册表构成未签名代码安装供应链

- Issue：[ #4885](https://github.com/HKUDS/nanobot/issues/4885)
- 风险：远程注册表可控制包名和安装元数据，进而触发 pip/npm/uv/brew 安装。
- Fix PR：**未发现明确对应 PR**。
- 建议：引入签名验证、来源固定、依赖锁定与安装前人工确认。

#### 5. WebUI 开发工具链存在 4 个 Critical、8 个 High 漏洞

- Issue：[ #6697](https://github.com/HKUDS/nanobot/issues/6697)
- 风险：涉及 `happy-dom`、`vitest`、`tinypool`、`vite`、`postcss` 等，尤其 `happy-dom` 与 `tinypool` 涉及 VM 逃逸、原型污染和 RCE。
- Fix PR：**未发现明确对应 PR**。
- 建议：立即执行锁文件升级和兼容性回归；开发依赖即使不进入生产，也应视为开发环境攻击面。

### P1 / 高：重要稳定性与安全风险

#### 6. MessageBus 队列无背压

- Issue：[ #4780](https://github.com/HKUDS/nanobot/issues/4780)
- 影响：消息洪泛可造成内存耗尽和服务不可用。
- Fix PR：**未发现明确对应 PR**。

#### 7. Shell 子进程没有 OS 级资源限制

- Issue：[ #4797](https://github.com/HKUDS/nanobot/issues/4797)
- 影响：单个 Agent 任务可能拖垮宿主机。
- 相关 PR：[ #6698](https://github.com/HKUDS/nanobot/pull/6698)，主要处理长时间运行、输出缓冲和超时缺口，尚未证明覆盖 cgroup、ulimit、CPU/内存限制。

#### 8. 长时间或流式命令可能占住 Agent Turn

- Issue：[ #6698](https://github.com/HKUDS/nanobot/pull/6698)
- 影响：无输出命令可能运行至最大时限；部分路径下累计缓冲输出未设置总上限。
- Fix PR：**已有对应 PR #6698，当前待合并**。

#### 9. KaTeX 原型污染漏洞

- Issue：[ #6696](https://github.com/HKUDS/nanobot/issues/6696)
- 影响：模型输出进入 Markdown 渲染链路，可能利用 KaTeX 信任绕过。
- Fix PR：**未发现明确对应 PR**。

#### 10. `sigstore==4.5.0` 间接引入 4 个 `pyasn1` CVE

- Issue：[ #6695](https://github.com/HKUDS/nanobot/issues/6695)
- 影响：当前依赖解析可能落到 `pyasn1 0.6.4`，建议提高下限至 `>=0.6.5`。
- Fix PR：**未发现明确对应 PR**。

#### 11. 配对码以明文写入 INFO 日志

- Issue：[ #6694](https://github.com/HKUDS/nanobot/issues/6694)
- 影响：可读取 `~/.nanobot/logs/nanobot.log` 的人员可能盗用待配对码。
- Fix PR：**未发现明确对应 PR**。

#### 12. API Token 可通过 URL 查询参数传递

- Issue：[ #6693](https://github.com/HKUDS/nanobot/issues/6693)
- 影响：Token 可能泄漏到访问日志、浏览器历史和 `Referer`。
- Fix PR：**未发现明确对应 PR**。

#### 13. SSRF 黑名单未覆盖特殊地址范围

- Issue：[ #6690](https://github.com/HKUDS/nanobot/issues/6690)
- 影响：多播、保留地址、基准测试网段和文档示例网段未纳入拦截。
- Fix PR：**未发现明确对应 PR**。

#### 14. 畸形域名可触发未处理异常

- Issue：[ #6701 NUL 字节导致 C `getaddrinfo` 截断](https://github.com/HKUDS/nanobot/issues/6701)
- 影响：主机名中的 NUL 可能被底层 C API 截断，产生解析歧义和 SSRF 绕过风险。
- Fix PR：**未发现明确对应 PR**。

- Issue：[ #6691 IDNA UnicodeError 逃逸](https://github.com/HKUDS/nanobot/issues/6691)
- 影响：空标签、超长标签等非法域名可能直接抛出 `UnicodeError`。
- Fix PR：**未发现明确对应 PR**。

### P2 / 中：健壮性与体验问题

#### 15. 配置文件超大整数导致原始异常逃逸

- Issue：[ #6692](https://github.com/HKUDS/nanobot/issues/6692)
- 影响：超过 4300 位的 JSON 整数会触发 Python 转换限制，且未统一包装为 `ConfigLoadError`。
- Fix PR：**未发现明确对应 PR**。

#### 16. 并发写入未串行化

- Issue：[ #4798](https://github.com/HKUDS/nanobot/issues/4798)
- 影响：多 Session 同时编辑同一文件时可能造成内容损坏。
- Fix PR：**未发现明确对应 PR**。

---

## 六、功能请求与路线图信号

### 1. 统一 WebUI Apps 目录

- PR：[ #6700](https://github.com/HKUDS/nanobot/pull/6700)
- 规划信号：Tools、Skills、Chat Platforms 等入口可能被整合为统一目录；Automations 与 MCP 的导航位置也会同步调整。
- 下一版本可能性：**高**。这是用户可见的信息架构升级，且已有完整 PR。

### 2. 更明显的操作反馈与撤销能力

- PR：[ #6702](https://github.com/HKUDS/nanobot/pull/6702)
- 规划信号：引入统一 Toast，用于麦克风、附件、归档、删除等操作反馈，并为误操作提供撤销入口。
- 下一版本可能性：**高**。属于成熟 WebUI 产品中低风险、高收益的体验增强。

### 3. Session 级推理强度选择

- PR：[ #6441](https://github.com/HKUDS/nanobot/pull/6441)
- 规划信号：允许用户在当前会话为下一条消息选择推理强度，无需修改共享预设，也不影响已经运行的任务。
- 下一版本可能性：**中高**。需求明确，但 PR 自 2026-10-24 起仍开放，可能涉及交互和状态同步复杂度。

### 4. 渐进式 Wiki 与 Dream 记忆体系

- PR：[ #4477](https://github.com/HKUDS/nanobot/pull/4477)
- 规划信号：`SOUL.md`、`USER.md` 和 `memory/MEMORY.md` 常驻，详细知识迁移至 `memory/wiki/`，按需读取；Dream 负责维护事实和历史整理。
- 下一版本可能性：**中等**。属于架构级变化，涉及记忆质量、上下文成本、检索准确性和迁移策略，合并前仍需充分验证。

### 5. MCP 服务启动与重试隔离

- PR：[ #6680](https://github.com/HKUDS/nanobot/pull/6680)
- 规划信号：MCP 启动超过 10 秒时提示慢启动，超过 60 秒取消未完成启动；健康服务不再被慢服务阻塞。
- 下一版本可能性：**高**。直接改善聊天响应性和 MCP 可用性，但当前 PR 标记冲突，合并前需解决冲突。

### 6. Goal 在终止性失败后自动阻断

- PR：[ #6688](https://github.com/HKUDS/nanobot/pull/6688)
- 规划信号：输出上限恢复、连续空响应或终止性执行失败后，不再让 Goal 保持活跃；拒答和截断响应不再被误判成功。
- 下一版本可能性：**中高**。属于 Agent 生命周期正确性的重要修复。

### 综合判断

下一版本最可能呈现以下组合：

- WebUI 应用目录与反馈机制统一
- MCP 启动隔离
- Goal/Session 生命周期修复
- 部分依赖升级与 WebUI 安全补丁

而文件锁、工作区隔离、SSRF 和进程资源限制等高风险问题，**尚未看到明确的落地 PR**，暂不应计入下一版本已确定范围。

---

## 七、用户反馈摘要

### 真实使用痛点

1. **多会话并行编辑不可靠**  
   用户希望多个 Agent Session 同时工作时，不应破坏共享工作区文件。当前缺少文件级同步机制。  
   来源：[ #4798](https://github.com/HKUDS/nanobot/issues/4798)

2. **Agent 边界不够可信**  
   即使配置了工作区限制，符号链接仍可能绕过隔离；默认配置甚至允许访问整个文件系统。用户需要明确、可验证的安全边界。  
   来源：[ #4796](https://github.com/HKUDS/nanobot/issues/4796)、[#4072](https://github.com/HKUDS/nanobot/issues/4072)、[#4790](https://github.com/HKUDS/nanobot/issues/4790)

3. **长任务容易占住会话**  
   用户关注无输出、流式输出和长时间运行命令是否能够及时释放 Agent Turn，而不只是等待最终超时。  
   来源：[ #6698](https://github.com/HKUDS/nanobot/issues/6698)

4. **网络访问需要更严格过滤**  
   用户希望恶意或畸形 URL、保留地址、测试网段和含控制字符的域名无法绕过网络限制。  
   来源：[ #6690](https://github.com/HKUDS/nanobot/issues/6690)、[#6701](https://github.com/HKUDS/nanobot/issues/6701)、[#6691](https://github.com/HKUDS/nanobot/issues/6691)

5. **WebUI 扩展管理仍然分散**  
   Tools、Skills、Chat Platforms、CLI Apps、Agent Plugins 和 MCP 的入口和语义不够统一，增加理解和操作成本。  
   来源：[ #6700](https://github.com/HKUDS/nanobot/pull/6700)、[#6687](https://github.com/HKUDS/nanobot/pull/6687)

6. **失败反馈与状态展示容易产生误解**  
   用户可能错过一次性错误提示；重连后还会看到“仍在响应”的过期状态。  
   来源：[ #6702](https://github.com/HKUDS/nanobot/pull/6702)、[#6683](https://github.com/HKUDS/nanobot/pull/6683)

### 满意度信号

- 今日没有新版本发布，也缺少大量点赞数据，暂不能形成强正向满意度判断。
- PR 中针对工具目录、Toast、推理强度、MCP 隔离和 WebUI 生命周期的改进，反映核心用户更关注**可控性、响应速度和任务状态准确性**，而非单纯增加入口。
- 今日 Issue 以安全报告为主，说明社区已开始主动进行威胁建模和边界测试，这对项目长期质量是积极信号，但也会显著增加维护压力。

---

## 八、待处理积压

### 长期未解决且影响重大的 Issues

1. [#4072 ExecTool 可通过相对符号链接绕过工作区限制](https://github.com/HKUDS/nanobot/issues/4072)  
   自 2026-05-29 起未关闭，属于长期安全债务。

2. [#4790 文件系统工具符号链接 TOCTOU](https://github.com/HKUDS/nanobot/issues/4790)  
   自 2026-07-06 起未关闭，涉及底层访问模型，需架构性修复。

3. [#4796 默认暴露完整文件系统](https://github.com/HKUDS/nanobot/issues/4796)  
   自 2026-07-06 起未关闭，默认配置风险高。

4. [#4780 MessageBus 无界队列](https://github.com/HKUDS/nanobot/issues/4780)  
   自 2026-07-06 起未关闭，公网部署下可直接影响可用性。

5. [#4797 Shell 子进程无资源限制](https://github.com/HKUDS/nanobot/issues/4797)  
   自 2026-07-06 起未关闭，宿主级隔离问题尚未解决。

6. [#4798 并发文件写入未串行化](https://github.com/HKUDS/nanobot/issues/4798)  
   自 2026-07-06 起未关闭，直接影响多 Agent 场景的数据完整性。

7. [#4885 CLI Apps 未签名代码安装供应链](https://github.com/HKUDS/nanobot/issues/4885)  
   自 2026-07-11 起未关闭，涉及供应链信任模型，应明确风险接受标准或修复路线。

### 长期开放的 PR

1. [#4477 渐进式 Wiki 与 Dream 记忆体系](https://github.com/HKUDS/nanobot/pull/4477)  
   自 2026-06-23 起开放，架构改动较大，需要明确验收标准与分阶段计划。

2. [#6441 Session 级推理强度](https://github.com/HKUDS/nanobot/pull/6441)  
   自 2026-10-24 起开放，建议维护者补充当前阻塞点、测试状态和目标版本。

3. [#6680 MCP 启动与重试隔离](https://github.com/HKUDS/nanobot/pull/6680)  
   当前存在冲突，若要进入近期版本，应优先完成冲突解决和 MCP 故障注入测试。

### 维护建议

- **立即建立安全 Issue 优先级台账**，将工作区隔离、SSRF、依赖漏洞、Token 泄漏和 CLI Apps 供应链列为发布阻断项或明确豁免。
- 为 [#4798](https://github.com/HKUDS/nanobot/issues/4798)、[#6698](https://github.com/HKUDS/nanobot/pull/6698)、[#6688](https://github.com/HKUDS/nanobot/pull/6688) 等长期问题明确负责人和目标版本。
- 对长期开放 PR 补充维护者评论，至少说明**未合并原因、剩余风险、测试结论和下一步**。
- 在下一次发布前完成依赖审计回归，尤其是 [`pyasn1`](https://github.com/HKUDS/nanobot/issues/6695)、KaTeX 和 WebUI 开发工具链。

---

## 项目健康度结论

**综合健康度：中等偏活跃，但安全风险偏高。**

- **活跃度：高**——24 小时内 28 条 Issue/PR 更新，PR 覆盖 WebUI、Agent、MCP、记忆和安全多个方向。
- **交付效率：一般**——今日 10 条 PR 中 6 条待合并、4 条关闭，未见新版本，说明功能产出尚未形成稳定发布节奏。
- **安全态势：需警惕**——多项默认安全边界、路径隔离、SSRF、依赖和供应链问题仍处于开放状态。
- **工程方向：明确**——项目正从“多功能并行”转向更统一的 WebUI 信息架构、更可靠的 Session 生命周期和更严格的运行时边界。

**未来一个发布周期的关键判断指标：**高危安全项是否出现明确 Fix PR、MCP/WebUI PR 能否顺利合并，以及是否发布一个包含依赖升级和运行时硬化措施的新版本。

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目动态日报

**统计日期：2026-11-18**  
**数据范围：过去 24 小时**  
**项目地址：[sipeed/picoclaw](https://github.com/sipeed/picoclaw)**

## 1. 今日速览

过去 24 小时项目共有 **5 条 PR 状态更新**，其中 **1 条仍待合并、4 条已关闭**，未出现新的 Issue 更新，也未发布新版本。  
今日主要变化是内部推理内容泄漏修复获得关闭，以及多批历史修复 PR 被合并整合，体现出项目正在集中消化存量修复。唯一活跃 PR 为法语 Web UI 本地化，属于低风险的功能扩展，但已被标记为 `stale`，需维护者重新确认维护意愿。  
由于数据未提供评论、点赞和审查明细，无法准确衡量社区讨论热度；从更新结构看，项目当前呈现出 **“存量维护推进、讨论热度偏低、新功能响应有限”** 的状态。整体健康度评估为 **中等偏稳**：修复活动持续，但缺少版本发布、Issue 闭环和新增社区互动信号。

---

## 3. 项目进展

### 3.1 修复 OpenAI 兼容接口中的思考标签泄漏

- **PR： [#1450 — fix: strip thinking tags from OpenAI-compatible provider responses](https://github.com/sipeed/picoclaw/pull/1450)**
- **状态：已关闭**
- **作者：** @treepudding
- **更新日期：** 2026-11-17
- **标签：** `bug`、`provider`、`agent`、`go`

该 PR 针对 OpenAI 兼容 Provider 返回内容中残留的 `thinking/reasoning` 标签进行清理，避免内部推理文本直接暴露给终端用户，并关联修复 **Issue #1235**。这属于代理输出链路和供应商兼容层的稳定性修复，可降低内部推理泄漏、响应格式污染及潜在隐私风险。

> 数据只确认 PR 已关闭，未明确其是否以合并方式完成；结合摘要及关联修复信息，可判断对应修复已获得项目处理，但正式发布仍需等待后续版本。

### 3.2 集中合并历史修复 PR

- **PR： [#1555 — fix: merge PR #1390 #1389 #1383 #1381](https://github.com/sipeed/picoclaw/pull/1555)**
- **状态：已关闭**
- **作者：** @xuwei-xy
- **更新日期：** 2026-11-17

该 PR 将 #1390、#1389、#1383、#1381 四项历史修复集中整合，反映维护者正在通过批量合并方式压缩长期积压。由于当前数据未列出这四项 PR 的具体改动，无法进一步判断其覆盖 Provider、Agent、工具调用还是其他模块。

- **PR： [#1546 — fix: merge PR #1480 #1479 #1478 #1473 #1467](https://github.com/sipeed/picoclaw/pull/1546)**
- **状态：已关闭**
- **作者：** @xuwei-xy
- **更新日期：** 2026-11-17

该 PR 集中合并 #1480、#1479、#1478、#1473、#1467 五项历史修复。与 #1555 合计处理了 **9 个下游修复 PR**，是今日最明确的维护产出，有助于减少历史分支分散和合并冲突，但也显示此前存在较明显的修复积压。

### 3.3 今日整体推进程度

- 共处理或关闭 **4 个 PR 条目**。
- 其中 **2 个为批量合并入口**，实际覆盖至少 **9 个历史修复 PR**。
- **1 个针对可见输出和内部推理泄漏的专项修复**。
- **1 个平台兼容相关修复**已进入关闭状态。
- **1 个新增功能 PR 仍在等待处理**。

项目在存量缺陷收敛方面有实质推进，但尚未形成可观测的版本发布闭环，用户何时能够稳定获取这些修复仍不明确。

---

## 4. 社区热点

### 4.1 法语 Web UI 本地化

- **PR： [#3467 — feat(web): add French UI locale](https://github.com/sipeed/picoclaw/pull/3467)**
- **状态：** 开放、标记为 `stale`
- **作者：** @slashr512
- **创建时间：** 2026-11-10
- **最近更新：** 2026-11-17

该 PR 为 PicoClaw Web Launcher 增加完整法语界面，包括：

- 新增完整法语翻译文件；
- 注册 i18next 语言资源；
- 接入 dayjs 法语区域设置；
- 在登录、初始化和仪表盘等页面的语言菜单中加入“Français”。

这是今日唯一仍开放的 PR，也是唯一明确体现新增用户需求的功能项。其背后诉求是扩大法语用户的使用门槛，降低非英语社区的上手成本。

不过，该 PR 当前为 `stale`，且数据中未显示评论、点赞或审查反馈。若维护者近期未复核，其进入下一版本的可能性存在不确定性；建议维护者确认代码冲突、翻译完整性及是否保留该贡献。

### 4.2 批量历史修复合并

- **PR： [#1555](https://github.com/sipeed/picoclaw/pull/1555)**
- **PR： [#1546](https://github.com/sipeed/picoclaw/pull/1546)**

这两项批量合并 PR 是今日最集中的维护活动，但当前没有评论或反应数据支持“讨论最活跃”的判断。其热点属性主要来自 **被处理的 PR 数量和历史积压影响范围**，而不是社区互动热度。

---

## 5. Bug 与稳定性

### 严重级别：中高

#### OpenAI 兼容 Provider 输出泄漏内部思考内容

- **相关 PR： [#1450](https://github.com/sipeed/picoclaw/pull/1450)**
- **关联 Issue： [#1235](https://github.com/sipeed/picoclaw/issues/1235)**
- **状态：已有专项 fix PR，PR 已关闭**
- **影响范围：** OpenAI 兼容 Provider、Agent 输出链路、最终用户可见内容

该问题可能导致模型的内部推理文本直接出现在助手回复中，影响：

- 输出格式的可读性和一致性；
- 内部提示或推理内容的安全边界；
- 对话日志及下游应用对响应内容的解析；
- 部分部署场景下的隐私与合规预期。

从风险性质看，它不是核心服务不可用类故障，但涉及内容暴露和跨 Provider 兼容性，因此优先级应高于普通文案类缺陷。

### 严重级别：中

#### NVIDIA 模型 ID 在 Termux 环境下的兼容性修复

- **PR： [#3455 — Fix/nvidia model id termux shell](https://github.com/sipeed/picoclaw/pull/3455)**
- **状态：已关闭**
- **创建时间：** 2026-11-01
- **更新日期：** 2026-11-17
- **标签：** `stale`

该 PR 指向 NVIDIA 模型 ID 在 Termux/Shell 环境中的兼容问题，可能影响 Android Termux 用户连接 NVIDIA 模型服务时的模型识别或命令执行。当前缺少正文细节，无法确认具体复现条件、影响版本及关闭原因。

**修复状态：** PR 已关闭，数据中没有明确说明是合并还是拒绝；需要查看 PR 时间线和提交记录确认最终处置。

### 批量修复合入带来的稳定性收益

- **PR： [#1555](https://github.com/sipeed/picoclaw/pull/1555)**
- **PR： [#1546](https://github.com/sipeed/picoclaw/pull/1546)**

两项批量合并至少覆盖 9 个历史修复。由于未提供对应子 PR 的标题和变更明细，无法按严重程度准确分类，也无法确认是否包含崩溃、数据损坏或安全修复。可以确认的是，存量修复正在被集中纳入主线，项目整体缺陷收敛速度有所提升。

### 今日 Bug 汇总

| 问题 | 严重度 | 是否有 fix PR | 当前状态 |
|---|---:|---|---|
| OpenAI 兼容响应泄漏思考/推理标签 | 中高 | 是，[#1450](https://github.com/sipeed/picoclaw/pull/1450) | PR 已关闭，关联 [#1235](https://github.com/sipeed/picoclaw/issues/1235) |
| NVIDIA 模型 ID 在 Termux Shell 下异常 | 中 | 是，[#3455](https://github.com/sipeed/picoclaw/pull/3455) | PR 已关闭，需确认是否合并 |
| 至少 9 个历史修复的批量整合 | 未评估 | 是，[#1555](https://github.com/sipeed/picoclaw/pull/1555)、[#1546](https://github.com/sipeed/picoclaw/pull/1546) | 已关闭处理，细节待核查 |

---

## 6. 功能请求与路线图信号

### 6.1 Web 前端法语本地化

- **PR： [#3467](https://github.com/sipeed/picoclaw/pull/3467)**
- **方向：** Web UI 国际化
- **当前状态：** 开放且标记为 `stale`

该 PR 是当前最明确的下一版本候选信号。其改动边界较清晰，主要涉及语言资源、日期区域设置和语言菜单，不依赖核心协议或 Provider 架构。如果维护者确认代码仍可基于最新主分支构建，重新审查并合并的难度相对较低。

**纳入下一版本的判断：中等可能。**  
主要制约不是技术风险，而是 PR 的 `stale` 状态及缺少近期维护者反馈。建议维护者优先恢复审查，并明确是否需要拆分提交、补充翻译测试或更新快照。

### 6.2 存量修复优先于新增功能

今日没有任何全新 Issue，且主要活动集中在历史 PR 合并。这表明近期路线更偏向：

1. 清理和合并已积累的修复；
2. 改善 Provider 与终端环境兼容性；
3. 在修复闭环后再推进前端国际化等增量功能。

若下一阶段继续以稳定性为主，法语本地化可能在冲突处理后进入版本；核心 Agent 能力方面，今日没有足够数据证明已有新的路线图信号。

---

## 7. 用户反馈摘要

过去 24 小时 **没有新的 Issue 更新**，现有数据也没有提供评论正文，因此无法从 Issue 评论中提炼新增的真实用户反馈。根据 PR 内容，可以归纳出以下间接需求：

- **Provider 输出一致性需求：** 用户需要助手回复中不出现内部思考标签，尤其在使用 OpenAI 兼容接口时，输出边界必须清晰，见 [#1450](https://github.com/sipeed/picoclaw/pull/1450) 和 [#1235](https://github.com/sipeed/picoclaw/issues/1235)。
- **移动端与多环境兼容需求：** Termux 用户需要 NVIDIA 模型服务在 Android Shell 环境下被正确识别，见 [#3455](https://github.com/sipeed/picoclaw/pull/3455)。
- **多语言可访问性需求：** 法语用户需要完整而非残缺的 Web 界面本地化，包括登录、初始化、仪表盘及日期格式，见 [#3467](https://github.com/sipeed/picoclaw/pull/3467)。
- **维护响应层面的观察：** #3467 与 #3455 均带有 `stale` 标记，说明部分贡献可能因长期未审查而失去及时合并机会。

由于没有 Issue 评论、点赞或满意度表态，本节只能反映功能诉求，不能代表整体用户满意度。

---

## 8. 待处理积压

### 8.1 法语本地化 PR 等待维护者复核

- **PR： [#3467](https://github.com/sipeed/picoclaw/pull/3467)**
- **开放天数：** 自 2026-11-10 创建，至统计日已约 8 天
- **状态：** `stale`，无可见评论和反应数据

这是当前最需要维护者明确处理的事项。建议确认：

- 是否仍计划支持法语；
- 与当前 i18n 结构是否存在冲突；
- 翻译文件是否覆盖全部界面键；
- 是否需要补充语言切换、日期格式及回归测试。

### 8.2 Termux/NVIDIA 修复需要明确关闭结论

- **PR： [#3455](https://github.com/sipeed/picoclaw/pull/3455)**
- **创建时间：** 2026-11-01
- **状态：** 已关闭且标记为 `stale`

虽然该 PR 已关闭，但缺少合并或拒绝依据。若问题实际已由其他 PR 覆盖，建议在相关 Issue 或 PR 中补充交叉引用；若修复未进入主线，则应恢复处理并记录原因，以免同类 Termux 兼容问题再次出现。

### 8.3 批量合并掩盖了子 PR 的处置透明度

- **PR： [#1555](https://github.com/sipeed/picoclaw/pull/1555)**
- **PR： [#1546](https://github.com/sipeed/picoclaw/pull/1546)**

这两项 PR 一次性覆盖至少 9 个历史修复，有利于减少积压，但外部日报和用户仅凭摘要无法判断每个子修复的内容、测试情况及实际主线状态。建议维护者：

- 保留清晰的子 PR 关联；
- 在合并说明中列出主要修复类别；
- 对涉及 Provider、Agent 或安全边界的修复标注回归测试结果；
- 在下一次 Release 中同步列出对应变更。

---

## 结论

今日 PicoClaw 的核心动态是 **集中收敛历史修复并改善输出及环境兼容性**，其中 OpenAI 兼容 Provider 的思考标签泄漏修复最值得关注。唯一开放功能项为法语 Web UI 本地化，但已处于 `stale` 状态。  
项目没有新 Issue 和新版本发布，版本交付节奏偏慢；维护活动仍在继续，但社区互动与需求反馈信号较弱。综合判断，项目健康度为 **中等偏稳**：技术维护未停滞，存量问题得到处理；下一步应优先确认待合并 PR、补齐版本发布说明，并提高历史修复合入过程的可追踪性。

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw 项目动态日报

**日期：2026-11-18**  
**数据范围：过去 24 小时**  
**仓库：[nearai/ironclaw](https://github.com/nearai/ironclaw)**

## 今日速览

- 过去 24 小时项目共有 **10 个 PR 更新、0 个 Issue 更新**，且全部 PR 仍处于开放待合并状态。
- 本次活动全部由 **Dependabot 自动化依赖升级**构成，覆盖 Rust、JavaScript、GitHub Actions 与 Python 测试依赖，暂无人工功能开发、缺陷修复或路线图调整信号。
- 今日没有 PR 被合并或关闭，也没有发布新版本，因此项目功能面和发行版本在数据窗口内**没有发生实质变化**。
- 整体活跃度可评为**中等偏高但偏依赖维护型**：PR 更新数量较多，但缺少 Issue 互动、人工评审和集成进展，且部分 PR 已创建约 20–26 天，反映出依赖升级积压和合并吞吐不足。
- 未发现今日新增的崩溃、回归或安全事件报告；不过当前 Issue 数据为空，无法据此判断社区反馈质量或问题响应速度。

---

## 项目进展

### 今日合并／关闭的重要 PR

**无。**过去 24 小时更新的 10 个 PR 均保持开放状态，没有 PR 被合并或关闭，因此无法确认任何依赖升级已经进入主分支。

按依赖方向归纳：

1. **Rust 网络与运行时依赖**
   - [#8166：rustls 0.23.43 → 0.23.46（harness latency runner）](https://github.com/nearai/ironclaw/pull/8166)
   - [#8165：rustls 0.23.43 → 0.23.46](https://github.com/nearai/ironclaw/pull/8165)
   - [#8162：wasmtime 47.0.3 → 48.0.7（harness latency runner）](https://github.com/nearai/ironclaw/pull/8162)

   这些更新面向 Rust TLS 栈与 Wasm 运行时，可能影响握手行为、密钥交换提示保存时机、执行兼容性及延迟测试结果。由于 `wasmtime` 跨越大版本，应重点验证运行时行为兼容性。

2. **前端构建与测试依赖**
   - [#8154：Vite 8.1.3 → 8.1.6](https://github.com/nearai/ironclaw/pull/8154)
   - [#8158：Storybook 10.5.7 → 10.6.2](https://github.com/nearai/ironclaw/pull/8158)
   - [#8156：@storybook/addon-vitest 10.5.7 → 10.6.2](https://github.com/nearai/ironclaw/pull/8156)

   更新集中于前端开发工具链，主要价值是修复构建或测试问题、保持 Storybook/Vite 兼容，并为后续 UI 开发提供更稳定的基础设施。

3. **前端安全净化依赖**
   - [#8155：DOMPurify 3.4.12 → 3.4.17](https://github.com/nearai/ironclaw/pull/8155)

   DOMPurify 用于清理 HTML，是 Web UI 内容安全链路的重要依赖。该 PR 已创建约 26 天仍未合并，存在安全补丁或兼容性修复滞后的风险。

4. **文档视频工程依赖**
   - [#8167：zod 4.6.7、@remotion/cli 与 @remotion/tailwind-v4](https://github.com/nearai/ironclaw/pull/8167)

   涉及架构视频制作流程，影响范围相对独立，但可能与文档视频生成及 Tailwind v4 样式兼容性有关。

5. **CI／GitHub Actions 依赖**
   - [#8159：GitHub Actions 依赖组更新，共 11 项](https://github.com/nearai/ironclaw/pull/8159)

   包含 `anthropics/claude-code-action` 从 `1.0.183` 升至 `1.0.259`，以及 `actions/setup-python` 等组件更新。该变更影响自动化执行环境，应重点检查 Action 参数、权限和输出行为是否保持兼容。

6. **端到端测试证书依赖**
   - [#8157：certifi 2026.7.22 → 2026.10.19](https://github.com/nearai/ironclaw/pull/8157)

   更新测试环境的 CA 根证书集合，有利于修复证书过期、测试环境握手失败等问题，但也可能暴露依赖特定旧根证书的测试桩。

### 推进程度评估

- **功能推进：低。**没有新增用户功能或已合并的架构性变更。
- **维护推进：中等。**依赖覆盖范围较广，包括安全、TLS、Wasm、前端工具链、CI 和测试证书。
- **交付推进：偏低。**10 个 PR 全部待合并，部分已积压超过三周；更新量未能转化为合并吞吐。

---

## 社区热点

### 最活跃 PR

根据当前提供的点赞与评论数据，10 个 PR 均显示：

- 评论数：**未提供／无可见评论**
- 点赞数：**0**
- 状态：**开放**

因此，今日没有可识别的“评论最多”或“反应最多”条目。热度更集中于最近更新的以下 PR：

- [#8167：更新 zod、@remotion/cli 与 @remotion/tailwind-v4](https://github.com/nearai/ironclaw/pull/8167)  
  **更新于 2026-11-17**，体现文档视频工程依赖维护需求，但缺少社区反馈信号。
- [#8166：更新 harness 中的 rustls](https://github.com/nearai/ironclaw/pull/8166)  
  **更新于 2026-11-17**，涉及网络握手和密钥交换提示保存时机，可能受到延迟测试与 TLS 稳定性关注。
- [#8165：更新 rustls](https://github.com/nearai/ironclaw/pull/8165)  
  **更新于 2026-11-17**，与 TLS 安全补丁及兼容性相关。
- [#8162：更新 Wasmtime 至 48.0.7](https://github.com/nearai/ironclaw/pull/8162)  
  **更新于 2026-11-17**，涉及执行运行时大版本升级，潜在回归影响值得关注。
- [#8159：更新 11 项 GitHub Actions](https://github.com/nearai/ironclaw/pull/8159)  
  **更新于 2026-11-17**，包含 Claude Code Action 与 Python 环境初始化等 CI 基础组件。

### 背后的诉求

这些 PR 反映的核心诉求是：

1. 保持依赖安全更新和上游兼容；
2. 降低 TLS、证书和自动化流水线中的潜在故障；
3. 保持 Web UI 构建、Storybook 与 Vitest 工具链可用；
4. 改善 harness 中 Wasm 执行和延迟测试环境的稳定性。

不过，当前没有可见评论或点赞，尚不能确认社区是否实际参与讨论，也不能判断维护者对这些升级的风险判断。

---

## Bug 与稳定性

### 今日明确报告的问题

**无明确新增 Bug、崩溃或回归报告。**过去 24 小时没有 Issue 更新，也没有 PR 摘要直接表明修复了用户可见故障。

### 需要关注但尚未确认的稳定性风险

1. **中等风险：Wasmtime 47 → 48 大版本升级**
   - PR：[#8162](https://github.com/nearai/ironclaw/pull/8162)
   - 潜在影响：运行时 API 变化、资源限制行为变化、编译目标兼容性变化，以及延迟基准结果波动。
   - Fix PR：**升级 PR 本身即为候选修复，但尚未合并**。
   - 建议：合并前运行完整 harness 延迟测试，并验证 WASM 模块加载、异常处理和资源隔离。

2. **中等风险：rustls 0.23.43 → 0.23.46**
   - PRs：[#8165](https://github.com/nearai/ironclaw/pull/8165)、[#8166](https://github.com/nearai/ironclaw/pull/8166)
   - 变更涉及“握手确认前延迟保存 KX hint”，可能影响会话恢复、握手时序或连接复用。
   - Fix PR：**已有候选升级 PR，尚未合并**。
   - 建议：覆盖 TLS 握手失败、连接重建、代理链路及 harness 网络测试。

3. **低至中等风险：DOMPurify 补丁长期未合并**
   - PR：[#8155](https://github.com/nearai/ironclaw/pull/8155)
   - 潜在影响：HTML 清理行为变化可能造成内容渲染回归；若旧版本包含安全修复，也会扩大 XSS 暴露窗口。
   - Fix PR：**已有候选升级 PR，尚未合并**。

4. **低至中等风险：CI Action 大批量升级**
   - PR：[#8159](https://github.com/nearai/ironclaw/pull/8159)
   - 潜在影响：Action 输入输出、运行时依赖、权限模型或缓存行为变化，可能导致流水线不稳定。
   - Fix PR：**已有候选升级 PR，尚未合并**。

### 结论

数据中没有已确认且仍在开放的新 Bug；主要风险来自**依赖升级尚未经过合并和回归验证**。风险重点不是已发生故障，而是安全补丁、TLS 行为和运行时兼容性可能继续积压。

---

## 功能请求与路线图信号

### 明确的功能请求

**无。**过去 24 小时没有 Issue 更新，也没有 PR 描述提出新的用户功能需求。

### 由现有 PR 推断的路线图信号

1. **持续强化 Rust harness 与网络基础设施**
   - [#8162](https://github.com/nearai/ironclaw/pull/8162)
   - [#8165](https://github.com/nearai/ironclaw/pull/8165)
   - [#8166](https://github.com/nearai/ironclaw/pull/8166)

   这组更新显示团队仍在维护 Wasm 执行、TLS 和延迟测试基础设施，但更适合被解读为**稳定性与工程维护信号**，而不是明确的新功能承诺。

2. **保持 Web UI 开发测试工具链现代化**
   - [#8154](https://github.com/nearai/ironclaw/pull/8154)
   - [#8156](https://github.com/nearai/ironclaw/pull/8156)
   - [#8158](https://github.com/nearai/ironclaw/pull/8158)

   Vite、Storybook 和 Vitest 的同步升级表明前端基础设施仍在快速演进，有利于后续组件开发和测试能力扩展。

3. **文档与架构视频工具链维护**
   - [#8167](https://github.com/nearai/ironclaw/pull/8167)

   表明架构视频生产流程仍在使用并维护，说明项目可能继续投入技术演示和文档内容生产。

### 下一版本可能性判断

- 由于**没有新版本发布**，也没有功能型 PR，无法确认具体版本范围。
- 依赖升级本身不必然进入下一版本；是否发布通常取决于依赖是否合并、CI 是否通过，以及项目是否安排发布。
- 若维护者优先处理安全与基础依赖，则 DOMPurify、rustls、certifi 和 CI 更新较可能进入下一版本；Wasmtime 大版本升级需视回归测试结果而定。

---

## 用户反馈摘要

过去 24 小时没有 Issue 更新，也没有可见的 PR 评论，因此无法从社区评论中提炼真实用户痛点、使用场景或满意度。

可确认的反馈情况：

- **用户问题反馈：无新增样本。**
- **真实使用场景：未提供。**
- **满意／不满意反馈：无可见数据。**
- **社区参与度：偏低。**10 个 PR 的点赞均为 0，且评论数据未显示。

因此，不宜将“无人提出 Issue”直接解释为用户满意；它也可能反映当前统计窗口过短、Issue 使用率偏低，或数据抓取未覆盖评论内容。

---

## 待处理积压

### 1. DOMPurify 安全与兼容更新已积压约 26 天
- PR：[#8155](https://github.com/nearai/ironclaw/pull/8155)
- 创建：2026-10-23
- 状态：开放
- 关注原因：DOMPurify 位于 Web UI 内容清理链路，长期不合并可能延迟安全修复或引入已修复缺陷。

### 2. Vite 补丁升级已积压约 27 天
- PR：[#8154](https://github.com/nearai/ironclaw/pull/8154)
- 创建：2026-10-22
- 状态：开放
- 关注原因：补丁版本升级通常风险较低，但长期积压会削弱前端构建稳定性并增加后续版本升级冲突。

### 3. Storybook／Vitest 开发依赖升级已积压约 26 天
- PRs：[#8158](https://github.com/nearai/ironclaw/pull/8158)、[#8156](https://github.com/nearai/ironclaw/pull/8156)
- 创建：2026-10-23
- 状态：开放
- 关注原因：两个 Storybook 相关依赖同步升级，叠加积压可能提高后续合并冲突概率。

### 4. certifi 根证书更新已积压约 26 天
- PR：[#8157](https://github.com/nearai/ironclaw/pull/8157)
- 创建：2026-10-23
- 状态：开放
- 关注原因：涉及 CA 根证书变化，可能直接影响端到端测试环境与外部服务的 TLS 验证。

### 5. GitHub Actions 依赖组更新已积压约 23 天
- PR：[#8159](https://github.com/nearai/ironclaw/pull/8159)
- 创建：2026-10-25
- 状态：开放
- 关注原因：包含 11 项 Action 更新和 Claude Code Action 大跨度升级，积压会增加 CI 漂移及批量回归成本。

### 6. Wasmtime 大版本升级已积压约 20 天
- PR：[#8162](https://github.com/nearai/ironclaw/pull/8162)
- 创建：2026-10-29
- 状态：开放
- 关注原因：跨主版本升级，且位于 latency runner 关键路径；应明确测试结果、兼容性结论和回滚方案。

### 7. rustls 补丁升级已积压约 16 天
- PRs：[#8165](https://github.com/nearai/ironclaw/pull/8165)、[#8166](https://github.com/nearai/ironclaw/pull/8166)
- 创建：2026-11-02
- 状态：开放
- 关注原因：涉及安全与握手关键逻辑，应尽快确认 CI、延迟测试及连接恢复测试通过。

### 8. 文档视频依赖升级已积压约 15 天
- PR：[#8167](https://github.com/nearai/ironclaw/pull/8167)
- 创建：2026-11-03
- 状态：开放
- 关注原因：影响范围相对有限，但涉及 Remotion 与 Tailwind v4，建议完成视频构建验证后合并，避免文档流程长期使用旧依赖。

---

## 项目健康度结论

**综合健康度：中等，偏向“维护活跃、交付偏慢”。**

- **积极信号：**过去 24 小时有 10 个 PR 更新，依赖覆盖安全、网络、运行时、前端、CI 和测试等多个关键面；没有新 Issue 风暴或严重故障信号。
- **风险信号：**全部更新停留在开放状态，且多项已积压约三周；没有新版本发布，也没有明确的人工功能推进。
- **核心建议：**
  1. 优先合并 DOMPurify、rustls 等低风险或安全补丁；
  2. 对 Wasmtime 48 和 GitHub Actions 批量升级补充明确的回归验证；
  3. 建立 Dependabot PR 的自动测试、批量评审与过期关闭机制；
  4. 后续日报持续跟踪 Issue 评论、真实用户反馈和 PR 实际合并率，避免仅以 PR 创建量衡量项目活跃度。

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI 项目动态日报

**统计日期：2026-11-18**  
**数据范围：过去 24 小时 GitHub Issues / Pull Requests 更新**  
**项目健康度：中等偏积极，但需关注账号封禁处置与长期 PR 积压**

## 1. 今日速览

过去 24 小时项目共记录 **1 条活跃 Issue、4 条 PR 更新**，其中 **2 条 PR 已关闭/合并，2 条仍待合并**，整体开发活跃度中等。  
已关闭 PR 集中于**账号菜单扩展**和**模型自定义标签展示**，主要改善配置驱动能力与界面信息呈现。  
待合并 PR 分别面向**隐藏内部 Cowork 会话**和**修复 Windows CSV 编码及应用内链接**，对稳定性和使用体验有直接价值。  
社区端出现 **1 起账号被禁用申诉**，暴露自动化签到与账号风控之间可能存在的规则冲突，目前尚无明确处理结果。  
今日无新版本发布；此外，有一项自 2026-04-01 起持续更新的 PR 至今仍未合并，反映出部分改进进入合并队列的周期较长。

---

## 3. 项目进展

### 今日已关闭/合并的重要 PR

#### 1. 账号菜单新增服务端配置的“更多”链接

- **PR**：[ #3111 — feat(account-menu): add server-configured more links](https://github.com/netease-youdao/LobsterAI/pull/3111)
- **状态**：CLOSED
- **涉及模块**：Renderer、Main
- **主要改动**：
  - 在个人账号菜单中加入常驻的“更多”入口；
  - 支持服务端下发 HTTPS 链接；
  - 支持一级分组子菜单；
  - 增加数据预取、缓存及打开菜单时刷新；
  - 增加本地化标签、加载态和空状态展示。
- **推进意义**：  
  将原本可能依赖客户端发版更新的运营入口、服务链接和帮助入口改为服务端配置，可提升运营配置效率与发布灵活性。不过该 PR 已关闭，现有分支中未包含最终合并、替代实现或关闭原因的信息，建议结合仓库提交记录确认成果是否已实际落地。

#### 2. 模型选择器展示服务端自定义标签

- **PR**：[ #3110 — feat(models): show server-configured custom tags in model selector](https://github.com/netease-youdao/LobsterAI/pull/3110)
- **状态**：CLOSED
- **涉及模块**：Renderer
- **主要改动**：
  - 在模型选择器中展示服务端配置的模型自定义标签；
  - 支持可选图标与颜色；
  - 保留现有模型徽标，并将自定义标签排在同一行末尾；
  - 保持成本和状态列对齐；
  - 兼容公开价格数据与需认证的模型响应数据。
- **推进意义**：  
  有助于统一展示模型定位、计费属性、可用状态及运营标签，减少用户理解模型差异的成本。数据来自服务端，也意味着模型运营信息能够更灵活地调整。但该 PR 已关闭，最终是否以其他提交合入需进一步核实。

### 整体进展评估

今日关闭的两项 PR 都围绕**服务端配置驱动 UI**展开：一项优化账号菜单，一项优化模型选择器，说明项目正在加强“后端配置、前端消费”的产品架构。  
不过，根据提供的 PR 状态，“CLOSED”并不必然等同于成果已经进入主干；因此更准确的判断是：**相关功能提案已有明确实现，但最终合入情况需要结合 commit 或 release notes 复核**。

---

## 4. 社区热点

### 账号被禁用并申请解封

- **Issue**：[ #3112 — 申诉：账号被禁用，申请解封（uid 147357）](https://github.com/netease-youdao/LobsterAI/issues/3112)
- **状态**：OPEN
- **互动情况**：1 条评论，0 个点赞
- **热度判断**：**低频但高敏感度**

#### 背景与诉求

用户反馈调用内置模型接口时返回：

- HTTP `403`
- 业务码 `40302`
- `accountAccess.state = DISABLED`
- 提示账号已停止提供服务，需通过官方渠道使用或联系客服

用户说明，其曾在本机使用第三方签到脚本定时调用 LobsterAI 内置模型接口以完成每日签到，并强调：

- 无恶意用途；
- 未商业化；
- 未对外共享账号额度。

用户的核心诉求是**恢复账号及内置模型接口使用权限**，并可能希望官方明确判断第三方自动签到是否违反服务规则。

#### 背后诉求

该 Issue 反映的不只是单个账号问题，也涉及：

1. 账号风控规则透明度不足，用户无法预先判断第三方自动签到是否被允许；
2. 自动化签到工具与服务端风控策略之间可能存在兼容性冲突；
3. 账号禁用后缺少清晰的申诉路径和处理时限；
4. 用户对“本机自动化”与“对外共享/滥用”的边界缺乏明确认知。

#### 建议

维护者应尽快明确：

- 第三方自动签到是否违反服务条款；
- 账号禁用是否与该行为直接相关；
- 解封审核所需材料、处理渠道和预计时效；
- 是否应提供更明确的自动化行为说明或官方签到方案。

---

## 5. Bug 与稳定性

### 高优先级：账号被禁用，内置模型接口不可用

- **Issue**：[ #3112](https://github.com/netease-youdao/LobsterAI/issues/3112)
- **严重程度**：**高**
- **影响范围**：受影响账号的全部内置模型调用
- **现象**：
  - 接口返回 HTTP 403；
  - 错误码 `40302`；
  - 账号访问状态为 `DISABLED`。
- **是否有修复 PR**：**暂无**
- **判断**：  
  这更接近账号权限/风控事件，而非普通客户端缺陷，但会直接导致核心功能不可用。处理重点应是完成人工复核、给出申诉结论，并明确违规边界，避免同类用户继续受影响。

### 中优先级：Windows 下 GBK CSV 中文预览乱码

- **PR**：[ #3109 — fix(artifacts): support CSV encodings and in-app Windows links](https://github.com/netease-youdao/LobsterAI/pull/3109)
- **状态**：OPEN，尚未合并
- **严重程度**：**中**
- **影响范围**：Windows 用户查看 GBK/GB18030 编码 CSV 时出现中文乱码
- **是否有修复 PR**：**有，即 #3109**
- **修复方向**：
  - 严格按 BOM / UTF-8 解码；
  - 必要时尝试 GB18030；
  - 提供自动、UTF-8、GB18030 等编码切换；
  - 预览过程不写回原文件。
- **判断**：  
  该问题有明确复现条件和完整修复方案，但尚待合并。对于依赖中文 CSV 的 Windows 用户，优先级应高于一般界面优化。

### 中低优先级：正文中的本地文件链接被系统错误打开

- **PR**：[ #3109](https://github.com/netease-youdao/LobsterAI/pull/3109)
- **状态**：OPEN，尚未合并
- **严重程度**：**中低**
- **影响范围**：Artifacts 等内容中形如 `C:/.../products.csv` 的链接被交给系统打开程序，而不是留在应用内预览
- **是否有修复 PR**：**有，即 #3109**
- **判断**：  
  修复有助于避免不必要的外部程序启动，并统一应用内工作流。建议与 CSV 编码修复一并进入测试和合并计划。

### 低优先级：内部 OpenClaw 会话暴露在用户会话列表

- **PR**：[ #1181 — fix(cowork): hide OpenClaw main agent sessions from session list](https://github.com/netease-youdao/LobsterAI/pull/1181)
- **状态**：OPEN，尚未合并
- **严重程度**：**低**
- **影响范围**：Cowork 用户会话列表
- **现象**：用于心跳、cron 路由的 OpenClaw 主 Agent 内部会话会出现在用户可见列表中
- **是否有修复 PR**：**有，即 #1181**
- **修复方向**：
  - 为 `cowork_sessions` 增加 `hidden` 字段；
  - 标记主 Agent 内部会话；
  - 从用户会话列表中过滤隐藏记录。
- **判断**：  
  不影响核心任务执行，但会造成用户认知干扰与列表污染。该 PR 自 2026-04-01 创建、持续更新至 2026-11-17，积压时间明显偏长，应确认是否仍与当前数据库迁移流程兼容。

### 今日未发现的信息

提供的数据中未出现：

- 应用崩溃；
- 明确回归测试失败；
- 数据损坏报告；
- 独立的启动失败或核心接口大面积不可用报告。

---

## 6. 功能请求与路线图信号

### 服务端驱动的账号菜单扩展

- **相关 PR**：[ #3111](https://github.com/netease-youdao/LobsterAI/pull/3111)
- **需求信号**：  
  账号菜单中的帮助、官网、运营服务等入口需要可动态配置，并支持分组与本地化。
- **路线图判断**：  
  该方向与现有服务端配置架构一致，具备进入后续版本的可能。其价值主要在运营效率和减少客户端发版频率，但需要补充配置校验、HTTPS 限制、域名白名单及降级策略。
- **不确定性**：PR 已关闭，需确认是已通过其他方式合入、放弃，还是被替代。

### 模型自定义标签、图标和颜色

- **相关 PR**：[ #3110](https://github.com/netease-youdao/LobsterAI/pull/3110)
- **需求信号**：  
  用户需要在模型选择时快速区分模型的推荐属性、供应方、计费特征或可用状态。
- **路线图判断**：  
  这是较成熟的产品体验改进，未来版本或后续模型列表迭代中很可能继续采用。建议确保服务端标签字段具备版本兼容和未知标签安全降级能力。
- **不确定性**：同样需核实 PR 关闭后的最终代码去向。

### Cowork 内部会话隐藏能力

- **相关 PR**：[ #1181](https://github.com/netease-youdao/LobsterAI/pull/1181)
- **需求信号**：  
  用户会话列表应仅展示面向用户的任务会话，内部心跳、调度和系统 Agent 会话应默认隐藏。
- **路线图判断**：  
  需求合理且实现方案清晰，理论上适合近期合入。但 PR 存续时间较长，可能受到数据库 schema、迁移机制或分支冲突影响。
- **不确定性**：不建议直接假定旧 PR 可无风险合并，应先进行 rebase 和迁移回归。

### Windows 表格编码兼容与应用内文件预览

- **相关 PR**：[ #3109](https://github.com/netease-youdao/LobsterAI/pull/3109)
- **需求信号**：  
  Windows 办公场景中的 CSV/TSV 文件预览必须兼容 GBK/GB18030，并正确识别正文中的本地路径链接。
- **路线图判断**：  
  这是明确的跨平台兼容性和稳定性修复，较可能进入近期版本。合入前应覆盖：
  - UTF-8 无 BOM；
  - UTF-8 BOM；
  - GBK；
  - GB18030；
  - UTF-16（若产品声明支持）；
  - 含逗号、引号、换行及大文件的 CSV；
  - Windows 路径大小写、盘符、盘符相对路径与 URL 混淆。
- **不确定性**：PR 尚未合并，尚不能视为已交付。

---

## 7. 用户反馈摘要

### 真实使用场景

- 用户为了避免多账号切换，在本机运行第三方签到脚本，自动调用 LobsterAI 内置模型接口完成每日签到。
- 该用户强调自动化仅用于个人本机签到，没有商业化，也没有向他人共享额度。
- 用户在账号被禁用后，通过 GitHub Issue 提交申诉，说明 GitHub 是其寻求恢复服务的重要渠道。

### 主要痛点

1. **核心功能因账号状态被完全阻断**  
   `DISABLED` 状态下，内置模型接口返回 403，用户无法继续使用主要能力。

2. **规则边界不透明**  
   用户无法判断第三方脚本完成本机签到是否违反平台规则，也不清楚账号禁用是否与该行为有关。

3. **申诉路径不明确**  
   Issue 中包含大量账号标识和个人信息，但当前数据未显示官方是否已受理、是否需要补充材料或预计处理时间。

4. **潜在隐私风险**  
   公开 Issue 直接暴露手机号脱敏信息、uid 和服务端时间等账号信息。维护者处理时应注意避免在公开回复中进一步披露敏感数据，并建议用户后续通过官方私密渠道补充身份材料。

### 满意度信号

- 今日只有 1 条 Issue，未形成广泛投诉或集中负反馈；
- 没有出现崩溃、严重回归或大面积服务不可用的报告；
- 现有 PR 正在主动处理 Windows CSV、乱码和内部会话暴露等体验问题，说明项目对用户反馈已有响应。

---

## 8. 待处理积压

### 长期未合并的 Cowork 会话隐藏修复

- **PR**：[ #1181 — fix(cowork): hide OpenClaw main agent sessions from session list](https://github.com/netease-youdao/LobsterAI/pull/1181)
- **创建时间**：2026-04-01
- **最近更新**：2026-11-17
- **当前状态**：OPEN
- **积压情况**：  
  从创建至今约七个月半，且在昨日仍有更新，表明它不是无人关注的问题，但长期停留在待合并状态。
- **风险**：
  - 与当前 Cowork 数据模型或迁移机制冲突；
  - 新增 `hidden` 字段需要数据库迁移和兼容默认值；
  - 旧会话数据是否需要回填；
  - 过滤内部会话时可能误伤用户主动创建但名称相近的会话。
- **建议维护者**：
  - 明确 PR 是否仍具备合入价值；
  - 重新基于当前主干分支验证；
  - 补充数据迁移和旧数据库升级测试；
  - 若方案已被替代，应关闭并链接新 PR，避免形成僵尸积压。

### 待合并的 Windows 兼容修复

- **PR**：[ #3109](https://github.com/netease-youdao/LobsterAI/pull/3109)
- **当前状态**：OPEN
- **积压风险**：  
  虽为新 PR，但直接涉及用户文件内容和编码，若长期不合并，Windows 中文用户将持续遇到乱码及错误打开行为。
- **建议**：尽快完成代码审查和 Windows 11 实机回归，并明确是否伴随版本发布交付。

### 已关闭但成果去向不明的两个 PR

- [ #3111](https://github.com/netease-youdao/LobsterAI/pull/3111)
- [ #3110](https://github.com/netease-youdao/LobsterAI/pull/3110)

两条 PR 均已关闭，但现有数据没有说明关闭原因，也无法确认相关功能是否已通过其他 PR 或直接提交进入主干。建议维护者在日报后续追踪中补充：

- 是否已经替代合并；
- 是否因架构调整而放弃；
- 是否计划重新提交。

---

## 结论

LobsterAI 今日整体呈现**中等活跃、以体验优化和服务端配置能力建设为主**的状态。已关闭的两项 PR 聚焦账号菜单和模型标签，待合并工作则重点解决 Cowork 内部会话暴露、Windows CSV 兼容与应用内链接问题。  
当前最需要关注的不是代码提交数量，而是两个风险点：

1. **账号封禁与自动化签到边界需要官方尽快澄清并处理申诉**：[Issue #3112](https://github.com/netease-youdao/LobsterAI/issues/3112)；
2. **长期 PR 应完成收敛或重新落地**：[PR #1181](https://github.com/netease-youdao/LobsterAI/pull/1181)、[PR #3109](https://github.com/netease-youdao/LobsterAI/pull/3109)。

今日无新版本发布，因此暂不存在需要用户迁移或升级的版本级变更。

</details>

<details>
<summary><strong>QwenPaw</strong> — <a href="https://github.com/agentscope-ai/QwenPaw">agentscope-ai/QwenPaw</a></summary>

# QwenPaw 项目动态日报

**统计日期：2026-11-18**  
**项目：** [agentscope-ai/QwenPaw](https://github.com/agentscope-ai/QwenPaw)

---

## 1. 今日速览

过去24小时共更新 **13 个 Issues**（7 个新开或活跃、6 个关闭）和 **37 个 PRs**（22 个待合并、15 个已合并或关闭），项目保持较高开发活跃度，但待审 PR 积压已超过20项。

今日修复重点集中在 **Hub 模型网关、子代理通知、批量任务校验、插件发布、移动端布局和技能卡片** 等方面；其中多项缺陷已出现对应修复 PR，说明问题响应速度较快。与此同时，**MCP 上下文超限、基础镜像内存占用、移动端安全区** 等问题仍待解决。

今日没有发布新版本。当前提交重点仍以修复、架构插件化和性能优化为主，尚看不到明确的新版本发布节点。

**健康度评估：中高。** 社区提交和修复响应活跃，但长期 Issue、较大规模重构 PR，以及性能与上下文稳定性问题表明项目仍有明显技术债。

---

## 2. 版本发布

过去24小时 **无新版本发布**，因此暂无需要特别说明的破坏性变更或升级事项。

从近期活动看，下一阶段可能涉及：

- Hub 模型连接与请求头修复；
- 子代理通知行为调整；
- 批量 Agent 任务参数校验；
- 插件主题语义色扩展；
- 技能池状态和交互优化；
- SSE 代理缓冲修复；
- MCP 与本地模型能力插件化。

其中部分改动尚未合并或发布，不应直接视为已进入正式版本。

---

## 3. 项目进展

### 3.1 今日已合并或关闭的重要 PR

#### Hub 模型网关修复 Anthropic、MiniMax 预设

- PR：[ #8729 — expose request_headers on AnthropicProvider presets](https://github.com/agentscope-ai/QwenPaw/pull/8729)
- 对应 Issue：[ #8718 — Hub model gateway instantly fails for Anthropic/MiniMax presets](https://github.com/agentscope-ai/QwenPaw/issues/8718)

修复了 Hub 内置 `anthropic`、`minimax`、`minimax-cn` 预设调用不存在的 `request_headers()`，导致请求直接失败并返回 `hub_upstream_error` 的问题。这是影响模型连接可用性的高优先级修复。

#### 修正子代理触发“回复完成”桌面通知

- PR：[ #8754 — don't send the reply-completion notification for turns another agent started](https://github.com/agentscope-ai/QwenPaw/pull/8754)
- 对应 Issue：[ #8736 — Subagent completions incorrectly trigger desktop notification](https://github.com/agentscope-ai/QwenPaw/issues/8736)

此前每个子代理完成都会触发“智能体已回复”通知，即使用户主任务仍在运行。修复后，通知范围更贴近用户实际发起的会话，减少多代理工作流中的干扰。

#### 批量任务在派发前完成参数校验

- PR：[ #8792 — validate batch tasks before dispatch](https://github.com/agentscope-ai/QwenPaw/pull/8792)
- 对应 Issue：[ #8789 — Invalid batch task values can dispatch sibling subagents before failing](https://github.com/agentscope-ai/QwenPaw/pull/8789)

修复了 `null`、数字、列表、对象等非法 `task` 值通过预检的问题。此前合法兄弟任务或 fork 请求可能先被派发，随后错误任务才失败，容易造成部分执行和状态不一致。

#### 发布流程支持带版本号的 OSS 插件包

- PR：[ #8800 — support plugin publishing to versioned OSS buckets](https://github.com/agentscope-ai/QwenPaw/pull/8800)

扩展插件发布对版本化对象存储桶的支持，有利于插件构建产物与版本生命周期解耦，为后续插件独立发布、升级和回滚提供基础。

#### 修复 llama.cpp 版本号误判

- PR：[ #8151 — parse llama.cpp build numbers without false updates](https://github.com/agentscope-ai/QwenPaw/pull/8151)
- 相关 Issue：[ #8125](https://github.com/agentscope-ai/QwenPaw/issues/8125)

旧逻辑只能处理简单数字版本，无法正确识别带构建号或 beta 标识的版本，可能错误提示本地模型存在更新。修复改善了本地模型升级提示的准确性。

#### 技能池卡片交互和更新状态优化

- PR：[ #8803 — refine pool cards and builtin update status](https://github.com/agentscope-ai/QwenPaw/pull/8803)
- PR：[ #8799 — prevent pool delete clicks from opening details](https://github.com/agentscope-ai/QwenPaw/pull/8799)

主要改进包括：

- 修正内置技能被误标记为“过期”的状态判断；
- 优化技能卡片信息层级和操作入口；
- 避免点击删除按钮时同时打开详情；
- 改善自动同步等操作的展示体验。

#### Docker 构建与空会话处理修复

- PR：[ #8801 — fix Docker build and empty chat handling](https://github.com/agentscope-ai/QwenPaw/pull/8801)

处理了文档变更进入 CloudPaw ZIP 后与已发布 `0.0.4` 产物不一致、导致发布校验失败的问题。该 PR 采取临时回退文档变更并复用既有产物的方案，说明发布验证链路仍需继续完善。

#### 心跳机制运行时语义文档

- PR：[ #8166 — document runtime semantics of silence, concurrency, and reloads](https://github.com/agentscope-ai/QwenPaw/pull/8166)

补充静默、并发和配置重载等运行时行为说明，有助于用户理解心跳任务的实际执行边界，减少配置与预期不一致。

### 3.2 尚待合并的关键进展

- PR：[ #8804 — defer Anthropic and Gemini SDK imports](https://github.com/agentscope-ai/QwenPaw/pull/8804)  
  延迟加载非当前 Provider 的 SDK，降低应用启动时不必要的导入成本。

- PR：[ #8730 — disable proxy buffering on chat and tool-call SSE streams](https://github.com/agentscope-ai/QwenPaw/pull/8730)  
  为更多 Console 使用的 SSE 接口补充 `X-Accel-Buffering: no`，有望缓解代理环境下流式输出延迟。

- PR：[ #8487 — recognize URL-referenced media in tool-result folding](https://github.com/agentscope-ai/QwenPaw/pull/8487)  
  改进长会话上下文压缩时对工具结果中 URL 媒体的识别和折叠。

- PR：[ #8268 — bound the run completion callback and always clean up](https://github.com/agentscope-ai/QwenPaw/pull/8268)  
  防止完成回调阻塞或取消后，任务一直停留在 `running` 状态。

- PR：[ #8787 — expose semantic colour roles to plugin themes](https://github.com/agentscope-ai/QwenPaw/pull/8787)  
  推进插件主题扩展点建设，与长期 Issue [#8071](https://github.com/agentscope-ai/QwenPaw/issues/8071) 直接相关。

### 3.3 整体推进程度

今日项目主要完成了 **3 类实际改进**：

1. **稳定性修复**：Hub Provider、批量任务派发、子代理通知、llama.cpp 版本判断；
2. **交互完善**：技能卡片、插件发布、移动端布局相关持续修复；
3. **架构演进准备**：MCP 和本地模型管理插件化，但两项均为超大改动，仍在评审阶段。

整体属于持续推进状态，但没有新版本作为阶段性交付节点。

---

## 4. 社区热点

### 4.1 插件主题扩展点

- Issue：[ #8071 — Plugin-facing theme extension point](https://github.com/agentscope-ai/QwenPaw/issues/8071)
- 评论数：**20**
- 对应 PR：[ #8787 — expose the semantic colour roles to plugin themes](https://github.com/agentscope-ai/QwenPaw/pull/8787)

这是当前列表中评论最活跃的事项。核心诉求是：现有插件只能通过 `window.QwenPaw.chat.theme.set(pluginId, { colorPrimary })` 修改主色，无法精细控制背景、表面层、边框、文字和悬浮态。

后续 PR 将基础页面语义色进一步开放给插件，说明该需求已获得实质性响应，预计会进入后续插件能力迭代。

### 4.2 前缀缓存不稳定与 Prompt 性能

- Issue：[ #6952 — prefix cache instability from unsorted tool schemas and interleaved env_context fields](https://github.com/agentscope-ai/QwenPaw/issues/6952)
- 评论数：**2**

用户指出工具 Schema 顺序和环境上下文字段交错会破坏 Prompt 前缀稳定性，导致 KV Cache 无效命中。该问题直接关系到：

- 模型调用成本；
- 首字延迟；
- 多轮 Agent 稳定性；
- 不同运行环境中的缓存复用效果。

这是低评论数但技术价值较高的长期性能问题，仍需建立确定性排序和明确测试。

### 4.3 大型插件化重构

- PR：[ #8469 — refactor(mcp): extract mcp into plugin](https://github.com/agentscope-ai/QwenPaw/pull/8469)
- PR：[ #8499 — extract local model management into plugin](https://github.com/agentscope-ai/QwenPaw/pull/8499)

两项重构均属于超大规模变更，反映项目正尝试降低核心运行时与具体能力之间的耦合。其收益可能包括独立发布、独立升级和减少主应用体积，但风险也包括配置迁移、兼容性和插件生命周期管理。

### 4.4 会话历史在 Agent 切换时不可点击

- Issue：[ #7745 — Agent switch deletes the agent's last session](https://github.com/agentscope-ai/QwenPaw/issues/7745)
- 评论数：**4**

问题涉及 `lastChatIdByAgent` 的会话记账逻辑。用户反馈切换 Agent 后最后会话被清除，历史会话无法点击。虽然 Issue 已关闭，但这是典型的高影响数据可发现性问题，建议继续确认回归测试是否覆盖。

---

## 5. Bug 与稳定性

### 严重

#### 1. 连续 MCP 调用导致上下文超限、任务中断

- Issue：[ #8802 — 同一轮连续调用 MCP 后报上下文超限，任务中断](https://github.com/agentscope-ai/QwenPaw/issues/8802)
- 状态：**开放**
- 修复 PR：**未见明确对应 PR**

同一轮中连续调用 MCP，工具结果均成功返回，但最后因 `MODEL_CONTEXT_LENGTH_EXCEEDED` 中断。该问题涉及多工具 Agent 工作流的核心可靠性，严重时会造成任务无法完成。

#### 2. 基础 Docker 镜像未限制 glibc malloc arenas，主进程内存占用过高

- Issue：[ #8805 — Base image misses the MALLOC_ARENA_MAX cap](https://github.com/agentscope-ai/QwenPaw/issues/8805)
- 状态：**开放**
- 相关修复：[ #8654](https://github.com/agentscope-ai/QwenPaw/issues/8654)
- 修复 PR：**未见完整覆盖基础镜像的对应 PR**

此前修复只覆盖 Creator 入口，基础镜像入口仍未设置 `MALLOC_ARENA_MAX=4`。在多核 Docker 环境中，主进程可能产生大量 glibc arena，造成显著 RSS 增长。对高并发部署而言，这是需要优先处理的资源稳定性问题。

### 高

#### 3. Hub 的 Anthropic/MiniMax 预设无法使用

- Issue：[ #8718](https://github.com/agentscope-ai/QwenPaw/issues/8718)
- 修复 PR：[ #8729](https://github.com/agentscope-ai/QwenPaw/pull/8729)
- 状态：**已有修复 PR，Issue 已关闭**

请求头方法调用错误，导致模型连接立即失败。对依赖这些预设的 Hub 用户属于阻断性问题。

#### 4. 非法批量任务可能在失败前派发其他子代理

- Issue：[ #8789](https://github.com/agentscope-ai/QwenPaw/issues/8789)
- 修复 PR：[ #8792](https://github.com/agentscope-ai/QwenPaw/pull/8792)
- 状态：**已有修复 PR，Issue 已关闭**

可能导致批量任务部分执行、状态不一致，且在错误任务出现前已产生副作用。

#### 5. 子代理完成时错误发送桌面通知

- Issue：[ #8736](https://github.com/agentscope-ai/QwenPaw/issues/8736)
- 修复 PR：[ #8754](https://github.com/agentscope-ai/QwenPaw/pull/8754)
- 状态：**已有修复 PR，Issue 已关闭**

主要影响多代理场景的交互准确性，虽不直接中断任务，但会明显干扰用户。

### 中

#### 6. 移动端内容被系统状态栏遮挡

- Issue：[ #8796 — Mobile full-screen containers render content under the system status bar](https://github.com/agentscope-ai/QwenPaw/issues/8796)
- 状态：**开放**
- 修复 PR：**未见明确对应 PR**

`viewport-fit=cover` 已启用，但缺少顶部 `safe-area-inset`，导致移动端全屏容器内容进入系统状态栏区域。

#### 7. 微信渠道无法启动及发送结果状态不明

- Issue：[ #8709 — WeChat channel cannot start (`ACCOUNT_IN_USE`) and sends reported as unknown](https://github.com/agentscope-ai/QwenPaw/issues/8709)
- 状态：**已关闭**
- 修复 PR：**摘要中未明确显示**

涉及 `ACCOUNT_IN_USE` 和 `PLATFORM_RESULT_UNKNOWN`，前者影响渠道启动，后者导致发送结果不确定。建议确认关闭原因是否来自可复现修复，而非暂时无法复现或人工处理。

#### 8. Creator 在 Windows 上使用原始 `source_id` 生成目录

- Issue：[ #8716 — Windows source-intelligence write path derives directory from raw source_id](https://github.com/agentscope-ai/QwenPaw/issues/8716)
- 状态：**已关闭**
- 相关 Issue：[ #8547](https://github.com/agentscope-ai/QwenPaw/issues/8547)
- 修复 PR：摘要中未明确显示

该问题涉及 Windows 路径与素材落盘一致性。虽然已关闭，仍建议关注回归测试是否覆盖原始 `source_id`、含特殊字符 ID 和 Windows 路径边界。

#### 9. 前缀缓存因工具 Schema 与环境字段顺序不稳定而失效

- Issue：[ #6952](https://github.com/agentscope-ai/QwenPaw/issues/6952)
- 状态：**开放**
- 修复 PR：**未见明确对应 PR**

不直接造成功能失败，但会持续增加延迟和推理成本，对长会话及高频工具调用影响较大。

### 低

#### 10. 免费模型配额超限

- Issue：[ #8798 — model exceeded and quota exceeded](https://github.com/agentscope-ai/QwenPaw/issues/8798)
- 状态：**已关闭**
- 修复 PR：**不适用**

问题指向第三方 `kilo-auto/free` 模型额度或服务策略。更适合在产品层增加更清晰的配额提示、模型可用性状态和降级引导。

---

## 6. 功能请求与路线图信号

### 6.1 插件语义主题能力

- Issue：[ #8071](https://github.com/agentscope-ai/QwenPaw/issues/8071)
- PR：[ #8787](https://github.com/agentscope-ai/QwenPaw/pull/8787)

这是最明确的路线图信号。插件将从仅能设置主色，升级为能够控制语义色角色，覆盖：

- 页面背景；
- 表面与抬升表面；
- 边框；
- 主文字和次级文字；
- 强调色及交互状态。

若 #8787 合并，可能成为下一版本插件 API 的重要变化，需要同步更新插件开发文档和兼容策略。

### 6.2 邮件 MCP 增加草稿保存能力

- Issue：[ #8780 — qwenpawmail-mcp: Add save_draft tool](https://github.com/agentscope-ai/QwenPaw/issues/8780)
- 状态：**开放**
- 修复/实现 PR：**未见**

现有邮件 MCP 工具均会立即发送，无法只写入 Drafts。该需求对应“先生成草稿、用户审阅后再发送”的安全 Agent 工作流，具有较强实际价值。

### 6.3 MCP 与本地模型管理插件化

- PR：[ #8469 — extract MCP into plugin](https://github.com/agentscope-ai/QwenPaw/pull/8469)
- PR：[ #8499 — extract local model management into plugin](https://github.com/agentscope-ai/QwenPaw/pull/8499)

这两项 PR 强烈指向架构插件化路线，但规模分别标记为 XXXL/XL，合并门槛较高。若推进，可能带来：

- 更清晰的核心与扩展边界；
- 独立版本发布和升级；
- 减少主应用启动和运行负担；
- 更好的第三方能力扩展能力。

同时需要特别关注旧配置迁移、模型文件保留和插件升级回滚。

### 6.4 技能池与内置技能状态管理

- PR：[ #8803](https://github.com/agentscope-ai/QwenPaw/pull/8803)
- PR：[ #8799](https://github.com/agentscope-ai/QwenPaw/pull/8799)

技能池正在从简单列表向状态管理、卡片操作和自动同步体验演进。由于相关改动已接近完成，较可能进入近期版本。

### 6.5 Chat 与工具调用 SSE 稳定性

- PR：[ #8730](https://github.com/agentscope-ai/QwenPaw/pull/8730)

若合并，可改善反向代理部署下 Chat 和工具调用流的实时性。该能力常作为默认部署体验，应优先纳入稳定版本。

---

## 7. 用户反馈摘要

### 核心痛点

1. **模型连接存在“配置可见但无法使用”的断点**  
   用户在 Hub 选择 Anthropic/MiniMax 预设后立即失败，且错误表现为统一的 `hub_upstream_error`，定位困难。对应 [#8718](https://github.com/agentscope-ai/QwenPaw/issues/8718)。

2. **多代理工作流容易产生错误通知和部分执行**  
   子代理完成会触发主会话回复通知，而批量任务又可能先派发兄弟任务再发现参数非法。对应 [#8736](https://github.com/agentscope-ai/QwenPaw/issues/8736) 和 [#8789](https://github.com/agentscope-ai/QwenPaw/issues/8789)。

3. **连续工具调用的上下文管理仍是主要可靠性瓶颈**  
   单轮连续 MCP 调用成功执行，却在最后因上下文超限中断，说明工具结果压缩、预算预留或模型上下文适配仍不充分。对应 [#8802](https://github.com/agentscope-ai/QwenPaw/issues/8802)。

4. **移动端适配问题集中在安全区和虚拟键盘组合场景**  
   底部安全区已有相关讨论，但顶部状态栏遮挡仍存在，且与 `viewport-fit=cover` 的引入直接相关。对应 [#8796](https://github.com/agentscope-ai/QwenPaw/issues/8796)。

5. **插件主题和邮件草稿体现更强的“可控制、可审阅”需求**  
   用户不仅希望插件能运行，还希望精细控制视觉表现；邮件场景则明确希望 Agent 在发送前提供人工确认。对应 [#8071](https://github.com/agentscope-ai/QwenPaw/issues/8071) 和 [#8780](https://github.com/agentscope-ai/QwenPaw/issues/8780)。

### 满意度与改进信号

- 今日多项问题获得快速修复，说明社区报告能够有效进入开发流程。
- 子代理通知、批量任务校验、Hub Provider 等问题均有明确修复 PR，响应方向积极。
- 但 MCP 上下文超限、基础镜像内存占用和移动端安全区仍无明确修复 PR，用户在这些方面的风险尚未解除。
- 大型插件化 PR 仍处于评审中，说明架构方向已形成，但落地成熟度暂不能高估。

---

## 8. 待处理积压

### 8.1 长期开放且影响较大的 Issue

#### 前缀缓存稳定性

- Issue：[ #6952](https://github.com/agentscope-ai/QwenPaw/issues/6952)
- 首次创建：2026-08-12
- 当前状态：开放

这是列表中最早且技术影响持续扩大的问题。建议维护者明确排序策略、缓存键和回归测试方案。

#### 插件主题扩展点

- Issue：[ #8071](https://github.com/agentscope-ai/QwenPaw/issues/8071)
- 首次创建：2026-10-01
- 当前状态：开放，已有 [#8787](https://github.com/agentscope-ai/QwenPaw/pull/8787) 对应实现

应尽快确认 PR 合并时间、API 文档和向后兼容策略，避免长期 Issue 与插件开发者预期脱节。

#### Agent 切换后的历史会话可发现性

- Issue：[ #7745](https://github.com/agentscope-ai/QwenPaw/issues/7745)
- 首次创建：2026-09-14
- 当前状态：已关闭

由于涉及会话数据，建议确认是否覆盖 Agent 切换、首次进入、恢复默认 Agent 和多 Agent 并存场景。

### 8.2 待审 PR 积压

过去24小时仍有 **22 个 PR 待合并**，其中多项改动较大：

- [ #8469 — MCP 插件化，XXXL](https://github.com/agentscope-ai/QwenPaw/pull/8469)
- [ #8499 — 本地模型管理插件化，XXXL](https://github.com/agentscope-ai/QwenPaw/pull/8499)
- [ #8295 — 隐藏通道输出中的内部框架标记，XL](https://github.com/agentscope-ai/QwenPaw/pull/8295)
- [ #8803 — 技能池卡片和更新状态，XL](https://github.com/agentscope-ai/QwenPaw/pull/8803)
- [ #8469](https://github.com/agentscope-ai/QwenPaw/pull/8469) 与 [#8499](https://github.com/agentscope-ai/QwenPaw/pull/8499) 架构方向一致但相互耦合，建议统一评审节奏和迁移方案。

另有多个跨月 PR 仍在开放，例如：

- [ #8487 — 工具结果折叠与 URL 媒体识别](https://github.com/agentscope-ai/QwenPaw/pull/8487)
- [ #8268 — 任务完成回调清理](https://github.com/agentscope-ai/QwenPaw/pull/8268)
- [ #8512 — 从网关错误文本识别状态码](https://github.com/agentscope-ai/QwenPaw/pull/8512)

建议维护者对这些长期 PR 给出“可合并、需修改、暂缓”三类明确结论，以降低贡献者等待成本。

---

## 结论

QwenPaw 今日开发活动较高，缺陷修复覆盖多个关键链路，尤其是 **Hub 模型连接、子代理通知和批量任务派发**，已有明确修复闭环。项目正在同时推进 **插件化、MCP 解耦、本地模型插件化、插件主题体系** 等中期能力建设。

当前最需要维护者集中处理的是：

1. **MCP 连续调用后的上下文超限**；
2. **基础 Docker 镜像的 glibc arena 内存占用**；
3. **移动端顶部安全区适配**；
4. **22 个待审 PR 的评审与收敛**；
5. **MCP、本地模型插件化两项大型重构的迁移和回滚方案**。

总体判断：项目健康度为 **中高**，修复响应积极、功能演进明确，但稳定性和架构改造仍处于需要持续投入的阶段。

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/NousResearch/hermes-agent">NousResearch/hermes-agent</a></summary>

# Hermes Agent 项目动态日报

**统计日期：2026-11-18**  
**数据范围：过去 24 小时**  
**项目地址：** [NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent)

---

## 1. 今日速览

- 过去 24 小时共更新 **50 条 Issues**，其中 **48 条仍开放/活跃、2 条关闭**；同步更新 **50 条 PR**，其中 **43 条待合并、7 条合并或关闭**，并发布 **1 个 Canary 版本**。
- 今日讨论重点明显集中在 **统一 Gateway 架构收尾、Desktop 会话可靠性、权限与审批安全边界**，说明项目已从功能扩张阶段进入架构迁移后的稳定性治理期。
- Issue 与 PR 的开放比例分别约为 **96%** 和 **86%**，短期吞吐较高，但积压压力也在累积；部分涉及会话状态、权限绕过和进程生命周期的问题仍缺少明确修复。
- 今日 PR 覆盖工具安全、Kanban worker、插件目录和消息平台体验，功能迭代持续活跃；不过若以“进入稳定主线”为标准，当前修复仍以开放 PR 为主。
- **综合健康度：中高、但存在短期稳定性警戒。** 功能供给活跃，Gateway/Desktop 正在快速演进，但安全边界、会话一致性和后台任务生命周期问题较集中，发布前应重点核验相关修复。

---

## 2. 版本发布

### v0.23.2 Canary

- **版本：** [`v0.23.2+canary.20261117T064624Z`](https://github.com/NousResearch/hermes-agent/releases/tag/v0.23.2%2Bcanary.20261117T064624Z)
- **发布日期：** 2026-11-17
- **渠道：** Canary 预发布版本
- **状态：** 适合测试，不建议未经完整回归直接用于生产环境。

#### 更新重点

本次发布摘要未提供完整 changelog，但结合当日 Issue 与 PR，Canary 很可能覆盖了近期多个关键方向：

1. **Gateway 统一会话架构**
   - CLI、TUI、Desktop、API Server、Cron、编辑器、消息机器人和 Group Chat 均逐步切换到统一 Gateway。
   - 相关入口迁移仍在推进，参见 [#145171](https://github.com/NousResearch/hermes-agent/issues/145171) 和 [#143547](https://github.com/NousResearch/hermes-agent/issues/143547)。

2. **Desktop 多 Profile 与会话状态**
   - 修复或调整 Profile 切换、Group Chat 可见性以及多聊天并发时 Provider 插件加载行为。
   - 相关修复 PR 包括 [#157087](https://github.com/NousResearch/hermes-agent/pull/157087)。

3. **Kanban worker 稳定性**
   - 修复 worker 被其他运行实例误认领、任务工作区遮蔽运行时包等问题。
   - 相关 PR 包括 [#157265](https://github.com/NousResearch/hermes-agent/pull/157265) 和 [#157261](https://github.com/NousResearch/hermes-agent/pull/157261)。

4. **工具执行与安全控制**
   - 限制 pre-exec guard 最长等待时间，避免命令超时被错误扩展为身份探测等待。
   - 相关 PR：[#156367](https://github.com/NousResearch/hermes-agent/pull/156367)。

#### 破坏性变更与迁移注意事项

- **配置与模型参数：**
  - `model.ollama_num_ctx` 在云端 Provider 上可能被错误套用，导致 1M 上下文静默降至 65,536；升级后应核对压缩窗口配置。参见 [#99943](https://github.com/NousResearch/hermes-agent/issues/99943)。
- **Gateway 权限边界：**
  - Desktop、远程 Web、CLI 与 Gateway 的会话权威正在统一切换。依赖旧 `hermes serve` 或本地状态文件行为的用户，应重点验证会话归属、Profile 隔离和重启恢复。参见 [#145171](https://github.com/NousResearch/hermes-agent/issues/145171)。
- **安全审批：**
  - `hermes config set` 可绕过系统配置写保护；插件审批也可被 `/yolo` 或 `approvals.mode: off` 绕过。生产环境不应仅依赖全局关闭审批来保护插件强制审批。参见 [#59293](https://github.com/NousResearch/hermes-agent/issues/59293) 与 [#133947](https://github.com/NousResearch/hermes-agent/issues/133947)。
- **Canary 建议：**
  - 建议先在隔离环境验证 Gateway 重启、Desktop 多 Profile、ACP 编辑审批、Kanban worker、上下文压缩和后台进程恢复。

---

## 3. 项目进展

### 今日合并/关闭的重要 PR

#### 1. Provider 插件并发加载修复

- **PR：** [#157087](https://github.com/NousResearch/hermes-agent/pull/157087)
- **状态：** 待合并
- **内容：** 修复同一 Profile 同时打开多个聊天时，Provider 插件偶发消失并报 `Unknown provider` 的问题。
- **价值：** 降低 Desktop 重启或多聊天并发场景下的 Provider 不可用风险，属于会话与插件初始化链路的重要稳定性修复。
- **备注：** 尚未进入稳定主线，Canary 用户需确认对应构建已包含改动。

#### 2. Kanban `active_pr` 误判修复

- **PR：** [#157265](https://github.com/NousResearch/hermes-agent/pull/157265)
- **状态：** 待合并
- **内容：** 将 respawn guard 限定到卡片自身 worker，避免一个运行中的 PR 阻止其他任务 worker 启动。
- **价值：** 直接处理任务长时间停留在 `ready`、产生 1268 次无实际进展事件的问题。

#### 3. Kanban 工作区遮蔽运行时问题

- **PR：** [#157261](https://github.com/NousResearch/hermes-agent/pull/157261)
- **状态：** 待合并
- **内容：** 使用 Python safe-path `-P` 启动 worker client，避免任务工作区中的同名 `hermes_cli` 包覆盖运行时包。
- **价值：** 提升第三方任务工作区、自定义代码目录与 Hermes 运行时并存时的可靠性。

#### 4. Pre-exec guard 等待上限

- **PR：** [#156367](https://github.com/NousResearch/hermes-agent/pull/156367)
- **状态：** 待合并
- **内容：** 将执行前身份检查等待限制在 90 秒，并仅缓存已确认的身份判断。
- **价值：** 防止长命令超时被错误用作安全守卫预算，避免命令长时间挂起后才被拒绝。

#### 5. `execute_code` 围栏兼容修复

- **PRs：**
  - [#157256](https://github.com/NousResearch/hermes-agent/pull/157256)
  - [#157251](https://github.com/NousResearch/hermes-agent/pull/157251)
- **状态：** 均待合并
- **内容：** 编译 `execute_code` 脚本前剥离最外层 Markdown 或 HTML 代码围栏，同时避免修改字符串内部的围栏。
- **价值：** 改善模型直接生成 fenced code 时的执行成功率，属于高频工具链质量修复。

#### 6. Peer 缺失 Profile 判定重构

- **PR：** [#155737](https://github.com/NousResearch/hermes-agent/pull/155737)
- **状态：** 已关闭
- **内容：** 从依赖英文错误文案改为读取结构化错误码，同时保留旧版 Peer 兼容。
- **价值：** 提升跨版本与国际化场景的兼容性；不过该 PR 已关闭，具体是否以替代方案合入需继续确认。

### 整体推进程度

- 今日不仅有功能扩展，也有 Gateway、Desktop、Kanban 和工具执行链路的系统性修复，方向正确。
- 但展示的多数关键 PR 仍处于开放状态，尚不能计为已落地的稳定进展。
- **当日可确认的推进量中等偏上**：至少多项高影响缺陷已有针对性补丁，但“已合并且完成回归”的数量有限。

---

## 4. 社区热点

### 4.1 统一 Gateway 后续问题

- **Issue：** [#143547](https://github.com/NousResearch/hermes-agent/issues/143547)
- **评论数：** 80，为今日最活跃讨论。
- **核心诉求：** 追踪统一 Gateway 合并后 CLI、TUI、Desktop、API、Cron、Kanban、Group Chat 等入口的合并后遗留问题。
- **背景：** Gateway 已从“一个入口迁移”进入“全场景一致性验证”阶段。
- **社区判断：** 这是当前项目最核心的架构议题。其他模块的会话丢失、Profile 可见性和后台任务异常都可能与统一会话权威切换有关。

### 4.2 `hermes config set` 绕过系统配置写保护

- **Issue：** [#59293](https://github.com/NousResearch/hermes-agent/issues/59293)
- **评论数：** 29。
- **核心诉求：** Shell 直接修改 `config.yaml` 会被标记为危险操作，但 Agent 可通过 `hermes config set` 完成同类写入，绕过审批层。
- **影响：** 对拥有终端访问权限的 Agent，这是实际权限绕过，而不只是配置体验问题。
- **社区判断：** 用户关注点已从“是否有审批”转向“审批是否覆盖所有等价写入路径”。

### 4.3 云端模型上下文窗口被 Ollama 配置错误限制

- **Issue：** [#99943](https://github.com/NousResearch/hermes-agent/issues/99943)
- **评论数：** 14。
- **核心诉求：** 云端模型启用 `model.ollama_num_ctx` 后，压缩器会将 1M 窗口静默限制到 65,536。
- **影响：** 上下文丢失、压缩质量下降和额外成本，且用户难以察觉。
- **社区判断：** 这是典型配置语义未按 Provider 隔离的问题，影响大模型用户但暴露方式隐蔽。

### 4.4 Desktop 消息随机重复、乱序或丢失

- **Issue：** [#137287](https://github.com/NousResearch/hermes-agent/issues/137287)
- **评论数：** 13。
- **核心诉求：** Desktop transcript 中用户或助手消息可能随机重复、散落到错误位置或直接消失。
- **影响：** 会话记录可信度受损，可能影响审计、上下文重建和长对话使用。
- **社区判断：** 这是 Desktop 端高感知、高风险问题，用户需要确定性消息顺序和幂等渲染。

### 4.5 可配置模型 Temperature

- **Issue：** [#17565](https://github.com/NousResearch/hermes-agent/issues/17565)
- **评论数：** 14。
- **反应：** 👍 18，为所列 Issue 中最高。
- **核心诉求：** 将当前硬编码或 Provider 默认的 temperature 暴露为用户配置。
- **影响：** 用户希望在事实问答、创意生成、工具调用等场景使用不同稳定性与随机性策略。
- **社区判断：** 需求明确、兼容成本较低，具备进入下一版本的可能，但仍需定义配置优先级和模型兼容性。

### 4.6 Codex Responses 缺少安全的中间助手消息

- **Issue：** [#142663](https://github.com/NousResearch/hermes-agent/issues/142663)
- **评论数：** 8。
- **核心诉求：** Telegram 网关在 Codex Responses provider 下只发送最终消息，无法展示安全的 interim assistant messages。
- **影响：** 长任务期间用户无法看到阶段性进度，容易误判卡死。
- **社区判断：** 与消息投递策略相关，需要在“可展示”和“不泄露内部推理”之间建立明确边界。

### 7. 其他高关注问题

- **Gateway entry-point cutover：** [#145171](https://github.com/NousResearch/hermes-agent/issues/145171)
- **xAI grok-4.7 忽略 reasoning effort：** [#121796](https://github.com/NousResearch/hermes-agent/issues/121796)
- **Default Profile 的自定义 @handle：** [#89720](https://github.com/NousResearch/hermes-agent/issues/89720)
- **Desktop 自定义布局重启后丢失：** [#89548](https://github.com/NousResearch/hermes-agent/issues/89548)
- **Gateway Group Chat 跨 Profile 侧栏消失：** [#150690](https://github.com/NousResearch/hermes-agent/issues/150690)
- **个人 Skills 防 Agent 修改：** [#41939](https://github.com/NousResearch/hermes-agent/issues/41939)，👍 8
- **Feishu 每轮实时进度卡：** [#139025](https://github.com/NousResearch/hermes-agent/pull/139025)

---

## 5. Bug 与稳定性

### P0 / 严重安全与数据完整性风险

#### 1. 配置写保护可被 CLI 绕过

- **Issue：** [#59293](https://github.com/NousResearch/hermes-agent/issues/59293)
- **类型：** 安全、权限绕过。
- **影响：** Agent 可通过 `hermes config set` 修改受保护配置，绕过原本对系统配置写入的审批。
- **修复 PR：** **未发现明确对应 PR**。
- **建议：** 最高优先级处理；统一所有配置变更路径，使其共享同一审批与审计逻辑。

#### 2. 插件强制审批可被全局 YOLO 关闭

- **Issue：** [#133947](https://github.com/NousResearch/hermes-agent/issues/133947)
- **类型：** 安全边界缺失。
- **影响：** 插件返回的 `pre_tool_call: approve` 在 `/yolo` 或 `approvals.mode: off` 下失效。
- **修复 PR：** **未发现明确对应 PR**。
- **建议：** 引入不可被全局模式覆盖的 `strict` 审批等级。

#### 3. `write_file` / `patch` 绕过 Skills 写审批

- **Issue：** [#60440](https://github.com/NousResearch/hermes-agent/issues/60440)
- **类型：** 权限边界绕过。
- **影响：** `skills.write_approval` 只保护 `skill_manage`，通用文件工具仍可直接修改 Skill。
- **修复 PR：** **未发现明确对应 PR**。
- **建议：** 将审批策略下沉到目标路径与文件类型，而非绑定单一工具。

#### 4. 工具生成图片可能造成数据外泄

- **Issue：** [#129975](https://github.com/NousResearch/hermes-agent/issues/129975)
- **类型：** Prompt Injection 数据外泄。
- **影响：** 回复中的任意图片 URL 可能被网关抓取并发送，即使用户文本已诱导模型生成该 URL。
- **修复 PR：** **未发现明确对应 PR**。
- **建议：** 仅抓取由受信工具产生并带有可验证来源标记的 URL。

### P1 / 高影响稳定性问题

#### 5. Desktop transcript 重复、乱序和丢消息

- **Issue：** [#137287](https://github.com/NousResearch/hermes-agent/issues/137287)
- **类型：** 会话一致性。
- **影响：** 对话记录失真，可能进一步影响上下文恢复与分支。
- **修复 PR：** 未见明确修复 PR。
- **建议：** 对消息 ID、顺序、幂等插入和重连补偿进行系统审计。

#### 6. Gateway 重启可能接管并杀死其他进程的后台任务

- **Issue：** [#120856](https://github.com/NousResearch/hermes-agent/issues/120856)
- **类型：** 跨进程所有权错误。
- **影响：** 使用共享 `processes.json` 时，重启后的 Gateway 可能接管并终止其他实例的后台 job。
- **修复 PR：** 未见明确修复 PR。
- **建议：** 在进程记录中加入实例 ID、所有权租约和启动代次。

#### 7. Gateway housekeeping 阻塞 37–88 秒并丢失 Kanban worker

- **Issue：** [#157248](https://github.com/NousResearch/hermes-agent/issues/157248)
- **类型：** 阻塞与任务丢失。
- **影响：** swap-heavy Linux 主机上 `malloc_trim(0)` 长时间阻塞，整个 Gateway 和 worker turn 丢失。
- **修复 PR：** 未见明确修复 PR。
- **建议：** 将内存回收移出主事件循环，并增加 watchdog 与超时保护。

#### 8. Kanban reaper 杀死仍在收尾的 worker

- **Issue：** [#157057](https://github.com/NousResearch/hermes-agent/issues/157057)
- **类型：** 任务生命周期竞态。
- **影响：** `ended_at` 在 `review_requested` 时写入，而非 worker 真正退出时写入，导致 worker 被提前终止，并污染 owner 后续 admission。
- **修复 PR：** [#157265](https://github.com/NousResearch/hermes-agent/pull/157265) 针对部分 `active_pr` 归属问题，但**未明确覆盖全部 reaper 时序根因**。
- **建议：** 以 worker 实际退出或心跳终止时间作为 reaper 锚点。

#### 9. Windows Desktop Electron 主进程周期性卡顿

- **Issue：** [#156888](https://github.com/NousResearch/hermes-agent/issues/156888)
- **类型：** Desktop 性能回归。
- **影响：** 使用中每 1–4 分钟出现约 2–4 秒停顿，常发生在消息发送或 turn 开始时。
- **修复 PR：** 未见明确修复 PR。
- **建议：** 对同步 I/O、SQLite、插件发现和主进程 IPC 做性能追踪。

#### 10. Provider 插件在多聊天并发时消失

- **Issue：** [#156899](https://github.com/NousResearch/hermes-agent/issues/156899)
- **类型：** 并发初始化竞态。
- **影响：** 报 `Unknown provider`，直到重启才恢复。
- **修复 PR：** [#157087](https://github.com/NousResearch/hermes-agent/pull/157087)，**已有针对性 fix PR，待合并**。

### P2 / 重要功能回归

| 问题 | 影响 | 修复状态 |
|---|---|---|
| [#99943](https://github.com/NousResearch/hermes-agent/issues/99943) 云端 Provider 被 Ollama `num_ctx` 限制 | 1M 上下文静默降至 65,536 | 未见明确 PR |
| [#150690](https://github.com/NousResearch/hermes-agent/issues/150690) Gateway Group Chat 跨 Profile 消失 | 房间隐藏、Profile 视图不一致 | 未见明确 PR |
| [#89548](https://github.com/NousResearch/hermes-agent/issues/89548) Desktop 布局重启后丢失 | 用户个性化设置无法持久化 | 未见明确 PR |
| [#63302](https://github.com/NousResearch/hermes-agent/issues/63302) ACP 忽略 `approvals.timeout` | 实际硬编码 60 秒并静默拒绝 | 未见明确 PR |
| [#142677](https://github.com/NousResearch/hermes-agent/issues/142677) 缺失 tool name 的拒绝结果无纠正形状 | 模型重复发送相同无效 payload | 未见明确 PR |
| [#153494](https://github.com/NousResearch/hermes-agent/issues/153494) 压缩耗尽后 Desktop 仍显示旧 segment | Agent 无上下文运行、后续 branch 报 `invalid_params` | 未见明确 PR |
| [#156041](https://github.com/NousResearch/hermes-agent/issues/156041) Gemini/Cloud Code 误报 429 | 模型调用持续失败 | 未见明确 PR |
| [#151316](https://github.com/NousResearch/hermes-agent/issues/151316) Desktop turn 期间 Bot DM 无法回复 | 单回复路径守卫误判 | 未见明确 PR |
| [#156922](https://github.com/NousResearch/hermes-agent/issues/156922) Dashboard Basic Auth 子进程继承不完整 | 产生误报警 | 未见明确 PR |

---

## 6. 功能请求与路线图信号

### 6.1 模型 Temperature 配置

- **需求：** [#17565](https://github.com/NousResearch/hermes-agent/issues/17565)
- **路线图判断：** **较高概率进入下一版本。**
- **理由：** 已有 18 个 👍，需求简单、用户价值明确，且实现主要是配置解析和 Provider 参数透传。
- **需明确：** 优先级规则、CLI/Desktop 配置入口、不同模型是否允许覆盖。

### 6.2 Default Profile 支持自定义 @handle

- **需求：** [#89720](https://github.com/NousResearch/hermes-agent/issues/89720)
- **路线图判断：** **中等偏高概率。**
- **理由：** 与 Profile、Bot Mode 和 Gateway 统一迁移直接相关，改动范围相对可控。
- **风险：** 需兼容已有 `@hermes` 路由和自动提及规则。

### 6.3 Gateway 可配置原生群成员容量

- **PR：** [#157258](https://github.com/NousResearch/hermes-agent/pull/157258)
- **路线图判断：** **已进入实现阶段。**
- **内容：** 新增 `hosted_rooms.discussion.max_members`，默认 6，可配置为 2–24。
- **价值：** 适应原生群聊 UI 更大的成员选择器。

### 6.4 Feishu 每轮实时进度卡

- **PR：** [#139025](https://github.com/NousResearch/hermes-agent/pull/139025)
- **路线图判断：** **中高概率。**
- **内容：** 展示当前操作、耗时、终态和可折叠命令，并通过 call ID 关联工具生命周期。
- **价值：** 提升长任务的可见性和用户信任。

### 6.5 Codex Responses 的安全中间消息

- **需求：** [#142663](https://github.com/NousResearch/hermes-agent/issues/142663)
- **路线图判断：** **中等概率。**
- **价值：** 解决 Telegram 长任务“无进度反馈”问题。
- **约束：** 必须避免暴露内部推理或敏感工具上下文。

### 6.6 多租户能力

- **需求：** [#146503](https://github.com/NousResearch/hermes-agent/issues/146503)
- **路线图判断：** **中长期信号。**
- **要点：** 单进程托管多个租户，租户代码运行于远程沙箱，仅加载 Nous 审核插件与 MCP。
- **价值：** 与 Hosted Hermes 的商业化和安全扩展高度相关，但工程复杂度较高。

### 6.7 个人 Skills 防误改

- **需求：** [#41939](https://github.com/NousResearch/hermes-agent/issues/41939)
- **路线图判断：** **中等概率，且安全价值高。**
- **诉求：** 用户日常积累的个人 Skills 不应被 Agent 自动改写。
- **建议：** 与 [#60440](https://github.com/NousResearch/hermes-agent/issues/60440) 的通用写工具审批问题一起解决。

### 6.8 插件目录扩张

今日新增或更新的目录项目包括：

- Personal Task Manager： [#157264](https://github.com/NousResearch/hermes-agent/pull/157264)
- Palate： [#157263](https://github.com/NousResearch/hermes-agent/pull/157263)
- Meeting.ai： [#157262](https://github.com/NousResearch/hermes-agent/pull/157262)
- Cursor Provider 0.6.0： [#157259](https://github.com/NousResearch/hermes-agent/pull/157259)
- jev-approvals 0.5.1： [#157193](https://github.com/NousResearch/hermes-agent/pull/157193)
- next-prompt 0.3.5： [#157253](https://github.com/NousResearch/hermes-agent/pull/157253)

同时，社区提出新增 `games` 分类：

- **Issue：** [#157245](https://github.com/NousResearch/hermes-agent/issues/157245)

**路线图判断：** 插件生态仍在快速扩张，是项目增长的重要信号；但目录增长应与插件安全审核、固定版本和依赖扫描同步推进。

---

## 7. 用户反馈摘要

### 核心用户痛点

1. **架构统一后，可靠性没有完全同步**
   - 用户已经接受 CLI、Desktop、消息平台和 Cron 统一接入 Gateway，但期待不同入口拥有一致的行为和会话权威。
   - 热点问题集中在 Group Chat 跨 Profile 可见性、Desktop transcript 损坏和进程重启后的后台任务归属。
   - 参考：[#143547](https://github.com/NousResearch/hermes-agent/issues/143547)、[#150690](https://github.com/NousResearch/hermes-agent/issues/150690)、[#120856](https://github.com/NousResearch/hermes-agent/issues/120856)。

2. **审批系统存在“前后门不一致”**
   - 用户最担心的是系统已经提示危险操作，但 Agent 可以通过 CLI、通用文件工具或全局 YOLO 绕过。
   - 这使审批提示无法作为可靠的安全边界。
   - 参考：[#59293](https://github.com/NousResearch/hermes-agent/issues/59293)、[#60440](https://github.com/NousResearch/hermes-agent/issues/60440)、[#133947](https://github.com/NousResearch/hermes-agent/issues/133947)。

3. **模型能力配置不够透明**
   - Temperature、reasoning effort 和上下文窗口等参数需要按 Provider 正确生效。
   - 静默忽略配置比直接报错更影响信任，因为用户无法判断上下文为何被截断或推理强度为何未变化。
   - 参考：[#17565](https://github.com/NousResearch/hermes-agent/issues/17565)、[#99943](https://github.com/NousResearch/hermes-agent/issues/99943)、[#121796](https://github.com/NousResearch/hermes-agent/issues/121796)。

4. **Desktop 是当前体验短板**
   - 自定义布局无法持久化、消息重复或丢失、Profile 切换破坏统一视图、Windows 主进程卡顿等问题叠加。
   - 这些问题直接影响长时间使用和信任感。
   - 参考：[#89548](https://github.com/NousResearch/hermes-agent/issues/89548)、[#137287](https://github.com/NousResearch/hermes-agent/issues/137287)、[#141049](https://github.com/NousResearch/hermes-agent/issues/141049)、[#156888](https://github.com/NousResearch/hermes-agent/issues/156888)。

5. **插件生态需求旺盛**
   - 用户希望快速接入任务管理、会议纪要、影视记录、编码 Provider 和审批插件。
   - 目录 PR 密集涌现，表明 Hermes 正从单一 Agent 框架转向可扩展的个人工作平台。
   - 参考：[#157264](https://github.com/NousResearch/hermes-agent/pull/157264)、[#157262](https://github.com/NousResearch/hermes-agent/pull/157262)、[#157259](https://github.com/NousResearch/hermes-agent/pull/157259)。

### 满意与积极信号

- **Desktop 多 Profile 切换问题已关闭：** [#141049](https://github.com/NousResearch/hermes-agent/issues/141049)，说明 Desktop 基础交互修复正在被持续吸收。
- **Custom Provider 多端点需求已关闭：** [#47039](https://github.com/NousResearch/hermes-agent/issues/47039)，反映国内模型和多 API 接入方向得到推进。
- 插件目录持续获得社区主动贡献，说明扩展机制对个人开发者和团队用户具备吸引力。

### 不满与主要失望点

- 用户对“静默失败”尤其敏感：
  - 上下文窗口静默缩小；
  - reasoning effort 静默忽略；
  - ACP 超时表现为静默拒绝；
  - Gateway 压缩重置后 Desktop 仍显示旧 segment。
- 部分问题创建时间较长但讨论持续，表明用户并未放弃反馈，而是希望看到根治和明确状态。

---

## 8. 待处理积压

### 8.1 高优先级长期开放事项

#### 统一 Gateway 合并后遗留问题

- **Issue：** [#143547](https://github.com/NousResearch/hermes-agent/issues/143547)
- **创建时间：** 2026-10-23
- **状态：** 80 条评论，仍开放。
- **风险：** 已影响多个入口，是当前最大架构性阻塞点。
- **建议：** 拆分 Issue 为可验证子项，明确每个入口的迁移完成标准与回归矩阵。

#### 配置写保护绕过

- **Issue：** [#59293](https://github.com/NousResearch/hermes-agent/issues/59293)
- **创建时间：** 2026-07-06
- **状态：** 29 条评论，仍开放。
- **风险：** 安全边界长期不一致。
- **建议：** 指定 owner，给出修复版本和审计方案。

#### 通用写工具绕过 Skills 审批

- **Issue：** [#60440](https://github.com/NousResearch/hermes-agent/issues/60440)
- **创建时间：** 2026-07-07
- **状态：** 3 条评论，仍开放。
- **风险：** 与个人 Skills 保护需求 [#41939](https://github.com/NousResearch/hermes-agent/issues/41939) 直接关联。

#### ACP 审批超时配置失效

- **Issue：** [#63302](https://github.com/NousResearch/hermes-agent/issues/63302)
- **创建时间：** 2026-07-12
- **状态：** 4 条评论，仍开放。
- **风险：** IDE 编辑审批体验与配置承诺不一致。

### 8.2 长期高热度功能请求

- Temperature 配置：[#17565](https://github.com/NousResearch/hermes-agent/issues/17565)，👍 18
- Personal Skills 防误改：[#41939](https://github.com/NousResearch/hermes-agent/issues/41939)，👍 8
- Default Profile 自定义 @handle：[#89720](https://github.com/NousResearch/hermes-agent/issues/89720)
- 多租户托管：[#146503](https://github.com/NousResearch/hermes-agent/issues/146503)

这些需求均已形成明确场景，并非模糊提案。若继续长期开放，会增加用户等待成本和社区重复反馈。

### 8.3 长期回归与架构债务

- 跨 Provider 上下文窗口错误：[#99943](https://github.com/NousResearch/hermes-agent/issues/99943)
- Gateway 重启接管其他进程任务：[#120856](https://github.com/NousResearch/hermes-agent/issues/120856)
- Desktop 布局持久化：[#89548](https://github.com/NousResearch/hermes-agent/issues/89548)
- Desktop transcript 一致性：[#137287](https://github.com/NousResearch/hermes-agent/issues/137287)
- Gateway Group Chat 跨 Profile 可见性：[#150690](https://github.com/NousResearch/hermes-agent/issues/150690)
- Gateway → Desktop/Web entry-point cutover：[#145171](https://github.com/NousResearch/hermes-agent/issues/145171)

### 8.4 长期依赖风险

- npm audit 报告 8 个开发链漏洞，当前因依赖范围固定而无法通过普通 `npm audit fix` 修复：
  - **Issue：** [#144677](https://github.com/NousResearch/hermes-agent/issues/144677)
  - **风险：** 主要位于 dev/build chain，但可能影响桌面打包与开发环境。
  - **建议：** 建立依赖升级窗口，避免长期以 `--force` 作为唯一方案。

### 8.5 PR 合并队列风险

- 今日 **43 条 PR 待合并**。
- 高价值但尚未合并的修复包括：
  - Provider 并发加载：[#157087](https://github.com/NousResearch/hermes-agent/pull/157087)
  - Kanban worker 归属：[#157265](https://github.com/NousResearch/hermes-agent/pull/157265)
  - Kanban 工作区隔离：[#157261](https://github.com/NousResearch/hermes-agent/pull/157261)
  - pre-exec guard 上限：[#156367](https://github.com/NousResearch/hermes-agent/pull/156367)
  - `execute_code` 围栏兼容：[#157256](https://github.com/NousResearch/hermes-agent/pull/157256)、[#157251](https://github.com/NousResearch/hermes-agent/pull/157251)
  - Feishu 实时进度卡：[#139025](https://github.com/NousResearch/hermes-agent/pull/139139025)

**维护建议：** 优先合并 Gateway/Desktop/Kanban/工具安全相关修复，并为每个补丁补充回归测试和对应 Issue 关闭标记，避免 Canary 与主线行为长期分叉。

---

## 今日结论

Hermes Agent 当前处于明显的**“高活跃扩张 + 架构切换后稳定性收敛”阶段**。插件生态、Provider 接入、群聊体验和多 Profile 功能继续推进；但统一 Gateway 引入后，Desktop 会话一致性、权限审批路径、后台进程所有权和压缩状态管理成为主要风险面。

建议下一阶段将优先级集中在：

1. **统一并强制执行配置、插件和文件写入审批；**
2. **修复 Desktop transcript、Profile 可见性与布局持久化；**
3. **解决 Gateway 重启、worker 回收和内存 housekeeping 阻塞；**
4. **按 Provider 隔离上下文窗口与模型能力配置；**
5. **加快合并已有高价值修复 PR，并补充跨入口回归矩阵。**

在这些事项完成前，项目健康度可评价为**中高活跃度、中等稳定性、安全边界需优先收敛**。

</details>

<details>
<summary><strong>OpenHuman</strong> — <a href="https://github.com/tinyhumansai/openhuman">tinyhumansai/openhuman</a></summary>

# OpenHuman 项目动态日报｜2026-11-18

## 1. 今日速览

过去 24 小时共更新 **2 个 Issue、7 个 PR**，其中 **6 个 PR 仍待合并、1 个已关闭**，Issue 侧为 **1 个活跃、1 个已关闭**；今日没有新版本发布。  
整体开发活动较高，主要集中在 **CI 稳定性与执行效率、Agent 上下文压缩、认证错误诊断、语音输入体验和搜索服务接入**。已关闭 PR 完成了 Rust 检查任务拆分，但其余核心改动尚未进入主干，阶段性成果仍需等待合并。  
社区讨论热度主要集中于 **记忆队列并发能力**（Issue #6983，12 条评论）和 **自定义工作目录文件不可见**（Issue #7907，5 条评论并已关闭）。  
综合评估：**开发活跃度较高，合并转化率偏低，工程稳定性建设正在推进，但关键用户需求与高优先级变更仍存在积压。**

---

## 2. 版本发布

今日无新版本发布，因此暂无版本更新、破坏性变更或迁移说明。

---

## 3. 项目进展

### 3.1 Rust lint 检查拆分，缩短并行反馈时间

- **PR #8757｜CLOSED**
- 链接：[GitHub PR #8757](https://github.com/tinyhumansai/openhuman/pull/8757)
- 将托管环境中的 `rust-lint` 拆分为三个并行任务：
  - `rust-lint`
  - `rust-embed`
  - `rust-gates-off`
- 每个任务拥有独立 runner 和 Rust 缓存。
- `rust-embed` 覆盖需要构建并运行的检查，包括 doctest、测试模块安装和离线示例。

**推进价值：**提升 Rust 检查并行度，改善大型仓库 CI 等待时间，并降低单一检查任务失败对整体反馈链路的阻塞。该 PR 已关闭，按数据看未合并为当前主线成果。

### 3.2 托管覆盖率任务提高 Rust 构建并行度

- **PR #8756｜OPEN**
- 链接：[GitHub PR #8756](https://github.com/tinyhumansai/openhuman/pull/8756)
- 托管覆盖率任务由单 Rust 构建进程调整为 `CARGO_BUILD_JOBS=2`。
- 修改涉及 `scripts/ci/self-hosted/lanes-plan.mjs` 和 `ci-lanes.yml`，EX63 通道保持不变。

**推进价值：**目标是缓解托管覆盖率任务构建时间过长的问题。由于 PR 尚未合并，当前收益仍处于待落地状态。

### 3.3 Agent 压缩策略纳入文档实际读取量

- **PR #8754｜OPEN**
- 链接：[GitHub PR #8754](https://github.com/tinyhumansai/openhuman/pull/8754)
- `compact_bound_history` 在无模型轮次的压缩场景中，将文档大小估算从固定图像权重改为使用已缓存的文本读取量。
- 原先每份文档固定估算约 **4096 字符（约 1K tokens）**，新方案按真实文本大小计算。
- 压缩阈值也会同步依据实际文档体积调整。

**推进价值：**减少上下文预算被大量低估或高估的问题，使长文档、多文档任务的压缩策略更准确，有望降低无效压缩和上下文浪费。

### 3.4 流程节点摘要正确展示配置文本

- **PR #8758｜OPEN**
- 链接：[GitHub PR #8758](https://github.com/tinyhumansai/openhuman/pull/8758)
- Flow 节点卡片摘要将按用户原始输入展示配置内容，例如：
  - Agent prompt
  - HTTP URL
  - switch expression
  - dedup key
- `{name}` 占位符替换由链式 `String.replace` 改为一次性 replacer。

**推进价值：**修复节点摘要与实际配置不一致的问题，提升工作流调试透明度；同时减少多次链式替换带来的维护复杂度。

### 3.5 Composio 认证错误保留可操作的后端信息

- **PR #8753｜OPEN**
- 链接：[GitHub PR #8753](https://github.com/tinyhumansai/openhuman/pull/8753)
- 关联 Issue：[GitHub Issue #5507](https://github.com/tinyhumansai/openhuman/issues/5507)
- 修复 `sanitizeAuthError` 在遇到 JSON 响应时提前截断消息的问题。
- 对 bearer-route 400 错误，保留后端返回的嵌入式 JSON 错误体及工具密钥等可操作信息。

**推进价值：**避免安全清洗逻辑吞掉真正的认证失败原因，降低用户遇到 Composio 接入故障时的排障成本。

### 3.6 整体推进判断

今日提交方向明确地围绕三类问题展开：

1. **工程效率：**Rust lint 与 coverage 构建并行化。
2. **Agent 可靠性：**上下文压缩估算优化、流程摘要准确性提升。
3. **可诊断性与体验：**认证错误信息保留、语音草稿编辑、搜索提供方扩展。

不过，**7 个 PR 中仅 1 个关闭、6 个待合并**，说明实现活动丰富，但从 PR 到主干的交付节奏仍然偏慢。

---

## 4. 社区热点

### 4.1 Issue #6983：记忆队列 LLM 并发应可配置

- 优先级：**P2**
- 状态：**OPEN**
- 评论数：**12**，为今日最活跃条目
- 链接：[GitHub Issue #6983](https://github.com/tinyhumansai/openhuman/issues/6983)
- 诉求：
  - 当前记忆队列固定为一次只处理一个 LLM 任务。
  - 使用云端摘要模型时，大规模首次导入可能需要数天。
  - `tinycortex` 已存在 `QueueConfig.llm_permits`，但 `tinymemory` 配置及上层未完整透传。

**背后诉求：**用户希望在成本、模型限流和吞吐之间自主平衡。该需求直接影响大规模知识导入效率，适合作为下一阶段的高价值基础设施改进。

### 4.2 Issue #7907：OpenHuman 看不到工作目录中的文件

- 优先级：**P1**
- 状态：**CLOSED**
- 评论数：**5**
- 链接：[GitHub Issue #7907](https://github.com/tinyhumansai/openhuman/issues/7907)
- 诉求：
  - 用户选择自定义工作目录，并将 `.apk` 等文件放入其中。
  - OpenHuman 未发现这些文件，因而无法处理相关任务。
- 该 Issue 在今日更新并关闭，但摘要中没有提供明确修复 PR。

**背后诉求：**自定义目录不仅是路径配置问题，还涉及文件监听、权限、容器挂载和 Agent 工具可见性等完整链路。关闭并不必然意味着功能已彻底解决，需要确认关闭原因。

### 4.3 PR #7040：可编辑的聊天语音听写

- 优先级：**P1**
- 状态：**OPEN**
- 链接：[GitHub PR #7040](https://github.com/tinyhumansai/openhuman/pull/7040)
- 内容：
  - 在文本编辑器加入 Dictate。
  - 语音转写先成为可编辑草稿，而非直接发送。
  - 提供 Finish、Discard、录音状态和本地化错误提示。
  - 复用已配置的转写服务及 WAV fallback。

**社区意义：**该 PR 创建时间较早且优先级为 P1，说明“可确认、可修改的语音输入”是长期关注项，而不只是短期实验功能。

### 4.4 PR #7279：新增 Keenable 搜索服务

- 状态：**OPEN**
- 链接：[GitHub PR #7279](https://github.com/tinyhumansai/openhuman/pull/7279)
- Keenable 将出现在 **Connections → Search**，支持 Search 和 Contents 角色。
- 声明无需 API key 即可使用，启用后由 TinySearch 提供接入能力。

**社区意义：**反映项目正持续扩大无密钥或低门槛搜索提供商生态，对个人 AI 助手的即用性和搜索冗余有积极意义。

---

## 5. Bug 与稳定性

### P1｜自定义工作目录中的文件无法被识别

- Issue：[GitHub Issue #7907](https://github.com/tinyhumansai/openhuman/issues/7907)
- 状态：已关闭
- 影响：Agent 无法发现和处理用户明确放入工作目录的文件，直接阻断任务执行。
- 修复 PR：**未提供明确关联 PR**。
- 风险判断：Issue 已关闭，但缺少可见修复证据，仍建议确认关闭是否源于修复、重复归档或配置限制。

### P2｜记忆队列固定串行处理导致首次导入耗时过长

- Issue：[GitHub Issue #6983](https://github.com/tinyhumansai/openhuman/issues/6983)
- 状态：开放
- 影响：大批量记忆导入在云端模型下可能耗时数天。
- 修复 PR：今日列表中**无明确关联 PR**。
- 风险判断：属于性能与可扩展性问题，不一定造成数据错误，但会显著影响大规模用户首次使用体验。

### P2｜流程节点摘要错误展示配置文本

- PR：[GitHub PR #8758](https://github.com/tinyhumansai/openhuman/pull/8758)
- 状态：待合并
- 影响：摘要可能与节点真实配置不一致，造成调试误判。
- 修复 PR：已有，即 #8758。

### P2｜Composio 认证错误信息被过度清洗

- PR：[GitHub PR #8753](https://github.com/tinyhumansai/openhuman/pull/8753)
- 关联 Issue：[GitHub Issue #5507](https://github.com/tinyhumansai/openhuman/issues/5507)
- 状态：待合并
- 影响：认证失败时用户看不到后端返回的关键可操作信息。
- 修复 PR：已有，即 #8753。

### P3｜托管覆盖率构建速度过慢

- PR：[GitHub PR #8756](https://github.com/tinyhumansai/openhuman/pull/8756)
- 状态：待合并
- 影响：CI 反馈延迟，间接拖慢修复与合并节奏。
- 修复 PR：已有，即 #8756。

---

## 6. 功能请求与路线图信号

### 6.1 记忆队列并发配置

- 需求来源：[GitHub Issue #6983](https://github.com/tinyhumansai/openhuman/issues/6983)
- 已有基础：`tinycortex` 已提供 `QueueConfig.llm_permits`。
- 路线判断：**较可能进入后续版本**。改动主要是将配置从 `tinymemory` 到核心队列完整透传，并补充默认值、限流及资源保护策略。
- 建议关注：除并发数外，还应考虑云模型限流、内存占用、失败重试和成本控制。

### 6.2 可编辑语音听写

- 提案：[GitHub PR #7040](https://github.com/tinyhumansai/openhuman/pull/7040)
- 路线判断：**高概率进入近期版本候选**，原因是优先级为 P1、实现范围明确，并复用现有转写配置。
- 用户价值：避免语音识别错误直接进入对话，提升无障碍输入和移动端体验。

### 6.3 Keenable 搜索接入

- 提案：[GitHub PR #7279](https://github.com/tinyhumansai/openhuman/pull/7279)
- 路线判断：**有较高接入价值，但仍取决于维护者对供应商范围和长期维护成本的评估**。
- 用户价值：增加无需密钥的搜索来源，降低连接配置门槛。

### 6.4 Agent 上下文压缩精细化

- 提案：[GitHub PR #8754](https://github.com/tinyhumansai/openhuman/pull/8754)
- 路线判断：**适合纳入近期 Agent 核心更新**。其目标是修正上下文 token 估算，属于直接影响长任务稳定性和成本的核心优化。
- 注意事项：文档文本长度并不等同于实际 token 数，后续可能还需引入更精确的 tokenizer 或分块估算。

### 6.5 CI 与 Rust 检查体系重构

- PR：[GitHub PR #8757](https://github.com/tinyhumansai/openhuman/pull/8757)
- PR：[GitHub PR #8756](https://github.com/tinyhumansai/openhuman/pull/8756)
- 路线判断：工程价值明确，但 #8757 已关闭；应关注维护者是否采用替代方案，以及并行化对 runner 成本和缓存资源的影响。

---

## 7. 用户反馈摘要

### 文件可见性是实际任务执行的高频阻塞点

在 [Issue #7907](https://github.com/tinyhumansai/openhuman/issues/7907) 中，用户明确选择了包含 `.apk` 文件的自定义工作目录，但 OpenHuman 完全无法发现这些文件。  
这表明用户的核心痛点不是“路径能否保存”，而是 **Agent 是否真正拥有访问、扫描和处理目录内容的能力**。该问题会直接阻断 APK 等文件处理任务，属于高影响使用问题。

### 大规模首次导入的等待时间不可接受

[Issue #6983](https://github.com/tinyhumansai/openhuman/issues/6983) 获得了今日最多的 **12 条评论**，说明并发能力并非边缘配置项，而是影响实际落地的核心体验。  
当用户使用云端摘要模型进行首次知识导入时，固定单任务串行处理可能持续数天，用户难以接受这种等待。评论所反映的诉求是：系统应允许用户提高吞吐，同时不破坏费用和限流边界。

### 语音输入需要“确认后再发送”

[PR #7040](https://github.com/tinyhumansai/openhuman/pull/7040) 的方案没有把语音识别结果直接发送，而是先转为可编辑草稿，并提供 Finish 与 Discard。  
这反映出用户和实现者都更重视 **识别纠错、发送前确认和音频兼容性**，而不是单纯追求更快的直接语音交互。

### 错误提示需要“可行动”，而非过度脱敏

[PR #8753](https://github.com/tinyhumansai/openhuman/pull/8753) 修复的目标是让 bearer-route 400 错误中的后端 JSON 详情能够被用户看到。  
其背后的反馈是：安全清洗不能以丢失排障关键信息为代价；应保留不含敏感凭据的错误结构，同时避免暴露认证令牌。

---

## 8. 待处理积压

### 8.1 长期开放的高价值需求：记忆队列并发

- [GitHub Issue #6983](https://github.com/tinyhumansai/openhuman/issues/6983)
- 创建于 **2026-10-03**，已更新至 **2026-11-17**，累计 **12 条评论**。
- 积压时间较长、讨论热度最高，且直接影响首次导入时长。
- 建议：尽快明确实现归属、配置入口、默认策略及并发上限，避免继续停留在讨论阶段。

### 8.2 创建时间较长但仍未合并的 P1 语音功能

- [GitHub PR #7040](https://github.com/tinyhumansai/openhuman/pull/7040)
- 创建于 **2026-10-06**，当前仍为 OPEN。
- 建议维护者明确评审结论、测试范围和剩余阻塞项；若依赖外部转写服务或音频兼容验证，应拆分可先合并的基础能力。

### 8.3 创建时间较长的搜索提供商接入

- [GitHub PR #7279](https://github.com/tinyhumansai/openhuman/pull/7279)
- 创建于 **2026-10-10**，当前仍为 OPEN。
- 建议检查 TinySearch 版本锁定、供应商接口变化和长期维护责任，并给出接受或拒绝的明确结论。

### 8.4 多条近期核心 PR 仍待合并

- [PR #8754](https://github.com/tinyhumansai/openhuman/pull/8754)
- [PR #8753](https://github.com/tinyhumansai/openhuman/pull/8753)
- [PR #8756](https://github.com/tinyhumansai/openhuman/pull/8756)
- [PR #8758](https://github.com/tinyhumansai/openhuman/pull/8758)

这些 PR 分别涉及上下文压缩、认证诊断、CI 性能和流程摘要准确性，均有明确用户价值，但尚未进入主干。建议维护者优先完成代码评审与 CI 验证，减少“提交活跃但交付滞后”的情况。

---

## 今日健康度结论

**整体健康度：良好偏积极，但合并吞吐与积压治理需要关注。**

- **活跃度：高**——24 小时内更新 7 个 PR，覆盖核心 Agent、CI、搜索、语音和错误诊断。
- **方向性：清晰**——多数改动直接对应吞吐、可诊断性、上下文成本和用户体验。
- **社区参与：中等偏集中**——评论主要集中在少数长期 Issue，尚未看到广泛、多线程讨论。
- **交付效率：一般**——6 个 PR 待合并，另有部分 PR 创建时间较长。
- **稳定性信号：正面但未完全落地**——CI 和 Agent 核心稳定性改进明显，但多数仍等待合并。
- **版本节奏：平缓**——今日无发布，用户需等待相关 PR 合并及后续版本发布后才能获得改进。

</details>

---
*本日报由 [Big Model Radar](https://github.com/96loveslife/big_model_radar) 自动生成。*
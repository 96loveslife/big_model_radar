# OpenClaw 生态日报 2026-11-22

> Issues: 398 | PRs: 500 | 覆盖项目: 8 个 | 生成时间: 2026-11-22 05:59 UTC

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

**统计日期：2026-11-22**  
**项目：** [openclaw/openclaw](https://github.com/openclaw/openclaw)

---

## 1. 今日速览

OpenClaw 过去 24 小时保持极高开发活跃度，共更新 **398 条 Issue**、**500 条 PR**，其中 Issue 新开或活跃 279 条、关闭 119 条，PR 待合并 297 条、合并或关闭 203 条；整体开发吞吐很高，但积压同样庞大。当前讨论重点集中在 **Gateway 稳定性、更新/Doctor 流程、插件迁移、Agent 会话状态和内存占用**。今日没有新版本发布，因此近期修复尚不能通过正式 Release 分发给用户，若干已关闭 Issue 所述修复已随 `v2026.11.5`、`v2026.11.6` 或 `main` 发布，但最新 Issue 中仍有不少“已合并但未进入发布版本”的情况。综合来看，项目处于**高活跃、高风险收敛阶段**：功能迭代非常活跃，但 Gateway 生命周期、升级原子性、跨进程状态同步和多 Agent 可靠性尚未完全稳定。

---

## 3. 项目进展

今日没有可确认的新版本发布，但已有不少 PR 被合并或关闭，推动了升级链路、插件加载、Agent 会话和 UI 稳定性改进。

### 已合并/关闭的重要 PR

- **停止无实际效果的 `sessions_yield` 循环**  
  [#203319](https://github.com/openclaw/openclaw/pull/203319) 防止 Worker 会话获得其无法使用的等待工具并陷入重复调用，对应 Agent 协作稳定性改进。  
  相关能力还包括 [#203292](https://github.com/openclaw/openclaw/pull/203292)：允许专用 Worker 上的 Agent 启动子会话。

- **升级失败时恢复 SQLite WAL 模式**  
  [#202801](https://github.com/openclaw/openclaw/pull/202801) 修复更新回滚后数据库可能停留在 `journal_mode=DELETE` 的问题，关联 [#202772](https://github.com/openclaw/openclaw/issues/202772)。这是对更新、迁移和回滚链路的重要加固。

- **无实际更新时不再复制全部数据库**  
  [#201978](https://github.com/openclaw/openclaw/pull/201978) 避免每次 `openclaw update` 都预先复制大型状态目录，减少磁盘占用和升级耗时。

- **Gateway Spawn Broker 重启后恢复命令能力**  
  [#201631](https://github.com/openclaw/openclaw/pull/201631) 修复连续替换进程失败后 Broker 不再继续启动的问题，关联 [#201609](https://github.com/openclaw/openclaw/issues/201609)。

- **Nostr 自动任务公告送达所有者**  
  [#203409](https://github.com/openclaw/openclaw/pull/203409) 修复 Cron 自动任务向 Nostr owner 投递时仍携带 `nostr:<hex>` 路由前缀、导致消息无法送达的问题。

- **macOS 重启后恢复 Codex 会话启动**  
  [#203414](https://github.com/openclaw/openclaw/pull/203414) 处理 Codex app-server 陈旧注册信息指向复用 PID 的情况，修复重启后无法启动新会话的问题，关联 [#203395](https://github.com/openclaw/openclaw/issues/203395)。

- **Windows 插件重载 EPERM 问题已关闭**  
  [#163139](https://github.com/openclaw/openclaw/issues/163139) 所述 `plugins.reload` 在原生 Windows 准备 host-package link 时失败并拖住 Gateway 的问题已完成处理。

- **Collector/Claude CLI 后端会话结束问题已修复**  
  [#141474](https://github.com/openclaw/openclaw/issues/141474) 已关闭；修复由 [#164445](https://github.com/openclaw/openclaw/pull/164445) 等提交提供，并已进入 `v2026.11.5`、`v2026.11.6`。

- **CLI 多行参数被 Windows shim 截断的问题已关闭**  
  [#158817](https://github.com/openclaw/openclaw/issues/158817) 确认 Windows `openclaw.cmd` 对 `--message` 等多行参数的截断问题已完成处理。

- **跨进程追加 transcript 引发唯一键冲突的问题已关闭**  
  [#199155](https://github.com/openclaw/openclaw/issues/199155) 涉及 Gateway 驻留会话 actor 看不到 CLI `message send` 写入记录的问题，修复已关闭。

- **Agent Picker 隐藏非展示 Agent 的需求已关闭**  
  [#166678](https://github.com/openclaw/openclaw/issues/166678) 所述“仅从选择器隐藏 Agent、仍保留 spawn 能力”的需求已获得处理。

### 推进程度判断

当天 PR 更新量达到 500 条，且有 203 条合并或关闭，说明代码流转非常快。不过，大量 PR 仍处于等待维护者、等待作者、等待证明或安全审查状态，且若干核心问题跨多个版本持续存在。项目不是“停滞”，而是处于**大规模重构与可靠性收敛并行**阶段；短期功能推进明显，但升级、Doctor、插件迁移和 Agent 状态管理仍需后续发布验证。

---

## 4. 社区热点

### 高热度 Issue

1. **大型外部插件捕获导致 Gateway 阻塞数分钟**  
   [#160959](https://github.com/openclaw/openclaw/issues/160959) — 85 条评论  
   这是今日最热问题。2026.9.6 引入插件生成捕获后，大型依赖树会在 Gateway 事件循环上同步处理，造成启动和运行时重发布期间长时间卡顿。其核心诉求是：**插件准备、捕获和重载必须异步化、隔离化，不能阻塞主线程**。目前标记为 P0，但未见明确的新 fix PR。

2. **macOS 上 `gateway stop` 和 `stop --force` 均无法完成**  
   [#191944](https://github.com/openclaw/openclaw/issues/191944) — 38 条评论  
   macOS 进程祖先检查失败导致标准停止流程不可用，迫使用户依赖 managed handoff 或其他终端手段。用户对 Gateway 生命周期管理的诉求非常明确：停止命令必须可靠，并提供可诊断的降级路径。

3. **Post-install Doctor 的 WAL 验证失败导致升级仅完成一半**  
   [#197083](https://github.com/openclaw/openclaw/issues/197083) — 32 条评论  
   `2026.11.1 → 2026.11.3` 更新后，Doctor 因 WAL publication verification 失败而拒绝回滚，留下“核心已升级、状态迁移未完成”的半升级状态。该问题直接损害升级可信度，也是当天最重要的发布风险之一。

4. **Prompt cache 从未复用**  
   [#182891](https://github.com/openclaw/openclaw/issues/182891) — 22 条评论，1 个赞  
   用户发现每轮请求都出现 `cache read dropped N -> 0`，并怀疑 envelope rewrite、`runtimeContextCarrier` 变化及 turn 内上下文丢弃共同破坏缓存。社区核心诉求是**跨轮次稳定缓存键与可解释的缓存命中诊断**。

5. **2026.11.5 Candidate Doctor 因插件迁移冲突阻断升级**  
   [#200606](https://github.com/openclaw/openclaw/issues/200606) — 19 条评论  
   插件迁移义务发生变化时，Doctor 报告 `changed=[]` 仍阻止更新。用户期待迁移检查能区分真实冲突、幂等迁移和检测噪声，避免“版本越新越难升级”。

6. **Windows Beta 更新在 package-swap 阶段失败**  
   [#200756](https://github.com/openclaw/openclaw/issues/200756) — 15 条评论  
   Windows `beta.2 → beta.4` 在 baseline package scan 和 rollback tree 校验时失败。用户关注升级原子性、回滚树一致性以及 Beta 渠道的可靠性。

7. **Windows Control UI 更新卡在 “Activating”**  
   [#169844](https://github.com/openclaw/openclaw/issues/169844) — 14 条评论  
   更新过程中 Scheduled Task 被禁用、Gateway 停止，但新包未激活。该问题可能导致服务长期不可用，且属于 P0 级的发布阻断风险。

8. **Gateway 启动 RSS 增至约 1.9 GB**  
   [#181432](https://github.com/openclaw/openclaw/issues/181432) — 14 条评论  
   Linux ARM64 从 `2026.9.4` 升级到 `2026.10.5` 后，空载内存从约 300 MB 增至 1.89 GB，并伴随 SQLite 事务变慢。用户尤其关注**长期稳定运行、嵌入式部署和资源上限**。

### 高热度 PR

- **允许从本机解绑 OpenClaw ID claw**  
  [#201779](https://github.com/openclaw/openclaw/pull/201779)  
  面向设备生命周期和身份安全：允许 owner 注销本机上的 claw，同时保持协议层变更已先行落地。该 PR 涉及安全边界，需重点审查。

- **未配置模型时停止向 OpenAI 发送聊天**  
  [#203271](https://github.com/openclaw/openclaw/pull/203271)  
  修复新安装环境仍默认显示并实际使用 OpenAI 模型的问题，涉及 Gateway、CLI、Agent 和多个渠道。社区诉求是**默认配置必须显式、不可暗中调用外部服务**。

- **Git 安装改用 prepared release 与常驻 launcher 更新**  
  [#203194](https://github.com/openclaw/openclaw/pull/203194)  
  面向 P1，目标是减少原地更新失败后 Gateway 宕机或卡在 recovery 的风险，代表升级架构向更原子、可回滚方向演进。

- **提供统一的 Provider 登录失败处理**  
  [#203394](https://github.com/openclaw/openclaw/pull/203394)  
  统一处理拒绝授权、地址粘贴错误、回调端口占用、设备码过期、网络中断等场景，以改善 OAuth/设备码登录体验。

- **上下文压力感知的 continuation 工具**  
  [#129388](https://github.com/openclaw/openclaw/pull/129388)  
  提出 `continue_work`、`continue_delegate`、`request_compaction` 等运行时能力，解决长任务 Agent 自主续跑和上下文压力管理。该 PR 规模大、涉及安全和会话边界，仍需补足证明。

- **将无项目会话迁移至项目**  
  [#202306](https://github.com/openclaw/openclaw/pull/202306)  
  允许用户在默认工作区直接要求“开始做 OpenClaw”，由模型将会话移入已注册项目，降低项目工作流切换成本。

---

## 5. Bug 与稳定性

### P0 / 发布阻断

- **Gateway 捕获大型外部插件时阻塞数分钟**  
  [#160959](https://github.com/openclaw/openclaw/issues/160959)  
  影响：启动、运行时重发布和主事件循环活性。  
  **Fix PR：未发现明确关联的新 PR。**

- **Windows Control UI 更新卡死并停用 Scheduled Task**  
  [#169844](https://github.com/openclaw/openclaw/issues/169844)  
  影响：Gateway 可能完全不可用。  
  **Fix PR：未发现明确关联的新 PR。**

- **`web_fetch` 冷回退同步捕获无关插件，造成 Gateway 活性停顿**  
  [#166641](https://github.com/openclaw/openclaw/issues/166641)  
  与 [#160959](https://github.com/openclaw/openclaw/issues/160959) 同属插件捕获阻塞主线程的问题域。  
  **Fix PR：未发现明确关联的新 PR。**

### P1 / 高严重度

- **Codex helper 完成后无法恢复父 Agent，导致目标暂停和锁定**  
  [#196199](https://github.com/openclaw/openclaw/issues/196199)  
  自 `2026.10.10` 起出现回归，涉及父子 Agent 唤醒与消息投递。  
  **Fix PR：未发现明确关联。**

- **Gateway 重启后大量 Agent 永久处于 degraded 状态**  
  [#190307](https://github.com/openclaw/openclaw/issues/190307)  
  高 Agent 数量和大型 SQLite 状态下触发 admission timeout，修复建议却指向完整 `doctor --fix`。  
  **Fix PR：未发现明确关联。**

- **Gateway drain 等待完整 `TimeoutStopSec`，关闭后的资源仍被周期任务访问**  
  [#153899](https://github.com/openclaw/openclaw/issues/153899)  
  systemd 下重启可能等待数分钟，并产生无效定时任务错误。  
  **Fix PR：未发现明确关联。**

- **Codex 数据/设置升级未完成状态持续存在**  
  [#197515](https://github.com/openclaw/openclaw/issues/197515)  
  报告称 [#186506](https://github.com/openclaw/openclaw/pull/186506) 的修复已合并，但尚未进入发布版本，说明发布分支同步存在滞后。

- **Gateway 在部分版本内存约为旧版 2.5 倍，启动和首包慢 3–5 倍**  
  [#169797](https://github.com/openclaw/openclaw/issues/169797)  
  单 CPU 主机上的影响尤其明显。  
  **Fix PR：未发现明确关联。**

- **Matrix 图片生成完成与新消息竞态导致消费者永久关闭**  
  [#191476](https://github.com/openclaw/openclaw/issues/191476)  
  同一房间后续所有 mailbox run 都可能失败。  
  **Fix PR：未发现明确关联。**

- **Git 安装更新流程需要原子化改造**  
  [#203194](https://github.com/openclaw/openclaw/pull/203194)  
  **已有 fix PR：是**，但仍为开放状态。

- **升级回滚后 WAL 模式丢失**  
  [#202801](https://github.com/openclaw/openclaw/pull/202801)  
  **已有 fix PR：是**；同时 [#197083](https://github.com/openclaw/openclaw/issues/197083) 表明 Doctor/WAL 发布验证仍需进一步统一。

### P2 / 重要稳定性问题

- **Prompt cache 每轮归零**  
  [#182891](https://github.com/openclaw/openclaw/issues/182891)  
  **Fix PR：未发现明确、已确认关联。**

- **系统提示词 section churn 再次破坏缓存**  
  [#202001](https://github.com/openclaw/openclaw/issues/202001)  
  与 [#182891](https://github.com/openclaw/openclaw/issues/182891) 可能属于同一底层问题。  
  **Fix PR：未发现明确关联。**

- **Windows Beta 更新 package-swap 失败**  
  [#200756](https://github.com/openclaw/openclaw/issues/200756)  
  **Fix PR：未发现明确关联。**

- **macOS `gateway stop` 失败**  
  [#191944](https://github.com/openclaw/openclaw/issues/191944)  
  **Fix PR：未发现明确关联。**

- **远程 embedding 阻塞时 `memory_search` 卡满 15 秒，无超时/重试配置**  
  [#136405](https://github.com/openclaw/openclaw/issues/136405)  
  **Fix PR：未发现明确关联。**

- **请求方权限被撤销后，Subagent 完成消息永久投递失败**  
  [#166964](https://github.com/openclaw/openclaw/issues/166964)  
  父会话可能永久等待，且未记录撤销原因。  
  **Fix PR：未发现明确关联。**

- **Gateway 基线内存增长与 SQLite 事务超时**  
  [#181432](https://github.com/openclaw/openclaw/issues/181432)  
  **Fix PR：未发现明确关联。**

- **Agent 没有运行级 turn/token 预算，工具循环检测默认关闭**  
  [#178373](https://github.com/openclaw/openclaw/issues/178373)  
  可能导致费用失控、历史反复计费和长循环。  
  **Fix PR：未发现明确关联。**

### 已关闭的重要修复

- Collector 调用 `sessions_yield` 永久等待，已修复并进入 `v2026.11.5/6`：  
  [#141474](https://github.com/openclaw/openclaw/issues/141474)
- Windows 多行 CLI 参数被截断：  
  [#158817](https://github.com/openclaw/openclaw/issues/158817)
- 跨进程 transcript 写入导致 `UNIQUE(session_id, seq)`：  
  [#199155](https://github.com/openclaw/openclaw/issues/199155)
- Windows `plugins.reload` EPERM：  
  [#163139](https://github.com/openclaw/openclaw/issues/163139)
- 无进展 `sessions_yield` 重复循环：  
  [#180941](https://github.com/openclaw/openclaw/issues/180941)

---

## 6. 功能请求与路线图信号

### 高概率进入近期迭代

- **Worker/专用节点上的多 Agent 协作**  
  [#203292](https://github.com/openclaw/openclaw/pull/203292) 与 [#203319](https://github.com/openclaw/openclaw/pull/203319) 已形成配套改动：先允许 Worker 启动子会话，再避免向不支持等待能力的 Worker 暴露 `sessions_yield`。这是今日最明确的产品推进信号之一。

- **Provider 登录体验统一**  
  [#203379](https://github.com/openclaw/openclaw/pull/203379) 将 Provider 登录入口前移到插件设置；[#203394](https://github.com/openclaw/openclaw/pull/203394) 统一错误解释、粘贴恢复和设备码流程。结合“未配置模型不得默认调用 OpenAI”的 [#203271](https://github.com/openclaw/openclaw/pull/203271)，近期路线明显聚焦**Provider 接入、登录与默认配置安全**。

- **更新链路原子化**  
  [#203194](https://github.com/openclaw/openclaw/pull/203194)、[#202801](https://github.com/openclaw/openclaw/pull/202801)、[#201978](https://github.com/openclaw/openclaw/pull/201978) 分别从更新架构、WAL 恢复和无操作更新开销切入，显示更新器正在经历系统性重构。

- **UI 项目与会话迁移**  
  [#202306](https://github.com/openclaw/openclaw/pull/202306) 允许将无项目会话直接迁入项目，回应了多项目、多工作区用户的高频操作需求；安全审查仍是合并前门槛。

- **可配置主题背景装饰**  
  [#203308](https://github.com/openclaw/openclaw/pull/203308) 将主题背景图改为 opt-in，属于低风险 UI 偏好改进，较可能较快进入下一版本。

### 中期可能纳入

- **长任务前台运行的可执行 checkpoint 与 bounded yield**  
  [#138990](https://github.com/openclaw/openclaw/issues/138990) 与大型 continuation PR [#129388](https://github.com/openclaw/openclaw/pull/129388) 指向同一趋势：为长时间 Agent 执行增加运行时预算、状态汇报、续跑和压缩机制。需求强，但涉及会话状态和安全边界，短期不一定直接进入稳定版。

- **Agent Picker 隐藏机制**  
  [#166678](https://github.com/openclaw/openclaw/issues/166678) 已关闭，说明“展示”和“可调度”解耦已有落地迹象。

- **Cron 创建者权限与会话级持久化**  
  [#166336](https://github.com/openclaw/openclaw/issues/166336) 已关闭；[#187264](https://github.com/openclaw/openclaw/pull/187264) 进一步提出非 owner 的同会话 Cron 调度能力。这将完善共享频道中的多租户工作流，但需要清晰的安全边界。

- **Active Memory 插件化深度检索升级**  
  [#151178](https://github.com/openclaw/openclaw/issues/151178) 提出由单一 Provider 决定是否进入 deep recall，属于可扩展架构方向，但仍需产品决策。

### 较明确的功能提案

- 多策略别名映射到同一模型：[#140213](https://github.com/openclaw/openclaw/issues/140213)
- Memory FTS 增加 CJK bigram tokenizer：[#170997](https://github.com/openclaw/openclaw/issues/170997)
- MCP OAuth 支持预注册 `authorization_code` 客户端：[#116052](https://github.com/openclaw/openclaw/issues/116052)
- Microsoft Teams 文件上传动态解析 SharePoint 站点：[#136271](https://github.com/openclaw/openclaw/issues/136271)
- Telegram `sendDice` 原生骰子工具：[#137110](https://github.com/openclaw/openclaw/issues/137110)
- Talk/语音通话支持关闭或替换任务确认播报：[#184803](https://github.com/openclaw/openclaw/issues/184803)
- Control UI、macOS、iOS 支持隐藏 Agent：[#166678](https://github.com/openclaw/openclaw/issues/166678)
- Control UI 快捷键可配置：[#163739](https://github.com/openclaw/openclaw/issues/163739)

---

## 7. 用户反馈摘要

### 真实使用场景

- 用户将 OpenClaw 部署在 **Linux ARM64、Linux x64、Windows 11、macOS Intel/Apple Silicon** 等不同环境，并普遍使用 Telegram、Slack、Teams、Matrix、Discord、Mattermost 和 WebChat。
- 高频场景包括多 Agent 组织、群聊中多个 Bot 账号协作、专用 Worker 节点、Cron 自动任务、Codex helper、共享 Slack 编码任务、MCP 接入、Voice Call 和 Teams 文件上传。
- 大型状态库和多 Agent 部署越来越常见，单个 Agent SQLite 可达数百 MB，用户开始关注启动内存、数据库事务和长期运行稳定性。

### 主要痛点

1. **升级不可信**  
   用户最担心更新过程中服务停掉、状态半迁移、Doctor 阻断、回滚失败或插件迁移冲突。相关反馈见 [#197083](https://github.com/openclaw/openclaw/issues/197083)、[#200606](https://github.com/openclaw/openclaw/issues/200606)、[#169844](https://github.com/openclaw/openclaw/issues/169844)。

2. **Gateway 生命周期命令不可靠**  
   `stop`、`stop --force`、Control UI 更新和 Worker 进程管理均出现失败或挂起，说明用户对日常运维命令的基本信任受到明显影响。见 [#191944](https://github.com/openclaw/openclaw/issues/191944)。

3. **成本与缓存可观测性不足**  
   多个 Issue 显示 Prompt Cache 每轮归零、历史反复计费、工具循环默认关闭。用户需要明确知道缓存为何失效、一次 Agent run 最多消耗多少 token，以及何时应该主动 yield 或 compaction。见 [#182891](https://github.com/openclaw/openclaw/issues/182891)、[#202001](https://github.com/openclaw/openclaw/issues/202001)、[#178373](https://github.com/openclaw/openclaw/issues/178373)。

4. **多 Agent 完成投递存在“孤儿会话”风险**  
   父 Agent 等待子 Agent、权限撤销、Gateway 重启、跨进程 transcript 写入都可能造成永久等待或状态不一致。见 [#196199](https://github.com/openclaw/openclaw/issues/196199)、[#166964](https://github.com/openclaw/openclaw/issues/166964)、[#190307](https://github.com/openclaw/openclaw/issues/190307)。

5. **插件机制影响了核心可用性**  
   插件捕获不仅慢，还会阻塞 Gateway 主线程。用户原本将插件视为扩展能力，现在却发现扩展包的大小和依赖可能拖垮整个系统。见 [#160959](https://github.com/openclaw/openclaw/issues/160959)、[#166641](https://github.com/openclaw/openclaw/issues/166641)。

6. **本地化与中文检索仍有缺口**  
   CJK 两字查询无法被 trigram 命中，用户明确提出 bigram tokenizer 方案，说明中文使用场景已进入实际需求层。见 [#170997](https://github.com/openclaw/openclaw/issues/170997)。

### 满意点

- 修复速度较快，部分复杂问题在数周内完成闭环，例如 [`sessions_yield` 永久等待](https://github.com/openclaw/openclaw/issues/141474) 已修复并进入两个稳定版本。
- 跨项目功能覆盖较广，CLI、Gateway、Desktop、Web UI、移动端和多种消息渠道同步迭代。
- PR 通常附带复现条件、用户影响、证明等级和风险标签，便于维护者审查。
- 部分新 PR 明显在改善操作体验，例如不再无故复制大型数据库、Provider 登录入口更易发现、Cron 失败会主动通知用户。

### 不满点

- “修复已合并但尚未进入发布版本”的情况反复出现，如 [#197515](https://github.com/openclaw/openclaw/issues/197515)。
- 部分 Issue 被标为已修复，但现场仍报告版本问题，用户难以判断究竟需要升级、修复 Doctor，还是存在新回归。
- 高频 PR 中有大量“等待维护者”“等待作者”“需要证明”“需要安全审查”，审核吞吐可能无法匹配开发吞吐。

---

## 8. 待处理积压

### 长期高严重度 Issue

- **插件捕获阻塞 Gateway 主线程**  
  [#160959](https://github.com/openclaw/openclaw/issues/160959)  
  自 2026-09-29 起持续讨论，85 条评论，P0 且仍缺少明确新修复 PR。应优先拆分“依赖解析”“插件捕获”“运行时重发布”三个耗时阶段并隔离主线程。

- **Gateway drain 未及时终止周期任务**  
  [#153899](https://github.com/openclaw/openclaw/issues/153899)  
  自 2026-09-20 起未关闭，涉及 systemd 停止超时和关闭后资源访问。应建立明确的 shutdown 状态机及生命周期任务取消顺序。

- **远程 embedding 无超时和重试策略**  
  [#136405](https://github.com/openclaw/openclaw/issues/136405)  
  自 2026-09-02 起持续存在，属于外部服务故障放大器。建议提供可配置 timeout、有限重试、熔断和明确的 fallback。

- **Agent 运行缺少 turn/token 预算**  
  [#178373](https://github.com/openclaw/openclaw/issues/178373)  
  自 2026-10-20 起未关闭，直接关联费用、循环与长任务可靠性。

- **Matrix consumer 关闭后房间永久卡死**  
  [#191476](https://github.com/openclaw/openclaw/issues/191476)  
  竞态问题容易在生产环境触发，且需要生命周期重建与并发保护测试。

- **MCP OAuth 不支持预注册客户端**  
  [#116052](https://github.com/openclaw/openclaw/issues/116052)  
  自 2026-07-29 起持续存在，限制企业 OAuth 服务接入，已有安全审查需求但尚无明确 PR。

### 等待维护者/作者/证明的长期 PR

- **上下文压力感知 continuation**  
  [#129388](https://github.com/openclaw/openclaw/pull/129388)  
  等待 proof，涉及会话状态、安全边界和跨功能兼容，且已积累较长时间。

- **OpenClaw ID claw 本机解绑**  
  [#201779](https://github.com/openclaw/openclaw/pull/201779)  
  涉及身份、设备和成员权限，属于安全敏感变更，应明确威胁模型、回滚和跨设备行为。

- **保存的请求方只在任务开始时授权一次**  
  [#202513](https://github.com/openclaw/openclaw/pull/202513)  
  涉及 Gateway 安全边界与“一次性准入”语义，需安全审查和集成测试。

- **历史 blob 锁改用内核锁**  
  [#199982](https://github.com/openclaw/openclaw/pull/199982)  
  等待作者反馈，且带有兼容性风险；需要验证旧锁文件迁移、异常退出和 PID 复用场景。

- **条件清理 worktree 时保护活跃 owner**  
  [#203270](https://github.com/openclaw/openclaw/pull/203270)  
  涉及数据删除边界，应确保 lease、忽略文件和强制删除路径均经过审计。

### 维护建议

1. 将 [#160959](https://github.com/openclaw/openclaw/issues/160959)、[#169844](https://github.com/openclaw/openclaw/issues/169844)、[#197083](https://github.com/openclaw/openclaw/issues/197083) 设为下一轮发布前的阻断项。
2. 为插件加载、Doctor、升级回滚建立统一的超时、事务边界和主线程隔离测试。
3. 建立“修复已合并 → 已进入发布分支 → 已发布”的自动状态跟踪，减少 [#197515](https://github.com/openclaw/openclaw/issues/197515) 一类“代码已修但用户未收到”的落差。
4. 将 Prompt Cache、token budget 和 continuation 合并为统一的 Agent 运行成本控制路线，而不是分别修复。
5. 对等待超过较长时间且缺少复现或证明的 PR，公开标注“需要维护者决策”“需要环境”“等待产品定义”，避免长期隐性积压。

---

## 项目健康度结论

**开发活跃度：很高**  
**修复吞吐：较高**  
**版本交付节奏：偏慢，过去 24 小时无新 Release**  
**稳定性风险：中高，集中在 Gateway 生命周期、更新迁移、插件阻塞和多 Agent 会话状态**  
**社区讨论质量：高，Issue/PR 信息结构较完整，但维护审核与发布验证压力较大**

总体判断：OpenClaw 今日呈现明显的**高速度开发与高复杂度收敛并存**状态。短期功能创新持续推进，更新器和 Worker 多 Agent 架构也出现明确改进方向；但在正式发布新版本前，应优先收敛插件主线程阻塞、升级半完成、Gateway 停止/重启失效和 Agent 完成投递丢失等高严重度问题。

---

## 横向生态对比

# 个人 AI 助手 / 自主智能体开源生态横向分析报告

**统计日期：2026-11-22**  
**样本项目：OpenClaw、NanoBot、PicoClaw、IronClaw、LobsterAI、QwenPaw、Hermes Agent、OpenHuman**

---

## 1. 生态全景

个人 AI 助手与自主智能体生态正从“聊天入口与模型接入”快速转向**运行时可靠性、多 Agent 协作、跨渠道一致性和原子化升级**，但各项目成熟度分化明显。OpenClaw、Hermes Agent 以最高吞吐牵引技术演进，前者强在完整运行时、插件生态与多渠道覆盖，后者强在 Gateway/Desktop/Web 会话统一；LobsterAI 则快速推进 OpenClaw 向 DSH 运行时迁移。NanoBot 处于发布工程与 WebUI/工具协议完善阶段，QwenPaw 聚焦 Console、记忆和企业部署；PicoClaw、IronClaw、OpenHuman 则以 OpenAI-compatible Provider 扩展为主要增量。

生态当前的共性短板是：**开发速度显著快于发布与集成速度**，大量修复停留在 PR 或已合入但未发布阶段。Provider 接入正逐渐标准化，但更新原子性、Agent 状态机、长任务预算、缓存可观测性和插件隔离仍是跨项目难题。

---

## 2. 各项目活跃度对比

> 说明：Issue/PR 均为过去 24 小时更新量；“健康度”综合考虑吞吐、合并率、Release、严重问题和积压，不代表长期趋势。

| 项目 | Issues | PR | Release | 24h 活动特征 | 健康度评估 |
|---|---:|---:|---|---|---|
| **OpenClaw** | 398 | 500 | 无 | Issue 活跃 279、关闭 119；PR 待合并 297、合并/关闭 203 | **活跃度最高，但稳定性风险中高**；升级、Gateway、插件阻塞是主要风险 |
| **Hermes Agent** | 50 | 50 | 无 | 47 PR 待合并、仅 3 条合并/关闭；全部 Issue 开放 | **高活跃、高风险、高积压**；会话暂停与 Windows Gateway 死锁突出 |
| **NanoBot** | 0 | 12 | **v0.4.2** | 9 PR 待合并、3 条合并/关闭；无 Issue 数据 | **良好**；发布活跃，但成熟 PR 积压、用户反馈可见度偏低 |
| **LobsterAI** | 1 | 10 | 无 | 10 条 PR 全部合并/关闭，无待合并 PR | **良好**；集中推进 DSH 迁移与多 Agent，发布验证仍需加强 |
| **QwenPaw** | 6 | 11 | 无 | 4 Issue 活跃、2 关闭；11 PR 全部待合并 | **中高但收口偏弱**；Console/移动端问题有修复，但全部未合并 |
| **PicoClaw** | 2 | 5 | 无 | 1 Issue 活跃、1 关闭；1 PR 待合并、4 关闭，多为 stale | **中等偏低**；Provider 扩展明确，但交付连续性弱 |
| **OpenHuman** | 1 | 1 | 无 | 1 Issue、1 PR，均未闭环 | **中等偏稳定、动能偏低**；功能与策略提示各有一条待处理项 |
| **IronClaw** | 1 | 0 | 无 | 仅新增 LLMTR Provider Issue，0 PR | **低活跃**；需求路径清晰，但尚无实现落地 |

### 活跃度分层

- **第一梯队：OpenClaw、Hermes Agent**  
  贡献与讨论规模最大，Issue/PR 吞吐远超其他项目，但版本交付和集成质量承压。
- **第二梯队：NanoBot、LobsterAI、QwenPaw**  
  NanoBot 有稳定发布；LobsterAI 合并效率突出；QwenPaw 候选修复丰富但合并率过低。
- **第三梯队：PicoClaw、OpenHuman、IronClaw**  
  以单点功能提案或 Provider 扩展为主，尚未形成高频社区反馈与稳定发布节奏。

---

## 3. OpenClaw 在生态中的定位

### 3.1 优势

1. **社区和开发吞吐显著领先**  
   OpenClaw 单日更新 **398 条 Issue、500 条 PR**，约为第二梯队项目的十至数十倍。其今日更新的 Issue 数量约是 Hermes Agent 的 8 倍、PR 数量约为 NanoBot 的 42 倍，说明其拥有更大的贡献者、Issue 和测试场景覆盖面。

2. **最完整的个人 Agent 运行时形态**  
   已覆盖 Gateway、CLI、Control UI、桌面端、移动端、插件、Cron、MCP、Memory、Worker、多渠道消息和多种 Agent 协作场景。相比 NanoBot、QwenPaw 的单点 Agent 框架，OpenClaw 更接近“个人 AI 操作系统”。

3. **插件与渠道生态是核心壁垒**  
   Telegram、Slack、Teams、Matrix、Discord、Mattermost、WebChat 等渠道，加上插件、Provider、MCP 和 Worker，使 OpenClaw 具备较强的横向扩展性。

4. **可靠性和安全治理意识较强**  
   今日大量 PR 涉及更新回滚、WAL 恢复、OpenAI 默认调用边界、本机 ID 解绑、Provider 登录失败处理、工具安全边界等，表明项目已从功能扩张进入治理与收敛阶段。

5. **问题反馈工程化程度高**  
   Issue/PR 普遍包含复现、影响范围、证明等级和风险标签，为技术决策提供了较好的输入质量。

### 3.2 技术路线差异

- **OpenClaw：插件化、Gateway 中心、运行时平台化**  
  强调统一 Gateway、插件运行时、Worker、多 Agent、多渠道及状态持久化。优势是能力广，代价是生命周期、升级迁移和并发状态复杂度最高。
- **Hermes Agent：统一会话控制面**  
  明确推动 CLI、Remote Desktop、Web 切换至 Gateway session authority，倾向收拢多入口状态源。
- **LobsterAI：运行时迁移与产品化封装**  
  从 OpenClaw 迁向 DSH，同时强化桌面伙伴、多分身和办公工作流，呈现“上游运行时 + 消费端产品”的路线。
- **NanoBot：轻量、多渠道与工具协议标准化**  
  更强调 WebUI/TUI/文本渠道的一致性、SSH 网关、文件与 MCP 工具输出规范。
- **QwenPaw：Console、记忆插件和企业部署**  
  重点在反向代理子路径、OpenViking 记忆、办公 Skills 和前端可访问性。
- **PicoClaw / IronClaw / OpenHuman：Provider 目录扩展**  
  今日主要信号是 LLMTR/OpenAI-compatible 网关接入，核心诉求是统一入口、多模型目录和低配置成本。

### 3.3 社区规模对比

| 指标 | OpenClaw | Hermes | 其余项目 |
|---|---|---|---|
| 单日 Issue 更新 | 398 | 50 | 0–6 |
| 单日 PR 更新 | 500 | 50 | 0–12 |
| 高热 Issue 评论数 | 最高 85 | 最高 11 | 多为 0–2 |
| Release 节奏 | 今日无，但近期持续发布 | 今日无 | NanoBot 今日发布；其余无 |

OpenClaw 的优势不仅是代码量，更在于其问题空间横跨操作系统、数据库、消息渠道、桌面端和安全边界，因而社区规模和发现问题的密度更高。但这也意味着其维护成本远高于其他项目。

---

## 4. 共同关注的技术方向

### 4.1 OpenAI-compatible Provider 标准化接入

涉及 **PicoClaw、IronClaw、OpenHuman**，并与 **OpenClaw、NanoBot** 的 Provider 生态形成呼应。

- PicoClaw：新增 LLMTR Provider PR [#3471](https://github.com/sipeed/picoclaw/pull/3471)
- IronClaw：LLMTR 内置 Provider 请求 [#8174](https://github.com/nearai/ironclaw/issues/8174)
- OpenHuman：LLMTR 内置云 Provider PR [#8764](https://github.com/tinyhumansai/openhuman/pull/8764)
- OpenClaw：Provider 登录失败统一处理、未配置模型时停止默认调用 OpenAI
- NanoBot：OpenRouter 原生图像生成适配

**共同诉求：**

- 支持 `vendor/model` 命名空间；
- 统一 API Key、Base URL、模型发现与错误映射；
- 多个 Provider 可并存且互不覆盖；
- 降低手工配置自定义兼容端点的成本；
- 明确请求实际路由和数据托管地域。

**趋势判断：** 逐个硬编码 Provider 的模式正在接近边际收益递减，未来更可能转向**通用兼容端点模板 + 可插拔 Provider 描述 + 路由元数据**。

### 4.2 多 Agent 协作与任务生命周期

涉及 **OpenClaw、Hermes Agent、LobsterAI**：

- OpenClaw：Worker 启动子会话、停止无效 `sessions_yield` 循环；
- LobsterAI：DSH 跨 Agent 发现、专业 Agent 委派，并复用工作区、记忆、技能和模型；
- Hermes Agent：子任务阻塞后父 Agent 静默停止、Kanban 恢复卡片被重复分解。

**共同诉求：**

- 委派后必须有可追踪、可恢复的完成状态；
- 父任务不能因单个子任务阻塞而静默退出；
- 恢复任务不得重新分解或覆盖新执行；
- 权限撤销、超时、重启后仍能正确投递完成通知。

### 4.3 统一会话权威与跨端一致性

涉及 **OpenClaw、Hermes Agent、LobsterAI、QwenPaw**：

- Hermes Agent 明确推进 CLI、Desktop、Web 统一到 Gateway session authority；
- OpenClaw 修复跨进程 transcript 唯一键冲突及 Gateway 重启后 Agent degraded；
- LobsterAI 的 DSH 迁移涉及 Agent 所有权、记忆与模型协议；
- QwenPaw 修复插件路由、Provider 回退和 Console 状态问题。

**共同诉求：** 多入口不能各自维护会话真相；消息来源、身份、生命周期和持久化必须标准化。

### 4.4 原子化、可回滚更新

主要涉及 **OpenClaw**，并与 **NanoBot** 的发布自动化形成对照：

- OpenClaw 推进 prepared release、常驻 launcher、WAL 恢复、无更新时不复制数据库；
- NanoBot 将 GitHub Release 一键发布至 PyPI，并校验 tag、制品和 manifest；
- LobsterAI 则将 release 分支修复持续同步至 DSH。

**共同诉求：** 更新必须具备明确的事务边界，失败时不得留下“程序已升级、数据库未迁移”或“服务停止但新版本未激活”的半完成状态。

### 4.5 模型调用成本、缓存与运行预算

涉及 **OpenClaw、Hermes Agent、QwenPaw**：

- OpenClaw：Prompt Cache 每轮归零、缺少 run 级 turn/token 预算；
- Hermes Agent：compaction 重复注入、stale-stream watchdog 误杀长预填充；
- QwenPaw：上下文压缩失败时错误建议 `/clear`。

**共同诉求：** 上下文压缩、缓存命中、token 消耗和工具循环必须可观测、可预算、可安全恢复，不能以牺牲对话连续性为代价节省 token。

### 4.6 WebUI/Console 可访问性与移动端稳定性

涉及 **NanoBot、QwenPaw、Hermes Agent、LobsterAI**：

- NanoBot：失效渠道无法关闭、模型选择器焦点错误；
- QwenPaw：iOS WebKit 长会话冻结、键盘无法滚动、宽表格溢出；
- Hermes Agent：Desktop 会话、上传大小、审批可见性、多标签页状态；
- LobsterAI：跨屏 DPI、悬浮球位置、动画缩放。

**共同诉求：** UI 状态必须反映真实后端状态，并具备键盘、触屏、移动端和多显示器兼容性。

---

## 5. 差异化定位分析

| 项目 | 功能侧重 | 目标用户 | 技术架构关键差异 | 当前阶段 |
|---|---|---|---|---|
| **OpenClaw** | 全渠道个人 Agent、插件、Worker、多 Agent、Cron、MCP、Memory | 高级个人用户、开发者、自动化与多 Agent 部署者 | Gateway 为核心控制面；插件化和持久化状态强；跨平台覆盖广 | 大规模重构与可靠性收敛 |
| **Hermes Agent** | Gateway、Desktop、Web、TUI、Kanban、长任务与工具执行 | 重视持续运行、任务编排和桌面体验的开发者 | 正推动多入口统一到 Gateway session authority；状态机较复杂 | 高吞吐修复期，统一架构迁移期 |
| **LobsterAI** | 多分身、专业 Agent、桌面伙伴、办公文件 | 消费级个人助理与办公用户 | OpenClaw 向 DSH 迁移，产品层封装与多 Agent 体验突出 | 迁移和能力对齐期 |
| **NanoBot** | 轻量多渠道 Agent、WebUI/TUI、文件与 MCP 工具 | 希望快速部署、跨客户端一致体验的用户 | v0.4.2 引入 SSH 网关；工具输出协议标准化；发布自动化完善 | 发布后快速迭代期 |
| **QwenPaw** | Console、记忆插件、Office Skills、企业部署 | Agent 开发者、平台集成方、企业内网用户 | 强调 base-path 部署、OpenViking 记忆、Console 插件体系 | 功能扩张后评审积压期 |
| **PicoClaw** | 轻量个人助手、技能安装、多 Provider | 边缘/个人部署用户 | 多渠道入口简单；Provider 正逐个扩展 | 存量收敛、低频维护期 |
| **IronClaw** | Rust 风格 Provider catalog、OpenAI-compatible 接入 | 模型路由和多 Provider 用户 | 通过 `providers.json` 管理 Provider 与 `vendor/model` ID | Provider 目录扩展期 |
| **OpenHuman** | BYOK 云模型接入、安全策略和自主性 | 关注策略、路由和隐私边界的个人用户 | OpenAI-compatible 云 Provider + 策略状态提示 | 小步迭代期 |

### 定位差异的关键结论

- **最平台化：OpenClaw**
- **最强调统一控制面：Hermes Agent**
- **最偏消费级桌面产品：LobsterAI**
- **最偏轻量多客户端：NanoBot**
- **最偏 Console/记忆/企业部署：QwenPaw**
- **最偏 Provider 目录和模型路由：IronClaw、OpenHuman**
- **最接近轻量技能助手：PicoClaw**

---

## 6. 社区热度与成熟度

### 6.1 社区热度分层

#### 高热度：OpenClaw、Hermes Agent

- OpenClaw：最高 85 条 Issue 评论，覆盖插件阻塞、Gateway 停止、升级半完成、缓存和内存；
- Hermes Agent：最高 11 条评论，主要围绕 Kanban、Gateway 死锁、会话连续性；
- 两者都表现出真实生产环境、多平台和长会话场景下的复杂问题。

#### 中热度：LobsterAI、QwenPaw

- LobsterAI：10 条 PR 全部收口，但 Issue 仅 1 条，更像维护者集中交付而非社区热潮；
- QwenPaw：6 条 Issue、11 条 PR，问题反馈较集中，但全部 PR 待合并；
- 热度来自明确的前端可用性、部署和记忆问题，而不是广泛生态参与。

#### 低热度：NanoBot、PicoClaw、OpenHuman、IronClaw

- NanoBot 今日无 Issue，12 条 PR 反映开发活动，但用户反馈数据不足；
- PicoClaw 的 Provider 提案多被标记 stale；
- OpenHuman 与 IronClaw 各只有 1 条新增需求；
- 这些项目更适合通过提交质量、产品定位和发布稳定性判断成熟度，不能仅依赖社区热度。

### 6.2 成熟度分层

#### 快速迭代期

- **QwenPaw**：大量功能与修复候选，但无 PR 合并、无 Release；
- **PicoClaw、IronClaw、OpenHuman**：以新 Provider 和局部能力扩展为主；
- **Hermes Agent**：代码管线极快，但稳定性与发布收口滞后。

#### 质量巩固期

- **NanoBot**：已发布 v0.4.2，发布自动化和工具协议逐步完善；
- **LobsterAI**：PR 全部合并，开始系统同步 DSH 与 release 分支；
- **OpenClaw**：仍处于高活跃开发期，但升级、WAL、插件隔离和 Agent 状态已进入系统性收敛。

### 6.3 需要警惕的“成熟度错觉”

- Issue 已关闭不等于已有修复进入 Release；
- PR 已关闭不必然代表代码已合并；
- 大量 PR 开放说明开发活跃，但不一定说明产品更成熟；
- 社区评论量高可能是部署复杂，而不是用户规模直接增长。

因此，成熟度应至少同时观察：**Release 频率、修复交付周期、状态机一致性、回归测试、数据迁移可逆性**。

---

## 7. 值得关注的趋势信号

### 7.1 Provider 正从“项目内置”转向“路由与目录产品”

LLMTR 同时进入 PicoClaw、IronClaw、OpenHuman，说明用户关注的已不只是单模型，而是：

- 多模型统一目录；
- `vendor/model` 标识；
- 请求路由与托管地域；
- BYOK 与密钥隔离；
- 统一错误、计费和审计语义。

**对开发者的启示：** 不宜为每个网关复制一套 Provider；应设计 Provider manifest、兼容协议层和可扩展路由字段。

### 7.2 Agent 运行时竞争进入“状态机正确性”阶段

当前问题已不再是“能否调用模型”，而是：

- 子任务是否完成；
- 恢复是否重复执行；
- 重启后是否丢状态；
- 权限撤销后通知发往何处；
- 压缩后是否重复轮次；
- 多入口是否看到同一会话。

**对开发者的启示：** 应把任务状态、租约、所有权、完成事件和恢复语义设计为一等对象，而不是散落在消息文本和进程内存中。

### 7.3 更新系统正在成为核心产品能力

OpenClaw 的 WAL 半升级、Windows package-swap、Gateway 停服与 NanoBot 的 manifest 校验共同表明，Agent 项目已具备真实生产状态，更新可靠性必须按数据库和分布式系统标准设计。

**推荐基线：**

- 新旧版本并存；
- 数据库迁移显式事务化；
- 更新前快照与可验证回滚；
- 服务激活与文件替换分离；
- 修复状态自动追踪到 Release。

### 7.4 长任务必须具备预算、检查点与可解释缓存

Prompt Cache 失效、工具循环、压缩失败误清空、1M 上下文被 watchdog 误杀等问题说明，单纯增加上下文窗口无法替代运行时治理。

**建议形成统一控制面：**

- 每轮与每任务 token/turn 预算；
- 工具循环检测；
- 缓存键稳定性和命中率诊断；
- compaction 前后状态校验；
- 可恢复 checkpoint；
- 明确 bounded yield 与 continuation 协议。

### 7.5 UI 正成为 Agent 可观测性的主要载体

NanoBot、QwenPaw、Hermes Agent 和 LobsterAI 的问题大量集中在状态显示、焦点、路由、审批、跨屏位置和多端会话。Agent 系统已不再是纯后端工具，UI 必须准确表达：

- Provider 是否启用；
- 任务是运行、阻塞、完成还是丢失；
- 审批是否真正生效；
- 上下文是否已压缩；
- 插件和路由是否加载；
- 后端是否“存活但不可服务”。

### 7.6 插件与扩展必须从核心运行时隔离

OpenClaw 的大型插件捕获可阻塞 Gateway 主线程数分钟，QwenPaw 出现 bundle 重复加载与路由未注册，说明扩展系统已经成为核心稳定性边界。

**建议：**

- 插件准备、依赖捕获和重载异步化；
- 超时、隔离进程或资源上限；
- 路由注册幂等；
- 模块实例单例化；
- 插件失败不得阻塞消息循环。

### 7.7 隐私与策略一致性开始成为产品差异化点

OpenHuman 暴露了“策略未启用但提示按已启用生成”的矛盾。这说明自主 Agent 的策略提示不能仅描述配置结构，而必须反映：

- 配置是否存在；
- 是否启用；
- 当前请求是否实际受限；
- 哪个运行时组件拥有最终决策权。

对于企业级 Agent，权限提示错误本身就是控制缺陷，而不只是文案问题。

---

## 总体结论

2026-11-22 的生态特征可概括为：**OpenClaw 定义运行时复杂度上限，Hermes Agent 暴露统一控制面的必要性，LobsterAI 展示运行时迁移与消费端封装路径，NanoBot/QwenPaw 分别在轻量多渠道和 Console/记忆方向推进，PicoClaw、IronClaw、OpenHuman 则共同验证 Provider 目录化的需求。**

短期最值得技术决策者关注的不是新增 Provider 数量，而是四件事：

1. **Gateway/会话状态机是否可靠；**
2. **更新与数据库迁移是否原子、可回滚；**
3. **插件与工具执行是否被隔离并具有预算；**
4. **修复能否从 PR 稳定进入 Release 并被用户验证。**

这些项目共同表明，个人 AI 助手正在从“对话产品”演化为**长期运行、跨设备、拥有记忆与工具权限的分布式软件系统**。下一阶段的竞争关键将从模型接入数量，转向可靠性、可解释性和可持续交付能力。

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目动态日报

**日期：2026-11-22**  
**数据范围：过去 24 小时**  
**项目：** [HKUDS/nanobot](https://github.com/HKUDS/nanobot)

---

## 1. 今日速览

NanoBot 过去 24 小时共更新 **12 个 PR**，其中 **9 个仍待合并、3 个已合并或关闭**，并发布 **v0.4.2**，整体开发活跃度较高。  
今日变更重点集中在 **WebUI 渠道状态与交互、斜杠命令本地化、消息编辑重发、发布流程自动化**，同时补强了文件、Matrix、MCP 等模块的稳定性。  
没有新的 Issue 或 Issue 评论，说明社区反馈沉淀较少，无法从用户讨论中判断具体满意度或需求优先级。  
项目当前处于“**版本发布后继续快速迭代**”阶段：v0.4.2 已完成发布准备与发布流程改进，同时有多个中长期功能 PR 等待审查和合并。  
整体健康度评估：**良好，但需关注 PR 积压、发布链路可靠性及 WebUI 渠道失效问题**。

---

## 2. 版本发布

### [v0.4.2](https://github.com/HKUDS/nanobot/releases/tag/v0.4.2)

本版本的主要更新是：**在网关同时公布公共 WebSocket URL 时，NanoBot 可以通过 SSH 连接该网关**。

#### 主要变化

- 支持通过现有 SSH 配置连接同时提供公共 WebSocket URL 的网关。
- Windows 网关在系统将 Python 解释器配置为 `python` 时可正常支持。
- 快速配对命令仍然仅支持 Linux。

#### 兼容性说明

根据发布说明，当前存在以下限制：

- 快速配对命令：**仅支持 Linux**。
- SSH 模式暂不支持 **网关原生 TLS**。
- SSH 模式暂不支持 **`trustedProxyAuth`**。
- Windows 环境依赖可用的 `python` 命令。

#### 迁移注意事项

- 使用 SSH 网关的用户应确认 SSH 配置和 Python 环境满足上述条件。
- 如果部署依赖网关原生 TLS 或 `trustedProxyAuth`，应继续采用现有非 SSH 连接方式。
- 涉及公网 WebSocket URL 的部署，应检查反向代理、TLS 终止位置及认证方式，避免直接切换连接模式后出现连接失败。

---

## 3. 项目进展

### 已合并或关闭的重要 PR

#### 1. [PR #6744 — chore: prepare v0.4.2](https://github.com/HKUDS/nanobot/pull/6744)

**状态：CLOSED**

- 将包版本及源码中的 fallback 版本更新为 `0.4.2`。
- 基于已合并主分支提交构建发布候选版本。
- 完成 CI 矩阵与五个原生平台包的发布检查。
- 该 PR 推动 v0.4.2 正式进入发布流程，是今日版本落地的直接准备项。

#### 2. [PR #6743 — fix(webui): keep focus when reopening the model picker](https://github.com/HKUDS/nanobot/pull/6743)

**状态：CLOSED**

- 修复用户选择模型预设后立即重新打开模型选择器时，旧选择器会把焦点错误返还到消息输入框的问题。
- 新选择器可能因此提前关闭，导致用户无法继续调整 reasoning effort。
- 修复方式是在重新打开时清除待执行的焦点返还，并忽略旧选择器的关闭事件。
- 该修复提升了 WebUI 模型配置流程的连续性和可用性。

#### 3. [PR #6745 — ci: publish accepted releases to PyPI in one click](https://github.com/HKUDS/nanobot/pull/6745)

**状态：CLOSED**

- 将已验收的 GitHub Release 一键发布至 PyPI。
- 从同一次成功候选构建中上传五个 wheel 包和源码分发包。
- 校验 release tag、文件与 CI manifest 是否一致。
- 在报告缺失、文件变化或 manifest 不匹配时主动停止，避免发布不一致制品。

> 说明：数据仅标注该 PR 已合并或关闭，无法确认其具体合并方式；但该变更直接完善了项目的发布自动化链路。

### 今日整体推进程度

今天项目完成了以下实质进展：

1. **v0.4.2 正式发布。**
2. **WebUI 模型选择器焦点问题得到处理。**
3. **PyPI 发布流程向一键化、可校验方向发展。**
4. 多个 WebUI 修复、多语言支持和工具链稳定性 PR 仍在等待合并。

整体来看，项目功能开发与发布工程并行推进；不过当天没有新增 Issue，且 12 个 PR 中有 9 个待处理，合并吞吐与积压管理值得关注。

---

## 4. 社区热点

今日 **没有新增 Issue**，因此没有可按评论数或反应数比较的 Issue 热点。

### PR 热点

所有列出的 PR 均显示 **0 👍、评论数未提供**，无法基于社区互动量判断“最热门”PR。结合功能范围与业务影响，今日最值得关注的 PR 如下：

#### [PR #6748 — fix(webui): let users turn off failed channels](https://github.com/HKUDS/nanobot/pull/6748)

- 修复微信等渠道登录失效后，开关状态与实际渠道状态不一致的问题。
- 原行为下，失效渠道仍显示为启用，但用户点击开关会触发重连尝试，而不是关闭渠道。
- 修复后，开关反映用户可控制的状态，“Failed” 标签专门展示连接故障。
- **诉求核心：** 故障状态与控制动作必须解耦，避免用户无法关闭失效渠道。

#### [PR #6323 — feat(webui): edit and resend messages in the same session](https://github.com/HKUDS/nanobot/pull/6323)

- 支持在 WebUI 当前会话中编辑并重新发送已发送消息。
- PR 摘要显示已通过 **20/20 CI checks**，并针对五类共享操作完成性能预算验证。
- **诉求核心：** 改善纠错和重复生成体验，使消息交互更接近主流聊天产品。
- 由于该 PR 自 2026-10-20 创建、至今仍开放，属于今日重点长期积压项。

#### [PR #6747 — Localize built-in slash command results across chat clients](https://github.com/HKUDS/nanobot/pull/6747)

- 为 WebUI、TUI 和文本渠道中的 **17 个内置斜杠命令**提供阅读者语言的结果。
- `/model` 切换成功后会更新当前会话徽标，失败时保持原状态。
- 已保存回复可按其他语言展示，而不改变原始 prompt、diff 或其他上下文。
- **诉求核心：** 跨客户端一致性和国际化。

#### [PR #5718 — support OpenRouter native image generation API](https://github.com/HKUDS/nanobot/pull/5718)

- 适配 OpenRouter 原生 Images API。
- 目标是维持 OpenRouter 图像生成兼容性，并通过现有 `generate_image` 接口暴露更多图像生成供应商和模型。
- **诉求核心：** 扩展多模型供应商生态和图像生成能力。

---

## 5. Bug 与稳定性

今日没有新增 Issue 数据，以下 Bug 修复均来自开放中的 PR。按潜在用户影响与稳定性风险排序：

### P1：高影响、建议优先处理

#### [PR #6138 — fix(matrix): keep HTML formatting in m.new_content for edits](https://github.com/HKUDS/nanobot/pull/6138)

- **问题：** Matrix 流式回复通过 `m.replace` 编辑原消息时，HTML 格式信息可能未正确保留在 `m.new_content`。
- **影响：** Matrix 客户端中的流式更新可能丢失富文本格式，造成最终显示与首次发送不一致。
- **修复状态：** **已有 fix PR，尚未合并。**

#### [PR #6141 — fix(mcp): render resource and audio blocks in tool results](https://github.com/HKUDS/nanobot/pull/6141)

- **问题：** MCP 工具返回的资源、资源链接和音频块被转换为对象字符串表示。
- **影响：** 模型实际看到的是类似 Pydantic repr 的内部对象文本，而不是结构化资源或音频内容，可能影响工具调用结果理解。
- **修复状态：** **已有 fix PR，尚未合并。**

### P2：中度影响

#### [PR #6748 — 失效渠道无法通过开关关闭](https://github.com/HKUDS/nanobot/pull/6748)

- **问题：** 微信登录过期后，渠道已失效但开关仍表现为开启状态；点击开关触发重试而不是关闭。
- **影响：** 用户被误导且无法正常禁用故障渠道，属于明确的 WebUI 状态一致性和可操作性缺陷。
- **修复状态：** **已有 fix PR，尚未合并。**

#### [PR #6135 — fix(tools): read SVG files as text instead of image blocks](https://github.com/HKUDS/nanobot/pull/6135)

- **问题：** `read_file` 会把 SVG 当作图片块返回。
- **影响：** 包含 SVG 文本、样式或路径信息的文件无法以适合文本处理和代码分析的方式读取。
- **修复状态：** **已有 fix PR，尚未合并。**

#### [PR #6140 — number read_file lines by newline like edit_file](https://github.com/HKUDS/nanobot/pull/6140)

- **问题：** `read_file` 使用 `str.splitlines()` 计算行号，而 `edit_file` 按换行符 `"\n"` 计数。
- **影响：** 遇到 form feed、vertical tab、单独 CR、NEL、U+2028/U+2029 等字符时，两个工具的行号定位结果不一致。
- **风险：** 可能导致编辑提示行号与读取结果错位，影响模型对目标内容的精确定位。
- **修复状态：** **已有 fix PR，尚未合并。**

### 已关闭或已处理

#### [PR #6743 — 模型选择器焦点提前返还](https://github.com/HKUDS/nanobot/pull/6743)

- **状态：CLOSED。**
- 已处理快速重新打开模型选择器时旧组件错误干预新组件焦点的问题。

#### [PR #6744 — v0.4.2 版本准备](https://github.com/HKUDS/nanobot/pull/6744)

- **状态：CLOSED。**
- 本身不是 Bug 修复，但对应版本号与发布制品的一致性处理。

---

## 6. 功能请求与路线图信号

### 6.1 WebUI 消息编辑与重新发送

- PR：[#6323](https://github.com/HKUDS/nanobot/pull/6323)
- 用户场景：发送后发现内容有误，希望在当前会话直接编辑并重发，而不必新建会话。
- 路线图判断：**较高概率进入后续版本。**
- 理由：功能边界清晰，CI 已全部通过，且直接贴近主流聊天产品的基础交互习惯。当前主要障碍是 PR 存续时间较长，需要维护者完成审查和合并。

### 6.2 内置斜杠命令全面本地化

- PR：[#6747](https://github.com/HKUDS/nanobot/pull/6747)
- 用户场景：在 WebUI、TUI 和文本渠道之间切换时，命令结果应自动使用当前阅读者语言。
- 路线图判断：**较高概率进入下一版本。**
- 理由：覆盖 17 个内置命令，属于系统级体验完善，且与 v0.4.2 后继续优化多渠道体验的方向一致。

### 6.3 OpenRouter 原生图像生成支持

- PR：[#5718](https://github.com/HKUDS/nanobot/pull/5718)
- 用户场景：通过统一图像生成入口使用 OpenRouter 提供的图像模型及更多上游供应商。
- 路线图判断：**中高概率，但时间不确定。**
- 理由：可扩展供应商覆盖面和模型选择空间，但该 PR 已创建较久，可能受 API 变化、维护资源和优先级影响。

### 6.4 渠道故障状态与控制能力分离

- PR：[#6748](https://github.com/HKUDS/nanobot/pull/6748)
- 用户场景：渠道凭据或登录失效后，需要明确看到失败原因，并能直接关闭失效渠道。
- 路线图判断：**较高概率优先合并。**
- 理由：这是直接阻断用户操作的 P2 Bug，修复范围集中，用户收益明确。

### 6.5 文档中的 Latest Release 链接自动化

- PR：[#6746](https://github.com/HKUDS/nanobot/pull/6746)
- 用户场景：README 始终指向 GitHub 最新 Release，同时保留升级指南和历史归档。
- 路线图判断：**较高概率。**
- 理由：变更仅涉及文档，且能避免版本发布后链接过期。

---

## 7. 用户反馈摘要

今日 **没有新增 Issue，也没有 Issue 评论数据**，因此无法提炼真实用户评论中的满意度、具体使用场景或负面反馈。

从开放 PR 描述中可以确认的间接需求包括：

1. **渠道登录失效后应能正常关闭。**  
   微信登录过期是明确的实际故障场景，当前 UI 同时承担“显示连接状态”和“控制渠道启停”两种职责，导致状态与操作冲突。

2. **用户希望保留会话上下文进行纠错。**  
   WebUI 编辑并重发消息的需求表明，用户不愿为一次小修改重新建立会话，倾向于在原上下文中快速迭代。

3. **跨客户端需要一致的语言体验。**  
   内置命令目前需要按阅读者语言返回结果，说明多客户端使用场景已超出单一 WebUI 用户群。

4. **图像生成需要兼容更多供应商。**  
   OpenRouter 原生图像 API 适配反映出，用户希望通过统一接口访问更广泛的图像模型生态。

> 以上均来自 PR 摘要而非 Issue 评论，不能等同于已验证的用户普遍诉求。

---

## 8. 待处理积压

### 长期开放的 PR

#### [PR #5718 — OpenRouter native image generation](https://github.com/HKUDS/nanobot/pull/5718)

- 创建于 2026-09-09，至今仍开放。
- 属于重要供应商能力扩展，长期未合并可能导致 API 兼容性或实现细节过时。
- 建议维护者确认优先级并给出明确反馈。

#### [PR #6323 — WebUI 编辑并重新发送消息](https://github.com/HKUDS/nanobot/pull/6323)

- 创建于 2026-10-20，至今仍开放。
- 已通过 20/20 CI 检查，功能成熟度较高。
- 建议优先完成代码审查，避免成熟功能长期滞留。

#### [PR #6135 — SVG 读取修复](https://github.com/HKUDS/nanobot/pull/6135)

- 创建于 2026-10-10。
- 属于明确、可测试的文件工具行为修复，不应因优先级标签为 P2 而无限等待。

#### [PR #6138 — Matrix HTML 格式保留](https://github.com/HKUDS/nanobot/pull/6138)

- 创建于 2026-10-10。
- 影响 Matrix 富文本回复的最终呈现，建议结合 Matrix 渠道实际使用反馈确定合并窗口。

#### [PR #6140 — `read_file` 与 `edit_file` 行号一致性](https://github.com/HKUDS/nanobot/pull/6140)

- 创建于 2026-10-10。
- 属于工具协议一致性问题，建议与 #6135 一并审查文件工具行为变更。

#### [PR #6141 — MCP 资源与音频块渲染](https://github.com/HKUDS/nanobot/pull/6141)

- 创建于 2026-10-10。
- 涉及 MCP 工具结果标准化，可能影响模型对非文本内容的处理，建议确认测试覆盖范围。

### Issue 积压

- 今日无新增 Issue。
- 由于没有提供历史 Issue 列表，无法判断是否存在“长期未响应的历史 Issue”，也无法列出具体编号、评论数或最后更新时间。

### 维护建议

1. 为 #5718、#6135、#6138、#6140、#6141 指定负责人或审查结论。
2. 优先合并已通过完整 CI 的 [#6323](https://github.com/HKUDS/nanobot/pull/6323)。
3. 将 [#6748](https://github.com/HKUDS/nanobot/pull/6748) 作为 WebUI 渠道控制的高优先级修复处理。
4. 下一轮发布前确认 [#6746](https://github.com/HKUDS/nanobot/pull/6746) 的 Release 链接和版本归档已更新。
5. 持续验证 [#6745](https://github.com/HKUDS/nanobot/pull/6745) 的 PyPI 发布校验链路，避免 tag、制品和 manifest 不一致。

---

## 总体健康度结论

**健康度：良好。**

- **发布活跃度：高。** 24 小时内完成一个新版本发布，并推进 PyPI 自动化。
- **开发活跃度：高。** 12 个 PR 更新，覆盖 WebUI、渠道、工具、MCP、Matrix 和模型供应商。
- **社区反馈可见度：偏低。** 今日没有 Issue 数据，无法判断用户需求与满意度的真实分布。
- **代码质量风险：中低。** 今日暴露的问题大多已有针对性 PR，但多个 P2 修复仍未合并。
- **积压风险：中等。** 至少 6 个较早期、范围明确的 PR 仍待处理，其中 #6323 已通过完整 CI，值得优先审查。

**今日最关键信号：** NanoBot 已从基础功能扩展进入“多渠道体验统一、工具协议标准化和发布工程自动化”阶段；下一阶段应重点降低成熟 PR 的合并积压，并验证 v0.4.2 发布后的实际安装与网关连接体验。

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目动态日报

**日期：2026-11-22**  
**统计范围：过去 24 小时**  
**数据来源：PicoClaw GitHub Issues / Pull Requests**

---

## 1. 今日速览

过去 24 小时内，PicoClaw 共更新 **2 条 Issues** 和 **5 条 PR**，其中新开或活跃 Issue **1 条**、关闭 Issue **1 条**；待合并 PR **1 条**、关闭或合并 PR **4 条**。  
今日讨论重点集中在两个方向：一是新增 **LLMTR、CloudGPU、Standard Compute** 等 OpenAI 兼容模型提供商，二是修复技能安装时因 `SKILL.md` frontmatter 名称重复而失败的问题。  
由于没有新版本发布，且多数更新项带有 `stale` 标记，项目的短期产出以供应商扩展和存量问题收敛为主，版本交付节奏相对平缓。  
当前唯一待处理的功能 PR 是 **LLMTR provider**，若完成审查并合并，可能成为下一轮版本更新的主要功能增量；健康度评估为**中等偏低**：问题有所处理，但积压和长期停滞条目仍需关注。

---

## 3. 项目进展

> 今日无新版本发布，详见上方“版本发布”部分；本节重点说明已关闭或合并的重要 PR。

### 3.1 CloudGPU 接入 OpenAI 兼容 Provider

- **PR：** [#3464 feat(provider): add CloudGPU OpenAI-compatible provider](https://github.com/sipeed/picoclaw/pull/3464)
- **状态：** 已关闭，标记为 `stale`
- **推进内容：**
  - 新增 `cloudgpu` 独立 Provider。
  - 支持通过 `"provider": "cloudgpu"` 或 `cloudgpu/<model>` 配置模型。
  - 用户配置时主要只需提供 API Key。
  - 目标是让 CloudGPU 的 OpenAI 兼容网关能够复用 PicoClaw 的通用 Provider 机制。

**影响评估：**  
有助于丰富模型接入选择，并减少用户为不同网关重复配置自定义 OpenAI 端点的成本。不过该 PR 已因长期未活动而关闭，不能确认改动已经进入主干。

---

### 3.2 Standard Compute Provider 提案关闭

- **PR：** [#3431 feat(provider): add Standard Compute provider](https://github.com/sipeed/picoclaw/pull/3431)
- **状态：** 已关闭，标记为 `stale`
- **推进内容：**
  - 提议新增 `standardcompute` OpenAI 兼容 Provider。
  - 允许 Standard Compute 用户以统一密钥访问多个模型实验室的模型。
  - 实现路径参考既有 Provider 扩展案例，如 NEAR AI Cloud。

**影响评估：**  
该提案反映用户希望 PicoClaw 原生支持更多“统一网关、多模型目录”的 OpenAI 兼容服务。由于 PR 创建时间较长且缺乏后续活动，本轮未能形成可确认的交付成果。

---

### 3.3 Telegram-Codex 编排功能提案关闭

- **PR：** [#2379 Feature/telegram codex orchestrator](https://github.com/sipeed/picoclaw/pull/2379)
- **状态：** 已关闭
- **推进内容：**
  - 旨在为 Telegram 场景增加 Codex 编排能力。
  - 涉及通过聊天入口驱动代码代理或任务编排流程。

**影响评估：**  
该方向与 PicoClaw 的个人 AI 助手、消息平台集成定位相关，但当前没有足够信息确认是已合并、功能不完整，还是仅作为长期实验提案被关闭。建议维护者补充关闭原因，避免社区误解。

---

### 3.4 历史修复集合 PR 关闭

- **PR：** [#1559 fix: merge PR #1327 #1319 #1318 #1313](https://github.com/sipeed/picoclaw/pull/1559)
- **状态：** 已关闭
- **推进内容：**
  - 汇总并合并多个历史修复 PR。
  - 涉及内容来自 #1327、#1319、#1318、#1313，但当前摘要未提供各修复项细节。

**影响评估：**  
集中式修复 PR 有利于减少分散分支带来的维护压力，但条目自 2026 年 3 月起未推进，且今日仅发生状态更新。关闭后需明确这些修复是否已有替代 PR 或已经进入主干。

---

### 3.5 今日项目推进判断

今日关闭的 4 个 PR 中，至少 **2 个**属于 OpenAI 兼容 Provider 扩展，**1 个**属于聊天平台与代码代理编排，**1 个**属于历史修复集合。  
不过，多数条目已经历较长周期并带有 `stale` 标记，因此更准确的判断是：**项目今日清理了一部分停滞提案，但没有形成明确的新版本交付。**  
若 [#3471](https://github.com/sipeed/picoclaw/pull/3471) 能完成评审并合并，项目将获得一个新的内置模型 Provider，整体进展可由“平缓”提升至“有限推进”。

---

## 4. 社区热点

### 4.1 LLMTR Provider：Issue 与 PR 同步推进

- **Issue：** [#3470 [Feature] Add LLMTR as an OpenAI-compatible provider](https://github.com/sipeed/picoclaw/issues/3470)
- **PR：** [#3471 feat(providers): add LLMTR as an OpenAI-compatible provider](https://github.com/sipeed/picoclaw/pull/3471)
- **评论数：** Issue 2 条
- **当前状态：**
  - Issue 仍开放。
  - PR 仍开放且待合并。
  - 两者均被标记为 `stale`。

**用户诉求：**

用户希望 PicoClaw 在模型目录中提供具名的 `llmtr` Provider，而不是要求用户手工覆盖现有 OpenAI-compatible Provider 的 API Base。  
目标配置方式是将 API Base 设置为：

```text
https://llmtr.com/v1
```

并允许用户在 `model_list` 中选择 LLMTR 模型，同时避免不同 Provider 之间互相覆盖配置。

**热点判断：**  
这是今日唯一形成“功能 Issue + 实现 PR”完整链路的新需求，兼具明确场景和可执行实现，优先级高于普通提案。建议维护者优先确认 PR 的 API 兼容性、鉴权变量命名、默认地址和测试覆盖情况。

---

### 4.2 技能安装名称冲突问题

- **Issue：** [#3462 skills install fails with “registry archive is not a valid skill” when another skill shares the frontmatter name](https://github.com/sipeed/picoclaw/issues/3462)
- **评论数：** 2 条
- **当前状态：** 已关闭，标记为 `stale`

**用户诉求：**

当已安装技能中存在相同 `SKILL.md` frontmatter `name` 时，即使新安装的技能内容完全不同，`picoclaw skills install` 和 Agent 的 `install_skill` 工具仍会报错：

```text
failed to install "<slug>": registry archive is not a valid skill
```

**热点判断：**  
该问题直接影响技能生态的可用性。报错信息还会误导用户以为是下载包损坏，而不是技能名称冲突，增加了排障成本。Issue 已关闭，但现有数据未显示明确对应的修复 PR，仍需核实修复是否已进入主干。

---

## 5. Bug 与稳定性

### 严重程度：中

#### 技能安装因 frontmatter 名称重复而失败

- **Issue：** [#3462](https://github.com/sipeed/picoclaw/issues/3462)
- **影响范围：**
  - `picoclaw skills install`
  - Agent 的 `install_skill` 工具
- **触发条件：**
  - 已安装技能与待安装技能使用相同的 `SKILL.md` frontmatter `name`。
  - 两个技能的业务内容可以完全不同。
- **用户可见错误：**

```text
registry archive is not a valid skill
```

- **修复状态：**
  - Issue 已关闭。
  - **未发现明确对应的 fix PR。**
  - 关闭时带有 `stale` 标记，因此不能仅依据 Issue 状态认定问题已在当前版本彻底修复。

**风险分析：**  
该问题不是单纯的崩溃，而是合法的技能包被错误判定为无效，属于安装校验逻辑或身份判定设计缺陷。对于依赖多来源技能、共享技能名称或大批量安装技能的用户，影响尤其明显。

---

### 严重程度：低至中

#### Telegram-Codex 编排功能未形成可用结论

- **PR：** [#2379](https://github.com/sipeed/picoclaw/pull/2379)

**风险与稳定性提示：**

- 该提案自 2026 年 4 月创建后长期未推进。
- PR 当前关闭，但摘要未说明关闭原因。
- 无法确认该功能是因实现不成熟、架构冲突、维护资源不足，还是功能已被其他方案取代。

**建议：**

维护者应补充关闭结论，尤其是 Telegram 消息模型、Codex 会话状态、权限边界、任务恢复和并发控制等潜在稳定性问题是否仍然存在。

---

### 严重程度：低

#### 多个 Provider PR 因长期停滞关闭

- **PR：**
  - [#3464](https://github.com/sipeed/picoclaw/pull/3464)
  - [#3431](https://github.com/sipeed/picoclaw/pull/3431)

这些条目本身不是运行时 Bug，但可能造成用户预期与实际能力不一致，尤其是社区可能已经根据 PR 描述假设 CloudGPU 或 Standard Compute 已被正式支持。建议在文档和模型目录中仅列出已经进入主干且完成测试的 Provider。

---

## 6. 功能请求与路线图信号

### 6.1 LLMTR 内置 Provider：最可能进入下一版本

- **需求 Issue：** [#3470](https://github.com/sipeed/picoclaw/issues/3470)
- **实现 PR：** [#3471](https://github.com/sipeed/picoclaw/pull/3471)
- **信号强度：高**

这是当前唯一同时具备需求 Issue、实现代码和明确技术目标的功能项。PR 计划提供：

- `llmtr` 具名 Provider；
- 默认 API Base：`https://llmtr.com/v1`；
- 不预加载目录模型；
- 由用户在 `model_list` 中固定所需模型；
- 避免修改或覆盖其他 OpenAI-compatible Provider 的配置。

**纳入下一版本的建议检查项：**

1. Provider 名称与现有命名规范是否一致；
2. API Key 的配置键是否清晰且与其他 Provider 一致；
3. `/v1` 路径是否正确处理，避免重复拼接；
4. 是否覆盖 Chat Completions、流式输出和错误映射测试；
5. 是否补充用户配置示例及模型目录说明。

---

### 6.2 多网关 Provider 扩展仍是明确路线信号

- **CloudGPU：** [#3464](https://github.com/sipeed/picoclaw/pull/3464)
- **Standard Compute：** [#3431](https://github.com/sipeed/picoclaw/pull/3431)

这些提案共同表明，用户期待 PicoClaw 建立一种低成本、标准化的方式接入各类 OpenAI 兼容网关。  
长期看，项目可能需要从“逐个新增硬编码 Provider”转向可配置的兼容端点模板，以降低维护成本。

**建议路线方向：**

- 抽取统一的 OpenAI-compatible Provider 基类或注册机制；
- 允许用户定义独立命名的兼容端点；
- 避免每个新网关都要求核心代码变更；
- 对网关差异采用可选适配项，而不是持续增加条件分支。

---

### 6.3 Telegram 驱动 Codex 编排：长期方向价值较高

- **PR：** [#2379](https://github.com/sipeed/picoclaw/pull/2379)

该需求体现了 PicoClaw 从聊天机器人向“消息平台驱动的个人 AI 助手/编排器”演进的方向。其潜在价值包括：

- 通过 Telegram 远程触发编码任务；
- 查询任务状态；
- 获取执行结果；
- 与个人工作流集成。

不过，该条目长期停滞且缺少明确关闭原因，暂不应视为近期版本承诺。若重新推进，需要先补充架构设计和安全边界，尤其是命令执行授权、敏感信息处理、会话持久化与多用户隔离。

---

## 7. 用户反馈摘要

### 7.1 LLMTR 用户希望减少手工配置成本

根据 [#3470](https://github.com/sipeed/picoclaw/issues/3470)：

- 用户已经可以通过自定义 OpenAI-compatible Endpoint 接入 LLMTR。
- 核心不满是缺少具名 Provider。
- 手工覆盖通用 Provider 配置可能导致其他模型服务被连带修改。
- 用户真正需要的是“独立身份、可并存、可在模型目录中选择”的 Provider 体验。

**满意度判断：**  
现有通用兼容能力可以满足基础使用，但配置隔离和可维护性仍不理想；因此用户对官方内置支持有明确需求。

---

### 7.2 技能安装错误提示与真实原因不符

根据 [#3462](https://github.com/sipeed/picoclaw/issues/3462)：

- 用户能够稳定触发问题，说明不同技能共享 frontmatter 名称并非罕见场景。
- 当前错误信息将“名称冲突”伪装成“注册表归档不是有效技能”，容易让用户误判为网络、下载或压缩包损坏。
- 这类误报会降低 CLI 和 Agent 工具的可诊断性。

**满意度判断：**  
用户对该问题最强烈的不满意点可能不只是安装失败，而是**错误原因不透明、排障路径误导**。即使功能已修复，也建议后续补充更精确的错误信息。

---

### 7.3 Provider 提案热度有限，但方向一致

[#3464](https://github.com/sipeed/picoclaw/pull/3464) 与 [#3431](https://github.com/sipeed/picoclaw/pull/3431) 均无公开评论或点赞数据。  
这说明单个提案的社区关注度不高，但多个独立提案均指向 OpenAI 兼容网关接入，反映出一致的结构性需求，而非单次需求。

---

## 8. 待处理积压

### 8.1 LLMTR Provider PR 仍待审查

- **PR：** [#3471](https://github.com/sipeed/picoclaw/pull/3471)
- **Issue：** [#3470](https://github.com/sipeed/picoclaw/issues/3470)
- **积压特征：**
  - 创建于 2026-11-14；
  - 已带有 `stale` 标记；
  - 尚无公开评论或点赞数据；
  - Issue 与 PR 均未关闭。

**建议：**  
这是当前最值得快速处理的功能项。建议维护者确认是可直接合并、需要小幅修改，还是因 API Key 命名和兼容性设计而暂时阻塞。若不准备接受，也应明确关闭，避免 Issue 与 PR 长期并行积压。

---

### 8.2 技能名称冲突修复缺少可追溯 PR

- **Issue：** [#3462](https://github.com/sipeed/picoclaw/issues/3462)

Issue 已关闭，但未提供明确的修复 PR 链接。建议：

- 核实修复提交是否已进入主干；
- 补充回归测试，覆盖“不同 slug、相同 frontmatter name”的情况；
- 将错误提示改为明确指出名称冲突；
- 检查 CLI 与 Agent `install_skill` 是否使用同一套校验逻辑。

---

### 8.3 Standard Compute Provider 长期停滞

- **PR：** [#3431](https://github.com/sipeed/picoclaw/pull/3431)

该 PR 自 2026 年 10 月创建，长期缺少评审活动且最终关闭。建议维护者根据新的 Provider 抽象方案决定是否重新提交，或明确告知贡献者当前不接受逐网关扩展的原因。

---

### 8.4 CloudGPU Provider 长期停滞

- **PR：** [#3464](https://github.com/sipeed/picoclaw/pull/3464)

该提案已经关闭，但与 Standard Compute、LLMTR 的需求方向高度相似。建议统一评估多个 OpenAI 兼容网关的接入策略，避免对相似 PR 分别处理而造成不一致。

---

### 8.5 Telegram-Codex 编排功能缺少最终结论

- **PR：** [#2379](https://github.com/sipeed/picoclaw/pull/2379)

该提案持续时间较长，关闭状态却没有明确原因。维护者应补充：

- 是否属于路线图范围；
- 是否存在重复实现；
- 是否因安全、架构或维护成本原因搁置；
- 贡献者是否可基于新设计重新提交。

---

### 8.6 历史修复集合 PR 状态不透明

- **PR：** [#1559](https://github.com/sipeed/picoclaw/pull/1559)

该条目汇集多个修复，但当前无法从摘要确认 #1327、#1319、#1318、#1313 各自的状态。建议建立对应关系，明确哪些修复已合并、哪些被替代、哪些仍需重新处理。

---

## 今日结论

PicoClaw 今日整体处于**低频维护、持续收敛长尾事项**的状态：没有版本发布，5 条 PR 更新中 4 条关闭，真正仍待推进的功能只有 LLMTR Provider。  
项目最明确的正向信号是模型网关兼容能力持续增强；最明确的风险是多个提案因长期停滞被标记为 `stale`，同时技能安装问题虽已关闭却缺少可追溯修复依据。  
建议下一阶段优先处理 [#3471](https://github.com/sipeed/picoclaw/pull/3471)、核实 [#3462](https://github.com/sipeed/picoclaw/issues/3462) 的实际修复状态，并统一梳理 OpenAI-compatible Provider 的长期扩展机制，以提升交付连续性和维护效率。

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw 项目动态日报

**统计日期：2026-11-22**  
**数据范围：过去 24 小时 GitHub Issues、PR、Release 更新**

## 1. 今日速览

过去 24 小时内，IronClaw 共更新 **1 条 Issue**，无新增或更新的 PR，也没有发布新版本。唯一动态是功能请求 [#8174](https://github.com/nearai/ironclaw/issues/8174)，提出将 **LLMTR** 接入内置的 OpenAI 兼容模型提供商目录；该 Issue 已有 1 条评论，但尚未形成对应 PR 或明确的版本排期。整体开发活动偏低，当前可评估为“低活跃度、单点需求推进中”；由于样本仅覆盖 24 小时，不能据此判断项目长期健康度出现趋势性变化。

**今日活跃度概览：**

| 指标 | 今日数据 |
|---|---:|
| 更新 Issues | 1 |
| 新开/活跃 Issues | 1 |
| 关闭 Issues | 0 |
| 更新 PR | 0 |
| 待合并 PR | 0 |
| 已合并/关闭 PR | 0 |
| 新版本发布 | 0 |

## 2. 版本发布

过去 24 小时无新版本发布。

## 3. 项目进展

今日没有合并或关闭的 PR，因此没有已落地的功能、修复或重构工作可报告。

唯一可见进展来自功能请求 [#8174](https://github.com/nearai/ironclaw/issues/8174)：用户希望 LLMTR 成为内置 provider catalog 中的一等选项，与 Groq、Together、Cerebras 和 MiniMax 并列。该需求目前仍处于 Issue 讨论阶段，**尚无实现 PR、测试结果或维护者确认**。

就今日贡献而言，项目功能面没有实际代码变更，暂不能计为版本能力向前推进。

## 4. 社区热点

### LLMTR 内置模型提供商支持

- **Issue：** [#8174 — feat: add LLMTR as a built-in OpenAI-compatible LLM provider](https://github.com/nearai/ironclaw/issues/8174)
- **状态：** Open
- **作者：** [@knowhycodata](https://github.com/knowhycodata)
- **创建/更新时间：** 2026-11-21
- **评论数：** 1
- **当前反应数：** 0

**核心诉求：**

- 将 LLMTR 添加至内置 provider catalog：  
  `crates/domains/ironclaw_llm/assets/providers.json`
- 接入 OpenAI 兼容端点：`https://llmtr.com/v1`
- 支持 `vendor/model` 形式的命名空间模型 ID
- 目标是让 LLMTR 与 Groq、Together、Cerebras、MiniMax 等现有 provider 获得一致的内置体验

**社区信号分析：**

这是今日唯一热点，因此“评论最多”和“反应最多”均指向该 Issue。不过其实际互动规模很小，仅有 1 条评论且没有点赞，说明需求明确但社区关注度尚低。Issue 的推进关键不在新增讨论，而在维护者是否确认支持范围，以及是否提供配置规范、鉴权方式、模型清单和兼容性测试。

## 5. Bug 与稳定性

今日没有报告崩溃、回归、异常行为或其他明确 Bug，也没有对应的修复 PR。

**Bug 严重程度列表：无新增 Bug。**

需要说明的是，[#8174](https://github.com/nearai/ironclaw/issues/8174) 属于新增 provider 的功能请求，不应计入 Bug 统计。

## 6. 功能请求与路线图信号

### 新增 LLMTR 作为内置 OpenAI-compatible Provider

- **请求链接：** [#8174](https://github.com/nearai/ironclaw/issues/8174)
- **当前状态：** Issue 开放，尚无 PR
- **建议的落地范围：**
  1. 在 [`providers.json`](https://github.com/nearai/ironclaw/blob/main/crates/domains/ironclaw_llm/assets/providers.json) 中增加 LLMTR provider 元数据；
  2. 配置 OpenAI-compatible base URL：`https://llmtr.com/v1`；
  3. 明确 API Key 的环境变量或配置项命名；
  4. 支持 `vendor/model` 模型 ID，并提供可选模型发现或默认模型；
  5. 补充基础 URL 拼接、鉴权头、模型 ID、错误响应与超时行为的测试。

**下一版本可能性判断：中等、但证据有限。**

支持该需求的因素：

- 实现方式与现有 OpenAI-compatible provider 模式高度一致；
- 请求明确指出了 catalog 文件和目标端点，开发成本预计相对可控；
- 已有 1 条评论，表明并非完全无人跟进。

限制因素：

- 今日没有对应 PR；
- 没有维护者排期或版本目标；
- Issue 当前点赞为 0，尚无足够社区共识信号；
- 数据中没有相关分支、测试提交或 Release 记录。

因此，目前只能将其视为**有明确技术路径的候选需求**，不能确认已进入下一版本路线图。

## 7. 用户反馈摘要

今日唯一 Issue 的评论内容未在数据中提供，因此无法可靠提炼评论者的具体补充意见、实际使用体验、满意度或不满意点。

根据 [#8174](https://github.com/nearai/ironclaw/issues/8174) 的公开摘要，可以确认的潜在用户场景包括：

- 希望无需额外手动配置即可选择 LLMTR；
- 需要通过 OpenAI 兼容接口调用 `vendor/model` 格式模型；
- 希望 LLMTR 与其他内置 provider 保持一致的使用与配置体验；
- 可能存在多供应商切换、统一模型目录或避免重复手工配置的需求。

由于缺少评论正文，不能将上述场景表述为已有多用户验证的需求，也不能判断用户对当前可用性是否满意。

## 8. 待处理积压

### 今日需维护者响应事项

- **[#8174 — add LLMTR as a built-in OpenAI-compatible LLM provider](https://github.com/nearai/ironclaw/issues/8174)**  
  该 Issue 刚创建且仍处于开放状态，不属于已经长期滞后的积压，但应尽快确认是否接受该功能请求。若接受，建议明确实现边界并创建 PR；若暂不支持，也宜说明原因及替代配置方式。

### 长期积压情况

提供的数据只包含过去 24 小时动态，未提供长期未响应的 Issues/PR 清单及最后更新时间，因此无法客观列出长期积压项，也不宜仅因当前 PR 数量为 0 就推断仓库存在 PR 积压。

## 今日结论

IronClaw 今日整体处于**低活动状态**：1 个新增功能需求、0 个代码 PR、0 个版本发布、0 个明确 Bug。唯一值得跟踪的是 [LLMTR 内置 provider 请求 #8174](https://github.com/nearai/ironclaw/issues/8174)。该需求具备清晰实现路径，但是否进入下一版本仍需维护者确认及 PR 落地。

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI 项目动态日报

**日期：2026-11-22**  
**仓库：[netease-youdao/LobsterAI](https://github.com/netease-youdao/LobsterAI)**

---

## 1. 今日速览

过去 24 小时共出现 **10 条 PR 更新和 1 条 Issue 更新**，且全部 PR 均为 **已合并/已关闭**状态，暂无待合并 PR。  
今日推进重点集中在 **DSH 运行时迁移、多智能体协作、桌面伙伴体验、办公文件导出和模型兼容性**等方面，显示项目正从 OpenClaw 向 DSH 过渡并同步补齐既有能力。  
唯一 Issue 更新为已关闭的“梦境日记面板为空”问题，说明相关上游问题已有修复方向，但当前数据中未见 LobsterAI 侧对应合并 PR。  
整体活跃度评估为 **中高**：代码合并节奏较快、功能覆盖较广，但今日缺少新版本发布，且 Issues/公开讨论样本较少，外部用户反馈信号仍偏弱。

---

## 3. 项目进展

> 今日无新版本发布，因此本节重点梳理已合并或关闭的重要 PR。

### 3.1 DSH 运行时与多智能体能力

- **[#3136 feat(dsh): complete desktop runtime integration](https://github.com/netease-youdao/LobsterAI/pull/3136)**  
  完成 DSH 桌面运行时集成，补充定时任务状态持久化、重启后中断任务恢复、本地技能与媒体工具调用等能力。  
  **意义**：推动 OpenClaw → DSH 迁移从基础接入进入桌面端可用性完善阶段。

- **[#3137 feat(dsh): add cross-agent collaboration and specialist delegation](https://github.com/netease-youdao/LobsterAI/pull/3137)**  
  恢复并升级多智能体协作：已启用的 LobsterAI Agent 可以发现其他专业 Agent，并将任务委派给后者，同时复用其工作区角色设定、长期记忆、技能、工作目录和模型。  
  **意义**：多分身/多智能体协作成为今日最核心的能力建设方向，与现有“分身配置”产品形态直接相关。

- **[#3142 chore: sync release/2026.11.17 engine-agnostic fixes to dsh](https://github.com/netease-youdao/LobsterAI/pull/3142)**  
  将发布分支中的引擎无关修复同步到 DSH 迁移分支，包括桌面伙伴跨屏停靠等改动。  
  **意义**：降低运行时迁移造成的功能和体验回退风险。

- **[#3144 fix(dsh): restore plan model protocol, thinking, and kimi-k3 compat](https://github.com/netease-youdao/LobsterAI/pull/3144)**  
  恢复模型级协议分发、思考能力及 Anthropic 代理兼容路径，并修复 `apiFormat` 在模型配置向 DSH Provider 传递过程中的丢失问题。  
  **意义**：直接修复迁移后 Claude Sonnet、Kimi K3 等模型可能出现的能力退化或调用失败问题。

### 3.2 桌面伙伴与交互体验

- **[#3140 fix(desktop-companion): keep orb docked across displays and Windows DPI](https://github.com/netease-youdao/LobsterAI/pull/3140)**  
  优化悬浮球跨显示器停靠及 Windows DPI 适配，引入包含边缘位置、纵向比例和显示器 ID 的 `desktop-companion.position.v2` 元数据。  
  **意义**：改善多屏环境下悬浮球错位、漂移和缩放异常。

- **[#3138 fix(companion): align hover pet atlas scale and vertical center](https://github.com/netease-youdao/LobsterAI/pull/3138)**  
  修复 8 套海洋伙伴皮肤在悬停时缩小、向下跳动的问题，校准精灵图缩放比例与垂直中心。  
  **意义**：属于低风险、高可感知度的视觉稳定性修复。

- **[#3145 fix(companion): calibrate jingyiming and xingxingxing hover animations](https://github.com/netease-youdao/LobsterAI/pull/3145)**  
  校准“鲸一鸣”和“醒醒星”悬停动画，调整帽檐蓝色、高光亮度及动画表现。  
  **意义**：补齐特定皮肤的视觉细节，进一步统一桌面伙伴交互质感。

### 3.3 Cowork、文件与工作流体验

- **[#3143 fix(office): ensure workbook relationship namespace on xlsx export](https://github.com/netease-youdao/LobsterAI/pull/3143)**  
  修复导出 `.xlsx` 时新增工作表使用未绑定 `r` 前缀的问题，确保关系命名空间位于工作簿根节点，兼容 `openpyxl` 和严格 XML 解析器。  
  **意义**：提升办公文件导出的可靠性，避免部分严格读取场景报错。

- **[#3139 fix(cowork): place turn artifacts above reply metadata row](https://github.com/netease-youdao/LobsterAI/pull/3139)**  
  将会话产物——文件卡片、内联图片画廊、视频路径等——移动到最终回复及元数据操作行上方。  
  **意义**：优化 Agent 输出结果的阅读顺序和成果展示。

- **[#3141 Feat/home quick actions ppt navigation](https://github.com/netease-youdao/LobsterAI/pull/3141)**  
  为首页快捷操作增加 PPT 导航能力。  
  **意义**：继续强化从首页快速进入办公演示文稿工作流的路径；当前摘要信息较少，具体范围需结合代码或原 PR 页面进一步确认。

### 3.4 今日推进程度

今日没有待合并 PR，说明已列出的工作流已经收口或关闭。按内容判断，项目今日主要完成了三件关键事情：

1. **补齐 DSH 迁移缺口**：模型协议、思考能力、桌面运行时和跨 Agent 委派得到集中修复。
2. **保持旧版本关键体验不回退**：跨屏停靠、皮肤动画和 `.xlsx` 导出等通用能力已同步到 DSH 分支。
3. **改善结果展示和办公入口**：Cowork 产物布局、首页 PPT 快捷导航继续完善。

---

## 4. 社区热点

### 4.1 唯一有评论记录的 Issue

- **[#2779 [Bug] 多分身配置下「梦境日记」面板恒为空](https://github.com/netease-youdao/LobsterAI/issues/2779)**  
  - 评论数：**2**
  - 点赞数：**0**
  - 状态：**已关闭**
  - 更新日期：2026-11-22

**核心诉求：** 用户在配置 5 个 Agent、启用显式所有权并指定默认系统 Agent 后，「设置 → 梦境 → 日记」始终显示为空，但工作区中的 `DREAMS.md` 实际持续更新。这意味着数据生成链路正常，故障主要位于前端读取或运行时所有权解析环节。

**背景判断：** Issue 判断内置 OpenClaw 2026.8.1 缺少 `doctor.memory.*` 的 ambient-owner 回退，上游已经修复，但 LobsterAI 尚待跟进。随着项目迁移至 DSH，该问题更应明确区分“旧 OpenClaw runtime 修复”和“DSH runtime 是否同样具备等价回退”。

### 4.2 今日受关注的重要 PR

当前数据未提供 PR 评论数或点赞数，且均显示 `undefined/0`，因此无法进行严格热度排序。按工程影响范围判断，以下 PR 最值得关注：

- **[#3137 多智能体协作与专业 Agent 委派](https://github.com/netease-youdao/LobsterAI/pull/3137)**：与多分身产品的核心价值直接相关。
- **[#3136 DSH 桌面运行时集成](https://github.com/netease-youdao/LobsterAI/pull/3136)**：决定迁移后的桌面任务、定时任务和工具调用能否稳定运行。
- **[#3144 DSH 模型协议与 Kimi K3 兼容修复](https://github.com/netease-youdao/LobsterAI/pull/3144)**：涉及模型可用性和思考能力，属于迁移后的关键兼容层。
- **[#3140 桌面悬浮球跨屏与 DPI 修复](https://github.com/netease-youdao/LobsterAI/pull/3140)**：直接改善多屏 Windows 用户的日常使用体验。

**社区特征：** 今日活跃度主要来自维护者集中合并开发成果，而非社区讨论升温。Issue 样本只有 1 条，不能据此判断整体用户满意度。

---

## 5. Bug 与稳定性

### 严重程度：高

1. **DSH 迁移后的模型协议、思考能力及兼容性缺失**  
   - PR：[#3144](https://github.com/netease-youdao/LobsterAI/pull/3144)  
   - 影响范围：`main`、`openclaw`/DSH 相关模块  
   - 风险：可能导致 Claude Sonnet 系列模型、Anthropic 代理或 Kimi K3 调用异常，思考能力也可能回退。  
   - 状态：**已有 fix PR，已关闭/合并**。

2. **DSH 桌面运行时集成不完整**  
   - PR：[#3136](https://github.com/netease-youdao/LobsterAI/pull/3136)  
   - 影响范围：定时任务、本地技能、媒体工具、重启恢复  
   - 风险：重启后任务状态丢失、任务历史不完整或聊天触发技能安装失败。  
   - 状态：**已有对应 PR，已关闭/合并**。

### 严重程度：中高

3. **多分身配置下梦境日记前端恒为空**  
   - Issue：[#2779](https://github.com/netease-youdao/LobsterAI/issues/2779)  
   - 环境：LobsterAI 2026.9.23、OpenClaw 2026.8.1、5 个 Agent、显式所有权模式。  
   - 影响：日记内容实际写入 `DREAMS.md`，但 UI 无法展示，造成“数据存在、功能不可见”的明显信任问题。  
   - 状态：Issue 已关闭；摘要称上游已修，但当前数据中**未见明确对应的 LobsterAI fix PR**，建议继续核验升级 runtime 或移植回退逻辑后的实际效果。

4. **DSH 多智能体协作与专业 Agent 委派能力缺失或回退**  
   - PR：[#3137](https://github.com/netease-youdao/LobsterAI/pull/3137)  
   - 影响：无法充分利用多 Agent 的独立记忆、技能、人格和工作目录。  
   - 状态：**已有功能 PR，已关闭/合并**。

### 严重程度：中

5. **导出 XLSX 时工作表关系命名空间错误**  
   - PR：[#3143](https://github.com/netease-youdao/LobsterAI/pull/3143)  
   - 影响：`openpyxl` 生成的文件在追加工作表后，严格 XML 解析器可能因 `r:id` 未绑定而失败。  
   - 状态：**已有 fix PR，已关闭/合并**。

6. **桌面伙伴跨显示器和 Windows DPI 下停靠异常**  
   - PR：[#3140](https://github.com/netease-youdao/LobsterAI/pull/3140)  
   - 影响：悬浮球错位、漂移、停靠不牢或位置比例异常。  
   - 状态：**已有 fix PR，已关闭/合并**。

7. **桌面伙伴悬停动画缩放及垂直位置错误**  
   - PR：[#3138](https://github.com/netease-youdao/LobsterAI/pull/3138)  
   - PR：[#3145](https://github.com/netease-youdao/LobsterAI/pull/3145)  
   - 影响：角色悬停时缩小、下跳或局部配色不一致。  
   - 状态：**已有 fix PR，已关闭/合并**。

### 严重程度：低

8. **Cowork 回复产物与元数据操作行布局顺序不合理**  
   - PR：[#3139](https://github.com/netease-youdao/LobsterAI/pull/3139)  
   - 影响：文件卡片、图片、视频等关键成果被元数据和操作按钮干扰阅读。  
   - 状态：**已有 fix PR，已关闭/合并**。

---

## 6. 功能请求与路线图信号

### 明确的新功能 PR

- **首页快捷操作支持 PPT 导航**  
  PR：[#3141](https://github.com/netease-youdao/LobsterAI/pull/3141)  
  该改动表明产品仍在加强“快捷入口 → 办公任务”的低操作成本体验。若后续配套模板、最近文件或场景化入口，首页可能继续成为办公 Agent 的统一启动面板。

- **DSH 跨 Agent 协作与专业 Agent 委派**  
  PR：[#3137](https://github.com/netease-youdao/LobsterAI/pull/3137)  
  这是当前最明确的下一阶段产品方向之一：LobsterAI 的重点正在从单 Agent 对话转向多 Agent 分工、任务路由和上下文隔离。

- **DSH 定时任务、本地技能和媒体工具能力完善**  
  PR：[#3136](https://github.com/netease-youdao/LobsterAI/pull/3136)  
  表明运行时迁移不仅关注聊天接口，也在补齐“个人 AI 助手”的后台执行和工具执行闭环。

### 由 Bug 反映出的潜在路线图

- **记忆功能需要建立跨运行时的一致性保障**  
  Issue：[#2779](https://github.com/netease-youdao/LobsterAI/issues/2779)  
  梦境日记问题暴露了多 Agent 所有权解析与 UI 数据读取之间缺少一致性测试。后续可能需要补充 runtime 能力探测、版本兼容矩阵和 Agent 所有权回归用例。

- **DSH 迁移需要持续同步 engine-agnostic 修复**  
  PR：[#3142](https://github.com/netease-youdao/LobsterAI/pull/3142)  
  这类同步分支说明迁移尚未完全结束，短期路线图大概率仍以“能力对齐、回归修复、发布分支同步”为主。

---

## 7. 用户反馈摘要

今日唯一可提炼的真实用户场景来自 [#2779](https://github.com/netease-youdao/LobsterAI/issues/2779)。

### 真实使用场景

- 用户同时配置 **5 个 Agent**；
- 使用显式所有权模式，并设置默认系统 Agent 为 `main`；
- 后台梦境/记忆文件持续正常生成；
- 用户从设置中的「梦境 → 日记」入口查看内容时始终为空。

### 主要痛点

1. **数据生成与 UI 展示不一致**  
   `DREAMS.md` 已持续更新，但日记面板没有内容。用户容易据此判断记忆、梦境或日记功能整体失效。

2. **多分身场景下缺少可靠的默认/环境 Agent 回退**  
   问题并不局限于单 Agent，而发生在显式所有权和多个 Agent 并存的配置下。

3. **升级路径不够透明**  
   Issue 指出上游 runtime 已修复，但用户仍需确认应升级哪个组件、是否必须替换内置 runtime，以及 DSH 是否包含等价修复。

### 满意度信号

- 当前 Issue 获得 **0 个点赞、2 条评论**，公开认可度有限；
- 没有出现用户对修复效果、升级体验或新功能的进一步确认；
- 因此只能确认原问题已关闭，不能确认用户对修复结果满意。

---

## 8. 待处理积压

### 需继续核验

- **[#2779 梦境日记面板恒为空](https://github.com/netease-youdao/LobsterAI/issues/2779)**  
  虽已关闭，但摘要明确提到“上游已修，待跟进”。建议确认：
  1. 是否已有对应的 runtime 升级或 LobsterAI 侧补丁；
  2. DSH 是否同样支持 `doctor.memory.*` 的 ambient-owner 回退；
  3. 多 Agent 显式所有权模式是否已有回归测试。

### 今日无长期积压信号

当前数据只提供过去 24 小时内的 1 条 Issue 和 10 条 PR，且所有 PR 均已关闭，未展示处于开放状态、长时间未响应的 Issue/PR。因此无法从本批数据确认更长期的历史积压。

建议维护者重点关注以下“隐性积压”：

- DSH 迁移分支与 `release/2026.11.17` 的持续同步是否还有遗漏；
- 模型协议矩阵是否覆盖 Claude、Kimi 以及各 `apiFormat` 组合；
- 多 Agent 委派在长期记忆、技能隔离和权限边界上的回归风险；
- DSH 环境下梦境、记忆与所有权回退是否完成端到端验证。

---

## 总体健康度判断

**健康度：良好，迁移期风险可控但仍需加强回归验证。**

积极信号：

- 24 小时内 **10 条 PR 全部收口，无待合并积压**；
- 今日变更同时覆盖功能扩展、兼容性修复和视觉稳定性；
- DSH 的多 Agent 协作、桌面任务和模型兼容能力推进明显；
- engine-agnostic 修复已开始系统同步至迁移分支。

风险信号：

- 当日没有新版本发布，外部用户未必能立即获得这些修复；
- 唯一 Issue 虽关闭，但缺少明确的对应合并 PR 和用户验证；
- 公开社区讨论较少，当前高活跃度主要来自单一维护者提交，不能完全代表真实用户需求；
- OpenClaw → DSH 迁移涉及运行时、模型协议、Agent 所有权和桌面集成，仍存在组合回归风险。

</details>

<details>
<summary><strong>QwenPaw</strong> — <a href="https://github.com/agentscope-ai/QwenPaw">agentscope-ai/QwenPaw</a></summary>

# QwenPaw 项目动态日报

**统计日期：2026-11-22**  
**数据范围：过去 24 小时**  
**数据来源：GitHub Issues / Pull Requests / Releases**

## 1. 今日速览

过去 24 小时共更新 **6 条 Issues**（其中新开/活跃 4 条、关闭 2 条）和 **11 条 PR**，全部 PR 均处于待合并状态，**暂无新版本发布**。今日讨论重点集中在 Console 前端可用性与稳定性，包括 iOS WebKit 长会话卡顿、键盘无法滚动消息列表、插件路由未注册，以及上下文压缩失败提示误导等问题。当前已有 **3 个直接关联的修复 PR**，分别覆盖键盘滚动、压缩失败提示和 Markdown 表格溢出，但均尚未合并。

项目整体活跃度较高：问题发现到修复响应较快，且出现了首次贡献者与多领域维护者并行参与的情况。不过，11 条 PR 全部积压、若干 XXL/XXXL 级改动仍在评审，且缺乏正式版本发布，说明当前更接近“集中开发与修复阶段”，发布节奏和合并质量仍需关注。

---

## 2. 版本发布

过去 24 小时**无新版本发布**，因此暂无版本更新内容、破坏性变更或迁移说明可报告。

---

## 3. 项目进展

### 今日没有新合并或关闭的 PR

过去 24 小时更新的 **11 条 PR 均未合并、未关闭**。因此，今日没有形成已落地的正式代码变更，项目进展主要体现在待评审补丁和长期功能的持续推进上。

### 重点待合并进展

1. **Console 支持运行时 base-path 部署**
   - PR [#8719](https://github.com/agentscope-ai/QwenPaw/pull/8719)
   - 新增可选 `QWENPAW_BASE_PATH` 配置，使预构建 Console 和 API 可以部署在反向代理子路径下。
   - 涉及部署拓扑、静态资源路径、API 地址及插件路由，变更规模为 XXL，评审和验证成本较高。
   - **进展判断：** 有利于企业内网、路径前缀和反向代理场景，但上线前需要完整验证 Console、API、插件路由及升级兼容性。

2. **让会话历史区域支持键盘焦点**
   - PR [#8854](https://github.com/agentscope-ai/QwenPaw/pull/8854)
   - 将反向消息滚动容器设为具名、可聚焦区域，使用户可通过方向键、PageUp、PageDown 等操作滚动会话。
   - 直接修复 [#8844](https://github.com/agentscope-ai/QwenPaw/issues/8844)，当前处于 Open 状态。
   - **进展判断：** 改动范围较小、目标明确，预计属于可快速合并的高优先级可用性修复。

3. **上下文压缩失败后建议重试，而非清除上下文**
   - PR [#8853](https://github.com/agentscope-ai/QwenPaw/pull/8853)
   - 当 `/compact` 失败时，引导用户解决报错后重试，避免建议执行 `/clear` 导致当前会话信息丢失。
   - 直接修复 [#8848](https://github.com/agentscope-ai/QwenPaw/issues/8848)。
   - **进展判断：** 属于低风险、高价值的防误操作修复，同时兼容原生与自定义压缩策略。

4. **修复 Markdown 宽表格无法横向滚动**
   - PR [#8847](https://github.com/agentscope-ai/QwenPaw/pull/8847)
   - 调整表格滚动容器，解决宽 Markdown 表格超出消息气泡且无法横向滚动的问题。
   - **进展判断：** 虽无对应 Issue 条目，但直接改善长表格、报告和数据展示体验。

5. **修复已保存模型提供商被禁用后无法回退**
   - PR [#8617](https://github.com/agentscope-ai/QwenPaw/pull/8617)
   - 当 `agent.json` 中记录的模型提供商已被关闭时，代理增加回退逻辑，避免所有渠道任务因 `Provider is disabled` 直接失败。
   - 关联 Issue [#8579](https://github.com/agentscope-ai/QwenPaw/issues/8579)。
   - **进展判断：** 这是影响多渠道任务可用性的稳定性修复，但 PR 自 11 月 7 日创建后仍处于 Open，需推动测试和评审。

6. **OpenViking 记忆插件兼容性及清理修复**
   - PR [#8588](https://github.com/agentscope-ai/QwenPaw/pull/8588)
   - 延续 [#7613](https://github.com/agentscope-ai/QwenPaw/pull/7613)，处理自动召回预算、当前 `HintBlock` 格式兼容性和关闭边界情况。
   - **进展判断：** 规模为 XXL，功能价值较高，但验证面广，不宜在缺少回归测试结果时快速合并。

7. **同步 Office Skills**
   - PR [#8479](https://github.com/agentscope-ai/QwenPaw/pull/8479)
   - 将 DOCX、PPTX、XLSX Skills 与 Anthropic 2026 年 7 月更新同步。
   - **进展判断：** 有利于提升办公文档处理能力，但属于 XXXL 级内容更新，需要重点检查脚本安全、依赖、兼容性和回归情况。

8. **补充环境变量 API 的合并、替换和重置语义**
   - PR [#8846](https://github.com/agentscope-ai/QwenPaw/pull/8846)
   - 明确 `PUT /envs` 会整体替换配置，而 `PATCH /envs` 用于合并，并补充重置语义，避免用户误删已有变量。
   - **进展判断：** 属于必要文档修复，可降低配置误操作风险。

9. **文档与许可证文本小修**
   - 修复失效 AWS 安全最佳实践链接：[#8850](https://github.com/agentscope-ai/QwenPaw/pull/8850)
   - 修正 Apache License 2.0 Contribution 定义中的文字错误：[#8849](https://github.com/agentscope-ai/QwenPaw/pull/8849)

### 整体推进程度

今日没有 PR 正式合并，项目代码层面的净推进有限；但已形成针对多个明确用户痛点的候选修复，尤其集中在 Console 交互、前端部署、模型提供商容错和记忆插件稳定性。主要风险不是缺少修复意愿，而是 **PR 积压与评审吞吐量不足**。

---

## 4. 社区热点

> 本期所有 Issue/PR 均显示点赞数为 0，因此无法按点赞数判断热度；以下以评论数、讨论持续时间和影响范围排序。

1. **iOS WebKit 长会话冻结 Console**
   - Issue [#8852](https://github.com/agentscope-ai/QwenPaw/issues/8852)
   - **2 条评论，今日新开。**
   - 用户在 `2.3.0.post1` 及对应 `@agentscope-ai/chat` 版本下，发现 iOS Safari/WebKit 打开或继续长会话时界面冻结。
   - 初步指向 `UserMessageAnchors` 布局抖动，以及反向列布局中的 `content-visibility:auto`。
   - **背后诉求：** 移动端长会话必须保持可交互，不能因消息数量和上下文规模增长而冻结。

2. **消息列表无法通过键盘滚动**
   - Issue [#8844](https://github.com/agentscope-ai/QwenPaw/issues/8844)
   - **2 条评论，持续更新至今日。**
   - 方向键、PageUp/PageDown、Home/End 均无法滚动会话；在无鼠标设备或辅助技术场景下影响尤其明显。
   - 已有修复 PR：[#8854](https://github.com/agentscope-ai/QwenPaw/pull/8854)。
   - **背后诉求：** 完善键盘可访问性，降低对鼠标的强依赖。

3. **压缩失败提示建议 `/clear`，存在信息丢失风险**
   - Issue [#8848](https://github.com/agentscope-ai/QwenPaw/issues/8848)
   - **2 条评论，持续更新至今日。**
   - 当前失败提示引导用户执行 `/clear`，但压缩失败后直接清除上下文可能造成对话信息丢失。
   - 已有修复 PR：[#8853](https://github.com/agentscope-ai/QwenPaw/pull/8853)。
   - **背后诉求：** 错误恢复建议应保留上下文，并提供安全、可逆的操作。

4. **Console 插件路由未注册**
   - Issue [#8851](https://github.com/agentscope-ai/QwenPaw/issues/8851)
   - **1 条评论。**
   - Import map 将入口 chunk 重写为带 `?v=…` 的 URL，疑似导致同一 bundle 被加载两次，插件应用路由没有完成注册。
   - **背后诉求：** 插件系统需要保证模块单例、路由注册幂等，并提供可诊断的加载行为。

5. **运行时 base-path 部署支持**
   - PR [#8719](https://github.com/agentscope-ai/QwenPaw/pull/8719)
   - **Under Review，XXL，更新至今日。**
   - 关注反向代理前缀下的 Console、API 与插件部署。
   - **背后诉求：** 企业环境中常见子路径部署，不应要求用户修改或重新构建前端产物。

6. **OpenViking 记忆插件修复**
   - PR [#8588](https://github.com/agentscope-ai/QwenPaw/pull/8588)
   - **Under Review，XXL，更新至今日。**
   - 聚焦召回预算、格式兼容和关闭流程。
   - **背后诉求：** 长期记忆能力不仅要可用，还需在不同宿主版本和退出路径下保持稳定。

---

## 5. Bug 与稳定性

### 高严重度

1. **iOS Safari/WebKit 长会话冻结**
   - Issue [#8852](https://github.com/agentscope-ai/QwenPaw/issues/8852)
   - **影响：** 打开或继续包含大量上下文的会话时，Console 可能冻结，影响移动端核心使用流程。
   - **状态：** 今日新开，**暂无明确关联修复 PR**。
   - **建议：** 优先建立长消息量、不同 `content-visibility` 配置和 WebKit 性能基准；避免仅通过限制历史长度掩盖根因。

2. **Console 插件入口 bundle 重复加载，导致路由无法注册**
   - Issue [#8851](https://github.com/agentscope-ai/QwenPaw/issues/8851)
   - **影响：** 插件应用即使正确声明路由，也可能报 `PawApp <id> did not register its app route`，造成插件不可用。
   - **状态：** **暂无明确关联修复 PR**。
   - **建议：** 检查 import map、模块缓存键及插件注册生命周期，并补充生产构建集成测试。

### 中等严重度

3. **已选模型提供商被禁用后任务直接失败**
   - 关联 Issue [#8579](https://github.com/agentscope-ai/QwenPaw/issues/8579)
   - 修复 PR：[#8617](https://github.com/agentscope-ai/QwenPaw/pull/8617)
   - **影响：** `agent.json` 保留失效的 `active_model`，导致各渠道运行抛出 `Provider is disabled`。
   - **状态：** **已有 fix PR，但尚未合并。**

4. **上下文压缩失败提示诱导用户清除上下文**
   - Issue [#8848](https://github.com/agentscope-ai/QwenPaw/issues/8848)
   - 修复 PR：[#8853](https://github.com/agentscope-ai/QwenPaw/pull/8853)
   - **影响：** 用户可能执行 `/clear` 清除仍可保留的会话内容，造成信息丢失。
   - **状态：** **已有 fix PR，但尚未合并。**

5. **消息列表不可聚焦，键盘滚动失效**
   - Issue [#8844](https://github.com/agentscope-ai/QwenPaw/issues/8844)
   - 修复 PR：[#8854](https://github.com/agentscope-ai/QwenPaw/pull/8854)
   - **影响：** 无鼠标环境和键盘辅助操作场景下，会话历史难以浏览。
   - **状态：** **已有 fix PR，但尚未合并。**

6. **宽 Markdown 表格溢出且无法横向滚动**
   - PR [#8847](https://github.com/agentscope-ai/QwenPaw/pull/8847)
   - **影响：** 宽表格绘制到消息气泡之外，用户无法查看完整列。
   - **状态：** **已有候选修复，尚未合并。**

### 较低严重度

7. **OpenViking 记忆插件关闭及兼容性边界问题**
   - PR [#8588](https://github.com/agentscope-ai/QwenPaw/pull/8588)
   - **影响：** 可能涉及自动召回预算偏差、`HintBlock` 格式不兼容及关闭阶段异常。
   - **状态：** 修复仍处于 Under Review。

8. **AWS 安全最佳实践参考链接失效**
   - PR [#8850](https://github.com/agentscope-ai/QwenPaw/pull/8850)
   - **影响：** Terraform Skill 文档引用返回 404，降低文档可信度。
   - **状态：** 已有修复，待合并。

---

## 6. 功能请求与路线图信号

1. **后台任务完成后主动通知**
   - 已关闭 Issue [#6475](https://github.com/agentscope-ai/QwenPaw/issues/6475)
   - 用户希望引入 `notice_after_complete` 或类似机制：Agent 启动命令行、子 Agent 或外部 API 异步任务后，先告知用户任务已启动，随后继续处理同一会话中的其他问题，并在任务完成时主动推送通知。
   - **路线图判断：** 这类能力对异步 Agent 编排价值较高，但涉及任务生命周期、事件路由、会话并发和渠道推送。Issue 已关闭，可能已由其他实现或后续方案覆盖；在没有对应 PR 或发布说明前，不宜直接认定已进入下一版本。

2. **与 AgentScope 社区联动**
   - 已关闭 Issue [#7583](https://github.com/agentscope-ai/QwenPaw/issues/7583)
   - 诉求包括社区登录、信箱、快速反馈、查看社区讨论，以及利用 QwenPaw Agent 细化 Bug 反馈报告。
   - **路线图判断：** 有助于形成“本地 Agent—社区反馈—问题修复”闭环，但属于产品生态级功能。Issue 已关闭且没有对应 PR 展示，需进一步确认关闭原因及实现位置。

3. **反向代理子路径部署**
   - PR [#8719](https://github.com/agentscope-ai/QwenPaw/pull/8719)
   - **路线图判断：** 这是近期最明确的基础设施方向之一。若通过评审，预计会进入后续 Console/API 发布，并显著改善企业部署兼容性。

4. **键盘可访问的会话浏览**
   - Issue [#8844](https://github.com/agentscope-ai/QwenPaw/issues/8844) / PR [#8854](https://github.com/agentscope-ai/QwenPaw/pull/8854)
   - **路线图判断：** 更接近短期缺陷修复，而非独立功能规划；若测试通过，可能快速进入下一补丁版本。

5. **上下文压缩的安全恢复路径**
   - Issue [#8848](https://github.com/agentscope-ai/QwenPaw/issues/8848) / PR [#8853](https://github.com/agentscope-ai/QwenPaw/pull/8853)
   - **路线图判断：** 预计属于下一补丁版本中的低风险修复，可避免用户因错误提示误删上下文。

6. **办公文档 Skills 能力升级**
   - PR [#8479](https://github.com/agentscope-ai/QwenPaw/pull/8479)
   - **路线图判断：** 表明项目正在持续强化 DOCX、PPTX、XLSX 等办公自动化能力，可能形成较具差异化的版本亮点；但需先完成安全和兼容性验证。

---

## 7. 用户反馈摘要

### 真实痛点与使用场景

- **长会话在移动端会冻结**：iOS WebKit 用户无法稳定浏览包含大量历史消息和上下文的会话，这是当前最直接的核心体验问题，见 [#8852](https://github.com/agentscope-ai/QwenPaw/issues/8852)。
- **仅依赖鼠标会显著降低可用性**：键盘用户无法使用方向键和翻页键浏览历史，见 [#8844](https://github.com/agentscope-ai/QwenPaw/issues/8844)。
- **错误提示可能造成不可逆数据损失**：压缩失败后建议 `/clear`，用户的核心担忧不是“无法压缩”，而是“被引导删除仍有价值的信息”，见 [#8848](https://github.com/agentscope-ai/QwenPaw/issues/8848)。
- **插件系统存在生产加载一致性问题**：插件开发者在路由已正确注册的情况下仍无法启动应用，说明构建产物、模块实例与注册流程之间存在不透明行为，见 [#8851](https://github.com/agentscope-ai/QwenPaw/issues/8851)。
- **异步长任务期间仍希望保持对话连续性**：用户需要在命令行或子 Agent 后台运行时继续聊天，并在任务完成后收到通知，代表真实的多任务交互场景，见 [#6475](https://github.com/agentscope-ai/QwenPaw/issues/6475)。
- **社区反馈需要更低成本地回流到 Agent 工作流**：用户不仅希望“能反馈”，还希望 QwenPaw 自动整理和细化反馈内容，见 [#7583](https://github.com/agentscope-ai/QwenPaw/issues/7583)。

### 满意度与反馈倾向

本期没有提供点赞或明确满意评价数据，且全部 Issue/PR 的点赞数均为 0，无法得出量化满意度结论。整体反馈以**问题导向、功能诉求和文档纠错**为主，显示社区更关注生产可用性、交互连续性和数据安全，而非单纯追求新增功能数量。

---

## 8. 待处理积压

### 长期未合并的重要 PR

1. **Office Skills 大规模同步**
   - PR [#8479](https://github.com/agentscope-ai/QwenPaw/pull/8479)
   - 2026-10-28 创建，XXXL，仍在评审。
   - **风险：** 涉及大量文档处理代码和依赖，长期不评审会延误能力同步，并增加与上游脱节的风险。

2. **OpenViking 记忆插件后续修复**
   - PR [#8588](https://github.com/agentscope-ai/QwenPaw/pull/8588)
   - 2026-11-05 创建，XXL，持续评审。
   - **风险：** 记忆召回与关闭流程属于高耦合区域，继续积压可能影响宿主版本升级和长期稳定性。

3. **Console 运行时 base-path 支持**
   - PR [#8719](https://github.com/agentscope-ai/QwenPaw/pull/8719)
   - 2026-11-13 创建，XXL，仍在评审。
   - **风险：** 企业部署需求持续等待，合并成本可能随 Console、插件和 API 改动继续上升。

4. **模型提供商禁用后的回退机制**
   - PR [#8617](https://github.com/agentscope-ai/QwenPaw/pull/8617)
   - 2026-11-07 创建，尚未合并。
   - **风险：** 已知可复现的渠道任务失败仍暴露在用户环境中，应优先补充回归测试并推动落地。

5. **模板化 PR 长期未完善**
   - PR [#7828](https://github.com/agentscope-ai/QwenPaw/pull/7828)
   - 2026-09-17 创建，XXXL，描述仍接近模板占位内容，缺少清晰的问题、变更和测试说明。
   - **风险：** 信息不足会阻碍评审，也可能掩盖较大范围变更，建议维护者要求补充，或关闭后拆分重提。

### 长期 Issue 状态需进一步核验

- **异步任务完成通知**
  - Issue [#6475](https://github.com/agentscope-ai/QwenPaw/issues/6475)
  - 2026-07-26 创建，虽已关闭，但当前数据未提供关闭原因或对应 PR。
  - **建议：** 在发布说明或路线图中明确该需求是已实现、重复、转由其他渠道承载，还是暂不实施，避免社区认知不一致。

- **AgentScope 社区登录与反馈联动**
  - Issue [#7583](https://github.com/agentscope-ai/QwenPaw/issues/7583)
  - 2026-09-06 创建，虽已关闭，但当前数据未提供实现状态。
  - **建议：** 若已有基础能力，应补充文档和入口说明；若尚未实现，则需明确后续计划。

---

## 总体健康度判断

**健康度：中高，趋势向好，但发布与合并效率偏弱。**

- **积极信号：** 新问题能快速获得对应修复 PR；贡献者来源扩展；Console、部署、记忆、模型容错和办公技能均有实质推进。
- **主要风险：** 今日没有 PR 合并或版本发布；11 条 PR 全部待处理；多个大改动评审周期偏长；两个高价值问题——iOS 长会话冻结与插件路由未注册——目前尚无明确修复 PR。
- **建议优先顺序：**
  1. 合并低风险、高价值的 `#8854`、`#8853`、`#8847`；
  2. 为 `#8852` 和 `#8851` 分别建立专项修复与回归测试；
  3. 推动 `#8617` 完成测试并合入；
  4. 对 `#8719`、`#8588`、`#8479` 明确拆分计划、测试矩阵和合并目标；
  5. 清理或要求补充 `#7828` 的有效变更说明。

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/NousResearch/hermes-agent">NousResearch/hermes-agent</a></summary>

# Hermes Agent 项目动态日报

**统计日期：2026-11-22**  
**数据范围：过去 24 小时**  
**总体判断：活跃度高，但稳定性与收口压力仍然较大。**

---

## 一、今日速览

- 过去 24 小时共更新 **50 条 Issues、50 条 Pull Requests**，全部 Issue 仍为开放状态，PR 中有 **47 条待合并、3 条已合并或关闭**，项目开发与社区反馈保持高活跃度。
- 今日讨论最集中的是 **Kanban 重复任务误分解、Gateway 在 Windows 上死锁、本地会话仅响应首轮** 等问题，均直接影响任务可靠性。
- 今日 PR 覆盖 Gateway、Desktop、Agent、工具安全、Cron、配置和插件等多个模块，说明修复面较广，但待合并 PR 数量接近 50，**集成、验证和合并积压偏高**。
- 当前没有新版本发布。大量修复仍停留在 PR 阶段，项目整体持续推进，但用户侧的可感知改善尚未形成稳定版本交付。
- 健康度评估：**开发活跃度：高；代码推进：中上；发布与收口效率：偏低；稳定性风险：偏高。**

---

## 二、项目进展

今日没有新版本发布，以下为已经合并或关闭的 PR。

### 1. 插件目录升级 SolverForge Routing 至 0.2.4

- PR：**#157568 plugin-catalog: bump solverforge-routing to 0.2.4**
- 链接：https://github.com/NousResearch/hermes-agent/pull/157568
- 状态：已关闭
- 内容：更新插件目录中的 SolverForge Routing 版本，固定新的发布提交与对应引擎版本。
- 意义：提升插件目录依赖的一致性，属于面向插件生态的例行维护。
- 备注：PR 描述标注问题原因为上游原因，关闭后应确认主分支是否已通过其他 PR 合入相同版本。

### 2. usage 审计补充实际服务等级并提示降级

- PR：**#129262 fix(usage): report the requested and served service_tier, warn on a downgrade**
- 链接：https://github.com/NousResearch/hermes-agent/pull/129262
- 状态：已关闭
- 内容：改进 `service_tier` 使用量审计，区分请求的 tier 与服务端实际提供的 tier，并在发生降级时发出警告。
- 意义：提升 `/fast`、计费审计和可观测性的准确性。
- 备注：PR 已关闭，但提供的数据中没有明确其是否被合并；建议核实主分支是否包含对应改动。

### 3. 其余已关闭/合并项

过去 24 小时统计为 **3 条已合并或关闭 PR**，当前明细中仅以上两条明确列出了状态，其余一条未展示。整体来看，今日真正完成发布或合并的数量有限，暂不宜将大量待合并 PR 视为已经交付给用户。

### 推进程度判断

今日 PR 覆盖面很广，主要推进了：

- **Kanban 自动分解防重复**
- **Windows Gateway 稳定性**
- **Desktop 会话、上传和界面状态修复**
- **Cron 调度与 fire claim 可靠性**
- **Agent compaction 与上下文状态修复**
- **工具安全边界强化**
- **配置、安装更新及包管理兼容性**
- **插件、MCP、飞书认证与模型提供商适配**

但考虑到 **50 条 PR 中 47 条仍待合并**，当前更准确的描述是：**修复管线繁忙，功能推进明显，但版本收口与质量验证仍需加速。**

---

## 三、社区热点

### 1. Kanban 将 block-loop 恢复卡片错误拆成重复工作

- Issue：**#79728 Kanban: block-loop recovery triage is incorrectly auto-decomposed into duplicate work**
- 链接：https://github.com/NousResearch/hermes-agent/issues/79728
- 评论数：**11**
- 优先级：P2
- 状态：开放
- 相关 PR：**#78895**
- PR 链接：https://github.com/NousResearch/hermes-agent/pull/78895

**讨论焦点：**

已有负责人、worktree、分支和开放 PR 的任务，在连续两次遇到同类阻塞后被转入 `triage`；开启 `kanban.auto_decompose` 时，调度器又把恢复卡片当作新任务自动分解，产生重复工作。

**社区诉求：**

- 自动分解必须区分“新建 triage”与“阻塞恢复 triage”。
- 恢复卡片不能绕过已有执行上下文重新开工。
- Kanban 调度器需要保留任务恢复语义，而不是仅依据 `status == triage` 判断。

PR #78895 已明确提出按 `block_loop_detected` 路径进行隔离，是本热点最直接的候选修复。

---

### 2. Windows Gateway 首次崩溃后重启会确定性死锁

- Issue：**#41219 Gateway event loop deadlock within 30-60s of startup on Windows after first crash**
- 链接：https://github.com/NousResearch/hermes-agent/issues/41219
- 评论数：**10**
- 优先级：P2
- 状态：开放

**现象：**

Gateway 首次崩溃后，每次重启都会在 30–60 秒内停止推进。PID 仍存活，内存占用正常，但 asyncio 事件循环不再处理消息。

**用户诉求：**

- 找出崩溃恢复后遗留的锁、未关闭任务、队列或心跳。
- Gateway 进程“存活但不可服务”的状态应能被健康检查识别。
- Windows 重启恢复路径需要专项回归测试。

这是今日最值得优先处理的基础稳定性问题之一，因为故障会表现为进程存在但服务完全失联。

---

### 3. 将 CLI、Remote Desktop 和 Web 统一到 Gateway 会话权威

- Issue：**#145171 Entry-point cutover: serve, remote Desktop and web onto the gateway session authority**
- 链接：https://github.com/NousResearch/hermes-agent/issues/145171
- 评论数：**8**
- 类型：安全/架构
- 优先级：P3
- 状态：开放

**目标：**

逐步将 `serve`、远程 Desktop 和 Web 客户端切换到 Gateway 统一会话权威，减少多套会话状态之间的分叉。

**架构诉求：**

- Desktop、CLI、Web 使用一致的生命周期、身份和会话状态。
- 避免不同入口出现“消息已接收但会话暂停”“通知显示为用户消息”等状态不一致。
- 在迁移期间明确兼容窗口和回退策略。

该议题体现项目正在从多个独立入口走向统一控制面，是重要的长期路线图信号。

---

### 4. Agent 在子任务阻塞后静默停止

- Issue：**#147631 Parent agent silently stops an incomplete task after a local subtask blocker**
- 链接：https://github.com/NousResearch/hermes-agent/issues/147631
- 评论数：**7**
- 优先级：P2
- 状态：开放

**核心痛点：**

Agent 能识别某个子任务已阻塞，也知道总体任务未完成，却直接结束本轮，没有继续执行其他可执行工作，也没有把总体任务显式转换为 blocked/stopped 状态。

**用户诉求：**

- 阻塞应局限于受阻子任务。
- 其他独立工作应继续推进。
- 若无法继续，总任务必须有明确状态和可见反馈。

这直接关系到长任务、并行委派和后台执行的完成率。

---

### 5. 本地会话只回答第一轮，随后永久暂停

- Issue：**#143537 a local session answers its first turn only — live.source and the receipt's source differ only by message_id**
- 链接：https://github.com/NousResearch/hermes-agent/issues/143537
- 评论数：**4**
- 优先级：P1
- 状态：开放

**影响：**

本地 TUI 经共享 Gateway 启动后，每段会话只能成功回答一轮，后续消息无法继续处理。问题疑似来自 `live.source` 与回执 `source` 对同一消息的身份判断不一致。

**风险等级：**

这是今日最严重的单点稳定性问题之一。虽然标为 P1，但用户影响是“核心会话不可持续使用”，实际优先级应较高。

---

### 6. Skill 归档后没有继任记录，恢复时命中旧副本

- Issue：**#154965 curator consolidation archives the source skill with no successor record, and restore-by-name returns an older stale copy**
- 链接：https://github.com/NousResearch/hermes-agent/issues/154965
- 评论数：**4**
- 优先级：P2
- 状态：开放

**用户诉求：**

Curator 合并 Skill A 到 B 后，应保留“A 已被 B 取代”的元数据；按名称恢复时必须恢复当前继任版本，而不是归档目录中的旧副本。

**背后诉求：**

归档、合并、恢复应当构成可追溯的数据生命周期，而不是仅移动文件。

---

### 7. 其他高关注问题

- **#152447 Gateway 终端误判只读 pandas heredoc**  
  https://github.com/NousResearch/hermes-agent/issues/152447  
  评论 3；相关修复 PR：https://github.com/NousResearch/hermes-agent/pull/152501

- **#151909 Desktop 构建子进程收不到 `.env`**  
  https://github.com/NousResearch/hermes-agent/issues/151909  
  评论 3；`ELECTRON_MIRROR` 等构建配置被静默忽略。

- **#156677 无人值守代码执行检查短路后续 deny 策略**  
  https://github.com/NousResearch/hermes-agent/issues/156677  
  评论 3；属于安全边界问题，现状未见明确 fix PR。

---

## 四、Bug 与稳定性

以下按“用户影响和潜在安全风险”排序。

### P1 / 严重

#### 1. 本地会话首轮后永久暂停

- Issue：https://github.com/NousResearch/hermes-agent/issues/143537
- 影响：核心会话无法继续使用，疑似消息身份和来源匹配错误。
- 已有 fix PR：**未发现直接对应 PR**。
- 建议：优先核查 `message_id`、session source 和 live source 的规范化逻辑，并补充“同会话连续多轮”回归测试。

### P2 / 高

#### 2. Windows Gateway 重启后事件循环死锁

- Issue：https://github.com/NousResearch/hermes-agent/issues/41219
- 影响：服务进程看似存活，实际停止服务。
- 已有 fix PR：**未发现明确对应 PR**。

#### 3. Windows Gateway 并发 Kanban worker 下事件循环停滞

- Issue：https://github.com/NousResearch/hermes-agent/issues/152364
- 影响：并发生成时出现 worker-loss 误报、陈旧环境探针缓存和空完成通知。
- 已有 fix PR：**未发现明确对应 PR**。

#### 4. Cron 恢复旧执行时清除新执行持有的 fire claim

- Issue：https://github.com/NousResearch/hermes-agent/issues/152296
- 影响：仍在运行的较新任务被错误判定为失去执行权，结果被丢弃。
- 已有 fix PR：**未发现明确对应 PR**。
- 建议：claim 恢复必须引入执行代次、租约或所有权校验，不能仅按 job 标识清理。

#### 5. `write_file` 阻塞约 458 秒，最终被 idle reaper 回收

- Issue：https://github.com/NousResearch/hermes-agent/issues/152557
- 影响：文件写入可能长时间挂起，会话环境被回收后才在末尾完成。
- 已有 fix PR：**未发现明确对应 PR**。

#### 6. Cron scheduler 遇到 `--help` 或未知参数仍执行 tick

- Issue：由 PR **#152802** 修复
- PR 链接：https://github.com/NousResearch/hermes-agent/pull/152802
- 影响：用户只想查看帮助或输入错误时，可能意外触发所有到期任务。
- 修复状态：**已有 fix PR，待合并**。

#### 7. Desktop host-supervised dashboard 更新后仍运行旧代码

- Issue：https://github.com/NousResearch/hermes-agent/issues/152913
- 影响：更新后继续使用旧实现，引发模型配置 skew，skew 回收还可能指向错误进程。
- 已有 fix PR：**未发现明确对应 PR**。

#### 8. `memory.write_approval` 内联审批在 Gateway 后端不再触发

- Issue：https://github.com/NousResearch/hermes-agent/issues/152217
- 影响：配置看似启用，实际所有受控写入都进入静默暂存状态。
- 已有 fix PR：**未发现明确对应 PR**。

#### 9. API Server 未设置 `API_SERVER_MODEL_NAME` 时发送自身显示名作为 model id

- Issue：https://github.com/NousResearch/hermes-agent/issues/91546
- 影响：配置检查看似正常，但上游拒绝请求。
- 已有 fix PR：**未发现明确对应 PR**。

#### 10. 1M 上下文模型在首 token 前被 stale-stream watchdog 终止

- Issue：https://github.com/NousResearch/hermes-agent/issues/143486
- 影响：健康的长预填充请求被误判为失活，并向用户显示“已停止”。
- 已有 fix PR：**未发现明确对应 PR**。

#### 11. Context compaction 将已完成轮次重新标记为 `[STILL IN PROGRESS]`

- Issue：https://github.com/NousResearch/hermes-agent/issues/152937
- 影响：可能触发重复回答、无限循环和幻觉。
- 相关 PR：https://github.com/NousResearch/hermes-agent/pull/155354
- 修复状态：**已有相邻修复 PR，但摘要显示其重点是 compaction steer anchor，未完全覆盖已完成轮次重注入问题，需核对覆盖范围。**

#### 12. Gateway 启动时同一模块被加载两次

- Issue：https://github.com/NousResearch/hermes-agent/issues/152713
- 影响：产生重复模块实例、独立全局状态和潜在重复副作用。
- 已有 fix PR：**未发现明确对应 PR**。

### P3 / 中等或环境相关

- Windows Desktop + Ollama Qwen 3.5 4B 无法调用终端工具：  
  https://github.com/NousResearch/hermes-agent/issues/152731
- 真实 Chrome profile 快照导致 Web Store 扩展全部损坏：  
  https://github.com/NousResearch/hermes-agent/issues/152367
- Desktop `/discard` 无法通过 Gateway 的 `slash.exec` 自助恢复：  
  https://github.com/NousResearch/hermes-agent/issues/152529
- Docker 非 root 后端无法访问宿主机附件缓存：  
  https://github.com/NousResearch/hermes-agent/issues/152917
- Desktop Messaging 页面设置链接被窗口打开策略静默拦截：  
  https://github.com/NousResearch/hermes-agent/issues/152922
- Copilot Responses 内部重试继承旧 watchdog 时间戳：  
  https://github.com/NousResearch/hermes-agent/issues/153115

---

## 五、功能请求与路线图信号

### 1. 统一会话控制面

- Issue：https://github.com/NousResearch/hermes-agent/issues/145171
- 方向：让 `serve`、Desktop、Web 和远程模式统一使用 Gateway 的会话权威。
- 下一版本可能性：**高**。这是明确跟踪中的架构迁移，且已有 #143537 等会话一致性缺陷作为直接推动力。

### 2. 防止 Kanban 恢复任务被重复拆解

- Issue：https://github.com/NousResearch/hermes-agent/issues/79728
- PR：https://github.com/NousResearch/hermes-agent/pull/78895
- 下一版本可能性：**高**。修复边界清晰，已有专门 PR，回归风险较低。

### 3. 提升 Desktop 上传安全性

- PR：https://github.com/NousResearch/hermes-agent/pull/152353
- 内容：在读取远程附件前先通过 `stat()` 获取大小，限制单文件及单消息总量。
- 下一版本可能性：**高**。修复直接针对 renderer 被超大附件拖垮的问题，安全收益明确。

### 4. 改善 Desktop 多标签页与恢复会话行为

- PR：https://github.com/NousResearch/hermes-agent/pull/152490
- PR：https://github.com/NousResearch/hermes-agent/pull/152829
- 内容：避免空闲标签页劫持其他标签页会话；按结构化 `not_found` 原因恢复会话。
- 下一版本可能性：**中高**。用户影响直接，但需要跨前端和会话后端回归验证。

### 5. 恢复执行代码的跨调用状态

- PR：https://github.com/Users/NousResearch/hermes-agent/pull/152599
- 更正链接：https://github.com/NousResearch/hermes-agent/pull/152599
- 内容：避免终端 `cd` 改变工作目录后，`execute_code` 被错误识别为新 kernel，导致变量和 import 丢失。
- 下一版本可能性：**中高**。改动目标明确，但需验证状态隔离边界。

### 6. Cron 调度入口安全加固

- PR：https://github.com/NousResearch/hermes-agent/pull/152802
- 下一版本可能性：**高**。避免帮助命令或参数拼写错误意外触发任务，收益高且修改范围有限。

### 7. 包管理、镜像与 Nix 环境兼容

- PR：https://github.com/NousResearch/hermes-agent/pull/152351
- 相关 Issue：https://github.com/NousResearch/hermes-agent/issues/152347
- 内容：修复 Nix 包环境中的插件和额外依赖安装；修复 `UV_INDEX_URL` 被静默剥离。
- 下一版本可能性：**中高**。企业、区域镜像和 Nix 用户受影响，但更偏维护性。

### 8. 飞书审批卡片身份配对

- PR：https://github.com/NousResearch/hermes-agent/pull/152659
- 下一版本可能性：**中**。属于飞书插件的明确兼容性修复，范围较小。

### 9. 工具输出与 MCP schema 修复

- MCP 组合分支保留 `required` 字段：  
  https://github.com/NousResearch/hermes-agent/pull/152614
- 对未知扩展名的加粗 `MEDIA:` 标签进行投递：  
  https://github.com/NousResearch/hermes-agent/pull/152668
- 下一版本可能性：**中高**。均直接修复真实输出链路，但影响面相对集中。

---

## 六、用户反馈摘要

### 真实使用场景

- 用户会在 **Windows Desktop + Ollama 本地模型**环境下运行 Agent，并依赖终端工具完成工作；模型无法调用终端是直接阻断。
- 用户通过 **systemd、launchd、Windows 服务或宿主机托管进程**长期运行 Gateway/Dashboard，更新后进程未重启导致旧代码继续运行。
- 用户使用 **Kanban、多 worker 和长任务**，期待失败后自动恢复，而不是生成重复卡片或错误回收执行权。
- 用户会开启 **Skill/Memory 写入审批**，但希望审批在 Desktop 可见，而不是依赖命令行命令。
- 用户使用 **企业或区域 Python 镜像、Nix 包和自定义 Electron 镜像**，对环境变量被静默丢弃非常敏感。

### 主要痛点

1. **“表面存活，实际不可用”**  
   Windows Gateway PID 正常但事件循环停摆，以及本地会话只回答首轮，都会让监控和用户无法准确判断健康状态。

2. **状态机不一致**  
   live source、receipt source、fire claim、compaction anchor 和 Kanban triage 的状态不一致，显示 Gateway 内部各模块尚未完全统一。

3. **配置项“启用但无效”**  
   `.env` 未传入构建子进程、`memory.write_approval` 不再弹出内联审批、`UV_INDEX_URL` 被剥离、API Server model id 回退错误，均属于典型的可观测性问题。

4. **恢复策略可能破坏进行中的工作**  
   Cron 旧执行恢复覆盖新执行、Skill 恢复命中旧副本、Kanban 恢复卡片被再次分解，均会破坏用户已有工作。

5. **Desktop 的可见性问题**  
   Skill/Memory 待审批没有通知，后台进程通知被错误显示为用户消息，状态栏 Backend chip 无法恢复，设置链接点击无反馈。这些虽不一定影响后端执行，却直接降低用户对系统状态的信任。

### 满意度信号

- 多数问题已有清晰复现步骤、环境信息和根因线索，说明社区具备较强的工程诊断能力。
- 本期展示的 Issues 几乎均为 👍 0，说明用户更倾向于提交技术报告而非公开投票；不能简单据此判断需求优先级。
- #152817 获得 **1 个赞**，说明 Desktop 审批入口不可见是较明确且容易传播的用户诉求。

---

## 七、待处理积压

### 1. Windows Gateway 死锁问题已积累较长时间

- Issue：https://github.com/NousResearch/hermes-agent/issues/41219
- 创建时间：2026-06-07
- 今日评论数：10
- 积压判断：这是高影响基础稳定性缺陷，已持续数月且讨论较多，但当前没有明确 fix PR，建议列入近期修复里程碑。

### 2. API Server model id 回退错误

- Issue：https://github.com/NousResearch/hermes-agent/issues/91546
- 创建时间：2026-08-21
- 今日评论数：2
- 积压判断：问题隐蔽但会让正确配置完全不可用，且用户反馈称排查耗时，应尽快提供明确诊断信息和修复。

### 3. Kanban 重复任务分解

- Issue：https://github.com/NousResearch/hermes-agent/issues/79728
- 创建时间：2026-08-05
- 评论数：11
- PR：https://github.com/NousResearch/hermes-agent/pull/78895
- 积压判断：已有 PR 但仍未合并，说明可能存在回归测试、跨模块边界或 review 阻塞。

### 4. Gateway 会话权威迁移

- Issue：https://github.com/NousResearch/hermes-agent/issues/145171
- 创建时间：2026-10-26
- 评论数：8
- 积压判断：属于跨 CLI、Desktop、Web、认证和会话生命周期的长期迁移，应拆分可交付阶段，避免长期保持“大一统”状态。

### 5. 今日新增 Desktop 状态栏问题

- Issue：**#158793 Desktop status bar “Backend” chip can never be restored once a disabled plugin pane holds a group's active slot**
- 链接：https://github.com/NousResearch/hermes-agent/issues/158793
- 创建及更新时间：2026-11-22
- 评论数：1
- 积压判断：刚发现，暂无 PR，但复现范围看似局限；应与 Desktop 插件面板和状态栏 slot 管理修复合并处理。

### 6. PR 合并积压

- 今日共有 **50 条 PR 更新，其中 47 条待合并**。
- 代表性待合并修复：
  - Cron 错误触发：https://github.com/NousResearch/hermes-agent/pull/152802
  - Kanban 重复分解：https://github.com/NousResearch/hermes-agent/pull/78895
  - heredoc 工具误判：https://github.com/NousResearch/hermes-agent/pull/152501
  - 备份文件消失容错：https://github.com/NousResearch/hermes-agent/pull/152512
  - execute_code 状态保持：https://github.com/NousResearch/hermes-agent/pull/152599
  - Desktop 上传大小限制：https://github.com/NousResearch/hermes-agent/pull/152353

**维护建议：**

- 为 P1/P2 安全和稳定性修复建立快速合并通道。
- 将同日关联 PR 按模块分组验证，减少 47 条 PR 并行等待 review 造成的集成成本。
- 在下一次发布前重点回归：Gateway 重启、会话连续多轮、Cron 触发隔离、Desktop 上传大小限制和 Windows 事件循环。

---

## 八、项目健康度结论

Hermes Agent 今日呈现出明显的“高吞吐、高反馈、高风险并存”特征。社区提交的问题定位清晰，大量 PR 已覆盖核心缺陷，说明项目的工程响应能力较强；但 **47 条待合并 PR、无新版本发布、Windows Gateway 死锁、P1 本地会话暂停** 又表明从修复完成到稳定交付之间仍有明显缺口。

当前最值得维护者关注的三个方向是：

1. **先恢复核心会话与 Gateway 的可服务性**，优先处理 #143537、#41219、#152364。
2. **再收口高风险状态机**，重点处理 Cron fire claim、Kanban block-loop、compaction anchor 和模块重复加载。
3. **建立发布节奏与合并机制**，将今日已经具备明确修复路径的 PR 尽快集成到下一版本。

**综合健康度：开发活跃度高，修复覆盖广，但版本交付、跨平台稳定性和 PR 收口能力仍需改善。**

</details>

<details>
<summary><strong>OpenHuman</strong> — <a href="https://github.com/tinyhumansai/openhuman">tinyhumansai/openhuman</a></summary>

# OpenHuman 项目动态日报

**统计日期：2026-11-22**  
**数据范围：过去 24 小时**  
**项目地址：** [tinyhumansai/openhuman](https://github.com/tinyhumansai/openhuman)

---

## 1. 今日速览

过去 24 小时项目共有 **1 条活跃 Issue、1 条待合并 PR**，且 **无新版本发布**。  
新增 PR [#8764](https://github.com/tinyhumansai/openhuman/pull/8764) 提议将 **LLMTR** 接入为内置的 OpenAI 兼容云服务，扩展了自带密钥（BYOK）的模型提供商选择。  
新增 Issue [#8765](https://github.com/tinyhumansai/openhuman/issues/8765) 指出安全策略相关提示默认假设 autonomy policy 已启用，可能造成权限与限制说明不准确。  
整体活跃度评估为 **偏低但正常**：当日有功能推进与问题暴露，但暂无 PR 合并、Issue 关闭或发布落地，实际交付进展有限。

---

## 2. 版本发布

过去 24 小时 **无新版本发布**，因此暂无版本更新内容、破坏性变更或迁移说明。

---

## 3. 项目进展

### 新增功能 PR：接入 LLMTR 云提供商

- **PR：** [#8764 — feat: add LLMTR as a built-in OpenAI-compatible cloud provider](https://github.com/tinyhumansai/openhuman/pull/8764)
- **作者：** @knowhycodata
- **状态：** Open，待合并
- **推进内容：**
  - 将 LLMTR 作为内置的 **OpenAI-compatible** 云提供商加入项目。
  - 支持通过 `https://llmtr.com/v1` 使用 OpenAI 兼容接口。
  - 模型 ID 使用 `vendor/model` 命名空间格式，例如 `minimax/minimax-m3.1-flash`。
  - `llmtr/` 命名空间下的模型托管于土耳其，其他 `vendor/model` 请求则路由至对应供应商。
  - 该 PR 延续项目的 **BYOK（自带密钥）** 多提供商接入模式。

### 进展判断

该 PR 有助于扩大用户可接入的模型渠道，并降低对单一 OpenAI-compatible 网关的依赖。不过目前仍处于 **待审查、待合并** 状态，不能计入已交付能力。若通过维护者审查并补齐认证、错误处理、路由说明及测试，预计可进入近期版本；具体发布时间尚无明确信号。

---

## 4. 社区热点

由于过去 24 小时仅新增 1 条 Issue 和 1 条 PR，且两者均为 **0 评论、0 reaction**，暂无真正意义上的高热度讨论事件。

### 重点 Issue：权限策略提示与实际配置不一致

- **Issue：** [#8765 — Policy-block workaround and security_policy_info description assume the autonomy policy is enabled](https://github.com/tinyhumansai/openhuman/issues/8765)
- **作者：** @swf1996120
- **状态：** Open
- **热度：** 0 评论、0 reaction
- **核心诉求：**
  - 模型侧的部分提示默认认为 autonomy policy 已开启。
  - 但项目实际默认配置为 `[autonomy] enabled = false`。
  - 当策略未启用时，代理仍可能建议用户提升 access tier，但该 tier 并不控制当前阻塞原因。
  - `security_policy_info` 也可能把策略配置描述成实际生效的安全限制，造成误导。

### 重点 PR：新增 LLMTR 提供商

- **PR：** [#8764 — feat: add LLMTR as a built-in OpenAI-compatible cloud provider](https://github.com/tinyhumansai/openhuman/pull/8764)
- **作者：** @knowhycodata
- **状态：** Open
- **热度：** 0 评论、0 reaction
- **核心价值：**
  - 为用户提供新的 OpenAI-compatible 云网关。
  - 借助命名空间模型 ID，支持同一入口下的多供应商路由。
  - 具备土耳其托管与供应商直连路由能力，可能对关注数据地域和多模型切换的用户有吸引力。

---

## 5. Bug 与稳定性

### 中等严重度：策略未启用时仍输出权限相关误导提示

- **问题：** [#8765](https://github.com/tinyhumansai/openhuman/issues/8765)
- **类型：** 策略状态判断错误 / 用户提示不准确 / 潜在权限沟通误导
- **影响范围：**
  - autonomy policy 默认关闭时，模型仍可能按照“策略已开启”的前提生成解决方案。
  - 用户可能被引导去调整实际上无法解除阻塞的 access tier。
  - `security_policy_info` 可能将非生效配置描述为真实安全限制。
  - 主要影响正确性、信任度和排障效率；目前没有证据表明会导致崩溃、数据损坏或权限绕过。
- **严重程度：** **中等**
- **是否有 fix PR：** **暂无**
- **处理建议：**
  - 根据 `[autonomy].enabled` 的真实状态生成策略说明。
  - 在策略关闭时，不应建议提升无法控制相关阻塞的 access tier。
  - 区分“配置存在”“策略已启用”和“当前请求实际受限”三种状态。
  - 补充默认关闭、显式开启及运行时覆盖场景的回归测试。

过去 24 小时未发现崩溃、服务不可用、数据损坏或明确回归类报告。

---

## 6. 功能请求与路线图信号

### 明确的功能扩展：LLMTR 内置云提供商

- **来源：** [PR #8764](https://github.com/tinyhumansai/openhuman/pull/8764)
- **需求/方向：**
  - 持续扩展 OpenAI-compatible 云服务接入。
  - 通过统一入口提供多厂商模型路由。
  - 支持 BYOK，降低用户配置多个独立端点的成本。
  - 提供模型托管地域信息，增强数据驻留选择能力。
- **纳入下一版本的概率判断：** **中等偏高**
  - 该需求已经形成可审查 PR，而非停留在文字提案。
  - 实现范围相对集中，与现有 provider 架构可能较易衔接。
  - 但仍需确认网关认证方式、模型发现机制、路由稳定性、错误反馈、密钥存储及文档测试，因此尚不能判断会进入哪个版本。

### 策略提示一致性修复

- **来源：** [Issue #8765](https://github.com/tinyhumansai/openhuman/issues/8765)
- **路线图信号：**
  - 项目需要强化策略配置、运行时状态与模型可见信息之间的一致性。
  - 权限相关提示应基于真实生效状态，而不是基于默认假设。
- **纳入下一版本的概率判断：** **中等**
  - 问题边界清晰，修复价值明确，通常适合作为小版本修复。
  - 但截至日报时间尚无对应 PR，也没有维护者确认或版本归属。

---

## 7. 用户反馈摘要

今日两条记录均没有评论或 reaction，暂无足够样本提炼具体满意度反馈。根据 Issue 与 PR 描述，可归纳出以下用户痛点与使用诉求：

1. **权限提示与实际策略不一致**  
   用户在 autonomy policy 默认关闭的情况下，可能收到不适用于当前状态的排障建议。这会使用户误以为 access tier 是正确解决路径，并增加排查时间。  
   关联：[Issue #8765](https://github.com/tinyhumansai/openhuman/issues/8765)

2. **模型接入渠道需要更丰富**  
   用户希望以 OpenAI-compatible 方式接入更多模型服务，并使用 `vendor/model` 统一命名，减少在不同提供商之间切换时的配置成本。  
   关联：[PR #8764](https://github.com/tinyhumansai/openhuman/pull/8764)

3. **数据地域与路由透明度成为关注点**  
   LLMTR 方案明确区分土耳其托管模型与其他供应商路由，说明“模型由谁托管、请求最终发往哪里”是用户选择网关时的重要决策因素。  
   关联：[PR #8764](https://github.com/tinyhumansai/openhuman/pull/8764)

4. **暂无满意或不满意评价**  
   因当日无评论、无 reaction，不能对用户整体满意度或口碑趋势作出可靠结论。

---

## 8. 待处理积压

过去 24 小时的数据中，**没有足够历史信息识别长期未响应的重要 Issue 或 PR**。以下两项是当前需要及时跟进的新增积压：

- **[PR #8764](https://github.com/tinyhumansai/openhuman/pull/8764)：** 等待维护者进行代码审查、兼容性验证与合并决策；应避免长期停留于无反馈状态。
- **[Issue #8765](https://github.com/tinyhumansai/openhuman/issues/8765)：** 尚无关联修复 PR。该问题涉及策略提示准确性，建议尽快确认负责人和修复计划。

### 项目健康度总结

**健康度：中等偏稳定，但当日交付动能偏低。**

积极信号是项目同时出现新的 provider 扩展和明确的策略一致性问题反馈，说明生态集成与实际使用反馈仍在继续。主要风险是两条记录都尚未形成闭环：PR 未合并、Issue 无修复，也没有版本发布。维护者当前最值得优先推进的是审查 [PR #8764](https://github.com/tinyhumansai/openhuman/pull/8764)，并为 [Issue #8765](https://github.com/tinyhumansai/openhuman/issues/8765) 建立对应修复与回归测试。

</details>

---
*本日报由 [Big Model Radar](https://github.com/96loveslife/big_model_radar) 自动生成。*
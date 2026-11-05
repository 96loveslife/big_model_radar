# OpenClaw 生态日报 2026-11-05

> Issues: 458 | PRs: 500 | 覆盖项目: 8 个 | 生成时间: 2026-11-05 05:59 UTC

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

**日期：2026-11-05**  
**项目：** [openclaw/openclaw](https://github.com/openclaw/openclaw)  
**观察窗口：** 过去 24 小时

---

## 1. 今日速览

- 过去 24 小时共更新 **458 条 Issues**、**500 条 PRs**，其中分别有 **227 条 Issue 关闭**、**161 条 PR 合并或关闭**，项目处于高吞吐开发状态。
- 今日**没有新版本发布**；当前变更主要停留在 PR、问题确认和修复准备阶段，尚未形成可交付的 Release。
- 讨论焦点明显集中在 **Gateway 稳定性、插件加载/更新、Windows 与 macOS 服务生命周期、内存与 SQLite 生命周期管理**等生产级问题。
- PR 侧已出现多项针对更新回滚、字节流损坏、模型故障转移、Discord 路由、Teams 启动和 Control UI 性能的具体修复；但高优 PR 中仍有多项缺少证明或受合并预算、兼容性决策阻塞。
- 综合判断：**开发活跃度高、问题消化速度尚可，但发布治理和长期稳定性压力偏高**。当前健康度可评为“中高，但存在明显发布阻塞积压”。

---

## 2. 版本发布

今日无新版本发布，因此暂无正式更新说明、破坏性变更或升级迁移指南。

近期最值得关注的版本相关风险仍集中在：

- 插件 source capture 导致 Gateway 长时间阻塞及 staging 目录持续膨胀：
  - [#160959](https://github.com/openclaw/openclaw/issues/160959)
  - [#162585](https://github.com/openclaw/openclaw/issues/162585)
- 升级失败进入 `state-migrated-no-rollback` 后，`doctor --fix` 与 `plugins update` 相互阻塞：
  - [#161921](https://github.com/openclaw/openclaw/issues/161921)
- Windows Control UI 原地更新可能在 “Activating” 阶段永久卡住：
  - [#169844](https://github.com/openclaw/openclaw/issues/169844)
- PostgreSQL 备份状态不允许获取独占所有权时，更新流程可能先替换正在服务的安装，再发生回滚：
  - 修复 PR [#193190](https://github.com/openclaw/openclaw/pull/193190)

---

## 3. 项目进展

### 3.1 更新与安装可靠性

- **更新前增加 PostgreSQL 备份所有权检查**  
  [#193190](https://github.com/openclaw/openclaw/pull/193190) 拟在替换正在运行的安装前验证数据库备份是否可以获取独占状态，避免更新后才发现无法备份并被迫回滚。该 PR 标记为 P1，目前需要维护者审核。

- **修复默认 umask 导致浏览器扩展安装失败**  
  [#186782](https://github.com/openclaw/openclaw/pull/186782) 已关闭，处理 Ubuntu/Fedora 默认 `umask 0002` 下安装包权限被拒的问题。该 PR 关闭不代表主线一定已包含修复，合并状态需以最终提交历史为准。

- **改善 DNS 配置失败的错误提示**  
  [#192127](https://github.com/openclaw/openclaw/pull/192127) 保留缺少域名、非法域名、非 macOS 环境等具体拒绝原因，不再统一显示模糊的 “The CLI command failed”。

### 3.2 渠道与消息路由

- **修复 Discord 非拉丁频道名解析错误**  
  [#188127](https://github.com/openclaw/openclaw/pull/188127) 针对非拉丁频道名被压缩为空 ASCII slug、进而绑定到错误频道的问题。该问题涉及按频道实施的 mention 和工具权限策略，属于安全边界风险。

- **修复 Microsoft Teams 路由冲突导致账户无法启动**  
  [#186709](https://github.com/openclaw/openclaw/pull/186709) 处理默认机器人使用自定义 webhook 路径、命名机器人使用 `/api/messages` 时的路由预留冲突。

- **Telegram 模型选择器改为按运行时拆分**  
  [#193231](https://github.com/openclaw/openclaw/pull/193231) 计划将每个已配置模型运行时作为独立 `/model` 选择按钮，属于用户体验增强。

- **Telegram 非插件回调数据可能被静默丢弃**  
  [#126950](https://github.com/openclaw/openclaw/issues/126950) 已关联开放 PR，问题仍待确认修复质量；影响范围包括无法识别的 `tgcb1:` callback payload。

### 3.3 Gateway 性能与资源管理

- **减少 Session PR 订阅更新中的重复分配**  
  [#193233](https://github.com/openclaw/openclaw/pull/193233) 优化订阅更新时反复构建 viewer policy、重新获取成员关系的问题，降低高并发场景下的 CPU 和分配开销。

- **缩短大型已完成聊天的打开时间**  
  [#183800](https://github.com/openclaw/openclaw/pull/183800) 面向大型聊天历史优化 Web UI 首屏加载。作者明确提示当前仍在合并刷新阶段，不应直接合并。

- **停止关闭 Online 面板后的在线人数刷新**  
  [#193202](https://github.com/openclaw/openclaw/pull/193202) 避免侧栏关闭时继续请求会话和页面计数，属于直接可感知的 Control UI 性能改进。

- **优化子代理取消和生命周期等待诊断**  
  [#193223](https://github.com/openclaw/openclaw/pull/193223) 减少取消任务时的快照复制，并增强慢生命周期诊断。

### 3.4 内存、数据库与数据正确性

- **修复本地 OpenAI 兼容 Embedding 服务导致 `memory_search` 超时**  
  [#187539](https://github.com/openclaw/openclaw/pull/187539) 处理同一主机上多个索引任务争用单一托管 `local` 服务的问题；状态为“需要证明”，仍需确认兼容性。

- **修复 Memory 状态误报“嵌入仍待处理”**  
  [#192817](https://github.com/openclaw/openclaw/pull/192817) 已关闭，拟让完整或空索引不再错误显示 degraded 状态。

- **降低 Knowledge 过滤搜索的重复扫描成本**  
  [#193209](https://github.com/openclaw/openclaw/pull/193209) 已关闭，在保持排序、摘要、分页和作用域检查不变的前提下减少 CPU 消耗。

- **修复字节流在生产者复用缓冲区后返回损坏内容**  
  [#193216](https://github.com/openclaw/openclaw/pull/193216) 针对异步生产者复用底层缓冲区的场景，确保调用者仍收到原始字节；当前仍需维护者提供验证证明。

### 3.5 整体推进程度

从今日数据看，项目并非停滞：458 条 Issue 中关闭 227 条，PR 中合并或关闭 161 条，且新增 PR 已覆盖安装、渠道、Gateway、Memory、Control UI 和模型容错等多条主线。

但由于**今日无 Release**，且多个 P0/P1 修复仍处于“等待证明”“等待作者”“需要产品决策”状态，推进更多体现在代码收敛和修复候选增加，而不是已交付稳定性提升。

---

## 4. 社区热点

### 4.1 高热 Issues

1. **插件捕获阻塞 Gateway 事件循环**
   - [#160959](https://github.com/openclaw/openclaw/issues/160959)
   - **70 条评论**，P0。大型外部插件的依赖树在启动和运行时重新发布阶段阻塞数分钟。
   - **背后诉求**：插件系统必须具备可预测的启动时延，不能在 Gateway 主线程同步执行重型 source capture。

2. **Native Host 执行出现共享状态完整性准入错误**
   - [#177656](https://github.com/openclaw/openclaw/issues/177656)
   - **28 条评论**，P1。稳定版 2026.10.5 已出现至少 28 次失败。
   - **背后诉求**：修复 native host 子进程执行路径，并明确 child effect 是否实际完成，避免“命令返回错误但结果未知”。

3. **Windows 启停、更新和 Scheduled Task 权限不稳定**
   - [#170956](https://github.com/openclaw/openclaw/issues/170956)
   - **28 条评论**，P0。重启、更新和客户端连接均受影响。
   - **背后诉求**：Windows 应成为可可靠运维的一等平台，而非依赖反复重试。

4. **大型 SQLite transcript 清理阻塞 Gateway**
   - [#112423](https://github.com/openclaw/openclaw/issues/112423)
   - **25 条评论**，已关闭。清理过程在 Gateway 线程执行物化、压缩、文件 I/O 和回读。
   - **背后诉求**：将会话维护迁移到后台或分片执行，避免维护任务拖垮实时请求。

5. **Code Mode 在 cron/memory-flush 中缺少 MCP 工具**
   - [#120385](https://github.com/openclaw/openclaw/issues/120385)
   - **25 条评论**，P2。工具目录构建不完整，最终仅显示 “Exec failed”。
   - **背后诉求**：定时任务和特殊 turn 必须使用与普通会话一致的工具发现、授权和错误诊断机制。

6. **短期记忆保留淘汰导致 Dreaming Deep 永不晋升**
   - [#150635](https://github.com/openclaw/openclaw/issues/150635)
   - **24 条评论**。512 条上限与 nightly ingestion 策略冲突。
   - **背后诉求**：记忆管线的召回、压缩、晋升和淘汰策略需要形成闭环，而不是相互抵消。

7. **崩溃恢复后 agent 永久不可用**
   - [#166634](https://github.com/openclaw/openclaw/issues/166634)
   - **23 条评论**。SQLite reclamation checkpoint 过期后，历史、元数据和模型列表等接口持续返回 `UNAVAILABLE`。
   - **背后诉求**：崩溃恢复必须具备自愈能力，不能要求用户手工重建或修复数据库。

8. **macOS Gateway 停止命令失败**
   - [#191944](https://github.com/openclaw/openclaw/issues/191944)
   - **16 条评论**。`stop` 和 `stop --force` 均可能报进程祖先无法完全检查。
   - **背后诉求**：停止操作需要可靠回退路径，且错误提示应直接给出可执行的恢复步骤。

9. **Telegram opaque callback payload 被丢弃**
   - [#126950](https://github.com/openclaw/openclaw/issues/126950)
   - **13 条评论**，P1，存在消息丢失风险。
   - **背后诉求**：非插件调用方生成的合法按钮回调不能因为采用 opaque 格式而被静默忽略。

10. **Native Codex 子进程声明了 OpenClaw 工具但无执行器**
    - [#150822](https://github.com/openclaw/openclaw/issues/150822)
    - **12 条评论**，P1，涉及安全和消息丢失。
    - **背后诉求**：工具声明、实际执行能力和失败回传必须一致，不能向模型暴露虚假工具。

### 4.2 高热 PR 与功能方向

- Telegram 模型选择器：[#193231](https://github.com/openclaw/openclaw/pull/193231)
- iOS 会话共享文件浏览与预览：[#193235](https://github.com/openclaw/openclaw/pull/193235)
- Claude 服务端 Web Search provider：[#192632](https://github.com/openclaw/openclaw/issues/192632)
- Web 搜索 provider fallback chain：
  - 需求 Issue：[#80843](https://github.com/openclaw/openclaw/issues/80843)
  - 相关 PR：[#187539](https://github.com/openclaw/openclaw/pull/187539)
- Memory 按源目录而非 agent 建索引：
  - [#95724](https://github.com/openclaw/openclaw/issues/95724)
- A2A 单向 dispatch/handoff：
  - [#44309](https://github.com/openclaw/openclaw/issues/44309)

### 4.3 社区诉求背后的共同主题

1. **从“功能可用”转向“生产可运维”**：升级、回滚、停止、恢复、诊断必须可靠。
2. **插件系统需要资源边界**：加载、构建、捕获和迁移都应具备超时、隔离及增量更新能力。
3. **多渠道语义必须一致**：Telegram、Discord、Teams、Matrix、Feishu 的路由和错误行为不能平台割裂。
4. **Memory Core 正进入产品化阶段**：当前讨论已从单点搜索扩展到索引、召回、淘汰、Dreaming、状态展示和跨 agent 共享。
5. **Web UI 开始承受性能压力**：大聊天历史、侧栏刷新、模型选择器和移动端体验成为高频改进点。

---

## 5. Bug 与稳定性

### 5.1 P0 / 发布阻塞级

| 问题 | 状态 | 关联 Fix/PR |
|---|---|---|
| 大型外部插件 source capture 令 Gateway 阻塞数分钟 | OPEN；70 评论；影响启动和运行时重发布 | 暂无明确已合并修复：[Issue #160959](https://github.com/openclaw/openclaw/issues/160959) |
| Windows 启动慢、插件关闭不干净、`schtasks` 权限错误 | OPEN；P0；重启和更新不可靠 | 暂无明确已合并修复：[Issue #170956](https://github.com/openclaw/openclaw/issues/170956) |
| Control UI Windows 更新卡在 “Activating”，任务被禁用且包未更新 | OPEN；P0；服务停止后无法恢复 | 暂无明确已合并修复：[Issue #169844](https://github.com/openclaw/openclaw/issues/169844) |
| `state-migrated-no-rollback` 后 doctor 与 plugin update 互相阻塞 | OPEN；P0；插件停留在旧版本 | 暂无明确已合并修复：[Issue #161921](https://github.com/openclaw/openclaw/issues/161921) |

### 5.2 P1 / 高严重度

- Native host shared-state integrity admission 错误：  
  [#177656](https://github.com/openclaw/openclaw/issues/177656)  
  **已有修复状态：未见明确合并修复。**

- Gateway RSS 超出 V8 heap 并导致 OOM、关闭超时：  
  [#154812](https://github.com/openclaw/openclaw/issues/154812)  
  **已有修复状态：未见明确合并修复。**

- Gateway 重启后大量 agent 永久 degraded：  
  [#190307](https://github.com/openclaw/openclaw/issues/190307)  
  **已有修复状态：暂无明确 fix PR。**

- Gateway heap floor 单向上涨，运行对象无法释放：  
  [#185578](https://github.com/openclaw/openclaw/issues/185578)  
  **已有修复状态：暂无明确 fix PR。**

- Telegram opaque callback 静默丢弃：  
  [#126950](https://github.com/openclaw/openclaw/issues/126950)  
  **已有修复状态：存在关联开放 PR，尚未确认合并。**

- Native Codex 子进程虚假暴露 OpenClaw 工具且 detached failure 无法送达：  
  [#150822](https://github.com/openclaw/openclaw/issues/150822)  
  **已有修复状态：未见明确合并修复。**

- 模型 fallback 将 harness/session 错误错误归因于最后一个模型：  
  [#148789](https://github.com/openclaw/openclaw/issues/148789)  
  **已有修复状态：暂无明确合并修复。**

- 长时间流式回复或重复 inline-code 段落拖住 Gateway：  
  - [#186605](https://github.com/openclaw/openclaw/pull/186605)
  - [#186667](https://github.com/openclaw/openclaw/pull/186667)  
  **已有修复状态：已有开放 PR，但受 UI bundle 预算及 owner 决策阻塞。**

### 5.3 P2 / 数据正确性与功能回归

- MCP 整数参数被强制转换为字符串：  
  [#166133](https://github.com/openclaw/openclaw/issues/166133)  
  **修复状态：暂无明确合并修复。**

- Windows 插件 staging 自包含，体积持续线性增长：  
  [#162585](https://github.com/openclaw/openclaw/issues/162585)  
  **修复状态：暂无明确合并修复。**

- Cron narration 与正式消息融合：  
  [#121558](https://github.com/openclaw/openclaw/issues/121558)  
  **修复状态：存在关联开放 PR，未确认合并。**

- Model fallback 对 session failure 的归因错误：  
  [#148789](https://github.com/openclaw/openclaw/issues/148789)  
  **修复状态：暂无明确合并修复。**

- Dashboard 与 Telegram Mini App `/dashboard` 命令冲突：  
  [#142336](https://github.com/openclaw/openclaw/issues/142336)  
  **修复状态：暂无明确合并修复。**

- CLI 出现 `plugins` 配置后帮助输出慢约 35 倍：  
  [#114067](https://github.com/openclaw/openclaw/issues/114067)  
  **修复状态：存在关联开放 PR，未确认合并。**

- Session resume 内部上下文被作为用户消息展示：  
  [#165041](https://github.com/openclaw/openclaw/issues/165041)  
  **修复状态：暂无明确合并修复。**

### 5.4 已关闭但值得复盘

- 大型 SQLite transcript 清理阻塞 Gateway：  
  [#112423](https://github.com/openclaw/openclaw/issues/112423)  
  **状态：已关闭。** 需要确认关闭是否源于修复、stale 标记或产品决策；标签显示 stale，不能简单视为已彻底解决。

- Memory 索引与 embedding cache 无界增长：  
  [#114612](https://github.com/openclaw/openclaw/issues/114612)  
  **状态：已关闭。** 该问题与磁盘长期增长直接相关，建议核验是否已有正式 retention policy。

- Discord SecretRef/env 模式下错误显示 runtime degraded：  
  [#160610](https://github.com/openclaw/openclaw/issues/160610)  
  **状态：已关闭。**

- Feishu 入站消息被解码为 “?”，且无回复：  
  [#117445](https://github.com/openclaw/openclaw/issues/117445)  
  **状态：已关闭。**

- Windows `.cmd` 使用 LF-only 行尾导致随机丢字符：  
  [#119484](https://github.com/openclaw/openclaw/issues/119484)  
  **状态：已关闭。**

---

## 6. 功能请求与路线图信号

### 6.1 近期最可能进入下一版本的方向

#### A. 模型选择与搜索能力

- Telegram 每个模型运行时独立选择按钮：  
  [PR #193231](https://github.com/openclaw/openclaw/pull/193231)
- Control UI 模型选择器状态和移动端布局优化：  
  [PR #192142](https://github.com/openclaw/openclaw/pull/192142)
- Claude 原生 Web Search provider：  
  [Issue #192632](https://github.com/openclaw/openclaw/issues/192632)
- Web Search provider fallback chain：  
  [Issue #80843](https://github.com/openclaw/openclaw/issues/80843)

这些需求共同指向下一版本继续强化“模型运行时分层”和“搜索 provider 韧性”。其中 Telegram/UI 改动实现路径清晰；Claude Web Search 涉及 provider 接口和计费语义，落地确定性相对较低。

#### B. Control UI 与 iOS 工作区体验

- Web UI 大型聊天快速打开：  
  [PR #183800](https://github.com/openclaw/openclaw/pull/183800)
- iOS 对话共享文件浏览和预览：  
  [PR #193235](https://github.com/openclaw/openclaw/pull/193235)
- Templates 工作区文档排序与可发现性：  
  [PR #193215](https://github.com/openclaw/openclaw/pull/193215)
- Cron 运行诊断在摘要页可见：  
  [PR #192765](https://github.com/openclaw/openclaw/pull/192765)

这些 PR 多已附截图或充分证明，说明 Web UI/移动端体验是近期明确的交付方向。

#### C. Gateway 更新及资源可靠性

- 更新前数据库备份前置检查：  
  [PR #193190](https://github.com/openclaw/openclaw/pull/193190)
- OpenCode Go 单 endpoint 故障不拖垮共享 key：  
  [PR #193234](https://github.com/openclaw/openclaw/pull/193234)
- Skills 配置刷新竞态修复：  
  [PR #189754](https://github.com/openclaw/openclaw/pull/189754)
- Worker 拒绝非 UTF-8 Git 路径：  
  [PR #193060](https://github.com/openclaw/openclaw/pull/193060)

这些属于底座稳定性修复，若验证完成，较可能随维护版本或下一常规版本发布。

### 6.2 中长期路线图信号

- **A2A 单向 handoff，避免 reply-back 乒乓**  
  [#44309](https://github.com/openclaw/openclaw/issues/44309)  
  代表多 Agent 协作从“对话式发送”向“任务投递/事件驱动”演进。

- **Reaction 触发 Agent turn**  
  [#17840](https://github.com/openclaw/openclaw/issues/17840)  
  若纳入，将使 emoji reaction 从被动状态变成交互触发器，适用于投票、选项确认和轻量工作流。

- **Control UI 浏览和 fork 历史 channel-chat segment**  
  [#158800](https://github.com/openclaw/openclaw/issues/158800)  
  目标是改善 `/new` 或 `/reset` 后的会话连续性与历史复用。

- **Memory Core 按共享工作区建索引**  
  [#95724](https://github.com/openclaw/openclaw/issues/95724)  
  反映 Memory Core 正从单 agent 工具转向 workspace 级知识层。

- **允许 sandboxed agent 使用 `skill_workshop`**  
  [#91676](https://github.com/openclaw/openclaw/issues/91676)  
  若以默认关闭的显式开关实现，可能进入安全评审阶段；不建议在缺少产品策略前直接开放。

---

## 7. 用户反馈摘要

### 7.1 真实使用场景

- **大量插件与复杂依赖树**：用户实际部署外部/工作区插件，并会遇到分钟级启动阻塞和 Windows staging 无限增长。插件并非边缘功能，而是直接影响日常启动。
- **多 Agent 长期运行**：用户会运行数十个 agent、数百 MB SQLite 存储和高流量群聊；内存、checkpoint、admission timeout 成为实际生产瓶颈。
- **跨平台服务管理**：Windows Scheduled Task、Windows Update UI、macOS `gateway stop` 均在真实运维中失败，用户依赖重试或手工操作。
- **多渠道接入**：Telegram、Discord、Teams、Feishu、Matrix 均出现路由或回调差异，说明用户期待“同一套 Agent 在所有渠道一致工作”。
- **长期知识管理**：用户希望 Memory Core 持续召回、压缩和晋升，而不是只在短期内堆积数据或反复显示“Promoted 0”。

### 7.2 主要不满意点

1. **错误与恢复路径不清晰**  
   用户经常只能看到笼统的 `Exec failed`、`UNAVAILABLE`、`runtime degraded` 或 “The CLI command failed”，缺少可执行的诊断与修复提示。参见：
   - [#120385](https://github.com/openclaw/openclaw/issues/120385)
   - [#166634](https://github.com/openclaw/openclaw/issues/166634)
   - [#192127](https://github.com/openclaw/openclaw/pull/192127)

2. **升级路径不可靠**  
   更新失败后可能出现无法回滚、doctor 与插件更新互相等待、Windows 更新卡死等“恢复工具也失效”的情况：
   - [#161921](https://github.com/openclaw/openclaw/issues/161921)
   - [#169844](https://github.com/openclaw/openclaw/issues/169844)

3. **性能问题具有生产级影响**  
   用户不只是抱怨 UI 延迟，而是报告 Gateway 停止响应、OOM、重启后大量 agent degraded，以及数十分钟无法健康启动：
   - [#154812](https://github.com/openclaw/openclaw/issues/154812)
   - [#190307](https://github.com/openclaw/openclaw/issues/190307)
   - [#160959](https://github.com/openclaw/openclaw/issues/160959)

4. **跨平台与跨渠道一致性不足**  
   Discord 非拉丁频道名可能绑定到错误频道，Telegram callback 被静默丢弃，Teams 账户直接无法启动，说明一致性问题已触及权限和消息可靠性：
   - [#188127](https://github.com/openclaw/openclaw/pull/188127)
   - [#126950](https://github.com/openclaw/openclaw/issues/126950)
   - [#186709](https://github.com/openclaw/openclaw/pull/186709)

### 7.3 积极信号

- 今日新 PR 不仅提交代码，也普遍附有复现条件、环境、用户影响和证明状态，说明贡献流程和工程规范正在改善。
- Control UI、Memory、Gateway 性能优化均出现有明确性能收益描述的候选：
  - [#193202](https://github.com/openclaw/openclaw/pull/193202)
  - [#193209](https://github.com/openclaw/openclaw/pull/193209)
  - [#193233](https://github.com/openclaw/openclaw/pull/193233)
- 多个旧问题被关闭，表明积压清理仍在推进；不过大量 `stale` 标签意味着“关闭”未必等同于“解决”。

---

## 8. 待处理积压

### 8.1 长期高严重度、需维护者明确接手

1. **Gateway 插件捕获阻塞**  
   [#160959](https://github.com/openclaw/openclaw/issues/160959)  
   P0、70 条评论，且存在 Windows 放大版本 [#162585](https://github.com/openclaw/openclaw/issues/162585)。建议拆分为共享任务队列、超时、资源预算和 staging 清理四个可验证子任务。

2. **Native Host 共享状态完整性错误**  
   [#177656](https://github.com/openclaw/openclaw/issues/177656)  
   已在稳定版出现多次，但缺少明确 fix PR。应优先确认 child execution 的状态机与结果归属。

3. **Windows 服务生命周期三件套**  
   - [#170956](https://github.com/openclaw/openclaw/issues/170956)
   - [#169844](https://github.com/openclaw/openclaw/issues/169844)
   - [#161921](https://github.com/openclaw/openclaw/issues/161921)  
   建议建立统一 Windows 安装、更新、停止、回滚测试矩阵。

4. **Gateway 内存与 RSS 无界增长**  
   - [#154812](https://github.com/openclaw/openclaw/issues/154812)
   - [#185578](https://github.com/openclaw/openclaw/issues/185578)  
   两者可能共享底层资源生命周期问题，应联合分析 heap floor、native buffer、session preparation 和引用释放。

5. **崩溃恢复后 agent 永久不可用**  
   [#166634](https://github.com/openclaw/openclaw/issues/166634)  
   属于可用性与自愈问题，应验证异常终止后是否始终可自动恢复。

6. **Native Codex 工具声明与执行不一致**  
   [#150822](https://github.com/openclaw/openclaw/issues/150822)  
   涉及工具能力声明和失败回传，优先级应高于一般功能增强。

### 8.2 高评论但长期未形成明确结论

- Memory dreaming 的“提名与晋升标准不一致”：  
  [#121232](https://github.com/openclaw/openclaw/issues/121232)
- 短期 recall retention 与 deep dreaming 冲突：  
  [#150635](https://github.com/openclaw/openclaw/issues/150635)
- 大型 SQLite transcript 清理：  
  [#112423](https://github.com/openclaw/openclaw/issues/112423)
- Memory 索引及 embedding cache 无界增长：  
  [#114612](https://github.com/openclaw/openclaw/issues/114612)
- Code Mode 工具目录在 cron/memory-flush 中不完整：  
  [#120385](https://github.com/openclaw/openclaw/issues/120385)

这些问题存在共同特征：模块均已基本实现，但状态机、保留策略或工具暴露规则尚未统一，导致多个功能表面存在、组合使用时却失效。

### 8.3 合并阻塞积压

- 长流式回复和 inline-code 导致 Gateway 卡顿：  
  [#186605](https://github.com/openclaw/openclaw/pull/186605)、[#186667](https://github.com/openclaw/openclaw/pull/186667)  
  阻塞点是 Control UI bundle budget 与 owner 决策，而非缺少修复代码。

- 大型聊天历史打开优化：  
  [#183800](https://github.com/openclaw/openclaw/pull/183800)  
  仍在合并刷新，作者明确要求暂勿合并。

- Memory 本地 embedding 搜索超时：  
  [#187539](https://github.com/openclaw/openclaw/pull/187539)  
  需要补足同主机 provider 兼容性证明。

- Discord 非拉丁频道解析：  
  [#188127](https://github.com/openclaw/openclaw/pull/188127)  
  涉及权限策略边界，应要求安全审查和跨语言名称测试。

---

## 结论

OpenClaw 今日呈现“**高开发吞吐、高问题密度、底座稳定性尚未完全收敛**”的状态。Web UI、模型选择、Memory 搜索和渠道体验都有明确进展，但 Gateway 生命周期、插件捕获、跨平台升级和内存回收仍是最可能阻塞下一正式版本的核心因素。

建议下一阶段优先顺序：

1. **统一修复 Windows/macOS 的安装—更新—停止—回滚链路**；
2. **为插件 source capture 设置隔离、并发限制、超时和可回收 staging**；
3. **解决 RSS/heap、SQLite checkpoint 和 memory retention 的共同生命周期问题**；
4. **为 P1 Gateway 卡顿 PR 明确 bundle budget 决策，减少代码已就绪但无法落地的积压**；
5. **在发布说明中明确区分已修复、已关闭 stale、待验证和需迁移事项**。

**今日项目健康度：中高（活跃度高、交付活跃，但稳定性和发布治理风险显著）。**

---

## 横向生态对比

# 个人 AI 助手 / 自主智能体开源生态横向对比报告

**观察日期：2026-11-05｜统计窗口：过去 24 小时**

## 1. 生态全景

过去 24 小时，8 个项目合计更新约 **227 条 Issue、190 条 PR**，但仅 OpenClaw 达到百条级社区吞吐，QwenPaw、Hermes Agent、LobsterAI 处于高活跃区间，NanoBot、OpenHuman、PicoClaw 属中等活跃，IronClaw 则明显偏低。  
生态主线已从“能否对话和调用工具”转向 **生产可运维性**：安装升级、回滚、Gateway 生命周期、内存与数据库释放、跨平台服务管理成为多个项目的共同难题。  
功能层面，Web/Mobile UI、Memory、插件生态、本地模型、Agent-to-Agent 协作继续扩张，但多数仍以 PR 形式存在，今日所有项目均无新 Release，代码收敛与用户可升级版本之间存在明显时滞。  
横向看，OpenClaw 的优势是社区规模、渠道覆盖和功能密度；QwenPaw、Hermes Agent 更偏平台化架构与会话控制；LobsterAI 强调桌面产品体验；NanoBot、OpenHuman、PicoClaw 更贴近轻量或嵌入式 Agent。  
当前最大风险不是模型能力不足，而是 **跨平台一致性、状态可信度、安全失败模式、跨 Agent 消息循环和资源无界增长**。

---

## 2. 各项目活跃度对比

| 项目 | Issues | PRs | Release | 今日状态概览 | 健康度 |
|---|---:|---:|---|---|---|
| **OpenClaw** | **458** | **500** | 无 | Issue 关闭 227；PR 合并/关闭 161；吞吐绝对领先，但 P0/P1 积压明显 | **中高** |
| **QwenPaw** | 11 | 50 | 无 | 17 PR 合并/关闭、33 待合并；功能扩展强，Windows 与记忆稳定性欠佳 | **中高** |
| **Hermes Agent** | 50 | 50 | 无 | 22 PR 合并/关闭、28 待合并；统一 Gateway 架构推进快，治理风险偏高 | **中高** |
| **LobsterAI** | 1 | 17 | 无 | 14 PR 合并/关闭、3 待合并；启动性能与 Cowork 稳定性改善明显 | **较高** |
| **NanoBot** | 4 | 15 | 无 | 3 Issue 关闭；10 PR 合并/关闭；安全和 WebUI 推进快，取消/检查点仍有冲突 | **良好** |
| **PicoClaw** | 5 | 7 | 无 | 5 PR 合并/关闭、2 待处理；贡献持续，但维护、stale 和 Fork 分流风险突出 | **中等偏弱** |
| **OpenHuman** | 5 | 15 | 无 | 4 Issue 关闭；13 PR 合并/关闭；底层修复扎实，发布与登录隔离仍待验证 | **良好** |
| **IronClaw** | 0 | 1 | 无 | 仅 1 条 Dependabot 依赖升级，无合入和用户讨论 | **稳定但低活跃** |

> 注：Issue/PR 数为日报观察窗口内的“更新量”，不完全等同于新建量；健康度同时考虑关闭吞吐、待处理积压、严重度和发布状态。

### 活跃度分层

- **第一梯队：OpenClaw**  
  社区规模遥遥领先，单日吞吐超过其余项目总和，适合作为生态需求与工程趋势的核心参照。

- **第二梯队：QwenPaw、Hermes Agent**  
  两者都有 50 条 PR 更新，属于架构和功能快速扩张期；但待合并 PR 均超过 28 条，验证和整合压力较大。

- **第三梯队：LobsterAI、NanoBot、OpenHuman、PicoClaw**  
  都能在单日内完成多项修复，但侧重点不同：LobsterAI 偏桌面产品，NanoBot 偏轻量 WebUI/运行时，OpenHuman 偏安全模块与桌面身份隔离，PicoClaw 则存在维护连续性疑虑。

- **低活跃观察组：IronClaw**  
  今日只有一条依赖升级 PR，不能据此否定长期质量，但暂时看不到功能交付或社区反馈信号。

---

## 3. OpenClaw 在生态中的定位

### 3.1 社区规模优势

OpenClaw 今日更新 **458 条 Issue、500 条 PR**，相较：

- Hermes Agent、QwenPaw 的 50 条 Issue/PR 量级，高出约一个数量级；
- LobsterAI、NanoBot、OpenHuman 等项目，具备显著更强的讨论密度和贡献者吞吐；
- 已形成从核心 Gateway、插件、Memory、Control UI 到 iOS、Telegram、Discord、Teams、Feishu 等渠道的完整议题网络。

这种规模带来明显优势：问题更容易被复现和交叉验证，第三方集成反馈更快，路线图也更容易由真实生产场景驱动。

### 3.2 核心优势

1. **全栈产品化程度高**  
   Gateway、Web UI、移动端、插件、Skills、Memory、模型路由、渠道接入和升级机制均已形成体系。

2. **多渠道与复杂部署覆盖最广**  
   Telegram、Discord、Teams、Matrix、Feishu 等渠道问题使其成为观察“Agent 如何进入真实消息系统”的最佳样本。

3. **生态扩展性强**  
   插件 source capture、插件更新回滚、插件 staging 膨胀等问题虽然造成阻塞，却也证明外部扩展已成为核心使用方式。

4. **Memory 正在从工具走向平台能力**  
   索引、召回、压缩、Dreaming、淘汰、共享工作区和 Embedding 服务均已进入讨论，生态完整度领先。

5. **可观测性需求强烈**  
   Control UI、模型运行时状态、Session、消息回调和安装状态等均要求“可解释、可诊断、可恢复”。

### 3.3 与同类项目的技术路线差异

| 项目 | 核心路线 | 与 OpenClaw 的主要差异 |
|---|---|---|
| **QwenPaw** | Console、AgentScope、本地模型、多运行时、ACP | 更强调模型运行时治理和会话数据模型；Windows 兼容是当前短板 |
| **Hermes Agent** | 统一 Gateway、Bot Chat、跨 Bot 协作、Desktop | 更强调统一入口、状态权威和跨 Agent 协议，架构收敛意图更强 |
| **LobsterAI** | 桌面助手、Cowork、OpenClaw 集成、媒体生成 | 更偏消费者桌面体验和 OpenClaw 封装层，性能优化最系统 |
| **NanoBot** | 轻量 Agent、WebUI、插件/MCP、运行时恢复 | 更轻量，CI 和工程治理成熟，但并发工具检查点仍有积压 |
| **PicoClaw** | 轻量网关、多 Agent、WebSocket、低资源设备 | 更强调边缘设备与轻量部署，但维护治理和安全闭环较弱 |
| **OpenHuman** | 桌面身份、语音、TinySecurity、Rust Core | 更强调个人身份、凭据和本地数据隔离 |
| **IronClaw** | Rust Agent 与依赖维护 | 今日缺乏足够动态，整体方向暂难判断 |

### 3.4 OpenClaw 的相对短板

虽然活跃度最高，但 OpenClaw 的问题密度和架构复杂度也最高：

- P0 问题集中在 Windows/macOS 服务生命周期、插件阻塞和更新回滚；
- Memory 状态机、检索、晋升、淘汰尚未统一；
- 多处“已关闭”Issue 带有 `stale`，关闭不等于修复；
- 今日没有 Release，用户无法立即获得候选修复；
- 多项 UI 性能 PR 因 bundle budget 或 owner 决策长期阻塞。

因此，OpenClaw 是生态中**需求中心和复杂度中心**，但并非成熟度最高、交付治理最完善的样本。

---

## 4. 共同关注的技术方向

### 4.1 Gateway 与 Agent 运行时可靠性

涉及项目：**OpenClaw、QwenPaw、Hermes Agent、LobsterAI、NanoBot、PicoClaw**

共同诉求：

- Gateway 不得因插件捕获、SQLite 清理、Memory 索引或 Shell 任务阻塞事件循环；
- 会话、Profile、数据库连接和后台任务需要明确生命周期；
- 支持停止、取消、重启、崩溃恢复和故障自愈；
- 后台任务必须可靠回传成功、失败、超时和取消结果。

其中 Hermes Agent 的“后台工作无法可靠回传用户”和 OpenClaw 的子代理取消诊断，代表相同产品诉求：**执行成功不等于用户知情成功**。

### 4.2 安装、升级、热更新与回滚

涉及项目：**OpenClaw、LobsterAI、PicoClaw**

- OpenClaw：Windows 更新卡在 “Activating”、插件更新与 `doctor --fix` 互相阻塞；
- LobsterAI：保存 IM 配置可能重启整个 Gateway，修复方向转向热更新；
- PicoClaw：Gateway 已热重载，但 WebUI 仍错误提示需要重启。

共同趋势是从“配置文件变更即重启”转向 **可验证、原子化、可回滚、无中断的热更新协议**。

### 4.3 跨平台一致性

涉及项目：**全部项目**

高频问题包括：

- Windows 服务、任务计划、进程权限、MCP 启动和编码处理；
- macOS 停止命令、系统睡眠、TLS 握手和原生应用划词；
- Linux 默认 `umask`、shell 和工作区边界。

用户期待已从“能在主要平台运行”升级为 **各平台行为一致、错误一致、恢复路径一致**。

### 4.4 多渠道路由与消息可靠性

涉及项目：**OpenClaw、QwenPaw、Hermes Agent、PicoClaw、LobsterAI**

具体诉求：

- Telegram callback 不得静默丢失；
- Discord 非拉丁频道名不得错误映射；
- Teams 路由冲突不得导致账户无法启动；
- Matrix 多工作区必须能同时激活；
- 钉钉长消息应分片而非静默降级；
- Discord 假连接、WhatsApp Bridge 和 Bot 投递状态必须可恢复。

核心不是“接入了多少渠道”，而是 **路由语义、权限边界和错误语义是否一致**。

### 4.5 Memory 与长期知识管理

涉及项目：**OpenClaw、QwenPaw、OpenHuman**

- OpenClaw：索引、召回、Dreaming、保留淘汰、Embedding 缓存和共享工作区；
- QwenPaw：OpenViking 插件、ReMe 重排、标签索引、Windows 历史召回；
- OpenHuman：对话、记忆和凭据必须按用户 profile 隔离。

趋势是从“提供 memory_search 工具”升级为 **可持久化、可解释、有生命周期、有权限边界的知识层**。

### 4.6 安全边界与失败关闭

涉及项目：**OpenClaw、PicoClaw、NanoBot、QwenPaw、OpenHuman、Hermes Agent**

- PicoClaw：审批 Hook 重载失败后工具可能失去门控；
- NanoBot：TLS 校验、Unix shell 沙箱、工作区边界；
- QwenPaw：Shell 内存上限、单请求媒体总量限制；
- OpenHuman：TinySecurity、密钥作用域和自动流程保存即停用；
- Hermes Agent：密钥脱敏、MCP 授权命令透明展示；
- OpenClaw：插件加载、工具声明和实际执行能力必须一致。

这表明安全要求正从静态文档约束转向 **运行时 fail-closed、资源预算和可审计行为**。

### 4.7 Agent-to-Agent 协作与防止循环

涉及项目：**OpenClaw、Hermes Agent、PicoClaw**

- OpenClaw：A2A 单向 dispatch/handoff、Reaction 触发 Agent；
- Hermes Agent：跨 Gateway Bot 协作、统一 Bot 身份、循环防护；
- PicoClaw：共享上下文、handoff 和发现工具。

关键约束是跨 Agent 协作必须原生具备 **身份、权限、预算、幂等、循环检测和审计**，否则可能造成 Hermes 报告中的巨量模型费用事故。

### 4.8 UI 状态可信度与可观测性

涉及项目：**全部项目**

代表问题：

- NanoBot 模型按钮未显示实际 fallback 模型；
- PicoClaw 热重载状态失真；
- LobsterAI 长会话和图片元数据导致 UI 冻结；
- OpenHuman 登录成功但未切换用户 profile；
- Hermes Desktop 崩溃恢复后消息重复；
- OpenClaw Control UI 大历史加载慢、模型选择和路由状态复杂。

共同标准是：UI 必须展示 **系统实际执行状态**，而不是配置意图或乐观渲染。

---

## 5. 差异化定位分析

### OpenClaw：通用个人智能体操作平台

- **侧重**：多渠道、插件、Memory、Gateway、Control UI、跨平台服务。
- **用户**：个人高级用户、自托管用户、多渠道自动化用户、插件开发者。
- **架构**：Gateway 为核心，连接渠道、Agent、插件、模型、Memory 和 UI。
- **优势**：生态密度、扩展面、社区规模。
- **挑战**：复杂度、P0 发布阻塞、状态机与资源治理。

### QwenPaw：多运行时与本地模型导向的平台

- **侧重**：Console、AgentScope、本地模型、Piccolo/Ollama、ACP、Memory 插件。
- **用户**：模型开发者、本地推理用户、ACP/Agent 平台开发者。
- **架构**：强调运行时能力隔离、本地模型管理、追加式会话数据。
- **优势**：模型接入治理、本地化、ACP 控制能力。
- **挑战**：Windows、Provider 生命周期、Matrix 多工作区。

### Hermes Agent：统一 Gateway 与多 Bot 协作平台

- **侧重**：Bot Chat、统一 Gateway、跨 Profile、跨 Bot、Desktop、消息适配器。
- **用户**：多渠道重度用户、Bot 编排者、需要自托管协作网络的用户。
- **架构**：强调统一消息入口、统一状态权威和 Profile 管理。
- **优势**：多入口收敛、渠道覆盖、跨 Agent 路线。
- **挑战**：Gateway 合并遗留问题、投递幂等、Windows/macOS 一致性。

### LobsterAI：桌面 AI 工作台

- **侧重**：OpenClaw 封装、Cowork、桌面选词、媒体生成、模型分组。
- **用户**：普通桌面用户、内容创作者、非技术用户。
- **架构**：桌面端体验层加 OpenClaw/Gateway 后端。
- **优势**：产品体验、启动性能、本地媒体工作流。
- **挑战**：账号风控、配置热更新、旧 PR 积压、平台化功能方向不稳定。

### NanoBot：轻量、易治理的个人 Agent 框架

- **侧重**：WebUI、插件/MCP、子代理、安全边界、CI 稳定性。
- **用户**：偏好轻量部署、重视 WebUI 与开发流程的个人开发者。
- **架构**：相对简洁，重点在 AgentRunner、配置继承和运行恢复。
- **优势**：工程响应快、CI 修复扎实、安全边界明确。
- **挑战**：并行工具取消、检查点竞争实现、冲突积压。

### PicoClaw：低资源与边缘设备 Agent

- **侧重**：轻量、多 Agent、WebSocket 网关、旧 Android/TV Box/SBC。
- **用户**：边缘硬件用户、IoT/开发板用户、轻量自托管用户。
- **架构**：强调低资源和设备兼容，尝试参考 OpenClaw 扩展网关与多 Agent。
- **优势**：资源占用和设备覆盖潜力。
- **挑战**：维护连续性、Fork 分流、stale 修复、安全问题。

### OpenHuman：个人身份与安全优先的桌面 Agent

- **侧重**：桌面登录隔离、语音、TinySecurity、Rust Core、模块治理。
- **用户**：重视隐私、凭据、本地数据隔离的个人用户。
- **架构**：强模块化，区分 Core、Runtime、TinySecurity 和可验证模块发布。
- **优势**：身份与安全边界设计、底层质量收敛。
- **挑战**：音频回归、登录 profile 切换、模块依赖治理。

### IronClaw：暂以稳定维护为主

- **侧重**：Rust 依赖维护。
- **用户与架构**：今日数据不足，暂不能准确定位。
- **优势**：未见明显负面信号。
- **挑战**：活跃度和交付可见性不足。

---

## 6. 社区热度与成熟度

### 6.1 社区热度

1. **OpenClaw：生态热度最高**  
   单日 958 条更新，多个 Issue 达 20–70 条评论，热点覆盖插件、Gateway、Memory、Windows 和多渠道。

2. **Hermes Agent：架构讨论最集中**  
   Unified Gateway 遗留问题 47 条评论，跨 Gateway Bot 协作 40 条评论。热度不仅来自功能需求，更来自协议设计。

3. **QwenPaw：高吞吐 Beta 阶段**  
   50 条 PR 体现快速开发，但 Windows 问题密集，适合视为高速演进中的 Beta 项目。

4. **LobsterAI：产品驱动型活跃**  
   Issue 少但 PR 多，说明主要通过内部开发与用户反馈推进，17 条 PR 中完成 14 条，交付效率较高。

5. **NanoBot / OpenHuman：规模较小但收敛较快**  
   问题关闭和 PR 完成率较高，社区信号不如 OpenClaw，但工程质量信号较好。

6. **PicoClaw：治理风险主导热度**  
   热点是维护状态和 Fork，而不是具体功能。

7. **IronClaw：低热度**  
   缺少足够用户和贡献者讨论信号。

### 6.2 成熟度分层

#### 快速迭代阶段

- **QwenPaw**：Beta 功能扩张快，但稳定性欠账明显。
- **Hermes Agent**：统一 Gateway 带来的架构重构尚未完全收敛。
- **PicoClaw**：能力扩展快，维护与发布治理跟不上。
- **LobsterAI**：平台化路线扩张较快，但大功能与发布整合存在不确定性。

#### 质量巩固阶段

- **NanoBot**：安全、WebUI、CI 和运行时恢复已进入回归强化期。
- **OpenHuman**：认证、安全模块、Runtime 生命周期和模块版本正在统一。
- **OpenClaw**：开发仍快，但主要工作已明显转向稳定性与发布治理。

#### 稳定维护阶段

- **IronClaw**：今日只有依赖维护，但样本不足以判断是否处于停滞。

---

## 7. 值得关注的趋势信号

### 趋势一：个人 AI 助手正在变成“运行时平台”

竞争焦点已不再是对话界面，而是：

- Gateway 生命周期；
- 插件和 Skill 加载；
- Memory 与上下文管理；
- 模型运行时和 Provider fallback；
- Desktop、TUI、Web UI、移动端和消息渠道的一致性。

**开发者启示：**  
设计 Agent 产品时，应优先定义状态机、事件协议和恢复语义，再扩展功能。一个没有可靠取消、回滚和诊断能力的 Agent，功能越多，生产风险越大。

### 趋势二：跨平台“可运行”正在变成“行为一致”

Windows 和 macOS 集中暴露服务启动、更新、权限、睡眠恢复、TLS、编码和路径问题。

**开发者建议：**

- 建立 Windows/macOS/Linux 的统一 CI 矩阵；
- 对服务启动、停止、更新、回滚、重启建立端到端测试；
- 禁止 UI 静默规范化可能影响上游语义的模型 ID、路径和凭据；
- 对系统睡眠、网络切换和后端延迟就绪提供重连机制。

### 趋势三：多 Agent 协作进入协议设计阶段

OpenClaw 的 A2A handoff、Hermes 的跨 Gateway Bot、PicoClaw 的共享上下文共同表明，下一阶段不只是“Agent 调用 Agent”，而是：

- 能力发现；
- 身份和权限；
- 交接状态；
- 幂等投递；
- 费用与调用预算；
- 循环检测；
- 审计与回执。

**开发者启示：**  
如果没有协议层，直接增加 handoff 或 Bot-to-Bot 消息，很容易产生无限循环、重复执行和不可预测费用。Hermes 的高额 token 事故应被视为行业警示。

### 趋势四：Memory 正在成为独立产品层

多个项目都在处理：

- 索引重建；
- 召回与重排；
- 压缩和归档；
- 保留与晋升；
- Embedding 缓存；
- 多 Agent/工作区共享；
- 用户级数据隔离。

**开发者启示：**  
Memory 不能只做一个向量搜索接口。需要统一数据模型、索引生命周期、状态展示、权限范围和降级策略，并提供可解释的召回原因。

### 趋势五：安全默认从“允许”转向“失败关闭”

审批 Hook 初始化失败、工具能力声明不一致、媒体请求无总量上限、自动流程保存后仍继续运行，均表明安全机制不能只覆盖正常路径。

**开发者建议：**

- 配置或审批模块失败时，默认禁用高风险工具；
- 明确区分“配置未启用”和“保护机制失效”；
- 对工具执行、Shell、媒体上传、插件加载设置时间、内存、递归和总量预算；
- 审批卡片展示真实命令、URL、影响范围和敏感信息遮蔽结果。

### 趋势六：UI 的核心价值从“好看”变成“状态可信”

用户越来越关心：

- 当前真正使用的模型是什么；
- fallback 是否接管；
- 配置是否已经生效；
- 登录后数据是否属于正确用户；
- 后台任务是否完成；
- 消息是否真正送达。

**开发者启示：**  
所有 UI 状态应尽量来自服务端权威事件，而不是本地配置或乐观渲染；不确定时展示 degraded、pending、retrying，而不是显示成功。

### 趋势七：PR 数量不再等于生态质量

QwenPaw、Hermes 的 PR 吞吐很高，但长期存在冲突、stale 和待验证项。OpenClaw 多项关键修复也因证明、预算或 owner 决策停留在待审状态。

**决策者应重点关注：**

1. P0/P1 是否已有可复现的回归测试；
2. 合并状态是否与 Issue 关闭状态一致；
3. 是否存在明确 Release；
4. stale 关闭是否只是清理积压；
5. 大型架构 PR 是否有迁移和回滚方案。

---

## 总结判断

当前生态可概括为：**功能扩张迅速，工程化压力同步上升**。

- **OpenClaw** 是生态规模、渠道和插件复杂度中心，最适合作为需求趋势参照，但也最需要强化发布治理和状态一致性。
- **QwenPaw** 正在构建多运行时、本地模型和 ACP 平台，当前关键在 Windows 与 Provider/记忆稳定性。
- **Hermes Agent** 正向统一 Gateway 和多 Bot 协作演进，协议、安全和跨平台一致性决定其上限。
- **LobsterAI** 最接近成熟桌面产品形态，当前关键在版本发布、stale PR 去留和账号支持闭环。
- **NanoBot、OpenHuman** 的工程质量信号较好，适合观察轻量实现、安全边界和个人身份隔离。
- **PicoClaw** 需要先解决维护连续性和安全 fail-closed，再谈多 Agent 扩展。
- **IronClaw** 今日缺乏足够动态，暂不宜据此判断路线。

对下一版本和下一阶段投入，最值得优先投入的不是新增入口，而是四项基础设施：**统一状态机、可恢复生命周期、幂等消息协议、跨平台回归矩阵**。

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目动态日报

**日期：2026-11-05**  
**数据范围：过去 24 小时 GitHub Issues、PR 与 Releases 更新**

## 1. 今日速览

过去 24 小时共更新 **4 条 Issues** 和 **15 条 PR**，其中 **3 条 Issue 已关闭、10 条 PR 已合并或关闭**，整体推进速度较快。  
今日工作重点集中在 **WebUI 交互完善、Agent 运行时稳定性、安全边界、子代理配置继承和 CI 可靠性** 等方面；已有 PR 修复了子代理误开放 CLI App、图片设置无法关闭、DeepSeek 中断误判及取消任务时并行工具未排空等问题。  
当前仍有 **1 条开放 Issue** 和 **5 条待合并 PR**，其中 3 条与执行批次检查点相关的 PR 已标记冲突，显示持久化恢复方向仍存在较高集成复杂度。  
过去 24 小时无新版本发布，项目健康度评估为 **良好但仍有中等技术债**：问题发现和修复响应积极，但安全、取消语义及检查点一致性仍需持续验证。

---

## 2. 版本发布

过去 24 小时 **无新版本发布**。

---

## 3. 项目进展

### 3.1 WebUI 可观测性与交互能力继续完善

- **[#6562 feat(webui): inspect file context in a live graph sidebar](https://github.com/HKUDS/nanobot/pull/6562)**  
  待合并。该 PR 在会话侧栏新增实时文件上下文图，可展示最新压缩前使用的文件、显式技能等上下文，并支持打开共享预览和回放图谱增长过程。它有助于用户理解 Agent 实际读取了哪些资料，提升长任务的透明度与可调试性。

- **[#6567 feat(webui): surface composer shortcut hints](https://github.com/HKUDS/nanobot/pull/6567)**  
  已关闭。该 PR 尝试在输入框中直接展示命令、提及和技能快捷入口，并覆盖全部 10 种受支持语言。方向提升了 WebUI 的可发现性，但最终未合并，可能需要进一步处理界面密度、输入提示稳定性或产品交互取舍。

- **[#6553 fix(webui): update usage and tool progress during active turns](https://github.com/HKUDS/nanobot/pull/6553)**  
  已关闭。该修复让长任务执行期间持续更新上下文用量、工具调用进度和轮次状态，并在单个工具调用完成时立即发布结果，不再等待整轮任务结束。这直接改善了长任务过程中的状态反馈。

### 3.2 Agent 运行时、安全与恢复能力增强

- **[#6563 fix(security): enforce TLS, shell and workspace boundaries](https://github.com/HKUDS/nanobot/pull/6563)**  
  已关闭。该 PR 集中强化三类运行边界：保持 HTTP、WebSocket 和回退连接的 TLS 证书及主机名校验；在指定 Unix shell 前启动沙箱；限制工作区边界。其意义在于避免错误配置或恶意目标绕过安全限制，是今日最重要的安全方向改动之一。

- **[#6565 fix(agent): keep idle scans off the inbound consumer](https://github.com/HKUDS/nanobot/pull/6565)**  
  已关闭。此前空闲会话扫描占用入站消费循环，存储等待期间可能延迟 `/stop` 等控制指令。新实现将空闲扫描移出入站消费路径，缩短停止命令的响应时间，并降低活跃任务被后台维护阻塞的概率。

- **[#6558 fix(compaction): retain native state across retry and recovery](https://github.com/HKUDS/nanobot/pull/6558)**  
  已关闭。该修复让 Codex 上下文压缩后的原生状态在重试和恢复过程中得以保留，避免重试仍沿用旧 continuation，或在压缩后停止时丢失新状态。这有助于减少重复压缩历史及恢复后的上下文不一致。

### 3.3 模型提供商与工具调用可靠性改进

- **[#6533 fix(providers): report DeepSeek generation interruptions](https://github.com/HKUDS/nanobot/pull/6533)**  
  待合并。DeepSeek Chat Completions 返回 `insufficient_system_resource` 或 `aborted` 时，旧行为可能把中断结果当作成功响应并保存不完整答案。该 PR 将两类中断明确报告为模型错误，提高流式调用和结果落盘的一致性。

- **[#6561 fix(subagent): inherit parent tool configuration](https://github.com/HKUDS/nanobot/pull/6561)**  
  已关闭，对应修复 **[#6554](https://github.com/HKUDS/nanobot/issues/6554)**。子代理过去仅继承父代理的部分配置，可能将 `cliApps.enable` 重置为默认值，导致父代理已禁用的 `run_cli_app` 仍出现在子代理中。该 PR 同步继承完整工具配置及 CLI App 超时设置。

- **[#6560 fix(webui): allow closing image settings without valid credentials](https://github.com/HKUDS/nanobot/pull/6560)**  
  已关闭，对应修复 **[#6555](https://github.com/HKUDS/nanobot/issues/6555)**。图片生成提供商尚未配置时，设置弹窗原逻辑要求保存成功才能关闭，导致用户被困在弹窗内。修复后可直接关闭并保留草稿，改善首次配置体验。

- **[#6559 fix(webui): preserve MCP ready state after plugin toggles](https://github.com/HKUDS/nanobot/pull/6559)**  
  已关闭。启用或禁用 Agent Plugin 后，客户端曾丢失 MCP 的 `runtime_status`，使已经连接的 MCP 从 Apps → Ready 列表中消失。该修复确保插件切换后 MCP 连接状态持续可见。

### 3.4 CI 稳定性优化

- **[#6566 test(webui): allow durable routing checks under CI load](https://github.com/HKUDS/nanobot/pull/6566)**  
  已关闭。调整了 Windows CI 高负载下的持久化路由检查，减少因真实检查点写入耗时超过固定超时而产生的假失败。

- **[#6564 test: stabilize timing-sensitive CI checks](https://github.com/HKUDS/nanobot/pull/6564)**  
  已关闭。Cron 重调度测试原先让回调进入、两次持久化写入和回调完成共享同一两秒超时，在 Windows CI 上容易误报。现已针对时序敏感场景进行稳定化处理。

**进展评估：**  
今日共关闭或合并 **10 条 PR**，覆盖 WebUI、Provider、Agent、子代理、压缩恢复、安全与测试基础设施。项目在功能可见性、运行时控制和安全边界方面均取得实质进展；剩余核心难点主要是并行工具取消和执行批次检查点的一致性。

---

## 4. 社区热点

> 今日提供的数据中评论数和点赞数普遍较低，以下按 Issue/PR 主题相关度与潜在影响排序。

### Issues

1. **[#6550 WebUI: model button does not reflect the active primary or fallback model](https://github.com/HKUDS/nanobot/issues/6550)**  
   - 状态：开放，1 条评论  
   - 热点原因：模型按钮显示的是配置或选中预设，而不是网关通过 `turn_model_updated` 事件确认的实际模型；当 fallback 接管当前轮次时尤其容易误导。  
   - 核心诉求：让 WebUI 明确展示当前轮次真正使用的主模型或回退模型，避免用户误判输出来源、成本和模型能力。

2. **[#6557 Add Sprouts Data MCP preset](https://github.com/HKUDS/nanobot/issues/6557)**  
   - 状态：已关闭，1 条评论  
   - 热点原因：请求预置托管型 Streamable HTTP MCP 连接和 API Key 配置，让用户无需手工搭建 MCP 即可检索企业、人员和公司关系数据。  
   - 核心诉求：降低外部数据源接入门槛，推动垂直领域 MCP 从“手工配置”走向“官方预设”。

### Pull Requests

1. **[#6533 fix(providers): report DeepSeek generation interruptions](https://github.com/HKUDS/nanobot/pull/6533)**  
   - 状态：待合并  
   - 热点原因：直接关系到生成结果完整性。中断若被误当成功，会把残缺回复持久化并展示给用户。

2. **[#6562 feat(webui): inspect file context in a live graph sidebar](https://github.com/HKUDS/nanobot/pull/6562)**  
   - 状态：待合并  
   - 热点原因：把长任务上下文从隐式状态转化为可查看、可回放的用户界面，是当前 WebUI 可解释性方向的重要增强。

3. **[#6563 fix(security): enforce TLS, shell and workspace boundaries](https://github.com/HKUDS/nanobot/pull/6563)**  
   - 状态：已关闭  
   - 热点原因：集中覆盖证书验证、Unix shell 沙箱和工作区隔离，属于影响整个运行时的安全边界改动。

---

## 5. Bug 与稳定性

按影响范围和潜在数据正确性排序：

### 高优先级

1. **并行工具取消后未完全排空**
   - PR：**[#6468 fix(agent): drain parallel tools before finalizing cancelled runs](https://github.com/HKUDS/nanobot/pull/6468)**
   - 状态：待合并，且存在冲突。
   - 风险：某个工具取消或 hook 失败时，兄弟工具可能仍在清理，AgentRunner 却已结束，导致任务收尾和 session lock 释放发生竞态。
   - 判断：问题涉及取消语义、后台任务生命周期和资源释放，建议优先解决。

2. **安全边界与 TLS/沙箱/工作区隔离**
   - PR：**[#6563 fix(security): enforce TLS, shell and workspace boundaries](https://github.com/HKUDS/nanobot/pull/6563)**
   - 状态：已关闭。
   - 风险：配置错误或外部目标可能绕过预期的证书验证、shell 沙箱或工作区限制。
   - 判断：虽非崩溃问题，但安全影响面广，应在后续发布中重点说明覆盖范围与兼容性。

### 中高优先级

3. **执行批次检查点粒度不足**
   - PR：**[#6262 Checkpoint completed tool results at execution-batch boundaries](https://github.com/HKUDS/nanobot/pull/6262)**
   - PR：**[#5946 feat(recovery): persist completed tool results at execution-batch boundaries](https://github.com/HKUDS/nanobot/pull/5946)**
   - 状态：均待合并并存在冲突。
   - 风险：多工具调用执行中途崩溃时，旧检查点可能无法准确表达哪些工具已经完成，恢复后可能重复执行或错误判断状态。
   - 判断：已形成明确修复共识，但存在多个竞争实现，需尽快统一方案。

4. **DeepSeek 中断被误判为成功**
   - PR：**[#6533](https://github.com/HKUDS/nanobot/pull/6533)**
   - 状态：待合并。
   - 风险：不完整回复可能被保存为正常结果，影响数据正确性和用户信任。

5. **子代理继承父工具配置不完整**
   - Issue：**[#6554](https://github.com/HKUDS/nanobot/issues/6554)**
   - Fix PR：**[#6561](https://github.com/HKUDS/nanobot/pull/6561)**，已关闭。
   - 风险：`tools.cliApps.enable: false` 对子代理失效，CLI App 被意外开放；同时可能丢失超时配置。
   - 判断：已有明确修复，关闭状态表明对应处理基本完成。

### 中低优先级

6. **WebUI 模型按钮未反映实际主模型或 fallback**
   - Issue：**[#6550](https://github.com/HKUDS/nanobot/issues/6550)**
   - 状态：开放，暂未看到对应 fix PR。
   - 影响：误导用户对当前模型、fallback 和成本来源的判断。

7. **图片设置弹窗无法关闭**
   - Issue：**[#6555](https://github.com/HKUDS/nanobot/issues/6555)**
   - Fix PR：**[#6560](https://github.com/HKUDS/nanobot/pull/6560)**，已关闭。
   - 影响：首次配置或凭据无效时可能造成界面流程阻塞。

8. **MCP Ready 状态在插件切换后消失**
   - Fix PR：**[#6559](https://github.com/HKUDS/nanobot/pull/6559)**，已关闭。
   - 影响：连接状态展示错误，用户可能误判 MCP 已断开。

9. **Windows CI 下多项固定超时测试不稳定**
   - PR：**[#6566](https://github.com/HKUDS/nanobot/pull/6566)**
   - PR：**[#6564](https://github.com/HKUDS/nanobot/pull/6564)**
   - 状态：均已关闭。
   - 影响：主要表现为 CI 假失败和开发反馈效率下降，不直接影响生产用户。

---

## 6. 功能请求与路线图信号

### 6.1 WebUI 实时文件上下文图

- 需求/实现：**[#6562](https://github.com/HKUDS/nanobot/pull/6562)**
- 该 PR 已进入待合并状态，且与近期 WebUI 持续补强用量、工具进度、MCP 状态的路线一致。
- **路线图判断：较高概率进入下一版本。**  
  它补足 Agent 可解释性，与长任务、上下文压缩和多文件工作流高度相关。建议优先确认性能影响、历史会话兼容及图谱回放的数据边界。

### 6.2 WebUI 快捷入口提示

- 需求/实现：**[#6567](https://github.com/HKUDS/nanobot/pull/6567)**
- 目标是在输入位置直接提示命令、提及和技能入口，并完成多语言覆盖。
- **路线图判断：需求明确，但落地时间不确定。**  
  PR 已关闭，可能因交互设计、语言维护成本或与其他输入提示功能重叠而暂缓；如果重新提交，具备进入后续版本的基础。

### 6.3 Sprouts Data MCP 官方预设

- 需求：**[#6557](https://github.com/HKUDS/nanobot/issues/6557)**
- 诉求包括托管 Streamable HTTP、API Key、企业与人员搜索、相似公司发现、域名或 LinkedIn URL 查询以及关系映射。
- **路线图判断：中等概率进入后续版本。**  
  Issue 已关闭表明需求可能已处理或已有替代路径，但数据中没有显示对应已合并 PR。建议确认最终是以正式预设、社区模板还是外部集成方式交付。

### 6.4 当前轮次模型透明化

- 需求：**[#6550](https://github.com/HKUDS/nanobot/issues/6550)**
- 用户希望模型按钮严格跟随 `turn_model_updated`，并在 fallback 接管时显示真实模型。
- **路线图判断：中等偏高。**  
  这是 WebUI 状态准确性的基础能力，且与现有 gateway 事件机制已经具备技术基础。适合作为下一轮 WebUI 修复合入。

### 6.5 持久化恢复与工具执行一致性

- 相关 PR：**[#6262](https://github.com/HKUDS/nanobot/pull/6262)**、**[#5946](https://github.com/HKUDS/nanobot/pull/5946)**、**[#6468](https://github.com/HKUDS/nanobot/pull/6468)**
- **路线图判断：明确属于可靠性主线，但短期落地存在不确定性。**  
  三条 PR 均有冲突，表明该领域仍在调整中。下一版本是否包含相关能力，取决于检查点格式统一和取消语义收敛。

---

## 7. 用户反馈摘要

今日 Issue 评论较少，尚不足以形成广泛社区共识，但可观察到以下明确痛点：

- **实际模型状态不可见是当前主要 WebUI 信任问题。**  
  用户在 **[#6550](https://github.com/HKUDS/nanobot/issues/6550)** 中指出，模型按钮展示的是预设，而非网关实际使用的主模型或 fallback。该问题会直接影响用户对响应质量、计费和可复现性的判断。

- **首次配置图片生成时存在交互阻塞。**  
  **[#6555](https://github.com/HKUDS/nanobot/issues/6555)** 反映，凭据尚未配置时，关闭操作与保存成功强耦合，导致用户无法退出。该问题由 **[#6560](https://github.com/HKUDS/nanobot/pull/6560)** 修复，属于典型的新用户配置体验优化。

- **子代理权限边界不符合运维预期。**  
  **[#6554](https://github.com/HKUDS/nanobot/issues/6554)** 表明，管理员关闭 `tools.cliApps.enable` 后仍看到子代理暴露 `run_cli_app`。这说明用户对工具权限配置有较强安全预期，修复 **[#6561](https://github.com/HKUDS/nanobot/pull/6561)** 有助于恢复配置可信度。

- **企业数据接入仍依赖手工 MCP 配置。**  
  **[#6557](https://github.com/HKUDS/nanobot/issues/6557)** 展示了 B2B 公司与人员数据查询的现实需求，包括相似公司发现、域名或 LinkedIn URL 检索及关系映射。其核心诉求不是新增单一搜索工具，而是通过预设降低连接成本。

- **长任务和上下文可解释性需求上升。**  
  **[#6562](https://github.com/HKUDS/nanobot/pull/6562)** 反映出用户希望知道 Agent 使用了哪些文件、压缩后保留了哪些上下文，以及这些内容如何随任务增长。

---

## 8. 待处理积压

### 8.1 需要优先处理的开放 Issue

- **[#6550 WebUI: model button does not reflect the active primary or fallback model](https://github.com/HKUDS/nanobot/issues/6550)**  
  当前唯一仍开放的 Issue，且已有 1 条评论。问题直接影响状态可信度，建议尽快确认负责人、修复范围和回归测试。

### 8.2 高冲突、长期开放的 PR

- **[#6262 Checkpoint completed tool results at execution-batch boundaries](https://github.com/HKUDS/nanobot/pull/6262)**  
  自 2026-10-16 起开放，已存在较长时间和冲突。建议与 #5946 合并为统一方案，明确检查点状态机、兼容策略和迁移测试。

- **[#5946 feat(recovery): persist completed tool results at execution-batch boundaries](https://github.com/HKUDS/nanobot/pull/5946)**  
  自 2026-09-28 起开放，属于长期积压。与 #6262 目标高度重叠，应尽快确定保留、关闭或拆分，避免重复维护。

- **[#6468 fix(agent): drain parallel tools before finalizing cancelled runs](https://github.com/HKUDS/nanobot/pull/6468)**  
  自 2026-10-26 起开放且存在冲突，涉及取消、并发清理和 session lock 生命周期。该问题具有生产稳定性影响，建议由维护者集中协调。

### 8.3 尚待合并但近期活跃的 PR

- **[#6533 fix(providers): report DeepSeek generation interruptions](https://github.com/HKUDS/nanobot/pull/6533)**
- **[#6562 feat(webui): inspect file context in a live graph sidebar](https://github.com/HKUDS/nanobot/pull/6562)**

这两条 PR 主题明确且直接影响用户可见的正确性或可解释性，建议优先完成评审与回归验证。

---

**项目健康度结论：良好。**  
过去 24 小时的修复吞吐量较高，安全边界、WebUI 状态反馈、子代理配置和 CI 稳定性均有实质推进。主要风险集中在多工具执行检查点与取消语义：相关 PR 数量多、开放时间长且存在冲突。建议下一阶段优先统一持久化方案、完成并发回归测试，并尽快解决 WebUI 实际模型状态不准确的问题。

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目动态日报

**日期：2026-11-05**  
**数据范围：过去 24 小时**  
**项目健康度评估：中等偏弱，存在明确安全风险；功能开发仍有推进，但维护状态和积压问题需要关注。**

---

## 1. 今日速览

过去 24 小时共更新 **5 个 Issues**、**7 个 PR**，其中 **5 个 PR 已关闭/合并、2 个待处理**，期间 **没有发布新版本**。  
今日的主要进展集中在配置加载、WebSocket 网关、Agent 协作框架、LLM 重试机制及文档规范等方面，但多数相关 PR 是较早创建、今天才完成状态流转。  
社区同时提出了一个高优先级安全问题：重载配置时，如果审批 Hook 重新初始化失败，网关可能在工具调用未被审批的情况下继续提供服务。  
此外，项目维护连续性问题仍突出：有用户认为主仓库已缺乏维护并建立活跃 Fork，而多个 Issue/PR 仍处于 `stale` 状态。  
整体来看，项目仍在演进，但发布节奏、维护响应、安全边界和长期积压是当前健康度的主要风险。

---

## 3. 项目进展

> 今日无新版本发布，因此暂无版本升级、破坏性变更或迁移说明。

### 今日关闭或合并的重要 PR

1. **修复默认模型列表覆盖用户配置**
   - PR：[#957 fix(config): prevent default ModelList from overriding user config](https://github.com/sipeed/picoclaw/pull/957)
   - 解决的问题：当用户只配置 `model_name` 和 `api_key`、省略 `api_base` 时，系统可能错误继承默认 `api_base`，并导致令牌过期或验证失败的 401 错误。
   - 改进效果：
     - 不再错误覆盖用户配置；
     - 保留首次启动时生成完整默认模型列表模板的能力；
     - 对部分配置用户更安全。
   - 评价：这是影响配置正确性和模型接入稳定性的关键修复，有助于减少“看似填写了 API Key，却请求到错误服务”的问题。

2. **重构并完善 `AGENTS.md`**
   - PR：[#1182 feat: add agents.md](https://github.com/sipeed/picoclaw/pull/1182)
   - 将仓库协作说明调整为更轻量、原则导向的指南，减少僵化检查清单。
   - 明确以 `go.mod` 作为 Go 版本信息的来源，并补充面向 AI Agent 与贡献者的指导。
   - 评价：有助于降低 Agent 和新贡献者理解项目规范的门槛，属于治理与开发体验改进。

3. **实现参考 OpenClaw 的 WebSocket 网关接口**
   - PR：[#751 Gateway: Implemented WebSocket interface referencing OpenClaw](https://github.com/sipeed/picoclaw/pull/751)
   - 主要能力：
     - 增加 `--help/-h`；
     - 默认启用 WebSocket；
     - 提供 `/health`、`/ready`；
     - 支持 `--no-websocket` 仅健康检查模式；
     - 保留 `--enable-websocket` 兼容参数；
     - 增加帮助信息、使用示例。
   - 评价：扩展了网关接入方式和可观测性，为外部客户端、自动化部署与健康检查提供了标准化基础。

4. **多 Agent 协作与共享上下文框架**
   - PR：[#423 WIP: base multi-agent collaboration framework & shared context](https://github.com/sipeed/picoclaw/pull/423)
   - 包含线程安全的共享上下文池、Agent handoff 和发现工具。
   - 建立在 Provider 协议重构、模型回退链和多 Agent 路由等既有工作之上。
   - 评价：推动 PicoClaw 从单 Agent 助手向可协作 Agent 平台演进，但该 PR 标记为 WIP，关闭后的完整落地状态仍需结合代码和后续提交确认。

5. **为 LLM 调用加入退避重试**
   - PR：[#594 feat(retry): add retry logic with backoff for LLM calls](https://github.com/sipeed/picoclaw/pull/594)
   - 增加有界重试、逐次扩大的请求超时、退避等待、可重试错误识别和用户提示。
   - 覆盖超时及 HTTP 5xx 等暂时性故障，并集成到主 Agent 循环等路径。
   - 评价：直接改善网络波动、上游模型服务临时异常时的体验，可减少瞬时故障导致的失败。

### 整体推进判断

今日关闭的 PR 覆盖了**配置可靠性、Web 网关标准化、多 Agent 能力、调用韧性、文档治理**五个方向，技术推进面较广。  
不过，没有新版本发布，且多个 PR 从创建到关闭跨越数月，说明“有开发成果”与“能及时向用户交付”之间仍有明显差距。

---

## 4. 社区热点

### 1. 高热度：项目维护状态与 Fork 路线

- Issue：[#3417 Active Fork & Continued Maintenance: afjcjsbx/picoclaw](https://github.com/sipeed/picoclaw/issues/3417)
- 状态：开放
- 评论数：**4**
- 更新日期：2026-11-04
- 热度判断：这是今日评论最多的 Issue，反映的不只是单个功能诉求，而是项目治理和可持续维护问题。

**背后诉求：**

- 用户认为主仓库可能已处于缺乏维护的状态；
- 社区仍对 PicoClaw 有明显需求；
- 希望通过 Fork 保持项目继续迭代；
- 潜在诉求包括持续修复、发布版本、回应 Issue/PR，以及明确主仓库与 Fork 的关系。

**风险提示：**  
Fork 分流可能带来贡献者和用户分裂。若主仓库没有明确维护或迁移计划，两个实现长期并行容易造成功能、依赖和兼容性分叉。

### 2. 安全议题：审批 Hook 重载失败后工具失去保护

- Issue：[#3456 Security: a failed approval-hook re-initialization during reload leaves the gateway serving with tools ungated](https://github.com/sipeed/picoclaw/issues/3456)
- 状态：开放
- 创建及更新时间：2026-11-04
- 评论数：0
- 热度判断：评论尚少，但它是今日新出现且安全影响最直接的问题。

**背后诉求：**

- 配置重载失败时，不应继续以“工具已受审批保护”的状态对外服务；
- 审批 Hook 的初始化失败应触发明确的失败关闭（fail-closed）行为；
- 网关状态、错误日志和可用性应准确反映实际保护状态；
- 最好提供可验证的回归测试。

该问题适合列入最高优先级处理队列。

### 3. 待合并修复：Discord 网关握手死锁

- PR：[#3452 fix(discord): bump discordgo fork past the gateway handshake deadlock](https://github.com/sipeed/picoclaw/pull/3452)
- 状态：开放、标记为 `stale`
- 更新日期：2026-11-04
- 热度判断：关注度不算最高，但直接影响 Discord 通道可用性。

**背后诉求：**

- 避免 Bot 表面显示“已连接”，实际无法收发消息；
- 避免心跳停止且日志无明显异常；
- 升级依赖 Fork，以规避当前锁定提交中的握手死锁。

---

## 5. Bug 与稳定性

按严重程度排列如下。

### 严重：审批 Hook 重载失败后，工具调用可能失去审批门控

- Issue：[#3456](https://github.com/sipeed/picoclaw/issues/3456)
- **影响：** 网关继续提供服务，但工具调用可能不再经过审批 Hook。
- **风险：** 未经授权的工具执行风险，属于安全边界失效，而不仅是普通功能故障。
- **已有 Fix PR：** **暂无**
- **建议：** 最高优先级处理；重载失败时关闭工具能力或拒绝继续运行，并向状态接口暴露明确的降级状态。

### 高：热重载已生效，但 WebUI 仍错误提示“需要重启”

- Issue：[#3453 WebUI falsely reports "restart required" after gateway hot-reload has already applied the config](https://github.com/sipeed/picoclaw/issues/3453)
- **影响：** 配置约 2 秒内已由 Gateway 应用，但 WebUI 仍提示重启，`gateway_restart_required` 持续为 `true`，直至启动器或服务重启。
- **风险：** 用户误判配置状态，可能进行不必要的重启，或无法确认当前运行配置是否生效。
- **已有 Fix PR：** **暂无明确对应 PR**
- **建议：** 统一 Gateway、启动器和 WebUI 的配置状态协议，在热重载成功时主动推送或轮询更新状态。

### 高：未知 Provider 前缀被强制转为小写，破坏大小写敏感模型 ID

- Issue：[#3454 Model identifier validation suggests lowercasing unknown provider prefixes, breaking case-sensitive upstream model IDs](https://github.com/sipeed/picoclaw/issues/3454)
- **影响：** 对类似 `ACME/gpt-4o-mini` 的自定义上游模型，点击 “Fix” 后会将前缀改为 `acme`，可能破坏大小写敏感的模型标识。
- **风险：** 配置被错误修改后出现模型不存在、路由错误或调用失败。
- **已有 Fix PR：** **暂无明确对应 PR**
- **建议：** 只对已知 Provider 名称进行规范化；未知前缀应原样保留，仅提示可能拼写错误。

### 中高：Discord 通道可能永久失联

- PR：[#3452](https://github.com/sipeed/picoclaw/pull/3452)
- **影响：** Discord Bot 虽显示已连接，但消息无法收发、心跳停止，且可能没有明显日志。
- **风险：** 用户会认为账号或配置错误，实际更可能是锁定依赖中的握手死锁。
- **已有 Fix PR：** **有，PR #3452，但尚未合并且已标记 `stale`。**

### 中：Anthropic thinking-always 模型在 Token 凭据下调用失败

- PR：[#3447 fix(anthropic): make claude-haiku-5-5 (thinking-always models) work with token credentials](https://github.com/sipeed/picoclaw/pull/3447)
- **影响：** 对 `claude-haiku-5-5` 等强制思考模型使用 Token 认证时，可能因仍发送已弃用的 `temperature` 参数而收到 HTTP 400。
- **风险：** 特定模型或认证方式下 Anthropic 接入不可用。
- **已有 Fix PR：** **有，PR #3447，但尚未合并且已标记 `stale`。**

### 中：Android 旧设备与模拟器架构兼容性不足

- Issue：[#3451 Add Android API 19 support for x86_32 and x86_64 architectures](https://github.com/sipeed/picoclaw/issues/3451)
- **影响：** Android 4.4（API 19）x86_32 与 x86_64 设备或模拟器不在当前支持范围。
- **风险：** 依赖旧版 TV Box、平板和 SBC 的用户无法安装或稳定运行。
- **已有 Fix PR：** **暂无**

---

## 6. 功能请求与路线图信号

### 1. Android API 19 与旧 x86 架构支持

- Issue：[#3451](https://github.com/sipeed/picoclaw/issues/3451)
- 用户希望覆盖 Android 4.4 API 19，以及 x86_32、x86_64 架构。
- 目标场景包括旧 TV Box、平板和单板计算机。
- **路线图判断：** 属于明确的兼容性需求，但可能涉及构建链、依赖库和最低系统版本调整，落地成本可能较高。若社区能提供可复现设备、CI 镜像及维护者支持，可进入后续兼容性计划；在缺少验证条件前，较难判断具体版本。

### 2. 多 Agent 协作和共享上下文

- PR：[#423](https://github.com/sipeed/picoclaw/pull/423)
- 诉求包括共享黑板、Agent 间交接、发现工具和共享上下文池。
- **路线图判断：** 从已存在的 Provider 协议重构、模型回退链及多 Agent 路由来看，多 Agent 已是明确演进方向。该 PR 虽已关闭，但应确认其能力是完整合入、被替代，还是仅作为后续开发基础。

### 3. WebSocket 网关与健康检查

- PR：[#751](https://github.com/sipeed/picoclaw/pull/751)
- 提供 `/health`、`/ready` 和仅健康检查模式。
- **路线图判断：** 明显服务于部署、自动化运维和外部客户端集成。已有实现基础，但是否进入稳定版本仍需看最终合入状态、接口契约和文档。

### 4. LLM 请求的自动恢复能力

- PR：[#594](https://github.com/sipeed/picoclaw/pull/594)
- 有界重试、超时递增和退避机制可提升模型服务不稳定时的可用性。
- **路线图判断：** 属于典型稳定性增强，建议在确认重试上限、幂等性和工具调用边界后优先纳入稳定版本。

### 5. Anthropic 新模型认证兼容

- PR：[#3447](https://github.com/sipeed/picoclaw/pull/3447)
- **路线图判断：** 这是兼容具体新模型与认证组合的修复。由于已有明确 PR，优先级高于一般功能扩展，建议尽快复核并安排合入。

### 6. Discord 通道稳定性

- PR：[#3452](https://github.com/sipeed/picoclaw/pull/3452)
- **路线图判断：** 依赖升级已经具备明确方向，建议进行回归测试后尽快合并，避免频道处于“假连接”状态。

---

## 7. 用户反馈摘要

### 真实使用痛点

- **配置是否真正生效难以判断。**  
  用户在开启热重载后看到 Gateway 已经应用配置，但 WebUI 仍持续提示需要重启，说明前后端状态同步不可靠。  
  相关 Issue：[#3453](https://github.com/sipeed/picoclaw/issues/3453)

- **自定义模型命名空间可能被 UI 擅自修改。**  
  对第三方、大小写敏感的上游模型，用户需要保留原始模型 ID，而不只是接受内置 Provider 的规范化建议。  
  相关 Issue：[#3454](https://github.com/sipeed/picoclaw/issues/3454)

- **旧 Android 硬件仍有真实存量。**  
  用户明确提到旧 TV Box、平板和 SBC 场景，说明“低资源、广泛设备兼容”仍是 PicoClaw 的重要差异化诉求。  
  相关 Issue：[#3451](https://github.com/sipeed/picoclaw/issues/3451)

- **Discord 集成存在静默失效风险。**  
  Bot 看似在线但无法工作，属于高困惑度故障；用户需要更明确的心跳、连接和错误状态反馈。  
  相关 PR：[#3452](https://github.com/sipeed/picoclaw/pull/3452)

### 社区情绪与满意度信号

- 正面信号：社区仍愿意提交代码、补充文档，并提出完整复现和修复方案，说明项目仍有较强的参与者基础。
- 负面信号：多个 Issue/PR 在无人推进时被标记为 `stale`，同时出现“项目缺乏维护、另建 Fork”的讨论，暴露出维护者响应能力不足。
- 当前不满意点主要不是功能数量，而是：
  1. Bug 修复能否及时合入；
  2. 热重载和 WebUI 状态是否可信；
  3. 安全机制在异常路径下是否仍然有效；
  4. 项目未来由哪个仓库继续维护。

---

## 8. 待处理积压

### 高优先级

1. **安全 Issue #3456**
   - 链接：[Issue #3456](https://github.com/sipeed/picoclaw/issues/3456)
   - 尚无修复 PR，也没有后续评论。
   - 建议立即确认负责人、复现条件及修复期限。

2. **Discord 死锁修复 PR #3452**
   - 链接：[PR #3452](https://github.com/sipeed/picoclaw/pull/3452)
   - 已标记 `stale`，但问题可导致通道完全不可用。
   - 建议重新打开评审，或由维护者接管并提交替代补丁。

3. **Anthropic thinking-always 兼容 PR #3447**
   - 链接：[PR #3447](https://github.com/sipeed/picoclaw/pull/3447)
   - 已标记 `stale`，已有明确复现与修复方向。
   - 建议复核测试覆盖并安排合入，避免新模型支持继续落后。

### 中优先级

4. **热重载状态误报 Issue #3453**
   - 链接：[Issue #3453](https://github.com/sipeed/picoclaw/issues/3453)
   - 已有清晰复现，但尚未看到对应修复。
   - 建议明确由 Gateway、WebUI 还是启动器团队负责。

5. **模型标识大小写误改 Issue #3454**
   - 链接：[Issue #3454](https://github.com/sipeed/picoclaw/issues/3454)
   - 风险明确、修复范围预计较小，适合快速处理并补回归测试。

6. **Android API 19 支持 Issue #3451**
   - 链接：[Issue #3451](https://github.com/sipeed/picoclaw/issues/3451)
   - 需要先确认维护者是否仍希望支持如此旧的系统，以及 CI 和设备测试资源。

### 治理层面

7. **主仓库与活跃 Fork 的关系**
   - 链接：[Issue #3417](https://github.com/sipeed/picoclaw/issues/3417)
   - 这是今日评论最多的条目，也是最需要维护者公开回应的事项。
   - 建议明确：
     - 主仓库是否继续维护；
     - Fork 是否成为推荐开发分支；
     - Issue 和 PR 的迁移策略；
     - 发布与安全修复责任；
     - 如何避免依赖和安全公告分叉。

---

## 今日结论

PicoClaw 今日不是“没有进展”，而是呈现出一个较典型的状态：**技术贡献持续存在，但交付、维护响应和治理没有同步跟上**。配置、WebSocket、多 Agent、重试等方向的 PR 表明项目功能边界仍在扩展；与此同时，审批 Hook 失效、Discord 静默死锁和热重载状态失真等问题直接影响可信运行。

当前最值得维护者采取的行动顺序是：

1. **先处置审批 Hook 安全问题 #3456；**
2. **推动 Discord 与 Anthropic 两个现成修复 PR 脱离 `stale`；**
3. **修复热重载状态同步和模型 ID 大小写误改；**
4. **明确主仓库与活跃 Fork 的维护边界；**
5. **安排下一次版本发布，集中交付安全、配置和通道稳定性修复。**

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw 项目动态日报

**报告日期：** 2026-11-05  
**统计周期：** 过去 24 小时  
**项目地址：** [nearai/ironclaw](https://github.com/nearai/ironclaw)

---

## 1. 今日速览

IronClaw 今日整体开发活动较低：过去 24 小时没有 Issue 更新，也没有新版本发布，仅新增并更新了 1 个待合并 PR（[#8168](https://github.com/nearai/ironclaw/pull/8168)）。该 PR 由 Dependabot 自动提交，计划将 Rust `zip` 依赖从 8.6.0 升级至 9.0.5，属于依赖维护而非新增功能。

由于当日没有 PR 合并或关闭，也没有用户问题反馈，无法确认项目在功能交付和稳定性修复方面取得实质进展。项目当前健康度可评估为**稳定但低活跃**，工程维护连续性正常，但缺少可观测的用户讨论与版本发布活动。

**今日活跃度：**

| 指标 | 过去 24 小时 | 状态 |
|---|---:|---|
| Issue 更新 | 0 | 暂无用户问题或功能讨论 |
| PR 更新 | 1 | 1 个待合并依赖升级 |
| PR 合并/关闭 | 0 | 当日无代码合入 |
| 新版本发布 | 0 | 无发版活动 |

---

## 2. 版本发布

过去 24 小时无新版本发布，因此暂无正式版本更新、破坏性变更或迁移说明。

---

## 3. 项目进展

### 依赖升级 PR

- **[#8168 — chore(deps): bump zip from 8.6.0 to 9.0.5](https://github.com/nearai/ironclaw/pull/8168)**
  - **状态：** OPEN
  - **作者：** [@dependabot](https://github.com/dependabot)
  - **类别：** `dependencies`、`rust`
  - **变更范围：** 将 `zip` crate 从 8.6.0 升级至 9.0.5
  - **上游说明：** 上游 v9.0.5 包含 Bug 修复；当前 PR 摘要未完整展示具体变更内容。
  - **维护价值：** 有助于吸收 ZIP 处理依赖的上游修复，并保持依赖版本更新。

该 PR 尚未合并，因此今日项目代码库没有因该变更获得实际更新。由于 `zip` 9.x 属于主版本升级，合并前仍应验证 API 兼容性、归档读写行为及现有测试结果。

### 今日推进程度

- **已合并的重要 PR：** 0
- **已关闭的重要 PR：** 0
- **实际合入功能或修复：** 暂无
- **整体推进判断：** 仅有依赖维护进入待审状态，尚未形成可发布的产品进展。

---

## 4. 社区热点

过去 24 小时没有 Issue 更新；PR 共 1 条，且没有评论、点赞或审批互动。因此暂无“讨论最活跃”“评论最多”或“反应最多”的事项。

### 今日唯一热点

- **[#8168 — bump zip from 8.6.0 to 9.0.5](https://github.com/nearai/ironclaw/pull/8168)**
  - 热度信号：0 条评论、0 个点赞
  - 背后诉求：自动更新 Rust ZIP 依赖，以获取上游修复并减少依赖技术债。
  - 社区影响：当前未形成人工讨论，关注点主要是主版本升级的兼容性及合并风险。

---

## 5. Bug 与稳定性

过去 24 小时没有新报告的 Bug、崩溃或回归问题，也没有面向具体缺陷的修复 PR。

### 当前可见风险

1. **`zip` 主版本升级风险（低至中，需验证）**
   - 相关 PR：[#8168](https://github.com/nearai/ironclaw/pull/8168)
   - `zip` 从 8.6.0 升至 9.0.5 跨越大版本，可能涉及 API 调整、行为差异或依赖约束变化。
   - **是否已有 fix PR：** 该 PR 本身是依赖升级，不是针对 IronClaw 已报告缺陷的修复；当前也未见专项兼容性 fix PR。
   - **建议验证：**
     - ZIP 文件创建、读取和解压流程；
     - 文件名编码、路径及权限元数据处理；
     - 加密或受支持压缩格式；
     - 异常输入、损坏归档和边界尺寸处理；
     - Rust 构建、Cargo 锁文件及完整测试套件。

2. **潜在上游修复收益**
   - 上游 `zip` v9.0.5 明确包含 Bug 修复。
   - 现有摘要未列出全部修复项，需结合[上游发布说明](https://github.com/zip-rs/zip2/releases)及 PR diff 判断这些修复是否会影响 IronClaw 的实际使用路径。

---

## 6. 功能请求与路线图信号

过去 24 小时没有用户提出新的功能需求，也没有新增路线图相关 PR，因此无法从当日数据中确认下一版本的具体功能方向。

当前唯一可观察信号是依赖维护：

- **[#8168](https://github.com/nearai/ironclaw/pull/8168)** 表明项目仍在持续维护 Rust 依赖链，并关注压缩处理组件的上游改进。
- 如果测试与兼容性检查通过，该依赖升级可能被纳入下一次常规维护或版本发布；但由于尚无 release 计划，不能据此判断具体发版时间。
- 当前没有足够数据支持“新增功能将被纳入下一版本”的结论。

---

## 7. 用户反馈摘要

过去 24 小时没有 Issue 评论或 PR 评论，无法提炼真实用户痛点、使用场景以及满意/不满意反馈。

可确认的反馈情况：

- 用户问题与使用场景：**无可用样本**
- 正面或负面评价：**无可用样本**
- PR 互动情况：[#8168](https://github.com/nearai/ironclaw/pull/8168) 当前为 0 评论、0 点赞，尚未出现人工反馈

因此，今日项目健康度判断主要依据代码活动，而非社区满意度。

---

## 8. 待处理积压

当日数据只显示 1 个 OPEN PR，没有提供足够的历史 Issue/PR 清单，无法识别长期未响应的积压事项，也无法计算具体积压天数。

### 今日待处理项

- **[#8168 — bump zip from 8.6.0 to 9.0.5](https://github.com/nearai/ironclaw/pull/8168)**
  - 当前状态：OPEN、待合并
  - 创建及更新时间：2026-11-04
  - 当前评论数：0
  - 处理建议：确认 CI 状态，审查主版本升级差异，并在 ZIP 相关回归测试通过后尽快合入或给出明确反馈。
  - 积压风险：目前较低；该 PR 创建时间较近，尚不构成长期未响应事项。

---

## 总体健康度结论

**健康度：稳定、低活跃，维护信号正常。**

今日没有用户问题、版本发布或重要功能合入，项目未出现明显的社区负面信号；唯一活动是自动依赖升级 PR [#8168](https://github.com/nearai/ironclaw/pull/8168)。维护者应优先完成该主版本升级的兼容性验证和 CI 检查。由于缺少历史积压数据及用户评论，本日报无法评价长期响应效率、路线图清晰度或实际用户满意度。

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI 项目动态日报

**日期：2026-11-05**  
**数据范围：过去 24 小时**  
**仓库：** [netease-youdao/LobsterAI](https://github.com/netease-youdao/LobsterAI)

---

## 1. 今日速览

- 过去 24 小时共更新 **1 条 Issue、17 条 PR**，其中 **14 条 PR 已合并或关闭，3 条仍待合并**；无新版本发布。
- 今日开发重点集中在 **OpenClaw 启动性能、Gateway 连接速度、媒体生成、桌面端交互和 Cowork 会话稳定性**，多条性能优化和缺陷修复已关闭，表明项目迭代效率较高。
- 性能改进较为系统：从避免无效 Dreaming 清理、减少技能检查、移除同步 PowerShell 调用，到提前建立 Gateway 客户端连接，均针对实际启动耗时和阻塞问题。
- 稳定性方面重点处理了 **超大 Cowork 会话、上下文压缩失败、图片元数据膨胀、可见子代理无法生成图片、IM 配置需重启 Gateway** 等问题。
- 当前唯一新增 Issue 为账号风控申诉，用户称可能因使用一键签到插件触发禁用机制；该问题涉及账号策略与合规边界，维护者需尽快确认处置流程。

**项目健康度评估：较健康。** 今日 PR 数量较多且多数已合并或关闭，功能、修复与性能优化并行推进；但仍有 **3 条 PR 待合并**，同时账号风控申诉缺少公开处置进展，需要关注账号策略、申诉响应及积压清理。

---

## 3. 项目进展

> 今日无新版本发布，因此暂无发行说明、破坏性变更或迁移事项。

### 3.1 OpenClaw 启动与 Gateway 性能优化

今日最显著的方向是降低 OpenClaw Gateway 启动延迟和主进程阻塞：

- [PR #3001：关闭未启用 Dreaming 时的启动清理](https://github.com/netease-youdao/LobsterAI/pull/3001)  
  此前 `gateway_start` 会清理中断 Dreaming 遗留的会话和记录，即使 Dreaming 未启用也会执行，并在启动后再次运行。现在仅在相关功能开启时处理，减少无效 I/O 与启动负担。

- [PR #3000：更早连接 Gateway 客户端](https://github.com/netease-youdao/LobsterAI/pull/3000)  
  针对 Windows 端从 Gateway ready 到桌面客户端握手之间约 **2.3–2.7 秒**的串行等待，减少模块加载并调整连接流程，属于直接改善启动响应速度的重要优化。

- [PR #2997：原生读取 Windows 进程启动时间](https://github.com/netease-youdao/LobsterAI/pull/2997)  
  原实现每次 Gateway 启动会同步启动 PowerShell 读取进程信息，重复约 **6 次、累计阻塞约 2.5 秒**；改为原生读取后，可减少子进程创建和事件循环阻塞。

- [PR #2996：仅加载允许列表内的内置技能](https://github.com/netease-youdao/LobsterAI/pull/2996)  
  Windows 启动阶段曾同步检查 runtime 的 **51 个 skill** 和 **4 个 custodian skill**，其中约 75% 的启动时间消耗在 `fs.access` 与依赖探测。PR 改为只处理允许列表中的捆绑技能，降低无效检查。

- [PR #2990：跳过正常关闭数据库的完整性检查](https://github.com/netease-youdao/LobsterAI/pull/2990)  
  针对大型配置下启动缓慢问题，通过 clean-close seal 等机制，避免对正常关闭的 Agent 数据库重复执行全文件 `PRAGMA integrity_check`。

**进展评价：**  
这些改动形成了从“减少无效工作”到“移除同步重操作”再到“更早建立连接”的完整启动链路优化。虽然当前数据未提供统一基准测试结果，但多个 PR 给出了具体耗时或调用次数，说明优化具有较强的问题针对性。

### 3.2 Cowork 与上下文稳定性

- [PR #2999：不再将生成图片以内联 base64 存入消息元数据](https://github.com/netease-youdao/LobsterAI/pull/2999)  
  某包含 413 条消息、13 张图片的会话，其 `cowork_messages.metadata` 膨胀至 **1.12 GB**；图片本身约 52 MB，却因重复保存为 base64 Data URL 被放大约 21 倍。该 PR 修复了包含大量图片时会话卡顿数秒的问题。

- [PR #2982：恢复超大上下文并展示压缩进度](https://github.com/netease-youdao/LobsterAI/pull/2982)  
  当输入超过模型窗口后，自动压缩请求本身也可能超限。修复后系统会按上限缩小并分段更新摘要，全部成功后再继续原任务；不可恢复时保留输入并明确提示，同时补齐压缩开始、结束、失败与取消状态。

**进展评价：**  
这一阶段从“修复极端数据膨胀”推进到“让上下文压缩具备失败恢复能力”，直接改善长会话和大附件场景的可靠性。

### 3.3 媒体生成与子代理能力

- [PR #2994：允许可见子代理生成图片](https://github.com/netease-youdao/LobsterAI/pull/2994)
- [PR #2993：允许可见子代理生成图片](https://github.com/netease-youdao/LobsterAI/pull/2993)  
  两项 PR 指向同一问题：当主代理通过 `sessions_spawn` 委派图片任务时，子代理因缺少认证运行上下文而无法调用 `lobsterai_image_generate`。PR 修复了子代理场景，但两条 PR 内容高度重合，建议维护者确认其中一条的合并状态，避免重复劳动。

- [PR #2995：一次确认授权本轮后续图片生成](https://github.com/netease-youdao/LobsterAI/pull/2995)  
  当图片模型为系统默认时，首张图片无需确认，但后续每张都再次询问；16 张图片可能产生 15 次点击，并因确认卡片最长保留 30 分钟而拖慢任务。修复后，一次确认可覆盖本轮后续图片。

### 3.4 桌面端与账户交互体验

- [PR #2992：在 AppKit 应用中显示 selection hook 跳过的选区](https://github.com/netease-youdao/LobsterAI/pull/2992)  
  针对 macOS 备忘录中划词悬浮窗偶发不出现的问题：原逻辑仅将 I 形光标下的手势视为有效选词，而备忘录等 AppKit 应用经常显示箭头。修复增加兜底读取并扩大可识别的手势范围。

- [PR #2991：账户菜单无需等待每日签到查询](https://github.com/netease-youdao/LobsterAI/pull/2991)  
  点击侧栏“我的”按钮时，界面曾串行等待两个签到活动请求且没有缓存与超时，造成菜单打开延迟。修复将菜单展示与签到数据加载解耦。

### 3.5 OpenClaw 配置动态应用

- [PR #2721：无需重启 Gateway 即可应用 IM 配置](https://github.com/netease-youdao/LobsterAI/pull/2721)  
  原配置写入可能触发整个 Gateway 重启，从而中断无关任务，并与配置文件监听器形成竞态。修复尝试通过运行时实时应用配置，减少服务中断。

### 3.6 整体推进程度

项目今日不仅修复了若干表层交互问题，也在系统性处理 **启动耗时、媒体上下文、Agent 数据库、Gateway 配置热更新和长会话恢复** 等底层工程问题。按 PR 关闭情况看，17 条更新中已有 14 条完成，研发吞吐较高；但缺少新 Release，暂未形成可供用户升级的正式版本包。

---

## 4. 社区热点

> 今日 Issue 仅 1 条，且无点赞数据；PR 数据也未提供评论或点赞数，因此以下按可见讨论数量、更新频率和业务影响排序，不代表社区反应热度。

### 4.1 [Issue #2998：申诉账号被禁用，申请解封](https://github.com/netease-youdao/LobsterAI/issues/2998)

- **可见互动：** 1 条评论，0 个点赞。
- **用户诉求：** 账号在桌面客户端登录时提示“账号已被禁用”，希望恢复使用。
- **背景：** 用户称曾通过 DSH 签到插件对 LobsterAI 内置模型接口进行一键签到，推测因此触发风控；已停止反向代理和一键签到服务，并清理本地登录凭据。
- **分析：** 用户强调无恶意、无商业化且未对外提供服务，说明其核心诉求是获得人工复核，而非单纯咨询配置。维护者回应应避免只做自动拒绝，应明确账号审核依据、自动化签到是否违反服务条款、申诉材料范围和预计处理周期。

### 4.2 [PR #2999：停止在消息元数据中内联存储生成图片](https://github.com/netease-youdao/LobsterAI/pull/2999)

- **可见互动：** 数据未提供评论或点赞。
- **讨论价值：** 暴露了 1.12 GB 元数据膨胀这一严重问题，修复不仅关系到图片会话，也关系到数据库读取、消息加载、备份和内存占用。
- **背后诉求：** 用户需要长会话、大量生成图片时仍能流畅使用，避免客户端冻结或消息加载卡顿。

### 4.3 [PR #2982：恢复超大上下文并展示压缩进度](https://github.com/netease-youdao/LobsterAI/pull/2982)

- **可见互动：** 数据未提供评论或点赞。
- **讨论价值：** 面向长输入、长对话和模型窗口限制等高频且高成本场景；恢复机制还涉及工具调用与结果配对、取消操作和摘要完整性，技术复杂度较高。
- **背后诉求：** 即使上下文压缩失败，任务也不应静默中断，用户需要明确进度和可恢复结果。

### 4.4 [PR #2992：修复 macOS AppKit 应用中的划词选择](https://github.com/netease-youdao/LobsterAI/pull/2992)

- **可见互动：** 数据未提供评论或点赞。
- **讨论价值：** 直接对应真实用户反馈：“同一词语重复划 10 次约出现 1 次，划不同词语约 5/10，浏览器表现明显更好。”
- **背后诉求：** 系统级划词能力应跨应用保持稳定，尤其要覆盖备忘录等原生 macOS 应用。

---

## 5. Bug 与稳定性

按用户影响、发生条件和修复状态整理如下。

### P0：严重数据膨胀与客户端冻结

- [PR #2999：Cowork 图片元数据达到 1.12 GB](https://github.com/netease-youdao/LobsterAI/pull/2999)
  - **现象：** 包含 413 条消息、13 张图片的会话，打开时冻结数秒；图片被多次重复保存为 base64。
  - **影响：** 高内存、数据库膨胀、加载缓慢、潜在备份与存储压力。
  - **状态：** **已有 fix PR，已关闭**。

### P1：上下文超限后任务无法继续

- [PR #2982：超大上下文的压缩请求也可能超限](https://github.com/netease-youdao/LobsterAI/pull/2982)
  - **现象：** 自动压缩请求超过模型窗口，任务无法继续；相关故障示例引用还可能被误判为失败。
  - **影响：** 长输入任务中断，进度和最终状态不透明。
  - **状态：** **已有 fix PR，已关闭**。

### P1：可见子代理无法生成图片

- [PR #2993](https://github.com/netease-youdao/LobsterAI/pull/2993)
- [PR #2994](https://github.com/netease-youdao/LobsterAI/pull/2994)
  - **现象：** 主代理通过 `sessions_spawn` 委派可见子任务后，子代理调用 `lobsterai_image_generate` 报 `Media tool has no authenticated run context`。
  - **影响：** 多代理图片工作流不可用。
  - **状态：** **已有 fix PR，均已关闭**；两条内容重复，建议补充合并关系说明。

### P1：账号被禁用，无法进入桌面应用

- [Issue #2998](https://github.com/netease-youdao/LobsterAI/issues/2998)
  - **现象：** 两个手机号登录账号被提示禁用，桌面端欢迎页跳转后直接报错。
  - **影响：** 核心登录链路中断。
  - **状态：** **尚无公开 fix PR**。这更像风控与申诉问题，而非普通代码缺陷，但需要维护者明确结论。

### P2：OpenClaw 启动性能和阻塞

- [PR #3001](https://github.com/netease-youdao/LobsterAI/pull/3001)
- [PR #3000](https://github.com/netease-youdao/LobsterAI/pull/3000)
- [PR #2997](https://github.com/netease-youdao/LobsterAI/pull/2997)
- [PR #2996](https://github.com/netease-youdao/LobsterAI/pull/2996)
- [PR #2990](https://github.com/netease-youdao/LobsterAI/pull/2990)
  - **现象：** Windows Gateway 启动阶段存在重复 Dreaming 清理、串行握手、PowerShell 子进程、全量技能检查和数据库完整性检查。
  - **量化影响：** 单项可减少约 2.3–2.7 秒握手等待、约 2.5 秒同步进程查询或大量同步 `fs.access`。
  - **状态：** **均有修复 PR，已关闭**；建议发布后统一做冷启动基准验证。

### P2：macOS 划词偶发失效

- [PR #2992](https://github.com/netease-youdao/LobsterAI/pull/2992)
  - **现象：** 备忘录中重复划词成功率低，浏览器表现较好。
  - **影响：** 系统级选词工具可靠性不足。
  - **状态：** **已有 fix PR，已关闭**。

### P2：账户菜单打开延迟

- [PR #2991](https://github.com/netease-youdao/LobsterAI/pull/2991)
  - **现象：** 点击“我的”后等待串行签到查询，菜单无缓存、无超时。
  - **影响：** 账户入口响应迟缓；线上活动接口波动可能进一步放大问题。
  - **状态：** **已有 fix PR，已关闭**。

### P2：图片确认流程造成任务停顿

- [PR #2995](https://github.com/netease-youdao/LobsterAI/pull/2995)
  - **现象：** 每张额外图片都要求确认，16 张任务可能需要 15 次点击；卡片等待时间最长可达 30 分钟。
  - **影响：** 批量图片生成效率低，Agent 可能进入等待。
  - **状态：** **已有 fix PR，已关闭**。

### P2：IM 配置保存触发 Gateway 重启

- [PR #2721](https://github.com/netease-youdao/LobsterAI/pull/2721)
  - **现象：** 保存配置可能重启整个 Gateway，并与文件监听器产生竞态。
  - **影响：** 中断正在执行的任务，并可能造成配置应用状态不一致。
  - **状态：** **已有 fix PR，已关闭**；建议重点回归热更新失败后的回滚行为。

---

## 6. 功能请求与路线图信号

### 6.1 大规模模型选择与会话加载体验

- [PR #2790：对模型进行分组并改善会话加载](https://github.com/netease-youdao/LobsterAI/pull/2790)
  - **需求信号：** 模型目录需要可折叠的系列分组；同名模型显示原始路由；“更多模型”中的模型也应可搜索；长会话加载不能卡死。
  - **路线图判断：** 与今日 Cowork 长会话修复方向一致，属于较可能进入下一版本的用户体验改进。
  - **状态：** **待合并**，且标记为 `stale`，需确认是否已解决冲突或等待重新验证。

### 6.2 数字员工、专家团队与能力市场

- [PR #2726：新增数字员工、专家团队和能力市场](https://github.com/netease-youdao/LobsterAI/pull/2726)
  - **需求信号：** 项目正向“可发现能力—创建数字员工—安装专家团队—配置 MCP 工具”的平台化方向演进。
  - **路线图判断：** 功能范围大、涉及渲染层、持久化与 OpenClaw 集成，可能成为后续版本的重点能力，但当前已关闭或搁置，需重新确认合并策略。
  - **状态：** **已关闭**；是否计划拆分、重开或迁移至后续分支尚不明确。

### 6.3 智能体与文件产物的交互可读性

- [PR #2791：忽略推断文件卡片中的缩写路径](https://github.com/netease-youdao/LobsterAI/pull/2791)
  - **需求信号：** 解析不可解析的 `…/demo.mp4` 等缩写路径时，应避免生成虚假产物卡片。
  - **路线图判断：** 属于明确的稳定性修复，可能随下一次常规修复版本合入。
  - **状态：** **待合并，且标记为 `stale`**。

- [PR #2792：长问题提示和上下文提示保持可读](https://github.com/netease-youdao/LobsterAI/pull/2792)
  - **需求信号：** 长标题不应挤压选项区；长描述应可展开、滚动；上下文用量提示应在右侧边界内换行。
  - **路线图判断：** 与模型分组 PR 同属 Cowork UI 优化，可能进入下一轮界面版本。
  - **状态：** **待合并，且标记为 `stale`**。

### 6.4 批量媒体授权与子代理媒体能力

- [PR #2995](https://github.com/netease-youdao/LobsterAI/pull/2995)
- [PR #2993](https://github.com/netease-youdao/LobsterAI/pull/2993)
- [PR #2994](https://github.com/netease-youdao/LobsterAI/pull/2994)

这些改动共同指向下一阶段可能强化的方向：**更顺畅的多模态任务编排、批量授权和子代理媒体工具能力**。目前均已关闭，尚未形成新 Release。

### 6.5 账号自动化使用边界

- [Issue #2998](https://github.com/netease-youdao/LobsterAI/issues/2998)

该 Issue 同时暴露出一个产品路线问题：第三方插件参与模型签到与账号调用时，项目需要明确：

- 自动化签到是否违反账号服务条款；
- 内置模型接口是否允许经代理或插件复用；
- 账号风控触发后是否有人工申诉渠道；
- 是否应在客户端提供更清晰的自动化使用提示和风险预警。

该事项短期更适合归入治理与支持流程，而非直接进入版本功能路线。

---

## 7. 用户反馈摘要

### 真实使用场景

1. **长会话与大量图片生成**  
   用户可能在同一会话中持续生成多张图片，并期待随时回看历史。[PR #2999](https://github.com/netease-youdao/LobsterAI/pull/2999) 暴露的 1.12 GB 元数据表明，当前实现对大规模媒体会话的存储放大控制不足。

2. **主代理委派子代理处理图片任务**  
   可见子代理因认证上下文缺失而无法调用图片工具，说明“主 Agent 调度多模态任务”已形成实际需求，但运行上下文传递尚不完整。[PR #2993](https://github.com/netease-youdao/LobsterAI/pull/2993)、[PR #2994](https://github.com/netease-youdao/LobsterAI/pull/2994)

3. **macOS 备忘录划词**  
   用户明确反馈：在备忘录中重复划同一词 10 次仅约 1 次成功，划不同词约 5/10，而浏览器明显更稳定。这表明原生应用兼容性是划词功能的实际痛点。[PR #2992](https://github.com/netease-youdao/LobsterAI/pull/2992)

4. **长输入任务自动压缩**  
   长输入超过模型窗口后，压缩请求本身也可能超限，用户需要任务继续执行或得到明确失败反馈，而不是静默卡住。[PR #2982](https://github.com/netease-youdao/LobsterAI/pull/2982)

5. **通过插件和代理进行多账号签到**  
   用户为减少手动切换账号，使用 DSH 插件进行一键签到，并推测因此触发风控。[Issue #2998](https://github.com/netease-youdao/LobsterAI/issues/2998)

### 满意度与不满意点

- **正面信号：** 用户在账号被禁用后仍主动停止代理、签到服务并清理凭据，说明其希望通过合规整改恢复正常使用；维护者应尽量提供人工复核路径。
- **主要不满意点：**
  - 桌面端无法登录，工作流被完全中断；
  - 批量图片任务需要反复确认，效率低；
  - macOS 原生应用划词不稳定；
  - 长会话在图片较多时出现明显卡顿；
  - 子代理不能执行图片任务，限制多 Agent 协作能力。

当前数据没有提供“已解决”“感谢修复”等正向评论，因此无法量化用户满意度改善。

---

## 8. 待处理积压

### 8.1 待合并且已标记为 stale 的 PR

以下 3 条 PR 均处于待合并状态，并带有 `stale` 标签：

- [PR #2790：模型分组与会话加载优化](https://github.com/netease-youdao/LobsterAI/pull/2790)  
  创建于 2026-10-04，更新于 2026-11-05，已积压约一个月，直接影响模型选择和长会话加载体验。

- [PR #2791：过滤缩写路径生成的虚假文件卡片](https://github.com/netease-youdao/LobsterAI/pull/2791)  
  创建于 2026-10-04，更新于 2026-11-05，属于明确的产物卡片准确性修复。

- [PR #2792：改善长问题提示和上下文提示可读性](https://github.com/netease-youdao/LobsterAI/pull/2792)  
  创建于 2026-10-04，更新于 2026-11-04，属于 Cowork UI 的可用性修复。

**建议：** 维护者应确认这些 PR 是因冲突、架构变化、产品方向调整还是测试不足而搁置；若仍有效，应完成复审、恢复 CI 或明确关闭原因。

### 8.2 重要但已关闭、可能需要重新规划的 PR

- [PR #2726：数字员工、专家团队和能力市场](https://github.com/netease-youdao/LobsterAI/pull/2726)  
  代表较大的平台化路线。若项目仍计划建设能力市场，应拆分并给出可交付的增量；若方向已调整，应发布路线说明，避免社区继续投入无法合并的实现。

- [PR #2721：IM 配置热更新](https://github.com/netease-youdao/LobsterAI/pull/2721)  
  虽已关闭，但配置热更新直接关系到 Gateway 稳定性。建议确认替代实现或补丁是否已进入主线。

### 8.3 账号申诉与风控响应

- [Issue #2998](https://github.com/netease-youdao/LobsterAI/issues/2998)  
  作为当日唯一新 Issue，其本身并不属于长期积压，但因账号无法登录影响严重，建议设置明确 SLA，并公开说明是否已人工复核。当前数据仅显示 1 条评论，无法确认维护者是否已给出实质结论。

---

## 总结

LobsterAI 今日呈现出 **“高强度工程修复、尚无正式发版”** 的状态。OpenClaw 启动链路、Cowork 长会话、媒体生成和桌面交互均获得针对性改善，尤其是 1.12 GB 元数据膨胀、上下文压缩恢复和 Windows 启动阻塞等问题的修复，体现出项目对真实使用压力和运行效率的重视。

当前主要风险不在开发活跃度，而在 **发布与积压治理**：今日没有新版本，3 条较早且标记为 stale 的 PR 仍待合并，两条大型路线型 PR 已关闭，账号风控申诉也缺少明确处理结果。下一阶段建议优先完成 **版本集成与回归测试、stale PR 去留决策、账号申诉闭环**，并将启动性能与超大媒体会话纳入正式发布验收指标。

</details>

<details>
<summary><strong>QwenPaw</strong> — <a href="https://github.com/agentscope-ai/QwenPaw">agentscope-ai/QwenPaw</a></summary>

# QwenPaw 项目动态日报

**统计日期：2026-11-05**  
**数据范围：过去 24 小时 GitHub Issues / Pull Requests 更新**

---

## 1. 今日速览

过去 24 小时共更新 **11 条 Issues**（7 条新开或活跃、4 条关闭）和 **50 条 PRs**（33 条待合并、17 条已合并或关闭），开发活动较高，但多数 PR 仍在审查阶段。  
今日关注点集中在 **Windows 兼容性、Matrix 多工作区启动、模型与 Provider 配置、记忆系统稳定性，以及 Shell/媒体请求安全边界**。  
其中已有多个直接对应问题的修复 PR 合并或关闭，包括 **code mode 工具 `name` 参数冲突、Console 运行时能力显示、Shell 内存保护、Local Models 的 Piccolo 运行时安装**。  
项目当前呈现出“**功能持续扩展、稳定性问题密集暴露**”的状态：核心能力推进明显，但 Windows、跨通道和多工作区场景仍是主要质量风险。  
今日无新版本发布，因此上述变化主要处于 PR、Issue 或待发布阶段。

---

## 2. 版本发布

今日 **无新版本发布**，因此暂无正式版本更新说明、破坏性变更或升级迁移指南。

近期 Issue 涉及多个版本，包括 `2.2.2.post1`、`2.2.x`、`2.3.0-beta.1/2` 和 `2.3.0b2`。其中部分问题仍可能存在于已发布版本中，用户应关注后续 Release Notes 与对应修复 PR 的合入情况。

---

## 3. 项目进展

### 3.1 已合并或关闭的重要 PR

#### Code mode 修复工具参数名为 `name` 时的调用冲突

- **PR**：[#8583 fix(code-mode): allow tools with a name parameter](https://github.com/agentscope-ai/QwenPaw/pull/8583)
- **关联 Issue**：[#8581 code mode: any tool whose parameter is named `name` cannot be called](https://github.com/agentscope-ai/QwenPaw/issues/8581)
- **推进内容**：
  - 修复工具名以位置参数传入、工具参数同时名为 `name` 时出现的 `multiple values for argument 'name'`。
  - 同步处理脚本宿主侧 `_Script.invoke()` 的同类参数冲突。
- **影响**：恢复了 `harness_task(name=...)`、`spawn_teammate(name=...)` 等工具在 code mode 下的可调用性，属于直接影响开发体验和工具生态兼容性的修复。
- **状态**：PR 已关闭，Issue 同步关闭，修复链路较完整。

#### Console 按运行时能力控制设置项可见性

- **PR**：[#8572 fix(console): align settings visibility with runtime capabilities](https://github.com/agentscope-ai/QwenPaw/pull/8572)
- **推进内容**：
  - 复用侧边栏已有的运行时能力规则。
  - 对 Codex、Qoder 等运行时隐藏不支持的 Native Configuration、Tools 和 ACP 设置。
  - 保留 Skills、MCP、共享设置和既有导入入口。
- **影响**：减少用户看到不可用选项后再失败的情况，提升不同运行时之间的 Console 一致性。

#### Shell 增加可选内存保护

- **PR**：[#8574 fix(shell): add opt-in memory protection with live Console settings](https://github.com/agentscope-ai/QwenPaw/pull/8574)
- **推进内容**：
  - 为 `execute_shell_command` 增加进程树和沙箱输出捕获的内存上限。
  - 覆盖直接执行、沙箱执行和 coding mode。
  - 通过 `QWENPAW_SHELL_MEMORY_LIMIT_MB` 配置，默认 `0`，即默认关闭。
- **影响**：为 Shell 执行增加资源耗尽防护，同时保持向后兼容；属于重要的稳定性与安全增强。

#### Local Models 接入 Piccolo 运行时并支持模型来源选择

- **PR**：[#8573 feat(local-models): install Piccolo runtimes and select model source](https://github.com/agentscope-ai/QwenPaw/pull/8573)
- **推进内容**：
  - 将现有 Install/Update 流程连接到已发布的 `piccolo-v1` 运行时。
  - 用户可安装并启动 Piccolo，启用 Flash chat 或 Piccolo decisions。
  - 升级流程保留已下载的模型与运行时资产。
- **影响**：降低本地模型运行时的手工部署成本，扩展 QwenPaw Local 的模型来源与执行能力。

#### 修复插件依赖解析中的平台环境歧义

- **PR**：[#8567 fix(plugins): fix platform ambiguous dependency bug](https://github.com/agentscope-ai/QwenPaw/pull/8567)
- **推进内容**：
  - 修复插件依赖处理中与平台环境识别有关的缺陷。
- **影响**：有助于减少插件在特定操作系统或环境下的解析失败，但当前摘要信息有限，回归覆盖范围需要结合代码 diff 判断。

#### 引入 OpenViking 记忆后端插件

- **PR**：[#7613 feat(memory): add OpenViking memory plugin](https://github.com/agentscope-ai/QwenPaw/pull/7613)
- **推进内容**：
  - 通过 OpenViking REST API 增加自动召回、完成轮次持久化。
  - 提供显式 `memory_search` 工具。
  - 修订版本处理了首次安装 ID 的并发问题。
- **状态**：PR 已关闭；该 PR 早在 2026-09-07 创建，需关注是否已经实际进入主分支或后续版本。

### 3.2 仍在推进的重要 PR

#### 引入追加式会话存储、历史分页和原生 Turn 分叉

- **PR**：[#8532 feat(chat): add append-only session storage, paginated history and native Turn forks](https://github.com/agentscope-ai/QwenPaw/pull/8532)
- **推进内容**：
  - 将长期会话从可变快照迁移到按会话持久化的 SQLite 追加式历史。
  - 增加历史分页、Turn 分叉、运行时恢复和重连一致性支持。
- **意义**：这是今日展示项中规模最大的架构性改动之一，将影响聊天历史的数据模型、恢复能力和会话分叉体验。
- **关注点**：PR 仍处于审查中，数据迁移、兼容性、历史读取性能和旧会话回放策略是合入前重点。

#### ACP 支持隔离的会话 loop override

- **PR**：[#8586 feat(acp): support isolated session loop overrides](https://github.com/agentscope-ai/QwenPaw/pull/8586)
- **推进内容**：
  - 允许 ACP 客户端为单个会话配置普通模式 loop budget。
  - 调整原有 500 上限，并保持 iteration gate 与 AgentScope ReAct 一致。
- **意义**：增强 ACP 客户端对长任务、循环任务和资源预算的细粒度控制能力。

#### Ollama 模型自动发现

- **PR**：[#8309 fix(cli): discover Ollama models before activation](https://github.com/agentscope-ai/QwenPaw/pull/8309)
- **关联 Issue**：[#1453](https://github.com/agentscope-ai/QwenPaw/issues/1453)
- **推进内容**：
  - 在 `qwenpaw init`、`qwenpaw models config` 和 `qwenpaw models set-llm` 中查询 Ollama endpoint。
  - 自动列出已安装模型，并仅持久化用户选择的模型。
- **意义**：减少手工输入模型名造成的配置错误，优化本地模型首次配置流程。

#### 改进 Ollama 上下文窗口识别

- **PR**：[#8236 fix(ollama): size context window from num_ctx instead of 128k default](https://github.com/agentscope-ai/QwenPaw/pull/8236)
- **推进内容**：
  - 本地 Ollama 模型按实际 `num_ctx` 计算上下文窗口，不再统一假设为 128K。
- **意义**：减少长上下文截断和错误 token 预算估计，对 `qwen3-coder:30b` 等本地模型尤其重要。

#### Provider 写入路径校验模型配置范围

- **PR**：[#8550 fix(providers): reject out-of-range model config values on the write path](https://github.com/agentscope-ai/QwenPaw/pull/8550)
- **关联 Issue**：[#8549](https://github.com/agentscope-ai/QwenPaw/issues/8549)
- **推进内容**：
  - 强制校验 `thinking_budget >= 1`、`max_input_length >= 1000`。
  - 修复 Pydantic 对普通属性赋值不自动重新验证的问题。
- **意义**：避免非法模型参数进入 Provider 配置后产生运行期故障。

### 3.3 总体进展评价

今日 PR 数量达到 **50 条**，其中 **17 条已合并或关闭**，约占 **34%**；仍有 **33 条待合并**，约占 **66%**。  
这表明项目迭代吞吐较高，但审查、回归验证和发布整合压力也较大。结合 7 条活跃 Bug 来看，项目的主要短板已从“功能不足”转向“跨平台与复杂部署场景的稳定性不足”。

---

## 4. 社区热点

> 今日提供的 20 条热门 PR 均未展示评论数，因此无法精确按评论数排序；以下按 Issue 评论数、影响范围和当日关注度整理。

### 4.1 钉钉长消息静默降级为纯文本

- **Issue**：[#8278 DingTalk 通道在消息超过 3500 字符时整条降级为纯文本](https://github.com/agentscope-ai/QwenPaw/issues/8278)
- **评论数**：6
- **状态**：已关闭
- **核心诉求**：
  - 超过长度限制后应复用 `split_text` 进行分片，而不是将整条消息改为 `text`。
  - Markdown 标题、代码块、列表和 GFM 表格在长回复中全部失效。
  - 降级过程没有向调用方返回信号。
- **社区关注原因**：
  - 数据报表和多列表格是 Agent 的高频场景，长消息恰好最容易触发降级。
  - 静默降级使 Agent 无法根据通道能力自适应选择输出格式。

### 4.2 Windows Hub Local 无法启动

- **Issue**：[#8565 Hub Local runtime cannot start on Windows](https://github.com/agentscope-ai/QwenPaw/issues/8565)
- **评论数**：4
- **状态**：开放
- **涉及点**：
  - AppContainer skill staging。
  - CPU 架构识别缺失。
  - reverse-tunnel readiness timeout。
- **社区关注原因**：
  - 同时涉及启动、隔离运行和反向隧道三个阶段，故障定位链较长。
  - Windows 是桌面端的重要平台，该问题可能直接阻断 Local runtime 的核心使用路径。

### 4.3 Matrix 多工作区插件激活失败

- **Issue**：[#8538 Matrix channel plugin fails to activate when multiple workspaces enable it](https://github.com/agentscope-ai/QwenPaw/issues/8538)
- **评论数**：3
- **状态**：开放
- **核心诉求**：
  - 多个 workspace 同时启用 Matrix 时，10 秒共享启动窗口只覆盖第一个账号。
  - 后续账号无法正常上线。
- **关联修复**：
  - [#8558 fix(matrix): simplify legacy state migration and device locking](https://github.com/agentscope-ai/QwenPaw/pull/8558)
  - [#8584 fix(matrix): use scoped crypto store filenames on Windows](https://github.com/agentscope-ai/QwenPaw/pull/8584)
- **关注原因**：
  - 暴露了插件启动调度、设备锁和加密存储命名之间的耦合问题。
  - 两个针对性 PR 均在推进，说明问题已进入修复阶段，但主 Issue 尚未关闭。

### 4.4 Provider 禁用后运行配置残留

- **Issue**：[#8579 Disabling a provider leaves stale agent run-config model](https://github.com/agentscope-ai/QwenPaw/issues/8579)
- **状态**：开放
- **核心诉求**：
  - 禁用 Provider 或其模型后，Agent 运行配置仍指向旧模型。
  - 通道发送时直接抛出 `Provider is disabled`，且不回退、不重试。
  - 飞书等通道最终只向用户显示笼统的 “Internal error”。
- **关注原因**：
  - 同时影响模型管理、运行配置和外部通道三个层面。
  - 用户看到的只是无信息量错误，而真实原因隐藏在后台。

---

## 5. Bug 与稳定性

以下按“是否阻断核心功能、影响范围、是否存在明确修复路径”排序。

### P0 / 严重：Windows 路径导致记忆历史读取失败

- **Issue**：[#8585 recall_history broken on Windows: `\\?\` extended-length path breaks SQLite read-only URI](https://github.com/agentscope-ai/QwenPaw/issues/8585)
- **影响**：
  - Windows 下 `workspace_dir` 被规范化成扩展长度路径，导致 SQLite 只读 URI 无法读取。
  - `recall_history` 失效，影响历史召回和跨版本稳定性。
- **版本范围**：
  - 报告于 Desktop `2.3.0-beta.1`，旧 `2.2.x` 也出现相同失败记录。
- **Fix PR**：
  - 当前提供数据中**未发现明确关联 PR**。
- **状态**：开放。

### P0 / 严重：禁用 Provider 后通道完全不可用

- **Issue**：[#8579 Disabling a provider leaves stale agent run-config model](https://github.com/agentscope-ai/QwenPaw/issues/8579)
- **影响**：
  - 禁用 Provider 后，Agent 仍引用失效模型。
  - 飞书、钉钉、企微、微信等通道消息构建失败，且无回退或重试。
- **Fix PR**：
  - **未发现直接修复该配置联动问题的 PR**。
- **状态**：开放。

### P1 / 高：记忆标签索引无法重建

- **Issue**：[#8580 Memory tag index never rebuilds](https://github.com/agentscope-ai/QwenPaw/issues/8580)
- **影响**：
  - 自动标签生成已开启，标签也能生成，但 `/memory/tags` 持续返回 503：`Memory tag index is unavailable`。
  - 记忆标签无法稳定读取和消费。
- **Fix PR**：
  - 当前数据中**未发现直接关联 PR**。
- **状态**：开放。

### P1 / 高：Windows Hub Local runtime 无法启动

- **Issue**：[#8565 Hub Local runtime cannot start on Windows](https://github.com/agentscope-ai/QwenPaw/issues/8565)
- **影响**：
  - AppContainer 技能暂存、架构识别和反向隧道就绪检查均存在障碍。
  - Local runtime 启动链可能被整体阻断。
- **Fix PR**：
  - 当前数据中**未发现覆盖全部问题的明确 PR**。
- **状态**：开放。

### P1 / 高：Code mode 无法调用含 `name` 参数的工具

- **Issue**：[#8581 code mode: any tool whose parameter is named `name` cannot be called](https://github.com/agentscope-ai/QwenPaw/issues/8581)
- **影响**：
  - `harness_task(name=...)`、`spawn_teammate(name=...)` 等常用工具均无法调用。
  - 代码模式在进入实际工具执行前即可能失败。
- **Fix PR**：
  - [#8583](https://github.com/agentscope-ai/QwenPaw/pull/8583) 已关闭，Issue 同步关闭。
- **状态**：已修复。

### P1 / 高：Matrix 多工作区无法同时上线

- **Issue**：[#8538](https://github.com/agentscope-ai/QwenPaw/issues/8538)
- **影响**：
  - 多个 workspace 启用 Matrix 时，仅首个账号可能在共享启动窗口内完成激活。
- **Fix PR**：
  - [#8558](https://github.com/agentscope-ai/QwenPaw/pull/8558)：简化旧状态迁移并处理设备锁。
  - [#8584](https://github.com/agentscope-ai/QwenPaw/pull/8584)：修复 Windows 下加密存储文件名作用域问题。
- **状态**：修复推进中，主 Issue 仍开放。

### P2 / 中高：Desktop 被强制置顶

- **Issue**：[#8560 Desktop window is forced always-on-top](https://github.com/agentscope-ai/QwenPaw/issues/8560)
- **影响**：
  - `2.3.0-beta.2` 主窗口永久使用 `WS_EX_TOPMOST`。
  - 覆盖浏览器 kiosk、全屏视频、无边框游戏和幻灯片播放。
- **Fix PR**：
  - 当前数据中**未发现明确关联 PR**。
- **状态**：开放。

### P2 / 中高：Windows 递归编码文件会被静默丢字节

- **Issue**：数据中未展示独立 Issue。
- **关联 PR**：[#8234 fix(tools): decode GBK/CP936 in read/edit/grep instead of dropping bytes](https://github.com/agentscope-ai/QwenPaw/pull/8234)
- **影响**：
  - `read_file_safe`、`read_file`、`edit_file` 和 `grep_search` 以 UTF-8 加 `errors="ignore"` 解码。
  - 中文 Windows 下的 GBK/CP936 文本、CSV、Markdown 会丢失非 UTF-8 字节，且没有日志提示。
- **状态**：PR 开放待合并。

### P2 / 中：默认 Agent 无法通过 Console 编辑

- **Issue**：[#8576 Default agent edit button is disabled in console](https://github.com/agentscope-ai/QwenPaw/issues/8576)
- **影响**：
  - Console 前端对内置 `default` Agent 禁用编辑按钮。
  - 后端 PUT API 实际允许编辑，界面与接口能力不一致。
- **Fix PR**：
  - 当前数据中**未发现明确关联 PR**。
- **状态**：开放。

### P2 / 中：Provider 模型配置缺少写入范围校验

- **Issue**：[#8549](https://github.com/agentscope-ai/QwenPaw/issues/8549)
- **关联 PR**：[#8550 fix(providers): reject out-of-range model config values on the write path](https://github.com/agentscope-ai/QwenPaw/pull/8550)
- **影响**：
  - 非法 `thinking_budget` 和 `max_input_length` 可被写入，后续可能在运行时触发错误。
- **状态**：PR 开放待合并。

### P2 / 中：内联媒体仅限制单文件，限制不了请求总量

- **PR**：[#8034 fix(providers): bound inline media per request, not just per file](https://github.com/agentscope-ai/QwenPaw/pull/8034)
- **影响**：
  - 单文件受 2 MB 限制，但一次请求可积累大量合规图片。
  - 媒体不消耗足够 token，token 驱逐机制无法及时生效。
  - 长会话可能持续发送超大请求体。
- **状态**：PR 开放待合并。

---

## 6. 功能请求与路线图信号

### 6.1 审批消息的浏览器或操作系统级通知

- **Issue**：[#8460 Optional Browser/OS Level Notification Push for new pending Approval messages](https://github.com/agentscope-ai/QwenPaw/issues/8460)
- **状态**：已关闭
- **诉求**：
  - 当新的审批请求进入 pending 状态时，通过浏览器通知或 OS 级推送提醒用户。
  - 组件范围明确指向 Console。
- **路线图判断**：
  - Issue 已关闭，但提供的数据中没有直接对应的已合并 PR。
  - 该需求与 Agent 长时间运行、等待人工审批的实际工作流高度匹配，仍可能作为 Console 后续体验增强落地。

### 6.2 更健壮的长会话存储与历史分叉

- **PR**：[#8532](https://github.com/agentscope-ai/QwenPaw/pull/8532)
- **路线图信号**：
  - 追加式历史、分页、Turn 分叉、恢复和重连是一组明确的架构升级。
  - 若合入，将改变会话底层存储模型，并可能涉及数据迁移，属于值得单独发布说明的变更。
  - 合入前应重点确认旧会话兼容、并发写入和恢复一致性。

### 6.3 ACP 单会话级循环预算

- **PR**：[#8586](https://github.com/agentscope-ai/QwenPaw/pull/8586)
- **路线图信号**：
  - 表明 ACP 正从通用 Agent 接口向精细化任务控制发展。
  - 支持隔离的 session override，有利于不同任务使用不同迭代预算。

### 6.4 本地模型运行时扩展

- **PR**：[#8573](https://github.com/agentscope-ai/QwenPaw/pull/8573)
- **路线图信号**：
  - Piccolo 接入和模型来源选择表明本地运行能力仍在扩张。
  - 与 Ollama 模型发现 [#8309](https://github.com/agentscope-ai/QwenPaw/pull/8309) 和上下文窗口修正 [#8236](https://github.com/agentscope-ai/QwenPaw/pull/8236) 共同构成完整方向：
    - 安装运行时；
    - 自动发现模型；
    - 正确识别能力；
    - 用户显式选择。

### 6.5 记忆系统扩展

- **PR**：[#7613 feat(memory): add OpenViking memory plugin](https://github.com/agentscope-ai/QwenPaw/pull/7613)
- **相关修复**：[#8291 fix(memory): require non-empty api_key for ReMe reranker enablement](https://github.com/agentscope-ai/QwenPaw/pull/8291)
- **路线图信号**：
  - QwenPaw 正在同时推进通用记忆接口、多后端插件化和 ReMe 重排能力。
  - 但 Windows 记忆读取失败 [#8585](https://github.com/agentscope-ai/QwenPaw/issues/8585) 与标签索引 503 [#8580](https://github.com/agentscope-ai/QwenPaw/issues/8580) 显示记忆模块仍需优先稳定。

### 6.6 插件依赖与宿主环境治理

- **PRs**：
  - [#8567 fix(plugins): fix platform ambiguous dependency bug](https://github.com/agentscope-ai/QwenPaw/pull/8567)
  - [#8562 fix(plugins): drop stale host evidence when a declaration is withdrawn](https://github.com/agentscope-ai/QwenPaw/pull/8562)
- **路线图信号**：
  - 插件系统正在强化依赖声明、平台环境识别和审计证据生命周期。
  - 这些工作有助于降低插件安装后在运行时才暴露依赖问题的概率。

---

## 7. 用户反馈摘要

### 7.1 用户真实痛点

1. **长内容在通道中被静默破坏**
   - 用户最在意的是“内容能正确送达且格式不丢失”。
   - 钉钉超过 3500 字符后整条降级为纯文本，使报表、表格和代码块不可用。
   - 相关反馈：[Issue #8278](https://github.com/agentscope-ai/QwenPaw/issues/8278)。

2. **Windows 用户面临更密集的兼容性问题**
   - Local runtime 启动失败 [#8565](https://github.com/agentscope-ai/QwenPaw/issues/8565)。
   - `recall_history` 被扩展路径破坏 [#8585](https://github.com/agentscope-ai/QwenPaw/issues/8585)。
   - Matrix 加密存储文件名不适配 Windows [#8584](https://github.com/agentscope-ai/QwenPaw/pull/8584)。
   - GBK/CP936 文件被静默丢字节 [#8234](https://github.com/agentscope-ai/QwenPaw/pull/8234)。
   - Desktop 强制置顶 [#8560](https://github.com/agentscope-ai/QwenPaw/issues/8560)。
   - 整体表明 Windows 仍是 Desktop 与 Local 场景的主要短板。

3. **配置变更未联动，用户只能在发送时看到模糊错误**
   - Provider 被禁用后，Agent 运行配置没有同步更新。
   - 飞书等通道仅显示 “Internal error”，真实原因无法被用户理解。
   - 相关反馈：[Issue #8579](https://github.com/agentscope-ai/QwenPaw/issues/8579)。

4. **多工作区与多账号场景仍未被充分覆盖**
   - Matrix 插件启动窗口只覆盖第一个 workspace。
   - 用户希望不同工作区可并行启用同一通道，而不必担心设备锁和旧状态文件互相影响。
   - 相关反馈：[Issue #8538](https://github.com/agentscope-ai/QwenPaw/issues/8538)。

5. **中文 Windows 文件处理需要可靠性**
   - 用户在 `.txt`、`.csv`、`.md` 等常见文件中混用 GBK/CP936。
   - 现有“忽略非法字节”的行为没有提示，容易导致读取和编辑结果不完整。
   - 相关修复：[PR #8234](https://github.com/agentscope-ai/QwenPaw/pull/8234)。

### 7.2 积极信号

- 用户对 code mode 工具兼容性问题反馈清晰，并直接给出了 positional-only 参数的修复思路；相关 PR [#8583](https://github.com/agentscope-ai/QwenPaw/pull/8583) 当日完成闭环。
- Console 运行时能力适配 PR [#8572](https://github.com/agentscope-ai/QwenPaw/pull/8572) 已关闭，说明维护者积极回应了“前端不应展示当前运行时不支持的功能”。
- Local Models 接入 Piccolo 的 PR [#8573](https://github.com/agentscope-ai/QwenPaw/pull/8573) 聚焦降低手工替换二进制的门槛，属于明确改善安装和升级体验的进展。
- Shell 内存保护采用默认关闭、环境变量和 Console 实时设置组合，兼顾了安全增强与兼容性。

---

## 8. 待处理积压

### 8.1 长期开放的跨平台 Bug

- **[#8565](https://github.com/agentscope-ai/QwenPaw/issues/8565)**：Windows Hub Local runtime 启动失败。
  - 创建于 2026-11-04，仍开放。
  - 涉及多个启动阶段，缺少完整修复 PR 时应作为 Windows Local 优先级事项处理。

- **[#8560](https://github.com/agentscope-ai/QwenPaw/issues/8560)**：Desktop 强制置顶。
  - 虽为较新 Issue，但属于明确且低风险的 UI 回归，可快速修复并加入 `2.3.0-beta.3` 候选验证。

- **[#8585](https://github.com/agentscope-ai/QwenPaw/issues/8585)**：Windows SQLite 扩展路径问题。
  - 同时影响新旧版本，说明可能存在较深层的路径规范化缺陷。
  - 建议不只修复 `recall_history`，还应审查所有 SQLite URI 和 workspace path 使用点。

- **[#8580](https://github.com/agentscope-ai/QwenPaw/issues/8580)**：记忆标签索引无法重建。
  - 标签生成与标签读取状态不一致，可能存在索引生命周期或持久化恢复缺陷。
  - 需要明确 503 的根因、是否可自动恢复，以及是否需要重建入口。

- **[#8576](https://github.com/agentscope-ai/QwenPaw/issues/8576)**：默认 Agent 编辑按钮不可用。
  - 后端 API 已允许编辑，前端却禁止操作。
  - 需要维护者明确这是产品限制还是 UI 回归，并补充对应文档或解除限制。

### 8.2 等待合并时间较长的重要 PR

- **[#8034](https://github.com/agentscope-ai/QwenPaw/pull/8034)**：限制单次请求内联媒体总量。
  - 创建于 2026-09-29，属于长期安全与网关稳定性问题。
  - 当前会话可能持续累积超大请求体，不宜长期停留在待审状态。

- **[#8234](https://github.com/agentscope-ai/QwenPaw/pull/8234)**：GBK/CP936 文件读取、编辑和搜索。
  - 创建于 2026-10-14。
  - 修复涉及共享底层函数，影响面较广，建议明确编码检测策略、错误处理和测试覆盖。

- **[#8236](https://github.com/agentscope-ai/QwenPaw/pull/8236)**：Ollama `num_ctx` 上下文窗口识别。
  - 创建于 2026-10-14。
  - 与本地模型上下文规划直接相关，逾期会影响多个本地模型场景。

- **[#8309](https://github.com/agentscope-ai/QwenPaw/pull/8309)**：Ollama 模型发现。
  - 创建于 2026-10-18，已关联较早的 [#1453](https://github.com/agentscope-ai/QwenPaw/issues/1453)。
  - 与 Piccolo 运行时方向一致，建议尽快完成审查并纳入下一轮本地模型体验改进。

- **[#8467](https://github.com/agentscope-ai/QwenPaw/pull/8467)**：升级 AgentScope 至 `2.0.11`。
  - 仍标记为 WIP。
  - 依赖升级应与当前大量稳定性修复一起进行兼容验证，尤其关注 AgentScope ReAct、工具调用和 ACP loop budget。

- **[#7613](https://github.com/agentscope-ai/QwenPaw/pull/7613)**：OpenViking 记忆插件。
  - 创建于 2026-09-07，跨度较长。
  - PR 已关闭但状态语义不明确，需确认是已合并、放弃还是替代实现，避免功能长期处于不确定状态。

### 8.3 建议的维护优先级

1. **优先解决 Windows 核心路径**：记忆读取 [#8585](https://github.com/agentscope-ai/QwenPaw/issues/8585)、Hub Local 启动 [#8565](https://github.com/agentscope-ai/QwenPaw/issues/8565)。
2. **完善 Provider 生命周期联动与错误回退**：[#8579](https://github.com/agentscope-ai/QwenPaw/issues/8579)。
3. **合并 Matrix 多工作区修复组合**：[#8558](https://github.com/agentscope-ai/QwenPaw/pull/8558) + [#8584](https://github.com/agentscope-ai/QwenPaw/pull/8584)。
4. **推进中文 Windows 编码修复**：[#8234](https://github.com/agentscope-ai/QwenPaw/pull/8234)。
5. **审查长期安全 PR**：内联媒体请求上限 [#8034](https://github.com/agentscope-ai/QwenPaw/pull/8034)。
6. **明确大型会话存储方案的合入计划**：[#8532](https://github.com/agentscope-ai/QwenPaw/pull/8532)。

---

## 今日结论

QwenPaw 今日保持较高开发吞吐，**50 条 PR 更新**显示功能、架构和稳定性工作并行推进；会话存储、ACP、本地模型、记忆插件和 Shell 防护构成了主要能力演进方向。  
不过，**Windows 兼容性、Provider 配置联动、Matrix 多工作区和记忆索引**仍是明显的可靠性缺口。当前项目健康度可评估为：

- **开发活跃度：高**
- **功能推进：中高**
- **跨平台稳定性：中等偏低**
- **Bug 收敛效率：中等**
- **发布节奏：偏快，但 Beta 阶段回归较多**

下一阶段的关键不只是继续增加功能，而是尽快完成 Windows 专项回归、合并核心稳定性修复，并对 [#8532](https://github.com/agentscope-ai/QwenPaw/pull/8532) 等大型变更给出明确合入与迁移计划。

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/NousResearch/hermes-agent">NousResearch/hermes-agent</a></summary>

# Hermes Agent 项目动态日报

**统计日期：2026-11-05**  
**项目：** [NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent)  
**监测窗口：** 过去 24 小时

---

## 1. 今日速览

过去 24 小时项目保持高强度活跃：共更新 **50 条 Issues** 与 **50 条 PRs**，其中 Issues 有 **42 条仍开放、8 条已关闭**，PR 侧有 **28 条待合并、22 条已合并或关闭**，日度讨论量达到 **100 条**。  
今日无新版本发布，但代码层面出现了一批安全、Gateway 稳定性、跨 Bot 协作、模型容错和 Desktop 会话一致性相关的重要修复。  
社区关注焦点主要围绕 **统一 Gateway 后的稳定性、Bot-to-Bot 协作与消息循环、Windows/macOS 跨平台可靠性，以及后台任务能否可靠回传结果**。  
整体健康度可评为 **“高活跃、治理中风险偏高”**：交付和响应速度较强，但统一 Gateway、会话生命周期、消息投递和跨平台适配仍存在系统性技术债。

---

## 2. 版本发布

过去 24 小时 **没有新版本发布**，因此暂无正式版本更新、破坏性变更或升级迁移说明。

不过，当前 PR 队列中已有若干可能进入下一版本的变更，包括：

- TUI/CLI 的会话回退与分叉能力；
- 插件自动更新和“一键更新全部”；
- Desktop MCP 授权卡片的可解释性增强；
- Gemini 安全拦截不再静默返回空结果；
- Gateway 跨 Profile 私信投递状态修复；
- 各类敏感信息脱敏增强。

建议下一版本发布前重点完成回归验证的模块为：**Gateway、插件系统、Desktop、辅助模型调用链、消息平台适配器**。

---

## 3. 项目进展

### 3.1 安全与敏感信息保护

- **[#148862](https://github.com/NousResearch/hermes-agent/pull/148862) — 扩展密钥脱敏覆盖范围**  
  PR 拟进一步屏蔽仅含密码的连接字符串、命令行参数携带的密钥、Azure 连接字符串密钥、以 `…key` 命名的凭据字段，以及非 PEM/base64-PEM 私钥。  
  **价值：** 防止敏感信息进入模型上下文、会话记录、审批卡片和聊天输出，是当前最值得优先合入的安全类变更之一。

### 3.2 Gateway、Profile 与会话状态

- **[#149273](https://github.com/NousResearch/hermes-agent/pull/149273) — 让 Bot Chat 成为统一消息入口**  
  计划让 Cron、Gateway 通知和 `/sethome` 默认进入 Bot Chat，而非特定 Telegram 等聊天渠道，并支持 Desktop。  
  **意义：** 进一步巩固统一 Gateway 架构，降低多渠道路由和投递语义不一致的问题。

- **[#149265](https://github.com/NousResearch/hermes-agent/pull/149265) — 明确压缩与记忆管理权威边界**  
  在 `checkpoint_required` 场景下调整压缩决策权，并向上下文引擎提供 Memory Manager；子代理压缩失败时不再直接丢失 provider。  
  **意义：** 有望减少压缩、归档、子代理恢复之间因状态权威不明确导致的异常。

- **[#149309](https://github.com/NousResearch/hermes-agent/pull/149309) — 跟踪 SQLite 连接被 GC 而未显式关闭的问题**  
  让 `connect_tracked()` 注册的连接在未调用 `close()`、仅被垃圾回收时，也能从注册表释放。  
  **意义：** 降低 Windows 等环境下文件句柄与数据库连接残留风险。

- **[#149293](https://github.com/NousResearch/hermes-agent/pull/149293) — 统一 `state.db` 的受跟踪连接访问路径**  
  将 Gateway、Dashboard 和 Chat 进程中的活动数据库连接纳入统一注册表，并增加代码检查规则防止新增未跟踪连接。  
  **意义：** 为可靠检测离线状态、连接泄漏和数据库并发问题提供基础。

- **[#149292](https://github.com/NousResearch/hermes-agent/pull/149292) — 释放多 Profile Gateway 的只读数据库文件描述符**  
  修复 `close_all_under` 清理 Home 目录时仍为每个未服务 Profile 保留只读 `state.db` FD 的问题。  
  **意义：** 直接改善多 Profile/多路复用 Gateway 在 Windows 和长期运行场景下的资源稳定性。

### 3.3 模型容错与 Agent 执行可靠性

- **[#148403](https://github.com/NousResearch/hermes-agent/pull/148403) — 辅助模型调用统一使用共享错误分类器**  
  压缩摘要、标题生成、视觉、会话搜索、MCP 与审批辅助调用，将统一根据共享错误分类结果决定重试、Fallback、凭据刷新和轮换。  
  **意义：** 可减少辅助调用因错误类型判断不一致而产生的不必要重试或错误降级。

- **[#131360](https://github.com/NousResearch/hermes-agent/pull/131360) — 按 Provider 重置窗口计算辅助池容量**  
  不再仅根据异常字符串决定 Provider bench 大小，而是结合 Provider 的速率限制与重置时间。  
  **意义：** 对 Anthropic 等辅助模型池的容量规划和限流恢复更准确。

- **[#148866](https://github.com/NousResearch/hermes-agent/pull/148866) — 修复首次工具调用后 ACK 续跑失效**  
  修复会话执行过一次工具后，“已声明动作但尚未调用工具”的有界续跑提示永久失效的问题，覆盖 Gateway、CLI 和恢复会话。  
  **意义：** 直接改善 Agent 在“口头确认执行、实际未调用工具”场景下的任务完成率。

- **[#85031](https://github.com/NousResearch/hermes-agent/pull/85031) — Gemini 安全拦截不再表现为静默空响应**  
  Gemini 因安全策略拒绝提示词时，现在会明确告知拦截原因并切换到 Fallback 模型。  
  **意义：** 消除“看似成功但没有回答”的失败模式，提高错误可解释性。

### 3.4 交互与插件生态

- **[#144937](https://github.com/NousResearch/hermes-agent/pull/144937) — TUI/CLI 支持回退、编辑重发与分叉**  
  用户可连续按两次 `Esc` 或使用 `/rewind` 浏览历史提示词，从指定节点编辑重发，或以 `f` 创建分支会话；同时增加“No, tell Hermes instead”审批选项。  
  **意义：** 提升复杂任务纠错和对话探索能力，是较明确的用户体验增强项。

- **[#85794](https://github.com/NousResearch/hermes-agent/pull/85794) — 插件自动更新与“一键更新全部”**  
  CLI、Chat、Desktop 和 Dashboard 均支持插件更新，目录插件也纳入更新范围。  
  **意义：** 解决插件长期停留在安装日版本的问题，但需重点验证目录插件的版本锁定与回滚机制。

- **[#85775](https://github.com/NousResearch/hermes-agent/pull/85775) — Desktop MCP 授权卡显示具体命令或 URL**  
  审批时展示服务器将执行的命令或访问的地址，同时对敏感值进行遮蔽。  
  **意义：** 提升 MCP 供应链安全与用户知情同意。

- **[#148832](https://github.com/NousResearch/hermes-agent/pull/148832) — `delegate_task` 拒绝未知顶层参数**  
  避免拼写错误或不受支持的参数被静默吞掉。  
  **意义：** 提高委派接口的确定性和调试可读性。

### 3.5 进展评估

今日已展示的关闭/合并 PR 数量有限，但功能、安全和稳定性覆盖面较广。若核心 PR 能顺利合并，项目将从“功能快速扩张”进一步转向：

1. 统一 Gateway 的状态与资源治理；
2. 跨平台消息投递安全；
3. Agent 执行链路的可恢复性；
4. 插件与 MCP 的生命周期治理。

整体可视为一次明显的 **架构收敛与可靠性加固**，但多个 PR 相互依赖，尚不能仅凭 PR 状态认定相关根因已全部解决。

---

## 4. 社区热点

### 4.1 统一 Gateway 的合并后遗留问题

- **[#143547](https://github.com/NousResearch/hermes-agent/issues/143547) — Unified Gateway 合并后问题汇总**  
  **47 条评论，当前开放问题中讨论最活跃。**  
  该 Issue 汇总 CLI、TUI、Desktop、API、消息 Bot、Cron、Kanban 和 Group Chat 在统一 Gateway 后的遗留问题，覆盖会话、认证、配置、压缩、Desktop 连接和消息投递等核心模块。  
  **社区诉求：** 用户需要一个明确的迁移状态、兼容性矩阵和剩余问题清单，避免每次故障都需要逐个排查。

- **[#97681](https://github.com/NousResearch/hermes-agent/issues/97681) — 让 Bot 跨 Gateway 协作**  
  **40 条评论、4 个点赞。**  
  用户希望不同机器、不同所有者、不同模型和凭据的 Bot 可以在保持控制权的前提下协作。  
  **社区诉求：** 重点不是简单的跨 Bot 消息，而是身份、能力授权、协作状态、审计和防止自动回复循环的完整协议。

### 4.2 跨平台可靠性

- **[#68128](https://github.com/NousResearch/hermes-agent/issues/68128) — Windows WhatsApp Bridge 启动触发 `WinError 5`**  
  **19 条评论。**  
  用户指出 no-breakaway Job Object 环境缺少文档所述的 `windows_detach_flags_without_breakaway()` 回退路径。  
  **社区诉求：** Windows 企业环境、容器和受限宿主中的部署必须可靠，不能仅依赖标准进程创建方式。

- **[#98124](https://github.com/NousResearch/hermes-agent/issues/98124) — Windows Desktop 45 秒连接超时后不再重连**  
  **6 条评论。**  
  Desktop 渲染进程在本地后端稍晚就绪时永久停留在 “Desktop boot failed / Connecting”。  
  **社区诉求：** Desktop 应具备后台重试和可恢复机制，而非一次超时即进入不可恢复状态。

- **[#54141](https://github.com/NousResearch/hermes-agent/issues/54141) — Windows 内置 MCP Server 无法启动**  
  **2 条评论。**  
  `hermes-studio-api`、`hermes-studio-devices`、`hermes-studio-use` 报 `[WinError 2]`。  
  **社区诉求：** 自带工具链必须在 Windows 上开箱即用，不应由用户手工修正 PATH 或启动命令。

### 4.3 Bot 消息循环与跨平台身份识别

- **[#143370](https://github.com/NousResearch/hermes-agent/issues/143370) — 多数 Adapter 未将 Bot/App 作者标记为机器人**  
  **4 条评论。**  
  目前只有 Discord、Slack、Telegram 和飞书设置 `SessionSource.is_bot`，其他 Adapter 可能把机器人或应用作者当作用户。  
  **社区诉求：** Adapter 应提供一致的机器人身份语义，以支持循环防护、权限控制和机器人间协作。

- **[#97681](https://github.com/NousResearch/hermes-agent/issues/97681) — 跨 Gateway Bot 协作**  
  在上述身份问题未统一前，跨 Bot 协作仍存在误判和循环风险。

### 4.4 后台任务回传可靠性

- **[#149248](https://github.com/NousResearch/hermes-agent/issues/149248) — 后台工作无法可靠回传用户**  
  **新开 Issue，2 条评论。**  
  用户称长任务经常没有完成通知，必须手动追踪，直接削弱了委托执行的信任。  
  **社区诉求：** 后台任务需要可靠的完成回执、失败回执、超时和“无人接收消息”检测机制。

---

## 5. Bug 与稳定性

### P1 / 严重

#### Telegram 文件附件“报告成功但实际未送达”
- Issue：[#13356](https://github.com/NousResearch/hermes-agent/issues/13356)
- 状态：已关闭；数据中未见明确对应的已合并修复 PR。
- 影响：文本消息正常，附件发送却返回成功及消息 ID，但用户收不到文件。
- 判断：虽然 Issue 已关闭，但当前摘要不足以证明根因已彻底修复；建议继续观察附件大小、网络切换、重试和媒体下载场景。

#### Bot-to-Bot 无限循环造成严重模型费用消耗
- Issue：[#137027](https://github.com/NousResearch/hermes-agent/issues/137027)
- 状态：已关闭。
- 影响：Mattermost 上两个 Hermes Gateway 可形成约 2 秒一次的无限对话；报告称单侧产生 **46,093 次模型调用、62.4 亿 cached-read tokens**，占宿主当日 token 消耗的 **89%**。
- 相关：
  - [#136946](https://github.com/NousResearch/hermes-agent/issues/136946)
  - [#145270](https://github.com/NousResearch/hermes-agent/issues/145270)
  - [#134635](https://github.com/NousResearch/hermes-agent/issues/134635)
- 判断：相关修复开始覆盖 bot 身份分类和循环防护，但跨 Gateway、非机械类消息、静默状态等边界仍需统一验证。

### P2 / 高

#### Windows Kanban Worker 接收成功但 Prompt 未投递
- Issue：[#146955](https://github.com/NousResearch/hermes-agent/issues/146955)
- 影响：Worker 已 admitted、bound 且进程存活，但停在 `read_frame` 直到超时，任务实际没有执行。
- Fix PR：数据中未见明确对应修复。
- 风险：多 Profile、多路复用 Gateway 下可能出现“表面已调度、实际未运行”的假成功。

#### Desktop 后端崩溃重启后用户消息重复显示
- Issue：[#145965](https://github.com/NousResearch/hermes-agent/issues/145965)
- 影响：乐观渲染消息未与恢复后的持久化消息去重，造成重复气泡；数据库实际仅有一条记录。
- Fix PR：未见明确对应项。

#### Profile 重命名后旧身份标记遗留
- Issue：[#146522](https://github.com/NousResearch/hermes-agent/issues/146522)
- 影响：本地会话 receipt 和 legacy marker 未迁移，导致 `profile_mismatch` / `storage_unavailable`，Bot Chat 注册表不可用。
- Fix PR：未见明确对应项。

#### 自定义 Fallback Endpoint 因凭据指针缺失返回 401
- Issue：[#136290](https://github.com/NousResearch/hermes-agent/issues/136290)
- 影响：`hermes fallback add` 保存 `no-key-required` 占位符，而不是实际 API Key，Fallback 激活后持续 401。
- Fix PR：未见明确对应项。
- 相关模型容错 PR：[#148403](https://github.com/NousResearch/hermes-agent/pull/148403)、[#131360](https://github.com/NousResearch/hermes-agent/pull/131360)。

#### macOS truststore TLS 握手阻塞事件循环
- Issue：[#145117](https://github.com/NousResearch/hermes-agent/issues/145117)
- 影响：高负载下 macOS truststore 每次握手重建 CA 数组，Gateway 事件循环可能阻塞数十秒。
- Fix PR：未见明确对应项。

#### macOS 睡眠后 Discord Socket 失效
- Issue：[#95819](https://github.com/NousResearch/hermes-agent/issues/95819)
- 状态：已关闭。
- 影响：MacBook 合盖后 TCP 仍显示 `ESTABLISHED`，但睡眠期间消息静默丢失。
- 判断：需确认修复是否覆盖系统睡眠、网络切换和重连后的消息补偿。

### P3 / 中

- **普通英文/非英文续跑语句未被 anti-stall 识别**：[#122119](https://github.com/NousResearch/hermes-agent/issues/122119)。  
  相关修复 PR：[#148866](https://github.com/NousResearch/hermes-agent/pull/148866)。

- **Gateway Profile 间私信投递状态含糊，触发重试循环**：[#147210](https://github.com/NousResearch/hermes-agent/issues/147210)，已关闭。  
  该问题与统一 Gateway 投递语义直接相关，仍建议观察重试是否具备幂等保护。

- **Desktop 切换模型时可能错误沿用旧模型 reasoning preset**：[#144008](https://github.com/NousResearch/hermes-agent/issues/144008)。  
  未见明确对应修复。

- **Skills 自动加载内容在 `skill_view` 时重复发送**：[#145280](https://github.com/NousResearch/hermes-agent/issues/145280)。  
  增加上下文和模型成本浪费，未见明确对应修复。

- **Discord/Telegram 等 Adapter 缺少统一机器人身份标识**：[#143370](https://github.com/NousResearch/hermes-agent/issues/143370)。  
  相关方向可见：[#145270](https://github.com/NousResearch/hermes-agent/issues/145270) 和 [#136946](https://github.com/NousResearch/hermes-agent/issues/136946)。

- **Windows MCP 内置服务器启动失败**：[#54141](https://github.com/NousResearch/hermes-agent/issues/54141)。  
  未见明确对应修复。

- **WhatsApp Windows Bridge 权限失败**：[#68128](https://github.com/NousResearch/hermes-agent/issues/68128)。  
  未见明确对应修复。

### 稳定性总体判断

当前风险并非来自单一崩溃点，而是来自几个共性根因：

1. **状态权威不统一**：Gateway、Desktop、Profile、会话和消息接收方之间缺少一致的生命周期语义；
2. **投递结果不够可靠**：成功、含糊、失败三种状态缺少统一契约；
3. **跨平台行为分叉明显**：Windows 与 macOS 是问题最集中的平台；
4. **后台任务完成通知不足**：执行成功与用户获知成功之间存在断层。

因此，下一阶段应优先建设**统一状态机、幂等投递协议、可恢复重连和端到端测试矩阵**，而不仅是继续修复单个现象。

---

## 6. 功能请求与路线图信号

### 6.1 FAL 图像、语音与训练能力扩展

今日集中出现四项相关需求：

- **[#149308](https://github.com/NousResearch/hermes-agent/issues/149308) — 风格、角色和产品的训练操作**  
  目标是支持训练可复用身份资产，并将其作为一等生成对象引用。

- **[#149307](https://github.com/NousResearch/hermes-agent/issues/149307) — 为 `text_to_speech` 增加 FAL 后端**  
  可接入 ElevenLabs、MiniMax 等 FAL 托管语音模型。

- **[#149306](https://github.com/NousResearch/hermes-agent/issues/149306) — 对现有图片执行免 Prompt 操作**  
  包括背景移除、放大、分割，并输出处理后的图片或 Mask。

- **[#149305](https://github.com/NousResearch/hermes-agent/issues/149305) — 补齐 FAL 图像模型目录**  
  涉及 Seedream、Recraft、FLUX、Ideogram、Nano Banana、Krea 等模型。

**路线图判断：** 这些需求明显指向“统一多模态 Provider + 可发现模型目录 + 资产训练”的扩展方向。背景移除、无 Prompt 编辑和 FAL TTS 与现有插件接口契合，实施成本较低；角色/产品训练则涉及资产管理、版本、复现性及供应商差异，适合作为后续独立路线。

### 6.2 TUI/CLI 会话回退与分叉

- **[#144937](https://github.com/NousResearch/hermes-agent/pull/144937)**  
  已形成较完整 PR，覆盖编辑重发、会话分叉和审批替代选项。  
  **判断：** 很可能进入下一版本，是成熟度较高的用户交互增强。

### 6.3 Bot Chat 成为统一消息入口

- **[#149273](https://github.com/NousResearch/hermes-agent/pull/149273)**  
  将 Cron、Gateway 通知和 `/sethome` 统一导向 Bot Chat。  
  **判断：** 与统一 Gateway 路线高度一致；若消息投递语义和 Profile 路由测试通过，进入下一版本的概率较高。

### 6.4 跨 Gateway Bot 协作

- **[#97681](https://github.com/NousResearch/hermes-agent/issues/97681)**  
  是长期讨论的核心路线。  
  **判断：** 中长期优先级高，但近期上线需先完成统一 Bot 身份、授权边界、循环防护和投递幂等，否则容易放大费用风险。

### 6.5 macOS TUI 复制选项配置

- **[#46467](https://github.com/NousResearch/hermes-agent/issues/46467)**  
  请求增加 `display.copy_on_select` 配置。  
  **判断：** 改动较小、方向明确，但可能因已有默认行为兼容问题而排在核心可靠性修复之后。

### 6.6 Desktop 插件状态贡献区

- **[#145191](https://github.com/NousResearch/hermes-agent/issues/145191)**  
  希望插件能把后台进程、同步和批任务状态直接显示在编辑器状态区。  
  **判断：** 与插件自动更新和 Desktop 生命周期管理形成配套，但优先级低于连接恢复和消息去重。

### 6.7 MCP 目录持续扩充

- **[#133176](https://github.com/NousResearch/hermes-agent/pull/133176)** — Mesy CRM 远程 MCP；
- **[#107033](https://github.com/NousResearch/hermes-agent/pull/107033)** — PostOnce 托管草稿工作流。

**判断：** 表明项目仍在扩大远程 MCP 生态。安全方面已有 Desktop 授权展示 PR [#85775](https://github.com/NousResearch/hermes-agent/pull/85775)，有助于降低插件接入风险。

---

## 7. 用户反馈摘要

### 7.1 后台委托缺乏可信的完成反馈

在 [#149248](https://github.com/NousResearch/hermes-agent/issues/149248) 中，用户明确表示长任务经常没有自动回传，必须人工追踪，导致“不敢完全放手”。  
这反映出用户评价 Agent 能力时，核心标准已从模型回答质量转向 **任务是否真正完成、结果是否可靠送达、失败是否可解释**。

### 7.2 Windows 用户仍需自行处理环境细节

Windows 问题横跨 WhatsApp Bridge、Desktop 重连、MCP 启动和 Kanban Worker：

- [#68128](https://github.com/NousResearch/hermes-agent/issues/68128)
- [#98124](https://github.com/NousResearch/hermes-agent/issues/98124)
- [#54141](https://github.com/NousResearch/hermes-agent/issues/54141)
- [#146955](https://github.com/NousResearch/hermes-agent/issues/146955)

共同痛点不是单一命令错误，而是 Hermes 的内置能力在 Windows 上仍表现出明显的行为分叉。用户期待“一键安装、开箱即用”，但实际往往需要自行修复 PATH、进程创建、重连或环境约束。

### 7.3 用户希望一个统一、可见的交互入口

[#149273](https://github.com/NousResearch/hermes-agent/pull/149273) 的方向获得明确产品逻辑支持：Cron、Gateway 通知和 Desktop 用户沟通都进入 Bot Chat。  
用户痛点在于不同任务的反馈散落在 Telegram、Desktop、Gateway 通知或其他渠道，难以确认“它究竟在哪里等我”。

### 7.4 机器人协作需求明确，但安全顾虑同样强烈

[#97681](https://github.com/NousResearch/hermes-agent/issues/97681) 展现了对跨机器、跨所有者 Bot 协作的长期兴趣；与此同时，Mattermost 无限循环事件说明用户对自动协作的主要担忧是：

- 失控回复；
- 费用无限增长；
- 身份误判；
- 无法审计；
- 对方 Bot 不在线时消息如何处理。

因此，该路线必须与机器人身份、预算上限、静默状态和幂等投递同步推进。

### 7.5 Desktop 的状态一致性问题正在影响信任

重复消息 [#145965](https://github.com/NousResearch/hermes-agent/issues/145965)、模型推理预设错配 [#144008](https://github.com/NousResearch/hermes-agent/issues/144008)、Windows 后端就绪后永久卡住 [#98124](https://github.com/NousResearch/hermes-agent/issues/98124)，共同表明 Desktop 仍缺少可靠的状态同步和恢复机制。  
用户看到的并非单纯 UI 小瑕疵，而是“系统到底执行了什么”的可信度问题。

### 7.6 性能与首次使用体验仍有落差

- [#145440](https://github.com/NousResearch/hermes-agent/issues/145440)：以 Claude Code、Codex 等为基准，系统性梳理首次使用、响应速度、压缩和体验差距；
- [#145280](https://github.com/NousResearch/hermes-agent/issues/145280)：Skills 内容重复加载增加上下文浪费；
- [#145117](https://github.com/NousResearch/hermes-agent/issues/145117)：macOS TLS 路径可能阻塞 Gateway 数十秒。

这些反馈表明，用户认可 Hermes 的渠道覆盖、Provider 选择、自托管和上下文控制能力，但对“默认体验是否快、是否安静、是否稳定”仍持保留态度。

---

## 8. 待处理积压

### 8.1 长期高评论、高影响 Issue

1. **[#143547](https://github.com/NousResearch/hermes-agent/issues/143547) — Unified Gateway 遗留问题汇总**  
   47 条评论，涉及多个核心模块。建议拆分为可验证的子问题，标注固定版本、负责人和回归测试，避免汇总 Issue 长期成为唯一追踪入口。

2. **[#97681](https://github.com/NousResearch/hermes-agent/issues/97681) — Bot 跨 Gateway 协作**  
   40 条评论、4 个点赞。该需求热度高且影响架构，但必须先明确 Bot 身份、授权、预算、投递确认和循环保护协议。

3. **[#68128](https://github.com/NousResearch/hermes-agent/issues/68128) — Windows WhatsApp Bridge**  
   19 条评论。问题明确，但涉及 Windows Job Object 与 Node 子进程启动，应尽快提供可复现矩阵和对应修复版本。

4. **[#145440](https://github.com/NousResearch/hermes-agent/issues/145440) — 首次体验与性能对标**  
   虽非长期积压，但应作为体验路线图总入口，关联具体缺陷和优化 PR。

5. **[#122119](https://github.com/NousResearch/hermes-agent/issues/122119) — Anti-stall 规则脆弱**  
   英文短语依赖和工具调用后 ACK fallback 丢失已被 PR [#148866](https://github.com/NousResearch/hermes-agent/pull/148866) 针对性修复，合并后应尽快回归并关闭。

### 8.2 仍缺少明确 Fix PR 的重要 Bug

以下问题在当前数据中未发现明确对应修复，应列入维护者优先队列：

- Windows Kanban Worker Prompt 未投递：[#146955](https://github.com/NousResearch/hermes-agent/issues/146955)
- Desktop 崩溃恢复后消息重复：[#145965](https://github.com/NousResearch/hermes-agent/issues/145965)
- Profile 重命名后旧身份残留：[#146522](https://github.com/NousResearch/hermes-agent/issues/146522)
- 自定义 Fallback 凭据指针错误：[#136290](https://github.com/NousResearch/hermes-agent/issues/136290)
- macOS truststore 阻塞事件循环：[#145117](https://github.com/NousResearch/hermes-agent/issues/145117)
- Windows Desktop 后端延迟就绪后不重连：[#98124](https://github.com/NousResearch/hermes-agent/issues/98124)
- Windows 内置 MCP 无法启动：[#54141](https://github.com/NousResearch/hermes-agent/issues/54141)
- Skills 自动加载重复：[#145280](https://github.com/NousResearch/hermes-agent/issues/145280)

### 8.3 长期未合并 PR

- **[#85794](https://github.com/NousResearch/hermes-agent/pull/85794)** — 插件自动更新与批量更新  
- **[#86553](https://github.com/NousResearch/hermes-agent/pull/86553)** — 批量子代理 Prompt Cache 预热  
- **[#131360](https://github.com/NousResearch/hermes-agent/pull/131360)** — 辅助模型池容量计算  
- **[#133176](https://github.com/NousResearch/hermes-agent/pull/133176)** — Mesy CRM MCP  
- **[#107033](https://github.com/NousResearch/hermes-agent/pull/107033)** — PostOnce MCP  
- **[#147742](https://github.com/NousResearch/hermes-agent/pull/147742)** — mock-review 插件版本重新锁定  

这些 PR 中有些已积累较长生命周期，建议维护者明确给出“可合并、需重构、放弃”的决定，避免形成新的长期积压。

---

## 项目健康度结论

| 维度 | 评价 | 依据 |
|---|---|---|
| 社区活跃度 | **高** | 24 小时内 50 Issues + 50 PR |
| 交付活跃度 | **较高** | 22 条 PR 已合并或关闭，28 条仍待处理 |
| 版本发布 | **无变化** | 今日无 Release |
| 架构方向 | **清晰但集中** | 统一 Gateway、Bot Chat、上下文引擎持续收敛 |
| 稳定性 | **中高风险** | Windows/macOS、会话生命周期、消息投递问题突出 |
| 社区需求 | **强烈** | 跨 Bot 协作、后台回传、首次体验和性能均为高关注方向 |
| 综合健康度 | **高活跃、治理中风险偏高** | 修复覆盖面扩大，但核心状态和投递契约仍需统一 |

**总体判断：** Hermes Agent 正处于从“多入口 Agent 框架”向“统一 Gateway 平台”演进的关键阶段。当前推进速度较快，安全、容错和 Desktop 体验均有实质改进；但下一阶段能否稳定，最取决于统一会话状态、跨渠道投递幂等、后台任务回执和 Windows/macOS 一致性，而不只是功能数量。

</details>

<details>
<summary><strong>OpenHuman</strong> — <a href="https://github.com/tinyhumansai/openhuman">tinyhumansai/openhuman</a></summary>

# OpenHuman 项目动态日报

**日期：2026-11-05**  
**数据范围：过去 24 小时 GitHub Issues / PR 更新**

---

## 1. 今日速览

过去 24 小时项目共有 **5 条 Issue 更新**（其中 **1 条新开、4 条关闭**）和 **15 条 PR 更新**（**2 条待合并、13 条已合并或关闭**），整体活跃度较高。  
今日主线集中在三个方向：**桌面端登录与用户隔离、语音链路稳定性、Rust Core 模块化与安全机制**。  
已关闭 Issue 集中在 **0.64.15 的语音 TTS/STT 400 错误、销毁状态 panic，以及聊天标题回滚**，相关修复已通过多个 PR 推进；不过数据中没有对应的新版本发布。  
当前仍有 **2 个开放 PR**，分别涉及 **agent37 沙箱接入**和**自动流程保存时强制停用**，但 agent37 仍受 TinyBox 版本依赖阻塞。  
项目健康度评估：**开发活跃、修复收敛较快，但发布与端到端验证仍是主要风险；桌面登录隔离问题仍为 P1，需优先关注。**

---

## 2. 版本发布

过去 24 小时**无新版本发布**，因此暂无 Release 说明、破坏性变更或迁移注意事项。

需要注意的是，今日多项修复集中针对 **0.64.15** 的线上问题；在新版本发布前，版本 **0.64.15** 的 TTS/STT、状态销毁 panic、登录用户隔离及聊天标题持久化问题仍可能影响用户。

---

## 3. 项目进展

### 3.1 登录凭据与用户隔离修复推进

[#8536 fix(credentials): store the sign-in token through TinySecurity's keyring, roll back failed sign-ins, and guard artifact reads](https://github.com/tinyhumansai/openhuman/pull/8536)

该 PR 今日已关闭，核心改动包括：

- 登录 token 改由 **TinySecurity keyring** 存储；
- 登录失败时执行回滚，避免残留不完整认证状态；
- 对 artifact 读取增加保护；
- 基于此前已落地的模块版本对齐、callback-bound module 加载和嵌入式 runtime scope takeover 改动继续完善认证流程。

这批工作与仍未关闭的 [#8543 Desktop sign-in never activates the per-user profile](https://github.com/tinyhumansai/openhuman/issues/8543) 高度相关。凭据链路的可靠性得到改善，但“登录后真正切换到 per-user profile”这一用户可见问题尚不能仅凭该 PR 关闭判定为彻底解决。

### 3.2 修复 Core 启动阶段配置替换死锁

[#8546 fix(runtime): don't relock the config snapshot while replacing it](https://github.com/tinyhumansai/openhuman/pull/8546)

今日已关闭。该修复针对 `CoreContext::replace_latest_embedder_config`：

- 原实现持有 `snapshot.lock()` 时再次调用配置绑定逻辑；
- 二次加锁可能造成桌面 Core 启动死锁；
- 修复后避免在替换配置快照时重复锁定。

这是影响应用启动可用性的高价值稳定性修复。

### 3.3 TinySecurity 策略与嵌入式 Runtime 能力增强

[#8547 feat(security): turn the Jev judge on by default](https://github.com/tinyhumansai/openhuman/pull/8547)

今日已关闭，主要变化：

- 检测到 Jev credential 时，默认启用 TinySecurity 的 **Jev judge**；
- 新增 `[security] judge = "off"` 配置，允许显式关闭；
- 新增 `RuntimeBuilder::security_judge(...)`，使 embedding host 可提供自定义路由与凭据。

[#8540 Let a later embedded runtime take over TinySecurity's secret scope once the first is released](https://github.com/tinyhumansai/openhuman/pull/8540)

今日已关闭。此前同一进程内第二个嵌入式 Runtime 会因 secret scope 变化而无法调用 TinySecurity；该 PR 在首个 Runtime 释放后允许后续 Runtime 接管安全作用域，提升了嵌入式运行的复用能力。

[#8539 security: disabled-mode decisions — no path floor, raw log URLs, local_only still blocks shell network](https://github.com/tinyhumansai/openhuman/pull/8539)

今日已关闭。进一步完善安全模块不可用或配置为关闭时的决策逻辑：

- disabled mode 不再强制套用路径权限下限；
- 日志 URL 可使用原始路径；
- `local_only` 模式下仍禁止 shell 网络访问。

[#8538 Make TinySecurity checks permissive when security is disabled](https://github.com/tinyhumansai/openhuman/pull/8538)

今日已关闭。目标是让显式关闭安全检查的构建或配置不再因 TinySecurity 无法响应而一律 fail closed，为嵌入式部署和本地开发提供更可控的降级行为。

### 3.4 模块加载与版本治理统一

[#8535 fix(modules): load callback-bound modules from the verified release, not only a local file](https://github.com/tinyhumansai/openhuman/pull/8535)

今日已关闭。TinySecurity、TinyMCP、TinyEventQueues、TinyChannels、TinyComputer 等需要 host callback 的模块，现在可在未设置 `OPENHUMAN_MODULE_PATH` 时直接从已验证的固定 release 加载，不再完全依赖本地覆盖文件。

[#8534 chore(modules): reconcile six module pins with their releases](https://github.com/tinyhumansai/openhuman/pull/8534)

今日已关闭。对六个模块的 registry release 与 gitlink 进行了同步，修复 `check-module-pins` 在 `main` 上失败的问题。这有助于减少“运行时 artifact 版本”和“编译期接口版本”不一致的问题。

[#8542 chore(registry): bump tinysearch module to 0.5.6](https://github.com/tinyhumansai/openhuman/pull/8542)

今日已关闭。主要更新：

- TinySearch 更新至 **0.5.6**；
- 默认 Gemini 调用使用 `thinkingLevel: low`；
- 直接 Exa 搜索默认使用低延迟 `lite` 类型，调用方可覆盖。

这能降低搜索链路的交互延迟和额外推理开销。

### 3.5 聊天标题持久化修复

[#8140 fix(threads): keep a rename made while the title is generated](https://github.com/tinyhumansai/openhuman/pull/8140)

今日已关闭。系统生成标题时若用户已手动重命名，不再覆盖用户修改：

- 模型摘要标题和 fallback 标题统一经过 `update_title_unless_renamed`；
- 写入前重新读取 thread；
- 仅在用户未重命名时更新系统生成标题。

该修复对应已关闭 Issue [#8134 Renamed chat title may revert after navigating away](https://github.com/tinyhumansai/openhuman/issues/8134)。

### 3.6 CI 与覆盖率优化

[#8537 ci(ex63): build without the Tinymold remote cache](https://github.com/tinyhumansai/openhuman/pull/8537)

今日已关闭。EX63 私有流水线移除 Tinymold 签名远程 Rust 编译缓存配置，避免因 guest 缺少签名缓存配置而在 lane 启动前失败。

[#8323 perf(ci): run hosted Rust coverage under nextest; build default-feature core once](https://github.com/tinyhumansai/openhuman/pull/8323)

今日已关闭。Rust 覆盖率测试迁移到 nextest，并复用 default-feature core 的构建结果，目标是缩短 hosted CI 中耗时最长的 coverage lane。

### 3.7 阶段总结

今日已关闭的 13 个 PR 覆盖了：

- **认证与凭据安全**
- **Runtime 启动死锁**
- **TinySecurity 策略与多 Runtime 生命周期**
- **模块版本与加载机制**
- **搜索体验**
- **聊天标题状态一致性**
- **CI 稳定性与性能**

整体上，项目从“模块接口、运行时生命周期和发布配置”多个底层层面完成了较强收敛；但由于**没有新版本发布**，这些改动的用户端可见性和回归覆盖仍需后续 Release 验证。

---

## 4. 社区热点

> 今日 Issue 评论数均较低，暂无高互动量讨论。以下按优先级、影响范围和开放状态排序。

### [#8543 Desktop sign-in never activates the per-user profile](https://github.com/tinyhumansai/openhuman/issues/8543)

- **状态：OPEN**
- **优先级：P1**
- **评论：1**
- **热度判断：今日唯一新开的 Issue，也是当前最值得维护者立即响应的问题。

用户反馈桌面端登录后仍停留在 `users/local`，没有切换到登录用户的 profile 目录。该问题涉及 Google、GitHub、Twitter 及本地账户，直接影响：

- 对话记录隔离；
- 记忆数据隔离；
- 凭据隔离；
- 多账号切换。

其核心诉求不是单纯的“登录按钮不可用”，而是**身份状态与本地数据目录未正确绑定**。虽然 [#8536](https://github.com/tinyhumansai/openhuman/pull/8536) 已改善 token 存储和失败回滚，但 Issue 仍开放，建议维护者明确该修复是否覆盖 profile takeover，并补充多账户隔离回归测试。

### [#8502 TTS broken: POST /openai/v1/audio/speech returns 400](https://github.com/tinyhumansai/openhuman/issues/8502)

- **状态：CLOSED**
- **优先级：P1**
- **评论：2**
- **影响范围：约 97 个用户、两个 Sentry group、1,015 次事件。

这是今日影响面最大的用户侧故障之一。TTS 请求端点返回 400，意味着文本转语音这一基础能力大面积不可用。其背后诉求是提高 OpenAI-compatible 音频接口的请求兼容性、错误处理与发布前验证强度。

### [#8503 STT/transcription returns 400 from ElevenLabs path](https://github.com/tinyhumansai/openhuman/issues/8503)

- **状态：CLOSED**
- **优先级：P1**
- **评论：2**
- **Sentry：134 次事件，17 个用户。

STT 失败与 [#8502](https://github.com/tinyhumansai/openhuman/issues/8502) 一起表明 **0.64.15 的语音输入输出链路存在系统性回归**，而不只是单一接口偶发失败。关闭状态说明修复已经收敛，但仍需在后续 Release 中确认 ElevenLabs 与 OpenAI-compatible 两条路径均通过端到端测试。

### [#8505 panic: cannot move state from Destroyed](https://github.com/tinyhumansai/openhuman/issues/8505)

- **状态：CLOSED**
- **优先级：P2 / p1**
- **评论：2**
- **Sentry：16 次事件、7 个用户。

这是一个 fatal panic，涉及已销毁状态的后续迁移，可能由生命周期清理与会话切换竞态触发。虽然严重度低于语音问题，但 fatal panic 对桌面端稳定性的影响较大。

### [#8134 Renamed chat title may revert after navigating away](https://github.com/tinyhumansai/openhuman/issues/8134)

- **状态：CLOSED**
- **评论：1**
- **修复 PR： [#8140](https://github.com/tinyhumansai/openhuman/pull/8140)**

问题反映用户对聊天管理的核心期待：手动重命名应具有稳定、持久的状态优先级，不应被后台自动命名覆盖。该修复已直接补齐对应逻辑。

---

## 5. Bug 与稳定性

### P1：桌面登录后未进入用户 Profile

[#8543 Desktop sign-in never activates the per-user profile](https://github.com/tinyhumansai/openhuman/issues/8543)

- **状态：OPEN**
- **严重程度：P1**
- **影响：账号隔离、对话、记忆、凭据及本地数据归属**
- **已有相关 fix PR：** [#8536](https://github.com/tinyhumansai/openhuman/pull/8536) 已关闭，但 Issue 尚未关闭，覆盖关系需确认。
- **判断：** 高风险回归，应进行登录、退出、切换账号、失败回滚和重启后的数据隔离测试。

### P1：TTS 请求全部返回 400

[#8502 TTS broken: POST /openai/v1/audio/speech returns 400](https://github.com/tinyhumansai/openhuman/issues/8502)

- **状态：CLOSED**
- **严重程度：P1**
- **影响：约 97 个用户，1,015 次 Sentry 事件**
- **已有修复：** Issue 已关闭，数据中未显示直接对应的独立 fix PR。
- **判断：** 大范围影响的基础能力回归，需在下一版发布前补充音频接口兼容性测试。

### P1：STT / ElevenLabs 路径返回 400

[#8503 STT/transcription returns 400 from ElevenLabs path](https://github.com/tinyhumansai/openhuman/issues/8503)

- **状态：CLOSED**
- **严重程度：P1**
- **影响：17 个用户、134 次 Sentry 事件**
- **已有修复：** Issue 已关闭，数据中未显示直接对应的独立 fix PR。
- **判断：** 与 TTS 问题共同构成 0.64.15 语音链路回归，应做跨供应商回归验证。

### P2 / p1：销毁状态后触发 panic

[#8505 panic: cannot move state from Destroyed](https://github.com/tinyhumansai/openhuman/issues/8505)

- **状态：CLOSED**
- **严重程度：P2 / p1**
- **影响：fatal panic，7 个用户、16 次事件**
- **已有修复：** Issue 已关闭，摘要未明确对应 PR。
- **判断：** 需重点检查退出登录、应用关闭、会话销毁及异步任务完成后的状态迁移竞态。

### P3：聊天标题重命名后回滚

[#8134 Renamed chat title may revert after navigating away](https://github.com/tinyhumansai/openhuman/issues/8134)

- **状态：CLOSED**
- **严重程度：未标注明确 P 级**
- **已有 fix PR：** [#8140](https://github.com/tinyhumansai/openhuman/pull/8140)
- **判断：** 修复路径明确，主要风险在于自动标题生成与手动重命名的并发时序。

### 启动死锁修复

[#8546 fix(runtime): don't relock the config snapshot while replacing it](https://github.com/tinyhumansai/openhuman/pull/8546)

- **状态：CLOSED**
- **严重程度：潜在启动阻断问题**
- **判断：** 已关闭修复应进入回归测试，重点覆盖 embedder 配置刷新和 Runtime 初始化并发场景。

---

## 6. 功能请求与路线图信号

### agent37 沙箱后端

[#8545 Fix agent37 sandbox routing, constraints, template, egress, and cleanup](https://github.com/tinyhumansai/openhuman/pull/8545)

- **状态：OPEN**
- **内容：** 修复 agent37 的沙箱路由、约束、模板、网络出口与资源清理。
- **依赖：** 当前阻塞于 TinyBox pin；现有 `vendor/tinybox` 尚不包含 agent37 backend，运行时可能返回 `UNSUPPORTED_BACKEND`。
- **路线图判断：** 明确代表后续沙箱能力方向，但短期不宜合入。

[#8544 Add the agent37 sandbox backend wiring](https://github.com/tinyhumansai/openhuman/pull/8544)

- **状态：CLOSED**
- **内容：** 增加 OpenHuman host 对 agent37 sandbox backend 的接线。
- **依赖：** 叠加于 TinyBox PR #143。
- **路线图判断：** agent37 是明确的近期工程方向，后续应关注 TinyBox PR 是否合并、OpenHuman 是否更新 pin，以及是否补齐路由和生命周期测试。

### 自动流程保存后的安全停用

[#8541 fix(flows): auto-disable enabled automatic flow on builder graph save](https://github.com/tinyhumansai/openhuman/pull/8541)

- **状态：OPEN**
- **内容：** builder 保存 graph 时，强制停用已经启用的 automatic-trigger flow。
- **原因：** 原逻辑会把新 graph 直接覆盖到已启用流程上，导致未经审核的新配置立即生效。
- **路线图判断：** 很可能被纳入下一版本，原因是它修复的是自动化工作流的发布安全边界，变更范围清晰，且当前开放状态表示仍在等待审查或补充测试。

### 自定义安全 Judge

[#8547 feat(security): turn the Jev judge on by default](https://github.com/tinyhumansai/openhuman/pull/8547)

- **状态：CLOSED**
- **路线图信号：** TinySecurity 正在从单纯的凭据存储扩展为可配置的运行时安全裁决层。
- **重点：** 默认开启 Jev judge 属于行为变化，后续 Release 应明确说明默认策略、关闭方式及迁移影响。

### 搜索链路性能优化

[#8542 chore(registry): bump tinysearch module to 0.5.6](https://github.com/tinyhumansai/openhuman/pull/8542)

- **状态：CLOSED**
- **路线图信号：** 默认降低 Gemini thinking level、Exa 默认切换到 lite，表明项目正优先改善实时交互延迟和资源成本。

---

## 7. 用户反馈摘要

### 真实痛点

1. **桌面登录成功不等于真正进入用户身份**
   - 用户在 [#8543](https://github.com/tinyhumansai/openhuman/issues/8543) 中明确指出，登录后仍停留在 `users/local`。
   - 用户最担心的是不同账户之间的数据混合，而不是单纯的登录失败。
   - 这说明“登录 UI 成功”和“运行时身份/存储 namespace 切换”之间存在认知与实现落差。

2. **语音是高频基础能力，故障直接影响核心体验**
   - [#8502](https://github.com/tinyhumansai/openhuman/issues/8502) 的 TTS 400 覆盖约 97 个用户。
   - [#8503](https://github.com/tinyhumansai/openhuman/issues/8503) 的 STT 400 覆盖 17 个用户。
   - 大量 Sentry 事件说明用户不是在偶发边缘场景中遇到问题，而是在稳定使用路径上持续失败。

3. **手动聊天标题需要被尊重**
   - [#8134](https://github.com/tinyhumansai/openhuman/issues/8134) 反映出用户对异步生成功能的基本预期：系统自动生成不能覆盖已经明确执行的用户操作。
   - [#8140](https://github.com/tinyhumansai/openhuman/pull/8140) 已直接采用“用户重命名优先”的状态模型。

4. **崩溃会直接破坏用户信任**
   - [#8505](https://github.com/tinyhumansai/openhuman/issues/8505) 虽然样本量小于语音故障，但属于 fatal panic。
   - 此类问题通常比普通 UI 错误更容易造成会话中断、数据未保存或用户被迫重启。

### 满意与不满意信号

- 今日 Issue 的 👍 数均为 **0**，且评论量仅为 **1–2**，因此没有足够数据判断社区整体满意度。
- 现有反馈整体偏负面，集中在故障与行为回归；没有出现明确的功能赞誉或满意度反馈。
- Issue 较快关闭、相关 PR 连续合入，表明维护者对语音、标题和底层稳定性问题的响应速度较好，但“关闭是否代表已随用户可用版本发布”仍无法从当前数据确认。

---

## 8. 待处理积压

### 开放 Issue

[#8543 Desktop sign-in never activates the per-user profile](https://github.com/tinyhumansai/openhuman/issues/8543)

- **优先级：P1**
- **创建时间：2026-11-04**
- **评论：1**
- **积压风险：中等**
- **建议：**
  - 明确 [#8536](https://github.com/tinyhumansai/openhuman/pull/8536) 是否完整覆盖该问题；
  - 补充 Google、GitHub、Twitter 和本地账户的登录回归；
  - 验证退出、切换账号、重启后的 profile、conversation、memory 和 credentials 隔离；
  - 在发布说明中避免仅以“凭据存储修复”代替“用户 profile 切换已修复”的表述。

### 开放 PR

[#8545 Fix agent37 sandbox routing, constraints, template, egress, and cleanup](https://github.com/tinyhumansai/openhuman/pull/8545)

- **创建时间：2026-11-04**
- **状态：OPEN / Draft**
- **阻塞点：** TinyBox pin 尚未支持 agent37 backend。
- **积压风险：中等偏高**
- **建议：**
  - 明确依赖版本和预计合并顺序；
  - 合并前完成 `UNSUPPORTED_BACKEND` 场景下的错误处理；
  - 增加沙箱 egress、constraint、template 与 cleanup 测试；
  - 避免主分支长期引用未发布或未验证的 TinyBox 能力。

[#8541 fix(flows): auto-disable enabled automatic flow on builder graph save](https://github.com/tinyhumansai/openhuman/pull/8541)

- **创建时间：2026-11-04**
- **状态：OPEN**
- **积压风险：低至中等**
- **建议：**
  - 确认保存后停用状态能正确持久化；
  - 确认 UI 有明确提示，允许用户重新启用并完成审核；
  - 补充“已启用自动流程 → 保存 graph”的回归测试。

### 需要关注的发布积压

- 今日关闭的 [#8502](https://github.com/tinyhumansai/openhuman/issues/8502)、[#8503](https://github.com/tinyhumansai/openhuman/issues/8503)、[#8505](https://github.com/tinyhumansai/openhuman/issues/8505) 以及标题修复 [#8140](https://github.com/tinyhumansai/openhuman/pull/8140) 均**没有伴随新 Release**。
- 这形成“代码已收敛但用户尚未获得新版本”的发布积压。建议尽快准备版本发布，并在发布前执行语音、登录隔离、panic 与标题持久化的端到端回归。

---

## 今日结论

OpenHuman 今日开发活动较高，底层工程质量继续推进，尤其是 **TinySecurity 生命周期、模块版本治理、Core 死锁和 CI 性能**方面取得明显进展。  
不过，**0.64.15 暴露出的语音大面积回归与桌面登录 profile 隔离问题仍是主要风险**。当前最合理的行动顺序是：

1. 确认并验证桌面登录隔离修复；
2. 完成 TTS/STT、panic 和聊天标题回归测试；
3. 发布包含今日关键修复的新版本；
4. 推进 agent37，但等待 TinyBox 依赖具备可验证的发布版本；
5. 审查 automatic flow 保存即停用的安全行为。

</details>

---
*本日报由 [Big Model Radar](https://github.com/96loveslife/big_model_radar) 自动生成。*
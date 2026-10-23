# OpenClaw 生态日报 2026-10-23

> Issues: 500 | PRs: 500 | 覆盖项目: 8 个 | 生成时间: 2026-10-23 08:00 UTC

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

**日期：2026-10-23**  
**数据范围：过去 24 小时 GitHub 更新**

> **健康度判断：活跃但承压。**  
> 过去 24 小时共记录 **500 条 Issue 更新、500 条 PR 更新、1 个版本发布**。Issues 中新开/活跃占比 **66.4%**，PR 中已合并/关闭占比 **54.8%**，说明项目开发吞吐较高；但大量高优先级稳定性、会话状态、插件性能和安全边界问题仍未闭环，当前版本质量风险偏高。

---

## 1. 今日速览

1. OpenClaw 今日保持极高开发活跃度：过去 24 小时有 **500 条 Issue 更新**和 **500 条 PR 更新**，其中 PR 待合并 **226 条**，已合并/关闭 **274 条**。
2. 今日发布 **v2026.10.6**，重点是升级 Node.js 安全基线，用户需要尽快检查运行环境；该版本同时改变了最低 Node 版本要求，属于必须关注的兼容性升级。
3. 社区关注集中在 **Gateway 性能、插件加载、会话状态、模型调用可靠性和安全边界**，其中多个 P0/P1 问题仍在开放状态。
4. 从问题分布看，Windows、macOS 以及大规模多 Agent 部署场景下的性能与资源管理问题较突出；另有 SQLite WAL、进程恢复、归档重试等长期稳定性问题。
5. 项目功能迭代明显，正在推进问题持久化、Web UI 可用性、iOS 连接校验、审批查询去重、测试与启动性能优化，但新问题产生速度仍高于部分高优先级问题的收敛速度。

---

## 2. 版本发布

### v2026.10.6

- **Release：** [v2026.10.6](https://github.com/openclaw/openclaw/releases/tag/v2026.10.6)

#### 更新重点

该版本的主要更新是提高 Node.js 运行时安全基线：

- Node 24 线要求升级至 **24.22.1+**
- Node 26 线要求升级至 **26.12.1+**
- 目标是拒绝使用受 2026 年 10 月 Node.js 安全发布中涉及、且可能由泄露证书密钥签发的 TLS 证书链

#### 破坏性变更

- 仍运行旧 Node.js 版本的部署可能出现安装、启动或 TLS 连接失败。
- Docker 镜像与其他预置部署环境需要确认是否已包含合规 Node 版本。
- 使用自定义 Node、Docker 基础镜像、CI runner 或托管平台的用户，需要单独核对版本。

#### 迁移建议

1. 升级前检查 Node 版本：
   ```bash
   node --version
   ```
2. Node 24 用户升级到至少 `24.22.1`。
3. Node 26 用户升级到至少 `26.12.1`。
4. 检查 Docker 镜像、CI、开发环境和生产环境是否存在旧 Node 镜像。
5. 对使用自签名证书、企业代理或内部 CA 的部署，升级后重新验证 TLS 连接。
6. 升级后重点回归 Gateway 启动、插件加载、模型调用和 WebSocket 连接。

---

## 3. 项目进展

今日展示的 PR 多数处于开放或已关闭状态，以下为较值得关注的功能和质量改进。

### 3.1 Web UI 与交互体验改进

- **修复 iOS Gateway 主机字段错误解析**  
  [PR #181474](https://github.com/openclaw/openclaw/pull/181474)  
  修复 Host 字段中嵌入端口时绕过校验的问题，例如 `gateway.example.com:8443`。这有助于避免错误 endpoint 构造和连接配置歧义。  
  相关问题：[Issue #144678](https://github.com/openclaw/openclaw/issues/144678)

- **减少审批页签切换时的重复查询**  
  [PR #178217](https://github.com/openclaw/openclaw/pull/178217)  
  解决用户反复切换审批标签页时，重复发起 `approval.get` 请求、叠加 Gateway 负载并延迟查询结果的问题。  
  相关问题：[Issue #127579](https://github.com/openclaw/openclaw/issues/127579)

- **改进设置页焦点状态**  
  [PR #181468](https://github.com/openclaw/openclaw/pull/181468)  
  将设置控件的焦点保留范围收窄到实际保存操作期间，避免权限不足、加载中或不可编辑控件继续被键盘聚焦。

- **补全问题配对状态的无障碍通知**  
  [PR #178139](https://github.com/openclaw/openclaw/pull/178139)  
  修复设备请求配对时，屏幕阅读器无法及时播报 pending device request 的问题。  
  相关问题：[Issue #178136](https://github.com/openclaw/openclaw/issues/178136)

- **展示已保存问题的后续执行结果**  
  [PR #171710](https://github.com/openclaw/openclaw/pull/171710)  
  在聊天和独立问题页面显示问题继续执行被阻塞或中断时的 Gateway 原因与下一步动作，减少用户无法判断任务状态的困惑。

### 3.2 会话持久化与恢复能力

- **保留问题在规范会话存储中的状态**  
  [PR #168917](https://github.com/openclaw/openclaw/pull/168917)  
  目标是在 Gateway 重启后保留待处理问题、已提交答案和 continuation receipt，使问题交接具备更强的持久化能力。

- **问题继续执行与启动恢复**  
  [PR #171682](https://github.com/openclaw/openclaw/pull/171682)  
  通过 durable claim 和启动恢复机制，在原始调用者权限边界内恢复已提交答案，提升自动化任务在重启后的连续性。

- **修复已持久化用户 turn 在 admission race 下被丢弃**  
  [PR #181473](https://github.com/openclaw/openclaw/pull/181473)  
  解决后台消息投递镜像落入 replay admission 窗口时，已经写入但尚未准入的用户消息被静默丢弃的问题。  
  相关问题：[Issue #179562](https://github.com/openclaw/openclaw/issues/179562)

- **修复符号链接状态路径导致首次聊天失败**  
  [PR #181472](https://github.com/openclaw/openclaw/pull/181472)  
  支持通过符号链接或 macOS `/var` 路径别名访问状态目录，避免首次推理前因数据库 owner 判定失败而失败。

### 3.3 Worker、Agent 与运维可靠性

- **改善中断子任务的检查与恢复**  
  [PR #180785](https://github.com/openclaw/openclaw/pull/180785)  
  使 Agent 能通过原始 publication ID、记录的执行效果和环境信息重新检查中断的 child work。  
  相关问题：[Issue #180664](https://github.com/openclaw/openclaw/issues/180664)

- **限制 session archive 重试，避免无限循环**  
  [PR #181476](https://github.com/openclaw/openclaw/pull/181476)  
  当归档持续返回可重试错误时，不再无限重试，从而降低后台任务堆积和资源占用。  
  相关问题：[Issue #180584](https://github.com/openclaw/openclaw/issues/180584)

- **Codex 父线程复用时支持正常 Stop**  
  [PR #181475](https://github.com/openclaw/openclaw/pull/181475)  
  修复 Codex 在复用父线程后，停止父运行时可能因 generation identity 变化而失败的问题。

### 3.4 性能与测试工程

- **优化移动端 Gutter 测试**  
  [PR #181478](https://github.com/openclaw/openclaw/pull/181478)  
  复用已稳定的布局测量结果，减少重复浏览器调用和等待时间。

- **复用更新生命周期测试中的编译资源**  
  [PR #181477](https://github.com/openclaw/openclaw/pull/181477)  
  避免同一 UI 源被重复编译和压缩，缩短测试执行时间。

- **缩短冷启动 Control UI 测试队列**  
  [PR #181450](https://github.com/openclaw/openclaw/pull/181450)  
  针对测试队列尾部 74–83 秒的额外等待时间进行调度优化。

- **延迟可选 Chat 启动依赖和页面文案**  
  [PR #181355](https://github.com/openclaw/openclaw/pull/181355)  
  减少 Chat 首次渲染时的非必要下载、预热和代码加载，属于 Web UI 首屏性能优化。

- **流式 HTML 输出性能优化**  
  [PR #180775](https://github.com/openclaw/openclaw/pull/180775)  
  避免每个不完整 HTML 标签都触发完整 Markdown 解析，降低长回复流式输出期间的 Gateway 阻塞。  
  相关问题：[Issue #180720](https://github.com/openclaw/openclaw/issues/180720)

### 3.5 维护性与代码结构

- **收敛单消费者命令和生命周期接口**  
  [PR #181481](https://github.com/openclaw/openclaw/pull/181481)

- **收敛插件内部公共接口**  
  [PR #181463](https://github.com/openclaw/openclaw/pull/181463)

- **共享 Gateway ownership 测试门禁**  
  [PR #181398](https://github.com/openclaw/openclaw/pull/181398)

- **诊断会话读取测试修复**  
  [PR #181461](https://github.com/openclaw/openclaw/pull/181461)

这些 PR 多为内部重构和测试优化，用户可见功能有限，但对降低维护复杂度、提升测试稳定性和后续迭代速度具有基础性价值。

---

## 4. 社区热点

### 4.1 插件捕获导致 Gateway 长时间阻塞

- [Issue #160959](https://github.com/openclaw/openclaw/issues/160959)
- 评论数：**43**
- 优先级：**P0**
- 影响：Gateway 可能阻塞数分钟，插件启动和模型运行时重新发布时均可能触发。

用户反馈表明，外部插件或 workspace plugin 的依赖树较大时，插件捕获过程会长时间占用事件循环。其核心诉求是：

- 插件构建不能阻塞 Gateway；
- 大型插件应支持异步、流式或后台处理；
- 需要明确的超时和失败反馈；
- 回归版本需要可复现的启动性能基线。

该问题是今日最值得优先处理的性能与可用性风险之一。

### 4.2 Gateway 状态数据库 WAL 无法完成 checkpoint

- [Issue #164294](https://github.com/openclaw/openclaw/issues/164294)
- 评论数：**27**
- 优先级：**P2**

用户报告 `state/openclaw.sqlite` 的 WAL auto-checkpoint 自启动以来始终被 reader 阻塞。该问题长期积累后可能导致：

- WAL 文件持续增长；
- SQLite 读写压力增大；
- 数据库恢复和备份时间变长；
- Gateway 在高并发或重启场景下更容易出现事务阻塞。

相关稳定性问题还包括：

- [Issue #155359](https://github.com/openclaw/openclaw/issues/155359)：Windows 上出现多次 5.9–33.2 秒的 SQLite 写事务阻塞；
- [Issue #166634](https://github.com/openclaw/openclaw/issues/166634)：崩溃恢复后因 checkpoint 失败导致 Agent 持续 `UNAVAILABLE`。

### 4.3 Windows 启动性能严重回归

- [Issue #168955](https://github.com/openclaw/openclaw/issues/168955)
- 评论数：**18**
- 优先级：**P1**

从 `2026.9.9` 升级到 `2026.10.1` 后，Windows Gateway ready 时间从约 **410 秒**升至约 **1030 秒**，其中 `sidecars.control-ui-assets` 阶段阻塞约 **477 秒**。

这反映出近期版本在 Windows 环境下可能存在：

- Control UI 资源重复处理；
- sidecar 初始化路径过长；
- 启动流程串行化；
- 缓存或临时文件策略不合理。

相关插件加载性能问题：

- [Issue #160485](https://github.com/openclaw/openclaw/issues/160485)：单个重量级 channel plugin 冷启动约 5–13 秒，三个插件占用约 57.4 秒。

### 4.4 Agent 成本预算控制

- [Issue #42475](https://github.com/openclaw/openclaw/issues/42475)
- 评论数：**27**
- 优先级：**P2**

用户希望在 Gateway 层提供按 Agent 隔离的每日、每月成本上限，在模型调用前直接阻断超预算请求。

这一需求的背后是：

- 多 Agent 部署中的费用失控风险；
- 现有成本统计无法阻止异常调用；
- 运维团队希望在本地 Gateway 实现预算治理；
- 需要比外部监控更前置、更强制的控制点。

目前该 Issue 标记为需要产品决策，尚无明确 fix PR。

### 4.5 内置无头浏览器需求

- [Issue #53763](https://github.com/openclaw/openclaw/issues/53763)
- 评论数：**18**
- 状态：**Closed**

用户希望 OpenClaw 内置 headless Chromium，以支持：

- JavaScript 渲染页面；
- 登录态页面访问；
- 更稳定的网页自动化；
- 减少对用户本地 Chrome 或第三方浏览器服务的依赖。

虽然该 Issue 已关闭，但其背后仍代表 Agent 获取网页信息时的核心基础设施需求，未来可能继续以浏览器插件、内置 browser tool 或独立 companion 组件的形式演进。

---

## 5. Bug 与稳定性

以下按严重程度排序。由于部分 Issue 尚未提供可验证修复 PR，标注为“暂无明确 fix PR”。

### P0 / 发布阻断或核心不可用

#### 5.1 插件捕获导致 Gateway 长时间阻塞

- [Issue #160959](https://github.com/openclaw/openclaw/issues/160959)
- **状态：** Open
- **Fix PR：** 暂无明确 fix PR
- **影响：** Gateway 事件循环阻塞数分钟，影响启动和插件运行时刷新。

#### 5.2 Live Docs 与正式版本功能不一致

- [Issue #48920](https://github.com/openclaw/openclaw/issues/48920)
- **状态：** Open
- **Fix PR：** 暂无明确 fix PR
- **影响：** 文档中已出现 `IsolatedSessions`，但发布版本不可用，形成发布质量和配置兼容风险。

#### 5.3 triage repair 子进程无法退出并阻塞重启

- [Issue #156712](https://github.com/openclaw/openclaw/issues/156712)
- **状态：** Open
- **Fix PR：** 暂无明确 fix PR
- **影响：** repair 子进程可能长期存活，持有 Gateway lifecycle lock，阻塞应用重启。

#### 5.4 崩溃恢复后 Agent 持续不可用

- [Issue #166634](https://github.com/openclaw/openclaw/issues/166634)
- **状态：** Open
- **Fix PR：** 暂无明确 fix PR
- **影响：** `chat.history`、`chat.metadata`、`models.list` 等请求持续返回 `UNAVAILABLE`，可能伴随会话状态丢失。

#### 5.5 macOS Gateway 资源压力

- [Issue #156674](https://github.com/openclaw/openclaw/issues/156674)
- **状态：** Open
- **Fix PR：** 暂无明确 fix PR
- **影响：** 8 GiB macOS VM 上长期运行大量 Codex worker 时，Gateway 持续消耗 CPU 和内存，降低系统响应性。

#### 5.6 billing cooldown 长时间阻断订阅认证

- [Issue #115642](https://github.com/openclaw/openclaw/issues/115642)
- **状态：** Open
- **Fix PR：** 暂无明确 fix PR
- **影响：** provider 恢复后仍可能被约 5 小时的 cooldown 阻断，且缺少可靠的探针恢复和手动重置机制。

### P1 / 严重稳定性与可用性问题

| 问题 | 状态 | 修复进展 |
|---|---|---|
| [Windows 启动从约410秒回归至约1030秒](https://github.com/openclaw/openclaw/issues/168955) | Open | 暂无明确 fix PR |
| [SQLite WAL auto-checkpoint 永久阻塞](https://github.com/openclaw/openclaw/issues/164294) | Open | 暂无明确 fix PR |
| [plugin-captures 临时目录持续累积](https://github.com/openclaw/openclaw/issues/158390) | Open | 有 `queueable-fix`、`fix-shape-clear` 标记，但暂无明确合并 PR |
| [Windows 睡眠恢复后 WebSocket 重连失败](https://github.com/openclaw/openclaw/issues/140010) | Open | 暂无明确 fix PR |
| [Windows 自动更新失败](https://github.com/openclaw/openclaw/issues/157812) | Open | 暂无明确 fix PR |
| [子 Agent 完成后下一任务因 runtime generation 失效](https://github.com/openclaw/openclaw/issues/145690) | Open | 暂无明确 fix PR |
| [Gateway 控制请求阻塞数分钟](https://github.com/openclaw/openclaw/issues/138042) | Open | 暂无明确 fix PR |
| [Codex 最终答案恢复时 provenance_rejected 导致失败](https://github.com/openclaw/openclaw/issues/155396) | Open | 暂无明确 fix PR |
| [Google Meet Agent 语音会话崩溃](https://github.com/openclaw/openclaw/issues/140455) | Open | 暂无明确 fix PR |
| [长期 session 无法 compaction，投影和转录持续膨胀](https://github.com/openclaw/openclaw/issues/125308) | Open | 部分相关修复已合并，但仍存在长期会话问题 |

### P2 / 中等但持续影响使用的问题

- [Control UI 模型切换后 maxTokens 显示过期](https://github.com/openclaw/openclaw/issues/165421)  
  Open；暂无明确 fix PR。

- [Per-agent tools.alsoAllow 无法授予 browser 工具](https://github.com/openclaw/openclaw/issues/156864)  
  Open；暂无明确 fix PR。

- [A2A Workshop 审批缺少 operator.approvals scope](https://github.com/openclaw/openclaw/issues/159787)  
  Open；暂无明确 fix PR。

- [WebChat 回复重复显示 2–3 次](https://github.com/openclaw/openclaw/issues/140723)  
  Open；暂无明确 fix PR。

- [Telegram ask_user 工具无法投递并导致 session 永久挂起](https://github.com/openclaw/openclaw/issues/140085)  
  Open；暂无明确 fix PR。

- [macOS SecretRef Gateway token 未传递](https://github.com/openclaw/openclaw/issues/141413)  
  Open；暂无明确 fix PR。

- [egress proxy sentinel substitution 间歇性失效](https://github.com/openclaw/openclaw/issues/166137)  
  Open；暂无明确 fix PR。

- [memory-core dreaming 忽略 minRecallCount 和 minUniqueQueries](https://github.com/openclaw/openclaw/issues/112349)  
  Open；暂无明确 fix PR。

- [Control UI 上传大小限制硬编码为 5MB](https://github.com/openclaw/openclaw/issues/71142)  
  Open；暂无明确 fix PR。

### 已有明确修复方向的 PR

以下方向已有较清晰修复 PR，但不代表已稳定进入正式版本：

- iOS Gateway 主机字段校验：[PR #181474](https://github.com/openclaw/openclaw/pull/181474)
- 用户 turn admission race：[PR #181473](https://github.com/openclaw/openclaw/pull/181473)
- 符号链接状态路径：[PR #181472](https://github.com/openclaw/openclaw/pull/181472)
- Codex Stop 与线程复用：[PR #181475](https://github.com/openclaw/openclaw/pull/181475)
- 归档无限重试：[PR #181476](https://github.com/openclaw/openclaw/pull/181476)
- 使用统计中的损坏 transcript 隔离：[PR #180784](https://github.com/openclaw/openclaw/pull/180784)
- 流式 HTML 解析性能：[PR #180775](https://github.com/openclaw/openclaw/pull/180775)
- 控制 UI 审批查询去重：[PR #178217](https://github.com/openclaw/openclaw/pull/178217)

---

## 6. 功能请求与路线图信号

### 6.1 Agent 级成本预算

- [Issue #42475](https://github.com/openclaw/openclaw/issues/42475)

建议纳入下一版本规划的能力：

- 每日和每月预算；
- 按 Agent、模型、渠道或 session 统计；
- 调用前预算检查；
- 超限后的明确错误和通知；
- 预算重置与管理命令；
- 与现有 `session-cost-usage.ts` 统计数据联动。

该需求与个人 AI 助手、多 Agent 自动化和企业部署场景高度相关，属于较强的产品方向信号。

### 6.2 Durable question continuation

- [Issue #167266](https://github.com/openclaw/openclaw/issues/167266)
- [PR #168917](https://github.com/openclaw/openclaw/pull/168917)
- [PR #171682](https://github.com/openclaw/openclaw/pull/171682)
- [PR #171710](https://github.com/openclaw/openclaw/pull/171710)

OpenClaw 正在构建从“单次工具调用”向“可恢复的异步任务交互”演进：

- 问题状态持久化；
- Gateway 重启后继续执行；
- 清晰展示阻塞、中断和下一步动作；
- 使用 durable claim 防止重复执行。

这可能是 Agent 从实时聊天走向可靠任务编排的重要基础能力。

### 6.3 内置浏览器与网页访问能力

- [Issue #53763](https://github.com/openclaw/openclaw/issues/53763)

虽然 Issue 已关闭，但内置 headless browser 仍是高频基础需求。未来可能以以下形态落地：

- 官方 browser extension；
- 隔离式 Chromium 容器；
- 与现有 browser plugin 统一；
- 登录态和浏览器上下文持久化；
- 网页任务的结构化抽取和回传。

### 6.4 配置和运营能力

- [Issue #71142](https://github.com/openclaw/openclaw/issues/71142)：Control UI 上传大小可配置。
- [Issue #144306](https://github.com/openclaw/openclaw/issues/144306)：允许 automations 向 paired node 投递通知。
- [Issue #138279](https://github.com/openclaw/openclaw/issues/138279)：提供 Linux ARM64 companion 构建。
- [Issue #53763](https://github.com/openclaw/openclaw/issues/53763)：降低浏览器能力对外部环境的依赖。

这些需求共同指向一个趋势：OpenClaw 正从单一 Gateway 工具，进一步扩展为跨设备、跨运行时、可长期运行的个人 AI 操作平台。

### 6.5 可能进入近期版本的 PR

基于当前 PR 状态，较可能进入下一轮版本的内容包括：

- 问题持久化与启动恢复：  
  [PR #168917](https://github.com/openclaw/openclaw/pull/168917)、[PR #171682](https://github.com/openclaw/openclaw/pull/171682)
- 审批 UI 查询去重：  
  [PR #178217](https://github.com/openclaw/openclaw/pull/178217)
- iOS endpoint 校验：  
  [PR #181474](https://github.com/openclaw/openclaw/pull/181474)
- session archive 重试上限：  
  [PR #181476](https://github.com/openclaw/openclaw/pull/181476)
- usage 页面损坏数据隔离：  
  [PR #180784](https://github.com/openclaw/openclaw/pull/180784)
- 流式输出性能优化：  
  [PR #180775](https://github.com/openclaw/openclaw/pull/180775)

不过，涉及会话持久化、权限边界和跨平台兼容的 PR 合并风险较高，仍需等待完整测试和迁移说明。

---

## 7. 用户反馈摘要

### 7.1 真实高频使用痛点

#### Gateway 启动和运行不够稳定

用户最强烈的反馈不是单点功能缺失，而是 Gateway 经常出现：

- 启动需要数百秒；
- 控制请求阻塞数分钟；
- Windows 睡眠恢复后连接失败；
- SQLite WAL 长期无法 checkpoint；
- 子进程残留并阻塞重启。

这些问题直接破坏智能体作为长期运行服务的核心体验。

#### 插件体系存在明显性能和资源泄漏

大型插件捕获可能阻塞事件循环，插件加载又可能重复编译 SDK 依赖。`plugin-captures` 临时目录还会持续增长，形成磁盘泄漏。用户希望插件机制具备：

- 有界耗时；
- 可中断；
- 可恢复；
- 自动清理；
- 明确的资源隔离。

#### 会话状态不可靠

多个 Issue 反映出：

- session reset 可能成功但没有新会话窗口；
- 崩溃恢复后 Agent 永久不可用；
- `ask_user` 请求无法投递，session 无限挂起；
- 子 Agent 完成后 runtime generation 失效；
- `provenance_rejected` 可能让已完成任务丢失最终答案；
- WebChat 可能重复显示或静默吞掉回复。

这些问题的共同影响是：**用户无法确信任务是否真正执行、消息是否真正送达、状态是否真正持久化。**

### 7.2 用户对自动化的期待

用户希望 OpenClaw 不仅能回答问题，还能：

- 在后台可靠运行；
- 定时触发任务；
- 在重启后恢复；
- 将结果发送到 Telegram、WhatsApp、配对节点或移动端；
- 在成本超限时自动阻断；
- 通过持久化问题与异步 continuation 完成长流程。

这表明 OpenClaw 的目标用户正在从“尝试聊天机器人”转向“部署个人 AI 自动化系统”。

### 7.3 移动端和跨平台体验仍有缺口

用户反馈包括：

- Android 键盘弹出后聊天内容被遮挡；
- iOS 手工配置 Gateway 时 Host 字段校验不清晰；
- macOS SecretRef token 传递异常；
- Windows 更新和计划任务服务启动失败；
- Linux ARM64 官方构建仍缺失。

跨平台支持目前仍是明显短板，尤其是 Windows 和移动端。

### 7.4 满意度与主要不满

**相对积极方面：**

- 项目更新速度快；
- 功能覆盖广，插件和渠道扩展能力强；
- 社区问题描述详细，通常包含复现步骤、环境和日志；
- Web UI、会话恢复、测试性能和可访问性持续有人维护；
- v2026.10.6 主动提升 Node.js 安全基线，体现出安全响应。

**主要不满意方面：**

- 高优先级问题数量较多；
- 一些 Issue 虽标记 `needs-maintainer-review`、`needs-security-review` 或 `needs-live-repro`，但缺少明确 owner 和时间表；
- 版本升级后出现明显性能回归；
- 核心数据库、进程生命周期和任务恢复行为不够可预测；
- 某些功能在文档中提前出现，但尚未进入正式版本。

---

## 8. 待处理积压

### 8.1 长期高优先级 Issue

以下问题需要维护者明确责任人和修复计划：

1. **插件捕获阻塞 Gateway**  
   [Issue #160959](https://github.com/openclaw/openclaw/issues/160959)  
   P0，直接影响 Gateway 可用性。

2. **SQLite WAL checkpoint 长期阻塞**  
   [Issue #164294](https://github.com/openclaw/openclaw/issues/164294)  
   可能演变为数据库膨胀和恢复困难。

3. **Windows 启动性能回归**  
   [Issue #168955](https://github.com/openclaw/openclaw/issues/168955)  
   需要提供 2026.10.6 是否已修复的明确结论。

4. **Gateway 控制请求数分钟级阻塞**  
   [Issue #138042](https://github.com/openclaw/openclaw/issues/138042)  
   影响健康检查、控制面和聊天历史查询。

5. **triage repair 子进程残留**  
   [Issue #156712](https://github.com/openclaw/openclaw/issues/156712)  
   可能导致 lifecycle lock 无法释放。

6. **订阅认证 billing cooldown**  
   [Issue #115642](https://github.com/openclaw/openclaw/issues/115642)  
   需要明确 cooldown TTL、探针恢复和手动重置机制。

7. **安全边界相关审批 scope 问题**  
   [Issue #159787](https://github.com/openclaw/openclaw/issues/159787)  
   需要 security review，避免简单扩大权限范围。

8. **egress proxy 凭据替换不稳定**  
   [Issue #166137](https://github.com/openclaw/openclaw/issues/166137)  
   涉及潜在凭据泄漏和跨运行状态污染，应优先完成安全复现。

### 8.2 长期未闭环的 PR

以下 PR 当前仍开放且涉及较大改动，建议关注合并状态和 review 阻塞原因：

- [PR #168917](https://github.com/openclaw/openclaw/pull/168917)：问题状态持久化，涉及 schema、Gateway 重启和权限边界。
- [PR #171682](https://github.com/openclaw/openclaw/pull/171682)：问题 continuation 和启动恢复，需重点验证崩溃恢复。
- [PR #171710](https://github.com/openclaw/openclaw/pull/171710)：问题后续结果 UI，依赖前置存储与执行能力。
- [PR #173708](https://github.com/openclaw/openclaw/pull/173708)：按 Markdown 标题读取 memory sections，需确认兼容性和文档边界。
- [PR #180785](https://github.com/openclaw/openclaw/pull/180785)：Worker 中断任务恢复，涉及执行安全和状态一致性。
- [PR #181355](https://github.com/openclaw/openclaw/pull/181355)：Web UI 首屏性能优化，需确保延迟加载不会引入回归。
- [PR #181449](https://github.com/openclaw/openclaw/pull/181449)：未知 active requester 时保留 steering input，需重点验证身份边界。
- [PR #181463](https://github.com/openclaw/openclaw/pull/181463)：插件接口收敛，影响多个插件和渠道，建议完整回归。

### 8.3 维护优先级建议

#### 立即处理

- 插件捕获阻塞；
- SQLite WAL checkpoint；
- Windows 启动回归；
- Gateway 控制请求阻塞；
- triage 进程残留；
- egress proxy 凭据替换问题。

#### 短期处理

- session 崩溃恢复；
- `ask_user` Telegram 投递；
- 子 Agent runtime generation；
- Codex 最终答案丢失；
- 插件临时目录清理；
- Windows 自动更新和服务启动。

#### 下一版本规划

- Agent 级成本预算；
- durable question continuation；
- 内置浏览器能力；
- paired node 通知；
- Linux ARM64 构建；
- Control UI 上传限制配置化。

---

## 总体结论

OpenClaw 当前处于 **“高功能密度、高开发吞吐、高稳定性压力”** 阶段。新版本和大量 PR 显示项目仍在快速推进，问题持久化、异步任务恢复、移动端体验、Web UI 性能和插件生态均有实质投入。

但从用户反馈看，当前最大的风险并非缺少功能，而是核心运行基础还不够稳定：

- Gateway 是否能及时响应；
- 会话和消息是否会可靠持久化；
- 崩溃后是否能够自动恢复；
- 多 Agent 和插件是否会耗尽资源；
- 权限与凭据边界是否稳定；
- 新版本是否保持跨平台性能。

因此，当前项目健康度可评为：

> **开发健康度：良好；发布稳定性：中低；社区活跃度：极高；生产可用性：取决于部署规模，Windows、多 Agent 和大型插件场景风险较高。**

维护者下一步应优先将高优先级 Issue 与已有修复 PR 建立明确关联，并尽快公布 `v2026.10.6` 对性能回归、插件阻塞、SQLite 和进程恢复问题的修复状态。

---

## 横向生态对比

# 个人 AI 助手 / 自主智能体开源生态横向分析报告

**数据基准：2026-10-23 过去 24 小时 GitHub 更新**

## 1. 生态全景

生态正从“聊天式 AI 助手”快速转向可长期运行、可恢复、可扩展的自主 Agent 平台，核心竞争点已转向 **会话持久化、异步任务闭环、插件隔离、跨渠道一致性和成本治理**。OpenClaw、Hermes Agent、QwenPaw 与 OpenHuman 处于高强度架构演进期，NanoBot、PicoClaw、LobsterAI 和 IronClaw 则分别在 WebUI、Provider 接入、桌面端集成和依赖安全治理上推进。

整体呈现“开发活跃、发布分化、稳定性承压”的特征：OpenClaw、Hermes、QwenPaw 和 OpenHuman 的 Issue/PR 规模明显领先，但高优先级 Bug、合并积压和跨平台回归也最集中；部分项目则进入质量巩固阶段。需要特别关注的是，**Agent 的主要瓶颈已不是模型调用能力，而是消息是否送达、任务是否可恢复、状态是否可信、权限是否稳定以及资源是否可控**。

---

## 2. 各项目活跃度对比

| 项目 | Issues 更新 | PR 更新 | Release | 主要活动特征 | 健康度评估 |
|---|---:|---:|---|---|---|
| **OpenClaw** | 500 | 500 | `v2026.10.6` | Issue/PR 吞吐极高，覆盖会话恢复、插件性能、Gateway、安全和 Web UI | **活跃但承压** |
| **Hermes Agent** | 50 | 50 | `v0.22.5` | Gateway、Session Ownership、Desktop、异步委派和 WebSocket 问题密集 | **高活跃、短期稳定性承压** |
| **QwenPaw** | 21 | 50 | `v2.2.2.post1` | 渠道插件化、记忆能力、容器部署、升级回归与安全维护 | **高活跃，架构与发布压力偏高** |
| **OpenHuman** | 17 | 50 | 无 | TinySecurity、Agent/存储/推理拆分、嵌入式 Runtime 和凭据治理 | **高活跃但合并积压明显** |
| **NanoBot** | 12 | 36 | 无 | WebUI 状态一致性、搜索错误语义、会话压缩和 Provider 适配 | **健康度良好，处于收敛阶段** |
| **LobsterAI** | 0 | 10 | 无 | 图像编辑器、媒体确认恢复、Cowork 和 OpenClaw 插件持久化 | **开发活跃，依赖历史 PR 清理** |
| **PicoClaw** | 0 | 10 | 无 | Gemini 兼容性、Provider 扩展、工具反馈和依赖升级 | **中等偏低，维护响应风险较高** |
| **IronClaw** | 2 | 6 | 无 | DOMPurify、Storybook、Vite、certifi 等依赖维护 | **中等偏稳定，创新交付有限** |

### 数据观察

- **OpenClaw** 的 Issue 和 PR 更新量约为其他头部项目的 10 倍级，是当前生态中最活跃、也最具系统复杂度的项目。
- **Hermes、QwenPaw、OpenHuman** 形成第二梯队，均有 50 条左右 PR 更新，但分别暴露出 Gateway、渠道和嵌入式运行时问题。
- **NanoBot** 规模较小，但 Issue 关闭率较高，工程收敛效率优于部分大型项目。
- **PicoClaw、IronClaw、LobsterAI** 今日没有 Issue 更新或版本发布，主要体现为已有 PR 的维护和状态变化。

---

## 3. OpenClaw 在生态中的定位

### 3.1 生态位置

OpenClaw 是当前生态中最接近**跨设备、跨渠道、长期运行的个人 AI 操作平台**的项目，而不仅是 Agent 框架或聊天客户端。

其能力边界覆盖：

- Gateway 与多 Agent 编排；
- Web UI、移动端和配对节点；
- 插件与外部工具；
- 会话持久化和 continuation；
- 浏览器自动化需求；
- 审批、权限和 egress 安全；
- 模型调用、成本统计和自动任务。

### 3.2 主要优势

#### （1）功能和生态宽度领先

OpenClaw 同时覆盖个人助手所需的多个层面：

- **交互层：** Web UI、iOS、Android、配对节点；
- **执行层：** Gateway、Worker、Agent、插件；
- **数据层：** SQLite、会话归档、记忆和任务状态；
- **安全层：** 审批、权限边界、凭据和网络出口；
- **运维层：** Docker、CI、版本发布和跨平台部署。

相比之下：

- NanoBot 更偏轻量 Agent Runtime 和 WebUI；
- PicoClaw 更强调 Provider/Channel 的轻量接入；
- LobsterAI 更偏桌面端 Cowork 和媒体生产体验；
- IronClaw 当前以基础工具链和依赖维护为主。

#### （2）社区规模和吞吐最强

过去 24 小时 OpenClaw 记录：

- 500 条 Issue 更新；
- 500 条 PR 更新；
- 226 个 PR 等待合并；
- 274 个 PR 已合并或关闭。

这表明 OpenClaw 拥有更大的贡献者、测试者和问题反馈规模，也更容易形成复杂功能并行开发的生态。

#### （3）技术路线更偏“平台化”

OpenClaw 的路线是：

> Gateway 统一编排 + 多端接入 + 插件扩展 + 会话持久化 + 任务恢复 + 安全治理

这与 Hermes 的统一 Gateway Runtime、QwenPaw 的渠道插件化存在方向上的趋同，但 OpenClaw 的产品边界更完整，已经覆盖从个人聊天到自动化任务、跨设备控制和生态扩展的完整链路。

### 3.3 主要短板

- 复杂度和维护面快速扩大；
- Windows、macOS、多 Agent 和大型插件场景稳定性不足；
- Gateway 阻塞、SQLite WAL、进程恢复和会话交付仍是核心风险；
- `v2026.10.6` 的 Node.js 安全基线升级带来兼容性要求；
- 高优先级 Issue 数量多，但部分问题缺少明确 owner、修复 PR 和时间表。

**结论：**  
OpenClaw 是生态中最接近“个人 AI 操作系统”的项目，但当前仍处于“平台能力已形成、生产可靠性不足”的阶段。

---

## 4. 共同关注的技术方向

### 4.1 会话持久化与异步任务恢复

**涉及项目：** OpenClaw、Hermes Agent、QwenPaw、NanoBot、LobsterAI

共同诉求：

- Gateway 或进程重启后恢复会话；
- 避免后台任务完成后父 Agent 不恢复；
- 问题、答案和 continuation 状态持久化；
- 防止消息、工具结果和最终回复静默丢失；
- 保证 session、runtime、profile 和 UI 状态一致。

典型问题：

- OpenClaw：SQLite WAL checkpoint 阻塞、会话恢复异常；
- Hermes：Discord 委派完成但父任务不恢复；
- QwenPaw：媒体请求超限后会话永久卡死；
- NanoBot：空闲压缩与直接调用并发；
- LobsterAI：hooks 在重启后丢失。

**趋势判断：**  
“Agent 能否可靠完成一个长流程”正在取代“Agent 能否完成一次调用”，成为核心产品指标。

---

### 4.2 插件化和故障隔离

**涉及项目：** OpenClaw、QwenPaw、PicoClaw、LobsterAI、OpenHuman

主要方向：

- 插件化渠道和工具；
- 通过子进程或独立 runtime 隔离故障；
- 避免插件加载阻塞主 Gateway；
- 限制插件资源和执行时间；
- 统一插件配置、权限和生命周期。

QwenPaw 的渠道拆分为子进程插件、OpenHuman 的 TinySecurity 统一授权、PicoClaw 的 Provider 扩展，都说明插件体系正在从“简单加载模块”转向“隔离、治理和可观测”。

---

### 4.3 跨渠道一致性

**涉及项目：** QwenPaw、Hermes Agent、OpenClaw、NanoBot

主要痛点：

- 引用回复中的上下文无法传递；
- `/stop` 等控制命令在部分渠道丢失；
- 审批请求未发送到实际聊天渠道；
- Telegram、DingTalk、QQ、飞书、Discord 等行为不一致；
- 长任务完成后的最终消息可能丢失。

这表明渠道适配正在从“能否发消息”转向：

> 消息语义、引用关系、工具结果、控制命令、审批和错误状态是否统一。

---

### 4.4 Provider 与模型生态适配

**涉及项目：** OpenClaw、QwenPaw、PicoClaw、NanoBot、Hermes Agent、IronClaw

共同需求：

- 支持更多 OpenAI-compatible Gateway；
- 适配 Gemini、Anthropic、MiniMax、DeepSeek 等模型；
- 统一 reasoning effort；
- 处理 Provider-specific 字段；
- 正确统计 token 和成本；
- Provider fallback 时不丢失用户配置。

PicoClaw 的 Standard Compute Provider、NanoBot 的 MiniMax 适配、Hermes 的跨 Provider reasoning effort 保留，均体现出 Provider 层的碎片化正在成为生态普遍问题。

---

### 4.5 安全、凭据和权限治理

**涉及项目：** OpenClaw、OpenHuman、Hermes Agent、QwenPaw、IronClaw、LobsterAI

重点包括：

- 密钥和 token 生命周期管理；
- 审批 scope；
- egress proxy 凭据替换；
- API key 错误信息脱敏；
- keychain 读取失败保护；
- shell classifier 和 sandbox grant；
- 第三方插件和 MCP 权限声明；
- CA 信任链和依赖安全升级。

IronClaw 更新 DOMPurify、QwenPaw 修复 emSign CA、OpenHuman 推进 TinySecurity，均说明安全治理已从附加要求变成 Agent 平台的核心基础设施。

---

### 4.6 成本和资源可观测性

**涉及项目：** OpenClaw、NanoBot、QwenPaw、Hermes Agent

需求包括：

- Token 和成本统计；
- 按 Agent、模型、Provider、会话统计；
- 调用前预算阻断；
- 上下文占用和压缩原因；
- 媒体重复上传和请求体大小控制；
- 多 Agent 资源上限。

OpenClaw 已出现 Agent 级成本预算需求，NanoBot 多次收到 token/cost tracking 请求，QwenPaw 的媒体历史重复上传问题则直接导致请求体膨胀和会话卡死。

---

## 5. 差异化定位分析

| 项目 | 功能侧重 | 目标用户 | 技术架构特征 |
|---|---|---|---|
| **OpenClaw** | 全渠道个人 AI 操作平台、插件、任务编排、跨设备 | 高级个人用户、自动化重度用户、插件/Agent 开发者 | Gateway 中心化、多端接入、插件和持久化任务 |
| **Hermes Agent** | 多 Profile、委派、跨 Gateway Bot 协作、CLI/Desktop/Cloud | 多模型、多 Profile 和复杂 Agent 编排用户 | 统一 Gateway Runtime、Session Ownership、后台委派 |
| **QwenPaw** | 渠道连接器、Hub、Cowork、记忆和内容生产 | 个人用户、团队和需要多渠道/创作工作流的用户 | 主进程 + 渠道插件/子进程，PowerContext 记忆 |
| **OpenHuman** | 安全运行时、嵌入式 Agent、MCP、沙箱和存储基础设施 | 开发者、平台集成方和安全敏感部署 | Rust/多层 tiny* 模块、TinySecurity、独立运行时 |
| **NanoBot** | 轻量 Agent Runtime、WebUI、搜索和 Provider 接入 | 个人开发者和快速部署用户 | 轻量 Python 生态、WebUI、Gateway invalidation |
| **LobsterAI** | 桌面 Cowork、媒体生成、编辑器和 OpenClaw 集成 | 桌面端个人用户和内容创作者 | Electron/renderer/main/OpenClaw 插件协作 |
| **PicoClaw** | Provider、Channel 和工具反馈 | 轻量部署、多 Provider 用户 | Go/模块化 Provider 和配置驱动 |
| **IronClaw** | 基础 Agent 平台与前端工程维护 | 现有部署用户和贡献者 | JavaScript/TypeScript 工具链、Docker 和前端组件体系 |

### 关键差异

1. **OpenClaw 最强调平台完整度**，其他项目更多聚焦某一层。
2. **Hermes 最强调 Agent 运行时和多 Profile 编排**，OpenClaw 更强调多端和插件生态。
3. **QwenPaw 兼具个人助手与团队 Hub 能力**，渠道插件化和全局 Skill/MCP 是其明显方向。
4. **OpenHuman 更偏底层基础设施和安全模块化**，适合作为嵌入式 Runtime 或安全敏感系统基础。
5. **NanoBot 的优势是轻量和 WebUI 迭代速度**，适合追求快速部署的开发者。
6. **PicoClaw 和 IronClaw 更接近轻量集成项目或稳定维护型项目**，创新广度和社区规模相对有限。

---

## 6. 社区热度与成熟度

### 6.1 高活跃度、架构扩张阶段

#### OpenClaw

- 社区规模最大；
- 功能覆盖最广；
- PR 和 Issue 数量极高；
- 正在同时推进持久化任务、插件、移动端、浏览器和安全能力。

**判断：** 生态领导者，但处于高复杂度平台化阶段。

#### Hermes Agent

- 50 条 Issue 和 50 条 PR；
- Gateway、Profile、Desktop、委派和 WebSocket 问题集中出现；
- 版本发布频繁，但发布后回归较多。

**判断：** 高活跃架构整合期，稳定性是主要瓶颈。

#### QwenPaw

- 50 条 PR、21 条 Issue；
- 渠道插件化、PowerContext、Hub 和 Creator 并行；
- 安全维护版本发布积极，但升级回归需要加强。

**判断：** 产品扩张速度快，正在从个人助手向团队平台过渡。

#### OpenHuman

- 50 条 PR，17 条 Issue；
- 重点集中在 TinySecurity、Agent 拆分、存储 runtime 和嵌入式 Runtime；
- PR 合并吞吐偏低。

**判断：** 技术架构重构期，安全和集成风险较高。

### 6.2 高频迭代、质量收敛阶段

#### NanoBot

- 12 条 Issue、36 条 PR；
- Issue 关闭较多；
- WebUI、搜索和会话压缩问题有明确修复方向。

**判断：** 活跃且相对健康，适合快速演进。

#### LobsterAI

- 10 个 PR，9 个已合并或关闭；
- 主要集中在桌面端稳定性和 Cowork 体验；
- 多个 stale PR 暴露历史积压和清理压力。

**判断：** 产品打磨阶段，需改善历史 PR 和用户反馈闭环。

### 6.3 维护承压或创新放缓阶段

#### PicoClaw

- 10 个 PR，9 个开放，8 个标记为 stale；
- 无 Issue 更新、无版本发布；
- Gemini 兼容性和核心依赖升级尚未进入主线。

**判断：** 维护响应风险较高，应优先处理兼容性和依赖积压。

#### IronClaw

- 6 个 PR，主要是 Dependabot；
- 无明显功能合入；
- DOMPurify 安全升级仍待处理。

**判断：** 稳定维护阶段，创新活跃度有限，但安全维护仍需加强。

---

## 7. 值得关注的趋势信号

### 7.1 Agent 产品的核心指标正在变化

过去重点关注：

- 模型是否聪明；
- 工具是否能调用；
- WebUI 是否可用。

现在越来越关注：

- 任务是否最终完成；
- 重启后是否恢复；
- 消息是否可靠送达；
- 状态是否与后端一致；
- 资源是否可控；
- 权限和凭据是否安全。

这意味着 Agent 评估应加入：

- 任务完成率；
- 消息投递率；
- 状态一致性；
- 恢复成功率；
- 平均恢复时间；
- 重复执行率；
- 单任务资源成本。

---

### 7.2 “Gateway / Runtime 统一化”成为架构主线

OpenClaw、Hermes、QwenPaw 都在强化统一运行时、Gateway 或插件边界，但统一化也带来了新的复杂度：

- Session Ownership 冲突；
- 旧进程抢占；
- WebSocket 重连；
- 多 Profile 路由；
- 子任务唤醒失败；
- Gateway 重启后无实例。

对开发者的启示是：**统一入口不等于统一状态实现**。必须同时设计：

- 唯一 owner；
- 状态机；
- 持久化队列；
- 心跳和租约；
- 断线恢复；
- 幂等和去重；
- 迁移兼容层。

---

### 7.3 插件生态进入“隔离与治理”阶段

插件不再只是加载工具，而是需要明确：

- 权限；
- 资源限制；
- 依赖；
- 生命周期；
- 版本兼容；
- 错误隔离；
- 配置持久化；
- 日志和审计。

OpenClaw 的插件阻塞、PicoClaw 的 Provider 扩展、QwenPaw 的子进程渠道、OpenHuman 的 TinySecurity 迁移，均说明插件化已经进入平台治理阶段。

---

### 7.4 渠道能力必须统一消息语义

Telegram、Discord、QQ、飞书、DingTalk 等渠道不只是发送接口不同，还涉及：

- 引用消息；
- 文件和媒体；
- 控制命令；
- 审批；
- 线程；
- 工具结果；
- 长任务状态；
- 最终投递失败。

对 Agent 开发者而言，建议建立统一的跨渠道事件模型，而不是针对每个渠道分别拼接字符串。

---

### 7.5 成本治理将从可观测性走向强制控制

生态已经出现两类需求：

1. **记录成本：** Token、模型、Provider、会话级使用量；
2. **阻止成本失控：** Agent/会话/模型预算、调用前阻断、异常频率限制。

对于个人助手和自动化任务，成本控制最终会像数据库配额一样成为默认能力，而不是高级功能。

---

### 7.6 安全边界需要“失败安全”而不是“失败开放”

多个项目都暴露了类似问题：

- keychain 读取失败被当作空配置；
- shell classifier 重构后授权行为改变；
- sandbox grant 可能包含凭据目录；
- Provider 错误可能回显 API key；
- 审批 scope 或 Profile 继承错误；
- egress proxy 凭据替换不稳定。

这些项目应遵循：

> 依赖不可用、认证失败、权限不明、状态不确定时，默认拒绝并显式报错，而不是静默降级或继续执行。

---

## 结论与决策建议

### 对技术决策者

- 需要完整个人 AI 操作平台：优先关注 **OpenClaw**；
- 需要多 Profile、委派和复杂 Agent 编排：重点评估 **Hermes Agent**；
- 需要渠道生态、团队 Hub 和创作工作流：关注 **QwenPaw**；
- 需要嵌入式 Runtime、安全和沙箱基础设施：关注 **OpenHuman**；
- 需要轻量 WebUI 和快速 Provider 接入：关注 **NanoBot**；
- 需要桌面 Cowork 和媒体工作流：关注 **LobsterAI**。

### 对 Agent 开发者

后续设计应优先投入：

1. 持久化任务状态机；
2. 幂等、恢复和消息确认；
3. Gateway/Plugin/Channel 的故障隔离；
4. 成本和资源预算；
5. 权限、凭据和审计；
6. 跨渠道统一事件模型；
7. 可复现的端到端稳定性测试。

**总体判断：**  
该生态已经进入“平台化和工程化竞争”阶段。OpenClaw 在规模和功能覆盖上领先，Hermes 在运行时和委派方向突出，QwenPaw 在渠道与团队化方面加速，OpenHuman 在安全基础设施上投入较深，NanoBot 保持轻量快速迭代。决定项目长期竞争力的，不将是功能数量，而是能否让 Agent 在复杂、长期、跨设备环境中**可靠地完成任务并交付结果**。

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目动态日报

**统计日期：2026-10-23**  
**数据范围：过去 24 小时 GitHub Issues / Pull Requests 更新**  
**项目活跃度：高**  
**数据来源：** [HKUDS/nanobot](https://github.com/HKUDS/nanobot)

---

## 1. 今日速览

过去 24 小时共记录 **12 条 Issue 更新、36 条 PR 更新**，其中 Issue 新开或活跃 **3 条、关闭 9 条**，PR 待合并 **15 条、已合并或关闭 21 条**。今日无新版本发布，但提交和审查活动较为集中，主要围绕 **WebUI 交互、Agent 会话压缩、搜索工具稳定性、Provider 兼容性和 CI 流程优化** 展开。

从状态变化看，Issue 关闭率较高，说明部分长期问题和短期缺陷得到集中处理；同时，搜索失败误报、空闲压缩误触发、WebUI 状态同步等问题仍在暴露新的边界场景。整体来看，项目处于**高并发开发和高频问题收敛阶段**，工程迭代活跃，但会话生命周期、WebUI 状态一致性和工具错误语义仍需要持续关注。

---

## 2. 版本发布

过去 24 小时**无新版本发布**，因此没有可报告的版本更新、破坏性变更或迁移事项。

---

## 3. 项目进展

### 3.1 搜索工具稳定性修复：多个并行方案收敛

围绕 DuckDuckGo `web_search` 将限流、反爬或聚合失败误报为 “No results found” 的问题，今日形成了多个修复 PR：

- [#6331](https://github.com/HKUDS/nanobot/pull/6331)：为 DuckDuckGo 增加退避重试，并区分限流拒绝与真正的空结果。
- [#6300](https://github.com/HKUDS/nanobot/pull/6300)：针对 DuckDuckGo 限流或反爬拒绝增加一次重试。
- [#6290](https://github.com/HKUDS/nanobot/pull/6290)：为 `DDGSException("No results found.")` 增加重试和指数退避。
- [#6409](https://github.com/HKUDS/nanobot/pull/6409)：将无法确认结果的 ddgs 异常报告为搜索服务不可用，避免将“不确定失败”伪装成“零结果”。

相关问题：

- [#6285 web_search (ddgs): ambiguous failures look like empty results](https://github.com/HKUDS/nanobot/issues/6285)

**进展评价：**  
该问题涉及搜索能力的可靠性，尤其影响同一轮对话中的连续搜索。多个 PR 同时出现，说明社区对该故障已有较高共识，但当前存在多个竞争性实现，合并前需要确认最终统一的重试次数、退避策略、错误分类和测试覆盖方案。

### 3.2 Provider 能力扩展：MiniMax M3.1 Flash

- [#6360 feat(providers): add MiniMax-M3.1-Flash and avoid reasoning_split=false](https://github.com/HKUDS/nanobot/pull/6360)

该 PR 已关闭，主要内容包括：

- 增加 `MiniMax-M3.1-Flash` 的内置模型元数据；
- 支持 `low`、`medium`、`high`、`xhigh`、`max` 等 reasoning effort；
- 默认使用 `max`；
- 支持文本和图片输入；
- 避免使用 `reasoning_split=false`。

**进展评价：**  
Provider 兼容性维护继续推进，说明模型生态适配仍是项目的重要方向。不过由于 PR 状态为 Closed，具体是已合并、被替代还是未采用，需要结合后续提交或发布记录进一步确认。

### 3.3 TUI 输入兼容性修复

- [#6025 fix(tui): submit prompts with Kitty keypad Enter](https://github.com/HKUDS/nanobot/pull/6025)

该 PR 已关闭，修复 Kitty 键盘协议中的 `kpenter` 未绑定普通提交行为的问题，并完成 TUI 回归测试。

**进展评价：**  
这是面向真实终端用户的兼容性改进，尤其影响 Kitty 终端环境中的交互体验。修复范围明确，测试结果较完整。

### 3.4 CI 与验收流程优化

今日关闭的 CI 相关 PR 包括：

- [#6395 ci: reuse isolated pip seeds and parallelize native acceptance](https://github.com/HKUDS/nanobot/pull/6395)
- [#6402 ci: isolate Test Suite runs by revision](https://github.com/HKUDS/nanobot/pull/6402)

其中：

- #6395 试图复用隔离的 pip 依赖缓存，并并行执行 native acceptance 测试；
- #6402 按 revision 隔离 Test Suite 运行，避免同一分支的新提交被旧提交的重跑任务取消。

此外，还有 WebUI 性能优化 PR：

- [#6403 perf(webui): animate segmented indicator without layout](https://github.com/HKUDS/nanobot/pull/6403)

**进展评价：**  
项目在测试隔离、CI 并行化和前端渲染成本方面持续投入。这些改动未必直接体现为新功能，但有助于提升合并效率和长期维护质量。

### 3.5 WebUI 功能持续增强

仍在开放中的重要 WebUI PR：

- [#6323 feat(webui): edit and resend messages in the same session](https://github.com/HKUDS/nanobot/pull/6323)  
  支持在当前会话中原地编辑并重新发送消息，避免创建重复会话。
- [#6256 feat(webui): add a compact composer workspace toolbar](https://github.com/HKUDS/nanobot/pull/6256)  
  为桌面端和移动端增加更紧凑的工作区及权限工具栏。
- [#6401 refactor(webui): replace idle polling with gateway invalidations](https://github.com/HKUDS/nanobot/pull/6401)  
  用 Gateway invalidation 替代 WebUI 持续轮询，目标是降低无效请求并改善状态更新及时性。
- [#6337 fix(webui): make task state backend-authoritative](https://github.com/HKUDS/nanobot/pull/6337)  
  解决页面刷新、重连或切换主题后，侧边栏与 Composer 对任务运行状态判断不一致的问题。

**进展评价：**  
WebUI 是当前最集中的产品改进方向之一，重点从“增加功能”逐步转向“统一状态模型、降低轮询开销、改善消息编辑体验”。这有助于提升 NanoBot 作为个人 AI 助手控制台的可信度。

---

## 4. 社区热点

> 提供的 PR 数据中评论数为 `undefined`，因此无法严格按评论数排名。以下优先列出今日更新频繁、讨论价值较高或被多个相关 Issue / PR 围绕的事项。

### 4.1 DuckDuckGo 搜索失败语义问题

- Issue：[ #6285](https://github.com/HKUDS/nanobot/issues/6285)
- PRs：[ #6331](https://github.com/HKUDS/nanobot/pull/6331)、[#6300](https://github.com/HKUDS/nanobot/pull/6300)、[#6290](https://github.com/HKUDS/nanobot/pull/6290)、[#6409](https://github.com/HKUDS/nanobot/pull/6409)

**热点诉求：**

- 搜索失败不能被显示成“没有结果”；
- 需要区分真实空结果、限流、反爬拒绝、网络错误和解析失败；
- 连续调用搜索工具时应具备基本重试和退避能力；
- 错误提示需要足够准确，便于 Agent 判断是否继续搜索。

**社区影响：**  
该问题直接影响 Agent 的工具调用可靠性，是今日最明显的热点之一。多个 PR 并行修复，说明社区对根因和最终行为尚未完全统一。

### 4.2 Agent 空闲压缩与直接调用并发问题

- Issue：[ #6214](https://github.com/HKUDS/nanobot/issues/6214)
- Issue：[ #6410](https://github.com/HKUDS/nanobot/issues/6410)
- PR：[ #6405](https://github.com/HKUDS/nanobot/pull/6405)
- 相关后续：[ #6221](https://github.com/HKUDS/nanobot/pull/6221)

**热点诉求：**

- `process_direct()` 执行期间不应被误判为空闲；
- 空闲压缩不能在长时间直接调用结束后立即执行；
- 需要等待新的 idle interval；
- 防止会话 checkpoint、压缩和正在执行的 turn 发生并发覆盖。

**社区影响：**  
这类问题涉及会话数据一致性，严重时可能造成运行中会话被归档或状态丢失，因此稳定性优先级高于一般体验问题。

### 4.3 WebUI 任务状态的一致性

- PR：[ #6337](https://github.com/HKUDS/nanobot/pull/6337)
- PR：[ #6401](https://github.com/HKUDS/nanobot/pull/6401)
- Issue：[ #6370](https://github.com/HKUDS/nanobot/issues/6370)

**热点诉求：**

- 任务是否仍在运行应由后端状态决定；
- 页面刷新、重连、切换 topic 后不能显示过期状态；
- 空闲压缩和上下文窗口压缩需要明确区分；
- WebUI 不应持续轮询大量未变化的数据。

**社区影响：**  
这些问题直接影响用户对“任务是否真的完成、上下文为何被压缩、Agent 是否仍在运行”的判断，是产品可信度的重要部分。

### 4.4 Group Chat 中“观察但不回复”

- Issue：[ #6079](https://github.com/HKUDS/nanobot/issues/6079)
- PR：[ #6289](https://github.com/HKUDS/nanobot/pull/6289)

**热点诉求：**

- 群聊中，Agent 可以读取并理解群消息；
- 只有被提及时才回复；
- 非相关消息不应直接丢弃，以便 Agent 保持上下文；
- 需要支持类似 `mention` 和 `listen` 的不同群组策略。

**社区影响：**  
这是从“被动响应机器人”向“具备群聊环境感知能力的 Agent”演进的重要信号。

---

## 5. Bug 与稳定性

以下按潜在影响程度排序。

### 严重：高优先级会话一致性与数据安全风险

#### 5.1 空闲压缩可能在直接调用运行期间执行

- Issue：[ #6214](https://github.com/HKUDS/nanobot/issues/6214)
- Issue：[ #6410](https://github.com/HKUDS/nanobot/issues/6410)
- 修复 PR：[ #6405](https://github.com/HKUDS/nanobot/pull/6405)

**问题：**

- `process_direct()` 不一定通过 `_pending_queues` 注册活动状态；
- 长任务可能仍被判断为空闲；
- 空闲压缩可能在任务执行中或任务刚结束时触发；
- 存在 checkpoint、transcript 和压缩结果互相覆盖的风险。

**状态：** 已有针对性修复 PR，Issue #6214 已关闭，但 #6410 在统计日仍开放，说明后续时序边界可能仍需补充验证。

#### 5.2 会话历史位于 Agent workspace 内

- Issue：[ #5278](https://github.com/HKUDS/nanobot/issues/5278)

**问题：**

- 会话历史从全局目录迁移到 `<workspace>/sessions/`；
- 当 workspace 被共享、备份、同步或暴露时，敏感对话内容可能扩大暴露范围；
- 工作区隔离与敏感数据隔离之间需要重新平衡。

**状态：** Issue 已关闭，但从安全角度看，建议确认当前存储路径、权限模型、迁移策略以及 workspace 共享时的数据保护措施。

### 中高：搜索工具错误分类错误

- Issue：[ #6285](https://github.com/HKUDS/nanobot/issues/6285)
- 修复 PR：[ #6331](https://github.com/HKUDS/nanobot/pull/6331)、[#6300](https://github.com/HKUDS/nanobot/pull/6300)、[#6290](https://github.com/HKUDS/nanobot/pull/6290)、[#6409](https://github.com/HKUDS/nanobot/pull/6409)

**问题：**

- ddgs 将多种异常统一包装为 `No results found`；
- 网络拒绝、限流、反爬和真正空结果无法区分；
- 连续搜索时容易出现全部失败；
- Agent 可能基于错误信息做出错误决策。

**状态：** 已有多个 fix PR，Issue 已关闭。维护者仍需确认最终合入方案及行为是否统一。

### 中：WebUI 状态同步与上下文压缩提示不准确

- PR：[ #6337](https://github.com/HKUDS/nanobot/pull/6337)
- Issue：[ #6370](https://github.com/HKUDS/nanobot/issues/6370)
- PR：[ #6401](https://github.com/HKUDS/nanobot/pull/6401)

**问题：**

- 刷新或重连后，UI 可能错误显示任务仍在运行或已经结束；
- “Context compacted” 无法说明是空闲压缩还是上下文窗口压力；
- 浏览器持续轮询增加无效请求；
- 前后端状态缺乏单一可信来源。

**状态：** 已有开放修复 PR，尚未全部合并。

### 中：iOS PWA 顶部显示异常

- Issue：[ #5772](https://github.com/HKUDS/nanobot/issues/5772)

**问题：**

- iOS PWA standalone 模式下顶部区域出现发白、半透明或模糊；
- 影响侧边栏入口、右侧控件和消息内容显示。

**状态：** Issue 已关闭，建议关注是否覆盖不同 iOS 版本和 standalone 模式。

### 低至中：WebUI 粘贴路径提示过于激进

- PR：[ #6408](https://github.com/HKUDS/nanobot/pull/6408)

**问题：**

- 用户仍在编辑或即将粘贴下一段内容时，临时路径探测会触发持久的 `file not found` 提示；
- 404 场景不应被视为需要立即告警的用户错误。

**状态：** 已有修复 PR，已关闭。

### 低：TUI Kitty `kpenter` 无法提交

- PR：[ #6025](https://github.com/HKUDS/nanobot/pull/6025)

**问题：**

- Kitty 键盘协议发送 `kpenter`；
- Composer 仅绑定普通 Enter，导致无法提交输入。

**状态：** 已有修复 PR，已关闭。

---

## 6. 功能请求与路线图信号

### 6.1 Token 使用量和成本统计

相关 Issues：

- [#2020 Feature Request: Simple usage logging for token/cost tracking](https://github.com/HKUDS/nanobot/issues/2020)
- [#1193 there is no token usage tracking code](https://github.com/hku ds/nanobot/issues/1193)
- [#2149 Feature Request: Persist API usage in messages for better compression estimation](https://github.com/HKUDS/nanobot/issues/2149)

**需求核心：**

- 记录 prompt、completion、reasoning 等 token 使用量；
- 估算或计算 API 成本；
- 将 usage metadata 持久化到消息或会话记录；
- 提高上下文压缩估算准确性；
- 支持自定义 Gateway 或按量计费 Provider 的可观测性。

**路线图判断：高概率纳入近期规划**

这一需求被多个 Issue 重复提出，且已经关闭的 #2020、#1193 和 #2149 表明社区关注度较高。它不仅面向个人用户，也适用于多 Agent、多 Provider 和团队部署场景。建议后续优先明确：

1. usage 数据的存储格式；
2. 不同 Provider 的 token 字段映射；
3. reasoning token 是否计入成本；
4. Gateway 不返回 usage 时的降级策略；
5. WebUI 是否提供按会话、模型和日期的统计视图。

### 6.2 DeepSeek Web Search 配置支持

- Issue：[ #6407 how to enable deepseek web_search tool?](https://github.com/HKUDS/nanobot/issues/6407)

**需求核心：**

- 用户希望调用 DeepSeek 官方 Web Search 能力；
- 当前不清楚 NanoBot 是否支持、如何配置以及是否需要额外 Provider 适配。

**路线图判断：中高概率纳入 Provider 适配或文档增强**

目前该 Issue 仍开放，且尚无明确 PR。更可能先以 Provider 能力声明、配置文档或工具适配的形式落地，而不是立即扩展核心 Agent 行为。

### 6.3 群聊“只监听、仅提及时回复”

- Issue：[ #6079](https://github.com/HKUDS/nanobot/issues/6079)
- PR：[ #6289](https://github.com/HKUDS/nanobot/pull/6289)

**路线图判断：高概率纳入近期版本**

PR 已提出 `listen` 策略，能够让 Agent 观察完整群聊上下文，同时只在被提及时回复。这类能力对 Matrix、群聊型个人助手和多 Agent 协作价值较高，预计会继续扩展到其他 Channel。

### 6.4 Subagent 控制平面

- Issue：[ #1006 Control plane MVP for subagents: list/kill commands](https://github.com/HKUDS/nanobot/issues/1006)

**需求核心：**

- 列出运行中的 subagent；
- 查看任务状态；
- 终止异常、失控或不再需要的 subagent；
- 为 spawn + callback 增加运维入口。

**路线图判断：中概率纳入后续架构规划**

虽然 Issue 较早期且已关闭，但其需求仍然适用于当前 Agent 扩展方向。随着并行 Agent 能力增强，list/kill/status 类控制面预计会成为必要基础设施。

### 6.5 WebUI 会话内编辑与重发

- PR：[ #6323](https://github.com/HKUDS/nanobot/pull/6323)

**路线图判断：中高概率进入 WebUI 下一批迭代**

该功能直接改善日常使用效率，用户无需为一次纠错创建新会话。实现还涉及消息截断、重建上下文和生成新回复，需关注历史数据兼容与并发任务状态。

### 6.6 后端权威的任务状态与 Gateway 推送

- PR：[ #6337](https://github.com/HKUDS/nanobot/pull/6337)
- PR：[ #6401](https://github.com/HKUDS/nanobot/pull/6401)

**路线图判断：高概率继续推进**

这两项改动共同指向 WebUI 架构收敛：以 Gateway/后端状态作为唯一事实来源，减少轮询和客户端推断。完成后将改善多标签页、重连、刷新和移动端场景的一致性。

---

## 7. 用户反馈摘要

### 7.1 用户对成本和 Token 可观测性需求明确

多个 Issue 指向同一痛点：用户使用自定义 Gateway 或付费 API 时，无法准确知道：

- 单轮消耗了多少 Token；
- 每次请求成本是多少；
- 上下文压缩估算是否准确；
- 不同 Provider 的 usage 是否能够统一记录。

这说明成本可观测性已经从“附加功能”变成个人 AI 助手的基础运营能力。

### 7.2 搜索失败时用户最在意的是“是否真的没有结果”

用户并不一定要求所有搜索失败都自动恢复，但明确希望 Agent 不要把服务不可用或被限流说成“没有搜索结果”。错误语义直接影响 Agent 后续是否重试、换关键词或向用户解释。

### 7.3 长任务状态和压缩时机需要更可靠

用户关注：

- Agent 是否仍在执行；
- 页面刷新后状态是否可信；
- 上下文何时被压缩；
- 压缩是否会影响当前任务；
- 后台自动压缩是否会与用户操作冲突。

尤其对于长时间读取文件、执行工具或运行 subagent 的场景，状态一致性比单纯 UI 刷新更重要。

### 7.4 群聊用户希望 Agent 具备“理解但不打扰”的能力

群聊场景中，Agent 不应对每条消息都回复，但需要保留对上下文的观察，以便在被提及时快速理解前文。这要求 Channel 层将“接收”“判断相关性”“处理任务”和“发送回复”拆开。

### 7.5 WebUI 的体验诉求趋向精细化

近期 WebUI Issue / PR 涉及：

- iOS PWA 显示；
- 粘贴路径时不应过早报错；
- 上下文压缩原因可视化；
- 会话内编辑重发；
- 紧凑型 Composer 工具栏；
- 后端权威任务状态；
- 取消高频空闲轮询。

整体反馈表明，用户对 WebUI 的期待已从“能正常使用”转向“跨设备、长时间运行和复杂任务下仍保持一致”。

---

## 8. 待处理积压

### 8.1 长时间开放的群聊策略需求

- [#6079 Allow agents to observe group messages without always replying](https://github.com/HKUDS/nanobot/issues/6079)
- 对应 PR：[ #6289](https://github.com/HKUDS/nanobot/pull/6289)

该问题创建于 2026-10-05，仍处于开放状态。当前已有实现方案，但需要维护者确认：

- 是否只支持 Matrix；
- `listen` 是否应推广到所有 Channel；
- 未被回复的消息保存多久；
- 群聊隐私、记忆和上下文隔离如何处理。

### 8.2 执行权限拒绝模式 PR 存在冲突

- [#5653 feat(exec): enforce user deny patterns in full access with case-insensitive matching](https://github.com/HKUDS/nanobot/pull/5653)

该 PR 自 2026-09-04 起开放，当前标记为 conflict。它涉及 Full Access 模式下的安全边界，建议优先处理：

- `denyPatterns` 是否必须在所有权限模式下生效；
- 大小写不敏感匹配的语义；
- shell、Windows PowerShell 和不同平台命令的统一防护；
- 合并冲突解决后的回归测试。

### 8.3 WebUI 设置保存期间编辑丢失

- [#6043 fix(webui): preserve edits made while settings are saving](https://github.com/HKUDS/nanobot/pull/6043)

该 PR 自 2026-10-04 起开放，并存在冲突，涉及 Provider、Preset 和 Capability 编辑在保存响应返回后被旧数据覆盖的问题。建议在处理 WebUI 状态一致性时一并纳入。

### 8.4 DeepSeek Web Search 使用路径不清晰

- [#6407 how to enable deepseek web_search tool?](https://github.com/HKUDS/nanobot/issues/6407)

这是一个新开放 Issue，当前缺乏明确实现 PR。即使暂时不支持内置接入，也应补充：

- 当前是否支持；
- 需要何种配置；
- 使用 DeepSeek Search API 的限制；
- 与现有 `web_search` 工具的兼容方式。

### 8.5 空闲压缩时序问题仍需继续观察

- [#6410 Idle compaction can run immediately after a long direct turn without a fresh idle interval](https://github.com/HKUDS/nanobot/issues/6410)
- 修复 PR：[ #6405](https://github.com/HKUDS/nanobot/pull/6405)

虽然 #6214 已关闭，但 #6410 在今日重新暴露出新的时序边界。建议在修复合并后补充：

- 长 `process_direct()` 的回归测试；
- 压缩候选选择与执行之间的时间窗口测试；
- 多线程、API server、SDK、CLI 三种入口的覆盖；
- 任务完成、空闲计时器和压缩调度之间的状态转换测试。

---

## 总体健康度评估

| 维度 | 评价 | 说明 |
|---|---|---|
| 开发活跃度 | 高 | 24 小时内 36 条 PR 更新、12 条 Issue 更新 |
| 问题收敛能力 | 较高 | 9 条 Issue 关闭，多个稳定性问题已有修复方案 |
| 功能迭代能力 | 高 | WebUI、Provider、Channel、Agent 工具均有持续开发 |
| 稳定性风险 | 中等偏高 | 会话压缩并发、WebUI 状态同步、搜索错误语义仍有关键边界 |
| 社区需求清晰度 | 高 | Token 成本、群聊监听、控制平面等需求重复出现 |
| 发布节奏 | 稳定 | 今日无版本发布，当前以持续集成和 PR 收敛为主 |

**结论：**  
NanoBot 当前处于高强度迭代期，功能覆盖面和工程响应速度都较好，尤其在 WebUI 和 Provider 生态方面推进明显。项目健康度整体良好，但下一阶段应优先巩固三类基础能力：**会话生命周期与并发一致性、工具错误语义、WebUI 后端权威状态**。这些改进将直接决定 NanoBot 能否从“可用的个人 AI Agent”进一步发展为适合长时间运行、多渠道接入和多 Agent 协作的稳定平台。

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目动态日报

**日期：2026-10-23**  
**数据范围：过去 24 小时 GitHub 更新**  
**项目健康度：中等偏低，维护响应风险较高**

## 1. 今日速览

过去 24 小时 PicoClaw **没有新增或活跃 Issue 更新**，也没有发布新版本。项目共有 **10 个 PR 更新**，其中 **9 个仍待合并、1 个已关闭**，开发重点集中在 Provider 扩展、工具调用稳定性、Web 配置能力以及依赖升级。当前更新的 PR 中有 **8 个被标记为 `stale`**，其中多个依赖升级和新功能提交距创建时间已超过一周，表明项目近期存在维护响应不足或变更推进放缓的情况。整体来看，项目技术活动并未停滞，但在缺乏 Issue 讨论、版本发布和 PR 及时跟进的情况下，暂不宜评估为高健康度。

---

## 3. 项目进展

过去 24 小时没有新的已合并 PR，但有 **1 个重要 PR 被关闭**。

### 已关闭 PR

- [#1227 feat(qq): qq channel supports directly pushing local multimedia files](https://github.com/sipeed/picoclaw/pull/1227)  
  - **状态：CLOSED**
  - **方向：QQ Channel 增强**
  - **内容：** 支持直接向 QQ Channel 推送本地图片、文件等多媒体资源，无需依赖外部图床或文件托管服务。
  - **评价：** 该功能有助于改善 QQ 场景下的文件发送体验，降低部署图床和对象存储的依赖；但目前没有进一步说明关闭原因、替代方案或是否已有后续实现，因此无法确认功能已进入主线。

### 当前开放的主要功能与修复 PR

- [#3428 fix(openai_compat): handle Gemini thought_signature](https://github.com/sipeed/picoclaw/pull/3428)  
  - 修复 Gemini 3 经由 OpenAI-compatible 接口进行多轮工具调用时，因缺少 `thought_signature` 导致返回 `400 INVALID_ARGUMENT` 的问题。
  - 这是一个直接影响 Gemini 工具调用稳定性的兼容性修复，优先级较高。
  - 当前仍为 OPEN，且标记为 `stale`。

- [#3429 feat: allow hiding tool feedback arguments](https://github.com/sipeed/picoclaw/pull/3429)  
  - 新增 `agents.defaults.tool_feedback.hide_args` 配置。
  - 在保留工具名称和解释信息的同时，隐藏序列化参数，改善工具调用反馈的可读性与隐私暴露问题。
  - 已包含配置及测试相关变更，当前仍为 OPEN。

- [#3430 feat(web): expose hidden tool feedback args setting](https://github.com/sipeed/picoclaw/pull/3430)  
  - 为上述隐藏工具参数的配置增加 Web UI 开关、英文标签、帮助文本和配置保存能力。
  - 与 [#3429](https://github.com/sipeed/picoclaw/pull/3429) 配套，属于同一能力的 Web 管理界面完善。

- [#3431 feat(provider): add Standard Compute provider](https://github.com/sipeed/picoclaw/pull/3431)  
  - 新增 `standardcompute` OpenAI-compatible Provider。
  - 目标是为多个模型供应商提供统一网关和单密钥接入方式。
  - 当前仍为 OPEN，标记为 `stale`，需关注其维护状态和后续配置文档。

### 依赖更新

以下 Dependabot PR 均仍处于 OPEN 状态，且被标记为 `stale`：

- [#3436 bump go.mau.fi/util from 0.9.8 to 0.10.1](https://github.com/sipeed/picoclaw/pull/3436)
- [#3435 bump github.com/Azure/azure-sdk-for-go/sdk/azidentity from 1.14.0 to 1.14.1](https://github.com/sipeed/picoclaw/pull/3435)
- [#3434 bump github.com/adhocore/gronx from 1.20.0 to 1.20.5](https://github.com/sipeed/picoclaw/pull/3434)
- [#3433 bump golang.org/x/crypto from 0.53.0 to 0.58.0](https://github.com/sipeed/picoclaw/pull/3433)
- [#3432 bump github.com/anthropics/anthropic-sdk-go from 1.55.1 to 1.80.0](https://github.com/sipeed/picoclaw/pull/3432)

其中：

- `golang.org/x/crypto` 和 Anthropic SDK 属于安全、兼容性或核心 Provider 依赖，建议优先评估。
- Azure SDK、`go.mau.fi/util` 和 `gronx` 更新应结合测试结果决定是否合并。
- 多个依赖 PR 同时长期停留，可能导致依赖版本分叉和安全修复延迟落地。

**进展判断：**  
今日项目没有代码合并，实质推进主要体现为已有 PR 的状态更新；功能方向较清晰，但维护节奏偏慢，尤其是兼容性修复和依赖升级尚未进入主线。

---

## 4. 社区热点

过去 24 小时：

- **Issue 更新：0**
- **PR 更新：10**
- **评论数最高：暂无**
- **点赞数最高：暂无**
- **最值得关注的讨论对象：** 因所有 PR 均无评论和点赞数据，只能依据功能影响范围和优先级判断。

### 重点关注

1. [#3428 Gemini thought_signature 修复](https://github.com/sipeed/picoclaw/pull/3428)  
   - 涉及 Gemini 3 工具调用失败，可能影响所有通过 OpenAI-compatible 接口调用 Gemini 的用户。
   - 背后诉求是保证多轮 Agent 执行、函数调用和上下文续接稳定。

2. [#3432 Anthropic SDK 大版本升级](https://github.com/sipeed/picoclaw/pull/3432)  
   - 从 `1.55.1` 升级至 `1.80.0`，变化跨度较大。
   - 社区关注点通常包括 API 兼容性、认证方式、消息格式以及 Claude Provider 的回归风险。

3. [#3431 Standard Compute Provider](https://github.com/sipeed/picoclaw/pull/3431)  
   - 代表 Provider 生态继续扩展。
   - 用户可能更关心统一网关的实际模型覆盖、配置复杂度、费用归属和数据隐私。

4. [#3429 与 #3430 工具反馈参数隐藏功能](https://github.com/sipeed/picoclaw/pull/3429) / [#3430](https://github.com/sipeed/picoclaw/pull/3430)  
   - 体现了用户对更清晰、更安全的工具调用展示体验的需求。
   - 尤其适合工具参数包含敏感信息、Token、路径或业务数据的场景。

---

## 5. Bug 与稳定性

### 高优先级

- **Gemini 工具调用兼容性错误**  
  - PR：[#3428](https://github.com/sipeed/picoclaw/pull/3428)
  - 现象：Gemini 3 通过 OpenAI-compatible Endpoint 继续工具调用时，可能出现：
    `Function call is missing a thought_signature`
  - 影响：工具调用、多轮 Agent 循环和上下文恢复可能失败。
  - 状态：**已有修复 PR，但尚未合并**。

### 中高优先级

- **Anthropic SDK 大版本升级的潜在回归风险**  
  - PR：[#3432](https://github.com/sipeed/picoclaw/pull/3432)
  - `1.55.1 → 1.80.0` 的跨度较大，可能涉及 API、认证、消息结构或错误处理变化。
  - 状态：**已有升级 PR，无明确回归修复记录，尚未合并**。

- **Go 加密库升级风险**  
  - PR：[#3433](https://github.com/sipeed/picoclaw/pull/3433)
  - `golang.org/x/crypto` 从 `0.53.0` 升至 `0.58.0`。
  - 可能影响 TLS、加密、签名和 Provider 网络连接。
  - 状态：**已有升级 PR，无明确验证结果，尚未合并**。

### 低至中优先级

- `go.mau.fi/util`：[#3436](https://github.com/sipeed/picoclaw/pull/3436)
- Azure Identity SDK：[#3435](https://github.com/sipeed/picoclaw/pull/3435)
- `gronx`：[#3434](https://github.com/sipeed/picoclaw/pull/3434)

上述依赖更新可能改善稳定性或兼容性，也可能引入行为变化，需要结合完整测试和 CI 结果确认。

**稳定性总结：**  
今日没有新的 Bug Issue 报告，但已有明确 PR 正在处理 Gemini 工具调用错误。由于修复尚未合并，当前线上用户仍可能受到影响。

---

## 6. 功能请求与路线图信号

### 1. Provider 生态继续扩展

- [#3431 Standard Compute provider](https://github.com/sipeed/picoclaw/pull/3431)
- 该 PR 延续了 OpenAI-compatible Provider 的接入模式，说明项目可能继续扩展多模型、多云服务网关支持。
- **可能纳入下一版本的信号：中等**
- 需要维护者确认 Provider 质量、配置规范、文档和测试覆盖。

### 2. 工具调用反馈增强

- [#3429 隐藏工具反馈参数](https://github.com/sipeed/picoclaw/pull/3429)
- [#3430 Web UI 配置开关](https://github.com/sipeed/picoclaw/pull/3430)

这组 PR 具备较完整的功能链条：底层配置、序列化输出、Web 配置入口和测试覆盖同时推进。  
**可能纳入下一版本的信号：中高**

### 3. QQ 本地多媒体发送

- [#1227](https://github.com/sipeed/picoclaw/pull/1227) 已被关闭。
- 该需求体现了 QQ 用户对本地文件、图片直发能力的实际诉求。
- **下一版本纳入信号：低至中**
- 需要确认关闭原因，以及功能是否会以新 PR 形式重新提交。

### 4. 依赖现代化与安全维护

- [Anthropic SDK](https://github.com/sipeed/picoclaw/pull/3432)
- [Go Crypto](https://github.com/sipeed/picoclaw/pull/3433)
- [Azure Identity](https://github.com/sipeed/picoclaw/pull/3435)
- [go.mau.fi/util](https://github.com/sipeed/picoclaw/pull/3436)
- [gronx](https://github.com/sipeed/picoclaw/pull/3434)

这些更新可能属于下一批维护版本的基础工作，但目前全部未合并，不能视为已进入路线图。

---

## 7. 用户反馈摘要

过去 24 小时没有任何 Issue 更新，所有列出的 PR 也没有评论或点赞数据。因此：

- 无法提炼真实用户评论中的满意度或不满情绪。
- 没有可验证的用户使用场景反馈。
- 不能据此判断需求热度或社区认可度。
- 当前只能基于 PR 内容推断潜在需求：
  - Gemini 工具调用稳定性；
  - 多 Provider 接入；
  - 工具反馈的信息隐藏；
  - QQ 本地文件发送；
  - 依赖安全升级。

**反馈可信度：低。**  
建议下一周期重点收集 CI、Issue 评论、Provider 实际使用反馈和 PR Review 结果。

---

## 8. 待处理积压

当前共有 **9 个开放 PR**，其中多个被标记为 `stale`：

- [#3431 Standard Compute provider](https://github.com/sipeed/picoclaw/pull/3431)
- [#3436 go.mau.fi/util 更新](https://github.com/sipeed/picoclaw/pull/3436)
- [#3435 Azure SDK 更新](https://github.com/sipeed/picoclaw/pull/3435)
- [#3434 gronx 更新](https://github.com/sipeed/picoclaw/pull/3434)
- [#3433 Go Crypto 更新](https://github.com/sipeed/picoclaw/pull/3433)
- [#3432 Anthropic SDK 更新](https://github.com/sipeed/picoclaw/pull/3432)
- [#3430 Web 工具反馈设置](https://github.com/sipeed/picoclaw/pull/3430)
- [#3429 隐藏工具反馈参数](https://github.com/sipeed/picoclaw/pull/3429)
- [#3428 Gemini thought_signature 修复](https://github.com/sipeed/picoclaw/pull/3428)

### 建议维护者优先处理

1. **先处理 [#3428](https://github.com/sipeed/picoclaw/pull/3428)**  
   这是明确的工具调用兼容性 Bug，可能影响 Gemini 用户。

2. **验证并处理核心依赖升级**  
   建议优先评估 [Anthropic SDK](https://github.com/sipeed/picoclaw/pull/3432) 与 [Go Crypto](https://github.com/sipeed/picoclaw/pull/3433)。

3. **合并或关闭功能 PR**  
   对 [#3429](https://github.com/sipeed/picoclaw/pull/3429)、[#3430](https://github.com/sipeed/picoclaw/pull/3430) 和 [#3431](https://github.com/sipeed/picoclaw/pull/3431) 给出明确 Review 结论，避免长期处于 stale 状态。

4. **解释 [#1227](https://github.com/sipeed/picoclaw/pull/1227) 的关闭原因**  
   若功能仍有用户价值，建议建立后续 Issue 或替代 PR；若已放弃，应在 PR 中说明原因，降低重复开发成本。

---

## 总体健康度结论

**健康度评级：中等偏低**

- **开发活跃度：中等**：有 10 个 PR 更新，但缺少 Issue 讨论和版本发布。
- **功能推进：中等**：Provider、工具反馈和 QQ 能力有明确开发信号。
- **稳定性风险：中等**：Gemini 工具调用 Bug 尚未合并，多项核心依赖升级积压。
- **维护响应：偏弱**：9 个开放 PR，其中 8 个标记为 `stale`，显示 Review 和合并节奏不足。
- **社区反馈：不足**：过去 24 小时无评论、点赞和 Issue 数据，难以确认用户认可度。

**建议关注顺序：**  
`#3428 Gemini 修复` → `#3432 Anthropic SDK` / `#3433 Go Crypto` 依赖验证 → `#3429/#3430 工具反馈功能` → `#3431 Provider 接入` → 其他依赖 PR。

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw 项目动态日报

**统计日期：2026-10-23**  
**数据范围：过去 24 小时 GitHub Issues / Pull Requests 更新**

## 1. 今日速览

- 过去 24 小时共更新 **2 个 Issues**：其中 **1 个新开、1 个关闭**。
- 共更新 **6 个 PRs**：**5 个待合并、1 个已关闭**，当前 PR 活动以 Dependabot 依赖升级为主。
- 今日没有新的版本发布，依赖更新暂未形成可见的版本发布节奏。
- 主要进展集中在前端安全依赖、开发工具链和测试环境依赖维护；未看到明确的核心功能合入。
- 社区讨论度较低：提供的 Issues / PR 数据均未显示评论或点赞，项目健康度可评估为**稳定但缺乏高强度社区互动**。

---

## 2. 版本发布

今日无新版本发布。

---

## 3. 项目进展

### 3.1 已关闭的依赖升级 PR

- **[#8149](https://github.com/nearai/ironclaw/pull/8149)** — `[dependencies, javascript] bump dompurify from 3.4.12 to 3.4.16`  
  该 PR 已关闭。其后，**[#8155](https://github.com/nearai/ironclaw/pull/8155)** 提交了从 DOMPurify **3.4.12 到 3.4.17** 的升级版本，说明维护者正在继续处理该安全相关依赖，但目前新 PR 仍处于开放状态，尚未确认合入。

### 3.2 当前待合并的主要依赖维护 PR

- **[#8155](https://github.com/nearai/ironclaw/pull/8155)**  
  将 Web UI 前端的 `dompurify` 从 **3.4.12 升级至 3.4.17**。该依赖用于前端 HTML / 内容净化，升级可能包含安全修复，值得优先关注。

- **[#8158](https://github.com/nearai/ironclaw/pull/8158)**  
  将 Storybook 从 **10.5.7 升级至 10.6.2**，属于前端开发和测试工具链维护。

- **[#8156](https://github.com/nearai/ironclaw/pull/8156)**  
  将 `@storybook/addon-vitest` 从 **10.5.7 升级至 10.6.2**，与 Storybook 主版本升级配套。

- **[#8157](https://github.com/nearai/ironclaw/pull/8157)**  
  将 E2E 测试依赖 `certifi` 从 **2026.7.22 升级至 2026.10.19**，有助于更新测试环境中的 CA 根证书集合。

- **[#8154](https://github.com/nearai/ironclaw/pull/8154)**  
  将 Vite 从 **8.1.3 升级至 8.1.6**，属于 Web UI 构建工具链维护。

### 3.3 整体推进程度

今日没有看到核心功能、架构或运行时行为的明确合入，项目推进主要体现为：

1. 强化前端内容净化依赖；
2. 保持 Storybook / Vitest / Vite 开发工具链同步；
3. 更新端到端测试使用的证书包。

因此，今日更接近**维护性推进日**，而非功能发布日。

---

## 4. 社区热点

### 4.1 失败分类日报 Issue

- **[#8153 — Daily ironclaw failure taxonomy — 2026-10-22](https://github.com/nearai/ironclaw/issues/8153)**  
  状态：**开放**  
  该 Issue 汇总了上一轮基准测试中的失败任务，重点分析了 `officeqa` 套件的 **64 个 non-pass 任务**。摘要指出，其中大量失败更可能是模型质量问题，而非 IronClaw 系统性故障。

**背后诉求：**

- 需要持续区分模型能力错误、Agent 行为错误、工具调用错误与基础设施错误；
- 通过失败分类降低问题定位成本；
- 为模型、提示词、工具链和基准测试优化提供可追踪数据。

### 4.2 ARM64 Docker 构建支持

- **[#3168 — Add arm64/aarch64 platform support for Docker builds](https://github.com/nearai/ironclaw/issues/3168)**  
  状态：**已关闭**  
  Issue 关注官方 Docker 镜像是否支持 ARM64 / aarch64。摘要指出，Cranelift 已具备 aarch64 支持，主要限制集中在 armv7，且相关问题另有追踪项。

**背后诉求：**

- 支持 ARM64 设备上的官方 Docker 部署；
- 扩大 Apple Silicon、ARM 服务器和边缘设备用户群；
- 降低本地运行和多架构 CI 的部署门槛。

该 Issue 已关闭，具体关闭原因在提供的数据中未展开，建议维护者补充说明是否已完成 aarch64 镜像发布，或因支持计划调整而关闭。

---

## 5. Bug 与稳定性

### 高优先级

#### 前端 DOMPurify 安全依赖更新

- **[#8155](https://github.com/nearai/ironclaw/pull/8155)**  
  状态：**开放，暂无 fix PR 合入确认**
- 前一版升级 PR：**[#8149](https://github.com/nearai/ironclaw/pull/8149)**，已关闭。
- 该组件直接参与 HTML / 内容安全处理，若存在已知漏洞或解析绕过，可能影响 Web UI 的输入安全边界。
- 建议优先完成代码审查、回归测试和构建验证后合入。

### 中优先级

#### 测试环境 CA 证书更新

- **[#8157](https://github.com/nearai/ironclaw/pull/8157)**  
  状态：**开放**
- `certifi` 长期未更新可能导致 E2E 测试访问 HTTPS 服务时出现证书信任失败、测试环境兼容性问题或过期根证书问题。
- 当前没有显示对应 Bug Issue，但应确认升级后的 E2E 测试全部通过。

### 低优先级 / 维护性风险

#### Vite、Storybook 与 Vitest 工具链升级

- **[#8154](https://github.com/nearai/ironclaw/pull/8154)**
- **[#8158](https://github.com/nearai/ironclaw/pull/8158)**
- **[#8156](https://github.com/nearai/ironclaw/pull/8156)**

这些升级主要影响开发、测试和构建环境，但版本跨度较大时可能带来：

- Storybook 与 Vitest 插件兼容性变化；
- Vite 构建行为或配置变化；
- 前端快照测试、组件测试失败；
- 本地开发环境与 CI 环境不一致。

目前提供的数据中没有显示已报告的回归 Bug，也没有确认这些 PR 已经通过完整 CI。

---

## 6. 功能请求与路线图信号

### 6.1 ARM64 / aarch64 官方 Docker 镜像

- **Issue：[#3168](https://github.com/nearai/ironclaw/issues/3168)**
- 需求信号：为 ARM64 机器提供官方 Docker 镜像支持。
- 当前状态：Issue 已关闭，但数据中没有显示对应的实现 PR 或完成说明。
- 路线图判断：  
  如果项目仍希望覆盖 Apple Silicon、ARM 云主机和边缘部署，该能力可能成为近期部署兼容性路线的一部分；建议确认是否已有 CI 多架构构建或镜像发布工作。

### 6.2 失败分类与质量评估体系

- **Issue：[#8153](https://github.com/nearai/ironclaw/issues/8153)**
- 需求信号：建立每日失败任务分类机制，并持续分析模型质量与系统执行质量之间的边界。
- 路线图判断：  
  这类工作更像是质量工程和评测基础设施，而不是短期用户功能。它可能推动后续的 Agent 稳定性、工具调用可靠性、模型选择和基准测试优化。

### 6.3 当前没有明确的新功能 PR

过去 24 小时的开放 PR 几乎全部由 Dependabot 提交，未发现新的功能需求或明确路线图变更。因此，暂不能据此判断下一版本会加入某项具体功能。

---

## 7. 用户反馈摘要

提供的数据中没有显示任何 Issue 评论，因此无法提炼真实的用户评论、满意度或具体使用反馈。

可观察到的信号如下：

- **Issue 反馈偏技术与质量分析**：  
  [#8153](https://github.com/nearai/ironclaw/issues/8153) 聚焦失败任务分类，说明反馈重点是模型与 Agent 评测质量，而非单纯功能体验。
- **部署兼容性受到关注**：  
  [#3168](https://github.com/nearai/ironclaw/issues/3168) 反映 ARM64 用户或潜在用户对官方 Docker 支持的需求。
- **社区互动强度有限**：  
  当前 Issue 和 PR 的评论数、点赞数均未显示有效互动，尚未形成高热度用户讨论。

---

## 8. 待处理积压

### 8.1 5 个开放 PR 等待处理

以下 PR 均处于开放状态，建议维护者安排审查和 CI 验证：

- **[#8155](https://github.com/nearai/ironclaw/pull/8155)** — DOMPurify `3.4.17` 安全依赖升级
- **[#8154](https://github.com/nearai/ironclaw/pull/8154)** — Vite `8.1.6`
- **[#8156](https://github.com/nearai/ironclaw/pull/8156)** — Storybook Vitest addon `10.6.2`
- **[#8158](https://github.com/nearai/ironclaw/pull/8158)** — Storybook `10.6.2`
- **[#8157](https://github.com/nearai/ironclaw/pull/8157)** — certifi `2026.10.19`

其中，DOMPurify 与 certifi 更偏向安全和测试稳定性，建议优先处理；Storybook / Vite 升级可在确认构建与组件测试通过后合并。

### 8.2 失败分类 Issue 需要持续跟进

- **[#8153](https://github.com/nearai/ironclaw/issues/8153)**
- 当前仍开放，且无评论。
- 建议补充失败分类结论、复现方式、责任归属和后续修复计划，避免 Issue 仅停留在日报记录层面。

### 8.3 ARM64 支持 Issue 的关闭结论不够透明

- **[#3168](https://github.com/nearai/ironclaw/issues/3168)**
- Issue 已关闭，但当前摘要没有说明是功能已完成、重复追踪，还是暂不支持。
- 建议补充关闭原因及当前部署文档，便于 ARM 用户判断官方镜像是否可用。

---

## 总体健康度评估

**项目健康度：中等偏稳定。**

- 维护活动正常，依赖更新持续推进；
- 未出现新版本发布，说明发布节奏可能较轻量；
- 未见新的核心功能合入，今日创新和功能交付有限；
- 安全相关依赖 DOMPurify 的升级仍待处理，应避免长期积压；
- 社区评论和反应数据较少，尚未出现明显的用户争议或高热度需求；
- 当前最值得关注的事项是：**完成依赖升级审查、验证 CI 与回归测试，并明确 ARM64 支持 Issue 的最终状态。**

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI 项目动态日报

**日期：2026-10-23**  
**数据范围：过去 24 小时 GitHub 更新**  
**仓库：** [netease-youdao/LobsterAI](https://github.com/netease-youdao/LobsterAI)

---

## 1. 今日速览

过去 24 小时项目共更新 **10 个 Pull Request**，其中 **9 个已合并或关闭、1 个仍待处理**；**没有新的 Issue 更新，也没有新版本发布**。  
今日主要变化集中在渲染层稳定性、媒体费用确认恢复、头像展示和 OpenClaw 插件持久化等方面，说明项目当前仍处于较强的功能修复与质量收敛阶段。  
其中 6 个 PR 被标记为 `stale` 并关闭，表明部分较早提交的功能和测试需求因长期未跟进而退出当前处理队列。  
由于缺少新的 Issue、评论和版本信息，今日无法判断社区讨论热度；但从 PR 数量及问题类型看，项目开发活跃度为**中高**，健康度评估为**中等偏高**，仍需关注长期积压和待合并 PR 的响应情况。

---

## 2. 版本发布

过去 24 小时**无新版本发布**，因此暂无版本级更新说明、破坏性变更或迁移注意事项。

---

## 3. 项目进展

### 3.1 修复图像编辑器预览闪烁与选择崩溃

- **PR：** [#2927](https://github.com/netease-youdao/LobsterAI/pull/2927)
- **状态：** 已关闭
- **涉及模块：** renderer、artifacts
- **作者：** [@btc69m979y-dotcom](https://github.com/btc69m979y-dotcom)

该 PR 针对 10.19 用户反馈中的图像编辑器问题进行修复，重点包括：

- 在非整数或分数级视口尺寸下稳定预览；
- 避免拖拽选择结束后出现 `Cannot read properties of undefined (reading 'start')` 崩溃；
- 改善预览区域闪烁问题。

这是今日最直接面向用户稳定性的修复之一，涉及编辑器交互和渲染稳定性。

---

### 3.2 修复视频确认超时与状态恢复机制

- **PR：** [#2924](https://github.com/netease-youdao/LobsterAI/pull/2924)
- **状态：** 已关闭
- **涉及模块：** renderer、docs、main、OpenClaw、Cowork
- **作者：** [@btc69m979y-dotcom](https://github.com/btc69m979y-dotcom)

该 PR 对媒体费用确认流程进行了较完整的可靠性改造：

- 确认卡片首次可见且窗口获得焦点时，才开始两分钟倒计时；
- 倒计时超时后保留描述和参数；
- 支持刷新费用并重新确认；
- 支持页面重载、切换会话后的确认状态恢复；
- 增加确认状态 IPC；
- 通过 revision/sequence 拒绝旧确认、重复确认和过期快照；
- 在工具停止、连接断开、账号或服务切换时结束等待；
- 升级媒体生命周期埋点至 `schemaVersion=3`。

这属于跨 renderer、OpenClaw 媒体插件和主进程的联动改进，有助于减少“等待时间提前消耗”和“超时后无法继续”等问题。

---

### 3.3 改进专家头像及场景卡片头像展示

- **PR：** [#2925](https://github.com/netease-youdao/LobsterAI/pull/2925)
- **状态：** 已关闭
- **涉及模块：** renderer
- **作者：** [@btc69m979y-dotcom](https://github.com/btc69m979y-dotcom)

主要变化包括：

- 更新专家无头像或远程头像加载失败时使用的本地 fallback 头像；
- 将专家头像展示到顶部 featured scenario 卡片中的条目行；
- 改善专家入口和场景入口的视觉一致性。

该改动主要改善产品呈现和异常网络状态下的 UI 完整性。

---

### 3.4 OpenClaw 用户插件入口 hooks 持久化修复

- **PR：** [#2727](https://github.com/netease-youdao/LobsterAI/pull/2727)
- **状态：** 待处理
- **涉及模块：** main、OpenClaw
- **作者：** [@FOWEPJF255](https://github.com/FOWEPJF255)
- **关联问题：** [#2654](https://github.com/netease-youdao/LobsterAI/issues/2654)

该 PR 旨在解决 OpenClaw 插件入口 hooks 在同步或网关重启后丢失的问题：

- 将 `plugins.entries.*.hooks` 持久化至 SQLite；
- 在 `syncToDisk` 时重新写入 hooks；
- 对齐 store、同步和插件管理器之间的字段传递逻辑；
- 确保 hooks 能像其他插件入口字段一样完成完整往返。

这是今日唯一仍处于待处理状态的重要 PR，且涉及 OpenClaw 插件配置持久化，建议优先确认合并状态和测试覆盖情况。

---

### 3.5 补充 Cowork 格式转换单元测试

- **PR：** [#547](https://github.com/netease-youdao/LobsterAI/pull/547)
- **状态：** 已关闭
- **标签：** stale
- **作者：** [@AfantyLS](https://github.com/AfantyLS)

该 PR 为 `coworkFormatTransform` 增加 **35 个单元测试**，覆盖：

- `normalizeProviderApiFormat`
- `mapStopReason`
- `formatSSEEvent`
- `anthropicToOpenAI`

测试覆盖有助于提高供应商 API 格式转换、SSE 事件解析和停止原因映射的回归防护能力。不过该 PR 因长期未更新而关闭，测试是否已通过其他方式合入或替代，需维护者进一步确认。

---

### 3.6 Cowork 输入框结构化 composer 重构

- **PR：** [#610](https://github.com/netease-youdao/LobsterAI/pull/610)
- **状态：** 已关闭
- **标签：** stale
- **作者：** [@febugcoder](https://github.com/febugcoder)

该 PR 计划将 Cowork 输入框从传统的 `textarea + 字符串拼接` 重构为结构化 composer，目标是：

- 统一资源“已附带”和正文显式引用的输入体验；
- 降低使用 `@` 和 `/` 的发现成本；
- 改善附件、技能和快捷操作之间的组织方式；
- 为后续输入能力扩展提供更稳定的基础。

由于 PR 已被标记为 stale 并关闭，相关路线是否继续推进尚不明确，但它反映了 Cowork 输入体验的长期优化方向。

---

### 3.7 Cowork 消息书签与全局收藏视图

- **PR：** [#725](https://github.com/netease-youdao/LobsterAI/pull/725)
- **状态：** 已关闭
- **标签：** stale
- **作者：** [@kungyutucheng](https://github.com/kungyutucheng)

该 PR 提出两级消息书签体系：

- **会话级别：** 支持单条消息内联收藏，并在会话头部提供浮动面板；
- **全局级别：** 在侧边栏提供独立视图，按会话分组展示全部书签并支持跨会话跳转；
- 通过 KV 持久化保存书签数据。

它对应长对话、多会话场景下对关键决策、代码片段和重要指令进行回顾与导航的需求。当前 PR 已关闭，功能是否纳入后续版本仍需关注。

---

### 3.8 优化 Cowork 流式输出渲染性能

- **PR：** [#736](https://github.com/netease-youdao/LobsterAI/pull/736)
- **状态：** 已关闭
- **标签：** stale
- **作者：** [@vdorchan](https://github.com/vdorchan)

该 PR 通过为 `MarkdownContent` 增加 `React.memo`，减少流式输出时历史消息的重复渲染：

- 流式 chunk 触发 Redux 更新时；
- 避免所有历史 assistant 消息重复执行 Markdown AST 解析；
- 减少 remark-gfm、remark-math 等重复解析开销。

这是针对 Cowork 长会话性能的明确优化信号，但由于 PR 关闭，当前实际收益尚未确认。

---

### 3.9 修复执行模式配置被忽略的问题

- **PR：** [#738](https://github.com/netease-youdao/LobsterAI/pull/738)
- **状态：** 已关闭
- **标签：** stale
- **作者：** [@joe06102](https://github.com/joe06102)

该 PR 修复 Cowork 执行模式处理问题：

- 从 `cowork_config` 读取 `executionMode`，不再硬编码为 `local`；
- 恢复 `local/auto/sandbox` 到 OpenClaw sandbox 的映射；
- 增加执行模式归一化和 sandbox 映射的单元测试。

该修复涉及用户配置与实际执行环境的一致性。PR 摘要同时注明未运行测试，因此合入前需要特别关注验证完整性。

---

### 3.10 更新反馈内容

- **PR：** [#2926](https://github.com/netease-youdao/LobsterAI/pull/2926)
- **状态：** 已关闭
- **涉及模块：** renderer
- **作者：** [@fisherdaddy](https://github.com/fisherdaddy)

该 PR 为渲染层反馈更新，但当前摘要未提供足够具体的功能或修复内容，暂无法进一步判断影响范围。

---

## 4. 社区热点

### 讨论数据概览

- Issues 更新：**0**
- PR 评论数据：均显示为 `undefined`
- 可见点赞数：均为 **0**
- 当前没有足够数据识别“评论最多”或“反应最多”的讨论线程

因此，今日无法基于真实评论和反应数据判断社区热点。仅从 PR 主题和状态看，关注度较高的方向可能是：

1. **图像编辑器和 artifacts 稳定性**  
   [#2927](https://github.com/netease-youdao/LobsterAI/pull/2927) 修复预览闪烁和选择崩溃，属于直接影响用户体验的问题。

2. **视频生成费用确认与超时恢复**  
   [#2924](https://github.com/netease-youdao/LobsterAI/pull/2924) 覆盖等待、恢复、重试和埋点，复杂度较高，也可能对应真实用户流程中的阻塞性痛点。

3. **OpenClaw 插件配置持久化**  
   [#2727](https://github.com/netease-youdao/LobsterAI/pull/2727) 解决网关重启后 hooks 丢失的问题，可能受到插件开发者和高级用户关注。

4. **Cowork 输入体验和资源引用**  
   [#610](https://github.com/netease-youdao/LobsterAI/pull/610) 试图解决附件、技能、快捷操作和 `@`/`/` 发现成本高的问题，代表较强的产品体验诉求。

---

## 5. Bug 与稳定性

按潜在用户影响范围和严重程度，当前可识别的 Bug 与稳定性问题如下。

### 高优先级：视频确认流程可能提前超时且无法恢复

- **PR：** [#2924](https://github.com/netease-youdao/LobsterAI/pull/2924)
- **问题类型：** 状态管理、超时、恢复、并发一致性
- **表现：**
  - 费用确认等待时间可能在实际展示前被消耗；
  - 超时后用户无法继续；
  - 页面重载或切换会话可能丢失确认状态；
  - 旧确认或过期快照可能造成状态冲突。
- **修复情况：** 已有针对性修复 PR，当前 PR 已关闭。
- **关注点：** 该变更横跨 renderer、IPC、OpenClaw 媒体插件和埋点，建议确认正式合入版本及回归测试结果。

### 高优先级：图像编辑器选择操作导致崩溃

- **PR：** [#2927](https://github.com/netease-youdao/LobsterAI/pull/2927)
- **问题类型：** 崩溃、交互回归、渲染异常
- **表现：**
  - 释放选择拖拽时可能触发 `Cannot read properties of undefined (reading 'start')`；
  - 分数级视口尺寸下预览可能出现闪烁。
- **修复情况：** 已有针对性修复 PR，当前 PR 已关闭。
- **影响：** 图像编辑和 artifacts 使用过程中的稳定性风险，优先级高于一般视觉优化。

### 中优先级：执行模式配置未生效

- **PR：** [#738](https://github.com/netease-youdao/LobsterAI/pull/738)
- **问题类型：** 配置错误、功能行为不符合预期
- **表现：**
  - `executionMode` 未从 `cowork_config` 正确读取；
  - 可能被硬编码为 `local`；
  - `local/auto/sandbox` 与 OpenClaw sandbox 映射不一致。
- **修复情况：** 已有修复 PR，但 PR 摘要注明未运行测试，且最终状态为关闭。
- **风险：** 如果修复未实际合入，用户配置的执行环境可能与预期不符。

### 中优先级：OpenClaw hooks 在重启后丢失

- **PR：** [#2727](https://github.com/netease-youdao/LobsterAI/pull/2727)
- **关联 Issue：** [#2654](https://github.com/netease-youdao/LobsterAI/issues/2654)
- **问题类型：** 数据持久化、插件配置丢失
- **表现：**
  - 插件入口 hooks 在同步或网关重启后被清除；
  - store、同步和插件管理器之间的字段传递不一致。
- **修复情况：** **已有待处理修复 PR**，当前仍未合并。

### 中低优先级：专家头像和 featured 卡片展示不完整

- **PR：** [#2925](https://github.com/netease-youdao/LobsterAI/pull/2925)
- **问题类型：** UI 展示、远程资源加载失败
- **表现：**
  - 专家缺少头像或远程头像加载失败时 fallback 表现不理想；
  - featured scenario 条目未展示对应专家头像。
- **修复情况：** 已有修复 PR，当前已关闭。
- **影响：** 主要影响视觉一致性和场景入口识别，不涉及核心功能不可用。

---

## 6. 功能请求与路线图信号

虽然过去 24 小时没有新的 Issue，但从现有 PR 可以识别出以下功能方向。

### 6.1 Cowork 结构化输入 composer

- **PR：** [#610](https://github.com/netease-youdao/LobsterAI/pull/610)
- **潜在方向：**
  - 统一附件、技能、快捷操作和正文引用；
  - 优化 `@` 与 `/` 的发现和插入流程；
  - 从纯文本输入升级为结构化输入模型。
- **纳入下一版本的判断：** **中等可能**  
  需求明确且符合 Cowork 的长期产品方向，但原 PR 已因 stale 关闭，需重新确认维护者意愿和工作量。

### 6.2 Cowork 消息书签和全局收藏

- **PR：** [#725](https://github.com/netease-youdao/LobsterAI/pull/725)
- **潜在方向：**
  - 长对话中的关键消息收藏；
  - 按会话和全局维度组织书签；
  - 支持跨会话快速定位历史内容。
- **纳入下一版本的判断：** **中等偏低至中等**  
  用户场景清晰，尤其是多会话和长上下文工作流，但原 PR 已关闭，缺少近期反馈或维护者确认。

### 6.3 Cowork 流式渲染性能优化

- **PR：** [#736](https://github.com/netease-youdao/LobsterAI/pull/736)
- **潜在方向：**
  - 减少历史 Markdown 重复解析；
  - 降低长会话流式输出期间的 CPU 和渲染开销。
- **纳入下一版本的判断：** **中等**  
  这是规模化使用场景下的基础设施优化，建议结合性能基准和用户侧长会话反馈重新推进。

### 6.4 OpenClaw 插件配置可靠性

- **PR：** [#2727](https://github.com/netease-youdao/LobsterAI/pull/2727)
- **关联 Issue：** [#2654](https://github.com/netease-youdao/LobsterAI/issues/2654)
- **潜在方向：**
  - 完善插件字段的 SQLite 持久化；
  - 确保 store、磁盘同步和插件管理器之间的数据往返一致；
  - 提升网关重启后的配置可靠性。
- **纳入下一版本的判断：** **较高**  
  这是明确的数据丢失类问题，且已有待处理修复 PR，建议优先纳入修复版本或至少确认替代方案。

---

## 7. 用户反馈摘要

过去 24 小时没有新的 Issue 评论，也没有提供评论文本，因此无法直接提炼新的用户评论或满意度数据。

从 PR 引用和修复目标中，可以归纳出以下已确认或间接反映出的用户痛点：

1. **图像编辑器在特定视口尺寸下不稳定**  
   分数级视口尺寸会触发预览闪烁，选择操作结束后存在崩溃风险。相关反馈集中在 [#2927](https://github.com/netease-youdao/LobsterAI/pull/2927)。

2. **视频费用确认流程容易让人“卡住”**  
   用户可能遇到确认窗口实际出现前倒计时已经消耗、超时后不能继续、切换会话后需要重新操作等问题。相关改进见 [#2924](https://github.com/netease-youdao/LobsterAI/pull/2924)。

3. **专家身份和头像展示不完整**  
   专家无头像或远程资源加载失败时，fallback 体验不足；featured scenario 中也缺少专家头像，影响场景选择和识别。见 [#2925](https://github.com/netease-youdao/LobsterAI/pull/2925)。

4. **高级用户对配置可控性的要求**  
   执行模式配置被忽略、插件 hooks 重启后丢失，说明用户希望配置能够真实、稳定地影响实际运行。见 [#738](https://github.com/netease-youdao/LobsterAI/pull/738) 和 [#2727](https://github.com/netease-youdao/LobsterAI/pull/2727)。

5. **Cowork 复杂任务中的输入和资源管理成本较高**  
   现有输入方式依赖多个外部区域和字符串拼接，用户难以自然表达附件、技能和正文引用之间的关联。相关诉求见 [#610](https://github.com/netease-youdao/LobsterAI/pull/610)。

由于没有新的评论、点赞或 Issue 数据，当前无法判断用户对上述改动的满意程度。

---

## 8. 待处理积压

### 8.1 OpenClaw hooks 持久化 PR 仍待合并

- **PR：** [#2727](https://github.com/netease-youdao/LobsterAI/pull/2727)
- **状态：** 待处理
- **关联 Issue：** [#2654](https://github.com/netease-youdao/LobsterAI/issues/2654)
- **建议：**
  - 确认是否已有替代 PR；
  - 补充网关重启、同步失败和字段往返测试；
  - 明确修复进入哪个版本；
  - 避免插件配置持续丢失。

这是今日最需要维护者明确处理状态的积压项。

### 8.2 多个较早 PR 因 stale 被关闭

今日关闭且带 `stale` 标签的 PR 包括：

- [#547](https://github.com/netease-youdao/LobsterAI/pull/547)：Cowork 格式转换测试；
- [#610](https://github.com/netease-youdao/LobsterAI/pull/610)：结构化输入 composer；
- [#725](https://github.com/netease-youdao/LobsterAI/pull/725)：消息书签与全局收藏；
- [#736](https://github.com/netease-youdao/LobsterAI/pull/736)：Markdown 渲染性能优化；
- [#738](https://github.com/netease-youdao/LobsterAI/pull/738)：执行模式修复。

这些 PR 不一定代表需求失效，可能只是长期缺乏维护者响应、代码冲突或无法完成验证。建议维护者：

1. 对已有修复内容进行重新审查；
2. 对仍有价值的功能拆分为更小的 PR；
3. 明确关闭原因；
4. 对用户已反馈的 Bug 优先恢复处理；
5. 为长期未响应 PR 设置自动提醒和认领机制。

### 8.3 缺少新的 Issue 和版本反馈闭环

过去 24 小时：

- 新开或活跃 Issues：0；
- 新版本发布：0；
- PR 评论和点赞数据不可用。

如果项目当前确实没有新的 Issue，需确认是用户问题减少，还是反馈入口、自动化采集或社区参与度不足。对于涉及编辑器、媒体生成、OpenClaw 和 Cowork 等复杂功能，建议补充版本发布说明、已知问题和回归反馈入口，以降低用户重复反馈和升级后的不确定性。

---

## 总结

今日 LobsterAI 的主要成果是围绕**稳定性、状态恢复和跨模块一致性**进行收敛：图像编辑器崩溃、媒体确认超时、执行模式配置和 OpenClaw 插件持久化等问题均已有对应修复方向。  
当前最需要关注的不是新增功能数量，而是**待合并 PR [#2727](https://github.com/netease-youdao/LobsterAI/pull/2727)** 以及多个因 stale 关闭的关键 PR 是否存在功能遗漏。  
结合今日无新 Issue、无新版本和缺乏评论数据来看，项目整体开发活跃度尚可，但社区反馈闭环和历史 PR 清理质量仍有提升空间。

</details>

<details>
<summary><strong>QwenPaw</strong> — <a href="https://github.com/agentscope-ai/QwenPaw">agentscope-ai/QwenPaw</a></summary>

# QwenPaw 项目动态日报｜2026-10-23

## 1. 今日速览

- 过去 24 小时共更新 **21 条 Issues**（18 条开放、3 条关闭）和 **50 条 PRs**（47 条待合并、3 条合并/关闭），开发活跃度处于高位。
- 项目发布安全维护版本 **v2.2.2.post1**，重点处理 emSign CA 信任链问题，说明近期升级与部署安全是优先事项。
- 今日议题集中在**渠道稳定性、容器部署、升级回归、媒体上下文膨胀及 Hub 共享能力**，反映出产品从单体式能力扩展转向插件化、轻量化和企业化治理。
- 当前开放 PR 数量明显高于关闭数量，且多个大型重构尚未合并，项目整体推进较快，但合并与发布节奏可能偏积压。
- 初步健康度评估：**活跃度高、交付能力较强，但稳定性与发布治理压力偏高；安全修复有明确进展，多个跨渠道和升级回归仍需尽快收敛。**

---

## 2. 版本发布

### v2.2.2.post1

- **版本类型：** 补丁/安全维护版本
- **发布时间：** 2026-10-22
- **发布链接：** [v2.2.2.post1](https://github.com/agentscope-ai/QwenPaw/releases/tag/v2.2.2.post1)
- **相关安全提醒：** [Issue #8385](https://github.com/agentscope-ai/QwenPaw/issues/8385)
- **安装验证：** [Issue #8386](https://github.com/agentscope-ai/QwenPaw/issues/8386)

#### 主要更新

1. **版本号升级至 v2.2.2.post1**
   - 相关 PR：[PR #8369](https://github.com/agentscope-ai/QwenPaw/pull/8369)

2. **修复 emSign CA 信任问题**
   - 涉及依赖、安装器和构建流程的信任链修复。
   - 相关 PR：[PR #8370](https://github.com/agentscope-ai/QwenPaw/pull/8370)

#### 破坏性变更

- 当前公开信息未显示明确的 API 级破坏性变更。
- 但该版本属于安全修复版本，可能调整：
  - 安装过程中的证书信任；
  - HTTPS 请求的 CA 校验行为；
  - 依赖或构建产物的签名/验证路径。
- 对依赖旧版 emSign CA、代理或自签名证书的用户，升级后可能需要重新检查网络与企业证书配置。

#### 升级建议

- 官方已明确建议用户升级至 **2.2.2.post1 或更高版本**。
- 建议升级后重点验证：
  - 桌面端安装；
  - PyPI 安装；
  - 外部模型 API 请求；
  - Hub、渠道连接器的 HTTPS 网络访问；
  - 企业代理、定制 CA 和离线环境。
- 今日仍有升级后模型调用和 QQ 渠道异常的反馈，建议用户在迁移前保留旧版本并观察日志：
  - [Issue #8378](https://github.com/agentscope-ai/QwenPaw/issues/8378)
  - [Issue #8388](https://github.com/agentscope-ai/QwenPaw/issues/8388)

---

## 3. 项目进展

### 已关闭的重要 PR

#### 1. 删除会话后的残留请求问题

- **PR：** [PR #8375](https://github.com/agentscope-ai/QwenPaw/pull/8375)
- **状态：** 已关闭
- **关联问题：** [Issue #8368](https://github.com/agentscope-ai/QwenPaw/issues/8368)
- **内容：**
  - 为已删除会话增加临时路由标记；
  - 防止删除后仍发起会话解析或请求；
  - 记录本地 ID、后端 UUID 和运行时 session ID；
  - 清理相关缓存，降低删除会话后的 404 与竞态问题。

这表明 Console 会话生命周期管理正在从“单纯删除数据”转向“删除状态、请求状态和运行时状态的一致性治理”。

#### 2. Release/v2.2.2.post1 合并至 main

- **PR：** [PR #8391](https://github.com/agentscope-ai/QwenPaw/pull/8391)
- **状态：** 开放，显示为待合并
- **内容：**
  - 将安全维护版本发布分支合并回主线。
  - 与 v2.2.2.post1 的正式发布和安全修复直接相关。

当前该 PR 仍显示开放，说明主分支与安全版本分支的同步尚需确认。

### 今日重点进行中的 PR

#### 1. 渠道拆分为插件并采用子进程隔离

- **PR：** [PR #8187](https://github.com/agentscope-ai/QwenPaw/pull/8187)
- **规模：** XXXL
- **核心内容：**
  - 将除 Console 外的官方渠道抽取为插件；
  - 通过 `channel.json` 静态描述渠道；
  - 避免主进程导入平台 SDK；
  - 使用子进程隔离渠道故障。

这是今日最具战略意义的架构变化之一。若落地，可降低主进程依赖耦合，增强渠道故障隔离和独立部署能力，对后续第三方渠道扩展也十分关键。

#### 2. Console 输入草稿按会话隔离

- **PR：** [PR #8362](https://github.com/agentscope-ai/QwenPaw/pull/8362)
- **规模：** XL
- **关联问题：** [Issue #8351](https://github.com/agentscope-ai/QwenPaw/issues/8351)

修复当前草稿仅按 agent ID 存储、导致同一 agent 不同会话之间串草稿的问题，改为按 agent 和 session 联合隔离。属于直接改善多会话使用体验的修复。

#### 3. 避免重复上传历史媒体

- **PR：** [PR #8337](https://github.com/agentscope-ai/QwenPaw/pull/8337)
- **规模：** M
- **关联讨论：** [Issue #8335](https://github.com/agentscope-ai/QwenPaw/issues/8335)

针对截图、图片和视频等历史媒体在每次请求中重复上传的问题，计划停止向模型重放已不再需要的媒体内容。该 PR 直接面向大请求体、会话卡死、上下文膨胀和成本上升问题。

#### 4. PowerContext 记忆能力升级

- **PR：** [PR #8376](https://github.com/agentscope-ai/QwenPaw/pull/8376)
- **规模：** XXXL
- **内容：**
  - 适配 PowerContext v1.4.0；
  - 支持结构化上下文；
  - 引入 Artifact API；
  - 支持 profile、topic memory、atomic memory 和 experience 等记忆能力。

这说明 QwenPaw 正在从基础对话和工具调用，向更完整的长上下文、记忆管理和工作产物管理能力扩展。

#### 5. Creator 2.0.2 发布准备

- **PR：** [PR #8357](https://github.com/agentscope-ai/QwenPaw/pull/8357)
- **规模：** XXXL
- **内容：**
  - 引入技能管理；
  - 增加 narration safety；
  - 区分此前上游已合入内容和本次 Creator 独立发布内容。

该 PR 体现出 QwenPaw Creator 正逐步形成独立的插件、技能与内容生产体系。

#### 6. 移除 GPL 许可的 html2text 依赖

- **PR：** [PR #8366](https://github.com/agentscope-ai/QwenPaw/pull/8366)
- **规模：** M
- **内容：**
  - 移除 GPL-3.0 许可的 `html2text`；
  - 使用标准库实现 HTML 到 Markdown 的转换。

这是许可证合规和供应链治理方面的重要改动，有助于降低 Apache-2.0 项目引入 GPL 依赖的合规风险。

#### 7. 审批请求发送到正确的聊天渠道

- **PR：** [PR #8303](https://github.com/agentscope-ai/QwenPaw/pull/8303)
- **规模：** M
- **内容：**
  - 修复审批请求只出现在 Console、未送达实际触发会话的问题；
  - 解决 WeChat 等渠道审批超时、工具无法执行的问题。

这是渠道一致性和工具安全机制的重要修复。

#### 8. 任务运行完成回调清理

- **PR：** [PR #8268](https://github.com/agentscope-ai/QwenPaw/pull/8268)
- **规模：** M
- **内容：**
  - 对运行完成回调设置边界；
  - 无论回调完成、取消还是异常，都清理 `TaskTracker` 中的运行记录；
  - 避免运行状态永久停留在 running。

该修复直接面向资源泄漏、任务状态卡死和长期运行稳定性。

---

## 4. 社区热点

### 4.1 v2.3.0 轻量化与插件化路线

- **Issue：** [Issue #8289](https://github.com/agentscope-ai/QwenPaw/issues/8289)
- **评论：** 3
- **点赞：** 1
- **状态：** 开放

这是今日最明确的路线图信号之一。项目正在通过插件重构降低主程序负担、提升扩展性，并可能进一步：

- 拆解官方渠道；
- 降低主进程依赖；
- 改善插件隔离；
- 支持更灵活的模块组合；
- 提升安装体积和启动性能。

对应的渠道插件化架构 PR 是 [PR #8187](https://github.com/agentscope-ai/QwenPaw/pull/8187)，说明该路线已经进入代码实现阶段。

### 4.2 插件主题扩展能力

- **Issue：** [Issue #8071](https://github.com/agentscope-ai/QwenPaw/issues/8071)
- **评论：** 7
- **状态：** 开放

用户希望插件不再只能设置 `colorPrimary`，而是能够通过语义化 token 覆盖主题，包括：

- 主色；
- hover；
- 背景；
- surface；
- 圆角；
- 未来可能扩展的语义 token。

这反映出插件作者需要更完整、品牌化和一致性的 UI 定制能力。仅支持单一主色已难以满足第三方插件长期演进需求。

### 4.3 跨会话 `chat_with_agent` 被错误拆分

- **Issue：** [Issue #8078](https://github.com/agentscope-ai/QwenPaw/issues/8078)
- **评论：** 2
- **状态：** 开放

用户反馈跨会话调用 `chat_with_agent` 时，消息被注册为新的独立 chat，导致同一 session 在 UI 中分裂为多个页面。背后的核心诉求是：

- 会话身份应与逻辑 session 对齐；
- 子会话、跨会话调用不应产生 UI 重复页面；
- 多智能体协作过程应保持可追踪和连续。

### 4.4 Hub 全局 Skill 与 MCP 管理

- **Issue：** [Issue #8275](https://github.com/agentscope-ai/QwenPaw/issues/8275)
- **评论：** 2
- **点赞：** 1
- **状态：** 开放

用户希望 Hub 支持管理员级别的全局 Skill 和 MCP 配置，实现：

- 管理员安装一次，全员共享；
- 统一更新和同步；
- 用户保留个人配置；
- 降低团队重复配置和维护成本。

这显示 QwenPaw 的用户基础正在从个人使用扩展到团队和多用户部署，Hub 的治理能力将成为下一阶段重点。

### 4.5 关闭的安装验证任务

- **Issue：** [Issue #8386](https://github.com/agentscope-ai/QwenPaw/issues/8386)
- **状态：** 已关闭

v2.2.2.post1 的发布后安装验证任务已关闭，说明该版本的发布检查流程基本完成。不过今日仍有升级后模型和 QQ 渠道异常反馈，建议继续进行更广泛的环境验证，而不能仅依赖单一安装检查。

---

## 5. Bug 与稳定性

以下按影响范围、阻断程度和潜在数据/服务风险排序。

### P0/P1：高优先级稳定性问题

#### 1. 飞书渠道同步网络调用阻塞整个服务

- **Issue：** [Issue #8350](https://github.com/agentscope-ai/QwenPaw/issues/8350)
- **影响：**
  - 网络不可用时主事件循环被阻塞；
  - `/api/healthz` 超时；
  - `SIGTERM` 无法及时退出；
  - 整个服务可能表现为假死。
- **是否已有 fix PR：** 暂未从公开列表中确认专门修复 PR。
- **严重度：** **P0/P1**
- **分析：**
  - 这属于渠道故障影响全局服务的架构问题；
  - 可能需要异步网络调用、超时控制、渠道事件循环隔离或结合 [PR #8187](https://github.com/agentscope-ai/QwenPaw/pull/8187) 进行进程级隔离。

#### 2. Hub 容器部署时 Docker readiness 探测硬编码 127.0.0.1

- **Issue：** [Issue #8359](https://github.com/agentscope-ai/QwenPaw/issues/8359)
- **影响：**
  - Hub 在容器内运行时无法正确判断 Docker 服务就绪；
  - readiness 探测失败；
  - 容器化部署不可用或反复重启。
- **是否已有 fix PR：** 暂未确认。
- **严重度：** **P1**
- **分析：**
  - 这是典型的 localhost 与容器网络边界问题；
  - 应支持可配置的 bind host、健康检查地址和容器内部服务地址。

#### 3. 升级后模型调用异常

- **Issue：** [Issue #8378](https://github.com/agentscope-ai/QwenPaw/issues/8378)
- **影响：**
  - 用户升级后无法正常调用模型；
  - 可能与 agent 配置迁移、provider/model 激活逻辑有关。
- **是否已有 fix PR：** 暂未确认直接对应 PR。
- **严重度：** **P1**
- **风险：**
  - 可能属于升级回归，影响已有配置文件和新旧版本兼容性。

#### 4. 升级后 QQ 渠道不可用

- **Issue：** [Issue #8388](https://github.com/agentscope-ai/QwenPaw/issues/8388)
- **关键错误：** `No module named '_qwenpaw_remote_backend'`
- **影响：**
  - QQ 连接和部分工具调用均异常；
  - 用户反馈升级破坏了运行环境。
- **是否已有 fix PR：** 暂未确认。
- **严重度：** **P1**
- **分析：**
  - 该错误可能与插件化、渠道拆分或安装包遗漏模块有关；
  - 需要重点核对 v2.2.2.post1 与后续开发分支的构建/安装产物。

#### 5. 大型媒体请求导致请求体超限和会话永久卡死

- **Issue：** [Issue #8335](https://github.com/agentscope-ai/QwenPaw/issues/8335)
- **现象：**
  - WeChat 会话请求体达到约 **48 MB**；
  - 服务端返回 request body length limit exceeded；
  - 会话进入无法恢复的 wedge 状态。
- **是否已有 fix PR：** **是**，相关 PR 为 [PR #8337](https://github.com/agentscope-ai/QwenPaw/pull/8337)。
- **严重度：** **P1**
- **分析：**
  - 影响成本、延迟、可用性；
  - 需要配套媒体保留策略、失败恢复机制、请求大小限制和历史内容清理方案。

### P1/P2：重要功能回归

#### 6. Console 删除当前会话报错 404

- **Issue：** [Issue #8368](https://github.com/agentscope-ai/QwenPaw/issues/8368)
- **是否已有 fix PR：** **是**，相关 PR 为 [PR #8375](https://github.com/agentscope-ai/QwenPaw/pull/8375)，当前显示已关闭。
- **严重度：** **P1/P2**
- **处理状态：** 已有针对性修复，需确认是否已进入目标发布分支。

#### 7. `QWENPAW_CORS_ORIGINS` 通过 Web UI/CLI 设置后不生效

- **Issue：** [Issue #8374](https://github.com/agentscope-ai/QwenPaw/issues/8374)
- **原因：**
  - 常量在模块导入阶段读取；
  - Web UI/CLI 的环境变量注入发生在导入之后。
- **是否已有 fix PR：** 暂未确认。
- **严重度：** **P1**
- **影响：**
  - 远程前端、跨域部署和 Hub 集成可能出现连接失败；
  - 配置界面显示成功但运行时无效，属于高影响的配置一致性问题。

#### 8. 跨会话消息在 UI 中分裂为多个 chat

- **Issue：** [Issue #8078](https://github.com/agentscope-ai/QwenPaw/issues/8078)
- **是否已有 fix PR：** 暂未确认。
- **严重度：** **P1/P2**
- **影响：**
  - 破坏会话连续性；
  - 影响多智能体协作、调试和历史检索。

#### 9. Telegram 忽略 `reply_to_message`

- **Issue：** [Issue #8329](https://github.com/agentscope-ai/QwenPaw/issues/8329)
- **影响：**
  - Telegram 引用回复中的上下文不会传给 Agent；
  - Agent 仅收到新文本，无法理解被回复内容。
- **是否已有 fix PR：** 暂未确认。
- **严重度：** **P2**
- **分析：**
  - 这是渠道适配行为不一致问题；
  - 预计可能纳入渠道插件化重构后的统一消息模型改造。

#### 10. 七个渠道中的引用回复丢失控制命令路由

- **Issue：** [Issue #8342](https://github.com/agentscope-ai/QwenPaw/issues/8342)
- **影响：**
  - 引用消息中的 `/stop` 等控制命令可能被当成普通消息；
  - 控制指令无法正确执行。
- **是否已有 fix PR：** 暂未确认。
- **严重度：** **P1/P2**
- **分析：**
  - 这是渠道解析器和控制命令优先级之间的统一性问题；
  - 可能需要跨渠道抽象统一的 quoted message 与 command metadata。

#### 11. DingTalk sessionWebhook 过期后最终回复静默丢失

- **Issue：** [Issue #8343](https://github.com/agentscope-ai/QwenPaw/issues/8343)
- **影响：**
  - 长耗时任务完成时，DingTalk webhook 已过期；
  - 最终回复无文本、无错误、无 fallback。
- **是否已有 fix PR：** 暂未确认。
- **严重度：** **P1/P2**
- **建议：**
  - 增加 Open API fallback；
  - 对过期 webhook 做显式错误记录；
  - 设计可观测的最终投递状态。

### P2：体验与局部 UI 问题

#### 12. Composer 草稿跨会话串用

- **Issue：** [Issue #8351](https://github.com/agentscope-ai/QwenPaw/issues/8351)
- **是否已有 fix PR：** **是**，[PR #8362](https://github.com/agentscope-ai/QwenPaw/pull/8362)。
- **严重度：** P2

#### 13. 侧边栏 source/group 标题与首个会话重叠

- **Issue：** [Issue #8333](https://github.com/agentscope-ai/QwenPaw/issues/8333)
- **是否已有 fix PR：** 暂未确认。
- **严重度：** P2

#### 14. 桌面端流式生成无法关闭自动滚动

- **Issue：** [Issue #7339](https://github.com/agentscope-ai/QwenPaw/issues/7339)
- **严重度：** P2
- **影响：**
  - 用户在阅读历史内容或查看中间输出时无法锁定视口。

#### 15. 测试收集阶段出现导入文件不匹配

- **Issue：** [Issue #8377](https://github.com/agentscope-ai/QwenPaw/issues/8377)
- **内容：**
  - clean checkout 中直接运行 `pytest` 时，`test_backup` 导入文件不匹配，导致 collection abort。
- **是否已有 fix PR：** 暂未确认。
- **严重度：** P2
- **影响：**
  - 影响贡献者本地质量门禁和 CI 可重复性。

---

## 6. 功能请求与路线图信号

### 6.1 轻量化、模块化和插件化

- **需求来源：** [Issue #8289](https://github.com/agentscope-ai/QwenPaw/issues/8289)
- **对应实现：** [PR #8187](https://github.com/agentscope-ai/QwenPaw/pull/8187)

这是最明确的下一版本候选方向。重点可能包括：

- 官方渠道插件化；
- 渠道子进程隔离；
- 主进程减少平台 SDK 导入；
- 按需启用模块；
- 降低安装体积和启动成本；
- 为第三方插件提供更稳定的扩展边界。

结合 [Issue #8071](https://github.com/agentscope-ai/QwenPaw/issues/8071) 的主题扩展需求，插件体系可能同时完善 UI、配置、生命周期和主题能力。

### 6.2 插件级语义主题系统

- **需求来源：** [Issue #8071](https://github.com/agentscope-ai/QwenPaw/issues/8071)
- **当前状态：** 尚未见直接对应 PR。
- **可能纳入版本：** v2.3.x 或插件 API 后续版本。

建议不要只增加颜色参数，而是建立统一的语义 token 层，例如：

- `colorPrimary`
- `colorHover`
- `colorBackground`
- `colorSurface`
- `colorText`
- `colorBorder`
- `radius`
- `spacing`
- `typography`

这样可以减少插件对 Console 内部 CSS 结构的依赖。

### 6.3 Hub 全局 Skill 与 MCP

- **需求来源：** [Issue #8275](https://github.com/agentscope-ai/QwenPaw/issues/8275)
- **当前状态：** 尚未见对应实现 PR。
- **可能纳入版本：** 更偏向 v2.3.0 之后的团队/企业能力版本。

用户诉求已经从“单个用户配置 Skill/MCP”扩展到“组织级资产管理和权限治理”。后续可能需要：

- 全局资源层级；
- 用户覆盖机制；
- 版本锁定和回滚；
- 管理员权限；
- 同步状态；
- 资源来源与冲突处理。

### 6.4 记忆与 Artifact 能力

- **对应 PR：** [PR #8376](https://github.com/agentscope-ai/QwenPaw/pull/8376)
- **方向：**
  - PowerContext v1.4.0；
  - 结构化上下文；
  - Artifact API；
  - 主题记忆、原子记忆和经验复用。

若该 PR 合并，QwenPaw 的定位将从“Agent 编排器”进一步向“具备长期上下文和工作产物管理能力的个人 AI 工作台”靠近。

### 6.5 媒体历史与成本治理

- **需求来源：** [Issue #8335](https://github.com/agentscope-ai/QwenPaw/issues/8335)
- **对应 PR：** [PR #8337](https://github.com/agentscope-ai/QwenPaw/pull/8337)

预计需要进一步形成完整策略：

- 媒体历史保留期限；
- 仅向模型发送当前任务所需媒体；
- 超出请求大小限制时的降级；
- 会话 wedged 状态自动恢复；
- 大文件存储引用替代原始上传；
- 面向用户的请求成本和上下文占用提示。

---

## 7. 用户反馈摘要

### 用户核心痛点

1. **升级后的兼容性风险明显**
   - 模型调用异常：[Issue #8378](https://github.com/agentscope-ai/QwenPaw/issues/8378)
   - QQ 渠道无法使用：[Issue #8388](https://github.com/agentscope-ai/QwenPaw/issues/8388)
   - 用户希望升级过程具备更清晰的状态提示、依赖检测和回滚保障。

2. **渠道差异导致上下文和命令行为不一致**
   - Telegram 不读取引用消息：[Issue #8329](https://github.com/agentscope-ai/QwenPaw/issues/8329)
   - 多渠道引用回复中的控制命令无法路由：[Issue #8342](https://github.com/agentscope-ai/QwenPaw/issues/8342)
   - DingTalk 最终消息可能静默丢失：[Issue #8343](https://github.com/agentscope-ai/QwenPaw/issues/8343)
   - 用户期望不同渠道具备一致的消息语义和控制命令行为。

3. **长时间运行或网络异常时服务容易失去响应**
   - 飞书同步调用阻塞主事件循环：[Issue #8350](https://github.com/agentscope-ai/QwenPaw/issues/8350)
   - 容器内 Docker readiness 探测失败：[Issue #8359](https://github.com/agentscope-ai/QwenPaw/issues/8359)
   - 用户更关注健康检查、优雅退出和故障恢复，而不仅是功能是否成功。

4. **多会话管理体验仍不够稳定**
   - 输入草稿串到其他会话：[Issue #8351](https://github.com/agentscope-ai/QwenPaw/issues/8351)
   - 跨 agent 调用被拆成多个 UI 页面：[Issue #8078](https://github.com/agentscope-ai/QwenPaw/issues/8078)
   - 删除会话出现 404：[Issue #8368](https://github.com/agentscope-ai/QwenPaw/issues/8368)
   - 侧边栏分组标题遮挡会话：[Issue #8333](https://github.com/agentscope-ai/QwenPaw/issues/8333)

5. **多用户和团队部署的资源管理需求增强**
   - Hub 全局 Skill/MCP：[Issue #8275](https://github.com/agentscope-ai/QwenPaw/issues/8275)
   - 用户希望管理员统一配置、升级和分发能力，避免每位成员重复维护。

### 满意度与积极信号

- 项目对安全问题的响应速度较快，安全通知、安装验证和修复 PR 已同步出现。
- 社区愿意提供较完整的复现步骤、环境信息和代码证据，说明项目具备一定的工程协作基础。
- 用户对 v2.3.0 的轻量化和扩展路线有明确兴趣，Issue #8289 获得点赞，表明该方向具备较强共识。

### 不满与风险信号

- 版本升级后出现渠道和模型调用回归，可能降低用户对新版本的信任。
- 多渠道长期存在消息上下文、控制命令和投递语义不一致问题。
- 大型 PR 数量较多，但多个 PR 仍未合并，可能造成修复落地和版本发布之间的延迟。
- 当前缺少对配置变更“已生效/未生效”的统一反馈机制，例如 CORS 配置问题：[Issue #8374](https://github.com/agentscope-ai/QwenPaw/issues/8374)。

---

## 8. 待处理积压

### 需要维护者优先响应的长期或高影响问题

#### 1. 渠道事件循环阻塞

- [Issue #8350](https://github.com/agentscope-ai/QwenPaw/issues/8350)

这是当前最需要架构层优先处理的问题之一。即使单个飞书渠道不可用，也不应阻塞健康检查、退出流程和其他渠道。

#### 2. Hub 容器化部署不可用

- [Issue #8359](https://github.com/agentscope-ai/QwenPaw/issues/8359)

容器部署是团队和生产环境的重要形态。建议尽快提供正式配置方案、健康检查说明和对应回归测试。

#### 3. 跨会话身份与 UI 路由分裂

- [Issue #8078](https://github.com/agentscope-ai/QwenPaw/issues/8078)

该问题自 2026-10-02 创建，已保持较长时间，且影响核心会话模型。建议明确 session、conversation、subagent conversation 三者的边界和生命周期。

#### 4. 插件主题 API 仍过于有限

- [Issue #8071](https://github.com/agentscope-ai/QwenPaw/issues/8071)

该 Issue 已有 7 条评论，是今日社区讨论最充分的 Issue 之一。若插件化重构正在进行，主题扩展点最好在同一轮 API 设计中解决，避免后续插件再次依赖内部实现。

#### 5. Hub 全局 Skill/MCP 能力

- [Issue #8275](https://github.com/agentscope-ai/QwenPaw/issues/8275)

建议维护者尽快明确该需求是否进入 v2.3.x 或后续企业版路线，并给出 MVP 范围，否则社区功能规划会持续分散。

#### 6. 升级回归问题

- [Issue #8378](https://github.com/agentscope-ai/QwenPaw/issues/8378)
- [Issue #8388](https://github.com/agentscope-ai/QwenPaw/issues/8388)

建议为版本升级增加自动化 smoke test，至少覆盖：

- agent 配置迁移；
- provider/model 激活；
- QQ 渠道加载；
- `_qwenpaw_remote_backend` 等关键模块；
- 外部网络调用；
- 主进程与渠道插件发现。

#### 7. 质量门禁自身存在失败

- [Issue #8377](https://github.com/agentscope-ai/QwenPaw/issues/8377)

干净 checkout 上直接运行 `pytest` 即发生 collection abort，会影响贡献者和发布验证。该问题虽规模较小，但修复优先级应高于普通体验问题。

---

## 总体判断

QwenPaw 当前处于**高强度功能开发与架构重构并行期**。v2.2.2.post1 的安全修复说明项目对供应链和证书问题已有明确响应；渠道插件化、PowerContext 记忆能力和 Creator 更新则显示出较强的产品扩张意图。

不过，当前主要风险不是开发活跃度不足，而是：

- **大 PR 多、合并周期长；**
- **多渠道行为缺少统一抽象；**
- **容器、长任务、网络异常和升级迁移的稳定性仍不足；**
- **配置、会话和消息生命周期存在边界问题；**
- **安全修复发布后仍出现升级回归反馈。**

建议下一阶段优先围绕三条主线收敛：

1. **稳定性主线：** 飞书阻塞、Hub 容器部署、升级回归、媒体请求上限和任务清理；
2. **架构主线：** 渠道插件化、子进程隔离、统一消息模型和控制命令路由；
3. **生态主线：** 插件主题 API、Hub 全局 Skill/MCP、PowerContext 记忆和 Artifact 能力。

在这些问题完成验证前，项目更适合评为：**开发活跃度高、创新能力强、交付速度快，但生产稳定性和版本治理仍处于需要加强的阶段。**

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/NousResearch/hermes-agent">NousResearch/hermes-agent</a></summary>

# Hermes Agent 项目动态日报

**统计日期：2026-10-23**  
**数据范围：过去 24 小时 GitHub Issues、PR 与 Releases**

## 1. 今日速览

Hermes Agent 过去 24 小时共更新 **50 条 Issues**、**50 条 PR**，其中 Issues 新开或活跃 **46 条**、关闭 **4 条**，PR 待处理 **45 条**、合并或关闭 **5 条**，整体开发活跃度很高。  
项目于 10 月 22 日发布 **v0.22.5**，这是自 v0.22.4 以来约 **81 个 PR** 的稳定汇总版本，覆盖 CLI、安装器、Microsoft Store、Docker 与 Hermes Cloud。  
今日议题高度集中在 **Gateway/Session 架构稳定性、Desktop 与本地 Gateway 连接、异步任务结果回传、上下文压缩持久化及更新流程**。当天新报 Bug 较多，且多项问题涉及消息丢失、会话压缩结果被丢弃、Gateway 重启后无法恢复等关键链路；当前 PR 队列明显大于已合并/关闭规模，维护压力较高。  
综合判断：项目处于**高活跃、高变更、高风险并存**的阶段，功能推进明显，但 Gateway 统一运行时和多 Profile 场景的边界问题仍在集中暴露，建议 v0.23.0 前优先安排稳定性回归与发布冻结。

---

## 2. 版本发布

### v0.22.5 — Patch Release

- **发布日期：** 2026-10-22
- **Release Notes：** [GitHub Release v0.22.5](https://github.com/NousResearch/hermes-agent/releases/tag/v0.22.5)
- **发布定位：** 将 v0.22.4 之后合并的约 **81 个 PR** 汇总为稳定版本，完整整理后的发布说明预计在 **v0.23.0** 提供。

#### 更新重点

该版本主要面向以下发布渠道进行稳定化汇总：

- GitHub Release
- CLI
- 安装器
- Microsoft Store
- Docker
- Hermes Cloud

#### 破坏性变更

Release Notes 未明确列出正式破坏性变更。不过从今日 Issues 看，**统一 Gateway Runtime、多 Profile 会话、Windows 更新流程、上下文压缩和 WebSocket 生命周期**仍存在较多回归风险，因此升级前应注意版本差异，不宜将 v0.22.5 视为相关架构问题已全部解决。

#### 升级与迁移建议

1. **Windows Desktop 用户优先在独立 Profile 中验证更新流程。**今日已有更新后因权限级别不一致导致 Gateway 通信问题的报告：[Issue #143326](https://github.com/NousResearch/hermes-agent/issues/143326)。
2. **检查旧 Gateway 进程和 LaunchAgent。**macOS 多 Profile 迁移后可能残留旧 LaunchAgent，并重新抢占 Gateway 所有权：[Issue #143390](https://github.com/NousResearch/hermes-agent/issues/143390)。
3. **重要会话升级后检查上下文压缩结果。**v0.22.x 存在 NULL message ID 导致压缩结果写回失败的问题：[Issue #143402](https://github.com/NousResearch/hermes-agent/issues/143402)。
4. **验证 Discord 异步委派任务。**子任务完成后父会话可能无法恢复并接收持久结果：[Issue #139135](https://github.com/NousResearch/hermes-agent/issues/139135)。
5. **Gateway 与 Desktop 同时运行的场景需做重点回归。**连接发现、WebSocket 重连及会话控制均出现新报告。

---

## 3. 项目进展

过去 24 小时共有 **5 个 PR 合并或关闭**。相较于 45 个待合并 PR，已完成工作量占当日 PR 更新量约 **10%**。项目功能面持续扩张，但合入节奏暂时落后于问题提交和积压增长。

### 已完成或关闭的重要 PR

#### 1. Delegation 模式配置持久化

- **PR：** [#143423](https://github.com/NousResearch/hermes-agent/pull/143423)
- **状态：** CLOSED，摘要标记 `ci-reviewed`
- **作用：**
  - `/delegation <mode>` 的设置保存到后续会话。
  - `--now` 可重建当前会话的工具 Schema，无需仅在新会话生效。
- **意义：**
  - 修复了“切换委派路由但模型继续使用旧工具 Schema”的问题。
  - 对多 Profile、跨模型后端及后台委派场景尤其重要。

#### 2. Advanced Delegation 官方版本重新固定

- **PR：** [#143450](https://github.com/NousResearch/hermes-agent/pull/143450)
- **状态：** CLOSED
- **作用：**
  - 将 `advanced-delegation` 重新固定到官方主分支提交 `f78b39e`。
  - 与核心 PR #143423 的会话级模式持久化行为对齐。
- **意义：**
  - 核心与插件行为的一致性进一步提高。

#### 3. Python 依赖批量更新 WIP

- **PR：** [#143343](https://github.com/NousResearch/hermes-agent/pull/143343)
- **状态：** CLOSED
- 后续 PR：
  - [#143456](https://github.com/NousResearch/hermes-agent/pull/143456)
- **当前状态：**
  - 新 PR 将 Python 依赖升级至同主版本内最新 minor/patch。
  - 每个升级独立提交，便于单步回滚。
- **意义：**
  - 有助于安全修复和兼容性维护，但在大规模升级背景下仍需加强依赖测试。

#### 4. Fork 批量功能 A

- **PR：** [#143440](https://github.com/NousResearch/hermes-agent/pull/143440)
- **状态：** CLOSED
- 内容涉及中文纪律型 SOUL 默认配置、记忆限制与模板等。
- **意义：**
  - Fork 合并治理正在推进，但该 PR 描述不完整，变更边界和可审计性仍需加强。

### 开放中的代表性功能 PR

- **Gateway 线程唤醒修复：** [#143307](https://github.com/NousResearch/hermes-agent/pull/143307)  
  计划在共享线程中授权发言者变化后正确接纳后台唤醒。

- **持久化交付物目录：** [#126425](https://github.com/NousResearch/hermes-agent/pull/126425)  
  解决图表、PDF、报告写入 scratch 后 24 小时被清理的问题，计划提供独立 durable deliverables 目录。

- **Desktop 本地模型入口修复：** [#143454](https://github.com/NousResearch/hermes-agent/pull/143454)  
  已有本地 Endpoint 配置时，不再错误展示本地模型安装引导。

- **跨 Provider 保留显式 reasoning effort：** [#143455](https://github.com/NousResearch/hermes-agent/pull/143455)  
  确保 CLI、会话或 Cron 显式设置的 reasoning 等级在 Provider fallback 后不丢失。

- **容器 Gateway 监督修复：** [#143022](https://github.com/NousResearch/hermes-agent/pull/143022)  
  只有注册过 Hermes Gateway 服务时才选择 s6 监督，避免普通 s6-overlay 容器误判。

### 整体推进程度

项目今日继续推进了委派机制、Gateway 生命周期、Desktop 配置、搜索能力、插件目录和模型路由等功能。  
但从数据看，**Bug 提交速度明显高于 PR 完成速度**，尤其 v0.22.5 发布后出现了大量与更新、会话和连接相关的问题，当前增长更像“广度扩张期”，尚未进入稳定收敛阶段。

---

## 4. 社区热点

### 4.1 统一 Gateway 管理所有本地会话

- **Issue：** [#134889 — Tracking: one gateway owns every local session](https://github.com/NousResearch/hermes-agent/issues/134889)
- **评论数：** 215
- **状态：** CLOSED
- **关键信息：**
  - 跟踪 PR [#106742](https://github.com/NousResearch/hermes-agent/pull/106742) 合并后的修复。
  - 目标是让 CLI、Desktop、Gateway 等所有本地入口由单一 Gateway 管理。
- **背后诉求：**
  - 用户希望建立清晰、统一的 Session Ownership 模型。
  - 避免多个 Profile、Desktop 和独立 Gateway 互相抢占会话。
- **判断：**
  - 这是当前项目最核心的架构主线之一。
  - Issue 虽已关闭，但今日仍有多项相邻回归，说明统一 Gateway 改造尚未完全稳定。

### 4.2 Bots 跨 Gateway 协作

- **Issue：** [#97681 — Let Bots collaborate across gateways](https://github.com/NousResearch/hermes-agent/issues/97681)
- **评论数：** 40
- **状态：** OPEN
- **诉求：**
  - 让拥有独立模型、工具、记忆和凭证的 Hermes Bots 跨机器协作。
  - 后续希望进一步支持跨所有者协作，同时保留控制权和凭证边界。
- **判断：**
  - 这是 Hermes 从个人 Agent 向 Agent 网络或多 Agent 协作平台演进的重要路线图信号。

### 4.3 Discord 异步委派完成但父任务不恢复

- **Issue：** [#139135](https://github.com/NousResearch/hermes-agent/issues/139135)
- **评论数：** 12
- **状态：** OPEN
- **影响：**
  - 后台 `delegate_task` 已完成，但 durable result 保持 pending。
  - 父 Agent 无法恢复，Discord 用户可能得不到最终回复。
- **相关开放修复：**
  - Gateway 线程唤醒修复：[PR #143307](https://github.com/NousResearch/hermes-agent/pull/143307)
  - 自动化唤醒 Profile 路由问题：[Issue #143447](https://github.com/NousResearch/hermes-agent/issues/143447)
- **判断：**
  - 属于 Agent 闭环可靠性的 P1 问题，应优先进入 v0.23.0 稳定性修复。

### 4.4 v0.22.x 更新后 Desktop/Gateway 通信异常

- **Issue：** [#143326](https://github.com/NousResearch/hermes-agent/issues/143326)
- **评论数：** 8
- **状态：** OPEN
- **场景：**
  - Windows App 与 Gateway 运行权限级别不一致。
  - 模型选择延迟，并伴随 Gateway communication error。
- **判断：**
  - 这是新版本发布后的典型迁移兼容性问题，可能同时影响普通用户与安装器路径。

### 4.5 统一 Gateway 下的交付物持久化

- **PR：** [#126425](https://github.com/NousResearch/hermes-agent/pull/126425)
- **状态：** OPEN
- **诉求：**
  - Deliverable Mode 生成的图表、PDF、报告目前写入 scratch。
  - Scratch 内容闲置 24 小时后会被删除，无法承担用户交付物目录。
- **判断：**
  - 对个人 AI 助手的文件产出非常重要，若成熟，可能成为 v0.23.0 的关键体验改进。

### 其他值得关注的社区议题

- 跨 Gateway Agent 协作：[Issue #97681](https://github.com/NousResearch/hermes-agent/issues/97681)
- MoA 参考模型伪造工具调用块：[Issue #139568](https://github.com/NousResearch/hermes-agent/issues/139568)
- Desktop 会话控制无法恢复 ownerless runtime ID：[Issue #107502](https://github.com/NousResearch/hermes-agent/issues/107502)
- `GET /v1/skills` 因残留参数持续返回 500：[Issue #142575](https://github.com/NousResearch/hermes-agent/issues/142575)
- Discord 角色授权用户按钮交互被拒：[Issue #143409](https://github.com/NousResearch/hermes-agent/issues/143409)

---

## 5. Bug 与稳定性

以下按严重程度排序。问题数量较多，且部分 Bug 直接影响消息交付、数据持久化或服务可用性。

### P0 / 关键架构风险

#### 统一 Gateway Session Ownership 回归链仍活跃

- **Tracking：** [Issue #134889](https://github.com/NousResearch/hermes-agent/issues/134889)
- Tracking Issue 已关闭，但相邻问题仍包括：
  - Desktop 启动时无法发现已运行的独立 Gateway，直到手动刷新：[Issue #143417](https://github.com/NousResearch/hermes-agent/issues/143417)
  - macOS 迁移后旧 LaunchAgent 重新抢占 Gateway：[Issue #143390](https://github.com/NousResearch/hermes-agent/issues/143390)
  - `gateway restart` 可能停掉唯一实例且找不到 Supervisor，最终无 Gateway：[Issue #143416](https://github.com/NousResearch/hermes-agent/issues/143416)
  - LOCAL Kanban `notify+wake` 无法进入 Session FIFO：[Issue #143268](https://github.com/NousResearch/hermes-agent/issues/143268)

**Fix PR：部分已有**

- s6 注册检测修复：[PR #143022](https://github.com/NousResearch/hermes-agent/pull/143022)
- 其余问题尚未见明确一一对应的开放 PR。

### P1 / 严重功能错误

#### Discord 异步子任务完成后父 Agent 不恢复

- **Issue：** [#139135](https://github.com/NousResearch/hermes-agent/issues/139135)
- **影响：** 任务虽然执行成功，但父会话收不到结果，用户侧表现为异步任务“消失”。
- **Fix PR：** 暂无明确完整修复；[PR #143307](https://github.com/NousResearch/hermes-agent/pull/143307) 覆盖部分线程唤醒场景。

### P2 / 高优先级稳定性问题

#### 1. 上下文压缩结果被静默丢弃

- **Issue：** [#143402](https://github.com/NousResearch/hermes-agent/issues/143402)
- **原因：** NULL message ID 执行 `int(None)` 失败。
- **影响：** 压缩已生成但无法写回，会话体积不下降，长会话风险持续累积。
- **Fix PR：** 未见明确修复。

#### 2. Gateway 持续向已关闭 WebSocket 发送消息，回复静默丢失

- **Issue：** [#143449](https://github.com/NousResearch/hermes-agent/issues/143449)
- **影响：** RuntimeError 重复刷屏，当前 turn 回复丢失。
- **Fix PR：** 未见明确修复。

#### 3. Desktop WebSocket 1006 断线后不自动重连

- **Issue：** [#143446](https://github.com/NousResearch/hermes-agent/issues/143446)
- **影响：** 新建会话等操作持续失败，必须重启 Desktop。
- **Fix PR：** 未见明确修复。

#### 4. Windows 聊天内更新导致 Gateway 启动中止

- **Issue：** [#143401](https://github.com/NousResearch/hermes-agent/issues/143401)
- **原因：** 未保护 `.update_output.txt` 删除操作，触发 `WinError 32`。
- **影响：** 更新后 Gateway 立即退出。
- **Fix PR：** 未见明确修复。

#### 5. 自动化唤醒永久遭遇 `admission_conflict`

- **Issue：** [#143447](https://github.com/NousResearch/hermes-agent/issues/143447)
- **原因：** Lane 创建时间早于当前 Profile route，自动唤醒被永久拒绝。
- **影响：** 后台完成通知、`watch_match`、异步委派结果可能永远无法送达。
- **相关 PR：** 可能有部分覆盖，当前未见明确一一对应修复。

#### 6. Desktop 无法归档 WebUI 会话

- **Issue：** [#143110](https://github.com/NousResearch/hermes-agent/issues/143110)
- **影响：** `state.db` 中存在的 `source='webui'` 会话返回 `not_found`。
- **Fix PR：** 未见明确修复。

#### 7. Desktop Profile 生命周期后会话控制无法恢复

- **Issue：** [#107502](https://github.com/NousResearch/hermes-agent/issues/107502)
- **影响：** Goal、Loop、Heartbeat 等控制不可用，并显示 owner-resolution 错误。
- **Fix PR：** 未见明确修复。

#### 8. Skills API 路由无条件返回 500

- **Issue：** [#142575](https://github.com/NousResearch/hermes-agent/issues/142575)
- **原因：** Collective Wisdom revert 后残留 `include_editorial` 参数。
- **影响：** Capability 广告可用，但实际请求全部失败。
- **Fix PR：** 未见明确修复。

#### 9. Windows 更新后 App 与 Gateway 通信异常

- **Issue：** [#143326](https://github.com/NousResearch/hermes-agent/issues/143326)
- **影响：** Gateway 通信错误、模型选择延迟。
- **Fix PR：** 未见明确修复。

#### 10. Gateway restart 可能导致主机无 Gateway

- **Issue：** [#143416](https://github.com/NousResearch/hermes-agent/issues/143416)
- **影响：** 唯一 Gateway 被停止，外部 Supervisor 声明与实际状态不一致。
- **相关 PR：** [PR #143022](https://github.com/NousResearch/hermes-agent/pull/143022) 可改善容器监督识别，但不能完全覆盖该场景。

#### 11. Desktop 后台活动和压缩消息丢失实时 lineage 状态

- **Issue：** [#143427](https://github.com/NousResearch/hermes-agent/issues/143427)
- **影响：** Profile/Session 激活前活动可能一直显示 idle。
- **Fix PR：** 未见明确修复。

#### 12. CLI `/new`、`/resume`、`/branch` 后实时推理消失

- **Issue：** [#143414](https://github.com/NousResearch/hermes-agent/issues/143414)
- **影响：** 新 Session 未重新同步 `show_reasoning`。
- **相关 PR：**
  - [PR #143455](https://github.com/NousResearch/hermes-agent/pull/143455) 处理 reasoning effort 在 Provider fallback 时的保留，但并非该显示状态同步问题的完整修复。

### P2 / 数据与功能回归

- Paste sanitizer 将 `12:00~12:15` 错误重写为 `12:12:15`，Desktop 与 CLI 均受影响：[Issue #143444](https://github.com/NousResearch/hermes-agent/issues/143444)
- Linux Desktop 默认窗口透明度导致应用以 6% opacity 启动：[Issue #143426](https://github.com/NousResearch/hermes-agent/issues/143426)
- 逗号小数区域设置下，Desktop 更新 handoff 以 exit 3 中止：[Issue #135183](https://github.com/NousResearch/hermes-agent/issues/135183)
- Alibaba Token Plan 静态目录重新加入已下线的 `qwen3.8-max-0902`，每轮请求 404 后静默 fallback：[Issue #119481](https://github.com/NousResearch/hermes-agent/issues/119481)
- 成功工具结果中的 `"error": null` 被误判为失败，Tracking Issue 已关闭：[Issue #91166](https://github.com/NousResearch/hermes-agent/issues/91166)

### 安全与权限风险

#### 1. 跨 Profile 子 Agent 错误继承群成员审批模式

- **Issue：** [#143399](https://github.com/NousResearch/hermes-agent/issues/143399)
- **风险：** 被路由到其他 Profile 的子 Agent 使用群成员审批模式，而非目标 Profile 自身的 `approvals.mode`。
- **Fix PR：** 未见明确修复。

#### 2. 多数 Adapter 未标记 Bot/App 作者

- **Issue：** [#143370](https://github.com/NousResearch/hermes-agent/issues/143370)
- **风险：** Bot、应用或 Webhook 发送者可能被当作普通人员，绕过针对 Agent 身份的策略。
- **Fix PR：** 未见明确修复。

#### 3. Secret redactor 误改普通内容并可能落盘占位符

- **Issue：** [#142574](https://github.com/NousResearch/hermes-agent/issues/142574)
- **风险：** `PASS=$VAR`、构建时间戳、普通 Authorization 文本等被误处理；占位符曾通过 write payload 写入磁盘。
- **Fix PR：** 未见明确修复。

#### 4. Discord pairing 用户按钮点击被角色鉴权提前拒绝

- **Issue：** [#143409](https://github.com/NousResearch/hermes-agent/issues/143409)
- **风险：** 已获 pairing approval 的用户可以聊天，但无法使用批准按钮、选择器等交互。
- **Fix PR：** 未见明确修复。

### 稳定性判断

- **高风险区域：** Gateway Session Ownership、WebSocket、异步委派回传、上下文压缩持久化。
- **发布风险：** v0.22.5 虽为稳定汇总版，但今日新增问题表明 Windows Desktop、更新流程和多 Profile 场景仍需谨慎。
- **建议：** v0.23.0 前安排专项稳定性版本，优先解决消息丢失、Gateway 无实例、压缩结果丢失及安全边界问题。

---

## 6. 功能请求与路线图信号

### 6.1 跨 Gateway Bot 协作

- **需求：** [#97681](https://github.com/NousResearch/hermes-agent/issues/97681)
- **目标：**
  - 当前先支持跨机器、跨 Gateway 协作。
  - 后续逐步支持跨所有者协作。
  - 每个 Bot 保留自己的模型、工具、记忆和凭证控制权。
- **路线图判断：高概率中长期核心方向**
  - 与 Hermes 的个人 Agent、委派、Profile 路由和工具隔离机制高度一致。
  - 但实现前需要先解决 Session Ownership、身份和权限边界。

### 6.2 Durable Deliverables

- **PR：** [#126425](https://github.com/NousResearch/hermes-agent/pull/126425)
- **目标：**
  - 将面向用户的 PDF、图表和报告从 scratch 中分离。
  - 提供不会被 24 小时清理策略删除的持久目录。
- **路线图判断：很可能进入后续版本**
  - 这是个人 AI 助手“交付可用产物”的基础能力。
  - 实现时应明确目录生命周期、隐私边界、跨设备可见性和导出方式。

### 6.3 更多 Provider 与 MCP 集成

- Reka Provider：[PR #143457](https://github.com/NousResearch/hermes-agent/pull/143457)
- Tripo Hosted MCP：[PR #143448](https://github.com/NousResearch/hermes-agent/pull/143448)
- LinkedCamp Plugin：[PR #143445](https://github.com/NousResearch/hermes-agent/pull/143445)
- Holographic Memory 更新：[PR #142449](https://github.com/NousResearch/hermes-agent/pull/142449)
- Model Router 更新：[PR #143452](https://github.com/NousResearch/hermes-agent/pull/143452)
- Limbic 0.8.0 目录升级：[Issue #142962](https://github.com/NousResearch/hermes-agent/issues/142962)
- Git Tasks 修复版：[PR #143043](https://github.com/NousResearch/hermes-agent/pull/143043)

**路线图判断：生态扩张持续加速**

项目正在从单一 Agent 框架向模型、工具、记忆、MCP 和业务插件平台发展。下一版本可能继续吸收插件目录更新，但维护者应同步加强：

- 固定版本和供应链安全；
- 插件权限声明；
- 安装前信任提示；
- 更新回滚；
- 目录条目的自动健康检查。

### 6.4 可配置 Web Search 深度与 Exa

- **PR：** [#143443](https://github.com/NousResearch/hermes-agent/pull/143443)
- **内容：**
  - 添加可选 Exa 配置。
  - 添加可选 `web_search depth`。
  - 默认关闭时保持现有请求行为。
- **路线图判断：中等概率进入下一版本**
  - 改动采用向后兼容的 opt-in 设计，合入风险相对较低。

### 6.5 多 Profile 后台任务可恢复下载

- **PR：** [#143453](https://github.com/NousResearch/hermes-agent/pull/143453)
- **目标：** 保留被中断下载的进度。
- **路线图判断：体验型改进**
  - 对多 Profile 或大型插件/模型下载有实际价值，但优先级低于 Gateway 和消息可靠性修复。

---

## 7. 用户反馈摘要

### 主要真实使用场景

1. **Windows Desktop + 独立 Gateway**
   - 用户将 Desktop 与 Gateway 部署在不同权限级别或通过多 Profile 管理。
   - 更新后出现连接失败、权限不一致和模型选择延迟。
   - 相关反馈：[Issue #143326](https://github.com/NousResearch/hermes-agent/issues/143326)

2. **Discord 群聊/线程中的异步子任务**
   - 用户期望后台委派完成后父 Agent 自动恢复，并返回最终结果。
   - 当前出现任务完成但回复不再送达的问题。
   - 相关反馈：[Issue #139135](https://github.com/NousResearch/hermes-agent/issues/139135)

3. **长期运行、多 Profile 的本地 Agent**
   - 用户希望 Hermes Desktop、CLI 和 Gateway 共享稳定会话状态。
   - 当前 Profile 切换、后台活动、归档、压缩和通知之间存在状态不一致。
   - 相关反馈：[Issue #107502](https://github.com/NousResearch/hermes-agent/issues/107502)

4. **生成持久化用户交付物**
   - 用户希望 PDF、图表和报告能够长期保留，而不是 24 小时后从 scratch 消失。
   - 相关需求：[PR #126425](https://github.com/NousResearch/hermes-agent/pull/126425)

5. **本地模型与多种 Provider**
   - 用户既希望降低隐私风险使用本地模型，也使用 Alibaba 等云端 Token Plan。
   - 当前目录状态陈旧会导致无效模型选择和静默 fallback。
   - 相关反馈：[Issue #119481](https://github.com/NousResearch/hermes-agent/issues/119481)

### 满意点

- PR #143423 改善了 Delegation 配置持久化，减少“切换后实际工具能力未变化”的问题：[PR #143423](https://github.com/NousResearch/hermes-agent/pull/143423)
- v0.22.5 将约 81 个 PR 汇总成正式稳定发布，覆盖面广，便于 CLI、Desktop、Docker 和 Cloud 用户统一升级。
- 项目对高风险问题有较明确的 P0/P1 标签、Tracking Issue 和 Sweeper 分类，说明社区具备一定的治理意识。
- 依赖升级 PR 采用独立提交和可回滚策略，降低了批量升级风险：[PR #143456](https://github.com/NousResearch/hermes-agent/pull/143456)。

### 不满意点与核心痛点

- **升级后不确定性高：** 用户担心从旧版更新到 v0.22.x 后出现 Gateway 通信、Windows 启动或多 Profile 回归。
- **异步任务缺乏可靠性保证：** 子任务完成不等于父 Agent 恢复，用户难以判断任务是否真正结束。
- **状态归属复杂：** Session、Profile、Gateway、WebSocket transport 之间的 ownership 不稳定。
- **数据可能静默丢失：** 上下文压缩结果无法写回、WebSocket 已关闭但回复丢失，均缺少显式失败提示。
- **配置和目录存在陈旧状态：** 本地模型、静态模型 ID、旧 LaunchAgent、旧路由和旧权限参数可能在新版本中继续生效。

---

## 8. 待处理积压

### 8.1 长期高评论、仍未关闭的核心 Issue

#### 跨 Gateway Bot 协作

- **Issue：** [#97681](https://github.com/NousResearch/hermes-agent/issues/97681)
- **评论数：** 40
- **创建时间：** 2026-08-29
- **风险：**
  - 需求规模较大，涉及身份、权限、消息路由和跨所有权协作。
  - 若缺少阶段性设计，容易长期停留在讨论状态。

#### Desktop ownerless runtime ID 无法恢复

- **Issue：** [#107502](https://github.com/NousResearch/hermes-agent/issues/107502)
- **创建时间：** 2026-09-10
- **评论数：** 6
- **风险：**
  - 与当前统一 Gateway/Profile Session 架构高度相关。
  - 可能不是单点 Bug，而是 Session Ownership 模型尚未收敛的信号。

#### 静态 Alibaba 模型目录无法正确老化

- **Issue：** [#119481](https://github.com/NousResearch/hermes-agent/issues/119481)
- **创建时间：** 2026-09-22
- **评论数：** 3
- **风险：**
  - 影响所有相关 Provider 的模型选择器与缓存目录。
  - 可能演变为更广泛的 catalog 与 live provider 一致性问题。

#### Desktop 更新在逗号小数 locale 下失败

- **Issue：** [#135183](https://github.com/NousResearch/hermes-agent/issues/135183)
- **创建时间：** 2026-10-08
- **评论数：** 3
- **风险：**
  - 影响意大利语等使用逗号小数格式的 Linux 环境。
  - 当前仍未见对应修复 PR。

### 8.2 当前高风险开放 PR

#### Durable Deliverables 目录

- **PR：** [#126425](https://github.com/NousResearch/hermes-agent/pull/126425)
- **创建时间：** 2026-09-28
- **风险：**
  - 存放用户交付文件，涉及隐私、清理策略和生命周期。
  - 需要明确长期保存是否默认启用，以及如何避免敏感文件无限积累。

#### WhatsApp 安装遵守 lazy-install 安全策略

- **PR：** [#87264](https://github.com/NousResearch/hermes-agent/pull/87264)
- **创建时间：** 2026-08-15
- **风险：**
  - 涉及 Gateway 启动时是否允许自动执行 npm。
  - 对安全策略和企业部署影响较大，不宜长期悬而未决。

### 8.3 今日新增且缺少明确 Fix PR 的关键问题

建议维护者优先补齐对应 PR、认领人或里程碑：

1. WebSocket 断线后回复丢失：[Issue #143449](https://github.com/NousResearch/hermes-agent/issues/143449)
2. Desktop WebSocket 1006 后不重连：[Issue #143446](https://github.com/NousResearch/hermes-agent/issues/143446)
3. 上下文压缩结果静默丢弃：[Issue #143402](https://github.com/NousResearch/hermes-agent/issues/143402)
4. 自动化唤醒永久 `admission_conflict`：[Issue #143447](https://github.com/NousResearch/hermes-agent/issues/143447)
5. Windows 聊天内更新导致 Gateway 退出：[Issue #143401](https://github.com/NousResearch/hermes-agent/issues/143401)
6. `gateway restart` 可能留下无 Gateway 主机：[Issue #143416](https://github.com/NousResearch/hermes-agent/issues/143416)
7. WebUI 会话无法归档：[Issue #143110](https://github.com/NousResearch/hermes-agent/issues/143110)
8. Skills API 返回 500：[Issue #142575](https://github.com/NousResearch/hermes-agent/issues/142575)
9. Secret redactor 误处理普通内容：[Issue #142574](https://github.com/NousResearch/hermes-agent/issues/142574)
10. 跨 Profile 委派继承错误审批模式：[Issue #143399](https://github.com/NousResearch/hermes-agent/issues/143399)

---

## 今日结论

Hermes Agent 当前呈现出明显的“双速状态”：  
一方面，委派模式、插件生态、模型 Provider、MCP、搜索和交付物能力快速扩张；另一方面，统一 Gateway Runtime 引出的 Session Ownership、异步结果回传和连接恢复问题仍在密集出现。

**项目健康度评估：中等偏高，但短期稳定性承压。**

- **开发活跃度：高**
- **版本发布节奏：正常**
- **功能推进：明显**
- **PR 合入效率：偏低**
- **Bug 收敛程度：不足**
- **安全与权限风险：需重点关注**
- **下一版本建议：** 以 Gateway、Session、WebSocket、异步委派、压缩持久化和 Windows 更新稳定性为核心建立专项修复批次，并减少大范围依赖或插件更新与关键架构修复同时落地的风险。

</details>

<details>
<summary><strong>OpenHuman</strong> — <a href="https://github.com/tinyhumansai/openhuman">tinyhumansai/openhuman</a></summary>

# OpenHuman 项目动态日报

**统计日期：2026-10-23**  
**数据范围：过去 24 小时 GitHub Issues / Pull Requests 更新**  
**项目健康度判断：活跃且偏高风险，工程推进明显，但合并吞吐与安全治理仍需关注。**

---

## 1. 今日速览

过去 24 小时共更新 **17 条 Issues**（新开/活跃 10 条、关闭 7 条）和 **50 条 PRs**（待合并 48 条、已合并/关闭 2 条），但 **无新版本发布**。  
当前开发重点集中在三个方向：**安全与沙箱授权重构、Agent/推理基础设施拆分、认证与运行时稳定性修复**。  
PR 数量远高于已关闭或合并数量，当前仓库存在较明显的“修复和重构并行、集成验证尚未完成”的积压特征。  
安全相关工作持续推进，包括 TinySecurity 接入、shell 分类器恢复、沙箱进程槽位调整，以及凭据泄露防护。  
综合判断：项目开发活跃度很高，但发布节奏偏慢，且 48 条待合并 PR 表明合并、测试和回归控制是下一阶段的主要瓶颈。

---

## 2. 版本发布

过去 24 小时**无新版本发布**，暂无 Release Notes、破坏性变更或升级迁移事项。

---

## 3. 项目进展

### 已关闭的重要 Issue

#### 1. Sentry 跨产品接入追踪完成阶段性收口

- **Issue：#8104**  
  [Tracker: Sentry across all products](https://github.com/tinyhumansai/openhuman/issues/8104)

该 Issue 已关闭，目标是停止 CI 中吞掉认证 token 失败，并为各生产产品配置和验证独立的 Sentry 项目。虽然追踪项被关闭，但后续仍拆出了更具体的治理任务，包括：

- 统一 release 名称；
- 明确 token owner 和轮换流程；
- 清理未使用 token；
- 验证 OpenHuman release 与 commit 的关联关系。

这说明 Sentry 基础接入工作告一段落，但**凭据治理和发布可观测性仍未完全结束**。

#### 2. 存储驱动静态化重构完成阶段性收口

- **Issue：#8131**  
  [Epic: tinystoragedrivers as a hardened static primitive](https://github.com/tinyhumansai/openhuman/issues/8131)

该 P2 重构 Issue 已关闭，目标是按照 `tinybus`、`tinytools` 等模块的设计，将 `tinystoragedrivers` 拆分为更清晰的静态基础设施：

- 类型 crate；
- API trait crate；
- documents/streams 等 primitive crate；
- blob/file、queue、secrets 等能力；
- 将具体 engine 作为 feature 管理；
- 补充边界和安全测试。

Issue 关闭代表方向和范围已经确定，后续重点应落在实际迁移、重复测试清理和调用方兼容上。

#### 3. Agent 测试归属重构完成阶段性收口

- **Issue：#8089**  
  [Epic: test ownership](https://github.com/tinyhumansai/openhuman/issues/8089)

目标是明确测试所有权：

- OpenHuman 测试 host composition、审批、安全、租户隔离、适配器、RPC wire contract 和数据兼容性；
- 由 `tiny*` 模块负责的模块行为测试回到对应仓库；
- 删除重复测试和仅用于提高覆盖率的填充测试。

这有助于降低主仓库测试膨胀，但也意味着跨仓库 CI 和依赖版本管理的重要性上升。

#### 4. 推理代码从 host 中移出

- **Issue：#8092**  
  [Epic: move inference/ out of the host](https://github.com/tinyhumansai/openhuman/issues/8092)

该重构 Issue 已关闭，涉及约 **13.8k 行非测试 inference 代码**及 **11.7k 行测试代码**。目标是将会话、模型、provider 等通用推理能力迁移到 `tinyinference`、`tinyagents` 和 `tinyjuice`，减少 OpenHuman host 的职责范围。

该方向属于架构降复杂度，但后续需要关注：

- API 兼容性；
- provider 行为是否一致；
- 错误类型和认证边界是否变化；
- Chottu 等下游集成是否完成迁移。

### 今日仍开放、但推进中的关键工作

#### 1. TinySecurity 接入是当前最重要的架构主线

- **Issue：#7328**  
  [Security、policy、approvals 和 sandboxing 统一到 TinySecurity bus](https://github.com/tinyhumansai/openhuman/issues/7328)
- **PR：#7331**  
  [vendor TinySecurity and migrate filesystem authorization](https://github.com/tinyhumansai/openhuman/pull/7331)

该工作希望将授权、redaction、egress 和 audit 等安全决策统一迁移至 TinySecurity 原生模块，同时由 OpenHuman 保留：

- host adapter；
- approval 流程；
- sandbox 组合；
- 执行生命周期。

今日仍有更新，显示该主线尚未完成。其价值在于降低安全逻辑分散程度，但迁移期间需要重点验证**默认拒绝策略、模块不可用时的行为和审计一致性**。

#### 2. 子 Agent 架构继续收缩

- **Issue：#8088**  
  [统一 async spawn_subagent，精简 tinyagents](https://github.com/tinyhumansai/openhuman/issues/8088)

目标是保留 OpenHuman 实际需要的 Agent 能力，移除 host 中大量面向团队、图工作流、并行 fan-out 和每 Agent worktree 的遗留机制。  
这属于面向实际产品能力的架构瘦身，预计有助于降低维护面，但短期内会增加 Agent 生命周期和 RPC 接口的回归风险。

#### 3. 存储后端运行时隔离

- **PR：#8211**  
  [使用独立 runtime 打开 storage backend，避免 blocking bridge 死锁](https://github.com/tinyhumansai/openhuman/pull/8211)

该 PR 将 `storage::open` 放到独立的进程级 Tokio runtime 上，避免 MongoDB 等后端的连接池 worker、monitor 和 socket 依赖 host runtime 是否继续调度。  
这是针对潜在永久性阻塞或死锁的重要稳定性修复，但当前仍处于待合并状态。

---

## 4. 社区热点

> 当前数据中，PR 的评论数多为 `undefined`，因此以下主要依据更新频率、优先级、Issue 评论数和变更范围判断活跃度。

### 讨论最活跃的 Issue

#### #7328：安全能力统一到 TinySecurity

- [Issue #7328](https://github.com/tinyhumansai/openhuman/issues/7328)
- **评论：20**
- **状态：Open**
- **涉及领域：security-work、rust-core、sandboxing**

这是今日评论数最高的 Issue。背后诉求是将安全、策略、审批、沙箱和审计从多个层次收拢到统一模块，降低策略分散和行为不一致的问题。  
其潜在影响覆盖所有工具调用和文件访问路径，因此虽然优先级未必标为 P0，却是项目当前最关键的架构议题之一。

### 其他高活跃度 PR

#### #8212：修复 cron 提醒的 `NO_REPLY` 行为

- [PR #8212](https://github.com/tinyhumansai/openhuman/pull/8212)

该 PR 试图修复定时任务中“模型返回 `NO_REPLY` 时提醒被错误吞掉”的问题，并区分：

- 普通提醒和周期性消息：必须发送；
- 明确选择 conditional job 且允许静默的任务：才允许 `NO_REPLY`。

这反映了用户对自动化 Agent 的核心期待：**定时任务不能因为模型输出协议细节而丢失用户需要的消息**。

#### #8236：keychain 读取失败不再清空认证配置

- [PR #8236](https://github.com/tinyhumansai/openhuman/pull/8236)

该 PR 处理 keychain 被锁定、拒绝或不可用时的误判问题。原先系统可能将“无法读取”误认为“没有条目”，进而删除仅存在于 keychain 的认证 profile。  
这是数据安全与用户体验兼具的修复，优先级应高于普通 bug 修复。

#### #8211：修复 storage backend 打开时死锁

- [PR #8211](https://github.com/tinyhumansai/openhuman/pull/8211)

涉及底层异步运行时和数据库客户端连接，关注点不是普通 API 错误，而是可能导致 host 整体卡死的基础设施问题。  
该 PR 更新频繁且修复范围较大，建议视为当前稳定性重点。

#### #8235：恢复生产 shell classifier

- [PR #8235](https://github.com/tinyhumansai/openhuman/pull/8235)

此前 shell 分类器被替换为较短列表，导致生产环境中的命令分类与既有测试语料不一致。该 PR 试图恢复旧行为，并改进对环境变量和 launcher 的识别。  
其背后诉求是：**安全分类器必须可回归、可解释，不能因为重构而悄然改变命令授权结果**。

#### #7331：TinySecurity 文件系统授权迁移

- [PR #7331](https://github.com/tinyhumansai/openhuman/pull/7331)

这是当前安全重构的核心实现 PR。它不是普通修复，而是将文件系统授权决策迁移到独立安全模块，涉及默认安全边界和失败模式，需要较多集成测试。

### 新开热点 Issue

#### #8280：嵌入式 Runtime 启动时 TinyMCP 不可用

- [Issue #8280](https://github.com/tinyhumansai/openhuman/issues/8280)

这是 2026-10-23 新开的 Issue，当前评论数已达 1，且直接描述为“每个 MCP call 都失败”。  
问题表现为：在 `openhuman-embed Runtime + AgentSpec::mcp(...)` 场景下，TinyMCP 0.20.1 启动失败，所有调用立即返回 module unavailable。  
这属于**嵌入式集成的关键阻断问题**，可能直接影响外部宿主产品的 Agent 工具能力。

---

## 5. Bug 与稳定性

以下按影响范围和潜在严重程度排序。

### P1 / 高优先级

#### 1. 嵌入式 Runtime 下 TinyMCP 全部不可用

- [Issue #8280](https://github.com/tinyhumansai/openhuman/issues/8280)
- **状态：Open**
- **影响：高**
- **复现版本：commit `74d2a796`，TinyMCP 0.20.1**
- **现象：** MCP 工具调用约 0 秒内失败，返回 `TinyMCP module is unavailable`
- **fix PR：暂无明确对应 PR**

这是当前最明确的新功能阻断问题之一。嵌入式 Runtime 场景与桌面/主 host 场景不同，可能遗漏了模块启动配置或生命周期处理。

#### 2. 认证 keychain 读取错误可能导致 profile 被清除

- [PR #8236](https://github.com/tinyhumansai/openhuman/pull/8236)
- **状态：待合并**
- **影响：高**
- **已有 fix PR：是**

系统此前可能把 keychain 读取失败当作空数据处理，导致只存储于 keychain 的认证信息被误删。该问题同时涉及**凭据丢失、用户配置损坏和认证中断**。

#### 3. storage backend 打开可能在 host runtime 上造成死锁

- [PR #8211](https://github.com/tinyhumansai/openhuman/pull/8211)
- **状态：待合并**
- **影响：高**
- **已有 fix PR：是**

尤其是 MongoDB 等后端的连接池和异步 worker 若与 host runtime 相互阻塞，可能造成应用长期无响应。该问题虽未单独列出 Issue，但 PR 描述表明其属于基础设施级稳定性风险。

### P2

#### 4. Docker/沙箱命令错误占用 shell process slot

- [Issue #8317](https://github.com/tinyhumansai/openhuman/issues/8317)
- [PR #8318](https://github.com/tinyhumansai/openhuman/pull/8318)
- **状态：已有对应修复 PR，待合并**
- **影响：中高**

Docker 命令无法让出当前进程槽位，却提前占用每轮四个 shell 槽位之一，可能导致本轮后续命令被错误判定为达到并发上限。  
修复方式是在 backend resolve 完成后再决定是否预留槽位。

#### 5. 本地 AI 连接验证失败后设置未恢复

- [Issue #8172](https://github.com/tinyhumansai/openhuman/issues/8172)
- **状态：Open**
- **已有 fix PR：数据中未见明确对应 PR**

LM Studio、OMLX 和 Ollama 的连接验证失败时，core 可能已经写入 `local_ai` 设置，但没有可靠回滚，导致用户配置指向不可用或错误的运行时。  
这是配置一致性和恢复能力问题，建议尽快补齐修复 PR 和跨 runtime 测试。

#### 6. 沙箱 grant 可能包含 credential store

- [PR #8293](https://github.com/tinyhumansai/openhuman/pull/8293)
- **状态：待合并**
- **已有 fix PR：是**

如果模块 grant 授予 `$HOME` 或 `/`，则可能间接覆盖 `~/.ssh` 等凭据目录。单纯禁止 forbidden root 不足以防止这种情况。  
该问题属于安全边界漏洞，应在合并前确认所有 primitive 和 resolver 路径均覆盖。

#### 7. 恢复线程仍使用旧 system prompt

- [Issue #8208](https://github.com/tinyhumansai/openhuman/issues/8208)
- **状态：Closed**
- **影响：中**
- **已有修复证据：Issue 已关闭，但当前展示数据未列出具体修复 PR**

当 integrations backend 不存在时，恢复线程可能继续使用旧 prompt，即使 Agent 已经要求刷新 prompt。该问题会造成长期上下文错误或提示词版本不一致。

#### 8. ephemeral route 缺少 provider options 和 reasoning effort

- [Issue #8206](https://github.com/tinyhumansai/openhuman/issues/8206)
- **状态：Closed**
- **影响：中**
- **已有修复证据：Issue 已关闭，但当前未列出对应 PR**

临时 OpenAI-compatible endpoint 无法传递 provider routing preference 和 reasoning effort，导致调用统一回退到默认的按价格排序策略。  
这可能造成成本、延迟和模型行为不符合预期。

### P3 / 低优先级或测试加固

#### 9. web-chat 中 provider 错误可能泄露 API key

- [PR #8301](https://github.com/tinyhumansai/openhuman/pull/8301)
- **状态：待合并**
- **已有 fix PR：是**
- **影响：安全相关，建议提升优先级**

测试目标是确保 provider 返回错误中的 key 不会进入聊天文案或 copy 参数。即使标记为 P3，只要错误详情确实可能包含凭据，也应按高风险安全问题处理。

#### 10. inference credential lookup 错误回显

- [PR #8292](https://github.com/tinyhumansai/openhuman/pull/8292)
- **状态：待合并**
- **已有 fix PR：是**

底层凭据查询错误可能被附加到用户可见的 guidance 中，存在暴露内部 key 或敏感配置的风险。

#### 11. BYO 401 被错误视为 session expired

- [PR #8298](https://github.com/tinyhumansai/openhuman/pull/8298)
- **状态：待合并**
- **已有 fix PR：是**

原测试断言过弱，无法真正保证 BYO provider 返回 401 时 session 不会被错误标记为过期。该问题可能造成用户被无意义地重新认证。

#### 12. 沙箱 classifier 行为变化

- [PR #8235](https://github.com/tinyhumansai/openhuman/pull/8235)
- **状态：待合并**
- **已有 fix PR：是**

shell 命令分类结果发生变化，可能影响审批、允许/拒绝策略和审计日志。必须确保生产行为与既有安全语料保持一致。

#### 13. ephemeral route 日志刷屏

- [Issue #8207](https://github.com/tinyhumansai/openhuman/issues/8207)
- **状态：Closed**
- **影响：低至中**

单轮对话可能产生约 106 条相同的 route 信息日志，降低可观测性价值。该问题已关闭，说明已采取配置或日志级别控制措施。

---

## 6. 功能请求与路线图信号

### 6.1 Agent 启动和子 Agent 统一

- [Issue #8088](https://github.com/tinyhumansai/openhuman/issues/8088)
- [PR #7331](https://github.com/tinyhumansai/openhuman/pull/7331) 所属安全架构主线

统一 `async spawn_subagent`，并将 goals、session 和 tools 上移到统一层，可能成为下一阶段 Agent runtime 的核心路线。  
从现有 PR 和 Issue 看，方向明确，但短期不一定进入发布版本，仍取决于迁移范围和下游兼容。

### 6.2 Memory queue 的 LLM 并发可配置

- [Issue #6983](https://github.com/tinyhumansai/openhuman/issues/6983)

当前 `llm_permits` 固定为单任务，大规模首次 ingest 在云端摘要模型上可能耗时数天。  
用户诉求是让 `tinymemory` 能将 `QueueConfig.llm_permits` 传递给运行时，从而支持更高吞吐。  
这是一个明确的生产效率需求，但目前没有对应 PR 被展示，预计仍处于待规划状态。

### 6.3 Embedded turn steering 支持附件

- [Issue #8210](https://github.com/tinyhumansai/openhuman/issues/8210)

当前 `TurnSteering::steer(text)` 只支持文本，而运行中的 Turn 已具备文件和 `HostAttachment` 能力。  
用户希望在 Agent 执行过程中注入图片、文件等实际用户附件。  
这属于嵌入式 API 能力扩展，短期落地概率低于安全和稳定性修复，但与 Agent 的多模态交互场景直接相关。

### 6.4 Sentry 统一 release 格式和 token 生命周期

- [Issue #8202](https://github.com/tinyhumansai/openhuman/issues/8202)
- [Issue #8203](https://github.com/tinyhumansai/openhuman/issues/8203)
- [Issue #8201](https://github.com/tinyhumansai/openhuman/issues/8201)

这些任务将发布格式统一为：

```text
<product>@<version>+<commit>
```

并补充：

- token owner；
- 轮换 runbook；
- 未使用 token 撤销；
- 缺少 token 时 release fail-fast；
- commit association 验证；
- source-resolved error 记录。

这些内容更可能作为近期基础设施 PR 合并，而非用户可见功能。

### 6.5 Shell process slot 语义调整

- [Issue #8317](https://github.com/tinyhumansai/openhuman/issues/8317)
- [PR #8318](https://github.com/tinyhumansai/openhuman/pull/8318)

该调整体现了 shell 执行模型正在从“所有命令先占槽”转向“根据 backend 是否允许后台运行决定是否占槽”。  
如果测试覆盖充分，可能进入近期修复版本；如果涉及 API 或并发语义变化，则需在 release notes 中明确说明。

---

## 7. 用户反馈摘要

### 主要痛点

#### 1. 嵌入式 Runtime 的 MCP 能力可能完全不可用

在 `openhuman-embed` 场景中，MCP 调用快速失败，说明嵌入式产品集成存在启动或模块配置问题。对于依赖外部工具的 Agent，这是阻断性体验。

#### 2. 定时提醒可能被静默丢弃

`NO_REPLY` 处理不当会让本应送达的提醒消失，用户可能错过任务结果或周期性通知。该问题直接影响自动化功能可信度。

#### 3. 认证和本地 runtime 配置容易进入不可恢复状态

包括：

- keychain 暂时不可读时被当作空配置；
- 本地 AI 连接失败后设置未回滚；
- provider 401 被错误视为 session 过期。

这些问题的共同影响是：用户需要重复登录、重新配置，且可能遭遇认证信息丢失。

#### 4. 安全重构带来的行为兼容风险

shell classifier 变化、sandbox grant 解析和 TinySecurity 迁移，都可能改变原先的命令分类和授权结果。  
用户和项目维护者都关心：重构后是否仍然遵循原有的安全边界，以及模块不可用时是否安全失败。

#### 5. 推理路由和 provider 配置缺少可见性

临时 endpoint 无法携带 provider options 和 reasoning effort，可能导致：

- 默认选择低价但更慢的 provider；
- 模型行为与配置不一致；
- 成本和延迟不可预测；
- 日志中大量重复 route 信息掩盖真正错误。

### 满意度与产品成熟度判断

从现有反馈看，用户对 OpenHuman 的主要期待已经超越“能否调用模型”，转向：

- 定时任务是否可靠；
- MCP 和嵌入式 Runtime 是否可用；
- 安全策略是否透明；
- 凭据和本地配置是否安全；
- 大规模记忆处理是否高效。

整体功能方向较完整，但基础设施迁移和安全重构尚未完全收敛，当前成熟度更接近**内部测试和集成收敛期**，而非稳定发布期。

---

## 8. 待处理积压

### 8.1 50 条 PR 更新、48 条待合并

过去 24 小时待合并 PR 数量远高于已合并/关闭数量，说明合并吞吐是当前主要瓶颈。  
建议维护者优先处理：

1. 安全和凭据泄露修复；
2. TinyMCP 嵌入式启动故障；
3. keychain 数据保护；
4. storage runtime 死锁；
5. shell/sandbox 并发与权限边界；
6. 其余测试和重构清理。

### 8.2 TinySecurity 迁移仍未完成

- [Issue #7328](https://github.com/tinyhumansai/openhuman/issues/7328)
- [PR #7331](https://github.com/tinyhumansai/openhuman/pull/7331)

这是长期架构任务，涉及授权、审批、沙箱、审计和 fallback 行为。需要明确迁移阶段、每阶段的验收标准和回滚方案。

### 8.3 Agent 架构重构仍处于高风险阶段

- [Issue #8088](https://github.com/tinyhumansai/openhuman/issues/8088)

子 Agent 机制、session、tools 和 host 职责正在重新划分。该类重构容易引发隐性兼容问题，尤其是：

- Agent 生命周期；
- worktree 和权限；
- MCP 工具传递；
- 异步取消；
- 多 Agent 并发；
- 错误恢复。

### 8.4 记忆队列并发配置需求长期未响应

- [Issue #6983](https://github.com/tinyhumansai/openhuman/issues/6983)

该 Issue 自 2026-10-03 创建，已有 7 条评论，但当前没有看到对应 PR。对云端摘要和大批量首次 ingest 场景而言，这是明确的吞吐瓶颈，建议尽快给出技术方案或拆分实施任务。

### 8.5 Embedded MCP 故障尚无明确修复路径

- [Issue #8280](https://github.com/tinyhumansai/openhuman/issues/8280)

这是今日新出现且影响较大的问题，应补充：

- TinyMCP 启动日志；
- embedded runtime 配置路径；
- 版本兼容性矩阵；
- 最小复现仓库或测试；
- 对桌面 Runtime 是否有同样问题的确认。

### 8.6 安全 Issue 中部分高风险事项仍开放

建议重点跟踪：

- [Issue #8317](https://github.com/tinyhumansai/openhuman/issues/8317)：沙箱 backend 与 process slot；
- [Issue #8172](https://github.com/tinyhumansai/openhuman/issues/8172)：本地 AI 设置回滚；
- [PR #8293](https://github.com/tinyhumansai/openhuman/pull/8293)：credential store grant；
- [PR #8301](https://github.com/tinyhumansai/openhuman/pull/8301)：provider 错误中的 API key；
- [PR #8292](https://github.com/tinyhumansai/openhuman/pull/8292)：凭据查询错误回显。

---

## 总结

OpenHuman 今日处于**高强度架构重构与稳定性修复并行期**。安全模块统一、Agent 能力瘦身、存储与推理基础设施拆分构成中长期主线；与此同时，嵌入式 MCP 故障、认证配置丢失、storage 死锁、沙箱槽位和凭据泄露风险需要尽快收敛。

当前没有新版本发布，且待合并 PR 数量很高。建议项目下一阶段以“**安全修复优先、核心回归测试补齐、合并吞吐提升、发布可观测性完善**”为主线，避免在大规模重构尚未稳定前继续扩大待合并变更规模。

</details>

---
*本日报由 [Big Model Radar](https://github.com/96loveslife/big_model_radar) 自动生成。*
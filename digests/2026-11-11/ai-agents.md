# OpenClaw 生态日报 2026-11-11

> Issues: 305 | PRs: 500 | 覆盖项目: 8 个 | 生成时间: 2026-11-11 05:35 UTC

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

**统计日期：2026-11-11（过去 24 小时）**  
**项目：** [openclaw/openclaw](https://github.com/openclaw/openclaw)

---

## 1. 今日速览

- 过去 24 小时共有 **305 条 Issue 更新**，其中 **218 条新开或活跃、87 条关闭**；另有 **500 条 PR 更新**，其中 **310 条待合并、190 条已合并或关闭**，开发吞吐很高。
- 项目今天发布 **v2026.11.3**，重点修复子智能体隐私结果泄漏和取消后任务交接可靠性，属于代理编排与安全边界方向的重要修复。
- 今日讨论焦点集中在 **Windows 启动严重变慢、Claude/Codex 续接失效、会话状态不一致、自动化权限与回退链**，其中多个问题被标记为 P0/P1 或发布阻断项。
- PR 侧继续推进 **iOS 安全、Web UI 可用性、Telegram 交互组件、模板/插件原生安装、Agent 能力治理和 CI 基础设施**；不过大量 PR 仍处于“等待维护者审查/作者补证”状态。
- 综合判断：**项目活跃度很高、发布节奏稳定，但稳定性与状态机复杂度正在形成明显积压**。功能创新速度较强，而 Windows 性能、会话一致性、Provider 续接及自动化授权是当前最需要维护者集中治理的风险面。

---

## 2. 版本发布

### [v2026.11.3](https://github.com/openclaw/openclaw/releases/tag/v2026.11.3)

#### 核心更新

- **私有子任务结果不再进入流式聊天回复**
  - 修复子智能体完成后，其内部结果可能被直接带入公开流式回复的问题。
  - 这能降低内部上下文、工具输出或敏感信息意外暴露给最终用户及频道的概率。
  - 对应贡献：#188490；作者 @fuller-stack-dev。

- **取消子任务后的可靠交接**
  - 父智能体取消一个子任务后，可以继续把工作移交给替代任务。
  - 修复目标是避免已取消子任务残留状态继续影响父任务，降低“任务已取消但会话仍被卡住”的概率。

#### 破坏性变更与迁移注意事项

- 摘要中没有明确列出正式的 breaking-change 清单。
- 但“私有任务结果不再流入聊天回复”属于**可见行为变化**：依赖子智能体内容自动出现在父级流式回复中的用户或插件，需要确认是否应通过显式 announce、消息发送或结果转发机制获取。
- 如果业务依赖取消后立即复用同一子任务槽位，建议升级后重新验证父子任务交接、取消竞态和最终回复可见性。

### [v2026.9.37](https://github.com/openclaw/openclaw/releases/tag/v2026.9.37)

- 这是从已退役维护线发布的 **Gateway-only `extended-stable`** 版本。
- 内容以 2026 年 9 月末的 OpenClaw 为基础，额外合入关键安全更新、可靠性与性能修复，以及部分新模型支持。
- 适合仍停留在 9 月版本线、需要安全补丁但暂不能迁移到 11 月版本线的用户。
- 注意：维护者已明确该分支属于退役维护线，不宜将其视为长期主版本，建议制定向当前稳定版迁移的计划。

---

## 3. 项目进展

### 3.1 今日已关闭的重要 PR

> 下列 PR 均已关闭；结合描述判断，多数是修复已经进入当前代码路径、重复 PR 被关闭，或配套工作已经完成。是否已经进入具体发布包，仍应以 release commit 和合并提交为准。

- **停止 Worker 结果在共享 Git 存储中持续累积**  
  [#197047](https://github.com/openclaw/openclaw/pull/197047)  
  清理已完成 Worker 工作区产生的不可达 Git pack 和 loose object，避免每次任务完成都推高共享 clone 的存储及对象查询成本。该方向直接改善长期运行实例的磁盘占用和 Git 操作性能。

- **读取 Claude Code 的 thinking 与 fast mode 能力**  
  [#197033](https://github.com/openclaw/openclaw/pull/197033)  
  后端不再依赖模型名称硬编码推测能力，而是采用 Claude Code 初始化结果中的 `supportsThinkingOff`、`supportsFastMode` 等信息，使思考预算及快速模式与真实运行时能力对齐。

- **Android Store runner 表达式兼容 Boat 后端路由**  
  [#197045](https://github.com/openclaw/openclaw/pull/197045)  
  修复 CI 对 Android Store runner 的静态校验，使测试能够兼容 Boat 和 fallback runner 的选择逻辑。

- **Control UI Agent Settings E2E fixture 同步**  
  [#197036](https://github.com/openclaw/openclaw/pull/197036)  
  Gateway 开始只暴露声明支持的方法后，12 个 Agent Settings 浏览器测试无法访问对应控件；本次补齐测试环境声明，减少 CI 假失败。

- **Control UI locale 自动刷新**  
  [#197044](https://github.com/openclaw/openclaw/pull/197044)  
  更新生成的本地化资源，同时维持受保护分支检查，不以自动生成绕过安全流程。

### 3.2 值得重点跟踪的开放 PR

- **iOS 不再持久化 Gateway setup code**  
  [#197049](https://github.com/openclaw/openclaw/pull/197049)  
  setup code 可能包含 bootstrap token、token 或 password。此前每次输入都写入 iOS preferences plist；修复将显著降低凭据落盘风险，是当天最明确的安全改进之一。

- **iOS 保持同一 Gateway 的并发 Bonjour 解析存活**  
  [#197040](https://github.com/openclaw/openclaw/pull/197040)  
  防止解析服务地址时因共享 resolver 被回收而出现永久挂起，提高局域网自动发现连接的可靠性。

- **Gateway 编辑 Agent 文档时保留非法 UTF-8 原始字节**  
  [#197041](https://github.com/openclaw/openclaw/pull/197041)  
  避免内容哈希校验通过后，编辑或身份更新仍将损坏文档静默改写，提升数据保真性。

- **模板与插件逐步迁移到原生管理链路**  
  [#196322](https://github.com/openclaw/openclaw/pull/196322)、[#196431](https://github.com/openclaw/openclaw/pull/196431)、[#196348](https://github.com/openclaw/openclaw/pull/196348)、[#196349](https://github.com/openclaw/openclaw/pull/196349)、[#196383](https://github.com/openclaw/openclaw/pull/196383)、[#196389](https://github.com/openclaw/openclaw/pull/196389)  
  这一组 PR 将 Agent 设置、精确版本审查、权限同意、插件和技能安装、Cron 创建与 bundled plugin runtime owner 纳入 Gateway 的原生治理体系。方向明确，但改动面大、兼容性和安全审查成本较高。

- **Telegram 私聊支持交互式 Message Widget**  
  [#196991](https://github.com/openclaw/openclaw/pull/196991)  
  `show_widget` 可在 Telegram 私聊中展示仪表盘、图表、检查表和投票，而不再退化为文本表格或图片，明显扩展 Agent 在 Telegram 中的输出表达能力。

- **Web UI 在会话刷新时保留工具预览焦点**  
  [#196953](https://github.com/openclaw/openclaw/pull/196953)  
  避免 Agent Settings 中的工具预览消失并丢失键盘焦点，改善高频操作和可访问性。

- **Profile 中管理各 Agent 的 GitHub 账号**  
  [#196200](https://github.com/openclaw/openclaw/pull/196200)  
  用户可以看清每个 Agent 使用的 GitHub 身份及“System GitHub”的影响，为多 Agent 仓库工作流提供更细粒度的凭据管理。

- **Linux eligible CI job 统一路由至 Boat**  
  [#193038](https://github.com/openclaw/openclaw/pull/193038)  
  将分散的 CI 后端覆盖规则收敛为统一 admission/capacity 决策，有助于提升大规模测试吞吐与资源调度一致性。

- **Trajectory 导出保留可解析的工具参数**  
  [#187082](https://github.com/openclaw/openclaw/pull/187082)  
  修复带引号且含 token-like 文本的工具参数导致 JSON/JSONL 导出畸形的问题，对诊断和审计链路有实际价值。

### 3.3 整体推进评估

- 今日完成或关闭的 PR 数量达到 **190**，开发活动明显处于高位。
- 推进重点可归纳为四条主线：
  1. **凭据与数据安全**：setup code、非法 UTF-8、trajectory 导出；
  2. **Agent/插件治理**：模板、原生插件管理、Cron 权限；
  3. **多端体验**：iOS、Web UI、Telegram；
  4. **运行可靠性**：子任务交接、Worker Git 清理、CI 与资源调度。
- 但在 **310 条待合并 PR** 的背景下，维护者审查吞吐是当前瓶颈；大量高价值变更仍停留在等待审查、等待补证或安全审查阶段。

---

## 4. 社区热点

### 4.1 评论最多的 Issue

1. **SQLite header-probe 修复无法通过正常升级路径到达** — 26 条评论  
   [#193962](https://github.com/openclaw/openclaw/issues/193962)  
   用户即使升级到包含修复的版本，仍会被旧 updater 的 10 秒探测流程卡住。这反映出发布修复之外，**升级器自身的兼容性和回滚路径**成为实际阻断点。

2. **Windows 启动从约 410 秒恶化至约 1030 秒** — 21 条评论  
   [#168955](https://github.com/openclaw/openclaw/issues/168955)  
   `sidecars.control-ui-assets` 阶段阻塞约 477 秒，是社区最集中的性能问题之一。

3. **Claude CLI 后端重复渲染助手回复** — 18 条评论  
   [#123792](https://github.com/openclaw/openclaw/issues/123792)  
   同时出现实时逐块视图和拼接后的聚合记录，影响 Control UI 与 Android，属于典型的事件流与持久化视图不一致。

4. **Windows 插件 source-capture staging 无限膨胀** — 16 条评论  
   [#162585](https://github.com/openclaw/openclaw/issues/162585)  
   插件自身包被反复物化，体积从 290 MB 增至 612 MB 以上且无法收敛，Gateway 健康检查也受到拖累。

5. **Claude CLI 子任务写入失败** — 16 条评论，已关闭  
   [#154572](https://github.com/openclaw/openclaw/issues/154572)  
   `sessions_spawn` 在 Claude CLI runtime 上触发 writer-claim rebound，而 CLI agent route 正常，说明问题集中在子任务运行路径。

6. **内部运行时字符串被误当作用户 Prompt** — 15 条评论  
   [#151962](https://github.com/openclaw/openclaw/issues/151962)  
   heartbeat、异步完成和排队消息进入模型，却未写入对应 transcript，用户会看到“自己从未发送过的消息”。

7. **长 Claude CLI 回复可能整段丢失** — 14 条评论  
   [#144809](https://github.com/openclaw/openclaw/issues/144809)  
   超过 stale takeover 阈值后出现 “no active tool authority snapshot”，一次较长推理可能造成完整回复丢失。

8. **active-memory 升级后停止召回** — 13 条评论  
   [#138561](https://github.com/openclaw/openclaw/issues/138561)  
   2026.8.2 之后 recall 持续为 0，且 info 日志没有明显信号，对依赖长期记忆的用户影响直接。

9. **Claude CLI live session 保留失效 MCP 配置** — 12 条评论，已关闭  
   [#144797](https://github.com/openclaw/openclaw/issues/144797)  
   后续轮次继续使用启动时的旧 `--mcp-config`，导致 OpenClaw MCP 工具在会话中途全部 401。

10. **WebChat 路径显示和 payload 保真问题** — 11 条评论  
    [#172986](https://github.com/openclaw/openclaw/issues/172986)  
    特殊目录的 `file:` 链接被中间截断，且存在 payload 偶发变异，既影响可读性，也可能影响点击行为。

### 4.2 今日新增或重点 PR 热点

- **iOS setup code 凭据落盘修复**  
  [#197049](https://github.com/openclaw/openclaw/pull/197049)  
  这是当天最明确的安全型修复：敏感 setup code 不应进入应用偏好文件。

- **Telegram 交互式 Widget**  
  [#196991](https://github.com/openclaw/openclaw/pull/196991)  
  反映用户希望 Agent 输出从“聊天文本”升级为可直接交互的结构化界面。

- **模板统一使用 `CLAW.md` 清单**  
  [#196322](https://github.com/openclaw/openclaw/pull/196322)  
  用户希望一个 manifest 同时承载 Agent 设置、ClawHub 精确依赖、验证和构建信息，降低多套配置之间的漂移。

- **原生管理 bundled plugin 与完整 skill 目录**  
  [#196349](https://github.com/openclaw/openclaw/pull/196349)、[#196348](https://github.com/openclaw/openclaw/pull/196348)  
  重点不只是“能安装”，而是把来源、权限、依赖、清理和信任校验纳入一致的安全边界。

- **原生 catalog acquisition 生命周期修复**  
  [#197035](https://github.com/openclaw/openclaw/pull/197035)  
  模型目录读取超出 invocation scope 后触发 `Plugin invocation scope is closed`，说明当前异步任务生命周期仍存在明显竞态。

### 4.3 热点背后的共性诉求

社区讨论并非集中在单点功能，而是集中在四个底层问题：

1. **升级后必须真的可启动、可升级、可回退**；
2. **长会话和多 Agent 场景下的状态必须一致、可追踪、不可丢消息**；
3. **凭据、setup code、MCP 配置和插件来源必须有清晰的安全边界**；
4. **Provider 适配应由真实运行时能力驱动，而不是靠模型名和版本规则猜测**。

---

## 5. Bug 与稳定性

> 下列按严重程度与影响范围排序。“已有 fix PR”仅表示数据中存在明确关联或方向一致的开放 PR；由于给出的 PR 列表并未展示全部 500 条记录，不能将未列出理解为确定无修复。

### P0 / 发布阻断

1. **Claude/Codex 续接导致会话完全阻塞**  
   [#194664](https://github.com/openclaw/openclaw/issues/194664) — **未见明确 fix PR**  
   Codex protected continuation 会阻止所有后续消息，但 Stop 又报告没有 active run，属于“用户无法继续对话”的硬阻断。

2. **xAI OAuth 推理持续返回 HTTP 426**  
   [#147728](https://github.com/openclaw/openclaw/issues/147728) — **未见明确 fix PR**  
   请求携带了错误的 Grok 客户端版本，部分 utility completion 又完全遗漏 Grok headers，导致整个 OAuth 推理路径不可用。

3. **iOS App Store 版本无法注册 APNs relay**  
   [#146791](https://github.com/openclaw/openclaw/issues/146791) — **未见明确 fix PR**  
   App 能配对但 Gateway 收不到 `push.apns.register`，后台唤醒和推送测试不可用。

4. **暂停的 Codex chat 无法恢复**  
   [#190563](https://github.com/openclaw/openclaw/issues/190563) — **未见明确 fix PR**  
   provider review 与 native thread 指向不同线程，恢复操作失败。

5. **Telegram owner 会话被 providerReview 永久占用**  
   [#178441](https://github.com/openclaw/openclaw/issues/178441) — **未见明确 fix PR**  
   没有 continuation 或恢复入口，可能造成实际通信中断。

6. **升级链仍无法可靠到达已修复版本**  
   [#193962](https://github.com/openclaw/openclaw/issues/193962) — **有明确关联修复 #187197，但升级器路径仍需处理**  
   核心问题在已安装 updater 使用旧探测逻辑，说明仅在后续版本中修复并不足以覆盖存量安装。

### P1 / 严重稳定性与数据可靠性

1. **Windows 启动性能严重退化**  
   [#168955](https://github.com/openclaw/openclaw/issues/168955)、[#170928](https://github.com/openclaw/openclaw/issues/170928) — **未见明确 fix PR**  
   启动时间达到 7–17 分钟量级，且就绪后仍可能间歇无响应，直接影响可用性。

2. **大型 Agent DB 导致启动不可预测和 UNAVAILABLE**  
   [#181459](https://github.com/openclaw/openclaw/issues/181459) — **未见明确 fix PR**  
   3.5 GB 数据库带来 18 秒打开延迟、4–6 分钟启动及 checkpoint expired。

3. **Claude CLI 长回复整段丢失**  
   [#144809](https://github.com/openclaw/openclaw/issues/144809) — **未见明确 fix PR**  
   属于 message-loss，对长任务尤其严重。

4. **Helper completion continuation 使会话失去执行权限**  
   [#194403](https://github.com/openclaw/openclaw/issues/194403) — **未见明确 fix PR**  
   普通后续工作无法继续，并可能把后台工作悬挂。

5. **Claude CLI 自动化仍缺少可记录的 inference account**  
   [#191818](https://github.com/openclaw/openclaw/issues/191818) — **明确请求回移 #180492**  
   存量 token auth profile 在定时任务中无法工作。

6. **Preseeded 工作区会误删用户 BOOTSTRAP.md**  
   [#91931](https://github.com/openclaw/openclaw/issues/91931) — **已有明确 fix PR [#196411](https://github.com/openclaw/openclaw/pull/196411)**  
   涉及初始化数据丢失，PR 方向是保留自定义 bootstrap，并与 Doctor 的模板识别保持一致。

7. **Provider rate-limit 重试未遵守最大延迟限制**  
   [#168101](https://github.com/openclaw/openclaw/issues/168101) — **未见明确 fix PR**  
   工具调用后不能安全重放，系统却仍完整 sleep，并占用 session lane。

8. **Windows 多 Agent Gateway 高 CPU、SQLite contention 与 Telegram 延迟**  
   [#169152](https://github.com/openclaw/openclaw/issues/169152) — **未见明确 fix PR**  
   表明 Windows 下的资源争用可能不仅是单点启动慢，而是长期运行稳定性问题。

9. **原生 catalog 异步读取越过 plugin scope**  
   [#197035](https://github.com/openclaw/openclaw/pull/197035) — **已有 fix PR**  
   该 PR直接针对 #196968，修复异步 acquisition 的生命周期竞态。

### P2 / 重要但范围较局部

- **Claude CLI 助手回复重复显示**：[#123792](https://github.com/openclaw/openclaw/issues/123792)，未见明确 fix PR。  
- **插件 source-capture staging 无限增长**：[#162585](https://github.com/openclaw/openclaw/issues/162585)，未见明确 fix PR。  
- **内部运行时字符串伪装成用户消息**：[#151962](https://github.com/openclaw/openclaw/issues/151962)，未见明确 fix PR。  
- **active-memory 升级后停止召回**：[#138561](https://github.com/openclaw/openclaw/issues/138561)，未见明确 fix PR。  
- **WebChat 路径截断与 payload 变异**：[#172986](https://github.com/openclaw/openclaw/issues/172986)，未见明确 fix PR。  
- **run 首次 commit 前死亡会泄漏 started 状态**：[#141172](https://github.com/openclaw/openclaw/issues/141172)，未见明确 fix PR。  
- **session maintenance 无法限制 thread/channel 条目**：[#112638](https://github.com/openclaw/openclaw/issues/112638)，未见明确 fix PR。  
- **Home 的 20 条 system-event 队列溢出后丢通知**：[#167854](https://github.com/openclaw/openclaw/issues/167854)，未见明确 fix PR。  
- **Claude 5 直连回复被整体缓冲至 message_stop**：[#170818](https://github.com/openclaw/openclaw/issues/170818)，未见明确 fix PR。  
- **trajectory 导出可能生成畸形 JSON/JSONL**：[#187082](https://github.com/openclaw/openclaw/pull/187082)，已有明确 fix PR。

---

## 6. 功能请求与路线图信号

### 6.1 很可能进入近期版本的方向

#### 1. Agent 与模板统一配置

- 单一 `CLAW.md` manifest 管理 Agent 设置、ClawHub 依赖、验证和构建：  
  [#196322](https://github.com/openclaw/openclaw/pull/196322)
- 保留自定义 `BOOTSTRAP.md`：  
  [#196411](https://github.com/openclaw/openclaw/pull/196411)
- 完整 skill 目录、bundled plugin 原生安装及权限治理：  
  [#196348](https://github.com/openclaw/openclaw/pull/196348)、[#196349](https://github.com/openclaw/openclaw/pull/196349)、[#196389](https://github.com/openclaw/openclaw/pull/196389)

**判断：** 这组改动已经形成完整候选链，且多个 PR 标记为 proof sufficient、ready for maintainer look，近期合入概率较高。路线信号是 OpenClaw 正从“插件可安装”转向“插件、模板、技能与 Cron 均由 Gateway 原生治理”。

#### 2. Telegram 原生交互式输出

- [#196991](https://github.com/openclaw/openclaw/pull/196991)

**判断：** Bot API 10.4 的 Message Widget 能显著提升 dashboard、chart、checklist、poll 的可操作性，且已有截图和充分证明，属于可直接产品化的功能。

#### 3. 多 Agent GitHub 身份管理

- [#196200](https://github.com/openclaw/openclaw/pull/196200)

**判断：** 与近期 Agent 模板、workspace、插件能力治理方向一致，适合进入 Profile/Agent Settings 下一轮 UX 完善。

#### 4. Web UI 长任务可观测性与可访问性

- 保留工具预览焦点：  
  [#196953](https://github.com/openclaw/openclaw/pull/196953)
- 前台 WebChat 强制 checkpoint 和 bounded yield：  
  [#138990](https://github.com/openclaw/openclaw/issues/138990)
- 聊天消息以 heading 暴露给屏幕阅读器：  
  [#154524](https://github.com/openclaw/openclaw/issues/154524)

**判断：** 前两项已有实现基础；可访问性请求尚无明确 PR，但与 Web UI 持续投入相符，可能在后续无障碍专项中纳入。

### 6.2 需要产品决策的功能

#### 1. 显式允许跨 Provider 的 Cron fallback account

- [#192009](https://github.com/openclaw/openclaw/issues/192009)

用户希望 OpenAI 主模型与 xAI fallback 使用各自账号，而不是受单一 auth profile 约束。该能力与现有 fallback、权限及账号授权体系冲突，需要产品层明确跨账号授权边界。

#### 2. Session model pin 继承 Agent fallback chain

- [#151980](https://github.com/openclaw/openclaw/issues/151980)

当前 session pin 会把候选列表收缩为单一模型，Provider 故障时无法自动回退。需求合理，但需要定义用户 pin 的“强约束”还是“可回退偏好”。

#### 3. Doctor 支持恢复 stranded requester settle wake

- [#170562](https://github.com/openclaw/openclaw/issues/170562)

这是明确的运维需求：为单个卡死的 `subagent_runs` / `requesterSettleWake` 提供受支持的诊断和清理能力，避免直接修改状态数据库。

#### 4. 插件在工具结果之后注入上下文

- [#164355](https://github.com/openclaw/openclaw/issues/164355)

当前 hook 无法在 tool results 后追加内容，限制插件影响最终回答的方式。该需求会改变 hook 执行模型和请求组装顺序，应先进行 API 兼容设计。

### 6.3 生态与运营方向

- **升级后监控与恢复窗口**：  
  [#159743](https://github.com/openclaw/openclaw/issues/159743)  
  反映用户希望升级过程具备遥测、自动恢复和针对性回滚，而不只是“安装完成”。
- **插件扩展点与模板体系正在合并成平台级治理方向**：  
  [#196348](https://github.com/openclaw/openclaw/pull/196348)、[#196349](https://github.com/openclaw/openclaw/pull/196349)、[#196389](https://github.com/openclaw/openclaw/pull/196389)  
  预计下一阶段重点是来源证明、权限同意、依赖锁定、运行时 owner 和清理的一致性。

---

## 7. 用户反馈摘要

### 7.1 真实使用场景

- **Windows + 多 Agent + Telegram** 是问题最集中的组合：启动慢、高 CPU、SQLite 锁竞争、回复延迟和间歇无响应相互叠加。参见 [#168955](https://github.com/openclaw/openclaw/issues/168955)、[#170928](https://github.com/openclaw/openclaw/issues/170928)、[#169152](https://github.com/openclaw/openclaw/issues/169152)。
- **Claude Code / Codex 作为实际推理后端** 的用户，已不只满足于“能调用”，而是要求长回复不丢、旧会话可续接、暂停/恢复可靠、MCP 工具持续可用。参见 [#144809](https://github.com/openclaw/openclaw/issues/144809)、[#144797](https://github.com/openclaw/openclaw/issues/144797)、[#190563](https://github.com/openclaw/openclaw/issues/190563)。
- **长期运行的 Agent** 面临数据库膨胀、memory recall 失效、phantom user messages、后台 experience review 0% 完成等问题。参见 [#181459](https://github.com/openclaw/openclaw/issues/181459)、[#138561](https://github.com/openclaw/openclaw/issues/138561)、[#151962](https://github.com/openclaw/openclaw/issues/151962)、[#164279](https://github.com/openclaw/openclaw/issues/164279)。
- **插件和多扩展生态用户** 希望安装过程透明、来源可信、权限明确，并能在 Windows 和 Docker 环境中稳定运行。参见 [#162585](https://github.com/openclaw/openclaw/issues/162585)、[#196956](https://github.com/openclaw/openclaw/pull/196956)、[#143980](https://github.com/openclaw/openclaw/issues/143980)。
- **移动端用户** 对后台推送、Bonjour 自动发现及凭据本地存储更敏感。参见 [#146791](https://github.com/openclaw/openclaw/issues/146791)、[#197040](https://github.com/openclaw/openclaw/pull/197040)、[#197049](https://github.com/openclaw/openclaw/pull/197049)。

### 7.2 主要不满意点

1. **升级并不等于问题真正解决**：用户已经知道某个后续版本包含修复，却仍因旧 updater、配置迁移或候选准入失败而无法到达该版本。参见 [#193962](https://github.com/openclaw/openclaw/issues/193962)、[#193157](https://github.com/openclaw/openclaw/issues/193157)。
2. **错误缺少可操作信号**：active-memory 停止召回没有 info 日志，Google Chat webhook 403 没有日志，Home 队列溢出后静默丢通知。参见 [#138561](https://github.com/openclaw/openclaw/issues/138561)、[#163125](https://github.com/openclaw/openclaw/issues/163125)、[#167854](https://github.com/openclaw/openclaw/issues/167854)。
3. **会话状态对用户不可见**：出现 phantom user message、重复 assistant turn、旧会话中“新 session created”等现象，用户难以判断是模型、持久化层还是 UI 问题。参见 [#151962](https://github.com/openclaw/openclaw/issues/151962)、[#123792](https://github.com/openclaw/openclaw/issues/123792)、[#167854](https://github.com/openclaw/openclaw/issues/167854)。
4. **Provider 兼容性依赖脆弱的启发式规则**：模型名推测 thinking/fast mode、错误 Grok headers、Claude CLI authority snapshot 过期，都说明适配层仍需以真实运行时协议为准。
5. **企业级多 Agent 运维能力不足**：用户希望跨账号 fallback、GitHub 身份管理、后台任务恢复、checkpoint、升级监控和更清晰的权限边界。

### 7.3 正面信号

- v2026.11.3 对私有子任务结果和取消后交接的修复，直接回应了多 Agent 场景中最核心的隐私与可靠性诉求。
- Telegram Widget、GitHub 账号管理和模板统一清单等 PR 显示项目正在从“能运行”向“可管理、可观察、可扩展”演进。
- 部分问题已快速关闭，例如 Claude CLI 子任务写入、MCP 配置复用、Google Chat webhook、流量导出等，说明社区反馈能较快转化为维护动作。

---

## 8. 待处理积压

### 8.1 长期未解决但影响较大的 Issue

1. **Windows 启动性能回归，持续约一个月**  
   [#168955](https://github.com/openclaw/openclaw/issues/168955)  
   仍标记为 `no-new-fix-pr` 且需要维护者审查。多个 Windows 用户重复报告，已形成事实上的平台可靠性债务。

2. **长 Claude CLI 回复整段丢失**  
   [#144809](https://github.com/openclaw/openclaw/issues/144809)  
   标记 `no-new-fix-pr`、需要产品决策，且属于 message-loss；至少应提供复现矩阵、规避方案和修复 owner。

3. **内部字符串被错误持久化为用户 Prompt**  
   [#151962](https://github.com/openclaw/openclaw/issues/151962)  
   长期开放且需维护者审查，直接破坏 transcript 可信度。

4. **session maintenance 限制对 thread/channel 无效**  
   [#112638](https://github.com/openclaw/openclaw/issues/112638)  
   `maxEntries` 和 `maxDiskBytes` 被绕过，长期运行实例可能持续膨胀。

5. **Home 事件队列溢出后静默丢失通知**  
   [#167854](https://github.com/openclaw/openclaw/issues/167854)  
   需要维护者明确队列容量、合并策略及溢出可观测性。

6. **Claude 5 回复被整体缓冲到 message_stop**  
   [#170818](https://github.com/openclaw/openclaw/issues/170818)  
   用户明确希望有 opt-out；当前体验类似非流式响应。

7. **Inter-session accepted 消息可能永久停留在 interrupted**  
   [#144594](https://github.com/openclaw/openclaw/issues/144594)  
   消息已显示 accepted，却无自动 replay 和双方告警，存在静默消息丢失风险。

8. **Agent 间调用触发工具列表变化，造成 prompt cache 全失效**  
   [#155868](https://github.com/openclaw/openclaw/issues/155868)  
   会显著增加成本与延迟，也说明 Agent 来源的 run 应与 human-triggered run 保持稳定的工具策略。

9. **跨 Provider Cron fallback 尚无授权模型**  
   [#192009](https://github.com/openclaw/openclaw/issues/192009)  
   需要产品与安全共同决策，不能长期停留在无 owner 状态。

### 8.2 长期开放的重要 PR

1. **Paired-node Claude continuation 保留 Gateway context**  
   [#145741](https://github.com/openclaw/openclaw/pull/145741)  
   自 2026-09 起开放，涉及 Gateway context 与 security boundary，仍标记为需要 proof。

2. **Sandbox named host roots**  
   [#116175](https://github.com/openclaw/openclaw/pull/116175)  
   自 2026-07 起开放，涉及宿主目录绑定和路径逃逸防护，安全敏感且需要充分复现与审查。

3. **Teams Meetings 新链接格式兼容**  
   [#146828](https://github.com/openclaw/openclaw/pull/146828)  
   旧 PR 长期未闭环，而现代会议邀请链接仍在变化，建议明确支持矩阵和关闭标准。

4. **Trajectory 参数导出修复**  
   [#187082](https://github.com/openclaw/openclaw/pull/187082)  
   已有充分证明且涉及审计导出格式，建议尽快完成安全审查并合入。

### 8.3 维护队列建议

- **优先处理 0–1 条 P0**：Codex/Telegram 会话锁死、xAI OAuth 426、iOS APNs、updater 不可达修复版本。
- **集中治理 5 条 P1**：Windows 启动、Claude CLI 长回复、helper authority、大型 DB、自动化 auth。
- **为长期 Issue 指派 owner 和目标版本**：尤其是 [#168955](https://github.com/openclaw/openclaw/issues/168955)、[#144809](https://github.com/openclaw/openclaw/issues/144809)、[#151962](https://github.com/openclaw/openclaw/issues/151962)、[#112638](https://github.com/openclaw/openclaw/issues/112638)。
- **拆分 310 条待合并 PR 的审查队列**：优先处理已标注 proof sufficient、ready for maintainer look、security-review-required 的变更；避免大规模模板/插件 PR 长期并存造成安全边界漂移。

---

## 项目健康度结论

**活跃度：高**  
**发布节奏：稳定**  
**功能推进：快**  
**安全改进：积极，但审查积压明显**  
**稳定性健康度：中等偏低**

OpenClaw 当前的主要矛盾不是缺少功能，而是**高速功能扩张与状态机、升级链、Windows 性能及 Provider 生命周期治理之间尚未完全同步**。v2026.11.3 修复了重要的多 Agent 隐私和交接问题，模板、插件、Telegram 与 Web UI 路线也较清晰；下一阶段能否把大量 `needs-maintainer-review`、`needs-proof` 和 `no-new-fix-pr` 条目收敛，将直接决定项目从“高速迭代”转向“可持续生产化”的速度。

---

## 横向生态对比

# 个人 AI 助手 / 自主智能体开源生态横向对比报告

**统计日期：2026-11-11｜数据范围：过去 24 小时 GitHub Issue、PR 与 Release 更新**

## 1. 生态全景

个人 AI 助手与自主智能体生态正处于**高强度工程化阶段**：本次统计的 9 个项目中，OpenClaw 单日产生 805 条 Issue/PR 更新，Hermes Agent、QwenPaw 亦分别达到 100 条更新，功能扩张速度明显快于稳定性和维护吞吐。

生态主线已从“能否调用模型并执行任务”转向四个核心问题：**多渠道接入与本地模型运行时、长期会话与记忆一致性、插件/凭据/支付的安全治理，以及跨平台可运维性**。  
OpenClaw 继续扮演通用 Agent 编排与插件平台，QwenPaw 聚焦桌面渠道和本地模型托管，LobsterAI 面向大众消费场景，Hermes Agent 聚焦桌面、消息渠道与插件生态；NanoBot、PicoClaw、IronClaw 等则处于更早期或更垂直的阶段。

当前主要矛盾是**高功能吞吐与低合并/发布转化之间的失衡**：OpenClaw 有 310 条待合并 PR，Hermes Agent 49 条待处理 PR，QwenPaw 26 条待合并 PR，说明维护审查、回归测试和发布治理已成为生态级瓶颈。

---

## 2. 各项目活跃度对比

| 项目 | 今日 Issue | 今日 PR | Release | 活跃度与健康度 |
|---|---:|---:|---|---|
| **OpenClaw** | 305 条更新：218 活跃 / 87 关闭 | 500 条更新：310 待合并 / 190 结束 | **v2026.11.3** | **极高**；发布稳定、功能快，但状态机、Windows、升级链积压较重 |
| **NanoBot** | 2 条更新 | 24 条：5 待处理 / 19 结束 | 0.4.1 准备完成，**无正式 Release** | **高**；修复闭环较好，但共享会话退役存在冲突和迁移风险 |
| **PicoClaw** | 1 条更新 | 0 | 无 | **低**；唯一新增 Issue 为 Windows MCP 初始化导致 Agent Loop 卡死，未见修复 |
| **IronClaw** | 0 | 0 | 无 | **无活动**；仅凭当日数据无法判断整体项目状态 |
| **LobsterAI** | 1 条更新 | 6 条：1 待合并 / 5 结束 | 无 | **高**；体验和集成推进稳定，但缺少发布及官方风险沟通 |
| **QwenPaw** | 11 条更新：6 开放 / 5 关闭 | 32 条：26 待合并 / 6 结束 | **v2.3.0-beta.4** | **高**；发布响应快，但渠道启动、桌面打包差异和长期 PR 积压明显 |
| **Hermes Agent** | 50 条更新：45 开放 / 5 关闭 | 50 条：49 待处理 / 1 结束 | 无 | **极高**；需求旺盛，但合并率低、稳定性治理压力大 |
| **OpenHuman** | 2 条，均关闭 | 12 条：7 待合并 / 5 结束 | 无 | **高**；安全、钱包和自动化进展扎实，CI 债务影响交付 |

### 活跃度解读

- **第一梯队：OpenClaw、Hermes Agent**  
  两者分别以 805 条和 100 条日更新领先，生态影响力与需求规模最大，但也都存在严重的 PR 审查积压。

- **第二梯队：NanoBot、QwenPaw、OpenHuman、LobsterAI**  
  日更新量在 6–32 条之间，交付节奏稳定。NanoBot 和 OpenHuman 已关闭项占比较高；QwenPaw 功能扩张明显，但积压也更高；LobsterAI 偏消费级体验和桌面集成。

- **第三梯队：PicoClaw、IronClaw**  
  PicoClaw 当日只有一个高严重度稳定性问题，未见修复；IronClaw 无活动，暂不能形成有效趋势判断。

---

## 3. OpenClaw 在生态中的定位

### 3.1 生态优势

1. **社区规模显著领先**  
   OpenClaw 单日 805 条 Issue/PR 更新，约为 Hermes Agent 的 8 倍、QwenPaw 的 19 倍。其问题、PR 和功能方向已成为个人 Agent 生态的重要风向标。

2. **通用编排平台定位最清晰**  
   OpenClaw 同时覆盖：
   - 多 Provider 和 Claude Code/Codex 续接；
   - 子智能体与父子任务交接；
   - 模板、插件、Skill、Cron 的原生治理；
   - iOS、Web UI、Telegram 等多端体验；
   - Profile、多 Agent 身份和 GitHub 账号管理。

   其路线接近“**个人 Agent 的操作系统与控制平面**”，而非单一聊天客户端。

3. **多生态集成能力最突出**  
   OpenClaw 可以作为 LobsterAI 的底层运行时，也与 QwenPaw、Hermes 等项目在 OpenClaw 兼容、会话管理、插件生态方面形成交叉。相较 QwenPaw 的桌面渠道控制台、OpenHuman 的本地安全执行，OpenClaw 更强调通用连接和扩展。

4. **安全修复开始触及核心边界**  
   v2026.11.3 修复私有子任务结果泄漏和取消后交接问题；开放 PR 还覆盖 iOS setup code 落盘、凭据脱敏、插件来源与权限治理，说明其安全路线正从外围配置深入到任务结果和身份边界。

### 3.2 技术路线差异

- **OpenClaw：扩展优先、平台化治理。**  
  功能面最广，但 Windows 启动、Provider 续接、会话一致性和升级器问题表明状态机复杂度已经很高。

- **QwenPaw：桌面端、本地推理、多渠道一体化。**  
  更强调 llama.cpp/MLX/GPU 自动管理，以及飞书、QQ、微信等渠道插件。

- **Hermes Agent：长期记忆、桌面工作台、插件生态。**  
  重点在压缩后可追溯记忆、Projects、Telegram 和 Desktop，而非追求 OpenClaw 式全渠道通用性。

- **OpenHuman：安全本地执行与自动化资产操作。**  
  聚焦 secret grant、钱包策略、Cron、x402 与持久账本，安全边界更严格，但日常用户规模与渠道覆盖较弱。

### 3.3 社区规模与成熟度判断

OpenClaw 社区规模遥遥领先，但其成熟度并未同步领先：**功能数量、协议覆盖和贡献者规模处于生态第一梯队，Windows 与长会话稳定性则仅处于中等偏低水平**。  
因此其当前更像“快速扩张中的主流平台”，而不是已经收敛的稳定基础设施。相较之下，NanoBot、PicoClaw 更接近轻量个人助手，OpenHuman 和 LobsterAI 则分别强化专业自动化与消费级桌面体验。

---

## 4. 共同关注的技术方向

| 技术方向 | 涉及项目 | 共同诉求 |
|---|---|---|
| **会话与长期状态一致性** | OpenClaw、NanoBot、Hermes Agent、QwenPaw | 修复回复串会话、重复消息、续接失效、压缩丢目标、旧配置不刷新等，要求状态可追踪且不丢消息 |
| **插件、技能和模板治理** | OpenClaw、Hermes Agent、OpenHuman | 明确来源、版本、权限、依赖、运行时 owner、安装和清理机制，避免“能安装但不可控” |
| **凭据与敏感信息安全** | OpenClaw、OpenHuman、Hermes Agent、LobsterAI | setup code、API Key、channel token、Secret、Vault 必须脱敏、显式授权且避免落盘或工具响应泄漏 |
| **多渠道与统一消息体验** | QwenPaw、Hermes Agent、OpenClaw、LobsterAI | 飞书、QQ、Telegram、邮件、Mattermost 等需稳定启动、正确投递，并保持跨渠道状态和附件一致 |
| **本地模型运行时托管** | QwenPaw、OpenClaw、Hermes Agent | 降低 llama.cpp、MLX、Ollama、GPU 和运行时更新的手工配置成本 |
| **跨平台可靠性** | OpenClaw、PicoClaw、QwenPaw、Hermes Agent、NanoBot | Windows 启动、资源争用、中文编码、ACP/APL、浏览器兼容等问题反复出现 |
| **可观测性和故障降级** | PicoClaw、OpenClaw、Hermes Agent、OpenHuman | 健康检查不能只表示进程存活；外部依赖失败时核心 Agent Loop 应降级并提供心跳、结构化日志和明确错误 |
| **自动化最小权限与审计** | OpenHuman、OpenClaw、Hermes Agent | Cron、钱包支付、Shell、插件操作需要默认最小权限、限额、账本、审批和回放能力 |

其中最具共性的矛盾是：**用户希望 Agent 拥有更强执行能力，但执行越自动、上下文越长、渠道越多，状态一致性与权限治理越难。**

---

## 5. 差异化定位分析

| 项目 | 功能侧重 | 目标用户 | 技术架构与关键差异 |
|---|---|---|---|
| **OpenClaw** | 通用 Agent 编排、插件、模板、多渠道、多 Provider、多 Agent | 高级个人用户、开发者、Agent 平台建设者 | 最接近完整 Agent OS；扩展面最广，状态机和 Provider 生命周期复杂度最高 |
| **NanoBot** | 轻量会话、渠道、WebUI、文件与 Shell 工具 | 希望本地运行、配置简单的个人用户 | 架构更轻；近期通过移除全局共享会话强化隔离，迁移风险高于功能价值 |
| **PicoClaw** | 轻量多渠道 Agent、MCP 接入 | 边缘设备或轻量桌面用户 | 代码量与当日活动有限；当前最大问题是基础依赖失败会拖死 Agent Loop |
| **IronClaw** | 当日无足够信息 | 无法判断 | 缺少当日 Issue/PR/Release 信号，不宜据此判断路线 |
| **LobsterAI** | 桌面 Cowork、图片创作、网页搜索、OpenClaw 集成 | 消费级用户、内容创作者、非技术用户 | Electron 桌面体验突出，内置浏览器复用登录态，降低 Agent 使用门槛 |
| **QwenPaw** | 多渠道助手、Console、本地模型、GPU、Skill | 中国生态桌面用户、渠道重度用户、本地模型用户 | 飞书/QQ/微信等渠道与 llama.cpp/MLX 托管结合，产品完整度高但集成复杂 |
| **Hermes Agent** | 长期记忆、Telegram、Desktop、Projects、插件 | 高级个人用户、远程 Agent 用户 | 强调压缩后记忆治理和桌面工作台；PR 积压及配置—执行一致性是主要短板 |
| **OpenHuman** | 本地执行、Secret 授权、钱包、Cron、x402 | 高安全要求、需要自动支付或本地资产操作的用户 | 授权—策略—账本体系最明确，工程安全导向强，消费体验与渠道覆盖较弱 |

### 定位差异的关键判断

- **若目标是“最大扩展性与多 Agent 编排”**：优先看 OpenClaw。
- **若目标是“桌面渠道与本地模型一体化”**：QwenPaw 更直接。
- **若目标是“长期记忆与桌面工作流”**：Hermes Agent 更贴近。
- **若目标是“内容创作和低门槛桌面使用”**：LobsterAI 更成熟。
- **若目标是“高权限本地自动化与支付安全”**：OpenHuman 的治理模型更值得借鉴。
- **若目标是“轻量自托管个人助手”**：NanoBot 更接近，但需等待共享会话迁移稳定。

---

## 6. 社区热度与成熟度

### 6.1 按社区热度分层

**第一层：OpenClaw、Hermes Agent**

- OpenClaw 具备最大社区规模和议题覆盖，热点横跨 Windows、Provider、会话、插件、凭据与多端。
- Hermes Agent 的 50 条 Issue 和 50 条 PR 表明需求同样旺盛，讨论重点集中于长期上下文、压缩、工具安全和消息投递。
- 两者均处于**高速扩张但维护积压偏高**阶段。

**第二层：QwenPaw**

- 11 条 Issue、32 条 PR、Beta 发布，兼具用户需求与开发产出。
- 本地模型、GPU、MLX 和多渠道启动是最强路线信号。
- 当前处于**Beta 功能冲刺与跨端集成收敛并存**阶段。

**第三层：NanoBot、OpenHuman、LobsterAI**

- NanoBot：PR 闭环率较高，但共享会话移除属于破坏性架构调整，属于**质量巩固前的迁移阶段**。
- OpenHuman：安全、支付和 Cron 基础链路完整，已进入**平台化治理阶段**，但 CI 红灯影响交付。
- LobsterAI：以消费体验和桌面集成为主，处于**稳定增强阶段**，社区讨论规模较小。

**第四层：PicoClaw、IronClaw**

- PicoClaw 处于**早期稳定性阶段**，核心 Agent Loop 的故障隔离尚未闭环。
- IronClaw 当日无活动，暂不能判断是维护节奏较慢还是项目处于静默期。

### 6.2 成熟度分层

| 成熟度 | 项目 | 判断 |
|---|---|---|
| **平台扩张期** | OpenClaw、Hermes Agent、QwenPaw | 功能需求强、技术方向明确，但 PR、测试和发布治理滞后 |
| **工程收敛期** | NanoBot | 核心修复增多，但共享会话架构迁移尚未完成 |
| **安全能力形成期** | OpenHuman | 授权、支付、审计链清晰，主要受 CI 和集成债务影响 |
| **消费体验打磨期** | LobsterAI | 功能闭环较完整，短板是 Release、沟通和实验功能边界 |
| **早期稳定性期** | PicoClaw | 基础 Agent Loop、MCP 故障隔离和健康检查仍需加强 |
| **静默观察期** | IronClaw | 当日无数据，不作方向判断 |

---

## 7. 值得关注的趋势信号

### 7.1 Agent 正从“聊天前端”演进为运行时与控制平面

QwenPaw 的本地引擎/GPU 管理、OpenHuman 的钱包与 Cron、OpenClaw 的插件模板治理、Hermes 的 Desktop Projects 都表明竞争重点已从“模型调用界面”转向：

- 运行时管理；
- 任务调度；
- 工具执行；
- 身份与权限；
- 插件和扩展生命周期。

**开发启示：** 新项目不应只构建 UI，而应尽早设计任务状态、配置继承、插件权限和生命周期接口。

### 7.2 上下文窗口扩大不等于长期记忆可用

多个项目同时暴露压缩后目标丢失、记忆不召回、历史推理重放、来源不可追踪等问题。用户真正需要的是**可恢复、可审计、可解释的长期状态**，而不是单纯增加 token。

**开发启示：** 应将记忆拆为原始记录、摘要、目标、来源与治理策略，并为压缩前后建立一致性测试。

### 7.3 Provider 适配正在成为核心兼容层

OpenClaw 的 Claude/Codex 续接、OpenAI 兼容 reasoning 字段、xAI 推理参数和 Grok headers，以及 QwenPaw 的 Mistral、Aliyun thinking 参数均表明，模型名称和“OpenAI 兼容”标签已不足以描述真实能力。

**开发启示：** Provider 层应采用**运行时能力协商和协议适配**，显式管理 thinking、tools、cache、session continuation 与消息格式，避免基于模型名的脆弱启发式。

### 7.4 插件生态正进入“可治理”阶段

多个项目都在推进安装、来源证明、权限同意、依赖锁定、运行时 owner 和卸载清理。插件数量不再是唯一指标，可信安装与安全执行才是下一阶段竞争点。

**开发启示：** 插件清单应包含版本、哈希、权限、依赖、能力声明和生命周期；安装与执行前都要重新校验。

### 7.5 外部依赖必须故障隔离

PicoClaw 的 MCP 初始化失败拖死整个 Agent Loop，OpenClaw 的插件 staging 膨胀和 Provider 阻塞也表明：**插件或 MCP 的局部故障不应拖垮核心对话链路**。

**开发启示：** 所有外部工具初始化都应有超时、重试上限、熔断、跳过或降级策略；健康检查必须反映 Agent Loop 心跳，而不只是进程存活。

### 7.6 Windows 与本地桌面成为实际落地瓶颈

OpenClaw 启动从约 410 秒增至约 1030 秒，QwenPaw 出现飞书启动竞态和中文 Windows 编码问题，NanoBot 出现 Windows 会话回归，Hermes 也存在 Windows Worker 停滞和保留设备名问题。

**开发启示：** Windows 不应只是发布目标，而应拥有独立的启动性能预算、文件编码测试、后台服务语义测试和数据库并发测试。

### 7.7 “配置成功但没有生效”成为共同投诉

OpenClaw 的推理能力和续接、Hermes 的 reasoning effort/checkpoint、QwenPaw 的 thinking 参数、LobsterAI 的模型设置草稿，均显示配置层、执行层和 UI 反馈存在脱节。

**开发启示：** 每个配置项都应有**能力探测、实际生效确认、错误可见性和回归测试**，避免“保存成功、运行时无效”。

### 7.8 自动化的竞争焦点转向授权、限额和账本

OpenHuman 的钱包支出策略、滚动额度、持久账本与 Cron 显式 opt-in，代表高风险 Agent 的正确方向。其意义不只在 Web3，而在于所有可逆或不可逆外部操作都需要：

1. 明确授权；
2. 精确报价；
3. 限额；
4. 审计记录；
5. 可追踪来源；
6. 失败后的恢复策略。

---

## 决策建议

- **优先跟进 OpenClaw 的会话、升级链和 Windows 性能治理**：其生态影响最大，但当前稳定性债务也最集中。
- **个人助手选型关注 QwenPaw 与 LobsterAI**：前者适合渠道和本地模型，后者适合桌面消费体验。
- **高级用户与插件开发者关注 Hermes Agent**：记忆、Projects 和插件方向领先，但需评估 PR 积压和发布滞后。
- **高权限自动化参考 OpenHuman**：其授权—策略—账本设计值得借鉴，但正式发布前应优先解决 CI 和集成问题。
- **轻量部署可观察 NanoBot**：共享会话迁移完成后，定位会更清晰。
- **PicoClaw 暂不建议用于要求高可用和多 MCP 的生产场景**，应优先解决 Agent Loop 故障隔离与健康检查语义。

**总体判断：生态已经进入“平台能力竞争”阶段，但尚未完成从高速功能创新到稳定生产化交付的转换。未来胜出者不仅要有更多模型、渠道和插件，更要在会话一致性、故障降级、权限治理和可验证发布上建立明显优势。**

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目动态日报

**统计日期：2026-11-11**  
**数据范围：过去 24 小时 GitHub Issues / Pull Requests 更新**  
**总体判断：项目开发活跃度较高，但核心会话路由与共享会话迁移仍处于收敛阶段。**

---

## 1. 今日速览

过去 24 小时共更新 **2 条 Issues、24 条 PR**，其中 PR 已关闭或合并 **19 条**，仍有 **5 条待处理**，整体呈现高吞吐状态。  
今日工作的重点集中在 **会话隔离、Gateway 生命周期、WebUI 稳定性、渠道可靠性、权限与文件操作重构**，并有 **0.4.1 发布准备 PR** 完成关闭，但尚未产生正式 Release。  
Issues 侧新增并关闭了 Gateway 停止后被 systemd 自动拉起的问题，已有对应修复 PR；另一个会话串线问题仍在开放，并与会话重构、跨会话修复 PR 密切相关。  
当前仍有 **4 个存在合并冲突或较高改动风险的主要 PR** 开放，尤其包括移除全局共享会话、推理内容重放优化和两项架构重构，项目健康度可评为 **活跃良好，但会话模块稳定性与迁移风险偏高**。

---

## 3. 项目进展

> 今日无新版本发布，因此不单列“版本发布”章节。0.4.1 发布准备已合入，但尚未发布正式版本。

### 3.1 会话隔离与共享会话迁移

- **[CLOSED] #6613：修复跨会话输入归属和历史记录问题**  
  修复不同会话间发送消息时，输入可能重复、响应被关联到错误会话的问题，统一跨会话输入和历史处理路径。  
  这是针对当前会话串线问题的重要修复，但对应 Issue **#5798 仍处于开放状态**，尚不能确认问题已完全闭环。  
  链接：[PR #6613](https://github.com/HKUDS/nanobot/pull/6613) ｜ [Issue #5798](https://github.com/HKUDS/nanobot/issues/5798)

- **[OPEN][conflict] #6621：移除全局共享会话机制**  
  计划从配置、Gateway 路由、WebUI 设置和文案中移除全局共享会话模式，同时保留按聊天和显式主题路由。该改动属于破坏性重构，当前存在合并冲突。  
  链接：[PR #6621](https://github.com/HKUDS/nanobot/pull/6621)

- **[OPEN] #6626：停止向新用户推荐共享会话**  
  新配置文档不再推荐共享会话，已有用户仍可暂时保留该选项，并明确关闭后新消息路由会变化、历史记录不会自动复制。这是共享会话迁移过程中的文档配套工作。  
  链接：[PR #6626](https://github.com/HKUDS/nanobot/pull/6626)

### 3.2 Gateway 与执行环境可靠性

- **[CLOSED] #6625：停止 Gateway 后避免被 systemd 自动重启**  
  修复 systemd 用户服务使用 `Restart=always` 时，`nanobot gateway stop` 杀死进程后服务又被拉起的问题；同时调整前台进程冲突提示。  
  该 PR 对应的新 Issue **#6624 已关闭**，形成“问题报告—修复—关闭”的完整闭环。  
  链接：[PR #6625](https://github.com/HKUDS/nanobot/pull/6625) ｜ [Issue #6624](https://github.com/HKUDS/nanobot/issues/6624)

- **[OPEN] #6623：集中管理进程树生命周期**  
  将进程树启动、终止和清理逻辑集中到统一模块，降低执行会话管理对 Shell Tool 私有方法的依赖，并保留现有会话 ID、输出、超时和取消语义。  
  链接：[PR #6623](https://github.com/HKUDS/nanobot/pull/6623)

- **[CLOSED] #6595：增加沙箱检查及可信启动器配置**  
  新增由 Gateway 执行的沙箱自检，使用临时文件和正式启动器解析器，不调用模型、也不修改现有工作区文件；同时支持配置可信启动器。  
  链接：[PR #6595](https://github.com/HKUDS/nanobot/pull/6595)

- **[CLOSED] #6616 相关推进：集中化作用域文件操作**  
  PR #6616 将内置文件读取、写入、编辑、补丁、目录列表和 Python 搜索统一到作用域文件操作中，并强化授权目标与搜索目标检查；该 PR 当前仍开放，但已成为今日文件权限治理方向的核心工作。  
  链接：[PR #6616](https://github.com/HKUDS/nanobot/pull/6616)

### 3.3 WebUI 功能与性能优化

- **[CLOSED] #6594：优化日夜主题和交互连续性**  
  为暗色侧边栏增加睡眠主题视觉，并保持入口、会话页面的中性配色及主题切换连续性。  
  链接：[PR #6594](https://github.com/HKUDS/nanobot/pull/6594)

- **[CLOSED] #6412：统一代码与 Diff 高亮**  
  将 WebUI 中分离的 Prism 代码、预览和 Diff 路径统一，同时恢复消息与输入区位于左列的单会话预览布局。  
  链接：[PR #6412](https://github.com/HKUDS/nanobot/pull/6412)

- **[CLOSED] #6590：新会话创建时关闭上下文侧栏**  
  修复从项目创建新会话时，旧的空白上下文图仍占用侧栏的问题；切换已有会话时仍保留侧栏行为。  
  链接：[PR #6590](https://github.com/HKUDS/nanobot/pull/6590)

- **[CLOSED] #6591：首次访问跟随浏览器语言**  
  修复启动页采用浏览器语言、应用却切换为英语并错误保存偏好的问题，只有用户明确选择后才持久化语言设置。  
  链接：[PR #6591](https://github.com/HKUDS/nanobot/pull/6591)

- **[CLOSED] #6587：减少文件活动列表的布局开销**  
  使用 `ResizeObserver` 提供尺寸，降低大量文件活动记录导致的主线程布局压力，同时保留历史记录与分页行为。  
  链接：[PR #6587](https://github.com/HKUDS/nanobot/pull/6587)

- **[CLOSED] #6588、#6600：提升 WebUI 测试稳定性**  
  将 500 节点图浏览测试的长任务预算从 100ms 提升到 150ms，并修复原生主题切换动画在浏览器协议往返前结束导致的间歇性超时。  
  链接：[PR #6588](https://github.com/HKUDS/nanobot/pull/6588) ｜ [PR #6600](https://github.com/HKUDS/nanobot/pull/6600)

- **[CLOSED] #6622：隔离 CI 易波动场景并保留诊断信息**  
  对 WebSocket 测试中的进程内 HTTP 注册表进行用例级隔离，并收窄压缩监控超时范围，减少共享状态与单点截止时间造成的 CI 波动。  
  链接：[PR #6622](https://github.com/HKUDS/nanobot/pull/6622)

### 3.4 渠道、模型请求与性能

- **[CLOSED] #6606：跨渠道保留投递失败状态**  
  修复邮件可能在进入 Agent 队列前被确认、Mattermost 附件可能丢失、恢复更新审核可能重复失败的问题，使失败能够跨渠道边界保留并进入可恢复状态。  
  链接：[PR #6606](https://github.com/HKUDS/nanobot/pull/6606)

- **[CLOSED] #6603：重置空闲会话时避免自取消**  
  修复在空闲聊天中执行 `/new` 时，命令自身被取消，导致会话未重置且无法返回确认的问题。  
  链接：[PR #6603](https://github.com/HKUDS/nanobot/pull/6603)

- **[CLOSED] #6581：降低文件、会话和模型请求中的内存复制**  
  对大文件范围读取、会话搜索和模型请求进行增量处理，减少不必要的完整复制和内存峰值，同时保持返回范围及可搜索历史不变。  
  链接：[PR #6581](https://github.com/HKUDS/nanobot/pull/6581)

- **[OPEN][conflict] #6265：仅为当前轮次重放推理内容**  
  修复历史中的 `reasoning_content` 和 `thinking_blocks` 被反复重放、Anthropic 与 Bedrock 适配器重复发送历史思考块的问题。该 PR 可降低请求膨胀并避免推理内容污染后续轮次，但当前存在合并冲突。  
  链接：[PR #6265](https://github.com/HKUDS/nanobot/pull/6266)

### 3.5 发布准备

- **[CLOSED] #6570：准备 0.4.1**  
  发布准备 PR 已关闭，摘要显示其内容以 squash 方式合入，并保留原始贡献者与基础分支历史。不过截至日报统计时间，**GitHub 尚未发布 0.4.1 Release**，因此用户不应将“PR 已关闭”理解为“版本已正式可安装”。  
  链接：[PR #6570](https://github.com/HKUDS/nanobot/pull/6570)

### 进展评价

今日完成或推进了至少 **11 个重要功能、修复、重构或测试主题**，覆盖会话、Gateway、文件权限、WebUI、模型适配、渠道可靠性和 CI 稳定性。尤其是 **跨会话归属修复、Gateway 停止语义修复和渠道投递可靠性提升**，直接改善核心运行可靠性。  
不过，移除共享会话、推理重放优化等关键改动仍未完成，且共享会话退役属于用户可见行为变化，项目目前更接近“发布前收敛阶段”，尚未完全进入稳定发布状态。

---

## 4. 社区热点

> 今日 Issues 仅 2 条，PR 列表没有可见评论数，因此“热度”主要依据关联 Issue、更新状态、影响范围和修复关系判断，而不是社区点赞或评论数量。

### 4.1 会话串线问题

- **Issue #5798：回复串会话问题**  
  链接：[Issue #5798](https://github.com/HKUDS/nanobot/issues/5798)  
  用户报告：一个会话正在运行时，在另一会话中的问题可能被发送到第一个运行中的会话；该问题在 **0.3.0 中不存在**，当前使用 **0.3.5、Python 3.12、Windows**。  
  **社区诉求：** 恢复“固定回复固定会话”的确定性，这是多会话并行使用时的基础数据隔离要求。  
  **当前状态：** Issue 仍开放；关联修复 PR #6613 已关闭，共享会话退役 PR #6621 与 #6626 仍在推进，说明问题可能不仅是单点 Bug，也涉及路由模型调整。

### 4.2 Gateway 停止后被 systemd 重启

- **Issue #6624：Gateway stop does not persist when systemd service uses Restart=always**  
  链接：[Issue #6624](https://github.com/HKUDS/nanobot/issues/6624)  
  用户执行 `nanobot gateway stop` 后虽然看到“Gateway stopped”，但 systemd 会重新启动服务，造成“停止操作虚假成功”。  
  **社区诉求：** 停止命令必须具有持久、可预期的结果，不能在用户不知情的情况下自动恢复运行。  
  **当前状态：** 已由 PR #6625 修复并关闭，是今日闭环质量最高的问题之一。

### 4.3 共享会话退役

- **PR #6621**：移除全局共享会话  
  链接：[PR #6621](https://github.com/HKUDS/nanobot/pull/6621)
- **PR #6626**：新配置停止推荐共享会话  
  链接：[PR #6626](https://github.com/HKUDS/nanobot/pull/6626)

这组 PR 虽无可见评论数，但代表今日最明确的架构方向变化。其核心诉求是减少跨会话串线风险、明确消息归属，并逐步从“全局共享”迁移到按聊天或主题隔离。

---

## 5. Bug 与稳定性

### 高优先级

#### 1. 会话串线 / 跨会话输入归属错误

- Issue：[ #5798](https://github.com/HKUDS/nanobot/issues/5798)
- 修复 PR：[ #6613](https://github.com/HKUDS/nanobot/pull/6613)，**已关闭**
- 架构相关 PR：[ #6621](https://github.com/HKUDS/nanobot/pull/6621)、[ #6626](https://github.com/HKUDS/nanobot/pull/6626)，**仍开放**
- 当前判断：**已有针对性修复，但 Issue 尚未关闭，完整效果待维护者确认。**

影响包括回复进入错误会话、输入重复、响应与输入关联错误。由于问题横跨 Gateway、会话历史和 WebUI，优先级应高于一般 UI Bug。

#### 2. 推理内容被跨轮次重复重放

- Issue 关联：[ #5584](https://github.com/HKUDS/nanobot/issues/5584)
- 修复 PR：[ #6265](https://github.com/HKUDS/nanobot/pull/6265)，**开放且存在冲突**
- 当前判断：**已有 fix PR，但尚未完成。**

该问题可能造成请求体膨胀、额外 token 消耗、历史推理内容干扰当前回答，以及 Anthropic/Bedrock 适配器重复发送思考块。合并冲突使其成为当前主要稳定性积压之一。

### 中优先级

#### 3. Gateway 停止后被 systemd 自动拉起

- Issue：[ #6624](https://github.com/HKUDS/nanobot/issues/6624)
- 修复 PR：[ #6625](https://github.com/HKUDS/nanobot/pull/6625)
- 当前判断：**已有 fix PR，Issue 与 PR 均已关闭。**

问题主要影响 systemd 用户服务部署，属于明确的运维语义错误，今日已完成修复闭环。

#### 4. 跨渠道投递失败被提前确认或丢失

- 修复 PR：[ #6606](https://github.com/HKUDS/nanobot/pull/6606)，**已关闭**
- 当前判断：**已有 fix PR。**

涉及邮件确认时机、Mattermost 附件持久性及恢复审核失败状态，可能导致消息静默丢失或重复处理，风险高于一般界面问题。

#### 5. `/new` 在空闲会话中自取消

- 修复 PR：[ #6603](https://github.com/HKUDS/nanobot/pull/6603)，**已关闭**
- 当前判断：**已有 fix PR。**

表现为会话无法重置且用户收不到确认，属于会话控制流回归问题。

#### 6. CI 和 WebUI 间歇性失败

- PR：[ #6622](https://github.com/HKUDS/nanobot/pull/6622)、[ #6588](https://github.com/HKUDS/nanobot/pull/6588)、[ #6600](https://github.com/HKUDS/nanobot/pull/6600)，均已关闭
- 当前判断：**已有测试与稳定性修复。**

问题集中在共享状态、单一超时预算和主题动画采样时机。当前修复偏向测试可靠性，不涉及核心产品功能回退。

### 低优先级

#### 7. WebUI 新会话残留空白上下文侧栏

- PR：[ #6590](https://github.com/HKUDS/nanobot/pull/6590)，**已关闭**
- 当前判断：**已修复。**

#### 8. 首次访问语言显示与保存不一致

- PR：[ #6591](https://github.com/HKUDS/nanobot/pull/6591)，**已关闭**
- 当前判断：**已修复。**

#### 9. 大量文件活动导致 WebUI 布局卡顿

- PR：[ #6587](https://github.com/HKUDS/nanobot/pull/6587)，**已关闭**
- 当前判断：**已修复。**

---

## 6. 功能请求与路线图信号

### 6.1 移除全局共享会话，改为显式隔离

- 依据：[PR #6621](https://github.com/HKUDS/nanobot/pull/6621)、[PR #6626](https://github.com/HKUDS/nanobot/pull/6626)
- **可能纳入下一版本：是，概率高。**
- 迁移信号明确：代码、配置、Gateway、WebUI 和文档正在同步调整，预计会在 0.4.1 或紧随其后的版本中发布。
- 迁移注意：
  - 关闭共享会话会改变新消息的去向；
  - 已有会话历史预计不会自动复制；
  - 用户应先梳理显式主题路由和按聊天路由配置。

### 6.2 推理内容仅在当前轮次重放

- 依据：[PR #6265](https://github.com/HKUDS/nanobot/pull/6265)
- **可能纳入下一版本：可能，但受合并冲突影响。**
- 与请求体积、token 成本和模型适配正确性直接相关，维护价值较高；但需先解决长期分支冲突并完成回归验证。

### 6.3 沙箱检查与可信启动器配置

- 依据：[PR #6595](https://github.com/HKUDS/nanobot/pull/6595)
- **可能纳入下一版本：是，概率较高。**
- 新配置项 `tools.exec.sandboxLaunchers` 表明执行环境将提供更明确的安全边界和可诊断能力。

### 6.4 统一作用域文件操作与授权检查

- 依据：[PR #6616](https://github.com/HKUDS/nanobot/pull/6616)
- **可能纳入下一版本：可能。**
- 方向包括统一文件读写目标、搜索结果读取前授权检查、目录授权与精确文件授权分离。该工作涉及核心安全模型，合并与测试周期可能较长。

### 6.5 统一进程树生命周期管理

- 依据：[PR #6623](https://github.com/HKUDS/nanobot/pull/6623)
- **可能纳入下一版本：可能。**
- 属于内部架构重构，用户可见功能变化较小，但有助于提升取消、超时、清理和子进程终止的一致性。

### 6.6 0.4.1 正式发布

- 依据：[PR #6570](https://github.com/HKUDS/nanobot/pull/6570)
- **可能纳入下一版本：是，发布准备已完成。**
- 但截至统计时间没有新 Release，可能仍需完成合并分支、标签和制品发布流程。

---

## 7. 用户反馈摘要

### 真实痛点

1. **多会话并行时回复不可预测**  
   用户在一个会话运行期间切换到另一会话交流，回复可能串入原会话。该场景直接影响日常使用中的信任感，因为用户无法确认回复属于哪个任务。  
   关联：[Issue #5798](https://github.com/HKUDS/nanobot/issues/5798)

2. **版本升级可能引入会话行为回归**  
   用户明确指出 **0.3.0 没有该问题，0.3.5 出现**，说明共享会话或并发路由变更可能带来了回归。维护者应补充覆盖多会话并发、跨会话输入和恢复运行的回归测试。  
   关联：[Issue #5798](https://github.com/HKUDS/nanobot/issues/5798)

3. **Gateway 停止结果与实际进程状态不一致**  
   systemd 部署下，命令显示停止成功但服务自动重启。对生产环境而言，这会造成资源占用失控、用户无法真正关闭服务等问题。  
   关联：[Issue #6624](https://github.com/HKUDS/nanobot/issues/6624)

### 满意与正向反馈

- 今日 Issue 数据中没有足够多的用户评论或点赞，无法形成明确的满意度样本。
- 可观察到的正向信号主要来自维护侧：问题能够快速对应到修复 PR，且 Gateway 停止问题已完整关闭。
- PR #6594、#6412 等 WebUI 改进聚焦主题一致性、代码与 Diff 阅读体验，代表项目在基础可用性之外开始关注视觉和交互品质。  
  链接：[PR #6594](https://github.com/HKUDS/nanobot/pull/6594) ｜ [PR #6412](https://github.com/HKUDS/nanobot/pull/6412)

### 仍需补充的用户验证

- Issue #5798 的报告者尚未给出修复后的复测结果。
- 共享会话关闭后的迁移体验尚缺少用户反馈。
- 0.4.1 尚未正式发布，因此发布说明和迁移文档应明确标注破坏性变化及回滚方式。

---

## 8. 待处理积压

### 8.1 PR #6265：推理内容重放优化，冲突且开启时间较长

- 链接：[PR #6265](https://github.com/HKUDS/nanobot/pull/6265)
- 创建于 **2026-10-16**，至今日仍开放并标记冲突。
- 建议维护者：
  - 优先解决与当前会话重构分支的冲突；
  - 确认与 #5584 的复现用例全部通过；
  - 检查 Anthropic、Bedrock 等适配器是否仍会重复发送历史 thinking block；
  - 在下一版本发布前给出明确的兼容性说明。

### 8.2 PR #6621：移除全局共享会话，存在破坏性变更与冲突

- 链接：[PR #6621](https://github.com/HKUDS/nanobot/pull/6621)
- 当前为开放且冲突状态。
- 建议维护者：
  - 明确配置项是否完全废弃、保留期限及报错策略；
  - 提供旧配置自动迁移或启动时警告；
  - 补充“关闭共享会话后历史不迁移”的升级文档；
  - 确保 Gateway、CLI、WebUI 和多语言文案一致。

### 8.3 PR #6626：共享会话迁移文档

- 链接：[PR #6626](https://github.com/HKUDS/nanobot/pull/6626)
- 应与 #6621 配套合并，避免代码已移除但文档仍引导新用户启用旧机制。
- 建议补充升级步骤、行为差异表和故障排查说明。

### 8.4 PR #6616、#6623：作用域文件操作与进程树重构

- 链接：[PR #6616](https://github.com/HKUDS/nanobot/pull/6616) ｜ [PR #6623](https://github.com/HKUDS/nanobot/pull/6623)
- 两项均为架构性改动，仍待完成审查与集成。
- 建议重点验证：
  - 文件授权逃逸与目录授权边界；
  - 搜索目标读取前是否完成授权检查；
  - 子进程树在超时、取消和异常退出时是否被完整清理；
  - 与现有 Shell Tool 和执行会话管理的兼容性。

### 8.5 Issue #5798：会话串线问题仍开放

- 链接：[Issue #5798](https://github.com/HKUDS/nanobot/issues/5798)
- 创建于 **2026-09-17**，虽已有 #6613 修复，但尚未正式关闭。
- 建议维护者：
  - 请报告者在修复版本上复测；
  - 补充 Windows、Python 3.12 和多渠道并发场景；
  - 在确认修复覆盖 Gateway 路由和会话恢复后再关闭 Issue。

---

## 今日结论

NanoBot 今日处于**高活跃开发与发布前收敛阶段**：24 条 PR 更新、19 条关闭或合并，说明项目推进速度较快；会话归属、Gateway 停止、渠道投递和 WebUI 稳定性均有实质改进。  
当前最大风险不在日常功能数量，而在**共享会话架构迁移是否能够安全落地**，以及 **#6265、#6621 等长期或冲突 PR 能否及时收敛**。若 0.4.1 正式发布前完成这些改动并提供清晰迁移说明，项目健康度将从“活跃但有收敛风险”提升至“较稳定、可发布”。

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目动态日报

**报告日期：2026-11-11**  
**数据范围：过去 24 小时 GitHub 活动**  
**仓库：** [sipeed/picoclaw](https://github.com/sipeed/picoclaw)

---

## 1. 今日速览

- 过去 24 小时共更新 **1 条 Issue**，无新增 Pull Request、无 Issue 关闭、无 PR 合并或关闭，也未发布新版本。
- 唯一新增反馈为 **Windows 0.5.4 MCP 初始化失败导致 Agent Loop 卡死**的高影响 Bug，涉及聊天无响应、健康检查却持续正常、日志停止输出等异常现象（[#3468](https://github.com/sipeed/picoclaw/issues/3468)）。
- 今日社区讨论量较低，但问题严重性较高：故障可能同时影响多个聊天通道，并出现外部健康检查无法识别服务失活的情况。
- 项目今日没有代码合入，暂无法从活动数据确认修复进展；当前版本稳定性需要重点关注。

**项目健康度评估：偏弱 / 需关注。**  
Issue 数量本身不高，但核心 Agent 循环卡死属于高优先级稳定性问题；同时今日缺少 PR、发布与关闭活动，说明问题尚未进入可观察的修复阶段。

---

## 3. 项目进展

今日无合并或关闭的 Pull Request，因此没有可确认的功能交付或代码修复进展。

- PR 更新总数：**0**
- 已合并：**0**
- 已关闭：**0**
- 待合并：**0**
- 与今日 Bug 直接关联的 fix PR：**未发现**

虽然缺少代码活动本身不等同于项目停滞，但在当前已出现高影响故障的情况下，今日没有可见修复、讨论跟进或版本更新，进展幅度有限。

---

## 4. 社区热点

### [Issue #3468：Windows 0.5.4 MCP 初始化失败后 Agent Loop 仍会卡住](https://github.com/sipeed/picoclaw/issues/3468)

- 状态：**Open**
- 作者：[@eaglecet-dev](https://github.com/eaglecet-dev)
- 创建时间：2026-11-11
- 评论数：**0**
- 点赞数：**0**
- 热度判断：按互动量计为冷门，但按技术影响范围计为高优先级。

**核心诉求：**

用户希望 MCP 服务在网关启动阶段连接失败时，PicoClaw 不应永久卡住 Agent Loop。具体表现为：

1. 用户界面持续显示 “Thinking”，不再生成回复；
2. 所有聊天通道均可能受到影响；
3. `GET /health` 仍返回 `{"status":"ok"}`，无法反映 Agent 已失活；
4. `gateway.log` 停止输出，增加线上诊断难度；
5. 单个 MCP 服务连接失败，可能导致整个网关不可用。

**问题背后反映的诉求并不只是“允许 MCP 失败”，而是建立可靠的降级和可观测机制：**

- MCP 初始化失败应设置超时并快速失败或降级；
- 核心 Agent Loop 不应被外部依赖无限阻塞；
- `/health` 应区分进程存活、网关存活与 Agent 调度存活；
- 日志线程或执行链路停止输出时，应有明确的超时、堆栈或心跳记录。

---

## 5. Bug 与稳定性

### 严重级别：高

#### [Issue #3468：MCP 初始化失败导致 Agent Loop 挂起](https://github.com/sipeed/picoclaw/issues/3468)

- **影响版本：** Windows 上的 0.5.4
- **影响范围：** 配置中的任一 MCP Server 在网关启动时连接失败，可能导致所有通道停止处理对话轮次。
- **外部表现：** 聊天持续显示 “Thinking”；`/health` 返回正常；`gateway.log` 停止更新。
- **稳定性风险：** 用户无法继续使用核心聊天能力；健康检查存在假阳性；日志冻结会妨碍定位是连接等待、锁竞争还是执行线程退出。
- **是否已有 fix PR：** **否**
- **是否已有发布修复：** **否**
- **当前状态：** Open，暂无评论

**维护建议：**

1. 首先复现并定位 MCP 初始化等待是否未设置超时、是否在异步初始化路径中发生未捕获异常；
2. 将 MCP 连接失败改为可配置的快速失败、重试或跳过策略，避免阻塞主 Agent Loop；
3. 修复 `/health` 探针语义，至少增加 Agent Loop 心跳或最近一次成功处理轮次的时间戳；
4. 为 MCP 连接失败、初始化超时和 Agent Loop 异常分别补充结构化日志；
5. 增加 Windows 集成测试，覆盖“至少一个 MCP 服务不可达时聊天仍可继续”的场景。

---

## 6. 功能请求与路线图信号

今日没有新增独立的功能请求，也没有待合并 PR 可用于推断下一版本计划。

不过，[Issue #3468](https://github.com/sipeed/picoclaw/issues/3468) 已释放出明确的工程信号：

- **MCP 故障隔离：** 外部工具服务不可用时，核心聊天能力应保持可用；
- **初始化超时与重试策略：** 建议提供超时阈值、最大重试次数及失败后跳过策略；
- **增强健康检查：** `/health` 不应只报告进程存活，还应反映 Agent Loop 是否仍在工作；
- **可观测性增强：** 日志停止后仍应保留错误上下文，必要时记录初始化阶段和依赖状态；
- **跨平台稳定性保障：** Windows 路径应进入 MCP 和 Agent Loop 的持续集成测试范围。

这些能力与现有 Issue 高度一致，但由于没有关联 PR 或维护者排期，暂不能判断其是否已进入下一版本路线图。

---

## 7. 用户反馈摘要

今日 Issue 暂无评论，无法提取回复样本、点赞趋势或多人复现情况。

根据 [#3468](https://github.com/sipeed/picoclaw/issues/3468) 的描述，可归纳出以下真实使用痛点：

- **使用场景：** Windows 环境下运行 PicoClaw 0.5.4，并配置了多个 MCP Server。
- **故障触发条件：** 网关启动时至少一个 MCP Server 无法连接。
- **不满意点：**
  - 聊天界面无限显示 “Thinking”，用户无法获得失败提示；
  - 所有通道均停止响应，影响范围超出故障 MCP 本身；
  - `/health` 返回正常，导致监控或用户误判系统健康；
  - 日志冻结，缺少明确的失败原因和调用栈。
- **尚无法评价的方面：** 由于评论数为 0，目前没有足够证据判断影响是否覆盖所有 Windows 用户、是否存在 Linux/macOS 共性，以及 0.5.3 等旧版本是否正常。

---

## 8. 待处理积压

在所提供的过去 24 小时数据中，仅有 [Issue #3468](https://github.com/sipeed/picoclaw/issues/3468) 一条更新，尚无法从有限数据识别长期未响应的历史 Issue 或 PR。

就当前新增积压而言：

- **#3468 属于当日新增且尚未响应的高严重度 Bug**，虽不属于历史长期积压，但应尽快确认复现、影响范围与修复负责人。
- 当前没有待处理 PR，也没有 Issue 关闭记录，因此不存在可量化的历史 PR 审查积压。
- 建议维护者优先补充问题标签，例如 `bug`、`windows`、`mcp`、`agent-loop`、`health-check`，以提升该 Issue 的可发现性。

---

**日报结论：** PicoClaw 今日活跃度较低，没有代码合入或版本发布；唯一新增 Issue 指向 Windows 0.5.4 中可能阻断全部聊天的 MCP 初始化故障。虽然该 Issue 暂无评论和点赞，但因涉及核心 Agent Loop、健康检查假阳性及日志冻结，应按高优先级稳定性问题处理。当前未见 fix PR 或发布修复，项目健康度评估为**偏弱、需关注**。

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI 项目动态日报

**日期：2026-11-11**  
**数据范围：过去 24 小时 GitHub Issues / Pull Requests 更新**

## 1. 今日速览

- 今日共有 **1 条 Issue 更新、6 条 PR 更新**，其中 **1 个 PR 仍待合并、5 个已合并或关闭**，整体开发节奏较快。
- 本日改动主要集中在 **Cowork 交互能力增强、网页搜索与 OpenClaw 稳定性、模型设置保存、macOS 全屏菜单兼容**等方向。
- 今日没有新版本发布，当前所有功能变更尚未形成正式 Release，用户暂不应假定相关修复已进入稳定版本。
- Issue #3044 聚焦“龙虾客户端—实验功能—DSH 工作台”可能触发封号的问题，涉及账号安全与实验功能边界，是今日最需要官方澄清的用户风险点。
- 综合评估：**项目健康度良好、工程推进稳定，但发布与用户沟通仍是短板**。今日有 5 个 PR 完成闭环，不过仍有 1 个新 PR 等待评审。

---

## 2. 版本发布

今日 **无新版本发布**。

因此暂无对应的 Release 更新说明、破坏性变更或迁移指引。下列 PR 的改动是否进入正式版本，仍需以后续 Release Notes 为准。

---

## 3. 项目进展

### 3.1 Cowork：已完成回复支持内联朗读

- **PR：[#3045](https://github.com/netease-youdao/LobsterAI/pull/3045)**
- **状态：OPEN，待合并**
- **改动方向：** `renderer / docs / main / cowork`
- 在主聊天回复完成后，提供类似“复制 / Fork”之后的 **内联朗读入口**：
  - 点击后开始朗读；
  - 再次点击可停止；
  - 未登录用户会收到登录提示，登录后需要再次点击才能播放。

**项目意义：**  
该 PR 将多模态输出能力进一步延伸到已完成回复，属于 Cowork 使用体验增强。当前仍为待合并状态，尚不能视为已正式交付。

---

### 3.2 图片创作示例与作品目录

- **PR：[#3041](https://github.com/netease-youdao/LobsterAI/pull/3041)**
- **状态：CLOSED，已合并或关闭**
- **改动方向：** `renderer / docs / main / cowork`
- 新任务页增加默认展开的“图片创作”作品区，通过具体示例帮助用户发现生图能力。
- 用户选择作品后，可以：
  - 编辑提示词；
  - 使用示例素材；
  - 上传自己的图片；
  - 将准备好的内容带入输入框，再由用户确认发送。
- 首页和专家广场中的“图像创意搭档”复用统一作品目录和创作流程。
- 作品目录通过 Overmind 动态配置，并支持中英文、开关、排序、参考图及模型来源说明。

**项目意义：**  
这使图片生成能力从单一入口升级为“示例发现—素材准备—提示词编辑—确认发送”的完整工作流，有助于降低用户使用门槛并提高功能采用率。

---

### 3.3 网页搜索改用应用内浏览器

- **PR：[#3043](https://github.com/netease-youdao/LobsterAI/pull/3043)**
- **状态：CLOSED，已合并或关闭**
- **改动方向：** `docs / main / openclaw / skills`
- 应用内浏览器模式下，网页搜索与页面读取改由带认证的本地桥接在 Electron 隐藏页面中执行，从而复用应用内浏览器的会话、登录状态和代理配置。
- 独立模式继续使用 Playwright 与 Chrome，搜索策略保持 Google 优先、Bing 回退。
- 增加 Fake-IP DNS 与 TUN 网卡探测；命中相关网络环境时，允许 OpenClaw `web_fetch` 访问 RFC 2544 基准测试地址段，同时继续限制其他私有地址段。
- PR 摘要显示，相关 **5 个 Vitest 文件、202 项测试通过**，覆盖搜索桥接、隐藏页面、Fake-IP 检测及 OpenClaw 配置同步。

**项目意义：**  
该变更改善了登录态复用、代理兼容和复杂网络环境下的搜索可靠性，同时保留了对内部网络访问的安全限制，对 Web 搜索与 OpenClaw 集成具有较高价值。

---

### 3.4 模型列表刷新时保留智能体设置草稿

- **PR：[#3042](https://github.com/netease-youdao/LobsterAI/pull/3042)**
- **状态：CLOSED，已合并或关闭**
- **改动方向：** `renderer`
- 修复可用模型列表刷新时覆盖用户未保存编辑的问题。
- 表单初始化被限定为仅在智能体 ID 变化时执行；模型列表更新时，仅重新解析已保存模型。
- 用户在设置面板中选择的模型会单独保留，并使用当前已保存模型判断是否需要同步思考档位。
- 摘要显示 **4 个相关 Vitest 文件、43 项测试通过**，并完成了 Electron 开发版及模拟 IPC 隔离渲染窗口验证。

**项目意义：**  
这是直接影响用户编辑体验和数据安全性的稳定性修复，可降低配置丢失风险。

---

### 3.5 macOS 全屏应用上显示桌面伴侣菜单

- **PR：[#3040](https://github.com/netease-youdao/LobsterAI/pull/3040)**
- **状态：CLOSED，已合并或关闭**
- **改动方向：** `renderer / docs / main`
- 修复 macOS 上后台应用处于全屏状态时，双击桌面伴侣图标无法显示菜单的问题。
- 根因与 macOS 10.14 之后的窗口层级限制有关：普通 Dock 应用及原生 `Menu.popup` 菜单无法正常显示在其他全屏应用之上。

**项目意义：**  
该修复提升了桌面伴侣在 macOS 全屏场景中的可用性和系统兼容性，属于明确且边界清晰的跨平台体验改进。

---

### 3.6 OpenClaw 修复时避免大型状态快照超时

- **PR：[#3039](https://github.com/netease-youdao/LobsterAI/pull/3039)**
- **状态：CLOSED，已合并或关闭**
- **改动方向：** `main / openclaw`
- 修复一键修复 OpenClaw 时，大型状态快照仍在复制便触发 15 分钟命令超时的问题。
- 改动在复制前统计快照文件数量和数据大小，并根据实际数据量动态调整等待时间。
- 复制过程中可报告进度，使等待时长与任务规模相匹配。

**项目意义：**  
该修复减少了大型环境执行自动修复时因固定超时而失败的情况，对 OpenClaw 的可恢复性和运维体验有直接改善。

---

### 3.7 今日推进程度

今日至少完成了以下五类工程闭环：

1. 图片创作流程与作品目录能力；
2. 网页搜索会话、代理和复杂网络兼容；
3. 智能体设置草稿保存；
4. macOS 全屏桌面伴侣菜单；
5. OpenClaw 大型快照修复超时。

整体不是单一功能迭代，而是围绕 **内容创作、Agent 配置、Web 能力、桌面体验和修复工具可靠性**多线推进。考虑到今日有 6 个 PR 更新、5 个 PR 结束，项目处于较高开发活跃度。

---

## 4. 社区热点

### 4.1 今日唯一新增 Issue：DSH 工作台是否存在封号风险

- **Issue：[#3044 龙虾客户端——实验功能——DSH 工作台——会封号？](https://github.com/netease-youdao/LobsterAI/issues/3044)**
- **状态：OPEN**
- **作者：** @Userluckytian
- **评论数：** 1
- **点赞数：** 0

该 Issue 的核心诉求是确认 **实验功能中的 DSH 工作台是否会导致账号被封禁**，并配有界面截图，但摘要中未提供完整复现步骤、封禁提示或具体账号状态信息。

**背后的用户诉求：**

- 对实验功能与平台风控规则之间的边界不清晰；
- 担心正常使用工作台也可能触发账号处罚；
- 在缺少明确说明的情况下，需要官方提供功能风险和使用规范；
- 该问题可能影响潜在用户试用实验功能的意愿。

**社区讨论判断：**  
由于今日仅有 1 个 Issue，因此 #3044 是当日最活跃议题；但其只有 1 条评论和 0 个点赞，尚不能视为广泛社区共识，更接近一个需要官方及时回应的**高敏感度单机反馈**。

---

### 4.2 PR 热度整体偏低

今日 6 个 PR 均显示 **0 个点赞**，公开摘要中也没有明确评论数量。虽然 #3045 是当前唯一待合并 PR，也是当日最值得关注的开放变更，但从现有公开数据看，尚未形成高热度社区讨论。

---

## 5. Bug 与稳定性

### 严重程度：高

#### 1. DSH 工作台可能触发封号

- **Issue：[#3044](https://github.com/netease-youdao/LobsterAI/issues/3044)**
- **状态：OPEN**
- **风险类型：** 账号安全 / 平台合规 / 实验功能风险
- **是否已有 Fix PR：** **未发现**

目前没有证据表明已出现正式封号，也没有足够信息判断 DSH 工作台与封禁之间的因果关系。但该问题涉及用户账号资产和信任，应优先由维护者确认：

- 是否存在已知风控策略；
- 是否与特定操作频率、账号环境或第三方服务有关；
- 实验功能是否明确提示风险；
- 是否需要增加登录前告知、行为限制或申诉指引。

---

### 严重程度：中高

#### 2. OpenClaw 大型状态快照导致一键修复超时

- **Issue/修复 PR：[#3039](https://github.com/netease-youdao/LobsterAI/pull/3039)**
- **状态：CLOSED**
- **风险类型：** 修复失败 / 命令超时
- **是否已有 Fix PR：** **有，#3039 本身即修复 PR**

影响范围可能包括拥有大量会话、插件或状态文件的用户。由于修复功能本身用于恢复异常，该故障会进一步降低用户的自助恢复成功率。

---

### 严重程度：中

#### 3. 模型列表刷新覆盖智能体设置中的未保存编辑

- **Issue/修复 PR：[#3042](https://github.com/netease-youdao/LobsterAI/pull/3042)**
- **状态：CLOSED**
- **风险类型：** 配置丢失 / 状态覆盖
- **是否已有 Fix PR：** **有，#3042 本身即修复 PR**

这是典型的刷新与状态同步回归问题。修复通过限制初始化时机、分离临时选择与已保存模型，并增加测试和隔离渲染验证，属于较完整的修复闭环。

---

#### 4. macOS 全屏应用上桌面伴侣菜单无法显示

- **Issue/修复 PR：[#3040](https://github.com/netease-youdao/LobsterAI/pull/3040)**
- **状态：CLOSED**
- **风险类型：** 平台兼容 / 功能不可用
- **是否已有 Fix PR：** **有，#3040 本身即修复 PR**

问题仅影响 macOS 全屏场景，但会直接阻断快捷面板、形象切换和设置等入口。普通窗口下不受影响。

---

### 严重程度：中低

#### 5. 应用内浏览器模式下的网页搜索会话与代理兼容性

- **Issue/修复 PR：[#3043](https://github.com/netease-youdao/LobsterAI/pull/3043)**
- **状态：CLOSED**
- **风险类型：** 网络兼容 / 会话复用 / 安全边界
- **是否已有 Fix PR：** **有，#3043 本身即修复 PR**

PR 通过复用应用内浏览器会话改善登录态和代理一致性，同时针对 Fake-IP、TUN 和私网访问设置边界。该类问题具有环境依赖性，部署后仍建议关注不同代理、DNS 和 OpenClaw 配置下的回归表现。

---

## 6. 功能请求与路线图信号

### 6.1 Cowork 已完成回复内联朗读

- **PR：[#3045](https://github.com/netease-youdao/LobsterAI/pull/3045)**
- **状态：** OPEN
- **路线图信号：** 高

这是今日唯一待合并 PR，也是最明确的功能方向。朗读能力直接扩展了已完成回复的消费方式，且与 Fork、Copy 等操作并列，具备较清晰的产品价值。若评审通过，较可能进入下一版本或近期迭代。

建议合并前重点确认：

- 浏览器和 Electron 端 API 一致性；
- 播放中切换回复、停止生成或退出页面时的资源清理；
- 多语言及长文本播放体验；
- 登录中断后的状态恢复；
- 权限、隐私说明以及音频生成失败降级。

---

### 6.2 图片创作示例和统一作品目录

- **PR：[#3041](https://github.com/netease-youdao/LobsterAI/pull/3041)**
- **状态：** CLOSED
- **路线图信号：** 高

虽然 PR 已结束，但其内容显示图片创作正在从“直接生成”转向更完整的发现与编辑流程。统一作品目录、Overmind 动态配置、首页与专家广场复用，意味着后续可能继续推进：

- 图片作品模板化；
- 参考图和提示词资产管理；
- 专家能力与生图流程深度结合；
- 基于用户反馈持续扩展图片创作入口。

---

### 6.3 DSH 工作台的合规说明与风险治理

- **Issue：[#3044](https://github.com/netease-youdao/LobsterAI/issues/3044)**
- **状态：** OPEN
- **路线图信号：** 中高，取决于官方回应

如果该 Issue 反映的是实验功能风险认知缺口，项目可能需要补充：

- 功能风险提示和允许的使用边界；
- 登录前说明；
- 实验功能标识；
- 异常行为或封禁申诉说明；
- 对可能触发风控的自动化行为进行限频或增强校验。

当前没有对应 PR，尚不能确认会进入下一版本。

---

### 6.4 应用内浏览器能力向更多 Agent 工具链延伸

- **PR：[#3043](https://github.com/netease-youdao/LobsterAI/pull/3043)**
- **状态：** CLOSED
- **路线图信号：** 中高

网页搜索、页面读取、OpenClaw 配置同步与私网访问策略同时得到处理，说明应用内浏览器可能正在从 UI 浏览能力向 Agent 执行基础设施演进。后续值得观察：

- 更多工具是否统一复用应用内浏览器会话；
- 搜索、页面读取与自动化操作是否共享权限模型；
- Fake-IP、TUN 和代理场景是否进一步标准化。

---

## 7. 用户反馈摘要

今日公开 Issue 评论量有限，因此可提炼的真实用户反馈主要集中在 #3044：

1. **核心痛点是账号安全的不确定性。**  
   用户在 DSH 工作台实验功能中操作后，担心账号会被平台风控，说明用户对“实验功能是否安全”“哪些行为可能触发处罚”缺乏明确认知。

2. **实验功能与正式能力的风险边界不清。**  
   用户使用截图反馈问题，但当前摘要未展示明确的封禁通知或错误详情，维护者需要进一步确认具体场景，避免风险沟通停留在主观担忧层面。

3. **现有反馈无法判断是否已发生实际封禁。**  
   当前 Issue 只有 1 条评论、0 个点赞，没有形成多人复现或结果确认，因此应将其标记为“待澄清风险”，而非已确认的批量封号事故。

4. **从今日 PR 可见的核心体验诉求集中在降低操作摩擦。**  
   图片创作希望降低生图门槛，网页搜索希望复用登录和代理，模型设置希望避免草稿丢失，OpenClaw 修复希望避免超时。这些工程变更反映了用户在稳定性、连续性和可恢复性方面的实际痛点。

---

## 8. 待处理积压

### 8.1 待评审 PR：#3045

- **PR：[#3045 feat(cowork): add inline read aloud for completed replies](https://github.com/netease-youdao/LobsterAI/pull/3045)**
- **状态：** OPEN
- **创建时间：** 2026-11-11

这是今日唯一仍待合并的 PR。建议维护者优先完成代码审查，确认登录流程、音频资源释放、长文本处理和无障碍支持，并明确其是否纳入下一版本。

### 8.2 待官方回复 Issue：#3044

- **Issue：[#3044 龙虾客户端——实验功能——DSH 工作台——会封号？](https://github.com/netease-youdao/LobsterAI/issues/3044)**
- **状态：** OPEN
- **创建时间：** 2026-11-11
- **当前评论：** 1 条

建议维护者尽快确认是否存在已知风控行为，并补充实验功能安全说明。由于用户已经产生账号处罚担忧，即使最终确认不存在关联，也应主动回复并提供明确依据。

### 8.3 Release 跟进

今日虽然有 5 个 PR 完成合并或关闭，但 **没有新版本发布**。建议维护者：

- 汇总 #3041、#3043、#3042、#3040、#3049 等完成项对应的正式版本；
- 在 Release Notes 中突出设置草稿丢失、OpenClaw 超时、macOS 全屏菜单等修复；
- 对实验功能的风险与使用边界进行专项说明；
- 明确 #3045 是否进入下一版本。

> 注：以上“待处理积压”仅基于本次提供的 24 小时数据。提供的数据中未包含更长时间范围的历史未关闭 Issue/PR，因此无法判断是否存在更早的长期积压项。

---

## 今日结论

LobsterAI 今日保持较高工程活跃度，完成了一次较明显的稳定性与体验改进组合：图片创作工作流得到扩展，网页搜索和 OpenClaw 的兼容性提升，模型设置与 macOS 全屏场景的关键问题得到修复。当前最值得关注的事项有两个：一是等待评审的 **Cowork 内联朗读 PR #3045**，二是需要官方回应的 **DSH 工作台封号风险 Issue #3044**。同时，虽然修复推进较快，但今日没有版本发布，用户侧感知和变更透明度仍有提升空间。

</details>

<details>
<summary><strong>QwenPaw</strong> — <a href="https://github.com/agentscope-ai/QwenPaw">agentscope-ai/QwenPaw</a></summary>

# QwenPaw 项目动态日报

**统计日期：2026-11-11**  
**项目：** [agentscope-ai/QwenPaw](https://github.com/agentscope-ai/QwenPaw)

## 1. 今日速览

过去 24 小时共更新 **11 条 Issues**、**32 条 Pull Requests**，并发布 **1 个新版本 `v2.3.0-beta.4`**。其中 **6 条 Issue 仍开放、5 条已关闭；26 个 PR 待合并、6 个已合并或关闭**，反映出项目当前仍处于高强度开发与验证阶段。

今日进展集中在三条主线：**渠道插件与桌面端稳定性、本地模型与推理能力、Console 交互兼容性**。其中已关闭问题显示，QQ 渠道、桌面渠道插件、Creator TTS 配置等故障已有明确修复路径；同时，Safari 队列按钮、飞书启动竞态、Hub 文件下载等问题仍需重点跟进。

整体健康度评估为 **“活跃但集成压力较高”**：版本发布与修复响应较为及时，但大量跨层、跨端变更仍处于待合并状态，且部分长期 PR 自 10 月中下旬起持续更新，积压较明显。

---

## 2. 版本发布

### `v2.3.0-beta.4`

- **版本类型：** Beta 预发布
- **Release：** [v2.3.0-beta.4](https://github.com/agentscope-ai/QwenPaw/releases/tag/v2.3.0-beta.4)
- **安装验证 Issue：** [#8667](https://github.com/agentscope-ai/QwenPaw/issues/8667)

#### 更新重点

1. **渠道插件依赖在更新过程中得到保留**
   - 修复更新后插件依赖丢失的问题。
   - 同步改善渠道插件启动流程，降低升级后插件无法加载或启动失败的概率。
   - 相关 PR：[#8653](https://github.com/agentscope-ai/QwenPaw/pull/8653)

2. **插件增量依赖安装支持中断恢复**
   - 当依赖安装被中断时，插件可恢复未完成的增量安装过程，减少重新下载或依赖状态损坏。
   - 相关发布说明同样指向渠道与插件依赖修复工作。

#### 破坏性变更

- 当前提供的信息中**未明确标注破坏性变更**。
- 由于该版本仍为 Beta，且涉及插件依赖保存和运行时启动逻辑，建议升级前备份插件配置，并在生产环境暂缓自动更新。

#### 迁移注意事项

- 升级后建议检查：
  - 各渠道插件依赖是否完整；
  - 飞书、QQ、微信、元宝等渠道能否正常启动；
  - 插件升级中断后能否恢复；
  - 桌面打包版是否仍出现 `WORKER_START_FAILED` 或 `CHANNEL_NOT_CONNECTED`。
- 飞书渠道启动竞态问题 [#8669](https://github.com/agentscope-ai/QwenPaw/issues/8669) 表明，**Beta 4 尚不能完全消除桌面端渠道启动失败**。
- 桌面渠道依赖检查仍有后续修复 PR：[#8672](https://github.com/agentscope-ai/QwenPaw/pull/8672)。

---

## 3. 项目进展

### 已合并或关闭的重要 PR

#### 渠道与消息处理

- **[#8319] 修复 QQ 普通群聊事件被丢弃**
  - 新增对 `GROUP_MESSAGE_CREATE` 网关事件的支持，避免普通群消息因仅识别 mention 事件而被忽略。
  - 该 PR 已关闭，对应问题为 [#8313](https://github.com/agentscope-ai/QwenPaw/issues/8313)。
  - 链接：[PR #8319](https://github.com/agentscope-ai/QwenPaw/pull/8319)

- **[#8666] 版本号升级至 2.3.0**
  - 已关闭，配合 `v2.3.0-beta.4` 发布推进版本收尾。
  - 链接：[PR #8666](https://github.com/agentscope-ai/QwenPaw/pull/8666)

- **[#8672] 修复桌面端渠道依赖检查**
  - 针对桌面打包环境中渠道依赖校验异常继续修复。
  - 链接：[PR #8672](https://github.com/agentscope-ai/QwenPaw/pull/8672)

#### 运行时与模型能力

当前较重要的模型与运行时 PR 尚未全部合并，但体现了下一阶段方向：

- **[#8236] 按 Ollama `num_ctx` 标注上下文窗口**
  - 避免本地 Ollama 模型被错误标为默认 128K 上下文。
  - 链接：[PR #8236](https://github.com/agentscope-ai/QwenPaw/pull/8236)

- **[#8052] Whisper API 模型名称可配置**
  - 用户可选择兼容 Whisper API 的 provider，并指定不同模型 ID，不再局限于 `whisper-1`。
  - 链接：[PR #8052](https://github.com/agentscope-ai/QwenPaw/pull/8052)

#### 项目推进评价

今日已完成的关键修复主要覆盖 **QQ 群消息、版本发布及桌面依赖校验**；与此同时，Safari、外部启动任务重连、任务清理、本地模型管理等 PR 仍在开发或审查阶段。项目功能面继续扩张，但尚不能仅依据 PR 数量判断稳定性已完全改善。

---

## 4. 社区热点

> 提供的 PR 列表中多数评论数为 `undefined`，因此无法严谨地按评论数排序。以下综合活跃时间、持续时间、问题影响范围及关联修复数量进行排序。

### 1. PR #8648：Console 增加本地引擎、GPU 与自动更新控制

- 链接：[PR #8648](https://github.com/agentscope-ai/QwenPaw/pull/8648)
- 规模：XL
- 状态：开放
- 热点原因：这是分层的本地模型功能核心，将底层引擎能力暴露到 Console，用户关注度预计较高。
- 诉求：降低本地模型部署门槛，让用户可以在界面中管理推理引擎、GPU 使用和运行时更新。
- 关联 PR：
  - [#8649](https://github.com/agentscope-ai/QwenPaw/pull/8649)：llama.cpp GPU 与自动更新
  - [#8647](https://github.com/agentscope-ai/QwenPaw/pull/8647)：托管 MLX 与运行时自动更新

### 2. PR #8647：托管 MLX 引擎与运行时自动更新

- 链接：[PR #8647](https://github.com/agentscope-ai/QwenPaw/pull/8647)
- 规模：XXL
- 状态：开放
- 热点原因：Apple Silicon 本地推理是 QwenPaw 扩展个人 AI 助手能力的重要场景。
- 诉求：简化 MLX 环境安装、模型切换和运行时更新，减少手动配置。
- 风险：该 PR 依赖 #8649，属于堆叠式开发，需按依赖顺序审查。

### 3. PR #8649：llama.cpp GPU 控制与自动更新

- 链接：[PR #8649](https://github.com/agentscope-ai/QwenPaw/pull/8649)
- 规模：L
- 状态：开放
- 热点原因：GPU 加速直接决定本地模型可用性和交互体验，自动更新则降低维护成本。
- 诉求：让用户在 Console 中控制 GPU 使用并获得运行时更新能力。
- 推进关系：应先合入，再推进 #8647 和 #8648。

### 4. Issue #8669：飞书渠道每次启动均因初始断连状态失败

- 链接：[Issue #8669](https://github.com/agentscope-ai/QwenPaw/issues/8669)
- 评论：3
- 状态：开放
- 热点原因：在 Windows 桌面打包版中可稳定复现，且直接影响核心渠道可用性。
- 诉求：启动时应区分“尚未连接”和“连接失败”，不要把初始 `platform_state="disconnected"` 直接判定为致命错误。
- 已有修复迹象：与桌面渠道依赖及启动修复相关，包括 [#8672](https://github.com/agentscope-ai/QwenPaw/pull/8672)。

### 5. Issue #7990：Aliyun Token Plan 模型缺少思考参数声明

- 链接：[Issue #7990](https://github.com/agentscope-ai/QwenPaw/issues/7990)
- 评论：4
- 状态：开放
- 热点原因：虽然创建于 9 月，但过去 24 小时仍有更新，属于持续获得社区反馈的长期高关注问题。
- 诉求：在模型目录中补充 `thinking_param_style`，使 Console 恢复“思考模式/推理强度”等控件。
- 预期影响：Token Plan 用户的模型虽然上游支持 `reasoning_effort`、`thinking_budget` 和 `enable_thinking`，但前端无法提供相应控制。

### 6. PR #8268：确保运行完成回调始终释放任务状态

- 链接：[PR #8268](https://github.com/agentscope-ai/QwenPaw/pull/8268)
- 规模：M
- 状态：开放
- 热点原因：解决运行永久停留在 `running` 状态的稳定性问题，涉及任务生命周期和资源清理。
- 诉求：即使完成回调挂起或被取消，也必须移除 `TaskTracker._runs` 中的任务记录。
- 关联问题：[#8173](https://github.com/agentscope-ai/QwenPaw/issues/8173)

### 7. PR #8487：工具结果折叠时识别 URL 引用的媒体

- 链接：[PR #8487](https://github.com/agentscope-ai/QwenPaw/pull/8487)
- 规模：S
- 状态：开放
- 热点原因：上下文压缩可能丢失工具返回的图片或媒体引用，影响历史对话回看。
- 诉求：在折叠长工具结果时保留 URL 媒体的可识别性。

---

## 5. Bug 与稳定性

按用户影响范围、复现确定性和是否阻断核心功能排列如下。

### P0：严重影响渠道核心功能

#### 1. 飞书渠道启动竞态，桌面版每次启动失败

- Issue：[#8669](https://github.com/agentscope-ai/QwenPaw/issues/8669)
- 状态：开放
- 现象：Windows 打包版每次启动均出现 `CHANNEL_NOT_CONNECTED`。
- 根因：`_wait_connected` 将初始 `platform_state="disconnected"` 视为致命状态。
- 影响：飞书渠道完全不可用。
- 已有修复 PR：存在相关修复 [#8672](https://github.com/agentscope-ai/QwenPaw/pull/8672)，但 Issue 尚未关闭。

#### 2. 桌面打包版所有渠道插件无法激活

- Issue：[#8644](https://github.com/agentscope-ai/QwenPaw/issues/8644)
- 状态：已关闭
- 现象：`validate_runtime_identity` 访问 `DependencyReadEvidence.supported_tags` 时触发 `AttributeError`，进而出现 `WORKER_START_FAILED`。
- 影响：`feishu`、`wechat`、`yuanbao` 等渠道无法启动。
- 修复进展：Issue 已关闭，且新版本已包含相关依赖与启动修复；另有后续修复 PR [#8672](https://github.com/agentscope-ai/QwenPaw/pull/8672)。

### P1：高影响，但存在明确规避或局部范围

#### 3. Safari 中消息队列操作按钮不渲染

- Issue：[#8663](https://github.com/agentscope-ai/QwenPaw/issues/8663)
- 状态：开放
- 影响：Safari 用户无法通过界面编辑、中断并发送或删除排队消息；Chrome 正常。
- 已有修复 PR：[#8670](https://github.com/agentscope-ai/QwenPaw/pull/8670)
- 修复内容：不再向 Lucide 图标传递无效的 `size="small"`。
- 当前判断：**已有直接 fix PR，待合并或验证。**

#### 4. Hub 聊天正文中的 `/workspace/` 文件链接打开 SPA HTML

- Issue：[#8661](https://github.com/agentscope-ai/QwenPaw/issues/8661)
- 状态：开放
- 影响：用户点击文件链接后无法下载文件，只得到前端 HTML 页面。
- 已有明确修复 PR：暂未列出。
- 建议优先级：中高，因为 Agent 生成文件链接是常见工作流。

#### 5. QQ 渠道启用状态被静默重置

- Issue：[#8406](https://github.com/agentscope-ai/QwenPaw/issues/8406)
- 状态：已关闭
- 影响：用户以为渠道仍启用，实际服务未运行且没有警告。
- 修复进展：Issue 已关闭；具体对应 PR 未在提供数据中明确列出。

#### 6. QQ 图片-only C2C 消息被静默丢弃

- Issue：[#8651](https://github.com/agentscope-ai/QwenPaw/issues/8651)
- 状态：已关闭
- 影响：仅含图片的私聊消息无法触发 Agent。
- 特点：问题发生在模型调用前，与 provider 无关。
- 修复进展：Issue 已关闭。

### P2：模型配置、语音及兼容性故障

#### 7. Creator TTS 无法使用 Aliyun Token Plan Key

- Issue：[#8534](https://github.com/agentscope-ai/QwenPaw/issues/8534)
- 状态：已关闭
- 原因：TTS 模型族使用不同 DashScope 服务，且模型配置 UI 缺少对应协议选项。
- 修复进展：Issue 已关闭。

#### 8. 飞书消息卡片中的 Markdown 表格显示异常

- Issue：[#8601](https://github.com/agentscope-ai/QwenPaw/pull/8601)
- 状态：对应 PR 开放
- 现象：Console 正常显示表格，但钉钉 AI 卡片中 pipe-table 被作为普通段落。
- 已有修复 PR：[#8601](https://github.com/agentscope-ai/QwenPaw/pull/8601)
- 当前判断：**已有 fix PR，待审查。**

### 稳定性工程类 PR

- **任务永久保持 running**
  - PR：[#8268](https://github.com/agentscope-ai/QwenPaw/pull/8268)
  - 作用：确保运行完成回调即使挂起或取消，也会执行资源清理。
  - 状态：开放。

- **Windows 沙箱卷根目录 ACL 污染**
  - PR：[#8018](https://github.com/agentscope-ai/QwenPaw/pull/8018)
  - 作用：禁止在卷根目录写入可继承 ACE，避免权限重新传播至全部子项。
  - 状态：开放。

- **中文 Windows 工具静默丢弃 GBK/CP936 字节**
  - PR：[#8234](https://github.com/agentscope-ai/QwenPaw/pull/8234)
  - 作用：让 `read_file_safe`、编辑和 grep 正确解码 GBK/CP936，而非使用 `errors="ignore"` 静默删除字节。
  - 状态：开放。

- **上下文压缩遗漏 URL 媒体**
  - PR：[#8487](https://github.com/agentscope-ai/QwenPaw/pull/8487)
  - 状态：开放。

---

## 6. 功能请求与路线图信号

### 6.1 本地模型运行、GPU 与自动更新

这是今日最清晰的路线图信号：

- [#8649](https://github.com/agentscope-ai/QwenPaw/pull/8649)：llama.cpp GPU 控制与运行时自动更新
- [#8647](https://github.com/agentscope-ai/QwenPaw/pull/8647)：托管 MLX 与运行时自动更新
- [#8648](https://github.com/agentscope-ai/QwenPaw/pull/8648)：Console 本地引擎、GPU 和自动更新控制

**判断：进入下一版本概率高。**  
三项 PR 已形成明确的分层设计，且相互标注了合并顺序。若顺利合入，QwenPaw 将从“依赖用户手动准备本地推理环境”向“桌面端托管式本地模型控制台”演进。

### 6.2 模型思考参数标准化

- Issue：[#7990](https://github.com/agentscope-ai/QwenPaw/issues/7990)

**判断：进入下一版本概率较高。**  
问题明确指向模型目录缺少 `thinking_param_style`，修复范围小、收益直接，并且兼容多个阿里云 Token Plan 模型的既有能力。

### 6.3 Mistral Provider 插件

- Issue：[#8656](https://github.com/agentscope-ai/QwenPaw/issues/8656)

用户希望插件处理：

- `reasoning_content` 导致的 422；
- OpenAI SDK 不接受 chunk 列表形式 `content`；
- `prompt_cache_key` 被空的 `cache_modes` 拦截。

**判断：短期进入官方目录概率中等。**  
实现需要 provider 钩子与传输层双向翻译，技术价值较高，但协议适配范围和长期维护成本也高于单纯目录声明。

### 6.4 Whisper 兼容 provider 与模型名配置

- PR：[#8052](https://github.com/agentscope-ai/QwenPaw/pull/8052)

**判断：进入下一版本概率高。**  
这是已有 UI 能力未完全开放的问题，补齐后可显著扩大语音转写 provider 的兼容范围。

### 6.5 Console 自动重连外部渠道启动的任务

- PR：[#8671](https://github.com/agentscope-ai/QwenPaw/pull/8671)

**判断：进入下一版本概率中高。**  
该功能解决从飞书、QQ 等外部渠道启动任务后，Console 当前会话无法自动接管展示的问题，是多渠道体验的重要补全。

### 6.6 嵌套技能目录

- PR：[#8178](https://github.com/agentscope-ai/QwenPaw/pull/8178)

**判断：中期路线图候选。**  
支持 `<root>/<category>/<skill>/SKILL.md`，有利于大型技能包组织，但当前 PR 体积较大且仍在审查中。

---

## 7. 用户反馈摘要

### 真实使用场景

1. **多渠道个人 AI 助手**
   - 用户同时依赖飞书、QQ、微信、元宝等渠道与 Console。
   - 渠道是否稳定启动、保存启用状态、正确接收图片和群消息，是最直接的生产力问题。

2. **Apple Silicon 与本地 GPU 推理**
   - 用户希望 QwenPaw 原生管理 llama.cpp、MLX 和 GPU，而不是自行安装、配置与更新运行时。
   - 这表明项目正从纯客户端/Agent 外壳向完整个人 AI 运行平台演进。

3. **文件产物下载**
   - Agent 在聊天正文中返回 `/workspace/` 文件路径后，用户期待直接下载文件。
   - 当前错误地打开 SPA HTML，说明“Agent 生成文件—Console 展示—用户下载”的链路尚未完全打通。

4. **阿里云 Token Plan 与第三方兼容服务**
   - 用户同时关注推理参数、TTS 与转写协议，反映模型供应商生态正在快速扩展。
   - 单纯“接口兼容 OpenAI”已不足以覆盖不同服务在 reasoning、缓存、音频协议上的差异。

### 主要痛点

- **安装和升级后渠道失效**，且部分问题没有明显提示。
- **桌面打包版与开发环境行为不一致**，运行时身份和依赖校验在 frozen build 下容易失效。
- **浏览器兼容性不足**，Safari 出现仅特定浏览器无法渲染操作按钮的问题。
- **前端控制项与后端能力脱节**，例如模型支持 thinking，但目录没有声明，导致控件被隐藏。
- **本地模型配置成本高**，用户期待 GUI 管理 GPU、引擎和自动更新。
- **文件下载和跨渠道任务展示仍不连贯**，影响“Agent 作为统一工作入口”的体验。

### 积极信号

- Beta 4 发布后，QQ 消息、桌面渠道插件、Creator TTS 等多个问题已经关闭，说明报告后有实际维护响应。
- 社区不仅提交 Bug，也主动开发 provider 插件和桌面渠道修复，例如首贡献者 PR [#8601](https://github.com/agentscope-ai/QwenPaw/pull/8601)。
- 本地模型、嵌套技能、自动更新等需求，显示用户正在将 QwenPaw 用于更复杂、长期化的个人 AI 工作流。

---

## 8. 待处理积压

### 需要优先处理的长期 PR

#### 1. GBK/CP936 文件读取与编辑支持

- PR：[#8234](https://github.com/agentscope-ai/QwenPaw/pull/8234)
- 创建于：2026-10-14
- 规模：XXL
- 风险：中文 Windows 用户文件内容被静默删除字节，可能造成误编辑或数据丢失。
- 建议：拆分实现与测试，优先合并核心解码修复。

#### 2. Ollama 上下文窗口识别

- PR：[#8236](https://github.com/agentscope-ai/QwenPaw/pull/8236)
- 创建于：2026-10-14
- 规模：XL
- 风险：本地模型上下文元数据错误会影响压缩、提示词预算和任务稳定性。
- 建议：明确与本地模型管理 PR 的接口边界，避免重复修改。

#### 3. Windows 沙箱 ACL 修复

- PR：[#8018](https://github.com/agentscope-ai/QwenPaw/pull/8018)
- 创建于：2026-09-29
- 规模：L
- 风险：卷根 ACL 继承可能导致权限扩散，属于安全与隔离边界问题。
- 建议：提供 Windows 与非 Windows 平台的完整验证结果。

#### 4. Whisper 模型名称配置

- PR：[#8052](https://github.com/agentscope-ai/QwenPaw/pull/8052)
- 创建于：2026-09-30
- 规模：M
- 建议：若 2.3.0 发布窗口允许，优先合入；改动范围明确、用户收益直接。

#### 5. 嵌套技能目录

- PR：[#8178](https://github.com/agentscope-ai/QwenPaw/pull/8178)
- 创建于：2026-10-11
- 规模：XXL
- 建议：明确与现有技能发现、身份识别、索引机制的兼容矩阵。

#### 6. Provider 查询 404 测试

- PR：[#8308](https://github.com/agentscope-ai/QwenPaw/pull/8308)
- 创建于：2026-10-18
- 规模：XS
- 建议：改动小、测试目标明确，可作为快速清理项，避免长期占用审查队列。

#### 7. v2.3.0 发布说明更新

- PR：[#8542](https://github.com/agentscope-ai/QwenPaw/pull/8542)
- 创建于：2026-11-02
- 规模：M
- 建议：随最终 Beta/RC 功能冻结及时更新，避免发布说明与实际功能漂移。

### 需要维护者主动跟进的开放 Issue

- **飞书启动竞态：[#8669](https://github.com/agentscope-ai/QwenPaw/issues/8669)**
  - 有明确复现和直接修复 PR，应明确关联并给出验证结果。

- **模型目录 thinking 声明：[#7990](https://github.com/agentscope-ai/QwenPaw/issues/7990)**
  - 创建于 2026-09-25，至今仍在更新，属于长期未闭环问题。
  - 建议指定负责人并补目录校验测试。

- **Hub 文件下载：[#8661](https://github.com/agentscope-ai/QwenPaw/issues/8661)**
  - 当前缺少明确修复 PR，建议尽快认领。

- **Safari 队列操作按钮：[#8663](https://github.com/agentscope-ai/QwenPaw/issues/8663)**
  - 已有 [#8670](https://github.com/agentscope-ai/QwenPaw/pull/8670)，应尽快合并并回归 Safari。

- **Mistral provider 收录：[#8656](https://github.com/agentscope-ai/QwenPaw/issues/8656)**
  - 需要明确社区插件、官方 provider 或模型目录支持的技术路线。

### 维护建议

1. 将 **Safari 修复、飞书启动竞态、Hub 文件下载**列为短期发布阻断项。
2. 对 **GBK/CP936、沙箱 ACL、Ollama 上下文窗口**等长期 PR 设置负责人和拆分计划。
3. 合并本地模型三层 PR 时严格执行 **#8649 → #8647 → #8648** 的依赖顺序。
4. 为 Beta 发布建立统一回归矩阵，至少覆盖：
   - Windows 桌面打包版；
   - macOS Safari；
   - 飞书、QQ、钉钉；
   - Ollama；
   - Apple Silicon MLX；
   - GBK/CP936 文件读写；
   - `/workspace/` 文件下载。
5. 对已关闭但缺少对应 PR 的 Issue 补充交叉链接，提升变更可追溯性。

---

**总体判断：** QwenPaw 正快速从“个人 AI 助手前端与 Agent 平台”向“多渠道、本地模型驱动、可托管运行时”的完整产品演进。今日修复响应和版本发布节奏良好，但长期 PR 积压、桌面打包差异和渠道启动稳定性仍是下一版本能否顺利收敛的关键风险。

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/NousResearch/hermes-agent">NousResearch/hermes-agent</a></summary>

# Hermes Agent 项目动态日报

**日期：2026-11-11**  
**统计窗口：过去 24 小时**  
**数据源：GitHub Issues / Pull Requests**

---

## 1. 今日速览

过去 24 小时项目共更新 **50 条 Issue**、**50 条 PR**，其中 Issue 有 **45 条仍开放、5 条已关闭**，PR 有 **49 条待处理、仅 1 条已合并或关闭**，显示仓库处于高强度并行开发状态。  
今日没有新版本发布，且 PR 合并率较低，当前工作重心明显偏向缺陷修复、插件生态接入与桌面端体验完善。  
讨论最集中的是持续上下文、压缩和文档链治理，反映用户对“长会话中状态不丢失”的强烈需求。  
Bug 类型高度集中在会话状态、网关投递、Telegram、工具调用、跨平台兼容和模型适配几个方向，说明功能扩张后的稳定性治理压力正在上升。  
综合评估：**开发活跃度很高，但合并与发布节奏偏慢，积压风险中高，稳定性治理应优先于继续扩大功能面。**

---

## 2. 版本发布

过去 24 小时**无新版本发布**，因此暂无正式的更新说明、破坏性变更或迁移要求。

不过代码库中仍有多个影响用户实际行为的修复正在合并或排队，尤其是工具参数校验、会话压缩、网关安全提示、Telegram 连接回收和模型配置同步，建议用户持续关注下一次 Release。

---

## 3. 项目进展

### 已合并或关闭的重要 PR

今日 50 条 PR 中仅 **1 条显示为已合并/关闭**，但数据未提供其编号与标题，无法可靠列出具体合并内容。因此不将其作为已确认的正式项目进展，避免误报。

### 正在推进、值得重点关注的高价值 PR

#### 1. 工具调用参数校验趋于严格

- PR [#153189](https://github.com/NousResearch/hermes-agent/pull/153189)
- 对缺失必填参数的 Hermes 自有工具调用直接拒绝，并指出缺失字段；对未知或拼写错误参数给出显式反馈。
- 过去文件搜索缺少必要模式时仍可能返回结果，未知参数则被静默丢弃，容易让模型误判工具执行结果。
- 该改动可降低“调用看似成功、实际行为不符合意图”的风险，是 Agent 可靠性的关键基础设施改进。

#### 2. 网关等待用户重新连接后再处理敏感凭据

- PR [#153213](https://github.com/NousResearch/hermes-agent/pull/153213)
- 修复密码、Secret、Vault 提示在手机进入后台或 Desktop 窗口重连时立即失败的问题。
- 改动后相关提示会等待可用的查看端重新连接，避免命令报“需要终端”、Secret 被跳过或 Vault 收到空响应。
- 这直接改善远程控制、桌面端和安全工作流中的凭据处理体验。

#### 3. Telegram 连接池生命周期修复

- PR [#153150](https://github.com/NousResearch/hermes-agent/pull/153150) — **P1、CI 已审查**
- 修复 Telegram 请求池在请求尚未完成时被销毁，导致消息发送失败并遗留 `CLOSE_WAIT` socket 的问题。
- 长期运行或频繁重连时，该问题可能演变为文件描述符耗尽和网关不稳定。
- 这是今日优先级最高的稳定性修复之一。

#### 4. Telegram 贴纸视觉内容的安全封装

- PR [#153049](https://github.com/NousResearch/hermes-agent/pull/153049) — **安全、CI 已审查**
- 将贴纸视觉识别文本和贴纸包名称作为一个带标签、引号约束的值传给模型，避免自定义贴纸中的文字提前结束视觉说明并伪造 `[SYSTEM: ...]` 内容。
- 该修复减少了通过图像输入影响模型指令边界的提示注入风险。

#### 5. Telegram 图片回复与运行时 Footer 展示修复

- PR [#153196](https://github.com/NousResearch/hermes-agent/pull/153196) — **CI 已审查**
- 修复图片回复时模型与上下文占用信息没有进入图片 caption、而是被拆成额外消息的问题。
- 有助于保持 Telegram 回复结构整洁，也减少额外消息对自动化处理和用户体验的干扰。

#### 6. Bot Profile 模型变更向现有群组同步

- PR [#153119](https://github.com/NousResearch/hermes-agent/pull/153119)
- 修复 Bot Profile 修改模型或 Provider 后，现有 Gateway 群组仍继续使用旧配置的问题。
- 可避免群组在旧模型额度耗尽或路由失效后仍无法切换到新配置。

#### 7. Skill 文档与实际资源重新对齐

- PR [#153212](https://github.com/NousResearch/hermes-agent/pull/153212)
- PR [#105712](https://github.com/NousResearch/hermes-agent/pull/105712)
- PR [#117823](https://github.com/NousResearch/hermes-agent/pull/117823)
- PR [#139393](https://github.com/NousResearch/hermes-agent/pull/139393)
- 清理已移除 Skill 的遗留引用，并增加 CI 校验，防止 Agent 被要求加载并不存在的 `native-mcp`、`plan`、`github-auth`、`ocr-and-documents` 等 Skill。
- 这类修复虽非功能扩展，但能显著减少模型无效检索、无效工具调用和额外 token 消耗。

#### 8. TUI 导航与终端兼容性改进

- PR [#153215](https://github.com/NousResearch/hermes-agent/pull/153215)
- PR [#153041](https://github.com/NousResearch/hermes-agent/pull/153041)
- 前者将 `Ctrl-N/Ctrl-P` 列表导航扩展到 CLI、curses 选择器和 Ink TUI，并接入 Vim 模式；后者修复 GNU Screen 下终端标题控制字节泄漏。
- 属于基础交互质量提升，尤其有利于远程终端和复杂 TUI 工作流。

#### 9. 插件目录持续扩张

- PR [#152633](https://github.com/NousResearch/hermes-agent/pull/152633)：Desktop Inbox
- PR [#152695](https://github.com/NousResearch/hermes-agent/pull/152695)：Reading
- PR [#152775](https://github.com/NousResearch/hermes-agent/pull/152775)：Launch Desk
- PR [#153139](https://github.com/NousResearch/hermes-agent/pull/153139)：Ball
- PR [#153214](https://github.com/NousResearch/hermes-agent/pull/153214)：更新 1toolring
- PR [#153173](https://github.com/NousResearch/hermes-agent/pull/153173)：更新 receipts 至 0.1.1

插件目录正在覆盖收件箱、邮件阅读、内容发布、对话协作和 Web 自动化等场景。不过目前多数仍属于目录登记或早期集成，实际可用性取决于后续安装、权限、安全审查和运行时兼容性。

### 项目推进判断

今日的实质性方向较清晰：

1. **提升工具调用正确性**
2. **强化网关与凭据交互可靠性**
3. **改善 Telegram 运行稳定性与安全边界**
4. **推动 Skill、插件和桌面端生态**
5. **减少长会话与配置同步中的状态丢失**

不过，**49 条 PR 待处理、仅 1 条合并或关闭**，说明代码产出明显快于维护者审阅和整合速度。若这一比例持续，发布验证与回归控制将承压。

---

## 4. 社区热点

### 4.1 持续上下文、压缩与文档链治理

- Issue [#143379](https://github.com/NousResearch/hermes-agent/issues/143379) — **36 条评论**
- 当前讨论度最高，主题是“DOC-CHAIN SUBSTRATE'S NETWORK”：持久记录、来源追踪、治理与压缩后重读。
- 用户核心诉求不是单纯增加上下文长度，而是让 Agent 在会话压缩后仍能：
  - 找回已保存的信息；
  - 保留记录的来源和可信度；
  - 明确哪些内容可以覆盖、合并或删除；
  - 避免要求用户重复已经提供的信息。
- 这说明 Hermes 正从“聊天机器人式会话”向“可审计的长期记忆系统”演进，压缩、记忆、文件工具与 Agent 行为将形成更强耦合。

### 4.2 OpenAI 兼容接口的 reasoning 字段冲突

- Issue [#136486](https://github.com/NousResearch/hermes-agent/issues/136486) — **19 条评论、3 个赞**
- 某些服务将 `reasoning` 视为 `reasoning_content` 的别名，Hermes 重放时同时发送两个字段会触发 HTTP 400。
- 更严重的是字段拒绝学习机制没有生效，导致每轮请求都重复失败并持续回退。
- 这是典型的 Provider 兼容性与错误恢复耦合问题，需要建立更可靠的“字段级冲突识别—持久化学习—停止重复发送”闭环。

### 4.3 Patch 工具可能修改错误区域

- Issue [#54572](https://github.com/NousResearch/hermes-agent/issues/54572) — **10 条评论**
- 在 `old_string` 非精确匹配时，多级模糊匹配策略可能定位到错误区域。
- 对代码编辑 Agent 而言，这是高后果缺陷：即便修改 syntactically valid，也可能悄悄破坏用户文件或修改非目标逻辑。
- 社区关注点应集中在“唯一性校验、歧义拒绝、diff 预览和可逆修改”。

### 4.4 xAI Grok 4.7 推理强度设置被静默忽略

- Issue [#121796](https://github.com/NousResearch/hermes-agent/issues/121796) — **6 条评论、1 个赞**
- `_GROK_EFFORT_CAPABLE_PREFIXES` 未覆盖 `grok-4.7`，导致 `reasoning_effort` 和 `--reasoning` 不生效。
- 用户体验是设置成功但模型行为没有任何变化，属于典型的“配置反馈与真实执行不一致”。

### 4.5 Docker 沙箱无法找到 Chromium

- Issue [#131326](https://github.com/NousResearch/hermes-agent/issues/131326) — **6 条评论、1 个赞**
- 当前 Chromium 探测未覆盖 `chrome-linux-arm64`，且沙箱路径丢失 `AGENT_BROWSER_EXECUTABLE_PATH`。
- 该问题直接影响 Docker Desktop 沙箱中的浏览器自动化，也暴露出环境变量传递、架构支持和默认镜像路径之间缺少统一契约。

### 4.6 Matrix 回复上下文丢失

- Issue [#108425](https://github.com/NousResearch/hermes-agent/issues/108425) — **6 条评论**
- Element X、Beeper 等现代客户端的 Matrix 回复关系无法被 Hermes 正确读取。
- 用户在多轮对话中无法知道 Agent 正在回应哪一条内容，直接影响聊天可用性。

---

## 5. Bug 与稳定性

### P0 / 严重级别

今日没有明确标记为 P0 的开放 Issue。

### P1 / 高优先级

#### Telegram 请求池关闭导致 socket 泄漏

- PR [#153150](https://github.com/NousResearch/hermes-agent/pull/153150)
- **已有 fix PR，尚未确认合并。**
- 影响长期运行的 Telegram Gateway，可能造成 `CLOSE_WAIT` 累积、连接耗尽和消息发送失败。
- 当前应作为最优先合并和回归验证项。

### P2 / 中高优先级

#### 网关重启持续创建空占位会话

- Issue [#150700](https://github.com/NousResearch/hermes-agent/issues/150700)
- **暂未看到明确 fix PR。**
- 每次 Gateway 手动重启、崩溃恢复或自动更新重启都会创建新的本地 DM 占位会话，长期运行会污染会话列表和数据库。

#### OpenAI 兼容接口重复 reasoning 字段

- Issue [#136486](https://github.com/NousResearch/hermes-agent/issues/136486)
- **当前数据中未看到明确 fix PR。**
- 每一轮均可能 HTTP 400 并反复回退，直接造成调用失败和额外延迟。

#### 工具参数缺失或未知时未可靠拒绝

- PR [#153189](https://github.com/NousResearch/hermes-agent/pull/153189)
- **已有 fix PR，待合并。**
- 缺失必填参数的工具调用可能仍执行，未知参数也可能被静默忽略，影响 Agent 对执行结果的判断。

#### `/goal` 在压缩边界丢失

- Issue [#149594](https://github.com/NousResearch/hermes-agent/issues/149594)
- **暂未看到明确 fix PR。**
- 子会话写入失败时，父会话目标仍被归档，可能导致目标完全不存在。
- 属于长会话状态一致性缺陷，影响任务连续性。

#### 压缩触发条件使用辅助模型窗口，可能过早压缩

- Issue [#136170](https://github.com/NousResearch/hermes-agent/issues/136170)
- **暂未看到明确 fix PR。**
- `tail_mode: lean` 实际不向辅助模型发送完整主会话，却仍以辅助模型完整窗口降低主会话压缩阈值。
- 结果可能是上下文被过早压缩，放大记忆和摘要相关问题。

#### 凭据提示在查看端断线后立即失败

- PR [#153213](https://github.com/NousResearch/hermes-agent/pull/153213)
- **已有 fix PR，待合并。**
- 对移动端后台、Desktop 重连和远程 Gateway 场景影响明显。

#### Gateway 现有群组未同步 Bot Profile 模型变更

- PR [#153119](https://github.com/NousResearch/hermes-agent/pull/153119)
- **已有 fix PR，待合并。**
- 可能导致群组继续使用失效模型或旧 Provider。

#### Windows Kanban Worker 在序号 15 确定性停滞

- Issue [#147613](https://github.com/NousResearch/hermes-agent/issues/147613)
- **暂未看到明确 fix PR。**
- Worker 能启动并轮询，但任务提示始终无法投递，表现为 `{"messages": []}`。
- 对多 Profile 自动任务系统而言影响较大。

#### Telegram 首次按需安装依赖后，草稿流式输出异常

- PR [#153032](https://github.com/NousResearch/hermes-agent/pull/153032)
- **已有 fix PR，待合并。**
- 首次 Gateway 运行与重启后的行为不一致，可能造成 MarkdownV2 格式及原生 draft 编辑异常。

#### Gateway 在 Relay URL 缺失时无限重试

- Issue [#139997](https://github.com/NousResearch/hermes-agent/issues/139997)
- **暂未看到明确 fix PR。**
- 无效配置会持续进入重连监视器，最终还被标记为需要关注，产生噪声和无效后台活动。

### P3 / 中低优先级或平台特定问题

#### Patch 模糊匹配可能修改错误区域

- Issue [#54572](https://github.com/NousResearch/hermes-agent/issues/54572)
- **暂未看到明确 fix PR。**
- 虽标记 P2，但实际后果取决于修改对象，代码编辑场景应按高风险处理。

#### 沙箱浏览器找不到 Chromium

- Issue [#131326](https://github.com/NousResearch/hermes-agent/issues/131326)
- **暂未看到明确 fix PR。**
- 主要影响 ARM64 Docker 沙箱和浏览器自动化。

#### Desktop/TUI 忽略 checkpoint 限制配置

- Issue [#145268](https://github.com/NousResearch/hermes-agent/issues/145268)
- **暂未看到明确 fix PR。**
- `checkpoints.max_total_size_mb`、`max_snapshots` 和 `max_file_size_mb` 不生效，长期运行可能造成磁盘占用失控。

#### Desktop 在远程主连接下错误启动本地 Runtime

- Issue [#145154](https://github.com/NousResearch/hermes-agent/issues/145154)
- **暂未看到明确 fix PR。**
- 陈旧的 session owner hint 可能造成不必要的后台进程和资源消耗。

#### 代理路由器剥离 Origin 导致 Cookie 写操作 403

- Issue [#149026](https://github.com/NousResearch/hermes-agent/issues/149026)
- **暂未看到明确 fix PR。**
- 影响 TLS 在路由器终止、后端使用明文 HTTP 的家庭网络部署。

#### Windows `nul` 保留设备名导致补全请求被丢弃

- Issue [#148767](https://github.com/NousResearch/hermes-agent/issues/148767)
- **暂未看到明确 fix PR。**
- `ntpath.relpath` 抛出异常后，整个 WebSocket 补全请求无响应。

#### `__release_date__` 与实际版本不一致

- Issue [#148353](https://github.com/NousResearch/hermes-agent/issues/148353)
- **暂未看到明确 fix PR。**
- 当前硬编码值仍显示旧发布日期，影响版本展示与诊断可信度。

#### Nous Portal OAuth `invalid_grant` 无用户通知

- Issue [#145231](https://github.com/NousResearch/hermes-agent/issues/145231)
- **暂未看到明确 fix PR。**
- 刷新令牌失效后连接静默断开，用户难以判断是订阅失效还是其他认证问题。

#### Dispatcher 对主动延后任务产生“卡住”误报

- Issue [#80513](https://github.com/NousResearch/hermes-agent/issues/80513)
- **暂未看到明确 fix PR。**
- 监控逻辑未考虑 respawn guard，造成假告警和运维噪声。

#### `skill_view` 大文件只保留 1500 字符预览

- Issue [#151283](https://github.com/NousResearch/hermes-agent/issues/151283)
- **暂未看到明确 fix PR。**
- 大型 `SKILL.md` 的规则内容可能被截断且没有充分警告，对依赖长规则文件的 Skill 尤其危险。

#### Live SSE 流的 keepalive 被误判为停滞

- Issue [#151280](https://github.com/NousResearch/hermes-agent/issues/151280)
- **暂未看到明确 fix PR。**
- SSE 注释或 `ping` 未被看门狗识别时，长时间思考的流可能在 240 秒后被错误终止。

---

## 6. 功能请求与路线图信号

### 6.1 文档链、记忆治理与压缩体系

- Issue [#143379](https://github.com/NousResearch/hermes-agent/issues/143379)
- 是当前最明确的中长期架构信号。
- 预计下一阶段将围绕持久化记录、可追溯来源、压缩后重读、治理策略和 Agent 主动检索形成更完整闭环。
- 相关配套缺陷包括 `/goal` 丢失与 lean compression 阈值错误，优先级应高于继续增加独立记忆功能。

### 6.2 Desktop 原生 Projects 支持

- Issue [#105511](https://github.com/NousResearch/hermes-agent/issues/105511)
- 后端和 CLI 已具备较完整的 Projects 能力，用户希望 Desktop 获得原生、平等的项目体验。
- 另有 Issue [#123338](https://github.com/NousResearch/hermes-agent/issues/123338) 要求创建后编辑 Project 描述、图标和颜色。
- 两者都指向同一路线：Hermes Desktop 正从聊天客户端向项目化 Agent 工作台演进，Projects、Profiles、Sessions 和插件将逐步形成统一信息架构。

### 6.3 插件生态扩展

插件目录相关 PR 涉及：

- Desktop Inbox：[#152633](https://github.com/NousResearch/hermes-agent/pull/152633)
- Reading：[#152695](https://github.com/NousResearch/hermes-agent/pull/152695)
- Launch Desk：[#152775](https://github.com/NousResearch/hermes-agent/pull/152775)
- Ball：[#153139](https://github.com/NousResearch/hermes-agent/pull/153139)
- 1toolring 更新：[#153214](https://github.com/NousResearch/hermes-agent/pull/153214)
- receipts 更新：[#153173](https://github.com/NousResearch/hermes-agent/pull/153173)

这些项目说明生态正从单点工具向“桌面工作面板 + 通信 + 内容处理”发展。下一版本较可能继续扩充目录，但维护者还需要同步加强插件权限模型、密钥存储和运行兼容性。

### 6.4 TTS 与插件钩子

- Issue [#152238](https://github.com/NousResearch/hermes-agent/issues/152238)
- 用户希望插件能处理 Hermes 实际朗读的文本，而不是仅处理屏幕展示文本。
- 该能力会推动插件接口从“扩展模型与工具”扩展到“接管输出呈现”，适用于自动播报、语音回复、朗读和声音资产管理。
- 目前没有对应 PR，纳入时间不确定。

### 6.5 模型回退提示分级

- Issue [#144206](https://github.com/NousResearch/hermes-agent/issues/144206)
- 插件主动触发 fallback 时，当前仍显示类似故障的警告。
- 用户希望区分“计划内回退”和“异常回退”，减少日志与 UX 噪声。
- 这是较小但易实现的功能，可能进入近期体验优化版本。

### 6.6 Desktop 会话默认模型设置

- Issue [#143068](https://github.com/NousResearch/hermes-agent/issues/143068)
- 用户希望新会话默认使用 Profile 默认模型，而不是沿用上次手工选择。
- 需求与 Profile、Desktop session 的配置继承直接相关，可能与 Desktop 原生 Projects 支持一起规划。

### 6.7 Profile 绑定的 Provider 设置与插件 Secret 写入

- Issue [#151605](https://github.com/NousResearch/hermes-agent/issues/151605)
- 诉求是让 Desktop SDK 支持 Profile 级 Provider 配置，并安全地写入可选插件 Secret。
- 与网关等待重连的修复 PR [#153213](https://github.com/NousResearch/hermes-agent/pull/153213) 方向一致，说明认证、Secret 和 Profile 隔离正在成为 Desktop 平台化的核心工作。

---

## 7. 用户反馈摘要

### 真实痛点

1. **长会话中目标与上下文容易消失**  
   用户在压缩、子会话和重启等边界上遇到 `/goal` 丢失、压缩过早、Skill 内容被截断等问题。核心诉求是“Agent 记住已经完成的工作”，而不只是增加上下文窗口。

2. **配置成功但实际未生效**  
   xAI Grok 4.7 的 reasoning effort、Desktop checkpoint 限制、Profile 模型更新、Nous Portal OAuth 等问题，都说明配置层、执行层和反馈层之间缺少一致性。

3. **工具调用缺乏可靠边界**  
   缺少必填参数仍执行、未知参数被静默忽略、Patch 可能命中错误区域，这些问题会直接削弱用户对 Agent 修改文件和执行任务结果的信任。

4. **远程与桌面工作流经常在重连时失败**  
   手机后台、Desktop 重连、VPN/TLS 终止、Matrix 现代客户端和 Windows 保留文件名等场景暴露出边缘环境兼容不足。

5. **消息投递可靠性仍是平台短板**  
   Telegram 最终回复可能因重试耗尽被永久丢弃、请求池可能泄漏 socket、DNS 解析曾阻塞事件循环。即使相关 Issue 已关闭，也说明消息投递仍是高频高风险区域。

### 满意与积极信号

- 用户愿意提交较长、包含版本、调用栈、复现条件和预期行为的详细报告，说明核心用户群体具备较高技术能力。
- 插件作者持续主动提交目录条目和版本更新，说明生态供给正在形成。
- 大量用户主动提出 Projects、Desktop、TTS、记忆治理等中高级需求，表明 Hermes 已被视为可长期使用的个人 Agent 工作平台，而非一次性对话工具。
- PR 中增加了真实 Gateway、Live probe 和 CI 验证，说明维护者及贡献者正在加强回归测试质量。

### 不满点

- 很多配置和行为变化没有明确反馈，用户只能通过日志判断是否生效。
- 已合并功能之间存在不一致，例如 CLI 已有 Projects，但 Desktop 尚未原生支持。
- “功能多但可靠性不足”的感受正在形成，尤其是压缩、消息投递和状态同步。
- 高数量待审 PR 会使贡献者和用户不确定哪些改动会真正进入正式版本。

---

## 8. 待处理积压

### 8.1 已创建较久、讨论仍活跃的重要 Issue

#### DOC-CHAIN 架构 RFC

- Issue [#143379](https://github.com/NousResearch/hermes-agent/issues/143379)
- 创建于 2026-10-23，仍有 36 条评论。
- 已成为当前最核心的架构讨论之一，但长期未形成明确结论。
- 建议维护者拆分治理、存储、来源追踪、压缩后检索等可实施子方案，避免 RFC 长期停留在讨论状态。

#### Patch 工具模糊匹配风险

- Issue [#54572](https://github.com/NousResearch/hermes-agent/issues/54572)
- 创建于 2026-06-29，已有 10 条评论。
- 作为高后果文件编辑缺陷继续开放过久，建议增加回归样例并尽快给出“拒绝歧义匹配”的修复方案。

#### Matrix 现代客户端回复上下文

- Issue [#108425](https://github.com/NousResearch/hermes-agent/issues/108425)
- 创建于 2026-09-11，已有 6 条评论。
- 建议明确支持范围和事件解析策略，并优先覆盖 Element X、Beeper。

#### xAI Grok 4.7 推理强度配置

- Issue [#121796](https://github.com/NousResearch/hermes-agent/issues/121796)
- 创建于 2026-09-24，已有 6 条评论。
- 属于范围清晰的模型前缀表更新，适合尽快修复并增加元数据能力测试。

#### Docker 沙箱浏览器发现逻辑

- Issue [#131326](https://github.com/NousResearch/hermes-agent/issues/131326)
- 创建于 2026-10-02，已有 6 条评论。
- 建议以架构矩阵覆盖 x64、ARM64、本地 Chrome、缓存 Chrome 和显式环境变量。

#### Nous Portal OAuth 静默失效

- Issue [#145231](https://github.com/NousResearch/hermes-agent/issues/145231)
- 创建于 2026-10-26，已有 3 条评论。
- 需要明确用户通知、重新授权入口及失败日志，避免订阅连接“无声消失”。

#### Relay 无 URL 时无限重试

- Issue [#139997](https://github.com/NousResearch/hermes-agent/issues/139997)
- 创建于 2026-10-16，已有 2 条评论。
- 建议启动时做配置校验，并将不可重试配置与临时网络故障分开处理。

### 8.2 长期开放但缺少明确 fix PR 的重要问题

- OpenAI 兼容接口 reasoning 字段冲突：[#136486](https://github.com/NousResearch/hermes-agent/issues/136486)
- `/goal` 压缩边界丢失：[#149594](https://github.com/NousResearch/hermes-agent/issues/149594)
- lean compression 阈值错误：[#136170](https://github.com/NousResearch/hermes-agent/issues/136170)
- Gateway 空占位会话：[#150700](https://github.com/NousResearch/hermes-agent/issues/150700)
- Windows Kanban Worker 停滞：[#147613](https://github.com/NousResearch/hermes-agent/issues/147613)
- Desktop/TUI checkpoint 配置未传递：[#145268](https://github.com/NousResearch/hermes-agent/issues/145268)
- Desktop 远程连接错误启动本地 Runtime：[#145154](https://github.com/NousResearch/hermes-agent/issues/145154)
- 反向代理下 Cookie 写请求 403：[#149026](https://github.com/NousResearch/hermes-agent/issues/149026)
- Windows 保留设备名导致补全请求丢失：[#148767](https://github.com/NousResearch/hermes-agent/issues/148767)
- Nous Portal OAuth 静默失效：[#145231](https://github.com/NousResearch/hermes-agent/issues/145231)

### 8.3 长期开放的 PR

以下 PR 创建时间较早，至今仍待处理：

- Telegram DM 应用 `channel_skill_bindings`：[#143400](https://github.com/NousResearch/hermes-agent/pull/143400)，创建于 2026-10-23
- 修复旧 `ocr-and-documents` Skill 引用：[#105712](https://github.com/NousResearch/hermes-agent/pull/105712)，创建于 2026-09-08
- 修复 GitHub Skill 整合后的悬空引用：[#117823](https://github.com/NousResearch/hermes-agent/pull/117823)，创建于 2026-09-21
- 修复已退役 GitHub Skill 引用：[#139393](https://github.com/NousResearch/hermes-agent/pull/139393)，创建于 2026-10-15

长期开放的 PR 容易产生分支漂移和冲突。维护者宜明确标记为“待重基线”“待复审”或“待决策”，并将其纳入固定清理批次。

---

## 今日结论

Hermes Agent 今日呈现出“**高开发活跃度、高功能需求、高 PR 积压、中高稳定性压力**”的状态。工具校验、网关凭据等待、Telegram socket 回收和 Skill 引用清理等修复正在改善核心可靠性，但多数仍待合并；与此同时，长会话记忆、压缩治理、Desktop Projects 和插件生态正在定义下一阶段产品方向。

维护侧最值得立即关注的顺序是：

1. 合并并验证 Telegram 请求池 P1 修复；
2. 处理 reasoning 字段冲突、Patch 错误匹配和 `/goal` 丢失等高后果缺陷；
3. 清理长期开放 PR 与重复 Issue，补充明确的负责人和目标版本；
4. 为压缩、记忆、消息投递和 Profile 配置建立跨模块回归测试；
5. 在 PR 积压和发布验证能力恢复前，谨慎控制新的功能面扩张。

</details>

<details>
<summary><strong>OpenHuman</strong> — <a href="https://github.com/tinyhumansai/openhuman">tinyhumansai/openhuman</a></summary>

# OpenHuman 项目动态日报  
**日期：2026-11-11**  
**数据范围：过去 24 小时 GitHub Issues / Pull Requests 更新**

## 1. 今日速览

过去 24 小时项目共更新 **12 个 PR**（**7 个待合并、5 个已合并或关闭**）和 **2 个 Issue**（均已关闭），无新版本发布。  
当日工作重点集中在三条主线：**钱包与自动化能力**（代币余额、定时任务信任策略、支付限额与账本）、**密钥与配置安全**（secret grant 审批、凭据脱敏）、以及 **CI/主分支稳定性修复**。  
其中 5 个已关闭 PR 涉及安全审批、配置脱敏、自动化钱包策略、Cron 能力和 memory-block 收尾，显示核心功能正向可落地阶段推进；但仍有 **7 个 PR 处于开放状态**，且多个 PR 正在修复主干已有 CI 红灯，说明工程治理与集成验证仍是当前瓶颈。  
综合活跃度评估：**开发活跃度高、交付推进明显，但合并与测试治理压力偏高，整体健康度为“中高、需关注 CI 债务”**。

---

## 2. 版本发布

过去 24 小时**无新版本发布**，因此暂无 Release 更新说明、破坏性变更或迁移事项。

---

## 3. 项目进展

### 已合并或关闭的重要 PR

> 下列数据仅表示 PR 已关闭或合并/完成；由于未提供具体合并时间，此处按“过去 24 小时已关闭的重要 PR”表述。

#### 3.1 修复 Settings 保存 API Key 时未触发授权的问题

- **PR：** [#8597 fix(approval): ask the user for the secret grant a Settings save needs](https://github.com/tinyhumansai/openhuman/pull/8597)
- **状态：** 已关闭
- **进展：**
  - Settings 或 CLI 保存需要 `native_secret_grant` 的配置时，不再直接拒绝。
  - 请求会进入待审批状态，并在 Settings 中通过 `SecretGrantApprovalDeck` 展示给用户。
  - 提升了“用户主动保存密钥”和“智能体代表用户调用配置工具”两条路径的一致性。

**影响：** 直接解决了 [#8596](https://github.com/tinyhumansai/openhuman/issues/8596) 中 API Key 无法保存且用户未获得授权入口的问题。

---

#### 3.2 防止配置快照泄露明文凭据

- **PR：** [#8608 fix(config): mask every credential in the config snapshot](https://github.com/tinyhumansai/openhuman/pull/8608)
- **状态：** 已关闭
- **优先级：** p2
- **进展：**
  - `openhuman.config_get`、多个 `apply_*` 配置响应以及 `config_snapshot` 工具不再返回解密后的 channel token 和其他凭据。
  - 修复对应安全问题 **TinySecurity E2E finding TS-E2E-047**。

**影响：** 降低配置通过智能体接口、回复内容或快照链路泄露敏感信息的风险，是今日最明确的安全加固项之一。

---

#### 3.3 为自动化 SOL/USDC 支付增加策略和账本

- **PR：** [#8649 feat(wallet): spend policy + ledger for automated SOL/USDC payments, x402 from automation](https://github.com/tinyhumansai/openhuman/pull/8649)
- **状态：** 已关闭
- **优先级：** p1
- **进展：**
  - 新增钱包支出策略，包含资产白名单、单笔上限、滚动 24 小时上限及按收款方计算的滚动 7 日上限。
  - 策略应用于签名前的精确报价，避免审批金额与实际执行金额不一致。
  - 新增持久化账本，用于追踪自动化支出。
  - 自动化场景可使用 x402 支付路径。

**影响：** 将钱包能力从“能发起支付”推进到“可约束、可审计、可自动化”的阶段，是今日最重要的功能进展之一。

---

#### 3.4 Cron 智能体支持显式启用定时操作

- **PR：** [#8648 feat(cron): opt-in scheduled actions for cron agent turns, configurable shell-job timeout](https://github.com/tinyhumansai/openhuman/pull/8648)
- **状态：** 已关闭
- **进展：**
  - Cron agent turn 默认仍保持只读。
  - 智能体可显式启用 `scheduled_actions`。
  - 支持配置 shell job 超时。
  - 为后续将 Cron 纳入钱包策略和 x402 自动化信任模型奠定基础。

**影响：** 在“无人值守自动化”与“默认最小权限”之间建立了更细粒度的控制机制。

---

#### 3.5 收尾 memory-block 遗留路径

- **PR：** [#8603 fix(memory): close the remaining stale memory-block paths from #8600](https://github.com/tinyhumansai/openhuman/pull/8603)
- **状态：** 已关闭
- **进展：**
  - 跟进并关闭 [#8600](https://github.com/tinyhumansai/openhuman/pull/8600) 遗留的 12 个 review thread。
  - 重点处理前台渲染顺序及剩余 stale memory-block 路径。

**影响：** 降低并发渲染与状态同步产生陈旧视图、显示不一致或后续回归的概率。

### 总体推进判断

今日完成项覆盖了从**配置安全、授权体验、自动化权限、支付风控到内存渲染一致性**的完整链路。项目并未停留在局部功能开发，而是在补齐智能体执行外部动作时最关键的“授权—策略—审计—测试”基础设施。

---

## 4. 社区热点

### 4.1 评论最多：Settings 保存 API Key 失败

- **Issue：** [#8596 Saving an API key from Settings fails: secret grant denied without a WebChat origin](https://github.com/tinyhumansai/openhuman/issues/8596)
- **评论数：** 2
- **反应数：** 0
- **状态：** 已关闭
- **对应修复：** [#8597](https://github.com/tinyhumansai/openhuman/pull/8597)

**背后诉求：**

用户希望 Settings 或 CLI 保存 API Key 时获得清晰、可操作的授权流程，而不是直接出现 `Failed to encrypt api_key`。这反映的核心痛点不是单纯“加密失败”，而是**系统在用户主动操作后仍然缺少权限申请和交互闭环**。

---

### 4.2 关注度最高的存储绕过问题

- **Issue：** [#8652 storage-bypass: artifacts box_source stages box files with std::fs::write](https://github.com/tinyhumansai/openhuman/issues/8652)
- **评论数：** 2
- **反应数：** 0
- **状态：** 已关闭
- **相关修复：** [#8653](https://github.com/tinyhumansai/openhuman/pull/8653)

**背后诉求：**

`box_source::stage()` 使用 `std::fs::write` 将 sandbox box 文件复制到 workspace staging 目录，可能绕开项目预期的存储访问控制。该问题反映维护者对以下边界非常重视：

- sandbox 与 workspace 之间的文件复制是否必须经过受控存储 API；
- 临时目录权限与生命周期是否受到统一管理；
- storage-bypass 检测是否覆盖间接文件写入路径。

该 Issue 已关闭，但具体修复主要出现在开放 PR 中，尚应确认是否已真正进入主分支。

---

### 4.3 今日最密集的 PR 热点：修复主干 CI 红灯

- **PR：** [#8655 fix(ci): clear pre-existing main failures](https://github.com/tinyhumansai/openhuman/pull/8655)
- **PR：** [#8653 ci: repair rust-layout, ignored-tests ratchet and storage-bypass on main](https://github.com/tinyhumansai/openhuman/pull/8653)
- **PR：** [#8595 ci: shard hosted rust-cov and repair the hosted CI Fast lanes](https://github.com/tinyhumansai/openhuman/pull/8595)
- **评论数与反应数：** 暂未提供评论或点赞数据

**背后诉求：**

主干自身存在多个被条件跳过或长期潜伏的失败，导致任何触及相关目录的 PR 都可能在 CI Gate 上失败。维护者当前重点是：

- 恢复 web3 contract、readonly marker、rust-cov runner、secret scope order 等失败项；
- 修复 rust-layout、ignored-tests ratchet 与 storage-bypass；
- 将 hosted `rust-cov` 拆为四个分片，并增加超时和覆盖率产物检查。

这是典型的“交付基础设施债务”热点：功能开发可以继续，但会拖慢后续所有 PR 的合入速度。

---

## 5. Bug 与稳定性

### P1：API Key 保存授权流程失效

- **Issue：** [#8596](https://github.com/tinyhumansai/openhuman/issues/8596)
- **表现：** Settings 保存 API Key 时出现 `Failed to encrypt api_key`，且用户没有被提示批准 secret grant。
- **影响：** 核心配置流程阻塞，普通用户无法完成模型/API 凭据设置。
- **修复状态：** **已有 fix PR**：[#8597](https://github.com/tinyhumansai/openhuman/pull/8597)，已关闭。

---

### P1/P2：存储绕过风险

- **Issue：** [#8652](https://github.com/tinyhumansai/openhuman/issues/8652)
- **表现：** `artifacts/box_source.rs::stage()` 通过 `std::fs::write` 将 sandbox box 文件写入 workspace staging 目录。
- **影响：** 可能绕开预期的存储访问边界、目录权限或审计机制。
- **修复状态：** **已有相关开放 PR**：[#8653](https://github.com/tinyhumansai/openhuman/pull/8653)。Issue 已关闭，但需确认对应修复是否已进入主干。

---

### P2：配置快照暴露凭据

- **Issue/PR：** [#8608](https://github.com/tinyhumansai/openhuman/pull/8608)
- **表现：** 配置查询和工具响应可能返回解密后的 channel token 与其他秘密。
- **影响：** 凭据可能经由 RPC、智能体上下文、工具输出或日志泄露。
- **修复状态：** **已有 fix PR 且已关闭**：[#8608](https://github.com/tinyhumansai/openhuman/pull/8608)。

---

### P2：远程 MCP 工具定义在 serve 模式下被误判

- **PR：** [#8654 fix(mcp): scan remote tool definitions with the loaded config under serve](https://github.com/tinyhumansai/openhuman/pull/8654)
- **表现：** `tools_safe_for_agent` 与 `prompt_injection::scan_tool_definition` 使用 `current_embedder_config()`；在 `openhuman-core serve` 的 CLI Host 下该配置为 `None`，扫描结果可能出现异常。
- **影响：** 可能错误放行或阻断远程 MCP 工具定义，扩大 prompt-injection 防护的误报/漏报风险。
- **修复状态：** **已有开放 fix PR，待合并**：[#8654](https://github.com/tinyhumansai/openhuman/pull/8654)。

---

### P2/P3：本地 Core RPC 错误经过系统代理

- **PR：** [#8169 rpc: never proxy JSON-RPC calls to the local core](https://github.com/tinyhumansai/openhuman/pull/8169)
- **表现：** 本地 Core JSON-RPC 请求可能继承系统 HTTP 代理设置。
- **影响：** 在代理、VPN 或企业网络环境下可能发生连接失败、延迟、请求被代理观察，甚至形成不必要的网络绕行。
- **修复状态：** **已有开放 fix PR，待合并**：[#8169](https://github.com/tinyhumansai/openhuman/pull/8169)。

---

### P3：主干 CI 存在预存失败

- **PR：** [#8655](https://github.com/tinyhumansai/openhuman/pull/8655)
- **PR：** [#8653](https://github.com/tinyhumansai/openhuman/pull/8653)
- **PR：** [#8595](https://github.com/tinyhumansai/openhuman/pull/8595)
- **表现：** 主干在 web3 contract、readonly marker、rust-cov runner、secret scope order、rust-layout、ignored-tests ratchet 等检查上存在失败；部分 lane 在主干上会被跳过，问题因而积累。
- **影响：** 降低 CI Gate 的可信度，增加开放 PR 的合并成本，也容易掩盖新引入的回归。
- **修复状态：** **已有多个开放 PR，待合并和验证**。

---

### 稳定性结论

今日已关闭的 PR 显著改善了安全与授权路径，但仍有多个稳定性修复停留在开放状态。尤其 **#8653、#8654、#8655、#8595** 同时触及主干测试和 CI 基础设施，建议在继续叠加功能 PR 前优先完成合入与全量验证，避免形成相互依赖或冲突的修复链。

---

## 6. 功能请求与路线图信号

### 6.1 钱包支持 SPL/USDC 代币余额

- **PR：** [#8650 feat(wallet): wallet.token_balances](https://github.com/tinyhumansai/openhuman/pull/8650)
- **状态：** 开放
- **内容：**
  - 新增 `wallet.token_balances` RPC。
  - 基于 tinywallet 0.29.0 的 `NativeWalletTokenBalances`。
  - 通过 `getTokenAccountsByOwner` 和 `jsonParsed` 查询当前 Solana cluster 的 USDC SPL 余额。
  - `wallet_balances` 智能体工具同步扩展。

**路线图判断：**  
**高概率纳入近期迭代。** 它直接补齐智能体钱包场景中的资产可见性，并与今日已完成的自动化支付策略和账本形成完整闭环。当前主要风险是依赖版本 pin、CI 红灯和 wallet 相关测试稳定性。

---

### 6.2 Cron 自动化被正式纳入钱包策略和 x402

- **PR：** [#8651 feat(wallet): scheduled cron actions count as trusted automation](https://github.com/tinyhumansai/openhuman/pull/8651)
- **状态：** 开放
- **内容：**
  - 将 Cron 任务加入钱包 spend policy 和 x402 的统一自动化信任判定。
  - 与已关闭的 [#8648](https://github.com/tinyhumansai/openhuman/pull/8648)、[#8649](https://github.com/tinyhumansai/openhuman/pull/8649) 衔接。

**路线图判断：**  
**高概率纳入下一批合入。** 三项功能已形成明显依赖链：先提供 opt-in Cron actions，再建立支付策略与账本，最后补齐 Cron 信任来源。建议按该顺序合并，并重点验证定时任务与普通人工请求之间的权限边界。

---

### 6.3 MCP 工具定义的 serve 模式安全扫描

- **PR：** [#8654](https://github.com/tinyhumansai/openhuman/pull/8654)
- **状态：** 开放
- **路线图判断：**  
  **高优先级稳定性与安全修复。** 它虽然不是用户可见功能，但决定远程 MCP 工具是否能在生产 `serve` 模式安全使用，具备进入近期版本的必要性。

---

### 6.4 CI 覆盖率分片与快速检查修复

- **PR：** [#8595](https://github.com/tinyhumansai/openhuman/pull/8595)
- **状态：** 开放
- **路线图判断：**  
  **属于近期工程基础设施里程碑。** 将 hosted `rust-cov` 拆为 `core`、`product`、`facades`、`tui` 四组，并为卡死测试设置 5 分钟超时，有助于提高 CI 可用性和故障定位效率。

---

### 6.5 本地 RPC 绕过系统代理

- **PR：** [#8169](https://github.com/tinyhumansai/openhuman/pull/8169)
- **状态：** 开放
- **路线图判断：**  
  **中等偏高优先级。** 这是企业代理、网络兼容性与本地服务可靠性修复，预计会进入近期版本，但当前 PR 创建时间较长，可能存在评审积压。

---

## 7. 用户反馈摘要

### 真实用户痛点

1. **凭据配置流程不可用且缺少授权闭环**
   - [#8596](https://github.com/tinyhumansai/openhuman/issues/8596) 表明，用户在 Settings 保存 API Key 时直接失败，无法理解系统为何需要额外 grant，也无法在界面中完成批准。
   - 修复后用户应能明确看到“待授权”状态并作出选择，避免“保存即报错”的黑盒体验。

2. **文件操作边界不一致**
   - [#8652](https://github.com/tinyhumansai/openhuman/issues/8652) 反映出，即使功能能够执行，用户和维护者仍关心 sandbox 文件是否经过统一的受控存储路径。
   - 这类反馈通常来自安全审查或内部自动化流程，而非普通功能抱怨，优先级应高于一般体验问题。

### 满意度信号

- 提供的两个 Issue 均已关闭；其中 API Key 问题有直接对应的 [#8597](https://github.com/tinyhumansai/openhuman/pull/8597)。
- 存储绕过问题也由 [#8653](https://github.com/tinyhumansai/openhuman/pull/8653) 承接，说明维护者对安全告警响应及时。

### 不满与不足信号

- 两个 Issue 均为 **0 👍**，且没有更多用户评论，尚不足以判断外部社区满意度。
- PR 数据未提供评论和 reaction，可能处于“提交活跃但社区互动有限”的阶段。
- 开放 PR 数量较多，且存在长期开放项 [#8169](https://github.com/tinyhumansai/openhuman/pull/8169)，说明评审、CI 和合入节奏可能落后于开发产出。

---

## 8. 待处理积压

### 8.1 长期开放的本地 RPC 代理修复

- **PR：** [#8169 rpc: never proxy JSON-RPC calls to the local core](https://github.com/tinyhumansai/openhuman/pull/8169)
- **创建时间：** 2026-10-21
- **最后更新：** 2026-11-11
- **积压判断：**  
  PR 已开放约三周，虽然今日仍有更新，但问题本身较成熟，不应继续长期占用队列。建议明确评审负责人、确认与当前 RPC client 重构的兼容性，并尽快给出合并或拆分方案。

### 8.2 多个 CI 修复 PR 相互重叠

- **PR：** [#8655](https://github.com/tinyhumansai/openhuman/pull/8655)
- **PR：** [#8653](https://github.com/tinyhumansai/openhuman/pull/8653)
- **PR：** [#8595](https://github.com/tinyhumansai/openhuman/pull/8595)

**风险：**

- 多个 PR 同时处理主干失败、storage-bypass、coverage 和 Fast lane；
- 可能存在文件、测试或 CI 配置冲突；
- 如果不明确主线，后续合并顺序可能反过来重新引入失败。

**建议：** 指定一个 CI 修复主 PR，其余改为依赖或拆分，并要求每个 lane 在目标分支和主干上各验证一次。

### 8.3 钱包功能链尚未完成集成

- **PR：** [#8650](https://github.com/tinyhumansai/openhuman/pull/8650)
- **PR：** [#8651](https://github.com/tinyhumansai/openhuman/pull/8651)
- **已关闭基础：** [#8648](https://github.com/tinyhumansai/openhuman/pull/8648)、[#8649](https://github.com/tinyhumansai/openhuman/pull/8649)

**建议：**

优先完成 #8650 与 #8651，并围绕以下路径做集成测试：

`Cron opt-in → trusted automation → spend policy → x402 → persistent ledger → balance reporting`

这能避免功能分别可用、组合路径却因信任来源或策略判断不一致而失效。

### 8.4 存储绕过修复需确认最终合入状态

- **Issue：** [#8652](https://github.com/tinyhumansai/openhuman/issues/8652)
- **相关 PR：** [#8653](https://github.com/tinyhumansai/openhuman/pull/8653)

Issue 虽已关闭，但 PR 仍开放。维护者应补充关闭依据，确认是完整修复、重复项还是由其他 PR 覆盖，避免出现“Issue 已关但主干仍存在风险”的状态不一致。

---

## 今日结论

OpenHuman 今天呈现出较强的功能推进速度：自动化 Cron、钱包支付策略、账本、密钥审批和配置脱敏均取得了实质性进展，项目的安全闭环明显增强。  
不过，**7 个待合并 PR、多个主干 CI 预存失败，以及 MCP、存储绕过和 RPC 代理问题尚待落地**，说明当前主要风险已从“功能缺失”转向“集成、测试和交付治理”。

**建议下一阶段优先顺序：**

1. 合并并验证 CI 主线修复；
2. 完成 MCP serve 扫描与 storage-bypass 修复；
3. 收拢钱包/Cron 自动化功能链；
4. 清理长期开放的 #8169；
5. 在下一次发布前执行安全回归与端到端自动化支付测试。

</details>

---
*本日报由 [Big Model Radar](https://github.com/96loveslife/big_model_radar) 自动生成。*
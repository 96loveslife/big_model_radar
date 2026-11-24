# OpenClaw 生态日报 2026-11-24

> Issues: 500 | PRs: 500 | 覆盖项目: 8 个 | 生成时间: 2026-11-24 09:19 UTC

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

**统计日期：2026-11-24**  
**数据范围：过去 24 小时 GitHub Issues、PR 与 Releases 更新**

---

## 1. 今日速览

OpenClaw 今日保持极高开发活跃度：过去 24 小时更新 **500 条 Issues**、**500 条 PR**，其中 **353 条 Issue 新开或活跃、147 条关闭**，**283 条 PR 待合并、217 条已合并或关闭**，并发布 **2 个 Beta 版本**。  
项目当前处于明显的“**高吞吐开发 + 高验证压力**”阶段：发布、升级回滚、后台任务恢复、模型缓存和多智能体委托均有集中修复。  
与此同时，问题积压也较重，热点集中在 **Prompt Cache 失效、升级不可恢复、Gateway 状态错乱、消息丢失及内存膨胀**，其中多项被标记为 P0/P1。  
综合判断，项目迭代速度很快、功能覆盖广，但 **发布稳定性、状态一致性和可观测性尚未完全跟上规模增长**；健康度评估为 **活跃但承压（中高）**。

---

## 2. 版本发布

### v2026.11.10-beta.3

- [Release v2026.11.10-beta.3](https://github.com/openclaw/openclaw/releases/tag/v2026.11.10-beta.3)

#### 核心更新

- **增强更新恢复能力**
  - 更新过程中即使包替换被中断，OpenClaw 仍保持可运行。
  - 跨 Schema 迁移、进程崩溃或机器重启后，可由下一次更新安全接续。
  - 相关修复覆盖 #200273、#200366、#200460、#200866、#200994、#201600。
- **提升委派后台工作的可靠性**
  - 重点解决后台任务完成结果丢失、父任务提前结束、恢复后无法继续等场景。

#### 破坏性变更与迁移注意事项

- Release 摘要未明确标注破坏性 API 变更。
- 但该版本涉及 **包更新、Schema 迁移与恢复流程**，生产环境升级前建议：
  1. 备份 Gateway 配置、数据库和凭据；
  2. 验证现有更新渠道是否能处理中断后恢复；
  3. 升级后重点检查后台任务、Agent 委托和 Gateway 启动状态；
  4. 避免在无人值守生产环境中直接覆盖到 Beta 版本。

### v2026.11.10-beta.2

- [Release v2026.11.10-beta.2](https://github.com/openclaw/openclaw/releases/tag/v2026.11.10-beta.2)

#### 核心更新

- 更新被中断时保留可运行状态，并允许崩溃或重启后的下一次更新安全完成。
- 强化后台任务完成结果的保留和恢复，降低任务结果丢失概率。
- 相关修复覆盖 #200273、#200366、#200460、#200550、#200994。

#### 迁移建议

- 该版本仍为 Beta，重点面向高风险升级恢复链路。
- 使用数据库或服务端持久化部署的用户，应先验证 Schema 前向兼容性及失败回滚路径。

---

## 3. 项目进展

今日 PR 数量与 Issues 数量同为 500，显示仓库处于高强度并行开发状态。虽然没有提供完整 PR 标题清单，但从已关闭、已合并和高优先级 PR 可以确认以下方向取得实质推进。

### 3.1 更新与发布链路明显收敛

- [#204344 — finish healthy Git updates after an older verifier exits](https://github.com/openclaw/openclaw/pull/204344)  
  解决旧版 Git updater 启动新版 Gateway 并完成数据库迁移后，旧 verifier 因无法读取新 Schema 而误判更新失败的问题。目标是在保留健康新 Gateway 的同时完成正确的更新状态收敛。

- [#204515 — apply newer npm installs when restarting the Gateway](https://github.com/openclaw/openclaw/pull/204515)  
  修复全局安装新版 npm 包后，重启 Gateway 仍运行旧版本、且更新状态错误显示“已是最新”的问题。

- [#204502 — keep the Gateway available after failed PostgreSQL updates](https://github.com/openclaw/openclaw/pull/204502)  
  针对 PostgreSQL 数据已迁移但升级进程崩溃后的服务可用性，设计包含公开与私有服务副本的受保护发布和回退流程。

- [#204496 — retain protected resources after native squash merges](https://github.com/openclaw/openclaw/pull/204496)  
  原生 squash 合并后保留受保护远端分支、本地 checkout 和符合条件的本地分支，避免合并与资源清理被强耦合。

- [#204512 — build Git releases only once](https://github.com/openclaw/openclaw/pull/204512)  
  消除 release preparation 中重复构建 Control UI 的过程，缩短 Git 更新耗时并减少构建失败点。

- [#204520 — publish explicitly approved fast-track releases](https://github.com/openclaw/openclaw/pull/204520)  
  补齐快速发布审批后的实际发布能力，使“已批准候选版本”不再卡在发布工具环节。

- [#204427 — validate both update receipt formats and pin beta channel fixture](https://github.com/openclaw/openclaw/pull/204427)  
  修正完整发布验证对两类更新回执格式的兼容性，并固定 Beta 渠道测试夹具，降低发布验证的偶发失败。

### 3.2 后台任务与自动化恢复继续修复

- [#204532 — deliver background command results in incognito chats and when storing them fails](https://github.com/openclaw/openclaw/pull/204532)  
  解决隐身会话中后台命令完成结果无法送达，以及结果持久化失败时无可靠降级路径的问题。

- [#204513 — keep turns alive when nothing is pending](https://github.com/openclaw/openclaw/pull/204513)  
  修复自动化调用 `sessions_yield` 后在没有待处理事项时静默结束、无法产生最终回复的问题。

- [#204534 — Revert “let finished background commands reach the agent before an active goal advances”](https://github.com/openclaw/openclaw/pull/204534)  
  撤回导致隐身聊天后台命令结果丢失的改动，并附带实际模型与干净 Gateway 的复现证据，说明团队在主动回退不稳定实现。

### 3.3 模型、缓存与长会话性能改善

- [#204519 — avoid re-encoding tool history in long OpenAI Responses sessions](https://github.com/openclaw/openclaw/pull/204519)  
  避免长会话在每次响应完成时重新编码完整工具历史，降低 OpenAI Responses 路径上的 token 开销、延迟和前缀缓存破坏。

- [#204522 — add GLM-5.4 for Z.AI Coding Plan users](https://github.com/openclaw/openclaw/pull/204522)  
  将新发布的 GLM-5.4 纳入模型目录，并同步处理默认模型与兼容目录问题。PR 已关闭，推测已进入主线或以其他形式落地。

### 3.4 用户界面与新 onboarding 体验

- [#204505 — separate dictation and Talk buttons in the chat composer](https://github.com/openclaw/openclaw/pull/204505)  
  将 Web UI 中语音听写和实时 Talk 拆为两个明确按钮，降低手势操作不直观造成的误触。

- [#204533 — let classic setup skip an unconfigured model](https://github.com/openclaw/openclaw/pull/204533)  
  修复经典 onboarding 允许跳过 provider 后，却仍强制要求填写模型的问题，降低首次安装阻塞率。

- [#204492 — simplify automation updates in the Control UI](https://github.com/openclaw/openclaw/pull/204492)  
  合并 Control UI 中针对新旧 Gateway 的重复自动化更新逻辑，降低长期维护复杂度。

### 3.5 CI 与工程效率

- [#204525 — avoid repeated full-inventory matching](https://github.com/openclaw/openclaw/pull/204525)  
  避免 CI 对每个测试文件重复扫描完整清单；在约 600 个文件的场景中，可避免约 36 万次匹配访问。

- [#204529 — speed up literal test inventory selection](https://github.com/openclaw/openclaw/pull/204529)  
  优化精确字面量测试选择路径，缓解每小时 CI 超过 120 秒限制的问题。

- [#204535 — trim repetitive presentation tests](https://github.com/openclaw/openclaw/pull/204535)  
  删除已由组件级测试覆盖的路由间距、合成 inventory 展示和视图连线重复测试，缩短 UI 测试基线。

**进展判断：** 今日项目主要在补齐升级可靠性、后台任务恢复和发布自动化这些“规模化运行所必需”的底层能力；功能端也在推进 UI 和模型目录更新。整体确实向前推进，但由于新问题仍以每天数百条的速度涌入，净健康度改善尚需结合回归率和合并速度评估。

---

## 4. 社区热点

### 4.1 Prompt Cache 反复失效，是最集中的成本与性能议题

- [#182891 — Prompt cache never reused](https://github.com/openclaw/openclaw/issues/182891)  
  **27 条评论，当前热点最高。** 用户报告每次请求均出现 `cache read dropped N -> 0`，并怀疑 Envelope 重写、`runtimeContextCarrier` 变化及同一轮内异常丢缓存有关。

- [#143017 — Prompt-cache: five ways a persistent session rewrites its prefix](https://github.com/openclaw/openclaw/issues/143017)  
  **19 条评论。** 通过生产流量抓取确认持久会话存在多种前缀重写路径，并产生 **2130 万 cache-write tokens**。

- [#186683 — claude-cli: prompt cache fully rewritten whenever the turn's surface changes](https://github.com/openclaw/openclaw/issues/186683)  
  聚焦 Webchat、Telegram heartbeat、事件等不同交互 surface 导致缓存整体重写。

**社区诉求：**

1. 保持会话前缀和工具调用历史的字节级稳定；
2. 将 envelope、surface、heartbeat 等元数据与模型前缀隔离；
3. 提供 Prompt Cache 命中率、read/write token 和重写原因的可观测性；
4. 避免“功能正常但成本倍增”的隐性回归。

此外，[#204519](https://github.com/openclaw/openclaw/pull/204519) 已直接处理 OpenAI Responses 长会话中的工具历史重编码，说明该问题已经开始进入代码修复阶段。

### 4.2 Codex 委托任务失败：父任务恢复、结果保留成为焦点

- [#196199 — native Codex helper completions fail to resume the parent](https://github.com/openclaw/openclaw/issues/196199)  
  **17 条评论，P1。** 自 2026.10.10 起，Codex helper 完成后父 Agent 无法可靠恢复，目标被暂停，用户感觉助手“锁死”。

- [#196803 — Codex post-tool finalization fails with invalid_content/context_unavailable](https://github.com/openclaw/openclaw/issues/196803)  
  **7 条评论，P1。** 工具调用后的最终上下文采集被拒绝，导致最终答复失败，保留的子任务结果也无法访问。

- [#164533 — sessions_send to an active subagent fails with session writer claim changed](https://github.com/openclaw/openclaw/issues/164533)  
  **7 条评论。** 父会话向正在启动或结束回合的子 Agent 发送消息时，可能发生 transcript writer claim 冲突。

**核心诉求：** 子 Agent 的完成必须成为父会话的可靠事件；即使存储、唤醒或上下文采集失败，也应保证结果可恢复、可追踪，而不是静默丢失。

### 4.3 升级失败与恢复体验

- [#187917 — Update failure: updater-runtime-retention](https://github.com/openclaw/openclaw/issues/187917)  
  **14 条评论，现已关闭。**
- [#158127 — 2026.9.6 multi-agent runtime publication failures](https://github.com/openclaw/openclaw/issues/158127)  
  **16 条评论，现已关闭。**
- [#201468 — macOS launch alert gives generic credential recovery steps](https://github.com/openclaw/openclaw/issues/201468)  
  **8 条评论，P0、UX release blocker。**
- [#203442 — Update activation Doctor fails with plugin Doctor source not prepared](https://github.com/openclaw/openclaw/issues/203442)  
  **7 条评论，P1。**
- [#204283 — Discord provider never initializes after upgrade](https://github.com/openclaw/openclaw/issues/204283)  
  **6 条评论，P1。**

**诉求重点已从“能否升级”转向“升级失败后如何安全恢复”**：包括跨版本 Schema 回退、插件资源重建、版本不一致提示、Discord 等渠道初始化可靠性。

### 4.4 Control UI CPU 锁死回归

- [#196820 — Control UI locks up at ~100% CPU in an Element.getAnimations() loop](https://github.com/openclaw/openclaw/issues/196820)  
  **8 条评论，P1、明确回归。** 用户升级至 2026.11.2 后，macOS WebContent 和 Edge 中页面进入高 CPU 忙循环。

这是影响所有使用 Control UI 的用户的高可见性问题。当前摘要中未见明确对应的已合并修复，应关注维护者响应及复现范围。

### 4.5 多智能体成本不可归因

- [#130257 — Tasks ledger records no tokens or cost for delegated ACP runs](https://github.com/openclaw/openclaw/issues/130257)  
  **11 条评论。** 报告父轮次仅计 `$0.04`，子运行却达到 `$14.14`，且任务台账无法追踪子任务成本。

**诉求：** 为 ACP/委派子任务记录模型、token、缓存命中、费用、父任务关联及失败原因；这是多智能体系统实现成本治理的前提。

---

## 5. Bug 与稳定性

### P0 / 发布阻断

1. [#203869 — Tool execution fails: gRPC code-mode session closed / BrokenPipe](https://github.com/openclaw/openclaw/issues/203869)  
   - 明确回归，标记 Beta release blocker。  
   - 工具执行通道整体不可用，影响范围大。  
   - **Fix PR：摘要中未见明确关联修复。**

2. [#201468 — macOS 凭据恢复提示不适用于旧 Gateway Schema](https://github.com/openclaw/openclaw/issues/201468)  
   - App 与 Gateway 版本不一致时，提示未准确指出需要同步旧版 Gateway。  
   - **Fix PR：摘要中未见明确关联修复。**

### P1 / 高严重度

1. [#204283 — Discord 升级后无法完成客户端初始化](https://github.com/openclaw/openclaw/issues/204283)  
   - 开启 `commands.nativeSkills` 后，从 2026.11.5 升级到 2026.11.7 出现 Discord 静默重启循环。  
   - **Fix PR：未见明确关联。**

2. [#196820 — Control UI 100% CPU 忙循环](https://github.com/openclaw/openclaw/issues/196820)  
   - macOS WebContent 与 Edge 均受影响。  
   - **Fix PR：未见明确关联。**

3. [#195497 — Gateway 17 小时内存增长至约 3GB](https://github.com/openclaw/openclaw/issues/195497)  
   - 涉及 13 个 cron、飞书 WebSocket 与 skills watcher。  
   - **Fix PR：未见明确关联。**

4. [#196199 — Codex helper 无法恢复父 Agent](https://github.com/openclaw/openclaw/issues/196199)  
   - 父任务暂停、用户被锁在等待状态。  
   - **Fix PR：相关方向已有 #204532、#204534 等 PR，但未见摘要中明确一一关联。**

5. [#196803 — Codex 工具后最终化失败，结果不可访问](https://github.com/openclaw/openclaw/issues/196803)  
   - **Fix PR：未见明确关联。**

6. [#201974 — 直接 npm 安装导致 plugin-skills junction 损坏](https://github.com/openclaw/openclaw/issues/201974)  
   - npm 11 跳过生命周期脚本，Gateway 拒绝启动。  
   - **Fix PR：相关升级修复集中在 #204515 等，但未见明确关联。**

7. [#203442 — 激活阶段 Doctor 因 DeepSeek 插件源未准备而失败](https://github.com/openclaw/openclaw/issues/203442)  
   - **Fix PR：未见明确关联。**

8. [#161403 — Agent 数据库健康校验耗时超过两分钟](https://github.com/openclaw/openclaw/issues/161403)  
   - 同步完整性检查约 128.8 秒，影响启动与可用性。  
   - **Fix PR：未见明确关联。**

9. [#189206 — 陈旧 CLI device token 无法通过 rotate/revoke/doctor 清除](https://github.com/openclaw/openclaw/issues/189206)  
   - 设备令牌更新形成循环，涉及认证与跨设备撤销。  
   - **Fix PR：未见明确关联。**

10. [#142610 — Meeting voice consult 错误提示 Gateway draining](https://github.com/openclaw/openclaw/issues/142610)  
    - 实际 Gateway 未 drain，错误继承了已释放的 root-work admission 上下文。  
    - **Fix PR：未见明确关联。**

11. [#166585 — claude-cli 在已输出最终回复后仍被 watchdog 杀死](https://github.com/openclaw/openclaw/issues/166585)  
    - 用户已收到最终文本，但任务仍被标记失败。  
    - **Fix PR：未见明确关联。**

### P2 / 中等严重度

- [#161158 — gateway restart 成功后仍报告失败并退出码为 0](https://github.com/openclaw/openclaw/issues/161158)  
  60 秒 readiness budget 被硬编码，且状态与退出码不一致。**未见明确 fix PR。**

- [#183048 — unknown_after_send 出站队列缺少检查与结算 CLI](https://github.com/openclaw/openclaw/issues/183048)  
  Slack 投递状态不明后缺少运维处置入口。**未见明确 fix PR。**

- [#143973 — view_image base64 全量写入 transcript](https://github.com/openclaw/openclaw/issues/143973)  
  仅 1.3% 事件占据约 80% 存储空间，放大数据库膨胀。**未见明确 fix PR。**

- [#136271 — Teams 文件上传不能动态解析团队 SharePoint 站点](https://github.com/openclaw/openclaw/issues/136271)  
  **未见明确 fix PR。**

- [#143375 — 无视觉模型时扫描 PDF 无法打开](https://github.com/openclaw/openclaw/issues/143375)  
  OCR/扫描检测发生在模型调用之后，形成不可达路径。**未见明确 fix PR。**

- [#178805 — MiniMax M3.1 Flash 压缩时 thinking 耗尽预算](https://github.com/openclaw/openclaw/issues/178805)  
  无可见摘要文本，压缩确定性失败。**未见明确 fix PR。**

- [#116052 — MCP OAuth 不支持预注册 authorization_code 客户端](https://github.com/openclaw/openclaw/issues/116052)  
  **未见明确 fix PR。**

- [#165615 — Discord Components V2 卡片无法编辑](https://github.com/openclaw/openclaw/issues/165615)  
  **未见明确 fix PR。**

- [#188377 — 孤儿 running session 数周无法结束或归档](https://github.com/openclaw/openclaw/issues/188377)  
  **未见明确 fix PR。**

- [#189765 — Telegram final/preview 回复缺少 outbound send ok 日志](https://github.com/openclaw/openclaw/issues/189765)  
  **未见明确 fix PR。**

- [#193383 — doctor 的 skill-workshop 工具权限检查无法验证](https://github.com/openclaw/openclaw/issues/193383)  
  **未见明确 fix PR。**

### 已关闭或已有明确修复方向的稳定性问题

- [#158127 — 多 Agent runtime publication failures / Codex startup timeout](https://github.com/openclaw/openclaw/issues/158127)：已关闭。
- [#187917 — updater-runtime-retention 更新失败](https://github.com/openclaw/openclaw/issues/187917)：已关闭；Beta 版本继续强化恢复能力。
- [#153430 — 深层 `$include` 配置触发 RangeError](https://github.com/openclaw/openclaw/issues/153430)：已关闭。
- [#187588 — Telegram 独立 MEDIA 行未发送本地 PDF](https://github.com/openclaw/openclaw/issues/187588)：已关闭。
- [#107487 — `/acp close` 未清理 FileSessionStore](https://github.com/openclaw/openclaw/issues/107487)：已关闭。
- [#202379 — Lean memory 进一步减内存](https://github.com/openclaw/openclaw/issues/202379)：已关闭，但资源占用仍需持续压测。

---

## 6. 功能请求与路线图信号

### 近期可能进入下一版本

1. **GLM-5.4 模型目录支持**  
   [#204522](https://github.com/openclaw/openclaw/pull/204522) 已关闭，表明支持大概率已经合入或完成替代处理。  
   **信号：模型目录更新响应速度快。**

2. **Web UI 分离听写与 Talk**  
   [#204505](https://github.com/openclaw/openclaw/pull/204505) 处于“需要证明”状态，已有截图证明。  
   **信号：若兼容性验证通过，较可能进入下一版 Web UI。**

3. **Classic onboarding 允许跳过模型配置**  
   [#204533](https://github.com/openclaw/openclaw/pull/204533) 属于直接降低首次安装阻力的修复。  
   **信号：优先级较高，预计进入近期版本。**

4. **Fast-track 显式批准发布**  
   [#204520](https://github.com/openclaw/openclaw/pull/204520) 补齐发布管理链路。  
   **信号：更可能进入内部发布工具，而非面向用户的功能版本。**

### 中期路线图信号

5. **MCP Events 驱动 Agent Run**  
   [#166586](https://github.com/openclaw/openclaw/issues/166586) 提出消费 MCP Server Events 并为每个事件启动 Agent。  
   **判断：** 与现有 hooks 触发模式一致，具备架构延展性；但涉及事件订阅、幂等、过滤与生命周期，尚无直接 PR，近期落地概率中等。

6. **Agent 自主触发上下文压缩**  
   [#6757](https://github.com/openclaw/openclaw/issues/6757) 请求 `self-compact` 工具。  
   **判断：** 对长会话自治价值高，但与 Prompt Cache、压缩预算等问题相互耦合，需先稳定 compaction 与缓存前缀后再推进。

7. **MCP OAuth 支持预注册客户端**  
   [#116052](https://github.com/openclaw/openclaw/issues/116052) 可显著改善企业 OAuth 服务兼容性。  
   **判断：** 需求明确、边界清晰，有进入后续版本的可能，但涉及认证流程和安全审查。

8. **WhatsApp 进度草稿与自有消息编辑**  
   [#189815](https://github.com/openclaw/openclaw/issues/189815) 对齐其他渠道已有的进度反馈能力。  
   **判断：** 属于渠道体验补齐，若 WhatsApp API 能力允许，预计会排入中期路线。

9. **Teams 动态 SharePoint 站点解析**  
   [#136271](https://github.com/openclaw/openclaw/issues/136271) 去除硬编码 `sharePointSiteId`。  
   **判断：** 部署体验改善，但目前仍等待产品决策，短期概率偏低至中等。

10. **团队侧边栏 Agent 排序**  
    [#155039](https://github.com/openclaw/openclaw/issues/155039) 已关闭，说明讨论已结束；是否实际交付需以主线代码为准。  
    **判断：** 属于 UI 效率增强，不是核心路线优先级。

11. **Control UI/TUI 展示 tokens/sec**  
    [#115207](https://github.com/openclaw/openclaw/issues/115207) 已关闭。  
    **判断：** 社区需求明确，但更偏监控体验优化。

---

## 7. 用户反馈摘要

### 7.1 真实使用场景

- **长时间、多 Agent、多渠道的常驻 Gateway**
  - 用户运行 10 个以上 Agent、13 个 cron、飞书 WebSocket、skills watcher 等组合。
  - 核心诉求不是基础聊天，而是任务长期运行、后台工作、费用核算与故障恢复。
  - 相关反馈：[#195497](https://github.com/openclaw/openclaw/issues/195497)、[#130257](https://github.com/openclaw/openclaw/issues/130257)。

- **Windows 与 macOS 混合安装环境**
  - npm 安装、桌面 App、Gateway 服务版本可能不一致。
  - 用户遇到 junction 损坏、Doctor 插件源未准备、旧版 verifier 无法读取新版 Schema 等问题。
  - 相关反馈：[#201974](https://github.com/openclaw/openclaw/issues/201974)、[#201468](https://github.com/openclaw/openclaw/issues/201468)。

- **Discord、Teams、Telegram、WhatsApp 的真实消息投递**
  - 用户关注文件上传、卡片编辑、后台结果投递、媒体发送日志和发送状态结算。
  - 相关反馈：[#136271](https://github.com/openclaw/openclaw/issues/136271)、[#165615](https://github.com/openclaw/openclaw/issues/165615)、[#183048](https://github.com/openclaw/openclaw/issues/183048)。

### 7.2 主要痛点

1. **隐性成本上升**
   - Prompt Cache 每次归零导致 cache-write token 激增，用户虽未完全崩溃，但账单与延迟明显受损。
   - [#143017](https://github.com/openclaw/openclaw/issues/143017)、[#182891](https://github.com/openclaw/openclaw/issues/182891)。

2. **任务完成但 Agent 不恢复**
   - Codex helper 已结束，用户却仍被锁在等待状态。
   - [#196199](https://github.com/openclaw/openclaw/issues/196199)、[#196803](https://github.com/openclaw/openclaw/issues/196803)。

3. **升级后渠道静默失效**
   - Discord 不再完成初始化，健康监控不断重启，但没有清晰的首个错误。
   - [#204283](https://github.com/openclaw/openclaw/issues/204283)。

4. **错误信息不可操作**
   - `gateway restart` 实际成功却报告失败。
   - `Gateway is draining` 实际并未 draining。
   - Doctor 在无法修复时仍重复建议运行同一条命令。
   - 相关反馈：[#161158](https://github.com/openclaw/openclaw/issues/161158)、[#142610](https://github.com/openclaw/openclaw/issues/142610)、[#204518](https://github.com/openclaw/openclaw/pull/204518)。

5. **UI 可用性回归**
   - Control UI 在 macOS 和 Edge 中进入 100% CPU 忙循环，用户将其视为升级后的显著退化。
   - [#196820](https://github.com/openclaw/openclaw/issues/196820)。

### 7.3 正面信号

- 社区提供了较强的生产流量、wire capture、干净 Gateway 和真实模型复现数据。
- 多个 PR 不再只依赖单元测试，而是开始附带真实复现、截图或成功证明，例如：
  - [#204534](https://github.com/openclaw/openclaw/pull/204534)
  - [#204505](https://github.com/openclaw/openclaw/pull/204505)
  - [#204515](https://github.com/openclaw/openclaw/pull/204515)
- 部分高价值问题已快速关闭或合入，如 ACP 会话清理、Lean memory、GLM-5.4 模型目录等。
- 维护者开始主动回退存在真实数据丢失风险的实现，说明质量控制方向正确。

### 7.4 不满与信任风险

- 同一类问题存在多个重复报告，显示修复验证和 issue 去重仍未充分收敛。
- “用户收到最终答案但系统标记失败”“命令实际成功但退出码为 0”“消息已发送但缺日志”等状态不一致，会显著降低运维信任。
- 当前很多 P1 问题缺少明确 fix PR 链接，用户难以判断是否已修复、是否有可用规避方案。

---

## 8. 待处理积压

### 8.1 长期且影响面较大的 Issue

1. [#55792 — Catch up on missed inbound messages after Gateway restart](https://github.com/openclaw/openclaw/issues/55792)  
   - 创建于 2026-03-27，仍为 OPEN/P1。  
   - Gateway 停机窗口内的入站消息会静默丢失，影响 Discord、Telegram 等所有渠道。  
   - **建议：** 尽快明确游标补偿、回放 API 和至少可人工核对的机制。

2. [#116052 — MCP OAuth 预注册客户端支持](https://github.com/openclaw/openclaw/issues/116052)  
   - 创建于 2026-07-29，P1/P2，涉及安全与认证。  
   - **建议：** 进入安全评审，拆分为 OAuth client 配置、登录流程和文档三个子任务。

3. [#130257 — ACP 委派成本未进入 Tasks ledger](https://github.com/openclaw/openclaw/issues/130257)  
   - 创建于 2026-08-26，评论活跃。  
   - **建议：** 将 token、费用和父子任务关联列为多 Agent 模式的基础能力。

4. [#143375 — 扫描 PDF 在无视觉模型时不可达](https://github.com/openclaw/openclaw/issues/143375)  
   - 创建于 2026-09-09。  
   - **建议：** 调整扫描检测与 OCR 插件调用顺序，避免先经过视觉模型门槛。

5. [#166585 — Claude CLI 已完成输出但 watchdog 判失败](https://github.com/openclaw/openclaw/issues/166585)  
   - 创建于 2026-10-07。  
   - **建议：** 明确“最终文本已产生”的终止语义，避免误杀与错误重试。

6. [#166586 — 消费 MCP Events 并启动 Agent](https://github.com/openclaw/openclaw/issues/166586)  
   - 创建于 2026-10-07。  
   - **建议：** 先给出协议支持范围和最小实现设计，避免长期停留在 stale。

7. [#178805 — MiniMax 压缩预算被 thinking 耗尽](https://github.com/openclaw/openclaw/issues/178805)  
   - P1/P2。  
   - **建议：** 引入 thinking 与可见摘要的分离预算，或在模型能力层标注 reasoning token。

8. [#182891 — Prompt Cache 从不命中](https://github.com/openclaw/openclaw/issues/182891)  
   - 热点最高，但已跨多个版本。  
   - **建议：** 建立可重复的缓存基准测试，区分 Envelope、surface、heartbeat、tool history 等变量。

9. [#183048 — 出站队列 unknown_after_send 无处置 CLI](https://github.com/openclaw/openclaw/issues/183048)  
   - **建议：** 增加 list/show/retry/settle/mark-failed 操作，并明确 Slack 不确定状态下的幂等策略。

10. [#188377 — 孤儿 running session 无法结束](https://github.com/openclaw/openclaw/issues/188377)  
    - 数周残留并持续产生 transcript 事件。  
    - **建议：** 提供 session reconcile、archive 和强制终止机制。

11. [#189206 — 陈旧 device token 无法清理](https://github.com/openclaw/openclaw/issues/189206)  
    - P1，涉及跨设备撤销与认证恢复。  
    - **建议：** 提供离线解封路径并安全展示 token delivery 状态。

### 8.2 需要维护者跟进的 PR

1. [#204371 — preserve state and repository authority across worker recovery](https://github.com/openclaw/openclaw/pull/204371)  
   - 涉及 Schema、仓库凭据和审批来源，标记 security-sensitive-changed。  
   - **建议：** 安全评审与兼容性验证应优先于普通合并队列。

2. [#204505 — 分离 Dictation 和 Talk](https://github.com/openclaw/openclaw/pull/204505)  
   - 标记兼容性风险，等待证明。  
   - **建议：** 明确旧浏览器、移动端与键盘快捷键的兼容策略。

3. [#204515 — 重启时应用新版 npm 安装](https://github.com/openclaw/openclaw/pull/204515)  
   - 涉及 resident release 切换。  
   - **建议：** 验证正在运行会话、后台任务及迁移失败时的行为。

4. [#204502 — PostgreSQL 更新失败后保持 Gateway 可用](https://github.com/openclaw/openclaw/pull/204502)  
   - 标记兼容性和可用性风险。  
   - **建议：** 明确公开/私有副本的数据一致性、切流和回滚边界。

5. [#204520 — 显式批准后发布 fast-track 版本](https://github.com/openclaw/openclaw/pull/204520)  
   - **建议：** 增加审批不可绕过、产物哈希和审计记录测试。

6. [#204496 — squash merge 后保留受保护资源](https://github.com/openclaw/openclaw/pull/204496)  
   - 标记等待作者。  
   - **建议：** 明确默认保留范围，避免长期分支堆积或误删受保护资源。

---

## 今日结论

OpenClaw 今日的项目状态可以概括为：**开发速度极强，发布和恢复链路正在快速补强，但用户侧稳定性问题仍大量积压。**

最值得关注的不是单一功能发布，而是三个系统性问题：

1. **会话前缀和委派状态的一致性**：Prompt Cache 归零、Codex helper 无法恢复、后台结果丢失，本质上都指向状态边界不清晰；
2. **升级过程的原子性与可恢复性**：Beta 版本和多项 PR 正在处理 Schema、插件、旧 verifier 与新 Gateway 并存的问题；
3. **可观测性与可操作性**：重启误报、发送无日志、Doctor 重复无效建议、委派成本不可见，持续削弱用户信任。

若维护者能优先收敛 **P0/P1 稳定性问题、补齐明确的 fix PR 关联，并建立 Prompt Cache 与任务恢复的回归基准**，项目健康度将有望从“高活跃但承压”转向“快速且可靠”。

---

## 横向生态对比

# 个人 AI 助手 / 自主智能体开源生态横向对比分析

**统计日期：2026-11-24**  
**覆盖项目：** OpenClaw、NanoBot、PicoClaw、IronClaw、LobsterAI、QwenPaw、Hermes Agent、OpenHuman

---

## 1. 生态全景

个人 AI 助手与自主智能体生态正从“模型调用与聊天 UI”快速转向 **长期运行、后台任务、多智能体委派、渠道接入与插件扩展**，OpenClaw、Hermes Agent、QwenPaw 和 LobsterAI 均在今日表现出密集的底层工程投入。生态同时进入“**功能快速扩张与可靠性治理并行**”阶段：升级恢复、状态一致性、Prompt Cache、子进程回收、配置热加载、租户隔离和沙箱权限成为共同主题。

从交付形态看，各项目开始明显分化：OpenClaw 强调成熟的全渠道 Gateway 与复杂运行时，Hermes Agent 强调跨客户端统一会话和主动 Cron，NanoBot 与 LobsterAI 更偏桌面端/WebUI 控制台，QwenPaw 聚焦插件 SDK、Creator 与记忆治理，OpenHuman 则突出 Rust Core、内核沙箱和可控记忆。

社区规模方面，OpenClaw 以单日 **500 Issues + 500 PR** 的规模显著领先，已经成为该领域事实上的高流量核心参照项目；但其积压、P0/P1 和长期 Issue 同样最多，表明其优势是生态与规模，而非成熟度上的绝对领先。整体而言，生态仍处于高增长期，但生产级可信度、状态可观测性和安全治理尚未完全跟上功能扩张。

---

## 2. 各项目活跃度对比

| 项目 | 今日 Issues | 今日 PR | Release 情况 | 待合并 PR | 健康度评估 |
|---|---:|---:|---|---:|---|
| **OpenClaw** | 500 | 500 | 2 个 Beta：v2026.11.10-beta.3 / beta.2 | 283 | **活跃但承压**；规模绝对领先，但 Prompt Cache、升级恢复、Gateway 状态、委派丢结果等 P0/P1 集中 |
| **NanoBot** | 6 | 53 | 无 | 9 | **良好且高度活跃**；问题闭环快，重点风险是 WebUI 大重构回归 |
| **PicoClaw** | 0 | 5 | 无 | 0 | **稳定偏正面**；以上游同步、历史修复收敛为主，多 Agent 仍属探索阶段 |
| **IronClaw** | 0 | 0 | 无 | 0 | **静默/数据不足**；无法评估当日健康度，需关注是否活跃或处于停滞期 |
| **LobsterAI** | 1 | 16 | 无 | 4 | **活跃、推进明显**；集中收敛 DSH 迁移回归，发布准备度中高 |
| **QwenPaw** | 26 | 35 | 无；v2.3.1-beta.1 安装验证中 | 24 | **中高活跃、中等稳定性**；插件 SDK 推进明显，但安全治理与大型 PR 积压突出 |
| **Hermes Agent** | 50 | 50 | v0.23.4 稳定版 + 1 个 canary | 42 | **良好但承压**；发布节奏稳定，输出与会话一致性修复及时，但合并压力高 |
| **OpenHuman** | 1 | 3 | 无 | 0 | **良好，发布信号偏弱**；聚焦沙箱与记忆隔离，交付干净但社区验证不足 |

### 活跃度分层

- **超大规模迭代层：** OpenClaw、Hermes Agent  
- **高活跃快速演进层：** QwenPaw、NanoBot、LobsterAI  
- **稳定治理与同步层：** PicoClaw、OpenHuman  
- **低活动/待观察层：** IronClaw

> 注意：PR 数量不能直接等同于有效交付质量。OpenClaw 和 Hermes 的待合并 PR 分别达到 283 和 42，维护带宽已成为其规模增长的主要约束。

---

## 3. OpenClaw 在生态中的定位

### 3.1 生态位置：核心参照与高流量运行时平台

OpenClaw 已明显超出普通个人助手项目范畴，具备以下生态特征：

- 全渠道接入：Discord、Telegram、WhatsApp、Teams、飞书等；
- 常驻 Gateway、后台任务、Cron、多 Agent 委派；
- 插件、MCP、Provider、模型目录和 WebUI；
- Git/npm/桌面端等多渠道升级与发布链路。

其今日 **500 Issues、500 PR、353 条 Issue 新开或活跃、283 条 PR 待合并**，说明它既是用户需求中心，也是 Agent 运行时缺陷和需求的高频汇集地。

### 3.2 相比同类的优势

**1. 功能覆盖面最完整**

相比 NanoBot、OpenHuman 和 PicoClaw，OpenClaw 在渠道、模型、插件、后台任务、Gateway 和升级机制上更完整，更接近“可长期托管的个人 AI 操作系统”。

**2. 多智能体与自动化链路更深入**

OpenClaw 今日围绕 Codex helper、后台结果交付、Agent 委派、Tasks ledger 成本归因持续修复；Hermes Agent 正在强化统一会话与主动 Cron，QwenPaw 聚焦插件 SDK，OpenHuman 聚焦沙箱和记忆隔离。OpenClaw 的多 Agent 能力更早进入生产压力测试阶段。

**3. 社区规模和真实生产反馈更强**

热点问题包含 17 小时内存增长至 3GB、10+ Agent 与 13 个 Cron 的常驻部署、多渠道消息丢失以及 Prompt Cache 造成 2130 万 cache-write tokens。这些不是概念性需求，而是高并发、长期运行的真实场景。

**4. 发布与恢复体系更成熟，但仍在承压**

Beta 版本和多个 PR 已系统处理 Schema 迁移、更新中断、旧 verifier、新旧 Gateway 并存及 PostgreSQL 发布回滚。这是生态内最完整的升级可靠性投入之一，但相关故障也说明成熟度尚未跟上规模。

### 3.3 技术路线差异

| 项目 | 核心路线 |
|---|---|
| **OpenClaw** | 全渠道 Gateway + 插件/MCP + 后台任务 + 多 Agent 委派；生态覆盖最广 |
| **Hermes Agent** | CLI/Desktop/TUI/渠道统一会话 + 主动 Cron + Profile 隔离 |
| **QwenPaw** | 插件 SDK/CLI 扩展 + Creator 生产工作流 + 上下文与长期记忆治理 |
| **LobsterAI** | Electron 桌面助手 + DSH 迁移 + 国内 IM 渠道 + MCP/Skill 生态 |
| **NanoBot** | 轻量 WebUI + Apps/MCP/插件统一目录 + 多会话控制台 |
| **OpenHuman** | Rust Core + Landlock/bubblewrap 内核沙箱 + Agent 级记忆隔离 |
| **PicoClaw** | 上游同步、定制迁移、Channel 兼容与多 Agent 基础框架 |
| **IronClaw** | 当日无足够信息 |

### 3.4 社区规模对比

- **OpenClaw：断层第一。** 今日活跃量约为 Hermes 的 10 倍、QwenPaw 的 15—20 倍。
- **Hermes Agent：第二梯队领先。** 50 Issues + 50 PR，且有正式稳定版。
- **QwenPaw：架构提案密度高。** 35 PR 中 24 条待合并，生态设计讨论活跃。
- **NanoBot、LobsterAI：中小规模但修复效率高。** 两者问题关闭率较高。
- **PicoClaw、OpenHuman：用户讨论热度偏低。** 更偏维护者和工程驱动。
- **IronClaw：无法从当日数据判断。**

OpenClaw 的核心优势是**规模、覆盖面和生产反馈**，核心短板则是**状态一致性、升级恢复、缓存成本和运维可观测性**。

---

## 4. 共同关注的技术方向

### 4.1 会话、任务与委派状态一致性

涉及项目：**OpenClaw、Hermes Agent、QwenPaw、LobsterAI、NanoBot**

共同诉求：

- 后台任务完成后必须可靠唤醒父 Agent；
- 子 Agent 结果不能静默丢失；
- 会话恢复不能重复执行有副作用的命令；
- 父会话与子代理会话必须严格隔离；
- 压缩、恢复、Profile 切换后仍需保留未完成任务状态。

典型案例：

- OpenClaw：Codex helper 完成后父任务无法恢复；
- Hermes Agent：子代理会话可能接管父聊天；
- QwenPaw：TaskTracker 的 running 状态不清理、召回子进程不回收；
- LobsterAI：DSH 迁移后同一机器人与联系人产生重复会话。

**趋势判断：** 状态机、可恢复事件和幂等性正在取代“是否支持多 Agent”成为真正的技术门槛。

### 4.2 上下文、Prompt Cache 与成本归因

涉及项目：**OpenClaw、QwenPaw、Hermes Agent、LobsterAI**

共同诉求：

- 保持会话前缀字节级稳定；
- 避免每次请求重写工具历史；
- 准确计算缓存读写 token；
- 将委派子任务成本纳入父任务账本；
- 长会话压缩不能破坏缓存和未完成承诺。

典型数据：

- OpenClaw：单次缓存重写产生 **2130 万 cache-write tokens**；
- QwenPaw：Anthropic 缓存 token 此前未计入实时上下文；
- Hermes Agent：压缩后需要结构化保留 Open Commitments；
- OpenClaw：ACP 子任务出现父轮次 `$0.04`、子运行 `$14.14` 的不可归因情况。

**趋势判断：** 模型成本优化已从单次 token 统计转向“跨委派、跨缓存、跨压缩的全链路成本核算”。

### 4.3 升级、迁移与回滚安全

涉及项目：**OpenClaw、Hermes Agent、LobsterAI、PicoClaw**

共同诉求：

- 更新中断后保持可运行；
- Schema 迁移前后版本可共存；
- 备份必须真实成功；
- 恢复时选择正确版本，而非任意或最旧快照；
- 迁移后插件、Provider 和 IM 渠道必须重新初始化。

典型案例：

- OpenClaw：旧 verifier 无法读取新 Schema；
- Hermes Agent：更新后可能恢复最旧 `state.db` 快照；
- LobsterAI：DSH 迁移曾造成最长约 38 分钟启动卡死；
- PicoClaw：同步上游约 1095 个提交后需迁移定制功能。

**趋势判断：** 可恢复发布正在成为 Agent 平台的基本能力，而不是单纯发布工程附属品。

### 4.4 插件、MCP 与生态扩展

涉及项目：**OpenClaw、QwenPaw、LobsterAI、NanoBot、Hermes Agent**

共同诉求：

- 插件 API 稳定、版本化；
- 插件具备明确身份、权限和生命周期；
- MCP 安装、连接、工具注册必须状态一致；
- 防止工具注册未完成时提前分发任务；
- 支持 OAuth/DCR 等企业级授权；
- 插件卸载时彻底清理进程、文件与状态。

典型方向：

- QwenPaw 插件 SDK 1.2；
- NanoBot 统一 Apps、CLI Apps、Agent Plugins 与 MCP；
- LobsterAI 百度爱企查 MCP/OAuth 合作；
- OpenClaw 插件 Doctor 与渠道初始化；
- Hermes Agent Profile 命名空间插件隔离。

**趋势判断：** MCP 已从“连接一个工具服务器”演进为插件、身份、授权、审计和资源治理平台。

### 4.5 沙箱、最小权限与租户隔离

涉及项目：**QwenPaw、OpenHuman、LobsterAI、Hermes Agent、OpenClaw**

共同诉求：

- 技能扫描对高危发现不能默认放行；
- `max_processes`、`max_memory_mb` 等限制必须真正执行；
- 编码模式默认拒绝敏感出站访问；
- 记忆检索强制租户隔离；
- 辅助 Agent 不应污染主 Agent 长期记忆；
- 子进程必须随任务取消或 Gateway 退出而回收。

QwenPaw 的安全问题和 OpenHuman 的 `omit_memory_log` 分别代表两条主线：**执行安全**与**数据安全**。

### 4.6 WebUI / Console 的长会话性能

涉及项目：**QwenPaw、NanoBot、Hermes Agent、LobsterAI、OpenClaw**

共同诉求：

- 窄屏不裁剪回复，宽表格和代码块可横向滚动；
- iOS/WebKit 长会话不冻结；
- 流式工具调用不割裂文本；
- 历史刷新不跳动；
- 输入框不因长会话而逐字卡顿；
- 错误、成功、空回复和模型切换必须采用一致的视觉语义。

这说明 UI 竞争已从“功能数量”转向**长会话、并发任务和状态反馈的可用性**。

### 4.7 可观测性与可操作性

涉及项目：全部活跃项目

共同诉求：

- 缓存命中率、读写 token、重写原因可观测；
- 委派任务记录模型、费用、父子关联与失败原因；
- Gateway 重启成功不能报告失败；
- 消息发送必须有明确 `send ok` 或不确定状态；
- Doctor 不得重复提供无法执行的建议；
- 日志、诊断和恢复入口需可操作，而不仅是输出错误字符串。

---

## 5. 差异化定位分析

| 项目 | 功能侧重 | 目标用户 | 架构与生态关键差异 |
|---|---|---|---|
| **OpenClaw** | 全渠道个人助手、插件/MCP、后台任务、多 Agent | 需要长期运行、跨渠道委派和高度可扩展的个人/团队用户 | 最完整的 Gateway 运行时与外部生态；规模最大，复杂度最高 |
| **Hermes Agent** | CLI、Desktop、TUI、渠道、Cron、Profile | 重视自动化、跨客户端连续会话和无人值守运行的开发者 | 强调统一 Agent Loop、Profile 隔离、主动 Cron 与审批卡 |
| **QwenPaw** | Creator、插件 SDK、上下文和长期记忆 | 插件开发者、内容创作者、多租户部署团队 | 插件一等公民、记忆与上下文治理深入；安全承诺与执行存在落差 |
| **LobsterAI** | 桌面端助手、国内 IM、专家目录、MCP/Skill | 中文办公与企业协作用户 | Electron + DSH 迁移，国内 IM 渠道覆盖突出 |
| **NanoBot** | 轻量聊天、Apps/MCP 目录、多会话控制台 | 偏好 WebUI、快速体验个人助手的用户 | 前端信息架构重构快，问题闭环效率高 |
| **OpenHuman** | 自主执行、长期记忆、隐私与安全 | 重视本地化、自主任务和最小权限的高级用户 | Rust Core + Landlock/bubblewrap；安全机制比多数项目更底层 |
| **PicoClaw** | 轻量 Channel 接入、上游同步、多 Agent 探索 | 开发者、fork 使用者和嵌入式场景 | 上游同步与定制迁移灵活；生态和社区验证较弱 |
| **IronClaw** | 暂无当日信号 | 暂无法判断 | 需要更多历史数据确认项目活跃度与方向 |

### 关键竞争维度

- **功能最全：** OpenClaw  
- **跨客户端会话连续性最强：** Hermes Agent  
- **插件生态潜力最大：** QwenPaw、OpenClaw  
- **国内办公渠道最适配：** LobsterAI  
- **WebUI 改造最快：** NanoBot  
- **安全与记忆隔离最底层：** OpenHuman  
- **工程同步与定制灵活：** PicoClaw  

---

## 6. 社区热度与成熟度

### 6.1 社区热度分层

**第一层：高热度核心生态**
- OpenClaw：单日 500 Issues、500 PR，热点集中于缓存、升级、委派和 Gateway；
- Hermes Agent：50 Issues、50 PR，输出完整性、Cron 审批、跨端会话热度高。

**第二层：活跃的架构与产品演进**
- QwenPaw：插件 SDK、安全沙箱、记忆治理和 Creator 提案密集；
- NanoBot：WebUI 会话控制台与交互语义重构集中；
- LobsterAI：DSH 迁移修复与外部 MCP 合作推动。

**第三层：低热度、工程驱动**
- PicoClaw：主要体现为代码治理和上游同步；
- OpenHuman：安全与记忆能力推进明确，但缺少社区互动；
- IronClaw：当日无数据。

### 6.2 项目成熟阶段

#### 快速迭代阶段

- **OpenClaw：** 生态规模成熟，但内部运行时仍处于快速补基础设施阶段；
- **QwenPaw：** 插件、记忆、安全和 Creator 同步演进，接口尚未完全稳定；
- **Hermes Agent：** 功能面快速扩张，正在从 CLI 工具转向多客户端控制台；
- **NanoBot：** WebUI 处于结构性重构期；
- **LobsterAI：** DSH 迁移后的产品整合期。

#### 质量巩固阶段

- **PicoClaw：** 上游同步、历史修复和兼容治理；
- **OpenHuman：** 沙箱策略、记忆隔离和发布闭环；
- **OpenClaw 的部分子系统：** 更新恢复、发布工具、CI 和缓存前缀已进入专项收敛阶段。

### 6.3 成熟度不能只看提交量

高吞吐并不等于高成熟度，关键判断应包括：

1. P0/P1 是否在发布前清零；
2. 是否有可复现的回归基准；
3. fix PR 是否明确关联 Issue；
4. 更新后是否可恢复、可回滚；
5. 状态显示是否与真实行为一致；
6. 沙箱、租户和插件权限是否真正执行。

按这些标准，**PicoClaw 和 OpenHuman 的项目形态更克制，OpenClaw、Hermes Agent 和 QwenPaw 则仍需加速从功能扩张转向一致性治理**。

---

## 7. 值得关注的趋势信号

### 7.1 “模型能力”正在让位于“运行时能力”

用户越来越不只关注回答质量，而是关注：

- 任务是否真正完成；
- 结果是否送达；
- 子进程是否回收；
- 升级是否可恢复；
- 失败后是否能自愈；
- 状态与日志是否可信。

这意味着个人 AI 助手的核心竞争力将逐步从模型封装，转向 **可靠的状态机、事件交付、持久化和运维能力**。

### 7.2 多智能体最先暴露的不是智能，而是事务一致性

多个项目同时出现父任务不恢复、结果丢失、会话串线、成本不可归因和重复执行风险。行业下一步不应只增加 Agent 数量，而应建设：

- 父子任务关联 ID；
- 可恢复完成事件；
- 幂等命令执行；
- 独立 transcript 与命名空间；
- 成本和资源统一账本；
- 明确的取消、终止和超时语义。

### 7.3 MCP 正进入“平台治理期”

未来 MCP 竞争点将从“能否接入”转向：

- OAuth/DCR 与用户身份委托；
- 工具注册与生命周期；
- 权限分级和用户确认；
- 工具供应链扫描；
- 多租户隔离；
- 调用审计、费用与数据合规。

LobsterAI 的企业 MCP 合作需求、QwenPaw 的插件 SDK 和 OpenClaw 的插件 Doctor，说明 MCP 正在形成类似“Agent 时代插件平台”的基础设施层。

### 7.4 Prompt Cache 将成为 Agent 成本治理核心指标

长会话中的前缀重写会同时放大：

- token 成本；
- 首 token 延迟；
- Provider 限流风险；
- 压缩逻辑复杂度；
- 多 Agent 委派成本。

因此，未来 Agent 框架应把 **前缀稳定性、缓存命中率、缓存读写 token** 设为一级指标，而不是 Provider 插件中的附属统计。

### 7.5 安全默认值必须与文档承诺一致

QwenPaw 暴露的技能扫描 fail-open、资源限制未执行、租户过滤可选，以及 OpenHuman 的内核沙箱推进，形成清晰对照。行业最低要求应是：

- 高危技能默认阻断；
- 资源限制由后端强制执行；
- 网络访问默认拒绝、按需放行；
- 记忆与插件按租户和 Agent 隔离；
- 配置成功意味着运行时已应用；
- 安全失败必须显式报告，不得静默降级。

### 7.6 WebUI 正成为 Agent 运行控制台，而非聊天窗口

Mission Control、Live Pulse、Active Drawer、Desktop Kanban、Cron 审批卡、运行态诊断等信号表明，前端正在承担：

- 并发 Agent 监控；
- 后台任务操作；
- 委派与恢复；
- 成本和资源展示；
- 审批与人工接管；
- Profile 和渠道状态管理。

个人 AI 助手的下一阶段竞争，很可能发生在 **“能否看清并控制长期运行中的 Agent”**，而不仅是聊天界面设计。

### 7.7 跨平台统一会话是重要产品方向

Hermes Agent 的 canonical session 诉求，以及 OpenClaw、Hermes Agent、LobsterAI 中暴露的会话重复、路由串线和 Profile 命名空间问题，共同说明：

> 用户期待的是同一个 Agent、同一段上下文、同一套任务状态，而不是多个客户端分别保存的聊天副本。

统一会话身份将成为个人 AI 助手的重要竞争壁垒。

---

## 结论

生态已经形成清晰分层：

- **OpenClaw** 是当前规模最大、功能覆盖最广、复杂度也最高的全渠道 Agent 平台；
- **Hermes Agent** 在跨客户端会话、主动 Cron 和 Profile 隔离上形成差异化；
- **QwenPaw** 是插件 SDK、Creator 与记忆治理的重要创新者，但安全治理需补课；
- **LobsterAI** 聚焦桌面办公和国内 IM，正在消化 DSH 迁移成本；
- **NanoBot** 以较快的 WebUI 迭代和较高效的问题闭环建立轻量体验；
- **OpenHuman** 在内核沙箱和记忆隔离上具备鲜明技术立场；
- **PicoClaw** 偏向稳定同步与工程治理；
- **IronClaw** 尚缺乏当日活动信号。

对开发者和决策者而言，当前最值得投入的并不是继续堆叠入口，而是建设五项基础能力：**统一会话模型、可恢复任务事件、可靠升级、真实可观测性，以及默认安全的执行与插件治理**。这些能力将决定个人 AI 助手能否从高热度项目真正成长为可长期托管、可信运行的生产级系统。

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目动态日报

**日期：2026-11-24**  
**项目：** [HKUDS/nanobot](https://github.com/HKUDS/nanobot)

---

## 1. 今日速览

- 过去 24 小时共更新 **6 条 Issues** 和 **53 条 PR**，其中 **1 条 Issue 仍开放、9 条 PR 待合并**，整体开发吞吐较高。
- 今日变更主要集中在 **WebUI 会话管理、错误反馈、消息渲染、历史记录稳定性与 MCP 集成体验**，另有上下文用量统计和执行命令安全策略等底层修复。
- Issues 关闭率为 **83.3%**，PR 关闭或合并率为 **83.0%**，大量问题已进入“报告后快速修复”的闭环，但仍有 **1 条 P2 Issue 和 9 条 PR** 等待处理。
- 今日没有新版本发布，因此相关功能与修复尚不能确认已进入可安装版本。
- 项目健康度评估：**良好且高度活跃**。主要风险集中在 WebUI 大规模重构后的回归测试、交互一致性和发布验证。

---

## 2. 版本发布

今日**无新版本发布**，因此暂无新增版本说明、破坏性变更或迁移事项。

---

## 3. 项目进展

### 3.1 WebUI 会话管理进入结构性重构

[#6761](https://github.com/HKUDS/nanobot/pull/6761) 提议以 **Mission Control、Live Pulse 栏和 Active Drawer** 重构会话管理界面，目标是适配多项目、并发智能体运行环境。该方案属于纯前端改造，目前仍待合并，若合入将显著改变 WebUI 的会话浏览和导航体验。

同时，样式维护方式也进行了模块化整理：

- [#6778](https://github.com/HKUDS/nanobot/pull/6778)：将全局样式拆分为各功能模块自持样式，减少修改单一功能时跨文件查找规则的成本。
- [#6700](https://github.com/HKUDS/nanobot/pull/6700)：统一 Apps 目录，将原本分散的 Tools、Skills、Chat Platforms 等入口整合。
- [#6687](https://github.com/HKUDS/nanobot/pull/6687)：进一步区分 Agent Plugins、CLI Apps 与 MCP，改善插件管理语义和搜索体验。

这表明 WebUI 正从“功能持续堆叠”转向“统一信息架构与模块化维护”。

### 3.2 错误反馈与空回复处理得到加强

- [#6781](https://github.com/HKUDS/nanobot/pull/6781)：将 Composer 错误改为 Toast 展示，并明确模型切换成功反馈；待合并。
- [#6773](https://github.com/HKUDS/nanobot/pull/6773)：模型未生成最终答案时，不再把英文兜底文本误记为成功回复，而是记录结构化的 turn failure；待合并。
- [#6770](https://github.com/HKUDS/nanobot/pull/6770)：修正损坏 Cron 存储恢复时可能出现的错误诊断描述，确保日志准确反映备份路径或重命名失败信息；已关闭。

这些改动提升了失败状态的可观测性，也减少“实际失败但界面显示成功”的误导。

### 3.3 消息、会话与历史显示稳定性提升

今日多项已关闭 PR 集中修复了 WebUI 交互和历史记录问题：

- [#6775](https://github.com/HKUDS/nanobot/pull/6775)：避免预设切换草稿进入历史记录，并确认命令是否成功投递。
- [#6776](https://github.com/HKUDS/nanobot/pull/6776) 与 [#6777](https://github.com/HKUDS/nanobot/pull/6777)：统一触发器回复与普通回复的布局，保持桌面端操作按钮单行显示及顺序稳定。
- [#6772](https://github.com/HKUDS/nanobot/pull/6772)：历史刷新时避免子智能体消息跳动。
- [#6771](https://github.com/HKUDS/nanobot/pull/6771)：让 Fork 边界与上下文压缩提示采用一致的视觉样式。
- [#6780](https://github.com/HKUDS/nanobot/pull/6780)：为新输入保留时区偏移，避免历史回填后活动计时出现数小时偏差。

这批修复覆盖消息操作栏、后台刷新、预设命令和活动时间线，属于典型的稳定性收口工作。

### 3.4 上下文用量统计已修复

[#6779](https://github.com/HKUDS/nanobot/pull/6779) 修复了 `/status` 上下文面板百分比与实际请求记录不一致的问题，对应关闭 [#6774](https://github.com/HKUDS/nanobot/issues/6774)。修复改为复用会话展示历史中的逐请求用量和窗口数据，避免将同一轮多次模型请求的输入 token 累计值误当作当前上下文。

### 3.5 MCP 集成与追踪能力继续完善

- [#6769](https://github.com/HKUDS/nanobot/pull/6769)：聊天活动区域可直接显示标准 MCP Server 图标，不再统一显示通用紫色插头图标。
- [#6517](https://github.com/HKUDS/nanobot/pull/6517)：在 WebUI 设置中加入基于环境变量的 Langfuse 追踪开关，可在保留服务端凭证的同时暂停追踪；需保存设置并重启 Gateway 后生效。
- [#6705](https://github.com/HKUDS/nanobot/issues/6705)：AI/ML API 官方托管 MCP Server 预设请求已关闭。
- [#6765](https://github.com/HKUDS/nanobot/issues/6765)：bf16.ai 内置 LLM Gateway Provider 提议已关闭。

### 3.6 执行安全策略得到精细化

[#5005](https://github.com/HKUDS/nanobot/pull/5005) 已关闭，尝试将宽泛的递归 `rm` 字符串拒绝规则替换为面向目标的命令检查：允许明确指定的 `/tmp/<name>` 测试或构建清理目标，同时继续拦截动态路径、目录穿越、嵌套目标及危险重定向等高风险操作。该 PR 标记为 **P1 且存在冲突**，尽管状态已关闭，仍建议维护者确认最终合入版本中采用了何种安全边界。

### 3.7 CI 与 WebUI 工程效率改进

[#6684](https://github.com/HKUDS/nanobot/pull/6684) 优化完整 WebUI 回归门禁，针对浏览器测试约 14 分钟、p95 超过 17 分钟的耗时问题调整并行与关键路径。该 PR 已关闭，对频繁发布 WebUI 变更的项目具有直接工程价值。

---

## 4. 社区热点

> 今日展示数据中 Issues/PR 的评论数和点赞数普遍为 0 或未定义，因此“热点”主要依据当日更新、优先级和主题集中度判断，而非传统社区点赞排序。

### 4.1 WebUI 会话管理重构

- PR：[#6761](https://github.com/HKUDS/nanobot/pull/6761)
- 状态：**开放，待合并**
- 热点原因：这是今日最大幅度的 WebUI 架构改造，涉及 Mission Control、跨项目 Live Pulse 和 Active Drawer，直接影响日常使用方式。

**背后诉求：** 当前固定侧栏难以承载多项目、并发智能体及较多会话，用户需要更强的运行态可见性和更顺畅的会话切换。

### 4.2 空回复被错误标记为成功

- PR：[#6773](https://github.com/HKUDS/nanobot/pull/6773)
- Issue：[#6764](https://github.com/HKUDS/nanobot/issues/6764)
- 状态：PR 待合并，Issue 已关闭

**背后诉求：** 用户需要 WebUI、消息工具和历史记录对“本轮是否真正完成”保持一致。附件后丢失后续流式答案、模型没有最终回答却被记为成功，本质上都属于交付状态不可信。

### 4.3 Composer 错误与模型切换反馈

- PR：[#6781](https://github.com/HKUDS/nanobot/pull/6781)
- 状态：**开放，待合并**

**背后诉求：** 当前成功回执可能进入红色错误框，普通文本型错误与结构化错误体验割裂；用户希望错误、成功和模型切换状态各自清晰呈现。

### 4.4 Langfuse 追踪开关

- PR：[#6517](https://github.com/HKUDS/nanobot/pull/6517)
- 状态：已关闭
- 热点原因：属于长期运行、功能型改进，从 10 月 24 日创建并持续更新至今日。

**背后诉求：** 已配置 Langfuse 的用户希望在不删除环境凭证、不修改全局服务配置的情况下，临时暂停追踪，以控制数据上传和运行开销。

---

## 5. Bug 与稳定性

### P1：高优先级

| 问题 | 影响 | 修复状态 |
|---|---|---|
| [#5005](https://github.com/HKUDS/nanobot/pull/5005) 宽泛禁止 `rm` 导致合法临时目录清理受阻 | 影响测试、构建脚本及受限自动化命令；原规则也可能带来安全边界不精确问题 | PR 已关闭，但标记 **conflict**，需确认最终安全策略是否落地 |

### P2：仍开放且尚无明确 fix PR

| 问题 | 影响 | 修复状态 |
|---|---|---|
| [#6673](https://github.com/HKUDS/nanobot/issues/6673) Live Buffer 中输出文本被工具调用分隔 | 工具调用密集场景下，实时输出阅读顺序和连续性受损 | **未发现直接 fix PR，仍开放** |
| [#6781](https://github.com/HKUDS/nanobot/pull/6781) Composer 错误与模型切换反馈 | 成功回执可能显示为错误，影响状态可信度 | **已有修复 PR，待合并** |
| [#6773](https://github.com/HKUDS/nanobot/pull/6773) 空最终回复被记为成功 | 自动化可能误判任务完成，并污染助手历史 | **已有修复 PR，待合并** |
| [#6761](https://github.com/HKUDS/nanobot/pull/6761) 会话管理大改 | 新功能价值高，但回归面较大 | **待合并** |

### 已关闭且已有对应修复

- [#6774](https://github.com/HKUDS/nanobot/issues/6774)：上下文统计将多请求累计输入 token 误作当前上下文  
  修复：[#6779](https://github.com/HKUDS/nanobot/pull/6779)，已关闭。
- [#6764](https://github.com/HKUDS/nanobot/issues/6764)：附件及说明发送后，同一轮后续流式答案在 WebUI 中丢失  
  已关闭；现有数据未明确给出独立 fix PR 链接。
- 桌面回复操作栏换行或顺序错乱：[#6776](https://github.com/HKUDS/nanobot/pull/6776)、[#6777](https://github.com/HKUDS/nanobot/pull/6777)，均已关闭。
- 子智能体消息在刷新期间跳动：[#6772](https://github.com/HKUDS/nanobot/pull/6772)，已关闭。
- 预设草稿污染历史及命令确认丢失：[#6775](https://github.com/HKUDS/nanobot/pull/6775)，已关闭。
- 时区偏移丢失导致活动计时异常：[#6780](https://github.com/HKUDS/nanobot/pull/6780)，已关闭。

---

## 6. 功能请求与路线图信号

### 6.1 WebUI 会话管理与运行态控制

[#6761](https://github.com/HKUDS/nanobot/pull/6761) 是最明确的中短期路线图信号。Mission Control、Live Pulse 和 Active Drawer 表明项目希望将 WebUI 从传统聊天界面升级为面向并发智能体的运行控制台。

**下一版本可能性：较高。** 功能边界清晰，已有完整纯前端实现，但仍需关注合并前后的回归与发布范围。

### 6.2 Apps、MCP 与插件统一目录

[#6700](https://github.com/HKUDS/nanobot/pull/6700)、[#6687](https://github.com/HKUDS/nanobot/pull/6687) 和 [#6769](https://github.com/HKUDS/nanobot/pull/6769) 共同显示，WebUI 正统一工具、技能、聊天平台、CLI Apps、Agent Plugins 与 MCP 的产品模型。

**下一版本可能性：较高。** 多个相关 PR 已关闭，具备形成完整“应用生态管理”体验的基础。

### 6.3 会话级推理强度

[#6441](https://github.com/HKUDS/nanobot/pull/6441) 提议允许用户在单次会话中为下一条消息选择推理强度，无需修改共享预设或干扰运行中的任务。

**下一版本可能性：中等。** 功能方向明确，但 PR 自 10 月 24 日起持续较久，需确认合并阻塞点和兼容要求。

### 6.4 新 Provider 与托管 MCP 预设

- [#6765](https://github.com/HKUDS/nanobot/issues/6765)：bf16.ai 内置 Provider。
- [#6705](https://github.com/HKUDS/nanobot/issues/6705)：AI/ML API 托管 MCP Server 预设。

**下一版本可能性：中等。** 两项需求均已关闭，但关闭不一定代表已实现，可能涉及维护策略、供应商准入或重复建议。需在发布说明中确认是否进入代码。

---

## 7. 用户反馈摘要

### 核心痛点

1. **流式输出在工具调用附近不连贯**  
   [#6673](https://github.com/HKUDS/nanobot/issues/6673) 显示，工具调用会将 Live Buffer 中的输出文本分隔。工具密集型工作流虽然功能正常，但阅读体验割裂，且该问题仍开放。

2. **消息交付完整性不足**  
   [#6764](https://github.com/HKUDS/nanobot/issues/6764) 中，附件和说明可以显示，但同一轮后续答案完全缺失，且历史回放同样丢消息。这表明问题不只是渲染瞬时故障，也影响历史一致性。

3. **状态反馈容易误导**  
   [#6781](https://github.com/HKUDS/nanobot/pull/6781) 指出，模型切换成功回执可能落入红色错误框；[#6773](https://github.com/HKUDS/nanobot/pull/6773) 则显示空最终回答会被当成成功。前者是文案与视觉语义混乱，后者是状态机语义错误。

4. **上下文统计不准确**  
   [#6774](https://github.com/HKUDS/nanobot/issues/6774) 表明，工具调用较多的轮次可能显示超过模型实际输入预算的上下文用量。修复 PR [#6779](https://github.com/HKUDS/nanobot/pull/6779) 已关闭，说明该问题得到较快响应。

### 积极信号

- 大量问题在提出当天获得修复并关闭，问题闭环速度较快。
- WebUI 正在系统改善，包括应用目录统一、样式模块化、追踪控制、图标呈现和并发会话可见性。
- CI 优化 [#6684](https://github.com/HKUDS/nanobot/pull/6684) 有助于后续频繁迭代。

---

## 8. 待处理积压

### 需优先跟进

1. **[#6673](https://github.com/HKUDS/nanobot/issues/6673)：Live Buffer 工具调用分隔输出**  
   创建于 2026-11-15，至今仍开放，未见直接修复 PR。该问题直接影响高频工具调用场景，建议补充复现样例、明确文本块合并规则并安排修复。

2. **[#6761](https://github.com/HKUDS/nanobot/pull/6761)：会话管理大型重构**  
   变更范围大且仍待合并，建议以独立版本或功能开关推进，并重点回归多项目切换、并发会话、Live Pulse 状态和移动端布局。

3. **[#6773](https://github.com/HKUDS/nanobot/pull/6773)：结构化空回复失败**  
   涉及助手历史、消息工具投递和 WebUI 状态显示，需确保“由消息工具已投递的回复”不会被重复计为失败。

4. **[#6781](https://github.com/HKUDS/nanobot/pull/6781)：Composer Toast 与模型切换反馈**  
   建议在合并前覆盖纯文本错误、结构化错误、切换成功、切换失败及重复点击等状态。

5. **[#5005](https://github.com/HKUDS/nanobot/pull/5005)：执行命令安全边界**  
   PR 已关闭但带有冲突标记，需要确认最终方案是否同时满足“可清理明确 `/tmp` 目标”和“阻止路径穿越及动态递归删除”。

6. **[#6441](https://github.com/HKUDS/nanobot/pull/6441)：会话级推理强度**  
   自 2026-10-24 起持续时间较长，涉及会话状态同步和运行中任务隔离，建议明确其下一版本归属。

### 积压规模提示

当前开放项数量本身不大，但 **9 条待合并 PR** 构成了主要交付积压。维护重点应从继续扩大功能面转向：

- 合并关键稳定性修复；
- 验证 WebUI 大改的端到端回归；
- 明确功能发布批次；
- 发布新版本并提供迁移说明。

---

## 总体结论

NanoBot 今日呈现**高开发吞吐、高关闭率、WebUI 集中重构**的态势。核心进展是将会话、插件、MCP、追踪、消息反馈和上下文统计向更统一、更可观测的方向推进。短期内最值得关注的是 **9 条待合并 PR 的收敛、WebUI 会话管理重构的回归风险，以及仍开放的 Live Buffer 输出分隔问题**。在没有新版本发布的情况下，项目虽活跃，但用户尚不能立即从正式发行版获得今日这些改进。

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目动态日报

**日期：2026-11-24**  
**数据范围：过去 24 小时 GitHub 更新**

## 1. 今日速览

过去 24 小时内，PicoClaw **无新增 Issue 更新、无待合并 PR、无新版本发布**。共有 **5 个 PR 被关闭或合并**，其中包含 WebSocket 认证修复、上游同步与定制代码迁移、多个历史修复汇总，以及多智能体协作框架的探索性工作。整体活动以**代码治理、历史问题收敛和架构同步**为主，未见新的公开需求反馈，因此项目健康度可评估为**稳定推进、用户讨论热度偏低**。

---

## 3. 项目进展

### 3.1 WebSocket 认证与请求头规范修复

- **PR：** [#2363 Fix WebSocket authentication and standardize header casing](https://github.com/sipeed/picoclaw/pull/2363)
- **状态：** CLOSED
- **作者：** @nglmercer
- **类型：** Bug 修复 / Channel
- **主要内容：**
  - 修复 WebSocket 认证流程；
  - 统一 HTTP/WebSocket 请求头大小写处理；
  - 关联 Issue：[#2354](https://github.com/sipeed/picoclaw/issues/2354)。

**影响评估：**  
该 PR 直接处理 Channel 连接层的认证问题，有助于减少因 Header 解析差异导致的连接失败或鉴权异常。由于没有公开评论、点赞或回归测试信息，暂无法判断修复覆盖面和用户验证结果。

---

### 3.2 同步上游约 1,095 次提交并迁移定制功能

- **PR：** [#2810 Sync with upstream/main (1095 commits) + forward-port magicform customizations](https://github.com/sipeed/picoclaw/pull/2810)
- **状态：** CLOSED
- **作者：** @nuestraai
- **主要内容：**
  - 将 `sipeed/picoclaw` 上游 `main` 的约 **1,095 个提交**同步至分支；
  - 上游代码结构调整后，重新迁移 **6 个定制提交**；
  - Agent Loop 被拆分至 `agent_*.go`；
  - Tools 被重组至 `pkg/tools/{fs,integration}/`；
  - Channel 配置目录同步调整。

**影响评估：**  
这是今日影响范围最大的工程动作，表明项目正在通过大规模上游同步保持代码基线一致。对维护者而言，重点风险在于定制功能 forward-port 后的兼容性和回归验证；该 PR 当前无公开测试说明或评论数据。

---

### 3.3 汇总合并多项历史修复

- **PR：** [#1546 fix: merge PR #1480 #1479 #1478 #1473 #1467](https://github.com/sipeed/picoclaw/pull/1546)
- **状态：** CLOSED
- **作者：** @xuwei-xy
- **主要内容：**
  - 汇总合并以下 5 个历史 PR：
    - [#1480](https://github.com/sipeed/picoclaw/pull/1480)
    - [#1479](https://github.com/sipeed/picoclaw/pull/1479)
    - [#1478](https://github.com/sipeed/picoclaw/pull/1478)
    - [#1473](https://github.com/sipeed/picoclaw/pull/1473)
    - [#1467](https://github.com/sipeed/picoclaw/pull/1467)

**影响评估：**  
该 PR 体现了对分散修复的集中收敛，可降低历史分支长期滞留造成的维护成本。不过，摘要未列出各修复的测试结果和具体变更范围，无法进一步量化稳定性收益。

---

### 3.4 多智能体协作框架进入阶段性收尾或关闭

- **PR：** [#423 WIP: base multi-agent collaboration framework & shared context](https://github.com/sipeed/picoclaw/pull/423)
- **状态：** CLOSED
- **作者：** @Leeaandrob
- **主要内容：**
  - 提供多智能体协作的基础框架；
  - 引入线程安全的共享上下文池（Blackboard）；
  - 支持 Agent handoff；
  - 增加发现类工具；
  - 基于 Provider 协议重构、模型 fallback 链和多 Agent 路由等已有工作。

**影响评估：**  
该方向与个人 AI 助手向多 Agent 协作演进的路线一致。不过 PR 明确标记为 **WIP**，且当前没有待合并 PR，因此尚不能将其视为已进入近期正式发布计划。

---

### 3.5 停用定时同步变基任务

- **PR：** [#2516 chore(ci): disable scheduled sync-rebase trigger](https://github.com/sipeed/picoclaw/pull/2516)
- **状态：** CLOSED
- **作者：** @sushi30
- **主要内容：**
  - 从 `sync-rebase` 工作流中移除每日 `0 0 * * *` 定时任务；
  - 保留 `workflow_dispatch`，仍可手动触发；
  - 不涉及业务代码变更。

**影响评估：**  
这降低了自动变基对 CI 和分支状态的干扰，属于维护流程简化。结合[#2810](https://github.com/sipeed/picoclaw/pull/2810)的大规模上游同步来看，项目可能正调整自动化同步策略，以减少高频自动操作带来的冲突与噪声。

---

## 4. 社区热点

过去 24 小时没有新增 Issue，且列出的 PR 均显示：

- 评论数为未提供/不可见；
- 点赞数为 0；
- 没有明显的高热度讨论项。

因此，今日社区热点主要由**工程影响范围**而非互动热度决定：

1. **[#2810](https://github.com/sipeed/picoclaw/pull/2810)**  
   同步约 1,095 个上游提交并迁移定制功能，是今日变更规模最大的 PR。

2. **[#2363](https://github.com/sipeed/picoclaw/pull/2363)**  
   修复 WebSocket 认证及 Header 大小写问题，直接关系 Channel 连接的可用性和安全性。

3. **[#423](https://github.com/sipeed/picoclaw/pull/423)**  
   聚焦多智能体协作、共享上下文和 Agent handoff，代表项目的探索性架构方向。

这些 PR 均缺少公开互动数据，无法从评论或 reaction 判断社区共识强度。

---

## 5. Bug 与稳定性

### 高优先级：WebSocket 认证异常

- **问题：** WebSocket 认证可能因请求头大小写处理不一致而失败。
- **相关记录：**
  - Issue：[#2354](https://github.com/sipeed/picoclaw/issues/2354)
  - Fix PR：[#2363](https://github.com/sipeed/picoclaw/pull/2363)
- **状态：** 已有对应修复 PR，PR 当前已关闭。
- **建议关注：** 后续应确认是否存在针对不同 HTTP 客户端、代理网关或反向代理环境的回归测试。

### 中优先级：历史修复集中合并后的回归风险

- **相关 PR：**
  - [#1546](https://github.com/sipeed/picoclaw/pull/1546)
  - [#1480](https://github.com/sipeed/picoclaw/pull/1480)
  - [#1479](https://github.com/sipeed/picoclaw/pull/1479)
  - [#1478](https://github.com/sipeed/picoclaw/pull/1478)
  - [#1473](https://github.com/sipeed/picoclaw/pull/1473)
  - [#1467](https://github.com/sipeed/picoclaw/pull/1467)
- **状态：** 已有汇总 PR，并已关闭。
- **风险点：** 多个修复集中进入同一分支时，需要重点排查功能交叉、冲突解决和测试遗漏。

### 中优先级：大规模上游同步后的兼容性风险

- **相关 PR：** [#2810](https://github.com/sipeed/picoclaw/pull/2810)
- **状态：** 上游同步及定制功能迁移工作已完成并关闭。
- **风险点：**
  - Agent Loop 文件拆分；
  - Tools 目录重组；
  - Channel 配置路径变化；
  - 定制功能 forward-port 后行为偏差。

**稳定性判断：**  
今日没有新 Bug Issue，也没有明确的崩溃或回归报告。已有问题主要通过历史修复汇总和专项认证修复处理，整体稳定信号偏正面，但缺少公开测试结果，结论仍应保持谨慎。

---

## 6. 功能请求与路线图信号

### 6.1 多智能体协作与共享上下文

- **来源：** [#423](https://github.com/sipeed/picoclaw/pull/423)
- **能力方向：**
  - 共享上下文池；
  - Agent 间 handoff；
  - Agent 发现；
  - 多 Agent 路由与模型 fallback 协同。

**路线图判断：**  
该方向具有明确的产品价值，但当前 PR 仍属于 WIP 且已经关闭，无法确认进入下一版本。更合理的判断是：项目已经完成基础架构探索，未来是否产品化将取决于稳定性、配置复杂度、上下文隔离机制及文档完善度。

### 6.2 Channel 连接能力与规范化

- **来源：** [#2363](https://github.com/sipeed/picoclaw/pull/2363)
- **能力方向：**
  - 提升 WebSocket 接入稳定性；
  - 规范 Header 处理；
  - 降低不同客户端实现差异带来的兼容问题。

**路线图判断：**  
属于现有 Channel 能力的可靠性增强，优先级高于新增大型功能。大规模上游同步完成后，Channel 兼容性预计会成为近期重点验证方向。

### 6.3 上游同步与定制能力维护

- **来源：**
  - [#2810](https://github.com/sipeed/picoclaw/pull/2810)
  - [#2516](https://github.com/sipeed/picoclaw/pull/2516)
- **能力方向：**
  - 保持与上游主线同步；
  - 支持下游定制代码迁移；
  - 降低自动同步带来的 CI 噪声。

**路线图判断：**  
这些工作不直接形成用户可见功能，但会提升后续版本交付速度。当前项目正在从“频繁自动同步”向“更可控的上游同步与定制迁移”调整，下一阶段可能重点关注同步流程自动化、冲突检测和回归测试。

---

## 7. 用户反馈摘要

过去 24 小时没有新增 Issue，也没有可用的公开评论内容，因此无法提炼真实用户评论、满意度或具体使用场景。

可从已关闭 PR 间接观察到的需求包括：

- WebSocket Channel 用户需要更可靠的认证和一致的 Header 解析；
- 下游 fork 用户需要稳定跟随上游，并保留本地定制功能；
- 多 Agent 用户对共享上下文、任务交接和 Agent 路由存在明确架构需求。

以上属于维护和贡献者侧信号，**不等同于已验证的终端用户反馈**。

---

## 8. 待处理积压

今日没有仍处于待合并状态的 PR，也没有新增或长期未响应的公开 Issue，因此无法确认当前公开积压规模。

仍建议维护者关注以下已关闭工作的后续闭环：

1. **[#2354](https://github.com/sipeed/picoclaw/issues/2354) / [#2363](https://github.com/sipeed/picoclaw/pull/2363)**  
   确认 WebSocket 认证修复是否已覆盖不同客户端和代理环境，并补充回归测试。

2. **[#2810](https://github.com/sipeed/picoclaw/pull/2810)**  
   对上游约 1,095 个提交同步后的 Agent、Tools 与 Channel 定制功能执行完整回归验证。

3. **[#423](https://github.com/sipeed/picoclaw/pull/423)**  
   明确多智能体协作框架是继续孵化、拆分重构，还是暂缓，避免相关能力长期处于“已关闭但方向未决”的状态。

4. **[#1546](https://github.com/sipeed/picoclaw/pull/1546)**  
   为集中合并的历史修复补齐逐项变更说明和测试覆盖，以降低后续维护与回溯成本。

---

## 今日健康度结论

**综合健康度：稳定偏正面。**

- **维护活跃度：中等**——24 小时内关闭 5 个 PR，但没有新 Issue 和待合并 PR。
- **交付活跃度：一般**——今日无 Release，用户可见版本更新信号较弱。
- **稳定性：偏正面**——WebSocket 认证问题已有专项修复，历史修复得到集中收敛。
- **工程治理：改善中**——上游同步、定制迁移和 CI 自动化均在进行调整。
- **社区热度：偏低**——缺少新增 Issue、评论与 reaction 数据。
- **主要风险：** 大规模同步后的回归覆盖不足，以及多智能体方向尚未形成明确发布节奏。

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI 项目动态日报

**日期：2026-11-24**  
**项目：** [netease-youdao/LobsterAI](https://github.com/netease-youdao/LobsterAI)  
**统计口径：** 过去 24 小时 GitHub 数据

## 1. 今日速览

过去 24 小时项目共更新 **1 条 Issue** 和 **16 条 PR**，其中 **12 条 PR 已合并或关闭、4 条仍待合并**，整体开发吞吐较高。  
今日工作的核心是围绕 **OpenClaw 向 DeepSeek Harness（DSH）迁移**展开，集中修复启动卡死、IM 会话重复、WeCom 连接、模型预设保留及 MCP 注册时序等回归问题。  
同时，项目继续推进 **专家目录、侧边栏与首页输入区 UI 优化、DSH 原生 IM 渠道扩展**等能力建设。  
目前有 **1 条外部 MCP 集成合作需求**处于活跃状态，另有 **4 条 PR 待处理**，包括 2 条 Dependabot CI 升级和 2 条功能/资源贡献提案。  
项目健康度评估：**活跃度较高、稳定性修复投入明显，但 DSH 迁移相关变更集中，发布前仍需关注回归验证与积压 PR 的收敛。**

---

## 2. 版本发布

过去 24 小时**无新版本发布**，暂无 Latest Release。

因此本期没有可报告的正式版本更新、破坏性变更或升级说明。考虑到今日大量变更涉及 DSH 迁移，建议维护者在下一版本发布前重点执行：

- 全新安装与冷启动测试；
- OpenClaw → DSH 升级测试；
- 钉钉、飞书、企业微信、微信、QQ 等 IM 渠道回归测试；
- MCP 工具注册与任务分发时序测试；
- 日志导出、历史会话恢复和模型预设兼容性测试。

---

## 3. 项目进展

### 3.1 DSH 迁移稳定性修复成为主线

今日已关闭的多个 PR 集中解决 DSH 迁移带来的启动、会话、IM、模型与 MCP 兼容性问题，表明项目正在快速收敛迁移后的稳定性问题。

- **修复 DSH 迁移启动卡死和冷启动超时**  
  修复升级后最长约 38 分钟的首次启动卡死，以及间歇性约 35 秒的 DSH 冷启动超时。PR 定位并处理了旧数据同步归档等根因，属于本日报中影响范围最大的稳定性修复。  
  [PR #3168](https://github.com/netease-youdao/LobsterAI/pull/3168)

- **恢复企业微信连接能力**  
  修复 DSH 迁移后的企业微信私信连接，并完善 IM 设置中的机器人实时连接状态展示，包括订阅状态和错误信息。  
  [PR #3169](https://github.com/netease-youdao/LobsterAI/pull/3169)

- **保留 IM 私信会话连续性**  
  避免升级后同一机器人和联系人产生重复桌面会话，覆盖钉钉、飞书、企业微信、微信和 QQ；对于历史版本已生成的重复会话，修复逻辑也会合并历史。  
  [PR #3170](https://github.com/netease-youdao/LobsterAI/pull/3170)

- **保留 DSH 回复后的上下文控制能力**  
  修复首次回复后快捷模式上下文长度选择器不可用的问题，使渲染层与 IPC 上下文窗口处理逻辑统一识别 DSH 管理的会话及其模型预设。  
  [PR #3171](https://github.com/netease-youdao/LobsterAI/pull/3171)

- **修复日志导出警告并保留 DSH 会话预设**  
  调整日志导出逻辑，避免 `dsh.log` 等可选日志缺失时产生错误提示，同时修复 DSH 会话中的模型预设保留问题。  
  [PR #3172](https://github.com/netease-youdao/LobsterAI/pull/3172)

- **恢复关联文件并等待 MCP 工具注册完成**  
  改进关联文件索引和历史文件重扫，使已有文件能够重新出现在资料库；区分“已安装 MCP 包”和“已连接服务器”，并在任务与 MCP 工具重叠时等待工具注册完成后再分发。  
  [PR #3173](https://github.com/netease-youdao/LobsterAI/pull/3173)

### 3.2 可观测性建设

- **将 DSH 主机诊断信息转发至主日志**  
  将 Cordis 的 info、warn、error 记录转发至 Electron 现有按日主日志。日志会进行凭据过滤、无颜色处理，单条限制为 2 KiB UTF-8，并在插件卸载时移除 exporter，便于定位 DSH 运行问题。  
  [PR #3174](https://github.com/netease-youdao/LobsterAI/pull/3174)

### 3.3 IM 渠道扩展

- **为 DSH 增加 POPO 原生渠道支持**  
  引入 POPO 驱动及 Mercury STOMP，支持签名 Webhook 回调、文本消息发送、按机器人访问策略和配对机制；同时在 Electron IM 设置中启用 POPO，并展示机器人实时连接状态。该 PR 已关闭，是否进入正式发布分支仍需以仓库合并记录为准。  
  [PR #3160](https://github.com/netease-youdao/LobsterAI/pull/3160)

### 3.4 专家目录与界面体验

- **专家广场新增 NEW 标识**  
  专家目录条目支持可选 `isNew` 字段，在精选场景中展示本地化 NEW 徽标，并补充字段解析测试。  
  [PR #3167](https://github.com/netease-youdao/LobsterAI/pull/3167)

- **优化侧边栏排版与视觉对比度**  
  统一任务标题字号，引入侧边栏元信息字号变量，降低 Windows 半像素模糊风险，并增强浅色/深色主题下的背景、分隔线和边框对比度。  
  [PR #3166](https://github.com/netease-youdao/LobsterAI/pull/3166)

- **侧边栏视觉与交互优化**  
  新增侧边栏背景、悬停、选中态、边框和阴影 CSS 变量，适配亮暗主题及启动页外壳；同时增加全访问权限确认对话框。  
  [PR #3165](https://github.com/netease-youdao/LobsterAI/pull/3165)

- **重构首页输入区并调整默认权限设置**  
  将文件夹与智能体选择器整合到顶部容器，抽离智能体选择弹层；权限模式选择器移入提示词卡片，并增加默认权限模式设置入口。  
  [PR #3164](https://github.com/netease-youdao/LobsterAI/pull/3164)

### 3.5 Provider 与生态贡献

- **Atlas Cloud Provider 提案已关闭**  
  尝试在 Global Provider 列表中增加 Atlas Cloud，包括官网、API Key 获取地址及 Provider 映射。该 PR 已关闭，需后续确认是否以其他方式重新提交。  
  [PR #2818](https://github.com/netease-youdao/LobsterAI/pull/2818)

- **Lynxce 桌面端与 WorkBuddy 专家资源贡献仍在评审**  
  提议贡献 43 个桌面端预设、53 个专家团队、328 个成员/负责人角色，以及 783 个 WorkBuddy 专家，合计 879 个目录条目。PR 标记为 `stale`，仍待维护者审核。  
  [PR #2938](https://github.com/netease-youdao/LobsterAI/pull/2938)

---

## 4. 社区热点

### 4.1 百度爱企查希望接入 LobsterAI MCP

- **条目：** [Issue #3163](https://github.com/netease-youdao/LobsterAI/issues/3163)
- **状态：** Open
- **互动：** 1 条评论
- **发起方：** 百度爱企查团队
- **诉求：**
  - 将企业信息查询、法律办公场景的 MCP/Skill 能力开放给 LobsterAI 用户；
  - 支持 OAuth，包括 DCR 等动态客户端注册授权模式；
  - 沟通合作意愿、授权流程及接入方式。

**诉求分析：**  
这是今日唯一 Issue，也是当前最明确的生态合作需求。其关键点不只是增加一个 MCP 服务，而是要求 LobsterAI 在用户身份、授权委托和凭证隔离层面提供标准化能力。若要落地，项目需要评估：

1. 是否支持 OAuth 2.1 / DCR；
2. 每个用户的 MCP 凭证如何隔离、存储和撤销；
3. 企业信息查询是否涉及敏感数据、审计或权限分级；
4. MCP/Skill 是否适合内置，还是通过插件市场分发；
5. 合作接入、免责与数据合规责任边界。

该需求与项目当前 MCP 能力建设方向高度一致，可能成为下一阶段生态扩展的重要候选，但技术上不只是简单增加服务配置。

---

## 5. Bug 与稳定性

### 严重级别：高

#### 1. DSH 迁移后首次启动卡死、冷启动超时

- **现象：** Windows 升级日志中出现最长约 38 分钟的首次启动卡死，以及间歇性约 35 秒冷启动超时。
- **影响：** 应用无法正常进入可用状态，属于阻断级启动问题。
- **处理状态：** **已有修复 PR，已关闭**  
  [PR #3168](https://github.com/netease-youdao/LobsterAI/pull/3168)

#### 2. MCP 注册与任务分发存在时序竞争

- **现象：** MCP 包已安装、服务器已连接，但工具尚未注册完成时，任务可能被提前分发。
- **影响：** 可能出现工具调用失败、任务未执行或行为不确定。
- **处理状态：** **已有修复 PR，已关闭**  
  [PR #3173](https://github.com/netease-youdao/LobsterAI/pull/3173)

### 严重级别：中高

#### 3. 企业微信在 DSH 迁移后无法连接

- **现象：** 企业微信网关要求 `Sec-WebSocket-Key` 使用特定大小写，迁移后的 WebSocket 客户端不满足要求。
- **影响：** 企业微信私信能力不可用。
- **处理状态：** **已有修复 PR，已关闭**  
  [PR #3169](https://github.com/netease-youdao/LobsterAI/pull/3169)

#### 4. IM 私信迁移后产生重复会话

- **现象：** OpenClaw 升级至 DSH 后，同一机器人与联系人可能创建第二个桌面会话。
- **影响：** 历史记录割裂、上下文连续性受损。
- **处理状态：** **已有修复 PR，已关闭**，并覆盖钉钉、飞书、企业微信、微信和 QQ。  
  [PR #3170](https://github.com/netease-youdao/LobsterAI/pull/3170)

### 严重级别：中

#### 5. DSH 回复后上下文长度控件不可用

- **现象：** 首次回复后，快捷模式的上下文长度选择器消失或无法使用。
- **影响：** 用户无法继续调整上下文窗口，核心交互发生退化。
- **处理状态：** **已有修复 PR，已关闭**  
  [PR #3171](https://github.com/netease-youdao/LobsterAI/pull/3171)

#### 6. DSH 日志导出出现缺失文件误报

- **现象：** `dsh.log` 等可选日志不存在时仍触发警告；同时部分 DSH 会话模型预设未正确保留。
- **影响：** 误导用户认为日志丢失，并影响会话配置连续性。
- **处理状态：** **已有修复 PR，已关闭**  
  [PR #3172](https://github.com/netease-youdao/LobsterAI/pull/3172)

#### 7. 关联文件及历史索引恢复异常

- **现象：** 显式关联的文件名未按会话工作区正确索引，既有历史文件重新扫描后未出现在资料库。
- **影响：** Agent 无法稳定访问用户指定的资料，影响协作任务执行。
- **处理状态：** **已有修复 PR，已关闭**  
  [PR #3173](https://github.com/netease-youdao/LobsterAI/pull/3173)

### 稳定性趋势判断

今日没有新增崩溃类 Issue，但 PR 描述显示，DSH 迁移曾造成启动挂起、IM 断连、会话重复和 MCP 调度异常等多个高影响回归。多数问题已有对应修复 PR，**修复覆盖度较高**；不过 PR 状态仅显示“关闭”，报告中无法确认其是否已进入正式发布分支，因此仍建议以版本分支和回归测试结果为准。

---

## 6. 功能请求与路线图信号

### 6.1 百度爱企查 MCP 集成

- **来源：** [Issue #3163](https://github.com/netease-youdao/LobsterAI/issues/3163)
- **需求方向：** 企业信息查询、法律办公 MCP/Skill、OAuth/DCR 授权。
- **路线图判断：** **中等概率进入生态集成或合作验证阶段。**
- **判断依据：**
  - 与 LobsterAI 持续建设的 MCP/Skill 生态一致；
  - 外部团队已主动提出合作；
  - OAuth/DCR 支持会涉及平台级授权能力，不能仅靠新增服务配置完成。

**可能的下一步：**

1. 维护者确认合作模式；
2. 明确 OAuth 服务端与客户端注册流程；
3. 定义凭证存储、刷新、撤销和用户隔离方案；
4. 提供 MCP 接入示例；
5. 决定内置、插件市场分发或企业合作接入。

### 6.2 POPO 原生 IM 渠道

- **来源：** [PR #3160](https://github.com/netease-youdao/LobsterAI/pull/3160)
- **需求方向：** POPO 消息渠道、Webhook 回调、按机器人权限与配对机制。
- **路线图判断：** **功能方向明确，但下一版本是否发布取决于代码是否真正进入发布分支及渠道稳定性验证。**

### 6.3 专家目录大规模生态贡献

- **来源：** [PR #2938](https://github.com/netease-youdao/LobsterAI/pull/2938)
- **需求方向：** 导入 879 个 Lynxce/WorkBuddy 专家、团队、角色和品牌资源。
- **路线图判断：** **可能进入专家目录更新，但需审核内容质量、版权、头像及数据格式。**
- **积压风险：** PR 已被标记为 `stale`，需要维护者主动复核。

### 6.4 Atlas Cloud Provider

- **来源：** [PR #2818](https://github.com/netease-youdao/LobsterAI/pull/2818)
- **需求方向：** 增加 Atlas Cloud 模型服务提供方。
- **路线图判断：** **短期纳入概率较低。**
- **原因：** PR 状态已关闭且距创建时间较久，可能需要维护者重新确认 Provider 接入规范、支持范围和凭据配置。

---

## 7. 用户反馈摘要

今日 Issue 仅 1 条，且属于外部团队提出的生态合作诉求，并非终端用户故障反馈；因此可提炼的真实场景主要集中在企业办公和授权接入方面。

### 核心使用场景

- **企业信息查询：** 百度爱企查希望向 LobsterAI 用户提供企业工商、经营及风险相关信息查询能力。
- **法律办公：** 双方希望将法律办公场景的 MCP/Skill 能力嵌入 LobsterAI。
- **企业级授权：** 用户并不希望直接填写或托管静态凭据，而是希望通过 OAuth 授权访问。
- **平台生态开放：** 外部 MCP 提供方希望复用 LobsterAI 的分发渠道和用户触达能力。

### 用户/合作方关注点

- 平台是否愿意接纳第三方垂类 MCP；
- OAuth 授权流程能否支持标准 DCR；
- 合作接入路径是否清晰；
- 授权数据与凭证如何安全管理；
- 内置后是否会造成权限过宽或隐私风险。

### 满意度与不满信号

- 今日没有足够评论数据评价现有功能满意度；
- 当前唯一明确诉求体现出现有 MCP 接入对 **OAuth 企业授权**支持不足；
- 由于 Issue 尚未解决，也不存在可确认的官方承诺或落地时间。

---

## 8. 待处理积压

### 8.1 待合并 PR

#### CI 依赖升级

1. **actions/setup-node：4 → 7**  
   [PR #3162](https://github.com/netease-youdao/LobsterAI/pull/3162)  
   - 来源：Dependabot
   - 优先级：中
   - 风险点：需检查 Node 版本要求、工作流兼容性和缓存行为。

2. **softprops/action-gh-release：1 → 3**  
   [PR #3161](https://github.com/netease-youdao/LobsterAI/pull/3161)  
   - 来源：Dependabot
   - 优先级：中
   - 风险点：直接影响 GitHub Release 工作流，应在发布前验证产物上传与发布权限。

#### 外部专家资源贡献

3. **Lynxce 桌面端与 WorkBuddy 专家目录**  
   [PR #2938](https://github.com/netease-youdao/LobsterAI/pull/2938)  
   - 创建时间：2026-10-24
   - 更新时间：2026-11-23
   - 状态：Open、`stale`
   - 优先级：中高
   - 积压点：提交量较大，且已长期未决；维护者需要给出格式、版权、头像、角色权限和内容质量审核结论。

### 8.2 活跃 Issue

4. **百度爱企查 MCP/OAuth 合作需求**  
   [Issue #3163](https://github.com/netease-youdao/LobsterAI/issues/3163)  
   - 状态：Open
   - 优先级：高
   - 已有评论：1
   - 待办：明确合作负责人、OAuth/DCR 支持边界、MCP 分发方式和数据合规要求。

### 8.3 维护建议

- 为两个 Dependabot PR 设置明确审核期限，并在下一次发布前完成 CI 验证；
- 对已标记 `stale` 的专家目录 PR 进行重新激活、分批评审或明确关闭理由；
- 为爱企查合作 Issue 指定维护者响应，避免外部生态需求长期停留在咨询阶段；
- 对所有“已关闭”但内容显示为功能提交的 PR，核对其是否进入目标发布分支，尤其是 POPO 渠道、Atlas Cloud Provider 等可能存在合并状态歧义的条目。

---

## 综合判断

LobsterAI 当前处于 **高开发活跃度、DSH 迁移后集中收敛稳定性** 的阶段。今日最重要成果是修复了启动挂死、IM 断连与会话重复、MCP 调度时序等高影响问题，使 DSH 迁移具备更可靠的基础；界面、专家目录和 POPO 渠道则体现了功能继续扩展的方向。

项目当前主要健康风险不在于缺少开发活动，而在于：

1. **高价值变更是否完整进入发布分支需要二次确认；**
2. **DSH 迁移后的跨渠道回归矩阵仍需扩大；**
3. **OAuth/DCR 型 MCP 合作将带来新的安全与架构要求；**
4. **两条 CI 升级 PR 与一条大型专家资源 PR 需要尽快形成处理结论。**

整体健康度可评估为：**活跃且推进明显，稳定性修复响应充分；发布准备度中高，但下一版本前仍应优先完成回归验证、依赖升级审核和外部集成需求收敛。**

</details>

<details>
<summary><strong>QwenPaw</strong> — <a href="https://github.com/agentscope-ai/QwenPaw">agentscope-ai/QwenPaw</a></summary>

# QwenPaw 项目动态日报

**日期：2026-11-24**  
**数据范围：过去 24 小时 GitHub Issues / Pull Requests 更新**  
**整体判断：项目处于高活跃开发期，但稳定性、插件扩展与安全治理问题集中暴露。**

---

## 1. 今日速览

过去 24 小时共更新 **26 条 Issues**、**35 条 Pull Requests**，其中 Issues 新开或保持活跃 **21 条**、关闭 **5 条**；PR 待合并 **24 条**、已合并或关闭 **11 条**。项目当日没有新的正式 Release，但已有 **v2.3.1-beta.1** 的安装验证任务，说明版本迭代仍在进行中。

当前开发重点集中在 **Console 长会话渲染与滚动体验、Provider 流式错误恢复、插件 SDK 与生命周期管理、Creator 审核恢复、上下文与记忆治理** 等方向。与此同时，安全与隔离问题明显增多，包括技能扫描默认放行、沙箱资源限制未实际执行、记忆租户隔离不足和编码模式出站策略缺失。

从数据看，项目活跃度较高，但问题密度也偏高：**35 个 PR 对应 26 个 Issue 更新**，且多个修复仍处于待审状态。当前健康度可评估为 **中高活跃度、中等稳定性、安全治理待加强**。

---

## 2. 版本发布

### 今日无新版本发布

GitHub 数据中未出现新的 Release。

不过，发布流程中仍有一个预发布验证任务：

- **QwenPaw v2.3.1-beta.1 安装验证**  
  [#8861](https://github.com/agentscope-ai/QwenPaw/issues/8861)

该任务要求各平台完成安装、启动、核心流程等检查。由于正式版本尚未发布，当前用户仍应以已发布稳定版本为准；涉及 `2.3.1-beta.1` 的反馈需要特别区分 Beta 行为与稳定版行为。

---

## 3. 项目进展

### 3.1 Console 宽内容与窄屏显示修复推进

相关问题显示，Console 在窄屏下会裁剪整条回复，宽 Markdown 表格和代码块也无法横向滚动：

- [#8811 窄屏消息与宽内容裁剪](https://github.com/agentscope-ai/QwenPaw/issues/8811)
- [#8845 Markdown 表格溢出且无法横向滚动](https://github.com/agentscope-ai/QwenPaw/issues/8845)
- [#8823 修复宽表格和代码块可滚动性](https://github.com/agentscope-ai/QwenPaw/pull/8823)

对应 PR 已关闭，表明相关修复已合并或结束评审流程。其价值在于恢复长表格、代码块及移动端消息的可用性，避免用户只能看到被截断的内容。

### 3.2 Discord 代码块分片修复

Discord 的 `chunk_text` 在代码围栏恰好落在分片边界时会重复围栏，可能破坏代码块结构：

- [#8870 Discord chunk_text 重复代码围栏](https://github.com/agentscope-ai/QwenPaw/issues/8870)
- [#8889 修复 Discord 分片边界代码围栏](https://github.com/agentscope-ai/QwenPaw/pull/8889)

修复 PR 仍待合并，但已形成明确的问题与修复对应关系。

### 3.3 Creator 2.0.7：审核恢复与媒体引用修复

Creator 的审核轮次曾因陈旧 artifact 引用返回 422，导致无法作出拒绝决定；同时伴随源地址失效、媒体处理环境变量未生效等问题：

- [#8592 Creator 审核轮次无法决定及媒体引用异常](https://github.com/agentscope-ai/QwenPaw/issues/8592)
- [#8886 Creator 2.0.7：审核恢复与媒体修复](https://github.com/agentscope-ai/QwenPaw/pull/8886)
- [#8885 Creator 2.0.7 另一提交版本](https://github.com/agentscope-ai/QwenPaw/pull/8885)

两个同名 PR 中一个已关闭、一个仍开放，显示该版本可能经历过重新提交或分支调整。其方向包括：

- 拒绝审核时清理已删除 artifact 的陈旧引用；
- 恢复旧项目和归档中的待决审核；
- 修复媒体过期、审批和生成链路问题。

这属于影响 Creator 可用性的关键修复，但合并前仍需确认最终合入版本。

### 3.4 Provider 与上下文使用统计改进

Anthropic Messages 协议的上下文计量此前漏算缓存读写 token：

- [#8057 Anthropic 缓存 token 未计入上下文](https://github.com/agentscope-ai/QwenPaw/issues/8057)
- [#8060 将 Anthropic 缓存 token 纳入实时上下文计量](https://github.com/agentscope-ai/QwenPaw/pull/8060)

对应 PR 已关闭。该修复有助于提高上下文仪表盘和压缩决策的准确性。

同时，自定义 OpenAI 网关需要更灵活地声明 Prompt Cache 参数：

- [#8061 允许自定义网关声明 OpenAI Prompt Cache 参数](https://github.com/agentscope-ai/QwenPaw/pull/8061)
- [#8058 关联问题](https://github.com/agentscope-ai/QwenPaw/issues/8058)

该 PR 仍在审查中，意味着 Provider 能力声明体系仍在扩展。

### 3.5 插件 SDK 与运行时架构继续演进

今日最重要的长期方向之一是插件系统扩展：

- [#8764 扩展插件 SDK 1.2 API、生命周期管理和开发工具](https://github.com/agentscope-ai/QwenPaw/pull/8764)
- [#8554 支持插件 CLI 命令与扩展点](https://github.com/agentscope-ai/QwenPaw/pull/8554)
- [#8586 统一 ACP 与原生执行的会话配置](https://github.com/agentscope-ai/QwenPaw/pull/8586)
- [#8841 防止崩溃后 llama-server 残留运行](https://github.com/agentscope-ai/QwenPaw/pull/8841)

这些工作共同指向一个目标：让插件成为受宿主统一管理的一等扩展能力，覆盖 API、CLI、权限、身份、会话配置和资源回收。对生态项目而言意义较大，但 PR 体积普遍为 `XXXL`，评审和合并成本也较高。

### 3.6 任务与上下文资源清理补强

- [#8268 限定任务完成回调并始终清理运行记录](https://github.com/agentscope-ai/QwenPaw/pull/8268)  
  针对完成回调挂起或取消后，`TaskTracker` 永久保留 `running` 状态的问题。

- [#8884 回收被中断的上下文召回子进程](https://github.com/agentscope-ai/QwenPaw/pull/8884)  
  修复取消协程后子进程继续运行、超时路径未正确等待退出等资源泄漏问题。

两项改动均直接改善长期运行稳定性，不过目前仍待合并。

### 3.7 整体推进程度

过去 24 小时至少有 **11 个 PR 已合并或关闭**，覆盖显示、上下文统计、CLI 提示、技能卡片、Discord 分片、文档更新等方向。项目并非停滞，而是处于“**大量修复与架构扩展并行**”的状态。不过剩余 PR 数量较大，且多个核心改动仍待审，短期内版本稳定性可能继续波动。

---

## 4. 社区热点

### 4.1 Creator 审核流程无法作出决定

- [#8592 Creator review round 无法决定](https://github.com/agentscope-ai/QwenPaw/issues/8592)
- [#8886 Creator 2.0.7 修复 PR](https://github.com/agentscope-ai/QwenPaw/pull/8886)

这是今日最具业务阻断性的热点之一。用户不仅无法拒绝审核，还面临 provider `source_url` 502 和媒体环境变量不生效等问题。其背后诉求不是单点报错修复，而是审核流程必须具备**可恢复、状态一致、引用有效**的可靠性。

### 4.2 Console 长会话在 iOS 上冻结

- [#8852 iOS WebKit 长会话因布局抖动和 content-visibility 冻结](https://github.com/agentscope-ai/QwenPaw/issues/8852)

该问题直接触及移动端长会话的核心使用场景。`UserMessageAnchors` 布局反复计算与 `column-reverse` 列表中的 `content-visibility:auto` 可能形成渲染抖动。用户期待移动端阅读长对话时保持流畅，而不仅是“能打开”。

### 4.3 流式回复中断后无法重试

- [#8864 流式输出中途 RemoteProtocolError，部分内容输出后不重试](https://github.com/agentscope-ai/QwenPaw/issues/8864)

用户明确说明失败时上下文仅使用约 9%，因此不是上下文超限。关键痛点是：**模型已经开始输出后，网络级错误会直接终止回复**，用户需要手动重试并可能承担重复生成成本。

### 4.4 记忆后端启动竞态

- [#8867 Memory 后端静默回退至 ReMeLight 且不自愈](https://github.com/agentscope-ai/QwenPaw/issues/8867)
- [#8868 同一问题的早期条目](https://github.com/agentscope-ai/QwenPaw/issues/8868)

相关 Issue 在过去 24 小时持续更新并获得评论，说明社区关注度较高。问题本质是插件注册与 Agent 启动之间存在竞态，最终配置与实际后端不一致，用户很难从表面状态发现问题。

### 4.5 插件 SDK 1.2

- [#8764 插件 SDK 1.2 API 与生命周期管理](https://github.com/agentscope-ai/QwenPaw/pull/8764)
- [#8554 插件 CLI 命令和扩展点](https://github.com/agentscope-ai/QwenPaw/pull/8554)

这是今日最重要的生态方向之一。插件开发者希望获得稳定的公开 API、身份与权限控制、会话隔离、资源生命周期及 CLI 扩展能力。若落地，将显著降低第三方插件自行处理宿主集成逻辑的成本。

### 4.6 安全与沙箱治理集中受到关注

- [#8880 技能扫描默认 warn，CRITICAL 仍继续安装](https://github.com/agentscope-ai/QwenPaw/issues/8880)
- [#8879 max_processes / max_memory_mb 未被沙箱执行](https://github.com/agentscope-ai/QwenPaw/issues/8879)
- [#8878 编码模式最小出站策略设计](https://github.com/agentscope-ai/QwenPaw/issues/8878)
- [#8881 记忆检索层强制租户隔离](https://github.com/agentscope-ai/QwenPaw/issues/8881)
- [#8882 长期记忆引用计数与过期归档](https://github.com/agentscope-ai/QwenPaw/issues/8882)

这些条目均为当日新开，集中体现社区对 Agent 执行安全、租户隔离和长期记忆质量的关注。相比普通 UI Bug，这类议题可能对生产部署和多租户场景影响更大。

---

## 5. Bug 与稳定性

以下按影响范围和阻断程度排序。

### P0 / 高：可能导致会话持续不可用或上下文污染

#### 1. 流式响应中断后不重试

- Issue：[#8864](https://github.com/agentscope-ai/QwenPaw/issues/8864)
- **已有明确修复 PR：当前未看到直接关联 PR**
- 影响：网络协议错误发生在已输出部分内容之后时，回复直接中断且不会自动恢复；用户需要手动重试。

#### 2. 工具结果中的媒体块导致非多模态模型持续 400

- Issue：[#8887](https://github.com/agentscope-ai/QwenPaw/issues/8887)
- **已有明确修复 PR：当前未看到直接关联 PR**
- 影响：`view_video`、`send_file_to_user` 等返回的媒体引用进入会话上下文后，后续请求可能持续触发 `400 BadRequestError`，最终表现为后续所有消息均为 “Internal error”。属于会话级故障，影响范围较大。

#### 3. Creator 审核流程无法作出决定

- Issue：[#8592](https://github.com/agentscope-ai/QwenPaw/issues/8592)
- Fix PR：[#8886](https://github.com/agentscope-ai/QwenPaw/pull/8886)、[#8885](https://github.com/agentscope-ai/QwenPaw/pull/8885)
- **已有 fix PR，待合并**
- 影响：拒绝操作固定返回 422，审核流程无法结束；同时关联媒体源失效与 FFmpeg 环境变量未生效。

#### 4. 记忆后端启动竞态导致静默降级

- Issue：[#8867](https://github.com/agentscope-ai/QwenPaw/issues/8867)
- **已有明确修复 PR：当前未看到直接关联 PR**
- 影响：已配置 OpenViking 的 Agent 仍可能长期运行在 ReMeLight 上，且进程内不会自愈，造成数据写入位置与预期不一致。

### P1 / 中高：核心体验明显退化

#### 5. iOS WebKit 长会话冻结

- Issue：[#8852](https://github.com/agentscope-ai/QwenPaw/issues/8852)
- **已有明确修复 PR：当前未看到直接关联 PR**
- 影响：长会话打开或继续时 Console 冻结，移动端不可用。

#### 6. Transcript 在内容高度缩小时跳动

- Issue：[#8888](https://github.com/agentscope-ai/QwenPaw/issues/8888)
- **已有明确修复 PR：当前未看到直接关联 PR**
- 影响：发送消息、上下文压缩或 reasoning block 收起后，视图回跳数屏，影响阅读连续性。

#### 7. Creator 输入框随会话增长明显卡顿

- Issue：[#8706](https://github.com/agentscope-ai/QwenPaw/issues/8706)
- **已有明确修复 PR：当前未看到直接关联 PR**
- 影响：每次按键都可能触发完整 AgentDock 重渲染并重新解析全部 Markdown，对中文输入尤其明显。

#### 8. 禁用 Provider 后 Agent 固定使用失效模型

- Issue：关联 PR [#8825](https://github.com/agentscope-ai/QwenPaw/pull/8825)
- Fix PR：[#8825](https://github.com/agentscope-ai/QwenPaw/pull/8825)
- **已有 fix PR，待审查**
- 影响：Agent 运行配置仍绑定已禁用 Provider，后续飞书、钉钉、微信等渠道消息均可能因模型构建失败而失败。

### P2 / 中：功能错误或体验受限

#### 9. Discord 代码围栏在分片边界重复

- Issue：[#8870](https://github.com/agentscope-ai/QwenPaw/issues/8870)
- Fix PR：[#8889](https://github.com/agentscope-ai/QwenPaw/pull/8889)
- **已有 fix PR，待合并**

#### 10. MCP Streamable HTTP 将服务端 4xx 误报为未连接

- Issue：[#8875](https://github.com/agentscope-ai/QwenPaw/issues/8875)
- **已有明确修复 PR：当前未看到直接关联 PR**
- 影响：错误语义被掩盖，并导致 session 被拆除和重建。

#### 11. 命名星期列表的 heartbeat cron 回退到 30 分钟

- Issue：[#8865](https://github.com/agentscope-ai/QwenPaw/issues/8865)
- **已有明确修复 PR：当前未看到直接关联 PR**
- 影响：`mon,wed,fri` 等表达式无法按预期执行，可能导致自动化频率意外增加。

#### 12. OpenAI 兼容流中的无状态 overload 错误绕过重试

- Issue：[#8877](https://github.com/agentscope-ai/QwenPaw/issues/8877)
- **已有明确修复 PR：当前未看到直接关联 PR**
- 影响：HTTP 200 后的 SSE 错误被当作普通内容处理，瞬时服务过载无法触发自动重试。

#### 13. 本地模型空状态提示不存在的 CLI 命令

- Issue：[#8872](https://github.com/agentscope-ai/QwenPaw/issues/8872)
- Fix PR：[#8873](https://github.com/agentscope-ai/QwenPaw/pull/8873)
- **已有 fix PR，已关闭**

### 已关闭或已有处理结果的显示与统计问题

- [#8811 窄屏及宽内容裁剪](https://github.com/agentscope-ai/QwenPaw/issues/8811)  
  关联 PR：[#8823](https://github.com/agentscope-ai/QwenPaw/pull/8823)，相关 PR 已关闭。

- [#8490 打开语音转写设置导致 Whisper 导入并占用约 690 MB RSS](https://github.com/agentscope-ai/QwenPaw/issues/8490)  
  Issue 已关闭，属于明显的资源占用回归。

- [#8057 Anthropic 缓存 token 统计遗漏](https://github.com/agentscope-ai/QwenPaw/issues/8057)  
  关联 PR：[#8060](https://github.com/agentscope-ai/QwenPaw/pull/8060)，已关闭。

- [#8836 含 password 组件的工具配置页循环刷新](https://github.com/agentscope-ai/QwenPaw/issues/8836)  
  Issue 已关闭。

### 安全风险专项

#### 15. 技能扫描默认模式对 CRITICAL 发现 fail-open

- Issue：[#8880](https://github.com/agentscope-ai/QwenPaw/issues/8880)
- **已有明确修复 PR：当前未看到直接关联 PR**
- 影响：默认 `warn` 模式仅记录风险但继续安装技能；扫描超时也可能放行。对 Agent 技能供应链而言风险较高。

#### 16. 沙箱资源限制只是配置项，未被任何后端执行

- Issue：[#8879](https://github.com/agentscope-ai/QwenPaw/issues/8879)
- **已有明确修复 PR：当前未看到直接关联 PR**
- 影响：`max_processes` 和 `max_memory_mb` 被接受但未强制执行，用户可能误以为恶意或失控工具已受到资源限制。

#### 17. 编码模式缺少最小出站策略

- Issue：[#8878](https://github.com/agentscope-ai/QwenPaw/issues/8878)
- **已有明确修复 PR：当前未看到直接关联 PR**
- 影响：在已有 Landlock 端口规则之上，元数据端点等网络访问仍缺少明确的 deny-by-default 策略。

#### 18. 记忆租户隔离依赖目录约定

- Issue：[#8881](https://github.com/agentscope-ai/QwenPaw/issues/8881)
- **已有明确修复 PR：当前未看到直接关联 PR**
- 影响：检索层的过滤条件可选，目录或配置失误可能导致跨租户数据泄露。

---

## 6. 功能请求与路线图信号

### 6.1 插件 SDK 1.2：最明确的下一版本生态主线

- [#8764](https://github.com/agentscope-ai/QwenPaw/pull/8764)
- [#8554](https://github.com/agentscope-ai/QwenPaw/pull/8554)

可能纳入下一版本的能力包括：

- 插件身份与权限管理；
- 模型选择及会话级历史范围；
- 请求上下文与协调机制；
- 资源生命周期管理；
- 插件 CLI 命令及扩展点；
- 开发工具和更稳定的公共 API。

这两项 PR 已存在且规模较大，说明需求已经从社区提案进入实现阶段。

### 6.2 ACP 与原生运行时统一会话配置

- [#8586](https://github.com/agentscope-ai/QwenPaw/pull/8586)

该方向允许同一 Agent 的不同会话选择不同设置，同时避免修改保存的默认配置或影响其他进程。对多会话、多 Agent 和多通道部署具有明确价值，较可能进入后续版本主线。

### 6.3 长期记忆治理

- [#8882 引用计数式归档与状态变化](https://github.com/agentscope-ai/QwenPaw/issues/8882)
- [#8881 检索层租户隔离](https://github.com/agentscope-ai/QwenPaw/issues/8881)

这些属于设计提案，尚无直接实现 PR，但与现有“Never forgets”定位和用户反馈直接相关。预计会先以小范围功能或架构改造进入路线图，而非一次性完成完整 TTL、引用追踪和衰减机制。

### 6.4 编码模式网络最小权限

- [#8878](https://github.com/agentscope-ai/QwenPaw/issues/8878)

建议方向为：

- 元数据端点默认拒绝；
- 在现有 Landlock ABI v4 端口规则之上增加策略文件白名单；
- 对云元数据、loopback 和其他敏感地址进行更严格控制。

该提案与 Agent 沙箱主线高度契合，但需要兼容性评估，落地优先级更可能取决于安全等级要求。

### 6.5 Office 技能同步

- [#8479 同步 Anthropic 2026 年 7 月 Office 技能更新](https://github.com/agentscope-ai/QwenPaw/pull/8479)

该 PR 仍在审查中，包含 DOCX、PPTX、XLSX 技能更新。虽然不是今日新需求，但它反映出项目持续跟进上游 Agent 技能生态。

### 6.6 工具结果媒体引用兼容性

- [#8887](https://github.com/agentscope-ai/QwenPaw/issues/8887)

虽然当前以 Bug 形式提出，但从产品能力看需要明确区分：

- 工具产生媒体；
- 发送给支持多模态的模型；
- 发送给不支持多模态的模型。

合理修复应包括过滤、摘要或转换媒体数据块，避免一次工具调用污染整个会话。

---

## 7. 用户反馈摘要

### 真实使用场景

1. **移动端与窄屏浏览长对话**  
   用户在 375px 手机视口、桌面和移动 WebView 等环境中使用 Console。宽表格、长代码块和整条消息均可能被裁剪，说明“桌面优先”的布局假设仍影响移动端体验。  
   参考：[#8811](https://github.com/agentscope-ai/QwenPaw/issues/8811)、[#8852](https://github.com/agentscope-ai/QwenPaw/issues/8852)

2. **长会话持续使用 Creator**  
   用户反馈输入延迟会随会话长度增长，说明创作工作流对响应性能和增量渲染高度敏感。  
   参考：[#8706](https://github.com/agentscope-ai/QwenPaw/issues/8706)

3. **Creator 审核与媒体生产**  
   用户不仅生成内容，还依赖多轮审核、拒绝、重新生产和媒体交付。审核状态卡死会直接中断整个生产流程。  
   参考：[#8592](https://github.com/agentscope-ai/QwenPaw/issues/8592)

4. **长上下文流式模型调用**  
   用户使用 `deepseek-v4-flash`、高 thinking level 和较长历史；失败时上下文使用率很低，因此明确排除了容量不足这一解释。  
   参考：[#8864](https://github.com/agentscope-ai/QwenPaw/issues/8864)

5. **多渠道和本地模型管理**  
   飞书、钉钉、微信等渠道依赖 Agent 的固定模型配置；Provider 被禁用后，Agent 仍继续引用旧配置。Discord 还存在代码块分片展示问题。  
   参考：[#8825](https://github.com/agentscope-ai/QwenPaw/pull/8825)、[#8870](https://github.com/agentscope-ai/QwenPaw/issues/8870)

### 用户不满意的核心点

- **错误不可恢复**：流式输出、Creator 审核和记忆后端初始化都存在“进入错误状态后无法自行恢复”的问题。
- **界面状态与真实状态不一致**：模型空状态给出无效 CLI 指令；记忆后端静默回退；Provider 已禁用但 Agent 仍引用。
- **长会话性能退化明显**：iOS 冻结、输入逐字卡顿、宽内容裁剪、Transcript 回跳。
- **安全边界容易造成错误安全感**：配置中存在资源限制，但后端未执行；技能扫描默认放行高危发现。
- **生态扩展仍缺少稳定公共契约**：用户和插件开发者期待 SDK、CLI、生命周期及权限能力由宿主统一管理。

### 正面信号

- 用户提供了明确的复现环境、浏览器、视口宽度、模型、上下文占用和调用链，信息质量较高。
- [#8852](https://github.com/agentscope-ai/QwenPaw/issues/8852) 给出了具体 commit、组件版本和浏览器渲染机制，利于维护者定位。
- [#8877](https://github.com/agentscope-ai/QwenPaw/issues/8877) 同时在正式版本和 `main` 上复现，并使用 mock HTTP transport 验证，提供了较好的回归测试基础。
- [#8864](https://github.com/agentscope-ai/QwenPaw/issues/8864) 主动排除上下文溢出假设，减少了误判。
- [#8878](https://github.com/agentscope-ai/QwenPaw/issues/8878) 对现有 Landlock 和 userns 隔离进行了肯定评价，同时聚焦剩余缺口，诉求相对务实。

---

## 8. 待处理积压

### 8.1 高优先级、已有清晰修复方向但仍待审

- [#8886 Creator 2.0.7 审核恢复与媒体修复](https://github.com/agentscope-ai/QwenPaw/pull/8886)  
  影响关键工作流，且存在同内容的另一个已关闭 PR，需确认最终提交来源。

- [#8764 插件 SDK 1.2](https://github.com/agentscope-ai/QwenPaw/pull/8764)  
  生态影响大，但改动面广，建议拆分评审 SDK 契约、权限模型和生命周期。

- [#8554 插件 CLI 命令与扩展点](https://github.com/agentscope-ai/QwenPaw/pull/8554)  
  需要重点检查命令注册冲突、依赖检查和卸载清理。

- [#8586 统一 ACP 与原生执行的会话配置](https://github.com/agentscope-ai/QwenPaw/pull/8586)  
  涉及运行时会话配置继承与兼容性，适合补充多会话隔离回归测试。

- [#8825 Provider 被禁用时回退全局默认模型](https://github.com/agentscope-ai/QwenPaw/pull/8825)  
  对渠道稳定性影响直接，建议优先确认回退策略是否与用户禁用 Provider 的意图一致。

- [#8889 Discord 代码围栏分片修复](https://github.com/agentscope-ai/QwenPaw/pull/8889)  
  修复范围较小、问题明确，适合快速合并。

- [#8268 任务完成回调与运行记录清理](https://github.com/agentscope-ai/QwenPaw/pull/8268)  
  解决长期运行后状态永久卡住的问题，应验证回调异常、取消和超时路径。

- [#8884 回收中断的召回子进程](https://github.com/agentscope-ai/QwenPaw/pull/8884)  
  资源泄漏类修复，建议检查 Windows 与 POSIX 平台差异。

### 8.2 长期存在且仍开放的重要问题

- [#8706 Creator 输入逐字卡顿](https://github.com/agentscope-ai/QwenPaw/issues/8706)  
  自 11 月 13 日创建以来持续更新，已有多次评论，但尚无直接修复 PR。对 Creator 的高频使用体验影响持续。

- [#8592 Creator 审核与媒体链路](https://github.com/agentscope-ai/QwenPaw/issues/8592)  
  跨越多个版本仍未彻底解决，需避免 2.0.7 再次引入状态迁移问题。

- [#8844 Console 消息列表无法键盘滚动](https://github.com/agentscope-ai/QwenPaw/issues/8844)  
  影响无鼠标场景和辅助技术用户，目前未见直接 fix PR。

- [#8845 Markdown 表格横向滚动](https://github.com/agentscope-ai/QwenPaw/issues/8845)  
  已有相关 PR [#8823](https://github.com/agentscope-ai/QwenPaw/pull/8823) 且该 PR 已关闭，但 Issue 仍开放，需要确认修复是否完整覆盖独立反馈场景。

- [#8479 Office 技能同步](https://github.com/agentscope-ai/QwenPaw/pull/8479)  
  作为首次贡献者的大型 PR，已处于审查状态较长时间，建议拆分 DOCX、PPTX、XLSX 或提供更清晰评审边界。

- [#8487 识别工具结果中的 URL 媒体以便折叠](https://github.com/agentscope-ai/QwenPaw/pull/8487)  
  自 10 月 29 日创建并持续更新，涉及上下文压缩与工具结果折叠，建议补充 URL、data URI、显式 MIME 三类媒体的覆盖测试。

---

## 项目健康度结论

QwenPaw 当前呈现出明显的**高吞吐开发状态**：Issue、PR 和架构提案都较活跃，Console、Provider、Creator、插件 SDK、上下文记忆等核心方向均有实际实现推进。已关闭 PR 表明一批显示、统计和 CLI 缺陷已得到处理。

但项目仍面临三类健康风险：

1. **可靠性缺口**：流式重试、工具媒体污染、启动竞态、任务清理和子进程回收仍有多处未闭环。
2. **安全承诺与执行能力存在落差**：技能扫描、资源限制和租户隔离尚未达到配置或文档所暗示的保障水平。
3. **大型 PR 积压**：SDK、运行时和 Creator 等 `XXXL` 改动评审成本高，若缺少拆分与里程碑管理，合并延迟会继续累积。

综合评估：**活跃度较高，功能推进明显；稳定性处于中等水平，安全治理和大型 PR 收敛速度是下一阶段最值得关注的两项指标。**

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/NousResearch/hermes-agent">NousResearch/hermes-agent</a></summary>

# Hermes Agent 项目动态日报

**统计日期：2026-11-24**  
**数据范围：GitHub 过去 24 小时**  
**项目：** [NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent)

---

## 1. 今日速览

Hermes Agent 过去 24 小时更新了 **50 条 Issues** 和 **50 条 PR**，其中 Issues 新开或活跃 **46 条**、关闭 **4 条**，PR 待合并 **42 条**、合并或关闭 **8 条**，整体开发活跃度处于高位。期间发布 **2 个版本**：稳定版 **v0.23.4** 集中整合自 v0.23.3 以来约 **229 个 PR**，另有当天生成的 canary 版本。  
今日议题集中在 **Gateway 通知输出、会话路由、Cron 状态语义、Profile 导入导出、插件隔离和跨平台安装更新**，其中多个问题已有对应修复 PR，显示问题响应速度较快。  
但积压仍然较重：50 条 PR 中有 **42 条待合并**，同时多个高优先级会话状态问题和安全边界问题仍处于开放状态。当前项目可概括为：**迭代速度高、发布节奏稳定、修复覆盖增强，但合并压力与长尾 Issue 风险正在上升。**

---

## 2. 版本发布

### v0.23.4 — 稳定版

- **发布时间：** 2026-11-23
- **Release：** [v0.23.4](https://github.com/NousResearch/hermes-agent/releases/tag/v0.23.4)

该版本是面向 GitHub Release、CLI、安装器、Microsoft Store、Docker 和 Hermes Cloud 的 **Patch 版本**，集中汇总了自 v0.23.3 以来合并的约 **229 个 PR**。官方说明完整的功能整理将在 **v0.24.0** 提供。

#### 发布范围

- CLI 与各平台安装器
- Microsoft Store 应用
- Docker 镜像
- Hermes Cloud
- GitHub Release 稳定产物

#### 破坏性变更

从当前 Release 说明看：

- **未明确声明破坏性变更。**
- 该版本定位为稳定收口版本，而不是大型功能发布。
- 完整变更日志被推迟到 v0.24.0，因此仅依据 Release Note 无法确认所有边缘行为变化。

#### 升级与迁移建议

1. **生产环境建议先备份 Profile 和状态数据库。**  
   当前仍有与自动备份、状态恢复和 Profile 导入相关的开放 Issue：
   - [#127731：频繁 Cron 导致更新前备份被跳过](https://github.com/NousResearch/hermes-agent/issues/127731)
   - [#139012：更新后自动恢复可能选择过旧快照](https://github.com/NousResearch/hermes-agent/issues/139012)
   - [#149830：Profile 导出包含导入端拒绝的符号链接](https://github.com/NousResearch/hermes-agent/issues/149830)

2. **Gateway 重启前需确认配置热加载预期。**  
   部分 `terminal.*`、Docker、超时等配置目前可能需要重启才能生效：
   - [#159567](https://github.com/NousResearch/hermes-agent/issues/159567)

3. **使用多 Profile、符号链接或 LSP 的用户升级前应单独验证。**  
   对应修复已进入 PR：
   - [#159575：带符号链接的 Profile 恢复可再次导入](https://github.com/NousResearch/hermes-agent/pull/159575)

4. **建议等待 v0.24.0 获取完整变更说明。**  
   v0.23.4 更适合作为当前稳定基线；若计划近期引入主动 Cron、Profile 插件隔离等新功能，可同时评估 v0.24.0 路线。

### canary.20261124T064706Z-v0.23.3

- **发布时间：** 2026-11-24
- **Release：** [canary.20261124T064706Z-v0.23.3](https://github.com/NousResearch/hermes-agent/releases/tag/canary.20261124T064706Z-v0.23.3)

这是基于 v0.23.3 的 canary 构建，面向 Hermes Desktop 等开发测试分发。适合用于提前验证当天修复，但不适合作为生产环境稳定基线。

---

## 3. 项目进展

### 3.1 今日重要修复已形成较清晰的 PR 链路

#### 后台进程和 Bot DM 的单行输出修复

今日最集中的问题是长单行输出在 Gateway 完成通知中被截断为空。相关开放 Issue 包括：

- [#131786：长单行 JSON 的有效输出全部丢失](https://github.com/NousResearch/hermes-agent/issues/131786)
- [#152075：单行进程输出降级为 “showing last 0 chars”](https://github.com/NousResearch/hermes-agent/issues/152075)
- [#156760：后台进程唤醒通知正文为空](https://github.com/NousResearch/hermes-agent/issues/156760)

对应修复：

- [#159574：单行后台输出不再变成 “showing last 0 chars”](https://github.com/NousResearch/hermes-agent/pull/159574)

该 PR 已通过 CI 审查并处于待合并状态。若进入稳定分支，可同时缓解 Gateway Bot DM 吞回复和长 JSON 结果丢失的问题。

#### Cron 暂停状态不再被隐式恢复

相关 Issue：

- [#156575：Console 中运行 Cron 会静默恢复暂停任务](https://github.com/NousResearch/hermes-agent/issues/156575)

对应修复：

- [#159571：Console 的 `cron run` 不再恢复暂停任务](https://github.com/NousResearch/hermes-agent/pull/159571)

这修复了不同入口之间的行为不一致，避免暂停原因和状态被清除，是 Cron 状态机一致性的重要改进。

#### Profile 符号链接导出与导入闭环

相关 Issue：

- [#149830：Profile 导出写入导入端拒绝的符号链接](https://github.com/NousResearch/hermes-agent/issues/149830)

对应修复：

- [#159575：带符号链接的 Profile 可再次导入](https://github.com/NousResearch/hermes-agent/pull/159575)

修复不仅恢复导入，还会重建指向 Profile 内部安全位置的链接，属于 Profile 备份与迁移链路的关键修复。

#### 安装更新稳定性

- [#159568：慢速网络下重新遵循 `UV_CONCURRENT_DOWNLOADS` 与 `UV_HTTP_RETRIES`](https://github.com/NousResearch/hermes-agent/pull/159568)

该修复解决 `hermes update` 在弱网环境下并行下载大文件导致整体超时，同时用户设置的并发数和重试参数此前未真正传递给安装器的问题。

#### Gateway 路由与会话隔离

- [#159513：禁止聊天路由绑定到被重命名的子代理会话](https://github.com/NousResearch/hermes-agent/pull/159513)  
  **P1，属于今日最值得优先合并的 PR 之一。** 它防止 `delegate_task` 子会话接管父聊天，避免用户后续消息或委派结果落入错误的 worker transcript。

- [#159544：压缩后保留尚未完成的 Open Commitments](https://github.com/NousResearch/hermes-agent/pull/159544)  
  将未完成承诺从普通摘要文本提升为结构化状态，降低长会话压缩后遗忘任务的风险。

- [#126526：从 `_session_key_namespace` 推导 Profile 重命名/删除命名空间](https://github.com/NousResearch/hermes-agent/pull/126526)  
  修复名为 `main` 的 Profile 与默认 Profile 之间可能发生的会话命名空间冲突。该 PR 创建时间较长，说明此类回归仍需专项清理。

#### TUI / Gateway 插件命令错误反馈

- [#159579：将 `null` dispatch 参数视为无参数命令](https://github.com/NousResearch/hermes-agent/pull/159579)
- [#159578：插件命令失败时报告真实错误，而不是 4018 路由拒绝](https://github.com/NousResearch/hermes-agent/pull/159578)

二者共同改善插件命令链路的协议兼容性和可诊断性。

#### Profile 插件隔离

- [#159450：在打开者所属 Profile 命名空间下运行插件代码](https://github.com/NousResearch/hermes-agent/pull/159450)

该 PR 强化了跨 Profile 环境变量和插件加载目录隔离，属于安全边界方向的实质进展。

### 3.2 活跃度评估

- **Issue 活跃度：高。** 50 条更新中 46 条仍为新开或活跃。
- **PR 活跃度：高。** 50 条更新中 42 条待合并。
- **发布节奏：高。** 24 小时内出现稳定版和 canary 两个 Release。
- **工程健康度：良好但承压。**
  - 优点：当天问题普遍能快速形成可审查 PR。
  - 风险：待合并 PR 占比达到 **84%**，维护者合并带宽可能成为瓶颈。
  - 风险：部分关键问题暴露会话路由、配置热加载和子进程清理等架构性薄弱点。

---

## 4. 社区热点

### 4.1 跨平台统一会话：长期核心诉求

- [#62780：Canonical cross-platform session](https://github.com/NousResearch/hermes-agent/issues/62780)
- **评论数：8**
- **反应数：1**

用户希望同一会话可以从 CLI、Desktop、TUI、WebUI、移动端、Telegram、Discord、ACP 和 API 服务中打开、恢复、实时观察并追加消息。这反映出 Hermes 的客户端数量增长较快，但**会话身份、路由和状态模型尚未完全统一**。

这是今日最接近产品级路线图的需求之一，也可能与以下工作形成同一方向：

- [Desktop 显示 Kanban worker 会话](https://github.com/NousResearch/hermes-agent/issues/158011)
- [跨 Profile 展示最近会话时显示所属 Profile](https://github.com/NousResearch/hermes-agent/issues/86258)
- [防止子代理会话接管父聊天](https://github.com/NousResearch/hermes-agent/pull/159513)

### 4.2 Gateway 长单行输出丢失：当天最集中的共性问题

- [#131786](https://github.com/NousResearch/hermes-agent/issues/131786) — **10 条评论**
- [#152075](https://github.com/NousResearch/hermes-agent/issues/152075) — **3 条评论**
- [#156760](https://github.com/NousResearch/hermes-agent/issues/156760) — **0 条评论**

这三个 Issue 实际指向同一类截断逻辑：先保留尾部 2,000 字符，再丢弃首个换行之前的内容；当整个输出只有一行时，最终可用文本长度可能变成零。

修复 PR：

- [#159574](https://github.com/NousResearch/hermes-agent/pull/159574)

社区诉求本质上不是单纯“增加字符上限”，而是要求通知系统正确区分：

- 单行 JSON
- 带换行的普通日志
- Bot DM 完整回复
- 超长后台进程输出

### 4.3 主动 Cron 与审批卡片

- [#158289：Hermes 主动建议创建 Cron 任务](https://github.com/NousResearch/hermes-agent/pull/158289)
- [#159023：任务变化时保持编辑审批信息真实](https://github.com/NousResearch/hermes-agent/pull/159023)
- [#159000：在调度审批卡上显示关联任务输出](https://github.com/NousResearch/hermes-agent/pull/159000)
- [#158569：增加 `cron.proactive_guidance` 开关](https://github.com/NousResearch/hermes-agent/pull/159000)
- [#159576：在完成回执中保留执行失败来源](https://github.com/NousResearch/hermes-agent/pull/159576)

用户关注点并非单纯的“自动建 Cron”，而是：

1. Hermes 能否主动识别航班、预约、习惯和待回复事项；
2. 自动建议是否透明、可拒绝；
3. 审批卡是否展示真实运行时间、实际命令和关联输出；
4. 用户拒绝或任务变化后，原任务是否保持不变；
5. 是否可以关闭主动提示但保留审批卡。

这是今日最明显的**下一版本功能路线信号**。

### 4.4 Gateway 配置热加载诉求

- [#159567：修改配置必须重启 Gateway](https://github.com/NousResearch/hermes-agent/issues/159567)
- **评论数：3**

用户希望修改 `terminal.docker_volumes`、`docker_env`、超时和辅助配置后立即生效，而不是终止全部活跃聊天。当前配置界面显示“设置成功”，运行时却不生效，容易造成状态错觉。

### 4.5 Windows 与跨平台适配

热点包括：

- [Windows terminal 超时后遗留 `grep.exe`，耗尽约 68 GB 磁盘](https://github.com/NousResearch/hermes-agent/issues/157726)
- [Windows Telegram 的带空格 MEDIA 路径重复投递](https://github.com/NousResearch/hermes-agent/issues/159408)
- [Windows Desktop 自动恢复启动提权 Gateway，导致普通实例无法连接](https://github.com/NousResearch/hermes-agent/issues/154383)
- [Windows profile 根目录被错误识别为 WSL 自动项目](https://github.com/NousResearch/hermes-agent/pull/159577)

这些反馈表明 Windows、Git Bash、WSL 和 Desktop 的组合场景仍是当前兼容性薄弱区。

---

## 5. Bug 与稳定性

### P0 / 阻断级

今日未展示明确的 P0 Issue。

### P1 / 高严重度

#### 更新后自动恢复可能选择最旧快照

- [#139012](https://github.com/NousResearch/hermes-agent/issues/139012)
- **状态：开放；当前列表中未见明确对应 fix PR**
- **风险：** 更新后可能恢复错误版本的 `state.db`，且在数据库已经替换后仍提示“自动恢复未完成”，造成状态和提示不一致。

#### Gateway 聊天路由可能被子代理会话接管

- [#159513](https://github.com/NousResearch/hermes-agent/pull/159513)
- **状态：已有 fix PR，待合并**
- **风险：** 父聊天被错误结束，用户消息和委派结果可能进入 worker transcript。

### P2 / 中高严重度

#### Gateway 子进程导致 SIGTERM 关闭挂起

- [#140162](https://github.com/NousResearch/hermes-agent/issues/140162)
- **状态：开放；今日列表中未见直接对应 PR**
- **风险：** Gateway 可见关闭阶段全部完成，但无法退出，最终可能被强制终止。

#### Gateway 进程中断后恢复会话可能重复执行命令

- [#159438](https://github.com/NousResearch/hermes-agent/issues/159438)
- **状态：开放；未见对应 fix PR**
- **风险：** `terminal` 调用在 Gateway 被杀后从会话记录中消失，恢复时模型可能再次执行同一命令，造成重复副作用。

#### Windows terminal 超时后遗留孙进程

- [#157726](https://github.com/NousResearch/hermes-agent/issues/157726)
- **状态：开放；未见对应 fix PR**
- **风险：** 孤儿 `grep.exe` 持续运行并消耗磁盘空间，已出现约 68 GB 占用案例。

#### Cron Console 静默恢复暂停任务

- [#156575](https://github.com/NousResearch/hermes-agent/issues/156575)
- **状态：已有 fix PR**
- **Fix：** [#159571](https://github.com/NousResearch/hermes-agent/pull/159571)

#### Profile 符号链接无法导入

- [#149830](https://github.com/NousResearch/hermes-agent/issues/149830)
- **状态：已有 fix PR**
- **Fix：** [#159575](https://github.com/NousResearch/hermes-agent/pull/159575)

#### 更新前自动备份被错误跳过

- [#127731](https://github.com/NousResearch/hermes-agent/issues/127731)
- **状态：开放；未见直接对应 PR**
- **风险：** 高频 Cron 引发文件变动，使约 3.6 GB 备份归档被判定不完整，用户无法获得可靠的更新前备份。

#### Gateway 配置修改不热加载

- [#159567](https://github.com/NousResearch/hermes-agent/issues/159567)
- **状态：开放；未见对应 PR**
- **风险：** 用户修改设置后实际仍使用旧配置，且必须重启全部活跃聊天。

#### Kanban `/dispatch` 绕过并发上限

- [#143222](https://github.com/NousResearch/hermes-agent/issues/143222)
- **状态：开放；未见对应 PR**
- **风险：** Dashboard 单次派发可能突破 `max_in_progress` 与 Profile 级限制，造成资源超卖。

#### Telegram 连接重试触发 Flood Control

- [#159490](https://github.com/NousResearch/hermes-agent/issues/159490)
- **状态：开放；未见对应 PR**
- **风险：** 第一次连接 20 秒超时后立即重试，触发 Telegram 限流，使每轮循环持续失败。

#### `/model` 在写入 `auth.json` 后丢失 live-only 模型

- [#139795](https://github.com/NousResearch/hermes-agent/issues/139795)
- **状态：开放；未见对应 PR**
- **风险：** 凭据指纹包含 `auth.json` 修改时间，普通配置写入也可能让模型选择器错误排除动态模型。

#### 1Password 解锁失败

- [#107998](https://github.com/NousResearch/hermes-agent/issues/107998)
- **状态：开放；未见对应 PR**
- **风险：** Desktop 集成环境下 1Password CLI 登录态无法传递给 Hermes vault，影响凭据解锁。

### P3 / 中低严重度或特定环境问题

- [#79853：macOS Desktop 高 CPU 与跨会话消息混杂](https://github.com/NousResearch/hermes-agent/issues/79853)
- [#159408：Windows Telegram MEDIA 路径重复投递](https://github.com/NousResearch/hermes-agent/issues/159408)
- [#159406：skills_guard 遇到孤立代理字符触发 UnicodeEncodeError](https://github.com/NousResearch/hermes-agent/issues/159406)
- [#156671：TodoStore 循环父级清理位置错误](https://github.com/NousResearch/hermes-agent/issues/156671)
- [#149830 的同类备份兼容问题](https://github.com/NousResearch/hermes-agent/issues/149830)
- [#82754：Cron blueprint 丢失 skills 或阻断 fallback](https://github.com/NousResearch/hermes-agent/issues/82754) — 已关闭
- [#154383：Windows Desktop 提权 Gateway 锁死普通实例](https://github.com/NousResearch/hermes-agent/issues/154383) — 已关闭
- [#159541：well-known 索引安装的 skill 无法检查或更新](https://github.com/NousResearch/hermes-agent/issues/159541) — 已关闭
- [#159565：支持 Agent Skills Discovery 0.2.0 索引](https://github.com/NousResearch/hermes-agent/issues/159565) — 已关闭

### 稳定性总体判断

- **优势：** 当天最集中的输出截断问题已经有明确修复 PR。
- **主要风险集中于：** 会话状态一致性、Gateway 子进程生命周期、跨 Profile 隔离、配置生效语义。
- **尚未看到完整修复闭环的高风险项：**  
  [#139012](https://github.com/NousResearch/hermes-agent/issues/139012)、[#159438](https://github.com/NousResearch/hermes-agent/issues/159438)、[#140162](https://github.com/NousResearch/hermes-agent/issues/140162)、[#143222](https://github.com/NousResearch/hermes-agent/issues/143222)。

---

## 6. 功能请求与路线图信号

### 6.1 统一跨平台会话

- [#62780](https://github.com/NousResearch/hermes-agent/issues/62780)
- [#158011](https://github.com/NousResearch/hermes-agent/issues/158011)
- [#86258](https://github.com/NousResearch/hermes-agent/issues/86258)

**需求：** 同一个 Agent Loop 应能在所有客户端中被定位、恢复、实时观察和追加输入，同时明确区分普通会话、子代理会话与 Profile。

**下一版本可能性：中高。**  
Desktop Sessions UI、Kanban worker transcript 和 Profile 标识相关改动均已进入 PR 阶段，说明统一会话模型正在逐步落地。

### 6.2 主动 Cron 与审批卡

- [#158289](https://github.com/NousResearch/hermes-agent/pull/158289)
- [#159023](https://github.com/NousResearch/hermes-agent/pull/159023)
- [#159000](https://github.com/NousResearch/hermes-agent/pull/159000)
- [#158569](https://github.com/NousResearch/hermes-agent/pull/158569)

**需求：** Hermes 主动发现需要稍后处理的任务，但所有创建和修改都必须经过显式审批。

**下一版本可能性：高。**  
该方向已形成多个相互衔接的 PR，包括主动建议、审批真实性、关联输出显示及关闭开关，预计会作为一组功能进入下一轮稳定发布。

### 6.3 多 Provider 凭据 Scope

- [#118285](https://github.com/NousResearch/hermes-agent/issues/118285)

**需求：** 同一 Provider 可配置多个具名凭据，例如个人与工作 API Key，并按工作空间切换。

**下一版本可能性：中。**  
需求明确且已有较多讨论，但当前列表没有对应实现 PR，更可能进入 v0.24.0 之后的设计阶段。

### 6.4 Desktop 人工注意力生命周期

- [#88549：Settle、Snooze 和 Wake 生命周期](https://github.com/NousResearch/hermes-agent/issues/88549)
- [#68769：行内批注与结构化双输入](https://github.com/NousResearch/hermes-agent/issues/68769)

**需求：** 为并行自治会话增加“已处理、稍后提醒、重新唤醒”状态，并允许用户针对回答片段做批注、同时提交主回复。

**下一版本可能性：中。**  
符合 Desktop 从执行器转向人机协作控制台的产品方向，但当前仍缺明确实现分支。

### 6.5 Agent Skills Discovery 0.2.0

- [#159565](https://github.com/NousResearch/hermes-agent/issues/159565) — 已关闭
- [#159541](https://github.com/NousResearch/hermes-agent/issues/159541) — 已关闭

**需求：** 支持 `/.well-known/agent-skills/index.json`、URL 与 digest 发现，并修复非标准 well-known 索引安装后的更新能力。

**下一版本可能性：高。**  
相关 Issue 当日关闭，表明该能力很可能已经完成或进入待合并状态。

### 6.6 REA MCP 插件持续升级

- [#159539：建议保持 REA MCP 插件跟进上游版本](https://github.com/NousResearch/hermes-agent/issues/159539)

**需求：** 当前 `rea-agents` 版本和可用工具集可能落后于 OpenCode，用户希望建立更稳定的插件升级机制。

**下一版本可能性：中低。**  
更像插件供应链维护需求，而非 Hermes 核心功能。

---

## 7. 用户反馈摘要

### 7.1 最强烈的痛点：跨客户端会话不连续

在 [#62780](https://github.com/NousResearch/hermes-agent/issues/62780) 中，用户明确指出“一个人应该能从任意客户端抵达同一个会话”，包括 CLI、Desktop、TUI、WebUI、移动端、Telegram、Discord、ACP 和 API Server。  
这说明用户已开始把 Hermes 当作多入口个人 AI 操作系统，而不仅是单一 CLI 工具；当前产品价值被会话割裂所限制。

### 7.2 输出不可见会直接破坏自动化可信度

[#131786](https://github.com/NousResearch/hermes-agent/issues/131786)、[#152075](https://github.com/NousResearch/hermes-agent/issues/152075) 和 [#156760](https://github.com/NousResearch/hermes-agent/issues/156760) 表明，用户尤其依赖：

- 单行 JSON API 结果
- Bot teammate 回复
- 长后台进程输出
- 无内部换行的模型响应

用户对“命令执行成功但完成通知为空”的容忍度很低，因为这会让 Agent 看起来像在无响应或丢结果。对应修复 [#159574](https://github.com/NousResearch/hermes-agent/pull/159574) 是今日最具用户价值的修复之一。

### 7.3 状态语义不一致会削弱操作者的控制感

Cron Console 能静默恢复暂停任务的问题（[#156575](https://github.com/NousResearch/hermes-agent/issues/156575)）体现了典型反馈：  
**CLI、`/cron run` 和 Agent Tool 都会拒绝运行暂停任务，但 Console 却会修改任务状态。**

用户不仅在意“能不能运行”，更在意系统是否尊重既有状态。主动 Cron 功能的审批卡之所以重要，也正是为了让用户明确知道系统将做什么、什么时候执行、拒绝后是否保持原状。

### 7.4 “显示已设置”不等于“实际生效”

在 [#159567](https://github.com/NousResearch/hermes-agent/issues/159567) 中，配置命令返回成功，但修改的 Docker 和 terminal 设置不生效。对于多 Profile 或多聊天用户，强制重启会中断实时会话，因此这是高频使用环境下的直接生产力问题。

### 7.5 自动化运维用户需要“可迁移、可备份、可恢复”

多个反馈集中在：

- 高频 Cron 环境中的更新前备份；
- Profile 导出后无法重新导入；
- 更新后状态数据库可能恢复到错误快照；
- Desktop 恢复时错误启动提权 Gateway。

这些用户更关注无人值守服务器的可靠性。一次错误恢复或备份失效，可能比普通 UI 缺陷影响更大。

### 7.6 Windows 用户反馈更集中、更具体

Windows 相关问题涉及进程树、WSL 项目归属、Telegram 媒体路径和 UAC 权限。相较 macOS 用户，Windows 用户的诉求往往直接落在自动化失败、磁盘耗尽和实例连接被锁死上，说明 Windows 后端仍是生产可用性的主要短板。

---

## 8. 待处理积压

### 8.1 长期开放但仍活跃的重要 Issue

#### 自动更新和状态恢复

- [#139012：更新后恢复最旧而非最新 state.db 快照](https://github.com/NousResearch/hermes-agent/issues/139012) — **P1**
- [#127731：高频 Cron 导致自动备份总被跳过](https://github.com/NousResearch/hermes-agent/issues/127731) — **P2**
- [#154383：Windows Desktop 自动恢复启动提权 Gateway](https://github.com/NousResearch/hermes-agent/issues/154383) — 已关闭，但应关注回归验证

#### 会话与 Profile 一致性

- [#62780：跨平台统一会话](https://github.com/NousResearch/hermes-agent/issues/62780)
- [#79853：macOS 高负载下跨会话消息混杂](https://github.com/NousResearch/hermes-agent/issues/79853)
- [#86258：All Profiles 最近会话缺少 Profile 标识](https://github.com/NousResearch/hermes-agent/issues/86258)
- [#143222：Kanban dispatch 绕过并发限制](https://github.com/NousResearch/hermes-agent/issues/143222)

#### Gateway 生命周期与安全

- [#140162：SIGTERM 因孤儿工具子进程而挂起](https://github.com/NousResearch/hermes-agent/issues/140162)
- [#107998：1Password 集成下 vault unlock 失败](https://github.com/NousResearch/hermes-agent/issues/107998)
- [#139795：auth.json 写入导致 live-only 模型消失](https://github.com/NousResearch/hermes-agent/issues/139795)

### 8.2 长时间开放、应尽快收敛的 PR

- [#126526：修复 Profile `main` 命名空间冲突](https://github.com/NousResearch/hermes-agent/pull/126526)  
  创建于 2026-09-28，已持续近两个月，关联会话数据隔离，应优先复核和合并。

- [#109049：串行化 checkpoint agent-write ledger 更新](https://github.com/NousResearch/hermes-agent/pull/109049)  
  创建于 2026-09-12，目标是避免并发读改写造成 ledger 丢失或损坏，属于长期稳定性事项。

### 8.3 维护风险提示

- 今日 **42/50 个 PR 待合并**，合并队列偏长。
- 部分 PR 带有 `ci-reviewed` 标记，说明技术审查完成度较高，但维护者仍需及时合并，否则 Issue 修复无法进入稳定版。
- 主动 Cron 方向存在多个堆叠或目标分支 PR，合并前需要明确依赖关系：
  - [#158289](https://github.com/NousResearch/hermes-agent/pull/158289)
  - [#159023](https://github.com/NousResearch/hermes-agent/pull/159023)
  - [#159000](https://github.com/NousResearch/hermes-agent/pull/159000)
  - [#158569](https://github.com/NousResearch/hermes-agent/pull/158569)
- 同类问题可能对应多个 PR，例如 ComfyUI 重复提交修复 PR 已明确属于 salvage：
  - [#159569](https://github.com/NousResearch/hermes-agent/pull/159569)

---

## 结论

Hermes Agent 在 2026-11-24 保持了很高的开发与社区活跃度，v0.23.4 的大规模变更收口也体现了稳定的发布能力。当天修复重点覆盖了 **输出完整性、Cron 状态、Profile 迁移、弱网更新和 Gateway 会话路由**，对实际自动化可靠性有直接改善。

不过，项目健康度仍呈“**高活跃、中等积压、结构性风险待解**”状态。下一阶段最值得维护者优先处理的是：

1. 合并 [#159513](https://github.com/NousResearch/hermes-agent/pull/159513)，防止子代理会话接管父聊天；
2. 合并 [#159574](https://github.com/NousResearch/hermes-agent/pull/159574)，恢复长单行输出和 Bot DM 完整回复；
3. 为 [#139012](https://github.com/NousResearch/hermes-agent/issues/139012)、[#159438](https://github.com/NousResearch/hermes-agent/issues/159438)、[#140162](https://github.com/NousResearch/hermes-agent/issues/140162) 明确修复方案；
4. 收敛主动 Cron 的堆叠 PR，并统一进入下一版本；
5. 清理长期开放的会话命名空间与 checkpoint 并发 PR。

**综合健康度评级：良好。**  
开发响应积极、修复覆盖度较高，但 42 个待合并 PR 和若干会话状态高风险项表明，项目正从“功能快速扩张期”进入“需要强化一致性和合并治理的阶段”。

</details>

<details>
<summary><strong>OpenHuman</strong> — <a href="https://github.com/tinyhumansai/openhuman">tinyhumansai/openhuman</a></summary>

# OpenHuman 项目动态日报

**统计日期：2026-11-24**  
**数据范围：过去 24 小时 GitHub 更新**  
**项目地址：** [tinyhumansai/openhuman](https://github.com/tinyhumansai/openhuman)

---

## 1. 今日速览

过去 24 小时 OpenHuman 共出现 **1 条 Issue 更新**和 **3 条 PR 更新**，其中 **3 个 PR 均已合并或关闭**，没有待合并 PR，整体呈现“集中交付、无明显待审积压”的状态。

今日开发重点集中在 **Rust Core 的安全沙箱、记忆隔离与 Agent Shell 权限控制**。其中，沙箱功能主 PR 在合并后出现遗漏提交，后续 PR 已补齐相关变更，说明功能推进较快，但也暴露了合并后同步与审查覆盖方面的流程风险。

本期没有新版本发布，也没有足够多的社区互动数据；Issue 和 PR 均无评论、无点赞，因此无法据此判断真实用户满意度。整体健康度评估为：**交付活跃、技术方向明确，但社区验证与发布闭环仍偏弱**。

---

## 3. 项目进展

### 3.1 沙箱 Agent Shell 权限与稳定性改进

- **PR：** [#8776 — [rust-core] feat(security): let a kernel-sandboxed agent shell rely on its jail](https://github.com/tinyhumansai/openhuman/pull/8776)
- **状态：** 已关闭，按数据口径视为已合并或完成
- **作者：** @senamakel
- **更新时间：** 2026-11-23

该 PR 允许在以下配置下运行的自主 Agent，直接依赖操作系统内核沙箱：

- `scheduled_actions = true`
- `sandbox_mode = "sandboxed"`
- `sandbox_filesystem_only = true`

其 Shell 在 **Landlock / bubblewrap（通过 TinyBox）** 约束下执行，仅可访问 Agent 自身目录。摘要指出，生产环境中的相关任务此前会在数分钟内失败；此次调整旨在减少对应用层重复安全检查的依赖，提升沙箱任务的可持续运行能力。

**推进意义：**

- 强化 Agent Shell 的最小权限边界；
- 改善定时任务和自主 Agent 在受限文件系统中的稳定性；
- 将安全能力进一步下沉至内核级沙箱机制。

---

### 3.2 补齐沙箱 PR 合并后遗漏的审查修复

- **PR：** [#8777 — [rust-core] fix(shell): follow-ups to #8776 that missed the merge](https://github.com/tinyhumansai/openhuman/pull/8777)
- **状态：** 已关闭，按数据口径视为已合并或完成
- **作者：** @senamakel
- **更新时间：** 2026-11-24

该 PR 用于补齐 #8776 合并之后才推送到原分支的 3 个提交。这些提交回应了此前代码审查意见，但未随主 PR 进入 `main`。

已知处理内容包括：

- 在第二次策略查询中保留命令词；
- 调整 `security/policy/jailed_commands.rs` 中对受限命令的判定；
- 减少路径样式词语被错误处理或遗漏检查的风险。

**推进意义：**

- 补全受限命令识别逻辑；
- 降低安全策略漏判的可能性；
- 暴露出当前分支同步和 review follow-up 流程存在缺口：合并后追加提交需要额外 PR 回收。

---

### 3.3 为辅助 Agent 增加记忆日志隔离能力

- **PR：** [#8775 — [rust-core, agent] feat(memory): omit_memory_log keeps a helper agent's turns out of memory](https://github.com/tinyhumansai/openhuman/pull/8775)
- **状态：** 已关闭，按数据口径视为已合并或完成
- **作者：** @senamakel
- **更新时间：** 2026-11-23

该 PR 新增 Agent 定义参数：

```text
omit_memory_log
```

启用后，该 Agent 的对话轮次：

- 不写入长期记忆；
- 不获取 recall pack；
- 在 turn prelude 的 `memory/lifecycle/session_hooks.rs` 中执行隔离检查；
- 参数通过 `AgentExt` 传递至会话生命周期。

**推进意义：**

- 为后台执行、辅助型或临时 Agent 提供更清晰的数据边界；
- 避免辅助任务的中间过程污染用户长期记忆；
- 提升隐私控制、记忆可解释性和上下文可控性。

---

### 今日整体进展判断

今日 3 个 PR 全部结束待处理状态，覆盖了 **Shell 沙箱、安全策略修补和长期记忆隔离** 三条关键链路。就功能覆盖面而言属于较充实的一天，但这些变更均为 PR 级更新，**尚无正式 Release 或版本发布记录**，因此暂不能确认它们已进入稳定的发行版本。

---

## 4. 社区热点

今日没有形成高互动讨论。Issue 与 PR 均为 **0 评论、0 点赞**，因此无法识别真正意义上的“热门话题”。

### Issue

- [#8774 — Concise](https://github.com/tinyhumansai/openhuman/issues/8774)
  - 状态：Open
  - 作者：@TalaStar-Digital
  - 创建/更新时间：2026-11-23
  - 评论：0；点赞：0
  - 当前内容主要是 Issue 模板说明，要求使用简洁的句首大写标题，并描述失败现象、预期结果、复现步骤等。
  - **判断：** 目前更像未完整填写的问题报告，尚不足以确认其代表明确产品诉求。

### PR

- [#8777](https://github.com/tinyhumansai/openhuman/pull/8777)
- [#8776](https://github.com/tinyhumansai/openhuman/pull/8776)
- [#8775](https://github.com/tinyhumansai/openhuman/pull/8775)

三个 PR 同样没有评论或点赞数据，无法从社区反馈中判断用户对沙箱和记忆隔离的接受程度。

### 热点诉求分析

虽然互动数据不足，但从今日 PR 主题可归纳出项目当前的核心关注点：

1. **自主 Agent 的安全执行环境**：避免 Shell 获得不必要权限，并确保受限环境下任务不会过早失败。
2. **长期记忆的数据治理**：允许辅助 Agent 排除无价值或敏感轮次，降低记忆污染。
3. **安全策略准确性**：受限命令的判定需要兼顾保守性与可用性，不能因路径类词语产生误判或漏判。

---

## 5. Bug 与稳定性

### 5.1 生产环境中的沙箱 Agent 任务快速失败

- **相关 PR：** [#8776](https://github.com/tinyhumansai/openhuman/pull/8776)
- **严重程度：中等**
- **现象：** 启用内核沙箱和文件系统限制后，部分生产任务在运行数分钟内终止。
- **影响：** 定时任务和自主 Agent 的持续执行能力受影响，可能导致后台任务未完成。
- **修复状态：** **已有对应修复 PR**，即 [#8776](https://github.com/tinyhumansai/openhuman/pull/8776)。
- **补充：** 后续审查修复通过 [#8777](https://github.com/tinyhumansai/openhuman/pull/8777) 补齐。

### 5.2 沙箱受限命令策略可能存在漏判

- **相关 PR：** [#8777](https://github.com/tinyhumansai/openhuman/pull/8777)
- **严重程度：中等偏低，取决于潜在绕过范围**
- **现象：** #8776 合并后仍有审查意见未进入主分支，主要涉及第二次策略查询中命令词的保留和受限命令识别。
- **影响：** 可能影响受限命令判断的准确性；摘要未提供已确认的利用方式或生产事故，因此不能认定为已发生的安全漏洞。
- **修复状态：** **已有 fix/follow-up PR**，见 [#8777](https://github.com/tinyhumansai/openhuman/pull/8777)。

### 5.3 主 PR 合并后遗漏提交

- **相关 PR：** [#8776](https://github.com/tinyhumansai/openhuman/pull/8776)、[#8777](https://github.com/tinyhumansai/openhuman/pull/8777)
- **严重程度：流程问题，低至中等**
- **现象：** 原分支在主 PR 合并后又推送了 3 个提交，未自动进入 `main`。
- **影响：** 若未及时补齐，审查修复可能缺失；本次已通过后续 PR 处理。
- **修复状态：** **已通过 follow-up PR 处理**，但建议维护者检查是否存在同类遗漏。

### 5.4 Issue #8774 的实际故障尚不明确

- **Issue：** [#8774](https://github.com/tinyhumansai/openhuman/issues/8774)
- **严重程度：暂无法评估**
- **现象：** 标题仅为“Concise”，正文看起来是模板或模板说明，缺少明确的失败行为、预期结果和复现步骤。
- **影响：** 暂无法判断是否存在真实 Bug。
- **修复状态：** **未发现明确关联的 fix PR**。

---

## 6. 功能请求与路线图信号

### 明确进入实现的 Agent 能力

#### 1. Agent 级长期记忆日志开关

- **PR：** [#8775](https://github.com/tinyhumansai/openhuman/pull/8775)
- **信号：** `omit_memory_log` 已进入实现阶段。
- **潜在价值：**
  - 隔离辅助 Agent 与主 Agent 的记忆；
  - 避免临时任务污染长期上下文；
  - 为隐私合规和精细化记忆管理提供基础。

这是今日最明确的功能路线图信号之一。由于 PR 已结束待处理状态，后续应关注：

- 是否被正式 Release 收录；
- 是否需要 Agent 配置格式迁移；
- 是否默认关闭以保持向后兼容；
- 是否会补充文档、配置校验和单元测试。

#### 2. 内核级沙箱成为 Agent Shell 的权限基础

- **PR：** [#8776](https://github.com/tinyhumansai/openhuman/pull/8776)
- **信号：** 项目正在强化自主执行 Agent 的最小权限模型。
- **预期方向：**
  - 更多场景默认启用 Landlock / bubblewrap；
  - 文件系统访问范围进一步收紧；
  - 沙箱失败时提供更清晰的诊断和降级策略。

#### 3. 受限命令策略继续精细化

- **PR：** [#8777](https://github.com/tinyhumansai/openhuman/pull/8777)
- **信号：** 安全策略层仍在快速迭代。
- **预期方向：**
  - 提升命令识别准确率；
  - 减少误拦截与漏拦截；
  - 可能引入更系统的策略测试集或安全回归用例。

### 来自 Issue 的需求信号

[#8774](https://github.com/tinyhumansai/openhuman/issues/8774) 当前缺少有效需求描述，无法判断是否对应具体功能请求。建议维护者要求补充复现步骤、实际影响和期望行为，再决定是否进入路线图。

---

## 7. 用户反馈摘要

今日没有可提炼的用户评论：唯一的 Issue [#8774](https://github.com/tinyhumansai/openhuman/issues/8774) 为 0 评论，三个 PR 也均无评论和点赞。

因此，目前只能从开发活动间接推断使用痛点：

- **自主定时任务在沙箱模式下可能快速失败**，反映后台任务在受限环境中仍需提升可靠性。
- **辅助 Agent 的对话可能污染长期记忆**，说明用户或维护者需要更细粒度的记忆治理机制。
- **受限命令策略需要更准确地理解上下文**，体现安全控制与可用性之间仍存在平衡问题。
- 暂无足够证据判断用户对上述能力是否满意，也未看到关于 API、文档、兼容性或安装体验的直接反馈。

---

## 8. 待处理积压

过去 24 小时的 PR 积压较低：**待合并 PR 为 0，3 个 PR 均已合并或关闭**。当前没有长期未响应的 PR 数据。

需要关注的事项如下：

1. **Issue [#8774](https://github.com/tinyhumansai/openhuman/issues/8774)**
   - 仍为 Open；
   - 无评论、无点赞；
   - 内容不完整，缺少可复现信息；
   - 建议尽快补充问题描述，否则难以分派和评估。

2. **正式发布闭环缺失**
   - 今日没有新版本发布；
   - 沙箱与记忆隔离相关变更虽然已进入合并流程，但尚无 Release 证据；
   - 建议在下次发布前完成回归测试、配置文档和升级说明。

3. **合并后遗漏提交的流程风险**
   - #8776 的 3 个后续提交未随主 PR 进入 `main`；
   - 虽然已由 [#8777](https://github.com/tinyhumansai/openhuman/pull/8777) 补齐，但应检查其他近期 PR 是否存在类似遗漏。

4. **安全策略回归测试需求**
   - [#8777](https://github.com/tinyhumansai/openhuman/pull/8777) 涉及命令词与路径类词语的策略边界；
   - 建议补充误报、漏报、绕过尝试和重复查询场景的自动化测试。

---

## 今日结论

OpenHuman 今日开发活跃度较高，**1 条 Issue 更新、3 个 PR 全部结束待处理状态**，推进重点是内核级沙箱、安全策略准确性和 Agent 长期记忆隔离。整体技术方向围绕自主 Agent 的**安全执行与数据可控性**展开，项目工程推进明显。

不过，今日没有版本发布、没有社区互动，也没有足够数据验证真实用户体验。当前最需要关注的不是功能数量，而是三项交付闭环：**补全 Issue #8774 的问题信息、为安全与记忆变更建立稳定回归测试、将已合并能力纳入正式 Release 并提供迁移文档**。

**项目健康度：良好，但发布与社区反馈信号偏弱。**

</details>

---
*本日报由 [Big Model Radar](https://github.com/96loveslife/big_model_radar) 自动生成。*
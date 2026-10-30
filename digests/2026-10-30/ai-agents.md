# OpenClaw 生态日报 2026-10-30

> Issues: 500 | PRs: 500 | 覆盖项目: 8 个 | 生成时间: 2026-10-30 05:11 UTC

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

**日期：2026-10-30**  
**项目：OpenClaw（GitHub）**  
**数据范围：过去 24 小时 Issue/PR 更新及最新 Release 信息**

---

## 1. 今日速览

- 过去 24 小时共记录 **500 条 Issue 更新**（新开/活跃 351、关闭 149）和 **500 条 PR 更新**（待合并 271、已合并/关闭 229），整体维护吞吐保持在高位。
- 今日发布了 **3 个版本**：`v2026.10.10-beta.5`、`v2026.10.9`、`v2026.9.36`，重点覆盖 Node 兼容性恢复、运行时依赖安全修复，以及网关稳定版更新。
- Issue 讨论高度集中在 **Gateway/SQLite 状态管理、记忆提升与检索、会话恢复、模型回退和消息投递可靠性**，其中多个 P0/P1 问题仍未关闭。
- PR 侧出现了明显的安全与治理增强方向：**定时任务修复权限、operator 权限边界、会话保密性、插件审核机制**；但多数关键 PR 仍标记为需要证明或安全审查。
- 综合判断：**项目活跃度很高、发布节奏较快，但稳定性与权限边界问题积压明显**。当前健康度可评为“**高活跃、中等稳定性、治理风险偏高**”。

---

## 2. 版本发布

### [v2026.10.10-beta.5](https://github.com/openclaw/openclaw/releases/tag/v2026.10.10-beta.5)

#### 主要更新

- 恢复 Node.js 安装与更新兼容性，支持：
  - `>=24.16.0 <25`
  - `>=26.1.0`
- Node 24.22.1 和 26.12.1 被列为安全推荐版本，而不是硬性最低版本。
- 修复 Node 26 worker 在 stdin 为文件时异常退出的问题。

#### 破坏性变更

- Release Notes 中未明确列出破坏性 API 变更。
- Node 版本约束发生了调整，较旧 Node 环境应重新确认支持范围。

#### 迁移建议

- 升级到 Node **24.22.1** 或 **26.12.1**，避免仅停留在最低兼容版本。
- Node 26 部署应重点回归 stdin 重定向、文件输入及 worker 生命周期。
- Beta 版本发布后，建议先在单机 Gateway 和多 Agent 环境中验证，再进入生产环境。

---

### [v2026.10.9](https://github.com/openclaw/openclaw/releases/tag/v2026.10.9)

#### 主要更新

- 修复运行时依赖漏洞：
  - `fast-uri` 升级至 **4.2.3**，加强 MCP schema 校验对畸形 URI scheme 和 host 的拒绝能力。
  - A2UI 与 Discord embedded app SDK 对超大 Zod collection 提前拒绝。
  - IMAP sender parsing 使用 `nodemailer 10.1.4`，降低伪造发件人信息造成的安全风险。

#### 破坏性变更

- 未在提供的 Release 摘要中看到明确破坏性变更。
- 依赖升级可能改变畸形输入、超大集合和邮件发件人解析的拒绝行为，属于安全收紧。

#### 迁移建议

- 部署后重点回归：
  - MCP schema 中包含异常 URI 的请求。
  - A2UI、Discord SDK 中超大集合输入。
  - IMAP 邮件解析及发件人展示。
- 建议同步审计网关日志，确认新版是否开始记录此前被接受的恶意或异常请求。

---

### [v2026.9.36](https://github.com/openclaw/openclaw/releases/tag/v2026.9.36)

- 该版本为 Gateway-only 的 **`extended-stable`**，是项目当前等价于 LTS 的稳定发布线。
- 包含 2026 年 9 月底代码基线，以及后续的关键安全更新、可靠性与性能修复和新模型支持。
- 适合作为要求稳定性的生产部署基线；与 10.x beta/稳定版本的差异应在上线前进行兼容性核对。

---

## 3. 项目进展

### 已合并或关闭的重要 PR

#### 1. 会话读取失败不再触发模型切换

- [PR #188080：keep session-read failures from switching models](https://github.com/openclaw/openclaw/pull/188080)
- 将本地 `SessionEntryChangedDuringReadError` 与模型供应商故障区分，避免一次本地会话一致性错误无意义地消耗整个 fallback chain。
- **意义**：改善回退策略准确性，防止不必要的跨模型调用与费用。
- 状态：已关闭，Issue [#188064](https://github.com/openclaw/openclaw/issues/188064) 获对应处理。

#### 2. Gateway 历史记录清理不可见空尝试

- [PR #188111：drop empty completed attempts from history](https://github.com/openclaw/openclaw/pull/188111)
- 删除无恢复需求的 `stop`/`length` 空 assistant attempt，同时保留空错误记录。
- **意义**：提升会话历史可读性，并维持失败恢复语义。
- 状态：已关闭。

#### 3. `/tools` 补全 brokered GitHub 工具

- [PR #187910：include brokered GitHub tools in /tools](https://github.com/openclaw/openclaw/pull/187910)
- 修复托管会话中 `github_publish`、`github_identity_status` 等工具未出现在 `/tools` 清单的问题。
- **意义**：使用户看到的工具能力与 Agent 实际可用能力保持一致。
- 状态：已关闭。

#### 4. Linux service CI 对齐已安装配置

- [PR #188104：align selected Linux service CI with installed profiles](https://github.com/openclaw/openclaw/pull/188104)
- 修正服务安装测试中的 profile 保留行为，使其与实际安装命令声明一致。
- **意义**：增强 Linux 服务部署路径的回归保障。
- 状态：已关闭。

#### 5. 性能测量代码去重

- [PR #188103：share sampled heap byte reduction](https://github.com/openclaw/openclaw/pull/188103)
- 将 44 个性能脚本重复的 whole-profile heap-byte reduction 逻辑抽为共享实现。
- **意义**：主要是内部维护质量改善，本身不宣称直接提升运行时性能。

#### 6. Provider thinking-profile 文档补全

- [PR #188082：record catalog thinking-profile rules for new providers](https://github.com/openclaw/openclaw/pull/188082)
- 补充新 Provider 接入 catalog thinking profile 的规则。
- **意义**：降低后续 Provider 接入过程中的重复试错和评审成本。
- 状态：已关闭。

#### 7. MS Teams Unicode 搜索修复

- [PR #188108：message search misses text in a different Unicode normalization form](https://github.com/openclaw/openclaw/pull/188108)
- 修复消息内容与查询仅 Unicode normalization form 不同时，Teams 消息搜索无法命中的问题。
- **意义**：提升跨 macOS/iOS/Windows 客户端的搜索一致性。
- 状态：已关闭。

#### 8. Control UI locale 刷新

- [PR #188109：refresh control ui locales](https://github.com/openclaw/openclaw/pull/188109)
- 同步自动生成的 Control UI 多语言资源。
- 状态：已关闭。

### 整体推进程度

过去 24 小时有 **229 条 PR 进入已合并/关闭状态**，表明代码吞吐非常高。此次已关闭 PR 覆盖了模型回退、会话历史、工具发现、部署测试、Unicode 搜索与插件文档等层面。不过，部分关键修复仍停留在待证明或安全审查阶段，因此“提交量高”尚不能完全等同于“生产稳定性已经收敛”。

---

## 4. 社区热点

### 4.1 Gateway WAL 自动 checkpoint 长期被 reader 阻塞

- [Issue #164294：Gateway state DB WAL auto-checkpoint never completes](https://github.com/openclaw/openclaw/issues/164294)
- **38 条评论**，为今日列表中讨论最多。
- 状态：P2、OPEN；自 2026-10-03 起持续更新。
- 核心诉求：Gateway 自启动后，`state/openclaw.sqlite` 的 WAL checkpoint 每一次都显示 blocked，且 checkpointed frame 长期没有推进。
- 社区关注点：
  - SQLite WAL 长期增长与维护风险；
  - Gateway 内部 reader 与 checkpoint 调度之间的资源协调；
  - 这是否与近期大量 session reclamation、lease 和恢复问题属于同一底层故障链。

### 4.2 短期 recall 在 512 条上限后无法完成 dreaming promotion

- [Issue #150635：short-term recall retention evicts recalled entries nightly](https://github.com/openclaw/openclaw/issues/150635)
- **23 条评论**，更新至 2026-10-30。
- 状态：P2、OPEN、stale。
- 核心诉求：夜间 dreaming deep phase 在短期 recall 达到 512 条上限后，无法再把候选提升到长期记忆。
- 背后需求：
  - 记忆容量不能只靠淘汰，而应保证高价值候选可晋升；
  - 召回次数、查询次数和提升策略之间需要更稳定的闭环。

相关问题：

- [Issue #164923：单 workspace 提升率为 0/512，其他 workspace 为 50–90%](https://github.com/openclaw/openclaw/issues/164923)
- [Issue #172547：排除 fenced dreaming ranges，防止梦境内容进入检索和 recall](https://github.com/openclaw/openclaw/issues/172547)
- [Issue #157827：合并 REM 条目时引用范围与实际文本不一致](https://github.com/openclaw/openclaw/issues/157827)

这些 Issue 共同表明：**记忆系统当前存在容量淘汰、候选晋升、索引污染和证据引用四个层面的耦合问题。**

### 4.3 exec denylist 安全策略持续推动

- [Issue #6615：Add denylist support for exec-approvals](https://github.com/openclaw/openclaw/issues/6615)
- **12 条评论、8 个 👍**，是开放 Issue 中反应较高的一项。
- 同类重复请求 [Issue #71097](https://github.com/openclaw/openclaw/issues/71097) 已于今日关闭。
- 诉求：为命令执行审批增加 denylist，在“默认允许但高危命令仍需阻断或确认”的场景中提供比纯 allowlist 更实用的策略。

### 4.4 Codex 原生子 Agent assignment 完成后未清理

- [Issue #172837：nativeSubagentAssignments are never removed after completion delivery gives up](https://github.com/openclaw/openclaw/issues/172837)
- **18 条评论**，P1。
- 状态：OPEN，无现成 fix PR。
- 影响：子 Agent completion delivery 放弃后，assignment 记录未清理；之后每个父线程都会再次 pin 和发送同一任务，可能造成重复消息与状态膨胀。

### 4.5 Skill Workshop 自动修改技能引发治理担忧

- [Issue #184600：Skill Workshop has become a deadly plague](https://github.com/openclaw/openclaw/issues/184600)
- **7 条评论**，P2。
- 诉求：Skill Workshop 在后台自动修改影响 Agent 行为的技能，但缺少用户审核和同意门。
- 相关问题：[Issue #177505](https://github.com/openclaw/openclaw/issues/177505) 指出后台 experience review 在工具参数无效时可能无限重试，且缺少可见的 retry/turn cap。

### 4.6 插件推荐 Prompt 与会话保密性成为新功能热点

- [PR #186593：add manifest-backed recommended prompts](https://github.com/openclaw/openclaw/pull/186593)
- [PR #187836：add creator-only and named-audience confidentiality](https://github.com/openclaw/openclaw/pull/187836)
- 两者均直接面向插件生态和多用户 Gateway：
  - 前者希望插件作者提供完整 starter prompt，并通过现有安装、启用与 consent 流程打开草稿；
  - 后者希望独立于 Draft 状态和参与成员关系，配置仅创建者/管理员或指定名单可读写的会话。

---

## 5. Bug 与稳定性

### P0 / 发布阻断级

#### 1. 崩溃恢复后 Agent 永久不可用

- [Issue #166634：Late reclamation commit checkpoint failure leaves agent unavailable after crash recovery](https://github.com/openclaw/openclaw/issues/166634)
- 状态：P0、OPEN。
- 影响：Gateway 非正常退出后，报 `SQLite session reclamation commit checkpoint expired`，Agent 持续拒绝 `chat.history`、`chat.metadata`、`models.list` 等请求。
- Fix PR：未发现明确对应 PR。

#### 2. Gateway 启动阻塞 40–200 秒并进入重启循环

- [Issue #162211：Startup blocks the Gateway event loop for 40–200s](https://github.com/openclaw/openclaw/issues/162211)
- 状态：P0、OPEN。
- 影响：健康监控将启动期卡顿误判为断连，继而升级为重启循环。
- Fix PR：未发现明确对应 PR。

#### 3. 睡眠唤醒后模型 runtime 无法恢复

- [Issue #158592：prepared model runtime publication for one agent times out and never recovers](https://github.com/openclaw/openclaw/issues/158592)
- 状态：P0、OPEN。
- 影响：macOS 主机休眠唤醒后，`main` Agent 的模型 runtime 发布超时，所有入站消息报 `runtime owner was not published`，通常必须重启 Gateway。
- Fix PR：未发现明确对应 PR。

### P1 / 严重稳定性与消息可靠性

#### 4. Native host exec 共享状态完整性校验失败

- [Issue #177656：Native host exec returns shared-state integrity-admission error](https://github.com/openclaw/openclaw/issues/177656)
- 状态：P1、OPEN；stable 2026.10.5 至少有 28 次失败报告。
- 影响：执行完成后的 child cleanup 因身份丢失而失败，可能无法确认子进程效果。
- Fix PR：未发现明确对应 PR。

#### 5. Gateway 状态生命周期 lease 冲突

- [Issue #159094：Gateway owns state-lifecycle lease but internal workers report another OpenClaw process owns state-lifecycle](https://github.com/openclaw/openclaw/issues/159094)
- 状态：P1、OPEN。
- 影响：数据库执行准入被关闭，内部 Worker 误判存在另一个 OpenClaw 进程持有 lease。
- 相关问题：[Issue #176342](https://github.com/openclaw/openclaw/issues/176342) 指出 unclean shutdown 后 stale-lease integrity gate 会串行化 Agent 启动，造成分钟级不可用。
- Fix PR：未发现明确对应 PR。

#### 6. Telegram 回调 payload 被静默丢弃

- [Issue #126950：opaque callback payloads silently dropped for non-plugin callers](https://github.com/openclaw/openclaw/issues/126950)
- 状态：P1、OPEN。
- 影响：非插件调用方生成的 `tgcb1:` callback 在点击后被直接忽略。
- Fix PR：数据中未显示明确对应 PR。

#### 7. claude-cli 多 Agent 可见性矩阵失效

- [Issue #164972：claude-cli multi-agent teams end-to-end matrix under visibility agent/tree/all](https://github.com/openclaw/openclaw/issues/164972)
- 状态：P2 标签但涉及多 Agent 上下文完整性，属于高风险行为问题。
- 影响：clarification、follow-up、parent context 均可能失效，部分失败还表现为“看似成功”。
- Fix PR：未发现明确对应 PR。

#### 8. Telegram 静默策略触发公开错误循环

- [Issue #178717：Telegram intentional group silence triggers visible-answer retries](https://github.com/openclaw/openclaw/issues/178717)
- 状态：P2、OPEN。
- 影响：群聊中故意返回 `NO_REPLY`，系统却将其判断为缺少可见答案并重试，最终可能在群内发出通用失败通知。
- Fix PR：未发现明确对应 PR。

#### 9. `doctor --fix` 卡死或阻塞迁移

- [Issue #178359：doctor --fix --non-interactive idles for 15+ min](https://github.com/openclaw/openclaw/issues/178359)
- 状态：P1、OPEN。
- 影响：修复流程停在 plugin-capture 阶段，无法进入 Agent DB 修复。
- Fix PR：未发现明确对应 PR。

- [Issue #179481：doctor --fix refuses transcript-directives while Gateway is running](https://github.com/openclaw/openclaw/issues/179481)
- 状态：P2、OPEN、stale。
- 影响：Gateway 运行时没有在线迁移路径，后续 doctor 步骤全部被阻断。
- Fix PR：未发现明确对应 PR。

#### 10. Transcript 幂等冲突触发跨 Provider fallback

- [Issue #177909：transcript idempotency conflict is treated as a model failure](https://github.com/openclaw/openclaw/issues/177909)
- 状态：P1、OPEN。
- 影响：内部 transcript 冲突被误分类为模型失败，导致整个跨 Provider fallback chain 被耗尽。
- Fix PR：未发现明确对应 PR。

### P2 / 重要但影响范围相对可控

- [Issue #150635：短期 recall 夜间淘汰导致 dreaming 无法 promotion](https://github.com/openclaw/openclaw/issues/150635)  
  **Fix PR：未发现明确对应 PR。**
- [Issue #120385：Code Mode 在 cron/memory-flush turn 缺少 MCP 工具](https://github.com/openclaw/openclaw/issues/120385)  
  **Fix PR：未发现明确对应 PR。**
- [Issue #172837：Codex nativeSubagentAssignments 不清理](https://github.com/openclaw/openclaw/issues/172837)  
  **Fix PR：未发现明确对应 PR。**
- [Issue #164394：Control UI WebChat 长历史滚动持续抖动](https://github.com/openclaw/openclaw/issues/164394)  
  **Fix PR：未发现明确对应 PR。**
- [Issue #143017：持久 session 重写前缀，造成 21.3M cache-write tokens](https://github.com/openclaw/openclaw/issues/143017)  
  **Fix PR：未发现明确对应 PR。**
- [Issue #148789：模型 fallback 错误归因到最后一个候选模型](https://github.com/openclaw/openclaw/issues/148789)  
  **Fix PR：未发现明确对应 PR。**
- [Issue #112638：session maintenance 限制不约束 thread/channel 条目](https://github.com/openclaw/openclaw/issues/112638)  
  **Fix PR：未发现明确对应 PR。**
- [Issue #166526：大型状态下幂等 Doctor 耗时约 473 秒](https://github.com/openclaw/openclaw/issues/166526)  
  **Fix PR：未发现明确对应 PR。**
- [Issue #155457：Anthropic 大型编辑时流式 JSON 参数偶发损坏](https://github.com/openclaw/openclaw/issues/155457)  
  **Fix PR：未发现明确对应 PR。**
- [Issue #160762：Telegram + claude-cli 中途消息丢失且正文错配](https://github.com/openclaw/openclaw/issues/160762)  
  **Fix PR：未发现明确对应 PR。**
- [Issue #153706：已关闭 ACP session 被错误投影为 Codex native runtime](https://github.com/openclaw/openclaw/issues/153706)  
  **Fix PR：未发现明确对应 PR。**
- [Issue #172969：registerCliBackend 缺少 modelProvider 时静默丢弃](https://github.com/openclaw/openclaw/issues/172969)  
  **Fix PR：未发现明确对应 PR。**
- [Issue #164690：claude-cli 重复启动 stdio MCP server，额外内存约 144 MB/child](https://github.com/openclaw/openclaw/issues/164690)  
  **Fix PR：未发现明确对应 PR。**
- [Issue #178373：Agent loop 缺少 run-level turn/token budget](https://github.com/openclaw/openclaw/issues/178373)  
  **Fix PR：未发现明确对应 PR。**
- [Issue #167667：ChatGPT Responses continuation 无法 replay](https://github.com/openclaw/openclaw/issues/167667)  
  **Fix PR：未发现明确对应 PR。**
- [Issue #167876：Talk consultation 在 session setup 后丢失 caller authority](https://github.com/openclaw/openclaw/issues/167876)  
  **Fix PR：未发现明确对应 PR。**
- [Issue #158070：lane queue 等待导致 preflight compaction 失败并取消 delivery](https://github.com/openclaw/openclaw/issues/158070)  
  **Fix PR：未发现明确对应 PR。**

### 已出现明确修复路径的问题

- [PR #187427：doctor --fix 清理指向已删除插件 generation 的 Codex appServer.command](https://github.com/openclaw/openclaw/pull/187427)  
  对应 [Issue #181037](https://github.com/openclaw/openclaw/issues/181037)，PR 已提交但仍待证明。
- [PR #187016：安装路径末尾包含空白时按字面路径安装插件](https://github.com/openclaw/openclaw/pull/187016)  
  已形成明确修复 PR。
- [PR #188066：system-agent 等待 hosted setup 结算后再 dispose](https://github.com/openclaw/openclaw/pull/188066)  
  对应 [Issue #127459](https://github.com/openclaw/openclaw/issues/127459)，已关闭并有对应测试/PR 状态。
- [PR #188089：阻止 pnpm fallback cache 进入 guest workspace sync](https://github.com/openclaw/openclaw/pull/188089)  
  对应 [Issue #188068](https://github.com/openclaw/openclaw/issues/188068)。
- [PR #188078：在媒体失败标记中保留 Provider 状态码和错误码](https://github.com/openclaw/openclaw/pull/188078)  
  对应 [Issue #188043](https://github.com/openclaw/openclaw/issues/188043)。

---

## 6. 功能请求与路线图信号

### 6.1 exec denylist：安全策略的重要下一步

- [Issue #6615](https://github.com/openclaw/openclaw/issues/6615)
- [Issue #71097](https://github.com/openclaw/openclaw/issues/71097)（已关闭）
- 需求非常明确，且已有用户重复提交，说明不是边缘场景。
- **下一版本可能性：较高**。理由是需求已产品化，且与当前命令审批、安全边界方向一致；但仍需维护者、安全和产品评审确认默认行为。

### 6.2 记忆审计日志

- [Issue #20935：Audit log for agent memory changes](https://github.com/openclaw/openclaw/issues/20935)
- **状态：今日关闭**，但数据未显示对应合并 PR。
- 诉求是记录 MEMORY.md 变更来源，帮助解释“为什么被记住”，并提高防篡改能力。
- 与 [Issue #184600](https://github.com/openclaw/openclaw/issues/184600) 的 Skill Workshop 自动变更治理高度相关。
- **下一版本可能性：中等偏高**，尤其在多 Agent 和自动技能学习场景下，审计需求会继续增强。

### 6.3 Agent 自主触发 context compaction

- [Issue #6757：Agent-triggered context compaction](https://github.com/openclaw/openclaw/issues/6757)
- 当前只能由用户执行 `/compact`，Agent 无法自主压缩上下文。
- [PR #129388](https://github.com/openclaw/openclaw/pull/129388) 正在实现 context-pressure-aware continuation，包含 `continue_work`、`continue_delegate` 和 `request_compaction`。
- **下一版本可能性：高**，但该 PR 标记为 XL、跨多模块、需要安全审查和端到端证明，落地节奏可能受兼容性与 session-state 风险影响。

### 6.4 Dream Diary 语言和 Prompt 可配置

- [Issue #79223：configurable Dream Diary language / prompt](https://github.com/openclaw/openclaw/issues/79223)
- 用户希望非英语工作区能够生成中文或其他目标语言的 `DREAMS.md`。
- **下一版本可能性：中等**，实现成本相对可控，但需先明确与多 Agent 记忆隔离、dreams 索引策略的关系。

### 6.5 Plugin 推荐 Prompt

- [PR #186593](https://github.com/openclaw/openclaw/pull/186593)
- 通过 manifest 提供插件作者编写的完整 starter prompts，并复用正常安装、启用和 consent 流程。
- **下一版本可能性：中高**。功能边界清晰，但 PR 体积为 XL，且涉及插件权限和 UI 工作流，需完成兼容性验证。

### 6.6 多用户会话保密性

- [PR #187836](https://github.com/openclaw/openclaw/pull/187836)
- 支持 creator-only、admin-only 和 named-audience 会话。
- **下一版本可能性：中等**。对多用户 Gateway 是明显缺口，但涉及身份、授权、会话恢复与迁移，产品和安全设计要求较高。

### 6.7 Scoped operator 管理自动化

- [PR #188090](https://github.com/openclaw/openclaw/pull/188090)
- 新增 `operator.cron`，让经认证、具备写权限的 operator 可以通过 Agent 管理自己的自动化。
- **下一版本可能性：中高**，但标记为 security-boundary，必须重点验证“只能管理自身任务”是否被严格隔离。

### 6.8 Control UI 快捷键可配置

- [Issue #163739](https://github.com/openclaw/openclaw/issues/163739)
- `Ctrl+Shift+A` / `⌘⇧A` 与浏览器快捷键冲突，当前不可禁用或重映射。
- **下一版本可能性：中等**，属于低风险 UI 改进，但用户明确要求“可配置”。

### 6.9 Model provider 扩展

- [PR #187135：add Particle model provider](https://github.com/openclaw/openclaw/pull/187135)
- 新增 `particle` provider、`PARTICLE_API_KEY` 认证及交互式/非交互式 onboarding。
- **下一版本可能性：较高**，但属于依赖变更和 Provider 生态扩展，需要完整兼容验证。

---

## 7. 用户反馈摘要

### 主要痛点

1. **升级、修复和状态恢复路径不够可靠**  
   用户在 `doctor --fix`、Gateway 更新、崩溃恢复和睡眠唤醒场景中频繁遇到卡死、锁竞争、lease 误判或无法恢复。相关代表：  
   [Issue #178359](https://github.com/openclaw/openclaw/issues/178359)、[Issue #186813](https://github.com/openclaw/openclaw/issues/186813)、[Issue #158592](https://github.com/openclaw/openclaw/issues/158592)。

2. **长会话场景下 SQLite 维护与内存回收压力明显**  
   WAL checkpoint 不完成、Doctor 耗时数百秒、session maintenance 限制失效，反映大型状态下的可维护性问题。代表：  
   [Issue #164294](https://github.com/openclaw/openclaw/issues/164294)、[Issue #166526](https://github.com/openclaw/openclaw/issues/166526)、[Issue #112638](https://github.com/openclaw/openclaw/issues/112638)。

3. **记忆系统“能存但难晋升、难解释、难隔离”**  
   用户既面临 recall 达到上限后无法 promotion，也担忧多 Agent dreaming 污染身份、梦境内容进入索引，以及 Skill Workshop 自动修改行为。代表：  
   [Issue #150635](https://github.com/openclaw/openclaw/issues/150635)、[Issue #65374](https://github.com/openclaw/openclaw/issues/65374)、[Issue #184600](https://github.com/openclaw/openclaw/issues/184600)。

4. **跨 Provider fallback 缺乏清晰的错误分类**  
   transcript 冲突、session-read 失败、harness/session 错误常被误判为 Provider 失败，既浪费模型资源，也掩盖真正根因。代表：  
   [Issue #177909](https://github.com/openclaw/openclaw/issues/177909)、[Issue #148789](https://github.com/openclaw/openclaw/issues/148789)、[PR #188080](https://github.com/openclaw/openclaw/pull/188080)。

5. **多渠道消息语义不一致**  
   Telegram 回调被丢弃、steer 模式中途消息丢失且正文错配、群聊静默被误判为失败。代表：  
   [Issue #126950](https://github.com/openclaw/openclaw/issues/126950)、[Issue #160762](https://github.com/openclaw/openclaw/issues/160762)、[Issue #178717](https://github.com/openclaw/openclaw/issues/178717)。

6. **CLI/MCP 运行成本高且可观测性不足**  
   claude-cli 会重复启动 stdio MCP server，每个 child 额外约 144 MB；与此同时 CLI 工具活动又曾未出现在 session tail 和 trajectory export 中。代表：  
   [Issue #164690](https://github.com/openclaw/openclaw/issues/164690)、[PR #188069](https://github.com/openclaw/openclaw/pull/188069)。

### 满意与积极信号

- 已关闭的 [PR #187910](https://github.com/openclaw/openclaw/pull/187910) 修复了 `/tools` 与实际工具能力不一致，方向受到用户认可。
- [PR #188069](https://github.com/openclaw/openclaw/pull/188069) 补足 CLI 工具调用可观测性，有助于建立“执行了什么”的审计链。
- [PR #188050](https://github.com/openclaw/openclaw/pull/188050) 修复 Control UI 在 WebKit 下 PDF 附件预览空白，并提供截图证明，属于较完整的用户侧改进。
- [PR #188097](https://github.com/openclaw/openclaw/pull/188097) 排除预构建 Brotli sidecar，恢复超过 1,200 个 package entry 的预算余量，有利于发布包稳定性。
- [PR #187751](https://github.com/openclaw/openclaw/pull/187751)、[PR #187016](https://github.com/openclaw/openclaw/pull/187016) 等修复体现了项目对路径、空格、Unicode 等边界条件的持续关注。

### 不满意与信任风险

- 多个 Issue 被标记为 `stale`、`needs-maintainer-review`、`needs-product-decision` 或 `no-new-fix-pr`，说明用户反馈并未总能快速转化为可验证补丁。
- 自动技能修改缺少审核门，直接触及用户对 Agent 行为可控性的信任基础。
- 大量问题跨多个版本仍持续出现，部分用户可能认为升级本身不能解决可靠性问题。

---

## 8. 待处理积压

### 需要维护者优先处理的长期 Issue

1. **[Issue #164294：WAL checkpoint 永不完成](https://github.com/openclaw/openclaw/issues/164294)**  
   自 10 月初持续讨论，评论最多；应确认是否与 session reclamation、lease 和长事务问题共享根因。

2. **[Issue #150635：Dreaming promotion 在 recall 上限后失效](https://github.com/openclaw/openclaw/issues/150635)**  
   自 9 月中旬持续未解决，并被标为 stale；应与 [#164923](https://github.com/openclaw/openclaw/issues/164923)、[#172547](https://github.com/openclaw/openclaw/issues/172547) 合并治理。

3. **[Issue #65374：Dreaming 在多 Agent 环境污染 Agent 身份](https://github.com/openclaw/openclaw/issues/65374)**  
   涉及安全、Session State 和数据隔离，且标为 P1；需要明确记忆边界和迁移方案。

4. **[Issue #120385：Code Mode 工具目录不完整](https://github.com/openclaw/openclaw/issues/120385)**  
   自 8 月起长期开放，直接影响 cron、memory flush 和工具发现，应尽快形成统一工具目录来源。

5. **[Issue #143017：Prompt cache 前缀频繁重写](https://github.com/openclaw/openclaw/issues/143017)**  
   已有生产流量测量，且给出 21.3M cache-write tokens 数据；成本影响明确，应安排专项优化。

6. **[Issue #6615：exec denylist](https://github.com/openclaw/openclaw/issues/6615)**  
   自 2 月持续推进，已有较高用户反应和重复 Issue；需要从讨论转入安全设计与实现排期。

7. **[Issue #179481](https://github.com/openclaw/openclaw/issues/179481)、[Issue #178359](https://github.com/openclaw/openclaw/issues/178359)、[Issue #166526](https://github.com/openclaw/openclaw/issues/166526)**  
   Doctor 修复路径同时存在“运行中拒绝迁移”“长时间静默卡住”和“大型状态超出预算”的问题，应统一设计在线迁移与超时策略。

### 需要关注的长周期 PR

- **[PR #129388：context-pressure-aware continuation](https://github.com/openclaw/openclaw/pull/129388)**  
  创建时间跨度较长，涉及 CLI、Gateway、Agents、Codex、xAI、OTel、session state 和安全边界；当前仍需证明与安全审查。

- **[PR #186593：manifest-backed recommended prompts](https://github.com/openclaw/openclaw/pull/186593)**  
  XL 规模、涉及插件安装/授权/UI，需要避免因功能扩张造成权限边界模糊。

- **[PR #187836：creator-only and named-audience confidentiality](https://github.com/openclaw/openclaw/pull/187836)**  
  涉及会话身份和保密模型，建议在合并前补充迁移、兼容性及权限测试。

- **[PR #188090：scoped operators manage their automations](https://github.com/openclaw/openclaw/pull/188090)**  
  涉及 `operator.cron` 权限授予，必须验证越权、任务归属和跨用户访问场景。

---

## 项目健康度结论

| 维度 | 评价 | 依据 |
|---|---|---|
| 开发活跃度 | **高** | 24 小时 500 条 Issue 更新、500 条 PR 更新，229 条 PR 已合并/关闭 |
| 发布活跃度 | **高** | 24 小时内 3 个 Release，覆盖 beta、补丁稳定版和 extended-stable |
| 功能推进 | **中高** | 插件、Provider、自动化、记忆、Control UI 等方向均有新 PR |
| 稳定性 | **中等偏低** | 多个 P0/P1 涉及启动、恢复、消息丢失、lease、SQLite checkpoint |
| 社区参与度 | **高** | 多个 Issue 获得 17–38 条评论，exec denylist 等功能请求有较高认可度 |
| 安全治理 | **待改善** | 权限边界 PR 增多，但 Skill Workshop 自动变更和多用户会话保密仍存在缺口 |
| 技术债/积压 | **偏高** | 多个问题跨 2–3 个月未闭环，部分长周期 PR 仍待证明或安全审查 |

**总体判断：OpenClaw 正处于高速度扩张期，功能和生态迭代明显，但底层状态管理、恢复可靠性与多用户/多 Agent 治理尚未完全跟上。下一阶段最值得优先投入的是：SQLite/Gateway 状态一致性、Doctor 与更新恢复路径、记忆系统边界、fallback 错误分类，以及自动行为变更的审核机制。**

---

## 横向生态对比

# 个人 AI 助手 / 自主智能体开源生态横向分析

**分析日期：2026-10-30**  
**比较项目：** OpenClaw、NanoBot、PicoClaw、IronClaw、LobsterAI、QwenPaw、Hermes Agent、OpenHuman

---

## 1. 生态全景

当前个人 AI 助手与自主智能体生态处于**高活跃、强扩张、重治理**阶段：8 个项目当日合计更新约 **153 条 Issue、177 条 PR**，其中 OpenClaw、Hermes Agent 和 QwenPaw 贡献了主要社区与开发流量。竞争重点已从单一模型调用转向 **多渠道接入、长期记忆、多 Agent 协作、插件生态、沙箱安全和桌面端体验**，但各项目的最大共同短板也很明确：状态恢复、配置一致性、权限边界和发布闭环仍不稳定。成熟度呈明显分层：OpenClaw 已成为高吞吐平台型项目，QwenPaw、Hermes Agent 正处于架构重构期，NanoBot、PicoClaw、OpenHuman 偏向工程收敛，而 IronClaw 当前主要是基础设施维护。

---

## 2. 各项目活跃度对比

> 说明：Issue/PR 数为日报提供的过去 24 小时更新数；“已关闭”在多数项目中可能包含合并后关闭，不能全部等同于已发布。

| 项目 | Issues | PR | Release | 今日推进状态 | 健康度 |
|---|---:|---:|---|---|---|
| **OpenClaw** | 500 | 500 | **3 个**：`v2026.10.10-beta.5`、`v2026.10.9`、`v2026.9.36` | 229 条 PR 合并/关闭，功能、修复、安全治理并行 | **高活跃、中等稳定性、治理风险偏高** |
| **NanoBot** | 2 | 22 | 无 | 13 条 PR 合并/关闭，集中处理运行时、Gateway、重试、Provider | **开发健康，质量收敛中** |
| **PicoClaw** | 0 | 20 | 无 | 20 条 PR 全部关闭，多 Agent、渠道、Provider、安全同步整合 | **代码整合健康，发布与反馈偏弱** |
| **IronClaw** | 0 | 2 | 无 | 仅有 2 个 Wasmtime Dependabot PR 待合并 | **稳定但低活跃** |
| **LobsterAI** | 2 | 6 | 无 | 6 条 PR 全部关闭，集中于媒体兼容、Agent 热更新、CoWork UI | **开发中等偏高，交付与申诉响应偏弱** |
| **QwenPaw** | 12 | 35 | 无 | 11 条 PR 合并/关闭，24 条待合并；架构重构规模大 | **高活跃、Beta 稳定性承压** |
| **Hermes Agent** | 50 | 50 | 无 | 50 条 PR 全部待合并，今日无合并 | **中高活跃、发布转化不足** |
| **OpenHuman** | 1 | 8 | 无 | 3 条 PR 关闭、5 条待合并，Docker 发布链路受阻 | **中高活跃，发布稳定性有风险** |

### 活跃度分层

1. **平台型超活跃项目：OpenClaw**  
   单日 1,000 条 Issue/PR 更新，并有 3 个 Release，规模和吞吐显著领先。

2. **高速开发与架构重构型：QwenPaw、Hermes Agent**  
   QwenPaw 的插件化、模型和记忆后端重构，以及 Hermes 的 Desktop、Docker、Profile 与插件治理，都在快速推进，但合并和发版压力较大。

3. **工程收敛型：NanoBot、OpenHuman**  
   NanoBot 重点改善运行时生命周期、重试和消息可靠性；OpenHuman 重点补齐 Docker、Shell sandbox、渠道 Hook 和预算控制。

4. **功能整合型：PicoClaw、LobsterAI**  
   PicoClaw 批量整合多 Agent、渠道和安全能力；LobsterAI 聚焦桌面端 CoWork、媒体和 OpenClaw/IM Agent 体验。

5. **低活跃维护型：IronClaw**  
   今日只有 Wasmtime 依赖升级，缺乏用户可见功能与社区讨论。

---

## 3. OpenClaw 在生态中的定位

### 生态角色

OpenClaw 已不只是众多个人 AI 助手项目之一，而更接近当前的**个人智能体操作平台与生态入口**：向上承载多渠道、插件、Provider 和技能，向下连接 Gateway、Agent、会话、记忆、工具执行与权限治理。

### 相对优势

| 维度 | OpenClaw 的优势 |
|---|---|
| **生态规模** | 单日 500 条 Issue、500 条 PR、3 个 Release，远高于其他项目，显示最强社区吸引力和维护吞吐 |
| **平台完整度** | 同时覆盖多 Provider、多渠道、插件、记忆、模型回退、Control UI、Gateway 和自动化，能力广度领先 |
| **发布节奏** | 唯一当日发布多个版本的项目，同时维护 beta、补丁稳定版和 extended-stable 发布线 |
| **生态治理意识** | 权限边界、会话保密、插件审核、cron 权限、记忆审计等治理议题已进入主线 |
| **问题发现能力** | 复杂场景覆盖充分，Issue 数量多也意味着其长期运行和真实部署场景更丰富 |

### 技术路线差异

- **Hermes Agent**：更像终端优先、强调多端、插件和凭据治理的个人 Agent 平台，Desktop、CLI、Profile 与 Worker 并重。
- **QwenPaw**：强调“插件化宿主 + 可替换模型/记忆后端 + 应用控制平面”，架构重构更激进、更底层。
- **NanoBot**：强调轻量 Gateway、运行时生命周期和通道抽象，工程收敛速度快。
- **PicoClaw**：更贴近边缘设备、IoT 和多渠道个人助手，突出 MQTT、飞书、微信和轻量多 Agent。
- **LobsterAI**：以桌面 CoWork、媒体生成和 OpenClaw/IM Agent 集成为核心，是应用层产品。
- **OpenHuman**：偏重可观测 harness、终端 Agent、Shell/Docker 沙箱和基准测试。
- **IronClaw**：当前更偏 Wasm/Rust 执行基础设施，生态开放度暂不突出。

### 社区规模判断

按当日 Issue/PR 流量，OpenClaw 社区规模明显处于第一梯队，约为 QwenPaw 的 4–5 倍、Hermes Agent 的 10 倍，且有更多用户围绕真实部署、渠道和多 Agent 协作反馈问题。其优势是生态与场景广，代价是技术债、状态管理和治理复杂度也显著高于其他项目。

---

## 4. 共同关注的技术方向

### 4.1 状态生命周期与可靠恢复

涉及 **OpenClaw、NanoBot、QwenPaw、Hermes Agent、OpenHuman、LobsterAI**。

共同诉求包括：

- Gateway 崩溃、睡眠唤醒或重启后能够自动恢复；
- SQLite WAL、session lease、worker ownership 和 checkpoint 不再冲突；
- `doctor --fix`、迁移和升级过程不能卡死；
- 旧会话不能继续引用失效模型或工作目录。

具体信号：

- OpenClaw 存在 WAL checkpoint 阻塞、lease 冲突和 crash recovery 后 Agent 永久不可用；
- NanoBot 修复 API 断连后的请求取消、cleanup、模型客户端退役；
- Hermes 存在 Desktop session lease 泄漏与空闲标签长期占用并发槽位；
- QwenPaw 的 Auto-Dream 失败后仍 checkpoint，造成记忆静默丢失；
- LobsterAI 开始热更新 Agent cwd，并重置失效模型覆盖项。

**趋势判断：** 状态管理正在取代“模型能力”成为个人 Agent 产品的首要可靠性指标。

### 4.2 记忆的持久化、晋升、隔离与可解释性

涉及 **OpenClaw、QwenPaw、Hermes Agent**，并与 LobsterAI、OpenClaw 生态中的 Skill Workshop 治理相关。

- OpenClaw：短期 recall 达到 512 条上限后无法 promotion；多 Agent dreaming 可能污染身份；记忆变更缺乏审计；
- QwenPaw：OpenViking 记忆插件、自动召回、结构化 `save_decision()`，同时暴露 Auto-Dream 静默丢失；
- Hermes Agent：多 Profile 共用 memory provider 带来跨 Profile 泄漏风险；
- LobsterAI/OpenClaw：自动 Skill Workshop 修改行为但缺少用户同意门。

**趋势判断：** 记忆系统的竞争重点正在从“能否保存”转向“何时晋升、如何隔离、失败是否可见、变更是否可审计”。

### 4.3 工具执行安全与权限最小化

涉及 **OpenClaw、PicoClaw、QwenPaw、Hermes Agent、OpenHuman**。

- OpenClaw：exec denylist、operator 权限边界、插件审核、定时任务权限；
- PicoClaw：exec 环境变量允许/阻止列表，限制模型覆盖 `PATH`、`HOME`、`LD_PRELOAD`；
- QwenPaw：文件守卫、工具守卫、环境变量脱敏、单请求媒体上限；
- Hermes Agent：CaMeL 守卫、Docker 主机挂载识别、凭据缓存隔离；
- OpenHuman：Shell sandbox 必须真正遵循配置的 Docker runtime。

**趋势判断：** “能执行工具”已不是差异化能力，**可限制、可审计、默认安全**才是。

### 4.4 插件化与第三方能力扩展

涉及 **QwenPaw、OpenClaw、Hermes Agent、OpenHuman、NanoBot**。

- QwenPaw 将本地模型、第三方 Agent 和记忆后端抽离为插件；
- OpenClaw 推进 manifest 推荐 Prompt、插件审核和会话保密；
- Hermes Agent 扩展 CaMeL、pass-secrets 等安全插件；
- OpenHuman 将 Cron 聚合工具拆成细粒度操作；
- NanoBot 将 Heartbeat 纳入普通任务体系，并解耦通道描述器。

**趋势判断：** 插件正在从“附加功能”演变为核心架构边界，但 API 稳定性、安装隔离、权限声明和审核机制仍是共同难题。

### 4.5 多渠道一致性与消息可靠性

涉及几乎所有活跃项目。

- OpenClaw：Telegram callback 被丢弃、群聊静默触发重试；
- NanoBot：重试放大、Telegram 重放、长任务活动状态；
- PicoClaw：飞书媒体发送、微信多实例、MQTT、iMessage；
- LobsterAI：CoWork 标签、媒体模型选择；
- QwenPaw：渠道请求绕过 `beforeSubmitPrompt`；
- Hermes Agent：Discord 模型选择超时覆盖真实结果。

**趋势判断：** 渠道数量正在快速增加，但跨渠道语义一致性、幂等投递和明确错误反馈仍未标准化。

### 4.6 Provider 兼容和模型元数据治理

涉及 **OpenClaw、NanoBot、PicoClaw、Hermes Agent、LobsterAI**。

- 模型停用、上下文窗口变化、自定义协议、工具调用格式和视觉能力 catalog 都需要持续维护；
- NanoBot 收紧结构化 tool call；
- PicoClaw 支持 Z.AI 和自定义协议；
- Hermes 修复 Codex 1M 上下文、GPT Image 退役和 OpenRouter 视觉工具；
- LobsterAI 修复 MiniMax H3 音频 MIME 类型。

**趋势判断：** Provider 适配正在成为重复性维护成本，需要统一能力描述和兼容测试集。

### 4.7 桌面端与跨端体验

涉及 **QwenPaw、Hermes Agent、LobsterAI、NanoBot**。

- QwenPaw：Windows 中文路径、Visual Compact 资源缺失、HTML 预览；
- Hermes Agent：长会话渲染退化、多端共享会话、凭据分类残留；
- LobsterAI：上下文标签、媒体模型互斥选择；
- NanoBot：v4.0 历史滚动被 “no earlier messages” 阻断。

**趋势判断：** 桌面端已成为主战场之一，但 Windows、Unicode 路径、长会话性能和打包资源完整性仍是明显短板。

---

## 5. 差异化定位分析

| 项目 | 功能侧重 | 目标用户 | 技术架构与差异化 |
|---|---|---|---|
| **OpenClaw** | 多 Provider、多渠道、插件、记忆、自动化、Control UI | 高活跃个人用户、开发者、插件作者、多用户 Gateway 运营者 | 平台型 Gateway + Agent 运行时 + 插件/技能生态；能力最广，复杂度和治理债最高 |
| **NanoBot** | 轻量 Gateway、Provider、消息通道、任务和运行时控制 | 追求速度、简洁部署和多通道的个人用户 | 强调运行时生命周期、描述器解耦、普通任务模型；工程收敛清晰 |
| **PicoClaw** | 多 Agent、MQTT/iMessage/飞书/微信、IoT 接入 | 边缘设备、家庭自动化、IoT 与多渠道用户 | 轻量多 Agent + 渠道/设备生态 + exec 环境隔离；适合资源受限场景 |
| **IronClaw** | Rust/Wasm 执行基础设施、延迟测试 harness | 基础设施开发者、贡献者 | 当前以 Wasmtime 依赖维护为主；技术底座属性明显，用户生态尚未形成 |
| **LobsterAI** | 桌面 CoWork、多媒体、IM Agent、模型服务 | 桌面个人用户、内容创作者、办公自动化用户 | Electron 桌面产品 + OpenClaw/IM Agent 集成；产品化和 UX 导向突出 |
| **QwenPaw** | 插件化宿主、本地模型、第三方 Agent、记忆后端、PawApps 控制平面 | 框架开发者、插件作者、桌面端与本地模型用户 | 核心正在拆分为插件宿主、模型后端、记忆后端和应用控制平面；长期扩展性较强 |
| **Hermes Agent** | CLI/Desktop、多 Profile、凭据、Docker、Kanban、多 Worker | 高级个人用户、远程部署者、多端协作用户 | Profile 隔离、凭据池、Worker/Kanban 与插件安全；终端到桌面平台化路线 |
| **OpenHuman** | 终端 Agent、Shell/Docker 沙箱、预算、Harness 与基准 | 重视执行质量、评测和沙箱隔离的开发者 | 强调 benchmark、失败分类、runtime 配置和成本预算；更偏可验证执行工程 |

### 架构取向总结

- **平台宽度优先：OpenClaw**
- **插件解耦优先：QwenPaw**
- **Profile 与多端治理优先：Hermes Agent**
- **轻量生命周期优先：NanoBot**
- **边缘与 IoT 优先：PicoClaw**
- **桌面产品化优先：LobsterAI**
- **Harness 与沙箱正确性优先：OpenHuman**
- **底层执行基础设施优先：IronClaw**

---

## 6. 社区热度与成熟度

### 第一层：高热度、平台扩张期

**OpenClaw**

- 社区规模和吞吐显著领先；
- 功能与生态扩张非常快；
- 已形成稳定版、beta、extended-stable 多发布线；
- 但 P0/P1 积压、记忆与权限问题表明尚未进入全面收敛期。

### 第二层：高速架构演进期

**QwenPaw、Hermes Agent**

- QwenPaw 有 35 条 PR，其中 24 条待合并，三项 XXXL 架构改造并行；
- Hermes 有 50 条 Issue 和 50 条待合并 PR；
- 社区讨论密度高，但发布转化不足，当前更适合称为“快速迭代中的复杂平台”。

### 第三层：质量巩固与工程收敛期

**NanoBot、OpenHuman**

- NanoBot 的 Gateway、API、重试、运行时、Provider 修复占主导，明显从功能发布转向稳定性；
- OpenHuman 聚焦 Docker、sandbox、Hook、附件解析和预算控制；
- 两者都有明确修复路径，但发布闭环仍需加强。

### 第四层：功能整合与产品化期

**PicoClaw、LobsterAI**

- PicoClaw 以聚合 PR 吸收大量功能，仓库表面整洁，但 Issue 反馈与 Release 信号不足；
- LobsterAI 的 CoWork 产品体验持续改善，但账号申诉和版本交付是短板。

### 第五层：低活跃维护期

**IronClaw**

- 仅有自动依赖升级，暂无社区热度和功能交付；
- 需结合更长周期数据判断是稳定收敛还是活跃度下降。

---

## 7. 值得关注的趋势信号

### 趋势一：个人 Agent 正从“聊天应用”升级为“个人操作系统”

多渠道、插件、自动化、记忆、凭据、模型路由和本地执行正在汇聚到同一平台。竞争边界已不再是“支持几个模型”，而是：

- 能否跨设备、跨渠道持续工作；
- 能否记住并解释决策；
- 能否安全调用工具；
- 能否在异常后自行恢复。

### 趋势二：可靠性成为用户信任的第一支柱

多个项目的负面反馈都指向同一模式：**表面成功、实际失效**。

- GC 报告成功却未清理；
- 搜索结果被截断但未披露；
- 记忆任务失败却 checkpoint；
- 沙箱配置为 Docker，实际未进入 Docker；
- Provider 图像工具返回 JSON 文本而非真实图像；
- 旧模型、旧 cwd 或失效凭据仍残留在会话中。

对开发者而言，未来的差异化应包括：**显式状态机、事务性 checkpoint、错误分类、可验证副作用和可观测性**。

### 趋势三：记忆系统将成为下一阶段竞争核心

各项目都在同时推进持久记忆、自动召回、长期晋升、决策保存和多 Agent 隔离，但核心问题仍未解决：

1. 什么叫“值得记住”？
2. 何时从短期记忆晋升为长期记忆？
3. 多 Agent、多 Profile 如何避免污染？
4. 自动抽取失败能否恢复？
5. 用户如何知道和审计记忆变更？

这意味着记忆系统将从“附加数据库”升级为 Agent 的**核心状态与身份系统**。

### 趋势四：权限治理将取代功能数量成为护城河

exec denylist、环境变量隔离、Docker 挂载识别、插件审核、会话保密、Profile 隔离和自动行为同意门同时升温。特别是 Skill Workshop 自动修改 Agent 行为，会把“Agent 可控性”推到产品治理中心。

### 趋势五：插件化正在加速，也放大兼容性风险

插件化让本地模型、第三方 Agent、记忆后端和渠道能力可以独立演进，但会引入：

- 插件 API 版本兼容；
- 安装和供应链审核；
- 权限声明与最小授权；
- 跨插件状态隔离；
- 失败后的降级和回滚。

QwenPaw、Hermes、OpenClaw、OpenHuman 都在这一方向上，但未来胜负取决于生态治理，而不只是插件数量。

### 趋势六：Provider 兼容需要从逐项打补丁转向元数据驱动

Codex、Qwen、OpenRouter、GPT Image、MiniMax、Z.AI 和自定义协议都在频繁变化。社区反复出现“上下文窗口误判”“视觉模型别名失效”“模型停用”“tool call 结构不一致”等问题，说明应建设：

- 统一模型能力 catalog；
- 模型退役与替代关系；
- Provider 自动回归测试；
- 工具调用与视觉能力标准适配层。

### 趋势七：Windows 与桌面端仍是高密度故障区

Windows 租约写入、中文路径、浏览器预览、文件覆盖、WebKit 差异、长会话渲染都出现了真实回归。桌面端 Agent 的竞争已经不再只是 UI 功能竞争，还包括：

- Unicode 路径；
- 文件锁与原子替换；
- 重型模型资源加载；
- PyInstaller/打包完整性；
- 长会话增量渲染性能。

### 趋势八：评测标准正在从模型分数转向端到端 Harness 质量

OpenHuman 的 Terminal-Bench 讨论，以及各项目对工具调用、缓存、冷启动、截断披露和沙箱行为的关注，说明社区开始承认：

> Agent 的实际能力不只由模型决定，还由工具协议、上下文管理、重试、执行环境和错误恢复共同决定。

因此，未来更有价值的评测应至少拆分：**模型智能、执行框架、渠道适配、状态管理和基础设施**。

---

## 决策建议

### 若关注最大生态与扩展性

优先观察 **OpenClaw**，但应将其视为高风险、高回报平台，部署时重点验证 SQLite、lease、恢复路径、记忆隔离和权限边界。

### 若关注插件化与长期架构

优先跟踪 **QwenPaw** 的插件宿主、模型/记忆后端和控制平面；架构潜力高，但需等待 Beta 发布阻断项完成闭环。

### 若关注桌面端与长期多端使用

关注 **Hermes Agent**，尤其是 Profile 隔离、session lease、Docker 安全和凭据治理。

### 若关注轻量、快速部署与日常个人助手

**NanoBot** 更务实，当前主要工作是提升运行可靠性；**PicoClaw** 更适合边缘设备、IoT 和多渠道场景。

### 若关注桌面 CoWork 与多媒体体验

**LobsterAI** 的产品化路径最明确，但应等待账号风控申诉机制、版本发布和依赖安全更新落地。

### 若关注 Agent 执行评测与沙箱正确性

**OpenHuman** 的方向值得关注，尤其是预算控制、runtime 一致性和 Terminal-Bench 失败分类。

### 若仅作底层执行基础设施评估

**IronClaw** 当前公开活动不足，建议结合更长周期的提交、Release 和贡献者数据判断，不宜仅凭单日动态作最终判断。

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目动态日报

**统计日期：2026-10-30**  
**数据范围：过去 24 小时 GitHub 活动**

## 1. 今日速览

- NanoBot 过去 24 小时共更新 **2 条 Issues** 和 **22 条 PR**，其中 **9 条 PR 仍待合并、13 条已合并或关闭**，无新版本发布，整体开发活跃度较高。
- 本轮变更重点集中在 **Gateway 稳定性、API 生命周期、运行时控制、消息重试与 Provider 兼容性**，多个 P1/P2 修复已关闭，说明 v0.4.0 后的工程收敛和稳定性治理正在加速。
- 社区侧仍有明显痛点：Windows 网关租约写入失败、WebUI v4.0 滚动体验退步，以及 Provider 工具调用兼容性和邮件通道能力完善等问题尚未完全收敛。
- 项目健康度评估：**开发健康、节奏良好，但维护与 UX 债务仍需关注**。大量 PR 快速关闭有助于控制缺陷面，但仍有 **6 条长期开放的重要功能或修复 PR**，其中多条标记为冲突或涉及高优先级改造。

---

## 3. 项目进展

> 今日无新版本发布，因此不单列“版本发布”章节。

### 已合并或关闭的重要 PR

#### 1. Gateway 租约写入优化与 Windows 安全 I/O

- PR：[ #6516 fix(gateway): reduce lease writes and use Windows-safe I/O](https://github.com/HKUDS/nanobot/pull/6516)
- 状态：已关闭
- 核心进展：
  - 避免在租约内容未变化时重复写入 `gateway.clients.json`，减少不必要的文件同步和原子替换。
  - 修复 Windows 下租约重写可能触发 `PermissionError: [WinError 5]` 的问题。
  - 对应 Issue：[ #6514](https://github.com/HKUDS/nanobot/issues/6514)。

这是今日最直接的稳定性改进之一，降低了 Windows 网关状态查询、本地客户端监控过程中的文件竞争和访问拒绝风险。

#### 2. API 断连后的请求取消与清理

- PR：[ #6525 fix(api): cancel disconnected request work and drain cleanup](https://github.com/HKUDS/nanobot/pull/6525)
- 状态：已关闭
- 核心进展：
  - 关闭 JSON/SSE API 连接时，仅取消对应请求的工作。
  - 等待实际清理完成，避免任务静默脱离或污染共享会话。
  - 防止清理未完成时提前释放同一会话的下一请求。

这改善了长连接、客户端主动断开和共享会话场景下的资源回收可靠性。

#### 3. 长运行命令活动状态修正

- PR：[ #6524 fix: keep long-running command activity honest](https://github.com/HKUDS/nanobot/pull/6524)
- 状态：已关闭
- 核心进展：
  - 对同一长运行命令的多次观察复用同一活动记录。
  - 避免轮询过程中重复创建任务或错误显示“成功完成”。
  - 两次真实执行、即使命令文本相同，也保持独立状态和输出。

这提升了命令执行状态的可信度，也减少了 WebUI 中重复或虚假活动事件。

#### 4. Provider 工具调用安全与兼容性收紧

- PR：[ #6147 fix(providers): tighten tool calls and compatibility fallbacks](https://github.com/HKUDS/nanobot/pull/6147)
- 状态：仍开放
- 核心进展：
  - 避免将助手文本中的 `<tool_call>` 标记误解析为可执行工具调用。
  - 更严格地依赖 API 返回的结构化工具调用字段。
  - 保留流式和最终输出中的助手原文，提升安全性和 Provider 兼容性。
- 关注点：PR 已创建较长时间，且存在冲突标记，当前仍未完成合并。

这是今日优先级最高、但尚未落地的开放改造之一。

#### 5. 重试机制重构，防止请求放大

- PR：[ #6367 fix(retry): prevent replay amplification and isolate backoff](https://github.com/HKUDS/nanobot/pull/6367)
- 状态：已关闭
- 核心进展：
  - 避免嵌套重试所有者重复发起物理请求。
  - 防止 Telegram 等通道重放已经投递的消息前缀。
  - 将退避等待与发送资源占用隔离，避免失败目标长期阻塞其他出站请求。

该变更直接改善多 Provider、多通道场景下的请求可靠性与资源公平性。

#### 6. Heartbeat 替换为普通定时任务

- PR：[ #6520 refactor: replace Heartbeat with ordinary scheduled tasks](https://github.com/HKUDS/nanobot/pull/6520)
- 状态：已关闭
- 核心进展：
  - 将独立的 Heartbeat 机制纳入常规任务管理体系。
  - 用户可像编辑其他自动化任务一样编辑、暂停、运行或删除 Heartbeat。
  - 减少额外的文件读取、最近会话选择和二次模型判断流程。

这是一项面向用户可管理性和运行效率的重要架构调整。

#### 7. 运行时停止与重启控制重构

- PR：[ #6519 refactor(runtime): structure model, stop, and restart controls](https://github.com/HKUDS/nanobot/pull/6519)
- 状态：已关闭
- 核心进展：
  - “停止”操作会等待旧会话及其所属工作完成清理。
  - 保留最终输出和已完成的工具上下文。
  - 防止旧控制请求误停止下一轮任务。
  - WebUI/TUI 客户端关闭行为与运行时生命周期进一步统一。

该改动增强了会话控制语义，降低并发请求和客户端断开时的竞态风险。

#### 8. 模型客户端生命周期优化

- PR：[ #6522 fix(providers): retire unused clients without closing in-flight runs](https://github.com/HKUDS/nanobot/pull/6522)
- 状态：已关闭
- 核心进展：
  - 清理已被替代且不再使用的模型客户端。
  - 活跃或排队中的工作仍保留所需连接。
  - 未改变配置的客户端继续复用连接。
  - 避免长期运行的 Gateway/SDK 实例持续积累废弃客户端。

这有助于降低长时间运行实例的连接、内存和资源泄漏风险。

#### 9. Shell 完成机制移出 Agent 循环

- PR：[ #6523 refactor(commands): own trusted Shell completion outside agent loop](https://github.com/HKUDS/nanobot/pull/6523)
- 状态：已关闭
- 核心进展：
  - 模型发起的 Shell 工具调用继续返回有界观察结果。
  - 用户直接执行的受信任 `!command` 等待完整字面输出。
  - 将可信命令等待逻辑从 Agent 循环中抽离，简化核心执行路径。

#### 10. 通道回复规范与工具活动展示解耦

- PR：[ #6521 refactor(channels): let descriptors own reply guidance](https://github.com/HKUDS/nanobot/pull/6521)
- 状态：已关闭
- 核心进展：
  - 各通道自行声明回复格式指导。
  - Telegram、QQ、Discord、WhatsApp、Email、MoChat 等通道统一采用描述符配置。
  - 降低核心层对具体聊天平台展示规则的耦合。

- 相关 PR：[ #6498 refactor(channels): move tool hint rendering out of core](https://github.com/HKUDS/nanobot/pull/6498)
  - 将工具活动提示的渲染从核心移到各通道实现，进一步改善扩展性。

#### 11. README 与 WebUI 画廊更新

- PR：[ #6511 docs: refresh README news and WebUI gallery](https://github.com/HKUDS/nanobot/pull/6511)
- 状态：已关闭
- 核心进展：
  - README 更新至 v0.4.0 发布信息。
  - 补充最新项目动态。
  - 将 WebUI 画廊更新为当前工作台界面。

#### 12. 注释与文档字符串清理

- PR：[ #6527 refactor: remove redundant comments and docstrings](https://github.com/HKUDS/nanobot/pull/6527)
- 状态：已关闭
- 核心进展：
  - 删除 **3,313 条注释**和 **2,761 条冗余文档字符串**。
  - 保留关键契约和非显而易见的约束说明。
  - 目标是让类型、命名和代码结构承担主要解释职责。

该变更规模较大，属于代码可读性和维护成本治理，而非新增用户功能。

### 今日整体推进程度

本轮 PR 覆盖运行时、Gateway、API、Provider、通道、命令执行、WebUI 和文档等核心模块，至少推进了以下六类能力：

1. Windows 与网关文件 I/O 稳定性；
2. API 断连和请求清理语义；
3. 长任务、停止/重启与客户端生命周期；
4. Provider 工具调用安全性与重试可靠性；
5. Heartbeat、Shell、通道展示的架构治理；
6. README、WebUI 画廊及代码文档维护。

按数据看，**13 条 PR 已合并或关闭**，今日开发活动集中度较高，项目正从 v0.4.0 功能发布阶段转向稳定性、生命周期与可维护性收敛阶段。

---

## 4. 社区热点

### 1. Windows 网关租约写入失败

- Issue：[ #6514 PermissionError [WinError 5] when rewriting the gateway client lease on Windows](https://github.com/HKUDS/nanobot/issues/6514)
- 状态：开放，2 条评论
- 热度：今日 Issues 中评论最多
- 对应修复：[ #6516](https://github.com/HKUDS/nanobot/pull/6516)

**背后诉求：**  
Windows 用户需要稳定使用按需 Gateway 客户端。当前租约文件被间歇性重写时可能遇到“拒绝访问”，影响网关状态查询、客户端接管或启动流程。相关修复 PR 已关闭，Issue 尚未关闭，表明仍需确认合并结果、回归覆盖和用户侧验证。

### 2. v4.0 WebUI “no earlier messages” 阻断原生滚动

- Issue：[ #6526 [bug, question] "no earlier messages" message](https://github.com/HKUDS/nanobot/issues/6526)
- 状态：开放，1 条评论
- 热度：今日唯一更新至 10 月 30 日的 Issue

**背后诉求：**  
用户认为 v4.0 在核心交互体验上出现明显退步：

- “no earlier messages” 提示会阻断整个历史消息滚动；
- 原生滚动体验受到干扰；
- 字体大小和整体样式显得异常；
- 用户明确表达了对 Agent 速度与响应能力的认可，但对新版 UI 失望。

这说明用户对 NanoBot 的核心评价仍是“执行快、响应好”，但对 v4.0 WebUI 的视觉和滚动交互存在明显信任落差。

### 3. Provider 工具调用安全与兼容性

- PR：[ #6147](https://github.com/HKUDS/nanobot/pull/6147)
- 状态：开放
- 热度：今日展示 PR 中优先级最高之一，且属于长期核心改造

**背后诉求：**  
该 PR 关注普通助手文本被错误识别为工具调用的问题，并推动 Provider 层统一依赖结构化工具调用字段。虽然是维护型 PR，但直接关系到工具执行安全、不同模型供应商兼容性和输出保真，属于高影响事项。

---

## 5. Bug 与稳定性

### 严重：高优先级、尚未落地

#### 1. Provider 工具调用可能被伪造文本触发

- PR：[ #6147](https://github.com/HKUDS/nanobot/pull/6147)
- Issue：未提供直接关联 Issue
- 状态：开放，存在冲突标记
- 风险：
  - 助手输出中的 `<tool_call>` 示例可能被误当成真实调用。
  - 涉及工具执行边界和输出保真。
- 已有 fix PR：**有，但尚未合并**。

这是当前最需要维护者集中处理的开放 PR。其安全影响高于一般 UI 或文档问题，建议优先完成冲突解决、回归测试和 Provider 兼容性验证。

### 中高：Windows 网关租约访问拒绝

- Issue：[ #6514](https://github.com/HKUDS/nanobot/issues/6514)
- 状态：开放
- 已有 fix PR：[ #6516](https://github.com/HKUDS/nanobot/pull/6516)，已关闭
- 风险：
  - Windows 网关状态查询或租约更新间歇性失败。
  - 可能进一步表现为 Gateway 客户端不可用、状态异常或启动受阻。
- 判断：已有直接修复，但 Issue 未关闭，需确认修复是否已实际合入并得到用户验证。

### 中：API 断连后后台工作未及时取消

- PR：[ #6525](https://github.com/HKUDS/nanobot/pull/6525)
- 状态：已关闭
- 风险：资源泄漏、幽灵任务、会话级干扰。
- 判断：已有修复并关闭。

### 中：重试放大与消息重放

- PR：[ #6367](https://github.com/HKUDS/nanobot/pull/6367)
- 状态：已关闭
- 风险：
  - 重复物理请求；
  - Telegram 等通道重复投递；
  - 失败目标阻塞发送槽位。
- 判断：已有修复并关闭。

### 中：长运行命令活动状态不准确

- PR：[ #6524](https://github.com/HKUDS/nanobot/pull/6524)
- 状态：已关闭
- 风险：WebUI/TUI 中出现重复活动、虚假成功或错误任务状态。
- 判断：已有修复并关闭。

### 中：邮件消息在真正投递前被标记为已读

- PR：[ #5605 fix(email): only mark \Seen on messages that are actually delivered](https://github.com/HKUDS/nanobot/pull/5605)
- 状态：开放
- 风险：
  - 邮件在通过过滤器但尚未实际投递给 Agent 前即被标记 `\Seen`。
  - 投递失败时可能出现消息丢失或不可重试。
- 已有 fix PR：**有，但尚未合并**。

### 中低：MCP 业务错误被当作成功

- PR：[ #5484 fix(mcp): flag business-error envelopes returned with isError=false](https://github.com/HKUDS/nanobot/pull/5484)
- 状态：开放，存在冲突标记
- 风险：
  - MCP 服务在 `isError=false` 时返回业务错误载荷。
  - NanoBot 可能将失败调用误判为成功，影响 Agent 后续决策。
- 已有 fix PR：**有，但尚未合并**。

### 低至中：WebUI 历史消息滚动与样式退化

- Issue：[ #6526](https://github.com/HKUDS/nanobot/issues/6526)
- 状态：开放
- 风险：影响长会话浏览和历史定位，属于 UX 回归。
- 已有 fix PR：当前数据中**未见明确对应的专门修复 PR**。

### 低：原生 Seatbelt 测试断言未适配新输出格式

- PR：[ #6351 test(exec): parse current results in native Seatbelt checks](https://github.com/HKUDS/nanobot/pull/6351)
- 状态：开放
- 风险：主要是测试可信度下降，可能掩盖执行结果回归。
- 已有 fix PR：**测试修复 PR 已存在，但尚未合并**。

---

## 6. 功能请求与路线图信号

### 1. WebUI 同会话编辑并重发消息

- PR：[ #6323 feat(webui): edit and resend messages in the same session](https://github.com/HKUDS/nanobot/pull/6323)
- 状态：开放，存在冲突标记
- 需求：
  - 用户可在同一会话中编辑已发送消息。
  - 保留选中用户消息之前的内容。
  - 替换该消息及其后续上下文。
  - 在原会话中生成新回复，而不是创建新的侧栏主题。
- 路线图判断：  
  属于明确的 WebUI 体验增强，与近期大量 WebUI/运行时 PR 的方向一致，**较有可能进入后续版本**，但需要先解决冲突并补齐回归测试。

### 2. 邮件按收件人别名过滤

- PR：[ #5606 feat(email): filter by recipient alias](https://github.com/HKUDS/nanobot/pull/5606)
- 状态：开放
- 需求：
  - 支持一个邮箱共享多个别名。
  - 只处理投递到当前 Agent 别名的消息。
- 路线图判断：  
  Email 通道正在形成较完整的功能系列，包括别名过滤、正确标记已读和 OAuth，**具备纳入后续 Email 增强版本的可能**。

### 3. Microsoft 委托 OAuth / Office365、Outlook 支持

- PR：[ #5609 feat(email): add Microsoft delegated OAuth for Office365/Outlook](https://github.com/HKUDS/nanobot/pull/5609)
- 状态：开放
- 需求：
  - 为 Office365/Outlook 增加 OAuth2 授权码流程。
  - 适应 Microsoft 逐步淘汰基础认证的趋势。
- 路线图判断：  
  这是邮件通道现代化的高价值能力，需求明确且具备完整 PR，**下一版本纳入的可能性较高**，但需关注凭据管理、安全边界和测试覆盖。

### 4. 新增 Serply 网页搜索 Provider

- PR：[ #5437 feat(web-search): add Serply (Google Search API) provider](https://github.com/HKUDS/nanobot/pull/5437)
- 状态：开放
- 需求：
  - 新增 Serply 作为 `web_search` Provider。
  - 用户通过自己的 Serply API Key 使用 Google SERP 数据。
- 路线图判断：  
  实现方式与现有 Serper Provider 接近，技术路径成熟，**适合在 Provider 扩展批次中落地**；当前主要障碍是 PR 存续时间较长。

### 5. Heartbeat 纳入普通任务管理

- PR：[ #6520](https://github.com/HKUDS/nanobot/pull/6520)
- 状态：已关闭
- 路线图意义：  
  这不是未完成请求，而是已落地的方向信号：NanoBot 正把自动化、轮询和后台行为统一到普通任务模型，降低系统内部机制的不可见性和维护成本。

### 6. WebUI 滚动体验可能成为近期修复重点

- Issue：[ #6526](https://github.com/HKUDS/nanobot/issues/6526)
- 路线图判断：  
  当前尚无明确 PR，但用户已直接指出 v4.0 回归。由于项目近期高频修复 WebUI 生命周期和展示逻辑，该问题**较可能进入近期补丁迭代**；建议维护者明确“no earlier messages”的触发条件及原生滚动兼容方案。

---

## 7. 用户反馈摘要

### 核心满意度

- 用户仍认可 NanoBot 的 **速度与响应能力**，将其直接描述为过去喜欢该 Agent 的重要原因。
- 高频开发活动也表明项目对网关、Provider、邮件和 WebUI 等真实使用场景有较强响应。

### 主要痛点

#### WebUI v4.0 的历史滚动被阻断

- Issue：[ #6526](https://github.com/HKUDS/nanobot/issues/6526)
- 场景：用户浏览较早消息，或在长会话中向上滚动。
- 痛点：
  - “no earlier messages” 提示阻断整个滚动过程；
  - 用户无法顺畅查看历史内容；
  - 字体大小与样式也显得不协调。
- 情绪：明显失望，且认为新版体验与项目此前的快速、可靠形象不一致。

#### Windows 网关租约文件间歇性无法重写

- Issue：[ #6514](https://github.com/HKUDS/nanobot/issues/6514)
- 场景：Windows 上 Gateway 查询状态、本地客户端监控或租约更新。
- 痛点：
  - 间歇性 `PermissionError: [WinError 5]`；
  - 用户难以判断是环境权限问题还是产品文件 I/O 缺陷。
- 进展：已有针对性修复 PR：[ #6516](https://github.com/HKUDS/nanobot/pull/6516)。

### 用户场景信号

- 长会话历史浏览：WebUI 滚动体验必须保持原生、可预测。
- Windows 桌面部署：文件锁、原子替换和租约写入应具备平台安全保证。
- 多邮箱协作：用户需要按别名隔离邮件，邮件通道需要可靠投递后再标记已读。
- Office365 使用：Microsoft OAuth 是邮件通道继续可用和现代化的必要能力。
- 工具型 Agent：Provider 工具调用边界需要清晰、安全，不能让示例文本触发真实执行。

---

## 8. 待处理积压

### 长期开放且优先级较高的 PR

#### 1. Provider 工具调用与兼容性收紧

- PR：[ #6147](https://github.com/HKUDS/nanobot/pull/6147)
- 创建时间：2026-10-10
- 优先级：P1
- 状态：开放，存在冲突
- 关注理由：涉及工具调用安全和多 Provider 兼容性，已经积累较长时间。

#### 2. WebUI 同会话编辑并重发

- PR：[ #6323](https://github.com/HKUDS/nanobot/pull/6323)
- 创建时间：2026-10-20
- 优先级：P2
- 状态：开放，存在冲突
- 关注理由：用户价值明确，但与近期 WebUI 运行时重构可能产生交叉，需要尽快协调。

#### 3. MCP 业务错误识别

- PR：[ #5484](https://github.com/HKUDS/nanobot/pull/5484)
- 创建时间：2026-08-22
- 优先级：P2
- 状态：开放，存在冲突
- 关注理由：长期积压且涉及工具结果正确性，建议明确重基策略和测试计划。

#### 4. Serply 网页搜索 Provider

- PR：[ #5437](https://github.com/HKUDS/nanobot/pull/5437)
- 创建时间：2026-08-19
- 优先级：P2
- 状态：开放
- 关注理由：实现模式成熟，但已开放较久，宜确认维护者接受意愿及测试状态。

### 长期开放的邮件通道 PR

#### 5. Microsoft 委托 OAuth

- PR：[ #5609](https://github.com/HKUDS/nanobot/pull/5609)
- 创建时间：2026-08-30
- 状态：开放
- 关注理由：与 Office365/Outlook 的认证政策直接相关，延期可能影响通道可用性。

#### 6. 邮件按收件人别名过滤

- PR：[ #5606](https://github.com/HKUDS/nanobot/pull/5606)
- 创建时间：2026-08-30
- 状态：开放
- 关注理由：共享邮箱和多别名部署是明确场景，建议与邮件可靠性改动一起收敛。

#### 7. 邮件仅在实际投递后标记已读

- PR：[ #5605](https://github.com/HKUDS/nanobot/pull/5605)
- 创建时间：2026-08-30
- 状态：开放
- 关注理由：关系到消息不丢失和可重试性，属于可靠性问题，建议优先于纯功能增强处理。

### 其他未闭环事项

- Issue：[ #6514](https://github.com/HKUDS/nanobot/issues/6514) 尚未关闭；应确认 [#6516](https://github.com/HKUDS/nanobot/pull/6516) 的修复是否已合入，并补充 Windows 回归结果。
- Issue：[ #6526](https://github.com/HKUDS/nanobot/issues/6526) 尚无明确修复 PR；建议补充复现步骤、WebUI 滚动行为预期及受影响版本。
- PR：[ #6351](https://github.com/HKUDS/nanobot/pull/6351) 仍开放；需要更新原生 Seatbelt 测试的当前输出解析方式。

---

## 今日结论

NanoBot 今日呈现出 **“高开发吞吐 + 稳定性收敛 + 少量 UX 信任透支”** 的特征。Gateway、API、Provider、重试和运行时的多项关键问题已得到处理，项目工程健康度总体良好。下一步应优先关注三个方向：

1. 推动高优先级且冲突的 Provider、MCP、WebUI PR 完成收敛；
2. 确认 Windows 租约修复实际生效并关闭 [#6514](https://github.com/HKUDS/nanobot/issues/6514)；
3. 尽快修复 [#6526](https://github.com/HKUDS/nanobot/issues/6526) 所述 WebUI 滚动与样式回归，恢复用户对 v4.0 交互体验的信任。

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目动态日报

**统计日期：2026-10-30**  
**数据范围：过去 24 小时 GitHub 活跃记录**  
**仓库：[sipeed/picoclaw](https://github.com/sipeed/picoclaw)**

---

## 1. 今日速览

过去 24 小时内，PicoClaw 共出现 **20 条 PR 更新**，全部处于 **已合并或已关闭** 状态，**没有待合并 PR**；同时 **Issue 更新为 0 条**，也没有新版本发布。  
本期活动高度集中在功能合入和 PR 清理，主要涉及 **Agent 执行能力、多智能体协作、消息渠道扩展、Provider 兼容性与安全加固**。  
其中，多个由维护者 @xuwei-xy 创建的聚合型 PR 一次性吸收了大量既有修复，说明项目正在通过合并和关闭旧 PR、推动功能进入主线来降低积压。  
整体来看，项目迭代吞吐较高，但“**Issues 静默、PR 零待处理、无新 Release**”也意味着发布节奏和用户问题闭环情况暂时无法从本次数据中确认。项目健康度可评估为：**代码整合活跃，方向清晰，但发布透明度与用户反馈信号偏弱**。

---

## 3. 项目进展

> 今日没有新版本发布，因此不单列“版本发布”章节。以下为过去 24 小时已合并或关闭的重要 PR 进展。

### 3.1 Agent 架构与多智能体能力

- **[#1584 feat(agent): subturn poc](https://github.com/sipeed/picoclaw/pull/1584)**  
  引入分层 Agent 执行（Sub-turns）概念验证，为多 Agent 调度、转向控制和执行中断能力奠定基础。该 PR 已关闭，结合描述判断可能已被合并或由其他实现替代。

- **[#423 WIP: feat: base multi-agent collaboration framework & shared context](https://github.com/sipeed/picoclaw/pull/423)**  
  构建多 Agent 协作框架的早期版本，包含共享上下文池、Agent handoff 和发现工具。该 PR 已关闭，显示项目长期推进“共享上下文 + 多智能体协作”方向。

- **[#1542 fix: merge PR #1540 #1524 #1523 #1522 #1521](https://github.com/sipeed/picoclaw/pull/1542)**  
  聚合合入多项能力，包括：
  - `SpawnStatusTool`
  - Skills 辅助函数
  - 仓库级 Skill 示例
  - 凭据加密
  - Passphrase / Gateway 相关支持  
  这批改动扩展了 Agent 的工具调用、Skill 使用和敏感凭据保护能力。

### 3.2 渠道与消息投递能力

- **[#1156 feat(feishu,tools): add outbound media delivery via send_file tool](https://github.com/sipeed/picoclaw/pull/1156)**  
  为飞书渠道增加 `SendMedia()`，允许机器人向用户发送图片和文件；同时新增 `send_file` 工具，使 Agent 能在对话中主动交付媒体文件。该改动已关闭。

- **[#2653 feat: add MQTT channel support](https://github.com/sipeed/picoclaw/pull/2653)**  
  增加 MQTT 消息渠道支持，拓展 PicoClaw 在 IoT、边缘设备和自动化消息接入方面的适用范围。

- **[#2606 feat: enhance Weixin channel support and configuration](https://github.com/sipeed/picoclaw/pull/2606)**  
  增强微信渠道的多实例和配置管理，涵盖渠道目录、动态实例处理、非法渠道名校验，以及后端、前端和文档联动更新。

- **[#1268 imessage support / stop command / logs / sanitizer](https://github.com/sipeed/picoclaw/pull/1268)**  
  增加 iMessage 支持，并引入停止命令、LLM API 调用日志、会话日志及隐私清理处理，提升多渠道场景下的可控性与可观测性。

- **[#873 feat(feishu): add tool progress feedback with verbose toggle](https://github.com/sipeed/picoclaw/pull/873)**  
  为飞书增加工具执行进度反馈及 verbose 开关，改善复杂任务处理时用户只能等待最终结果的“黑盒”体验。

### 3.3 Provider、模型与协议兼容

- **[#177 feat: Add Z.AI provider support](https://github.com/sipeed/picoclaw/pull/177)**  
  接入 Z.AI / 智谱 AI 国际平台，支持标准 API 与专用 Coding API 的自动路由，并根据 GLM、CogView、CogVideo、AutoGLM、Vidu 等模型名自动识别服务类型。

- **[#664 fix: support custom model protocols (e.g., zai-org/GLM-4.7)](https://github.com/sipeed/picoclaw/pull/664)**  
  修复自定义模型协议无法识别的问题，解决类似 `zai-org/GLM-4.7` 的配置因未知协议前缀而无法创建 Provider 的错误。

- **[#1205 docs: add account suspension risk warning to Antigravity provider docs](https://github.com/sipeed/picoclaw/pull/1205)**  
  补充 Antigravity Provider 文档风险提示，提醒用户 Google 可能对在非 IDE 插件场景、服务器或自动化环境中大规模使用相关集成采取账号处置。该改动主要属于风险告知，不代表底层功能调整。

### 3.4 安全与稳定性

- **[#1258 feat(security): add environment sanitization for exec tool](https://github.com/sipeed/picoclaw/pull/1258)**  
  为 `exec` 工具加入环境变量允许/阻止列表和运行时参数注入，包括 `HOME`、`CONFIG`、`AGENT_WORKSPACE`、`EXE`、`SERVICE_NAME`、`EXEC_TIME`、`EXEC_TIMEOUT` 等 `PICOCLAW_*` 变量；同时限制 LLM 覆盖 `PATH`、`HOME`、`LD_PRELOAD` 等敏感变量。这是本日最重要的安全加固之一。

- **[#1541 fix: merge PR #1536 #1535 #1531](https://github.com/sipeed/picoclaw/pull/1541)**  
  聚合引入：
  - 集中管理的 PicoClaw 媒体临时目录
  - Agent 对媒体临时目录的读取授权
  - `read_file`、`list_dir` 等工具的路径适配
  - 渠道 DoS 防护
  - DeepWiki 徽章等文档更新  
  同时兼顾媒体处理可用性和渠道安全。

### 3.5 维护与集成效率

- **[#2516 chore(ci): disable scheduled sync-rebase trigger](https://github.com/sipeed/picoclaw/pull/2516)**  
  移除每日自动同步 rebase 的定时任务，保留手动触发能力。该调整可减少无意义 CI 噪声及自动化合并对开发流程的干扰。

- 以下聚合型 PR 已关闭，集中吸收了一批历史修复或功能：
  - [#1560](https://github.com/sipeed/picoclaw/pull/1560)
  - [#1559](https://github.com/sipeed/picoclaw/pull/1559)
  - [#1555](https://github.com/sipeed/picoclaw/pull/1555)
  - [#1552](https://github.com/sipeed/picoclaw/pull/1552)
  - [#1549](https://github.com/sipeed/picoclaw/pull/1549)
  - [#1545](https://github.com/sipeed/picoclaw/pull/1545)

这些 PR 对维护节奏的影响较为积极：有助于将长期未合并的改动集中整合，但也降低了单条变更的原子性和后续追踪清晰度。

---

## 4. 社区热点

### 4.1 热点排序说明

本次数据未提供评论数、点赞数或详细讨论记录，所有 PR 均显示 `评论: undefined`、`👍: 0`，因此无法进行严格意义上的“评论最多 / 反应最多”排名。可依据 **主题影响范围、功能价值和聚合规模**识别重点：

1. **[#423 多 Agent 协作框架与共享上下文](https://github.com/sipeed/picoclaw/pull/423)**  
   核心诉求是让多个 Agent 共享上下文、实现任务交接和动态发现，减少多步骤任务的重复信息传递。这是项目最具战略意义的方向之一。

2. **[#1584 分层 Agent 执行 PoC](https://github.com/sipeed/picoclaw/pull/1584)**  
   诉求集中在多 Agent 调度、转向和可中断执行，直接关系到 Agent 系统的控制力、安全边界与长期任务可靠性。

3. **[#1156 飞书媒体主动投递](https://github.com/sipeed/picoclaw/pull/1156)**  
   反映出用户不只希望 Agent“读取并总结文件”，还希望它能在对话中直接回传图片、文件等成果。

4. **[#1542 Agent 工具、Skills 与凭据加密聚合更新](https://github.com/sipeed/picoclaw/pull/1542)**  
   覆盖工具状态、Skill 工作流和凭据安全，说明用户对“Agent 可控执行”和“可复用能力”两类需求同步增强。

5. **[#1258 exec 环境变量安全治理](https://github.com/sipeed/picoclaw/pull/1258)**  
   焦点不只是“能否执行命令”，而是执行环境是否可控、敏感变量是否可被模型恶意或意外覆盖。

> 本期没有可分析的开放 Issue 讨论，因而没有明确的 Issue 热点。

---

## 5. Bug 与稳定性

### 严重程度：中等

1. **自定义模型协议识别失败**  
   - PR：[#664](https://github.com/sipeed/picoclaw/pull/664)  
   - 表现：`zai-org/GLM-4.7` 等模型因协议前缀未知而无法创建 Provider。  
   - 影响：依赖自定义模型、聚合服务或带命名空间模型的用户无法正常使用。  
   - 状态：**已有 fix PR，且 PR 已关闭**。

2. **渠道 DoS 风险与媒体临时目录访问问题**  
   - PR：[#1541](https://github.com/sipeed/picoclaw/pull/1541)  
   - 影响：可能涉及渠道请求处理、资源消耗和媒体文件访问边界。  
   - 状态：**已有修复聚合 PR，且 PR 已关闭**。

3. **Antigravity Provider 账号封禁风险**  
   - PR：[#1205](https://github.com/sipeed/picoclaw/pull/1205)  
   - 影响：不是代码崩溃，但可能导致用户 Google 账号受限，属于高影响运营风险。  
   - 状态：**已有文档警告**，未见专项代码修复。

### 严重程度：中等偏低

4. **Weixin 多实例配置与稳定性问题**  
   - PR：[#2606](https://github.com/sipeed/picoclaw/pull/2606)  
   - 影响：涉及渠道目录、动态实例、非法名称校验和多实例流程稳定性。  
   - 状态：**已有功能增强 PR，且 PR 已关闭**。

5. **飞书复杂任务反馈不透明**  
   - PR：[#873](https://github.com/sipeed/picoclaw/pull/873)  
   - 影响：主要属于体验和可观测性问题，不直接导致服务不可用。  
   - 状态：**已有进度反馈增强 PR，且 PR 已关闭**。

### 本期未发现

- 无新增崩溃报告。
- 无明确回归 Issue。
- 无开放 Bug 修复待处理。
- 无新版本发布，因此无法判断上述变更是否已进入正式发行版本。

---

## 6. 功能请求与路线图信号

### 高置信度路线信号

1. **多 Agent 与可控执行框架**  
   依据：[#1584](https://github.com/sipeed/picoclaw/pull/1584)、[#423](https://github.com/sipeed/picoclaw/pull/423)、[#1542](https://github.com/sipeed/picoclaw/pull/1542)  
   多个独立 PR 同时指向分层执行、共享上下文、Agent handoff、工具状态和 Skill 复用，说明多智能体协作是中期重点方向。  
   **下一版本可能性：高**，但仍需确认实验性接口的稳定性与兼容性。

2. **渠道生态继续扩张**  
   依据：[#2653](https://github.com/sipeed/picoclaw/pull/2653)、[#1268](https://github.com/sipeed/picoclaw/pull/1268)、[#2606](https://github.com/sipeed/picoclaw/pull/2606)、[#1156](https://github.com/sipeed/picoclaw/pull/1156)  
   覆盖 MQTT、iMessage、微信、飞书以及媒体主动发送，表明项目正从单一聊天入口转向多渠道个人 AI 助手基础设施。  
   **下一版本可能性：高**。

3. **Provider 与自定义模型兼容性**  
   依据：[#177](https://github.com/sipeed/picoclaw/pull/177)、[#664](https://github.com/sipeed/picoclaw/pull/664)  
   既有新增 Z.AI Provider，也有自定义协议修复，反映出降低模型接入门槛仍是现实需求。  
   **下一版本可能性：高**。

4. **工具执行安全与隐私保护**  
   依据：[#1258](https://github.com/sipeed/picoclaw/pull/1258)、[#1542](https://github.com/sipeed/picoclaw/pull/1542)、[#1268](https://github.com/sipeed/picoclaw/pull/1268)  
   环境变量隔离、凭据加密、日志与隐私清理共同表明，安全边界已成为核心产品能力，而非附加项。  
   **下一版本可能性：高**。

5. **Agent 过程可观测性**  
   依据：[#873](https://github.com/sipeed/picoclaw/pull/873)、[#1268](https://github.com/sipeed/picoclaw/pull/1268)  
   工具进度反馈、停止命令、调用日志和会话日志持续推进，有助于改善复杂任务中的可控性和排障能力。  
   **下一版本可能性：中高**。

---

## 7. 用户反馈摘要

本期 **Issue 更新为 0**，且没有可读取的 Issue 评论，因此无法提炼真实用户评论、满意点或具体抱怨。以下仅依据 PR 描述归纳需求侧信号，不将其视为已验证的用户反馈：

- **文件交付需求**：用户希望在 Agent 对话中直接接收图片和文件，而不只是获得文本分析结果。  
  对应：[#1156](https://github.com/sipeed/picoclaw/pull/1156)

- **复杂任务透明化**：在多次工具调用期间需要明确进度、停止入口和调用记录。  
  对应：[#873](https://github.com/sipeed/picoclaw/pull/873)、[#1268](https://github.com/sipeed/picoclaw/pull/1268)

- **多渠道与 IoT 接入**：MQTT、微信、iMessage 和飞书的并行推进表明，跨渠道个人助手与设备自动化是重要场景。  
  对应：[#2653](https://github.com/sipeed/picoclaw/pull/2653)、[#2606](https://github.com/sipeed/picoclaw/pull/2606)、[#1268](https://github.com/sipeed/picoclaw/pull/1268)

- **模型接入自由度**：需要支持 Z.AI 以及带协议前缀的自定义模型，减少 Provider 适配成本。  
  对应：[#177](https://github.com/sipeed/picoclaw/pull/177)、[#664](https://github.com/sipeed/picoclaw/pull/664)

- **执行与凭据安全**：需要限制模型控制敏感环境变量，并对凭据和会话内容提供更强保护。  
  对应：[#1258](https://github.com/sipeed/picoclaw/pull/1258)、[#1542](https://github.com/sipeed/picoclaw/pull/1542)

**满意度判断**：由于没有 Issue 评论和用户评分，本期无法可靠判断用户满意度；只能确认核心需求集中在可用性、安全性、可扩展性和可控性四方面。

---

## 8. 待处理积压

### 当前待处理状态

- **待合并 PR：0 条**
- **开放 Issue：0 条**
- **最新 Releases：无**
- 过去 24 小时列出的 PR 均已关闭。

因此，本期没有明确处于“待处理”状态的重要 Issue 或 PR。不过，下列长期 PR 值得维护者继续复核：

1. **[#423 多 Agent 协作框架](https://github.com/sipeed/picoclaw/pull/423)**  
   创建于 2026-02-18，属于长期 WIP。需要确认其核心设计是否已被其他 PR 吸收，以及共享上下文、handoff 和 discovery tool 是否形成完整可用路径。

2. **[#1584 Sub-turns PoC](https://github.com/sipeed/picoclaw/pull/1584)**  
   创建于 2026-03-15，涉及 Agent 执行中断和多 Agent 转向等基础能力。建议确认其关闭是否等同于正式合入，避免功能只停留在概念验证层。

3. **[#1156 飞书媒体发送](https://github.com/sipeed/picoclaw/pull/1156)**  
   创建于 2026-03-06，跨越较长时间才关闭。建议在后续 Release Notes 中明确功能是否已上线，以及是否需要补充媒体大小、权限和存储策略。

4. **[#1258 exec 环境变量隔离](https://github.com/sipeed/picoclaw/pull/1258)**  
   创建于 2026-03-09，属于高安全价值改动。建议确认其默认策略、兼容行为和升级说明，尤其是已有自定义环境变量依赖的用户。

5. **聚合型 PR 的追踪风险**  
   依据：[#1542](https://github.com/sipeed/picoclaw/pull/1542)、[#1541](https://github.com/sipeed/picoclaw/pull/1541) 及其他 `merge PR #...` 聚合 PR。  
   建议维护者补充每个子 PR 的独立变更记录、测试结果和迁移说明，以便 Release Notes、问题复盘及安全审计追踪。

---

## 项目健康度结论

**综合判断：良好，但发布与反馈闭环有待加强。**

- **开发吞吐：高**——24 小时内 20 条 PR 全部关闭，方向覆盖 Agent、渠道、安全、Provider 和 CI。
- **主线整洁度：高**——当前待合并 PR 与开放 Issue 均为 0。
- **功能推进度：中高**——多 Agent、MQTT、iMessage、飞书媒体和 exec 安全都取得实质进展。
- **发布透明度：偏低**——过去 24 小时无新版本，无法确认这些能力是否已交付给用户。
- **社区反馈可见度：偏低**——缺少 Issue 和评论数据，用户痛点与满意度难以量化验证。
- **维护风险：中等**——长期 PR 和聚合式合入虽然提升了吞吐，但可能削弱原子性、可审计性和升级说明质量。

**建议维护者优先事项**：尽快发布包含上述变更的版本或迁移说明；为多 Agent、exec 环境隔离及渠道媒体能力补充安全与兼容性文档；持续记录 Issue 反馈，并在 Release Notes 中建立 PR 到用户可见功能的映射。

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw 项目动态日报

**统计日期：2026-10-30**  
**数据范围：过去 24 小时**  
**项目地址：[nearai/ironclaw](https://github.com/nearai/ironclaw)**

---

## 1. 今日速览

- 过去 24 小时项目整体活动度较低，共更新 **2 个 PR**，均为 Dependabot 提交的 Rust 依赖升级，目前均处于待合并状态。
- 两条 PR 均围绕 **Wasmtime** 版本升级，分别涉及延迟测试 runner 和主依赖环境，体现出项目正在维护其 Rust/Wasm 执行基础设施的依赖版本。
- 今日 **无 Issue 更新、无 PR 合并或关闭、无新版本发布**，社区讨论和用户反馈数据有限。
- 当前没有明确的功能交付或缺陷修复进入主干，项目健康度评估为：**稳定但推进偏慢，依赖维护正常但缺少功能与社区层面的实质活动**。

---

## 2. 版本发布

今日无新版本发布。

---

## 3. 项目进展

今日没有已合并或关闭的 PR，因此没有新的功能、修复或文档正式进入主干。

### 待合并的依赖升级

1. **升级延迟测试 runner 中的 Wasmtime：47.0.3 → 48.0.7**  
   - PR：[ #8162](https://github.com/nearai/ironclaw/pull/8162)
   - 标签：`dependencies`、`rust`
   - 提交者：Dependabot
   - 范围：更新 `/harness/latency/runner` 中的 Wasmtime 依赖。
   - 预期作用：获取 Wasmtime 48.x 系列的运行时更新、性能改进及修复，有助于保持延迟测试环境与上游依赖版本同步。
   - 状态：开放中，尚无评论或人工审核记录。

2. **升级主依赖环境中的 Wasmtime：47.0.4 → 49.0.5**  
   - PR：[ #8163](https://github.com/nearai/ironclaw/pull/8163)
   - 标签：`dependencies`、`rust`
   - 提交者：Dependabot
   - 预期作用：引入 Wasmtime 49.x 系列的更新、修复与兼容性改进。
   - 状态：开放中，尚无评论或人工审核记录。
   - 注意事项：该升级跨越大版本，需重点验证运行时行为、性能表现、编译兼容性及测试套件结果。

### 整体推进程度

今日项目推进主要停留在**依赖升级提案阶段**，尚无变更进入主干。若两条 PR 均通过 CI 并合并，可视为执行基础设施维护向前推进了一步，但不属于用户可见的功能版本迭代。

---

## 4. 社区热点

今日没有足够的高互动记录形成明确社区热点。两条 PR 均由 Dependabot 自动创建，当前评论数、点赞数均为 0，暂无开发者或用户展开讨论。

| PR | 状态 | 互动情况 | 核心诉求 |
|---|---|---:|---|
| [#8162](https://github.com/nearai/ironclaw/pull/8162) | OPEN | 0 评论、0 点赞 | 更新延迟测试 runner 使用的 Wasmtime 48.x 版本 |
| [#8163](https://github.com/nearai/ironclaw/pull/8163) | OPEN | 0 评论、0 点赞 | 将主依赖环境中的 Wasmtime 升级至 49.x 版本 |

**热点分析：**

- 今日社区关注点不是具体功能需求，而是执行引擎依赖的版本同步。
- 两条 PR 同时出现，说明 Wasmtime 升级可能需要区分不同依赖入口，避免版本不一致或兼容性问题。
- 当前缺少维护者反馈，无法判断是否已有统一升级计划或发布节奏。

---

## 5. Bug 与稳定性

今日没有新报告的 Bug、崩溃、回归或兼容性故障，也没有关联的修复 PR。

### 潜在稳定性关注项

- **Wasmtime 大版本升级风险**：[#8163](https://github.com/nearai/ironclaw/pull/8163) 从 47.x 升级至 49.x，可能引入 API、运行时行为或性能特征变化；目前未看到对应测试结果或人工评审信息。
- **延迟测试环境版本差异**：[#8162](https://github.com/nearai/ironclaw/pull/8162) 仅升级 `/harness/latency/runner` 的依赖，在合并前需要确认其与项目其他位置使用的 Wasmtime 版本是否兼容。
- **关联修复 PR**：暂无。

---

## 6. 功能请求与路线图信号

今日没有新的功能请求，也没有明确的产品路线图讨论。

可从依赖更新中观察到以下工程信号：

- **持续维护 Wasm 执行基础设施**：[#8162](https://github.com/nearai/ironclaw/pull/8162) 和 [#8163](https://github.com/nearai/ironclaw/pull/8163) 表明项目仍在关注 Wasm 运行时版本、安全修复和性能改进。
- **依赖版本统一可能是近期工作重点**：两个 PR 的基础版本分别为 47.0.3 和 47.0.4，目标版本分别为 48.0.7 和 49.0.5，可能反映不同模块尚未完全同步。
- **下一版本可能性**：若依赖升级通过完整 CI，并且项目近期发布新版本，这些变更可能被纳入下一版；当前没有 Release 或里程碑信息可用于确认。

---

## 7. 用户反馈摘要

今日没有 Issue 评论，也没有 PR 评论或点赞数据，因此无法提炼真实用户痛点、使用场景以及满意度反馈。

从自动化依赖 PR 可间接观察到：

- 项目存在 Rust/Wasm 运行环境和**延迟测试 harness** 的持续维护需求；
- Dependabot 正常提交升级任务，但维护者尚未来得及或尚未完成审核。

以上仅属于工程活动观察，不能视为用户需求或满意度的直接证据。

---

## 8. 待处理积压

由于数据仅覆盖过去 24 小时，无法可靠识别“长期未响应”的 Issue 或 PR。就当前可见记录而言：

- [#8162](https://github.com/nearai/ironclaw/pull/8162) 仍待审核和合并。
- [#8163](https://github.com/nearai/ironclaw/pull/8163) 仍待审核和合并。
- 两条 PR 均无评论、无点赞，建议维护者确认 CI 状态、兼容性和目标分支策略。
- 今日没有可标注为长期积压的 Issue；如需完整积压分析，应结合全量开放 Issue、PR 列表及最近更新时间进一步核查。

---

## 健康度结论

**项目状态：稳定、低活跃推进。**

今日没有用户可见功能发布，也没有 Bug 爆发或社区争议；依赖自动化运行正常。不过，两条关键 Wasmtime 升级 PR 仍停留在待处理状态，且主分支与大版本升级尚无人工确认。当前健康度可评为 **“稳定，但技术维护响应和版本推进信号偏弱”**。建议优先完成 [#8162](https://github.com/nearai/ironclaw/pull/8162) 与 [#8163](https://github.com/nearai/ironclaw/pull/8163) 的测试和审查，并明确两者是否需要统一版本后再合并。

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI 项目动态日报

**日报日期：2026-10-30**  
**数据范围：过去 24 小时 GitHub 仓库动态**  
**仓库：[netease-youdao/LobsterAI](https://github.com/netease-youdao/LobsterAI)**

---

## 一、今日速览

过去 24 小时仓库共出现 **2 条活跃 Issue 更新、6 条 PR 更新**，其中 **2 个 Issue 新开或恢复活跃，6 个 PR 均已关闭，未发现待合并 PR**。  
今日主要开发成果集中在 **媒体引用编码、OpenClaw/IM Agent 热更新、CoWork 行内上下文与媒体模型选择**，相关 PR 已关闭，说明修复和功能改进已经落地或完成收尾，但“关闭”不等同于全部 PR 均已合并，需关注具体合并状态。  
社区侧最突出的诉求是 **LobsterAI 账号误封申诉**，同一用户重新提交了 Issue，表明封禁判定、凭据配置影响及申诉渠道透明度仍存在明显信任问题。  
今日 **无新版本发布**，且此前积压的 3 个 Dependabot PR 被关闭并标记为 stale，依赖与 CI 安全更新暂未形成近期版本交付。  
综合评估：**开发侧活跃度中等偏高、交付侧偏弱**；功能修复持续推进，但发布节奏、用户申诉响应和长尾 PR 清理仍有改善空间。

---

## 二、项目进展

> 今日没有新版本发布，因此暂不涉及正式版本更新、破坏性变更或升级迁移说明。

### 1. 修复 MiniMax H3 本地音频引用

- **PR： [#2961 — fix(media): encode MiniMax H3 audio references with audio MIME types](https://github.com/netease-youdao/LobsterAI/pull/2961)**
- **状态：CLOSED**
- **涉及区域：** `docs`、`main`
- **核心内容：**
  - MP3、WAV 文件在 Electron 主进程转换为 data URL 时，原先统一使用 `application/octet-stream`。
  - 修改后分别使用 `audio/mpeg` 和 `audio/wav`，避免 MiniMax H3 因 MIME 类型不符合音频格式而拒绝引用数据。
- **价值：**
  - 提升本地音频作为模型上下文时的兼容性。
  - 修复结果直接影响 MiniMax H3 音频输入链路，属于明确的模型集成稳定性改进。
- **关注点：**
  - PR 已关闭，但摘要未明确说明是否以合并方式进入主分支；维护者宜在版本说明中确认修复已发布。

### 2. OpenClaw / IM Agent 工作目录热更新及模型配置重置

- **PR： [#2960 — fix(openclaw): hot-reload IM agent cwd and reset stale model overrides](https://github.com/netease-youdao/LobsterAI/pull/2960)**
- **状态：CLOSED**
- **涉及区域：** `main`、`openclaw`
- **核心内容：**
  - IM Agent 的运行工作目录改为从实时运行时配置快照读取。
  - 用户修改 Agent 工作目录后，不再需要重启 gateway。
  - 对绑定到已移除或已禁用 provider/model 的旧会话进行重置，避免继续使用失效模型覆盖配置。
- **价值：**
  - 降低配置变更后的重启成本和会话异常概率。
  - 解决模型提供商或模型被禁用后，历史会话仍保留失效覆盖项的问题。
- **影响评估：**
  - 属于运行时配置和会话状态管理的重要稳定性修复。
  - 若正式合入，可能涉及 Agent 工作目录语义及旧会话重置行为变化；发布时应提示用户重新检查 Agent 工作目录和默认模型设置。

### 3. CoWork 行内上下文标签及媒体模型选择优化

- **PR： [#2958 — feat(cowork): 优化行内上下文标签与媒体模型选择](https://github.com/netease-youdao/LobsterAI/pull/2958)**
- **状态：CLOSED**
- **涉及区域：** `renderer`、`cowork`
- **核心内容：**
  - 将技能、套件、计划等模式统一为行内上下文标签。
  - 支持在输入框开头连续按两次退格选中并移除标签。
  - 已在发送的消息中展示技能和套件详情。
  - 将“系统默认”“指定模型”“不生成媒体”调整为互斥选项。
  - 优化图片/视频切换、套件搜索时的面板布局，并调整计划卡片样式及中英文文案。
- **验证情况：**
  - ESLint 检查通过。
  - 相关 **53 个测试文件、400 项测试通过**。
  - 已在 Electron 开发版完成标签输入、退格移除、图片/视频模型选择面板的人工检查。
  - 完整生产构建在 PR 描述时尚未完成，因此不能仅依据当前信息认定发布验证全部结束。
- **价值：**
  - 改善技能、套件、计划与媒体模型的可见性和可操作性。
  - 体现 CoWork 正在从“功能堆叠”转向交互一致性和上下文可解释性。

### 4. 清理陈旧 Dependabot PR

以下 PR 均于今日关闭，并带有 `stale` 标签：

- [#2460 — bump rimraf from 5.0.10 to 6.1.3](https://github.com/netease-youdao/LobsterAI/pull/2460)
- [#2667 — bump trufflesecurity/trufflehog from 3.88.30 to 3.97.4](https://github.com/netease-youdao/LobsterAI/pull/2667)
- [#2666 — bump actions/labeler from 5 to 7](https://github.com/netease-youdao/LobsterAI/pull/2666)

**判断：**

- 清理陈旧自动化 PR 有助于降低维护噪声。
- 但 `rimraf`、TruffleHog、`actions/labeler` 均涉及依赖或 CI 安全链路；在没有替代 PR 或明确版本策略的情况下，这些更新可能继续延后。
- 今日没有待合并 PR，说明当前仓库更接近“阶段收尾”状态，而不是正在排队的连续集成状态。

### 总体推进程度

今日项目主要完成了三类推进：

1. **模型媒体兼容性修复**
2. **OpenClaw/IM Agent 运行时稳定性修复**
3. **CoWork 前端交互和媒体模型选择优化**

开发活动具有明确的连续性，但缺少新版本发布，因此成果向用户侧的实际交付仍需通过后续 Release/构建进行确认。

---

## 三、社区热点

### 1. 账号误封及误判申诉

#### 原 Issue

- [#2936 — [申诉] LobsterAI 账号被误封，未恶意使用却被封禁](https://github.com/netease-youdao/LobsterAI/issues/2936)
- **状态：OPEN**
- **创建时间：2026-10-23**
- **最近更新：2026-10-29**
- **评论数：5**
- **点赞数：0**

#### 重新提交的 Issue

- [#2959 — [申诉] LobsterAI 账号被误封，未恶意使用却被封禁（尾号 2020 / 0160）](https://github.com/netease-youdao/LobsterAI/issues/2959)
- **状态：OPEN**
- **创建时间：2026-10-29**
- **评论数：0**
- **点赞数：0**

### 热点分析

这是过去 24 小时社区中最集中、最值得优先响应的议题。申诉人反馈两个 LobsterAI 账号无法登录或使用，系统提示账号被封禁或异常，并强调没有恶意使用、刷接口或批量调用。申诉人同时说明曾在本地第三方 DSH 插件中配置 LobsterAI 账号凭据，用于调用有道模型服务，并认为该行为可能触发风控误判。

重新提交 Issue 的直接原因是原 Issue 标题历史曾包含个人手机号，申诉人要求维护者清理后在新 Issue 继续跟进。该情况暴露出三类问题：

1. **账号风控透明度不足：** 用户无法得知触发封禁的具体规则或证据。
2. **第三方凭据配置边界不清晰：** 本地调用与账号滥用之间的判定标准没有充分说明。
3. **隐私处理链路不完善：** Issue 标题编辑历史中的手机号仍可能被保留，GitHub 标题修改并不会自动清除历史记录。

从评论数和点赞数看，当前讨论热度并不高，但属于直接影响账号可用性的高优先级问题。建议维护者公开或至少私下说明申诉入口、复核流程、封禁原因分类，以及凭据是否会因异常调用模式被自动化风控识别。

---

## 四、Bug 与稳定性

按严重程度排列如下。

### 高优先级：账号被封禁或判定异常，申诉路径不清晰

- **相关 Issue：**
  - [#2936](https://github.com/netease-youdao/LobsterAI/issues/2936)
  - [#2959](https://github.com/netease-youdao/LobsterAI/issues/2959)
- **严重程度：高**
- **状态：** 两个 Issue 均为 OPEN
- **是否已有 fix PR：** **未发现**
- **影响：**
  - 用户完全无法登录或使用账号。
  - 可能损伤对自动风控和账号申诉机制的信任。
  - 第三方插件配置凭据是否触发风控，缺少明确边界说明。
- **建议：**
  - 优先人工复核两个账号状态。
  - 明确封禁原因、违规判定依据及申诉 SLA。
  - 在文档中说明第三方工具调用凭据的允许范围和推荐接入方式。
  - 增加 Issue 隐私清理说明，避免手机号等敏感信息继续留在标题历史中。

### 中优先级：MiniMax H3 无法识别本地音频 data URL

- **相关 PR：** [#2961](https://github.com/netease-youdao/LobsterAI/pull/2961)
- **严重程度：中**
- **状态：** PR 已关闭
- **是否已有 fix PR：** **是，#2961**
- **影响：**
  - MP3/WAV 音频引用会被 MiniMax H3 拒绝。
  - 属于确定性的模型输入兼容问题，不涉及崩溃或数据丢失。
- **建议：**
  - 确认该 PR 已合并进入待发布分支。
  - 补充 MP3、WAV 及不支持格式的回归测试。
  - Release 中注明修复范围，避免用户重复排查本地模型配置。

### 中低优先级：Agent 工作目录修改后必须重启 gateway

- **相关 PR：** [#2960](https://github.com/netease-youdao/LobsterAI/pull/2960)
- **严重程度：中低**
- **状态：** PR 已关闭
- **是否已有 fix PR：** **是，#2960**
- **影响：**
  - 配置变更不能即时生效，增加操作成本。
  - 用户可能在旧工作目录中继续执行任务，带来上下文或文件位置错误。

### 中低优先级：会话保留已删除或已禁用的模型覆盖项

- **相关 PR：** [#2960](https://github.com/netease-youdao/LobsterAI/pull/2960)
- **严重程度：中低**
- **状态：** PR 已关闭
- **是否已有 fix PR：** **是，#2960**
- **影响：**
  - 历史会话可能继续引用无效模型。
  - 可能引发请求失败或运行行为与用户当前配置不一致。

### 低优先级：CoWork 媒体模型选项与上下文标签交互问题

- **相关 PR：** [#2958](https://github.com/netease-youdao/LobsterAI/pull/2958)
- **严重程度：低**
- **状态：** PR 已关闭
- **是否已有 fix PR：** **是，#2958**
- **影响：**
  - 主要表现为交互不一致、模型选择歧义和布局稳定性问题。
  - 已有较完整自动化测试覆盖，但完整生产构建在 PR 描述时尚未完成。

---

## 五、功能请求与路线图信号

### 1. 账号封禁复核与透明申诉机制

**来源：**

- [#2936](https://github.com/netease-youdao/LobsterAI/issues/2936)
- [#2959](https://github.com/netease-youdao/LobsterAI/issues/2959)

这是用户当前最明确的功能诉求。它不一定是传统意义上的产品功能，但可转化为以下路线图项目：

- 账号状态与封禁原因查询页面
- 标准化人工申诉入口
- 封禁规则及第三方凭据调用边界说明
- 申诉处理进度和结果通知
- Issue 中敏感信息清理指引

由于尚无对应 PR，这项需求目前更像是“待确认的产品与服务能力”，而非已进入下一版本的明确功能。

### 2. CoWork 上下文体系继续统一

**来源：**

- [#2958](https://github.com/netease-youdao/LobsterAI/pull/2958)

PR 已将技能、套件、计划统一为行内上下文标签，并补齐已发送消息中的详情查看。基于当前实现方向，下一阶段可能继续推进：

- 上下文标签的完整生命周期管理
- 标签与模型、媒体生成选项之间的联动
- 更统一的中英文文案与视觉规范
- 上下文的可追溯性和结果解释

这些属于已有工作流的自然延伸，进入下一版本的概率较高，但需以完整生产构建通过为前提。

### 3. 媒体模型选择和多媒体上下文能力

**来源：**

- [#2958](https://github.com/netease-youdao/LobsterAI/pull/2958)
- [#2961](https://github.com/netease-youdao/LobsterAI/pull/2961)

两个 PR 分别覆盖媒体选择 UI 和音频 MIME 类型，显示出多媒体支持正在持续完善。下一版本可能继续涉及：

- 图片、视频、音频模型选择的一致化
- 本地媒体引用在不同模型供应商之间的兼容
- 多模态输入失败时的明确错误提示
- 默认模型、指定模型与禁用生成状态的统一语义

### 4. OpenClaw / IM Agent 配置热更新

**来源：**

- [#2960](https://github.com/netease-youdao/LobsterAI/pull/2960)

该 PR 表明 OpenClaw/IM Agent 正从静态配置向运行时动态配置演进。后续可能继续优化：

- Agent 工作目录、模型和提供商配置的统一热更新
- 配置变更后的会话迁移或安全重置
- gateway 无重启切换能力的可观测性
- 配置冲突与失效覆盖项提示

### 5. 依赖与 CI 安全更新重新落地

**来源：**

- [#2460](https://github.com/netease-youdao/LobsterAI/pull/2460)
- [#2667](https://github.com/netease-youdao/LobsterAI/pull/2667)
- [#2666](https://github.com/netease-youdao/LobsterAI/pull/2666)

这些 PR 被标记为 stale 并关闭，不代表需求失效。若近期版本需要构建或安全扫描，建议重新生成依赖升级 PR，优先处理 TruffleHog 和 `actions/labeler` 的版本更新。

---

## 六、用户反馈摘要

### 真实使用场景

- 申诉用户在本地第三方 DSH 插件中配置 LobsterAI 账号凭据，以调用有道模型服务。
- 该场景属于进阶用户将 LobsterAI 账号用于本地工具链或自动化工作流，而不是仅使用官方客户端。
- 用户明确否认刷接口、批量调用或恶意使用，说明其主要诉求不是规避处罚，而是获得人工复核和合理解释。

### 主要痛点

1. **账号不可用且原因不透明**
   - 用户看到的是“封禁或异常”，但无法定位具体触发条件。
   - 缺少可理解、可追踪的申诉反馈。

2. **第三方调用场景与风控规则冲突**
   - 用户已主动清理或调整相关配置，但账号仍无法使用。
   - 用户不清楚本地凭据调用是否会被认定为异常使用。

3. **Issue 隐私无法彻底撤回**
   - 原 Issue 标题历史包含个人手机号。
   - 修改标题后仍需重新提交 Issue，说明敏感信息发布后的撤回流程不清晰。

4. **重复提交增加社区信息噪声**
   - 两个内容高度相似的开放 Issue 会分散关注度。
   - 更合理的处理方式是保留主 Issue、建立隐私安全的后续讨论方案，而不是重复创建条目。

### 满意与不满意情况

- **可验证的正面信号：**
  - [#2958](https://github.com/netease-youdao/LobsterAI/pull/2958) 通过了 **53 个测试文件、400 项测试**，并完成 Electron 开发版人工检查，说明团队对 CoWork 交互改进有较完整的自测投入。
  - [#2960](https://github.com/netease-youdao/LobsterAI/pull/2960) 聚焦实际配置痛点，修复方向明确。

- **明显不满意或未满足的诉求：**
  - 两个账号封禁申诉 Issue 均仍为 OPEN，且重新提交的 [#2959](https://github.com/netease-youdao/LobsterAI/issues/2959) 尚无评论。
  - 用户尚未获得关于封禁依据、复核进度或凭据使用边界的正式反馈。
  - 今日无新版本发布，用户可能难以判断近期 PR 中哪些修复已经实际可用。

---

## 七、待处理积压

### 1. 两个账号误封申诉仍处于开放状态

- [#2936](https://github.com/netease-youdao/LobsterAI/issues/2936)
- [#2959](https://github.com/netease-youdao/LobsterAI/issues/2959)
- **积压情况：**
  - #2936 创建于 2026-10-23，至少存在数日未闭环。
  - #2959 创建于 2026-10-29，当前无评论。
- **建议：**
  - 立即人工复核账号状态。
  - 明确指定一个主 Issue 承接后续沟通，减少重复 Issue。
  - 对标题历史中的手机号提供清理建议。

### 2. 陈旧依赖与 CI PR 长期未处理

- [#2460](https://github.com/netease-youdao/LobsterAI/pull/2460)：rimraf 5.0.10 → 6.1.3
- [#2667](https://github.com/netease-youdao/LobsterAI/pull/2667)：TruffleHog 3.88.30 → 3.97.4
- [#2666](https://github.com/netease-youdao/LobsterAI/pull/2666)：actions/labeler 5 → 7
- **积压情况：**
  - 三项分别创建于 2026-08-10 和 2026-09-14，至今才关闭并标记 stale。
- **建议：**
  - 不要只关闭旧 PR，应为仍需升级的依赖建立替代 PR。
  - 优先评估 TruffleHog 和 GitHub Action 主版本升级的兼容性。
  - 明确自动升级 PR 的响应周期与安全更新 SLA。

### 3. 已关闭 PR 的合并与发布状态需要核对

今日关闭的重要 PR：

- [#2961](https://github.com/netease-youdao/LobsterAI/pull/2961)
- [#2960](https://github.com/netease-youdao/LobsterAI/pull/2960)
- [#2958](https://github.com/netease-youdao/LobsterAI/pull/2958)

**积压风险：**

- 数据只显示 PR 为 CLOSED，无法确认是“已合并后关闭”还是“未合并即关闭”。
- 今日无 Release，进一步增加了用户无法判断修复落地的风险。
- 建议维护者补充分支状态、发布版本及回归测试结论。

---

## 八、项目健康度结论

| 维度 | 今日评价 | 依据 |
|---|---|---|
| 开发活跃度 | 中等偏高 | 24 小时内更新 6 个 PR，涉及运行时、媒体、OpenClaw 与 CoWork 多个方向 |
| 功能推进 | 良好 | 媒体兼容、Agent 热更新、上下文和媒体模型交互均有明确改进 |
| 稳定性 | 中等 | 多个具体问题已有修复，但 PR 关闭不等于确认合并及发布 |
| 发布节奏 | 偏弱 | 今日无新版本，修复向用户交付不明确 |
| 社区响应 | 需关注 | 两条账号误封申诉仍开放，重提 Issue 暂无回应 |
| 社区热度 | 偏低但敏感 | 评论和点赞较少，账号可用性类问题具有高影响 |
| 工程治理 | 一般 | 清理 stale PR 有积极意义，但安全与构建依赖更新被长期搁置 |

**综合判断：项目今日技术推进较为扎实，呈现稳定开发状态，但发布闭环和账号风控/申诉体验是当前最明显的短板。** 建议下一阶段优先完成三件事：

1. 核验并发布 [#2961](https://github.com/netease-youdao/LobsterAI/pull/2961)、[#2960](https://github.com/netease-youdao/LobsterAI/pull/2960)、[#2958](https://github.com/netease-youdao/LobsterAI/pull/2958) 的合并与版本归属；
2. 对 [#2936](https://github.com/netease-youdao/LobsterAI/issues/2936) 与 [#2959](https://github.com/netease-youdao/LobsterAI/issues/2959) 给出人工复核和隐私清理结论；
3. 重新安排 Dependabot 安全与构建依赖升级，避免陈旧 PR 长期积压。

</details>

<details>
<summary><strong>QwenPaw</strong> — <a href="https://github.com/agentscope-ai/QwenPaw">agentscope-ai/QwenPaw</a></summary>

# QwenPaw 项目动态日报

**日期：2026-10-30**  
**数据范围：过去 24 小时**  
**仓库：** [agentscope-ai/QwenPaw](https://github.com/agentscope-ai/QwenPaw)

---

## 1. 今日速览

过去 24 小时共更新 **12 条 Issues** 和 **35 条 Pull Requests**，其中 Issue 新开或活跃 **4 条、关闭 8 条**，PR 待合并 **24 条、合并或关闭 11 条**。项目开发吞吐较高，主要集中在**插件化、本地模型、记忆系统、内存与请求稳定性、安全性及桌面端体验**等方向。  
今日没有新版本发布，但社区已发现 **v2.3.0-beta.1 插件加载失败、桌面端资源缺失和记忆静默丢失**等重要问题，当前健康度评估为**活跃但 Beta 稳定性承压**。建议维护者优先处理影响启动、核心数据可靠性和桌面发布的回归问题。

---

## 3. 项目进展

> 今日没有 Release，因此本节聚焦已合并或关闭的重要 PR。  
> 今日 PR 总量为 35 条，其中已合并/关闭 11 条；以下 PR 与关闭 Issue 的对应关系明确，足以确认具体修复已推进，但仅凭当前数据无法判断全部 11 条 PR 的具体合并提交时间。

### 2.3.0-beta.1 插件启动故障已有对应修复

- [#8497 — fix(plugins): tolerate import cache refresh failures during plugin loading](https://github.com/agentscope-ai/QwenPaw/pull/8497) 已关闭，直接对应 [#8473](https://github.com/agentscope-ai/QwenPaw/issues/8473) 报告的插件加载失败问题。
- 该问题由 `module_isolation.py` 中未保护的 `importlib.invalidate_caches()` 引发，beta.1 环境中可能导致全部后端插件在启动阶段加载失败。
- 修复方向是容忍导入缓存刷新异常，避免单个缓存操作令插件发现与启动链路整体中断。

**进展判断：** 这是针对 Beta 版本影响范围最大的可用性修复之一，但当前 PR 状态为关闭而非明确标注“已合并”，发布前仍需确认修复是否进入目标分支并补充回归测试。

### 插件单元测试执行时间优化

- [#8489 — fix(test): reduce plugin unit test execution time](https://github.com/agentscope-ai/QwenPaw/pull/8489) 已关闭。
- 该 PR 同时涉及插件单元测试提速和失败修复，有助于降低插件体系迭代成本。
- 对项目而言，这是基础设施型改进：当前大量 PR 正在推进插件化，测试时延下降将提升后续合并和发布效率。

### 控制台聊天图片浏览体验改进

- [#5490 — feat(console): navigable fullscreen image gallery for chat media](https://github.com/agentscope-ai/QwenPaw/pull/5490) 已关闭。
- 目标是将聊天中的多张图片纳入同一预览组，支持在图片间导航，解决此前全屏预览只能查看单张图片的问题。
- 该变更提升了控制台多模态交互体验，尤其适用于 Agent 连续生成、截图或对比多张图片的场景。

### 测试断言与实际 API 路由对齐

- [#8308 — test(api): align integration assertions with existing routes](https://github.com/agentscope-ai/QwenPaw/pull/8308) 仍处于开放状态，但内容聚焦修复集成测试与现有 API 路由不一致的问题。
- 这类工作有助于恢复测试结果的真实性，降低“测试失败但与产品回归无关”的维护噪声。

### 项目整体前进程度

今日代码活动覆盖多个核心架构层：

1. **插件化重构**：本地模型管理和第三方 Agent 开始从核心代码抽离；
2. **模型能力扩展**：加入本地 Piccolo 决策模型、OpenViking 记忆后端；
3. **运行时控制**：Cron Job 支持独立思考等级；
4. **安全与稳定性**：覆盖环境变量脱敏、媒体请求体上限、插件加载异常；
5. **体验修复**：控制台图标、引用回复命令路由、桌面文件预览等。

整体可评价为：**架构演进明显、功能覆盖面扩大，但多个关键改造仍待评审和合并，Beta 发布质量尚未完全稳定。**

---

## 4. 社区热点

### Issues

#### 1. [#8500 — Auto-Dream silently drops memory](https://github.com/agentscope-ai/QwenPaw/issues/8500)

- 状态：**开放**
- 今日评论：**2 条**
- 热度判断：今日新开且直接影响核心数据可靠性。

当 Auto-Dream 无法解析 Agent 回复时，系统会丢弃整日记忆，却仍对相关文件执行 checkpoint，最终运行还报告 `success=True`。这意味着记忆不仅会丢失，而且不会在后续重试。

**背后诉求：** 用户需要记忆抽取具备明确的事务语义——解析失败应保留待处理状态，不能静默确认成功；此外需要可观测日志和失败告警。

#### 2. [#8488 — Desktop build omits visual_compression assets](https://github.com/agentscope-ai/QwenPaw/issues/8488)

- 状态：**开放**
- 今日评论：**2 条**
- 热度判断：影响 Beta 桌面端核心功能且故障方式隐蔽。

Windows/PyInstaller 构建未包含 `visual_compression` 的字形图集资源，导致 Visual Compact 静默失效，并出现 `atlas-gray-native.ts` 文件缺失错误。

**背后诉求：** 发布包必须自动包含模型与算法资源，且构建流程应增加资源完整性校验，避免功能“看似可配置、实际无效果”。

#### 3. [#8464 — 手动 `/compact` 无视会话级模型切换](https://github.com/agentscope-ai/QwenPaw/issues/8464)

- 状态：**已关闭**
- 今日评论：**5 条**
- 热度判断：所列 Issues 中评论最多，讨论围绕模型路由语义展开。

会话已切换到 M2，但手动压缩仍使用 `agent.json` 中的 `active_model`（M1）生成摘要；当 M1 严格校验参数时，压缩请求返回 400。

**背后诉求：** 手动压缩、自动压缩和会话推理应遵循一致的模型继承规则，并明确配置优先级，避免用户切换模型后后台任务仍暗中使用旧模型。

#### 4. [#8502 — 桌面端 HTML 预览“在浏览器中打开”失效](https://github.com/agentscope-ai/QwenPaw/issues/8502)

- 状态：**开放**
- 今日评论：**1 条**
- 热度判断：今日新开的明确桌面端回归问题。

在 Windows 11 中文系统环境下，含中文路径的工作区 HTML 文件无法通过“在浏览器中打开”；工作区外文件点击则无反应。

**背后诉求：** 桌面端文件预览需要正确处理 Unicode 路径、跨工作区文件权限和浏览器启动协议，不能只支持简单的 ASCII 工作区路径。

### Pull Requests

#### 1. [#8499 — Extract local model management into plugin](https://github.com/agentscope-ai/QwenPaw/pull/8499)

- 状态：**开放**
- 规模：**XXXL**
- 热度判断：今日体量最大、架构影响最深的核心 PR 之一。

将模型下载、llama.cpp 安装和服务生命周期从主程序抽离为 Provider 插件，同时由宿主保留模型选择与统一推理能力；目标还包括兼容已有配置与模型文件。

**背后诉求：** 降低核心与具体本地模型实现的耦合，使本地模型运行时能够独立演进。

#### 2. [#8426 — Extract third-party agent into plugins](https://github.com/agentscope-ai/QwenPaw/pull/8426)

- 状态：**开放**
- 规模：**XXXL**

把第三方 Agent 能力抽离为插件，是今日插件化路线的另一项核心架构改造。后续本地模型、第三方 Agent、记忆后端可形成统一的插件生态。

#### 3. [#7874 — Redesign the SDK and app control plane](https://github.com/agentscope-ai/QwenPaw/pull/7874)

- 状态：**开放**
- 规模：**XXXL**

重构 PawApps SDK 与应用控制平面，通过共享、作用域化 Host 契约暴露持久化工作，统一处理任务身份、重试、权限、初始化、提问与审批。

**背后诉求：** 让应用运行、外部运行时与主聊天之间形成稳定协议，减少各应用重复实现控制逻辑。

#### 4. [#7613 — Add OpenViking memory plugin](https://github.com/agentscope-ai/QwenPaw/pull/7613)

- 状态：**开放**
- 标签：首次贡献者
- 规模：**XXL**

增加 OpenViking 记忆后端，支持自动召回、回合完成后的持久化，以及通过 OpenViking REST API 提供显式 `memory_search` 工具。PR 已根据评审反馈处理首次安装 ID 的并发问题。

**背后诉求：** 为长期记忆提供可替换后端，降低单一记忆方案绑定。

#### 5. [#8034 — Bound inline media per request, not just per file](https://github.com/agentscope-ai/QwenPaw/pull/8034)

- 状态：**开放**
- 规模：**XL**

现有逻辑仅限制单个文件大小，无法限制整个请求体；大量图片会持续累积并导致请求体积过大。此次修复将内联媒体上限扩展到单次请求。

**背后诉求：** 防止多模态会话触发网关请求体限制、延迟上升及成本不可控。

---

## 5. Bug 与稳定性

### 严重级别：P0 / 阻断发布

#### 1. Beta 版本后端插件可能全部加载失败

- Issue：[#8473 — all backend plugins fail to load at startup](https://github.com/agentscope-ai/QwenPaw/issues/8473)
- 状态：已关闭
- 影响：`2.3.0-beta.1` 环境中，主机上 12/12 个声明 backend entry point 的插件均可能在启动时失败。
- 原因：`module_isolation.py:220` 中未保护的 `importlib.invalidate_caches()` 抛出 `TypeError`。
- 对应修复：[#8497](https://github.com/agentscope-ai/QwenPaw/pull/8497)，已关闭。
- 判断：**已有 fix PR，但需确认修复已实际合入目标发布分支并完成全插件启动回归。**

#### 2. Auto-Dream 静默丢失记忆并错误 checkpoint

- Issue：[#8500](https://github.com/agentscope-ai/QwenPaw/issues/8500)
- 状态：开放
- 影响：抽取解析失败后，整日记忆不可恢复；系统仍报告成功。
- 对应 fix PR：**当前所列数据中未见明确对应 PR。**
- 判断：**高优先级数据可靠性缺陷，需增加失败重试与 checkpoint 事务保护。**

### 严重级别：P1 / 核心功能明显受损

#### 3. 桌面端 Visual Compact 因资源缺失而静默失效

- Issue：[#8488](https://github.com/agentscope-ai/QwenPaw/issues/8488)
- 状态：开放
- 影响：Windows PyInstaller 包中视觉压缩无法运行，报 `FileNotFoundError`。
- 对应 fix PR：**当前未发现明确对应 PR。**
- 判断：**应作为 Beta 发布阻断项处理，并增加打包产物资源检查。**

#### 4. 桌面端中文路径与工作区外 HTML 无法在浏览器打开

- Issue：[#8502](https://github.com/agentscope-ai/QwenPaw/issues/8502)
- 状态：开放
- 影响：中文路径提示找不到文件；工作区外文件点击无响应。
- 对应 fix PR：**当前未发现明确对应 PR。**
- 判断：**涉及路径编码、权限边界和浏览器启动链路，需拆分为可验证的子问题。**

#### 5. 手动压缩忽略会话模型切换

- Issue：[#8464](https://github.com/agentscope-ai/QwenPaw/issues/8464)
- 状态：已关闭
- 影响：摘要请求发往错误的 agent 默认模型，可能因参数校验返回 400。
- 对应 fix PR：**所列 PR 中未见明确对应项，但 Issue 已关闭。**
- 判断：**需确认关闭原因是否为修复、重复或暂不处理。**

#### 6. 打开语音转写设置页造成约 690 MB 常驻内存增长

- Issue：[#8490](https://github.com/agentscope-ai/QwenPaw/issues/8490)
- 状态：开放
- 影响：状态检查接口直接执行 `import whisper`，模型加载后常驻服务进程且未释放。
- 对应 fix PR：**当前未发现明确对应 PR。**
- 判断：**应改为元数据/依赖检测，避免状态页触发重型模型导入。**

### 严重级别：P2 / 稳定性与资源控制风险

#### 7. 单次请求内联媒体总量不受限制

- Issue/PR：[#8034 — Bound inline media per request](https://github.com/agentscope-ai/QwenPaw/pull/8034)
- 状态：开放
- 影响：多张小体积图片持续累积，可能超过网关请求体限制。
- 修复状态：**已有明确 fix PR，尚未合并。**

#### 8. Agent 在单回合重复调用同一工具

- Issue：[#6116 — Doom loop](https://github.com/agentscope-ai/QwenPaw/issues/6116)
- 状态：已关闭，标记 `wontfix`
- 影响：系统约在连续重复 6 次后才告警，造成 API 调用与 Token 浪费。
- 修复状态：**未计划修复**。
- 判断：尽管标记 `wontfix`，重复工具调用仍是成本和稳定性风险，宜通过更早熔断、低成本去重或调用预算改善。

#### 9. ReMe reranker 启用配置缺少 API Key 校验

- PR：[#8291 — require non-empty api_key for ReMe reranker enablement](https://github.com/agentscope-ai/QwenPaw/pull/8291)
- 状态：开放
- 影响：配置可能在缺少凭据时仍被视为已启用。
- 修复状态：**已有 fix PR，等待合并。**

#### 10. 环境变量在 CLI 中明文输出

- PR：[#8501 — mask env var values by default in `env list` and `env set`](https://github.com/agentscope-ai/QwenPaw/pull/8501)
- 状态：开放
- 影响：API Key 等敏感值可能直接显示在终端、日志或录屏中。
- 修复状态：**已有 fix PR，等待合并。**

---

## 6. 功能请求与路线图信号

### 6.1 结构化决策持久化 API

- 需求 Issue：[#6189 — save_decision() API](https://github.com/agentscope-ai/QwenPaw/issues/6189)
- 状态：已关闭
- 诉求：提供框架级 `save_decision()` 原语，将用户确认的方案、技术选型等关键决策结构化保存，防止上下文压缩后 Agent 回退到旧决策。
- 路线判断：与正在推进的 [OpenViking 记忆插件 #7613](https://github.com/agentscope-ai/QwenPaw/pull/7613) 和 [自动召回引用上下文 #8457](https://github.com/agentscope-ai/QwenPaw/pull/8457) 高度一致，**很可能成为记忆系统下一阶段的重要能力**，但目前没有直接实现该 API 的 PR。

### 6.2 更细粒度的文件守卫与工具守卫

- 需求 Issue：[#4356 — Finer granular control/integration of file guard and tool guard](https://github.com/agentscope-ai/QwenPaw/issues/4356)
- 状态：已关闭
- 诉求：除完全禁止访问外，支持目录只读；工具守卫支持项目目录白名单等更细粒度策略。
- 路线判断：与插件化后统一权限、作用域和应用审批的 [PawApps 控制平面 #7874](https://github.com/agentscope-ai/QwenPaw/pull/7874) 方向一致，**可能纳入后续权限模型重构**，但未见直接实现 PR。

### 6.3 类似 Claude Code `/rewind` 的回滚能力

- 需求 Issue：[#4129 — Rewind function to save corrupted file or context](https://github.com/agentscope-ai/QwenPaw/issues/4129)
- 状态：已关闭
- 诉求：在文件被 Agent 错误修改或上下文被污染后，回滚文件和会话状态。
- 路线判断：这是高价值但实现复杂度较高的功能，可能依赖文件快照、任务事件日志和对话状态持久化。**近期进入正式版本的信号较弱，但值得保留在路线图中。**

### 6.4 Cron Job 独立推理强度

- PR：[#8476 — add thinking_level to JobRuntimeSpec](https://github.com/agentscope-ai/QwenPaw/pull/8476)
- 状态：开放
- 诉求：在 `JobRuntimeSpec` 中加入 `thinking_level` 和可选 `thinking_budget`，允许定时任务独立于 Agent 默认推理配置。
- 路线判断：**具备明确、范围可控，预计是近期候选功能**，但仍需完成评审与合并。

### 6.5 本地模型与第三方 Agent 全面插件化

- PR：[#8499](https://github.com/agentscope-ai/QwenPaw/pull/8499)、[#8426](https://github.com/agentscope-ai/QwenPaw/pull/8426)
- 路线信号：插件正在从“附加能力”演变为核心架构边界。本地模型下载、llama.cpp 生命周期和第三方 Agent 均将独立成插件。
- 影响：有利于降低升级耦合，但也会提高插件 API 稳定性、打包兼容和测试成本要求。

### 6.6 本地 Piccolo 决策模型

- PR：[#8463 — run local Piccolo with bidirectional candidate scoring](https://github.com/agentscope-ai/QwenPaw/pull/8463)
- 路线信号：本地模型不仅用于回答问题，还可能承担 Jev 决策、工具审查和 ReMe 上下文压缩。
- 判断：技术方向有潜力，但要求双向注意力与候选 token 打分，现阶段不宜用普通 Chat Completions 适配器近似替代。

---

## 7. 用户反馈摘要

### 主要使用场景

1. **长会话与上下文压缩**
   - 用户在约 34 万 token 的会话中手动触发 `/compact`，并期望摘要遵循当前会话模型。
   - 关键决策在压缩后可能丢失，说明“记住什么、由哪个模型压缩、如何持久化”仍是高频痛点。
   - 相关链接：[#8464](https://github.com/agentscope-ai/QwenPaw/issues/8464)、[#6189](https://github.com/agentscope-ai/QwenPaw/issues/6189)

2. **Windows 中文路径下的桌面开发工作流**
   - 用户在工作区生成依赖 JavaScript 的单文件 HTML 仪表盘，再通过预览面板用 Edge 打开。
   - 中文路径和工作区外文件均暴露兼容性问题，实际使用阻塞明显。
   - 相关链接：[#8502](https://github.com/agentscope-ai/QwenPaw/issues/8502)

3. **Agent 自动记忆与后台任务**
   - 用户依赖 Auto-Dream 自动抽取、归档每日记忆。
   - 当前成功状态不可信：抽取失败时数据仍会被 checkpoint，用户难以察觉内容已丢失。
   - 相关链接：[#8500](https://github.com/agentscope-ai/QwenPaw/issues/8500)

4. **视觉压缩与多模态会话**
   - 用户依赖 Visual Compact 降低视觉上下文成本，但桌面构建中功能实际不可用。
   - 多张内联图片还可能形成超出网关限制的大请求体。
   - 相关链接：[#8488](https://github.com/agentscope-ai/QwenPaw/issues/8488)、[#8034](https://github.com/agentscope-ai/QwenPaw/pull/8034)

5. **本地模型与 Ollama 初始化**
   - 用户希望安装后自动发现 Ollama 已有模型，而不是在模型已存在时仍被激活流程拒绝。
   - 相关链接：[#8309](https://github.com/agentscope-ai/QwenPaw/pull/8309)

### 满意与积极反馈

- 控制台多图全屏导航改造获得了具体正向场景支持，改善了聊天图片浏览体验：[ #5490](https://github.com/agentscope-ai/QwenPaw/pull/5490)。
- OpenViking 记忆插件和首次贡献者 PR 持续更新，表明外部贡献者正积极参与记忆与插件生态：[#7613](https://github.com/agentscope-ai/QwenPaw/pull/7613)。
- v2.3.0-beta.1 安装验证任务持续有机器人跟踪：[ #8456](https://github.com/agentscope-ai/QwenPaw/issues/8456)，说明项目已有初步发布检查流程。

### 不满与信任问题

- 用户并不主要抱怨“功能少”，而更在意**失败是否可见、数据是否丢失、配置是否真正生效**。
- Auto-Dream 返回 `success=True` 却丢数据、Visual Compact 静默失效、模型切换后压缩仍走旧模型，均会削弱对自动化功能的信任。
- 中文路径问题表明桌面端对国际化文件系统的验证仍不充分。

---

## 8. 待处理积压

### 长期开放且具有架构影响的问题

#### [#6116 — Agent 重复调用同一工具形成 doom loop](https://github.com/agentscope-ai/QwenPaw/issues/6116)

- 创建于 2026-07-14，至今仍开放后被关闭为 `wontfix`。
- 长期未形成正式修复，用户侧仍承担重复 API 调用与 Token 浪费。
- 建议：即使不实现完整循环恢复，也应提供低成本重复调用熔断和用户配置项。

#### [#6189 — `save_decision()` 结构化决策持久化 API](https://github.com/agentscope-ai/QwenPaw/issues/6189)

- 创建于 2026-07-16。
- 与长上下文决策丢失直接相关，也与当前记忆插件路线高度相关。
- 建议：在 OpenViking/ReMe 记忆架构中明确决策对象的存储、检索、压缩和迁移方案。

#### [#4356 — 文件守卫和工具守卫细粒度控制](https://github.com/agentscope-ai/QwenPaw/issues/4356)

- 创建于 2026-05-14，跨度较大。
- 需求从黑名单扩展到只读、白名单和项目级隔离，反映权限模型已不足以支撑插件化生态。
- 建议：与 PawApps Host 权限和应用作用域设计合并规划。

#### [#4129 — 文件和上下文回滚能力](https://github.com/agentscope-ai/QwenPaw/issues/4129)

- 创建于 2026-05-08。
- 涉及 Agent 错误修改文件、上下文污染和实验回退等普遍场景。
- 建议：先定义轻量版本——文件快照、用户确认、消息级 rewind，再逐步扩展到任务级恢复。

### 长时间待评审 PR

#### [#7874 — PawApps SDK 与控制平面重构](https://github.com/agentscope-ai/QwenPaw/pull/7874)

- 创建于 2026-09-19，仍处于开放状态。
- 体量大、接口影响广，容易成为插件和第三方 App 生态的阻塞点。
- 建议：明确兼容策略、Host 契约稳定性和迁移窗口。

#### [#8034 — 限制单次请求内联媒体总量](https://github.com/agentscope-ai/QwenPaw/pull/8034)

- 创建于 2026-09-29，仍待评审。
- 属于明确的多模态稳定性问题，建议加快验证并设置请求体与媒体数量双阈值。

#### [#7835 — 停止向渠道泄漏自动记忆召回载荷](https://github.com/agentscope-ai/QwenPaw/pull/7835)

- 创建于 2026-09-17，仍待评审。
- 涉及内部上下文与外部渠道之间的信息边界，对隐私和交互质量均有影响。
- 建议：与 [#8457](https://github.com/agentscope-ai/QwenPaw/pull/8457) 一并评审，避免记忆注入方案发生分叉。

#### [#8309 — Ollama 模型发现后激活](https://github.com/agentscope-ai/QwenPaw/pull/8309)

- 创建于 2026-10-18，仍待评审。
- 影响安装和初始化体验，属于适合快速收敛的小范围修复。

### 维护建议

1. **先处理发布阻断项**：确认 [#8497](https://github.com/agentscope-ai/QwenPaw/pull/8497) 是否真正进入目标分支，并补充所有 backend entry point 的启动回归测试。
2. **保护记忆数据链**：优先修复 [#8500](https://github.com/agentscope-ai/QwenPaw/issues/8500)，确保失败不 checkpoint，并向用户暴露抽取状态。
3. **完善桌面发布校验**：针对 [#8488](https://github.com/agentscope-ai/QwenPaw/issues/8488) 建立资源清单和打包完整性测试，同时覆盖中文路径。
4. **收敛安全修复**：优先合并环境变量脱敏 [#8501](https://github.com/agentscope-ai/QwenPaw/pull/8501) 和请求媒体上限 [#8034](https://github.com/agentscope-ai/QwenPaw/pull/8034)。
5. **统一记忆设计**：协调 [#8457](https://github.com/agentscope-ai/QwenPaw/pull/8457)、[#7835](https://github.com/agentscope-ai/QwenPaw/pull/7835)、[#7613](https://github.com/agentscope-ai/QwenPaw/pull/7613)，明确自动召回的内部表示、外部可见性和持久化边界。

---

## 总体健康度结论

**项目活跃度：高**  
**功能推进度：高**  
**合并与评审压力：较高**  
**Beta 稳定性：偏弱**  
**数据可靠性风险：需重点关注**

QwenPaw 当前正从单体式 Agent 框架向“插件化宿主 + 可替换模型与记忆后端 + 多端应用控制平面”演进，功能路线清晰且社区贡献活跃。但今日问题集中在插件加载、记忆丢失、桌面资源打包、路径兼容和模型路由等基础链路，说明**架构扩张速度已超过部分关键场景的验证与回归能力**。短期应优先提高 Beta 的可安装性、可恢复性和数据可信度，再推进更大规模的插件生态重构。

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/NousResearch/hermes-agent">NousResearch/hermes-agent</a></summary>

# Hermes Agent 项目动态日报

**日期：2026-10-30**  
**统计范围：过去 24 小时**  
**项目：** [NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent)

---

## 1. 今日速览

过去 24 小时共更新 **50 条 Issues**（48 条新开或活跃、2 条关闭）和 **50 条 PR**（全部待合并），项目讨论与开发吞吐均处于高位。今日议题主要集中于 **Desktop/Gateway 会话状态、模型与上下文配置、Windows 文件操作、Docker 沙箱边界以及安全防护**。PR 数量与 Issue 数量同为 50，但样本 PR 均未合并，且暂无新版本发布，说明当前开发活跃度较高，成果尚未进入稳定发布周期。整体健康度可评估为 **中高活跃、存在若干稳定性风险**：功能推进明显，但会话租约泄漏、配置漂移、跨 Profile 数据隔离等问题仍需优先收敛。

---

## 2. 版本发布

过去 24 小时 **无新版本发布**，因此没有新增版本说明、破坏性变更或迁移注意事项。

> 说明：今日更新的 Issue 与 PR 中出现了针对 v0.22.2、v0.22.5+ 及 main 分支的不同版本描述，相关修复能否进入下一次正式发布，仍需以后续合并和发版记录为准。

---

## 3. 项目进展

今日没有已合并或关闭的 PR；以下 **50 条 PR 均处于待合并状态**。当前进展主要体现为已提交、待审核和测试的修复与增强。

### 3.1 模型、上下文与提供商兼容性

- [PR #146757](https://github.com/NousResearch/hermes-agent/pull/146757) 修复 Codex `-900k` 变体的上下文窗口提升逻辑：当目录公布 500K 等非 272K 数值时，仍能识别为旧广告值并应用提升，对应 [#146756](https://github.com/NousResearch/hermes-agent/issues/146756)。
- [PR #146758](https://github.com/NousResearch/hermes-agent/pull/146758) 为已保存的 `fal-ai/gpt-image-1.5` 选择提供兼容路径，在 OpenAI 于 2026-12-01 停用相关模型后改由 GPT Image 2 承接，避免任务直接失效。
- [PR #144880](https://github.com/NousResearch/hermes-agent/pull/144880) 修复压缩摘要提示注入问题：转义嵌入式 turn 标签，避免工具输出伪装成 `[USER]` 等真实会话边界。关联安全 Issue：[#144449](https://github.com/NousResearch/hermes-agent/issues/144449)。
- [PR #5633](https://github.com/NousResearch/hermes-agent/pull/5633) 为凭据池工具函数增加 **104 个单元测试**，覆盖时间戳、重试延迟、错误上下文、TTL 和优先级选择等路径。

### 3.2 Desktop、Gateway 与会话生命周期

- [PR #146755](https://github.com/NousResearch/hermes-agent/pull/146755) 限制 Desktop 静默 OAuth 重试，避免网关持续返回 401 时反复弹出登录窗口。
- [PR #146752](https://github.com/NousResearch/hermes-agent/pull/146752) 修复 Discord `/model` 选择超时后覆盖已完成切换或取消结果的问题，关联 [#143851](https://github.com/NousResearch/hermes-agent/issues/143851)。
- [PR #146415](https://github.com/NousResearch/hermes-agent/pull/146415) 修复 TUI 中连续 Enter 重复提交，以及终端/焦点事件打断粘贴的问题。
- [PR #146046](https://github.com/NousResearch/hermes-agent/pull/146046) 修复长期不重启 Gateway 时 idle scratch 清理规则失效的问题。
- [PR #146398](https://github.com/NousResearch/hermes-agent/pull/146398) 为 Dashboard 增加希腊语支持。

### 3.3 Docker、工具与配置工程

- [PR #97727](https://github.com/NousResearch/hermes-agent/pull/97727) 修复 Docker `extra_args` 中声明主机挂载时未被安全检测识别的问题，关联 [#84969](https://github.com/NousResearch/hermes-agent/issues/84969)。
- [PR #146206](https://github.com/NousResearch/hermes-agent/pull/146206) 在禁用 cwd 挂载时保持 Profile 级 Docker 工作区一致，避免 Desktop 与 CLI 使用不同沙箱目录。
- [PR #96632](https://github.com/NousResearch/hermes-agent/pull/96632) 在 `search_files` 截断长匹配行时显式披露截断信息，避免 Agent 将不完整结果误判为完整内容。
- [PR #146745](https://github.com/NousResearch/hermes-agent/pull/146745) 将 HTTP npm registry 镜像规范化为 HTTPS，修复 `hermes update` 在部分用户 `.npmrc` 配置下永久失败。
- [PR #146748](https://github.com/NousResearch/hermes-agent/pull/146748) 将模块依赖 DAG 和 import 无环性检查纳入 `scripts/code_health`，回应 [#146473](https://github.com/NousResearch/hermes-agent/issues/146473)。

### 3.4 安全与插件生态

- [PR #3987](https://github.com/NousResearch/hermes-agent/pull/3987) 提供可选 CaMeL 能力守卫插件，在不受信工具输出后对敏感工具调用实施约束，并配套 IFC 测试。
- [PR #146715](https://github.com/NousResearch/hermes-agent/pull/146715) 将 Bitwarden、1Password 缓存及 Photon token 移至 Profile Home 根部，并补齐凭据守卫覆盖范围。
- [PR #146751](https://github.com/NousResearch/hermes-agent/pull/146751) 更新 `pass-secrets` 插件至 1.1.0，增加 `/s` 聊天通道和通用默认值。
- [PR #145090](https://github.com/NousResearch/hermes-agent/pull/145090) 精简 `kanban_show` 返回内容，移除重复的 `worker_context`，降低多 Worker 场景的上下文与 token 消耗。

### 3.5 整体推进判断

今天提交的修复覆盖了模型兼容性、会话并发、OAuth、Docker 安全、文件工具、代码健康和插件生态等关键面，说明项目正从“功能快速扩张”转向“跨平台和边界条件加固”。但由于 **今日合并数为 0**，这些改进尚不能计入已发布能力；下一阶段的关键不是继续扩大 PR 队列，而是完成审核、测试、合并和版本回归。

---

## 4. 社区热点

### 4.1 讨论最活跃的 Issues

1. **[#20249 — Model Presets：按轮次动态升级到专家模型](https://github.com/NousResearch/hermes-agent/issues/20249)**  
   - 13 条评论，今日关闭。  
   - 用户希望在低成本快速模型与高推理模型之间按任务复杂度自动切换，而不是整个会话固定使用一个模型。  
   - 这是典型的 Agent 路由需求：兼顾成本、延迟和复杂任务质量。

2. **[#125537 — `pm gc` 静默未收集依赖代次](https://github.com/NousResearch/hermes-agent/issues/125537)**  
   - 10 条评论。  
   - 根本原因是 GC 根据当前执行源码树定位安装键，与正在使用的依赖 generation 不一致；命令却报告成功。  
   - 用户痛点集中在升级/清理行为不可信和错误被静默吞没。

3. **[#112028 — Desktop 与移动端访问同一会话](https://github.com/NousResearch/hermes-agent/issues/112028)**  
   - 9 条评论，1 个赞。  
   - 用户希望桌面端已打开的会话能够被移动 Dashboard 继续使用，而不被 `surface` 限制拒绝。  
   - 这反映 Hermes 正从单终端工具转向多端连续工作流。

4. **[#126486 — Desktop 流式增量渲染性能随历史长度退化](https://github.com/NousResearch/hermes-agent/issues/126486)**  
   - 8 条评论。  
   - 40 条消息时约 100 FPS，800 条消息时降至约 17 FPS；此前修复 PR 未合并导致问题仍在 main。  
   - 长时间真实会话对 Desktop 已构成明显性能瓶颈。

5. **[#142144 — Desktop 持久化 `custom` 凭据分类导致首轮失败](https://github.com/NousResearch/hermes-agent/issues/142144)**  
   - 8 条评论。  
   - 命名 provider 曾被使用后，sticky composer 会遗留 `custom`，新会话以无凭据的 `custom` 启动并报 AuthError。  
   - 问题直接阻断新建聊天，是高影响 Desktop 回归。

### 4.2 高关注功能与安全 Issues

- **[#57052 — 空闲 Desktop/TUI 标签永久占用并发槽位](https://github.com/NousResearch/hermes-agent/issues/57052)**：4 条评论。  
  已连接但空闲的标签页长期占用 `max_concurrent_sessions`，最终令所有入口无法创建新会话。

- **[#145968 — 多 Profile 共用 memory provider 导致跨 Profile 记忆泄漏风险](https://github.com/NousResearch/hermes-agent/issues/145968)**：3 条评论。  
  这是高敏感度的数据隔离问题：被拒绝的绑定可能令其他 Profile 无法召回，而调度路径仍可能返回跨 Profile 读取。

- **[#84969 — Persistent Docker 复用忽略不可变配置漂移](https://github.com/NousResearch/hermes-agent/issues/84969)**：5 条评论。  
  用户修改 Docker 配置后，旧容器仍可能被复用，造成配置预期与真实运行环境不一致。

- **[#136441 — fallback provider 无法配置 `reasoning_effort`](https://github.com/NousResearch/hermes-agent/issues/136441)**：4 条评论、2 个赞。  
  主路由和回退路由参数能力不一致，限制了故障切换时的质量控制。

### 4.3 PR 热点

- **[#146754 — 限制自动归档 Skills 数量](https://github.com/NousResearch/hermes-agent/pull/146754)**：当系统时钟前跳时，一次 curator pass 可能批量归档大量 Skills，需要设置上限以避免误删。
- **[#145090 — 精简 `kanban_show`](https://github.com/NousResearch/hermes-agent/pull/145090)**：直接面向多 Worker 场景，减少重复上下文和 token 开销。
- **[#5633 — 凭据池新增 104 项测试](https://github.com/NousResearch/hermes-agent/pull/5633)**：虽创建时间较早，但今日仍在活跃，说明认证和凭据调度仍是维护重点。
- **[#3987 — CaMeL 守卫插件](https://github.com/NousResearch/hermes-agent/pull/3987)**：体现社区对 Agent 工具调用安全边界和最小权限设计的持续关注。

---

## 5. Bug 与稳定性

### P2 / 高优先级

#### 5.1 已有明确修复 PR

- **Docker 主机挂载未被安全检测识别**  
  [#97727](https://github.com/NousResearch/hermes-agent/pull/97727) → 修复 [#84969](https://github.com/NousResearch/hermes-agent/issues/84969)。  
  `docker_extra_args` 中的 `-v /host:/c` 未被 `_docker_has_host_access()` 纳入，可能绕过快路径审批和权限判断。

- **Codex `-900k` 上下文提升失效**  
  [#146757](https://github.com/NousResearch/hermes-agent/pull/146757) → 修复 [#146756](https://github.com/NousResearch/hermes-agent/issues/146756)。

- **压缩摘要输入中的标签注入**  
  [#144880](https://github.com/NousResearch/hermes-agent/pull/144880) → 针对 [#144449](https://github.com/NousResearch/hermes-agent/issues/144449) 所述记忆证据丢失场景中的摘要边界伪装风险。

- **长期运行 Gateway 的 scratch 清理失效**  
  [#146046](https://github.com/NousResearch/hermes-agent/pull/146046) → 修复进程不重启时清理标记与时间门槛顺序错误。

#### 5.2 尚无明确 fix PR

- **空闲会话永久占用并发额度**  
  [#57052](https://github.com/NousResearch/hermes-agent/issues/57052)  
  可能表现为 CLI、消息网关及所有 Desktop/TUI 入口均无法创建新会话。现有 PR 未明确覆盖该完整释放路径。

- **Desktop 会话 lease 未释放**  
  [#146735](https://github.com/NousResearch/hermes-agent/issues/146735)  
  关闭标签或回收 session 后仍占用槽位。报告者说明较新 main 已引入 session ownership 重构，但未确认完全修复。

- **Desktop 凭据分类残留导致新聊天首轮失败**  
  [#142144](https://github.com/NousResearch/hermes-agent/issues/142144)  
  当前未发现与该 Issue 明确对应的 PR。

- **多 Profile memory provider 共享导致隔离风险**  
  [#145968](https://github.com/NousResearch/hermes-agent/issues/145968)  
  涉及敏感记忆数据，当前无明确对应修复 PR。

- **Desktop 长会话流式渲染性能退化**  
  [#126486](https://github.com/NousResearch/hermes-agent/issues/126486)  
  已知此前修复 PR #69151 被关闭未合并；本次更新仍指向 main 上问题存在。

- **Profile 重命名后 Bot Chat receipt 残留旧 profile**  
  [#145200](https://github.com/NousResearch/hermes-agent/issues/145200)  
  重命名或迁移身份后，Desktop 无法打开对应 Bot Chat，返回 `profile_mismatch`。

- **多端访问同一会话被 surface 限制**  
  [#112028](https://github.com/NousResearch/hermes-agent/issues/112028)  
  仍需产品语义决策和会话所有权模型调整。

- **Windows `write_file` 无法覆盖现有文件**  
  [#141504](https://github.com/NousResearch/hermes-agent/issues/141504)  
  [#146022](https://github.com/NousResearch/hermes-agent/issues/146022)  
  两个 Issue 指向同一类 `os.fstat`/`os.stat` 的 `st_ctime` 差异问题，属于重复报告，显示跨平台文件写入仍是高摩擦点。

- **OpenRouter 视觉工具以 JSON 文本传图，模型无法收到图像**  
  [#146308](https://github.com/NousResearch/hermes-agent/issues/146308)  
  `vision_analyze` 未把 `image_url` 转换为真正的多模态内容块，视觉功能实质失效。

- **自定义 provider 的 vision catalog alias 被忽略**  
  [#135701](https://github.com/NousResearch/hermes-agent/issues/135701)  
  视觉模型被误判为能力未知，转入图像描述路径。

- **远程后端扫描 PDF 无 OCR 路由及提示**  
  [#97720](https://github.com/NousResearch/hermes-agent/issues/97720)  
  SSH 等远程文件后端与本地 `read_file` 行为不一致，可能导致扫描文档无法读取。

- **Docker 配置漂移未触发容器重建**  
  [#84969](https://github.com/NousResearch/hermes-agent/issues/84969)  
  虽有安全检测修复 PR，但“不可变配置指纹化与比较”本身仍缺完整修复。

- **智能审批在 Guardian LLM 不可达时静默等待 300 秒**  
  [#132291](https://github.com/NousResearch/hermes-agent/issues/132291)  
  失败被解释为“升级至人工审批”，在用户不可见界面表现为长时间挂起。

- **Kanban Worker 创建重复且冲突的卡片**  
  [#145741](https://github.com/NousResearch/hermes-agent/issues/145741)  
  `kanban_create` 可见但 `kanban_list` 隐藏，Worker 无法确认已有任务。

- **Profile Home 之外的 Review Pane 不显示 diff**  
  [#146744](https://github.com/NousResearch/hermes-agent/issues/146744)  
  文件列表可见但内容为空，影响 Docker 部署下的代码审阅。

- **中轮 optimistic prompt 长期滞留且后续重复提交**  
  [#137750](https://github.com/NousResearch/hermes-agent/issues/137750)  
  本地 optimistic row 未与 gateway 已提交记录正确协调。

- **Qwen Cloud 1M 上下文被误判为 131K**  
  [#69881](https://github.com/NousResearch/hermes-agent/issues/69881)  
  会过早触发上下文压缩，影响长文档与长代码库任务。

- **HTTP-200 拒绝响应触发 fallback 时未记录原因**  
  [#124874](https://github.com/NousResearch/hermes-agent/issues/124874)  
  降低 provider 故障诊断能力。

### P3 / 其他稳定性与兼容性问题

- [#109656](https://github.com/NousResearch/hermes-agent/issues/109656)：Windows `computer_use` schema 对最小化窗口支持描述过度。
- [#144449](https://github.com/NousResearch/hermes-agent/issues/144449)：sidecar 记忆证据未进入压缩摘要输入。
- [#146612](https://github.com/NousResearch/hermes-agent/issues/146612)：code health 在 `base == head`、未实际测量时仍显示 `(ok)`。
- [#146735](https://github.com/NousResearch/hermes-agent/issues/146735)：active-session lease 泄漏，具体影响可能受新版本影响。
- [#146756](https://github.com/NousResearch/hermes-agent/issues/146756)：Codex 长上下文提升逻辑僵化，已有 PR。

---

## 6. 功能请求与路线图信号

### 6.1 高概率进入下一版本

1. **按轮次智能模型升级**
   - [#20249](https://github.com/NousResearch/hermes-agent/issues/20249)
   - 已关闭 Issue 表明需求可能已被纳入实现或替代方案讨论。
   - 与 fallback provider 参数能力、模型元数据修正等基础设施相互促进。

2. **Codex 1M 上下文兼容**
   - [#146756](https://github.com/NousResearch/hermes-agent/issues/146756)
   - 已有直接修复 PR [#146757](https://github.com/NousResearch/hermes-agent/pull/146757)，若测试通过，最可能进入下一版本。

3. **GPT Image 1.5 下线兼容**
   - [PR #146758](https://github.com/NousResearch/hermes-agent/pull/146758)
   - 时间敏感且已有替代方案，适合快速纳入补丁版本。

4. **Windows 文件覆盖兼容**
   - [#141504](https://github.com/NousResearch/hermes-agent/issues/141504)
   - [#146022](https://github.com/NousResearch/hermes-agent/issues/146022)
   - 重复 Issue 表明需求明确、影响面广；若合并修复，优先级应高于普通 P3 功能。

5. **Docker 配置漂移与安全检测**
   - [#84969](https://github.com/NousResearch/hermes-agent/issues/84969)
   - [PR #97727](https://github.com/NousResearch/hermes-agent/pull/97727)
   - 已有一部分修复，完整修复可能继续进入后续小版本。

### 6.2 需要产品或架构决策

1. **多端共享同一会话**
   - [#112028](https://github.com/NousResearch/hermes-agent/issues/112028)
   - 涉及 session ownership、事件同步和冲突处理，可能不会以简单补丁发布。

2. **Fallback provider 完整参数继承**
   - [#136441](https://github.com/NousResearch/hermes-agent/issues/136441)
   - 需要定义配置继承、覆盖和校验规则。

3. **Agent Kanban 多后端支持**
   - [#38185](https://github.com/NousResearch/hermes-agent/issues/38185)
   - 用户明确提出 Kubernetes、NFS、PostgreSQL 等场景，但 SQLite-only 架构迁移成本较高，更可能是中长期路线图事项。

4. **依赖 DAG 与 import 无环性治理**
   - [#146473](https://github.com/NousResearch/hermes-agent/issues/146473)
   - [PR #146748](https://github.com/NousResearch/hermes-agent/pull/146748)
   - 已从人工规则转向自动化检查，若合并，可能作为工程治理改进进入下一版本。

### 6.3 生态扩展信号

- CaMeL 守卫插件 [PR #3987](https://github.com/NousResearch/hermes-agent/pull/3987) 表明插件化安全能力仍在扩展。
- `pass-secrets` 1.1.0 [PR #146751](https://github.com/NousResearch/hermes-agent/pull/146751) 表明秘密管理插件正从独立工具扩展到通用聊天入口。
- `kanban_show` 精简 [PR #145090](https://github.com/NousResearch/hermes-agent/pull/145090) 表明项目开始重视多 Worker 环境下的上下文效率和 token 成本。

---

## 7. 用户反馈摘要

### 7.1 主要真实痛点

- **多端连续使用仍不顺畅**：Desktop 已打开的会话无法直接被移动 Dashboard 接管，用户期待跨端状态同步和连续协作。
- **长会话性能下降明显**：Desktop 在数百条消息后帧率显著降低，说明“能持续运行”尚未转化为“能高效运行”。
- **并发容量容易被闲置标签耗尽**：空闲 TUI/Desktop 标签长期占用 session slot，最终让所有入口都无法新建会话。
- **Profile 生命周期一致性不足**：重命名、身份迁移或多 Profile 共存后，会出现 Bot Chat receipt 残留、记忆 provider 共享和 workspace 不一致。
- **跨平台文件操作不稳定**：Windows 上即便完整读取文件，`write_file` 仍可能因时间戳判定拒绝覆盖，直接阻断常见 Agent 工作流。
- **远程与本地后端行为分叉**：远程 PDF 不走 OCR 路径，文件、视觉和模型目录等能力在 backend/provider 切换时经常出现能力降级。
- **容器复用不够可信**：Docker 配置改变后旧容器仍被复用，安全检测也未覆盖所有主机挂载声明方式。
- **错误信息与结果语义不足**：fallback 不记录原因、search 结果截断不披露、code health 可能“未测量却显示正常”、PM GC 可能“未收集却报告成功”。
- **模型兼容信息维护成本高**：Qwen 1M 上下文、Codex 500K、视觉 provider alias 和 GPT Image 退役等均需要持续维护模型元数据。

### 7.2 满意与积极信号

- 多项 PR 已补充系统化测试，例如凭据池新增 104 个单测，说明社区愿意投入回归保障。
- 插件作者主动处理 OpenAI 模型停用、Secrets 管理、安全守卫和 Kanban 效率等生产问题。
- 多项功能增强具备明确使用场景：多端会话、Provider fallback、自定义 reasoning effort、远程 OCR 和 Kanban 数据库后端化。
- PR #20249 已关闭，表明此前讨论过的模型预设方向可能已经找到落点；但仍需从发布说明确认最终行为。

### 7.3 不满意点

用户不满主要集中在“**表面成功但实际失效**”：GC 报告成功却未清理、搜索显示结果却省略尾部、代码健康显示正常却未测量、smart approval 失败后无提示地等待、图像工具返回 JSON 却未真正提供图像。这些问题共同降低用户对 Hermes 自动执行和可观测性的信任。

---

## 8. 待处理积压

### 8.1 长期重要但仍开放

- **[#38185 — Kanban 仅支持 SQLite](https://github.com/NousResearch/hermes-agent/issues/38185)**  
  创建于 2026-06-03，涉及 Kubernetes、NFS 和多后端部署，尚未形成直接实现 PR，建议明确架构路线与拆分计划。

- **[#69881 — Qwen Cloud 1M 上下文误判](https://github.com/NousResearch/hermes-agent/issues/69881)**  
  创建于 2026-07-23，长上下文模型用户会遭遇过早压缩，需尽快与模型目录元数据更新机制联动。

- **[#69881 关联的模型元数据维护机制](https://github.com/NousResearch/hermes-agent/issues/69881)**  
  建议将 Qwen、Codex、OpenRouter、自定义 catalog alias 纳入统一回归测试，避免逐模型打补丁。

- **[#84969 — Docker 配置漂移](https://github.com/NousResearch/hermes-agent/issues/84969)**  
  创建于 2026-08-13，涉及安全边界与持久容器正确性。虽已有部分 PR，但完整指纹化和复用判定仍应明确责任人与截止时间。

- **[#97720 — 远程 PDF OCR 路径不一致](https://github.com/NousResearch/hermes-agent/issues/97720)**  
  创建于 2026-08-29，涉及 SSH 后端的文档可读性，当前没有直接修复 PR。

- **[#124874 — Fallback 原因未记录](https://github.com/NousResearch/hermes-agent/issues/124874)**  
  创建于 2026-09-27。影响生产诊断，应与 provider 错误分类和重试遥测一起修复。

- **[#126486 — Desktop 长会话渲染退化](https://github.com/NousResearch/hermes-agent/issues/126486)**  
  创建于 2026-09-28；此前修复 PR 未合并，当前仍需重新提供经过长线程基准验证的方案。

- **[#132291 — Smart approval 故障时静默等待](https://github.com/NousResearch/hermes-agent/issues/132291)**  
  创建于 2026-10-03，属于可用性和安全策略共同问题，建议定义 fail-open、fail-closed 与人工不可达三种场景的明确语义。

- **[#136441 — Fallback 参数能力不足](https://github.com/NousResearch/hermes-agent/issues/136441)**  
  创建于 2026-10-11，已获 2 个赞，说明用户认可度高，但尚无对应实现。

### 8.2 重复或交叉 Issue，建议合并治理

- Windows 文件覆盖：
  - [#141504](https://github.com/NousResearch/hermes-agent/issues/141504)
  - [#146022](https://github.com/NousResearch/hermes-agent/issues/146022)  
  建议合并为一个主 Issue，共享最小复现和 Windows/Python 版本矩阵。

- 会话槽位泄漏：
  - [#57052](https://github.com/NousResearch/hermes-agent/issues/57052)
  - [#146735](https://github.com/NousResearch/hermes-agent/issues/146735)  
  两者均涉及 session lease 生命周期，应统一检查“创建、绘制、连接、关闭、回收、进程退出”六个阶段。

- 代码健康：
  - [#146473](https://github.com/NousResearch/hermes-agent/issues/146473)
  - [#146612](https://github.com/NousResearch/hermes-agent/issues/146612)  
  已有 PR [#146748](https://github.com/NousResearch/hermes-agent/pull/146748)，建议将“未测量不得显示 ok”一并纳入验收条件。

### 8.3 维护者建议关注顺序

1. **先合并会话 lease、Profile 隔离和 Docker 安全边界修复**：分别关系到可用性、隐私和安全。
2. **随后处理 Windows 文件写入、视觉工具和 OCR 路径**：这些是跨环境下的核心能力断点。
3. **将 PR 队列从 50 条压到可验证的小批次**：优先合并已有明确复现、回归测试和直接关联 Issue 的变更。
4. **明确下一版本窗口**：今日无发布且无合并，建议尽快形成 release train，避免修复长期滞留。
5. **补齐模型目录与 Provider 兼容回归集**：集中处理 Codex、Qwen、OpenRouter、GPT Image 退役等重复性适配成本。

---

## 项目健康度结论

**综合健康度：中高，趋势偏积极，但发布转化不足。**

- **开发活跃度：高** —— 24 小时内 50 条 Issue、50 条 PR。
- **社区参与度：高** —— 热点 Issue 具备持续讨论，多个领域出现可复用 PR。
- **发布稳定性：一般** —— 今日无合并、无新版本，修复尚未进入用户可获得版本。
- **核心风险：中高** —— 集中于会话生命周期、Profile 数据隔离、Docker 安全边界、Windows 文件操作和多端会话同步。
- **趋势判断** —— 项目正在补齐从“功能丰富原型”走向“多端、跨平台、可长期运行 Agent 平台”所需的基础工程；下一阶段应以 **收敛高风险缺陷、完成 PR 审核和尽快发布** 为核心，而不是单纯追求 PR 数量。

</details>

<details>
<summary><strong>OpenHuman</strong> — <a href="https://github.com/tinyhumansai/openhuman">tinyhumansai/openhuman</a></summary>

# OpenHuman 项目动态日报

**日期：2026-10-30**  
**数据范围：过去 24 小时 GitHub Issues / Pull Requests 更新**  
**整体判断：开发活跃度较高，但集成与发布链路仍存在明显收尾风险。**

---

## 1. 今日速览

过去 24 小时共出现 **1 条 Issue 更新、8 条 PR 更新**，其中 **5 个 PR 仍待合并、3 个 PR 已关闭**，暂无新版本发布。  
今日开发重点集中在 **推理预算控制、沙箱运行时配置、渠道提交前钩子、Docker 构建恢复和聊天文本保真** 等方向，说明项目正在同时推进核心执行能力与部署可靠性。  
当前有 **3 个已关闭 PR** 落地了 TinyMCP 依赖升级、推理预算修复和 Cron 工具拆分；另有 **5 个待合并 PR** 涉及 Docker、Shell、渠道与聊天解析。  
健康度评估为**中高活跃、稳定性中等偏上**：功能推进明显，但 Docker 发布任务连续失败，以及多个 PR 尚未完成合并闭环，表明发布工程仍是主要风险点。

---

## 2. 版本发布

过去 24 小时**无新版本发布**，因此暂无对应的破坏性变更或升级说明。

不过，已关闭的 TinyMCP 依赖更新 PR 暗示内部模块版本已推进至 **v0.20.5**，但这不等同于 OpenHuman 正式发布新版本：

- [PR #8491：re-pin TinyMCP to v0.20.5](https://github.com/tinyhumansai/openhuman/pull/8491)

---

## 3. 项目进展

### 已合并或关闭的重要 PR

#### 推理预算覆盖附件渲染场景

- [PR #8488：fix(inference): run the per-call budget on rendered attachments](https://github.com/tinyhumansai/openhuman/pull/8488)

该 PR 将预算控制层放到 provider 调用之前，使带附件的请求也会经过附件渲染和预算准入流程。文本附件可被转换为文本后纳入计算，预算不足时能够在调用模型前拦截，避免“附件未计费但已消耗资源”的漏洞。

这属于成本控制与资源治理的重要修复，有助于提高单次调用预算的准确性和可预测性。

#### TinyMCP 升级与 OAuth 修复

- [PR #8491：chore(modules): re-pin TinyMCP to v0.20.5](https://github.com/tinyhumansai/openhuman/pull/8491)

项目将 vendored TinyMCP 从 v0.20.4 重新固定到 v0.20.5，并同步 registry 记录、发布摘要、registry 测试和两份 lockfile。升级包含 OAuth origin issuer 相关修复，可减少认证来源校验或 OAuth 集成方面的异常。

虽然该 PR 已关闭，但仅凭数据无法确认其最终是否以合并方式落库；日报中应将其视为**已关闭的重要变更候选**，等待分支状态进一步明确。

#### Cron 调度工具改为细粒度操作接口

- [PR #8496：feat(cron): make scheduling a pack of compact per-operation tools](https://github.com/tinyhumansai/openhuman/pull/8496)

调度工具包由单一聚合式 `cron` 工具拆分为六个独立操作：

- `cron_add`
- `cron_list`
- `cron_update`
- `cron_remove`
- `cron_run`
- `cron_runs`

每个操作继续使用默认的 `Direct` 暴露方式，由工具包的 `GroupMode` 控制整体呈现。该设计能够降低单工具参数复杂度，让模型更准确地选择具体操作，也使权限控制和工具调用日志更细粒度。

同样需要注意：该 PR 状态为 **CLOSED**，数据中未提供其是否已合并的明确字段。

### 今日整体推进程度

今日并非大规模功能发布，而是围绕多个关键链路进行集中修复：

1. **推理成本控制更完整**
2. **MCP/OAuth 依赖更新**
3. **Cron 工具接口更细粒度**
4. **Docker 构建和 Shell 沙箱修复正在补齐**
5. **渠道 Hook 与聊天内容保真等待收尾**

整体可评价为：**核心能力持续推进，工程正确性明显改善，但仍有多个关键修复停留在待合并状态。**

---

## 4. 社区热点

### 讨论最活跃的 Issue

- [Issue #6999：Benchmark OpenHuman: run Terminal-Bench, split intelligence from harness failures](https://github.com/tinyhumansai/openhuman/issues/6999)

该 Issue 今日有更新，累计 **10 条评论**，是当前数据中唯一 Issue，也是社区讨论最活跃的条目。

其核心诉求不是简单追求 Terminal-Bench 分数，而是：

- 使用现有 OpenRouter key 实际运行 Terminal-Bench；
- 将失败明确拆分为 **模型智能失败** 和 **执行框架/Harness 失败**；
- 优先修复 OpenHuman 自身的执行、工具调用和测试框架问题；
- 关闭缓存与冷启动带来的性能差距。

这一诉求反映社区当前更关心项目是否具备可靠、可持续的 agent 执行能力，而不仅是单次模型输出质量。Issue 仍为开放状态，已有较多讨论但尚未关闭，说明基准测试、失败分类和 harness 修复闭环仍是近期重点。

### 其他值得关注的 PR

- [PR #8492：fix(docker): copy openhuman-embed's declared test and example targets](https://github.com/tinyhumansai/openhuman/pull/8492)
- [PR #8493：feat(docker): CARGO_FEATURES build arg for the core binary](https://github.com/tinyhumansai/openhuman/pull/8493)
- [PR #8494：fix(shell): sandboxed commands follow the configured [runtime]](https://github.com/tinyhumansai/openhuman/pull/8494)
- [PR #8495：fix(channels): run beforeSubmitPrompt on channel turns](https://github.com/tinyhumansai/openhuman/pull/8495)

这些 PR 当前没有公开反应数或评论数，因此不能判定其社区热度高于 Issue #6999；但从它们解决的问题看，均直接影响部署、隔离安全、渠道一致性和用户体验，应纳入近期合并优先级。

---

## 5. Bug 与稳定性

### P1 / 高优先级

#### Terminal-Bench 失败归因不清，harness 问题尚未完成闭环

- [Issue #6999](https://github.com/tinyhumansai/openhuman/issues/6999)

该 Issue 涉及 P1 标签。虽然它并非直接报告崩溃，但暴露了当前基准测试无法准确区分模型能力与 harness 缺陷的问题，可能掩盖缓存、冷启动、工具执行和错误处理方面的系统性缺陷。

**修复状态：暂无直接关联的明确 fix PR。**  
需要推动实际 benchmark、失败分类、缓存与冷启动优化，并补充可重复执行的报告。

### P2 / 中高优先级

#### Docker 核心镜像无法构建，发布流水线连续失败

- [PR #8492：copy openhuman-embed's declared test and example targets](https://github.com/tinyhumansai/openhuman/pull/8492)
- [PR #8493：CARGO_FEATURES build arg for the core binary](https://github.com/tinyhumansai/openhuman/pull/8493)

PR #8492 指出 `openhuman-embed` 声明了显式 `[[test]]` 和 `[[example]]` target，但 Dockerfile 只复制 manifest，导致核心镜像无法构建，并影响 **Docker: build and push** 发布任务；摘要称该任务已在 10 月 27 日和 28 日连续失败。

PR #8493 在其基础上补充 `CARGO_FEATURES` 构建参数，并支持依赖缓存与最终构建两个阶段。

**修复状态：已有明确 fix PR，但均仍为 OPEN。**  
这是当前最需要尽快合并验证的稳定性问题。

#### 沙箱命令未遵循用户配置的 runtime

- [PR #8494：sandboxed commands follow the configured [runtime]](https://github.com/tinyhumansai/openhuman/pull/8494)

此前 `Sandboxed` 模式使用 `RuntimeConfig::default()` 构造策略，而没有读取用户的 `[runtime]` 配置。配置为 `kind = "docker"` 时，命令可能并未真正进入 Docker，也未应用用户指定的镜像、网络和资源限制。

**修复状态：已有 fix PR，状态 OPEN。**

该问题不仅影响功能正确性，也可能造成沙箱隔离预期与实际执行环境不一致，建议按安全问题优先验证。

### P3 / 中优先级

#### 渠道消息未触发 `beforeSubmitPrompt`

- [PR #8495：run beforeSubmitPrompt on channel turns](https://github.com/tinyhumansai/openhuman/pull/8495)

此前 `beforeSubmitPrompt` 仅在 Web Chat 生效，Telegram、Discord、Slack 等渠道请求被绕过。Hook 阻止请求时，渠道用户可能收到笼统的 “LLM error”，而不是明确的阻止原因。

**修复状态：已有 fix PR，状态 OPEN。**  
该 PR 同时关闭 Issue [#8124](https://github.com/tinyhumansai/openhuman/issues/8124)。

#### 附件解析破坏用户文本空白和缩进

- [PR #8329：preserve user text whitespace when parsing attachments](https://github.com/tinyhumansai/openhuman/pull/8329)

附件标记清理可能压缩整段用户文本，导致：

- Python 缩进损坏；
- 字符串中的内部空格消失；
- Markdown 硬换行丢失。

修复方向是只清理被移除附件标记附近的分隔符，不对全部消息执行空白折叠，并增加 parser 和 public message-adapter 回归测试。

**修复状态：已有 fix PR，状态 OPEN。**  
这是较典型的内容保真回归，可能影响代码生成和结构化文本任务。

#### 推理预算未覆盖渲染后的附件

- [PR #8488：run the per-call budget on rendered attachments](https://github.com/tinyhumansai/openhuman/pull/8488)

附件请求可能绕过单次调用预算，造成成本核算偏差。

**修复状态：已有 fix PR，状态 CLOSED。**  
按其目标看已完成推进，但仍建议确认最终合入方式和完整回归覆盖。

### 低优先级依赖维护

- [PR #8491：re-pin TinyMCP to v0.20.5](https://github.com/tinyhumansai/openhuman/pull/8491)

更新包含 OAuth origin issuer 相关修复，没有显示高优先级回归风险。

**修复状态：已有 PR，状态 CLOSED。**

---

## 6. 功能请求与路线图信号

### Terminal-Bench 标准化评测与失败分类

- [Issue #6999](https://github.com/tinyhumansai/openhuman/issues/6999)

这更像一项工程路线图任务：建立稳定 benchmark、区分智能与 harness 失败，并针对缓存、冷启动和执行可靠性进行优化。它不太可能作为单一用户功能直接进入下一版本，但相关基础设施和修复具有较高进入后续版本的可能性。

### Docker 构建参数与可配置构建能力

- [PR #8493：CARGO_FEATURES build arg for the core binary](https://github.com/tinyhumansai/openhuman/pull/8493)

新增 `CARGO_FEATURES` 能让部署方按需启用 Rust feature，改善不同发行镜像的构建灵活性。该 PR 默认值为空，兼容现有镜像，因此具备进入下一版本的条件。

### 沙箱运行时真正按配置生效

- [PR #8494：sandboxed commands follow the configured [runtime]](https://github.com/tinyhumansai/openhuman/pull/8494)

该项目前更像正确性修复，但也会强化 OpenHuman 的可配置沙箱路线：用户可选择 Docker runtime，并应用镜像、网络和资源限制。预计应优先作为稳定性版本内容合入。

### 跨渠道统一提交前策略

- [PR #8495：run beforeSubmitPrompt on channel turns](https://github.com/tinyhumansai/openhuman/pull/8495)

Web 与 Telegram、Discord、Slack 等渠道统一执行提交前 Hook，是一个清晰的平台一致性信号。后续路线可能包括统一拦截反馈、审计记录和渠道权限策略。

### Cron 工具粒度细化

- [PR #8496：make scheduling a pack of compact per-operation tools](https://github.com/tinyhumansai/openhuman/pull/8496)

将聚合工具拆为独立操作，符合当前 agent 工具设计趋势：更低参数歧义、更精确权限和更容易观测调用。若维护者接受该方向，它可能成为下一版调度能力的接口基础。

### 下一版本候选判断

**较高概率进入下一版本或近期主干：**

1. Docker 构建修复与 `CARGO_FEATURES`
2. Shell sandbox runtime 配置修复
3. 渠道 `beforeSubmitPrompt` 统一
4. 聊天附件解析空白保真
5. 推理附件预算修复
6. TinyMCP v0.20.5 更新

**需继续验证：**

1. Cron 工具拆分 PR 的最终关闭原因和是否合入
2. Terminal-Bench 评测、缓存和冷启动优化的具体交付节奏

---

## 7. 用户反馈摘要

由于过去 24 小时仅有一个 Issue 更新，且公开数据未提供完整评论文本，无法可靠提炼逐条用户评价。根据 Issue #6999 的描述、评论数量及 PR 内容，可归纳出以下核心痛点：

### 真实使用痛点

- **基准分数无法直接代表代理能力。** 用户关注失败究竟来自模型推理不足，还是 OpenHuman harness 的工具调用、缓存、上下文或执行问题。
- **冷启动和缓存影响实际效率。** 即使模型能力足够，项目仍可能因重复初始化、缓存未命中而拉长响应时间并增加成本。
- **工具调用稳定性不足。** 渠道 Hook 未统一、附件解析损坏空白等问题表明，同一用户输入在不同入口或不同内容形态下可能表现不一致。
- **部署可信度不足。** Docker 镜像构建失败会直接削弱发布、部署和版本验证能力。
- **沙箱配置与实际行为不一致。** 用户配置 Docker runtime 却未真正应用，会削弱对隔离边界和资源限制的信任。

### 满意度信号

- Issue #6999 获得 **10 条评论**，表明社区对基准、harness 诊断和执行质量有较强参与意愿。
- 多个 PR 已积累到 28–29 日更新，说明维护者和贡献者仍在持续处理近期问题。
- 但所有条目均显示 **0 个 👍**，不能据此认定已有明确正向满意度；更合理的判断是：社区投入度较高，但用户反馈仍偏技术诊断，尚未形成产品层面的正负评价闭环。

---

## 8. 待处理积压

### Issue #6999：基准与 harness 修复仍未闭环

- [Issue #6999](https://github.com/tinyhumansai/openhuman/issues/6999)
- **状态：OPEN**
- **评论：10**
- **关注级别：高**

该 Issue 自 2026-10-05 创建，次日更新后持续处于开放状态。虽然评论较多，但数据中没有明确完成标记。应优先补充：

- Terminal-Bench 可复现运行入口；
- intelligence / harness 失败分类标准；
- 缓存与冷启动指标；
- 已修复、待修复问题清单；
- 后续负责人和目标版本。

### 5 个待合并 PR 需要形成发布闭环

- [PR #8492：修复 Docker 核心镜像构建](https://github.com/tinyhumansai/openhuman/pull/8492)
- [PR #8493：增加 CARGO_FEATURES 构建参数](https://github.com/tinyhumansai/openhuman/pull/8493)
- [PR #8494：沙箱命令遵循 [runtime] 配置](https://github.com/tinyhumansai/openhuman/pull/8494)
- [PR #8495：渠道触发 beforeSubmitPrompt](https://github.com/tinyhumansai/openhuman/pull/8495)
- [PR #8329：保留附件解析中的用户文本空白](https://github.com/tinyhumansai/openhuman/pull/8329)

其中 #8492 与 #8493 存在堆叠依赖，#8492 是生产 Docker 发布任务恢复的基础；#8494 涉及隔离正确性；#8495 和 #8329 直接影响多渠道用户体验。应优先完成代码审查、CI 验证和合并，而不是继续扩大 PR 数量。

### 已关闭 PR 的最终状态需要确认

- [PR #8491](https://github.com/tinyhumansai/openhuman/pull/8491)
- [PR #8488](https://github.com/tinyhumansai/openhuman/pull/8488)
- [PR #8496](https://github.com/tinyhumansai/openhuman/pull/8496)

数据仅标注为 CLOSED，无法区分“已合并后关闭”和“未合并关闭”。尤其是 PR #8496 的 Cron 工具拆分属于接口设计变更，需要确认是否已进入主干；PR #8491 涉及 vendored 依赖、摘要和 lockfile，也需要验证依赖状态一致性。

---

## 健康度结论

**项目健康度：中高，活跃度高，发布稳定性仍有风险。**

- **正向信号：** 24 小时内 8 个 PR 更新，工作覆盖推理、调度、渠道、Shell、Docker 和文本解析；多个关键问题已有明确修复方案。
- **风险信号：** 5 个 PR 尚未合并，Docker 发布任务连续失败，暂无新版本发布，且部分已关闭 PR 的最终合入状态不明确。
- **下一步重点：** 优先合并并验证 Docker 构建链路、沙箱 runtime 修复和渠道 Hook；随后确认推理预算与 Cron 工具拆分是否真正落库，并推动 Terminal-Bench Issue 形成可量化的失败分类和后续修复计划。

</details>

---
*本日报由 [Big Model Radar](https://github.com/96loveslife/big_model_radar) 自动生成。*
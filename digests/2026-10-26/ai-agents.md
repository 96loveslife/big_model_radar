# OpenClaw 生态日报 2026-10-26

> Issues: 375 | PRs: 500 | 覆盖项目: 8 个 | 生成时间: 2026-10-26 04:09 UTC

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

**日期：2026-10-26**  
**数据范围：过去 24 小时**  
**仓库：** [openclaw/openclaw](https://github.com/openclaw/openclaw)

---

## 1. 今日速览

OpenClaw 过去 24 小时保持极高开发活跃度，共更新 **375 条 Issues**、**500 条 PR**，其中分别有 **93 条 Issue 关闭**、**322 条 PR 合并或关闭**，显示维护团队正在密集消化问题与代码变更。  
当前焦点明显集中在 **SQLite/WAL 状态库稳定性、Gateway 性能与资源占用、会话恢复与消息投递、Windows 升级流程**四类可靠性问题上。  
过去 24 小时没有正式版本发布；在 **178 个待合并 PR** 中，许多仍处于“等待作者”“需要证明”或“维护者审查”状态，说明提交规模虽高，但真正进入稳定版本的质量与安全门禁仍然严格。  
社区反馈显示，OpenClaw 已具备较强的多渠道、多 Agent、插件和长期会话能力，但复杂部署下的资源管理、状态一致性和升级可靠性，仍是阻碍规模化使用的核心瓶颈。  
综合评估：**项目健康度为“开发活跃、问题积压偏高、稳定性承压”**。当前更像是高强度工程推进期，而非适合大规模无监控升级的稳定窗口。

---

## 3. 项目进展

> 本周期无正式 Release，故不单列“版本发布”。以下按重要、已关闭或已合并的 PR 汇总；由于原始数据未逐项提供精确合并时间，“今日合并/关闭”依据状态与更新时间整理。

### 3.1 备份与网关输出的终端安全加固

- [#184153](https://github.com/openclaw/openclaw/pull/184153) 已关闭  
  对备份计划和备份记录输出中的终端控制字符进行转义，避免恶意路径或标签伪造终端内容。该 PR 是 #183357 的精简替代版本。
- [#183357](https://github.com/openclaw/openclaw/pull/183357) 已关闭  
  覆盖更广泛渠道、客户端和扩展的同类修复；后续被 #184153 替代。
- [#183355](https://github.com/openclaw/openclaw/pull/183355) 已关闭  
  修复 Bonjour/DNS-SD 发现报告中的终端控制字符注入，JSON 数据与实际连接目标保持不变。

**推进意义：**  
输出层安全治理得到加强，降低恶意插件、异常主机名或备份标签在 CLI 中伪造终端输出的风险。

### 3.2 Control UI 后台执行反馈修复

- [#184005](https://github.com/openclaw/openclaw/pull/184005) 已关闭  
  修复后台 `exec` 完成后，Agent 按协议返回 `NO_REPLY`，但 Control UI 仍显示“CLI backend returned an empty response”的误报。

**推进意义：**  
改善多 Agent 与异步任务在 Web UI 中的可解释性，减少“实际完成但界面报错”的假失败。

### 3.3 Codex 队列恢复与启动失败保留

- [#182104](https://github.com/openclaw/openclaw/pull/182104) 开放中，标记为可维护者审查  
  修复插件重载后 Codex 聊天长期停留在“Waiting for turn to start…”的问题，并避免启动失败或取消事件被终态记账错误覆盖。

**推进意义：**  
直接关系到多 Agent 队列的连续运行和故障可诊断性，预计属于下一修复批次的高优先级候选。

### 3.4 状态数据库与 Gateway 性能优化

以下 PR 尚待合并：

- [#184173](https://github.com/openclaw/openclaw/pull/184173)：避免共享状态读 Worker 启动时加载 cron 迁移编解码器，减少约 **688 个不必要模块**的加载。
- [#184169](https://github.com/openclaw/openclaw/pull/184169)：复用冷存储维护 Worker，避免每分钟扫描都新建 archive worker。
- [#184168](https://github.com/openclaw/openclaw/pull/184168)：让共享 checkout 的多个会话查看器复用 Git 读取，降低 PR 轮询的重复 Worker 请求。
- [#184176](https://github.com/openclaw/openclaw/pull/184176)：复用 Agent 列表中未变化头像的编码结果，减少重复 Base64 分配。
- [#184066](https://github.com/openclaw/openclaw/pull/184066)：修复大型 Gateway 的 Usage 页面和 `usage.cost` 遗漏大量会话问题。报告案例中，页面统计约 **6.1 亿 token**，实际 transcript 三天内约 **270 亿 prompt token**。
- [#183601](https://github.com/openclaw/openclaw/pull/183601)：延迟加载 Control UI 冷启动时不必要的聊天交互引擎，同时并行预加载常用交互路径。

**推进意义：**  
这些改动直接瞄准 OpenClaw 当前最突出的资源放大问题：状态 Worker、冷存储、Git 轮询、UI 首屏和统计查询均有明显优化空间。

### 3.5 测试与内部结构整理

- [#184174](https://github.com/openclaw/openclaw/pull/184174) 开放中  
  批量移除重复、低价值的测试和 fixture。
- [#184159](https://github.com/openclaw/openclaw/pull/184159) 开放中  
  清理另一批重复测试夹具与实现耦合断言。
- [#184119](https://github.com/openclaw/openclaw/pull/184119) 已关闭  
  同类测试精简批次。
- [#184171](https://github.com/openclaw/openclaw/pull/184171) 开放中  
  清理已由真正运行时所有者承接的内部模块、辅助函数和类型框架，目标是消除重复所有权与内部复杂度。
- [#184175](https://github.com/openclaw/openclaw/pull/184175) 开放中  
  修复升级场景测试辅助函数被静态分析误报为未使用导出。

**推进意义：**  
测试体量和内部抽象正在收敛，但多个批次仍处于开放状态，短期内更可能增加 CI 压力，而非立即转化为用户侧收益。

### 3.6 会话连续性修复

- [#184157](https://github.com/openclaw/openclaw/pull/184157) 开放中，等待作者  
  在 Agent idle/daily reset 后保留 transcript ID，仅追加 reset 边界，避免自动重置造成历史会话索引丢失。
- [#169723](https://github.com/openclaw/openclaw/pull/169723) 开放中，需要证明  
  修复已压缩会话仍错误触发 context read limit，导致长会话无法继续或再次压缩。

**推进意义：**  
会话持久化与上下文生命周期正从“定时重置”转向“可连续追踪的长期会话”，对个人 AI 助手和长期陪伴型 Agent 尤其重要。

### 3.7 凭据、权限与安全边界

- [#166464](https://github.com/openclaw/openclaw/pull/166464) 开放中，需要证明和 security review  
  修复 systemd Gateway 启动时丢弃仅由认证配置引用的继承式服务凭据，影响 systemd、容器和企业部署。
- [#179898](https://github.com/openclaw/openclaw/pull/179898) 开放中  
  修复 macOS 服务继续信任过时的 `/etc/ssl/cert.pem`，降低证书信任链失效风险，但涉及兼容性和安全边界。
- [#184171](https://github.com/openclaw/openclaw/pull/184171) 标记为 security-sensitive changed；尚未合并。
- [#184099](https://github.com/openclaw/openclaw/pull/184099) 开放中，等待作者  
  减少节点宿主遥测的持久化写入频率，同时保持实时视图可见。

**推进意义：**  
安全修复正深入到部署配置、凭据解析、证书信任和终端输出层。不过相关 PR 普遍需要额外证明或安全审查，尚未全部落地。

### 3.8 整体推进判断

本期 PR 活动主要完成了三件事：

1. **补齐异步任务、备份输出和网关发现的错误处理与安全边界；**
2. **压降 Worker、UI、统计和 Git 读取的重复工作；**
3. **开始系统处理会话重置、长上下文、Codex 队列及服务凭据等生命周期问题。**

但 500 条 PR 更新中仅展示部分，且大量 PR 尚未合并，因此当前应将其视为**工程方向清晰、落地节奏受质量门禁约束**，而不是已全部交付到生产版本。

---

## 4. 社区热点

### 4.1 评论最多的 Issue

1. [#143524 — Agent SQLite WAL 持续增长至 1.4–2.8 GB，并阻塞 Gateway 启动](https://github.com/openclaw/openclaw/issues/143524)  
   **138 条评论，P0，影响消息丢失与崩溃循环。**  
   用户在 Windows 单 Gateway 环境中发现 `wal_autocheckpoint=1000` 实际未完成 checkpoint，手工离线截断后 WAL 又会快速增长。问题已从单个 Agent 数据库扩展到 Gateway 状态库和事务生命周期。

2. [#160959 — 捕获大型外部插件时 Gateway 阻塞数分钟](https://github.com/openclaw/openclaw/issues/160959)  
   **54 条评论，P0，2026.9.6 回归。**  
   外部插件或工作区插件的依赖树较大时，Gateway 启动及运行时重新发布会长时间占用事件循环。该问题对插件生态是关键扩展性门槛。

3. [#164294 — Gateway 状态 DB WAL 自动 checkpoint 被进程内 reader 阻塞](https://github.com/openclaw/openclaw/issues/164294)  
   **34 条评论。**  
   状态库每次启动后均报告 checkpoint blocked，且从未成功完成。背后诉求是建立可观测、可超时、可恢复的 SQLite reader/writer 生命周期。

4. [#159596 — Gateway 内存呈锯齿增长并频繁触发 critical memory pressure](https://github.com/openclaw/openclaw/issues/159596)  
   **16 条评论、3 个点赞，P0。**  
   prepared-model-catalog Worker 增长至堆上限，随后被回收，周而复始，用户估算每天约发生 **200 次严重内存压力事件**。

5. [#172091 — 永久打开的 Worker SQLite 事务阻塞共享状态 WAL checkpoint](https://github.com/openclaw/openclaw/issues/172091)  
   **15 条评论。**  
   跨线程 admission wait 未返回时，事务永久不释放，进一步验证 WAL 增长是多个事务与 reader 生命周期问题叠加的结果。

### 4.2 其他高热度 Issue

- [#67413 — 支持按 Agent 配置 dreaming](https://github.com/openclaw/openclaw/issues/67413)  
  **14 条评论、5 个点赞。**  
  用户希望关闭特定 Agent 的后台记忆整理，或错峰调度，以避免所有 workspace 同时运行导致 6GB MemoryMax 下 OOM。

- [#53408 — 长对话后 write/exec 工具参数被静默丢弃](https://github.com/openclaw/openclaw/issues/53408)  
  **15 条评论、2 个点赞。**  
  工具调用参数为空且没有明显报错，直接影响 Agent 执行能力，属于严重但仍需复核的问题。

- [#153426 — MEMORY.md/USER.md 被 provenance ratchet 永久排除](https://github.com/openclaw/openclaw/issues/153426)  
  **11 条评论、2 个点赞，P0。**  
  用户精心维护的记忆根文件可能因 provenance 被判为不可信而静默失效，且没有 CLI 诊断或恢复入口。

- [#149912 — Control UI 重复渲染工具前文本和最终回答](https://github.com/openclaw/openclaw/issues/149912)  
  **7 条评论。**  
  工具前文本显示两次、isolated finalization 答案显示三次，反映流式消息与最终化边界仍有重复投影问题。

- [#138561 — active-memory 插件升级后停止召回](https://github.com/openclaw/openclaw/issues/138561)  
  **7 条评论。**  
  Agent turn 正常运行但记忆召回为 0，日志中又没有明确告警，属于可观测性不足的功能静默失效。

- [#166289 — `model.usage` 诊断事件重复触发](https://github.com/openclaw/openclaw/issues/166289)  
  **6 条评论。**  
  部分请求会以相同 token、成本和 session 连续触发两次事件，可能导致费用统计或监控重复累计。

### 4.3 值得关注的 PR 讨论方向

- [#184066 — 修复大型 Gateway Usage 统计遗漏](https://github.com/openclaw/openclaw/pull/184066)  
  体现了社区对“用量数据必须可信”的直接需求。
- [#184157 — 会话重置后保留 transcript ID](https://github.com/openclaw/openclaw/pull/184157)  
  直接回应长期会话被重置后记忆丢失的痛点。
- [#182104 — 恢复排队中的 Codex chats](https://github.com/openclaw/openclaw/pull/182104)  
  回应插件重载、任务取消及启动失败下的 Agent 队列卡死。
- [#166464 — 保留认证配置引用的服务凭据](https://github.com/openclaw/openclaw/pull/166464)  
  对 systemd 和企业部署尤其关键，且已触发安全审查要求。
- [#169723 — 修复压缩后仍触发 context read limit](https://github.com/openclaw/openclaw/pull/169723)  
  面向长期使用和超大上下文用户，是长会话生命周期的核心修复。

### 4.4 热点背后的共同诉求

社区诉求可归纳为四点：

1. **状态必须可恢复：** WAL、checkpoint、事务和 reader 不能永久互相阻塞。  
2. **历史不能静默丢失：** 记忆、会话、工具调用和子 Agent 结果都必须具备可追踪、可恢复语义。  
3. **资源必须可控：** 多 Agent、多插件、多 MCP 服务不能导致不可预测的内存、CPU 和磁盘增长。  
4. **统计与状态必须可信：** Usage、成本、消息投递和 Agent 生命周期不能出现重复、遗漏或假成功。

---

## 5. Bug 与稳定性

### 5.1 P0：严重稳定性、崩溃与数据可靠性

| 严重度 | 问题 | 状态 |
|---|---|---|
| P0 | [#143524 Agent SQLite WAL 无限增长，阻塞 Gateway 启动](https://github.com/openclaw/openclaw/issues/143524) | **未发现明确关联 fix PR** |
| P0 | [#164294 Gateway 状态 DB WAL checkpoint 被 reader 阻塞](https://github.com/openclaw/openclaw/issues/164294) | **未发现明确关联 fix PR** |
| P0 | [#172091 跨线程 admission wait 导致事务永久未提交](https://github.com/openclaw/openclaw/issues/172091) | **未发现明确关联 fix PR** |
| P0 | [#159596 prepared-model-catalog Worker 内存锯齿与持续崩溃压力](https://github.com/openclaw/openclaw/issues/159596) | 有资源优化方向，如 [#184173](https://github.com/openclaw/openclaw/pull/184173)、[#159858 对应 PR 尚未列明](https://github.com/openclaw/openclaw/issues/159858)，但**未见完整修复 PR** |
| P0 | [#153426 MEMORY.md/USER.md 被永久排除出 bootstrap](https://github.com/openclaw/openclaw/issues/153426) | **未发现明确关联 fix PR** |
| P0 | [#126950 Telegram 非插件 callback payload 被静默丢弃](https://github.com/openclaw/openclaw/issues/126950) | 标记 `linked-pr-open`，但数据中未给出对应 PR 编号 |
| P0 | [#166634 崩溃恢复后因 reclamation checkpoint 失败导致 Agent 永久不可用](https://github.com/openclaw/openclaw/issues/166634) | **未发现明确关联 fix PR** |
| P0 | [#143334 子 Agent 完成投递丢失，父请求持续 starve](https://github.com/openclaw/openclaw/issues/143334) | Issue 已关闭，但数据中未列明对应修复 PR |
| P0 | [#170332 Beta 更新期间状态库变化仍继续升级](https://github.com/openclaw/openclaw/issues/170332) | Issue 已关闭，未列明对应修复 PR |

### 5.2 P1：高优先级故障与回归

- [#160959 大型外部插件捕获阻塞 Gateway 事件循环](https://github.com/openclaw/openclaw/issues/160959)  
  **无明确 fix PR。** 2026.9.6 引入的回归，严重影响大型插件和复杂依赖树。

- [#182476 Windows 更新修复报 `OPENCLAW_STATE_LEASE_LOST`](https://github.com/openclaw/openclaw/issues/182476)  
  **无明确 fix PR。** Gateway 虽可启动，但 readiness 和连通性不稳定。

- [#134993 升级后文件系统发现进入单核忙循环](https://github.com/openclaw/openclaw/issues/134993)  
  **无明确 fix PR。** 对大规模 Skill/Agent 部署影响明显。

- [#181078 模型已返回后 Agent turn 报 canonical reader 失效](https://github.com/openclaw/openclaw/issues/181078)  
  **无明确 fix PR。** 2026.10.5 回归，可能造成已经产生模型费用但用户无法收到结果。

- [#177656 Native host exec 返回 shared-state integrity admission 错误](https://github.com/openclaw/openclaw/issues/177656)  
  **无明确 fix PR。** 稳定版 2026.10.5 至少报告 28 次，且子进程效果不确定。

- [#148292 自动压缩无超时并可挂起 23 分钟](https://github.com/openclaw/openclaw/issues/148292)  
  **无明确 fix PR。** 长上下文和自定义 OpenAI-compatible provider 场景风险较高。

- [#166017 `mcp.sessionIdleTtlMs` 默认值未应用，MCP 子进程池达到 256 上限](https://github.com/openclaw/openclaw/issues/166017)  
  **无明确 fix PR。** 最终表现为 exec/read/MCP 启动全面失败。

- [#183786 Windows Beta 升级持续查询已停止的前台 Gateway PID](https://github.com/openclaw/openclaw/issues/183786)  
  **无明确 fix PR。** 升级超过 15 分钟仍不结束。

- [#167876 Talk 咨询在会话建立后丢失 caller authority](https://github.com/openclaw/openclaw/issues/167876)  
  **无明确 fix PR。** 涉及实时通话中的权限边界。

- [#148292、#142116 等](https://github.com/openclaw/openclaw/issues/142116)  
  重启恢复、队列 claim 和 Telegram lane 恢复仍存在长时间停滞风险。

### 5.3 P2：重要但影响范围相对受限

- [#53408 长会话后 write/exec 参数为空](https://github.com/openclaw/openclaw/issues/53408)  
  尚无明确 fix PR；直接影响工具调用正确性。

- [#157986 所有 `agentTurn` automation 因 `DataCloneError` 失败](https://github.com/openclaw/openclaw/issues/157986)  
  command/script payload 正常，问题局限于 agentTurn；无明确 fix PR。

- [#158127 多 Agent runtime publication 失败及 Codex 启动超时](https://github.com/openclaw/openclaw/issues/158127)  
  无明确 fix PR。

- [#162585 Windows 插件 source-capture 持续物化自身依赖](https://github.com/openclaw/openclaw/issues/162585)  
  体积从 **290 MB 增长到 612 MB 以上/24 分钟**，无明确 fix PR。

- [#164279 自学习后台审查连续 50 次失败、完成率为 0](https://github.com/openclaw/openclaw/issues/164279)  
  自学习功能事实上不可用；无明确 fix PR。

- [#164427 单次 cron history maintenance 持有写锁 9.35 秒](https://github.com/openclaw/openclaw/issues/164427)  
  超过硬编码 **5 秒**写等待预算，导致 sidecar 启动中止；无明确 fix PR。

- [#149912 Control UI 重复渲染](https://github.com/openclaw/openclaw/issues/149912)  
  与已关闭 PR [#184005](https://github.com/openclaw/openclaw/pull/184005) 属不同表现，不能视为已修复。

- [#138561 active-memory 停止召回](https://github.com/openclaw/openclaw/issues/138561)  
  无明确 fix PR，且缺乏明确日志信号。

- [#166137 Egress proxy sentinel substitution 间歇失效](https://github.com/openclaw/openclaw/issues/166137)  
  凭据可能以未替换或陈旧值发往上游，涉及安全问题；无明确 fix PR。

- [#112313 死信 outbound delivery 无法读取、重试或清理](https://github.com/openclaw/openclaw/issues/112313)  
  队列数据会永久残留；无明确 fix PR。

- [#149406 `sessions_spawn` 子 Agent 丢失第三方 MCP 工具](https://github.com/openclaw/openclaw/issues/149406)  
  无明确 fix PR，直接限制子 Agent 能力继承。

### 5.4 稳定性结论

当前最集中的系统性风险不是单一函数崩溃，而是：

- SQLite reader、writer、checkpoint 与 admission 生命周期互相耦合；
- 长生命周期 Worker 和 MCP 子进程缺少有效的空闲回收；
- 重启、更新、插件重载等状态切换没有形成一致的事务边界；
- 子 Agent、Automation 和渠道投递存在完成事件已发生但结果未送达的“终态不一致”。

这些问题会同时表现为卡死、消息丢失、内存增长、升级失败和恢复失败，因此优先级应高于一般 UI 或体验型改动。

---

## 6. 功能请求与路线图信号

### 6.1 按 Agent 配置 Dreaming

- 需求：[#67413](https://github.com/openclaw/openclaw/issues/67413)
- 当前没有对应开放 PR 出现在列表中。
- 可能的下一版本方向：增加 `agents.<id>.dreaming.enabled`、调度窗口或并发上限，避免所有 workspace 同时进入记忆整理。

**判断：高概率被纳入近期路线，但需先确定配置层级和默认兼容性。**

### 6.2 记忆召回资格和索引排除路径

- 需求：[#101422](https://github.com/openclaw/openclaw/issues/101422)
- 诉求：允许 Markdown-first workspace 保留 canonical memory pages，同时排除生成文件和运行时产物。
- 相关信号：[#153426](https://github.com/openclaw/openclaw/issues/153426) 暴露 provenance 规则会静默排除关键记忆。

**判断：很可能与记忆来源安全、召回配置合并设计，而非单独增加一个简单开关。**

### 6.3 Databricks Unity Gateway 官方模型 Provider

- 需求：[#155633](https://github.com/openclaw/openclaw/issues/155633)
- 实现：[#155634](https://github.com/openclaw/openclaw/pull/155634)
- 诉求：让 Databricks Unity Gateway 用户无需手写 generic provider 配置。

**判断：已有实现 PR，最可能进入下一版本，但需等待维护者审查及认证兼容性验证。**

### 6.4 iOS/macOS 个人身份与 Shared Owner 并存

- 需求：[#162164](https://github.com/openclaw/openclaw/issues/162164)
- 诉求：允许个人身份登录、本地 Primary Gateway 路由，同时保留共享 Owner 和独立设备/节点认证。

**判断：属于较大的身份与安全架构变更，更可能进入中期版本，而非短期小版本。**

### 6.5 Cron 生命周期控制

- 需求：[#130247](https://github.com/openclaw/openclaw/issues/130247)
- 诉求：增加 `--until`、`--max-runs`、过期时间及累计运行次数。

**判断：需求明确、边界清晰，适合近期版本；但仍需产品决策如何处理已有任务的默认行为。**

### 6.6 `infer model run` 支持文件输入 Prompt

- 需求：[#140244](https://github.com/openclaw/openclaw/pull/140244)
- 诉求：增加 `--prompt-file`，避免长 Prompt 出现在进程参数中。

**判断：改动小、用户价值明确，具备较高的下一版本合入概率。**

### 6.7 空闲 Worker 主动释放内存

- 需求：[#159858](https://github.com/openclaw/openclaw/issues/159858)
- 现状：11–12 个长期 Worker 稳定占用约 **650 MB V8 heap**，其中 prepared-model-catalog Worker 约 **230 MB**。
- 相关 PR：[#184173](https://github.com/openclaw/openclaw/pull/184173) 减少启动加载；[#184169](https://github.com/openclaw/openclaw/pull/184169) 复用 archive worker。

**判断：资源回收策略大概率会进入近期版本，但可能先以 opt-in 配置或内部复用形式落地。**

### 6.8 下一版本优先候选清单

按现有 PR 成熟度判断：

1. **高概率：**  
   - [#184005](https://github.com/openclaw/openclaw/pull/184005) Control UI 空响应误报  
   - [#184153](https://github.com/openclaw/openclaw/pull/184153) 备份输出终端安全  
   - [#183355](https://github.com/openclaw/openclaw/pull/183355) 发现报告终端安全  
   - [#184066](https://github.com/openclaw/openclaw/pull/184066) Usage 统计准确性  
   - [#184157](https://github.com/openclaw/openclaw/pull/184157) 会话重置 transcript 连续性  
   - [#184173](https://github.com/openclaw/openclaw/pull/184173) Worker 启动减负  
   - [#184176](https://github.com/openclaw/openclaw/pull/184176) Agent 列表头像缓存  

2. **有条件高概率：**  
   - [#182104](https://github.com/openclaw/openclaw/pull/182104) Codex 队列恢复  
   - [#183601](https://github.com/openclaw/openclaw/pull/183601) Control UI 延迟加载  
   - [#184168](https://github.com/openclaw/openclaw/pull/184168) Git 读取复用  
   - [#184169](https://github.com/openclaw/openclaw/pull/184169) archive worker 复用  
   - [#169723](https://github.com/openclaw/openclaw/pull/169723) 压缩会话读取上限  

3. **需等待安全/兼容审查：**  
   - [#166464](https://github.com/openclaw/openclaw/pull/166464) 服务凭据保留  
   - [#179898](https://github.com/openclaw/openclaw/pull/179898) macOS CA bundle 修复  

---

## 7. 用户反馈摘要

### 7.1 真实使用场景

- **Windows 单 Gateway + 单/多 Agent 长期运行：** WAL 持续增长，最终 Gateway 无法启动。  
  参考：[#143524](https://github.com/openclaw/openclaw/issues/143524)。

- **多 Agent、多 workspace 后台 Dreaming：** 所有 Agent 同时运行导致 6GB MemoryMax 下 OOM。  
  参考：[#67413](https://github.com/openclaw/openclaw/issues/67413)。

- **大型外部插件和 npm 依赖树：** 插件捕获阻塞 Gateway 启动数分钟，Windows staging 体积持续线性增长。  
  参考：[#160959](https://github.com/openclaw/openclaw/issues/160959)、[#162585](https://github.com/openclaw/openclaw/issues/162585)。

- **长期多渠道会话：** Telegram、Feishu、Talk 等渠道出现回调丢失、跨会话发送失败及授权丢失。  
  参考：[#126950](https://github.com/openclaw/openclaw/issues/126950)、[#167270](https://github.com/openclaw/openclaw/issues/167270)、[#167876](https://github.com/openclaw/openclaw/issues/167876)。

- **Cron 与后台自动化：** `agentTurn` 全部失败、维护任务持有写锁、后台自学习连续 50 次失败。  
  参考：[#157986](https://github.com/openclaw/openclaw/issues/157986)、[#164427](https://github.com/openclaw/openclaw/issues/164427)、[#164279](https://github.com/openclaw/openclaw/issues/164279)。

- **长期上下文：** 自动压缩可能挂起 23 分钟；压缩完成后仍可能错误触发读取上限。  
  参考：[#148292](https://github.com/openclaw/openclaw/issues/148292)、[#169723](https://github.com/openclaw/openclaw/pull/169723)。

### 7.2 主要不满

1. **故障静默化严重：**  
   记忆停止召回、工具参数丢失、callback 被丢弃、Usage 统计遗漏等问题，常缺少明确错误或诊断提示。

2. **“任务完成”与“用户收到结果”脱节：**  
   子 Agent 成功、模型已返回 HTTP 200、后台 exec 已完成，但结果可能没有送达父会话或渠道。

3. **资源消耗随多 Agent 部署非线性增长：**  
   Worker、MCP runtime、插件依赖和状态 WAL 都可能在多实例或长期运行下持续累积。

4. **升级路径不可靠：**  
   Windows 升级卡住、状态 lease 丢失、beta 更新继续执行等问题使用户不敢自动升级。

5. **修复覆盖不完整：**  
   多个 Issue 已有关联 PR 或已关闭，但核心 WAL、资源回收和会话恢复问题仍保留大量高优先级未决项。

### 7.3 正面信号

- 用户持续提交高质量复现，包括版本、平台、Node 版本、日志和量化数据。
- PR 普遍包含问题说明、用户影响、兼容性说明和验证计划，工程质量意识较强。
- 新 PR 开始直接处理此前高频痛点，例如 Usage 统计遗漏、Control UI 空响应、会话 transcript 连续性和 Worker 启动成本。
- 过去一天关闭了 **93 条 Issue**、合并或关闭了 **322 条 PR**，说明维护吞吐并未停滞。

### 7.4 用户体验综合判断

OpenClaw 的功能广度已经覆盖个人助手、插件、多渠道、语音、MCP、长期记忆和多 Agent 等方向，用户对这些能力有真实而深入的使用。当前主要不是“功能不够”，而是**复杂场景下的一致性、可观测性和资源治理不足**。功能扩张速度明显快于可靠性收敛速度。

---

## 8. 待处理积压

### 8.1 长期未响应或标记 stale 的重要 Issue

- [#149631 PR preflight 在 121 个 Job 时超过 120 个 Node matrix 上限](https://github.com/openclaw/openclaw/issues/149631)  
  已标记 stale，但直接影响 CI 扩展，应尽快决定提高上限、拆分矩阵或缩减任务。

- [#155633 Databricks Unity Gateway 官方 Provider](https://github.com/openclaw/openclaw/issues/155633)  
  已有实现 PR，但 Issue 仍为 open/stale，需维护者明确合入计划。

- [#143524 WAL 无限增长](https://github.com/openclaw/openclaw/issues/143524)  
  虽非 stale，但评论多达 138 条，仍无明确 fix PR，是最突出的未决积压。

- [#159596 Gateway 内存锯齿](https://github.com/openclaw/openclaw/issues/159596)  
  标记 stale，但每日约 200 次 critical memory-pressure 事件，仍应重新排期。

- [#144797 复用 Claude CLI live session 时保留过期 MCP 配置](https://github.com/openclaw/openclaw/issues/144797)  
  标记 stale，涉及 MCP 工具 HTTP 401，真实性尚需复核但不能长期搁置。

- [#168895 2026.9.9 更新因 retired-state-format 失败](https://github.com/openclaw/openclaw/issues/168895)  
  标记 stale，但涉及版本迁移兼容性。

- [#142116 重启恢复使 Telegram lane ingress 卡死](https://github.com/openclaw/openclaw/issues/142116)  
  标记 stale，仍存在 300 秒 claim/adoption stall 和回复载荷丢失。

- [#166964 请求方权限撤销后子 Agent 完成投递永久失败](https://github.com/openclaw/openclaw/issues/166964)  
  标记 stale，涉及权限撤销与任务终态一致性。

- [#167622 Native Codex 只读 worker 出现 `spawnSync EPERM`](https://github.com/openclaw/openclaw/issues/167622)  
  标记 stale，仍需明确是否为受限环境预期行为。

### 8.2 长期开放、需重点清理的 PR

- [#166464 服务凭据保留](https://github.com/openclaw/openclaw/pull/166464)  
  2026-10-07 创建，涉及安全边界，不能长期停留在“需要证明”。

- [#169723 压缩会话 context read limit](https://github.com/openclaw/openclaw/pull/169723)  
  2026-10-12 创建，直接影响长会话用户，建议优先完成验证。

- [#169241 Plugin history 的 bounded transcript pages](https://github.com/openclaw/openclaw/pull/169241)  
  属于内部基础能力，目前没有生产调用方，需明确合入时机或拆分。

- [#169232 渠道账号替换后重复审批提示](https://github.com/openclaw/openclaw/pull/169232)  
  涉及渠道账号生命周期，应避免长期验证停滞。

- [#169419 Talk 可检测丢包的缓冲音频](https://github.com/openclaw/openclaw/pull/169419)  
  协议和兼容性范围较大，应先确认目标版本与实现阶段。

### 8.3 维护者建议

1. **建立 WAL/事务专项问题单：** 将 [#143524](https://github.com/openclaw/openclaw/issues/143524)、[#164294](https://github.com/openclaw/openclaw/issues/164294)、[#172091](https://github.com/openclaw/openclaw/issues/172091)、[#166634](https://github.com/openclaw/openclaw/issues/166634) 统一关联到同一根因追踪。
2. **优先清理长期 P0/P1：** 每个问题明确指定 owner、目标版本、复现环境和关联 fix PR。
3. **避免“关闭 Issue 但无可见修复 PR”：** 例如 [#143334](https://github.com/openclaw/openclaw/issues/143334)、[#170332](https://github.com/openclaw/openclaw/issues/170332) 应补充可审计的修复关联。
4. **把资源治理纳入版本门槛：** 在发布前验证 WAL 大小、RSS、Worker 数、MCP 子进程上限和长时间运行稳定性。
5. **为静默失效增加健康检查：** 覆盖记忆召回、工具参数、Usage 统计、子 Agent 完成投递和 outbound dead-letter queue。
6. **控制 PR 批量规模：** 178 个待合并 PR 中存在多个大范围测试清理和内部重构批次，应避免测试重构与高风险运行时改动同时进入同一版本。

---

## 总结

OpenClaw 当前呈现出“**高活跃开发、强功能覆盖、稳定性尚未收敛**”的典型状态。SQLite WAL、内存持续增长、状态锁竞争、升级 lease 和会话/消息投递丢失，已经成为影响生产可靠性的主轴。与此同时，Usage 统计修复、Control UI 异步反馈修复、会话 transcript 连续性以及 Worker/UI/Git 复用优化，说明维护团队已经开始将反馈转化为系统性修复。

不过，过去一天 **无正式版本发布**，且大量高优先级问题尚无明确 fix PR。短期最值得关注的不是功能数量，而是能否把 WAL、Worker 生命周期和消息投递三条关键链路真正闭环。

---

## 横向生态对比

# 个人 AI 助手 / 自主智能体开源生态横向分析

**分析日期：2026-10-26**  
**样本：** OpenClaw、NanoBot、PicoClaw、IronClaw、LobsterAI、QwenPaw、Hermes Agent、OpenHuman  
**口径：** 过去 24 小时 GitHub Issue / PR / Release 更新；“健康度”基于开发吞吐、问题严重度、修复闭环、PR 积压与交付稳定性综合判断，不代表代码质量审计结论。

---

## 1. 生态全景

个人 AI 助手与自主智能体生态正从“模型与聊天套壳”快速转向具备长期记忆、多渠道接入、MCP、插件、浏览器/桌面端、Cron、子 Agent 与工作流编排的完整运行时。八个项目过去一天合计更新约 **182 条 Issue 和 329 条 PR**，但仅 **QwenPaw、OpenHuman 等少数项目存在可明确识别的已合并修复**，多数项目仍处于 PR 密集开发、评审和重构阶段。

社区诉求高度一致：**状态可靠、资源可控、升级可恢复、权限可解释、历史不可静默丢失**。OpenClaw 和 Hermes Agent 的问题规模与开发吞吐最大，但也暴露出最明显的生产可靠性压力；NanoBot、QwenPaw 和 OpenHuman 更聚焦会话隔离、Provider 兼容与插件化；PicoClaw、LobsterAI、IronClaw 交付量较低，稳定性债务或协作积压更突出。

过去 24 小时全部样本均无正式 Release，说明行业当前仍处于**“高速工程推进与架构收敛期”**，而不是稳定版本密集兑现期。对生产部署而言，应优先选择问题闭环清晰、升级路径经过验证的版本，而不是单纯追随主分支活跃度。

---

## 2. 各项目活跃度对比

| 项目 | 今日 Issues | 今日 PRs | Release | 主要推进方向 | 健康度评估 |
|---|---:|---:|---|---|---|
| **OpenClaw** | **375** | **500** | 无 | SQLite/WAL、Gateway 资源、会话恢复、升级与消息投递 | **开发极活跃、稳定性承压**；问题积压最高，不宜无监控升级 |
| **Hermes Agent** | **50** | **50** | 无 | Webapp、Gateway、多 Profile、压缩、Provider 插件化 | **高活跃、高风险并存**；功能扩张快于基础设施收敛 |
| **QwenPaw** | **14** | **16** | 无 | 插件化、语义主题、ReMe 记忆、Console 修复 | **良好但集成压力较高**；多项 XXXL 架构 PR 待审 |
| **NanoBot** | **8** | **46** | 无 | Cron、Telegram、WebUI、Provider 与会话生命周期 | **良好**；修复吞吐高，但会话串线、sudo 循环仍是高风险 |
| **OpenHuman** | **4** | **7** | 无 | TinyChannels v2、搜索 Provider、云端请求配置 | **中等**；两个 P1 无明确修复 PR，部分 PR 长期开放 |
| **IronClaw** | **0** | **7** | 无 | Rust/Tokio/Wasm/GitHub Actions 依赖升级 | **整体稳定、活跃偏低**；依赖治理积压明显 |
| **PicoClaw** | **2** | **5** | 无 | Anthropic 兼容、新 Provider | **一般**；今日无主线交付，两个旧 Bug 关闭但未修复 |
| **LobsterAI** | **1** | **2** | 无 | 多 Provider API Key、恢复/压缩任务保全 | **一般偏积极但更新量低**；核心 PR 长期 stale |

### 关键观察

- **吞吐领先者：OpenClaw**，但其 375 条 Issue、500 条 PR 更新同时意味着最高的问题暴露面和评审压力。
- **PR 效率突出：NanoBot**，46 条 PR 更新中 29 条已合并或关闭；不过严重会话隔离问题仍未闭环。
- **架构投入突出：QwenPaw、Hermes Agent**，插件化、子进程隔离、Provider 解耦等大 PR 会显著增加回归成本。
- **交付最弱：PicoClaw、IronClaw、LobsterAI**，三者今日均无正式版本，关键变更主要停留在待合并 PR 或依赖更新阶段。

---

## 3. OpenClaw 在生态中的定位

### 3.1 核心优势

#### 功能覆盖最广

OpenClaw 同时覆盖：

- 多渠道消息；
- 多 Agent 与插件；
- MCP 与外部工具；
- 长期记忆与会话压缩；
- Cron / Automation；
- Control UI；
- Windows、macOS、systemd、容器部署；
- 凭据、证书和服务权限管理。

相较之下，NanoBot 更偏轻量个人助手，QwenPaw 强调 Console、治理与插件体系，OpenHuman 更偏个人工作台和跨应用上下文，Hermes Agent 则在 Desktop/Webapp、Gateway、多 Profile 与语音方向更突出。OpenClaw 的产品形态最接近**通用个人 AI 操作入口与多 Agent 编排平台**。

#### 社区与维护吞吐领先

OpenClaw 今日：

- 更新 **375 条 Issue**；
- 更新 **500 条 PR**；
- 关闭 **93 条 Issue**；
- 合并或关闭 **322 条 PR**。

这表明它拥有样本中最大的问题反馈面、工程投入和贡献者吞吐。相比 Hermes Agent 的 50 Issue / 50 PR、QwenPaw 的 14 / 16，OpenClaw 的社区规模与变更规模明显更大。

#### 可靠性治理意识增强

当日工作不只扩展功能，还覆盖：

- 备份与发现报告的终端控制字符转义；
- Usage 统计遗漏；
- Control UI 空响应误报；
- 会话 transcript 连续性；
- Worker、Git 读取与 UI 冷启动优化；
- systemd 凭据继承和 macOS CA bundle 修复。

说明项目已开始把用户反馈转化为系统性治理，而不只是逐个修补表面症状。

### 3.2 技术路线差异

| 维度 | OpenClaw | 其他代表项目 |
|---|---|---|
| 核心形态 | 通用 Gateway + 多渠道 + 多 Agent + 插件平台 | NanoBot 偏轻量 Agent；QwenPaw 偏 Console/治理/插件；Hermes 偏 Desktop/Webapp；OpenHuman 偏个人工作台 |
| 状态管理 | SQLite/WAL、Gateway 状态库、事务与恢复是当前主轴 | NanoBot 强调 session 生命周期；QwenPaw 强调插件和记忆；Hermes 强调 Gateway/Profile |
| 扩展机制 | 插件、Agent、MCP、渠道、子 Agent | QwenPaw/Hermes 更强调插件化和子进程隔离；PicoClaw 更偏 Provider 扩展 |
| 部署复杂度 | 高，Windows/macOS/systemd/容器覆盖广 | NanoBot/OpenHuman 相对轻量；Hermes 的 Desktop/Gateway 复杂度也较高 |
| 当前短板 | WAL、资源放大、升级与投递一致性 | NanoBot 是会话隔离；QwenPaw 是大型重构与 MCP 兼容；Hermes 是 Profile/更新；OpenHuman 是审批与 Provider 兼容 |

### 3.3 生态位置判断

OpenClaw 是当前样本中**功能最完整、社区规模最大、问题复杂度也最高**的项目。其竞争壁垒不在单一模型调用，而在长期运行、多渠道、多 Agent 与部署生态形成的整体网络效应。

但规模也带来明显代价：SQLite/WAL、Worker 生命周期、升级 lease 和消息投递已成为系统性约束。未来能否建立更可靠的发布门禁、资源预算和状态机，将决定其能否从“功能强大的高活跃项目”升级为“适合大规模生产部署的平台”。

---

## 4. 共同关注的技术方向

### 4.1 会话隔离与状态归属

涉及项目：**OpenClaw、NanoBot、QwenPaw、Hermes Agent、OpenHuman**

共同诉求：

- NanoBot：多会话回复串线，可能投递给错误会话；
- QwenPaw：Composer 草稿原先仅按 Agent 存储，导致跨会话串用；
- Hermes：多 Profile 共享 Gateway 时路由、窗口请求与会话权威不一致；
- OpenClaw：Agent 重置导致 transcript 历史索引丢失；
- OpenHuman：Agent Registry 更新后进程内状态未立即刷新。

**趋势判断：** 会话 ID、Profile、Agent、Thread、Gateway 与渠道身份需要统一建模，不能仅依赖局部 key 或锁对象。

### 4.2 上下文压缩与长期记忆可靠性

涉及项目：**OpenClaw、NanoBot、QwenPaw、Hermes Agent、OpenHuman**

具体诉求：

- OpenClaw：压缩后仍错误触发 context read limit；
- NanoBot：大文件工具结果导致压缩后回合中止；
- QwenPaw：ReMe 图片记忆、标签、决策压缩与旧索引迁移；
- Hermes：压缩后历史可追溯、后台预备式压缩；
- OpenHuman：Memory Tree、TokenJuice 与个性化上下文仪表盘。

**趋势判断：** 长期记忆已从“向量检索功能”转向**上下文预算、来源追踪、压缩一致性、召回可验证性和可恢复性**的完整工程。

### 4.3 插件化、Provider 解耦与子进程隔离

涉及项目：**OpenClaw、QwenPaw、Hermes Agent、IronClaw**

- OpenClaw：插件、渠道、MCP、Agent 数量增加后带来事件循环阻塞和资源放大；
- QwenPaw：第三方 Agent 与渠道拆分为插件；
- Hermes：GitHub Copilot 从核心迁入 labs 插件；
- IronClaw：持续维护 Rust、Tokio、Wasm 等基础依赖。

**趋势判断：** 宿主核心将更轻，第三方能力通过插件协议、子进程隔离和能力协商接入；随之而来的关键问题是插件发现、崩溃恢复、凭据传递、版本兼容和观测能力。

### 4.4 自动化任务的可观测与可运维性

涉及项目：**OpenClaw、NanoBot、PicoClaw、Hermes Agent、OpenHuman**

- NanoBot：Cron 历史查询、暂停/恢复、原地更新；
- PicoClaw：任务失败却记录 `lastStatus=ok`；
- OpenClaw：Cron 与后台 Worker 的锁、状态库和资源问题；
- Hermes：Kanban 编排存在 stale、孤儿任务与监督缺口；
- OpenHuman：Workflow Copilot 拒绝执行却不展示审批请求。

**趋势判断：** 用户已经将 Cron、Workflow 和 Kanban 当作生产级后台系统，要求**状态真实、失败可追踪、任务可暂停、结果可投递、审批可解释**。

### 4.5 升级、重启与状态恢复

涉及项目：**OpenClaw、Hermes Agent、LobsterAI、QwenPaw**

- OpenClaw：Windows 更新 lease、PID 查询、状态迁移和升级中继续变更；
- Hermes：macOS/Windows 更新、launchd/计划任务、Dashboard respawn；
- LobsterAI：网关重启和压缩后保留已接受任务；
- QwenPaw：旧邮箱配置、legacy MCP 在升级后失效。

**趋势判断：** “能安装”已不是完成标准，更新流程必须具备**事务性、可回滚、跨平台一致性和旧配置迁移保障**。

### 4.6 多渠道与 Provider 兼容

涉及项目：**NanoBot、PicoClaw、QwenPaw、Hermes Agent、OpenHuman**

- Telegram、IMAP、HTTP/SSE MCP、DeepSeek、Anthropic thinking 模型；
- 旧协议回退、特殊参数、媒体附件、Provider Header 和 User-Agent；
- WebUI、Telegram Topic、桌面端、Webapp 同时演进。

**趋势判断：** Provider 差异已从简单 URL/API Key 配置，扩展到**模型参数能力、工具消息协议、鉴权形态、媒体格式和版本协商**。

---

## 5. 差异化定位分析

| 项目 | 功能侧重 | 目标用户 | 技术架构特征 | 最适合的场景 |
|---|---|---|---|---|
| **OpenClaw** | 全渠道个人助手、自动化、多 Agent、插件与工具 | 高级个人用户、开发者、团队自托管 | Gateway + 状态库 + Worker + 多插件运行时 | 长期运行、跨渠道、需要复杂自动化的个人 AI 入口 |
| **NanoBot** | 轻量 Agent、Telegram、Cron、WebUI/TUI | 个人用户、小型自托管、快速部署 | Python 核心、Provider 适配、Session/Cron/WebUI | 低门槛个人助手、通知、日程与轻量自动化 |
| **PicoClaw** | 轻量执行、Provider 扩展、嵌入式方向 | 边缘设备与简洁自托管用户 | Go 实现、兼容 Provider 接入 | 小型部署、资源受限环境、快速模型切换 |
| **IronClaw** | Rust 基础设施、Gateway 与 Wasm 工具链 | 偏工程化部署与底层开发者 | Rust、Tokio、Wasm/WASI、依赖治理 | 强调性能和可维护性的自托管基础设施 |
| **LobsterAI** | 决策模型、多服务商配置、OpenClaw 恢复 | 桌面端个人用户、非纯开发者 | GUI + OpenClaw 运行时 + DSH 实验能力 | 希望可视化配置模型与助手的终端用户 |
| **QwenPaw** | Console、治理、记忆、插件主题、渠道 | 平台型用户、Agent 开发者、治理需求团队 | 宿主 + Agent/Channel 插件 + 子进程隔离 | 多扩展、多渠道、强调审计和可配置 UI 的场景 |
| **Hermes Agent** | Webapp/Desktop、Gateway、多 Profile、语音、跨 Session | 高级个人用户、多入口重度用户、Agent 开发者 | Gateway/Desktop/Webapp/Profile + Provider 插件 | 需要本地控制台、浏览器、消息平台统一接入的用户 |
| **OpenHuman** | 个人工作台、跨应用简报、Workflow、Memory | 知识工作者、个人生产力用户 | 宿主策略/端口 + TinyAgents/TinyChannels/TinySearch | 邮件、日历、笔记与主动式个人上下文管理 |

### 定位差异的关键判断

- **OpenClaw** 不是最轻，但生态最完整，适合作为平台型基座。
- **NanoBot** 的优势是轻量与快速体验，但会话隔离和授权状态机仍需加强。
- **QwenPaw** 更强调治理、插件主题和前端测试体系，架构野心高于当前稳定性收敛速度。
- **Hermes Agent** 最接近“本地优先、多入口个人 AI 工作台”，但 Gateway、Profile 与更新链路复杂。
- **OpenHuman** 的产品叙事更偏主动式个人生产力，而不是通用消息机器人。
- **PicoClaw** 和 **IronClaw** 更适合关注小部署或底层工程实现的用户，但近期社区交付信号较弱。

---

## 6. 社区热度与成熟度

### 6.1 社区热度分层

#### 第一层：高吞吐、强讨论、问题规模大

- **OpenClaw**：500 PR、375 Issue，最高热度；核心 WAL Issue 达 138 条评论。
- **Hermes Agent**：50 Issue、50 PR；实时语音 RFC 28 条评论，Linux Desktop 透明问题 18 条评论、12 个点赞。
- **QwenPaw**：14 Issue、16 PR；插件主题 Issue 12 条评论，106 个前端测试文件的覆盖率增强也显示较强工程投入。

#### 第二层：功能推进快、问题聚焦明确

- **NanoBot**：46 PR 更新、8 Issue；Cron、WebUI、Telegram 和 Provider 改进密集，但会话串线与 sudo 循环暴露核心稳定性风险。
- **OpenHuman**：7 PR、4 Issue；活跃度适中，DeepSeek 工具调用 400 与 Workflow 审批失效是两个 P1。

#### 第三层：低吞吐或依赖维护主导

- **IronClaw**：7 个 PR，全部为 Dependabot；Wasm 依赖 PR 已积压约两个月。
- **PicoClaw**：5 PR、2 Issue，无主线交付；旧 Bug 以 stale 关闭但未形成修复。
- **LobsterAI**：2 PR、1 Issue；核心恢复 PR 长期 stale，新用户注册即禁用尚无修复。

### 6.2 成熟度分层

#### 快速迭代 / 架构扩张阶段

- **QwenPaw**：插件化、语义主题、ReMe 和子进程隔离并行推进。
- **Hermes Agent**：Webapp、实时语音、跨 Session、Provider 插件化同时展开。
- **OpenClaw**：高频功能与基础设施修复并行，但问题积压显著。

#### 质量巩固阶段

- **NanoBot**：大量小型、边界清晰修复被快速吸收，重点应转向会话隔离和授权状态机的端到端回归。
- **OpenHuman**：消息解析、测试稳定性、搜索与宿主集成逐步收敛，但两个 P1 尚未闭环。
- **LobsterAI**：功能范围较收敛，适合先处理账号准入、恢复链路和 stale PR。

#### 基础治理 / 交付保守阶段

- **PicoClaw**：Provider 扩展清晰，但修复缺失与主线交付不足。
- **IronClaw**：没有公开功能产出，依赖更新重建频繁，需关注审查与安全更新积压。

---

## 7. 值得关注的趋势信号

### 趋势一：竞争焦点从“模型能力”转向“运行时可靠性”

用户已经拥有多种模型入口，真正影响体验的是：

- 会话是否串线；
- 上下文是否能恢复；
- 工具参数是否丢失；
- 任务是否真正投递；
- 更新是否可回滚；
- Gateway 是否处于假健康状态。

**对开发者的启示：** 应把状态机、持久化事务、恢复语义和可观测性视为核心产品能力，而非部署后的附加工程。

### 趋势二：插件化正在成为默认架构，但治理能力尚未同步成熟

多个项目都在拆分 Provider、Channel 和 Agent 插件。插件化能降低核心耦合，却会引入：

- 进程崩溃隔离；
- 版本协商；
- 配置和密钥传递；
- 启动顺序；
- 重启与幂等；
- 插件来源可信性。

**对开发者的启示：** 在扩展功能之前，应先定义稳定的插件协议、能力声明、健康检查和生命周期状态机。

### 趋势三：多入口一致性将比单入口体验更重要

Desktop、Webapp、Telegram、Gateway、CLI 和 Workflow 正同时存在。同一会话在入口间移交后，最容易出现：

- Profile 路由错误；
- 草稿或排队消息丢失；
- 工具能力不一致；
- 审批状态无法渲染；
- 会话来源被错误重绑定。

**对开发者的启示：** 需要建立统一的 Session、Profile、Thread、Turn 和 Delivery 模型，避免各 UI 自行维护状态。

### 趋势四：长期记忆的竞争标准正在从“能存”转向“可证明没有丢”

社区反馈频繁涉及 provenance 排除、参数静默丢失、压缩后索引断裂、召回为零和图片记忆迁移。这意味着记忆系统必须提供：

- 写入确认；
- 来源和版本追踪；
- 召回诊断；
- 压缩前后可追溯；
- 删除与恢复机制；
- 迁移和回滚能力。

**对开发者的启示：** “静默失败但任务继续”的设计在记忆、审计和用量统计中尤其危险，应优先 fail loud 或提供健康状态。

### 趋势五：后台自动化正成为个人助手的核心价值，但状态可信度尚未达标

Cron、Workflow、Kanban、Cron history、审批卡片和子 Agent 投递状态都受到高度关注。用户需要的不是“触发一次任务”，而是完整的无人值守运行体系。

**对开发者的启示：** 后台任务产品至少需要持久化状态机、幂等执行、失败重试、最后错误、运行历史、人工暂停/恢复和结果投递确认。

### 趋势六：跨平台升级正在成为独立产品能力

Windows、macOS、Linux、systemd、容器、LaunchAgent、计划任务各自暴露不同故障。项目不能仅以“代码在 CI 中通过”判断升级安全。

**对开发者的启示：** 应将更新流程做成端到端事务，覆盖含空格路径、后台进程、状态迁移、lease、Dashboard/Gateway 重启和失败回滚。

### 趋势七：隐私与权限透明度成为差异化能力

OpenClaw 强化终端输出和凭据边界，Hermes 修正 telemetry 声明，QwenPaw 强化治理和审计，OpenHuman 暴露审批链路问题。用户在意的已不只是“系统能做什么”，还包括：

- 数据发往哪里；
- 凭据如何继承；
- 审计是否持续；
- 审批是否可解释；
- 子 Agent 权限是否准确；
- Provider Header 是否泄露。

**对开发者的启示：** 隐私与权限应通过可验证的产品行为体现，而不是只写在文档中。

---

## 决策建议

### 若目标是构建生产级个人 AI 助手

优先参考以下组合：

- **运行时与状态模型：** OpenClaw、Hermes Agent；
- **轻量化交互与 Cron：** NanoBot；
- **插件、主题与治理：** QwenPaw；
- **主动式个人上下文：** OpenHuman；
- **Provider 与边缘部署：** PicoClaw、IronClaw。

### 若当前就要上线

建议：

1. 不直接跟踪主分支，固定到经过回归验证的版本；
2. 优先验证 WAL/数据库增长、RSS、Worker 数和子进程数；
3. 为会话路由、消息投递、记忆召回和审批增加黑盒监控；
4. 对 Windows/macOS/Linux 分平台执行升级演练；
5. 将“任务完成”与“用户收到结果”作为两个独立指标；
6. 对插件、MCP、渠道和 Provider 设置明确的资源上限与回收策略。

### 最值得持续跟踪的五个信号

1. **OpenClaw 是否建立 WAL/事务专项修复链；**
2. **Hermes 是否统一 Webapp、Profile 与 Gateway 的会话模型；**
3. **NanoBot 是否修复跨会话串线和 sudo 授权循环；**
4. **QwenPaw 是否能在大型插件化重构前补齐 MCP、审计和压缩缺陷；**
5. **OpenHuman 是否修复 Workflow 审批和 DeepSeek 工具调用重放。**

---

## 总结

该生态正快速进入“**多入口、多 Agent、长期记忆、插件化与后台自动化**”驱动的第二阶段。OpenClaw 凭借最宽的功能覆盖和最大的社区吞吐占据平台型核心位置；Hermes Agent 在 Desktop/Webapp 与多 Profile 上最具代表性；QwenPaw 强调插件、治理和前端工程；NanoBot 以轻量个人助手和 Cron 工具链见长；OpenHuman 更偏主动式个人生产力。

当前行业的真正分水岭不再是功能数量，而是能否做到：**状态真实、上下文连续、结果必达、资源有界、升级可退、权限可审计**。未来胜出的项目，不一定提交最频繁，而会是最能将这些基础保证落实到每次发布和每次自动恢复中的项目。

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目动态日报

**统计日期：2026-10-26**  
**数据范围：过去 24 小时 GitHub Issues / Pull Requests 更新**

---

## 1. 今日速览

过去 24 小时共更新 **8 条 Issues** 和 **46 条 PR**，其中 Issues 有 **2 条活跃、6 条关闭**，PR 有 **17 条待合并、29 条已合并或关闭**，整体开发活动较高。  
工作重点集中在 **会话隔离与状态管理、上下文压缩、定时任务能力、WebUI 体验、Telegram 适配，以及 Provider 兼容性**。当日没有新版本发布，但多项已经关闭的 PR 表明主干分支仍在快速吸收稳定性与可用性改进。  
当前共有 **19 条仍待处理的 Issues/PR**；其中会话串线、sudo 循环等高影响问题尚无明确修复 PR，属于近期健康度中的主要风险点。  
综合判断：项目处于**高活跃开发期**，修复与功能迭代并行，但核心会话稳定性、授权流程和长任务生命周期仍需持续关注。

---

## 2. 版本发布

过去 24 小时**无新版本发布**，因此暂无新增版本说明、破坏性变更或升级注意事项。

---

## 3. 项目进展

### 3.1 会话、目标与上下文生命周期

- **修复 `/goal` 长任务被过早判定结束的问题**  
  PR 修复内部迭代预算触顶后，目标仍继续运行却被报告为完成的问题。该问题还会重置 WebUI 同一公开回合的 transcript sequence，并导致加载早期历史时出现 `Could not place earlier history`。  
  链接：[PR #6420](https://github.com/HKUDS/nanobot/pull/6420)

- **修复大文件读取结果在压缩后仍导致回合中止的问题**  
  Issue 指出，新一轮 `read_file` 返回结果位于可接受历史前缀之外，因此历史摘要成功后，大块工具结果仍可能突破输入预算并中止当前回合。相关 Issue 已关闭，表明已有处理落地。  
  链接：[Issue #5879](https://github.com/HKUDS/nanobot/issues/5879)

- **修复空闲压缩可能在长回合结束后立即执行的问题**  
  原先候选任务可能在长时间 `process_direct()` 运行期间被选中，并在回合结束后不经过新的空闲等待便立即执行。相关 Issue 已关闭。  
  链接：[Issue #6410](https://github.com/HKUDS/nanobot/issues/6410)

### 3.2 API、Provider 与核心可靠性

- **API 会话锁改为弱引用释放**  
  OpenAI 兼容 API 原先为每个 `session_id` 永久保留锁；大量不同会话请求会导致锁集合无界增长。PR 改为弱引用机制，与 Agent 会话锁生命周期保持一致。  
  链接：[PR #6463](https://github.com/HKUDS/nanobot/pull/6463)

- **支持 Kimi K3.1 Pro 请求参数**  
  修复 Moonshot 预设下温度参数与 API 固定值不一致的问题，并调整 WebUI 中不受支持的 reasoning 档位及 `max` 参数。  
  链接：[PR #6418](https://github.com/HKUDS/nanobot/pull/6418)

- **修复自定义 Provider 嵌套对象参数被重复 JSON 编码**  
  Agnes AI Provider 下，MCP 工具的嵌套对象参数会被编码为 JSON 字符串，导致输入校验失败。相关 Issue 已关闭。  
  链接：[Issue #5311](https://github.com/HKUDS/nanobot/issues/5311)

- **提升 SDK Provider 复用效率**  
  连续使用相同的单次运行级 `model=` 覆盖时，SDK 改为复用最近一次有效配置，避免重复创建 Provider 并延长其生命周期。  
  链接：[PR #6434](https://github.com/HKUDS/nanobot/pull/6434)

- **强制使用包含搜索修复的 ddgs 版本**  
  将依赖要求提升至 `ddgs 9.16.1`，采用上游对聚合和搜索引擎问题的修复。  
  链接：[PR #6442](https://github.com/HKUDS/nanobot/pull/6442)

### 3.3 Cron 与定时任务

过去 24 小时关闭的三项 Cron 增强需求，集中在**运行历史查询、暂停/恢复、原地更新**：

- 暴露调度器保留的最近 20 次执行记录，使聊天用户可以查询执行时间、耗时和错误信息。  
  链接：[Issue #6318](https://github.com/HKUDS/nanobot/issues/6318)

- 允许通过 Cron 工具暂停和恢复任务，避免删除重建导致 Job ID 与运行历史丢失。  
  链接：[Issue #6312](https://github.com/HKUDS/nanobot/issues/6312)

- 允许原地更新已有定时任务，保留任务身份和执行历史。  
  链接：[Issue #6344](https://github.com/HKUDS/nanobot/issues/6344)

此外：

- **修复夏令时跳变时段的一次性任务时间**  
  对系统时钟直接跳过的时间进行校验，避免任务被静默调整到错误小时。  
  链接：[PR #6461](https://github.com/HKUDS/nanobot/pull/6461)

这组进展表明，NanoBot 正从基础“定时任务执行”向**可管理、可观测的调度工具**演进。

### 3.4 WebUI 与前端体验

- **重组委派任务区域**  
  将正在运行和已完成的工作从长回复流中分离，放入更易访问的任务抽屉，减少长回复把运行中任务挤出视野的问题。  
  链接：[PR #6443](https://github.com/HKUDS/nanobot/pull/6443)

- **优化外观设置说明和主题预览**  
  将阅读字号、活动显示等说明移入提示层，并改善 System 主题缩略图明暗边界。  
  链接：[PR #6467](https://github.com/HKUDS/nanobot/pull/6467)

- **主题切换改为整页过渡**  
  多个已关闭 PR 完成主题动画、太阳/月亮图标过渡及阅读设置视觉清理，减少消息区与侧栏配色跳变。  
  链接：[PR #6450](https://github.com/HKUDS/nanobot/pull/6450)  
  链接：[PR #6459](https://github.com/HKUDS/nanobot/pull/6459)  
  链接：[PR #6466](https://github.com/HKUDS/nanobot/pull/6466)

- **提升文件预览路径正确性**  
  修复包含 `#` 或 `?` 的 Windows 路径及文件名被误当作 URL 后缀截断的问题，例如 `C#/Program.cs`、`notes#1.md`。  
  链接：[PR #6462](https://github.com/HKUDS/nanobot/pull/6462)

- **减少 WebUI 长会话开销**  
  回合结束时仅读取 session header，不再创建完整的历史草稿；数学流式回复也减少重复的布局监听和样式写入。  
  链接：[PR #6430](https://github.com/HKUDS/nanobot/pull/6430)  
  链接：[PR #6433](https://github.com/HKUDS/nanobot/pull/6433)

### 3.5 Telegram、Media 与 TUI

- **统一生成会话标题并应用到 Telegram Topic**  
  抽取共享的 session-title 模块，在符合条件的 WebUI 和 Telegram 私聊 Topic 回合后生成并持久化标题。  
  链接：[PR #5902](https://github.com/HKUDS/nanobot/pull/5902)

- **完善 Telegram 行为**  
  修复富文本换行渲染、在 `my` 工具中提供 `topic_id`，并使输入状态在启用 Topic 时正确区分。  
  链接：[PR #5803](https://github.com/HKUDS/nanobot/pull/5803)

- **接受大小写不敏感的 data URL base64 标记**  
  修复 `;BASE64` 或 `;Base64` 被当作格式错误、最终导致附件被静默丢弃的问题。  
  链接：[PR #6464](https://github.com/HKUDS/nanobot/pull/6464)

- **TUI 发送失败时保留队列内容**  
  自动发送流程改为先检查队首，仅在同步发送成功后出队；失败时恢复队列内容和输入框草稿。  
  链接：[PR #6026](https://github.com/HKUDS/nanobot/pull/6026)

- **缩减 TUI standalone 构建体积**  
  调整打包内容并改用目标平台原生绑定，减少下载和安装体积。  
  链接：[PR #6432](https://github.com/HKUDS/nanobot/pull/6432)

---

## 4. 社区热点

> 今日展示条目均未提供可见评论数或点赞数，因此以下以**评论、议题活跃度和影响范围**作为热点判断依据。

### 4.1 Issue #5924：Agent 陷入 sudo 授权循环

- 链接：[Issue #5924](https://github.com/HKUDS/nanobot/issues/5924)
- 状态：开放，8 条评论
- 热点原因：这是当日评论最多的 Issue，且直接影响 Agent 执行受权限保护命令的可用性。

用户反馈 sudo 授权仅持续一轮，命令真正执行前授权状态已失效；Agent 因而反复请求 sudo。达到最大迭代次数后，Agent 仍持续聚焦未能执行的命令，使会话基本不可用。该问题同时暴露了**授权作用域、失败恢复和迭代终止策略**三个设计缺口。

### 4.2 Issue #5798：多会话回复串线

- 链接：[Issue #5798](https://github.com/HKUDS/nanobot/issues/5798)
- 状态：开放，2 条评论
- 热点原因：属于跨会话数据隔离问题，可能造成响应投递给错误用户或错误会话，风险高于一般 UI 问题。

当一个会话正在运行时，其他会话的请求可能进入正在运行的会话并在那里得到回复。用户明确指出该问题在 **0.3.5 / Python 3.12 / Windows** 环境出现，而 **0.3.0 没有此问题**，说明这可能是近期并发或状态管理改动引入的回归。

### 4.3 PR #6464：修复 data URL 中 Base64 标记大小写问题

- 链接：[PR #6464](https://github.com/HKUDS/nanobot/pull/6464)
- 状态：待合并
- 热点原因：问题描述明确、修复范围小，并附带测试，属于适合快速合并的低风险修复。

RFC 2397 明确 `;base64` 标记不区分大小写，但当前实现将 `BASE64`、`Base64` 判定为错误格式。更值得注意的是，API 在解码失败时会直接丢弃图片，而聊天仍继续，用户容易在无明显报错的情况下误以为附件已成功处理。

### 4.4 PR #6463：请求结束后释放 API 会话锁

- 链接：[PR #6463](https://github.com/HKUDS/nanobot/pull/6463)
- 状态：待合并，P1
- 热点原因：直接影响长期运行服务的资源稳定性，尤其在多租户、多 session 场景下。

该 PR 防止 API 进程随着不同 `session_id` 数量增长而无界保留锁对象，属于近期最值得优先审核合并的修复之一。

### 4.5 PR #6026：TUI 发送失败后保留队列

- 链接：[PR #6026](https://github.com/HKUDS/nanobot/pull/6026)
- 状态：待合并，P0
- 热点原因：虽创建时间较早，但问题严重，直接造成用户输入内容丢失。

原实现会在 transport 确认接受消息之前移除队首，一旦同步发送异常，排队内容即永久丢失。PR 改为 peek-first、确认成功后 dequeue，并在失败时恢复草稿。该问题在用户侧具有明显数据损失风险。

### 4.6 PR #5803 / #5902：Telegram 体验与 Topic 标题

- 链接：[PR #5803](https://github.com/HKUDS/nanobot/pull/5803)  
  链接：[PR #5902](https://github.com/HKUDS/nanobot/pull/5902)
- 状态：均待合并

两项 PR 都持续活跃更新，反映 Telegram 是当前重点渠道。诉求集中在**消息正确换行、Topic 状态识别、输入状态隔离、自动标题和私聊 Topic 重命名**，本质上是提升多 Topic 场景下的可管理性。

---

## 5. Bug 与稳定性

### P0：严重，可能导致内容丢失或核心流程不可用

1. **TUI 自动发送失败会丢失排队内容**
   - 链接：[PR #6026](https://github.com/HKUDS/nanobot/pull/6026)
   - **修复状态：已有待合并 fix PR**
   - 影响：同步 transport 异常时，队列消息与输入草稿可能永久丢失。

### P1：高影响，涉及状态隔离、资源泄漏或任务失控

2. **多会话回复串线**
   - 链接：[Issue #5798](https://github.com/HKUDS/nanobot/issues/5798)
   - **修复状态：未发现明确 fix PR**
   - 影响：回复可能进入错误会话，属于会话隔离和可能的隐私边界问题。

3. **Agent 陷入 sudo 授权循环**
   - 链接：[Issue #5924](https://github.com/HKUDS/nanobot/issues/5924)
   - **修复状态：未发现明确 fix PR**
   - 影响：受保护命令无法稳定执行，Agent 最终反复追逐失败命令并耗尽迭代次数。

4. **API 会话锁无界保留**
   - 链接：[PR #6463](https://github.com/HKUDS/nanobot/pull/6463)
   - **修复状态：已有待合并 fix PR**
   - 影响：长期运行且 session 数量持续增加时，内存占用无界增长。

### P2：中影响，已有明确修复方向

5. **大文件工具结果在压缩后仍可能中止回合**
   - 链接：[Issue #5879](https://github.com/HKUDS/nanobot/issues/5879)
   - **修复状态：Issue 已关闭，推断已有修复落地**
   - 影响：长文件读取或上下文接近预算上限时，当前回合可能失败。

6. **空闲压缩在长回合结束后立即运行**
   - 链接：[Issue #6410](https://github.com/HKUDS/nanobot/issues/6410)
   - **修复状态：Issue 已关闭**
   - 影响：可能在非预期时机压缩上下文，并增加并发状态复杂度。

7. **自定义 Provider 重复编码嵌套工具参数**
   - 链接：[Issue #5311](https://github.com/HKUDS/nanobot/issues/5311)
   - **修复状态：Issue 已关闭**
   - 影响：Agnes AI 等自定义 Provider 下，MCP 嵌套对象参数校验失败。

8. **Data URL 的 Base64 标记大小写导致附件被静默丢弃**
   - 链接：[PR #6464](https://github.com/HKUDS/nanobot/pull/6464)
   - **修复状态：已有待合并 fix PR**
   - 影响：合法图片可能不显示，且缺少明显的用户提示。

9. **文件预览路径中的 `#`、`?` 被错误截断**
   - 链接：[PR #6462](https://github.com/HKUDS/nanobot/pull/6462)
   - **修复状态：已有待合并 fix PR**
   - 影响：Windows 路径和特殊文件名无法预览。

10. **一次性 Cron 时间落在夏令时跳过区间**
    - 链接：[PR #6461](https://github.com/HKUDS/nanobot/pull/6461)
    - **修复状态：已有待合并 fix PR**
    - 影响：提醒可能被静默调度到错误时间。

### P3：低至中影响，主要是性能与体验问题

11. **WebUI 数学流式布局重复初始化**
    - 链接：[PR #6433](https://github.com/HKUDS/nanobot/pull/6433)
    - **修复状态：已关闭**
    - 影响：长回复中可能产生不必要的布局开销。

12. **WebUI 回合结束创建冗余历史草稿**
    - 链接：[PR #6430](https://github.com/HKUDS/nanobot/pull/6430)
    - **修复状态：已关闭**
    - 影响：长会话每轮结束都会增加额外内存和加载开销。

13. **TUI standalone 包体积偏大**
    - 链接：[PR #6432](https://github.com/HKUDS/nanobot/pull/6432)
    - **修复状态：已关闭**
    - 影响：安装和升级成本偏高。

---

## 6. 功能请求与路线图信号

### 6.1 Cron 工具向完整任务管理演进

以下三项需求已在过去 24 小时关闭，说明近期维护重点明确：

- 查询保留的 Cron 运行历史：[Issue #6318](https://github.com/HKUDS/nanobot/issues/6318)
- 暂停与恢复任务：[Issue #6312](https://github.com/HKUDS/nanobot/issues/6312)
- 原地更新任务：[Issue #6344](https://github.com/HKUDS/nanobot/issues/6344)

**判断：高度可能进入下一版本或近期主干。** 这些需求与现有 `CronService` 能力相匹配，主要工作是补齐 Agent Tool 的操作入口和可观测性。

### 6.2 会话标题统一并扩展到 Telegram Topic

- 链接：[PR #5902](https://github.com/HKUDS/nanobot/pull/5902)

**判断：较可能进入下一版本。** 该 PR 已持续更新并包含共享模块设计，方向明确，落地成本可控。

### 6.3 WebUI 任务抽屉与统一工作区

- 链接：[PR #6443](https://github.com/HKUDS/nanobot/pull/6443)

**判断：中高概率进入后续版本。** 它解决了长回复遮挡运行中委派任务这一真实使用痛点，并区分“进行中”和“已完成结果”，可能成为 WebUI 下一轮交互重构的核心。

### 6.4 主题一致性与动画体验

- 链接：[PR #6450](https://github.com/HKUDS/nanobot/pull/6450)  
  链接：[PR #6459](https://github.com/HKUDS/nanobot/pull/6459)  
  链接：[PR #6466](https://github.com/HKUDS/nanobot/pull/6466)  
  链接：[PR #6467](https://github.com/HKUDS/nanobot/pull/6467)

**判断：较可能进入下一版本。** 多个 PR 已关闭，说明相关实现已整合；剩余 PR 更像后续清理和体验优化。

### 6.5 更完善的渠道与 Provider 兼容性

- Kimi K3.1 Pro 参数适配：[PR #6418](https://github.com/HKUDS/nanobot/pull/6418)
- Agnes AI 嵌套参数兼容：[Issue #5311](https://github.com/HKUDS/nanobot/issues/5311)
- Telegram Topic 与消息格式改进：[PR #5803](https://github.com/HKUDS/nanobot/pull/5803)

**判断：预计随下一次常规迭代持续合入。** 用户对 Provider 和渠道差异的需求仍较强，维护方向是让更多服务“开箱即用”。

---

## 7. 用户反馈摘要

### 7.1 核心痛点：跨会话隔离不可靠

用户在并行会话中遇到回复串线，且明确反馈 **0.3.5 有问题、0.3.0 没有**。这说明用户不仅在意功能是否可用，也很关注版本升级后的行为回归。多会话并行、后台任务和 Telegram Topic 等场景，正在成为 Agent 产品的重要验收标准。  
链接：[Issue #5798](https://github.com/HKUDS/nanobot/issues/5798)

### 7.2 授权机制与 Agent 执行闭环不顺畅

sudo 仅维持一轮，导致 Agent 无法连续完成命令；达到迭代上限后仍重复追逐失败目标。用户需要的不只是“能否调用 sudo”，而是**授权跨轮有效、失败后能换策略、达到上限后能正确收敛**。  
链接：[Issue #5924](https://github.com/HKUDS/nanobot/issues/5924)

### 7.3 工具调用需要更可靠的参数处理

自定义 Provider 与嵌套对象参数、MCP 工具参数校验、data URL 图片解析等问题，反映用户使用 NanoBot 时正在连接多种外部服务。兼容性故障往往表现为工具无法工作，但不一定有清晰错误提示，容易降低信任。  
链接：[Issue #5311](https://github.com/HKUDS/nanobot/issues/5311)  
  链接：[PR #6464](https://github.com/HKUDS/nanobot/pull/6464)

### 7.4 定时任务管理诉求从“创建”转向“运维”

用户不仅希望添加任务，还希望通过聊天查询执行历史、暂停恢复、原地修改时间。删除重建会丢失 Job ID 和运行历史，说明用户已经把 Cron 当作长期运维能力，而不只是简单提醒器。  
链接：[Issue #6318](https://github.com/HKUDS/nanobot/issues/6318)  
  链接：[Issue #6312](https://github.com/HKUDS/nanobot/issues/6312)  
  链接：[Issue #6344](https://github.com/HKUDS/nanobot/issues/6344)

### 7.5 WebUI 的主要不满是长回复与任务状态割裂

运行中的委派任务会被长回复推到页面下方，而历史结果又持续堆积。用户的核心诉求是：**正在执行的任务必须始终可见，完成结果应有序收纳，且不干扰主要对话流。**  
链接：[PR #6443](https://github.com/HKUDS/nanobot/pull/6443)

### 7.6 满意信号主要来自功能方向被快速吸收

Cron 增强、WebUI 性能、Telegram Topic、Provider 适配和上下文生命周期问题大多在短时间内关闭，说明维护者对社区反馈的响应速度较快。尽管当前数据未提供点赞数，**高关闭率与快速 PR 迭代**是积极信号。

---

## 8. 待处理积压

### 8.1 高优先级长期 Issue

1. **Agent sudo 循环**
   - 链接：[Issue #5924](https://github.com/HKUDS/nanobot/issues/5924)
   - 创建于 2026-09-26，已讨论 8 条评论，仍未关闭。
   - 建议：明确授权作用域、失败重试退避和最大迭代后的终止语义，并优先提供修复 PR。

2. **多会话回复串线**
   - 链接：[Issue #5798](https://github.com/HKUDS/nanobot/issues/5798)
   - 创建于 2026-09-17，仍处于开放状态。
   - 建议：补充并发复现日志，检查事件循环、session 路由、共享消息队列和锁作用域；由于存在跨会话风险，应按回归事件优先处理。

### 8.2 高优先级长期 PR

3. **TUI 发送失败后保留队列**
   - 链接：[PR #6026](https://github.com/HKUDS/nanobot/pull/6026)
   - 创建于 2026-10-03，标记 P0，至今仍待合并。
   - 建议：尽快完成审核；该问题涉及用户内容丢失。

4. **Telegram 小型修复集合**
   - 链接：[PR #5803](https://github.com/HKUDS/nanobot/pull/5803)
   - 创建于 2026-09-17，包含三个独立改进。
   - 建议：若长期合并受阻，拆分 PR，以降低审阅和回归成本。

5. **Telegram Topic 自动标题**
   - 链接：[PR #5902](https://github.com/HKUDS/nanobot/pull/5902)
   - 创建于 2026-09-24，涉及共享 session-title 模块。
   - 建议：明确失败降级策略、重复生成行为和跨渠道标题持久化边界。

### 8.3 当前待合并 PR 积压

过去 24 小时共有 **17 条 PR 待合并**，其中值得维护者优先审核的包括：

- API 会话锁释放：[PR #6463](https://github.com/HKUDS/nanobot/pull/6463)
- data URL 大小写兼容：[PR #6464](https://github.com/HKUDS/nanobot/pull/6464)
- 文件预览路径修复：[PR #6462](https://github.com/HKUDS/nanobot/pull/6462)
- Cron 夏令时校验：[PR #6461](https://github.com/HKUDS/nanobot/pull/6461)
- WebUI 委派任务抽屉：[PR #6443](https://github.com/HKUDS/nanobot/pull/6443)
- WebUI 外观与主题优化：[PR #6467](https://github.com/HKUDS/nanobot/pull/6467)

### 8.4 维护建议

- 为 sudo 循环和会话串线建立专项回归测试，覆盖授权跨轮、多会话并发、后台任务与 Telegram Topic。
- 将 PR #5803 拆分，降低长期 PR 的合并摩擦。
- 对 P0/P1 修复建立明确审阅时限，并优先发布包含稳定性修复的补丁版本。
- 为 Provider、媒体附件和 Cron 时区问题增加跨实现契约测试，降低“接口接受但实际丢弃或静默改时”的故障。
- 在下一次 Release 中集中说明 Cron 工具增强、Telegram 标题、WebUI 任务区及上下文生命周期修复。

---

## 项目健康度结论

**健康度评级：良好，但存在两个高影响稳定性风险。**

- **开发活跃度：高**——24 小时内 46 条 PR 更新，覆盖后端、渠道、WebUI、TUI、SDK 与 Cron。
- **问题关闭效率：较高**——8 条 Issues 中关闭 6 条，46 条 PR 中关闭或合并 29 条。
- **功能演进方向清晰**——Cron 可运维化、会话标题统一、WebUI 委派任务管理、Telegram 多 Topic 支持构成较清晰的中期路线。
- **主要风险**：会话串线可能破坏用户数据隔离；sudo 循环可能让核心 Agent 执行流程失控；两项均尚无明确修复 PR。
- **积压风险**：至少 5 条长期开放的关键 Issue/PR，其中两项标记 P0/P1，应优先清理。

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目动态日报

**日期：2026-10-26**  
**数据范围：过去 24 小时 GitHub 更新**  
**仓库：[sipeed/picoclaw](https://github.com/sipeed/picoclaw)**

---

## 一、今日速览

- 过去 24 小时共出现 **2 条 Issue 更新、5 条 PR 更新**，无新版本发布。
- Issue 更新均为旧 Bug 被标记为 `stale` 后关闭，分别是 **Cron 任务失败状态误报**和 **Telegram 长期轮询缺少超时**；没有新增 Issue。
- PR 方面有 **3 条关闭、2 条待合并**，当前活跃开发集中在 **Anthropic 模型兼容修复**与 **新增 Runcrate 模型提供商**。
- 今日没有合并进入主分支的功能或修复 PR，整体代码推进有限；项目健康度评估为：**问题治理正常，但活跃度偏低、关键稳定性修复尚未落地**。

---

## 三、项目进展

> 今日无版本发布，因此不单列“版本发布”章节。

### 1. Anthropic “thinking-always” 模型 Token 凭证兼容修复

- **PR：#3447**
- **状态：OPEN，待合并**
- **链接：**[fix(anthropic): make claude-haiku-5-5 work with token credentials](https://github.com/sipeed/picoclaw/pull/3447)
- **推进内容：**
  - 修复 Anthropic 使用 Token/API Key 凭证调用“始终开启思考”模型时失败的问题。
  - 当前典型错误为 HTTP 400：模型已弃用 `temperature` 参数。
  - 目标是让 `claude-haiku-5-5` 等 thinking-always 模型能够通过 token 凭证正常调用。
- **进展判断：**
  - 这是直接影响模型可用性的兼容性修复。
  - 尚无对应已合并 PR；若测试覆盖充分，预计可较快进入下一版本或补丁发布。

### 2. 新增 Runcrate OpenAI 兼容提供商

- **PR：#3448**
- **状态：OPEN，待合并**
- **链接：**[feat(provider): add Runcrate OpenAI-compatible provider](https://github.com/sipeed/picoclaw/pull/3448)
- **推进内容：**
  - 新增 Runcrate 作为一等 OpenAI 兼容 Provider。
  - 使用 `runcrate/` 模型前缀。
  - 默认 Base URL 为 `https://api.runcrate.ai/v1`。
  - 实现方式延续现有 Novita、NEAR AI Cloud 等兼容 Provider 的接入模式。
- **进展判断：**
  - 有助于扩展模型供给和部署选择，符合近期 Provider 集成方向。
  - 该 PR 仍待审查与合并，当前不能视为已正式可用。

### 3. Agent Sub-turn 概念验证关闭

- **PR：#1584**
- **状态：CLOSED**
- **链接：**[feat(agent): subturn poc](https://github.com/sipeed/picoclaw/pull/1584)
- **推进内容：**
  - 探索分层 Agent 执行和 Sub-turn 机制。
  - 目标是支持多 Agent 引导，并增强执行循环的可中断性。
- **关闭影响：**
  - 该 PoC 未进入主分支，短期不会改变现有执行模型。
  - 其设计内容可能仍可作为后续 Agent 架构工作的参考。

### 4. 历史修复汇总 PR 关闭

- **PR：#1556**
- **状态：CLOSED**
- **链接：**[fix: merge PR #1378 #1376 #1356](https://github.com/sipeed/picoclaw/pull/1556)
- **推进内容：**
  - 尝试汇总多个历史修复 PR。
- **关闭影响：**
  - 未形成新的有效合并结果，应避免将其计为今日已落地的功能或稳定性改进。

### 5. `AGENTS.md` 文档完善关闭

- **PR：#1182**
- **状态：CLOSED**
- **链接：**[feat: add agents.md](https://github.com/sipeed/picoclaw/pull/1182)
- **推进内容：**
  - 将仓库贡献指南调整为更原则化、轻量化的说明。
  - 明确以 `go.mod` 作为 Go 版本事实来源，并减少机械化清单。
- **关闭影响：**
  - 文档治理方向合理，但本次未合并，相关调整暂未进入仓库主线。

### 今日整体推进程度

- **已合并的重要 PR：0**
- **已关闭但未进入主线的 PR：3**
- **待合并的重要 PR：2**
- 今日项目主要完成了**问题清理和候选变更维护**，尚未形成明确的主线代码增量。

---

## 四、社区热点

今日没有足够高的互动数据形成单一热点：列出的 Issues 均为 **2 条评论、0 个点赞**，PR 则没有可见评论或点赞数据。

### 1. Cron 任务失败仍显示成功

- **Issue：#3423**
- **链接：**[Cron jobs always report lastStatus=ok](https://github.com/sipeed/picoclaw/issues/3423)
- **互动：2 条评论、0 个点赞**
- **背景诉求：**
  - `cron/jobs.json` 中的 `lastStatus` 被持续写成 `ok`。
  - 即使任务执行失败或没有产生输出，Gateway 仍可能丢弃 `CronTool.ExecuteJob` 返回的错误。
- **用户关注点：**
  - 定时任务状态是否可信。
  - 自动化任务失败后能否被监控、告警和追溯。
- **处理状态：**
  - Issue 已被标记为 `stale` 并关闭。
  - 未见对应的开放修复 PR，因此该问题应视为**尚未解决**。

### 2. Telegram 消息接收可能永久停止

- **Issue：#3422**
- **链接：**[Telegram channel stops receiving messages forever](https://github.com/sipeed/picoclaw/issues/3422)
- **互动：2 条评论、0 个点赞**
- **背景诉求：**
  - Telegram `getUpdates` 长轮询所使用的 `http.Client` 没有超时。
  - 在半开连接、SOCKS 代理或隧道异常时，请求可能永久挂起。
- **用户关注点：**
  - 进程表面存活，但消息通道实际上已失效。
  - 需要具备超时、重连和可观测性，避免“假健康”状态。
- **处理状态：**
  - Issue 已被标记为 `stale` 并关闭。
  - 未见对应开放修复 PR，该稳定性风险仍需处理。

### 热度判断

尽管互动量不高，两条 Issue 都直接命中自动化场景的关键问题：**状态可信度**与**通道可用性**。其重要性来自潜在生产影响，而非社区讨论热度。

---

## 五、Bug 与稳定性

### 严重程度：较高

#### Telegram 长轮询缺少超时，可能永久停止收消息

- **Issue：#3422**
- **链接：**[Telegram channel stops receiving messages forever](https://github.com/sipeed/picoclaw/issues/3422)
- **影响：**
  - Gateway 进程仍存活，但 Telegram 通道可能不再接收消息。
  - 半开连接、代理或网络隧道异常可触发无限等待。
  - 对依赖 Telegram 的个人助理、机器人或自动化入口影响较大。
- **复现环境线索：**
  - Issue 摘要提到 SOCKS 代理/隧道场景下可能发生半开连接。
- **是否已有 fix PR：否。**
- **建议：**
  - 为长轮询 HTTP 客户端配置连接、响应头及整体请求超时。
  - 增加指数退避重连、请求取消和通道存活状态记录。
  - 补充代理中断和半开连接测试。

### 严重程度：中高

#### Cron 任务执行失败却记录为 `lastStatus=ok`

- **Issue：#3423**
- **链接：**[Cron jobs always report lastStatus=ok](https://github.com/sipeed/picoclaw/issues/3423)
- **影响：**
  - 任务执行错误可能从 Gateway 调用链中丢失。
  - `cron/jobs.json` 持续写入成功状态，误导用户和上层监控。
  - 可能导致失败任务无人察觉，尤其影响无人值守执行场景。
- **是否已有 fix PR：否。**
- **建议：**
  - 持久化 `CronTool.ExecuteJob` 返回的错误。
  - 明确区分成功、失败、超时和未执行状态。
  - 同步记录失败时间、错误摘要及重试信息。

### 严重程度：中

#### Anthropic thinking-always 模型与 Token 凭证不兼容

- **关联 PR：#3447**
- **链接：**[fix(anthropic): make claude-haiku-5-5 work with token credentials](https://github.com/sipeed/picoclaw/pull/3447)
- **影响：**
  - 使用 token 凭证调用 `claude-haiku-5-5` 等模型时出现 HTTP 400。
  - 原因是请求包含模型已弃用的 `temperature` 参数。
- **是否已有 fix PR：有，#3447，尚未合并。**
- **建议：**
  - 合并前确认覆盖不同 Anthropic 模型能力组合。
  - 为 thinking-always 模型设置正确的参数约束，并保留普通模型回归测试。

### 崩溃与回归情况

- 今日数据中**没有新增崩溃报告或明确回归 Issue**。
- 但上述两个已关闭 Issue 都不应因为 `stale` 关闭而视为问题已修复。

---

## 六、功能请求与路线图信号

### 1. Runcrate Provider 接入

- **PR：#3448**
- **链接：**[feat(provider): add Runcrate OpenAI-compatible provider](https://github.com/sipeed/picoclaw/pull/3448)
- **信号：**
  - 项目持续扩展 OpenAI 兼容后端，降低用户接入新模型服务的成本。
  - 接入方式与既有 Novita、NEAR AI Cloud Provider 保持一致，说明 Provider 插件化方向较稳定。
- **下一版本可能性：较高。**
  - 条件是鉴权格式、模型列表、超时及错误映射通过审查。

### 2. Anthropic thinking-always 模型支持完善

- **PR：#3447**
- **链接：**[fix(anthropic): make claude-haiku-5-5 work with token credentials](https://github.com/sipeed/picoclaw/pull/3447)
- **信号：**
  - 项目正在补齐新型 Anthropic 模型在 Token 凭证模式下的兼容性。
  - 表明 Anthropic 接入开始覆盖不同推理模式与参数限制。
- **下一版本可能性：高。**
  - 属于明确错误修复，落地成本通常低于新增 Provider。

### 3. 分层 Agent、Sub-turn 与执行可中断性

- **PR：#1584**
- **链接：**[feat(agent): subturn poc](https://github.com/sipeed/picoclaw/pull/1584)
- **信号：**
  - PicoClaw 存在向多 Agent 协作、分层执行和可中断执行演进的长期方向。
  - 该方向与多智能体控制、任务委派和运行时治理相关。
- **下一版本可能性：低或中。**
  - 当前仅为 PoC 且 PR 已关闭，更可能作为后续架构设计储备，而非近期直接发布内容。

### 4. AI 友好的仓库协作规范

- **PR：#1182**
- **链接：**[feat: add agents.md](https://github.com/sipeed/picoclaw/pull/1182)
- **信号：**
  - 项目重视让 AI Agent 和人类贡献者共享清晰、原则化的工作约定。
  - 对个人 AI 助手和智能体项目而言，仓库可进入性本身就是产品体验的一部分。
- **下一版本可能性：中。**
  - 更可能以独立文档提交合入，而非作为功能版本亮点发布。

---

## 七、用户反馈摘要

### 核心痛点：后台任务“看似成功，实际失败”

- **来源：[Issue #3423](https://github.com/sipeed/picoclaw/issues/3423)**
- 用户在定时任务场景中遇到：
  - 任务没有产出或明确失败；
  - 状态文件却持续显示 `lastStatus=ok`。
- 这会直接破坏用户对自动化系统的信任，尤其不适合监控、每日总结、提醒和无人值守任务。

### 核心痛点：Telegram 通道出现“假健康”

- **来源：[Issue #3422](https://github.com/sipeed/picoclaw/issues/3422)**
- 用户遇到：
  - Gateway 进程仍然运行；
  - Telegram 消息却可能永久无法进入；
  - 长轮询请求在异常网络或代理链路中无限等待。
- 用户真正需要的不是单纯“进程未退出”，而是**端到端通道健康状态**。

### 模型使用反馈

- **来源：[PR #3447](https://github.com/sipeed/picoclaw/pull/3447)**
- Token 凭证调用新型 Anthropic 推理模型时因参数不兼容而失败。
- 该问题说明模型接入不仅要支持 API Key，还要处理不同模型族的参数约束和凭证模式差异。

### 满意度与参与度判断

- 今日没有点赞或新增正负评价数据，无法据此判断总体满意度。
- 两条 Issue 各有 2 条评论，说明相关问题存在一定跟进，但当前缺少持续讨论和明确修复承诺。
- 今日没有新 Issue，说明没有新增广泛爆发的用户问题；同时也意味着仓库整体反馈流入偏少。

---

## 八、待处理积压

### 1. Cron 错误状态未正确持久化

- **Issue：#3423**
- **链接：**[Cron jobs always report lastStatus=ok](https://github.com/sipeed/picoclaw/issues/3423)
- **积压状态：**
  - Issue 创建于 2026-10-11，更新于 2026-10-25 后以 `stale` 关闭。
  - 未见修复 PR。
- **风险：**
  - 自动化失败可能被错误标记为成功，属于状态可信度问题。
- **建议：**
  - 重新开启或新建带修复 PR 的 Issue，明确错误传播和持久化方案。

### 2. Telegram 长轮询缺少超时

- **Issue：#3422**
- **链接：**[Telegram channel stops receiving messages forever](https://github.com/sipeed/picoclaw/issues/3422)
- **积压状态：**
  - 同样在 2026-10-25 以 `stale` 关闭。
  - 未见修复 PR。
- **风险：**
  - 消息入口可能长期失效且缺乏自恢复。
- **建议：**
  - 优先补充超时、重连和健康检查，并针对代理/半开连接建立测试。

### 3. 大量历史 PR 长期停留后集中关闭

- **[PR #1584：Sub-turn PoC](https://github.com/sipeed/picoclaw/pull/1584)**：2026-03-15 创建，2026-10-25 更新并关闭。
- **[PR #1556：历史修复汇总](https://github.com/sipeed/picoclaw/pull/1556)**：2026-03-14 创建，2026-10-25 更新并关闭。
- **[PR #1182：AGENTS.md 改进](https://github.com/sipeed/picoclaw/pull/1182)**：2026-03-06 创建，2026-10-25 更新并关闭。
- **积压信号：**
  - 三条 PR 均存续约 7 个月，今日集中关闭。
  - 可能反映维护者清理陈旧分支，也可能意味着这些方向缺少明确接手者和评审计划。
- **建议：**
  - 对 Sub-turn PoC 标注“继续、替代或放弃”。
  - 对文档改进单独重新提交，减少因长期合并冲突造成的关闭。
  - 对历史修复汇总 PR 逐项确认是否已被其他 PR 覆盖，避免修复遗漏。

---

## 今日结论

PicoClaw 今日呈现出**“清理旧问题、积累新提案，但缺少主线交付”**的状态。两个待合并 PR 都具有明确价值：#3447 解决 Anthropic 模型兼容性，#3448 扩展 Provider 生态；相比之下，Cron 状态误报和 Telegram 无限轮询更值得维护者尽快补齐修复，因为它们直接影响自动化系统的可靠性与可观测性。当前项目没有发布新版本，也没有已合并的重要 PR，健康度可评估为：**治理节奏正常，但交付活跃度偏低，稳定性债务仍在累积**。

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw 项目动态日报

**日期：2026-10-26**  
**统计范围：过去 24 小时（截至 2026-10-26）**  
**仓库：[nearai/ironclaw](https://github.com/nearai/ironclaw)**

---

## 1. 今日速览

过去 24 小时 IronClaw 共更新 **7 个 Pull Request**，无 Issue 更新，也无新版本发布。当前有 **5 个 PR 仍待合并、2 个 PR 已关闭**，全部变更均由 Dependabot 自动发起，说明今日活动主要集中于 **Rust 依赖、GitHub Actions 与序列化组件维护**，缺少人工开发、功能扩展及缺陷修复动态。

其中，较早的依赖升级 PR [#8142](https://github.com/nearai/ironclaw/pull/8142) 和 [#8133](https://github.com/nearai/ironclaw/pull/8133) 已被关闭，新一轮同类更新分别由 [#8160](https://github.com/nearai/ironclaw/pull/8160) 和 [#8159](https://github.com/nearai/ironclaw/pull/8159) 接替，可能意味着维护者通过重建 PR 或调整依赖分组来处理版本冲突。

**项目健康度评估：整体稳定、活跃度偏低。** 自动化依赖治理保持连续性，但开放 PR 积压迹象较明显；当前数据中没有新 Bug、用户讨论或功能路线图的直接信号。

---

## 3. 项目进展

今日没有功能型或缺陷修复型 PR 被合并；已关闭的两个 PR 均属于依赖升级，因此无法确认今日引入了具体功能或稳定性修复。

### 今日关闭的重要 PR

1. **[#8142 — Rust “everything-else” 依赖组升级 41 项](https://github.com/nearai/ironclaw/pull/8142)**  
   - 状态：已关闭，未合并  
   - 作者：Dependabot  
   - 创建时间：2026-10-18；更新时间：2026-10-25  
   - 涉及 `thiserror 2.0.20 → 2.0.21`、`uuid 1.24.0 → 1.28.0`、`base64` 等 Rust 依赖。
   - **推进程度：** 未形成代码合入；不过其更新范围已被新 PR [#8160](https://github.com/nearai/ironclaw/pull/8160) 覆盖，后者将同类依赖组升级规模扩展到 43 项。

2. **[#8133 — GitHub Actions 依赖组升级 10 项](https://github.com/nearai/ironclaw/pull/8133)**  
   - 状态：已关闭，未合并  
   - 作者：Dependabot  
   - 创建时间：2026-10-11；更新时间：2026-10-25  
   - 涉及 `anthropics/claude-code-action 1.0.183 → 1.0.247`、`actions/setup-node 4.0.2 → 7.1.0` 等。
   - **推进程度：** 未形成代码合入；新 PR [#8159](https://github.com/nearai/ironclaw/pull/8159) 将该依赖组更新到 11 项，并包含 `claude-code-action 1.0.259`，相当于对原方案进行重建和扩展。

### 当前待合并 PR

- [#8160：Rust “everything-else” 依赖组升级 43 项](https://github.com/nearai/ironclaw/pull/8160)
- [#8159：GitHub Actions 依赖组升级 11 项](https://github.com/nearai/ironclaw/pull/8159)
- [#8141：Tokio 生态依赖组升级 5 项](https://github.com/nearai/ironclaw/pull/8141)
- [#8140：`serde_json 1.0.151 → 1.0.154`](https://github.com/nearai/ironclaw/pull/8140)
- [#7834：Wasm 依赖组升级 4 项](https://github.com/nearai/ironclaw/pull/7834)

**阶段性结论：** 今日项目主要完成了依赖更新方案的重整，没有可量化的新功能上线、性能提升或 Bug 修复产出。

---

## 4. 社区热点

过去 24 小时没有 Issue 更新，所有 PR 的评论数和点赞数均为 **0**，因此没有形成实质性社区讨论。

### 相对最受关注的 PR

1. **[#8160 — Rust 依赖组批量升级 43 项](https://github.com/nearai/ironclaw/pull/8160)**  
   - 今日新建，覆盖范围最大，涉及 `thiserror`、`uuid`、`base64` 等基础 Rust 依赖。
   - 社区反应：0 评论、0 点赞。
   - 背后诉求：通过统一依赖分组降低维护成本，并同步修复依赖版本滞后问题。
   - 潜在关注点：批量升级可能放大编译兼容性、API 变更及供应链风险，需要依赖 CI 验证。

2. **[#8159 — GitHub Actions 依赖组升级 11 项](https://github.com/nearai/ironclaw/pull/8159)**  
   - 今日新建，包含 `anthropics/claude-code-action` 从 `1.0.183` 升至 `1.0.259`，以及 `actions/setup-python 7.0.0 → 7.1.0` 等。
   - 社区反应：0 评论、0 点赞。
   - 背后诉求：保持 CI 工具链更新，并跟进项目所集成的 Claude Code Action。
   - 潜在关注点：Action 的大版本或行为变化可能影响工作流执行，需要关注流水线兼容性。

3. **[#7834 — Wasm 依赖组升级 4 项](https://github.com/nearai/ironclaw/pull/7833)**  
   - 创建于 2026-08-23，已开放约两个月，涉及 `wasmtime`、`wasmtime-wasi`、`wit-component`、`wit-parser`。
   - 社区反应：0 评论、0 点赞。
   - 背后诉求：更新 WebAssembly/WASI 运行链路与组件工具链。
   - 潜在关注点：这是当前最明显的长期积压 PR；若长时间未处理，可能持续落后于 Wasm 生态的安全与兼容性修复。

> 链接说明：上方标题链接按所给 PR 号为 `#7834`；若直接访问不可用，可从[PR #7834](https://github.com/nearai/ironclaw/pull/7834)进入。

---

## 5. Bug 与稳定性

### 今日新增或更新的 Bug 报告

过去 24 小时 **没有 Issue 更新，也没有 Bug 修复 PR 合并**，因此没有可报告的新崩溃、回归或行为异常。

### 与稳定性相关的依赖变更风险

虽然当前没有公开 Bug 报告，但以下 PR 涉及可能影响运行稳定性的基础组件：

- **[#8160](https://github.com/nearai/ironclaw/pull/8160)**：批量升级 43 个 Rust 依赖，包含错误处理、UUID 和编码等常用库。建议重点验证序列化、错误传播、随机标识生成和测试结果。
- **[#8141](https://github.com/nearai/ironclaw/pull/8141)**：升级 Tokio、Tokio Test、Tokio Util 等异步运行时依赖，可能影响调度、定时器、任务取消和并发行为。
- **[#8140](https://github.com/nearai/ironclaw/pull/8140)**：`serde_json` 小版本升级，通常风险较低，但仍应覆盖 JSON 序列化和反序列化测试。
- **[#7834](https://github.com/nearai/ironclaw/pull/7834)**：Wasmtime/WASI 及 WIT 工具链升级，可能影响 Wasm 执行、WASI 接口兼容性和组件模型行为。
- **[#8159](https://github.com/nearai/ironclaw/pull/8159)**：CI Action 更新，可能改变构建环境或自动执行逻辑；其影响主要体现在交付流水线，而非运行时。

**严重程度：** 当前没有已确认的线上故障或高严重度 Bug。变更风险主要属于合并前的兼容性验证风险。

---

## 6. 功能请求与路线图信号

过去 24 小时没有用户提出新的功能需求，也没有面向下一版本的功能型 PR，因此无法从当前数据识别明确的产品路线图变化。

可以从依赖更新中观察到以下**工程侧信号**：

- **[#8159](https://github.com/nearai/ironclaw/pull/8159)** 更新 `anthropics/claude-code-action`，说明项目持续维护与 Claude Code 自动化集成相关的工作流；但这不等同于新增用户功能。
- **[#7834](https://github.com/nearai/ironclaw/pull/7834)** 更新 Wasmtime、WASI 和 WIT 工具链，表明 Wasm 能力仍是项目技术演进的一部分；该 PR 已积压较久，更适合视为待恢复的工程事项，而非近期发布承诺。
- **[#8141](https://github.com/nearai/ironclaw/pull/8141)** 与 **[#8160](https://github.com/nearai/ironclaw/pull/8160)** 反映维护重点仍是基础运行时和依赖治理。

**下一版本判断：** 当前没有足够证据表明任何具体功能会在下一版本发布。若近期发布，主要变化更可能来自依赖更新和 CI 维护，而非用户可见的新能力。

---

## 7. 用户反馈摘要

过去 24 小时没有 Issue 评论或 PR 评论，故没有可提炼的真实用户痛点、使用场景以及满意度反馈。

- **用户痛点：** 无新增公开反馈。
- **使用场景：** 无新增用户案例。
- **满意/不满意：** 无点赞、评论或情绪数据支持判断。
- **维护侧信号：** 当前所有 PR 均由 Dependabot 发起，且旧依赖 PR 被关闭、同类新 PR 随即建立，侧面说明维护流程正在处理版本冲突、变更范围或 PR 重建问题；但由于没有评论，不能确认具体原因。

---

## 8. 待处理积压

### 需优先关注的 PR

1. **[#7834 — Wasm 依赖组升级 4 项](https://github.com/nearai/ironclaw/pull/7834)**  
   - 创建于 2026-08-23，至今仍开放，约两个月无明确合并结果。
   - 标签显示：`size: L`、`risk: medium`，属于较大且存在中等风险的变更。
   - 建议：维护者确认该 PR 是否仍与当前依赖版本兼容；若依赖关系已变化，应重建升级 PR，并补充 Wasm/WASI 回归测试。

2. **[#8140 — `serde_json` 升级](https://github.com/nearai/ironclaw/pull/8140)**  
   - 自 2026-10-18 起开放，虽为单依赖小版本升级，但已停留约一周。
   - 建议：确认是否被统一依赖组升级覆盖，避免同一依赖出现重复或相互冲突的 PR。

3. **[#8141 — Tokio 生态依赖组升级](https://github.com/nearai/ironclaw/pull/8141)**  
   - 自 2026-10-18 起开放，涉及异步运行时核心依赖。
   - 建议：优先运行并发、超时、任务取消及网络相关测试后合并。

4. **[#8159](https://github.com/nearai/ironclaw/pull/8159) 与 [#8160](https://github.com/nearai/ironclaw/pull/8160)**  
   - 均为今日新建，当前不宜视为积压，但变更规模较大。
   - 建议：明确审核责任人，避免从旧 PR 关闭到新 PR 建立之间继续延长等待。

### Issue 积压

过去 24 小时无 Issue 更新，提供的最新 Issues 列表也为空，因而**无法基于当前数据识别长期未响应的 Issue**。这不代表仓库不存在历史 Issue，只表示本次数据快照未包含可分析的 Issue 记录。

---

## 总结

IronClaw 今日呈现出“**无功能发布、依赖维护主导、用户互动缺失**”的状态。自动化机器人贡献了全部活动，项目的工程维护连续性尚在，但没有新增 Issue、讨论、版本或可确认的功能进展。当前最需要关注的不是短期开发节奏，而是 **Wasm 依赖 PR 的长期积压，以及大批量依赖更新的审核与验证是否及时完成**。整体健康度可评为：**运行面平稳，协作面偏淡，依赖治理面有积压风险**。

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI 项目动态日报

**日期：2026-10-26**  
**数据范围：过去 24 小时 GitHub 更新**  
**项目健康度评估：一般偏积极，但整体更新量较低**

## 1. 今日速览

过去 24 小时，LobsterAI 共出现 **1 条 Issue 更新、2 条 PR 更新**，没有发布新版本。  
PR 方面，有 **1 个 PR 被关闭/合并、1 个 PR 仍待合并**，主要涉及决策模型 API Key 配置优化，以及 OpenClaw 恢复、压缩流程中的任务保留能力。  
Issue 方面，新增用户反馈“注册后直接被禁用”，但当前评论和点赞均较少，问题细节与官方处理进展有限。  
综合来看，项目今日开发活动较有限，**功能配置体验与运行时稳定性仍在持续推进**，但社区讨论热度偏低，异常注册问题也暴露出账号准入机制或用户沟通仍需完善。

---

## 2. 版本发布

过去 24 小时 **无新版本发布**，因此暂无版本更新说明、破坏性变更或官方迁移注意事项。

---

## 3. 项目进展

### 已关闭 PR：为每个决策模型服务商分别保存 API Key

- **PR：** [#2943 — feat(settings): keep a saved API key per decision model provider](https://github.com/netease-youdao/LobsterAI/pull/2943)
- **状态：** CLOSED
- **领域：** renderer、main
- **作者：** @fisherdaddy

该 PR 完成了决策模型设置的重要调整：

- API Key 从单一 `apiKey` 配置调整为按服务商保存的 `apiKeys`；
- 用户切换模型服务商时，其他服务商已经保存的 Key 不会丢失；
- 对旧的单 `apiKey` 配置提供读取时迁移逻辑；
- 重构决策模型与 DSH 实验设置卡片，引入品牌图标并调整布局。

**进展评价：**  
这直接改善了多模型、多服务商工作流中的配置可靠性，减少了切换模型后重复填写密钥的摩擦。虽然 PR 已关闭，但数据中未明确区分其是“已合并”还是“未合并关闭”，建议维护者补充最终状态，以确认该能力是否已进入主分支。

### 待合并 PR：改进 OpenClaw 恢复与压缩后的任务保留

- **PR：** [#2765 — fix(openclaw): preserve accepted work through recovery and compaction](https://github.com/netease-youdao/LobsterAI/pull/2765)
- **状态：** OPEN
- **领域：** docs、main
- **标记：** stale
- **作者：** @alison-xx
- **创建时间：** 2026-09-25
- **最近更新：** 2026-10-25

该 PR 的目标是让已经接受的任务在以下场景中继续保留：

- 会话压缩（compaction）后；
- 网关或运行时重启后；
- 恢复流程执行过程中。

同时，PR 计划隔离模型目录 worker 与宿主编排之间的契约，并通过完整性校验连接点读取迁移检查点，以降低固定运行时带来的启动开销。当前运行时仍基于 **OpenClaw v2026.8.1**。

**进展评价：**  
该改动针对 AI 智能体运行中的数据保全和恢复可靠性，属于较高价值的稳定性改进。不过 PR 自 2026-09-25 创建后仍未关闭，并被标记为 `stale`，存在合并风险和实现与当前主分支脱节的可能，建议维护者尽快复核。

### 今日整体推进程度

今日确认有 **1 个设置模块 PR 关闭、1 个核心运行时稳定性 PR 活跃**。项目在“多服务商配置体验”和“长任务恢复可靠性”两个方向继续推进，但因没有新版本发布，暂不能确认这些改动何时面向用户交付。

---

## 4. 社区热点

### 讨论最多的 Issue：注册后账号被直接禁用

- **Issue：** [#2944 — 这个怎么注册就直接禁用？这么神吗](https://github.com/netease-youdao/LobsterAI/issues/2944)
- **状态：** OPEN
- **作者：** @jadylc
- **评论数：** 1
- **点赞数：** 0

这是过去 24 小时唯一更新的 Issue，也是今日社区讨论热度最高的条目。

**用户诉求：**

- 用户对“完成注册后立即被禁用”感到困惑；
- 用户可能期待知道触发原因；
- 用户需要恢复账号或获得申诉、处理进度方面的明确说明；
- 标题带有明显负面情绪，说明禁用策略或提示信息可能超出用户预期。

**分析：**  
目前只有 1 条评论、0 点赞，尚不足以判断是普遍性准入策略、误封、环境异常，还是注册流程问题。但该反馈发生在新用户首次使用阶段，可能直接影响激活率和口碑，建议官方优先确认并公开说明禁用条件。

### PR 热度情况

- [#2765](https://github.com/netease-youdao/LobsterAI/pull/2765) 与 [#2943](https://github.com/netease-youdao/LobsterAI/pull/2943) 均未提供评论数和点赞数据。
- 因而无法认定二者形成实质性社区讨论，更准确的判断是：**今日 Issue 讨论相对更集中，PR 仍以代码推进为主。**

---

## 5. Bug 与稳定性

### 中高优先级：注册后立即被禁用

- **报告：** [#2944](https://github.com/netease-youdao/LobsterAI/issues/2944)
- **状态：** OPEN
- **严重程度：** **中高**
- **已有 Fix PR：** **暂无**

该问题可能涉及账号风控、注册资格校验、服务端策略或异常环境识别。虽然现有信息不足以确认是否属于代码 Bug，但“注册即禁用”对新用户的关键路径影响直接，建议按账号准入故障进行排查。

**建议排查方向：**

1. 核对注册成功后的封禁规则和触发日志；
2. 检查地区、邮箱域名、IP、设备指纹或服务环境是否被误判；
3. 明确前端提示，向用户说明禁用原因及申诉路径；
4. 如属于策略误伤，补充可恢复机制或人工审核入口。

### 中优先级：压缩或网关重启后已接受任务可能丢失

- **相关 PR：** [#2765](https://github.com/netease-youdao/LobsterAI/pull/2766)
- **状态：** OPEN，且标记为 `stale`
- **严重程度：** **中**
- **已有 Fix PR：** **有，尚未确认合并**

该问题涉及智能体长任务在会话压缩、网关重启及恢复过程中的连续性。虽然已有修复 PR，但尚未合并，且较长时间未进入终态，应避免相关数据保全问题继续累积。

### 低优先级/体验改进：切换决策模型服务商导致 API Key 丢失

- **相关 PR：** [#2943](https://github.com/netease-youdao/LobsterAI/pull/2943)
- **状态：** CLOSED
- **严重程度：** **低**
- **已有 Fix PR：** **有，PR 已关闭**

这是配置体验问题而非服务可用性故障。新实现按服务商保存 Key，并兼容旧配置迁移，能降低多模型用户的重复配置成本。

---

## 6. 功能请求与路线图信号

### 明确反馈：账号禁用原因透明化与可申诉

- **来源：** [#2944](https://github.com/netease-youdao/LobsterAI/issues/2944)

虽然该 Issue 以故障反馈形式出现，但反映出明确的产品需求：

- 禁用时应展示具体原因；
- 对疑似误封提供申诉或恢复渠道；
- 避免用户无法判断注册失败还是账号受限；
- 可进一步提供注册前准入规则说明。

目前没有对应 PR，因此短期内尚不能判断其是否进入下一版本。

### 已有明确实现信号：决策模型按服务商独立保存凭据

- **来源：** [#2943](https://github.com/netease-youdao/LobsterAI/pull/2943)

这一改动说明设置模块正在向“多服务商、多模型并行配置”演进。其重点不是新增单一模型能力，而是改善频繁切换模型时的凭据管理体验，可能成为下一版本中设置页优化的候选内容。

### 高概率进入后续稳定性版本：恢复与压缩后的任务保全

- **来源：** [#2765](https://github.com/netease-youdao/LobsterAI/pull/2765)

该 PR 已覆盖恢复链路、完整性校验和启动开销优化，且明确保留当前 OpenClaw 版本。鉴于问题直接影响长任务可靠性，其合入优先级较高；但由于已被标记为 stale，需要先确认是否仍适用于最新主分支。

---

## 7. 用户反馈摘要

今日可提取到的直接用户反馈主要来自 [#2944](https://github.com/netease-youdao/LobsterAI/issues/2944)：

- **真实痛点：** 用户完成注册后无法进入正常产品流程，账号被直接禁用；
- **使用阶段：** 新用户注册与首次激活阶段；
- **情绪与体验：** 用户对处理结果感到突然且难以理解，标题中的“这么神吗”体现了对禁用策略的不信任或困惑；
- **满意点：** 现有数据中没有足够评论支持明确的满意反馈；
- **不满意点：** 禁用原因不透明、缺少申诉路径，以及可能存在的准入误判。

由于该 Issue 仅有 1 条评论，且未提供评论正文，无法进一步判断用户是否已经获得官方解释、账号是否恢复，或问题是否可复现。

---

## 8. 待处理积压

### 长期未关闭且已标记 stale 的核心 PR

- **PR：** [#2765 — fix(openclaw): preserve accepted work through recovery and compaction](https://github.com/netease-youdao/LobsterAI/pull/2765)
- **创建于：** 2026-09-25
- **最近更新：** 2026-10-25
- **当前状态：** OPEN、`stale`

该 PR 涉及已接受任务的恢复与保留，是运行时稳定性的重要改动。建议维护者：

1. 重新基于最新主分支验证；
2. 检查迁移检查点与完整性校验逻辑；
3. 补充压缩、网关重启和恢复场景的测试结果；
4. 尽快合并、替代或明确关闭，避免关键修复长期悬置。

### 仍待跟进的注册禁用问题

- **Issue：** [#2944](https://github.com/netease-youdao/LobsterAI/issues/2944)
- **当前状态：** OPEN
- **评论数：** 1
- **点赞数：** 0

虽然不是长期积压，但属于新出现的用户准入阻塞问题。建议在获得更多复现信息前，先给出临时响应，至少说明禁用原因、账号恢复方式和反馈渠道。

---

## 今日结论

LobsterAI 今日整体处于 **低量开发、方向明确但交付节奏偏慢** 的状态。设置模块完成了多服务商 API Key 管理方向的推进，OpenClaw 恢复与压缩链路也已有较完整的修复方案；但关键 PR 长期处于 stale 状态，尚无新版本可供验证。与此同时，新用户“注册即禁用”的反馈直接影响核心使用路径，应成为今日最需要优先澄清和排查的事项。

</details>

<details>
<summary><strong>QwenPaw</strong> — <a href="https://github.com/agentscope-ai/QwenPaw">agentscope-ai/QwenPaw</a></summary>

# QwenPaw 项目动态日报

**统计日期：2026-10-26**  
**数据范围：过去 24 小时**

## 1. 今日速览

过去 24 小时共更新 **14 条 Issues** 与 **16 条 PR**，其中 Issue 新开/活跃 9 条、关闭 5 条；PR 待合并 13 条、合并/关闭 3 条，项目整体保持较高活跃度。  
今日没有发布新版本，主要开发方向集中在 **插件化拆分、Console 主题扩展、记忆系统升级、工具安全修复和前端测试补强**。  
已关闭 PR 覆盖了思考强度滑块、侧边栏分组重叠和会话草稿串用等问题，但仍有 **13 个 PR 等待合并**，其中多项涉及 XXXL 级架构调整。  
Bug 焦点继续集中在 MCP 兼容与配置、Windows 压缩包编码、上下文压缩失败、审计日志中断等可靠性问题；部分问题已有对应修复 PR，但尚未完全进入稳定版本。  
总体判断：**研发活动旺盛、问题反馈活跃，但架构级变更较多，合并与回归验证压力较高。**

---

## 2. 版本发布

过去 24 小时 **无新版本发布**。

当前用户反馈主要基于 **v2.2.2 / v2.2.2.post1**，今日修复和功能 PR 大多尚处于待合并状态，因此不能视为已进入正式发行版本。

---

## 3. 项目进展

### 3.1 今日合并或关闭的重要 PR

> 数据仅显示 3 个 PR 已合并/关闭，摘要未提供具体合并时间及提交记录，因此以下按“已完成合入流程或关闭处理”表述。

#### Console 思考强度滑块显示与保存稳定性修复

- PR：[ #8287 fix(console): correct thinking slider fill and stabilize saving](https://github.com/agentscope-ai/QwenPaw/pull/8287)
- 对应 Issue：[ #8286 Thinking strength slider has misleading fill and flickers on save](https://github.com/agentscope-ai/QwenPaw/issues/8286)
- 主要进展：
  - 修正低档位时整条滑轨被误显示为已填充的问题。
  - 修复设置保存过程中滑块状态闪烁、选中值不稳定的问题。
  - 同步处理维护者审查提出的回归问题。
- 项目意义：改善 Console 设置项的视觉准确性和交互稳定性，降低重复配置带来的困惑。

#### 修复来源分组标题与首个会话重叠

- PR：[ #8334 fix(console): reserve full height for source-group headers](https://github.com/agentscope-ai/QwenPaw/pull/8334)
- 对应 Issue：[ #8333 source-group headers overlap their first sidebar conversation](https://github.com/agentscope-ai/QwenPaw/issues/8333)
- 主要进展：
  - 为 `SessionGroupHeader` 预留完整高度。
  - 修复定时任务会话、子智能体会话分组展开后，首个会话在悬停或选中状态下覆盖分组标题的问题。
- 项目意义：修复 Console 侧边栏高频操作中的布局回归，提升会话管理可用性。

#### 会话输入草稿按 conversation 隔离

- PR：[ #8362 fix(console): scope chat input drafts to the conversation](https://github.com/agentscope-ai/QwenPaw/pull/8362)
- 对应 Issue：[ #8351 Composer draft is keyed per-agent instead of per-conversation](https://github.com/agentscope-ai/QwenPaw/issues/8351)
- 主要进展：
  - 将 Composer 草稿存储键从“仅 agent ID”改为同时包含 agent 和 session 信息。
  - 避免同一智能体不同会话之间共享未发送文本。
- 项目意义：解决多会话并行使用时的数据串扰，是影响日常使用数据正确性的重要修复。

### 3.2 尚未合并的重点方向

#### 插件化架构拆分持续推进

- PR：[ #8426 feat(agent): extract third-party agent into plugins](https://github.com/agentscope-ai/QwenPaw/pull/8426)
- PR：[ #8187 feat(channels): extract channels into plugins with subprocess isolation](https://github.com/agentscope-ai/QwenPaw/pull/8187)
- 预期收益：
  - 降低宿主进程对第三方 Agent 和平台 SDK 的直接依赖。
  - 通过子进程隔离渠道故障，改善插件边界和扩展能力。
- 风险提示：两项 PR 均为 XXXL 规模，涉及进程模型、插件发现、静态描述文件和生命周期管理，预计需要较完整的集成与回归验证。

#### 插件主题从单一颜色扩展为语义 Token

- PR：[ #8422 feat(console): add plugin-facing theme token overrides](https://github.com/agentscope-ai/QwenPaw/pull/8422)
- 对应需求：[ #8071 Plugin-facing theme extension point](https://github.com/agentscope-ai/QwenPaw/issues/8071)
- 主要价值：
  - 允许插件按语义 Token 覆盖主题。
  - 支持浅色/深色等不同 scheme 的差异化主题。
  - 解决现有接口只能设置 `colorPrimary` 单一标量的问题。

#### ReMe 记忆能力升级

- PR：[ #8347 feat(memory): integrate ReMe 0.4.2.0 with opt-in decision compaction, images and tags](https://github.com/agentscope-ai/QwenPaw/pull/8347)
- 主要能力：
  - ReMe 依赖由 `0.4.1.11` 升至 `0.4.2.0`。
  - 引入默认关闭的决策记忆相关性压缩。
  - 增加对话图片记忆、实体标签生成。
  - 对接后台索引和 Auto-Dream 记忆整合流程。
- 风险提示：涉及记忆数据格式和后台索引流程，合并前应重点验证升级兼容性、失败恢复和宿主文件一致性。

#### 前端测试覆盖显著扩充

- PR：[ #8380 test(console): add 106 frontend unit test files](https://github.com/agentscope-ai/QwenPaw/pull/8380)
- 数据：
  - 新增 **106 个测试文件**。
  - 覆盖 **1,811 条语句**。
  - 前端覆盖率提升约 **4.97 个百分点**。
  - 产品代码变更为零。
- 项目意义：有助于承接 Console 快速迭代，提升主题、配置、会话和插件相关改动的回归发现能力。

### 3.3 今日整体推进评估

今日已经落地的重点以 **Console 体验和状态隔离修复** 为主；插件化、记忆升级、主题扩展和 MCP 文档仍主要处于开发或评审阶段。  
按条目计，项目在 24 小时内完成了 3 项用户可见修复，并推进多个中长期架构能力；但由于没有版本发布，成果暂未转化为正式发行收益。

---

## 4. 社区热点

### 4.1 插件主题扩展：评论最多的功能议题

- Issue：[ #8071 Plugin-facing theme extension point](https://github.com/agentscope-ai/QwenPaw/issues/8071)
- 数据：**12 条评论**，为今日列出的 Issue 中评论最多。
- 已有 PR：[ #8422](https://github.com/agentscope-ai/QwenPaw/pull/8422)
- 核心诉求：
  - 当前插件只能设置一个 `colorPrimary`，无法表达完整主题。
  - 用户希望插件拥有稳定的语义 Token 覆盖层。
  - 主题需要适配浅色/深色模式，而不是只提供固定主色。
- 判断：需求明确且已有实现 PR，是近期最可能进入后续版本的功能之一，但仍需确认公开 API 的稳定性与兼容策略。

### 4.2 Windows ZIP 压缩包乱码

- Issue：[ #8270 Windows压缩包在Qwenpaw乱码](https://github.com/agentscope-ai/QwenPaw/issues/8270)
- 数据：**4 条评论**，状态已关闭。
- 热点原因：
  - 同时影响 Skill ZIP 导入和 Hub 下载解压。
  - 根因指向 ZIP 文件名编码未正确识别，常见于 Windows 中文路径和中文文件名。
- 判断：这是高影响、易复现的跨平台兼容问题，关闭有助于降低安装失败率。

### 4.3 MCP 配置弹窗无法关闭

- Issue：[ #8405 MCP配置弹窗无法正确关闭](https://github.com/agentscope-ai/QwenPaw/issues/8405)
- 数据：**3 条评论**，状态开放。
- 用户痛点：
  - 在 MCP 客户端管理页面选择 HTTP/SSE 传输方式后，弹出的卡片无法关闭。
  - 仅 stdio 模式表现正常。
- 判断：直接影响 MCP 配置流程，优先级应高于一般 UI 缺陷；需检查事件绑定、遮罩层关闭逻辑和异步状态竞争。

### 4.4 前端测试覆盖率提升

- PR：[ #8380 test(console): add 106 frontend unit test files](https://github.com/agentscope-ai/QwenPaw/pull/8380)
- 数据：106 个测试文件、1,811 条语句、约 +4.97pp 覆盖率。
- 社区价值：
  - 对快速演进的 Console 前端形成回归保护。
  - 纯测试变更、风险相对较低。
- 判断：适合优先评审合并，也可作为后续主题、插件和会话功能合并的质量门槛。

### 4.5 Baizhi MCP 示例文档

- Issue：[ #7912 Optional authenticated MCP web-research example](https://github.com/agentscope-ai/QwenPaw/issues/7912)
- PR：[ #8423 docs(mcp): add optional Baizhi Cloud Browser example](https://github.com/agentscope-ai/QwenPaw/pull/8423)
- 核心关注点：
  - 展示“搜索 → 获取页面 → 提取内容”的完整 MCP 工作流。
  - 明确凭证、数据共享、页面操作及轮换流程。
  - 示例默认关闭，避免向用户强制引入外部服务。
- 判断：文档贡献与现有 Issue 已形成对应闭环，是首次贡献者 PR 中较成熟的一组。

---

## 5. Bug 与稳定性

### 严重

#### 1. `governance/audit.db` 停止按 Agent 记录工具调用

- Issue：[ #8412 governance/audit.db stops recording tool calls per-agent](https://github.com/agentscope-ai/QwenPaw/issues/8412)
- 影响：
  - 即使 `policy.yaml` 设置 `audit_level: all`，部分 Agent 仍会停止写入工具调用审计事件。
  - 一旦停止，事件记录不会自动恢复。
  - 涉及文件写入等受治理操作，可能造成合规与故障追溯缺口。
- Fix PR：**未见明确对应 PR**。
- 建议：优先检查审计消费者异常是否导致写入循环退出，并补充恢复机制及不间断记录测试。

#### 2. 上下文压缩请求必然返回 HTTP 400

- Issue：[ #8417 上下文压缩摘要必 400 失败](https://github.com/agentscope-ai/QwenPaw/issues/8417)
- 影响：
  - 手动 `/compact` 与自动压缩均可能在 continuation summary 阶段失败。
  - 火山引擎 AgentPlan 下，`glm-5.3-flash` 不支持 `thinking.type=disabled`。
  - compat 层同时下发两套关闭 thinking 参数，引发请求被拒。
- 缓解情况：
  - 旧摘要得以保留。
  - `keep-context-after-compact-failure` 插件避免上下文丢失。
- Fix PR：**未见明确对应 PR**。
- 建议：增加模型能力探测与参数去重，避免“禁用 thinking”参数被重复编码。

#### 3. Desktop 审批弹窗无法关闭并持续重试

- Issue：[ #8416 Desktop approval dialog keeps retrying a cancelled request and cannot be dismissed](https://github.com/agentscope-ai/QwenPaw/issues/8416)
- 影响：
  - 原会话或回合已结束时，已取消的审批请求仍反复重试。
  - 桌面端弹窗无法正常关闭，干扰后续操作。
- Fix PR：**未见明确对应 PR**。
- 建议：补充请求生命周期状态机，确保取消、终端关闭和会话结束能够幂等地终止重试。

### 较高

#### 4. 老版 MCP 服务无法从现代协议握手回退

- Issue：[ #8424 server/discover 返回 404 + JSON-RPC -32601 导致老协议 MCP 服务器无法回退](https://github.com/agentscope-ai/QwenPaw/issues/8424)
- 影响：
  - 老协议 MCP 服务对未知方法返回 HTTP 404 和 JSON-RPC `-32601`。
  - 当前 `_negotiate()` 将其视为“现代服务器但方法未知”，未继续尝试 legacy `initialize`。
  - 导致仅支持旧握手的 MCP 服务无法连接。
- Fix PR：**未见明确对应 PR**。
- 建议：把“方法不支持”和“现代协议成功协商”拆分为不同结果，并保留 legacy 回退路径。

#### 5. 邮箱升级后旧配置导致 IMAP 登录失败

- Issue：[ #8425 邮箱 name 字段含完整地址时拼成 name@domain@domain](https://github.com/agentscope-ai/QwenPaw/issues/8425)
- 影响：
  - 旧配置若在 `name` 中保存完整邮箱，同时 `domain` 单独存在，会被拼接为双域名。
  - IMAP 返回 `AUTHENTICATIONFAILED`，升级后既有配置失效。
- Fix PR：**未见明确对应 PR**。
- 建议：兼容读取历史配置；`name` 已包含 `@` 时不再追加域名。

#### 6. Shell 自杀防护误拦截合法进程管理命令

- Issue：[ #8413 Self-kill guard blocks kill $PID for an unrelated user-started process](https://github.com/agentscope-ai/QwenPaw/issues/8413)
- 影响：
  - `PID=$(pgrep mydaemon) && kill $PID` 等合法命令因字符串匹配被判定为自杀。
  - 影响运维与自动化脚本。
- Fix PR：**已有**：[ #8419 fix(tools): stop the shell self-kill guard from blocking kill $PID](https://github.com/agentscope-ai/QwenPaw/pull/8419)
- 状态：PR 待合并。

#### 7. Windows ZIP 文件名乱码

- Issue：[ #8270 Windows压缩包在Qwenpaw乱码](https://github.com/agentscope-ai/QwenPaw/issues/8270)
- 影响：
  - Skill 导入和 Hub 下载可能错误解释 ZIP 文件名编码。
  - 中文文件名或路径可能乱码并影响安装结构。
- 状态：Issue 已关闭。
- 修复入口：涉及 [`store.py`](https://github.com/agentscope-ai/QwenPaw/blob/main/store.py) 与 [`hub.py`](https://github.com/agentscope-ai/QwenPaw/blob/main/hub.py) 中的 ZIP 解压逻辑；数据中未给出独立修复 PR 链接。

### 中等

#### 8. MCP 配置弹窗无法关闭

- Issue：[ #8405 MCP配置弹窗无法正确关闭](https://github.com/agentscope-ai/QwenPaw/issues/8405)
- Fix PR：**未见明确对应 PR**。

#### 9. GitHub Skill 导入可能损坏二进制文件

- Issue：[ #8179](https://github.com/agentscope-ai/QwenPaw/issues/8179)（由关联 PR 引用）
- PR：[ #8198 fix(skills): preserve binary files in GitHub imports](https://github.com/agentscope-ai/QwenPaw/pull/8198)
- 影响：
  - 下载、打包、标准化和安装阶段可能把无效 UTF-8 字节替换掉，静默损坏二进制资源。
- 状态：PR 仍开放。
- 建议：继续保持 `SKILL.md` 的严格 UTF-8 校验，同时对二进制附件执行字节级保真处理。

#### 10. TaskTracker 完成回调卡住后无法清理运行记录

- Issue：[ #8173](https://github.com/agentscope-ai/QwenPaw/issues/8173)（由关联 PR 引用）
- PR：[ #8268 fix(task_tracker): bound the run completion callback and always clean up](https://github.com/agentscope-ai/QwenPaw/pull/8268)
- 影响：
  - 完成回调挂起或被取消时，`TaskTracker._runs` 中的条目可能永久保留为 `running`。
  - 长期运行会积累脏状态，影响任务状态展示和资源管理。
- 状态：PR 待合并。

### 较低

#### 11. 侧边栏来源分组标题重叠

- Issue：[ #8333](https://github.com/agentscope-ai/QwenPaw/issues/8333)
- Fix PR：[ #8334](https://github.com/agentscope-ai/QwenPaw/pull/8334)
- 状态：已关闭，对应修复 PR 已关闭/完成处理。

#### 12. 思考强度滑块显示错误与保存闪烁

- Issue：[ #8286](https://github.com/agentscope-ai/QwenPaw/issues/8286)
- Fix PR：[ #8287](https://github.com/agentscope-ai/QwenPaw/pull/8287)
- 状态：已关闭，对应修复 PR 已关闭/完成处理。

#### 13. Composer 草稿跨会话串用

- Issue：[ #8351](https://github.com/agentscope-ai/QwenPaw/issues/8351)
- Fix PR：[ #8362](https://github.com/agentscope-ai/QwenPaw/pull/8362)
- 状态：已关闭，对应修复 PR 已关闭/完成处理。

---

## 6. 功能请求与路线图信号

### 6.1 插件语义主题接口：纳入下一版本的概率较高

- 需求：[ #8071](https://github.com/agentscope-ai/QwenPaw/issues/8071)
- 实现：[ #8422](https://github.com/agentscope-ai/QwenPaw/pull/8422)
- 判断依据：
  - 已有完整 PR。
  - 诉求明确，且与 Console 现有主题系统直接衔接。
  - 不依赖大型后端重构。
- 关注点：Token 命名、公开 API 稳定性、浅色/深色 scheme、用户自定义主题与插件主题的优先级。

### 6.2 第三方 Agent 与渠道插件化：战略级路线信号

- PR：[ #8426](https://github.com/agentscope-ai/QwenPaw/pull/8426)
- PR：[ #8187](https://github.com/agentscope-ai/QwenPaw/pull/8187)
- 判断：这是本日最明确的架构方向之一，显示项目正从单体式集成转向“宿主 + 插件 + 子进程隔离”的扩展模型。
- 关注点：
  - 插件发现和版本协商。
  - 崩溃隔离与重启策略。
  - 配置及密钥传递。
  - Console 渠道与插件渠道的能力一致性。
  - 迁移后现有配置和用户脚本的兼容性。

### 6.3 `/steer` 中途引导智能体

- PR：[ #8318 feat(agent): add /steer command for mid-execution guidance](https://github.com/agentscope-ai/QwenPaw/pull/8318)
- 对应需求：[ #1775](https://github.com/agentscope-ai/QwenPaw/issues/1775)
- 用户场景：
  - 智能体正在执行长任务时，用户发现方向偏差。
  - 当前只能中止并丢失进度，或等待错误任务继续运行。
- 判断：与实时 Agent 交互体验直接相关，可能进入下一版本，但需定义与 stop、tool approval、并发 turn 的优先级。

### 6.4 Files 面板支持系统打开与文件管理器定位

- Issue：[ #8420 Files panel — add “Open with default app” and “Reveal in Finder / Explorer”](https://github.com/agentscope-ai/QwenPaw/issues/8420)
- 用户场景：
  - docx、xlsx、pptx、ZIP、媒体和其他二进制文件无法在浏览器内预览时，目前只能下载。
  - 用户希望直接用系统默认应用打开，或在 Finder/Explorer 中定位。
- 判断：属于高价值桌面端易用性增强。若安全边界、路径穿越和敏感文件访问已妥善处理，纳入下一版本的概率较高。

### 6.5 ReMe 图片记忆、实体标签与决策压缩

- PR：[ #8347](https://github.com/agentscope-ai/QwenPaw/pull/8347)
- 方向价值：
  - 从文本记忆扩展到图像、实体关系和决策知识。
  - 为长期个人助理和复杂任务提供更丰富的检索上下文。
- 判断：功能价值高，但涉及记忆后端升级和数据兼容性，更适合作为独立版本或可选能力发布，避免与高风险重构捆绑。

### 6.6 DeepSeek Search 作为 Web Search 提供方

- PR：[ #8314 feat(web_search): add DeepSeek Search provider](https://github.com/agentscope-ai/QwenPaw/pull/8314)
- 价值：
  - 复用已有 DeepSeek API Key。
  - 提供结构化搜索结果、发布日期和权威性等级。
- 判断：新增提供方边界清晰，可较快纳入；但需验证配额、错误处理和结果质量。

### 6.7 平台部署文档修正

- PR：[ #8421 note platform workspace sleep and cleanup rules](https://github.com/agentscope-ai/QwenPaw/pull/8421)
- PR：[ #8418 note eligibility review for AgentScope Platform deployment](https://github.com/agentscope-ai/QwenPaw/pull/8418)
- 关注点：
  - 平台工作区并非永久 7×24 在线，不活跃后会休眠并清理。
  - 部署可能需要账户资格审核，并非完全无条件的一键部署。
- 判断：低风险文档修复，适合尽快合并，可降低用户对可用性和部署周期的误解。

### 6.8 第三方 MCP 网页研究示例

- Issue：[ #7912](https://github.com/agentscope-ai/QwenPaw/issues/7912)
- PR：[ #8423](https://github.com/agentscope-ai/QwenPaw/pull/8423)
- 判断：文档型需求，已有实现，合并成本较低。

---

## 7. 用户反馈摘要

### 7.1 多会话并行使用时，草稿内容会串用

用户反馈 Composer 草稿原先仅按 Agent 存储，导致同一 Agent 的不同会话共享未发送文本。  
这反映出高频真实场景是：**一个智能体同时处理多个对话、任务或子会话**。相关修复 PR [#8362](https://github.com/agentscope-ai/QwenPaw/pull/8362) 已将键范围收窄到 Agent + Session，是针对数据隔离的直接改进。

### 7.2 Windows 用户安装中文压缩包时遭遇乱码

Issue [#8270](https://github.com/agentscope-ai/QwenPaw/issues/8270) 表明，Windows ZIP 文件名编码是实际部署阻碍。  
用户期望 Skill 和 Hub 下载链路在中文系统、中文文件名及不同 ZIP 实现下保持稳定。该问题已关闭，但后续仍值得通过跨平台 ZIP 样本做持续回归。

### 7.3 MCP 配置流程对 HTTP/SSE 用户不友好

在 [#8405](https://github.com/agentscope-ai/QwenPaw/issues/8405) 中，用户明确反馈只有 stdio 模式能正常关闭配置卡片。  
这说明 MCP 用户的核心痛点不只是“能连接”，还包括 **配置过程可撤销、可退出、不会卡死**。弹窗问题会直接放大用户对远程 MCP 配置流程的不信任。

### 7.4 旧 MCP 服务与旧邮箱配置在升级后出现兼容性断裂

[#8424](https://github.com/agentscope-ai/QwenPaw/issues/8424) 和 [#8425](https://github.com/agentscope-ai/QwenPaw/issues/8425) 指向同一类诉求：**升级不能破坏既有服务端和配置**。  
用户当前可能已部署 legacy MCP 服务，或使用历史邮箱配置格式；新版本应主动兼容并提供迁移提示，而不是直接终止连接或登录。

### 7.5 用户希望在任务执行中纠偏，而非中止重来

PR [#8318](https://github.com/agentscope-ai/QwenPaw/pull/8318) 反映了明确的使用阻力：当前 Agent 一旦启动，用户只能等待或中止；中途纠偏能力缺失。  
`/steer` 指令直接回应这一痛点，是从“自动执行”向“可交互监督”演进的重要信号。

### 7.6 用户对二进制文件只下载不满意

Issue [#8420](https://github.com/agentscope-ai/QwenPaw/issues/8420) 指出，Console 对文档和二进制文件只能预览或下载，用户缺少本地桌面软件的顺畅操作。  
“使用默认应用打开”和“在文件管理器中显示”均是桌面端自然预期，可能成为影响产品与 Web 端体验差异感知的重要功能。

### 7.7 治理和审计必须真正持续生效

[#8412](https://github.com/agentscope-ai/QwenPaw/issues/8412) 的问题不是单次漏记，而是某个 Agent 停止记录后不再恢复。对企业用户而言，**审计链路的稳定性和可恢复性比偶发单条缺失更严重**。这应被视为治理功能的核心 SLO，而不仅是普通日志 Bug。

### 7.8 平台部署文案可能造成错误预期

[#8418](https://github.com/agentscope-ai/QwenPaw/pull/8418) 和 [#8421](https://github.com/agentscope-ai/QwenPaw/pull/8421) 显示，用户实际体验与 README 中“一键部署、7×24 在线”的表述存在落差。  
用户对平台服务的核心疑问是：**是否需要审核、可用性是否持续、费用和资源如何回收**。及时修正文档比继续扩大宣传更利于维护信任。

---

## 8. 待处理积压

> 下列条目根据开放时间、持续讨论、规模或对核心能力的影响识别；当前数据没有提供维护者首次响应时间，因此无法精确计算“长期未响应”。

### 8.1 长期开放的插件主题扩展需求

- Issue：[ #8071](https://github.com/agentscope-ai/QwenPaw/issues/8071)
- 开放时间：2026-10-01。
- 当前评论：12 条。
- 已出现实现 PR：[ #8422](https://github.com/agentscope-ai/QwenPaw/pull/8422)。
- 建议：尽快完成接口评审并明确合并目标版本，避免公开 API 长时间悬而未决。

### 8.2 可选认证型 MCP 网页研究示例

- Issue：[ #7912](https://github.com/agentscope-ai/QwenPaw/issues/7912)
- 开放时间：2026-09-21。
- 当前评论：2 条。
- 已有 PR：[ #8423](https://github.com/agentscope-ai/QwenPaw/pull/8423)。
- 建议：优先完成首次贡献者 PR 的审查、凭证安全说明和链接校验。

### 8.3 GitHub Skill 二进制文件保真修复

- PR：[ #8198](https://github.com/agentscope-ai/QwenPaw/pull/8198)
- 关联 Issue：[ #8179](https://github.com/agentscope-ai/QwenPaw/issues/8179)
- 开放时间：2026-10-12。
- 当前状态：仍开放。
- 风险：二进制文件被静默损坏比直接报错更难排查。
- 建议：结合真实 ZIP、图片、Office 文件样本执行端到端校验。

### 8.4 渠道插件化与子进程隔离

- PR：[ #8187](https://github.com/agentscope-ai/QwenPaw/pull/8187)
- 开放时间：2026-10-12。
- 当前状态：仍开放，规模 XXXL。
- 建议：拆分评审主题，包括插件描述格式、启动协议、退出恢复、配置迁移和故障日志。

### 8.5 第三方 Agent 插件化

- PR：[ #8426](https://github.com/agentscope-ai/QwenPaw/pull/8426)
- 当前状态：当日新建，XXXL。
- 建议：在合入前明确与 #8187 的插件运行时边界，避免两套插件机制产生重复抽象。

### 8.6 ReMe 0.4.2.0 集成

- PR：[ #8347](https://github.com/agentscope-ai/QwenPaw/pull/8347)
- 开放时间：2026-10-20。
- 当前状态：仍开放，XXXL。
- 建议：明确版本回滚路径、旧索引迁移、Auto-Dream 与主动交互隔离，以及图片记忆的存储与隐私策略。

### 8.7 TaskTracker 清理与回调超时

- PR：[ #8268](https://github.com/agentscope-ai/QwenPaw/pull/8268)
- 关联 Issue：[ #8173](https://github.com/agentscope-ai/QwenPaw/issues/8173)
- 当前状态：仍开放。
- 建议：优先合并，以避免长期运行时积累僵尸任务。

### 8.8 尚未修复的关键稳定性问题

建议维护者提高以下事项的优先级：

1. [ #8412 审计记录中断后不恢复](https://github.com/agentscope-ai/QwenPaw/issues/8412)
2. [ #8417 上下文压缩请求持续 400](https://github.com/agentscope-ai/QwenPaw/issues/8417)
3. [ #8416 审批弹窗持续重试且无法关闭](https://github.com/agentscope-ai/QwenPaw/issues/8416)
4. [ #8424 legacy MCP 握手无法回退](https://github.com/agentscope-ai/QwenPaw/issues/8424)
5. [ #8425 邮箱历史配置升级后失效](https://github.com/agentscope-ai/QwenPaw/issues/8425)

这些问题均有明确复现条件和用户影响，但当前没有完整对应的修复 PR，若继续积压会直接影响升级成功率、自动化稳定性和用户信任。

---

## 结论

QwenPaw 今日呈现出 **“高活跃开发、快速扩展边界、稳定性问题同步暴露”** 的状态。插件化、语义主题、ReMe 记忆升级和 `/steer` 是最清晰的功能路线信号；Console 的三项已完成修复则改善了日常使用体验。  
当前主要风险不在于缺少需求，而在于 **13 个待合并 PR 中包含多项大型架构改动，同时仍有审计、压缩、MCP 兼容和旧配置迁移等高影响 Bug 未解决**。建议下一阶段优先完成高影响缺陷修复与兼容回归，再逐步合入插件化和记忆系统的大型 PR。

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/NousResearch/hermes-agent">NousResearch/hermes-agent</a></summary>

# Hermes Agent 项目动态日报

**日期：2026-10-26**  
**数据范围：过去 24 小时 GitHub Issues / Pull Requests 更新**  
**项目：** [NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent)

---

## 1. 今日速览

过去 24 小时项目保持高强度开发与问题处理节奏，共更新 **50 条 Issues** 和 **50 条 PRs**，其中 Issue 新开或活跃 **47 条**、关闭 **3 条**；PR 待合并 **37 条**、已合并或关闭 **13 条**。当前没有新版本发布，因此今日变更主要体现为代码、文档和架构提案的快速收敛，而不是正式版本交付。

Issue 讨论最集中在 **实时语音交互统一接口、持久化记忆与压缩、Linux Desktop 透明度、多 Profile Gateway、Webapp 后继修复和安装更新可靠性**。PR 侧则明显围绕浏览器版 Desktop、插件与 Provider 解耦、会话移交、压缩优化、Windows/macOS 更新流程和 Gateway 稳定性推进。

整体健康度评估为 **“高活跃、高风险并存”**：贡献与讨论热度很高，功能扩展迅速，但大量 P1/P2 级稳定性问题集中在 Gateway、Desktop、会话持久化、更新流程和多 Profile 场景，说明项目功能面扩张已经快于部分核心基础设施的收敛能力。37 条待合并 PR 也意味着评审与集成压力较高。

---

## 2. 版本发布

过去 24 小时 **无新版本发布**。

因此暂无正式版本更新说明、破坏性变更或迁移指南。不过多个正在推进的 PR 已显示近期发布重点可能覆盖：

- 浏览器版 Desktop / Webapp 后续修复；
- `/handoff` 后会话重新打开；
- 后台预备式上下文压缩；
- GitHub Copilot 从核心拆分为插件；
- Windows Gateway 生命周期及插件并发修复；
- Privacy & Data 文档更新。

---

## 3. 项目进展

### 3.1 已关闭或完成方向明确的 PR

#### Webhook 合成来源与媒体载荷支持
- **PR：** [#56794 feat(gateway): webhook synthetic source platform + media payload support](https://github.com/NousResearch/hermes-agent/pull/56794)
- **状态：** 已关闭
- **推进内容：** 允许经过认证的 Webhook 模拟已配置的平台来源，使事件进入标准平台适配器链路，并支持受控的内联音频、图片载荷。
- **价值：** 扩展了 API/Webhook 与原生消息平台的互操作性，并复用既有鉴权、会话、线程和响应路由逻辑。
- **提示：** PR 已关闭，但是否以其他 PR 或提交合入，现有摘要不足以确认。

#### API 会话身份提前规范化
- **PR：** [#65102 feat(api): resolve configured session identities early](https://github.com/NousResearch/hermes-agent/pull/65102)
- **状态：** 已关闭
- **推进内容：** 在 Agent 构造前解析 API 会话键别名，将其映射为规范的平台身份。
- **价值：** 使 API 发起的对话能够使用与 Telegram、Discord 等配置目标一致的工具集、上下文和会话命名空间，减少“同一用户被拆成多个会话”的问题。

#### Agent 最终阶段 steer 竞态修复
- **PR：** [#80810 fix(agent): keep final-call steers in the active turn](https://github.com/NousResearch/hermes-agent/pull/80810)
- **状态：** 已关闭
- **推进内容：** 修复 Agent 在最终响应阶段接收用户 steer 后，可能又被作为下一轮独立消息重复处理的问题。
- **价值：** 改善交互式会话中的消息时序，降低重复执行、上下文错位和“用户输入落错轮次”的风险。

#### Linux 进程身份稳定性修复
- **PR：** [#144542 fix(process_identity): use monotonic Linux process births](https://github.com/NousResearch/hermes-agent/pull/144542)
- **状态：** 已关闭
- **推进内容：** 避免 WSL2 时钟重同步或 `/proc/stat` 变化导致进程出生时间漂移，进而误判健康 Worker 已死亡。
- **价值：** 提升 Worker 身份识别、Gateway 会话维护和进程清理的可靠性。

#### JavaScript 自动格式化
- **PR：** [#144812 fmt(js): `npm run fix` auto-fix](https://github.com/NousResearch/hermes-agent/pull/144812)
- **状态：** 已关闭
- **推进内容：** 自动应用 lint 修复和格式化。
- **价值：** 降低前端与 Desktop 代码风格噪音，减少人工维护成本。

### 3.2 今日重点待合并 PR

#### 浏览器版 Desktop 的集中后续修复
- **PR：** [#144544 fix(webapp): follow-ups to #141864 for plain HTTP, browser editing, rebuilds and restarts](https://github.com/NousResearch/hermes-agent/pull/144544)
- **内容：** 面向普通 HTTP、浏览器编辑、重新构建、重启等 Webapp 场景提供集中修复，并为每项变更配套回归测试。
- **判断：** 这是 Webapp 从首次合并进入硬化阶段的关键 PR，可能成为近期版本的重要交付内容。

#### 会话移交后仍可从 Desktop/Webapp 打开
- **PR：** [#144708 fix(gateway): a chat handed off with /handoff keeps opening from Desktop and the Webapp](https://github.com/NousResearch/hermes-agent/pull/144708)
- **对应 Issue：** [#143286](https://github.com/NousResearch/hermes-agent/issues/143286)
- **内容：** 修复 `/handoff` 后会话来源被重绑定，导致 Desktop 或 Webapp 无法重新打开的问题。
- **判断：** 与近期 Webapp 路线直接相关，优先级较高。

#### Webapp Profile 路由隔离
- **PR：** [#144680 fix(webapp): do not route or mark reachable a profile the gateway does not serve](https://github.com/NousResearch/hermes-agent/pull/144680)
- **内容：** 避免把 Gateway 实际未承载的已安装 Profile 暴露为可用路由。
- **关联问题：** [#142849](https://github.com/NousResearch/hermes-agent/issues/142849)
- **判断：** 直接关系多 Profile 隔离与请求超时问题，应与 Webapp 后续修复一起验证。

#### 插件加载并发快照
- **PR：** [#144821 fix(plugins_loader): use atomic dict.copy() for sys.modules snapshot](https://github.com/NousResearch/hermes-agent/pull/144821)
- **内容：** 使用 `sys.modules.copy()` 原子获取模块快照，避免并发插件加载和延迟导入触发 `dictionary changed size during iteration`。
- **判断：** 改动小、故障模式明确，适合快速进入近期版本。

#### Windows Gateway 脱离控制台
- **PR：** [#144819 fix(gateway): re-launch detached when HERMES_GATEWAY_DETACHED=1 but console attached](https://github.com/NousResearch/hermes-agent/pull/144819)
- **内容：** 在 Windows 上检测“要求 detached、实际仍附着控制台”的不一致状态，并重新以 detached 模式启动。
- **判断：** 可降低计划任务/VBS 启动器退出后 Gateway 随控制台终止的概率。

#### 后台预备式压缩
- **PR：** [#144684 feat(compression): opt-in prepared compaction](https://github.com/NousResearch/hermes-agent/pull/144684)
- **内容：** 新增 `compression.prepare_ahead: true` 的显式 opt-in 配置，在接近压缩阈值时后台生成摘要，以减少正式压缩时的轮次阻塞。
- **关联议题：** [#143379](https://github.com/NousResearch/hermes-agent/issues/143379)
- **判断：** 属于高价值 Agent 基础设施改进，但默认关闭，兼容风险较低。

#### GitHub Copilot 核心解耦
- **PR：** [#144788 refactor(providers): GitHub Copilot moves out of core into the github-copilot labs plugin](https://github.com/NousResearch/hermes-agent/pull/144788)
- **内容：** 将 `copilot` 和 `copilot-acp` 从核心迁入 labs 插件，核心只保留通用 Provider 钩子；使用 Copilot 的 Profile 在更新时自动安装插件。
- **迁移注意：** 核心 Provider 清单发生变化，旧 Profile 需要确保插件自动安装或完成显式迁移。
- **判断：** 符合 Provider 插件化方向，但涉及自动安装和兼容性，合并前需重点验证更新流程。

#### Bot Chat 展示 Agent 消息投递状态
- **PR：** [#144792 feat(bots): Bot Chat shows a "Waiting on teammates" card](https://github.com/NousResearch/hermes-agent/pull/144792)
- **内容：** 在 Bot Chat 中展示 `message_agent` 投递状态，包括排队、领取、执行中、等待用户、失败及结果未知。
- **判断：** 与跨会话消息和多 Agent 协作路线相互呼应，能显著改善可观察性。

### 3.3 整体推进程度

项目今日的推进可以概括为三件事：

1. **Webapp 从“可用”进入“系统化修复”阶段**：围绕 Profile 路由、会话移交、HTTP、编辑、构建和重启连续补齐。
2. **核心边界开始模块化**：Provider 走向插件、记忆与压缩开始抽象统一，插件加载并发问题也有专项修复。
3. **可靠性债务仍较集中**：更新重启、Windows/macOS、Desktop 透明度、多 Profile 和会话恢复问题仍大量存在。

因此，项目在功能推进上明显向前，但正式发布质量仍取决于这些高风险修复能否及时合并和验证。

---

## 4. 社区热点

### 4.1 实时语音 Provider 统一接口
- **Issue：** [#77111 RFC: RealtimeVoiceProvider ABC](https://github.com/NousResearch/hermes-agent/issues/77111)
- **评论：** 28
- **点赞：** 3
- **热度：** 今日展示的 Issue 中评论最多。
- **背景：** 当前已有四个相互竞争的 duplex voice PR，Issue 发起者主张停止逐个合并竞争实现，转而先设计 ABC、编排层和首个内置 Provider。
- **用户诉求：** 降低语音能力集成碎片化，明确统一接口、生命周期、流式协议、取消机制及 Provider 编排规则。
- **健康度信号：** 社区能够识别“同类 PR 过多”的架构问题并主动提出统一方案，是积极的治理信号。

### 4.2 持久化文档链、治理与压缩
- **Issue：** [#143379 RFC: THE DOC-CHAIN SUBSTRATE'S NETWORK](https://github.com/NousResearch/hermes-agent/issues/143379)
- **评论：** 21
- **背景：** 聚焦会话压缩后仍可追溯地保留记录，以及 Agent 能够重新读取历史资料，而不是要求用户重复说明。
- **用户诉求：** 统一持久记录、来源追踪、读取权限、压缩策略和恢复机制。
- **关联 PR：** [#144684](https://github.com/NousResearch/hermes-agent/pull/144684)
- **健康度信号：** 与近期 memory tool 参数丢失、压缩后上下文恢复等问题相互印证，属于近期架构重点。

### 4.3 Linux Desktop 默认透明度导致近乎不可见
- **Issue：** [#143426 Linux desktop launches with 6% window opacity](https://github.com/NousResearch/hermes-agent/issues/143426)
- **评论：** 18
- **点赞：** 12
- **热度：** 今日展示 Issue 中点赞最多。
- **同类反馈：** [#143856 Desktop window is permanently see-through on Linux](https://github.com/NousResearch/hermes-agent/issues/143856)，评论 4、点赞 2。
- **用户诉求：** Linux 启动时不要自动应用极端透明度；若系统不支持透明度，Settings 应明确禁用该选项，而不是隐藏。
- **健康度信号：** 高点赞说明问题直接影响可用性，但已有重复 Issue，说明问题归因和统一处理仍不足。

### 4.4 多 Profile 共享 Gateway 的窗口级请求超时
- **Issue：** [#142849 window-owned requests time out on a primary-shared profile](https://github.com/NousResearch/hermes-agent/issues/142849)
- **评论：** 8
- **背景：** 非主 Profile 通过 `sharedPrimary` 复用主 Gateway 时，preview、terminal、theme 等窗口拥有型请求超时，而 default Profile 正常。
- **用户诉求：** 统一不同 Profile 下的请求路由、会话权威归属和超时处理。
- **已有修复：** [#144680](https://github.com/NousResearch/hermes-agent/pull/144680) 正在处理错误 Profile 路由问题，但完整超时链路的修复状态尚不明确。

### 4.5 Kanban 编排可靠性总览
- **Issue：** [#35986 Umbrella: Kanban orchestration gaps](https://github.com/NousResearch/hermes-agent/issues/35986)
- **评论：** 8
- **背景：** 汇总 stale detection、静默恢复、孤儿任务清理、子 Agent 监督等长期缺口。
- **用户诉求：** 将 Kanban 从可运行的实验功能提升为可检查、可恢复、可审计的多 Agent 编排系统。
- **关联故障：** [#143422 Windows Kanban managed workers deadlock importing numpy](https://github.com/NousResearch/hermes-agent/issues/143422)。
- **健康度信号：** 长期问题已被结构化归类，但 Windows 全量超时说明可靠性债务仍在扩大。

### 4.6 跨会话本地消息
- **Issue：** [#81885 Local cross-session messaging](https://github.com/NousResearch/hermes-agent/issues/81885)
- **评论：** 6
- **背景：** 多个交互式 Session 目前彼此隔离，研究结论、破坏性变更和 API Schema 只能手工复制。
- **用户诉求：** 提供本地 Session 发现、Peer Inbox 和 Agent 间消息传递。
- **关联 PR：** [#144792](https://github.com/NousResearch/hermes-agent/pull/144792)
- **健康度信号：** 已有可观察性方向进入开发，说明该需求正在从 RFC 向具体交互形态收敛。

### 4.7 文档隐私声明修正
- **PR：** [#144820 docs: Privacy and Data page; FAQ no longer claims Hermes has no telemetry](https://github.com/NousResearch/hermes-agent/pull/144820)
- **内容：** 新增 Privacy and Data 页面，并修改 FAQ 中“完全不收集 telemetry、使用数据或分析数据”的表述，列出默认及可选出站路径。
- **价值：** 提升数据治理透明度，属于可信度和合规层面的正向进展。

---

## 5. Bug 与稳定性

> 当前数据未展示带 P0/P1 标签的明确条目，以下按影响范围、阻塞程度和数据可见性排序。

### P2 / 高优先级

#### Linux Desktop 启动后几乎透明
- **Issue：** [#143426](https://github.com/NousResearch/hermes-agent/issues/143426)
- **重复报告：** [#143856](https://github.com/NousResearch/hermes-agent/issues/143856)
- **影响：** Linux 用户可能无法正常阅读和操作界面。
- **修复 PR：** 数据中未见明确对应 fix PR。
- **建议：** 作为 Desktop Linux 发布阻断项处理，补充 Wayland/XWayland 与 GNOME 50 回归测试。

#### 多 Profile 共享 Gateway 请求超时
- **Issue：** [#142849](https://github.com/NousResearch/hermes-agent/issues/142849)
- **影响：** 共享主 Gateway 的 Profile 中，Preview、终端读取、主题应用等功能不可用。
- **修复 PR：** [#144680](https://github.com/NousResearch/hermes-agent/pull/144680) 部分覆盖 Profile 路由，但需确认是否覆盖全部超时症状。

#### `pre_tool_call` 超时导致后续所有工具调用长期跳过
- **Issue：** [#138644](https://github.com/NousResearch/hermes-agent/issues/138644)
- **影响：** 单次 Hook 超时可能触发 fail-closed，且 abandoned-worker 上限不排空，工具调用数小时内持续被跳过。
- **修复 PR：** 未见明确对应 PR。
- **建议：** 对超时、上限计数器和恢复路径进行状态机级修复，避免单次故障形成长期熔断。

#### Memory 工具参数丢失
- **单次调用：** [#101695 memory tool: top-level params dropped in tool-call transport](https://github.com/NousResearch/hermes-agent/issues/101695)
- **批量调用：** [#139436 memory tool batch operations silently drop nested fields](https://github.com/NousResearch/hermes-agent/issues/139436)
- **影响：** 记忆写入、替换、合并或 consolidation 可能静默丢字段，影响 Agent 长期记忆正确性。
- **修复 PR：** 未见明确对应 PR。
- **风险：** 两个问题分别涉及顶层参数和嵌套字段，可能是同一序列化/传输链路的不同表现，建议合并调查。

#### `hermes update` 未被生命周期守卫覆盖
- **Issue：** [#144547](https://github.com/NousResearch/hermes-agent/issues/144547)
- **影响：** `hermes update` 会排空、SIGKILL 并替换运行中的 Gateway 代码，但生命周期守卫只限制 restart/stop/uninstall。
- **修复 PR：** 未见明确对应 PR。
- **安全影响：** 可能允许代理或受监督任务绕过预期保护。

#### Webapp 浏览器会话认证与暴露面
- **Issue：** [#144648 Tracking: Webapp post-merge follow-ups](https://github.com/NousResearch/hermes-agent/issues/144648)
- **影响：** 浏览器与 CLI、Native Desktop、消息平台共享 Gateway，涉及认证、会话、文件、更新和 Profile 边界。
- **修复 PR：** [#144544](https://github.com/NousResearch/hermes-agent/pull/144544) 已覆盖多项后续问题，但跟踪 Issue 仍处开放状态。

#### macOS/Windows 更新与重启链路不稳定
- **Issue 列表：**
  - [#144754 Update-restart obligation undischargeable on launchd hosts](https://github.com/NousResearch/hermes-agent/issues/144754)
  - [#140831 Windows profile paths with spaces break gateway identity](https://github.com/NousResearch/hermes-agent/issues/140831)
  - [#136159 Corrupted dashboard respawn argv](https://github.com/NousResearch/hermes-agent/issues/136159)
  - [#138903 macOS update corrupts dashboard respawn argv](https://github.com/NousResearch/hermes-agent/issues/138903)
  - [#144691 Windows Desktop installer dependency resolution failure](https://github.com/NousResearch/hermes-agent/issues/144691)
- **修复状态：** [#144816](https://github.com/NousResearch/hermes-agent/pull/144816) 可改善进程身份判断；其余未显示完整对应 PR。
- **影响：** 升级失败、Gateway 身份识别失败、无法履行重启义务或 Dashboard 无法恢复。
- **建议：** 将更新流程视为一个端到端发布事务，统一测试 Windows/macOS、含空格路径、LaunchAgent、计划任务和 Dashboard 重启。

#### Gateway stop 崩溃
- **Issue：** [#144753 gateway stop --yes crashes with TypeError](https://github.com/NousResearch/hermes-agent/issues/144753)
- **影响：** 有活动 Managed Run 时，停止命令抛出 `ManagedWorker.interrupt()` 参数不匹配异常。
- **修复 PR：** 未见明确对应 PR。
- **优先级：** 建议尽快修复，因为直接影响运维停止流程。

#### Desktop 切换 Gateway 删除另一连接的排队内容
- **Issue：** [#144702 Desktop switching gateway connection silently deletes queued prompts](https://github.com/NousResearch/hermes-agent/issues/144702)
- **影响：** 可能静默丢失用户排队提示、草稿或 Pin。
- **修复 PR：** 未见明确对应 PR。
- **数据完整性风险：** 高，因为问题表现是静默删除而非显式报错。

#### Desktop URL 吞入后续 CJK 文本
- **Issue：** [#144736 Bare URL followed by full-width CJK punctuation swallows punctuation](https://github.com/NousResearch/hermes-agent/issues/144736)
- **影响：** 链接指向错误地址并产生 404。
- **修复 PR：** 未见明确对应 PR。

#### Bot handoff 后无法重新打开
- **Issue：** [#143286 Desktop: a Bot Chat handed off with `/handoff telegram` can never be opened again](https://github.com/NousResearch/hermes-agent/issues/143286)
- **修复 PR：** [#144708](https://github.com/NousResearch/hermes-agent/pull/144708)
- **状态：** 已有明确修复 PR 待合并。

#### Desktop 本地 Session 心跳不触发
- **Issue：** [#144051 Heartbeats never fire in Desktop local sessions](https://github.com/NousResearch/hermes-agent/issues/144051)
- **影响：** 依赖心跳的会话状态、目标推进或保活逻辑可能失效。
- **修复 PR：** 未见明确对应 PR。

### P3 / 中等优先级

#### DingTalk 入站图片导致消息处理崩溃
- **Issue：** [#141932 DingTalk inbound images crash the message handler](https://github.com/NousResearch/hermes-agent/issues/141932)
- **影响：** 媒体载荷无法抵达 Agent，消息处理器触发 `RuntimeStoreError: invalid_params`。
- **修复 PR：** 未见明确对应 PR。

#### Windows Kanban Worker 导入 NumPy 时死锁
- **Issue：** [#143422 Windows Kanban managed workers deadlock importing numpy](https://github.com/NousResearch/hermes-agent/issues/143422)
- **影响：** Windows 上所有 Kanban 卡片超时，无法调用模型。
- **修复 PR：** 未见明确对应 PR。
- **建议：** 优先做最小复现，检查 stdin 控制读取与重导入依赖的锁顺序。

#### Cron 外部 Worker 偶发崩溃
- **Issue：** [#132732 Cron external worker intermittently crashes: double-import RuntimeWarning](https://github.com/NousResearch/hermes-agent/issues/132732)
- **影响：** 可能已经产生副作用但未写入持久终态，结果不可确定。
- **修复 PR：** 未见明确对应 PR。

#### Plugin 在 Python 3.14 下依赖解析失败
- **Issue：** [#143937 Plugin dependency resolution fails without Android wheels](https://github.com/NousResearch/hermes-agent/issues/143937)
- **影响：** Python 3.14 环境无法安装部分插件。
- **修复 PR：** 未见明确对应 PR。

#### SSH 主机不可达时文件路由返回 500
- **Issue：** [#144669 SSH workspace file routes return 500 when host is down](https://github.com/NousResearch/hermes-agent/issues/144669)
- **状态：** 已关闭。
- **影响：** 原本已修复或关闭，说明该场景已有收敛。

#### Relay shared-metrics smoke 恢复
- **PR：** [#144818 Relay shared-metrics smoke passes on main again](https://github.com/NousResearch/hermes-agent/pull/144818)
- **内容：** 恢复 smoke 测试并用 CI 固定 shared-metrics 合约预期。
- **价值：** 防止测试预期与实际接口静默漂移。

---

## 6. 功能请求与路线图信号

### 6.1 实时语音接口统一：较高概率进入架构路线
- **Issue：** [#77111](https://github.com/NousResearch/hermes-agent/issues/77111)
- **信号：** 四个竞争 PR 已迫使社区提出 ABC + Orchestrator 的统一方案。
- **下一阶段可能内容：**
  - `RealtimeVoiceProvider` 抽象；
  - 首个内置实现迁移为 Provider；
  - 统一 duplex 流式协议；
  - 中断、打断、取消和错误语义；
  - Voice 能力发现与插件注册。
- **判断：** 短期未必直接进入正式版本，但很可能先形成 RFC 和接口 PR。

### 6.2 文档链与可追溯压缩：较可能成为核心方向
- **Issue：** [#143379](https://github.com/NousResearch/hermes-agent/issues/143379)
- **PR：** [#144684](https://github.com/NousResearch/hermes-agent/pull/144684)
- **信号：** 预备式压缩已经是可执行实现，长期记忆和压缩治理又获得高讨论度。
- **判断：** “后台预备压缩”可能较早落地；完整 Doc-chain substrate 更可能作为中短期架构项目分阶段推进。

### 6.3 跨 Session / 多 Agent 通信：已有落地信号
- **Issue：** [#81885](https://github.com/NousResearch/hermes-agent/issues/81885)
- **PR：** [#144792](https://github.com/NousResearch/hermes-agent/pull/144792)
- **判断：** Bot Chat 的“Waiting on teammates”卡片表明消息投递状态和可视化已进入近期开发。完整 discovery + peer inbox 仍可能继续拆分交付。

### 6.4 Webapp 与多 Profile 支持：近期版本高概率纳入
- **PR：**
  - [#144544](https://github.com/NousResearch/hermes-agent/pull/144544)
  - [#144680](https://github.com/NousResearch/hermes-agent/pull/144680)
  - [#144708](https://github.com/NousResearch/hermes-agent/pull/144708)
- **跟踪 Issue：** [#144648](https://github.com/NousResearch/hermes-agent/issues/144648)
- **判断：** 已有多条聚焦修复 PR 和回归测试，最可能进入下一轮 Desktop/Gateway 版本。

### 6.5 API 多用户身份：需求明确，但仍缺少安全方案
- **Issue：** [#80300 API server — support X-Hermes-User header](https://github.com/NousResearch/hermes-agent/issues/80300)
- **诉求：** 当前共享 Bearer Token 无法表达调用者身份，所有请求可能归属同一用户。
- **判断：** 单一 Header 只能作为身份提示，不能独立承担安全边界；预计需要与 API Key、租户映射或签名身份方案结合，未必近期直接实现。

### 6.6 插件目录准入流程：运营需求明确
- **Issue：** [#143053 Plugin catalog admission guidance](https://github.com/NousResearch/hermes-agent/issues/143053)
- **PR：** [#144817 plugin-catalog: huddo 0.10.0](https://github.com/NousResearch/hermes-agent/pull/144817)
- **判断：** 目录已能持续接纳插件版本，但完整工作流/源码包的审核与发布规则仍需文档化。该 PR 更像日常目录维护，不代表新的核心能力路线。

### 6.7 Provider 插件化：路线方向明确
- **PR：** [#144788 GitHub Copilot moves out of core into labs plugin](https://github.com/NousResearch/hermes-agent/pull/144788)
- **判断：** 若自动安装和旧 Profile 兼容策略验证通过，可能在下一版本进入；其意义不止 Copilot，而是为第三方 Provider 建立可复用模板。

### 6.8 macOS Messages 短信验证码
- **PR：** [#125704 feat(vault): opt-in allowlisted SMS one-time codes from macOS Messages](https://github.com/NousResearch/hermes-agent/pull/125704)
- **判断：** 对浏览器自动化、无人值守、Cron 和 Kanban 场景价值较高；但涉及隐私、权限和一次性验证码安全，预计需要更严格评审。

---

## 7. 用户反馈摘要

### 7.1 高频真实痛点

1. **会话状态和上下文不可靠**
   - Memory 工具会丢参数；
   - 会话压缩后信息恢复困难；
   - Bot handoff 后无法重新打开；
   - Desktop 本地 Session 心跳不运行。
   - 用户核心诉求不是单一命令修复，而是“上下文能保存、能找回、能验证”。

2. **多 Profile / 多 Gateway 行为不一致**
   - default Profile 正常，但 `sharedPrimary` Profile 的窗口请求超时；
   - 切换 Gateway 连接会删除另一连接的排队消息；
   - Webapp 可能路由到 Gateway 实际未承载的 Profile。
   - 这说明 Profile 路由模型、共享 Gateway 语义和 Desktop UI 状态仍缺少统一抽象。

3. **升级流程不可靠且平台差异明显**
   - macOS 出现 Dashboard respawn 参数损坏与重启义务无法履行；
   - Windows 存在含空格路径、Gateway 身份识别、依赖解析和计划任务问题。
   - 用户反馈显示“能运行主功能”并不等于“升级后仍可安全运行”。

4. **Linux Desktop 默认外观不可用**
   - 多个用户报告窗口极端透明；
   - Settings 隐藏控制项，用户既无法理解现状，也无法自救。
   - 这是高可见度、低容错、影响所有 Linux Desktop 用户的回归。

5. **多 Agent 编排缺乏可观察性与恢复能力**
   - Kanban 存在 stale、孤儿任务、静默恢复和子 Agent 监督缺口；
   - Windows Kanban 任务全部因死锁超时。
   - 用户希望系统不仅“能调度”，还要能说明任务在哪里、为什么停、失败后如何恢复。

### 7.2 满意与积极信号

- Linux 透明度问题获得 **12 个点赞、18 条评论**，说明用户愿意快速反馈和验证，Desktop 社区关注度较高。
- [#77111](https://github.com/NousResearch/hermes-agent/issues/77111) 获得 28 条评论，表明社区愿意参与 Provider 架构治理，而不是仅提交重复实现。
- Webapp 已有集中 follow-up PR，并强调每项修复配套回归测试，显示项目正从功能展示转向工程化硬化。
- [#144684](https://github.com/NousResearch/hermes-agent/pull/144684) 的预备式压缩采用默认关闭的 opt-in 方式，显示出对兼容性的重视。
- [#144820](https://github.com/NousResearch/hermes-agent/pull/144820) 主动纠正“无 telemetry”声明并补充 Privacy and Data 文档，是值得肯定的数据透明度改进。

---

## 8. 待处理积压

### 8.1 长期高热度、仍未关闭的架构 Issue

#### 实时语音 Provider RFC
- **Issue：** [#77111](https://github.com/NousResearch/hermes-agent/issues/77111)
- **积压特征：** 创建于 2026-08-02，已有 28 条评论，涉及至少四个竞争实现。
- **风险：** 等待时间越长，越可能继续产生重复 PR 和接口分叉。
- **建议：** 尽快确定接口决策、冻结范围并指定唯一整合负责人。

#### Kanban 编排可靠性总览
- **Issue：** [#35986](https://github.com/NousResearch/hermes-agent/issues/35986)
- **积压特征：** 创建于 2026-05-31，仍聚合多个独立故障域。
- **风险：** Umbrella Issue 若不拆分，容易长期只讨论不关闭。
- **建议：** 按 stale detection、恢复、孤儿清理、子 Agent 监督拆成可验收子任务。

#### 跨会话消息
- **Issue：** [#81885](https://github.com/NousResearch/hermes-agent/issues/81885)
- **积压特征：** 创建于 2026-08-08，已有相关 UI PR，但完整 discovery/inbox 尚未明确。
- **建议：** 先定义最小协议、身份边界和本地安全模型，再决定发现机制。

#### API 多用户身份
- **Issue：** [#80300](https://github.com/NousResearch/hermes-agent/issues/80300)
- **积压特征：** 创建于 2026-08-06，仍无明确实现 PR。
- **风险：** 多租户共享 API Key 的安全边界尚未解决。
- **建议：** 明确 Header 是不可信声明还是认证主体，并设计签名/Key 映射方案。

#### Doc-chain substrate
- **Issue：** [#143379](https://github.com/NousResearch/hermes-agent/issues/143379)
- **积压特征：** 虽为新 Issue，但评论密集，范围已覆盖读取、治理、压缩和 provenance。
- **风险：** 范围较大，若缺少分阶段验收容易演变为长期 RFC。
- **建议：** 先交付 prepared compaction 和可追溯记录的最小闭环。

### 8.2 长期未响应或缺少明确修复 PR 的问题

- [#138644 `pre_tool_call` 单次超时导致长期 fail-closed](https://github.com/NousResearch/hermes-agent/issues/138644)
- [#101695 Memory 工具顶层参数丢失](https://github.com/NousResearch/hermes-agent/issues/101695)
- [#139436 Memory 批量操作嵌套字段丢失](https://github.com/NousResearch/hermes-agent/issues/139436)
- [#132732 Cron 外部 Worker 偶发崩溃](https://github.com/NousResearch/hermes-agent/issues/132732)
- [#136159 macOS 更新后 Dashboard respawn 参数损坏](https://github.com/NousResearch/hermes-agent/issues/136159)
- [#138903 macOS 更新错误归因重启义务](https://github.com/NousResearch/hermes-agent/issues/138903)
- [#144051 Desktop 本地 Session 心跳不执行](https://github.com/NousResearch/hermes-agent/issues/144051)
- [#144669](https://github.com/NousResearch/hermes-agent/issues/144669) 已关闭，无需继续积压，但建议检查修复是否覆盖首次连接失败及后续重连。

### 8.3 PR 队列积压

当前共有 **37 条待合并 PR**。需要维护者重点关注以下可能相互重叠或具有顺序依赖的 PR：

- [#144544](https://github.com/NousResearch/hermes-agent/pull/144544)
- [#144680](https://github.com/NousResearch/hermes-agent/pull/144680)
- [#144708](https://github.com/NousResearch/hermes-agent/pull/144708)
- [#144648 对应跟踪 Issue](https://github.com/NousResearch/hermes-agent/issues/144648)

这些 PR 均涉及 Webapp、会话、Profile 和 Gateway 边界，若分别合并但缺少统一验收矩阵，容易出现“修一个问题、破坏另一个入口”的情况。

---

## 今日结论

Hermes Agent 今日保持 **极高开发活跃度**，但项目健康度呈现明显的“两极化”：Webapp、Provider 解耦、压缩和多 Agent 可观察性快速推进；与此同时，Gateway、多 Profile、Desktop、更新重启和持久化记忆仍有多个 P2 级可靠性缺口。

**最需要维护者立即关注的三个方向：**

1. **合并并验证 Webapp/Profile/会话移交修复链**，避免浏览器端、多 Profile 和 handoff 场景继续产生状态分裂；
2. **为 Memory、Heartbeat、pre_tool_call 和更新流程建立端到端回归测试**，解决“静默丢数据/静默跳过工具/静默删除排队内容”问题；
3. **收敛实时语音接口与 Doc-chain 架构**，尽早给出唯一接口和分阶段路线，避免更多竞争实现与长期 RFC。

在没有新版本发布的情况下，下一版本的实际质量将主要取决于上述高风险修复是否能够在发布前完成整合与跨平台验证。

</details>

<details>
<summary><strong>OpenHuman</strong> — <a href="https://github.com/tinyhumansai/openhuman">tinyhumansai/openhuman</a></summary>

# OpenHuman 项目动态日报

**日期：2026-10-26**  
**统计范围：过去 24 小时**  
**数据源：GitHub Issues / Pull Requests**

---

## 1. 今日速览

- 过去 24 小时共有 **4 条 Issue 更新**、**7 条 PR 更新**，整体处于中高活跃状态，但所有 Issue 仍为开放状态，尚无新版本发布。
- PR 侧有 **5 条待合并、2 条已关闭**；已关闭工作主要涉及消息附件文本解析和测试稳定性修复，功能开发则集中在 TinyChannels v2 集成、搜索提供商与云端模型请求配置。
- 今日最重要的问题集中在 **DeepSeek 思考模式兼容性** 与 **Workflow Copilot 审批链路失效**，两项均为 P1，可能直接影响长任务执行和用户对自动化操作的安全预期。
- 项目整体呈现“**基础设施与宿主集成持续推进、关键运行时问题仍待收敛**”的状态；短期健康度评估为 **中等**，核心风险不在开发活跃度，而在两个 P1 问题尚未出现明确修复 PR。

---

## 3. 项目进展

> 今日无新版本发布，因此不单列版本发布章节。

### 今日关闭的重要 PR

#### 1. 保留用户消息中的上传文件信息

- **PR：** [#8403 Preserve uploaded files across the user message text round trip](https://github.com/tinyhumansai/openhuman/pull/8403)
- **状态：** 已关闭
- **作者：** @senamakel
- **推进内容：**
  - 针对用户消息在会话运行时中经历“文本化 → 文本增强 → 文本反解析”的往返流程，检查附件标记是否得到完整保留。
  - 该 PR 关注 `user_text_with_markers` 与 `user_message_from_text` 之间的转换一致性，避免上传文件信息在文本往返过程中丢失。
- **影响评估：**
  - 有助于提升多模态消息、附件与上下文注入链路的可靠性。
  - 但 PR 已关闭，当前无法仅据此确认修复已经进入主干，需要关注后续替代 PR 或提交。

#### 2. 修复失败的 Product Nextest 测试

- **PR：** [#8399 test: repair failing product Nextest cases](https://github.com/tinyhumansai/openhuman/pull/8399)
- **状态：** 已关闭
- **作者：** @senamakel
- **推进内容：**
  - 将 Rust 测试线程栈大小提升到与 20 MiB Agent Worker 栈一致，降低深层编排测试中的栈溢出风险。
  - 调整后台子智能体取消测试，使取消动作发生在 Worker 确实阻塞于模型调用期间，提升测试对真实竞态的覆盖。
  - 摘要还提到更新 Tiny 相关测试内容。
- **影响评估：**
  - 直接改善 CI 与本地测试稳定性，减少深嵌套 Agent 编排中的栈溢出中止。
  - 对运行时稳定性属于正向信号，但“修复测试”不等同于对应运行时缺陷已经彻底解决。

### 仍在推进的重要 PR

#### 1. TinyChannels v2 宿主集成

- **PR：** [#8397 feat: epic 7964 — TinyChannels v2 host integration](https://github.com/tinyhumansai/openhuman/pull/8397)
- **状态：** 开放
- **优先级：** P3
- **关联：** 关闭 #7964、#7970
- **推进内容：**
  - 将 `web_chat` 建设为轻量宿主模块，在 OpenHuman 策略和端口实现之上复用 TinyAgents Turn Runner 与 TinyChannels Web Adapter。
  - 包含逐文件所有权审计和交接文档，强调宿主与通道层之间的职责边界。
- **影响评估：**
  - 属于较重要的架构集成，可降低 Web Chat 对宿主特定实现的耦合。
  - 仍待合并，当前应重点关注接口一致性、回归覆盖与最终验收记录。

#### 2. 解析附件时保留用户文本空白

- **PR：** [#8329 fix(chat): preserve user text whitespace when parsing attachments](https://github.com/tinyhumansai/openhuman/pull/8329)
- **状态：** 开放
- **优先级：** P3
- **推进内容：**
  - 在解析附件标记时保留用户消息中的内部空格，包括 Python 缩进、字符串内容和 Markdown 硬换行。
  - 将分隔符清理限定在已移除附件标记的位置，避免对整段文本进行破坏性折叠。
  - 增加解析器和公开消息适配器的回归测试。
- **影响评估：**
  - 对代码生成、格式化文本、Markdown 和结构化内容传递尤其重要。
  - 与 #8403 同属消息文本/附件解析链路，表明该区域近期存在多轮修正需求。

#### 3. Agent Registry 更新后刷新进程内注册表

- **PR：** [#8065 fix(agent): refresh process agent registry after agent_registry_update](https://github.com/tinyhumansai/openhuman/pull/8065)
- **状态：** 开放
- **优先级：** P3
- **推进内容：**
  - 在执行 `agent_registry_update` 后刷新进程内 Agent Registry。
  - 确保子智能体白名单覆盖项能够传递到 `spawn_async_subagent` 枚举，无需重启即可生效。
  - 启动阶段合并注册表条目，以覆盖重启场景。
- **影响评估：**
  - 可降低动态权限或 Agent 配置变更不生效的问题。
  - 由于 PR 自 10 月 17 日创建、持续更新，属于需要维护者重点收敛的长期积压项。

#### 4. 增加 Keenable 搜索设置

- **PR：** [#7279 feat(search): add Keenable to search settings (works without a key)](https://github.com/tinyhumansai/openhuman/pull/7279)
- **状态：** 开放
- **优先级：** P3
- **推进内容：**
  - 在 “Connections → Search” 中加入 Keenable，覆盖 Search 与 Contents 角色。
  - 支持无 API Key 使用；用户启用后由 TinySearch 路由到 Keenable。
  - 对应 TinySearch 侧变更已发布于 TinySearch v0.4.0，当前固定版本为 v0.5.3。
- **影响评估：**
  - 扩展搜索生态和用户可选提供商，属于明确的产品能力扩展。
  - 由于 PR 自 10 月 10 日起仍未合并，存在版本固定、接口兼容与维护资源方面的积压风险。

#### 5. 云提供商自定义 Header、User-Agent 与会话信息

- **PR：** [#8059 fix(providers): send custom headers, a product User-Agent and the OpenCode Go session to cloud providers](https://github.com/tinyhumansai/openhuman/pull/8059)
- **状态：** 开放
- **优先级：** 未标注
- **推进内容：**
  - 允许在 `[[cloud_providers]]` 配置中声明可选 `headers`。
  - 自定义 Header 将应用于该提供商的聊天补全、模型限制查询及 `list_models`。
  - OpenAI 兼容云端路由统一发送 `User-Agent: openhuman/<core version>`。
  - Codex OAuth 保留自身行为，并支持 OpenCode Go 会话信息。
- **影响评估：**
  - 提升企业代理、网关、模型路由和可观测性集成的兼容性。
  - 需确认敏感 Header 的配置持久化与日志脱敏，避免凭据意外泄漏。

---

## 4. 社区热点

> 今日所有更新条目均无点赞数，因此无法按 reactions 排名；以下依据优先级、评论数和影响范围判断热点。

### 1. DeepSeek 思考模式在工具调用任务中返回 400

- **Issue：** [#8398 DeepSeek thinking mode: assistant tool-call turns replayed without reasoning_content cause provider 400 mid-task](https://github.com/tinyhumansai/openhuman/issues/8398)
- **优先级：** P1
- **评论数：** 1
- **核心诉求：**
  - DeepSeek 思考模式下，历史 Assistant 工具调用消息在重放时未携带 `reasoning_content`。
  - Provider 因思考模式上下文不完整返回 HTTP 400，导致任务执行到中途失败。
- **用户价值：**
  - 直接影响使用 DeepSeek 的长任务、工具调用和上下文连续性。
  - 这不是单纯性能问题，而是会使 Agent 流程不可可靠执行。
- **维护判断：**
  - 应作为近期高优先级稳定性修复处理。
  - 截至日报数据，**未发现明确对应的开放或关闭 fix PR**。

### 2. Workflow Copilot 拒绝执行 `run_flow` 且不展示审批请求

- **Issue：** [#8401 Workflow Copilot denies run_flow without showing an approval request](https://github.com/tinyhumansai/openhuman/issues/8401)
- **优先级：** P1
- **评论数：** 1
- **环境：** OpenHuman v0.64.15、macOS
- **核心诉求：**
  - 用户已明确确认执行，但 Workflow Copilot 仍拒绝调用 `run_flow`。
  - 系统没有展示审批卡片，导致用户无法完成授权。
- **用户价值：**
  - 同时破坏工作流可用性和审批可解释性。
  - 对自动化 Agent 而言，“拒绝但不展示原因”会显著降低信任。
- **维护判断：**
  - 需要检查工具调用审批状态机、拒绝事件与 UI 提示是否脱节。
  - 当前**未见明确修复 PR**。

### 3. 个性化上下文仪表盘

- **Issue：** [#8402 Suggested Feature: Personalized Context Dashboard](https://github.com/tinyhumansai/openhuman/issues/8402)
- **优先级：** P3
- **评论数：** 1
- **核心诉求：**
  - 提供每日简报面板，自动汇总邮件、日历、GitHub 活动和笔记。
  - 复用 Memory Tree 与 TokenJuice 压缩，控制上下文体积。
  - 提供“未读邮件 Top 3”“最近 Star 的仓库”等自适应组件。
- **用户价值：**
  - 体现用户希望 OpenHuman 从“对话式助手”进一步发展为主动式个人 AI 工作台。
  - 需求与现有记忆、上下文压缩能力有较强复用关系，实施成本可能相对可控。
- **维护判断：**
  - 适合作为近期产品路线图候选，但当前没有对应 PR。

---

## 5. Bug 与稳定性

### P1 — 严重

#### 1. DeepSeek 思考模式重放工具调用时丢失推理上下文

- **Issue：** [#8398](https://github.com/tinyhumansai/openhuman/issues/8398)
- **影响：**
  - DeepSeek 思考模式下，Provider 返回 HTTP 400。
  - 任务可能在工具调用中途终止，影响长任务稳定性。
- **已有 Fix PR：** **未发现**
- **建议关注：**
  - 是否保留并重放 `reasoning_content`。
  - 不同 Provider 对思考字段、工具调用消息顺序及签名的兼容策略。

#### 2. Workflow Copilot 无审批卡片却拒绝 `run_flow`

- **Issue：** [#8401](https://github.com/tinyhumansai/openhuman/issues/8401)
- **影响：**
  - 工作流无法执行。
  - 用户无法看到审批请求或理解拒绝原因。
- **已有 Fix PR：** **未发现**
- **建议关注：**
  - 审批请求创建、持久化、事件广播及 UI 渲染链路。
  - 用户确认与工具调用之间是否存在状态竞争或会话上下文丢失。

### P2 — 较高

#### 3. Agent Skill 只能复制到工作区，缺少共享只读来源

- **Issue：** [#8400 Load an agent's skills from a shared read-only source, without copying them into its workspace](https://github.com/tinyhumansai/openhuman/issues/8400)
- **影响：**
  - 嵌入式宿主当前只能通过 `AgentSpec::skills_dir` 提供 Skill。
  - Skill Bundle 会被复制到 `<workspace>/agents/<id>/skills/`，而不是链接或直接引用共享只读来源。
  - 可能带来重复占用、更新延迟、版本漂移和权限边界问题。
- **已有 Fix PR：** **未发现**
- **说明：**
  - 该条目更接近架构能力限制，而非即时线上故障，但会影响嵌入式多 Agent 场景的可维护性与安全边界。

### P3 — 一般

#### 4. 消息附件与文本往返问题

- **Issue/PR：**
  - [#8403](https://github.com/tinyhumansai/openhuman/pull/8403)
  - [#8329](https://github.com/tinyhumansai/openhuman/pull/8329)
- **影响：**
  - 上传文件信息可能在消息文本往返后丢失。
  - 附件标记清理可能误删用户文本中的空格、Python 缩进、字符串内容和 Markdown 硬换行。
- **已有 Fix PR：**
  - #8403 已关闭，#8329 仍开放。
  - 当前不能确认相关修复已经完整进入主干。

#### 5. 深层 Agent 编排测试可能栈溢出

- **PR：** [#8399](https://github.com/tinyhumansai/openhuman/pull/8399)
- **影响：**
  - 测试线程栈与 20 MiB Agent Worker 栈不匹配，可能触发栈溢出中止。
  - 背景子 Agent 取消测试存在时序不稳定问题。
- **已有 Fix PR：** [#8399](https://github.com/tinyhumansai/openhuman/pull/8399) 已关闭。
- **状态判断：**
  - 已有针对性修复，但需以主干 CI 结果确认是否彻底解决。

#### 6. Agent Registry 更新后进程内状态未刷新

- **PR：** [#8065](https://github.com/tinyhumansai/openhuman/pull/8065)
- **影响：**
  - 子 Agent 白名单覆盖项可能无法立即生效，需要重启。
- **已有 Fix PR：** [#8065](https://github.com/tinyhumansai/openhuman/pull/8065) 仍开放。

---

## 6. 功能请求与路线图信号

### 已有对应开发工作的需求

#### TinyChannels v2 宿主集成

- **需求载体：** [#8397](https://github.com/tinyhumansai/openhuman/pull/8397)
- **信号：**
  - 已进入实际开发，并关联两个 Epic Issue。
  - 表明项目正推进 Web Chat 与通道层解耦。
- **下一版本可能性：** **高**
  - 前提是通过代码所有权审计、接口验收和完整回归测试。

#### Keenable 搜索提供商

- **需求载体：** [#7279](https://github.com/tinyhumansai/openhuman/pull/7279)
- **信号：**
  - Host 侧实现与 TinySearch 侧版本已具备。
  - 适合作为搜索连接器扩展进入下一版本。
- **下一版本可能性：** **中高**
  - 但需解决 PR 长期未合并和版本固定问题。

#### 云提供商自定义 Header 与产品级 User-Agent

- **需求载体：** [#8059](https://github.com/tinyhumansai/openhuman/pull/8059)
- **信号：**
  - 面向企业代理、网关兼容、模型限制查询和可观测性场景。
  - 属于兼容性与可运营性增强。
- **下一版本可能性：** **中高**
  - 合并前应重点审查 Header 密钥泄露风险。

### 尚无对应 PR 的新增需求

#### 个性化上下文仪表盘

- **需求载体：** [#8402](https://github.com/tinyhumansai/openhuman/issues/8402)
- **信号：**
  - 直接复用 Memory Tree 和 TokenJuice，技术路径较明确。
  - 体现“主动简报 + 自适应组件”的产品方向。
- **下一版本可能性：** **中**
  - 功能范围较明确，但需确定首期组件集合、数据权限和隐私边界。

#### 共享只读 Agent Skill 来源

- **需求载体：** [#8400](https://github.com/tinyhumansai/openhuman/issues/8400)
- **信号：**
  - 反映嵌入式宿主对集中式 Skill 分发、版本一致性和最小权限挂载的需求。
  - 与多 Agent、团队共享和企业部署场景高度相关。
- **下一版本可能性：** **中**
  - 需要设计路径解析、权限隔离、符号链接兼容和热更新策略。

---

## 7. 用户反馈摘要

### 真实使用场景

1. **跨应用个人简报**
   - 用户希望将邮件、日历、GitHub 活动和笔记统一汇总到一个上下文面板。
   - 场景超越了单轮问答，侧重每天主动获取高价值信息。
   - 来源：[#8402](https://github.com/tinyhumansai/openhuman/issues/8402)

2. **需审批的工作流自动化**
   - 用户创建并保存了“Daily Priorities”等工作流，希望在明确确认后执行 `run_flow`。
   - 实际问题是系统拒绝执行且不展示审批卡，使用户无法判断应等待、重新确认还是调整权限。
   - 来源：[#8401](https://github.com/tinyhumansai/openhuman/issues/8401)

3. **DeepSeek 思考模式下的长任务**
   - 用户在工具调用流程中使用 DeepSeek 思考模式，任务中途收到 Provider 400。
   - 这类用户依赖模型执行多步骤自动化，对消息重放的一致性要求较高。
   - 来源：[#8398](https://github.com/tinyhumansai/openhuman/issues/8398)

4. **嵌入宿主中的 Agent Skill 管理**
   - 用户希望共享只读 Skill Bundle，而不是为每个 Agent 复制一份。
   - 核心痛点包括存储重复、版本漂移、权限扩大和部署复杂度。
   - 来源：[#8400](https://github.com/tinyhumansai/openhuman/issues/8400)

### 满意与不满意信号

- **积极信号：**
  - 用户主动提出具体产品方案，并明确指出希望复用 Memory Tree、TokenJuice 等已有能力，说明现有架构对下一步扩展具备一定吸引力。
  - Keenable PR 说明外部提供商正在主动适配 OpenHuman 生态。
- **主要不满意点：**
  - 执行被拒绝时缺少可见审批入口，用户无法恢复流程。
  - Provider 兼容问题会在任务中途暴露，用户已经投入上下文后才发现失败。
  - 消息解析和附件处理近期出现多项修正，反映聊天消息往返层仍不够稳健。
- **反馈成熟度：**
  - 4 条 Issue 均有 1 条评论，但当前数据未提供评论正文，无法判断社区共识或具体满意度评价。

---

## 8. 待处理积压

### 长期开放的重要 PR

#### 1. Keenable 搜索集成已开放约 16 天

- **PR：** [#7279](https://github.com/tinyhumansai/openhuman/pull/7279)
- **创建时间：** 2026-10-10
- **建议：**
  - 尽快确认 TinySearch v0.5.3 的兼容性、测试结果及合并窗口。
  - 这是当前最明显的跨仓库集成积压项。

#### 2. 云提供商 Header 支持已开放约 9 天

- **PR：** [#8059](https://github.com/tinyhumansai/openhuman/pull/8059)
- **创建时间：** 2026-10-17
- **建议：**
  - 尽快完成审查，重点验证 Header 脱敏、日志输出和错误路径。
  - 作为兼容类改动，延迟合并可能增加上游 API 漂移成本。

#### 3. Agent Registry 刷新已开放约 9 天

- **PR：** [#8065](https://github.com/tinyhumansai/openhuman/pull/8065)
- **创建时间：** 2026-10-17
- **建议：**
  - 优先验证动态白名单更新与重启合并逻辑，避免权限配置出现延迟生效。
  - 由于涉及安全边界，不宜长期保持开放状态。

#### 4. 附件空白解析修复已开放约 3 天

- **PR：** [#8329](https://github.com/tinyhumansai/openhuman/pull/8329)
- **创建时间：** 2026-10-23
- **建议：**
  - 与已关闭的 [#8403](https://github.com/tinyhumansai/openhuman/pull/8403) 一并检查，确认附件标记清理和消息反解析之间不存在冲突。
  - 建议补充 Python 缩进、Markdown 硬换行及多附件场景的端到端测试。

### 近期应建立明确处置计划

- **P1 缺陷无修复 PR：**
  - [#8398](https://github.com/tinyhumansai/openhuman/issues/8398)
  - [#8401](https://github.com/tinyhumansai/openhuman/issues/8401)
- **P2 架构需求无对应实现：**
  - [#8400](https://github.com/tinyhumansai/openhuman/issues/8400)
- **P3 产品需求无对应实现：**
  - [#8402](https://github.com/tinyhumansai/openhuman/issues/8402)

---

## 项目健康度结论

**综合健康度：中等，偏高开发活跃度、中等稳定性信号。**

- **优势：**
  - 24 小时内有 4 条 Issue、7 条 PR 更新，没有停滞迹象。
  - TinyChannels v2、搜索提供商、云端请求配置和 Agent Registry 等多条工程线并行推进。
  - 消息解析和测试栈溢出已有针对性修复工作。

- **主要风险：**
  - 两个 P1 问题分别影响 DeepSeek 长任务和工作流审批链路，且当前没有明确修复 PR。
  - 多个 PR 持续开放超过一周，积压最长的 Keenable 集成已超过两周。
  - 消息附件/文本往返近期连续出现修正，可能暗示该模块缺少统一、覆盖充分的回归测试体系。

**建议下一工作日优先级：**

1. 立即为 [#8398](https://github.com/tinyhumansai/openhuman/issues/8398) 和 [#8401](https://github.com/tinyhumansai/openhuman/issues/8401) 建立修复 PR、负责人和复现测试。
2. 核验 [#8403](https://github.com/tinyhumansai/openhuman/pull/8403) 与 [#8329](https://github.com/tinyhumansai/openhuman/pull/8329) 的最终落地关系，避免修复链断裂。
3. 收敛长期开放的 [#7279](https://github.com/tinyhumansai/openhuman/pull/7279)、[#8059](https://github.com/tinyhumansai/openhuman/pull/8059) 和 [#8065](https://github.com/tinyhumansai/openhuman/pull/8065)。
4. 在下一版本规划中，为 [#8402](https://github.com/tinyhumansai/openhuman/issues/8402) 与 [#8400](https://github.com/tinyhumansai/openhuman/issues/8400) 分别确定首期范围和架构方案。

</details>

---
*本日报由 [Big Model Radar](https://github.com/96loveslife/big_model_radar) 自动生成。*
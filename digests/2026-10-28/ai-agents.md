# OpenClaw 生态日报 2026-10-28

> Issues: 500 | PRs: 500 | 覆盖项目: 8 个 | 生成时间: 2026-10-28 04:59 UTC

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

**日期：2026-10-28**  
**数据范围：过去 24 小时 GitHub Issues、PR 与 Releases 更新**

---

## 一、今日速览

- 过去 24 小时记录到 **500 条 Issue 更新**（389 条新开或活跃、111 条关闭）和 **500 条 PR 更新**（310 条待合并、190 条合并或关闭），另有 **2 个版本发布**，项目开发与社区讨论均处于高活跃状态。
- 今日讨论核心明显集中在 **Gateway 稳定性、数据库/SQLite 锁、升级与重启链路、Windows 兼容性** 四类问题；其中多个 P0/P1 Issue 尚无明确修复 PR，发布质量风险仍偏高。
- PR 侧出现了较多低层可靠性修复，涵盖单调时钟、状态数据库租约、Doctor 修复、权限审批和 Gateway 重启恢复，说明维护重点正从单纯功能扩展转向 **可恢复性、安全边界和跨平台一致性**。
- 当前最值得关注的信号是：大量问题已经能够稳定复现并形成窄范围修复，但“复现—修复—发布—回归验证”的链路仍不够快，部分 P0 问题已持续数周。
- 综合判断：**项目活跃度很高、工程响应持续，但发布分支上的可靠性债务与 Windows 平台债务较为集中**；功能推进明显，稳定性治理仍是下一阶段主线。

---

## 二、版本发布

### 1. `v2026.10.10-beta.4`

本次发布的明确修复集中在 **Automations 定时任务的权限与生命周期管理**：

- 对同一会话内显式创建的定时后续任务，保留经过认证的操作员权限；
- 覆盖一次性 `next_check` 重新调度场景；
- 同时维持角色、会话、取消机制、目标对象以及工具策略的撤销边界。

这属于重要但范围较窄的权限正确性修复，主要影响自动化、计划任务和后续唤醒链路。

**兼容性提示：**

- 如果系统依赖定时任务在重启、重新调度或一次性任务重新武装后继续继承操作员权限，升级后行为可能发生积极变化；
- 涉及权限撤销、角色变化或工具策略变更的自动化任务，仍需重点验证是否按预期被阻止；
- 官方 Release Notes 的 Highlights、Changes 区域为空，完整变更范围应以对应 PR、提交记录和升级后的回归验证为准。

### 2. `v2026.10.8`

该版本重点改善 **更新失败后的恢复能力**：

- 普通 post-update Doctor 检查失败时，自动重启 Gateway，而不是让 Gateway 保持停止；
- 孤立的 maintenance worker 不再阻塞所有 CLI 命令及 Gateway 启动；
- 更新流程不再因 ACL 文件系统或 Windows 相关条件直接中止。

这些改动主要降低“升级成功后服务无法恢复”“维护残留导致系统全面不可用”的风险。Windows 用户以及使用受管服务、ACL 文件系统的部署应优先验证升级、Doctor 和重启链路。

> 本日报所给 Release 摘要较简略，无法仅凭现有数据确认是否存在数据库 schema、插件生命周期或配置格式的破坏性变更。建议生产环境升级前继续检查目标版本对应的迁移日志及插件兼容性。

---

## 三、项目进展

### 3.1 更新与恢复链路继续加固

多项 PR 正在处理升级失败、Doctor 卡住、状态库残留及更新回滚问题：

- **避免重复复制已接纳的回滚镜像**  
  [#186510](https://github.com/openclaw/openclaw/pull/186510)  
  目标是减少大型数据库在回滚快照阶段的重复采集、比较和复制成本，降低激活时间及资源压力。

- **Doctor 保留旧版升级备份与原生会话分配**  
  [#186506](https://github.com/openclaw/openclaw/pull/186506)  
  防止升级过程过早清理仍有效的 heartbeat 配置或遗留 session store，避免合法原生分配丢失。

- **Doctor 释放失效 agent-database lease，并在 JSON 输出中报告占用原因**  
  [#186535](https://github.com/openclaw/openclaw/pull/186535)  
  直接回应“Gateway 已停止但 agent store 仍被占用”的问题，补齐机器可读诊断能力。

- **旧状态 schema 缺少 `canonical_login` 时阻止升级的修复**  
  [#186529](https://github.com/openclaw/openclaw/pull/186529)  
  解决旧版本已创建 `user_profile_identities` 表、但缺少该字段时 Doctor 拒绝升级并导致 Gateway 无法启动的问题。

- **中断的 Windows 更新修复流程留下空 custody receipt**  
  对应问题：[#184720](https://github.com/openclaw/openclaw/issues/184720)  
  当前展示 PR 中未出现明确的一对一支修复，属于仍需关注的缺口。

### 3.2 Gateway 稳定性与性能修复推进

- **长超时 `gateway probe` 不再立即失败**  
  [#186528](https://github.com/openclaw/openclaw/pull/186528)  
  修复超过 Node 32 位定时器上限的 timeout 被立即判定失败的问题，属于边缘但实用的 CLI 正确性改进。

- **Node-backed workspace 不再延迟 Gateway 重启 300 秒**  
  [#186415](https://github.com/openclaw/openclaw/pull/186415)  
  配置文件修改后需重启时，不再因开放 skill watch 长期等待。

- **优雅重启后恢复正在运行的会话**  
  [#185730](https://github.com/openclaw/openclaw/pull/185730)  
  旨在解决重启时等待忙碌 agent、多个恢复所有者竞争，以及新输入被恢复任务阻塞的问题。该 PR 规模为 XL，涉及 Gateway、CLI、脚本、agents、Web UI、Telegram 等多个区域，后续合并风险与回归范围需要重点关注。

- **分页读取时保留历史片段**  
  [#186536](https://github.com/openclaw/openclaw/pull/186536)  
  针对先读取最新小页、再加载旧历史时部分历史消失的问题。不过该 PR 当前仅包含回归线索，尚未确认能够稳定复现。

- **账户恢复后重新检查健康状态**  
  [#186471](https://github.com/openclaw/openclaw/pull/186471)（已关闭）  
  避免 channel health monitor 在等待其他账户下线期间，错误重启已经自行恢复的账户。

### 3.3 安全与输入健壮性提升

- **终端报告中的转义字符与双向控制符清理**  
  [#186502](https://github.com/openclaw/openclaw/pull/186502)  
  覆盖文件名、路径、插件元数据和配对字段，防止终端转义序列及 bidi 控制符污染 CLI 报告。属于值得尽快合入的安全加固。

- **仅写权限运行接收原生审批结论**  
  [#186461](https://github.com/openclaw/openclaw/pull/186461)  
  修复只有 `operator.write` 的运行无法收到 native approval verdict 的问题。该 PR 涉及安全边界，仍需补充权限矩阵与拒绝路径验证。

- **长标点序列不再阻塞自动回复的中止检测**  
  [#184433](https://github.com/openclaw/openclaw/pull/184433)  
  将异常输入下的检测复杂度从可能退化的时间降为线性时间，避免 Gateway 被单个消息卡住。

- **Matrix `formatted_body` mention 检查的复杂度修复**  
  [#184432](https://github.com/openclaw/openclaw/pull/184432)  
  修复特制 HTML 导致 mention 检查冻结数秒至数分钟的问题。

### 3.4 其他用户可见改进

- 命令面板中的模型结果可直接打开对应 Provider  
  [#186468](https://github.com/openclaw/openclaw/pull/186468)

- 移动端软键盘弹出时不再裁切 New Session 输入框  
  [#186519](https://github.com/openclaw/openclaw/pull/186519)（已关闭）

- 隐藏或显示会话后继续保留活跃 workspace 的可用性  
  [#186479](https://github.com/openclaw/openclaw/pull/186479)

- PDF 自动选择支持包含 `/` 的自定义模型 ID  
  [#186526](https://github.com/openclaw/openclaw/pull/186526)

- 结构化失败复制时保留 Error 原生身份  
  [#184431](https://github.com/openclaw/openclaw/pull/184431)

**整体进展评估：**  
今日 PR 活动量大且技术覆盖广，至少推进了升级恢复、Doctor、Gateway 重启、权限审批、安全输出、复杂输入防护和跨平台细节等十余条关键链路。然而不少 PR 尚处于“等待维护者查看”“需要证明”或“等待作者”的阶段，不能仅凭 PR 数量等同于已交付稳定性提升。

---

## 四、社区热点

### 4.1 大型外部插件捕获阻塞 Gateway 事件循环

- **Issue：** [#160959](https://github.com/openclaw/openclaw/issues/160959)
- **热度：** 59 条评论，当前讨论量最高
- **等级/影响：** P0、crash-loop、release-blocker
- **修复状态：** 标记为 `no-new-fix-pr`、`needs-maintainer-review`、`source-repro`

用户诉求是解决 2026.9.6 引入的回归：外部或 workspace 插件包含大型 package/dependency tree 时，Gateway 启动及 prepared model runtime 重新发布期间会阻塞事件循环数分钟。

**背后诉求：**
- 插件扫描、捕获和依赖分析不能阻塞主事件循环；
- 大型插件树应采用异步、分片或有界扫描；
- 更新回归需要快速回滚或提供补丁版本。

### 4.2 Gateway 状态数据库 WAL checkpoint 永久阻塞

- **Issue：** [#164294](https://github.com/openclaw/openclaw/issues/164294)
- **热度：** 35 条评论
- **等级/影响：** P2
- **修复状态：** 尚无明确修复 PR

进程内 reader 长期 pin住 WAL，导致 checkpoint 每次都被阻塞，SQLite 日志持续增长。

**背后诉求：**
- 将长期 reader 与 checkpoint 生命周期解耦；
- 提供 WAL 状态、reader 来源及恢复操作；
- 避免 SQLite WAL 无界增长最终影响 Gateway 稳定性。

### 4.3 Windows 启动慢、插件关闭异常及 `schtasks` 权限错误

- **Issue：** [#170956](https://github.com/openclaw/openclaw/issues/170956)
- **热度：** 22 条评论
- **等级/影响：** P0、crash-loop、release-blocker
- **修复状态：** 尚无明确 fix PR

**背后诉求：**
- 降低 Windows 更新和重启失败率；
- 清理 Scheduled Task 权限与生命周期；
- 避免插件关闭不完整造成网关断连。

### 4.4 Agent DB 资源卡死导致所有 Agent 无法回复

- **Issue：** [#157325](https://github.com/openclaw/openclaw/issues/157325)
- **热度：** 20 条评论
- **等级/影响：** P0、message-loss、release-blocker
- **修复状态：** 尚无明确 fix PR

**背后诉求：**
- 单个 Agent 或数据库连接异常不应拖垮全部 Agent；
- Gateway 应能自动检测、隔离和释放失效资源；
- 故障不应只能通过重启 Gateway 恢复。

### 4.5 Windows Quick Start 的 Codex 激活失败

- **Issue：** [#185819](https://github.com/openclaw/openclaw/issues/185819)
- **热度：** 8 条评论
- **等级/影响：** P0、auth-provider、release-blocker
- **修复状态：** 尚无明确 fix PR

设备授权已经成功，但激活阶段却因 harness runtime artifact inactive 而失败。

**背后诉求：**
- 授权成功后应保证本地运行时完整；
- 激活错误应明确区分认证失败和运行时安装失败；
- Quick Start 需要做到一次完成，而非授权后再次要求排障。

### 4.6 讨论度较高的其他问题

- Codex `nativeSubagentAssignments` 在投递放弃后未清理，导致后续线程重复钉住并重发：  
  [#172837](https://github.com/openclaw/openclaw/issues/172837)

- DeepSeek 上 Cron 消息因 `[cron:...]` 前缀被降权，任务可能卡住数秒至数分钟：  
  [#121953](https://github.com/openclaw/openclaw/issues/121953)

- Windows npm 更新成功但出现 missing-module cleanup 错误：  
  [#184658](https://github.com/openclaw/openclaw/issues/184658)

- `gateway probe` 的超长 timeout 边界错误已有明确修复：  
  [#186528](https://github.com/openclaw/openclaw/pull/186528)

---

## 五、Bug 与稳定性

以下按“影响范围 × 复现确定性 × 发布阻断程度”排序。

### P0 / 发布阻断级

| 问题 | 核心影响 | 是否有明确 fix PR |
|---|---|---|
| [#160959](https://github.com/openclaw/openclaw/issues/160959) 大型插件树阻塞 Gateway 事件循环 | 启动和 runtime republish 可卡死数分钟，疑似 crash-loop | **否**；标签明确显示无新 fix PR |
| [#170956](https://github.com/openclaw/openclaw/issues/170956) Windows 启动、关闭与 `schtasks` 权限问题 | 重启和更新高度不稳定，可能出现 1006 断连 | **否** |
| [#157325](https://github.com/openclaw/openclaw/issues/157325) Agent DB 资源卡死 | 所有 Agent 回复失败，只能重启恢复，存在消息丢失 | **否** |
| [#161921](https://github.com/openclaw/openclaw/issues/161921) `doctor --fix` 与 plugins update 相互依赖 | 升级后插件停留在旧版本，无法完成迁移和更新 | **否** |
| [#167406](https://github.com/openclaw/openclaw/issues/167406) Windows MSIX + Codex 启动饿死主线程 | Gateway readiness 超时，严重时无法启动 | **否** |
| [#164800](https://github.com/openclaw/openclaw/issues/164800) 托管更新后 activation driver 失效 | Gateway 停止后无法自动恢复，需主机重启 | **否** |
| [#185819](https://github.com/openclaw/openclaw/issues/185819) Windows Quick Start Codex 激活失败 | 新用户完成授权仍无法使用，属于 onboarding 阻断 | **否** |
| [#158912](https://github.com/openclaw/openclaw/issues/158912) `MEMORY.md` bootstrap 注入缺失 | 文档承诺的会话启动记忆未加载，可能影响状态与安全预期 | **否** |

### P1 / 严重稳定性与数据一致性问题

| 问题 | 核心影响 | 修复进度 |
|---|---|---|
| [#119720](https://github.com/openclaw/openclaw/issues/119720) Agent 持久化与 transcript 维护阻塞事件循环 | 规模增大后可能拖垮 Gateway | **部分修复已落地**，但仍有后续工作，暂无新 fix PR |
| [#172837](https://github.com/openclaw/openclaw/issues/172837) Codex 子 Agent assignment 投递失败后不清理 | 后续父线程重复投递、状态污染 | **否** |
| [#166017](https://github.com/openclaw/openclaw/issues/166017) MCP session idle TTL 默认值未应用 | MCP runtime 不回收，子进程达到 256 上限后新调用失败 | **否** |
| [#181432](https://github.com/openclaw/openclaw/issues/181432) RSS 约 1.9GB 且 SQLite 超时 | 资源消耗、写入延迟与消息稳定性恶化 | **否** |
| [#169797](https://github.com/openclaw/openclaw/issues/169797) 单核主机内存显著增长、启动变慢 | 相对 2026.9.4 出现明显性能回归 | **否** |
| [#181078](https://github.com/openclaw/openclaw/issues/181078) Canonical session reader continuation 失效 | 模型已返回 HTTP 200，但 Agent turn 仍间歇性失败 | **否** |
| [#177656](https://github.com/openclaw/openclaw/issues/177656) Native host exec 共享状态完整性准入错误 | 子进程无结果，至少报告 28 次失败 | **否** |
| [#123354](https://github.com/openclaw/openclaw/issues/123354) Matrix E2EE 在正常 Megolm 轮换后停止解密 | 消息丢失风险，指定设备后续收不到密文 | **否** |
| [#115256](https://github.com/openclaw/openclaw/issues/115256) Desktop app 导致 Gateway 反复 boot-loop | 会话中断，Desktop 修复又会被立即回退 | **否** |
| [#184720](https://github.com/openclaw/openclaw/issues/184720) Windows 更新修复留下空 custody receipt | 后续无法判断残留进程归属，修复流程不可继续 | **否** |

### P2 / 中等但持续影响使用的问题

- Gateway state DB WAL checkpoint 永久阻塞：[#164294](https://github.com/openclaw/openclaw/issues/164294)
- Cron/Code Mode 工具目录不完整，出现 `Unknown tool id`：[#120385](https://github.com/openclaw/openclaw/issues/120385)
- MCP wrapper 将整数参数强制转为字符串：[#166133](https://github.com/openclaw/openclaw/issues/166133)
- Memory reindex lock 无法释放，并累积约 19GB 临时数据库：[#136311](https://github.com/openclaw/openclaw/issues/136311)
- CLI backend 的 assistant turn 被重复持久化和展示：[#123792](https://github.com/openclaw/openclaw/issues/123792)
- Memory 索引发布使用单个长事务，与 Agent DB 写入争锁：[#143640](https://github.com/openclaw/openclaw/issues/143640)
- Control UI 长聊天记录持续上下抖动：[#164394](https://github.com/openclaw/openclaw/issues/164394)
- CJK 负载在 transport precheck 阶段过早被拒，无法进入 graceful compaction：[#173839](https://github.com/openclaw/openclaw/issues/173839)
- `config get` 掩码敏感值但缺少明确提示，导致恢复排障耗时数小时：[#173313](https://github.com/openclaw/openclaw/issues/173313)
- 更新状态未检查插件可用性及不可逆迁移风险：[#122019](https://github.com/openclaw/openclaw/issues/122019)

---

## 六、功能请求与路线图信号

### 6.1 文件系统访问控制沙箱

- **需求：** [#7722](https://github.com/openclaw/openclaw/issues/7722)
- **状态：** 安全审查、产品决策和维护者评审均未完成
- **判断：** 这是高价值但高风险能力，若进入下一版本，优先级可能较高，因为当前工具调用边界、workspace authority 和审批机制正在持续完善。建议以显式 allow/deny path、审计日志和默认关闭策略推进，而不是快速开放。

### 6.2 按模型统计用量与成本

- **需求：** [#13219](https://github.com/openclaw/openclaw/issues/13219)
- **状态：** 有产品决策需求，已有相关 PR 标签
- **判断：** 具备纳入下一版本的现实可能。底层 JSONL 已包含 input/output/cache/cost 数据，主要工作是提供聚合接口和视图，属于较低实现风险、较高用户价值的功能。

### 6.3 每个 Agent 独立设置 compaction 与 contextPruning

- **需求：** [#52732](https://github.com/openclaw/openclaw/issues/52732)
- **状态：** 已有 linked PR
- **判断：** 与多 Agent、个性化上下文管理路线一致，若兼容性验证充分，较可能进入近期版本。

### 6.4 TUI 无障碍选项：关闭 Emoji 和 Unicode 符号

- **需求：** [#9637](https://github.com/openclaw/openclaw/issues/9637)
- **状态：** 已有 linked PR
- **判断：** 改动边界清晰，适合近期合入。需确保不影响状态图标、颜色及依赖符号的交互逻辑。

### 6.5 Android 支持原生问答与审批请求

- **需求：** [#175826](https://github.com/openclaw/openclaw/issues/175826)
- **状态：** 等待设计验收
- **判断：** 与近期原生审批和多端一致性方向吻合，但涉及客户端、Gateway 合约和审批安全边界，更可能进入后续规划而非当前 beta 周期。

### 6.6 Memory Search 排除 Dreaming fenced 范围

- **需求：** [#172547](https://github.com/openclaw/openclaw/issues/172547)
- **状态：** 需求已明确，尚无明确实现 PR
- **判断：** 能减少不可晋升内容污染 recall 统计，技术目标清晰，可作为 memory-core 下一轮修复候选。

### 6.7 Skill Workshop 的用户控制与安全治理

虽然正式分类是 Bug，但 [#184600](https://github.com/openclaw/openclaw/issues/184600) 已形成明确路线信号：后台经验审查不应在无用户同意的情况下自动修改技能。下一版本很可能需要：

- 默认关闭自动 mutation；
- 对技能变更提供 diff、审批和回滚；
- 明确后台审查的运行频率与停止方式；
- 防止技能内容污染后续 Agent 行为。

相关重试无上限问题也见 [#177505](https://github.com/openclaw/openclaw/issues/177505)。

---

## 七、用户反馈摘要

### 7.1 核心用户痛点

1. **“更新后比更新前更不可用”**  
   多名 Windows 用户报告升级后出现 Gateway 不启动、插件不能更新、Doctor 与插件迁移互相阻塞，或 activation driver 无法恢复。代表问题包括 [#170956](https://github.com/openclaw/openclaw/issues/170956)、[#161921](https://github.com/openclaw/openclaw/issues/161921)、[#164800](https://github.com/openclaw/openclaw/issues/164800)。

2. **“单个异常拖垮全部 Agent”**  
   Agent DB 卡死后，所有 Agent 都只能返回通用失败信息，重启是唯一恢复手段，直接造成消息与任务丢失：[#157325](https://github.com/openclaw/openclaw/issues/157325)。

3. **“生产环境性能持续恶化”**  
   用户在单核或 ARM64 主机上观察到基线 RSS 从约 300MB 增至 1.89GB，启动和首条回复显著变慢，SQLite 事务也出现超时：[#181432](https://github.com/openclaw/openclaw/issues/181432)、[#169797](https://github.com/openclaw/openclaw/issues/169797)。

4. **“自动化不可预测”**  
   Cron 工具目录缺失、DeepSeek 优先级下降、Codex 子 Agent assignment 残留、subagent completion 投递失败，均使用户难以确认定时任务和后台任务是否真正完成：[#120385](https://github.com/openclaw/openclaw/issues/120385)、[#121953](https://github.com/openclaw/openclaw/issues/121953)、[#172837](https://github.com/openclaw/openclaw/issues/172837)。

5. **“跨平台体验不一致”**  
   Windows 的 MSIX、npm global、Scheduled Task、Quick Start 和 Codex 集成存在多条独立故障链；MacOS 的 Doctor 也可能卡在 plugin capture 阶段：[#178359](https://github.com/openclaw/openclaw/issues/178359)。

### 7.2 满意点与积极信号

- 新版更新恢复机制已经获得正向反馈：`v2026.10.8` 能在 Doctor 失败后重启 Gateway，并减少孤立 worker 阻塞。
- 今日多项 PR 明显改善了用户可感知细节，包括移动端输入框不再被键盘裁切、命令面板直达 Provider、Node workspace 重启不再固定等待 5 分钟。
- 社区对问题的复现信息较完整，部分 Issue 已提供版本、环境、调用栈、流量捕获及量化指标，说明用户参与质量较高。

### 7.3 主要不满意点

- 维护者评审和补丁落地速度未完全匹配问题严重程度；
- 相同根因被拆散为大量 Issue，缺少统一的 SQLite lease、WAL reader、Windows lifecycle 等追踪主线；
- 部分 CLI 输出、状态命令和失败提示不够可诊断，导致用户自行排障数小时；
- `no-new-fix-pr` 标签较多，用户难以判断临时规避方案与正式修复时间。

---

## 八、待处理积压

### 8.1 长期未响应或高争议 Issue

1. **同步持久化与 transcript 维护阻塞 Gateway**  
   [#119720](https://github.com/openclaw/openclaw/issues/119720)  
   自 2026-08-05 起持续，存在部分修复但缺少新的闭环 PR。

2. **MCP 整数参数被错误转为字符串**  
   [#166133](https://github.com/openclaw/openclaw/issues/166133)  
   标为 stale，且 MCP 兼容性直接影响第三方工具调用。

3. **Memory 索引锁与长事务问题**  
   [#136311](https://github.com/openclaw/openclaw/issues/136311)、[#143640](https://github.com/openclaw/openclaw/issues/143640)  
   两个问题分别造成索引无法重建和 Agent DB 写入争锁，已有复现但修复不足。

4. **更新状态缺少插件兼容性检查**  
   [#122019](https://github.com/openclaw/openclaw/issues/122019)  
   该缺口可能直接增加不可逆迁移风险。

5. **Code Mode 工具目录在 Cron 与 memory-flush turn 中不完整**  
   [#120385](https://github.com/openclaw/openclaw/issues/120385)  
   影响自动化的基本可用性。

6. **Desktop 与 Gateway 生命周期互相冲突**  
   [#115256](https://github.com/openclaw/openclaw/issues/115256)  
   持续时间较长，同时涉及稳定版本用户和会话中断。

### 8.2 值得维护者重点审阅的 PR 积压

以下 PR 已有较完整的问题描述或证明，但仍等待维护者：

- 恢复运行中会话：[#185730](https://github.com/openclaw/openclaw/pull/185730)
- 写入权限运行接收原生审批：[#186461](https://github.com/openclaw/openclaw/pull/186461)
- Doctor 释放失效 DB lease：[#186535](https://github.com/openclaw/openclaw/pull/186535)
- 保留旧升级备份与原生分配：[#186506](https://github.com/openclaw/openclaw/pull/186506)
- 状态 schema 兼容修复：[#186529](https://github.com/openclaw/openclaw/pull/186529)
- 终端控制字符清理：[#186502](https://github.com/openclaw/openclaw/pull/186502)
- Matrix thread 会话不再复制房间 transcript：[#177272](https://github.com/openclaw/openclaw/pull/177272)
- 现有本地 Codex 会话恢复 Goal：[#186524](https://github.com/openclaw/openclaw/pull/186524)

### 8.3 建议的维护优先级

1. 先处理所有 P0 release-blocker，特别是插件树阻塞、Agent DB 卡死和 Windows 升级/激活链路；
2. 将 SQLite WAL、lease、reindex lock 和长时间事务问题合并为一条数据库稳定性专项；
3. 为 Windows 建立统一兼容性矩阵，覆盖 npm、MSIX、Scheduled Task、Codex、Doctor 和 managed update；
4. 对 `no-new-fix-pr` 但已有稳定复现的问题设置明确 owner 和目标版本；
5. 在下一版中优先发布已具备明确 proof 的窄范围修复，再处理 XL 跨模块重构，降低回归面。

---

## 结论

OpenClaw 今日呈现出“**高活跃开发、高频社区反馈、稳定性债务集中暴露**”的状态。更新恢复、Doctor、权限审批和输入安全方面已有实质推进，但 Gateway 主循环、SQLite 生命周期、Windows 更新和 Agent 资源隔离仍是发布质量的核心风险。

如果下一阶段能够把已经稳定复现的问题快速转化为窄范围补丁，并在 beta 发布前完成跨平台升级回归，项目健康度将明显改善；反之，若 P0/P1 问题继续积压，当前的高 PR 活跃度可能会被重复回归和升级失败抵消。

---

## 横向生态对比

# 个人 AI 助手 / 自主智能体开源生态横向分析报告

**数据日期：2026-10-28｜观察窗口：过去 24 小时**

---

## 1. 生态全景

个人 AI 助手与自主智能体生态正处于**高并发产品化阶段**：QwenPaw、OpenHuman、Hermes Agent、OpenClaw 等项目同时推进插件化、桌面端、多渠道、长上下文与工作流能力，但今日也共同暴露了**长会话恢复、状态一致性、跨平台兼容和升级可靠性**等共同短板。

生态的竞争重点已从“是否具备 Agent 能力”转向“能否长期稳定运行”：OpenClaw 和 QwenPaw 的更新量最高，但存量 P0/P1 问题也更集中；NanoBot 修复收敛最快；PicoClaw 技术方向清晰但交付闭环偏弱；LobsterAI 处于稳定打磨期；Hermes Agent 和 OpenHuman 则表现出明显的平台化与生态扩张趋势。

总体可概括为：**功能扩张显著、发布节奏加快，但底层工程成熟度尚未同步，2026 年下半年将成为个人 Agent 从 Demo 走向可靠生产工具的分化期。**

---

## 2. 各项目活跃度对比

| 项目 | 今日 Issues | 今日 PR | Release | 活跃度 | 健康度评估 |
|---|---:|---:|---|---|---|
| **OpenClaw** | 500 | 500 | 2 个版本：`v2026.10.10-beta.4`、`v2026.10.8` | 极高 | **高活跃、稳定性承压**；P0 存量多，Windows、SQLite、Gateway 主循环问题集中 |
| **QwenPaw** | 36 | 50 | `v2.3.0-beta.1` | 极高 | **活跃但存在稳定性债务**；版本迭代快，压缩、MCP、插件链仍有开放问题 |
| **Hermes Agent** | 50 | 50 | 无 | 极高 | **活跃但承压**；插件生态强，41 个 PR 待合并，多 Profile 安全与会话一致性需收敛 |
| **OpenHuman** | 14 | 43 | 无 | 高 | **中高、趋势向上**；工作流与记忆投入突出，但 Rust 测试和事件路由不稳 |
| **NanoBot** | 3 | 23 | 无；`0.4.0` 候选 PR 待合并 | 高 | **良好**；Issue 快速关闭，Windows 稳定性修复及时，发布执行仍待完成 |
| **PicoClaw** | 2 | 2 | 无 | 中等偏高 | **中等偏谨慎**；有明确修复 PR，但无合并、无发布，维护连续性受质疑 |
| **LobsterAI** | 2 | 3 | 无 | 中等偏低 | **中等偏稳**；交互与打包持续打磨，账号申诉和发布节奏是主要风险 |
| **IronClaw** | 0 | 0 | 无 | 静默 | **暂无活动信号**；需确认项目活跃度、路线及发布状态 |

### 数据解读

- **OpenClaw 的 500 Issues + 500 PR**远高于其他项目，是当前社区规模和多渠道需求最显著的玩家。
- **QwenPaw、Hermes Agent 各 50 Issues + 50 PR**，处于第二梯队的高压快迭代阶段。
- **NanoBot 的 3 条 Issue 全部关闭**，体现“问题少、收敛快”；但 0.4.0 尚未正式发布。
- **OpenHuman 43 个 PR 对 14 个 Issue**，说明其当前主要驱动力来自主动工程改造，而不是被动故障反馈。
- 多数项目今日无 Release，**代码活跃并不等于用户可获得稳定版本**。

---

## 3. OpenClaw 在生态中的定位

### 3.1 核心优势

#### 社区规模与反馈密度领先

OpenClaw 今日记录 1,000 条 Issue/PR 更新，Issue 热度最高的问题达到 59 条评论，规模远超同类项目。其优势不只是提交量大，更在于：

- 多渠道、多 Provider、多操作系统部署带来的真实场景覆盖；
- 用户可提交版本、调用栈、日志、流量和量化指标；
- 维护者已建立 P0/P1、`no-new-fix-pr`、`needs-maintainer-review` 等标签体系；
- Doctor、Gateway、插件、审批、数据库等核心子系统均有专项 PR 推进。

这使 OpenClaw 更接近一个**个人 Agent 基础设施层**，而非单一聊天客户端。

#### 产品面最完整

其覆盖面已包括：

- Gateway 常驻服务与多客户端；
- Cron、Automations、审批和子 Agent；
- Telegram、Matrix、Discord 等渠道；
- Provider 路由、记忆、插件、Doctor；
- Windows、macOS、Linux、Web 与移动端；
- 自动化权限和操作员身份继承。

相比 QwenPaw 偏向桌面宿主与插件平台、Hermes 偏向插件和长期上下文、OpenHuman 偏向本地工作流，OpenClaw 的直接竞争面是 **“随时在线、多渠道、能行动的个人 Agent 操作系统”**。

#### 已进入可靠性治理阶段

最新版本开始处理：

- 升级失败后自动恢复；
- Doctor 卡住；
- SQLite lease 清理；
- 权限审批；
- 单调时钟；
- 终端控制字符清理；
- 插件树阻塞事件循环。

这说明它已经越过单纯堆功能阶段，开始补齐长期运行所需的生产基础能力。

### 3.2 与同类项目的技术路线差异

| 维度 | OpenClaw | QwenPaw | Hermes Agent | OpenHuman | NanoBot |
|---|---|---|---|---|---|
| 核心形态 | 常驻 Gateway + 多渠道个人 Agent | 桌面/Console Agent 宿主 | Gateway + Webapp/Desktop + 插件 | 本地优先工作流与个人 Agent | 轻量 Python Agent + WebUI |
| 主路线 | 渠道、自动化、工具、Provider 全面覆盖 | 插件化、模型兼容、多端桌面 | 插件生态、长期上下文、跨端体验 | 工作流 Builder、记忆、后台代理 | 轻量化、多渠道、Provider 扩展 |
| 存储/运行时焦点 | SQLite、Gateway 生命周期、更新恢复 | Python/Node 混合、插件依赖隔离 | 多 Profile、Session、插件生命周期 | Rust、存储驱动、MongoDB/SQLite | Python、Windows 兼容性、WebUI |
| 优势 | 社区规模、产品完整度、真实场景多 | 发布快、平台化野心强 | 插件供给、长期上下文 RFC | 工作流体验、记忆连续性 | 修复收敛快、复杂度较低 |

### 3.3 核心短板

OpenClaw 的规模也放大了系统复杂度：

- P0 数量多，且多项无明确 fix PR；
- Windows 更新、MSIX、Scheduled Task、Codex 激活形成独立故障链；
- SQLite WAL、lease、reindex lock、长事务问题相互纠缠；
- Gateway 插件树扫描可阻塞事件循环数分钟；
- 41 个以上关键 Issue 长期开放，维护响应速度与严重度不完全匹配。

**结论：**OpenClaw 当前拥有最大的生态规模与最完整的基础设施，但也是当前最暴露“规模化个人 Agent 可靠性债务”的项目。它更像行业基准，而非已经成熟的行业答案。

---

## 4. 共同关注的技术方向

### 4.1 长上下文、压缩与长期记忆

涉及项目：**OpenClaw、QwenPaw、Hermes Agent、OpenHuman**

共同诉求：

- 上下文超限后能自动压缩，而不是中断任务；
- 压缩后仍可检索、恢复重要历史；
- 支持摘要模型、逐轮召回、记忆区块；
- 避免记忆注入被模型误解为思考或工具轨迹。

代表性进展：

- QwenPaw 通过引用上下文方式注入自动记忆召回；
- OpenHuman 引入 summarizer model、空闲线程压缩和逐轮召回；
- Hermes Agent 推进 Doc-Chain Substrate；
- OpenClaw 暴露压缩、持久化和 transcript 阻塞事件循环问题。

**判断：**长期记忆与可恢复上下文已成为个人 Agent 取代普通聊天机器人的核心门槛。

### 4.2 插件化、子进程隔离与生态扩展

涉及项目：**QwenPaw、Hermes Agent、OpenClaw、OpenHuman**

共同诉求：

- 第三方 Agent、渠道和工具不应拖垮宿主；
- 插件依赖冲突需要隔离；
- 插件应具备独立版本、生命周期和故障恢复；
- 需要 CLI 注册、目录、配置和分发体系。

其中：

- QwenPaw 正将第三方 Agent 和官方渠道抽离为插件；
- Hermes Agent 今日大量更新插件目录与插件能力；
- OpenClaw 的问题反而暴露了插件扫描阶段阻塞主循环；
- OpenHuman 将存储驱动所有权独立化。

**判断：**插件化正在成为行业默认架构，但“动态加载”并不等于“可靠隔离”。

### 4.3 跨平台和 Windows 稳定性

涉及项目：**OpenClaw、NanoBot、QwenPaw、Hermes Agent**

具体问题：

- OpenClaw：Windows 更新、MSIX、Scheduled Task、Codex 激活；
- NanoBot：WebUI 身份轮询内存泄漏、Windows 换行损坏；
- QwenPaw：Windows 安装包准备失败、日志不轮转；
- Hermes Agent：Windows Desktop 启动循环、worker 进程回收。

**判断：**Windows 已从“能运行”进入“必须建立正式兼容矩阵”的阶段，尤其影响个人用户和自动化部署。

### 4.4 长任务、后台 Agent 与事件状态一致性

涉及项目：**OpenHuman、Hermes Agent、QwenPaw、LobsterAI**

共同诉求：

- 后台任务必须有明确状态：运行中、等待用户、完成、失败；
- 完成事件必须进入正确的用户 Socket/线程；
- UI 按钮和实际运行状态必须一致；
- 任务完成不能只写内部日志。

典型问题：

- OpenHuman 子 Agent 卡片长期停留在 Working；
- Hermes Agent Telegram completion wake-up 被拒绝；
- LobsterAI 断网恢复后停止按钮状态错误；
- QwenPaw 记忆搜索重复调用后无法完成 finalization。

**判断：**Agent 的真正生产价值取决于任务状态是否可信，“模型能否回答”已不是唯一瓶颈。

### 4.5 Provider 与模型兼容层

涉及项目：**QwenPaw、PicoClaw、OpenClaw、NanoBot**

共同诉求：

- 根据 Provider/模型能力动态构造参数；
- 正确处理 thinking、temperature、tool call、媒体 URL；
- 模型审查错误不应直接终止 fallback；
- 本地模型需能参与工具决策和上下文压缩。

具体表现：

- PicoClaw 向 thinking-always Anthropic 模型发送废弃 temperature；
- QwenPaw 同时发送两种关闭思考参数，引发 400；
- QwenPaw 切换 Provider 后历史 `file://` 媒体失效；
- NanoBot、PicoClaw 继续扩充 Web Search Provider。

**判断：**兼容层正在从简单的 API 转发器演变为 Agent 的核心运行时。

### 4.6 安全边界与敏感数据治理

涉及项目：**OpenClaw、Hermes Agent、OpenHuman、QwenPaw**

共同关注：

- 审批权限不能因 Profile、通道或运行模式而被绕过；
- 终端输出需过滤转义和双向控制符；
- 检索 Token、API Key、审计记录不得泄露或静默中断；
- 用户对插件自动修改自身行为应有同意、Diff 和回滚机制。

其中 Hermes Agent 的 Anthropic 凭据池轮换和 `HERMES_WRITE_SAFE_ROOT` 失效，OpenHuman 的 TinyJuice Token 泄露，均属于高价值安全信号。

### 4.7 Web/Desktop 多端一致性

涉及项目：**QwenPaw、Hermes Agent、OpenHuman、LobsterAI、NanoBot**

具体诉求：

- Desktop、Web Dashboard、CLI 和 Gateway 共享统一会话状态；
- 房间列表、插件、Provider Endpoint 和 Agent 配置不分裂；
- 移动端输入法、触摸交互、审批通知可正常使用；
- 远程 Desktop 会话可跨设备恢复。

**判断：**多端 UI 已从功能重复建设，转向统一身份、状态和配置模型。

---

## 5. 差异化定位分析

### OpenClaw：全能型个人 Agent 基础设施

- **适合用户：**需要多渠道接入、长期驻留、自动化和插件能力的个人及高级用户。
- **核心能力：**Gateway、Cron、审批、Provider、插件、跨渠道消息。
- **主要短板：**复杂度最高，数据库、升级和 Windows 债务突出。
- **竞争定位：**生态最完整、规模最大，但需要最高程度的生产运维能力。

### QwenPaw：桌面 Agent 宿主与开放平台

- **适合用户：**偏桌面端、模型实验、插件开发和多 Provider 用户。
- **核心能力：**Console、模型管理、记忆、MCP、本地模型、Linux/Windows/macOS 桌面发行。
- **主要短板：**长会话、Provider 兼容、插件隔离和 MCP 协商尚未完全稳定。
- **竞争定位：**最像“Agent 开发与运行工作台”，平台化野心最强。

### Hermes Agent：插件优先的长期上下文平台

- **适合用户：**重视插件生态、文档知识、远程 Webapp 和长期记忆的开发者。
- **核心能力：**插件目录、Doc-Chain、跨端 Webapp/Desktop、搜索来源与互动 Artifact。
- **主要短板：**多 Profile 权限隔离、会话身份和凭据调度存在安全及一致性问题。
- **竞争定位：**开源插件生态与长期上下文治理最具辨识度。

### OpenHuman：本地优先的工作流与个人记忆助手

- **适合用户：**需要桌面端工作流、后台代理、个人记忆和本地数据管理的用户。
- **核心能力：**Workflow Builder、子 Agent、记忆召回、BYOK、安全工具、存储后端治理。
- **主要短板：**Rust 测试不稳定，事件路由和工作流幂等尚未完全收敛。
- **竞争定位：**最强调“可创作的个人工作流”，而非单纯消息机器人。

### NanoBot：轻量、多渠道、易扩展的个人 Agent

- **适合用户：**偏好 Python、追求轻量部署、需要 WebUI 和多 Provider 的个人用户。
- **核心能力：**轻量 Agent Loop、渠道适配、Provider、WebUI、Session 分页。
- **主要短板：**核心架构复杂度较低，但版本发布和复杂长任务可靠性仍待验证。
- **竞争定位：**安装和理解成本较低，适合作为轻量级替代方案。

### PicoClaw：边缘设备上的轻量 Agent

- **适合用户：**SBC、边缘盒子、老旧 Android 设备和资源受限环境。
- **核心能力：**轻量部署、多模型、多渠道、旧硬件兼容。
- **主要短板：**维护连续性、依赖版本锁定和发布闭环不足。
- **竞争定位：**硬件覆盖广，但生态和治理规模最小。

### LobsterAI：面向中文用户的桌面 AI 工作台

- **适合用户：**关注 Cowork、Computer Use、本地桌面交互和中文服务生态的用户。
- **核心能力：**桌面端、Cowork、多步骤 Computer Use、长粘贴内容、渠道与账号体系。
- **主要短板：**账号风控透明度、异常恢复和发布落地节奏。
- **竞争定位：**更接近垂直桌面产品，而非纯 Agent 基础设施。

---

## 6. 社区热度与成熟度

### 第一层：快速迭代与高压扩张

#### OpenClaw

- 社区规模绝对领先，更新量断层第一；
- 功能覆盖最全，但 P0/P1 债务最多；
- 处于**从个人 Agent 客户端升级为 Agent 操作系统**的阶段；
- 成熟度：基础能力高，稳定性中等。

#### QwenPaw

- Issue、PR 和 Release 均保持高吞吐；
- 插件化、本地模型、语音、社区和 Linux 桌面同时推进；
- 处于**平台化扩张期**；
- 成熟度：产品面较高，核心长任务链路中等。

#### Hermes Agent

- 100 条更新，41 个 PR 待合并；
- 插件目录和生态供给非常活跃；
- 处于**Webapp 正式化与插件平台化阶段**；
- 成熟度：扩展能力强，安全与多 Profile 一致性仍需补齐。

### 第二层：质量巩固与交付准备

#### OpenHuman

- 43 个 PR 体现主动架构投入；
- 子 Agent、工作流、记忆、存储均有系统性推进；
- 但测试不稳定和状态路由问题阻碍质量收敛；
- 成熟度：处于**工作流关键集成期**。

#### NanoBot

- 3 个 Issue 全部关闭，修复响应和针对性较强；
- Windows 泄漏、换行、WebUI 交互均已有明确 PR；
- 0.4.0 已进入候选准备；
- 成熟度：**从功能期进入稳定交付期**。

#### LobsterAI

- 更新频率不高，但改动围绕打包、授权和 Cowork 体验；
- 缺少版本发布，用户可感知交付不足；
- 成熟度：**稳定打磨期**。

### 第三层：早期或治理风险阶段

#### PicoClaw

- 技术问题数量有限，但修复未合并、未发布；
- 社区开始担心维护连续性并创建 Fork；
- 成熟度：**可用性尚可，工程治理和发布机制偏弱**。

#### IronClaw

- 过去 24 小时无活动；
- 无法判断是项目静默、归档、维护停滞还是数据窗口问题；
- 成熟度：**需进一步核实，不宜仅凭静默作负面结论**。

---

## 7. 值得关注的趋势信号

### 7.1 “模型能力”正让位于“任务可靠性”

用户反馈越来越聚焦：

- 任务是否真正完成；
- 后台 Agent 是否正确回传；
- 失败后能否恢复；
- 状态是否与 UI 一致；
- 升级后是否仍能启动。

这意味着个人 Agent 的下一阶段竞争指标，将从回答质量转向 **Completion Reliability、Recovery Rate 和 State Consistency**。

### 7.2 常驻服务将取代一次性 CLI 成为主流形态

OpenClaw Gateway、Hermes `hermes serve`、QwenPaw 后台运行和 OpenHuman 后台代理都指向同一趋势：Agent 需要跨时间、跨渠道和跨设备持续工作。

随之而来的关键工程能力是：

- 任务队列和持久化；
- 幂等执行；
- 事件投递；
- 进程恢复；
- 凭据与 Profile 隔离；
- 升级和回滚。

### 7.3 插件化是方向，但隔离、生命周期和依赖管理仍未解决

多个项目都在插件化，但当前常见问题仍包括：

- 插件扫描阻塞宿主；
- 依赖冲突；
- SDK 耦合；
- 热安装失败；
- 插件异常影响主进程；
- 插件版本缺少统一目录。

**建议开发者优先建设插件契约、健康检查、依赖隔离、版本锁定与回滚，而不是只追求插件数量。**

### 7.4 长上下文将逐步让位于“分层记忆 + 可追溯压缩”

单纯扩大上下文窗口无法解决成本、隐私、时效和可靠性问题。行业正在转向：

- 工作记忆；
- 长期记忆；
- 摘要层；
- 来源关系；
- 逐轮召回；
- 压缩后可重读。

Hermes 的 Doc-Chain、OpenHuman 的记忆区块和 summarizer、QwenPaw 的引用式召回，代表三种不同实现。短期更可行的是**把召回内容标为不可信引用，并保留来源和版本**，而不是伪装成模型自身历史。

### 7.5 Windows 和国产桌面环境成为独立质量门槛

大量问题并非核心 Agent 算法，而是：

- 安装器；
- 路径和换行；
- ACL；
- Scheduled Task；
- 日志轮转；
- 进程回收；
- 打包架构隔离。

个人 AI 助手的用户大量位于 Windows 和中文桌面环境，因此跨平台 CI 应从“编译通过”升级为**安装—升级—回滚—重启—恢复**全链路测试。

### 7.6 Provider 兼容层将成为独立基础设施

模型供应商在 thinking、媒体、工具调用、错误码和鉴权上的差异，已经足以让“聊天能开、任务失败”。建议建立统一能力描述：

- 是否支持 thinking；
- 媒体引用格式；
- tool call Schema；
- fallback 错误分类；
- 最大请求体积；
- token/成本统计；
- 认证和凭据池策略。

### 7.7 审批与权限设计将比模型能力更早成为商业化瓶颈

OpenClaw、Hermes Agent、LobsterAI 都涉及审批复用与权限边界。未来 Agent 一旦真正操作文件、浏览器和业务系统，关键问题将是：

- 授权能否按会话、Profile 和工具隔离；
- 是否支持一次性与持久授权；
- 路径、符号链接和进程身份如何规范化；
- 凭据轮换是否影响会话；
- 审批失败是否可恢复且可解释。

这部分很可能成为个人 Agent 生态下一轮差异化竞争点。

---

## 结论与决策建议

### 生态判断

当前生态可以归纳为：

1. **OpenClaw 领跑社区规模和功能广度，但可靠性债务最重；**
2. **QwenPaw 与 Hermes Agent 处于快速平台化阶段；**
3. **OpenHuman 正围绕工作流和个人记忆形成差异化；**
4. **NanoBot 已进入稳定交付阶段；**
5. **PicoClaw 与 LobsterAI 更偏垂直、轻量或桌面场景，但交付闭环不足；**
6. **IronClaw 需要单独核查项目状态。**

### 对技术决策者

- **需要现有多渠道和自动化能力**：优先评估 OpenClaw，但必须先验证 Windows、SQLite 和升级恢复。
- **需要桌面 Agent 工作台与模型实验**：重点评估 QwenPaw。
- **需要插件生态和长期上下文设计**：重点跟踪 Hermes Agent。
- **需要本地工作流和持续记忆**：重点评估 OpenHuman。
- **需要轻量 Python 部署**：NanoBot 的综合工程收敛度较好。
- **资源受限或边缘设备**：PicoClaw 场景匹配度高，但需接受维护和发布风险。
- **中文桌面与 Computer Use**：LobsterAI 更贴近产品化使用。

### 对个人 AI 助手开发者

未来版本不应优先堆叠更多 Provider 或 UI，而应优先建设：

1. 持久化任务状态机；
2. 幂等保存和可靠事件投递；
3. Provider 能力矩阵与错误分类；
4. 插件隔离和版本生命周期；
5. Windows 安装—升级—恢复测试；
6. 可追溯压缩与记忆召回；
7. 审批、凭据和安全根目录的一致隔离。

**最具决定性的竞争点，已经从“Agent 会回答什么”，转向“Agent 能否持续、可信、可恢复地把事情做完”。**

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目动态日报

**日期：2026-10-28**  
**统计范围：过去 24 小时**  
**数据源：GitHub Issues / Pull Requests / Releases**

---

## 一、今日速览

过去 24 小时 NanoBot 共更新 **3 条 Issue**、**23 条 PR**，其中 Issue **3 条均已关闭**，PR **15 条已关闭/合并、8 条待处理**，整体呈现“**问题快速收敛、修复集中落地、版本尚未发布**”的状态。  
今日重点集中在 **Windows 稳定性、WebUI 交互与消息持久化、Agent 异常隔离、Discord 通知优化和发布准备**等方面，说明项目正在从功能开发逐步转向可靠性打磨。  
Windows WebUI 内存泄漏问题已通过 PR #6507 定位并关闭，涉及 `ctypes` 指针缓存导致的持续增长，是今日最值得关注的稳定性事件。  
项目已有 **0.4.0 发布准备 PR #6504**，但尚未形成正式 Release；当前 8 个待处理 PR 中包含版本发布、Discord 推送、分页、Web 搜索 Provider 等方向。  
从数据看，项目开发活跃度较高、问题响应速度较好，但由于版本发布尚未落地，且仍有若干高优先级 PR 待审，整体健康度评估为 **良好，但发布与合并节奏仍需关注**。

---

## 二、项目进展

### 1. Windows WebUI 内存泄漏修复

[#6507 fix(runtime): stop Windows identity polling memory leak](https://github.com/HKUDS/nanobot/pull/6507)  
**状态：已关闭**

该 PR 针对 Issue [#6506](https://github.com/HKUDS/nanobot/issues/6506)：

- 定位到 Windows 下 Python 3.14 之前，进程身份查询会不断创建新的 `FileTime` 结构；
- `ctypes` 全局指针缓存持有这些对象，导致 WebUI 启动器和 Gateway 客户端轮询时内存持续增长；
- 修复方向是复用 native pointer 类型，避免无限累积。

这是今日最重要的稳定性改进，直接回应了用户反馈的“WebUI 长时间空闲后 Python 进程占用超过 5 GB”问题。

### 2. Windows 文本换行写入修复

[#6475 fix(utils): preserve exact newlines in atomic text writes](https://github.com/HKUDS/nanobot/pull/6475)  
**状态：已关闭**

该 PR 修复 Issue [#6474](https://github.com/HKUDS/nanobot/issues/6474)：

- `atomic_write_text` 原先在 Windows 上会将 LF 转换为 CRLF；
- 对已有 CRLF 文本还可能进一步生成 `CRCRLF`；
- 修复通过以 `newline=""` 打开临时文件，确保写入内容保持原始换行；
- 保留原有的 flush、`fsync` 和原子替换机制。

该修复涉及 cron、trigger 持久化及自动化运行记录，能够降低 Windows 环境下配置和运行记录被意外改写的风险。

### 3. Agent 内联命令异常隔离

[#6497 fix(agent): isolate inline command failures](https://github.com/HKUDS/nanobot/pull/6497)  
**状态：待合并 / OPEN**

该 PR 聚焦 `/status` 等在 `AgentLoop.run()` 中直接执行的内联命令：

- 当前这些命令运行在 session worker 的异常处理范围之外；
- 会话加载或 runtime 解析异常可能逃逸至 command handler；
- 极端情况下会导致 consumer 终止，并触发 `aclose()`，进而取消活跃任务。

从优先级标记看，该 PR 为 **P1**，是当前待处理项中风险最高、最值得优先审阅的修复之一。

### 4. Discord 步骤更新不再触发通知 ping

[#6493 feat(discord): send step updates without notification pings](https://github.com/HKUDS/nanobot/pull/6493)  
**状态：待合并 / OPEN**

在开启 streaming 后，Discord 可能对进度文本、工具提示和中间消息逐条发送通知。PR 试图让步骤更新静默推送，仅对最终答案保留显著通知，从而：

- 减少一次普通提问产生的 3–6 次无价值 ping；
- 降低关键答案被进度消息淹没的概率；
- 改善长时间运行任务的 Discord 使用体验。

### 5. 0.4.0 发布准备

[#6504 chore(release): prepare 0.4.0](https://github.com/HKUDS/nanobot/pull/6504)  
**状态：待合并 / OPEN**

该 PR 基于已合并的 `main` 提交准备 **0.4.0**，并说明：

- 候选版本准备和当前 HEAD 验证已经完成；
- Dock 窗口复用 #6377、重试机制重设计 #6367 仍作为独立事项；
- 独立审查和发布批准尚未完成。

目前 **没有正式 Release**，因此 0.4.0 尚未发布。

### 6. WebUI 架构与交互改进

今日已关闭或更新的多项 PR 集中在 WebUI：

- [#6500 fix(webui): retain history touch gestures across message replacement](https://github.com/HKUDS/nanobot/pull/6500)：修复消息节点被 React 替换后，历史下拉触摸事件丢失的问题。
- [#6502 fix(webui): keep Dock taps working after touch drags](https://github.com/HKUDS/nanobot/pull/6502)：修复快速触摸拖动后 Chromium fling 残留，导致 Dock 无法重新打开。
- [#6501 fix(webui): preserve wrapping in numbered code blocks](https://github.com/HKUDS/nanobot/pull/6501)：修复带行号代码块中中文和路径显示异常的问题。
- [#6495 fix(webui): stabilize interaction tests and tooltip dismissal](https://github.com/HKUDS/nanobot/pull/6495)：修复 Dock 提示层残留、Escape 键被拦截等交互问题。
- [#6496 fix(webui): remove ellipses from sending labels](https://github.com/HKUDS/nanobot/pull/6496)：统一 10 种语言环境下的发送状态文案。
- [#6490 fix(webui): show context and reasoning for all presets](https://github.com/HKUDS/nanobot/pull/6490)：让主模型、fallback 和禁用 preset 显示上下文长度与推理强度，便于比较。
- [#6487 fix(webui): open subtask details from task content](https://github.com/HKUDS/nanobot/pull/6487)：扩大子任务详情可点击区域。
- [#6494 fix(agent): preserve streamed replies after model failures](https://github.com/HKUDS/nanobot/pull/6494)：模型流式输出已经显示但最终事件失败时，保留用户已经看到的回复，避免后续持久化只剩错误占位符。

此外，以下两项仍待处理：

- [#6412 refactor(webui): unify code and diff highlighting](https://github.com/HKUDS/nanobot/pull/6412)：统一代码、预览和 diff 高亮路径，同时恢复单会话预览布局；当前存在冲突。
- [#6482 refactor(webui): centralize outbound delivery](https://github.com/HKUDS/nanobot/pull/6482)：集中管理 WebUI 出站展示、流状态、持久化策略和 delivery-turn completion，降低 WebSocket 通道与业务逻辑耦合。

### 7. 其他功能与 Provider 扩展

- [#6499 feat(web): add google-browser-scraper as a web_search provider](https://github.com/HKUDS/nanobot/pull/6499)  
  **状态：待合并**  
  新增 `google-browser-scraper` 作为 `web_search` Provider，通过真实浏览器和用户代理执行 Google 搜索，并提供类似 SerpApi 的本地 JSON 接口。

- [#6315 feat(sessions): add optional pagination to list_sessions](https://github.com/HKUDS/nanobot/pull/6315)  
  **状态：待合并**  
  为 `list_sessions` 增加可选 `offset` 和 `limit` 参数，使 Agent 可以按页获取 session handle，同时保持默认全量列表及 JSON 数组返回格式不变。

- [#6498 refactor(channels): move tool hint rendering out of core](https://github.com/HKUDS/nanobot/pull/6498)  
  **状态：待合并**  
  将工具活动提示的具体渲染从核心层移至各聊天渠道，使核心层只负责描述事件，不再统一决定所有平台的展示方式。

### 进展评价

今日 PR 处理量较高，且多数变更附带测试或明确的回归修复，说明维护重点已明显偏向 **生产稳定性、跨平台兼容性和 WebUI 细节体验**。  
不过，部分高价值 PR 仍处于 OPEN，尤其是 [#6497](https://github.com/HKUDS/nanobot/pull/6497) 的 P1 异常隔离修复和 [#6504](https://github.com/HKUDS/nanobot/pull/6504) 的 0.4.0 发布准备，说明“开发完成”与“正式交付”之间仍有审查、合并和发布确认环节。

---

## 三、社区热点

> 今日提供的数据中，Issue/PR 评论数字段大多为 `undefined`，因此无法严格按评论数排序。以下按今日新增问题、修复影响范围和公开讨论可见度进行归纳。

### 1. Windows WebUI 内存泄漏

- Issue：[#6506 [bug] nanobot webui has a memory leak on Windows 11](https://github.com/HKUDS/nanobot/issues/6506)
- Fix PR：[#6507 fix(runtime): stop Windows identity polling memory leak](https://github.com/HKUDS/nanobot/pull/6507)

**讨论核心：**  
用户报告 Windows 11 上使用 WebUI 启动进程后，窗口长时间空闲，次日 Python 进程内存超过 5 GB。该问题直接影响长期运行场景，属于高影响稳定性缺陷。

**当前状态：**  
Issue 已关闭，修复 PR 已关闭，说明问题已获得快速响应并完成处理。

### 2. Windows 原子写入换行异常

- Issue：[#6474 atomic_write_text doubles CR in CRLF text on Windows](https://github.com/HKUDS/nanobot/issues/6474)
- Fix PR：[#6475 fix(utils): preserve exact newlines in atomic text writes](https://github.com/HKUDS/nanobot/pull/6475)

**讨论核心：**  
用户指出 `atomic_write_text` 的文档承诺“写入精确 UTF-8 文本”，但在原生 Windows 和 Python 3.13.9 下会改变换行格式，影响 cron/trigger 和自动化运行记录。

**当前状态：**  
已有对应修复 PR，Issue 已关闭。

### 3. WebUI 无法修改已有会话的项目目录

- Issue：[#6505 WebUI: allow changing an existing chat's project directory](https://github.com/HKUDS/nanobot/issues/6505)
- 当前状态：**已关闭**

**讨论核心：**  
用户希望在会话已经发送消息后，仍能切换项目工作目录。目前目录选择器仅在空会话中可见，已有主题无法迁移到其他目录，只能通过其他方式处理。

**判断：**  
这是一个明确的工作流可用性需求。Issue 虽已关闭，但当前展示的 PR 列表中没有明确对应的功能 PR，可能是通过现有代码调整、其他未展示 PR 或维护者讨论完成，建议后续确认该能力是否已进入当前版本。

### 4. Discord streaming 产生大量通知

- PR：[#6493 feat(discord): send step updates without notification pings](https://github.com/HKUDS/nanobot/pull/6493)
- 状态：**待合并**

**讨论核心：**  
步骤更新不应与最终答案具有同等通知权重。普通问题可能产生 3–6 次中间通知，掩盖真正答案。该 PR 代表渠道层的“减少噪声、突出结果”方向。

### 5. 0.4.0 发布候选

- PR：[#6504 chore(release): prepare 0.4.0](https://github.com/HKUDS/nanobot/pull/6504)
- 状态：**待合并**

**讨论核心：**  
发布准备已基本完成，但独立审查和发布批准尚未完成。该 PR 是当前版本交付的关键节点。

---

## 四、Bug 与稳定性

按严重程度和影响范围排序：

### P1 / 高优先级

#### Agent 内联命令异常可能导致消费者退出

- PR：[#6497 fix(agent): isolate inline command failures](https://github.com/HKUDS/nanobot/pull/6497)
- 状态：**待合并，暂无对应关闭记录**
- 影响：`/status` 等内联命令异常可能终止 consumer，并取消活跃任务。
- 判断：属于运行时稳定性问题，建议列为最高优先级合并项。

### P2 / 中高优先级

#### Windows WebUI 内存泄漏

- Issue：[#6506](https://github.com/HKUDS/nanobot/issues/6506)
- Fix：[#6507](https://github.com/HKUDS/nanobot/pull/6507)
- 状态：**已有 fix PR，Issue 与 PR 均已关闭**
- 影响：长期运行的 Windows WebUI 进程可能持续增长至数 GB。

#### Windows 文本写入换行被破坏

- Issue：[#6474](https://github.com/HKUDS/nanobot/issues/6474)
- Fix：[#6475](https://github.com/HKUDS/nanobot/pull/6475)
- 状态：**已有 fix PR，Issue 与 PR 均已关闭**
- 影响：cron、trigger 和自动化运行记录在 Windows 上可能出现内容或格式偏差。

#### 模型流式输出失败后回复未正确持久化

- PR：[#6494 fix(agent): preserve streamed replies after model failures](https://github.com/HKUDS/nanobot/pull/6494)
- 状态：**已关闭**
- 影响：浏览器中已显示回复，但服务端只保存错误占位符，后续对话上下文与用户所见不一致。

#### WebSocket 握手期间客户端断连

- PR：[#6348 fix(websocket): abort disconnected HTTP handshakes before sending](https://github.com/HKUDS/nanobot/pull/6348)
- 状态：**已关闭**
- 影响：客户端断开后仍尝试发送响应，可能触发内部错误日志；在 websockets 15/16 和飞书场景下尤其明显。

### P2 / 一般 WebUI 回归问题

以下问题均已有已关闭的修复 PR：

- 历史消息替换导致触摸下拉失效：[#6500](https://github.com/HKUDS/nanobot/pull/6500)
- 触摸拖动后 Dock 点击失效：[#6502](https://github.com/HKUDS/nanobot/pull/6502)
- 编号代码块中文与路径排版异常：[#6501](https://github.com/HKUDS/nanobot/pull/6501)
- Dock 提示层拦截 Escape、交互测试不稳定：[#6495](https://github.com/HKUDS/nanobot/pull/6495)
- 子任务内容区域无法打开详情：[#6487](https://github.com/HKUDS/nanobot/pull/6487)
- 发送状态文案不一致：[#6496](https://github.com/HKUDS/nanobot/pull/6496)
- 模型 preset 信息展示不完整：[#6490](https://github.com/HKUDS/nanobot/pull/6490)

整体看，今日 Bug 类型以 **平台差异、WebUI 触摸交互、流式异常边界和持久化一致性** 为主；多数已有明确修复路径。

---

## 五、功能请求与路线图信号

### 1. 会话列表分页

- PR：[#6315 feat(sessions): add optional pagination to list_sessions](https://github.com/HKUDS/nanobot/pull/6315)
- 状态：**待合并**
- 需求：为 Agent 提供按页读取 session handle 的能力，避免会话数量增长后一次性加载过多数据。
- 路线图判断：这是一个向后兼容、范围明确的基础设施增强，若审查通过，较可能进入后续版本。

### 2. 新增 Google 浏览器搜索 Provider

- PR：[#6499 feat(web): add google-browser-scraper as a web_search provider](https://github.com/HKUDS/nanobot/pull/6499)
- 状态：**待合并**
- 需求：扩充 Web 搜索来源，并允许通过真实浏览器及用户代理执行搜索。
- 路线图判断：体现 Provider 生态继续扩展，但引入浏览器和本地服务依赖，合并前需要重点确认部署复杂度、资源占用、错误处理和安全边界。

### 3. Discord 静默步骤更新

- PR：[#6493 feat(discord): send step updates without notification pings](https://github.com/HKUDS/nanobot/pull/6493)
- 状态：**待合并**
- 需求：中间进度消息不触发通知，仅最终答案触发。
- 路线图判断：直接改善渠道体验，技术目标明确；若测试覆盖充分，可能纳入近期版本。

### 4. 渠道层工具提示渲染解耦

- PR：[#6498 refactor(channels): move tool hint rendering out of core](https://github.com/HKUDS/nanobot/pull/6498)
- 状态：**待合并**
- 需求：不同渠道自行决定工具调用提示的展示方式。
- 路线图判断：属于可扩展性架构升级，有利于后续支持更多平台，但需确保现有渠道行为不回归。

### 5. 0.4.0 候选版本

- PR：[#6504 chore(release): prepare 0.4.0](https://github.com/HKUDS/nanobot/pull/6504)
- 状态：**待合并**
- 路线图判断：今日最明确的版本信号。当前尚无正式 Release，说明下一版本已进入候选准备阶段，但发布审批未完成。

### 6. 已有会话切换项目目录

- Issue：[#6505](https://github.com/HKUDS/nanobot/issues/6505)
- 状态：**已关闭**
- 路线图判断：明确体现 WebUI 对“会话与项目目录解耦”的需求。若对应能力尚未合入，值得在后续版本中继续跟踪。

---

## 六、用户反馈摘要

### 真实使用场景

1. **Windows 11 长时间运行 WebUI**  
   用户启动任务并进行少量交互后让窗口持续空闲，次日发现 Python 进程占用超过 5 GB。该场景说明 WebUI 已被用于长时间驻留和自动化任务，而不仅是短时聊天。

2. **Windows 上持久化 cron、trigger 与自动化记录**  
   用户在原生 Windows、Python 3.13.9 环境验证换行行为，说明这些自动化功能已有人实际依赖，文本保真度是明确的质量要求。

3. **已有对话迁移到其他项目目录**  
   用户希望在会话发送首条消息后继续调整工作目录，反映出多项目并行使用时，“对话内容与项目路径绑定过紧”影响工作流。

### 主要痛点

- **资源泄漏：**长期运行后内存占用不可接受。
- **跨平台一致性：**Windows 下换行转换与文档承诺不符。
- **工作流灵活性：**已有会话无法在 UI 中重新绑定项目目录。
- **渠道噪声：**Discord 将中间步骤等同于最终答案通知。
- **状态一致性：**流式回复可见但持久化内容可能不一致。

### 满意度与反馈倾向

- 今日公开 Issue 均为问题报告，未出现大量表扬、体验改进建议或明确满意度评价。
- 3 条 Issue 全部关闭，且关键问题都有对应修复 PR，表明用户反馈后的处理速度较好。
- 由于数据未提供 Issue 正文中的完整评论，目前无法确认关闭原因、修复版本和用户是否确认问题已解决。

---

## 七、待处理积压

### 1. P1 Agent 异常隔离修复尚未合并

- [#6497 fix(agent): isolate inline command failures](https://github.com/HKUDS/nanobot/pull/6497)
- 创建时间：2026-10-27
- 当前状态：OPEN
- 风险：可能导致消费者退出和任务取消，建议优先审阅并明确是否纳入 0.4.0。

### 2. 0.4.0 发布准备尚未合并

- [#6504 chore(release): prepare 0.4.0](https://github.com/HKUDS/nanobot/pull/6504)
- 创建时间：2026-10-27
- 当前状态：OPEN
- 风险：版本已完成候选准备，但缺少独立审查与发布批准。

### 3. WebUI 统一高亮重构存在冲突

- [#6412 refactor(webui): unify code and diff highlighting](https://github.com/HKUDS/nanobot/pull/6412)
- 创建时间：2026-10-23
- 当前状态：OPEN，且标注 **conflict**
- 风险：该 PR 涉及代码高亮、预览和 diff 展示等核心阅读体验，冲突持续存在可能扩大合并成本。

### 4. 会话分页功能等待审查

- [#6315 feat(sessions): add optional pagination to list_sessions](https://github.com/HKUDS/nanobot/pull/6315)
- 创建时间：2026-10-19
- 当前状态：OPEN
- 风险：已通过相关测试，但待合并时间较长；属于 Agent 会话规模化的基础能力。

### 5. Discord 静默步骤更新等待审查

- [#6493 feat(discord): send step updates without notification pings](https://github.com/HKUDS/nanobot/pull/6493)
- 创建时间：2026-10-27
- 当前状态：OPEN
- 风险：直接影响通知体验，建议明确平台行为、最终消息识别规则和回归测试结果。

### 6. Google Browser Scraper Provider 等待审查

- [#6499 feat(web): add google-browser-scraper as a web_search provider](https://github.com/HKUDS/nanobot/pull/6499)
- 创建时间：2026-10-27
- 当前状态：OPEN
- 风险：涉及浏览器进程、本地服务、代理与外部搜索源，需确认依赖、许可证、资源占用和部署要求。

### 7. WebUI 出站投递集中化重构待推进

- [#6482 refactor(webui): centralize outbound delivery](https://github.com/HKUDS/nanobot/pull/6482)
- 创建时间：2026-10-26
- 当前状态：OPEN
- 风险：涉及 WebSocket 投递、流状态和持久化策略，是结构性改动，合并周期通常较长。

### 8. 渠道工具提示渲染解耦待推进

- [#6498 refactor(channels): move tool hint rendering out of core](https://github.com/HKUDS/nanobot/pull/6498)
- 创建时间：2026-10-27
- 当前状态：OPEN
- 风险：需要验证 Discord、飞书及其他渠道在重构后保持一致表现。

---

## 结论

NanoBot 今日呈现出较高的修复吞吐量和较强的社区响应速度，尤其是 Windows 兼容性、WebUI 触摸交互及流式回复持久化问题均获得了针对性处理。  
项目的主要风险已经从“明显功能缺口”转向“待合并变更的审查与发布执行”：P1 Agent 修复、0.4.0 发布候选以及多个 WebUI/Provider 重构仍在队列中。  
建议维护者优先完成 [#6497](https://github.com/HKUDS/nanobot/pull/6497) 的 P1 修复验证，再确认 [#6504](https://github.com/HKUDS/nanobot/pull/6504) 的发布范围，并同步处理存在冲突的 [#6412](https://github.com/HKUDS/nanobot/pull/6412)。整体项目健康度可评为 **良好（活跃、响应快、稳定性持续改善，但发布节奏与关键 PR 合并仍需跟进）**。

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目动态日报

**统计日期：2026-10-28**  
**数据范围：过去 24 小时 GitHub 更新**

## 1. 今日速览

- 过去 24 小时共更新 **2 个 Issues**、**2 个 PR**，均有活跃讨论或提交动作，整体活跃度为**中等偏高**。
- 项目当前更偏向**问题修复与兼容性扩展**：PR 主要针对 Anthropic 模型调用失败和 Discord 网关死锁；Issue 则关注 Android 老旧设备支持。
- **今日没有 PR 合并或关闭，也没有新版本发布**，因此今日没有形成可立即交付的版本进展。
- 社区对项目维护连续性的关注明显上升，有用户已建立主动维护的 Fork，表明现有仓库的维护响应和方向沟通仍有改善空间。
- 综合评估：问题发现和社区参与保持活跃，但合并、发布及维护闭环偏弱，项目健康度暂评为**中等偏谨慎**。

---

## 3. 项目进展

### Anthropic thinking-always 模型兼容性修复

[#3447 — fix(anthropic): make claude-haiku-5-5 (thinking-always models) work with token credentials](https://github.com/sipeed/picoclaw/pull/3447)

- PR 于 10 月 24 日创建，10 月 28 日仍有更新，当前保持开放状态。
- 目标是在使用 **Anthropic token credentials** 调用 `claude-haiku-5-5` 等始终开启 thinking 的模型时，不再因发送已弃用的 `temperature` 参数而收到 HTTP 400。
- 这属于模型接入层的兼容性修复，可降低新模型接入失败和凭据调用不可用的概率。
- 截至日报生成时，**尚未合并**，因此修复尚未进入正式发布版本。

### Discord 网关握手死锁修复

[#3452 — fix(discord): bump discordgo fork past the gateway handshake deadlock](https://github.com/sipeed/picoclaw/pull/3452)

- PR 于 10 月 28 日创建并更新，主要处理 Discord 通道“表面连接、实际失联”的问题。
- PR 指出，现用 `discordgo` Fork 的固定提交 `yeongaori/discordgo-fork@e8e546f` 存在网关握手死锁：机器人可能显示已连接，但无法收发消息、不发送心跳且没有明显日志。
- 修复方向是升级到包含该死锁修复的 Fork 版本，属于运行时稳定性和通道可用性改进。
- 当前 PR 仍开放，**尚未合并或发布**。

### 今日整体推进程度

- 今日有 **2 项具备明确交付价值的技术修复进入活跃 PR 状态**，覆盖模型 API 兼容性和 Discord 通道稳定性。
- 但没有 PR 完成合并，也没有 Release，因此从“代码推进”到“用户可获得版本”的转化尚未完成。
- 若两项 PR 均通过验证并合并，预计可显著改善多模型调用与 Discord 长期运行场景，但仍需等待下一次版本发布。

---

## 4. 社区热点

### 讨论最活跃：主动维护 Fork 提议

[#3417 — Active Fork & Continued Maintenance: afjcjsbx/picoclaw](https://github.com/sipeed/picoclaw/issues/3417)

- 创建于 10 月 6 日，10 月 27 日更新，累计 **3 条评论**，是本期唯一有明确评论记录的 Issue/PR。
- 发起人认为主仓库可能处于缺乏维护状态，但社区仍有明显使用和贡献需求，因此建立并主动维护 Fork：
  - [afjcjsbx/picoclaw](https://github.com/afjcjsbx/picoclaw)
- 热点背后的核心诉求不是单纯技术问题，而是：
  1. 用户担心项目失去维护；
  2. 希望已有 Issue 和 PR 有人持续跟进；
  3. 需要明确后续维护主体、版本发布节奏和 Issue/PR 接收策略。
- 这是今日最值得维护者响应的社区信号。若长期不说明维护安排，类似 Fork 行为可能继续增加，并造成贡献者分流。

### 新增兼容性需求：Android API 19

[#3451 — Add Android API 19 support for x86_32 and x86_64 architectures](https://github.com/sipeed/picoclaw/issues/3451)

- 10 月 27 日新建并更新，目前没有评论。
- 用户希望 PicoClaw 支持运行 **Android 4.4（API 19）** 的老旧或模拟器设备，架构覆盖 **x86_32** 和 **x86_64**。
- 典型使用场景包括旧电视盒子、平板和单板计算机，这些设备仍有存量使用需求。
- 该 Issue 体现项目正在从较新的移动设备环境向更广泛的边缘硬件兼容范围扩展。

### 其他热点

- [#3447 Anthropic thinking-always 模型兼容性修复](https://github.com/sipeed/picoclaw/pull/3447)：今日更新的技术型 PR，直接影响新模型与 token 凭据调用成功率。
- [#3452 Discord 网关握手死锁修复](https://github.com/sipeed/picoclaw/pull/3452)：今日新建 PR，属于通道级稳定性问题，可能影响所有依赖 Discord 的长期运行实例。

---

## 5. Bug 与稳定性

### 高严重度：Discord 通道永久失联

- 关联 PR：[#3452](https://github.com/sipeed/picoclaw/pull/3452)
- 现象：机器人显示“已连接”，但消息无法收发；心跳停止，且缺少有效错误日志。
- 影响：Discord 集成可能静默失效，对依赖该通道的自动化、通知和交互场景影响较大。
- 原因：固定的 `discordgo` Fork 提交存在网关握手死锁。
- **修复状态：已有 fix PR，但尚未合并或发布。**

### 中高严重度：Anthropic thinking-always 模型调用失败

- 关联 PR：[#3447](https://github.com/sipeed/picoclaw/pull/3447)
- 现象：使用 token 凭据调用 `claude-haiku-5-5` 等模型时，返回 HTTP 400，提示 `temperature` 已弃用。
- 影响：相关新模型无法通过现有配置正常使用；由于属于请求参数兼容问题，故障会在调用时稳定出现。
- **修复状态：已有 fix PR，但尚未合并或发布。**

### 中低严重度：Android 4.4 平台与架构兼容性不足

- 关联 Issue：[#3451](https://github.com/sipeed/picoclaw/issues/3451)
- 现象：PicoClaw 当前未覆盖 Android API 19 的 x86_32/x86_64 环境。
- 影响：部分旧电视盒子、平板和 SBC 用户无法运行或无法获得受支持的部署路径。
- **修复状态：目前仅为功能/兼容性问题，尚无明确 fix PR。**

---

## 6. 功能请求与路线图信号

### Android API 19 与 x86 架构支持

- 需求来源：[#3451](https://github.com/sipeed/picoclaw/issues/3451)
- 用户目标：支持 Android 4.4 API 19，覆盖 32 位和 64 位 x86 架构。
- 可能涉及：
  - Android 构建配置的最低 API 版本调整；
  - x86_32/x86_64 编译目标；
  - 第三方依赖对旧 API 的兼容检查；
  - 旧设备上的启动、权限和运行测试。
- **下一版本纳入可能性：中等。** 该需求有明确设备和架构场景，但尚未形成 PR 或维护者确认；最低 API 调整可能牵涉依赖升级与测试成本。

### Anthropic 新模型与认证方式兼容

- 来源：[#3447](https://github.com/sipeed/picoclaw/pull/3447)
- 信号：项目需要建立更稳定的模型能力探测机制，避免对 thinking-always 模型继续发送已弃用参数。
- **下一版本纳入可能性：较高。** 已有针对性 PR，改动目标明确，预计更适合作为兼容性或缺陷修复进入近期版本。

### Discord 通道依赖升级

- 来源：[#3452](https://github.com/sipeed/picoclaw/pull/3452)
- 信号：Discord 通道稳定性对长期部署非常关键，同时暴露出固定依赖提交可能产生静默故障的问题。
- **下一版本纳入可能性：较高。** 已有明确根因和依赖升级方案；合并前应重点验证重连、心跳、消息收发和长时间运行表现。

---

## 7. 用户反馈摘要

### 用户痛点与使用场景

- **旧硬件仍有较大存量**：用户明确提到旧电视盒子、平板及单板计算机仍在运行 Android 4.4，且存在 x86 架构设备，说明兼容性覆盖不足仍影响实际部署。
  - 来源：[#3451](https://github.com/sipeed/picoclaw/issues/3451)
- **新模型接入可能因参数差异失败**：Anthropic thinking-always 模型配合 token 凭据时，PicoClaw 仍发送 `temperature`，导致调用直接失败。
  - 来源：[#3447](https://github.com/sipeed/picoclaw/pull/3447)
- **Discord 故障缺少可观测性**：机器人静默失联且没有有效日志，会增加用户定位和恢复成本。
  - 来源：[#3452](https://github.com/sipeed/picoclaw/pull/3452)
- **维护状态不确定**：用户因担忧仓库缺少持续维护而创建 Fork，并主动提出延续项目发展，反映部分用户对项目长期可用性缺乏信心。
  - 来源：[#3417](https://github.com/sipeed/picoclaw/issues/3417)

### 满意度与不满意点

- 本期没有足量评论、点赞或关闭反馈，无法对整体满意度作出可靠量化判断。
- 可以确认的积极信号是：
  - 用户仍主动提交具体架构和设备场景；
  - 社区成员愿意直接提交修复 PR；
  - 有用户愿意承担 Fork 后的持续维护工作。
- 主要不满意点集中于**维护连续性、跨版本设备兼容性，以及通道/模型适配稳定性**。
- 所有反馈来源：
  - [#3417](https://github.com/sipeed/picoclaw/issues/3417)
  - [#3451](https://github.com/sipeed/picoclaw/issues/3451)
  - [#3447](https://github.com/sipeed/picoclaw/pull/3447)
  - [#3452](https://github.com/sipeed/picoclaw/pull/3452)

---

## 8. 待处理积压

### 优先响应：主动维护 Fork 与项目治理

- 事项：[#3417](https://github.com/sipeed/picoclaw/issues/3417)
- 重要性：这是本期评论最多、持续时间较长的社区 Issue，直接关系项目维护归属和贡献者信任。
- 建议维护者明确：
  1. 主仓库当前是否仍积极维护；
  2. Issue、PR 与 Release 的处理计划；
  3. 是否需要迁移、合并或协调 Fork；
  4. 社区贡献和治理规则。
- 风险：长期不回应可能进一步分散 Issue、PR 和用户群体。

### 高优先级：Discord 死锁修复的审查与验证

- 事项：[#3452](https://github.com/sipeed/picoclaw/pull/3452)
- 重要性：问题会表现为静默失联，可能影响生产环境，但新 PR 尚无明确评审结果。
- 建议关注：死锁修复是否确实包含在目标 Fork 提交中，以及是否完成网关握手、断线重连、心跳和消息往返测试。

### 高优先级：Anthropic 兼容修复的合并

- 事项：[#3447](https://github.com/sipeed/picoclaw/pull/3447)
- 重要性：新模型接入失败直接影响核心 AI 调用能力。
- 建议关注：除删除不兼容参数外，是否应按模型能力动态构造请求，以及是否需要补充不同认证方式和不同 thinking 模型组合的回归测试。

### 中优先级：Android API 19 支持的可行性确认

- 事项：[#3451](https://github.com/sipeed/picoclaw/issues/3451)
- 重要性：已有明确存量设备场景，但尚无实现方案。
- 建议维护者给出初步可行性结论，明确依赖限制、构建要求和可接受的测试设备，避免 Issue 长期停留在提议阶段。

---

**健康度结论：** PicoClaw 今日技术讨论方向明确，社区仍有较强的问题发现和修复意愿；但“无人维护”的外部感受、未合并 PR 数量增加以及缺少新版本发布，是当前最主要的健康风险。短期应优先推动 [#3447](https://github.com/sipeed/picoclaw/pull/3447) 与 [#3452](https://github.com/sipeed/picoclaw/pull/3452) 完成验证和合并，同时尽快回应 [#3417](https://github.com/sipeed/picoclaw/issues/3417) 的项目治理诉求。

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI 项目动态日报

**日报日期：2026-10-28**  
**数据范围：过去 24 小时 GitHub Issues / Pull Requests 更新**

---

## 1. 今日速览

过去 24 小时，项目共更新 **2 条 Issues** 和 **3 条 PR**，整体活跃度为**中等偏低但聚焦**：讨论主要集中在账号封禁申诉，以及断网恢复后停止按钮状态异常等用户体验问题。  
今日共有 **2 条 PR 关闭**，其中包括 Mac 技能依赖按目标架构隔离的打包修复，以及 Cowork 大段粘贴内容折叠功能；另有 **1 条 Windows Computer Use 审批复用 PR 仍待合并**。  
Issues 侧，**1 条账号误封申诉仍处于开放状态**，涉及两个无法登录或使用的账号；另一条断网恢复后无法中断 AI 回复的 Bug 已在今日关闭。  
过去 24 小时**没有新版本发布**，因此当前修复与功能暂未形成可确认的正式版本交付。综合来看，项目今日仍持续推进工程稳定性与交互体验，但发布节奏和用户问题闭环速度有限。

---

## 2. 版本发布

过去 24 小时**无新版本发布**。

今日关闭或待合并的改动尚未对应到新 Release，暂无法确认以下内容何时进入正式版本：

- Mac 技能依赖按目标架构隔离的打包修复；
- Cowork 大段粘贴内容卡片与历史消息折叠；
- Windows Computer Use 会话审批复用。

---

## 3. 项目进展

### PR #2946：Cowork 大段粘贴内容折叠功能已关闭

- **状态：CLOSED**
- **涉及范围：** Renderer、Main、Cowork
- **链接：** https://github.com/netease-youdao/LobsterAI/pull/2946

该 PR 对 Cowork 的长文本输入与展示链路进行了较完整改造：

- 将输入框中的大段粘贴内容转换为可预览的“粘贴文本”卡片；
- 提交时以带标签的块嵌入 Prompt；
- 模型输入、排队消息、导出和历史记录保留完整文本；
- 会话详情中的长用户消息支持折叠；
- 搜索、导出、会话标题及 `steer` 载荷均适配粘贴文本块；
- 同步调整 Subagent Tracker、Run Store 和 `openclawRuntimeAdapter`；
- 补充或更新了 `pastedText`、`userMessageCollapse`、`coworkPromptPayload`、`sessionExport`、`conversationSearch` 等 Vitest 测试。

**项目意义：** 该改动提升了长内容输入的可读性和会话管理效率，也降低了大段粘贴内容在 Prompt、历史记录及搜索场景中的处理复杂度。虽然 PR 已关闭，但从状态看属于合并后关闭的可能性较高；仍建议维护者确认对应变更已进入默认分支或后续 Release。

### PR #2948：Mac 技能依赖按目标架构隔离已关闭

- **状态：CLOSED**
- **涉及范围：** Build、macOS
- **链接：** https://github.com/netease-youdao/LobsterAI/pull/2948

该 PR 修复了 Mac 打包时技能依赖未按目标架构隔离的问题。

**项目意义：** 改动主要面向 macOS 构建与分发正确性，可降低不同架构产物之间的依赖污染风险，尤其可能改善 Apple Silicon 与 Intel 版本并存场景下的打包可靠性。

### PR #2947：Windows Computer Use 审批复用仍待合并

- **状态：OPEN**
- **涉及范围：** Main
- **关联 Issue：** https://github.com/netease-youdao/LobsterAI/issues/2895
- **链接：** https://github.com/netease-youdao/LobsterAI/pull/2947

该 PR 尝试复用同一 Windows Computer Use 会话中的审批：当同一可执行文件先以普通路径启动，随后又以 `process:<path>` 执行窗口操作时，不再重复请求用户授权。实现方向包括路径规范化及审批识别逻辑调整。

**项目意义：** 若合并，可减少 Computer Use 连续操作中的重复授权弹窗，提升自动化任务流畅度和用户信任感。该 PR 目前仍是今日唯一待合并项，也是近期较明确的稳定性与交互优化候选。

### 今日整体推进评估

今日约有 **3 个功能或修复方向**获得更新，涵盖 macOS 打包、Cowork 长文本体验和 Windows Computer Use 授权复用，体现出项目在工程质量和交互细节上的持续投入。  
不过，24 小时内没有 Release，正式交付节奏偏慢；PR 的关闭状态也不等同于已确认发布，因此当前更合理的判断是：**开发推进稳定，但版本落地与用户可感知更新不足。**

---

## 4. 社区热点

### Issue #2936：两个账号被封禁或异常，用户发起申诉

- **状态：OPEN**
- **评论数：5**
- **作者：** @7597qqme
- **链接：** https://github.com/netease-youdao/LobsterAI/issues/2936

这是今日评论最多、讨论最活跃的 Issue。

**核心诉求：**

- 用户称两个 LobsterAI 账号近期无法登录或使用，页面提示账号被封禁或状态异常；
- 用户声明没有恶意使用、刷接口或批量调用；
- 用户提到曾在第三方 DSH 插件 `dsh-comprehensive-platform / our-free-model` 中配置 LobsterAI 账号凭据，用于调用有道模型服务；
- 用户怀疑风控系统可能将第三方插件行为误判为异常使用，希望官方复核并恢复账号。

**背后诉求分析：**

1. **账号误判与申诉机制问题：** 用户真正需要的不是单纯解封，而是可追踪、可解释、可复核的封禁申诉流程。
2. **第三方插件兼容性风险：** 如果标准客户端凭据被第三方工具复用后触发风控，官方需要明确凭据共享、插件调用及账号责任边界。
3. **用户信任与可恢复性：** 封禁直接阻断核心使用场景，若缺少清晰原因和申诉时效，会显著降低用户信任。
4. **隐私诉求：** Issue 标题及正文对账号和 GitHub 信息进行了部分脱敏，说明用户对敏感身份信息外泄较为敏感。

**社区信号：** 账号风控、第三方集成规范和申诉透明度，可能比单个普通功能需求更值得优先处理。

### Issue #743：断网恢复后发送按钮未切换为停止按钮

- **状态：CLOSED**
- **评论数：1**
- **作者：** @STUPIDDDD0
- **链接：** https://github.com/netease-youdao/LobsterAI/issues/743

该 Issue 今日已关闭，详见“ Bug 与稳定性”。

### PR #2946：Cowork 大段粘贴内容折叠

- **状态：CLOSED**
- **链接：** https://github.com/netease-youdao/LobsterAI/pull/2946

这是今日功能覆盖范围最广的 PR，涉及输入、Prompt、会话历史、搜索、导出、排队消息及 Cowork 运行时适配，能够减少长文本输入对界面的挤压。其变更范围较大，也意味着合并后需要重点关注历史数据兼容、导出格式和 Steer 载荷回归。

---

## 5. Bug 与稳定性

### 中等：断网恢复后发送按钮状态未正确切换，用户无法中断回复

- **Issue：** [#743](https://github.com/netease-youdao/LobsterAI/issues/743)
- **状态：CLOSED**
- **严重程度：** Minor（🟡）
- **环境：** Windows 11、应用版本 `v2026.3.24`、有线网络
- **是否有明确 Fix PR：** **数据中未提供对应 Fix PR 链接，暂无法确认具体修复实现。**

**复现路径：**

1. 发起一个需要长回复的请求；
2. AI 流式回复期间断开网络；
3. 网络恢复后发送“继续”；
4. 发送按钮未切换为停止按钮，用户无法中断新回复。

**影响：**

- 断网重连后的 UI 状态可能未与会话运行状态同步；
- 用户失去停止生成的控制能力；
- 长回复场景下可能造成等待、重复发送或误操作风险。

**今日状态：** Issue 已关闭，表明问题已进入处理闭环；但因没有关联修复 PR 或 Release 信息，暂时无法确认修复是否已随正式版本发布。

### 中等：账号异常或封禁可能存在误判

- **Issue：** [#2936](https://github.com/netease-youdao/LobsterAI/issues/2936)
- **状态：OPEN**
- **严重程度：** 对单个用户影响较高，但整体范围尚不明确
- **是否有明确 Fix PR：** **无**

**影响：**

- 账号无法登录或调用服务，直接中断核心工作流；
- 可能影响使用第三方插件集成的用户；
- 若风控规则无法解释或申诉路径不透明，潜在影响可能从单账号问题扩大为信任问题。

**处理建议：**

- 优先人工复核 #2936；
- 明确第三方插件使用凭据时的风控边界；
- 在产品内提供封禁原因、处罚状态和申诉进度；
- 对类似案例建立误封回溯机制，避免只针对单个账号作临时解封。

### 低风险关注项：macOS 技能依赖架构隔离

- **PR：** [#2948](https://github.com/netease-youdao/LobsterAI/pull/2948)
- **状态：CLOSED**

该 PR 本身不是用户报告的运行时 Bug，而是构建与打包层面的潜在稳定性修复。其价值在于避免跨架构依赖污染；建议确认修复已进入默认分支，并纳入 macOS 发布前打包验证。

### Bug 趋势判断

今日没有报告崩溃、数据丢失或安全漏洞类严重事故，主要是**网络异常后的状态同步问题**和**账号风控误判问题**。  
Issue #743 已关闭，Bug 闭环表现尚可；但账号申诉仍开放，且缺少明确的产品化改进信号，稳定性治理仍有缺口。

---

## 6. 功能请求与路线图信号

### 高可信候选：Windows Computer Use 减少重复授权

- **PR：** [#2947](https://github.com/netease-youdao/LobsterAI/pull/2947)
- **关联 Issue：** [#2895](https://github.com/netease-youdao/LobsterAI/issues/2895)

该改动直接回应了同一可执行文件以不同路径形式调用时重复弹窗的问题。若测试覆盖充分、权限边界明确，**有较大概率进入下一版本**。

**建议关注：**

- 审批复用是否仅限同一会话；
- 路径大小写、符号链接、相对路径和规范化结果是否可能导致越权复用；
- 对不同可执行文件、不同进程实例是否仍保持隔离。

### 中高可信候选：Cowork 长粘贴内容卡片与历史折叠

- **PR：** [#2946](https://github.com/netease-youdao/LobsterAI/pull/2946)

该功能覆盖真实高频场景，可降低长文本对输入区的占用，同时保持模型输入和历史记录的完整性。鉴于变更已覆盖多类 Vitest 测试，**具备进入下一版本的基础条件**。

**建议关注：**

- 旧会话数据在没有粘贴文本块标签时是否仍可正常展示；
- 导出、搜索和标题生成是否对卡片内容保持语义一致；
- 大型粘贴文本是否影响流式渲染性能。

### 中可信候选：macOS 技能依赖架构隔离

- **PR：** [#2948](https://github.com/netease-youdao/LobsterAI/pull/2948)

这是构建正确性修复，若没有额外发布约束，通常应随下一次 macOS 构建或版本发布进入正式产物。

### 产品化需求：完善账号封禁申诉与状态透明度

- **Issue：** [#2936](https://github.com/netease-youdao/LobsterAI/issues/2936)

该诉求已经超出单一用户解封，可能推动以下方向进入路线图：

- 封禁原因与违规类型展示；
- 账号处罚状态及申诉入口；
- 申诉处理时效和结果通知；
- 第三方工具复用凭据时的使用规范；
- 风控误判复审或自动回滚机制。

目前数据中没有对应 PR 或明确维护者承诺，因此其路线图确定性低于前述三个代码改动。

---

## 7. 用户反馈摘要

### 账号异常影响核心使用，申诉透明度不足

来自 [#2936](https://github.com/netease-youdao/LobsterAI/issues/2936) 的反馈显示，用户最强烈的痛点不是模型能力，而是**账号可用性和封禁处理机制**：

- 两个账号均无法登录或使用；
- 用户否认存在恶意调用行为；
- 第三方 DSH 插件中配置凭据，可能是触发异常的来源；
- 用户希望通过申诉恢复账号，并理解异常判定依据。

**满意度判断：** 对当前账号风控体验不满意。  
**核心需求：** 更快、更透明、更具解释力的申诉与误封复核机制。

### 网络异常后的交互状态不可靠

来自 [#743](https://github.com/netease-youdao/LobsterAI/issues/743) 的反馈表明，用户依赖“停止”按钮控制长回复。断网重连后按钮状态错误，说明**网络事件与生成状态之间存在同步盲区**。

**满意度判断：** 对断网恢复场景不满意，但问题现已关闭。  
**核心需求：** UI 状态应始终准确反映实际生成状态，并确保停止能力可用。

### 间接反馈：长文本和多步骤自动化体验仍有优化空间

虽然今日没有新的长文本功能 Issue，但 PR [#2946](https://github.com/netease-youdao/LobsterAI/pull/2946) 和 [#2947](https://github.com/netease-youdao/LobsterAI/pull/2947) 反映出两类高频使用摩擦：

- 大段粘贴内容会占据过多输入空间，需要可预览、可折叠的表示；
- Computer Use 连续执行会反复请求授权，需要减少重复打扰。

---

## 8. 待处理积压

### 账号误封申诉仍开放

- **Issue：** [#2936](https://github.com/netease-youdao/LobsterAI/issues/2936)
- **状态：** OPEN
- **评论数：** 5
- **优先级：高**

该 Issue 自 2026-10-23 创建，至今日仍在开放，且评论最多。账号无法使用会直接造成核心功能中断，建议维护者尽快给出人工复核结果，而不是仅依赖自动风控结论。

### Windows Computer Use 重复审批修复待合并

- **PR：** [#2947](https://github.com/netease-youdao/LobsterAI/pull/2947)
- **关联 Issue：** [#2895](https://github.com/netease-youdao/LobsterAI/issues/2895)
- **状态：** OPEN
- **优先级：中高**

这是今日唯一待合并 PR，并直接关联既有 Issue。建议尽快完成代码审查、权限边界验证和回归测试，避免重复授权问题持续影响自动化体验。

### 缺少新版本发布，修复落地节奏偏慢

今日没有 Release，意味着已关闭的 PR [#2948](https://github.com/netease-youdao/LobsterAI/pull/2948) 和 [#2946](https://github.com/netease-youdao/LobsterAI/pull/2946) 暂时缺少明确的用户可感知交付节点；同时，#743 的关闭状态也无法确认是否已随版本发布。

**建议：**

- 核对关闭 PR 是否已合并至默认分支；
- 在下一版本说明中列出 macOS 打包和 Cowork 粘贴卡片修复；
- 对 #743 补充关联修复 PR、提交记录或 Release 标记；
- 对 #2936 公布申诉处理结果和后续风控改进计划。

---

## 今日结论

LobsterAI 今日开发活动不算高频，但方向较明确：一方面在收敛**打包、Computer Use 权限和 Cowork 长文本交互**问题，另一方面暴露了**账号风控误判与网络异常恢复**两类用户信任风险。  
项目整体健康度可评估为**中等偏稳**：有持续代码推进，Issue #743 已闭环，但无新版本发布、账号申诉仍未解决，且关键 PR #2947 尚待合并。下一阶段应优先完成 Windows 审批修复的合并验证、确认已关闭改动进入正式版本，并对账号误封问题给出明确处理结果。

</details>

<details>
<summary><strong>QwenPaw</strong> — <a href="https://github.com/agentscope-ai/QwenPaw">agentscope-ai/QwenPaw</a></summary>

# QwenPaw 项目动态日报

**日期：2026-10-28**  
**数据范围：过去 24 小时 GitHub 活动**

---

## 1. 今日速览

过去 24 小时 QwenPaw 共更新 **36 条 Issues**、**50 条 PR**，并发布 **1 个新版本 `v2.3.0-beta.1`**。当前仍有 **16 条 Issues 活跃**、**36 条 PR 待合并**，整体开发吞吐较高，版本迭代、插件解耦、桌面端完善和模型兼容性仍是主线。与此同时，Issues 中仍有较多上下文压缩、MCP 协议协商、媒体处理、记忆检索和插件稳定性问题，说明功能扩张速度快于部分底层链路的成熟度。项目健康度评估为 **活跃但存在稳定性债务**：发布节奏良好，但核心执行链路的回归风险需要关注。

---

## 2. 版本发布

### [v2.3.0-beta.1](https://github.com/agentscope-ai/QwenPaw/releases/tag/v2.3.0-beta.1)

本次为测试版本，主要更新包括：

- **恢复 Console 交互式 HTML 预览**
  - 修复 Conversation 页面中 HTML 预览无法交互、无法正常渲染的问题。
  - 相关 PR：[ #8245](https://github.com/agentscope-ai/QwenPaw/pull/8245)

- **支持通过凭据存储配置可选 Tavily API Key**
  - Tavily 可作为网页搜索工具的可选凭据来源。
  - 相关 PR：[ #8204](https://github.com/agentscope-ai/QwenPaw/pull/8204)

- **插件对齐与兼容性修复**
  - 发布说明还包含插件相关调整，但提供的摘要被截断，完整变更需查看 Release Notes 和对应 PR。

#### 迁移注意事项

1. **这是 Beta 版本**，建议在测试环境验证上下文压缩、插件加载、媒体预览与 MCP 连接后再升级生产环境。
2. 使用 Tavily 的用户需确认 API Key 已正确写入凭据存储。
3. 升级前建议备份 `governance/`、插件目录和会话数据库，避免插件依赖调整影响现有环境。
4. 当前公开信息未显示明确的破坏性变更，但插件依赖检查逻辑正在调整；依赖特定 SDK 版本的插件应重点验证安装与加载。

---

## 3. 项目进展

### 3.1 Console 与桌面体验持续完善

今日一批 Console 改进被合并或关闭，覆盖移动端模型入口裁切、按钮点击区域、弹窗焦点与 Escape 行为、媒体预览错误卡片，以及原生 Agent 的技能选择逻辑。

- [ #8452：修复 Console 浏览器可用性问题](https://github.com/agentscope-ai/QwenPaw/pull/8452)  
  改善移动端模型入口、操作系统后台工具策略入口、窗口按钮点击区域、弹窗焦点和 Escape 键行为，并降低轮询频率。

- [ #8451：压缩媒体预览错误卡片](https://github.com/agentscope-ai/QwenPaw/pull/8451)  
  默认仅展示文件名与预览失败提示，展开后显示完整路径和失败原因，同时支持键盘操作、悬浮提示及减少动态效果设置。

- [ #8448：将 Agent 技能选择限制在创建阶段](https://github.com/agentscope-ai/QwenPaw/pull/8448)  
  编辑已有 Agent 时隐藏技能选择与安装入口，避免在不适合的阶段修改技能配置。

这些改动直接改善了 Console 的可用性、信息密度和可访问性。

### 3.2 文件编辑安全性提升

- [ #8433：修复 `edit_file` 破坏换行符和原始编码的问题](https://github.com/agentscope-ai/QwenPaw/pull/8433)
  - 避免 CRLF 文件在单行编辑后被整体改写为 LF。
  - 避免非 UTF-8 文件经文本模式读取和写回后发生字符丢失。
  - 对应问题：[ #8414](https://github.com/agentscope-ai/QwenPaw/issues/8414)、[ #8415](https://github.com/agentscope-ai/QwenPaw/issues/8415)

这是今日最明确、影响范围较广的数据完整性修复之一，可降低自动化编辑造成的隐性文件损坏风险。

### 3.3 模型容错与兼容层改进

- [ #8124：将内容审查错误路由到模型 fallback](https://github.com/agentscope-ai/QwenPaw/pull/8124)
  - Ali 兼容网关返回 `data_inspection_failed` 或 `inappropriate content` 时，不再错误地终止 fallback 流程。
  - 系统可继续尝试下一个已配置模型。

- [ #8436：遵循模型声明的“关闭思考”参数格式](https://github.com/agentscope-ai/QwenPaw/pull/8436)
  - 不再同时发送两种兼容的关闭思考参数。
  - 旨在解决严格端点在上下文摘要和治理泛化阶段返回 400 的问题。

- [ #8034：限制单次请求中的内联媒体总量](https://github.com/agentscope-ai/QwenPaw/pull/8034)
  - 现有逻辑只限制单个媒体文件大小，多个合规图片仍可能不断累积成超大请求体。
  - 新 PR 将限制提升到请求级，缓解网关带宽和请求体积问题。

### 3.4 记忆系统实现方式优化

- [ #8457：将自动记忆召回注入为引用上下文](https://github.com/agentscope-ai/QwenPaw/pull/8457)
  - 不再将自动召回伪装成 assistant 的思考、工具调用和工具结果轨迹。
  - 改为注入临时、不可信的引用上下文，以降低模型模仿该轨迹并重复调用 `memory_search` 的概率。

这是对自动记忆搜索稳定性问题的直接修复方向，与 [ #8361](https://github.com/agentscope-ai/QwenPaw/issues/8361) 高度对应。

### 3.5 插件与渠道架构解耦继续推进

- [ #8426：将第三方 Agent 抽离为插件](https://github.com/agentscope-ai/QwenPaw/pull/8426)
- [ #8187：将官方渠道抽离为插件并使用子进程隔离](https://github.com/agentscope-ai/QwenPaw/pull/8187)
- [ #8462：移除 SDK 专用依赖检查并简化插件测试](https://github.com/agentscope-ai/QwenPaw/pull/8462)

核心方向是减少主进程对平台 SDK 的直接依赖，让 Agent 和渠道以插件方式加载，并通过进程隔离降低单个插件或渠道故障对整个宿主的影响。该工作改动规模较大，但仍处于审查中，合并前需要重点验证兼容性。

### 3.6 本地模型与决策工作流融合

- [ #8463：集成本地 Blink 与原生决策工作流](https://github.com/agentscope-ai/QwenPaw/pull/8463)
  - 为 QwenPaw Local（llama.cpp）和 Ollama 增加本地适配器。
  - 尝试让本地模型参与工具审查和 ReMe 上下文压缩，而不再只承担普通聊天。

这是提升本地模型可用性和降低云端依赖的重要方向，但 PR 仍需审查模型能力判断、输出格式和失败降级策略。

### 3.7 渠道可靠性改进

- [ #8453：钉钉最终回复的 sessionWebhook 过期时回退到 Open API](https://github.com/agentscope-ai/QwenPaw/pull/8453)
  - 修复最终回复阶段因 `sessionWebhook` 过期导致用户完全收不到消息的问题。
  - 对应问题：[ #8343](https://github.com/agentscope-ai/QwenPaw/issues/8343)

### 3.8 桌面端平台支持扩展

- [ #8444：为 Tauri 构建增加 Linux deb 和 AppImage](https://github.com/agentscope-ai/QwenPaw/pull/8444)
  - 填补 Linux 桌面发行物空白。
  - 若最终合并，QwenPaw 桌面端将形成 Windows、macOS、Linux 的更完整覆盖。

### 3.9 整体推进判断

今日已关闭的 PR 数量为 **14 条**，其中 Console、文件编辑、模型 fallback、桌面兼容等改动已形成较明确的稳定性收益。与此同时，**36 条 PR 仍待合并**，且包含多个 `XXXL` 级架构改造，项目正处于“快速扩展能力边界”和“强化底层稳定性”并行阶段。

---

## 4. 社区热点

### Issues

#### 1. 模型 OAuth 登录诉求

- [ #1536：是否可以通过 OAuth 登录 Codex](https://github.com/agentscope-ai/QwenPaw/issues/1536) — 5 条评论，已关闭
- [ #4124：支持 OpenAI / Codex OAuth 登录](https://github.com/agentscope-ai/QwenPaw/issues/4124) — 4 条评论，已关闭

用户希望免去手动 API Key 填写，直接通过 OAuth 授权 Codex/OpenAI。两条相关问题均已关闭，表明该方向可能已通过现有登录或凭据方案得到回应，但具体落地方式仍需结合发布说明确认。

#### 2. MCP 协议发现与旧服务兼容

- [ #8047：`server/discover` 返回 422 时无法识别 legacy 协议](https://github.com/agentscope-ai/QwenPaw/issues/8047) — 3 条评论，已关闭
- [ #8424：HTTP 404 + JSON-RPC `-32601` 未触发 legacy 回退](https://github.com/agentscope-ai/QwenPaw/issues/8424) — 3 条评论，仍开放

这是今日最集中的协议兼容主题。用户希望 MCP 客户端能区分现代协议拒绝与旧协议不支持，从而在 `server/discover` 失败后正确回退到 `initialize`。旧服务兼容仍有开放问题，说明 MCP 协商逻辑还没有完全统一。

#### 3. 自动记忆搜索重复调用

- [ #8361：Automatic Memory Search 同轮重复调用后无法正常回复](https://github.com/agentscope-ai/QwenPaw/issues/8361) — 2 条评论，仍开放

用户反馈模型会反复使用相同 query 调用 `memory_search`，达到重复保护阈值后，收尾和恢复阶段也无法生成正常回复。PR [ #8457](https://github.com/agentscope-ai/QwenPaw/pull/8457) 已针对根因进行调整，是下一版本的重要候选修复。

#### 4. 上下文压缩与模型切换后会话失效

- [ #8312：上下文控制失效导致任务中断](https://github.com/agentscope-ai/QwenPaw/issues/8312) — 4 条评论，仍开放
- [ #8417：火山 AgentPlan 上下文摘要触发 400](https://github.com/agentscope-ai/QwenPaw/issues/8417) — 2 条评论，仍开放
- [ #7966：切换模型提供商后 `file://` 媒体历史导致会话失效](https://github.com/agentscope-ai/QwenPaw/issues/7966) — 2 条评论，仍开放

相关 PR [ #8436](https://github.com/agentscope-ai/QwenPaw/pull/8436) 和 [ #8457](https://github.com/agentscope-ai/QwenPaw/pull/8457) 正在处理其中部分根因。

### PRs

#### 1. 第三方 Agent 插件化

- [ #8426：将第三方 Agent 抽离为插件](https://github.com/agentscope-ai/QwenPaw/pull/8426) — `XXXL`，开放
- [ #8187：渠道插件化与子进程隔离](https://github.com/agentscope-ai/QwenPaw/pull/8187) — `XXXL`，开放

这两项 PR 反映出社区和核心团队正在把 QwenPaw 从单体应用推进为可扩展宿主平台。其价值不仅是代码组织改善，也包括降低 SDK 冲突和插件故障对主进程的影响。

#### 2. 实时语音聊天

- [ #7785：增加实时语音聊天](https://github.com/agentscope-ai/QwenPaw/pull/7785) — `XXXL`，开放

功能覆盖语音输入、播放、打断、模型选择，并复用现有聊天执行路径中的历史、工具、长任务、队列和持久化能力。该需求代表项目从文本 Agent 向多模态实时交互延伸。

#### 3. 社区与收件箱集成

- [ #7903：集成 QwenPaw 社区与收件箱](https://github.com/agentscope-ai/QwenPaw/pull/7903) — `XXXL`，开放

拟提供社区信息流、分类、评论、资源来源追踪、关联问题报告、模型辅助编辑，以及 Platform PKCE 授权和消息同步。这是重要的生态闭环方向，但与核心运行链路的耦合和平台依赖较强。

---

## 5. Bug 与稳定性

### 高严重度

#### 1. 上下文压缩可能无法完成，并持续触发 400

- [ #8417：火山引擎 AgentPlan 的 glm-5.3-flash 压缩摘要失败](https://github.com/agentscope-ai/QwenPaw/issues/8417)  
  **状态：开放；已有候选修复**  
  **候选 PR：** [ #8436](https://github.com/agentscope-ai/QwenPaw/pull/8436)

兼容层同时发送两种“关闭思考”参数，而目标端点仅接受其中一种。影响不仅是一次请求失败，还可能导致压缩永远无法成功，长会话无法持续运行。

#### 2. 上下文控制失效导致任务中断

- [ #8312：请求超出模型上下文后无法完成压缩](https://github.com/agentscope-ai/QwenPaw/issues/8312)  
  **状态：开放；部分方向已有修复**  
  **相关 PR：** [ #8457](https://github.com/agentscope-ai/QwenPaw/pull/8457)

在约 25 万 token 的量级下，压缩后仍无法完全适配模型窗口，可能造成任务直接中断。这属于影响长任务连续性的核心稳定性问题。

#### 3. 切换模型提供商后历史媒体导致会话持续损坏

- [ #7966：历史中的 `file://` 媒体 URL 被新提供商拒绝](https://github.com/agentscope-ai/QwenPaw/issues/7966)  
  **状态：开放；暂无明确合并修复**

用户切换 provider 后，历史会话中的媒体 URL 可能失去可访问性或格式兼容性，导致后续消息持续返回 `invalid_parameter_error`。这是跨 provider 会话迁移能力的重要缺口。

#### 4. 长期运行的 ReMe watcher 耗尽 AnyIO 线程限制

- [ #8279：ReMe watcher 耗尽线程限制并阻塞同步 HTTP 端点](https://github.com/agentscope-ai/QwenPaw/issues/8279)  
  **状态：已关闭；已有修复进展**

长期部署中 watcher 数量持续增长，可能拖慢或阻塞同步 HTTP 服务。虽然问题已关闭，但建议在 Docker 和高并发场景中持续观察线程与 watcher 数量。

### 中严重度

#### 5. 自动记忆搜索重复调用后无法正常回复

- [ #8361](https://github.com/agentscope-ai/QwenPaw/issues/8361)  
  **状态：开放；已有候选修复**  
  **候选 PR：** [ #8457](https://github.com/agentscope-ai/QwenPaw/pull/8457)

问题不仅包括重复工具调用，还包括被拦截后无法完成 finalization，属于功能可用性和资源消耗双重问题。

#### 6. MCP legacy 握手无法回退

- [ #8424](https://github.com/agentscope-ai/QwenPaw/issues/8424)  
  **状态：开放；暂无明确合并修复**

现代协议探测失败时直接将 `404/-32601` 判为硬失败，旧 MCP 服务无法进入 `initialize` 回退流程。

#### 7. 插件热安装在特定 Python 3.11 环境中断

- [ #8265：插件热安装因 `importlib.invalidate_caches()` 异常中止](https://github.com/agentscope-ai/QwenPaw/issues/8265)  
  **状态：开放；暂无明确合并修复**

在发行版修补过的 Python 环境中，插件安装流程可能直接中断，影响扩展安装和更新。

#### 8. 治理审计记录停止增长

- [ #8412：`policy.yaml` 设置 `audit_level: all`，但工具调用不再写入 `audit.db`](https://github.com/agentscope-ai/QwenPaw/issues/8412)  
  **状态：开放；暂无明确合并修复**

审计数据可能在无明显告警的情况下停止记录，影响合规、可追溯性和故障调查。

#### 9. 本地模型工具调用解析失败

- [ #2839：工具调用出现 `Failed to parse input at pos 204`](https://github.com/agentscope-ai/QwenPaw/issues/2839)  
  **状态：已关闭；暂无明确对应 PR**

该问题反映本地模型工具调用输出与内部解析器之间仍有兼容风险，尤其是较大模型或非标准参数格式。

### 低至中严重度

#### 10. `edit_file` 改写换行符和编码

- [ #8415](https://github.com/agentscope-ai/QwenPaw/issues/8415)  
  **状态：已关闭；已有修复 PR**  
  **修复 PR：** [ #8433](https://github.com/agentscope-ai/QwenPaw/pull/8433)

#### 11. 原子写入拒绝合法长文件名

- [ #8306：原子写入临时文件名过长导致写入失败](https://github.com/agentscope-ai/QwenPaw/issues/8306)  
  **状态：开放；暂无明确合并修复**

#### 12. Shell 自杀保护误判

- [ #8413：禁止 `kill $PID` 时误伤用户启动的无关进程](https://github.com/agentscope-ai/QwenPaw/issues/8413)  
  **状态：开放；暂无明确合并修复**

#### 13. Windows 桌面日志不轮转

- [ #8185：`desktop.log` 在 Windows 上不轮转](https://github.com/agentscope-ai/QwenPaw/issues/8185)  
  **状态：已关闭；暂无明确对应 PR**

#### 14. Windows 安装包准备失败

- [ #8455：处理 Windows installer preparation failures](https://github.com/agentscope-ai/QwenPaw/pull/8455)  
  **状态：开放待合并**

修复了 PowerShell 路径选择和安装准备阶段错误不可见的问题。

---

## 6. 功能请求与路线图信号

### 高概率进入下一版本

#### 1. 自动记忆搜索稳定性修复

- 需求：[ #8361](https://github.com/agentscope-ai/QwenPaw/issues/8361)
- 候选 PR：[ #8457](https://github.com/agentscope-ai/QwenPaw/pull/8457)

修复方案已经具体化，且直接解决高热度用户反馈，进入 `v2.3.0` 正式版或后续补丁版本的概率较高。

#### 2. 快速添加模型

- 候选 PR：[ #8434：在 Models 页面增加 Quick Add Model 按钮](https://github.com/agentscope-ai/QwenPaw/pull/8434)

该功能减少添加模型的交互步骤，适合纳入体验优化版本。

#### 3. 实时语音聊天

- PR：[ #7785](https://github.com/agentscope-ai/QwenPaw/pull/7785)

方向明确，但改动规模大，且涉及供应商实时接口、打断机制、浏览器音频权限和持久化一致性，更可能成为独立功能版本，而非小型补丁。

#### 4. 本地 Blink 决策模型

- PR：[ #8463](https://github.com/agentscope-ai/QwenPaw/pull/8463)

若验证通过，将提升本地模型在工具审查与上下文压缩中的可用性，与项目降低云端依赖和强化本地化的发展方向一致。

#### 5. Linux 桌面发行包

- PR：[ #8444](https://github.com/agentscope-ai/QwenPaw/pull/8444)

属于明确的产品覆盖缺口，若 CI、Tauri 配置和签名流程成熟，可能随桌面发行更新进入后续版本。

### 中期路线图信号

#### 1. 插件化生态

- [ #8426：第三方 Agent 插件化](https://github.com/agentscope-ai/QwenPaw/pull/8426)
- [ #8187：渠道插件化和子进程隔离](https://github.com/agentscope-ai/QwenPaw/pull/8187)

这表明项目正从“功能集合”转向“宿主平台”。后续预计会继续强化插件描述文件、依赖安装、故障隔离、动态加载和生态 SDK。

#### 2. 社区与消息收件箱

- [ #7903](https://github.com/agentscope-ai/QwenPaw/pull/7903)

社区信息流、资源来源追踪、问题报告和 Platform 账号同步，说明项目正在构建分发、反馈与资源生态闭环。该方向体量较大，预计需要独立里程碑。

#### 3. 审批通知与未读消息体验

- [ #8460：为待审批消息增加浏览器或操作系统级通知](https://github.com/agentscope-ai/QwenPaw/issues/8460)
- [ #8459：降低未读推送消息访问难度](https://github.com/agentscope-ai/QwenPaw/issues/8460)

两项需求均刚提出，尚无 PR，但与 Console 的审批工作流高度相关，适合近期纳入产品体验迭代。

#### 4. Tavily 与更多搜索提供商

- [ #8199：支持 Firecrawl 作为 `web_search` provider](https://github.com/agentscope-ai/QwenPaw/issues/8199) — 已关闭
- `v2.3.0-beta.1` 已包含 Tavily 凭据存储支持：[Release](https://github.com/agentscope-ai/QwenPaw/releases/tag/v2.3.0-beta.1)

项目正在通过统一 provider 接口扩展搜索能力。Firecrawl 需求虽已关闭，但是否已实现需结合对应代码或后续 Release Notes 确认。

---

## 7. 用户反馈摘要

### 用户真实使用场景

1. **长上下文与长时间自主任务**
   - 用户持续运行复杂任务，并依赖自动压缩维持会话。
   - 痛点不是单次回答质量，而是压缩失败、工具轨迹丢失或超限后无法恢复，直接中断整个工作流。
   - 代表问题：[ #8312](https://github.com/agentscope-ai/QwenPaw/issues/8312)、[ #5856](https://github.com/agentscope-ai/QwenPaw/issues/5856)

2. **本地模型与多提供商切换**
   - 用户在 llama.cpp、Ollama、火山引擎、Agentscope 和 OpenAI 兼容端点之间切换。
   - 不同提供商对 thinking 参数、媒体格式、错误文案和协议支持存在差异，容易出现“聊天可用、工具或压缩失败”的局部兼容问题。
   - 代表问题：[ #2839](https://github.com/agentscope-ai/QwenPaw/issues/2839)、[ #8417](https://github.com/agentscope-ai/QwenPaw/issues/8417)、[ #7966](https://github.com/agentscope-ai/QwenPaw/issues/7966)

3. **MCP 工具生态接入**
   - 用户使用 DBX、旧版 MCP 服务及多种 HTTP/SSE 传输方式。
   - 协议探测、legacy 回退和 Console 弹窗行为直接影响插件能否被发现和配置。
   - 代表问题：[ #8424](https://github.com/agentscope-ai/QwenPaw/issues/8424)、[ #8047](https://github.com/agentscope-ai/QwenPaw/issues/8047)、[ #8405](https://github.com/agentscope-ai/QwenPaw/issues/8405)

4. **插件安装与平台环境适配**
   - 用户在发行版 Python、Windows 和 Docker 中部署插件。
   - 用户期待标准库兼容和桌面安装错误具有可诊断性，而不是直接中止或留下空白页面。
   - 代表问题：[ #8265](https://github.com/agentscope-ai/QwenPaw/issues/8265)、[ #8455](https://github.com/agentscope-ai/QwenPaw/pull/8455)

### 满意与积极反馈

- Console 近期持续修复移动端裁切、焦点、Escape 键、按钮热区和媒体预览错误提示，说明维护者对前端可用性反馈响应较快。
- 文件编辑 PR [ #8433](https://github.com/agentscope-ai/QwenPaw/pull/8433) 直接解决了跨平台文件编辑中的隐性数据破坏问题，对代码代理类用户价值较高。
- `v2.3.0-beta.1` 恢复交互式 HTML 预览，并支持 Tavily 凭据存储，分别改善了内容呈现和搜索工具配置体验。
- OAuth 相关问题获得集中处理，表明用户身份认证体验正在被纳入核心规划。

### 主要不满意点

- **会话一旦进入异常状态，恢复能力不足**：请求超时、媒体错误、上下文超限或压缩失败后，可能需要重启进程或重新建立会话。
- **兼容层错误分类仍不够精细**：思考参数、内容审查、媒体能力和错误文案之间缺乏统一映射。
- **MCP 协商对非标准实现过于脆弱**：一个 404 或 422 可能被直接解释为协议类型，而不是触发回退。
- **插件生态仍受 SDK 与依赖环境影响**：依赖检查、热安装缓存失效和渠道故障隔离是主要痛点。
- **治理与审计的可见性不足**：[ #8412](https://github.com/agentscope-ai/QwenPaw/issues/8412) 表明审计停止记录后缺少明确告警，用户难以察觉。

---

## 8. 待处理积压

### 8.1 长期开放且影响较大的 Issues

- [ #8312：上下文控制失效导致任务中断](https://github.com/agentscope-ai/QwenPaw/issues/8312)  
  2026-10-18 创建，持续影响长会话与复杂任务。虽然有相关 PR 推进，但主问题仍开放。

- [ #7966：切换 provider 后历史媒体导致会话失效](https://github.com/agentscope-ai/QwenPaw/issues/7966)  
  2026-09-24 创建，至今仍开放。跨提供商会话迁移是核心稳定性问题，不宜长期搁置。

- [ #8265：插件热安装因 `invalidate_caches()` 异常中止](https://github.com/agentscope-ai/QwenPaw/issues/8265)  
  2026-10-15 创建，仍开放。该问题直接阻断部分插件安装。

- [ #8306：合法长文件名被原子写入逻辑拒绝](https://github.com/agentscope-ai/QwenPaw/issues/8306)  
  2026-10-18 创建，仍开放。修复范围相对明确，建议尽快补充临时文件命名策略与回归测试。

- [ #8412：治理审计停止记录工具调用](https://github.com/agentscope-ai/QwenPaw/issues/8412)  
  涉及合规和可追溯性，建议检查配置加载、事件写入线程及失败告警。

### 8.2 需关注的大体量 PR

- [ #8187：渠道插件化与子进程隔离](https://github.com/agentscope-ai/QwenPaw/pull/8187)
- [ #8426：第三方 Agent 插件化](https://github.com/agentscope-ai/QwenPaw/pull/8426)
- [ #7903：社区与收件箱集成](https://github.com/agentscope-ai/QwenPaw/pull/7903)
- [ #7785：实时语音聊天](https://github.com/agentscope-ai/QwenPaw/pull/7785)
- [ #8034：请求级内联媒体限制](https://github.com/agentscope-ai/QwenPaw/pull/8034)

这些 PR 均为 `XXXL` 或接近超大规模，改动面横跨插件生命周期、进程边界、模型协议、媒体存储、UI 和持久化。建议维护者明确拆分里程碑、测试矩阵和回滚方案，避免多个架构级变更同时进入同一版本。

### 8.3 维护建议

1. **优先关闭核心稳定性缺口**：上下文压缩、provider 切换、记忆搜索、MCP legacy 回退。
2. **为长会话建立统一恢复状态机**：对超时、媒体错误、上下文超限和 400 错误进行归类，并提供自动降级或会话修复入口。
3. **补充兼容矩阵**：按 provider 记录 thinking 参数、媒体 URL、工具调用和错误码行为。
4. **完善插件故障隔离与可观测性**：插件安装失败、审计停止、watcher 泄漏均应提供明确日志与告警。
5. **控制版本合并密度**：`v2.3.0-beta.1` 已包含多项体验和兼容性修复，建议避免在同一稳定版本中同时引入过大的插件化重构。

---

**总体结论：** QwenPaw 正处于快速产品化和平台化阶段，Console、模型兼容、文件安全、记忆机制和桌面支持均有实质进展；`v2.3.0-beta.1` 表明迭代节奏良好。当前最需要关注的不是功能数量，而是长会话恢复、MCP 协商、插件安装、治理审计等底层链路能否在多 provider、多平台环境中稳定工作。

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/NousResearch/hermes-agent">NousResearch/hermes-agent</a></summary>

# Hermes Agent 项目动态日报

**日期：2026-10-28**  
**数据范围：过去 24 小时 GitHub Issues / Pull Requests 更新**

## 1. 今日速览

过去 24 小时共更新 **50 条 Issue**（39 条新开或活跃、11 条关闭）和 **50 条 PR**（41 条待合并、9 条已合并或关闭），日度交互量达到 **100 条更新**，开发与社区讨论均处于高活跃状态。  
今日无新版本发布，主要工作集中在 **Gateway 多配置复用、Webapp/Desktop、插件生态、会话压缩与异步任务调度**等方向。  
已关闭事项显示项目在持续推进：Buzz 的连接保活、启动配置和 reaction lifecycle 已有修复，Webapp 插件分发、端点保存、Desktop/Webapp 房间状态分离等问题也已有对应修复。  
不过高活跃度同时伴随明显积压：**41 条 PR 待合并**，且多项 P1/P2 问题仍缺少可见的合并修复，例如 Anthropic 凭据轮换、Desktop 安全根目录失效、Telegram 命名话题任务无法唤醒。  
整体健康度判断为 **“活跃但承压”**：迭代速度和社区供给强劲，但核心 Gateway、会话一致性与多配置安全边界仍是短期稳定性瓶颈。

---

## 2. 版本发布

过去 24 小时 **无新版本发布**。

---

## 3. 项目进展

### 3.1 已关闭或完成的重要 PR

#### Buzz 插件连接保活与消息生命周期得到集中修复

已关闭 PR [#101994](https://github.com/NousResearch/hermes-agent/pull/101994) 合并了 Buzz 的三项能力：

- 以 WebSocket ping/pong 检测传输层存活，替代将“安静”误判为“死亡”的应用层 idle timeout；
- 增加 persistent-socket presence，改善连接状态发布；
- 补齐 reaction lifecycle。

其前身 PR [#101166](https://github.com/NousResearch/hermes-agent/pull/101166)、[#99451](https://github.com/NousResearch/hermes-agent/pull/99451) 也已关闭，对应 Issue [#101160](https://github.com/NousResearch/hermes-agent/issues/101160) 和 [#99611](https://github.com/NousResearch/hermes-agent/issues/99611) 随之关闭。  
这组变更解决了 Buzz 健康连接每约 300 秒被错误重连的问题，也使消息处理状态可以通过 reaction 对外表达。

#### Buzz 启动检查现在可读取真实 profile 配置

已关闭 PR [#101184](https://github.com/NousResearch/hermes-agent/pull/101184) 修复 startup requirements gate 早于 Gateway 加载 `config.yaml` 的问题，使仅通过 YAML 配置 `relay_url` 和 `credentials_file` 的 profile 不再被错误判定为缺少依赖。  
对应 Issue [#101165](https://github.com/NousResearch/hermes-agent/issues/101165) 已关闭。这提高了插件在多 profile、纯配置模式下的启动可靠性。

#### Webapp 插件分发链路已有修复

已关闭 Issue [#145540](https://github.com/NousResearch/hermes-agent/issues/145540) 报告 Webapp 在无原生 Desktop 的主机上无法将 agent/desktop 插件包同步至 `desktop-plugins/`。维护者说明其已由 **PR #145549** 修复，并通过 stacked PR 依赖链包含 [#145539](https://github.com/NousResearch/hermes-agent/pull/145539) 和 [#145072](https://github.com/NousResearch/hermes-agent/pull/145072)。  
虽然核心修复 PR 未出现在本页展示列表中，但该问题已经关闭，说明 Webapp 的插件安装与启停闭环得到明显完善。

#### Webapp 自定义 Provider 端点保存错误已修复

已关闭 Issue [#145466](https://github.com/NousResearch/hermes-agent/issues/145466) 指出，当系统已有名为 `custom` 的 provider 时，Webapp 向导会提示保存成功，却仍沿用旧 endpoint。  
问题现已关闭，表明自定义 endpoint 的选择和保存逻辑得到纠正，减少“界面显示成功、实际配置未生效”的静默故障。

#### Desktop 与 Webapp 的 hosted-room 状态分裂已关闭

已关闭 Issue [#145184](https://github.com/NousResearch/hermes-agent/issues/145184) 指出 Desktop 与 Webapp 使用不同的 hosted-room store，造成房间列表不同步、固定群组数量限制和误导性错误。  
该问题关闭说明两端房间存储正在统一或至少完成了兼容性修复。

#### Gateway 手动压缩绕过插件上下文引擎已修复

已关闭 Issue [#143587](https://github.com/NousResearch/hermes-agent/issues/143587) 指出 Gateway 的 `/compress` 总是使用原生 `ContextCompressor`，忽略 session 配置的上下文压缩引擎。  
随着问题关闭，插件自定义压缩能力在 Gateway 路径中的可替换性得到恢复，对上下文治理和长期记忆扩展具有重要意义。

#### Discord 异步任务 completion wake-up 修复已关闭

已关闭 PR [#139488](https://github.com/NousResearch/hermes-agent/pull/139488) 修复了 Discord thread 元数据变化导致后台 `delegate_task` 完成事件无法 admitted 的问题。  
该修复对异步代理、群聊线程和跨平台消息投递均有直接价值。

### 3.2 今日待合并的重要进展

#### 插件目录版本集中更新

今日出现多条插件目录更新 PR：

- [#145882](https://github.com/NousResearch/hermes-agent/pull/145882)：`hermes-resetwatch` 升至 0.2.26；
- [#145881](https://github.com/NousResearch/hermes-agent/pull/145881)：`hermes-rss` 升至 0.0.5；
- [#145880](https://github.com/NousResearch/hermes-agent/pull/145880)：`hermes-asgard` 升至 0.2.1；
- [#145879](https://github.com/NousResearch/hermes-agent/pull/145879)：`hermes-kemet` 升至 0.2.1；
- [#145878](https://github.com/NousResearch/hermes-agent/pull/145878)：`hermes-pantheon` 升至 0.4.1。

其中多个主题插件同步修复 macOS 标题栏遮挡和矮窗口侧栏空间不足，说明插件目录正从“能安装”向跨平台体验和持续维护推进。

#### 插件能力继续扩张

- [#145876](https://github.com/NousResearch/hermes-agent/pull/145876)：新增 `search-sources` 插件目录项，提供 Desktop 回复来源 capsule 和引用优先侧栏；
- [#145877](https://github.com/NousResearch/hermes-agent/pull/145877)：`hermes-whatsapp-voice` 升至 0.2.1；
- [#145861](https://github.com/NousResearch/hermes-agent/pull/145861)：新增 `muse-harness`，通过 Muse Session Protocol 在 Muse Code 中执行单轮任务；
- [#144461](https://github.com/NousResearch/hermes-agent/pull/144461)：新增 `live-artifacts`，支持在会话中发布可交互 HTML 表单、审阅列表和仪表盘，并回传用户填写内容；
- [#139625](https://github.com/NousResearch/hermes-agent/pull/139625)：允许飞书群按组配置 `ignore_at_all`，忽略全员广播但保留普通 @机器人 提及。

#### 流式响应控制与桌面展示改进

- [#144657](https://github.com/NousResearch/hermes-agent/pull/144657) 允许插件 stream hook 请求核心中断当前响应，由核心在 chunk 间检查并结束 turn；
- [#145875](https://github.com/NousResearch/hermes-agent/pull/145875) 区分 Desktop 中已完成和仍在运行的工具调用；
- [#143251](https://github.com/NousResearch/hermes-agent/pull/143251) 修复工具错误标题被 bare-domain linkifier 错误替换的问题；
- [#145874](https://github.com/NousResearch/hermes-agent/pull/145874) 补充默认原地压缩行为文档；
- [#145873](https://github.com/NousResearch/hermes-agent/pull/145873) 修复慢网络下 daemon-backed gateway probe 对 `session.create` 的超时问题。

**推进程度评估：** 今日完成了多项插件、会话与 Webapp 稳定性修复，并形成了一批新的插件和交互能力；但核心 PR 合并积压较高，若以“已可稳定使用”作为标准，今日实际落地规模仍小于讨论和提交规模。

---

## 4. 社区热点

### 4.1 文档链与上下文压缩治理 RFC

Issue [#143379](https://github.com/NousResearch/hermes-agent/issues/143379) 以 **29 条评论**成为今日讨论最活跃事项。RFC 讨论“Doc-Chain Substrate”网络，目标是在 session compression 后保留带来源关系的持久记录，并让 Agent 能重新读取，而非要求用户重复提供背景。  
其背后诉求不仅是增加一个记忆功能，而是建立一套可治理、可追溯的长期上下文基础设施：记录来源、压缩策略、读取权限和审计链路都需要统一定义。该议题也可能成为下一阶段记忆、压缩和文档链功能的核心设计依据。

### 4.2 远程后端 Desktop 会话无法在本地恢复

Issue [#139818](https://github.com/NousResearch/hermes-agent/issues/139818) 获得 **25 条评论、2 个赞**。远程 `hermes serve` 持久化 `source='desktop'` 会话，但本地 Desktop 调用 `session.resume` 返回 `not_found`。  
用户诉求集中在跨设备、远程 Gateway 和多 profile 场景：会话应当可发现、可迁移，并明确区分 Desktop 来源与本地 CLI 来源。相关问题也延伸到 Dashboard 会话选择器：

- [#145811](https://github.com/NousResearch/hermes-agent/issues/145811)：Dashboard 展示 `desktop` 会话，但 chat PTY 无法恢复。

这表明“会话身份与存储边界不一致”已成为用户可感知的主要痛点。

### 4.3 Anthropic 凭据池轮换被 per-request refresh 覆盖

Issue [#118379](https://github.com/NousResearch/hermes-agent/issues/118379) 获得 **9 条评论**，标题指出 Anthropic 单请求凭据刷新会撤销 credential-pool rotation，使两个订阅被计费到同一账户，并可能意外回落到其他 provider。  
这不仅是普通功能 bug，也涉及：

- 多订阅负载均衡；
- OAuth token 刷新与池调度的一致性；
- provider fallback 是否会放大错误使用；
- 用户账单与凭据隔离。

该 Issue 标记为 P1/security-boundary，是今日最值得维护者优先处理的事项之一。

### 4.4 Webapp 合并后的集中跟踪

Issue [#144648](https://github.com/NousResearch/hermes-agent/issues/144648) 以 **10 条评论**集中跟踪 Webapp 在 [#141864](https://github.com/NousResearch/hermes-agent/pull/141864) 合并后的后续事项，范围涵盖 Gateway、Desktop、Dashboard、认证、文件、会话和 profile。  
这说明 Webapp 已从实验功能进入正式部署阶段，但多个终端共享同一 Gateway 时，权限继承、状态同步和配置边界仍需系统性收口。

### 4.5 移动端中文输入法输入丢失

Issue [#145848](https://github.com/NousResearch/hermes-agent/issues/145848) 报告 Android 非 Gboard 输入法（以讯飞为例）在移动 Web Dashboard 聊天框中会静默丢字，但粘贴与登录表单正常。  
讨论量虽少，但问题直接影响真实移动端可用性，属于高价值、低复现门槛的用户反馈。

---

## 5. Bug 与稳定性

### P1 / 高优先级

1. **Anthropic 凭据池轮换失效，可能产生错误计费或 provider 回落**  
   Issue [#118379](https://github.com/NousResearch/hermes-agent/issues/118379)  
   **Fix PR：当前展示数据中未见明确修复 PR。**  
   建议优先核查 per-request refresh 与 credential-pool scheduler 的状态更新顺序。

2. **Desktop 忽略 profile 的 `HERMES_WRITE_SAFE_ROOT`，Bot-to-Bot 写入也可能绕过限制**  
   Issue [#136204](https://github.com/NousResearch/hermes-agent/issues/136204)  
   **Fix PR：未见明确关联 PR。**  
   这是文件写入安全边界问题；在共享 `tui_gateway` 进程和多 profile 场景下风险较高。

3. **Discord completion wake-up 修复已关闭，但同类消息准入问题仍外溢到 Telegram**  
   已修复 PR：[#139488](https://github.com/NousResearch/hermes-agent/pull/139488)  
   相关未解决 Issue：[#145868](https://github.com/NousResearch/hermes-agent/issues/145868)  
   Telegram 命名 forum topic 的异步 delegation wake 会因 `admission_conflict` 被终止并进入 48 小时终态丢弃，说明跨平台事件准入逻辑尚未统一。

### P2 / 中优先级

1. **远程后端 Desktop 会话无法在本地恢复**  
   Issue [#139818](https://github.com/NousResearch/hermes-agent/issues/139818)  
   相关 Issue：[#145811](https://github.com/NousResearch/hermes-agent/issues/145811)  
   **Fix PR：未见明确关联 PR。**

2. **Gateway multiplexer 下 Approval transport 无法读取所属 profile 凭据**  
   Issue [#145857](https://github.com/NousResearch/hermes-agent/issues/145857)  
   **Fix PR：未见明确关联 PR。**  
   问题涉及 Matrix 配置、认证与多 profile 隔离。

3. **插件 CLI 命令未进入 `hermes --help` 和 shell completion**  
   Issue [#145347](https://github.com/NousResearch/hermes-agent/issues/145347)  
   **Fix PR：未见明确关联 PR。**

4. **Windows Desktop 在 MCP discovery 期间进入本地后端无限重启循环**  
   Issue [#136988](https://github.com/NousResearch/hermes-agent/issues/136988)  
   **Fix PR：未见明确关联 PR。**  
   当前可通过 `mcp_discovery_timeout=1.0` 绕过，说明 readiness probe 与延迟发现任务仍存在耦合。

5. **`computer_use` 在 cua-driver 0.34 上因 `element_index` 参数不兼容而无法点击元素**  
   Issue [#135872](https://github.com/NousResearch/hermes-agent/issues/135872)  
   **Fix PR：未见明确关联 PR。**

6. **Gateway hosted-room 有界 transcript 淘汰 `message.user` 后仍保留引用该用户的 settlement**  
   Issue [#139347](https://github.com/NousResearch/hermes-agent/issues/139347)  
   **Fix PR：未见明确关联 PR。**  
   该问题会触发 `DiscussionValidationError`，中断后续 planner pass。

7. **Kanban 任务因残留 `last_failure_error` 被旧 blocker 永久阻止**  
   Issue [#126190](https://github.com/NousResearch/hermes-agent/issues/126190)  
   **Fix PR：未见明确关联 PR。**

8. **Kanban 将退出码 75 的限流 worker 误计为失败，并消耗有效重试额度**  
   Issue [#145820](https://github.com/NousResearch/hermes-agent/issues/145820)  
   **Fix PR：未见明确关联 PR。**

9. **cua-driver 所有上游版本均标记 prerelease，导致 `latest_versions()` 永远为空、无法更新 pin**  
   Issue [#126587](https://github.com/NousResearch/hermes-agent/issues/126587)  
   **Fix PR：未见明确关联 PR。**

10. **Matrix 延迟安装 mautrix 后保留过期 `EventType` stub，需重启进程**  
    Issue [#145856](https://github.com/NousResearch/hermes-agent/issues/145856)  
    **Fix PR：未见明确关联 PR。**

11. **Desktop 启动时用本地旧缓存覆盖服务端 profile 头像**  
    Issue [#145855](https://github.com/NousResearch/hermes-agent/issues/145855)  
    **Fix PR：未见明确关联 PR。**

### P3 / 较低优先级但影响体验

1. **Windows Kanban 回收和最大运行时间只杀 venv launcher，真实 worker 与子进程继续运行**  
   Issue [#128384](https://github.com/NousResearch/hermes-agent/issues/128384)  
   **Fix PR：未见明确关联 PR。**

2. **移动 Web 聊天框在非 Gboard Android IME 下静默丢字**  
   Issue [#145848](https://github.com/NousResearch/hermes-agent/issues/145848)  
   **Fix PR：未见明确关联 PR。**

---

## 6. 功能请求与路线图信号

### 6.1 长期上下文与 Doc-Chain 子strate

Issue [#143379](https://github.com/NousResearch/hermes-agent/issues/143379) 提出将文档持久化、来源治理和压缩整合为可重读的网络。  
结合已修复的手动压缩插件引擎问题 [#143587](https://github.com/NousResearch/hermes-agent/issues/143587)，可以判断 Hermes 正在从“会话内上下文压缩”走向“可治理长期上下文层”。这是下一版本最值得关注的架构方向之一。

### 6.2 语义分块与检索优化

Issue [#76320](https://github.com/NousResearch/hermes-agent/issues/76320) 报告 1600-query 评测中：

- MRR@5：**0.374 → 0.463，提升 23.8%**；
- 另一指标：**0.828 → 0.925，提升 11.7%**。

其方案包括 header split、semantic merge 和 title-chain prefix。若进入主线，将直接改善长期文档检索与召回质量；不过目前仍是 feature/methodology 议题，且标注 `needs-decision`，尚未看到明确实现 PR。

### 6.3 Tailscale serve 安全远程访问

Issue [#9269](https://github.com/NousResearch/hermes-agent/issues/9269) 请求原生集成 Tailscale Serve，为 API Server 和 Open WebUI 提供私有网络 HTTPS 访问，避免公网暴露端口或维护反向代理。  
该需求获得 **11 个赞，为今日 Issue 中反应最高**，且已累积数月。Webapp 正式化后，这类“一键安全远程接入”能力很可能进入下一阶段路线图，但目前没有对应实现 PR。

### 6.4 插件注册 CLI 命令的发现与补全

Issue [#145347](https://github.com/NousResearch/hermes-agent/issues/145347) 请求插件注册的 CLI 命令同步出现在 `hermes --help` 与 `hermes completion` 中。  
这是低复杂度、高用户价值的兼容性改进，有可能较快进入下一版本。

### 6.5 流式中断、交互式 artifacts 与多模态插件

- [#144657](https://github.com/NousResearch/hermes-agent/pull/144657)：插件主动请求中断流式响应；
- [#144461](https://github.com/NousResearch/hermes-agent/pull/144461)：会话内发布并回收交互式 HTML artifact；
- [#145876](https://github.com/NousResearch/hermes-agent/pull/145876)：搜索来源 capsule 与引用优先侧栏；
- [#145877](https://github.com/NousResearch/hermes-agent/pull/145877)：WhatsApp 语音调用；
- [#145861](https://github.com/NousResearch/hermes-agent/pull/145861)：Muse harness。

这些 PR 表明路线正在向“Agent 可控流式交互、插件生态扩展、桌面可视化来源和跨平台语音”推进。

### 6.6 下一版本候选判断

**较可能近期进入：**

- 插件 CLI 帮助与 completion 补全；
- Desktop/Webapp 房间存储统一；
- Buzz 连接保活及 reaction lifecycle；
- Feishu 群级 `ignore_at_all`；
- Desktop 工具运行摘要展示修复；
- 插件目录版本更新。

**需要设计决策或较大工程：**

- Doc-Chain Substrate；
- 语义分块与检索策略；
- Tailscale Serve 原生集成；
- 跨 Desktop/Gateway/CLI 的统一 session identity；
- 多 profile 下的安全根目录与 credential scope 统一。

---

## 7. 用户反馈摘要

### 用户真实使用场景

1. **远程主机与多设备管理**  
   用户通过 `hermes serve --host 0.0.0.0 --port 9119 --isolated` 承载 Desktop，希望本地或另一设备能够恢复已有会话。当前 session resume 和 Dashboard 会话列表不一致，直接增加了远程运维成本。  
   来源：[#139818](https://github.com/NousResearch/hermes-agent/issues/139818)、[#145811](https://github.com/NousResearch/hermes-agent/issues/145811)

2. **多 profile Gateway 复用**  
   多 profile Gateway 已成为常见部署方式，但暴露了 Approval transport 无法访问本 profile credentials、Desktop 忽略 `HERMES_WRITE_SAFE_ROOT` 等问题。  
   来源：[#145857](https://github.com/NousResearch/hermes-agent/issues/145857)、[#136204](https://github.com/NousResearch/hermes-agent/issues/136204)

3. **移动端中文输入**  
   移动 Web Dashboard 用户使用讯飞输入法时，聊天输入内容无法进入 composer，而粘贴和登录表单正常，属于明确的前端事件兼容问题。  
   来源：[#145848](https://github.com/NousResearch/hermes-agent/issues/145848)

4. **多平台消息与异步代理**  
   Discord 的 thread 元数据漂移已有修复，但 Telegram 命名 forum topic 中，后台代理完成唤醒无法 admitted，并最终被丢弃。  
   来源：[#139488](https://github.com/NousResearch/hermes-agent/pull/139488)、[#145868](https://github.com/NousResearch/hermes-agent/issues/145868)

5. **长会话和文档知识管理**  
   高热度 RFC 表明用户希望 Agent 在压缩后仍能读取带来源的长期记录，并让用户无需重复提供上下文。  
   来源：[#143379](https://github.com/NousResearch/hermes-agent/issues/143379)

### 满意度信号

- Buzz 的连接保活、配置加载和 reaction lifecycle 问题均已形成修复，说明社区 Issue 到 PR 的闭环较顺畅；
- Webapp 的插件分发、自定义 endpoint 和房间状态分裂问题已关闭，Webapp 的可用性正在快速提升；
- Tailscale 请求获得 11 个赞，说明“安全、零配置远程访问”是明确且持续的用户价值诉求。

### 不满意与信任风险

- 某些 UI 操作提示“成功”，实际配置却没有生效；
- 会话在列表中可见却无法恢复；
- profile 的文件安全限制在 Desktop 中失效；
- 凭据池轮换异常可能造成错误计费；
- Kanban 任务在依赖完成后仍可能永久停在 ready；
- 多个 Bug 未见明确 fix PR，用户缺少可跟踪的修复预期。

---

## 8. 待处理积压

### 8.1 长期高热度、尚未关闭的重要 Issue

1. **Doc-Chain Substrate RFC**  
   Issue [#143379](https://github.com/NousResearch/hermes-agent/issues/143379)  
   已积累 **29 条评论**，需要明确 RFC 接受范围、治理模型和实施里程碑。

2. **Tailscale Serve 集成**  
   Issue [#9269](https://github.com/NousResearch/hermes-agent/issues/9269)  
   自 2026-04 起持续开放，获得 **11 个赞**。建议明确是否进入 Webapp/Gateway 的正式远程部署路线。

3. **语义分块和检索方法论**  
   Issue [#76320](https://github.com/NousResearch/hermes-agent/issues/76320)  
   已有显著评测提升，但仍标记 `needs-decision`。应组织 benchmark 复核并讨论是否进入默认检索链路。

4. **Anthropic 凭据池轮换与计费隔离**  
   Issue [#118379](https://github.com/NousResearch/hermes-agent/issues/118379)  
   P1，涉及账户轮换、fallback 和账单归属，应给出明确 owner、修复 PR 和回归测试。

5. **Desktop `HERMES_WRITE_SAFE_ROOT` 安全边界失效**  
   Issue [#136204](https://github.com/NousResearch/hermes-agent/issues/136204)  
   自 2026-10 起持续开放，且同时影响 Bot-to-Bot 投递，不应仅作为普通 Desktop bug 处理。

6. **远程 Desktop session 无法恢复**  
   Issue [#139818](https://github.com/NousResearch/hermes-agent/issues/139818)  
   **25 条评论、2 个赞**，属于高曝光核心会话一致性问题。

### 8.2 需要关注合并节奏的 PR

- [#144657](https://github.com/NousResearch/hermes-agent/pull/144657)：插件主动终止流式响应；
- [#144461](https://github.com/NousResearch/hermes-agent/pull/144461)：交互式 live artifacts；
- [#139625](https://github.com/NousResearch/hermes-agent/pull/139625)：飞书按组忽略 `@all`；
- [#145873](https://github.com/NousResearch/hermes-agent/pull/145873)：慢网络 Gateway probe 稳定性；
- [#145874](https://github.com/NousResearch/hermes-agent/pull/145874)：压缩行为文档；
- [#145875](https://github.com/NousResearch/hermes-agent/pull/145875)：Desktop 工具状态摘要；
- [#143251](https://github.com/NousResearch/hermes-agent/pull/143251)：工具错误标题链接化修复；
- [#145876](https://github.com/NousResearch/hermes-agent/pull/145876)：搜索来源插件；
- [#145877](https://github.com/NousResearch/hermes-agent/pull/145877)：WhatsApp 语音插件更新；
- [#145861](https://github.com/NousResearch/hermes-agent/pull/145861)：Muse harness 插件目录。

### 8.3 维护建议

1. **优先处理 P1 安全与计费边界**：凭据轮换、`HERMES_WRITE_SAFE_ROOT`。
2. **统一 session identity 与存储模型**：同时覆盖 Gateway、Desktop、Webapp、Dashboard 和 CLI PTY。
3. **抽象跨平台事件准入层**：将 Discord 的 completion wake-up 修复推广至 Telegram、Matrix 等适配器。
4. **为 Kanban 状态机补充明确状态清理规则**：区分限流退出、普通失败、崩溃和 claim 过期。
5. **加快 41 条待合并 PR 的分批评审**：优先合并低风险修复、文档和插件目录更新，再处理涉及协议与持久化结构的变更。
6. **为关键 Issue 补充 fix PR 关联**：当前多个 P1/P2 问题仍未显示明确修复路径，容易降低用户对维护节奏的信任。

---

## 健康度结论

**今日健康度：活跃但承压（中高活跃度，中等稳定性）。**

项目在 Webapp、插件目录、Buzz、Desktop 展示和异步消息修复上均有实质推进，Issue—PR—关闭链路整体有效；社区创新意愿强，插件供给活跃。  
主要风险集中在 **多 profile 安全隔离、跨端会话一致性、凭据调度、Kanban 状态机及异步任务准入**。若这些高优先级问题继续缺乏明确 fix PR，当前高提交量可能进一步转化为维护与合并积压，而不是稳定版本收益。

</details>

<details>
<summary><strong>OpenHuman</strong> — <a href="https://github.com/tinyhumansai/openhuman">tinyhumansai/openhuman</a></summary>

# OpenHuman 项目动态日报

**日期：2026-10-28**  
**统计窗口：过去 24 小时**  
**数据范围：14 条 Issues 更新、43 条 PR 更新；其中新开/活跃 Issues 12 条、已关闭 Issues 2 条；PR 待合并 21 条、已合并或关闭 22 条；无新版本发布。**

---

## 1. 今日速览

OpenHuman 今日保持较高开发活跃度，过去 24 小时共更新 **57 个 Issue/PR 条目**，但其中仍有 **21 个 PR 待合并**，工程重心明显集中在工作流构建器、子智能体事件传递、Rust 测试稳定性和存储隔离等方向。  
过去 24 小时关闭的 2 个 Issue 均涉及 MongoDB 兼容导入或子智能体完成状态回传，说明部分存量问题已进入修复或验证阶段。  
当前较突出的风险是 Rust 单进程测试存在共享存储状态导致的非确定性失败，以及默认功能组合下测试代码无法编译；对应修复 PR 尚未确认合并。  
社区需求集中在移动端伴侣、工作流创建与验证体验、后台代理状态可视化及存储后端统一治理，反映产品正从核心能力建设逐步转向稳定性和可用性完善。  
综合评估：**开发活跃度较高、修复推进明显，但测试基础设施、事件路由和工作流一致性仍处于需要重点收敛的阶段。**

---

## 3. 项目进展

### 3.1 子智能体生命周期事件回传得到修复

已关闭的 [#8451：Delegated sub-agent card stays on “Working”](https://github.com/tinyhumansai/openhuman/issues/8451) 表明，委派子智能体已经成功结束，但 `subagent_completed` 没有进入用户 WebSocket，导致聊天卡片长期停留在 “Working”。

对应 PR：

- [#8463：project a detached sub-agent's late completion](https://github.com/tinyhumansai/openhuman/pull/8463)
- [#8465：drive the workflow builder from chat end to end](https://github.com/tinyhumansai/openhuman/pull/8465)
- [#8475：assert the #8460/#8463 fixes in the builder-chat e2e](https://github.com/tinyhumansai/openhuman/pull/8475)

这些 PR 已关闭，摘要显示其推进方向是：在父代理运行器停止读取进度后，将迟到的 `subagent_completed` 和 `subagent_awaiting_user` 投影至 WebSocket，并补充端到端测试。

**进展评价：**直接改善委派任务的可见性和最终状态收敛，是今日最直接的用户体验修复之一。

---

### 3.2 工作流提案保存链路开始收敛

今日工作流相关 PR 数量较多，主要覆盖：

- [#8460：settle the proposal card when the agent saves it in chat](https://github.com/tinyhumansai/openhuman/pull/8460)  
  已在聊天中保存工作流提案后，将 `saved_flow_id` 回写到线程中的提案消息，避免卡片持续显示未落库状态。

- [#8466：cover workflow builder edge cases](https://github.com/tinyhumansai/openhuman/pull/8466)  
  增加 `draft_id`、`flow_id`、内联 `graph` 优先级及节点级检查等边界测试，摘要明确为测试补充。

- [#8465：workflow builder chat end-to-end](https://github.com/tinyhumansai/openhuman/pull/8465)  
  覆盖“聊天触发构建器 → 异步返回提案卡片 → 聊天确认保存 → 工作流落库”的完整路径。

- [#8439：prevent stale validation after draft revision changes](https://github.com/tinyhumansai/openhuman/pull/8439)  
  将异步验证结果与具体草稿修订绑定，编辑器内容变化时立即隐藏旧结果，避免旧 RPC 响应覆盖新状态。

- [#8445：guard unsaved workflow drafts across navigation](https://github.com/tinyhumansai/openhuman/pull/8445)  
  将未保存草稿保护从编辑器返回按钮扩展到侧栏、历史记录和应用内路由跳转。

**进展评价：**工作流构建器正在从“功能可用”向“状态一致、结果可信、草稿不丢失”演进。不过，保存重复、提案稳定 ID、后台线程事件缺失等问题仍表明该链路尚未完全收敛。

---

### 3.3 存储兼容性故障已有对应修复方向

已关闭的 [#8422：Legacy store import fails on every boot with MongoDB storage](https://github.com/tinyhumansai/openhuman/issues/8422) 指向 MongoDB 后端下旧 `cron`、`sessions` 导入在启动阶段持续失败的问题。

从当前状态看，该 Issue 已关闭，说明存储导入兼容性问题至少在问题跟踪层面得到处理。

此外：

- [#8473：keep a test-installed storage slot to its own test](https://github.com/tinyhumansai/openhuman/pull/8473) 仍在开放状态，目标是将进程级测试存储槽限制在所属测试线程内，减少并发测试互相污染。
- [#8427：finish the tinystoragedrivers ownership epic](https://github.com/tinyhumansai/openhuman/issues/8427) 继续推进存储驱动所有权重构。

**进展评价：**MongoDB 启动导入问题已有收口迹象，但测试存储隔离仍是影响默认 Rust 测试可靠性的关键阻塞项。

---

### 3.4 聊天、设置和可访问性改进集中进入 PR 阶段

今日待合并 PR 中，前端体验改进占比较高：

- [#8471：按工作目录分组会话](https://github.com/tinyhumansai/openhuman/pull/8471)：以完整规范化路径识别项目，避免同名目录误合并。
- [#8464：关闭通知时恢复键盘焦点](https://github.com/tinyhumansai/openhuman/pull/8464)：提升通知面板的键盘可访问性。
- [#8437：为工具失败提供真实错误诊断](https://github.com/tinyhumansai/openhuman/pull/8437)：仅在存在可用处理器时展示重试/跳过，并透传未知错误输出。
- [#8469：隔离线程重命名快捷键](https://github.com/tinyhumansai/openhuman/pull/8469)：防止 Enter/Escape 冒泡至全局快捷键处理器。
- [#8462：账号切换时隐藏旧公告](https://github.com/tinyhumansai/openhuman/pull/8462)：避免账号 A 的公告显示在账号 B 下。
- [#8461：预览模型适配性与预估成本](https://github.com/tinyhumansai/openhuman/pull/8461)：为模型路由提供只读、默认折叠的评估预览。
- [#8468：持久化前验证 BYOK Endpoint](https://github.com/tinyhumansai/openhuman/pull/8468)：加强 URL、凭据及传输协议校验。

**进展评价：**前端重点已从单纯功能扩展转向状态一致性、错误透明度、可访问性和安全配置校验，产品成熟度信号积极。

---

### 3.5 长对话成本和记忆连续性得到专项优化

[#8477：Compact idle threads, honour summarizer_model, add a memory block and per-turn recall](https://github.com/tinyhumansai/openhuman/pull/8477) 是今日新开且较具综合性的 PR，包含：

1. 实际启用 `[context] summarizer_model` 及对应环境变量；
2. 压缩空闲线程；
3. 增加记忆区块；
4. 引入逐轮召回。

该 PR 直接针对长对话成本、压缩策略未生效以及跨压缩上下文连续性等核心问题。

**进展评价：**若验证和合并顺利，可能成为下一阶段上下文管理与长期记忆体验的重要基础。

---

### 3.6 CI 覆盖率开始分片

[#8474：shard hosted coverage and require all three full-suite reports](https://github.com/tinyhumansai/openhuman/pull/8474) 将托管 Rust 覆盖率拆分为 core、facades、integrations 三组，并要求提交完整套件报告。

**进展评价：**有助于缩短 CI 反馈时间并降低单次任务负载，但需关注分片后结果合并、失败定位及报告完整性。

---

## 4. 社区热点

> 当前提供的 PR 数据中评论数均为 `undefined`，无法据此可靠比较 PR 热度。以下按 24 小时内新建、活跃更新及 Issue 评论量综合判断。

### 4.1 子智能体进度与完成状态反馈

相关条目：

- [#8470：OpenHuman does not display delegated agent progress consistently](https://github.com/tinyhumansai/openhuman/issues/8470)
- [#8451：Delegated sub-agent card stays on “Working”](https://github.com/tinyhumansai/openhuman/issues/8451)
- [#8458：Background-delivery sub-agents never reach the user's socket](https://github.com/tinyhumansai/openhuman/issues/8458)
- [#8463：修复迟到的子智能体完成事件](https://github.com/tinyhumansai/openhuman/pull/8463)

**诉求：**用户希望在聊天中实时看到代理是否正在工作、是否等待人工输入，以及何时真正完成。  
**背后问题：**事件发布依赖正确的 client、thread room 和运行阶段；不同投递模式下的路由规则不统一。  
**热度判断：**这是今日最集中的用户痛点之一，且已有明确修复 PR 和端到端测试配合。

---

### 4.2 Rust 测试不稳定和默认构建失败

相关条目：

- [#8467：Single-process libtest 约有 66 个非确定性失败](https://github.com/tinyhumansai/openhuman/issues/8467)
- [#8476：默认 feature 下 lib test 无法编译](https://github.com/tinyhumansai/openhuman/issues/8476)
- [#8473：隔离测试安装的存储槽](https://github.com/tinyhumansai/openhuman/pull/8473)

**诉求：**恢复默认贡献者配置下的可编译性，并让单进程 libtest 可重复运行。  
**背后问题：**测试共享进程级存储，以及 `storage-sqlite` 测试辅助代码的 feature gate 不一致。  
**热度判断：**直接影响所有 Rust 贡献者，可能造成 CI 红灯和错误归因，属于维护者优先处理事项。

---

### 4.3 工作流提案重复保存与身份不稳定

相关条目：

- [#8459：从卡片保存后再次说“save it”会创建副本](https://github.com/tinyhumansai/openhuman/issues/8459)
- [#8456：工作流提案缺少稳定 ID](https://github.com/tinyhumansai/openhuman/issues/8456)
- [#8453：edit_workflow 草稿中的 graph.name 未写入解析后的名称](https://github.com/tinyhumansai/openhuman/issues/8453)
- [#8444：为新工作流提供草稿句柄](https://github.com/tinyhumansai/openhuman/issues/8444)
- [#8460：保存后回写 saved_flow_id](https://github.com/tinyhumansai/openhuman/pull/8460)

**诉求：**确保工作流只保存一次、提案卡具有稳定身份、新建流程可以立即验证和 dry-run。  
**背后问题：**卡片消息与 Agent 保存路径之间缺少统一幂等机制，工作流命名和草稿生命周期也未统一。  
**热度判断：**Issues 数量最多且相互关联，表明工作流构建器正处于关键集成阶段。

---

### 4.4 长对话记忆与成本

- [#8477：压缩空闲线程、启用 summarizer_model、增加记忆区块和逐轮召回](https://github.com/tinyhumansai/openhuman/pull/8477)

**诉求：**降低长对话成本，同时避免压缩后遗忘用户偏好和关键上下文。  
**背后问题：**现有配置已提供但未被消费，且上下文压缩与记忆注入尚未形成统一机制。

---

### 4.5 移动端伴侣需求

- [#8158：Tiny on Mobile：轻量移动伴侣应用](https://github.com/tinyhumansai/openhuman/issues/8158)

**诉求：**在桌面端离开后，仍能接收后台工作流完成、人工审批请求和定时任务状态。  
**背后问题：**OpenHuman 当前仍偏桌面原生，连续后台运行和远程交互能力不足。  
**热度判断：**该 Issue 自 10 月 20 日创建后今日仍有更新，代表持续性的产品方向诉求，但短期落地概率低于已有修复类 PR。

---

## 5. Bug 与稳定性

### P1 / 高优先级

1. **Rust 单进程测试约 66 个非确定性失败**  
   [#8467](https://github.com/tinyhumansai/openhuman/issues/8467)  
   - 失败集合会随运行变化，核心失败涉及 security approval、agent orchestration 等模块。
   - 单次测试耗时约 600 秒。
   - **可能对应修复：** [#8473](https://github.com/tinyhumansai/openhuman/pull/8473)，当前待合并。
   - **影响：** 高，直接降低 CI 可信度并增加维护成本。

2. **默认 feature 配置下测试无法编译**  
   [#8476](https://github.com/tinyhumansai/openhuman/issues/8476)  
   - `storage-sqlite` 测试辅助函数受 feature gate 控制，但无 gate 测试仍调用它们。
   - **当前未见明确对应 fix PR。**
   - **影响：** 高，阻断新贡献者执行默认测试命令。

### P2 / 中高优先级

3. **后台投递回合创建的子智能体事件无法进入用户 Socket**  
   [#8458](https://github.com/tinyhumansai/openhuman/issues/8458)  
   - `subagent_spawned` 等事件被发布到 `system` client，且缺少 thread room。
   - **现有相关修复：** [#8463](https://github.com/tinyhumansai/openhuman/pull/8463) 已关闭，但该 Issue 仍开放，疑似覆盖范围不完全一致，需确认是否已完整覆盖 background-delivery 场景。

4. **工作流重复保存**  
   [#8459](https://github.com/tinyhumansai/openhuman/issues/8459)  
   - 卡片已保存后，Agent 路径没有读取 `saved_flow_id`，再次执行“save it”会创建第二份流程。
   - **现有相关修复：** [#8460](https://github.com/tinyhumansai/openhuman/pull/8460) 已关闭，但 Issue 仍开放，需验证是否已消除重复创建。

5. **提案卡缺少稳定 ID**  
   [#8456](https://github.com/tinyhumansai/openhuman/issues/8456)  
   - 同名且来自同一 source message 的活跃提案可能共享卡片身份。
   - **未见明确对应 fix PR。**

6. **`edit_workflow` 保存的草稿缺少解析后的工作流名**  
   [#8453](https://github.com/tinyhumansai/openhuman/issues/8453)  
   - 名称虽然单独传入写入函数和提案，但未写入 `graph.name`。
   - **未见明确对应 fix PR。**

7. **新建工作流没有草稿句柄，无法直接验证/dry-run**  
   [#8444](https://github.com/tinyhumansai/openhuman/issues/8444)  
   - 新流程在生成 draft/flow handle 前，验证接口只能依赖内联 graph。
   - **相关增强：** [#8445](https://github.com/tinyhumansai/openhuman/pull/8445)、[#8439](https://github.com/tinyhumansai/openhuman/pull/8439) 改善草稿保护与验证时效，但未直接覆盖 handle 创建问题。

8. **TinyJuice 在 debug 日志中泄露检索 token**  
   [#8447](https://github.com/tinyhumansai/openhuman/issues/8447)  
   - `retrieve_tool.rs` 以 debug 级别原样记录检索 token。
   - **未见明确对应 fix PR。**
   - **影响：** 中高，属于隐私与敏感信息泄露风险。

9. **MongoDB 下旧存储导入每次启动失败**  
   [#8422](https://github.com/tinyhumansai/openhuman/issues/8422)  
   - **状态：已关闭。**
   - 建议在后续版本确认兼容性覆盖范围及是否存在配置迁移要求。

### P2 / 产品一致性

10. **委派代理进度显示不一致**  
    [#8470](https://github.com/tinyhumansai/openhuman/issues/8470)  
    - 用户无法判断任务仍在运行还是已经结束。
    - **相关修复：** [#8463](https://github.com/tinyhumansai/openhuman/pull/8463)，但 Issue 仍开放，需确认所有执行模式均已覆盖。

11. **工作流验证结果可能陈旧**  
    通过 [#8439](https://github.com/tinyhumansai/openhuman/pull/8439) 修复，待合并。

12. **未保存工作流在应用内导航时可能丢失**  
    通过 [#8445](https://github.com/tinyhumansai/openhuman/pull/8445) 修复，待合并。

### P3 / 一般优先级

13. **Telegram 配对 allowlist 使用旧硬编码路径，重启后可能丢失**  
    [#8168](https://github.com/tinyhumansai/openhuman/pull/8168)  
    - **已有 fix PR，待合并。**

14. **源码证据工具的只读 no-follow 语义需纳入存储绕过审计**  
    [#8449](https://github.com/tinyhumansai/openhuman/issues/8449)  
    - 对应功能 PR：[#8442](https://github.com/tinyhumansai/openhuman/pull/8442)  
    - 涉及 `O_NOFOLLOW`、文件身份校验及安全策略边界，应在合并前完成审计确认。

---

## 6. 功能请求与路线图信号

### 6.1 轻量移动端伴侣

- [#8158：Tiny on Mobile](https://github.com/tinyhumansai/openhuman/issues/8158)

用户希望离开桌面后仍能：

- 接收后台工作流完成通知；
- 处理需要人工确认的审批门；
- 查看持续运行的代理状态；
- 维持与 Neocortex/后台记忆的连接。

**路线图判断：**属于中期产品扩展，直接对应“桌面原生能力向全天候个人 AI 延伸”的定位。但需要先稳定后台任务、WebSocket 事件和远程审批链路，因此短期内更可能先完善 API/通知基础设施，而非立即发布完整移动客户端。

---

### 6.2 长对话上下文压缩与持续记忆

- [#8477](https://github.com/tinyhumansai/openhuman/pull/8477)

该 PR 已把需求具体化，包括：

- 真正使用 summarizer model；
- 压缩闲置线程；
- 保存记忆区块；
- 逐轮召回记忆。

**路线图判断：**优先级较高，已有实现型 PR，最可能进入下一轮合并窗口。其价值在于同时改善长对话成本和上下文连续性。

---

### 6.3 工作流 Builder 的完整创作闭环

已有 PR：

- [#8439](https://github.com/tinyhumansai/openhuman/pull/8439)
- [#8445](https://github.com/tinyhumansai/openhuman/pull/8445)
- [#8465](https://github.com/tinyhumansai/openhuman/pull/8465)
- [#8466](https://github.com/tinyhumansai/openhuman/pull/8466)
- [#8475](https://github.com/tinyhumansai/openhuman/pull/8475)

未完成需求：

- [#8444](https://github.com/tinyhumansai/openhuman/issues/8444)
- [#8453](https://github.com/tinyhumansai/openhuman/issues/8453)
- [#8456](https://github.com/tinyhumansai/openhuman/issues/8456)
- [#8459](https://github.com/tinyhumansai/openhuman/issues/8459)

**路线图判断：**工作流 Builder 已是当前最明确的近期投入方向。预计下一阶段重点将是：

1. 统一 draft、flow、proposal 三者身份；
2. 保存操作幂等化；
3. 新流程可直接 validate/dry-run；
4. 保证异步验证结果与草稿版本一致；
5. 完善端到端测试。

---

### 6.4 模型路由的可解释性和成本预览

- [#8461](https://github.com/tinyhumansai/openhuman/pull/8461)

通过只读预览展示模型适配性、上下文限制及估算成本。

**路线图判断：**属于设置页的低风险增强，容易并入近期版本；可帮助用户理解路由决策，避免仅以价格或单一评分选择模型。

---

### 6.5 存储后端统一治理

- [#8427](https://github.com/tinyhumansai/openhuman/issues/8427)

该 Epic 的主体已落地，剩余目标是完成 `tinystoragedrivers` 所有权收敛。

**路线图判断：**属于技术债清理，不代表新增用户功能，但会提升 MongoDB、SQLite、内存和文件后端的一致性，并为后续移动端或服务端部署提供稳定基础。

---

## 7. 用户反馈摘要

### 真实痛点

1. **代理状态不可见是最高频反馈**  
   [#8470](https://github.com/tinyhumansai/openhuman/issues/8470)、[#8451](https://github.com/tinyhumansai/openhuman/issues/8451)  
   用户无法区分“仍在运行”“等待用户”“已经完成但 UI 未更新”，会直接降低对自动执行任务的信任。

2. **重复保存会破坏用户对工作流系统的信任**  
   [#8459](https://github.com/tinyhumansai/openhuman/issues/8459)  
   用户从卡片保存后再让 Agent 保存同一流程，本应幂等，却产生第二份副本。该问题虽操作简单，但会制造数据整理负担。

3. **异步状态旧数据覆盖新编辑**  
   [#8439](https://github.com/tinyhumansai/openhuman/pull/8439)  
   用户修改草稿后可能看到旧版本验证结果，容易误以为当前配置有效。

4. **长对话成本和遗忘问题同时存在**  
   [#8477](https://github.com/tinyhumansai/openhuman/pull/8477)  
   用户既希望减少不必要的长上下文调用，又希望压缩后保留个人偏好和长期任务状态。

5. **桌面离开后无法安心使用后台代理**  
   [#8158](https://github.com/tinyhumansai/openhuman/issues/8158)  
   当前形态适合坐在电脑前操作，但无法自然覆盖移动通知、审批和后台工作流跟进场景。

6. **跨重启的 Telegram 配对容易丢失**  
   [#8168](https://github.com/tinyhumansai/openhuman/pull/8168)  
   配对信息写入运行时不会读取的旧路径，直接影响渠道接入的连续性。

### 满意与积极信号

- 工作流 Builder 已有覆盖从聊天触发、提案交付到保存落库的端到端测试，说明该功能已具备较高工程关注度。
- 用户能够提出具体、可复现且带日志证据的反馈，尤其 [#8451](https://github.com/tinyhumansai/openhuman/issues/8451) 给出了任务 ID、状态时间和事件信息，问题定位质量较高。
- 多个 Issue 在短时间内被关闭，表明核心维护者对存储兼容、子智能体状态和工作流测试问题有较强响应能力。
- PR 主题已覆盖可访问性、键盘操作、错误透明度、BYOK 安全和账号切换一致性，表明项目开始系统关注生产使用质量。

---

## 8. 待处理积压

### 8.1 长期开放的重要需求

1. **移动端伴侣**  
   [#8158](https://github.com/tinyhumansai/openhuman/issues/8158)  
   自 2026-10-20 创建并持续更新，已超过一周。建议维护者明确其定位：独立移动应用、通知桥接、PWA，还是仅先提供远程 API/审批入口。

2. **存储驱动所有权 Epic 收尾**  
   [#8427](https://github.com/tinyhumansai/openhuman/issues/8427)  
   主体工作已完成，但后续项仍开放。建议拆分剩余迁移清单，并标注是否阻塞 MongoDB、SQLite 或远程部署支持。

### 8.2 尚未关闭但已有修复 PR 的问题

这些 Issue 应确认修复是否已覆盖原始复现路径，避免“PR 已关闭、Issue 仍开放”的状态不一致：

- [#8451](https://github.com/tinyhumansai/openhuman/issues/8451) ↔ [#8463](https://github.com/tinyhumansai/openhuman/pull/8463)
- [#8459](https://github.com/tinyhumansai/openhuman/issues/8459) ↔ [#8460](https://github.com/tinyhumansai/openhuman/pull/8460)
- [#8467](https://github.com/tinyhumansai/openhuman/issues/8467) ↔ [#8473](https://github.com/tinyhumansai/openhuman/pull/8473)

### 8.3 今日新建但尚无明确修复 PR 的问题

- [#8476：默认 feature 测试无法编译](https://github.com/tinyhumansai/openhuman/issues/8476)
- [#8456：工作流提案缺少稳定 ID](https://github.com/tinyhumansai/openhuman/issues/8456)
- [#8453：草稿 graph.name 缺失](https://github.com/tinyhumansai/openhuman/issues/8453)
- [#8458：后台投递子智能体事件未进入用户 Socket](https://github.com/tinyhumansai/openhuman/issues/8458)
- [#8447：TinyJuice 泄露检索 token](https://github.com/tinyhumansai/openhuman/issues/8447)

### 8.4 待合并 PR 队列观察

今日有 **21 个 PR 待合并**。建议维护者优先审查和合并以下高价值项：

1. [#8473](https://github.com/tinyhumansai/openhuman/pull/8473)：解除 Rust 测试非确定性失败；
2. [#8441](https://github.com/tinyhumansai/openhuman/pull/8441)：在最终回答前验证重要工具执行结果；
3. [#8442](https://github.com/tinyhumansai/openhuman/pull/8442)：提供受限只读源码证据工具；
4. [#8468](https://github.com/tinyhumansai/openhuman/pull/8468)：BYOK Endpoint 写入前安全校验；
5. [#8477](https://github.com/tinyhumansai/openhuman/pull/8477)：长对话压缩、记忆区块和逐轮召回；
6. [#8439](https://github.com/tinyhumansai/openhuman/pull/8439)、[#8445](https://github.com/tinyhumansai/openhuman/pull/8445)：工作流验证一致性和草稿保护。

---

## 项目健康度结论

**综合健康度：中高，趋势向上，但仍有明显稳定性债务。**

- **优势：**高活跃度；核心问题反馈详细；工作流、子智能体、上下文记忆、存储和前端体验均有实质推进；PR 覆盖从底层安全到上层 UX，范围较完整。
- **主要风险：**Rust 测试存在非确定性失败和默认构建失败；子智能体事件路由在不同线程/后台模式下不一致；工作流提案身份和保存幂等尚未完全解决；PR 数量较多且待合并队列较长。
- **下一阶段关键指标：**
  1. 默认 feature 与单进程 libtest 是否恢复稳定；
  2. 后台及普通回合的子智能体事件能否统一到达用户 Socket；
  3. 工作流保存是否具备严格幂等性；
  4. `#8451`、`#8459`、`#8467` 等已有关联 PR 的 Issue 能否及时关闭；
  5. `summarizer_model`、记忆区块与逐轮召回是否通过长对话回归测试。

**下一版本预判：**若当前高优先级测试与工作流修复顺利合并，下一版本可能重点呈现为“更稳定的工作流构建器、更可靠的代理进度反馈、更低成本的长对话与更安全的模型配置”，并以内部稳定性和工作流体验升级为主，而非新增大型客户端功能。

</details>

---
*本日报由 [Big Model Radar](https://github.com/96loveslife/big_model_radar) 自动生成。*
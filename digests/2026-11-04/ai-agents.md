# OpenClaw 生态日报 2026-11-04

> Issues: 394 | PRs: 500 | 覆盖项目: 8 个 | 生成时间: 2026-11-04 05:42 UTC

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

**日期：2026-11-04**  
**数据范围：过去 24 小时**  
**整体判断：高频活跃、修复密集，但稳定性与维护积压仍较突出。**

---

## 一、今日速览

过去 24 小时 OpenClaw 共更新 **394 条 Issues**（234 条新开或活跃、160 条关闭）和 **500 条 PRs**（312 条待合并、188 条已合并或关闭），另有 **1 个 Beta 版本**发布。项目当前处于高强度工程推进期，重点集中在 **Agent 运行时、模型回退、Gateway 生命周期、插件更新、UI 展示与安全边界**。  
新版本 `v2026.11.5-beta.1` 引入 **Knowledge Scribes** 与 **PostgreSQL 数据平面**，但 Issues 中仍存在多个 P0/P1 级稳定性问题，尤其是运行时发布失效、Doctor 修复卡死、Gateway 更新挂起和会话恢复失败。  
当前 PR 数量显著高于 Issues，且大量变更直接对应当日活跃 Bug，显示修复响应速度较快；但仍有 **312 条 PR 待合并**，其中不少标记为 `needs proof` 或 `waiting on author`，测试证据和合并吞吐是下一阶段的主要瓶颈。  
社区对自动化的关注明显升温，问题集中在 **模型切换后的回退、自动化兼容性、并发配额、失败告警和长期运行成本**。整体健康度可评为 **“活跃但承压”**：功能推进快，回归、并发和升级链路尚未完全稳定。

---

## 二、版本发布

### `v2026.11.5-beta.1`

- **发布类型：** Beta
- **版本链接：** [GitHub Release v2026.11.5-beta.1](https://github.com/openclaw/openclaw/releases/tag/v2026.11.5-beta.1)

#### 主要更新

1. **Knowledge Scribes**
   - 增加一等公民级的知识捕获能力。
   - 提供可复用的 Scribe 工作流。
   - 覆盖 Agent、会话及 Control UI。
   - 相关 PR / Issue 编号：`#185583`、`#185637`、`#185974`、`#186270`、`#186455`、`#187659`。

2. **PostgreSQL 数据平面**
   - 引入 PostgreSQL-backed state，为更大规模部署和更灵活的状态存储提供基础。
   - 原始 Release 说明中的该部分内容被截断，具体迁移细节仍应以完整 Release Notes 和后续文档为准。

#### 破坏性变更与迁移注意事项

- 当前提供的数据未显示明确的破坏性变更清单。
- PostgreSQL 数据平面属于新的部署能力，**不建议在未阅读完整迁移与备份文档前切换生产存储**。
- 升级前应重点验证：
  - SQLite 与 PostgreSQL 状态模型的一致性；
  - Gateway 重启后的会话、记忆与 Agent 恢复；
  - 插件迁移、凭据同步和并发写入；
  - 现有 `doctor` 修复流程与数据库迁移兼容性。
- 本版本为 Beta，相关 PR 同时在修复 Codex 启动冻结、候选版本启动和模型目录内存占用等问题，因此**生产环境宜先进行隔离候选启动和回滚演练**。
- 候选版本启动相关修复可见：[PR #192546](https://github.com/openclaw/openclaw/pull/192546)。

---

## 三、项目进展

> 原始数据未提供逐条已合并 PR 的标题、时间和变更明细，以下依据已关闭 PR 的摘要与当日开放 PR 的目标，归纳项目当天主要推进方向；不能将“CLOSED”直接等同于“已合并”。

### 1. Agent 运行时可靠性增强

- **模型目录缓存与内存控制**
  - 停止在模型目录刷新后无限保留旧序列化配置，并限制缓存规模。
  - 另有 PR 试图降低冷启动时模型目录准备造成的内存占用。
  - 关联：[PR #192545](https://github.com/openclaw/openclaw/pull/192545)、[PR #192552](https://github.com/openclaw/openclaw/pull/192552)、[Issue #192547](https://github.com/openclaw/openclaw/issues/192547)。

- **运行时发布失效后的 Fleet 容错**
  - 避免单个 prepared runtime owner 未发布导致整个 Fleet 停止派发。
  - 对应活跃故障：[Issue #166634](https://github.com/openclaw/openclaw/issues/166634)、[Issue #172628](https://github.com/openclaw/openclaw/issues/172628)、[PR #191461](https://github.com/openclaw/openclaw/pull/191461)。

- **Claude CLI 并发内存耗尽**
  - 限制多个 Claude CLI 会话同时启动时的资源竞争，降低低内存主机被拖垮的概率。
  - 关联：[PR #192534](https://github.com/openclaw/openclaw/pull/192534)。

### 2. Gateway、更新与启动链路修复

- **Codex app-server 启动导致 Gateway 冻结**
  - 调整启动与资源竞争处理，避免操作系统卡顿时整个 Gateway 被阻塞。
  - 关联：[PR #192543](https://github.com/openclaw/openclaw/pull/192543)。

- **存储竞争下的会话启动停顿**
  - 对 SQLite busy/locked 租约续期失败进行分类重试，以减少存储压力下的启动卡顿。
  - 关联：[PR #192548](https://github.com/openclaw/openclaw/pull/192548)。

- **Windows Gateway 更新挂起**
  - 仍有报告显示 Control UI 更新停在 `Activating`，任务被禁用且 Gateway 停止。
  - 关联：[Issue #169844](https://github.com/openclaw/openclaw/issues/169844)。

- **macOS 登录启动状态误报**
  - 修复 `launchctl` 已失败但界面仍显示成功，以及旧选项覆盖新选择的问题。
  - 关联：[PR #185024](https://github.com/openclaw/openclaw/pull/185024)。

### 3. 模型、搜索与网络缓存修复

- **Web 搜索和抓取缓存改用单调时钟**
  - 在系统时钟回拨或前跳时，仍按实际经过时间刷新 TTL 缓存。
  - 关联：[PR #192568](https://github.com/openclaw/openclaw/pull/192568)。

- **Control UI 重试窗口改用单调时钟**
  - 避免页面休眠、机器睡眠或系统时间变化造成聊天历史重试窗口失效。
  - 关联：[PR #192529](https://github.com/openclaw/openclaw/pull/192529)。

- **Brave Search SSRF 与凭据泄露防护**
  - 拒绝被阻断地址及 link-local 地址，避免 API Key 被发送到云元数据服务。
  - 关联：[PR #191445](https://github.com/openclaw/openclaw/pull/191445)。

### 4. 插件、扩展与渠道生态扩展

- **ClawRouter 支持更多语音转写服务**
  - 扩展至带限定名称的 Groq、Mistral 和 Deepgram 文件转写。
  - 关联：[PR #192558](https://github.com/openclaw/openclaw/pull/192558)、[PR #192173](https://github.com/openclaw/openclaw/pull/192173)。

- **插件渠道准入代码延迟加载**
  - 避免仅使用模型目录时提前加载 Telegram、Matrix 等渠道运行时依赖，以降低常驻资源占用。
  - 关联：[PR #191939](https://github.com/openclaw/openclaw/pull/191939)。

- **原生 MCP 插件支持环境变量认证头**
  - 修复原生 MCP 服务将环境变量占位符原样作为 Header 发送的问题。
  - 关联：[PR #184203](https://github.com/openclaw/openclaw/pull/184203)。

- **插件能力图标区分**
  - 为语音、生成、搜索、提取、迁移等能力增加不同图标。
  - 关联：[PR #192338](https://github.com/openclaw/openclaw/pull/192338)。

### 5. 自动化和 UI 行为改善

- **Cron 中止任务不再误报失败**
  - 用户停止、重启或替换计划任务时，遵循现有中断策略，不再触发不必要的失败告警。
  - 关联：[PR #192550](https://github.com/openclaw/openclaw/pull/192550)。

- **Slack 线程回复跟随父消息删除**
  - 避免父消息被删除后，线程回复继续发送。
  - 关联：[PR #180854](https://github.com/openclaw/openclaw/pull/180854)。

- **Cloud 环境 UI 重构**
  - 将 Cloud 环境从隐藏在 Advanced 区域改为围绕机器、仓库和自动保存组织。
  - 关联：[PR #191462](https://github.com/openclaw/openclaw/pull/191462)。

### 推进程度评估

- **功能方向：** 明显推进，知识工作流、PostgreSQL、模型目录、Web UI、插件和多渠道支持持续扩展。
- **质量方向：** 修复覆盖面较广，但大量核心 PR 尚待精确 head CI 验证。
- **合并吞吐：** 当日关闭 188 条 PR，关闭率约 **37.6%**；仍有 312 条待合并，队列压力不低。
- **整体评价：** 项目在快速交付，但“已修复”尚未完全等同于“已验证并安全落地”。

---

## 四、社区热点

### 1. Native host exec 共享状态完整性错误

- **Issue：** [#177656](https://github.com/openclaw/openclaw/issues/177656)
- **状态：** Open，P1
- **评论：** 26 条
- **热度：** 当日最高评论的开放 Issue。

**核心诉求：**  
用户在稳定版 `2026.10.5` 上频繁遇到：

```text
service child cleanup identity lost:
Direct shared-state reader requires current integrity admission
```

报告称至少出现 28 次，且子进程结果未得到证明。用户关注的不是单一错误文案，而是**原生执行结果完整性、子进程副作用可追踪性和失败后的状态恢复**。

### 2. Doctor 自动修复长时间无输出

- **Issue：** [#178359](https://github.com/openclaw/openclaw/issues/178359)
- **状态：** Open，P1
- **评论：** 24 条

**核心诉求：**  
`doctor --fix --non-interactive` 在 macOS 上运行超过 15 分钟，无输出且没有进入预期的 Agent DB 修复阶段。社区期待：

- 自动修复过程可观测；
- 明确显示当前阶段和等待原因；
- 超时后给出可操作建议；
- 修复不能依赖重启才能恢复。

### 3. 崩溃恢复后 Agent 永久不可用

- **Issue：** [#166634](https://github.com/openclaw/openclaw/issues/166634)
- **状态：** Open
- **评论：** 22 条

**核心诉求：**  
Gateway 异常退出后，后台 Agent 准备因 SQLite 回收提交检查点过期而失败，Agent 持续拒绝 `chat.history`、`chat.metadata`、`models.list` 等请求。用户希望系统具备更可靠的：

- 崩溃恢复；
- 回收检查点恢复；
- 会话一致性修复；
- 明确的不可用原因，而非只返回 `UNAVAILABLE`。

### 4. WebChat 最终回复重复或错位

- **Issue：** [#149153](https://github.com/openclaw/openclaw/issues/149153)
- **评论：** 10 条
- **关联 Issue：** [#177094](https://github.com/openclaw/openclaw/issues/177094)
- **关联 PR：** [#192529](https://github.com/openclaw/openclaw/pull/192529)

**核心诉求：**  
部分场景中，WebChat 会：

- 将最终回复显示两次；
- 在重启或刷新后，把系统通知镜像挤入折叠工具步骤；
- 虽存储层只有一份数据，但 UI 重建结果错误。

这反映用户对**对话历史真实性和展示一致性**的要求，而不仅是视觉瑕疵。

### 5. Agent 循环缺少运行级预算

- **Issue:** [#178373](https://github.com/openclaw/openclaw/issues/178373)
- **状态：** Open，P2
- **评论：** 8 条

**核心诉求：**

- 工具循环检测默认关闭；
- 单轮没有明确的 turn/token 预算；
- 历史上下文每轮重复计费和重放；
- 用户需要运行级成本、时长和循环次数上限。

这是从“功能可用”走向“可控、可预测运行”的明确路线图信号。

### 6. 模型回退链被用户选择覆盖

- **Issue：** [#84865](https://github.com/openclaw/openclaw/issues/84865)
- **关联 Issue：** [#151980](https://github.com/openclaw/openclaw/issues/151980)、[#158421](https://github.com/openclaw/openclaw/issues/158421)
- **评论：** 6–7 条

**核心诉求：**  
用户手动切换模型或使用会话级模型 pin 后，原本的 fallback chain 可能被完全替换为单一模型。供应商超时、503 或限流时，会话无法恢复。

该议题是当日最明确的产品一致性需求之一：**手动选模不应意外关闭容灾能力**。

### 7. 默认模型变更影响自动化

- **Issue：** [#188761](https://github.com/openclaw/openclaw/issues/188761)
- **状态：** Open
- **评论：** 7 条

**核心诉求：**  
更换 Agent 默认模型可能令继承旧模型的自动化在执行前就失败。用户希望变更时提供：

- 只读影响检查；
- 自动化兼容性提示；
- 更清晰的模型迁移说明；
- 避免静默破坏或自动转移配置。

### 8. 新模型目录与 Claude CLI 内存问题

- **PR：** [#192534](https://github.com/openclaw/openclaw/pull/192534)
- **Issue：** [#159356](https://github.com/openclaw/openclaw/issues/159356)

**核心诉求：**  
多个 Claude CLI 对话集中启动时，8 GB Linux 主机可能耗尽内存；llama.cpp 场景也曾出现“服务显示 ready、embedding 子进程却退出并返回 HTTP 500”的问题。社区诉求集中在**并发启动限流、内存上限和就绪状态真实性**。

---

## 五、Bug 与稳定性

### P0 / 发布阻断级

#### 1. iOS App Store 版本无法注册 APNs Relay

- **Issue：** [#146791](https://github.com/openclaw/openclaw/issues/146791)
- **状态：** Open，P0
- **已有 fix PR：** **未发现明确关联修复 PR**

**影响：**  
iOS App 可以配对并建立连接，但不会向 Gateway 发布 `push.apns.register`，导致应用挂起后无法被唤醒或接收推送。

#### 2. Windows Control UI Gateway 更新永久停在 “Activating”

- **Issue：** [#169844](https://github.com/openclaw/openclaw/issues/169844)
- **状态：** Open，P0
- **已有 fix PR：** **未发现明确关联修复 PR**

**影响：**  
更新过程中服务停止，Windows Scheduled Task 被禁用，Gateway 无法恢复，包也没有完成更新，属于升级链路的数据面与可用性双重风险。

---

### P1 / 严重稳定性问题

#### 3. Native host exec 共享状态完整性准入失败

- **Issue：** [#177656](https://github.com/openclaw/openclaw/issues/177656)
- **已有 fix PR：** **未发现明确关联修复 PR**

**影响：**  
原生执行可能因 integrity admission 失败而中断，子进程副作用和结果完整性无法确认。

#### 4. `doctor --fix --non-interactive` 修复准备阶段卡死

- **Issue：** [#178359](https://github.com/openclaw/openclaw/issues/178359)
- **已有 fix PR：** **未发现明确关联修复 PR**

**影响：**  
自动修复长期无输出、未进入目标修复阶段，运维自动化不可预测。

#### 5. 崩溃恢复后 Agent 永久不可用

- **Issue：** [#166634](https://github.com/openclaw/openclaw/issues/166634)
- **相关 PR：** [PR #191461](https://github.com/openclaw/openclaw/pull/191461)
- **关联度：** PR 解决“prepared runtime owner 未发布导致 Fleet 停止派发”，但未明确覆盖 SQLite 回收检查点过期问题，因此**不能视为完整修复**。

#### 6. 插件延迟迁移永不收敛

- **Issue：** [#167557](https://github.com/openclaw/openclaw/issues/167557)
- **已有 fix PR：** **未发现明确关联修复 PR**

**影响：**  
插件升级后持续报告 handoff lease / database identity 变化，迁移无法完成。

#### 7. Windows 插件 source-capture 无限增长

- **Issue：** [#162585](https://github.com/openclaw/openclaw/issues/162585)
- **已有 fix PR：** **未发现明确关联修复 PR**

**影响：**  
插件自身包被反复物化到 `node_modules/<self>`，目录从约 290 MB 膨胀至 612 MB 以上，最终 Gateway 无法进入健康状态。

#### 8. 多 Agent 运行时发布失败及 Codex 启动超时

- **Issue：** [#158127](https://github.com/openclaw/openclaw/issues/158127)
- **相关 PR：** [PR #192543](https://github.com/openclaw/openclaw/pull/192543)
- **关联度：** 主要覆盖 Codex app-server 启动冻结，不能确认覆盖全部多 Agent publication failure。

#### 9. Telegram 非插件 callback payload 被静默丢弃

- **Issue：** [#126950](https://github.com/openclaw/openclaw/issues/126950)
- **状态：** Open，P1
- **已有 fix PR：** **未发现明确关联修复 PR**

**影响：**  
内联按钮点击后无反馈，直接影响 Telegram 自动化交互。

#### 10. 默认模型 profile 被解释为显式用户锁定

- **Issue：** [#158421](https://github.com/openclaw/openclaw/issues/158421)
- **关联 PR：** [PR #192545](https://github.com/openclaw/openclaw/pull/192545)
- **关联度：** PR 主要解决模型目录刷新后的配置保留问题，未明确解决 auth pin 与跨供应商回退。

#### 11. Gateway 启动后 Agent admission 被 superseded

- **Issue：** [#172628](https://github.com/openclaw/openclaw/issues/172628)
- **相关 PR：** [PR #191461](https://github.com/openclaw/openclaw/pull/191461)
- **关联度：** Fleet 派发容错修复可能覆盖部分路径，但应验证 `agents/main` 的启动恢复。

#### 12. Android 实时 Talk 复用已归档会话

- **Issue：** [#175027](https://github.com/openclaw/openclaw/issues/175027)
- **状态：** 已关闭
- **已有修复：** 已关闭，原始数据未显示具体合并 PR。

---

### P2 / 重要功能性与回归问题

| 问题 | 状态 | Fix / PR 判断 |
|---|---|---|
| [#151962](https://github.com/openclaw/openclaw/issues/151962) 内部运行字符串被显示为用户消息 | Open | 未发现明确 fix PR |
| [#136311](https://github.com/openclaw/openclaw/issues/136311) Gateway 重启重新获取 memory reindex 锁，临时库累积 | Open | 未发现明确 fix PR |
| [#143640](https://github.com/openclaw/openclaw/issues/143640) memory index 全量发布事务耗尽 SQLite busy timeout | Open | 未发现明确 fix PR |
| [#138561](https://github.com/openclaw/openclaw/issues/138561) active-memory 升级后停止召回 | Open | 未发现明确 fix PR |
| [#154104](https://github.com/openclaw/openclaw/issues/154104) Matrix E2EE 空闲 Gateway 高 CPU、持续磁盘写入 | Open | 未发现明确 fix PR |
| [#164279](https://github.com/openclaw/openclaw/issues/164279) Self-learning 连续 50 次完成率为 0 | Open | 未发现明确 fix PR |
| [#178373](https://github.com/openclaw/openclaw/issues/178373) Agent 循环缺少 turn/token 预算 | Open | 未发现明确 fix PR |
| [#182891](https://github.com/openclaw/openclaw/issues/182891) Prompt cache 从未复用 | Open | 未发现明确 fix PR |
| [#142606](https://github.com/openclaw/openclaw/issues/142606) Native App 中 Dashboard 外链静默失效 | Open | 未发现明确 fix PR |
| [#191944](https://github.com/openclaw/openclaw/issues/191944) macOS Gateway stop/force 无法检查进程祖先 | Open | 未发现明确 fix PR |
| [#164355](https://github.com/openclaw/openclaw/issues/164355) 插件无法在工具结果后追加上下文 | Open | 属于扩展点设计缺口 |
| [#133296](https://github.com/openclaw/openclaw/issues/133296) shared auth profile 被错误路由到 Agent store | Open | 未发现明确 fix PR |
| [#158143](https://github.com/openclaw/openclaw/issues/158143) Cron 并发固定为 8，配置项失效 | Open | 未发现明确 fix PR |
| [#149153](https://github.com/openclaw/openclaw/issues/149153) WebChat 最终回复重复显示 | Open | 未发现明确 fix PR |
| [#177094](https://github.com/openclaw/openclaw/issues/177094) WebChat 重启后系统通知挤走最终回复 | Open | [PR #192529](https://github.com/openclaw/openclaw/pull/192529) 修复计时逻辑，未明确覆盖展示重建 |

### 安全问题

- **Secrets profile 路由错误：** [#133296](https://github.com/openclaw/openclaw/issues/133296)
  - 共享认证配置可能被写入 Agent 私有存储，影响凭据隔离。
  - 未发现明确 fix PR。
- **CDP 凭据 URL 暴露给模型：** [#158966](https://github.com/openclaw/openclaw/issues/158966)
  - 已关闭，但原始数据未显示修复 PR。
- **Brave Search SSRF/凭据外泄：** [PR #191445](https://github.com/openclaw/openclaw/pull/191445)
  - 已有针对性安全修复 PR，状态 Open。

---

## 六、功能请求与路线图信号

### 1. Knowledge Scribes：已进入当前 Beta

- **Release：** [v2026.11.5-beta.1](https://github.com/openclaw/openclaw/releases/tag/v2026.11.5-beta.1)
- 相关 PR：`#185583`、`#185637`、`#185974`、`#186270`、`#186455`、`#187659`。

这是本期最明确的产品路线信号：OpenClaw 正从“通用 Agent/会话框架”向**可复用知识捕获与知识工作流平台**演进。

### 2. PostgreSQL 数据平面

- **Release：** [v2026.11.5-beta.1](https://github.com/openclaw/openclaw/releases/tag/v2026.11.5-beta.1)

预计面向：

- 更大规模、多租户或高并发部署；
- 将状态从单机 SQLite 解耦；
- 为长期运行的 Agent、会话与记忆提供更稳健的数据层。

这是基础设施级路线变化，但 Beta 阶段应优先验证迁移、回滚和故障恢复。

### 3. 自适应 Swarm 计算与受限启动契约

- **Issue：** [#156632](https://github.com/openclaw/openclaw/issues/156632)
- **Issue：** [#158068](https://github.com/openclaw/openclaw/issues/158068)
- **关联 PR：** [#155442](https://github.com/openclaw/openclaw/pull/155442)

诉求包括：

- 为 `agents.run` 增加受限启动契约；
- 隔离执行和仅摘要返回；
- 根据验证任务动态调整 Swarm population；
- 区分通用候选/验证器控制与自适应测试时计算策略。

两个 Issue 已关闭，说明至少一部分方向已进入实现或产品决策流程，但自适应 population controller 被明确拆为独立后续工作。

### 4. Agent 运行级预算与成本控制

- **Issue：** [#178373](https://github.com/openclaw/openclaw/issues/178373)

可能进入下一版本的设计项：

- 默认开启工具循环检测；
- 单轮最大 turn 数；
- token 和费用预算；
- 上下文重放与 prompt cache 优化；
- 运行终止原因结构化展示。

这是比单纯 UI 提示更重要的运行时能力，预计会与模型回退、自动化预算一起推进。

### 5. 模型选择与回退链统一

- **Issue：** [#84865](https://github.com/openclaw/openclaw/issues/84865)
- **Issue：** [#151980](https://github.com/openclaw/openclaw/issues/151980)
- **Issue：** [#158421](https://github.com/openclaw/openclaw/issues/158421)
- **Issue：** [#188761](https://github.com/openclaw/openclaw/issues/188761)

潜在方向：

- 区分“用户硬 pin”和“默认模型继承”；
- 手动切换模型时保留可用的 fallback chain；
- 默认模型变更前执行自动化兼容性预检；
- 对既有自动化提示模型失效风险。

该需求命中多个 P1/P2 Issue，下一版本优先级较高。

### 6. 插件扩展点增强

- **Issue：** [#164355](https://github.com/openclaw/openclaw/issues/164355)

用户希望插件能在工具结果返回后、模型生成最终答案前注入内容。这要求调整工具循环和请求构建阶段的扩展契约，技术与兼容性风险较高，短期更可能先以新增 hook 或实验性 API 形式落地。

### 7. 每 Agent 压缩和上下文裁剪配置

- **Issue：** [#52732](https://github.com/openclaw/openclaw/issues/52732)

用户希望 `agents.list` 支持逐 Agent 配置 `compaction` 和 `contextPruning`，而不是只能使用全局默认值。由于这直接关联长会话成本和稳定性，具备明确产品价值。

### 8. Cron 并发配置恢复

- **Issue：** [#158143](https://github.com/openclaw/openclaw/issues/158143)

当前 `cron.maxConcurrentRuns` 已成为无效配置，固定 8 并发导致长任务耗尽隔离运行槽位。恢复可配置并发，或提供按任务类型的队列策略，预计会较快进入后续修复。

### 9. 插件能力发现与启动体验优化

- **Issue：** [#145308](https://github.com/openclaw/openclaw/issues/145308)
- **Issue：** [#162585](https://github.com/openclaw/openclaw/issues/162585)
- **Issue：** [#167557](https://github.com/openclaw/openclaw/issues/167557)

潜在路线：

- 延迟加载技能目录；
- 减少启动 prompt 占用；
- 改进插件 source capture；
- 让迁移与包收敛具备幂等性和可恢复性。

### 10. Linux ARM64 官方构建

- **Issue：** [#138279](https://github.com/openclaw/openclaw/issues/138279)
- **状态：** 已关闭

该功能请求已关闭，但原始数据未显示具体实现 PR。若已落地，说明 Linux 桌面 companion 覆盖范围进一步扩大。

---

## 七、用户反馈摘要

### 真实使用场景

1. **多 Agent、多渠道长期运行**
   - 用户同时运行 Telegram、Matrix、Slack、Teams、Android/iOS 和多个后台 Agent。
   - 典型诉求是跨渠道消息可靠性、模型回退、推送唤醒和统一会话管理。
   - 代表 Issues：[#158127](https://github.com/openclaw/openclaw/issues/158127)、[#126950](https://github.com/openclaw/openclaw/issues/126950)、[#146791](https://github.com/openclaw/openclaw/issues/146791)。

2. **低资源 VPS、Mac mini 和本地模型**
   - 4–8 GB 内存设备是常见环境，Claude CLI、llama.cpp、模型目录和 memory-core 同时运行时容易触发 OOM 或 SQLite 锁争用。
   - 代表 Issues：[#159356](https://github.com/openclaw/openclaw/issues/159356)、[#136311](https://github.com/openclaw/openclaw/issues/136311)、[PR #192534](https://github.com/openclaw/openclaw/pull/192534)。

3. **长期会话和自动化**
   - 用户运行 13 天、约 31 万 token 的会话，并使用 Cron、heartbeat、自学习和多渠道通知。
   - 痛点集中在上下文膨胀、缓存失效、phantom messages、后台任务 0% 完成率和误报失败。
   - 代表 Issues：[#151962](https://github.com/openclaw/openclaw/issues/151962)、[#164279](https://github.com/openclaw/openclaw/issues/164279)、[#182891](https://github.com/openclaw/openclaw/issues/182891)、[#158143](https://github.com/openclaw/openclaw/issues/158143)。

### 主要痛点

- **升级后不能稳定恢复：** Doctor 卡死、迁移不收敛、Gateway 启动失败、插件目录无限增长。
- **可观测性不足：** 很多错误只有最终 `UNAVAILABLE` 或无输出，没有明确说明等待哪个锁、哪个 owner、哪次迁移。
- **状态显示与真实健康不一致：** 例如 llama.cpp 显示 ready、但 embedding 子进程已退出；Gateway 健康但 Agent 已锁死。
- **控制面可靠性不足：** Windows 更新停在 Activating，macOS stop 失败，Native App 外链无反馈。
- **成本不可控：** 历史重放、prompt cache 失效、无 turn/token 预算、Cron 并发配置失效。
- **会话可信度不足：** UI 重复回复、显示内部运行字符串为用户消息、崩溃后 Agent 永久不可用。

### 满意与积极信号

- Release Notes 明确引入 Knowledge Scribes，并跨 Agent、会话和 Control UI 打通，功能方向获得明确关注。
- 社区对 PostgreSQL 数据平面的关注表明用户对**长期部署、并发和状态可靠性**存在实际需求。
- 当日 PR 覆盖 Codex 冻结、Claude CLI OOM、缓存时钟漂移、Cron 误告警、Brave SSRF、WebChat 重试等真实故障，说明维护者正在贴近生产反馈。
- 已关闭的 Databricks Unity Gateway、Tailscale Serve 恢复、Anthropic 缓存、Android Talk 会话等问题，反映部分历史问题已经完成收敛。

### 不满意点

- 多个 P0/P1 Issue 仍带有 `no-new-fix-pr` 或 `needs-maintainer-review` 标签。
- 部分“已关闭”Issue 的关闭原因和对应合并 PR 未在数据中提供，难以判断是修复、重复、stale 还是产品决策。
- `needs proof` 与 `waiting on author` 的 PR 比例不可直接计算，但这些状态在重点 PR 中频繁出现，合并验证仍需加强。

---

## 八、待处理积压

### 1. 长期未响应的重要 Issues

以下问题创建时间较早、评论较多，仍处于 Open，且缺少明确修复 PR：

1. **会话上下文膨胀**
   - [#67419](https://github.com/openclaw/openclaw/issues/67419)
   - 已关闭为 stale，但 Bootstrap 每轮重复注入、浪费 20%–30% token 的设计问题仍值得重新评估。

2. **memory-core reindex 锁无法释放**
   - [#136311](https://github.com/openclaw/openclaw/issues/136311)
   - 自 2026-09-02 起未解决；19 GB 临时数据库累积，属于资源泄漏级问题。

3. **Claude CLI session limit 未触发 fallback**
   - [#118793](https://github.com/openclaw/openclaw/issues/118793)
   - 自 2026-08-03 起未解决，直接影响供应商容灾。

4. **每 Agent 压缩和上下文裁剪配置缺失**
   - [#52732](https://github.com/openclaw/openclaw/issues/52732)
   - 自 2026-03-23 起未解决，虽非故障，但直接影响长期部署成本。

5. **Telegram callback payload 被丢弃**
   - [#126950](https://github.com/openclaw/openclaw/issues/126950)
   - 自 2026-08-21 起未解决，影响渠道交互可用性。

6. **Secrets shared profile 路由错误**
   - [#133296](https://github.com/openclaw/openclaw/issues/133296)
   - 自 2026-08-30 起未解决，涉及凭据隔离，应提高审核优先级。

7. **用户切换模型后 fallback chain 丢失**
   - [#84865](https://github.com/openclaw/openclaw/issues/84865)
   - 自 2026-05-21 起未解决；已形成明确需求但缺乏可验证实现。

8. **active-memory 升级后停止召回**
   - [#138561](https://github.com/openclaw/openclaw/issues/138561)
   - 自 2026-09-04 起未解决，且日志缺少明确信号。

### 2. 等待维护者或作者处理的 PR

1. **Windows Code Mode node exec pending 调查**
   - [PR #188726](https://github.com/openclaw/openclaw/pull/188726)
   - 明确为 Draft 调查占位，没有实现补丁，不应进入合并队列。

2. **存储竞争下减少会话启动停顿**
   - [PR #192548](https://github.com/openclaw/openclaw/pull/192548)
   - 状态为 `waiting on author`，涉及 SQLite 租约重试和启动可靠性，应尽快补齐测试与精确 head 验证。

3. **降低模型目录冷启动内存**
   - [PR #192552](https://github.com/openclaw/openclaw/pull/192552)
   - 状态为 `waiting on author`，并标记 security-sensitive changed。

4. **ClawRouter Deepgram 文件转写**
   - [PR #192173](https://github.com/openclaw/openclaw/pull/192173)
   - `needs proof`，且涉及兼容性与安全边界，应优先补充端到端证明。

5. **ClawRouter Groq/Mistral 限定转写**
   - [PR #192558](https://github.com/openclaw/openclaw/pull/192558)
   - `needs proof`，需验证 multipart、文件上传和供应商兼容。

6. **Brave Search 安全修复**
   - [PR #191445](https://github.com/openclaw/openclaw/pull/191445)
   - `needs proof`，但涉及 API Key 泄露与 SSRF，应给予更高审查优先级。

7. **Codex app-server 启动冻结修复**
   - [PR #192543](https://github.com/openclaw/openclaw/pull/192543)
   - 规模 XL，已接受部分资源权衡，仍等待精确 head CI 和原生落地验证。

8. **Fleet 运行时未发布容错**
   - [PR #191461](https://github.com/openclaw/openclaw/pull/191461)
   - `needs proof`，应覆盖配置热更新失败、prepared runtime owner 丢失和多 Agent 并发场景。

### 3. 建议维护者优先处理顺序

1. **立即处理：** iOS APNs 注册、Windows 更新挂起、Secrets profile 路由、Brave SSRF。
2. **稳定版发布前处理：** native host exec、Doctor 卡死、崩溃恢复、插件迁移不收敛、模型回退链。
3. **Beta 验收期间处理：** PostgreSQL 迁移/回滚、Knowledge Scribes 数据一致性、Codex 启动冻结、冷模型目录内存。
4. **清理长期积压：** memory reindex 锁、prompt cache、每 Agent compaction、cron 并发配置、自学习 0% 完成率。
5. **提升合并质量：** 对 `needs proof` PR 建立统一的跨平台复现、精确 head CI、回滚与安全测试清单。

---

## 结论

OpenClaw 当前呈现出典型的“高吞吐开发 + 高并发复杂度”状态：知识工作流、PostgreSQL、多模型和插件生态快速扩张，但运行时发布、升级迁移、内存与数据库锁问题正在放大维护压力。  
短期项目健康度为 **活跃但承压**；若 `v2026.11.5-beta.1` 能在候选启动、数据库迁移和插件升级链路上完成验证，并解决 P0/P1 存量问题，项目健康度有望明显回升。维护重点应从“持续增加功能”适度转向 **收敛回归、提升可观测性、保证升级可逆性，并让用户模型选择不再破坏回退能力**。

---

## 横向生态对比

# 个人 AI 助手 / 自主智能体开源生态横向对比分析

**分析日期：2026-11-04｜观察窗口：过去 24 小时**

## 1. 生态全景

个人 AI 助手与自主智能体生态正从“单模型对话工具”快速转向覆盖**知识工作流、多智能体编排、跨渠道消息、长期记忆、插件生态和桌面端协同**的综合 Agent 平台。OpenClaw 以极高吞吐占据生态中心位置，Hermes Agent 和 QwenPaw 紧随其后，NanoBot、LobsterAI、OpenHuman 分别在轻量化 Agent、企业桌面协同及安全/嵌入式运行时方向形成差异化能力。

与此同时，生态的主要矛盾已从“功能不足”转向**稳定性、成本和状态一致性**：长上下文压缩失控、模型回退失效、重复调用烧 Token、Gateway/Desktop 会话错位、Windows 升级恢复失败等问题集中出现。今日共有 8 个项目参与观察，其中 2 个发布新版本，5 个有活跃 PR 待合并，显示行业仍处于快速迭代期，但普遍面临合并验证、跨平台回归和安全边界建设压力。

---

## 2. 各项目活跃度对比

> 统计口径为过去 24 小时 GitHub 更新；“已关闭 PR”不等同于已合并并发布。

| 项目 | Issues 更新 | PR 更新 | Release | 待合并 PR | 今日健康度 |
|---|---:|---:|---|---:|---|
| **OpenClaw** | 394 | 500 | `v2026.11.5-beta.1` | 312 | **活跃但承压** |
| **NanoBot** | 10 | 19 | 无 | 8 | **良好，存在集成积压** |
| **PicoClaw** | 3 | 1 | 无 | 0 | **偏低，4/10** |
| **IronClaw** | 0 | 1 | 无 | 1 | **平稳但低活跃** |
| **LobsterAI** | 1 | 12 | 无 | 2 | **良好，高频修复待发布** |
| **QwenPaw** | 17 | 37 | 无 | 27 | **中高，偏高波动** |
| **Hermes Agent** | 50 | 50 | `v0.22.7` | 42 | **中高** |
| **OpenHuman** | 4 | 18 | 无 | 6 | **良好，供应链待收敛** |

### 活跃度分层

- **第一梯队：OpenClaw**
  - 单日处理约 894 个 Issue/PR 更新，生态和社区规模显著领先。
  - 但 312 条待合并 PR、P0/P1 问题和运行时回归同时存在，已进入“高吞吐开发 + 高维护压力”阶段。
- **第二梯队：Hermes Agent、QwenPaw**
  - Hermes 具备稳定版本发布，QwenPaw 则以 37 条 PR 快速推进桌面端和 Hub 运行时。
  - 两者共同面临核心架构迁移和 PR 队列积压。
- **第三梯队：LobsterAI、OpenHuman、NanoBot**
  - 均有明确修复方向，但缺少当日正式发布。
  - LobsterAI 偏交付质量，OpenHuman 偏安全与模块供应链，NanoBot 偏轻量 WebUI/Goal 任务闭环。
- **低活跃观察组：PicoClaw、IronClaw**
  - PicoClaw 有明确用户需求，但缺少维护响应和可验证交付。
  - IronClaw 仅有一个文档视频工具链的 Dependabot PR，无法据此判断整体产品活跃度。

---

## 3. OpenClaw 在生态中的定位

### 3.1 生态规模领先

OpenClaw 今日单日更新量为其他项目的数倍至数十倍：

- Issue 更新量约为 Hermes Agent 的 **7.9 倍**；
- PR 更新量约为 Hermes Agent 的 **10 倍**；
- 待合并 PR 达 **312 条**，超过 Hermes Agent、QwenPaw、NanoBot、LobsterAI、OpenHuman 等项目待合并 PR 的总和。

这表明 OpenClaw 已不仅是单一 Agent 项目，而是当前个人 AI 助手生态中兼具**框架、渠道入口、插件平台、桌面伴侣和开发者社区**的枢纽型项目。

### 3.2 核心优势

1. **生态覆盖最完整**
   - 覆盖 Telegram、Matrix、Slack、QQ/微信式渠道适配、APNs 推送、WebChat、Desktop Companion、Cron、插件、MCP、模型目录及多 Agent 运行时。
2. **基础设施路线更激进**
   - `v2026.11.5-beta.1` 同时引入 Knowledge Scribes 与 PostgreSQL 数据平面，尝试从“Agent 外壳”升级为知识工作流和长期状态平台。
3. **故障响应覆盖面广**
   - 今日修复涉及 Codex 启动冻结、Claude CLI 内存、SQLite 锁、模型回退、缓存时钟漂移、SSRF、插件加载和 WebChat 展示。
4. **社区反馈密度最高**
   - 用户问题覆盖低内存 VPS、长期会话、多渠道消息、自动化、数据库迁移和生产升级等真实场景。

### 3.3 技术路线差异

| 维度 | OpenClaw | 同类项目侧重 |
|---|---|---|
| 核心定位 | 通用 Agent/渠道/插件/知识工作流平台 | 更偏桌面助手、轻量任务代理、安全嵌入式或单一渠道体验 |
| 数据层 | SQLite 向 PostgreSQL 数据平面扩展 | 多仍围绕本地文件、SQLite 或单体会话 |
| 长期知识 | Knowledge Scribes 已进入 Beta | 多处于记忆压缩、队列或会话持久化阶段 |
| 扩展体系 | 原生 MCP、插件渠道、工具、Provider、模型目录 | 多集中于单一 MCP、插件目录或 Provider 扩展 |
| 运维复杂度 | 最高，Gateway/运行时/数据库/渠道耦合强 | NanoBot、PicoClaw 相对轻量；LobsterAI、QwenPaw 更强调桌面封装 |

### 3.4 主要短板

OpenClaw 的规模也带来明显复杂度：

- **312 条待合并 PR**，测试证据与合并吞吐成为瓶颈；
- iOS APNs、Windows 更新、Doctor 卡死等 P0/P1 问题尚未闭环；
- 用户手动选模会破坏 fallback chain；
- 会话展示、模型状态、插件迁移和运行恢复存在“界面成功但底层未完成”的信任问题。

**判断：** OpenClaw 是当前生态的**事实标准和能力上限**，但尚不是生产可靠性上限。其竞争优势来自规模和生态，短板则是升级链、状态一致性和维护复杂度。

---

## 4. 共同关注的技术方向

### 4.1 长上下文、压缩与成本治理

涉及项目：**OpenClaw、NanoBot、LobsterAI、QwenPaw、Hermes Agent、PicoClaw**

共同诉求：

- 避免上下文无限增长、重复注入和历史重放；
- 压缩失败后继续任务，而不是直接失败；
- 压缩过程应可视化、可取消、可诊断；
- 建立 token、费用、turn 和重试预算。

典型案例：

- LobsterAI 发现 OpenClaw 历史注入可导致单夜额度从 8,000+ credits 降至约 800 credits。
- OpenClaw 用户提出 Agent 缺少 turn/token 预算。
- PicoClaw 出现单轮 222 次模型调用、约 1,310 万输入 token 的严重事故。

**趋势判断：** 2026 年 Agent 竞争的核心指标正从“上下文窗口有多大”转向“系统能否以可控成本长期运行”。

---

### 4.2 模型回退、Provider 兼容与真实状态展示

涉及项目：**OpenClaw、QwenPaw、NanoBot、LobsterAI、Hermes Agent**

共同诉求：

- 用户手动选择模型不应意外关闭 fallback chain；
- OpenAI-compatible 中继网关应正确触发重试和降级；
- 定时任务、人工接管和 fallback 后，UI 必须展示实际使用的模型；
- Provider 固定值不能在异常时被静默绕过。

**趋势判断：** 模型路由需要从“字符串配置”升级为具有**硬 pin、默认继承、回退链、渠道级策略和运行时状态**的正式控制面。

---

### 4.3 Agent 循环、空转与运行级预算

涉及项目：**OpenClaw、PicoClaw、NanoBot、Hermes Agent**

共同诉求：

- 默认启用工具循环检测；
- 限制单轮最大调用数、turn、token 和费用；
- 检测输出停滞、重复工具调用和无进展状态；
- 超限时优雅终止并说明原因。

**趋势判断：** “模型会一直尝试”正在从模型能力问题演变为 Agent Runtime 必须承担的系统安全问题。

---

### 4.4 Windows、桌面端与升级恢复

涉及项目：**OpenClaw、QwenPaw、Hermes Agent、NanoBot、LobsterAI**

共同问题：

- 更新后 Gateway 或 Desktop 服务未恢复；
- AppContainer、DACL、文件权限和架构识别导致启动失败；
- Windows 路径、GBK/CP936、CRLF 等本地兼容问题；
- macOS 登录项、桌面伴侣拖拽和置顶回归。

其中 QwenPaw 的 Hub Local Runtime、OpenClaw 的 Windows 更新卡死、Hermes 的 Profile 粘滞问题均表明：

**跨平台发行不再是打包问题，而是 Agent 进程生命周期和权限模型问题。**

---

### 4.5 Gateway、Desktop 与移动端会话权威

涉及项目：**Hermes Agent、OpenClaw、QwenPaw、OpenHuman**

核心诉求：

- Desktop、Web、TUI、SSH、Cron 和移动端共享统一会话状态；
- 会话快照、Owner Forward 和 WebSocket 队列具备大小限制与背压；
- 慢 RPC 不应阻塞中断、审批等控制消息；
- 手机端支持远程审批、定位、语音和实时通知。

**趋势判断：** Agent 的下一阶段架构重点是**统一 Session Authority 与跨端协议**，而不是继续增加彼此独立的客户端。

---

### 4.6 插件、渠道和供应链治理

涉及项目：**OpenClaw、QwenPaw、Hermes Agent、OpenHuman、NanoBot**

共同诉求：

- 插件依赖可验证且可重复安装；
- Release、gitlink、lockfile 和运行时制品保持一致；
- 插件迁移幂等、可恢复，不产生重复目录或无限膨胀；
- 多 Profile、多渠道安装时不能破坏工具权限。

其中 OpenHuman 的模块 pin 对齐、TinySecurity 发布加载，以及 OpenClaw 的插件 source-capture 无限增长形成鲜明对照：

**插件生态的下一阶段重点将从“数量和发现能力”转向可重复安装、权限隔离、供应链一致性和失败恢复。**

---

### 4.7 安全边界与人工审批

涉及项目：**OpenHuman、QwenPaw、OpenClaw、Hermes Agent**

- OpenHuman 强化 TRC-20 钱包审批参数绑定，并推进 TinySecurity 跨发布和跨登录加载；
- QwenPaw 暴露 shell 包装外发操作可能绕过安全检测的问题；
- OpenClaw 存在 Secrets profile 路由错误和 Brave Search SSRF 风险；
- Hermes Agent 的 WeChat 内容去重会破坏 `/approve` 审批流。

**趋势判断：** 审批对象不能只依赖“相同内容”，需要绑定请求、参数、身份、nonce 和会话上下文。

---

## 5. 差异化定位分析

| 项目 | 功能侧重 | 目标用户 | 技术架构特征 |
|---|---|---|---|
| **OpenClaw** | 全渠道 Agent、知识捕获、插件、自动化、多 Agent | 高级个人用户、开发者、运营者、SaaS 集成团队 | Gateway + Runtime + 模型目录 + 插件/MCP；正扩展 PostgreSQL |
| **NanoBot** | 轻量 Goal、Subagent、WebUI、MCP 与渠道 | 个人开发者、小型自动化、需要轻量部署者 | Python/CLI/WebUI 为主，Goal continuation 与 Provider 状态管理 |
| **PicoClaw** | 轻量消息式 Agent、智能路由、潜在移动渠道 | 低门槛个人助手和 IoT 用户 | 轻量运行，智能路由仍缺熔断和预算层 |
| **IronClaw** | 本期仅见内部工具链维护 | 暂无法从今日数据判断 | 今日仅涉及文档架构视频依赖 |
| **LobsterAI** | 桌面 Cowork、OpenClaw 集成、本地模型、媒体、桌面伴侣 | 中文桌面用户、企业办公和创意工作 | 桌面封装 + OpenClaw/DeepSeek Harness，多模型与成本治理并重 |
| **QwenPaw** | 桌面端、Hub、本地运行时、多渠道插件、审批 | Windows 桌面用户、Agent 开发者、企业部署 | PyInstaller 桌面端、Hub Runtime、插件依赖治理、本地模型 |
| **Hermes Agent** | Gateway、Desktop/TUI、群聊、移动端、插件终端 | 高级自托管用户、多端和多 Agent 集群用户 | 统一 Session Authority、插件 Profile、MCP/终端后端 |
| **OpenHuman** | TinySecurity、MCP/渠道、记忆队列、工作流、嵌入式运行时 | 重视安全治理、模块化和宿主集成的团队 | vendor 模块供应链、RuntimeBuilder、MongoDB、Host Agent |

### 定位差异总结

- **OpenClaw：平台型、生态型**
- **Hermes Agent：跨端协议型、自托管基础设施型**
- **QwenPaw：桌面工作台型、Hub 运行时型**
- **LobsterAI：面向终端用户的桌面产品型**
- **NanoBot：轻量任务型、开发者友好型**
- **OpenHuman：安全模块与嵌入式宿主型**
- **PicoClaw：极简个人助手型，但尚未形成可靠护栏**
- **IronClaw：本期数据不足，暂不宜定位**

---

## 6. 社区热度与成熟度

### 6.1 社区热度分层

#### 高热度：OpenClaw、Hermes Agent、QwenPaw

- OpenClaw 的社区规模和工程吞吐遥遥领先，但维护压力最大。
- Hermes Agent 拥有稳定的版本发布节奏，移动端、低资源本地模型及 Session Authority 讨论活跃。
- QwenPaw 处于高密度 Beta 修复期，Windows 和桌面端问题驱动了大量 PR。

#### 中热度：LobsterAI、OpenHuman、NanoBot

- LobsterAI 社区反馈量不大，但 PR 数量和真实生产问题质量较高。
- OpenHuman 社区讨论规模较小，但安全、模块供应链和嵌入式方向具有较高技术密度。
- NanoBot 的 Goal 与多智能体议题受到关注，工程路线清晰但发布节奏偏慢。

#### 低热度或静默：PicoClaw、IronClaw

- PicoClaw 有明确产品需求，但 stale 关闭、无待合并 PR 和无版本发布表明维护闭环不足。
- IronClaw 今日近乎静默，不能据此否定整体成熟度，但缺乏产品信号。

### 6.2 项目成熟阶段

| 阶段 | 项目 | 判断 |
|---|---|---|
| **快速功能扩张期** | OpenClaw、QwenPaw | 架构与功能边界快速变化，版本回归和 PR 验证压力明显 |
| **跨端基础设施收敛期** | Hermes Agent | 已形成稳定发布，正在统一 Gateway/Desktop/移动端协议 |
| **质量巩固期** | LobsterAI、OpenHuman | 集中处理性能、历史恢复、成本、供应链和安全边界 |
| **轻量迭代期** | NanoBot | Goal、WebUI、Provider 和渠道逐步完善，发布节奏偏慢 |
| **早期验证期** | PicoClaw、IronClaw | 需求存在，但今日交付与维护信号不足 |

---

## 7. 值得关注的趋势信号

### 趋势一：Agent Runtime 正在成为独立产品层

多个项目的核心工作已不再围绕 Prompt，而是集中在：

- Gateway 生命周期；
- Session Authority；
- SQLite/PostgreSQL 一致性；
- Provider 回退；
- 插件租约与迁移；
- 运行预算；
- 可观测性和恢复机制。

**开发者启示：** 构建 Agent 时，应优先设计状态机、预算、恢复和路由层，而不是仅封装模型调用。

---

### 趋势二：成本安全将取代提示词优化，成为 Agent 产品的核心卖点

历史重放、图片重试、空转、压缩失败和上下文重复注入都直接产生费用。未来用户会更关注：

- 单次运行最高成本；
- fallback 是否仍生效；
- 缓存是否真正命中；
- 历史压缩是否损失语义；
- 失败任务是否重复执行。

**开发者启示：** 应将 token、调用次数、墙钟时间和重试成本做成一等运行时指标。

---

### 趋势三：桌面端不是 UI 外壳，而是 Agent 的控制平面

Windows 启动、更新恢复、AppContainer、Profile、文件锁和置顶回归在多个项目中重复出现。桌面端承担着：

- 会话授权；
- 模型和工具审批；
- 后台任务通知；
- 文件回滚；
- 远程 Agent 管理；
- 移动端入口。

**开发者启示：** 桌面产品必须从第一天设计幂等升级、配置迁移、服务恢复和跨端会话一致性。

---

### 趋势四：消息渠道的“成功语义”需要重新定义

Hermes 的 Feishu“报告成功但未发送”、WeChat 去重破坏审批、OpenClaw 的 callback payload 被丢弃，以及 QwenPaw 的并发消息状态竞争，都表明：

> 渠道适配不能只确认 HTTP 请求成功，而必须确认消息已持久化、已路由、未被去重误伤，并能在端到端流程中追踪。

**开发者启示：** 消息系统需要 message ID、幂等键、明确回执、重放语义和失败恢复机制。

---

### 趋势五：安全治理正从插件功能变成宿主契约

OpenHuman 的 TinySecurity 和 QwenPaw 的 shell 外发检测表明，安全能力需要覆盖所有入口、所有包装方式及敏感操作参数。

**开发者启示：** 统一安全 Hook 应位于模型调用前的不可绕过层，并对明确禁用、组件故障和策略拒绝采用不同语义。

---

### 趋势六：模块化带来供应链债务

多模块、多 Profile、多渠道和多运行时组合虽然提高了扩展性，却导致：

- vendor pin 不一致；
- 重复 workspace；
- 插件目录膨胀；
- 迁移不收敛；
- 安全模块版本漂移；
- 私有 CI 因签名缓存失败。

**开发者启示：** 插件与模块系统必须内置版本锁定、可重复安装、哈希校验、幂等迁移和依赖图验证。

---

### 趋势七：知识与记忆正在从附属功能变成平台主线

OpenClaw 的 Knowledge Scribes、OpenHuman 的 Memory Queue 并发、LobsterAI 的上下文压缩，以及多个项目的长期会话问题，都指向同一方向：

- 知识捕获；
- 分层记忆；
- 稳定压缩；
- 大规模导入；
- 记忆召回质量；
- 长期成本治理。

**开发者启示：** 个人 AI 助手的下一阶段竞争，不只是“谁接入更多模型”，而是“谁能让知识在数月、数千次交互后仍准确、可控且可追溯”。

---

## 结论

当前生态可概括为：**能力扩张迅速，生产可靠性尚未同步成熟。**

- OpenClaw 凭借规模和完整度成为生态中心，但需优先收敛升级、运行时、数据库和安全边界；
- Hermes Agent 正从多端工具走向统一 Gateway 架构，是跨端会话基础设施的重要标杆；
- QwenPaw 和 LobsterAI 分别在桌面工作台与终端用户体验上快速补强；
- OpenHuman 在安全模块和供应链方向体现出较强差异化；
- NanoBot 具备轻量化潜力；
- PicoClaw 和 IronClaw 则需要更明确的维护闭环与交付信号。

对开发者的核心建议是：下一阶段应优先建设**运行预算、状态一致性、幂等升级、统一会话权威、消息端到端可靠性和可验证供应链**，而不是继续以新增模型、渠道或工具数量作为主要差异化。

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目动态日报

**日期：2026-11-04**  
**数据范围：过去 24 小时 GitHub Issues / Pull Requests 更新**  
**项目：** [HKUDS/nanobot](https://github.com/HKUDS/nanobot)

---

## 1. 今日速览

NanoBot 今日保持较高开发活跃度：过去 24 小时更新 **10 个 Issues、19 个 PR**，其中 **8 个 PR 待合并、11 个已合并或关闭**。工作主要集中在 WebUI 稳定性、Provider/Codex 压缩流程、WhatsApp 依赖兼容以及 Goal 长任务执行等方向。过去一天没有新版本发布，因此当前变更仍以代码合并和问题修复为主，尚未形成可确认的发布版本。整体项目健康度评估为**良好但存在集成积压**：修复类 PR 较多且测试覆盖意识较强，但仍有多个 PR 标记为冲突，部分长期 PR 尚未完成合并。

---

## 2. 版本发布

过去 24 小时**无新版本发布**，暂无 Releases 可供说明。

因此，当前合并到主分支或处于待合并状态的修复、配置能力和渠道支持，是否会进入下一正式版本，仍需等待维护者完成合并、回归验证及版本发布。

---

## 3. 项目进展

### 3.1 WebUI 与 Goal 长任务体验持续改进

- **PR #6553：修复活跃任务期间的 Usage 和工具进度更新**
  - 链接：[PR #6553](https://github.com/HKUDS/nanobot/pull/6553)
  - 状态：待合并
  - 主要内容：长任务执行期间持续更新上下文用量和近期轮次图表，并在单个工具调用完成后及时发布结果。
  - 价值：改善长周期 Goal 的实时可观测性，避免用户只能等待整个任务结束后才看到进度。

- **PR #6538：让 Goal 维持单次 ReAct 执行直至目标关闭**
  - 链接：[PR #6538](https://github.com/HKUDS/nanobot/pull/6538)
  - 状态：已关闭
  - 主要内容：活跃 Goal 在普通 `max_tool_iterations` 达限后，通过内部 continuation prompt 继续执行；目标完成、取消或阻塞后释放执行。
  - 价值：推动 Goal 从“固定轮次任务”向可持续执行的任务闭环演进。

- **PR #6552：缓存工具目录，减少设置页重复加载**
  - 链接：[PR #6552](https://github.com/HKUDS/nanobot/pull/6552)
  - 状态：已关闭
  - 主要内容：避免用户返回 Tools 页面时重复构建 CLI Apps 与 MCP 目录，减少等待和加载占位状态。
  - 价值：直接改善 WebUI 设置导航体验。

- **PR #6547：修复 Markdown 表格中的行内公式重叠**
  - 链接：[PR #6547](https://github.com/HKUDS/nanobot/pull/6547)
  - 状态：已关闭
  - 主要内容：针对较长的 KaTeX 行内公式调整表格列宽计算，减少公式溢出和相邻列重叠。
  - 价值：提升复杂数学内容和表格内容的渲染质量。

### 3.2 Provider 与 Codex 压缩流程稳定性增强

- **PR #6548：防止图片重试绕过必需的 Codex compaction**
  - 链接：[PR #6548](https://github.com/HKUDS/nanobot/pull/6548)
  - 状态：已关闭
  - 主要内容：无状态图片修复流程不再跳过请求前的必需 compaction；重试时保留其他调用上下文字段，并补充回归测试。
  - 价值：避免上下文预算未满足时直接进入普通生成请求。

- **PR #6549：原地更新 compaction 重试状态**
  - 链接：[PR #6549](https://github.com/HKUDS/nanobot/pull/6549)
  - 状态：已关闭
  - 主要内容：将同一 compaction 生命周期中的失败和成功状态合并到同一逻辑记录，避免每次失败都产生新的状态行。
  - 价值：改善 Provider 状态展示，减少错误信息堆叠。

### 3.3 WhatsApp 渠道兼容性修复

- **PR #6546：准确报告 libmagic 依赖故障**
  - 链接：[PR #6546](https://github.com/HKUDS/nanobot/pull/6546)
  - 状态：已关闭
  - 主要内容：区分 Python 包装包缺失与原生 `libmagic` 加载失败，并在网关状态及 WebUI 二维码流程中提供更明确的修复提示。
  - 价值：减少用户将系统级依赖问题误判为普通插件缺失。

- **PR #6545：更新 Neonize 以兼容当前 WhatsApp 客户端**
  - 链接：[PR #6545](https://github.com/HKUDS/nanobot/pull/6545)
  - 状态：已关闭
  - 主要内容：解决 Neonize 版本约束过旧导致 WhatsApp 返回客户端过期（405）的问题，并允许使用已验证可连接的新版本。
  - 价值：直接维护 WhatsApp 渠道的可用性。

### 3.4 会话持久化与基础设施演进

- **PR #6536：将会话归档状态持久化到 SQLite**
  - 链接：[PR #6536](https://github.com/HKUDS/nanobot/pull/6536)
  - 状态：已关闭
  - 主要内容：把 archive flag 从 JSON 迁移至现有 SQLite 数据库，兼容旧数据导入，并保持 HTTP/WebSocket、TUI 和 WebUI 行为一致。
  - 价值：增强会话状态持久化能力，降低多个存储源之间不一致的风险。

- **PR #6556：统一手动发布与可选每日 Preview 候选流程**
  - 链接：[PR #6556](https://github.com/HKUDS/nanobot/pull/6556)
  - 状态：待合并
  - 主要内容：保留 Stable 的单一发布准备路径，同时增加 opt-in 的每日 Preview 候选准备机制；补丁版本不强制完整 Wiki 和宣传材料更新。
  - 价值：可能降低发布准备成本，并提高预览版本迭代频率。

---

## 4. 社区热点

### 4.1 Issue #5000：从 Subagent 走向真正的多智能体协作

- 链接：[Issue #5000](https://github.com/HKUDS/nanobot/issues/5000)
- 状态：开放
- 热度：**7 条评论**，为今日 Issues 中评论最多。
- 核心诉求：当前 Subagent 更接近后台任务委派，缺少持久身份、共享任务状态和智能体间协作机制。用户希望系统演进为真正的多智能体体系。
- 判断：这是面向 Agent 架构长期演进的路线图型 Issue。目前没有对应 PR 直接进入实现阶段，但与近期 Goal 长任务、Subagent 工具权限和运行状态方向存在关联，预计仍需设计讨论。

### 4.2 PR #4919：Telegram 支持自定义 Bot API 地址及请求头

- 链接：[PR #4919](https://github.com/HKUDS/nanobot/pull/4919)
- 状态：待合并
- 热度：今日更新的长期活跃 PR 之一。
- 核心诉求：支持自托管 Bot API 服务或企业网关，允许配置 `api_base` 和额外 HTTP headers，并覆盖发送与轮询路径。
- 判断：需求明确、实现范围较聚焦，具备进入后续版本的可能；但该 PR 自 2026-07-14 起持续开放，需要维护者确认当前状态及合并优先级。

### 4.3 PR #4397：执行工具链期间插入用户注意力提示

- 链接：[PR #4397](https://github.com/HKUDS/nanobot/pull/4397)
- 状态：待合并，标记为 `invalid/conflict`
- 核心诉求：用户中途发送消息时，应中断或调整工具链，使模型优先处理新增用户输入。
- 判断：属于 Agent 交互实时性的关键能力，但当前存在冲突及方案争议，需重新对齐实现和测试后再合并。

### 4.4 PR #6497：隔离 inline command 失败，避免消费者退出

- 链接：[PR #6497](https://github.com/HKUDS/nanobot/pull/6497)
- 状态：待合并，标记为冲突
- 核心诉求：`/status` 等 inline command 在会话加载或运行时解析异常时，不应让异常逃逸并终止消费者及其活跃任务。
- 判断：属于高优先级稳定性修复，尽管存在合并冲突，仍建议尽快重新基于最新主分支解决。

---

## 5. Bug 与稳定性

### 严重级别：高

1. **Subagent 忽略 `tools.cliApps.enable: false`**
   - Issue：[Issue #6554](https://github.com/HKUDS/nanobot/issues/6554)
   - 现象：主 Agent 已不再注册 `run_cli_app`，但 Subagent 仍可使用该工具。
   - 风险：配置隔离失效，可能导致权限边界与安全预期不一致。
   - Fix PR：**今日列表中未见明确对应 PR**。
   - 建议：优先检查 Subagent 工具注册路径是否复用了主 Agent 的全局配置快照。

2. **图片重试可能绕过必需的 Codex compaction**
   - Issue：[Issue #6541](https://github.com/HKUDS/nanobot/issues/6541)
   - 现象：包含图片的请求在 compaction 失败后，图片移除重试可能跳过压缩预算并直接发起普通生成。
   - 风险：可能产生上下文超限、错误重试或数据一致性问题。
   - Fix PR：**有，[PR #6548](https://github.com/HKUDS/nanobot/pull/6548)**，状态已关闭，需确认是否已合入主分支。

3. **WhatsApp 客户端版本过旧导致 405 连接失败**
   - Issue：[Issue #6544](https://github.com/HKUDS/nanobot/issues/6544)
   - 现象：旧 Neonize 客户端被 WhatsApp 判定为过期；同时旧版本约束可能覆盖用户手动安装的新版。
   - 风险：WhatsApp 渠道完全无法建立连接。
   - Fix PR：**有，[PR #6545](https://github.com/HKUDS/nanobot/pull/6545)**，状态已关闭。

### 严重级别：中

4. **Dream 在 Provider 策略阻断后仍推进批次游标**
   - PR：[PR #6100](https://github.com/HKUDS/nanobot/pull/6100)
   - 现象：Provider 返回 `refusal` 或 `content_filter` 时，Dream 仍可能把该轮视为完成并推进历史游标。
   - 风险：造成记忆批次丢失或状态不一致。
   - Fix PR：**有，PR #6100 本身即为修复**，状态待合并。

5. **inline command 异常可能终止 Agent 消费者**
   - PR：[PR #6497](https://github.com/HKUDS/nanobot/pull/6497)
   - 现象：`/status` 在异常处理边界之外执行，异常可能中断消费者并取消活跃任务。
   - 风险：单个命令故障扩大为服务级中断。
   - Fix PR：**有，PR #6497 本身即为修复**，状态待合并但存在冲突。

6. **Windows 网关租约重写触发 `PermissionError [WinError 5]`**
   - Issue：[Issue #6514](https://github.com/HKUDS/nanobot/issues/6514)
   - 现象：Windows 上间歇性无法重写 `~/.nanobot/run/gateway.clients.json`。
   - 风险：网关租约更新失败，影响客户端连接管理。
   - Fix PR：今日列表中**未见明确对应 PR**；Issue 已关闭，可能通过其他方式处理。

7. **WebUI 模型按钮不反映实际主模型或 fallback 模型**
   - Issue：[Issue #6550](https://github.com/HKUDS/nanobot/issues/6550)
   - 现象：按钮展示配置中的预设模型，而不是当前请求实际使用的模型；当 fallback 接管请求时也不会更新。
   - 风险：用户误判请求由哪个模型处理，影响调试与成本认知。
   - Fix PR：**今日列表中未见明确对应 PR**。

8. **Goal-followup 测试存在时序不稳定**
   - PR：[PR #6480](https://github.com/HKUDS/nanobot/pull/6480)
   - 现象：测试依赖轮询 bus loop，持久化会话写入较慢时可能超过 5 秒期限。
   - 风险：CI 偶发失败。
   - Fix PR：**有，PR #6480 本身即为测试修复**，状态待合并。

### 严重级别：低至中

9. **WebUI 图片设置弹窗无法通过“×”关闭**
   - Issue：[Issue #6555](https://github.com/HKUDS/nanobot/issues/6555)
   - 影响：图片设置窗口存在基础交互问题。
   - Fix PR：今日列表中**未见明确对应 PR**。

10. **WebUI “no earlier messages”提示影响滚动**
    - Issue：[Issue #6526](https://github.com/HKUDS/nanobot/issues/6526)
    - 现象：4.0 更新后，提示阻挡整个原生滚动流程；用户同时反馈字体尺寸和样式异常。
    - 影响：历史消息浏览体验退化。
    - Fix PR：今日列表中**未见明确对应 PR**；Issue 已关闭。

11. **WhatsApp libmagic 错误分类不准确**
    - Issue：[Issue #6543](https://github.com/HKUDS/nanobot/issues/6543)
    - 现象：原生 `libmagic` 缺失被错误报告为 Python 插件依赖缺失。
    - Fix PR：**有，[PR #6546](https://github.com/HKUDS/nanobot/pull/6546)**，状态已关闭。

---

## 6. 功能请求与路线图信号

### 6.1 多智能体协作架构

- 来源：[Issue #5000](https://github.com/HKUDS/nanobot/issues/5000)
- 诉求：从一次性 Subagent 委派升级为具备持久身份、共享任务状态和协作机制的多智能体系统。
- 路线图判断：属于中长期核心方向。虽然今日没有直接实现 PR，但 Goal 长任务持续执行、Subagent 权限隔离等近期工作说明 NanoBot 正从“单 Agent + 后台任务”向复杂运行编排演进。

### 6.2 MCP 预设继续扩充

- 来源：[Issue #6557](https://github.com/HKUDS/nanobot/issues/6557)
- 诉求：增加 Sprouts Data MCP 预设，支持托管 Streamable HTTP 和 API Key，面向企业及人员数据检索。
- 已有相似 PR：[PR #6014](https://github.com/HKUDS/nanobot/pull/6014) 提供 Keenable MCP 预设，支持托管 MCP、网页搜索和页面抓取。
- 路线图判断：MCP 预设正在形成可扩展的产品化配置路径。Sprouts Data 需求描述完整，存在较高被纳入下一版本的可能，但当前尚未见对应实现 PR。

### 6.3 Telegram 企业网关和自托管支持

- 来源：[PR #4919](https://github.com/HKUDS/nanobot/pull/4919)
- 诉求：自定义 Bot API Base URL 和额外请求头。
- 路线图判断：功能边界清晰，测试项已列入 PR，较可能进入后续版本；但需先处理长期未合并状态。

### 6.4 发布节奏与 Preview 候选版本

- 来源：[PR #6556](https://github.com/HKUDS/nanobot/pull/6556)
- 诉求：统一 Stable 发布流程，同时支持 opt-in 的每日 Preview 候选版本。
- 路线图判断：若合并，项目的反馈验证和发布频率可能明显提高，是近期最值得关注的工程流程变化之一。

### 6.5 运行时动态 Provider 与模型切换

- 来源：[PR #2116](https://github.com/HKUDS/nanobot/pull/2116)、[PR #2117](https://github.com/HKUDS/nanobot/pull/2117)、[PR #2179](https://github.com/HKUDS/nanobot/pull/2179)
- 诉求：动态添加自定义 Provider、支持 OpenAI Responses API，并通过 `/model`、`/models` 在运行时切换模型。
- 路线图判断：需求方向与 Provider 可扩展性一致，但相关 PR 均已关闭且标记冲突，暂不能视为近期版本确定项。维护者需要重新确认实现方案和拆分范围。

---

## 7. 用户反馈摘要

### 主要痛点

- **Windows 文件锁与权限问题**
  - 用户在 Windows 环境间歇性遇到网关客户端租约文件写入被拒绝：[Issue #6514](https://github.com/HKUDS/nanobot/issues/6514)。
  - 这类问题直接破坏本地网关的可用性，且对非技术用户排查成本较高。

- **WhatsApp 安装与依赖体验不透明**
  - 用户既遇到客户端版本过旧导致的 405 连接失败，也遇到系统 `libmagic` 缺失被错误分类：[Issue #6544](https://github.com/HKUDS/nanobot/issues/6544)、[Issue #6543](https://github.com/HKUDS/nanobot/issues/6543)。
  - 用户真正需要的不是泛化错误，而是明确指出依赖、系统库或版本约束问题，并给出可执行方案。

- **WebUI 4.0 体验存在明显落差**
  - 用户对 4.0 的历史消息滚动、字体和整体样式表达失望，并表示此前版本的响应速度和体验更受认可：[Issue #6526](https://github.com/HKUDS/nanobot/issues/6526)。
  - 这是一条明显的产品体验负反馈，应与近期的 WebUI 缓存、进度展示和渲染修复一起复盘。

- **配置与实际行为不一致**
  - Subagent 未遵守 CLI App 禁用配置：[Issue #6554](https://github.com/HKUDS/nanobot/issues/6554)。
  - WebUI 模型按钮未反映实际主模型或 fallback：[Issue #6550](https://github.com/HKUDS/nanobot/issues/6550)。
  - 用户期待“界面显示、配置状态和真实运行行为”三者一致，这对调试和建立信任尤其重要。

- **图片设置基础交互缺陷**
  - 图片设置窗口无法通过右上角“×”关闭：[Issue #6555](https://github.com/HKUDS/nanobot/issues/6555)。
  - 问题本身影响范围有限，但会降低用户对 WebUI 完整性的信心。

### 积极信号

- 用户对 Goal 长任务、持续工具调用和多智能体方向展现出明确兴趣：[Issue #5000](https://github.com/HKUDS/nanobot/issues/5000) 获得今日最多评论。
- Keenable 与 Sprouts Data 等 MCP 服务方主动提交接入预设，表明 NanoBot 的 MCP 集成生态开始吸引第三方数据服务接入：[PR #6014](https://github.com/HKUDS/nanobot/pull/6014)、[Issue #6557](https://github.com/HKUDS/nanobot/issues/6557)。

---

## 8. 待处理积压

### 8.1 长期开放且仍有关键设计分歧的 Issue

- **[Issue #5000](https://github.com/HKUDS/nanobot/issues/5000)：多智能体协作架构**
  - 自 2026-07-20 开放，至今仍有 7 条评论。
  - 属于长期路线图议题，建议维护者明确阶段性目标，例如先落地共享任务状态、持久 Agent 身份，还是 Agent 间消息协议，避免讨论长期停留在概念层。

### 8.2 长期未合并的 PR

- **[PR #4397](https://github.com/HKUDS/nanobot/pull/4397)：工具链中途插入用户消息**
  - 自 2026-06-18 开放，当前标记 `invalid/conflict`。
  - 直接影响 Agent 对用户新输入的响应及时性，建议明确关闭、重写或拆分，避免长期占用审阅队列。

- **[PR #2116](https://github.com/HKUDS/nanobot/pull/2116)、[PR #2117](https://github.com/HKUDS/nanobot/pull/2117)、[PR #2179](https://github.com/HKUDS/nanobot/pull/2179)：动态 Provider、Responses API、运行时模型切换**
  - 三项自 2026-03 月中旬开放，均已关闭并标记冲突。
  - 这些需求仍然具有现实价值，建议维护者给出统一路线，或拆分为较小的独立 PR。

- **[PR #4919](https://github.com/HKUDS/nanobot/pull/4919)：Telegram 自托管 Bot API**
  - 自 2026-07-14 开放，功能明确但尚未合并。
  - 建议确认是否仍与当前 Telegram 渠道接口兼容，并补充针对自定义 endpoint、headers 和轮询行为的最新回归测试。

### 8.3 当前高优先级但待处理的稳定性 PR

- **[PR #6497](https://github.com/HKUDS/nanobot/pull/6497)：隔离 inline command 异常**
  - 标记为 P1 且存在冲突。
  - 建议优先解决冲突并纳入近期修复批次。

- **[PR #6100](https://github.com/HKUDS/nanobot/pull/6100)：Provider 策略阻断时保留 Dream 批次**
  - 标记 P2 且存在冲突。
  - 涉及记忆数据一致性，建议在合并前增加 refusal、content filter 及正常响应三条路径的覆盖。

### 8.4 无明确 Fix PR 的开放 Bug

以下问题在今日数据中仍缺少明确对应修复，应避免在未完成代码验证的情况下直接视为已解决：

- [Issue #6554](https://github.com/HKUDS/nanobot/issues/6554)：Subagent 权限配置失效。
- [Issue #6555](https://github.com/HKUDS/nanobot/issues/6555)：图片设置弹窗无法关闭。
- [Issue #6550](https://github.com/HKUDS/nanobot/issues/6550)：模型按钮未反映实际/fallback 模型。

---

## 总体健康度判断

**健康度：良好，活跃度高，发布节奏偏慢。**

- **积极因素：** 单日处理 19 个 PR，覆盖 WebUI、Provider、WhatsApp、会话存储和发布流程；多数修复附带测试；MCP 生态出现第三方主动接入。
- **主要风险：** 没有新版本发布，部分重要 PR 仍处于冲突或长期开放状态；Subagent 权限、fallback 模型显示等用户直接感知的问题尚无明确 Fix PR；Windows 租约写入问题提示本地网关的文件处理仍需加强。
- **建议维护者优先顺序：**
  1. 完成并合入 [PR #6497](https://github.com/HKUDS/nanobot/pull/6497) 和 [PR #6548](https://github.com/HKUDS/nanobot/pull/6548) 等稳定性修复。
  2. 为 [Issue #6554](https://github.com/HKUDS/nanobot/issues/6554) 建立权限隔离修复。
  3. 解决 [PR #4397](https://github.com/HKUDS/nanobot/pull/4397)、[PR #4919](https://github.com/HKUDS/nanobot/pull/4919) 等长期 PR 的保留、拆分或关闭决策。
  4. 在 [PR #6556](https://github.com/HKUDS/nanobot/pull/6556) 发布流程完善后，优先安排一个包含近期修复的 Preview 或正式版本发布。

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目动态日报

**日期：2026-11-04**  
**统计窗口：过去 24 小时**  
**数据来源：PicoClaw GitHub Issues / Pull Requests**

---

## 1. 今日速览

过去 24 小时，PicoClaw 共更新 **3 个 Issue** 和 **1 个 PR**，其中 **2 个 Issue 仍开放**，**1 个 Issue 与 1 个 PR 被关闭**。今日没有新版本发布，也没有处于待合并状态的 PR，项目在功能交付层面基本处于停滞状态。

本次关闭的两个条目均带有 **`[stale]`** 标记：智能路由空转问题与 Sendblue 通道 PR 并非经维护者确认后正常完成，更可能是长期无响应后自动或人工按陈旧项处理。社区当前主要围绕两项诉求展开：一是防止智能路由在单轮内重复调用模型并造成巨额 token 消耗，二是改善 Web UI 的会话历史管理。

**项目健康度评估：偏低。** 今日有用户活动，但缺乏明确维护响应、有效合并和版本发布；高成本稳定性隐患仍处于开放状态。综合活跃度、交付情况与风险积压，今日健康度可评为 **4/10**。

---

## 2. 版本发布

过去 24 小时 **无新版本发布**，因此暂无更新内容、破坏性变更或迁移事项可说明。

---

## 3. 项目进展

### PR #3416：Sendblue iMessage 与 SMS 通道被关闭

- **状态：** CLOSED / stale
- **作者：** @lookevink
- **更新时间：** 2026-11-03
- **链接：** https://github.com/sipeed/picoclaw/pull/3416

该 PR 提议为 PicoClaw 增加原生 **Sendblue** 通道，使用户可以在同一手机上通过 iMessage 或 SMS 与 PicoClaw Agent 对话。内容涵盖：

- Sendblue 免费账号配置；
- 手机号及联系人验证；
- 模型接入前置条件；
- secrets 配置；
- 接收 webhook 注册。

该 PR 自 **2026-10-05** 创建后长期未形成有效合并反馈，最终以 stale 状态关闭。**这不代表功能已经完成，也不能视为已进入下一版本。**

**推进程度判断：** 今日没有新增的代码合入或已发布功能。Sendblue 通道方向仍具有产品价值，但在维护者重新接手、确认实现质量并完成 rebasing/兼容性检查前，不宜列入近期发布计划。

---

## 4. 社区热点

### 热点一：智能路由单轮空转，可能烧毁大量 token

- **Issue：** [#3445](https://github.com/sipeed/picoclaw/issues/3445)
- **状态：** CLOSED / stale
- **评论数：** 2
- **关键数据：**
  - 单轮内调用 LLM **222 次**
  - 持续约 **561 秒**
  - 消耗约 **13,098,285 输入 token**
  - 输出几乎恒定，未产生有效进展
- **作者：** @cnbillsomeday

这是今日最重要的技术讨论之一。反馈显示，`agents.defaults.routing` 将简单对话交给轻量模型后，轻量模型可能在同一 turn 中反复进入迭代，既没有“中途重判”，也没有触发重复调用熔断。

用户诉求集中在：

1. 为单轮工具/模型调用设置上限；
2. 检测输出停滞或无进展状态；
3. 对重复调用进行熔断；
4. 智能路由在 turn 中途重新判断是否应切换模型；
5. 在达到预算或调用阈值时显式终止，并向用户返回可理解的错误。

**讨论判断：** Issue 已有 2 条评论，是今日评论最多的条目，但关闭状态为 stale，尚无可见 fix PR 或发布说明证明风险已消除。该问题可能直接造成显著 API 费用和服务不可用，应优先重新打开或补充分辨关闭原因的评论。

---

### 热点二：Web UI 缺少聊天文件夹与会话整理能力

- **Issue：** [#3450](https://github.com/sipeed/picoclaw/issues/3450)
- **状态：** OPEN / stale
- **评论数：** 1
- **作者：** @Yevheni55

该功能请求指出，Launcher Web UI 当前将所有聊天会话放在一个扁平、按时间排序的列表中，用户难以管理长期积累的会话历史。建议增加 **chat folders**，用于按项目、主题或用途组织会话。

其核心诉求包括：

- 创建、重命名和删除文件夹；
- 将已有会话归入文件夹；
- 在侧边栏按文件夹过滤或展示；
- 保持 `/api/sessions` 当前返回结构及现有 UI 的兼容性；
- 考虑后续搜索、标签或批量管理能力。

**讨论判断：** 今日开放 Issue 中评论最多的是该条目，但只有 1 条评论，实际讨论热度有限。需求清晰、工程边界明确，属于较适合进入近期排期的 UI 改进，但目前没有对应 PR 或维护者承诺。

---

### 热点三：未分类 Bug 报告

- **Issue：** [#3449](https://github.com/sipeed/picoclaw/issues/3449)
- **状态：** OPEN / stale
- **评论数：** 1
- **作者：** @rajkumar-madhu

该 Issue 提供了 Bug 报告模板，但标题和摘要中没有足够信息判断具体故障现象。受影响环境、复现步骤、实际结果与预期结果均未得到明确填充，因此无法可靠评估影响范围。

**讨论判断：** 该条目暂时不具备技术分诊条件。若 Issue 正文同样缺少有效信息，建议维护者要求提交者补充最小复现、日志、版本、操作系统、模型提供方与通道类型。

---

## 5. Bug 与稳定性

### 严重级别：S1 / 高风险

#### 智能路由可无限空转并产生巨额 token 消耗

- **Issue：** [#3445](https://github.com/sipeed/picoclaw/issues/3445)
- **当前状态：** CLOSED / stale
- **是否已有 fix PR：** **未发现**
- **是否确认已修复：** **否**

真实 trace 显示单次请求触发 222 次 LLM 调用，约 9 分钟消耗 1310 万输入 token，且输出没有实质进展。该问题同时影响：

- **成本安全：** token 消耗远超正常单轮交互；
- **可用性：** 请求长时间无法结束，需要人工中止；
- **路由正确性：** 轻量模型没有及时退出或切换；
- **防护机制：** 缺少重复调用熔断及预算上限。

虽然 Issue 已关闭，但从现有数据无法确认修复已合入。建议将其作为稳定性事项重新核查，并在路由层增加硬性上限、最大 token 预算、无进展检测与可观测指标。

### 严重级别：待定 / 信息不足

#### 标题与摘要未提供足够故障细节

- **Issue：** [#3449](https://github.com/sipeed/picoclaw/issues/3449)
- **当前状态：** OPEN / stale
- **是否已有 fix PR：** **未发现**
- **是否确认已修复：** **否**

由于缺少有效复现信息，目前不能判断这是崩溃、回归、功能异常还是配置问题，也无法评估严重程度。维护者应先完成信息补全，再决定是否需要补丁。

### 今日回归情况

除上述问题外，今日数据中没有显示新的明确回归或崩溃报告。但由于没有新版本发布，也没有修复 PR 合入，不能据此判断整体稳定性已改善。

---

## 6. 功能请求与路线图信号

### A. Web UI 聊天文件夹

- **来源：** [#3450](https://github.com/sipeed/picoclaw/issues/3450)
- **状态：** OPEN / stale
- **对应 PR：** 未发现

这是当前最明确、可落地的 UI 功能请求。它可显著改善长期会话管理，尤其适合多项目、多设备或多 Agent 用户。

**进入下一版本的概率：中等。**  
建议实现优先顺序：

1. 会话文件夹的数据模型；
2. 创建、重命名、删除；
3. 会话移动至文件夹；
4. 前端分组展示；
5. 保持旧 API 兼容；
6. 后续再加入搜索、标签与批量操作。

### B. Sendblue iMessage / SMS 通道

- **来源：** [#3416](https://github.com/sipeed/picoclaw/pull/3416)
- **状态：** CLOSED / stale
- **发布状态：** 未进入任何新版本

该功能可以让用户直接通过手机短信或 iMessage 使用 PicoClaw，场景明确，包括移动端快速交互、IoT 设备和通知回传。不过 PR 已关闭且没有维护者确认。

**进入下一版本的概率：较低至中等。**  
若维护者认可并重新推进，该功能需要至少完成：

- 明确 Sendblue webhook 安全校验；
- 处理重复消息和消息顺序；
- 防止 webhook 重放；
- 处理发送失败及限流；
- 完善 secrets 管理；
- 补充 iMessage/SMS 端到端测试；
- 确认与现有通道架构的兼容性。

### C. 智能路由稳定性与成本保护

- **来源：** [#3445](https://github.com/sipeed/picoclaw/issues/3445)
- **性质：** 稳定性与防护机制，而非普通功能
- **对应 PR：** 未发现

虽然该 Issue 已被标记 stale 关闭，但真实事故说明路由系统需要建立明确的安全边界。建议路线图至少纳入：

- 每轮最大模型调用次数；
- 每轮 token 和费用预算；
- 重复输出或无进展检测；
- 路由中途重判；
- 超限后的优雅终止；
- 调用次数、token 与终止原因日志。

**近期落地概率：应提升优先级。**  
它比新增通道更接近核心运行安全问题，建议优先处理。

---

## 7. 用户反馈摘要

### 真实痛点

1. **成本不可控**  
   用户在一次普通对话中遭遇 222 次模型调用和约 1310 万输入 token，表明当前路由机制缺少可信的成本护栏。参见 [#3445](https://github.com/sipeed/picoclaw/issues/3445)。

2. **轻量模型可能“空转”**  
   模型持续产生近似恒定输出，系统却未识别“无有效进展”，最终由用户手动中止。参见 [#3445](https://github.com/sipeed/picoclaw/issues/3445)。

3. **长期会话难以管理**  
   Web UI 把所有会话混在单一列表中，无法按项目或主题归档，影响高频使用体验。参见 [#3450](https://github.com/sipeed/picoclaw/issues/3450)。

4. **移动消息接入有现实需求**  
   Sendblue 提案聚焦手机端 iMessage/SMS 交互，说明用户希望 PicoClaw 能进入日常消息渠道。参见 [#3416](https://github.com/sipeed/picoclaw/pull/3416)。

### 满意与不满意信号

- 今日没有足够评论或 reaction 数据支持明确的满意度判断。
- 三个 Issue 均没有 👍 reaction，无法认定社区对相关提案形成广泛共识。
- 用户对核心能力和新通道有明确诉求，但维护响应不足，且多个条目被标记 stale，反映的是**需求存在、交付与沟通不足**。
- [#3449](https://github.com/sipeed/picoclaw/issues/3449) 的报告质量不足，也暴露出 Issue 模板虽已提供，但提交时缺少有效必填信息的问题。

---

## 8. 待处理积压

### 需优先复核：智能路由空转事故

- **Issue：** [#3445](https://github.com/sipeed/picoclaw/issues/3445)
- **积压时间：** 自 2026-10-19 创建起长期未解决
- **风险：** 高额 token 消耗、超长运行、无进展循环
- **建议：** 确认 stale 关闭是否代表已修复；若没有，应重新打开或新建带复现 trace 的修复 Issue，并指定稳定性负责人。

### 需推动维护者表态：Web UI 聊天文件夹

- **Issue：** [#3450](https://github.com/sipeed/picoclaw/issues/3450)
- **积压时间：** 自 2026-10-27 创建起待处理
- **风险：** 中低；主要影响管理体验
- **建议：** 给出 roadmap 标签与实现边界，避免长期无响应。

### 需补全信息：未分类 Bug

- **Issue：** [#3449](https://github.com/sipeed/picoclaw/issues/3449)
- **积压时间：** 自 2026-10-26 创建起待处理
- **风险：** 暂无法评估
- **建议：** 要求提交者补充复现步骤、实际/预期结果、日志、版本和环境；否则应按无效报告规范关闭并注明原因。

### 需决定是否恢复：Sendblue 通道 PR

- **PR：** [#3416](https://github.com/sipeed/picoclaw/pull/3416)
- **积压时间：** 自 2026-10-05 创建起未推进
- **风险：** 中低；功能价值明确，但涉及外部 webhook 与消息通道，集成风险高于普通 UI 改动
- **建议：** 维护者明确接受或拒绝该方向；若接受，应重新开启讨论并拆分为基础通道、webhook 安全、文档与测试几个阶段。

---

## 今日结论

PicoClaw 今日有 **3 个 Issue 更新、1 个 PR 更新、0 个版本发布、0 个待合并 PR**。社区需求主要集中在 **Web UI 会话组织、移动消息通道以及智能路由稳定性**，但当前没有明确功能交付。

从项目健康度看，最大风险不是“完全没有需求”，而是 **关键稳定性问题缺少可验证修复、长期事项被 stale 关闭、维护者反馈不足**。建议下一阶段优先完成三件事：

1. 核查并修复 [#3445](https://github.com/sipeed/picoclaw/issues/3445) 的路由空转与 token 熔断问题；
2. 补全并分诊 [#3449](https://github.com/sipeed/picoclaw/issues/3449)；
3. 对 [#3450](https://github.com/sipeed/picoclaw/issues/3450) 和 [#3416](https://github.com/sipeed/picoclaw/pull/3416) 给出明确的路线图或维护者结论。

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw 项目动态日报

**日期：2026-11-04**  
**统计范围：过去 24 小时**  
**数据源：[nearai/ironclaw](https://github.com/nearai/ironclaw)

## 1. 今日速览

- 过去 24 小时内项目整体动态较低，共记录 **0 条 Issue 更新、1 条 PR 更新、0 个版本发布**。
- 唯一新增动态为 Dependabot 提交的依赖升级 PR [#8167](https://github.com/nearai/ironclaw/pull/8167)，目前仍处于待合并状态，尚未形成已合并或已关闭的代码变更。
- 今日没有用户反馈、缺陷报告或功能请求可供分析，社区讨论热度接近静默。
- 综合判断：**项目健康度暂无法从短期活跃度充分确认**；维护流程仍有运转，但缺乏功能推进、问题闭环和发布活动的可见信号。建议重点关注依赖升级 PR 的审核与合并情况。

## 3. 项目进展

### 依赖维护

- **[OPEN] chore(deps): bump zod, @remotion/cli and @remotion/tailwind-v4 in /docs/internal/architecture-video**  
  作者：[@dependabot](https://github.com/dependabot)｜类型：Dependencies / JavaScript  
  链接：[PR #8167](https://github.com/nearai/ironclaw/pull/8167)

  该 PR 计划将 `zod` 升级至 **4.6.7**，并更新 `@remotion/cli`、`@remotion/tailwind-v4` 及其相关祖先依赖。目标目录为 `/docs/internal/architecture-video`，主要服务于内部架构演示视频工具链。

  **推进程度评估：**
  - PR 尚未合并，因此今日没有产生可确认的仓库变更。
  - 更新范围集中于文档视频生成工具链，未显示涉及核心 Agent、个人 AI 助手或运行时能力。
  - 此次升级可能改善依赖兼容性、修复间接依赖问题或降低维护风险，但在完成测试验证前，不宜将其视为稳定性改进已经落地。

## 4. 社区热点

过去 24 小时没有新增或活跃 Issue，也没有获得评论或用户反应的 PR。

- **PR [#8167](https://github.com/nearai/ironclaw/pull/8167)**：当前评论数为 0、点赞数为 0，是唯一可见动态，但尚未形成实质社区讨论。
- **背后的主要诉求**：从自动化依赖升级行为推断，诉求主要是维护依赖版本、减少已知漏洞或兼容性问题，并保持内部架构视频工具链可用。

由于缺乏用户讨论内容，当前无法判断社区是否存在对核心功能、稳定性、部署体验或路线图的重点共识。

## 5. Bug 与稳定性

过去 24 小时**没有新的 Bug、崩溃或回归报告**，因此没有可按严重程度排列的问题，也没有与今日问题对应的修复 PR。

需要注意：

- [PR #8167](https://github.com/nearai/ironclaw/pull/8167) 涉及 `zod` 主版本依赖升级，可能引入类型定义、运行时校验行为或构建兼容性问题。
- 该 PR 尚未合并，当前没有证据表明相关风险已经进入正式版本。
- 建议合并前至少验证：Zod schema 校验行为、Remotion 视频渲染流程、Tailwind v4 构建流程，以及架构视频生成任务是否能够正常完成。

## 6. 功能请求与路线图信号

今日没有新功能请求，也没有来自 Issue 的路线图信号。

根据现有 PR 可确认的唯一方向是：

- **依赖治理与内部工具链维护**：继续更新 `zod`、Remotion CLI 与 Remotion Tailwind v4 依赖。
- 该更新更可能进入常规维护合并，而非单独构成面向用户的新版本功能。
- 当前数据不足以判断下一版本将包含哪些产品能力；也没有已确认的版本计划或功能排期。

## 7. 用户反馈摘要

过去 24 小时没有 Issue 评论或新增用户反馈，无法提炼真实用户痛点、使用场景或满意度。

从今日唯一动态 [PR #8167](https://github.com/nearai/ironclaw/pull/8167) 只能看出维护侧对依赖安全和工具链兼容性的常规关注，不能代表终端用户需求。

## 8. 待处理积压

- **待合并 PR：[#8167](https://github.com/nearai/ironclaw/pull/8167)**  
  该 PR 是今日唯一新增积压项，当前处于开放状态。需要维护者完成变更审核、自动化检查与关键构建验证，以避免依赖升级长期滞留。
- 数据中未提供长期未响应的历史 Issue 或 PR，因此无法确认是否还存在更早期的积压风险。
- 今日无发布活动，建议在依赖变更落地后确认 CI 状态，并视影响范围决定是否需要补丁版本。

---

**综合健康度判断：平稳但低活跃。** 项目自动化维护仍在运行，但今日缺少 Issue 闭环、功能交付和版本发布。短期应重点跟踪 [PR #8167](https://github.com/nearai/ironclaw/pull/8167) 的测试与合并结果；由于社区反馈样本为空，对产品口碑、用户满意度和实际采用情况暂不作正面或负面判断。

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI 项目动态日报

**日期：2026-11-04**  
**数据范围：过去 24 小时 GitHub Issues / Pull Requests 更新**  
**项目地址：** [netease-youdao/LobsterAI](https://github.com/netease-youdao/LobsterAI)

---

## 1. 今日速览

过去 24 小时项目共更新 **1 条 Issue** 和 **12 条 PR**，其中 **2 条 PR 仍待合并、10 条已关闭**，暂无新版本发布。  
今日开发活动主要集中在 **Windows 性能、上下文压缩、历史记录恢复、安装包瘦身和桌面伴侣稳定性** 等方向，说明项目正在从功能扩展转向可靠性与交付质量优化。  
目前有 **1 条账号封禁申诉 Issue** 持续更新，反映出账号风控与人工申诉机制仍是用户侧较突出的痛点。  
整体来看，项目开发活跃度较高，但大量 PR 在一天内集中关闭，需继续关注其是否已进入稳定分支、发布版本及回归验证阶段。

---

## 2. 版本发布

**今日无新版本发布。**

过去 24 小时没有新的 Release 或版本标签信息。虽然 PR #2982 已同步 `release/2026.11.2` 分支代码，但仅凭现有数据无法确认相关改动已正式发布。

---

## 3. 项目进展

### 3.1 上下文压缩与超限恢复增强

[#2982 — fix(cowork): recover oversized context and show compaction progress](https://github.com/netease-youdao/LobsterAI/pull/2982)  
**状态：待合并**

- 修复长输入超过模型窗口后，自动压缩请求本身也可能超限，导致任务无法继续的问题。
- 新的恢复策略会先缩小失败片段，再逐段更新摘要；全部摘要成功后继续原任务。
- 无法恢复时保留原始输入，并提供明确提示。
- 补充压缩开始、结束及失败、取消等状态反馈。
- 修复正常答案中包含“故障示例”时被误判为失败的问题。
- 支持取消操作，并保持工具调用与结果的完整配对。

**影响：** 这是今日最值得重点审阅的待合并 PR，直接关系到 Cowork 在超长上下文任务中的可用性。建议维护者重点验证摘要一致性、取消路径和工具调用完整性。

---

### 3.2 DeepSeek Harness 运行时升级

[#2989 — feat(dsh): bump DeepSeek Harness runtime to 0.2.1-rc.5](https://github.com/netease-youdao/LobsterAI/pull/2989)  
**状态：已关闭**

- 将内置 `@deepseek-ai/dsh` 从 `0.1.5-rc.3` 升级至 `0.2.1-rc.5`。
- 同步适配 macOS ARM64、macOS x64 和 Windows x64 运行时构建。
- 修复 dsh 0.2 引入的集成问题。

**影响：** 运行时依赖得到明显更新，有助于跟进上游新能力并修复兼容性问题。不过该 PR 仍为 RC 版本，其稳定性需要后续发布验证。

---

### 3.3 OpenClaw 历史记录改为按字节压缩

[#2988 — fix(openclaw): compact byte-bounded history instead of sliding it](https://github.com/netease-youdao/LobsterAI/pull/2988)  
**状态：已关闭**

- 针对 OpenClaw v2026.8.1 可能为每次尝试注入最多 `contextTokenBudget × 8` 历史字节、造成额度快速消耗的问题，改为按字节上限压缩历史。
- PR 描述引用了用户单夜从 8,000+ credits 降至约 800 credits 的案例。
- 修复方向从简单滑动窗口转向受控压缩，以降低冗余上下文和重复计费风险。

**影响：** 这是直接面向高成本场景的稳定性优化。由于变更涉及上下文构造与计费路径，应重点验证压缩后的语义完整性及额度消耗变化。

---

### 3.4 优化 Windows 插件加载性能

[#2987 — fix(openclaw): load Windows plugins natively and cache plugin realpaths](https://github.com/netease-youdao/LobsterAI/pull/2987)  
**状态：已关闭**

- 修复 Windows 环境下插件加载时同步文件系统元数据调用过多的问题。
- 在 360 Total Security 等安全软件环境下，网关启动曾被拖慢至 **170–250 秒**。
- 改为原生加载 Windows 插件，并缓存插件真实路径，减少重复 `lstat` 等调用。

**影响：** 对国内 Windows 用户尤其有价值，可显著改善启动体验和系统资源占用。

---

### 3.5 修复定时任务中的模型选择失效

[#2986 — fix(cowork): keep model selection in scheduled-task conversations](https://github.com/netease-youdao/LobsterAI/pull/2986)  
**状态：已关闭**

- 修复定时任务结果页切换模型后选择器回弹的问题。
- 后续手动回复此前仍可能沿用 Agent 默认模型。
- 修复模型切换分隔线直接显示内部模型 ID `yd-fast` 的问题。

**影响：** 提升定时任务与人工接管场景的一致性，避免用户界面选择与实际调用模型不一致。

---

### 3.6 安装包瘦身

[#2985 — fix(packaging): stop shipping bundled and debug-only files in the installer](https://github.com/netease-youdao/LobsterAI/pull/2985)  
**状态：已关闭**

- 清理 Windows 安装包中重复的库文件以及运行时不会加载的调试文件。
- 压缩后的完整安装包约 **239 MB**。
- 对比 2026.10.9 版本约 **348 MB** 的安装包，减少约 **42 MB**；按 PR 描述计算，体积下降约 **12%**。

**影响：** 改善下载、安装和分发效率，也是今日较明确的产品质量提升成果。

---

### 3.7 修复桌面伴侣选区工具栏

[#2984 — fix(desktop-companion): show selections the hook skips over the pointer shape](https://github.com/netease-youdao/LobsterAI/pull/2984)  
**状态：已关闭**

- 修复 macOS 桌面伴侣无法显示选区工具栏的问题。
- 覆盖 Safari、备忘录等应用场景。
- 修复与选区 Hook 跳过鼠标指针形状相关的问题。

**影响：** 恢复桌面伴侣的核心使用路径，减少辅助功能已授权但工具栏仍不出现的问题。

---

### 3.8 修复 Web Search 的 Node 环境调用

[#2983 — fix(web-search): run node without the env found on PATH](https://github.com/netease-youdao/LobsterAI/pull/2983)  
**状态：已关闭**

- 修复 `~/.local/bin/env` 排在 `PATH` 前部时，Web Search 脚本实际未执行 Node 的问题。
- 原因是该 `env` 为需要通过 shell `source` 加载的脚本，直接执行会忽略参数并退出。
- 修复覆盖 Windows Bash、Node Fetch 等调用路径。

**影响：** 避免 Web Search 表面执行成功、实际无输出的静默故障。

---

### 3.9 恢复被截断的聊天记录

[#2981 — fix(cowork): restore truncated chat.history replies and fix composer popover clipping](https://github.com/netease-youdao/LobsterAI/pull/2981)  
**状态：已关闭**

- 修复 OpenClaw `chat.history` 将文本块限制为 8,000 字符并追加 `...(truncated)...` 后，截断预览覆盖本地完整消息的问题。
- 新增 `OpenClawTruncatedHistoryRestorer`，通过 `chat.message.get` 获取完整记录并缓存。
- 同时修复输入区弹出层裁切问题。

**影响：** 避免历史消息在同步过程中被截断，提升长回复和会话恢复的可靠性。

---

### 3.10 修复桌面伴侣拖拽抖动

[#2979 — fix(desktop-companion): keep the orb under the pointer while dragging](https://github.com/netease-youdao/LobsterAI/pull/2979)  
**状态：已关闭**

- 修复 macOS 桌面伴侣悬浮球拖拽时持续闪烁、位置跳变的问题。
- 调整拖拽位置更新机制，避免其他写入方反复覆盖当前按压位置。

**影响：** 改善桌面伴侣的交互连续性与视觉稳定性。

---

### 3.11 图片确认与交付恢复

[#2980 — fix(media): preserve image confirmation and recover image delivery](https://github.com/netease-youdao/LobsterAI/pull/2980)  
**状态：已关闭**

- 修复额外生图确认放置约 120 秒后，被误记为用户主动取消的问题。
- 区分主动取消、超时和中断，并允许有效确认继续处理。
- 报价过期后重新核验；若价格变化，则再次请求确认。
- 图片已生成但工作目录不可写时，不再反复重试生成，而是复用已下载字节并保存到持久恢复目录。
- 网络错误和图片编辑流程不启用该交付回退。

**影响：** 减少重复生图、重复计费及“图片已生成但无法交付”的问题。

---

### 3.12 总体推进判断

今日关闭的 10 条 PR 覆盖了：

- **稳定性：** 历史恢复、桌面伴侣、Web Search、模型选择、媒体交付；
- **性能：** Windows 插件加载、OpenClaw 上下文注入；
- **成本控制：** 按字节压缩历史、避免重复生成图片；
- **工程效率：** 安装包缩小约 42 MB、运行时依赖升级；
- **可观测性：** 压缩进度和失败提示完善。

项目今天在工程质量和用户体验层面均向前推进，但“PR 已关闭”不等同于“已发布并验证”，仍需关注合并分支、回归测试和正式 Release 的对应关系。

---

## 4. 社区热点

### 4.1 账号误封申诉：今日唯一更新的 Issue

[#2959 — [申诉] LobsterAI 账号被误封，未恶意使用却被封禁](https://github.com/netease-youdao/LobsterAI/issues/2959)  
**状态：开放｜评论：2｜点赞：0**

该 Issue 创建于 2026-10-29，并在今日仍有更新，是过去 24 小时唯一活跃 Issue。其主要诉求是：

- 用户认为两个账号可能因风控误判而被封禁；
- 申诉人否认恶意使用、刷接口或批量调用；
- 原 Issue #2936 的标题历史曾包含个人手机号，用户请求维护者清理；
- 用户重新提交 Issue，要求后续统一在本帖沟通。

**背后诉求：** 除账号恢复外，用户还关注隐私信息清除、申诉入口透明以及风控判定依据的可解释性。

### 4.2 Cowork 上下文超限恢复

[#2982 — recover oversized context and show compaction progress](https://github.com/netease-youdao/LobsterAI/pull/2982)  
**状态：待合并｜评论与点赞数据未提供**

这是今日最值得关注的开放 PR。其核心价值在于防止长任务因压缩请求再次超限而彻底中断，并补齐压缩状态反馈，直接对应长上下文场景的可用性和可信度。

### 4.3 永久隐藏侧边栏广告

[#2374 — feat: add permanent setting to hide sidebar ad banner](https://github.com/netease-youdao/LobsterAI/pull/2374)  
**状态：待合并｜自 2026-07-21 起持续更新**

该 PR 自 7 月创建后仍处于开放状态，并关联 Issue [#2342](https://github.com/netease-youdao/LobsterAI/issues/2342)。它提出在“设置 → 通用”中增加永久隐藏侧边栏广告的开关，以解决现有广告只能临时关闭的问题。

**背后诉求：** 用户希望广告展示策略可配置，并减少界面干扰。

### 4.4 热度数据限制

今日 Issue 仅有 1 条，且无新增版本；PR 数据也未提供完整评论与点赞信息，因此无法进行严格的“评论最多/反应最多”排名。当前热点主要依据是否持续更新、关联用户痛点和业务影响判断。

---

## 5. Bug 与稳定性

按潜在影响程度排列：

| 严重程度 | 问题 | 影响 | 修复状态 |
|---|---|---|---|
| **高** | [OpenClaw 上下文注入导致额度快速消耗](https://github.com/netease-youdao/LobsterAI/pull/2988) | 单夜从 8,000+ credits 降至约 800，直接影响用户成本 | **已有 fix PR，已关闭** |
| **高** | [图片已生成但工作目录不可写，重复重试无法交付](https://github.com/netease-youdao/LobsterAI/pull/2980) | 可能重复生图、重复计费，且用户拿不到结果 | **已有 fix PR，已关闭** |
| **高** | [Cowork 超长上下文压缩失败，任务无法继续](https://github.com/netease-youdao/LobsterAI/pull/2982) | 长任务可能直接中断，且缺少清晰进度反馈 | **已有 fix PR，待合并** |
| **中高** | [OpenClaw 历史消息被 8,000 字符预览覆盖](https://github.com/netease-youdao/LobsterAI/pull/2981) | 完整回复丢失或被截断，影响会话连续性 | **已有 fix PR，已关闭** |
| **中高** | [Windows 插件加载在安全软件环境下启动需 170–250 秒](https://github.com/netease-youdao/LobsterAI/pull/2987) | 网关启动严重变慢，影响可用性 | **已有 fix PR，已关闭** |
| **中** | [DeepSeek Harness 升级后的集成问题](https://github.com/netease-youdao/LobsterAI/pull/2989) | 可能影响模型运行时兼容性 | **已有修复并关闭** |
| **中** | [定时任务切换模型不生效](https://github.com/netease-youdao/LobsterAI/pull/2986) | 界面选择与实际模型不一致，可能造成非预期成本或结果偏差 | **已有 fix PR，已关闭** |
| **中** | [Web Search 实际未运行 Node](https://github.com/netease-youdao/LobsterAI/pull/2983) | 搜索功能静默失败 | **已有 fix PR，已关闭** |
| **中低** | [桌面伴侣选区工具栏不显示](https://github.com/netease-youdao/LobsterAI/pull/2984) | macOS 辅助功能入口不可用 | **已有 fix PR，已关闭** |
| **中低** | [桌面伴侣拖拽时悬浮球抖动](https://github.com/netease-youdao/LobsterAI/pull/2979) | 交互体验下降 | **已有 fix PR，已关闭** |
| **中低** | [图片确认等待约 120 秒后被误判取消](https://github.com/netease-youdao/LobsterAI/pull/2980) | 工作流被无理由中断 | **已有 fix PR，已关闭** |

**总体判断：** 今日暴露的问题覆盖性能、成本、数据完整性和交互可用性，类型较广。其中上下文与图片交付问题具有直接费用风险，应优先纳入正式版本验证。

---

## 6. 功能请求与路线图信号

### 6.1 永久隐藏侧边栏广告

[#2374 — add permanent setting to hide sidebar ad banner](https://github.com/netease-youdao/LobsterAI/pull/2374)  
关联：[Issue #2342](https://github.com/netease-youdao/LobsterAI/issues/2342)

- 用户需要可持久化的广告关闭选项；
- 现有机制只能临时关闭单条广告；
- PR 已明确覆盖“设置 → 通用”入口。

**路线图判断：中高概率纳入。** 功能边界清晰、实现成本较低，且已有长期开放 PR。维护者需确认产品策略，并合并该长期分支。

### 6.2 压缩过程可视化

[#2982 — show compaction progress](https://github.com/netease-youdao/LobsterAI/pull/2982)

- 用户需要知道长上下文压缩是否正在进行、是否成功或被取消；
- 超限恢复不仅要“能继续”，还要降低等待过程中的不确定感。

**路线图判断：高概率纳入。** 该能力与 Cowork 长任务稳定性直接相关，建议优先合并并补充失败与取消场景测试。

### 6.3 账号封禁申诉与隐私清理能力

[#2959 — 账号被误封申诉](https://github.com/netease-youdao/LobsterAI/issues/2959)

虽然当前以 Issue 形式提出，但反映出长期产品需求：

- 更清晰的账号风控原因与申诉入口；
- 对标题历史中的手机号等个人信息进行清理；
- 对“第三方插件配置凭据”类使用行为提供合规说明；
- 申诉处理过程可追踪。

**路线图判断：中等概率形成改进。** 隐私删除较可能进入维护流程，但风控透明度与申诉自动化可能涉及产品策略，不宜仅依据单个 Issue 判断。

### 6.4 成本透明度和用量保护

[#2988 — compact byte-bounded history](https://github.com/netease-youdao/LobsterAI/pull/2988)

高额度消耗案例表明，用户可能期待：

- 单次或单日调用额度提示；
- 上下文膨胀或异常高频调用的预警；
- 历史压缩策略透明化；
- 重复工具调用的节流机制。

**路线图判断：中等概率。** 本轮至少会通过上下文压缩改善成本控制；更完整的额度仪表盘和告警尚无明确 PR 支撑。

---

## 7. 用户反馈摘要

### 真实使用场景

- **长上下文任务：** 用户会输入超出模型窗口的大段内容，并依赖 Cowork/OpenClaw 自动压缩后继续执行。
- **微信 DM / OpenClaw 长会话：** 单条消息成本可能达到约 60–130 credits，历史注入策略直接决定整晚消耗。
- **Windows 自动化环境：** 360 Total Security 等安全软件会显著放大文件系统元数据开销，导致网关启动极慢。
- **macOS 桌面辅助：** 用户在 Safari、备忘录等应用中选择文本后期待立即出现工具栏，并频繁拖拽悬浮球。
- **定时任务与人工接管：** 用户会在定时任务结果页切换模型，再手动回复，希望实际调用与界面选择保持一致。
- **图片生成与交付：** 用户可能在确认报价后等待较长时间，也可能在工作目录权限异常时仍需拿到已经生成的图片。
- **多账号与插件场景：** 用户可能在多个 LobsterAI 账号间使用第三方插件调用有道模型服务，因此对风控误判尤其敏感。

### 主要满意点

- 今日多项修复直接解决“功能存在但不可用”的问题，如 Web Search、桌面选区、聊天历史恢复；
- 安装包从约 348 MB 降至 239 MB，下载和安装负担减轻；
- Cowork 压缩过程增加进度提示，有助于降低长任务中的不确定感；
- 图片交付恢复方案复用已有结果，可减少重复生图和额外费用。

### 主要不满意点

- 账号封禁原因不透明，且申诉依赖人工沟通；
- 上下文和图片流程可能造成不可预期的额度消耗；
- Windows 启动性能、安全软件兼容性和安装包体积曾是明显短板；
- 部分修复目前仅显示 PR 已关闭，尚不明确何时进入正式版本。

---

## 8. 待处理积压

### 8.1 账号误封申诉仍待闭环

[#2959 — LobsterAI 账号被误封](https://github.com/netease-youdao/LobsterAI/issues/2959)  
**状态：开放｜更新于 2026-11-03｜2 条评论**

- 已从 10 月 29 日持续到今日；
- 需要维护者明确核查结果，并处理原 Issue 中的手机号残留；
- 建议在当前 Issue 统一回复，避免隐私信息继续出现在标题历史。

### 8.2 侧边栏广告永久开关长期开放

[#2374 — add permanent setting to hide sidebar ad banner](https://github.com/netease-youdao/LobsterAI/pull/2374)  
**状态：开放｜创建于 2026-07-21｜更新于 2026-11-03**

- 已积压约三个半月；
- 关联功能诉求 [#2342](https://github.com/netease-youdao/LobsterAI/issues/2342)；
- 建议维护者给出明确产品结论：合并、重新实现或说明不采纳原因。

### 8.3 Cowork 超限恢复 PR 尚未合并

[#2982 — recover oversized context and show compaction progress](https://github.com/netease-youdao/LobsterAI/pull/2982)  
**状态：开放**

- 直接影响超长任务能否继续；
- 建议优先完成代码审阅与回归验证；
- 如暂不合并，应及时说明阻塞原因和预计版本。

### 8.4 今日 10 条已关闭 PR 的发布状态需确认

包括：

- [#2989](https://github.com/netease-youdao/LobsterAI/pull/2989)
- [#2988](https://github.com/netease-youdao/LobsterAI/pull/2988)
- [#2987](https://github.com/netease-youdao/LobsterAI/pull/2987)
- [#2986](https://github.com/netease-youdao/LobsterAI/pull/2986)
- [#2985](https://github.com/netease-youdao/LobsterAI/pull/2985)
- [#2984](https://github.com/netease-youdao/LobsterAI/pull/2984)
- [#2983](https://github.com/netease-youdao/LobsterAI/pull/2983)
- [#2981](https://github.com/netease-youdao/LobsterAI/pull/2981)
- [#2979](https://github.com/netease-youdao/LobsterAI/pull/2979)
- [#2980](https://github.com/netease-youdao/LobsterAI/pull/2980)

**维护建议：** 对照 PR 的关闭类型、目标分支和后续提交记录，确认哪些已合并、哪些被替代、哪些仅关闭未落地，并尽快安排正式版本发布说明。

---

## 项目健康度结论

**综合健康度：良好，但处于“高频修复、待发布验证”阶段。**

- **开发活跃度：高。** 24 小时内 12 条 PR 更新，且覆盖多个核心模块。
- **问题修复速度：较高。** 主要 Bug 基本都有对应修复 PR。
- **用户成本与稳定性：明显改善。** 上下文压缩、图片交付和历史恢复针对高影响场景。
- **社区反馈量：偏低。** 仅 1 条 Issue 更新，暂时不足以判断整体用户满意度趋势。
- **发布节奏：偏慢。** 今日无 Release，而大量修复处于关闭或待合并状态。
- **主要风险：** PR 关闭与正式发布之间可能存在落地信息不透明；账号风控申诉仍未闭环；长期开放功能请求缺乏结论。

**今日最值得关注的三个信号：**

1. [#2982](https://github.com/netease-youdao/LobsterAI/pull/2982) 是否尽快合并，直接影响 Cowork 长任务可靠性。  
2. [#2988](https://github.com/netease-youdao/LobsterAI/pull/2988) 和 [#2980](https://github.com/netease-youdao/LobsterAI/pull/2980) 是否进入正式版本，决定成本控制优化何时真正惠及用户。  
3. [#2959](https://github.com/netease-youdao/LobsterAI/issues/2959) 与 [#2374](https://github.com/netease-youdao/LobsterAI/pull/2374) 应尽快给出维护者结论，避免申诉和功能请求继续积压。

</details>

<details>
<summary><strong>QwenPaw</strong> — <a href="https://github.com/agentscope-ai/QwenPaw">agentscope-ai/QwenPaw</a></summary>

# QwenPaw 项目动态日报

**统计日期：2026-11-04**  
**数据范围：过去 24 小时 GitHub Issues 与 Pull Requests 更新**

---

## 1. 今日速览

- 过去 24 小时共更新 **17 条 Issues**，其中 **15 条新开或活跃、2 条已关闭**；**37 条 PRs** 更新，其中 **27 条待合并、10 条已合并或关闭**，开发吞吐较高。
- 今日贡献主要集中在 **Windows/桌面端稳定性、Hub 运行时、插件依赖治理、Provider 配置校验和文件编辑安全**，多个问题已有对应修复 PR。
- 当前仍有 **27 条 PR 待合并**，其中包含大型改动，说明项目迭代活跃，但代码审查、回归验证和合并节奏面临一定压力。
- **今日无新版本发布**。近期问题集中在 `2.3.0-beta` 和 `2.3.0b3`，桌面端、渠道插件、模型配置等仍处于测试修复阶段。
- 综合判断：项目处于**高活跃开发与问题密集收敛期**。功能推进明显，但 Windows 兼容性、运行时可靠性及配置边界问题仍是发布前的主要风险。

---

## 2. 版本发布

过去 24 小时 **无新版本发布**，因此暂无版本更新说明、破坏性变更或升级注意事项。

不过，今日 Issues 和 PRs 显示，项目正在围绕 **QwenPaw Desktop 2.3.0 beta 系列、Hub Local Runtime、插件依赖系统和 Provider 配置写入路径**进行集中修复。建议关注以下 PR 合并后的下一版本：

- [#8569](https://github.com/agentscope-ai/QwenPaw/pull/8569)：提升 Windows Local Runtime 就绪可靠性。
- [#8568](https://github.com/agentscope-ai/QwenPaw/pull/8568)：调整技能文件暂存位置，修复 AppContainer 权限问题。
- [#8570](https://github.com/agentscope-ai/QwenPaw/pull/8570)：补充缺失 CPU 架构时的回退逻辑。
- [#8550](https://github.com/agentscope-ai/QwenPaw/pull/8550)：拒绝写入越界的模型配置。
- [#8234](https://github.com/agentscope-ai/QwenPaw/pull/8234)、[#8235](https://github.com/agentscope-ai/QwenPaw/pull/8235)：修复中文 Windows 文件读取和 CRLF 换行保持问题。

---

## 3. 项目进展

### 今日合并或关闭的重要 PR

- [#8544](https://github.com/agentscope-ai/QwenPaw/pull/8544) — **已关闭**  
  为 Loop 增加可选的 Jev 完成度决策支持。当纯文本回复触发定性自检时，可由配置的决策模型或默认模型判断是否仍有工作遗漏。该方向有助于减少“助手承诺继续执行但提前停止”的问题。

- [#8566](https://github.com/agentscope-ai/QwenPaw/pull/8566) — **已关闭**  
  修正 E2E 测试对审批开关配置的模拟方式，使其匹配新的 `decision_model_configured` 配置结构，降低前端审批测试与后端状态不一致导致的误报。

- [#8543](https://github.com/agentscope-ai/QwenPaw/pull/8543) — **已关闭**  
  改进桌面构建产物发布脚本，按产物 ID 而不是重名文件解析下载，避免发布任务取消后重跑时因同名产物冲突而失败。

- [#7816](https://github.com/agentscope-ai/QwenPaw/pull/7816) — **已关闭**  
  强制将 Console channel 打包进 PyInstaller bundle，修复动态导入机制导致内置渠道未被包含、打包后的桌面端无法启动的问题。

### 今日重点推进中的 PR

- **Windows Hub Local Runtime 修复形成组合拳**：  
  [#8569](https://github.com/agentscope-ai/QwenPaw/pull/8569) 放宽并优化运行时就绪等待；  
  [#8568](https://github.com/agentscope-ai/QwenPaw/pull/8568) 将技能副本放入目标工作区，规避 AppContainer 受保护 DACL；  
  [#8570](https://github.com/agentscope-ai/QwenPaw/pull/8570) 在 `platform.machine()` 为空时提供架构回退。  
  三个 PR 分别对应 [#8565](https://github.com/agentscope-ai/QwenPaw/issues/8565) 报告的启动失败链路，覆盖面较完整。

- **模型配置写入安全**：  
  [#8550](https://github.com/agentscope-ai/QwenPaw/pull/8550) 修复 [#8549](https://github.com/agentscope-ai/QwenPaw/issues/8549)，避免非法 `thinking_budget`、`max_input_length` 被持久化并在重启后导致 Provider 消失。

- **本地模型上下文窗口修正**：  
  [#8236](https://github.com/agentscope-ai/QwenPaw/pull/8236) 让 Ollama 根据 `num_ctx` 推断上下文窗口，不再统一套用 128K 默认值，减少本地模型被错误截断。

- **文件工具 Windows 兼容性**：  
  [#8234](https://github.com/agentscope-ai/QwenPaw/pull/8234) 修复 GBK/CP936 文件被 UTF-8 读取时静默丢字节；  
  [#8235](https://github.com/agentscope-ai/QwenPaw/pull/8235) 修复定向编辑将 CRLF 全部转换为 LF。这两项对中文 Windows 工作流价值较高。

- **桌面端体验和治理能力**：  
  [#8504](https://github.com/agentscope-ai/QwenPaw/pull/8504) 引入审批、响应完成和后台任务通知；  
  [#8434](https://github.com/agentscope-ai/QwenPaw/pull/8434) 为 Models 页面加入 Quick Add Model；  
  [#8422](https://github.com/agentscope-ai/QwenPaw/pull/8422) 开放插件级主题语义变量。

### 整体推进程度

今日代码变更覆盖 **运行时启动、桌面打包、模型配置、文件编辑、渠道、通知、模型管理和插件主题**，对产品质量的提升较为全面。但多数关键 PR 仍处于待审查或待合并状态，暂时不能计入已发布能力。

---

## 4. 社区热点

### Issues

1. [#7997 — WebUI 支持消息撤回/编辑与工作区回滚](https://github.com/agentscope-ai/QwenPaw/issues/7997)  
   - **9 条评论，为今日评论最多的 Issue**。  
   - 诉求集中在聊天纠错能力：允许修改或撤回历史消息，截断后续上下文，并可选择回滚文件快照。  
   - 这反映出用户对“错误指令污染后续上下文”和“Agent 修改文件后难以恢复”的强烈需求。

2. [#8565 — Windows Hub Local Runtime 无法启动](https://github.com/agentscope-ai/QwenPaw/issues/8565)  
   - **3 条评论，今日新开**。  
   - 同时暴露 AppContainer 技能暂存、CPU 架构识别、反向隧道就绪超时三个问题。  
   - 这是 Windows 用户使用 Hub 本地运行时的核心阻断问题，已有三个针对性 PR。

3. [#8505 — OpenAI 兼容网关返回裸 `APIError` 时不重试、不回退](https://github.com/agentscope-ai/QwenPaw/issues/8505)  
   - **3 条评论**。  
   - 网关把真实状态码只放在错误文本中时，SDK 无法结构化识别，导致 `502` 被归类为 `unknown`。  
   - 用户核心诉求是恢复自动重试和模型降级能力，而不是因中继网关格式差异导致任务直接失败。

4. [#8560 — 桌面窗口被强制置顶](https://github.com/agentscope-ai/QwenPaw/issues/8560)  
   - **2 条评论**。  
   - `2.3.0-beta.2` 中 `WS_EX_TOPMOST` 行为影响游戏、视频、演示和 kiosk 全屏应用。  
   - 属于桌面端高影响回归，优先级应高于一般 UI 问题。

5. [#8553 — QQ 插件因 Hub 插件依赖环境不可用而无法激活](https://github.com/agentscope-ai/QwenPaw/issues/8553)  
   - **2 条评论**。  
   - `DEPENDENCY_PLAN_UNVERIFIED` 反映依赖审计机制对缺失环境证据的容忍度不足，影响渠道插件启动链路。

6. [#8511 — 飞书连续消息期间偶发 “No active model configured”](https://github.com/agentscope-ai/QwenPaw/issues/8511)  
   - **2 条评论**。  
   - 用户在上一次任务尚未结束时发送新消息，可能出现模型状态被临时清空或会话状态竞争。

### PRs

- [#8234 — GBK/CP936 文件读取修复](https://github.com/agentscope-ai/QwenPaw/pull/8234)  
  重点解决中文 Windows 常见编码文件中非 UTF-8 字节被静默删除的问题，属于高实用价值修复。

- [#8235 — 保留 CRLF 换行](https://github.com/agentscope-ai/QwenPaw/pull/8235)  
  避免单行编辑造成整文件换行格式变化，降低 Git diff 污染和脚本兼容风险。

- [#8236 — Ollama 上下文窗口识别](https://github.com/agentscope-ai/QwenPaw/pull/8236)  
  回应本地模型用户对上下文长度配置准确性的实际需求。

- [#8504 — 桌面端审批及后台通知](https://github.com/agentscope-ai/QwenPaw/pull/8504)  
  覆盖审批等待、任务完成和后台运行通知，是个人 AI 助手向“可持续运行代理”演进的重要交互能力。

- [#8034 — 限制单次请求内联媒体总量](https://github.com/agentscope-ai/QwenPaw/pull/8034)  
  解决多图片会话导致请求体持续膨胀的问题，可降低网关超时和资源消耗风险。

---

## 5. Bug 与稳定性

### 严重

1. **Windows Hub Local Runtime 无法启动** — [#8565](https://github.com/agentscope-ai/QwenPaw/issues/8565)  
   - 影响 Hub 本地运行时、AppContainer 技能安装和反向隧道初始化，属于核心功能阻断。  
   - **已有 fix PR**：[#8569](https://github.com/agentscope-ai/QwenPaw/pull/8569)、[#8568](https://github.com/agentscope-ai/QwenPaw/pull/8568)、[#8570](https://github.com/agentscope-ai/QwenPaw/pull/8570)。

2. **Hub Docker runtime 非 root 运行时因配置文件权限失败** — [#8517](https://github.com/agentscope-ai/QwenPaw/issues/8517)  
   - 影响容器化部署和生产环境权限模型。  
   - **当前所列 PR 中未见明确对应修复**，需重点跟进。

3. **工具安全检测可能漏掉 shell 包装的外发行为** — [#8513](https://github.com/agentscope-ai/QwenPaw/issues/8513)  
   - SMTP、HTTP POST、读取本地文件并通过网络外发等命令，在 AUTO/SMART 模式下可能不产生发现项或审批。  
   - 涉及数据外泄与治理绕过，风险高。  
   - **当前所列 PR 中未见明确对应修复**，建议按安全事件优先处理。

4. **OpenAI 兼容网关错误无法触发重试和模型回退** — [#8505](https://github.com/agentscope-ai/QwenPaw/issues/8505)  
   - 影响长任务稳定性和中继网关兼容性。  
   - **当前所列 PR 中未见明确对应修复**。

### 高

5. **桌面窗口永久置顶，覆盖全屏应用** — [#8560](https://github.com/agentscope-ai/QwenPaw/issues/8560)  
   - `2.3.0-beta.2` 的明显回归，影响演示、游戏和视频等使用场景。  
   - **当前所列 PR 中未见明确对应修复**。

6. **QQ 插件因依赖计划不可验证而无法激活** — [#8553](https://github.com/agentscope-ai/QwenPaw/issues/8553)  
   - 影响 QQ 渠道可用性及 Hub 插件组合部署。  
   - 可能与 [#8527](https://github.com/agentscope-ai/QwenPaw/pull/8527) 和 [#8567](https://github.com/agentscope-ai/QwenPaw/pull/8567) 的依赖治理修复相关，但具体关联仍待确认。

7. **飞书并发消息导致模型状态异常** — [#8511](https://github.com/agentscope-ai/QwenPaw/issues/8511)  
   - 涉及会话并发状态一致性，且在稳定版和 beta 版中均出现。  
   - **当前所列 PR 中未见明确对应修复**。

8. **模型配置非法值持久化，重启后 Provider 消失** — [#8549](https://github.com/agentscope-ai/QwenPaw/issues/8549)  
   - 配置写入边界不严，可能造成重启后模型不可用。  
   - **已有 fix PR**：[#8550](https://github.com/agentscope-ai/QwenPaw/pull/8550)。

### 中

9. **CRLF 文件被定向编辑后整体转为 LF** — [#8414](https://github.com/agentscope-ai/QwenPaw/issues/8414)  
   - **已有 fix PR**：[#8235](https://github.com/agentscope-ai/QwenPaw/pull/8235)。

10. **中文 Windows 下 GBK/CP936 文件读取丢字节** — 对应修复 [#8234](https://github.com/agentscope-ai/QwenPaw/pull/8234)  
    - 该 Issue 未出现在今日最新 Issue 列表中，但修复 PR 今日持续更新，属于重要兼容性风险。

11. **新任务选择的非默认工作区未反映到后续消息** — [#8555](https://github.com/agentscope-ai/QwenPaw/issues/8555)  
    - 影响多工作区任务隔离与可追溯性。  
    - **当前所列 PR 中未见明确对应修复**。

12. **Codex/Qoder 后端将非空定时任务误判为空** — [#8533](https://github.com/agentscope-ai/QwenPaw/issues/8533)  
    - Agent 类定时任务无法执行，影响自动化场景。  
    - **当前所列 PR 中未见明确对应修复**。

13. **桌面 HTML 预览“在浏览器中打开”失效** — [#8502](https://github.com/agentscope-ai/QwenPaw/issues/8502)  
    - 中文路径与工作区外文件均有复现，属于桌面端文件预览链路问题。  
    - **当前所列 PR 中未见明确对应修复**。

### 低或已关闭

- [#8488 — Desktop 打包遗漏 visual_compression 资源](https://github.com/agentscope-ai/QwenPaw/issues/8488)：**已关闭**。视觉压缩在打包环境静默失效的问题已有处理记录。
- [#8528 — Markdown 预览重写相对图片/链接路径导致 404](https://github.com/agentscope-ai/QwenPaw/issues/8528)：**已关闭**。相对资源链接兼容性问题得到处理。

---

## 6. 功能请求与路线图信号

1. **WebUI 消息编辑、撤回和工作区回滚**  
   - 来源：[#7997](https://github.com/agentscope-ai/QwenPaw/issues/7997)  
   - 这是今日讨论最充分的功能诉求，兼具对话纠错、上下文清理和文件回滚价值。  
   - 当前未见直接对应 PR，但具备较强产品价值，较可能进入后续 WebUI/桌面端版本规划。

2. **桌面审批、任务完成和后台状态通知**  
   - 来源：[#8504](https://github.com/agentscope-ai/QwenPaw/pull/8504)，关联 [#8460](https://github.com/agentscope-ai/QwenPaw/issues/8460)。  
   - PR 已进入待合并队列，属于较明确的下一步交付候选。

3. **Models 页面快速添加模型**  
   - 来源：[#8434](https://github.com/agentscope-ai/QwenPaw/pull/8434)  
   - 目标是降低 Provider 内新增模型的交互成本。若近期合并，可能直接改善 2.3.0 系列用户体验。

4. **插件主题与语义化 UI 定制**  
   - 来源：[#8422](https://github.com/agentscope-ai/QwenPaw/pull/8422)  
   - 插件可覆盖亮暗主题、表面、边框和文本等语义 token，说明 Console 正从固定样式转向更开放的插件生态。

5. **QQ 渠道流式消息**  
   - 来源：[#8409](https://github.com/agentscope-ai/QwenPaw/pull/8409)  
   - 与飞书渠道流式体验对齐，属于渠道能力扩展；落地前需确保 [#8553](https://github.com/agentscope-ai/QwenPaw/issues/8553) 的插件激活问题解决。

6. **Loop 的完成度决策模型**  
   - 来源：[#8544](https://github.com/agentscope-ai/QwenPaw/pull/8544)  
   - 通过额外模型判断助手是否过早停止，代表项目开始强化 Agent 任务闭环与自检机制。

7. **对单请求内联媒体总量设限**  
   - 来源：[#8034](https://github.com/agentscope-ai/QwenPaw/pull/8034)  
   - 属于稳定性与资源治理能力，预计会以修复或内部限制形式进入后续版本。

**下一版本可能方向判断：**

- **高概率**：Windows Hub 启动、模型配置校验、GBK/CP936、CRLF、Ollama 上下文、桌面通知、快速添加模型。
- **中等概率**：插件主题、QQ 流式消息、媒体请求体限制、依赖环境错误提示。
- **待规划确认**：消息撤回/编辑、文件快照回滚、Loop 决策模型是否作为正式功能开放。

---

## 7. 用户反馈摘要

### 核心痛点

- **Windows 是当前最集中的故障区域**：Hub Local runtime、AppContainer、CPU 架构、Docker 非 root 权限、桌面置顶、中文路径预览以及 GBK/CP936 文件处理均有反馈。  
  相关链接：[#8565](https://github.com/agentscope-ai/QwenPaw/issues/8565)、[#8517](https://github.com/agentscope-ai/QwenPaw/issues/8517)、[#8560](https://github.com/agentscope-ai/QwenPaw/issues/8560)、[#8502](https://github.com/agentscope-ai/QwenPaw/issues/8502)、[#8234](https://github.com/agentscope-ai/QwenPaw/pull/8234)。

- **真实业务环境依赖中继网关和第三方模型后端**：OpenAI-compatible relay、Codex、Qoder、Ollama 均出现兼容问题，用户希望系统具备自动重试、模型回退、真实上下文长度和正确任务参数传递。  
  相关链接：[#8505](https://github.com/agentscope-ai/QwenPaw/issues/8505)、[#8533](https://github.com/agentscope-ai/QwenPaw/issues/8533)、[#8236](https://github.com/agentscope-ai/QwenPaw/pull/8236)。

- **多渠道部署需要插件依赖管理更稳健**：QQ、飞书、Hub 插件组合使用时，依赖环境证据不足或会话状态竞争会直接阻断消息处理。  
  相关链接：[#8553](https://github.com/agentscope-ai/QwenPaw/issues/8553)、[#8511](https://github.com/agentscope-ai/QwenPaw/issues/8511)。

- **用户期待 Agent 具备可恢复、可纠正能力**：不仅希望修代码，也希望撤回错误消息、回滚文件变更、快速切换工作区，并确保执行结果真正完成。  
  相关链接：[#7997](https://github.com/agentscope-ai/QwenPaw/issues/7997)、[#8555](https://github.com/agentscope-ai/QwenPaw/issues/8555)、[#8544](https://github.com/agentscope-ai/QwenPaw/pull/8544)。

### 满意点与积极信号

- Windows Hub 启动问题在 Issue 提出后当天出现 **3 个拆分明确的修复 PR**，显示维护者对阻断性问题的响应速度较高。
- Markdown 预览路径问题和桌面视觉压缩资源遗漏已关闭，说明桌面打包链路的反馈正在形成闭环。
- 多个首次贡献者提交了可落地的修复，包括模型配置校验、Windows 架构回退、Whisper 状态探测优化等，社区参与度较好。
- [#8034](https://github.com/agentscope-ai/QwenPaw/pull/8034)、[#8422](https://github.com/agentscope-ai/QwenPaw/pull/8422)、[#8434](https://github.com/agentscope-ai/QwenPaw/pull/8434) 等 PR 覆盖资源治理、插件化和操作效率，表明项目不仅在修 Bug，也在推进生态与体验建设。

### 不满与风险信号

- 用户开始明确指出 **beta 回归和打包遗漏**，说明版本质量门槛正在提高。
- “No active model configured”、依赖校验失败等错误信息缺少足够上下文，降低了自助排查效率。
- 部分问题同时存在于稳定版和 beta 版，并非单纯由新版本引入。
- 安全治理问题 [#8513](https://github.com/agentscope-ai/QwenPaw/issues/8513) 尚未出现明确修复 PR，可能成为用户信任度风险点。

---

## 8. 待处理积压

### 需要优先响应的 Issue

1. [#8513 — shell 包装外发操作未被安全检测和审批拦截](https://github.com/agentscope-ai/QwenPaw/issues/8513)  
   - 涉及安全边界和潜在数据外传，当前未见明确 fix PR。  
   - 建议尽快拆分“检测规则补齐”和“审批策略覆盖”两个任务。

2. [#8517 — Docker runtime 非 root 权限失败](https://github.com/agentscope-ai/QwenPaw/issues/8517)  
   - 影响生产部署，建议确认配置目录创建、挂载权限和运行时用户写入策略。

3. [#8505 — 网关错误状态码识别失败](https://github.com/agentscope-ai/QwenPaw/issues/8505)  
   - 建议增加文本状态码回退解析，同时避免将不可信错误文本误判为可重试状态。

4. [#8560 — Desktop 永久置顶回归](https://github.com/agentscope-ai/QwenPaw/issues/8560)  
   - 建议在下一 beta 修复前明确是否保留“始终置顶”开关及默认值。

5. [#8511 — 飞书消息并发状态竞争](https://github.com/agentscope-ai/QwenPaw/issues/8511)  
   - 涉及状态生命周期，建议检查模型配置是否在任务切换期间被临时重置或共享覆盖。

6. [#8555 — 新任务工作区选择未生效](https://github.com/agentscope-ai/QwenPaw/issues/8555)  
   - 建议核对创建请求、会话持久化和后续消息绑定三个环节。

7. [#8533 — 第三方 Agent 定时任务误判为空](https://github.com/agentscope-ai/QwenPaw/issues/8533)  
   - 建议检查 Codex/Qoder 参数适配层是否遗漏 `agent` 类型任务的文本载荷。

### 长期或高成本 PR

- [#8034 — 单请求内联媒体总量限制](https://github.com/agentscope-ai/QwenPaw/pull/8034)（XXL）  
  涉及请求预算、媒体生命周期和网关兼容，需重点验证是否误伤长会话。

- [#8504 — 桌面通知体系](https://github.com/agentscope-ai/QwenPaw/pull/8504)（XXXL）  
  功能面广，需验证审批权限、通知隐私、跨平台系统权限和去重机制。

- [#8567 — 平台歧义依赖问题修复](https://github.com/agentscope-ai/QwenPaw/pull/8567)（XXL）  
  摘要信息较少，但修改体量大，且可能与 QQ 插件依赖故障相关，应要求补充测试覆盖和关联 Issue。

- [#8234](https://github.com/agentscope-ai/QwenPaw/pull/8234)、[#8235](https://github.com/agentscope-ai/QwenPaw/pull/8235)、[#8236](https://github.com/agentscope-ai/QwenPaw/pull/8236)  
  虽自 10 月中旬创建，但今日仍在审查，属于**长期滞留且用户价值较高**的 PR。建议明确负责人和合并时限。

- [#8409 — QQ C2C 流式消息](https://github.com/agentscope-ai/QwenPaw/pull/8409)  
  自 10 月 24 日创建，仍待审核。建议在 [#8553](https://github.com/agentscope-ai/QwenPaw/issues/8553) 的插件依赖问题解决后安排集成测试。

---

## 今日健康度结论

**项目健康度：中高，偏高波动。**

积极面是更新量高、反馈到修复的链路短、Windows 问题已有成组 PR、功能与生态扩展持续推进。风险面则是 **27 条待合并 PR**、多个桌面端 beta 回归、Hub/容器启动阻断，以及尚未闭环的安全检测缺口。

下一阶段最值得关注的是：

1. Windows Hub 三项修复能否合并并进入新版本；  
2. [#8513](https://github.com/agentscope-ai/QwenPaw/issues/8513) 安全问题是否立即立项；  
3. 桌面永久置顶、Provider 静默消失和第三方网关重试问题能否快速闭环；  
4. [#7997](https://github.com/agentscope-ai/QwenPaw/issues/7997) 消息撤回/编辑与文件回滚是否进入正式路线图。

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/NousResearch/hermes-agent">NousResearch/hermes-agent</a></summary>

# Hermes Agent 项目动态日报

**统计日期：2026-11-04**  
**数据范围：过去 24 小时 GitHub Issues、Pull Requests 与 Releases**

## 1. 今日速览

过去 24 小时 Hermes Agent 共更新 **50 条 Issues**、**50 条 PR**，并发布 **v0.22.7** 补丁版本，仓库保持较高开发活跃度。当前主线重点集中在 **Gateway 会话权威、Desktop/TUI 跨端连接、Windows 更新与启动稳定性、消息平台可靠投递，以及移动端体验**。  
PR 中有 **42 条待合并、8 条已合并或关闭**，Issues 中有 **46 条仍开放、4 条已关闭**，说明讨论和开发并行推进，但维护者仍有较多高优先级问题需要收敛。  
今日的新版本是一个稳定性汇总版本，累计合并约 **174 个 PR**，但完整策展说明将留待 v0.23.0；这意味着用户当前更应关注升级兼容性，而不是期待大型功能落地。  
整体项目健康度评估为 **中高**：迭代速度强、版本发布稳定，但 Gateway、会话迁移和跨平台安装问题形成明显的技术债积压。

---

## 2. 版本发布

### [v0.22.7](https://github.com/NousResearch/hermes-agent/releases/tag/v0.22.7)

- **发布日期：** 2026-11-03
- **版本类型：** Patch release
- **主要内容：**
  - 汇总自 v0.22.6 以来合并的约 **174 个 PR**。
  - 同步发布 CLI、安装器、Microsoft Store 应用、Docker 镜像和 Hermes Cloud。
- **破坏性变更：**
  - Release Note 未明确声明新的破坏性变更。
  - 但项目仍处于 Gateway、桌面端、配置及安装体系快速迁移期，跨版本升级可能触发兼容性回归。
- **迁移建议：**
  1. 升级前备份 Hermes 配置、`state.db`、插件目录及自定义 Profile。
  2. Windows 用户尤其应检查命名 Profile、`active_profile`、Gateway 拉起状态和 `hermes.cmd` 编码。
  3. 使用自定义 Provider、Gateway 会话、Desktop 远程连接或第三方插件的用户，建议先在独立环境验证。
  4. v0.22.7 以汇总修复为主，完整功能说明和进一步策展记录预计在 v0.23.0 提供。

---

## 3. 项目进展

### 3.1 Gateway、Desktop 与 TUI 会话架构继续收敛

- [PR #146212：Desktop 在请求前协商远程 Session Authority](https://github.com/NousResearch/hermes-agent/pull/146212) 已关闭，目标是避免 URL Gateway 已连接、但 Desktop 仍向旧权威端点提交会话请求，导致 `invalid_params`。
- [PR #143336：在公共连接上协商 Canonical Desktop Protocol](https://github.com/NousResearch/hermes-agent/pull/143336) 已关闭，进一步统一认证后的远程 WebSocket 协议选择。
- [Issue #145171：推动 serve、远程 Desktop 和 Web 统一到 Gateway Session Authority](https://github.com/NousResearch/hermes-agent/issues/145171) 继续作为架构跟踪主线。
- [PR #148466：恢复无 Desktop 情况下的跨机器群聊](https://github.com/NousResearch/hermes-agent/pull/148466) 仍待合并，目标是让群聊不再依赖 Desktop 进程维持跨机器路由。

**影响：** 会话权威和协议协商是当前 Gateway 架构迁移的核心。相关工作有助于减少“连接成功但会话失败”、跨端状态不一致及 Desktop 成为隐性依赖的问题。

### 3.2 群聊、机器人列表与插件能力扩展

- [PR #148746：Gateway Group Chats 作为普通 Bots 列表行展示](https://github.com/NousResearch/hermes-agent/pull/148746) 待合并，将移除多余的“Refresh gateway groups”按钮和内部错误文本。
- [PR #148757：允许插件创建可响应的 Profile](https://github.com/NousResearch/hermes-agent/pull/148757) 待合并，扩展了插件创建隔离 Agent Profile 的能力。
- [PR #148765：Mattermost 配置时校验 Home Channel ID](https://github.com/NousResearch/hermes-agent/pull/148765) 待合并，避免把频道名称误存为要求 ID 的配置项。
- [PR #148764：插件目录新增 Rex Terminal 集成](https://github.com/NousResearch/hermes-agent/pull/148764) 待合并。
- [PR #148708：补充 Sprites 插件式终端后端文档](https://github.com/NousResearch/hermes-agent/pull/148708) 待合并。

**影响：** 平台插件和终端后端的扩展速度较快，但 Mattermost、Feishu、Discord、WeChat 等适配层的可靠性仍是决定多平台生产可用性的关键。

### 3.3 CLI/TUI 用户体验与效率优化

- [PR #147293：CLI 和 TUI 内联显示图片](https://github.com/NousResearch/hermes-agent/pull/147293) 待合并，在 Kitty、Ghostty 中显示真实像素，其他终端降级为彩色块。
- [PR #148760：TypeScript LSP 从启动 4 个进程降至 2 个](https://github.com/NousResearch/hermes-agent/pull/148760) 待合并，在保持诊断能力的同时降低后台进程和隐式 npm 下载。
- [PR #24304：工具预览使用 Diff-aware Truncation](https://github.com/NousResearch/hermes-agent/pull/24304) 待合并，在有限预览长度下展示连续工具调用之间的差异尾部。
- [PR #51891：新增 Ponytail 简化开发技能](https://github.com/NousResearch/hermes-agent/pull/51891) 待合并，包括最小实现、差异审查和过度设计审计三个技能。

**影响：** 当前开发方向不仅关注功能扩展，也开始明显优化终端呈现、资源占用和代理行为约束。

### 3.4 安装、升级和插件工作区修复

- [PR #133030：将持久化 Supervisor 命令绑定到安装根目录](https://github.com/NousResearch/hermes-agent/pull/133030) 待合并，避免 Gateway 服务指向可被垃圾回收的依赖生成工作区。
- [PR #125272：合并不同 Profile 下重复的可构建插件工作区成员](https://github.com/NousResearch/hermes-agent/pull/125272) 待合并，针对 uv 工作区包名重复导致更新失败的问题。
- [PR #148350：Tabella 插件目录升级至 2.0.7 并加入 macOS CI](https://github.com/NousResearch/hermes-agent/pull/148350) 待合并。

**影响：** 项目已开始系统处理“多次升级、多 Profile、多安装源”条件下产生的安装环境漂移，这是从个人工具走向稳定部署产品的重要一步。

### 3.5 Feishu 与 Kanban 可靠性改进

- [PR #49364：Feishu `send_message` 绕过错误的 Streaming Send Hook](https://github.com/NousResearch/hermes-agent/pull/49364) 待合并，防止插件报告发送成功但普通文本实际未送达。
- [PR #37509：Feishu `send_message` 保留 Topic Reply Target](https://github.com/NousResearch/hermes-agent/pull/37509) 待合并，避免主题回复被降级为普通消息。
- [PR #148756：将 Kanban Respawn Blocker 绑定到原始 Run](https://github.com/NousResearch/hermes-agent/pull/148756) 待合并，避免旧错误文本被误认为当前阻塞原因。

**影响：** 这些改动直接针对“表面成功、实际丢失”和跨运行状态污染问题，对无人值守 Agent 工作流尤其重要。

---

## 4. 社区热点

### 4.1 讨论最活跃的 Issues

1. **[#143720：Discord 线程完成监听无限触发 `admission_conflict`](https://github.com/NousResearch/hermes-agent/issues/143720)**  
   - **13 条评论**，今日更新热点。  
   - 单个网关日志中已出现 **494 次**冲突，持续数小时；尝试次数上限和 `notify-mode=off` 均未生效。  
   - 核心诉求是完善冲突退避、停止条件和配置语义，避免后台任务无限重试。

2. **[#53347：允许 `context_length` 低于 64K，改为警告而非硬失败](https://github.com/NousResearch/hermes-agent/issues/53347)**  
   - **9 条评论、9 个 👍**，是当前开放 Issue 中反应最强的议题。  
   - 用户希望在 16GB RAM 等资源受限设备上运行 Ollama 和轻量模型。  
   - 这反映了社区对本地模型与低成本部署的明确需求。

3. **[#29779：WeChat 内容去重会静默丢弃重复命令](https://github.com/NousResearch/hermes-agent/issues/29779)**  
   - **7 条评论**。  
   - 相同命令在审批流程中可能是合法重试，而不是重复消息；当前去重破坏了 `/approve` 工作流。  
   - 诉求是引入命令身份、消息 ID 或显式重放语义，而不是单纯按内容去重。

4. **[#145171：统一 Gateway Session Authority](https://github.com/NousResearch/hermes-agent/issues/145171)**  
   - **6 条评论**。  
   - 社区关注 Desktop、Web、SSH 和独立 `serve` 入口是否真正共享同一套会话状态与权限模型。  
   - 这是近期架构方向的重要路标。

5. **[#140667：Desktop `session.control.read` 超时导致同一 WebSocket 队列阻塞](https://github.com/NousResearch/hermes-agent/issues/140667)**  
   - **6 条评论，已关闭**。  
   - 一个大型会话的慢查询耗尽 30 秒超时，并连带阻塞 `session.interrupt` 等请求。  
   - 反映 Desktop 长会话下 RPC 隔离和背压机制的重要性。

6. **[#145215：会话恢复快照超过 1 MiB 后 Owner Forward 丢失提示](https://github.com/NousResearch/hermes-agent/issues/145215)**  
   - **5 条评论**。  
   - P1 问题：跨后端转发时受 WebSocket 默认消息上限影响，长对话中的用户消息可能直接丢失。

7. **[#132645：Windows 更新后粘性 Profile 导致 Gateway 停止](https://github.com/NousResearch/hermes-agent/issues/132645)**  
   - **4 条评论**。  
   - 更新器显示已重启，但实际因 `active_profile` 指向命名 Profile 而未恢复 Gateway，属于升级路径上的高影响回归。

8. **[#126292：原生 Android 与 iOS 应用](https://github.com/NousResearch/hermes-agent/issues/126292)**  
   - **4 条评论**。  
   - 社区希望手机端具备定位授权、审批、实时语音等真正“随身 Agent”能力，而非仅是消息机器人外壳。

### 4.2 其他高反应热点

- **[#130490：Desktop 偶发重复渲染同一助手回复](https://github.com/NousResearch/hermes-agent/issues/130490)**：4 条评论；用户自托管后端每天约出现 1–2 次，反映流式事件去重仍不稳定。
- **[#148761：Kanban 的 `stranded_running` 心跳年龄规则与 Worktree 独占保护](https://github.com/NousResearch/hermes-agent/issues/148761)**：2 条评论；源于真实多 Agent 集群碰撞事件。
- **[#148459：MCP-over-SSE 客户端静默丢弃 Tool Call Arguments](https://github.com/NousResearch/hermes-agent/issues/148459)**：2 条评论；工具可能使用默认值执行，用户却收不到错误，属于高风险协议缺陷。
- **[#53347](https://github.com/NousResearch/hermes-agent/issues/53347) 与 [#139926](https://github.com/NousResearch/hermes-agent/issues/139926)** 显示移动端与低资源本地部署是社区持续关注方向。

---

## 5. Bug 与稳定性

### P1：高优先级

1. **[#145215：Session 恢复快照超过 1 MiB 后消息丢失](https://github.com/NousResearch/hermes-agent/issues/145215)**  
   - 影响：跨 Gateway/Desktop-SSH Owner Forward 时，长会话中的用户提示可能丢失。  
   - **Fix PR：未明确关联。**

2. **[#148459：MCP SSE 客户端静默丢弃 Tool Call 参数](https://github.com/NousResearch/hermes-agent/issues/148459)**  
   - 影响：MCP 服务端以默认参数执行错误调用，调用方却可能认为执行正常。  
   - **Fix PR：未明确关联。**

### P2：重要稳定性问题

3. **[#143720：Discord `admission_conflict` 无限重试](https://github.com/NousResearch/hermes-agent/issues/143720)**  
   - **Fix PR：未明确关联。**

4. **[#29779：WeChat 去重破坏 `/approve`](https://github.com/NousResearch/hermes-agent/issues/29779)**  
   - **Fix PR：未明确关联。**

5. **[#132645：Windows `hermes update` 后 Gateway 未恢复](https://github.com/NousResearch/hermes-agent/issues/132645)**  
   - **Fix PR：未明确关联。**

6. **[#148446：Android 开启 Thinking Panel 后长回复被截断](https://github.com/NousResearch/hermes-agent/issues/148446)**  
   - **Fix PR：未明确关联。**

7. **[#148742：旧版 `state.db` 升级后积累 NULL ID，压缩失败](https://github.com/NousResearch/hermes-agent/issues/148742)**  
   - 影响：旧数据库升级后出现 `int(None)` 与 `attempts_exhausted`，可能影响会话和消息压缩。  
   - **Fix PR：未明确关联。**

8. **[#146345：切换模型后 `gateway_runtime` 仍保留旧 Provider](https://github.com/NousResearch/hermes-agent/issues/146345)**  
   - 影响：Desktop/TUI 后续恢复会话可能错误路由到旧 Provider。  
   - **Fix PR：未明确关联。**

9. **[#148703：Kanban 未知 `provider_override` 可回退到其他 Provider](https://github.com/NousResearch/hermes-agent/issues/148703)**  
   - 影响：显式 Provider 固定可能被绕过，破坏成本和路由约束。  
   - **Fix PR：未明确关联。**

10. **[#140667：Desktop 慢 RPC 阻塞同 WebSocket 队列](https://github.com/NousResearch/hermes-agent/issues/140667)**  
    - **已关闭；相关会话权威 PR 已进入讨论，但未见明确对应修复 PR。**

11. **[#147361：移动端远程 Gateway WebSocket 始终 403](https://github.com/NousResearch/hermes-agent/issues/147361)**  
    - **已关闭。**  
    - 涉及 Origin-less Subprotocol Ticket 在 Ticket Gate 前被拒绝。

12. **[#148689：Windows 禁止 Job Object Breakaway 时 `hermes acp` 无法启动会话](https://github.com/NousResearch/hermes-agent/issues/148689)**  
    - **Fix PR：未明确关联。**

### P3 或工程维护问题

- [#127727：`providers.<name>.enabled` 生效但每次都警告为未知键](https://github.com/NousResearch/hermes-agent/issues/127727)——**未明确关联 Fix PR**。
- [#126910：合法子目录插件安装被误报为 Provenance Drift](https://github.com/NousResearch/hermes-agent/issues/126910)——**未明确关联 Fix PR**。
- [#135306：同一插件安装到多个 Profile 时更新产生重复 uv workspace member](https://github.com/NousResearch/hermes-agent/issues/135306)——已有候选修复 [#125272](https://github.com/NousResearch/hermes-agent/pull/125272)，尚未合并。
- [#134748：非 ASCII Windows Profile 的 `hermes.cmd` 启动器失效](https://github.com/NousResearch/hermes-agent/issues/134748)——标记为重复问题，**未见明确 Fix PR**。
- [#148714：切换到较小模型后 Context Window Maximum 未立即刷新](https://github.com/NousResearch/hermes-agent/issues/148714)——**未明确关联 Fix PR**。
- [#148758：Docker 镜像包含多套分裂的 Python 环境](https://github.com/NousResearch/hermes-agent/issues/148758)——**未明确关联 Fix PR**。
- [#148761：Kanban 多 Agent 任务出现 stranded-running 与 Worktree 冲突](https://github.com/NousResearch/hermes-agent/issues/148761)——相关方向已有 [#148756](https://github.com/NousResearch/hermes-agent/pull/148756)，但尚不能覆盖全部心跳与独占保护需求。

---

## 6. 功能请求与路线图信号

### 6.1 移动端成为明确路线方向

- **[#126292：原生 Android 与 iOS 双向 Agent](https://github.com/NousResearch/hermes-agent/issues/126292)**提出定位授权、审批、实时语音和常驻辅助能力。
- **[#148447：移动端语音气泡、Agent Avatar 与聊天界面改版](https://github.com/NousResearch/hermes-agent/issues/148447)**进一步说明 Android Beta 已进入真实使用反馈阶段。
- **[#139926：社区 Android 客户端](https://github.com/NousResearch/hermes-agent/issues/139926)**已发布可连接自托管 Gateway 的开源实现。
- **[#147361：移动端远程 Gateway WebSocket 403](https://github.com/NousResearch/hermes-agent/issues/147361)**已关闭，表明移动端网络接入正在加速成熟。

**路线判断：** 第一方移动端、第三方客户端兼容及 Gateway 移动连接协议很可能成为后续版本重点；但具体排期仍需维护者确认。

### 6.2 多租户与安全托管

- **[#146503：Bens Magical Ticket of Multi-tenancy](https://github.com/NousResearch/hermes-agent/issues/146503)**提出单进程托管多个租户、远程沙箱执行用户代码、只加载 Nous 审核插件的设计。
- **[#145171：统一 Session Authority](https://github.com/NousResearch/hermes-agent/issues/145171)**则表明桌面端、Web、SSH 和远程入口需要共享认证及会话权限边界。

**路线判断：** 两者共同指向“单 Gateway、多租户、远程隔离、统一会话权威”的托管化方向。相关需求技术复杂度高，更可能分阶段进入 v0.23.0 之后的路线。

### 6.3 低成本本地模型部署

- **[#53347：允许 Context Length 低于 64K](https://github.com/NousResearch/hermes-agent/issues/53347)**获得最高社区反应。
- 目标用户是使用 Ollama、16GB RAM MacBook 等设备的轻量部署场景。

**路线判断：** 该改动门槛低、用户诉求强，较有可能被纳入下一次快速迭代，但当前所给 PR 列表中没有明确对应实现。

### 6.4 终端多模态与工具后端

- [#147293：CLI/TUI 内联显示图片](https://github.com/NousResearch/hermes-agent/pull/147293)
- [#148764：Rex Terminal 插件](https://github.com/NousResearch/hermes-agent/pull/148764)
- [#148708：Sprites 终端后端文档](https://github.com/NousResearch/hermes-agent/pull/148708)
- [#32291：Antigravity Toolset/Skill](https://github.com/NousResearch/hermes-agent/issues/32291) 已关闭，原需求可能由其他插件集成路径承接。

**路线判断：** 多媒体终端和插件化工具后端正在形成稳定扩展方向，近期版本较可能继续吸收 CLI/TUI 图片显示与插件目录相关改动。

### 6.5 精细化路由和 Agent 行为约束

- [#146961：允许 `channel_overrides` 配置独立 `fallback_providers`](https://github.com/NousResearch/hermes-agent/pull/146961)
- [#132468：TUI 子 Agent Dock 展示真实任务进度](https://github.com/NousResearch/hermes-agent/issues/132468)
- [#51891：Ponytail 简化技能](https://github.com/NousResearch/hermes-agent/pull/51891)

**路线判断：** 项目正在从“功能可用”转向“路由可解释、任务状态透明、输出更克制”的产品化阶段。

---

## 7. 用户反馈摘要

### 真实使用场景

- 用户在 **Linux 容器中自托管 Hermes Desktop**，通过流式聊天、工具调用和图片输入工作，但遭遇重复回复：[Issue #130490](https://github.com/NousResearch/hermes-agent/issues/130490)。
- 用户在 **Windows 命名 Profile** 环境中使用更新器，遭遇 Gateway 未恢复：[Issue #132645](https://github.com/NousResearch/hermes-agent/issues/132645)。
- 用户在 **多 Profile、多机器、多 Agent 集群** 中运行 Kanban，真实发生任务停滞、Worktree 冲突和状态无法诊断：[Issue #148761](https://github.com/NousResearch/hermes-agent/issues/148761)。
- 用户在 **WeChat** 中依赖 `/approve` 做人工审批，内容去重直接破坏工作流：[Issue #29779](https://github.com/NousResearch/hermes-agent/issues/29779)。
- 用户在 **Discord 线程**中监控进程完成，遭遇持续六小时以上的每分钟冲突重试：[Issue #143720](https://github.com/NousResearch/hermes-agent/issues/143720)。
- Android Beta 用户开始关注 **长消息、思考面板、语音气泡和视觉设计**：[Issue #148446](https://github.com/NousResearch/hermes-agent/issues/148446)、[#148447](https://github.com/NousResearch/hermes-agent/issues/148447)。

### 满意点

- 跨平台生态覆盖面广，Terminal、Desktop、Web 以及多种消息平台已具备较强可用性。
- 社区开始主动贡献 Android 客户端、终端插件、工具集和 Agent 技能。
- v0.22.7 能快速汇总大量 PR，发布节奏稳定。
- [#53347](https://github.com/NousResearch/hermes-agent/issues/53347) 获得 **9 个 👍**，表明降低本地部署门槛是明确且受欢迎的需求。

### 不满意点

- **状态一致性不足：** Desktop、Web、TUI、Gateway 和旧 `serve` 入口之间仍存在会话权威差异。
- **失败不够透明：** MCP 参数被丢弃、Feishu 报告成功但未真正发送、Discord 无限重试、Desktop 显示“控制不可用”等问题，均削弱用户信任。
- **升级路径脆弱：** Windows Profile、插件多安装源、旧数据库、依赖生成工作区和 Docker 多 Python 环境均可能在更新后漂移。
- **长会话与大状态问题突出：** 1 MiB 快照上限、旧 SQLite NULL ID、Context Window 缓存陈旧都影响长期运行。

---

## 8. 待处理积压

### 8.1 长期高优先级、仍需维护者关注

1. **[#143720：Discord 无限 `admission_conflict`](https://github.com/NousResearch/hermes-agent/issues/143720)**  
   - 虽非新建，但评论最多；建议明确配置语义、退避算法、最大尝试次数和关闭开关，并补充回归测试。

2. **[#53347：低 Context Length 支持](https://github.com/NousResearch/hermes-agent/issues/53347)**  
   - 社区反应最高，应尽快由“needs-decision”转为明确实施或替代方案。

3. **[#29779：WeChat 重复命令与审批流](https://github.com/NousResearch/hermes-agent/issues/29779)**  
   - 涉及消息丢失和人工审批安全，应优先提供可验证的去重策略。

4. **[#145171：Gateway Session Authority 统一](https://github.com/NousResearch/hermes-agent/issues/145171)**  
   - 属于长期架构迁移，建议维护者明确阶段、兼容矩阵及弃用计划。

5. **[#145215：超过 1 MiB 的 Owner Forward 丢消息](https://github.com/NousResearch/hermes-agent/issues/145215)**  
   - P1 且直接丢用户提示，应尽快关联专项 Fix PR。

6. **[#148459：MCP SSE 参数静默丢弃](https://github.com/NousResearch/hermes-agent/issues/148459)**  
   - 建议在协议解析层增加参数完整性校验，并对缺失或非法参数 fail closed。

7. **[#132645：Windows 更新后 Gateway 停止](https://github.com/NousResearch/hermes-agent/issues/132645)**  
   - 更新器成功提示与服务真实状态不一致，容易造成生产事故。

8. **[#126292：原生移动端](https://github.com/NousResearch/hermes-agent/issues/126292)**  
   - 需求热度高，但需明确第一方 App 的范围、平台优先级和现有 Android 客户端的关系。

### 8.2 长期开放但可能重复或需归档的 Issue

- [#32291：Antigravity Toolset/Skill](https://github.com/NousResearch/hermes-agent/issues/32291) 已关闭，可确认是否已由插件机制覆盖。
- [#139926：社区 Android 客户端](https://github.com/NousResearch/hermes-agent/issues/139926) 已标记重复，宜明确指向官方移动端路线或保留作生态索引。
- [#135306：多 Profile 重复插件导致 uv workspace 冲突](https://github.com/NousResearch/hermes-agent/issues/135306) 已有候选 PR [#125272](https://github.com/NousResearch/hermes-agent/pull/125272)，合并后可关闭。
- [#126910：插件子目录安装 provenance drift](https://github.com/NousResearch/hermes-agent/issues/126910) 尚无明确修复，应避免长期保持开放。

### 8.3 PR 合并积压

过去 24 小时共有 **42 条 PR 待合并**，其中部分已创建较久或涉及高风险核心模块，例如：

- [#146961：按 Channel 配置独立 Fallback Providers](https://github.com/NousResearch/hermes-agent/pull/146961)
- [#148466：跨机器群聊无需 Desktop](https://github.com/NousResearch/hermes-agent/pull/148466)
- [#133030：Gateway Supervisor 绑定安装根目录](https://github.com/NousResearch/hermes-agent/pull/133030)
- [#125272：跨 Profile 插件工作区去重](https://github.com/NousResearch/hermes-agent/pull/125272)
- [#24304：Diff-aware 工具预览截断](https://github.com/NousResearch/hermes-agent/pull/24304)

**建议：** 维护者宜优先清理 P1/P2 稳定性修复、会话权威迁移、Windows 更新以及消息投递相关 PR，避免功能型 PR 持续堆积并扩大 v0.23.0 的回归面。

---

## 项目健康度结论

**综合健康度：中高。**

- **优势：** 高频发布、PR 与 Issue 流量充足；移动端、插件生态、跨端会话架构均有实质推进；社区开始贡献实际部署和多 Agent 集群场景。
- **主要风险：** Gateway 与 Desktop 会话权威仍在迁移，消息投递存在“静默成功/静默失败”，Windows 与安装更新路径问题反复出现，长会话和大状态边界暴露出明显缺口。
- **近期最值得跟踪的三条主线：**
  1. v0.22.7 升级后的 Gateway、Windows Profile 与旧数据库兼容性；
  2. Session Authority、Owner Forward 和 Desktop/TUI 路由一致性；
  3. Discord、WeChat、Feishu、MCP 的消息与工具调用可靠性。

</details>

<details>
<summary><strong>OpenHuman</strong> — <a href="https://github.com/tinyhumansai/openhuman">tinyhumansai/openhuman</a></summary>

# OpenHuman 项目动态日报

**日期：2026-11-04**  
**数据范围：过去 24 小时**  
**项目健康度评估：良好偏积极，但模块供应链、安全边界与多入口一致性仍需集中收敛**

---

## 1. 今日速览

过去 24 小时 OpenHuman 共更新 **4 个 Issues、18 个 Pull Requests**，其中 PR 已合并或关闭 **12 个**、待处理 **6 个**，Issue 活跃或新开 **2 个**、关闭 **2 个**，整体吞吐较高。今日开发重点集中在 **TinySecurity 安全模块迁移、vendor 模块版本对齐、内嵌运行时能力、Shell 沙箱资源管理以及跨入口 Hook 一致性**。其中多个已关闭 PR 已形成明确修复闭环，包括沙箱进程槽误占、TRC-20 钱包审批参数绑定、工作流画布瞬时错误重试等。

当前主要风险不是功能推进速度，而是 **模块依赖重新 pin 后的构建与签名登录稳定性**：#8536 仍是 Draft，并明确披露桌面端登录仍卡在 secret-master 解锁。安全模块在未启用或不可用时如何降级，也正在经历一轮策略调整，说明项目正从“默认安全优先”向“兼顾嵌入式宿主可控性”过渡。

---

## 3. 项目进展

> 今日无新版本发布，因此不单列“版本发布”章节。以下按重要性梳理已合并或关闭的主要 PR。

### 3.1 安全与供应链稳定性

- **[#8536](https://github.com/tinyhumansai/openhuman/pull/8536)｜修复 vendor 模块版本钉扎及 TinySecurity 随应用发布、跨登录加载**
  - 重新钉扎剩余 vendor 模块，使 TinySecurity 可在正式发布构建及用户切换登录身份后继续工作。
  - 该 PR 仍为 **Draft / OPEN**，且披露一个关键阻塞：**桌面端登录切换 Profile 后的 secret-master 解锁仍失败**。
  - 这是今日最值得维护者跟踪的集成风险，说明修复已覆盖打包和模块加载，但身份切换链路尚未完全打通。

- **[#8535](https://github.com/tinyhumansai/openhuman/pull/8535)｜回调型模块从已验证 Release 加载**
  - TinySecurity、TinyMCP、TinyEventQueues、TinyChannels、TinyComputer 等持有宿主回调的模块，在未设置 `OPENHUMAN_MODULE_PATH` 时，将从固定版本的已验证 Release 加载。
  - 降低正式安装环境对本地源码目录的依赖，提升发布版可用性。

- **[#8533](https://github.com/tinyhumansai/openhuman/pull/8533)｜允许宿主显式关闭提示词安全筛查**
  - 新增宿主主动关闭 TinySecurity prompt screen 的显式能力。
  - 默认行为仍保持安全筛查开启并“失败关闭”，属于向后兼容的可配置扩展。

- **[#8529](https://github.com/tinyhumansai/openhuman/pull/8529)｜强化 TRC-20 钱包审批约束**
  - 将签名意图与确认报价中的 **代币合约、收款地址和金额** 绑定。
  - 修复两类问题：原先格式合法但参数不匹配的请求可能被接受；正常 TRC-20 转账又可能全部被拒绝。
  - 这是安全边界的重要修复，直接降低错误或恶意审批被放行的风险。

- **[#8531](https://github.com/tinyhumansai/openhuman/pull/8531)｜更新 tinyagents 安全迁移依赖**
  - 将 `vendor/tinyagents` 更新到包含上游安全迁移的提交。
  - 已关闭，说明相关依赖推进已完成，但后续仍需通过统一模块 pin 检查确认没有漂移。

### 3.2 模块版本与构建流水线

- **[#8534](https://github.com/tinyhumansai/openhuman/pull/8534)｜对齐六个模块的 Release 与 gitlink**
  - 修复 registry record 指向的运行时制品与实际编译 gitlink 不一致问题。
  - **状态为 OPEN**。这是模块供应链一致性修复，预计应在 CI 验证通过后尽快合并。

- **[#8530](https://github.com/tinyhumansai/openhuman/pull/8530)｜重新钉扎 2026-11-03 vendor Releases**
  - 一次性更新 tinybus 等模块的 gitlink、registry record、lockfile 和 digest 测试。
  - 已关闭，为今日多轮模块版本统一工作提供了基础。

- **[#8537](https://github.com/tinyhumansai/openhuman/pull/8537)｜EX63 私有 CI 移除 Tinymold 远程缓存**
  - 移除缺少签名缓存配置时会导致私有流水线提前失败的 Tinymold 配置。
  - **状态为 OPEN**，旨在恢复 EX63 私有 lane 正常启动。

### 3.3 运行时、Agent 与基础设施

- **[#8532](https://github.com/tinyhumansai/openhuman/pull/8532)｜正确识别宿主安装的共享 MongoDB**
  - `storage::installed_is_shared()` 现在能够识别通过 `RuntimeBuilder`、存储 URL 或 profiles builder 安装的后端。
  - 避免共享 MongoDB 被误判为进程本地存储，影响启动清理与隔离行为。

- **[#8527](https://github.com/tinyhumansai/openhuman/pull/8527)｜Cron 目标 Agent 不存在时按需创建**
  - `HostAgentResolver` 新增可选异步 `open(agent_id)`。
  - Cron 任务指向未加载 Agent 时，可由嵌入式运行时创建并运行该 Agent，减少定时任务因目标不存在而失败。

- **[#8528](https://github.com/tinyhumansai/openhuman/pull/8528)｜tinyagents 更新及共享 AppendWorker drain 线程**
  - 更新 tinyagents pin，并引入共享的 AppendWorker drain 机制。
  - 有助于统一依赖版本并改善后台任务排空行为。

- **[#8512](https://github.com/tinyhumansai/openhuman/pull/8512)｜完成上游模块 roll-up 集成**
  - 更新 OpenHuman 对新模块 API 的适配，完成异步 TinySecurity 凭据调用，并刷新存储 schema、添加原生能力支持。
  - 是安全模块迁移后的大规模集成收尾工作。

### 3.4 功能与体验修复

- **[#8318](https://github.com/tinyhumansai/openhuman/pull/8318)｜先解析沙箱后端，再占用 Shell 进程槽**
  - 只有在命令可能继续运行时才占用每轮四个进程槽之一。
  - Docker 命令不再提前占用无法释放的槽位，缓解 Shell 并发资源被无效消耗的问题。
  - 对应 Issue [#8317](https://github.com/tinyhumansai/openhuman/issues/8317) 已关闭。

- **[#8495](https://github.com/tinyhumansai/openhuman/pull/8495)｜Channel 入口触发 `beforeSubmitPrompt`**
  - Telegram、Discord、Slack 等 Channel 对话现在也会执行 Hook。
  - Hook 拒绝输入时，可在模型调用前终止本轮，并向发送者返回拒绝原因。
  - 对应 Issue [#8124](https://github.com/tinyhumansai/openhuman/issues/8124) 已关闭；但需注意该 Issue 的原始诉求还包含 agent chat、cron 等所有入口，当前 PR 摘要只明确覆盖 Channel。

- **[#8484](https://github.com/tinyhumansai/openhuman/pull/8484)｜工作流画布支持瞬时加载失败原地重试**
  - 对临时性 `flows_get` 失败增加 Retry，无需离开页面再返回。
  - 保持加载中、流程不存在及正常编辑器的既有行为。

- **[#8205](https://github.com/tinyhumansai/openhuman/pull/8205)｜本地 AI 连接失败时恢复原设置**
  - Ollama、LM Studio、OMLX 等本地运行时连接失败后，保留之前的 provider、endpoint 和 key。
  - 避免弹窗提示失败但敏感配置已被错误覆盖，提升本地模型配置的可预期性。

- **[#8181](https://github.com/tinyhumansai/openhuman/pull/8181)｜补充 Codex MCP 接入文档**
  - 新增通过 `openhuman-core mcp` 将 OpenHuman 接入 Codex 的命令和 `config.toml` 示例。
  - 完善 MCP 集成生态的上手路径。

---

## 4. 社区热点

### 4.1 最活跃 Issue

1. **[#6983：让 Memory Queue 的 LLM 并发可配置](https://github.com/tinyhumansai/openhuman/issues/6983)**  
   - **9 条评论，为今日评论最多的条目。**
   - 诉求是开放 `llm_permits`，允许用户提高 Memory Queue 的 LLM 并发。
   - 当前 Memory Queue 固定单任务执行；云端摘要模型在首次大批量导入时可能耗时数天。
   - 背景是 `QueueConfig.llm_permits` 已存在于 tinycortex，但未从 tinymemory 模块配置完整透传。
   - 这是典型的吞吐与成本权衡需求：提高并发可缩短导入时间，但会放大模型费用、限流和内存压力。

2. **[#8456：Workflow Proposal 缺少稳定 ID](https://github.com/tinyhumansai/openhuman/issues/8456)**  
   - **2 条评论。**
   - 同名 live proposal 因依赖“来源消息 ID + 名称”计算卡片身份，可能共享同一卡片标识。
   - 诉求是为工作流提议引入稳定、唯一的 ID，避免不同 Proposal 的卡片身份冲突、状态串扰或更新错位。
   - 这是工作流编辑体验和数据一致性的基础问题，后续应与 proposal 创建、修订和编辑链路统一解决。

3. **[#8124：所有对话入口都应触发 `beforeSubmitPrompt`](https://github.com/tinyhumansai/openhuman/issues/8124)**  
   - 已关闭。
   - 原始问题是 Web Chat、Channels、CLI/agent chat 和 Cron 等入口行为不一致，导致部署方无法通过一个 Hook 统一筛查输入。
   - [#8495](https://github.com/tinyhumansai/openhuman/pull/8495) 已覆盖 Channel 路径，Issue 随之关闭；但其他入口是否全部覆盖仍值得核对。

4. **[#8317：先解析沙箱后端，再预留 Shell 进程槽](https://github.com/tinyhumansai/openhuman/issues/8317)**  
   - 已关闭，且已有明确修复 PR。
   - 反映的问题集中在 Docker 命令提前占用每轮进程配额，可能让真正需要并发执行的命令无法启动。

### 4.2 值得关注的开放 PR

- **[#8536](https://github.com/tinyhumansai/openhuman/pull/8536)**：同时涉及发布构建、vendor pin 和登录切换，是今日集成影响最大的开放 PR。
- **[#8535](https://github.com/tinyhumansai/openhuman/pull/8535)**：直接决定正式安装环境能否稳定加载核心模块。
- **[#8534](https://github.com/tinyhumansai/openhuman/pull/8534)**：反映主干分支当前存在六个模块 pin 不一致，说明供应链一致性尚未完全收敛。
- **[#8537](https://github.com/tinyhumansai/openhuman/pull/8537)**：表明 EX63 私有 CI 曾因远程缓存合同校验而在 lane 启动前失败。
- **[#8205](https://github.com/tinyhumansai/openhuman/pull/8205)**：虽然创建时间较早，但与最终用户配置体验直接相关，仍处于 OPEN，需关注合并进展。

---

## 5. Bug 与稳定性

### P1 / 高风险：暂无明确 P1 Issue

### P2 / 中高风险

1. **正式构建及跨登录状态下的 TinySecurity 加载/解锁问题**
   - 关联 PR：[#8536](https://github.com/tinyhumansai/openhuman/pull/8536)
   - **已有 fix PR，但尚未完成。**
   - PR 已修复部分发布构建和模块加载问题，但桌面登录切换后 secret-master 解锁仍失败，且该 PR 仍为 Draft。
   - 这是当前最明确的稳定性阻塞。

2. **安全模块缺失或不可响应时的 fail-closed 行为可能不适合嵌入式宿主**
   - 关联 PR：[#8538](https://github.com/tinyhumansai/openhuman/pull/8538)
   - **已有开放 fix PR。**
   - 未启用 `security-module` feature 时，TinySecurity 检查硬编码失败，可能导致宿主自有安全策略无法生效。
   - #8538 提议在安全功能关闭时采用更宽松的检查；该变更涉及安全默认值，需重点评审，避免把“显式关闭”误扩散为默认绕过。

3. **模块 Release、registry 与 gitlink 不一致**
   - 关联 PR：[#8534](https://github.com/tinyhumansai/openhuman/pull/8534)
   - **已有开放 fix PR。**
   - 主干存在六个模块版本记录不一致，可能导致运行时加载版本与编译时依赖版本不同。
   - 对安全模块尤其危险，因为行为差异可能只在特定部署环境中暴露。

4. **私有 CI 因 Tinymold 签名远程缓存配置失败**
   - 关联 PR：[#8537](https://github.com/tinyhumansai/openhuman/pull/8537)
   - **已有开放 fix PR。**
   - 问题发生在 lane 启动前，会阻断私有构建验证，降低发布前测试覆盖率。

### P3 / 中低风险

5. **Shell 进程槽被 Docker 沙箱命令无效占用**
   - Issue：[#8317](https://github.com/tinyhumansai/openhuman/issues/8317)
   - Fix：[#8318](https://github.com/tinyhumansai/openhuman/pull/8318)
   - **已修复并关闭。**

6. **Channel 入口绕过 `beforeSubmitPrompt`**
   - Issue：[#8124](https://github.com/tinyhumansai/openhuman/issues/8124)
   - Fix：[#8495](https://github.com/tinyhumansai/openhuman/pull/8495)
   - **Channel 路径已修复并关闭；建议确认其他入口的覆盖完整性。**

7. **工作流画布瞬时加载失败后只能通过离开页面重试**
   - Fix：[#8484](https://github.com/tinyhumansai/openhuman/pull/8484)
   - **已修复并关闭。**

8. **本地 AI 连接检查失败后错误覆盖旧配置**
   - Fix：[#8205](https://github.com/tinyhumansai/openhuman/pull/8205)
   - **已有修复 PR，但尚未合并。**

9. **嵌入式安装的 MongoDB 被误判为进程本地后端**
   - Fix：[#8532](https://github.com/tinyhumansai/openhuman/pull/8532)
   - **已修复并关闭。**

10. **TRC-20 审批参数未完整绑定，正常转账也可能被拒绝**
    - Fix：[#8529](https://github.com/tinyhumansai/openhuman/pull/8529)
    - **已修复并关闭。**

---

## 6. 功能请求与路线图信号

### 6.1 Memory Queue 并发控制：高概率进入近期迭代

- 请求：[#6983](https://github.com/tinyhumansai/openhuman/issues/6983)
- `QueueConfig.llm_permits` 已存在，说明底层能力已经具备，剩余工作主要是从 tinymemory 配置透传并增加合理默认值、上限和监控。
- 该需求拥有今日最高评论数，且直接解决首次大规模导入耗时数天的问题，**很可能成为下一轮版本的重要配置项**。
- 建议在实现时同时提供：
  - 单并发默认值；
  - 可配置上限；
  - 限流与失败退避；
  - 预计费用和内存提示；
  - 云端供应商并发限制适配。

### 6.2 Workflow Proposal 稳定 ID：应纳入工作流模型一致性改造

- 请求：[#8456](https://github.com/tinyhumansai/openhuman/issues/8456)
- 当前身份生成方式依赖来源消息与名称，无法可靠区分同名 live proposal。
- 该需求很可能与后续 Proposal 创建、修订、编辑及卡片状态管理一起落地，而不是单独打补丁。
- 建议使用不可变 UUID/ULID，并避免把显示名称作为身份的一部分。

### 6.3 跨入口统一 Hook：方向明确，但覆盖面需复核

- 请求：[#8124](https://github.com/tinyhumansai/openhuman/issues/8124)
- 修复：[#8495](https://github.com/tinyhumansai/openhuman/pull/8495)
- 项目已经认可“所有 Agent 对话入口统一经过安全 Hook”的产品方向。
- 由于 Issue 在 Channel 修复后即关闭，建议维护者补充说明 `openhuman.agent_chat`、Cron 等入口是否也已覆盖，否则可能留下关闭过早的问题。

### 6.4 安全策略应由宿主显式配置

- PR：[#8533](https://github.com/tinyhumansai/openhuman/pull/8533)
- PR：[#8538](https://github.com/tinyhumansai/openhuman/pull/8538)
- 两项变更共同表明路线正在从“模块不可用即失败”转向：
  - 默认保持严格安全策略；
  - 允许宿主显式关闭或接管筛查；
  - 区分“明确禁用”和“组件故障”。
- 这适合作为下一版本的重要配置能力，但必须提供清晰的安全警告和配置边界。

---

## 7. 用户反馈摘要

### 7.1 大规模首次导入速度不足

- 来源：[#6983](https://github.com/tinyhumansai/openhuman/issues/6983)
- 用户使用云端摘要模型进行首次大规模记忆导入时，固定单并发导致任务可能持续数天。
- 核心痛点不是功能缺失，而是**吞吐不可控、用户无法根据模型能力调节处理速度**。
- 对高频或多模态记忆用户尤其影响明显。

### 7.2 多入口安全筛查不一致

- 来源：[#8124](https://github.com/tinyhumansai/openhuman/issues/8124)
- 部署方希望在所有入口统一执行输入筛查和策略 Hook。
- 现状下 Web Chat 可执行，而 Channel、Agent Chat 或 Cron 可能绕过，使部署方不得不为每个入口重复实现脚本。
- 这不仅是体验问题，也是**安全治理完整性**问题。

### 7.3 工作流卡片身份冲突

- 来源：[#8456](https://github.com/tinyhumansai/openhuman/issues/8456)
- 同名工作流 Proposal 可能共享卡片身份，导致用户难以区分、更新和追踪不同建议。
- 深层诉求是工作流 Proposal 需要像正式实体一样拥有稳定身份和生命周期。

### 7.4 本地模型配置失败时污染旧配置

- 来源：[#8205](https://github.com/tinyhumansai/openhuman/pull/8205)
- 用户或部署者在测试 Ollama、LM Studio、OMLX 时，如果连接检查失败，旧有 provider、endpoint 和 key 却已被覆盖。
- 用户痛点是**失败操作不应改变已验证可用的配置状态**，尤其 key 丢失可能直接中断现有本地模型工作流。

### 7.5 暂无明显正面评价信号

- 今日数据未提供新增评论或 reaction 统计，Issues 的 👍 均为 0，PR 的 👍 也均为 0。
- 因此无法从互动数据确认用户满意度；当前反馈主要集中在阻塞性、性能和配置一致性问题。

---

## 8. 待处理积压

### 8.1 长期开放且评论最多的 Issue

- **[#6983：Memory Queue LLM 并发可配置](https://github.com/tinyhumansai/openhuman/issues/6983)**
  - 创建于 **2026-10-03**，已开放约一个月，更新于 11 月 3 日。
  - 今日评论数最高，说明需求明确，但当前没有关联 PR。
  - 建议尽快拆分“配置透传、并发上限、默认策略与文档”任务，避免继续积压。

- **[#8456：Workflow Proposal 稳定 ID](https://github.com/tinyhumansai/openhuman/issues/8456)**
  - 创建于 **2026-10-27**，已有 2 条评论。
  - 尚无明确修复 PR，且涉及前端身份键、Runtime 数据流和多个 Proposal 入口，应指定负责人和目标版本。

### 8.2 长期开放的 PR

- **[#8205：连接失败后恢复本地 AI 设置](https://github.com/tinyhumansai/openhuman/pull/8205)**
  - 创建于 **2026-10-22**，仍未合并。
  - 属于直接影响用户数据安全与配置一致性的修复，建议优先完成评审和回归测试。

- **[#8536：发布构建及跨登录 TinySecurity 修复](https://github.com/tinyhumansai/openhuman/pull/8536)**
  - 虽为新建 PR，但仍有明确的 secret-master 解锁阻塞。
  - 应作为当前集成发布的高优先级事项，设置明确 blocker 清单和验证矩阵。

- **[#8534](https://github.com/tinyhumansai/openhuman/pull/8534)、[#8535](https://github.com/tinyhumansai/openhuman/pull/8535)、[#8537](https://github.com/tinyhumansai/openhuman/pull/8537)、[#8538](https://github.com/tinyhumansai/openhuman/pull/8538)**
  - 四个 PR 均为 OPEN，共同构成模块发布与安全降级策略的收尾工作。
  - 建议按“模块版本一致性 → CI 可运行 → 发布构建加载 → 安全策略配置”的顺序推进，避免各自独立合入造成中间态不可构建。

### 8.3 Issue 关闭前的覆盖确认

- **[#8124](https://github.com/tinyhumansai/openhuman/issues/8124)** 已由主要覆盖 Channel 的 [#8495](https://github.com/tinyhumansai/openhuman/pull/8495) 关闭。
  - 建议核对 Issue 标题中的“every turn entry point”是否全部满足。
  - 如 agent chat、Cron 仍存在差异，应补充独立测试或重新打开 Issue，避免形成功能覆盖缺口。

---

## 结论

OpenHuman 今日保持较高开发吞吐，**18 个 PR 更新、12 个 PR 已合并或关闭**，在安全、模块供应链、嵌入式运行时和多入口行为一致性方面均有实质推进。Bug 修复大多已有明确 PR，Shell 配额、Channel Hook、钱包审批、MongoDB 共享识别和画布重试等问题已形成闭环。

项目当前健康度可评为 **良好**，但正式发布前仍有三项集中风险需要处理：

1. **TinySecurity 在桌面登录切换后的 secret-master 解锁阻塞**；
2. **vendor 模块 pin、运行时制品与构建依赖尚未完全一致**；
3. **安全模块不可用时的 fail-closed 与宿主显式控制之间仍需完成设计收敛**。

此外，Memory Queue 并发配置是当前最明确的下一版本功能信号，建议尽快从 Issue 推进到可评审 PR。

</details>

---
*本日报由 [Big Model Radar](https://github.com/96loveslife/big_model_radar) 自动生成。*
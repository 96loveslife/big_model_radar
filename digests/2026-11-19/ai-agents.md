# OpenClaw 生态日报 2026-11-19

> Issues: 496 | PRs: 500 | 覆盖项目: 8 个 | 生成时间: 2026-11-19 06:50 UTC

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

**统计日期：2026-11-19**  
**数据范围：GitHub 过去 24 小时 Issues / PR 更新**  
**项目主页：[github.com/openclaw/openclaw](https://github.com/openclaw/openclaw)**

---

## 1. 今日速览

OpenClaw 过去 24 小时保持极高协作活跃度，共更新 **496 条 Issues**（370 条新开或仍活跃，126 条关闭）和 **500 条 PR**（299 条待合并，201 条合并或关闭），日均吞吐量很高。当前议题主要集中在 **Gateway 生命周期与更新器可靠性、SQLite 状态库并发/膨胀、会话状态一致性与消息丢失、插件热重载、Prompt Cache 失效**等生产级问题。  
当天没有新版本发布；PR 侧已有不少针对会话重试、SQLite 快照释放、共享会话权限边界、插件更新和 UI 兼容性的修复进入待审或待验证阶段。整体属于“高吞吐、高风险并存”：项目推进速度很快，但大量 P0/P1 问题仍集中在升级、状态迁移和会话一致性上，发布健康度暂评为**中等偏低，建议继续观察更新器与会话状态修复的合入情况**。

---

## 3. 项目进展

> 今日无新版本发布，因此本节重点梳理已经合并、关闭或进入维护者审查队列的重要 PR。

### 3.1 会话与模型上下文稳定性

- **重试大历史记录时保留子代理任务**  
  已关闭 PR [#201636](https://github.com/openclaw/openclaw/pull/201636) 修复了历史记录因工具结果过大而截断当前轮请求的问题，避免重试加载历史时丢失发起当前任务的请求。  
  意义：降低重试后任务丢失、超时或上下文断裂的风险。

- **Talk 语音咨询兼容 Claude CLI 与锁定模型环境**  
  PR [#199379](https://github.com/openclaw/openclaw/pull/199379) 等待维护者处理，针对语音咨询在 Claude CLI 或锁定的原生 harness 下因缺少 API key、模型不可选而失败的问题。  
  意义：改善语音功能与不同模型后端的兼容性。

- **代码块和工具输出遵循聊天字号设置**  
  PR [#201686](https://github.com/openclaw/openclaw/pull/201686) 修复 Control UI 中代码块、工具输出和部分详情未应用文本大小偏好的问题。  
  意义：改善移动端和工具密集型会话的可读性。

- **保留超大聊天历史中的渠道消息 ID**  
  PR [#201676](https://github.com/openclaw/openclaw/pull/201676) 修复大消息被历史占位符替换后，客户端失去渠道消息查找键的问题。  
  意义：减少历史记录替换后消息无法定位或去重的问题。

### 3.2 更新器、Gateway 与状态数据库

- **SQLite 快照清理后释放磁盘空间**  
  PR [#201661](https://github.com/openclaw/openclaw/pull/201661) 修复异步 SQLite 检查完成后只删除目录、但仍持有文件描述符，导致 Linux 上空间持续占用的问题。  
  该 PR 仍需 proof，属于 P1。  
  意义：直接对应 [#157712](https://github.com/openclaw/openclaw/issues/157712) 和 [#170496](https://github.com/openclaw/openclaw/issues/170496) 报告的快照复制与磁盘膨胀问题。

- **完成 Git 更新切换，避免错误报告“已是最新”**  
  PR [#201538](https://github.com/openclaw/openclaw/pull/201538) 处理 Git checkout 安装中 release link 已切换、但新 Gateway 尚未启动时，下一次更新误判状态的问题。  
  当前状态为等待作者修改。  
  意义：改善半完成更新后的可恢复性。

- **更新前识别“数据可能受损”标记**  
  PR [#201668](https://github.com/openclaw/openclaw/pull/201668) 尝试在修复或后续升级前读取已记录的数据风险标记，避免对可能受损的状态盲目操作。  
  当前状态为等待作者修改。  
  意义：对应多个更新失败后进入 `state-migrated-no-rollback` 的高风险场景。

- **大历史重载不再吞掉子代理任务**  
  关联 Issue：[#201605](https://github.com/openclaw/openclaw/issues/201605)；修复 PR：[#201636](https://github.com/openclaw/openclaw/pull/201636)。

### 3.3 插件与共享协作安全

- **共享会话不得放宽权限或代为批准命令**  
  PR [#201615](https://github.com/openclaw/openclaw/pull/201615) 针对共享会话中协作者修改权限模式、批准他人命令的安全边界问题。  
  该 PR 被标记为涉及自动化、兼容性和安全边界，当前等待作者修改。  
  意义：这是多用户协作场景下的关键权限隔离修复，优先级较高。

- **插件支持类似版本号的 npm tag 更新**  
  PR [#201678](https://github.com/openclaw/openclaw/pull/201678) 修复插件更新器把 `1.0.0-beta.1` 一类可变 npm tag 错当成精确版本、进而错误触发完整性漂移的问题。  
  当前为 ready for maintainer look。

- **插件页面恢复首访资源预算**  
  PR [#201677](https://github.com/openclaw/openclaw/pull/201677) 修复插件页提前加载 audit tooltip 渲染器，导致首访资源数量超限的问题。

- **插件重载等待期间保存 Agent 不再误报失败**  
  PR [#201680](https://github.com/openclaw/openclaw/pull/201680) 修复 Control UI 在插件重载等待期间保存 Agent 名称、头像或 emoji 时显示红色失败的问题。  
  当前需要复现验证。

### 3.4 跨端体验与发布质量

- **iOS 会话置顶归属登录用户**  
  PR [#199685](https://github.com/openclaw/openclaw/pull/199685) 将会话固定项从共享会话元数据调整为登录用户的个人导航数据，与 Web 行为对齐。  
  当前需要 proof。

- **稳定客户端源码对候选 Gateway 的兼容测试**  
  PR [#201151](https://github.com/openclaw/openclaw/pull/201151) 增加“稳定版客户端源码连接候选 Gateway”的反向兼容测试，补足移动端发布验证链路。

- **新 Gateway 更新提示兼容旧前端页面**  
  PR [#201683](https://github.com/openclaw/openclaw/pull/201683) 修复旧 Control UI 标签页连接新 Gateway 后，更新提示代码已被移除，导致用户无法通过提示触发刷新。

- **SearXNG 快速开始启用 JSON 搜索**  
  PR [#201684](https://github.com/openclaw/openclaw/pull/201684) 修复文档中的 SearXNG 默认配置仅启用 HTML，OpenClaw 搜索时收到 HTTP 403 的问题。

---

## 4. 社区热点

### 4.1 高讨论 Issues

1. **macOS 上 Gateway stop / stop --force 均无法执行** — 37 条评论  
   [#191944](https://github.com/openclaw/openclaw/issues/191944)  
   诉求集中在 macOS 进程祖先检查失败后的可恢复停止方案。目前没有明确 fix PR，且标记为需要维护者审查。

2. **同步持久化与 transcript 维护阻塞 Gateway 事件循环** — 29 条评论  
   [#119720](https://github.com/openclaw/openclaw/issues/119720)  
   这是长期核心稳定性问题。虽然已有部分修复落地，但同步重写和 transcript 维护仍可能在规模场景下阻塞事件循环，影响消息、会话和整体吞吐。

3. **Doctor 的 WAL 发布验证使 11.3 更新处于半完成状态** — 25 条评论  
   [#197083](https://github.com/openclaw/openclaw/issues/197083)  
   用户希望在升级失败时获得明确、可回滚且不会破坏插件状态的结果。当前未标记为已有 fix PR。

4. **Claude CLI 后端重复渲染助手轮次** — 20 条评论  
   [#123792](https://github.com/openclaw/openclaw/issues/123792)  
   Control UI 与 Android App 中同时显示逐块实时输出和拼接后的完整记录，用户希望明确“流式展示”和“最终持久化消息”的边界。

5. **Prompt Cache 始终无法复用** — 19 条评论  
   [#182891](https://github.com/openclaw/openclaw/issues/182891)  
   用户重点关注 envelope 重写、`runtimeContextCarrier` 变化及工具列表变化对缓存前缀稳定性的破坏。该问题直接影响成本和响应延迟。

6. **MEMORY.md / USER.md 被 provenance ratchet 永久排除** — 18 条评论  
   [#153426](https://github.com/openclaw/openclaw/issues/153426)  
   该 P0 问题让核心记忆能力静默失效且无诊断、CLI 或恢复入口，属于高影响会话状态问题。

7. **Windows 插件 source-capture staging 无限复制依赖** — 17 条评论  
   [#162585](https://github.com/openclaw/openclaw/issues/162585)  
   仓库体积从约 290 MB 持续增长到 600 MB 以上，导致 Gateway 无法恢复健康。问题标记为 stale，但仍具有现实生产影响。

8. **Control UI 重启后系统通知挤走最后回答** — 16 条评论  
   [#177094](https://github.com/openclaw/openclaw/issues/177094)  
   反映 WebChat 在实时流、通知镜像和历史恢复之间缺乏稳定的排序协议。

9. **运行在首次 session commit 前失败会遗留 `agent.run.started`** — 13 条评论  
   [#141172](https://github.com/openclaw/openclaw/issues/141172)  
   后续 trajectory flush 会触发外键失败，缺失 `agent.run.finished`，使会话状态难以自愈。

10. **session.maintenance 的存储上限无法约束 thread/channel 条目** — 12 条评论  
    [#112638](https://github.com/openclaw/openclaw/issues/112638)  
    用户期望 `maxEntries` 和 `maxDiskBytes` 是硬限制，但当前特殊会话被完全豁免，配置承诺与实际行为不一致。

### 4.2 高讨论 PR

当天展示的 PR 大多评论数未提供或为 0，但其中以下内容因安全、兼容性和维护成本受到重点关注：

- **共享会话权限隔离**：[#201615](https://github.com/openclaw/openclaw/pull/201615)  
- **SQLite 快照空间释放**：[#201661](https://github.com/openclaw/openclaw/pull/201661)  
- **更新器半完成状态恢复**：[#201538](https://github.com/openclaw/openclaw/pull/201538)  
- **基线证明工作流稳定性**：[#199006](https://github.com/openclaw/openclaw/pull/199006)  
- **iOS 会话固定项归属修正**：[#199685](https://github.com/openclaw/openclaw/pull/199685)

> 数据中多数 PR 没有可见评论数，因此“反应最多”无法仅根据点赞精确排序；上述 PR 以影响范围、评级、风险标记和审查状态作为主要依据。

---

## 5. Bug 与稳定性

### P0 / 发布阻断级

1. **托管更新停滞，Gateway 停止后无法恢复**  
   [#164800](https://github.com/openclaw/openclaw/issues/164800)  
   **状态：开放，无明确 fix PR。**  
   Doctor/config migration 后更新流程不再推进，需要重启或人工介入。

2. **维护命令在 Gateway 停止时发生 livelock**  
   [#198218](https://github.com/openclaw/openclaw/issues/198218)  
   **状态：开放，无明确 fix PR。**  
   `doctor --fix` 和 `update repair` 会持续重新计算未变化的 state DB 哈希。

3. **2026.11.3 → 2026.11.4 更新耗时数小时并因 SQLite lock 失败**  
   [#200289](https://github.com/openclaw/openclaw/issues/200289)  
   **状态：开放，无明确 fix PR。**  
   Gateway 在交接期间不可用，最终需要 SSH 恢复。

4. **MEMORY.md / USER.md 被静默永久排除**  
   [#153426](https://github.com/openclaw/openclaw/issues/153426)  
   **状态：开放，无明确 fix PR。**  
   影响核心记忆注入，属于 P0 和发布阻断级问题。

### P1 / 严重稳定性与数据一致性问题

1. **同步持久化阻塞 Gateway 事件循环**  
   [#119720](https://github.com/openclaw/openclaw/issues/119720)  
   **已有部分修复，但没有完全解决本 Issue。**

2. **外部进程写入 transcript 后，Gateway 追加触发 UNIQUE 冲突**  
   [#199155](https://github.com/openclaw/openclaw/issues/199155)  
   **状态：开放，标记为 queueable-fix，暂无明确关联 PR。**

3. **Codex helper 完成后无法恢复父 Agent**  
   [#196199](https://github.com/openclaw/openclaw/issues/196199)  
   **状态：开放，需要更多信息。**

4. **插件热重载断开频道并丢失入站消息**  
   [#152965](https://github.com/openclaw/openclaw/issues/152965)  
   **状态：开放，无明确 fix PR。**

5. **Gateway drain 等待完整 `TimeoutStopSec`**  
   [#153899](https://github.com/openclaw/openclaw/issues/153899)  
   **状态：开放，无明确 fix PR。**

6. **Matrix 房间在后台任务与入站消息竞争后永久关闭**  
   [#191476](https://github.com/openclaw/openclaw/issues/191476)  
   **状态：开放，无明确 fix PR。**

7. **候选版本 Doctor 因插件迁移冲突阻塞更新**  
   [#200606](https://github.com/openclaw/openclaw/issues/200606)  
   **状态：开放，main 上暂未复现。**

8. **更新后 Gateway 停止，插件数据库迁移未完成且无法回滚**  
   [#194655](https://github.com/openclaw/openclaw/issues/194655)  
   **状态：开放，无明确 fix PR。**

9. **Safari 27.3 的 Control UI 聊天输入框完全缺失**  
   [#195192](https://github.com/openclaw/openclaw/issues/195192)  
   **状态：开放，无明确 fix PR。**

10. **Prompt Cache 跨轮失效**  
    [#198373](https://github.com/openclaw/openclaw/issues/198373)  
    **状态：开放，无明确 fix PR。**  
    assistant tool-call ID 被重新生成，导致 OpenAI-compatible 路由缓存读取降至约 1%–3%。

11. **reasoning-only 重试重复发送已交付回复**  
    [#179003](https://github.com/openclaw/openclaw/issues/179003)  
    **状态：开放，无明确 fix PR。**

### P2 / 重要但影响范围相对受限

- **CLI 后端重复保存助手轮次**：[#123792](https://github.com/openclaw/openclaw/issues/123792)，无明确 fix PR。  
- **Post-install Doctor WAL 校验导致半完成更新**：[#197083](https://github.com/openclaw/openclaw/issues/197083)，无明确 fix PR。  
- **Windows 插件依赖复制无限增长**：[#162585](https://github.com/openclaw/openclaw/issues/162585)，无明确 fix PR。  
- **WebChat 系统通知破坏最终回答位置**：[#177094](https://github.com/openclaw/openclaw/issues/177094)，无明确 fix PR。  
- **session.maintenance 上限失效**：[#112638](https://github.com/openclaw/openclaw/issues/112638)，无明确 fix PR。  
- **Agent 间消息造成工具列表变化与缓存未命中**：[#155868](https://github.com/openclaw/openclaw/issues/155868)，无明确 fix PR。  
- **Slack 出站 `unknown_after_send` 缺少运维 CLI**：[#183048](https://github.com/openclaw/openclaw/issues/183048)，无明确 fix PR。  
- **Home 的 20 条系统事件队列溢出**：[#167854](https://github.com/openclaw/openclaw/issues/167854)，无明确 fix PR。  
- **超大主会话导致 SQLite 快照读取和 compact admission 失败**：[#181084](https://github.com/openclaw/openclaw/issues/181084)，无明确 fix PR。  
- **Telegram 群组裸斜杠命令绕过 `requireMention`**：[#164065](https://github.com/openclaw/openclaw/issues/164065)，有 linked PR 状态但数据未给出具体编号。  
- **Slack Meeting 双向音频拉取超时**：[#177633](https://github.com/openclaw/openclaw/issues/177633)，有 linked PR 状态。  
- **macOS Voice Wake 忽略会话路由**：[#167696](https://github.com/openclaw/openclaw/issues/167696)，有 linked PR 状态。  
- **恢复后的 cron 工具警告导致重复报告**：[#198050](https://github.com/openclaw/openclaw/issues/198050)，无明确 fix PR。  
- **2026.11.5 beta 拒绝退役 heartbeat 配置**：[#200224](https://github.com/openclaw/openclaw/issues/200224)，无明确 fix PR。

---

## 6. 功能请求与路线图信号

### 6.1 可能进入下一版本的高概率方向

1. **运维级恢复命令与可观测性**
   - stranded requester settle wake 的受支持恢复：[#170562](https://github.com/openclaw/openclaw/issues/170562)
   - Slack `unknown_after_send` 检查/结算 CLI：[#183048](https://github.com/openclaw/openclaw/issues/183048)
   - 运行时 skill 使用进入持久审计：[#141004](https://github.com/openclaw/openclaw/pull/141004)

   这些需求共同指向“不能直接改数据库、需要官方恢复和诊断工具”的路线。已有审计 PR [#141004](https://github.com/openclaw/openclaw/pull/141004) 等待维护者，较可能进入后续运维能力迭代。

2. **会话共享与个人状态分离**
   - iOS 固定项归属个人账户已有 PR：[#199685](https://github.com/openclaw/openclaw/pull/199685)
   - Web Agent 菜单支持“作为模板分享”已有 PR：[#201644](https://github.com/openclaw/openclaw/pull/201644)

   方向明确：在增强共享能力的同时，确保个人导航、置顶和元数据不发生跨用户污染。

3. **共享会话的权限与审批边界**
   - PR [#201615](https://github.com/openclaw/openclaw/pull/201615)

   这是安全和多用户协作功能的必要配套。在获得安全审查和兼容性验证前，可能不会立即进入下一版本，但战略优先级较高。

4. **可配置记忆分块**
   - [#179954](https://github.com/openclaw/openclaw/issues/179954)

   已有可复现说明，且 memory-core 已存在 per-entry chunking 能力，实施成本相对可控。但仍标记为 linked PR/open，需确认 PR 是否覆盖完整需求。

5. **Usage 页展示认证 profile**
   - [#169428](https://github.com/openclaw/openclaw/issues/169428)

   `/status` 已展示相关字段，需求较明确，属于低风险 UI 增强，可能较快纳入。

### 6.2 尚不明确的产品决策

- **插件在工具结果之后扩展请求内容的能力**：[#164355](https://github.com/openclaw/openclaw/issues/164355) 已关闭，但摘要显示存在明确的插件扩展点缺口；是否重新设计需看产品方向。
- **Dreaming 失败任务自动重试语义**：[#143206](https://github.com/openclaw/openclaw/issues/143206)，需要确定重试策略、幂等性和用户可见状态。
- **Signal 引用式提及支持**：[#161781](https://github.com/openclaw/openclaw/issues/161781)，需要平台语义和群组策略产品决策。
- **Voice Wake 的会话路由统一**：[#167696](https://github.com/openclaw/openclaw/issues/167696)，已有 linked PR，但尚需真机复现。

---

## 7. 用户反馈摘要

### 7.1 真实生产痛点

- **升级过程带来的风险高于升级本身**  
  用户在 [#164800](https://github.com/openclaw/openclaw/issues/164800)、[#198218](https://github.com/openclaw/openclaw/issues/198218)、[#200289](https://github.com/openclaw/openclaw/issues/200289)、[#194655](https://github.com/openclaw/openclaw/issues/194655) 中反复描述 Gateway 停止、SQLite 锁、迁移未完成和人工恢复。部分事故需要 SSH 介入，说明更新器的失败原子性和可恢复性仍未达到生产预期。

- **状态库增长与复制正在影响真实机器**  
  [#157712](https://github.com/openclaw/openclaw/issues/157712) 报告 25 分钟产生约 23 GB 缓存；[#170496](https://github.com/openclaw/openclaw/issues/170496) 报告每个 cron tick 都复制完整 DB；[#162585](https://github.com/openclaw/openclaw/issues/162585) 报告 Windows 插件目录持续增长到 600 MB 以上。这些并非边缘环境，而是长期运行、多 Agent、插件和定时任务场景下的共性瓶颈。

- **会话状态丢失或错乱直接影响生产消息**  
  用户在 [#153426](https://github.com/openclaw/openclaw/issues/153426)、[#199155](https://github.com/openclaw/openclaw/issues/199155)、[#179003](https://github.com/openclaw/openclaw/issues/179003)、[#191476](https://github.com/openclaw/openclaw/issues/191476) 中反映记忆消失、消息重复、房间关闭和写入冲突。共同诉求是：宁可显式报错，也不要静默丢消息、重复发送或永久禁用核心能力。

- **长会话和多 Agent 是主要压力场景**  
  [#181084](https://github.com/openclaw/openclaw/issues/181084) 的主会话达到 35k 事件、228 MB；[#112638](https://github.com/openclaw/openclaw/issues/112638) 指出 thread/channel 绕过维护上限；[#155868](https://github.com/openclaw/openclaw/issues/155868) 显示 Agent 间消息改变工具集合并击穿缓存。实际用户需要的是可预测的资源上限和稳定缓存前缀。

- **多渠道和多浏览器的兼容性仍是高频摩擦点**  
  Telegram、Matrix、Signal、Slack、Safari、Dia、WSL2、macOS、Windows 均出现独立问题，说明跨渠道适配虽然覆盖面广，但回归矩阵和错误语义仍需加强。

- **模型缓存成本问题受到高度关注**  
  [#182891](https://github.com/openclaw/openclaw/issues/182891) 与 [#198373](https://github.com/openclaw/openclaw/issues/198373) 都显示缓存命中率极低。对于长时间 Agent 工作流，用户不仅在意响应速度，也直接在意 token 成本。

### 7.2 满意度与积极信号

- **插件和 Agent 生态功能丰富**  
  多个用户在 issues 中已经使用 Slack huddle、Signal、Matrix、Telegram、Voice Wake、Codex helper、memory-core、Dreaming、browser capture 等高级能力，说明项目的功能覆盖和可扩展性具有较强吸引力。

- **跨端体验持续改善**  
  Web、iOS、Android、CLI 后端均有新修复，尤其 iOS 个人置顶、Web UI 字号和更新提示兼容，说明团队在从“功能可用”向“跨端体验一致”推进。

- **维护与自动化投入明显增加**  
  [#201151](https://github.com/openclaw/openclaw/pull/201151)、[#201670](https://github.com/openclaw/openclaw/pull/201670)、[#201675](https://github.com/openclaw/openclaw/pull/201675)、[#199006](https://github.com/openclaw/openclaw/pull/199006) 等 PR 集中优化发布证明、依赖准入、CI 资源和基线工作流，反映项目已把“发布质量体系”作为独立工程方向建设。

---

## 8. 待处理积压

### 8.1 高优先级长期积压

1. **同步持久化阻塞事件循环**  
   [#119720](https://github.com/openclaw/openclaw/issues/119720)  
   创建于 2026-08-05，至今仍开放并持续吸收讨论。虽然有局部修复，但核心扩展性问题尚未关闭。

2. **Claude CLI 重复渲染/重复持久化**  
   [#123792](https://github.com/openclaw/openclaw/issues/123792)  
   创建于 2026-08-14，涉及 WebChat、Android 和 transcript 数据一致性，仍无明确修复 PR。

3. **session.maintenance 配置上限失效**  
   [#112638](https://github.com/openclaw/openclaw/issues/112638)  
   创建于 2026-07-22，属于长期资源治理缺陷。

4. **插件热重载导致频道断开和消息丢失**  
   [#152965](https://github.com/openclaw/openclaw/issues/152965)  
   创建于 2026-09-19，P1、影响 message loss，但长期没有明确修复 PR。

5. **Gateway drain 卡满停止超时窗口**  
   [#153899](https://github.com/openclaw/openclaw/issues/153899)  
   创建于 2026-09-20，影响每次显式重启或发布交接。

6. **MEMORY.md / USER.md 静默失效**  
   [#153426](https://github.com/openclaw/openclaw/issues/153426)  
   创建于 2026-09-20，虽非最新 Issue，但 P0、影响核心记忆和会话状态，应列为发布前优先处理项。

7. **Windows 插件 staging 无限增长**  
   [#162585](https://github.com/openclaw/openclaw/issues/162585)  
   创建于 2026-10-01，已标记 stale。维护风险不应因 stale 标签而降低。

8. **首轮提交前失败留下半开运行记录**  
   [#141172](https://github.com/openclaw/openclaw/issues/141172)  
   创建于 2026-09-07，涉及状态库 FK 失败和缺失完成事件，长期缺乏自愈路径。

### 8.2 等待维护者或作者的 PR

- **共享会话安全边界**：[#201615](https://github.com/openclaw/openclaw/pull/201615)，等待作者修改。  
- **Git 更新半切换恢复**：[#201538](https://github.com/openclaw/openclaw/pull/201538)，等待作者修改。  
- **更新前数据风险标记处理**：[#201668](https://github.com/openclaw/openclaw/pull/201668)，等待作者修改。  
- **稳定客户端对候选 Gateway 的兼容测试**：[#201151](https://github.com/openclaw/openclaw/pull/201151)，ready for maintainer look。  
- **SQLite 快照空间释放**：[#201661](https://github.com/openclaw/openclaw/pull/201661)，需要 proof。  
- **iOS 个人会话固定项**：[#199685](https://github.com/openclaw/openclaw/pull/199685)，需要 proof。  
- **运行时 skill 使用审计**：[#141004](https://github.com/openclaw/openclaw/pull/141004)，等待维护者。  
- **基线证明工作流稳定化**：[#199006](https://github.com/openclaw/openclaw/pull/199006)，等待作者修改。

---

## 今日结论

OpenClaw 的开发吞吐量极高，单日处理近千条 Issue/PR 更新，功能、渠道、插件和发布工具链都在快速扩展。但项目当前最大的工程风险不是“缺少功能”，而是 **状态库、升级流程和会话生命周期在生产压力下的一致性不足**。

建议维护者下一阶段优先关注：

1. **Gateway/Doctor/更新器的原子性、可恢复性和停止/重启流程**；  
2. **SQLite 快照、锁竞争、磁盘增长和长会话维护上限**；  
3. **跨进程 transcript 写入、Agent 间唤醒和消息去重**；  
4. **Prompt Cache 前缀稳定性**；  
5. **共享会话的权限隔离与个人状态隔离**；  
6. **为长期 P0/P1 Issue 明确 fix PR、维护者责任人与验证环境**。

在上述高风险问题关闭前，项目整体可评价为：**活跃度高、创新能力强、交付速度很快，但生产稳定性与状态一致性仍是下一版本的主要质量门槛。**

---

## 横向生态对比

# 个人 AI 助手 / 自主智能体开源生态横向分析

**分析日期：2026-11-19｜样本：OpenClaw、NanoBot、PicoClaw、IronClaw、LobsterAI、QwenPaw、Hermes Agent、OpenHuman**

## 1. 生态全景

个人 AI 助手与自主智能体生态正从“聊天壳 + 模型调用”快速转向“**可执行、可扩展、可长期运行**”的平台形态，插件化、MCP、技能系统、多渠道接入和跨端桌面体验成为共同主线。  
但高速开发也暴露出同一类瓶颈：**会话状态一致性、升级与恢复、SQLite/持久化并发、资源上限、权限隔离和失败可观测性**，明显比单纯增加功能更制约生产可用性。

生态成熟度分化显著：OpenClaw、Hermes Agent、QwenPaw 处于高吞吐快速迭代期；LobsterAI 更偏桌面工作流与交付体验；NanoBot 强调轻量 WebUI 与 MCP 扩展；PicoClaw 处于上游同步和历史收口阶段；OpenHuman 则面临 Linux 兼容性和首次体验缺口。  
从社区信号看，2026 年下半年的竞争重点已不再是“模型能否调用工具”，而是：**工具调用是否安全、状态是否可信、任务是否可恢复、跨渠道是否连续**。

---

## 2. 各项目活跃度对比

> Issue、PR 为过去 24 小时更新量；“待处理”按摘要中的待合并或开放状态统计。

| 项目 | Issues | PR | Release | 主要活跃方向 | 健康度 |
|---|---:|---:|---|---|---|
| **OpenClaw** | **496** | **500** | 无 | 更新器、Gateway、SQLite、会话一致性、插件热重载 | **活跃度最高；生产稳定性中等偏低** |
| **Hermes Agent** | **50** | **50** | 1 个 canary | Desktop 会话、Gateway、跨平台部署、安全隔离 | **中高活跃、偏承压** |
| **QwenPaw** | **18** | **26** | **v2.3.0.post1** | 插件化、SDK、安全治理、渠道与移动端 | **活跃但风险偏高** |
| **NanoBot** | **6** | **29** | 无 | WebUI、图片回放、队列反馈、MCP 隔离 | **良好偏活跃** |
| **LobsterAI** | **1** | **11** | 无 | Cowork、桌面伴侣、模型选择、产物预览 | **良好偏高** |
| **PicoClaw** | **1** | **4** | 无 | 上游同步、WebSocket 认证、历史修复合并 | **中等偏低，维护收口中** |
| **OpenHuman** | **3** | **1** | 无 | Linux 兼容、onboarding、UI 样式 | **中等偏低，闭环不足** |
| **IronClaw** | 0 | 0 | 无 | 无活动 | **暂无当日信号** |

### 活跃度分层

- **超高速迭代层**：OpenClaw  
  单日近千条 Issue/PR 更新，远高于其他项目，功能覆盖和生态规模领先，但发布与状态治理压力最大。
- **高速开发层**：Hermes Agent、QwenPaw  
  Hermes 的修复响应积极，但待审 PR 和长期状态类缺陷较多；QwenPaw 插件化推进快，却出现补丁版本后的渠道与移动端回归。
- **稳定开发层**：NanoBot、LobsterAI  
  NanoBot 以 29 条 PR 为主，重点改善会话回放、WebUI 可理解性和安全边界；LobsterAI 的桌面交付与 Cowork 工作流持续完善。
- **维护收口层**：PicoClaw  
  今日主要是约 1,095 个上游提交同步及历史修复批量关闭，没有新功能和 Release。
- **响应薄弱层**：OpenHuman  
  3 个新 Issue 均无评论、无修复 PR，唯一 CI 优化 PR 关闭未合。
- **静默层**：IronClaw  
  过去 24 小时无活动，不能据此判断长期健康度。

---

## 3. OpenClaw 在生态中的定位

### 3.1 优势

1. **社区与协作规模显著领先**  
   OpenClaw 单日更新 496 条 Issues、500 条 PR，约为 Hermes 的 10 倍、NanoBot 的 17–83 倍。其生态已形成明显的多角色、多渠道、多插件协作网络。

2. **功能覆盖最广**  
   项目同时覆盖 Gateway、插件、工具调用、MCP、跨渠道消息、记忆、语音、共享会话、移动端、桌面 UI 和自动更新，是样本中最接近“个人 Agent 操作系统”的项目。

3. **生产化意识较强**  
   虽然问题很多，但大量工作已转向状态迁移、快照释放、发布证明、候选版本兼容、更新回滚和长期 Issue 治理，说明其开发重点已由功能扩张进入工程化收口。

4. **生态反馈规模能反哺架构判断**  
   Telegram、Matrix、Slack、Signal、Voice Wake、Codex helper、memory-core、Dreaming 等真实场景形成广泛的交叉验证。

### 3.2 与同类的主要差异

- **相比 NanoBot**：OpenClaw 规模和功能深度显著更大，但复杂度、状态一致性和升级风险也更高；NanoBot 更轻量，WebUI 和 MCP 路线更聚焦。
- **相比 QwenPaw**：两者都在插件化，但 QwenPaw 强调 SDK 1.1、语义主题 Token 和安全审批体系；OpenClaw 更强调多渠道生产运行和复杂生命周期。
- **相比 Hermes Agent**：Hermes 更突出 Desktop、Bot Chat、多 profile 与远程后端；OpenClaw 更像跨渠道、多会话、插件驱动的 Agent 平台。
- **相比 LobsterAI**：LobsterAI 强在桌面工作流、Cowork、文件产物和交付；OpenClaw 强在底层 Gateway、插件和渠道编排。
- **相比 PicoClaw**：PicoClaw 更像边缘端、轻量部署取向；OpenClaw 更偏全功能个人 Agent 基础设施。

### 3.3 社区规模判断

按当日公开活动量估算，OpenClaw 的社区协作规模至少领先一个数量级。其优势不只是 Issue 多，更在于：

- 真实渠道和生产部署反馈密集；
- 插件、记忆、语音、自动化等外围生态丰富；
- 多个问题可由不同贡献者并行提出独立修复 PR。

代价是维护复杂度和高吞吐带来的回归风险。OpenClaw 当前的核心挑战不是需求验证，而是**把庞大的社区产出可靠地收敛成稳定版本**。

---

## 4. 共同关注的技术方向

| 技术方向 | 涉及项目 | 共同诉求 |
|---|---|---|
| **会话与持久化一致性** | OpenClaw、NanoBot、Hermes Agent、QwenPaw | 防止消息重复、丢失、错序；确保 transcript、流式输出、完成事件与数据库状态一致 |
| **升级、迁移与可恢复性** | OpenClaw、Hermes Agent、QwenPaw、PicoClaw、LobsterAI | 更新失败应可回滚或人工恢复；迁移不应静默破坏插件、凭据和渠道配置 |
| **插件化与 MCP 隔离** | OpenClaw、NanoBot、QwenPaw、Hermes Agent、LobsterAI | 第三方 Agent、MCP、技能成为扩展核心；启动失败、超时和重试不能拖垮主流程 |
| **权限隔离与安全审批** | OpenClaw、QwenPaw、Hermes Agent、PicoClaw、LobsterAI | 共享会话、Shell、HTTP 写入、文件上传、MCP stdio 和外部 URL 必须遵循最小权限、审批和 fail-closed |
| **跨渠道与跨端连续性** | OpenClaw、NanoBot、QwenPaw、Hermes Agent、LobsterAI | Telegram、Slack、Matrix、WebUI、Desktop 之间保持上下文，并明确消息是否已被消费 |
| **长期运行资源治理** | OpenClaw、NanoBot、Hermes Agent、QwenPaw | 控制 SQLite 膨胀、快照复制、长会话内存、后台队列和历史数据增长 |
| **可观测性与显式失败** | OpenClaw、QwenPaw、Hermes Agent、NanoBot | 队列、计划任务、长工具调用不能静默；失败需局部化、可诊断、可恢复 |
| **多模型与多供应商兼容** | OpenClaw、NanoBot、Hermes Agent、LobsterAI、QwenPaw | 正确处理 token 预算、模型选择、缓存前缀、fallback、供应商配额及模型退役 |
| **桌面端体验成熟化** | LobsterAI、Hermes Agent、QwenPaw、OpenHuman、PicoClaw | 窄屏适配、首次引导、文件预览、全屏菜单、Windows/macOS/Linux 兼容成为实际交付门槛 |

### 值得注意的共性缺口

多个项目都出现了“**表面成功、实际未完成**”的问题：

- OpenClaw：更新器误报已是最新、Git checkout 半切换；
- QwenPaw：渠道配置重载后静默失效、任务完成后继续调用工具；
- Hermes Agent：模型切换先报成功、实际仍运行旧 provider，完成通知可能为空；
- NanoBot：重连后仍显示 Agent 运行中；
- LobsterAI：执行模式保存后实际被读取逻辑覆盖。

这表明行业正在从“成功/失败二态”转向需要更严格的**提交、持久化、展示、确认四阶段状态协议**。

---

## 5. 差异化定位分析

| 项目 | 功能侧重 | 目标用户 | 技术架构与生态取向 |
|---|---|---|---|
| **OpenClaw** | Gateway、多渠道、插件、记忆、自动化、移动/桌面控制 | 高级个人用户、Agent 开发者、长期部署者 | 高度平台化；多 Gateway、插件热重载、状态迁移和跨端渠道构成核心 |
| **NanoBot** | 轻量 Agent、WebUI、跨渠道续接、MCP 扩展 | 希望快速搭建个人助手的开发者 | 相对轻量；Gateway、Agent Loop 和 WebUI 分离，重视启动与重连体验 |
| **PicoClaw** | 轻量/边缘端 Agent、渠道接入、工具执行 | 设备端、低资源或定制部署用户 | Go 生态、边缘导向；强调上游同步、定制迁移与轻量运行时 |
| **LobsterAI** | Cowork、桌面伴侣、模型目录、文件与产物交付 | 办公、内容生产、本地文件工作流用户 | 桌面应用与工作流导向；强化 OpenClaw 执行模式、沙箱、交付路径和预览 |
| **QwenPaw** | 插件 SDK、第三方 Agent、渠道、安全治理 | 插件开发者、企业及多 Agent 用户 | 核心瘦身 + 插件化；通过 SDK、生命周期和语义主题构建扩展生态 |
| **Hermes Agent** | Desktop、Bot Chat、Kanban、多 profile、远程后端 | 高级用户、自动化团队、多 Agent 协作 | Gateway/Desktop/Worker 协同；强调远程部署、profile 隔离和 A2A 协作 |
| **OpenHuman** | 数字人或个人桌面助手、聊天与本地交互 | 桌面端个人用户 | 客户端优先；当前主要瓶颈在平台兼容、onboarding 和 UI 质量 |
| **IronClaw** | 今日无足够信息 | 暂无法判断 | 缺乏当日数据，不宜推断其成熟度 |

### 关键差异归纳

1. **平台型 vs 产品型**  
   OpenClaw、QwenPaw 更像 Agent 平台；LobsterAI、OpenHuman 更偏终端产品；Hermes 处于二者之间。

2. **轻量快速集成 vs 复杂长期运行**  
   NanoBot、PicoClaw 更强调轻量；OpenClaw、QwenPaw、Hermes 的状态空间和插件生命周期更复杂。

3. **代码执行安全模型不同**  
   OpenClaw 关注共享会话权限边界；QwenPaw 强调 Shell/网络写操作审批；PicoClaw 关注审批 Hook fail-closed；LobsterAI 聚焦 MCP 命令和 URL 边界。

4. **桌面交付路线不同**  
   LobsterAI 聚焦文件和办公产物，Hermes 聚焦 Desktop 会话与远程部署，OpenHuman 聚焦原生桌面体验，QwenPaw 当前移动端 Console 仍是短板。

---

## 6. 社区热度与成熟度

### 第一层：高吞吐、高复杂度平台

- **OpenClaw**  
  社区规模和功能覆盖最强，需求验证充分；但会话、数据库、更新器和共享权限问题密集，当前属于“高速扩张后的质量收敛前夜”。
- **Hermes Agent**  
  Issue/PR 数量高，修复响应积极，但 43 个待合并 PR 与 44 个活跃 Issue 显示审查和回归压力较大。
- **QwenPaw**  
  有明确 Release，路线最清晰，但插件化大 PR 尚未完全收敛，且最新补丁版本出现渠道和移动端回归。

### 第二层：聚焦型、持续打磨产品

- **NanoBot**  
  PR 密度高，WebUI、会话回放、图片附件、队列状态和 MCP 隔离都直接指向可用性；需关注 SSRF 与评审积压。
- **LobsterAI**  
  产出稳定且以桌面工作流见长；安全 PR 长期开放、缺少 Release 说明是主要扣分项。

### 第三层：维护收敛或响应不足

- **PicoClaw**  
  已推进大规模同步和历史修复清理，但安全 Issue 以 stale 关闭、PR 是否真正进入主线不透明。
- **OpenHuman**  
  问题反馈真实但没有形成响应闭环，Linux 启动失败是当前最大风险。
- **IronClaw**  
  无当日活动，无法评估社区或成熟度；应避免把“静默”误判为“稳定”。

### 成熟度判断

- **产品成熟度最高**：LobsterAI  
  桌面交付、文件预览、模型选择、执行模式等关键体验较完整。
- **生态成熟度最高**：OpenClaw  
  功能、渠道和社区规模领先，但可靠性债务最高。
- **架构方向最明确**：QwenPaw  
  “轻核心 + 插件 SDK”路线清晰，但迁移完成度和兼容性仍需验证。
- **增长空间较大**：Hermes Agent  
  多 Bot、远程后端、Desktop 协作具备潜力，关键是收紧状态一致性和安全隔离。
- **轻量化方向最清晰**：NanoBot、PicoClaw  
  NanoBot 迭代更活跃；PicoClaw 更偏边缘和上游对齐。

---

## 7. 值得关注的趋势信号

### 7.1 Agent 产品的核心竞争力正在转向“状态可信度”

用户越来越关注：

- 消息是否真正发送、持久化和展示；
- 模型切换是否真实生效；
- 工具调用是否被批准、执行了哪些副作用；
- 任务失败后能否局部恢复，而非整轮报废。

**开发启示：** 应把事件模型设计为“接收 → 排队 → 执行 → 持久化 → 完成/失败 → 展示”，而不是仅发送一个完成事件。

### 7.2 插件化正在成为默认架构，但权限模型必须同步成熟

QwenPaw、OpenClaw、Hermes、NanoBot、LobsterAI 均在推进插件或 MCP。下一阶段竞争点将从“能否加载插件”转向：

- 插件权限最小化；
- 启动隔离和超时；
- 生命周期与版本兼容；
- 插件失败不能拖垮宿主；
- 配置和凭据按工作区、Agent、渠道隔离。

### 7.3 安全审批正在从 UI 功能变成运行时不变量

多个项目同时暴露 Shell、HTTP、文件上传、MCP、共享会话和外部 URL 风险。趋势是：

- 默认拒绝高副作用操作；
- 审批失败必须 fail-closed；
- 审批记录进入持久审计；
- 自动模式也要区分读写权限；
- 权限不能因重载、迁移或多用户协作被放宽。

### 7.4 长期运行能力成为 Agent 与普通聊天机器人的分水岭

SQLite 膨胀、快照复制、长会话压缩、无界队列、后台任务不可见、渠道路由静默死亡，都说明真正可部署的 Agent 必须具备：

- 硬资源上限；
- 数据保留策略；
- 异步持久化；
- 有界队列；
- 心跳与看门狗；
- 可恢复状态机和可观测指标。

### 7.5 跨渠道连续性是高频刚需，但权限模型仍滞后

NanoBot、Telegram、Slack、Matrix、Signal、微信、QQ 等渠道不断出现会话续接问题。用户希望在不同入口继续同一任务，但系统需要同步解决：

- 身份映射；
- 回发目标；
- 权限继承；
- 并发写入；
- 重复消息去重；
- 渠道故障告警。

### 7.6 “小版本发布”不等于升级稳定

QwenPaw 的补丁版本出现窄屏裁切和渠道不可用，说明插件化、配置迁移后的发布验证必须覆盖：

- 移动端视口；
- 各渠道启停；
- 插件加载和生命周期；
- 旧配置迁移；
- Safari/Windows/macOS/Linux 核心路径。

### 7.7 对开发者的直接参考

1. **优先建设状态机与幂等语义**，不要只实现工具调用。  
2. **将权限检查放在执行层**，避免只靠 UI 或前置校验。  
3. **为长会话、数据库和队列设定可验证的硬上限**。  
4. **把跨端与跨渠道测试纳入发布门禁**。  
5. **插件启动必须隔离、限时、可取消、不可污染主状态**。  
6. **每个“成功”状态都应以持久化完成和用户可见结果为准**。  
7. **安全修复应提供明确修复提交、受影响版本和升级说明**，避免 Issue 仅以 stale 或无关联 PR 关闭。

---

## 综合结论

该生态已经进入“**平台化和工程化并行竞争**”阶段。OpenClaw 以最大社区规模和最广功能覆盖占据平台中心位置；QwenPaw 以插件 SDK 推进生态标准化；Hermes Agent 聚焦 Desktop、多 profile 和 Agent 协作；NanoBot 保持轻量 WebUI/MCP 路线；LobsterAI 在桌面办公与产物交付方面产品化较强；PicoClaw 正进行上游对齐和历史收口；OpenHuman 的主要任务是先解决兼容性阻断。

未来一至两个版本的关键，不再是“谁的插件和渠道更多”，而是：

> **谁能让 Agent 在长期运行、失败恢复、权限隔离和跨端连续场景下保持状态可信。**

建议技术决策者优先关注各项目的**持久化架构、更新原子性、插件隔离、审批层、资源上限和端到端回归体系**；这些能力将比新增一个 UI 入口或接入一个模型，更直接决定个人 AI 助手能否从演示型工具进入可信的个人 Agent 基础设施。

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目动态日报

**统计日期：2026-11-19**  
**数据范围：过去 24 小时**  
**项目：** [HKUDS/nanobot](https://github.com/HKUDS/nanobot)

## 1. 今日速览

过去 24 小时共更新 **6 条 Issues、29 条 PR**，其中 **15 条 PR 待合并、14 条已合并或关闭**，项目开发活跃度较高，主要集中在 **WebUI 交互与会话恢复、图片与历史上下文处理、安全加固、MCP 隔离** 等方向。  
Issues 方面新增或活跃 **3 条**、关闭 **3 条**，Bug 修复与安全治理并行推进，但仍有标题生成、SSRF 地址拦截范围等问题待处理。  
今日没有发布新版本；当前 PR 数量明显高于可用 Issues 样本，说明项目正处于密集开发与评审阶段，但合并和回归验证压力较高。  
综合评估：**项目健康度良好，但稳定性债务和评审积压值得关注**。

---

## 3. 项目进展

> 今日无新版本发布，因此本节重点汇总已合并、关闭或已形成明确修复方案的重要 PR。

### 3.1 会话历史与工具调用回放修复

- **PR #6717**（已关闭）：修复历史回放时将普通助手文本误判为工具调用并移除的问题。  
  该修复直接对应 [#6704](https://github.com/HKUDS/nanobot/issues/6704)，确保以文本形式生成的 `message(...)` 通知草稿可以在下一轮被原样重放。  
  [查看 PR #6717](https://github.com/HKUDS/nanobot/pull/6717)

- **PR #6720**（待合并）：在后续对话中重新播放用户上传的图片附件，而不是只保留本地路径标记。  
  这有助于解决进程重启后模型失去图片上下文、无法继续回答附件相关追问的问题。  
  [查看 PR #6720](https://github.com/HKUDS/nanobot/pull/6720)

- **PR #6721**（待合并）：为 `model_request.started` 事件增加有序的 `response_input_ids`，明确一次模型请求实际消费了哪些排队输入。  
  这是队列状态可视化和精确追踪的基础能力。  
  [查看 PR #6721](https://github.com/HKUDS/nanobot/pull/6721)

### 3.2 WebUI 队列反馈与渠道会话续接

- **PR #6719**（待合并）：为已被 Gateway 接收但尚未被 Agent 处理的排队消息增加动态边框提示。  
  它解决了“消息已送达，但 Agent 尚未开始处理”状态不透明的问题。  
  [查看 PR #6719](https://github.com/HKUDS/nanobot/pull/6719)

- **PR #6714**（待合并）：允许用户从 WebUI 侧栏继续 Telegram 等外部渠道中的既有会话。  
  此举可减少跨渠道续接时的上下文割裂，但需要继续关注向原渠道回发消息时的权限和交互边界。  
  [查看 PR #6714](https://github.com/HKUDS/nanobot/pull/6714)

### 3.3 WebUI 启动、重连与性能优化

- **PR #6708**（已关闭）：尝试批处理启动恢复，并在 React 加载前启动认证，以缩短 WebUI 首次可用时间。  
  由于混合导航场景下 Windows 新建聊天命令确认变慢，该方案被拆分评审。  
  [查看 PR #6708](https://github.com/HKUDS/nanobot/pull/6708)

- **PR #6712**（已关闭）：在保留恢复批处理优化的同时，恢复原有启动流程，修复潜在回归。  
  [查看 PR #6712](https://github.com/HKUDS/nanobot/pull/6712)

- **PR #6713**（待合并）：拆分认证提前启动与延迟导入 launcher 的性能优化，便于独立验证和降低 Windows 启动延迟。  
  [查看 PR #6713](https://github.com/HKUDS/nanobot/pull/6713)

- **PR #6715**（待合并）：重连时基于 Gateway 当前运行状态修复“Agent 仍显示运行中”的状态。  
  该方案不依赖浏览器重新读取完整历史，可改善丢失终止帧或历史读取失败后的恢复能力。  
  [查看 PR #6715](https://github.com/HKUDS/nanobot/pull/6715)

- **PR #6723**（待合并）：对支持撤销的话题删除操作取消通用确认框，改为显示 Undo 提示并在提示期结束后执行删除。  
  移动端会主动收起侧栏，避免遮挡撤销入口；绑定自动化的主题仍保留确认流程。  
  [查看 PR #6723](https://github.com/HKUDS/nanobot/pull/6723)

- **PR #6722**（待合并）：调整 Tooltip 和文件上下文菜单的动画锚点，并改善模型预设选择器的翻转定位。  
  [查看 PR #6722](https://github.com/HKUDS/nanobot/pull/6722)

### 3.4 安全与网络加固

- **PR #6716**（待合并）：在 DNS 解析前拒绝包含控制字符或空白字符的非法主机名，避免异常地址进入解析流程。  
  该 PR 与仍然开放的 SSRF 网络段覆盖问题互补，但尚不能单独解决全部内网与特殊地址绕过风险。  
  [查看 PR #6716](https://github.com/HKUDS/nanobot/pull/6716)

- **PR #6682**（已关闭）：支持在配置公开 WebSocket URL 时使用 SSH 连接，兼容 HTTPS 反向代理场景；Gateway 仍通过本地 HTTP 回环地址连接。  
  [查看 PR #6682](https://github.com/HKUDS/nanobot/pull/6682)

### 3.5 MCP 与技能执行能力

- **PR #6680**（待合并）：隔离 MCP 服务启动和重试流程，避免慢响应或不可用的 MCP Server 阻塞普通聊天及其他健康工具。  
  超过 10 秒会报告启动缓慢，超过 60 秒取消未完成启动；本轮新就绪的工具将在下一次模型请求时可用。  
  [查看 PR #6680](https://github.com/HKUDS/nanobot/pull/6680)

- **PR #5405**（待合并）：支持技能仅由用户手动调用，通过 `disable-model-invocation: true` 避免模型自动触发部署、发布等高副作用技能。  
  这是面向生产安全的重要能力，但 PR 创建时间较长，需确认近期维护意愿。  
  [查看 PR #5405](https://github.com/HKUDS/nanobot/pull/5405)

### 3.6 内部架构与测试保障

- **PR #6686**（待合并）：重构 Gateway 启动路径，并分离运行时职责。  
  目标是统一前台、后台管理和 updater 启动方式，同时抽离健康检查与定时任务策略；当前存在合并冲突。  
  [查看 PR #6686](https://github.com/HKUDS/nanobot/pull/6686)

- **PR #6194**（待合并）：调整 CI，使持久化投递与关闭流程测试能够正常结束，降低测试挂起风险。  
  [查看 PR #6194](https://github.com/HKUDS/nanobot/pull/6194)

---

## 4. 社区热点

> 给定数据中，Issues/PR 的评论数字段均为 `0` 或 `undefined`，无法按评论数进行可靠排名。因此以下按 **Issue 评论数、更新活跃度和影响范围** 排序。

### 4.1 [#6704：草拟的通知内容在下一轮对话中消失](https://github.com/HKUDS/nanobot/issues/6704)

- 状态：**已关闭**
- 评论：**1**
- 关联修复：[PR #6717](https://github.com/HKUDS/nanobot/pull/6717)

**核心诉求：** 用户让 Agent 生成 Python `message(...)` 调用格式的欢迎通知，生成结果在下一轮追问“重复刚才的草稿”时发生变化，附件或文具清单等细节无法稳定复现。

**背后诉求：** 工具式输出和普通助手文本必须能被可靠地区分、存储并原样回放。该问题关闭且已有明确修复 PR，属于今日闭环质量较高的问题。

### 4.2 [#6718：Kimi K3.1 Pro 下 WebUI 自动标题生成失败](https://github.com/HKUDS/nanobot/issues/6718)

- 状态：**开放**
- 评论：**1**
- 暂无明确关联 PR

**核心诉求：** 主回复能够成功生成，但自动主题标题始终停留在 “Untitled”；标题调用固定在 96 token 后以 `finish_reason=length` 结束。

**背后诉求：** 不同模型的 token 行为差异不能通过固定输出预算简单处理。标题生成应考虑模型兼容性、预算协商或截断兜底。

### 4.3 [#6649：Dream 只能看到 checkpoint 的前 1000 个字符](https://github.com/HKUDS/nanobot/issues/6649)

- 状态：**已关闭**
- 评论：**2**
- 暂无可见关联 PR

**核心诉求：** 自 [#5610](https://github.com/HKUDS/nanobot/issues/5610) 起，checkpoint 被累积写入 `memory/history.jsonl`，但 `build_dream_prompt` 仍只保留每条记录前 1000 字符，导致后半段内容永远无法进入 Dream，且 cursor 仍继续前移。

**背后诉求：** 记忆压缩、摘要生成与游标推进必须采用一致的边界语义，避免“内容被跳过但游标已越过”的静默数据丢失。

### 4.4 [#6690：SSRF 黑名单遗漏特殊用途地址范围](https://github.com/HKUDS/nanobot/issues/6690)

- 状态：**开放**
- 评论：**1**
- 相关修复：[PR #6716](https://github.com/HKUDS/nanobot/pull/6716)

**核心诉求：** `_BLOCKED_NETWORKS` 未覆盖 IPv4 multicast、reserved、benchmarking、documentation/test-net 等网段。

**背后诉求：** 网络访问防护需要从简单黑名单升级为更完整的安全边界，并在 DNS 解析前后分别执行规范化与校验。

### 4.5 [#6705：AI/ML API 官方托管 MCP Server 接入 NanoBot](https://github.com/HKUDS/nanobot/issues/6705)

- 状态：**开放**
- 评论：**0**

**核心诉求：** 请求将 AI/ML API 的官方托管 MCP Server 加入 MCP 预设，用户无需手动填写 URL。

**背后诉求：** NanoBot 正从单一客户端向 MCP 集成平台发展，预设目录、认证方式和托管服务兼容性将成为生态扩张重点。

---

## 5. Bug 与稳定性

### 严重

#### 1. SSRF 防护覆盖不完整

- Issue：[#6690](https://github.com/HKUDS/nanobot/issues/6690)
- 当前状态：**开放**
- 已有关联 PR：[PR #6716](https://github.com/HKUDS/nanobot/pull/6716)，但主要处理非法主机名，并未完整覆盖 Issue 指出的全部特殊用途网段。

**风险：** 若 NanoBot 可访问内网、云元数据地址或特殊用途网段，攻击者可能借助恶意 URL 探测或访问内部服务。该问题涉及网络安全边界，应优先补齐地址分类和回归测试。

### 较高

#### 2. Token 估算持续偏低，压缩机制可能无法触发

- Issue：[#5402](https://github.com/HKUDS/nanobot/issues/5402)
- 当前状态：**已关闭**
- 可见关联 PR：未提供

**风险：** tiktoken 或供应商计数器的估算值低于实际 API token 数时，内存压缩阈值可能始终无法达到，最终导致上下文持续膨胀、请求成本上升或触发 provider 上下文限制。该问题虽已关闭，但缺少本次数据中的明确修复 PR，建议确认关闭原因和回归覆盖。

#### 3. Dream 截断 checkpoint 后仍推进 cursor

- Issue：[#6649](https://github.com/HKUDS/nanobot/issues/6649)
- 当前状态：**已关闭**
- 可见关联 PR：未提供

**风险：** 被截断的 checkpoint 后半部分可能永久无法参与 Dream 汇总，形成难以察觉的记忆缺失。应确认关闭是否伴随代码修复，并验证 cursor 与实际消费范围一致。

### 中等

#### 4. WebUI 标题生成在 Kimi K3.1 Pro 下耗尽输出预算

- Issue：[#6718](https://github.com/HKUDS/nanobot/issues/6718)
- 当前状态：**开放**
- 明确 fix PR：**暂无**

**影响范围：** WebUI 自动主题标题不可用，但主对话仍可正常工作，因此属于局部功能降级。

#### 5. 历史回放丢失通知草稿

- Issue：[#6704](https://github.com/HKUDS/nanobot/issues/6704)
- 当前状态：**已关闭**
- 已有 fix PR：[PR #6717](https://github.com/HKUDS/nanobot/pull/6717)

**影响范围：** 跨轮次内容一致性受损，可能造成工具调用参数、列表项或文案细节漂移。

#### 6. 图片附件在后续轮次或重启后无法回放

- 相关 PR：[PR #6720](https://github.com/HKUDS/nanobot/pull/6720)
- 状态：**待合并**

**影响范围：** 对图片继续追问时，模型可能只看到本地路径标记，进程重启后尤其容易丢失视觉上下文。

#### 7. 重连后 Agent 状态可能错误地保持“运行中”

- 相关 PR：[PR #6715](https://github.com/HKUDS/nanobot/pull/6715)
- 状态：**待合并**

**影响范围：** 浏览器丢失终止帧或历史读取失败时，WebUI 可能显示过期状态，影响后续操作判断。

### 较低

#### 8. WebUI 删除话题确认与撤销体验不一致

- 相关 PR：[PR #6723](https://github.com/HKUDS/nanobot/pull/6723)
- 状态：**待合并**

**影响范围：** 主要是交互一致性与移动端可达性问题，数据删除风险通过 Undo 机制得到一定控制。

#### 9. Tooltip、上下文菜单和模型选择器动画定位异常

- 相关 PR：[PR #6722](https://github.com/HKUDS/nanobot/pull/6722)
- 状态：**待合并**

**影响范围：** 视觉定位错误，不影响核心数据正确性。

---

## 6. 功能请求与路线图信号

### 6.1 MCP 生态预设与托管服务接入

- Issue：[#6705](https://github.com/HKUDS/nanobot/issues/6705)
- 相关 PR：[PR #6680](https://github.com/HKUDS/nanobot/pull/6680)

**判断：** 较高概率进入近期版本或预设列表更新。AI/ML API 的接入本身改动较小；与此同时，PR #6680 对 MCP 启动隔离、超时和重试的改进，显示 MCP 已成为近期基础设施重点。

**下一版本可能方向：**

- 新增官方或社区 MCP 预设；
- 改善慢 MCP Server 不阻塞聊天的体验；
- 明确超时、取消和重试状态；
- 补充 MCP 认证配置说明。

### 6.2 跨渠道会话续接

- PR：[PR #6714](https://github.com/HKUDS/nanobot/pull/6714)

**判断：** 中高概率进入近期 WebUI 版本。该能力直接解决 Telegram 等渠道与 WebUI 之间的上下文割裂，与近期会话恢复、跨端续接方向一致。

**注意事项：** 应明确“从 WebUI 回复是否同步回原渠道”、渠道身份映射和权限提示，避免用户误操作。

### 6.3 技能仅允许用户手动调用

- PR：[PR #5405](https://github.com/HKUDS/nanobot/pull/5405)

**判断：** 产品价值高，但发布时间不确定。功能适合部署、发布、支付等高副作用技能，也是成熟 Agent 平台的重要安全能力。由于 PR 自 2026-08-16 起仍未关闭，需确认维护者优先级。

### 6.4 队列状态可视化与精确请求追踪

- PR：[PR #6719](https://github.com/HKUDS/nanobot/pull/6719)
- PR：[PR #6721](https://github.com/HKUDS/nanobot/pull/6721)

**判断：** 很可能作为同一组 WebUI/Agent 可观测性能力进入后续版本。两者分别处理用户层状态和事件层追踪，配套性较强。

### 6.5 标题生成的多模型兼容

- Issue：[#6718](https://github.com/HKUDS/nanobot/issues/6718)

**判断：** 当前无明确 PR，但用户需求清晰、影响范围较小，预计会以兼容性补丁或预算自适应方式进入近期修复队列。若继续积压，则不同模型下的 WebUI 体验会持续不一致。

### 6.6 Gateway 启动路径统一

- PR：[PR #6686](https://github.com/HKUDS/nanobot/pull/6686)

**判断：** 属于架构性需求，用户可见度较低，但可能成为后续桌面端、后台运行、updater 和定时任务稳定性的基础。该 PR 当前存在冲突，合并前需完成拆分和回归验证。

---

## 7. 用户反馈摘要

### 真实使用场景

1. **跨渠道 Agent 协作**  
   用户从 Telegram 等外部渠道发起任务，希望在 WebUI 中继续原会话，同时保留上下文并清晰知道消息是否已被 Agent 消费。  
   相关反馈：[PR #6714](https://github.com/HKUDS/nanobot/pull/6714)、[PR #6719](https://github.com/HKUDS/nanobot/pull/6719)

2. **生成通知、消息或工具调用草稿**  
   用户使用 Agent 准备新员工欢迎信息和文具清单，并要求下一轮重复草稿。系统没有原样保留文本，是影响实际交付可靠性的直接痛点。  
   相关反馈：[Issue #6704](https://github.com/HKUDS/nanobot/issues/6704)

3. **围绕图片附件持续追问**  
   用户上传图片后继续提问时，模型应继续访问视觉内容，而不是仅获得本地路径。  
   相关反馈：[PR #6720](https://github.com/HKUDS/nanobot/pull/6720)

4. **多模型兼容**  
   用户通过 OpenAI-compatible provider 使用 Kimi K3.1 Pro，主回复成功但标题生成失败，说明用户期待 NanoBot 对不同供应商的 token 语义有更稳健的兼容。  
   相关反馈：[Issue #6718](https://github.com/HKUDS/nanobot/issues/6718)

5. **插件化服务接入**  
   服务商希望以官方预设形式进入 NanoBot MCP 生态，降低用户配置成本。  
   相关反馈：[Issue #6705](https://github.com/HKUDS/nanobot/issues/6705)

### 用户满意点

- 主对话在 Kimi 标题生成失败时仍能成功返回，说明核心模型调用链整体可用；
- WebUI 已具备 Undo、队列提示、恢复和重连机制，项目正在从“功能可用”向“交互可理解、状态可恢复”演进；
- 多数 Bug 在 24 小时内出现明确 PR，说明问题定位和修复响应速度较好。

### 用户不满意点

- 跨轮次内容不能稳定复现，直接削弱 Agent 的可信度；
- 排队、重连和 Agent 实际处理状态缺乏及时反馈；
- 固定 token 预算在不同模型下表现不稳定；
- SSRF 和特殊地址防护仍未形成完整闭环；
- MCP Server 启动失败或响应缓慢可能拖慢普通聊天。

---

## 8. 待处理积压

### 8.1 开放且影响 WebUI 核心体验的 Issue

- [#6718：Kimi K3.1 Pro 标题生成失败](https://github.com/HKUDS/nanobot/issues/6718)  
  已开放且有 1 条评论，暂无明确修复 PR。建议尽快增加模型兼容测试或动态预算兜底。

- [#6690：SSRF 特殊网段覆盖不足](https://github.com/HKUDS/nanobot/issues/6690)  
  涉及安全边界，现有 PR #6716 仅覆盖非法主机名。建议尽快形成完整的地址分类与测试矩阵。

### 8.2 长期开放的重要 PR

- [#5405：技能仅支持手动调用](https://github.com/HKUDS/nanobot/pull/5405)  
  自 2026-08-16 起开放，安全价值高，但仍缺少近期合入信号。应确认是否计划纳入近期版本，或拆分为核心配置能力与文档更新。

- [#6194：CI 中允许持久化投递和关闭流程完成](https://github.com/HKUDS/nanobot/pull/6194)  
  自 2026-10-13 起开放。测试稳定性通常会直接影响后续合并效率，建议优先清理 CI 阻塞项。

### 8.3 当前存在冲突或集成风险的 PR

- [#6686：Gateway 启动与运行时职责重构](https://github.com/HKUDS/nanobot/pull/6686)  
  当前标记为冲突，且改动范围较大。需要明确拆分边界，避免与近期 WebUI 启动性能调整相互叠加。

- [#6713：提前认证并延迟 launcher 导入](https://github.com/HKUDS/nanobot/pull/6713)  
  与已关闭的 [#6708](https://github.com/HKUDS/nanobot/pull/6708)、[#6712](https://github.com/HKUDS/nanobot/pull/6712) 属于同一性能优化链路，需要持续关注 Windows 启动延迟的回归指标。

### 8.4 需确认关闭质量的 Issue

- [#5402：token 估算偏低导致压缩不触发](https://github.com/HKUDS/nanobot/issues/5402)
- [#6649：Dream 仅读取 checkpoint 前 1000 字符](https://github.com/HKUDS/nanobot/issues/6649)

两条 Issue 均已关闭，但本次数据未提供明确修复 PR。建议维护者补充关联提交或回归测试说明，避免“关闭但无法确认已修复”。

---

## 总体判断

NanoBot 今日呈现出 **高频开发、WebUI 快速迭代、上下文与状态可靠性优先、安全能力同步补强** 的特征。29 条 PR 更新说明项目推进速度较快，尤其是会话回放、图片附件、队列追踪、重连恢复和 MCP 隔离，直接改善真实使用中的可靠性与可理解性。

当前主要风险不在于功能不足，而在于：

1. **PR 数量较多，待合并规模达到 15 条，存在评审和集成压力；**
2. **Windows/WebUI 启动性能近期多次调整，存在回归风险；**
3. **SSRF、token 估算和 Dream 截断问题需要确认完整闭环；**
4. **缺少新版本发布，当前大量改动尚不能以稳定发行物交付。**

**项目健康度评估：良好（偏活跃）**。短期应优先完成 WebUI 启动优化拆分、确认关键安全修复，并提高长期开放 PR 的处理透明度。

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目动态日报

**日期：2026-11-19**  
**统计范围：过去 24 小时 GitHub Issues / Pull Requests 更新**

## 1. 今日速览

- 过去 24 小时共发生 **1 条 Issue 更新、4 条 PR 更新**，没有新增版本发布。
- 今日 Issue 更新为 **1 条关闭**，涉及审批 Hook 在配置重载失败时可能导致工具调用失去审批门控的安全问题，具体状态标记为 `[stale]`。
- 4 条 PR 均已关闭，未留下待合并 PR；其中包含一次大规模上游同步，以及 WebSocket 认证修复和多批历史修复合并。
- 从数据看，项目当前呈现出**维护收口与历史变更清理**的特征，今日没有明显的新功能提交或版本发布，活跃度偏低。
- 整体健康度评估：**中等偏低**。代码维护和上游同步仍在推进，但安全问题的关闭方式、长周期 PR 的清理以及缺少新版本，均值得维护者进一步确认。

---

## 3. 项目进展

> 今日没有新的版本发布，因此不单列“版本发布”章节。

### 3.1 上游代码同步与定制迁移

- **PR #2810 — 已关闭**  
  [Sync with upstream/main (1095 commits) + forward-port magicform customizations](https://github.com/sipeed/picoclaw/pull/2810)  
  - 同步约 **1,095 个上游提交**。
  - 将原有 **6 个定制提交**迁移到上游重构后的目录结构。
  - 涉及 Agent Loop 拆分为 `agent_*.go`、工具目录迁移至 `pkg/tools/{fs,integration}/`、Channel 配置结构调整等。
  - 该 PR 是今日影响范围最大的维护动作，表明项目在主动跟进上游演进，并处理内部定制与新架构之间的适配。

### 3.2 WebSocket 认证与请求头标准化修复

- **PR #2363 — 已关闭**  
  [Fix WebSocket authentication and standardize header casing](https://github.com/sipeed/picoclaw/pull/2363)  
  - 修复 WebSocket 认证问题。
  - 统一 HTTP 请求头大小写处理，降低不同客户端、网关或代理环境下的兼容风险。
  - 关联 Issue： [#2354](https://github.com/sipeed/picoclaw/issues/2354)。
  - 对实际部署稳定性有直接价值，尤其适用于涉及自定义客户端、反向代理或严格 Header 校验的场景。

### 3.3 历史修复批量合并

- **PR #1546 — 已关闭**  
  [fix: merge PR #1480 #1479 #1478 #1473 #1467](https://github.com/sipeed/picoclaw/pull/1546)  
  - 集中合并 5 个既有修复 PR。
  - 反映维护者正在清理长期分散的修复分支，降低历史 PR 积压。

- **PR #1558 — 已关闭**  
  [fix: merge PR #1344 #1342 #1341 #1331](https://github.com/sipeed/picoclaw/pull/1558)  
  - 集中合并 4 个既有修复 PR。
  - 与 PR #1546 一起，说明项目近期重点之一是整合历史变更、收敛维护队列。

### 3.4 推进程度判断

今日没有待合并 PR，4 条 PR 全部关闭。就已展示内容而言，项目完成了：

1. 一次规模较大的上游代码同步；
2. 一项 WebSocket 认证兼容性修复；
3. 至少 9 个历史修复 PR 的批量整合与关闭；
4. 一次历史安全 Issue 的关闭处理。

因此，今日的项目推进更偏向**基础维护和代码收敛**，而不是新增功能。整体向前推进程度可评价为：**维护层面有明显进展，产品功能层面推进有限**。

---

## 4. 社区热点

### 4.1 最高评论 Issue：审批 Hook 重载安全问题

- **Issue #3456 — 已关闭，标记为 stale**  
  [Security: a failed approval-hook re-initialization during reload leaves the gateway serving with tools ungated](https://github.com/sipeed/picoclaw/issues/3456)  
  - 作者：@EddieMurphy89
  - 创建：2026-11-04
  - 最近更新：2026-11-18
  - 评论数：**2**
  - 👍：**0**

**热点诉求与背景：**

- PicoClaw 的进程审批 Hook 会在工具执行前请求批准；拒绝后应产生 `exec_skipped`。
- Issue 指出，在 `/reload` 或配置重载过程中，如果审批 Hook 重新初始化失败，Gateway 可能继续提供服务，但工具调用已经失去门控。
- 这不是普通体验问题，而是一个**安全边界降级问题**：一旦 Hook 初始化失败，系统可能从“默认拒绝执行”退化为“未受审批保护地执行”。
- 评论数在今日数据中最高，但点赞为 0，说明社区关注度有限，维护响应或安全修复传播仍可能不足。

### 4.2 今日最重要的 PR：上游同步

- **PR #2810**  
  [Sync with upstream/main (1095 commits) + forward-port magicform customizations](https://github.com/sipeed/picoclaw/pull/2810)

**讨论背景与诉求：**

- 上游一次带来约 1,095 个提交，意味着本地分支需要处理大量结构性变更。
- 核心诉求是保持 PicoClaw 与上游主线一致，同时避免丢失 Magicform 的定制能力。
- 该 PR 的关闭对代码收敛非常重要，但摘要未明确说明采用了 merge、rebase 或其他关闭方式，也未显示是否已进入默认分支，建议维护者补充最终落地状态。

### 4.3 用户可感知的热点修复：WebSocket 认证

- **PR #2363**  
  [Fix WebSocket authentication and standardize header casing](https://github.com/sipeed/picoclaw/pull/2363)
- **关联 Issue #2354**  
  [Issue #2354](https://github.com/sipeed/picoclaw/issues/2354)

**背后的诉求：**

- 用户需要 WebSocket 连接在不同客户端和代理环境下稳定完成认证。
- 请求头大小写不一致可能导致认证失败、代理拒绝或中间件兼容问题。
- 这是直接影响部署成功率和调用稳定性的痛点，具有较高实际价值。

---

## 5. Bug 与稳定性

### 严重程度：中高

#### 1. 配置重载期间审批 Hook 初始化失败，可能导致工具失去门控

- **Issue #3456**  
  [Security: approval-hook re-initialization failure may leave gateway serving with tools ungated](https://github.com/sipeed/picoclaw/issues/3456)
- **状态：** 已关闭，标记为 `[stale]`
- **是否已有明确 Fix PR：** 摘要中**未列出关联 Fix PR**
- **风险：**
  - 工具执行前的审批机制可能失效；
  - Gateway 在 Hook 初始化失败后仍保持服务状态；
  - 可能出现“看似重载成功、实际安全策略未生效”的状态；
  - 如果攻击者能够诱导工具调用，影响范围可能高于普通 Bug。

**判断：**  
尽管 Issue 已关闭，但当前数据不足以证明问题已通过代码修复解决。`stale` 关闭可能是自动清理，也可能表示维护者判断其不再适用。对于安全问题，建议维护者明确给出：

- 修复提交或 PR 链接；
- 是否采用“Hook 初始化失败即停止 Gateway 服务”的 fail-closed 策略；
- 是否存在已发布版本受影响、需用户手动缓解的问题。

### 严重程度：中

#### 2. WebSocket 认证失败及 Header 大小写兼容问题

- **PR #2363**  
  [Fix WebSocket authentication and standardize header casing](https://github.com/sipeed/picoclaw/pull/2363)
- **关联 Issue #2354**  
  [Issue #2354](https://github.com/sipeed/picoclaw/issues/2354)
- **是否已有 Fix PR：** **是，PR #2363**
- **状态：** PR 已关闭。

**影响：**

- WebSocket 客户端可能无法建立稳定连接；
- 在反向代理、自定义客户端或严格大小写校验环境下，认证结果可能不一致；
- 属于部署兼容性和可用性问题。

#### 严重程度：未评估

#### 3. 历史批量修复所覆盖的问题

- **PR #1546**  
  [Merge #1480 #1479 #1478 #1473 #1467](https://github.com/sipeed/picoclaw/pull/1546)
- **PR #1558**  
  [Merge #1344 #1342 #1341 #1331](https://github.com/sipeed/picoclaw/pull/1558)

由于提供的数据未包含各子 PR 的具体缺陷、回归范围和测试结果，今日无法逐项判断严重程度。但批量关闭至少说明项目在清理分散修复，提升主线稳定性。

---

## 6. 功能请求与路线图信号

### 6.1 明确的新功能需求

今日数据中**没有新开 Issue，也没有直接提出新功能的产品需求**。因此，没有足够证据支持某个新功能已进入下一版本路线图。

### 6.2 可以确认的工程演进信号

#### 上游架构持续对齐

- **PR #2810**  
  [Sync with upstream/main + forward-port customizations](https://github.com/sipeed/picoclaw/pull/2810)
- 约 1,095 个上游提交以及 Agent、Tools、Channel 的目录重构，说明项目下一阶段重点仍可能是：
  - 保持核心架构与上游同步；
  - 降低分叉维护成本；
  - 保证下游定制在重构后持续可用。
- 若该同步已进入主分支，未来版本更可能首先体现为**内部稳定性、兼容性提升和维护成本下降**，而非显性新功能。

#### WebSocket 接入稳定性

- **PR #2363**  
  [Fix WebSocket authentication and standardize header casing](https://github.com/sipeed/picoclaw/pull/2363)
- 该修复可视为渠道接入能力继续完善的信号，尤其适合将 PicoClaw 部署于代理、网关和多客户端环境。

#### 审批机制应成为安全路线重点

- **Issue #3456**  
  [Approval-hook re-initialization security issue](https://github.com/sipeed/picoclaw/issues/3456)
- 无论是否已经修复，审批 Hook 的**失败关闭、重载一致性和安全默认值**都应成为后续版本的重要稳定性与安全验收项。

### 6.3 下一版本可能性判断

今日无 Release，也没有待合并 PR，因此无法确认下一版本内容。基于现有更新，下一版本较可能包含：

1. PR #2810 所代表的同步与架构调整；
2. PR #2363 的 WebSocket 认证修复；
3. PR #1546、#1558 汇总的历史修复；
4. 安全审批机制相关修复——但需先确认 Issue #3456 的实际解决状态。

---

## 7. 用户反馈摘要

### 7.1 用户真正关心的核心是“审批不可静默失效”

- **Issue #3456**  
  [Security issue discussion](https://github.com/sipeed/picoclaw/issues/3456)

从 Issue 描述可以提炼出的用户痛点：

- 安全审批 Hook 在重载失败后不应继续以未受保护状态运行；
- 配置重载应具备原子性：要么完整恢复并保留审批门控，要么停止服务；
- 用户需要明确知道工具调用是“被拒绝”还是“绕过审批后执行”；
- 审批系统应默认 fail-closed，避免安全能力静默降级。

### 7.2 WebSocket 场景下的接入稳定性仍是实际痛点

- **PR #2363**  
  [WebSocket authentication fix](https://github.com/sipeed/picoclaw/pull/2363)
- **Issue #2354**  
  [Related issue](https://github.com/sipeed/picoclaw/issues/2354)

用户诉求集中在：

- 连接能够稳定完成认证；
- 不因 Header 大小写差异而失败；
- 在真实代理和客户端环境中保持行为一致。

### 7.3 满意度与反馈质量

- 今日 Issue 点赞为 **0**，且安全 Issue 以 `stale` 标记关闭，反映用户反馈没有得到明显的社区确认。
- PR 数据未提供有效评论数或点赞数，无法据此判断维护者与贡献者之间的反馈活跃度。
- 整体而言，今日有明确工程产出，但缺少围绕用户结果、部署验证和修复确认的公开反馈闭环。

---

## 8. 待处理积压

### 8.1 安全 Issue 的关闭依据不透明

- **Issue #3456**  
  [Security: failed approval-hook re-initialization during reload](https://github.com/sipeed/picoclaw/issues/3456)
- 创建于 2026-11-04，更新于 2026-11-18，最终以 `stale` 关闭。
- **风险：** 如果没有实际修复，安全风险可能仍以未明确方式存在。
- **建议：** 补充修复 PR、测试用例、维护者结论和受影响版本范围；即便决定不修复，也应说明为何现有 fail-closed 机制足以覆盖该场景。

### 8.2 多个 PR 生命周期较长

以下 PR 均创建于数月前，直到 2026-11-18 才更新并关闭：

- **PR #2810**  
  [Upstream sync and customization forward-port](https://github.com/sipeed/picoclaw/pull/2810)  
  创建：2026-05-07

- **PR #2363**  
  [WebSocket authentication fix](https://github.com/sipeed/picoclaw/pull/2363)  
  创建：2026-04-05

- **PR #1546**  
  [Merge five historical fixes](https://github.com/sipeed/picoclaw/pull/1546)  
  创建：2026-03-14

- **PR #1558**  
  [Merge four historical fixes](https://github.com/sipeed/picoclaw/pull/1558)  
  创建：2026-03-14

**积压判断：**

- 这些 PR 的集中关闭有助于降低队列噪音；
- 但若只是“关闭而未合并”，则相应修复可能并未进入主线；
- 若已经以其他提交合入，也应提供对应提交或 Release 记录，避免贡献者和用户无法判断修复是否实际可用。

### 8.3 缺少版本发布与变更说明

- 今日 **0 个 Release**。
- 在完成约 1,095 个上游提交同步、认证修复和多项历史修复后，仍未形成版本发布。
- 建议维护者及时整理 Release Notes，至少覆盖：
  - WebSocket 认证修复；
  - 审批 Hook 安全修复或风险说明；
  - 目录和配置结构变化；
  - Magicform 定制迁移情况；
  - 是否存在破坏性变更及升级步骤。

---

## 总体健康度结论

**健康度评级：中等偏低，但处于维护收敛阶段。**

- **积极面：** 今日没有待合并 PR，历史 PR 和 Issue 得到了集中处理；完成了大规模上游同步，并覆盖 WebSocket 认证及多项历史修复。
- **风险面：** 安全 Issue 的关闭缺少明确修复证据；部分 PR 生命周期较长；没有新版本发布；社区互动和用户反馈较弱。
- **核心建议：** 优先确认 [Issue #3456](https://github.com/sipeed/picoclaw/issues/3456) 是否真正修复，补充安全回归测试；同时明确四个关闭 PR 的最终合入状态，并尽快发布包含这些变更的版本说明。

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI 项目动态日报

**日期：2026-11-19**  
**监测范围：过去 24 小时 GitHub Issues / Pull Requests 更新**

---

## 1. 今日速览

过去 24 小时项目共出现 **1 条 Issue 更新、11 条 PR 更新**，其中 **10 个 PR 已关闭或合并、1 个 PR 仍待处理**，Issue 更新也全部来自已关闭事项。整体开发吞吐较高，主要集中在 **Cowork/OpenClaw 执行模式、技能目录、桌面伴侣、模型选择器和产物预览** 等方向。安全方面，`localfile://` 任意绝对路径访问问题已关闭，同时 MCP stdio 命令与外部 URL 边界加固仍有 1 个 PR 保持开放，需继续关注。

从数据看，项目当前呈现出“**功能修复持续合入、风险项逐步收敛**”的状态；但今日没有新版本发布，变更尚未形成可验证的正式发布版本。

---

## 2. 版本发布

过去 24 小时 **无新版本发布**，因此暂无正式版本更新、破坏性变更及升级迁移说明。

---

## 3. 项目进展

### 3.1 Cowork 执行模式恢复与沙箱策略修复

- [#3114](https://github.com/netease-youdao/LobsterAI/pull/3114)：修复 Cowork 将已保存的 `executionMode` 强制读取为 `local` 的问题，恢复 `auto`、`sandbox` 等模式在应用重启后的持久化，同时明确处理显式沙箱策略。
- [#3090](https://github.com/netease-youdao/LobsterAI/pull/3090)：同样修复 `CoworkStore.getConfig()` 忽略已保存执行模式的问题，避免配置写入后在读取阶段被覆盖。

这两项 PR 对同一存储链路进行了衔接式修复。其价值不仅在于保存用户设置，还在于确保 OpenClaw 同步、企业部署策略及沙箱隔离行为使用真实配置，减少“界面显示已配置、实际运行仍为本地模式”的偏差。

### 3.2 OpenClaw 技能目录与交付物路径约束

- [#3113](https://github.com/netease-youdao/LobsterAI/pull/3113)：压缩技能目录中的重复公共路径，在保留技能顺序、精确匹配和预算限制的同时，提升上下文报告与 Code Mode 的目录可读性；同时要求 Cowork 遵循用户指定的文件名和保存位置，并验证最终交付链接确实指向本次创建或更新的文件。

该 PR 兼顾了上下文效率、交付可靠性和测试覆盖：定向 Vitest 通过 191 项，但依赖真实模型输出目录的 Word 验收用例被跳过，仍需在更完整环境中补验。

### 3.3 桌面伴侣首次使用及全屏体验

- [#3116](https://github.com/netease-youdao/LobsterAI/pull/3116)：修复桌面伴侣首次使用时悬浮菜单不出现的问题；当首次渲染测量迟迟未完成时，在页面加载结束后增加兜底重试，并将启动器提升至 macOS 全屏弹出菜单层级。

这一改动直接改善首次使用成功率，并覆盖全屏场景下的层级问题，属于较典型的桌面端体验稳定性修复。

### 3.4 模型选择器本地化与交互改进

- [#3115](https://github.com/netease-youdao/LobsterAI/pull/3115)：模型选择器中的自定义标签支持本地化；服务端提供英文标签时优先显示，翻译缺失时保留原文。英文界面改用图标化内置徽标，并通过悬浮详情展示自定义标签，同时补充标签解析和语言回退测试。
- [#2790](https://github.com/netease-youdao/LobsterAI/pull/2790)：对大型模型目录按系列分组，支持折叠“More models”、搜索折叠项中的模型、识别同名模型的原始路由，并改善会话历史加载，避免历史加载卡住。

两项改动共同提升了模型数量较多时的发现效率和会话恢复体验。

### 3.5 产物预览与文件链接可靠性

- [#3109](https://github.com/netease-youdao/LobsterAI/pull/3109)：支持 Windows 下 GBK/GB18030 CSV 的中文预览，提供自动编码识别及手动切换；正文中的 `C:/...` 文件链接改为应用内预览，CSV/TSV 预览不会写回源文件。
- [#2791](https://github.com/netease-youdao/LobsterAI/pull/2791)：过滤命令文本中的缩写路径，避免将 `render -o "…/demo.mp4"` 之类的占位路径推断成无效产物卡片，同时保留真实交付链接。

这些改动提升了 Windows 用户处理中文表格数据和引用本地文件的体验，也减少了无效产物卡片对工作流的干扰。

### 3.6 Cowork 长文本可读性

- [#2792](https://github.com/netease-youdao/LobsterAI/pull/2792)：优化 Cowork 长问题提示与上下文工具提示。标题保持紧凑，长描述可展开并滚动，卡片整体高度受限，工具提示也限制在视口边界内，避免内容将选项和输入区挤出可视区域。

### 3.7 Pet Vlog 预设刷新

- [#3117](https://github.com/netease-youdao/LobsterAI/pull/3117)：当 Pet Vlog Director 的专家目录更新后，客户端会刷新已安装预设的官方默认值，并兼容此前中英文版本中未被用户修改的旧默认配置。

---

## 4. 社区热点

今日 Issue 与 PR 数据中，**评论数和点赞数均未提供有效热度指标**；因此无法严格按“最热门”排序。以下为今日最值得关注的议题。

### 4.1 `localfile://` 任意绝对路径访问问题

- Issue：[#3096](https://github.com/netease-youdao/LobsterAI/issues/3096)
- 状态：**已关闭**
- 评论：2；点赞：0

该 Issue 指出 `localfile://` 协议处理器会解析并提供任意绝对路径中的文件，缺少允许访问的根目录白名单，且渲染进程可触达该协议处理器，属于潜在的本地文件越权读取风险。

其核心诉求是：

1. 将可访问范围限制在应用工作区或用户明确授权目录；
2. 拒绝目录穿越及任意绝对路径；
3. 对文件读取入口建立统一的安全边界。

该问题已经关闭，但当前摘要未展示对应修复 PR、版本和验证信息，建议维护者补充安全修复链接，便于用户确认升级基线。

### 4.2 MCP stdio 与外部 URL 安全边界

- PR：[#2590](https://github.com/netease-youdao/LobsterAI/pull/2590)
- 状态：**开放**
- 创建于 2026-09-01，更新于 2026-11-18

该 PR 是今日最突出的长期安全议题，目标是加固：

- MCP stdio 命令和参数的 shell 元字符检查；
- 可执行文件路径验证；
- 渲染进程提交 URL 到 `shell.openExternal` 前的协议白名单。

其背后反映出的核心诉求是：第三方 MCP 服务、配置导入和同步链路不应演变为任意命令执行或外部协议滥用入口。该 PR 自创建起已持续较长时间，仍需维护者明确合入优先级。

---

## 5. Bug 与稳定性

按潜在影响程度排列：

### 高严重度：本地文件协议越权读取风险

- Issue：[#3096](https://github.com/netease-youdao/LobsterAI/issues/3096)
- 类型：本地文件访问控制 / 潜在信息泄露
- 状态：已关闭
- 修复 PR：**摘要中未明确关联**
- 判断：问题本身已关闭，但应补充关联修复提交或发布版本，以确认所有受支持版本均已覆盖根目录白名单、路径规范化和目录穿越防护。

### 高严重度：MCP 命令执行及外部 URL 边界不足

- PR：[#2590](https://github.com/netease-youdao/LobsterAI/pull/2590)
- 类型：命令注入 / 任意命令执行 / 外部协议滥用
- 状态：仍开放
- 修复 PR：即该安全加固 PR
- 判断：尚待合并，需要优先处理。

### 中严重度：Cowork 执行模式重启后失效

- PR：[#3090](https://github.com/netease-youdao/LobsterAI/pull/3090)
- 补充 PR：[#3114](https://github.com/netease-youdao/LobsterAI/pull/3114)
- 类型：配置持久化回归
- 状态：已关闭
- 影响：`auto`、`sandbox` 模式无法在重启后保留，可能使沙箱和同步行为偏离用户或企业策略。

### 中严重度：桌面伴侣首次使用无法显示菜单

- PR：[#3116](https://github.com/netease-youdao/LobsterAI/pull/3116)
- 类型：初始化竞态 / macOS 全屏层级
- 状态：已关闭
- 影响：影响新用户首次使用及全屏环境下的入口可达性。

### 中低严重度：Windows GBK CSV 中文乱码及本地链接被错误交给系统打开

- PR：[#3109](https://github.com/netease-youdao/LobsterAI/pull/3109)
- 类型：编码兼容 / 链接路由错误
- 状态：已关闭
- 影响：中文 CSV 数据不可读，且文件链接可能绕过应用内预览。

### 低至中严重度：缩写路径产生无效产物卡片

- PR：[#2791](https://github.com/netease-youdao/LobsterAI/pull/2791)
- 类型：错误推断 / 产物列表污染
- 状态：已关闭
- 影响：无效卡片干扰交付结果识别，但不会直接导致数据丢失。

### 低严重度：长问题导致 Cowork 选项或输入区被挤出

- PR：[#2792](https://github.com/netease-youdao/LobsterAI/pull/2792)
- 类型：布局与可读性
- 状态：已关闭
- 影响：长提示场景下操作区域可见性下降。

### 低严重度：历史会话加载可能卡住

- PR：[#2790](https://github.com/netease-youdao/LobsterAI/pull/2790)
- 类型：加载状态异常
- 状态：已关闭
- 影响：主要表现为交互阻塞，需继续观察长历史记录下的实际表现。

---

## 6. 功能请求与路线图信号

今日没有明确标注为新功能需求的开放 Issue，但已关闭 PR 反映了近期路线重点：

1. **企业安全与可控执行**  
   [#3114](https://github.com/netease-youdao/LobsterAI/pull/3114) 和 [#2590](https://github.com/netease-youdao/LobsterAI/pull/2590) 表明，权限隔离、配置持久化、外部 URL 和第三方 MCP 命令边界正在成为重点。

2. **Agent 工作流可靠交付**  
   [#3113](https://github.com/netease-youdao/LobsterAI/pull/3113) 的交付路径校验、文件名约束和技能目录压缩，指向更稳定的 Agent/Cowork 工作流。

3. **模型目录规模化体验**  
   [#3115](https://github.com/netease-youdao/LobsterAI/pull/3115) 与 [#2790](https://github.com/netease-youdao/LobsterAI/pull/2790) 显示模型选择器正在支持更多模型、本地化标签及大规模目录管理。

4. **桌面端原生体验完善**  
   [#3116](https://github.com/netease-youdao/LobsterAI/pull/3116) 表明桌面伴侣、全屏菜单和首次启动体验仍是近期优化方向。

5. **产物预览与跨平台兼容**  
   [#3109](https://github.com/netease-youdao/LobsterAI/pull/3109) 与 [#2791](https://github.com/netease-youdao/LobsterAI/pull/2791) 表明表格编码、Windows 文件链接及产物推断仍处于快速打磨阶段。

从合入节奏看，上述改动较可能在下一版本集中发布；但由于今日没有 Release，具体版本归属仍需等待维护者整理发布说明。

---

## 7. 用户反馈摘要

### 7.1 Windows 中文表格预览是明确的现实痛点

- PR：[#3109](https://github.com/netease-youdao/LobsterAI/pull/3109)

同一份 CSV 在 UTF-8 下正常、GBK 下乱码，说明用户交付链路中同时存在多编码数据源。应用内预览和手动编码切换满足了“不修改原文件”的实际诉求，属于较有价值的兼容性改进。

### 7.2 本地文件链接不应绕开应用预览

- PR：[#3109](https://github.com/netease-youdao/LobsterAI/pull/3109)

Windows 正文中的 `C:/.../products.csv` 被错误交给系统打开，可能导致用户离开当前工作流。改为应用内预览后，文件交付和结果核验路径更一致。

### 7.3 用户需要安全、可预测的本地文件访问边界

- Issue：[#3096](https://github.com/netease-youdao/LobsterAI/issues/3096)

安全诉求并非来自普通 UI 偏好，而是集中在“渲染进程不能借助协议处理器读取任意本地文件”。这表明用户和开发者都期待桌面 AI 工具在文件访问上具备清晰、可验证的权限模型。

### 7.4 Cowork 用户关注执行模式能否跨重启保留

- PR：[#3090](https://github.com/netease-youdao/LobsterAI/pull/3090)
- PR：[#3114](https://github.com/netease-youdao/LobsterAI/pull/3114)

配置写入成功但读取时被硬编码覆盖，是典型的“界面看似设置成功、实际行为不一致”问题。修复后，用户可以更可靠地使用本地、自动和沙箱模式。

### 7.5 满意度信号有限

今日 Issue 评论数最高仅 2 条，PR 未提供有效点赞或评论数据，无法据此判断社区满意程度。现有信息更适合评估“修复覆盖面”，而不是评价用户口碑。

---

## 8. 待处理积压

### 8.1 长期开放的安全加固 PR

- PR：[#2590](https://github.com/netease-youdao/LobsterAI/pull/2590)
- 创建时间：2026-09-01
- 当前状态：开放
- 积压时长：约两个半月
- 优先级建议：**高**

这是当前最重要的积压项，涉及 MCP stdio 命令、参数、可执行路径和 `shell.openExternal` 的协议白名单。建议维护者：

1. 明确该 PR 是否仍计划合入；
2. 将安全修复拆分为可独立审查的命令校验、路径校验和 URL 校验；
3. 补充针对 shell 元字符、符号链接、编码绕过及危险协议的测试；
4. 在下一次 Release 中提供明确的安全说明。

### 8.2 `localfile://` 安全修复缺少可见的关联记录

- Issue：[#3096](https://github.com/netease-youdao/LobsterAI/issues/3096)
- 当前状态：已关闭
- 积压风险：中高

虽然 Issue 已关闭，但给定数据没有展示关联修复 PR、合入提交或发布版本。建议在 Issue 中补充安全修复链接和升级指引，避免用户无法判断自己是否仍受影响。

### 8.3 Word 交付验收仍存在覆盖缺口

- PR：[#3113](https://github.com/netease-youdao/LobsterAI/pull/3113)
- 当前状态：已关闭
- 积压风险：中

依赖真实模型输出目录的 Word 用例本次跳过。单元测试通过不能完全覆盖真实模型、真实文件落盘和最终链接校验，建议后续在集成环境补跑。

---

## 今日健康度评估

| 维度 | 评价 | 依据 |
|---|---|---|
| 开发吞吐 | **较高** | 24 小时内 11 个 PR 更新，10 个已关闭或合并 |
| Issue 响应 | **良好** | 唯一 Issue 更新已关闭 |
| 安全状态 | **改善中，仍有风险** | 本地文件问题已关闭，但 MCP/URL 加固 PR 长期开放 |
| 发布活跃度 | **一般** | 今日无新版本，变更尚未形成发布基线 |
| 测试完整度 | **较好但非完整** | 多项 PR 补充测试，OpenClaw Word 验收仍有跳过项 |
| 社区热度 | **偏低/数据不足** | 评论、点赞数据较少，无法确认广泛用户参与度 |

**综合结论：项目健康度良好偏高。** 今日修复覆盖配置持久化、桌面交互、跨平台文件预览、模型管理和 Agent 交付等多个关键链路，推进力度明显；主要风险集中在尚未完成发布以及安全边界修复的长期积压。建议下一阶段优先完成 [#2590](https://github.com/netease-youdao/LobsterAI/pull/2590) 的合入决策，并为 [#3096](https://github.com/netease-youdao/LobsterAI/issues/3096) 补充可核验的修复与升级说明。

</details>

<details>
<summary><strong>QwenPaw</strong> — <a href="https://github.com/agentscope-ai/QwenPaw">agentscope-ai/QwenPaw</a></summary>

# QwenPaw 项目动态日报

**日期：2026-11-19**  
**数据范围：过去 24 小时 GitHub Issues、PR 与 Releases 更新**

## 1. 今日速览

过去 24 小时项目保持较高活跃度，共更新 **18 条 Issues** 和 **26 条 PR**，并发布 **v2.3.0.post1**。当前仍有 **10 条活跃 Issue、20 个待合并 PR**，开发重点集中在插件化改造、渠道稳定性、安全治理与循环调用防护。多个关键问题已有对应修复 PR，但移动端消息裁切、响应路由达到 128 条后失效、计划任务过程不可见等问题仍待解决。

**健康度评估：活跃但风险偏高。** 插件化和 SDK 扩展推进迅速，但近期发布也暴露出回归问题，尤其是窄屏 Console 展示、启动诊断日志噪音、渠道配置持久化及长连接响应路由管理。

---

## 2. 版本发布

### [v2.3.0.post1](https://github.com/agentscope-ai/QwenPaw/releases/tag/v2.3.0.post1)

这是 v2.3.0 的补丁版本，发布说明显示的主要变化包括：

- 将第三方 Agent 能力抽取为插件，继续推进轻量核心与可扩展架构  
  [PR #8426](https://github.com/agentscope-ai/QwenPaw/pull/8426)
- Console 后续草稿在引用模型回复内容时增加引号，降低引用与正文混淆  
  [PR #8609](https://github.com/agentscope-ai/QwenPaw/pull/8609)
- 恢复 Safari 相关兼容性  
  发布说明未给出对应 PR 编号

### 破坏性变更与迁移注意事项

发布说明未明确标注破坏性变更。不过从版本后的反馈看，升级需要重点关注：

1. **Console 窄屏回归**  
   升级至 `v2.3.0.post1` 后，375px 手机视口出现整条消息文字裁切，表格和代码块无法横向滚动。  
   [Issue #8811](https://github.com/agentscope-ai/QwenPaw/issues/8811)

2. **启动诊断 WARNING 刷屏**  
   `startup_diagnostic` 输出大量 WARNING，同时钉钉、飞书等渠道在升级后可能默认不可用，需要手动更新。  
   [Issue #8812](https://github.com/agentscope-ai/QwenPaw/issues/8812)

3. **插件化方向带来的兼容性关注**  
   第三方 Agent、本地模型、MCP、Local Whisper 等模块正逐步转为插件。用户使用相关功能前，应确认当前版本是否已完整迁移依赖、配置和生命周期管理。

4. **建议升级验证项**
   - Windows 窄屏与移动端 Console 展示
   - 钉钉、飞书、QQ、微信渠道启停与重载
   - 定时任务和心跳任务的 token 统计
   - Safari 访问与渲染
   - 已安装插件在升级后的加载和生命周期

---

## 3. 项目进展

过去 24 小时共有 **6 个 PR 已合并或关闭**，其中较重要的变更如下。

### 3.1 循环调用防护补齐同一条回复内的多次工具调用

[PR #8701](https://github.com/agentscope-ai/QwenPaw/pull/8701) 已关闭，问题源自 AgentScope 将同一轮迭代中的多个工具调用追加到同一条 assistant 消息，而 `DoomLoopGate` 将消息 ID 误作迭代游标，只记录第一次快照，导致重复工具调用无法触发保护。

该修复为 [#8700](https://github.com/agentscope-ai/QwenPaw/issues/8700) 的后续工作，提升了默认模式下的重复调用熔断能力。不过，类似的长期运行问题仍由 [#8712](https://github.com/agentscope-ai/QwenPaw/issues/8712) 和 [PR #8713](https://github.com/agentscope-ai/QwenPaw/pull/8713) 跟踪，说明该机制仍需进一步验证。

### 3.2 微信凭据改为按 Agent 工作区隔离

[PR #8756](https://github.com/agentscope-ai/QwenPaw/pull/8756) 已关闭，修复同一安装中多个 Agent 无法分别持有微信账号的问题。此前凭据作用域可能回退到进程级 `WORKING_DIR`，造成不同 Agent 共享或争用同一凭据。

这一改动对多 Agent、多渠道部署意义较大，降低了账号串用和路由冲突风险。

### 3.3 破坏性命令与系统凭据保护加强

[PR #7757](https://github.com/agentscope-ai/QwenPaw/pull/7757) 已关闭，在治理路径中加入破坏性命令分类器，并强化系统凭据保护。灾难性命令可返回 `SAFETY_CHECKS_DESTRUCTIVE_COMMAND`，默认自动拒绝策略也会直接阻止执行。

相关 Issue 为 [#8002](https://github.com/agentscope-ai/QwenPaw/issues/8002)，其中还涉及 Windows 下 Office COM 内联命令可能关闭用户 PowerPoint 的风险；对应修复还包括：

- [PR #8028](https://github.com/agentscope-ai/QwenPaw/pull/8028)：标记 Shell 中的 Office COM 自动化
- [PR #8810](https://github.com/agentscope-ai/QwenPaw/pull/8810)：要求邮件发送、HTTP 写请求和文件上传经过审批，当前仍待合并

### 3.4 版本号进入 2.3.1 beta

[PR #8809](https://github.com/agentscope-ai/QwenPaw/pull/8809) 已关闭，将版本提升至 `2.3.1b1`。这表明下一轮开发周期已经启动，但当前尚无正式版发布。

### 3.5 整体推进程度

项目当前已从“功能堆叠”明显转向“核心瘦身后插件化”，主要标志包括：

- 第三方 Agent 插件化  
  [PR #8426](https://github.com/agentscope-ai/QwenPaw/pull/8426)
- MCP 插件化  
  [PR #8469](https://github.com/agentscope-ai/QwenPaw/pull/8469)
- 本地模型管理插件化  
  [PR #8499](https://github.com/agentscope-ai/QwenPaw/pull/8499)
- Local Whisper SDK 插件化  
  [PR #8431](https://github.com/agentscope-ai/QwenPaw/pull/8431)
- 插件 SDK 1.1 扩展  
  [PR #8764](https://github.com/agentscope-ai/QwenPaw/pull/8764)

不过，上述多个大尺寸 PR 仍待评审，说明架构迁移尚未完全收敛。

---

## 4. 社区热点

### 4.1 最活跃 Issue：插件主题扩展点

[Issue #8071](https://github.com/agentscope-ai/QwenPaw/issues/8071) — **21 条评论，当前最活跃**

用户希望插件不再只能设置 `colorPrimary`，而能通过语义 Token 覆盖背景、表面层、悬浮态、圆角、文本色等设计变量。其核心诉求是：

- 插件应拥有接近原生组件的视觉定制能力
- 主题系统应从“单一主色”升级为稳定的语义化设计协议
- 避免插件通过全局 CSS 或 DOM 注入破坏宿主主题

这是典型的插件生态成熟度需求：用户已不满足于基础接口，而希望建立稳定、可扩展的设计系统边界。

### 4.2 插件轻量化与可扩展路线

[Issue #8808](https://github.com/agentscope-ai/QwenPaw/issues/8808) — **1 条评论、1 个 👍**

维护者明确表示，QwenPaw v2.3.0 是“轻量化与易扩展”的第一步，未来会把非核心功能逐步转为插件，保留更精简的核心运行时。

这与多个正在推进的 PR 形成呼应：

- [PR #8426](https://github.com/agentscope-ai/QwenPaw/pull/8426)
- [PR #8469](https://github.com/agentscope-ai/QwenPaw/pull/8469)
- [PR #8499](https://github.com/agentscope-ai/QwenPaw/pull/8499)
- [PR #8431](https://github.com/agentscope-ai/QwenPaw/pull/8431)
- [PR #8764](https://github.com/agentscope-ai/QwenPaw/pull/8764)

### 4.3 安全治理 PR

[PR #8810](https://github.com/agentscope-ai/QwenPaw/pull/8810) 涉及 Shell 邮件发送、HTTP 写操作和本地文件上传，当前处于待合并状态。

用户真实痛点集中在：AUTO、SMART 模式下，部分有外部副作用的写操作未触发审批。它直接关系到个人 AI 助手执行自动化任务时的安全边界。

### 4.4 插件 SDK 1.1

[PR #8764](https://github.com/agentscope-ai/QwenPaw/pull/8764) 扩展公共插件 SDK，加入请求身份、模型选择、会话历史作用域、生命周期管理及开发者工具等能力。

这是插件生态的重要基础建设，但 PR 规模标记为 `XXXL`，评审和合并成本较高。后续关键在于：

- API 是否真正稳定
- 宿主能否统一管理权限与资源生命周期
- 第三方 Agent、模型、MCP、Whisper 等迁移是否保持兼容

### 4.5 CJK Markdown 强调语法

[PR #8133](https://github.com/agentscope-ai/QwenPaw/pull/8133) 修复 `**中文。**后面` 等场景中强调标记无法解析的问题。该 PR 自 10 月 8 日创建，仍在审查，属于长期积压的中优先级展示问题。

---

## 5. Bug 与稳定性

以下按影响范围和潜在严重程度排序。

### 严重：高——渠道在 128 条活动响应路由后静默失效

[Issue #8814](https://github.com/agentscope-ai/QwenPaw/issues/8814)

WeChat 在长期部署中出现收发双向停止，用户侧无明确错误，主机日志仅见 `-32603 internal error`。根因指向 `RESPONSE_SCOPE_LIMIT`：活动响应路由达到硬上限后没有正确淘汰。

- **影响**：核心渠道完全不可用，但错误提示不足
- **现有修复 PR**：当前数据中未见明确对应 PR
- **建议**：按 P0/P1 优先处理，增加 LRU 淘汰、路由数量指标和静默失败告警

### 高——Shell 外发与上传操作未经审批即可执行

[Issue #8002](https://github.com/agentscope-ai/QwenPaw/issues/8002)  
相关修复：[PR #7757](https://github.com/agentscope-ai/QwenPaw/pull/7757)、[PR #8028](https://github.com/agentscope-ai/QwenPaw/pull/8028)、[PR #8810](https://github.com/agentscope-ai/QwenPaw/pull/8810)

- **影响**：AUTO/SMART 模式下可能发送邮件、发起 HTTP 写请求、上传本地文件，或执行 Office COM 自动化
- **现有修复 PR**：有
- **状态**：`#7757`、`#8028` 已关闭；`#8810` 待合并

### 高——窄屏 Console 消息和宽内容被裁切

[Issue #8811](https://github.com/agentscope-ai/QwenPaw/issues/8811)

`v2.3.0.post1` 后在 375px 手机视口出现：

- 整条消息文字被剪裁
- Markdown 表格和代码块被裁切
- 缺少可用的横向滚动

- **现有修复 PR**：当前数据中未见明确对应 PR
- **建议**：回归测试覆盖 320/375/414px 视口，以及 `overflow-x`、表格容器和代码块宽度策略

### 高——Agent 响应结束后继续自行执行工具

[Issue #8806](https://github.com/agentscope-ai/QwenPaw/issues/8806)

用户报告回答完成后约 2–3 秒，Agent 会再次执行工具并生成新回复，且持续循环。相关上下文还出现从未发送过的 user 消息。

- **现有修复 PR**：没有明确对应项
- **风险**：可能造成重复消耗、重复副作用或无限循环
- **建议**：重点检查消息队列注入、异步回调、状态机结束条件和上下文伪造路径

### 中高——重复工具调用未被及时中断

[Issue #8712](https://github.com/agentscope-ai/QwenPaw/issues/8712)  
相关 PR：[PR #8701](https://github.com/agentscope-ai/QwenPaw/pull/8701)、[PR #8713](https://github.com/agentscope-ai/QwenPaw/pull/8713)

同一 Bash 调用曾被批准 14 次。`#8701` 已关闭，但 `#8713` 仍待合并，说明完整修复尚未完全落地。

### 中——QQ 渠道启用状态在重载后被静默重置

[Issue #8475](https://github.com/agentscope-ai/QwenPaw/issues/8475)

配置重载或系统优化后，QQ 的 `enabled` 被写为 `false`，机器人不再收发消息，且没有启动警告。

- **现有修复 PR**：未见明确对应 PR
- **建议**：在配置迁移中保留已有值，并为状态回退增加显式日志与遥测

### 中——计划任务执行期间无消息和进度

[Issue #8815](https://github.com/agentscope-ai/QwenPaw/issues/8815)

定时任务在后台执行时，Console 对应会话看不到触发消息、模型响应和过程进度，必须等任务完成后才集中出现。

- **现有修复 PR**：未见明确对应 PR
- **影响**：长任务可观测性差，用户无法判断任务是否卡住
- **建议**：将 cron/heartbeat 执行接入与普通会话一致的事件流，并按流式增量写入

### 中——启动诊断 WARNING 刷屏及渠道默认不可用

[Issue #8812](https://github.com/agentscope-ai/QwenPaw/issues/8812)

升级后 `startup_diagnostic` 大量输出 WARNING，钉钉、飞书等渠道需手动更新后才恢复可用。

- **现有修复 PR**：未见明确对应 PR
- **建议**：区分可迁移提示、配置缺失和真实错误；升级后自动完成渠道配置迁移

### 中——DoomLoopGate 对累积式 assistant 消息失效

[Issue #8700](https://github.com/agentscope-ai/QwenPaw/issues/8700)  
修复：[PR #8701](https://github.com/agentscope-ai/QwenPaw/pull/8701)

该项已有明确修复，但仍需回归验证默认阈值下重复调用是否能在第 4 次正确停止。

### 中低——Windows Git 长路径与微信环境依赖歧义

[Issue #8627](https://github.com/agentscope-ai/QwenPaw/issues/8627) 已关闭，涉及 Windows Git 长路径前缀及微信渠道 `DEPENDENCY_ENVIRONMENT_AMBIGUOUS`。当前无可见修复 PR，需关注关闭原因是否包含代码修复或仅调整问题分类。

### 低——远程 Playwright 端点配置

[Issue #4617](https://github.com/agentscope-ai/QwenPaw/issues/4617) 已关闭。用户希望 `browser_use` 支持远程 Playwright 浏览器端点，以共享无头浏览器并减少本地资源占用。关闭并不代表功能已经实现，需关注后续独立 PR。

---

## 6. 功能请求与路线图信号

### 6.1 插件主题语义 Token

[Issue #8071](https://github.com/agentscope-ai/QwenPaw/issues/8071)

可能纳入插件 SDK 后续版本，尤其是 [PR #8764](https://github.com/agentscope-ai/QwenPaw/pull/8764) 已涉及 SDK 1.1 扩展。建议将主题 Token、权限边界和设计 Token 版本一起稳定。

### 6.2 对话存储生命周期管理

[Issue #8816](https://github.com/agentscope-ai/QwenPaw/issues/8816) 新提出统一管理 `sessions/*.json`、`history.db`、`mem_session/dialog/*.jsonl` 等多路径数据的需求，包括：

- 可恢复删除
- 分范围保留策略
- 数据可见性
- 过期数据与自动记忆清理

另一个相关长期需求是 [#6593](https://github.com/agentscope-ai/QwenPaw/issues/6593)，已关闭，但同样要求建立全局化清理页面。若没有统一的数据目录抽象，后续很容易继续出现“删除会话但遗留工作区、记忆和备份”的体验问题。

**下一版本可能性：中高。** 这是用户使用成本和数据治理的直接痛点，适合进入 2.3.1 或 2.4 路线。

### 6.3 统一清理与自动清理中心

[Issue #6593](https://github.com/agentscope-ai/QwenPaw/issues/6593)

诉求覆盖过期记忆、工具产物、协作文件、备份、历史会话和收件箱。此前已关闭，但缺少明确后续 PR，路线图信号仍强。

### 6.4 远程 Playwright 浏览器端点

[Issue #4617](https://github.com/agentscope-ai/QwenPaw/issues/4617)

适合服务器化、共享浏览器和降低本地资源占用的场景。当前 Issue 已关闭，尚无明确实现 PR，属于“需求关闭但路线未确认”的项目。

### 6.5 服务器端 Agent 与桌面代理客户端

[Issue #7002](https://github.com/agentscope-ai/QwenPaw/issues/7002) 已关闭，希望通过轻量代理连接服务器 Agent，同时保留本地浏览器及设备控制能力。

这是一个架构级需求，可能与插件化、远程设备能力和浏览器工具统一配置结合。当前无明确关联 PR，优先级尚不明确。

### 6.6 自动记忆与显式深度检索分离

[Issue #7019](https://github.com/agentscope-ai/QwenPaw/issues/7019) 已关闭，提出自动记忆只做粗筛，并向模型提示必要时继续调用 `memory_search` 深挖。该方向与上下文压缩和插件 SDK 的会话作用域能力相关，但暂无直接对应实现 PR。

---

## 7. 用户反馈摘要

### 7.1 真实使用痛点

- **移动端是当前明显短板**  
  用户在真实手机 Chrome 中发现消息正文、表格和代码块均无法正常使用，说明桌面优先设计尚未覆盖移动场景。  
  [Issue #8811](https://github.com/agentscope-ai/QwenPaw/issues/8811)

- **长任务缺少过程可见性**  
  定时任务运行时 Console 完全没有消息，用户无法区分“仍在运行”“卡住”还是“已失败”。  
  [Issue #8815](https://github.com/agentscope-ai/QwenPaw/issues/8815)

- **渠道故障的静默性影响信任**  
  QQ 和微信均出现配置或路由失效，但没有明确告警。对个人助手而言，渠道静默死亡比直接报错更难排查。  
  [Issue #8475](https://github.com/agentscope-ai/QwenPaw/issues/8475)、[Issue #8814](https://github.com/agentscope-ai/QwenPaw/issues/8814)

- **多 Agent 场景需要更严格的隔离**  
  微信凭据跨 Agent 共享问题表明，单进程部署下工作区、凭据和渠道状态仍可能发生串扰。  
  [PR #8756](https://github.com/agentscope-ai/QwenPaw/pull/8756)

- **数据长期积累缺少统一治理**  
  用户希望一键清理记忆、工具文件、备份、历史会话及工作区，并支持自动保留策略。  
  [Issue #6593](https://github.com/agentscope-ai/QwenPaw/issues/6593)、[Issue #8816](https://github.com/agentscope-ai/QwenPaw/issues/8816)

### 7.2 积极信号

- 维护者公开确认了“更轻、更易扩展”的长期方向，用户反馈已转化为实际插件化 PR。  
  [Issue #8808](https://github.com/agentscope-ai/QwenPaw/issues/8808)
- `v2.3.0.post1` 明确带出 Safari 修复、引用草稿改进及第三方 Agent 插件化，说明发布节奏仍在维持。  
  [v2.3.0.post1](https://github.com/agentscope-ai/QwenPaw/releases/tag/v2.3.0.post1)
- 社区提出的循环调用保护、凭据隔离和破坏性命令防护，已分别出现针对性修复。  
  [PR #8701](https://github.com/agentscope-ai/QwenPaw/pull/8701)、[PR #8756](https://github.com/agentscope-ai/QwenPaw/pull/8756)、[PR #7757](https://github.com/agentscope-ai/QwenPaw/pull/7757)

### 7.3 不满与升级体验

- `v2.3.0.post1` 后窄屏显示退化，用户明确认为问题与升级相关。  
  [Issue #8811](https://github.com/agentscope-ai/QwenPaw/issues/8811)
- 更新过程出现 WARNING 刷屏及渠道不可用，降低了补丁版本本应具备的升级稳定性。  
  [Issue #8812](https://github.com/agentscope-ai/QwenPaw/issues/8812)

---

## 8. 待处理积压

### 8.1 长期未合并的重要 PR

1. **插件 SDK 1.1 扩展**  
   [PR #8764](https://github.com/agentscope-ai/QwenPaw/pull/8764)  
   11 月 16 日创建，XXXL 规模，涉及核心插件 API、身份、权限、模型选择、历史作用域和生命周期，建议尽快拆分评审，否则可能阻塞多个插件迁移。

2. **本地模型管理插件化**  
   [PR #8499](https://github.com/agentscope-ai/QwenPaw/pull/8499)  
   10 月 29 日创建，涉及模型下载、llama.cpp 安装和配置兼容，属于高影响架构变更。

3. **MCP 插件化**  
   [PR #8469](https://github.com/agentscope-ai/QwenPaw/pull/8469)  
   10 月 28 日创建，涉及核心扩展能力，需明确插件生命周期、权限和升级兼容策略。

4. **Local Whisper SDK 插件化**  
   [PR #8431](https://github.com/agentscope-ai/QwenPaw/pull/8431)  
   10 月 26 日创建，建议与插件 SDK 1.1 的生命周期接口对齐。

5. **CJK Markdown 强调解析修复**  
   [PR #8133](https://github.com/agentscope-ai/QwenPaw/pull/8133)  
   10 月 8 日创建，至今仍未合并；问题明确、范围较集中，适合作为低风险维护 PR 优先落地。

6. **渠道显示边界隐藏内部脚手架**  
   [PR #8295](https://github.com/agentscope-ai/QwenPaw/pull/8295)  
   10 月 17 日创建，涉及内部上下文和系统通知不应直接透传给用户，建议尽快完成安全审查。

7. **计划任务与心跳任务 token 持久化**  
   [PR #8707](https://github.com/agentscope-ai/QwenPaw/pull/8707)  
   修复 Console 用量面板对 cron/heartbeat 消耗统计不足的问题。

8. **技能回滚备份保留至所有工作区恢复完成**  
   [PR #8784](https://github.com/agentscope-ai/QwenPaw/pull/8784)  
   涉及多工作区技能安装失败时的恢复完整性，兼具数据安全和可靠性价值。

### 8.2 长期未响应或需明确后续状态的 Issue

1. **远程 Playwright 端点**  
   [Issue #4617](https://github.com/agentscope-ai/QwenPaw/issues/4617)  
   5 月创建并已关闭，需确认是已实现、重复、还是暂不计划。

2. **服务器端 Agent 与桌面代理客户端**  
   [Issue #7002](https://github.com/agentscope-ai/QwenPaw/issues/7002)  
   8 月创建并已关闭，属于大型架构需求，建议明确纳入插件化/远程设备路线或给出替代方案。

3. **自动记忆粗筛与显式深搜分离**  
   [Issue #7019](https://github.com/agentscope-ai/QwenPaw/issues/7019)  
   8 月创建并已关闭，需确认是否已由上下文管理相关改动覆盖。

4. **统一清理页面**  
   [Issue #6593](https://github.com/agentscope-ai/QwenPaw/issues/6593)  
   7 月创建并已关闭，但与今日新提出的存储生命周期需求高度一致，存在重新开启或拆分为数据管理 epic 的可能。

5. **插件主题语义 Token**  
   [Issue #8071](https://github.com/agentscope-ai/QwenPaw/issues/8071)  
   虽创建于 10 月，但评论活跃达 21 条，是当前插件生态中最成熟、最具体的公共设计需求。

---

## 结论

QwenPaw 在 2026-11-19 展现出明显的架构收敛意图：**核心瘦身、插件化、SDK 正式化、安全治理增强**是主线。但当天发布补丁版本后出现移动端裁切、渠道默认不可用和诊断日志刷屏，说明发布验证仍有缺口。

下一阶段最值得维护者优先投入的方向是：

1. 修复微信响应路由 128 条上限和 QQ 配置静默重置；
2. 补齐窄屏 Console 回归；
3. 合并循环调用保护与 Shell 写操作审批；
4. 为定时任务提供实时可见性；
5. 尽快收敛并合并插件 SDK 1.1 及其依赖的插件化 PR；
6. 建立统一的数据存储生命周期与清理机制。

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/NousResearch/hermes-agent">NousResearch/hermes-agent</a></summary>

# Hermes Agent 项目动态日报

**统计日期：2026-11-19**  
**数据范围：过去 24 小时**  
**项目地址：** [NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent)

---

## 1. 今日速览

Hermes Agent 今日保持高活跃度：过去 24 小时共更新 **50 条 Issues**（44 条新开或仍活跃、6 条关闭）和 **50 条 PR**（43 条待合并、7 条已合并或关闭），另有 **1 个 canary 版本发布**。讨论重点集中在 **Desktop 会话一致性、Gateway 稳定性、模型选择与会话持久化、安全边界** 等生产级问题上。

今日修复已覆盖多个直接用户可见问题，包括 Desktop 流式回复未完成、Windows `HERMES_HOME` 路径别名、安装器违背用户选择安装 Gateway 服务、大段粘贴预览失败等。与此同时，仍有 **43 条 PR 等待审查、44 条 Issue 活跃**，说明项目推进速度较快，但合并与发布治理、回归验证和积压治理压力正在上升。

**项目健康度评估：中高活跃、偏承压。** 功能与修复产出明显，但安全、会话状态和跨平台行为仍存在系统性风险；今日的 canary 发布适合测试环境，不宜在缺乏变更说明的情况下直接用于关键生产实例。

---

## 2. 版本发布

### `v0.23.2+canary.20261118T064620Z`

- **发布时间：** 2026-11-18
- **Release 链接：** [v0.23.2+canary.20261118T064620Z](https://github.com/NousResearch/hermes-agent/releases/tag/v0.23.2%2Bcanary.20261118T064620Z)

#### 更新内容

现有公开 Release 数据只提供版本标签和 Hermes Desktop 下载信息，未包含完整 changelog。根据今日已关闭或待合并的修复，可以确认以下改动已进入或至少进入 `v0.23.2` 修复轨道：

- 修复 Desktop 中模型回复在最后一个工具调用结束后未正确封口、`message.complete` 文本为空的问题：[PR #156553](https://github.com/NousResearch/hermes-agent/pull/156553)
- 将 0 字节 `state.db` 视为“没有可用会话存储”，避免 SQLite 因缺少 `sessions` 表直接报错：[PR #153224](https://github.com/NousResearch/hermes-agent/pull/153224)
- macOS Kanban 派发时修复文件描述符类型错误导致的 worker 启动失败：[Issue #156768](https://github.com/NousResearch/hermes-agent/issues/156768)

#### 破坏性变更

- 提供的数据中**未发现明确声明的破坏性变更**。
- 但该版本为 **canary 预发布版本**，并非稳定版；其中仍可能包含尚未完成审查、尚未进入后续稳定渠道的变更。

#### 迁移注意事项

1. **不要将 canary 直接视为稳定升级包**，生产环境应先验证核心会话、工具调用和 Gateway 稳定性。
2. 升级前备份 `state.db` 及相关 WAL/SHM 文件，尤其关注 **0 字节数据库、损坏数据库和 WAL 恢复**场景。
3. 若使用 Windows Gateway，特别验证 `HERMES_HOME` 的长路径和 `\\?\` 前缀归一化；对应修复见 [PR #157697](https://github.com/NousResearch/hermes-agent/pull/157697)。
4. 验证 Desktop 流式回复是否正常结束，避免出现空 `message.complete`、Stop 按钮持续显示或回复无法封口。
5. 若使用 Kanban、cron 或多 profile 配置，应在升级后检查 worker 启动、收据恢复和 profile secret scope。

---

## 3. 项目进展

### 3.1 今日已合并或关闭的重要 PR

> 数据只提供 PR 状态和摘要，未提供具体合并时间与提交列表；以下按“已关闭/已合并或关闭”状态归类。

#### Desktop 回复封口与去重

- [PR #156553 — fix(gateway): a Desktop reply streamed before its last tool settles again](https://github.com/NousResearch/hermes-agent/pull/156553)  
  **状态：CLOSED**  
  修复模型回复与 housekeeping tool（如 `todo_list`、memory）交错时，Gateway 发出空文本 `message.complete`、回复无法封口的问题。这是影响 Desktop 交互可信度和会话完整性的高优先级问题。

#### 0 字节会话数据库容错

- [PR #153224 — fix(bot): treat a 0-byte state.db as no store](https://github.com/NousResearch/hermes-agent/pull/153224)  
  **状态：CLOSED**  
  修复初始化中断或数据库复制不完整时，Bot Chat 因 `state.db` 缺少 `sessions` 表而直接报错的问题，提升了损坏存储场景下的降级能力。

#### macOS Kanban worker 派发

- [Issue #156768 — kanban dispatch crash on macOS](https://github.com/NousResearch/hermes-agent/issues/156768)  
  **状态：CLOSED**  
  修复文件描述符被错误地作为路径传入 `_spawn_macos_worker`，导致 `TypeError: expected str, bytes or os.PathLike object, not int`，恢复 macOS 上 Kanban 任务派发能力。

### 3.2 已提交、等待合并的关键修复

- [PR #157687 — Desktop 大段粘贴按 `.txt` 文件名暂存](https://github.com/NousResearch/hermes-agent/pull/157687)  
  修复远程 Gateway 场景下，大文本粘贴被使用本地化显示标签作为文件名，导致预览返回 404。对应 [Issue #157667](https://github.com/NousResearch/hermes-agent/issues/157667)。

- [PR #157689 — 安装器尊重“不安装 Gateway 服务”](https://github.com/NousResearch/hermes-agent/pull/157689)  
  修复 `install.sh` 向导中用户拒绝安装服务后，安装器仍继续安装并覆盖配置。对应 [Issue #157677](https://github.com/NousResearch/hermes-agent/issues/157677)。

- [PR #157696 — `--version` 显示实际运行 commit](https://github.com/NousResearch/hermes-agent/pull/157696)  
  修复本地 checkout 落后于 `origin/main` 时，版本标签错误显示远端 commit 的问题。对应 [Issue #157684](https://github.com/NousResearch/hermes-agent/issues/157684)。

- [PR #157697 — 统一 Windows `\\?\` 路径的控制管道标识](https://github.com/NousResearch/hermes-agent/pull/157697)  
  修复同一个 `HERMES_HOME` 因路径前缀不同生成不同控制管道名和注册表键的问题，属于 Windows Gateway 生命周期修复。

- [PR #157691 — Desktop 模型切换成功后再回报](https://github.com/NousResearch/hermes-agent/pull/157691)  
  修复独立 slash worker 已报告模型切换成功，但 live session 尚未提交、实际仍运行于旧 provider 的竞态问题。

- [PR #157695 — A2A 已完成任务标识保持稳定](https://github.com/NousResearch/hermes-agent/pull/157695)  
  修复重复读取任务时重新生成 `artifactId`、`messageId` 和状态时间戳的问题，改善 A2A 客户端的一致性。

### 3.3 整体推进判断

今日至少有三类实质进展：

1. **核心交互可靠性提升：** Desktop 流式回复、模型切换成功语义、大粘贴预览得到修复。
2. **部署与跨平台韧性提升：** macOS Kanban、Windows 路径归一化、安装器服务选择获得修复。
3. **生态一致性提升：** A2A 任务标识、插件目录和配置行为持续规范化。

整体上，项目正在从“功能快速扩张”进入“生产可靠性收口”阶段。不过，尚不能仅凭 PR 关闭状态确认所有修复已进入 canary；发布说明缺失使版本级可追溯性仍然不足。

---

## 4. 社区热点

### 4.1 Desktop 会话记录随机重复、错序或丢失

- [Issue #137287 — Desktop transcript randomly duplicates, scatters/misorders, or drops messages](https://github.com/NousResearch/hermes-agent/issues/137287)
- **评论数：18，👍：1，状态：OPEN**
- **热度：最高**

用户反馈 Desktop 的聊天记录会随机出现重复消息、消息散落错位，甚至整条消息消失。这是直接破坏会话可信度的问题：用户无法确认模型究竟接收和返回了什么，也会影响后续上下文、审计与错误复现。

从 Issue 标签 `sweeper:risk-session-state` 看，该问题可能已被纳入会话状态风险巡检，但当前没有对应 fix PR 出现在今日重点列表中。

### 4.2 单次 20 秒 receipt timeout 破坏整个 turn

- [Issue #147839 — a single 20 s worker_receipt_timeout poisons the store and destroys the turn](https://github.com/NousResearch/hermes-agent/issues/147839)
- **评论数：13，👍：1，状态：OPEN，P1**

用户报告 Kanban worker 的一次收据超时会导致整轮任务失败，最终只显示 “No reply”。诉求不是单纯延长超时，而是让**单次子任务或收据异常不会污染共享状态、不会造成整轮不可恢复**。

这是高优先级稳定性问题，涉及 session persistence、worker receipt 和 Gateway turn 的状态隔离。数据中未见明确对应修复 PR。

### 4.3 Windows Gateway 崩溃后重启发生事件循环死锁

- [Issue #41219 — Gateway event loop deadlock within 30–60s of startup on Windows after first crash](https://github.com/NousResearch/hermes-agent/issues/41219)
- **评论数：9，状态：OPEN，P2**

Gateway 在 Windows 首次崩溃后重启，通常在 30–60 秒内稳定冻结：进程仍存活并占用内存，但 asyncio 事件循环停止工作。诉求集中在**崩溃恢复可靠性**和**可观测性**，需要明确死锁发生位置及退出/重启策略。

今日的 [PR #157697](https://github.com/NousResearch/hermes-agent/pull/157697) 修复了 Windows `HERMES_HOME` 别名导致的控制管道不一致，可能降低部分“重启后无法控制”的发生概率，但尚不足以确认解决了该事件循环死锁。

### 4.4 模型选择器隐藏当前 provider 的模型

- [Issue #108462 — `/model` picker hides active provider's models](https://github.com/NousResearch/hermes-agent/issues/108462)
- **评论数：6，状态：OPEN，P2**

当自定义 provider 与 OpenRouter 等当前 provider 暴露相同 model ID 时，`/model` 选择器会错误隐藏当前 provider 的模型。这反映出模型目录的**去重、归属和显示优先级**设计仍不清晰。

另一个相关问题是 [Issue #142611 — OpenRouter guardrail 过滤未覆盖 fallback 与辅助 lane](https://github.com/NousResearch/hermes-agent/issues/142611)。用户希望“只显示 guardrail 批准模型”的承诺不仅作用于主 `/model` 选择器，也覆盖 fallback、auxiliary 和 delegated workload，否则安全策略可能在降级路径上被绕过。

### 4.5 Gateway 完成通知可被截断为空

- [Issue #150617 — completion notification ignores `completion_output_chars`](https://github.com/NousResearch/hermes-agent/issues/150617)
- **评论数：6，👍：1，状态：OPEN，P2**

Bot Mode 私聊完成通知没有正确遵守 `completion_output_chars`，并且在截断逻辑下可能把输出尾部裁成 0 字符，表现为回复“已送达但内容为空”。这是典型的**完成事件与实际正文不一致**，会削弱自动化和消息集成场景的可信度。

### 4.6 TUI 配额展示成为明确需求

- [Issue #16643 — Show provider account limits in TUI status bar](https://github.com/NousResearch/hermes-agent/issues/16643)
- **评论数：4，状态：OPEN，P3**

用户希望在请求失败前看到订阅配额和窗口消耗，而不是只在失败后排查。相关 PR 已出现：

- [PR #152964 — opt-in weekly_usage status-bar field](https://github.com/NousResearch/hermes-agent/pull/152964)

这表明需求已经从单纯 issue 推进到实现阶段。

---

## 5. Bug 与稳定性

### P1：高优先级

| 问题 | 影响 | 修复状态 |
|---|---|---|
| [Issue #147839 — 单次 worker receipt timeout 破坏整个 turn](https://github.com/NousResearch/hermes-agent/issues/147839) | 用户只看到“No reply”，共享存储被异常状态污染，整轮恢复困难 | **未发现明确 fix PR** |
| [Issue #131751 — Desktop `@file` 建议使用错误 profile 的 Docker sandbox](https://github.com/NousResearch/hermes-agent/issues/131751) | 可能为其他 profile 聊天创建并遗留容器，存在 profile 隔离和资源泄漏风险 | **未发现明确 fix PR** |
| [Issue #100807 — MCP 工具名修复可能误路由到其他真实工具](https://github.com/NousResearch/hermes-agent/issues/100807) | 幻觉出的工具名可能被模糊匹配到不相关工具，引发错误副作用 | **未发现明确 fix PR** |
| [Issue #157615 — 带字段标签的 secret dump 绕过脱敏](https://github.com/NousResearch/hermes-agent/issues/157615) | `password: TYPE = "value"` 一类文本可原样进入工具输出 | **未发现明确 fix PR** |

### P2：严重稳定性或核心行为错误

| 问题 | 影响 | 修复状态 |
|---|---|---|
| [Issue #137287 — Desktop transcript 重复、错序、丢消息](https://github.com/NousResearch/hermes-agent/issues/137287) | 会话内容和上下文不可信 | **未发现明确 fix PR** |
| [Issue #41219 — Windows Gateway 重启后事件循环死锁](https://github.com/NousResearch/hermes-agent/issues/41219) | Gateway 进程存活但不处理事件 | [PR #157697](https://github.com/NousResearch/hermes-agent/pull/157697) 可能改善部分路径，但不能确认解决死锁 |
| [Issue #150617 — 完成通知输出可能被截成空](https://github.com/NousResearch/hermes-agent/issues/150617) | Bot Mode DM 收到空回复 | **未发现明确 fix PR** |
| [Issue #107403 — `search_files` 因不可读兄弟目录丢弃全部结果](https://github.com/NousResearch/hermes-agent/issues/107403) | 搜索工具在部分目录不可读时完全失效 | **未发现明确 fix PR** |
| [Issue #117894 — background review 内存写入队列无界且不可见](https://github.com/NousResearch/hermes-agent/issues/117894) | 被 gate 的操作不断积压，用户无法得知队列状态 | **未发现明确 fix PR** |
| [Issue #149223 — Hosted-room 每轮重开 SQLite 连接](https://github.com/NousResearch/hermes-agent/issues/149223) | Gateway CPU 随房间历史增长，持续负载升高 | **未发现明确 fix PR** |
| [Issue #155638 — Matrix receipt recovery 无限重试](https://github.com/NousResearch/hermes-agent/issues/155638) | `UnscopedSecretError` 阻塞收据完成，形成恢复死循环 | **未发现明确 fix PR** |
| [Issue #149375 — Live Bot Chat 审批超时且发起端无通知](https://github.com/NousResearch/hermes-agent/issues/149375) | 审批无法及时处理，任务被动超时 | **未发现明确 fix PR** |
| [Issue #157415 — 被拒绝的 turn 不更新 activity，也不进入 transcript](https://github.com/NousResearch/hermes-agent/issues/157415) | 会话排序、可见性与状态追踪不一致 | **未发现明确 fix PR** |
| [Issue #157667 — Desktop 大段粘贴预览 404](https://github.com/NousResearch/hermes-agent/issues/157667) | 远程 Gateway 下大文本无法预览 | **已有** [PR #157687](https://github.com/NousResearch/hermes-agent/pull/157687) |
| [Issue #157677 — 拒绝安装 Gateway 后安装器仍安装](https://github.com/NousResearch/hermes-agent/issues/157677) | 违背用户明确选择，覆盖持久化配置 | **已有** [PR #157689](https://github.com/NousResearch/hermes-agent/pull/157689) |
| [Issue #157684 — `--version` 显示错误 commit](https://github.com/NousResearch/hermes-agent/issues/157684) | 误导版本诊断与升级判断 | **已有** [PR #157696](https://github.com/NousResearch/hermes-agent/pull/157696) |

### P3：重要但影响范围较窄

- [Issue #95803 — 工具名自动修复日志绕过 `--quiet`](https://github.com/NousResearch/hermes-agent/issues/95803)：headless 日志被大量输出淹没；未发现明确 fix PR。
- [Issue #16643 — TUI 状态栏不显示 provider 配额](https://github.com/NousResearch/hermes-agent/issues/16643)：已有 [PR #152964](https://github.com/NousResearch/hermes-agent/pull/152964)。
- [Issue #96691 — Hindsight dashboard 刷新后丢失 `api_url/api_key`](https://github.com/NousResearch/hermes-agent/issues/96691)：未发现明确 fix PR。
- [Issue #100807](https://github.com/NousResearch/hermes-agent/issues/100807) 虽标签未标安全，但误调用真实工具具有副作用风险，建议按高优先级处理。

### 安全与隔离专项

今日最值得维护者优先处理的风险不是普通 UI Bug，而是三类边界问题：

1. **跨 profile 隔离：** [Issue #131751](https://github.com/NousResearch/hermes-agent/issues/131751)。
2. **工具调用误路由：** [Issue #100807](https://github.com/NousResearch/hermes-agent/issues/100807)。
3. **敏感信息泄漏：** [Issue #157615](https://github.com/NousResearch/hermes-agent/issues/157615)。

这些问题即使未标记为 P1，也不应仅按普通功能缺陷排期。

---

## 6. 功能请求与路线图信号

### 6.1 高概率进入近期版本

#### TUI 配额状态栏

- Issue：[ #16643 — Show provider account limits in the TUI status bar](https://github.com/NousResearch/hermes-agent/issues/16643)
- PR：[ #152964 — opt-in weekly_usage status-bar field](https://github.com/NousResearch/hermes-agent/pull/152964)

已有明确实现，需求与实现均聚焦于 provider 订阅窗口消耗；适合近期合入，但应确认 Anthropic、Codex 等 provider 的字段一致性及隐私表现。

#### Bot Chat 团队协作状态卡

- PR：[ #144792 — Bot Chat shows a “Waiting on teammates” card](https://github.com/NousResearch/hermes-agent/pull/144792)

用于展示 `message_agent` 委派的 queued、picked up、working、waiting on you、failed 等状态。这直接回应多 Bot 协作中“任务去哪了、是否在等我”的核心痛点，且已有成熟实现，具备进入近期版本的基础。

#### Desktop 回复引用与侧聊

- Issue：[ #156998 — highlight text in a reply → Reply / Start a side chat](https://github.com/NousResearch/hermes-agent/issues/156998)
- **当前无对应 PR。**

需求与 Claude 风格交互一致，能显著改善 Desktop 的上下文操作效率，但涉及 composer chip、引用序列化及侧聊会话模型，工作量中等，下一版本是否纳入取决于 Desktop 路线图优先级。

### 6.2 可能进入后续版本

#### Gateway 外部事件注入现有会话

- [Issue #61096 — Allow external events to inject messages into a live gateway session](https://github.com/NousResearch/hermes-agent/issues/61096)

Webhook、cron 或另一 Agent 可向正在运行的 Telegram/Discord/Slack 会话注入消息，并保持同一线程上下文。该能力对自动化 Agent 架构价值很高，但会引入并发写入、来源权限和会话状态风险，需要先定义事件授权与冲突处理机制。

#### Anthropic 兼容代理的 thinking block 保留

- [Issue #120723 — opt-in to preserve signed thinking blocks](https://github.com/NousResearch/hermes-agent/issues/120723)

需求是允许用户对可信第三方 Anthropic 兼容代理显式保留签名 thinking block。实现价值明确，但涉及供应链信任与协议兼容性，更可能作为配置型选项进入后续版本。

#### Headless Webapp 部署体验

- [Issue #147984 — print SSH tunnel command and add `hermes webapp --publish`](https://github.com/NousResearch/hermes-agent/issues/147984)

同时解决无显示器服务器上的连接提示和远程发布。属于部署能力扩展，具有明确用户价值；但 `--publish` 会引入暴露面和认证要求，优先级可能低于纯本地改进。

#### Desktop 文件预览插件扩展点

- [Issue #67693 — add FILE_PREVIEW_AREA for custom file preview handlers](https://github.com/NousResearch/hermes-agent/issues/67693)

这表明 Desktop 插件 SDK 正从面板、路由、状态栏、composer 等基础能力，向专业文件处理场景扩展。当前无对应 PR，更多是中期生态信号。

### 6.3 更偏交互增强

- [Issue #147317 — TUI composer ghost-text suggestion](https://github.com/NousResearch/hermes-agent/issues/147317)  
  目标是对齐 Claude Code 的下一提示词建议体验。需求明确，但会涉及推理成本、延迟、隐私和快捷键冲突，暂未见 PR。

---

## 7. 用户反馈摘要

### 7.1 用户最在意的不是“功能不够”，而是“状态不可信”

高频反馈集中在以下场景：

- **Desktop 消息记录不可信：** 消息会重复、错序或消失，见 [Issue #137287](https://github.com/NousResearch/hermes-agent/issues/137287)。
- **成功提示与真实状态不一致：**
  - 模型切换先报成功，实际 session 仍在旧 provider，见 [PR #157691](https://github.com/NousResearch/hermes-agent/pull/157691)。
  - Bot Mode 通知说完成，但正文可能为空，见 [Issue #150617](https://github.com/NousResearch/hermes-agent/issues/150617)。
  - 被拒绝的 turn 不出现在 transcript，见 [Issue #157415](https://github.com/NousResearch/hermes-agent/issues/157415)。

这些反馈反映出当前最重要的产品诉求是：**让用户能确定消息、模型和任务状态与系统实际执行一致。**

### 7.2 自动化与无头部署用户更关注可恢复性

- 单次 20 秒 receipt timeout 就让整轮显示“No reply”：[Issue #147839](https://github.com/NousResearch/hermes-agent/issues/147839)。
- macOS Kanban worker 因路径类型错误无法启动：[Issue #156768](https://github.com/NousResearch/hermes-agent/issues/156768)。
- 安装器忽略用户拒绝服务安装的决定：[Issue #157677](https://github.com/NousResearch/hermes-agent/issues/157677)。
- 自动修复提示绕过 `--quiet`，24 小时产生约 4,800 行噪声：[Issue #95803](https://github.com/NousResearch/hermes-agent/issues/95803)。

这类用户的共同诉求是：**失败要局部化、超时要可配置、日志要可控、安装行为要尊重显式选择。**

### 7.3 多 profile、多 provider 和 Bot 协作场景复杂度较高

- Desktop 文件建议使用启动 profile 的 Docker sandbox：[Issue #131751](https://github.com/NousResearch/hermes-agent/issues/131751)。
- 自定义 provider 与当前 provider 共享模型 ID 时，模型选择器显示错误：[Issue #108462](https://github.com/NousResearch/hermes-agent/issues/108462)。
- Live Bot Chat 审批超时但发起端没有可操作提示：[Issue #149375](https://github.com/NousResearch/hermes-agent/issues/149375)。
- 用户希望看到 provider 配额，避免请求失败：[Issue #16643](https://github.com/NousResearch/hermes-agent/issues/16643)。

用户正在把 Hermes 用于多 profile、多 provider、多 Agent 协作和长期自动化；下一阶段的竞争力将越来越取决于**状态隔离、配额透明度和跨工作流可观测性**。

### 7.4 相对正面的信号

虽然今日主要数据来自 Bug，但部分需求获得了明确实现支持：

- Bot Chat 协作状态卡已有较完整 PR：[PR #144792](https://github.com/NousResearch/hermes-agent/pull/144792)。
- provider 周配额显示已有可启用实现：[PR #152964](https://github.com/NousResearch/hermes-agent/pull/152964)。
- Desktop 模型切换成功语义已有人提交修复：[PR #157691](https://github.com/NousResearch/hermes-agent/pull/157691)。
- 安装器和大粘贴预览问题均出现当日修复：[PR #157689](https://github.com/NousResearch/hermes-agent/pull/157689)、[PR #157687](https://github.com/NousResearch/hermes-agent/pull/157687)。

这表明社区响应和修复投入较好，但 PR 尚未合并意味着用户仍可能继续受影响。

---

## 8. 待处理积压

### 8.1 高风险、长周期未解决事项

| Issue | 创建时间 | 仍存风险 |
|---|---:|---|
| [Issue #41219 — Windows Gateway crash 后事件循环死锁](https://github.com/NousResearch/hermes-agent/issues/41219) | 2026-06-07 | Windows Gateway 崩溃恢复长期缺乏根治方案 |
| [Issue #100807 — MCP 工具名修复误路由](https://github.com/NousResearch/hermes-agent/issues/100807) | 2026-09-02 | 幻觉工具名可能被路由到真实工具，存在错误副作用 |
| [Issue #108462 — `/model` 隐藏当前 provider 模型](https://github.com/NousResearch/hermes-agent/issues/108462) | 2026-09-11 | 多 provider 场景长期存在选择与路由混乱 |
| [Issue #117894 — background review 无界隐藏队列](https://github.com/NousResearch/hermes-agent/issues/117894) | 2026-09-21 | 内存写操作可能无限积压且无用户可见反馈 |
| [Issue #137287 — Desktop transcript 损坏](https://github.com/NousResearch/hermes-agent/issues/137287) | 2026-10-12 | 会话可信度问题长期存在，且评论热度最高 |
| [Issue #131751 — Desktop profile/Docker 隔离错误](https://github.com/NousResearch/hermes-agent/issues/131751) | 2026-10-02 | 跨 profile 容器创建和孤儿资源风险仍未见对应 PR |
| [Issue #120723 — Anthropic thinking block 保留](https://github.com/NousResearch/hermes-agent/issues/120723) | 2026-09-23 | 已形成明确能力需求，但尚未落地 |
| [Issue #61096 — 外部事件注入 live session](https://github.com/NousResearch/hermes-agent/issues/61096) | 2026-07-08 | 高价值集成能力长期停留在设计阶段 |

### 8.2 PR 审查积压

过去 24 小时有 **43 条 PR 待合并**。今日值得优先审查的包括：

1. [PR #157691 — Desktop 模型切换提交竞态](https://github.com/NousResearch/hermes-agent/pull/157691)  
   直接影响“切换是否真正生效”。

2. [PR #156233 — Telegram 带 caption 的图片应同时送达图片和文字](https://github.com/NousResearch/hermes-agent/pull/156233)  
   修复多模态消息丢失，已有 `ci-reviewed` 标记。

3. [PR #130879 — 远程媒体投递定位实际 sandbox](https://github.com/NousResearch/hermes-agent/pull/130879)  
   影响 SSH、Daytona、Modal 等远程后端的媒体回传，标记包含 session state 和 message delivery 风险。

4. [PR #157698 — 禁止 CLI 覆盖 launcher 的 session source](https://github.com/NousResearch/hermes-agent/pull/157698)  
   保护会话来源 provenance，避免不同启动界面互相覆盖追踪信息。

5. [PR #145020 — `/compress here N` 边界语义修复](https://github.com/NousResearch/hermes-agent/pull/145020)  
   修复用户明确指定保留范围时仍被默认保护窗口叠加的问题。

6. [PR #147812 — HTTP 410 模型退役分类](https://github.com/NousResearch/hermes-agent/pull/147812)  
   将已退役模型准确识别为 `model_not_found`，有助于 fallback 和错误提示。

7. [PR #104326 — Cron 输出按修改时间选取](https://github.com/NousResearch/hermes-agent/pull/104326)  
   修复按文件名字典序选择输出导致读到旧任务结果的问题。

8. [PR #157013 — 可执行示例发布前必须审查](https://github.com/NousResearch/hermes-agent/pull/157013)  
  强化指南、Skill 和 MCP 示例的供应链审查要求，属于必要的安全治理工作。

### 8.3 建议维护者优先处理顺序

1. **先处理数据与会话正确性：** transcript 损坏、receipt timeout 污染、模型切换假成功。
2. **再处理隔离与泄密：** profile 沙箱串用、MCP 工具误路由、secret 脱敏绕过。
3. **随后处理跨平台恢复：** Windows Gateway 死锁、Gateway 崩溃重启、远程媒体投递。
4. **快速合并低风险、已有回归验证的修复：** 大粘贴、安装器选择、版本 commit、0 字节数据库、Telegram caption。
5. **建立 Release changelog 和 PR 状态看板：** 当前 canary Release 未给出完整变更说明，43 条待合并 PR 也使用户难以判断哪些修复已进入构建。

---

## 今日结论

Hermes Agent 今日呈现出明显的“双线推进”特征：一方面，Desktop、Gateway、Bot 协作和跨平台部署能力持续扩张；另一方面，会话一致性、状态原子性、profile 隔离和安全脱敏暴露出较多深层问题。

最积极的信号是，**多个用户可见问题已有对应修复 PR**，包括 Desktop 回复封口、大粘贴预览、安装器选择、版本诊断和模型切换；社区提出的配额展示与团队任务状态也已有可实现方案。

主要风险是，**43 条待合并 PR、44 条活跃 Issue 和若干长期未决的高影响缺陷**，说明维护吞吐、审查速度与回归保障仍需加强。下一阶段项目健康度的关键，不在于继续增加多少功能入口，而在于确保每个状态变化都能被准确提交、持久化、展示和恢复。

**综合评级：中高活跃、修复响应积极，但会话状态、安全隔离和跨平台稳定性仍是主要风险区。**

</details>

<details>
<summary><strong>OpenHuman</strong> — <a href="https://github.com/tinyhumansai/openhuman">tinyhumansai/openhuman</a></summary>

# OpenHuman 项目动态日报

**统计日期：2026-11-19**  
**观察窗口：过去 24 小时**  
**数据范围：GitHub Issues、Pull Requests 与 Releases**

---

## 1. 今日速览

过去 24 小时项目共更新 **3 个 Issues** 和 **1 个 PR**，其中 Issue 均为新建，暂无讨论或点赞；唯一 PR **#8756 已关闭但未合并**，因此统计期内没有形成已合入的代码变更。今日问题集中在 **Linux 兼容性、macOS 引导层布局和前端控件样式** 三个方向，显示当前活跃度为**中等偏低**，反馈量不算高，但涉及桌面端安装启动与关键首次使用体验。社区互动较弱，所有 Issue 均为 **0 评论、0 点赞**，尚未形成有效讨论或共识。同期没有新版本发布，也没有明确的下一版本功能排期信号。

**项目健康度判断：中等偏低。**  
问题发现及时，但响应、认领、讨论和修复闭环均不明显；当前更需要维护者确认 Issue 分级、安排修复并恢复版本兼容性承诺。

---

## 3. 项目进展

### CI：托管覆盖率任务调整并行度

- **PR #8756 — CLOSED（未合并）**  
  [链接：#8756](https://github.com/tinyhumansai/openhuman/pull/8756)  
  **作者：** @CodeGhost21  
  **提议内容：** 将 hosted coverage lanes（`rust-cov-*`）的 `CARGO_BUILD_JOBS` 从 `1` 调整为 `2`，涉及 `scripts/ci/self-hosted/lanes-plan.mjs` 和 `ci-lanes.yml`；EX63 lanes 保持不变。  
  **目标：** 提升 CI 覆盖率构建速度，缩短托管环境中的 Rust 编译等待时间。

**推进评估：**

- PR 已被关闭且没有合并记录，因此相关调整**尚未进入主分支**。
- 该提案体现了对 CI 吞吐量和任务耗时的关注，但没有形成可确认的工程产出。
- 今日没有其他已合并或关闭的重要 PR，也没有新 Release。

---

## 4. 社区热点

今日没有高热度讨论项。3 个 Issue 均为 **0 评论、0 点赞**，唯一 PR **#8756** 同样没有可见评论或点赞，因此无法从社区互动量识别明确的热门议题。

按技术影响和用户关注价值，值得维护者优先关注以下问题：

1. **Ubuntu 22.04 无法启动 OpenHuman**  
   [Issue #8759](https://github.com/tinyhumansai/openhuman/issues/8759)  
   这是今日最严重的兼容性问题，可能令现有 Linux 用户完全无法使用桌面客户端。

2. **首次使用引导的设置提示层越界**  
   [Issue #8760](https://github.com/tinyhumansai/openhuman/issues/8760)  
   问题发生在 onboarding 的第 4 步，并涉及 macOS 原生窗口按钮区域，直接影响新手引导的可读性和完成率。

3. **思考级别控件出现重叠样式**  
   [Issue #8761](https://github.com/tinyhumansai/openhuman/issues/8761)  
   属于前端视觉回归或组件样式问题，严重度低于启动失败，但会降低聊天输入区的专业感和可用性。

4. **托管覆盖率 CI 并行度调整**  
   [PR #8756](https://github.com/tinyhumansai/openhuman/pull/8756)  
   没有形成社区讨论；其关闭状态也意味着需要维护者说明是方案被放弃、等待重构，还是应由其他方式处理。

> **热点判断：** 今日没有“讨论最活跃”的 Issue/PR；更值得关注的是问题严重度，而不是互动数量。

---

## 5. Bug 与稳定性

### 严重

#### 1. Ubuntu 22.04 安装后无法启动，依赖 GLIBC 2.38/2.39

- **Issue：** [#8759](https://github.com/tinyhumansai/openhuman/issues/8759)
- **现象：** `OpenHuman_0.64.15_amd64.deb` 可在 Ubuntu 22.04 系系统上完成安装，但应用启动即退出。
- **复现环境：** Pop!_OS 22.04 LTS，基于 Ubuntu 22.04 “jammy”，glibc 2.35。
- **根因线索：** `/usr/bin/OpenHuman` 要求 `GLIBC_2.39`，同时还依赖 `GLIBC_2.38`；当前系统最高仅提供 glibc 2.35。
- **影响范围：** 至少影响 glibc 低于 2.38 的 Ubuntu 22.04 用户，可能也影响其他较旧 Linux 发行版。
- **严重度：高。** 这是明确的启动阻断问题，不是局部功能异常。
- **已有 fix PR：** **无。**
- **建议：**
  - 在 CI 和发布流程中加入 Ubuntu 22.04 的 `.deb` 启动冒烟测试；
  - 核查构建镜像、Electron/Tauri 运行时和原生依赖的 glibc 基线；
  - 若新版运行时无法兼容 Ubuntu 22.04，应明确最低支持版本，并提供旧版下载或替代构建方案。

### 中等

#### 2. 引导流程第 4 步提示层超出窗口顶部

- **Issue：** [#8760](https://github.com/tinyhumansai/openhuman/issues/8760)
- **现象：** 设置步骤的 tooltip 绘制在窗口上边缘之外，进度条、步骤标题和 `4 / 7` 计数不可见，部分内容还位于 macOS traffic lights 下方。
- **影响：** 破坏 onboarding 引导的可读性，可能导致用户无法理解当前步骤或正常完成引导。
- **严重度：中。**
- **已有 fix PR：** **无。**
- **建议：** 对顶部空间不足场景增加 tooltip 自动翻转或下移逻辑，并补充不同窗口尺寸与缩放比例下的回归测试。

### 低

#### 3. 思考级别控件渲染为两个重叠胶囊

- **Issue:** [#8761](https://github.com/tinyhumansai/openhuman/issues/8761)
- **现象：** 聊天 composer 工具栏中的 thinking-level 控件没有呈现为单一 chip；仪表图标和 `思考：低 ⌄` 标签分别形成圆角表面并发生重叠。
- **影响：** 属于视觉样式和组件组合问题，不影响核心功能，但会降低交互清晰度与界面一致性。
- **严重度：低。**
- **已有 fix PR：** **无。**
- **建议：** 检查控件容器、徽标与标签是否被重复应用 chip 样式，并通过视觉回归测试固定预期。

### 稳定性观察

今日没有已确认的崩溃日志、回归测试失败或线上服务事故记录。现有问题中，只有 **#8759** 明确构成应用无法启动的阻断级故障；另外两项属于 UI 层稳定性问题。

---

## 6. 功能请求与路线图信号

今日数据中**没有明确的功能请求 Issue，也没有已合并的功能 PR**，因此无法从现有证据判断某一用户需求已被纳入下一版本。

可观察到的产品信号如下：

- **Linux 发行版兼容性是近期版本工作的重点。**  
  [#8759](https://github.com/tinyhumansai/openhuman/issues/8759) 暴露了当前 `.deb` 构建与 Ubuntu 22.04 的兼容性缺口。若维护者继续维护 Ubuntu 22.04 用户群，兼容性修复很可能成为下一补丁版本或下一次重新发布的核心内容，但目前没有 fix PR 或 Release 说明可供确认。

- **首次使用体验仍有收尾空间。**  
  [#8760](https://github.com/tinyhumansai/openhuman/issues/8760) 和 [#8761](https://github.com/tinyhumansai/openhuman/issues/8761) 都指向桌面端布局与视觉一致性问题，可能适合合并为一次前端体验修复发布；但没有排期证据。

- **CI 覆盖率任务效率曾被提案优化。**  
  [#8756](https://github.com/tinyhumansai/openhuman/pull/8756) 提议让 hosted coverage lanes 使用两个 Rust 编译任务，但 PR 已关闭且未合并，不能视为下一版本已确定事项。维护者应说明是否改用其他 CI 调度方案。

---

## 7. 用户反馈摘要

今日 3 个 Issue 均为 **0 评论**，没有可提炼的回复、追问、点赞或满意/不满意表态。因此，以下内容主要来自 Issue 描述所反映的使用场景，不能视为经过社区讨论验证的普遍反馈。

### 真实使用痛点

- **Linux 用户安装成功却无法启动**  
  用户已经在 Ubuntu 22.04 衍生系统上完成安装，说明其期望获得可直接使用的官方 Linux 桌面包；但运行时 glibc 要求超出系统能力，造成“能安装、不能运行”的明显落差。  
  来源：[#8759](https://github.com/tinyhumansai/openhuman/issues/8759)

- **新手引导在 macOS 上被窗口边界截断**  
  反馈集中在 onboarding 第 4 步，表明用户实际走入了设置引导流程；提示层遮挡和越界可能迫使用户依赖猜测完成流程。  
  来源：[#8760](https://github.com/tinyhumansai/openhuman/issues/8760)

- **聊天输入区控件视觉不统一**  
  thinking-level 控件已被用户主动测试和反馈，说明该功能正在被使用；重叠 pill 会让用户难以判断它是一个可点击的整体还是两个独立控件。  
  来源：[#8761](https://github.com/tinyhumansai/openhuman/issues/8761)

### 满意或不满意信号

- **没有正向反馈。** 今日没有点赞、感谢、解决确认或“升级后改善”的评论。
- **主要不满意点：** Linux 启动兼容性、macOS 引导层可用性、聊天工具栏视觉一致性。
- **信息缺口：** 所有 Issue 都缺少评论，尚无法判断复现范围、发生频率、临时规避方式以及用户对修复版本的期望。

---

## 8. 待处理积压

### 需要立即处理

1. **为 Ubuntu 22.04 启动失败指定维护者并确认支持策略**  
   [#8759](https://github.com/tinyhumansai/openhuman/issues/8759)  
   当前无评论、无点赞、无修复 PR。应尽快确认是修复构建兼容性，还是正式提高最低 Linux/glibc 版本；在结论前至少应向受影响用户提供可执行说明。

2. **修复 onboarding 顶部提示层越界**  
   [#8760](https://github.com/tinyhumansai/openhuman/issues/8760)  
   新建且未响应。该问题直接影响首次使用流程，不宜长期停留在开放状态。

3. **统一 thinking-level 控件的 chip 样式**  
   [#8761](https://github.com/tinyhumansai/openhuman/issues/8761)  
   新建且未响应。建议与近期 composer 样式调整一起修复，并增加视觉回归覆盖。

### 需要补充闭环

4. **解释 CI 覆盖率并行度 PR 被关闭的原因**  
   [#8756](https://github.com/tinyhumansai/openhuman/pull/8756)  
   PR 已被关闭但未合并。若方案已经放弃，建议在 PR 中说明原因；若仍需要优化，应重新提交并说明预期收益与资源成本。

### 积压判断

由于数据只覆盖过去 24 小时，无法确认上述 Issue 是否属于“长期未响应”，也没有提供历史开放 Issue/PR 队列。不过就当前窗口而言，**3 个新 Issue 全部无评论、无点赞，且都没有关联 fix PR**，说明响应闭环尚未建立。

---

## 今日结论

OpenHuman 今日的主要风险不是功能扩张，而是**桌面客户端兼容性和关键交互细节尚未形成修复闭环**。最高优先级是 [#8759](https://github.com/tinyhumansai/openhuman/issues/8759) 的 Ubuntu 22.04 启动失败；随后是 [#8760](https://github.com/tinyhumansai/openhuman/issues/8760) 的 macOS onboarding 布局问题和 [#8761](https://github.com/tinyhumansai/openhuman/issues/8761) 的控件样式回归。唯一 CI 优化 PR [#8756](https://github.com/tinyhumansai/openhuman/pull/8756) 未合并，统计期内没有可确认的代码推进，也没有新版本发布。

</details>

---
*本日报由 [Big Model Radar](https://github.com/96loveslife/big_model_radar) 自动生成。*
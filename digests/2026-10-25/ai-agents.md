# OpenClaw 生态日报 2026-10-25

> Issues: 500 | PRs: 500 | 覆盖项目: 8 个 | 生成时间: 2026-10-25 04:05 UTC

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

**日期：2026-10-25**  
**统计口径：过去 24 小时 GitHub 活跃记录；Issue/PR 总榜按评论量筛选**

---

## 1. 今日速览

OpenClaw 过去 24 小时记录了 **500 条 Issue 更新**和 **500 条 PR 更新**，并发布 **2 个版本**，整体属于高活跃开发状态。Issue 中仍有大量 P0/P1 的数据库 WAL、插件捕获、启动性能、会话恢复和权限安全问题，说明项目功能扩张较快，但运行时可靠性仍是主要风险。PR 侧约有 **208 个待合并、292 个已合并或关闭**，贡献吞吐较高，不过不少关键修复仍处于“需要复现/证明”或“等待作者”阶段。综合判断：项目推进速度很快，但健康度呈 **“高吞吐、中高风险”** 状态，发布前需要优先收敛 SQLite、插件加载、Gateway 启动和会话状态问题。

---

## 2. 版本发布

### v2026.10.7

**Release：** [openclaw 2026.10.7](https://github.com/openclaw/openclaw/releases/tag/v2026.10.7)

本版本重点围绕 **会话恢复可靠性** 展开：

- 中断的会话会保留恢复来源信息和未完成工具调用的结果。
- 已终止的会话在接收下一条消息前，会清理终态恢复残留数据。
- 被拒绝的 Claude CLI 草稿不会进入最终回复。
- Release Notes 还涉及大型上下文或会话数据的处理改进，但提供的数据被截断，无法确认完整范围。

#### 破坏性变更与风险

现有摘要未明确列出正式的 breaking changes。不过，会话恢复状态、Claude CLI 草稿处理及大上下文恢复路径均发生了语义调整，升级后建议重点验证：

1. Gateway 重启或进程中断后的会话续接。
2. 被拒绝或中断的模型草稿是否会残留或重复回复。
3. 工具调用执行到一半时，重启后的状态展示与重放。
4. 长会话、Claude CLI 会话及多 Agent 并发场景。

> Release Notes 原文被截断，完整破坏性变更和升级说明应以 Release 页面为准。

### v2026.9.34

**Release：** [openclaw 2026.9.34](https://github.com/openclaw/openclaw/releases/tag/v2026.9.34)

这是 Gateway 专用的 **`extended-stable` 版本**，定位上相当于当前项目的 LTS：

- 包含 2026 年 9 月末的稳定版本线。
- 合入关键安全更新。
- 包含可靠性与性能修复。
- 增加新的模型支持。

#### 迁移建议

- 该版本是 Gateway-only 发布，不应假定包含完整应用端功能更新。
- 对安全敏感部署，建议先评估 `v2026.10.7` 与 `v2026.9.34` 的分支差异，避免直接跨稳定线升级。
- 使用旧稳定版但依赖插件、模型目录或 Gateway 配置的部署，应重点回归启动、认证和模型发现。

---

## 3. 项目进展

今日 PR 活动很高，主要推进方向包括 **会话可靠性、Web UI 性能、插件加载、Gateway 运维和模型运行时更新**。

### 已合并或关闭的重要 PR

- **修复 managed worktree 报告中的终端控制字符**
  - 避免仓库路径、分支名、ID 或诊断信息中的控制序列污染终端输出。
  - PR：[ #181582](https://github.com/openclaw/openclaw/pull/181582)
  - 对 CLI 安全与可读性有直接改善。

- **macOS 应用恢复时准确识别节点检查失败**
  - 避免远端主节点场景下误把健康的本地 Gateway 判为故障，并给出更准确的 LaunchAgent 操作提示。
  - PR：[ #183215](https://github.com/openclaw/openclaw/pull/183215)
  - Issue：[ #183138](https://github.com/openclaw/openclaw/issues/183138)

- **修复 active-memory 召回子会话在会话列表中的错误可见性**
  - 隐藏内部 memory-search session，同时保持 System 和 Automation 会话的隐藏语义一致。
  - PR：[ #167336](https://github.com/openclaw/openclaw/pull/167336)
  - Issue：[ #167336](https://github.com/openclaw/openclaw/issues/167336)

- **修复会话状态竞态被错误归类为模型失败并触发跨 Provider fallback**
  - `reason=unknown` 不再直接推动 fallback chain，降低无必要切换 Provider 的概率。
  - Issue：[ #178000](https://github.com/openclaw/openclaw/issues/178000)
  - PR 已关闭，Issue 已关闭，但清单未提供对应 PR 编号。

- **修复 Codex app-server 执行预算超时回归**
  - 处理升级后主轮次超时并静默 fallback 的问题。
  - Issue：[ #181619](https://github.com/openclaw/openclaw/issues/181619)
  - 该 Issue 已关闭。

- **修复 opencode-go 本地模型目录未应用 Provider 覆盖**
  - 恢复 `muse-spark-1.2-contributor` 等模型，并补回 `mimo-v2.5`。
  - Issue：[ #135858](https://github.com/openclaw/openclaw/issues/135858)
  - 该 Issue 已关闭。

### 待合并的关键改进

- **Telegram 私信去重，同时保留仅投递上下文**
  - 避免普通 Telegram 对话每轮重复注入 10 轮 transcript。
  - PR：[ #183190](https://github.com/openclaw/openclaw/pull/183190)

- **修复 Telegram 表格回复被零宽字符拖慢**
  - 恶意或异常零宽字符串可令 Gateway 卡顿数秒至数分钟。
  - PR：[ #183217](https://github.com/openclaw/openclaw/pull/183217)

- **父 Agent 等待活跃 Collector 时，不再被误判为卡死工具**
  - 防止约 15 分钟后父 Agent 被提前停止、导致委托结果丢失。
  - PR：[ #172959](https://github.com/openclaw/openclaw/pull/172959)

- **状态租约丢失时提供明确原因**
  - 区分租约过期、所有权被替换和租约记录缺失，而不是统一显示 `OPENCLAW_STATE_LEASE_LOST`。
  - PR：[ #183178](https://github.com/openclaw/openclaw/pull/183178)
  - 相关 Issue：[ #182476](https://github.com/openclaw/openclaw/issues/182476)

- **SQLite 备份识别 `.db`、`.sqlite3` 和无扩展名数据库**
  - 防止活跃 SQLite 数据库被作为普通文件复制而绕过 WAL 捕获。
  - PR：[ #148857](https://github.com/openclaw/openclaw/pull/148857)
  - 相关 Issue：[ #148796](https://github.com/openclaw/openclaw/issues/148796)

- **更新托管 Codex Runtime 至 0.164.0**
  - 同步六个原生平台包、ACP adapter 选择和上游协议 schema。
  - PR：[ #181823](https://github.com/openclaw/openclaw/pull/181823)

**进展评估：** 今日贡献覆盖了从 Web UI 性能到安全诊断、会话调度、插件和模型运行时的多个层面，项目整体继续向前推进；但针对 SQLite、插件捕获和 Gateway 启动的核心故障，多数修复仍停留在 PR 阶段，尚未真正消除存量风险。

---

## 4. 社区热点

### 4.1 SQLite WAL 持续膨胀并阻塞 Gateway 启动

- Issue：[ #143524](https://github.com/openclaw/openclaw/issues/143524)
- **135 条评论**，P0，影响 Windows Gateway 启动。
- Agent SQLite 的 WAL 文件即使设置 `wal_autocheckpoint=1000`，仍可在数日内增长至 **1.4–2.8 GB**；手工 `wal_checkpoint(TRUNCATE)` 后还会再次增长。
- 同一基础问题还包括：
  - Gateway 状态库自动 checkpoint 被进程内读连接永久阻塞：[ #164294](https://github.com/openclaw/openclaw/issues/164294)
  - `doctor --fix` 自锁：[ #164948](https://github.com/openclaw/openclaw/issues/164948)

**背后诉求：** 用户需要稳定、可预测的 SQLite 生命周期管理，包括自动 checkpoint、长读事务治理、Doctor 修复安全性和 WAL 大小告警。当前问题已形成一条系统性故障链，而非单点 Bug。

### 4.2 插件 source capture 导致启动阻塞和 SSD 写入放大

- Gateway 启动被大型外部插件阻塞数分钟：[ #160959](https://github.com/openclaw/openclaw/issues/160959)
- 每次 CLI 命令重写约 **1.1–1.4 GB**，每次 Gateway 启动约 **6.5 GB**：[ #157989](https://github.com/openclaw/openclaw/issues/157989)
- Windows 插件 staging 自我复制、目录持续膨胀：[ #162585](https://github.com/openclaw/openclaw/issues/162585)

**背后诉求：** 插件捕获必须支持增量复用、缓存、内容寻址和依赖去重。当前实现不仅影响启动时间，还会造成显著 SSD 写入和磁盘占用风险。

### 4.3 Gateway 启动性能严重回退

- Issue：[ #168955](https://github.com/openclaw/openclaw/issues/168955)
- Windows 上，从 `2026.9.9` 升级至 `2026.10.1` 后：
  - `gateway ready` 从约 **410 秒**增至约 **1030 秒**。
  - `sidecars.control-ui-assets` 阶段阻塞约 **477 秒**。

**背后诉求：** 用户需要建立稳定、可量化的启动时间基线，并明确启动阶段耗时。尤其 Control UI 静态资源不应在每次启动时重复产生高成本工作。

### 4.4 记忆和引导上下文丢失

- `MEMORY.md`、`USER.md` 被 provenance ratchet 静默永久排除：[ #153426](https://github.com/openclaw/openclaw/issues/153426)
- 活跃记忆插件升级后停止召回：[ #138561](https://github.com/openclaw/openclaw/issues/138561)
- active-memory 召回子会话错误暴露：[ #167336](https://github.com/openclaw/openclaw/issues/167336)

**背后诉求：** 记忆系统需要“可解释、可恢复、默认可信”。核心记忆文件不应在普通搜索行为后被永久降级；同时，内部检索会话不应污染用户可见会话列表。

### 4.5 会话状态、消息投递与恢复一致性

- 已接受的跨会话消息可能永久停留在 `interrupted`：[ #144594](https://github.com/openclaw/openclaw/issues/144594)
- 会话关闭 wedge 可永久锁死 Agent，但健康状态仍为绿色：[ #159789](https://github.com/openclaw/openclaw/issues/159789)
- 自动压缩可能卡住 23 分钟：[ #148292](https://github.com/openclaw/openclaw/issues/148292)
- 1-token `length` 停止被错误标记为成功：[ #178300](https://github.com/openclaw/openclaw/issues/178300)
- 会话恢复时内部系统注入被显示给用户：[ #165041](https://github.com/openclaw/openclaw/issues/165041)

**背后诉求：** 用户需要消息“已接收但未处理”的明确终态、自动重放或人工恢复路径，同时健康检查应反映真正的可执行状态。

### 4.6 安全与权限

- 浏览器 CDP WebSocket URL 可能把凭据暴露给模型：[ #158966](https://github.com/openclaw/openclaw/issues/158966)
- Talk consultation 在会话初始化后丢失调用方权限：[ #167876](https://github.com/openclaw/openclaw/issues/167876)

**背后诉求：** 连接凭据、调用方身份和模型可见工具结果应严格分离。涉及长期回调的语音会话尤其需要保持端到端授权链。

---

## 5. Bug 与稳定性

### P0 / 严重级别

| 问题 | 影响 | Fix PR 状态 |
|---|---|---|
| [Agent SQLite WAL 无限增长 #143524](https://github.com/openclaw/openclaw/issues/143524) | Windows 下 WAL 达 GB 级，阻塞 Gateway 启动 | **未见直接修复 PR** |
| [Gateway WAL checkpoint 被进程内 reader 阻塞 #164294](https://github.com/openclaw/openclaw/issues/164294) | 状态库 checkpoint 从启动后持续失败 | **未见直接修复 PR** |
| [大型插件捕获阻塞 Gateway 数分钟 #160959](https://github.com/openclaw/openclaw/issues/160959) | 启动及 runtime republish 长时间卡死 | **未见直接修复 PR** |
| [`doctor --fix` 自锁 #164948](https://github.com/openclaw/openclaw/issues/164948) | 修复命令无法完成迁移/维护 | **未见直接修复 PR** |
| [记忆根文件被永久排除 #153426](https://github.com/openclaw/openclaw/issues/153426) | `MEMORY.md`/`USER.md` 静默丢失，潜在记忆和会话状态损坏 | **未见直接修复 PR** |

### P1 / 高风险

| 问题 | 影响 | Fix PR 状态 |
|---|---|---|
| [插件捕获每次重写 1.1–6.5 GB #157989](https://github.com/openclaw/openclaw/issues/157989) | 严重 SSD 写入、启动开销 | **未见直接修复 PR** |
| [Windows 启动耗时升至约 1030 秒 #168955](https://github.com/openclaw/openclaw/issues/168955) | Gateway 可用性显著下降 | **未见直接修复 PR** |
| [Windows 插件 staging 自我复制 #162585](https://github.com/openclaw/openclaw/issues/162585) | 磁盘持续膨胀，Gateway 无法健康 | **未见直接修复 PR** |
| [Windows 更新修复触发 lease lost #182476](https://github.com/openclaw/openclaw/issues/182476) | 更新失败、就绪与连接不稳定 | **有相关 PR：[ #183178](https://github.com/openclaw/openclaw/pull/183178)** |
| [已接受跨会话消息永久 interrupted #144594](https://github.com/openclaw/openclaw/issues/144594) | 消息可能静默丢失 | **未见直接修复 PR** |
| [原生 close wedge 永久锁死 Agent #159789](https://github.com/openclaw/openclaw/issues/159789) | 工作完全停止，但健康检查仍显示绿色 | **未见直接修复 PR** |
| [Talk 调用方权限丢失 #167876](https://github.com/openclaw/openclaw/issues/167876) | 后续 Agent 执行可能越权或失败 | **未见直接修复 PR** |
| [1-token 长度停止被标记成功 #178300](https://github.com/openclaw/openclaw/issues/178300) | 产生虚假成功结果 | **未见直接修复 PR** |
| [自动压缩单次尝试且无超时 #148292](https://github.com/openclaw/openclaw/issues/148292) | 长会话停滞 | **未见直接修复 PR** |
| [Codex app-server 超时回归 #181619](https://github.com/openclaw/openclaw/issues/181619) | 主模型轮次失败并静默 fallback | **Issue 已关闭；对应 PR 编号未提供** |
| [会话状态竞态触发跨 Provider fallback #178000](https://github.com/openclaw/openclaw/issues/178000) | 不必要切换模型、破坏缓存和可观测性 | **Issue/PR 已关闭；对应 PR 编号未提供** |

### P2 / 中等风险

- [长会话后 `write`/`exec` 参数被静默丢弃 #53408](https://github.com/openclaw/openclaw/issues/53408)
- [AgentTurn 自动化出现 `DataCloneError` #157986](https://github.com/openclaw/openclaw/issues/157986)
- [Control UI 会话计数与 RPC 不一致 #165391](https://github.com/openclaw/openclaw/issues/165391)
- [WebChat 历史滚动持续抖动 #164394](https://github.com/openclaw/openclaw/issues/164394)
- [Windows 自动更新反复失败 #157812](https://github.com/openclaw/openclaw/issues/157812)
- [Per-agent `tools.alsoAllow` 未授权 browser 工具 #156864](https://github.com/openclaw/openclaw/issues/156864)
- [Codex 模型发现硬编码 client version #162768](https://github.com/openclaw/openclaw/issues/162768)
- [Claude CLI 模型重启后错误显示不可用 #158922](https://github.com/openclaw/openclaw/issues/158922)
- [Matrix 4 个 EEE 账号导致空闲时约 50% CPU、52 MB/min 写入 #154104](https://github.com/openclaw/openclaw/issues/154104)
- [Control UI 长文本粘贴只在首轮到达模型 #179676](https://github.com/openclaw/openclaw/issues/179676)
- [重复渲染 pre-tool 文本和最终答案 #149912](https://github.com/openclaw/openclaw/issues/149912)
- [Codex-native GPT-6 冷启动首轮失败 #156491](https://github.com/openclaw/openclaw/issues/156491)

**稳定性判断：** 当前风险集中于 **SQLite 并发、插件 source capture、Gateway 启动、会话终态和长任务恢复**。这些问题跨版本出现，且多个 P0/P1 尚无明确 fix PR，是近期发布质量的主要拖累。

---

## 6. 功能请求与路线图信号

### 已有明确实现或 PR 支撑

1. **Per-agent dreaming 配置**
   - Issue：[ #67413](https://github.com/openclaw/openclaw/issues/67413)
   - 诉求：按 Agent 控制 dreaming，避免所有 workspace 同时运行造成 6GB 内存上限和 OOM。
   - **路线图信号：较强。** 功能边界清晰，已有具体问题数据，较适合进入下一版本。

2. **Databricks Unity Gateway 官方 Provider**
   - Issue：[ #155633](https://github.com/openclaw/openclaw/issues/155633)
   - 实现 PR：[ #155634](https://github.com/openclaw/openclaw/pull/155634)
   - **路线图信号：较强。** 已有实现，适合在 Provider 目录和认证测试完善后合入。

3. **限制感知的模型 fallback**
   - Issue：[ #182712](https://github.com/openclaw/openclaw/issues/182712)
   - 诉求：某账号配额耗尽时跳过同一配额池中的兄弟模型，优先切换到其他 Provider。
   - **路线图信号：较强。** 与今日模型限流、缓存保持 PR [#183227](https://github.com/openclaw/openclaw/pull/183227) 方向一致。

4. **MCP CLI 后端遵循 `tools.toolSearch`**
   - Issue：[ #139477](https://github.com/openclaw/openclaw/issues/139477)
   - 诉求：不再硬编码 `alwaysLoad: true`，减少工具 schema 对提示词的膨胀。
   - **路线图信号：中高。** 与近期 prompt 性能优化一致。

5. **CLI 展示节点配对审批范围**
   - PR：[ #178455](https://github.com/openclaw/openclaw/pull/178455)
   - 诉求：在 `nodes pending` 和 `nodes list` 中显示审批涉及的权限范围。
   - **路线图信号：中高。** 已进入安全敏感代码审查流程。

### 需要产品决策或更广泛设计

- **可配置的纯文本中止触发词**
  - Issue：[ #164870](https://github.com/openclaw/openclaw/issues/164870)
  - 将硬编码多语言中止词表改为 `session.abortTriggers`。
  - **路线图信号：中。** 实现简单，但需要明确误触发风险和配置兼容策略。

- **Provider-neutral `decision_evaluate` 工具**
  - Issue：[ #155115](https://github.com/openclaw/openclaw/issues/155115)
  - 统一 Boolean、Choice、Score 决策接口并支持 Agent 级模型选择。
  - **路线图信号：中。** 产品价值较高，但涉及工具协议、Provider 能力发现和兼容设计。

- **重启 sentinel 通知开关**
  - Issue：[ #55372](https://github.com/openclaw/openclaw/issues/55372)
  - **路线图信号：中低。** 体验优化明确，但优先级低于当前稳定性问题。

- **Registry-settled collector 的机器可读原因**
  - Issue：[ #165685](https://github.com/openclaw/openclaw/issues/165685)
  - **路线图信号：中。** 对多 Agent 调度和诊断重要，需与等待语义统一设计。

---

## 7. 用户反馈摘要

### 主要真实痛点

1. **无人值守部署最容易遭遇“健康但不可用”**
   - 用户报告 Gateway 健康状态仍为绿色，但 Agent 执行已被 native close wedge 锁死：[ #159789](https://github.com/openclaw/openclaw/issues/159789)。
   - 这比直接崩溃更危险，因为自动监控无法及时发现业务已经停止。

2. **Windows 是问题集中区**
   - WAL 膨胀、插件 staging 自我复制、启动变慢、更新修复失败和 lease lost 均高频出现。
   - 用户显然把 OpenClaw 用于长期运行的桌面或边缘节点，但 Windows 的文件锁、任务计划和目录语义仍存在明显适配缺口。

3. **多 Agent / 多会话编排场景对状态一致性要求高**
   - 用户希望父 Agent 持续等待活跃 Collector，而不是超时停止：[ #172959](https://github.com/openclaw/openclaw/pull/172959)。
   - 已接受但被中断的跨会话消息必须有自动重放、可见失败或可人工恢复：[ #144594](https://github.com/openclaw/openclaw/issues/144594)。

4. **模型成本和缓存稳定性直接影响商业可用性**
   - 限流时在模型间反复切换会破坏 Prompt Cache 并推高成本：[ #183227](https://github.com/openclaw/openclaw/pull/183227)。
   - Anthropic 心跳不读取前一轮缓存的问题也被认为带来显著额外成本：[ #161208](https://github.com/openclaw/openclaw/issues/161208)。

5. **记忆功能需要“可信默认”**
   - 用户不仅要求召回功能，更要求知道何时被排除、为什么被排除，以及如何恢复。
   - `MEMORY.md` 和 `USER.md` 静默失效尤其影响个人 AI 的长期连续性：[ #153426](https://github.com/openclaw/openclaw/issues/153426)。

6. **Control UI 的展示可信度受到质疑**
   - 会话数量不一致、长历史抖动、内部上下文泄露、重复文本和长粘贴丢失都会直接破坏用户对会话状态的信任。
   - 相关问题包括 [#165391](https://github.com/openclaw/openclaw/issues/165391)、[#164394](https://github.com/openclaw/openclaw/issues/164394)、[#165041](https://github.com/openclaw/openclaw/issues/165041) 和 [#179676](https://github.com/openclaw/openclaw/issues/179676)。

### 满意度信号

- 新版本对 **会话恢复来源、未完成工具结果和拒绝草稿清理** 的处理方向获得正面价值，用户核心诉求是“不要丢状态、不要重复回复”。
- 社区贡献密度高，单日 500 条 PR 更新，且修复覆盖 Web UI、CLI、Gateway、Agent、移动端和多个 Provider。
- 但大量 Issue 带有 `needs-maintainer-review`、`needs-live-repro` 或 `no-new-fix-pr` 标签，说明社区愿意提供复现和方案，维护者评审与合入能力仍可能成为瓶颈。

---

## 8. 待处理积压

### 高优先级、长期未解决

- [WAL 无界增长 #143524](https://github.com/openclaw/openclaw/issues/143524)
  - 135 条评论，仍标记 `no-new-fix-pr`；已从 9 月延续至 10 月，属于最突出的存量问题。

- [Gateway WAL checkpoint 被 reader 阻塞 #164294](https://github.com/openclaw/openclaw/issues/164294)
  - 与上一问题形成同一 SQLite 故障链，建议合并治理。

- [插件 source capture 阻塞 #160959](https://github.com/openclaw/openclaw/issues/160959)
  - 53 条评论、影响启动，缺少直接修复 PR。

- [插件捕获重写 1–6.5 GB #157989](https://github.com/openclaw/openclaw/issues/157989)
  - 涉及 SSD 磨损，已持续较长时间。

- [Windows 插件 staging 无限增长 #162585](https://github.com/openclaw/openclaw/issues/162585)
  - 与 source capture 设计直接相关，不能仅靠单点补丁解决。

- [Windows 启动回退 #168955](https://github.com/openclaw/openclaw/issues/168955)
  - 仍处于需要维护者审查和环境复现阶段。

- [记忆根文件被永久排除 #153426](https://github.com/openclaw/openclaw/issues/153426)
  - P0、涉及安全和会话状态，应尽快形成可验证修复。

- [原生 close wedge 锁死 Agent #159789](https://github.com/openclaw/openclaw/issues/159789)
  - 已有明确维护者决策需求，却未见直接修复 PR。

- [跨会话消息永久 interrupted #144594](https://github.com/openclaw/openclaw/issues/144594)
  - P1、潜在消息丢失，影响长期编排部署。

### 长期等待或高评论积压

- [长会话工具参数被静默丢弃 #53408](https://github.com/openclaw/openclaw/issues/53408)
  - 3 月创建，仍缺乏稳定复现与修复。

- [Per-agent dreaming #67413](https://github.com/openclaw/openclaw/issues/67413)
  - 4 月创建，已有明确产品价值和资源保护需求。

- [主动记忆停止召回 #138561](https://github.com/openclaw/openclaw/issues/138561)
  - 影响个人 AI 的核心使用体验，但需要可靠复现。

- [重启 sentinel 通知开关 #55372](https://github.com/openclaw/openclaw/issues/55372)
  - 早期体验请求，仍未形成实现路径。

- [统一错误原因码 #127195](https://github.com/openclaw/openclaw/issues/127195)
  - 16 个调用点共用无法区分的错误文本，严重影响生产诊断；应与统一状态码和可观测性路线一并处理。

### PR 侧积压

- [父 Agent 等待活跃 Collector #172959](https://github.com/openclaw/openclaw/pull/172959)
  - P1、涉及可用性，仍需复现和证明。

- [SQLite `.db` 备份绕过 WAL 捕获 #148857](https://github.com/openclaw/openclaw/pull/148857)
  - 自 9 月持续等待，涉及数据安全，应尽快推进验证。

- [CLI 节点配对审批范围 #178455](https://github.com/openclaw/openclaw/pull/178455)
  - 已进入安全敏感审查，建议避免长期停留在 review 队列。

---

## 结论

OpenClaw 当前呈现出典型的 **高速迭代型项目压力**：发布频繁、贡献密集、功能覆盖面快速扩大，但 SQLite 生命周期管理、插件捕获成本、Gateway 启动、会话恢复终态和权限链仍存在系统性风险。下一阶段不宜只追求 PR 数量，更应优先完成以下闭环：

1. 为 SQLite WAL/锁竞争建立统一修复和回归测试。
2. 重构插件 source capture，引入增量缓存和去重。
3. 为 Windows 启动、更新和插件 staging 建立性能预算。
4. 明确消息与会话的 `accepted → processing → completed/failed/recoverable` 状态机。
5. 对记忆根文件、CDP 凭据和 Talk 调用方权限完成安全复核。
6. 优先合并已具备明确价值的 D1/D2 修复，包括限流 fallback、MCP Tool Search、审批范围展示和 Per-agent dreaming。

**项目健康度评级：中高活跃度，中高稳定性风险。** 社区与维护吞吐良好，但关键问题修复密度尚未完全匹配发布速度。

---

## 横向生态对比

# 个人 AI 助手 / 自主智能体开源生态横向分析  
**观察日期：2026-10-25｜范围：各仓库过去 24 小时 GitHub 活动**

## 1. 生态全景

过去 24 小时，生态呈现“**高提交吞吐、高架构扩张、稳定性压力集中暴露**”的典型特征：OpenClaw、OpenHuman、Hermes Agent 分别记录 500、50、50 条 PR 更新，但活动量背后同时暴露 SQLite、插件生命周期、跨端会话、权限治理、低内存适配等系统性债务。  
多数项目进入从“功能可运行”向“运行时统一”的阶段：统一 Gateway、统一渠道 API、统一记忆、策略与审批模块成为共同路线，但架构迁移尚未完全闭环。  
可靠性已成为首要矛盾：用户对“静默失败、假成功、状态丢失、健康检查误报、会话无法恢复”的敏感度明显高于对单纯新增模型或 UI 功能的关注。  
各项目也呈现明显分层：OpenClaw 属于超大社区、持续发布型平台；Hermes/OpenHuman 处于高速架构收敛期；NanoBot/QwenPaw 处于功能与工程治理并进期；PicoClaw 偏向存量维护；LobsterAI 则呈现桌面产品优化与账号治理并存的状态。

---

## 2. 各项目活跃度对比

> Issue/PR 数为日报统计口径下的“过去 24 小时更新量”，不等同于当日新开数量。

| 项目 | Issues 更新 | PR 更新 | Release | 24h 活跃画像 | 健康度评估 |
|---|---:|---:|---|---|---|
| **OpenClaw** | 500 | 500 | 2 个：v2026.10.7、v2026.9.34 | 约 208 个 PR 待合并、292 个合并/关闭；极高吞吐 | **中高活跃，中高风险** |
| **NanoBot** | 4 | 38 | 无 | 21 个 PR 待合并，17 个已关闭 | **良好，交付与积压需治理** |
| **PicoClaw** | 0 | 7 | 无 | 1 个开放、6 个关闭，存量清理为主 | **中等偏稳定，发布偏慢** |
| **IronClaw** | 0 | 0 | 无 | 无活动 | **静默，暂无法判断趋势** |
| **LobsterAI** | 2 | 3 | 无 | 三项 PR 围绕 OpenClaw 启动性能和 IM 改版 | **开发较活跃，交付透明度不足** |
| **QwenPaw** | 6 | 10 | 无 | 9 个 PR 待合并、1 个关闭 | **活跃，稳定性风险偏高** |
| **Hermes Agent** | 50 | 50 | 无 | 45 个 PR 待合并，合并/关闭仅 5 个 | **中高活跃，评审积压明显** |
| **OpenHuman** | 14 | 50 | 无 | 2 个待合并、48 个合并/关闭 | **中高活跃，核心路径仍有欠账** |

### 活跃度分层

- **第一梯队：OpenClaw**  
  单日 1000 条 Issue/PR 更新且连续发版，是生态中社区规模和交付频率最高的项目。

- **第二梯队：OpenHuman、Hermes Agent**  
  两者均有 50 条 PR 更新，但交付形态不同：OpenHuman 合并/关闭比例高，工程收敛强；Hermes 45 个 PR 等待合并，评审吞吐是主要瓶颈。

- **第三梯队：NanoBot、QwenPaw**  
  NanoBot 交付密度高，但存在重复 PR 和冲突 PR；QwenPaw 功能推进快，却积累较多文件完整性、审计和配置状态问题。

- **维护/产品阶段：PicoClaw、LobsterAI**  
  PicoClaw 以关闭 stale PR 和核验主干状态为主；LobsterAI 重点是桌面端启动性能和 IM 设置体验，发布转化不够透明。

- **观察不足：IronClaw**  
  24 小时无活动，缺少足够数据判断其活跃度、交付或维护状态。

---

## 3. OpenClaw 在生态中的定位

### 3.1 生态位置：综合规模最大的开放个人智能体平台

OpenClaw 的核心优势不只是 GitHub 数量，而是其已经形成完整的**多入口、多模型、多渠道、多 Agent、插件化运行时**：

- 会话与 Gateway 是统一核心；
- 支持 Desktop、Web UI、CLI、消息渠道及第三方 Provider；
- 具备插件、记忆、浏览器、权限、自动化和多 Agent 编排；
- 同时维护常规版本线和 Gateway 专用 `extended-stable` 分支；
- 具备围绕 SQLite、Gateway、插件捕获和会话恢复的大型社区问题池。

相比之下：

- **Hermes Agent** 更强调 Gateway、Webapp、Desktop 与消息平台共享 Profile；
- **OpenHuman** 更强调 TinyAgents、TinyChannels、TinySecurity/TinyBox 的模块化组合；
- **NanoBot / PicoClaw** 更偏轻量个人助手；
- **QwenPaw** 更突出 Console、国产模型、渠道治理与记忆；
- **LobsterAI** 是带 OpenClaw 集成路线的桌面产品，而非纯运行时底座。

### 3.2 技术路线差异

| 维度 | OpenClaw | Hermes Agent | OpenHuman | NanoBot / PicoClaw | QwenPaw |
|---|---|---|---|---|---|
| 核心抽象 | Gateway + 会话 + 插件 + 多入口 | 统一 Gateway + Profile + Desktop/Webapp | TinyAgents + TinyChannels + TinySecurity | 单体/轻量 Agent 运行时 | Console + 渠道 + 记忆 + 治理 |
| 扩展方式 | 插件、Provider、渠道接入 | 标准化插件目录 | 下沉通用能力至 Tiny 系列模块 | Provider 与工具内建为主 | Provider、渠道、记忆和策略扩展 |
| 主要优势 | 功能覆盖、规模、发布节奏 | 多入口一致性、插件生态 | 架构收敛、测试治理、模块化 | 低门槛、易部署 | 国产模型、多渠道、配置体验 |
| 当前短板 | SQLite、插件捕获、启动、状态机 | 跨端恢复、API 兼容、Desktop 稳定性 | 核心用户路径故障、低内存适配 | 沙箱、合入效率、长期积压 | 文件完整性、审计、配置回退 |

### 3.3 社区规模对比

按当日 Issue/PR 活动量衡量：

- OpenClaw 单日约为 Hermes/OpenHuman 的 **10 倍**；
- OpenHuman、Hermes 同处第二梯队；
- NanoBot 处于第三梯队；
- PicoClaw、LobsterAI 和 IronClaw 明显更低。

但“PR 多”不等于“治理成熟”。OpenClaw 同时存在 208 个待合并 PR、292 个合并/关闭，以及 135 条评论的 WAL 长期积压，反映出典型的：

> **社区供给速度 > 维护者审查与问题收敛速度**

因此，OpenClaw 是生态中最接近“平台级开源项目”的一个，但尚未达到高稳定性生产平台状态。

---

## 4. 共同关注的技术方向

### 4.1 统一会话与跨入口状态机

涉及：**OpenClaw、Hermes Agent、OpenHuman、QwenPaw**

- OpenClaw：消息可能永久停留在 `interrupted`，会话关闭可能锁死 Agent；
- Hermes：CLI、Desktop、Telegram、Slack、Webapp、API Server 之间的会话所有权和恢复尚未统一；
- OpenHuman：TinyChannels v2 正在统一渠道能力和 turn runner；
- QwenPaw：Matrix 会话恢复和设备密钥同步仍有问题。

**共同诉求：**统一 `accepted → processing → completed/failed/recoverable` 状态，保证跨入口迁移、恢复、重放和权限一致。

### 4.2 插件、渠道和 Provider 生命周期治理

涉及：**OpenClaw、Hermes Agent、OpenHuman、NanoBot、QwenPaw**

- OpenClaw：插件 source capture 每次重写 1.1–6.5 GB，并阻塞 Gateway 启动；
- Hermes：uv/Python 3.14/Android marker 导致插件准入失败，更新甚至清空 memory provider；
- OpenHuman：TinyChannels v2 统一多渠道适配；
- NanoBot：Provider、渠道 fallback 与工具兼容性持续扩展；
- QwenPaw：模型池删除、QQ 流式和多 Provider 目录管理并行推进。

**共同诉求：**插件必须具备可发现、可安装、可升级、可回退、依赖可解析、失败不破坏核心状态的生命周期。

### 4.3 长期记忆与文档治理

涉及：**OpenClaw、Hermes Agent、OpenHuman、QwenPaw**

- OpenClaw：`MEMORY.md`、`USER.md` 被静默永久排除；
- Hermes：提出持久文档链和来源治理 RFC；
- OpenHuman：CortexDB BYOK 返回 401 `ACTOR_MISMATCH`；
- QwenPaw：ReMe 集成决策压缩、图片记忆和标签生成。

**共同诉求：**记忆不能只是“能存能搜”，还需要来源可追溯、权限可控、压缩后不丢失、召回失败可解释、Provider 切换后仍可用。

### 4.4 数据完整性与文件工具安全

涉及：**QwenPaw、NanoBot、PicoClaw、OpenClaw**

- QwenPaw：`edit_file` 把 CRLF 全量转为 LF，并可能因有损解码破坏原编码；
- NanoBot：`grep`、`edit_file`、`apply_patch` 对 UTF-16/UTF-32 BOM 的处理不一致；
- PicoClaw：文件与密钥配置边界仍有部署缺口；
- OpenClaw：SQLite WAL/备份捕获可能造成一致性和数据安全问题。

**共同诉求：**文件工具必须保持原始编码、换行符和最小修改语义，并对不可逆转换显式报错。

### 4.5 权限、凭证与沙箱

涉及：**Hermes Agent、NanoBot、OpenHuman、QwenPaw、OpenClaw**

- Hermes：命令行 Token、Azure 密钥可能绕过现有脱敏；
- NanoBot：OS 级工具沙箱讨论数月，尚未形成实施路径；
- OpenHuman：策略、审批和沙箱迁移至 TinySecurity/TinyBox；
- QwenPaw：`kill $PID` 被误判为自保护危险命令；
- OpenClaw：CDP URL 凭据和 Talk 调用方权限存在泄露风险。

**共同诉求：**从字符串黑名单转向结构化参数解析、OS 级隔离、端到端身份链和可验证的策略执行。

### 4.6 启动性能与低资源适配

涉及：**OpenClaw、LobsterAI、OpenHuman、Hermes Agent**

- OpenClaw：Windows Gateway 启动从约 410 秒恶化至约 1030 秒；
- LobsterAI：907 MB 状态目录冷启动由开发版 23.4 秒降至 13.6 秒，改善约 42%；
- OpenHuman：4 GB RAM Windows 设备登录时无限加载；
- Hermes：Linux Desktop 窗口仅 6% 透明度或因 `/dev/shm` 崩溃。

**共同诉求：**建立启动阶段预算、低内存降级模式、Cloud Only 路径，以及跨平台启动回归基线。

### 4.7 可观测性与真实状态反馈

涉及：**所有活跃项目**

- OpenClaw：健康检查绿色但 Agent 已被锁死；
- PicoClaw：Cron 失败被报告为成功；
- Hermes：API Server 未派发请求仍返回 HTTP 200；
- QwenPaw：审计配置为 `all`，工具调用却停止记录；
- OpenHuman：审批已确认却无审批卡且 `run_flow` 被拒绝。

**共同诉求：**错误、失败、拒绝和未派发状态必须准确反映在协议、UI、数据库和监控中，不能出现“假成功”或“假健康”。

---

## 5. 差异化定位分析

### OpenClaw：平台型全能助手

- **功能侧重：**Gateway、多渠道、多模型、插件、记忆、多 Agent、浏览器与自动化。
- **目标用户：**个人高级用户、自托管部署者、插件开发者、需要高度可扩展运行时的技术团队。
- **关键架构：**以 Gateway 为中心，Issue/PR 规模和版本发布频率均为生态最高。
- **适合场景：**需要复杂能力组合和长期扩展的个人 AI 助手。
- **主要代价：**运行时复杂度高，SQLite、插件捕获和启动路径容易形成系统性故障。

### Hermes Agent：统一多入口运行时

- **功能侧重：**Desktop、Webapp、CLI、消息平台和 API Server 的统一 Gateway/Profile。
- **目标用户：**需要在桌面、终端和即时通信之间无缝切换任务的高级用户。
- **关键架构：**强调会话所有权、插件目录、共享 Profile、Webapp 和跨端 handoff。
- **适合场景：**多入口个人生产力、远程后端和消息渠道编排。
- **主要代价：**统一架构尚处收敛期，跨平台和 API 兼容矩阵不完整。

### OpenHuman：高模块化 Agent 平台

- **功能侧重：**TinyChannels、多模态渠道、工作流、审批、记忆、媒体制品和子 Agent。
- **目标用户：**需要工作流自动化、多渠道和严格治理的高级 Agent 开发者。
- **关键架构：**通用能力下沉 TinyAgents/TinyChannels/TinySecurity/TinyBox，OpenHuman 作为宿主。
- **适合场景：**复杂工作流、企业审批和可扩展个人 Agent 基础设施。
- **主要代价：**迁移范围大，测试债务和核心功能可用性仍需同步治理。

### NanoBot：轻量、多渠道、开发者友好的个人助手

- **功能侧重：**WebUI、搜索、文件工具、Provider 扩展和多聊天渠道。
- **目标用户：**个人开发者、教程用户、需要快速接入多个模型和渠道的轻量部署者。
- **关键架构：**相对直接的工具与 Agent Loop 路线，Provider 适配较多。
- **适合场景：**低门槛个人助手、API 自动化和轻量渠道接入。
- **主要代价：**沙箱与安全边界尚未体系化，重复 PR、冲突 PR 降低交付效率。

### PicoClaw：小型、边缘设备友好的个人 Agent

- **功能侧重：**轻量部署、基础渠道、模型兼容、自托管配置。
- **目标用户：**资源有限设备、边缘节点或偏好简洁实现的个人用户。
- **关键架构：**今日信息显示其当前重点在 Provider 兼容、LLM 重试、Telegram、Cron 和部署模板。
- **适合场景：**低成本自托管和基础个人助理。
- **主要代价：**维护节奏偏慢，部分成熟 PR 长期停留后关闭，主干状态不透明。

### QwenPaw：面向多渠道和治理的个人 Agent 控制台

- **功能侧重：**Console 配置、QQ/IM 渠道、模型池、记忆、治理审计和国产模型生态。
- **目标用户：**偏好图形化管理、需要多渠道和治理配置的个人及团队用户。
- **关键架构：**Console 配置中心、渠道层、ReMe 记忆与策略治理并行建设。
- **适合场景：**可视化配置、多渠道个人助手和需要审计的 Agent 部署。
- **主要代价：**文件工具、审计记录和配置状态存在“表面成功、实际失效”的问题。

### LobsterAI：桌面产品化 OpenClaw 体验

- **功能侧重：**桌面客户端、IM 设置、OpenClaw 状态管理和启动体验。
- **目标用户：**不希望直接维护复杂运行时的普通或高级个人用户。
- **关键架构：**作为 OpenClaw 的产品化封装层，重点优化迁移、预热和 IM 配置。
- **适合场景：**桌面化个人助手和多渠道接入。
- **主要代价：**账号风控、代理使用边界和申诉透明度不足，削弱用户信任。

---

## 6. 社区热度与成熟度

### 6.1 快速迭代阶段

#### OpenClaw

- 特征：双版本发布、500 条 Issue 与 500 条 PR 更新；
- 优势：贡献供给和功能覆盖最强；
- 风险：关键 P0/P1 缺少直接修复 PR，SQLite 和插件问题呈系统性；
- 判断：**高速迭代平台，但尚未完成稳定性收敛。**

#### OpenHuman

- 特征：48 个 PR 合并/关闭，测试治理、架构迁移和 TinyChannels v2 同步推进；
- 优势：工程吞吐高，开始触及真实资源泄漏和 scope 迁移错误；
- 风险：CortexDB、审批、文件读取和低内存启动等用户关键路径仍有欠账；
- 判断：**架构快速收敛，质量治理中但用户路径仍需补齐。**

#### Hermes Agent

- 特征：50 条 Issue、50 条 PR，统一 Gateway 主题获得 217 条评论；
- 优势：核心架构议题关注度高，插件、Gateway、记忆方向明确；
- 风险：仅 5 个 PR 合并或关闭，评审积压明显；
- 判断：**产品架构讨论最热烈之一，但工程交付吞吐不足。**

### 6.2 功能与工程治理并进阶段

#### NanoBot

- WebUI、搜索、编码文件和 Provider 均有明确修复路径；
- 21 个 PR 待合并、多个冲突与重复方案；
- 判断：**功能增长稳定，但需提升维护收敛效率。**

#### QwenPaw

- Console、QQ、Matrix、ReMe 并行推进；
- 文件完整性和审计问题缺少直接 fix PR；
- 判断：**产品面扩展快，但底层工具和治理层需优先稳定。**

### 6.3 质量巩固阶段

#### PicoClaw

- 今日主要是 stale PR 清理和存量能力核验；
- Anthropic 参数兼容是唯一关键开放修复；
- 判断：**更接近维护巩固期，发布节奏和主干可见性需要改善。**

#### LobsterAI

- 启动性能数据较明确，IM 设置完成结构性改版；
- 没有版本发布，无法确认用户是否已获得优化；
- 判断：**产品优化已启动，工程交付与账号治理仍需补齐。**

### 6.4 数据不足

#### IronClaw

- 24 小时无活动；
- 无法区分是维护停滞、正常低活跃还是数据采集遗漏；
- 判断：**不建议仅凭本日数据作强结论。**

---

## 7. 值得关注的趋势信号

### 趋势一：竞争焦点从“聊天 UI”转向“运行时控制面”

OpenClaw 的 Gateway、Hermes 的统一 Profile、OpenHuman 的 TinyChannels、QwenPaw 的 Console 都表明，下一阶段竞争重点是：

- 会话状态管理；
- Provider 和工具路由；
- 权限与审批；
- 跨端恢复；
- 资源生命周期；
- 可观测性。

**开发者启示：**新项目不应只实现模型调用和聊天界面，而应尽早设计统一状态机、权限边界和持久化层。

### 趋势二：插件化正在成为标配，但生命周期管理明显落后

多个项目都在扩展 Provider、渠道、记忆和工具插件。然而 OpenClaw 的 TB 级重写、Hermes 的依赖解析失败、OpenHuman 的渠道架构迁移说明：

> “能安装插件”不等于“插件系统成熟”。

插件生态成熟至少需要：

- 依赖锁定与跨平台解析；
- 内容寻址、缓存和去重；
- 权限声明；
- 版本兼容与回滚；
- 更新事务；
- 插件失败时核心状态不受损。

### 趋势三：健康状态与真实业务状态正在分离

多个项目都出现类似问题：

- 进程存活，但 Agent 已锁死；
- 请求未执行，却返回 HTTP 200；
- Cron 失败，却显示成功；
- 配置为审计全部，实际无审计记录；
- 用户确认审批，却看不到审批卡。

**开发者启示：**健康检查必须从“进程存在”升级为“关键状态机可推进、关键操作可观测、关键结果可审计”。

### 趋势四：个人 AI 助手的长期竞争壁垒是可信记忆

记忆正在从简单的 Markdown、向量库或 ReMe 集成，演进为需要：

- 来源追踪；
- 权限治理；
- 压缩后可检索；
- 失败可解释；
- 删除和修订可审计；
- Provider/BYOK 可替换；
- 内部召回过程不泄露到外部渠道。

用户对“记得准”之外的要求是“**为什么没记住、为什么被排除、是否真的写入**”。

### 趋势五：低资源和跨平台适配成为用户可见竞争力

Windows 启动慢、4 GB RAM 无法登录、Linux 窗口不可见、远程图片附件失败等问题看似分散，实质上都指向：

> Agent 桌面产品需要建立设备能力探测、启动降级和跨平台兼容基线。

这类体验问题会直接影响普通用户是否继续使用，而不只是高级开发者关注。

### 趋势六：模型能力配置需要从硬编码转向能力描述

PicoClaw 的 `temperature` 兼容、QwenPaw 的 reasoning effort、NanoBot 的 MiniMax 参数兼容，以及多个项目的 Provider 差异都表明：

- 模型名称注册不等于能力兼容；
- 认证方式和模型能力组合也会影响请求参数；
- fallback 需要理解配额池和 Provider 边界；
- Provider 应维护 capability metadata，而不是散落硬编码。

**开发者启示：**建议模型适配层至少包含：

```text
model capabilities
authentication modes
supported request parameters
reasoning/thinking behavior
streaming behavior
fallback and quota semantics
context/tool compatibility
```

### 趋势七：安全治理开始从“文本规则”走向系统边界

NanoBot 的 OS 沙箱、Hermes 的凭证脱敏与 Keychain、QwenPaw 的命令语义识别、OpenHuman 的 TinySecurity/TinyBox、OpenClaw 的调用方权限链，共同指向同一方向：

- 从正则和字符串黑名单转向结构化解析；
- 从应用权限提示转向 OS 隔离；
- 从密钥隐藏转向密钥托管；
- 从单一入口授权转向端到端身份传播；
- 从“记录日志”转向“保证策略被实际执行”。

---

## 结论与决策建议

### 若选择平台型全能运行时

优先关注 **OpenClaw**，其生态规模和功能覆盖最强，但应采用保守部署方式：

- 优先使用稳定线；
- 建立 SQLite WAL 监控；
- 限制插件数量和 source capture；
- 对会话、插件捕获、Gateway 启动设置性能预算；
- 升级前重点验证恢复、权限和长上下文。

### 若选择多入口统一体验

优先关注 **Hermes Agent**，重点评估：

- CLI、Desktop、Webapp、消息平台和 API Server 的会话兼容矩阵；
- 本地与远程 Profile 一致性；
- 插件更新失败时的状态保留；
- Linux/Windows Desktop 回归。

### 若选择高模块化工作流平台

优先关注 **OpenHuman**，但应等以下问题形成闭环再用于关键流程：

- CortexDB 记忆认证；
- 审批卡和 `run_flow` 状态机；
- 文件读取；
- 低内存设备启动；
- TinyChannels v2 与无 `channels` feature 构建。

### 若选择轻量个人助手

- **NanoBot**：适合快速接入与二次开发，但应优先补 OS 级沙箱；
- **PicoClaw**：适合资源受限和轻量部署，但需核验重试、Cron、Telegram 等能力是否真正进入主干；
- **QwenPaw**：适合偏好 Console、多渠道和治理配置的用户，但应规避文件编辑和审计风险；
- **LobsterAI**：适合桌面化使用，需特别评估账号风控、代理边界和服务稳定性。

**总体判断：**该生态已从“个人助手 Demo”进入“Agent Runtime 工程化”阶段。未来真正形成用户粘性的，不再是模型数量或界面数量，而是**状态是否可信、记忆是否可靠、权限是否闭环、失败是否可恢复，以及系统在真实设备上能否稳定运行**。

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目动态日报

**日期：2026-10-25**  
**数据范围：过去 24 小时**  
**仓库：[HKUDS/nanobot](https://github.com/HKUDS/nanobot)**

## 今日速览

过去 24 小时共更新 **4 个 Issues** 和 **38 个 Pull Requests**，其中仍有 **21 个 PR 待合并**，贡献与评审活动保持高位。已关闭 PR 达 17 个，重点覆盖 WebUI 性能与交互优化、搜索依赖修复、API 会话锁释放等，说明功能迭代和缺陷治理均在推进。当前无新版本发布，主要变化仍处于 PR 合并前阶段；部分 PR 存在冲突，同时安全沙箱、PII 脱敏等关键议题仍需明确路线。整体活跃度较高，但合入效率、重复方案收敛及长期 PR 积压值得重点关注。

---

## 版本发布

过去 24 小时**无新版本发布**，因此暂无对应的更新说明、破坏性变更或迁移事项。

---

## 项目进展

### 已合并或关闭的重要 PR

- **提升 WebUI 移动端冷启动性能**  
  [#6435](https://github.com/HKUDS/nanobot/pull/6435) 将非聊天管理及连接界面延迟加载，避免移动端首次进入聊天时下载尚未使用的模块。该 PR 已关闭，方向直接改善首屏加载、带宽占用和冷启动体验。

- **修复 WebUI 配对提示延迟显示**  
  [#6401](https://github.com/HKUDS/nanobot/pull/6401) 解决新建渠道配对请求在空 WebUI 读取后可能等待接近一个轮询周期才出现的问题。当前仍待合并，但属于高优先级体验和可靠性改进。

- **升级图表客户端 Pele，改善富文本布局**  
  [#6437](https://github.com/HKUDS/nanobot/pull/6437) 将 Pele 从 1.6.0 升至 1.9.0，修复中文标签换行异常，并确保 `List<T>` 等泛型文本不被错误拆分。该 PR 已关闭，提升了 Mermaid 图表的跨语言排版表现。

- **优化 WebUI 图片附件与文件卡片布局**  
  [#6436](https://github.com/HKUDS/nanobot/pull/6436) 将图片附件改为输入框上方的紧凑缩略图，并保留编码提示、错误状态及易于点击的移除按钮。  
  [#6425](https://github.com/HKUDS/nanobot/pull/6425) 将文件卡片与媒体预览分离，避免混合消息中文件卡片被图片区域拉伸。两者均已关闭，推动 WebUI 附件交互向更一致、紧凑的方向演进。

- **强制使用包含搜索修复的 ddgs 版本**  
  [#6442](https://github.com/HKUDS/nanobot/pull/6442) 要求 `ddgs >= 9.16.1`，避免旧版本中的搜索聚合与引擎异常直接暴露给用户。该 PR 已关闭，并与 [#6285](https://github.com/HKUDS/nanobot/issues/6285) 的空结果误报问题形成完整修复链路。

- **修复达到最大工具迭代次数后的错误续跑行为**  
  [#6346](https://github.com/HKUDS/nanobot/pull/6346) 调整 Agent 在达到终止条件后的历史回放逻辑，避免下一轮请求继续恢复已放弃的任务，同时允许用户显式重试。该 PR 已关闭，降低了跨轮次残留任务造成的误执行风险。

### 今日推进程度

项目今日的主要贡献集中在三条主线：

1. **WebUI 产品体验**：启动性能、附件布局、配对提示、输入区域视觉和子任务可达性；
2. **搜索与工具稳定性**：修复 DuckDuckGo 搜索空结果误报、BOM 编码文件处理、API 会话锁泄漏；
3. **模型与渠道能力**：扩展 Runcrate provider、改进 MiniMax M3 兼容性及聊天渠道的 fallback 模型通知。

整体属于高强度开发日，但不少关键变更尚未正式合入，不能等同于已发布能力。

---

## 社区热点

### 1. Web 搜索失败被伪装成空结果

- Issue：[#6285](https://github.com/HKUDS/nanobot/issues/6285) — **已关闭，5 条评论**
- 相关 PR：[#6442](https://github.com/HKUDS/nanobot/pull/6442) — **已关闭**

这是本期评论最多的 Issue。问题在于同一轮内连续调用默认的 DuckDuckGo 搜索时，搜索失败可能被报告为 `No results found`，用户难以区分“确实无结果”和“搜索服务异常”。

该议题已通过依赖版本约束获得处理路径，但目前从数据看未体现为新版本发布，实际用户能否获得修复仍取决于后续发版。

### 2. 工具执行缺少操作系统级沙箱

- Issue：[#2569](https://github.com/HKUDS/nanobot/issues/2569) — **开放，2 条评论，1 个点赞**

该 Issue 自 2026-03-27 创建，至今仍在讨论，聚焦 `ExecTool` 暴露完整 shell 和文件系统权限的问题。现有正则命令拦截与字符串路径检查可能被编码、别名或脚本语言绕过。

这是当前最值得维护者明确路线的高风险议题。其诉求不是普通功能增强，而是安全边界的根本升级；需要维护者明确 sandlock 的支持范围、性能代价、跨平台策略及现有配置的迁移路径。

### 3. API 会话锁注册表持续增长

- Issue：[#6438](https://github.com/HKUDS/nanobot/issues/6438) — **开放**
- 修复 PR：[#6439](https://github.com/HKUDS/nanobot/pull/6439) — **开放**
- 同类长期 PR：[#6194](https://github.com/HKUDS/nanobot/pull/6194) — **开放且有冲突**

该问题于 10 月 24 日新开，虽然评论数不高，但属于明确的内存泄漏风险：调用方可持续传入不同 `session_id`，导致已完成会话对应的 `asyncio.Lock` 永久保留。

目前至少有两个修复 PR，且实现方向都指向 `WeakValueDictionary`。维护者应收敛重复方案并优先合入测试完整、生命周期处理更稳健的版本。

### 4. WebUI 会话级 reasoning effort

- PR：[#6441](https://github.com/HKUDS/nanobot/pull/6441) — **开放，存在冲突**

该功能允许用户在当前会话中为下一条消息选择推理强度，不必修改共享预设或影响正在运行的任务。它体现了用户对“细粒度、按请求控制推理成本”的需求，但当前尚未达到可直接评审状态。

### 5. 新增 Runcrate provider

- PR：[#6446](https://github.com/HKUDS/nanobot/pull/6446) — **开放**

通过 `RUNCRATE_API_KEY` 和 OpenAI 兼容接口接入 Runcrate，支持 Chat Completions 与 Responses。该 PR 扩展了模型供应商选择空间，但仍需重点确认模型列表更新机制、错误处理、思考参数兼容性和凭证管理。

---

## Bug 与稳定性

### P1：安全边界可能被绕过

- [#2569 Add OS-level sandboxing for tool execution via sandlock](https://github.com/HKUDS/nanobot/issues/2569)
- 状态：**开放，无明确 fix PR**
- 影响：工具执行目前依赖可绕过的正则和路径字符串检查，恶意或误配置的命令可能突破预期限制。
- 评估：这是安全架构级风险，严重度高于普通功能缺陷；建议尽快给出 milestone 或技术方案。

### P1/P2：API 会话锁导致内存持续增长

- [#6438 API session lock registry grows without bound for completed sessions](https://github.com/HKUDS/nanobot/issues/6438)
- Fix PR：
  - [#6439](https://github.com/HKUDS/nanobot/pull/6439)
  - [#6194](https://github.com/HKUDS/nanobot/pull/6194)
- 状态：**已有 fix PR，待合并；其中旧 PR 存在冲突**
- 影响：长期运行且使用大量不同会话 ID 的 API 实例可能持续增长内存。

### P2：搜索异常被误报为空结果

- [#6285 web_search (ddgs): ambiguous failures look like empty results](https://github.com/HKUDS/nanobot/issues/6285)
- Fix PR：[#6442](https://github.com/HKUDS/nanobot/pull/6442)
- 状态：**Issue 与相关 PR 已关闭，依赖版本已提高**
- 影响：无 API key 的默认搜索链路可能出现误报和连续调用失败。
- 后续建议：除依赖升级外，仍需确认错误分类和日志可观测性是否足以区分 provider failure、限流与真实空结果。

### P2：UTF-16/UTF-32 文件编辑失败

- [#6448](https://github.com/HKUDS/nanobot/pull/6448)
- 状态：**开放，已有完整 fix PR**
- 影响：`edit_file` 和 `apply_patch` 遇到带 BOM 的 UTF-16/UTF-32 文本时可能解码失败，且写回时存在破坏原编码的风险。

### P2：Grep 无法搜索带 BOM 的文本

- [#6447](https://github.com/HKUDS/nanobot/pull/6447)
- 状态：**开放，已有完整 fix PR**
- 影响：带 NUL 字节的 UTF-16/UTF-32 文件会被识别为二进制，锚定搜索可能无结果，与 `read_file` 行为不一致。

### P2：上下文压缩后超大文件读取仍可能失败

- [#5880](https://github.com/HKUDS/nanobot/pull/5880)
- 状态：**开放**
- 影响：多个尚未进入模型的 `read_file` 结果可能超过上下文预算；历史摘要完成后，Runner 仍可能触发 `ContextWindowExceededError` 并终止当前轮次。
- 特点：属于长期未合入但有实际业务影响的稳定性问题。

### P2：嵌套 JSON 工具参数与 Schema 类型不匹配

- [#5314](https://github.com/HKUDS/nanobot/pull/5314)
- 状态：**开放**
- 影响：部分 OpenAI 兼容 Provider 会把对象或数组编码为 JSON 字符串，MCP 服务可能因参数类型不符而拒绝调用。

### P2：聊天渠道无法感知 fallback 模型

- [#6062](https://github.com/HKUDS/nanobot/pull/6062)
- 状态：**开放，存在冲突**
- 影响：QQ、Telegram、Discord、Slack 等渠道在模型故障转移成功后不发送提示，用户可能误判实际响应模型及故障状态。

### P2：会话级 reasoning effort PR 冲突

- [#6441](https://github.com/HKUDS/nanobot/pull/6441)
- 状态：**开放，存在冲突**
- 影响：功能本身偏体验增强，但冲突会延迟评审和发布。

---

## 功能请求与路线图信号

### 1. Provider 层可逆 PII 去标识化

- [#6440 feat(privacy): reversible PII de-identification at the provider boundary](https://github.com/HKUDS/nanobot/issues/6440)
- 状态：**开放，新提出**
- 核心诉求：在请求进入模型 Provider 前识别并可逆替换个人身份信息，同时与现有 API Key、Token 的不可逆脱敏明确区分。
- 路线图判断：该需求明确指向 Provider 边界，且与现有多个 secret-redaction PR 不重复。若能定义可信密钥、恢复机制、失败策略和数据流边界，较可能成为下一阶段隐私能力的重要组成部分。当前尚无对应实现 PR。

### 2. 操作系统级工具沙箱

- [#2569](https://github.com/HKUDS/nanobot/issues/2569)
- 状态：**开放，已讨论数月**
- 路线图判断：安全需求明确，但涉及执行引擎和部署兼容性，预计应作为独立里程碑推进，而不是普通 P2 修复。下一版本是否纳入取决于 sandlock 的跨平台支持及兼容方案。

### 3. 会话级推理强度选择

- [#6441](https://github.com/HKUDS/nanobot/pull/6441)
- 状态：**开放，存在冲突**
- 路线图判断：与 WebUI 近期大量交互优化高度一致，有较高可能进入近期 WebUI 迭代，但需先解决冲突并明确与全局预设、运行中任务之间的优先级。

### 4. Runcrate 模型供应商

- [#6446](https://github.com/HKUDS/nanobot/pull/6446)
- 状态：**开放**
- 路线图判断：属于较低风险的 provider 扩展，若测试通过，可能较快进入后续版本。

### 5. MiniMax M3 模型目录及思考参数兼容

- [#6445](https://github.com/HKUDS/nanobot/pull/6445)
- 状态：**开放**
- 路线图判断：更新内置模型目录并避免向 MiniMax 发送不支持的 reasoning effort 字段，属于兼容性维护，较可能随近期版本合入。

### 6. WebUI 子任务与结果可达性

- [#6443](https://github.com/HKUDS/nanobot/pull/6443)
- 状态：**开放**
- 路线图判断：将运行中子任务固定在输入区附近、避免长回复把任务推出视野，同时避免已完成结果无限堆积，属于近期 WebUI 产品体验方向的一部分。

---

## 用户反馈摘要

### 搜索场景

用户在 [#6285](https://github.com/HKUDS/nanobot/issues/6285) 中指出，在同一轮连续执行相同或相近搜索时，错误信息表现为空结果，导致 Agent 和用户都可能采取错误后续动作。该反馈的核心不是“搜索不到内容”，而是**失败语义不清晰**。这一反馈已被上游 `ddgs 9.16.1` 修复所回应。

### 编码文件处理不一致

[#6448](https://github.com/HKUDS/nanobot/pull/6448) 和 [#6447](https://github.com/HKUDS/nanobot/pull/6447) 反映了真实工具链中常见的不一致：

- `read_file` 可以读取 UTF-16/UTF-32；
- `grep` 却将其当作二进制；
- `edit_file` / `apply_patch` 可能无法安全编辑并保留编码。

这类问题会直接破坏“读取—搜索—编辑”组合工作流，用户期待各工具对文本编码具备一致处理。

### API 长生命周期稳定性

[#6438](https://github.com/HKUDS/nanobot/issues/6438) 反映服务端部署场景中的资源治理诉求。随着客户端会话数量增加，已完成任务不应永久占用内存。该问题已有两个修复 PR，说明社区复现与修复意愿较高，但目前仍需维护者完成方案归并。

### 安全隔离

[#2569](https://github.com/HKUDS/nanobot/issues/2569) 表明部分用户并不满足于依赖式权限控制，而希望工具执行具备真正的 OS 级隔离。其不满意点集中于现有黑名单机制“原则上可绕过”，而不是单纯缺少某个命令选项。

### 隐私处理

[#6440](https://github.com/HKUDS/nanobot/issues/6440) 指出当前“脱敏”概念混合了两类需求：

- API Key、Token 的一次性隐藏；
- PII 的可逆去标识化。

用户希望在不破坏文本可恢复性的前提下，将身份信息与模型调用边界隔离。这代表隐私需求开始从“避免泄露凭证”升级到“控制个人信息进入模型上下文的方式”。

### 当前缺少直接满意度信号

本期已展示的 Issues/PRs 未提供足够评论样本以判断普遍满意度。现阶段可观察到的主要反馈集中在可靠性、一致性、安全性和隐私控制；尚无足够依据宣称整体用户满意度上升或下降。

---

## 待处理积压

### 长期开放的安全 Issue

- [#2569](https://github.com/HKUDS/nanobot/issues/2569)  
  自 2026-03-27 起开放，已积累讨论但没有明确实施 PR。建议维护者给出安全威胁模型、目标平台、配置方式、兼容策略及预计版本，避免该需求长期停留在提议阶段。

### 多条长期未合入的稳定性 PR

- [#5880](https://github.com/HKUDS/nanobot/pull/5880) — 自 2026-09-23 起开放，影响上下文压缩后的文件读取与任务连续性。
- [#5314](https://github.com/HKUDS/nanobot/pull/5314) — 自 2026-08-10 起开放，涉及 Provider 与 MCP 工具参数兼容性。
- [#6194](https://github.com/HKUDS/nanobot/pull/6194) — 自 2026-10-13 起开放且存在冲突，与新的会话锁修复重复。
- [#6062](https://github.com/HKUDS/nanobot/pull/6062) — 自 2026-10-04 起开放且存在冲突，影响聊天渠道的故障转移可观测性。

### 重复方案待收敛

- [#6439](https://github.com/HKUDS/nanobot/pull/6439) 与 [#6194](https://github.com/HKUDS/nanobot/pull/6194) 均处理会话锁泄漏。前者较新且直接关联新 Issue，后者已有冲突。建议明确保留主 PR、关闭重复项，避免测试与实现分叉。

### 冲突 PR 积压

- [#6441](https://github.com/HKUDS/nanobot/pull/6441)
- [#6412](https://github.com/HKUDS/nanobot/pull/6412)
- [#6194](https://github.com/HKUDS/nanobot/pull/6194)
- [#6062](https://github.com/HKUDS/nanobot/pull/6062)

这些 PR 涉及 WebUI 统一高亮、reasoning effort、API 锁释放和渠道 fallback 通知，均具有明确用户价值，但冲突正在降低合入效率。

---

## 项目健康度结论

**综合健康度：良好，但存在需要治理的技术债。**

- **开发活跃度：高。** 24 小时内 38 个 PR 更新、4 个 Issue 更新，说明功能、UI、Provider 与稳定性工作并行推进。
- **交付节奏：中。** 无新版本发布，且 21 个 PR 仍待合并；部分成果尚不能被用户稳定获取。
- **稳定性趋势：改善。** 搜索、编码处理、会话锁、上下文预算、工具参数和 fallback 通知均有对应修复路径。
- **安全与隐私：需重点关注。** OS 级沙箱长期未有落地，PII 可逆去标识化刚进入讨论阶段。
- **维护治理：有压力。** 重复 PR、冲突 PR 和数周未合入的稳定性修复表明评审与收敛能力需要跟进。

**维护者今日最优先事项：**先统一并合入会话锁释放修复，其次推动搜索与 BOM 编码工具链修复进入版本发布，同时为安全沙箱和 PII Provider 边界明确路线图。

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目动态日报

**日期：2026-10-25**  
**统计范围：过去 24 小时**

## 1. 今日速览

- 过去 24 小时共更新 **7 个 Pull Request**，其中 **1 个仍待合并、6 个已合并或关闭**，未出现新的 Issue 动态。
- 当前唯一开放 PR 为 **#3447**，修复 Anthropic `claude-haiku-5-5` 等强制思考模型在使用 Token/API Key 凭据时因不兼容 `temperature` 参数而返回 400 的问题。
- 今日处理结果以 **关闭旧 PR 和标记 stale 为主**，涉及 Telegram 长轮询超时、Cron 错误上报、LLM 重试机制、`.env` 配置加载、Coolify 部署及 Kimi For Coding 接入等方向。
- 过去 24 小时没有新版本发布，也没有新增 Issue；因此当前更像是**维护清理与存量 PR 收敛阶段**，功能发布活跃度偏低。
- 社区讨论热度有限，所给数据未提供评论、点赞或持续讨论信息；当前健康度评估为：**整体稳定、无新增故障反馈，但积压治理和关键兼容性修复仍需关注**。

---

## 3. 项目进展

### 3.1 今日仍待合并的重要 PR

#### [#3447 fix(anthropic): make claude-haiku-5-5 (thinking-always models) work with token credentials](https://github.com/sipeed/picoclaw/pull/3447)

- **状态：** OPEN
- **作者：** @sebbY82
- **创建/更新时间：** 2026-10-24
- **推进内容：**
  - 修复 Anthropic 强制思考模型在使用 Token 凭据时的请求参数兼容性。
  - 针对 `claude-haiku-5-5` 等模型调用时返回：
    - HTTP 400
    - `invalid_request_error`
    - `"temperature" is deprecated for this model`
  - 目标是让相关模型能够通过 Token/API Key 认证方式正常工作。

**项目意义：**

这是今日唯一仍开放、且直接影响模型可用性的修复。若不能合并，相关用户可能无法在 Token 认证模式下使用新一代 Anthropic thinking-always 模型，属于应优先处理的兼容性问题。

### 3.2 今日关闭的重要 PR

> 以下 PR 状态显示为“已关闭”；数据未明确区分“已合并”与“未合并后关闭”，因此不将其统一描述为已合并成果。

#### [#3424 fix(telegram): bound hung long-poll requests with HTTP timeouts](https://github.com/sipeed/picoclaw/pull/3424)

- **状态：** CLOSED，标记为 stale
- **推进方向：**
  - 为 Telegram `getUpdates` 长轮询请求增加 HTTP 超时。
  - 解决底层连接停止响应后请求长期挂起的问题。

**价值：**

该改动针对 Telegram 通道的稳定性，能够降低长轮询异常时连接无法释放、通道无响应等问题。不过 PR 因 stale 被关闭，需确认修复是否已通过其他 PR 重现或进入当前维护分支。

#### [#3425 fix(cron): report failed jobs as errors instead of ok](https://github.com/sipeed/picoclaw/pull/3425)

- **状态：** CLOSED，标记为 stale
- **推进方向：**
  - 修复 Cron 任务处理器吞掉 `ExecuteJob` 返回错误的问题。
  - 原实现始终返回 `nil`，导致失败任务可能被上层记录为成功。

**价值：**

这属于可观测性和任务状态准确性修复。合并或等价落地后，可以避免定时任务失败却显示成功，为排障和告警提供更可靠的数据。

#### [#594 feat(retry): add retry logic with backoff for LLM calls](https://github.com/sipeed/picoclaw/pull/594)

- **状态：** CLOSED
- **推进方向：**
  - 为 LLM 调用增加有界重试、退避和递增超时。
  - 对超时及 HTTP 5xx 等可重试错误进行识别。
  - 增加用户可见的重试提示、共享辅助逻辑及测试。
  - 计划将重试机制接入主 Agent 循环及上下文压缩相关调用。

**价值：**

该提案覆盖了模型服务不稳定、网络抖动和瞬时 5xx 等常见场景，对提升 Agent 长期运行可靠性具有直接意义。由于 PR 状态为关闭，需进一步核实其能力是否已进入主干，或是否需要以新 PR 恢复。

#### [#996 feat: add .env file loading and provider env overrides](https://github.com/sipeed/picoclaw/pull/996)

- **状态：** CLOSED
- **推进方向：**
  - 在读取 `config.json` 前加载配置目录中的 `.env` 文件。
  - 支持将密钥和 API Key 保存在版本控制之外。
  - 支持在没有 `config.json` 的全新安装场景。
  - 增加环境变量及 Provider 环境覆盖配置。

**价值：**

该功能有利于简化首次部署并降低凭据泄露风险，也更适合容器化和自动化部署环境。是否已经由其他实现替代，建议由维护者明确说明。

#### [#1026 Coolify deployment](https://github.com/sipeed/picoclaw/pull/1026)

- **状态：** CLOSED
- **推进方向：**
  - 增加 Coolify 部署配置。
  - 提供 Docker Compose 和简化版 README。
  - 使用持久化绑定挂载，便于通过 SSH 或 VSCodium 修改配置。

**价值：**

这能降低 PicoClaw 在 Coolify 上的部署门槛，并改善配置持久化体验。不过该 PR 自 2026-03-03 创建后于今日关闭，属于较长期存单；应确认官方部署文档是否已吸收相关内容。

#### [#1575 feat: Add support for Kimi For Coding model](https://github.com/sipeed/picoclaw/pull/1575)

- **状态：** CLOSED
- **推进方向：**
  - 为 `kimi-for-coding` 模型及 `kimi.com/coding` 端点增加专用请求头。
  - 使用 Claude Code User-Agent，并设置 `x-app: cli`，以适配 Coding Agent 接入限制。

**价值：**

该改动扩大了 PicoClaw 对编程模型和 Coding Agent 场景的支持。但此类请求头适配可能受上游服务策略变化影响，需持续维护并避免形成脆弱的兼容逻辑。

### 3.3 整体推进判断

- **功能覆盖范围较广：** Provider 接入、模型重试、环境配置、容器部署、Cron 错误处理和 Telegram 网络稳定性均有覆盖。
- **今日没有新版本产出：** 7 个 PR 更新并未转化为新的发布，说明从代码收敛到版本交付之间仍可能存在发布节奏偏慢的问题。
- **存量治理优先于新增开发：** 6 个关闭项中至少 2 个被明确标记为 stale，且多个 PR 创建已超过数周甚至数月。
- **兼容性修复仍需加速：** #3447 是今日唯一开放 PR，且直接关系到现有 Anthropic 模型是否能正常使用。

---

## 4. 社区热点

### 热点一：Anthropic 新模型与 Token 凭据兼容性

- **PR：** [#3447](https://github.com/sipeed/picoclaw/pull/3447)
- **状态：** OPEN
- **今日数据：** 点赞 0；评论数未提供。
- **背后诉求：**
  - 用户希望新引入的 `claude-haiku-5-5` 等 thinking-always 模型能够正常用于 Token/API Key 认证。
  - 当前请求携带已被模型弃用的 `temperature` 参数，服务端直接返回 400。
  - 诉求本质上不是增加新模型名称，而是修复**模型能力与认证方式组合下的参数兼容问题**。

### 热点二：长期开放的功能增强 PR

- **PR：**
  - [#594 LLM 重试与退避](https://github.com/sipeed/picoclaw/pull/594)
  - [#996 `.env` 与 Provider 环境覆盖](https://github.com/sipeed/picoclaw/pull/996)
  - [#1026 Coolify 部署](https://github.com/sipeed/picoclaw/pull/1026)
  - [#1575 Kimi For Coding 支持](https://github.com/sipeed/picoclaw/pull/1575)
- **状态：** 均已关闭。
- **背后诉求：**
  - 提升模型调用在瞬时故障下的成功率。
  - 改善密钥管理与首次部署体验。
  - 降低容器化部署成本。
  - 扩展编程模型及 Coding Agent 场景兼容性。

### 热点数据限制

当前数据没有提供 Issue 评论数、PR 评论明细或历史累计反应数，因此无法可靠判断“今日评论最多”或“社区反应最强”。上述热点主要依据**今日仍开放、涉及实际使用阻塞、或长期停滞**筛选。

---

## 5. Bug 与稳定性

### 严重程度：高

#### Anthropic thinking-always 模型无法通过 Token 凭据调用

- **关联 PR：** [#3447](https://github.com/sipeed/picoclaw/pull/3447)
- **现象：** HTTP 400，提示 `temperature` 对相关模型已弃用。
- **影响范围：** 使用 `anthropic` Provider、Token/API Key 认证及 `claude-haiku-5-5` 等强制思考模型的用户。
- **是否已有 fix PR：** **是，#3447 当前仍待合并。**
- **风险：** 若修复未及时发布，相关模型配置可能完全不可用。

### 严重程度：中高

#### Telegram 长轮询可能无限挂起

- **关联 PR：** [#3424](https://github.com/sipeed/picoclaw/pull/3424)
- **现象：** Telegram HTTP 客户端未配置超时；连接异常后 `getUpdates` 长轮询可能持续占用资源。
- **潜在影响：** Telegram 通道无响应、资源泄漏，以及后续消息处理延迟。
- **是否已有 fix PR：** **有，但当前已因 stale 关闭。**
- **风险：** 无法仅凭当前数据确认主干是否已包含等价修复。

#### Cron 任务失败可能被报告为成功

- **关联 PR：** [#3425](https://github.com/sipeed/picoclaw/pull/3425)
- **现象：** Cron 回调吞掉 `ExecuteJob` 返回的错误。
- **潜在影响：** 失败任务缺少准确状态和告警，运维人员可能误判任务运行情况。
- **是否已有 fix PR：** **有，但当前已因 stale 关闭。**
- **风险：** 若主干仍保留旧行为，会造成静默失败和错误监控。

### 严重程度：中

#### LLM 调用缺少统一的重试与退避机制

- **关联 PR：** [#594](https://github.com/sipeed/picoclaw/pull/594)
- **现象：** 网络超时、瞬时 HTTP 5xx 等可恢复错误缺少统一处理。
- **潜在影响：** Agent 在短暂网络或模型服务波动时直接失败，任务成功率降低。
- **是否已有 fix PR：** **有，但已关闭。**
- **风险：** 需核实是否已经由其他重构或内部实现替代。

### 严重程度：低至中

#### `.env` 加载与环境覆盖能力不足

- **关联 PR：** [#996](https://github.com/sipeed/picoclaw/pull/996)
- **现象：** 配置目录中的 `.env` 未自动加载；无 `config.json` 时，环境变量和 Provider 覆盖能力不完整。
- **潜在影响：**
  - 首次部署配置繁琐。
  - 密钥管理不符合容器化最佳实践。
  - 自动化环境中的配置行为不一致。
- **是否已有 fix PR：** **有，但已关闭。**
- **风险：** 更偏部署体验问题，直接运行稳定性影响相对有限。

### 今日 Bug 结论

今日没有新开 Bug Issue，但仍有至少 **3 个明确稳定性问题**被存量 PR 涉及：Anthropic 参数兼容、Telegram 请求挂起和 Cron 错误吞没。值得肯定的是，这些问题已有明确的代码修复方向；主要风险在于部分修复因 stale 被关闭，主干是否真正包含修复尚不明确。

---

## 6. 功能请求与路线图信号

### 明确进入 PR 队列的方向

1. **Anthropic 新模型兼容**
   - [#3447](https://github.com/sipeed/picoclaw/pull/3447)
   - 预计属于小范围紧急兼容修复，适合优先合入并快速发布。

2. **LLM 调用可靠性**
   - [#594](https://github.com/sipeed/picoclaw/pull/594)
   - 重试、退避、超时扩展和可重试错误识别，属于 Agent 稳定性的基础设施。
   - 若主干尚未实现，值得重新拆分后纳入下一版本。

3. **配置与密钥管理**
   - [#996](https://github.com/sipeed/picoclaw/pull/996)
   - `.env`、Provider 环境变量覆盖及无配置文件安装，与容器化和企业部署需求高度相关。
   - 建议确认是否已进入当前部署文档或新版配置系统。

4. **部署体验**
   - [#1026](https://github.com/sipeed/picoclaw/pull/1026)
   - Coolify、Docker Compose 和持久化挂载反映出自托管用户的一键部署诉求。
   - 更适合作为部署模板或文档体系，而非绑定核心运行时。

5. **Coding 模型支持**
   - [#1575](https://github.com/sipeed/picoclaw/pull/1575)
   - Kimi For Coding 接入说明用户对编程型 Agent 和多 Provider 兼容仍有需求。
   - 建议将类似逻辑抽象为 Provider 能力配置，避免为单一模型硬编码。

### 下一版本可能纳入的内容

- **高概率：** [#3447](https://github.com/sipeed/picoclaw/pull/3447) 的 Anthropic 兼容性修复，因为它影响现有配置可用性。
- **中等概率：**
  - [#594](https://github.com/sipeed/picoclaw/pull/594) 中范围适中的 LLM 重试机制。
  - [#996](https://github.com/sipeed/picoclaw/pull/996) 的环境变量和 `.env` 配置能力。
- **较低概率或更适合文档化：**
  - [#1026](https://github.com/sipeed/picoclaw/pull/1026) 的 Coolify 部署模板。
  - [#1575](https://github.com/sipeed/picoclaw/pull/1575) 的特定模型请求头适配。

### 路线图判断

当前信号集中在三个关键词：

1. **模型兼容性：** Anthropic、Kimi 等 Provider 的模型差异需要更稳定的适配层。
2. **运行可靠性：** 重试、超时和 Cron 错误传播是下一阶段应优先补齐的基础能力。
3. **部署与配置：** `.env`、环境覆盖和容器部署表明自托管与自动化部署需求持续存在。

---

## 7. 用户反馈摘要

过去 24 小时 **没有新增 Issue，也没有可用的 Issue 评论数据**，因此无法提炼新的真实用户评论。以下为根据 PR 描述可确认的使用痛点。

### 主要用户痛点

- **新模型不能直接使用：** 用户已配置 Anthropic Provider 和 Token 凭据，但调用 thinking-always 模型立即收到 400，说明“支持模型列表”与“实际请求参数兼容”之间存在落差。
- **Telegram 通道可能失联：** 长轮询缺少超时，在连接异常时可能表现为机器人长期不响应，而不只是单次消息失败。
- **后台任务结果不可信：** Cron 失败仍被报告为成功，会影响用户对自动化任务的信任。
- **模型服务短暂波动导致任务失败：** 缺少重试和退避机制时，瞬时网络或 5xx 错误可能直接终止整个 Agent 流程。
- **部署配置门槛偏高：** 用户希望将密钥放入 `.env`，并在无 `config.json` 的全新环境中通过环境变量完成初始化。
- **自托管流程仍需简化：** Coolify 提案反映用户希望获得更标准的一键部署与持久化配置方案。
- **编程模型接入存在限制：** Kimi For Coding 用户需要专门的兼容请求头，说明通用 Provider 配置尚不足以覆盖不同厂商的 Agent 限制。

### 满意度信号

当前数据未提供点赞、评论或明确满意度反馈，无法判断用户对现有实现的满意程度。整体来看，今日反馈主要集中在**功能可用性和可靠性缺口**，没有出现新的重大架构争议。

---

## 8. 待处理积压

### 应优先处理的开放项

#### [#3447 Anthropic thinking-always 模型 Token 凭据兼容修复](https://github.com/sipeed/picoclaw/pull/3447)

- 今日唯一仍开放的 PR。
- 涉及模型请求失败，建议尽快完成审查、测试和合并。
- 若近期有发布计划，应评估是否作为紧急补丁发布。

### 长期未推进后关闭、需确认去向的 PR

#### [#594 LLM 重试与退避](https://github.com/sipeed/picoclaw/pull/594)

- 创建于 2026-02-21，至 2026-10-24 关闭。
- 内容成熟度较高，包含错误分类、用户提示和测试。
- **维护建议：** 确认功能是否已经进入主干；若没有，应拆分为较小 PR 重新推进。

#### [#996 `.env` 文件加载与 Provider 环境覆盖](https://github.com/sipeed/picoclaw/pull/996)

- 创建于 2026-03-02。
- 与新安装、密钥安全和容器部署直接相关。
- **维护建议：** 明确是否已由当前配置加载器实现，避免功能状态不透明。

#### [#1026 Coolify 部署](https://github.com/sipeed/picoclaw/pull/1026)

- 创建于 2026-03-03。
- 属于部署生态扩展，不需要阻塞核心版本，但长期关闭会增加用户部署成本。
- **维护建议：** 可转为独立部署模板仓库或文档任务继续维护。

#### [#1575 Kimi For Coding 支持](https://github.com/sipeed/picoclaw/pull/1575)

- 创建于 2026-03-14。
- 涉及 Provider 特殊请求策略，存在上游规则变化风险。
- **维护建议：** 核实现有 Provider 抽象是否已支持，并补充明确的配置与测试方式。

### 建议的维护者关注顺序

1. 完成并合并 [#3447](https://github.com/sipeed/picoclaw/pull/3447)。
2. 核实 [#3424](https://github.com/sipeed/picoclaw/pull/3424) 与 [#3425](https://github.com/sipeed/picoclaw/pull/3425) 的修复是否已进入主干；若没有，应重新开 PR。
3. 评估 [#594](https://github.com/sipeed/picoclaw/pull/594) 的重试基础设施是否纳入下一版本。
4. 对 [#996](https://github.com/sipeed/picoclaw/pull/996)、[#1026](https://github.com/sipeed/picoclaw/pull/1026) 和 [#1575](https://github.com/sipeed/picoclaw/pull/1575) 给出“已实现、待重开或不再计划”的明确状态。

---

## 今日结论

PicoClaw 今日没有新 Issue 或版本发布，PR 更新主要体现为**存量方案关闭与维护收敛**。项目在模型重试、配置管理、Cron 错误反馈和部署支持方面已有较完整提案，但多项关键改进长期停留后关闭，当前最大的可见风险是：**功能是否真正进入主干缺少清晰状态，以及 Anthropic 新模型兼容修复尚未合并**。

**项目健康度：中等偏稳定。**  
没有新增故障反馈或发布事故信号，但发布活跃度偏低、积压 PR 较多，且唯一开放 PR 涉及实际可用性问题。建议下一阶段优先完成 #3447 的合并与发布，并快速确认 Telegram、Cron 和 LLM 重试修复在主干中的实际状态。

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI 项目动态日报

**统计日期：2026-10-25**  
**数据范围：过去 24 小时 GitHub Issues / PR 更新**  
**项目地址：** [netease-youdao/LobsterAI](https://github.com/netease-youdao/LobsterAI)

---

## 1. 今日速览

过去 24 小时共出现 **2 条活跃 Issues** 和 **3 条关闭/结束的 PR**，没有新版本发布，但开发活动集中在 **IM 设置页改版、OpenClaw 启动性能优化及启动阶段可观测性**三个方向。  
其中性能相关工作形成了连续推进：PR [#2939](https://github.com/netease-youdao/LobsterAI/pull/2939) 处理启动迁移和状态数据库预热，PR [#2941](https://github.com/netease-youdao/LobsterAI/pull/2941) 进一步补齐启动耗时分析；PR [#2942](https://github.com/netease-youdao/LobsterAI/pull/2942) 则重构 IM 设置界面并调整微信私信策略。  
社区侧，两条 Issues 均为账号禁用申诉，核心争议在于用户将 LobsterAI 内置模型接口接入本地代理后是否触发风控，暴露出**第三方调用规范、账号风控解释和申诉机制**仍不够清晰。  
整体来看，**工程推进速度较快，但产品稳定性与账号治理体验仍存在明显短板**；由于没有版本发布，也无法确认这些关闭的 PR 是否已经进入正式版本。

---

## 3. 项目进展

### 3.1 OpenClaw 启动性能优化

- [PR #2939：perf(openclaw): stop rerunning startup migrations and prewarm state databases](https://github.com/netease-youdao/LobsterAI/pull/2939)  
  **状态：CLOSED**  
  该 PR 针对 OpenClaw 状态目录达到 **907 MB** 时的冷启动性能问题。数据显示，打包版 2026.10.23 的 Gateway 冷启动为 **26.0 秒**，开发版为 **23.4 秒**；修复后开发版启动时间降至 **13.6 秒**。  
  主要方向是避免每次启动重复执行迁移，并通过预热状态数据库降低启动延迟，同时保留数据库完整性检查。该 PR 是今日最重要的性能改进，直接改善大型状态目录下的启动体验。

- [PR #2941：chore(startup): profile the untimed steps before the AskUser server](https://github.com/netease-youdao/LobsterAI/pull/2941)  
  **状态：CLOSED**  
  作为 #2939 的后续工作，该 PR 为启动分析补充此前未单独计时的阶段，包括 `agentModelMig...` 等步骤。此前每次启动约有 **0.6 秒**、一次冷启动约有 **3.3 秒**只表现为总计与已列出阶段之间的空隙；此次改动使启动性能分析更完整，有利于后续定位剩余延迟。  
  这表明维护者正在将启动性能从一次性优化转向**持续 profiling 和分阶段治理**。

### 3.2 IM 设置页改版与微信私信策略调整

- [PR #2942：feat(im): redesign IM settings layout and always admit weixin DMs](https://github.com/netease-youdao/LobsterAI/pull/2942)  
  **状态：CLOSED**  
  该 PR 重构 IM 设置页，将平台列表改为更紧凑的布局，通过状态点展示平台状态，并新增共享的 `IMPlatformHeader`，统一呈现 Logo、名称、状态和操作入口。单实例平台使用独立设置卡片；微信侧展示绑定的 Agent 和最近入站消息时间，并移除私信策略菜单，调整为始终接收微信私信。  
  其价值在于改善 IM 平台配置的信息架构和状态可见性，同时简化微信私信策略。不过，“始终允许微信 DMs”属于行为策略变化，需要在正式发布前确认兼容性和安全边界。

### 3.3 推进程度评估

今日三条 PR 均已关闭，表明相关工作已结束或不再继续开放合并；但数据中**未提供合并 commit、目标分支或发布归属**，因此不能直接认定这些改动已经合入主线或随正式版本分发。整体可评价为：

- **性能方向：明显推进**，启动耗时下降和 profiling 补全形成连续闭环；
- **IM 方向：完成一轮较完整的产品改版**；
- **发布转化：暂无法确认**，今日没有 Release，交付状态仍不透明。

---

## 4. 社区热点

### 4.1 Issue #2936：双账号被误封申诉

- [Issue #2936：[申诉] LobsterAI 账号被误封，未恶意使用却被封禁](https://github.com/netease-youdao/LobsterAI/issues/2936)  
  **状态：OPEN｜评论：4｜赞同：0**  
  这是今日评论数最高的讨论。用户称两个 LobsterAI 账号无法登录，提示账号被封禁或异常，并声明没有刷接口、批量调用等恶意行为。其使用场景是在第三方本地 DSH 插件 `dsh-comprehensive-platform / our-free-model` 中配置 LobsterAI 账号凭据，以调用有道模型服务。

**背后的核心诉求：**

1. 用户认为本地第三方工具调用被错误识别为滥用；
2. 希望恢复账号并获得人工复核；
3. 希望风控规则能区分个人本地调用与批量、共享、商业化调用；
4. 账号被封后缺少清晰的违规原因、申诉路径和响应时限。

### 4.2 Issue #2940：通过本地反向代理后账号被禁用

- [Issue #2940：[申诉] 账号被禁用，申请解封](https://github.com/netease-youdao/LobsterAI/issues/2940)  
  **状态：OPEN｜评论：1｜赞同：0**  
  用户在桌面客户端登录时收到“账号已被禁用”提示，无法进入应用。其承认曾通过本地反向代理转发 LobsterAI 内置模型接口，并认为该方式可能触发风控；现已停止代理、清理本地凭据和 Token，并承诺只通过官方客户端使用。

**背后的核心诉求：**

- 确认“本地反向代理调用”是否符合服务条款；
- 请求人工解封并说明封禁依据；
- 避免类似行为再次导致账号不可用；
- 官方客户端应给出更明确的使用边界或检测、提示与引导。

### 4.3 热点判断

今日没有评论或赞同数更高的 PR，社区热度主要集中在账号风控。两条申诉指向同一类使用模式：**将官方客户端/内置模型能力接入本地代理或第三方工具**。这说明部分用户仍缺少对“允许的个人使用”与“违规接口共享、转发或批量调用”的明确区分。

---

## 5. Bug 与稳定性

### 严重程度：高

#### 账号被禁用后无法登录或进入应用

涉及 Issues：

- [#2936：两个账号被封禁/异常，无法登录使用](https://github.com/netease-youdao/LobsterAI/issues/2936)
- [#2940：桌面客户端提示账号已被禁用](https://github.com/netease-youdao/LobsterAI/issues/2940)

**影响范围：** 至少两个账号、两个独立用户；单账号一旦被禁用，桌面端无法进入应用。  
**严重程度依据：** 对用户而言属于核心访问阻断，且现有 Issue 中未见已恢复账号的结论。  
**是否有 fix PR：** **未发现对应修复 PR**。现有关闭的三个 PR 均涉及 IM 页面、启动性能和 OpenClaw 迁移，不包含账号封禁逻辑或申诉机制修复。

### 严重程度：中

#### OpenClaw 大状态目录冷启动缓慢

- [#2939：OpenClaw 启动迁移与状态数据库预热优化](https://github.com/netease-youdao/LobsterAI/pull/2939)

**问题表现：** 在 **907 MB** 状态目录下，打包版冷启动为 **26.0 秒**，开发版为 **23.4 秒**。  
**已有修复：** 有。PR #2939 关闭前显示开发版启动时间降至 **13.6 秒**，改善约 **42%**。  
**剩余问题：** 未提供打包版修复后的数据，也未说明该改动是否已进入正式版本。

### 严重程度：低至中

#### 启动分析存在未覆盖耗时阶段

- [#2941：补齐 AskUser server 之前的启动耗时分析](https://github.com/netease-youdao/LobsterAI/pull/2941)

**问题表现：** 每次启动约 **0.6 秒**、某次冷启动约 **3.3 秒**的耗时未被单独归因。  
**已有修复：** 有。PR #2941 已关闭，但摘要未给出明确的修复后总启动时间。

### 非 Bug 类行为变化

#### 微信私信策略调整为始终允许

- [#2942：IM 设置页改版并始终接收微信 DMs](https://github.com/netease-youdao/LobsterAI/pull/2942)

该 PR 移除了微信私信策略菜单。由于策略从可配置变为固定行为，建议在发布说明中明确其影响范围，避免用户将其视为配置回归。

---

## 6. 功能请求与路线图信号

### 6.1 IM 设置体验统一与状态可视化

来自 [PR #2942](https://github.com/netease-youdao/LobsterAI/pull/2942) 的信号表明，IM 设置页正在向以下方向演进：

- 平台列表紧凑化；
- 使用状态点快速展示连接状态；
- 通过共享 `IMPlatformHeader` 统一交互；
- 单实例平台采用独立设置卡片；
- 微信页面突出绑定 Agent 和最近入站时间。

这更像是正在进行中的**IM 配置中心改版**，而不是单点功能需求。若 #2942 已合入主线，相关体验可能进入下一版本；若只是关闭而未合并，则暂无明确排期依据。

### 6.2 OpenClaw 启动性能持续治理

[#2939](https://github.com/netease-youdao/LobsterAI/pull/2939) 和 [#2941](https://github.com/netease-youdao/LobsterAI/pull/2941) 显示，OpenClaw 启动优化已进入第二阶段：

1. 消除重复迁移；
2. 预热状态数据库；
3. 完善各启动阶段计时；
4. 继续定位剩余延迟。

这一方向大概率属于下一轮性能版本的重点，但当前没有 Release 记录，无法确认具体版本归属。

### 6.3 账号风控与申诉机制

虽然两条 Issue 均以解封申诉为主，但反映出明确的潜在产品需求：

- 在客户端明确提示禁止反向代理、接口转发或凭据共享；
- 封禁时提供具体原因、规则条目和申诉入口；
- 建立人工复核与申诉状态跟踪；
- 区分个人本地调用和批量、商业化、对外服务行为；
- 在异常调用前提供风险提示，减少“使用后被封”的事后处理。

目前没有可见 PR 对应这些诉求，因此只能判断为**高优先级待规划事项**，不能确认进入下一版本。

---

## 7. 用户反馈摘要

### 真实使用场景

- 用户会将 LobsterAI 账号凭据配置到第三方本地插件中，以调用有道模型服务；
- 有用户通过本地反向代理转发内置模型接口；
- 主要目的为个人本地工具使用，Issue 中均声明没有商业化或对外提供服务。

### 主要痛点

1. **账号封禁缺少透明解释**  
   用户知道账号被禁用，但不知道具体触发了哪条规则，也不清楚个人本地代理是否被允许。

2. **客户端被完全阻断**  
   桌面端登录后直接报错，无法进入应用；封禁处理与正常客户端可用性紧密绑定。

3. **申诉反馈周期不明确**  
   两条 Issue 仍在开放状态，未见恢复账号或最终处理结果。

4. **第三方集成边界模糊**  
   官方没有在这两条 Issue 中明确说明，使用账号凭据或代理模型接口是否违反服务条款。

### 用户已采取的整改

在 [Issue #2940](https://github.com/netease-youdao/LobsterAI/issues/2940) 中，用户已：

- 停止全部反向代理服务；
- 清理本地保存的登录凭据和 Token；
- 表示之后仅通过官方客户端使用。

这类主动整改说明用户愿意遵守规则，但规则本身仍需要更清晰的官方说明。

### 满意度信号

- 两条 Issues 的赞同数均为 **0**，尚无形成明显的社区共识或支持热度；
- 由于评论数仅为 4 和 1，无法据此判断整体用户满意度；
- 性能 PR 的摘要给出了清晰的前后数据，说明开发侧对启动体验有明确改善意识，但缺少用户侧反馈。

---

## 8. 待处理积压

### 8.1 两条账号申诉尚未解决

- [Issue #2936](https://github.com/netease-youdao/LobsterAI/issues/2936)：开放中，4 条评论；
- [Issue #2940](https://github.com/netease-youdao/LobsterAI/issues/2940)：开放中，1 条评论。

**提醒重点：**

- 尽快给出人工复核结果；
- 明确本地代理/第三方调用是否违反使用规范；
- 在回复中区分“是否解封”和“如何避免再次触发”；
- 若需要收集凭据或日志，应提示用户脱敏，避免在公开 Issue 中暴露手机号、Token 等信息。

### 8.2 关闭 PR 的合入与发布状态需要确认

今日三条 PR 均为 CLOSED：

- [#2939](https://github.com/netease-youdao/LobsterAI/pull/2939)
- [#2941](https://github.com/netease-youdao/LobsterAI/pull/2941)
- [#2942](https://github.com/netease-youdao/LobsterAI/pull/2942)

仅凭当前摘要无法判断它们是：

- 已合并后关闭；
- 因替代方案而关闭；
- 因代码冲突或验证不足而关闭；
- 已进入某个尚未发布版本。

**提醒重点：** 维护者应补充关闭原因、目标分支及后续排期，尤其需要确认 **13.6 秒启动优化**和 **IM 设置页改版**是否真正进入用户版本。

### 8.3 缺乏版本发布与交付追踪

今日 **无新版本发布**。虽然当天有多个开发活动，但用户无法从 Release 记录确认：

- 性能优化是否已交付；
- IM 改版是否已上线；
- 微信私信固定策略何时生效；
- 是否存在迁移或配置兼容注意事项。

建议在发布时提供明确的版本说明、升级提示和回滚方式。

---

## 今日结论

LobsterAI 今日的工程活动质量较高，尤其是 OpenClaw 冷启动优化提供了明确的量化收益，IM 设置页也完成了结构性改版。项目当前的主要风险不在功能开发数量，而在**性能改进和已关闭 PR 的交付可见性不足**，以及**账号风控规则不透明、申诉响应缺失**导致的用户信任损耗。

**项目健康度判断：开发活跃度较高，交付状态中等偏上，社区治理与用户沟通需要加强。**

</details>

<details>
<summary><strong>QwenPaw</strong> — <a href="https://github.com/agentscope-ai/QwenPaw">agentscope-ai/QwenPaw</a></summary>

# QwenPaw 项目动态日报（2026-10-25）

## 1. 今日速览

过去 24 小时项目保持较高活跃度：共更新 **6 条 Issue**、**10 条 PR**，其中 Issue 均为开放状态，PR 为 **9 条待合并、1 条关闭**，尚未发布新版本。  
今日工作重点集中在 **Console 配置能力、QQ 渠道流式消息、Matrix 会话恢复、模型池管理、记忆系统升级与审计可靠性** 等方向，覆盖功能扩展和稳定性治理。  
同时暴露出文件编辑编码/换行破坏、危险命令误判、审计日志停止记录、QQ 启用状态被静默重置等稳定性问题，需关注修复节奏及回归测试覆盖。  
整体可评价为 **开发活跃、功能推进明显，但缺陷与待审 PR 积压同步上升**；没有版本发布，当前变更主要仍处于评审和集成阶段。

---

## 2. 版本发布

过去 24 小时 **无新版本发布**，因此暂无 Release Notes、破坏性变更或升级迁移说明。

---

## 3. 项目进展

### 已关闭的重要 PR

#### Matrix 渠道：修复会话缓存及设备密钥丢失问题
- PR：[#8411 fix(matrix): recover cached sessions and missing device keys](https://github.com/agentscope-ai/QwenPaw/pull/8411)
- 状态：**CLOSED**
- 该 PR 针对 [#8365](https://github.com/agentscope-ai/QwenPaw/issues/8365)，主要处理密码认证的 Matrix 渠道在重启后反复登录，以及 homeserver 已移除设备加密密钥、本地状态却仍标记为已共享时无法重新上传密钥的问题。
- PR 标题带有 `Close-and-review-later`，说明此次关闭更可能是暂缓合并、留待后续评审，并非问题已确认解决。该方向仍对 Matrix 渠道的可靠运行和密钥同步具有重要意义。

### 当前待合并的重要 PR

#### Console：支持从模型池移除模型
- PR：[#8410 fix(console): allow removing models from the pool](https://github.com/agentscope-ai/QwenPaw/pull/8410)
- 关联 Issue：[#8195](https://github.com/agentscope-ai/QwenPaw/issues/8195)
- 在原有启用/停用能力之外增加“移除”操作及确认流程，复用现有模型删除 API。
- 可改善弃用模型和 provider 管理项在 Console 中的可维护性，降低误用风险。

#### QQ 渠道：新增 C2C 流式消息
- PR：[#8409 feat(channels): add QQ C2C streaming message support](https://github.com/agentscope-ai/QwenPaw/pull/8409)
- 关联 Issue：[#8307](https://github.com/agentscope-ai/QwenPaw/issues/8307)
- 实现 `on_streaming_start`、`on_streaming_delta`、`on_streaming_end` 钩子，并接入 QQ 官方流式消息接口。
- 能力受现有 `streaming_enabled` 开关控制，属于用户可配置功能；当前仍待合并。

#### 服务端提供助手消息默认展示模式
- PR：[#8408 feat(console): server-provided default for assistant message display mode](https://github.com/agentscope-ai/QwenPaw/pull/8408)
- 关联 Issue：[#8407](https://github.com/agentscope-ai/QwenPaw/issues/8407)
- 在 `config.json` 新增 `chat_display.assistant_message_display_mode`，支持 `expanded`、`process-collapsed` 等模式。
- 目标是把原先仅存储于浏览器 `localStorage` 的偏好升级为服务端默认值，解决多设备、清缓存和团队部署不一致的问题。

#### ReMe 0.4.2.0 集成
- PR：[#8347 feat(memory): integrate ReMe 0.4.2.0 with opt-in decision compaction, images and tags](https://github.com/agentscope-ai/QwenPaw/pull/8347)
- 将 ReMe 依赖从 `0.4.1.11` 升级至 `0.4.2.0`，接入默认关闭的决策模型相关性压缩、对话图片记忆及实体标签生成。
- 主动交互仍沿用现有 `/proactive`，不会与 Auto-Dream 串联；该 PR 规模标记为 XXXL，集成和回归风险相对较高。

#### 修复自动记忆召回内容泄漏到外部渠道
- PR：[#7835 fix(memory): stop leaking auto-memory-recall payload to channels](https://github.com/agentscope-ai/QwenPaw/pull/7835)
- 当前状态：**Under Review**
- 自动记忆召回流程会向 LLM 上下文注入合成的 “I will use the memory_search tool…” 消息；Console 前端能够隐藏该消息，但其他出站渠道可能将内部记忆检索过程暴露给用户。
- 该修复涉及跨渠道隐私边界，安全价值较高，但仍缺少近期合并进展。

#### 文档锚点修复
- PR：[#8403](https://github.com/agentscope-ai/QwenPaw/pull/8403)：修复 Security 文档中的 Mailbox Mail Access Control 链接锚点。
- PR：[#8402](https://github.com/agentscope-ai/QwenPaw/pull/8402)：修复 Console 文档中的 Mailbox Automate New Mail 链接锚点。
- PR：[#8401](https://github.com/agentscope-ai/QwenPaw/pull/8401)：修复 API 教程中 Security Web-login 链接锚点。
- 三项均为小规模文档修复，方向明确，但尚未合并。

---

## 4. 社区热点

今日条目整体评论量较低，均为 **0–2 条评论、0 个点赞**，尚未形成高热度讨论。相对更活跃的是以下问题：

### Issue：QQ 渠道启用状态被静默重置
- Issue：[#8406 [Bug] QQ channel enabled flag silently reset to false, no warning](https://github.com/agentscope-ai/QwenPaw/issues/8406)
- 状态：开放，**2 条评论**
- 诉求：QQ 渠道明明处于启用状态，却可能在无明显提示的情况下被重置为 `false`。
- 背景：QQ 流式能力 PR [#8409](https://github.com/agentscope-ai/QwenPaw/pull/8409) 正在推进；若启用状态仍不可靠，新流式功能可能难以被稳定使用和发现。
- 风险点：静默配置回退会降低用户对自动化渠道的信任，也会造成“功能已配置但不工作”的排查成本。

### Issue：审计数据库停止记录 Agent 工具调用
- Issue：[#8412 governance/audit.db stops recording tool calls per-agent while policy.yaml has audit_level: all](https://github.com/agentscope-ai/QwenPaw/issues/8412)
- 状态：开放，**1 条评论**
- 诉求：即使 Agent 的 `policy.yaml` 配置为 `audit_level: all`，其工具调用记录仍可能停止写入 `governance/audit.db`。
- 影响范围包括文件写入等敏感操作。问题一旦出现便不会自动恢复，Agent 却仍持续执行操作，形成审计缺口。
- 今日未见直接对应的修复 PR，属于高优先级稳定性与治理风险。

### Issue：文件编辑破坏编码
- Issue：[#8415 edit_file converts all CRLF line endings to LF during a targeted edit](https://github.com/agentscope-ai/QwenPaw/issues/8415)
- 状态：开放，**1 条评论**
- 实际标题与换行问题重复，但摘要指出 `read_file_safe` 使用 `errors='ignore'` 解码，可能丢失 ISO-8859-1 文件中的 `é`、`ü` 等字符。
- `edit_file` 随后会将有损快照以 UTF-8 写回，并仍返回成功提示，属于可能造成数据损坏却缺乏显式告警的问题。

### PR：服务端默认消息展示模式
- PR：[#8408](https://github.com/agentscope-ai/QwenPaw/pull/8408)
- 对应 Issue：[#8407](https://github.com/agentscope-ai/QwenPaw/issues/8407)
- 关注点集中于浏览器偏好无法跨设备同步，以及自托管团队无法统一默认值。
- 该需求已有明确实现草案，具备较高的近期合入可能性。

---

## 5. Bug 与稳定性

按潜在数据安全、审计完整性和功能影响排序：

### P0 / 高风险：编辑文件可能破坏原始编码

- Issue：[#8415](https://github.com/agentscope-ai/QwenPaw/issues/8415)
- `read_file_safe` 使用 `errors='ignore'` 解码，非法或非 UTF-8 字节可能被静默丢弃；之后文件被重新编码并写回。
- `edit_file` 仍可能报告“Successfully replaced text”，用户难以察觉原文件已经发生不可逆的数据损失。
- **修复 PR：暂无直接对应 PR。**

### P0 / 高风险：审计事件停止写入

- Issue：[#8412](https://github.com/agentscope-ai/QwenPaw/issues/8412)
- Agent 级别即使启用 `audit_level: all`，工具调用仍可能停止写入 `audit_events`，且不会自动恢复。
- 影响可追溯性、合规性和安全事件调查。
- **修复 PR：暂无直接对应 PR。**

### P1 / 高风险：单行编辑将 CRLF 全量转换为 LF

- Issue：[#8414 edit_file converts all CRLF line endings to LF during a targeted edit](https://github.com/agentscope-ai/QwenPaw/issues/8414)
- Issue：[#8415](https://github.com/agentscope-ai/QwenPaw/issues/8415)
- `edit_file` 通过 `read_file_safe` 读取文件时会统一 `\r\n`/`\r` 为 `\n`，原子重写时又固定使用 `newline='\n'`。
- 对仅修改一行而言，其余所有行也会被换行符转换，可能扩大 Git diff、触发格式检查或破坏特定脚本兼容性。
- **修复 PR：暂无直接对应 PR。**
- 建议维护者将 #8414 与 #8415 合并处理，从“读取时保留原始编码和换行”“替换时保持字节级最小修改”两个层面补测试。

### P1 / 中高风险：自保护机制误拦截无关进程终止命令

- Issue：[#8413 Self-kill guard blocks kill $PID for an unrelated user-started process](https://github.com/agentscope-ai/QwenPaw/issues/8413)
- `execute_shell_command` 的 `_is_dangerous_self_kill` 通过命令中是否包含 `kill` 和 `$pid` 子串判断风险。
- 在 POSIX shell 中，变量通常区分大小写，`$PID` 与 `$pid` 并非同一变量，因此针对其他用户启动进程的操作可能被误判。
- **修复 PR：暂无直接对应 PR。**

### P1 / 中高风险：QQ 启用状态被静默重置

- Issue：[#8406](https://github.com/agentscope-ai/QwenPaw/issues/8406)
- 配置状态无警告回退，可能造成 QQ 渠道停用，且用户难以定位原因。
- **修复 PR：暂无直接对应 PR。**
- 建议在修复时同时补充配置加载、迁移、启动恢复及运行时切换场景的回归测试，并与 QQ 流式功能 PR [#8409](https://github.com/agentscope-ai/QwenPaw/pull/8409) 联动验证。

---

## 6. 功能请求与路线图信号

### 服务端级默认“助手消息折叠”
- Issue：[#8407](https://github.com/agentscope-ai/QwenPaw/issues/8407)
- PR：[#8408](https://github.com/agentscope-ai/QwenPaw/pull/8408)
- 已存在明确实现，属于今日最接近下一版本的功能项之一。
- 重点能力包括服务端默认值、跨浏览器/设备一致性和团队级统一配置。

### QQ C2C 流式消息
- Issue：[#8307](https://github.com/agentscope-ai/QwenPaw/issues/8307)
- PR：[#8409](https://github.com/agentscope-ai/QwenPaw/pull/8409)
- 已进入代码实现阶段，若通过评审，可能成为下一版本的重要渠道能力。
- 需要同时关注 [#8406](https://github.com/agentscope-ai/QwenPaw/issues/8406) 的启用状态问题，避免功能上线后出现配置不稳定。

### Console 模型池删除能力
- Issue：[#8195](https://github.com/agentscope-ai/QwenPaw/issues/8195)
- PR：[#8410](https://github.com/agentscope-ai/QwenPaw/pull/8410)
- 属于低风险、可独立交付的运维体验增强，具备较高近期合入概率。

### 记忆系统增强
- PR：[#8347](https://github.com/agentscope-ai/QwenPaw/pull/8347)
- 决策模型相关性压缩、图片记忆及实体标签生成，可能进入后续记忆能力迭代。
- 由于 PR 规模较大、依赖版本同步升级，合入节奏可能慢于 Console 和渠道类改动。

### 内部记忆检索过程跨渠道隔离
- PR：[#7835](https://github.com/agentscope-ai/QwenPaw/pull/7835)
- 虽非新功能，但直接关系隐私和可观测性边界，建议作为高优先级稳定性修复推进。

---

## 7. 用户反馈摘要

### 真实痛点与使用场景

1. **多设备和团队部署中的偏好不一致**
   - 用户希望助手消息折叠模式跟随实例，而非仅保存在浏览器。
   - 自托管和团队场景需要管理员统一默认值，已由 [#8408](https://github.com/agentscope-ai/QwenPaw/pull/8408) 提供实现路径。

2. **文件编辑造成不可见的数据变化**
   - 用户在针对单行进行编辑时，发现整个文件的 CRLF 被改为 LF。
   - 对非 UTF-8 文件，编辑还可能丢失字符；系统仍返回成功提示，形成“操作成功但内容已损坏”的负面体验。
   - 相关反馈见 [#8414](https://github.com/agentscope-ai/QwenPaw/issues/8414) 和 [#8415](https://github.com/agentscope-ai/QwenPaw/issues/8415)。

3. **治理配置与实际审计行为不一致**
   - 用户明确配置了 `audit_level: all`，却发现工具调用不再记录。
   - 诉求不只是恢复日志，更在于确保治理策略能够被可靠执行和验证，见 [#8412](https://github.com/agentscope-ai/QwenPaw/issues/8412)。

4. **命令安全检查产生误报**
   - 用户需要终止由自己启动的无关进程，但自保护规则阻断了合法命令。
   - 安全机制需要从字符串匹配升级为更精确的进程与变量语义判断，见 [#8413](https://github.com/agentscope-ai/QwenPaw/issues/8413)。

5. **渠道配置缺少可解释性**
   - QQ 启用状态被静默重置且没有警告，用户难以判断是配置迁移、启动恢复还是其他流程导致，见 [#8406](https://github.com/agentscope-ai/QwenPaw/issues/8406)。

### 满意与不满意信号

- 积极信号：Console、QQ、Matrix、ReMe 等方向均有明确 Issue/PR 对应，说明社区需求能较快转化为实现方案。
- 不满集中在“**静默失败**”“**成功提示与实际结果不一致**”“**配置声明未真正生效**”三类问题上。
- 今日评论和点赞较少，尚无法判断广泛用户满意度；但多个问题均提供了复现版本或具体配置，说明反馈质量较高。

---

## 8. 待处理积压

### 长时间开放且规模较大的 PR

#### ReMe 0.4.2.0 集成
- PR：[#8347](https://github.com/agentscope-ai/QwenPaw/pull/8347)
- 创建于 2026-10-20，规模标记为 XXXL。
- 同时涉及依赖升级、后台索引、Auto-Dream、压缩、图片记忆、标签生成和文件一致性，属于高耦合变更。
- 建议维护者拆分审查，明确依赖升级、记忆写入和标签生成各自的验收与回滚方案。

#### 自动记忆召回内容泄漏修复
- PR：[#7835](https://github.com/agentscope-ai/QwenPaw/pull/7835)
- 创建于 2026-09-17，目前仍为 **Under Review**。
- 该问题涉及外部渠道暴露内部工具调用过程，具有隐私影响。
- 建议明确阻塞原因、补充 Feishu 等非 Console 渠道的端到端验证，并优先安排安全审查。

#### Aliyun Coding Plan 模型目录回归保护
- PR：[#7390](https://github.com/agentscope-ai/QwenPaw/pull/7390)
- 创建于 2026-08-28，已开放约两个月。
- 关联问题为 [#6551](https://github.com/agentscope-ai/QwenPaw/issues/6551)，涉及 Aliyun Coding Plan 模型目录与官方 DashScope 列表不一致。
- 回归测试已具备明确目标，但长期未合并，可能导致模型选择器再次展示服务方并不支持的模型。

### 今日新增、尚无修复 PR 的高优先级缺陷

- [#8415：文件编辑编码损坏](https://github.com/agentscope-ai/QwenPaw/issues/8415)
- [#8414：CRLF 被全量转换为 LF](https://github.com/agentscope-ai/QwenPaw/issues/8414)
- [#8413：自保护机制误判 `kill $PID`](https://github.com/agentscope-ai/QwenPaw/issues/8413)
- [#8412：Agent 审计事件停止写入](https://github.com/agentscope-ai/QwenPaw/issues/8412)
- [#8406：QQ enabled 状态静默重置](https://github.com/agentscope-ai/QwenPaw/issues/8406)

---

## 项目健康度评估

**综合状态：活跃，但需优先收敛稳定性与待审 PR。**

- **开发活跃度：高**——24 小时内 16 条 Issue/PR 更新，功能覆盖渠道、Console、记忆、审计和文件工具多个核心模块。
- **交付状态：中等**——9 条 PR 待合并、仅 1 条关闭，且无新版本发布，成果尚未形成可发布版本。
- **稳定性风险：偏高**——文件编辑、审计、命令安全及渠道配置均存在数据完整性或治理完整性隐患。
- **社区反馈质量：较高但热度偏低**——问题描述具体、普遍附带版本或配置，但评论和点赞较少，尚缺广泛用户复现与共识。
- **建议优先级**：先处理 [#8412](https://github.com/agentscope-ai/QwenPaw/issues/8412)、[#8414](https://github.com/agentscope-ai/QwenPaw/issues/8414)、[#8415](https://github.com/agentscope-ai/QwenPaw/issues/8415) 和 [#8413](https://github.com/agentscope-ai/QwenPaw/issues/8413)，同步推动 [#7835](https://github.com/agentscope-ai/QwenPaw/pull/7835) 与 [#8347](https://github.com/agentscope-ai/QwenPaw/pull/8347) 收敛；功能侧可优先合入 [#8408](https://github.com/agentscope-ai/QwenPaw/pull/8408)、[#8410](https://github.com/agentscope-ai/QwenPaw/pull/8410) 和 [#8409](https://github.com/agentscope-ai/QwenPaw/pull/8409)，以形成下一版本候选。

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/NousResearch/hermes-agent">NousResearch/hermes-agent</a></summary>

# Hermes Agent 项目动态日报

**统计日期：2026-10-25**  
**数据范围：过去 24 小时**  
**项目地址：[NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent)**

---

## 1. 今日速览

- 过去 24 小时共更新 **50 条 Issues**：其中 **36 条新开或仍活跃，14 条已关闭**；同时更新 **50 条 PR**，但仍有 **45 条待合并、5 条已合并或关闭**。
- 今日讨论重点高度集中在**会话与网关一致性、桌面端兼容、插件依赖解析、凭证安全和 API Server 行为**，反映出 Hermes 正处于“多入口共享网关 + Desktop/Gateway 深度整合”阶段。
- 活跃度评估：**高**。单日涉及 Issue、PR 和多个平台组件，且多项高优先级修复已出现对应 PR；但 PR 合并比例仅为 **10%**，积压与评审压力较明显。
- 今日没有新版本发布，因此当天修复不会立即进入正式 Release，预计仍需经过合并、回归测试和版本打包阶段。
- 项目健康度判断：**功能推进明显，但稳定性与兼容性承压**。统一网关、Webapp、内存与插件体系正在快速演进，同时远程后端、Linux Desktop、共享网关、uv 多环境解析等问题频繁暴露。

---

## 2. 版本发布

今日**无新版本发布**，因此没有新增 Release 变更说明、破坏性变更或官方迁移指南。

### 影响提示

今日已关闭或已有修复 PR 的问题，很可能尚未进入稳定版。特别是以下问题仍需等待合并和发版：

- 插件 Python 依赖及 uv 多环境解析问题；
- API Server 对本地会话的续接失败；
- Linux Desktop 窗口透明度异常；
- 共享 Gateway 的 `/handoff` 缺失；
- 远程后端 Desktop 图片发送失败；
- Codex CLI OAuth token 恢复误判。

---

## 3. 项目进展

> 数据中没有提供已合并 PR 的标题或具体 diff，因此以下依据“已合并/关闭”的 Issue 与仍开放的明确 fix PR，归纳今日可确认的推进方向。

### 3.1 插件与更新流程稳定性得到修复

今日关闭的多项 Issue 指向同一个 uv 多环境解析根因：

- 带 Python 依赖的插件在 admission 阶段被拒绝，核心 `uv.lock` 在解析 Android split 时失败：  
  [#143305](https://github.com/NousResearch/hermes-agent/issues/143305)
- uv 0.13.5 升级后插件工作区解析失败，插件被驱逐并清空 memory provider：  
  [#143254](https://github.com/NousResearch/hermes-agent/issues/143254)
- managed environment 的 marker 未排除 Android，导致 Playwright 依赖无法解析：  
  [#135440](https://github.com/NousResearch/hermes-agent/issues/135440)
- Python 3.14 下 onnxruntime 缺少 Android wheel，导致记忆插件在所有 profile 上 fail-closed：  
  [#144003](https://github.com/NousResearch/hermes-agent/issues/144003)

相关修复 PR：

- [#144257](https://github.com/NousResearch/hermes-agent/pull/144257)：当更新需要暂时关闭插件时，不再清除 memory provider；插件重新兼容后可自动恢复，同时各入口应正确显示插件状态。

**进展评价：**这是对“更新、插件准入、依赖锁定、记忆 provider”整条链路的修复，不只是单一依赖兼容补丁。

### 3.2 Web Search 工具边界得到收敛

今日关闭的问题显示，`web_search` 曾同时暴露于 `web` 和 `browser` toolset，导致禁用 `web` 后浏览器仍可访问搜索能力：

- [#42585](https://github.com/NousResearch/hermes-agent/issues/42585)
- [#134593](https://github.com/NousResearch/hermes-agent/issues/134593)

**进展评价：**工具权限从“配置层开关”向“实际可达工具集”统一，有利于安全边界和用户预期的稳定性。

### 3.3 统一 Gateway 的合并后修复进入收尾阶段

统一网关主 PR 已合并，当前通过 tracking issue 继续收敛本地会话所有权、消息投递和跨平台兼容问题：

- [#134889](https://github.com/NousResearch/hermes-agent/issues/134889)

**进展评价：**统一 Gateway 是当前最重要的架构改造之一；主功能已落地，但跨 Desktop、CLI、消息平台及远程后端的兼容修复仍在持续。

### 3.4 API Server 与本地会话权限模型正在修正

今日新增的问题显示，API Server 的会话准入模型仍存在明显断层：

- CLI 创建的本地会话经 `/v1/chat/completions` 续接时返回 `permission_denied`：  
  [#143686](https://github.com/NousResearch/hermes-agent/issues/143686)
- 请求被 dispatch 前拒绝时仍返回 HTTP 200，OpenAI-compatible 客户端会误判成功：  
  [#144227](https://github.com/NousResearch/hermes-agent/issues/144227)

**进展评价：**这表明统一 Gateway 改造尚未完全覆盖 API 兼容层。后续预计重点是会话 source/owner 判定、错误状态码和 OpenAI 兼容语义的一致化。

### 3.5 进程生命周期治理方案持续推进

大型 PR [#137057](https://github.com/NousResearch/hermes-agent/pull/137057) 尝试为所有长期运行的 Hermes 子进程建立统一的 owner-death supervisor，并限制新的 detached spawn：

- Browser/Chromium
- Browser Use daemon
- llama-server 与模型
- language server
- shell、code-exec、MCP 等工具进程

关联提案：

- [#141018](https://github.com/NousResearch/hermes-agent/pull/141018)：让被遗弃的 Bot Desktop screen 在空闲窗口后自动停止。

**进展评价：**这属于基础设施级稳定性治理，有助于减少 Gateway 被杀后仍残留孤儿进程的问题；但改动范围大、风险面广，仍需充分评审。

---

## 4. 社区热点

### 4.1 统一 Gateway 合并后的本地会话所有权

- Tracking Issue：[#134889](https://github.com/NousResearch/hermes-agent/issues/134889)
- 评论数：**217**
- 状态：已关闭

这是今日讨论量最大的主题。其核心诉求是：所有与本地会话通信的入口应拥有统一的会话生命周期和状态，而不是由 CLI、Desktop、Gateway 或消息平台分别维护。

后续问题表明该工作尚未完全收尾：

- 远程后端 Desktop 会话在进程结束后无法从本地恢复：  
  [#139818](https://github.com/NousResearch/hermes-agent/issues/139818)
- 共享 Gateway 拒绝 `/handoff`，尽管已有 `handoff.request` RPC：  
  [#143608](https://github.com/NousResearch/hermes-agent/issues/143608)
- 对应修复 PR：  
  [#144275](https://github.com/NousResearch/hermes-agent/pull/144275)

**背后诉求：**用户需要跨 Desktop、CLI、Telegram、Slack 等入口无缝迁移会话，同时保持状态、路由和权限一致。

### 4.2 文档链与长期记忆架构 RFC

- RFC：[#143379](https://github.com/NousResearch/hermes-agent/issues/143379)
- 评论数：**15**
- 状态：开放

该 RFC 关注“持久文档链”：

1. 文档在会话压缩后仍保留来源和治理信息；
2. Agent 能重新读取文档，而不是要求用户重复说明；
3. 读取、权限治理和 compaction 形成统一闭环。

关联 PR：

- [#116673](https://github.com/NousResearch/hermes-agent/pull/116673)：让 `MEMORY.md` 锚定一条文档链。

**背后诉求：**长期记忆不能只是简单摘要或单个 Markdown 文件，而应具备可追溯、可治理、可继续扩展的结构。

### 4.3 Linux Desktop 启动后近乎不可见

- Issue：[#143426](https://github.com/NousResearch/hermes-agent/issues/143426)
- 评论数：**13**
- 👍：**10**
- 状态：开放

Linux/Wayland/XWayland 环境下，Desktop 窗口默认被设置为 **6% opacity**，且 Settings 中没有对应控件，用户几乎看不到窗口。

**背后诉求：**Desktop 应当具备跨平台可预测的默认行为；透明度功能不能以不可发现、不可恢复的方式默认启用。

### 4.4 Agent 不了解真实测试结果，重复执行临时测试

- Issue：[#62728](https://github.com/NousResearch/hermes-agent/issues/62728)
- 评论数：**8**
- 状态：开放

用户已有可用且通过的 `smoke_test.py`，但 Agent 没有感知真实测试结果，转而反复运行 ad-hoc 测试。

**背后诉求：**Agent 应读取项目已有的测试脚本、CI 配置和测试产物，而不是重复发明测试命令。

### 4.5 插件目录与生态扩张

今日值得关注的开放 PR：

- 新增切片精灵图工具：  
  [#143730](https://github.com/NousResearch/hermes-agent/pull/143730)
- 新增 OpenPaths 模型 provider 插件：  
  [#144276](https://github.com/NousResearch/hermes-agent/pull/144276)
- 新增 SimplexGen 3D 生成与 Mesh MCP：  
  [#144277](https://github.com/NousResearch/hermes-agent/pull/144277)
- 新增 Composer 拼写检查插件：  
  [#143059](https://github.com/NousResearch/hermes-agent/pull/143059)
- 新增 SGME 自托管长期记忆引擎：  
  [#143917](https://github.com/NousResearch/hermes-agent/pull/143917)
- 新增 Nextcloud Talk 平台插件：  
  [#140197](https://github.com/NousResearch/hermes-agent/pull/140197)

**背后诉求：**社区希望通过标准插件目录扩展模型 provider、视觉、记忆、消息平台和桌面工具，而不必修改 Hermes 核心代码。

---

## 5. Bug 与稳定性

### P0 / 架构级风险

#### 统一 Gateway 会话所有权仍有跨端恢复缺口

- [#139818](https://github.com/NousResearch/hermes-agent/issues/139818)
- 严重度：**P2，但架构影响高**
- 现状：开放
- 修复状态：已有统一 Gateway tracking issue [#134889](https://github.com/NousResearch/hermes-agent/issues/134889) 已关闭，但该具体复现仍开放，暂未见直接对应的独立 fix PR。

影响：远程后端上创建的 Desktop 会话，在宿主进程消失后无法从本地 Desktop 恢复。

---

### P1 / 高优先级安全与跨平台故障

#### Linux Desktop 窗口默认只有 6% 透明度

- [#143426](https://github.com/NousResearch/hermes-agent/issues/143426)
- 严重度：**P2，用户影响高**
- 修复状态：未发现明确 fix PR
- 建议：检查透明度默认值及 Settings 控件暴露，并在 Wayland/XWayland 上加入回归测试。

#### 裸机 Linux Desktop 无法启动窗口

- [#143569](https://github.com/NousResearch/hermes-agent/issues/143569)
- 严重度：**P2**
- 修复状态：未发现明确 fix PR
- 根因：Chromium renderer 在 `/dev/shm` 上崩溃，user namespace sandbox 无法重新挂载 `/proc`。

#### 命令行参数中的凭证可能绕过聊天与审批卡脱敏

- [#143982](https://github.com/NousResearch/hermes-agent/issues/143982)
- 严重度：**P3，安全影响高**
- 修复状态：未发现明确 fix PR
- 涉及形态：
  - `--password=...`
  - `--token=...`
  - `--api-key=...`
  - `docker login -p ...`
  - Azure `AccountKey` / `SharedAccessKey`

这是本日报中最值得安全优先处理的 Issue 之一。

---

### P2 / 主要功能回归

#### API Server 无法续接 CLI 本地会话

- [#143686](https://github.com/NousResearch/hermes-agent/issues/143686)
- 严重度：**P2**
- 修复状态：未发现明确 fix PR
- 影响：CLI 创建的 `local-*` 会话通过 `/v1/chat/completions` 续接时立即报 `permission_denied`。

#### API Server 在请求未派发时仍返回 HTTP 200

- [#144227](https://github.com/NousResearch/hermes-agent/issues/144227)
- 严重度：**P2**
- 修复状态：未发现明确 fix PR
- 影响：OpenAI-compatible 客户端误以为请求成功，但实际没有任何内容返回。

#### Discord 自动线程中的自动化任务永久 `admission_conflict`

- [#142461](https://github.com/NousResearch/hermes-agent/issues/142461)
- 严重度：**P3**
- 修复状态：未发现明确 fix PR
- 影响：子线程完成后，父线程不恢复，自动化事件不断重试。

#### Desktop Bot Mode 无法创建群聊

- [#144272](https://github.com/NousResearch/hermes-agent/issues/144272)
- 严重度：**P3**
- 修复状态：未发现明确 fix PR
- 矛盾状态：`groups.capabilities` 声称 driver 可用，但创建群聊时返回 `Group driver unavailable`。

#### Desktop 打开消息平台会话时 reasoning-effort 一直转圈

- [#142336](https://github.com/NousResearch/hermes-agent/issues/142336)
- 严重度：**P2**
- 修复状态：未发现明确 fix PR
- 影响：Telegram、WeChat、飞书等会话在 Desktop 中无法正确显示实际推理等级。

#### 远程 `hermes serve` 发送图片失败

- [#144186](https://github.com/NousResearch/hermes-agent/issues/144186)
- 严重度：**P2**
- 修复状态：未发现明确 fix PR
- 影响：Desktop 与远程后端同为 v0.22.5 时，`prompt.submit` 附件参数仍不兼容。

#### Browser 截图缩放后未标注比例，坐标点击偏移

- [#134167](https://github.com/NousResearch/hermes-agent/issues/134167)
- 严重度：**P2**
- 修复状态：未发现明确 fix PR
- 影响：截图从 1920×993 缩至 960×496，但点击坐标仍按原视口解释。

#### Windows 更新自动修复陷入循环

- [#139132](https://github.com/NousResearch/hermes-agent/issues/139132)
- 严重度：**P2**
- 修复状态：未发现明确 fix PR
- 影响：同步阶段失败绕过重试计数，pending obligation 未清除，每次启动继续自动修复。

---

### P3 / 已出现明确修复 PR

#### 插件更新期间不应清空 memory provider

- Issue：
  - [#131216](https://github.com/NousResearch/hermes-agent/issues/131216)
  - [#129198](https://github.com/NousResearch/hermes-agent/issues/129198)
  - [#125919](https://github.com/NousResearch/hermes-agent/issues/125919)
- Fix PR：[#144257](https://github.com/NousResearch/hermes-agent/pull/144257)
- 状态：**已有修复 PR，待合并**

#### 共享 Gateway 恢复 `/handoff`

- Issue：[#143608](https://github.com/NousResearch/hermes-agent/issues/143608)
- Fix PR：[#144275](https://github.com/NousResearch/hermes-agent/pull/144275)
- 状态：**已有修复 PR，待合并**

#### 流式 worker 无法被 stale kill 回收，可能永久卡住

- Fix PR：[#144201](https://github.com/NousResearch/hermes-agent/pull/144201)
- 状态：**已有修复 PR，待合并**

#### Codex CLI OAuth 恢复错误比较 `sub` claim

- Issue：[#144236](https://github.com/NousResearch/hermes-agent/issues/144236)
- 严重度：**P2**
- 修复状态：未发现明确 fix PR
- 根因：同一账号经不同 IdP 重新登录后 `sub` 发生变化，但 Hermes 将其视为 token 不匹配。

---

## 6. 功能请求与路线图信号

### 6.1 Gateway 直接托管 Desktop Webapp——纳入下一版本的概率较高

- PR：[#141864](https://github.com/NousResearch/hermes-agent/pull/141864)
- 方向：让 Gateway 在自身监听端口提供浏览器版 Desktop workspace，使 Webapp、CLI、原生 Desktop 和消息平台共享同一 Profile/Gateway。
- 路线图意义：这是统一 Gateway 架构的自然延伸。
- 判断：**高概率**。它与统一会话所有权、跨端连接和 Desktop 共享 Gateway 的总体方向一致。

### 6.2 插件可在所有输出面延迟流式消息——高概率

- PR：[#144266](https://github.com/NousResearch/hermes-agent/pull/144266)
- 方向：插件可注册 `transform_llm_output(..., hold_stream=True)`，先隐藏原始回复，由策略插件重写后再统一显示。
- 路线图意义：有利于脱敏、策略过滤和审核类插件在 CLI、Desktop、消息平台保持一致。
- 判断：**高概率**。设计目标与插件治理方向明确，且标记为 CI-reviewed。

### 6.3 Vault 密钥进入 OS Keychain——中高概率

- PR：[#144246](https://github.com/NousResearch/hermes-agent/pull/144246)
- 方向：
  - 可选将 Vault 加密密钥放入 macOS Keychain；
  - 提供经过验证的双向迁移；
  - 1Password/Bitwarden 解锁 token 不再以可导入模块全局变量形式长期存在。
- 判断：**中高概率**。安全价值明确，但需关注跨平台支持与迁移回滚路径。

### 6.4 共享 Gateway 支持 `/handoff`——高概率

- PR：[#144275](https://github.com/NousResearch/hermes-agent/pull/144275)
- 判断：**高概率**。直接补齐已有 RPC 与共享 Gateway 能力之间的缺口。

### 6.5 长期记忆文档链——中高概率

- RFC：[#143379](https://github.com/NousResearch/hermes-agent/issues/143379)
- PR：[#116673](https://github.com/NousResearch/hermes-agent/pull/116673)
- 判断：**中高概率**。用户需求强，但涉及压缩、来源追踪、权限治理和存储模型，落地节奏可能慢于普通功能。

### 6.6 TUI v2 功能对齐 v1——中低概率

- Issue：[#12130](https://github.com/NousResearch/hermes-agent/issues/12130)
- 缺失范围：约 23/48 个 slash command、`@file`/`@diff`/`@url` 等上下文引用、Skills Hub、Tools Config、Cron、Plugins、Insights 等。
- 判断：**中低概率**。范围大，可能先按功能族逐步补齐，而非一次性完整对齐。

### 6.7 Agent 感知真实测试结果——中高概率

- Issue：[#62728](https://github.com/NousResearch/hermes-agent/issues/62728)
- 判断：**中高概率**。这是 Agent 可信度与开发效率的基础能力，可能通过测试发现协议、verification evidence 或上下文注入实现。

### 6.8 Kanban 归档工具对模型开放

- PR：[#143372](https://github.com/NousResearch/hermes-agent/pull/143372)
- 方向：让模型调用 `kanban_archive`，复用 CLI 的既有归档路径。
- 判断：**中等概率**。实现路径明确，但需关注 worker termination 语义和并发一致性。

### 6.9 本地模型端口与连接诊断增强——较高概率

- llama.cpp 新端口发现：  
  [#144270](https://github.com/NousResearch/hermes-agent/pull/144270)
- 连接失败分类与 TLS fail-fast：  
  [#144269](https://github.com/NousResearch/hermes-agent/pull/144269)
- 判断：**较高概率**。改动局部、用户价值明确，且来自成熟上游模式移植。

---

## 7. 用户反馈摘要

### 7.1 多入口体验已经形成，但会话连续性仍不稳定

用户希望在 Desktop、CLI、Telegram、Slack、Webapp 之间迁移任务时，会话、消息和状态保持连续。当前失败点包括：

- 远程后端会话无法从本地恢复：  
  [#139818](https://github.com/NousResearch/hermes-agent/issues/139818)
- 共享 Gateway `/handoff` 被拒绝：  
  [#143608](https://github.com/NousResearch/hermes-agent/issues/143608)
- API Server 对 CLI 本地会话报权限错误：  
  [#143686](https://github.com/NousResearch/hermes-agent/issues/143686)

**满意点：**统一 Gateway 的总体方向获得高度关注，最高热度 Issue 达到 217 条评论，说明用户愿意参与并追踪这一核心架构演进。

**不满意点：**能力已经存在但在不同入口间不可用，体现出“功能存在”和“统一可用”之间仍有明显落差。

### 7.2 Desktop 跨平台稳定性直接影响可用性

Linux 用户报告：

- 窗口只有 6% 透明度，几乎不可见：  
  [#143426](https://github.com/NousResearch/hermes-agent/issues/143426)
- 裸机环境 Chromium renderer 崩溃：  
  [#143569](https://github.com/NousResearch/hermes-agent/issues/143569)

此外，Windows 用户报告：

- 中断更新后每次启动都进入自动修复循环：  
  [#139132](https://github.com/NousResearch/hermes-agent/issues/139132)

**核心痛点：**Desktop 已经覆盖多个操作系统，但系统默认差异、sandbox 差异和更新中断后的恢复路径仍不够成熟。

### 7.3 插件系统“目录丰富，但安装和准入不稳定”

社区积极提交 provider、记忆、视觉、消息平台和开发工具插件，但 uv/Python 3.14/Android marker 问题会阻止插件准入，甚至驱逐已有插件并清空 memory provider：

- [#143305](https://github.com/NousResearch/hermes-agent/issues/143305)
- [#143254](https://github.com/NousResearch/hermes-agent/issues/143254)
- [#144003](https://github.com/NousResearch/hermes-agent/issues/144003)
- [#144257](https://github.com/NousResearch/hermes-agent/pull/144257)

**核心痛点：**用户需要“插件可发现、可安装、可升级、可回退、更新时不破坏记忆配置”的完整生命周期，而不只是插件目录。

### 7.4 Agent 的验证行为仍不够可信

用户已经拥有真实测试脚本，但 Agent 无法识别测试结果，反复执行临时测试：

- [#62728](https://github.com/NousResearch/hermes-agent/issues/62728)

**核心痛点：**Agent 应将项目已有的测试、CI 和 verifier 结果视为可信证据，减少无意义测试和额外 token/时间消耗。

### 7.5 安全脱敏需要覆盖真实命令格式

用户指出，仅依赖通用密钥模式会漏掉常见的命令行和云厂商凭证格式：

- [#143982](https://github.com/NousResearch/hermes-agent/issues/143982)

**核心痛点：**脱敏不能只做“看起来像 secret”的正则匹配，而要理解命令参数语义和不同云厂商的凭证结构。

### 7.6 消息平台与自动化行为仍有状态机问题

- Discord 自动线程出现永久 admission conflict：  
  [#142461](https://github.com/NousResearch/hermes-agent/issues/142461)
- Desktop 打开消息平台会话时 reasoning-effort 持续加载：  
  [#142336](https://github.com/NousResearch/hermes-agent/issues/142336)
- Desktop Bot Mode 群聊驱动状态不一致：  
  [#144272](https://github.com/NousResearch/hermes-agent/issues/144272)

**核心痛点：**平台接入不仅要“能连接”，还需要在线程恢复、群组能力、会话 UI 展示和自动化重试方面形成一致的状态机。

---

## 8. 待处理积压

### 8.1 高评论、高影响的架构问题

#### 统一 Gateway 后续修复的闭环完整性

- [#134889](https://github.com/NousResearch/hermes-agent/issues/134889)
- 虽已关闭，但远程恢复、共享 Gateway handoff、API Server 本地会话权限等后续问题仍存在。
- 建议维护者重新建立明确的兼容矩阵，按“CLI / Desktop / Telegram / Slack / API Server / remote serve”逐项验证。

### 8.2 已存在较长时间但仍开放的重要 Issue

#### TUI v2 与 v1 功能差距

- [#12130](https://github.com/NousResearch/hermes-agent/issues/12130)
- 创建于 2026-04-18，至今仍开放。
- 建议：拆分为 slash command、上下文引用、配置/工具界面、平台能力四个里程碑，避免长期巨型 Issue 失去推进焦点。

#### Agent 真实测试结果不可见

- [#62728](https://github.com/NousResearch/hermes-agent/issues/62728)
- 创建于 2026-07-11。
- 建议：优先定义 verifier evidence 的输入格式、测试发现规则和可信度边界。

#### 后台自我改进越权写入

- [#72082](https://github.com/NousResearch/hermes-agent/issues/72082)
- 创建于 2026-07-26。
- 问题包括只读回合中仍可能写入 skill library，且未披露创建的文件。
- 建议：将其视为权限边界问题优先处理，而不只作为一般功能缺陷。

### 8.3 大型 PR 的评审与拆分压力

#### 全局长生命周期子进程监管

- [#137057](https://github.com/NousResearch/hermes-agent/pull/137057)
- 涉及 Agent、CLI、Gateway、Browser、MCP、Code Exec、Cron、Plugins、Local Models 等多个模块。
- 建议：按 supervisor 核心、进程类型适配器、detached spawn ratchet、Windows/Linux 回归测试分阶段合并。

#### Gateway 托管 Desktop Webapp

- [#141864](https://github.com/NousResearch/hermes-agent/pull/141864)
- 改动横跨 Desktop、Dashboard、Profiles、Gateway 和认证。
- 建议：在合并前明确本地、远程、多 Profile 和升级兼容矩阵。

#### 文档链长期记忆

- [#116673](https://github.com/NousResearch/hermes-agent/pull/116116673)
- 与 RFC [#143379](https://github.com/NousResearch/hermes-agent/issues/143379) 配套。
- 建议：先完成最小端到端版本，同时明确文档来源、访问权限、compaction 后的检索和删除语义。

### 8.4 今日新增但尚无直接修复 PR 的高风险积压

建议维护者优先补建修复 PR：

1. 命令行及 Azure 凭证脱敏：  
   [#143982](https://github.com/NousResearch/hermes-agent/issues/143982)
2. API Server 本地会话权限：  
   [#143686](https://github.com/NousResearch/hermes-agent/issues/143686)
3. API Server 错误 HTTP 状态：  
   [#144227](https://github.com/NousResearch/hermes-agent/issues/144227)
4. Linux Desktop 透明度：  
   [#143426](https://github.com/NousResearch/hermes-agent/issues/143426)
5. Linux Desktop `/dev/shm` 崩溃：  
   [#143569](https://github.com/NousResearch/hermes-agent/issues/143569)
6. 远程 Desktop 图片附件：  
   [#144186](https://github.com/NousResearch/hermes-agent/issues/144186)
7. Codex OAuth `sub` 稳定性：  
   [#144236](https://github.com/NousResearch/hermes-agent/issues/144236)
8. Windows 更新自动修复循环：  
   [#139132](https://github.com/NousResearch/hermes-agent/issues/139132)

---

## 总体判断

Hermes Agent 今日呈现出明显的**高速开发与架构收敛并行**状态。统一 Gateway、Webapp、共享 Gateway handoff、插件输出治理和长期记忆文档链，说明项目正在从“多入口工具集合”向“统一运行时平台”演进。

但当前主要风险也很清楚：

1. **会话所有权与跨端恢复尚未完全统一**；
2. **Desktop 在 Linux、Windows、远程后端上的兼容矩阵存在明显缺口**；
3. **插件依赖解析和更新流程对 memory provider 等核心状态存在破坏性影响**；
4. **API Server 的权限与 HTTP 语义仍不完全兼容 OpenAI 客户端预期**；
5. **安全脱敏对真实 CLI 凭证格式覆盖不足**；
6. **50 条 PR 中仅 5 条合并或关闭，评审吞吐是近期主要瓶颈**。

综合健康度可评为：**中高活跃、架构推进较快，但稳定性债务和评审积压偏高**。下一阶段最关键的不是继续扩张功能数量，而是完成统一 Gateway 的兼容收口、插件更新事务安全、Desktop 跨平台回归，以及 API Server 的会话与错误语义统一。

</details>

<details>
<summary><strong>OpenHuman</strong> — <a href="https://github.com/tinyhumansai/openhuman">tinyhumansai/openhuman</a></summary>

# OpenHuman 项目动态日报

**统计日期：2026-10-25**  
**数据范围：过去 24 小时 GitHub 更新**  
**项目地址：[tinyhumansai/openhuman](https://github.com/tinyhumansai/openhuman)**

---

## 1. 今日速览

过去 24 小时项目共有 **14 条 Issue 更新**、**50 条 PR 更新**，其中 Issue 新开或活跃 12 条、关闭 2 条；PR 待合并 2 条、已合并或关闭 48 条。  
今日开发活动高度集中在 **TinyChannels v2 宿主接入、安全与沙箱能力拆分、测试稳定性修复、凭据与 OAuth 生命周期治理** 等方向，主干维护吞吐较快。  
当前仍有 2 个待合并 PR，但其中核心工作包括较大的 TinyChannels v2 集成 Epic #8397，变更范围和验收风险需要重点关注。  
用户侧问题集中在 **CortexDB 记忆认证失败、Workflow Copilot 审批卡缺失、文件内容读取失败、低内存设备启动卡死**，部分 P1/P2 问题尚未看到明确修复 PR。  
综合评估：**开发活跃度很高、工程收敛趋势明显，但当前版本稳定性与低配置用户体验仍存在较高风险**。

---

## 3. 项目进展

> 今日无新版本发布，因此没有发布说明、破坏性变更或升级注意事项。

### 3.1 TinyChannels v2 宿主集成进入集中交付阶段

- **[PR #8397 — feat: epic 7964 — TinyChannels v2 host integration](https://github.com/tinyhumansai/openhuman/pull/8397)**  
  状态：**待合并**。  
  该 PR 是今日最重要的待合并变更，目标包括：
  - 在 OpenHuman 宿主中落地 TinyChannels v2；
  - 将 `web_chat` 改造成基于 TinyAgents turn runner 和 TinyChannels web adapter 的轻量宿主模块；
  - 由 OpenHuman 提供策略和端口实现；
  - 完成逐文件所有权审计，并关联关闭 [#7964](https://github.com/tinyhumansai/openhuman/issues/7964) 与 [#7970](https://github.com/tinyhumansai/openhuman/issues/7970)。

  **进展判断：** 项目正从“各渠道分别维护能力”转向统一渠道 API，是架构收敛的关键里程碑。由于 PR 体量和宿主集成范围较大，建议在合并前重点确认兼容性、回归测试和 provider 覆盖度。

- **[Issue #7964 — Epic: TinyChannels v2](https://github.com/tinyhumansai/openhuman/issues/7964)**  
  状态：活跃。目标是以一套渠道 API 覆盖文本、语音、附件、图片、视频、流式响应、输入状态、已读回执和表情等能力，并为 WhatsApp、Telegram、Discord、Slack、Signal、iMessage、Email 及内置 Web Chat 提供适配器。

### 3.2 安全、策略、审批与沙箱能力进一步拆分

- **[Issue #8369 — security/policy/approvals/sandboxing migration epic](https://github.com/tinyhumansai/openhuman/issues/8369)**  
  状态：开放，P3。  
  该 Epic 取代此前已关闭的 [#7328](https://github.com/tinyhumansai/openhuman/issues/7328)，计划把分散在 `openhuman-core/src/security/`、`sandbox/` 和其他文件中的相关能力迁移到 TinySecurity 与 TinyBox。公开摘要称，相关代码约涉及 **140 个文件、30,879 行非测试代码**，并另有约 26.1k 行测试代码。

- **[Issue #7328 — consolidate security, policy, approvals and sandboxing](https://github.com/tinyhumansai/openhuman/issues/7328)**  
  状态：今日关闭。旧 Tracker 已由新的逐文件迁移 Epic [#8369](https://github.com/tinyhumansai/openhuman/issues/8369) 接续，属于治理方式调整，而非安全迁移工作整体终止。

### 3.3 子智能体框架进一步精简

- **[Issue #8088 — Epic: one async spawn_subagent](https://github.com/tinyhumansai/openhuman/issues/8088)**  
  状态：今日关闭。  
  该 Epic 完成了从复杂宿主子智能体机制向统一 `spawn_subagent` 路径的收敛，并将目标、会话和工具能力上游到 TinyAgents，同时删除 OpenHuman 不再需要的冗余团队、图工作流、并行 fan-out、worktree 等实现。

  **进展判断：** 核心运行时边界更清晰，减少宿主层重复实现，但后续仍需验证多代理、取消、权限及持久化行为没有回归。

### 3.4 测试稳定性专项治理明显加速

今日大量已关闭 PR 聚焦 nextest、E2E、模块存储和测试夹具问题：

- **[PR #8389 — fix last three red tests](https://github.com/tinyhumansai/openhuman/pull/8389)**  
  修复 TinyChannels v0.1.42 pin 导致的注册表断言漂移，以及 Telegram 凭据连接/断开流程和 cron 挂起测试问题。

- **[PR #8386 — fix delegated_clarification_flow and managed capture repeat](https://github.com/tinyhumansai/openhuman/pull/8386)**  
  调整测试以适配 `manage_tasks` delegate alias 退役及 specialist hand-off 迁移到 `spawn_subagent`，属于测试契约更新，未发现产品缺陷。

- **[PR #8384 — fix doctor_e2e shared-mock race and telegram sender id](https://github.com/tinyhumansai/openhuman/pull/8384)**  
  修复共享 mock 后端在 nextest 并行进程下相互重置请求日志造成的竞态，并调整 Telegram sender ID 测试。

- **[PR #8382 — fix module-storage, scope-move, remigration and stale-pin failures](https://github.com/tinyhumansai/openhuman/pull/8382)**  
  除测试问题外，还修复了 scope move 将源数据库驱动 bookkeeping 误判为 profile 数据、从而允许空 scope 迁移的问题，以及由此引发的重复导入失败。

- **[PR #8381 — make g2C e2e suites green](https://github.com/tinyhumansai/openhuman/pull/8381)**  
  处理 MCP stdio module reload、过期测试及凭据存储相关失败。部分问题源于测试环境缺少 `pnpm install`、registry-pinned modules 或凭据存储环境，并非全部属于产品缺陷。

- **[PR #8380 — boot default core context in per-process e2e setups](https://github.com/tinyhumansai/openhuman/pull/8380)**  
  修复 nextest 每测试独立进程后，测试不再继承前一用例构建的 `CoreContext`，导致 owner scope 与 storage backend 为空的问题。

- **[PR #8379 — green group-C e2e suites](https://github.com/tinyhumansai/openhuman/pull/8379)**  
  除测试清理外，修复了缓存会话长期占用 profile slot 的真实产品问题；`LegacyUiBridge`、`TinyJuiceHtml` 和 sub-agent persistence 持有强引用，可能阻止存储后端释放。

- **[PR #8377 — green group-B nextest failures](https://github.com/tinyhumansai/openhuman/pull/8377)**  
  修复 cdylib stream 使用过期 blob prefix、MCP dispatch 参数验证环境缺依赖、prompt size 漂移和 Composio 死锁等测试问题。

- **[PR #8376 — fix sign-out storage-backend test deadlock](https://github.com/tinyhumansai/openhuman/pull/8376)**  
  修复测试错误地重复获取非重入 storage-slot lock 导致的永久挂起。

- **[PR #8375 — kill tests still running after 5 minutes](https://github.com/tinyhumansai/openhuman/pull/8375)**  
  为 nextest 增加默认超时：单测 60 秒、整体 CI 最多 5 次慢超时，防止死锁测试无限占用 CI。

**阶段评估：** 项目正在显著改善测试可靠性，且不只修改断言，还修复了 profile slot 泄漏、scope 迁移误判等潜在产品问题。不过，一次性处理大量测试分组也意味着主干长期存在结构性回归风险，应关注修复后的全量 nextest 稳定性。

### 3.5 凭据、OAuth 与模块构建能力继续加固

- **[PR #8373 — scope provider credentials and relocate OAuth ownership](https://github.com/tinyhumansai/openhuman/pull/8373)**  
  状态：已关闭。修复会话过期事件未携带凭据指纹、过期 401 错误失效新会话，以及凭据 scope 重绑定失败后未回滚 active-user marker/profile 等问题。

- **[PR #8392 — Build modules without legacy-import or secret-file](https://github.com/tinyhumansai/openhuman/pull/8392)**  
  状态：已关闭。将 [#8321](https://github.com/tinyhumansai/openhuman/pull/8321) 重新同步到当前 `main`，解决 `openhuman-embed` 开启 `modules`、关闭 `legacy-import` 和 `secret-file` 时无法编译的问题。

- **[PR #8321 — Build modules without legacy-import or secret-file](https://github.com/tinyhumansai/openhuman/pull/8321)**  
  状态：已关闭，原 PR 后续由 #8392 承接。

- **[PR #8390 — advance tinystoragedrivers to v2.1.1](https://github.com/tinyhumansai/openhuman/pull/8390)**  
  状态：已关闭。更新 vendored `tinystoragedrivers` gitlink 与相关 lockfile，切换至主线发布提交。

- **[PR #8383 — re-pin tinychannels to v0.1.42](https://github.com/tinyhumansai/openhuman/pull/8383)**  
  状态：已关闭。更新 TinyChannels registry 与 gitlink，修复 v0.1.41+ 存储授权声明对迁移源集合的处理。

### 3.6 媒体、制品与计划评审链路继续模块化

- **[PR #8256 — delegate artifact filing to harness tools](https://github.com/tinyhumansai/openhuman/pull/8256)**  
  状态：已关闭。将通用媒体制品结果遍历、标注及进度处理委托给 TinyAgents harness tools，由 OpenHuman 实现 filing port，继续保留生产持久化职责。

- **[PR #8249 — move tool-result wiring into harness module](https://github.com/tinyhumansai/openhuman/pull/8249)**  
  状态：已关闭。将工具结果制品持久化和 materialized-file retention 移入宿主所有的 `agent/harness/tool_result_artifacts` 模块。

- **[PR #8246 — cover live and replayed plan review requests](https://github.com/tinyhumansai/openhuman/pull/8246)**  
  状态：已关闭。增加 parked turn 的计划评审请求端到端覆盖，验证活跃客户端实时接收、后加入客户端重放及请求解决流程。

- **[PR #8227 — Promote latency route and prompt fixes](https://github.com/tinyhumansai/openhuman/pull/8227)**  
  状态：已关闭。统一 agent 和 cron 调用的路由 provider 选项及 reasoning effort，避免重复应用路由，并改善无集成时恢复 prompt 的刷新行为。

---

## 4. 社区热点

### Issues

1. **[Issue #7328 — Consolidate security, policy, approvals and sandboxing](https://github.com/tinyhumansai/openhuman/issues/7328)**  
   - **38 条评论**，为今日最活跃 Issue。
   - 诉求：把分散的安全、策略、审批和沙箱逻辑集中到 TinySecurity/TinyBox，并明确 OpenHuman 集成及迁移责任。
   - 背景：原 Tracker 已关闭，新的逐文件迁移工作由 [#8369](https://github.com/tinyhumansai/openhuman/issues/8369) 延续。

2. **[Issue #8088 — One async spawn_subagent](https://github.com/tinyhumansai/openhuman/issues/8088)**  
   - **14 条评论**，今日关闭。
   - 诉求：精简宿主内部约 10k 行子智能体基础设施，统一异步派生入口，并把通用能力下沉到 TinyAgents。
   - 讨论重点：团队、图工作流、fan-out、worktree 等宿主能力哪些应保留、删除或下沉。

3. **[Issue #7964 — TinyChannels v2](https://github.com/tinyhumansai/openhuman/issues/7964)**  
   - **1 条评论**，但当前有核心实现 PR [#8397](https://github.com/tinyhumansai/openhuman/pull/8397)，是今日功能开发主线。
   - 诉求：统一所有消息渠道和富媒体能力，减少 provider 重复实现，并让 Web Chat 与外部 provider 共享同一套 API。

### Pull Requests

- 今日展示的 20 条重点 PR 均未提供明确评论数或点赞数，因此无法基于 reaction 排名判断“最受欢迎”的 PR。
- 从影响范围和关联 Issue 看，**[PR #8397](https://github.com/tinyhumansai/openhuman/pull/8397)**、**[PR #8382](https://github.com/tinyhumansai/openhuman/pull/8382)**、**[PR #8379](https://github.com/tinyhumansai/openhuman/pull/8379)** 和 **[PR #8373](https://github.com/tinyhumansai/openhuman/pull/8373)** 是今日最值得维护者关注的关键变更。

---

## 5. Bug 与稳定性

### P1：严重

1. **[Issue #8393 — CortexDB memory fails with 401 ACTOR_MISMATCH](https://github.com/tinyhumansai/openhuman/issues/8393)**  
   - 环境：OpenHuman v0.64.15、macOS、自有 CortexDB API key。  
   - 现象：Memory 中选择 CortexDB provider 后，请求持久化记忆即返回 401 `ACTOR_MISMATCH`。  
   - **修复 PR：未发现明确对应 PR。**

2. **[Issue #8391 — openhuman-core does not build without the `channels` feature](https://github.com/tinyhumansai/openhuman/issues/8391)**  
   - `openhuman-core` 在 `default-features = false`、未启用 `channels` 时无法编译。  
   - 直接原因是 agent bus 使用 `channels::run_channel_turn` 时未正确做 feature gate。  
   - **潜在关联：**
     - [PR #8397](https://github.com/tinyhumansai/openhuman/pull/8397) 正在进行 TinyChannels v2 宿主集成；
     - [Issue #7964](https://github.com/tinyhumansai/openhuman/issues/7964) 对应渠道架构 Epic。  
   - **修复 PR：尚未确认已覆盖。**

### P2：较高

3. **[Issue #8394 — CortexDB memory fails with 401 ACTOR_MISMATCH](https://github.com/tinyhumansai/openhuman/issues/8394)**  
   - 与 [#8393](https://github.com/tinyhumansai/openhuman/issues/8393) 描述高度一致，可能是重复报告。  
   - **修复 PR：未发现明确对应 PR。**  
   - 建议维护者先合并重复问题，以降低排障信息分散。

4. **[Issue #8396 — OpenHuman Fails to Retrieve File Contents](https://github.com/tinyhumansai/openhuman/issues/8396)**  
   - 助手无法通过受支持的文件访问流程返回文件内容，直接影响依赖文档、附件或知识文件的日常任务。  
   - **修复 PR：未发现明确对应 PR。**

5. **[Issue #8378 — Workflow Copilot denies run_flow without showing an approval request](https://github.com/tinyhumansai/openhuman/issues/8378)**  
   - 用户已明确确认，但 `run_flow` 仍被拒绝，且没有出现审批卡，形成“无法批准也无法执行”的死路。  
   - **修复 PR：未发现明确对应 PR。**  
   - 该问题涉及审批和策略链路，可重点检查新安全模块 Epic [#8369](https://github.com/tinyhumansai/openhuman/issues/8369)。

6. **[Issue #8387 — Lite Mode for 4GB RAM, Cloud Only option](https://github.com/tinyhumansai/openhuman/issues/8387)**  
   - 4GB/8GB RAM、低端 CPU 的 Windows 设备首次启动时尝试加载大型本地模型，停留在登录加载界面。  
   - 建议方向包括 Lite Mode、首次启动 Cloud Only，以及模型下载策略提示。  
   - **修复 PR：未发现明确对应 PR。**

7. **[Issue #8385 — Discord / Google sign-in stuck on 4GB RAM](https://github.com/tinyhumansai/openhuman/issues/8385)**  
   - Windows 10、4GB RAM、i3 设备安装后无限加载，无法登录，且没有错误提示或 Roaming 数据目录可供清理。  
   - **修复 PR：未发现明确对应 PR。**  
   - 与 [#8387](https://github.com/tinyhumansai/openhuman/issues/8387) 高度相关，可能应合并处理。

### 已在今日 PR 中修复或缓解的问题

- **[PR #8376](https://github.com/tinyhumansai/openhuman/pull/8376)**：修复 storage-slot lock 非重入导致的测试永久死锁。
- **[PR #8375](https://github.com/tinyhumansai/openhuman/pull/8375)**：为 nextest 增加超时，防止自死锁用例拖垮 CI。
- **[PR #8382](https://github.com/tinyhumansai/openhuman/pull/8382)**：修复 profile scope 误判及重复迁移失败。
- **[PR #8379](https://github.com/tinyhumansai/openhuman/pull/8379)**：修复缓存会话和多个组件持有强引用导致 profile slot 无法释放。
- **[PR #8373](https://github.com/tinyhumansai/openhuman/pull/8373)**：修复凭据作用域、过期 401 误伤新会话及 OAuth ownership 问题。
- **[PR #8392](https://github.com/tinyhumansai/openhuman/pull/8392)**：修复无 `legacy-import`、无 `secret-file` 时模块构建失败。
- **[PR #8389](https://github.com/tinyhumansai/openhuman/pull/8389)**：修复 cron 挂起测试和 TinyChannels pin 断言漂移。

---

## 6. 功能请求与路线图信号

### 6.1 TinyChannels v2：最明确的下一阶段方向

- 请求入口：[Issue #7964](https://github.com/tinyhumansai/openhuman/issues/7964)
- 实施入口：[PR #8397](https://github.com/tinyhumansai/openhuman/pull/8397)

目标包括统一文本、语音、附件、图片、视频、流式输出、typing、read receipt、reaction，并覆盖 WhatsApp、Telegram、Discord、Slack、Signal、iMessage、Email 和 Web Chat。

**纳入下一版本的概率：高。**  
已有直接实现 PR，且当前仍是待合并状态，说明维护者正在主动推进。

### 6.2 统一通知中心

- **[Issue #8395 — Unified Notification Center for AI Agents and Workflows](https://github.com/tinyhumansai/openhuman/issues/8395)**

用户希望在后台代理和 workflow 完成、需要审批或失败时收到统一通知，避免逐个查看会话和运行记录。

**纳入下一版本的概率：中等。**  
需求与当前 agent/workflow、审批和安全架构高度契合，且 TinyChannels v2 可提供统一投递层；但目前未见对应 PR。

### 6.3 Lite Mode 与 Cloud Only

- **[Issue #8387](https://github.com/tinyhumansai/openhuman/issues/8387)**

面向 4GB/8GB RAM 和低端处理器设备，避免首次启动自动拉取大型本地模型。

**纳入下一版本的概率：中等偏高。**  
已有两名用户提交相似问题（另见 [#8385](https://github.com/tinyhumansai/openhuman/issues/8385)），属于明显的可用性和设备覆盖缺口；可通过模型提供方选择、下载策略和资源检测实现。

### 6.4 应用内卸载入口

- **[Issue #8388 — Add uninstall button directly inside the app](https://github.com/tinyhumansai/openhuman/issues/8388)**

在设置页提供卸载按钮，重点解决 Linux 等平台缺少直观卸载入口的问题。

**纳入下一版本的概率：中等。**  
实现成本相对有限，适合作为桌面体验完善项；需确认各平台权限与卸载流程是否安全。

### 6.5 DemonRoute BYOK provider

- **[Issue #8374 — Add DemonRoute as a BYOK provider option](https://github.com/tinyhumansai/openhuman/issues/8374)**

请求接入 OpenAI-compatible 的 DemonRoute API，以支持自带 API key 和开放权重模型。

**纳入下一版本的概率：中等。**  
若项目已有通用 OpenAI-compatible provider 配置能力，可能无需新增专用 provider 即可支持；否则建议优先评估配置泛化，而不是增加大量硬编码 provider。

### 6.6 安全与审批架构统一

- 请求入口：[Issue #8369](https://github.com/tinyhumansai/openhuman/issues/8369)
- 前置 Tracker：[Issue #7328](https://github.com/tinyhumansai/openhuman/issues/7328)

将策略、审批和沙箱能力迁移到 TinySecurity/TinyBox，并降低 OpenHuman core 的安全逻辑分散度。

**纳入近期路线图的概率：高。**  
已有明确文件级 Epic，且旧 Tracker 已关闭、新 Epic 已建立，属于正在进行中的架构计划。

---

## 7. 用户反馈摘要

### 核心痛点

1. **持久化记忆无法连接 CortexDB**  
   用户使用自有 API key，在保存事实时直接收到 401 `ACTOR_MISMATCH`。这意味着“长期记忆”这一核心卖点在实际 BYOK 场景下不可用，影响较严重。  
   - [#8393](https://github.com/tinyhumansai/openhuman/issues/8393)
   - [#8394](https://github.com/tinyhumansai/openhuman/issues/8394)

2. **审批流程出现黑箱阻断**  
   Workflow Copilot 已得到用户确认，却仍拒绝 `run_flow`，同时不展示审批请求。用户既无法完成操作，也无法判断拒绝原因。  
   - [#8378](https://github.com/tinyhumansai/openhuman/issues/8378)

3. **文件读取链路不可靠**  
   助手无法通过受支持的工作流返回文件内容，直接影响分析文档、附件和知识库等常见任务。  
   - [#8396](https://github.com/tinyhumansai/openhuman/issues/8396)

4. **低内存设备首次启动体验差**  
   4GB RAM Windows 设备在登录阶段无限加载，无明确错误，部分环境甚至没有创建可清理的数据目录。对非高端硬件用户而言，安装可用性不足。  
   - [#8385](https://github.com/tinyhumansai/openhuman/issues/8385)
   - [#8387](https://github.com/tinyhumansai/openhuman/issues/8387)

5. **应用卸载路径不清晰**  
   用户希望在应用设置内直接卸载，尤其用于 Linux 场景，说明平台化桌面体验仍存在缺口。  
   - [#8388](https://github.com/tinyhumansai/openhuman/issues/8388)

6. **对统一渠道和低成本模型接入有明确期待**  
   用户希望减少 provider 差异，同时希望使用 BYOK 和开放权重模型，以降低截图、屏幕状态等 agent 工作流产生的 token 成本。  
   - [#7964](https://github.com/tinyhumansai/openhuman/issues/7964)
   - [#8374](https://github.com/tinyhumansai/openhuman/issues/8374)

### 满意度信号

- 今日数据中没有足够的点赞或正向评论样本，无法量化整体满意度。
- [#7964](https://github.com/tinyhumansai/openhuman/issues/7964)、[#8374](https://github.com/tinyhumansai/openhuman/issues/8374) 等 Issue 获得反馈，说明统一渠道、BYOK 和低成本部署具备明确用户价值。
- 但 CortexDB、审批、文件读取和低内存启动问题同时出现，表明 v0.64.15 的核心可用性仍不够稳定。

---

## 8. 待处理积压

### 8.1 待合并 PR

1. **[PR #8397 — TinyChannels v2 host integration](https://github.com/tinyhumansai/openhuman/pull/8397)**  
   - 当前最重要的待合并功能 PR。
   - 建议关注：是否完整关闭 [#7964](https://github.com/tinyhumansai/openhuman/issues/7964)，是否覆盖无 `channels` feature 构建，以及 provider/channel 契约测试是否全部通过。

2. **另一条待合并 PR**  
   - 今日数据仅给出待合并总数为 2，但展示列表中明确标记 OPEN 的仅 #8397；未提供另一条 PR 的编号与摘要，无法进一步追踪。
   - 建议维护者在日报后续中补充该 PR 的编号、范围及阻塞原因。

### 8.2 高优先级未闭环 Issue

- **[Issue #8391 — 无 `channels` feature 时无法构建](https://github.com/tinyhumansai/openhuman/issues/8391)**  
  P1，直接影响可选构建和模块化使用；需确认是否由 #8397 或后续修复 PR 覆盖。

- **[Issue #8393 — CortexDB ACTOR_MISMATCH](https://github.com/tinyhumansai/openhuman/issues/8393)**  
  P1，核心持久化记忆不可用，尚无明确修复 PR。

- **[Issue #8394 — CortexDB ACTOR_MISMATCH 重复报告](https://github.com/tinyhumansai/openhuman/issues/8394)**  
  P2，建议与 #8393 合并跟踪，避免重复消耗维护资源。

- **[Issue #8378 — run_flow 审批卡缺失](https://github.com/tinyhumansai/openhuman/issues/8378)**  
  P2，审批链路存在用户无法解除的死路。

- **[Issue #8396 — 文件内容读取失败](https://github.com/tinyhumansai/openhuman/issues/8396)**  
  P2，影响文件型知识任务的日常使用。

- **[Issue #8385](https://github.com/tinyhumansai/openhuman/issues/8385) / [#8387](https://github.com/tinyhumansai/openhuman/issues/8387)**  
  P2，低端设备启动与登录不可用；建议合并为一个“低资源环境启动失败”主问题。

### 8.3 架构型长期工作

- **[Issue #8369 — security/policy/approvals/sandboxing migration](https://github.com/tinyhumansai/openhuman/issues/8369)**  
  涉及至少 140 个文件、约 30.9k 行非测试代码，属于高风险长周期迁移。应持续披露阶段性进度、兼容性策略和测试门禁，避免只以“Epic 关闭”表示整体完成。

- **[Issue #7964 — TinyChannels v2](https://github.com/tinyhumansai/openhuman/issues/7964)**  
  目标覆盖全部主流渠道和富媒体能力，建议在合并 #8397 后明确剩余 provider、适配器和能力矩阵。

---

## 项目健康度结论

**综合健康度：中高，活跃但仍有明显稳定性欠账。**

- **优势：** 24 小时内 50 条 PR 更新、48 条已合并或关闭，修复吞吐很高；架构收敛方向明确；测试治理不只停留在放宽断言，还发现并修复了 profile slot 泄漏、scope 迁移误判、凭据失效等真实问题。
- **风险：** CortexDB 401、Workflow 审批死路、文件读取失败和低内存设备启动卡死均直接作用于核心用户路径；尤其 CortexDB 与无 `channels` 构建问题仍缺少明确修复闭环。
- **维护建议：**
  1. 优先处理并合并 [#8393](https://github.com/tinyhumansai/openhuman/issues/8393) 与 [#8391](https://github.com/tinyhumansai/openhuman/issues/8391)；
  2. 将 [#8394](https://github.com/tinyhumansai/openhuman/issues/8394)、[#8385](https://github.com/tinyhumansai/openhuman/issues/8385) 分别与重复问题合并；
  3. 对 [#8378](https://github.com/tinyhumansai/openhuman/issues/8378) 补充审批请求、超时与拒绝原因的端到端测试；
  4. 在 [#8397](https://github.com/tinyhumansai/openhuman/pull/8397) 合并前验证无 `channels` feature 构建及完整渠道契约；
  5. 建立面向 4GB RAM 设备的首次启动 Lite/Cloud Only 专项。

</details>

---
*本日报由 [Big Model Radar](https://github.com/96loveslife/big_model_radar) 自动生成。*
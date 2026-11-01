# OpenClaw 生态日报 2026-11-01

> Issues: 500 | PRs: 500 | 覆盖项目: 8 个 | 生成时间: 2026-11-01 05:25 UTC

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

**统计日期：2026-11-01**  
**数据范围：过去 24 小时**  
**仓库：** [openclaw/openclaw](https://github.com/openclaw/openclaw)

---

## 1. 今日速览

过去 24 小时项目保持极高活跃度，共更新 **500 条 Issues**（402 条新开或活跃、98 条关闭）和 **500 条 PR**（277 条待合并、223 条已合并或关闭），但当日**没有发布新版本**。讨论重点高度集中在 Gateway 稳定性、SQLite/会话恢复、消息投递、插件加载与记忆系统，表明项目正处于高并发开发和生产问题密集暴露阶段。整体可评估为：**开发吞吐很高，但发布治理、核心链路可靠性和积压治理压力较大**，多项 P0/P1 问题尚无明确修复 PR。

---

## 2. 版本发布

**今日无新版本发布。**

因此本日报不包含版本更新内容、破坏性变更或迁移说明。结合当前 Issue 情况，建议在下一版本发布前优先验证以下高风险链路：

- 大型外部插件捕获导致 Gateway 事件循环阻塞；
- SQLite 大库启动、恢复和回收；
- WhatsApp、Telegram、Slack 等渠道的可靠投递；
- 会话 turn claim 释放和跨进程唤醒；
- 内存文件的 provenance 与自动压缩；
- 模型回退、限额感知和凭证展示。

---

## 3. 项目进展

### 3.1 今日已关闭的重要 PR

过去 24 小时有 **223 条 PR 已合并或关闭**。从已展示信息看，推进重点包括模型配置展示、CLI 诊断、Web UI、备份、CI 和插件加载等方向。

- **模型凭证保存后显示对应 Provider 的模型**  
  [#190019](https://github.com/openclaw/openclaw/pull/190019)  
  目标是修复配置 `modelPolicy.allow` 后，新接入 Provider 的模型仍被模型选择器隐藏的问题。该 PR 涉及网关、命令、Web UI 和文档，并标记为兼容性与安全边界敏感，当前仍待维护者补齐证明材料。

- **避免 fork PR 发现过程中重复请求 GitHub**  
  [#190003](https://github.com/openclaw/openclaw/pull/190003)  
  同一 owner 下多个候选 fork 时，可减少不必要的网络往返，同时保持原有仓库选择行为；PR 已关闭，状态为可维护者查看。

- **修复浏览器测试中的 Node-only import 问题**  
  [#190089](https://github.com/openclaw/openclaw/pull/190089)  
  避免共享 transcript helper 引入 Node 专属代理 API，导致 Control UI 浏览器测试在模块加载阶段失败；PR 已关闭。

- **改进 Git 备份的内容规模预算**  
  [#170450](https://github.com/openclaw/openclaw/pull/170450)、[#190091](https://github.com/openclaw/openclaw/pull/190091)  
  大型备份的哈希、物化和提交可能超过通用 120 秒 Git deadline。两项 PR 分别尝试按数据量计算预算；后者作为替代方案已关闭。

- **保留异步 owner handler 的 lint 兼容性**  
  [#190093](https://github.com/openclaw/openclaw/pull/190093)  
  修复 Workboard owner 注册逻辑在 handler 改为异步后触发的类型感知 lint 失败，当前仍开放。

### 3.2 今日待合并的重要 PR

- **MCP 初始化遭遇临时 429 后恢复工具目录**  
  [#177331](https://github.com/openclaw/openclaw/pull/177331)  
  Streamable HTTP MCP 服务初始化遇到临时限流时，等待后可重新获取工具目录。该改动直接对应插件生态的可用性问题，优先级较高。

- **限制 SQLite worker store 保留量并开放配置**  
  [#185767](https://github.com/openclaw/openclaw/pull/185767)  
  目标是解决 idle store client 长期不回收导致的堆内存增长和 `FATAL ERROR: Reached heap limit`，同时将上限从编译期常量改为可配置。该 PR 与 Gateway RSS 持续增长问题高度相关，但涉及自动化、兼容性和可用性风险。

- **压缩长工具调用轮次并刷新上下文统计**  
  [#190017](https://github.com/openclaw/openclaw/pull/190017)  
  针对长工具循环可能在 1M 上下文触发自动压缩前耗尽上下文，以及 `sessions.list` 显示旧 token 数的问题。改动范围较大，仍待作者补充。

- **Control UI 在历史记录接管最终结果后清理所有实时副本**  
  [#185710](https://github.com/openclaw/openclaw/pull/185710)  
  避免运行结束后回复重复渲染或同时存在于实时与历史状态，当前等待维护者审核。

- **跨独立项目验证插件重载**  
  [#185793](https://github.com/openclaw/openclaw/pull/185793)  
  补充独立运行项目及重载期间新任务的行为验证，主要提升插件生命周期测试可信度。

- **Slack 父消息删除后停止线程回复**  
  [#180854](https://github.com/openclaw/openclaw/pull/180854)  
  处理线程回复生命周期长于父消息的问题；当前开放，需继续验证删除与重试之间的非原子窗口。

### 3.3 整体推进判断

项目今日在**模型配置、Web UI、备份、CLI 可诊断性、MCP 恢复和插件生命周期**方面都有推进；但核心生产故障仍大量存在，且大量 PR 处于“等待作者/维护者”“需要证明”状态。由此看，项目横向开发速度很高，但稳定版本的实际收敛速度明显落后于 PR 吞吐。

---

## 4. 社区热点

### 4.1 评论最多的 Issues

1. **大型外部插件捕获导致 Gateway 阻塞数分钟**（67 条评论）  
   [#160959](https://github.com/openclaw/openclaw/issues/160959)  
   这是今日最活跃议题。2026.9.6 引入插件生成捕获后，大型插件或依赖树会在启动及模型运行时重新发布阶段阻塞 Gateway 事件循环。其 P0 定位与高评论量说明这是影响插件生态可用性的核心瓶颈，目前没有已识别的 fix PR。

2. **Native host exec 返回 shared-state integrity-admission 错误**（22 条评论）  
   [#177656](https://github.com/openclaw/openclaw/issues/177656)  
   稳定版 2026.10.5 已出现至少 28 次失败，错误涉及共享状态完整准入，且无法确认子进程副作用是否发生。用户关注点不仅是报错，还包括**结果与副作用的可证明性**；当前无 fix PR。

3. **崩溃恢复后的 late reclamation checkpoint 失败使 Agent 永久不可用**（21 条评论）  
   [#166634](https://github.com/openclaw/openclaw/issues/166634)  
   Gateway 非正常退出后，Agent 会持续返回 `SQLite session reclamation commit checkpoint expired`，`chat.history`、`chat.metadata` 和 `models.list` 均不可用。关联的大库启动问题见 [#181459](https://github.com/openclaw/openclaw/issues/181459)。

4. **WhatsApp 私信回复在重启后持续卡在 durable registry handoff**（19 条评论）  
   [#161976](https://github.com/openclaw/openclaw/issues/161976)  
   Agent 已生成答案，但自动发送在交接阶段失败；下一条入站消息可能发送上一条回复。核心诉求是消息的**不丢失、不乱序和不重复**；目前无 fix PR。

5. **MEMORY.md / USER.md 被 provenance ratchet 永久排除**（15 条评论）  
   [#153426](https://github.com/openclaw/openclaw/issues/153426)  
   精选记忆文件一旦被判定为 `untrusted`，可能在没有任何诊断和恢复入口的情况下，从后续会话 bootstrap 中静默消失。对个人 AI 长期记忆而言，这是严重的数据可见性和可恢复性问题；目前无明确 fix PR。

6. **CLI backend 禁止 pre-compaction memory flush**（10 条评论）  
   [#137613](https://github.com/openclaw/openclaw/issues/137613)  
   `claude-cli` 等后端因 `ownsNativeCompaction` 门控而无法在压缩前持久化记忆，直接影响 CLI 用户的长期上下文连续性。

7. **代理回退提示泄露到外部频道**（7 条评论）  
   [#92473](https://github.com/openclaw/openclaw/issues/92473)  
   内部 `Model Fallback` 通知可能抵达 Telegram、Slack 等用户频道，暴露模型路由细节，也影响外部用户体验。

### 4.2 反应较多的 Issue

- **允许 MCP 环境变量和请求头使用 SecretRef**  
  [#76493](https://github.com/openclaw/openclaw/issues/76493)，**5 个赞**。  
  反映用户希望采用密钥间接引用，而不是直接在配置中写入敏感值；属于重要的安全易用性需求。

- **来源不明的文件路径安全限制**  
  [#173058](https://github.com/openclaw/openclaw/issues/173058)。  
  `tools.fs.workspaceOnly` 表面启用，但运行时仍获准访问 OpenClaw state root，反映配置承诺与实际安全边界不一致。

### 4.3 热门 PR 议题

- **模型选择器可见性重构**  
  [#190095](https://github.com/openclaw/openclaw/pull/190095)  
  将 `agents.defaults.models` 中仅用于别名或参数配置的键，从“已配置模型”中剥离，避免未认证模型被错误固定在选择器中。

- **Gateway 重连使用单调时钟**  
  [#190098](https://github.com/openclaw/openclaw/pull/190098)  
  防止系统墙钟跳变导致重连退避立即失效，是针对 Web UI 稳定性的小型定向修复。

- **保留待执行的安全审查任务**  
  [#190092](https://github.com/openclaw/openclaw/pull/190092)  
  修复 GitHub required security review 的并发队列只保留一个 pending job、导致旧审查被取消的问题，反映项目对安全审查流程质量的重视。

---

## 5. Bug 与稳定性

### P0 / 极高严重度

1. **大型插件捕获阻塞 Gateway 事件循环**  
   [#160959](https://github.com/openclaw/openclaw/issues/160959)  
   - 影响：Gateway 启动和模型运行时重发布期间可冻结数分钟。  
   - **Fix PR：未见明确关联。**

2. **崩溃恢复后 Agent 永久不可用**  
   [#166634](https://github.com/openclaw/openclaw/issues/166634)  
   - 影响：会话历史、元数据和模型列表持续返回 `UNAVAILABLE`。  
   - **Fix PR：未见明确关联。**

3. **精选记忆文件被静默永久排除**  
   [#153426](https://github.com/openclaw/openclaw/issues/153426)  
   - 影响：核心用户记忆可能从后续 bootstrap 中消失且无恢复路径。  
   - **Fix PR：未见明确关联。**

### P1 / 高严重度

1. **Native host exec 完整准入错误**  
   [#177656](https://github.com/openclaw/openclaw/issues/177656)  
   - **Fix PR：无明确关联。**

2. **WhatsApp durable registry handoff 失败造成回复延迟、错序**  
   [#161976](https://github.com/openclaw/openclaw/issues/161976)  
   - **Fix PR：无明确关联。**

3. **Android Talk 在工具调用或等待期间掉线**  
   [#131768](https://github.com/openclaw/openclaw/issues/131768)  
   - **Fix PR：无明确关联。**

4. **内置企业微信插件无法安装**  
   [#137177](https://github.com/openclaw/openclaw/issues/137177)  
   - **Fix PR：无明确关联。**

5. **Turn claim 超时后不释放，会话楔死 90 分钟以上**  
   [#157255](https://github.com/openclaw/openclaw/issues/157255)  
   - **Fix PR：无明确关联。**

6. **Transcript 幂等冲突被误判为模型失败并触发全链回退**  
   [#177909](https://github.com/openclaw/openclaw/issues/177909)  
   - **Fix PR：已有 PR 关联，但仍开放。**

7. **Native Codex 子进程完成后不唤醒父会话**  
   [#137710](https://github.com/openclaw/openclaw/issues/137710)  
   - **Fix PR：已有 PR 关联，但仍开放。**

8. **Telegram 子 Agent 结果公告 30 分钟后过期，重试阻塞 topic lane**  
   [#158154](https://github.com/openclaw/openclaw/issues/158154)  
   - **Fix PR：无明确关联。**

9. **3.5 GB Agent DB 导致启动极慢并进入不可用状态**  
   [#181459](https://github.com/openclaw/openclaw/issues/181459)  
   - 与 [#166634](https://github.com/openclaw/openclaw/issues/166634) 密切相关。  
   - **Fix PR：无明确关联。**

10. **Gateway off-heap RSS 约每小时增长 0.1 GiB，内部阈值不告警**  
    [#182369](https://github.com/openclaw/openclaw/issues/182369)  
    - 相关候选修复：[#185767](https://github.com/openclaw/openclaw/pull/185767)，针对 SQLite worker store 保留量。  
    - **状态：已有相关 PR，但仍开放且需要证明。**

11. **敏感值脱敏覆盖错误信息，Agent 无法识别错误键**  
    [#130209](https://github.com/openclaw/openclaw/issues/130209)  
    - **Fix PR：无明确关联。**

### P2 / 中等严重度及可用性缺陷

- **CLI 后端注册缺少 `modelProvider` 时静默失败，并错误显示为 Invalid URL**  
  [#172969](https://github.com/openclaw/openclaw/issues/172969)

- **失败的外发队列成为永久死信，无法读取、重试或清理**  
  [#112313](https://github.com/openclaw/openclaw/issues/112313)

- **Doctor `--fix` 在大状态库下耗时约 473 秒**  
  [#166526](https://github.com/openclaw/openclaw/issues/166526)

- **SQLite snapshot reclamation 每轮跳过**  
  [#175926](https://github.com/openclaw/openclaw/issues/175926)

- **Memory Search 在启用 sessions source 后仍不索引会话内容**  
  [#137265](https://github.com/openclaw/openclaw/issues/137265)

- **Code Mode 将 guest script TypeError 统一报成 `internal_error`**  
  [#167609](https://github.com/openclaw/openclaw/issues/167609)

- **Slack DM 在 Gateway 重启后被静默丢弃**  
  [#131150](https://github.com/openclaw/openclaw/issues/131150)

- **移动端键盘弹出后聊天内容与输入区被遮挡**  
  [#137508](https://github.com/openclaw/openclaw/issues/137508)

- **Control UI 上下文窗口显示旧的 `maxTokens`**  
  [#165421](https://github.com/openclaw/openclaw/issues/165421)

- **Windows npm 更新成功后仍报告模块清理失败**  
  [#184658](https://github.com/openclaw/openclaw/issues/184658)  
  **状态：已关闭。**

- **Windows update-runtime 在 PID 1 上中断进程普查**  
  [#171122](https://github.com/openclaw/openclaw/issues/171122)  
  **状态：已关闭。**

---

## 6. 功能请求与路线图信号

### 6.1 高概率进入下一版本或近期合入

1. **模型选择器可见性修复**  
   [#190095](https://github.com/openclaw/openclaw/pull/190095)  
   这是直接影响配置正确性和用户体验的问题，且已有配套的 Provider 模型显示 PR [#190019](https://github.com/openclaw/openclaw/pull/190019)，很可能形成一组模型配置修复。

2. **MCP 初始化限流后恢复**  
   [#177331](https://github.com/openclaw/openclaw/pull/177331)  
   改动边界清晰，已有充分证明，可显著提升第三方 MCP 服务在启动限流下的韧性。

3. **Gateway 重连退避改用单调时钟**  
   [#190098](https://github.com/openclaw/openclaw/pull/190098)  
   小而独立的稳定性修复，合并成本较低。

4. **Workboard 生命周期处理仅扫描关联卡片**  
   [#188327](https://github.com/openclaw/openclaw/pull/188327)  
   可降低长期运行看板的扫描成本，属于明确性能改进。

5. **插件重载跨项目验证**  
   [#185793](https://github.com/openclaw/openclaw/pull/185793)  
   不一定直接形成用户功能，但表明插件生命周期是当前测试重点。

### 6.2 中期路线图信号

1. **可配置且限额感知的模型回退**  
   [#182712](https://github.com/openclaw/openclaw/issues/182712)  
   用户希望回退链跳过同一配额池中已耗尽的候选，优先切换 Provider。这与现有限额、订阅阻塞和内部回退提示问题共同构成模型路由治理路线。

2. **为 idle worker isolate 提供内存回收机制**  
   [#159858](https://github.com/openclaw/openclaw/issues/159858)  
   小型自托管主机长期保留约 650 MB worker heap，用户希望可回收 idle worker。候选实现见 [#185767](https://github.com/openclaw/openclaw/pull/185767)。

3. **由 memory slot owner 驱动 Dreams 页面**  
   [#138366](https://github.com/openclaw/openclaw/issues/138366)  
   表明 MemoryPluginCapability 正向更开放的插件能力接口发展，让插件提供阶段状态、晋级计数和操作入口。

4. **CLI backend 的 pre-compaction memory flush**  
   [#137613](https://github.com/openclaw/openclaw/issues/137613)  
   体现记忆系统正在从“单一后端可用”转向跨后端一致性。

5. **中断或取消的 pending input 支持 TTL/手动清理**  
   [#141295](https://github.com/openclaw/openclaw/issues/141295)  
   这是会话生命周期和上下文正确性的明确需求，可能进入后续稳定性版本。

6. **慢速本地 Provider 的队列与取消可见性**  
   [#137557](https://github.com/openclaw/openclaw/issues/137557)  
   反映本地模型用户对排队、等待和实际推理时间区分的强烈需求。

7. **SecretRef 支持 MCP env/headers**  
   [#76493](https://github.com/openclaw/openclaw/issues/76493)  
   安全配置能力已有较高社区支持，但尚无明确 PR，应纳入安全易用性路线。

---

## 7. 用户反馈摘要

### 7.1 真实使用场景

- **多渠道个人助理**：WhatsApp、Telegram、Slack 是高频生产入口，用户最在意回复是否送达、是否串话，以及重启后的恢复能力。
- **长期记忆管理**：用户依赖 `MEMORY.md`、`USER.md`、Memory Search 和预压缩 flush，把“记忆静默消失”视为比一般功能缺失更严重的数据信任问题。
- **插件与 MCP 集成**：用户会安装大型插件，并连接外部 Streamable HTTP MCP 服务；启动阻塞、429 限流和插件重载均是实际集成痛点。
- **多 Agent / Native Codex 协作**：子 Agent 完成、结果公告、父会话唤醒和工具执行器绑定，直接影响 Agent 编排能否长期运行。
- **小型自托管和大规模本地部署**：既有人只有约 650 MB worker heap，也有人拥有 3.5 GB Agent DB，项目需要在内存效率和数据库规模上同时给出可控策略。
- **移动端实时语音**：Android Talk 在工具调用或等待期间掉线，用户已转向 Discord voice 作为替代方案。

### 7.2 主要不满意点

- **可靠性优先于新功能**：大量故障会让回复丢失、延迟、重复、会话卡死或完全不可用。
- **静默失败过多**：模型绑定缺失、记忆文件排除、Slack DM 丢弃、CLI backend 注册失败等，本来应给出明确诊断，却只表现为后续的模糊错误。
- **配置承诺与实际行为不一致**：例如 `workspaceOnly` 未真正限制文件工具，模型 allowlist 隐藏已接入 Provider 的模型。
- **恢复能力不足**：重启、崩溃和超时之后，多条链路无法自动恢复，失败队列也无法重试或清理。
- **维护响应仍不足**：多数高优先级 Issue 带有 `no-new-fix-pr`、`needs-maintainer-review` 或 `needs-security-review` 标签。

### 7.3 正面信号

- 新增模型 Provider 后，用户希望能立即在模型选择器中使用，说明“配置即生效”的体验仍是核心价值主张。
- Control UI、Slack、飞书、MCP、插件和自动化的修复方向覆盖多个真实使用面。
- 多项 PR 已开始主动加入回归测试、性能证明和截图证据，表明项目对可验证交付的重视程度提升。

---

## 8. 待处理积压

### 8.1 长期高优先级 Issue

以下问题自 7—9 月创建至今仍开放，且没有明确 fix PR，建议维护者优先确认 owner、修复分支和发布日期：

- **大型插件捕获阻塞 Gateway**  
  [#160959](https://github.com/openclaw/openclaw/issues/160959)

- **精选记忆文件被永久排除**  
  [#153426](https://github.com/openclaw/openclaw/issues/153426)

- **Native Codex 子进程无 OpenClaw 工具执行器**  
  [#150822](https://github.com/openclaw/openclaw/issues/150822)

- **Turn claim 超时不释放**  
  [#157255](https://github.com/openclaw/openclaw/issues/157255)

- **失败外发队列永久不可清理**  
  [#112313](https://github.com/openclaw/openclaw/issues/112313)

- **Android Talk 工具调用期间掉线**  
  [#131768](https://github.com/openclaw/openclaw/issues/131768)

- **企业微信内置插件安装失败**  
  [#137177](https://github.com/openclaw/openclaw/issues/137177)

- **iMessage reflection 绕过 echo cache**  
  [#135704](https://github.com/openclaw/openclaw/issues/135704)

- **Telegram 子 Agent 结果公告过期并阻塞 topic lane**  
  [#158154](https://github.com/openclaw/openclaw/issues/158154)

- **敏感值脱敏使 Agent 无法自纠**  
  [#130209](https://github.com/openclaw/openclaw/issues/130209)

### 8.2 安全与配置债务

- **SecretRef 无法用于 MCP env/headers**  
  [#76493](https://github.com/openclaw/openclaw/issues/76493)

- **`workspaceOnly` 未限制文件工具**  
  [#173058](https://github.com/openclaw/openclaw/issues/173058)

- **模型回退内部提示泄露到外部频道**  
  [#92473](https://github.com/openclaw/openclaw/issues/92473)

这三项分别涉及密钥管理、文件访问边界和内部信息泄露，建议在安全评审中统一排序，而不应继续作为普通功能积压处理。

### 8.3 长时间开放或状态停滞的 PR

- **Slack 父消息删除后停止回复**  
  [#180854](https://github.com/openclaw/openclaw/pull/180854)

- **长工具轮次压缩和上下文统计刷新**  
  [#190017](https://github.com/openclaw/openclaw/pull/190017)

- **SQLite worker store 保留量限制**  
  [#185767](https://github.com/openclaw/openclaw/pull/185767)

- **Control UI 历史记录接管后清理实时副本**  
  [#185710](https://github.com/openclaw/openclaw/pull/185710)

- **macOS MLX 模型配置缓存复用**  
  [#187742](https://github.com/openclaw/openclaw/pull/187742)

- **插件重载跨独立项目验证**  
  [#185793](https://github.com/openclaw/openclaw/pull/185793)

建议维护者为这些 PR 明确指定 reviewer 和验收条件，尤其是涉及 Gateway、SQLite、安全边界和自动化的改动，避免长期停留在 `needs proof` 或 `waiting on author` 状态。

---

## 项目健康度结论

**活跃度：很高；功能推进：高；稳定性：承压；发布状态：未发布；积压风险：高。**

OpenClaw 今日保持了极高的 Issue/PR 处理吞吐，且在模型配置、MCP、Web UI、备份和插件生态方面持续交付。不过，生产核心链路的故障密度明显高于日常版本发布节奏，尤其是 **SQLite 恢复、会话状态机、消息可靠投递、插件启动阻塞和记忆持久化**。短期应优先把已有候选修复转化为可验证的 PR，并为 P0/P1 老 Issue 建立明确的 owner 与修复时间表；否则项目可能出现“主干开发非常活跃，但用户仍频繁遭遇不可恢复故障”的健康度偏差。

---

## 横向生态对比

# 个人 AI 助手 / 自主智能体开源生态横向分析

**统计日期：2026-11-01**  
**比较范围：** OpenClaw、NanoBot、PicoClaw、Hermes Agent、OpenHuman；IronClaw、LobsterAI 过去 24 小时无活动，QwenPaw 数据摘要生成失败，暂不作定量评价。

## 1. 生态全景

生态呈现明显的**“高吞吐开发、生产稳定性承压”**特征：OpenClaw 与 Hermes Agent 单日均出现约 100 条 Issue/PR 更新，但全部项目当日均无 Release，显示代码产出尚未稳定转化为版本交付。竞争重点已从“基础对话能力”转向**多渠道可靠投递、长任务恢复、长期记忆、插件/MCP 生态、审批安全和桌面/移动端体验**。不同项目形成清晰分层：OpenClaw、Hermes Agent 位于高速迭代前沿，OpenHuman 偏个人数字与记忆工作流，NanoBot、PicoClaw 强调轻量、多渠道和边缘部署。当前最大的共性短板不是功能数量，而是**状态可信性、失败可恢复性和安全边界**。

---

## 2. 各项目活跃度对比

> “Issues 数 / PR 数”按摘要给出的过去 24 小时更新口径统计，不等同于新建数量。

| 项目 | Issue 更新 | PR 更新 | Release | 今日活跃度 | 健康度评估 |
|---|---:|---:|---|---|---|
| **OpenClaw** | 500 | 500 | 无 | 极高 | **开发吞吐很高，但稳定性、发布治理和积压风险高**；核心生产链路故障密集，多项 P0/P1 无明确修复 |
| **Hermes Agent** | 50 | 50 | 无 | 很高 | **高活跃、高交付活跃度，但稳定性与安全风险中高**；Desktop 长会话和审批安全是主要风险 |
| **OpenHuman** | 4 | 8 | 无 | 高 | **总体良好**；关键 Windows 故障有明确修复，但发布验证和长期 PR 收敛仍需跟进 |
| **NanoBot** | 2 | 5 | 无 | 中等偏高 | **开发方向合理，交付健康度一般**；恢复一致性、资源回收与重试反馈值得优先处理 |
| **PicoClaw** | 1 | 5 | 无 | 中等 | **中等偏稳**；明确缺陷已有修复，但 stale 关闭、长期 PR 和发布说明不足 |
| **IronClaw** | 0 | 0 | 无 | 无活动 | 数据不足，无法判断；生态参与度近期偏低 |
| **LobsterAI** | 0 | 0 | 无 | 无活动 | 数据不足，无法判断；生态参与度近期偏低 |
| **QwenPaw** | — | — | — | — | **摘要生成失败，需补采数据后评价** |

**关键判断：** OpenClaw 的绝对活动量远高于其他项目，约为 Hermes Agent 的 10 倍；但“活动量高”并不等于“交付成熟”，其无版本发布、高优先级问题积压和大量 PR 等待审查，说明收敛效率仍明显落后于开发吞吐。

---

## 3. OpenClaw 在生态中的定位

### 3.1 核心优势

1. **生态覆盖最广、复杂度最高**  
   OpenClaw 同时覆盖 WhatsApp、Telegram、Slack、微信等渠道，以及插件、MCP、SQLite 会话、长期记忆、自动化、模型路由和 Web UI，更接近“个人智能体操作平台”，而不只是聊天机器人框架。

2. **多模型与多 Provider 生态成熟度较高**  
   今日模型选择器可见性、Provider 模型展示、限额感知回退、凭证展示等改动联动，说明其模型路由层已形成较完整的产品化方向；NanoBot、PicoClaw、OpenHuman 当前更多是在补充单个 Provider。

3. **社区规模和问题暴露面最大**  
   过去 24 小时更新 500 条 Issue 和 500 条 PR，讨论热点集中在真实生产环境。用户反馈覆盖多渠道投递、插件启动、SQLite 恢复、记忆持久化等，说明其使用面已经相当宽。

4. **扩展生态成熟**  
   MCP 限流恢复、插件重载跨项目验证、第三方工具目录、安全审查任务队列等能力，比轻量项目更接近平台化生态。

### 3.2 技术路线差异

| 项目 | 技术路线与核心侧重 |
|---|---|
| **OpenClaw** | 高度平台化、多渠道、多 Provider、插件/MCP、自动化与持久化会话一体化；适合作为长期运行的自托管个人助理中枢 |
| **Hermes Agent** | 强调 Desktop、CLI、语音、多 Agent/Kanban、审批与插件治理；偏“开发者工作台 + 自主执行环境” |
| **OpenHuman** | 围绕个人记忆、认知层、语音、搜索和数字生活连接，强调隐私路径与模块化基础设施 |
| **NanoBot** | 轻量、Python 友好、Provider 抽象和渠道插件化；适合作为可嵌入的个人助理底座 |
| **PicoClaw** | 轻量、边缘设备、OpenWrt/多 Provider 兼容；更适合低成本、常驻和 IoT/家庭服务器场景 |

### 3.3 社区规模对比

- **第一梯队：OpenClaw**——Issue/PR 吞吐、用户场景与系统复杂度均为生态最高。
- **第二梯队：Hermes Agent**——活动量约为 OpenClaw 的十分之一，但移动端、Desktop 和多模态方向热度突出。
- **第三梯队：OpenHuman、NanoBot、PicoClaw**——单日活动规模较小，但均有较清晰的功能或稳定性方向。
- **IronClaw、LobsterAI** 暂无当日活动；**QwenPaw** 需补采数据。

---

## 4. 共同关注的技术方向

### 4.1 可靠投递与“至少一次”语义

- **OpenClaw：** WhatsApp durable registry handoff 失败导致回复延迟、错序；Slack DM 重启后静默丢弃。
- **Hermes Agent：** 微信回复窗口关闭后暂存至下次入站；附件上传失败必须明确提示。
- **NanoBot：** Provider 重试等待事件未传递至渠道层，用户无法区分退避和卡死。

**共同诉求：** 回复不能静默丢失、重复或乱序；系统必须区分“生成完成”“已进入投递队列”“外部渠道确认送达”。

### 4.2 崩溃恢复、幂等与任务状态一致性

- **OpenClaw：** 崩溃恢复后 SQLite reclamation checkpoint 失败，Agent 永久不可用；turn claim 超时不释放。
- **Hermes Agent：** 压缩过程中可能重放已完成请求；Desktop 临时 ID 与服务端 ID 替换存在竞态。
- **NanoBot：** 工具批次中途崩溃后无法区分已完成与未开始工具，可能重复产生副作用。
- **OpenHuman：** Windows 安装包模块版本漂移导致发布后模块无法加载。

**共同诉求：** 持久化边界要覆盖关键执行步骤；恢复后必须避免重复执行已完成的副作用操作，并允许用户重新发起或恢复任务。

### 4.3 长期记忆与数据可恢复性

- **OpenClaw：** `MEMORY.md` / `USER.md` 可能被 provenance ratchet 静默排除；CLI 后端无法在压缩前 flush 记忆。
- **OpenHuman：** Memory queue 并发固定，大规模初始摄取可能耗时数天。
- **Hermes Agent：** 群聊提示可能被错误写入长期记忆；Memory Provider 初始化失败后仍被标记激活。

**共同诉求：** 记忆系统必须具备**可见性、可恢复性、来源隔离和跨后端一致性**；“静默丢失”比暂不支持更严重。

### 4.4 Provider、模型路由和凭证治理

- **OpenClaw：** 模型选择器隐藏已接入模型、模型回退提示外泄、SecretRef 无法用于 MCP env/headers。
- **NanoBot：** 新增 Runcrate Provider；结构化决策客户端向 Provider-neutral 抽象演进。
- **PicoClaw：** 新增 Standard Compute Provider。
- **OpenHuman：** 请求内置 Runcrate Provider；持续改进 ElevenLabs/Gemini 语音错误分类。
- **Hermes Agent：** Profile 模型缺失却创建 Worker，产生模糊 `storage_unavailable`。

**共同诉求：** Provider 接入应标准化，包括鉴权、模型发现、限流、错误映射、密钥引用、模型选择器和文档配置。

### 4.5 插件、MCP 与扩展治理

- **OpenClaw：** 大型插件捕获阻塞 Gateway；MCP 初始化遇到 429 后无法恢复工具目录。
- **Hermes Agent：** MCP Form Elicitation 返回空对象；插件和 Shell Hook 获得模型调用前阻断能力。
- **OpenHuman：** 远程审批允许运行中 steering；敏感配置文件从 Agent 路径访问面隔离。
- **NanoBot：** 技能支持仅用户手动调用，避免模型自动触发高副作用行为。

**共同诉求：** 扩展系统正从“能加载”走向“可治理”：生命周期、权限、审批、限流恢复、安全边界和可观测性缺一不可。

### 4.6 桌面、移动端与多模态体验

- **Hermes Agent：** 原生移动端、语音通话、Android/iOS Beta、Desktop 重复渲染与滚动跳变。
- **OpenClaw：** Android Talk 掉线、移动端键盘遮挡、Control UI 状态陈旧。
- **NanoBot：** Signal 音频附件尚未接入统一转写服务。
- **OpenHuman：** 语音服务错误语义、附件文本空白保真。

**共同诉求：** 用户期待各渠道拥有一致的多模态处理和清晰的状态反馈，而不是逐渠道补丁式实现。

---

## 5. 差异化定位分析

### 5.1 功能侧重

| 维度 | OpenClaw | Hermes Agent | OpenHuman | NanoBot | PicoClaw |
|---|---|---|---|---|---|
| 核心定位 | 全渠道个人智能体平台 | 自主执行型开发者工作台 | 个人记忆与数字生活助理 | 轻量个人助理框架 | 轻量边缘个人助理 |
| 渠道 | WhatsApp、Telegram、Slack、微信等 | 桌面、CLI、消息平台、移动端 | 桌面/语音/搜索/连接器 | Telegram、Signal、CLI/API 等 | Telegram、边缘设备 |
| 记忆 | 文件、Memory Search、压缩前 flush | Memory Provider、后台 Review | 强项：memory queue、认知层 | 相对基础 | 相对基础 |
| 扩展 | 插件、MCP、自动化、工具生态 | 插件、Shell Hook、MCP、审批 | 原生模块、搜索、远程审批 | Provider、skills、决策客户端 | Provider 为主 |
| 终端 | Web UI、CLI、Gateway | Desktop、CLI、移动端 | Desktop/个人工作流 | CLI/API | Launcher、边缘部署 |
| 自主执行 | 自动化、会话 Agent | Kanban、子代理、工具执行 | 审批与引导 | 工具调用、恢复 | 相对轻量 |

### 5.2 目标用户

- **OpenClaw：** 需要多渠道个人助理、长期运行、复杂扩展和自托管基础设施的高级个人用户。
- **Hermes Agent：** 需要桌面端、语音、长任务、多 Agent 编排和审批控制的开发者与高级知识工作者。
- **OpenHuman：** 重视个人记忆、隐私、搜索、语音和模块化数字助理生态的用户。
- **NanoBot：** 希望二次开发、嵌入轻量 Agent 或统一多 Provider 接入的 Python 开发者。
- **PicoClaw：** 追求低成本、低资源、常驻运行，尤其适合 OpenWrt、家庭服务器和边缘设备。

### 5.3 技术架构关键差异

- **OpenClaw** 采用平台型架构，Gateway、SQLite、多渠道、插件、模型路由高度耦合；优势是能力完整，风险是状态空间大、故障耦合强。
- **Hermes Agent** 偏桌面工作台与会话执行引擎，围绕流式输出、压缩、子代理、审批和 Kanban 组织；优势是执行体验聚焦，风险是客户端状态与审批安全复杂。
- **OpenHuman** 强调模块化原生组件、记忆/认知层与隐私路径；适合做个人 AI 基础设施，但模块发布一致性曾出现问题。
- **NanoBot** 更轻量、抽象层次清晰，易于嵌入，但恢复协议和长期资源治理仍在补齐。
- **PicoClaw** 以边缘友好和 OpenAI-compatible Provider 适配为主，部署简单，但生态深度、发布说明和积压治理弱于头部项目。

---

## 6. 社区热度与成熟度

### 6.1 社区热度分层

**S 级：OpenClaw**
- 单日 500 Issue + 500 PR。
- 热点覆盖插件、SQLite、消息投递、记忆、MCP、模型路由。
- 优势是社区规模和真实场景广；短板是高优先级问题多、owner 与修复节奏不足。

**A 级：Hermes Agent**
- 单日 50 Issue + 50 PR。
- 移动应用/语音通话、Desktop 流式渲染、Codex 长任务、Smart Approval 形成明确热点。
- 功能交付活跃，但安全和长会话可信度仍需治理。

**B 级：OpenHuman**
- 单日 4 Issue + 8 PR。
- Windows 安装故障、memory queue 并发是主要需求。
- 工程处理方向明确，处于由功能扩展转向质量巩固的阶段。

**B- 级：NanoBot**
- 单日 2 Issue + 5 PR。
- 讨论集中在工具恢复、重试反馈、Signal 转写和会话锁。
- 活跃但贡献集中，需加强审查与发布闭环。

**C 级：PicoClaw**
- 单日 1 Issue + 5 PR。
- 重点是明确缺陷修复和 Provider 扩展。
- 更接近质量巩固期，但 stale 标记和长期 PR 积压影响社区信任。

**待观察：IronClaw / LobsterAI / QwenPaw**
- 前两者无当日活动；QwenPaw 数据不完整，不宜据此判断项目健康度。

### 6.2 成熟度判断

- **快速迭代阶段：** OpenClaw、Hermes Agent、OpenHuman。
- **质量巩固阶段：** NanoBot、PicoClaw。
- **需要补采数据：** IronClaw、LobsterAI、QwenPaw。

成熟度不能只按 Issue 数量判断：OpenClaw 和 Hermes 的“问题多”部分来自真实用户规模与功能复杂度的放大；NanoBot、PicoClaw 规模较小，但若长期没有 Release、合并和版本说明，同样会削弱交付成熟度。

---

## 7. 值得关注的趋势信号

### 7.1 “模型调用”正在变成“执行系统”

竞争维度已从回答质量转向完整执行链：

> 模型选择 → 工具调用 → 审批 → 持久化 → 崩溃恢复 → 渠道投递 → 用户可见反馈

因此，未来优秀 Agent 项目的核心竞争力不只是模型适配，而是**状态机、幂等、恢复、审计和可观测性**。

### 7.2 可靠性将成为个人助手的下一道护城河

多个项目同时暴露消息错序、重复执行、会话锁泄漏、SQLite 恢复失败、Desktop 状态不一致等问题。对个人助理而言，一次错误删除、重复支付或消息串话造成的损害，可能远大于模型回答质量下降。

**开发建议：** 将“投递确认、工具副作用状态、崩溃恢复、可取消、可重试”作为一级能力，而非插件或边缘功能。

### 7.3 审批安全正从 UI 辅助升级为执行安全

Hermes Agent 的 Smart Approval 误放行大规模破坏性命令，以及 OpenHuman、NanoBot 的手动调用/远程 steering，表明审批系统必须建立在**真实执行目标**上，而不是仅分析用户可见文本。

**开发建议：** 执行前进行命令规范化、目标展开、资源影响评估和破坏性操作二次确认；隐藏 Unicode 可视化只能作为辅助措施。

### 7.4 长期记忆进入“数据信任”阶段

用户不再只关心“能否记住”，而是关心：

- 文件是否被静默排除；
- 数据能否恢复和迁移；
- 初始化失败是否明确提示；
- 群聊内容是否误写入个人记忆；
- 并发和费用是否可控；
- 压缩前是否完成持久化。

**开发建议：** 为记忆系统增加来源标记、完整性校验、版本化、可见状态、备份恢复和审计日志。

### 7.5 Provider 接入趋向标准化，但密钥与模型发现仍是短板

Runcrate、Standard Compute 等 OpenAI-compatible Provider 快速出现，说明多模型接入门槛下降；但 SecretRef、模型可见性、限流感知、错误分类和跨 Provider 回退仍未统一。

**开发建议：** 建立统一的 Provider conformance suite，至少覆盖 Chat Completions、Responses、流式协议、模型列表、限流、错误映射、密钥引用和回退策略。

### 7.6 扩展生态正在从“加载成功”转向“可治理”

插件、MCP、Skills、Shell Hook、远程审批都快速扩张。下一阶段的核心不再只是发现和安装，而是：

- 权限最小化；
- 网络与路径隔离；
- 版本兼容；
- 限流恢复；
- 生命周期和热重载；
- 高副作用操作的手动触发；
- 审计与回滚。

### 7.7 所有项目都需要补齐“发布闭环”

本次比较的活跃项目**全部无当日 Release**。高 Issue/PR 吞吐如果没有版本、迁移说明和回滚策略，会让用户感觉项目“每天都在改，却不知道今天修好了什么”。

**建议统一发布信息：**

1. 修复对应 Issue/PR；
2. 是否已进入正式版本；
3. 配置或数据迁移要求；
4. 回归测试与兼容性范围；
5. 已知风险和回滚方式；
6. P0/P1 修复的公告优先级。

---

## 决策结论

- **需要成熟多渠道平台和深度扩展：** 优先关注 OpenClaw，但应等待或验证 SQLite 恢复、消息投递和插件阻塞等关键修复发布。
- **需要桌面自主执行、语音和多 Agent：** Hermes Agent 路线更匹配，但必须重点审查审批安全与长会话恢复。
- **需要个人记忆与数字生活集成：** OpenHuman 更贴近目标，其 Windows 原生模块发布链路应作为近期验证重点。
- **需要轻量二开与统一 Provider：** NanoBot 更易嵌入；PicoClaw 更适合边缘和低成本常驻部署。
- **对所有项目，评估重点不应再是 PR 数量，而应是：** P0/P1 修复是否有明确 owner、候选修复是否进入正式版本、失败后是否可恢复、权限边界是否经过实际执行目标验证。

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目动态日报

**统计日期：2026-11-01**  
**数据范围：过去 24 小时 GitHub 活动**

## 1. 今日速览

过去 24 小时内，NanoBot 共出现 **2 条 Issues 更新**和 **5 条 PR 更新**，均为开放状态，暂无 PR 合并或 Issue 关闭，也没有新版本发布。  
今日讨论重点集中在 **运行时崩溃恢复、Signal 音频转写、Provider 重试事件传递和会话锁释放**等稳定性与多渠道体验问题。  
5 个待合并 PR 覆盖 **新 Provider 接入、技能手动调用、结构化决策客户端以及两项后端稳定性修复**，功能扩展与可靠性改进并行推进。  
整体活跃度评估为 **中等偏高**：过去一天产生 7 条更新，但缺少合并与发布闭环，说明贡献较集中，仍需维护者及时审查和整合。

---

## 2. 版本发布

过去 24 小时 **无新版本发布**，因此暂无对应的更新说明、破坏性变更或迁移注意事项。

---

## 3. 项目进展

### 今日合并/关闭的重要 PR

过去 24 小时更新的 5 个 PR **均处于待合并状态**，今日没有已合并或已关闭记录。因此，以下应视为“形成待审代码”，而非已经进入正式版本的项目进展。

| PR | 方向 | 主要内容 | 当前状态 |
|---|---|---|---|
| [#6446 feat(providers): add Runcrate provider](https://github.com/HKUDS/nanobot/pull/6446) | 新 Provider | 新增 OpenAI 兼容的 Runcrate gateway，通过 `RUNCRATE_API_KEY` 配置，默认 API Base 为 `https://api.runcrate.ai/v1`，支持 Chat Completions 和 Responses API | Open，待合并 |
| [#5405 feat(skills): support manual-only invocation](https://github.com/HKUDS/nanobot/pull/5405) | 技能安全控制 | 提议在技能 frontmatter 中支持 `disable-model-invocation: true`，使部署、发布等有副作用的技能只能由用户显式调用，避免模型自行触发 | Open，待合并 |
| [#6163 fix(channels): deliver provider retry waits through an opt-in hook](https://github.com/HKUDS/nanobot/pull/6163) | 通道与 Provider 修复 | 修复 `RetryWaitEvent` 在 `ChannelManager._dispatch_outbound_loop` 中被无条件丢弃的问题；尝试通过可选 hook 将 Provider 退避等待传递给通道，同时避免绕过 `sendProgress` 开关 | Open，待合并 |
| [#6194 fix(api): release idle session locks](https://github.com/HKUDS/nanobot/pull/6194) | API 资源管理 | 将 API 会话锁改为由 `WeakValueDictionary` 保存，避免不同 `session_id` 的请求完成后仍长期保留锁；请求处理器和流式任务继续持有强引用 | Open，待合并 |
| [#5825 feat: add provider-neutral structured decision client](https://github.com/HKUDS/nanobot/pull/5825) | 决策能力抽象 | 将 JEV 专属客户端与配置抽象为 Provider-neutral 的结构化决策客户端，以类型化问题和结果统一接口，并首先接入 OpenRouter 的 System One protocol | Open，待合并 |

### 整体推进程度

- **Provider 生态继续扩展**：Runcrate 的加入扩大了可选模型网关覆盖范围。
- **自动化安全边界增强**：manual-only skill 机制直接回应高副作用操作的误触发风险。
- **结构化决策能力趋向通用化**：客户端从具体场景实现转向 Provider/Protocol 抽象。
- **稳定性基础设施得到补强**：重试等待事件传递与 API 会话锁回收，分别改善用户可见性和长期资源占用。
- 由于 **0 个 PR 合并、0 个 Issue 关闭、0 个版本发布**，今日尚未形成可交付版本闭环；项目属于“开发活跃、集成待加速”状态。

---

## 4. 社区热点

### 热度最高：Issue #5747

- **标题**：[enhancement] Recovery: persist completed tool results at execution-batch boundaries
- **链接**：[GitHub Issue #5747](https://github.com/HKUDS/nanobot/issues/5747)
- **数据**：创建于 2026-09-12，今日更新；累计 **3 条评论**
- **状态**：Open

这是今日数据中评论最多的条目。问题指出，在一次多工具调用批次中，如果工具 A 已完成、工具 B 已启动，而系统在工具 C 执行前崩溃，持久化检查点仍可能把全部调用记录为 pending。恢复阶段因此无法准确区分“已经完成”与“尚未开始”的工具，可能造成重复执行或恢复状态不一致。

**背后的核心诉求：**

1. 工具批次需要具备更细粒度的执行状态持久化边界。
2. 崩溃恢复必须保证已完成工具结果不会丢失。
3. 应避免恢复后重复执行具有副作用的工具。
4. 这不仅是恢复机制增强，也直接关系到 Agent 行为的幂等性和可靠性。

### 新增需求：Issue #6534

- **标题**：[enhancement] [Signal] Transcribe audio attachments automatically
- **链接**：[GitHub Issue #6534](https://github.com/HKUDS/nanobot/issues/6534)
- **数据**：2026-10-31 创建并更新；**0 条评论**
- **状态**：Open

该 Issue 请求让 Signal 渠道自动转写语音消息和音频附件。当前 Signal 音频仅以文件路径形式传给 Agent，而其他渠道已经接入 NanoBot 的 transcription service，导致跨渠道体验不一致。

**背后的核心诉求：**

- 补齐 Signal 渠道的语音输入能力。
- 统一各消息渠道的多模态处理行为。
- 降低语音附件需要人工处理的成本。
- 今日没有对应 PR，说明需求尚未进入实现阶段。

### 其他值得关注的 PR

- [#6163](https://github.com/HKUDS/nanobot/pull/6163) 直接修复 Provider 失败重试期间用户无法收到等待提示的问题，属于用户可见的可靠性改进。
- [#6194](https://github.com/HKUDS/nanobot/pull/6194) 关联长期资源占用问题 [#4883](https://github.com/HKUDS/nanobot/issues/4883)，对长期运行、多会话部署尤其重要。
- [#5405](https://github.com/HKUDS/nanobot/pull/5405) 将技能调用的控制权更明确地交给用户，安全价值和产品价值都较高。
- [#5825](https://github.com/HKUDS/nanobot/pull/5825) 是今日变更范围较大的架构型 PR，需重点评估兼容性与迁移风险。

---

## 5. Bug 与稳定性

按影响范围及对长期运行质量的潜在影响排序：

### 高优先级：工具批次崩溃恢复一致性

- **Issue**：[#5747](https://github.com/HKUDS/nanobot/issues/5747)
- **类型**：崩溃恢复、状态持久化、潜在重复副作用
- **状态**：Open，已有 **3 条评论**
- **是否已有 fix PR**：**未发现明确对应的修复 PR**
- **影响**：多工具调用过程中发生崩溃时，可能无法识别已完成结果，恢复后可能出现重复执行、状态回退或工具结果丢失。

建议将其列为稳定性优先事项：明确检查点的写入粒度，并补充“部分批次完成后崩溃”的恢复测试。

### 中高优先级：API 空闲会话锁未释放

- **Issue**：[#4883](https://github.com/HKUDS/nanobot/issues/4883)
- **Fix PR**：[#6194](https://github.com/HKUDS/nanobot/pull/6194)
- **类型**：资源泄漏、长期运行稳定性
- **状态**：PR 待合并
- **影响**：不同 `session_id` 的 API 请求完成后，锁可能长期保留在注册表中。长期运行或高并发场景下，内存占用可能持续增长。

该问题已有明确修复方案，但目前尚未合并，应关注弱引用锁的生命周期和并发正确性测试。

### 中优先级：Provider 重试等待事件被通道丢弃

- **Issue**：[#5585](https://github.com/HKUDS/nanobot/issues/5585)
- **Fix PR**：[#6163](https://github.com/HKUDS/nanobot/pull/6163)
- **类型**：事件传递、可观测性、交互体验
- **状态**：PR 待合并
- **影响**：Provider 退避重试时，通道层无法获知等待状态；在交互式 CLI 或支持进度反馈的渠道中，用户可能看到无响应或缺少状态提示。

已有 fix PR，但需确保可选 hook 的设计不会重复发送事件，也不绕过现有 `sendProgress` 配置。

### 中优先级：Signal 音频附件未自动转写

- **Issue**：[#6534](https://github.com/HKUDS/nanobot/issues/6534)
- **类型**：渠道功能不一致
- **状态**：Open；今日未发现对应 PR
- **影响**：Signal 语音消息无法像其他渠道一样直接进入 Agent 的统一转写流程，影响语音场景可用性和跨渠道一致性。

### 今日未发现的新崩溃或明确回归报告

除上述恢复一致性和资源生命周期问题外，今日没有新的 release、崩溃报告或回归 Issue。由于今日没有版本发布，也没有足够数据判断这些修复是否已经进入用户可用版本。

---

## 6. 功能请求与路线图信号

### 6.1 Signal 音频自动转写

- **需求来源**：[Issue #6534](https://github.com/HKUDS/nanobot/issues/6534)
- **可能进入下一版本的判断**：**中等**
- **判断依据**：NanoBot 已有 transcription service，理论上主要是补齐 Signal 渠道接入，工作量相对可控；但今日没有 PR 或维护者表态，尚不能确认排期。

建议优先复用现有转写服务，并统一附件下载、格式转换、失败降级及隐私处理逻辑。

### 6.2 技能仅允许用户手动调用

- **对应 PR**：[#5405](https://github.com/HKUDS/nanobot/pull/5405)
- **可能进入下一版本的判断**：**较高**
- **判断依据**：实现方向明确，并且直接解决部署、发布等有副作用技能被模型自动触发的问题，安全收益高，改动集中于技能配置与调用入口。

建议后续明确以下兼容策略：

- 已有技能是否默认保持现状；
- `always: true` 与 `disable-model-invocation: true` 冲突时的优先级；
- 用户显式调用的命令形式及错误提示；
- 旧配置升级后是否需要迁移提示。

### 6.3 Provider 中立的结构化决策客户端

- **对应 PR**：[#5825](https://github.com/HKUDS/nanobot/pull/5825)
- **可能进入下一版本的判断**：**中等**
- **判断依据**：这是架构级增强，可减少决策能力对特定 Provider 或协议实现的耦合；但相较单点功能修复，兼容性与迁移成本更高。

需要重点关注 JEV 专属配置移除后的兼容方式、默认模型行为、Provider 注册机制，以及 typed question/result 的序列化契约。

### 6.4 Runcrate Provider 接入

- **对应 PR**：[#6446](https://github.com/HKUDS/nanobot/pull/6446)
- **可能进入下一版本的判断**：**中高**
- **判断依据**：沿用 OpenAI-compatible gateway 模式，接入方式与现有 Novita AI 等 Provider 类似，预计集成成本较低。

合并前建议确认：

- Chat Completions 与 Responses API 的实际兼容程度；
- 模型 ID 与组织前缀规则；
- 鉴权、限流、错误映射；
- 文档中新增的配置示例及敏感变量处理。

### 6.5 工具批次边界的崩溃一致性增强

- **需求来源**：[Issue #5747](https://github.com/HKUDS/nanobot/issues/5747)
- **可能进入下一版本的判断**：**待确认**
- **判断依据**：问题历史较长且已有 3 条评论，说明社区关注度较高；但涉及检查点格式和恢复语义，可能需要兼容性设计。

若纳入下一版本，建议采用可演进的状态格式，避免强制升级时破坏已有 checkpoint，并为旧格式提供迁移或降级处理。

---

## 7. 用户反馈摘要

今日两条 Issue 的评论量有限，尚未出现大量明确满意度反馈，但可归纳出以下痛点：

1. **多工具执行中的恢复体验不够可信**  
   用户关注的不只是“服务能否重启”，而是重启后是否知道哪些工具已经完成。对于部署、支付、发送消息等有副作用操作，错误恢复可能直接造成业务损失。

2. **Signal 语音输入落后于其他渠道**  
   同一语音附件在其他渠道可自动转写，在 Signal 中却只得到文件路径。这表明用户期待的是跨渠道一致的多模态体验，而不是逐渠道修补。

3. **Provider 故障期间缺少清晰反馈**  
   从关联的 [#6163](https://github.com/HKUDS/nanobot/pull/6163) 可以看出，重试等待事件没有传递到通道层，用户容易将正常退避误认为系统卡死。

4. **长时间运行后资源状态需要更可靠**  
   [#6194](https://github.com/HKUDS/nanobot/pull/6194) 反映 API 会话锁可能无限保留。对个人 AI 助手和常驻服务而言，这类问题在短期测试中不明显，却会随运行时间增长而恶化。

总体而言，当前反馈主要指向：**执行状态透明、故障恢复可靠、渠道体验一致、长期运行无资源泄漏**。

---

## 8. 待处理积压

### 8.1 Issue #5747：工具结果持久化与崩溃恢复

- **链接**：[Issue #5747](https://github.com/HKUDS/nanobot/issues/5747)
- **创建时间**：2026-09-12
- **当前状态**：Open，累计 3 条评论
- **积压判断**：已持续较长时间，且涉及核心执行正确性。
- **建议**：维护者应明确技术方案、兼容性边界和目标版本；若短期无法实现，也应拆分“状态模型”“持久化”“恢复逻辑”形成可跟踪子任务。

### 8.2 PR #5405：技能 manual-only invocation

- **链接**：[PR #5405](https://github.com/HKUDS/nanobot/pull/5405)
- **创建时间**：2026-08-16
- **当前状态**：Open，待合并
- **积压判断**：创建时间较长，但需求与高副作用技能安全直接相关。
- **建议**：尽快完成审查，明确配置优先级、默认行为和升级说明。

### 8.3 PR #5825：Provider-neutral structured decision client

- **链接**：[PR #5825](https://github.com/HKUDS/nanobot/pull/5825)
- **创建时间**：2026-09-20
- **当前状态**：Open，待合并
- **积压判断**：涉及架构抽象和配置迁移，维护成本较高。
- **建议**：要求维护者给出兼容性说明、测试覆盖清单和合并策略，避免长期开放但缺乏结论。

### 8.4 PR #6163 与 PR #6194：稳定性修复长期未合并

- **链接**：[PR #6163](https://github.com/HKUDS/nanobot/pull/6163)、[PR #6194](https://github.com/HKUDS/nanobot/pull/6194)
- **创建时间**：分别为 2026-10-11、2026-10-13
- **当前状态**：均 Open，待合并
- **积压判断**：均修复明确的用户可见或长期运行问题，且已经关联原 Issue。
- **建议**：优先安排维护者审查和回归测试；若对实现方案存在争议，应拆出最小修复版本，避免整个修复继续悬置。

---

## 今日结论

NanoBot 今日呈现出较清晰的“双线推进”态势：一条是 **Provider、渠道和技能控制等能力扩展**，另一条是 **恢复一致性、重试反馈和资源释放等稳定性补强**。  
不过，项目当日没有 PR 合并、Issue 关闭或版本发布，交付节奏偏慢。当前最值得维护者优先处理的是：

1. [#5747](https://github.com/HKUDS/nanobot/issues/5747) 的工具批次崩溃恢复一致性；
2. [#6194](https://github.com/HKUDS/nanobot/pull/6194) 的 API 会话锁回收；
3. [#6163](https://github.com/HKUDS/nanobot/pull/6163) 的 Provider 重试等待事件传递；
4. [#5405](https://github.com/HKUDS/nanobot/pull/5405) 的手动技能调用安全边界。

**项目健康度判断：开发活跃度较高，功能与稳定性建设方向合理，但 PR 审查、合并和发布闭环不足，整体为“中等偏高活跃、交付健康度一般”。**

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目动态日报

**日期：2026-11-01**  
**统计窗口：过去 24 小时**  
**数据来源：PicoClaw GitHub Issues 与 Pull Requests**

---

## 1. 今日速览

过去 24 小时项目共出现 **1 条 Issue 更新、5 条 PR 更新**，没有新版本发布。  
其中，**1 个 Issue 被关闭，4 个 PR 被关闭/合并，1 个 PR 仍待处理**。今日主要进展集中在 Telegram MarkdownV2 转义、Cron 任务失败状态传播，以及新增 Standard Compute 模型服务商支持。  
当前 Issue 与 PR 更新中多数带有 **[stale]** 标记，且若干条目自 2026-10-15 或更早创建后直到 2026-10-31 才被集中处理，反映出项目近期可能存在自动标记与维护响应节奏偏慢的情况。  
从短期代码健康度看，已有明确问题得到收敛；但标准计算服务商接入仍处于开放状态，且大量历史 PR 通过“合并多个修复”的方式集中关闭，说明维护流程与 PR 积压治理仍有优化空间。

---

## 3. 项目进展

### 3.1 Telegram MarkdownV2 转义修复

- **PR：** [#3443 fix(telegram): escape link labels and blockquote text in MarkdownV2](https://github.com/sipeed/picoclaw/pull/3443)
- **状态：** 已关闭；对应修复 Issue [#3426](https://github.com/sipeed/picoclaw/issues/3426)
- **推进内容：**
  - 修复链接标签中保留字符未转义的问题，例如 `[picoclaw.io]` 中的 `.`。
  - 修复引用块文本中 MarkdownV2 保留字符未正确转义的问题。
  - 避免 Telegram API 拒绝格式化消息，并回退为纯文本、导致全部格式丢失的情况。

**影响评估：**  
这是一个直接影响消息可读性和格式稳定性的中等级别修复。修复后，Telegram 渠道对链接、引用等常见 Markdown 内容的兼容性更可靠。

---

### 3.2 Cron 任务失败状态不再错误记录为 `ok`

- **PR：** [#3442 fix(cron): propagate job failures to lastStatus instead of always ok](https://github.com/sipeed/picoclaw/pull/3442)
- **状态：** 已关闭；对应修复 Issue [#3423](https://github.com/sipeed/picoclaw/issues/3423)
- **推进内容：**
  - 修复 Cron 任务执行失败时，`cron/jobs.json` 中 `lastStatus` 仍被写成 `"ok"` 的问题。
  - 调整 `CronTool.ExecuteJob` 在命令执行被禁用及执行异常等失败路径上的返回值。
  - 将真实执行结果向任务状态层传播，使调度记录与实际运行结果一致。

**影响评估：**  
该修复提升了定时任务系统的可观测性和故障诊断能力，也避免用户被错误的成功状态误导，属于较重要的稳定性改进。

---

### 3.3 新增 Standard Compute Provider

- **PR：** [#3431 feat(provider): add Standard Compute provider](https://github.com/sipeed/picoclaw/pull/3431)
- **状态：** **待合并**
- **推进内容：**
  - 新增 OpenAI 兼容服务商 `standardcompute`。
  - 使用单一密钥访问来自多个模型实验室的模型。
  - 沿用 [#2917](https://github.com/sipeed/picoclaw/issues/2917) 中 NEAR AI Cloud 的接入模式。
  - 涉及 `provider_metadata.go` 等服务商注册和元数据配置。

**影响评估：**  
若合并，可进一步扩展 PicoClaw 的多服务商兼容性，并降低用户在模型供应商之间切换的成本。目前仍需维护者审查服务商命名、鉴权方式、默认模型配置及文档完整性。

---

### 3.4 集中合并历史修复 PR

- **PR：** [#1558 fix: merge PR #1344 #1342 #1341 #1331](https://github.com/sipeed/picoclaw/pull/1558)
- **状态：** 已关闭
- **内容：** 集中处理多个历史修复分支或 PR。

- **PR：** [#1545 fix: merge PR #1500 #1490 #1488 #1487 #1485](https://github.com/sipeed/picoclaw/pull/1545)
- **状态：** 已关闭
- **内容：** 集中处理多个较早提交的修复内容。

**影响评估：**  
这两项 PR 帮助清理历史分支和 PR 积压，有助于减少代码库分叉。不过，其创建时间均早于本次统计窗口，说明部分积压问题并非今日新产生，而是近期才得到集中处置。

---

## 4. 社区热点

过去 24 小时没有新的 Issue 创建，现有条目也没有评论或点赞数据，因此**没有形成新的高热度讨论事件**。

### Launcher 网络绑定问题

- **Issue：** [#3439 picoclaw-launcher: `-public` 与 `-host` 同时设置会自撞；`-public` 单独使用时只绑 IPv6](https://github.com/sipeed/picoclaw/issues/3439)
- **评论数：** 1
- **点赞数：** 0
- **关闭状态：** 已关闭，并带有 `[stale]` 标记。

### Standard Compute Provider 接入

- **PR：** [#3431 feat(provider): add Standard Compute provider](https://github.com/sipeed/picoclaw/pull/3431)
- **评论数：** 未显示
- **点赞数：** 0
- **状态：** 待合并。

**热点分析：**

今日社区关注点主要不是讨论热度，而是两个具体工程方向：

1. **Launcher 在 OpenWrt 与双栈网络环境下的绑定行为。**  
   用户希望 `-public` 和 `-host` 参数具备清晰、可预测的优先级，并正确支持 IPv4 与 IPv6 双栈访问。

2. **扩展 OpenAI 兼容模型服务商。**  
   Standard Compute 接入表明用户希望降低供应商锁定，并以统一接口使用多个模型来源。但该 PR 尚无公开互动数据，其社区认可度仍待观察。

---

## 5. Bug 与稳定性

### 高优先级：Launcher 参数组合导致进程反复崩溃

- **Issue：** [#3439](https://github.com/sipeed/picoclaw/issues/3439)
- **严重程度：** 高
- **状态：** 已关闭，未见明确关联的修复 PR
- **问题表现：**
  - `-public` 与 `-host` 同时设置时发生冲突，可能造成自撞和 crash loop。
  - `-public` 单独使用时仅监听 IPv6，IPv4 客户端无法连接。
  - 用户环境为 OpenWrt aarch64、PicoClaw Launcher v0.5.0，内核设置 `net.ipv6.bindv6only = 0`，并通过 procd 常驻运行。

**稳定性影响：**  
该问题会直接导致服务不可用或反复重启，在路由器、边缘设备和双栈网络场景中尤其明显。

**修复情况：**  
Issue 虽已关闭，但给定数据中没有展示明确关联的 fix PR，因此无法确认该问题是否已通过代码变更完整解决。建议维护者补充修复提交或发布说明，避免用户仅依据 Issue 关闭状态判断问题已经解决。

---

### 中优先级：Cron 执行失败仍记录为成功

- **Issue：** [#3423](https://github.com/sipeed/picoclaw/issues/3423)
- **修复 PR：** [#3442](https://github.com/sipeed/picoclaw/pull/3442)
- **严重程度：** 中
- **状态：** 已有明确修复 PR，并已关闭。

**影响：**  
任务执行失败时状态数据错误，可能造成监控告警缺失、排障误判以及用户对自动化任务运行情况产生错误认知。

---

### 中低优先级：Telegram MarkdownV2 格式消息被拒绝

- **Issue：** [#3426](https://github.com/sipeed/picoclaw/issues/3426)
- **修复 PR：** [#3443](https://github.com/sipeed/picoclaw/pull/3443)
- **严重程度：** 中低
- **状态：** 已有明确修复 PR，并已关闭。

**影响：**  
带有链接标签或引用块的回复可能被 Telegram 拒绝，随后退化为纯文本，导致格式丢失。不会造成核心服务不可用，但会明显影响用户体验和输出可靠性。

---

### 稳定性结论

- 今日明确暴露的两个稳定性问题中，Cron 状态传播与 Telegram 转义均已有对应修复。
- Launcher 网络绑定问题虽然已关闭，但缺少可验证的修复 PR 关联，是当前仍需关注的稳定性盲点。
- 今日没有报告新的回归或崩溃 Issue。

---

## 6. 功能请求与路线图信号

### Standard Compute Provider 接入

- **PR：** [#3431](https://github.com/sipeed/picoclaw/pull/3431)
- **可能纳入下一版本的依据：**
  - PR 已实现服务商注册和元数据配置，不是纯概念提案。
  - Standard Compute 遵循既有 OpenAI 兼容服务商模式，实施路径相对清晰。
  - 相比新增实验性功能，这类扩展对现有架构侵入较小。

**仍需确认：**
- 服务商名称与配置键是否稳定。
- 是否需要默认模型、模型发现或能力探测。
- API 兼容程度、速率限制和错误返回是否符合 PicoClaw 现有抽象。
- 是否补充用户文档与配置示例。

**判断：**  
在五个 PR 中，该功能属于最可能进入下一版本或近期发布节奏的项目，但仍处于待合并状态，不能视为已进入正式路线图。

### Launcher 参数语义与双栈监听改进

- **Issue：** [#3439](https://github.com/sipeed/picoclaw/issues/3439)
- **路线图信号：**
  - 用户需要 `-public`、`-host`、IPv4 和 IPv6 行为具有明确规则。
  - 路由器和 OpenWrt 用户可能需要更稳健的监听地址选择与冲突检测。
  - 可考虑增加启动时的配置冲突诊断、日志提示或参数校验。

**判断：**  
该问题更可能作为缺陷修复进入后续版本，而非独立功能项。若要进入下一版本，建议附带参数优先级说明和双栈测试用例。

---

## 7. 用户反馈摘要

### 真实使用场景

- **OpenWrt 路由器常驻部署：**  
  用户在 GL-BE6500、aarch64 环境下使用 Launcher v0.5.0，并通过 procd 管理进程。
- **双栈网络访问：**  
  用户需要 IPv4 与 IPv6 客户端都能连接服务，但 `-public` 单独使用时实际只监听 IPv6。
- **参数组合使用：**  
  用户同时设置 `-public` 和 `-host 0.0.0.0`，触发冲突与 crash loop。
- **自动化任务可靠性：**  
  Cron 修复反映出用户或维护者高度依赖任务状态记录判断执行是否成功。
- **Telegram 格式化输出：**  
  链接和引用块是实际使用中的常见格式需求，修复旨在避免格式降级。

### 满意与不满意

**积极信号：**
- Telegram 和 Cron 两个问题都已有针对性修复 PR，说明社区提交能够进入维护流程并形成可落地的代码变更。

**主要不满与痛点：**
- Launcher 参数行为不透明，组合使用不安全，且 IPv4/IPv6 行为与用户预期不一致。
- Cron 失败状态不可信，妨碍故障定位。
- Telegram 格式化消息被 API 拒绝后静默降级，用户会感觉输出质量不稳定。
- 多个条目以 `[stale]` 关闭，而缺少清晰的最终结论、修复提交或版本发布说明，可能降低用户对问题闭环的信任。

---

## 8. 待处理积压

### 待合并的新服务商接入

- **PR：** [#3431 feat(provider): add Standard Compute provider](https://github.com/sipeed/picoclaw/pull/3431)
- **创建时间：** 2026-10-15
- **当前状态：** OPEN，且标记为 `[stale]`
- **风险：** 新功能长时间未合并，可能失去与当前代码架构的同步，同时增加后续重基和冲突成本。
- **建议：** 维护者确认是否仍计划合入；若保留，应补充文档、配置示例和兼容性测试，并更新 PR 状态说明。

### 已标记 stale、但缺少修复闭环证据的问题

- **Issue：** [#3439](https://github.com/sipeed/picoclaw/issues/3439)
- **PR：** [#3443](https://github.com/sipeed/picoclaw/pull/3443)
- **PR：** [#3442](https://github.com/sipeed/picoclaw/pull/3442)
- **风险：**
  - 这些条目均创建于 2026-10-15，并在 2026-10-31 出现集中更新。
  - Issue 或 PR 以 stale 状态关闭，不代表对应功能已经进入当前发布版本。
  - 缺少 release notes 时，用户难以判断是否需要升级或调整配置。

### 历史 PR 合并分支

- **PR：** [#1558](https://github.com/sipeed/picoclaw/pull/1558)
- **PR：** [#1545](https://github.com/sipeed/picoclaw/pull/1545)
- **风险：**
  - 两个 PR 均创建于 2026-03-14，长期保留会增加仓库管理复杂度。
  - 集中关闭有助于清理积压，但应确保其中每项修复均已进入目标分支，并留下可追溯的提交记录。

---

## 总体健康度判断

**健康度：中等偏稳，但维护响应与发布闭环需要改善。**

- **代码层面：** 两个明确缺陷已有针对性修复，核心方向正确。
- **功能层面：** Provider 扩展仍在等待合并，尚未形成新的正式版本能力。
- **社区层面：** 今日无新讨论或高互动事件，Issue/PR 的评论和点赞数据较少。
- **维护层面：** stale 标记、长期开放条目以及缺少发布说明，是当前最明显的问题。
- **发布层面：** 过去 24 小时无新版本，因此今日修复是否已对用户可用仍不明确。

**建议下一阶段优先事项：**

1. 明确 [#3439](https://github.com/sipeed/picoclaw/issues/3439) 的实际修复提交与验证结果。  
2. 审查并推进或关闭 [#3431](https://github.com/sipeed/picoclaw/pull/3431)。  
3. 为 [#3442](https://github.com/sipeed/picoclaw/pull/3442) 与 [#3443](https://github.com/sipeed/picoclaw/pull/3443) 准备发布说明。  
4. 清理长期 stale 和历史合并类 PR，降低维护积压。

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>QwenPaw</strong> — <a href="https://github.com/agentscope-ai/QwenPaw">agentscope-ai/QwenPaw</a></summary>

⚠️ 摘要生成失败。

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/NousResearch/hermes-agent">NousResearch/hermes-agent</a></summary>

# Hermes Agent 项目动态日报

**统计日期：2026-11-01**  
**数据范围：过去 24 小时 GitHub Issues / Pull Requests 更新**

---

## 1. 今日速览

过去 24 小时共更新 **50 条 Issues**（48 条新开或活跃、2 条关闭）和 **50 条 PR**（33 条待合并、17 条已合并或关闭），项目开发活动很高，但待处理量也同步上升。讨论重点集中在 **Desktop 会话状态、流式渲染、压缩与任务恢复、配置热更新、移动端体验及审批安全** 等关键链路。安全方面出现了高风险信号：Smart Approval 可能因命令文本与实际执行语义不一致而误放行破坏性操作。  
整体判断：**项目处于高活跃迭代期，功能扩展较快，但会话状态管理和安全审批仍是主要稳定性风险；今日无新版本发布，修复大多尚未进入正式版本。**

---

## 3. 项目进展

> 今日无新版本发布。以下为当前仍开放、已通过 CI 审查或直接对应高价值缺陷的代表性 PR。

### 2.1 配置文件与 Profile 安全性

- **阻止 `hermes update` 将默认 `.env` 复制到其他 Profile**
  - 该 PR 已关闭，修复了更新流程会向缺少 `.env` 的命名 Profile 复制默认环境变量的问题，其中可能包含机器人 Token 等敏感信息。
  - 这是一个重要的凭据隔离与安全修复，应确认已通过其他提交进入主线。
  - [PR #147432](https://github.com/NousResearch/hermes-agent/pull/147432)

### 2.2 Desktop 会话与流式交互

- **等待子代理或后台进程的会话持续显示运行状态**
  - 会话主轮次结束但仍有子代理或后台任务时，侧边栏继续保留运行高亮，减少用户对任务已完成的误判。
  - [PR #147443](https://github.com/NousResearch/hermes-agent/pull/147443)

- **移除压缩会话中令人困惑的“automatic continuation”提示**
  - 避免用户将内部压缩续跑机制误解为异常状态或重复执行。
  - [PR #147440](https://github.com/NousResearch/hermes-agent/pull/147440)

- **流式 Token 不再破坏 Desktop 导航上下文**
  - 将实时 transcript 与历史分页上下文分离，降低流式输出时页面跳转、上下文失效和历史浏览异常的概率。
  - 对应今天活跃的 Desktop 重复渲染、滚动跳变等问题属于同一技术方向，但尚不能确认已完全覆盖。
  - [PR #146597](https://github.com/NousResearch/hermes-agent/pull/146597)

- **空闲预览页面节流，但不打断自动化与标注采集**
  - 引入 Chromium 后台节流，同时使用独立的活跃任务持有机制，降低桌面端空闲资源占用。
  - [PR #146600](https://github.com/NousResearch/hermes-agent/pull/146600)

### 2.3 流式可靠性与消息投递

- **增加流式响应总时长上限 `agent.stream_max_lifetime`**
  - 默认关闭；启用后，可终止持续输出数据但永不结束的响应。
  - 被截断时会明确指出配置项，且不会造成工具或流锁死。
  - 这对长时间推理及供应商异常流尤其有价值。
  - [PR #80701](https://github.com/NousResearch/hermes-agent/pull/80701)

- **流式回复的媒体附件上传失败时向用户明确提示**
  - 修复“文本声称文件已发送，但实际上传失败且用户无感知”的交付问题。
  - [PR #147107](https://github.com/NousResearch/hermes-agent/pull/147107)

### 2.4 审批安全与插件能力

- **审批界面显示隐藏 Unicode、控制字符和填充字符**
  - 将零宽字符、双向控制符、变体选择符、Tag 字符、分隔符等转义展示，防止命令表面无害、实际包含不可见内容。
  - 是今日 Smart Approval 语义误判事件的重要防线，但目前仅解决“展示透明性”，不能单独解决“描述与执行目标不一致”。
  - [PR #81403](https://github.com/NousResearch/hermes-agent/pull/81403)

- **插件与 Shell Hook 可在模型调用前阻止一轮请求**
  - `pre_llm_call` 可返回阻断动作与用户可见消息；被阻止的提示仅保存为占位内容，不发送给模型。
  - [PR #81434](https://github.com/NousResearch/hermes-agent/pull/81434)

- **新增非目录型 MCP 配置与审批流程**
  - `hermes mcp add --yes` 支持非交互执行，Agent 通过终端添加、安装或删除 MCP 服务时也会进入审批流程。
  - [PR #147106](https://github.com/NousResearch/hermes-agent/pull/147106)

### 2.5 Kanban 与网关稳定性

- **修复 Kanban 重生保护因陈旧错误文本而永久停牌**
  - 避免回收后的运行结果仍受持久化旧错误影响，使卡片无法重新调度。
  - [PR #147437](https://github.com/NousResearch/hermes-agent/pull/147437)

- **拒绝未配置模型的会话**
  - 修复 Profile 没有模型时仍创建无效 Worker 或保存无法恢复的会话凭据，最终仅显示模糊 `storage_unavailable` 的问题。
  - [PR #144088](https://github.com/NousResearch/hermes-agent/pull/144088)

- **Kanban 网关正常关闭不再计入任务失败预算**
  - 对应今日 Issue 中“网关关闭消耗失败次数，导致任务过早停牌”的问题。
  - [Issue #147366](https://github.com/NousResearch/hermes-agent/issues/147366)

### 2.6 平台与桌面体验

- **微信不可投递回复暂存至对端下次入站**
  - 避免在微信回复窗口关闭后直接丢弃机器人主动发送的消息。
  - [PR #147441](https://github.com/NousResearch/hermes-agent/pull/147441)

- **Desktop 最小化后保持语音检测**
  - 将语音检测从动画帧迁移到本地 AudioWorklet，降低最小化窗口中语音功能失效的概率。
  - [PR #146601](https://github.com/NousResearch/hermes-agent/pull/146601)

- **工具预览按差异截断**
  - 连续工具调用共享有限字符预算时，保留差异尾部，减少预览中关键参数被截掉的情况。
  - [PR #24304](https://github.com/NousResearch/hermes-agent/pull/24304)

### 2.7 扩展能力

- **新增 fal.ai 音乐和音效生成技能**
  - 支持 ElevenLabs Music v2.5、MiniMax 3、Lyria 3、Stable Audio 3、ACE-Step 等托管模型。
  - [PR #111579](https://github.com/NousResearch/hermes-agent/pull/111579)

- **新增像素风游戏特效与精灵图技能**
  - 可导出适用于 Godot、Unity、Phaser 或 Canvas 的动画素材。
  - [PR #147438](https://github.com/NousResearch/hermes-agent/pull/147438)

- **插件目录新增 Proxy**
  - 提供 Meta、Google、LinkedIn、TikTok 广告库的只读 MCP 服务。
  - [PR #147434](https://github.com/NousResearch/hermes-agent/pull/147434)

---

## 4. 社区热点

### 4.1 移动端官方应用与语音通话

- **原生 iOS / Android 应用及语音通话**
  - 21 条评论、15 个 👍，是今日讨论度和社区支持度最高的需求。
  - 用户希望以电话形式与 Hermes 实时对话，强调免手、连续交互和移动场景。
  - 这项需求跨度较大，涵盖客户端、实时音频、通话生命周期、后台运行、通知及权限管理，更适合分阶段建设。
  - [Issue #11911](https://github.com/NousResearch/hermes-agent/issues/11911)

- **Android Beta 已达到 Firebase 测试人数上限**
  - 6 条评论、1 个 👍，说明移动端测试需求已形成实际规模。
  - 当前瓶颈不是功能设计，而是测试名额、发布通道和版本分发机制。
  - [Issue #147269](https://github.com/NousResearch/hermes-agent/issues/147269)

- **iOS Beta 启动时筛选菜单间歇性缺项**
  - 反映移动端初始化流程存在非确定性竞态或启动状态依赖。
  - [Issue #147371](https://github.com/NousResearch/hermes-agent/issues/147371)

- **Android 完成回复时缺少最终通知**
  - 该 Issue 今日已关闭，表明移动端通知链路正在快速修正。
  - [Issue #147345](https://github.com/NousResearch/hermes-agent/issues/147345)

### 4.2 Desktop 会话状态与流式渲染

- **流式期间消息重复渲染和滚动跳变**
  - 18 条评论，是今日评论量最高的 Bug。
  - 用户关注的是长时间运行时 Desktop 是否可信、稳定，以及会话记录是否会被正确渲染。
  - [Issue #128468](https://github.com/NousResearch/hermes-agent/issues/128468)

- **Desktop 偶发重复上一轮对话**
  - 报告约五次发送中出现一次，与临时 ID 到服务端 ID 的替换竞态高度相关。
  - [Issue #131848](https://github.com/NousResearch/hermes-agent/issues/131848)

- **会话悬停即切换焦点**
  - 用户希望焦点只能由明确点击改变，避免与操作系统级语音输入、鼠标移动产生冲突。
  - [Issue #145453](https://github.com/NousResearch/hermes-agent/issues/145453)

- **桌面端拖放文件到消息平台会话必然权限拒绝**
  - 同一操作在本地会话有效，但消息平台会话受 LOCAL Policy 限制；UI 未提前禁用，造成“看似可用、实际失败”。
  - [Issue #145298](https://github.com/NousResearch/hermes-agent/issues/145298)

### 4.3 长任务、压缩和后台恢复

- **Codex 长任务首次实质进度可能停滞约 300 秒**
  - 15 条评论，关注点是长工具链任务的可预测性、超时体验及压缩时机之间的关联。
  - [Issue #131743](https://github.com/NousResearch/hermes-agent/issues/131743)

- **压缩过程中可能重放已完成请求**
  - 2 条评论，但影响较高：后台通知可能唤醒旧任务、重复执行已完成操作。
  - [Issue #147339](https://github.com/NousResearch/hermes-agent/issues/147339)

- **Desktop 审批超时后缺少直接恢复路径**
  - 用户希望保留原命令并一键重新发起，尤其适合长脚本和重复执行场景。
  - [Issue #147393](https://github.com/NousResearch/hermes-agent/issues/147393)

### 4.4 安全审批成为高风险热点

- **Smart Approval 误放行删除 188,303 个文件并释放 21.4 GiB 的 PowerShell 命令**
  - 1 条评论，但事件严重程度最高。
  - 核心问题是审批器依据命令文本做语义判断，而终端实际按表达式展开后执行，两者目标可能不一致。
  - 需要从展示层修复升级为执行前规范化、真实目标解析和破坏性操作额外确认。
  - [Issue #147373](https://github.com/NousResearch/hermes-agent/issues/147373)

---

## 5. Bug 与稳定性

### 5.1 严重级别：关键 / 高风险

1. **Smart Approval 可能自动批准大规模破坏性 PowerShell 操作**
   - 影响：数据丢失、磁盘空间被释放，且用户可能认为操作只涉及少量目标。
   - 已有相关 PR：Unicode 可视化修复 [#81403](https://github.com/NousResearch/hermes-agent/pull/81403)，但尚无明确针对“文本语义与真实执行目标不一致”的专项修复。
   - [Issue #147373](https://github.com/NousResearch/hermes-agent/issues/147373)

2. **MCP Form Elicitation 返回空内容导致合规审批失败**
   - Telegram 审批界面显示 `accept`，但向 MCP Server 返回 `content={}`，不满足必填 Schema。
   - 影响：需要用户填写表单的工具无法完成授权。
   - 暂未发现明确对应 Fix PR。
   - [Issue #58778](https://github.com/NousResearch/hermes-agent/issues/58778)

3. **压缩可能在后台通知后重放已完成请求**
   - 影响：重复执行任务或产生非预期副作用。
   - 暂未发现明确对应 Fix PR。
   - [Issue #147339](https://github.com/NousResearch/hermes-agent/issues/147339)

### 5.2 严重级别：高 / 中高

4. **Desktop 流式消息重复渲染与滚动跳变**
   - 影响核心聊天体验，且与大上下文、长回复场景高度相关。
   - 相关 PR：导航上下文隔离 [#146597](https://github.com/NousResearch/hermes-agent/pull/146597)，但无法确认完整覆盖重复渲染问题。
   - [Issue #128468](https://github.com/NousResearch/hermes-agent/issues/128468)

5. **Codex 长任务首次实质进度停滞**
   - 约 300 秒无进展后取消重试，显著增加长任务耗时和费用。
   - 相关 PR：流式总时长限制 [#80701](https://github.com/NousResearch/hermes-agent/pull/80701)，但该功能仅限制总时长，并不直接解决首次进度识别问题。
   - [Issue #131743](https://github.com/NousResearch/hermes-agent/issues/131743)

6. **Cron monitor 在无变化 tick 中持续创建空会话**
   - 会污染 `state.db`，增加状态库体积，并干扰会话列表和统计。
   - 暂未发现明确对应 Fix PR。
   - [Issue #140222](https://github.com/NousResearch/hermes-agent/issues/140222)

7. **迁移 `HERMES_HOME` 后所有旧会话永久报 `profile_mismatch`**
   - 数据仍在数据库中，但缺少重新绑定或迁移路径。
   - 影响用户迁移目录、备份恢复及跨机器使用。
   - 暂未发现明确对应 Fix PR。
   - [Issue #146480](https://github.com/NousResearch/hermes-agent/issues/146480)

8. **移动 `HERMES_HOME` 后配置缓存失效机制不生效**
   - 会话使用冻结的配置策略快照，修改压缩阈值、上下文长度等配置不会重建现有 Agent。
   - 暂未发现明确对应 Fix PR。
   - [Issue #144615](https://github.com/NousResearch/hermes-agent/issues/144615)

### 5.3 严重级别：中

9. **Desktop 乐观临时 ID 与服务端 ID 替换存在竞态，偶发重复上一轮对话**
   - 暂未发现明确对应 Fix PR。
   - [Issue #131848](https://github.com/NousResearch/hermes-agent/issues/131848)

10. **Kanban Profile 未配置模型时 Worker 立即报 `storage_unavailable`**
    - 错误信息掩盖了真实配置缺失。
    - 已有 Fix PR：拒绝无模型会话 [#144088](https://github.com/NousResearch/hermes-agent/pull/144088)。
    - [Issue #144027](https://github.com/NousResearch/hermes-agent/issues/144027)

11. **Kanban 网关关闭被计为任务失败**
    - 正常生命周期事件消耗失败预算，可能导致卡片过早停牌。
    - 已有修复方向/PR：重生保护修复 [#147437](https://github.com/NousResearch/hermes-agent/pull/147437)，但网关关闭是否不计失败仍需单独确认。
    - [Issue #147366](https://github.com/NousResearch/hermes-agent/issues/147366)

12. **Background Review / Side Question 的工具白名单在线程切换后失效**
    - 工具 Worker 线程看不到线程局部白名单，审查任务可能调用本应禁用的工具。
    - 暂未发现明确对应 Fix PR。
    - [Issue #136623](https://github.com/NousResearch/hermes-agent/issues/136623)

13. **Telegram DoH 仅返回单一 IP 时丢失备用地址**
    - 黑洞 IP 会导致 Telegram Adapter 长时间无法恢复连接。
    - 暂未发现明确对应 Fix PR。
    - [Issue #147346](https://github.com/NousResearch/hermes-agent/issues/147346)

### 5.4 严重级别：低至中

14. **Bot Mode 群聊提示被 Memory Provider 当作用户语音保存**
    - 会污染长期记忆，把房间规则、上下文和提示文本写入用户记忆。
    - [Issue #141333](https://github.com/NousResearch/hermes-agent/issues/141333)

15. **Memory Provider 初始化失败后仍标记为已激活**
    - 半初始化 Provider 会让后续所有 Hook 持续崩溃，影响整个进程生命周期。
    - [Issue #147383](https://github.com/NousResearch/hermes-agent/issues/147383)

16. **Desktop 麦克风按钮宽度变化导致点击偏移**
    - 空输入和录音状态按钮宽度不一致，点击可能误触“开始语音对话”。
    - [Issue #147426](https://github.com/NousResearch/hermes-agent/issues/147426)

17. **TUI 实时提示行吞掉孤立空格**
    - 提交内容本身正确，主要影响用户对输入状态的判断。
    - [Issue #147337](https://github.com/NousResearch/hermes-agent/issues/147337)

18. **Desktop 会话悬停即改变焦点**
    - 会与操作系统语音输入和无意鼠标移动冲突。
    - [Issue #145453](https://github.com/NousResearch/hermes-agent/issues/145453)

19. **Desktop 消息平台会话拖放文件显示权限拒绝**
    - UI 未根据 LOCAL Policy 提前禁用拖放。
    - [Issue #145298](https://github.com/NousResearch/hermes-agent/issues/145298)

20. **移动端筛选菜单间歇性缺少 Webhook Runs / Project**
    - 启动时序或状态恢复存在竞态。
    - [Issue #147371](https://github.com/NousResearch/hermes-agent/issues/147371)

---

## 6. 功能请求与路线图信号

### 6.1 官方移动端与语音交互

- **原生移动应用及语音通话**仍是社区最强烈的路线图诉求。
- Android Beta 已达到 Firebase 人数上限，iOS 也进入 Beta 测试，说明“官方客户端”已开始从概念走向实际交付。
- 下一阶段可重点关注：
  - 稳定通话生命周期；
  - 前后台切换；
  - 完成与后台通知；
  - 语音权限和音频焦点；
  - Beta 分发扩容。
- [Issue #11911](https://github.com/NousResearch/hermes-agent/issues/11911)
- [Issue #147269](https://github.com/NousResearch/hermes-agent/issues/147269)

### 6.2 Desktop 会话可靠性

- 今日多个 PR 已围绕“运行状态是否准确”“流式内容是否重复”“压缩提示是否清晰”展开。
- 这表明 Desktop 的近期路线重点是**从功能可用转向状态可信和长会话稳定性**。
- 可能进入下一阶段的改动：
  - 后台任务持续高亮 [#147443](https://github.com/NousResearch/hermes-agent/pull/147443)
  - 移除压缩续跑提示 [#147440](https://github.com/NousResearch/hermes-agent/pull/147440)
  - 流式 Token 与导航上下文隔离 [#146597](https://github.com/NousResearch/hermes-agent/pull/146597)
  - 空闲预览节流 [#146600](https://github.com/NousResearch/hermes-agent/pull/146600)

### 6.3 可控的长时间流式响应

- `agent.stream_max_lifetime` 是一个明确的配置型路线信号。
- 它适合解决供应商持续输出但永不完成、网络半开以及无限推理流。
- 由于默认关闭，预计兼容性风险较低，较有可能进入后续版本。
- [PR #80701](https://github.com/NousResearch/hermes-agent/pull/80701)

### 6.4 审批安全与可恢复性

- 审批 UI 的隐藏字符可视化已具备实现基础。
- 在此基础上，下一步更可能出现的是：
  - 执行前命令规范化；
  - 破坏性操作二次确认；
  - 审批超时后“重新执行”；
  - Agent 添加 MCP 服务时强制审批。
- [PR #81403](https://github.com/NousResearch/hermes-agent/pull/81403)
- [Issue #147393](https://github.com/NousResearch/hermes-agent/issues/147393)
- [PR #147106](https://github.com/NousResearch/hermes-agent/pull/147106)

### 6.5 技能与插件生态继续扩张

近期路线清晰地覆盖多媒体生成、研究、广告情报和游戏开发：

- fal.ai 音乐与音效生成：[PR #111579](https://github.com/NousResearch/hermes-agent/pull/111579)
- 像素风游戏特效：[PR #147438](https://github.com/NousResearch/hermes-agent/pull/147438)
- 广告库 Proxy MCP：[PR #147434](https://github.com/NousResearch/hermes-agent/pull/147434)

此外，插件和 Shell Hook 获得模型调用前的阻断能力，说明扩展系统正在从“观测与辅助”向“策略控制”发展：

- [PR #81434](https://github.com/NousResearch/hermes-agent/pull/81434)

---

## 7. 用户反馈摘要

### 真实痛点与使用场景

1. **移动端缺少自然、免手交互**
   - 用户希望通过官方原生 App 直接与 Hermes 通话，而不仅是在聊天窗口中输入文字。
   - Android Beta 测试人数已满，说明移动端具有真实而广泛的使用需求。
   - [Issue #11911](https://github.com/NousResearch/hermes-agent/issues/11911)
   - [Issue #147269](https://github.com/NousResearch/hermes-agent/issues/147269)

2. **长会话的界面状态不可信**
   - 重复渲染、滚动跳变、上一轮对话重复出现、压缩提示困惑等问题，会直接削弱用户对 Agent 正在执行什么的判断。
   - 用户尤其关注长时间运行和持续流式输出场景。
   - [Issue #128468](https://github.com/NousResearch/hermes-agent/issues/128468)
   - [Issue #131848](https://github.com/NousResearch/hermes-agent/issues/131848)

3. **长任务缺乏及时反馈**
   - Codex 首次实质进度可能停滞约 300 秒，而压缩策略调整与改善存在相关性。
   - 用户需要更明确的进度信号、可配置超时及不中断任务的压缩机制。
   - [Issue #131743](https://github.com/NousResearch/hermes-agent/issues/131743)

4. **恢复和迁移流程不友好**
   - `HERMES_HOME` 移动后旧会话不可恢复，是数据仍存在但产品层面不可用的典型问题。
   - 审批超时后也缺少重新执行入口，用户需要手工重建长命令。
   - [Issue #146480](https://github.com/NousResearch/hermes-agent/issues/146480)
   - [Issue #147393](https://github.com/NousResearch/hermes-agent/issues/147393)

5. **平台权限与 UI 行为不一致**
   - 文件拖放在本地会话可用、消息平台会话却始终失败。
   - 会话悬停即切换焦点也干扰操作系统级语音输入。
   - 这些反馈表明用户期待 UI 在操作前准确表达能力边界。
   - [Issue #145298](https://github.com/NousResearch/hermes-agent/issues/145298)
   - [Issue #145453](https://github.com/NousResearch/hermes-agent/issues/145453)

### 满意与积极信号

- 移动端 Beta 已经具备实际可用产品形态，且相关问题在发布后迅速获得反馈和关闭。
- 今日 PR 同时覆盖 Desktop 性能、语音检测、流式控制、审批安全和多媒体技能，说明维护者对现有用户反馈有较强响应。
- **未提供足够评论原文以判断具体满意度**，因此无法对用户好评比例或功能满意度作可靠量化。

---

## 8. 待处理积压

以下条目创建时间较早、评论较多，或涉及跨版本兼容与安全风险，建议维护者优先处理。

### 8.1 移动端官方客户端与语音通话

- 创建于 2026-04-18，今日仍有 21 条评论，是最典型的长期高热度需求。
- 需求规模较大，但已成为移动端路线的重要公开信号。
- [Issue #11911](https://github.com/NousResearch/hermes-agent/issues/11911)

### 8.2 Desktop 流式重复渲染

- 创建于 2026-09-29，今日累计 18 条评论。
- 核心聊天 UI 的长期回归问题，且与今日多个 Desktop 性能 PR 处于同一区域。
- [Issue #128468](https://github.com/NousResearch/hermes-agent/issues/128468)

### 8.3 Codex 长任务首次进度停滞

- 创建于 2026-10-02，评论 15 条。
- 涉及长任务可靠性、超时、成本及压缩策略，需系统性复现，而非仅做单点超时修补。
- [Issue #131743](https://github.com/NousResearch/hermes-agent/issues/131743)

### 8.4 MCP Form Elicitation 审批协议错误

- 创建于 2026-07-05，已跨月但仍影响 Telegram 与 MCP 工具链。
- 建议核对 MCP SDK 的 ElicitResult Schema，并在审批 UI 收集必填字段后返回有效内容。
- [Issue #58778](https://github.com/NousResearch/hermes-agent/issues/58778)

### 8.5 技能合并过程缺少内容保真约束

- Curator 在大规模合并技能时缺少明确的内容保存规则，存在静默压缩或丢失细节的风险。
- Issue 引用了 arXiv:2607.26637，要求加入内容保真规则及有损合并审计。
- [Issue #80791](https://github.com/NousResearch/hermes-agent/issues/80791)

### 8.6 Background Review 工具白名单线程隔离问题

- 创建于 2026-10-11，属于权限边界问题；后台审查或侧问线程可能绕过白名单。
- 虽标记为 duplicate，仍建议确认其重复目标及最终修复覆盖情况。
- [Issue #136623](https://github.com/NousResearch/hermes-agent/issues/136623)

### 8.7 `HERMES_HOME` 迁移与会话恢复

- 创建于 2026-10-29，直接影响数据迁移和用户信任。
- 应提供显式 rebind/migration 流程，并在错误信息中给出恢复命令。
- [Issue #146480](https://github.com/NousResearch/hermes-agent/issues/146480)

### 8.8 跨 PR 的长期兼容风险

以下 PR 虽被标为 CI 已审查，但截至日报数据仍处于开放状态，且涉及高兼容风险：

- 流式总时长配置：[PR #80701](https://github.com/NousResearch/hermes-agent/pull/80701)
- 模型调用前阻断指令：[PR #81434](https://github.com/NousResearch/hermes-agent/pull/81434)
- 审批字符可视化：[PR #81403](https://github.com/NousResearch/hermes-agent/pull/81403)
- 工具差异预览：[PR #24304](https://github.com/NousResearch/hermes-agent/pull/24304)

---

## 总体健康度判断

**活跃度：高**  
**交付活跃度：高**  
**版本发布节奏：本日无发布**  
**稳定性风险：中高**  
**安全风险：需重点关注**

项目当前的主要矛盾不是缺乏功能，而是 **Desktop 长会话状态、流式响应生命周期、配置/会话迁移以及审批安全边界尚未完全收敛**。建议下一阶段优先顺序为：

1. **P0：修复 Smart Approval 对真实命令目标的误判，并加入破坏性操作保护。**
2. **P0：验证压缩和后台通知不会重放已完成任务。**
3. **P1：统一 Desktop 的流式渲染、会话 ID 替换和导航状态模型。**
4. **P1：修复 MCP Form Elicitation 的协议合规性。**
5. **P1：提供 `HERMES_HOME` 迁移、会话重绑定及配置缓存刷新机制。**
6. **P2：继续推进移动端 Beta 扩容、语音通话和可靠通知。**

</details>

<details>
<summary><strong>OpenHuman</strong> — <a href="https://github.com/tinyhumansai/openhuman">tinyhumansai/openhuman</a></summary>

# OpenHuman 项目动态日报

**统计日期：2026-11-01**  
**数据范围：过去 24 小时 GitHub Issues、PR 与 Releases 更新**

## 1. 今日速览

过去 24 小时项目共更新 **4 个 Issue、8 个 PR**，其中 **6 个 PR 仍待合并**，整体开发活跃度较高。  
主要推进集中在 **Windows 原生模块安装与稳定性、语音服务错误分类、聊天附件解析、远程审批和搜索服务接入**。  
两个影响 `tinyconnectors`/Composio 功能的 P0/P1 问题已关闭，并分别有对应修复 PR，说明关键故障已有明确处理路径，但尚待确认修复是否进入正式发布。  
当前无新版本发布，稳定性修复和多项功能改动仍处于 PR 阶段，项目健康度评估为**活跃且方向清晰，但发布与合并节奏需要跟进**。

---

## 2. 版本发布

过去 24 小时**无新版本发布**。

值得关注的未发布修复主要涉及 **0.64.15** 版本中的 Windows 模块加载问题；在相关 PR 合并并重新发布前，用户仍可能遇到 `tinyconnectors`、Composio 连接列表不可用等问题。

---

## 3. 项目进展

### 已关闭的重要 PR

#### 1. Windows 模块随安装包附带 VC Runtime，修复 `.dll` 加载失败

- **PR：** [#8513 — fix(installer): ship vcruntime140.dll beside each Windows module](https://github.com/tinyhumansai/openhuman/pull/8513)
- **状态：** 已关闭
- **对应 Issue：** [#8499 — tinyconnectors `.dll` module refused](https://github.com/tinyhumansai/openhuman/issues/8499)
- **主要进展：**
  - 在每个 Windows 模块目录旁部署 `vcruntime140.dll`。
  - 按 `OPENHUMAN_VC_REDIST_DIR`、`VCToolsRedistDir`、`vswhere.exe` 的顺序定位 VC Runtime。
  - 面向开发环境、Visual Studio Developer Prompt 和 CI 构建统一资源查找逻辑。
- **影响：** 修复 0.64.15 中原生连接器模块因缺少或无法加载 VC Runtime 而被拒绝的问题，恢复 `tinyconnectors` 及相关 Composio 功能。

#### 2. 安装包封存前校验内置模块版本漂移

- **PR：** [#8514 — fix(installer): catch bundled-module pin drift before sealing the installer](https://github.com/tinyhumansai/openhuman/pull/8514)
- **状态：** 已关闭
- **对应 Issue：** [#8500 — installer-bundle load fails](https://github.com/tinyhumansai/openhuman/issues/8500)
- **主要进展：**
  - 新增 `scripts/release/verify-bundled-modules.mjs`。
  - 对内置模块压缩包重新计算哈希，并核对 macOS `.sha256` 标记。
  - 将实际模块版本与 Rust registry 中编译期固定版本比较。
  - 防止模块包、安装器引用和固定版本之间出现漂移。
- **影响：** 从发布流程上降低“安装包引用了不匹配模块，进而无法加载”的风险。

### 待合并的主要功能与修复

| PR | 主要内容 | 预期价值 |
|---|---|---|
| [#8521](https://github.com/tinyhumansai/openhuman/pull/8521) | 区分 ElevenLabs 用户 BYOK 错误与托管服务错误；为用户密钥错误提供可操作提示 | 减少误报 Sentry，改善语音服务排障体验 |
| [#8520](https://github.com/tinyhumansai/openhuman/pull/8520) | 将 Gemini Live、voice-agent 等托管服务的余额不足、套餐限制归类为用户状态 | 避免将预期商业限制作为系统异常上报 |
| [#8329](https://github.com/tinyhumansai/openhuman/pull/8329) | 解析附件时保留用户文本中的空格、Python 缩进、Markdown 硬换行 | 提升聊天内容及代码块的格式保真度 |
| [#7248](https://github.com/tinyhumansai/openhuman/pull/7248) | 将 `.secret_key`、`auth-profiles.json`、`config.toml.bak`、`claude_code_settings.json` 排除出 agent 路径访问面 | 加强密钥、凭据和配置文件的隔离 |
| [#8452](https://github.com/tinyhumansai/openhuman/pull/8452) | 新增 `ApprovalDecision::Steer`，允许审批暂停时远程引导 agent | 提升人工介入的灵活性 |
| [#7279](https://github.com/tinyhumansai/openhuman/pull/7279) | 将 Keenable 接入搜索设置，并支持无密钥使用 | 扩展内置搜索提供商覆盖面 |

**整体推进评估：**  
今日进展主要补强了产品的**安装可靠性、运行时可观测性、语音错误体验、聊天内容保真、凭据安全和人工审批能力**。不过多数 PR 尚未合并，且暂无新版本，因此功能层面的改善尚未转化为已发布增量。

---

## 4. 社区热点

### 最活跃 Issue

#### [#6983 — Make the memory queue's LLM concurrency configurable](https://github.com/tinyhumansai/openhuman/issues/6983)

- **优先级：** P2
- **状态：** Open
- **评论数：** 8
- **作者：** @bodharma
- **热度判断：** 今日评论最多，是最明确的社区需求。

**核心诉求：**

当前 memory queue 的 LLM 并发固定为单个任务。对于云端摘要模型，首次导入较大规模记忆数据时，处理时间可能长达数天。Issue 希望将 `tinycortex` 已有的 `QueueConfig.llm_permits` 暴露到 `tinymemory` 配置链路，让用户可以提高并发。

**背后需求：**

- 大规模数据首次摄取不能被单任务队列阻塞。
- 用户需要根据云端模型限额、费用和机器资源调节吞吐量。
- 这是典型的“已有底层能力、缺少上层配置”的产品化缺口。

### 其他值得关注的讨论

- [#8519 — Add Runcrate as a built-in cloud provider](https://github.com/tinyhumansai/openhuman/issues/8519)
  - **状态：** Open，P3，1 条评论。
  - 用户希望直接通过 API Key 配置 Runcrate，而不是手动搭建 OpenAI-compatible endpoint。
  - 诉求集中于降低第三方模型服务的接入成本。

- [#8499](https://github.com/tinyhumansai/openhuman/issues/8499) 与 [#8500](https://github.com/tinyhumansai/openhuman/issues/8500)
  - 虽各仅 1 条评论，但属于 P0/P1 生产故障，且直接阻断连接器能力。
  - 关注度不完全体现于评论数，但业务严重度最高。

---

## 5. Bug 与稳定性

### P0：安装包内置模块加载失败

- **Issue：** [#8500 — tinyconnectors installer-bundle load fails](https://github.com/tinyhumansai/openhuman/issues/8500)
- **严重程度：** P0
- **影响范围：** 0.64.15 安装包中的 `tinyconnectors` 无法加载，连接器及 Composio 功能不可用，并级联触发 `list_connections` 失败。
- **修复状态：** 已有对应 PR [#8514](https://github.com/tinyhumansai/openhuman/pull/8514)，目前已关闭；仍需确认修复已进入发布分支及新版本。

### P1：Windows `.dll` 动态加载器拒绝原生模块

- **Issue：** [#8499 — tinyconnectors `.dll` module refused](https://github.com/tinyhumansai/openhuman/issues/8499)
- **严重程度：** P1
- **影响范围：** 0.64.15 Windows 环境中的 `tinyconnectors` 原生模块无法加载，所有连接器/Composio 功能不可用。
- **修复状态：** 已有对应 PR [#8513](https://github.com/tinyhumansai/openhuman/pull/8513)，目前已关闭；应继续确认新安装包在干净 Windows 环境中的加载验证结果。

### P2：聊天附件解析破坏用户文本空白

- **PR：** [#8329 — fix(chat): preserve user text whitespace when parsing attachments](https://github.com/tinyhumansai/openhuman/pull/8329)
- **严重程度：** P3
- **问题表现：** 移除附件标记时可能清理整条消息中的空格，破坏 Python 缩进、字符串内容和 Markdown 硬换行。
- **修复状态：** 已有待合并修复 PR。

### P2/P3：语音服务错误被错误归类或上报

- **PR：** [#8521 — ElevenLabs BYOK error mapping](https://github.com/tinyhumansai/openhuman/pull/8521)
  - 用户自有 API Key 的余额不足、Key 类型错误应返回明确提示，并从 Sentry 降级。
  - 托管服务自身故障仍保留上报。

- **PR：** [#8520 — hosted live-voice billing refusals](https://github.com/tinyhumansai/openhuman/pull/8520)
  - Gemini Live/voice-agent 的余额不足、套餐限制应作为用户状态处理，而非系统异常。
  - 托管路由中的真实服务故障仍需保留可观测性。

### 稳定性结论

- 两个阻断连接器的 Windows 发布故障均有明确修复 PR，**Issue 已关闭是积极信号**。
- 由于暂无新 Release，不能据此认定线上 0.64.15 已恢复。
- 语音与聊天修复仍待合并和发布，实际用户受益尚需后续版本验证。

---

## 6. 功能请求与路线图信号

### 高概率进入近期版本：Windows 安装稳定性修复

- **需求来源：** [#8499](https://github.com/tinyhumansai/openhuman/issues/8499)、[#8500](https://github.com/tinyhumansai/openhuman/issues/8500)
- **对应实现：** [#8513](https://github.com/tinyhumansai/openhuman/pull/8513)、[#8514](https://github.com/tinyhumansai/openhuman/pull/8514)
- **判断：** 高概率优先进入补丁版本，因为问题为 P0/P1、影响核心连接器能力，且修复已经形成。

### 中高概率：Memory queue 并发可配置

- **需求来源：** [#6983](https://github.com/tinyhumansai/openhuman/issues/6983)
- **现有基础：** `tinycortex` 已提供 `QueueConfig.llm_permits`。
- **判断：** 实现成本相对可控，且能显著改善大规模首次摄取体验，较可能进入近期版本；但当前数据中未出现对应 PR。

### 中等概率：Runcrate 内置云提供商

- **需求来源：** [#8519](https://github.com/tinyhumansai/openhuman/issues/8519)
- **判断：** 功能边界清晰，主要工作是增加 provider、默认模型、认证及设置界面。若已有较成熟的 OpenAI-compatible 适配层，进入下一版本的可能性较高；目前尚无明确 PR。

### 已有实现、等待合并的路线图项目

- **远程审批与运行中引导：** [#8452](https://github.com/tinyhumansai/openhuman/pull/8452)
- **Keenable 搜索接入：** [#7279](https://github.com/tinyhumansai/openhuman/pull/7279)
- **敏感文件路径隔离：** [#7248](https://github.com/tinyhumansai/openhuman/pull/7248)
- **聊天空白保真修复：** [#8329](https://github.com/tinyhumansai/openhuman/pull/8329)

---

## 7. 用户反馈摘要

### 核心痛点

1. **大规模记忆摄取效率不足**
   - [#6983](https://github.com/tinyhumansai/openhuman/issues/6983)
   - 单任务并发使云端摘要处理大初始数据时可能需要数天。
   - 用户希望明确控制并发，而不是依赖不可见的固定值。

2. **Windows 连接器在正式版本中不可用**
   - [#8499](https://github.com/tinyhumansai/openhuman/issues/8499)
   - [#8500](https://github.com/tinyhumansai/openhuman/issues/8500)
   - 影响不是单点 UI 问题，而是连接器、Composio 和连接查询等整条能力链。

3. **第三方模型接入步骤过多**
   - [#8519](https://github.com/tinyhumansai/openhuman/issues/8519)
   - Runcrate 已能服务多款开放权重模型，但用户仍需自行配置兼容端点。
   - 明确诉求是“填写 API Key 即可使用”。

4. **语音服务报错语义不够准确**
   - [#8521](https://github.com/tinyhumansai/openhuman/pull/8521)
   - [#8520](https://github.com/tinyhumansai/openhuman/pull/8520)
   - 用户需要区分“自己的 Key 或账户余额问题”和“平台托管服务故障”，前者应给出可执行提示，后者才应进入服务端告警。

5. **聊天附件处理会破坏原始文本**
   - [#8329](https://github.com/tinyhumansai/openhuman/pull/8329)
   - 尤其影响代码、Python 缩进、字符串及 Markdown 格式，属于影响内容正确性的体验问题。

### 满意与积极信号

- 关键故障关闭后均出现明确、范围较集中的修复 PR，说明社区反馈可以快速进入工程处理。
- Keenable 提供了无密钥即可使用的搜索接入方案，降低了搜索服务启用门槛。
- Memory queue 的底层配置能力已经存在，用户诉求更接近补齐配置传递与 UI，而非重写核心队列。

---

## 8. 待处理积压

### 需要维护者优先关注的长期 Issue

#### [#8519 — Add Runcrate as a built-in cloud provider](https://github.com/tinyhumansai/openhuman/issues/8519)

- 创建于 2026-10-31，仍为 Open。
- 当前仅 1 条评论，尚无对应 PR。
- 虽然优先级为 P3，但属于新接入需求，建议确认 provider 接入规范、模型清单和认证方案。

### 需要推动合并或收敛的长期 PR

#### [#7248 — Carve the account dir's secrets and privilege files out of the agent's path surface](https://github.com/tinyhumansai/openhuman/pull/7248)

- 创建于 2026-10-09，更新于 2026-10-31。
- 涉及密钥、认证配置、备份配置和 Claude Code 设置的权限边界，属于安全敏感改动。
- 应优先完成安全审查和测试验证，避免长期滞留。

#### [#7279 — Add Keenable to search settings](https://github.com/tinyhumansai/openhuman/pull/7279)

- 创建于 2026-10-10，更新于 2026-10-31。
- 已具备明确功能和 host-side 变更，适合通过维护者确认后尽快进入合并队列。

#### [#8329 — Preserve user text whitespace when parsing attachments](https://github.com/tinyhumansai/openhuman/pull/8329)

- 创建于 2026-10-23，更新于 2026-10-31。
- 已包含 parser 与 message-adapter 回归测试，测试基础相对完整。
- 建议明确阻塞原因，优先完成评审与合并。

#### [#8452 — Remote approval gate with in-flight steering](https://github.com/tinyhumansai/openhuman/pull/8452)

- 创建于 2026-10-27，更新于 2026-10-31。
- 改动涉及 core approval model、异步 gate waiter 和远程人工引导，架构影响较大。
- 建议聚焦 API 兼容性、并发安全和状态机行为，不宜仅以普通功能 PR 长期等待。

### 积压判断

- 今日有 **6 个待合并 PR**，但其中多数是跨日更新的活跃 PR，并非完全无人处理。
- 真正明显的新积压是新建的 Runcrate provider Issue，尚未形成实现。
- 最应避免长期搁置的是安全相关的 [#7248](https://github.com/tinyhumansai/openhuman/pull/7248) 和架构改动较大的 [#8452](https://github.com/tinyhumansai/openhuman/pull/8452)。

---

## 项目健康度结论

| 维度 | 状态 | 判断 |
|---|---|---|
| 开发活跃度 | 高 | 24 小时内 8 个 PR、4 个 Issue |
| 缺陷响应速度 | 较高 | 两个高严重度原生模块故障均已关闭并有修复 PR |
| 功能推进 | 稳定 | 搜索、审批、安全、聊天体验均有进展 |
| 发布节奏 | 偏慢 | 今日无新版本，关键修复是否已发布尚不明确 |
| 社区讨论热度 | 中等 | 讨论量不密集，但 memory queue 配置需求获得最多评论 |
| 综合健康度 | 良好 | 工程推进明确，需关注长期 PR 收敛和修复发布验证 |

**今日结论：** OpenHuman 正集中处理 Windows 原生模块发布链路和语音错误分类等稳定性问题，同时继续扩展搜索、审批及模型接入能力。当前最关键的后续动作不是继续扩大功能面，而是确保两个 Windows P0/P1 修复完成发布验证，并推动已具备实现基础的长期 PR 尽快收敛。

</details>

---
*本日报由 [Big Model Radar](https://github.com/96loveslife/big_model_radar) 自动生成。*
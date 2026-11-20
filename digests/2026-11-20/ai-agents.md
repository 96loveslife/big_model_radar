# OpenClaw 生态日报 2026-11-20

> Issues: 441 | PRs: 500 | 覆盖项目: 8 个 | 生成时间: 2026-11-20 06:39 UTC

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

**日期：2026-11-20**  
**项目：** [openclaw/openclaw](https://github.com/openclaw/openclaw)  
**统计窗口：** 过去 24 小时

---

## 1. 今日速览

- OpenClaw 过去 24 小时共更新 **441 条 Issues**，其中 **308 条新开或仍活跃、133 条关闭**；同期更新 **500 条 PRs**，其中 **298 条待合并、202 条已合并或关闭**，整体开发吞吐量很高。
- 今日发布 **v2026.11.10-beta.1** 和 **v2026.11.6** 两个版本。最新功能集中在 Agent 模板、ClawHub 包集成和 OpenClaw ID 节点连接，但社区反馈表明升级、Doctor、SQLite 迁移和 Gateway 恢复流程仍存在明显稳定性风险。
- 今日高热度问题主要围绕 **更新失败、Doctor 卡死或误判、SQLite 锁与 WAL 发布、启动性能退化、消息丢失、Prompt Cache 失效**。这些故障跨越 P0–P2，说明项目功能扩张很快，但发布验证和故障恢复链路仍有积压。
- PR 侧出现了针对升级失败恢复、Session Share 默认安全策略、移动端 Web UI、Claude CLI 语音咨询、子 Agent 权限恢复、Docker 配置命令和性能测试的重要改动。
- 综合判断：**项目活跃度很高，功能推进明显，但健康度处于“高吞吐、高风险”阶段**。当前最需要关注的是更新原子性、Doctor/Updater 可恢复性、状态数据库稳定性，以及对高影响 Issue 的维护者审查。

---

## 2. 版本发布

### v2026.11.10-beta.1

[Release 页面](https://github.com/openclaw/openclaw/releases/tag/v2026.11.10-beta.1)

#### 主要更新

- **Agent Templates 支持直接从 ClawHub 包添加 Agent**
  - 可通过单个 `CLAW.md` 清单声明 Agent。
  - 支持捆绑技能目录。
  - 技能包纳入原生信任流程。
  - 相关工作：[PR #195707](https://github.com/openclaw/openclaw/pull/195707)、[#196322](https://github.com/openclaw/openclaw/pull/196322)、[#196348](https://github.com/openclaw/openclaw/pull/196348)。

- **OpenClaw ID 增强节点连接能力**
  - Release Notes 中该项描述被截断，但从版本主题看，方向是强化节点与 OpenClaw ID 的连接和接入。

#### 破坏性变更与迁移注意事项

- 当前数据未提供完整、逐项的 breaking changes 清单，不能断言存在明确的接口级破坏性变更。
- 但从近期 Issue 看，Agent 模板、插件迁移和 Doctor 校验都处于高频变更区域，升级前建议：
  1. 备份 OpenClaw 状态库、插件数据库和配置；
  2. 在非生产环境验证 Doctor；
  3. 检查 ClawHub 包的 `CLAW.md` 信任状态和技能目录权限；
  4. 升级后确认 Gateway 启动、插件迁移及会话历史可正常读取。

### v2026.11.6

[Release 页面](https://github.com/openclaw/openclaw/releases/tag/v2026.11.6)

- 本次发布包含 **406 个提交、386 个 PR、157 位贡献者**，属于大型版本。
- Release 页面说明 Release Notes 和 Changelog 内容一致，分别提供不同展示格式。
- 社区在 2026.11.6 上仍报告了目标续跑提示重复发送 Discord 消息等问题，说明大版本功能覆盖广，但行为回归验证尚未完全收敛：[Issue #202246](https://github.com/openclaw/openclaw/issues/202246)。

### 版本风险提示

近期多个版本都出现了升级链式故障，升级前尤其需要留意：

- Doctor 更新候选时插件迁移冲突：[Issue #200606](https://github.com/openclaw/openclaw/issues/200606)
- 激活阶段插件数据库迁移延迟：[Issue #194655](https://github.com/openclaw/openclaw/issues/194655)
- Gateway 交接时 SQLite 锁导致服务不可用：[Issue #200289](https://github.com/openclaw/openclaw/issues/200289)
- 升级后外部插件未完整完成收尾：[Issue #197083](https://github.com/openclaw/openclaw/issues/197083)

---

## 3. 项目进展

> 今日 PR 列表中多数条目没有公开评论数，因此以下按影响范围和修复价值筛选。

### 3.1 升级失败后恢复 Gateway

[PR #202301](https://github.com/openclaw/openclaw/pull/202301) — **OPEN**

- 修复升级失败后 Gateway 未能恢复的问题。
- 当 Doctor 失败时，回滚 worker 可能因 updater 持有 SQLite maintenance 而无法打开更新账本，最终留下停止状态的 Gateway。
- 该 PR 直接对应高影响可用性问题 [#202265](https://github.com/openclaw/openclaw/issues/202265)。
- **进展判断：** 为“升级失败可恢复”补上关键兜底，但仍需维护者审查。

### 3.2 Session Share 默认改为显式启用

[PR #202299](https://github.com/openclaw/openclaw/pull/202299) — **OPEN**

- Session Share reader 必须由主机管理员显式 opt-in。
- 禁用或恢复访问时，不再复活已经准备好的 reader 握手或响应。
- 属于安全边界增强，降低跨会话读取风险。

### 3.3 Claude CLI Agent 接入语音通话与会议咨询

[PR #202209](https://github.com/openclaw/openclaw/pull/202209) — **OPEN**

- 修复 Claude CLI 等 CLI 运行时 Agent 无法处理：
  - Voice Call 实时通话；
  - Google Meet、Teams、Zoom、Slack Huddles；
  - FaceTime 咨询
  的问题。
- 变更涉及 Gateway、Agent、File Transfer、FaceTime 和语音渠道，标记了会话状态及安全边界风险。
- **进展判断：** 扩展 CLI Agent 的实时交互能力，但合入前仍需补充跨运行时证明。

### 3.4 子 Agent 完成后的权限恢复重构

[PR #200231](https://github.com/openclaw/openclaw/pull/200231) — **OPEN**

- 子 Agent 完成、排队跟进和 Cron 事件在重新进入 Gateway 时，从保存的 origin facts 和当前策略恢复执行权限。
- 解决“后台任务完成后无法恢复原有授权上下文”的架构问题。
- **进展判断：** 对后台 Agent、自动化和定时任务的可控执行具有基础性意义。

### 3.5 OpenClaw ID 权限统一与成员停用

[PR #201610](https://github.com/openclaw/openclaw/pull/201610) — **OPEN**

- 取消 OpenClaw ID 成员的第二套独立角色体系。
- 统一使用 Gateway profile role 管理所有登录路径。
- 管理员可停用 OpenClaw ID 成员，并统一成员权限角色。
- 属于较大规模权限治理改动，需重点验证兼容性与安全边界。

### 3.6 Docker 中 Gateway 运行期间无法修改配置

[PR #202288](https://github.com/openclaw/openclaw/pull/202288) — **OPEN**

- 修复官方 Docker Compose 环境中，`openclaw-cli` 在 Gateway 运行时无法修改配置或添加渠道的问题。
- 根因是 CLI 与 Gateway 位于不同 PID namespace，共享状态所有权检查产生误判。
- **进展判断：** 直接改善容器化部署的日常可运维性。

### 3.7 `/codex review` 支持更多审查目标

[PR #202114](https://github.com/openclaw/openclaw/pull/202114) — **CLOSED**

- `/codex review` 从仅审查未提交修改，扩展为支持：
  - 指定基准分支；
  - 指定单个 commit；
  - 自定义审查要求。
- 对齐原生 Codex 的 `review/start` 能力。

### 3.8 移动端 Web UI 修复

- 移动端侧边栏导航时保持 Automations、Customize、Workboard、Systems 等分区展开：[PR #202256](https://github.com/openclaw/openclaw/pull/202256)
- 调整 Dashboard 图标视觉状态，使其不再表现得像已选中控件：[PR #202295](https://github.com/openclaw/openclaw/pull/202295)
- 修复原生启动或重连时已保存主题被重置的问题：[PR #200220](https://github.com/openclaw/openclaw/pull/200220)

### 3.9 性能和测试基础设施

- 在 2 GiB、4 GiB 内存上限下测试 Gateway：[PR #202300](https://github.com/openclaw/openclaw/pull/202300)
- 性能采样加入 Gateway 稳定后的进程树内存指标：[PR #202283](https://github.com/openclaw/openclaw/pull/202283)
- 批量数据库边界成员查询，减少 CI 编译往返：[PR #202293](https://github.com/openclaw/openclaw/pull/202293)
- ChatGPT 模型发现改用 Codex 客户端版本，避免版本流错配：[PR #202284](https://github.com/openclaw/openclaw/pull/202284)

### 整体推进评估

今日项目在 **安全默认策略、升级恢复、跨运行时语音、子 Agent 权限、移动端体验和性能验证** 上均有实质推进。与此同时，500 条 PR 更新对应 202 条关闭或合并，说明团队仍在高频处理代码，但大量复杂 PR 仍处于待审状态，合并吞吐尚未完全跟上产出速度。

---

## 4. 社区热点

### 4.1 更新后 Doctor/WAL 验证失败

[Issue #197083](https://github.com/openclaw/openclaw/issues/197083) — **29 条评论，OPEN，P0**

- 从 2026.11.1 升级至 2026.11.3 后，新核心已激活，但 post-install Doctor 报：
  - `SQLite WAL commit publication could not be verified`
- 更新器因 `state-migrated-no-rollback` 拒绝回滚。
- Gateway 能恢复运行，但外部插件状态可能未完整收尾。
- **背后诉求：** 用户需要明确的升级事务边界、可恢复状态，以及不会留下“半升级”系统的更新流程。
- **Fix PR：数据中未显示直接对应且已合并的修复。**

### 4.2 `doctor --fix --non-interactive` 长时间卡死

[Issue #178359](https://github.com/openclaw/openclaw/issues/178359) — **27 条评论，OPEN，P1**

- macOS 上 Doctor 修复运行超过 15 分钟且无输出。
- 进程和子进程处于空闲状态，无法进入 Agent DB 修复阶段。
- **背后诉求：** Doctor 必须具备进度、超时、取消和可诊断日志，不能表现为静默挂起。
- **Fix PR：未显示已合并的直接修复；相关恢复方向见** [PR #202301](https://github.com/openclaw/openclaw/pull/202301)。

### 4.3 Windows 启动时间显著退化

[Issue #168955](https://github.com/openclaw/openclaw/issues/168955) — **23 条评论，OPEN，P1**

- 2026.10.1 的 `gateway ready` 从约 410 秒升至约 1030 秒。
- `sidecars.control-ui-assets` 阶段阻塞约 477 秒。
- **背后诉求：** 用户希望启动过程可观测，并解决 Windows 静态资源或 sidecar 初始化阻塞。
- **Fix PR：未显示直接关联修复。**

### 4.4 Telegram 网络失败后消息静默丢失

[Issue #125764](https://github.com/openclaw/openclaw/issues/125764) — **15 条评论，OPEN，P1**

- `sendMessage` 遇到瞬时网络故障后只尝试一次。
- 消息被 dead-letter，没有重试、没有 `reconcileUnknownSend`、无用户提示。
- **背后诉求：** 至少应具备指数退避重试、发送状态对账和可观测告警，避免关键消息静默消失。
- **Fix PR：未显示已合并的直接修复。**

### 4.5 2026.11.5 Doctor 阻止升级

[Issue #200606](https://github.com/openclaw/openclaw/issues/200606) — **14 条评论，OPEN，P1**

- 从 2026.11.3 更新到 2026.11.5 时，候选 Doctor 报插件迁移冲突，同时显示 `changed=[]`。
- **背后诉求：** 插件迁移差异计算必须准确，候选验证不能被无实际变化的冲突阻塞。
- **Fix PR：未显示直接对应修复。**

### 4.6 Windows 升级无法验证 Scheduled Task

[Issue #199617](https://github.com/openclaw/openclaw/issues/199617) — **14 条评论，OPEN，P2**

- 从 2026.11.5-beta.2 升级到 beta.3 连续失败。
- 验证 Scheduled Task 时收到无效响应，更新器报 `gateway-stop-unverified`。
- **背后诉求：** Windows 服务状态探测需支持当前系统返回格式，并在失败时保持安全且可恢复。
- **Fix PR：未显示直接对应修复。**

### 4.7 Prompt Cache 被会话历史重写抵消

相关 Issues：

- [Issue #198373](https://github.com/openclaw/openclaw/issues/198373) — **9 条评论**
- [Issue #202001](https://github.com/openclaw/openclaw/issues/202001) — **9 条评论**
- [Issue #155868](https://github.com/openclaw/openclaw/issues/155868) — **10 条评论**

核心症状：

- assistant tool-call ID 被重新生成；
- 系统提示 section 增删导致摘要变化；
- Agent 触发的运行与人工触发的运行使用不同工具列表；
- OpenAI-compatible 路由的 cache read 降至约 1–3%。

**背后诉求：** 保持会话历史和 prompt 前缀稳定，确保工具策略在语义未变化时不触发缓存失效。这直接关系到成本、延迟和长会话稳定性。

---

## 5. Bug 与稳定性

### P0 / 发布阻断级

| 问题 | 状态 | 影响 | Fix PR |
|---|---|---|---|
| [#197083](https://github.com/openclaw/openclaw/issues/197083) Doctor WAL 发布验证失败，升级未完全收尾 | OPEN | 可能产生半升级状态，外部插件状态不完整 | 未显示直接合并修复 |
| [#158277](https://github.com/openclaw/openclaw/issues/158277) Apple Watch 通话始终失败 | OPEN | Talk on Watch 无法建立实时音频；标记 P0、发布阻断 | 未显示 |

### P1 / 严重稳定性或消息可靠性问题

| 问题 | 状态 | 影响 | Fix PR |
|---|---|---|---|
| [#178359](https://github.com/openclaw/openclaw/issues/178359) Doctor 非交互修复静默挂起 | OPEN | 升级维护无法完成 | 相关方向：[#202301](https://github.com/openclaw/openclaw/pull/202301)，未合并 |
| [#168955](https://github.com/openclaw/openclaw/issues/168955) Windows 启动时间从约 410 秒增至约 1030 秒 | OPEN | 严重启动体验退化 | 未显示 |
| [#125764](https://github.com/openclaw/openclaw/issues/125764) Telegram 单次失败后消息丢失 | OPEN | 完成通知、announce 等消息可能静默丢失 | 未显示 |
| [#200606](https://github.com/openclaw/openclaw/issues/200606) Doctor 插件迁移冲突阻塞更新 | OPEN | 升级失败 | 未显示 |
| [#198218](https://github.com/openclaw/openclaw/issues/198218) Doctor/update repair 无限重哈希状态库 | OPEN | 维护流程活锁、CPU 空转 | 未显示直接修复 |
| [#196199](https://github.com/openclaw/openclaw/issues/196199) Codex helper 完成后无法恢复父 Agent | OPEN | 目标暂停、用户被锁出 | 未显示 |
| [#191476](https://github.com/openclaw/openclaw/issues/191476) Matrix consumer 关闭后房间持续不可用 | OPEN | 房间消息处理中断 | 未显示 |
| [#194655](https://github.com/openclaw/openclaw/issues/194655) 插件迁移延迟导致更新停在 `state-migrated-no-rollback` | OPEN | Gateway 停止 | 未显示 |
| [#169797](https://github.com/openclaw/openclaw/issues/169797) 单 CPU 主机内存约为旧版 2.5 倍 | OPEN | 内存和首响应延迟显著恶化 | 未显示 |
| [#173714](https://github.com/openclaw/openclaw/issues/173714) Provider HTTP 缺少 TCP keepalive/可配置空闲超时 | OPEN | WSL2/NAT 下模型请求可能长时间挂起 | 未显示 |
| [#202246](https://github.com/openclaw/openclaw/issues/202246) 2026.11.6 Discord 目标续跑提示重复发送 | CLOSED | 重复消息和额外模型消耗 | Issue 已关闭，修复归属需结合关联提交确认 |

### P2 / 重要但范围较窄或影响可控

- [Issue #191847](https://github.com/openclaw/openclaw/issues/191847)：大会话导致 512 MB SQLite worker OOM，后续每轮报 `admission is closed`。
- [Issue #123792](https://github.com/openclaw/openclaw/issues/123792)：CLI 后端下助手消息重复渲染和重复持久化。
- [Issue #141172](https://github.com/openclaw/openclaw/issues/141172)：首次 session commit 前死亡会遗留 `agent.run.started`，造成 FK 失败。
- [Issue #112638](https://github.com/openclaw/openclaw/issues/112638)：session maintenance 对 thread/channel 条目无限豁免，存储上限失效。
- [Issue #202001](https://github.com/openclaw/openclaw/issues/202001)：系统提示 section 波动导致 prompt cache 失效。
- [Issue #170496](https://github.com/openclaw/openclaw/issues/170496)：每次只读状态库都复制完整 SQLite 文件，Cron tick 持续放大 I/O。
- [Issue #163107](https://github.com/openclaw/openclaw/issues/163107)：HEIC 转换失败后每次残留约 250–400 MB RSS。
- [Issue #177210](https://github.com/openclaw/openclaw/issues/177210)：Webchat continuation 使用陈旧回显请求，产生非请求的重复回答。
- [Issue #201796](https://github.com/openclaw/openclaw/issues/201796)：Cron 在 stalled recovery 后无限重放已完成的副作用工具调用；Issue 已关闭，但应确认是否已完整阻止重复副作用。
- [Issue #199155](https://github.com/openclaw/openclaw/issues/199155)：外部进程写入 transcript 后 Gateway session actor 不可见，后续追加触发唯一键冲突；已关闭。

### 已关闭但值得跟踪验证

- [Issue #120385](https://github.com/openclaw/openclaw/issues/120385)：Code Mode 在 Cron/memory-flush 中缺少 MCP 工具；已关闭。
- [Issue #162914](https://github.com/openclaw/openclaw/issues/162914)：Podman sandbox provisioning 间歇失败；已关闭。
- [Issue #200289](https://github.com/openclaw/openclaw/issues/200289)：更新耗时数小时并在 Gateway 交接时发生 SQLite 锁；已关闭。
- [Issue #200022](https://github.com/openclaw/openclaw/issues/200022)：2026.11.4 更新因备份保留策略失败；已关闭。

---

## 6. 功能请求与路线图信号

### 6.1 飞书进度流式输出

[Issue #131457](https://github.com/openclaw/openclaw/issues/131457) — **11 条评论，CLOSED**

- 请求 Feishu 支持 `streaming.mode: "progress"`。
- 与 Slack、Discord、Telegram、Matrix、Mattermost、MS Teams 的现有能力对齐。
- **路线图判断：** 多渠道体验统一信号较强。由于 Issue 已关闭，可能已经实现或被替代，但应在下一版说明中明确 Feishu 支持状态。

### 6.2 Cron 支持结束条件

[Issue #130247](https://github.com/openclaw/openclaw/issues/130247) — **10 条评论，OPEN**

- 用户希望 Cron 支持：
  - `--until`；
  - `--max-runs`；
  - 自动过期；
  - 累计运行计数。
- **路线图判断：** 这是调度系统的基础治理能力，适合纳入下一版本；今日 PR 中未显示直接实现。

### 6.3 Memory 按条目分块

[Issue #179954](https://github.com/openclaw/openclaw/issues/179954) — **10 条评论，OPEN**

- 允许 `MEMORY.md`、`USER.md` 之外的 curated memory 文件启用 per-entry chunking。
- 适用于列表型记忆文件按条目建立索引。
- 已标记关联开放 PR，落地概率较高。
- 链接：[Issue #179954](https://github.com/openclaw/openclaw/issues/179954)。

### 6.4 Memory FTS 增加 CJK bigram 分词

[Issue #170997](https://github.com/openclaw/openclaw/issues/170997) — **8 条评论，OPEN**

- 当前 trigram 无法匹配两字中文查询，`unicode61` 又不会切分连续中文。
- 增加 bigram 可改善中文短词召回。
- 已标记关联开放 PR，**下一版本落地信号较强**。

### 6.5 `/codex review` 扩展审查范围

[Issue 对应功能已由 PR #202114 实现](https://github.com/openclaw/openclaw/pull/202114)

- 支持按分支、commit 和自定义指令审查。
- 已关闭 PR，**很可能已进入近期版本或即将合入**。

### 6.6 单一语音通话提升咨询工具权限

[PR #200198](https://github.com/openclaw/openclaw/pull/200198) — **OPEN**

- 为某一次实时通话临时提升 consult tool 权限，并使用 PIN 授权。
- 避免全局提高 `realtime.toolPolicy`，兼顾安全与临时 owner 操作需求。
- **路线图判断：** 与今日语音咨询 PR [#202209](https://github.com/openclaw/openclaw/pull/202209) 形成配套，值得纳入下一轮实时语音能力。

### 6.7 OpenClaw ID 成员治理

[PR #201610](https://github.com/openclaw/openclaw/pull/201610) — **OPEN**

- 统一角色、允许管理员停用成员。
- 表明 OpenClaw ID 正从基础连接功能向完整成员和权限治理发展。

---

## 7. 用户反馈摘要

### 7.1 最强烈的痛点：升级不可靠

用户反馈集中在：

- 升级耗时数小时；
- Doctor 静默卡住；
- SQLite 锁、WAL 发布失败；
- 插件迁移判定不一致；
- Gateway 在失败后保持停止；
- 新核心已激活但插件未完整迁移。

代表 Issue：

- [#197083](https://github.com/openclaw/openclaw/issues/197083)
- [#200289](https://github.com/openclaw/openclaw/issues/200289)
- [#200606](https://github.com/openclaw/openclaw/issues/200606)
- [#194655](https://github.com/openclaw/openclaw/issues/194655)
- [#178359](https://github.com/openclaw/openclaw/issues/178359)

**用户诉求：** 更新过程需要具备明确阶段、原子提交、失败回滚或明确恢复路径，而不是留下“已迁移但不可回滚”的中间状态。

### 7.2 最不可接受的问题：消息静默丢失

在 Telegram、Matrix 等渠道，用户关注的不只是单次失败，而是：

- 不知道消息是否送达；
- 没有重试；
- 没有告警；
- 无法区分“发送失败”和“已发送但结果未知”。

代表 Issue：[#125764](https://github.com/openclaw/openclaw/issues/125764)

**用户诉求：** 可靠投递、状态对账、明确错误反馈。

### 7.3 性能退化直接影响自托管可用性

用户报告：

- Windows 启动时间增加约 2.5 倍；
- 单 CPU 主机内存增至约 2.5 倍；
- NAS/Docker 启动时插件元数据扫描耗时 58 秒；
- HEIC 失败后每次残留数百 MB RSS；
- Cron tick 持续复制完整状态库。

代表 Issue：

- [#168955](https://github.com/openclaw/openclaw/issues/168955)
- [#169797](https://github.com/openclaw/openclaw/issues/169797)
- [#187350](https://github.com/openclaw/openclaw/issues/187350)
- [#163107](https://github.com/openclaw/openclaw/issues/163107)
- [#170496](https://github.com/openclaw/openclaw/issues/170496)

**用户诉求：** 低配 NAS、Windows、单 CPU 和容器环境也应具备可接受的启动、内存和 I/O 表现。

### 7.4 真实场景覆盖广泛

从 Issue/PR 可观察到的主要使用环境包括：

- macOS、Windows、Linux ARM64/x64；
- Docker Compose、Home Assistant OS SSH Add-on；
- NAS、本地单 CPU 主机；
- Telegram、Discord、Matrix、Feishu、iMessage、Slack；
- Voice Call、FaceTime、Google Meet、Teams、Zoom；
- 大型长期 Telegram 会话；
- Cron 自动化、memory-core、Session Share、MCP Relay；
- OpenClaw ID 和多 Agent Gateway。

这表明 OpenClaw 已进入真实生产使用阶段，用户对稳定性、迁移一致性和资源效率的敏感度明显高于早期功能验证阶段。

### 7.5 对功能扩展持积极态度

用户明确提出或正在使用：

- Agent 模板与 ClawHub 包；
- OpenClaw ID 节点；
- `/codex review`；
- Claude CLI Agent 语音咨询；
- Feishu progress streaming；
- Memory 中文检索；
- Cron 生命周期管理。

用户并未表现出对项目方向的否定，当前主要不信任点集中在 **新功能上线后的升级路径和回归保障**。

---

## 8. 待处理积压

### 8.1 长期未关闭且高影响 Issue

1. [Issue #197083](https://github.com/openclaw/openclaw/issues/197083) — **P0，29 条评论，OPEN**  
   升级后半完成状态，外部插件可能未正确收尾。应优先确认是否存在直接 fix PR。

2. [Issue #178359](https://github.com/openclaw/openclaw/issues/178359) — **P1，27 条评论，OPEN**  
   Doctor 修复静默挂起超过 15 分钟。需要维护者明确超时策略和现场复现。

3. [Issue #168955](https://github.com/openclaw/openclaw/issues/168955) — **P1，23 条评论，OPEN**  
   Windows 启动性能退化，阻塞阶段已定位到 `sidecars.control-ui-assets`。

4. [Issue #123792](https://github.com/openclaw/openclaw/issues/123792) — **P2，20 条评论，OPEN**  
   CLI 后端重复展示及持久化消息，虽非新问题，但已积累较高社区关注。

5. [Issue #125764](https://github.com/openclaw/openclaw/issues/125764) — **P1，15 条评论，OPEN**  
   Telegram 发送可靠性问题，涉及消息丢失，应设置明确负责人和修复里程碑。

6. [Issue #130247](https://github.com/openclaw/openclaw/issues/130247) — **P3，10 条评论，OPEN**  
   Cron 无结束条件，长期自治任务无法自动停止。

7. [Issue #112638](https://github.com/openclaw/openclaw/issues/112638) — **P2，12 条评论，OPEN**  
   Session maintenance 无法限制 thread/channel 条目，长期运行可能突破磁盘和条数上限。

8. [Issue #163107](https://github.com/openclaw/openclaw/issues/163107) — **P2，8 条评论，OPEN**  
   HEIC 转换失败造成明显内存残留。

9. [Issue #138528](https://github.com/openclaw/openclaw/issues/138528) — **P2，9 条评论，OPEN，STALE**  
   Cron 因审批门阻塞被中止时丢失 `blocked_tool_call` 原因，影响故障诊断。

10. [Issue #180978](https://github.com/openclaw/openclaw/issues/180978) — **P2，9 条评论，OPEN，STALE**  
    Active Memory 超时熔断器在用户交互节奏下无法及时开启。

11. [Issue #186973](https://github.com/openclaw/openclaw/issues/186973) — **P2，9 条评论，OPEN，STALE**  
    WebChat `/clear` 持续显示陈旧更新历史横幅。

### 8.2 等待审查的重要 PR

- [PR #200231](https://github.com/openclaw/openclaw/pull/200231)：子 Agent 完成后的权限恢复，涉及会话状态边界。
- [PR #200178](https://github.com/openclaw/openclaw/pull/200178)：允许已验证操作员同时使用 Tailscale Serve 和 Cloudflare Access，涉及认证兼容性。
- [PR #201610](https://github.com/openclaw/openclaw/pull/201610)：OpenClaw ID 成员与角色统一，属于安全敏感的大改动。
- [PR #200198](https://github.com/openclaw/openclaw/pull/200198)：单次语音通话临时提升工具权限。
- [PR #202141](https://github.com/openclaw/openclaw/pull/202141)：调整 Web 首次运行向导与 Mac 欢迎流程一致性。
- [PR #202288](https://github.com/openclaw/openclaw/pull/202288)：修复 Docker CLI 在 Gateway 运行时的配置与渠道命令。

### 8.3 维护建议

1. **建立更新链路专项看板**：统一跟踪 Doctor、候选验证、插件迁移、Gateway 激活、回滚和恢复。
2. **为 P0/P1 Issue 指定 owner 与修复版本**：尤其是 WAL、SQLite 锁、消息丢失和启动退化。
3. **将安全敏感 PR 与普通功能 PR 分流审查**：Session Share、OpenClaw ID、语音临时提权不应长期等待普通队列。
4. **为每个 Release 增加升级/降级矩阵**：覆盖 Windows、macOS、Linux、Docker、NAS、插件迁移和 Gateway 恢复。
5. **公开关闭修复与 Issue 的对应关系**：避免出现“Issue 已关闭但用户无法确认升级后是否真正解决”的情况。

---

## 今日结论

OpenClaw 今日呈现出明显的“双速状态”：**功能开发、PR 产出和社区反馈都非常活跃**，Agent 模板、OpenClaw ID、语音咨询、Session Share、安全权限、移动端体验和容器运维均有实质推进；但 **版本升级和状态数据库链路尚未达到同等成熟度**。

项目健康度可评价为：**活跃度高、创新性强、发布吞吐高，但可靠性与维护响应仍是主要短板**。短期最值得优先解决的不是继续增加功能，而是确保每一次升级都能做到 **可验证、可恢复、不丢消息、不遗留半迁移状态**。

---

## 横向生态对比

# 个人 AI 助手 / 自主智能体开源生态横向分析

**观察日期：2026-11-20**  
**说明：** “Issues 数”和“PR 数”按过去 24 小时更新量统计；“健康度”综合开发吞吐、问题暴露、积压、发布与修复闭环判断。Hermes Agent 摘要生成失败，因此相关判断暂不纳入定量结论。

---

## 1. 生态全景

个人 AI 助手与自主智能体生态正处于**“功能高速扩张、生产可靠性补课”并存**的阶段：OpenClaw、LobsterAI、QwenPaw 在单日均处理大量 PR，但升级迁移、消息可靠性、Windows 兼容、权限治理和资源性能逐渐成为主要矛盾。与此同时，各项目正从单一聊天壳扩展为覆盖多渠道、工具调用、长期记忆、语音、子智能体和云端/本地模型的全栈 Agent 平台。

技术路线开始明显分化：OpenClaw 强调开放生态与插件分发，NanoBot 偏向轻量、多 Provider 和跨渠道连续会话，QwenPaw 聚焦 Console、渠道治理及本地模型插件化，LobsterAI 则突出桌面集成和 OpenClaw 运行时优化，OpenHuman 强调本地优先和隐私闭环。整体来看，社区需求已经从“Agent 能不能执行任务”转向“能否可靠、可恢复、可审计并低成本地长期执行”。

---

## 2. 各项目活跃度对比

| 项目 | 今日 Issues | 今日 PR | 合并/关闭 PR | Release | 健康度 | 活跃阶段与判断 |
|---|---:|---:|---:|---|---|---|
| **OpenClaw** | 441 | 500 | 202 | 2 个：v2026.11.10-beta.1、v2026.11.6 | **中高** | 吞吐和生态规模显著领先，但升级、SQLite/WAL、消息丢失等 P0/P1 风险积压，处于高吞吐、高风险阶段 |
| **NanoBot** | 1 | 21 | 14 | 无 | **良好** | WebUI、队列、会话和 Provider 集中收敛；7 条开放 PR 中 4 条有冲突，集成节奏偏慢 |
| **PicoClaw** | 0 | 5 | 5 | 无 | **中等偏稳** | 无待合并 PR，集中整合历史修复；工具调用解析增强是主要质量收益，但缺少新发布和用户侧数据 |
| **IronClaw** | 0 | 0 | 0 | 无 | **数据不足／静默** | 过去 24 小时无活动，无法判断是维护平静、项目停滞还是数据覆盖不足 |
| **LobsterAI** | 1 | 50 | 48 | 无 | **良好偏高** | 高强度性能与 Windows 稳定性治理，48 条 PR 已处理；API Key 安全修复仍待合并 |
| **QwenPaw** | 21 | 47 | 14 | 无 | **中高** | 架构改造力度大，但当日新增缺陷较多，尤其 CLI、Windows 本地模型和 Console 回归明显 |
| **Hermes Agent** | — | — | — | — | **无法评估** | 摘要生成失败，缺少可信活动数据 |
| **OpenHuman** | 1 | 4 | 1 | 无 | **中高** | 本地隐私与本地 AI 配置可靠性方向明确；3 条关键 PR 待合并且部分已开放约一个月 |

### 活跃度分层

- **第一梯队：高吞吐平台型**  
  OpenClaw、LobsterAI、QwenPaw。优势是社区贡献和工程覆盖面大，弱点是 PR 审查、回归验证和发布收敛跟不上产出速度。

- **第二梯队：稳定收敛型**  
  NanoBot。其 WebUI 状态一致性和安全问题修复闭环较好，但冲突 PR 与长期开放项影响正式交付。

- **第三梯队：低公开活动或维护收尾型**  
  PicoClaw、IronClaw、OpenHuman。前者主要是历史修复整合；IronClaw 缺乏当日活动信号；OpenHuman 活跃量不大，但围绕本地 AI 和隐私的路线较清晰。

---

## 3. OpenClaw 在生态中的定位

### 3.1 生态规模优势明显

OpenClaw 今日更新 **441 条 Issues、500 条 PRs**，相较其他项目的日常吞吐处于数量级领先。其 v2026.11.6 单版本包含 **406 个提交、386 个 PR、157 位贡献者**，体现出：

- 最大的社区协作和贡献者网络；
- 最广的 Issue/PR 流转规模；
- 最多的发布、集成与兼容性场景；
- 最强的外部项目依赖和生态外溢效应。

LobsterAI 直接围绕其 Gateway、工具目录、Skill 分发和 Windows 启动链进行优化，说明 OpenClaw 已成为该生态的重要底层运行时，而不再只是一个独立助手项目。

### 3.2 优势

1. **功能覆盖面最广**  
   覆盖多渠道、语音通话、FaceTime、子 Agent、Session Share、OpenClaw ID、Cron、Memory、ClawHub、Agent Templates 等完整个人 Agent 场景。

2. **开放生态能力突出**  
   ClawHub 包、`CLAW.md` 清单、技能目录信任、节点连接和插件化机制，使其更接近“个人 Agent 操作系统”。

3. **真实生产环境反馈最密集**  
   覆盖 macOS、Windows、Linux ARM64、Docker、NAS、Home Assistant、Telegram、Discord、Matrix、Feishu 等，生产场景广度领先。

4. **安全与权限治理开始进入核心架构**  
   Session Share 显式 opt-in、子 Agent 权限恢复、OpenClaw ID 角色统一、语音临时提权，说明项目已从“能力堆叠”进入治理阶段。

### 3.3 技术路线差异

- **OpenClaw**：开放式运行时与生态平台，优先解决渠道、身份、技能、节点和插件的组合能力。
- **NanoBot**：更强调轻量 Provider 抽象、队列状态和跨渠道连续会话。
- **QwenPaw**：围绕 Console、本地模型 Provider 插件化、记忆模型解耦和治理通道建设。
- **LobsterAI**：以桌面产品为外壳，将 OpenClaw 作为内嵌 Agent 运行时，重点优化启动、浏览器和 Windows 体验。
- **OpenHuman**：以本地模型、隐私和本地语音为核心，目标更接近完全离线助手。
- **PicoClaw**：倾向轻量嵌入式部署，当前重点是 Provider 输出兼容和历史缺陷收敛。

### 3.4 社区规模与主要短板

OpenClaw 的社区规模最大，但也是**问题复杂度最高的项目**：

- 今日 500 条 PR 中仍有 298 条待合并；
- 441 条 Issue 中有 308 条新开或仍活跃；
- Doctor、Updater、SQLite/WAL、Gateway 恢复和消息可靠性均出现高影响问题；
- 用户对项目方向仍持积极态度，但信任重心已转向升级可恢复性。

因此，OpenClaw 的核心挑战不是需求不足，而是如何把高速创新转化为可验证、可回滚的稳定版本。

---

## 4. 共同关注的技术方向

| 共同方向 | 涉及项目 | 具体诉求与信号 |
|---|---|---|
| **升级、更新与配置迁移的可靠性** | OpenClaw、LobsterAI、NanoBot、QwenPaw | OpenClaw 聚焦 Doctor、SQLite WAL、插件迁移和 Gateway 恢复；LobsterAI 调整迁移检查点和打包；NanoBot 修复 WebUI Gateway 重构与状态同步；QwenPaw 修复 Windows 原子替换和技能回滚。共同诉求是“失败可恢复、状态不丢失、配置不破坏” |
| **Windows 与低配环境兼容** | OpenClaw、LobsterAI、QwenPaw、NanoBot | 涉及 Windows 启动退化、Gateway 生命周期、孤儿 `llama-server.exe`、AppContainer 权限、PowerShell 依赖、Windows DPI 和多显示器适配。Windows 正成为独立平台，而非简单的 Linux/macOS 兼容目标 |
| **消息与队列可靠性** | OpenClaw、NanoBot、QwenPaw | OpenClaw 出现 Telegram 静默丢消息；NanoBot 集中修复队列 `NameError`、排队状态和重连状态；QwenPaw 处理响应路由容量及审批回传。需求从“能发送”升级为“明确送达状态、重试、对账和告警” |
| **跨渠道连续会话** | OpenClaw、NanoBot、QwenPaw、LobsterAI | NanoBot 支持从 WebUI 继续 Telegram 会话；OpenClaw 强化多渠道与 Session Share；QwenPaw 修复渠道隔离日志和路由生命周期；LobsterAI 恢复子代理会话。上下文需要跨 UI、渠道及迁移引擎连续保留 |
| **工具调用与上下文成本优化** | OpenClaw、LobsterAI、PicoClaw、QwenPaw、OpenHuman | LobsterAI 将大体量工具目录延迟加载；PicoClaw 增强复杂工具调用提取；QwenPaw 处理 Prompt/KV Cache 稳定性；OpenHuman 按真实文档文本估算上下文；OpenClaw 报告 Prompt Cache 失效。共同方向是减少 Schema、工具目录和历史重写造成的 Token 与延迟成本 |
| **本地模型与 Provider 插件化** | QwenPaw、OpenHuman、NanoBot、LobsterAI、OpenClaw | QwenPaw 将 llama.cpp 下载和生命周期插件化；OpenHuman强化 LM Studio、Ollama、OMLX；NanoBot 增加搜索、MCP 和 OpenRouter Images；LobsterAI 优化 Provider 插件按需加载；OpenClaw 推进 OpenClaw ID/ClawHub。Provider 抽象正成为生态核心扩展点 |
| **多智能体、子 Agent 与权限恢复** | OpenClaw、QwenPaw、LobsterAI | OpenClaw 修复子 Agent 权限恢复；QwenPaw 修复审批回传和任务追踪；LobsterAI 恢复子代理面板及结果关联。重点已从“能否委派”转向“能否恢复、追踪和审计” |
| **隐私与凭据安全** | OpenHuman、LobsterAI、QwenPaw | OpenHuman 限制隐私模式下 STT 端点；LobsterAI 修复 API Key 明文进入命令和上下文；QwenPaw 修复安全门禁遗漏 shell 包装外发。凭据不进入模型上下文、远端数据不越界成为基本产品要求 |
| **记忆系统走向可观测和精细化** | OpenClaw、QwenPaw | OpenClaw 推进条目分块、CJK bigram；QwenPaw 推进独立写入模型、Reranker 中心和标签索引治理。记忆从简单检索升级为分词、索引、质量评估和成本隔离 |
| **语音与会议成为 Agent 新入口** | OpenClaw、QwenPaw、OpenHuman | OpenClaw 打通 CLI Agent 与 Voice Call/Meet/Teams/Zoom；QwenPaw 改善小艺长任务状态；OpenHuman 推进本地 STT。语音链路的核心不是“能说话”，而是实时状态、隐私和跨渠道权限 |
| **UI 窄屏与移动端体验** | QwenPaw、NanoBot、LobsterAI、OpenClaw | 涉及消息裁切、安全区、窄屏 Tooltip、移动端侧边栏、桌面多屏/DPI。用户开始将 Agent 当作全天候多设备应用，而非桌面管理后台 |

---

## 5. 差异化定位分析

| 项目 | 功能侧重 | 目标用户 | 技术架构关键差异 |
|---|---|---|---|
| **OpenClaw** | 全渠道个人 Agent 操作系统：身份、插件、技能、语音、Cron、记忆、子 Agent、Session Share | 高级个人用户、机器人开发者、自托管家庭/个人自动化用户 | 开放包与插件生态、Gateway 为中心、多渠道统一路由；复杂度最高，治理和升级压力也最大 |
| **NanoBot** | 轻量多渠道助手、搜索/MCP、跨渠道连续会话、队列和 WebUI | 追求简单部署、丰富 Provider 和多入口连续性的个人用户 | 强调 Provider 抽象、WebUI Gateway 状态投影及轻量集成；当前主线向稳定收敛 |
| **PicoClaw** | 轻量/嵌入式 Agent，工具调用兼容与历史修复交付 | 边缘设备、小型自托管或资源受限环境 | 重点在模型输出解析与低维护成本；生态规模较小，功能扩张相对克制 |
| **IronClaw** | 今日无足够动态，定位暂不能可靠判断 | 暂不能判断 | 缺少可验证活动与架构信号，不宜强行比较 |
| **LobsterAI** | 桌面 AI 工作台、OpenClaw 内嵌、浏览器搜索、多 Agent、桌面伴侣 | Windows/macOS 桌面用户和中文办公场景用户 | Electron 应用内浏览器与桌面外壳复用登录态、代理和 OpenClaw Gateway；强调冷启动和端侧体验 |
| **QwenPaw** | Console、渠道工作流、本地模型、记忆/Reranker、治理与审批 | 需要可视化控制台、多渠道、本地模型和细粒度治理的开发者/团队 | Provider Plugin、治理通道、独立记忆模型及任务追踪体系；架构较完整，但重构面广、回归较多 |
| **Hermes Agent** | 数据缺失 | 数据缺失 | 摘要失败，无法进行可靠差异化判断 |
| **OpenHuman** | 本地优先、隐私模式、本地 STT、本地模型认证与配置保护 | 隐私敏感、离线优先、桌面端个人用户 | 本地端点限制在传输层执行；Rust 核心强调上下文预算和本地数据闭环，生态规模较小但定位纯粹 |

### 架构层面的核心分化

- **平台化 vs. 产品化**  
  OpenClaw 是运行时平台；LobsterAI 是桌面产品化外壳；QwenPaw 是带控制台和治理面的 Agent 工作台。

- **开放生态 vs. 轻量可控**  
  OpenClaw 通过 ClawHub、插件和身份体系扩展；NanoBot/PicoClaw 更倾向控制依赖和交付复杂度。

- **云端生态 vs. 本地隐私**  
  QwenPaw、OpenClaw 强调多 Provider 和云服务；OpenHuman 明确要求完整本地语音与推理闭环。

- **一次性执行 vs. 长期自治**  
  各项目都在补 Cron、Goal、记忆、子 Agent、Session Share，但长期运行所需的停止条件、恢复语义、幂等性和预算控制仍是短板。

---

## 6. 社区热度与成熟度

### 6.1 社区热度分层

**高热度、高噪声**

- **OpenClaw**：Issue 和 PR 流量遥遥领先，但高热同时伴随大量未收敛问题。
- **QwenPaw**：47 PR、21 Issue，渠道、Console、本地模型、记忆均有讨论。
- **LobsterAI**：50 PR 中多数为内部性能治理，用户 Issue 很少，更像高强度内部工程日。

**中等热度、修复闭环较好**

- **NanoBot**：今日 21 PR 中 14 条已处理，安全 Issue 与修复 PR 直接对应；但缺少用户侧评论数据。
- **OpenHuman**：Issue 数量低但本地 STT 议题获得 6 条评论，产品方向明确，PR 审查偏慢。

**低公开活动**

- **PicoClaw**：主要是历史修复合并，没有用户侧讨论。
- **IronClaw**：无活动，无法区分静默维护与停滞。
- **Hermes Agent**：数据不可用。

### 6.2 成熟度分层

#### 快速迭代期

- **OpenClaw**：功能扩张极快，但版本事务、更新回滚、消息可靠性和 SQLite 稳定性未跟上。
- **QwenPaw**：本地模型插件化、Reranker、记忆模型解耦等大型架构并行推进，回归暴露明显。
- **LobsterAI**：高强度整合 OpenClaw 与桌面能力，性能和平台兼容方向明确，但安全修复和正式发布仍待收口。

#### 质量巩固期

- **NanoBot**：WebUI 队列、重连、图片历史、Goal 语义和输入校验集中修复，最接近稳定收敛阶段。
- **PicoClaw**：集中合并历史修复、控制 CI 噪声，偏向维护收尾。
- **OpenHuman**：围绕本地 AI 的配置事务、认证和隐私边界进行小步治理，但长期 PR 积压仍需处理。

### 6.3 成熟度不能只看 PR 数量

PR 数量高并不等于成熟。真正的成熟度信号应包括：

1. Release 是否及时包含关键修复；
2. P0/P1 是否有关闭证据和回归测试；
3. 升级失败是否能恢复；
4. 消息是否具备确认、重试和对账；
5. 安全默认值是否默认安全；
6. 长期任务是否可停止、可恢复且不重复执行副作用。

在这些维度上，NanoBot 今日收敛质量相对突出；OpenClaw、QwenPaw 和 LobsterAI 仍处于高投入但待验证阶段。

---

## 7. 值得关注的趋势信号

### 7.1 “工具调用能力”正在让位于“工具调用可靠性”

早期竞争重点是支持多少工具、Provider 和渠道；当前热点已转向：

- 工具参数是否可正确提取；
- 模型输出格式变化时是否仍能调用；
- 工具目录是否拖慢启动；
- Schema 是否破坏 Prompt Cache；
- 工具执行结果是否可追踪、重试和恢复。

**开发启示：** 工具调用解析器、Schema 规范化、调用幂等性和执行状态机，值得作为 Agent 核心基础设施单独建设，而不是散落在各功能模块中。

### 7.2 状态数据库正成为个人 Agent 的关键单点故障

OpenClaw 的 SQLite 锁、WAL 发布、迁移和 Gateway 交接故障表明，Agent 已不再是“无状态聊天应用”。Session、记忆、工具审批、子 Agent、Cron 和迁移全部依赖同一状态层。

**开发启示：** 应优先采用事务边界清晰的 Schema 迁移、在线备份、恢复测试、读写分离和可观测锁等待；数据库恢复能力应作为发布门禁，而不是普通运维任务。

### 7.3 消息系统需要从“调用 API”升级为“可靠投递系统”

静默丢消息、渠道响应路由耗尽、审批请求无法回到发起渠道、任务重放副作用等问题反复出现，说明个人 Agent 的可靠性瓶颈正从模型侧转向渠道侧。

**开发启示：** 应引入消息状态机、幂等键、指数退避、未知状态对账、端到端送达回执和用户可见告警。对于执行审批和通知类消息，宁可明确失败，也不要静默丢失。

### 7.4 本地优先正在从口号变成完整链路要求

OpenHuman 的本地 STT、OpenClaw 的本地端点工具、QwenPaw 的本地模型插件化，以及 LobsterAI 对端侧资源优化，说明用户不再满足于“模型本地、工具云端”的混合模式。

**开发启示：** 隐私边界必须覆盖模型、Embedding、Reranker、语音、日志、附件和子 Agent；本地服务检测应发生在传输层，而非 UI 提示层。

### 7.5 工具目录与上下文预算将成为成本竞争核心

LobsterAI 的 Tool Search、OpenClaw 的 Prompt Cache 问题、QwenPaw 的前缀缓存、OpenHuman 的文档计费优化共同表明：Agent 的隐性成本越来越取决于“每次请求携带了什么”，而非只取决于模型单价。

**开发启示：** 应系统控制工具 Schema、历史重写、系统提示排序、附件计费和摘要频率，并将首包 Token、缓存命中率、压缩次数纳入性能基准。

### 7.6 跨渠道连续性正在成为 Agent 的基础体验

用户在 Telegram、Discord、Matrix、Feishu、WebUI 和语音之间切换时，核心诉求不是简单转发，而是保持：

- 会话上下文；
- 附件；
- 排队状态；
- 审批位置；
- 子 Agent 进度；
- 最终结果的正确归因。

**开发启示：** 多渠道架构不应只维护“渠道适配器”，还需要统一的 Session、Turn、Delivery、Approval 和 Artifact 模型。

### 7.7 Windows 和桌面端成为 Agent 落地的重要战场

多个项目同时暴露 Windows 启动慢、进程泄漏、安全软件阻塞、DPI、多显示器和 Gateway 恢复问题。桌面 Agent 的竞争已经不只是模型效果，也包括安装、升级、恢复和资源占用。

**开发启示：** Windows 应拥有独立 CI、发布矩阵和故障恢复测试，尤其覆盖 Defender/第三方安全软件、无 PowerShell 快速路径、低内存、DPI 变化和异常退出。

### 7.8 多智能体治理从“权限控制”走向“生命周期控制”

子 Agent 权限恢复、审批回传、结果关联、Cron 重放和 Goal 终止失败表明，多智能体系统的主要问题不再是能否创建子 Agent，而是：

- 权限能否继承和恢复；
- 审批是否送达正确主体；
- 失败是否正确结束；
- 重试是否重复副作用；
- 用户能否看到真实进度。

**开发启示：** 多智能体应采用显式生命周期、幂等副作用令牌、可恢复状态和结果溯源；权限恢复不能依赖隐式上下文，而应来自可审计的 origin facts。

### 7.9 长期自治任务需要“停止条件”和预算模型

OpenClaw 的 Cron `--until`、`--max-runs`、QwenPaw 的 Goal 终止语义和 Cron 用量统计，反映出长期自治任务正在成为核心场景，但治理能力仍不完整。

**开发启示：** 下一阶段需要标准化最大运行次数、最长存活时间、Token/费用预算、空闲停止、失败重试上限、人工接管和副作用去重。

---

## 决策建议

### 若目标是建设通用个人 Agent 平台

优先借鉴 **OpenClaw 的生态与渠道抽象**，但应采用更严格的数据库迁移、权限、投递和发布治理，避免把复杂度直接继承到核心链路。

### 若目标是打造轻量、多 Provider 的个人助手

优先借鉴 **NanoBot 的队列状态、连续会话和 Provider 抽象**，同时吸收 OpenClaw 的权限默认策略与 LobsterAI 的工具目录延迟加载。

### 若目标是桌面级 AI 工作台

重点参考 **LobsterAI 的冷启动、应用内浏览器和 Windows 原生化**，并把凭据安全和配置事务设为上线前硬门禁。

### 若目标是本地优先的隐私助手

重点参考 **OpenHuman 的传输层隐私限制**，并补齐 OpenClaw/LobsterAI 在端点判定、Docker/代理场景和凭据生命周期方面的经验。

### 若目标是为个人 Agent 建立生产级可靠性基线

建议将以下能力设为最低门槛：

1. 状态库可恢复迁移；
2. 消息至少一次投递并支持状态对账；
3. 更新失败自动恢复 Gateway；
4. 工具目录与上下文预算可观测；
5. 外部审批必须回传发起渠道；
6. 长期任务支持停止条件与幂等；
7. Windows、macOS、Linux、Docker 均有升级/降级矩阵；
8. 本地与远程端点在传输层强制校验。

**总体判断：** 该生态仍有很强创新动能，但竞争焦点正从“功能数量”转向“可靠性、单位任务成本和全链路可控性”。未来胜出的项目，不一定是最会扩展功能的，而可能是最能让用户放心长期托付个人数据和日常任务的。

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目动态日报

**统计日期：2026-11-20**  
**数据范围：过去 24 小时 GitHub Issues、PR 与 Releases 更新**

---

## 1. 今日速览

过去 24 小时共记录 **1 条 Issue 更新、21 条 PR 更新**，其中 **14 条 PR 已合并或关闭，7 条仍待处理**，整体开发吞吐较高。主要工作集中在 **WebUI 稳定性、队列与会话连续性、渠道接入、Provider 扩展以及网络安全校验**，显示项目正从功能扩张逐步转向交互完善和可靠性建设。  
本期共有 **0 个新版本发布**，说明代码变更仍在集中集成和验证阶段，尚未形成可供用户升级的正式版本。当前共有 **7 条开放 PR**，其中 4 条存在冲突，且多个 PR 自 8—10 月创建后仍在持续推进，合并效率和积压治理值得关注。  
Issue 侧唯一更新为已关闭的网络安全缺陷 [#6701](https://github.com/HKUDS/nanobot/issues/6701)，已有对应修复 PR [#6716](https://github.com/HKUDS/nanobot/pull/6716)，闭环状态良好。项目健康度评估为 **良好但存在集成积压**：活跃度高、修复闭环充分，但冲突 PR 和长期开放事项可能影响下一版本节奏。

---

## 2. 版本发布

过去 24 小时 **无新版本发布**。

由于当前没有新的 Release，本日报不涉及正式版更新内容、破坏性变更或升级迁移说明。近期已关闭的 PR 已覆盖 WebUI、Provider、Session、Goal 和安全校验等模块，后续建议关注这些改动何时进入正式版本及其兼容性说明。

---

## 3. 项目进展

### WebUI 交互与状态同步

- [#6730](https://github.com/HKUDS/nanobot/pull/6730) 已关闭：统一自定义 reasoning effort 选择器的 WebUI 主题样式，避免在部分模型预设下回退到不符合主题的原生浏览器下拉菜单。
- [#6728](https://github.com/HKUDS/nanobot/pull/6728) 已关闭：在窄屏下隐藏持续运行的计时器，优先保留最新工具活动信息，改善移动端空间利用率。
- [#6722](https://github.com/HKUDS/nanobot/pull/6722) 已关闭：修正 Tooltip、文件上下文菜单及模型预设浮层的动画锚点和弹出方向，减少浮层与触发位置错位。
- [#6726](https://github.com/HKUDS/nanobot/pull/6726) 已关闭：修复队列消息仍调用已移除的 `websocket_turn_id`，避免活跃回合中发送普通后续消息触发 `NameError`。
- [#6715](https://github.com/HKUDS/nanobot/pull/6715) 已关闭：重连时依据 Gateway 的实时运行状态恢复任务状态，避免浏览器错过终止帧后持续显示“运行中”。
- [#6719](https://github.com/HKUDS/nanobot/pull/6719) 已关闭：增加 Agent 忙碌期间排队消息的呼吸虚线边框，明确区分“已送达”与“已被模型请求处理”的状态。
- [#6721](https://github.com/HKUDS/nanobot/pull/6721) 已关闭：在模型请求启动事件中记录对应的 `response_input_ids`，为队列状态准确关联提供基础数据。
- [#6724](https://github.com/HKUDS/nanobot/pull/6724) 已关闭：当前预设不支持图片输入时保留编辑器和图片内容，并提示用户，不再直接丢弃消息或启动无效回合。
- [#6729](https://github.com/HKUDS/nanobot/pull/6729) 已关闭：清理不可达代码和缺乏实际回归保护能力的冗余测试，降低维护复杂度。

### WebUI 架构与跨渠道连续会话

- [#6727](https://github.com/HKUDS/nanobot/pull/6727) 已关闭：重构 WebUI Gateway，将结构化 WebSocket 写入与磁盘操作、历史投影及 UI 状态职责分离，减少高频处理路径中的耦合。
- [#6714](https://github.com/HKUDS/nanobot/pull/6714) 仍开放：支持从 WebUI 侧边栏继续 Telegram 等外部渠道已开始的会话，目标是在不丢失上下文的情况下实现跨渠道接续；当前标记为冲突。
- [#6731](https://github.com/HKUDS/nanobot/pull/6731) 仍开放：删除带有关联自动化的 Topic 前，通过无超时、持续存在的确认 Toast 展示风险，不再使用阻塞式确认弹窗；复用现有 API，无需后端接口变更。

### Agent、Session 与 Goal 可靠性

- [#6720](https://github.com/HKUDS/nanobot/pull/6720) 已关闭：后续回合从已保存附件中重放用户图片，避免模型请求只收到本地路径标记而无法理解图片。
- [#6681](https://github.com/HKUDS/nanobot/pull/6681) 仍开放：原生连续会话中补齐被动历史的重放，包括供应商报价和 Heartbeat 等渠道通知；当前标记为冲突。
- [#6688](https://github.com/HKUDS/nanobot/pull/6688) 仍开放：终止执行失败后阻止 Goal 继续保持活跃，并修正拒绝或截断响应被误判为成功回合的问题；当前标记为冲突。

### 安全与输入校验

- [#6716](https://github.com/HKUDS/nanobot/pull/6716) 已关闭：在 DNS 解析前拒绝包含控制字符或空白字符的恶意或非法主机名，避免无效目标进入底层网络解析。
- 对应安全问题 [#6701](https://github.com/HKUDS/nanobot/issues/6701) 已关闭。该问题指出 `resolve_url_target()` 允许包含 NUL 字节的主机名，而 macOS/POSIX 下的 `socket.getaddrinfo()` 可能将名称在 NUL 字节处截断，造成解析目标与校验目标不一致。

### Provider 与生态扩展

- [#5234](https://github.com/HKUDS/nanobot/pull/5234) 仍开放：集成 MST Meta-Search 作为新搜索 Provider，通过并行聚合 DuckDuckGo、Google、Brave、Bing 等搜索结果并使用 RRF 融合，提升搜索覆盖率。
- [#6014](https://github.com/HKUDS/nanobot/pull/6014) 仍开放：新增 Keenable MCP 预设，连接托管 MCP 服务，并仅开放网页搜索与页面内容获取工具；当前标记为冲突。
- [#5718](https://github.com/HKUDS/nanobot/pull/5718) 仍开放：支持 OpenRouter 原生图像生成 API，以兼容现有图像生成链路并扩展可用模型和 Provider；当前标记为冲突。

### 文档质量

- [#6725](https://github.com/HKUDS/nanobot/pull/6725) 已关闭：整理 README、SECURITY 文档及 18 篇用户指南，补充核心流程图、修正配置示例，并移除面向用户的内部技术细节。

### 整体推进判断

今日 14 条已关闭 PR 基本完成了 **WebUI 状态一致性、队列反馈、图片连续会话、输入安全与用户文档** 的一轮集中收敛，对下一版本的可用性和稳定性有直接推动。不过，跨渠道连续会话、Provider 扩展及 Goal/Session 修复仍有 4 条冲突 PR 未完成集成，说明核心功能开发活跃，但合入阶段存在一定阻塞。

---

## 4. 社区热点

> 今日所有展示 PR 的评论数均为 `undefined`，未发现明确的高评论或高点赞条目；以下热点主要依据技术影响范围、优先级及当前开放状态排序。

1. **跨渠道会话连续性** — [#6714](https://github.com/HKUDS/nanobot/pull/6714)  
   诉求是让用户从 Telegram 等外部渠道发起的对话可以回到 WebUI 继续处理，同时将回复正确发送回原渠道。这反映了用户对“跨入口保留上下文”的明确需求，也是多渠道产品体验的重要缺口。该 PR 当前存在冲突，优先级较高。

2. **MST 元搜索 Provider** — [#5234](https://github.com/HKUDS/nanobot/pull/5234)  
   通过多搜索引擎并行检索与 RRF 融合提升搜索覆盖面，背后诉求是减少单一搜索源带来的召回率和稳定性限制。该 PR 自 2026-08-03 创建并持续更新至 2026-11-19，属于长期推进的重要集成项。

3. **Keenable MCP 预设** — [#6014](https://github.com/HKUDS/nanobot/pull/6014)  
   用户希望以低配置成本接入网页搜索和页面抓取工具。该 PR 支持托管 MCP、无必需 API Key，并限制工具暴露范围，体现社区对易用、安全边界清晰的搜索集成方案的需求；当前仍有冲突。

4. **OpenRouter 原生图像生成** — [#5718](https://github.com/HKUDS/nanobot/pull/5718)  
   诉求是适配 OpenRouter 新增的原生 Images API，避免现有图像生成能力因服务接口变化而失效，并允许复用统一的 `generate_image` 能力访问更多模型；当前仍待解决冲突。

5. **删除关联自动化 Topic 的二次确认** — [#6731](https://github.com/HKUDS/nanobot/pull/6731)  
   关注点在误操作防护和交互连续性：确认提示不应永久阻塞，但也不能像自动消失的 Toast 一样让用户来不及判断。该 PR 是今日最新开放项，尚无评论和反馈积累。

---

## 5. Bug 与稳定性

### 高优先级

- **Goal 在终止执行失败后仍保持活跃** — [#6688](https://github.com/HKUDS/nanobot/pull/6688)  
  可能导致持续目标在输出上限恢复、空响应或其他终止错误后错误运行，并把拒绝或截断响应误判为成功。  
  **修复状态：有专门 PR，待合并且存在冲突。**

### 中优先级

- **URL 主机名允许 NUL 字节** — [#6701](https://github.com/HKUDS/nanobot/issues/6701)  
  在 macOS/POSIX 上，`getaddrinfo()` 可能截断 NUL 后的主机名，造成实际解析目标偏离预期，属于网络目标校验与 SSRF 防护相关风险。  
  **修复状态：已有修复 PR [#6716](https://github.com/HKUDS/nanobot/pull/6716)，Issue 已关闭。**

- **非法主机名进入 DNS 解析** — [#6716](https://github.com/HKUDS/nanobot/pull/6716)  
  控制字符和空白字符未被及时拒绝，可能产生错误连接检查或解析歧义。  
  **修复状态：PR 已关闭，修复已合入或完成处理。**

- **队列消息调用已移除变量导致 `NameError`** — [#6726](https://github.com/HKUDS/nanobot/pull/6726)  
  Agent 忙碌期间发送普通后续消息时，可能在 Gateway 接收前直接报错。  
  **修复状态：PR 已关闭。**

- **WebUI 重连后错误显示任务仍在运行** — [#6715](https://github.com/HKUDS/nanobot/pull/6715)  
  浏览器错过终止帧时，界面可能长期停留在运行状态。  
  **修复状态：PR 已关闭。**

- **后续回合丢失用户图片上下文** — [#6720](https://github.com/HKUDS/nanobot/pull/6720)  
  图片可能仅以本地路径形式进入历史，进程重启后模型无法继续理解附件。  
  **修复状态：PR 已关闭。**

- **阻塞图片输入时仍可能启动回合** — [#6724](https://github.com/HKUDS/nanobot/pull/6724)  
  影响普通发送、Enter 发送、队列消息和自动化等入口。  
  **修复状态：PR 已关闭。**

### 低优先级 / 体验型问题

- 窄屏计时器挤压工具活动展示 — [#6728](https://github.com/HKUDS/nanobot/pull/6728)：**已关闭**。
- reasoning effort 选择器样式不统一 — [#6730](https://github.com/HKUDS/nanobot/pull/6730)：**已关闭**。
- Tooltip、菜单和预设浮层动画锚点异常 — [#6722](https://github.com/HKUDS/nanobot/pull/6722)：**已关闭**。

---

## 6. 功能请求与路线图信号

1. **WebUI 与外部渠道会话互通**  
   [#6714](https://github.com/HKUDS/nanobot/pull/6714) 指向统一会话入口、跨渠道上下文延续及正确回传能力。需求已形成明确 PR，且优先级较高，较可能进入后续版本；但需先解决冲突。

2. **更丰富的聚合搜索**  
   [#5234](https://github.com/HKUDS/nanobot/pull/5234) 表明 Provider 层正从单点搜索向聚合式元搜索发展。若接口抽象、测试和合并成本可控，该能力可能成为下一阶段搜索 Provider 的重要增量。

3. **MCP 服务预设目录**  
   [#6014](https://github.com/HKUDS/nanobot/pull/6014) 表明 Apps/Provider 预设正成为生态扩展路径。其低门槛、无强制密钥和工具白名单设计具有较强产品化潜力，但当前冲突可能推迟合入。

4. **统一多 Provider 图像生成能力**  
   [#5718](https://github.com/HKUDS/nanobot/pull/5718) 显示图像生成正在向标准化 Provider 接口演进。合入后可减少对特定服务接口实现的耦合，并提升模型选择空间。

5. **队列状态可视化**  
   [#6719](https://github.com/HKUDS/nanobot/pull/6719)、[#6721](https://github.com/HKUDS/nanobot/pull/6721) 与 [#6726](https://github.com/HKUDS/nanobot/pull/6726) 共同完善“消息排队—模型取件—执行完成”的状态链路，显示 WebUI 可靠性是近期明确投入方向。

6. **Goal 生命周期与失败语义治理**  
   [#6688](https://github.com/HKUDS/nanobot/pull/6688) 表明长期运行能力正从“能持续执行”转向“准确终止、可判定成功或失败”，适合作为下一版本稳定性重点。

---

## 7. 用户反馈摘要

今日 Issue 数据中没有用户评论，唯一 Issue [#6701](https://github.com/HKUDS/nanobot/issues/6701) 为无评论、零点赞的安全报告，因此无法提炼到明确的满意度评价或真实用户使用反馈。

不过，从 PR 描述可归纳出以下间接需求：

- **跨渠道使用时希望保留上下文**：WebUI 新会话与 Telegram 等原渠道会话割裂，用户不愿因切换入口而丢失历史。
- **需要准确理解消息是否被执行**：仅显示“已发送”不足以说明 Agent 是否已经拾取消息，用户希望区分排队、已接收和已进入模型请求三个阶段。
- **图片多轮对话需要连续可用**：后续问题应继续引用此前图片，不能退化为只有本地文件路径。
- **危险操作需要明确但非阻塞的确认**：删除关联自动化 Topic 前需要风险提示，但持续阻塞的弹窗也不理想。
- **网络目标必须严格校验**：非法或含歧义字符的主机名应在 DNS 解析前被拒绝，避免连接至与用户预期不同的目标。
- **Provider 接入应更丰富、更易用**：聚合搜索、MCP 搜索预设和 OpenRouter 图像生成反映了用户对搜索覆盖、工具接入成本及模型自由度的持续需求。

---

## 8. 待处理积压

### 存在冲突的高优先级 PR

- [#6714](https://github.com/HKUDS/nanobot/pull/6714)：跨渠道继续会话，涉及上下文与消息路由，冲突解决前难以稳定验证。
- [#6688](https://github.com/HKUDS/nanobot/pull/6688)：Goal 终止失败处理，涉及状态机与响应判定，当前标记冲突。
- [#6681](https://github.com/HKUDS/nanobot/pull/6681)：原生连续会话的历史重放，涉及 SDK 导入后的历史与渠道通知，当前标记冲突。
- [#6014](https://github.com/HKUDS/nanobot/pull/6014)：Keenable MCP 预设，涉及 Provider、WebUI 和文档，当前标记冲突。
- [#5718](https://github.com/HKUDS/nanobot/pull/5718)：OpenRouter 原生图像生成，涉及 Provider 接口与现有生成链路，当前标记冲突。

### 长期开放 PR

- [#5234](https://github.com/HKUDS/nanobot/pull/5234)：自 2026-08-03 创建，持续更新至 2026-11-19，已运行近三个月，建议维护者明确合入计划、拆分范围或关闭重复讨论。
- [#6014](https://github.com/HKUDS/nanobot/pull/6014)：自 2026-10-03 创建并存在冲突，建议优先处理接口适配与回归验证。
- [#5718](https://github.com/HKUDS/nanobot/pull/5718)：自 2026-09-09 创建并存在冲突，建议结合 Provider 抽象调整完成收敛。

### 积压建议

1. 优先解决 **5 条冲突 PR**，其中应先处理 [#6688](https://github.com/HKUDS/nanobot/pull/6688)、[#6681](https://github.com/HKUDS/nanobot/pull/6681) 和 [#6714](https://github.com/HKUDS/nanobot/pull/6714)，这些改动直接影响 Goal、Session 和跨渠道主链路。
2. 对 [#5234](https://github.com/HKUDS/nanobot/pull/5234) 设定明确维护窗口；若依赖或测试范围过大，可拆分为 Provider 接口、搜索聚合核心和 WebUI 配置三个阶段。
3. 当前开放 PR 共 **7 条**，其中 **5 条带冲突标记**，冲突比例偏高；建议以主分支变基、重新验证和减少并行功能分支交叉修改作为下一阶段治理重点。
4. 在下一次 Release 前补充 WebUI 队列、重连、跨渠道会话、Goal 失败语义和图片历史的集成回归测试，以降低多项状态修复同时合入后的交叉回归风险。

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目动态日报

**日期：2026-11-20**  
**统计范围：过去 24 小时 GitHub 数据**  
**项目地址：[sipeed/PicoClaw](https://github.com/sipeed/picoclaw)**

---

## 1. 今日速览

过去 24 小时内，项目共有 **5 条 PR 更新，全部为关闭或合并状态，待合并 PR 为 0**；**Issue 更新为 0**，也**没有新版本发布**。  
今日变更主要集中于合并历史修复 PR，以及关闭定时同步 Rebase 的 CI 任务，表明项目正在整理修复成果并优化自动化维护流程。  
其中最值得关注的是 [PR #586](https://github.com/sipeed/picoclaw/pull/586) 对模型工具调用提取与清理逻辑的增强，可能改善复杂模型输出下的工具调用兼容性。  
从流量指标看，今日没有新增用户讨论或待处理贡献，整体处于**低公开讨论、以代码整合和维护收尾为主**的状态；项目活跃度中等，但缺少版本发布与用户反馈数据，无法确认这些改动是否已形成可直接交付的稳定版本。

---

## 3. 项目进展

### 3.1 工具调用解析与兼容性增强

- **PR**：[#586 — feat: Improve tool call extraction and stripping to support multiple …](https://github.com/sipeed/picoclaw/pull/586)
- **状态**：已关闭
- **作者**：[@RahulChand028](https://github.com/RahulChand028)
- **方向**：Provider / Bug 修复
- **主要内容**：
  - 引入更稳健、具备状态感知能力的工具调用提取逻辑；
  - 新增 `findMatchingBrace`，用于处理嵌套对象、JSON 字符串及转义字符；
  - 目标是支持更复杂、多样的模型输出格式，减少工具调用内容被误解析、截断或清理异常的情况。
- **影响判断**：这属于面向 Agent 工具调用链路的稳定性改进，对不同模型 Provider 返回格式的兼容性有潜在帮助。不过，PR 摘要未给出具体测试结果、支持的模型范围及回滚说明，实际收益仍需结合后续版本验证。

### 3.2 批量合并历史修复 PR

今日关闭的三个 PR 均用于集中合并此前仍未合并的修复：

- [PR #1560 — fix: merge PR #1312 #1311 #1308](https://github.com/sipeed/picoclaw/pull/1560)
- [PR #1555 — fix: merge PR #1390 #1389 #1383 #1381](https://github.com/sipeed/picoclaw/pull/1555)
- [PR #1551 — fix: merge PR #1428 #1422 #1417](https://github.com/sipeed/picoclaw/pull/1551)

这些 PR 创建于 **2026-03-14**，并在 **2026-11-19** 更新关闭，说明其维护周期较长。由于当前数据只提供汇总摘要，未列出被合并 PR 的具体修复内容，也无法判断这些变更是否已经进入正式 Release；建议维护者在版本发布前补充变更日志并完成回归验证。

**整体推进程度**：项目完成了至少 **8 个历史修复 PR 的集中整合**，有助于减少长期积压。但今日没有新版本发布，修复能否被用户立即获取尚不明确。

### 3.3 暂停每日自动 Sync-Rebase

- **PR**：[#2516 — chore(ci): disable scheduled sync-rebase trigger](https://github.com/sipeed/picoclaw/pull/2516)
- **状态**：已关闭
- **作者**：[@sushi30](https://github.com/sushi30)
- **主要变更**：
  - 移除 `sync-rebase` 工作流中每日 `0 0 * * *` 的定时 Cron 配置；
  - 工作流仍可通过 `workflow_dispatch` 手动触发；
  - 不涉及业务代码变更。
- **影响判断**：可减少自动同步带来的无意义 CI 运行、冲突噪声及维护成本，但也可能降低自动处理上游分支同步的及时性。适合后续观察手动同步流程是否足以覆盖日常维护需求。

---

## 4. 社区热点

过去 24 小时没有 Issue 更新，5 条 PR 的评论数与点赞数均未提供有效公开指标，因此**无法可靠评选今日讨论最活跃或反应最多的贡献**。

按变更内容与潜在影响排序，较值得关注的是：

1. [PR #586：增强工具调用提取与清理](https://github.com/sipeed/picoclaw/pull/586)  
   直接涉及模型 Provider 输出兼容性和 Agent 工具调用可靠性，可能是今日技术价值最高的一项变更。

2. [PR #2516：关闭每日 Sync-Rebase 定时任务](https://github.com/sipeed/picoclaw/pull/2516)  
   反映维护流程趋于轻量化，也显示团队正在评估自动化成本与实际收益。

3. [PR #1560](https://github.com/sipeed/picoclaw/pull/1560)、[PR #1555](https://github.com/sipeed/picoclaw/pull/1555)、[PR #1551](https://github.com/sipeed/picoclaw/pull/1551)  
   集中处理历史修复积压，用户关注点更可能落在“修复是否已正式发布”，而不是单个合并 PR 的讨论热度。

**社区参与度评估**：公开讨论偏冷清。可能是维护收尾期、贡献者数据未披露，或社区关注主要集中在历史 Issue/PR；无法仅凭当前数据判断存在集中爆发式需求。

---

## 5. Bug 与稳定性

### 5.1 已明确的稳定性改进

| 优先级 | 问题/改进项 | 状态 | 相关链接 |
|---|---|---|---|
| 高 | 复杂模型输出中的工具调用提取可能受到嵌套对象、JSON 字符串或转义字符影响 | 已有对应改进 PR，今日状态为关闭；是否已进入 Release 待确认 | [PR #586](https://github.com/sipeed/picoclaw/pull/586) |
| 中 | 多个历史修复长期未合并，可能造成缺陷修复交付滞后 | 已通过三个汇总 PR 集中处理 | [#1560](https://github.com/sipeed/picoclaw/pull/1560)、[#1555](https://github.com/sipeed/picoclaw/pull/1555)、[#1551](https://github.com/sipeed/picoclaw/pull/1551) |

### 5.2 今日新增 Bug 报告

过去 24 小时 **没有新增或更新的 Issue**，因此没有可确认的新崩溃、回归或用户现场故障报告。  
当前缺少公开 Issue 数据不代表不存在未在 GitHub 提交的稳定性问题，建议结合 CI 结果、Provider 兼容性测试矩阵和版本发布前回归报告进一步评估。

---

## 6. 功能请求与路线图信号

今日没有新的功能请求或路线图讨论。现有信号主要来自 PR 内容：

- **多 Provider / 复杂输出兼容**：[PR #586](https://github.com/sipeed/picoclaw/pull/586) 表明工具调用解析正从简单格式匹配转向状态化、鲁棒解析。这可能成为下一版本中模型适配与 Agent 稳定性工作的重点。
- **历史修复集中交付**：[PR #1560](https://github.com/sipeed/picoclaw/pull/1560)、[PR #1555](https://github.com/sipeed/picoclaw/pull/1555)、[PR #1551](https://github.com/sipeed/picoclaw/pull/1551) 暗示下一版本可能以 Bug 修复和兼容性收尾为主。
- **维护自动化收敛**：[PR #2516](https://github.com/sipeed/picoclaw/pull/2516) 释放出减少低收益定时任务、保留人工可控流程的维护策略信号。

**下一版本建议关注**：工具调用解析回归测试、不同 Provider 的输出样本覆盖、嵌套 JSON 与转义字符用例，以及被集中合并修复的最终发布状态。

---

## 7. 用户反馈摘要

过去 24 小时没有 Issue 评论更新，无法提取真实用户的：

- 痛点与使用场景；
- 满意度或不满；
- Provider 兼容性问题；
- 崩溃、误调用或工具执行异常反馈。

今日唯一可直接归纳的技术诉求来自 [PR #586](https://github.com/sipeed/picoclaw/pull/586)：复杂模型输出需要更稳健的工具调用提取机制，以降低 Agent 工具调用失败或内容被错误清理的风险。  
由于没有用户评论佐证，该结论应视为**维护侧问题信号**，而非已验证的普遍用户需求。

---

## 8. 待处理积压

当前数据未列出仍处于开放状态的 Issue 或 PR，因此无法确认长期未响应的具体条目。但以下事项值得维护者优先复核：

1. **确认批量合并修复的交付状态**  
   [PR #1560](https://github.com/sipeed/picoclaw/pull/1560)、[PR #1555](https://github.com/sipeed/picoclaw/pull/1555)、[PR #1551](https://github.com/sipeed/picoclaw/pull/1551) 关闭时间距创建时间约八个月，应明确是否已全部进入默认分支及下一版本。

2. **为工具调用解析补充回归测试**  
   [PR #586](https://github.com/sipeed/picoclaw/pull/586) 涉及嵌套对象、字符串和转义字符，建议提供覆盖这些边界的自动化测试，以及不同 Provider 模型的兼容性结果。

3. **评估关闭定时 Sync-Rebase 后的维护成本**  
   [PR #2516](https://github.com/sipeed/picoclaw/pull/2516) 虽保留了手动触发，但建议检查是否存在分支长期不同步、CI 配置漂移或维护遗漏风险。

4. **清理历史 PR 积压并补充响应机制**  
   今日关闭的汇总 PR 均创建于 2026-03-14。后续应为长期未处理贡献设置标记、阶段性反馈和明确的关闭标准，避免类似修复长期停留在待合并状态。

---

## 今日健康度结论

**综合健康度：中等偏稳。**

- **代码推进**：5 条 PR 均已处理，无待合并 PR，修复整合效率较高。
- **功能活跃度**：今日没有新功能 Issue 或路线图讨论，公开贡献节奏偏平缓。
- **稳定性信号**：工具调用解析获得针对性加强，是今日最重要的质量改进。
- **交付可见度**：没有新版本发布，历史修复是否已面向用户交付仍不清晰。
- **社区健康度**：无新增 Issue 与评论，缺少用户侧验证数据；需要通过版本说明、测试结果和后续 Issue 反馈恢复可观测性。

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI 项目动态日报

**统计日期：2026-11-20**  
**数据范围：过去 24 小时**  
**仓库：** [netease-youdao/LobsterAI](https://github.com/netease-youdao/LobsterAI)

---

## 一、今日速览

- 过去 24 小时共更新 **50 条 PR**，其中 **48 条已合并或关闭、2 条待合并**，开发吞吐较高，主要集中在 OpenClaw 启动性能、Windows 兼容性、Web 搜索与技能安全。
- 今日新增或活跃 **1 条 Issue**，聚焦有道云笔记 Skill 的 API Key 明文暴露；对应修复 PR 已在当天提交，显示问题响应较及时。
- PR 流量明显高于 Issue 流量，且 50 条 PR 中有较多较早创建、近期完成合并或关闭的项目，反映当前工作重点偏向**集中清理性能瓶颈与跨平台稳定性问题**。
- 今日没有新版本发布，当前变化仍处于代码合并与验证阶段，尚不能据此确认已进入可用版本。
- 综合评估：**项目健康度良好、迭代活跃度较高**；安全问题和桌面端回归仍需持续关注，尤其应确保合并前后的 Windows、macOS 与应用内浏览器场景得到充分验证。

---

## 二、版本发布

过去 24 小时 **无新版本发布**，因此暂无版本更新内容、破坏性变更及升级迁移说明。

---

## 三、项目进展

### 1. YoudaoNote 凭据暴露问题进入修复阶段

今日 Issue [#3120](https://github.com/netease-youdao/LobsterAI/issues/3120) 指出，有道云笔记 Skill 指示 Agent 使用以下形式传递 API Key：

```bash
youdaonote config set apiKey <用户提供的Key>
```

这会让密钥进入模型上下文、命令行参数、Shell 历史及进程列表，形成明显的凭据泄露面。

对应修复 PR：

- [#3122 fix(skills): protect YoudaoNote API key setup](https://github.com/netease-youdao/LobsterAI/pull/3122) — **待合并**

该 PR 的目标是避免在对话和命令行中直接暴露明文密钥，是今日最直接的安全治理动作。

**进展判断：** Issue 当日即出现对应修复 PR，问题从发现进入代码修复阶段；但由于尚未合并，暴露问题是否真正闭环仍需等待合并及验证。

---

### 2. OpenClaw 启动性能专项优化密集收口

今日已合并或关闭的一批 PR 集中解决 OpenClaw 在 Windows 环境中的启动耗时问题，主要包括：

- [#3029 perf(openclaw): defer large tool catalogs behind Tool Search](https://github.com/netease-youdao/LobsterAI/pull/3029)  
  将大体量工具目录改为通过 Tool Search 按需加载。PR 数据显示，原有 68 个工具、约 10.6 万字符的工具 Schema 会随每次请求发送，首请求基线约 4.5 万 Token；本次调整旨在压缩上下文与请求开销。

- [#2996 perf(openclaw): ship only allowlisted bundled skills](https://github.com/netease-youdao/LobsterAI/pull/2996)  
  仅分发允许列表中的内置 Skill，避免 Gateway 启动时检查用户不可见但仍被处理的默认技能。PR 指出，在 Windows 上这一流程曾使 Gateway 从 “starting channels and sidecars” 到 “ready” 耗时约 6–7 秒，并伴随大量同步文件访问。

- [#3066 perf(openclaw): trim gateway startup by gating xai plugin and scoping dist package](https://github.com/netease-youdao/LobsterAI/pull/3066)  
  仅在配置 xAI Provider 时启用 xAI 插件，并缩小运行时 `package.json` 的 exports 范围，减少无效模块加载。

- [#3011 perf(openclaw): ship build-info.json beside the gateway bundle](https://github.com/netease-youdao/LobsterAI/pull/3011)  
  调整 `build-info.json` 的打包位置，修复 OpenClaw 启动迁移检查点无法定位构建信息的问题。

- [#3001 perf(openclaw): skip the dreaming startup scrub when dreaming is off](https://github.com/netease-youdao/LobsterAI/pull/3001)  
  在未启用 dreaming 时跳过启动阶段的会话清理任务，避免无意义的定时和同步扫描。

- [#3000 perf(openclaw): connect the gateway client sooner after startup](https://github.com/netease-youdao/LobsterAI/pull/3000)  
  优化 Gateway 就绪后到桌面端完成握手之间的流程；PR 披露旧流程存在约 2.3–2.7 秒的串行等待。

- [#2997 perf(openclaw): read Windows process start times natively](https://github.com/netease-youdao/LobsterAI/pull/2997)  
  改用原生方式读取 Windows 进程启动时间，避免每次 Gateway 启动多次同步拉起 PowerShell。PR 披露旧实现单次启动约阻塞事件循环 2.5 秒。

- [#2987 fix(openclaw): load Windows plugins natively and cache plugin realpaths](https://github.com/netease-youdao/LobsterAI/pull/2987)  
  改善 Windows 插件加载并缓存真实路径。PR 指出，在 360 Total Security 等安全软件环境下，同步文件元数据检查曾导致 Gateway 启动达到 170–250 秒。

**整体影响：** 这些改动覆盖工具目录、Skill 分发、插件加载、进程探测、迁移检查点及客户端握手等多个启动阶段，属于系统性减负。若合并后的基准数据成立，预计可明显改善冷启动时间、事件循环阻塞和首请求 Token 成本。

---

### 3. Windows Gateway 生命周期与修复流程增强

- [#2729 fix(openclaw): recover Windows gateway exits and repair startup](https://github.com/netease-youdao/LobsterAI/pull/2729)  
  改进 Windows Gateway 重启和一键修复逻辑：旧流程即使进程稍后退出，也可能提前报告 “did not exit after SIGKILL”；新逻辑等待确认进程真正终止，并修复了安装环境中的其他阻塞问题。

**进展判断：** 该方向直接增强崩溃恢复与自修复能力，对 Windows 企业环境中的稳定运行尤其重要。

---

### 4. Web 搜索与应用内浏览器能力增强

- [#3043 fix(web-search): use LobsterAI in-app browser](https://github.com/netease-youdao/LobsterAI/pull/3043)  
  在应用内浏览器模式下，让网页搜索和页面读取通过带认证的本地桥接在 Electron 隐藏页面执行，复用现有浏览器会话与代理配置；独立模式继续使用 Playwright 和 Chrome。与此同时增强 Fake-IP DNS、TUN 网卡及 RFC 2544 地址段的识别与访问策略。PR 摘要称，相关 5 个 Vitest 文件共 202 项测试通过。

- [#2983 fix(web-search): run node without the env found on PATH](https://github.com/netease-youdao/LobsterAI/pull/2983)  
  修复 `~/.local/bin/env` 被误当作可执行程序、导致 Web 搜索脚本静默不执行的问题。

- [#3027 fix(openclaw): snapshot Chrome MCP process trees natively on Windows](https://github.com/netease-youdao/LobsterAI/pull/3027)  
  改用原生方式获取 Windows Chrome MCP 进程树，减少 PowerShell 依赖，避免浏览器工具因进程归属校验失败而长期不可用。

**进展判断：** Web 搜索正在从“单纯能调用”转向“复用应用内浏览器、适配代理与虚拟网络、增强 Windows 进程识别”的可靠集成。

---

### 5. 子代理会话恢复能力回归

- [#3123 feat(cowork): restore subagent sessions on the dsh engine](https://github.com/netease-youdao/LobsterAI/pull/3123)  
  在 dsh 迁移分支上恢复子代理面板，并使用 dsh 子会话 ID 关联委派调用及结果，避免父任务已经返回输出文件、子代理面板却仍为空的情况。

**进展判断：** 该 PR 补齐了迁移过程中子代理状态展示和结果关联能力，对多智能体协作的可观测性有直接改善。

---

### 6. 桌面伴侣、首页与 PPT 交互修复

- [#3124 fix(desktop-companion): keep orb docked across displays and Windows DPI](https://github.com/netease-youdao/LobsterAI/pull/3124) — **待合并**  
  改进桌面悬浮球在多显示器、Windows DPI 缩放及显示配置变化下的停靠行为，并使用 `desktop-companion.position.v2` 保存边缘、纵向比例和显示器 ID。

- [#3121 fix(home): collapse image examples by default](https://github.com/netease-youdao/LobsterAI/pull/3121)  
  将首页图片示例默认改为折叠，仅在用户点击图片创作入口时展开，并在新任务及账号变化时重置状态。

- [#3119 fix(ppt): restore example dialog clicks and clarify audience input](https://github.com/netease-youdao/LobsterAI/pull/3119)  
  修复 PPT 示例弹窗关闭按钮无法点击的问题，并调整中文目标受众字段的提示文案。

---

### 7. 构建与模板体积优化

- [#3085 perf(openclaw): slim the managed AGENTS.md sections and pristine template](https://github.com/netease-youdao/LobsterAI/pull/3085)  
  精简工作区 `AGENTS.md` 中重复或未使用的说明。由于该文件会进入每次模型请求，此举可降低冷启动 Token 消耗。

- [#2948 fix(packaging): isolate Mac skill dependencies by target architecture](https://github.com/netease-youdao/LobsterAI/pull/2948)  
  按目标架构隔离 macOS Skill 依赖，降低不同架构间的依赖污染风险。

- [#2867 fix(skills): restrict film and music search to basic information](https://github.com/netease-youdao/LobsterAI/pull/2867)  
  收紧影视与音乐搜索 Skill 的返回范围，使其聚焦基础信息查询。

**今日总体推进程度：** 一天内完成 **48 条 PR 的合并或关闭**，覆盖安全、性能、跨平台兼容、浏览器集成、多智能体状态与桌面交互多个层面，属于高强度迭代日。项目功能面继续扩展，同时开始系统治理长期累积的启动耗时和 Windows 稳定性问题。

---

## 四、社区热点

### 1. Issue #3120：有道云笔记 API Key 明文传递

- 链接：[Issue #3120](https://github.com/netease-youdao/LobsterAI/issues/3120)
- 状态：OPEN
- 评论数：3
- 反应数：0
- 关注度判断：**今日唯一 Issue，且是明确的安全风险**

**核心诉求：**

1. 避免 API Key 出现在模型对话上下文中。
2. 避免 Key 通过命令行参数传给 `youdaonote config set apiKey`。
3. 避免明文进入 Shell 历史和系统进程列表。
4. 官方 Skill 应提供更安全的凭据录入和传递方式。
5. 配套安装流程还应考虑版本固定与完整性校验。

**对应修复：**

- [#3122 fix(skills): protect YoudaoNote API key setup](https://github.com/netease-youdao/LobsterAI/pull/3122)

**分析：** 该 Issue 的评论数不高于近期大型 PR，但安全敏感度高、影响所有使用官方有道云笔记 Skill 的用户。其修复应优先于一般体验优化，并补充自动化测试，确保文档示例、CLI 行为和 Agent 指令保持一致。

---

### 2. PR #3029：大体量工具目录延迟加载

- 链接：[PR #3029](https://github.com/netease-youdao/LobsterAI/pull/3029)
- 状态：CLOSED
- 评论/反应数：数据未提供
- 关注度判断：**今日最重要的上下文成本优化之一**

工具 Schema 曾占每次模型请求的约三分之二；改为 Tool Search 后，理论上可显著减少首请求 Token 消耗。社区关注点预计会集中于：

- 延迟加载后工具发现是否稳定。
- 必需工具是否仍可被模型及时调用。
- 搜索目录是否引入额外延迟。
- 能否兼容既有 Agent、插件和会话恢复。

---

### 3. PR #2987：Windows 安全软件下 Gateway 启动超时

- 链接：[PR #2987](https://github.com/netease-youdao/LobsterAI/pull/2987)
- 状态：CLOSED
- 关注度判断：**今日最重要的稳定性议题之一**

在 360 Total Security 环境下，Gateway 启动可能达到 170–250 秒。该问题对 Windows 用户尤其严重，尤其影响低配设备、安全软件严格扫描环境和首次启动场景。原生加载与路径缓存是直接针对瓶颈的优化。

---

### 4. PR #3027：Windows 浏览器工具可能永久不可用

- 链接：[PR #3027](https://github.com/netease-youdao/LobsterAI/pull/3027)
- 状态：CLOSED
- 关注度判断：**功能完全不可用的严重稳定性问题**

Chrome MCP 通过进程归属判断现有会话；PowerShell 枚举失败可能导致浏览器工具长期不可用。原生进程树快照可降低外部命令失败带来的连带影响。

---

### 5. PR #3123：dsh 迁移后子代理面板为空

- 链接：[PR #3123](https://github.com/netease-youdao/LobsterAI/pull/3123)
- 状态：CLOSED
- 关注度判断：**多智能体协作体验的核心回归**

父任务已经结束且输出文件可见，但子代理面板为空，说明迁移后会话关联和状态同步存在断层。修复价值在于恢复用户对委派过程、代理状态及结果链路的可观测性。

> 注：数据仅提供“评论数最多的 20 条 PR”，但所列 PR 的评论字段均为 `undefined`，无法据此可靠计算今日评论或点赞排行。因此以上热点按安全影响、用户影响范围和技术重要性排序，而非严格按社区互动量排序。

---

## 五、Bug 与稳定性

### 严重

#### 1. YoudaoNote API Key 多通道明文泄露

- Issue：[#3120](https://github.com/netease-youdao/LobsterAI/issues/3120)
- Fix PR：[#3122](https://github.com/netease-youdao/LobsterAI/pull/3122)
- 当前状态：修复 PR **待合并**
- 影响范围：所有使用有道云笔记 Skill 并配置 API Key 的用户
- 风险：
  - 模型上下文保留敏感凭据；
  - 命令历史留档；
  - 进程参数可被同主机其他进程读取；
  - 日志、录屏或终端回显可能二次泄露。

**处理建议：** 在合并前确认 PR 已同时覆盖 `SKILL.md` 中所有示例、安装脚本和 CLI 文档；发布后建议用户轮换曾经录入的 API Key。

---

### 高

#### 2. Windows 安全软件环境下 Gateway 启动极慢或超时

- PR：[#2987](https://github.com/netease-youdao/LobsterAI/pull/2987)
- 当前状态：已关闭，按数据视为已合并或关闭
- 表现：在 360 Total Security 等环境下，启动可能达到 170–250 秒，主要阻塞于同步文件元数据检查。

#### 3. Windows 浏览器工具可能永久不可用

- PR：[#3027](https://github.com/netease-youdao/LobsterAI/pull/3027)
- 当前状态：已关闭
- 表现：Chrome MCP 进程归属校验依赖 PowerShell；外部命令失败可能导致工具无法恢复可用状态。

#### 4. Windows Gateway 重启和一键修复失败

- PR：[#2729](https://github.com/netease-youdao/LobsterAI/pull/2729)
- 当前状态：已关闭
- 表现：进程实际已退出，但仍可能报告 “did not exit after SIGKILL”；安装环境下还存在额外修复阻塞项。

---

### 中

#### 5. 桌面悬浮球在多屏和 DPI 变化后停靠异常

- PR：[#3124](https://github.com/netease-youdao/LobsterAI/pull/3124)
- 当前状态：**待合并**
- 表现：跨显示器或 Windows DPI 缩放变化后，悬浮球位置、边缘吸附和显示归属可能异常。

#### 6. dsh 迁移后子代理面板状态丢失

- PR：[#3123](https://github.com/netease-youdao/LobsterAI/pull/3123)
- 当前状态：已关闭
- 表现：父任务完成并显示输出文件，但子代理面板仍为空。

#### 7. Web 搜索脚本因 PATH 冲突静默失效

- PR：[#2983](https://github.com/netease-youdao/LobsterAI/pull/2983)
- 当前状态：已关闭
- 表现：`~/.local/bin/env` 被错误作为可执行程序调用，命令表面成功退出，但实际未运行 Node 逻辑。

#### 8. PPT 示例弹窗关闭按钮无法点击

- PR：[#3119](https://github.com/netease-youdao/LobsterAI/pull/3119)
- 当前状态：已关闭
- 表现：关闭按钮与可拖拽标题栏重叠区域发生鼠标事件冲突。

#### 9. 首页图片示例默认展开造成干扰

- PR：[#3121](https://github.com/netease-youdao/LobsterAI/pull/3121)
- 当前状态：已关闭
- 表现：图片示例自动展开，可能遮挡工作区并影响任务创建效率。

---

### 低

#### 10. macOS Skill 依赖可能跨架构污染

- PR：[#2948](https://github.com/netease-youdao/LobsterAI/pull/2948)
- 当前状态：已关闭
- 风险：Apple Silicon 与 Intel 依赖混用时，安装或运行可能出现架构不兼容。

#### 11. 影视、音乐搜索返回范围超出预期

- PR：[#2867](https://github.com/netease-youdao/LobsterAI/pull/2867)
- 当前状态：已关闭
- 风险：技能行为边界不清，可能返回超出“基础信息查询”范围的内容。

---

## 六、功能请求与路线图信号

### 1. Skill 凭据安全管理

用户通过 [#3120](https://github.com/netease-youdao/LobsterAI/issues/3120) 明确提出：

- API Key 不应进入 Agent 对话上下文。
- 不应通过命令行明文参数传递。
- 应提供更安全的交互式录入、环境变量、密钥存储或受保护文件机制。
- 官方 Skill 的安装脚本还应支持版本固定和完整性校验。

对应 PR [#3122](https://github.com/netease-youdao/LobsterAI/pull/3122) 已进入实现阶段，因此该需求进入近期版本的概率很高。除修复单个 YoudaoNote Skill 外，后续很可能形成统一的安全规范，推广至其他需要 API Key 的官方 Skill。

---

### 2. OpenClaw 启动性能与资源治理

今日大量已关闭 PR 表明，性能并非临时需求，而是明确的工程路线：

- 工具目录按需加载：[#3029](https://github.com/netease-youdao/LobsterAI/pull/3029)
- 精简内置 Skill 分发：[#2996](https://github.com/netease-youdao/LobsterAI/pull/2996)
- 插件与依赖裁剪：[#3066](https://github.com/netease-youdao/LobsterAI/pull/3066)
- 缩短客户端握手：[#3000](https://github.com/netease-youdao/LobsterAI/pull/3000)
- 原生化 Windows 探测：[#2997](https://github.com/netease-youdao/LobsterAI/pull/2997)、[#2987](https://github.com/netease-youdao/LobsterAI/pull/2987)
- 缩减 AGENTS.md 上下文：[#3085](https://github.com/netease-youdao/LobsterAI/pull/3085)

**路线图信号：** 下一阶段可能继续围绕“冷启动时间、首包延迟、Token 成本、后台 I/O 阻塞”建立性能基线与回归监控。

---

### 3. 应用内浏览器成为 Web 搜索默认执行环境

[#3043](https://github.com/netease-youdao/LobsterAI/pull/3043) 显示，Web 搜索正强化与 LobsterAI 应用内浏览器的整合，以复用：

- 已登录会话；
- Cookie 与认证状态；
- 代理配置；
- Electron 隐藏页面；
- Fake-IP/TUN 网络环境。

**路线图信号：** 未来版本可能会进一步减少对独立 Playwright/Chrome 的依赖，并强化应用内浏览器的统一身份、代理与隐私策略。

---

### 4. 多智能体会话可观测性继续增强

[#3123](https://github.com/netease-youdao/LobsterAI/pull/3123) 补齐 dsh 引擎下的子代理会话恢复，意味着多智能体能力正在从“能委派任务”转向“能稳定追踪状态、关联结果及恢复会话”。

**路线图信号：** 后续重点可能包括子代理生命周期展示、失败重试、跨会话恢复、历史结果关联及更清晰的委派可视化。

---

### 5. Windows 和多显示器桌面体验成为近期重点

[#3124](https://github.com/netease-youdao/LobsterAI/pull/3124) 仍待合并，说明多屏与 DPI 场景仍处于修复收尾阶段。该 PR 与今日多件 Windows Gateway 优化合并观察，Windows 原生兼容性预计是下一版本的重要验收维度。

---

## 七、用户反馈摘要

### 真实痛点

1. **敏感凭据缺乏安全传递机制**  
   用户实际使用官方 Skill 时发现，API Key 会被 Agent 直接拼入命令。痛点不仅是“不够方便”，而是凭据会同时进入多个可被读取的通道，信任风险较高。参见 [#3120](https://github.com/netease-youdao/LobsterAI/issues/3120)。

2. **Windows 启动速度和兼容性直接影响可用性**  
   170–250 秒启动、多次 PowerShell 调用、安全软件导致的同步 I/O 阻塞，以及 Gateway 退出误判，都会让用户将正常安装或修复流程理解为“应用卡死”。相关修复见 [#2987](https://github.com/netease-youdao/LobsterAI/pull/2987)、[#2997](https://github.com/netease-youdao/LobsterAI/pull/2997)、[#2729](https://github.com/netease-youdao/LobsterAI/pull/2729)。

3. **工具“不可见/不可用”会显著降低对 Agent 的信任**  
   浏览器工具因进程识别失败而长期不可用，或 Web 搜索脚本静默退出时，用户难以区分是权限、网络还是 Agent 本身的问题。参见 [#3027](https://github.com/netease-youdao/LobsterAI/pull/3027)、[#2983](https://github.com/netease-youdao/LobsterAI/pull/2983)。

4. **多智能体结果不可见会造成“任务未真正完成”的感受**  
   父任务已返回文件但子代理面板为空，容易让用户误判委派链路中断。参见 [#3123](https://github.com/netease-youdao/LobsterAI/pull/3123)。

### 使用场景

- Windows 企业环境下安装或修复 OpenClaw Gateway。
- 启用了 360 Total Security 等严格安全软件的桌面环境。
- 通过应用内浏览器执行需要登录态或代理的网页搜索。
- 在多显示器、高 DPI 缩放环境下长期使用桌面悬浮球。
- 使用有道云笔记等需要 API Key 的第三方 Skill。
- 使用 dsh 引擎委派子任务并查看执行状态。

### 满意度与不足信号

- **正向信号：** 当日 Issue 只有 1 条，而 PR 达到 50 条，说明大量工作来自内部主动优化，而非用户故障集中爆发。
- **主要不满意点：** 安全默认值不足、启动性能不稳定、Windows 外部命令依赖过重、迁移后的状态展示不完整。
- **尚无明确满意度评价：** 数据未提供 Issue 中的具体评论文本、点赞或满意度标记，不能对用户整体满意度作强结论。

---

## 八、待处理积压

### 1. API Key 安全修复仍待合并

- Issue：[#3120](https://github.com/netease-youdao/LobsterAI/issues/3120)
- Fix PR：[#3122](https://github.com/netease-youdao/LobsterAI/pull/3122)
- 状态：PR 待合并，Issue 仍开放
- 提醒：安全问题应明确责任人、回归测试与发布计划；若最终方案涉及用户重新配置凭据，应提供迁移说明，并建议轮换旧 Key。

### 2. 桌面伴侣多屏/DPI 修复仍待合并

- PR：[#3124](https://github.com/netease-youdao/LobsterAI/pull/3124)
- 状态：待合并
- 提醒：建议覆盖不同缩放比例、显示器热插拔、主屏切换、负坐标布局和任务栏自动隐藏等场景。

### 3. 多项 OpenClaw 性能 PR 创建周期较长

以下 PR 创建于较早日期，近期才关闭或合并，说明性能问题可能长期存在：

- [#3029](https://github.com/netease-youdao/LobsterAI/pull/3029)，创建于 2026-11-08
- [#3066](https://github.com/netease-youdao/LobsterAI/pull/3066)，创建于 2026-11-12
- [#3011](https://github.com/netease-youdao/LobsterAI/pull/3011)，创建于 2026-11-05
- [#3001](https://github.com/netease-youdao/LobsterAI/pull/3001)，创建于 2026-11-05
- [#3000](https://github.com/netease-youdao/LobsterAI/pull/3000)，创建于 2026-11-05
- [#2997](https://github.com/netease-youdao/LobsterAI/pull/2997)，创建于 2026-11-05
- [#2987](https://github.com/netease-youdao/LobsterAI/pull/2987)，创建于 2026-11-03
- [#3027](https://github.com/netease-youdao/LobsterAI/pull/3027)，创建于 2026-11-07
- [#2983](https://github.com/netease-youdao/LobsterAI/pull/2983)，创建于 2026-11-03

**提醒：** 这些 PR 虽已进入关闭状态，但维护者仍应补充统一的前后基准数据，区分启动耗时、CPU 占用、首次请求 Token、事件循环阻塞等指标，避免局部优化无法转化为用户可感知收益。

### 4. macOS 架构隔离修复的验证信息偏少

- PR：[#2948](https://github.com/netease-youdao/LobsterAI/pull/2948)
- 创建于 2026-10-28，近期关闭
- 提醒：公开摘要几乎为空，建议在合并记录中补充 Intel 与 Apple Silicon 的安装、启动和 Skill 依赖验证结果，方便后续回归。

### 5. 长期 PR 治理需要继续收敛

今日 50 条 PR 中包含不少 10 月创建、11 月更新的条目，例如：

- [#2948](https://github.com/netease-youdao/LobsterAI/pull/2948)
- [#2867](https://github.com/netease-youdao/LobsterAI/pull/2867)
- [#2729](https://github.com/netease-youdao/LobsterAI/pull/2729)

虽然这些 PR 已关闭，不构成当前待合并积压，但反映项目曾存在较长分支生命周期。建议后续按“性能、稳定性、安全、构建发布”建立里程碑，定期清理验证不充分或难以维护的分支。

---

## 总结

LobsterAI 今日呈现**高开发吞吐、以性能和稳定性治理为主线**的状态。50 条 PR 中 48 条已完成合并或关闭，OpenClaw 的启动耗时、工具上下文体积、Windows 安全软件兼容和 Gateway 生命周期问题得到集中处理；Web 搜索、子代理会话以及桌面多屏体验也在持续完善。

当前最需要关注的两项开放工作是：

1. 尽快完成并验证有道云笔记 API Key 安全修复：[#3122](https://github.com/netease-youdao/LobsterAI/pull/3122)；
2. 收尾桌面伴侣跨显示器及 DPI 修复：[#3124](https://github.com/netease-youdao/LobsterAI/pull/3124)。

整体判断：**项目健康度良好、活跃度高、技术方向清晰；近期版本的主要价值将体现在启动更快、Windows 更稳、凭据更安全，而不只是新增功能。**

</details>

<details>
<summary><strong>QwenPaw</strong> — <a href="https://github.com/agentscope-ai/QwenPaw">agentscope-ai/QwenPaw</a></summary>

# QwenPaw 项目动态日报

**日期：2026-11-20**  
**数据范围：过去 24 小时 GitHub 更新**  
**项目活跃度：较高，但以缺陷修复、重构和渠道稳定性治理为主**

---

## 1. 今日速览

过去 24 小时项目共更新 **21 条 Issue**、**47 条 PR**，其中 **12 条 Issue 新开或仍活跃、9 条已关闭**，**33 条 PR 待合并、14 条已合并或关闭**。当前无新版本发布，开发重心集中在 Windows 兼容性、Console 窄屏适配、本地模型生命周期、渠道响应路由及审批安全治理。

今日新开的缺陷数量较多，暴露出 **CLI 路径拼接、健康检查、Windows 子进程回收、密码组件循环刷新** 等问题，说明主干分支仍处于快速迭代和回归暴露期。另一方面，PR 覆盖了技能回滚、渠道日志、媒体预算、模型插件化、记忆模型独立配置等较深层改造，整体推进力度较强，但多数大型改动仍在审查中。

**健康度判断：中高。** 社区提交活跃、问题响应明显，且安全与稳定性投入较多；但当天新增 6 个 Issue，缺陷密度较高，多项 XXXL/XL 重构尚未合入，当前更适合评估为“活跃开发期”，而非稳定收敛期。

---

## 3. 项目进展

> 今日无新版本发布，因此本节仅汇总已合并/关闭或已形成明确修复方向的 PR。数据未提供每个已关闭 PR 的完整清单，以下以今日列表中可确认状态及具备对应 Issue/PR 关联的变更为主。

### 3.1 Console 移动端与窄屏适配继续修正

- **PR #8823** 针对宽表格、代码块在消息气泡中被裁切且无法横向滚动的问题，尝试让宽内容在气泡内保持可滚动，并避免 Markdown 容器整体被撑宽，对应 Issue [#8811](https://github.com/agentscope-ai/QwenPaw/issues/8811)。  
  https://github.com/agentscope-ai/QwenPaw/pull/8823

- **Issue #8796** 已关闭，涉及移动端全屏容器未处理顶部 `safe-area-inset`，导致内容被系统状态栏遮挡；说明 Console 的安全区适配正在从仅处理底部扩展到顶部场景。  
  https://github.com/agentscope-ai/QwenPaw/issues/8796

### 3.2 渠道可靠性和可观测性增强

- **PR #8790** 尝试恢复渠道隔离后丢失的 SDK 与 Worker 日志，覆盖约 18 个迁移渠道及 Console、队列、投递链路，并处理日志重复、凭据脱敏等问题。  
  https://github.com/agentscope-ai/QwenPaw/pull/8790

- **PR #8834** 在响应路由达到容量上限时回收过期路由，避免渠道因残留会话而永久无法接受新响应，体现渠道生命周期治理从“功能可用”向“长期稳定运行”推进。  
  https://github.com/agentscope-ai/QwenPaw/pull/8834

- **PR #8303** 将审批请求投递回发起操作的聊天渠道，解决 Console 有弹窗、外部聊天渠道无提示并最终超时的跨渠道审批断链问题。  
  https://github.com/agentscope-ai/QwenPaw/pull/8303

- **Issue #8313** 已关闭，确认 QQ 群普通消息事件因事件类型未注册而被静默丢弃；该问题直接关系到消息可用性。  
  https://github.com/agentscope-ai/QwenPaw/issues/8313

- **Issue #8394** 已关闭，针对小艺渠道长任务期间无工作状态帧、客户端长时间空白及 WebSocket 静默断连。  
  https://github.com/agentscope-ai/QwenPaw/issues/8394

### 3.3 Windows 与本地模型稳定性

- **PR #8835** 针对 Windows 下 `agent.json` 原子替换偶发失败，加入有限重试，并等待安装器子进程真正退出后再判定任务状态。  
  https://github.com/agentscope-ai/QwenPaw/pull/8835

- **PR #8499** 继续推进本地模型管理插件化，将下载、llama.cpp 安装和服务生命周期从主程序中抽出，同时强调兼容既有配置与模型文件。该改造规模大，可能成为后续本地模型架构升级的重要基础。  
  https://github.com/agentscope-ai/QwenPaw/pull/8499

- **Issue #8830** 报告 Windows 后端异常退出后遗留 `llama-server.exe`，导致进程累积、内存耗尽及本地模型无法启动，是当前较突出的高影响稳定性问题。  
  https://github.com/agentscope-ai/QwenPaw/issues/8830

### 3.4 技能安装与回滚可靠性

- **PR #8784** 改进多工作区技能回滚：避免中途失败后放弃剩余工作区，并计划在所有工作区恢复完成前保留回滚备份。  
  https://github.com/agentscope-ai/QwenPaw/pull/8784

- **PR #8568** 将技能副本暂存到目标工作区内部，解决 Windows Hub Local runtime 中 AppContainer 临时目录权限导致默认技能无法安装的问题。  
  https://github.com/agentscope-ai/QwenPaw/pull/8568

### 3.5 安全与沙箱能力修复

- **PR #8703** 修复 Linux 容器无法读取 `/sys/kernel/security/lsm` 时误判 Landlock 不可用的问题。该误判会触发 fail-closed，使 Code Mode 的 `run_code` 被持续拒绝。  
  https://github.com/agentscope-ai/QwenPaw/pull/8703

- **Issue #8513** 已关闭，聚焦 `tool_guard` 与治理通道未能拦截 shell 包装的外发操作，例如 SMTP、HTTP POST 和 `@file` 外传，反映安全检测正从命令名称匹配转向识别实际副作用。  
  https://github.com/agentscope-ai/QwenPaw/issues/8513

### 3.6 记忆系统与模型配置持续演进

- **PR #7719** 支持 ReMeLight 记忆写入使用独立模型，使自动记忆、梦境、日报和自动总结不必消耗与聊天相同的高价模型。  
  https://github.com/agentscope-ai/QwenPaw/pull/7719

- **PR #8472** 增加 Reranker 模型中心、服务连通性测试、多查询精度历史与自动验证，目标是把记忆检索从基础配置推进到可观测、可调优阶段。  
  https://github.com/agentscope-ai/QwenPaw/pull/8472

- **Issue #8580** 仍在处理中：记忆标签已生成，但标签索引无法重建，`/memory/tags` 返回 503，属于记忆可观测性功能不可用。  
  https://github.com/agentscope-ai/QwenPaw/issues/8580

### 3.7 基础设施与工程维护

- **PR #8719** 增加 `QWENPAW_BASE_PATH`，支持 Console 与 API 部署在反向代理子路径下，提升企业内网和网关环境兼容性。  
  https://github.com/agentscope-ai/QwenPaw/pull/8719

- **PR #8308** 修正缺失 provider 查询测试，使其通过模型元数据接口验证 HTTP 404 和 `Provider not found`，改善 API 契约测试。  
  https://github.com/agentscope-ai/QwenPaw/pull/8308

- **PR #8268** 修复运行完成回调阻塞或取消后，`TaskTracker` 永远保留运行条目的问题，防止任务状态永久停留在 `running`。  
  https://github.com/agentscope-ai/QwenPaw/pull/8268

- **PR #8707** 计划将 Cron 和 Heartbeat 的 token 用量写入 turn records，修复 Console 用量统计漏记定时任务消耗。  
  https://github.com/agentscope-ai/QwenPaw/pull/8707

- **PR #8512** 扩展网关错误状态提取范围，使流式响应中途失败时也能从错误文本识别状态码。  
  https://github.com/agentscope-ai/QwenPaw/pull/8512

---

## 4. 社区热点

### 4.1 Issue #8817：Web UI / UX 专项优化

这是今日用户诉求最集中、评价最负面的 Issue。反馈涵盖视觉风格不统一、组件堆叠、配色异常、圆角不一致、小屏适配差、长会话切换无响应、缺少加载反馈，以及记忆向量模型和重排模型配置入口过于分散。

该 Issue 超越了单点缺陷范畴，实质上是对产品一致性和基础交互质量的整体审查，可能成为下一轮 Console 设计系统与性能专项工作的入口。

https://github.com/agentscope-ai/QwenPaw/issues/8817

### 4.2 Issue #8811：窄屏消息整体被裁剪

用户明确反馈，在 375px 手机视口下，普通消息、Markdown 表格和代码块均可能被裁切，且宽内容没有横向滚动能力。PR #8823 已直接响应此问题，表明该缺陷目前有明确修复路径。

https://github.com/agentscope-ai/QwenPaw/issues/8811

### 4.3 Issue #8580：记忆标签索引不可用

标签生成正常但索引无法重建，最终导致 `/memory/tags` 返回 503。该问题暴露的是“生成链路可用、读取链路失效”的状态不一致，且评论已累计 6 条，是今日维护讨论较充分的长期 Issue。

https://github.com/agentscope-ai/QwenPaw/issues/8580

### 4.4 Issue #6952：提示词前缀缓存不稳定

该问题指出工具 schema 排序与环境上下文字段交错会破坏 LLM KV cache 的稳定性，造成重复轮次中的无谓 cache miss。虽然不是今日新开，但今日仍有更新，反映其对长会话成本和响应延迟有持续影响。

https://github.com/agentscope-ai/QwenPaw/issues/6952

### 4.5 PR #8784：多工作区技能回滚

该 PR 集中处理技能回滚中的多个薄弱点，包括中途恢复失败、备份过早清理及用户长时间等待。其价值不只是修复单一异常，而是强化技能安装/卸载这一高风险操作的事务一致性。

https://github.com/agentscope-ai/QwenPaw/pull/8784

### 4.6 PR #8499：本地模型管理插件化

作为 XXXL 级架构改造，PR #8499 将模型下载、llama.cpp 安装和进程生命周期统一纳入 Provider Plugin，同时保留既有用户配置和模型文件。它可能显著降低核心代码耦合，并为后续本地推理后端扩展提供统一接口。

https://github.com/agentscope-ai/QwenPaw/pull/8499

---

## 5. Bug 与稳定性

### 严重级别：高

#### 5.1 Windows 本地模型进程无法回收

- **现象：** 后端异常退出后，`llama-server.exe` 成为孤儿进程并持续累积，最终耗尽内存并阻止本地模型再次启动。
- **影响：** 本地模型不可用、系统资源恶化，可能需要人工结束进程。
- **修复状态：** Issue 尚未关闭；PR #8499 涉及本地模型生命周期插件化，但列表中没有明确针对孤儿进程回收的独立修复 PR。
- **Issue：** [#8830](https://github.com/agentscope-ai/QwenPaw/issues/8830)
- **相关 PR：** [#8499](https://github.com/agentscope-ai/QwenPaw/pull/8499)

#### 5.2 安全门禁遗漏 shell 包装的外发行为

- **现象：** SMTP 发送、HTTP POST、读取本地文件并外传等行为，可通过 shell 包装绕过当前检测，在 AUTO/SMART 模式下未产生 findings 或审批。
- **影响：** 可能形成数据外传通道，属于治理边界问题。
- **修复状态：** Issue #8513 已关闭，表明已有处理；但今日展示列表未给出对应 PR，仍建议复核修复覆盖面，尤其是别名、变量展开、脚本文件和复合命令。
- **Issue：** [#8513](https://github.com/agentscope-ai/QwenPaw/issues/8513)

#### 5.3 禁用 provider 后仍使用过期模型

- **现象：** provider 或其模型被禁用后，智能体运行配置仍保留旧模型；通道调用时抛出 `Provider is disabled`，且外部渠道仅显示模糊的 “Internal error”。
- **影响：** 已禁用的敏感或故障 provider 仍可能参与调用；通道任务直接失败且缺少降级策略。
- **修复状态：** Issue 仍开放，当前展示的 PR 中未发现明确对应修复。
- **Issue：** [#8579](https://github.com/agentscope-ai/QwenPaw/issues/8579)

#### 5.4 外部动作审批请求无法回到发起渠道

- **现象：** 聊天回合产生的审批在 Console 有弹窗，但外部聊天渠道无提示，五分钟后超时，工具未执行。
- **影响：** 长任务可能静默终止，跨渠道审批链路不可靠。
- **修复状态：** PR #8303 已给出针对性方案，但尚待合并。
- **Issue：** [#8303](https://github.com/agentscope-ai/QwenPaw/pull/8303)

### 严重级别：中高

#### 5.5 CLI 错误拼接 `/api/api` 路径

- **现象：** `qwenpaw mission start/status/stop` 最终请求 `/api/api/chat/send`。
- **影响：** Mission CLI 全部核心命令不可用。
- **修复状态：** Issue 开放；PR #8719 涉及运行时 base path，但不是该问题的直接修复。
- **Issue：** [#8833](https://github.com/agentscope-ai/QwenPaw/issues/8833)

#### 5.6 CLI 健康检查使用不受支持的 HEAD 请求

- **现象：** 自动生成的 CLI 命令发送 `HEAD /api/version`，服务返回 405，健康检查误判守护进程未运行。
- **影响：** CLI 可能触发无意义的重启、连接失败或错误提示。
- **修复状态：** Issue 开放；暂无明确直接修复 PR。
- **Issue：** [#8832](https://github.com/agentscope-ai/QwenPaw/issues/8832)

#### 5.7 记忆标签索引重建失败

- **现象：** 标签生成后 `/memory/tags` 仍返回 503，索引不可读。
- **影响：** 记忆标签管理、检索或展示功能不可用。
- **修复状态：** Issue 仍开放且已有 6 条评论，暂无明确修复 PR。
- **Issue：** [#8580](https://github.com/agentscope-ai/QwenPaw/issues/8580)

#### 5.8 Daily Paper 截断后整批失败

- **现象：** 模型摘要输出被截断后触发 `ToolJSONDecodeError`；系统没有逐论文重试，而是将整个任务标记为失败。
- **影响：** 少量单篇解析失败即可导致整份日报任务失败。
- **修复状态：** Issue 仍开放，无明确修复 PR。
- **Issue：** [#8123](https://github.com/agentscope-ai/QwenPaw/issues/8123)

### 严重级别：中

#### 5.9 窄屏消息与宽内容被裁切

- **影响：** 移动端和窄视口下无法阅读完整响应，表格、代码块无法横向滚动。
- **修复状态：** PR #8823 待合并。
- **Issue：** [#8811](https://github.com/agentscope-ai/QwenPaw/issues/8811)
- **修复 PR：** [#8823](https://github.com/agentscope-ai/QwenPaw/pull/8823)

#### 5.10 密码组件触发页面循环刷新

- **现象：** 工具配置页面包含 password 组件时，Console 循环刷新。
- **影响：** 相关配置页面可能无法使用，并可能造成配置保存中断。
- **修复状态：** 今日新开 Issue，无明确 fix PR。
- **Issue：** [#8836](https://github.com/agentscope-ai/QwenPaw/issues/8836)

#### 5.11 定时任务执行期间会话无消息

- **现象：** 计划任务运行期间，对应会话不展示触发消息、模型响应或进度，完成后才集中显示。
- **影响：** 用户无法判断后台任务是否运行或卡住。
- **修复状态：** Issue 已关闭。
- **Issue：** [#8815](https://github.com/agentscope-ai/QwenPaw/issues/8815)

#### 5.12 DoomLoopGate 未触发

- **现象：** AgentScope 将多轮回复聚合到单条 assistant message 时，现有循环门控未按预期触发。
- **影响：** 重复调用工具或循环回复可能未被及时中止。
- **修复状态：** Issue 已关闭。
- **Issue：** [#8700](https://github.com/agentscope-ai/QwenPaw/issues/8700)

#### 5.13 响应路由达到上限后无法继续接收新响应

- **影响：** 渠道长期保留陈旧路由，可能表现为响应容量耗尽。
- **修复状态：** PR #8834 待合并。
- **Issue/PR：** [#8834](https://github.com/agentscope-ai/QwenPaw/pull/8834)

---

## 6. 功能请求与路线图信号

### 6.1 高概率进入近期迭代

#### Console 窄屏与统一设计系统

Issue [#8817](https://github.com/agentscope-ai/QwenPaw/issues/8817) 对 UI、组件一致性、移动端适配和长会话切换体验进行了系统反馈；PR [#8823](https://github.com/agentscope-ai/QwenPaw/pull/8823) 已开始处理宽内容滚动问题。后续很可能继续推进：

- 安全区与窄屏布局；
- 统一组件、间距、圆角与配色；
- 长会话切换加载态；
- 记忆及重排模型配置入口整合。

#### 本地模型管理与 Provider 插件化

PR [#8499](https://github.com/agentscope-ai/QwenPaw/pull/8499) 已给出较完整架构，且 Issue [#8830](https://github.com/agentscope-ai/QwenPaw/issues/8830) 暴露了进程生命周期必须纳入插件统一管理的必要性。该方向很可能成为本地模型架构的下一阶段重点。

#### 记忆模型解耦与检索质量治理

PR [#7719](https://github.com/agentscope-ai/QwenPaw/pull/7719) 和 [#8472](https://github.com/agentscope-ai/QwenPaw/pull/8472) 共同指向一个清晰方向：聊天模型、记忆写入模型、Embedding 模型和 Reranker 模型分别配置并独立观测，以降低成本、提升检索质量。

### 6.2 中等概率进入后续版本

#### DeepSeek Search 搜索提供商

PR [#8314](https://github.com/agentscope-ai/QwenPaw/pull/8314) 增加 DeepSeek Search，并强调结构化结果、发布日期和权威等级。该能力与现有 Tavily、AnySearch 形成互补，完成审查后较适合进入搜索 Provider 列表。

#### Windows 原生任务完成通知

Issue [#8821](https://github.com/agentscope-ai/QwenPaw/issues/8821) 已关闭，表明需求可能已经实现或完成替代方案。该功能可明显改善长任务后台执行时的可见性。

#### QQ 流式输出

相关需求 Issue [#6421](https://github.com/agentscope-ai/QwenPaw/issues/6421) 与 [#8307](https://github.com/agentscope-ai/QwenPaw/issues/8307) 均已关闭，说明 QQ 流式消息能力已获得推进或落地。

#### Telegram Forum Topic 会话隔离

Issue [#8827](https://github.com/agentscope-ai/QwenPaw/issues/8827) 请求按论坛话题隔离 Agent 会话。该需求适合多用户、多主题场景，但对 Telegram 专属会话路由影响有限，可能排入渠道增强队列。

#### Rapid-MLX 本地 Provider 预设

Issue [#8826](https://github.com/agentscope-ai/QwenPaw/issues/8826) 请求为 Apple Silicon 提供 Rapid-MLX OpenAI 兼容预设。由于与本地模型插件化方向一致，在 Provider 架构稳定后较容易接入。

### 6.3 需求明确但仍需产品取舍

#### QQ 群普通消息支持

Issue [#8313](https://github.com/agentscope-ai/QwenPaw/issues/8313) 暴露普通群消息事件类型遗漏。该能力可能影响消息完整性，但还需确认事件过滤、触发策略和防骚扰设计。

#### 记忆任务按单篇重试

Issue [#8123](https://github.com/agentscope-ai/QwenPaw/issues/8123) 暴露日报任务缺少逐论文容错。改进方向明确，但需统一结构化输出失败时的重试和降级策略。

---

## 7. 用户反馈摘要

### 真实使用场景

1. **移动端与窄屏使用频繁但体验不稳定**  
   用户在 375px 手机视口下运行 Console，反馈整条消息、宽表格和代码块均可能被截断。该问题直接影响移动办公和长内容阅读。  
   [#8811](https://github.com/agentscope-ai/QwenPaw/issues/8811)

2. **长时间后台任务缺少可见反馈**  
   用户希望任务完成后收到 Windows 右下角系统通知，而不是持续盯住浏览器标签页；这表明长程任务是核心使用场景。  
   [#8821](https://github.com/agentscope-ai/QwenPaw/issues/8821)

3. **定时任务运行过程不可见**  
   用户关注后台计划任务的实时消息和执行进度，当前需等待任务完成才能看到会话内容，容易误判为卡死。  
   [#8815](https://github.com/agentscope-ai/QwenPaw/issues/8815)

4. **Windows 本地模型用户受进程泄漏困扰**  
   本地模型用户频繁重启后端后出现大量 `llama-server.exe`，最终影响内存和启动能力，是明确的平台级痛点。  
   [#8830](https://github.com/agentscope-ai/QwenPaw/issues/8830)

5. **日常论文摘要需要局部容错**  
   Daily Paper 用户希望单篇论文解析失败时重试，而不是让整批任务失败，反映定时研究类工作流的可靠性要求。  
   [#8123](https://github.com/agentscope-ai/QwenPaw/issues/8123)

### 满意与积极信号

- 移动端安全区问题 [#8796](https://github.com/agentscope-ai/QwenPaw/issues/8796) 已关闭，表明此前针对底部安全区与虚拟键盘的适配工作得到延续。
- QQ 群消息丢失 [#8313](https://github.com/agentscope-ai/QwenPaw/issues/8313)、QQ 流式输出 [#8307](https://github.com/agentscope-ai/QwenPaw/issues/8307) 均已关闭，QQ 渠道能力正在逐步完善。
- 小艺渠道长时间空白及静默断连 [#8394](https://github.com/agentscope-ai/QwenPaw/issues/8394) 已关闭，渠道可观测性有所改善。
- PR [#8790](https://github.com/agentscope-ai/QwenPaw/pull/8790) 计划恢复渠道隔离后的日志，且覆盖脱敏和重复日志处理，说明维护者开始重视排障体验与凭据安全。

### 不满意与信任风险

- UI/UX 的整体一致性不足，用户明确认为当前样式、组件、配色、圆角和小屏适配混乱，影响专业产品观感。  
  [#8817](https://github.com/agentscope-ai/QwenPaw/issues/8817)
- 工具安全检测可能遗漏 shell 包装的外发动作，用户对 AUTO/SMART 模式下的实际治理边界存疑。  
  [#8513](https://github.com/agentscope-ai/QwenPaw/issues/8513)
- Provider 被禁用后仍触发旧配置，外部渠道只显示 “Internal error”，说明配置状态传播和错误反馈不够可靠。  
  [#8579](https://github.com/agentscope-ai/QwenPaw/issues/8579)

---

## 8. 待处理积压

### 8.1 长期重要 Issue

#### Issue #6952：前缀缓存不稳定

自 2026-08-12 持续更新，影响多轮对话的 KV cache 命中率和模型调用成本。当前无明确 fix PR，建议将工具 schema 排序和环境上下文字段规范化列为性能专项。

https://github.com/agentscope-ai/QwenPaw/issues/6952

#### Issue #8580：记忆标签索引重建失败

自 2026-11-04 持续讨论，已有 6 条评论。标签“生成成功但不可读”的状态不一致容易造成误判，建议尽快提供索引重建、自检和降级读取方案。

https://github.com/agentscope-ai/QwenPaw/issues/8580

#### Issue #8123：Daily Paper 截断导致整批失败

自 2026-10-08 开放，仍缺少逐论文重试及结构化输出容错。建议明确重试次数、退避策略、部分成功结果及任务状态语义。

https://github.com/agentscope-ai/QwenPaw/issues/8123

#### Issue #8579：禁用 provider 后旧运行配置未清理

自 2026-11-04 持续更新，涉及禁用配置与通道调用的一致性，还缺少降级、回退和外部错误提示。

https://github.com/agentscope-ai/QwenPaw/issues/8579

#### Issue #8570 之后的新增积压：#8830

虽为今日新开，但 Windows 孤儿进程会累积并阻断本地模型启动，潜在影响持续上升，建议按高优先级处理并增加跨版本升级、崩溃和强制终止测试。

https://github.com/agentscope-ai/QwenPaw/issues/8830

### 8.2 长期大型 PR

#### PR #8499：本地模型管理插件化

- **规模：** XXXL
- **状态：** Open
- **风险：** 涉及下载依赖、llama.cpp 安装、服务生命周期和旧配置迁移，合并前需要充分验证升级兼容性和故障恢复。

https://github.com/agentscope-ai/QwenPaw/pull/8499

#### PR #8472：Reranker 模型中心

- **规模：** XXXL
- **状态：** Open
- **风险：** 涉及设置界面、服务测试、多查询历史和自动验证，建议拆分或明确迁移策略，降低审查与回滚成本。

https://github.com/agentscope-ai/QwenPaw/pull/8472

#### PR #7719：记忆写入独立模型

- **规模：** XXL
- **状态：** Open
- **风险：** 涉及 ReMeLight 的模型注入及多个后台任务，需要验证失败降级、任务配置继承和成本统计。

https://github.com/agentscope-ai/QwenPaw/pull/7719

#### PR #8785：媒体内联预算与缩放

- **规模：** XXL
- **状态：** Open
- **风险：** 同时涉及字节预算、尺寸上限、拒绝后的二次缩放和遗漏报告，需防止图片处理行为回退。

https://github.com/agentscope-ai/QwenPaw/pull/8785

#### PR #8719：运行时 base-path 部署

- **规模：** XL
- **状态：** Open
- **风险：** 会影响 Console 静态资源、API 路由、CLI 和反向代理路径拼接；与今日两个 `/api` 路径 Issue 有较强关联，建议合并前开展端到端代理部署测试。

https://github.com/agentscope-ai/QwenPaw/pull/8719

### 8.3 维护建议

1. **优先关闭当日新增的 CLI 路径与健康检查缺陷**，它们范围小、影响明确，可快速降低主干分支回归率。  
   [#8832](https://github.com/agentscope-ai/QwenPaw/issues/8832) · [#8833](https://github.com/agentscope-ai/QwenPaw/issues/8833)

2. **为 Windows 本地模型建立进程守护与异常退出回收机制**，并将孤儿进程检测加入集成测试。  
   [#8830](https://github.com/agentscope-ai/QwenPaw/issues/8830)

3. **合并前优先完成 Console 窄屏修复与安全区回归测试**，避免视觉问题继续扩散。  
   [#8811](https://github.com/agentscope-ai/QwenPaw/issues/8811) · [#8823](https://github.com/agentscope-ai/QwenPaw/pull/8823)

4. **大型 PR 明确拆分边界和迁移说明**，尤其是本地模型插件化、记忆模型中心和 base-path 部署，避免多个架构变化同时进入同一版本。

5. **加强渠道、CLI 与 Console 的统一契约测试**，当前问题集中在 API 前缀、路由容量、审批回传和状态统计等跨层接口，适合通过端到端测试而非单模块单测覆盖。

---

## 今日结论

QwenPaw 今日呈现出典型的“高吞吐开发 + 回归集中暴露”状态：PR 数量和议题覆盖面都很高，渠道日志、技能回滚、媒体处理、记忆模型和本地模型架构均有实质推进；但新增缺陷显示 CLI、Console 配置组件及 Windows 进程治理仍有明显短板。当前项目健康度可评为 **中高**，最值得维护者关注的是 **当日新增回归的快速收敛、大型 PR 的审查拆分，以及安全门禁和 Provider 状态一致性**。在这些问题完成验证前，下一版本更适合进行小步发布，而不是直接引入大范围架构变更。

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/NousResearch/hermes-agent">NousResearch/hermes-agent</a></summary>

⚠️ 摘要生成失败。

</details>

<details>
<summary><strong>OpenHuman</strong> — <a href="https://github.com/tinyhumansai/openhuman">tinyhumansai/openhuman</a></summary>

# OpenHuman 项目动态日报

**日期：2026-11-20**  
**统计窗口：过去 24 小时**  
**项目：** [tinyhumansai/openhuman](https://github.com/tinyhumansai/openhuman)

---

## 1. 今日速览

- 过去 24 小时共更新 **1 个 Issue、4 个 PR**，另有 **3 个 PR 处于待合并状态、1 个 PR 已关闭**，整体开发活动较为活跃，主要集中在隐私模式、本地 AI 连接稳定性、语音转写和上下文压缩。
- 本周期没有新版本发布，当前变更仍处于代码合并或讨论阶段，尚未形成可验证的正式版本交付。
- 今日唯一有实质合并结果的是 PR [#8754](https://github.com/tinyhumansai/openhuman/pull/8754)，其已关闭，推动文档内容在上下文压缩时按实际文本长度估算，而非统一按图像块大小计费。
- 社区讨论集中在 Issue [#6870](https://github.com/tinyhumansai/openhuman/issues/6870) 及对应 PR [#8762](https://github.com/tinyhumansai/openhuman/pull/8762)：用户希望本地端点执行语音转写，同时确保录音不会离开设备。
- 项目健康度可评估为**中高**：问题修复和产品能力增强并行推进，但待合并 PR 较多，且若干 PR 自 2026 年 10 月创建后仍持续更新，表明合并与发布节奏可能偏慢。

---

## 3. 项目进展

### 已关闭 PR

#### PR #8754：按文档文本读取量估算上下文压缩线程大小

**链接：** [#8754](https://github.com/tinyhumansai/openhuman/pull/8754)  
**标签：** `rust-core`、`agent`  
**状态：** CLOSED  
**作者：** [@CodeGhost21](https://github.com/CodeGhost21)

该 PR 调整了无模型轮次的上下文压缩逻辑：

- `compact_bound_history` 不再对每个上传文档统一采用固定的图像大小权重，即约 **4096 字符 / 1000 tokens**。
- 改为根据文档旁缓存的文本读取内容估算实际大小。
- 传递给压缩逻辑的折叠阈值也会据此调整，避免文档正文被过度或不足计费。

**影响与价值：**

- 改善长文档、多附件场景下的 token 预算准确性。
- 减少不必要的压缩或折叠，提升上下文空间利用率。
- 直接影响代理运行时在处理大量文档时的成本、稳定性和行为一致性。

**推进程度：**  
这是过去 24 小时唯一有明确关闭结果的工作项，说明上下文压缩和 Rust 核心能力仍在持续优化。不过，“关闭”本身不等同于数据已明确进入主线，具体合并状态仍需结合仓库分支或提交历史确认。

### 待合并 PR 概览

| PR | 主题 | 状态 | 潜在影响 |
|---|---|---:|---|
| [#8762](https://github.com/tinyhumansai/openhuman/pull/8762) | 本地隐私模式下保持本地语音转写 | OPEN | 强化语音数据不出端能力 |
| [#8107](https://github.com/tinyhumansai/openhuman/pull/8107) | LM Studio 支持可选 API Key | OPEN | 改善受认证保护的本地上下文接入 |
| [#8205](https://github.com/tinyhumansai/openhuman/pull/8205) | 连接检查失败后恢复本地 AI 设置 | OPEN | 降低误操作造成配置丢失的风险 |

---

## 4. 社区热点

### 1. Issue #6870：隐私模式应允许使用本地 STT 端点

**链接：** [Issue #6870](https://github.com/tinyhumansai/openhuman/issues/6870)  
**作者：** [@ousher](https://github.com/ousher)  
**优先级：** P3  
**分类：** `needs-opinion`  
**来源：** External  
**状态：** OPEN  
**创建时间：** 2026-10-01  
**最近更新：** 2026-11-19  
**评论数：** 6  
**反应数：** 0

该 Issue 是本周期唯一更新的 Issue，也是讨论最充分的条目。

**核心诉求：**

- 当前 `local_only` 模式明确将语音列为例外，因为项目没有内置本地语音识别引擎。
- Issue **不要求重新引入 whisper.cpp**，而是希望支持用户自行运行的本地 STT 服务。
- 本地端点完成转写时，录音和音频数据仍不应离开设备。
- 该诉求与 PR [#8762](https://github.com/tinyhumansai/openhuman/pull/8762) 高度对应，已经从开放讨论进入实现阶段。

**背后的产品逻辑：**

- “本地推理、本地转写”是用户理解完整离线工作流的关键组成部分。
- 只保护模型推理、却仍需上传录音，会削弱隐私模式的整体承诺。
- 支持任意本地 STT 服务，比将大型识别引擎重新打包进项目更轻量，也更符合模块化架构。

**社区热度判断：**  
评论数在当前仓库活动中较高，但 👍 数仍为 0。说明问题获得了实质讨论，却尚未表现出强烈的公开共识或广泛点赞。维护者对需求边界、端点判定和隐私保证的口径仍可能需要进一步确认。

### 2. PR #8762：本地语音转写仅允许设备内端点

**链接：** [PR #8762](https://github.com/tinyhumansai/openhuman/pull/8762)  
**作者：** [@obchain](https://github.com/obchain)  
**标签：** `rust-core`、`voice`  
**状态：** OPEN

该 PR 是 Issue [#6870](https://github.com/tinyhumansai/openhuman/issues/6870) 的直接实现候选：

- 在 `local_only` 下允许 `localhost`、`127.0.0.1` 和 `::1` 等本机 STT 端点。
- 拒绝其他远程 STT 地址。
- 在录音发送前执行限制，而不是只在 UI 层提示。
- 同时覆盖 STT provider 构造和 hosted transcription 路径，降低绕过风险。

**关注点：**

- 本地判定必须避免错误地把局域网地址视为本机地址。
- 若端点通过代理、容器映射或自定义 URL 暴露，隐私边界需要清晰说明。
- 合并前宜补充针对 IPv4、IPv6、远程地址和配置变更的测试。

### 3. PR #8107：LM Studio 支持可选 API Key

**链接：** [PR #8107](https://github.com/tinyhumansai/openhuman/pull/8107)  
**作者：** [@obchain](https://github.com/obchain)  
**状态：** OPEN  
**优先级：** P3

**主要内容：**

- LM Studio 连接对话框新增可选 API Key。
- 密钥保存至 `local_ai.api_key`。
- 输入为空时清除已保存密钥。
- `/models` 探测请求通过 `Authorization: Bearer` 携带密钥。
- 面向启用 “Require Authentication” 的 LM Studio 服务。

**用户价值：**

- 支持更安全、更多用户启用的本地模型服务配置。
- 避免因服务端开启认证而无法完成连接测试。
- 与 OpenHuman 对“本地即受信任”的默认假设形成互补。

### 4. PR #8205：连接失败后保留原有本地 AI 设置

**链接：** [PR #8205](https://github.com/tinyhumansai/openhuman/pull/8205)  
**作者：** [@obchain](https://github.com/obchain)  
**状态：** OPEN  
**优先级：** P3

**主要内容：**

- Ollama、LM Studio、OMLX 连接检查失败时，不再保留本次失败尝试的 provider、endpoint 和 API key。
- 修改后的 `inference.update_local_settings` 会保留此前已成功使用的配置，包括密钥。
- 目标是让“连接失败”不再意外覆盖已有可用配置。

**用户价值：**

- 防止临时服务不可用时破坏当前工作流。
- 降低配置回滚和重复输入成本。
- 对本地运行环境中服务重启、网络波动或地址配置错误等常见场景尤其重要。

---

## 5. Bug 与稳定性

今日没有新建 Issue；以下为活跃 Issue 与对应修复 PR 所反映的问题。

### P2 / 高优先级：隐私模式下语音数据可能离开设备

- **问题入口：** [Issue #6870](https://github.com/tinyhumansai/openhuman/issues/6870)
- **修复 PR：** [PR #8762](https://github.com/tinyhumansai/openhuman/pull/8762)，**已有对应 fix PR，待合并**
- **风险描述：** `local_only` 模式下，若 STT 使用远程服务，音频可能被发送至设备之外，和用户对隐私模式的整体预期不一致。
- **现状：** PR 已在 provider 构造及 hosted transcription 路径增加限制，但尚未合并；实施细节和测试覆盖仍需审核。

### P3 / 中优先级：本地 AI 连接失败会覆盖既有设置

- **问题入口/修复：** [PR #8205](https://github.com/tinyhumansai/openhuman/pull/8205)，**已有 fix PR，待合并**
- **影响范围：** Ollama、LM Studio、OMLX。
- **风险描述：** 用户一次失败的连接尝试可能替换原本可用的 provider、endpoint 或 key，造成配置丢失和服务中断。
- **现状：** 修复方案明确，状态为 OPEN。

### P3 / 中低优先级：启用认证的 LM Studio 无法正常连接

- **问题入口/修复：** [PR #8107](https://github.com/tinyhumansai/openhuman/pull/8107)，**已有 fix PR，待合并**
- **影响范围：** 开启 “Require Authentication” 的 LM Studio 用户。
- **风险描述：** 缺少 API Key 参数和认证头时，连接测试或模型列表探测可能失败。
- **现状：** 修复方案已覆盖设置、存储与探测请求，待合并。

### 优化项：文档上下文估算不准确

- **修复 PR：** [PR #8754](https://github.com/tinyhumansai/openhuman/pull/8754)，**已关闭**
- **影响范围：** Rust 核心中的无模型轮次压缩、文档密集型代理任务。
- **风险描述：** 所有文档被按固定高权重计费，可能导致过早压缩、上下文浪费或 token 使用估算偏差。
- **现状：** 已形成针对实际文本读取量的修正方案。

---

## 6. 功能请求与路线图信号

### 完整本地语音工作流

**需求来源：** [Issue #6870](https://github.com/tinyhumansai/openhuman/issues/6870)  
**候选实现：** [PR #8762](https://github.com/tinyhumansai/openhuman/pull/8762)

**路线图信号：强**

该方向已经同时具备明确需求、技术实现和隐私边界设计，很可能成为下一批隐私与本地 AI 能力更新的重点。其定位不是引入内置 STT 引擎，而是允许连接用户自托管的本地服务。

**纳入下一版本的建议条件：**

- 明确哪些地址被视为“设备内”。
- 确保所有发送录音的路径都执行相同策略。
- 补充远程地址被拒绝以及本地地址被允许的测试。
- 给出 Docker、代理、局域网和自定义 URL 的配置说明。

### 本地模型服务认证支持

**需求来源/候选实现：** [PR #8107](https://github.com/tinyhumansai/openhuman/pull/8107)

**路线图信号：中高**

支持 LM Studio 的可选 API Key 能覆盖更严格的本机部署方式，属于配置兼容与安全增强，预计适合与本地 AI 设置修复一起进入后续版本。

**迁移注意事项：**

- 新字段应保持可选，避免破坏现有 LM Studio 配置。
- 空值需要明确表示“清除密钥”，并避免在日志或错误信息中泄露。
- 已有 provider 配置若没有 key，应继续兼容无认证服务。

### 本地 AI 配置的事务式更新

**需求来源/候选实现：** [PR #8205](https://github.com/tinyhumansai/openhuman/pull/8205)

**路线图信号：中高**

“连接成功后再提交设置”是稳定性和用户数据安全的基础行为。该修复虽然不是大型新功能，但优先级高于普通体验优化，适合优先合并。

### 文档感知的上下文预算

**候选实现：** [PR #8754](https://github.com/tinyhumansai/openhuman/pull/8754)

**路线图信号：中**

这一优化能提高代理在长文档场景下的运行效率，并与隐私、语音等功能相比更偏底层。建议在确认关闭原因和合并状态后，评估是否已纳入当前主线或需要重新提交。

---

## 7. 用户反馈摘要

基于 Issue [#6870](https://github.com/tinyhumansai/openhuman/issues/6870) 的 6 条评论及关联 PR，可提炼出以下用户诉求：

1. **隐私模式不能只覆盖文本模型推理。**  
   用户希望在本地模式下，录音、转写和模型推理可以形成完整闭环；否则“本地模式”仍可能通过语音路径泄露数据。

2. **用户已有本地 STT 能力，不希望被强制使用云端服务。**  
   Issue 明确反对重新引入 whisper.cpp 或类似重型内置引擎，而是希望项目支持用户自行运行的本地端点。这体现出用户对轻量、模块化和可控制部署的偏好。

3. **隐私保证必须落实在技术层，而不只是 UI 提示。**  
   关联 PR 强调在录音发送前拒绝不合规端点，这说明真实需求不仅是“提供开关”，还包括保证所有语音传输路径都不会绕过限制。

4. **本地服务应能够启用认证。**  
   PR [#8107](https://github.com/tinyhumansai/openhuman/pull/8107) 表明，用户的 LM Studio 部署可能启用 “Require Authentication”；OpenHuman 需要支持 Bearer API Key，而不是假定本机服务永远无需凭据。

5. **失败操作不应破坏已有可用配置。**  
   PR [#8205](https://github.com/tinyhumansai/openhuman/pull/8205) 反映出用户对配置持久化和可恢复性的明确期待：一次连接检查失败不应导致原有 endpoint、provider 或 key 被覆盖。

6. **满意度信号仍有限。**  
   核心 Issue 有 6 条评论，但点赞数为 0，暂不能据此判断广泛满意度。当前更明确的信号是用户对隐私、本地化和配置可靠性的持续要求。

---

## 8. 待处理积压

### 长期开放的 Issue

#### Issue #6870：本地 STT 与隐私模式

- **链接：** [Issue #6870](https://github.com/tinyhumansai/openhuman/issues/6870)
- **创建时间：** 2026-10-01
- **最近更新：** 2026-11-19
- **评论数：** 6
- **状态：** OPEN，`needs-opinion`
- **积压判断：** 已开放约 7 周，虽有持续讨论和实现 PR，但仍需维护者明确产品边界、验收标准与合并计划。

### 长期待合并 PR

#### PR #8107：LM Studio 可选 API Key

- **链接：** [PR #8107](https://github.com/tinyhumansai/openhuman/pull/8107)
- **创建时间：** 2026-10-19
- **最近更新：** 2026-11-19
- **状态：** OPEN
- **积压判断：** 已开放约 1 个月。功能范围较明确，建议尽快完成审查并确定是否进入下一版本。

#### PR #8205：失败连接后恢复本地 AI 设置

- **链接：** [PR #8205](https://github.com/tinyhumansai/openhuman/pull/8205)
- **创建时间：** 2026-10-22
- **最近更新：** 2026-11-19
- **状态：** OPEN
- **积压判断：** 已开放约 1 个月，属于明确的稳定性和数据保护修复，建议提高审查优先级。

#### PR #8762：本地语音转写隐私限制

- **链接：** [PR #8762](https://github.com/tinyhumansai/openhuman/pull/8762)
- **创建时间：** 2026-11-19
- **状态：** OPEN
- **积压判断：** 新开 PR，尚未形成长期积压，但与开放时间较长的 Issue [#6870](https://github.com/tinyhumansai/openhuman/issues/6870) 绑定，应避免需求讨论与实现长期脱节。

### 维护建议

1. 优先审查并合并 [PR #8205](https://github.com/tinyhumansai/openhuman/pull/8205)，降低配置丢失风险。
2. 对 [PR #8762](https://github.com/tinyhumansai/openhuman/pull/8762) 给出明确的安全边界和测试验收标准，并同步更新 Issue [#6870](https://github.com/tinyhumansai/openhuman/issues/6870) 的结论。
3. 对 [PR #8107](https://github.com/tinyhumansai/openhuman/pull/8107) 确认兼容性与密钥存储策略，避免因认证增强引入新的配置迁移问题。
4. 明确 [PR #8754](https://github.com/tinyhumansai/openhuman/pull/8754) 的关闭原因：若为已合并或被替代，建议在 PR 中标注；若未进入主线，应重新安排审查。
5. 当前无新版本发布，建议尽快将已审查 PR 汇总到明确版本中，以缩短“代码已准备但用户无法获得收益”的交付周期。

---

## 今日结论

OpenHuman 今日的活跃重点是**将“本地优先”从模型推理扩展到语音链路，并提升本地 AI 配置的可靠性与兼容性**。开发活动数量不低，且方向与用户诉求匹配；但 3 个关键 PR 仍待合并、1 个 PR 已开放一个月，且今日没有版本发布，显示项目在**审查、收敛和发布节奏**上仍有提升空间。当前最值得关注的组合是：

- 隐私能力闭环：[Issue #6870](https://github.com/tinyhumansai/openhuman/issues/6870) + [PR #8762](https://github.com/tinyhumansai/openhuman/pull/8762)
- 本地服务认证：[PR #8107](https://github.com/tinyhumansai/openhuman/pull/8107)
- 配置稳定性：[PR #8205](https://github.com/tinyhumansai/openhuman/pull/8205)
- 上下文成本优化：[PR #8754](https://github.com/tinyhumansai/openhuman/pull/8754)

</details>

---
*本日报由 [Big Model Radar](https://github.com/96loveslife/big_model_radar) 自动生成。*
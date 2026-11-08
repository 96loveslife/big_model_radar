# OpenClaw 生态日报 2026-11-08

> Issues: 500 | PRs: 500 | 覆盖项目: 8 个 | 生成时间: 2026-11-08 05:27 UTC

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

**日期：2026-11-08**  
**数据范围：过去 24 小时 GitHub 活动**

---

## 1. 今日速览

- 过去 24 小时共有 **500 条 Issue 更新**，其中 **425 条新开或活跃、75 条关闭**；同期有 **500 条 PR 更新**，其中 **324 条待合并、176 条已合并或关闭**，仓库处于极高活跃状态。
- 今日没有正式版本发布。合并与关闭的 PR 主要围绕 **会话与调度可靠性、Web UI 性能、Android/iOS 客户端体验、流式模型兼容性和知识插件修复**。
- 社区讨论仍集中在几个高风险共性问题：**SQLite/session 状态稳定性、消息静默丢失、子代理任务失联、Gateway 重启失败及移动端实时语音中断**。
- 活跃度高并不等于健康度完全良好：大量问题带有 `no-new-fix-pr`、`needs-maintainer-review`、`needs-live-repro` 等标签，说明部分高优先级故障仍缺少可验证修复。
- 综合判断：**开发吞吐旺盛，但核心运行时的可靠性和回归治理仍是主要健康度风险**，尤其是 SQLite、session lane、消息投递和 Gateway 生命周期问题。

---

## 2. 版本发布

过去 24 小时**无新版本发布**，因此暂无正式 Release、破坏性变更或迁移说明。

不过 Issue 中提及 **2026.11.5-beta.1** 已包含部分 SQLite header-probe 修复，但受旧版 updater 超时路径阻挡，受影响安装无法通过 `openclaw update` 到达修复版本：

- [#193962 — Fix for the SQLite header-probe timeout can't be reached from 2026.10.10](https://github.com/openclaw/openclaw/issues/193962)

---

## 3. 项目进展

今日 PR 更新量达到 **500 条**，其中 **176 条已合并或关闭**；在已展示的 PR 中，多项已关闭变更已推进到主线或准备进入维护者审查。

### 3.1 已合并或关闭的重要变更

1. **保留修复机制可处理候选 transcript 的后续重写**
   - PR [#195029](https://github.com/openclaw/openclaw/pull/195029) 已关闭。
   - 该修复允许 retained repair 在失败候选仍被选为发布版本时，继续处理事故后的 transcript 重写，降低“修复流程被候选版本锁死”的风险。

2. **缓存系统提示词不再包含工作区绝对路径**
   - PR [#193300](https://github.com/openclaw/openclaw/pull/193300) 已关闭，涉及 [#191485](https://github.com/openclaw/openclaw/issues/191485)。
   - 目标是让不同工作区中指令相同的 Agent 共享 provider prompt cache，减少重复缓存并改善成本与响应效率。

3. **媒体路径边界统一**
   - PR [#195009](https://github.com/openclaw/openclaw/pull/195009) 已关闭，修复缺失媒体路径与允许根目录采用不同 canonicalization 规则的问题，关联 [#194406](https://github.com/openclaw/openclaw/issues/194406)。

4. **Knowledge 插件清理 gzip 失败后的临时数据库**
   - PR [#194706](https://github.com/openclaw/openclaw/pull/194706) 已关闭。
   - 修复 source-manifest snapshot 在 gzip 输出失败时遗留 scratch SQLite 数据库的问题。

5. **Gateway worker prompt 测试夹具修复**
   - PR [#195025](https://github.com/openclaw/openclaw/pull/195025) 已关闭。
   - 修复 linked checkout 隔离测试未创建对应 Git 关系而失败的问题，属于测试基础设施维护。

### 3.2 等待维护者审查的高价值修复

1. **冷启动 session reclamation 不再因授权耗时而回滚**
   - PR [#194742](https://github.com/openclaw/openclaw/pull/194742)
   - 目标：避免 owner 在 5 秒内未完成授权时，SQLite session reclamation checkpoint 过期并回滚。
   - 对应高热 Issue：[#166634](https://github.com/openclaw/openclaw/issues/166634)。

2. **Codex 原生 receipt 结算后避免重复 completion**
   - PR [#194748](https://github.com/openclaw/openclaw/pull/194748)
   - 目标：消除 Codex 已消费 child result 后，receipt 与 projection settlement 竞态导致的父代理重复完成通知。
   - 与高热 Issue [#44925](https://github.com/openclaw/openclaw/issues/44925) 的“子代理完成结果静默丢失/重复投递”直接相关。

3. **Cron occurrence 结束后，跨 session 委派回复不再中断**
   - PR [#194798](https://github.com/openclaw/openclaw/pull/194798)
   - 修复另一个 session 通过 `sessions_send` 委派任务后，原 scheduled run 结束导致接收方回复报：
     `Cron occurrence source authority is no longer active`。

4. **Android 支持在当前回复运行时新建聊天**
   - PR [#191372](https://github.com/openclaw/openclaw/pull/191372)
   - 新聊天继承 provider、model、thinking 和 Fast Mode；显式 worktree 创建仍会等待父任务结束。
   - 关联 Issue：[#191339](https://github.com/openclaw/openclaw/issues/191339)。

5. **接受流式 provider 返回的完整多行 JSON**
   - PR [#195019](https://github.com/openclaw/openclaw/pull/195019)
   - 修复 OpenAI-compatible provider 返回 pretty-printed JSON 时，JSON-to-SSE fallback 只给第一行添加 `data:`，导致 SDK 收到截断 JSON、触发 `SyntaxError`。

6. **Web UI 减少工具密集型回复期间的卡顿**
   - PR [#195034](https://github.com/openclaw/openclaw/pull/195034)
   - 工具调用密集回复会反复扫描完整历史以确定 sibling tool 位置；该 PR 在 transcript snapshot 内共享 placement 查询，降低主线程压力。

7. **多 Agent Gateway 上可创建或编辑 agent-less automation**
   - PR [#194890](https://github.com/openclaw/openclaw/pull/194890)
   - 修复设置 `agents.defaults.systemAgent.agentId` 后，`openclaw automations add/edit` 因多 Agent 选择歧义而失败。

8. **Cron 公告链接检查可配置**
   - PR [#194794](https://github.com/openclaw/openclaw/pull/194794)
   - 新增 `cron.announce.inspectLinks`，支持 `always`、`errors`、`never`，默认 `always` 保持兼容。

9. **iOS Claude CLI 工具调用结果显示**
   - PR [#191878](https://github.com/openclaw/openclaw/pull/191878)
   - 修复 iOS 中工具调用已有输出但界面仍显示“No result”。

10. **Provider 401 时优先展示其明确恢复指引**
    - PR [#194820](https://github.com/openclaw/openclaw/pull/194820)
    - 避免将“创建新 API Key”等 provider 自定义建议替换为泛化的重新登录命令。

### 3.3 整体推进评估

项目在一天内完成了大量低层级、边界清晰和可独立验证的修复，尤其集中在：

- **会话、调度与多 Agent 编排**
- **Web/Android/iOS 交互体验**
- **流式 provider 兼容**
- **知识插件与缓存效率**

但核心 SQLite、Gateway 重启、消息丢失和子代理生命周期等高严重度问题大多仍停留在 **Issue 或待合并 PR** 阶段，不能仅依据高 PR 数判断运行时稳定性已经充分改善。

---

## 4. 社区热点

### 4.1 Issues 热点

| 热度 | Issue | 评论数 | 核心诉求 |
|---|---|---:|---|
| 1 | [#177656 — Native host exec shared-state integrity-admission error](https://github.com/openclaw/openclaw/issues/177656) | 32 | 稳定版 2026.10.5 至少出现 28 次完整性准入错误，且缺少 child result 证据 |
| 2 | [#44925 — Subagent completion silently lost](https://github.com/openclaw/openclaw/issues/44925) | 31 | 子代理超时或完成通知失败后，无重试、无通知、无自动恢复 |
| 3 | [#150635 — Short-term recall nightly eviction blocks dreaming promotion](https://github.com/openclaw/openclaw/issues/150635) | 26 | 512 条短期 recall 上限导致 nightly dreaming 永远无法晋升内容 |
| 4 | [#119720 — Synchronous persistence blocks Gateway event loop](https://github.com/openclaw/openclaw/issues/119720) | 25 | Agent persistence 和 transcript maintenance 在规模化运行时阻塞 Gateway |
| 5 | [#166634 — Late reclamation checkpoint failure](https://github.com/openclaw/openclaw/issues/166634) | 25 | 崩溃恢复后 agent 永久不可用，SQLite reclamation checkpoint 过期 |
| 6 | [#191944 — macOS gateway stop fails](https://github.com/openclaw/openclaw/issues/191944) | 24 | `gateway stop` 与 `stop --force` 均无法检查进程祖先关系 |
| 7 | [#126360 — AgentSelectionRequiredError floods logs](https://github.com/openclaw/openclaw/issues/126360) | 20 | 显式多 Agent ownership 下，全局 RPC 和系统任务缺少 `agentId` 目标 |
| 8 | [#50093 — WhatsApp missed-message backfill](https://github.com/openclaw/openclaw/issues/50093) | 20 | 重连期间群组消息未投递、未记录，需要补偿回填 |
| 9 | [#48003 — Steer mode does not inject mid-turn](https://github.com/openclaw/openclaw/issues/48003) | 20 | 主会话运行中无法按 steer 模式即时插入用户消息 |
| 10 | [#111897 — Concurrent runs cause duplicate replies](https://github.com/openclaw/openclaw/issues/111897) | 19 | 同一 session lane 并发执行导致重复或冗余回复 |

这些热点体现出用户对智能体系统的核心期待不是“能调用更多工具”，而是：

- **任务结果必须可追踪、不可静默丢失**
- **消息必须有重试、回填或幂等保障**
- **单会话与多 Agent 路由必须严格互斥**
- **后台持久化和内存整理不能拖垮前台响应**
- **安装、更新、停止和恢复必须具备确定性**

### 4.2 PR 热点

当前 PR 列表的评论数大多未公开，因此无法严格以评论数排序；按问题覆盖面与潜在影响筛选，主要热点如下：

- [#195028 — Compaction 保留近期工具输出中的 Agent 决策](https://github.com/openclaw/openclaw/pull/195028)  
  解决长会话压缩后丢失决策、TODO 和 ID，直接影响长期 Agent 的任务连续性。

- [#195034 — Web UI 工具密集回复性能优化](https://github.com/openclaw/openclaw/pull/195034)  
  面向高频工具调用和多块输出场景，关注输入、滚动和渲染期间的响应流畅度。

- [#194742 — 冷启动 session reclamation 修复](https://github.com/openclaw/openclaw/pull/194742)  
  直接对应 [#166634](https://github.com/openclaw/openclaw/issues/166634) 的高热崩溃恢复问题。

- [#194748 — Codex 子任务完成去重](https://github.com/openclaw/openclaw/pull/194748)  
  对应子代理完成通知的丢失与重复两类风险。

- [#167161 — 修复 Linux Codex app-server 僵尸进程累积](https://github.com/openclaw/openclaw/pull/167161)  
  关联 [#97616](https://github.com/openclaw/openclaw/issues/97616)，反映长周期 Gateway 中进程生命周期治理的重要性。

- [#195027 — Knowledge 导航排除图片 alt 链接](https://github.com/openclaw/openclaw/pull/195027)  
  关联 [#195013](https://github.com/openclaw/openclaw/issues/195013)，属于知识图谱导航准确性和内容卫生问题。

---

## 5. Bug 与稳定性

以下按严重程度排序。“已有 fix PR”仅表示数据中存在明确关联 PR，不等同于已经合并或经过线上验证。

### P0 / 发布阻断级

1. **内置 WeCom 插件无法安装**
   - Issue：[#137177](https://github.com/openclaw/openclaw/issues/137177)
   - `@wecom/wecom-openclaw-plugin@2026.7.2` 无法成功安装，影响企业微信集成。
   - **Fix PR：数据中未见明确关联 PR。**

2. **SQLite header-probe 修复无法通过 updater 到达**
   - Issue：[#193962](https://github.com/openclaw/openclaw/issues/193962)
   - 2026.10.10 的 updater 自身仍使用 10 秒探测路径，导致用户升级到含修复的 beta 也失败。
   - **Fix PR：未见明确关联 PR。**

3. **SQLite 损坏在重建数据库后 15–24 小时内复发**
   - Issue：[#126821](https://github.com/openclaw/openclaw/issues/126821)
   - 包含 freelist miscount、Gateway “paralyzed” 且不退出等严重表现。
   - **Fix PR：数据中未见明确、已验证的关联 PR。**

4. **Codex OAuth 刷新成功，但 cron/heartbeat 因 10 秒超时失败**
   - Issue：[#89278](https://github.com/openclaw/openclaw/issues/89278)
   - 模型状态探测可用，但后台运行仍无法完成认证刷新。
   - **Fix PR：数据中未见明确关联 PR。**

### P1 / 高严重度

1. **Native host exec 共享状态完整性错误**
   - Issue：[#177656](https://github.com/openclaw/openclaw/issues/177656)
   - 稳定版 2026.10.5 出现至少 28 次失败，可能伴随 child effect 状态丢失。
   - **Fix PR：未见明确关联 PR。**

2. **子代理完成结果静默丢失**
   - Issue：[#44925](https://github.com/openclaw/openclaw/issues/44925)
   - 无 retry、notification、auto-restart。
   - **已有相关 PR：[#194748](https://github.com/openclaw/openclaw/pull/194748)，主要覆盖 Codex receipt/重复完成路径，未必覆盖 Issue 中全部失败模式。**

3. **Gateway event loop 被同步持久化与 transcript 维护阻塞**
   - Issue：[#119720](https://github.com/openclaw/openclaw/issues/119720)
   - 规模增大后出现明显阻塞，影响全局请求处理。
   - **Fix PR：数据中未见明确合并修复。**

4. **崩溃恢复后 session reclamation checkpoint 过期**
   - Issue：[#166634](https://github.com/openclaw/openclaw/issues/166634)
   - agent 会持续拒绝 `chat.history`、`chat.metadata`、`models.list` 等请求。
   - **已有 PR：[#194742](https://github.com/openclaw/openclaw/pull/194742)，待维护者审查。**

5. **macOS Gateway 停止命令失败**
   - Issue：[#191944](https://github.com/openclaw/openclaw/issues/191944)
   - `stop` 和 `stop --force` 均报进程祖先检查失败。
   - **Fix PR：未见明确关联 PR。**

6. **WhatsApp 重连后漏消息**
   - Issue：[#50093](https://github.com/openclaw/openclaw/issues/50093)
   - 断线窗口内的群消息既不投递也不入日志。
   - **Fix PR：数据中未见明确关联 PR。**

7. **Steer 模式无法在主会话运行中注入消息**
   - Issue：[#48003](https://github.com/openclaw/openclaw/issues/48003)
   - 用户只能等待当前 turn 结束，交互实时性受损。
   - **Fix PR：数据中未见明确关联 PR。**

8. **同一 session lane 并发运行导致重复回复**
   - Issue：[#111897](https://github.com/openclaw/openclaw/issues/111897)
   - 负载下互斥失效，造成重复和冗余交付。
   - **Fix PR：数据中未见明确关联 PR。**

9. **Docker 绑定 Windows 驱动器时启动失败**
   - Issue：[#193262](https://github.com/openclaw/openclaw/issues/193262)
   - atomic write 后 `ENOENT fstat`，影响 Docker Desktop/WSL2 用户。
   - **Fix PR：数据中未见明确关联 PR。**

10. **延迟配置重载的 SIGUSR1 重启失败**
    - Issue：[#144336](https://github.com/openclaw/openclaw/issues/144336)
    - 报错包含 global singleton lifecycle reset 与 child cleanup identity lost。
    - **Fix PR：未见明确关联 PR。**

11. **Telegram 网络失败后消息仅尝试一次即 dead-letter**
    - Issue：[#125764](https://github.com/openclaw/openclaw/issues/125764)
    - 完成通知和 announce 回复可能静默丢失。
    - **Fix PR：未见明确关联 PR。**

12. **Android Talk 在工具调用或等待期间丢失 live session**
    - Issue：[#131768](https://github.com/openclaw/openclaw/issues/131768)、[#138272](https://github.com/openclaw/openclaw/issues/138272)
    - 覆盖普通等待和“Realtime provider output has no live response owner”两类故障。
    - **Fix PR：未见明确关联 PR。**

13. **SQLite 并发写句柄导致约 33 秒 event-loop 停顿**
    - Issue：[#117262](https://github.com/openclaw/openclaw/issues/117262)
    - 同一进程存在 3 个并发 write-mode handle，WAL 和 checkpoint 压力显著。
    - **Fix PR：数据中未见明确关联 PR。**

14. **Gateway RSS 持续增长且内部阈值监控不触发**
    - Issue：[#182369](https://github.com/openclaw/openclaw/issues/182369)
    - 约 0.1 GiB/h 增长，最终只能重启释放。
    - **Fix PR：数据中未见明确关联 PR。**

### P2 / 中等严重度

- [#150635 — short-term recall 夜间驱逐阻碍 dreaming promotion](https://github.com/openclaw/openclaw/issues/150635)：**无明确 fix PR**。
- [#38327 — Vertex/Gemini 3.1 Pro Preview 出现 `Cannot convert undefined or null to object`](https://github.com/openclaw/openclaw/issues/38327)：**未见明确关联 PR**。
- [#123792 — CLI backend assistant turn 重复渲染](https://github.com/openclaw/openclaw/issues/123792)：**未见明确关联 PR**。
- [#121953 — DeepSeek cron agent turn 因消息前缀被降优先级并卡顿](https://github.com/openclaw/openclaw/issues/121953)：**未见明确关联 PR**。
- [#74586 — AM embedded run 将 memory_search timeout 误判为任务超时](https://github.com/openclaw/openclaw/issues/74586)：**未见明确关联 PR**。
- [#167557 — npm 更新后插件迁移无法收敛](https://github.com/openclaw/openclaw/issues/167557)：**未见明确关联 PR**。
- [#104719 — memory-wiki fallback 忽略工具 deadline](https://github.com/openclaw/openclaw/issues/104719)：**数据中标注已有 linked PR，需进一步确认覆盖范围**。
- [#101929 — context overflow 估算明显高于实际计费用量](https://github.com/openclaw/openclaw/issues/101929)：主分支已有修复 [#168338](https://github.com/openclaw/openclaw/pull/168338)，Issue 仍保持开放，可能还有剩余边界。
- [#194662 — Notification wake 虚构发送者并维持虚构 thread](https://github.com/openclaw/openclaw/issues/194662)：**未见明确 fix PR**。
- [#114913 — memory search 未及时回退 FTS](https://github.com/openclaw/openclaw/issues/114913)：**未见明确关联 PR**。
- [#54409 — Feishu per-chat 串行队列破坏 collect batching](https://github.com/openclaw/openclaw/issues/54409)：**未见明确关联 PR**。
- [#48920 — Live Docs 描述领先于发布版本](https://github.com/openclaw/openclaw/issues/48920)：**未见明确关联 PR**。
- [#72015 — active-memory/QMD 初始化拖慢多 Agent Gateway](https://github.com/openclaw/openclaw/issues/72015)：**未见明确关联 PR**。

### 稳定性判断

今日最值得警惕的是：多个高严重度 Issue 仍带有 `no-new-fix-pr` 或 `needs-live-repro`，且问题集中在相同的核心链路：

**SQLite 写入 → session reclaim/persist → Gateway event loop → 消息投递 → 子代理完成通知**

这说明问题可能并非孤立插件缺陷，而是运行时共享基础层的系统性问题。建议维护者按这一链路进行统一根因分析，而不是逐个症状修补。

---

## 6. 功能请求与路线图信号

### 6.1 高概率进入近期版本

1. **Android 回复运行期间创建新聊天**
   - Issue：[#191339](https://github.com/openclaw/openclaw/issues/191339)
   - PR：[#191372](https://github.com/openclaw/openclaw/pull/191372)
   - 已有截图证明且标注 proof sufficient，进入近期版本的概率较高。

2. **Cron 公告链接检查策略**
   - PR：[#194794](https://github.com/openclaw/openclaw/pull/194794)
   - 新增严格配置且默认行为兼容，属于低风险、易回滚的功能增强。

3. **动态模型发现**
   - Issue：[#10687](https://github.com/openclaw/openclaw/issues/10687)
   - 目标是让 OpenRouter 等快速变化目录摆脱静态模型清单。
   - 仍属于较大的架构性功能，且需处理权限、可用性和模型选择语义，进入下一正式版本的把握一般。

4. **Memory recall/index 路径排除策略**
   - Issue：[#101422](https://github.com/openclaw/openclaw/issues/101422)
   - 允许 markdown-first 工作区保留 canonical memory pages，同时排除 runtime/generated artifacts。
   - 与 Memory、Dreams、Recall 路线高度相关，但需要产品语义确认。

5. **Dreams 页面由 memory slot owner 驱动**
   - Issue：[#138366](https://github.com/openclaw/openclaw/issues/138366)
   - 通过 `MemoryPluginCapability` 提供 dreaming provider，是 Memory 插件化的重要方向。
   - 更可能作为插件能力演进的中期目标，而非短期补丁。

6. **Agent 自主触发上下文压缩**
   - Issue：[#6757](https://github.com/openclaw/openclaw/issues/6757)
   - 对长任务自主 Agent 很有价值，但需要定义触发阈值、成本和安全边界。
   - PR [#195028](https://github.com/openclaw/openclaw/pull/195028) 已开始解决压缩后的决策丢失，说明相关能力正在活跃开发。

### 6.2 需求明确但仍需产品决策

- **Control UI 快捷键可配置**：[#163739](https://github.com/openclaw/openclaw/issues/163739)。已有 linked PR，但需确定配置格式及跨平台行为。
- **Tool schema token 开销优化**：[#14785](https://github.com/openclaw/openclaw/issues/14785)。每个 session 约 3,500 token 的固定成本，对大规模部署价值很高，但涉及工具发现机制。
- **Onboarding 强制配置 Memory/Embedding**：[#16670](https://github.com/openclaw/openclaw/issues/16670)。可能作为易用性改进纳入，但“强制”会降低首次启动成功率，需谨慎。
- **Skill Workshop 大 session context budget/skip policy**：[#150238](https://github.com/openclaw/openclaw/issues/150238)。与自动压缩能力相关，可能随 compaction 路线一起推进。
- **Model inventory 显示手工选择权限**：[#194749](https://github.com/openclaw/openclaw/pull/194749) 对应 [#194738](https://github.com/openclaw/openclaw/issues/194738)。虽然属于小修复，却能避免用户误选不可手工调用的模型。
- **推荐 canonical DeepSeek Flash**：[#194965](https://github.com/openclaw/openclaw/pull/194965) 对应 [#194819](https://github.com/openclaw/openclaw/issues/194819)。小型 catalog 修复，近期合入可能性较高。

### 6.3 尚无明确开发迹象

- **WhatsApp 重连漏消息回填**：[#50093](https://github.com/openclaw/openclaw/issues/50093)
- **Steer mode 真中途注入**：[#48003](https://github.com/openclaw/openclaw/issues/48003)
- **自动压缩工具**：[#6757](https://github.com/openclaw/openclaw/issues/6757) 尚无专门 PR
- **Memory Wiki dreaming provider**：[#138366](https://github.com/openclaw/openclaw/issues/138366) 尚无专门 PR

---

## 7. 用户反馈摘要

### 真实使用场景

- **长期运行的自托管 Gateway**：用户运行数十个 cron、isolated agent、浏览器自动化和 Discord 通道，反馈 RSS 以约 **0.1 GiB/h** 增长，只能靠重启维持：
  [#182369](https://github.com/openclaw/openclaw/issues/182369)。

- **Docker Desktop / WSL2 用户**：将 `~/.openclaw` 挂载到 Windows 驱动器后，从 2026.9.3 起多个版本启动失败：
  [#193262](https://github.com/openclaw/openclaw/issues/193262)。

- **macOS 本地服务用户**：Intel x64 上无法正常执行 `gateway stop`，被迫改用 managed update/handoff 或额外终端：
  [#191944](https://github.com/openclaw/openclaw/issues/191944)。

- **多 Agent Telegram forum bot**：子代理完成通知失败后，用户不知道任务是否已结束，也无法自动恢复：
  [#44925](https://github.com/openclaw/openclaw/issues/44925)。

- **Android 语音交互用户**：工具调用或等待期间实时语音掉线，用户已经转向 Discord voice 作为替代方案：
  [#131768](https://github.com/openclaw/openclaw/issues/131768)、[#138272](https://github.com/openclaw/openclaw/issues/138272)。

- **WhatsApp 群组管理用户**：网络重连期间错失群消息，且没有日志或补偿机制：
  [#50093](https://github.com/openclaw/openclaw/issues/50093)。

- **Markdown/知识库用户**：希望排除生成文件和运行时产物，同时保留核心知识页面的 recall 与 search：
  [#101422](https://github.com/openclaw/openclaw/issues/101422)。

### 主要不满意点

1. **“静默失败”比明确报错更不可接受**  
   子代理完成、Telegram 发送、WhatsApp 重连、inbound turn 丢弃均可能没有用户可见提示：
   [#44925](https://github.com/openclaw/openclaw/issues/44925)、[#125764](https://github.com/openclaw/openclaw/issues/125764)、[#112259](https://github.com/openclaw/openclaw/issues/112259)。

2. **更新路径不能可靠到达已有修复**  
   用户即使知道 beta 中已包含修复，旧 updater 的探测超时仍会阻止升级：
   [#193962](https://github.com/openclaw/openclaw/issues/193962)。

3. **文档、UI 与实际版本存在偏差**  
   例如 live docs 提前描述尚未发布的 heartbeat 配置：
   [#48920](https://github.com/openclaw/openclaw/issues/48920)。

4. **高并发和多 Agent 场景下语义不稳定**  
   包括 agent 路由歧义、session lane 并发、重复回复、cron authority 提前失效：
   [#126360](https://github.com/openclaw/openclaw/issues/126360)、[#111897](https://github.com/openclaw/openclaw/issues/111897)、[#194798](https://github.com/openclaw/openclaw/pull/194798)。

5. **Memory 系统存在性能与一致性反差**  
   CLI 搜索可用，但工具调用持续 15 秒超时；dreaming promotion 又被短期 recall 容量上限阻塞：
   [#128140](https://github.com/openclaw/openclaw/issues/128140)、[#150635](https://github.com/openclaw/openclaw/issues/150635)。

### 相对积极信号

- Android 新聊天功能已有明确截图证明，用户反馈正从“只能在回复结束后切换会话”转向可并行组织任务：
  [#191372](https://github.com/openclaw/openclaw/pull/191372)。
- 近期修复开始系统性处理 child receipt、session reclamation 和跨 session 委派，说明团队已从单点 UI 修复转向编排一致性：
  [#194748](https://github.com/openclaw/openclaw/pull/194748)、[#194742](https://github.com/openclaw/openclaw/pull/194742)、[#194798](https://github.com/openclaw/openclaw/pull/194798)。
- Web UI 性能 PR 明确针对真实工具密集型工作负载，而非纯基准指标：
  [#195034](https://github.com/openclaw/openclaw/pull/195034)。

---

## 8. 待处理积压

### 8.1 高优先级且长期未闭环

1. **子代理完成静默丢失**
   - [#44925](https://github.com/openclaw/openclaw/issues/44925)
   - 2026-03-13 创建，影响 session state 与 message loss。
   - 需拆分“完成通知失败”“timeout 后无恢复”“child result 未持久化”三个子问题，并分别给出 retry、reconcile 和用户告警。

2. **同步持久化阻塞 Gateway event loop**
   - [#119720](https://github.com/openclaw/openclaw/issues/119720)
   - 2026-08-05 创建，属于规模化部署的核心瓶颈。
   - 建议明确关键路径是否必须同步，并制定延迟写、队列化和背压策略。

3. **WhatsApp 重连消息回填**
   - [#50093](https://github.com/openclaw/openclaw/issues/50093)
   - 2026-03-19 创建，长期缺少补偿语义。
   - 需定义保留窗口、幂等键、历史拉取接口及重复消息去重。

4. **Steer 模式中途注入**
   - [#48003](https://github.com/openclaw/openclaw/issues/48003)
   - 2026-03-16 创建，核心交互承诺与实际行为不一致。
   - 需要设计 tool-boundary cancellation、partial turn 合并及用户消息优先级。

5. **SQLite corruption 复发**
   - [#126821](https://github.com/openclaw/openclaw/issues/126821)
   - 2026-08-20 创建，数据损坏与 Gateway 假死并存。
   - 应作为独立稳定性专项，提供最小复现、数据库写句柄审计和长期 soak test。

6. **Codex OAuth refresh timeout**
   - [#89278](https://github.com/openclaw/openclaw/issues/89278)
   - 2026-06-02 创建，模型列表和 probe 成功但后台任务失败。
   - 建议统一 CLI、cron、heartbeat 的认证刷新预算与可取消机制。

### 8.2 需要维护者推动复现或审查

- [#177656 — Native host exec integrity admission](https://github.com/openclaw/openclaw/issues/177656)：稳定版已有多次真实报告，应尽快确认 shared-state 完整性准入的版本边界。
- [#166634 — Late reclamation checkpoint failure](https://github.com/openclaw/openclaw/issues/166634)：已有 PR [#194742](https://github.com/openclaw/openclaw/pull/194742)，需要真实崩溃恢复场景验证。
- [#126360 — AgentSelectionRequiredError 日志洪泛](https://github.com/openclaw/openclaw/issues/126360)：explicit ownership 已是正式能力，应为全局 RPC 明确默认或错误目标选择规则。
- [#111897 — 同 session lane 并发执行](https://github.com/openclaw/openclaw/issues/111897)：需复现负载下互斥失效，并测试 session lock 与 queue 的边界。
- [#191944 — macOS Gateway stop 失败](https://github.com/openclaw/openclaw/issues/191944)：影响基础运维体验，应提供稳定的进程发现或 PID-file fallback。
- [#182369 — Gateway RSS 持续增长](https://github.com/openclaw/openclaw/issues/182369)：需要 heap snapshot、off-heap accounting 与阈值告警设计。
- [#143581 — Signal inbound spool retry 循环约 23 小时](https://github.com/openclaw/openclaw/issues/143581)：从 2026-09-10 起长期积压，需检查 spool 生命周期和崩溃恢复状态机。
- [#114211 — Matrix room agent 自循环与 stale session replay](https://github.com/openclaw/openclaw/issues/114211)：涉及外部可见的重复行为，应优先处理 reply gating 和重启恢复。
- [#101793 — Signal 工具调用前文本静默丢失](https://github.com/openclaw/openclaw/issues/101793)：消息内容完整性问题，应与通用 channel turn kernel 一并审计。
- [#144336 — Deferred config reload SIGUSR1 重启失败](https://github.com/openclaw/openclaw/issues/144336)：配置变更后无法可靠完成生命周期切换，属于长期稳定性债务。

### 8.3 PR 侧积压提醒

- [#194890 — 多 Agent Gateway 上 agent-less automation 修复](https://github.com/openclaw/openclaw/pull/194890)：标记 auth/security merge risk，应要求维护者提供明确权限边界和复现证据。
- [#167161 — Codex 僵尸进程修复](https://github.com/openclaw/openclaw/pull/167161)：兼容性风险已标注，需验证 Linux 各种进程拓扑下的 PID 清理行为。
- [#195028 — Compaction 保留 Agent 决策](https://github.com/openclaw/openclaw/pull/195028)：当前等待作者，需补充长会话回归样本，确认不会把工具噪声错误保留为决策。
- [#194742](https://github.com/openclaw/openclaw/pull/194742)、[#194748](https://github.com/openclaw/openclaw/pull/194748)、[#194798](https://github.com/openclaw/openclaw/pull/194798)：均直接关联高热 session/orchestration 问题，建议优先审查并安排故障注入测试。
- [#195025](https://github.com/openclaw/openclaw/pull/195025)、[#195029](https://github.com/openclaw/openclaw/pull/195029)、[#193300](https://github.com/openclaw/openclaw/pull/193300)、[#195009](https://github.com/openclaw/openclaw/pull/195009)、[#194706](https://github.com/openclaw/openclaw/pull/194706)：虽已关闭，但仍应确认其实际合并状态与对应 commit，避免“PR 关闭但修复未进入主线”的积压。

---

## 今日结论

OpenClaw 今日保持了极高的开发吞吐，Web UI、Android/iOS、模型兼容、知识插件和调度编排均有可观察的推进。然而，项目健康度的核心矛盾仍是：**功能扩展速度明显快于核心状态与消息链路的可靠性治理速度**。

维护优先级建议集中在三条主线：

1. **SQLite/session 基础层稳定性**：统一处理写句柄、checkpoint、reclamation、cold start 和 corruption。
2. **消息与子代理任务的可靠交付**：建立 retry、reconcile、dead-letter、幂等和用户可见告警。
3. **Gateway 生命周期与可运维性**：解决 stop、restart、RSS 增长及 updater 无法到达修复版本的问题。

若上述 P0/P1 问题仍不能形成可复现、可升级验证的闭环，高 Issue/PR 活跃度将更多体现为“积压吞吐”，而不是健康的持续演进。

---

## 横向生态对比

# 个人 AI 助手 / 自主智能体开源生态横向分析

**数据日期：2026-11-08｜观察窗口：过去 24 小时**

## 1. 生态全景

当前生态呈现“**开发活跃度高、交付转化分化明显**”的特征：OpenClaw、Hermes Agent、QwenPaw、OpenHuman 维持高强度 Issue/PR 输入，而 PicoClaw、IronClaw 等项目更聚焦 Provider 接入和配置体验。功能扩张集中在多模型 Provider、图像/语音多模态、插件生态、子智能体通信与上下文管理，但多个项目的核心短板仍是**消息可靠投递、状态持久化、Windows 兼容和错误可观测性**。

今日 9 个项目合计更新约 **116 个 Issue、120 个 PR**，但仅 OpenClaw、QwenPaw、Hermes Agent、OpenHuman 保持较高工程吞吐，且所有项目均无新版本发布。由此可见，GitHub 活跃度尚未充分转化为稳定版本交付，当前生态更接近“高需求驱动的快速试错期”，而非全面质量收敛期。

---

## 2. 各项目活跃度对比

| 项目 | 今日 Issues | 今日 PR | Release | 主要状态 | 健康度评估 |
|---|---:|---:|---|---|---|
| **OpenClaw** | 500 | 500 | 无 | 176 个 PR 合并/关闭；大量 session、SQLite、Gateway 核心问题仍开放 | **高活跃、高风险** |
| **Hermes Agent** | 50 | 50 | 无 | 48 个 PR 待审，Windows、Telegram、凭证安全为焦点 | **中高活跃，交付偏慢** |
| **QwenPaw** | 6 | 11 | 无 | 全部 PR 开放，多项修复已形成 Issue—PR 对应 | **较高活跃，发布成熟度偏低** |
| **OpenHuman** | 3 | 5 | 无 | 4 个 PR 待合并，CI 门禁与密钥授权仍是 P1 | **活跃偏紧，工程基线待恢复** |
| **NanoBot** | 4 | 6 | 无 | 5 个 PR 待合并，持续目标、图像和附件问题突出 | **中等，功能快于修复落地** |
| **PicoClaw** | 1 | 3 | 无 | 2 个 Provider PR 待合并；Tsubasa Issue 因 stale 关闭 | **中等偏稳，闭环不足** |
| **LobsterAI** | 0 | 3 | 无 | 3 个 PR 关闭，集中修复 Windows、Chrome MCP、登录体验 | **稳定偏积极** |
| **IronClaw** | 1 | 0 | 无 | 仅 Tsubasa 注册与 32K context budget 需求 | **低活跃、平稳** |

### 关键判断

- **OpenClaw** 的绝对吞吐遥遥领先，但 P0/P1 问题数量和长期状态积压也最高。
- **Hermes Agent、QwenPaw、OpenHuman** 的主要瓶颈不是缺少贡献，而是**待审 PR 转化率低、缺少发布节奏**。
- **LobsterAI** 是少数呈现“低讨论、修复直接闭环”的项目。
- **IronClaw、PicoClaw** 更适合作为轻量接入层或 Provider 生态观察样本，暂不宜与完整 Agent 平台直接比较。

---

## 3. OpenClaw 在生态中的定位

### 优势

1. **社区规模与并发贡献显著领先**  
   今日 OpenClaw 单仓库的 Issue、PR 更新量达到 500/500，约为 Hermes Agent 的 10 倍。其插件、渠道、移动端、Provider 和运行时均具备大规模协作基础。

2. **产品形态最接近完整个人 AI 助手平台**  
   覆盖 Web UI、Android/iOS、语音、cron、子代理、插件、知识库、多 Agent Gateway 和外部渠道，已超出单一框架范畴。

3. **复杂运行时能力领先**  
   SQLite/session reclamation、跨 session 委派、receipt 结算、Cron authority、Gateway 生命周期等议题，体现出它已进入复杂多 Agent 编排阶段。

4. **修复方向开始触及系统一致性**  
   `#194748`、`#194742`、`#194798` 等 PR 不只是修 UI，而是在处理完成通知去重、session 恢复和跨 session 生命周期。

### 技术路线差异

- **OpenClaw**：偏“完整个人 Agent 操作系统”，强调渠道、客户端、插件、多 Agent、调度和持久化的统一平台。
- **QwenPaw**：偏“桌面 Agent + Memory/Search + 多 Provider 上下文治理”。
- **OpenHuman**：偏“强治理、插件化和密钥安全”，强调 CI、审批与本地原生能力。
- **Hermes Agent**：偏“终端/桌面/消息渠道助手”，重视插件生态和跨平台操作。
- **NanoBot**：偏“小型多模态 Agent”，以 Provider 扩展、图像生成和执行沙箱为重点。
- **PicoClaw**：偏“轻量 OpenAI-compatible Agent 客户端”，当前重点是 Provider 目录和子智能体消息权限。
- **IronClaw**：更接近兼容层与配置入口，当前需求集中于单一 Provider 注册。
- **LobsterAI**：更偏 Windows 桌面伴侣和 OpenClaw 浏览器集成层。

### 社区规模对比

在本次样本中，OpenClaw 明显处于第一梯队；Hermes Agent、QwenPaw、OpenHuman 属于第二梯队；NanoBot、PicoClaw、IronClaw 属于较小规模活跃项目；LobsterAI 则以较窄的桌面场景维持稳定贡献。

> 需要注意：当前数据主要反映 GitHub 的日活动，而不是全网用户数、Star、下载量或商业采用规模，结论应限定为“仓库活跃规模”。

---

## 4. 共同关注的技术方向

| 共同方向 | 涉及项目 | 具体诉求 |
|---|---|---|
| **消息可靠投递与幂等** | OpenClaw、Hermes、OpenHuman、NanoBot | Telegram/WhatsApp 重连后回填、失败重试、dead-letter、完成通知去重；消息不能静默消失 |
| **状态持久化与会话恢复** | OpenClaw、QwenPaw、Hermes | 避免 SQLite 锁、checkpoint 过期、数据库误恢复、上下文压缩后决策丢失 |
| **多 Provider 兼容与能力协商** | NanoBot、PicoClaw、IronClaw、QwenPaw、Hermes、OpenClaw | OpenAI-compatible 目录扩张；统一处理图像角色、context budget、超时、错误码和能力边界 |
| **多模态标准化** | NanoBot、OpenClaw、QwenPaw、Hermes | 修复 DeepSeek 图像消息角色、OpenRouter 原生图像 API、参考图编辑、语音转写与实时语音 |
| **上下文和 token 治理** | OpenClaw、QwenPaw、OpenHuman | 动态压缩、输出 token 预留、usage 校准、工具 schema 开销、memory block 非关键路径化 |
| **Windows 可靠性** | Hermes、QwenPaw、LobsterAI | 更新器、UIA 高 DPI、路径编码、凭据、终端、AppHang 和进程清理成为跨项目共性难题 |
| **子智能体通信治理** | OpenClaw、PicoClaw、Hermes | 子代理完成结果不可丢、跨 session 委派不中断、直接消息权限可配置 |
| **可观测性与安全** | OpenClaw、Hermes、OpenHuman、QwenPaw | 长任务进度、日志脱敏、不可见 Unicode 注入、secret grant 审批、模型别名凭证隔离 |
| **插件与安全执行边界** | OpenHuman、Hermes、NanoBot | 插件来源审计、权限声明、会话钩子、隔离启动器及可信路径解析 |

最值得关注的共性不是“增加更多模型”，而是四条基础工程主线：

1. **结果不可静默丢失；**
2. **状态可恢复且不会被错误恢复覆盖；**
3. **Provider 能力必须可协商，而非接口声明与实际行为不一致；**
4. **多 Agent、插件和外部渠道必须具备明确权限边界。**

---

## 5. 差异化定位分析

| 项目 | 功能侧重 | 目标用户 | 架构与技术特征 |
|---|---|---|---|
| **OpenClaw** | 全渠道个人助手、插件、语音、cron、多 Agent 编排 | 高级个人用户、自托管团队、跨平台重度用户 | 统一 Gateway、SQLite/session、插件与渠道生态；能力最广，复杂度最高 |
| **Hermes Agent** | 终端、Desktop、Telegram、插件、语音与系统自动化 | 开发者、远程运维、插件生态用户 | 多前端共用核心；插件生命周期、MCP、安全与跨平台终端并重 |
| **QwenPaw** | 桌面助手、Memory/Search、多 Provider、工具生态 | 桌面重度用户、模型切换与长期记忆用户 | Scroll 搜索、上下文压缩、token 校准和 Provider 适配较突出 |
| **OpenHuman** | 本地 Agent、插件、密钥安全、CI 治理 | 注重隐私、审批、安全和本地部署的用户 | Secret grant、显式审批、线程级控制、原生安全边界；工程治理要求高 |
| **NanoBot** | 轻量 Agent、图像生成、多 Provider、沙箱 | 个人开发者、小型自动化与多模态用户 | 统一 `generate_image`、Provider 注册表、持续目标循环；实现轻但边界测试不足 |
| **PicoClaw** | OpenAI-compatible 模型接入、子智能体 | 希望低成本切换模型网关的用户 | Provider 目录驱动、兼容接口复用；轻量、直接，治理能力尚弱 |
| **IronClaw** | Provider 注册与上下文参数配置 | 特定兼容服务用户 | 当前接近兼容接入层，功能诉求单一；生态影响力有限 |
| **LobsterAI** | Windows 桌面伴侣、浏览器 MCP、文本操作 | Windows 办公与浏览器自动化用户 | Electron/桌面桥接结合 OpenClaw Chrome MCP；聚焦高 DPI 和原生进程管理 |

### 架构层面的关键差异

- **平台型 vs. 客户端型**：OpenClaw 更像 Agent 操作系统；PicoClaw、IronClaw 更像模型接入客户端。
- **功能广度 vs. 可靠性收敛**：OpenClaw、Hermes 覆盖面大，但核心状态与消息治理压力高；LobsterAI 场景窄，却能快速闭环 Windows 问题。
- **显式安全治理 vs. 默认可用性**：OpenHuman 将 secret grant、CI 和审批放在核心位置；其他项目更多采用兼容层或快速 Provider 扩展策略。
- **上下文治理侧重点不同**：QwenPaw 聚焦搜索、token 和压缩；OpenHuman 将 memory 移出关键路径；OpenClaw 则同时处理 transcript、compaction 和 session reclaim。

---

## 6. 社区热度与成熟度

### 第一层：高热度、高复杂度、快速迭代

- **OpenClaw**：500 Issues / 500 PR，生态最大、贡献最密集；同时面临 SQLite、Gateway、消息丢失和长期 Issue 积压。
- **Hermes Agent**：50 Issues / 50 PR，安全、插件和 Telegram 修复并行，但 48 个 PR 待审，交付转化偏慢。
- **QwenPaw**：6 Issues / 11 PR，Issue 与 PR 对应关系清晰，适合快速收敛，但仍缺正式发布。

### 第二层：功能快速扩张、稳定性需要补齐

- **NanoBot**：Provider、图像、沙箱和持续目标同时推进，但多个重要修复尚未合并。
- **OpenHuman**：开发方向明确，已有 P1 专项 PR，但 CI 连续失败和密钥授权问题说明交付基础尚在恢复。

### 第三层：小规模、场景聚焦、待提升闭环

- **PicoClaw**：Provider PR 活跃，但长期 PR 与 stale Issue 显示审查和需求确认不足。
- **IronClaw**：单一需求推进，无代码活动，尚未形成明显开发节奏。
- **LobsterAI**：讨论量低，但 3 个关键 PR 当日闭环，属于更偏质量和交付的项目。

### 成熟度判断

- **质量巩固阶段**：LobsterAI；以及已进入修复发布期的 QwenPaw、OpenHuman。
- **快速迭代阶段**：NanoBot、PicoClaw、IronClaw。
- **高活跃但仍需质量收敛**：OpenClaw、Hermes Agent。
- 整体上，生态尚未出现统一的稳定版本节奏；**无版本发布并不等于无进展，但意味着大量修复对用户仍不可用**。

---

## 7. 值得关注的趋势信号

### 1. 竞争重心从“模型能力”转向“运行时可信度”

用户最痛的不是模型少，而是：

- 子代理完成结果丢失；
- Telegram/WhatsApp 消息消失；
- SQLite/session 损坏或恢复错误；
- Provider 能力声明与实际行为不一致；
- 更新器无法把用户送到已修复版本。

**开发启示**：Agent 产品的差异化将越来越取决于 delivery guarantee、状态机、幂等、reconciliation 和可观测性，而不只是接入多少模型。

### 2. OpenAI-compatible 正在成为事实标准，但“兼容”不再等于“语义一致”

NanoBot、PicoClaw、IronClaw 都在快速增加 Provider；与此同时，QwenPaw、OpenClaw、Hermes 暴露了图像角色、JSON 流、错误码、上下文窗口、token usage 等深层差异。

**开发启示**：需要把 Provider 抽象升级为**能力协商层**，明确声明并测试：

- 是否支持图像输入、参考图编辑和原生 Images API；
- 实际 context window 与输出 token 上限；
- 流式协议和错误格式；
- 重试语义及幂等能力；
- 凭据与模型别名绑定关系。

### 3. 多 Agent 系统正在进入“编排一致性”阶段

OpenClaw 的 receipt、reclamation 和跨 session authority，Hermes 的会话级文件协调，PicoClaw 的直接消息权限，都说明下一阶段重点不再是“能否 spawn 子代理”，而是：

- 子任务结果是否可靠结算；
- 父任务是否重复完成；
- 后台任务能否安全触达用户；
- 多会话写同一资源时如何协调；
- 失败后能否 reconcile 和恢复。

### 4. 长期上下文竞争进入精细化阶段

QwenPaw 优化 token 估算与压缩，OpenHuman 将 memory block 移出关键路径，OpenClaw 尝试在 compaction 中保留决策和 TODO。

**开发启示**：长期记忆的关键不只是“存更多”，而是建立分层策略：

1. 原始事实与运行日志分层；
2. 决策、约束和待办作为高价值状态保留；
3. 工具噪声按需检索；
4. token 预算按 Provider 实际能力动态计算；
5. 压缩过程可解释、可回溯。

### 5. Windows 和桌面端成为独立可靠性战场

Hermes、QwenPaw、LobsterAI 的今日问题都集中于 Windows：更新器、UIA、高 DPI、路径编码、Chrome 子进程、AppHang、终端行为。

**开发启示**：若产品定位包含个人桌面助手，Windows CI 不应只做“能否安装”，而应覆盖：

- 100%/150%/200% DPI；
- IoT LTSC 等精简系统；
- Edge、Chrome、WPS；
- 文件锁、路径编码和 UAC；
- Chrome 多进程与异常恢复；
- 安装—更新—回滚完整链路。

### 6. 插件生态正从“数量增长”进入“供应链治理”

Hermes 的插件目录快速扩张，OpenHuman 强调 secret grant，NanoBot 推进可信沙箱启动器。插件带来的权限、来源、版本锁定、卸载清理和数据访问风险会成为下一阶段核心。

**开发启示**：插件生态需要最低治理基线：来源校验、固定版本、权限声明、安装前扫描、异常隔离、卸载清理和可回滚更新。

---

## 决策建议

### 对个人用户与团队选型

- 追求**功能完整、跨端、渠道和多 Agent 编排**：优先关注 OpenClaw，但应等待核心可靠性专项落地，并避免无备份直接部署生产实例。
- 偏好**桌面体验、搜索与上下文治理**：QwenPaw 更贴近需求，但需观察 Windows 和最终回复链路修复。
- 偏好**终端、插件和消息渠道自动化**：Hermes Agent 值得跟踪，尤其是 Telegram 与凭证安全 PR 的合并。
- 重视**本地密钥授权和安全治理**：OpenHuman 路线更明确，但目前 CI 与 secret grant 尚未完成发布级验证。
- 需要**轻量多 Provider 或图像能力**：NanoBot、PicoClaw 更易上手，但应明确 Provider 能力边界。

### 对开发者

近期最值得投入的共性方向依次是：

1. **可靠消息投递与幂等结算；**
2. **可恢复的状态存储与数据库安全；**
3. **Provider 能力协商与协议适配层；**
4. **多 Agent 权限和生命周期；**
5. **上下文/token 精细治理；**
6. **Windows 自动化与桌面回归矩阵。**

总体而言，生态已经证明“个人 Agent 平台”具备强需求和多条可行产品路线，但下一阶段真正的竞争壁垒，不是继续增加入口，而是建立用户可验证的**可靠性、可恢复性和可信边界**。

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目动态日报

**日期：2026-11-08**  
**统计口径：过去 24 小时 GitHub 更新**  
**整体判断：开发活跃，但核心稳定性问题仍在积压，发布节奏偏慢。**

---

## 1. 今日速览

过去 24 小时 NanoBot 共更新 **4 个 Issues** 和 **6 个 PR**，其中 **5 个 PR 仍待合并、1 个 PR 已关闭**，暂无新版本发布。讨论重点集中在持续目标循环、DeepSeek 图像消息格式、图像编辑参数丢失以及飞书附件处理等可靠性问题。  
PR 覆盖沙箱启动器、OpenRouter 原生图像生成、新增 Standard Compute 与 Tsubasa Provider、WebUI 主题及持续目标修复，路线图继续向多 Provider、多模态和更安全执行环境扩展。  
当前呈现“**功能开发较活跃、缺陷修复落地偏慢**”的状态：多数重要修复仍停留在 Open PR 或 Issue 阶段。健康度评估为**中等**，核心用户链路仍存在重复回复、附件静默丢失和图像编辑结果错误等高影响问题。

---

## 2. 版本发布

过去 24 小时**无新版本发布**，因此暂无对应的更新说明、破坏性变更或迁移注意事项。

鉴于当前仍有多项 Provider、图像生成和 Agent 循环相关改动待合并，建议维护者在下个版本发布前明确区分：

- 已修复但尚未发布的稳定性问题；
- 新 Provider 所需的配置项与凭据；
- OpenRouter、DeepSeek 等多模态接口的行为调整；
- 沙箱启动器配置是否需要迁移。

---

## 3. 项目进展

### 已关闭的重要 PR

#### PR #6594：优化 WebUI 日夜主题与交互连续性

- **状态：** 已关闭、未合并
- **内容：** 调整 WebUI 深色侧栏、昼夜主题插画和星标邀请视觉，并尝试改善主题切换过程中的交互连续性。
- **进展评价：** 该 PR 改善了前端视觉体验，但因已关闭且没有进入发布，**不计入当前可交付版本进展**。
- 链接：[PR #6594](https://github.com/HKUDS/nanobot/pull/6594)

### 待合并的重要功能与修复

#### PR #6595：增加沙箱检查并支持可信启动器配置

- **状态：** Open
- **内容：** 新增由 Gateway 控制的沙箱检查机制，使用临时文件和正式启动器解析器；新增 `tools.exec.sandboxLauncher` 等可信启动器配置。
- **预期价值：** 提升命令执行环境的可检查性，同时尽量不削弱工作区隔离。
- **注意事项：** 沙箱配置属于安全敏感能力，合并前应重点验证路径解析、启动器信任边界、临时文件清理及异常回退。
- 链接：[PR #6595](https://github.com/HKUDS/nanobot/pull/6595)

#### PR #5718：支持 OpenRouter 原生图像生成 API

- **状态：** Open
- **内容：** 接入 OpenRouter 原生 Images API，并复用现有 `generate_image` 抽象，以兼容 OpenRouter 图像服务及更多模型。
- **预期价值：** 扩展图像生成 Provider 覆盖面，降低现有 OpenAI Images 兼容接口与 OpenRouter 行为不一致的风险。
- 链接：[PR #5718](https://github.com/HKUDS/nanobot/pull/5718)

#### PR #6199：新增 Standard Compute OpenAI 兼容网关

- **状态：** Open
- **内容：** 在 Provider 注册表中加入 Standard Compute，并配置对应模型目录及 API Key 获取方式。
- **预期价值：** 丰富模型接入选择，为固定算力预算的网关用户提供替代后端。
- 链接：[PR #6199](https://github.com/HKUDS/nanobot/pull/6199)

#### PR #5947：新增 Tsubasa Provider 元数据

- **状态：** Open
- **内容：** 增加 `tsubasa-fast`、`tsubasa-pro` 模型配置，支持 `${TSUBASA_API_KEY}`，复用 OpenAI 兼容客户端及前缀处理逻辑。
- **预期价值：** 以较低集成成本扩充模型目录。
- 链接：[PR #5947](https://github.com/HKUDS/nanobot/pull/5947)

#### PR #5257：限制持续目标在空闲时的自动续跑

- **状态：** Open
- **内容：** 限制纯文本连续续跑次数，避免 Agent 在等待用户输入时反复自动触发“继续”，并设置连续自动迭代上限。
- **预期价值：** 直接对应持续目标重复回复问题，有望降低机器人噪声与模型调用成本。
- 链接：[PR #5257](https://github.com/HKUDS/nanobot/pull/5257)

### 整体推进程度

今日有 **6 个 PR 更新**，但仅 **1 个关闭、0 个确认合并**，且没有发布版本。因此，从用户可获得版本的角度看，项目进展有限；从开发管道看，功能和修复储备仍然充足。

---

## 4. 社区热点

### 1. Issue #5256：单条 `/goal` 指令产生大量近似重复回复

- **评论数：** 3
- **点赞数：** 1
- **活跃度：** 今日 Issues 中评论最多、反应最多的条目。
- **现象：** Agent 等待用户回答期间仍不断输出近似回复，直到用户干预或模型识别为系统循环并取消目标。
- **社区诉求：** 持续目标应区分“模型仍在执行”与“正在等待用户输入”，避免自动续跑失控。
- **已有修复：** [PR #5257](https://github.com/HKUDS/nanobot/pull/5257) 已尝试限制连续自动续跑，但尚未合并。
- 链接：[Issue #5256](https://github.com/HKUDS/nanobot/issues/5256)

### 2. PR #5718：OpenRouter 原生图像生成

- **状态：** Open
- **热度信号：** Issue 列表中没有更高评论或点赞的条目，但该 PR 直接对应近期图像生成需求，并与 Image Provider 扩展方向一致。
- **社区诉求：** 保持 `generate_image` 统一接口，同时兼容不同服务商原生的图像生成协议。
- 链接：[PR #5718](https://github.com/HKUDS/nanobot/pull/5718)

### 3. PR #6595：沙箱检查和可信启动器

- **状态：** Open
- **社区诉求：** 降低沙箱启用和排查成本，同时确保可信启动器机制不会削弱命令隔离。
- 链接：[PR #6595](https://github.com/HKUDS/nanobot/pull/6595)

> 今日数据中，Issue #5256 是最明确的社区热点；其余热点主要依据功能影响范围和对应开放缺陷的重要性判断。

---

## 5. Bug 与稳定性

按用户影响、复现概率及是否已有修复 PR 排列如下。

### 严重

#### 1. 飞书富文本消息中的文件附件被静默丢弃

- **影响：** 用户同时发送文本和文件时，文件不会进入 Agent 上下文；由于没有报错，问题表现为“文件凭空消失”，直接影响资料分析和附件工作流。
- **根因：** 飞书客户端将文本与附件包装为 `post` 消息，附件位于顶层 `files` 数组；当前仅解析 `content` 行，遗漏该数组。
- **修复 PR：** 暂未发现对应 PR。
- **建议优先级：** **P0/P1**，建议尽快确认多文件、富文本文件及普通文本消息的兼容处理。
- 链接：[Issue #6596](https://github.com/HKUDS/nanobot/issues/6596)

#### 2. 自定义图像 Provider 静默忽略 `reference_images`

- **影响：** 用户请求图像编辑时，Provider 不使用参考图，却返回一张无关的新图且不报错，属于结果正确性故障。
- **范围：** `providers/image_generation.py` 中 custom OpenAI Images Provider 未使用 `/images/edits` 路径。
- **修复 PR：** 暂未发现明确修复 PR；[PR #5718](https://github.com/HKUDS/nanobot/pull/5718) 扩展的是 OpenRouter 原生图像生成，不能直接视为该问题的修复。
- **建议优先级：** **P1**，建议支持编辑端点，或在 Provider 不支持参考图时返回明确错误。
- 链接：[Issue #6598](https://github.com/HKUDS/nanobot/issues/6598)

### 高

#### 3. `/goal` 在等待用户输入时产生大量重复回复

- **影响：** 造成消息刷屏、无效模型调用、费用增加，并可能掩盖真正需要用户作答的提示。
- **修复状态：** 已有 [PR #5257](https://github.com/HKUDS/nanobot/pull/5257)，但尚未合并。
- **建议优先级：** **P1**，建议补充“等待用户输入”和“迭代预算耗尽”的回归测试。
- 链接：[Issue #5256](https://github.com/HKUDS/nanobot/issues/5256)

### 中

#### 4. DeepSeek Chat Completions 使用不受支持的图像消息角色

- **影响：** 当工具结果包含图片时，DeepSeek 可能因消息角色不符合协议而拒绝请求，或产生非预期解析行为。
- **约束：** DeepSeek Chat Completions 的视觉输入仅允许在 `user` 消息中传递。
- **修复状态：** 暂未发现直接对应的修复 PR。
- **建议优先级：** **P1/P2**，取决于 DeepSeek 多模态工具调用在现有用户群中的使用频率。
- 链接：[Issue #6584](https://github.com/HKUDS/nanobot/issues/6584)

### 稳定性结论

- 今日新增或活跃的 4 个 Issues **全部属于功能正确性或稳定性问题**。
- 4 个问题中，仅持续目标重复回复已有明确修复 PR。
- 飞书附件丢失和图像编辑静默失效均缺乏显式错误反馈，属于应优先处理的“**静默数据/结果丢失**”问题。

---

## 6. 功能请求与路线图信号

### 已有明确 PR 的需求

1. **更安全的沙箱配置与检查**
   - 已有 [PR #6595](https://github.com/HKUDS/nanobot/pull/6595)。
   - 表明路线图正从“提供隔离能力”转向“可诊断、可配置且可信赖的执行环境”。

2. **OpenRouter 原生图像生成支持**
   - 已有 [PR #5718](https://github.com/HKUDS/nanobot/pull/5718)。
   - 图像生成正在从单一 OpenAI 兼容接口转向多服务商原生 API 适配。

3. **Standard Compute 与 Tsubasa Provider**
   - 分别对应 [PR #6199](https://github.com/HKUDS/nanobot/pull/6199) 和 [PR #5947](https://github.com/HKUDS/nanobot/pull/5947)。
   - Provider 目录持续扩充，且倾向于复用 OpenAI 兼容客户端，以降低集成和维护成本。

4. **WebUI 昼夜主题优化**
   - [PR #6594](https://github.com/HKUDS/nanobot/pull/6594) 已关闭。
   - 说明用户体验仍是活跃方向，但当前方案未形成可交付成果。

### 由 Bug 暴露出的隐含路线图

1. **多模态消息规范化**
   - Issue #6584 表明需要在 Provider 边界统一消息角色，而不能直接把通用工具结果透传给 DeepSeek。
   - 建议路线：**统一消息中间层 → Provider 特定适配层 → 多模态回归测试**。

2. **图像编辑能力标准化**
   - Issue #6598 表明 `generate_image` 接口虽然声明支持 `reference_images`，但 Provider 能力声明与实际实现不一致。
   - 建议增加能力协商：不支持编辑时应明确报错，而不是生成语义错误的结果。

3. **渠道附件解析完整性**
   - Issue #6596 表明不同飞书消息类型需要独立解析路径。
   - 建议建立消息类型矩阵，覆盖纯文本、富文本、文件、图文混合及多附件。

### 下一版本可能性判断

- **较高可能纳入：** 持续目标循环修复、OpenRouter 图像生成、新增 Provider 元数据。
- **中等可能纳入：** 沙箱检查与可信启动器，取决于安全审查和测试完成度。
- **需求明确但尚无 PR：** DeepSeek 图像消息角色适配、自定义 Provider 的参考图编辑、飞书附件解析。

---

## 7. 用户反馈摘要

### 已确认的真实痛点

- **持续目标不可控：** 用户发现一条 `/goal` 消息就可能引发数十条重复回复，且必须人工介入才能停止。核心不满不是单次回答错误，而是 Agent 无法正确判断“正在等待用户”的状态。
- **多模态协议兼容不稳定：** 图像工具结果被放入 DeepSeek 不支持的角色，暴露出不同 Provider 对消息结构的限制差异。
- **图像编辑承诺与结果不一致：** `reference_images` 被接受但没有生效，用户最终得到完全无关的图片；缺少错误提示进一步降低了可诊断性。
- **飞书附件丢失：** 文本与文件同时发送时，文件被静默忽略，用户无法确认文件是否已被系统接收。

### 当前满意度信号

- 整体缺乏足够评论和点赞数据，无法判断社区对近期功能方向的普遍满意度。
- 唯一明确反应较高的 Issue #5256 只有 1 个点赞和 3 条评论，说明问题已被识别，但尚未形成广泛讨论。
- 新 Provider 和图像生成 PR 反映用户仍对**模型覆盖范围**与**图像能力**有明确接入需求。

---

## 8. 待处理积压

### 长期未合并的重要 PR

#### PR #5257：持续目标续跑限制

- **创建时间：** 2026-08-05
- **停留时间：** 约 3 个月。
- **风险：** 对应高影响、已形成明确复现的问题继续开放，可能持续影响真实用户。
- 链接：[PR #5257](https://github.com/HKUDS/nanobot/pull/5257)

#### PR #5718：OpenRouter 原生图像生成

- **创建时间：** 2026-09-09
- **停留时间：** 约 2 个月。
- **风险：** 图像 Provider 扩展方向明确，但长期未合并增加与现有接口演进脱节的可能性。
- 链接：[PR #5718](https://github.com/HKUDS/nanobot/pull/5718)

#### PR #6199：Standard Compute Provider

- **创建时间：** 2026-10-13
- **停留时间：** 约 1 个月。
- **风险：** 新 Provider 若长期滞留，后续注册表、模型目录和文档可能发生冲突。
- 链接：[PR #6199](https://github.com/HKUDS/nanobot/pull/6199)

#### PR #5947：Tsubasa Provider 元数据

- **创建时间：** 2026-09-28
- **停留时间：** 约 1 个半月。
- **风险：** 实现范围较小，适合快速完成审查并合并，减少模型目录维护分叉。
- 链接：[PR #5947](https://github.com/HKUDS/nanobot/pull/5947)

### 长期活跃但仍需闭环的 Issue

#### Issue #5256：`/goal` 重复回复

- **创建时间：** 2026-08-05
- **状态：** Open，3 条评论、1 个点赞。
- **建议：** 将其作为近期稳定性里程碑，优先合并 [PR #5257](https://github.com/HKUDS/nanobot/pull/5257) 并补充回归测试。
- 链接：[Issue #5256](https://github.com/HKUDS/nanobot/issues/5256)

### 维护建议

1. 优先处理 **PR #5257**，关闭已持续三个月的持续目标循环问题。
2. 对 **Issue #6596、#6598、#6584** 补充复现用例、预期行为与责任人，避免静默失败继续扩散。
3. 对长期开放的 Provider PR 给出明确审查结论；若已失去时效，应关闭并重新拆分。
4. 建立下一版本候选清单，优先纳入稳定性修复，再发布 Provider 与图像能力扩展。

---

**项目健康度结论：中等。**  
NanoBot 今日开发管道活跃，功能覆盖面持续扩大，但 24 小时内没有新合并版本，也没有发布；4 个活跃 Issue 全部指向可靠性或协议适配缺陷。下一阶段的关键不是继续扩大功能数量，而是尽快合并持续目标修复、补齐多模态与附件边界测试，并让 Provider 扩展形成稳定、可发布的交付。

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目动态日报

**日报日期：2026-11-08**  
**统计窗口：过去 24 小时**  
**项目主页：[github.com/sipeed/picoclaw](https://github.com/sipeed/picoclaw)**

---

## 1. 今日速览

过去 24 小时，PicoClaw 共出现 **1 条 Issue 更新、3 条 PR 更新**，其中 **1 个 Issue 被关闭，1 个 PR 被关闭，2 个 PR 仍待合并**，项目暂无新版本发布。  
今日开发重点集中在 **OpenAI 兼容 Provider 扩展** 与 **子智能体通信权限控制**：新增 Standard Compute、CloudGPU Provider 的 PR 正在推进；同时，`spawn` 工具新增 `allow_direct_message` 参数的 PR 已关闭或合并。  
Issue #3397 已标记为 `stale` 并关闭，说明 Tsubasa Provider 目录项请求目前尚未形成明确落地安排。  
整体活跃度评估为 **中等**：有 2 个开放功能 PR，但没有新版本产出，且今日缺乏明确的修复型贡献；从更新结构看，功能扩展较活跃，稳定性和维护响应仍需加强。

---

## 3. 项目进展

### 已关闭的重要 PR

#### [PR #3465 feat(spawn): add allow_direct_message parameter to control direct user messaging](https://github.com/sipeed/picoclaw/pull/3465)

- **状态**：CLOSED
- **作者**：@v2up-32mb
- **更新日期**：2026-11-07
- **主要内容**：为 `spawn` 工具增加可选布尔参数 `allow_direct_message`，默认值为 `true`，用于控制被创建的子智能体是否可以在执行期间通过 `message` 工具直接向用户发送消息。
- **技术价值**：该能力为子智能体通信提供了更细粒度的权限控制，有助于减少子任务执行过程中未经预期的主动触达，为多智能体场景中的消息隔离和可控交互提供基础。

> 数据未明确说明该 PR 是“已合并”还是“未合并关闭”，因此不能确认该功能已经进入默认分支或正式版本。

### 待合并的重要 PR

#### [PR #3431 feat(provider): add Standard Compute provider](https://github.com/sipeed/picoclaw/pull/3431)

- **状态**：OPEN
- **作者**：@henrikdukefoss
- **创建日期**：2026-10-15
- **更新日期**：2026-11-07
- **主要内容**：将 Standard Compute 作为 OpenAI 兼容 Provider 接入，Provider 标识为 `standardcompute`。
- **目标场景**：用户可通过一个 API Key 访问多家模型实验室的模型，降低多 Provider 配置和切换成本。
- **实现参考**：PR 描述提到其设计沿用了 [Issue #2917（NEAR AI Cloud）](https://github.com/sipeed/picoclaw/issues/2917) 的既有路径，说明 OpenAI 兼容 Provider 接入已形成相对标准化的贡献模式。

#### [PR #3464 feat(provider): add CloudGPU OpenAI-compatible provider](https://github.com/sipeed/picoclaw/pull/3464)

- **状态**：OPEN
- **作者**：@mrhy7176
- **创建日期**：2026-11-07
- **更新日期**：2026-11-07
- **主要内容**：新增 `cloudgpu` 内建 OpenAI 兼容 HTTP Provider。
- **接入方式**：在 `model_list` 中可直接使用 `"provider": "cloudgpu"`，或使用 `cloudgpu/<model>` 形式的模型字符串，用户只需配置 API Key。
- **技术价值**：进一步扩充无需手动配置 Base URL 的 Provider 目录，提升不同 GPU 云和模型网关下的即插即用能力。

### 推进程度评估

今日项目主要完成了**功能提案和代码提交层面的推进**，尚未表现为已经发布的用户可见版本。两个 Provider PR 仍待审核，消息权限控制 PR 的最终合并状态也不明确。因此，今日可确认的成熟交付成果有限，但功能方向清晰，且与 PicoClaw 的 Provider 生态扩展和可控子智能体交互主线一致。

---

## 4. 社区热点

### [Issue #3397 Add Tsubasa to the existing OpenAI-compatible provider catalog](https://github.com/sipeed/picoclaw/issues/3397)

- **状态**：CLOSED / stale
- **作者**：@cenab
- **创建时间**：2026-09-28
- **更新时间**：2026-11-07
- **评论数**：2
- **点赞数**：0

这是过去 24 小时唯一更新的 Issue，也是今日社区讨论最集中的条目。

**核心诉求：**

- 用户目前虽然可以通过显式配置 `openai` 模型条目和自定义 API Base 使用 Tsubasa，但 Provider 选择器中没有 Tsubasa 的端点或公开模型别名。
- 诉求本质上是降低配置门槛，让用户无需手动填写兼容接口地址和模型映射即可选择 Tsubasa。
- 该 Issue 最终被标记为 `stale` 并关闭，表明在当前维护窗口内尚未形成明确实现结论。

**热度判断：** 评论数在当前数据集中最高，但总互动量仅 2 条评论、0 个点赞，热度有限。需求明确且具备同类实现基础，但需要维护者重新确认目录收录标准、Provider 命名和公开模型列表。

### PR 热点

- [PR #3431 Standard Compute Provider](https://github.com/sipeed/picoclaw/pull/3431)：更新时间为 2026-11-07，且创建于 2026-10-15，属于今日较受关注的长期开放贡献。
- [PR #3464 CloudGPU Provider](https://github.com/sipeed/picoclaw/pull/3464)：当日新建，属于最新 Provider 生态扩展提案。
- [PR #3465 spawn 直接消息权限控制](https://github.com/sipeed/picoclaw/pull/3465)：当日关闭，关注点是子智能体是否应默认具备直接联系用户的权限。

当前所有 PR 均未展示点赞数据，也没有可见评论数量，因此无法进行更高置信度的“反应最多”排名。

---

## 5. Bug 与稳定性

### 今日未发现明确的新 Bug 报告

数据中没有新增或更新的崩溃、回归、异常退出、数据损坏或安全漏洞 Issue，因此今日没有可按严重程度排列的明确 Bug 条目。

### 稳定性相关的权限控制变更

[PR #3465](https://github.com/sipeed/picoclaw/pull/3465) 虽非 Bug 修复，但与消息行为控制和系统稳定性直接相关：

- `allow_direct_message` 默认设为 `true`，意味着现有行为默认保持兼容。
- 关闭该参数后，可阻止子智能体在执行期间直接向用户发送消息。
- 该能力可能减少多智能体并发任务中的重复通知、意外打扰或交互越权。
- 由于 PR 已关闭但未说明是合并还是放弃，需关注该能力是否真正进入主线，以及是否存在与现有通信链路之间的兼容问题。

**稳定性结论：**

- 今日没有已知公开 Bug 信号。
- 缺少新版本和回归测试信息，无法仅凭当前数据判断整体稳定性趋势。
- Provider 新增会扩大外部服务接口覆盖面，后续应重点验证超时、错误映射、鉴权失败和模型列表兼容性。

---

## 6. 功能请求与路线图信号

### A. OpenAI 兼容 Provider 目录持续扩张

今日两项待合并 PR 均围绕 Provider 接入：

- [PR #3431：Standard Compute](https://github.com/sipeed/picoclaw/pull/3431)
- [PR #3464：CloudGPU](https://github.com/sipeed/picoclaw/pull/3464)

结合已关闭的 [Issue #3397：Tsubasa](https://github.com/sipeed/picoclaw/issues/3397)，可以判断 Provider 生态仍是当前明确的功能主线。PicoClaw 正通过统一的 OpenAI 兼容抽象，降低用户接入不同模型网关和 GPU 云服务的配置成本。

**下一版本可能纳入：**

- Standard Compute 和 CloudGPU 均已提交代码，若测试、鉴权方式和文档检查通过，较可能成为下一批 Provider 目录更新的一部分。
- Tsubasa 请求因被标记为 stale 而关闭，短期内纳入确定性较低；若维护者认可统一目录规范，仍可能重新开放或由替代 PR 实现。

### B. 子智能体通信权限逐步走向可控化

[PR #3465](https://github.com/sipeed/picoclaw/pull/3465) 提议通过 `allow_direct_message` 控制子智能体能否直接向用户发消息。

该方向可能成为后续多智能体能力的一部分：

- 支持主智能体决定子智能体是否直接触达用户；
- 减少后台子任务造成的消息噪声；
- 为不同角色子智能体设置差异化通信策略；
- 与未来权限、隔离和审批机制形成衔接。

不过，该 PR 已关闭，需要确认是被替代、合并，还是暂缓，因此不能直接判断其已进入下一版本路线图。

### C. Provider 接入模式趋于标准化

[PR #3431](https://github.com/sipeed/picoclaw/pull/3431) 明确参考 [Issue #2917](https://github.com/sipeed/picoclaw/issues/2917)，说明新增 Provider 的实现路径正在形成可复用规范。后续 Provider 贡献有望更快完成审查和集成，但维护者也应同步建立：

- Provider 收录标准；
- API Key 配置说明；
- 公开模型列表更新机制；
- 兼容性测试；
- 第三方 Provider 的长期维护责任边界。

---

## 7. 用户反馈摘要

今日可提炼的明确用户反馈主要来自 [Issue #3397](https://github.com/sipeed/picoclaw/issues/3397) 的两条评论。

### 真实使用痛点

- **兼容接口不等于开箱即用**：Tsubasa 虽已提供 OpenAI 兼容接口，用户仍需通过自定义 API Base 和显式 `openai` 模型配置绕过 Provider 选择器。
- **目录发现性不足**：Provider 选择器没有直接展示 Tsubasa 的端点与公开模型别名，增加了查找、配置和迁移成本。
- **接入门槛影响模型切换**：对于需要尝试多个 Provider 或模型服务的用户，缺少目录项会削弱统一 Provider 管理体验。

### 满意度与不满意点

- 正面信号：用户认可 PicoClaw 已具备通过 OpenAI 兼容模式使用 Tsubasa 的基础能力，说明现有抽象具备一定通用性。
- 不满信号：实际接口可用并不等于产品体验完善；用户仍期待 Provider、端点和模型别名能够被自动发现和直接选择。
- 响应体验：Issue 从创建到关闭约 40 天，并最终因 stale 被关闭，说明功能请求缺少及时确认或后续排期，用户诉求没有得到明确闭环。

---

## 8. 待处理积压

### [PR #3431 Standard Compute Provider](https://github.com/sipeed/picoclaw/pull/3431)

- **状态**：OPEN
- **创建时间**：2026-10-15
- **更新时间**：2026-11-07
- **积压风险**：已开放约 23 天，虽在今日仍有更新，但尚无合并结论。
- **建议**：维护者应尽快完成代码审查、兼容性验证和文档确认，并明确是合并、继续等待补充，还是关闭并给出替代路径。

### [Issue #3397 Tsubasa Provider 请求](https://github.com/sipeed/picoclaw/issues/3397)

- **状态**：CLOSED / stale
- **创建时间**：2026-09-28
- **关闭时间**：2026-11-07
- **积压风险**：请求已积压约 40 天，关闭原因主要是 stale，可能反映的是维护响应不足，而非需求本身失效。
- **建议**：若 Tsubasa 仍在活跃使用，应重新确认需求并给出明确排期；若暂不支持，也应说明 Provider 收录条件，降低重复提交概率。

### [PR #3465 spawn 消息权限参数](https://github.com/sipeed/picoclaw/pull/3465)

- **状态**：CLOSED，合并状态不明
- **积压风险**：功能诉求已形成代码，但最终处置不透明，可能造成贡献者和使用者对路线图产生误解。
- **建议**：补充关闭原因、替代 PR 链接或合并记录，明确多智能体直接通信权限是否属于近期路线图。

---

## 今日健康度结论

| 维度 | 今日状态 | 判断 |
|---|---|---|
| Issue 活跃度 | 1 条更新，0 个新开，1 个关闭 | 低 |
| PR 活跃度 | 3 条更新，2 个待合并 | 中等偏高 |
| 功能推进 | Provider 扩展集中，消息权限能力出现 | 中等 |
| 稳定性 | 无明确 Bug 报告 | 平稳，但缺少回归数据 |
| 发布节奏 | 0 个新版本 | 无正式交付 |
| 维护响应 | 1 个长期 Issue 因 stale 关闭 | 需改善 |
| 综合健康度 | **中等偏稳** | 功能贡献活跃，但审核、闭环和发布转化偏弱 |

**总体判断：** PicoClaw 今日呈现出“**Provider 生态扩展活跃、维护转化不足**”的特征。功能方向符合项目定位，但长期开放 PR、stale Issue 和缺少新版本发布表明，贡献进入主线并交付给用户的效率仍有提升空间。

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw 项目动态日报

**日期：2026-11-08**  
**统计范围：过去 24 小时 GitHub 活动**  
**仓库：[nearai/ironclaw](https://github.com/nearai/ironclaw)**

## 1. 今日速览

过去 24 小时内，IronClaw 共更新 **1 个 Issue**，无新增或更新的 Pull Request，也无版本发布。唯一活跃事项是 [#8115](https://github.com/nearai/ironclaw/issues/8115)，提出为 Tsubasa 增加正式注册项及明确的 **32K context budget** 配置路径，目标是减少用户手动配置兼容端点和模型的成本。整体开发活动较低，目前更接近“单一功能需求跟进”阶段，尚未形成可观测的代码合并或发布进展。由于没有评论、点赞和关联修复 PR，该需求的热度与实现紧迫性暂时无法从社区反馈中确认。

---

## 3. 项目进展

过去 24 小时没有合并或关闭的 PR，因此没有已落地的功能、修复或重构工作。

- **PR 更新数：0**
- **待合并 PR：0**
- **已合并/关闭 PR：0**
- **新增版本：0**

从今日活动看，项目推进幅度有限；当前可识别的唯一方向是改善 Tsubasa 的接入体验与上下文预算配置，但尚未进入代码实现阶段。

---

## 4. 社区热点

### [#8115 — Add a Tsubasa registry entry with an explicit 32K context-budget path](https://github.com/nearai/ironclaw/issues/8115)

- **状态：** Open
- **作者：** [@cenab](https://github.com/cenab)
- **最近更新：** 2026-11-07
- **评论数：** 0
- **点赞数：** 0

#### 需求背景

IronClaw 已有 OpenAI-compatible backend，但用户在配置 Tsubasa 时仍需手动填写 endpoint 和 model。该 Issue 提议：

1. 为 Tsubasa 增加命名 provider／registry entry；
2. 提供明确的 **32K 上下文预算路径**；
3. 降低凭据配置和模型选择的复杂度；
4. 让用户能够直接选择 Tsubasa，而不是依赖通用兼容接口手动接入。

#### 热度判断

该 Issue 是过去 24 小时唯一更新项，但由于**无评论、无点赞、无关联 PR**，目前属于“最新活动项”，尚不能认定为社区高热度议题。后续若出现维护者确认、替代实现或相关配置文档更新，其重要性可能明显提升。

---

## 5. Bug 与稳定性

过去 24 小时未报告新的崩溃、回归或明确缺陷，因此没有可按严重程度排列的 Bug，也没有待合并的 fix PR。

需要注意的是，[#8115](https://github.com/nearai/ironclaw/issues/8115) 本质上属于**功能与配置体验改进**，不应直接归类为稳定性 Bug。其“32K context-budget path”如果未来实现，可能涉及模型注册、上下文窗口声明和请求参数传递等逻辑；实现时应补充边界测试，以避免出现：

- 注册项声明的上下文窗口与实际模型能力不一致；
- 32K 限制未正确传递或校验；
- 通用 OpenAI-compatible provider 配置受到影响。

以上为实现阶段的风险关注点，不代表当前已发生相关故障。

---

## 6. 功能请求与路线图信号

### Tsubasa 命名注册项与 32K 上下文预算路径

**来源：[#8115](https://github.com/nearai/ironclaw/issues/8115)**

这是今日唯一明确的功能需求，可能纳入后续版本的信号包括：

- 通过 provider registry 统一管理 Tsubasa 的 endpoint、模型和上下文参数；
- 以内置 provider 替代用户手动填写 endpoint/model；
- 将 32K context budget 作为显式配置，而非依赖隐式默认值；
- 通过 provider entry 提升凭据配置、模型选择和错误提示的一致性。

当前没有对应 PR、里程碑或维护者表态，因此无法确认其已进入下一版本计划。若近期出现 registry 相关改造或 provider 配置抽象，该需求较可能优先被吸收；否则仍需等待维护者评估。

---

## 7. 用户反馈摘要

过去 24 小时没有新增评论，因此暂无可提取的真实用户证言、满意度评价或具体使用反馈。

根据 [#8115](https://github.com/nearai/ironclaw/issues/8115) 的描述，可以确认的核心使用痛点是：

- Tsubasa 用户需要重复手动配置 endpoint 和 model；
- 缺少命名 provider 导致接入路径不够直观；
- 上下文预算没有清晰的显式配置，用户难以判断可用上下文规模；
- 配置过程可能增加凭据设置错误及模型选择错误的风险。

目前该 Issue **评论数为 0、点赞数为 0**，尚无其他用户复现或表达支持，因而应将其视为单用户提出的改进建议，而非已形成广泛共识的社区诉求。

---

## 8. 待处理积压

### 需持续跟进

- **[#8115](https://github.com/nearai/ironclaw/issues/8115)**：自 2026-09-28 创建，至 2026-11-07 仍有更新，状态保持 Open。该事项已存在一段时间，但当前没有评论、点赞、维护者回复或关联 PR。维护者宜尽快确认：
  1. 是否接受 Tsubasa 作为正式 provider；
  2. 32K context budget 是否属于全局能力或 Tsubasa 专属配置；
  3. registry entry 的命名、凭据字段和模型默认值；
  4. 是否需要兼容现有 OpenAI-compatible 配置；
  5. 是否安排实现 PR、测试和文档更新。

除 [#8115](https://github.com/nearai/ironclaw/issues/8115) 外，题面未提供其他长期未响应 Issue 或 PR，因此无法对其余积压情况作可靠判断。

---

## 项目健康度评估

**综合状态：平稳但偏低活跃，暂无发布活动**

| 指标 | 过去 24 小时 |
|---|---:|
| Issue 更新 | 1 |
| 新开/活跃 Issue | 1 |
| 已关闭 Issue | 0 |
| PR 更新 | 0 |
| 待合并 PR | 0 |
| 已合并/关闭 PR | 0 |
| 新版本发布 | 0 |

今日没有代码合入和发版，项目推进主要停留在需求讨论层。唯一活跃事项[#8115](https://github.com/nearai/ironclaw/issues/8115) 方向明确，能改善 Tsubasa 的接入可发现性与配置可靠性，但缺少社区互动和维护者确认。建议后续重点观察是否出现对应实现 PR、测试覆盖及文档更新。

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI 项目动态日报

**日期：2026-11-08**  
**数据范围：过去 24 小时 GitHub Issues 与 Pull Requests 更新**  
**项目地址：[netease-youdao/LobsterAI](https://github.com/netease-youdao/LobsterAI)**

---

## 1. 今日速览

过去 24 小时内，LobsterAI **无新增或活跃 Issue、无待合并 PR、无新版本发布**。  
项目今日共有 **3 个 PR 关闭**，均围绕 Windows 环境下桌面伴侣、OpenClaw 浏览器 MCP 和登录流程的可靠性修复，重点解决高缩放显示、浏览器工具不可用及登录按钮无响应等问题。  
虽然缺少公开讨论数据，但当天合入的修复覆盖了多个用户可直接感知的关键路径，体现出项目当前以**跨平台稳定性与桌面体验打磨**为主。  
从数据看，仓库当日交互热度偏低：Issue 活跃度为 0、PR 待处理量为 0；不过这也可能反映代码评审集中、Issue 分类或外部反馈渠道等因素，不能仅据此判断社区参与不足。  
综合评估，项目健康度为**稳定偏积极**：无积压、无新回归报告、无版本发布压力，但需要持续关注 Windows 兼容性修复的实际用户反馈。

---

## 2. 版本发布

过去 24 小时内**无新版本发布**，因此暂无可说明的版本更新、破坏性变更或迁移事项。

---

## 3. 项目进展

### PR #3028：提升 Windows 文本选择与浮动工具栏可靠性

- **状态：** CLOSED
- **领域：** `build`、`main`
- **作者：** [@fisherdaddy](https://github.com/fisherdaddy)
- **链接：** [PR #3028](https://github.com/netease-youdao/LobsterAI/pull/3028)

**主要进展：**

该 PR 修复了 Windows 桌面伴侣在文本选中后不显示工具栏的问题。问题在 **200% 系统缩放**以及 Edge、WPS 等场景中较明显：选择钩子只会在文本行矩形的“物理高度”低于 100 像素时接受 UIA 选区，因此在高 DPI 环境下，大字号文本可能无法触发工具栏。

**推进价值：**

- 改善 Windows 高缩放环境下的文本选择体验；
- 提升 Edge、WPS 等常用桌面应用的兼容性；
- 降低用户无法调用 AI 助手处理选中内容的频率。

---

### PR #3027：在 Windows 原生快照 Chrome MCP 进程树

- **状态：** CLOSED
- **领域：** `docs`、`main`、`openclaw`
- **作者：** [@fisherdaddy](https://github.com/fisherdaddy)
- **链接：** [PR #3027](https://github.com/netease-youdao/LobsterAI/pull/3027)

**主要进展：**

该 PR 修复 Windows 下浏览器工具可能长期不可用的问题。LobsterAI 的应用内浏览器默认通过 OpenClaw 的 `existing-session` Chrome MCP 驱动连接；修复前，系统会通过 PowerShell 枚举进程来验证会话归属。该方式可能遗漏由浏览器派生的子进程，导致 OpenClaw 无法正确确认会话所有权，进而拒绝使用浏览器工具。

修复后改为**原生快照 Chrome MCP 进程树**，提升进程识别准确性和会话接管稳定性。

**推进价值：**

- 降低 Windows 应用内浏览器工具“永久不可用”的风险；
- 改善 OpenClaw 对 Chrome MCP 会话的归属校验；
- 减少 PowerShell 进程枚举方式带来的兼容性和性能问题。

---

### PR #3026：保持浏览器登录入口可见，并提供可恢复流程

- **状态：** CLOSED
- **领域：** `renderer`、`main`、`cowork`
- **作者：** [@fisherdaddy](https://github.com/fisherdaddy)
- **链接：** [PR #3026](https://github.com/netease-youdao/LobsterAI/pull/3026)

**主要进展：**

该 PR 修复用户点击左下角登录按钮后“没有任何反应”的问题。根据 PR 摘要，主要原因包括：

1. 打开浏览器前，应用向 overmind 请求登录 URL，但没有设置超时，网络不稳定时请求可能耗时 **7–9 秒**；
2. 在等待或失败期间，登录入口缺少及时反馈，用户难以判断按钮是否生效。

修复方向是让登录状态在等待、失败和恢复过程中保持可见，并提高失败后的可恢复性。

**推进价值：**

- 改善登录入口的即时反馈；
- 降低弱网环境下用户重复点击或认为功能失效的概率；
- 提升浏览器登录及账号体系的可用性。

---

### 今日整体推进判断

当日 3 个关闭 PR 均已合入或关闭，没有待合并项，也没有新 Issue 暴露明显回归。项目推进重点集中在：

- **Windows 桌面交互可靠性**
- **浏览器工具与 OpenClaw 会话稳定性**
- **登录流程反馈与故障恢复**

这些改动直接覆盖用户高频操作路径，对实际体验有明确改善，但由于当日没有发布新版本，修复何时随正式版本分发仍需关注。

---

## 4. 社区热点

过去 24 小时没有新增或活跃 Issue，也没有带评论或点赞数据的公开 PR，因此无法基于社区互动量选出“今日最热门”条目。

按修复影响范围排序，今日值得关注的 PR 为：

1. [PR #3028 — Windows 文本选择工具栏可靠性](https://github.com/netease-youdao/LobsterAI/pull/3028)  
   - 涉及 Windows 高 DPI、Edge、WPS 和文本选择等高频场景。
2. [PR #3027 — Windows 原生快照 Chrome MCP 进程树](https://github.com/netease-youdao/LobsterAI/pull/3027)  
   - 直接影响应用内浏览器工具能否持续可用。
3. [PR #3026 — 浏览器登录入口可见与可恢复](https://github.com/netease-youdao/LobsterAI/pull/3026)  
   - 解决用户感知最明显的“点击登录按钮无反应”问题。

### 热点背后的共性诉求

虽然当天没有公开评论数据，但从三个 PR 的修复目标可以归纳出用户诉求：

- 在 Windows 环境下，核心功能应能稳定工作，尤其是**文本选择、浏览器调用和登录**；
- 高缩放、非默认浏览器及办公软件应获得更好的兼容支持；
- 异步流程必须有明确反馈，不能让按钮在数秒内表现得像“失效”；
- 失败后应允许用户恢复，而不是只能重新启动应用。

---

## 5. Bug 与稳定性

### 高优先级

#### Windows 应用内浏览器可能长期不可用

- **相关 PR：** [PR #3027](https://github.com/netease-youdao/LobsterAI/pull/3027)
- **状态：** 已有修复 PR，PR 已关闭
- **影响范围：** Windows、OpenClaw、应用内浏览器、Chrome MCP
- **风险：** 用户可能无法继续使用浏览器自动化能力，且问题表现为持续不可用，影响范围较大。

#### 登录按钮点击后表现为“无效”

- **相关 PR：** [PR #3026](https://github.com/netease-youdao/LobsterAI/pull/3026)
- **状态：** 已有修复 PR，PR 已关闭
- **影响范围：** 登录、浏览器授权、弱网环境
- **风险：** 请求登录 URL 最长可能等待 7–9 秒且缺少反馈，容易造成重复点击、误判故障或放弃登录。

### 中优先级

#### Windows 高缩放下文本选择不显示工具栏

- **相关 PR：** [PR #3028](https://github.com/netease-youdao/LobsterAI/pull/3028)
- **状态：** 已有修复 PR，PR 已关闭
- **影响范围：** 200% 缩放、大字号文本、Edge、WPS
- **风险：** 用户虽然可以选中文本，但无法唤出对应 AI 操作入口，属于核心交互链路的功能性缺失。

### 稳定性观察

- 今日没有新报告的崩溃、回归或待修复 Bug。
- 没有待合并 PR 意味着当前公开修复队列较干净。
- 建议在下一版本发布前重点执行以下回归测试：
  - Windows 100%、150%、200% 缩放；
  - Edge、Chrome、WPS 中的大字号文本选择；
  - 弱网、断网及 overmind 服务响应缓慢时的登录；
  - Chrome MCP 主进程与派生子进程混合存在时的会话接管。

---

## 6. 功能请求与路线图信号

今日没有新的公开功能需求 Issue，因此没有足够依据确认具体的新功能排期。不过，从已关闭 PR 的方向可以观察到以下路线图信号：

### 高可信度信号

#### 持续加强 Windows 平台可靠性

- [PR #3027](https://github.com/netease-youdao/LobsterAI/pull/3027) 使用原生机制处理进程树；
- [PR #3028](https://github.com/netease-youdao/LobsterAI/pull/3028) 调整高 DPI 下的 UIA 选区判断。

这表明 Windows 适配正在从“功能可用”推进到“复杂环境下稳定可用”。后续可能继续覆盖：

- 更多 DPI 比例；
- 更多浏览器与办公软件；
- Chrome MCP 多进程、异常退出和会话恢复；
- Windows 权限与安全软件环境下的兼容性。

#### 改善关键流程的可感知反馈

- [PR #3026](https://github.com/netease-youdao/LobsterAI/pull/3026) 强调登录入口始终可见且可恢复。

这一方向可能进一步扩展到网络请求超时提示、加载状态、失败重试和错误说明，作为桌面应用的基础体验统一建设。

### 下一版本可能纳入的内容

如果上述已关闭 PR 尚未进入稳定分支，以下修复很可能优先随下一补丁版本发布：

1. Windows 高缩放文本选择工具栏修复；
2. Chrome MCP 进程树原生快照；
3. 浏览器登录入口反馈与恢复机制。

目前没有数据支持新增 AI Agent、模型接入或多端同步等功能将进入下一版本。

---

## 7. 用户反馈摘要

今日没有公开 Issue 评论，无法提供评论级用户满意度统计。可从已修复问题中提炼出以下真实使用痛点：

### 使用场景

- 用户在 **Windows 高缩放显示器**中，从 Edge 或 WPS 选择较长、字号较大的文本；
- 用户通过应用内浏览器使用 OpenClaw 浏览器工具；
- 用户在网络不稳定时点击左下角登录按钮并等待浏览器授权。

### 主要不满意点

- 文本选区存在，但工具栏不出现；
- 浏览器工具可能进入不可用状态，且缺少足够的恢复能力；
- 登录按钮点击后长时间没有反馈，用户无法区分“正在加载”与“按钮失效”。

### 改善预期

- 核心操作在不同 DPI 和常用 Windows 应用中表现一致；
- 浏览器会话归属识别更准确，失败后可以恢复；
- 登录过程有即时反馈，超时和失败可被用户理解并重试。

由于没有 Issue 评论、点赞或用户满意度数据，不能据此判断用户对这些修复的最终认可程度。

---

## 8. 待处理积压

### 当前积压情况

- **长期未响应的 Issue：** 数据未提供，无法确认。
- **长期未响应的 PR：** 数据未提供，无法确认。
- **今日待处理 PR：** 0 个。
- **今日活跃或新增 Issue：** 0 个。
- **今日未关闭的重要 PR：** 0 个。

### 维护建议

虽然当前没有显性积压，仍建议维护者关注：

1. **确认三个修复是否已进入发布分支**  
   - [PR #3026](https://github.com/netease-youdao/LobsterAI/pull/3026)
   - [PR #3027](https://github.com/netease-youdao/LobsterAI/pull/3027)
   - [PR #3028](https://github.com/netease-youdao/LobsterAI/pull/3028)

2. **补充 Windows 高 DPI 回归用例**  
   特别是 200% 缩放、大字号文本，以及 Edge/WPS 的组合场景。

3. **验证登录 URL 请求超时后的错误恢复路径**  
   覆盖断网、DNS 异常、服务器无响应和浏览器授权取消等情况。

4. **观察 Chrome MCP 会话异常后的恢复机制**  
   避免仅解决首次连接识别，而遗留浏览器崩溃或子进程残留导致的持续不可用。

---

## 总结

LobsterAI 在 2026-11-08 的公开仓库动态表现为**低讨论、高交付稳定性**：没有 Issue 或版本活动，但集中关闭了 3 个重要修复 PR，分别改善 Windows 文本选择、OpenClaw 浏览器会话和登录反馈。项目积压清空，整体工程方向明确；下一阶段的关键不是继续堆叠功能，而是验证这些修复在真实 Windows 环境中的覆盖率，并尽快随稳定版本交付。

</details>

<details>
<summary><strong>QwenPaw</strong> — <a href="https://github.com/agentscope-ai/QwenPaw">agentscope-ai/QwenPaw</a></summary>

# QwenPaw 项目动态日报

**日期：2026-11-08**  
**数据范围：过去 24 小时 GitHub 活跃更新**  
**整体判断：项目处于高活跃开发期，但尚未形成版本发布闭环；今日以搜索性能、上下文管理、桌面兼容性和模型提供商稳定性修复为主。**

---

## 1. 今日速览

- 过去 24 小时共有 **6 个 Issues 更新**和 **11 个 PR 更新**，且所有条目均保持开放状态，显示贡献者和维护者当前关注度较高。
- 今日 PR 数量明显高于 Issue 数量，主要围绕 **Scroll 记忆搜索、上下文压缩、模型提供商兼容、桌面端修复及工具生态扩展**展开。
- 项目暂无新版本发布，11 个待合并 PR 尚未形成正式交付；其中多条 PR 已开始直接覆盖当日新开的 Issue，形成较清晰的“问题—修复”闭环。
- 今日最值得关注的技术主线是：**降低历史搜索重复开销、改善超时与数据库错误诊断、增强网关兼容性，以及减少上下文压缩和 token 估算导致的请求失败**。
- 社区反馈仍暴露明显体验短板，包括 Windows 11 IoT 启动失败、偶发无答复、复制操作不稳定、新版 UI 响应迟缓，以及长任务工具调用缺乏可读状态。

---

## 3. 项目进展

> 今日没有已合并或关闭的 PR。以下为最值得关注、仍在评审中的活跃 PR。

### 3.1 历史搜索：减少重复查询并开放行级搜索

- [PR #8623](https://github.com/agentscope-ai/QwenPaw/pull/8623)：复用已解析的对话轮次边界，避免 `_collect_distinct_hits` 和 `_attach_search_turns` 对同一批搜索结果重复解析 turn start seq，降低历史搜索的额外开销。  
  对应问题：[Issue #8619](https://github.com/agentscope-ai/QwenPaw/issues/8619)。

- [PR #8625](https://github.com/agentscope-ai/QwenPaw/pull/8625)：在结构化 `recall_history` 工具中开放 `include_turn` 参数，使仅需匹配行的场景不必承担完整轮次展开成本，并保持既有位置参数调用兼容。  
  对应问题：[Issue #8621](https://github.com/agentscope-ai/QwenPaw/issues/8621)。

- [PR #8624](https://github.com/agentscope-ai/QwenPaw/pull/8624) 与 [PR #8622](https://github.com/agentscope-ai/QwenPaw/pull/8622)：均尝试修正 SQLite 错误分类，避免在搜索 deadline 已过后把锁冲突、数据库繁忙等 `sqlite3.OperationalError` 统一误报为超时；只有实际被进度处理器中断的查询才应视为 timeout。  
  对应问题：[Issue #8620](https://github.com/agentscope-ai/QwenPaw/issues/8620)。

**进展评价：**  
这是今日最集中的开发方向。三个 PR 同步覆盖搜索性能、接口能力和错误诊断，表明维护者正在系统整理 Scroll 搜索链路。若 #8622、#8624 中仅保留一条且补齐测试，预计可较快合入；不过二者修改范围接近，合并前需要明确实现取舍，避免重复或冲突修复。

### 3.2 上下文与 Token 管理

- [PR #8613](https://github.com/agentscope-ai/QwenPaw/pull/8613)：规划上下文压缩时预留模型配置的输出 token 上限，而不是使用固定 4K 或窗口的 5%，防止 `prompt + max_tokens` 超出模型上下文窗口。

- [PR #8614](https://github.com/agentscope-ai/QwenPaw/pull/8614)：使用提供商返回的 usage 数据校准 prompt token 估算。现有“UTF-8 字节数除以 4”的算法会低估数字、UUID、时间戳和标识符密集型输入，从而推迟压缩并增加上下文溢出风险。

- [PR #8615](https://github.com/agentscope-ai/QwenPaw/pull/8615)：识别 OpenAI 兼容网关返回的 context-overflow HTTP 400，包括 Strata 等提供商使用的“prompt 与 max tokens 合计超过上下文窗口”错误格式。

**进展评价：**  
三项改动共同补强上下文管理链路：从触发阈值、token 估算到错误识别，方向一致且具备较强用户价值。其成败关键在于测试覆盖：需要验证不同提供商返回的 usage 字段差异、压缩后的实际预留空间，以及网关错误文本是否具有足够稳定的识别模式。

### 3.3 模型提供商与 Agent 稳定性

- [PR #8617](https://github.com/agentscope-ai/QwenPaw/pull/8617)：当已保存的模型提供商被禁用时提供回退机制，避免 `active_model` 仍指向已禁用提供商后，所有渠道运行直接触发 `ProviderError`。  
  对应问题：[Issue #8579](https://github.com/agentscope-ai/QwenPaw/issues/8579)。

- [PR #8292](https://github.com/agentscope-ai/QwenPaw/pull/8292)：清理缺少 `file_id` 或 `file_data` 的异常文件内容块，避免 OpenAI 兼容提供商因无效历史消息直接返回 HTTP 400。  
  对应问题：[Issue #8280](https://github.com/agentscope-ai/QwenPaw/issues/8280)。

### 3.4 桌面端与工具生态

- [PR #8524](https://github.com/agentscope-ai/QwenPaw/pull/8524)：修复旧版桌面桥接在 Windows 下打开工作区 HTML 预览时使用 percent-encoded `file://` URI 导致路径错误的问题，改为使用解码后的本地路径。

- [PR #8618](https://github.com/agentscope-ai/QwenPaw/pull/8618)：新增 SpecStream 作为 `web_search` provider，进一步扩展联网搜索工具的供应方选择。

---

## 4. 社区热点

### 4.1 讨论最集中：桌面端偶发无答复、复制失败与 UI 性能下降

- [Issue #8521](https://github.com/agentscope-ai/QwenPaw/issues/8521)
- **评论数：3，为今日 Issues 中最多**
- 热度来源：同一报告集中反馈了三个高频、直接影响日常使用的问题：
  1. 发送问题后频繁只显示思考过程、没有最终答复；
  2. Chrome 和 Edge 中 `Ctrl+C` 经常需要按多次才能复制成功；
  3. 新版 UI 相比旧版响应迟缓、模型切换步骤繁琐，并存在大量空白区域。

**背后诉求：**  
用户期待桌面端首先保证“回复可见、复制可靠、交互及时”。当前问题跨越后端生成链路和前端事件处理，优先级应高于单纯的新 UI 布局优化。建议维护者至少补充错误日志或状态提示，明确“正在等待模型响应”和“响应已生成但未渲染”的区别。

### 4.2 Windows 11 IoT LTSC 启动失败

- [Issue #8616](https://github.com/agentscope-ai/QwenPaw/issues/8616)
- **评论数：2**
- 2.3.0-beta.1 在 Windows 11 IoT Enterprise LTSC 上出现 `"path not found"`，随后进入 AppHang；同一设备上的 2.2.2.post.1 可以正常运行。

**背后诉求：**  
这是典型的测试环境兼容性问题。虽然问题发生在 beta 版本而非当前稳定版，但若缺少 IoT LTSC 或类似精简 Windows 环境支持，可能影响企业内网、工业设备及受管终端部署。维护者应明确受影响平台范围，并在 2.3.0 正式版前完成启动路径和运行时依赖检查。

### 4.3 长任务中工具调用缺乏可读状态

- [Issue #8612](https://github.com/agentscope-ai/QwenPaw/issues/8612)
- **评论数：1**
- 用户认可多数工具已经有简洁描述，但“执行”类工具调用仍难以判断具体行为，在长任务中尤其明显。

**背后诉求：**  
该诉求本质上是如何改善 Agent 运行过程的“可观测性”。用户希望看到正在执行的命令、目标文件、关键参数或当前阶段，而不只是通用的“执行工具”。这会直接影响用户对长任务是否卡死、是否仍在推进的判断。

---

## 5. Bug 与稳定性

### 严重级别：高

1. **Windows 11 IoT LTSC 上 2.3.0-beta.1 无法启动**
   - [Issue #8616](https://github.com/agentscope-ai/QwenPaw/issues/8616)
   - 现象：`path not found` 后进入 AppHang。
   - **已有明确 fix PR：暂未发现。**
   - 风险：可能影响 beta 版在企业 Windows 环境的可用性，应优先复现并确认是否存在通用 Windows 路径兼容风险。

2. **对话偶发只有思考内容、没有最终答复**
   - [Issue #8521](https://github.com/agentscope-ai/QwenPaw/issues/8521)
   - 现象：QwenPaw 随机频繁不展示最终回答，问题归属尚未确认。
   - **已有明确 fix PR：暂未发现。**
   - 风险：属于核心链路可用性问题，可能导致用户误以为模型或 Agent 已崩溃。

### 严重级别：中高

3. **上下文压缩未充分预留模型输出 token**
   - [PR #8613](https://github.com/agentscope-ai/QwenPaw/pull/8613)
   - **已有 fix PR：是，PR 尚待合并。**

4. **token 估算显著低估数字、UUID 和时间戳密集型 prompt**
   - [PR #8614](https://github.com/agentscope-ai/QwenPaw/pull/8614)
   - **已有 fix PR：是，PR 尚待合并。**

5. **OpenAI 兼容网关的上下文溢出 400 无法被正确识别**
   - [PR #8615](https://github.com/agentscope-ai/QwenPaw/pull/8615)
   - **已有 fix PR：是，PR 尚待合并。**

6. **已禁用模型提供商导致 Agent 所有渠道运行失败**
   - [PR #8617](https://github.com/agentscope-ai/QwenPaw/pull/8617)
   - **已有 fix PR：是，PR 尚待合并。**

### 严重级别：中

7. **SQLite 锁冲突等错误被误报为搜索超时**
   - [Issue #8620](https://github.com/agentscope-ai/QwenPaw/issues/8620)
   - **已有 fix PR：是，共两条**
     - [PR #8622](https://github.com/agentscope-ai/QwenPaw/pull/8622)
     - [PR #8624](https://github.com/agentscope-ai/QwenPaw/pull/8624)

8. **历史搜索重复解析对话轮次边界**
   - [Issue #8619](https://github.com/agentscope-ai/QwenPaw/issues/8619)
   - **已有 fix PR：是**
     - [PR #8623](https://github.com/agentscope-ai/QwenPaw/pull/8623)

9. **异常文件内容块导致 OpenAI 兼容请求返回 HTTP 400**
   - [PR #8292](https://github.com/agentscope-ai/QwenPaw/pull/8292)
   - **已有 fix PR：是，PR 尚待合并。**

10. **Windows 下工作区 HTML 预览无法通过本地路径打开**
    - [PR #8524](https://github.com/agentscope-ai/QwenPaw/pull/8524)
    - **已有 fix PR：是，PR 尚待合并。**

### 严重级别：低至中

11. **复制操作需要重复按 `Ctrl+C`**
    - [Issue #8521](https://github.com/agentscope-ai/QwenPaw/issues/8521)
    - **已有明确 fix PR：暂未发现。**

12. **新版 UI 响应迟缓、模型切换效率低**
    - [Issue #8521](https://github.com/agentscope-ai/QwenPaw/issues/8521)
    - **已有明确 fix PR：暂未发现。**

---

## 6. 功能请求与路线图信号

### 6.1 `recall_history` 支持仅返回匹配行

- 请求：[Issue #8621](https://github.com/agentscope-ai/QwenPaw/issues/8621)
- 实现：[PR #8625](https://github.com/agentscope-ai/QwenPaw/pull/8625)
- **纳入下一版本可能性：高。**

接口在底层已经支持 `include_turn`，本次主要是将能力透出到结构化工具层，改动小、兼容策略明确，并且已有配套实现。

### 6.2 增强“执行”类工具调用的可读性

- 请求：[Issue #8612](https://github.com/agentscope-ai/QwenPaw/issues/8612)
- **纳入下一版本可能性：中高。**

这是明确且常见的 Agent UX 需求。可以考虑按工具类型展示参数摘要，例如命令名、目标路径、任务阶段和执行状态。长期方向可能包括结构化工具事件、折叠详情和执行进度摘要。

### 6.3 增加新旧 UI 切换入口

- 请求：[Issue #8521](https://github.com/agentscope-ai/QwenPaw/issues/8521)
- **纳入下一版本可能性：中。**

用户明确偏好旧版 UI 的紧凑布局和流畅响应。短期提供 UI 切换开关有助于降低升级阻力，但长期仍应定位新版交互迟缓和模型切换路径冗长的问题，而不只是保留旧界面。

### 6.4 新增 SpecStream 搜索提供商

- 实现：[PR #8618](https://github.com/agentscope-ai/QwenPaw/pull/8618)
- **纳入下一版本可能性：中。**

扩展搜索 provider 有利于工具生态，但需关注配置方式、凭据管理、超时策略、结果格式一致性，以及新 provider 的基准声明是否由项目独立验证。

---

## 7. 用户反馈摘要

### 核心痛点

- **回复可靠性不足**：用户频繁遇到只显示思考内容、没有最终答复的情况；这直接破坏对话的基本信任。
- **桌面交互不稳定**：复制失败并非单浏览器偶发现象，Chrome 和 Edge 均被反馈，说明问题可能位于共享的前端选择、剪贴板权限或 WebView 桥接层。
- **新版 UI 性能与密度下降**：用户认为新版操作反应迟缓，模型切换区域存在大量空闲空间；这与 #8524 涉及的旧版桌面桥接问题也表明桌面新旧架构可能存在体验分化。
- **企业 Windows 环境兼容性不足**：IoT LTSC 上旧版可用而新版 beta 失败，暴露出 beta 验证矩阵对精简 Windows 环境的覆盖不足。
- **长任务缺少可解释性**：执行类工具调用无法说明“正在做什么”，用户难以判断任务进展或是否卡住。
- **搜索接口能力存在但未暴露**：底层支持行级搜索，结构化工具却没有参数透传，反映工具层抽象和底层能力之间存在一定脱节。

### 积极反馈

- 大部分工具调用已经能用一句自然语言描述，用户明确认可这种可读性方向。
- 2.2.2.post.1 在用户所述 IoT LTSC 环境中能够稳定运行，可作为后续 beta 回归对照。
- 社区愿意提供高质量技术复现，包括版本、Python、操作系统、CPU、路径、错误输出和截图，降低了问题定位成本。

---

## 8. 待处理积压

### 8.1 长期开放且今日仍在更新的 Issue

- [Issue #8521](https://github.com/agentscope-ai/QwenPaw/issues/8521)
  - 创建于 **2026-10-31**，今日仍有评论。
  - 虽不属于完全无人响应，但同时承载回复缺失、复制失败和 UI 性能三个问题，容易因范围过大而延迟闭环。
  - 建议拆分为三个可验收子问题，并分别指定后端、剪贴板/前端和 UI 性能负责人。

### 8.2 跨期开放 PR

- [PR #8292](https://github.com/agentscope-ai/QwenPaw/pull/8292)
  - 创建于 **2026-10-17**，至今日仍开放，已积累约三周。
  - 该修复针对真实 HTTP 400 兼容问题，建议维护者明确评审阻塞点；若核心逻辑已完成，应优先补测并推进合入。

- [PR #8524](https://github.com/agentscope-ai/QwenPaw/pull/8524)
  - 创建于 **2026-11-01**，至今仍未合并。
  - 与当前 Windows 用户反馈相关，建议结合 [Issue #8616](https://github.com/agentscope-ai/QwenPaw/issues/8616) 一并检查 Windows 路径编码和启动兼容性。

### 8.3 重复修复需要收敛

- [PR #8622](https://github.com/agentscope-ai/QwenPaw/pull/8622) 与 [PR #8624](https://github.com/agentscope-ai/QwenPaw/pull/8624) 同时处理 [Issue #8620](https://github.com/agentscope-ai/QwenPaw/issues/8620)。
  - 建议维护者明确主实现，避免重复维护、测试口径分裂或后续合并冲突。

### 8.4 今日新开但尚未进入实现的请求

- [Issue #8621](https://github.com/agentscope-ai/QwenPaw/issues/8621)：已有 PR，但仍未合并。
- [Issue #8619](https://github.com/agentscope-ai/QwenPaw/issues/8619)：已有 PR，但仍未合并。
- [Issue #8612](https://github.com/agentscope-ai/QwenPaw/issues/8612)：尚无对应实现 PR。
- [Issue #8616](https://github.com/agentscope-ai/QwenPaw/issues/8616)：尚无明确修复 PR。

---

## 项目健康度结论

**活跃度：较高；稳定性：中等；发布成熟度：中等偏低。**

今日贡献密度较高，且多项新 Issue 已获得对应 PR，说明问题响应与实现跟进能力良好。尤其是 Scroll 搜索和上下文管理相关工作，系统性较强，有望改善长对话、长期记忆和多提供商环境下的可靠性。

但项目仍处于“修复和评审集中、尚未合并交付”的阶段；与此同时，核心对话偶发无答复和 Windows beta 启动失败尚无明确修复方案。建议下一阶段优先完成以下闭环：

1. 合并并验证 #8622/#8624、#8623、#8625；
2. 统一评估上下文压缩和 token 校准的 #8613–#8615；
3. 为 #8616 和 #8521 补充可复现日志、明确负责人；
4. 对跨期 PR #8292、#8524 给出评审结论；
5. 在下一次版本发布前补齐 Windows IoT LTSC 与主流浏览器的回归矩阵。

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/NousResearch/hermes-agent">NousResearch/hermes-agent</a></summary>

# Hermes Agent 项目动态日报

**统计日期：2026-11-08**  
**数据范围：过去 24 小时**

---

## 1. 今日速览

Hermes Agent 过去 24 小时共更新 **50 条 Issue**（其中 40 条新开或活跃、10 条关闭）和 **50 条 PR**（48 条待合并、2 条已合并或关闭），整体保持较高开发吞吐，但产出尚未有效进入主干。  
讨论最集中的是 Windows 更新链路、GitHub PR 权限、Telegram 消息投递、模型凭证选择以及插件与 MCP 安全治理，说明项目当前的主要压力来自**跨平台兼容、网关可靠性和凭证安全**。  
今日没有发布新版本；PR 虽多，仍有 48 条处于待合并状态，核心修复大多以 `ci-reviewed` 或待审 PR 形式存在，因此对终端用户的直接改善有限。  
新增 PR 集中于 Telegram 投递、日志脱敏、插件生命周期、终端稳定性和插件目录扩张，体现了项目正从单纯功能迭代转向**安全、可靠性和生态扩展**。  
综合判断：**项目活跃度较高、工程投入充足，但主干合并节奏偏慢，Issue/PR 积压和平台边缘问题使健康度评为“中高、但有下降压力”**。

---

## 2. 版本发布

过去 24 小时**无新版本发布**。

由于没有新 Release，窗口内提出的以下修复尚不能确认已随正式版本交付：

- Windows `state.db` 更新误恢复：[#147938](https://github.com/NousResearch/hermes-agent/issues/147938)
- Windows 依赖代际清理失败：[#129300](https://github.com/NousResearch/hermes-agent/issues/129300)，修复 PR [#129307](https://github.com/NousResearch/hermes-agent/pull/129307)
- 本地语音转写失败：[#135245](https://github.com/NousResearch/hermes-agent/issues/135245)
- Desktop `clarify` 返回空响应：[#134230](https://github.com/NousResearch/hermes-agent/issues/134230)
- Telegram 未处理更新被静默确认：[#151077](https://github.com/NousResearch/hermes-agent/pull/151077)

---

## 3. 项目进展

### 3.1 今日合并或关闭的 PR

过去 24 小时共有 **50 条 PR 更新**，仅 **2 条已合并或关闭**，合并转化率约 **4%**。这表明仓库更新量虽高，但大量工作仍停留在待审队列。

当前展示数据未提供这 2 条已合并/关闭 PR 的具体标题，因此无法可靠列出其贡献内容。结合待合并 PR，主要进展方向如下：

1. **Telegram 可靠性与消息投递**
   - 修复 emoji 内容导致自动 TTS 语音气泡丢失：[PR #150980](https://github.com/NousResearch/hermes-agent/pull/150980)
   - 未识别更新不再被静默标记为完成，并在关机时等待任务释放：[PR #151077](https://github.com/NousResearch/hermes-agent/pull/151077)
   - Cron 消息可投递到指定 Telegram DM Topic：[PR #151111](https://github.com/NousResearch/hermes-agent/pull/151111)

2. **安全与隐私**
   - MCP 工具描述、参数说明、选项和默认值清理不可见 Unicode，防止隐蔽提示注入：[PR #151112](https://github.com/NousResearch/hermes-agent/pull/151112)
   - Cookie 和 `Set-Cookie` 凭证在日志、工具输出和请求转储中脱敏：[PR #151119](https://github.com/NousResearch/hermes-agent/pull/151119)

3. **插件与任务生命周期**
   - 新增 `on_session_open` 插件钩子，使插件能在会话创建或恢复时立即执行：[PR #151120](https://github.com/NousResearch/hermes-agent/pull/151120)
   - 避免把纯进度提示或表情占位重新送入模型，并阻止 Cron 将其作为成功结果投递：[PR #151121](https://github.com/NousResearch/hermes-agent/pull/151121)

4. **Windows 与终端稳定性**
   - 隔离 Windows 依赖代际清理中的单文件失败，避免整个回收流程中断：[PR #129307](https://github.com/NousResearch/hermes-agent/pull/129307)
   - Git 编辑器和凭证提示失败时快速退出，不再无限挂起：[PR #112477](https://github.com/NousResearch/hermes-agent/pull/112477)
   - 增加可选的原生 PowerShell 前台终端执行路径：[PR #85027](https://github.com/NousResearch/hermes-agent/pull/85027)

5. **模型与 Desktop 稳定性**
   - Desktop 单次模型请求超时提升至 120 秒，减少慢响应被客户端丢弃：[PR #150777](https://github.com/NousResearch/hermes-agent/pull/150777)
   - 尊重提供商 `x-should-retry: false` 响应头，避免无意义重复重试：[PR #151124](https://github.com/NousResearch/hermes-agent/pull/151124)

### 3.2 总体推进程度

- **功能面**：插件目录新增 `hermes-phone`、`agent-app`、`wake-me-when`、`hermes-sysadmin`、`kin` 等项目，显示生态扩展活跃：
  - [hermes-phone](https://github.com/NousResearch/hermes-agent/pull/149263)
  - [agent-app](https://github.com/NousResearch/hermes-agent/pull/151127)
  - [wake-me-when](https://github.com/NousResearch/hermes-agent/pull/151135)
  - [hermes-sysadmin](https://github.com/NousResearch/hermes-agent/pull/151123)
  - [kin](https://github.com/NousResearch/hermes-agent/pull/150982)
- **可靠性面**：Telegram、Desktop、终端和 Windows 更新链路均有针对性修复。
- **交付面**：48 条 PR 尚未合并，且当日没有版本发布，因此“开发进展明显、用户侧交付有限”。

---

## 4. 社区热点

### 4.1 GitHub API 无法创建 PR

- **Issue**：[ #131859 ](https://github.com/NousResearch/hermes-agent/issues/131859)
- **状态**：开放
- **评论数**：58，为今日最活跃条目
- **热度**：58 条评论 / 0 个点赞

用户能够创建 Issue 和 Fork，却无法通过 API 对目标仓库创建 PR，报 `CreatePullRequest permission error`。该问题从 2026-10-03 起持续存在，已明显跨越常规支持窗口。

**背后诉求：**

- 恢复自动化 Fork → PR 工作流；
- 明确问题属于账号权限、GitHub 策略还是仓库配置；
- 为贡献者提供可操作的权限修复步骤；
- 维护者需尽快给出根因或明确的升级路径。

### 4.2 Windows 更新时 `state.db` 被误判损坏

- **Issue**：[ #147938 ](https://github.com/NousResearch/hermes-agent/issues/147938)
- **状态**：开放，P0
- **评论数**：8

Windows 更新流程在暂停运行时后读取数据库头部失败，可能把“文件仍被占用”误判为损坏，并自动恢复陈旧快照，甚至覆盖健康数据。

**背后诉求：**

- 数据安全优先于自动恢复便利性；
- 验证逻辑必须区分“活动锁”“短暂 IO 失败”和“真实损坏”；
- 自动恢复前应增加保守策略、备份和明确确认；
- 这是可导致会话状态丢失或回退的高优先级问题。

### 4.3 Telegram 多段消息被静默丢弃

- **Issue**：[ #146067 ](https://github.com/NousResearch/hermes-agent/issues/146067)
- **状态**：开放
- **评论数**：5

Telegram 的 `rich_message.blocks` 新格式未被适配：当 `Message.text` 为空而正文位于富文本块时，适配器无法路由消息，消息直接消失。

**背后诉求：**

- Telegram 富文本、多段落和粘贴列表必须完整送达；
- 无法识别的新消息格式需要记录日志，不能静默丢弃；
- 网关应具备向前兼容的正文提取层。

### 4.4 Telegram 网关整体可靠性 Wave

- **Issue**：[ #111364 ](https://github.com/NousResearch/hermes-agent/issues/111364)
- **状态**：开放
- **评论数**：3

该 Issue 汇总空诊断信息、入站活性判断、异常断线恢复以及 `send_path_degraded` 重放等连续性问题。

**背后诉求：**

- Telegram 不应“看起来在线但实际不收发消息”；
- 故障期间需要可观测日志和可靠重放；
- 用户希望从零散补丁升级为系统性的网关可靠性方案。

### 4.5 模型别名使用错误凭证

- **Issue**：[ #148255 ](https://github.com/NousResearch/hermes-agent/issues/148255)
- **状态**：开放，涉及安全
- **评论数**：2

`/model <alias>` 配置 `key_env` 后，单次请求刷新或网关重启可能退回默认 Anthropic 密钥，带来错误计费和跨模型凭证混用风险。

**背后诉求：**

- 每个别名必须稳定绑定自己的凭证；
- 刷新和重启不能丢失别名级环境变量；
- 修复前需要检查日志或账单是否出现错误模型调用。

### 4.6 插件目录快速扩张

- [hermes-phone PR](https://github.com/NousResearch/hermes-agent/pull/149263)
- [PayOps PR](https://github.com/NousResearch/hermes-agent/pull/150178)
- [agent-app PR](https://github.com/NousResearch/hermes-agent/pull/151127)
- [wake-me-when PR](https://github.com/NousResearch/hermes-agent/pull/151135)
- [kin PR](https://github.com/NousResearch/hermes-agent/pull/150982)

插件目录的提交明显增加，且不少采用固定 commit 方式锁定版本。其积极意义是扩展生态；风险是审查、供应链、权限范围和维护标准需要同步扩张。

---

## 5. Bug 与稳定性

### P0 / 严重

1. **Windows 更新可能用陈旧快照覆盖健康数据库**
   - Issue：[ #147938 ](https://github.com/NousResearch/hermes-agent/issues/147938)
   - 风险：会话状态回退、用户数据丢失、自动恢复误报成功
   - 已有明确 fix PR：**未发现**
   - 建议优先级：**立即处理**

### P1 / 高

2. **Codex 后端部分 zstd 压缩请求返回 HTTP 400**
   - Issue：[ #148898 ](https://github.com/NousResearch/hermes-agent/issues/148898)
   - 风险：Codex 请求间歇性失败，且被错误判定为不可重试
   - 已有明确 fix PR：**未发现**
   - 关联 PR：[ #151124 ](https://github.com/NousResearch/hermes-agent/pull/151124) 改善重试策略，但不直接解决 zstd 兼容性

3. **模型别名可能错误使用默认 Anthropic 密钥**
   - Issue：[ #148255 ](https://github.com/NousResearch/hermes-agent/issues/148255)
   - 风险：凭证混用、错误计费、潜在安全与审计问题
   - 已有明确 fix PR：**未发现**

4. **Git for Windows 固定版本仍信任受损证书链**
   - Issue：[ #148835 ](https://github.com/NousResearch/hermes-agent/issues/148835)
   - 风险：依赖下载或 Git 操作可能受到中间人攻击影响
   - 已有明确 fix PR：**未发现**
   - 建议：尽快升级固定版本或更新 CA bundle

### P2 / 中等

5. **Windows 依赖代际回收因硬链接 `.pyd` 权限错误整体中止**
   - Issue：[ #129300 ](https://github.com/NousResearch/hermes-agent/issues/129300)
   - Fix PR：[ #129307 ](https://github.com/NousResearch/hermes-agent/pull/129307)
   - 状态：**已有修复 PR，待合并**

6. **Telegram 多段/富文本消息被静默丢弃**
   - Issue：[ #146067 ](https://github.com/NousResearch/hermes-agent/issues/146067)
   - Fix PR：**未发现直接对应项**
   - 相关可靠性 PR：[ #151077 ](https://github.com/NousResearch/hermes-agent/pull/151077)

7. **Desktop 未知 provider 被误报为 API Key 被拒**
   - Issue：[ #151085 ](https://github.com/NousResearch/hermes-agent/issues/151085)
   - 风险：错误诊断把配置问题引导至密钥轮换
   - Fix PR：**未发现**

8. **`browser_vault` 原生验证码等待期间浏览器会话可能失效**
   - Issue：[ #151079 ](https://github.com/NousResearch/hermes-agent/issues/151079)
   - 风险：用户无法完成验证或被要求重复认证
   - Fix PR：**未发现**

9. **Weixin iLink DM ID 无法识别为显式发送目标**
   - Issue：[ #151069 ](https://github.com/NousResearch/hermes-agent/issues/151069)
   - 风险：有效微信收件人无法被定向发送
   - Fix PR：**未发现**

10. **Windows 候选路径名为 `nul` 时整条补全请求被丢弃**
    - Issue：[ #148767 ](https://github.com/NousResearch/hermes-agent/issues/148767)
    - 风险：Windows 路径补全请求无响应
    - Fix PR：**未发现**

11. **Windows 无人值守更新可能永久等待 UAC 交互**
    - Issue：[ #126624 ](https://github.com/NousResearch/hermes-agent/issues/126624)
    - 状态：**已关闭**
    - 建议确认关闭原因及回归覆盖

12. **本地 STT 因 faster-whisper / PyAV 参数不兼容而全部失败**
    - Issue：[ #135245 ](https://github.com/NousResearch/hermes-agent/issues/135245)
    - 状态：**已关闭**
    - 建议确认修复已进入实际发布版本

13. **Desktop `clarify` 返回空 `user_response`**
    - Issue：[ #134230 ](https://github.com/NousResearch/hermes-agent/issues/134230)
    - 状态：**已关闭**
    - 建议确认桌面端与 Docker 部署组合下的回归测试

14. **Conda 环境变量清理不完整**
    - Issue：[ #82255 ](https://github.com/NousResearch/hermes-agent/issues/82255)
    - 风险：残留 `CONDA_SHLVL` 导致子进程误判 Conda 环境
    - Fix PR：**未发现**

15. **`hermes doctor` 错误判定活动源码安装为陈旧记录**
    - Issue：[ #131630 ](https://github.com/NousResearch/hermes-agent/issues/131630)
    - 风险：误导用户执行清理，潜在影响当前安装
    - Fix PR：**未发现**

16. **配置往返写回后丢失条目原始引号**
    - Issue：[ #147594 ](https://github.com/NousResearch/hermes-agent/issues/147594)
    - 风险：配置格式漂移、重写和合并稳定性下降
    - Fix PR：**未发现**

17. **Docker Profile 在 multiplexed Desktop 中无法流式显示**
    - Issue：[ #140892 ](https://github.com/NousResearch/hermes-agent/issues/140892)
    - 风险：Bot Screen 中断，影响远程与容器化工作流
    - Fix PR：**未发现**

18. **Telegram 配置的 DM Topic 每次重连都会重建**
    - Issue：[ #151136 ](https://github.com/NousResearch/hermes-agent/issues/151136)
    - 风险：Topic 状态漂移、重复创建及配置写入竞争
    - Fix PR：**未发现**

### 已关闭的重要问题

以下问题今日关闭，说明已有一定收敛：

- 插件加载时遍历 `sys.modules` 导致字典尺寸变化：[ #141917 ](https://github.com/NousResearch/hermes-agent/issues/141917)
- Telegram iOS 分享到 New Chat 后无法正常回复：[ #105206 ](https://github.com/NousResearch/hermes-agent/issues/105206)
- `/background` 未恢复 Telegram DM Topic：[ #97498 ](https://github.com/NousResearch/hermes-agent/issues/97498)
- `/context` 将 256K 回退值误报为真实上下文窗口：[ #139492 ](https://github.com/NousResearch/hermes-agent/issues/139492)
- Desktop 多问题 clarify 表单吞掉普通输入：[ #146775 ](https://github.com/NousResearch/hermes-agent/issues/146775)
- Telegram DM 回复持续引用会话初始消息：[ #90280 ](https://github.com/NousResearch/hermes-agent/issues/90280)

---

## 6. 功能请求与路线图信号

### 6.1 会话级文件协调

- **需求**：[ #78418 ](https://github.com/NousResearch/hermes-agent/issues/78418)
- 内容：通过 journal、审批和 reconciliation，在多个会话写入同一文件前等待其他会话完成。
- **路线图判断**：**中长期重要**。它直接面向多代理并行、CLI/TUI/Desktop/Cron 共用工作区这一核心场景，但需要定义锁、超时、冲突解决与恢复语义，实施成本较高。

### 6.2 原生 PowerShell 终端

- **需求**：[ #149731 ](https://github.com/NousResearch/hermes-agent/issues/149731)
- PR：[ #85027 ](https://github.com/NousResearch/hermes-agent/pull/85027)
- 内容：Windows 本地终端增加 `pwsh` 选项，默认仍保留 Bash。
- **路线图判断**：**近期较高概率纳入**。已有长期开放的实现 PR，且与 Windows 用户痛点高度一致；主要待决点是兼容性、配置迁移和文档。

### 6.3 插件目录扩展

- [hermes-phone](https://github.com/NousResearch/hermes-agent/pull/149263)
- [PayOps](https://github.com/NousResearch/hermes-agent/pull/150178)
- [agent-app](https://github.com/NousResearch/hermes-agent/pull/151127)
- [wake-me-when](https://github.com/NousResearch/hermes-agent/pull/151135)
- [kin](https://github.com/NousResearch/hermes-agent/pull/150982)
- [site-skills](https://github.com/NousResearch/hermes-agent/pull/151130)
- [hermes-sysadmin](https://github.com/NousResearch/hermes-agent/pull/151123)

**路线图判断：**这些提交说明生态目录仍是快速扩张方向。由于多个 PR 引入第三方代码，建议下一阶段同时强化：

- 固定 commit 与来源校验；
- 权限和数据访问范围说明；
- 安装前扫描；
- 版本升级与回滚策略；
- 插件质量和维护活跃度门槛。

### 6.4 插件会话生命周期

- PR：[ #151120 ](https://github.com/NousResearch/hermes-agent/pull/151120)
- 内容：新增 `on_session_open`，插件可在会话创建或重开时立即响应。
- **路线图判断**：**功能价值明确、具备近期合入条件**，但需要防止插件钩子阻塞会话初始化，并明确异常隔离与超时。

### 6.5 TUI Kanban Review 唤醒

- **需求**：[ #151134 ](https://github.com/NousResearch/hermes-agent/issues/151134)
- 内容：TUI 未包含 `review_requested` 通知类型，而消息聊天、Desktop 和经典 CLI 已有支持。
- **路线图判断**：**小改动、高一致性价值**，预计适合近期修复；当前未发现对应 PR。

---

## 7. 用户反馈摘要

### 7.1 高频真实痛点

1. **“能连接，但消息没有送达”**
   - Telegram 多段落消息被静默丢弃：[ #146067 ](https://github.com/NousResearch/hermes-agent/issues/146067)
   - 未支持类型被静默回执：[PR #151077](https://github.com/NousResearch/hermes-agent/pull/151077)
   - Cron 未正确解析命名 Topic：[PR #151111](https://github.com/NousResearch/hermes-agent/pull/151111)

   用户的核心要求不是单纯“增加功能”，而是**消息必须可追踪、可重放、不可静默消失**。

2. **Windows 是最明显的体验断层**
   - 更新误恢复数据库：[ #147938 ](https://github.com/NousResearch/hermes-agent/issues/147938)
   - 垃圾回收不清理任何内容：[ #129300 ](https://github.com/NousResearch/hermes-agent/issues/129300)
   - 无人值守更新永久阻塞：[ #126624 ](https://github.com/NousResearch/hermes-agent/issues/126624)
   - PowerShell 路径行为不兼容：[ #149731 ](https://github.com/NousResearch/hermes-agent/issues/149731)
   - `nul` 路径触发请求丢失：[ #148767 ](https://github.com/NousResearch/hermes-agent/issues/148767)

   用户期待 Windows 与 Unix 拥有同等级别的更新、路径和终端可靠性。目前 Windows 仍是主要故障集中区。

3. **错误诊断会误导修复方向**
   - Unknown provider 被显示成 API Key 被拒：[ #151085 ](https://github.com/NousResearch/hermes-agent/issues/151085)
   - `hermes doctor` 错报源码安装陈旧：[ #131630 ](https://github.com/NousResearch/hermes-agent/issues/131630)
   - `state.db` 恢复成功状态被误报：[ #147938 ](https://github.com/NousResearch/hermes-agent/issues/147938)

   用户不仅要求“恢复功能”，还要求**错误信息准确说明根因，避免无效轮换密钥或误删安装**。

4. **凭证隔离和安全审计成为高优先级**
   - 模型别名可能使用默认密钥：[ #148255 ](https://github.com/NousResearch/hermes-agent/issues/148255)
   - Cookie 可能出现在日志和转储中：[PR #151119](https://github.com/NousResearch/hermes-agent/pull/151119)
   - MCP 工具元数据可能携带不可见 Unicode：[PR #151112](https://github.com/NousResearch/hermes-agent/pull/151112)
   - Git for Windows 固定版本信任受损 CA：[ #148835 ](https://github.com/NousResearch/hermes-agent/issues/148835)

   用户对 Hermes 的信任取决于：**日志不泄密、别名不串钥、工具元数据不能隐蔽操纵模型、依赖供应链可信**。

5. **桌面端输入和交互状态容易“卡死”**
   - clarify 表单吞掉普通消息：[ #146775 ](https://github.com/NousResearch/hermes-agent/issues/146775)
   - clarify 返回空响应：[ #134230 ](https://github.com/NousResearch/hermes-agent/issues/134230)
   - 慢模型响应被 30 秒客户端截止时间丢弃：[PR #150777](https://github.com/NousResearch/hermes-agent/pull/150777)

   用户希望 Desktop 的交互状态清晰：正在等待什么、是否可继续输入、失败后如何恢复。

### 7.2 正面信号

- 多个跨平台插件提交表明用户愿意将 Hermes 作为插件宿主：[hermes-phone](https://github.com/NousResearch/hermes-agent/pull/149263)、[agent-app](https://github.com/NousResearch/hermes-agent/pull/151127)、[kin](https://github.com/NousResearch/hermes-agent/pull/150982)。
- 安全 PR 主动扩大脱敏范围，说明维护者开始将日志、工具元数据和 MCP 描述视为统一信任边界。
- Telegram、Docker、Windows 和 Desktop 均有针对性修复，表明反馈正在转化为工程任务。

---

## 8. 待处理积压

### 8.1 长期高热度 Issue

1. **GitHub API PR 创建权限异常**
   - [ #131859 ](https://github.com/NousResearch/hermes-agent/issues/131859)
   - 2026-10-03 创建，58 条评论
   - 建议：**最高优先级社区响应事项**，明确是否可由用户自行修复，并避免贡献者持续等待。

2. **Telegram 网关可靠性 Wave**
   - [ #111364 ](https://github.com/NousResearch/hermes-agent/issues/111364)
   - 2026-09-15 创建
   - 建议：将日志、重连恢复、发送降级和重放拆分为可验收子任务。

3. **Windows 依赖代际清理**
   - [ #129300 ](https://github.com/NousResearch/hermes-agent/issues/129300)
   - 修复 PR：[ #129307 ](https://github.com/NousResearch/hermes-agent/pull/129307)
   - 建议：合并后安排 Windows 专项回归，并验证约 0.9GB 残留确已回收。

4. **会话级文件协调**
   - [ #78418 ](https://github.com/NousResearch/hermes-agent/issues/78418)
   - 2026-08-04 创建
   - 建议：先发布设计说明与最小原型，再扩展至跨会话冲突和审批机制。

5. **Conda 环境变量清理**
   - [ #82255 ](https://github.com/NousResearch/hermes-agent/issues/82255)
   - 建议：补齐 `CONDA_PREFIX`、`CONDA_SHLVL` 等变量的一致清理策略。

### 8.2 长期待审 PR

1. **原生 PowerShell 前台终端**
   - [PR #85027](https://github.com/NousResearch/hermes-agent/pull/85027)
   - 2026-08-13 创建
   - 建议：完成 Windows 决策后尽快合并或给出明确替代方案。

2. **Windows 垃圾回收修复**
   - [PR #129307](https://github.com/NousResearch/hermes-agent/pull/129307)
   - 建议：优先合并，直接缓解每次更新约 0.9GB 的磁盘占用增长。

3. **终端交互式提示快速失败**
   - [PR #112477](https://github.com/NousResearch/hermes-agent/pull/112477)
   - 建议：完成 CI 验证后合入，降低代理任务长时间挂起概率。

### 8.3 积压风险判断

- **PR 积压偏高**：50 条更新中仅 2 条已合并或关闭，48 条待合并；即使部分属于 `ci-reviewed`，仍反映审阅吞吐不足。
- **高价值修复未形成版本交付**：今日无 Release，用户无法确认 P0/P1/P2 修复何时生效。
- **长期 Issue 追踪不足**：部分 Issue 自 8 月或 9 月起持续开放，涉及 Telegram、终端、Windows 和会话协调等核心能力。
- **建议维护者关注顺序**：
  1. 合并 Windows 数据安全与清理修复；
  2. 处理模型别名凭证串用和 Git CA 信任问题；
  3. 完成 Telegram 富文本解析、Topic 持久化和静默丢消息修复；
  4. 对长期 PR 给出明确 accepted/rejected 结论；
  5. 提升批量审阅与发布节奏，降低 48 条待合并积压。

---

## 今日结论

Hermes Agent 当前呈现出“**高活跃开发、明显安全投入、广泛生态扩张，但主干合并与版本交付不足**”的状态。Windows、Telegram 和凭证管理是近期最需要集中资源的三个方向。安全相关 PR 和 Telegram 可靠性修复值得肯定，但若不能尽快合并并随 Release 发布，用户侧仍会持续面对更新卡死、消息丢失、配置误判和凭证混用等问题。

**项目健康度：中高。**  
- 活跃度：高  
- 工程质量信号：积极  
- 安全治理：明显增强  
- 用户交付速度：偏慢  
- 核心风险：Windows 数据安全、长期 PR/Issue 积压、缺少版本发布节奏

</details>

<details>
<summary><strong>OpenHuman</strong> — <a href="https://github.com/tinyhumansai/openhuman">tinyhumansai/openhuman</a></summary>

# OpenHuman 项目动态日报

**日期：2026-11-08**  
**数据范围：过去 24 小时 GitHub 活动**  
**整体健康度：中等偏紧张，但修复与治理正在加速**

## 1. 今日速览

过去 24 小时共更新 **3 个 Issues、5 个 PR**，其中 **4 个 PR 仍待合并、1 个已关闭**，项目保持较高研发活跃度，但暂无新版本发布。  
当前主要矛盾集中在 **CI 稳定性、密钥授权流程和渠道可靠性**：托管 CI Fast 自 EX63 退役后持续失败，Settings 保存 API Key 时存在授权被拒问题。  
另一方面，内存模块降级为非关键路径、线程级工具搜索参数以及 Telegram 失败重试等改动已进入开发阶段。  
综合判断：项目正在从“测试执行不稳定”向“恢复可信赖交付基线”过渡；高优先级问题尚未全部关闭，发布健康度暂不宜评为良好。

---

## 2. 版本发布

过去 24 小时 **无新版本发布**，暂无 Release Notes、破坏性变更或升级迁移说明。

---

## 3. 项目进展

### 已合并或关闭的重要 PR

#### CI 流程迁移完成，托管 Fast lanes 成为新的决定性流程

- **PR #8584 — ci: remove the EX63 flow and run hosted lanes on every PR**  
  状态：**已关闭**（按本期数据视为已结束，而非明确标注 merged）  
  链接：https://github.com/tinyhumansai/openhuman/pull/8584

主要变化：

- 移除已停止使用的 EX63 runners 及 `ci-fast.yml` 路由。
- `ci-fast-hosted.yml` 调整为在每个 PR 上运行托管 lanes，不再依赖组织成员分流。
- CI Gate 不再等待旧的 `CI Fast`，改由 `CI Fast (hosted)` 决定结果。

**进展评价：** 这是本期最明确的 CI 架构调整，结束了旧 runner 退役后流程衔接不完整的问题。不过，新托管 lanes 仍被 [#8594](https://github.com/tinyhumansai/openhuman/issues/8594) 报告无法稳定通过，因此“迁移完成”尚不等于“CI 已恢复”。

### 待合并的主要功能与修复

#### 内存处理脱离关键路径，并引入线程级搜索与上下文选项

- **PR #8599 — feat: memory block off the critical path, and per-thread tool_search and context options**  
  状态：**开放，待合并**  
  链接：https://github.com/tinyhumansai/openhuman/pull/8599

主要方向：

- 将 memory block 从工具调用和 turn 的关键路径中移出。
- 支持按线程配置 `tool_search` 和 context 选项。
- 目标之一是降低工具调用和对话 turn 的 token 与耗时成本。
- 当前仍是 Draft，且依赖 `tinyhumansai/tinyagents#596`、`tinyhumansai/tinysearch#49` 等上游变更。

**进展评价：** 属于下一阶段的核心性能与上下文治理能力，但依赖链尚未完全就绪，短期发布确定性有限。

---

## 4. 社区热点

本期所有 Issues 均产生 **1 条评论**，所有 PR 均未记录评论或点赞。因此没有出现传统意义上的高互动讨论；热点主要由**优先级、影响范围和 CI 阻塞程度**决定。

### 1. 托管 CI Fast 持续失败

- **Issue #8594 — Hosted CI Fast lanes never pass: rust-cov timeout, security-module test failures**  
  优先级：**P1**  
  链接：https://github.com/tinyhumansai/openhuman/issues/8594

**热度依据：**

- 属于 PR 合并门禁的核心路径。
- Issue 指出自 2026-10-29 后，**10 月 30 日至 11 月 6 日共有 47 次托管运行进入 lanes，但无一次通过 gate**。
- 关联修复 PR [#8595](https://github.com/tinyhumansai/openhuman/pull/8595) 已展开。

**背后的诉求：** 维护者希望恢复可预测的 CI 门禁，避免超时和安全模块失败长期阻塞所有合并。

### 2. Settings 保存 API Key 时授权流程异常

- **Issue #8596 — Saving an API key from Settings fails: secret grant denied without a WebChat origin**  
  优先级：**P1**  
  链接：https://github.com/tinyhumansai/openhuman/issues/8596

**热度依据：**

- 直接影响 Settings 与 CLI 的核心配置流程。
- 用户保存 API Key 时出现 `Failed to encrypt api_key`，且系统没有提供批准授权的机会。
- 已有专项修复 PR [#8597](https://github.com/tinyhumansai/openhuman/pull/8597)。

**背后的诉求：** 密钥写入不应因缺少 WebChat origin 而被静默拒绝；系统需要显式、可交互的 secret grant 审批流程。

### 3. 密钥同意测试在 CI 中从未真正执行

- **Issue #8598 — Run TS-E2E S-06 in CI with the test keyring responder off**  
  优先级：**P3**  
  链接：https://github.com/tinyhumansai/openhuman/issues/8598

**热度依据：**

- S-06 测试只有在 `OPENHUMAN_TEST_KEYRING_CONSENT=off` 时运行。
- 当前没有 CI job 设置该变量，因此测试虽然存在，关键路径实际未被 CI 覆盖。

**背后的诉求：** 修复测试环境配置，而不只是修复代码，以避免同类密钥授权回归再次漏网。

### 4. 内存与线程级工具控制

- **PR #8599 — Memory block off the critical path, and per-thread tool_search and context options**  
  链接：https://github.com/tinyhumansai/openhuman/pull/8599

**热度依据：**

- 涉及响应延迟、token 成本和线程上下文控制，属于用户可感知的性能改进。
- 当前无评论、无反应，互动热度一般，但功能影响范围较大。

**背后的诉求：** 让长对话和工具密集型任务更高效，并减少无关内存内容对主执行路径的干扰。

---

## 5. Bug 与稳定性

### P1｜托管 CI Fast 门禁持续失败

- **Issue：** [#8594](https://github.com/tinyhumansai/openhuman/issues/8594)
- **Fix PR：** [#8595](https://github.com/tinyhumansai/openhuman/pull/8595)，**待合并**
- **影响：**
  - `rust-cov` 超时。
  - security-module 测试失败。
  - 连续 47 次 hosted runs 未通过 gate。
- **风险等级：高**
- **判断：** 已形成明确修复方案。PR 计划将 `rust-cov` 拆分为 `core`、`product`、`facades`、`tui` 四个 nextest shard，并将挂起测试限制为 5 分钟；同时修复静态检查与门禁覆盖率检查。但 PR 未合并前，CI 阻塞风险仍然存在。

### P1｜Settings 保存 API Key 因 secret grant 被拒

- **Issue：** [#8596](https://github.com/tinyhumansai/openhuman/issues/8596)
- **Fix PR：** [#8597](https://github.com/tinyhumansai/openhuman/pull/8597)，**待合并**
- **表现：**
  - 产品构建中调用 `config_update_model_settings` 并写入 `api_key` 时出现 `Failed to encrypt api_key`。
  - 无 WebChat origin 或 test keyring responder 时，用户没有被询问授权。
  - Secret grant 在任何人可批准前就被拒绝。
- **修复方向：**
  - 将需要 `native_secret_grant` 的保存操作挂起为 pending approval。
  - 在 Settings 中新增 `SecretGrantApprovalDeck`，供用户批准授权。
- **风险等级：高**
- **判断：** 已有明确 fix PR，尚未进入发布版本。

### P2｜托管覆盖率任务粒度过粗，容易超时

- **关联 Issue：** [#8594](https://github.com/tinyhumansai/openhuman/issues/8594)
- **Fix PR：** [#8595](https://github.com/tinyhumansai/openhuman/pull/8595)，**待合并**
- **表现：** 单个 `rust-cov` 任务可能长时间占用，最长可消耗约 100 分钟 job 时间。
- **风险等级：中高**
- **判断：** 分片方案有望降低单次失败与整体超时概率，但需要通过实际 CI 运行验证稳定性。

### P3｜S-06 密钥同意 E2E 实际未被 CI 执行

- **Issue：** [#8598](https://github.com/tinyhumansai/openhuman/issues/8598)
- **关联 PR：** 暂无明确对应 PR；可能需要由 [#8597](https://github.com/tinyhumansai/openhuman/pull/8597) 的测试补充或单独 CI 改动覆盖。
- **表现：** 测试文件存在，但环境变量未配置，关键路径在 CI 中长期处于 skip 状态。
- **风险等级：中**
- **判断：** 属于测试覆盖缺口，目前没有明确 fix PR 标记。

### P3｜Telegram 瞬时回复失败被静默丢弃

- **PR #8593 — fix(channels): retry transient Telegram reply failures with backoff**  
  状态：**待合并**  
  链接：https://github.com/tinyhumansai/openhuman/pull/8593
- **关联 Issue：** [#8590](https://github.com/tinyhumansai/openhuman/issues/8590)
- **表现：**
  - Telegram 发送失败仅通过 `eprintln!` 输出。
  - 桌面应用无法稳定捕获 stderr。
  - 网络错误、HTTP 429 和 5xx 等瞬时故障没有重试，回复可能静默丢失。
- **修复方向：** 对瞬时错误实施带退避的重试。
- **风险等级：中**
- **判断：** 已有 fix PR，尚未合并。

---

## 6. 功能请求与路线图信号

### 内存模块退出关键路径

- **PR：** [#8599](https://github.com/tinyhumansai/openhuman/pull/8599)
- **信号：** 项目正在优先优化工具调用和 turn 的延迟、token 消耗。
- **路线图判断：** 很可能进入后续性能版本，但当前为 Draft，且依赖上游 `tinyagents` 与 `tinysearch` 合并，发布时点暂不确定。

### 线程级 `tool_search` 与 context 选项

- **PR：** [#8599](https://github.com/tinyhumansai/openhuman/pull/8599)
- **信号：** 上下文与搜索能力将从全局配置进一步走向线程级精细控制。
- **路线图判断：** 属于明确的 agent 控制面扩展，具备进入下一阶段版本的基础。

### 原生密钥授权的显式审批界面

- **PR：** [#8597](https://github.com/tinyhumansai/openhuman/pull/8597)
- **信号：** Settings 将承担 secret grant 的可视化审批职责。
- **路线图判断：** 这是 P1 稳定性修复，优先级高于一般功能扩展；一旦合并，预计应尽快进入补丁版本。

### Telegram 可靠投递

- **PR：** [#8593](https://github.com/tinyhumansai/openhuman/pull/8593)
- **信号：** 渠道层正在从“尽力发送”转向带可观测性、退避重试的可靠投递。
- **路线图判断：** 属于稳定性增强，具备随近期版本发布的可能。

### CI 覆盖率分片

- **PR：** [#8595](https://github.com/tinyhumansai/openhuman/pull/8595)
- **信号：** Rust 核心的测试与覆盖率体系进入分片、限时和门禁强化阶段。
- **路线图判断：** 更偏向内部工程基建，不一定形成用户可见功能，但会直接影响后续合并与发布节奏。

---

## 7. 用户反馈摘要

本期评论量有限，暂无点赞数据，因此以下结论主要来自 Issue 复现信息及维护者补充。

### 核心痛点

1. **保存 API Key 无法完成，也没有明确授权入口**  
   用户在产品构建中配置模型 API Key 时遭遇加密失败，而系统未展示批准操作。该问题直接阻断模型配置和首次使用流程，是当前最明确的产品体验缺陷。  
   详见 [#8596](https://github.com/tinyhumansai/openhuman/issues/8596)。

2. **CI 长期红灯掩盖真实回归**  
   维护者统计显示，47 次 hosted runs 均未通过 lanes，说明问题不是偶发抖动。大量安全模块测试和覆盖率超时可能使团队难以区分环境故障与真实代码回归。  
   详见 [#8594](https://github.com/tinyhumansai/openhuman/issues/8594)。

3. **测试“存在但未执行”造成虚假安全感**  
   S-06 密钥同意流程虽已编入测试文件，却因 CI 环境变量缺失始终跳过。用户无法依赖现有 CI 结果判断该流程是否可靠。  
   详见 [#8598](https://github.com/tinyhumansai/openhuman/issues/8598)。

4. **Telegram 回复可能无提示地丢失**  
   渠道错误只写入 stderr，桌面端难以捕获，用户侧表现为回复消失，既没有重试，也缺少足够的可诊断信息。  
   详见 [#8593](https://github.com/tinyhumansai/openhuman/pull/8593)。

### 满意点与积极信号

本期没有足够评论或 reaction 数据支持明确的满意度判断。不过，三个用户可感知问题均已有针对性 PR，CI 失败也形成了具体分片方案，表明维护响应方向较清晰。

---

## 8. 待处理积压

### 需优先合并的 P1 修复

1. **[#8595](https://github.com/tinyhumansai/openhuman/pull/8595)**  
   修复托管 CI Fast 门禁，是解除当前开发阻塞的关键。应优先验证四个覆盖率 shard、安全模块测试和最终 coverage presence 检查。

2. **[#8597](https://github.com/tinyhumansai/openhuman/pull/8597)**  
   修复 secret grant 在审批前被拒的问题。应补充 Settings、CLI、无 WebChat origin 及 test responder 关闭状态下的端到端测试。

3. **[#8598](https://github.com/tinyhumansai/openhuman/issues/8598)**  
   当前缺少明确对应 PR。建议确认由 #8597 一并补齐，或建立独立 CI job/steps，并显式设置 `OPENHUMAN_TEST_KEYRING_CONSENT=off`。

### 需跟踪依赖与发布窗口的 PR

4. **[#8599](https://github.com/tinyhumansai/openhuman/pull/8599)**  
   仍受 `tinyhumansai/tinyagents#596` 与 `tinyhumansai/tinysearch#49` 阻塞。维护者应在上游依赖状态明确后更新 Draft 状态和合并计划。

5. **[#8593](https://github.com/tinyhumansai/openhuman/pull/8593)**  
   Telegram 重试已就绪但尚未合并。建议确认重试上限、退避策略、是否具备幂等保护，以及桌面端日志可观测性。

---

## 今日结论

OpenHuman 今日的主要工作是**收敛交付体系中的关键失败点**：托管 CI 红灯、密钥授权异常、Telegram 静默丢消息，以及内存与线程上下文性能优化。当前共有 4 个待合并 PR，修复覆盖面较集中，但两个 P1 问题仍未正式落地，CI 也尚无连续通过记录。  
项目活跃度较高，方向明确，工程响应速度良好；下一关键观察点是 **#8595 与 #8597 能否合并并通过 hosted CI**。在验证完成前，建议将项目健康度维持在“中等偏紧张”，暂不扩大发布承诺。

</details>

---
*本日报由 [Big Model Radar](https://github.com/96loveslife/big_model_radar) 自动生成。*
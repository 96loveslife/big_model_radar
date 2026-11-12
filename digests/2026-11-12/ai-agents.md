# OpenClaw 生态日报 2026-11-12

> Issues: 500 | PRs: 500 | 覆盖项目: 8 个 | 生成时间: 2026-11-12 06:41 UTC

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

**日期：2026-11-12**  
**数据范围：过去 24 小时 GitHub 活动；版本信息按 2026-11-12 公开数据整理**

---

## 1. 今日速览

过去 24 小时 OpenClaw 共出现 **500 条 Issue 更新**（新开/活跃 292，关闭 208）和 **500 条 PR 更新**（待合并 327，已合并/关闭 173），发布 **1 个 beta 版本 `v2026.11.5-beta.2`**。  
整体开发吞吐很高，但 **待合并 PR 占 PR 更新量的 65.4%**，明显高于已合并/关闭的 34.6%，说明当前主要瓶颈已从开发转向**评审、验证与合并吞吐**。

今日议题高度集中在 **Gateway 稳定性、消息可靠性、会话状态、模型回退及权限安全**。其中，外部大插件捕获阻塞事件循环、Gateway 基线内存达到约 1.9 GB、Telegram 网络失败后消息丢失、Claude CLI 长回复丢失等问题，直接影响生产可用性。

项目健康度可评估为 **“高活跃、较高风险、待收敛”**：修复提案数量充足，但不少高优先级问题仍缺少新 fix PR 或维护者决策，部分功能与安全边界变更尚待证明和审查。

---

## 2. 版本发布

### [`v2026.11.5-beta.2`](https://github.com/openclaw/openclaw/releases/tag/v2026.11.5-beta.2)

该版本为本日报窗口内唯一发布版本，属于 **beta 预发布版本**，重点改善长会话和大历史记录处理。

#### 主要更新

- **大型会话历史支持双向分页浏览**
  - 可向前、向后浏览长对话。
  - 明确展示历史边界。
  - 归档读取有数量上限，避免一次性加载过量数据。
  - 相关工作覆盖 [#188450](https://github.com/openclaw/openclaw/issues/188450)、[#188483](https://github.com/openclaw/openclaw/issues/188483)、[#188557](https://github.com/openclaw/openclaw/issues/188557)、[#188372](https://github.com/openclaw/openclaw/issues/188372)、[#190690](https://github.com/openclaw/openclaw/issues/190690)。

- **macOS 应用保留已保存密钥**
  - Release Notes 明确提及 macOS app 会保留 saved secrets。
  - 这通常意味着应用升级或重建配置时不再无条件清除密钥，但完整行为仍应以该版本完整变更日志为准。

- **历史状态恢复修复进入 beta**
  - Issue [#141474](https://github.com/openclaw/openclaw/issues/141474) 指出，相关恢复修复已在 `main`，并进入 `v2026.11.5-beta.1` 和 `v2026.11.5-beta.2`。
  - 该修复覆盖部分历史状态恢复场景，但 Issue 中仍指出尚未进入稳定版 `v2026.11.3`、`v2026.11.2` 和 `v2026.9.37`。

#### 破坏性变更与迁移注意事项

- 暂无数据表明本次 beta 包含明确的破坏性 API 变更。
- **生产环境不宜直接采用 beta**，尤其是 Gateway、会话历史、macOS 密钥及模型运行时相关部署。
- 从稳定版升级前，应确认：
  1. 是否依赖旧版会话历史读取行为；
  2. macOS 应用密钥是否完整保留；
  3. 是否依赖自动迁移或历史状态恢复；
  4. 是否存在依赖完整历史一次性载入的插件或自动化。
- 相关 PR [#197536](https://github.com/openclaw/openclaw/pull/197536) 正修复 Claude CLI 在长会话执行 `/new` 后永久拒绝保存历史的问题；[#197535](https://github.com/openclaw/openclaw/pull/197535) 则修复 Claude CLI 手动 `/compact` 重写全历史、未利用 prompt cache 的问题。这些修改说明 Claude CLI 历史边界仍是 beta 阶段的重要风险区。

---

## 3. 项目进展

### 3.1 今日新增及更新的重要 PR

| PR | 方向 | 进展与意义 |
|---|---|---|
| [#197521](https://github.com/openclaw/openclaw/pull/197521) | 修复主分支 CI | 清理已无消费者的内部消息类型导出，恢复 unused-export 与依赖检查。当前已关闭，说明主线质量门禁问题已处理。 |
| [#197562](https://github.com/openclaw/openclaw/pull/197562) | 会话 fork 优化 | 让 fork 在重建历史与父会话请求不同时，仍可复用父会话 prompt cache，有望降低长会话 fork 的上下文成本。 |
| [#197593](https://github.com/openclaw/openclaw/pull/197593) | Worktree 修复 | 避免大型 Git 配置通过环境变量传输时触发 `E2BIG`，改善隔离 worktree 和 review 初始化流程。 |
| [#197455](https://github.com/openclaw/openclaw/pull/197455) | Gateway 并发稳定性 | 避免请求和定时器同步重开所有权锁文件，防止文件系统卡顿阻塞 Gateway 事件循环。 |
| [#197539](https://github.com/openclaw/openclaw/pull/197539) | Exec 安全检查异步化 | 将 safe-bin 路径检查移出 Gateway 主线程，避免 `/bin`、`/usr/bin` 查询卡顿拖住请求。 |
| [#197586](https://github.com/openclaw/openclaw/pull/197586) | 日志系统异步化 | 将文件日志准备、准入、轮转和追加交给惰性 worker，降低日志 I/O 卡顿对 Gateway 请求的阻塞。 |
| [#197584](https://github.com/openclaw/openclaw/pull/197584) | 安装检查异步化 | 避免周期安装检查中的同步文件系统访问阻塞 Gateway 主线程。 |
| [#197535](https://github.com/openclaw/openclaw/pull/197535) | Claude CLI 压缩缓存 | 让手动 `/compact` 读取 warm prompt cache，减少整段历史的缓存写入成本。 |
| [#197536](https://github.com/openclaw/openclaw/pull/197536) | Claude CLI 历史保存 | 修复长会话 `/new` 后新会话始终无法保存历史的问题。 |
| [#197588](https://github.com/openclaw/openclaw/pull/197588) | OpenAI 会话亲和性 | 为 “Sign in with ChatGPT” 请求加入 `session_id` affinity header，避免每次请求都生成新的 prompt-cache key。 |
| [#197533](https://github.com/openclaw/openclaw/pull/197533) | Codex 迁移容错 | 单个记忆文件不可读时仍生成迁移计划，而不是让整个 dry-run 失败。 |
| [#197560](https://github.com/openclaw/openclaw/pull/197560) | 托管模型目录 | 将 SubQ、Fastino、Perplexity Decision 等插件模型补入 hosted v3 catalog，减少本地插件与托管目录不一致。 |
| [#197589](https://github.com/openclaw/openclaw/pull/197589) | Web UI 视频播放 | 修复上传视频仅在侧栏打开的问题，改为支持会话内播放及展开。 |
| [#197556](https://github.com/openclaw/openclaw/pull/197556) | Web UI 会话切换 | 防止后台预览抢占并切换用户当前聊天会话。 |
| [#197587](https://github.com/openclaw/openclaw/pull/197587) | Web UI 会话侧栏 | 避免折叠侧栏分组时无关地加载旧会话。 |
| [#197590](https://github.com/openclaw/openclaw/pull/197590) | 工具权限语义 | 修复 `tools.allow: []` 在加入额外控制项后仍被解释为“不限制”的问题，涉及安全边界。 |
| [#197592](https://github.com/openclaw/openclaw/pull/197592) | GitHub 工具权限 | 在未配置发布身份时收窄内置 GitHub 工具，避免继续暴露已认证操作能力。 |
| [#197585](https://github.com/openclaw/openclaw/pull/197585) | macOS / OpenClaw ID | 探索以 OpenClaw ID 作为 macOS App 主连接，并通过 App 自有 loopback proxy 提供 dashboard。 |
| [#197538](https://github.com/openclaw/openclaw/pull/197538) | 节点加入链接 | 在 OpenClaw ID 节点邀请链接中携带 Discovery origin，减少双重输入。 |

### 3.2 整体推进判断

今日 PR 活动说明项目正同时推进三条主线：

1. **稳定性治理**
   - 锁轮询、safe-bin 检查、日志和安装检查均从 Gateway 主线程异步化。
   - 配合 large-plugin capture、会话恢复和 SQLite 问题修复，方向正确。

2. **长会话与成本优化**
   - 双向分页历史、fork prompt cache、Claude CLI compact cache、OpenAI session affinity 集中改善长对话的可用性和成本。

3. **权限与插件安全收敛**
   - Agent 凭据请求改为显式 opt-in。
   - GitHub 工具、`tools.allow` 和 secrets 工具权限成为重点审查对象。

**推进程度：**功能面覆盖较全面，修复方向明确；但 327 个待合并 PR 中包含多个 security-sensitive、compatibility-risk 和 proof-required 项，尚不能仅凭 PR 数量判定已稳定落地。

---

## 4. 社区热点

### 4.1 高讨论度 Issues

#### 1. 外部大插件捕获阻塞 Gateway 数分钟

- Issue：[#160959](https://github.com/openclaw/openclaw/issues/160959)
- 状态：OPEN
- 评论：81，为今日样本最高
- 等级：P0，影响 `crash-loop`

大型外部插件或 workspace 插件的依赖树在启动及模型运行时重新发布时，会长时间占用 Gateway 事件循环。用户核心诉求是：**插件规模不应拖垮 Gateway 主进程**。该问题从 2026.9.6 引入插件生成捕获后出现，回归属性明确，是今日最值得优先处理的生产稳定性问题。

#### 2. 崩溃恢复后 Agent 永久不可用

- Issue：[#166634](https://github.com/openclaw/openclaw/issues/166634)
- 状态：CLOSED
- 评论：28

Gateway 非正常退出后，后台 Agent 准备因 SQLite session reclamation checkpoint 过期失败，随后 `chat.history`、`chat.metadata`、`models.list` 和进度卡请求持续返回 `UNAVAILABLE`。问题核心是**恢复失败会形成持久不可用状态**。目前已关闭，说明已有处理路径，但应关注回归测试是否覆盖不同崩溃点和 checkpoint 过期组合。

#### 3. `sessions_yield` 导致 Agent 永久等待

- Issue：[#141474](https://github.com/openclaw/openclaw/issues/141474)
- 状态：OPEN
- 评论：16
- 等级：P2，影响 `session-state`

状态显示完成，但 collector child 仍调用 `sessions_yield`，调用方可能永久等待；同时 `outputSchema` 在 Claude CLI 后端可能静默失效。相关历史状态恢复已进入 beta，但核心会话协作语义仍需收尾。

#### 4. Claude CLI 长回复整体丢失

- Issue：[#144809](https://github.com/openclaw/openclaw/pull/144809)
- 实际 Issue 链接：[#144809](https://github.com/openclaw/openclaw/issues/144809)
- 状态：OPEN
- 评论：15
- 等级：P1，影响 `message-loss`

当轮次超过 `RUN_STALE_TAKEOVER_MS`，模型已生成回复，但系统因缺少 active tool authority snapshot 丢弃整段输出。用户最关心的是：**已产生的模型结果不能被运行时接管竞态静默删除**。当前未看到明确的新 fix PR。

#### 5. Telegram 单次网络失败后永久丢消息

- Issue：[#125764](https://github.com/openclaw/openclaw/issues/125764)
- 状态：OPEN
- 评论：14
- 等级：P1，影响 `message-loss`

Telegram `sendMessage` 遇到瞬时网络故障后，只尝试一次便进入 dead-letter，没有实际重试、`reconcileUnknownSend` 或用户可见错误。社区诉求集中于**可靠投递与可观测性**，尤其适合 announce/completion 这类高价值通知。

#### 6. Gateway 基线内存约 1.9 GB

- Issue：[#181432](https://github.com/openclaw/openclaw/issues/181432)
- 状态：OPEN
- 评论：13
- 等级：P1，影响 `crash-loop`

Linux ARM64 从 2026.9.4 升级到 2026.10.5 后，空载 RSS 从约 300 MB 增长至约 1.89 GB，并伴随 SQLite 事务超过 1.5 秒和内存告警。该问题直接影响小型主机、NAS 和边缘部署，是当前健康度的核心风险之一。

#### 7. 上下文溢出预估偏高 2.3–2.6 倍

- Issue：[#101929](https://github.com/openclaw/openclaw/issues/101929)
- 状态：OPEN
- 评论：13
- 等级：P2

中轮次预检按每个字符约 2 token 估算，并对未截断 transcript 重复计算，可能高估实际计费用量 2.3–2.6 倍。虽然已有主分支修复 [#168338](https://github.com/openclaw/openclaw/pull/168338)，Issue 仍开放，说明不同模型后端下的估算一致性尚未完全解决。

### 4.2 值得关注的 PR 热点

- [#197562](https://github.com/openclaw/openclaw/pull/197562)：session fork 复用父 prompt cache，代表长会话成本优化方向。
- [#197590](https://github.com/openclaw/openclaw/pull/197590)：`tools.allow: []` 权限语义问题，直接关系隔离 cron 和安全边界。
- [#197535](https://github.com/openclaw/openclaw/pull/197535)：Claude CLI 手动压缩读取 warm cache，兼顾性能与成本。
- [#197592](https://github.com/openclaw/openclaw/pull/197592)：未配置 GitHub 发布身份时收窄工具能力，安全方向明确。
- [#174109](https://github.com/openclaw/openclaw/pull/174109)：将 Agent 凭据请求改为显式 opt-in，方向重要，但变更面大且需要更严格证明。
- [#197466](https://github.com/openclaw/openclaw/pull/197466)：Web UI 增加可选的行内命令轨迹，面向编码任务过程可视化。
- [#141004](https://github.com/openclaw/openclaw/pull/141004)：将运行时 skill 使用写入 durable audit，方便运营方识别实际技能使用情况。

> 今日展示的 PR 评论数均为 `undefined`，因此 PR 热度主要按更新规模、影响面、状态和优先级判断，而不是严格按评论排序。

---

## 5. Bug 与稳定性

### P0 / 发布阻断级

1. **外部大插件捕获阻塞 Gateway 事件循环**
   - [#160959](https://github.com/openclaw/openclaw/issues/160959)
   - 2026.9.6 回归，阻塞可持续数分钟。
   - **fix PR：未发现明确的新 fix PR。**

2. **Codex protected continuation 阻止所有后续对话**
   - [#194664](https://github.com/openclaw/openclaw/issues/194664)
   - 2026.11.1 受影响；会话显示无活跃 run，但后续消息和 Retry 均失败。
   - **fix PR：未发现明确对应 PR。**

3. **Telegram owner 会话被 `providerReview` 占用且无恢复入口**
   - [#178441](https://github.com/openclaw/openclaw/issues/178441)
   - 标记 P0、影响发布阻断。
   - **fix PR：未发现明确对应 PR。**

### P1 / 高影响

1. **Claude CLI 长回复完整丢失**
   - [#144809](https://github.com/openclaw/openclaw/issues/144809)
   - **fix PR：未发现明确对应 PR。**

2. **Telegram 瞬时网络故障后消息永久丢失**
   - [#125764](https://github.com/openclaw/openclaw/issues/125764)
   - **fix PR：未发现明确对应 PR。**

3. **Gateway 基线 RSS 约 1.9 GB、SQLite 事务超时**
   - [#181432](https://github.com/openclaw/openclaw/issues/181432)
   - **fix PR：未发现明确对应 PR。**

4. **工具调用后 429 忽略 `maxRetryDelayMs`**
   - [#168101](https://github.com/openclaw/openclaw/issues/168101)
   - 非重放安全场景仍占住 session lane 长时间等待。
   - **fix PR：未发现明确对应 PR。**

5. **子 Agent 完成后释放运行时，下一任务快速失败**
   - [#145690](https://github.com/openclaw/openclaw/issues/145690)
   - 用户消息最终被误报为 timeout。
   - **fix PR：未发现明确对应 PR。**

6. **npm 更新期间 Gateway 停止约 19 分钟**
   - [#181662](https://github.com/openclaw/openclaw/issues/181662)
   - **fix PR：更新方向相关 PR [#197529](https://github.com/openclaw/openclaw/pull/197529) 正在处理 retained runtime 与依赖恢复，但未明确宣称覆盖该完整问题。**

7. **Codex protected continuation 状态错误**
   - 同上 [#194664](https://github.com/openclaw/openclaw/issues/194664)。

8. **Gateway 控制的 GPT-Live Talk 在首次委派后数秒断开**
   - [#194114](https://github.com/openclaw/openclaw/pull/194114)
   - 对应 Issue：[#194114](https://github.com/openclaw/openclaw/issues/194114)
   - **fix PR：未发现明确对应 PR。**

9. **macOS Gateway 因关闭 worker MessagePort 而卡死**
   - [#181120](https://github.com/openclaw/openclaw/issues/181120)
   - **fix PR：未发现明确对应 PR。**

### P2 / 中等影响

1. **Code Mode 将 guest TypeError 报为 internal_error**
   - [#167609](https://github.com/openclaw/openclaw/issues/167609)
   - 已在当前 main 上复现；错误分类不准确。
   - **fix PR：未发现明确对应 PR。**

2. **cron fallback 缺少跨 provider/account 显式授权**
   - [#192009](https://github.com/openclaw/openclaw/issues/192009)
   - 属于功能兼权限设计问题。
   - **已有相邻 PR：**[#182712](https://github.com/openclaw/openclaw/issues/182712) 已关闭，另有 [#192009](https://github.com/openclaw/openclaw/issues/192009) 所述产品需求持续开放。

3. **requester settle wake 遗留导致终端子 Agent 无法结算**
   - [#170562](https://github.com/openclaw/openclaw/issues/170562)
   - **fix PR：未发现明确对应 PR。**

4. **插件无法在 tool result 后追加上下文**
   - [#164355](https://github.com/openclaw/openclaw/issues/164355)
   - **fix PR：未发现明确对应 PR。**

5. **`agent_end` 按模型尝试触发，而非按完整 run 触发**
   - [#164559](https://github.com/openclaw/openclaw/issues/164559)
   - 429 fallback 下会产生误导性的成功/失败事件。
   - **fix PR：未发现明确对应 PR。**

6. **Slack outbound `unknown_after_send` 缺少 CLI 检查和结算能力**
   - [#183048](https://github.com/openclaw/openclaw/issues/183048)
   - **fix PR：未发现明确对应 PR。**

7. **MCP stdio runtime 无法被驱逐**
   - [#194334](https://github.com/openclaw/openclaw/issues/194334)
   - 标记为回归；运行上下文不清理时，`mcp.sessionIdleTtlMs` 无法生效。
   - **fix PR：未发现明确对应 PR。**

8. **Webchat continuation 使用过期回显用户请求，生成重复回答**
   - [#177210](https://github.com/openclaw/openclaw/issues/177210)
   - **fix PR：未发现明确对应 PR。**

9. **管理更新复制/哈希 SQLite 状态耗时数十分钟**
   - [#182616](https://github.com/openclaw/openclaw/issues/182616)
   - 3.4 GiB 状态更新耗时 63m50s。
   - **fix PR：未发现明确覆盖状态复制性能的明确 PR。**

### 稳定性趋势判断

今日大量 Gateway 修复围绕一个共同模式展开：**同步文件系统访问、锁轮询或后台工作意外进入主线程**。PR [#197455](https://github.com/openclaw/openclaw/pull/197455)、[#197539](https://github.com/openclaw/openclaw/pull/197539)、[#197586](https://github.com/openclaw/openclaw/pull/197586) 和 [#197584](https://github.com/openclaw/openclaw/pull/197584) 表明维护者已识别到该模式。

不过，大插件捕获阻塞 [#160959](https://github.com/openclaw/openclaw/issues/160959)、1.9 GB 基线内存 [#181432](https://github.com/openclaw/openclaw/issues/181432)、SQLite 状态膨胀 [#182616](https://github.com/openclaw/openclaw/issues/182616) 等问题尚未显示明确收口。**主线程阻塞得到局部治理，但资源生命周期与 SQLite 扩展性仍是系统级风险。**

---

## 6. 功能请求与路线图信号

### 6.1 跨 provider cron 回退授权

- Issue：[#192009](https://github.com/openclaw/openclaw/issues/192009)
- 相关已关闭 Issue：[#182712](https://github.com/openclaw/openclaw/issues/182712)

用户希望 cron 作业将主模型与 fallback 模型绑定到不同 provider/account，并在配置中显式授权，而不是隐式共享凭据。需求反映的核心趋势是：**多模型、多账号和成本控制正在成为标准自动化场景**。  
**下一版本可能性：中高。** 功能边界清晰、可独立实现，但需先解决 provider 配额池识别和凭据授权语义。

### 6.2 原生进度卡 SDK 与可信插件接入

- Issue：[#176273](https://github.com/openclaw/openclaw/issues/176273)

社区希望为工作流插件提供受限的进度卡 SDK，使插件能贡献状态而不获得任意 Gateway RPC。该需求反映出插件生态正从“单次调用”走向“长任务协作”。  
**下一版本可能性：中。** 需要维护者确定安全模型和插件信任边界，短期更可能先落地文档或实验接口。

### 6.3 Memory FTS 支持 CJK bigram

- Issue：[#170997](https://github.com/openclaw/openclaw/issues/170997)

现有 trigram tokenizer 无法匹配两字中文查询，`unicode61` 又无法有效切分 CJK。该需求直指中文用户的可用性。  
**下一版本可能性：中高。** 范围较小、用户价值明确，预期可能作为 tokenizer 配置或默认策略增量发布。

### 6.4 Memory 每条记录独立分块

- Issue：[#179954](https://github.com/openclaw/openclaw/issues/179954)

允许 `memory/` 下的 list-style 文件按一条记录一个 chunk 索引，提升长列表记忆的检索精度。  
**下一版本可能性：中。** 与 memory 检索质量直接相关，但需定义条目边界和兼容性。

### 6.5 Android 会话感知通知

- Issue：[#143387](https://github.com/openclaw/openclaw/issues/143387)

包括会话/Agent 标签、内部 Dreaming 排除、同用户跨设备抑制，以减少重复通知。  
**下一版本可能性：中。** 体验诉求明确，但需要移动端后台策略配合。

### 6.6 Web UI 行内命令轨迹

- PR：[#197466](https://github.com/openclaw/openclaw/pull/197466)

面向编码任务，将命令、读取及输出按会话顺序显示。该功能可提升过程透明度和对自动执行的信任。  
**下一版本可能性：中高。** 已有完整实现和截图证据，等待作者或维护者处理。

### 7. 工具权限与凭据安全收紧

- PR：[#197590](https://github.com/openclaw/openclaw/pull/197590)
- PR：[#197592](https://github.com/openclaw/openclaw/pull/197592)
- PR：[#174109](https://github.com/openclaw/openclaw/pull/174109)

社区与维护方向共同指向：**默认拒绝、最小权限、显式授权**。尤其 secrets 工具默认禁用和 GitHub 工具按身份配置收窄，可能成为下一版本的重要安全变更，但迁移说明必须清晰。

### 6.8 OpenClaw ID 与 macOS 连接方式

- PR：[#197585](https://github.com/openclaw/openclaw/pull/197585)
- PR：[#197538](https://github.com/openclaw/openclaw/pull/197538)

OpenClaw ID 正从附加登录方式向主要设备连接和节点加入流程演进。macOS App 的 dashboard proxy 设计表明后续方向可能是**登录优先、凭据不直接暴露给前端、节点发现信息统一封装**。  
**下一版本可能性：中。** 架构变化较大，涉及兼容性和安全审查，更可能分阶段进入 beta。

---

## 7. 用户反馈摘要

### 7.1 最突出的用户痛点：可靠性优先于新增能力

高频反馈显示，用户的首要诉求并非更多模型或界面功能，而是：

- 消息不能静默丢失；
- 已生成的长回复不能被运行时竞态删除；
- Gateway 不能因插件、锁、日志或安装检查卡住；
- Agent 崩溃后应能自动恢复，而不是永久 `UNAVAILABLE`；
- 更新不能造成十几分钟至数十分钟停机。

相关 Issues：  
[#160959](https://github.com/openclaw/openclaw/issues/160959)、[#144809](https://github.com/openclaw/openclaw/issues/144809)、[#125764](https://github.com/openclaw/openclaw/issues/125764)、[#181120](https://github.com/openclaw/openclaw/issues/181120)、[#181662](https://github.com/openclaw/openclaw/issues/181662)。

### 7.2 真实使用场景

- **长时间、多轮次对话**：用户频繁遇到历史保存、压缩、分页和 prompt cache 问题，说明长会话已成为主流场景，而非边缘案例。  
  [#197535](https://github.com/openclaw/openclaw/pull/197535)、[#197536](https://github.com/openclaw/openclaw/pull/197536)、[#197562](https://github.com/openclaw/openclaw/pull/197562)、[#197588](https://github.com/openclaw/openclaw/pull/197588)。

- **跨渠道消息通知**：Telegram、Slack 和 Session-based cron 均出现“发送状态不确定”或静默丢失问题，凸显多渠道投递需要统一的可重试、可追踪语义。  
  [#125764](https://github.com/openclaw/openclaw/issues/125764)、[#183048](https://github.com/openclaw/openclaw/issues/183048)、[#183569](https://github.com/openclaw/openclaw/issues/183569)。

- **长期运行的自动化与 Agent 编排**：cron fallback、子 Agent runtime 生命周期、`sessions_yield` 等待和 skill review 重试，反映自动化工作流对稳定状态机的依赖很深。  
  [#192009](https://github.com/openclaw/openclaw/issues/192009)、[#145690](https://github.com/openclaw/openclaw/issues/145690)、[#141474](https://github.com/openclaw/openclaw/issues/141474)、[#177505](https://github.com/openclaw/openclaw/issues/177505)。

- **中文记忆检索**：两字中文查询无法命中 trigram，反映 CJK 用户对默认搜索体验仍不满意。  
  [#170997](https://github.com/openclaw/openclaw/issues/170997)。

### 7.3 正面信号

- 大型会话历史双向分页已进入 beta，长对话可浏览性明显改善。  
  [`v2026.11.5-beta.2`](https://github.com/openclaw/openclaw/releases/tag/v2026.11.5-beta.2)
- macOS 应用开始保留已保存密钥，降低升级或重建过程中的凭据损失风险。  
  [`v2026.11.5-beta.2`](https://github.com/openclaw/openclaw/releases/tag/v2026.11.5-beta.2)
- Web UI、视频播放、侧栏和行内命令轨迹等 PR 持续改善使用体验。  
  [#197589](https://github.com/openclaw/openclaw/pull/197589)、[#197466](https://github.com/openclaw/openclaw/pull/197466)
- 多个长期会话与历史恢复问题已关闭或进入 beta，说明维护者对历史状态问题已有实际收敛。  
  [#166634](https://github.com/openclaw/openclaw/issues/166634)、[#179481](https://github.com/openclaw/openclaw/issues/179481)、[#173095](https://github.com/openclaw/openclaw/issues/173095)、[#179676](https://github.com/openclaw/openclaw/issues/179676)

### 7.4 不满与期望

用户对当前版本的普遍不满并非“完全不可用”，而是集中在**故障发生时缺少可理解、可操作、可恢复的反馈**。典型表现包括：

- 状态显示完成，但后台任务仍等待；
- 网络发送失败后没有用户可见错误；
- `doctor --fix` 在 Gateway 运行时无法完成迁移；
- Agent 显示无运行中，却拒绝继续接收消息；
- 内存、SQLite 锁和更新耗时没有足够清晰的诊断输出。

相关 Issues：  
[#141474](https://github.com/openclaw/openclaw/issues/141474)、[#125764](https://github.com/openclaw/openclaw/issues/125764)、[#179481](https://github.com/openclaw/openclaw/issues/179481)、[#194664](https://github.com/openclaw/openclaw/issues/194664)、[#181432](https://github.com/openclaw/openclaw/issues/181432)。

---

## 8. 待处理积压

### 8.1 需要维护者优先决策的长期 Issue

1. **外部插件捕获导致 Gateway 长时间阻塞**
   - [#160959](https://github.com/openclaw/openclaw/issues/160959)
   - P0、评论 81、跨版本回归。
   - 建议：拆分“插件扫描”和“运行时发布”路径，限制同步工作，设置硬超时并提供可观测降级。

2. **1.9 GB 基线内存与 SQLite 超时**
   - [#181432](https://github.com/openclaw/openclaw/issues/181432)
   - P1、影响边缘部署。
   - 建议：建立空闲 Gateway 基准，对比 2026.9.4 与当前版本，定位 worker、SQLite cache、plugin manifest 等常驻来源。

3. **Claude CLI 长回复丢失**
   - [#144809](https://github.com/openclaw/openclaw/issues/144809)
   - P1、消息丢失。
   - 建议：优先保存已生成输出，并将 takeover 与结果提交改成原子化流程。

4. **Telegram 发送可靠性**
   - [#125764](https://github.com/openclaw/openclaw/issues/125764)
   - P1、消息丢失。
   - 建议：补齐 retry/backoff、unknown-send reconciliation、用户可见错误和 dead-letter 运维入口。

5. **跨 provider cron 回退授权**
   - [#192009](https://github.com/openclaw/openclaw/issues/192009)
   - 已关闭相关 Issue [#182712](https://github.com/openclaw/openclaw/issues/182712) 不足以替代最终产品决策。

6. **插件工具结果后的上下文扩展点**
   - [#164355](https://github.com/openclaw/openclaw/issues/164355)
   - 直接限制插件对复杂工具链结果的后处理能力。

7. **`agent_end` 生命周期语义**
   - [#164559](https://github.com/openclaw/openclaw/issues/164559)
   - 插件生态依赖 run/attempt 的稳定事件契约。

8. **Operator recovery：settle wake 清理**
   - [#170562](https://github.com/openclaw/openclaw/issues/170562)
   - 当前只能手工编辑状态数据库，运维风险较高。

### 8.2 长时间开放但缺少明确修复 PR 的 Issues

| Issue | 优先级/影响 | 积压状态 |
|---|---|---|
| [#160959](https://github.com/openclaw/openclaw/issues/160959) | P0 / Gateway 阻塞 | 最高优先级；未见明确新 fix PR |
| [#144809](https://github.com/openclaw/openclaw/issues/144809) | P1 / 消息丢失 | 开放；未见明确新 fix PR |
| [#125764](https://github.com/openclaw/openclaw/issues/125764) | P1 / 消息丢失 | 开放；未见明确新 fix PR |
| [#181432](https://github.com/openclaw/openclaw/issues/181432) | P1 / 内存与崩溃 | 开放；未见明确新 fix PR |
| [#168101](https://github.com/openclaw/openclaw/issues/168101) | P1 / 限流与会话阻塞 | 开放；未见明确新 fix PR |
| [#145690](https://github.com/openclaw/openclaw/issues/145690) | P1 / 子 Agent 运行时 | 开放；未见明确新 fix PR |
| [#178441](https://github.com/openclaw/openclaw/issues/178441) | P0 / 身份审核死锁 | 开放；未见明确新 fix PR |
| [#194664](https://github.com/openclaw/openclaw/issues/194664) | P0 / Codex 后续消息阻断 | 开放；未见明确新 fix PR |
| [#181120](https://github.com/openclaw/openclaw/issues/181120) | P1 / macOS 卡死 | 开放；未见明确新 fix PR |
| [#194334](https://github.com/openclaw/openclaw/issues/194334) | P2 / MCP 生命周期回归 | 开放；未见明确新 fix PR |

### 8.3 长期开放 PR 与评审积压

- [#174109](https://github.com/openclaw/openclaw/pull/174109)：自 2026-10-16 起开放，涉及 Agent secrets 工具默认禁用，安全和兼容性影响较大，仍等待维护者处理。
- [#141004](https://github.com/openclaw/openclaw/pull/141004)：自 2026-09-07 起开放，审计面新增 runtime skill usage，属于长期跨模块能力。
- [#189935](https://github.com/openclaw/openclaw/pull/189935)：向 `release/2026.11.4` 回移 audit companion recovery，现已关闭，说明维护者已重新组织 backport，但相关稳定版覆盖情况仍需核对。
- [#193873](https://github.com/openclaw/openclaw/pull/193873)：GitHub publication recovery，涉及分支选择、故障恢复和身份边界，变更面大且标记 security-sensitive。
- [#197455](https://github.com/openclaw/openclaw/pull/197455)、[#197539](https://github.com/openclaw/openclaw/pull/197539)、[#197584](https://github.com/openclaw/openclaw/pull/197584)、[#197586](https://github.com/openclaw/openclaw/pull/197586)：均直接处理 Gateway 主线程阻塞，状态已到 maintainer look 或 waiting on author，建议作为同一稳定性批次处理并统一做压力测试。

---

## 结论

OpenClaw 今日保持 **极高开发活跃度**，发布节奏稳定，功能、UI、模型接入与长会话体验均有推进。尤其是双向分页历史、prompt cache 复用、OpenAI session affinity、Claude CLI compact 优化，体现了项目对长会话成本的积极治理。

但健康度仍受三类问题制约：

1. **核心可靠性债务**：消息丢失、回复丢失、Agent 永久不可用、Gateway 内存膨胀；
2. **评审与合并积压**：327 个待合并 PR，安全敏感和兼容性敏感变更较多；
3. **状态数据库扩展性**：SQLite 锁、快照复制、checkpoint、状态恢复和更新耗时相互关联，可能成为下一阶段最集中的系统瓶颈。

建议下一阶段优先以 **“消息不丢、长回复不丢、Gateway 不卡、更新不停机”** 为收敛目标，优先处理 [#160959](https://github.com/openclaw/openclaw/issues/160959)、[#144809](https://github.com/openclaw/openclaw/issues/144809)、[#125764](https://github.com/openclaw/openclaw/issues/125764)、[#181432](https://github.com/openclaw/openclaw/issues/181432) 和 [#194664](https://github.com/openclaw/openclaw/issues/194664)，并尽快完成 [#197455](https://github.com/openclaw/openclaw/pull/197455)、[#197539](https://github.com/openclaw/openclaw/pull/197539)、[#197584](https://github.com/openclaw/openclaw/pull/197584)、[#197586](https://github.com/openclaw/openclaw/pull/197586) 的合并与回归验证。

---

## 横向生态对比

# 个人 AI 助手 / 自主智能体开源生态横向分析报告

**分析日期：2026-11-12**  
**数据口径：各项目过去 24 小时 GitHub 活跃度、Issue/PR 状态、Release 与路线图信号。**

---

## 1. 生态全景

个人 AI 助手与自主智能体生态正从“模型与聊天壳”快速转向覆盖**长会话、插件生态、多渠道路由、长期记忆、沙箱执行和桌面端工作流**的完整运行时系统。今日 8 个受监测项目中，共出现约 **178 个 Issue 更新、200 个 PR 更新**，另有 3 个项目发布版本或预发布版本，OpenClaw、QwenPaw、Hermes Agent 和 OpenHuman 的日 PR 更新量均达到 29–50 个。

社区需求高度一致：**消息不能丢、任务不能卡、会话不能串、权限不能失效、状态必须可恢复**。与此同时，OpenClaw、QwenPaw、Hermes Agent 和 LobsterAI 的待合并 PR 分别为 **327、32、42、3 个**，说明当前生态的主要瓶颈已从“功能开发”转向**评审、验证、发布和升级迁移能力**。

不同项目已形成清晰分工：OpenClaw 强在全能运行时与插件生态，QwenPaw 强在本地模型和插件治理，Hermes Agent 强在多渠道、委派和插件扩展，LobsterAI 强在桌面 Cowork 体验，NanoBot 聚焦轻量会话路由，OpenHuman 聚焦事件编排与沙箱，PicoClaw 则处于低活跃度和安全债务并存阶段。

---

## 2. 各项目活跃度对比

> “PR 数”均指过去 24 小时 PR 更新量；待合并数用于辅助判断评审压力。健康度是基于本次动态的定性判断，不代表正式项目评级。

| 项目 | Issue 更新 | PR 更新 | 待合并 PR | Release | 今日主线 | 健康度评估 |
|---|---:|---:|---:|---|---|---|
| **OpenClaw** | 500 | 500 | 327 | `v2026.11.5-beta.2` | Gateway 稳定性、长会话、prompt cache、权限安全 | **高活跃、高风险、待收敛** |
| **QwenPaw** | 18 | 50 | 32 | `v2.3.0` 稳定版 | 本地决策模型、插件生命周期、渠道与记忆稳定性 | **高活跃；发布后稳定性承压** |
| **Hermes Agent** | 50 | 50 | 42 | 无 | Telegram Gateway、会话持久化、插件目录 | **中高活跃；修复积极但积压较高** |
| **OpenHuman** | 8 | 29 | 13 | 无 | 沙箱、凭据安全、事件去重、CI | **良好；集成和发布滞后风险** |
| **LobsterAI** | 0 | 18 | 3 | 无 | Cowork 会话、1M 上下文、额度与桌面体验 | **良好偏高；外部反馈偏弱** |
| **NanoBot** | 5 | 19 | 8 | 无 | WebUI 会话、路由隔离、子代理历史 | **较活跃；集成与回归风险偏高** |
| **PicoClaw** | 3 | 0 | 0 | 无 | 审批 Hook 安全、Web UI 会话组织 | **偏低关注；存在安全积压** |
| **IronClaw** | 0 | 0 | 0 | 无 | 无活动 | **数据不足 / 静默状态** |
| **合计** | **634** | **666** | **425** | **2 个明确版本** | — | **整体高活跃，评审吞吐是共同瓶颈** |

### 活跃度分层

- **第一梯队：OpenClaw、QwenPaw、Hermes Agent**  
  日更新规模均达到 50 个 Issue/PR 级条目，功能、修复和生态贡献同时发生，但积压最严重。

- **第二梯队：OpenHuman、LobsterAI、NanoBot**  
  OpenHuman 偏工程与安全基础设施；LobsterAI 偏桌面产品体验；NanoBot 偏 WebUI 与会话模型重构。

- **第三梯队：PicoClaw、IronClaw**  
  PicoClaw 当日无 PR 和 Release，且存在开放安全问题；IronClaw 过去 24 小时无可见活动。

---

## 3. OpenClaw 在生态中的定位

### 3.1 优势

#### 1）生态规模显著领先

OpenClaw 今日产生 **500 条 Issue 更新和 500 条 PR 更新**，约为 QwenPaw、Hermes Agent 单日 PR 更新量的 10 倍，也明显领先其他项目。其待合并 PR 达 327 个，反映的不是单纯活跃，而是**庞大的用户规模、贡献者规模和功能扩展面**。

同时，OpenClaw 仍是多项目中的参照系：LobsterAI 已有 OpenClaw 会话重放兼容优化，QwenPaw、Hermes Agent、NanoBot 也都在插件生命周期、会话持久化、Gateway、权限治理等方面处理同类问题。

#### 2）覆盖范围最完整

OpenClaw 同时覆盖：

- Telegram、Slack、Webchat 等多渠道消息；
- Gateway、Plugin、Skill、MCP、Sub-agent；
- Claude CLI、Codex、OpenAI 等模型运行时；
- 长会话历史、分页、fork、压缩和 prompt cache；
- macOS、Windows、Web 等客户端；
- 工具权限、Secret、审计和节点发现。

这使它更接近**个人 AI 操作系统的通用运行时**，而非单一聊天客户端。

#### 3）技术纵深突出

今日对长会话和成本治理的处理较系统：

- 历史双向分页；
- session fork 复用父 prompt cache；
- Claude CLI compact cache；
- OpenAI session affinity；
- Gateway 日志、安装检查、safe-bin 检查异步化。

这表明 OpenClaw 已从功能堆叠阶段进入**运行时性能和资源生命周期治理阶段**。

### 3.2 与同类项目的技术路线差异

| 项目 | 核心路线 | 与 OpenClaw 的主要差异 |
|---|---|---|
| **QwenPaw** | 本地优先、主模型 + 轻量决策模型、插件化渠道 | 更强调 Piccolo/Whisper/llama.cpp 等本地运行时，以及插件数据所有权 |
| **Hermes Agent** | Telegram 为核心入口、多 Profile、委派 Agent、插件目录 | 更突出消息路由、Profile 隔离、社区垂直插件和浏览器内运行时 |
| **LobsterAI** | 桌面 Cowork 工作台、OpenClaw 兼容、商业化包装 | 更偏最终用户产品，UI、朗读、广告、额度展示成熟度更高 |
| **NanoBot** | 轻量 Gateway + WebUI + per-chat/topic 路由 | 更强调会话模型收敛和子代理历史按需加载 |
| **OpenHuman** | 事件编排、渠道接入、沙箱和多租户部署 | 更偏自动化平台与安全执行基础设施 |
| **PicoClaw** | 精简助手、Launcher WebUI、审批 Hook | 产品范围更窄，当前主要矛盾是安全闭环和低活跃度 |

### 3.3 社区规模与主要短板

OpenClaw 的优势是规模和影响力，短板同样来自规模：

- 327 个待合并 PR，合并吞吐可能成为发布瓶颈；
- 状态数据库、锁、checkpoint 和快照问题相互耦合；
- Gateway 约 **1.9 GB** 空载 RSS，对 NAS、边缘设备和轻量部署不友好；
- 插件捕获阻塞 [#160959]、Claude CLI 长回复丢失 [#144809]、Telegram 丢消息 [#125764] 等高影响问题仍缺少明确修复 PR；
- 权限相关变更多且敏感，兼容性与迁移说明成本较高。

**判断：** OpenClaw 是当前生态的**事实核心参照和最大平台型项目**，但其下一阶段竞争力不再取决于 PR 数量，而取决于能否建立稳定的版本发布、回归验证、状态迁移和插件安全治理机制。

---

## 4. 共同关注的技术方向

### 4.1 会话状态一致性与持久化

**涉及项目：OpenClaw、QwenPaw、Hermes Agent、NanoBot、LobsterAI、OpenHuman**

共同诉求：

- OpenClaw：Agent 崩溃后持续 `UNAVAILABLE`，SQLite checkpoint、状态恢复和历史恢复相互影响；
- Hermes Agent：消息表面已处理，但 `state.db` 实际为空；
- NanoBot：重连后旧页面状态与新请求不一致；
- LobsterAI：损坏 JSON 元数据可能导致整页历史加载失败；
- QwenPaw：记忆索引生成成功但查询返回 503；
- OpenHuman：Cron lease 在崩溃后残留。

**趋势结论：** 会话系统正在从单一 JSON 文件或内存状态，转向 SQLite、事件日志、快照和缓存的混合架构；下一阶段竞争点将是**单一事实源、原子提交和可恢复状态机**。

### 4.2 消息可靠性与“不丢消息”

**涉及项目：OpenClaw、Hermes Agent、NanoBot、QwenPaw、OpenHuman**

- OpenClaw：Telegram 网络失败后无重试，Claude CLI 已生成的长回复被运行时竞态丢弃；
- Hermes Agent：Cron 图片重压缩、Topic 路由错误、流式中断预览未清理；
- NanoBot：Heartbeat 投递到错误房间，抑制发送却返回成功确认；
- QwenPaw：渠道连接失败后状态无法恢复；
- OpenHuman：队列超时后事件可能被直接路径和队列重复处理。

**趋势结论：** 行业正在从“调用 API 即成功”转向**至少一次投递、幂等处理、未知发送状态协调和可观测失败语义**。

### 4.3 多渠道与多 Profile 路由隔离

**涉及项目：OpenClaw、QwenPaw、Hermes Agent、NanoBot**

- OpenClaw：Telegram owner 会话可能被 `providerReview` 占用；cron fallback 涉及跨 provider 授权；
- QwenPaw：多工作区 Matrix 插件竞争同一启动窗口；
- Hermes Agent：Telegram Topic、委派子 Agent、Profile Token 和 continuation 绑定均出现错配；
- NanoBot：全局共享会话退出，per-chat/topic 成为主线。

**趋势结论：** 多渠道 Agent 的核心难点已从“能否接入”变为**会话身份、凭据身份、任务归属和渠道路由是否严格解耦**。

### 4.4 长会话、历史分页与成本优化

**涉及项目：OpenClaw、LobsterAI、Hermes Agent、NanoBot、QwenPaw**

- OpenClaw：双向分页、fork cache、compact cache、session affinity；
- LobsterAI：显式最高 **1M** 上下文、消息编辑与版本切换；
- NanoBot：长会话子代理历史由全量读取改为按消息窗口加载；
- Hermes Agent：文档链 RFC、压缩后仍可重读资料；
- QwenPaw：Piccolo 用于上下文压缩和工具审查。

**趋势结论：** “扩大上下文窗口”已不足以构成差异化，真正价值在于**可分页、可追溯、可重读、缓存友好且成本透明**。

### 4.5 插件生命周期、权限与最小授权

**涉及项目：OpenClaw、QwenPaw、Hermes Agent、NanoBot、OpenHuman、PicoClaw**

- OpenClaw：`tools.allow: []` 语义、GitHub 工具身份收窄、Agent Secret 显式 opt-in；
- QwenPaw：插件数据目录、升级迁移、破坏性文件操作审计；
- Hermes Agent：macOS Keychain SecretSource、插件固定 revision、浏览器内隔离密钥仓；
- OpenHuman：沙箱、凭据加密、OCI 凭据黑名单、自更新 SHA-256 校验；
- PicoClaw：审批 Hook 初始化失败后工具可能失去门控；
- NanoBot：本地可信 WebUI 扩展面。

**趋势结论：** 插件生态已越过“能安装即可用”的阶段，**权限边界、数据所有权、版本固定、升级迁移和 fail-closed** 将成为生态分化的核心。

### 4.6 本地模型与混合推理

**涉及项目：QwenPaw、OpenClaw、Hermes Agent、LobsterAI**

- QwenPaw：Piccolo 4B/9B/27B 用于 tool review 和 compaction，llama.cpp、MLX、Local Whisper 生命周期统一；
- OpenClaw：Claude CLI、Codex、OpenAI 兼容路由与缓存优化；
- Hermes Agent：浏览器内本地模型端点、本地语音插件；
- LobsterAI：服务端上下文窗口和默认模型选择逻辑。

**趋势结论：** 主流架构正从“单一大模型负责全部任务”转向**主模型 + 本地轻量模型 + 确定性工具**的混合体系。

### 4.7 沙箱、资源限制与无人值守安全

**涉及项目：OpenHuman、QwenPaw、PicoClaw、OpenClaw、NanoBot**

- OpenHuman：native jail 尚无 CPU/内存预算，Cron 工作区边界不明确；
- QwenPaw：Office COM 无沙箱降级、插件破坏性文件操作；
- PicoClaw：审批 Hook 失败后未 fail closed；
- OpenClaw：工具权限和 Secret 默认边界收紧；
- NanoBot：本地扩展加载与 exec session 生命周期。

**趋势结论：** 安全重点已从“阻止明显恶意命令”转向**受控降级、生命周期清理、资源配额、显式授权和失败可诊断性**。

---

## 5. 差异化定位分析

| 维度 | OpenClaw | QwenPaw | Hermes Agent | LobsterAI | NanoBot | OpenHuman | PicoClaw |
|---|---|---|---|---|---|---|---|
| **核心定位** | 全能个人 Agent 运行时 | 本地优先、多渠道 Agent 平台 | Telegram 驱动的可扩展 Agent | 桌面 Cowork AI 工作台 | 轻量 WebUI 多会话助手 | 事件编排与自动化平台 | 精简助手与 Launcher |
| **目标用户** | 高级用户、开发者、插件创作者 | 本地模型和渠道集成用户 | Telegram 重度用户、委派与插件用户 | 注重桌面交互和视觉体验的普通用户 | 需要轻量多会话的个人用户 | 自动化运维、事件驱动开发者 | 轻量部署和小规模用户 |
| **主要入口** | CLI、Gateway、Web、macOS、移动端 | Console、插件渠道、本地模型 | Telegram、Desktop、CLI、插件 | Electron 桌面端、Cowork | WebUI、Gateway | Serve、Inbound modules、渠道 | Launcher、WebUI |
| **核心架构** | Gateway + 插件/Skill/MCP + 多模型运行时 | 插件化渠道 + 本地模型运行时 | Gateway + Profile + 委派 Agent + 插件目录 | 桌面 UI + Cowork + OpenClaw 兼容层 | Gateway + session store + per-chat/topic | 事件编排 + sandbox + 多租户 | 精简 Gateway + 审批 Hook |
| **差异化优势** | 生态规模、能力广度、贡献者密度 | 本地推理、插件数据治理 | Telegram 深度、委派和插件创意 | 产品化体验、桌面打包、额度展示 | 会话模型清晰、改造速度快 | 安全、CI、事件一致性 | 简单、潜在轻量化 |
| **当前主要短板** | 积压、状态扩展性、Gateway 可靠性 | 发布后插件迁移与跨平台回归 | PR 积压、Telegram 网络与状态源 | 外部反馈不足、广告与核心体验平衡 | 冲突 PR、会话路由闭环 | 无新版本、发布闭环不足 | 低活跃、安全 Issue 无人承接 |

### 关键定位判断

- **OpenClaw** 是平台型基础设施，适合作为插件和工具生态的母体。
- **QwenPaw** 更像“本地优先的 Agent IDE/运行平台”，适合隐私敏感和本地模型用户。
- **Hermes Agent** 是“Telegram 优先的 Agent 操作系统”，插件生态和高频消息场景突出。
- **LobsterAI** 更接近消费级桌面助手，适合普通用户和办公场景。
- **NanoBot** 的机会在于以较小核心实现更清晰的会话隔离和轻量体验。
- **OpenHuman** 更适合作为后端自动化和事件编排底座。
- **PicoClaw** 需要先解决安全闭环和社区响应，再考虑产品扩张。

---

## 6. 社区热度与成熟度

### 6.1 社区热度分层

#### 第一层：OpenClaw

- 24 小时 500 条 Issue 更新、500 条 PR 更新；
- P0 插件阻塞问题获得 81 条评论；
- 大量 Issue 与 PR 具备明确编号、优先级和影响面。

这说明社区不仅在报告问题，也在形成高密度修复和治理机制。

#### 第二层：QwenPaw、Hermes Agent

- 两者均为 50 条 Issue 与 50 条 PR 更新；
- QwenPaw 处于稳定版本发布后的快速反馈期；
- Hermes Agent 的文档链 RFC 获 37 条评论，插件目录扩张迅速。

两者都已跨过纯工具阶段，进入**运行时、插件生态和长期记忆治理**阶段。

#### 第三层：OpenHuman、LobsterAI、NanoBot

- OpenHuman：29 个 PR，安全、CI、事件一致性工程信号强；
- LobsterAI：18 个 PR，产品和桌面体验推进密集，但 Issues 为 0、PR 评论为 0；
- NanoBot：19 个 PR，会话和子代理重构方向清晰，但若干长期 PR 带冲突。

这些项目正在从 MVP 走向更完整的产品形态。

#### 第四层：PicoClaw、IronClaw

- PicoClaw 无 PR、无 Release，且安全问题开放；
- IronClaw 24 小时无活动。

需要区分“低活跃但稳定”和“低活跃且缺乏闭环”；当前 PicoClaw 更接近后者。

### 6.2 所处阶段

| 阶段 | 项目 | 特征 |
|---|---|---|
| **快速迭代期** | OpenClaw、QwenPaw、Hermes Agent | 高频功能和修复并行，版本密集，但评审积压明显 |
| **架构收敛期** | NanoBot、OpenHuman | 正在统一会话、事件、沙箱和 CI 语义，修复已有明确实现方向 |
| **产品化阶段** | LobsterAI | UI、桌面体验、计费展示和商业包装推进明显 |
| **质量巩固 / 低活跃阶段** | PicoClaw | 缺少代码交付，安全债和 stale 关闭需优先处理 |
| **静默 / 数据不足阶段** | IronClaw | 当日无可见活动，无法判断路线与健康度 |

---

## 7. 值得关注的趋势信号

### 趋势一：个人助手的竞争核心正从“模型能力”转向“运行时可靠性”

用户真正频繁抱怨的不是模型少一个版本，而是：

- 消息静默丢失；
- Gateway 卡死；
- Agent 崩溃后无法恢复；
- 会话状态与 UI 不一致；
- 路由到错误渠道或房间。

**对开发者的启示：** 消息队列、幂等键、状态机、事务边界、重试和恢复路径应成为 Agent 核心架构，而不是上线后再补的基础设施。

### 趋势二：SQLite 正成为个人 Agent 的关键瓶颈，但也是下一轮架构分水岭

多个项目同时暴露 SQLite 相关问题：

- OpenClaw：1.9 GB 内存、事务超时、checkpoint、状态快照；
- Hermes Agent：`state.db` 漏写；
- QwenPaw：记忆索引 503；
- OpenHuman：Cron lease 残留；
- LobsterAI：损坏元数据导致整页失败。

**对开发者的启示：** 不应再把 SQLite 当作无限增长的万能状态仓库。建议明确区分：

- 热会话状态；
- 事件日志；
- 长期记忆；
- 可重建缓存；
- 配置与凭据。

并为每类数据设计独立生命周期、压缩和恢复策略。

### 趋势三：插件生态正从“目录扩张”进入“治理阶段”

真正限制插件规模化的不是安装方式，而是：

- 权限是否最小化；
- 升级后是否自动迁移；
- 数据是否被安装过程覆盖；
- 凭据是否明文落盘；
- 插件失败时是否 fail closed；
- 固定版本是否仍兼容上游。

**对开发者的启示：** 插件清单、版本协议、签名、权限声明、数据目录、迁移器和审计日志将成为基础设施标配。OpenClaw、QwenPaw、Hermes Agent、OpenHuman 都在补这一层。

### 趋势四：多渠道 Agent 的“身份模型”将成为核心架构

会话 ID、线程 ID、渠道 ID、Profile、Bot Token、Agent 委派关系和任务归属正在快速耦合。多个项目的串线问题，本质都不是单点 bug，而是**身份边界设计不足**。

**对开发者的启示：** 应在协议层显式区分：

- `conversation_id`
- `channel_id`
- `thread_id`
- `profile_id`
- `agent_id`
- `run_id`
- `delivery_id`
- `credential_scope`

并规定哪些状态可以继承、哪些必须清空。

### 趋势五：长上下文的真正竞争点是“可管理”，不是“更大”

1M 上下文、文档链、记忆 FTS、摘要压缩、prompt cache 和按窗口加载共同表明：

- 单纯扩展 token 上限会迅速抬高成本；
- 全量历史读取会导致明显性能问题；
- 压缩后若无法重读来源，Agent 实际上并未保留可靠记忆。

**对开发者的启示：** 应建立分层上下文系统：原始来源、摘要、热点窗口、长期记忆和按需重读索引，并让缓存前缀保持稳定。

### 趋势六：本地模型将更多承担“辅助决策”，而非完全替代主模型

QwenPaw 的 Piccolo 用于 tool review 和 compaction，Hermes 推进 Local Whisper，OpenClaw 优化 Claude/Codex/OpenAI 路由，说明混合架构正在成为现实。

**对开发者的启示：** 本地模型最适合：

- 意图分类；
- 工具调用预审；
- 上下文压缩；
- 隐私敏感转写；
- 低风险子任务；
- 路由和缓存亲和性判断。

复杂推理仍由高能力模型承担，但本地模型将显著降低成本和外部依赖。

### 趋势七：安全治理必须覆盖“失败路径”

PicoClaw 审批 Hook 失效后继续服务、OpenClaw 权限配置语义、QwenPaw 无沙箱降级、OpenHuman 凭据明文落盘，都表明安全风险主要来自**失败、升级和重载路径**，而非正常路径。

**对开发者的启示：** 安全测试应重点覆盖：

- 插件初始化失败；
- 配置重载失败；
- 数据库暂时不可用；
- Provider 超时；
- 凭据解密失败；
- 沙箱后端不可用；
- 进程在写状态中途崩溃。

默认策略应尽可能 **fail closed**，同时提供清晰、可恢复、不过度泄露信息的降级路径。

---

## 综合结论

生态目前处于一个典型的阶段：**功能扩张速度很快，但可靠性、状态一致性和插件治理尚未完全跟上。** OpenClaw 凭借最大的生态规模和最完整的技术纵深保持核心参照地位；QwenPaw 和 Hermes Agent 分别在本地模型、插件治理和 Telegram/委派场景形成强差异化；LobsterAI 已明显进入桌面产品化阶段；NanoBot 与 OpenHuman 正在做关键架构收敛；PicoClaw 和 IronClaw 则需要优先恢复维护闭环。

对技术决策者而言，建议将未来版本的优先级排序为：

1. **消息与任务不丢、不重、不串**
2. **Gateway / Desktop / Agent 崩溃后可恢复**
3. **插件权限、凭据与数据目录标准化**
4. **SQLite、缓存和快照生命周期治理**
5. **长会话的分页、缓存和成本可观测性**
6. **最后才是继续扩展模型和插件数量**

这一阶段，最有价值的竞争不再是“接入了多少模型和渠道”，而是**用户是否能够放心让 Agent 长时间运行、持续记忆并代表自己执行真实操作**。

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目动态日报

**日期：2026-11-12**  
**数据范围：过去 24 小时 GitHub 更新**  
**项目地址：[HKUDS/nanobot](https://github.com/HKUDS/nanobot)**

---

## 1. 今日速览

过去 24 小时共更新 **5 个 Issues**（4 个开放、1 个关闭）和 **19 个 Pull Requests**（8 个待合并、11 个已合并或关闭），其中 **14 个 PR 于 11 月 11—12 日新建或关闭**，开发活跃度较高。

项目当前的主要推进方向集中在 **WebUI 会话可靠性与性能、路由与消息隔离、Agent 并行任务生命周期、子代理历史加载，以及执行工具稳定性**。今日没有发布新版本，但多项会话路由和共享会话相关改动已经关闭或进入待合并状态，功能演进较明显。

整体健康度可评估为 **较活跃，但集成与回归风险偏高**：Issue 和 PR 更新量大、修复覆盖面广，但仍有 8 个 PR 等待合并，其中部分明确标记为 `conflict`，另有多个长期开放 PR 尚未收敛。

---

## 3. 项目进展

> 今日无新版本发布，因此不单列版本发布说明。

### 3.1 WebUI 会话连续性与导航状态

- [#6636：保留会话重放与阅读状态](https://github.com/HKUDS/nanobot/pull/6636)  
  **状态：开放，待合并**  
  拟统一 WebUI 客户端的 session store，使 canonical pages/ETags、可恢复 transcript、prompt 索引和浏览窗口在页面导航过程中保持一致，避免切换会话后丢失阅读位置或重放状态。

- [#6617：关联聊天请求并取消过期重连](https://github.com/HKUDS/nanobot/pull/6617)  
  **状态：开放，待合并**  
  针对重连期间创建或 fork topic 时误打开已有 topic、排队请求超时后仍继续创建聊天，以及 token 刷新时客户端被重新打开或应用过期认证等竞态问题，引入请求关联和过期重连取消机制。

- [#6634：按消息窗口读取子代理历史](https://github.com/HKUDS/nanobot/pull/6634)  
  **状态：开放，待合并**  
  优化长会话中的子代理历史加载：此前打开会话会读取全部已保存任务；示例中 500 轮、5000 个已完成任务会返回约 **7.4 MB JSON**，而界面实际只显示少量消息。新方案改为按消息窗口读取。

- [#6630：仅在已加载提示词旁展示子代理结果](https://github.com/HKUDS/nanobot/pull/6630)  
  **状态：已关闭**  
  修复长会话打开后，未加载历史中的已完成任务被归入独立的 “Other tasks” 区域并显示在消息上方的问题；结果现在与对应的已加载用户消息关联。

- [#6629：为展开的上下文面板增加关闭按钮](https://github.com/HKUDS/nanobot/pull/6629)  
  **状态：已关闭**  
  改进 WebUI 上下文面板交互，解决侧栏只能通过打开它的控件关闭、展开面板复用折叠按钮且位置不直观的问题。

- [#6628：重放后续请求前先收敛中断轮次](https://github.com/HKUDS/nanobot/pull/6628)  
  **状态：已关闭**  
  修复 Gateway 重启后的状态恢复：持久化的后续请求可能替换中断请求并成功完成，但旧页面仍显示 Stop 状态并把新输入错误地视为排队任务。

- [#6586：以记录分页保留超长轮次历史](https://github.com/HKUDS/nanobot/pull/6586)  
  **状态：已关闭**  
  解决单轮历史超过重放预算时，部分回答、推理或工具活动被静默丢弃的问题，改为连续记录级分页。

- [#6631：优化模型预设保存流程](https://github.com/HKUDS/nanobot/pull/6631)  
  **状态：已关闭**  
  避免创建模型预设时连续执行两次完整 settings mutation，降低重复聚合使用统计造成的开销，并处理第二次写入失败导致“已创建但未启用”的状态问题。

### 3.2 会话路由与多房间隔离

- [#6621：移除全局共享会话模式](https://github.com/HKUDS/nanobot/pull/6621)  
  **状态：已关闭**  
  从配置、Gateway 路由、WebUI 设置和翻译中移除全局 shared session，保留 per-chat 和显式 topic 路由；历史数据不会被删除，旧 `unifiedSession` 配置将失效。该项具有明确破坏性。

- [#6626：不再向新部署推荐共享会话](https://github.com/HKUDS/nanobot/pull/6626)  
  **状态：已关闭**  
  文档层面对共享会话进行弃用引导，同时保留已有配置说明。关闭共享会话只改变新消息的归属，不会迁移或复制已有会话数据。

- [#6619：Heartbeat 任务输出被投递到最近更新的房间](https://github.com/HKUDS/nanobot/issues/6619)  
  **状态：开放，无明确对应 fix PR**  
  多房间部署中，Heartbeat 报告可能投递到会话存储里“最近更新的房间”，而不是任务实际关联的房间，造成跨房间泄漏。该问题与今日移除共享会话、重构会话路由的方向一致，但 Issue 尚未关闭。

- [#6620：内部轮次抑制消息发送时仍返回成功语义确认](https://github.com/HKUDS/nanobot/issues/6620)  
  **状态：开放，无明确对应 fix PR**  
  Heartbeat 等内部轮次会故意抑制 `message` 工具发送，并统一交由 post-run evaluator 输出；但工具当前仍返回类似“Message acknowledged”的成功确认，可能误导 Agent 认为消息已实际投递。

- [#5798：回复串会话问题](https://github.com/HKUDS/nanobot/issues/5798)  
  **状态：已关闭**  
  用户报告一个会话运行期间，其他会话的消息可能被错误发送到第一个运行中的会话；该问题在 **0.3.5** 上出现，而 **0.3.0** 未出现。今日虽已关闭，但摘要中没有显示对应修复 PR，需结合完整 Issue 时间线确认具体落地提交。

### 3.3 子代理与 Agent 生命周期

- [#6633：阻止父代理重复委派相同工作](https://github.com/HKUDS/nanobot/pull/6633)  
  **状态：已关闭**  
  在后台子代理创建结果中加入 “Don't duplicate its work” 提示，并在运行中及排队状态下覆盖，降低父 Agent 与后台 Agent 重复调查同一任务的概率。

- [#6468：取消运行前等待并行工具完成清理](https://github.com/HKUDS/nanobot/pull/6468)  
  **状态：开放，待合并**  
  修复并行工具批次被取消时，`AgentRunner` 提前结束并释放调用方所有权、但兄弟工具仍在清理的竞态。新逻辑会显式收集批次、取消未完成任务并排空清理后再传播原始取消状态。

### 3.4 执行工具与沙箱稳定性

- [#6427：在 exec session 多轮等待中保留 stdin 已关闭状态](https://github.com/HKUDS/nanobot/pull/6427)  
  **状态：开放，待合并，标记冲突**  
  修复 `ExecSessionTool._wait` 仅在首次轮询发送 `close_stdin`，导致后续轮询丢失 `stdin_closed` 状态的问题。

- [#6426：过滤 macOS 沙箱中的 xcrun 缓存拒绝噪声](https://github.com/HKUDS/nanobot/pull/6426)  
  **状态：开放，待合并，标记冲突**  
  macOS 的 `/usr/bin/git` 实际依赖 `xcrun` shim；沙箱阻止其访问宿主机 `xcrun_db` 缓存时会污染 stderr。该 PR 试图移除这类环境噪声。

- [#6623：集中管理进程树生命周期](https://github.com/HKUDS/nanobot/pull/6623)  
  **状态：已关闭**  
  将进程树启动、终止和清理集中到 `nanobot/execution/processes.py`，避免 exec session manager 调用 shell tool 的私有方法；保留既有 session ID、输出、超时和取消行为。

### 3.5 配置与扩展能力

- [#6615：移除旧版 OpenAI API 选择器](https://github.com/HKUDS/nanobot/pull/6615)  
  **状态：已关闭**  
  在两个版本的迁移窗口后，移除旧 `apiType` / `api_type` 选择项；显式配置旧值将被拒绝，旧默认值 `auto` 仍可读取，新 `api` 字段成为唯一当前接口。

- [#6032：增加可配置的本地可信 WebUI 扩展面](https://github.com/HKUDS/nanobot/pull/6032)  
  **状态：开放，待合并，标记冲突**  
  支持从本地目录发现并校验浏览器扩展，通过 Gateway 提供受限作用域的扩展资源与 API 路由，并强调仅面向可信本地扩展。

- [#6014：增加 Keenable MCP 预设](https://github.com/HKUDS/nanobot/pull/6014)  
  **状态：开放，待合并**  
  在 WebUI Apps 中加入 Keenable MCP 预设，连接其托管 MCP endpoint，并提供网页搜索和页面内容抓取工具；无需 API Key 时按 IP 限流。

---

## 4. 社区热点

### Issues

1. [#5798：回复串会话问题](https://github.com/HKUDS/nanobot/issues/5798)  
   - **3 条评论，为今日 Issues 评论最多**
   - 用户实际遇到的是并发会话下的消息路由错配：一个会话正在运行时，另一个会话的回复可能进入前者。
   - 该问题直接影响多会话、多用户或自动化任务的隔离可信度，是今日最值得关注的用户反馈。

2. [#6620：内部消息发送返回成功式确认](https://github.com/HKUDS/nanobot/issues/6620)  
   - **1 条评论**
   - 讨论重点不是“消息没有发出去”本身，而是 API/工具语义与真实执行结果不一致。被抑制的发送应返回明确的 skipped/suppressed 状态，而不是成功确认。

3. [#6619：Heartbeat 输出投递到错误房间](https://github.com/HKUDS/nanobot/issues/6619)  
   - **1 条评论**
   - 暴露了多房间、多频道场景下“最近活跃房间”不能替代任务归属路由的问题，对部署可靠性和隐私隔离均有影响。

### Pull Requests

1. [#6636：保留 WebUI 会话重放和阅读状态](https://github.com/HKUDS/nanobot/pull/6636)  
   - 今日新开且直接对应核心 WebUI 会话体验，关联统一 session store 所有权的内部任务 NAN-439。

2. [#6617：聊天请求关联与过期重连取消](https://github.com/HKUDS/nanobot/pull/6617)  
   - 覆盖多个竞态场景，涉及 topic 创建、请求超时、客户端关闭和认证刷新，影响范围较广。

3. [#6634：子代理任务历史按窗口读取](https://github.com/HKUDS/nanobot/pull/6634)  
   - 以 **7.4 MB JSON** 的长会话案例量化了性能问题，说明 WebUI 的历史加载优化已成为近期开发重点。

> 今日 Issue/PR 的点赞数均为 0，因此“反应最多”暂无明显领先项目；热点主要依据评论数、近期更新频率和影响范围判断。

---

## 5. Bug 与稳定性

### 高优先级：会话隔离与跨房间泄漏

1. [#6619：Heartbeat 任务输出进入无关房间](https://github.com/HKUDS/nanobot/issues/6619)  
   **状态：开放；暂无明确 fix PR**  
   多房间部署下可能将任务报告发送到未关联房间，属于路由正确性和隐私边界问题。

2. [#5798：并发会话之间回复串线](https://github.com/HKUDS/nanobot/issues/5798)  
   **状态：已关闭；摘要未显示对应 fix PR**  
   发生在 0.3.5，影响多会话并发使用。虽已关闭，但建议维护者在发布说明中明确修复版本和回归测试覆盖。

3. [#6620：被抑制的消息调用返回成功确认](https://github.com/HKUDS/nanobot/issues/6620)  
   **状态：开放；暂无明确 fix PR**  
   不会直接导致消息串线，但会破坏 Agent 对投递结果的可观测性，可能引发重复发送、错误成功判断或后续自动化偏差。

### 中高优先级：取消与并发执行竞态

4. [#6468：并行工具批次取消时提前结束 AgentRunner](https://github.com/HKUDS/nanobot/pull/6468)  
   **状态：已有 fix PR，但尚未合并**  
   可能造成所有权提前释放、兄弟工具未完全清理及取消错误传播不准确。

5. [#6427：exec session 后续轮询丢失 stdin 关闭状态](https://github.com/HKUDS/nanobot/pull/6427)  
   **状态：已有 fix PR，待合并且存在冲突**  
   会影响交互式执行会话的后续输入与关闭语义。

6. [#6426：沙箱 stderr 被 xcrun 缓存拒绝信息污染](https://github.com/HKUDS/nanobot/pull/6426)  
   **状态：已有 fix PR，待合并且存在冲突**  
   主要是 macOS 环境下的可用性与诊断噪声问题，严重度低于路由泄漏和取消竞态。

### 中优先级：WebUI 状态恢复与历史完整性

7. [#6617：重连竞态导致错误 topic、延迟请求及过期认证](https://github.com/HKUDS/nanobot/pull/6617)  
   **状态：已有 fix PR，待合并**  
   涉及请求关联、重连取消和 token 刷新，可能造成错误导航或请求落点。

8. [#6628：中断轮次未正确结束后续请求被错误排队](https://github.com/HKUDS/nanobot/pull/6628)  
   **状态：已有修复 PR，已关闭**  
   修复方向已明确，需关注是否随下一版本发布。

9. [#6586：超长轮次历史被静默截断](https://github.com/HKUDS/nanobot/pull/6586)  
   **状态：已有修复 PR，已关闭**  
   会造成回答、推理和工具活动缺失，现已改为记录级分页。

### 较低优先级：交互体验

10. [#6629：上下文面板缺少清晰关闭入口](https://github.com/HKUDS/nanobot/pull/6629)  
    **状态：已有修复 PR，已关闭**  
    属于可用性问题，目前无已关联修复 PR。

---

## 6. 功能请求与路线图信号

### 明确的新功能需求

1. **MiniMax H3-Image 图像生成支持**  
   [#6635：支持 MiniMax H3-Image / H3-Image-Highspeed](https://github.com/HKUDS/nanobot/issues/6635)  
   - 今日新建，是唯一明显的新模型接入请求。
   - 用户希望支持 MiniMax 新图像模型及高速变体，并解决当前客户端仅支持旧 `image-01`、且使用自有 `/image_generation` 接口的局限。
   - **下一版本可能性：较高。** 新模型接入通常边界清晰，适合独立 feature PR；目前尚未看到对应 PR。

2. **Discord 线程历史回填与启动在线状态**  
   [#6632：回填近期 thread history，并支持可选 startup presence](https://github.com/HKUDS/nanobot/issues/6632)  
   - Discord 每个 thread 启动时是全新会话，无法读取此前消息、引用消息或机器人历史回复。
   - 同时希望支持可选的启动 presence，改善机器人在线状态可见性。
   - **下一版本可能性：中等。** 历史回填与现有 transcript/session 能力契合；presence 可能涉及 Discord 权限及网关行为，实施复杂度略高。

3. **本地可信 WebUI 扩展机制**  
   [#6032：可配置的本地可信扩展面](https://github.com/HKUDS/nanobot/pull/6032)  
   - 已进入 PR 阶段，但存在冲突且创建时间较长。
   - **下一版本可能性：中等。** 若冲突解决并完成安全审查，可能纳入 WebUI 功能迭代；安全边界和扩展权限设计是主要门槛。

4. **Keenable MCP 集成**  
   [#6014：添加 Keenable MCP 预设](https://github.com/HKUDS/nanobot/pull/6014)  
   - **下一版本可能性：中等。** 已有完整 PR，且工具范围较小，但需确认维护者对新增第三方 MCP preset 的优先级。

### 从现有 PR 可见的近期路线

- **会话模型收敛与隔离**：[#6621](https://github.com/HKUDS/nanobot/pull/6621)、[#6626](https://github.com/HKUDS/nanobot/pull/6626) 表明共享会话正在退出，per-chat 和显式 topic 路由将成为主线。
- **WebUI 可靠性与规模化性能**：[#6636](https://github.com/HKUDS/nanobot/pull/6636)、[#6634](https://github.com/HKUDS/nanobot/pull/6634)、[#6586](https://github.com/HKUDS/nanobot/pull/6586) 显示团队正在同时处理状态一致性、请求竞态和大历史加载。
- **Agent/子代理治理**：[#6633](https://github.com/HKUDS/nanobot/pull/6633)、[#6468](https://github.com/HKUDS/nanobot/pull/6468) 表明下一阶段重点是减少重复委派、正确取消并行任务并提高长任务可观测性。
- **执行层抽象整理**：[#6623](https://github.com/HKUDS/nanobot/pull/6623) 与两个 exec 修复 PR 显示工具执行层正在增强生命周期管理和跨平台稳定性。

---

## 7. 用户反馈摘要

### 核心痛点

- **多会话并发时消息会串线**  
  用户在 [#5798](https://github.com/HKUDS/nanobot/issues/5798) 中明确表示，0.3.5 会出现其他会话消息回复到正在运行会话的问题，而 0.3.0 没有。该反馈说明升级后多窗口、并发聊天场景的路由隔离发生回退。

- **后台任务的实际投递位置不可靠**  
  [#6619](https://github.com/HKUDS/nanobot/issues/6619) 指出 Heartbeat 报告被发往最近更新的房间，说明多频道用户无法信任后台任务一定返回原房间。

- **工具返回结果与真实行为不一致**  
  [#6620](https://github.com/HKUDS/nanobot/issues/6620) 显示，消息实际被抑制时，Agent 仍收到成功式确认。这会让自动化逻辑产生错误成功状态。

- **长会话性能成本显著**  
  [#6634](https://github.com/HKUDS/nanobot/pull/6634) 给出了 7.4 MB JSON 的具体案例。对于持续使用多子代理的个人 AI 助手，这是直接影响打开速度、内存占用和可扩展性的体验痛点。

### 积极信号

- 今日新开的需求和 PR 对具体使用场景描述充分，例如 Discord 线程缺少上下文、模型升级需求、后台任务路由、长会话加载等。
- 多项问题已有较完整 PR 和测试导向说明，表明社区不仅在反馈问题，也有可执行的技术方案。
- [#5798](https://github.com/HKUDS/nanobot/issues/5798) 今日关闭，说明会话隔离问题至少在 Issue 层面已进入收敛状态。

### 当前可识别的不满意点

- 会话路由隔离仍有多个相邻问题，尚未形成统一闭环。
- 部分修复 PR 长期开放且带 `conflict`，可能导致用户等待多个版本才能获得修复。
- 长会话和多子代理场景的性能问题此前缺少范围化加载机制。

---

## 8. 待处理积压

### 建议优先处理的 Issue

1. [#6619：Heartbeat 输出跨房间泄漏](https://github.com/HKUDS/nanobot/issues/6619)  
   跨房间错投涉及正确性与隐私，且暂无明确修复 PR，建议列为最高优先级。

2. [#6620：内部轮次消息发送返回成功式确认](https://github.com/HKUDS/nanobot/issues/6620)  
   建议与 [#6619](https://github.com/HKUDS/nanobot/issues/6619) 一并处理，因为两者都属于内部轮次的消息投递与结果语义。

3. [#6635：MiniMax H3-Image 支持](https://github.com/HKUDS/nanobot/issues/6635)  
   今日刚创建，暂未形成 PR，建议尽快确认模型 API 兼容性和是否纳入下一版本。

4. [#6632：Discord 线程历史与 presence](https://github.com/HKUDS/nanobot/issues/6632)  
   已开放但暂无讨论或 PR，建议拆分历史回填与 presence，以降低实现和评审复杂度。

### 建议优先收敛的 PR

1. [#6427](https://github.com/HKUDS/nanobot/pull/6427) 与 [#6426](https://github.com/HKUDS/nanobot/pull/6426)  
   两项均自 **2026-10-24** 起开放并标记冲突，说明执行工具修复存在集成阻塞。

2. [#6032](https://github.com/HKUDS/nanobot/pull/6032)  
   自 **2026-10-04** 起开放并标记冲突，涉及本地扩展加载与安全边界，建议明确验收标准或拆分后推进。

3. [#6468](https://github.com/HKUDS/nanobot/pull/6468)  
   自 **2026-10-26** 起开放，涉及取消竞态和数据生命周期，风险高于一般 UI 修复，应安排专项评审。

4. [#6014](https://github.com/HKUDS/nanobot/pull/6014)  
   自 **2026-10-03** 起开放，第三方 MCP preset 已有实现，建议尽快完成维护者确认、测试与文档工作。

5. [#6617](https://github.com/HKUDS/nanobot/pull/6617)  
   涉及多个 WebUI 重连竞态，建议与 [#6636](https://github.com/HKUDS/nanobot/pull/6636) 联合评审，避免 session store 与重连机制分别合入后产生新的状态冲突。

---

## 今日结论

NanoBot 今日呈现出明显的“**基础能力重构 + 稳定性收口**”特征：WebUI 会话、子代理历史、路由隔离和执行生命周期均在快速迭代，且已有不少 PR 完成关闭。不过，核心会话隔离问题尚未完全闭环，Heartbeat 跨房间投递和内部消息返回假成功仍需优先处理。

项目健康度可概括为：**开发活跃、技术方向清晰、问题发现及时，但发布节奏偏慢、冲突 PR 积压偏高，且路由类高影响缺陷仍需在上线前完成集中回归测试。**

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目动态日报

**报告日期：2026-11-12**  
**统计窗口：过去 24 小时**  
**项目地址：** [github.com/sipeed/picoclaw](https://github.com/sipeed/picoclaw)

---

## 1. 今日速览

过去 24 小时，PicoClaw 共更新 **3 个 Issues**，其中 **1 个仍开放、2 个已关闭**；没有新的 Pull Request，也没有发布新版本。

今日讨论重点集中在两个方向：一是 Web UI 会话管理能力，二是审批 Hook 在网关重载时的安全性。后者目前仍处于开放状态，指出失败后重新初始化可能使网关继续提供未受工具审批保护的服务，属于需要优先核查的安全与稳定性风险。

整体开发活动偏低：24 小时内无代码合并、无版本发布，说明当天没有可见的功能交付。由于今日关闭的 Issue 被标记为 **stale**，项目健康度暂评为 **偏低关注、存在安全积压**；当前没有对应修复 PR，开放问题仍需维护者确认。

---

## 3. 项目进展

### PR 合并情况

过去 24 小时：

- 新增或更新 PR：**0**
- 已合并 PR：**0**
- 已关闭 PR：**0**
- 待合并 PR：**0**

因此，今日没有可确认的代码级功能推进或缺陷修复。两个已关闭 Issue 均为 **stale 关闭**，不能视为对应需求或问题已经解决。

### Issues 状态变化

今日更新并关闭了以下两个 Issue：

1. [#3450 Web UI: chat folders to organize launcher session history](https://github.com/sipeed/picoclaw/issues/3450)  
   - 诉求是在 Launcher Web UI 中为聊天会话增加文件夹或分类能力。
   - 当前以 stale 状态关闭，未见后续 PR 或已落地实现。
   - 对用户的直接影响是：会话历史仍可能以扁平、时间排序的形式展示，缺少组织与检索能力。

2. [#3449 [BUG]](https://github.com/sipeed/picoclaw/issues/3449)  
   - Issue 标题和摘要中的具体复现信息不完整，无法可靠判断问题类型、影响范围及根因。
   - 当前以 stale 状态关闭，未见关联修复 PR。
   - 由于缺少版本、模型提供方、操作系统、复现步骤等关键环境信息，后续复现和回归验证存在困难。

---

## 4. 社区热点

### 讨论与互动

本期三个 Issues 的公开互动数据如下：

| Issue | 状态 | 评论数 | 👍 |
|---|---:|---:|---:|
| [#3450 Web UI 会话文件夹](https://github.com/sipeed/picoclaw/issues/3450) | CLOSED / stale | 2 | 0 |
| [#3449 BUG](https://github.com/sipeed/picoclaw/issues/3449) | CLOSED / stale | 2 | 0 |
| [#3456 重载时审批 Hook 初始化失败导致工具失去门控](https://github.com/sipeed/picoclaw/issues/3456) | OPEN / stale | 1 | 0 |

本期没有 PR 评论或点赞数据可比较。以下按安全影响、问题完整度及产品影响分析。

### 1）安全审批机制失效风险

[#3456 Security: a failed approval-hook re-initialization during reload leaves the gateway serving with tools ungated](https://github.com/sipeed/picoclaw/issues/3456)

这是今日最值得优先关注的问题。其核心场景是：

- 网关通过 `/reload` 或配置重载触发审批 Hook 更新；
- 旧 Hook 被拆除，新 Hook 初始化失败；
- 网关没有停止服务或进入安全失败状态；
- 网关可能继续运行，但工具调用已不再经过预期审批。

该问题反映出的用户诉求不是单纯“报错提示”，而是希望系统遵循 **fail closed** 原则：当安全控制无法恢复时，网关应拒绝执行工具、进入降级状态或明确停用，而不能静默地以无门控状态继续提供服务。

### 2）Web UI 会话组织能力不足

[#3450 Web UI: chat folders to organize launcher session history](https://github.com/sipeed/picoclaw/issues/3450)

该需求反映高频用户对会话管理的实际痛点。当前 `/api/sessions` 返回扁平列表，前端也以单一时间序列展示历史；当会话数量增加后，用户难以快速定位特定项目、任务或对话上下文。

用户潜在诉求包括：

- 按项目或主题创建会话文件夹；
- 对会话进行重命名、归档和分类；
- 在历史列表中按文件夹或关键词筛选；
- 保持已有会话数据结构兼容，避免升级后历史记录不可见。

该 Issue 已被 stale 关闭，且没有关联 PR，说明需求尚不能视为已进入开发排期。

### 3）缺陷报告信息不完整

[#3449 [BUG]](https://github.com/sipeed/picoclaw/issues/3449)

虽然该 Issue 有 2 条评论，是本期评论数并列最高的条目，但摘要保留了环境模板占位内容，缺少有效的复现信息。问题本身可能具有参考价值，但在缺少以下数据时，难以评估严重程度：

- 实际 PicoClaw 版本或 commit；
- Go 版本；
- AI 模型及提供方；
- 操作系统和运行通道；
- 稳定复现步骤；
- 预期行为与实际行为。

因此，“评论最多”并不代表需求优先级最高；当前更合理的判断是 **信息待补充，但因 stale 关闭而存在失联风险**。

---

## 5. Bug 与稳定性

### 高优先级：重载后工具审批门控可能失效

- **Issue：** [#3456](https://github.com/sipeed/picoclaw/issues/3456)
- **状态：** OPEN、stale
- **类型：** 安全边界 / 工具授权状态不一致
- **可能影响：** 配置重载后，工具调用可能绕过预期的审批 Hook。
- **已有 fix PR：** **无**
- **严重程度判断：** 高
- **原因：** 问题发生在安全控制的重新初始化阶段，并且可能造成“系统看似正常服务，但关键保护未生效”的静默失效。若外部工具可执行写入、命令或数据访问操作，影响可能被放大。

建议维护者优先确认以下行为：

1. 新 Hook 初始化失败时，网关是否应立即停止接受工具调用；
2. 是否应让重载操作整体失败，并保留旧的有效 Hook；
3. 是否需要提供显式健康状态和可观测日志；
4. 是否需要覆盖 `/reload`、配置热重载及启动恢复等路径的回归测试。

### 中优先级：功能缺陷报告无法复现

- **Issue：** [#3449](https://github.com/sipeed/picoclaw/issues/3449)
- **状态：** CLOSED、stale
- **类型：** 缺陷报告，具体问题不明
- **已有 fix PR：** **无**
- **严重程度判断：** 无法评估
- **主要风险：** 报告缺少有效的环境与复现信息，可能包含真实 Bug，但已因长期无响应被关闭。

建议在重新开放或转交前，补充最小复现环境、日志、实际结果与预期结果，并确认是否存在重复 Issue。

### 已关闭但需求未解决：会话历史组织能力

- **Issue：** [#3450](https://github.com/sipeed/picoclaw/issues/3450)
- **状态：** CLOSED、stale
- **已有实现 PR：** **无**
- **影响：** 这更偏向功能可用性问题，而非运行时 Bug；关闭不代表用户的数据组织痛点已消除。

---

## 6. 功能请求与路线图信号

### 会话文件夹与会话组织

- **需求来源：** [#3450](https://github.com/sipeed/picoclaw/issues/3450)
- **需求内容：** 为 Launcher Web UI 增加聊天文件夹，用于组织会话历史。
- **当前 PR 信号：** 没有关联或待合并 PR，无法确认已纳入下一版本。
- **路线图判断：** 有明确产品价值，但当前缺少维护者认领、设计讨论和实现 PR，短期进入版本周期的信号较弱。

若后续推进，较合理的范围拆分是：

1. 后端为会话增加可选的 `folder` 或分类标识；
2. API 支持按文件夹筛选；
3. 前端增加创建、移动、重命名和删除文件夹能力；
4. 对旧会话提供兼容迁移，默认归入“未分类”；
5. 再考虑文件夹与搜索、标签、批量移动的组合能力。

### 审批机制的重载安全语义

- **需求来源：** [#3456](https://github.com/sipeed/picoclaw/issues/3456)
- **需求内容：** 重载期间审批 Hook 初始化失败时，不应继续以工具无门控状态提供服务。
- **当前 PR 信号：** 没有 fix PR，也没有待合并候选。
- **路线图判断：** 该问题涉及安全边界，优先级应高于一般 UI 增强功能。即使尚未进入正式版本路线，也应尽快形成修复设计、回归测试和发布说明。

### 缺陷模板与问题提交质量

- **需求来源：** [#3449](https://github.com/sipeed/picoclaw/issues/3449)
- **需求内容：** 完善 Bug 提交规范，要求填写实际版本、环境、提供方、操作系统、复现步骤和预期/实际结果。
- **当前 PR 信号：** 无。
- **路线图判断：** 属于项目工程效率改进，可与 Issue 模板、日志导出和自动诊断信息一并考虑。

---

## 7. 用户反馈摘要

### 真实使用痛点

- **会话历史缺少组织维度：**  
  在 [#3450](https://github.com/sipeed/picoclaw/issues/3450) 中，用户明确指出 Launcher Web UI 将所有聊天集中在一个按时间排列的扁平列表中。随着使用规模增长，用户需要按项目或任务整理会话，而不是仅依赖时间顺序查找。

- **安全控制失败时可能继续提供服务：**  
  在 [#3456](https://github.com/sipeed/picoclaw/issues/3456) 中，用户关注的是审批 Hook 重建失败后的系统状态。其核心不满意点是安全组件失效可能被静默忽略，这会削弱用户对工具调用授权链路的信任。

- **Bug 反馈可诊断性不足：**  
  在 [#3449](https://github.com/sipeed/picoclaw/issues/3449) 中，报告仍保留环境占位符。由于信息不完整，维护者和用户都难以判断问题是否可复现，也难以确认是否已有修复覆盖。

### 满意度信号

本期三个 Issues 的点赞数均为 **0**，没有足够数据表明用户对当前解决方案表示满意。两个 Issue 的 stale 关闭也不能视为问题解决，因为没有看到代码实现、发布说明或维护者确认。

综合来看，当前用户反馈集中在：

- 会话管理能力不足；
- 安全降级语义不够稳健；
- 缺陷报告信息不完整；
- 长期无响应问题被自动关闭，用户诉求存在失联。

---

## 8. 待处理积压

### 应优先跟进

1. **[#3456 审批 Hook 重载失败后工具失去门控](https://github.com/sipeed/picoclaw/issues/3456)**  
   - 当前仍开放但已被标记 stale。
   - 没有关联 fix PR。
   - 涉及安全控制链路，建议立即复核实际行为；若有效，应制定修复计划和回归测试。

2. **[#3449 BUG](https://github.com/sipeed/picoclaw/issues/3449)**  
   - 已 stale 关闭，但缺少有效复现信息。
   - 建议确认是否存在同根因或重复报告；如仍可复现，应补充信息后重新开放。

3. **[#3450 Web UI 会话文件夹](https://github.com/sipeed/picoclaw/issues/3450)**  
   - 属于明确的会话管理需求，目前没有实现 PR。
   - 如果产品方向认可，建议明确排期；若暂不支持，也应向用户说明替代方案，避免需求持续失联。

### 积压风险评估

- **开放重要 Issue：1 个**，且涉及安全边界。
- **已关闭但缺少明确解决证据的 Issues：2 个**。
- **待合并 PR：0 个**。
- **过去 24 小时代码交付：0 项**。

因此，当前积压的主要问题不是 PR 数量，而是 **安全问题缺少修复承接、用户需求关闭后缺少明确去向，以及部分 Issue 信息不足导致无法闭环**。

---

## 今日结论

PicoClaw 今日没有版本发布或 PR 合并，开发活动较低。社区需求主要指向 Launcher Web UI 的会话组织能力和网关重载过程中的审批安全，其中 [#3456](https://github.com/sipeed/picoclaw/issues/3456) 是当前最值得优先处理的安全相关问题。

项目当前健康度可概括为：**贡献活跃度偏低，安全风险待处理，用户需求闭环不足。** 建议维护者优先核查审批 Hook 失败后的网关状态并补充测试，其次确认 [#3450](https://github.com/sipeed/picoclaw/issues/3450) 的产品排期，并重新梳理 [#3449](https://github.com/sipeed/picoclaw/issues/3449) 的有效复现信息。

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI 项目动态日报

**日期：2026-11-12**  
**仓库：[netease-youdao/LobsterAI](https://github.com/netease-youdao/LobsterAI)**

## 1. 今日速览

过去 24 小时项目共更新 **18 个 PR**，其中 **15 个已合并或关闭、3 个仍待合并**，Issues 更新为 **0**，且没有发布新版本。  
今日开发重点集中在 **Cowork 会话体验、模型上下文能力、额度结算与历史数据兼容**，同时补齐了 **macOS 打包、模型目录、Banner 广告和桌面悬浮球** 等产品细节。  
当前活跃度较高：代码迭代连续、贡献者协作密集，说明功能开发与稳定性修复正在并行推进；但 Issues 缺乏公开讨论数据，且仍有 3 个核心 PR 未合并，社区反馈闭环和发布落地情况暂无法充分判断。  
从变更覆盖面看，项目整体继续向更完整的桌面 AI 助手形态演进，尤其在长上下文、会话编辑、回复朗读、额度可见性和 OpenClaw 兼容性方面取得了较明显进展。

---

## 3. 项目进展

> 今日没有新版本发布，因此暂无发行说明、破坏性变更或迁移注意事项。

### 3.1 Cowork 会话交互与历史浏览

- [#3055：添加选中内容到聊天后保留输入光标](https://github.com/netease-youdao/LobsterAI/pull/3055)  
  修复“Add to chat”流程先聚焦输入框、再清空原消息，导致光标被清除的问题。调整后延迟至下一动画帧聚焦，用户可以立即输入追问，提升连续对话效率。

- [#3054：浏览会话历史时防止滚动跳动](https://github.com/netease-youdao/LobsterAI/pull/3054)  
  在懒加载历史消息、插入旧消息或部分轮次获得新标识时保持当前可见位置，减少向上翻阅历史记录时的页面跳动，改善长会话阅读体验。

- [#3052：预取期间避免空白搜索布局偏移](https://github.com/netease-youdao/LobsterAI/pull/3052)  
  修复 Cowork 搜索预取阶段内容区域突然变空、造成布局跳动的问题，增强界面稳定性。

### 3.2 Cowork 消息编辑与回复朗读

- [#3051：支持编辑用户消息并进行版本切换](https://github.com/netease-youdao/LobsterAI/pull/3051)  
  新增 Cowork 用户消息的行内编辑、消息版本历史和版本切换器；同时处理编辑前附件保存、模型输入图片适配、发送快捷键及退出确认等交互细节。这是今日较明显的产品能力扩展。

- [#3045：已完成的回复支持内联朗读](https://github.com/netease-youdao/LobsterAI/pull/3045)  
  在主聊天完成回复的 Fork、Copy 操作后加入朗读入口，支持点击播放、再次点击停止；未登录用户会收到登录提示，登录后需重新点击，兼顾功能可用性与账户引导。

- [#3062：切换模型后保持旧回复可朗读](https://github.com/netease-youdao/LobsterAI/pull/3062)  
  修复旧会话切换模型后，已完成回复的朗读按钮消失、无法继续朗读的问题。朗读资格改为基于最后一次成功执行轮次判断，而不再受模型切换提示段干扰。

### 3.3 模型与上下文能力

- [#3059：支持显式选择最高 1M 的上下文窗口](https://github.com/netease-youdao/LobsterAI/pull/3059) **（待合并）**  
  允许符合条件的服务端模型和预设显式选择更大上下文窗口。未选择时继续沿用服务端默认值，重置选择即可恢复默认行为。该 PR 是今日最重要的路线图型功能之一，但仍处于开放状态。

- [#3047：登录后使用首个可访问模型替代锁定占位项](https://github.com/netease-youdao/LobsterAI/pull/3047)  
  修复未登录时公开模型目录全部锁定、其首项被误设为默认，登录后该模型变为可用并持续占据默认位置的问题。调整后默认模型改为首个真正可访问的模型，降低用户选择与使用成本。

### 3.4 额度与停止任务后的状态处理

- [#3060：停止的轮次完成结算并展示用量](https://github.com/netease-youdao/LobsterAI/pull/3060)  
  当用户在工具步骤或最终文本回复前停止任务时，系统现在会结算已消耗额度；若没有最终回复承载用量信息，则通过尾部元数据行展示时间、模型和额度。

- [#3053：停止任务后保留轮次额度用量](https://github.com/netease-youdao/LobsterAI/pull/3053) **（待合并）**  
  与 #3060 方向一致，进一步处理手动停止未触发结算、用量组件依赖最终文本回复的问题。两个 PR 存在明显功能重叠，合并前可能需要协调或择一落地。

### 3.5 数据兼容、缓存稳定性与错误处理

- [#3061：分页会话消息容忍损坏的元数据](https://github.com/netease-youdao/LobsterAI/pull/3061) **（待合并）**  
  当存储消息中的 JSON 元数据损坏时，分页读取不再整体失败，而是复用现有解析逻辑处理异常记录，增强历史会话数据容错能力。

- [#3058：重放时保持 OpenClaw 启动时间戳稳定](https://github.com/netease-youdao/LobsterAI/pull/3058)  
  避免 assistant-first 历史在稍后重放时重新生成 `(session bootstrap)` 时间戳，从而改变模型请求前缀并破坏提示词缓存复用。对缓存命中率和请求稳定性有直接价值。

- [#3057：保留预设准备错误并引导访客登录](https://github.com/netease-youdao/LobsterAI/pull/3057)  
  避免预设准备失败后渲染层只收到 `null` 和泛化错误信息；原始错误会写入本地日志并通过桥接层传递。图片示例等场景也会引导未登录用户完成登录。

### 3.6 桌面体验、包装和商业化组件

- [#3056：防止 macOS 重复公证](https://github.com/netease-youdao/LobsterAI/pull/3056)  
  关闭 electron-builder 内置公证器，由现有 `afterSign` 钩子统一负责公证和装订，避免继承 Apple 凭据时重复公证，降低 macOS 打包失败风险。

- [#3049：桌面伴侣悬浮球默认垂直居中](https://github.com/netease-youdao/LobsterAI/pull/3049)  
  未保存位置时，悬浮球改为在工作区右侧附近垂直居中，不再默认停在右下角，并同步更新相关测试。

- [#3050：状态栏统一计时并去重步骤文案](https://github.com/netease-youdao/LobsterAI/pull/3050)  
  工具步骤行不再重复显示计时器，由轮次状态栏统一承担；状态栏与运行步骤重复时改用简洁的工作中标签，改善运行状态信息密度。

- [#3048：启动弹窗广告、受众定向和主题化侧栏广告](https://github.com/netease-youdao/LobsterAI/pull/3048)  
  在既有主题化 HTML 侧栏广告基础上增加启动弹窗广告位，支持每次启动、每日、仅一次等频次，加权选择及约 10 秒决策窗口，并加入受众定向能力。这是今日商业化与运营能力扩展最明显的 PR。

- [#3046：首页新增图片创作灵感示例架](https://github.com/netease-youdao/LobsterAI/pull/3046)  
  首页内容区替换为图片创作灵感示例，并支持持久化显示/隐藏偏好，便于用户发现可复用的创作场景。

---

## 4. 社区热点

> 今日所有 PR 均显示 **0 条评论、0 个点赞**，且 Issues 更新为 0，因此无法按评论数或反应数识别传统意义上的“讨论最活跃”条目。以下按技术影响力和当日状态列出热点。

1. **[#3059：支持最高 1M 显式上下文窗口](https://github.com/netease-youdao/LobsterAI/pull/3059)**  
   - 状态：待合并  
   - 热点原因：直接扩展模型可用上下文规模，对超长文档、复杂代码库和多轮 Agent 任务价值较高。  
   - 背后诉求：用户希望自主选择上下文窗口，而不是完全受服务端默认限制，同时需要明确的默认值与重置行为。

2. **[#3051：用户消息编辑与版本切换](https://github.com/netease-youdao/LobsterAI/pull/3051)**  
   - 状态：已关闭  
   - 热点原因：补齐消息纠错、追问改写和版本回溯能力，是 Agent 会话中常见的核心诉求。  
   - 背后诉求：用户希望在错误提问后无需重开会话，并能比较不同消息版本。

3. **[#3048：Banner 广告与启动弹窗广告](https://github.com/netease-youdao/LobsterAI/pull/3048)**  
   - 状态：已关闭  
   - 热点原因：引入更完整的广告投放和运营能力。  
   - 背后诉求：项目方需要按场景、频次和受众投放广告，同时避免广告破坏主题一致性和用户体验。

4. **[#3060：停止轮次的额度结算与展示](https://github.com/netease-youdao/LobsterAI/pull/3060)**  
   - 状态：已关闭  
   - 热点原因：直接回应“任务已停止但额度不可见”的用户疑虑。  
   - 背后诉求：用户要求额度计算和界面反馈一致，尤其是中断、失败及无最终回复的任务。

---

## 5. Bug 与稳定性

按影响程度排列：

### 高优先级

- **停止任务后额度可能未结算或不可见**  
  影响：用户无法确认已消耗额度，且工具步骤中途中断时可能缺少最终回复和用量信息。  
  已有修复：
  - [#3060](https://github.com/netease-youdao/LobsterAI/pull/3060) 已关闭  
  - [#3053](https://github.com/netease-youdao/LobsterAI/pull/3053) 待合并  
  两条修复方向重叠，建议维护者确认最终保留方案，避免重复逻辑。

- **分页消息遇到损坏 JSON 元数据时读取失败**  
  影响：单条异常存储数据可能导致整页历史消息无法加载，影响会话恢复和排障。  
  已有修复：[#3061](https://github.com/netease-youdao/LobsterAI/pull/3061)，待合并。

### 中优先级

- **切换模型后旧回复无法继续朗读**  
  影响：历史内容的语音消费能力被错误禁用。  
  已有修复：[#3062](https://github.com/netease-youdao/LobsterAI/pull/3062)，已关闭。

- **预设准备失败时错误信息丢失**  
  影响：前端只能显示通用错误，增加 QA 和用户自助排查难度。  
  已有修复：[#3057](https://github.com/netease-youdao/LobsterAI/pull/3057)，已关闭。

- **OpenClaw 重放导致启动时间戳变化**  
  影响：请求前缀不稳定，可能降低提示词缓存命中率，并造成相同历史重放结果存在差异。  
  已有修复：[#3058](https://github.com/netease-youdao/LobsterAI/pull/3058)，已关闭。

### 低至中优先级

- **历史消息懒加载时滚动跳动**  
  已有修复：[#3054](https://github.com/netease-youdao/LobsterAI/pull/3054)，已关闭。

- **添加选中内容后输入光标消失**  
  已有修复：[#3055](https://github.com/netease-youdao/LobsterAI/pull/3055)，已关闭。

- **搜索预取阶段布局偏移**  
  已有修复：[#3052](https://github.com/netease-youdao/LobsterAI/pull/3052)，已关闭。

- **macOS 打包可能发生重复公证**  
  已有修复：[#3056](https://github.com/netease-youdao/LobsterAI/pull/3056)，已关闭。

- **状态栏与工具步骤重复计时或文案**  
  已有修复：[#3050](https://github.com/netease-youdao/LobsterAI/pull/3050)，已关闭。

- **登录后默认模型仍停留在锁定占位项**  
  已有修复：[#3047](https://github.com/netease-youdao/LobsterAI/pull/3047)，已关闭。

- **桌面伴侣悬浮球默认位置不理想**  
  已有修复：[#3049](https://github.com/netease-youdao/LobsterAI/pull/3049)，已关闭。

---

## 6. 功能请求与路线图信号

### 6.1 明确可纳入下一阶段的能力

- **1M 上下文窗口选择**  
  [#3059](https://github.com/netease-youdao/LobsterAI/pull/3059) 已形成较完整实现，且在未显式选择时保持服务端默认，兼容策略清晰。若尽快完成评审，最可能成为下一版本的重点能力。

- **用户消息编辑与版本切换**  
  [#3051](https://github.com/netease-youdao/LobsterAI/pull/3051) 已覆盖编辑、附件、版本和快捷键，适合作为下一轮 Cowork 交互增强继续推进。

- **完成回复内联朗读**  
  [#3045](https://github.com/netease-youdao/LobsterAI/pull/3045) 及其兼容性修复 [#3062](https://github.com/netease-youdao/LobsterAI/pull/3062) 已形成完整功能链路，具备进入下一版本的条件。

### 6.2 值得持续关注的工程方向

- **额度结算一致性**  
  [#3060](https://github.com/netease-youdao/LobsterAI/pull/3060) 和 [#3053](https://github.com/netease-youdao/LobsterAI/pull/3053) 表明“停止、失败、流式中断”等非正常终态下的计费与展示仍是重点。建议统一各类终态的数据模型和结算入口。

- **历史会话数据容错**  
  [#3061](https://github.com/netease-youdao/LobsterAI/pull/3061) 说明存储层需要从“整页解析成功”转向“单条失败隔离”。后续可能需要补充损坏记录计数、诊断日志和恢复策略。

- **缓存稳定性与请求可复现性**  
  [#3058](https://github.com/netease-youdao/LobsterAI/pull/3058) 暴露出合成消息时间戳会进入模型请求前缀。后续应系统审查所有合成消息及重放路径，避免类似缓存前缀漂移。

### 6.3 商业化方向明确增强

- [#3048](https://github.com/netease-youdao/LobsterAI/pull/3048) 显示项目正建设更完整的 Banner 投放体系，包括启动弹窗、频控、受众定向和主题适配。后续值得关注广告关闭体验、频控准确性、隐私合规以及是否影响核心工作流。

---

## 7. 用户反馈摘要

今日 **没有新增或更新的 Issues，且 PR 评论数为 0**，因此无法从公开评论中提取新增的用户原声。可根据 PR 描述中引用的用户报告归纳以下痛点：

- **停止任务后不知道消耗了多少额度**  
  用户在工具执行中或最终回复前停止任务时，额度信息可能缺失，造成成本不可见的问题。相关修复见 [#3060](https://github.com/netease-youdao/LobsterAI/pull/3060) 和 [#3053](https://github.com/netease-youdao/LobsterAI/pull/3053)。

- **历史消息浏览不稳定**  
  用户向上浏览长会话时，页面会因懒加载或旧消息插入而跳动，降低阅读连贯性。相关修复见 [#3054](https://github.com/netease-youdao/LobsterAI/pull/3054)。

- **连续追问被输入焦点问题打断**  
  用户将选中内容加入聊天后无法立即继续输入，需要重新定位光标。相关修复见 [#3055](https://github.com/netease-youdao/LobsterAI/pull/3055)。

- **模型切换影响历史回复可用性**  
  旧会话切换模型后，回复朗读能力意外消失，说明模型切换不能破坏历史内容的既有可用状态。相关修复见 [#3062](https://github.com/netease-youdao/LobsterAI/pull/3062)。

- **失败信息不可诊断**  
  预设准备失败时仅显示泛化错误，用户和 QA 无法判断根因。相关修复见 [#3057](https://github.com/netease-youdao/LobsterAI/pull/3057)。

由于缺乏 Issues 评论和用户点赞数据，当前只能确认上述具体报告，不能评价整体满意度，也不能判断社区对新功能宣传曝光、朗读交互或 1M 上下文能力的反馈。

---

## 8. 待处理积压

### 待合并 PR

1. **[#3059：支持显式选择最高 1M 上下文窗口](https://github.com/netease-youdao/LobsterAI/pull/3059)**  
   高优先级：涉及模型能力、服务端默认值和会话配置，应重点验证模型资格判断、上下文超限表现、重置行为及已有会话兼容性。

2. **[#3061：容忍分页消息中的损坏元数据](https://github.com/netease-youdao/LobsterAI/pull/3061)**  
   高优先级：关联公开问题 #639，属于历史数据恢复能力。建议补充损坏 JSON、缺失字段、异常类型等边界测试，并确认异常记录不会造成静默数据丢失。

3. **[#3053：停止任务后保留轮次额度用量](https://github.com/netease-youdao/LobsterAI/pull/3053)**  
   中高优先级：与已关闭的 #3060 功能高度重叠，应先确认两者的实现关系，避免重复修复、结算调用两次或 UI 状态不一致。

### 长期 Issue 积压

今日数据未提供历史未响应 Issue 清单，因此无法可靠判断具体长期积压项，也无法确认是否存在长期无人响应的关键 Issue。  
维护者仍建议在下一轮巡检中重点核查：

- #3061 所修复的 [#639](https://github.com/netease-youdao/LobsterAI/issues/639) 是否已具备关闭条件；
- 与长会话分页、损坏消息存储、额度结算相关的历史问题是否仍有未关闭项；
- 3 个待合并 PR 是否因缺少评审、测试或产品确认而长期滞留。

---

## 今日健康度结论

**项目健康度：良好偏高。** 今日 PR 产出密集，15 个变更已合并或关闭，Cowork、模型上下文、桌面打包和数据容错均有实质推进；同时，0 个 Issues 更新和 0 条 PR 评论也说明公开社区讨论不活跃，外部反馈信号不足。当前最值得关注的是 **3 个待合并 PR 的评审收敛**，尤其是 1M 上下文选择、损坏消息容错，以及两个额度结算方案之间的重复协调。

</details>

<details>
<summary><strong>QwenPaw</strong> — <a href="https://github.com/agentscope-ai/QwenPaw">agentscope-ai/QwenPaw</a></summary>

# QwenPaw 项目动态日报

**统计日期：2026-11-12**  
**数据范围：过去 24 小时**  
**项目地址：[agentscope-ai/QwenPaw](https://github.com/agentscope-ai/QwenPaw)**

---

## 一、今日速览

- 过去 24 小时共更新 **18 个 Issues**，其中 **11 个仍开放、7 个已关闭**；更新 **50 个 PR**，其中 **32 个待合并、18 个已合并或关闭**，另有 **1 个稳定版本 v2.3.0** 发布。
- 项目活跃度处于高位：版本发布后，问题反馈迅速集中到**插件升级与启动、渠道连接、记忆系统、Windows 兼容性和运行时稳定性**等关键路径，说明新版本功能扩张明显，但发布验证和迁移体验仍有缺口。
- PR 侧提交密集，覆盖本地模型、记忆、插件安全、控制台性能、语音转写、沙箱治理和错误诊断等方向；不过多数 PR 仍处于开放或审核阶段，尚未形成稳定版的闭环交付。
- 今日健康度评估：**活跃度高，功能推进明显；稳定性承压，发布后回归问题较多。** v2.3.0 的本地决策模型能力是重要增量，但插件生命周期、渠道启动和跨平台部署应列为下一轮稳定版优先事项。

---

## 二、版本发布

### v2.3.0

- **Release：** [v2.3.0](https://github.com/agentscope-ai/QwenPaw/releases/tag/v2.3.0)
- **类型：** Stable
- **发布日期：** 2026-11-11
- **安装验证：** [Release Duty #8681](https://github.com/agentscope-ai/QwenPaw/issues/8681)

#### 主要更新

新增 **Piccolo Local Decision Models**，将 Piccolo 4B、9B、27B 引入本地决策流程，主要应用于：

- 工具调用审查（tool review）
- 上下文压缩（context compaction）
- 本地模型安装、运行时更新
- 从 Hugging Face 或 ModelScope 下载模型
- 提供 BF16 与 Q8_0 配置建议

这意味着 QwenPaw 正进一步强化“主模型 + 轻量本地决策模型”的混合架构，降低审查和压缩任务对高成本模型或远程服务的依赖。

#### 破坏性变更与迁移注意事项

Release 说明未明确声明全局破坏性 API 变更，但当天反馈显示，v2.3.0 实际存在较明显的插件迁移风险：

- 从旧版本升级后，内置或官方渠道插件可能仍保留旧源码，Matrix 的修复没有自动生效，用户需手动核对插件目录并重新安装相关插件：[Issue #8684](https://github.com/agentscope-ai/QwenPaw/issues/8684)。
- 多工作区同时启用 Matrix 时，插件启动窗口不足，可能只有一个工作区成功激活：[Issue #8538](https://github.com/agentscope-ai/QwenPaw/issues/8538)。
- Windows 11 IoT LTSC 上，2.3.0-beta.1 出现“path not found”及 AppHang，而 2.2.2 可正常运行：[Issue #8616](https://github.com/agentscope-ai/QwenPaw/issues/8616)。
- Linux 上官方渠道插件 worker 缺少 `HOME` / `QWENPAW_WORKING_DIR`，可能导致启动失败：[Issue #8682](https://github.com/agentscope-ai/QwenPaw/issues/8682)。

**建议升级检查：**

1. 核对 Matrix、Feishu、WeChat 等渠道插件是否已迁移至 2.3.0 对应版本。
2. 在 Windows IoT LTSC、Linux 和多工作区场景分别执行启动验证。
3. 对渠道插件 worker 的环境变量与工作目录传递进行回归测试。
4. 首次启用 Piccolo 时先进行显存、磁盘、延迟和压缩质量基准测试，避免直接替换线上主模型。

---

## 三、项目进展

> 今日 PR 更新 50 条，已合并或关闭 18 条；由于提供的明细未展示完整 diff，以下按状态和主题归纳可确认的推进方向。

### 1. 渠道插件可靠性继续加固

- 修复 Feishu 启动时将初始 `disconnected` 状态误判为致命失败的问题，避免每次启动直接抛出 `CHANNEL_NOT_CONNECTED`：[Issue #8669](https://github.com/agentscope-ai/QwenPaw/issues/8669)。
- 多工作区 Matrix 插件激活问题已进入关闭状态，说明插件启动时序或共享窗口机制已有对应处理：[Issue #8538](https://github.com/agentscope-ai/QwenPaw/issues/8538)。
- 插件升级迁移问题仍开放，需确认 v2.3.0 的内置渠道插件是否会随主程序升级：[Issue #8684](https://github.com/agentscope-ai/QwenPaw/issues/8684)。
- 官方插件 worker 在 Linux 启动时环境变量传递异常，仍待修复：[Issue #8682](https://github.com/agentscope-ai/QwenPaw/issues/8682)。

**进展判断：** 渠道插件化方向已从“迁移完成”进入“生命周期和跨平台可靠性加固”阶段，但 2.3.0 发布后的回归说明插件测试矩阵尚不充分。

### 2. 插件状态管理与数据目录规范

- 新增文档 PR，明确插件可变状态应存放在独立 `plugin-data`，而非安装目录，避免安装或升级时覆盖用户数据：[PR #8687](https://github.com/agentscope-ai/QwenPaw/pull/8687)。
- 相关需求进一步提出，插件应获得受支持的数据目录，并审计破坏性文件操作：[Issue #8686](https://github.com/agentscope-ai/QwenPaw/issues/8686)。

**进展判断：** 插件治理开始补齐“安装目录不可持久化”的契约，对第三方插件生态是重要基础能力。

### 3. 控制台响应式布局与性能优化

- 修复聊天输入框在窄窗口或拖拽工作区时提前换行、控件抖动、上下文入口消失和发送按钮尺寸不一致的问题：[PR #8685](https://github.com/agentscope-ai/QwenPaw/pull/8685)。
- 优化控制台空闲合成和流式渲染成本，减少全屏装饰持续混合及流式更新的不必要开销：[PR #8668](https://github.com/agentscope-ai/QwenPaw/pull/8668)。
- 修复聊天正文中的绝对工作区文件链接被 SPA 路由拦截，改为复用鉴权下载流程：[PR #8662](https://github.com/agentscope-ai/QwenPaw/pull/8662)。

**进展判断：** 控制台近期工作从单纯功能扩展转向细节体验、窄屏可用性和性能成本治理。

### 4. 记忆系统能力扩展

- 支持为 ReMeLight 记忆写入单独配置模型，使记忆整理任务不必强制使用当前聊天主模型：[PR #7719](https://github.com/agentscope-ai/QwenPaw/pull/7719)。
- 将过期 daily notes 以去重后的 Inbox 提醒形式重新暴露，避免未处理笔记永久滞留：[PR #8578](https://github.com/agentscope-ai/QwenPaw/pull/8578)。
- 记忆标签索引无法重建、接口返回 503 的问题仍开放：[Issue #8580](https://github.com/agentscope-ai/QwenPaw/issues/8580)。

**进展判断：** 记忆模块正在向成本分层、主动提醒和可运维性发展，但索引生命周期仍是明显短板。

### 5. 本地模型与语音能力继续演进

- 本地 Whisper 正被改造成具有框架托管生命周期的 SDK 插件：[PR #8431](https://github.com/agentscope-ai/QwenPaw/pull/8431)。
- 为 llama.cpp 增加 GPU 控制和运行时自动更新，并与托管 MLX、Console 控制组成一组本地模型能力：[PR #8649](https://github.com/agentscope-ai/QwenPaw/pull/8649)。
- 转写设置页无法正确配置 `transcription_model` 的问题已关闭，表明切换供应商时模型配置链路得到改善：[Issue #8035](https://github.com/agentscope-ai/QwenPaw/issues/8035)。

**进展判断：** 本地化能力继续从“模型可下载”走向“运行时、GPU、插件生命周期统一管理”。

### 6. 错误诊断与安全治理

- 为查询错误快照增加容量、数量、保留期限和限流约束，避免持续失败时在临时目录生成数百 MB 诊断文件：[PR #8678](https://github.com/agentscope-ai/QwenPaw/pull/8678)，对应问题：[Issue #8674](https://github.com/agentscope-ai/QwenPaw/issues/8674)。
- 修复深度扫描对未展开波浪线路径的处理，避免单个无害 heredoc 终止后续检测器：[PR #8689](https://github.com/agentscope-ai/QwenPaw/pull/8689)，对应问题：[Issue #8688](https://github.com/agentscope-ai/QwenPaw/issues/8688)。
- 修复 Windows 卷根目录写入可继承沙箱 ACL 导致权限扩散的问题：[PR #8018](https://github.com/agentscope-ai/QwenPaw/pull/8018)。
- 在降级到无沙箱执行前，对内联 Office COM 自动化增加安全拦截：[PR #8048](https://github.com/agentscope-ai/QwenPaw/pull/8048)。

**进展判断：** 安全与治理方向投入较强，尤其关注插件文件操作、Office 自动化和诊断数据无限增长，值得作为稳定版质量亮点。

### 7. 社区体验与发布配套

- 社区帖子增加 GitHub 链接，并补充相应评论交互：[PR #8673](https://github.com/agentscope-ai/QwenPaw/pull/8673)。
- 修复文档、E2E README 和 Terraform 技能引用中的失效外链：[PR #8606](https://github.com/agentscope-ai/QwenPaw/pull/8606)。
- 控制台支持重新连接由外部渠道启动的当前聊天运行：[PR #8671](https://github.com/agentscope-ai/QwenPaw/pull/8671)。

### 总体推进评估

今日项目功能面继续扩张，覆盖模型、记忆、插件、渠道、Console、语音、安全和诊断。但从 PR 状态看，**32 个 PR 仍待合并**，且多个关键问题缺少明确修复 PR。v2.3.0 发布并不等于全部相关改动已经进入稳定版，维护团队仍需完成发布后回归收敛。

---

## 四、社区热点

> 今日 Issues 互动最明显的是以下问题；PR 明细中的评论数未提供有效排序，因此以问题评论数、影响范围和发布关联度作为补充判断依据。

### 1. 插件升级后 Matrix 修复未生效

- **Issue：** [#8684](https://github.com/agentscope-ai/QwenPaw/issues/8684)
- **评论：** 1
- **诉求：** 升级到 v2.3.0 后，`~/.qwenpaw/plugins/matrix` 仍保留旧源码，官方修复没有自动部署。
- **背后需求：** 用户期待主程序升级能正确迁移或更新官方内置插件，否则版本号提升与实际能力脱节。

### 2. Feishu 每次启动都确定性失败

- **Issue：** [#8669](https://github.com/agentscope-ai/QwenPaw/issues/8669)
- **评论：** 5
- **诉求：** `_wait_connected` 将初始 `platform_state="disconnected"` 当作致命错误，直接返回 `CHANNEL_NOT_CONNECTED`。
- **背后需求：** 渠道插件应区分“尚未连接”和“已失败”，并采用具有超时和重试机制的异步启动流程。

### 3. 自动记忆搜索重复调用后无法正常回复

- **Issue：** [#8361](https://github.com/agentscope-ai/QwenPaw/issues/8361)
- **评论：** 4
- **诉求：** 同一用户回合内重复调用 `memory_search`，被重复调用保护拦截后，finalize 和 recovery 均无法生成正常回复。
- **背后需求：** 防重复机制应保证主流程可恢复，避免保护逻辑反而造成会话中断。

### 4. 记忆标签索引不可用

- **Issue：** [#8580](https://github.com/agentscope-ai/QwenPaw/issues/8580)
- **评论：** 5
- **诉求：** `/memory/tags` 返回 503，标签已经生成但无法读取，且索引不会重建。
- **背后需求：** 记忆系统需要可靠、可自愈的索引生命周期，而不只是“生成成功”。

### 5. 多工作区 Matrix 插件无法同时激活

- **Issue：** [#8538](https://github.com/agentscope-ai/QwenPaw/issues/8538)
- **评论：** 5
- **状态：** 已关闭
- **诉求：** 多个工作区都启用 Matrix 时，共享 10 秒启动窗口只覆盖第一个工作区。
- **背后需求：** 插件实例应按工作区隔离并支持并发启动，不能依赖全局短时窗口。

### 6. 建议提供插件专用数据目录并审计破坏性操作

- **Issue：** [#8686](https://github.com/agentscope-ai/QwenPaw/issues/8686)
- **评论：** 1
- **诉求：** 明确插件数据目录契约，记录或审计插件启动时删除 `.py`、缓存及用户脚本等行为。
- **背后需求：** 第三方插件生态需要安全边界、可审计性和明确的数据所有权。

---

## 五、Bug 与稳定性

### 严重级别：S1 / 高

#### 1. 插件升级未迁移，2.3.0 修复无法生效

- **Issue：** [#8684](https://github.com/agentscope-ai/QwenPaw/issues/8684)
- **影响：** Matrix 官方修复未部署，用户可能在错误版本代码上继续遭遇 E2EE、会话或设备密钥问题。
- **Fix PR：** **未发现直接关联 PR**。
- **建议：** 为主程序升级增加插件清单、版本比对、迁移或强制重装机制。

#### 2. 官方渠道插件 worker 在 Linux 启动崩溃

- **Issue：** [#8682](https://github.com/agentscope-ai/QwenPaw/issues/8682)
- **影响：** `HOME` / `QWENPAW_WORKING_DIR` 未传入，worker 抛出 `Could not determine home directory`，渠道状态进入 `failed`。
- **Fix PR：** **未发现直接关联 PR**。
- **建议：** 将插件 worker 环境继承纳入发布门禁。

#### 3. Feishu 在 Windows 打包版每次启动均失败

- **Issue：** [#8669](https://github.com/agentscope-ai/QwenPaw/issues/8669)
- **影响：** 确定性启动失败，用户无法稳定使用 Feishu 渠道。
- **Fix PR：** **未发现直接关联 PR**。
- **建议：** 修复初始连接状态判定，并增加 Windows 打包版 E2E 启动测试。

#### 4. Windows 11 IoT LTSC 上 2.3.0-beta.1 无法启动

- **Issue：** [#8616](https://github.com/agentscope-ai/QwenPaw/issues/8616)
- **影响：** “path not found” 后进入 AppHang，旧版 2.2.2 可正常运行，属于明显升级回归。
- **Fix PR：** **未发现直接关联 PR**。
- **建议：** 检查安装器、PATH、Windows 11 IoT LTSC 兼容性和启动器依赖解析。

### 严重级别：S2 / 中高

#### 5. 自动记忆搜索触发重复调用后无法收尾

- **Issue：** [#8361](https://github.com/agentscope-ai/QwenPaw/issues/8361)
- **影响：** 用户回合无法生成最终回复，属于主对话流程失效。
- **Fix PR：** **未发现直接关联 PR**。
- **建议：** 将重复调用拦截改为可恢复控制流，确保 finalize 始终有机会执行。

#### 6. 记忆标签索引返回 503 且不重建

- **Issue：** [#8580](https://github.com/agentscope-ai/QwenPaw/issues/8580)
- **影响：** 标签已经生成但查询不可用，记忆管理与运维能力受损。
- **Fix PR：** **未发现直接关联 PR**。
- **建议：** 增加索引状态、增量重建和失败恢复机制。

#### 7. 查询异常持续生成完整会话快照

- **Issue：** [#8674](https://github.com/agentscope-ai/QwenPaw/issues/8674)
- **影响：** 临时目录可被诊断 JSON 占满数百 MB，长期运行存在磁盘耗尽风险。
- **Fix PR：** [#8678](https://github.com/agentscope-ai/QwenPaw/pull/8678)
- **状态：** **已有 fix PR，待合并。**

#### 8. 深度扫描被波浪线路径候选中断

- **Issue：** [#8688](https://github.com/agentscope-ai/QwenPaw/issues/8688)
- **影响：** 合法 Python heredoc 被误判并终止剩余检测器，可能造成安全扫描覆盖不足。
- **Fix PR：** [#8689](https://github.com/agentscope-ai/QwenPaw/pull/8689)
- **状态：** **已有 fix PR，待合并。**

### 严重级别：S3 / 中

#### 9. Matrix 多工作区启动竞争

- **Issue：** [#8538](https://github.com/agentscope-ai/QwenPaw/issues/8538)
- **影响：** 多账号场景中部分或全部工作区无法上线。
- **状态：** 已关闭；建议核对修复是否覆盖所有渠道和工作区隔离场景。

#### 10. 转写设置无法更新 `transcription_model`

- **Issue：** [#8035](https://github.com/agentscope-ai/QwenPaw/issues/8035)
- **影响：** 切换转写供应商后模型配置可能静默失效。
- **状态：** 已关闭。

#### 11. Safari 消息队列操作按钮不渲染

- **Issue：** [#8663](https://github.com/agentscope-ai/QwenPaw/issues/8663)
- **影响：** Safari 中编辑、中断发送、删除等队列操作不可用。
- **状态：** 已关闭。

#### 12. Windows 卷根目录沙箱 ACL 继承问题

- **Issue / PR：** [#8018](https://github.com/agentscope-ai/QwenPaw/pull/8018)
- **影响：** 权限可能向现有子项传播，存在越权风险。
- **状态：** **已有 fix PR，待合并。**

---

## 六、功能请求与路线图信号

### 高概率进入下一版本

#### 1. 本地模型运行时分层管理

- **相关 PR：** [#8649](https://github.com/agentscope-ai/QwenPaw/pull/8649)、[#8431](https://github.com/agentscope-ai/QwenPaw/pull/8431)
- **信号：** llama.cpp GPU 控制、运行时自动更新、托管 MLX、Local Whisper SDK 化正在形成连续能力链。
- **判断：** 高概率进入 v2.4.x；需要统一模型、运行时和插件生命周期管理。

#### 2. 记忆模型成本分层

- **相关 PR：** [#7719](https://github.com/agentscope-ai/QwenPaw/pull/7719)、[#8578](https://github.com/agentscope-ai/QwenPaw/pull/8578)
- **信号：** 独立记忆写入模型、过期 daily notes 主动提醒，均直接回应长期运行和成本管理。
- **判断：** 很可能进入下一轮记忆能力迭代，但前提是修复标签索引和重复搜索恢复问题。

#### 3. 插件数据目录与升级治理

- **相关 Issue / PR：** [#8686](https://github.com/agentscope-ai/QwenPaw/issues/8686)、[#8687](https://github.com/agentscope-ai/QwenPaw/pull/8687)
- **信号：** 已开始正式定义插件数据所有权规范。
- **判断：** 文档 PR 很可能先合入；完整审计能力可能进入后续版本。

#### 4. Console 窄屏和长任务体验

- **相关 Issue / PR：** [#8683](https://github.com/agentscope-ai/QwenPaw/issues/8683)、[#8650](https://github.com/agentscope-ai/QwenPaw/issues/8650)、[#8612](https://github.com/agentscope-ai/QwenPaw/issues/8612)、[#8685](https://github.com/agentscope-ai/QwenPaw/pull/8685)
- **信号：** 用户对 Markdown 预览尺寸、工具卡片可读性、思考块对齐和执行类工具描述有集中反馈。
- **判断：** 响应式修复已进入 PR；Markdown 全屏/尺寸调整及长任务组件统一设计可能进入下一版本。

### 中等概率进入下一版本

#### 5. 从回答中选择文本作为后续上下文

- **Issue：** [#5110](https://github.com/agentscope-ai/QwenPaw/issues/5110)
- **信号：** 用户希望获得类似 Perplexity 的“引用/追问”交互。
- **判断：** 该功能已有讨论并关闭，适合作为 Console 交互增强进入后续小版本。

#### 6. 浏览器标签页显示当前会话名

- **Issue：** [#8605](https://github.com/agentscope-ai/QwenPaw/issues/8605)
- **信号：** 多标签页、多会话并行时，现有静态标题无法区分任务。
- **判断：** 已关闭，具备明确低成本实现特征，可作为 Console 易用性增强。

#### 7. 社区帖子 GitHub 链接与互动增强

- **相关 PR：** [#8673](https://github.com/agentscope-ai/QwenPaw/pull/8673)
- **判断：** 已有实现 PR，若测试通过，较可能随社区功能迭代进入下一版本。

### 路线图观察

QwenPaw 的近期路线呈现出四条清晰主线：

1. **本地优先**：Piccolo、llama.cpp、MLX、Local Whisper。
2. **插件化治理**：官方渠道插件、SDK 生命周期、插件数据目录和升级迁移。
3. **长期记忆系统**：独立记忆模型、daily notes 提醒、索引自愈。
4. **Console 生产化**：窄屏布局、流式渲染性能、文件下载、长任务可读性和外部运行重连。

---

## 七、用户反馈摘要

### 核心使用场景

- **多渠道、多工作区运行：** 企业或高级用户会在同一实例中同时启用 Feishu、Matrix、WeChat 等官方插件，因此插件并发启动和实例隔离是高频需求。
- **长期运行的个人助理：** 用户依赖自动记忆搜索、daily notes 和标签管理，重点关注记忆成本、索引可靠性和主动提醒。
- **多标签页控制台操作：** 用户一边运行长任务，一边从其他渠道或终端触发会话，要求 Console 能识别、重连并清晰展示执行过程。
- **本地模型部署：** 用户希望在 Windows、Linux 和不同硬件上使用本地模型，同时要求 GPU、量化和运行时更新可配置。
- **语音转写和多供应商切换：** 用户需要 Local Whisper 与云端供应商之间可靠切换，避免静默失效。

### 主要痛点

- **升级后行为与版本号不一致：** 插件未迁移导致“已经升级，但修复没有生效”，是当前最影响信任的问题。
- **渠道启动缺乏韧性：** Feishu 和 Matrix 的失败模式偏确定性，说明连接状态机与并发模型仍需重构。
- **自动记忆可能拖垮主回复：** 重复搜索保护虽能避免成本失控，但缺少可靠恢复，用户最终得不到回复。
- **长任务界面缺少可读性：** 思考块、工具卡片和执行类工具视觉不一致，用户难以快速判断 Agent 正在做什么。
- **诊断数据可能反噬生产环境：** 查询错误快照无限积累，在定时任务或持续故障下可能耗尽临时磁盘。
- **插件缺少安全边界：** 插件把状态写入安装目录并在启动时清理文件，可能误删用户数据，也可能在升级时覆盖状态。

### 积极信号

- v2.3.0 引入 Piccolo 本地决策模型，为工具审查和上下文压缩提供了更轻量的本地执行路径。
- 多个体验型问题已在一天内关闭，包括 Safari 队列按钮、浏览器标签标题、工具卡片视觉统一和转写设置。
- 安全治理 PR 明显增多，且开始覆盖插件数据目录、Office COM 和诊断文件保留策略，说明项目不只追求功能扩张，也重视生产安全。

### 不满集中点

用户当前最不满意的并非缺少功能，而是**关键链路的一致性和可预期性**：升级后插件是否更新、渠道是否能稳定上线、自动记忆失败后能否继续、工具卡片是否准确说明当前动作。

---

## 八、待处理积压

> “长期”依据创建时间与当前开放状态综合判断，不代表仓库内所有未关闭事项均已逾期。

### 1. 自动记忆搜索重复调用后无法回复

- **Issue：** [#8361](https://github.com/agentscope-ai/QwenPaw/issues/8361)
- **创建时间：** 2026-10-21
- **状态：** 开放，已有 4 条评论，仍无明确 fix PR。
- **积压风险：** 高；直接影响对话完成率。

### 2. Windows 11 IoT LTSC 升级回归

- **Issue：** [#8616](https://github.com/agentscope-ai/QwenPaw/issues/8616)
- **创建时间：** 2026-11-07
- **状态：** 开放。
- **积压风险：** 高；属于稳定版兼容性问题，应明确是否影响 v2.3.0 正式版。

### 3. 独立记忆写入模型 PR

- **PR：** [#7719](https://github.com/agentscope-ai/QwenPaw/pull/7719)
- **创建时间：** 2026-09-12
- **状态：** 开放、Under Review。
- **积压风险：** 中高；功能价值明确，但审核周期较长，可能影响记忆模块下一版本规划。

### 4. Local Whisper SDK 插件化

- **PR：** [#8431](https://github.com/agentscope-ai/QwenPaw/pull/8431)
- **创建时间：** 2026-10-26
- **状态：** 开放。
- **积压风险：** 中；与本地模型统一管理路线相关，应明确依赖关系和合入窗口。

### 5. Windows 沙箱 ACL 修复

- **PR：** [#8018](https://github.com/agentscope-ai/QwenPaw/pull/8018)
- **创建时间：** 2026-09-29
- **状态：** 开放。
- **积压风险：** 中高；属于安全边界问题，不宜长期停留在待合并状态。

### 6. Office COM 无沙箱降级安全修复

- **PR：** [#8048](https://github.com/agentscope-ai/QwenPaw/pull/8048)
- **创建时间：** 2026-09-30
- **状态：** 开放。
- **积压风险：** 中高；涉及自动执行 Office 自动化，应明确测试和安全审查负责人。

### 7. 缺失 Provider 返回 404 的 API 测试

- **PR：** [#8308](https://github.com/agentscope-ai/QwenPaw/pull/8308)
- **创建时间：** 2026-10-18
- **状态：** 开放。
- **积压风险：** 中；测试方向清晰，但因依赖上游 catalog 测试分支，可能长期受阻塞。

### 8. 渠道连接失败状态解析

- **PR：** [#8512](https://github.com/agentscope-ai/QwenPaw/pull/8512)
- **创建时间：** 2026-10-30
- **状态：** 开放。
- **积压风险：** 中；兼容 OpenAI-compatible 网关流式错误解析，可改善错误提示与重试策略。

---

## 九、项目健康度结论

| 维度 | 评价 | 依据 |
|---|---|---|
| 开发活跃度 | **高** | 24 小时更新 18 个 Issues、50 个 PR，并发布稳定版 |
| 功能推进 | **高** | 本地模型、记忆、插件、Console、语音、安全均有连续 PR |
| 社区活跃度 | **中高** | 核心 Issue 有持续评论，多条问题在当天得到处理 |
| 稳定性 | **承压** | v2.3.0 发布后出现插件迁移、渠道启动、Windows 和 Linux 兼容问题 |
| 安全治理 | **中高** | 沙箱、Office COM、插件数据和诊断保留均有专项改进 |
| 发布质量 | **中等** | 版本发布及时，但插件升级迁移与跨平台验证暴露明显缺口 |
| 积压风险 | **中等** | 多个 9—10 月创建的重要 PR 仍开放，部分直接修复缺乏对应 PR |

**综合判断：项目处于高强度迭代期，功能路线清晰且推进速度较快，但 v2.3.0 后的质量收敛尚未完成。下一阶段应优先完成插件升级迁移、官方渠道 worker 环境传递、Feishu/Matrix 启动状态机、Windows IoT 兼容、记忆索引自愈，以及诊断文件限额修复。** 这些事项若未及时收敛，可能削弱用户对稳定版升级路径的信任。

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/NousResearch/hermes-agent">NousResearch/hermes-agent</a></summary>

# Hermes Agent 项目动态日报

**统计日期：2026-11-12**  
**数据范围：过去 24 小时**  
**项目：** [NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent)

---

## 1. 今日速览

过去 24 小时项目保持较高活跃度：共更新 **50 条 Issue**（27 条新开或活跃、23 条已关闭）和 **50 条 PR**（42 条待合并、8 条已合并或关闭），但**没有发布新版本**。讨论焦点明显集中在 **Telegram Gateway 的连接稳定性、会话路由与会话持久化**，同时有多个重要 P1 问题得到修复。社区插件目录扩张迅速，新增插件覆盖本地语音、浏览器内 Agent、macOS Keychain、Blender 视频生成和 WoW 聊天等场景。整体健康度评估为 **中高**：修复交付积极、贡献活跃，但核心 Gateway 仍面临较多重复性、高影响稳定性债务。

---

## 3. 项目进展

> 今日无新版本发布，因此本节重点回顾已合并或关闭的重要 PR。

### 3.1 Gateway 会话持久化修复

- [PR #153426：Gateway 临时无法访问 state.db 时，Agent 仍应将当前及后续回合写入 state.db](https://github.com/NousResearch/hermes-agent/pull/153426)  
  修复了 Gateway 构建 Agent 时 `state.db` 短暂不可用，导致当前回合以及缓存 Agent 后续回合永久遗漏的问题。此前 `sessions.json` 仍会更新，造成“界面看似存在、数据库实际为空”的不一致。该修复直接覆盖 [Issue #140823](https://github.com/NousResearch/hermes-agent/issues/140823)，属于 P1 稳定性改进。

### 3.2 Telegram 委派会话路由修复

- [PR #153459：Telegram 线程不再继续路由到委派子 Agent](https://github.com/NousResearch/hermes-agent/pull/153459)  
  当线程状态残留了 `delegate_task` 子会话标识时，用户的下一条消息可能被错误发送给子 Agent，导致其缺少主会话历史却以主 Agent 身份回答。修复后，线程下一条消息会重新落入自身会话，覆盖 [Issue #138210](https://github.com/NousResearch/hermes-agent/issues/138210)。

### 3.3 多 Profile 更新重启隔离

- [PR #153478：更新时每个 Profile 使用自己的 Bot Token 重启 Gateway](https://github.com/NousResearch/hermes-agent/pull/153478)  
  修复多 Profile 安装中，更新器可能用主 Profile 的 Telegram Token 重启其他 Profile Gateway，导致 API-only Profile 启动主 Bot、争抢 polling lock 或产生错误路由的问题。该修复与 [Issue #135792](https://github.com/NousResearch/hermes-agent/issues/135792) 对应，属于认证隔离与凭据安全改进。

### 3.4 Cron 图片投递语义修复

- [PR #153486：`[[as_document]]` 发送原始图片而非重新压缩照片](https://github.com/NousResearch/hermes-agent/pull/153486)  
  Cron 原先在投递前丢弃 `[[as_document]]` 指令，使 Telegram 收到重新压缩后的图片，而不是原始文件。修复同时覆盖实时 Gateway 和 `hermes cron run` 两条路径，解决 [Issue #137794](https://github.com/NousResearch/hermes-agent/issues/137794)。

### 3.5 其他已关闭的重要 PR

- [PR #153534：Cron 主题回报与手动执行的主题泄漏修复](https://github.com/NousResearch/hermes-agent/pull/153534)  
  修复 Telegram Topic 中创建的 Cron 任务回报发到 General，以及手动执行结果串到错误 Topic 的问题。该 PR 还覆盖了裸 `hermes send` 的目标解析。

- [PR #153499：`/stop` 或 `/new` 中断流式输出时清理预览光标](https://github.com/NousResearch/hermes-agent/pull/153499)  
  修复 Telegram、Discord、Slack、Matrix 等平台在回复中途终止后仍永久显示 `▉` 光标的问题，覆盖 [Issue #123530](https://github.com/NousResearch/hermes-agent/issues/123530)。

### 推进程度评估

今日至少关闭了 **6 项具有明确用户影响的功能或稳定性修复**，其中 3 项直接针对 P1/P2 级会话、凭据或消息路由问题。进展方向是：

1. 强化会话状态数据库的一致性；
2. 修复 Telegram 多 Profile 和委派会话隔离；
3. 改善 Cron 和消息投递的可预测性；
4. 补齐 Gateway 的生产环境可靠性。

不过多数讨论型 Issue 仍处于开放状态，且 PR 待合并数量达到 **42 条**，说明主干分支的合并吞吐、代码审查和回归验证能力可能是当前瓶颈。

---

## 4. 社区热点

### 4.1 最活跃 Issue：文档链、治理与上下文压缩

- [Issue #143379：RFC — THE DOC-CHAIN SUBSTRATE'S NETWORK](https://github.com/NousResearch/hermes-agent/issues/143379)  
  **37 条评论**，为今日讨论度最高的条目。其核心诉求是建立持久化、可治理、可重新读取的文档链，使记录在会话压缩后仍保留来源与可审计性，并让 Agent 能主动重读已有资料，而不是要求用户重复提供上下文。

**背后诉求：**
- 长期记忆不能只依赖易失的会话上下文；
- 压缩策略必须保留文档来源、版本和治理规则；
- 用户需要知道 Agent 何时依赖旧文档、何时进行了重新读取；
- 这也是 [Issue #42864](https://github.com/NousResearch/hermes-agent/issues/42864) 中独立记忆提供方 RFC 的共同背景。

### 4.2 Telegram HTTP Proxy 下连接池退化

- [Issue #69314：健康 HTTP Proxy 后 Telegram Gateway 累积 CLOSE_WAIT](https://github.com/NousResearch/hermes-agent/issues/69314)  
  **9 条评论**。用户报告 Gateway 进程仍存活、代理本身健康，但 Telegram 适配器持续重试并积累大量 `CLOSE_WAIT`，最终需要重启才能恢复。

**背后诉求：**
- 网络代理场景应是正式支持配置，而非边缘部署；
- Gateway 需要连接生命周期管理、主动清理和退避上限；
- 运维状态不能只显示“进程存活”，还应反映消息投递是否健康。

相关条目：

- [Issue #70830：Telegram CLOSE_WAIT socket 泄漏](https://github.com/NousResearch/hermes-agent/issues/70830)
- [Issue #82678：Telegram fallback 连接池超过进程 FD 预算](https://github.com/NousResearch/hermes-agent/issues/82678)

这些并非孤立个案，反映 Telegram 网络栈长期存在资源生命周期问题。

### 4.3 Gateway 消息元数据导致严格 Provider 返回 400

- [Issue #48523：convert_messages 未清理内部消息字段](https://github.com/NousResearch/hermes-agent/issues/48523)  
  **9 条评论、2 个赞**。Gateway 从 SQLite 回放会话时，将 `timestamp`、`message_id`、`observed`、`finish_reason` 等内部字段带入 Provider 请求，严格接口因此返回 HTTP 400。

**背后诉求：**
- Gateway 内部会话元数据与 Provider API payload 必须严格隔离；
- 同一模型在普通模式与 Gateway 模式下行为应一致；
- 转换层需要 schema 白名单或明确的字段剥离机制。

### 4.4 插件目录成为 PR 热点

当前待合并 PR 中，插件目录新增非常密集：

- [PR #154052：vape-coach](https://github.com/NousResearch/hermes-agent/pull/154052)  
  本地优先的摄像头吸入追踪与递减训练插件。

- [PR #153995：hermes-committee](https://github.com/NousResearch/hermes-agent/pull/153995)  
  面向多 Agent 协作的社区插件目录条目。

- [PR #153938：syrinx](https://github.com/NousResearch/hermes-agent/pull/153938)  
  在 Agent 工作一段时间后主动暂停、检查进度的插件。

- [PR #152199：hermes-browser](https://github.com/NousResearch/hermes-agent/pull/152199)  
  将 Hermes Agent Core 放入浏览器 Web Worker，包含隔离密钥仓、浏览器工具、本地模型端点和可嵌入组件。

- [PR #152986：hermes-local-voice](https://github.com/NousResearch/hermes-agent/pull/152986)  
  使用 PipeWire/ffmpeg 采集语音，并以本地 faster-whisper 转录。

- [PR #153690：macOS Keychain 密钥源](https://github.com/NousResearch/hermes-agent/pull/153690)  
  允许从 macOS 登录钥匙串解析 Provider 凭据，避免明文保存在 `.env`。

- [PR #153797：dioramic](https://github.com/NousResearch/hermes-agent/pull/153797)  
  将结构化场景描述渲染为竖屏 9:16 视频和静态预览。

- [PR #154186：followup-chips](https://github.com/NousResearch/hermes-agent/pull/154186)  
  在 Desktop 转录中生成可点击的后续问题标签。

- [PR #154256：WoW Hermes](https://github.com/NousResearch/hermes-agent/pull/154256)  
  将《魔兽世界》聊天接入 Hermes Profile。

**社区信号：**  
生态贡献意愿很强，插件正在从“工具调用”扩展到安全存储、离线语音、浏览器运行时和垂直场景。但多数条目缺少评论数据，可能仍处于早期自动审查阶段。

---

## 5. Bug 与稳定性

### 严重程度：P1 / 高影响

1. **[Issue #140823：Gateway 消息未写入 state.db](https://github.com/NousResearch/hermes-agent/issues/140823)**  
   Telegram、微信等平台可以正常收发消息，但 SQLite `sessions/messages` 表为空，导致 Desktop 显示 0 条消息。  
   **已有修复：** [PR #153426](https://github.com/NousResearch/hermes-agent/pull/153426)，已关闭。

2. **[Issue #138210：委派子 Agent 继承父 Telegram 线程绑定](https://github.com/NousResearch/hermes-agent/issues/138210)**  
   用户后续消息可能被路由给没有完整历史的子 Agent。  
   **已有修复：** [PR #153459](https://github.com/NousResearch/hermes-agent/pull/153459)，已关闭。

3. **[Issue #138649：Gateway 内 Telegram 初始化在建立 socket 前卡死](https://github.com/NousResearch/hermes-agent/issues/138649)**  
   相同环境下 standalone 连接约 0.3 秒成功，但 Gateway 进程可能持续无响应。  
   **修复状态：** Issue 已关闭；今日展示的 PR 中未见明确对应修复，需确认是否通过其他变更合入。

4. **[Issue #109073：主 Gateway 会话被 `_delegate_from` 标记污染](https://github.com/NousResearch/hermes-agent/issues/109073)**  
   会话在所有会话列表中不可见，但 Gateway 仍持续路由。  
   **修复状态：** Issue 已关闭，未在展示 PR 中发现直接对应项。

### 严重程度：P2 / 中高影响

5. **[Issue #48523：严格 Provider 因内部字段返回 400](https://github.com/NousResearch/hermes-agent/issues/48523)**  
   **已有修复：** 当前列表未见直接修复 PR，Issue 仍开放。

6. **[Issue #150123：Dashboard Chat 循环崩溃 “gateway exited (1)”](https://github.com/NousResearch/hermes-agent/issues/150123)**  
   单 Profile 安装且存在活动会话时，浏览器聊天面板可能持续崩溃。  
   **已有修复：** 当前列表未见直接修复 PR，Issue 仍开放。

7. **[Issue #151101：Bot Screen 始终显示 Screen packages missing](https://github.com/NousResearch/hermes-agent/issues/151101)**  
   Webapp Host Bridge 缺少 `requestProfile`。  
   **已有修复：** 当前列表未见直接修复 PR，Issue 仍开放。

8. **[Issue #143548：TUI diff 行前景色与背景色相同](https://github.com/NousResearch/hermes-agent/issues/143548)**  
   新增和删除内容不可读，属于主题配置缺少校验导致的可用性故障。  
   **已有修复：** 当前列表未见直接修复 PR，Issue 仍开放。

9. **[Issue #148204：Windows `hermes update` 因 SCM 枚举权限不足中止](https://github.com/NousResearch/hermes-agent/issues/148204)**  
   遇到 `WinError 5` 时更新在接触代码前就退出。  
   **已有修复：** 当前列表未见直接修复 PR，Issue 仍开放。

10. **[Issue #137848：远程 SSH 后端更新在固定 6 分钟后被误报失败](https://github.com/NousResearch/hermes-agent/issues/137848)**  
    远端更新可能仍在运行，但 Desktop 已报告失败。  
    **已有修复：** 当前列表未见直接修复 PR，Issue 仍开放。

11. **[Issue #150614：session_reset continuation 被父 chat_id 覆盖](https://github.com/NousResearch/hermes-agent/issues/150614)**  
    页面先显示 continuation，短暂后又被父会话替换，造成新消息“消失”的错觉。  
    **已有修复：** 当前列表未见直接修复 PR，Issue 仍开放。

12. **[Issue #149992：openmail 固定版本导致所有入站邮件被拒绝](https://github.com/NousResearch/hermes-agent/issues/149992)**  
    插件目录锁定的旧 revision 会附加不被原生 admission gate 接受的 metadata。  
    **已有修复：** 当前列表未见直接修复 PR，Issue 仍开放。

13. **[Issue #13262：Telegram 回复泄露 LaTeX 转义序列](https://github.com/NousResearch/hermes-agent/issues/13262)**  
    如 `\rightarrow` 会直接显示给用户。  
    **已有修复：** Issue 已关闭，但展示 PR 中未看到明确对应项。

### 稳定性主题判断

今日 Bug 集中反映出四条系统性主线：

- **会话持久化与路由一致性不足**：状态分散在 `sessions.json`、SQLite、Gateway 缓存及 Profile 映射中；
- **Telegram 网络栈生命周期脆弱**：CLOSE_WAIT、连接池上限、IPv6 回退、Proxy/NO_PROXY 均出现独立问题；
- **Desktop 与 Gateway 集成边界不稳定**：Dashboard、TUI、远程更新和线程绑定均有回归；
- **配置与版本治理不足**：插件 SHA 固定、旧配置语义、Windows 权限和 npm 漏洞检查均需加强。

---

## 6. 功能请求与路线图信号

### 6.1 可观测的文档链与压缩治理

- [Issue #143379](https://github.com/NousResearch/hermes-agent/issues/143379)
- [Issue #42864](https://github.com/NousResearch/hermes-agent/issues/42864)

这是当前最明确的中长期架构信号。需求重点不是简单扩大上下文窗口，而是：

- 持久化、带来源的文档记录；
- 压缩后的可恢复读取；
- 文档读取与使用的治理、审计；
- 独立 memory provider 扩展机制。

若 #143379 后续拆分为可独立合并的协议、存储接口和治理规则，相关基础能力可能进入下一版本。

### 6.2 Desktop 跨设备实时会话同步

- [Issue #87587](https://github.com/NousResearch/hermes-agent/issues/87587)

用户希望 Windows、macOS 等多设备连接到同一远程 Gateway 时，会话变更能够实时同步，而不是依赖下拉刷新或重新登录。

**路线图判断：** 中等概率。该需求与现有会话架构、Gateway 事件流和 Desktop 性能优化高度相关，但需要先统一会话状态源和推送协议。

### 6.3 Dashboard、Bot Screen 与 Desktop 性能

- [Issue #150123](https://github.com/NousResearch/hermes-agent/issues/150123)
- [Issue #151101](https://github.com/NousResearch/hermes-agent/issues/151101)
- [Issue #146383](https://github.com/NousResearch/hermes-agent/issues/146383)
- [PR #147652](https://github.com/NousResearch/hermes-agent/pull/147652)

其中 [PR #147652](https://github.com/NousResearch/hermes-agent/pull/147652) 将 Kanban 读取改为增量 delta，并只窗口化渲染长列，属于明确性能路线。

**路线图判断：**  
- 增量加载、窗口化渲染：高概率；
- Dashboard 和 Bot Screen 修复：高概率，但需先解决 Host Bridge 接口缺失；
- Windows 全局动画规则优化：中等概率，可能通过 CSS 作用域缩小或检测 `prefers-reduced-motion` 解决。

### 6.4 插件生态扩张

以下开放 PR 展示了下一阶段可能的生态方向：

- 本地优先视觉与健康插件：  
  [vape-coach #154052](https://github.com/NousResearch/hermes-agent/pull/154052)、[dioramic #153797](https://github.com/NousResearch/hermes-agent/pull/153797)

- 浏览器内完整 Agent Runtime：  
  [hermes-browser #152199](https://github.com/NousResearch/hermes-agent/pull/152199)

- 本地语音和隐私优先转录：  
  [hermes-local-voice #152986](https://github.com/NousResearch/hermes-agent/pull/152986)

- 系统级密钥管理：  
  [keychain #153690](https://github.com/NousResearch/hermes-agent/pull/153690)

- Desktop 交互增强：  
  [followup-chips #154186](https://github.com/NousResearch/hermes-agent/pull/154186)

- 垂直平台接入：  
  [WoW Hermes #154256](https://github.com/NousResearch/hermes-agent/pull/154256)

**路线图判断：** 插件目录、SecretSource、插件触发的 Desktop 指令和平台适配器正在成为正式扩展面。下一版本可能继续强化插件治理、版本固定和安全审查，而不是大规模把这些插件直接并入核心。

### 6.5 模型路由与计费正确性

- [PR #154263：Desktop 新会话使用用户选择的模型路由](https://github.com/NousResearch/hermes-agent/pull/154263)

当同模型存在多个 Provider 时，Desktop 可能悄悄使用回退 Provider，并把费用计到错误账户。该修复已直接提交，预计属于近期 Desktop 小版本修复候选。

---

## 7. 用户反馈摘要

### 真实使用场景

1. **Telegram 作为长期主力交互界面**  
   用户不仅发送文本，还广泛使用语音、Markdown、流式预览、Topic、Cron、子 Agent 和多 Profile。问题往往出现在代理、IPv4/IPv6、群组 Topic、记忆清理和会话重置等组合场景，而非基础发送消息。

2. **Docker、HTTP Proxy 和远程 Gateway 部署**  
   [Issue #69314](https://github.com/NousResearch/hermes-agent/issues/69314) 明确反映代理配置下的生产故障：代理健康，但 Gateway 内部连接池持续积累 `CLOSE_WAIT`。

3. **Windows 本地安装与更新**  
   [Issue #148204](https://github.com/NousResearch/hermes-agent/issues/148204) 和 [Issue #146383](https://github.com/NousResearch/hermes-agent/issues/146383) 表明 Windows 是重要用户群，但更新权限、SCM 枚举和界面性能体验仍有明显缺口。

4. **多设备远程使用**  
   [Issue #87587](https://github.com/NousResearch/hermes-agent/issues/87587) 显示用户在 Windows 与 macOS 间切换，并连接同一远程 Gateway；实时同步是实际工作流需求。

5. **Desktop 作为多模型工作台**  
   [PR #154263](https://github.com/NousResearch/hermes-agent/pull/154263) 表明用户会同时选择多个 Provider 及其同名模型，并关注实际路由与费用归属。

### 主要满意点

- Telegram 基础消息送达能力可用，多项相关回归已快速形成修复 PR；
- Agent 路由、记忆和插件扩展点具有较强可塑性；
- 社区插件类型丰富，显示核心框架具备良好的二次开发吸引力；
- Cron、Desktop 和多 Profile 场景中的具体问题能够被复现并形成定向补丁。

### 主要不满意点

- **状态一致性不足**：消息“已经处理”但 SQLite 没有记录，桌面端显示为空；
- **路由错误难预测**：子 Agent、Profile、Topic 和 continuation 可能发生错配；
- **生产网络行为缺少可预测上限**：连接池、CLOSE_WAIT、重试和 IPv6 回退均可能长期阻塞；
- **版本化插件存在陈旧兼容问题**：如 [Issue #149992](https://github.com/NousResearch/hermes-agent/issues/149992)；
- **Desktop 集成体验仍不够稳定**：Dashboard 崩溃、Screen Bridge 缺失、跨设备同步不足及 Windows 卡顿同时存在。

---

## 8. 待处理积压

以下条目虽非今日创建，但因评论多、影响大或开放时间较长，值得维护者优先关注。

### 8.1 长期开放的 P4 架构 RFC

- [Issue #143379](https://github.com/NousResearch/hermes-agent/issues/143379)  
  已获得 **37 条评论**，是本次数据中最值得明确阶段性结论的议题。建议维护者拆分：

  1. 文档记录格式与 provenance；
  2. 压缩后的引用恢复；
  3. 治理策略与审计接口；
  4. 外部 memory provider 接口。

  否则高热度 RFC 容易长期停留在讨论状态。

### 8.2 长期未解决的严格 Provider 兼容问题

- [Issue #48523](https://github.com/NousResearch/hermes-agent/issues/48523)  
  自 2026-06-18 创建，已有 **9 条评论**，仍开放。建议将其提升为 Gateway Provider 消息 schema 的兼容性测试任务，而非单个 Provider 修补。

### 8.3 Telegram 网络稳定性问题族

- [Issue #69314](https://github.com/NousResearch/hermes-agent/issues/69314)
- [Issue #70830](https://github.com/NousResearch/hermes-agent/issues/70830)
- [Issue #82678](https://github.com/NousResearch/hermes-agent/issues/82678)
- [Issue #96261](https://github.com/NousResearch/hermes-agent/issues/96261)
- [Issue #138649](https://github.com/NousResearch/hermes-agent/issues/138649)

建议统一审计：

- 连接池最大值与进程 FD 预算；
- `CLOSE_WAIT` 主动清理；
- HTTP Proxy/NO_PROXY 主机匹配；
- IPv4/IPv6 回退；
- 初始化阶段 socket 前阻塞；
- 重试退避和可观测健康指标。

### 8.4 当前开放的重要 P2 问题

- [Issue #150123](https://github.com/NousResearch/hermes-agent/issues/150123)：Dashboard Chat 循环崩溃；
- [Issue #151101](https://github.com/NousResearch/hermes-agent/issues/151101)：Bot Screen Host Bridge 缺接口；
- [Issue #143548](https://github.com/NousResearch/hermes-agent/issues/143548)：TUI diff 不可见；
- [Issue #148204](https://github.com/NousResearch/hermes-agent/issues/148204)：Windows 更新权限失败；
- [Issue #137848](https://github.com/NousResearch/hermes-agent/issues/137848)：SSH 远端更新超时误报；
- [Issue #150614](https://github.com/NousResearch/hermes-agent/issues/150614)：continuation 被父会话覆盖；
- [Issue #149992](https://github.com/NousResearch/hermes-agent/issues/149992)：openmail catalog pin 过旧。

这些问题均有明确用户场景和可测试复现条件，适合进入下一轮里程碑。

### 8.5 待合并 PR 积压

过去 24 小时仍有 **42 条 PR 待合并**。其中以下 PR 已接近可合并状态或具有较高用户价值：

- [PR #153534：Cron Topic 路由修复](https://github.com/NousResearch/hermes-agent/pull/153534)
- [PR #153499：流式预览光标清理](https://github.com/NousResearch/hermes-agent/pull/153499)
- [PR #154263：Desktop 模型路由与计费修复](https://github.com/NousResearch/hermes-agent/pull/154263)
- [PR #147652：Kanban 增量读取与窗口化渲染](https://github.com/NousResearch/hermes-agent/pull/147652)
- [PR #153690：macOS Keychain SecretSource](https://github.com/NousResearch/hermes-agent/pull/153690)
- [PR #152986：本地语音插件](https://github.com/NousResearch/hermes-agent/pull/152986)

### 8.6 安全与兼容性积压

- [Issue #138893：npm vulnerabilities 缺少 overrides](https://github.com/NousResearch/hermes-agent/issues/138893)  
  涉及 `minimatch`、`jsdom`、`undici`、`vitest`、`yaml`，且覆盖 agent-browser、web、ui-tui 多个 workspace。该问题会持续影响 `hermes doctor` 和全新安装体验，应与升级路径一起处理。

---

## 项目健康度结论

**综合健康度：中高。**

**积极信号：**
- 50 条 Issue、50 条 PR 在 24 小时内更新，贡献活跃；
- 多个 P1/P2 问题已形成针对性修复 PR；
- 会话持久化、委派路由、Profile Token 隔离等高风险路径得到加强；
- 插件生态在本地优先、浏览器运行时、密钥安全和垂直领域快速扩展。

**主要风险：**
- 42 条 PR 待合并，审查与发布吞吐不足；
- Telegram 网络、会话绑定和多 Profile 路由问题呈重复性；
- 核心状态源尚未完全统一；
- 插件目录快速扩张，但版本固定、陈旧 SHA 和安全治理仍需加强；
- 无新版本发布，许多已修复问题尚未通过正式 Release 传达给用户。

**下一阶段最值得跟踪的三项指标：**
1. 待合并 PR 数量能否明显下降；
2. Telegram Gateway 是否形成统一的连接管理与健康诊断方案；
3. 文档链/记忆 RFC 是否拆分并进入可执行阶段。

</details>

<details>
<summary><strong>OpenHuman</strong> — <a href="https://github.com/tinyhumansai/openhuman">tinyhumansai/openhuman</a></summary>

# OpenHuman 项目动态日报

**日期：2026-11-12**

## 1. 今日速览

过去 24 小时项目保持较高开发活跃度，共更新 **8 个 Issue**、**29 个 PR**，其中 **13 个 PR 待合并、16 个已合并或关闭**，Issues 侧关闭 **2 个**、保持开放 **6 个**。  
今日工作重点集中在**安全加固、沙箱与定时任务稳定性、密钥管理、CI 覆盖和事件去重**，其中多个关键修复已有对应 PR，但仍有不少 PR 尚未进入合并阶段。  
本次数据窗口内**没有新版本发布**，因此相关改动预计仍处于开发、评审或集成阶段。  
整体来看，项目推进速度较快，工程健康度为**良好但存在集成与发布滞后风险**：功能修复数量较多，但待合并 PR 占比接近一半，若持续积压，可能影响下一版本交付。

---

## 2. 版本发布

**过去 24 小时无新版本发布。**

因此暂无可确认的正式版本更新、破坏性变更或迁移说明。需要注意，部分已关闭 PR 可能已进入后续版本，但仅凭当前数据无法确认具体发布版本。

---

## 3. 项目进展

### 3.1 沙箱与定时任务稳定性

- [#8675](https://github.com/tinyhumansai/openhuman/pull/8675) 已关闭：为定时 Agent 任务引入任务定义中的 `scheduled_workspace` 作为沙箱工作区，解决 `workspace_dir` 位于 `action_dir` 内时，所有 shell 命令均因 `denial=Path` 被拒绝的问题。  
  **进展判断：** 这是定时任务可用性的关键修复，推动 #8674 进入解决阶段。

- [#8664](https://github.com/tinyhumansai/openhuman/pull/8664) 已关闭：将保留的沙箱 box 从“仅按租户隔离”扩展为按**工作区及部署命名空间**隔离，并增强 box registry 的取消安全性，降低不同用户或部署之间共享状态的概率。

- [#8658](https://github.com/tinyhumansai/openhuman/pull/8658) 已关闭：在 agent37 上实现每租户保留一个沙箱 box，使文件状态可在后续命令和主机重启后保留，降低反复创建、销毁 box 的开销。

- [#8669](https://github.com/tinyhumansai/openhuman/pull/8669) 待合并：移除隐式 task-local 配置传递，改为显式携带 TinyBox 模块配置，并在清理后重新检查已退役 slot，改善沙箱配置隔离与生命周期一致性。

- [#8647](https://github.com/tinyhumansai/openhuman/pull/8647) 待合并：修复工作区相对 artifact 路径解析错误，避免工具输出被写成绝对路径后模型再次使用相对路径时出现读取失败。

**整体进展：** 沙箱从“能运行”进一步转向“隔离正确、状态可控、路径可靠、可恢复”。

### 3.2 密钥、凭据与自更新安全

- [#8666](https://github.com/tinyhumansai/openhuman/pull/8666) 已关闭：为无头服务增加可选的无人值守配置密钥解锁能力，可通过配置或环境变量启用。对应关闭了 [#8665](https://github.com/tinyhumansai/openhuman/issues/8665)。  
  **进展判断：** 提升了 headless 部署的可用性，但该能力需要显式 opt-in，仍需关注安全边界和部署文档。

- [#8670](https://github.com/tinyhumansai/openhuman/pull/8670) 待合并：使用文件、加密文件或内存 keyring 时，将 profile 密钥保存到加密 profile 文档，不再写入交互式 keyring，减少凭据暴露和交互依赖。

- [#8677](https://github.com/tinyhumansai/openhuman/pull/8677) 待合并：补齐邮件、腾讯元宝、LINQ 等渠道凭据的加密封装，防止在 `secrets.encrypt = true` 时仍以明文写入 `config.toml`。

- [#8676](https://github.com/tinyhumansai/openhuman/pull/8676) 待合并：自更新在暂存归档前校验 SHA-256 与发布文件大小，并以大小上限流式下载，替代全量内存缓冲，提升供应链完整性。

- [#8182](https://github.com/tinyhumansai/openhuman/pull/8182) 已关闭：将 `~/.oci` 加入敏感凭据目录黑名单，禁止沙箱及 MCP host sandbox 访问 OCI 凭据。

**整体进展：** 安全工作覆盖了配置、profile、渠道、自更新、OCI 凭据及沙箱访问控制，安全边界明显加强。

### 3.3 事件处理与渠道可靠性

- [#8667](https://github.com/tinyhumansai/openhuman/pull/8667) 待合并：修复所有队列 ingest 均超时或结果不确定时，同一事件被直接路径和队列重复分诊的问题；以 `source:event_id` 建立统一认领机制。  
  对应 Issue：[#8154](https://github.com/tinyhumansai/openhuman/issues/8154)。

- [#8168](https://github.com/tinyhumansai/openhuman/pull/8168) 待合并：修复 Telegram allowlist 被写入运行时不会读取的旧版固定路径，导致重启后配对身份丢失的问题，改为使用解析后的工作区配置路径。

- [#8564](https://github.com/tinyhumansai/openhuman/pull/8564) 待合并：修复聊天中点击“Save it”时重复创建 workflow 副本的问题，将卡片中已保存的 flow ID 传递给 workflow builder 交接流程。

### 3.4 CI 与测试基础设施

- [#8595](https://github.com/tinyhumansai/openhuman/pull/8595) 已关闭：将 hosted Rust coverage 拆分为 `core`、`product`、`facades`、`tui` 四个 nextest shard，并为卡死测试增加 5 分钟终止机制，降低单个测试拖垮整体 CI 的概率。

- [#8657](https://github.com/tinyhumansai/openhuman/pull/8657) 待合并：继续修复 hosted CI Fast Gate，包括 session store 拆分、SaaS host-authorised secret grant，以及结构化错误码保留等后续问题。

- [#8668](https://github.com/tinyhumansai/openhuman/pull/8668) 待合并：为 inbound module E2E 增加路径门控的 hosted CI lane，使此前仅本地执行的端到端测试进入 CI。  
  对应 Issue：[#8155](https://github.com/tinyhumansai/openhuman/issues/8155)。

- [#8662](https://github.com/tinyhumansai/openhuman/pull/8662) 已关闭：修复 Docker modules stage 遗漏 `git-env.mjs` 导致模块发布脚本出现 `ERR_MODULE_NOT_FOUND` 的问题。

- [#8663](https://github.com/tinyhumansai/openhuman/pull/8663) 待合并：在 CI 开始时安装固定版本 Rust toolchain，并加入重试机制，解决 CI 镜像内置 Rust 版本与仓库要求不一致的问题。

**整体进展：** CI 从“能跑”转向“分片隔离、稳定复现、覆盖关键端到端路径”，是项目工程成熟度的重要提升。

### 3.5 供应商与依赖更新

- [#8671](https://github.com/tinyhumansai/openhuman/pull/8671) 已关闭：升级 vendored tinyagents，支持 tinyinference 的 list-shaped content parts。
- [#8672](https://github.com/tinyhumansai/openhuman/pull/8672) 已关闭：继续升级 tinyagents，使 local-openai 调用支持流式返回。

**整体进展：** 今日围绕可靠性、安全、CI、事件一致性和沙箱生命周期完成了一批实质性改进。由于无新版本发布，当前成果仍需经过评审、合并与集成验证，才能判断下一版本可交付范围。

---

## 4. 社区热点

> 当前数据中未提供有效评论数和点赞数，且多数 PR 的评论数为 `undefined`，因此以下以“今日更新、影响范围及已有讨论”为主要排序依据。

### 热点一：定时任务崩溃后可能占用执行槽位长达两小时

- Issue：[#8673](https://github.com/tinyhumansai/openhuman/issues/8673)
- PR：[#8677](https://github.com/tinyhumansai/openhuman/pull/8677)（注意：该 PR 实际主题为渠道凭据加密，不是 #8673 的直接修复）

**关注点：** 主机在定时任务运行期间崩溃或重启后，任务实例的 `OCCURRENCE_LEASE` 可能继续保留，导致后续 `next_run` 长时间不推进。  
**背后诉求：** 用户需要可靠的调度语义：进程异常退出后，系统应尽快回收执行槽位，避免定时任务静默停止数十分钟甚至两小时。

### 热点二：Cron Agent 无法执行沙箱 shell

- Issue：[#8674](https://github.com/tinyhumansai/openhuman/issues/8674)
- 修复 PR：[#8675](https://github.com/tinyhumansai/openhuman/pull/8675)

**关注点：** 任务定义采用 sandboxed shell 时，若核心 `workspace_dir` 位于 `action_dir` 内，每次命令都会在执行器选择前被路径策略拒绝。  
**背后诉求：** 自动化任务必须拥有明确、最小化且可执行的工作区根，不能依赖宽泛的 action 目录授权。

### 热点三：无头主机无法解锁加密配置

- Issue：[#8665](https://github.com/tinyhumansai/openhuman/issues/8665)
- 修复 PR：[#8666](https://github.com/tinyhumansai/openhuman/pull/8666)

**关注点：** headless `serve` 遇到加密字段时会等待人工审批，导致启动或配置加载超时。  
**背后诉求：** 自动化部署既需要可无人值守运行，也需要清晰、安全、显式的授权方式。

### 热点四：沙箱资源限制缺失

- Issue：[#8659](https://github.com/tinyhumansai/openhuman/issues/8659)

**关注点：** native jail 传递 `resources: None`，子进程主要只受超时和输出大小限制，缺少 CPU、内存等资源预算。  
**背后诉求：** 第三方或不受信任代码执行需要宿主级别的资源隔离，避免高负载任务影响 OpenHuman 主机。

### 热点五：Inbound 端到端测试未进入 CI

- Issue：[#8155](https://github.com/tinyhumansai/openhuman/issues/8155)
- PR：[#8668](https://github.com/tinyhumansai/openhuman/pull/8668)

**关注点：** linked inbound E2E 仅在本地通过，CI 未覆盖真实模块的 ingest、重复拒绝和 Deliver 流程。  
**背后诉求：** 核心事件链路的回归风险需要由持续集成承担，而不能依赖开发者本地验证。

---

## 5. Bug 与稳定性

按严重程度排序如下。

### P1：高严重度

1. **Headless serve 无法解锁加密配置**
   - Issue：[#8665](https://github.com/tinyhumansai/openhuman/issues/8665)
   - 状态：**已关闭**
   - 修复 PR：[#8666](https://github.com/tinyhumansai/openhuman/pull/8666)，已关闭
   - 影响：无头部署可能在读取 `local_ai.api_key` 等字段时等待审批并超时，阻断服务启动或配置使用。

### P2：中严重度

2. **Cron Agent 的 sandbox shell 被路径策略全部拒绝**
   - Issue：[#8674](https://github.com/tinyhumansai/openhuman/issues/8674)
   - 状态：**已关闭**
   - 修复 PR：[#8675](https://github.com/tinyhumansai/openhuman/pull/8675)，已关闭
   - 影响：特定目录布局下，定时 Agent 无法执行任何 shell 命令。

3. **主机崩溃或重启后 Cron 任务槽位最长滞留两小时**
   - Issue：[#8673](https://github.com/tinyhumansai/openhuman/issues/8673)
   - 状态：**开放**
   - 直接修复 PR：**数据中未确认**
   - 影响：定时任务可能静默停摆 75 分钟以上，调度可靠性显著下降。

4. **Native jail 没有资源预算**
   - Issue：[#8659](https://github.com/tinyhumansai/openhuman/issues/8659)
   - 状态：**开放**
   - 直接修复 PR：**数据中未确认**
   - 影响：恶意、失控或高负载任务可能占用过多 CPU、内存等资源。

### P3：一般严重度

5. **Ingest 超时导致事件被分诊两次**
   - Issue：[#8154](https://github.com/tinyhumansai/openhuman/issues/8154)
   - 状态：**开放**
   - 修复 PR：[#8667](https://github.com/tinyhumansai/openhuman/pull/8667)，待合并
   - 影响：同一事件可能同时通过调用方直接路径和队列处理，造成重复动作或副作用。

6. **Telegram allowlist 重启后丢失**
   - PR：[#8168](https://github.com/tinyhumansai/openhuman/pull/8168)
   - 状态：**待合并**
   - 影响：配对身份写入运行时未读取的旧路径，重启后配对状态消失。

7. **Workflow 卡片保存时产生重复副本**
   - PR：[#8564](https://github.com/tinyhumansai/openhuman/pull/8564)
   - 状态：**待合并**
   - 影响：用户点击保存后可能生成重复 workflow。

8. **工作区相对 artifact 路径解析失败**
   - PR：[#8647](https://github.com/tinyhumansai/openhuman/pull/8647)
   - 状态：**待合并**
   - 影响：工具结果在 offload 后可能被模型以相对路径再次引用，导致重复读取失败并触发错误处理。

9. **Docker 模块发布脚本缺少依赖文件**
   - PR：[#8662](https://github.com/tinyhumansai/openhuman/pull/8662)
   - 状态：**已关闭**
   - 影响：模块 staging 阶段因 `git-env.mjs` 缺失而失败。

10. **CI Rust toolchain 版本不匹配**
    - PR：[#8663](https://github.com/tinyhumansai/openhuman/pull/8663)
    - 状态：**待合并**
    - 影响：容器 CI 使用 Rust 1.96.1，而项目要求 1.99.1，可能导致静态检查或构建失败。

---

## 6. 功能请求与路线图信号

### 6.1 Sentry 高优先级问题自动同步到 GitHub

- Feature Issue：[#8660](https://github.com/tinyhumansai/openhuman/issues/8660)

**诉求：** 定期从 Sentry 拉取生产环境高优先级错误，按严重程度、频率和优先级筛选，并自动在对应仓库创建 GitHub Issue。  
**路线图判断：** 当前没有对应 PR，尚未进入近期实现阶段；但与现有 GitHub 工作流和事件编排能力匹配，属于中期自动化集成需求。

### 6.2 基于内部事件自动发布社交媒体

- Feature Issue：[#8661](https://github.com/tinyhumansai/openhuman/issues/8661)

**诉求：** 利用现有 orchestration framework，在版本发布、重要 PR 合并或公告事件触发时，自动向 X/Twitter、LinkedIn 发布、回复或转发内容。  
**路线图判断：** 暂无直接 PR，但项目已有事件编排和渠道接入基础，属于较现实的下一阶段自动化方向。

### 6.3 沙箱原生资源限制

- Feature/稳定性 Issue：[#8659](https://github.com/tinyhumansai/openhuman/issues/8659)

**诉求：** 引入 tinybox native-jail 的资源预算，在后端能够执行时设置 CPU、内存等限制。  
**路线图判断：** 已有 tinybox 相关上下文，但没有 OpenHuman PR；若 tinybox 接口稳定，预计会较快进入安全与沙箱迭代。

### 6.4 Inbound linked E2E 正式进入 CI

- Issue：[#8155](https://github.com/tinyhumansai/openhuman/issues/8155)
- PR：[#8668](https://github.com/tinyhumansai/openhuman/pull/8668)

**路线图判断：** 已有明确实现 PR，属于近期高概率合入事项。

### 6.5 事件“exactly-once”分诊语义

- Issue：[#8154](https://github.com/tinyhumansai/openhuman/issues/8154)
- PR：[#8667](https://github.com/tinyhumansai/openhuman/pull/8667)

**路线图判断：** 已有修复 PR，属于近期高概率合入事项；其统一 claim 机制也可能成为后续事件去重与可观测性的基础。

### 6.6 Headless 无人值守密钥解锁

- Issue：[#8665](https://github.com/tinyhumansai/openhuman/issues/8665)
- PR：[#8666](https://github.com/tinyhumansai/openhuman/pull/8666)

**路线图判断：** 已实现并关闭，但因涉及敏感配置解锁，需要在正式发布前明确 opt-in 配置、权限边界、日志脱敏和回滚方案。

---

## 7. 用户反馈摘要

### 真实痛点

- **自动化部署与交互式安全机制冲突：**  
  [#8665](https://github.com/tinyhumansai/openhuman/issues/8665) 反映出 headless 服务无法完成加密配置解锁。对于服务器、容器和 CI 部署而言，“等待终端审批”不是可接受的运行模式。用户需要显式授权的无人值守方案，而不是绕过安全机制。

- **Cron 的“已调度”不等于“可靠执行”：**  
  [#8673](https://github.com/tinyhumansai/openhuman/issues/8673) 显示主机重启会让 occurrence lease 残留，任务长时间不运行。对自动化用户而言，最严重的故障往往不是明确报错，而是**静默停止执行**。

- **沙箱配置需要可预测的工作区边界：**  
  [#8674](https://github.com/tinyhumansai/openhuman/issues/8674) 表明路径嵌套会使所有命令在执行前被拒绝。安全策略本身合理，但缺少明确的 per-job sandbox root，导致合法任务也无法使用。

- **凭据管理仍存在多入口不一致：**  
  [#8677](https://github.com/tinyhumansai/openhuman/pull/8677)、[#8670](https://github.com/tinyhumansai/openhuman/pull/8670) 和 [#8665](https://github.com/tinyhumansai/openhuman/issues/8665) 共同说明，配置、profile 与渠道凭据的后端选择、加密和交互解锁机制尚未完全统一。用户期望“开启加密后所有秘密都不会明文落盘”。

### 使用场景

- 无人值守服务器上的 OpenHuman 服务部署。
- 每 5 分钟或每 15 分钟执行 shell 的周期任务。
- Sentry 生产错误自动进入 GitHub backlog。
- 发布、PR 和公告驱动的 X/Twitter、LinkedIn 自动发布。
- 多用户、多租户及多部署环境中的沙箱隔离。
- Inbound 事件在直接路径与队列路径之间的可靠去重。

### 满意点

从当前 Issue/PR 的收敛情况看，用户提出的多项关键问题已快速获得对应实现：

- [#8674](https://github.com/tinyhumansai/openhuman/issues/8674) 已有定向修复 [#8675](https://github.com/tinyhumansai/openhuman/pull/8675)。
- [#8665](https://github.com/tinyhumansai/openhuman/issues/8665) 已有定向修复 [#8666](https://github.com/tinyhumansai/openhuman/pull/8666)。
- [#8154](https://github.com/tinyhumansai/openhuman/issues/8154) 和 [#8155](https://github.com/tinyhumansai/openhuman/issues/8155) 均有对应 PR。

### 不满意点

- **问题关闭与代码实际落地之间仍需确认。** 当前 PR 列表中的“CLOSED”不一定等同于已合并到主分支或已发布。
- **核心调度故障缺少明确修复闭环。** [#8673](https://github.com/tinyhumansai/openhuman/issues/8673) 仍开放，且数据中未显示对应修复 PR。
- **native jail 资源隔离缺口仍在。** [#8659](https://github.com/tinyhumansai/openhuman/issues/8659) 尚无明确实现 PR。
- **CI 仍处于修复和补齐阶段。** [#8657](https://github.com/tinyhumansai/openhuman/pull/8657)、[#8663](https://github.com/tinyhumansai/openhuman/pull/8663) 和 [#8668](https://github.com/tinyhumansai/openhuman/pull/8668) 均待合并，主分支门禁是否真正转绿仍需观察。

---

## 8. 待处理积压

### 8.1 Cron occurrence lease 缺少直接修复

- [#8673](https://github.com/tinyhumansai/openhuman/issues/8673)
- **优先级：建议 P1/P2**
- **风险：** 主机崩溃或重启后，定时任务最长可能两小时不运行，且表现为静默失败。
- **建议：** 明确 lease 过期策略、启动恢复流程和任务错过触发时的补偿语义，并补充 crash/restart 集成测试。

### 8.2 Native jail 资源限制仍为空

- [#8659](https://github.com/tinyhumansai/openhuman/issues/8659)
- **优先级：建议 P2**
- **风险：** 不可信任务缺少 CPU、内存与进程级预算。
- **建议：** 与 tinybox 对齐能力边界，在后端支持时强制设置资源限制；不支持时明确降级并在日志中提示。

### 8.3 Inbound linked E2E CI 覆盖待落地

- [#8155](https://github.com/tinyhumansai/openhuman/issues/8155)
- PR：[#8668](https://github.com/tinyhumansai/openhuman/pull/8668)
- **优先级：建议近期完成**
- **风险：** 本地通过的 ingest、duplicate rejection 和真实模块 Deliver 流程仍缺少持续回归保护。

### 8.4 事件重复分诊修复待合并

- [#8154](https://github.com/tinyhumansai/openhuman/issues/8154)
- PR：[#8667](https://github.com/tinyhumansai/openhuman/pull/8667)
- **优先级：建议近期完成**
- **风险：** 队列超时等模糊结果下，事件可能执行两次。

### 8.5 Telegram allowlist 路径修复已跨较长周期

- [#8168](https://github.com/tinyhumansai/openhuman/pull/8168)
- **优先级：建议尽快审查**
- **风险：** 配对状态重启后丢失，直接影响渠道接入和用户使用连续性。

### 8.6 Workflow 保存重复副本修复待合并

- [#8564](https://github.com/tinyhumansai/openhuman/pull/8564)
- **优先级：建议尽快审查**
- **风险：** 重复 workflow 会污染用户工作流列表，并造成后续编辑和执行歧义。

### 8.7 工作区 artifact 路径修复待合并

- [#8647](https://github.com/tinyhumansai/openhuman/pull/8647)
- **优先级：建议尽快审查**
- **风险：** 工具输出 offload 后可能无法再次读取，影响 Agent 执行稳定性。

### 8.8 渠道凭据明文写入修复待合并

- [#8677](https://github.com/tinyhumansai/openhuman/pull/8677)
- **优先级：建议高优先级审查**
- **风险：** 在启用 `secrets.encrypt = true` 的情况下，邮件、腾讯元宝及 LINQ 凭据仍可能明文落盘。

---

## 项目健康度结论

**综合健康度：良好，偏高风险集中在发布闭环与调度可靠性。**

- **开发活跃度高：** 24 小时内更新 29 个 PR，工作集中在真实缺陷、安全问题和 CI 基础设施。
- **修复响应较快：** 两个高关注 Issue 已有对应 PR，多个长期 Issue 已进入 CI 或修复阶段。
- **安全方向明确：** 密钥加密、凭据隔离、自更新校验和沙箱权限均有实质改进。
- **主要风险一：** 13 个 PR 仍待合并，代码规模与评审压力较高。
- **主要风险二：** 无新版本发布，安全和稳定性修复尚未通过正式版本交付。
- **主要风险三：** Cron lease 回收和 native jail 资源限制仍缺少明确实现闭环。
- **建议维护者优先顺序：**  
  1. 合并并验证 [#8667](https://github.com/tinyhumansai/openhuman/pull/8667)、[#8668](https://github.com/tinyhumansai/openhuman/pull/8668)、[#8669](https://github.com/tinyhumansai/openhuman/pull/8669)；  
  2. 优先审查 [#8676](https://github.com/tinyhumansai/openhuman/pull/8676) 与 [#8677](https://github.com/tinyhumansai/openhuman/pull/8677) 的安全价值；  
  3. 为 [#8673](https://github.com/tinyhumansai/openhuman/issues/8673) 建立专项修复 PR；  
  4. 确认所有“CLOSED”PR是否已合并，并据此制定下一次版本发布清单。

</details>

---
*本日报由 [Big Model Radar](https://github.com/96loveslife/big_model_radar) 自动生成。*
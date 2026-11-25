# OpenClaw 生态日报 2026-11-25

> Issues: 500 | PRs: 500 | 覆盖项目: 8 个 | 生成时间: 2026-11-25 07:52 UTC

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

# OpenClaw 项目动态日报｜2026-11-25

> 数据范围：过去 24 小时。共更新 **500 条 Issues**（活跃/新开 423、关闭 77）与 **500 条 PRs**（待合并 248、合并/关闭 252），并发布 **3 个版本**。  
> 注：以下关于“修复状态”的判断仅依据所给 Issue/PR 标题、标签与摘要；未显示明确关联 PR 时，不视为已有可用修复。

---

## 1. 今日速览

OpenClaw 今日保持极高开发吞吐：24 小时内处理约 **1,000 条 Issue/PR 更新**，PR 的合并或关闭比例约为 **50.4%**，显示主干推进和评审消化能力较强。过去一天集中发布 **v2026.11.8、v2026.11.9、v2026.11.10** 三个版本，其中 v2026.11.10 累计包含 **8,309 次提交、7,671 个 PR、349 位贡献者**，项目规模和协作密度继续上升。

当前健康度可判断为 **“高活跃、高吞吐，但稳定性风险偏高”**。热点议题主要集中于 SQLite/WAL、升级与回滚、Gateway 卡死、内存占用、Windows 生命周期管理，以及会话状态和消息可靠性；其中多个 P0/P1 问题仍缺少明确修复 PR。

此外，PR 队列中出现了会话协作、Control UI、Talk 设置、Codex 升级和 CI 发布质量体系等新功能，说明项目正同时推进产品扩展与发布工程化。

---

## 2. 版本发布

### v2026.11.10

- 版本：[v2026.11.10](https://github.com/openclaw/openclaw/releases/tag/v2026.11.10)
- 规模：**8,309 commits、7,671 pull requests、349 contributors**
- 官方说明：Release Notes 与 Changelog 内容一致，提供两种阅读格式。

这是近期体量最大的版本，说明 2026.11.8 至 2026.11.10 期间可能包含大量累积变更。现有数据未提供完整变更条目，不能精确列出逐项功能，因此以下迁移建议主要结合同期 Issues 和 PR 判断。

#### 重点迁移与风险提示

1. **升级前应先验证状态数据库迁移**
   - [#197083：11.3 更新因 Doctor WAL 发布验证失败而部分完成](https://github.com/openclaw/openclaw/issues/197083)
   - [#164294：Gateway 状态库 WAL 自动检查点持续被阻塞](https://github.com/openclaw/openclaw/issues/164294)
   - [#160386：2026.9.6 在大型会话库上出现严重 SQLite I/O 压力](https://github.com/openclaw/openclaw/issues/160386)

   建议在大规模、多 Agent 或长会话部署中，先备份状态库和 Agent 数据，再执行升级及 `doctor --fix`。

2. **重点验证更新失败后的回滚能力**
   - [#205169：更新回滚后 Gateway 仍无法启动](https://github.com/openclaw/openclaw/pull/205169)
   - [#183479：更新修复被保留包恢复逻辑阻塞](https://github.com/openclaw/openclaw/issues/183479)
   - [#161158：重启实际成功却报告失败并以状态码 0 退出](https://github.com/openclaw/openclaw/issues/161158)

3. **检查已弃用配置**
   - [#200224：2026.11.5 beta 与稳定版的 heartbeat 配置行为不一致](https://github.com/openclaw/openclaw/issues/200224)
   - [#205197：2026.11.10 baseline 拒绝旧 `skills.workshop` 配置路径](https://github.com/openclaw/openclaw/pull/205197)

4. **Windows 部署应单独做升级回归**
   - [#170956：Windows 启动慢、插件关闭不干净及 `schtasks` 权限错误](https://github.com/openclaw/openclaw/issues/170956)
   - [#140010：Windows 休眠恢复后 WebSocket 重连延迟](https://github.com/openclaw/openclaw/issues/140010)

#### 破坏性变更结论

现有摘要没有给出明确标记为 breaking change 的条目，因此**不能确认存在正式破坏性变更**。不过，状态数据库迁移、旧配置路径、heartbeat 行为及更新回滚都存在实际兼容性风险，升级时不应直接套用旧版本操作习惯。

### v2026.11.9

- 版本：[v2026.11.9](https://github.com/openclaw/openclaw/releases/tag/v2026.11.9)
- 规模：**13 commits、15 pull requests、14 contributors**

属于聚焦修复版本。同期功能与基础设施 PR 涉及 Gateway、Agents、CLI、Web UI、记忆扩展及多个渠道。当前数据未提供完整 release notes，无法准确逐项映射。

### v2026.11.8

- 版本：[v2026.11.8](https://github.com/openclaw/openclaw/releases/tag/v2026.11.8)
- 规模：**314 commits、210 pull requests、86 contributors**

是三个新版本中单次提交量最大的版本，更新范围可能较广。结合公开 Issue，升级时应特别覆盖：

- SQLite 状态库与 WAL；
- Gateway 启动、插件加载及休眠恢复；
- 多 Agent 路由和会话持久化；
- Windows 服务管理；
- 更新失败后的恢复和回滚。

---

## 3. 项目进展

过去 24 小时共有 **248 个 PR 待合并、252 个已合并或关闭**。虽然数据未逐项给出所有已合并 PR 的标题和编号，无法建立完整的当日合并清单，但以下开放 PR 清晰反映了项目当前的推进方向。

### 3.1 更新机制进入“prepared release”重构阶段

- [#204775：prepared-release 更新路径设计总览](https://github.com/openclaw/openclaw/issues/204775)
- [#205169：允许更新回滚后 Gateway 重新启动](https://github.com/openclaw/openclaw/pull/205169)
- [#205173：将自动化权限统一按 turn grant 判定](https://github.com/openclaw/openclaw/pull/205173)
- [#205192：验证插件更新步骤属于选中的 receipt](https://github.com/openclaw/openclaw/pull/205192)
- [#205178：识别无法匹配的新 waiver](https://github.com/openclaw/openclaw/pull/205178)
- [#205187：重试变化中的发布验证 run inventory](https://github.com/openclaw/openclaw/pull/205187)
- [#205185：区分修复检查与正式发布证明](https://github.com/openclaw/openclaw/pull/205185)

**推进效果：**项目正在把更新流程从一次性脚本式操作升级为可追踪、可验证、可回滚的 prepared-release 系统。  
**评估：**这是重要的基础设施进展，但相关 PR 多处于等待作者、等待维护者或需要证明状态，尚未完全形成闭环。

### 3.2 参与、共享与协作能力进入 UI 实现阶段

- [#204914：允许参与者通过会话共享 GitHub 账号发布](https://github.com/openclaw/openclaw/pull/204914)
- [#204920：Control UI 增加邀请、共享与参与者控制](https://github.com/openclaw/openclaw/pull/204920)

这是分拆自 #202552 的协作功能系列，涵盖邀请、共享、发布身份和 Control UI 管理。

**推进效果：**OpenClaw 正从单用户会话助手向“多人参与同一 Agent 会话”的协作平台发展。  
**风险：**该功能涉及共享身份和发布权限，合并前需要重点验证权限隔离、撤权与审计边界。

### 3.3 Control UI 与产品体验继续补强

- [#204987：设置项支持链接直达并高亮对应行](https://github.com/openclaw/openclaw/pull/204987)
- [#205191：保留 Agent fallback 删除操作](https://github.com/openclaw/openclaw/pull/205191)
- [#205068：重新设计 Talk 设置页](https://github.com/openclaw/openclaw/pull/205068)
- [#204404：在聊天中区分浏览器和设备操作](https://github.com/openclaw/openclaw/pull/204404)

**推进效果：**Control UI 正从“功能可用”阶段转向可发现性、可配置性和可解释性优化。

### 3.4 会话生命周期与语音可靠性改善

- [#205026：归档后仍允许非活跃会话进入冷存储](https://github.com/openclaw/openclaw/pull/205026)
- [#205199：关闭准入失败时保持语音 close latch 开放](https://github.com/openclaw/openclaw/pull/205199)
- [#205181：下载飞书引用消息中的图片](https://github.com/openclaw/openclaw/pull/205181)

其中语音修复直接针对“关闭失败后状态卡死”的问题；飞书修复提升了引用图片场景的多模态可用性。

### 3.5 发布与 CI 质量体系显著加强

- [#205189：在 CI summary 中展示全部 Kova 违规类别](https://github.com/openclaw/openclaw/pull/205189)
- [#205201：发布证据封存前纳入缓存诊断前置任务](https://github.com/openclaw/openclaw/pull/205201)
- [#205161：验证禁用缓存的 workload 控制项](https://github.com/openclaw/openclaw/pull/205161)
- [#205065：升级 Codex 到 0.172.0，避免 worker 启动卡顿](https://github.com/openclaw/openclaw/pull/205065)
- [#205168：将 main 对齐到 2026.11.10 发布状态](https://github.com/openclaw/openclaw/pull/205168)

**推进效果：**团队正在提高发布证据的可追溯性、缓存基准的可信度以及主分支与正式版本的一致性。  
**整体判断：**当天开发重心并非单一功能，而是“发布可靠性 + 产品协作 + UI 体验”三线并行，项目整体继续向前推进，但新发布体系仍处于密集建设期。

---

## 4. 社区热点

### 4.1 大型外部插件捕获导致 Gateway 阻塞数分钟

- [#160959：2026.9.6 回归，捕获大型外部插件时 Gateway 阻塞数分钟](https://github.com/openclaw/openclaw/issues/160959)
- **热度：87 条评论，为今日样本最高**
- **状态：P0、crash-loop 影响，标签显示 no-new-fix-pr / needs-maintainer-review**

**核心诉求：**插件生成与依赖树捕获不应阻塞 Gateway 主事件循环。大型外部插件会在启动及 prepared model runtime 重新发布时触发长时间停顿。

**社区关注原因：**这是典型“插件生态越强，核心网关越脆弱”的规模化问题，直接影响启动、更新和可用性。

### 4.2 状态数据库 WAL 检查点永远无法完成

- [#164294：Gateway 状态 DB WAL auto-checkpoint 被进程内 reader 阻塞](https://github.com/openclaw/openclaw/issues/164294)
- **热度：44 条评论**
- **状态：P2，仍需维护者审查，未见明确 fix PR**

**核心诉求：**自动 checkpoint 应能在长生命周期 Gateway 中稳定完成，不能因进程内 reader 长期阻塞 WAL 回收。

**社区关注原因：**WAL 长期膨胀会进一步放大 SQLite I/O、锁竞争、内存压力和更新失败风险。

### 4.3 Doctor 修复流程可能长时间静默挂起

- [#178359：`doctor --fix --non-interactive` 静默 15 分钟以上](https://github.com/openclaw/openclaw/issues/178359)
- **热度：32 条评论**
- **状态：P1；关联修复 PR [#205185](https://github.com/openclaw/openclaw/pull/205185) 主要改善流程说明与检查证明，并非明确修复该挂起问题**

**核心诉求：**修复流程需要进度输出、超时和可诊断的阶段信息，不能让运维人员面对一个无输出的长等待。

### 4.4 Windows 服务管理形成连锁可靠性问题

- [#170956：Windows 启动慢、插件关闭不干净、`schtasks` 权限错误](https://github.com/openclaw/openclaw/issues/170956)
- **热度：34 条评论**
- **状态：P0、release blocker，未见明确 fix PR**

**核心诉求：**Windows 的安装、升级、重启和权限处理应形成一致且可重复的服务生命周期。

### 4.5 curated memory 可能永久失去 bootstrap 注入

- [#153426：`MEMORY.md` / `USER.md` 被 provenance ratchet 永久排除](https://github.com/openclaw/openclaw/issues/153426)
- **热度：19 条评论，2 个点赞**
- **状态：P0，同时标记 session-state 与 security 影响，需安全审查**

**核心诉求：**安全过滤不应让用户的核心长期记忆文件静默永久失效；至少需要诊断、恢复和更清晰的可信来源模型。

### 4.6 PR 侧热点：协作权限与 prepared-release

- [#204914：会话共享 GitHub 账号发布](https://github.com/openclaw/openclaw/pull/204914)
- [#204920：Control UI 邀请、共享与参与者控制](https://github.com/openclaw/openclaw/pull/204920)
- [#205173：统一自动化权限判定](https://github.com/openclaw/openclaw/pull/205173)
- [#205169：更新回滚后恢复 Gateway 启动](https://github.com/openclaw/openclaw/pull/205169)

**背后的诉求：**社区正在推动两类能力：

1. **人机协作：**允许多人受邀参与同一会话、共享发布身份；
2. **治理一致：**无论本地 CLI、Control UI 还是自动化任务，都应使用统一、可解释的权限模型。

---

## 5. Bug 与稳定性

### P0 / Release blocker

| 问题 | 状态 | Fix PR |
|---|---|---|
| [#160959：大型外部插件捕获阻塞 Gateway 数分钟](https://github.com/openclaw/openclaw/issues/160959) | P0、启动/发布路径卡死；需维护者审查 | 未见明确 fix PR |
| [#197083：升级后 Doctor WAL 验证失败，更新部分完成](https://github.com/openclaw/openclaw/issues/197083) | P0、release blocker；涉及状态迁移与插件状态 | 未见明确 fix PR；更新体系相关工作见 [#204775](https://github.com/openclaw/openclaw/issues/204775) |
| [#170956：Windows 服务启动、关闭和权限失败](https://github.com/openclaw/openclaw/issues/170956) | P0、release blocker | 未见明确 fix PR |
| [#153426：curated memory 永久失去 bootstrap 注入](https://github.com/openclaw/openclaw/issues/153426) | P0，涉及安全与会话状态 | 未见明确 fix PR |
| [#160386：2026.9.6 大型会话库导致 SQLite I/O 压力和 RPC 超时](https://github.com/openclaw/openclaw/issues/160386) | P0、回归 | 未见明确 fix PR |
| [#200224：beta 与 stable 的 heartbeat 配置行为冲突](https://github.com/openclaw/openclaw/issues/200224) | P2，但标签含 UX release blocker | 未见明确 fix PR |

### P1 / 高严重度

| 问题 | 状态 | Fix PR |
|---|---|---|
| [#196199：Codex helper 无法恢复父 Agent，任务暂停并锁住用户](https://github.com/openclaw/openclaw/issues/196199) | P1、消息丢失 | 未见明确 fix PR；Codex 版本升级工作见 [#205065](https://github.com/openclaw/openclaw/pull/205065) |
| [#140010：Windows 休眠恢复后 WebSocket 重连延迟 30–60 秒以上](https://github.com/openclaw/openclaw/issues/140010) | P1、crash-loop 影响 | 未见明确 fix PR |
| [#181432：2026.10.5 基线 RSS 约 1.9GB，SQLite 事务超时](https://github.com/openclaw/openclaw/issues/181432) | P1、需补充环境信息 | 未见明确 fix PR |
| [#190307：Gateway 重启后大量 Agent 永久 degraded](https://github.com/openclaw/openclaw/issues/190307) | P1、admission timeout | 未见明确 fix PR |
| [#134993：大 Skill/Agent 规模下文件系统发现占满单核](https://github.com/openclaw/openclaw/issues/134993) | P1、忙循环 | 未见明确 fix PR |
| [#138272：Android Talk 在任务型回合报 “no live response owner”](https://github.com/openclaw/openclaw/issues/138272) | P1、跨版本持续 | 未见明确 fix PR；语音关闭相关修复见 [#205199](https://github.com/openclaw/openclaw/pull/205199) |
| [#160522：prepared-model-catalog worker 内存突破配置上限](https://github.com/openclaw/openclaw/issues/160522) | P1、已有 linked PR | 标签显示 `linked-pr-open`，但摘要未给出编号 |
| [#205173：自动化权限判定依入口而异](https://github.com/openclaw/openclaw/pull/205173) | P1、安全敏感且有兼容性风险 | PR 开放，等待作者 |
| [#205169：回滚后 Gateway 无法启动](https://github.com/openclaw/openclaw/pull/205169) | P1、已有针对性 PR | **有 fix PR**：[#205169](https://github.com/openclaw/openclaw/pull/205169) |
| [#184164：定时账户策略无法解析当前 runtime registry](https://github.com/openclaw/openclaw/pull/184164) | P1、安全敏感，等待维护者 | **有 fix PR**：[#184164](https://github.com/openclaw/openclaw/pull/184164) |

### P2 / 其他重要稳定性问题

- [#150635：短期 recall 容量满后，dreaming deep 无法晋升内容](https://github.com/openclaw/openclaw/issues/150635)  
  涉及记忆数据保留与潜在数据丢失，未见明确 fix PR。

- [#143017：持久会话反复重写前缀，已测得 21.3M cache-write tokens](https://github.com/openclaw/openclaw/issues/143017)  
  直接影响成本和性能，未见明确 fix PR。

- [#177094：Control UI 系统通知镜像挤压最后一条回答](https://github.com/openclaw/openclaw/issues/177094)  
  标签显示 `fix-shape-clear`、`queueable-fix`，但未展示对应 PR。

- [#167609：Code Mode guest TypeError 被误报为 host internal_error](https://github.com/openclaw/openclaw/issues/167609)  
  可观测性不足，未见明确 fix PR。

- [#160494：持久会话 cron 在 session rotation 时被准入拒绝并反复重试](https://github.com/openclaw/openclaw/issues/160494)  
  调度可靠性受影响，未见明确 fix PR。

- [#161158：Gateway 重启成功却报告失败且退出码为 0](https://github.com/openclaw/openclaw/issues/161158)  
  CLI 语义错误，未见明确 fix PR。

- [#136405：远程 embedding 卡顿时 `memory_search` 挂起 15 秒](https://github.com/openclaw/openclaw/issues/136405)  
  缺少单次调用超时/重试配置，未见明确 fix PR。

- [#170496：每次只读状态库快照都复制完整 SQLite 文件](https://github.com/openclaw/openclaw/issues/170496)  
  cron tick 可持续触发大文件复制，未见明确 fix PR。

- [#197374：长会话 compaction 被 120 秒 idle timeout 静默降级](https://github.com/openclaw/openclaw/issues/197374)  
  未见明确 fix PR。

- [#165615：Discord Components V2 消息无法编辑](https://github.com/openclaw/openclaw/issues/165615)  
  标签显示 `linked-pr-open`，但摘要未给出编号。

- [#172969：CLI backend 缺少 `modelProvider` 时绑定被静默丢弃](https://github.com/openclaw/openclaw/issues/172969)  
  最终表现为误导性的 Invalid URL，未见明确 fix PR。

- [#166641：`web_fetch` fallback 同步捕获无关插件，造成 liveness stall](https://github.com/openclaw/openclaw/issues/166641)  
  与 #160959 的插件主线程阻塞问题高度相关；标签显示 `linked-pr-open`。

---

## 6. 功能请求与路线图信号

### 6.1 会话多人协作：最明确的下一阶段产品方向

- [#204914：参与者使用会话共享 GitHub 账号发布](https://github.com/openclaw/openclaw/pull/204914)
- [#204920：Control UI 邀请、共享和参与者控制](https://github.com/openclaw/openclaw/pull/204920)

已有连续 PR 拆分和实现，且前四部分据摘要已合并，**进入下一版本的可能性较高**。需关注共享身份、发布权限和审计机制的最终落地。

### 6.2 更新流程产品化

- [#204775：prepared-release 更新路径设计](https://github.com/openclaw/openclaw/issues/204775)
- [#205169：回滚后恢复 Gateway 启动](https://github.com/openclaw/openclaw/pull/205169)
- [#205173：统一 turn grant 权限模型](https://github.com/openclaw/openclaw/pull/205173)

更新已不仅是 CLI 脚本能力，而是在向 Control UI 可视化、状态机和权限模型方向发展。**下一版本可能继续吸收其中的回滚、权限与状态展示修复**。

### 6.3 MCP Events 驱动 Agent

- [#166586：消费 MCP Servers 发布的 Events，并为每个事件启动 Agent](https://github.com/openclaw/openclaw/issues/166586)

这是扩展性的重要路线图信号：OpenClaw 可能从“Agent 调用 MCP”进一步演进为“MCP 事件主动触发 Agent”。目前仍在 Issue 阶段，**下一版本落地概率中等偏低**。

### 6.4 跨提供商 Cron fallback 授权

- [#192009：显式授权 Cron 使用不同 provider/account 的 fallback](https://github.com/openclaw/openclaw/issues/192009)

该 Issue 已关闭，但现有摘要没有显示对应合并 PR。若关闭代表功能已落地，则可增强定时任务在单一 provider 限流或故障时的连续性；否则仍需确认关闭原因。

### 6.5 Session 模型固定时继承 fallback 链

- [#151980：Session model pin 应继承 Agent fallback chain](https://github.com/openclaw/openclaw/issues/151980)

该 Issue 已关闭，同样缺少关联合并 PR。由于其直接改善限流场景下的可用性，应在发布说明中核实是否已包含。

### 6.6 前台运行的可控 checkpoint 与 yield

- [#138990：前台 WebChat 运行支持强制 checkpoint 和有界 yield](https://github.com/openclaw/openclaw/issues/138990)

与长会话 compaction 静默降级 [#197374](https://github.com/openclaw/openclaw/issues/197374) 共同构成“长任务可靠性”路线。尚未看到直接实现 PR，**可能进入后续版本，而非当前稳定版**。

### 6.7 Teams SharePoint 动态解析

- [#136271：自动解析 Teams 团队 SharePoint 站点以支持频道文件上传](https://github.com/openclaw/openclaw/issues/136271)

需求场景明确，但需要外部 API 行为和权限设计，暂无直接 PR，短期落地概率一般。

### 6.8 渠道与交互增强

- [#137110：Telegram `sendDice`](https://github.com/openclaw/openclaw/pull/137110)（Issue 链接）
- [#143387：Android 通知会话感知、来源标签与跨设备抑制](https://github.com/openclaw/openclaw/issues/143387)
- [#204987：设置项深链与行高亮](https://github.com/openclaw/openclaw/pull/204987)
- [#205068：Talk 设置页重设计](https://github.com/openclaw/openclaw/pull/205068)
- [#178041：支持并校验 SQL 查询附件](https://github.com/openclaw/openclaw/pull/178041)

其中设置深链、Talk 设置重设计和 SQL 附件已有 PR，进入近期版本的概率较高。Android 通知提案作者已表示暂不推进实现。

---

## 7. 用户反馈摘要

### 真实痛点与使用场景

1. **多 Agent、重会话部署最容易暴露核心问题**
   - 用户在 35 个 Agent、数百 MB Agent 数据库环境下遇到重启后长期 degraded：[#190307](https://github.com/openclaw/openclaw/issues/190307)。
   - 大型 session store 会触发 SQLite I/O 压力和 WebUI RPC 超时：[#160386](https://github.com/openclaw/openclaw/issues/160386)。
   - 长期记忆、召回、dreaming 和 compaction 之间存在容量与时序冲突：[#150635](https://github.com/openclaw/openclaw/issues/150635)、[#197374](https://github.com/openclaw/openclaw/issues/197374)。

2. **升级失败后的恢复体验最差**
   - 用户面对的不是单一报错，而是“新版本已部分迁移、旧版本拒绝启动、Doctor 无法完成、回滚也不可用”的组合故障：[#197083](https://github.com/openclaw/openclaw/issues/197083)。
   - CLI 还会出现实际重启成功却报告失败的误导：[#161158](https://github.com/openclaw/openclaw/issues/161158)。

3. **Windows 是跨平台体验的明显短板**
   - 服务权限、启动速度、插件关闭、休眠恢复和 WebSocket 重连彼此关联：[#170956](https://github.com/openclaw/openclaw/issues/170956)、[#140010](https://github.com/openclaw/openclaw/issues/140010)。

4. **多渠道适配问题突出**
   - Android Talk 任务型回合失败：[#138272](https://github.com/openclaw/openclaw/issues/138272)。
   - Discord Components V2 无法编辑：[#165615](https://github.com/openclaw/openclaw/issues/165615)。
   - 飞书引用图片无法下载，导致模型看不到用户所指图片；对应修复 PR 为 [#205181](https://github.com/openclaw/openclaw/pull/205181)。
   - Telegram Mini App 与核心 `/dashboard` 命令冲突：[#142336](https://github.com/openclaw/openclaw/issues/142336)。

5. **用户要求更强的可解释性与可恢复性**
   - “Session changed while starting work”在 16 个调用点使用完全相同文本，无法定位原因：[#127195](https://github.com/openclaw/openclaw/issues/127195)。
   - memory provenance 过滤后没有诊断、CLI 或恢复路径：[#153426](https://github.com/openclaw/openclaw/issues/153426)。
   - Code Mode 将 guest 错误伪装为 host 内部错误：[#167609](https://github.com/openclaw/openclaw/issues/167609)。

### 满意点与积极信号

- 用户对跨提供商 fallback 的需求明确，说明高可用模型调度已成为实际生产需求；相关 Issue 已关闭：[#192009](https://github.com/openclaw/openclaw/issues/192009)。
- 会话共享、邀请和参与者控制正在获得连续工程投入，反映“多人协作单个 Agent 会话”具备较强产品吸引力：[#204914](https://github.com/openclaw/openclaw/pull/204914)、[#204920](https://github.com/openclaw/openclaw/pull/204920)。
- UI 对浏览器、设备和会话行为的可解释性正在改善：[#204404](https://github.com/openclaw/openclaw/pull/204404)、[#204987](https://github.com/openclaw/openclaw/pull/204987)。
- 飞书引用图片等具体场景获得了快速、针对性的修复提案，说明社区反馈能有效进入 PR 流程。

### 仍不满意之处

- 维护者审查和实际修复之间存在明显时滞，大量 Issue 带有 `no-new-fix-pr`、`needs-maintainer-review`。
- 同一根因分散在多个问题单中，如插件同步捕获阻塞可见于 [#160959](https://github.com/openclaw/openclaw/issues/160959) 与 [#166641](https://github.com/openclaw/openclaw/issues/166641)。
- 发布版本节奏很快，但状态迁移、更新回滚、Doctor 修复之间尚未形成完全可靠的端到端契约。

---

## 8. 待处理积压

### 需要优先处理的长期重要 Issue

1. [#153426：curated memory 被永久排除](https://github.com/openclaw/openclaw/issues/153426)  
   P0、涉及安全与持久记忆，评论 19；虽已取得复现或讨论，但缺少明确修复 PR。

2. [#160959：大型插件捕获阻塞 Gateway](https://github.com/openclaw/openclaw/issues/160959)  
   P0、评论 87，为最热问题；标签已明确提示无新 fix PR，维护者需要给出归属和合并目标。

3. [#160386：大型会话库 SQLite I/O 回归](https://github.com/openclaw/openclaw/issues/160386)  
   P0、影响生产 RPC 和状态准入；建议与 WAL checkpoint #164294 统一治理。

4. [#164294：WAL checkpoint 永不完成](https://github.com/openclaw/openclaw/issues/164294)  
   评论 44、长期存在；可能与只读副本复制 #170496 共同形成数据库 I/O 放大。

5. [#170956：Windows 生命周期管理连锁问题](https://github.com/openclaw/openclaw/issues/170956)  
   P0、release blocker；需要拆分服务权限、插件 shutdown、启动性能三个子任务。

6. [#143017：Prompt cache 前缀反复重写](https://github.com/openclaw/openclaw/issues/143017)  
   已测得 21.3M cache-write tokens，属于长期成本与性能问题，不宜继续停留在讨论阶段。

7. [#150635：recall 容量导致 dreaming deep 永远无法晋升](https://github.com/openclaw/openclaw/issues/150635)  
   直接影响长期记忆价值和潜在数据保留，应明确容量策略及淘汰优先级。

8. [#190307：重启后大量 Agent 永久 degraded](https://github.com/openclaw/openclaw/issues/190307)  
   评论 13、仍需 live repro；建议建立多 Agent 启动性能基准和 admission timeout 诊断。

9. [#127195：统一错误缺少原因码](https://github.com/openclaw/openclaw/issues/127195)  
   16 个调用点无法区分根因；这是低成本、高收益的可观测性改进。

10. [#134993：文件系统发现忙循环占满单核](https://github.com/openclaw/openclaw/issues/134993)  
    虽标为 P1，但属于明显性能回归，建议纳入下一轮性能专项。

11. [#55792：Gateway 重启期间遗漏入站消息](https://github.com/openclaw/openclaw/issues/55792)  
    长期需求，直接涉及消息丢失；对实时机器人、客服和自动化场景价值较高。

12. [#140010：Windows 休眠恢复重连问题](https://github.com/openclaw/openclaw/issues/140010)  
    与 #170956 可合并治理，减少 Windows 专项修复的重复工作。

### 需要维护者审查或等待作者的 PR

- [#205173：统一 turn grant 权限模型](https://github.com/openclaw/openclaw/pull/205173)  
  P1、安全敏感、兼容性风险，等待作者。

- [#184164：在 caller registry 解析定时账户策略](https://github.com/openclaw/openclaw/pull/184164)  
  安全敏感，等待维护者审查。

- [#205065：Codex 0.172.0 打包及 worker 启动修复](https://github.com/openclaw/openclaw/pull/205065)  
  依赖变更且兼容性风险较高，等待作者。

- [#204920：Control UI 邀请与参与者控制](https://github.com/openclaw/openclaw/pull/204920)  
  功能规模大，建议在权限模型 PR [#205173](https://github.com/openclaw/openclaw/pull/205173) 明确后推进。

---

## 今日结论

OpenClaw 的开发活跃度和社区动员能力依然突出，尤其是会话协作、Control UI 和发布工程化出现了清晰的新方向。但从生产可靠性看，**SQLite/WAL、插件主线程阻塞、更新回滚、Windows 服务生命周期以及 Agent 会话恢复**仍是项目当前最突出的结构性风险。

建议维护者将下一轮治理重点放在：

1. 合并并验证更新回滚、权限统一和 prepared-release 相关 PR；
2. 为插件捕获、SQLite 快照及 WAL checkpoint 建立统一性能基线；
3. 为 P0/P1 问题明确 owner、目标版本和可验证的 fix PR；
4. 在 v2026.11.x 升级说明中突出数据库迁移、旧配置和 Windows 注意事项。

**综合项目健康度：7/10。** 吞吐与创新很强，发布纪律和 CI 证据体系持续改善；扣分主要来自高严重度存量问题多、修复闭环不足，以及版本发布速度快于状态迁移与恢复机制的成熟度。

---

## 横向生态对比

# 个人 AI 助手 / 自主智能体开源生态横向分析

**统计日期：2026-11-25**  
**数据口径：过去 24 小时 GitHub Issues、PRs 与 Releases 更新。** 涉及 10 个项目，其中 OpenClaw、NanoBot、QwenPaw、Hermes Agent 活跃度较高；PicoClaw、LobsterAI 处于集中收口阶段；IronClaw、OpenHuman 无活动。

---

## 1. 生态全景

个人 AI 助手开源生态正从“单 Agent 对话工具”快速转向**可长期运行、可管理、可交付的工作平台**：会话持久化、上下文压缩、记忆治理、主动任务、多人协作及插件生态成为共同主线。与此同时，项目扩张速度普遍快于可靠性建设，SQLite/WAL、状态数据库所有权、Windows 生命周期、Docker 权限、Provider 能力识别和沙箱策略等问题集中暴露。

社区热度开始从单纯追求模型与工具数量，转向**可恢复性、可观测性和安全边界**：备份落盘、错误语义、权限隔离、Prompt Cache、Human-in-the-Loop 等议题显著升温。OpenClaw 仍是吞吐和社区规模最大的参照项目；Hermes Agent 在长期上下文与主动助理方向最具架构讨论深度；QwenPaw 和 LobsterAI 加速向桌面与办公产物场景扩展；NanoBot、PicoClaw 则更偏向轻量 Agent 框架和渠道执行层。

---

## 2. 各项目活跃度对比

| 项目 | 今日 Issues | 今日 PRs | Release | 活跃特征 | 健康度评估 |
|---|---:|---:|---|---|---|
| **OpenClaw** | 500 更新：活跃/新开 423，关闭 77 | 500 更新：待合并 248，合并/关闭 252 | **3 个**：v2026.11.8、v2026.11.9、v2026.11.10 | 极高吞吐；协作、UI、发布工程三线推进 | **7/10**：创新与吞吐强，稳定性、修复闭环承压 |
| **NanoBot** | 3 | 16：待处理 7，已合并/关闭 9 | 无 | WebUI 集中优化；3 个主要 Bug 均有对应 PR | **良好/约 8/10**：响应快，但新模型适配和大型前端 PR 存在风险 |
| **PicoClaw** | 1 | 5，均关闭/陈旧 | 无 | 存量缺陷整合、多智能体框架探索 | **中等偏上/约 6.5/10**：收敛明显，但发布慢、QQ 渠道问题未闭环 |
| **IronClaw** | 0 | 0 | 无 | 无活动 | **数据不足**：无法评估当前健康度 |
| **LobsterAI** | 0 | 16，全部合并/关闭 | 无 | DSH 迁移、Artifacts、微信授权、任务治理集中收口 | **良好/约 7.5/10**：功能完整度高，缺 Release 与用户反馈 |
| **QwenPaw** | 22：活跃/新开 17，关闭 5 | 41：待合并 31，合并/关闭 10 | 无 | 会话存储重构、模型适配、安全沙箱并行 | **中等偏活跃/约 6/10**：动能强，但 PR 积压及安全缺口明显 |
| **Hermes Agent** | 50：活跃/新开 48，关闭 2 | 50：待合并 43，合并/关闭 7 | **2 个**：v0.23.4、Canary | 长期上下文、主动任务、Gateway/桌面/容器治理 | **中高/约 7.5/10**：生态与讨论强，跨环境一致性压力较大 |
| **OpenHuman** | 0 | 0 | 无 | 无活动 | **数据不足**：无法评估当前健康度 |

> 注：PR 的“已关闭”不一定等于代码已经合并；日报中的“已有修复”仍应结合提交记录、目标分支和 Release 验证。

---

## 3. OpenClaw 在生态中的定位

### 3.1 生态角色

OpenClaw 更接近**开放式个人 AI 操作平台和 Agent 运行时**，而非单一聊天客户端。其核心优势覆盖：

- Gateway、Agent、Web UI、CLI、记忆、插件与多渠道的统一运行时；
- 跨渠道协作、会话共享、Control UI 与插件生态；
- prepared-release、CI 证据封存及发布验证体系；
- 面向长期会话、多 Agent 与第三方插件的扩展能力。

### 3.2 相对优势

1. **规模和社区动员明显领先**  
   24 小时更新约 1,000 条 Issue/PR，v2026.11.10 累计 **8,309 commits、7,671 PR、349 contributors**。相比之下，Hermes Agent 今日处理约 100 条 Issue/PR，QwenPaw 约 63 条，NanoBot 约 19 条。

2. **产品化程度更完整**  
   已覆盖 Gateway、Control UI、会话协作、Talk、记忆、插件、渠道和更新系统，不只是 Agent SDK 或 CLI 外壳。

3. **生态扩展速度快**  
   插件捕获阻塞、插件路径迁移等问题的根源之一，正是插件生态规模快速扩大；这既构成风险，也说明其生态吸引力较强。

4. **发布与治理意识领先**  
   prepared-release、receipt、waiver、run inventory、CI 违规分类等机制，比多数同类项目更系统。

### 3.3 技术路线差异

| 项目 | 核心路线 |
|---|---|
| **OpenClaw** | 开放式运行时 + 多渠道 Gateway + 插件市场 + 协作控制台 |
| **Hermes Agent** | 长期个人工作台 + Gateway/Desktop/容器 + 主动任务 + 本地/云端 Provider |
| **QwenPaw** | 桌面与控制台平台 + 会话/运行时架构重构 + Coding Mode 沙箱 |
| **LobsterAI** | 桌面办公型 Agent + DSH 迁移 + Artifacts/Office + 多 Agent 产物工作流 |
| **NanoBot** | 轻量多渠道 Agent 框架 + WebUI/TUI + SDK 执行一致性 |
| **PicoClaw** | 轻量渠道 Agent + provider 兼容 + 技能生态 + 多智能体编排探索 |

### 3.4 社区规模对比

- **OpenClaw**：规模最大，且已有成熟 Issue 标签体系、P0/P1 分级、发布证据与复杂 PR 队列。
- **Hermes Agent**：架构讨论质量高，代表性 RFC 获 **53 条评论**，并拥有较完整的 CLI、Desktop、Gateway、Docker、插件体系。
- **QwenPaw**：今日体量已接近成熟项目，22 个 Issues 和 41 个 PRs，但仍有大量 XXXL/XXL 大型 PR。
- **NanoBot / PicoClaw / LobsterAI**：更偏产品或框架迭代，社区讨论量相对有限；其中 NanoBot 修复响应快，LobsterAI 依靠内部高强度 PR 吞吐推进，PicoClaw 的外部互动最弱。

---

## 4. 共同关注的技术方向

### 4.1 长期上下文、会话持久化与记忆治理

涉及项目：**OpenClaw、NanoBot、QwenPaw、Hermes Agent**

- OpenClaw：WAL checkpoint 被阻塞、大型会话库 I/O 压力、compaction 静默降级、curated memory 被永久排除。
- NanoBot：Anthropic thinking 会话压缩后签名失效；空压缩标记进入 replay/journal。
- QwenPaw：追加式 SQLite 历史、Turn 分叉、长会话滚动位置和上下文预算。
- Hermes Agent：Doc-Chain RFC、后台异步压缩、工具结果按需重读、记忆 TTL/引用治理。

**共同诉求：** 长会话不能仅依赖模型上下文窗口；需要可恢复、可分叉、可追溯且可治理的会话与记忆基础设施。

### 4.2 多 Agent、多会话与配置隔离

涉及项目：**全部活跃项目**

- OpenClaw：会话共享、参与者权限、Agent fallback 和 turn grant。
- QwenPaw：ACP 与原生执行共用会话配置、Agent 级模型设置。
- Hermes Agent：多 Profile 隔离、Discord 按 Profile 路由、delegate_task 上限。
- LobsterAI：Agent 协作允许列表、跨升级和降级持久化。
- PicoClaw：共享上下文、handoff、智能体发现。
- NanoBot：Mission Control、Live Pulse、Active Drawer 和多项目并发控制台。

**共同诉求：** “多个 Agent 同时运行”正在成为标配，但模型、权限、记忆、状态和任务归属必须严格隔离。

### 4.3 Provider 与新模型能力适配

涉及项目：**OpenClaw、NanoBot、QwenPaw、Hermes Agent、PicoClaw**

- Anthropic thinking 签名和 `reasoningEffort` 兼容性；
- GLM-5.3/5.4、`max_input_tokens` 识别；
- 自定义 OpenAI-compatible Provider 模型发现；
- Kimi 原生视觉及正确 `base_url`；
- BotGo 与 Resty 版本兼容；
- Session model pin 继承 fallback chain。

**共同诉求：** Provider 适配不能依赖硬编码模型表，必须建立包含上下文窗口、推理参数、多模态、端点和认证方式的能力协商层。

### 4.4 工具调用与媒体结果可靠性

涉及项目：**OpenClaw、QwenPaw、Hermes Agent、LobsterAI、NanoBot**

- QwenPaw：媒体工具结果使非多模态模型后续请求持续 400；
- OpenClaw：工具结果回写、缓存前缀反复重写、飞书引用图片；
- Hermes Agent：工具输出落盘、主动裁剪、异步压缩；
- LobsterAI：HTML 转 PNG/JPEG、图片复用和媒体预览；
- NanoBot：空最终回复不得污染 assistant history。

**共同诉求：** 工具结果必须按目标模型能力进行过滤、转换和预算控制，不能直接把任意二进制或媒体块注入会话。

### 4.5 插件、技能和 MCP 生态

涉及项目：**全部活跃项目**

- OpenClaw：大型插件捕获阻塞 Gateway；
- QwenPaw：插件路径迁移、Docker 前端资源、streamable HTTP 错误语义；
- Hermes Agent：插件目录发布、终端 UI 事件、A2A 生命周期；
- PicoClaw：技能安装去重语义；
- NanoBot：MCP 连接生命周期与 SDK 执行一致性。

**共同诉求：** 插件系统需要统一安装、权限、版本兼容、错误协议、发布验证和生命周期管理。

### 4.6 跨平台与部署可靠性

涉及项目：**全部活跃项目**

- OpenClaw：Windows 服务、`schtasks`、休眠恢复；
- NanoBot：Windows Bun 文件锁；
- QwenPaw：Windows 路径迁移、`llama-server` 残留、Linux 打包；
- Hermes Agent：Windows 文件锁与事件循环、Docker `install.lock` 权限、桌面与 Gateway 状态竞争；
- LobsterAI：DSH 跨版本迁移。

**共同诉求：** Windows 文件占用、容器 UID、反向代理子路径和跨版本状态迁移，已经成为 Agent 平台的一等工程问题。

### 4.7 可观测性、安全与 Human-in-the-Loop

涉及项目：**OpenClaw、QwenPaw、Hermes Agent**

- OpenClaw：统一权限判定、插件路径诊断、记忆安全过滤；
- QwenPaw：技能扫描 fail-open、资源限制未执行、出站策略缺失、租户隔离不足；
- Hermes Agent：日志脱敏、主动任务可见性、备份落盘。

**共同诉求：** 权限、审计、错误原因码、资源限制和用户确认不能只停留在配置或文档层，必须在执行层真实生效。

---

## 5. 差异化定位分析

| 项目 | 功能侧重 | 目标用户 | 技术架构特征 |
|---|---|---|---|
| **OpenClaw** | 通用个人 Agent 平台、Gateway、插件、渠道、多人协作 | 高级个人用户、团队、插件开发者、私有化部署者 | 高度模块化运行时；Gateway/插件/会话/发布体系耦合较强 |
| **NanoBot** | 轻量 Agent、多渠道、TUI/WebUI、快速接入 | 个人开发者、Python 用户、CLI 偏好者、小型部署 | 轻量 SDK 导向；WebUI 快速迭代；模型/provider 适配仍需强化 |
| **PicoClaw** | 轻量渠道机器人、技能安装、provider 兼容、多 Agent 探索 | Go 生态用户、机器人与 IoT/边缘场景 | Go 实现；偏执行层和渠道适配；架构收敛能力待加强 |
| **LobsterAI** | 桌面办公、Artifacts、Office 编辑、多 Agent 任务、DSH 迁移 | 办公用户、创作者、企业桌面场景 | Electron/Tauri 式桌面工作台倾向；主进程、Cowork、Artifacts 高度耦合 |
| **QwenPaw** | 桌面控制台、多 Provider、Coding Mode、插件与本地模型 | 开发者、多 Agent 用户、需要可扩展执行环境的技术用户 | Tauri/Console/插件工具链结合；大型架构 PR 较多 |
| **Hermes Agent** | 长期个人助理、主动任务、Gateway、Desktop、浏览器、插件生态 | 高级个人用户、远程/自托管部署者、Agent 开发者 | CLI/Gateway/Desktop/Docker 多形态；长期上下文与本地自动化是重点 |
| **IronClaw** | 今日无活动，暂无法确认 | 暂无法确认 | 暂无法确认 |
| **OpenHuman** | 今日无活动，暂无法确认 | 暂无法确认 | 暂无法确认 |

### 核心差异判断

- **OpenClaw** 的优势是“生态与运行时广度”，代价是状态、数据库和插件路径的复杂度最高。
- **Hermes Agent** 更像长期个人工作台，强调主动任务、后台运行、浏览器和本地资产。
- **QwenPaw** 更偏开发者控制台与安全执行环境，架构雄心大，但当前合并积压较重。
- **LobsterAI** 的差异化最明确：办公文档、Artifacts 和桌面交付，而非通用 API 框架。
- **NanoBot** 胜在轻量与响应速度；**PicoClaw** 胜在 Go 和渠道/边缘场景，但生态闭环偏弱。

---

## 6. 社区热度与成熟度

### 6.1 第一层：高吞吐、高复杂度

**OpenClaw、Hermes Agent、QwenPaw**

共同特征：

- 大量 Issue/PR 并行处理；
- 已建立发布、标签或插件体系；
- 功能边界从聊天扩展到运行时、桌面、插件、记忆和安全。

主要问题：

- OpenClaw：P0/P1 存量多，WAL、插件阻塞、Windows 和回滚风险突出；
- Hermes Agent：Desktop、Gateway、Docker、Windows 生命周期尚未完全统一；
- QwenPaw：安全策略“声明存在、执行不足”，大型 PR 积压明显。

### 6.2 第二层：快速产品迭代

**LobsterAI、NanoBot**

- LobsterAI：16 个 PR 全部收口，功能推进快，但无 Release、无公开反馈，正式交付情况不明；
- NanoBot：Bug 与功能修复并行，3 个新问题均有对应 PR，但部分大型 WebUI PR 长期开放且存在冲突。

### 6.3 第三层：质量收敛与架构整理

**PicoClaw**

- 存量 PR 合并、配置修复和依赖问题治理明显；
- 但无新版本，QQ 渠道高影响问题未闭环，部分明确修复以 stale 状态结束；
- 多智能体框架仍处早期探索。

### 6.4 数据不足或静默层

**IronClaw、OpenHuman**

过去 24 小时无活动，不能据此判断项目停滞、归档或仅缺少公开数据，不宜给出健康度排名。

---

## 7. 值得关注的趋势信号

### 7.1 “长期上下文”正成为核心竞争层

竞争点已从简单 summary 转向：

- 可分叉的历史；
- 来源可追溯；
- 按需重读；
- 跨会话治理；
- 压缩后不污染上下文；
- 记忆保留期与引用生命周期。

**开发建议：** 不要只增加 context window；应优先建设统一的历史、记忆和证据模型。

### 7.2 主动 Agent 会从能力展示转向授权与可解释性

Hermes Agent 的主动任务 RFC、OpenClaw 的 turn grant、QwenPaw 的 Human-in-the-Loop 需求共同表明：用户接受后台自动化，但要求：

- 明确提示词和读取范围；
- 可批准、可暂停、可恢复；
- 不静默扩大权限；
- 主动结果可追溯。

**开发建议：** 把主动行为设计成“可见状态机”，而不是不可见后台循环。

### 7.3 Agent 工具链需要“能力感知”，不能只依赖字符串协议

媒体回写、思考签名、上下文窗口、视觉端点、工具错误回传等问题反复出现，说明传统 OpenAI-compatible 兼容层已不足以覆盖新模型。

**开发建议：** 建立统一 Model Capability Manifest，至少描述上下文窗口、推理参数、多模态、工具调用、签名状态、认证和端点能力。

### 7.4 状态数据库正在成为个人 Agent 平台的真正瓶颈

OpenClaw 的 WAL/QwenPaw 的追加式历史/Hermes Agent 的 Desktop-Gateway 所有权竞争均指向同一结论：会话状态、任务状态、记忆索引和 Agent 协调最终都会汇聚到本地数据库。

**开发建议：** 提前建立数据库所有权、迁移事务、WAL 策略、快照一致性和多进程协调规范。

### 7.5 多 Agent 协作的价值在“隔离”，不在数量

会话共享、Profile 路由、Agent 模型作用域、共享允许列表等需求同时升温。用户真正需要的是：

- 身份隔离；
- 权限隔离；
- 记忆隔离；
- 模型和工具隔离；
- 可审计的任务归属。

**开发建议：** 协作功能上线前，应先统一 Agent、Session、Profile、Participant 四种作用域的语义。

### 7.6 桌面办公型 Agent 正形成独立产品层

LobsterAI 的 Word/Sheet/PPT、Artifacts、HTML 转图片和任务管理显示，办公 Agent 正从“回答问题”转向“创建、编辑、预览并交付文件”。这与传统聊天型个人助手形成明显差异。

**开发建议：** 办公型产品应优先建设文件格式兼容、独立渲染沙箱、产物索引、跨会话资产复用和版本追踪。

### 7.7 安全默认必须从 fail-open 转向 fail-closed

QwenPaw 集中暴露技能扫描、资源限制和出站策略的执行缺口；OpenClaw 和 Hermes Agent 也暴露权限、日志与状态竞争问题。

**开发建议：** 权限和沙箱配置一旦存在，就必须有运行时断言、失败证据和默认拒绝策略，避免“配置看起来安全、执行实际上无效”。

---

## 综合结论

生态已形成三种明显形态：

1. **平台型**：OpenClaw、QwenPaw，覆盖运行时、插件、多 Agent 和桌面控制；
2. **长期工作台型**：Hermes Agent、LobsterAI，强调后台主动执行、记忆、办公产物与持续任务；
3. **轻量执行型**：NanoBot、PicoClaw，强调快速接入、CLI/TUI、渠道和技能生态。

短期技术决策重点不应只看功能数量，而应关注四个指标：**状态数据可靠性、Provider 能力适配、跨平台生命周期、权限与安全策略是否真实执行**。在这些指标上，OpenClaw 的生态领先优势最大，但其 SQLite/WAL、插件阻塞和升级回滚风险也最突出；Hermes Agent、QwenPaw 和 LobsterAI 则分别代表长期上下文、安全沙箱和办公产物方向最值得跟踪的路线。

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目动态日报

**统计日期：2026-11-25**  
**项目：** [HKUDS/nanobot](https://github.com/HKUDS/nanobot)

---

## 1. 今日速览

过去 24 小时共更新 **3 个 Issues** 和 **16 个 PR**，其中 **9 个 PR 已合并或关闭、7 个仍待处理**，整体开发吞吐较高。新增问题集中于 **Anthropic thinking 会话恢复、Haiku 5.5 推理强度兼容性**以及 **Windows 原生 TUI 的 Bun 安装失败**。WebUI 是今日最集中的改进方向，已处理消息发送反馈、Mermaid 渲染、编辑面板、错误提示等多项体验问题；同时，Anthropic 兼容性和 Windows 安装问题均已有对应修复 PR。综合来看，项目健康度良好，但新模型兼容性、会话压缩后的状态恢复以及跨平台安装稳定性仍需重点跟进。

---

## 2. 版本发布

过去 24 小时 **无新版本发布**，因此暂无发布说明、破坏性变更或升级迁移事项。

---

## 3. 项目进展

### 3.1 Anthropic 会话恢复与 Haiku 5.5 兼容性修复

- **PR #6792 — 修复压缩后的 thinking 会话，并支持 Haiku 5.5 effort**  
  [查看 PR](https://github.com/HKUDS/nanobot/pull/6792)  
  - 修复 Anthropic 工具调用在上下文压缩、checkpoint 后静默中断的问题。
  - 恢复会话时处理 thinking block 的重放与签名问题，避免后续请求持续失败。
  - 兼容 Haiku 5.5 对 `reasoningEffort` 参数的限制。
  - 与今日 Issues [#6785](https://github.com/HKUDS/nanobot/issues/6785) 和 [#6786](https://github.com/HKUDS/nanobot/issues/6786) 直接对应，当前仍待合并。

### 3.2 Windows 原生 TUI 的 Bun 安装修复

- **PR #6791 — 在最终缓存路径校验已下载的 Bun**  
  [查看 PR](https://github.com/HKUDS/nanobot/pull/6791)  
  - 针对杀毒软件占用 `bun.exe` 导致 `WinError 32` 的问题调整安装流程。
  - 将校验后的可执行文件原子移动到缓存路径，再执行版本检查。
  - 修复 Windows 首次启动原生 TUI 时可能无法安装 Bun、只能使用 `--no-tui` 的问题。
  - 对应 Issue [#6784](https://github.com/HKUDS/nanobot/issues/6784)，当前仍待合并。

### 3.3 SDK 执行路径统一

- **PR #6789 — 统一直接执行与流式执行逻辑**  
  [查看 PR](https://github.com/HKUDS/nanobot/pull/6789)  
  - 在 `Nanobot.run()` 和 `Nanobot.run_streamed()` 之间共享模型覆盖解析、回合结果捕获、MCP 连接及 Agent 调用逻辑。
  - 保留流式路径的事件分发与取消机制，直接调用仍不创建流式队列。
  - 有助于减少两条执行路径的行为漂移，降低后续维护成本。

### 3.4 记忆压缩边界优化

- **PR #6797 — 避免空压缩标记进入 replay 和 journal**  
  [查看 PR](https://github.com/HKUDS/nanobot/pull/6797)  
  - 修复仅包含问候语等空内容的会话在压缩时仍推进 replay 边界的问题。
  - 防止空摘要标记被模型包裹后生成无意义的 archived-context 段落和虚假 journal 记录。
  - 改善长会话压缩与记忆归档的一致性，当前待合并。

### 3.5 精简 Agent 运行时上下文

- **PR #6796 — 精简 workspace runtime context**  
  [查看 PR](https://github.com/HKUDS/nanobot/pull/6796)  
  - 保留项目路径和适用的 workspace 限制信息。
  - 移除每个回合重复注入的通用文件访问声明及操作系统、工具规则提醒。
  - 可减少无效 token 消耗，当前待合并。

### 3.6 WebUI 交互与渲染改进

今日关闭的 PR 主要提升了 WebUI 的稳定性和细节体验：

- **PR #6794 — 待发送消息旁显示加载指示**  
  [查看 PR](https://github.com/HKUDS/nanobot/pull/6794)  
  避免消息同时出现时钟和独立“Sending”行造成布局跳动。

- **PR #6793 — 修复会话切换淡出动画导致面板缩放的问题**  
  [查看 PR](https://github.com/HKUDS/nanobot/pull/6793)  
  保留面板几何结构，并修正淡出期间消息快照错配。

- **PR #6790 — 点击编辑路径时切换内联 diff**  
  [查看 PR](https://github.com/HKUDS/nanobot/pull/6790)  
  统一折叠编辑行的点击行为，避免点击文件名时直接打开侧栏文件。

- **PR #6788 — 提前渲染闭合的 Mermaid 代码块并支持原位重试**  
  [查看 PR](https://github.com/HKUDS/nanobot/pull/6788)  
  图表无需等待整条回复结束即可渲染；加载失败时可在原位置重试。

- **PR #6783 — 将子 Agent 消息操作限制在详情面板内**  
  [查看 PR](https://github.com/HKUDS/nanobot/pull/6783)  
  修复窄详情面板的操作弹层仍横跨整个浏览器窗口的问题。

- **PR #6782 — 区分 Undo 操作与 Toast 标题**  
  [查看 PR](https://github.com/HKUDS/nanobot/pull/6782)  
  改善中英文混排时的视觉层级和间距。

- **PR #6781 — 将编辑器错误改为 Toast 展示**  
  [查看 PR](https://github.com/HKUDS/nanobot/pull/6781)  
  避免模型切换等错误导致输入区布局位移。

### 3.7 通道层空回复处理

- **PR #6773 — 将空最终回复记录为结构化回合失败**  
  [查看 PR](https://github.com/HKUDS/nanobot/pull/6773)  
  - 模型未产生最终答案时，不再把英文 fallback 文本写入 assistant history 并报告成功。
  - 改为记录失败回合，并区分“确认触发输出限制”和“其他空回复”。
  - 防止无效回复污染后续上下文。

### 3.8 本地工作目录清理

- **PR #6795 — 将 `.nanobot/` 加入 `.gitignore`**  
  [查看 PR](https://github.com/HKUDS/nanobot/pull/6795)  
  避免 Agent 在仓库根目录生成的临时状态频繁出现在 `git status` 中；不涉及已跟踪文件。

---

## 4. 社区热点

### Issues

1. **Issue #6786 — Anthropic thinking 会话在压缩后因签名无效而无法恢复**  
   [查看 Issue](https://github.com/HKUDS/nanobot/issues/6786)  
   - 涉及 `anthropic/claude-sonnet-5-5`、`reasoningEffort: medium` 等场景。
   - 用户反馈长流程 `nanobot -m` 在回合内触发上下文压缩后，会话会变得不可用。
   - CLI 还可能隐藏实际错误，使用户只能看到后续请求连续失败。
   - **已有修复：** [PR #6792](https://github.com/HKUDS/nanobot/pull/6792)，待合并。

2. **Issue #6785 — Haiku 5.x 不接受手动 thinking budget**  
   [查看 Issue](https://github.com/HKUDS/nanobot/issues/6785)  
   - 当 `reasoningEffort` 设置为 `medium` 等非 `adaptive`/`none` 值时，请求被 Anthropic 拒绝。
   - 核心诉求是正确适配不同 Anthropic 模型的 thinking 参数能力，而不是将所有模型视为支持同一推理强度接口。
   - **已有修复：** [PR #6792](https://github.com/HKUDS/nanobot/pull/6792)，待合并。

3. **Issue #6784 — Windows 安装 Bun 时被病毒扫描程序锁定**  
   [查看 Issue](https://github.com/HKUDS/nanobot/issues/6784)  
   - Bun 已下载并通过校验，但在移动到缓存目录时因 `WinError 32` 失败。
   - 首次启动原生 TUI 因此不可用，只剩 `--no-tui` 作为临时绕行方案。
   - **已有修复：** [PR #6791](https://github.com/HKUDS/nanobot/pull/6791)，待合并。

### Pull Requests

- **PR #6792 — Anthropic 恢复与 Haiku 5.5 兼容修复**  
  [查看 PR](https://github.com/HKUDS/nanobot/pull/6792)  
  同时对应今日两个 Anthropic Issue，是当前最值得优先审阅的修复。

- **PR #6791 — Windows Bun 安装修复**  
  [查看 PR](https://github.com/HKUDS/nanobot/pull/6791)  
  具备明确的复现路径、修复目标和对应 Issue，具备较高合并优先级。

- **PR #6323 — 支持在同一会话中编辑并重新发送消息**  
  [查看 PR](https://github.com/HKUDS/nanobot/pull/6323)  
  - 创建于 2026-10-20，仍处于开放状态并标记存在冲突。
  - 数据显示当前提交曾通过全部 20 项 CI 检查，但该结论对应特定历史快照，当前版本需重新验证。
  - 是今日列表中持续时间最长且可能进入下一阶段 WebUI 能力的功能项之一。

- **PR #6761 — 以 Mission Control、Live Pulse 和 Active Drawer 重构会话管理**  
  [查看 PR](https://github.com/HKUDS/nanobot/pull/6761)  
  - 面向多项目、并发 Agent 的使用场景。
  - 试图解决现有 272px 会话历史侧栏空间紧张的问题。
  - 仍待合并，落地前可能需要进一步处理与现有会话切换逻辑、消息快照及响应式布局的兼容问题。

> **热度判断：** 今日没有高点赞 Issue，多数 Issue 评论数仅为 0–1，热度主要来自 PR 数量及开发者快速提交修复，而不是社区互动量。当前提交非常活跃，但外部用户讨论和社区反馈仍偏少。

---

## 5. Bug 与稳定性

### 严重

1. **Anthropic thinking 会话在上下文压缩后不可恢复**
   - Issue：[ #6786](https://github.com/HKUDS/nanobot/issues/6786)
   - 影响：长工具调用可能静默中断，且后续 CLI 调用持续因 thinking 签名无效而失败。
   - 稳定性影响较高，可能破坏长会话连续性。
   - **已有 fix PR：** [#6792](https://github.com/HKUDS/nanobot/pull/6792)，待合并。

2. **模型无最终输出可能被误记为成功**
   - PR：[ #6773](https://github.com/HKUDS/nanobot/pull/6773)
   - 影响：fallback 文本被写入 assistant history，可能污染后续上下文，并掩盖真实失败。
   - **修复状态：** PR 已关闭，预计改动已进入项目主线；仍建议关注对应回归测试与发布版本落地情况。

### 中等

3. **Haiku 5.5 与 `reasoningEffort` 不兼容**
   - Issue：[ #6785](https://github.com/HKUDS/nanobot/issues/6785)
   - 影响：使用 `medium` 等常见配置时，请求在生成任何输出前即失败。
   - **已有 fix PR：** [#6792](https://github.com/HKUDS/nanobot/pull/6792)，待合并。

4. **Windows 原生 TUI 首次安装 Bun 失败**
   - Issue：[ #6784](https://github.com/HKUDS/nanobot/issues/6784)
   - 影响：杀毒软件或文件索引程序短暂锁定 `bun.exe` 即可导致 TUI 不可用。
   - **已有 fix PR：** [#6791](https://github.com/HKUDS/nanobot/pull/6791)，待合并。

### 较低

5. **WebUI 消息发送、会话切换和内联 diff 交互问题**
   - [#6794](https://github.com/HKUDS/nanobot/pull/6794)
   - [#6793](https://github.com/HKUDS/nanobot/pull/6793)
   - [#6790](https://github.com/HKUDS/nanobot/pull/6790)
   - [#6783](https://github.com/HKUDS/nanobot/pull/6783)
   - [#6782](https://github.com/HKUDS/nanobot/pull/6782)
   - [#6781](https://github.com/HKUDS/nanobot/pull/6781)
   - 主要是布局、状态反馈和视觉层级问题，相关 PR 均已关闭。

6. **Mermaid 图表延迟渲染及加载失败后无法方便重试**
   - PR：[ #6788](https://github.com/HKUDS/nanobot/pull/6788)
   - **修复状态：** PR 已关闭。

---

## 6. 功能请求与路线图信号

### 已有明确实现方向

1. **WebUI 会话内编辑并重新发送消息**
   - PR：[ #6323](https://github.com/HKUDS/nanobot/pull/6323)
   - 属于明确的用户效率型功能，可用于修正提问、复用历史输入并减少重复发送。
   - 当前仍有合并冲突，但历史 CI 通过情况较好，是下一版本 WebUI 的候选能力。

2. **WebUI 会话管理全面重构**
   - PR：[ #6761](https://github.com/HKUDS/nanobot/pull/6761)
   - Mission Control、跨项目 Live Pulse、Active Drawer 表明项目正从“单会话聊天 UI”向“多项目、多 Agent 并发控制台”演进。
   - 该方向与 NanoBot 的多渠道、多工具 Agent 定位一致，但改动面较大，预计需要分阶段合并和回归验证。

3. **SDK 执行接口统一**
   - PR：[ #6789](https://github.com/HKUDS/nanobot/pull/6789)
   - 不是用户可见的新功能，但会为 SDK 调用、流式输出、取消机制及 MCP 生命周期提供更稳定的一致性基础。
   - 可能成为后续 SDK 扩展的内部基础工程。

4. **运行时上下文与记忆压缩优化**
   - PR：[ #6797](https://github.com/HKUDS/nanobot/pull/6797)
   - PR：[ #6796](https://github.com/HKUDS/nanobot/pull/6796)
   - 方向包括减少上下文噪声、避免虚假记忆记录及降低无效 token 消耗。
   - 对长会话可靠性与运行成本有积极意义。

### 下一版本建议优先级

1. 优先合并并验证 [#6792](https://github.com/HKUDS/nanobot/pull/6792) 和 [#6791](https://github.com/HKUDS/nanobot/pull/6791)，分别消除 Anthropic 会话硬故障与 Windows TUI 安装阻断。
2. 将 [#6797](https://github.com/HKUDS/nanobot/pull/6797)、[#6796](https://github.com/HKUDS/nanobot/pull/6796)、[#6789](https://github.com/HKUDS/nanobot/pull/6789) 作为运行时稳定性与 SDK 一致性改进合入。
3. WebUI 功能项建议优先推进 [#6323](https://github.com/HKUDS/nanobot/pull/6323)；[#6761](https://github.com/HKUDS/nanobot/pull/6761) 涉及范围较广，宜拆分为会话导航、跨项目状态和布局重构等阶段。

---

## 7. 用户反馈摘要

### 核心痛点

- **长会话恢复不稳定：** 用户在 Anthropic thinking 模式下执行长流程时，压缩后会话可能直接失效，且 CLI 不展示根因，严重降低自动化任务的可恢复性。参见 [#6786](https://github.com/HKUDS/nanobot/issues/6786)。
- **新模型参数兼容性不足：** Haiku 5.5 使用常见 `reasoningEffort: medium` 即请求失败，说明 provider 适配层需要更精细地区分模型能力。参见 [#6785](https://github.com/HKUDS/nanobot/issues/6785)。
- **Windows 安装受安全软件影响：** 病毒扫描程序锁定 Bun 文件即可阻断 TUI，用户需要 `--no-tui` 绕行。参见 [#6784](https://github.com/HKUDS/nanobot/issues/6784)。
- **WebUI 状态反馈和布局稳定性持续受到关注：** 今日多个 PR 聚焦消息发送中状态、会话切换动画、弹层范围、错误提示和内联 diff，说明 WebUI 已进入精细打磨阶段。
- **多项目和并发 Agent 管理需求增强：** [#6761](https://github.com/HKUDS/nanobot/pull/6761) 反映出传统窄侧栏已难满足当前使用场景。

### 满意度与反馈强度

- 今日 Issue 评论总量很低，三个问题分别只有 0–1 条评论，尚无大量用户复现或明确认可反馈。
- 从问题描述的完整度看，报告者提供了具体模型、参数、运行命令和错误信息，具备较高复现价值。
- 项目开发者在问题出现后迅速提交对应修复 PR，表明维护响应较积极；但在 PR 合并和版本发布前，用户痛点仍未完全解决。
- WebUI 改进主要来自持续集成开发，尚不能据此判断终端用户满意度显著提升。

---

## 8. 待处理积压

1. **PR #6323 — 会话内编辑并重新发送消息**  
   [查看 PR](https://github.com/HKUDS/nanobot/pull/6323)  
   - 自 2026-10-20 起持续开放，已超过一个月，并明确标记冲突。
   - 建议重新基于最新 `main` 解决冲突、重跑 CI，并拆分或明确测试覆盖。

2. **PR #6761 — WebUI 会话管理重构**  
   [查看 PR](https://github.com/HKUDS/nanobot/pull/6761)  
   - 大型前端重构持续待审。
   - 建议确认其与已合并的会话切换、消息发送状态及详情面板修复之间是否存在代码重叠，避免重复实现和交互回归。

3. **PR #6792 — Anthropic thinking 与 Haiku 5.5 修复**  
   [查看 PR](https://github.com/HKUDS/nanobot/pull/6792)  
   - 虽为今日新 PR，但直接关联两个公开兼容性问题。
   - 建议补充以下回归场景：压缩前后 thinking block 重放、checkpoint 恢复、Haiku 5.5 各种 effort 值、CLI 错误透传。

4. **PR #6791 — Windows Bun 安装修复**  
   [查看 PR](https://github.com/HKUDS/nanobot/pull/6791)  
   - 建议在杀毒软件或文件占用条件下验证重试、原子移动和失败清理逻辑。

5. **PR #6797、#6796、#6789**  
   - [#6797：空压缩标记处理](https://github.com/HKUDS/nanobot/pull/6797)
   - [#6796：精简运行时上下文](https://github.com/HKUDS/nanobot/pull/6796)
   - [#6789：统一 SDK 执行路径](https://github.com/HKUDS/nanobot/pull/6789)
   - 均处于待合并状态，建议优先完成测试审阅，避免今日修复成果继续积压。

---

## 项目健康度结论

**健康度：良好（偏积极）**

- **开发活跃度高：** 24 小时内更新 16 个 PR，且 9 个已完成合并或关闭，修复吞吐明显。
- **问题响应快：** 今日三个主要 Bug 均已有对应修复 PR。
- **功能方向清晰：** WebUI 会话管理、多 Agent 并发控制、SDK 一致性和长会话记忆可靠性均已有具体实现。
- **主要风险：** Anthropic 新模型能力适配仍需更系统化；Windows 安装流程对外部文件锁的鲁棒性仍需验证；部分大型 WebUI PR 长期开放且存在冲突。
- **建议关注：** 优先处理 [#6792](https://github.com/HKUDS/nanobot/pull/6792)、[#6791](https://github.com/HKUDS/nanobot/pull/6791)，并尽快解决 [#6323](https://github.com/HKUDS/nanobot/pull/6323) 的冲突，同时安排一次集中发布以向用户交付本轮稳定性修复。

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目动态日报

**统计日期：2026-11-25**  
**数据范围：过去 24 小时**  
**项目：** [sipeed/picoclaw](https://github.com/sipeed/picoclaw)

---

## 1. 今日速览

过去 24 小时共记录 **1 条活跃 Issue、5 条已关闭/合并 PR、0 个新版本发布**。  
项目主要围绕 **配置覆盖修复、存量缺陷整合、多智能体框架、工具请求头和技能安装去重** 等方向推进，整体开发活跃度中等偏高。  
今日没有待合并 PR，新增 PR 主要体现为已关闭或 stale 状态，说明当日工作更偏向**问题收敛、代码整合与维护队列清理**。  
当前最值得关注的是仍处于开放状态的 **QQ 渠道鉴权失败回归问题**：错误指向 `botgo v0.2.1` 与 `resty v2.17.1` 的依赖组合不兼容，暂未看到明确关联的修复 PR。  
综合来看，项目在功能演进和缺陷治理上持续推进，但版本发布节奏偏慢，且部分涉及多智能体、配置系统及外部渠道兼容性的改动，仍需加强回归验证和发布说明。

---

## 3. 项目进展

### 2.1 [PR #957] 修复默认模型列表覆盖用户配置

- **状态：** CLOSED  
- **作者：** @HRronaldo  
- **关联问题：** [#680](https://github.com/sipeed/picoclaw/issues/680)  
- **链接：** [PR #957](https://github.com/sipeed/picoclaw/pull/957)

该 PR 修复了用户仅配置 `model_name` 和 `api_key`、省略 `api_base` 时，默认 `ModelList` 错误覆盖用户配置的问题。典型表现是接口返回 `401`，并提示令牌过期或验证不正确。

改动目标包括：

- 不再让缺省 `api_base` 被默认值错误覆盖；
- 保留首次启动新用户获得默认模型列表模板的能力；
- 避免部分配置用户被默认配置污染。

**进展判断：**  
这是配置系统和首次启动体验的重要修复，可降低用户接入模型服务时的鉴权失败与排障成本。虽然 PR 已关闭，但摘要显示其目标与关联问题已得到集中处理；建议在发布说明中明确默认值合并规则和自定义配置优先级。

---

### 2.2 [PR #1546] 合并多项存量修复

- **状态：** CLOSED  
- **作者：** @xuwei-xy  
- **链接：** [PR #1546](https://github.com/sipeed/picoclaw/pull/1546)

该 PR 将以下开放 PR 的修复进行集中整合：

- [#1480](https://github.com/sipeed/picoclaw/pull/1480)
- [#1479](https://github.com/sipeed/picoclaw/pull/1479)
- [#1478](https://github.com/sipeed/picoclaw/pull/1478)
- [#1473](https://github.com/sipeed/picoclaw/pull/1473)
- [#1467](https://github.com/sipeed/picoclaw/pull/1467)

**进展判断：**  
集中式合并有助于减少长期分支和分散 PR 带来的维护成本，也让多项修复以统一方式进入主干。不过，由于摘要未列出每个子 PR 的具体变更，发布前仍需建立清晰的变更清单，并分别验证配置、工具调用和渠道行为的兼容性。

---

### 2.3 [PR #423] 多智能体协作基础框架

- **状态：** CLOSED  
- **作者：** @Leeaandrob  
- **链接：** [PR #423](https://github.com/sipeed/picoclaw/pull/423)

该 WIP PR 尝试引入基础的多智能体协作能力，主要包括：

- 共享上下文池；
- Agent handoff，即任务在代理之间转交；
- 智能体发现工具；
- 线程安全的共享“Blackboard”机制。

该方向建立在既有的 provider protocol 重构、模型 fallback chain 和多智能体路由能力之上。

**进展判断：**  
该 PR 展示了项目向多智能体编排平台演进的重要路线信号，但多智能体协作会引入上下文一致性、并发安全、路由误判和任务重复执行等复杂问题。此次以关闭状态收敛，后续更可能拆分为基础能力、路由策略和共享上下文等独立阶段推进，而不是一次性作为完整版本功能交付。

---

### 2.4 [PR #3466] Perplexity 搜索请求增加集成标识头

- **状态：** CLOSED / stale  
- **作者：** @qirh  
- **链接：** [PR #3466](https://github.com/sipeed/picoclaw/pull/3466)

该 PR 计划在 Perplexity Web Search 的现有请求中加入：

```http
X-Pplx-Integration: picoclaw
```

变更范围仅限 `PerplexitySearchProvider.Search` 中硬编码的 Perplexity 请求，不影响其他 provider、代理或调用方。

**进展判断：**  
这是一个边界清晰、回归风险较低的 provider 适配优化，有助于服务端识别 PicoClaw 集成来源。该 PR 以 stale 状态关闭，可能因长期未跟进或维护策略调整而未合入；如果该请求头对服务端识别仍有价值，可由维护者确认后重新开启或纳入 provider 专项修复批次。

---

### 2.5 [PR #3463] 技能安装按根目录去重

- **状态：** CLOSED / stale  
- **作者：** @nelsonrochaa-creator  
- **关联问题：** [#3462](https://github.com/sipeed/picoclaw/issues/3462)  
- **链接：** [PR #3463](https://github.com/sipeed/picoclaw/pull/3463)

该 PR 修复 `picoclaw skills install` 以及智能体的 `install_skill` 工具在安装技能时的误判问题。此前，系统按 frontmatter 中的 `name` 判断技能是否重复，导致不同目录、不同作者但名称相同的技能被错误拒绝，并提示：

```text
registry archive is not a valid skill
```

修复方向是按技能安装根目录去重，而不是仅按 frontmatter 名称去重。

**进展判断：**  
该修复直接提升技能生态的兼容性，可避免合法技能无法安装。由于它已有明确 issue 和小范围实现，建议维护者优先确认是否已通过其他 PR 覆盖；若尚未进入主干，应作为低风险独立修复尽快重新落地。

---

## 4. 社区热点

### 4.1 [Issue #3472] QQ 渠道错误 11241：Resty 依赖回归破坏 BotGo 鉴权

- **状态：** OPEN  
- **作者：** @redbrotherchen  
- **创建时间：** 2026-11-23  
- **最后更新：** 2026-11-24  
- **评论数：** 3  
- **链接：** [Issue #3472](https://github.com/sipeed/picoclaw/issues/3472)

这是过去 24 小时唯一活跃 Issue，也是今日社区讨论最集中的话题。

**问题表现：**

- QQ 渠道启动或建立连接时失败；
- 返回错误码 `11241`；
- 错误信息为 `Authorization header format error`；
- 报告者将问题定位为依赖回归：
  - `botgo v0.2.1`；
  - `resty v2.17.1`；
  - `botgo v0.2.1` 原本预期使用 `resty v2.6.0`。

**背后诉求：**

1. 恢复 QQ 渠道的可用性；
2. 明确 Resty 依赖升级与 BotGo 鉴权头生成之间的兼容性；
3. 避免仅通过锁定旧版 Resty 临时绕过，而忽略依赖升级测试；
4. 对其他外部渠道使用的 HTTP 客户端进行同类回归排查。

**热度判断：**  
评论数达到 3，且 issue 同时具备“渠道不可用”和“依赖升级回归”两个特征，实际影响可能高于普通配置问题。建议维护者尽快给出根因确认、可复现版本范围和修复方案。

### 4.2 [PR #423] 多智能体协作框架

- **状态：** CLOSED  
- **链接：** [PR #423](https://github.com/sipeed/picoclaw/pull/423)

该 PR 代表今日最具路线图意义的功能方向。其关注点不是单一 bug，而是共享上下文、代理交接和代理发现等长期能力。虽然当前状态为关闭，但可继续作为多智能体架构设计的讨论入口。

---

## 5. Bug 与稳定性

### 严重程度：高

#### 1. QQ 渠道鉴权头格式错误

- **Issue：** [#3472](https://github.com/sipeed/picoclaw/issues/3472)
- **影响范围：** 使用 `botgo v0.2.1 + resty v2.17.1` 的 QQ 渠道
- **用户影响：** QQ 渠道无法正常启动或建立 WebSocket 连接，机器人服务不可用
- **修复状态：** **尚无明确关联的 fix PR**
- **建议：**
  - 确认兼容组合 `botgo v0.2.1 + resty v2.6.0`；
  - 检查 `go.mod`/`go.sum` 是否间接或直接升级了 Resty；
  - 为 BotGo 鉴权头增加专门测试；
  - 在依赖升级流水线中增加 QQ 渠道启动冒烟测试；
  - 如短期无法修复，应在文档中注明兼容版本或临时降级方案。

### 严重程度：中

#### 2. 默认模型列表覆盖部分用户配置，导致 401

- **Issue：** [#680](https://github.com/sipeed/picoclaw/issues/680)
- **修复 PR：** [#957](https://github.com/sipeed/picoclaw/pull/957)
- **影响范围：** 仅配置 `model_name` 和 `api_key`、未显式配置 `api_base` 的用户
- **用户影响：** 自定义模型服务的地址或鉴权参数被默认值覆盖，请求返回 401
- **修复状态：** **已有明确修复 PR，PR 已关闭**
- **建议：** 核对关闭原因是否代表已合并、替代或放弃，并补充配置优先级测试。

#### 3. 技能安装因同名误判而失败

- **Issue：** [#3462](https://github.com/sipeed/picoclaw/issues/3462)
- **修复 PR：** [#3463](https://github.com/sipeed/picoclaw/pull/3463)
- **影响范围：** 不同技能目录具有相同 frontmatter `name`
- **用户影响：** 合法技能无法安装，报错 `registry archive is not a valid skill`
- **修复状态：** **已有修复 PR，但以 stale 状态关闭**
- **建议：** 核验修复是否已进入主干；若未进入，建议重新开启并补充同名技能、不同根目录的安装测试。

### 严重程度：低

#### 4. Perplexity Web Search 缺少集成请求头

- **PR：** [#3466](https://github.com/sipeed/picoclaw/pull/3466)
- **影响范围：** Perplexity Web Search provider
- **用户影响：** 服务端可能无法识别 PicoClaw 集成来源，具体功能影响尚未充分验证
- **修复状态：** **已有 PR，但以 stale 状态关闭**
- **建议：** 确认请求头是否仍是当前服务端要求；如属于接入规范，应纳入 provider 维护队列。

---

## 6. 功能请求与路线图信号

### 6.1 多智能体协作与共享上下文

- **相关 PR：** [#423](https://github.com/sipeed/picoclaw/pull/423)
- **相关基础能力：**
  - provider protocol 重构；
  - 模型 fallback chain；
  - 多智能体路由。

从 PR 内容判断，下一阶段较可能采用分阶段路线：

1. 先提供线程安全的共享上下文存储；
2. 再实现标准化 Agent handoff；
3. 增加代理能力发现与任务匹配；
4. 最后完善路由策略、冲突处理和可观测性。

完整协作框架短期直接发布的风险较高，更适合拆分为独立、可测试的增强模块。

### 6.2 Perplexity 集成标识

- **相关 PR：** [#3466](https://github.com/sipeed/picoclaw/pull/3466)

添加 `X-Pplx-Integration: picoclaw` 是明确、低成本的 provider 适配需求。若该头用于服务端计量、诊断或来源识别，可能纳入下一次 provider 维护或依赖升级批次。

### 6.3 技能安装去重语义调整

- **相关 Issue：** [#3462](https://github.com/sipeed/picoclaw/issues/3462)
- **相关 PR：** [#3463](https://github.com/sipeed/picoclaw/pull/3463)

从“按 frontmatter 名称去重”转向“按安装根目录去重”，说明项目正在提高技能注册表对同名技能的兼容性。这一改动边界清晰，适合作为近期稳定性修复纳入下一版本。

### 6.4 外部渠道依赖兼容性治理

- **相关 Issue：** [#3472](https://github.com/sipeed/picoclaw/issues/3472)

Issue 暴露的不只是单个 QQ 修复，也说明依赖升级流程需要增加渠道级兼容性测试。后续可能需要：

- 固定关键渠道依赖版本；
- 建立 Resty 等共享 HTTP 客户端依赖矩阵；
- 在 CI 中执行各渠道鉴权和连接冒烟测试；
- 将渠道依赖升级从常规依赖机器人更新中隔离处理。

---

## 7. 用户反馈摘要

根据 [Issue #3472](https://github.com/sipeed/picoclaw/issues/3472) 及其 3 条评论，今日可提炼出的核心反馈如下：

### 真实使用场景

- 用户正在实际部署 QQ 机器人渠道；
- 问题发生在渠道启动或 WebSocket 连接阶段，而非纯配置校验阶段；
- 用户已经完成初步排查，并将错误定位到 BotGo 与 Resty 的版本组合。

### 主要痛点

- **渠道直接不可用：** `11241` 鉴权错误阻断 QQ 机器人运行；
- **依赖升级缺乏兼容保障：** 上游依赖升级改变了鉴权头行为；
- **错误信息与根因之间存在距离：** 表面是授权头格式错误，深层原因可能是共享 HTTP 客户端版本回归；
- **修复选择存在取舍：**
  - 降级 Resty 可以快速恢复；
  - 升级或改造 BotGo 兼容性则更利于长期维护；
  - 两种方案都需要明确版本支持边界。

### 满意度信号

- Issue 获得 3 条评论，说明用户愿意参与定位和验证；
- 报告内容包含错误码、依赖版本、预期版本和失败场景，复现信息较完整；
- 但该 Issue 截至日报生成时仍为开放状态，尚无明确 fix PR，说明问题从“发现”到“修复”之间的闭环速度仍有提升空间。

---

## 8. 待处理积压

### 8.1 QQ 渠道依赖回归仍为开放状态

- **Issue：** [#3472](https://github.com/sipeed/picoclaw/issues/3472)
- **积压风险：** 高
- **原因：** 当前 Issue 活跃，但未看到明确关联修复 PR，且直接影响渠道可用性。
- **建议：** 明确负责人、兼容版本范围、临时降级方案及回归测试计划。

### 8.2 技能安装去重修复被标记为 stale

- **Issue：** [#3462](https://github.com/sipeed/picoclaw/issues/3462)
- **PR：** [#3463](https://github.com/sipeed/picoclaw/pull/3463)
- **积压风险：** 中
- **原因：** 已有可复现问题和修复思路，但 PR 已关闭，状态不明确。
- **建议：** 核验是否已由其他提交覆盖；如未覆盖，重新开启并补齐测试。

### 8.3 Perplexity 集成请求头 PR 被标记为 stale

- **PR：** [#3466](https://github.com/sipeed/picoclaw/pull/3466)
- **积压风险：** 低至中
- **原因：** 改动小且范围明确，但长期未推进。
- **建议：** 确认服务端当前规范，避免修复再次失效。

### 8.4 多智能体协作框架处于长期 WIP 状态

- **PR：** [#423](https://github.com/sipeed/picoclaw/pull/423)
- **积压风险：** 中
- **原因：** 涉及共享状态、路由和 handoff 等多个高耦合模块，若继续以单个大型 PR 维护，合并成本和回归风险会持续上升。
- **建议：** 拆分为基础上下文、任务交接、发现机制和路由策略，并明确阶段性验收标准。

### 8.5 集中合并 PR 的变更透明度不足

- **PR：** [#1546](https://github.com/sipeed/picoclaw/pull/1546)
- **积压风险：** 中
- **原因：** 汇总了多个长期 PR，但摘要未展示逐项变更和测试结果，后续发布时难以形成完整的用户侧变更记录。
- **建议：** 补充按子 PR 划分的变更表、测试覆盖范围和潜在破坏性变更说明。

---

## 项目健康度结论

**健康度评估：中等偏上，但发布与闭环效率仍需改善。**

- **积极信号：** 今日有 5 条 PR 关闭，包含配置修复、技能安装修复和多智能体架构探索；存量修复正通过集中合并方式收敛。
- **风险信号：** 无新版本发布，QQ 渠道存在未闭环的依赖回归，且多个有明确修复方向的 PR 以 stale 状态结束。
- **优先建议：**
  1. 优先解决 [Issue #3472](https://github.com/sipeed/picoclaw/issues/3472)；
  2. 核验 [PR #3463](https://github.com/sipeed/picoclaw/pull/3463) 与 [PR #3466](https://github.com/sipeed/picoclaw/pull/3466) 是否真正进入主干；
  3. 为配置默认值、依赖升级和渠道连接增加回归测试；
  4. 将 [PR #423](https://github.com/sipeed/picoclaw/pull/423) 拆分为可独立交付的多智能体能力；
  5. 尽快形成下一版本发布计划，清晰标注修复项、功能增强和兼容性要求。

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI 项目动态日报

**日期：2026-11-25**  
**项目：** [netease-youdao/LobsterAI](https://github.com/netease-youdao/LobsterAI)

## 1. 今日速览

- 过去 24 小时共更新 **16 条 PR**，其中 **16 条已合并或关闭，待合并为 0 条**；当前没有开放的 Issues，Issues 活跃度为 **0**。
- 今日开发重点集中在 **DSH 桌面端迁移稳定性、Artifacts 办公文档能力、AI 助手界面与任务管理、微信授权迁移**，呈现明显的“集中收口与修复”特征。
- 16 条 PR 均处于关闭状态，且未提供评论数或点赞数，无法据此确认社区讨论热度；按数据口径，项目当前处于 **高开发吞吐、低社区反馈可见度** 的状态。
- 今日没有发布新版本，因此上述能力是否已随正式版本分发仍需等待后续 Release 或构建发布说明确认。
- 综合判断：项目短期推进速度较快，核心方向已从基础功能建设转向 **多智能体协作、办公产物工作流、DSH 迁移兼容和体验统一**；但公开反馈数据不足，版本交付节奏与用户侧验证情况需继续观察。

---

## 3. 项目进展

### 3.1 DSH 稳定性与迁移修复

- **[#3187] fix(dsh): preserve agent collaboration across downgrades**  
  在 Agent 保存过程中保留当前协作允许列表，并在旧客户端修改允许列表时恢复多 Agent 协作模式，同时确保既有模式及未变更选择可跨重启保持稳定。该修复直接降低降级使用造成配置丢失或协作行为改变的风险。  
  [查看 PR](https://github.com/netease-youdao/LobsterAI/pull/3187)

- **[#3178] fix(dsh): restore media previews and turn model labels**  
  恢复 DSH 图片编辑消息中的媒体预览，包括仅使用文本模型执行的回合；补充实际模型标签展示，并支持识别无扩展名图片文件的 MIME 类型。  
  [查看 PR](https://github.com/netease-youdao/LobsterAI/pull/3178)

- **[#3177] fix(dsh): address desktop migration regressions**  
  修复桌面迁移中的多项回归，包括暂时禁用手动备份与导入入口、恢复已发送消息编辑及回复版本切换，并确保各版本继续绑定对应的本地历史和 DSH 会话。  
  [查看 PR](https://github.com/netease-youdao/LobsterAI/pull/3177)

- **[#3173] fix(dsh): recover linked artifacts and await MCP registration**  
  改进关联 Artifacts 的恢复能力，重新扫描已索引历史文件，并区分“已安装 MCP 包”和“已连接 MCP 服务”，在工具注册完成后再派发相关任务，降低工具调用时序错误。  
  [查看 PR](https://github.com/netease-youdao/LobsterAI/pull/3173)

- **[#3172] fix(dsh): skip absent optional logs on export and keep presets in DSH sessions**  
  修复导出桌面日志时缺少可选日志产生告警的问题，并保留 DSH 会话中的模型预设，降低迁移后配置不一致对用户的影响。  
  [查看 PR](https://github.com/netease-youdao/LobsterAI/pull/3172)

### 3.2 Artifacts 与办公文档工作流

- **[#3186] feat(artifacts): add isolated word panel, workspace browser, and office editor upgrades**  
  新增独立 Word 面板及预加载机制，将 Word WASM 的 `wasm-unsafe-eval` 权限限制在专用面板；同时升级 Word、Sheet 等办公编辑器，并引入工作区浏览器。独立渲染上下文有助于降低主窗口权限扩大及功能互相干扰的风险。  
  [查看 PR](https://github.com/netease-youdao/LobsterAI/pull/3186)

- **[#3181] feat(artifacts): add new-tab blank office docs, inline rename, and media preview**  
  增加 Artifacts 工作区新标签页、文件标题行内编辑与重命名、空白 `.docx`/`.xlsx`/`.pptx` 创建、目录视图集成和媒体预览，补齐从文件创建到浏览、管理和预览的核心链路。  
  [查看 PR](https://github.com/netease-youdao/LobsterAI/pull/3181)

### 3.3 智能体、任务与 UI 体验

- **[#3184] feat(ui): refresh app update card, badge, and modal styling**  
  重做应用更新卡片、徽标和弹窗样式，统一至中性色侧边栏设计体系，并调整字体与尺寸变量，使更新提示更符合当前 UI 规范。  
  [查看 PR](https://github.com/netease-youdao/LobsterAI/pull/3184)

- **[#3179] feat(ui): add pinned tasks reordering, task hover card, and model switch confirmation**  
  在 Agent 侧边栏加入置顶任务、更新时间/手动排序、拖拽调整顺序和仅看置顶筛选；新增任务悬浮卡片，并在切换模型时增加确认环节。该方向提升了多任务场景下的组织性与操作安全性。  
  [查看 PR](https://github.com/netease-youdao/LobsterAI/pull/3179)

- **[#3175] feat(ui): add home showcase hub and refine sidebar and rail UX**  
  新增首页 Showcase Hub、示例重混对话框、案例预览卡片及配套资源，并继续调整侧边栏和导航栏体验，首页开始承担模板发现与能力展示功能。  
  [查看 PR](https://github.com/netease-youdao/LobsterAI/pull/3175)

### 3.4 认证、额度与 AI 皮肤设计

- **[#3182] fix(im): preserve Weixin authorization across DSH upgrades**  
  修复从 OpenClaw 升级到 DSH 后已绑定微信机器人需要重新扫码的问题，并处理 IM 设置页重复报错。升级后账号标识及授权信息得到迁移保留，是较明确的高影响升级兼容修复。  
  [查看 PR](https://github.com/netease-youdao/LobsterAI/pull/3182)

- **[#3176] feat(auth): add home credits badge and lightweight credits refresh**  
  首页头部新增额度徽标、详情浮层、刷新操作及中英文文案，并通过轻量级调度机制刷新个人摘要和企业上下文，降低额度信息过期或不一致的问题。  
  [查看 PR](https://github.com/netease-youdao/LobsterAI/pull/3176)

- **[#3180] feat(skin): support direct image reuse and backdrop clarity presets**  
  AI Skin Designer 支持直接复用会话图片资源，可解析 `@图片1` 等媒体引用，并提供背景清晰度预设，扩展了会话素材向设计资产复用的路径。  
  [查看 PR](https://github.com/netease-youdao/LobsterAI/pull/3180)

### 3.5 DSH 工具与可观测性

- **[#3183] feat(dsh): render local HTML to PNG and JPEG in Electron**  
  新增 `lobsterai_render_html_to_image` 主机工具，使用 Electron 内置 Chromium 将本地 HTML 渲染为 PNG/JPEG；支持单文件或最多 20 个文件的批量转换，以及固定视口或整页截图。这使 Agent 具备将 HTML 报告直接转成图片交付物的能力。  
  [查看 PR](https://github.com/netease-youdao/LobsterAI/pull/3183)

- **[#3174] feat(dsh): forward host diagnostics to the main log**  
  将 DSH Host 中 Cordis 的 info、warn、error 日志转发至 Electron 主进程每日日志，并加入凭据过滤、无颜色输出、单条 2 KiB 上限和卸载时清理机制，增强线上问题诊断能力。  
  [查看 PR](https://github.com/netease-youdao/LobsterAI/pull/3174)

### 进展评估

今日 16 条关闭 PR 覆盖 **协作配置、办公文档、媒体预览、模型切换、微信授权、任务管理、MCP 工具、HTML 转图和日志诊断** 等多个层面，项目功能完整度与迁移稳定性均有明显推进。与此同时，缺少新 Release 和公开用户反馈，尚不能确认这些改动的正式交付范围及真实使用效果。

---

## 4. 社区热点

> 今日数据中的所有 PR 均显示 **0 评论、0 点赞**，Issues 更新为 0，因此没有可验证的“讨论最活跃”条目。以下按技术影响范围与功能重要性排序，而非按社区互动量排序。

1. **[#3186] Artifacts 独立 Word 面板与办公编辑器升级**  
   该 PR 同时涉及渲染进程、主进程、Cowork 和 Artifacts，是今日范围最广的功能之一，可能显著影响办公文档创建、编辑及预览体验。  
   [查看 PR](https://github.com/netease-youdao/LobsterAI/pull/3186)

2. **[#3182] DSH 升级后保留微信授权**  
   直接解决升级后重复扫码和重复错误提示的问题，属于高敏感的用户登录与账号绑定场景。  
   [查看 PR](https://github.com/netease-youdao/LobsterAI/pull/3182)

3. **[#3187] 降级后保留 Agent 协作配置**  
   面向多 Agent 协作及版本回退场景，回应了配置持久化与跨版本兼容诉求。  
   [查看 PR](https://github.com/netease-youdao/LobsterAI/pull/3187)

4. **[#3183] HTML 渲染为 PNG/JPEG**  
   将 Agent 输出从文本或 HTML 扩展为可直接交付的图像产物，体现出对可视化内容生成工作流的投入。  
   [查看 PR](https://github.com/netease-youdao/LobsterAI/pull/3183)

社区参与度方面，今日 **0 个 Issue 更新、16 个 PR 均为 0 评论/0 点赞**，反映数据窗口内没有形成可见的公开讨论。建议在后续日报中持续跟踪评论、Reaction、首次响应时间和 Review 周期，避免仅以 PR 数量判断项目健康度。

---

## 5. Bug 与稳定性

### 高优先级

- **[#3182] DSH 升级导致微信授权失效，需要重新扫码**  
  **影响：** 已绑定微信机器人在升级后无法继续使用既有登录状态，并可能在设置页看到重复错误消息。  
  **状态：** 已有修复 PR，且已关闭。  
  [查看 PR](https://github.com/netease-youdao/LobsterAI/pull/3182)

- **[#3187] 降级后 Agent 协作模式或允许列表丢失**  
  **影响：** 用户可能失去多 Agent 协作配置，且未变更的选择在重启后无法保持。  
  **状态：** 已有修复 PR，且已关闭。  
  [查看 PR](https://github.com/netease-youdao/LobsterAI/pull/3187)

- **[#3173] 已关联 Artifacts 无法恢复及 MCP 工具注册时序异常**  
  **影响：** 历史文件可能不出现在资料库中；若服务尚未完成工具注册便派发任务，可能造成工具不可用或调用失败。  
  **状态：** 已有修复 PR，且已关闭。  
  [查看 PR](https://github.com/netease-youdao/LobsterAI/pull/3173)

### 中优先级

- **[#3178] DSH 媒体预览丢失、模型标签不准确**  
  **影响：** 图片编辑消息无法正确展示，文本模型执行图像相关回合时尤其明显；同时实际模型标识可能与用户预期不一致。  
  **状态：** 已有修复 PR，且已关闭。  
  [查看 PR](https://github.com/netease-youdao/LobsterAI/pull/3178)

- **[#3177] 桌面迁移回归：备份、导入、消息编辑及版本切换异常**  
  **影响：** 涉及数据保护和历史对话编辑能力，迁移期间可能使用户无法按预期操作。手动备份与导入目前被禁用并以本地化开发提示替代。  
  **状态：** 主要回归已有修复 PR，且已关闭；手动备份/导入功能仍需后续恢复并验证。  
  [查看 PR](https://github.com/netease-youdao/LobsterAI/pull/3177)

- **[#3172] 导出日志时提示可选日志缺失、DSH 会话预设丢失**  
  **影响：** 导出过程可能出现误导性告警；模型选择无法稳定延续，增加重复配置成本。  
  **状态：** 已有修复 PR，且已关闭。  
  [查看 PR](https://github.com/netease-youdao/LobsterAI/pull/3172)

### 低优先级或诊断增强

- **[#3174] DSH Host 诊断信息未完整进入主日志**  
  **影响：** 虽未直接表现为用户功能故障，但会增加迁移问题、插件错误和 MCP 异常的排查难度。  
  **状态：** 已通过日志转发 PR 增强，且已关闭。  
  [查看 PR](https://github.com/netease-youdao/LobsterAI/pull/3174)

---

## 6. 功能请求与路线图信号

今日没有新的用户 Issue，因此下列信号主要来自已关闭 PR，不能视为正式产品承诺。

### 6.1 多智能体协作与任务治理

- Agent 协作允许列表、协作模式跨保存、重启和版本降级持久化，说明多 Agent 协作正在成为稳定使用场景。  
  [PR #3187](https://github.com/netease-youdao/LobsterAI/pull/3187)
- 置顶任务、手动排序、状态悬浮卡片和模型切换确认，表明路线正从“执行任务”转向“管理大量并发任务”。  
  [PR #3179](https://github.com/netease-youdao/LobsterAI/pull/3179)

**下一版本可能方向：** 更完整的任务中心、任务筛选与排序、协作配置迁移、模型切换保护。

### 6.2 Artifacts 与 Office 文档工作流

- 独立 Word 面板、办公编辑器升级、空白文档创建、行内重命名、目录视图和媒体预览共同构成较完整的 Office 产物管理链路。  
  [PR #3186](https://github.com/netease-youdao/LobsterAI/pull/3186) · [PR #3181](https://github.com/netease-youdao/LobsterAI/pull/3181)

**下一版本可能方向：** 文档模板、更多文件格式、跨产物关联、AI 辅助编辑和更成熟的预览/导出体验。

### 6.3 Agent 内容生成与多模态交付

- HTML 批量转 PNG/JPEG 工具使 Agent 能直接生成视觉化报告；AI Skin Designer 对会话图片的复用则强化了“对话产物进入设计流程”的能力。  
  [PR #3183](https://github.com/netease-youdao/LobsterAI/pull/3183) · [PR #3180](https://github.com/netease-youdao/LobsterAI/pull/3180)

**下一版本可能方向：** 图像生成结果直接进入 Artifacts、HTML/网页预览与截图一体化、更多视觉导出格式。

### 6.4 首页发现与模板生态

- 首页 Showcase Hub、示例重混和快捷操作国际化表明项目开始建设案例发现与复用入口。  
  [PR #3175](https://github.com/netease-youdao/LobsterAI/pull/3175)

**下一版本可能方向：** 模板市场、案例收藏/分享、场景化 Agent 启动和更丰富的一键工作流。

### 6.5 企业与账号体验

- 额度徽标、轻量刷新、微信授权迁移和数据隐私设置独立标签页，反映账号能力、企业额度与隐私配置正在成为一等入口。  
  [PR #3176](https://github.com/netease-youdao/LobsterAI/pull/3176) · [PR #3182](https://github.com/netease-youdao/LobsterAI/pull/3182) · [PR #3185](https://github.com/netease-youdao/LobsterAI/pull/3185)

---

## 7. 用户反馈摘要

今日没有 Issues 评论，也没有可用的 PR 评论，因此无法提取真实用户原声、满意点或不满意点。

从已关闭 PR 的修复目标可以间接观察到以下使用痛点：

- **升级/降级不应破坏账号和配置：** 微信重新扫码、Agent 协作模式丢失、模型预设丢失，均说明用户对跨版本连续使用有明确需求。
- **对话产物需要稳定预览：** 图片预览丢失、Office 文件无法完整创建和浏览，说明文档与媒体链路此前存在明显断点。
- **多任务需要更清晰的组织方式：** 置顶、排序、筛选和切换确认反映出任务并发增加后，用户需要更强的控制感和防误操作能力。
- **AI 输出需要可交付格式：** HTML 转图片与图片资源复用，表明用户不仅消费文本回答，也需要将结果继续用于报告、演示或设计。

以上均为**基于代码变更目标的推断**，不能替代真实用户反馈。

---

## 8. 待处理积压

- **无长期未响应的 Issue 可确认。** 过去 24 小时 Issues 更新为 0，数据中未提供更长时间窗口的开放 Issue 列表，因此无法判断是否存在更早的未响应问题。
- **无待合并 PR。** 今日 16 条 PR 均已合并或关闭，当前没有明确的代码合并积压。
- **需要关注发布积压。** 今日没有新版本，但存在多个用户可见的重要改动，包括微信授权迁移、Artifacts 办公能力和 Agent 协作修复；应尽快通过 Release 或更新日志确认交付批次。  
  [查看 Releases](https://github.com/netease-youdao/LobsterAI/releases)
- **需要关注功能恢复项。** [#3177](https://github.com/netease-youdao/LobsterAI/pull/3177) 暂时禁用了手动备份和导入入口；虽然保留了底层逻辑，但正式开放前仍需补齐界面入口、用户提示和回归测试。
- **建议补充用户反馈追踪。** 鉴于今日无评论、无点赞数据，维护者可在后续 Release 中重点收集 DSH 升级、微信绑定恢复和 Office 文档创建方面的实际反馈。

---

## 项目健康度结论

**综合健康度：良好，但发布与社区信号偏弱。**

今日 PR 数量高、覆盖面广，且多项 DSH 迁移回归、微信授权和协作配置问题已有对应修复，说明维护团队响应和收口能力较强。当前主要风险不在代码积压，而在于：

1. 大量功能与修复尚未通过新版本向用户交付；
2. 缺少 Issues 和评论数据，无法验证真实需求优先级及用户满意度；
3. 多个 PR 涉及主进程、渲染进程、Cowork 和 Artifacts 等高耦合模块，需要持续进行跨版本回归验证。

建议下一阶段优先完成 **Release 发布与迁移说明、微信/DSH 升级回归、Artifacts 文档链路端到端测试，以及公开反馈收集**。

</details>

<details>
<summary><strong>QwenPaw</strong> — <a href="https://github.com/agentscope-ai/QwenPaw">agentscope-ai/QwenPaw</a></summary>

# QwenPaw 项目动态日报

**统计日期：2026-11-25**  
**数据范围：过去 24 小时 GitHub Issues / Pull Requests 更新**  
**整体判断：开发活动很高，但稳定性、安全边界与模型适配问题明显增多，项目处于“高并发修复 + 大规模架构演进”阶段。**

---

## 一、今日速览

过去 24 小时共更新 **22 条 Issues**、**41 条 PR**，其中 Issue 新开或持续活跃 **17 条**、关闭 **5 条**；PR 待合并 **31 条**、合并或关闭 **10 条**，整体提交活跃度较高。

今日无正式版本发布，但开发方向较集中：一方面推进会话持久化、运行时配置、Linux 桌面打包和插件发布流程；另一方面，模型上下文窗口识别、媒体工具结果、Windows 子进程清理、MCP 错误语义和 Console 稳定性问题集中暴露。

社区反馈显示，当前主要痛点不是功能数量不足，而是**多模型接入准确性、长会话可靠性、控制台交互稳定性以及安全策略实际可执行性**。大量 PR 仍处于 Open 或 Under Review 状态，积压规模已经明显高于日常维护吞吐。

**项目健康度：中等偏活跃，但需关注稳定性与合并积压。** 今日缺陷和安全设计类反馈较多，若相关修复不能及时收敛，可能影响后续 Beta 的使用稳定性。

---

## 二、项目进展

今日没有新版本发布。虽然数据中提及 **v2.3.1-beta.1**，但该版本属于此前发布的预发布版本，且存在尚未关闭的安装验证 Issue，因此不应视作今日新增 Release。

### 今日已关闭或合并的重要 PR

#### 1. Creator 2.0.7：完善评审恢复与媒体处理

- PR：[#8886 feat(creator): release 2.0.7 with review recovery and media fixes](https://github.com/agentscope-ai/QwenPaw/pull/8886)
- 状态：已关闭，代码大概率已合并
- 主要内容：
  - 修复 Creator 评审拒绝后残留失效 artifact 版本引用的问题；
  - 改进评审恢复能力；
  - 修复媒体资源处理问题；
  - 避免因引用缺失导致评审无法完成。
- 对应问题：[Issue #8592](https://github.com/agentscope-ai/QwenPaw/issues/8592)

这是今日对 Creator 工作流影响较大的修复，尤其针对“评审轮次无法决策”的阻断性问题。

#### 2. 插件存储迁移兼容 Windows 路径前缀

- PR：[#8897 fix(plugins): handle Windows path prefixes in storage migration](https://github.com/agentscope-ai/QwenPaw/pull/8897)
- 状态：已关闭
- 主要内容：修复 Windows 路径前缀在插件存储迁移流程中的处理问题，降低跨平台升级失败风险。

#### 3. 插件通道关闭测试稳定性调整

- PR：[#8898 test(plugins): stabilize SDK channel worker shutdown test](https://github.com/agentscope-ai/QwenPaw/pull/8898)
- 状态：已关闭
- 主要内容：稳定 SDK channel worker 的关闭流程测试，减少异步退出相关的偶发测试失败。

#### 4. Skill Pool 自动同步菜单测试更新

- PR：[#8896 fix(e2e): update skill pool auto-sync menu tests](https://github.com/agentscope-ai/QwenPaw/pull/8896)
- 状态：已关闭
- 主要内容：更新技能池自动同步菜单的端到端测试，以适配当前界面行为。

#### 5. Office Skills 与 Anthropic 2026 年 7 月更新同步

- PR：[#8479 feat(skills): sync Office skills with Anthropic July 2026 update](https://github.com/agentscope-ai/QwenPaw/pull/8479)
- 状态：已关闭
- 主要内容：
  - 同步 DOCX、PPTX、XLSX 技能；
  - 引入 Anthropic 2026 年 7 月 Office Skills 更新；
  - 强化文档、演示文稿和表格生成能力。
- 该 PR 首次贡献者标签值得肯定，代表社区开始直接参与技能生态维护。

### 今日重点待合并进展

#### 1. 会话历史改为追加式持久化

- PR：[#8532 feat(chat): add append-only session storage, paginated history and native Turn forks](https://github.com/agentscope-ai/QwenPaw/pull/8532)
- 状态：Open / Under Review，规模 XXXL
- 主要内容：
  - 引入按会话持久化的 SQLite 追加式历史；
  - 增加历史记录分页；
  - 支持原生 Turn 分叉；
  - 改善运行时恢复、重连与历史一致性。
- 价值：这是会话架构的重要演进，有望解决长对话加载成本高、历史状态不一致和恢复困难等问题。
- 风险：改动规模大，涉及存储模型、运行时和会话生命周期，合并前需重点验证兼容性与迁移路径。

#### 2. 统一 ACP 与原生执行的会话配置

- PR：[#8586 refactor(runtime): unify session configuration for ACP and native execution](https://github.com/agentscope-ai/QwenPaw/pull/8586)
- 状态：Open，规模 XXXL
- 主要内容：
  - ACP 与原生执行共用会话配置快照；
  - 同一 Agent 的不同会话可使用不同模型与运行参数；
  - 不再因会话选择而修改已保存的全局默认值。
- 价值：直接面向多 Agent、多会话并行使用中的配置串扰问题。

#### 3. Console 支持反向代理子路径部署

- PR：[#8719 feat(console): support runtime base-path deployment](https://github.com/agentscope-ai/QwenPaw/pull/8719)
- 状态：Open，规模 XXL
- 主要内容：新增 `QWENPAW_BASE_PATH`，支持 Console 和 API 部署在反向代理前缀下。
- 价值：提升企业内网、NAS、Ingress 和子路径反向代理环境下的可部署性。

#### 4. Linux 桌面版 deb / AppImage 打包

- PR：[#8444 feat(desktop): add Linux deb and AppImage packaging to the Tauri build](https://github.com/agentscope-ai/QwenPaw/pull/8444)
- 状态：Open，规模 XL
- 主要内容：补充 Linux deb 和 AppImage 构建产物，弥补当前 Linux 桌面发行物缺失。
- 价值：降低 Linux 用户的安装门槛，也使桌面端覆盖范围从 Windows/macOS 向三平台扩展。

#### 5. 修复 Windows 后端异常退出后残留 llama-server

- PR：[#8841 fix(plugins): keep llama-server from outliving a crashed backend](https://github.com/agentscope-ai/QwenPaw/pull/8841)
- 状态：Open / Under Review
- 对应问题：[Issue #8830](https://github.com/agentscope-ai/QwenPaw/issues/8830)
- 主要内容：在后端崩溃或被强制终止时清理本地模型 `llama-server.exe` 进程。
- 预期收益：避免重复启动后进程累积、内存耗尽及本地模型无法启动。

#### 6. 修复 Console 滚动位置跳回

- PR：[#8901 Fix/console transcript scroll 8888](https://github.com/agentscope-ai/QwenPaw/pull/8901)
- 状态：Open
- 对应问题：[Issue #8888](https://github.com/agentscope-ai/QwenPaw/issues/8888)
- 主要内容：在新增消息、历史重载、推理块展开或折叠时保持当前消息的视口偏移；若锚点消息被删除，则回到最新消息。
- 预期收益：改善长对话阅读体验。

#### 7. 媒体处理增加内联预算和遗漏报告

- PR：[#8785 fix(media): enforce the inline budget, rescale after a refusal, and report omissions](https://github.com/agentscope-ai/QwenPaw/pull/8785)
- 状态：Open / Under Review，规模 XXL
- 主要内容：
  - 同时执行媒体字节预算与尺寸限制；
  - 被模型拒绝后重新缩放；
  - 对无法内联的媒体明确报告遗漏。
- 关联反馈：[Issue #8887](https://github.com/agentscope-ai/QwenPaw/issues/8887)

#### 8. 插件发布环境锁与 Docker MCP 前端资源

- PR：[#8900 fix(plugins): release environment locks for offline preflight](https://github.com/agentscope-ai/QwenPaw/pull/8900)
- PR：[#8902 fix(docker): include bundled mcp frontend assets](https://github.com/agentscope-ai/QwenPaw/pull/8902)
- 状态：均为 Open
- 主要内容：
  - 锁定插件发布环境，确保离线预检可重复；
  - 修复 Docker 构建忽略 `dist`，导致 MCP Console 前端资源未进入 wheel 的问题。

---

## 三、社区热点

### 1. Issue #6274：新增 `ask_user_question`，支持 Human-in-the-Loop

- 链接：[Issue #6274](https://github.com/agentscope-ai/QwenPaw/issues/6274)
- 评论数：4，为今日展示 Issues 中最高
- 状态：Open，创建于 2026-07-20，更新于 2026-11-24
- 诉求：
  - 在遇到模糊或高风险任务时暂停执行；
  - 向用户抛出结构化多选问题；
  - 提供“其他/自定义输入”兜底；
  - 根据用户回答恢复原任务；
  - 避免 Agent 猜测需求或直接执行有副作用的操作。

**分析：** 这是典型的 Agent 可控性与安全交互需求，与今日出现的多项安全设计 Issue 相互印证。若能实现结构化暂停—等待—恢复机制，可显著改善审批、澄清和任务确认流程。当前已更新较久但评论热度较高，适合列入下一版本重点需求池。

### 2. Issue #8891：内置 Provider 缺少 GLM-5.3/5.4 上下文信息

- 链接：[Issue #8891](https://github.com/agentscope-ai/QwenPaw/issues/8891)
- 评论数：3
- 诉求：
  - 内置静态上下文表缺少 `glm-5.3`、`glm-5.4`；
  - 缺少 GLM 系列兜底规则；
  - `catalog_only` Provider 无法拉取上下文元数据；
  - 新模型因此错误使用 128k 默认值。

**分析：** 问题直接关系到长上下文能力和自动压缩阈值，属于 Provider 适配基础设施缺陷。近期模型迭代速度快，静态表和动态发现机制需要同时演进，否则新模型上线即可能采用错误配置。

### 3. Issue #8890：OpenAI-compatible 模型发现忽略 `max_input_tokens`

- 链接：[Issue #8890](https://github.com/agentscope-ai/QwenPaw/issues/8890)
- 评论数：2
- 诉求：自定义 OpenAI-compatible Provider 返回 `max_input_tokens` 时，发现逻辑没有采用该值，导致上下文窗口错误。

**分析：** 与 #8891 属于同一类“模型能力元数据失真”问题，可能同时影响上下文上限、提示词裁剪和上下文压缩策略。建议统一 Provider 模型发现规范，而不是分别修补字段。

### 4. Issue #8893：Console 模型设置缺少 Agent 作用域

- 链接：[Issue #8893](https://github.com/agentscope-ai/QwenPaw/issues/8893)
- 评论数：2
- 诉求：
  - Agent 卡片中的“模型”入口实际打开全局模型设置；
  - 无法为单个 Agent 独立配置模型；
  - 已配置 Agent 模型时，聊天选择器可能显示“无模型”。

**分析：** 这是产品模型与底层配置模型不一致的问题。PR #8586 正在统一会话级运行配置，说明项目已意识到多会话/多 Agent 配置隔离的重要性；后续可能需要将模型配置也正式纳入 Agent Profile 与 Session Config 体系。

### 5. Issue #8887：工具返回媒体导致后续消息全部 400

- 链接：[Issue #8887](https://github.com/agentscope-ai/QwenPaw/issues/8887)
- 评论数：1
- 诉求：
  - `view_video`、`send_file_to_user` 等工具把媒体 data block 写回会话上下文；
  - 非多模态模型收到这些数据块后返回 400；
  - 错误会污染后续整段对话。

**分析：** 属于高影响稳定性缺陷，可能造成单次工具调用后整段会话不可用。PR #8785 覆盖部分媒体预算和缩放逻辑，但 Issue 还涉及“是否应该将媒体块回注给不支持多模态的模型”，仍需明确会话序列化策略。

---

## 四、Bug 与稳定性

### 严重级别：阻断或高风险

#### 1. 非多模态模型在媒体工具结果后持续 400

- Issue：[#8887](https://github.com/agentscope-ai/QwenPaw/issues/8887)
- 现象：一次媒体工具调用即可污染会话，之后所有消息均失败。
- 影响范围：视频查看、文件发送、多模态工具链。
- 已有修复：**部分相关**  
  - PR [#8785](https://github.com/agentscope-ai/QwenPaw/pull/8785) 正在处理媒体内联预算和遗漏报告；
  - 但是否禁止媒体块进入非多模态模型上下文，仍需明确。

#### 2. Creator 评审轮次无法完成

- Issue：[#8592](https://github.com/agentscope-ai/QwenPaw/issues/8592)
- 现象：REJECT 可能因 artifact 引用缺失返回 422，并伴随过期资源 URL 502、FFmpeg 路径未生效等问题。
- 影响范围：Creator 审核、拒绝、重新生成流程。
- 已有修复：**是**
  - PR [#8886](https://github.com/agentscope-ai/QwenPaw/pull/8886) 已关闭，涉及 Creator 2.0.7 的评审恢复和媒体修复。
- 建议：合并后确认三个子缺陷是否全部覆盖，而非只修复主阻塞。

#### 3. Windows 后端重启后 llama-server 进程堆积

- Issue：[#8830](https://github.com/agentscope-ai/QwenPaw/issues/8830)
- 现象：后端异常退出后 `llama-server.exe` 残留，反复重启会持续累积进程、耗尽内存。
- 影响范围：Windows 本地模型、桌面端、反复重启场景。
- 已有修复：**是，尚未确认合并**
  - PR [#8841](https://github.com/agentscope-ai/QwenPaw/pull/8841)。

#### 4. Console 插件路由无法注册

- Issue：[#8851](https://github.com/agentscope-ai/QwenPaw/issues/8851)
- 现象：import map 重写入口 chunk 后产生双加载，插件路由最终无法注册。
- 影响范围：所有前端插件应用。
- 已有修复：当前列表中**未发现明确对应的修复 PR**。

### 中高严重级别

#### 5. OpenAI-compatible 流式请求中的过载错误绕过重试

- Issue：[#8877](https://github.com/agentscope-ai/QwenPaw/issues/8877)
- 现象：HTTP 200 后 SSE 内返回服务器过载错误，客户端因流中无状态码而未触发重试。
- 影响范围：OpenAI-compatible 网关、兼容服务、云端模型高负载场景。
- 已有修复：当前列表中**未发现明确修复 PR**。
- 建议：将 SSE 错误标准化为可重试异常，而不是依赖 HTTP 状态码。

#### 6. MCP streamable_http 将服务端 4xx 伪装为“未连接”

- Issue：[#8875](https://github.com/agentscope-ai/QwenPaw/issues/8875)
- 现象：服务端 4xx 被掩盖为未连接，并触发 session 拆除。
- 影响范围：远程 MCP 服务、认证失败、协议不兼容。
- 已有修复：当前列表中**未发现明确修复 PR**。
- 建议：保留 HTTP 状态码、响应体和远端错误类型，避免无意义重连。

#### 7. 代码模式下 `run_tool_batch` 调用失败

- Issue：[#8903](https://github.com/agentscope-ai/QwenPaw/issues/8903)
- 现象：CodeModeToolkit 仅暴露 `run_code`，其他工具位于内部 catalog，脚本调用路径不兼容。
- 影响范围：代码模式批量工具调用。
- 已有修复：当前列表中**未发现明确修复 PR**。

#### 8. 模型上下文窗口识别错误

- Issue：[#8891](https://github.com/agentscope-ai/QwenPaw/issues/8891)
- Issue：[#8890](https://github.com/agentscope-ai/QwenPaw/issues/8890)
- 现象：GLM 新版本和自定义 Provider 的上下文能力未被发现，错误采用 128k 默认值。
- 影响范围：长对话、上下文压缩、提示词预算。
- 已有修复：当前列表中**未发现明确修复 PR**。

### 中等严重级别

#### 9. Console 对话滚动位置跳回数屏

- Issue：[#8888](https://github.com/agentscope-ai/QwenPaw/issues/8888)
- 现象：发送消息、上下文压缩或推理块折叠后，视口突然跳回。
- 已有修复：**是**
  - PR [#8901](https://github.com/agentscope-ai/QwenPaw/pull/8901)。

#### 10. Console Agent 模型选择范围错误

- Issue：[#8893](https://github.com/agentscope-ai/QwenPaw/issues/8893)
- 已有相关架构 PR：
  - [#8586](https://github.com/agentscope-ai/QwenPaw/pull/8586) 统一 ACP 与原生执行配置；
  - 但 Agent 级模型设置入口和选择器显示问题仍需单独处理。

#### 11. MCP stream 结果折叠无法识别 URL 引用媒体

- Issue/PR 关联修复：
  - PR [#8487](https://github.com/agentscope-ai/QwenPaw/pull/8487)
- 状态：Open
- 影响：上下文压缩时，长媒体结果可能未被正确折叠。

#### 12. Docker 构建丢失 MCP Console 前端资源

- 修复 PR：[#8902](https://github.com/agentscope-ai/QwenPaw/pull/8902)
- 状态：Open
- 影响：Docker 中后端可用，但 MCP Console 页面无法加载。

---

## 五、功能请求与路线图信号

### 1. Human-in-the-Loop 结构化提问工具

- 需求：[Issue #6274](https://github.com/agentscope-ai/QwenPaw/issues/6274)
- 可能纳入下一版本的依据：
  - 与 Agent 自主执行、高风险操作确认的核心定位一致；
  - 与近期安全治理类 Issue 同时升温；
  - 当前仅需增加工具、Console 交互和任务恢复机制。
- 建议方向：
  1. 结构化单选/多选；
  2. 自定义输入兜底；
  3. 明确的暂停状态；
  4. 原始任务可恢复；
  5. 回答记录进入会话历史。

### 2. AI Prompt Polishing

- 需求：[Issue #8892](https://github.com/agentscope-ai/QwenPaw/issues/8892)
- 用户希望在聊天输入框增加“AI Prompt 润色”按钮，自动优化提示词。
- 可能纳入下一版本的依据：实现边界清晰，适合作为 Console 轻量功能快速交付。
- 风险：需要明确润色是否静默替换原文、是否展示差异、是否支持用户确认，以避免误改指令。

### 3. Agent 级模型配置

- 需求：[Issue #8893](https://github.com/agentscope-ai/QwenPaw/issues/8893)
- 可能纳入下一版本的依据：PR [#8586](https://github.com/agentscope-ai/QwenPaw/pull/8586) 正在统一会话配置快照。
- 建议将模型选择拆分为：
  - Agent 默认模型；
  - 会话临时覆盖；
  - 单次请求覆盖；
  - 运行时实际解析结果回显。

### 4. Linux 桌面发行物

- PR：[#8444](https://github.com/agentscope-ai/QwenPaw/pull/8444)
- 这是明确的发行能力扩展。若构建、签名和依赖兼容问题可控，deb/AppImage 很适合进入下一轮桌面发布。

### 5. 长期记忆治理体系

- 租户级隔离：[Issue #8881](https://github.com/agentscope-ai/QwenPaw/issues/8881)
- 引用计数与状态化归档：[Issue #8882](https://github.com/agentscope-ai/QwenPaw/issues/8882)
- 路线图信号：
  - 长期记忆需要从“目录约定隔离”升级为“检索层强制隔离”；
  - 记忆条目需要 TTL、引用跟踪、状态转换和衰减；
  - 当前更偏架构设计 Issue，尚无直接实现 PR，短期内不一定进入正式版本，但值得列入中期路线图。

### 6. Coding Mode 最小出站策略

- 需求：[Issue #8878](https://github.com/agentscope-ai/QwenPaw/issues/8878)
- 诉求：在现有 Landlock ABI v4 端口规则之上，为元数据端点默认拒绝，并支持策略文件白名单。
- 可能纳入下一版本的依据：与技能扫描、沙箱进程限制、安全默认策略等一组安全 Issue 同时出现，说明项目正在系统化加固 Coding Mode。
- 建议优先形成统一安全配置，而不是分散在多个组件中。

---

## 六、安全与隔离专项观察

今日新增一组由同一作者集中提交的设计与安全类 Issues，暴露出沙箱和记忆系统的关键缺口：

| 项目 | Issue | 核心风险 | 状态 |
|---|---|---|---|
| Skill 扫描默认告警模式放行 CRITICAL | [#8880](https://github.com/agentscope-ai/QwenPaw/issues/8880) | 恶意技能可继续安装；超时 fail-open | Open |
| `max_processes` / `max_memory_mb` 未实际执行 | [#8879](https://github.com/agentscope-ai/QwenPaw/issues/8879) | 沙箱资源限制形同虚设 | Open |
| Coding Mode 缺少最小出站策略 | [#8878](https://github.com/agentscope-ai/QwenPaw/issues/8878) | 代码模式可能访问非预期网络端点 | Open |
| 记忆检索层缺少强制租户隔离 | [#8881](https://github.com/agentscope-ai/QwenPaw/issues/8881) | 跨 Agent 或租户检索风险 | Open |
| 长期记忆缺少引用跟踪与衰减 | [#8882](https://github.com/agentscope-ai/QwenPaw/issues/8882) | 陈旧信息堆积和错误持续强化 | Open |

**风险判断：** 这组问题集中指向“配置项存在，但执行层并未真正落实”的系统性缺口。尤其是安全扫描 fail-open 和资源限制未执行，可能影响用户对沙箱安全声明的信任。建议将其作为独立安全里程碑处理，避免仅通过文档说明长期保留。

---

## 七、用户反馈摘要

### 真实使用场景

1. **多 Provider 混合部署**
   - 用户同时使用官方 Provider、自定义 OpenAI-compatible 网关和仅目录型 Provider；
   - 新模型上下文窗口频繁被错误识别为 128k；
   - 对应：[Issue #8891](https://github.com/agentscope-ai/QwenPaw/issues/8891)、[Issue #8890](https://github.com/agentscope-ai/QwenPaw/issues/8890)。

2. **Windows 桌面端与本地模型**
   - 后端重启、崩溃后残留 llama-server，造成内存持续增长；
   - 对应：[Issue #8830](https://github.com/agentscope-ai/QwenPaw/issues/8830)。

3. **Creator 多轮创作与审核**
   - 拒绝操作后评审状态卡死，旧资源引用、过期 URL 和 FFmpeg 配置共同影响恢复；
   - 对应：[Issue #8592](https://github.com/agentscope-ai/QwenPaw/issues/8592)。

4. **长会话 Console 阅读**
   - 推理块折叠、压缩或发送消息后，阅读位置会跳回数屏；
   - 对应：[Issue #8888](https://github.com/agentscope-ai/QwenPaw/issues/8888)。

5. **视频与文件工具调用**
   - 工具返回的媒体块进入上下文后，非多模态模型无法继续对话；
   - 对应：[Issue #8887](https://github.com/agentscope-ai/QwenPaw/issues/8887)。

6. **反向代理和 Docker 部署**
   - 用户需要子路径部署及完整 MCP Console 资源；
   - 对应：[PR #8719](https://github.com/agentscope-ai/QwenPaw/pull/8719)、[PR #8902](https://github.com/agentscope-ai/QwenPaw/pull/8902)。

### 主要不满意点

- **能力声明与实际行为不一致**：资源限制未执行、模型元数据未发现、Agent 模型显示异常。
- **错误语义不准确**：MCP 4xx 被显示为“未连接”，流内过载错误无法触发重试。
- **跨平台稳定性不足**：Windows 进程清理、Docker 前端资源、插件路径迁移均有兼容问题。
- **长会话体验不稳定**：历史存储仍处于大型重构阶段，Console 滚动和上下文压缩体验受到影响。
- **安全策略默认偏宽松**：CRITICAL 技能告警仍可安装，扫描超时也会放行。

### 积极信号

- Creator 2.0.7 评审恢复修复已关闭，说明 Creator 团队能快速响应核心工作流阻断问题；
- 社区主动贡献 Office Skills 同步；
- 多个 Issue 提供了较完整的复现环境、调用栈和预期行为，降低了维护者定位成本；
- 会话历史、会话配置和部署能力正在向架构化方向演进，而不是继续堆叠临时修补。

---

## 八、待处理积压

### 长期活跃但仍需维护者响应

#### Issue #6274：Human-in-the-Loop 工具

- 链接：[Issue #6274](https://github.com/agentscope-ai/QwenPaw/issues/6274)
- 创建时间：2026-07-20
- 评论数：4，为今日最活跃
- 积压判断：需求清晰、价值高，但缺少明确里程碑或负责人，应尽快给出“接受/拆分/排期”结论。

#### Issue #8830：Windows llama-server 孤儿进程

- 链接：[Issue #8830](https://github.com/agentscope-ai/QwenPaw/issues/8830)
- 创建时间：2026-11-20
- 已有修复 PR：[#8841](https://github.com/agentscope-ai/QwenPaw/pull/8841)
- 积压判断：修复已在评审，应优先完成合并和 Windows 崩溃场景回归测试。

### 长期大型 PR

#### PR #8532：追加式会话存储与 Turn 分叉

- 链接：[PR #8532](https://github.com/agentscope-ai/QwenPaw/pull/8532)
- 创建时间：2026-11-02
- 状态：Under Review，XXXL
- 风险：会话存储属于核心数据路径，改动面大；若长期不合并，会阻塞历史分页、恢复和分叉等相关工作。

#### PR #8444：Linux deb / AppImage 打包

- 链接：[PR #8444](https://github.com/agentscope-ai/QwenPaw/pull/8444)
- 创建时间：2026-10-26
- 状态：Open，XL
- 建议：明确 CI 目标、签名方式、glibc 兼容范围及 AppImage 构建稳定性。

#### PR #8586：统一 ACP 与原生执行会话配置

- 链接：[PR #8586](https://github.com/agentscope-ai/QwenPaw/pull/8586)
- 创建时间：2026-11-05
- 状态：Open，XXXL
- 建议：明确旧配置的迁移与兼容策略，并拆分审查范围，降低超大 PR 的合并成本。

#### PR #8719：Console 运行时 base path

- 链接：[PR #8719](https://github.com/agentscope-ai/QwenPaw/pull/8719)
- 创建时间：2026-11-13
- 状态：Open，XXL
- 建议：补充静态资源、API、WebSocket、重定向和插件路由的子路径回归测试。

#### PR #8785：媒体内联预算与缩放

- 链接：[PR #8785](https://github.com/agentscope-ai/QwenPaw/pull/8785)
- 创建时间：2026-11-17
- 状态：Under Review，XXL
- 建议：与 #8887 联合验证，确保非多模态模型不会再次接收不可处理的数据块。

### PR 数量积压信号

今日共更新 **41 条 PR**，其中 **31 条仍待合并**，只有 **10 条已合并或关闭**。即使考虑数据只展示其中 20 条 Issue，当前合并吞吐仍无法完全消化新增提交。

建议维护者：

1. 优先合并已有明确修复的 PR：
   - [#8841](https://github.com/agentscope-ai/QwenPaw/pull/8841)
   - [#8901](https://github.com/agentscope-ai/QwenPaw/pull/8901)
   - [#8902](https://github.com/agentscope-ai/QwenPaw/pull/8902)
   - [#8487](https://github.com/agentscope-ai/QwenPaw/pull/8487)
2. 对 XXXL/XXL PR 设置拆分或专项评审窗口；
3. 统一模型发现与上下文元数据规范，减少 #8890、#8891 一类重复修复；
4. 为安全类 Issues 明确安全里程碑、默认阻断策略和负责人；
5. 对长期无响应的高热需求给出路线图结论，减少重复提议。

---

## 九、今日结论

QwenPaw 今日呈现出明显的**工程扩张与质量收敛并行**特征。会话存储、运行时配置、跨平台桌面发行和部署能力正在快速推进，但模型元数据、媒体工具链、MCP 错误处理、Windows 本地模型清理及安全沙箱等问题也集中浮出。

短期应优先关注三条主线：

1. **稳定性优先**：解决媒体结果导致会话不可用、Windows 进程堆积、流式过载不重试和 MCP 错误误报；
2. **安全默认优先**：让技能扫描 fail-closed，并实际执行进程、内存和出站策略；
3. **合并与架构收敛**：推动 #8532、#8586、#8719 等大型 PR 明确拆分、评审和迁移方案。

整体上项目开发动能较强、社区反馈质量较高，但当前健康度受核心缺陷与合并积压制约。若下一阶段能把今日反馈中的高优先级问题转化为已合并修复，QwenPaw 的 Beta 可用性与可信度将明显提升。

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/NousResearch/hermes-agent">NousResearch/hermes-agent</a></summary>

# Hermes Agent 项目动态日报

**统计日期：2026-11-25**  
**项目：** [NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent)  
**统计口径：** 过去 24 小时 GitHub Issues、PR 与 Releases 活动

---

## 1. 今日速览

过去 24 小时共更新 **50 条 Issues**（48 条新开或活跃、2 条关闭）和 **50 条 PR**（43 条待合并、7 条已合并或关闭），另有 **2 个版本发布**，整体保持较高开发强度。当前工作主要集中在 **Agent 上下文与记忆压缩、Gateway/桌面端稳定性、Windows/Docker 兼容性，以及插件生态扩展**。  
今日 Issues 的讨论焦点明显偏向“长期上下文如何保持、可治理和可复用”，说明项目正在从单纯的模型调用框架继续向长期运行的个人 AI 工作台演进。与此同时，桌面端会话错位、Gateway 状态竞争、Windows 文件写入和 Docker 重启循环等高影响问题仍在积压。  
综合判断，项目健康度为 **中高**：发布与合并节奏活跃，功能路线清晰，但跨桌面、Gateway、后台服务和容器环境的可靠性压力较大，建议优先收敛 P1/P2 稳定性问题。

---

## 2. 版本发布

### v0.23.4

- **发布日期：** 2026-11-23
- **版本类型：** Patch
- **Release 链接：** [Hermes Agent v0.23.4](https://github.com/NousResearch/hermes-agent/releases/tag/v0.23.4)

该版本是自 v0.23.3 以来的稳定汇总版本，合并约 **229 个 PR**，主要覆盖：

- GitHub Release 产物；
- CLI 与安装器；
- Microsoft Store 桌面应用；
- Docker 镜像；
- Hermes Cloud。

#### 破坏性变更

Release Notes 未明确列出新的破坏性变更，属于汇总型 patch release。需要注意：大量 PR 被集中纳入一个版本，实际行为变化可能分散在 CLI、桌面端、Gateway、插件和配置体系中。

#### 迁移注意事项

1. **升级前备份配置与会话状态**，尤其是 `config.yaml`、插件目录和 Gateway 状态数据。
2. CLI、安装器和 Docker 用户应确认实际拉取到的版本均为 `v0.23.4`。
3. Windows 用户需特别检查 Gateway 自动启动、CUA Driver 调度任务及文件写入行为。
4. Docker 用户应检查升级后 `install.lock` 的属主及 UID 映射，避免进入重启循环。
5. 完整、经过整理的变更说明将在 **v0.24.0** 提供，因此生产环境升级前建议结合相关 PR/Issue 逐项核对。

### Canary 构建

- **版本：** `canary.20261124T064706Z-v0.23.3`
- **发布日期：** 2026-11-24
- **链接：** [查看 Canary Release](https://github.com/NousResearch/hermes-agent/releases/tag/canary.20261124T064706Z-v0.23.3)

该版本用于尝鲜和回归验证，不建议用于要求稳定性的生产部署。

---

## 3. 项目进展

过去 24 小时有 **7 条 PR 已合并或关闭**。以下为值得关注的已关闭/已合并进展；由于提供数据未包含合并提交明细，无法对每条 PR 确认是否实际合入 `main`。

### 3.1 备份与快照可靠性增强

- **PR：** [#157086 — fsync archives and snapshots before publishing them](https://github.com/NousResearch/hermes-agent/pull/157086)
- **状态：** CLOSED
- **推进内容：**
  - 对完整 ZIP 备份、Profile/Kanban 导出和快速快照在发布前执行 `fsync`；
  - 修复“备份已提示完成，但断电后文件尾仍为零、归档不可用”的风险；
  - 避免仅依赖原子重命名却未保证底层数据落盘的问题。

**影响：** 提升备份产物在崩溃和断电场景下的完整性，是生产可用性的关键改进。

### 3.2 敏感信息脱敏增强

- **PR：** [#155545 — Mask passwords in DB URL query strings](https://github.com/NousResearch/hermes-agent/pull/155545)
- **状态：** CLOSED
- **推进内容：**
  - 对 `jdbc:postgresql://...?user=...&password=...`、`mysql://...?password=...` 等数据库 URL 查询参数中的密码进行脱敏；
  - 防止凭据进入工具输出和日志。

**影响：** 降低日志泄密风险。不过该 PR 自身注明脱敏属于启发式机制，不应视为完整的安全边界。

### 3.3 Gateway 日志隐私与噪声降低

- **PR：** [#137185 — Keep message text out of INFO logs; quiet memory trim](https://github.com/NousResearch/hermes-agent/pull/137185)
- **状态：** CLOSED
- **推进内容：**
  - 不再在 INFO 日志中记录用户消息正文及引用文本片段；
  - 降低周期性 memory trim 信息日志的噪声。

**影响：** 改善生产日志的可读性、隐私性与可观测性。

### 3.4 A2A 任务生命周期修复进入评审

- **PR：** [#147254 — Preserve task results after client disconnects](https://github.com/NousResearch/hermes-agent/pull/147254)
- **状态：** OPEN
- **推进内容：**
  - 将已接受的 A2A 任务与 HTTP 观察连接解耦；
  - 客户端流式连接断开时，不再把仍在执行的任务错误标记为失败；
  - 收紧任务状态转换，避免最终结果无法通过 `GetTask` 获取。

**判断：** 这是多智能体协作链路的稳定性修复，若通过评审，预计应进入下一补丁版本。

### 3.5 文档站与插件目录部署自动化

- **PR：** [#159955 — Docs site and plugin catalog go live on the first deploy](https://github.com/NousResearch/hermes-agent/pull/159955)
- **状态：** OPEN
- **推进内容：**
  - 上传成功后自动等待并重试发布步骤；
  - 避免 PR 已合并，但文档站和插件目录仍需人工重新部署。

**判断：** 直接改善生态发布效率，预计优先级较高，但上线前仍需验证重试不会造成重复发布。

---

## 4. 社区热点

### 4.1 文档链网络：长期记忆的读取、治理与压缩

- **Issue：** [#143379 — RFC: The Doc-Chain Substrate's Network](https://github.com/NousResearch/hermes-agent/issues/143379)
- **评论数：** 53
- **状态：** OPEN
- **标签重点：** `security`、`agent`、`tools`、`file`、`memory`、`compression`、`P4`

这是今日讨论最密集的 Issue。核心诉求不是简单增加一个记忆 API，而是建立一套能够跨会话压缩长期存活的“文档链”：

- 记录在上下文压缩后仍保留来源和可追溯性；
- Agent 可以主动重读持久记录，而不是要求用户重复；
- 对文档访问、写入、压缩和治理建立统一协议；
- 同时考虑安全边界、权限以及长期维护成本。

**背后诉求：** 个人 AI 助手需要类似“个人知识底座”的能力。当前 Hermes 已具备会话、文件、记忆和压缩模块，但跨会话证据链、来源保留和长期治理仍是明显短板。

**路线判断：** 这是架构级 RFC，短期不会直接成为单一功能发布，但可能形成下一阶段 Memory/Context Engine 的核心设计方向。

### 4.2 主动任务路线图：后台主动帮助的噪声与控制

- **Issue：** [#158538 — Proactivity roadmap](https://github.com/NousResearch/hermes-agent/issues/158538)
- **评论数：** 12
- **状态：** OPEN
- **标签重点：** `feature`、`agent`、`cron`、`memory`、`P3`

Issue 对比了 Hark、OpenAI dots、Meta Muse 和 Grok Bot 的后台主动运行机制，关注点是：

- 用户主动授权定时任务；
- 后台再执行一轮“寻找可帮助事项”的扫描；
- 主动任务必须显示提示词、执行范围和可见状态；
- 避免宽泛读取、延迟执行和通知噪声。

**背后诉求：** 用户期待助手不只被动响应，还能在后台发现机会；同时希望系统保持“用户批准、可见、可控”的自动化边界。

**路线判断：** 该讨论与 `delegate_task` 循环上限、主动结果裁剪及 Cron provider 绑定等现有问题高度相关，很可能演化为下一版本的“主动任务”专项。

### 4.3 Hermes 更新耗时过长且提示不足

- **Issue:** [#102540 — hermes update takes a super long time to complete](https://github.com/NousResearch/hermes-agent/issues/102540)
- **评论数：** 12
- **点赞：** 2
- **状态：** OPEN

用户报告正常约 1 分钟的更新曾耗时超过 6 分钟，并指出 Hermes 能检测插件构建阶段异常，但整体提示不足。

**背后诉求：** 更新过程需要更清晰的阶段进度、超时诊断和失败恢复，而不仅是底层 timing 日志。

**路线判断：** 与 v0.23.4 的安装器汇总更新相关，但当前仍缺少完整 fix 证据，可能需要进一步定位插件构建、下载或依赖解析瓶颈。

### 4.4 Kimi K2.5 原生视觉支持

- **Issue:** [#6611 — Enable native vision support for moonshot/kimi-k2.5](https://github.com/NousResearch/hermes-agent/issues/6611)
- **评论数：** 7
- **点赞：** 6
- **状态：** OPEN

用户希望 Hermes 直接调用 Kimi K2.5 的原生多模态接口，而不是把图片转交给辅助视觉服务。

**背后诉求：** 减少额外成本和延迟，同时保留模型原生视觉能力；这是多模型 provider 兼容性的代表性问题。

### 4.5 Discord 按 Profile 路由消息

- **PR:** [#159794 — Hand a `$<profile>` message to that profile's session](https://github.com/NousResearch/hermes-agent/pull/159794)
- **状态：** OPEN

该 PR 允许单个 Discord Bot 在多 Profile 模式下，通过类似 `$agent-one` 的文本把消息交给指定 Profile 的独立会话。

**背后诉求：** 多 Profile 用户需要在统一聊天入口下保持角色、记忆和配置隔离。

**路线判断：** 功能边界清晰、用户价值直接，若测试覆盖会话归属和回复标签，较适合进入下一版本。

---

## 5. Bug 与稳定性

### P1 / 严重

#### Windows Gateway 在 Telegram 卡顿后无法自动恢复

- **Issue:** [#140012 — Gateway watchdog exit 75 on Windows](https://github.com/NousResearch/hermes-agent/issues/140012)
- **状态：** **CLOSED**
- **影响：** Gateway watchdog 退出后，Supervisor 未按预期重启，所有 Profile 的 Telegram 服务静默中断，需手动执行 `hermes gateway start`。

**修复状态：** Issue 已关闭；提供的数据中未见明确关联的开放 fix PR，关闭可能代表已处理，但需要从提交记录或关闭评论确认根因和修复范围。

---

### P2 / 高优先级

#### Desktop 与运行中的 Gateway 竞争状态数据库所有权

- **Issue:** [#159942 — Desktop isolated backend loses the store-ownership contest](https://github.com/NousResearch/hermes-agent/issues/159942)
- **状态：** OPEN，2026-11-25 新建
- **影响：**
  - Desktop 后端无法取得 `~/.hermes/state.db` 所有权；
  - 后续新建会话缺少 frozen-policy receipts；
  - 远程恢复失败并报 `runtime_coordination_required`；
  - 表面运行但实际处于降级状态。

**已有修复：** 未见明确 fix PR。应被视为当前最值得立即处理的新问题之一。

#### Docker 升级后进入重启循环

- **Issue:** [#159960 — Restart loop after image upgrade](https://github.com/NousResearch/hermes-agent/issues/159960)
- **状态：** OPEN，2026-11-25 新建
- **环境：** v0.23.4、Docker 29.6.2、root 容器、宿主机 UID 10000
- **影响：** 3.6 小时内重启约 **382 次**，核心原因是 root 创建的 `install.lock` 与 UID 10000 权限冲突。

**已有修复：** 未见明确 fix PR。

#### Desktop 聊天重复上一轮消息

- **Issue:** [#131848 — Desktop chat duplicates the last exchange](https://github.com/NousResearch/hermes-agent/issues/131848)
- **状态：** OPEN
- **影响：** 约五分之一的发送出现用户消息与上一轮回复重复，原因是时间线刷新与乐观临时 ID 到服务端 ID 的替换发生竞态。

**已有修复：** 未见明确 fix PR。

#### Bot Chat 无法重置，压缩后上下文 token 下限持续上升

- **Issue:** [#159686 — Bot Chat can't reset and compaction can't shrink it](https://github.com/NousResearch/hermes-agent/issues/159686)
- **状态：** **CLOSED**
- **影响：** Bot Chat 只能持续压缩，但归档附录令摘要不断增长，形成约 227k 字符的高 token 地板。

**修复状态：** Issue 已关闭，未见明确关联 PR 出现在展示列表中。

#### Windows Gateway 事件循环可能冻结数十秒

- **Issue:** [#153046 — `_get_process_start_time()` can freeze the gateway event loop](https://github.com/NousResearch/hermes-agent/issues/153046)
- **状态：** OPEN
- **影响：** `psutil.Process(pid).create_time()` 可能持有 GIL，阻塞 Windows Gateway 事件循环。

**已有修复：** 未见明确 fix PR。

#### Windows 原生原子写入可能报“拒绝访问”

- **Issue:** [#156585 — Native atomic_write fails with "Access is denied"](https://github.com/NousResearch/hermes-agent/issues/156585)
- **状态：** OPEN
- **影响：** 杀毒软件、索引器或 OneDrive 短暂占用文件时，`os.replace` 在 Windows 上失败。

**已有修复：** 未见明确 fix PR。

#### Windows 桌面端下载本地 MEDIA 文件路径非法

- **Issue:** [#149808 — Windows Desktop local MEDIA file download fails](https://github.com/NousResearch/hermes-agent/issues/149808)
- **状态：** OPEN
- **影响：** 文件路径被错误地拼接应用安装目录，触发 `WinError 123`。

**已有修复：** 未见明确 fix PR。

#### Slack Socket Mode 重连泄漏重试协程

- **Issue:** [#83662 — Slack Socket Mode reconnect leaks a connect() loop](https://github.com/NousResearch/hermes-agent/issues/83662)
- **状态：** OPEN
- **影响：** 旧 handler 世代在会话关闭后继续调用 `connect()`，持续产生 `RuntimeError: Session is closed`。

**已有修复：** 未见明确 fix PR。

#### Provider 插件并发首次查询导致“Unknown provider”

- **Issue:** [#156899 — Concurrent first lookup leaves provider plugin unregistered](https://github.com/NousResearch/hermes-agent/issues/156899)
- **状态：** OPEN
- **影响：** Profile 首次加载 provider 插件时可能发生竞态，需重启才能恢复。

**已有修复：** 未见明确 fix PR。

#### Delegate Task 循环上限错误计数

- **Issue:** [#72550 — delegate_task loop cap miscounts JSON batches](https://github.com/NousResearch/hermes-agent/issues/72550)
- **状态：** OPEN
- **影响：** JSON 批次中的实际子 Agent 数量与循环上限计算不一致，可能错误拒绝合法 spawn 或产生额外计费。

**已有修复：** 未见明确 fix PR。

#### 自定义 Provider 模型发现异常

- **Issue:** [#147982 — Bare custom endpoint lists only model.default](https://github.com/NousResearch/hermes-agent/issues/147982)
- **状态：** OPEN
- **影响：** `/models` 未携带 API key，CLI 和 Desktop 模型选择器无法发现自定义端点提供的多个模型。

**已有修复：** 未见明确 fix PR。

#### Kimi Code Plan 视觉请求被路由到错误端点

- **Issue:** [#45040 — Auto-detect correct base_url for OpenAI-compatible endpoint](https://github.com/NousResearch/hermes-agent/issues/45040)
- **状态：** OPEN
- **影响：** 视觉请求收到 404。

**已有修复：** 未见明确 fix PR。

#### 浏览器共享 Profile 在容器重建后被永久拒绝

- **Issue:** [#147739 — Shared browser profile refused after container recreate](https://github.com/NousResearch/hermes-agent/issues/147739)
- **状态：** OPEN
- **影响：** 残留 `SingletonLock` 和旧启动记录被误判为“其他环境中的 Chromium”，Bot Screen 无法恢复。

**已有修复：** 未见明确 fix PR。

#### Cron 固定任务丢失命名自定义 Provider

- **Issue:** [#119694 — Pinned cron jobs store provider "custom" instead of named custom provider](https://github.com/NousResearch/hermes-agent/issues/119694)
- **状态：** OPEN
- **影响：** 固定 Cron 任务静默回退到错误 Provider。

**已有修复：** 未见明确 fix PR。

#### Skill 锁阻止仓库根目录的全部 Git 写入

- **Issue:** [#159827 — Skill lock blocks every git write at the repo root](https://github.com/NousResearch/hermes-agent/issues/159827)
- **状态：** OPEN
- **影响：** 即便 pathspec 不涉及被锁 Skill，Git 修改命令仍被拦截，范围控制过宽。

**已有修复：** 未见明确 fix PR。

---

### P3 / 中优先级

- **Bot 标签页跨连接打开同名 Default Bot：** [#151990](https://github.com/NousResearch/hermes-agent/issues/151990)  
  多 SSH 连接存在同名 Profile 时，点击结果可能串会话；暂无明确 fix PR。

- **Windows CUA Driver 自启动就绪检查误报：** [#123774](https://github.com/NousResearch/hermes-agent/issues/123774)  
  `schtasks` XML 与 shell 包装任务匹配失败，持续提示 autostart setup failed；暂无明确 fix PR。

- **Desktop 编辑并重发流程损坏：** [#130629](https://github.com/NousResearch/hermes-agent/issues/130629)  
  涉及无自动重发、编辑文本丢失、确认提示冗余和会话位置跳转；暂无明确 fix PR。

- **推理流重复循环缺少有界恢复：** [#97630](https://github.com/NousResearch/hermes-agent/issues/97630)  
  当前重复通常被直接视为终止失败，缺少恢复重试；暂无明确 fix PR。

- **Windows 搜索目录结果路径与 `.gitignore` 行为异常：** [PR #159951](https://github.com/NousResearch/hermes-agent/pull/159951)  
  已有明确 fix PR，待合并。

- **Gateway 错误判定 Bot Turn 为“需要回复”：** [PR #159957](https://github.com/NousResearch/hermes-agent/pull/159957)  
  `turn_author` 未被静默判定逻辑正确识别；已有明确 fix PR，待合并。

---

## 6. 功能请求与路线图信号

### 6.1 长期上下文与“文档链”能力

- **Issue:** [#143379](https://github.com/NousResearch/hermes-agent/issues/143379)
- **相关 Issue:** [#156164 — Proactive tool-result prune](https://github.com/NousResearch/hermes-agent/issues/156164)
- **相关 PR:** [#158296 — Add asinccontext background context compression](https://github.com/NousResearch/hermes-agent/pull/158296)

需求重点包括：

- 工具输出落盘并通过引用按需展开；
- 上下文压缩异步化，避免模型总结阻塞当前轮次；
- 压缩后保留文档来源和可追溯性；
- 为长期记录建立权限、保留期和治理规则。

**下一版本可能性：中高。** 工具结果裁剪和异步压缩已经出现具体 PR；“文档链网络”本身更可能作为架构 RFC 分阶段落地。

### 6.2 主动任务与后台 Agent

- **Issue:** [#158538](https://github.com/NousResearch/hermes-agent/issues/158538)
- **相关 Issue:** [#72550](https://github.com/NousResearch/hermes-agent/issues/72550)
- **相关 Issue:** [#119694](https://github.com/NousResearch/hermes-agent/issues/119694)

可能演化为：

- 定时任务与后台主动扫描分层；
- 主动运行内容可预览、可追溯；
- 子 Agent spawn 上限和计费更加准确；
- 固定任务正确绑定命名 Provider。

**下一版本可能性：中高。** 路线讨论已较具体，且相关底层问题已有明确技术切口。

### 6.3 OpenAI 跨新会话复用 Prompt Cache

- **PR:** [#159953 — `prompt_caching.openai_key_scope: install`](https://github.com/NousResearch/hermes-agent/pull/159953)

新选项允许同一安装下的新聊天复用已缓存的系统提示词和工具列表，降低 OpenAI API 的重复输入成本。

**下一版本可能性：高。** 范围小、可通过配置选择加入，且直接改善价格与首 token 延迟。

### 6.4 Discord Profile 路由

- **PR:** [#159794](https://github.com/NousResearch/hermes-agent/pull/159794)

**下一版本可能性：高。** 用户价值明确，且与现有多 Profile、多 Gateway 架构契合。

### 6.5 插件终端 UI 事件

- **PR:** [#159956 — Render plugin terminal chrome](https://github.com/NousResearch/hermes-agent/pull/159956)

允许插件通过 `plugin.<id>.terminal` 事件更新标签标题、状态栏等经典 CLI 终端界面。

**下一版本可能性：中高。** 是插件能力体系的重要扩展，但仍需明确事件协议和安全边界。

### 6.6 Desktop ADHD 友好的本地想法捕获

- **PR:** [#116258 — Add local thoughts to Quick Entry](https://github.com/NousResearch/hermes-agent/pull/116258)

提供 “Save thought” 和 “Saved thoughts”，允许用户先捕获未完成想法，之后再整理。

**下一版本可能性：中。** 适合作为 Desktop UX 改进，但需确认本地数据存储、隐私和跨平台行为。

### 6.7 浏览器“接管/交还”能力

- **Issue:** [#149488 — Take over / Hand back for the agent's browser tab](https://github.com/NousResearch/hermes-agent/issues/149488)

用户希望在登录、验证码或滑块验证时临时接管 Agent 浏览器，随后无缝交还。

**下一版本可能性：中。** 这是浏览器 Agent 实用化的重要能力，但涉及 CDP、安全授权和远程桌面交互，实施复杂度较高。

### 6.8 Kimi 原生视觉支持

- **Issue:** [#6611](https://github.com/NousResearch/hermes-agent/issues/6611)
- **相关 Issue:** [#45040](https://github.com/NousResearch/hermes-agent/issues/45040)

**下一版本可能性：中高。** 用户需求明确，但需同时解决模型能力探测、端点识别和辅助视觉回退策略。

### 6.9 本地推理性能分析

- **Issue:** [#159806 — Local inference performance profiling](https://github.com/NousResearch/hermes-agent/issues/159806)

用户基于 DGX Spark、Ollama、Strata 和多个 Qwen 模型进行了 75 次测试，希望 Hermes 提供面向 Agent 工作负载的性能分析和优化建议。

**下一版本可能性：中低。** 更可能先以诊断命令、基准工具或插件形式落地。

---

## 7. 用户反馈摘要

### 真实使用场景

1. **长期多 Profile 使用**
   - 用户需要独立配置、记忆和会话，但希望从 Discord 等统一入口按 Profile 路由；
   - 同名 `default` Profile 在多连接场景下已经引发会话串线。

2. **后台主动助理**
   - 用户认可 Cron 和主动任务的价值，但反对后台任务不可见、读取范围过广和通知噪声；
   - 需求重点是“透明、可批准、可追溯”，而不是完全放任后台行为。

3. **长期知识积累**
   - 用户希望 Agent 在会话压缩后仍能重读历史资料；
   - 现有文件、记忆与压缩模块尚未形成统一的来源链和治理模型。

4. **多模型与视觉任务**
   - Kimi 用户希望直接使用模型原生视觉能力；
   - 自定义 Provider 的模型发现、端点识别和凭据传递仍不稳定。

5. **无人值守生产环境**
   - Docker、Gateway、Windows 和 Slack 用户最关心“故障后能自动恢复”；
   - 目前多个问题表现为静默降级、重启循环或需人工介入。

### 主要痛点

- 更新过程慢且缺少清晰反馈；
- Desktop 会话偶发重复、串线、编辑重发损坏；
- Gateway 与 Desktop 后端的状态协调不透明；
- Windows 文件操作、进程探测和任务调度兼容性不足；
- Docker 升级后的锁文件权限问题可能造成高频重启；
- 上下文压缩存在长期 token 地板，Bot Chat 缺乏有效重置路径；
- 自定义 Provider、Cron 固定任务和视觉路由存在配置语义不一致。

### 正面信号

- v0.23.4 集中发布说明项目已有稳定的发布与分发流水线；
- 备份落盘、日志脱敏、文档部署自动重试等改动显示团队开始重视生产可靠性和隐私；
- 插件目录持续引入后台压缩、MCP、媒体及研究工具，生态活跃；
- 多个 RFC 和路线图 Issue 收到深度讨论，表明核心用户愿意参与长期架构设计。

---

## 8. 待处理积压

### 8.1 长期高热架构 Issue

- **[#143379 — Doc-Chain Substrate RFC](https://github.com/NousResearch/hermes-agent/issues/143379)**  
  创建于 2026-10-23，已累计 **53 条评论**，是当前最核心的长期设计议题。需要维护者明确阶段、里程碑和拆分方案，避免 RFC 持续扩大而缺少实施输出。

- **[#6611 — Kimi K2.5 native vision](https://github.com/NousResearch/hermes-agent/issues/6611)**  
  创建于 2026-04-09，已有 **7 条评论、6 个点赞**，但仍开放。应尽快明确 provider 能力矩阵和预计版本。

- **[#72550 — delegate_task loop cap miscounts JSON batches](https://github.com/NousResearch/hermes-agent/issues/72550)**  
  创建于 2026-07-27，涉及子 Agent 限额和计费准确性，建议优先修复。

- **[#83662 — Slack Socket Mode reconnect leak](https://github.com/NousResearch/hermes-agent/issues/83662)**  
  创建于 2026-08-11，长期未闭环，且会持续制造日志噪声和资源泄漏。

### 8.2 长期 Windows 兼容问题

- **[#123774 — CUA Driver autostart readiness false-negative](https://github.com/NousResearch/hermes-agent/issues/123774)**  
  长期影响 Windows 自动启动体验。

- **[#45040 — Kimi Code Plan vision base_url](https://github.com/NousResearch/hermes-agent/issues/45040)**  
  创建于 2026-06-12，仍影响 Kimi Code Plan 图像任务。

- **[#102540 — Slow `hermes update`](https://github.com/NousResearch/hermes-agent/issues/102540)**  
  创建于 2026-09-03，涉及安装体验和生产升级可靠性，应与 v0.23.4 后的安装器重构一起复盘。

### 8.3 高积压 PR

- **[#145648 — Refuse phantom sibling creation](https://github.com/NousResearch/hermes-agent/pull/145648)**  
  创建于 2026-10-27，涉及 YAML 配置原子更新中的错误层级创建风险。

- **[#152969 — Escalate thinking-only recovery](https://github.com/NousResearch/hermes-agent/pull/152969)**  
  创建于 2026-11-10，处理 Anthropic thinking-only 恢复流程仍可能重复发送完全相同请求的问题。

- **[#147254 — Preserve A2A task results after disconnect](https://github.com/NousResearch/hermes-agent/pull/147254)**  
  创建于 2026-10-31，属于多 Agent 任务生命周期关键修复。

- **[#116258 — ADHD-friendly local thoughts](https://github.com/NousResearch/hermes-agent/pull/116258)**  
  创建于 2026-09-19，尚未进入近期评审队列，可能需要维护者重新评估与当前 Desktop UX 架构的兼容性。

---

## 今日结论

Hermes Agent 今日呈现出“**高活跃开发 + 快速生态扩张 + 稳定性压力集中暴露**”的状态。v0.23.4 汇总了大量变更，插件、CLI、Gateway 和 Desktop 能力继续推进；但新引入的 Desktop/Gateway 状态竞争和 Docker 重启循环说明，大规模功能扩展已经超过部分部署边界的一致性能力。

建议下一工作日优先关注：

1. **Desktop 与 Gateway 的状态所有权及会话一致性；**
2. **Docker `install.lock` 权限和升级迁移；**
3. **Windows Gateway 事件循环与原子文件写入；**
4. **Discord Profile 路由、OpenAI Prompt Cache、Gateway Bot 静默判定等明确 PR 的合并；**
5. **为 Doc-Chain RFC 给出可执行的分阶段路线图。**

**项目健康度：中高。** 开发活跃度和社区参与度优秀，生态方向清晰；但当前应从“继续扩展功能”适度转向“统一桌面、Gateway、容器和 Provider 之间的状态与生命周期语义”。

</details>

<details>
<summary><strong>OpenHuman</strong> — <a href="https://github.com/tinyhumansai/openhuman">tinyhumansai/openhuman</a></summary>

过去24小时无活动。

</details>

---
*本日报由 [Big Model Radar](https://github.com/96loveslife/big_model_radar) 自动生成。*
# OpenClaw 生态日报 2026-09-11

> Issues: 437 | PRs: 500 | 覆盖项目: 8 个 | 生成时间: 2026-09-11 03:59 UTC

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

<think>The user is asking me to generate a project daily report for OpenClaw based on the GitHub data provided. Let me analyze the data carefully and structure the report according to the 8 sections requested.

Let me parse the data:

**Data Overview:**
- Past 24 hours Issues: 437 updates (new/active: 232, closed: 205)
- Past 24 hours PRs: 500 updates (pending: 240, merged/closed: 260)
- New releases: 2

**Releases:**
1. v2026.9.4 - Recover from compatible failed updates
2. v2026.6.35 - Final June 2026 Extended Stable (LTS) release - Safer provider and channel boundaries

**Top Issues (most comments):**
- #125626 - OpenClaw 2026.8.1 beta feedback (24 comments, closed)
- #91009 - Codex PreToolUse native hook relay spawns CPU-bound processes (22 comments, open, P0)
- #97616 - OpenClaw leaks unreaped hook/tool child processes (15 comments, open, P1)
- #114612 - SQLite unbounded growth (13 comments, open, P2)
- #139714 - post-core update resume child admits an update_runs row it can never finalize (13 comments, closed)
- #49876 - Cron sessions deliver hallucinated output (12 comments, closed)
- #40786 - Feature Request: Add .gitignore-like exclude patterns to backup CLI (12 comments, open)
- #132762 - overflow retry can end successfully on a tool result without final delivery (12 comments, closed)
- #136183 - Command executor hangs when spawning ssh (11 comments, open, P1)
- #142585 - 2026.9.3 Doctor refuses valid legacy workspace setup (11 comments, open, P0)
- #141747 - Runtime scaffolding injects ~686 tokens/turn (10 comments, open, P2)
- #117262 - SQLite contention: 3 concurrent write handles (10 comments, open, P1)

**Top PRs (most comments):**
Looking at the PR list, many are listed but the comments are mostly "undefined" - this is interesting. Looking more carefully, the top PRs seem to have various levels of activity.

Let me write this report in Chinese as the prompt is in Chinese.

The report should be structured, professional, data-driven, and highlight project health.

Let me think about how to organize each section:

1. **今日速览** - 3-5 sentences summarizing overall state
   - High activity: 437 issues, 500 PRs, 2 releases
   - Active community engagement
   - v2026.9.4 stable release with focus on update recovery
   - Many P0/P1 issues still open indicating ongoing stability work

2. **版本发布** - 2 releases detailed
   - v2026.9.4: rollback safety, configuration recovery
   - v2026.6.35: LTS release, provider/channel boundaries hardening

3. **项目进展** - merged/closed important PRs
   - #144633 - improve: speed up long Slack message chunking (closed)
   - #144628 - refactor(test): remove unused temp-directory counter (closed)
   - #144626 - test(config): retain operator startup configuration corpus (closed)
   - #144638 - fix(release): verify 2026.9.4 split publication recovery
   - Many others need to be mentioned

4. **社区热点** - Most active discussion
   - #125626 (24 comments) - OpenClaw 2026.8.1 beta feedback
   - #91009 (22 comments) - Codex hook relay CPU issue

5. **Bug 与稳定性** - Bugs reported today
   - P0 issues: #91009, #142585, #135776
   - P1 issues: #97616, #136183, #117262, etc.

6. **功能请求与路线图信号**
   - #40786 - .gitignore-like exclude patterns in backup CLI
   - #12855 - Built-in auto-update with configurable schedule
   - #79168 - Content-based prompt injection scanning
   - #107930 - Improve OpenClaw upgrade experience
   - #109370 - Surface delivery correlation data on message_sent hooks

7. **用户反馈摘要** - Pain points
   - Codex hook relay CPU issues
   - Memory database unbounded growth
   - Update flow issues
   - Session state corruption
   - Provider regressions

8. **待处理积压** - Long-standing issues
   - #91009 (2026-06-06, P0)
   - #40786 (2026-03-09, P2)
   - #49876 (2026-03-18, P1)
   - #79168 (2026-05-08, P2)
   - #12855 (2026-02-09, P2)

Let me write this report now. I'll make it professional with clear structure.</think>

# OpenClaw 项目日报 — 2026-09-11

> 数据窗口：过去 24 小时 GitHub 公开活动 · 数据来源：github.com/openclaw/openclaw

---

## 1. 今日速览

OpenClaw 今日维持**高强度工程节奏**：过去 24 小时 Issues 更新 437 条（活跃 232 / 关闭 205）、PR 更新 500 条（待合并 240 / 已合并关闭 260），并连续发布 **v2026.9.4** 与 LTS 终版 **v2026.6.35** 两个版本。项目处于"稳定主线 + 长尾修复"的并行阶段：v2026.9.4 强化了更新失败回滚能力，v2026.6.35 收束了六月分支作为长期支持。同时多条 **P0/P1 严重 Issue 仍处于 OPEN 状态**（#91009 Codex hook relay CPU 风暴、#142585 2026.9.3 Doctor 迁移阻断），表明 9 月主线在更新/迁移路径上仍有未消化的稳定性债务。整体健康度评估：**主线活跃、回归可见、社区参与密度维持在较高水位**。

---

## 2. 版本发布

### 2.1 v2026.9.4（稳定版，2026-09-11）
**亮点：失败的兼容性更新回滚机制**
- 在 schema 与配置校验证明回滚安全的前提下，**保留旧版本包并以旧配置与旧服务**进行恢复。
- **破坏性变更**：无。数据库迁移仍要求有经过验证的预升级备份（即回滚不覆盖 schema 迁移场景）。
- **迁移注意事项**：依赖自动升级的用户应确认已开启预升级快照；运维侧建议在升级 v2026.9.x → v2026.9.4 时保留 `OPENCLAW_UPDATE_RUN_ID` 等上下文以便恢复链路正常衔接。
- 关联 PR：#144636（appcast 更新）、#144638（npm/Docker 分发恢复校验）。
- 🔗 https://github.com/openclaw/openclaw/releases/tag/v2026.9.4

### 2.2 v2026.6.35（June 2026 Extended Stable / LTS 终版，2026-09-11）
**亮点：Provider / Channel 边界硬化**
- 内置 provider 与 channel adapter 对**不可信响应体做边界限制**，在重操作前拒绝超大输入，并在事务传输失败时**保留可恢复路径**。
- 这是 June 2026 分支的最后一个 LTS 标记版本，**不再有后续 6.x 功能更新**，安全/修复将转回主分支。
- 🔗 https://github.com/openclaw/openclaw/releases/tag/v2026.6.35

---

## 3. 项目进展

过去 24 小时有大量 PR 被合并或关闭，**主线在更新系统、macOS 客户端、Slack/iMessage 通道、Codex 集成与记忆子系统**均取得推进：

| PR | 标题 | 状态 | 影响面 |
|---|---|---|---|
| [#144636](https://github.com/openclaw/openclaw/pull/144636) | chore(release): update appcast for 2026.9.4 | OPEN（待 merge） | macOS Sparkle 升级通道 |
| [#144638](https://github.com/openclaw/openclaw/pull/144638) | fix(release): verify 2026.9.4 split publication recovery | OPEN | 发布可观测性 |
| [#144633](https://github.com/openclaw/openclaw/pull/144633) | improve: speed up long Slack message chunking | **CLOSED** | Slack 通道性能 |
| [#144628](https://github.com/openclaw/openclaw/pull/144628) | refactor(test): remove unused temp-directory counter | **CLOSED** | 测试基础设施精简 |
| [#144626](https://github.com/openclaw/openclaw/pull/144626) | test(config): retain operator startup configuration corpus | **CLOSED** | 回归测试护栏 |
| [#144629](https://github.com/openclaw/openclaw/pull/144629) | fix(discord): honor persona text limits and preserve reply receipts | **CLOSED** | Discord 通道 |
| [#142626](https://github.com/openclaw/openclaw/pull/142626) | fix(imessage): restore feedback after bridge recovery | OPEN（automerge armed） | iMessage 通道 |

**整体判断**：今日主线的推进集中在"**回滚可恢复 + 通道一致性**"，与 v2026.9.4 的发布意图高度一致。#144314（update authority 恢复）、#144586（mac MLX 语音取消）、#144611/#144622/#144641（memory 一组清理）均处于"待维护者评审"或"需要 proof"阶段，预计将在 9 月下旬的 patch 周落地。

---

## 4. 社区热点

过去 24 小时评论最密集的话题集中在**集成回归与升级体验**：

| 排名 | Issue | 评论 | 主题 |
|---|---|---|---|
| 1 | [#125626](https://github.com/openclaw/openclaw/issues/125626) OpenClaw 2026.8.1 beta feedback | **24** | 已关闭的 beta 反馈收集帖 |
| 2 | [#91009](https://github.com/openclaw/openclaw/issues/91009) Codex hook relay CPU 风暴 | **22** | 仍 OPEN，P0，回归 |
| 3 | [#97616](https://github.com/openclaw/openclaw/issues/97616) Hook/tool 子进程泄漏（僵尸进程） | **15** | 仍 OPEN，P1 |
| 4 | [#114612](https://github.com/openclaw/openclaw/issues/114612) SQLite 记忆表无保留策略 | **13** | 仍 OPEN，P2 |
| 5 | [#139714](https://github.com/openclaw/openclaw/issues/139714) post-core update 卡死 | **13** | 已关闭 |
| 6 | [#142585](https://github.com/openclaw/openclaw/issues/142585) 2026.9.3 Doctor 拒绝迁移 | **11** | 仍 OPEN，P0 |
| 7 | [#117262](https://github.com/openclaw/openclaw/issues/117262) SQLite 写句柄争用致 33s 卡顿 | **10** | 仍 OPEN，P1 |
| 8 | [#141747](https://github.com/openclaw/openclaw/issues/141747) system-reminder 每轮注入 ~686 tokens | **10** | 仍 OPEN，P2 |

**诉求归纳**：
- **升级/迁移链路**：连续多条高评论 Issue 围绕"升级中途的状态丢失"——#139714（update_runs 卡死）、#142585（Doctor 阻断合法迁移）、#135776（core/plugin 版本错位）。
- **Codex 集成的稳定性**：#91009、#97616、#139274、#139847、#141233 形成一个**Codex 集成的回归簇**，横跨 PreToolUse 钩子、语音附件、转录镜像、并发回复。
- **记忆/数据库治理**：#114612、#117262、#142476 共同指向 SQLite 写入与保留策略，**DEF-61 等内部缺陷已经被外部用户完整复现**。

---

## 5. Bug 与稳定性

按严重程度排序（OPEN 状态的当日主要 Bug）：

### 🔴 P0（已具备修复或路径）
- **#91009** Codex PreToolUse hook relay 派生 CPU 绑定 `openclaw-hooks` 子进程，导致 gateway RPC stall。复现：2026.6.1+。关联 PR：#121668（kill-switch，待 proof）。
  🔗 https://github.com/openclaw/openclaw/issues/91009
- **#142585** 2026.9.3 Doctor 拒绝合法 legacy workspace 设置与 attestation 导入，**迁移阻断**。
  🔗 https://github.com/openclaw/openclaw/issues/142585
- **#135776** `openclaw update` 升级 core 但留下 exact-pinned 插件在旧版本，**core/plugin 版本错位**致 Discord/Slack 加载失败。
  🔗 https://github.com/openclaw/openclaw/issues/135776
- **#107930** Node.js 版本要求变更时升级体验断裂（增强型，但标 P0 release-blocker）。
  🔗 https://github.com/openclaw/openclaw/issues/107930

### 🟠 P1
- **#97616** Hook/tool 子进程未被回收，僵尸积累 → 性能退化（**新增/仍在累积**）。
  🔗 https://github.com/openclaw/openclaw/issues/97616
- **#136183** ssh 启动在 2026.8.1 起的回归：banner 阶段被 SIGTERM。
  🔗 https://github.com/openclaw/openclaw/issues/136183
- **#117262** SQLite 三个并发写句柄 → ~33s event-loop stall（DEF-61）。
  🔗 https://github.com/openclaw/openclaw/issues/117262
- **#139847** 2026.9.2 回归：reply run 活跃期间到达的消息被丢弃。
  🔗 https://github.com/openclaw/openclaw/issues/139847
- **#118839** "restart recovery claim changed before agent adoption" 在 2026.7.2-beta.7 复活。
  🔗 https://github.com/openclaw/openclaw/issues/118839
- **#142476** 2026.9.3 cron session reaper 在 632-agent 网关上以同步 PRAGMA integrity_check 阻塞 14-76s。
  🔗 https://github.com/openclaw/openclaw/issues/142476
- **#128971** Telegram 终态 `delivery_ambiguous` 致最终回复静默丢失。
  🔗 https://github.com/openclaw/openclaw/issues/128971

### 🟡 P2
- **#141747** `<system-reminder>` 每轮注入 ~686 tokens，无 opt-out，影响成本与可控性。
- **#114612** 记忆表 `memory_index_chunks` / `memory_embedding_cache` 无保留策略 → 长期填盘。
- **#136360** `<<<BEGIN_OPENCLAW_INTERNAL_CONTEXT>>>` 在 Microsoft Teams 通道作为可见 user-role 轮次泄露（同类问题已在 Slack/Telegram/Feishu/Discord 修复）。
- **#138260** Doctor runtime-tool-schemas 在 Windows 10 反复失败。
- **#143757** Windows Scheduled Task 默认配置无法无人值守运行网关。
- **#103198** WebChat 图片附件未映射到 media store 路径。

**fix PR 覆盖情况**：在上述 P0/P1 中，**仅 #91009（→#121668）和 #142585/#143752（→#144314）有清晰可指向的修复路径**，其余大多仍处于 `needs-maintainer-review` / `needs-product-decision` 状态。建议维护者关注 P0 cluster 的解封节奏。

---

## 6. 功能请求与路线图信号

| 提议 | 来源 | 路线图信号 |
|---|---|---|
| **#40786** Backup CLI 支持 `.gitignore` 式 exclude 模式 | OPEN，12 评论 | 长期未被接受，但能解决 node_modules、.env 备份体积/敏感数据问题；与现有 `openclaw backup create` 自然延伸 |
| **#12855** 内置自动更新（可配置计划/确认/通知） | OPEN，8 评论 | 与 #135776（core/plugin 错位）、#139714（update 卡死）形成同一系统面，路线图价值高 |
| **#79168** 工具输出的提示注入内容扫描 | CLOSED，8 评论 | 历史方向明确（当前仅 XML 结构隔离），社区长期呼吁内容级防御 |
| **#107930** Node 版本要求变更下的升级体验改进 | OPEN，5 评论 | 与 v2026.9.4 回滚能力高度互补，**强烈可能进入 9.x patch 路线** |
| **#109370** `message_sent` 钩子暴露投递关联数据（MessageReceipt / 队列 ID / 重试次数） | OPEN，5 评论 | 与 #128971（Telegram delivery_ambiguous 静默丢失）直接耦合 |
| **#139868** Tavily 插件支持 `baseUrl` 私有/内部端点 | OPEN（maintainer） | 内部部署友好，已 ready-for-look |
| **#92367** Scope-bound gateway auth tokens + 每-agent dispatch-lane 原语 | CLOSED | 与 #144136（pairing 鉴权模式命名修复）同一安全主题 |
| **#112375** Cron 模型无关预检门（shell 探测跳过 LLM） | OPEN，XL | 大幅降本场景（空轮询 → 0 token），但标记 security-boundary 风险，需产品决策 |

**判断**：**#107930、#109370、#139868** 最有可能被纳入下一个 patch 版本（9.4.x），三者均与已发布的 v2026.9.4 回滚主题相邻且 PR 已就绪。

---

## 7. 用户反馈摘要

**主要痛点（提炼自今日高评论 Issue）**：
- **升级是高风险动作**：连续多例反馈（#135776、#139714、#142585、#143752）显示从 2026.6.x → 2026.8.x → 2026.9.x 的跃迁过程中，状态机校验、迁移门控、版本错位、Doctor 自检均出现非平凡的"看似成功实则失败"路径。用户对**"静默坏掉"非常敏感**，信任损耗类反馈集中在 #49876（cron 输出幻觉）与 #91009（CPU stall）。
- **Codex 集成体感不佳**：#91009、#97616、#139274、#139847、#141233 的共同信号是用户在把 Codex 作为首选 harness 后遇到 hook/转录/进程生命周期层的不一致，期待 OpenClaw 在"严格隔离"与"鲁棒兼容"之间提供更明确语义。
- **成本/

---

## 横向生态对比

<think>The user wants me to generate a horizontal comparison analysis report based on the daily reports of multiple projects. Let me analyze the data carefully and produce a structured cross-project analysis.

Key data points to extract:
- OpenClaw: 437 issues, 500 PRs, 2 releases, high activity
- NanoBot: 3 issues, 20 PRs, 0 releases, webui-focused
- PicoClaw: 2 issues, 7 PRs, 0 releases, low activity, mostly dependabot
- IronClaw: 1 issue, 8 PRs, 0 releases, mostly dependabot + 2 manual
- LobsterAI: 0 issues, 13 PRs (10 closed), 0 releases, focused on OpenClaw v2026.8.1 fixes
- QwenPaw: 21 issues, 40 PRs, 1 release (v2.2.1-beta.2), high activity
- Hermes Agent: 50 issues, 50 PRs (0 merged), 0 releases, very active but no merges
- OpenHuman: 24 issues, 32 PRs, 0 releases, high closure rate (87.5%)

Let me now think about positioning:
- OpenClaw: Core/reference project, large scale, multi-platform
- NanoBot: HKUDS, webui-focused, MCP/Discord/Telegram
- PicoClaw: sipeed, smaller scale, dependency maintenance, QQ channel issues
- IronClaw: nearai, low activity, mostly maintenance
- LobsterAI: netease-youdao, OpenClaw v2026.8.1 upgrade fixes (downstream)
- QwenPaw: agentscope-ai, Hub multi-tenant, Beta release activity
- Hermes Agent: NousResearch, high issue volume, PR review bottleneck
- OpenHuman: tinyhumansai, memory subsystem, Solana examples

Common themes:
1. Upgrade/migrations pain (OpenClaw, LobsterAI, Hermes)
2. Channel integration issues (Telegram, Slack, Discord, Feishu)
3. Memory/storage system issues (OpenClaw SQLite, OpenHuman memory)
4. Cost optimization requests (QwenPaw, OpenClaw)
5. WebUI/UX polish (NanoBot)
6. Hub/multi-tenant evolution (QwenPaw)
7. Test stability concerns (OpenHuman)
8. Secret/credential management (Hermes Agent, OpenClaw)

Differentiation:
- OpenClaw: Large scale reference, broad channel coverage
- NanoBot: WebUI-first, MCP focus
- PicoClaw: Sipeed ecosystem, hardware angle
- IronClaw: NEAR AI ecosystem
- LobsterAI: Chinese localization + education (Youdao)
- QwenPaw: Hub/team collab
- Hermes Agent: NousResearch model focus
- OpenHuman: Web3/agent examples, memory architecture

Maturity tiers:
- High iteration: OpenClaw, Hermes Agent, OpenHuman, QwenPaw
- Stable maintenance: NanoBot, IronClaw, LobsterAI
- Quiet/low: PicoClaw

Trends:
- Agent upgrade migration is painful
- Cost transparency matters
- Memory subsystem is becoming a battleground
- Multi-tenant/team is the next frontier
- Channel reliability matters more than ever

Let me write the report now in Chinese.</think>

# 个人 AI 助手与自主智能体开源生态横向对比分析

**报告日期：2026-09-11**
**覆盖项目**：OpenClaw · NanoBot · PicoClaw · IronClaw · LobsterAI · QwenPaw · Hermes Agent · OpenHuman

---

## 一、生态全景

本次观察的 8 个项目共同构成了"个人 AI 助手 + 自主智能体"开源生态的主力阵容，整体呈现出 **"头部高强度迭代 + 中尾部密集维护 + 长尾低活跃"** 的三层结构。OpenClaw 作为参照核心，今日单日产出 **437 Issues + 500 PRs + 2 Releases**，体量远超其他项目；QwenPaw、OpenHuman、Hermes Agent 处于快速迭代第二梯队；NanoBot、LobsterAI 处于质量巩固阶段；PicoClaw、IronClaw 处于低活跃稳态。当前生态的**共性技术债**集中在四处：**升级迁移的"静默破坏"、消息通道（尤其 Telegram/Slack/Feishu/Discord）状态一致性、记忆/存储子系统的并发与保留策略、跨平台成本透明度**。从产品方向看，**多租户/团队协作（QwenPaw Hub）、上下文压缩与记忆治理、Web3/链上示例（OpenHuman）、MCP 协议层（NanoBot）** 是当下最清晰的差异化演进路径。

---

## 二、各项目活跃度对比

| 项目 | Issues（24h） | PRs（24h） | Release | 健康度评级 | 当日关键词 |
|---|---|---|---|---|---|
| **OpenClaw**（参照核心） | 437（活跃 232 / 关闭 205） | 500（待合 240 / 关闭 260） | **2**（v2026.9.4 稳定版 + v2026.6.35 LTS） | ⭐⭐⭐⭐⭐ | 回滚可恢复、provider 硬化 |
| **QwenPaw** | 21（活跃 14 / 关闭 7） | 40（待合 24 / 合入 16） | **1**（v2.2.1-beta.2） | ⭐⭐⭐⭐⭐ | Hub 多租户、Console 收尾 |
| **OpenHuman** | 24（活跃 3 / 关闭 21） | 32（待合 4 / 合入 28） | 0 | ⭐⭐⭐⭐⭐ | 关单率 87.5%、Memory 治理 |
| **Hermes Agent** | 50（活跃 42 / 关闭 8） | 50（待合 50 / 合入 **0**） | 0 | ⭐⭐⭐ | **PR 评审瓶颈** |
| **NanoBot** | 3（活跃 2 / 关闭 1） | 20（待合 13 / 合入 7） | 0 | ⭐⭐⭐⭐ | WebUI 打磨、MCP OAuth |
| **LobsterAI** | 0 | 13（待合 3 / 合入 10） | 0 | ⭐⭐⭐ | OpenClaw v2026.8.1 兼容性 |
| **PicoClaw** | 2（活跃 1 / 关闭 1） | 7（待合 7 / 合入 0） | 0 | ⭐⭐ | 依赖积压、QQ 频道孤立 |
| **IronClaw** | 1（活跃 1 / 关闭 0） | 8（待合 6 / 合入 2） | 0 | ⭐⭐ | 频道适配维护、依赖滚动 |

**关键观察**：
- **OpenClaw 与 QwenPaw 是当日唯二发布版本的项目**，体现主线性迭代能力。
- **Hermes Agent 与 PicoClaw 的 PR 合入率为 0**，提示这两个项目当前最大的瓶颈在"评审吞吐"而非"产出能力"。
- **OpenHuman 的关单率（87.5%）最高**，体现项目处于系统性技术债清理阶段。

---

## 三、OpenClaw 在生态中的定位

### 3.1 体量与社区规模
OpenClaw 当日 Issues 与 PR 数量级约为第二梯队头部项目（QwenPaw、OpenHuman）的 **10–20 倍**，是当之无愧的"参照核心"。其社区参与的密度（评论数、跨产品面覆盖）也明显高于其他项目，单日热点 Issue 评论数最高达 24 条（[#125626](https://github.com/openclaw/openclaw/issues/125626)），远超其他项目平均 4–5 条的水平。

### 3.2 技术路线特征
相比同类项目，OpenClaw 的差异化技术路线可归纳为三点：

1. **"更新可回滚"作为一等公民**：v2026.9.4 把"失败的兼容性更新回滚"列为头号能力，是其他项目尚未系统化覆盖的工程能力。LobsterAI 的 v2026.8.1 兼容性修复本质上是 OpenClaw 回滚能力的"下游验证"——证明这条路线虽成本高但确实有效。

2. **通道适配层的完整性**：OpenClaw 同时维护 macOS Sparkle、Slack、iMessage、Discord、Telegram、Feishu、Microsoft Teams 等多通道，并在 #136360 等问题中暴露了"Teams 通道内部 context 标签泄漏"这类细节——其他项目（PicoClaw、IronClaw）只覆盖 2–3 个通道，且多处于维护而非迭代状态。

3. **长期支持（LTS）分支策略**：v2026.6.35 作为 LTS 终版的明确终止，体现了 OpenClaw 已具备企业级版本治理能力，这是 QwenPaw、OpenHuman 等尚在快速迭代期的项目暂未涉及的能力维度。

### 3.3 生态位
OpenClaw 在生态中的位置类似"Linux 内核"——其他项目（LobsterAI 是其中最明显的下游）以 OpenClaw 为基础构建上层产品。这意味着 **OpenClaw 的任何架构级决策都会向外辐射**，本次 v2026.9.4 的回滚机制、LTS 终止策略都将影响下游项目的兼容性策略。

---

## 四、共同关注的技术方向

以下议题在多项目同步涌现，是生态级技术风向标：

| 技术方向 | 涉及项目 | 共性诉求 |
|---|---|---|
| **升级迁移的"静默破坏"** | OpenClaw（#135776/#139714/#142585/#143752）、LobsterAI（#2642/#2647/#2649/#2650）、Hermes Agent（#103363 Telegram topic-rename 静默失效） | **强烈需要**：升级路径的可观测性、迁移前自检、版本错位的明确报错。当前普遍表现为"看似成功实则失败"，是用户信任损耗的最大来源 |
| **消息通道状态一致性** | OpenClaw（#136360 Teams context 泄漏、#128971 Telegram delivery_ambiguous）、Hermes Agent（#103375 Bot 重连循环、#107880 Telegram TIME_WAIT）、QwenPaw（#7534 Feishu consumer 卡死）、NanoBot（#5719 Discord 压缩噪音） | **强烈需要**：通道层的健康检查、断连重试状态机的可观测输出、跨通道的诊断语义统一 |
| **记忆/存储子系统治理** | OpenClaw（#114612 SQLite 无保留、#117262 写句柄争用）、OpenHuman（#6147/#6156/#6179/#6187 一整批 memory silent failure） | **强烈需要**：保留策略、并发冲突可恢复、recap 失败的可观测性、写入原子性。**OpenHuman 已实质性推进**，OpenClaw 仍处于债务积累期 |
| **成本透明度与可控性** | OpenClaw（#141747 system-reminder 686 tokens、#40786 备份）、QwenPaw（#7679 /compact、#7664 记忆用轻量模型）、LobsterAI（#2643 压缩前记忆保存 opt-in） | **趋势明确**：从"自动优化"转向"把权衡交给用户"。`/compact`、opt-in 开关、模型分流已成为产品标配方向 |
| **多租户 / 团队协作** | QwenPaw（#7318 Hub Roadmap）、OpenClaw（#12855 内置自动更新、#40786 备份扩展）、Hermes Agent（#105683 一键 IM bot onboarding） | **方向明确但路径分散**：QwenPaw 已在 Hub 多租户领跑，其他项目多以"降低单人部署门槛"作为过渡 |
| **凭据 / Secret 管理** | OpenClaw（#109370 投递关联、#92367 scope-bound token）、Hermes Agent（#107700 secrets 系统统一、#102041 多路复用泄漏）、OpenHuman（Composio 集成安全） | **架构债清理期**：多项目都发现"两套独立的 secret 系统"，是下一阶段安全主题的明确入口 |
| **MCP（Model Context Protocol）协议层** | NanoBot（#5573 OAuth 刷新）、OpenClaw（#144314 update authority 恢复）、LobsterAI（#2648 MCP 热重载） | **协议成熟期**：OAuth 刷新、热重载、版本协商正在被多个项目同步打磨，预期 9–10 月有里程碑式合入 |
| **国际化与无障碍输入** | IronClaw（#8092 IME 合成事件）、Hermes Agent（#107876 顶栏按钮砖化）、NanoBot（WebUI 多语言一致） | **长尾但被低估**：中文/日文/韩文用户群对聊天输入体验的回归非常敏感 |

---

## 五、差异化定位分析

| 项目 | 核心定位 | 目标用户 | 技术架构关键差异 |
|---|---|---|---|
| **OpenClaw** | 通用型参照核心，多平台 AI 助手运行时 | 开发者 + 企业 + 高级个人用户 | 更新可回滚、LTS 分支、通道适配完整、SQLite 优先存储；**生态基底** |
| **NanoBot** | WebUI 体验优先的 AI 助手 | 终端用户 + 中小企业 | WebUI-first 设计、MCP OAuth 原生、Stream 性能优化路径清晰 |
| **PicoClaw** | Sipeed 硬件生态内的轻量 AI 网关 | 嵌入式 / 边缘设备用户 | Go 架构、通道精简（QQ、IRC、飞书）、依赖陈旧是显著风险 |
| **IronClaw** | NEAR AI 生态内的辅助型 Agent | NEAR 链上用户 + AI 研究者 | Rust 工具链、依赖滚动维护、Slack/Telegram 通道适配；**低活跃但稳定** |
| **LobsterAI** | 中文教育场景 + OpenClaw 下游 | 教育用户 + 中国本地化场景 | 与 OpenClaw 版本强绑定（v2026.8.1 升级系列修复），依赖 QA 反馈链路驱动 |
| **QwenPaw** | Hub 多租户 / 协作型 AI 助理 | 团队 / 中小企业 / 平台运营者 | 显式的 Hub 控制面 + Console/Deploy 双前端，路线图明确指向协作 |
| **Hermes Agent** | Nous Research 模型生态内的 Agent 框架 | 研究者 + 高级开发者 / 自部署用户 | Secret 多路复用、Provider profile 系统；**PR 评审瓶颈最严重** |
| **OpenHuman** | 高级 Agent + Web3/链上示例 | 开发者 + Web3 集成方 | Memory 架构为核（Memory Archivist 子系统）、示例层战略级 PR（Solana Attestation、SynapticChain） |

**关键差异点**：
- **存储策略**：OpenClaw 与 LobsterAI 共享 SQLite 优先；OpenHuman 走向更复杂的 memory 树；NanoBot 与 IronClaw 倾向轻量级存储。
- **前端策略**：NanoBot、QwenPaw 押注 WebUI；IronClaw、Hermes Agent 主 Desktop；OpenClaw 多端并行。
- **扩展机制**：OpenHuman 通过示例层（Solana、SynapticChain）扩展能力面；QwenPaw 通过 Hub 多租户；OpenClaw 通过通道与 provider 矩阵。

---

## 六、社区热度与成熟度

### 6.1 活跃度分层

**🟢 快速迭代层（每日 PR ≥ 30，Issue ≥ 20）**
- **OpenClaw**：主线 + LTS 双轨制，迭代密度全生态第一
- **QwenPaw**：2.2.x → 2.2.1 收尾阶段，Hub 演进是下一波主线
- **OpenHuman**：技术债清理 + 新能力（managed OpenRouter）双轨并进
- **Hermes Agent**：产出强度最高，但 **合入率为 0**，是"产出强但吞吐弱"的典型

**🟡 质量巩固层（每日 PR 10–20，Issue < 5）**
- **NanoBot**：bug 修复 + WebUI 打磨，节奏温和但审查效率有提升空间
- **LobsterAI**：单点战役（OpenClaw v2026.8.1 兼容性），节奏集中且闭环

**🔴 稳态维护层（每日 PR < 10）**
- **PicoClaw**：依赖积压、QQ 孤立 Issue 无人响应
- **IronClaw**：依赖滚动维护为主，人工社区互动近零

### 6.2 成熟度判断
- **OpenClaw 与 QwenPaw** 已进入"企业级版本治理"阶段（LTS、Beta→Stable、Release Notes），适合生产部署
- **OpenHuman 与 Hermes Agent** 处于"功能快速演进期"，适合尝鲜但需关注变更影响
- **NanoBot 与 LobsterAI** 处于"质量巩固期"，适合已采纳用户的稳定升级
- **PicoClaw 与 IronClaw** 适合作为补充场景依赖，不建议作为生产主力

---

## 七、值得关注的趋势信号

### 7.1 趋势一：**升级迁移成为生态级痛点**
LobsterAI 的 9 个 PR 全是 OpenClaw v2026.8.1 兼容性修复；OpenClaw 自身体验 #142585 Doctor 阻断；Hermes Agent #103363 升级后静默失效——**升级路径的"silent breaking"是 2026 下半年最确定的行业痛点**。对 AI 智能体开发者的启示：**项目应把"升级自检 + 迁移门控 + 版本错位显式报错"作为基础能力**，而非高级特性。

### 7.2 趋势二：**成本透明度从可选项变为必选项**
QwenPaw 的 `/compact`（#7679）、LobsterAI 的"压缩前记忆保存"opt-in（#2643）、OpenClaw 的备份 CLI `.gitignore` 排除（#40786）——**用户对"默认优化"已不信任，要求显式控制开关**。对开发者的启示：**把性能与成本的权衡配置显式暴露给用户**，而非藏在自动决策中。

### 7.3 趋势三：**记忆子系统成为新的竞争壁垒**
OpenHuman 的 Memory Archivist、OpenClaw 的 SQLite 治理（DEF-61）、NanoBot 的 Dream memory 大小护栏（#5630）——**Memory 不再是附属模块，而是核心架构组件**。对开发者的启示：**早期项目应把记忆子系统的并发控制、保留策略、recap 重试作为架构决策的核心议题**。

### 7.4 趋势四：**多租户协作是下一波产品演进**
QwenPaw Hub 多租户版（#7318，25 评论、4 👍）是当日社区热度最高的 issue；Hermes Agent 一键

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

<think>Let me analyze the GitHub data for NanoBot (github.com/HKUDS/nanobot) for the daily report on 2026-09-11.

Let me organize the information:

**Issues (3 total):**
- #5726 [OPEN] - bug about initial password on headless server (new)
- #5429 [OPEN] - AgentLoop doesn't retrieve exceptions from background tasks (older, still open)
- #5719 [CLOSED] - Discord compaction notices bug (closed today)

**PRs (20 total):**
- Closed/Merged (7):
  - #5720 [CLOSED] - Discord compaction notice fix (fixes #5719)
  - #5723 [CLOSED] - WebUI standalone page widths
  - #5725 [CLOSED] - WebUI chat elements alignment
  - #5722 [CLOSED] - WebUI sidebar hierarchy
  - #5469 [CLOSED] - TUI measured request context
  - #5711 [CLOSED] - Telegram command spellings
  - #5573 [CLOSED] - MCP OAuth token refresh

- Open (13):
  - #5730 - Stream internal model calls with idle timeouts
  - #5729 - Deterministic hash for wecom/weixin media
  - #5728 - Performance: streaming text processing and CLI redraws
  - #5356 - WebUI setup flows
  - #5352 - Model provider removal controls
  - #5641 - iOS PWA fixes
  - #5620 - Cron delivery and batch archive
  - #5702 - Memory Archive consolidation prompt
  - #5698 - WebUI API types across search toggles
  - #5630 - Dream memory size guardrails
  - #5602 - WebUI completion notification sound
  - #5727 - WebUI headless login secret docs
  - #5724 - Agent background task exceptions

**No releases today.**

Now let me create the structured daily report in Chinese.

Key observations:
1. High activity day - 20 PRs, 3 Issues
2. Focus on WebUI improvements (many WebUI PRs)
3. Bug fixes across multiple areas (Discord, Telegram, MCP OAuth, WebUI)
4. Performance improvements (streaming text processing)
5. Documentation improvements (headless login)
6. Long-pending issues like #5429

I need to make sure each item has the GitHub link.

Let me categorize by severity for the bug section and make sure to address all 8 sections requested.

Let me draft the report now.</think>

# NanoBot 项目日报
**日期：2026-09-11**
**仓库：HKUDS/nanobot**

---

## 一、今日速览

NanoBot 今日呈现高度活跃的迭代态势：过去 24 小时内共有 **3 条 Issue** 更新（2 条新开/活跃、1 条关闭）和 **20 条 PR** 更新（13 条待合并、7 条关闭/合并）。维护者集中推进了 **WebUI 体验打磨、Discord/Telegram 渠道修复、MCP 协议优化与模型调用稳定性** 等多个方向，无新版本发布。从合并节奏看，项目处于 **bug 修复密集期 + 性能优化并行** 的阶段，社区贡献者参与度高，代码审查反馈机制运转良好（多个 PR 出现 conflict 与多次更新痕迹）。

---

## 二、版本发布

**今日无新版本发布。** 仓库当前未发布新的 Release 标签，用户仍使用既有版本。

---

## 三、项目进展（今日合并/关闭的重要 PR）

今日共有 **7 条 PR** 完成合并或关闭，标志着项目在以下方向取得实质进展：

| PR | 类型 | 关键变更 | 链接 |
|---|---|---|---|
| [#5720](https://github.com/HKUDS/nanobot/pull/5720) | Bug 修复 | 修复 Discord 中 `sendProgress: false` 仍重复发送 compaction 通知的问题，改为就地更新单条消息 | [链接](https://github.com/HKUDS/nanobot/pull/5720) |
| [#5573](https://github.com/HKUDS/nanobot/pull/5573) | Bug 修复 | **MCP OAuth 令牌自动刷新**：持久化绝对过期时间、授权服务器元数据；401 后自动发现绑定授权服务器并刷新一次 | [链接](https://github.com/HKUDS/nanobot/pull/5573) |
| [#5711](https://github.com/HKUDS/nanobot/pull/5711) | 渠道修复 | Telegram 渠道内命令拼写适配（下划线 ↔ 短横线），help 与控制回复中体现 Dream 别名 | [链接](https://github.com/HKUDS/nanobot/pull/5711) |
| [#5725](https://github.com/HKUDS/nanobot/pull/5725) | WebUI 修复 | 对齐消息页脚图标与对话引导边；将上下文压缩通知渲染为居中单元格 | [链接](https://github.com/HKUDS/nanobot/pull/5725) |
| [#5722](https://github.com/HKUDS/nanobot/pull/5722) | WebUI 增强 | 侧边栏层级与选中反馈精细化：与导航共享滑动圆角背景；新增左侧披露箭头与垂直引导线 | [链接](https://github.com/HKUDS/nanobot/pull/5722) |
| [#5723](https://github.com/HKUDS/nanobot/pull/5723) | WebUI 修复 | Apps/Skills/Automations/Channels 页面与对话居中内容宽度统一为 49.5rem | [链接](https://github.com/HKUDS/nanobot/pull/5723) |
| [#5469](https://github.com/HKUDS/nanobot/pull/5469) | TUI 修复 | 仅在空闲 TUI 页脚显示最近一次 provider 实测请求上下文、缓存命中率、生成速率 | [链接](https://github.com/HKUDS/nanobot/pull/5469) |

**整体评估**：今日合入的内容覆盖了 **协议层（MCP OAuth）、渠道层（Discord/Telegram）、表现层（WebUI/TUI）** 三个关键栈，且每个变更均配套测试用例（priority 普遍为 P2）。这种"由内向外"的修复节奏表明项目正在系统性地清理技术债。

---

## 四、社区热点

**讨论/互动最多的线程**：

1. **#5726 [OPEN] 无头服务器启动密码问题** —— [@gardiol](https://github.com/gardiol) 提出在无 JS 支持的无头服务器上安装后，无法从默认链接访问 WebUI 凭据，已产生 **1 条评论**。这是一类典型的"开箱即用"摩擦，关联的修复 PR [#5727](https://github.com/HKUDS/nanobot/pull/5727) 已提交并进入审核。
   - 链接：https://github.com/HKUDS/nanobot/issues/5726

2. **#5429 [OPEN] AgentLoop 后台任务异常吞没** —— [@yu-xin-c](https://github.com/yu-xin-c) 反馈 `AgentLoop.schedule_background()` 通过 `set.discard` 丢弃已完成任务，从未调用 `task.result()`，导致后台任务失败时只暴露 asyncio 通用错误。已得到 **1 条评论**，并有修复 PR [#5724](https://github.com/HKUDS/nanobot/pull/5724) 跟进。
   - 链接：https://github.com/HKUDS/nanobot/issues/5429

**诉求分析**：当前社区诉求集中在两个方向 —— **降低首次部署门槛**（#5726、#5727 文档缺失）和 **提升可观测性**（#5429 后台异常可见性）。前者影响新用户留存，后者影响深度用户的运维体验。

---

## 五、Bug 与稳定性

按严重程度排列：

### 🔴 高优先级（影响核心流程）

1. **#5726 [OPEN] 无头服务器初始密码未公开**
   - 影响面：新用户在 headless 部署后无法登录 WebUI
   - 状态：**已有跟进** —— 修复 PR [#5727](https://github.com/HKUDS/nanobot/pull/5727)（文档化 `channels.websocket.tokenIssueSecret` 作为生成值）已开放待合并
   - 链接：https://github.com/HKUDS/nanobot/issues/5726

2. **#5429 [OPEN] 后台任务异常被静默吞掉**
   - 影响面：Dream 后端合并、会话归档、WebUI 标题生成等后台任务失败时无可见日志，仅显示 asyncio 通用 "Task exception was never retrieved"
   - 状态：**已有跟进** —— 修复 PR [#5724](https://github.com/HKUDS/nanobot/pull/5724) 已开放，关联 `AgentLoop.schedule_background`，将显式检索结果并记录非预期失败
   - 链接：https://github.com/HKUDS/nanobot/issues/5429

### 🟡 中优先级（体验降级）

3. **#5719 [CLOSED] Discord 压缩通知噪音**
   - 描述：即便设置 `sendProgress: false`，空闲压缩仍会发出"Compressing context…"与"Context compacted."两条独立消息
   - 状态：**已修复** —— [#5720](https://github.com/HKUDS/nanobot/pull/5720) 改为就地更新原消息
   - 链接：https://github.com/HKUDS/nanobot/issues/5719

4. **新开放 PR #5730（开放中）—— 内部模型调用超时**
   - 描述：Dream 等内部任务在无 UI stream 回调时选择非流式模型请求；超 120 秒模型会反复触发 OpenAI 兼容 HTTP 超时，并在 300 秒 Runner 总限制内无法推进 Dream 记忆压缩
   - 状态：修复 PR [https://github.com/HKUDS/nanobot/pull/5730](https://github.com/HKUDS/nanobot/pull/5730) 已开放
   - 严重性：**中高** —— 直接影响记忆压缩稳定性

### 🟢 已修复（Bundled）

- **#5573** MCP OAuth 令牌过期 → 已合并
- **#5711** Telegram 命令拼写 → 已合并
- **#5725/#5723/#5722** WebUI 视觉一致性 → 已合并

---

## 六、功能请求与路线图信号

当前开放 PR 中蕴含的明确功能/增强方向：

| 功能方向 | 代表 PR | 状态 |
|---|---|---|
| **WebUI 引导流程重构** | [#5356](https://github.com/HKUDS/nanobot/pull/5356) 重设计频道目录、序列化依赖安装 | 待合并 |
| **模型供应商移除控制** | [#5352](https://github.com/HKUDS/nanobot/pull/5352) 新增 WebUI 删除内置/自定义 provider 的确认流 | 待合并 |
| **Cron 投递与批量归档** | [#5620](https://github.com/HKUDS/nanobot/pull/5620) 显式每-cron 结果投递目标；新增"归档"生命周期 | 待合并 |
| **完成提示音** | [#5602](https://github.com/HKUDS/nanobot/pull/5602) 新增可选 `notificationSound`（默认关闭） | 待合并 |
| **Memory 大小护栏** | [#5630](https://github.com/HKUDS/nanobot/pull/5630) 回归修复 —— 为 SOUL.md / USER.md / MEMORY.md 重新加入大小上限（恢复 `_DREAM_FILE_EMBED_CAP` 语义） | 待合并 |
| **Archive 合并提示词工作区覆盖** | [#5702](https://github.com/HKUDS/nanobot/pull/5702) 类似 Dream prompt，新增 `/archive-prompt init` 工作区本地覆盖 | 待合并 |
| **流式文本处理性能优化** | [#5728](https://github.com/HKUDS/nanobot/pull/5728) 跳过无控制标签文本的扫描；CLI 增量重绘 | 待合并 |
| **企业微信媒体文件名确定性** | [#5729](https://github.com/HKUDS/nanobot/pull/5729) Python `hash()` → SHA1 摘要，避免进程重启后哈希不稳定 | 待合并 |

**路线图信号**：下一版本很可能聚焦 **WebUI 易用性收尾（#5356、#5352）、记忆系统稳定性（#5630、#5702、#5730）、以及可观测性（#5724、TUI 计量）** 三大主题。建议用户重点关注 Dream 相关 PR 集群，这是近期迭代重心。

---

## 七、用户反馈摘要

提炼自今日 Issues 与 PR 评论中的真实场景：

1. **首次部署摩擦（#5726）**
   - 场景：用户在 headless 服务器部署后，无法从同机浏览器访问默认链接（因无 JS 支持），转而通过远程 Firefox 访问时遇到"凭据不可知"问题。
   - 痛点：默认链接策略（localhost 优先）未充分覆盖远程访问场景，文档未明确指明 `tokenIssueSecret` 的位置。
   - 满意度：低 —— 用户在标题中拼写错误（"Startuo"），暗示匆忙排查。

2. **后台可观测性缺口（#5429）**
   - 场景：深度用户在生产环境中观察到 Dream 任务静默失败，无法定位是模型超时、还是归档脚本异常。
   - 痛点：asyncio 默认行为对深度用户不友好，需主动 `task.result()` 才能获取异常细节。
   - 满意度：中 —— 已得到社区响应与 PR 跟进。

3. **WebUI 一致性正向反馈（隐含于 #5722/#5723/#5725）**
   - 这些 PR 标题前缀 `fix(webui):` 与 `feat(webui):` 反映维护团队正在主动收敛跨页面视觉与交互差异，说明社区已多次反馈"页面间风格不统一"的体验问题。

---

## 八、待处理积压（提醒维护者关注）

以下 Issue/PR 长期保持 OPEN 状态，建议维护者优先评审：

| 编号 | 类型 | 标题 | 停留时长 | 链接 |
|---|---|---|---|---|
| **#5429** | Issue | AgentLoop does not retrieve exceptions from background tasks | **24 天**（自 2026-08-18） | [链接](https://github.com/HKUDS/nanobot/issues/5429) |
| **#5356** | PR | feat(webui): improve setup flows across chat channels (NAN-112) | **60 天**（自 2026-08-12） | [链接](https://github.com/HKUDS/nanobot/pull/5356) |
| **#5352** | PR | Add model provider removal controls | **60 天**（自 2026-08-12） | [链接](https://github.com/HKUDS/nanobot/pull/5352) |
| **#5469** | PR | fix(tui): show measured request context | 虽今日合并，但停留 51 天，反映 TUI 变更评审周期偏长 | [链接](https://github.com/HKUDS/nanobot/pull/5469) |

**建议**：
- #5429 已有明确修复方向，建议加速合并 #5724
- #5356 / #5352 属于 P2 大型重构 PR，已标 `conflict`，建议维护者及时 rebase 或拆分评审
- 整体而言，**TUI/CLI 侧 PR 评审周期明显长于 WebUI 侧**，可能与该模块贡献者较少有关

---

## 📊 项目健康度总评

| 维度 | 评分 | 说明 |
|---|---|---|
| **活跃度** | ⭐⭐⭐⭐⭐ | 单日 20 PR + 3 Issue，属高强度迭代期 |
| **代码审查效率** | ⭐⭐⭐ | WebUI PR 流转较快，TUI/CLI PR 积压明显 |
| **测试覆盖** | ⭐⭐⭐⭐ | 多数 PR 显式标记 `test` 标签，质量意识良好 |
| **社区响应** | ⭐⭐⭐⭐ | Issue 24h 内通常有跟进，无长期沉默的"孤儿"问题 |
| **稳定性趋势** | ⭐⭐⭐ | 持续修复 Discord/Telegram/OAuth 等关键路径；后台异常吞没问题需尽快根治 |
| **版本节奏** | ⭐⭐ | 今日无新版本，但 PR 储备充分，下个 Release 候选已具雏形 |

**结论**：NanoBot 当前处于 **稳态修复 + 体验打磨** 阶段，无重大架构变动；维护团队对社区反馈响应积极，但 TUI/CLI 模块的代码评审吞吐有提升空间。

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

<think>The user wants me to generate a daily project report for PicoClaw based on the GitHub data provided. Let me analyze the data carefully:

**Data Overview:**
- Past 24 hours Issues updates: 2 (1 new/active, 1 closed)
- Past 24 hours PR updates: 7 (all pending merge, 0 merged/closed)
- New releases: 0

**Issues:**
1. #3265 [CLOSED] [stale] - Gateway startup fails with deltachat unknown type - by @Cipher208, created 2026-07-19, updated 2026-09-10, 6 comments, 1 like
2. #3349 [OPEN] [stale] [BUG] - QQ频道无法正常使用 - by @bxwl5, created 2026-08-30, updated 2026-09-10, 4 comments, 0 likes

**Pull Requests:**
1. #3371 [OPEN] feat(providers): add opencode-go provider with session header support - by @EMTumariscal, created 2026-09-08, updated 2026-09-10
2. #3376 [OPEN] fix(deltachat): initialize as custom channel to solve config validation error - by @luisgdev, created 2026-09-10, updated 2026-09-10
3. #3364 [OPEN] [dependencies] bump github.com/aws/aws-sdk-go-v2 from 1.42.0 to 1.45.1 - by dependabot
4. #3363 [OPEN] [dependencies] bump github.com/ergochat/irc-go from 0.6.0 to 0.7.0 - by dependabot
5. #3362 [OPEN] [dependencies] bump golang.org/x/term from 0.44.0 to 0.45.0 - by dependabot
6. #3361 [OPEN] [dependencies] bump google.golang.org/protobuf from 1.36.11 to 1.36.12 - by dependabot
7. #3360 [OPEN] [dependencies] bump github.com/larksuite/oapi-sdk-go/v3 from 3.9.4 to 3.11.0 - by dependabot

Now let me generate the daily report following the requested structure:

1. **今日速览** - Overall status with activity assessment
2. **版本发布** - Skip (no releases)
3. **项目进展** - Important merged/closed PRs
4. **社区热点** - Most discussed issues/PRs
5. **Bug 与稳定性** - Bugs reported today
6. **功能请求与路线图信号** - Feature requests
7. **用户反馈摘要** - User feedback from comments
8. **待处理积压** - Long-pending items

Let me think about activity assessment:
- 2 issue updates, 7 PR updates
- No releases
- No PRs merged in 24 hours
- 1 issue closed (#3265 - the deltachat issue, which has a fix PR #3376)
- Most PRs are dependabot dependency bumps (5 out of 7)

Activity level: low to moderate. Mainly dependabot PRs and one bug fix in progress.

Let me write the report now. I should be objective, professional, data-driven, and highlight project health.</think>

# PicoClaw 项目动态日报
**日期：2026-09-11**
**项目地址**：[github.com/sipeed/picoclaw](https://github.com/sipeed/picoclaw)

---

## 1. 今日速览

PicoClaw 今日整体活跃度偏低，处于"常规维护状态"。过去 24 小时仅有 2 条 Issue 更新、7 条 PR 更新，且 **无 PR 合并、无新版本发布**。值得关注的进展是：长期存在的 deltachat 启动错误问题（#3265）已正式关闭，配套修复 PR #3376 已提交待审；此外 5 条 dependabot 依赖升级 PR 集中更新，进一步推进基础设施安全与版本同步。社区议题以 QQ 频道鉴权失败（#3349）为主，正处于等待维护者响应的状态。

---

## 2. 版本发布

⚠️ **无新版本发布**。当前仓库无新增 Release tag。建议关注者留意 PR #3376（deltachat 修复）与 PR #3371（opencode-go provider）的合并节点，下一次发版可能将这两个改动纳入。

---

## 3. 项目进展

**已关闭（Issue）：**
- [#3265](https://github.com/sipeed/picoclaw/issues/3265) Gateway startup fails with 'channel deltachat has unknown type deltachat' — 已关闭。该 Issue 自 2026-07-19 提出，历时约 53 天，得益于 PR #3376 提供了清晰的根因修复（将 deltachat 注册为 custom channel），维护者决定合入 fix 后关闭 issue，标志着 deltachat 通道可用性向前迈进了实质一步。

**待合并（PR）：**
- [#3376](https://github.com/sipeed/picoclaw/pull/3376) fix(deltachat): initialize as custom channel to solve config validation error — 修复 #3265 的根因，处于待审状态。
- [#3371](https://github.com/sipeed/picoclaw/pull/3371) feat(providers): add opencode-go provider with session header support — 新增 opencode-go 提供商，支持通过 `x-opencode-session` header 进行会话路由，是 Provider 层的重要扩展。

**依赖更新（5 条 dependabot PR，均待审）：**
- [#3364](https://github.com/sipeed/picoclaw/pull/3364) `aws-sdk-go-v2` 1.42.0 → 1.45.1
- [#3363](https://github.com/sipeed/picoclaw/pull/3363) `ergochat/irc-go` 0.6.0 → 0.7.0
- [#3362](https://github.com/sipeed/picoclaw/pull/3362) `golang.org/x/term` 0.44.0 → 0.45.0
- [#3361](https://github.com/sipeed/picoclaw/pull/3361) `google.golang.org/protobuf` 1.36.11 → 1.36.12
- [#3360](https://github.com/sipeed/picoclaw/pull/3360) `larksuite/oapi-sdk-go/v3` 3.9.4 → 3.11.0

> 📊 **评估**：今日项目实质性代码推进量有限。1 个 issue 关闭 + 1 个功能 PR + 5 个依赖 bump 是主要产出，但所有代码改动均处于"待合并"状态，**项目 forward velocity 趋缓**，需关注 PR review 节奏。

---

## 4. 社区热点

按评论数与状态评估：

| 排名 | Issue/PR | 标题 | 评论数 | 状态 |
|------|---------|------|--------|------|
| 1 | [#3265](https://github.com/sipeed/picoclaw/issues/3265) | Gateway startup fails with deltachat | 6 | CLOSED |
| 2 | [#3349](https://github.com/sipeed/picoclaw/issues/3349) | QQ频道无法正常使用 | 4 | OPEN |

**分析：**
- **#3265** 评论最多（6 条）但已被关闭，反映用户对"非显式配置即报错"这类启动期 UX 问题容忍度较低，社区期望 gateway 对未配置通道有更宽容的默认行为。
- **#3349** QQ 频道鉴权错误（HTTP 401 / err_code 40011005）属于真实使用障碍，目前尚无修复 PR，4 条评论暗示用户多次尝试自助排查无果，社区诉求集中在"提供鉴权配置示例或一键检测工具"。

---

## 5. Bug 与稳定性

按严重程度排列：

| 严重度 | Issue | 描述 | 修复 PR |
|--------|-------|------|---------|
| 🔴 高 | [#3349](https://github.com/sipeed/picoclaw/issues/3349) | QQ 频道鉴权 401 导致功能完全不可用，影响 docker 与二进制两种部署方式 | ❌ 暂无 |
| 🟡 中 | [#3265](https://github.com/sipeed/picoclaw/issues/3265) | Gateway 启动失败（已通过 [#3376](https://github.com/sipeed/picoclaw/pull/3376) 修复，issue 已关） | ✅ #3376 |

**稳定性评估：** 当前未发现新的崩溃或回归问题。已有 Bug 中 #3265 已闭环；#3349 仍是"孤立未修复"状态，建议维护者优先响应。

---

## 6. 功能请求与路线图信号

**今日明确的功能新增：**
- [#3371](https://github.com/sipeed/picoclaw/pull/3371) opencode-go provider — 由 @EMTumariscal 提交，意图保留 PicoClaw 对 OpenCode Go 的兼容性，并按模型 ID 自动路由到对应端点家族，同时附带 `x-opencode-session` 会话头支持。这是一份**已具备 PR 形态的功能请求**，具备较高概率被纳入下一个版本。

**间接信号：**
- #3349 用户场景显示 QQ 频道已具备官方机器人接入流程，但当前 PicoClaw 实现无法匹配新的鉴权头格式（`Authorization` 参数格式错误），隐含了对 **QQ 频道鉴权适配** 这一功能升级的需求。建议维护者评估是否需要在下一个 release 中同步更新 QQ 通道 SDK 调用方式。

---

## 7. 用户反馈摘要

**真实痛点提炼：**

1. **启动期错误信息不够友好**（来自 #3265 评论）— 用户即使不启用 deltachat，仍会因配置 schema 校验失败而无法启动 gateway。社区期望"未配置即禁用"的软失败行为，而非硬错误。
2. **QQ 频道可用性缺失**（来自 #3349 评论）— 用户在 docker 和 Linux x86 二进制两种部署方式下均遇到相同的鉴权 401 错误（`code:11241`），说明问题存在于协议层而非构建层。用户已尝试自助排查但无果，反映社区缺乏对中文 IM 通道（QQ、飞书等）调试文档的支持。
3. **依赖陈旧风险** — 5 条 dependabot PR 集中提交说明项目核心依赖（AWS SDK、IRC、protobuf、飞书 SDK、golang.org/x/term）已落后上游多个版本，**潜在安全与稳定性风险**，建议加速合入。

---

## 8. 待处理积压

| 类型 | 编号 | 标题 | 等待时长 | 建议 |
|------|------|------|----------|------|
| 🔴 重要 Issue | [#3349](https://github.com/sipeed/picoclaw/issues/3349) | QQ频道无法正常使用 | 已开放 12 天（自 2026-08-30） | 维护者需响应并分配修复资源 |
| 🟡 待合并 PR | [#3371](https://github.com/sipeed/picoclaw/pull/3371) | feat(providers): opencode-go provider | 已开放 3 天（自 2026-09-08） | 等待 reviewer review |
| 🟡 待合并 PR | [#3360–#3364](https://github.com/sipeed/picoclaw/pulls?q=is%3Apr+is%3Aopen+author%3Aapp%2Fdependabot) | 5 条 dependabot 依赖升级 | 已开放 8 天（自 2026-09-03） | 集中 review 后批量合并，减少积压 |
| 🟢 已解决但需版本化 | [#3376](https://github.com/sipeed/picoclaw/pull/3376) | deltachat fix | 今日新提交 | 优先 review 与合并 |

**提醒维护者关注——积压告警：**
- 5 条 dependabot PR 平均待审 8 天未合并，可能反映项目近期 review 资源紧张或 CI 门槛较高。
- #3349 作为唯一开放 Bug，已标记为 stale，建议主动联系 issue 作者或指定 assignee，避免进一步老化。

---

## 📌 健康度小结

| 维度 | 评分 | 说明 |
|------|------|------|
| 活跃度 | ⭐⭐☆☆☆ | 24h 内无合并、无发版，仅 1 issue 关闭 |
| Bug 响应 | ⭐⭐⭐☆☆ | #3265 已闭环，但 #3349 仍孤立 |
| 依赖卫生 | ⭐⭐☆☆☆ | 5 条积压 dependabot PR，依赖整体滞后 |
| 社区参与 | ⭐⭐⭐☆☆ | 有外部贡献者（@luisgdev、@EMTumariscal）持续提交 |
| Forward Velocity | ⭐⭐☆☆☆ | 关键修复待合并，下一发版节奏尚不明朗 |

**结论**：PicoClaw 当前处于"维护期向活跃期过渡"阶段。技术债务（依赖积压）与中文 IM 通道可用性是下一阶段需重点解决的两项议题。

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

<think>The user is asking me to generate a daily project report for IronClaw based on GitHub data from 2026-09-11. Let me analyze the data carefully and produce a structured report in Chinese.

Let me review the data:
- 1 Issue opened (no closures)
- 8 PRs (6 open, 2 closed/merged)
- No new releases

Key items:
1. Issue #8093 - Daily ironclaw failure taxonomy — 2026-09-10 (this is an automated benchmark report)
2. PR #8076 - distinguish disconnected shared channels (Slack) - OPEN
3. PR #8097 - dependabot Rust deps update - OPEN
4. PR #8080 - dependabot Rust deps update (older, 21 updates) - CLOSED
5. PR #8096 - vitest bump - OPEN
6. PR #8094 - js-yaml bump - OPEN
7. PR #8095 - baseline-browser-mapping bump - OPEN
8. PR #8072 - Telegram Bot API command menu - CLOSED
9. PR #8092 - IME composition fix for webui chat composer - OPEN

Let me write a structured report with the requested sections. Since this is Chinese language, I should write in Chinese.

I need to be careful with dates - the report date is 2026-09-11 but the issue mentioned is for 2026-09-10.

Let me structure this:

1. 今日速览
2. 版本发布 - 省略（无新版本）
3. 项目进展 - 已合并/关闭的PR
4. 社区热点
5. Bug与稳定性
6. 功能请求与路线图信号
7. 用户反馈摘要 - Issues 评论很少，需要说明
8. 待处理积压

Let me draft this out carefully.</think>

# IronClaw 项目日报 · 2026-09-11

> 数据来源：[github.com/nearai/ironclaw](https://github.com/nearai/ironclaw)（统计窗口：2026-09-10 至 2026-09-11）

---

## 一、今日速览

IronClaw 在过去 24 小时内维持了**中等偏低**的活跃度：仓库当日新增 1 条 Issue、8 条 PR（其中 2 条已关闭/合并，6 条仍处待合并状态），且**无新版本发布**。活动主体由 dependabot 自动发起的依赖升级 PR（5 条，占比约 63%）构成，真正由人工驱动的功能性提交仅 3 条，反映出项目当前处于**维护性迭代阶段**而非大规模功能冲刺期。整体节奏平稳，无重大合并热点或紧急修复事件，项目健康度处于稳态。

---

## 二、版本发布

**本周期无新版本发布。** 最近一次正式发布情况不在本次数据窗口内，待后续日报跟踪。

---

## 三、项目进展（已合并 / 已关闭 PR）

今日有 2 条 PR 走向关闭状态，类型上一条为依赖项批量更新，一条为 Telegram 频道能力扩展。

| PR | 标题 | 作者 | 影响范围 |
|---|---|---|---|
| [#8080](https://github.com/nearai/ironclaw/pull/8080) | chore(deps): bump the everything-else group with 21 updates | @dependabot[bot] | Rust 工具链与运行时分层依赖整体抬版（uuid、base64、rust_decimal 等） |
| [#8072](https://github.com/nearai/ironclaw/pull/8072) | feat(telegram): register the Bot API command menu at activation | @thisisjoshford | Telegram 频道能力补齐 |

**关键推进解读：**

- **Telegram 命令菜单自动注册** ([#8072](https://github.com/nearai/ironclaw/pull/8072))：扩展激活时通过 Bot API `setMyCommands` 将 `/model`、`/status`、`/new`、`/stop`、`/interrupt` 写入聊天输入框旁的"汉堡菜单"，停用时通过 `deleteMyCommands` 清理。这是一项面向**多频道一致性体验**的小幅改进，让 Telegram 用户不再需要记忆命令。该 PR 已被标记 `size: L` 但 `risk: low`，说明改动面虽广但影响可控。
- **依赖项 #8080 的关闭与 #8097 的接力**：旧的 21 项升级 PR [#8080](https://github.com/nearai/ironclaw/pull/8080) 已关闭，新的 24 项升级 PR [#8097](https://github.com/nearai/ironclaw/pull/8097) 随即开出，说明维护团队对 Rust 依赖的版本策略为**滚动升级 + 及时替换**，并未长期阻塞。

整体而言，项目今日在**"频道适配层完整性"** 维度有微小推进，未触及核心代理运行时。

---

## 四、社区热点（讨论 / 反应最活跃条目）

⚠️ **数据局限性说明**：本周期内所有 PR 与 Issue 的 `comments` 字段均显示为 `undefined` 或 `0`，且 `👍` 反应数全部为 0。这意味着：

1. 今日**没有任何议题进入实质性的社区讨论阶段**；
2. 自动化 PR（dependabot）天然不会引发评论互动；
3. 唯一的人为 Issue [#8093](https://github.com/nearai/ironclaw/issues/8093) 同样零评论。

**热点候选（按人工参与权重排序）：**

1. **[#8076](https://github.com/nearai/ironclaw/pull/8076) fix(assistant): distinguish disconnected shared channels** —— 由 @be-student 提交、跨多产品面（assistant、adapter、OpenAI-compatible、Slack 能力文档）的一致性修复，是本窗口内**最值得跟进的人为 PR**。
2. **[#8093](https://github.com/nearai/ironclaw/issues/8093) Daily ironclaw failure taxonomy — 2026-09-10** —— @pranavraja99 提交的每日失败分类自动化报告，属于例行 benchmark 输出。

社区诉求从这两条可以提炼：**Slack 共享频道在多用户绑定下的状态区分**（属于边界场景但被正式提出），以及**对模型行为失败模式的系统性追踪**（说明团队已建立回归观测机制）。

---

## 五、Bug 与稳定性

| 严重程度 | 编号 | 描述 | 是否有对应 fix PR |
|---|---|---|---|
| 🟡 中 | [#8092](https://github.com/nearai/ironclaw/pull/8092) | **WebUI 中文输入法（IME）合成事件丢失**：在聊天输入框使用拼音/日文 IME 选词时，按 Enter 确认会被错误识别为"发送消息"，导致选词失败 | ✅ **同 PR 即修复**（fix(webui): preserve IME composition in the chat composer） |
| 🟢 低 | [#8076](https://github.com/nearai/ironclaw/pull/8076) | Slack 共享频道与未配对账号的"已断开"状态混淆，可能导致拒绝行为分类不一致 | ✅ 同 PR 即修复 |

**分析：**

- [#8092](https://github.com/nearai/ironclaw/pull/8092) 是一类典型的**国际化输入体验回归**——`keyCode === 229` 是浏览器对 IME 合成态的统一约定，但 Safari 在某些场景下 `isComposing` 会错误返回 `false`，需要兼容。修复方案在命令菜单与 Enter 发送逻辑之前先放行原生 IME 合成键，**不引入定时器或锁存器**，避免了常见的竞态反模式，并附带调用层回归用例。
- [#8076](https://github.com/nearai/ironclaw/pull/8076) 修复属于**多产品面契约一致性**，本身不构成"崩溃"，但若不修复可能导致用户被错误拒绝聊天。

两条 PR 都处于 OPEN 状态，**尚未合并**，建议维护者优先评估 [#8092](https://github.com/nearai/ironclaw/pull/8092) 以提升中文/日文/韩文用户体验。

---

## 六、功能请求与路线图信号

由于窗口内**无新增用户功能请求型 Issue**，以下信号均来自 PR 提交内容所暗示的方向：

| 方向 | 证据 | 路线图可能性 |
|---|---|---|
| **多频道体验一致性**（Telegram 命令菜单、Slack 共享状态） | [#8072](https://github.com/nearai/ironclaw/pull/8072) ✅ 已合并、[#8076](https://github.com/nearai/ironclaw/pull/8076) 待合并 | 高 —— 团队明显在逐频道补齐交互契约 |
| **国际化输入体验** | [#8092](https://github.com/nearai/ironclaw/pull/8092) | 中 —— 该修复表明 WebUI 开始承接非英文用户场景，未来或扩展至更多键盘事件 |
| **依赖基线持续滚动** | [#8097](https://github.com/nearai/ironclaw/pull/8097)、[#8096](https://github.com/nearai/ironclaw/pull/8096)、[#8094](https://github.com/nearai/ironclaw/pull/8094)、[#8095](https://github.com/nearai/ironclaw/pull/8095) | 高 —— 已成为常态化维护节奏 |

**值得关注的下一版本候选**：[#8072](https://github.com/nearai/ironclaw/pull/8072)（已关闭但需确认是否已落地到默认分支）+ [#8076](https://github.com/nearai/ironclaw/pull/8076)（待合并）共同构成一次**"Slack/Telegram 频道适配层小版本"** 的素材，建议作为下次发布的 changelog 主题。

---

## 七、用户反馈摘要

⚠️ **本期窗口用户反馈密度极低**：唯一的人为 Issue [#8093](https://github.com/nearai/ironclaw/issues/8093) 为**自动化 benchmark 报告**，非用户反馈；其余 8 条 PR 中 5 条来自 @dependabot[bot]、3 条来自个人贡献者但**评论数均为 0**。

**可观察到的真实场景信号**（从 PR 描述中反推）：

- **Slack 共享频道存在多用户配对断开场景**，需要产品能够区分"已配对用户的临时断开"与"未配对账号"（[#8076](https://github.com/nearai/ironclaw/pull/8076)）。
- **WebUI 用户使用 IME 输入法**（[#8092](https://github.com/nearai/ironclaw/pull/8092)），意味着 IronClaw 已有非英文活跃用户群。
- **Telegram 用户期望通过原生 UI 暴露命令**（[#8072](https://github.com/nearai/ironclaw/pull/8072)），降低命令发现成本。

**满意度判断**：基于现有数据**无法做出明确判断**（缺乏 👍/👎 与评论样本）。建议下一周期增加对 PR 评论区的主动监测。

---

## 八、待处理积压与维护者提醒

以下条目建议维护者优先关注：

| 类型 | 编号 | 提醒理由 |
|---|---|---|
| 🟠 长期待合并 | [#8076](https://github.com/nearai/ironclaw/pull/8076) | 创建于 **2026-09-06**，距今已超 4 天，跨多产品面改动需要 review 资源 |
| 🟠 长期待合并 | [#8072](https://github.com/nearai/ironclaw/pull/8072) | 创建于 **2026-09-04**，距今 7 天，虽已"关闭"但**需确认是否已实际合并至主干**（标签为 CLOSED，可能为关闭未合并） |
| 🟡 新功能待评估 | [#8092](https://github.com/nearai/ironclaw/pull/8092) | 用户体验修复，建议在下一个 patch 版本优先纳入 |
| 🟡 依赖升级堆积 | [#8097](https://github.com/nearai/ironclaw/pull/8097)、[#8096](https://github.com/nearai/ironclaw/pull/8096)、[#8094](https://github.com/nearai/ironclaw/pull/8094)、[#8095](https://github.com/nearai/ironclaw/pull/8095) | dependabot 一次性产出 4 条 PR 待合并，建议批量 review 以避免后续 rebase 成本

**社区健康度总评**：⭐⭐⭐☆☆（3/5）—— 项目处于稳定维护节奏，自动化工具有效运转，但**人工社区互动几乎为零**，需关注是否反映活跃用户基数下降或仅是本周期的偶然低谷。

---

*报告生成时间：2026-09-11 · 数据快照基于 GitHub 公开 API*

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

<think>Let me analyze the GitHub data for LobsterAI project for 2026-09-11 and generate a structured daily report.

Key observations from the data:
1. No new Issues activity in the past 24 hours (0 new/active, 0 closed)
2. 13 PRs updated - 3 still open (stale dependabot PRs from 2026-08-10), 10 closed
3. No new releases
4. Most closed PRs (8 out of 10) are from @btc69m979y-dotcom and are related to OpenClaw v2026.8.1 bug fixes
5. The closed PRs are all dated 2026-09-10 and 2026-09-11
6. Open stale PRs are dependabot dependency bumps that have been stale for about a month

Let me categorize the PRs:
- #2651 - Fix for stale desktop sessions resuming (CLOSED)
- #2650 - Fix for memory sidecar archive collisions (CLOSED)
- #2649 - Fix for gateway startup state migrations (CLOSED)
- #2648 - Deduplicate IM restarts and hot reload MCP config (CLOSED)
- #2647 - Quarantine corrupt workspace attestations before startup (CLOSED)
- #2646 - Apply history date filters locally (CLOSED)
- #2645 - Restore collapsed engine failure overlay clicks (CLOSED)
- #2644 - Avoid false restart screens during config sync (CLOSED)
- #2643 - Add opt-in memory flush setting (CLOSED - this is a feature)
- #2642 - Unblock legacy session migration (CLOSED)

Open stale PRs:
- #2459 - Bump @nodesecure/js-x-ray from 14.3.0 to 16.0.0
- #2461 - Bump eslint-plugin-react-hooks from 5.2.0 to 7.1.1
- #2464 - Bump react-dom from 18.3.1 to 19.2.8

These are all QA-driven fixes related to OpenClaw v2026.8.1 integration issues, which suggests a major version upgrade caused regression issues.

Let me now write a comprehensive report in Chinese as the request is in Chinese.</think>

# LobsterAI 项目日报 · 2026-09-11

## 📌 今日速览

今日 LobsterAI 项目呈现出 **集中修复、批量合入** 的典型版本迭代收尾特征。过去的 24 小时内无新增 Issue，但有 **10 个 PR 在短时间内集中关闭**，其中 9 个 PR 全部由同一开发者 @btc69m979y-dotcom 提交，且几乎都围绕 **OpenClaw v2026.8.1 升级后的兼容性修复** 展开，表明团队正对一次较大规模的依赖/上游升级带来的回归进行系统性兜底。整体活跃度评分：**中高**（修复密度高，但社区交互低，无版本发布）。需要关注的是 3 个依赖升级 PR（#2459/#2461/#2464）已标记为 stale 仍未合并，存在潜在安全与维护风险。

---

## 🚀 版本发布

**今日无新版本发布。**

虽然合入了 10 个 PR（其中包含 1 个新功能 #2643 和多个关键修复），但目前尚未触发 Release 流程。从 PR 密度与修复主题判断，下一版本（如 OpenClaw 配套 patch 版本）极有可能在 1–3 天内发布，建议关注 `releases` 页面。

---

## 📈 项目进展

今日合入的 PR 中，以下几项对项目推进具有较高价值：

### 🔧 关键 Bug 修复（OpenClaw v2026.8.1 升级相关）

| PR | 主题 | 价值 |
|---|---|---|
| [#2642](https://github.com/netease-youdao/LobsterAI/pull/2642) | 解除旧会话迁移阻塞 | 修复 SQLite 与 archive 校验因重复 session header 导致 Gateway 启动失败 |
| [#2647](https://github.com/netease-youdao/LobsterAI/pull/2647) | 隔离损坏的工作区 attestation | 修复空 / 全 NUL 的旧 attestation 阻塞所有 Gateway 启动（Windows 案例） |
| [#2649](https://github.com/netease-youdao/LobsterAI/pull/2649) | 完成 Gateway 启动状态迁移 | 修复 device identity 未从 JSON 迁出导致的预检退出 |
| [#2650](https://github.com/netease-youdao/LobsterAI/pull/2650) | 修复 memory sidecar 归档冲突 | 修复旧 memory index 与 `.migrated` 备份共存导致 Gateway 启动失败 |
| [#2651](https://github.com/netease-youdao/LobsterAI/pull/2651) | 防止陈旧桌面会话被恢复 | 避免 orphan scan 将历史 `running` 状态误判为中断并自动重跑 |
| [#2644](https://github.com/netease-youdao/LobsterAI/pull/2644) | 配置同步时避免误报重启页 | 修复短暂就绪探针超时反复显示引擎启动页，并补齐 `agents.defaults.sessionStore` 迁移 |
| [#2648](https://github.com/netease-youdao/LobsterAI/pull/2648) | 去重 IM 重启 + MCP 热重载 | 修复 IM 切换重复触发 Gateway 重启；MCP 改用 OpenClaw 原生热重载 |

### 🎨 渲染层 / UX 修复

- [#2646](https://github.com/netease-youdao/LobsterAI/pull/2646) 定时任务历史筛选参数 `startMs/endMs` 不被 OpenClaw 支持，改在本地过滤
- [#2645](https://github.com/netease-youdao/LobsterAI/pull/2645) 修复 Windows 上引擎启动失败弹窗折叠后状态 pill 吃掉点击事件的问题

### ✨ 新功能

- [#2643](https://github.com/netease-youdao/LobsterAI/pull/2643) **新增「启用压缩前记忆保存」开关**（默认关闭、opt-in）— 平衡长对话体验与 token 成本

**整体评估**：项目在稳定性方向上迈出 **实质性一步**，围绕 OpenClaw v2026.8.1 形成完整的修复闭环（从会话迁移、设备身份、attestation、memory 归档到 IM/MCP 重启策略）。同时 #2643 体现团队开始主动暴露 "性能/成本" 类配置项给用户，方向积极。

---

## 🔥 社区热点

今日无 Issues 互动，所有 PR 评论数均为 `undefined`，社区讨论处于 **静默期**。从趋势看：

- 所有合入的 PR 均来自 **同一开发者**，缺少外部贡献者协作信号；
- **没有用户反馈的 Issues** 进入流程，说明 QA-驱动修复链路顺畅，但缺少终端用户参与度数据；
- 3 个 stale 依赖 PR (#2459/#2461/#2464) 已 1 个月未处理，**Dependabot stale 标记需要维护者主动复盘**。

建议维护者考虑为 OpenClaw 升级系列修复撰写 1 篇 Release Notes 或社区公告，激活用户反馈渠道。

---

## 🐞 Bug 与稳定性

按严重程度排序（今日报告/修复的 Bug）：

### 🔴 P0 - 启动阻断类（已修复）

1. **Gateway 启动失败：旧会话迁移冲突** → [#2642](https://github.com/netease-youdao/LobsterAI/pull/2642)
   - 表现：升级到 v2026.8.1 后重复 session header 导致 archive 校验失败
2. **Gateway 启动失败：损坏 attestation** → [#2647](https://github.com/netease-youdao/LobsterAI/pull/2647)
   - 表现：Windows 上 59 字节全 NUL 文件导致所有启动阻塞
3. **Gateway 启动失败：device identity 未迁移** → [#2649](https://github.com/netease-youdao/LobsterAI/pull/2649)
4. **Gateway 启动失败：memory 归档冲突** → [#2650](https://github.com/netease-youdao/LobsterAI/pull/2650)

### 🟠 P1 - 用户体验中断（已修复）

5. **历史桌面会话被误恢复** → [#2651](https://github.com/netease-youdao/LobsterAI/pull/2651)
6. **配置同步时误显示引擎启动页** → [#2644](https://github.com/netease-youdao/LobsterAI/pull/2644)
7. **IM 切换 / MCP 安装导致 Gateway 多次重启** → [#2648](https://github.com/netease-youdao/LobsterAI/pull/2648)

### 🟡 P2 - UI 细节（已修复）

8. **Windows 折叠弹窗后状态 pill 吃掉点击** → [#2645](https://github.com/netease-youdao/LobsterAI/pull/2645)
9. **定时任务历史日期过滤发送不支持参数** → [#2646](https://github.com/netease-youdao/LobsterAI/pull/2646)

**所有今日 Bug 均已合入修复**，无遗留 P0 风险。

---

## 💡 功能请求与路线图信号

虽然今日没有 Issues，但 PR #2643 透露出明确的 **产品方向信号**：

- [#2643](https://github.com/netease-youdao/LobsterAI/pull/2643) **「压缩前记忆保存」开关** —— 显示出团队将 **token 成本透明度** 视为关键产品体验，主动把这类 "性能 vs 体验" 权衡交给用户决策。

**潜在可纳入下一版本的候选**：
- 继续完善 **OpenClaw v2026.8.1 兼容性矩阵**，可能覆盖尚未暴露的边缘场景；
- 渲染层 (area: renderer) 与 IM / MCP 整合持续优化（如 #2648 表明热重载策略在向 "精细化" 演进）；
- 依赖升级（react-dom 19、js-x-ray 16、eslint-plugin-react-hooks 7）若合并，可能间接推动下一轮前端架构调整。

---

## 💬 用户反馈摘要

今日 Issues 频道为空，无法提取用户原声。但从 PR 描述中可还原出 **QA 反馈** 的几条核心痛点：

1. **升级 OpenClaw v2026.8.1 后启动异常频发** —— 这是本周最集中的反馈主题，至少 4 个 PR 显式标注 "QA 反馈"；
2. **Agent 编辑 IM 开关时 Gateway 重启两次** —— 用户感知明显（#2648）；
3. **安装 MCP 时偶发多次重启** —— 同样影响体验（#2648）；
4. **长对话中 token 消耗感知强** —— 推动 #2643 opt-in 设置的出现。

**满意度信号**：暂无正向用户反馈进入流程；建议项目方主动发起升级后的体验回访。

---

## ⏳ 待处理积压

### 长期未响应的依赖升级 PR（Dependabot stale）

| PR | 升级内容 | 创建时间 | 当前状态 |
|---|---|---|---|
| [#2459](https://github.com/netease-youdao/LobsterAI/pull/2459) | @nodesecure/js-x-ray 14.3.0 → 16.0.0 | 2026-08-10 | OPEN / stale（32 天） |
| [#2461](https://github.com/netease-youdao/LobsterAI/pull/2461) | eslint-plugin-react-hooks 5.2.0 → 7.1.1 | 2026-08-10 | OPEN / stale（32 天） |
| [#2464](https://github.com/netease-youdao/LobsterAI/pull/2464) | react-dom 18.3.1 → 19.2.8 | 2026-08-10 | OPEN / stale（32 天） |

**提醒**：其中 `react-dom 19` 升级属 **重大版本跳跃**（18 → 19），需要重点评估 Concurrent Renderer、新的 root API 等破坏性变更对渲染层（area: renderer）的影响；`@nodesecure/js-x-ray` 涉及安全扫描能力，建议优先评估。

**给维护者的建议**：
1. 集中处理 3 个 stale Dependabot PR，避免安全债累积；
2. 为今日批量合入的 OpenClaw 兼容性修复撰写 Release Notes；
3. 启动 Issues 渠道，引导 QA 与用户反馈回流到社区。

---

> **数据时间窗口**：2026-09-10 ~ 2026-09-11（基于 PR 时间戳）
> **报告生成时间**：2026-09-11
> **仓库**：https://github.com/netease-youdao/LobsterAI

</details>

<details>
<summary><strong>QwenPaw</strong> — <a href="https://github.com/agentscope-ai/QwenPaw">agentscope-ai/QwenPaw</a></summary>

<think>Let me analyze the GitHub data for QwenPaw (github.com/agentscope-ai/QwenPaw) on 2026-09-11 and generate a comprehensive project daily report.

Key observations from the data:

1. **Activity Overview:**
   - 21 Issues updated in past 24 hours (14 new/active, 7 closed)
   - 40 PRs updated in past 24 hours (24 pending, 16 merged/closed)
   - 1 new release: v2.2.1-beta.2

2. **Release v2.2.1-beta.2:**
   - Console improvements for mobile agent selector
   - CSS selector alignment fixes
   - Version bump

3. **Important Issues to highlight:**
   - #7318: QwenPaw Hub multi-tenant edition coming in 2.2.0 - high engagement (25 comments, 4 likes)
   - #7579: CLOSED - Bug about model responses lost from context (10 comments)
   - #7177: Console/Deploy UI optimization (9 comments)
   - #7534: Feishu session queue consumer stuck bug (4 comments)
   - #7642: CLOSED - Console streaming Chrome issue (4 comments)
   - #7689: NEW BUG - PDF document blocks still sent to multimodal endpoints
   - #7687: CLOSED BUG - 2.2.1-beta.2 regression for agent switching
   - #7676: subagent_model not working - bug
   - #7679: Enhancement for loop context compression
   - #7678: spawn subAgent timeout failures
   - #7445: QwenPaw Hub model connection failures
   - #7672: Windows security sandbox bypass

4. **Notable PRs:**
   - #7688: Open - Grouped session pagination simplification
   - #7536: CLOSED - OpenCode API session header fix
   - #7562: CLOSED - Loop mode composer bug fix
   - #7629: CLOSED - Gemini background tool completion fix
   - #7690: Open - Mailbox fix for issue #7668
   - #7677: Open - 422 for non-finite validation inputs
   - #7685: Open - Feishu collapsible reasoning panel
   - #7655: Open - History FTS corruption fix
   - #7680: Open - Subagent model override diagnostic
   - #7683: Open - Hub login audit logging

Let me organize this into a comprehensive daily report.

I need to:
1. 今日速览 - 3-5 sentences overview
2. 版本发布 - v2.2.1-beta.2 details
3. 项目进展 - merged/closed PRs
4. 社区热点 - most discussed issues/PRs
5. Bug 与稳定性 - bug reports by severity
6. 功能请求与路线图信号 - new feature requests
7. 用户反馈摘要 - user pain points
8. 待处理积压 - long-term open items

Let me write this in Chinese as the prompt is in Chinese.</think>

# QwenPaw 项目动态日报

**日期**：2026-09-11  
**数据来源**：github.com/agentscope-ai/QwenPaw  
**维护方**：agentscope-ai

---

## 一、今日速览

QwenPaw 今日继续保持高活跃度：过去 24 小时内共更新 21 条 Issue 与 40 条 PR，并发布了一个 Beta 版本 **v2.2.1-beta.2**。从数据看，项目处于 **2.2.x 系列收尾、2.2.1 正式版发版准备**的关键阶段——大量 PR 集中在 Console 体验优化、跨 Provider 兼容性修复、安全审计与发版流程上。社区方面，关于 QwenPaw Hub（多租户版）的讨论仍是焦点；与此同时，也出现了针对 v2.2.1-beta.2 本身的回归 Bug 报告，提示 Beta 验证仍需加强。整体来看，项目节奏健康，但需要警惕 Beta 回归问题流入正式版。

---

## 二、版本发布

### v2.2.1-beta.2 已发布

- **发布链接**：https://github.com/agentscope-ai/QwenPaw/releases/tag/v2.2.1-beta.2
- **类型**：Beta（pre-release）

**已合并的变更（部分）**：
| 类型 | 内容 | PR |
|---|---|---|
| feat(console) | 改进移动端智能体选择器体验 | [#7623](https://github.com/agentscope-ai/QwenPaw/pull/7623) |
| fix(console) | 对齐 QwenPaw 的 CSS 选择器（修复跨浏览器/跨构建的渲染差异） | [#7623 (后续)](https://github.com/agentscope-ai/QwenPaw/pull/7623) |
| chore | 版本号 bump 至 2.2.1-beta.2 | [#7643](https://github.com/agentscope-ai/QwenPaw/pull/7643) |

**发版验证 Issue**：[#7674](https://github.com/agentscope-ai/QwenPaw/issues/7674)（Release Duty 已关闭，表示 4 小时验证窗口的检查点已通过）

**⚠️ 已知回归**：[#7687](https://github.com/agentscope-ai/QwenPaw/issues/7687) —— 切换智能体后发消息被静默切到新对话，属于本次 Beta 构建中的回归问题，**升级前请关注**。

**迁移注意事项**：2.2.1-beta.2 主要面向 Console 与桌面端的小幅优化，理论上向后兼容 2.2.0；但若使用 Console "分组会话" 功能，建议在升级后清除浏览器缓存以避免旧 chunk 残留。

---

## 三、项目进展

今日合并/关闭的 PR 共 16 条，覆盖 Console UI、子代理、Provider 兼容性、内存管理、Hub 控制面等多个领域：

**🔧 重要修复已落地**
- [#7536](https://github.com/agentscope-ai/QwenPaw/pull/7536) **OpenCode Provider 会话头修复** — 修复 OpenCode API 需要 `x-opencode-session` header 的问题，使用 QwenPaw 会话 ID 作为 header 值。
- [#7562](https://github.com/agentscope-ai/QwenPaw/pull/7562) **Loop 模式提交 Bug 修复** — 修复 Console 中从 composer 菜单选择的 Loop 模式未能传达到后端的问题（目标/任务跑在了默认 loop）。
- [#7629](https://github.com/agentscope-ai/QwenPaw/pull/7629) **Gemini 后台工具完成 400 错误修复** — 将后台工具通知改为 `role="user"`，避免 Gemini 拒绝"以模型回合结尾"的请求。
- [#7444](https://github.com/agentscope-ai/QwenPaw/pull/7444) **ReMe 内存 slash 命令统一** — 在现有内存架构上完成聊天侧命令统一（前置 PR #7561 已落地基础）。

**🎨 Console 体验改进**
- [#7665](https://github.com/agentscope-ai/QwenPaw/pull/7665) + [#7686](https://github.com/agentscope-ai/QwenPaw/pull/7686) — 改进分组聊天历史的"Load More"分页逻辑；[#7688](https://github.com/agentscope-ai/QwenPaw/pull/7688) 进一步简化分页（移除"折叠列表"，统一为 Load More）。
- [#7591](https://github.com/agentscope-ai/QwenPaw/pull/7591) **飞书：推理卡片自动折叠** — 修复长推理流把最终答案推得太靠下的体验问题。

**🛡️ Hub 安全补强**
- [#7645](https://github.com/agentscope-ai/QwenPaw/pull/7645) — 重建统一环境变量页的 E2E 测试套件（与 #7538 配套）。

**📝 发版流程**
- [#7691](https://github.com/agentscope-ai/QwenPaw/pull/7691) **v2.2.1 发布说明** — 已被关闭归档。

**整体判断**：项目正稳步向 **v2.2.1 正式版**推进，控制面（Hub）、Console UX、Provider 兼容三条主线均有实质进展；下一步重点应是处理 Beta 回归（[#7687](https://github.com/agentscope-ai/QwenPaw/issues/7687)）与积累中的功能 PR（飞书折叠面板 #7685、邮件守护 #7690、Hub 审计 #7683 等）。

---

## 四、社区热点

### 🔥 讨论最活跃

1. **[#7318](https://github.com/agentscope-ai/QwenPaw/issues/7318)** —— **QwenPaw Hub 多租户版：下一步该建什么？**
   - 评论 25 / 👍 4（**今日最高互动量**）
   - 维护者 @rayrayraykk 主帖，2.2.0 Hub 已发布，现征求社区对团队场景的下一阶段功能建议（多用户访问、管理员管理的技能、审计、共享会话等）。
   - 关联：[#2324 — Multi-user access and admin-managed skills](https://github.com/agentscope-ai/QwenPaw/issues/2324)
   - **诉求解读**：团队/企业场景是 QwenPaw 下一阶段最大的增长点；社区正在为 Hub 的 Roadmap 投票。

2. **[#7579](https://github.com/agentscope-ai/QwenPaw/issues/7579)** —— **模型的回复意外从上下文中丢失**（已关闭）
   - 评论 10 / 👍 0
   - 复现路径复杂（涉及 PyInstaller 后端、agentscope 2.0.x 内置版本），最终通过补丁已修复。
   - **诉求解读**：上下文/记忆正确性是 AI 助理的基石，用户对此类 Bug 容忍度极低。

3. **[#7177](https://github.com/agentscope-ai/QwenPaw/issues/7177)** —— **优化 platform.agentscope.io/deploy 的首页（移动端）**
   - 评论 9 / 👍 0
   - 桌面/移动端 UX 差异化诉求：希望"打开运行"放在"停止运行"之前、入口放到顶部等。

### 📌 飞书（Feishu）体验集中讨论
- [#7534](https://github.com/agentscope-ai/QwenPaw/issues/7534) — 飞书单 session queue consumer 卡死后静默无响应（评论 4）
- [#7591 / #7685](https://github.com/agentscope-ai/QwenPaw/pull/7591) — 飞书推理面板折叠（已合并 #7591，新提案 #7685 进行中）

### 🏆 长期积压议题
- [#3113](https://github.com/agentscope-ai/QwenPaw/issues/3113) — "team collaboration" 首次指令被忽略（2026-04-08 提出，至今未关闭）

---

## 五、Bug 与稳定性

按严重程度排列：

### 🔴 P0 — 高严重度（已有关联修复或需立即关注）

| Issue | 描述 | 状态 | Fix PR |
|---|---|---|---|
| [#7687](https://github.com/agentscope-ai/QwenPaw/issues/7687) | **2.2.1-beta.2 回归**：切换智能体后消息被静默切到新对话 | CLOSED | 需关注（社区已确认但未给出 PR） |
| [#7689](https://github.com/agentscope-ai/QwenPaw/issues/7689) | **PDF 文档块仍被发送给多模态端点** — #7621 只修了 `supports_multimodal=False` 路径 | OPEN | 暂无 |
| [#7534](https://github.com/agentscope-ai/QwenPaw/issues/7534) | 飞书单 session queue consumer 卡死、新消息无法新建 consumer | OPEN | 暂无 |
| [#7678](https://github.com/agentscope-ai/QwenPaw/issues/7678) | `spawn subAgent` 全 timeout 失败（用户实测） | OPEN | 暂无 |
| [#7676](https://github.com/agentscope-ai/QwenPaw/issues/7676) | `subagent_model` 无效，子代理始终继承父代理 `active_model` | OPEN | [#7680](https://github.com/agentscope-ai/QwenPaw/pull/7680)（诊断 PR 进行中） |

### 🟠 P1 — 中严重度

| Issue | 描述 | 状态 | Fix PR |
|---|---|---|---|
| [#7642](https://github.com/agentscope-ai/QwenPaw/issues/7642) | Chrome 流式渲染直到回合完成才显示（Safari 正常） | CLOSED | 已修 |
| [#7579](https://github.com/agentscope-ai/QwenPaw/issues/7579) | 模型回复从上下文中丢失 | CLOSED | 已修 |
| [#7672](https://github.com/agentscope-ai/QwenPaw/issues/7672) | **Windows 安全沙箱被突破** | OPEN | 暂无（安全敏感度高） |
| [#7445](https://github.com/agentscope-ai/QwenPaw/issues/7445) | QwenPaw Hub 无法连接本地 API（127.0.0.1:8088） | OPEN | 暂无 |
| [#7668](https://github.com/agentscope-ai/QwenPaw/issues/7668) | `mail_state/last_uid=0` 绕过首跑守卫，重新处理整个 INBOX | OPEN | [#7690](https://github.com/agentscope-ai/QwenPaw/pull/7690) ✅ |
| [#7666](https://github.com/agentscope-ai/QwenPaw/issues/7666) | 本地模型无法从 HuggingFace 下载且无法选择量化文件 | CLOSED | 标记 close-and-review-later |

### 🟡 P2 — 已修复（今日关闭）

- [#7370](https://github.com/agentscope-ai/QwenPaw/issues/7370) WeCom 发送 base64 图片 → OSError 36 → "Internal error"
- [#7516](https://github.com/agentscope-ai/QwenPaw/issues/7516) WeCom 无法发送 base64 data URL 图片
- 相关 PR 已合并

### ⚠️ 安全提示
**[#7672 Windows 安全沙箱突破](https://github.com/agentscope-ai/QwenPaw/issues/7672)** 是今日最值得维护者优先处理的安全议题，涉及 Desktop 2.2.0 Windows 沙箱隔离；建议优先确认与跟进。

---

## 六、功能请求与路线图信号

| 优先级 | Issue | 提议内容 | 关联 PR | 路线图概率 |
|---|---|---|---|---|
| ⭐⭐⭐ | [#7679](https://github.com/agentscope-ai/QwenPaw/issues/7679) | **Loop 增加 `/compact` 上下文管理命令** — 长任务 token 消耗过巨 | 暂无 | 高（解决核心成本问题） |
| ⭐⭐⭐ | [#7671](https://github.com/agentscope-ai/QwenPaw/issues/7671) | **图片自动降采样替代丢弃** + base64 体积封顶 | 暂无 | 高 |
| ⭐⭐ | [#7664](https://github.com/agentscope-ai/QwenPaw/issues/7664) | **RemeLight 额外自定义模型** — 记忆写入使用独立轻量模型以节省费用 | 暂无 | 中（与 #7444 已合并方向一致） |
| ⭐⭐ | [#7670](https://github.com/agentscope-ai/QwenPaw/issues/7670) | Files 面板 Preview 模式代码语法高亮 | 暂无 | 中 |
| ⭐ | [#7177](https://github.com/agentscope-ai/QwenPaw/issues/7177) | platform.agentscope.io/deploy 移动端首页优化 | 暂无 | 中（UX 类） |
| ⭐ | [#7318](https://github.com/agentscope-ai/QwenPaw/issues/7318) | QwenPaw Hub 多租户/团队协作 Roadmap | 路线图级 | 极高（正在被官方推动） |

**信号解读**：
- **成本控制**是用户最强烈的诉求（[#7679](https://github.com/agentscope-ai/QwenPaw/issues/7679) / [#7664](https://github.com/agentscope-ai/QwenPaw/issues/7664)），压缩上下文、为记忆/子任务配置更便宜的模型已成趋势；
- **多模态细节**（图片降采样、PDF 处理）正在成为新的痛点；
- **Hub 多租户**是官方主动布局的下一步。

---

## 七、用户反馈摘要

提炼自 Issue 评论与 PR 描述中的真实用户语境：

1. **"模型看不到自己刚说的话"** ([#7579](https://github.com/agentscope-ai/QwenPaw/issues/7579))
   - 助手回复已持久化但后续请求中缺失 → 用户感受到的是**空响应**
   - 反映用户对**记忆连续性**的高敏感度

2. **"手机上操作很紧张，怕误点停止运行"** ([#7177](https://github.com/agentscope-ai/QwenPaw/issues/7177))
   - 移动端 UI 风险按钮位置不当
   - 表明**移动端使用率正在上升**，但 UX 尚未跟上

3. **"一整个飞书会话突然静默卡死"** ([#7534](https://github.com/agentscope-ai/QwenPaw/issues/7534))
   - 用户无任何报错提示 → 静默失败是企业级场景的灾难
   - 反映**生产环境中的可观测性不足**

4. **"spawn subAgent 一个都跑不下去，全 timeout"** ([#7678](https://github.com/agentscope-ai/QwenPaw/issues/7678))
   - 即使用户将 timeout 调得"很长很长"也无效
   - 反映**子代理能力的可用性问题**，阻碍高级用户构建复杂工作流

5. **"用旗舰模型聊天时，记忆写入也消耗旗舰 token"** ([#7664](https://github.com/agentscope-ai/QwenPaw/issues/7664))
   - 体现用户对**成本透明化**的需求

6. **HF 下载失败 + 量化文件无法选择** ([#7666](https://github.com/agentscope-ai/QwenPaw/issues/7666))
   - 影响本地/离线用户

7. **"切换智能体后消息被静默切到新对话"** ([#7687](

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/NousResearch/hermes-agent">NousResearch/hermes-agent</a></summary>

<think>The user wants me to generate a daily report for the Hermes Agent project on GitHub, dated 2026-09-11. Let me analyze the data carefully and produce a structured report.

Key observations from the data:
1. 50 Issues updated in 24h, 42 new/active, 8 closed
2. 50 PRs updated, all 50 pending merge, 0 merged/closed
3. No new releases
4. The most active issue is #103375 about bot tiles auto-reconnect infinite loop (7 comments)
5. Multiple bugs across desktop, gateway, CLI, plugins, sessions areas
6. Several platform-specific issues: Telegram, WhatsApp, Slack, Discord, Windows
7. Security/compatibility concerns: secrets management, authentication, fallback providers

Let me organize this into the requested sections. I need to be objective, data-driven, and highlight project health.

Important notes:
- No PRs merged in 24h, which is notable for project velocity
- Several P1 (highest priority) bugs are open
- Many issues are cross-cutting (areas like sessions, profiles, auth, message-delivery)
- The project has active development across many fronts

Let me structure the report carefully.</think>

# Hermes Agent 项目日报
**报告日期：2026-09-11**

---

## 1. 今日速览

Hermes Agent 今日保持高强度 issue 流转，24 小时内共有 50 条 Issues 更新（42 条活跃/新开、8 条关闭）和 50 条 PR 更新，但 **0 条 PR 合并、0 个新版本发布**——这是当日最值得关注的信号，反映出维护团队当前更多精力集中在 triage 与 review，而非合入。讨论热点集中在三大主题：**Desktop 客户端稳定性**（UI 渲染、插件加载、SSH 后端隔离）、**消息通道可靠性**（Telegram、Slack、WhatsApp、Discord 的会话状态/上下文丢失）、**凭据与降级路径的安全/计费语义**（`fallback_model` 静默吞掉 `missing_api_key` 等多类问题）。多个 P1 级别 bug 仍处 OPEN 状态，项目整体处于"修补密集期"。

---

## 2. 版本发布

**本周期无新版本发布。** 建议关注最近已合并但未发版的修复链路，尤其是：
- Telegram getUpdates 端口耗尽修复（PR #107897，关联 #107880）
- OpenRouter routing-variant 后缀处理（PR #106500）
- Desktop 本地补丁检出更新检测回退（PR #107901）

---

## 3. 项目进展

**今日无 PR 合并**，所有 50 条活跃 PR 均处于待合并状态。但已观察到清晰的"修复链路"在形成——很多当日新增的 PR 直接针对同一日 Issue：

| 关联 Issue | 修复 PR | 主题 |
|---|---|---|
| [#103375](https://github.com/NousResearch/hermes-agent/issues/103375) | （暂无 fix） | Bot 后端热重连循环 |
| [#107700](https://github.com/NousResearch/hermes-agent/issues/107700) | （feature 设计阶段） | secrets 系统统一 |
| [#107860](https://github.com/NousResearch/hermes-agent/issues/107860) ✅ 已关闭 | （关联 PR） | `/model --global` 误写默认 profile |
| [#65939](https://github.com/NousResearch/hermes-agent/issues/65939) ✅ 已关闭 | （关联 PR） | Webhook profile 路由 |
| [#41296](https://github.com/NousResearch/hermes-agent/issues/41296) ✅ 已关闭 | （关联 PR） | Bedrock 区域推理配置 |
| [#105666](https://github.com/NousResearch/hermes-agent/issues/105666) ✅ 已关闭 | （关联 PR） | Desktop 更新包过大 |
| [#102041](https://github.com/NousResearch/hermes-agent/issues/102041) ✅ 已关闭 | （关联 PR） | Secret 多路复用泄漏 |
| [#107899](https://github.com/NousResearch/hermes-agent/issues/107899) | [PR #107904](https://github.com/NousResearch/hermes-agent/pull/107904) | 客服聊天泄漏操作员诊断信息 |
| [#107880](https://github.com/NousResearch/hermes-agent/issues/107880) | [PR #107897](https://github.com/NousResearch/hermes-agent/pull/107897) | Telegram TIME_WAIT 端口耗尽 |
| [#107721](https://github.com/NousResearch/hermes-agent/issues/107721) | （独立 PR 待合） | Desktop 插件全部失败 |
| [#107874](https://github.com/NousResearch/hermes-agent/issues/107874) | [PR #107878](https://github.com/NousResearch/hermes-agent/pull/107878) | `fallback_model` 静默降级到计费 provider |

**评估：** 项目整体向前推进但**合入速率滞后于产出速率**——Triage-to-merge 的转化效率是当前最大瓶颈。维护者需关注 PR 积压。

---

## 4. 社区热点

**评论数 TOP 5 Issues（24h 更新窗口内）：**

1. **[#103375](https://github.com/NousResearch/hermes-agent/issues/103375) — 7 评论** 🔥
   Bot tiles 在 ≥20 profile 配置下进入无限重连循环，Warm Bot Backends 槽位永不释放。
   *诉求核心：* 多 profile 场景下的资源生命周期管理是 Desktop 端**结构性缺陷**，而非边界 case。

2. **[#106009](https://github.com/NousResearch/hermes-agent/issues/106009) — 5 评论**
   Desktop Sessions 侧边栏标"可见"但宽度近 0，`focus_pane` 报告成功却不恢复。
   *诉求核心：* UI 状态机与窗口焦点恢复的不一致——属于"看似修好其实没修"的回归类问题。

3. **[#107700](https://github.com/NousResearch/hermes-agent/issues/107700) — 4 评论**
   Feature：secrets 来源系统 + HTTP 注入包装器统一。
   *诉求核心：* 内部已有**两套独立的 secret 系统**，但文档混为一谈；属于长期架构债务清理。

4. **[#103363](https://github.com/NousResearch/hermes-agent/issues/103363) — 4 评论** (P1)
   Telegram 自动 topic-rename 在 0.21.0 升级后静默失效（schema v2→v3 迁移未触发）。
   *诉求核心：* 升级路径破坏现有部署，无任何告警——典型的**升级兼容性回归**。

5. **[#80625](https://github.com/NousResearch/hermes-agent/issues/80625) — 4 评论, 3 👍** (P2)
   Desktop SSH 后端在远程账号使用 Fish shell 时失败。
   *诉求核心：* 远程 shell 兼容性——支持**非 POSIX shell 用户**的合理诉求，长期未解决。

**社区情绪画像：** 用户反馈集中在"沉默失败"和"升级破坏现有功能"两类高频痛点；对**面向客服的 WhatsApp 部署**的诊断信息泄漏问题（[#107899](https://github.com/NousResearch/hermes-agent/issues/107899)）反馈激烈，使用印尼语原文叙述，呈现出**生产环境已实际受影响**的语气。

---

## 5. Bug 与稳定性

### P1（最高优先级，OPEN 状态）
| Issue | 主题 | 影响面 | Fix PR |
|---|---|---|---|
| [#103375](https://github.com/NousResearch/hermes-agent/issues/103375) | Bot tile 无限重连 | Desktop 多 profile | ❌ 无 |
| [#103363](https://github.com/NousResearch/hermes-agent/issues/103363) | Telegram topic-rename 静默失效 | Gateway / Telegram | ❌ 无 |
| [#79859](https://github.com/NousResearch/hermes-agent/issues/79859) | OpenAI TTS 仍是延迟整文件 MP3 播放 | Desktop / 流式语音 | ❌ 无 |
| [#107721](https://github.com/NousResearch/hermes-agent/issues/107721) | Desktop 所有运行时插件加载失败 | Desktop 插件系统 | ❌ 无 |
| [#107485](https://github.com/NousResearch/hermes-agent/issues/107485) | SSH-isolated backend idle-exit 杀 cron | CLI/Gateway/Desktop | ❌ 无 |

### P2（重要）
| Issue | 主题 | Fix PR |
|---|---|---|
| [#106009](https://github.com/NousResearch/hermes-agent/issues/106009) | Desktop Sessions 侧边栏宽度为 0 | ❌ |
| [#90782](https://github.com/NousResearch/hermes-agent/issues/90782) | Terminal env snapshot 泄漏 `HERMES_DELEGATED_CHILD_CONTEXT` | ❌ |
| [#80625](https://github.com/NousResearch/hermes-agent/issues/80625) | SSH Fish shell 兼容 | ❌ |
| [#106648](https://github.com/NousResearch/hermes-agent/issues/106648) | DeepSeek 长会话 HTTP 400 | ❌ |
| [#107874](https://github.com/NousResearch/hermes-agent/issues/107874) | `fallback_model` 静默吞掉 `missing_api_key` | ✅ [#107878](https://github.com/NousResearch/hermes-agent/pull/107878) |
| [#107899](https://github.com/NousResearch/hermes-agent/issues/107899) | 客服聊天接收操作员诊断 | ✅ [#107904](https://github.com/NousResearch/hermes-agent/pull/107904) |
| [#107880](https://github.com/NousResearch/hermes-agent/issues/107880) | Telegram macOS 端口耗尽 | ✅ [#107897](https://github.com/NousResearch/hermes-agent/pull/107897) |
| [#107856](https://github.com/NousResearch/hermes-agent/issues/107856) | Discord cron context 丢失 | ❌ |

### P3（一般）
- [#77881](https://github.com/NousResearch/hermes-agent/issues/77881) Kanban 重试丢失 worker 上下文
- [#87739](https://github.com/NousResearch/hermes-agent/issues/87739) `/hatch` 烧钱重试不可分割动画 → ✅ [PR #107796](https://github.com/NousResearch/hermes-agent/pull/107796)
- [#107905](https://github.com/NousResearch/hermes-agent/issues/107905) `hermes -c` 误拒已压缩会话（4.7k 消息）
- [#107854](https://github.com/NousResearch/hermes-agent/issues/107854) Windows 11 25H2 默认浏览器探测失败
- [#96776](https://github.com/NousResearch/hermes-agent/issues/96776) approvals 对含引号的 grep 模式误判
- [#103355](https://github.com/NousResearch/hermes-agent/issues/103355) LCM context engine 压缩预算不复位
- [#107876](https://github.com/NousResearch/hermes-agent/issues/107876) Desktop 顶栏按钮"砖化"
- [#107811](https://github.com/NousResearch/hermes-agent/issues/107811) Ubuntu 6.8 内核下 X11 崩溃
- [#107858](https://github.com/NousResearch/hermes-agent/issues/107860) 重复议题

**总体评估：** 约 **12% 的活跃 issue 已有对应 fix PR**，但 5 个 P1 中**仅 0 个**有关联 fix 提交，提示**P1 评审/合入通道存在堵塞**。

---

## 6. 功能请求与路线图信号

### 具备明确 PR 的功能（已进入实现阶段）
- **[#107890 / PR #107896](https://github.com/NousResearch/hermes-agent/pull/107896)** — Dashboard Chat 侧边栏 Skill 选择器。`/learn` 与 `GET /api/skills` 已存在，仅缺前端集成，**实现风险低、合入概率高**。

### 高价值架构级 Feature
- **[#48693](https://github.com/NousResearch/hermes-agent/issues/48693)** Gateway 配置热重载（feature 自 2026-06-18 起 OPEN，3 评论）。呼声持续但**无对应 PR**，反映出对**运维体验**的长期需求。
- **[#105683](https://github.com/NousResearch/hermes-agent/issues/105683)** 一键 IM bot onboarding（飞书/Telegram）。面向**中小企业自助部署**场景，但供应商合规流程复杂，**短期难以实现**。
- **[#107700](https://github.com/NousResearch/hermes-agent/issues/107700)** Secrets 系统统一抽象。属于**架构债务清理**，可能并入更大范围的"凭据安全"主题。

### 长尾 Feature
- [#66163](https://github.com/NousResearch/hermes-agent/pull/66163) Slack slash-command 命名空间前缀（PR OPEN 自 2026-07-17，长期未合并）
- [#80533](https://github.com/NousResearch/hermes-agent/pull/80533) Webhook 完成回调脚本

**路线图判断：** 近期版本更可能聚焦在**稳定性回归修复**（P1 bug + 升级迁移），而非新功能。Skill picker 是最有可能随下一版本一起发布的功能项。

---

## 7. 用户反馈摘要

**典型痛点（提炼自活跃 Issues 评论）：**

- 🏢 **生产部署用户**（[#107899](https://github.com/NousResearch/hermes-agent/issues/107899) 印尼语原文）：在 WhatsApp 客服场景下，单日内发现 5 类诊断信息泄漏给客户——**操作员 turn-budget 提示、文件校验器消息、busy ack、provider 错误、home-channel prompt**。语气从"ringkasan"（摘要）到实际生产事故描述，**严重程度被低估**。

- 🖥️ **多 profile Desktop 用户**（[#103375](https://github.com/NousResearch/hermes-agent/issues/103375)）：20 个 profile + 多个 bot tile 触发后端热路径无限循环，"Warm Bot Backends slots never free up"——属于**架构层不收敛**。

- 🔄 **跨版本升级用户**（[#103363](https://github.com/NousResearch/hermes-agent/issues/103363)）：0.21.0 升级后 Telegram topic-rename 静默失效，**没有任何告警**。升级路径的"silent breaking"是高频不满来源。

- 💸 **成本敏感用户**（[#107874](https://github.com/NousResearch/hermes-agent/issues/107874) / [#87739](https://github.com/NousResearch/hermes-agent/issues/87739)）：`fallback_model` 静默路由到计费 provider（用户以为会失败）；`/hatch` 烧钱重试已知不可分割的动画行。**计费语义需要更清晰的契约**。

- 🐚 **Fish shell 用户**（[#80625](https://github.com/NousResearch/hermes-agent/issues/80625)，3 👍）：长期被忽视，反映出**非主流 shell 用户**的合理诉求未得到响应。

**正面反馈：** Secret 多路复用泄漏修复（#102041）当日关闭，且收到 issue 作者外其他评论参与——表明维护者在**安全边界类问题**上响应及时。

---

## 8. 待处理积压

### 长期未响应（创建 ≥ 30 天，无合入/关闭迹象）

| Issue/PR | 创建日 | 主题 | 状态 |
|---|---|---|---|
| [#48693](https://github.com/NousResearch/hermes-agent/issues/48693) | 2026-06-18 | Gateway 配置热重载 | OPEN, 3 评论 |
| [#52549](https://github.com/NousResearch/hermes-agent/pull/52549) | 2026-06-25 | ProviderProfile 身份解析 | PR OPEN, 待合 |
| [#48014](https://github.com/NousResearch/hermes-agent/pull/48014) | 2026-06-17 | Mattermost 文件 caption | PR OPEN, 待合 |
| [#66163](https://github.com/NousResearch/hermes-agent/pull/66163) | 2026-07-17 | Slack slash-command 命名空间 | PR OPEN, 待合 |
| [#75312](https://github.com/NousResearch/hermes-agent/pull/75312) | 2026-07-31 | Slack `<@UID>` mrkdwn 提及识别 | PR OPEN, 待合 |
| [#73043](https://github.com/NousResearch/hermes-agent/pull/73043) | 2026-07-28 | Windows MSYS 路径规范化 | PR OPEN, 待合 |
| [#80533](https://github.com/NousResearch/hermes-agent/pull/80533) | 2026-08-06 | Webhook completion scripts | PR OPEN, 待合 |
| [#80625](https://github.com/NousResearch/hermes-agent/issues/80625) | 2026-08-06 | SSH Fish shell 兼容 | OPEN, 4 评论, **3 👍** |
| [#65939](https://github.com/NousResearch/hermes-agent/issues/65939) | 2026-07-16 | Webhook profile 路由 ✅ | 已关闭 |

### 维护者建议关注
1. **PR 积压风险：** 50 条活跃 PR 中存在至少 5 条超过 30 天未合入，建议优先 review 涉及**安全/计费/平台兼容**的修复（#107878、#107904、#107897、#106500、#73043）。
2. **#80625（Fish shell）** 已收到 👍 票但 36 天无 fix 提交，建议列入下个 sprint。
3. **P1 通道阻塞：** 5 个 OPEN P1 中 0 个有关联 fix PR——需 review 流程升级或加派 reviewer。

---

## 附录：报告数据快照

- **Issues 24h 更新：** 50（活跃/新开 42，关闭 8）
- **PRs 24h 更新：** 50（待合并 50，已合/关 0）
- **新版本：** 0
- **已关闭 Issues（节选）：** #107860、#65939、#41296、#105666、#102041
- **报告生成时间：** 2026-09-11

> 本报告基于公开 GitHub 数据自动生成，反映项目在 2026-09-11 当日的活跃度与社区动态快照。

</details>

<details>
<summary><strong>OpenHuman</strong> — <a href="https://github.com/tinyhumansai/openhuman">tinyhumansai/openhuman</a></summary>

<think>The user wants me to generate a daily report for the OpenHuman project based on GitHub data. Let me analyze the data carefully and structure the report according to the requested sections.

Let me first review the data:

**Overview:**
- 24 Issues updates in past 24h (3 new/active, 21 closed)
- 32 PR updates in past 24h (4 pending merge, 28 merged/closed)
- 0 new releases

**Key Issues to highlight:**

Open (not closed):
- #6199 - Memory-access prompt section silently drops once AgentDefinitionRegistry::init_global has run — intermittently red main, blocking PRs
- #6184 - Inline reasoning-tag extraction only ever matches `<think>`, so other reasoning tags leak into the visible answer
- #6198 - Order-dependent unit tests hide behind the domain-scoped Rust lane and ambush unrelated PRs

Important closed issues (notable bugs):
- #6155 - Skill YAML deprecated version/author warnings (P2) - closed
- #6154 - GMAIL_SEND_EMAIL missing pre-flight argument check (P2) - closed
- #6158 - Cron agent jobs warn but not blocked (P2) - closed
- #6149 - Session shadow reader diverges at message 12 (P2) - closed
- #6156 - LLM recap fails silently (P2) - closed
- #6179 - Memory tree LLM recap fails silently - closed
- #6148 - Journal-shadow parity divergence (P2) - closed
- #6157 - Subagent run silently refuses 5 delegation tools (P2) - closed
- #6147 - Memory sync UNIQUE constraint failure (P1) - closed
- #6166 - get_workflow_with_profile runs discovery twice (P3) - closed
- #5934 - Internal agent thinking leaks into visible chat - closed
- #6174 - Socket connection drops repeatedly - closed
- #6194 - Slack memory source fails every sync - closed
- #6176 - Composio module boots without connector route - closed
- #6175 - spawn_parallel_agents registered under multiple kinds - closed
- #6172 - Restore host coverage for three memory RPC handlers (P2) - closed
- #6200 - Summariser can block chat turn for 10 minutes (memory) - closed
- #6180 - app_state_snapshot polled every 5s, takes 500ms-1.9s - closed
- #6181 - Duplicate socket connections on startup - closed
- #6187 - Memory recap no retry - closed
- #6186 - Nothing re-summarises segments left unsummarised - closed

Key PRs (closed/merged):
- #6213 - fix(agent): ask_user_clarification - actually ask user (P3) - closed
- #6212 - fix(approval): replay parked approval (P3) - closed
- #6211 - feat(examples): Functional Solana Attestation (No Mocks) (P0) - closed
- #5836 - feat(examples): SynapticChain 256-lane parallel execution (P1) - closed
- #6206 - fix(inference): stop managed catalog erroring on stale session (P1) - closed
- #6207 - feat(agents): let agent default to managed OpenRouter (P3) - closed
- #6210 - fix(settings): provider name overflow (P3) - closed
- #6209 - fix(chat): rehydrate turn snapshot on socket reconnect (P3) - closed
- #6205 - fix(config): seed managed cloud provider when workspace created (P3) - closed
- #6203 - fix(prompt): give delegated agent memory write rule (P2) - closed
- #6204 - test(e2e): browser coverage for managed OpenRouter catalog (P3) - closed
- #6159 - fix(cron): measure gap between consecutive runs (P3) - closed
- #6201 - feat(inference): surface managed OpenRouter catalog in model picker (P3) - closed
- #6192 - fix(flows): apply static Composio arg rules in preflight (#6154) (P3) - closed
- #6191 - fix(skills): one discovery pass per workflow lookup (P3) - closed
- #6190 - fix(app_state): stop blocking snapshot poll on backend (P3) - closed
- #6189 - fix(subagent): stop mirrored tool results rendering as user's message (P3) - closed
- #6067 - fix(turn_state): persist snapshots on long Windows paths (P3) - closed

Open PRs:
- #6185 - fix(claude-code): authorize login and check macOS terminal launch (P3)
- #6208 - feat: scale embedded library agent concurrency (P3)

Now let me structure the report:

**1. 今日速览**
The project is highly active with 24 issues updated and 32 PRs. Most issues are being closed (21 of 24), indicating strong maintenance activity. PRs are also being merged rapidly (28 of 32 closed/merged). However, there are still 3 open issues, including one that's blocking PRs (#6199). Zero releases today.

**2. 版本发布**
No new releases today.

**3. 项目进展**
Multiple PRs merged that fix significant bugs:
- #6213 - Fix ask_user_clarification bug
- #6212 - Fix parked approval replay
- #6206 - Fix inference catalog stale session (P1)
- #6207 - Add managed OpenRouter model default
- #6201 - Surface managed OpenRouter catalog (P3)
- #6209 - Rehydrate on socket reconnect
- #6192 - Apply static Composio arg rules (fixes #6154)
- #6191 - One discovery pass per workflow (fixes #6155)
- #6190 - Stop blocking snapshot poll on backend
- #6189 - Stop mirrored tool results rendering as user message
- #6203 - Memory write rule for delegated agent
- #6205 - Seed managed cloud provider when workspace created
- #6159 - Fix cron job frequency measurement
- #6067 - Fix Windows long paths

**4. 社区热点**
Most commented issues: #6155 (4 comments), #6154 (3 comments). Most of the activity centers on memory subsystem, agent tracing, and skill system issues.

**5. Bug 与稳定性**
- P1 critical: #6147 (memory sync UNIQUE constraint, fixed by ?)
- P2 issues: many - #6155, #6154, #6158, #6149, #6156, #6148, #6157, #6172, #6200
- P3 issues: #6166, #6180, #6181

Many have corresponding PR fixes:
- #6155 → #6191
- #6154 → #6192
- #6158 → #6159
- #6156 → related to #6186, #6187
- #6200 → #6203 (partial)
- #6180 → #6190
- #5934 → likely #6189
- #6174 → likely #6209 (socket reconnect)
- #6181 → likely #6209 (duplicate socket)
- #6175 → tool registry conflict

**6. 功能请求与路线图信号**
- #6201 - managed OpenRouter catalog
- #6207 - agent defaults to managed OpenRouter
- #5836 - SynapticChain parallel execution
- #6211 - Solana Attestation
- #6208 - scale embedded library agent concurrency

**7. 用户反馈摘要**
- Memory system reliability issues (#6147, #6156, #6187, #6186)
- UI/UX issues with model picker overflow (#6210)
- Slack memory source failing (#6194)
- Internal reasoning leaking to visible chat (#5934)
- Sub-agent tool results rendering as user messages (#6189)

**8. 待处理积压**
- #6199 - blocking PRs (open, high priority)
- #6184 - inline reasoning tag leak (open)
- #6198 - order-dependent tests (open)
- #6185 - claude-code login fix (open PR)
- #6208 - scale library agent concurrency (open PR)

Let me now write the report in Chinese as requested, with professional tone and data-driven analysis.

I need to make sure I include links and use proper markdown formatting. The report should be in Chinese as the user wrote in Chinese.</think>

# OpenHuman 项目日报 · 2026-09-11

> 数据范围：过去 24 小时（基于 2026-09-10 至 2026-09-11 的 GitHub 活动）
> 数据源：[github.com/tinyhumansai/openhuman](https://github.com/tinyhumansai/openhuman)

---

## 1. 今日速览

OpenHuman 今日呈现**高强度清扫式维护**态势：24 条 Issue 中 21 条已关闭，32 条 PR 中 28 条已合并/关闭，整体关单率约 **87.5%**。维护团队集中处置了一批横跨内存归档（Memory Archivist）、Agent tracing、Skill 工作流、Composio 集成、Socket 通信等子系统的 P2 级 Bug，并完成了一次较大规模的"Rust 测试稳定性"治理工作。**今日无版本发布**，但已合并多项关键修复（其中 P0/P1 共 4 项），下一版本质量基线显著抬升。值得关注的是，仍有 **3 条 Issue 处于 OPEN 状态**，其中 #6199 已被标记为"阻断 PR 的 main 红"，需重点跟进。

---

## 2. 版本发布

⚠️ **今日无新版本发布。**

下一版本预期将集中吸收以下已合并的修复与功能（见第 3、5 节）。

---

## 3. 项目进展

今日合并/关闭的 PR 数量可观，覆盖修复、功能、测试、示例四个维度，关键推进如下：

### 🛠️ 关键修复（核心稳定性）
- **[#6213](https://github.com/tinyhumansai/openhuman/pull/6213)** `fix(agent)`：修复 `ask_user_clarification` 工具自问自答的逻辑缺陷，命名工具以走 `early-exit pause` 分支。**这是会话交互层的关键正确性修复。**
- **[#6212](https://github.com/tinyhumansai/openhuman/pull/6212)** `fix(approval)`：为停放的审批（parked approval）增加 socket 加入会话室的回放机制，避免"核心仍停放、用户看不到卡片"的死锁。
- **[#6206](https://github.com/tinyhumansai/openhuman/pull/6206)** `fix(inference)` (**P1**)：修复 managed 目录在 session 失效时的报错（生产环境暴露、staging 无法复现）。
- **[#6209](https://github.com/tinyhumansai/openhuman/pull/6209)** `fix(chat)`：socket 重连后恢复 turn 快照，避免 heal 窗口内 `chat_done` 等关键事件丢失。
- **[#6192](https://github.com/tinyhumansai/openhuman/pull/6192)** `fix(flows)`：在 `tool_call` preflight 阶段强制应用静态 Composio 参数规则（关 [#6154](https://github.com/tinyhumansai/openhuman/issues/6154)）。
- **[#6191](https://github.com/tinyhumansai/openhuman/pull/6191)** `fix(skills)`：工作流查找只做一次磁盘扫描，同时下线匿名弃用日志（关 [#6155](https://github.com/tinyhumansai/openhuman/issues/6155) + [#6166](https://github.com/tinyhumansai/openhuman/issues/6166)）。
- **[#6190](https://github.com/tinyhumansai/openhuman/pull/6190)** `fix(app_state)`：缓存身份失效后，`app_state_snapshot` 不再阻塞后端往返；`GET /auth/me` 复用池化连接（关 [#6180](https://github.com/tinyhumansai/openhuman/issues/6180)）。
- **[#6189](https://github.com/tinyhumansai/openhuman/pull/6189)** `fix(subagent)`：子代理工作线程镜像写入工具结果时设置 `hidden`，避免 JSON 工具输出伪装成用户消息（关 [#5934](https://github.com/tinyhumansai/openhuman/issues/5934) 的渲染层根因之一）。
- **[#6159](https://github.com/tinyhumansai/openhuman/pull/6159)** `fix(cron)`：以**连续两次运行之间的最短间隔**度量频率（关 [#6158](https://github.com/tinyhumansai/openhuman/issues/6158)）。
- **[#6067](https://github.com/tinyhumansai/openhuman/pull/6067)** `fix(turn_state)`：Windows 长路径下持久化 turn 快照（关 [#6009](https://github.com/tinyhumansai/openhuman/issues/6009)）。
- **[#6205](https://github.com/tinyhumansai/openhuman/pull/6205)** `fix(config)`：新建 workspace 时植入 managed 云供应商行，根除"模型选择器空"症状（[#6201](https://github.com/tinyhumansai/openhuman/pull/6201) 的善后）。
- **[#6210](https://github.com/tinyhumansai/openhuman/pull/6210)** `fix(settings)`：修复模型选择器左栏 provider 名称溢出覆盖详情面板的 UI 缺陷。

### ✨ 新增能力
- **[#6201](https://github.com/tinyhumansai/openhuman/pull/6201)** `feat(inference)`：**surfacing managed OpenRouter 目录**——"Managed by OpenHuman" 现在列出后端 OpenRouter passthrough 目录，可在托管额度下钉选具体模型。
- **[#6207](https://github.com/tinyhumansai/openhuman/pull/6207)** `feat(agents)`：允许 agent 默认使用 managed OpenRouter 模型，新会话无需重复挑选。
- **[#6203](https://github.com/tinyhumansai/openhuman/pull/6203)** `fix(prompt)` (**P2**)：将内存写入规则下发到委托 agent，并埋点 recap 折叠耗时（[#6200](https://github.com/tinyhumansai/openhuman/issues/6200) Part B 完整落定，Part A 仅测量）。

### 🧪 测试与基础设施
- **[#6204](https://github.com/tinyhumansai/openhuman/pull/6204)** `test(e2e)`：5 个 Playwright 用例覆盖 managed OpenRouter 目录。
- **[#6211](https://github.com/tinyhumansai/openhuman/pull/6211)** `feat(examples)` (**P0**)：**功能化 Solana 证明（无 mock 重写）**——示例层战略级 PR，强制 agent 用本机签名挑战负载。
- **[#5836](https://github.com/tinyhumansai/openhuman/pull/5836)** `feat(examples)` (**P1**)：SynapticChain 256 通道并行执行示例（ADR-062）。

**总体进展评估：** 一日内集中消化了至少 **17 条历史 Issue/PR**，并在"测试稳定性""会话正确性""managed 推理接入"三条战线均有实质性推进；下一版本在稳定性维度可望有明显跃升。

---

## 4. 社区热点

按评论数排序（OPEN/CLOSED 一并参考）：

| 排名 | Issue | 评论数 | 主题 | 链接 |
|---|---|---|---|---|
| 1 | [#6155](https://github.com/tinyhumansai/openhuman/issues/6155) Skill YAML 弃用字段噪音 | 4 | Skill 系统 | [#6155](https://github.com/tinyhumansai/openhuman/issues/6155) |
| 2 | [#6154](https://github.com/tinyhumansai/openhuman/issues/6154) GMAIL_SEND_EMAIL 缺前置校验 | 3 | Flow / Composio | [#6154](https://github.com/tinyhumansai/openhuman/issues/6154) |
| 3 | 多条 P2 Issue 集中在内存/Agent tracing | 2 | memory / rust-core | 见下 |

**诉求分析：**
- **内存子系统是当前最大热点**：涉及 silent fallback（[#6156](https://github.com/tinyhumansai/openhuman/issues/6156)、[#6179](https://github.com/tinyhumansai/openhuman/issues/6179)、[#6187](https://github.com/tinyhumansai/openhuman/issues/6187)）、数据完整性（[#6147](https://github.com/tinyhumansai/openhuman/issues/6147)、[#6149](https://github.com/tinyhumansai/openhuman/issues/6149)）、重试/补偿（[#6186](https://github.com/tinyhumansai/openhuman/issues/6186)）、调度阻断（[#6200](https://github.com/tinyhumansai/openhuman/issues/6200)）。
- **测试基础设施治理**成为新焦点（[#6198](https://github.com/tinyhumansai/openhuman/issues/6198)、[#6199](https://github.com/tinyhumansai/openhuman/issues/6199)、[#6172](https://github.com/tinyhumansai/openhuman/issues/6172)）——表明社区已意识到"测试套件本身的可信度"是规模化交付的瓶颈。
- **Slack / Composio 集成稳定性**（[#6194](https://github.com/tinyhumansai/openhuman/issues/6194)、[#6176](https://github.com/tinyhumansai/openhuman/issues/6176)）反映托管连接器生命周期管理需要更明确的契约。

---

## 5. Bug 与稳定性

按严重程度排序（仅列出"已发现明确 fix PR 路径"的，以方便维护者对照）：

### 🔴 P1（高优先级）
| Issue | 现象 | Fix PR |
|---|---|---|
| [#6147](https://github.com/tinyhumansai/openhuman/issues/6147) `memory_docs.document_id` UNIQUE 约束失败导致 GitHub 内存同步每次 tick 失败 | 内存同步完全失效 | ⏳ 未见明确修复 PR（建议尽快分诊） |
| [#6206](https://github.com/tinyhumansai/openhuman/pull/6206) (修复) managed 目录在 session 失效时报错 | 推理入口崩溃 | ✅ [#6206](https://github.com/tinyhumansai/openhuman/pull/6206) 已合并 |

### 🟠 P2（中等优先级）
| Issue | 现象 | Fix PR |
|---|---|---|
| [#6155](https://github.com/tinyhumansai/openhuman/issues/6155) Skill YAML 弃用字段每次加载都 WRN | 日志噪音 | ✅ [#6191](https://github.com/tinyhumansai

</details>

---
*本日报由 [Big Model Radar](https://github.com/96loveslife/big_model_radar) 自动生成。*
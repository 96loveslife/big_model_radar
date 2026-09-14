# OpenClaw 生态日报 2026-09-14

> Issues: 500 | PRs: 500 | 覆盖项目: 8 个 | 生成时间: 2026-09-14 04:19 UTC

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

<think>
The user wants me to generate a daily report for the OpenClaw project based on GitHub data from 2026-09-14. Let me analyze the data carefully and create a structured report.

Let me note some interesting things about this data:
- 500 Issues updated (281 new/active, 219 closed)
- 500 PRs updated (298 pending, 202 merged/closed)
- 0 new releases
- This appears to be a fictional/futuristic project (dates in 2026)

The user wants the report in Chinese, professional and data-driven.

Let me structure this carefully:

1. **今日速览** - Overall summary with activity assessment
2. **版本发布** - No releases, so skip
3. **项目进展** - Important merged/closed PRs
4. **社区热点** - Most discussed issues/PRs
5. **Bug 与稳定性** - Bugs sorted by severity
6. **功能请求与路线图信号** - Feature requests
7. **用户反馈摘要** - User feedback from comments
8. **待处理积压** - Long-pending issues

Looking at the data:
- High-priority P0 issues include: #146394 (update failure), #145252 (tracking update reliability), #146860 (Windows update handoff), #145510 (runtime verification), #145192 (managed update fails), #140162 (Windows gateway restart)
- P0 closed: #108435 (gateway fails to start), #141252 (2026.9.2 regression), #145563 (WeChat reply), #135776 (plugin version skew), #140162 (Windows restart), #145503 (skill_workshop)
- Most discussed issue: #25592 (40 comments) - text leaking between tool calls
- Second: #97616 (30 comments) - zombie process leak
- Third: #44925 (28 comments) - subagent completion loss
- Fourth: #91009 (23 comments) - Codex hook relay CPU usage

The most active PRs:
- #143341 - restore context reads for Discord/Slack plugins (XL size, P1)
- #146170 - preserve plugin commands in 2026.9.5 (XL, roboclaw-bot)
- #147244 - iOS Cloudflare Access (XL, P2)
- #147773 - start remote sessions without repo (XL)

Let me write the report now.
</think>
# OpenClaw 项目日报 · 2026-09-14

---

## 1. 今日速览

OpenClaw 项目在 2026-09-14 维持了极高的 issue/PR 处理密度：24 小时内共更新 **500 条 Issue**（新开/活跃 281，关闭 219）与 **500 条 PR**（待合并 298，已合并/关闭 202），关闭率分别约为 44% 与 40%。当日 **无新版本发布**，所有提交内容正汇集在主线 2026.9.5 候选构建中（主线 head `8b9454a0`）。从标签密度看，**P0/P1 高严重度议题仍占比偏高**，集中在 9.3/9.4 升级链路的兼容性与 Windows/macOS 平台管理更新流程上，叠加 Codex app-server、Codex hook relay 与 subagent 编排三类的稳定性议题，反映出 9.x 系列在多通道扩展与升级治理上仍处压力期。整体活跃度评级：**高强度维护 / 中度健康度**。

---

## 2. 版本发布

⚠️ **今日无新版本发布。** 当前主线（PR #146170）正围绕 `2026.9.5` 进行 rebase 整理，相关变更日志草稿见 PR #147296，预计将在 9.5 合并窗口中正式发布。

---

## 3. 项目进展

### 已合并/已关闭的重要 PR（2026-09-13 → 2026-09-14）

| PR | 标题 | 影响 | 关闭类型 |
|---|---|---|---|
| [#141252](https://github.com/openclaw/openclaw/pull/141252) | 2026.9.2 reply "no active tool authority snapshot" 修复 | 修复 9.2 回归导致的 reply fallback 误触发 | 已关闭 ✅ |
| [#145503](https://github.com/openclaw/openclaw/pull/145503) | skill_workshop 工具注册修复 + doctor --fix 解析一致性 | 修复 9.3 Workshop 迁移后自动化失效 | 已关闭 ✅ |
| [#145563](https://github.com/openclaw/openclaw/pull/145563) | WeChat channel `PreparedModelCatalogConfigReplacedError` 修复 | 恢复 WeChat 通道消息回复 | 已关闭 ✅ |
| [#108435](https://github.com/openclaw/openclaw/pull/108435) | 2026.7.1 gateway 启动失败修复 | 恢复 systemd/ollama/手动三种启动方式 | 已关闭 ✅ |
| [#140162](https://github.com/openclaw/openclaw/pull/140162) | Windows `openclaw gateway restart` 误杀慢启动实例 | 修复 181s stale-process cleanup 误判 | 已关闭 ✅ |
| [#135776](https://github.com/openclaw/openclaw/pull/135776) | `openclaw update` 留下 exact-pinned 官方插件旧版 | 修复 core/plugin 版本错位导致插件加载失败 | 已关闭 ✅ |
| [#137927](https://github.com/openclaw/openclaw/pull/137927) | Telegram 内部 context block 泄漏 | 修复 `<<<BEGIN_OPENCLAW_INTERNAL_CONTEXT>>>` 出现在可见消息 | 已关闭 ✅ |
| [#85030](https://github.com/openclaw/openclaw/pull/85030) | sessions_spawn 注入 MCP 工具 | subagent 终于能使用 MCP 工具 schema | 已关闭 ✅ |
| [#88312](https://github.com/openclaw/openclaw/pull/88312) | 2026.5.27 Codex turn-completion stall 回归 | 修复 #84076/#85107 的回潮 | 已关闭 ✅ |

### 今日主线推进
- 维护者 [@steipete](https://github.com/steipete) 在 24h 内连续提交 **8 个 PR**（#147866, #147876, #147871, #147865, #147862, #147864, #147849, #147872, #147771, #147773），覆盖 **SQLite 启动异步化、prompt 录制降本、Linux Crabbox hydration、UI 实时重试**等基础设施改进，标志 9.5 在性能与启动治理上的密集收尾。
- [@vincentkoc](https://github.com/vincentkoc) 推进 Android 内存优化（#147877）、Matrix 上下文截断共享（#147792）、iOS Cloudflare Access 集成（#147244, **XL/P2**）。
- 主线 rebase 协调 PR [#146170](https://github.com/openclaw/openclaw/pull/146170) 由 roboclaw-bot 维护，确保 9.5 不丢失插件命令、update/service 读取和已配置插件安装。

整体看，**9.5 在稳定性、升级链路、平台兼容性三条主线都有可量化的推进**，项目健康度处于从"压力期"向"修复窗口期"的过渡阶段。

---

## 4. 社区热点

### 评论数 Top 5 Issues（深度讨论）

| 排名 | Issue | 评论 | 主题 | 链接 |
|---|---|---|---|---|
| 1 | #25592 🦞 | 40 | 工具调用间内部文本泄漏到 Slack/iMessage | [#25592](https://github.com/openclaw/openclaw/issues/25592) |
| 2 | #97616 🦪 | 30 | hook/tool 子进程未被回收，僵尸累积 | [#97616](https://github.com/openclaw/openclaw/issues/97616) |
| 3 | #44925 🦞 | 28 | Subagent 完成静默丢失（无重试/通知/重启） | [#44925](https://github.com/openclaw/openclaw/issues/44925) |
| 4 | #91009 🦪 | 23 | Codex PreToolUse hook relay 占满 CPU、Gateway RPC 阻塞 | [#91009](https://github.com/openclaw/openclaw/issues/91009) |
| 5 | #88312 🐚 | 22 | 2026.5.27 Codex turn-completion 回归 | [#88312](https://github.com/openclaw/openclaw/issues/88312) |

### 平台反馈 Top 议题
- [#102175](https://github.com/openclaw/openclaw/issues/102175) (19 评论) — 嵌入式 prompt cache 跨边界断裂，影响长会话成本。
- [#119720](https://github.com/openclaw/openclaw/issues/119720) (19 评论) — Gateway 事件循环被同步持久化阻塞（#140231、#138984 已部分修复）。
- [#69208](https://github.com/openclaw/openclaw/issues/69208) (15 评论) — 跨通道的 transcript 重复/replay/context 拼装 umbrella。

### 讨论背后的共性诉求
1. **可观测性**：用户希望 subagent 失败有 trace、有重试，而不是静默丢失。
2. **平台一致性**：Codex app-server、WeChat、Telegram、Mattermost、Feishu 都有特定通道的稳定性问题。
3. **升级可靠性**：9.3→9.4 的 handoff 失败、Windows 任务计划程序 managed update 阻塞、npm 全局安装失败，构成 9.x 系列信任危机。

---

## 5. Bug 与稳定性

### 🔴 P0（紧急 / 影响发布）
| Issue | 标题 | 状态 | Fix PR |
|---|---|---|---|
| [#146394](https://github.com/openclaw/openclaw/issues/146394) | 9.3 更新失败：global-install-failed（linux/arm64） | OPEN | ❌ 未指派 |
| [#146860](https://github.com/openclaw/openclaw/issues/146860) | Windows: Scheduled Task `InteractiveToken` 下 managed update 失活/废弃 | OPEN | ❌ |
| [#145510](https://github.com/openclaw/openclaw/issues/145510) | 9.3 更新失败：runtime-verification-failed（win32/x64） | OPEN | ❌ |
| [#145192](https://github.com/openclaw/openclaw/issues/145192) | 9.2→9.4 managed update 在 candidate-Doctor 卡住 v1 handoff lease | OPEN | ❌ |
| [#145252](https://github.com/openclaw/openclaw/issues/145252) | **[Tracking]** 9.3/9.4 更新/升级/恢复可靠性（维护者跟踪） | OPEN | — |
| [#91009](https://github.com/openclaw/openclaw/issues/91009) | Codex hook relay 100%+ CPU、Gateway RPC stall | OPEN | ❌ |
| [#144911](https://github.com/openclaw/openclaw/issues/144911) 🦞 | MCP server init timeout 触发 child cleanup 异常使 Gateway 崩溃 | OPEN | ❌ |

### 🟠 P1（高优先）
| Issue | 标题 | 状态 | Fix PR |
|---|---|---|---|
| [#25592](https://github.com/openclaw/openclaw/issues/25592) 🦞 | 工具调用间文本泄漏到通道 | OPEN | ❌（多维护者待审） |
| [#97616](https://github.com/openclaw/openclaw/issues/97616) 🦪 | hook/tool 子进程泄漏 | OPEN | ❌ |
| [#44925](https://github.com/openclaw/openclaw/issues/44925) 🦞 | Subagent 完成静默丢失 | OPEN | ❌ |
| [#119720](https://github.com/openclaw/openclaw/issues/119720) 🦞 | 同步持久化阻塞 Gateway 事件循环 | OPEN | 部分（#140231, #138984 已合） |
| [#134993](https://github.com/openclaw/openclaw/issues/134993) 🦐 | 2026.8.1 Gateway 升级后大 fleet 触发文件系统发现 busy loop | OPEN | ❌ |
| [#143524](https://github.com/openclaw/openclaw/issues/143524) 🦐 | Windows Agent SQLite WAL 增长 1.4–2.8 GB 阻塞启动 | OPEN | ❌ |
| [#101929](https://github.com/openclaw/openclaw/issues/101929) 🦞 | context-overflow-midturn-precheck 估算过高 2.3–2.6× | OPEN | ❌ |
| [#141474](https://github.com/openclaw/openclaw/issues/141474) 🦞 | sessions_yield 让 agents_wait 永久挂起，outputSchema 静默失效 | OPEN | ❌ |

### 🟡 近期已修复的 P0/P1
- [#141252](https://github.com/openclaw/openclaw/issues/141252) ✅ reply "no active tool authority snapshot"
- [#108435](https://github.com/openclaw/openclaw/issues/108435) ✅ gateway 启动失败
- [#140162](https://github.com/openclaw/openclaw/issues/140162) ✅ Windows 慢启动误杀
- [#135776](https://github.com/openclaw/openclaw/issues/135776) ✅ 插件版本错位
- [#145563](https://github.com/openclaw/openclaw/issues/145563) ✅ WeChat channel reply
- [#145503](https://github.com/openclaw/openclaw/issues/145503) ✅ skill_workshop 注册
- [#85030](https://github.com/openclaw/openclaw/issues/85030) ✅ MCP 注入 subagent
- [#88312](https://github.com/openclaw/openclaw/issues/88312) ✅ Codex turn-completion 回归
- [#137927](https://github.com/openclaw/openclaw/issues/137927) ✅ Telegram 内部 context 泄漏

**观察**：9.x 升级链路的 P0 集群仍是最大隐患（managed update、handoff lease、SQLite WAL、Windows 计划任务），但 24h 内已关闭 6 个高严重度 issue，修复速率明显提升。

---

## 6. 功能请求与路线图信号

| Issue | 请求 | 评级 | 状态 |
|---|---|---|---|
| [#27445](https://github.com/openclaw/openclaw/issues/27445) | `announceTarget` 子代理完成路由 | 🌊 off-meta, P1 | 已有 linked PR，但 `no-new-fix-pr` 标签 |
| [#48788](https://github.com/openclaw/openclaw/issues/48788) | 集中式多编码 Content-Disposition 工具 | 🌊 off-meta, P3 | stale，#48578 解决部分场景 |
| [#52640](https://github.com/openclaw/openclaw/issues/52640) | 长时间 channel turn 的持久任务状态面板（Discord 优先） | 🌊 off-meta, P2 | stale，无 PR |
| [#51028](https://github.com/openclaw/openclaw/issues/51028) | Sessions 面板按"last meaningful activity"排序 | 🌊 off-meta, P3 | stale，无 PR |
| [#74077](https://github.com/openclaw/openclaw/issues/74077) | `/stream` slash 命令设置当前会话流模式 | 🌊 off-meta, P3 | 已关闭但有 linked PR |

### 高可能性纳入 2026.9.5 的功能
- **#147244** iOS Gateway 通过 Cloudflare Access（XL/P2，needs proof） — 标志 iOS 客户端能力补齐。
- **#147773** 无仓库启动远程会话（XL/P2，screenshot 证明） — 降低云会话启动门槛。
- **#143341** 恢复官方 Discord/Slack 插件的跨会话 context 读取（XL/P1） — 关键通道能力修复。
- **#147296** 9.5 发布说明草稿（hannesrudolph） — 文档就绪。

---

## 7. 用户反馈摘要

### 真实痛点（从评论中提炼）

**1. 静默失败最受用户诟病**
> "results are silently lost"（#44925 描述者原话）
- Subagent 失败无重试、无通知、无自动重启，是用户对 OpenClaw 编排层最集中的不满。
- 反例：#145192 / #146394 用户被迫手动跑 `openclaw triage`，升级信心受损。

**2. 升级体验反复**
- "managed update handoff lease is incompatible"、Windows Scheduled Task `InteractiveToken` stall、Linux npm global-install-failed、macOS rollback — 同一升级动作在不同平台有不同失败模式。
- 跟踪 issue #145252 已成为 9.3/9.4 用户集中反馈入口。

**3. Codex 集成高频踩坑**
- Codex app-server turn completion 至少出现两次回归（#84076 → #85107 修复 → #88312 再次出现）。
- hook relay 占满 CPU、PreToolUse 触发 100% 占用，#91009 用户的 trace 显示 OpenClaw 主进程被严重拖累。

**4. 通道特异性问题**
- Telegram DM cross-chat contamination（#77292, #62306 回归）
- Feishu 流式卡片不可搜索（#74767）
- WeChat `PreparedModelCatalogConfigReplacedError`（#145563 已修）
- Windows WhatsApp 事件循环 12s 阻塞（#77443）
- Mattermost 0xC0000409 崩溃 + 复活不稳定（#71699）

**5. 性能与资源**
- 2026.8.1 升级后大 skill/agent fleet 触发 filesystem discovery busy loop（#134993）
- Windows Agent SQLite WAL 不可控增长 1.4–2.8 GB（#143524）
- context-overflow-midturn-precheck 估算偏高 2.3–2.6×（#101929）

**6. 可观测性诉求**
- 维护者 [@BradGroux](https://github.com/BradGroux) 的 umbrella #69208 试图把"transcript 重复/replay"聚类，但 `needs-info`，需要产品决策。

### 用户满意面
- doctor --fix 在 OPENCLAW_SERVICE_REPAIR_POLICY=external 下能完成全部迁移（#145503 评论反馈）
- Linux Crabbox 重复 hydration 修复（#147864, steipete）
- 9.5 路线图被 [@anyech](https://github.com/anyech)、[@sunlit-deng](https://github.com/sunlit-deng) 等外部维护者协同 review

---

## 8. 待处理积压

### 长期未响应（stale 标签 + 高严重度）

| Issue | 状态 | 关键标签 | 建议 |
|---|---|---|---|
| [#99586](https://github.com/openclaw/openclaw/issues/99586) 🦪 | OPEN, stale, regression | P2, session-state | 9.5

---

## 横向生态对比

<think>The user wants me to generate a horizontal comparative analysis report based on the daily reports of 7 open source projects. Let me carefully analyze each project's data and synthesize insights across all of them.

Let me extract the key data points first:

**OpenClaw**: 
- 500 Issues (281 new/active, 219 closed) - 44% close rate
- 500 PRs (298 pending, 202 merged/closed) - 40% close rate
- 0 releases
- Main focus: 9.5 release candidate, multi-platform stability, upgrade chains
- P0 issues on Windows/Linux upgrade, Codex integration
- 50+ significant bug fixes in 24h

**NanoBot**: 
- 0 Issues updated
- 7 PRs (3 closed, 4 open)
- 0 releases
- Focus: WebUI improvements (mobile, branding, connection), Cron fixes
- Long-standing PR #3245 (5 months)

**PicoClaw**: 
- 5 Issues (3 open, 2 closed)
- 3 PRs (all closed, including 6-7 month old ones)
- 0 releases
- Focus: Web UI lag, session persistence, IRC support
- Low activity overall

**IronClaw**: 
- 0 Issues
- 5 PRs (all Dependabot)
- 0 releases
- 100% automated activity

**LobsterAI**: 
- 4 Issues (all open, mostly stale)
- 4 PRs (all open, stale)
- 0 releases
- P0 security vulnerability waiting 5.5 months

**QwenPaw**: 
- 22 Issues (21 new/active, 1 closed)
- 26 PRs (23 pending, 3 closed)
- 0 releases
- v2.2.x stability focus, Creator 1.3.0 PR
- Hub mode emerging

**Hermes Agent**: 
- 50 Issues (38 new/active, 12 closed)
- 50 PRs (22 pending, 28 merged/closed)
- 0 releases
- state.db WAL crisis, P1 fix pending
- Very active bot-driven workflows

**OpenHuman**: 
- 4 Issues (3 open, 1 closed)
- 5 PRs (3 open, 2 closed)
- 0 releases
- Google Calendar integration focus
- Test infrastructure hardening

Now let me synthesize:

1. **生态全景**: This is an ecosystem at a critical inflection point - significant activity but multiple projects at risk. No releases across all 7 projects suggests a "stabilization phase" or "release pause". P0/P1 bugs are concentrated around upgrade mechanisms, data persistence (SQLite WAL/state.db), and platform integrations.

2. **活跃度对比**: 
- Tier 1 (Hyperactive): OpenClaw, Hermes Agent
- Tier 2 (Active): QwenPaw
- Tier 3 (Moderate): NanoBot, OpenHuman
- Tier 4 (Quiet): PicoClaw, LobsterAI
- Tier 5 (Auto-only): IronClaw

3. **OpenClaw positioning**: OpenClaw is clearly the most active and "core" project in this ecosystem. It's the only one with explicit cross-platform support (Windows/macOS/Linux/iOS/Android), and has the broadest feature surface. Other projects have more focused/niche positioning.

4. **Common technical themes**:
- **Upgrade reliability**: OpenClaw (#145252, #146394, #146860, #145510), Hermes Agent (state.db WAL)
- **Session/data persistence**: OpenClaw (#145192), PicoClaw (#3351), QwenPaw (#7708, #7724), Hermes Agent
- **MCP integration**: OpenClaw (#144911), QwenPaw (#7716, #7728)
- **Web UI performance**: PicoClaw (#3281, #3350), NanoBot (#5757)
- **Cron/scheduling reliability**: NanoBot (#3245, #5751)
- **Multi-channel/multi-platform**: OpenClaw, QwenPaw (Hub mode), Hermes Agent (gateway), LobsterAI
- **Security vulnerabilities**: LobsterAI (P0 SSRF), OpenClaw (security), Hermes Agent (config set bypass)
- **Subagent/orchestration**: OpenClaw (#44925), Hermes Agent (Kanban)
- **Embedded/edge deployment**: PicoClaw (RISC-V, RV1106)

5. **Differentiation**:
- OpenClaw: Swiss army knife, full-stack, multi-platform
- NanoBot: WebUI-first, focused UX
- PicoClaw: Embedded/lightweight, hardware-constrained
- IronClaw: Rust/WASM, performance/security focused
- LobsterAI: Multimodal workspace (research/docs/PPT/video/web)
- QwenPaw: Hub mode + Creator (multi-modal content creation)
- Hermes Agent: Multi-agent Kanban, complex workflows
- OpenHuman: Calendar/integration heavy, desktop

6. **Activity stratification**:
- Hyperactive iteration: OpenClaw, Hermes Agent, QwenPaw
- Quality consolidation: NanoBot, OpenHuman
- Maintenance mode: PicoClaw, LobsterAI
- Auto-pilot: IronClaw

7. **Trend signals**:
- Cross-session memory/durability is THE hot topic (LobsterAI #2660, Hermes Agent, QwenPaw)
- MCP has become critical infrastructure
- "Silent failures" is the #1 user complaint
- Mobile/embedded support is a clear differentiator
- Hub/Cloud deployment emerging (QwenPaw)
- Security/permission boundaries matter more as projects mature

Let me write this in Chinese, professional tone, data-driven.

For the OpenClaw positioning, I need to be especially careful since OpenClaw is described as "核心参照" (core reference). I should acknowledge this while still being analytically honest about its challenges (P0 issues, no release, etc.).

Let me also consider the format - tables, clear sections, data citations, but not overly long. The user wants "简洁专业" (concise and professional), data-supported, suitable for tech decision-makers and developers.

Let me draft the report now.</think>

# 个人 AI 助手开源生态横向对比分析报告
**数据周期：2026-09-14 过去 24 小时**

---

## 1. 生态全景

本生态在 2026-09-14 呈现出 **"高强度维护期 + 静默发布"** 的典型矛盾态势：**7 个项目当日 0 新版本发布**，但 Issues 流转总量约 585 条、PR 流转约 593 条，处于"问题暴露与修复消化同步推进"的窗口期。最关键的信号是**多个项目同时进入升级可靠性危机**——OpenClaw 的 9.x managed-update 链路、Hermes Agent 的 `state.db` WAL 句柄泄漏、QwenPaw 的 2.2.x 状态丢失，构成跨项目的共性痛点。从架构成熟度看，生态正从"功能堆叠期"过渡到"持久化与权限语义工程化期"，**多通道扩展（Slack/Discord/WeCom/IRC/Feishu）与 MCP 工具调用**已沉淀为事实标准，而 **subagent 编排的静默失败**与**跨会话记忆连续性**正成为新的能力天花板。

---

## 2. 各项目活跃度对比

| 项目 | Issues (新/活跃) | Issues 关闭 | PRs 待合并 | PRs 合/闭 | Release | 当日健康度 |
|------|:---:|:---:|:---:|:---:|:---:|:---|
| **OpenClaw**（参照） | 281 / 500 | 219 (44%) | 298 / 500 | 202 (40%) | 0 | 🟡 高强度维护 / 中等健康 |
| **Hermes Agent** | 38 / 50 | 12 (24%) | 22 / 50 | 28 (56%) | 0 | 🔴 高活跃 / 稳定性风险 |
| **QwenPaw** | 21 / 22 | 1 (5%) | 23 / 26 | 3 (12%) | 0 | 🟠 高速迭代 / 待合并积压 |
| **NanoBot** | 0 / 0 | 0 | 4 / 7 | 3 (43%) | 0 | 🟡 稳态迭代 / 1 项长期积压 |
| **OpenHuman** | 3 / 4 | 1 (25%) | 3 / 5 | 2 (40%) | 0 | 🟡 中等活跃 / 用户体验滞后 |
| **PicoClaw** | 3 / 5 | 2 (40%) | 0 / 3 | 3 (100%) | 0 | 🟠 低活跃 / stale 治理中 |
| **LobsterAI** | 4 / 4 | 0 (0%) | 4 / 4 | 0 (0%) | 0 | 🔴 维护停滞 / P0 安全积压 |
| **IronClaw** | 0 / 0 | 0 | 4 / 5 | 1 (20%) | 0 | ⚫ 自动巡航 / 功能停滞 |

**关键观察**：
- **关闭率 Top 2**：Hermes Agent（56%）、OpenClaw（40%）—— 维护者响应效率最高；
- **Issue 密度异常**：OpenClaw 是唯一突破 500 条流转的项目，反映其作为参照基座的"高熵值"特征；
- **0 合并但有 PR**：QwenPaw（23 待合并）、LobsterAI（4 待合并全部 stale）形成两条相反的"积压曲线"。

---

## 3. OpenClaw 在生态中的定位

### 3.1 横向对比矩阵

| 维度 | OpenClaw | Hermes Agent | QwenPaw | NanoBot | LobsterAI | PicoClaw |
|------|----------|--------------|---------|---------|-----------|----------|
| **平台覆盖** | 全平台 + 移动端 | 桌面 + Gateway | Hub 模式 | Web 优先 | 桌面为主 | 嵌入式/RISC-V |
| **核心抽象** | Gateway + 插件 | Profile + Kanban | Creator + Hub | WebUI + Cron | 多模态工作区 | LLM 网关 |
| **通道集成** | ~20 个 IM/社交 | ~14-20 个平台 | 多渠道 + bot-manager | 不强调 | 不强调 | IRC/Telegram |
| **MCP 深度** | ✅ 多 PR 支持 | ✅ `properties` 修复 | ✅ 连接稳定性 | 无 | 无 | 无 |
| **子代理编排** | ✅ sessions_spawn | ✅ Kanban 多 agent | ️ spawn 超时 | 无 | 无 | 无 |
| **状态持久化** | SQLite WAL（多 P0） | state.db WAL（多 P0） | 会话丢失 | JSONL（潜在风险） | 未提及 | jsonl 重写 |
| **代码规模指标** | 8b9454a0 + 9.5 RC | 0.21.x | v2.2.x | — | — | 0.3.1 |

### 3.2 OpenClaw 的差异化优势

1. **"参照基座"地位实至名归**：当日 500 条 Issue/500 条 PR 的处理量是生态平均水平的 **20 倍以上**，维护者（@steipete、@vincentkoc 等）单日提交密度行业领先；
2. **平台覆盖最完整**：唯一同时覆盖 Windows/macOS/Linux/iOS/Android 五大端，并明确支持 iOS Cloudflare Access（PR #147244）；
3. **修复周转速度最快**：9.5 RC 周期内连续关闭 9 个 P0/P1（[#108435](https://github.com/openclaw/openclaw/pull/108435)、[#141252](https://github.com/openclaw/openclaw/pull/141252)、[#145563](https://github.com/openclaw/openclaw/pull/145563) 等），平均 TTR 优于生态平均；
4. **技术债透明度高**：明确以 [#145252](https://github.com/openclaw/openclaw/issues/145252) 作为 9.3/9.4 升级可靠性的维护者跟踪入口，体现成熟的发布治理。

### 3.3 相对短板

- **同质化 P0 集群**：升级链路的 P0 仍占主导（#146394、#146860、#145510、#145192），反映 9.x 跨版本兼容性设计存在系统性问题；
- **Subagent 静默失败**（[#44925](https://github.com/openclaw/openclaw/issues/44925)，40 评论）—— 与 Hermes Agent 的 Kanban 阻塞升级形成对比，编排层可观测性落后于竞品；
- **同日 0 发布**：9.5 候选构建周期已超过行业典型 7 天窗口，社区等待情绪在累积。

---

## 4. 共同关注的技术方向

下表汇总当日多项目共性诉求：

| 技术方向 | 涉及项目 | 代表性 Issue | 共性诉求 |
|----------|----------|--------------|----------|
| **持久化层（WAL/锁/JSONL）** | OpenClaw、Hermes Agent、QwenPaw、PicoClaw | [#143524](https://github.com/openclaw/openclaw/issues/143524)、[#109966](https://github.com/NousResearch/hermes-agent/issues/109966)、[#7708](https://github.com/agentscope-ai/QwenPaw/issues/7708)、[#3351](https://github.com/sipeed/picoclaw/issues/3351) | SQLite WAL 句柄泄漏 / jsonl 重写丢失 / 会话与配置同步丢失 |
| **升级/迁移可靠性** | OpenClaw、Hermes Agent | [#145252](https://github.com/openclaw/openclaw/issues/145252)、[#103363](https://github.com/NousResearch/hermes-agent/issues/103363) | managed update handoff 失败 / schema 迁移未触发 |
| **MCP 工具生态兼容性** | OpenClaw、Hermes Agent、QwenPaw | [#144911](https://github.com/openclaw/openclaw/issues/144911)、[#110530](https://github.com/NousResearch/hermes-agent/issues/110530)、[#7716](https://github.com/agentscope-ai/QwenPaw/issues/7716) | server init timeout / `properties` 400 / 升级后注册失败 |
| **多通道稳定性** | OpenClaw、Hermes Agent、QwenPaw | [#145563](https://github.com/openclaw/openclaw/pull/145563)、[#55487](https://github.com/NousResearch/hermes-agent/issues/55487)、[#7702](https://github.com/agentscope-ai/QwenPaw/pull/7702) | 平台特定崩溃 / 忙循环 / 渠道碎片化 |
| **Web UI 性能** | NanoBot、PicoClaw、OpenHuman | [#5757](https://github.com/HKUDS/nanobot/pull/5757)、[#3281](https://github.com/sipeed/picoclaw/issues/3281)、[#6246](https://github.com/tinyhumansai/openhuman/issues/6246) | 长会话卡顿 / 嵌入式设备卡顿 / 附件预览空白 |
| **跨会话持久记忆** | LobsterAI、Hermes Agent、QwenPaw、OpenClaw（间接） | [#2660](https://github.com/netease-youdao/LobsterAI/issues/2660)、[#110536](https://github.com/NousResearch/hermes-agent/issues/110536)、[#7733](https://github.com/agentscope-ai/QwenPaw/issues/7733) | user/workspace memory / skill 选择模型 / 上下文自主驱逐 |
| **安全与权限边界** | LobsterAI、Hermes Agent、OpenClaw | [#1041](https://github.com/netease-youdao/LobsterAI/issues/1041)、[#59293](https://github.com/NousResearch/hermes-agent/issues/59293)、[#145192](https://github.com/openclaw/openclaw/issues/145192) | SSRF + 任意文件读取 / 配置写保护绕过 / handoff lease 越权 |
| **Cron / 调度可靠性** | NanoBot、OpenClaw（间接） | [#3245](https://github.com/HKUDS/nanobot/pull/3245)（5 个月未合）、[#5751](https://github.com/HKUDS/nanobot/pull/5751) | 持久化 before await / 编辑重算时间 |
| **移动/嵌入式体验** | PicoClaw、QwenPaw、OpenHuman | [#3350](https://github.com/sipeed/picoclaw/issues/3350)、[#7707](https://github.com/agentscope-ai/QwenPaw/issues/7707) | RV1106 / RISC-V 适配 / 安卓浏览器 |
| **可观测性与失败回声** | OpenClaw、Hermes Agent | [#44925](https://github.com/openclaw/openclaw/issues/44925)、[#72502](https://github.com/NousResearch/hermes-agent/issues/72502) | subagent 完成静默丢失 / 排队消息无回执 |

---

## 5. 差异化定位分析

| 项目 | 功能侧重 | 目标用户 | 关键架构差异 |
|------|----------|----------|--------------|
| **OpenClaw** | 全栈多通道 + 9.5 升级治理 | 全平台开发者 / 集成商 | **Gateway + 插件 + Codex app-server** 多层抽象，跨平台构建矩阵最完整 |
| **Hermes Agent** | 多 agent 编排 + Kanban 协同 | 企业多 agent 工作流 / 重度用户 | **Profile 多路复用 + Kanban 任务升级**，bot 自动化 CI 闭环成熟 |
| **QwenPaw** | 多模态内容创作 + Hub 部署 | 创作者 / 远程协作团队 | **Creator 1.3.0 插件大版本 + Hub 模式**，bot-manager 统一渠道 |
| **NanoBot** | WebUI 优先 + Cron 自动化 | 轻量 SaaS / 个人开发者 | **WebUI 国际化 + 移动端适配**，体积最小 |
| **LobsterAI** | 多模态研究工作台（文档/PPT/视频/Web） | 研究 / 内容运营人员 | **IPC 工具链路 + 工作区文件树**，但安全债积压 |
| **PicoClaw** | 嵌入式 / IoT 网关 | 硬件开发者 / RISC-V 用户 | **Go 1.25 + jsonl 持久化**，极致轻量 |
| **IronClaw** | Rust + WASM 安全沙箱 | 高安全 / 性能敏感场景 | **wasmtime 运行时 + Rust 生态**，纯依赖驱动 |
| **OpenHuman** | Calendar 集成 + 桌面

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

<think>Let me analyze the GitHub data for NanoBot project on 2026-09-14 and create a comprehensive daily report.

Key observations:
1. 0 Issues updated in past 24 hours
2. 7 PRs updated in past 24 hours (4 open, 3 closed)
3. 0 new releases
4. PRs are mostly focused on:
   - WebUI improvements (connection screen, mobile composer, logos/branding)
   - Bug fixes for cron jobs
   - Security test improvements
   - Session search functionality

Let me categorize them:

**Closed PRs (3):**
- #5758 - fix(webui): streamline the connection screen
- #5755 - fix(webui): improve mobile composer and settings navigation
- #5754 - fix(webui): unify app logos and brand mentions

**Open PRs (4):**
- #3245 - fix(cron): persist claim before await (has conflict marker)
- #5757 - fix(session): search older pages of persisted conversation history
- #5751 - fix(cron): preserve pending runs when editing automation details
- #5756 - test(security): keep proxy-clearing fixtures hermetic on hosts with OS-level proxies

Now let me write the report in Chinese as the request was in Chinese.

The report should:
- Be objective and data-driven
- Highlight project health
- Include GitHub links
- Cover all 8 sections requested
- Be in Chinese

Let me structure this carefully.</think>

# NanoBot 项目动态日报

**日期：2026-09-14**
**数据周期：过去 24 小时**

---

## 1. 今日速览

NanoBot 项目今日整体处于**中等活跃的开发迭代期**，无新版本发布，无新 Issue 产生，社区交流节奏平稳。开发工作集中在 **WebUI 体验优化** 与 **Cron 任务调度稳定性** 两条主线，过去 24 小时内共有 7 个 PR 更新，其中 3 个已成功合/关闭，4 个仍在评审中。需要特别关注的是，存在一个标记为 `[conflict]` 的长期未合并 PR（#3245），以及多个 P2 级别的 Bug 修复 PR 正在排队等待合并。

---

## 2. 版本发布

⚠️ **今日无新版本发布。** 当前版本状态稳定，未触发发版条件。

---

## 3. 项目进展

今日共 3 个 PR 被合并或关闭，均围绕 WebUI 体验优化，标志着项目在**前端 UI/UX 一致性与多端适配**方面取得了阶段性进展：

| PR | 主题 | 影响范围 | 链接 |
|---|---|---|---|
| #5758 | 连接界面精简重构 | WebUI 登录/连接流程 | [#5758](https://github.com/HKUDS/nanobot/pull/5758) |
| #5755 | 移动端输入器与设置导航优化 | 移动端 WebUI | [#5755](https://github.com/HKUDS/nanobot/pull/5755) |
| #5754 | 应用 Logo 与品牌名称统一 | Apps 目录与消息组件 | [#5754](https://github.com/HKUDS/nanobot/pull/5754) |

**核心改进点：**
- **连接界面**（#5758）：从冗长说明改为紧凑居中布局，集成语言切换与可折叠密码帮助，错误反馈内嵌于密码框，显著降低首次使用摩擦。
- **移动端体验**（#5755）：自适应布局，附件/模型控件与发送区分离，键盘弹出时设置入口始终可见。
- **品牌一致性**（#5754）：统一使用圆角紧凑型 Logo，并在消息与输入器中展示元数据提供的品牌名称（Linear、iTerm2、Draw.io、Google Drive 等）。

整体而言，WebUI 的**视觉一致性、移动可用性、新手友好度**三项指标今日获得同步提升。

---

## 4. 社区热点

今日所有 PR 的点赞数与评论数均为 0 或 undefined，**互动热度偏低**，社区尚未形成显著讨论。这反映出：

- 当前 PR 多为工程性细节修复，缺乏引发广泛讨论的"明星特性"。
- 提交者以维护者与核心贡献者为主（@chengyongru、@Re-bin、@beemines 等），普通用户参与度有待激活。

**建议维护者关注的潜力讨论点：**
- **#5757** 涉及 WebUI 长会话历史搜索能力，是用户实际高频使用场景的痛点，值得邀请更多用户体验反馈。
- **#3245** 涉及 Cron 调度核心可靠性问题，长期未合并，社区可能需要更多技术评审输入。

---

## 5. Bug 与稳定性

按严重程度排序：

### 🔴 P2 — 中等优先级

| PR | Bug 描述 | 是否有 Fix | 链接 |
|---|---|---|---|
| #5757 | `search_sessions` 与过滤式 `read_session` 在长会话中**静默遗漏早期消息**，因 `build_webui_thread_response()` 仅返回最新分页 | ✅ 已有 Fix PR | [#5757](https://github.com/HKUDS/nanobot/pull/5757) |
| #5751 | 编辑自动化任务名称/指令时**错误重算下次执行时间**：间隔任务被推迟、到期的 Cron 任务被跳过、到期一次性任务 `next_run_at_ms` 被置为 None 永不执行 | ✅ 已有 Fix PR | [#5751](https://github.com/HKUDS/nanobot/pull/5751) |
| #5758 | 连接界面因验证错误出现**布局位移**、信息冗长 | ✅ 已合并 | [#5758](https://github.com/HKUDS/nanobot/pull/5758) |

### 🟡 安全相关

| PR | 描述 | 链接 |
|---|---|---|
| #5756 | SSRF/代理测试夹具在 Windows 注册表或 macOS SystemConfiguration 配置了系统级代理的宿主机上**存在污染风险**，测试不彻底 | [#5756](https://github.com/HKUDS/nanobot/pull/5756) |

### ⚠️ 长期遗留

| PR | 描述 | 状态 | 链接 |
|---|---|---|---|
| #3245 | CronService 在等待 Job 回调前未持久化 running claim，**进程崩溃会导致任务永久卡死** | Open（标记 conflict，自 2026-04-17 起未合并） | [#3245](https://github.com/HKUDS/nanobot/pull/3245) |

**稳定性评估：** 今日修复的 Bug 多为 UX 层面，未发现严重崩溃或数据丢失报告。但 #3245 暴露的 Cron 调度持久化问题是**潜在的可靠性短板**，建议优先解决。

---

## 6. 功能请求与路线图信号

今日无新功能请求 Issue，但从已提交的 PR 中可推断以下**路线图信号**：

| 方向 | 信号来源 | 可能影响 |
|---|---|---|
| **WebUI 多语言支持** | #5758 引入"语言切换器" | 暗示项目正为国际化做准备，未来可能支持完整 i18n |
| **移动端一等公民化** | #5755 系统性优化移动端 | 反映用户对移动端体验需求强烈，可能进入持续投入期 |
| **Cron 调度可靠性强化** | #3245、#5751、#5757 三个 P2 Bug | 自动化任务场景已成为核心使用路径，调度系统稳定性是下阶段重点 |
| **安全测试严谨性** | #5756 针对系统级代理 | 反映企业级部署场景需求增长，测试套件需覆盖更多宿主环境 |

---

## 7. 用户反馈摘要

⚠️ **今日无公开 Issue 评论可分析**，用户反馈信号较弱。可从已合并 PR 间接推断的真实痛点：

1. **首次使用门槛高**：用户曾对 WebUI 连接界面的冗长说明感到困惑 → 已通过 #5758 简化。
2. **移动端操作受限**：输入器控件拥挤、键盘遮挡设置入口 → 已通过 #5755 改进。
3. **长会话检索体验差**：用户发现搜索结果不完整，怀疑数据丢失 → 实质是分页机制缺陷，正在通过 #5757 修复。
4. **品牌识别度低**：Apps 目录缺乏统一品牌标识，影响辨识 → 已通过 #5754 优化。

---

## 8. 待处理积压

| 编号 | 标题 | 创建时间 | 状态 | 风险 | 链接 |
|---|---|---|---|---|---|
| #3245 | fix(cron): persist claim before await | 2026-04-17 | Open（conflict） | 🔴 高 — 涉及 Cron 持久化可靠性，已积压近 5 个月 | [#3245](https://github.com/HKUDS/nanobot/pull/3245) |
| #5757 | fix(session): search older pages | 2026-09-14 | Open | 🟡 中 — 影响长会话用户检索体验 | [#5757](https://github.com/HKUDS/nanobot/pull/5757) |
| #5751 | fix(cron): preserve pending runs | 2026-09-12 | Open | 🟡 中 — 影响自动化任务编辑正确性 | [#5751](https://github.com/HKUDS/nanobot/pull/5751) |
| #5756 | test(security): proxy-clearing fixtures hermetic | 2026-09-13 | Open | 🟢 低 — 测试改进 | [#5756](https://github.com/HKUDS/nanobot/pull/5756) |

**🚨 重点提醒：**
PR **#3245** 自 2026-04-17 创建至今已超过 4 个月未被合并，且当前标记为 `[conflict]`。该 PR 修复的是 Cron 任务在进程异常时可能**永久卡死**的严重问题，建议维护者尽快 rebase 并安排评审，避免遗留成技术债。

---

## 📊 项目健康度总结

| 维度 | 评分 | 说明 |
|---|---|---|
| **开发活跃度** | ⭐⭐⭐⭐ | 7 个 PR 流转，无停滞迹象 |
| **代码质量** | ⭐⭐⭐⭐ | PR 均含测试用例，关注回归覆盖 |
| **社区互动** | ⭐⭐ | 评论与点赞数据偏低，需激活社区参与 |
| **稳定性** | ⭐⭐⭐ | 存在长期遗留 P2 Bug，但均有应对方案 |
| **路线清晰度** | ⭐⭐⭐⭐ | WebUI 优化与调度稳定性两条主线明确 |

**总体评价：** 项目处于**稳健迭代期**，前端体验持续打磨，后端核心调度正接受系统性加固。建议维护者在下一阶段重点解决 #3245 长期遗留问题，并通过改进 CHANGELOG、Release Notes 等方式提升社区感知度。

---
*报告生成时间：2026-09-14 | 数据来源：GitHub REST API*

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

<think>Let me analyze the GitHub data for PicoClaw and generate a comprehensive daily report for 2026-09-14.

Key observations from the data:
- 5 Issues updates: 3 open/active, 2 closed
- 3 PR updates: 0 pending, 3 merged/closed
- 0 new releases
- Activity level: moderate

Let me categorize:

**Closed Issues:**
- #3351 - Auto-compression physically deletes session records, no real persistent storage
- #3350 - Web UI input laggy on embedded/low-performance devices

**Open Issues:**
- #3287 - Better support for long messages in IRC (12 comments, 0 reactions)
- #3281 - Web UI chat input laggy when history is a bit long (11 comments, 2 reactions)
- #3369 - Add OpenCode Go session header support (1 comment, 2 reactions)

**Closed PRs:**
- #3348 - i18n: complete Czech code wrap labels
- #1545 - fix: merge PR #1500 #1490 #1488 #1487 #1485 (very old, March 2026)
- #20 - Fix typos and update API keys in README (very old, Feb 2026)

Notable patterns:
- Web UI input lag appears in TWO different issues (#3281 and #3350) - suggesting this is a real and recurring problem
- Session memory persistence concerns raised (#3351)
- IRC long message handling (#3287)
- OpenCode integration (#3369)

The closed PRs #1545 and #20 are quite old (March and Feb 2026 respectively), so they being closed might just be cleanup activity rather than substantive changes.

All issues show "[stale]" tag except #3287 and #3281. Wait, let me re-read - only #3351, #3350, #3369 show [stale]. So the stale issues were closed (#3351, #3350), and #3369 is stale but still open.

Let me write the report in Chinese as requested, professional and data-driven.</think>

# PicoClaw 项目动态日报

**报告日期**: 2026-09-14
**数据来源**: GitHub (sipeed/picoclaw)

---

## 1. 今日速览

PicoClaw 项目今日整体活跃度处于**中等偏低**水平。过去 24 小时内无新版本发布，Issue 端有 3 条保持活跃、2 条被关闭（均为 stale 标记的长期未响应问题），PR 端所有更新均以关闭告终且无新增待合并请求。社区反馈的焦点高度集中在 **Web UI 在长对话/低性能设备下的输入卡顿** 与 **会话持久化机制缺陷** 两大主题上，呈现出明显的痛点收敛趋势。值得关注的是部分历史 PR（#1545、#20）跨度长达数月后被清理关闭，反映出仓库可能存在维护积压治理动作。

---

## 2. 版本发布

无新版本发布。

---

## 3. 项目进展

今日无新增合并 PR，已关闭的 3 个 PR 均不构成实质性推进：

- **[#3348](https://github.com/sipeed/picoclaw/pull/3348)** — i18n: complete Czech code wrap labels（stale 关闭，捷克语本地化补全未落地）
- **[#1545](https://github.com/sipeed/picoclaw/pull/1545)** — 批量合并历史修复 PR（创建于 2026-03-14，跨 6 个月后被关闭）
- **[#20](https://github.com/sipeed/picoclaw/pull/20)** — 修复 README 拼写错误与 API key 示例（创建于 2026-02-11，同样跨 7 个月关闭）

整体而言，今日项目**未取得实质性功能推进**，更多体现为仓库层面的 stale issue/PR 清理动作。建议维护者评估是否需要主动跟进关键 stale 议题，避免长期未响应问题持续堆积影响社区信心。

---

## 4. 社区热点

**评论数最多的议题：**

| 排名 | Issue | 评论数 | 👍 | 主题 |
|------|-------|--------|-----|------|
| 1 | [#3287](https://github.com/sipeed/picoclaw/issues/3287) | 12 | 0 | IRC 长消息分段处理 |
| 2 | [#3281](https://github.com/sipeed/picoclaw/issues/3281) | 11 | 2 | Web UI 输入卡顿（历史长时） |
| 3 | [#3369](https://github.com/sipeed/picoclaw/issues/3369) | 1 | 2 | OpenCode Go session header 支持 |

**诉求分析：**

- **IRC 长消息问题**（[#3287](https://github.com/sipeed/picoclaw/issues/3287)）讨论最为活跃，12 条评论反映出用户希望在 IRCv3 协议下将分段消息识别为单一语义单元，但 0 👍 表明尚未形成足够的社区共识投票。
- **Web UI 输入卡顿**（[#3281](https://github.com/sipeed/picoclaw/issues/3281)）获得 2 个 👍，说明有同质化用户群体认同此问题。
- **OpenCode Go 集成**（[#3369](https://github.com/sipeed/picoclaw/issues/3369)）虽然评论少但 👍 数较高，反映对 OpenAI 兼容 Provider 的扩展需求具备一定共识基础。

---

## 5. Bug 与稳定性

**按严重程度排序：**

### 🔴 高严重度

1. **Web UI 输入框在长历史会话下卡顿** — [#3281](https://github.com/sipeed/picoclaw/issues/3281)（OPEN）
   - 影响版本：PicoClaw 0.3.1 + Go 1.25.11
   - 现象：会话历史稍长时，输入框响应明显延迟
   - 状态：尚无关联 fix PR

2. **嵌入式/低性能设备 Web UI 打字卡顿** — [#3350](https://github.com/sipeed/picoclaw/issues/3350)（CLOSED/stale）
   - 现象：RV1106、RISC-V 板子等设备上每个字符输入都有明显延迟，CPU 飙升
   - 状态：因 stale 被关闭，未提供 fix PR
   - ⚠️ 风险：与 #3281 同源问题被关闭，可能将问题推向重新开案

### 🟡 中严重度

3. **自动压缩会物理删除 session 原始记录** — [#3351](https://github.com/sipeed/picoclaw/issues/3351)（CLOSED/stale）
   - 根因定位明确：`pkg/memory/jsonl.go` 的 `SetHistory → rewriteJSONL` 重写覆盖整个 jsonl 文件
   - 风险：用户失忆后历史不可恢复，属于**数据持久性缺陷**
   - 状态：因 stale 被关闭，未提供修复方案

> **关键观察**：两个 Web UI 卡顿问题（#3281、#3350）描述的症状高度相似，疑似同一根因的不同设备表现。建议维护者将 #3350 重新开案，避免用户在不同硬件上重复报告。

---

## 6. 功能请求与路线图信号

| 需求 | Issue | 现状 | 路线图可能性 |
|------|-------|------|---------------|
| IRC 长消息作为单一消息识别 | [#3287](https://github.com/sipeed/picoclaw/issues/3287) | 无关联 PR | 中 — 评论活跃但 👍=0，共识度待提升 |
| OpenCode Go session header 支持 | [#3369](https://github.com/sipeed/picoclaw/issues/3369) | 无关联 PR | 中高 — 👍=2，且 PicoClaw 已具备 session ID 跟踪能力，技术改造成本可控 |
| 捷克语代码块标签补全 | [#3348](https://github.com/sipeed/picoclaw/pull/3348) | PR 已 stale 关闭 | 低 — 未合并 |

**路线图建议：** OpenCode Go header 改造具备较好的实现基础，可作为下一版本的 Provider 扩展点候选。

---

## 7. 用户反馈摘要

- **🔴 数据安全焦虑**：用户 @chentianxiong123 在 [#3351](https://github.com/sipeed/picoclaw/issues/3351) 中明确表达了对自动压缩机制破坏数据完整性的担忧，反映出长会话用户对"失忆不可逆"场景的强烈不信任感。
- **🔴 嵌入式场景体验差**：用户 @chentianxiong123 在 [#3350](https://github.com/sipeed/picoclaw/issues/3350) 中质疑"为什么输入框打字会受聊天记录长度影响"，直指前端渲染/状态管理层的架构问题，提示**聊天历史与输入框性能不应存在强耦合**。
- **🟡 IRC 用户期望语义完整性**：#3287 的 12 条评论表明用户希望 PicoClaw 能正确处理 IRCv3 协议特性，而非机械地将分段消息视为多条独立对话。
- **🟢 OpenCode Go 用户**：#3369 反映出生态集成诉求清晰，改造方向明确。

---

## 8. 待处理积压提醒

以下问题存在长期未响应或被不当关闭的风险，建议维护者优先关注：

| Issue | 创建日期 | 已开放 | 风险点 |
|-------|----------|--------|--------|
| [#3350](https://github.com/sipeed/picoclaw/issues/3350) | 2026-08-30 | 已 stale 关闭 | 与 #3281 同源，被关闭可能导致问题在嵌入式设备用户群持续发酵 |
| [#3351](https://github.com/sipeed/picoclaw/issues/3351) | 2026-08-30 | 已 stale 关闭 | 涉及数据持久性，建议出具官方说明或修复方案 |
| [#3287](https://github.com/sipeed/picoclaw/issues/3287) | 2026-07-22 | ~54 天 | 12 条评论仍无维护者实质响应 |
| [#3281](https://github.com/sipeed/picoclaw/issues/3281) | 2026-07-21 | ~55 天 | 高频反馈但无 fix PR 跟进 |

**总体建议：** 维护者可考虑在下一次发版前对 #3281、#3350 关联问题进行根因排查与统一修复，并就 #3351 的会话持久化策略向社区发布官方说明，避免信任损耗。

---

*本报告基于 GitHub 公开数据自动生成，旨在为 PicoClaw 维护者与社区贡献者提供决策参考。*

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

<think>The user wants me to generate a daily project report for IronClaw based on the GitHub data provided. Let me analyze the data:

**Overview:**
- Issues: 0 updates in past 24 hours
- PRs: 5 updates (4 open/pending, 1 merged/closed)
- New releases: 0

**Key observations:**
- All 5 PRs are Dependabot automated dependency updates
- 4 are still open, 1 was closed
- No new releases
- No new issues
- All activity is from @dependabot[bot]
- PR #8099 (newest, created 2026-09-13) - open - 25 updates
- PR #8097 - closed - 24 updates
- PR #8079 - open - 6 GitHub Actions updates
- PR #8078 - open - 2 tokio-ecosystem updates
- PR #7834 - open - 4 wasm updates (older, from 2026-08-23)

Now let me structure the report according to the requested sections:

1. 今日速览 - 3-5 sentences summary
2. 版本发布 - none, skip
3. 项目进展 - closed PR #8097
4. 社区热点 - PRs with most activity
5. Bug 与稳定性 - none
6. 功能请求与路线图信号 - none
7. 用户反馈摘要 - none
8. 待处理积压 - older open PRs

Since most of the report sections will have limited data (no issues, no releases, no bugs, no feature requests), I should be honest about the limited activity while still providing a useful analysis focused on the dependency management pattern.

Let me write this in Chinese as requested.</think>

# IronClaw 项目日报
**日期：2026-09-14** | 数据来源：[github.com/nearai/ironclaw](https://github.com/nearai/ironclaw)

---

## 1. 今日速览

IronClaw 项目在过去 24 小时内呈现**纯依赖维护型**的活跃状态——没有任何 Issue 提交、功能开发或 Bug 修复。所有 5 条 PR 均为 [@dependabot[bot]](https://github.com/dependabot) 自动发起的依赖升级请求，覆盖 Rust 生态、Rust WebAssembly 工具链、Tokio 异步生态以及 GitHub Actions 四大领域。整体活跃度**偏低且高度机械化**，缺乏社区驱动的实质性进展；维护者层面今日仅完成 1 次依赖合并动作。健康度评估：**中等偏下**，仓库在功能层面处于相对停滞期。

---

## 2. 版本发布

⚠️ 今日**无新版本发布**。Release 通道静默，建议关注者等待下一个集成发版周期。

---

## 3. 项目进展

今日唯一产生实质推进的是 1 条 PR 的关闭：

| PR | 状态 | 影响范围 |
|---|---|---|
| [#8097](https://github.com/nearai/ironclaw/pull/8097) | ✅ 已关闭（合并或替代） | 24 项 Rust 依赖批量升级 |

值得注意的是，PR #8097 在创建 3 天后即被关闭，而紧随其后的 [#8099](https://github.com/nearai/ironclaw/pull/8099)（25 项更新）仍处于 OPEN 状态。推测 #8099 是对 #8097 的**超集替代**——即在新一轮扫描中发现了更多可用升级后，维护者选择用更新的批次覆盖旧的批次。这是 Dependabot 批量更新模式下的常见工作流。

**项目整体向前迈进：微量**——净增约 25 项 Rust 生态依赖升级，但无功能性 commit。

---

## 4. 社区热点

⚠️ 今日**无活跃讨论的 Issue 或 PR**。所有 PR 均由 Dependabot 自动化生成，评论数均为 `undefined`（无人工评论），点赞数均为 0。社区互动处于**冰点**。

| 排名 | PR | 热度 | 链接 |
|---|---|---|---|
| — | 无 | 0 评论 / 0 反应 | — |

**信号分析**：缺少人类参与的项目日报往往意味着以下三种情况之一：
1. 项目处于稳定维护期，无重大问题需要社区反馈
2. 核心维护者精力分散或人手不足
3. 项目活跃度实际上在下降

建议读者结合 Star/Fork 趋势等外部指标综合判断。

---

## 5. Bug 与稳定性

✅ 今日**未报告任何 Bug、崩溃或回归问题**。

**当前可观察的稳定性信号**（基于 PR 内容推断）：
- [`uuid`](https://github.com/uuid-rs/uuid) 1.24.0 → 1.26.1：UUID 库连续 3 个版本升级，属正常维护迭代
- [`base64`](https://github.com/marshallpierce/rust-base64) 0.22.1 → 0.23.1：**跨 minor 版本**，存在潜在 API 破坏性变更风险，需关注 CI 报告
- `wasmtime` 等 WASM 工具链 4 项升级（[PR #7834](https://github.com/nearai/ironclaw/pull/7834)）：该 PR 已**滞留 22 天**未合并，是潜在的稳定性风险点

---

## 6. 功能请求与路线图信号

📭 今日**无新功能请求提交**，无法从中提取路线图信号。

**间接观察**：从所有 PR 的标题前缀均为 `chore(deps)` 可知，依赖治理在维护者优先级中占据主要精力，新功能开发目前**未被列入近期工作流**。

---

## 7. 用户反馈摘要**

📭 今日**无用户反馈可提炼**——既无 Issue 评论，也无 PR 讨论。鉴于 IronClaw 是一个面向 AI 智能体的开源框架，用户使用场景与痛点目前**完全空白**于公开渠道。

---

## 8. 待处理积压

重点提醒维护者关注的**长期未处理项**：

| 优先级 | PR | 滞留天数 | 风险标签 | 链接 |
|---|---|---|---|---|
| 🔴 高 | [#7834](https://github.com/nearai/ironclaw/pull/7834) | **22 天** | size: L, risk: medium | wasmtime/wit-parser 等 4 项 WASM 工具链升级 |
|  中 | [#8078](https://github.com/nearai/ironclaw/pull/8078) | 8 天 | — | tower-http 0.7.1、tokio-tungstenite 升级 |
| 🟡 中 | [#8079](https://github.com/nearai/ironclaw/pull/8079) | 8 天 | — | GitHub Actions 6 项升级（涉及 `actions/setup-node` 4→7 大版本跃迁） |
|  低 | [#8099](https://github.com/nearai/ironclaw/pull/8099) | 1 天 | — | 25 项 Rust 依赖批量更新（最新提交） |

**特别关注**：
- **PR #7834** 已开放 22 天仍未合并，且被标记为 `size: L / risk: medium`，涉及 WASM 核心运行时，可能影响 IronClaw 的沙箱/插件执行能力，建议优先 review。
- **PR #8079** 中的 `actions/setup-node` 从 `4.0.2` 跃迁至 `7.0.2`（**跨 3 个 major 版本**），属高风险升级，可能引入 CI 流水线回归。

---

## 📊 健康度仪表盘

| 指标 | 数值 | 评估 |
|---|---|---|
| 日活跃 PR | 5 | 🟡 偏低（全部为自动化） |
| 日活跃 Issue | 0 | 🔴 缺失 |
| 社区互动 | 0 评论 | 🔴 缺失 |
| 新版本发布 | 0 | 🔴 缺失 |
| 长期积压 PR | 1（>14天） | 🟡 需关注 |
| Bug 报告 | 0 | ✅ 无新增问题 |

**总结**：IronClaw 当前处于**纯依赖维护期**，仓库活跃度由自动化工具驱动。建议维护者在推进批量依赖合并的同时，**主动发起 RFC 或社区调研**以引导用户参与，否则项目可能在"无 Bug 即无信号"的表象下逐渐失温。

---
*报告生成于 2026-09-14 · 数据窗口：过去 24 小时*

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

<think>
Let me analyze the GitHub data for LobsterAI (github.com/netease-youdao/LobsterAI) for the daily report on 2026-09-14.

Key observations from the data:
1. 4 Issues updated in the past 24 hours (all open, 0 closed)
2. 4 PRs updated in the past 24 hours (all open/pending, 0 merged/closed)
3. 0 new releases

Looking at the Issues:
- #2660: A new proposal by an external founder (Vivek Gupta, CEO of MemCode) for "durable user and workspace memory for LobsterAI" - this is a feature proposal from outside the project
- #1041: Security issue about SSRF attack via api:fetch/stream IPC and arbitrary file read - flagged as stale
- #1046: Question about model configuration context window limits (200K vs 1M for Qwen3.5-Plus) - flagged as stale
- #1047: Bug about cleared skills still showing after switching agents - flagged as stale

Looking at the PRs:
- #1038: Fix for ReadableStream reader leak in stream responses - stale
- #1042: Security fix for the SSRF and file read vulnerabilities (related to #1041) - stale
- #1044: Fix for Windows NSIS installer root drive path - stale
- #1045: Feature for unsaved changes warning in Agent settings panel - stale

All the issues and PRs from #1041-#1047 (except #2660) are flagged as stale, meaning they haven't been updated for a long time (since March 2026 - about 6 months ago). The "更新" date is 2026-09-13, but they were created in March 2026.

Wait, let me re-read. The data says "更新: 2026-09-13" for all of them. So they were all updated yesterday. But the [stale] tag suggests they are considered stale by the bot. This is a bit contradictory - the bot might have just applied the stale label without any actual activity, or someone might have reactivated them.

Actually, looking more carefully - the data structure shows "更新" (updated) date. The [stale] tag is likely applied by GitHub's stale bot. So these were probably bumped by the bot or a quick comment yesterday.

For the report:
- No releases
- No merged/closed PRs - so no "项目进展" in terms of merged code
- 1 new feature proposal (#2660) from external party
- Several old stale issues that resurfaced
- 4 stale PRs that need review

This suggests the project has low maintenance activity. Let me structure the report accordingly.

Let me think about the activity assessment:
- 4 issues updated, 0 closed
- 4 PRs updated, 0 merged
- 0 releases
- All but 1 issue are stale (created ~6 months ago)

The activity level is low. The project seems to have low maintenance velocity. Most of the items are 6-month-old stale issues that got bumped, not new work.

Let me write the report in Chinese as requested.
</think>
# LobsterAI 项目日报 | 2026-09-14

---

## 1. 今日速览

LobsterAI 仓库今日整体活跃度**偏低**。过去 24 小时内共有 4 条 Issue 与 4 条 PR 出现更新，但**无任何 Issue 关闭、无任何 PR 合并、亦无新版本发布**。值得关注的是，今日唯一一条"新"讨论是外部第三方（MemCode CEO Vivek Gupta）提交的**功能提案 Issue #2660**，而其余 7 条均带有 `[stale]` 标签，是约 6 个月前（2026-03-30）创建的历史 Issue/PR 被机器人或评论触发的"复活"更新，**说明维护者近期对仓库的响应和合并动作较少**。社区健康度指标（响应速度、合并节奏）显示项目目前处于维护低谷期。

---

## 2. 版本发布

**无新版本发布。** 过去 24 小时未检测到任何 Release 标签或发布活动。

---

## 3. 项目进展

**今日无任何 PR 被合并或关闭，代码层面无实质推进。** 已开放的 4 个 PR 均处于"待合并"状态，仓库实际推进量为零。

| 指标 | 数量 |
|---|---|
| 新合并 PR | 0 |
| 新关闭 PR | 0 |
| 待合并 PR | 4（均 [stale]） |

> ⚠️ 维护者提示：当前有 4 个待审 PR 自 2026-03 起已搁置约 5.5 个月，建议优先处理安全类与稳定性类补丁。

---

## 4. 社区热点

**今日唯一具有实质讨论价值的条目是 Issue #2660**（评论 1 条），其余条目虽被标记为"更新"，但属历史 stale 唤醒，无新评论流入。

### 🔥 Issue #2660 — Proposal: durable user and workspace memory for LobsterAI
- 作者：@memcodeoff（Vivek Gupta, MemCode 创始人 & CEO）
- 链接：https://github.com/netease-youdao/LobsterAI/issues/2660
- 创建时间：2026-09-13
- 评论：1 | 👍：0

**诉求分析：** LobsterAI 已覆盖研究、文档、PPT、视频、Web 等多模态任务场景，使用者必然有"跨会话保留偏好、常用 workspace、历史资料来源、未完成决策"的需求。该提案实质是希望引入**持久化的用户/工作区记忆层**（durable user & workspace memory），让 AI Agent 具备跨会话上下文连续性。这是当前 AI Agent 领域（如 ChatGPT Memory、Cursor Rules、Claude Projects）的共性需求，反映出**专业用户对"工作连续性"的强烈痛点**。提案来自外部公司创始人，建议维护者评估其商业合作价值与产品契合度。

---

## 5. Bug 与稳定性

按严重程度排序：

### 🚨 P0 — 严重安全漏洞（已有 fix PR 待合并）
- **Issue #1041**：[stale] security: api:fetch/stream IPC 可被用于 SSRF 攻击，readFileAsDataUrl 可读取任意本地文件
  - 链接：https://github.com/netease-youdao/LobsterAI/issues/1041
  - 漏洞 1：`api:fetch` / `api:stream` 两个 IPC handler 对传入 URL 无任何校验，可被用于探测内网、攻击 localhost 服务、访问云 metadata endpoint（169.254.169.254）窃取 IAM 凭证
  - 漏洞 2：`dialog:readFileAsDataUrl` 无路径边界检查，可读取 `/etc/passwd`、`~/.ssh/` 等任意本地文件
- **PR #1042**：[stale] fix(security): 对应 #1041 的修复方案
  - 链接：https://github.com/netease-youdao/LobsterAI/pull/1042
  - 状态：修复方案已就绪但**未合并，等待维护者 review**

### 🟠 P1 — 流式响应资源泄漏（已有 fix PR 待合并）
- **PR #1038**：[stale] fix(proxy): 确保流式响应的 ReadableStream reader 在异常时也能释放
  - 链接：https://github.com/netease-youdao/LobsterAI/pull/1038
  - 问题：`handleResponsesStreamResponse` 与 `handleChatCompletionsStreamResponse` 中 `reader.cancel()` 仅在收到 `[DONE]` 标记时执行，**网络中断、超时、服务端提前断连、API 报错、用户点停止**等场景下 reader 永久泄漏，底层 TCP socket 与内存无法回收
  - 状态：已有 fix，**未合并**

### 🟡 P2 — Agent 技能缓存未刷新
- **Issue #1047**：[stale] 已清除的技能，切换 Agent 之后发现还存在
  - 链接：https://github.com/netease-youdao/LobsterAI/issues/1047
  - 复现：预设 Agent 或自定义 Agent 中清除技能后，切换到其他 Agent 再切回，技能列表仍保留
  - 状态：**无对应 fix PR**

### 🟡 P2 — 模型上下文窗口配置受限
- **Issue #1046**：[stale] 模型配置上下文窗口限制问题
  - 链接：https://github.com/netease-youdao/LobsterAI/issues/1046
  - 描述：Qwen3.5-Plus 官方支持 1M 上下文，但 LobsterAI 限制为 200K，用户无法自定义
  - 状态：**无对应 fix PR，本质是文档/配置开放性问题**

### 🟢 P3 — 安装路径兼容
- **PR #1044**：[stale] fix(installer): normalize root drive install path
  - 链接：https://github.com/netease-youdao/LobsterAI/pull/1044
  - 问题：Windows NSIS 安装器在用户选择盘符根目录（如 `D:\`）时路径处理异常
  - 状态：已有 fix，未合并，**未运行测试**

---

## 6. 功能请求与路线图信号

### 🆕 新需求：跨会话持久化记忆（Issue #2660）
如上文社区热点所述，这是来自外部专业用户的提案，与当前 Agent 行业趋势高度一致。建议维护者评估是否纳入下一版本路线图。

### 🆕 已存在但待合并的 UX 改进
- **PR #1045**：[stale] feat(renderer): Agent 设置面板切换时增加未保存更改提示
  - 链接：https://github.com/netease-youdao/LobsterAI/pull/1045
  - 用户场景：在 Agent 设置面板修改信息后未保存即切换，会丢失改动。该 PR 提供了未保存提示的优化实现（附视频 demo），可直接合入提升 UX。

**综合判断**：仓库已积累 4 个可立即合并的成熟 PR（#1038、#1042、#1044、#1045），无需额外开发工作，**下一版本只需一次 review + merge 即可同时推进稳定性、安全性与 UX 三个维度**。

---

## 7. 用户反馈摘要

由于今日评论数极少（仅 #2660 有 1 条新评论），用户反馈主要从历史 Issue/PR 内容中提炼：

| 痛点 | 证据 |
|---|---|
| **数据安全焦虑** | Issue #1041 用户主动报告 SSRF + 任意文件读取漏洞，说明高级用户对本地 AI 工具的权限边界极为敏感 |
| **跨会话工作流断裂** | Issue #2660 提案明确指出"users' preferences, recurring workspaces, prior sources, and unfinished decisions should carry across sessions" |
| **Agent 配置丢失** | Issue #1047 反映 Agent 技能状态未在切换间正确同步 |
| **模型能力被锁定** | Issue #1046 用户明确希望"是否能将上下文窗口从 200K 提升到符合 Qwen3.5-Plus 模型的 1M"，体现对**模型原生能力释放**的期待 |
| **沉默的大多数** | 4 条 stale Issue/PR 自 2026-03 起无维护者响应，**说明用户长期处于"提交即等待"状态，无有效反馈闭环** |

---

## 8. 待处理积压 ⚠️

**以下为超过 5 个月（170+ 天）未获维护者响应的关键条目，建议优先 review：**

| 编号 | 类型 | 严重度 | 标题 | 链接 |
|---|---|---|---|---|
| #1041 | Issue | 🚨 P0 | SSRF + 任意文件读取安全漏洞 | https://github.com/netease-youdao/LobsterAI/issues/1041 |
| #1042 | PR | 🚨 P0 | 安全修复方案（对应 #1041） | https://github.com/netease-youdao/LobsterAI/pull/1042 |
| #1038 | PR | 🟠 P1 | 流式响应 reader 泄漏修复 | https://github.com/netease-youdao/LobsterAI/pull/1038 |
| #1044 | PR | 🟢 P3 | Windows 安装器根盘符路径修复 | https://github.com/netease-youdao/LobsterAI/pull/1044 |
| #1045 | PR | 🟡 UX | Agent 设置未保存提示 | https://github.com/netease-youdao/LobsterAI/pull/1045 |
| #1046 | Issue | 🟡 文档/配置 | 上下文窗口限制文档缺失 | https://github.com/netease-youdao/LobsterAI/issues/1046 |
| #1047 | Issue | 🟡 Bug | 清除技能后切换 Agent 仍残留 | https://github.com/netease-youdao/LobsterAI/issues/1047 |

**给维护者的建议：**
1. **立即 review 并合并 #1042** — 这是仓库当前最严重的 P0 安全风险，且修复方案已就绪
2. **同步合并 #1038** — 修复 proxy 层的资源泄漏，提升长会话稳定性
3. **为 #1041、#1046、#1047 添加官方回应标签**（如 `help wanted` / `confirmed` / `wontfix`），打破当前 170+ 天的"沉默积压"状态
4. **评估 Issue #2660** — 来自外部创始人的产品级提案，**具有潜在合作价值**，建议主动@作者或转入 discussion

---

> 📊 **项目健康度评分（本期）**
> | 维度 | 评分 | 说明 |
> |---|---|---|
> | 活跃度 | ⭐⭐☆☆☆ | 0 合并 / 0 关闭 / 0 发布 |
> | 安全性响应 | ⭐⭐☆☆☆ | P0 漏洞 fix 等待 5.5 个月未合并 |
> | 社区响应 | ⭐⭐☆☆☆ | 多条历史 Issue 长期无回复 |
> | 待合并 PR 成熟度 | ⭐⭐⭐⭐☆ | 4 个 PR 均可直接合入 |
> | **综合** | **⭐⭐☆☆☆** | **存量 PR 充足，但维护节奏停滞** |

</details>

<details>
<summary><strong>QwenPaw</strong> — <a href="https://github.com/agentscope-ai/QwenPaw">agentscope-ai/QwenPaw</a></summary>

<think>Let me analyze the GitHub data for QwenPaw project to generate a comprehensive daily report for 2026-09-14.

Let me organize the data first:

**Issues Summary:**
- Total: 22 issues
- New/Active: 21
- Closed: 1

**PR Summary:**
- Total: 26 PRs
- Pending: 23
- Merged/Closed: 3

**Releases:** None

**Closed Issues:**
- #3429 [CLOSED] Pre-install himalaya and other commonly used CLI tools in Docker image (created 2026-04-15, closed 2026-09-13)

**Closed/Merged PRs:**
- #7675 [CLOSED] docs(mcp): fix wrong agent.json field name in Chinese MCP page
- #7706 [CLOSED] docs(multi-agent): drop nonexistent `qwenpaw providers` command
- One more closed PR not explicitly mentioned

**Most Active Issues (by comments):**
1. #7571 - 5 comments - 总是记不住，还是会遗忘 (memory/learning issues)
2. #7678 - 4 comments - spawn subAgent bug
3. #7708 - 4 comments - 设置好的大模型丢失 (configured model lost)
4. #7724 - 4 comments - 会话丢失 (session lost)
5. #7728 - 2 comments - server/discover HTTP 500 issue
6. #7722 - 2 comments - Memory exhaustion
7. #7716 - 2 comments - MCP can't connect after upgrade
8. #7709 - 2 comments - 定时任务经常无输出

**Key Bugs Identified:**
1. **#7571** - Agent forgetfulness, plugin development issues
2. **#7678** - subAgent spawn failures causing timeout
3. **#7708** - Model settings being lost
4. **#7724** - Session loss after plugin redeployment
5. **#7728** - Java MCP SDK server/discover HTTP 500 error (has fix PR #7729)
6. **#7722** - Memory exhaustion - three compounding paths
7. **#7716** - MCP can't connect since 2.2.x upgrade (has fix PR #7735)
8. **#7709** - Scheduled tasks without output
9. **#7745** - Agent switch deletes last session
10. **#7743** - Hub mode file preview 401 error
11. **#7721** - Workspace file browser freezes server (has fix PR #7725)
12. **#7727** - Out-of-workspace write bypass with kimi-code
13. **#7726** - ACP trusted mode silent fallback (has fix PR #7732)
14. **#7705** - Agent workspace directory issues
15. **#7693** - Multi-image generation interrupted by user approval
16. **#7730** - Plugin catalog read failures offline fallback

**Feature Requests:**
- #7739 - 历史对话移至右侧 (move history to right side)
- #7744 - Web console file auto-collapse issue
- #7707 - Android browser support line breaks
- #7740 - Hub mode admin reset password
- #7733 - Agent-autonomous context management

**Important PRs:**
1. **#7742** - Creator 1.3.0 (OpenCode Zen/Go, parallel asset understanding, etc.)
2. **#7636** - PDF document blocks strip for OpenAI
3. **#7690** - Mailbox fixes
4. **#7734** - pt-BR i18n completion
5. **#7738** - Filter unrecognized kwargs for OpenAI
6. **#7725** - Replace blocking SSE watcher
7. **#7632** - Return feedback for unknown slash commands
8. **#7684** - Report bot-challenge pages
9. **#7736** - DeepSeek V4 Flash capabilities
10. **#7732** - ACP permission options by protocol kind
11. **#7741** - Console theme customization
12. **#7729** - Fix Java jsonRpcError envelope
13. **#7723** - Emit error event when stream fails
14. **#7735** - Preserve decoded HTTP error responses
15. **#7719** - Separate model for ReMeLight memory writing
16. **#7718** - Telegram approval-card markdown
17. **#7702** - Bot-manager plugin
18. **#7696** - Hub local admin bootstrap

Now let me write the report in Chinese as requested.

Let me note that the project name appears to be "QwenPaw" but with the GitHub link being `agentscope-ai/QwenPaw`. The data suggests this is an AI agent/personal AI assistant open source project.

Let me structure this properly:

1. **今日速览** - Overall activity assessment
2. **版本发布** - None
3. **项目进展** - Closed PRs
4. **社区热点** - Most commented issues
5. **Bug 与稳定性** - Bug reports categorized
6. **功能请求与路线图信号** - Feature requests
7. **用户反馈摘要** - User pain points
8. **待处理积压** - Stale issues/PRs

Let me draft this carefully with all relevant links.</think>

# QwenPaw 项目动态日报

**报告日期：2026-09-14**
**项目地址：** github.com/agentscope-ai/QwenPaw

---

## 1. 今日速览

QwenPaw 在过去 24 小时内整体维持中等偏高活跃度：**Issues 22 条**（21 新开/活跃、1 关闭），**Pull Requests 26 条**（23 待合并、3 已关闭），**无新版本发布**。从议题分布看，社区当前聚焦于 v2.2.0/2.2.1 升级后的稳定性问题——尤其是 MCP 连接、会话/模型配置丢失、内存与工作区等模块，多个关键 Bug 已伴随修复 PR 同步进入评审（如 #7721→#7725、#7716→#7735、#7728→#7729），呈现"问题暴露—修复跟进"双轨并行的健康节奏。同时，Creator 插件 1.3.0 大版本合入请求（#7742）、控制台主题定制（#7741）、Hub 本地管理员引导（#7696）等功能性 PR 显示出项目仍在积极向多渠道/多用户体验方向演进。

---

## 2. 版本发布

⚠️ **今日无新版本发布。**

当前社区主要聚焦的版本为 **v2.2.0 / v2.2.1 / v2.2.1-beta.2**，多个 Issue 报告了 2.2.x 升级后引入的回归问题（见第 5 节）。建议维护者在合并相关修复 PR 后尽快发布 **v2.2.2 补丁版本**。

---

## 3. 项目进展

今日共 **3 个 PR 关闭**（均为文档修正类），功能层面暂无合入主干。

| PR | 状态 | 说明 |
|---|---|---|
| [#7675](https://github.com/agentscope-ai/QwenPaw/pull/7675) | 🔒 已关闭 | 文档修正：更正中文 MCP 页面中错误的 `agent.json` 字段名（`tools.builtins` → `tools.builtin_tools`） |
| [#7706](https://github.com/agentscope-ai/QwenPaw/pull/7706) | 🔒 已关闭 | 文档修正：从 multi-agent 文档中移除不存在的 `qwenpaw providers` CLI 命令 |
| #3429 ([Issue](https://github.com/agentscope-ai/QwenPaw/issues/3429)) | ✅ 已关闭 | 长期 Feature 请求（4 月创建）：在 Docker 镜像中预装 himalaya 等常用 CLI 工具——今日关闭，意味着该诉求或被纳入路线图，或被认定无需处理 |

**整体推进评估：** 当日主干推进以"小而精确的文档校正"为主，未涉及核心功能合入。但 PR 池中已积压多个高价值修复（见第 5 节），预计近 1–2 个工作日内将出现合入高峰，伴随 v2.2.2 候选版本的形成。

---

## 4. 社区热点

按评论数排序，今日最受关注的议题与 PR：

| 排名 | 编号 | 类型 | 评论数 | 主题 | 链接 |
|---|---|---|---|---|---|
| 1 | #7571 | Question | 5 | Agent 记忆/遗忘问题——开发路径混乱与指令遵守不一致 | [链接](https://github.com/agentscope-ai/QwenPaw/issues/7571) |
| 2 | #7678 | Bug | 4 | spawn subAgent 全量超时失败 | [链接](https://github.com/agentscope-ai/QwenPaw/issues/7678) |
| 2 | #7708 | Bug | 4 | 大模型配置无故丢失 | [链接](https://github.com/agentscope-ai/QwenPaw/issues/7708) |
| 2 | #7724 | Bug | 4 | 插件重部署后会话丢失 | [链接](https://github.com/agentscope-ai/QwenPaw/issues/7724) |

**热点背后的诉求分析：**

- **#7708 与 #7724 呈明显关联**：同一用户报告"大模型配置丢失"问题在升级 2.2.x 后反复出现，并直接导致会话记录丢失。两条议题累计 8 条评论，指向**v2.2.x 的状态持久化层可能存在回归**——这是一个对核心用户体验影响显著的稳定性问题，应作为 v2.2.2 优先修复目标。
- **#7571（遗忘问题）**虽标为 Question，实则反映了**插件开发者在多路径场景下对 Agent 行为可控性的强诉求**——这不是简单的 Bug，而是 Agent "上下文持久化"机制设计层的问题。
- **#7678（subAgent 全失败）**作者已完成自诊断并提供日志，但官方尚未确认根因，问题严重程度应被定义为 P0。

---

## 5. Bug 与稳定性

按严重程度排序，并标注是否已有对应修复 PR：

### 🔴 P0 - 严重（影响核心功能/数据完整性）

| Issue | 简述 | 修复 PR |
|---|---|---|
| [#7724](https://github.com/agentscope-ai/QwenPaw/issues/7724) | 插件重部署后会话丢失 + 模型配置同时消失 | ❌ 无 |
| [#7708](https://github.com/agentscope-ai/QwenPaw/issues/7708) | 大模型配置无故丢失（多次复现，无特殊触发） | ❌ 无 |
| [#7678](https://github.com/agentscope-ai/QwenPaw/issues/7678) | spawn subAgent 100% 超时失败，timeout 调长无效 | ❌ 无 |

### 🟠 P1 - 高（功能不可用/系统级错误）

| Issue | 简述 | 修复 PR |
|---|---|---|
| [#7722](https://github.com/agentscope-ai/QwenPaw/issues/7722) | 容器内存以 ~1MB/s 速度耗尽，3 条独立路径叠加 | ❌ 无（已提供复现） |
| [#7721](https://github.com/agentscope-ai/QwenPaw/issues/7721) | Workspace 文件浏览器冻结整个服务器（SSE `watchfiles.awatch` 阻塞事件循环） | ✅ [#7725](https://github.com/agentscope-ai/QwenPaw/pull/7725) |
| [#7716](https://github.com/agentscope-ai/QwenPaw/issues/7716) | 升级 2.2.x 后 MCP 无法连接注册（2.1.1b3 正常） | ✅ [#7735](https://github.com/agentscope-ai/QwenPaw/pull/7735) |
| [#7728](https://github.com/agentscope-ai/QwenPaw/issues/7728) | Java MCP SDK 服务器触发 HTTP 500 时 Driver 构建失败 | ✅ [#7729](https://github.com/agentscope-ai/QwenPaw/pull/7729) |
| [#7743](https://github.com/agentscope-ai/QwenPaw/issues/7743) | Hub 模式下文件预览稳定返回 401 | ❌ 无 |
| [#7745](https://github.com/agentscope-ai/QwenPaw/issues/7745) | 切换 Agent 删除该 Agent 的最后会话（2.2.1-beta.2） | ❌ 无 |

### 🟡 P2 - 中（功能降级/边界场景）

| Issue | 简述 | 修复 PR |
|---|---|---|
| [#7727](https://github.com/agentscope-ai/QwenPaw/issues/7727) | kimi-code Write 工具绕过工作区外写入硬阻断 | ❌ 无 |
| [#7726](https://github.com/agentscope-ai/QwenPaw/issues/7726) | ACP `trusted: true` 静默回退到交互式提示 | ✅ [#7732](https://github.com/agentscope-ai/QwenPaw/pull/7732) |
| [#7730](https://github.com/agentscope-ai/QwenPaw/issues/7730) | 插件目录离线 fallback 在连接重置时未生效 | ❌ 无 |
| [#7693](https://github.com/agentscope-ai/QwenPaw/issues/7693) | Creator 多图生成期间用户审核通过导致任务永久卡 RUNNING | ❌ 无 |
| [#7705](https://github.com/agentscope-ai/QwenPaw/issues/7705) | Agent 工作目录设置被旧路径覆盖 | ❌ 无 |
| [#7709](https://github.com/agentscope-ai/QwenPaw/issues/7709) | 定时任务结果无输出/折叠到 thinking | ❌ 无 |

**修复覆盖率：** 6 个 Bug 已有对应修复 PR 进入评审，但 P0 级别的 3 个问题（#7724、#7708、#7678）目前**均无 PR 跟进**，需提请维护者重点关注。

---

## 6. 功能请求与路线图信号

| Issue | 主题 | 关联 PR | 优先级信号 |
|---|---|---|---|
| [#7741](https://github.com/agentscope-ai/QwenPaw/pull/7741) | 控制台主题色定制（含 6 套内置配色 + 实时预览） | ✅ 自身即 PR | 极高（已提交且关闭 #7406） |
| [#7696](https://github.com/agentscope-ai/QwenPaw/pull/7696) | Hub 本地管理员引导（`qwenpaw hub --init-admin`） | ✅ 自身即 PR | 高（解决远程服务器运维痛点） |
| [#7702](https://github.com/agentscope-ai/QwenPaw/pull/7702) | bot-manager 统一多渠道机器人管理插件 | ✅ 自身即 PR | 高（合并碎片化渠道管理） |
| [#7742](https://github.com/agentscope-ai/QwenPaw/pull/7742) | Creator 1.3.0（OpenCode Zen/Go 接入、并行资产理解、风格锚版本化、字幕/叠层时间线修正、多剧集硬化） | ✅ 自身即 PR | 极高（完整插件版本跃迁） |
| [#7719](https://github.com/agentscope-ai/QwenPaw/pull/7719) | ReMeLight 记忆写入可独立配置模型（降低主模型成本） | ✅ 自身即 PR | 中（成本优化诉求） |
| [#7736](https://github.com/agentscope-ai/QwenPaw/pull/7736) | DeepSeek V4 Flash 能力声明（图像输入 / 1M 上下文 / 推理强度） | ✅ 自身即 PR | 中（生态扩展） |
| [#7733](https://github.com/agentscope-ai/QwenPaw/issues/7733) | Agent 自主上下文驱逐与交接 | ❌ 无 | 高（设计层面长程任务诉求） |
| [#7739](https://github.com/agentscope-ai/QwenPaw/issues/7739) | 历史对话移至右侧（适配 14 寸笔记本） | ❌ 无 | 中 |
| [#7740](https://github.com/agentscope-ai/QwenPaw/issues/7740) | Hub 管理员为用户重置密码 | ❌ 无 | 中（基础运维） |
| [#7707](https://github.com/agentscope-ai/QwenPaw/issues/7707) | 安卓浏览器会话框支持换行（不触发提交） | ❌ 无 | 中 |
| [#7744](https://github.com/agentscope-ai/QwenPaw/issues/7744) | Web 控台发送文件后自动折叠误导 | ❌ 无 | 中（与 #7743 关联） |

**路线图预判：** Creator 1.3.0（#7742）与控制台主题定制（#7741）因 PR 已成型且工程量大，最有可能进入下一版本（v2.3.0 或 v2.2.x 扩展）。Hub 运维类诉求（#7696、#7740）呈现集中趋势，提示项目 Hub 化部署逐步成为重要使用场景。

---

## 7. 用户反馈摘要

**核心痛点（按出现频次）：**

1. **🔁 v2.2.x 升级后状态丢失反复发生** —— 用户 #7708 与 #7724 实为同一用户（@xiaohushi512），其报告："用着用着就报错说没设置大模型"+"会话丢失"+"插件路径混乱"+"spawn subAgent 全失败"密集出现于同一会话窗口，且**官方未给出任何响应**。该用户累计提交 6 条 Issue（#7571、#7678、#7705、#7708、#7709、#7724），呈现**明显的"被忽视升级摩擦"信号**。

2. **🤖 Agent 的"可控性 / 可预期性"被质疑** —— #7571 中用户描述"反复强调还是会记不住"，反映 Agent 在多路径开发场景下的指令持久性不足；#7722 中"doom-loop gate 绕过"进一步暴露 Agent 自主循环的资源约束薄弱。

3. **📱 移动端体验仍有明显缺口** —— #7707（安卓浏览器换行）与 #7739（小屏布局）说明 Web 端在非桌面场景下的可用性仍未完善。

4. **🔌 升级到 2.2.x 后 MCP 生态兼容性下降** —— #7716、#7728 两个 Issue 直指 Java MCP SDK 与 HTTP 错误响应处理回归，社区生态正期待补丁。

5. **⚙

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/NousResearch/hermes-agent">NousResearch/hermes-agent</a></summary>

<think>The user wants me to generate a daily project report for Hermes Agent based on GitHub data. Let me analyze the data carefully and structure it according to the 8 required sections.

Let me first analyze the key metrics:
- 50 Issues updated (38 new/active, 12 closed)
- 50 PRs updated (22 pending merge, 28 merged/closed)
- 0 new releases

Key themes I notice:
1. **state.db WAL issues** - Multiple critical P1 bugs (#109966, #110497, #110544, #109758) - this is a major hot issue
2. **platform enabled:false bypass** - Multiple PRs all fixing the same #73289 issue (#55447, #73376, #73303, #73724) - shows duplicate effort
3. **Telegram issues** - Several related to text_link entities (#31071, #31075, #74769), image compression (#74893), schema migration (#103363)
4. **Skills management** - Issues with skill_view in profiles (#110524), skills install truncation (#110526)
5. **Gateway/Memory issues** - cgroup memory measurement (#110549, #110557)
6. **Kanban features** - Blocked task escalation (#110528, #110547), specify preserving card bodies (#110558, #110550)

The state.db WAL issue appears to be a critical regression that has spawned multiple issues and a salvage PR (#110544). This is the most concerning pattern.

Let me structure this report professionally with the 8 sections requested.</think>

# Hermes Agent 项目日报

**日期：2026-09-14**
**数据来源：[NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent)**

---

## 1. 今日速览

Hermes Agent 今日活跃度处于**高位运行**状态：24 小时内 Issues 与 PRs 各有 50 条更新，新开/活跃 Issue 占 76%（38/50），PR 关闭率 56%（28/50），反映出社区高强度的问题反馈与维护者积极的合并节奏。**最值得关注的信号是 `state.db` WAL 生成句柄泄漏问题已演变为 P1 级紧急事件**，至少衍生出 3 条相关 Issue 和 1 条修复 PR（[#110544](https://github.com/NousResearch/hermes-agent/pull/110544)），影响 Desktop、Gateway、TUI 全平台 chat 功能。`platforms.*.enabled: false` 被环境变量绕过这一 P2 议题在过去 24 小时被 4 条独立 PR 同时提交并陆续合并（#55447、#73376、#73303、#73724），显示出社区贡献者高度集中但略有重复劳动的协作模式。

---

## 2. 版本发布

**今日无新版本发布。** 根据 PR [#110544](https://github.com/NousResearch/hermes-agent/pull/110544) 的描述，0.21.2 更新（[#109727](https://github.com/NousResearch/hermes-agent/pull/109727)）疑似引入了 `state.db` WAL 句柄管理的回归问题，导致 Desktop Chat 在升级后死亡，社区正在积极准备修复补丁。

---

## 3. 项目进展

今日合并/关闭的 28 条 PR 中，多项重要修复落地：

- **平台禁用配置生效**：[#55447](https://github.com/NousResearch/hermes-agent/pull/55447)、[#73376](https://github.com/NousResearch/hermes-agent/pull/73376)、[#73303](https://github.com/NousResearch/hermes-agent/pull/73303)、[#73724](https://github.com/NousResearch/hermes-agent/pull/73724) 同时关闭 [#73289](https://github.com/NousResearch/hermes-agent/issues/73289)，修复了 `platforms.*.enabled: false` 被 ~14-20 个平台的环境变量 bootstrap 无条件覆盖的问题，恢复了操作员对平台的显式控制权。
- **Telegram 文本链接解析**：[#31075](https://github.com/NousResearch/hermes-agent/pull/31075) 与 [#74769](https://github.com/NousResearch/hermes-agent/pull/74769) 合并，扩展入站 `text_link` 实体，Agent 现在可访问隐藏 URL，并保留 UTF-16 偏移量。
- **Telegram 大图预压缩**：[#74893](https://github.com/NousResearch/hermes-agent/pull/74893) 合并，在 HTTP 代理环境下将大 PNG 预压缩为 JPEG，避免 `media_write_timeout` 丢图。
- **Discord 上传预检**：[#67040](https://github.com/NousResearch/hermes-agent/pull/67040) 合并，修复 [#50846](https://github.com/NousResearch/hermes-agent/issues/50846)，在 `channel.send()` 失败前预检附件大小并优雅回退。
- **进程注册表资源释放**：[#75162](https://github.com/NousResearch/hermes-agent/pull/75162) 合并，session 结束时释放 Popen/PTY 句柄，缓解 FD 耗尽。
- **`gh` CLI 兼容性**：[#95162](https://github.com/NousResearch/hermes-agent/pull/95162) 合并，适配 gh 2.98+ 移除 `--json authenticated` 字段的破坏性变更。
- **代码格式化自动修复**：[#110556](https://github.com/NousResearch/hermes-agent/pull/110556) 由 bot 自动合并。

**整体评估**：项目持续推进稳定性修复与跨平台兼容性改进，PR 关闭速度健康。

---

## 4. 社区热点

**评论数 Top 3 Issues**：

1. **[#109966](https://github.com/NousResearch/hermes-agent/issues/109966)（8 条评论）** — `state.db` WAL 生成句柄在 fleet 重启后被长生命周期进程持有，新 opener 数小时无法打开。**P1，重复标记**。这是今日最受关注的稳定性灾难级问题。

2. **[#59293](https://github.com/NousResearch/hermes-agent/issues/59293)（7 条评论）** — `hermes config set` 绕过系统配置写保护，CLI 可非门控地禁用审批层。**P2，安全问题**，需决策。

3. **[#60789](https://github.com/NousResearch/hermes-agent/issues/60789)（7 条评论）** — `session_search(profile=...)` 静默忽略 profile 参数，搜索当前 profile 的 DB。**P2，等待报告者反馈**。

**反应数最多的 Issue**：[#85106](https://github.com/NousResearch/hermes-agent/issues/85106)（👍1）— RFC：统一检索路径下的一等引用注释。社区对规范化引文输出契约有清晰诉求。

**热门 PR**：[#110544](https://github.com/NousResearch/hermes-agent/pull/110544) 作为 [#109966](https://github.com/NousResearch/hermes-agent/issues/109966) 的"salvage"分支，被 Teknium 直接标记为 P1 紧急修复，预期将成为下一补丁版本的核心。

**诉求分析**：社区当前最强烈的需求集中在 **(a) 数据持久层 WAL/锁语义的正确性** 和 **(b) 平台/网关配置层的显式覆盖语义**——这两类都属于"系统边界契约被静默违反"型问题，反映出 Hermes 在多进程、多平台场景下的鲁棒性亟需加强。

---

## 5. Bug 与稳定性

按严重程度排列：

### 🔴 P1（紧急）

| Issue | 描述 | 已有 Fix PR |
|---|---|---|
| [#109966](https://github.com/NousResearch/hermes-agent/issues/109966) | `state.db` WAL 生成句柄在 fleet 重启后被长生命周期进程持有，阻塞所有新 opener 数小时 | [#110544](https://github.com/NousResearch/hermes-agent/pull/110544)（待合并） |
| [#110497](https://github.com/NousResearch/hermes-agent/issues/110497) | 任意短生命周期进程打开关闭 `state.db` 会解链 `-wal`/`-shm`，永久卡死 Gateway | 复用 [#110544](https://github.com/NousResearch/hermes-agent/pull/110544) |
| [#98382](https://github.com/NousResearch/hermes-agent/issues/98382) | 并发 observer-hook 调用因 `(hook_name, id(cb))` running 位复用被当作超时丢弃 | 无 |
| [#103363](https://github.com/NousResearch/hermes-agent/issues/103363) | Telegram 自动 topic-rename 在 0.21.0 升级后静默失效（schema v2→v3 迁移未触发） | 无 |

### 🟠 P2（重要）

| Issue | 描述 | 已有 Fix PR |
|---|---|---|
| [#59293](https://github.com/NousResearch/hermes-agent/issues/59293) | `hermes config set` 绕过审批层写保护 | 无 |
| [#60789](https://github.com/NousResearch/hermes-agent/issues/60789) | `session_search(profile=...)` 忽略 profile 参数 | 无 |
| [#76457](https://github.com/NousResearch/hermes-agent/issues/76457) | `hermes config set` 将 YAML list 字符串化为 JSON literal | 无 |
| [#110530](https://github.com/NousResearch/hermes-agent/issues/110530) | MCP 工具 schema 包含 `properties` 参数时 400 错误 | 无 |
| [#110526](https://github.com/NousResearch/hermes-agent/issues/110526) | `hermes skills install official/creative/archify` 仅安装 52/213 文件（Windows 截断） | 无 |
| [#55487](https://github.com/NousResearch/hermes-agent/issues/55487) | WeCom adapter websocket 断连后忙循环占满 CPU | 无 |
| [#110549](https://github.com/NousResearch/hermes-agent/issues/110549) | Gateway agent-cache 压力阀对同 cgroup 子进程内存失明 | [#110557](https://github.com/NousResearch/hermes-agent/pull/110557)（待合并） |
| [#31071](https://github.com/NousResearch/hermes-agent/issues/31071) | Telegram 富文本链接 URL 不暴露给 Agent | [#31075](https://github.com/NousResearch/hermes-agent/pull/31075) ✅ 已合并 |
| [#72502](https://github.com/NousResearch/hermes-agent/issues/72502) | 排队后续消息未触发处理 hooks，无读回执反应 | 无 |
| [#109024](https://github.com/NousResearch/hermes-agent/issues/109024) | 多路复用 named-profile Docker MEDIA 解析异常 | 无 |

### 🟡 P3（一般）

| Issue | 描述 |
|---|---|
| [#110550](https://github.com/NousResearch/hermes-agent/issues/110550) | `hermes kanban specify` 通过 aux LLM 重写卡片正文，无透传 |
| [#110534](https://github.com/NousResearch/hermes-agent/issues/110534) | Desktop Passwords 页面缓存陈旧"Not detected"状态 |
| [#110552](https://github.com/NousResearch/hermes-agent/issues/110552) | 重置 lineage provenance 可被 `reopen_session()` 误分类 |
| [#74719](https://github.com/NousResearch/hermes-agent/issues/74719) | Sherpa 唤醒词缺少 `pypinyin` 模块 |
| [#91437](https://github.com/NousResearch/hermes-agent/issues/91437) | Docker 镜像缺少 `google-cloud-pubsub`，google_chat adapter 失败 |

**稳定性趋势**：`state.db` WAL 系列问题已构成跨多平台的功能性灾难，需在下一版本优先根治。

---

## 6. 功能请求与路线图信号

今日新功能请求与已有 PR 对照：

| 需求 | Issue | 配套 PR | 进入下一版本可能性 |
|---|---|---|---|
| Kanban 阻塞任务升级到创建者 agent | [#110528](https://github.com/NousResearch/hermes-agent/issues/110528) | [#110547](https://github.com/NousResearch/hermes-agent/pull/110547) | **高**（PR 已就绪） |
| Slack 命令支持模糊自然语言解析 | [#106258](https://github.com/NousResearch/hermes-agent/issues/106258) | 无 | 中 |
| skill 选择机制收窄、显式化、与模型无关 | [#110536](https://github.com/NousResearch/hermes-agent/issues/110536) | 无 | 中 |
| Desktop 提供显式 Clear chat 操作 | [#110229](https://github.com/NousResearch/hermes-agent/issues/110229) | 无 | 中 |
| 统一跨检索路径的一等引文注释规范 | [#85106](https://github.com/NousResearch/hermes-agent/issues/85106) | 无 | **高**（已标 👍） |
| `subc` 只读分析接口（生成 Nightmare 草稿） | （无独立 issue） | [#110555](https://github.com/NousResearch/hermes-agent/pull/110555) | 高 |
| 修复 Kanban specify 保留卡片正文 | [#110550](https://github.com/NousResearch/hermes-agent/issues/110550) | [#110558](https://github.com/NousResearch/hermes-agent/pull/110558) | **极高**（已对症） |

**路线图信号**：Kanban 多 agent 协作能力（阻塞升级 + specify 语义修正）是当前最集中的功能演进方向；同时 Skill 选择模型化和引文规范化两项 RFC 显示社区开始关注 LLM 行为契约层。

---

## 7. 用户反馈摘要

**真实痛点**：

1. **企业微信崩溃级影响**（[#55487](https://github.com/NousResearch/hermes-agent/issues/55487)）：macOS 26.5 + Homebrew 安装下，WeCom websocket 断连后占用整核 CPU，**所有平台**（不只是 WeCom）冻结。用户场景为生产环境多平台并行。

2. **审批层被旁路**（[#59293](https://github.com/NousResearch/hermes-agent/issues/59293)）：v0.18.0 的安全护栏在 `hermes config set` 这条"前门"路径上完全失效，安全承诺不可信。

3. **配置文件被静默改写**（[#76457](https://github.com/NousResearch/hermes-agent/issues/76457)）：用户期望 `hermes config set` 写入合法的 YAML list，但实际写入的是字符串化的 JSON literal，下游解析静默失败——典型的"承诺与实现不一致"。

4. **多 Profile 隔离失守**（[#109024](https://github.com/NousResearch/hermes-agent/issues/109024)、[#110524](https://github.com/NousResearch/hermes-agent/issues/110524)）：在 multiplexed gateway 下，命名 profile 的容器路径解析异常退化为默认 profile，跨 profile 边界的数据归属混乱。

5. **Slack UX 摩擦**（[#106258](https://github.com/NousResearch/hermes-agent/issues/106258)）：用户说"switch to grok oauth"无法解析为 `/model xai-oauth`，期望自然语言兜底。

**使用场景亮点**：
- 用户 [@Vocllum](https://github.com/Vocllum) 主动提交 RFC [#85106](https://github.com/NousResearch/hermes-agent/issues/85106)，反映出**专业用户对引文可追溯性的高标准**。
- 用户 [@TheJackMachine](https://github.com/TheJackMachine) 提出 [#110528](https://github.com/NousResearch/hermes-agent/issues/110528) 阻塞任务升级到 creator agent，体现**多 agent 工作流的真实业务需求**。

**满意度信号**：bot 维护者（[@hermes-seaeye[bot]](https://github.com/hermes-seaeye[bot])）的自动修复 PR（#110556）说明项目 CI/CD 已具备自动化闭环能力。

---

## 8. 待处理积压

**长期未响应的重要 Issue**（创建至今 > 30 天且仍 OPEN）：

| Issue | 创建日期 | 标题 | 状态 |
|---|---|---|---|
| [#31071](https://github.com/NousResearch/hermes-agent/issues/31071) | 2026-05-23 | Telegram 富文本链接 URL 不暴露给 Agent | ✅ 今日已通过 [#31075](https://github.com/NousResearch/hermes-agent/pull/31075) 关闭 |
| [#50846](https://github.com/NousResearch/hermes-agent/issues/50846) | 2026-06-22 | Discord 本地视频上传应预检大小 | ✅ 今日已通过 [#67040](https://github.com/NousResearch/hermes-agent/pull/67040) 关闭 |
| [#55487](https://github.com/NousResearch/hermes-agent/issues/55487) | 2026-06-30 | WeCom 忙循环冻结所有平台 | ⚠️ 仍 OPEN，无修复 PR |
| [#59293](https://github.com/NousResearch/hermes-agent/issues/59293) | 2026-07-06 | `hermes config set` 绕过系统配置写保护 | ⚠️ 仍 OPEN，标 `needs-decision` |
| [#74719](https://github.com/NousResearch/hermes-agent/issues/74719) | 2026-07-30 | Sherpa 唤醒词缺 `pypinyin` 模块 | ⚠️ 仍 OPEN |

**给维护者的提醒**：
- [#55487](https://github.com/NousResearch/hermes-agent/issues/55487) 已存续 76 天，WeCom 用户在生产环境持续受影响，建议优先响应。
- [#59293](https://github.com/NousResearch/hermes-agent/issues/59293) 涉及安全语义，需维护者明确"CLI 应否被视为受信任路径"。
- [#74719](https://github.com/NousResearch/hermes-agent/issues/74719) 是简单依赖补全问题，可快速关闭。
- 关于 `platforms.*.enabled: false` 的 [#73289](https://github.com/NousResearch/hermes-agent/issues/73289) 今日有 **4 条独立 PR 同时提交**（#55447、#73376、#73303、#73724），建议维护者在合并时择优并明示，避免重复合并产生冲突。

---

## 附：项目健康度总评

| 维度 | 评级 | 说明 |
|---|---|---|
| **活跃度** | 🟢 高 | Issue/PR 双 50，bot 自动化活跃 |
| **响应速度** | 🟡 中 | P1 已出现 3 日仍待合并修复，但 salvage PR 已就绪 |
| **稳定性** | 🔴 风险 | `state.db` WAL 系列问题影响多平台，需紧急补丁 |
| **社区协作** | 🟢 健康 | 多位外部贡献者提交高质量 PR，RFC 讨论有序 |
| **版本节奏** | 🟡 停滞 | 今日无新版本

</details>

<details>
<summary><strong>OpenHuman</strong> — <a href="https://github.com/tinyhumansai/openhuman">tinyhumansai/openhuman</a></summary>

<think>Let me analyze the GitHub data for OpenHuman project and generate a comprehensive daily report for 2026-09-14.

Key observations:
- 4 issues updated (3 open, 1 closed)
- 5 PRs updated (3 open, 2 closed)
- 0 releases
- Notable themes: Google Calendar integration bugs, Rust E2E test runner issues, Tauri dev path fix, E2E test infrastructure improvements

Let me categorize:
- Calendar-related issues: #6245 (closed), #6247 (open) - both Google Calendar
- Image preview bug: #6246 (open)
- Rust E2E test runner: #6235 (open issue)
- PRs about test infrastructure: #6238, #6242, #6243, #6244
- Credentials fix: #5432 (closed)

The activity is moderate - focused on bug fixes and test infrastructure.</think>

# OpenHuman 项目动态日报
**日期：2026-09-14**

---

## 1. 今日速览

OpenHuman 今日整体活跃度为**中等偏稳**：24 小时内有 4 条 Issue 流转（3 活跃 / 1 已关闭）和 5 条 PR 流转（3 待合并 / 2 已关闭），但无新版本发布。议题集中在两大主题——**Google Calendar 集成链路的多账号与拉取故障**与**E2E / Rust 测试基础设施的健壮性加固**。从合并节奏看，社区仍在优先消化 v0.63.25 暴露的回归与端到端可观测性问题，尚未推进新功能落地。

---

## 2. 版本发布

无新版本发布。今日合并的 PR（#6244、#5432）将在下一次构建中随版本号发布。

---

## 3. 项目进展

今日关闭/合并 2 条 PR，主要修复了构建脚本与凭据规范化两类长期隐患：

| PR | 状态 | 影响面 |
|---|---|---|
| [#6244](https://github.com/tinyhumansai/openhuman/pull/6244) `fix: resolve Tauri dev frontend path` | ✅ 已关闭 | 修复 `pnpm dev:app` 无法正确启动 Vite 的问题，使本地开发能直接从源码包加载前端，避免开发体验断链。 |
| [#5432](https://github.com/tinyhumansai/openhuman/pull/5432) `fix(credentials): normalize provider slugs at write time and auto-mig…` | ✅ 已关闭 | 解决大小写敏感的 provider slug（如 `DeepSeek` vs `deepseek`）写入/读取错配导致的**凭据静默丢失**，并附带自动迁移逻辑。 |

整体而言，项目在"看不见但影响生产"的稳定性层面有所推进，但在新功能、可观测性、UI 体验上的可见进展接近于零。

---

## 4. 社区热点

今日讨论最集中的议题集中在 Google Calendar 与聊天气泡两个**面向终端用户**的故障上：

- [#6246](https://github.com/tinyhumansai/openhuman/issues/6246) **（2 条评论）** "附件图片只占位不渲染"——用户在附加图片后无法预览已选图片，体验阻塞明显。
- [#6245](https://github.com/tinyhumansai/openhuman/issues/6245) **（2 条评论，已关闭）** Google Calendar 在聊天内无法拉取会议——同样是面向终端用户的集成故障。
- [#6247](https://github.com/tinyhumansai/openhuman/issues/6247) **（1 条评论）** 多账号场景下日历默认选错账号——属于 #6245 的衍生场景。

诉求本质：用户期望"配置即用"的 Calendar 集成和"所见即所得"的文件附件体验，而非反复重连或手工指定账号。

---

## 5. Bug 与稳定性

按严重程度排列：

| 严重度 | Issue | 标题 | 是否有修复 PR |
|---|---|---|---|
| **P2** | [#6246](https://github.com/tinyhumansai/openhuman/issues/6246) | 附加图片在聊天气泡中占位但预览空白 | ❌ 暂无关联 PR |
| **P2** | [#6247](https://github.com/tinyhumansai/openhuman/issues/6247) | 多账号 Calendar 默认选错账号，返回空结果 | ❌ 暂无关联 PR |
| **P2** | [#6245](https://github.com/tinyhumansai/openhuman/issues/6245)（已关闭） | Google Calendar 会议在聊天内拉取失败 | ✅ 关闭但未明确指明修复 PR |
| **中等** | [#6235](https://github.com/tinyhumansai/openhuman/issues/6235) | Rust E2E runner 仍调度 6 个已删除测试 target | ⚠️ 待跟进 PR [#6238](https://github.com/tinyhumansai/openhuman/pull/6238) 涉及重构后测试套件验证 |

补充：PR [#6242](https://github.com/tinyhumansai/openhuman/pull/6243) 与 [#6243](https://github.com/tinyhumansai/openhuman/pull/6243) 正在加固 E2E 脚本（拒绝非 E2E 构建产物、列出失败时不静默成功），属于"防止假阳性"的回归守护层。

---

## 6. 功能请求与路线图信号

今日**无明确的新功能请求**。从 PR 走向推断下一版本的可见方向：

- **测试基础设施硬化**（PR #6238、#6242、#6243）：合并后将显著降低 E2E 假绿概率，是稳定发版的前置条件；
- **开发体验修复**（PR #6244）：合并后让新贡献者 onboarding 顺畅；
- **凭据写入规整**（PR #5432）：合并后减少"明明配置过却不可用"的工单。

下一版本若聚焦 v0.63.26 或 v0.63.27，最有可能消化以上变更并修复 #6246、#6247 的 Calendar/图片预览故障。

---

## 7. 用户反馈摘要

从 Issues 评论中提炼的真实用户痛点：

- **图片附件不可见**（[#6246](https://github.com/tinyhumansai/openhuman/issues/6246)）：用户在构建 v0.63.25 中遇到"附加图片后只出现空白占位"——这表明图片上传链路在 UI 层存在回归，影响日常对话体验。
- **Calendar 集成的"假连接"**（[#6245](https://github.com/tinyhumansai/openhuman/issues/6245)）：集成显示已连接，但实际拉取为空或失败，**沉默失败**反而比显式报错更伤害信任。
- **多账号场景的智能缺陷**（[#6247](https://github.com/tinyhumansai/openhuman/issues/6247)）：用户反馈代理"自己也承认应该先核对账号"，反映出多账号上下文管理是 Calendar 集成的明显短板。

整体满意度信号偏负——三个面向用户的 Issue 全部集中在"该能用但用不了"的核心体验上，而非高级能力诉求。

---

## 8. 待处理积压

需要维护者关注的悬置项：

- 🔴 **[#6246](https://github.com/tinyhumansai/openhuman/issues/6246) 附件图片预览空白** —— 终端用户高频场景，影响发送信心，建议优先排期。
- 🔴 **[#6247](https://github.com/tinyhumansai/openhuman/issues/6247) 多账号 Calendar 默认错账号** —— 与已关闭的 #6245 同源，建议统一排查 Calendar 集成。
- 🟡 **[#6235](https://github.com/tinyhumansai/openhuman/issues/6235) Rust E2E runner 调度已删除 target** —— 阻碍贡献者本地跑通测试套件；待 PR #6238 合并后闭环。
- 🟡 **PR [#6238](https://github.com/tinyhumansai/openhuman/pull/6238) 重构后测试套件验证** —— 创建于 2026-09-12，今日仍处于待评审状态，建议尽快 review。
- 🟢 **PR [#6242](https://github.com/tinyhumansai/openhuman/pull/6242) / [#6243](https://github.com/tinyhumansai/openhuman/pull/6243)** —— 两个 P3 的 E2E 守护性 PR，可随下一批测试基础设施 PR 一起合入。

---

**健康度评估**：🟡 中性偏稳
- ✅ 稳定性类 PR 稳步推进，关闭节奏正常；
- ⚠️ 面向用户的功能故障（Calendar、附件）尚未流出修复 PR，社区响应存在滞后；
- ⚠️ 无新版本意味着用户仍暴露在已知 P2 故障下，建议维护者加快 v0.63.26 节奏。

</details>

---
*本日报由 [Big Model Radar](https://github.com/96loveslife/big_model_radar) 自动生成。*
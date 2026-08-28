# OpenClaw 生态日报 2026-08-28

> Issues: 500 | PRs: 500 | 覆盖项目: 8 个 | 生成时间: 2026-08-28 10:47 UTC

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

<think>The user wants me to generate a comprehensive project daily report for OpenClaw based on GitHub data. Let me analyze the data carefully and structure the report according to the 8 required sections.

Let me organize what I have:

**Data Overview:**
- 500 Issues updated (330 new/active, 170 closed)
- 500 PRs updated (317 pending merge, 183 merged/closed)
- 0 new releases

**Key observations:**

**Most commented Issues (top 50):**
1. #42475 - Per-agent cost budget enforcement at gateway level (23 comments)
2. #125626 - OpenClaw 2026.8.1 beta feedback (22 comments)
3. #91009 - Codex PreToolUse native hook relay CPU-bound spawn (21 comments, P0 crash-loop)
4. #48003 - Steer mode doesn't inject messages mid-turn (20 comments, P1)
5. #87744 - Codex-backed Telegram turns timeout (18 comments, P1)
6. #90354 - Pre-compaction memory flush bounded/validated append (12 comments, CLOSED)
7. #53408 - Write/exec tool parameters dropped after long conversations (12 comments, P1)
8. #71736 - Control UI plugin contribution slots (11 comments, CLOSED)
9. #98435 - MCP loopback transport doesn't auto-reconnect (11 comments, P1)
10. #86215 - Codex OAuth refresh failures wedge agent (11 comments, P1)
11. #87109 - Gateway heap grows to 1073MB+ at idle on macOS (9 comments, P1)
12. #41165 - Telegram DMs land in agent:main:main (9 comments, P1)
13. #71058 - Multiple Azure/Teams bots on single gateway (9 comments)
14. #60572 - Multi-Slot Memory Architecture (8 comments)
15. #92057 - Gateway slow/timeout under multi-session load (8 comments, CLOSED)
16. #52640 - Persistent task-status surface for long-running turns (8 comments)
17. #53540 - Network connection lost on large tool params (8 comments, P1)
18. #106760 - Telegram pre-tool-call text erased (8 comments, CLOSED)
19. #88154 - Slack Modal Support for Interactive Workflows (8 comments)
20. #73537 - Production-readiness stability label (7 comments)
21. #51028 - Sessions panel sort by last meaningful activity (7 comments)
22. #69242 - exec tool SIGKILLs broad find/grep commands (7 comments)
23. #103198 - WebChat image attachments not mapped to media store (6 comments, P2)
24. #98702 - OpenAI OAuth rejected at provider (6 comments, P1)
25. #40982 - 3-minute no-output watchdog cap (6 comments, P1)
26. #106914 - models list crashes TypeError (6 comments, CLOSED)
27. #103884 - GPT-5.6 Sol requires newer Codex (6 comments, CLOSED)
28. #71712 - Agent-facing scheduling API (6 comments)
29. #28300 - Theme Customization System (6 comments)
30. #129314 - Hidden next-turn runtime context as standalone turn (6 comments, P1)
31. #116010 - All persistent sessions capped at 128k context (6 comments, CLOSED)
32. #99947 - codex harness mirrored-session-history read fails (6 comments, P1)
33. #100941 - Gateway drops concurrent WebSocket connections (6 comments, P1)
34. #80176 - JSONL session-replay harness (6 comments)
35. #131150 - Slack DMs silently dropped after gateway restart (6 comments, P1)
36. #51336 - Surface API provider name in error messages (6 comments)
37. #53008 - Memory compaction blocks main processing lane (6 comments, P1)
38. #44130 - TUI scroll-jump behavior (6 comments)
39. #43797 - Sandbox prune doesn't clean up workspace (6 comments)
40. #112248 - codex plugin fails to register (6 comments, CLOSED)
41. #72370 - Workspace hooks rejected as cannot override (5 comments)
42. #55249 - Session labels/nicknames (5 comments)
43. #101188 - Google vertex rename (5 comments)
44. #84393 - Codex runtime injects coding-agent base prompt (5 comments, P1)
45. #69008 - Telegram group-bound agent sessions (5 comments)
46. #112475 - Device pairing recovery fails (5 comments)
47. #50798 - Agent-to-agent messaging for ACP (5 comments, CLOSED)
48. #124759 - iOS app lags (5 comments)
49. #53890 - Default outbound topic/thread binding for Telegram (5 comments)
50. #41966 - MEDIA tokens inside markdown code fences ignored (5 comments)

**Notable Issues (P0/P1) without fix PRs:**
- #91009 - P0 Codex hooks CPU-bound (no fix PR mentioned)
- #48003 - P1 Steer mode (has linked PR open)
- #87744 - P1 Codex-backed Telegram timeout
- #53408 - P1 Write/exec params dropped
- #98435 - P1 MCP loopback reconnect
- #86215 - P1 Codex OAuth wedge
- #87109 - P1 Gateway heap growth
- #41165 - P1 Telegram DMs routing (has linked PR open)
- #40982 - P1 3-minute watchdog (has linked PR open)
- #129314 - P1 Hidden runtime context
- #99947 - P1 codex harness mirrored session
- #100941 - P1 Gateway WebSocket 1006
- #131150 - P1 Slack DMs dropped (NEW - 2026-08-27)
- #84393 - P1 Codex runtime injects base prompt
- #98702 - P1 OpenAI OAuth inheritance
- #53008 - P1 Memory compaction blocks
- #53540 - P1 Network connection lost

**Key PRs to highlight:**
- #131502 - fix(gmail): keep setup command failures readable (steipete)
- #131728 - improve(ui): labeled Goal card actions and live elapsed seconds
- #131732 - refactor(agents): remove unused failover classification wrappers
- #131702 - fix(mcp): retrieve attachments from older messages
- #130763 - fix(doctor): canonicalize standalone auth-state rotation ids
- #131370 - feat(control-ui): create and manage goals without slash commands
- #131384 - fix(sandbox): stage inbound media up to 50 MiB
- #131613 - fix(control-ui): preserve inherited reasoning after history refresh
- #131716 - feat(ui): persist Sessions view preferences
- #130400 - fix(telegram): stop the bot answering the same message twice
- #124568 - fix(gateway): reject invalid utcOffset
- #111609 - fix(reef): bound JSONL store file reads
- #131281 - fix(github-copilot): normalize malformed usage errors

**Closed PRs / Merged:**
- #128995 (CLOSED) - make full session actions available from chat header
- #116489 (CLOSED) - require acknowledgement for install policy warnings
- #126424 (CLOSED) - keep conversation delivery within agent bindings
- #123535 (CLOSED) - avoid session catalog refresh storms
- #125471 (CLOSED) - keep Claude CLI OAuth available in Control UI
- #128223 (CLOSED) - resolve alias targets from write snapshot
- #128371 (CLOSED) - authorize focused beta evidence
- #90354 (CLOSED) - bounded/validated append for pre-compaction memory flush
- #71736 (CLOSED) - Control UI plugin contribution slots
- #92057 (CLOSED) - Gateway slow/timeout
- #106760 (CLOSED) - Telegram pre-tool-call text erased
- #106914 (CLOSED) - models list crashes TypeError
- #103884 (CLOSED) - GPT-5.6 Sol newer Codex
- #116010 (CLOSED) - 128k context cap
- #112248 (CLOSED) - codex plugin fails to register
- #50798 (CLOSED) - agent-to-agent ACP messaging

**Themes I notice:**
1. Codex runtime is a major source of issues (#91009, #87744, #86215, #99947, #84393, #112248, #103884)
2. Telegram channel issues (#41165, #87744, #53890, #69008, #106760, #130400)
3. Memory leakage/compaction issues (#87109, #53008, #43797)
4. OAuth/Auth issues (#86215, #98702, #69008, #130763, #125471)
5. Session state/cap issues (#48003, #116010, #53408)
6. Control UI improvements are active area
7. Multi-account, multi-bot scenarios (#71058, #131150)

Now let me write the report in Chinese as requested. The user asked for an objective, professional, data-driven report emphasizing project health. I'll use Chinese given the prompt is in Chinese.

Let me structure the 8 sections:

1. 今日速览
2. 版本发布 (skip since no releases)
3. 项目进展 (merged/closed PRs)
4. 社区热点 (most active discussions)
5. Bug 与稳定性
6. 功能请求与路线图信号
7. 用户反馈摘要
8. 待处理积压

I should be careful to present the data accurately. Let me note:
- The data shows 500 Issues updated and 500 PRs updated in past 24h
- 0 new releases
- Of 500 PRs, 317 pending, 183 merged/closed

Let me write this up properly now. I'll make sure to include GitHub links where appropriate.

I'll go for a clean format with markdown, using tables where useful and bolding key items. I'll be precise about which issues have linked PRs and which don't.

Looking at the data more carefully for P0/P1 priority bugs that don't appear to have a fix PR attached:

P0 without clear fix:
- #91009 - Codex PreToolUse CPU-bound (P0, clawsweeper:linked-pr-open...wait let me check, no, looking again: "clawsweeper:no-new-fix-pr" means no new fix PR exists). This is a P0 crash-loop issue with no current fix PR.

P1 with no fix PR (from the clawsweeper:no-new-fix-pr label):
- #48003 - Steer mode (has linked-pr-open though)
- #87744 - Codex-backed Telegram timeout
- #53408 - Write/exec params
- #98435 - MCP loopback
- #86215 - Codex OAuth wedge
- #87109 - Gateway heap
- #40982 - 3-minute watchdog (has linked-pr-open)
- #129314 - Hidden runtime context
- #99947 - codex harness mirrored session
- #100941 - Gateway WebSocket 1006
- #131150 - Slack DMs dropped
- #84393 - Codex runtime base prompt injection
- #98702 - OpenAI OAuth
- #53008 - Memory compaction blocks
- #53540 - Network connection lost

These should all be highlighted in the backlogs section.

Looking at the dates, the latest issues are from late August 2026 which aligns with the report date of 2026-08-28.

Let me also identify what's new today vs. older issues that have just been bumped. The update date 2026-08-28 means activity today. The newer issues created in August 2026 are clearly recent.

New issues (created 2026-08-2X):
- #131150 (2026-08-27) - Slack DMs dropped
- #129314 (2026-08-25) - Hidden runtime context
- #131714, #131502, #131728, #131732, #131702, #131731, #131370, #131727, #131384, #131613, #131716, #131730, #131606, #131715 (all 2026-08-28 PRs)

OK, I have enough material. Let me write the report.

I'll aim for thoroughness but also conciseness. Each section should have substantive content.

For section 4 (社区热点) - I'll pick the top 5-7 most discussed issues and analyze why they're getting attention.

For section 5 (Bug 与稳定性) - I'll create a priority table grouping by severity.

For section 6 (功能请求与路线图信号) - I'll focus on enhancements that have associated PRs or are clearly aligned with active development.

For section 7 (用户反馈摘要) - I'll synthesize themes from the issue comments.

For section 8 (待处理积压) - I'll list P0/P1 issues without a fix PR with creation dates to show how old they are.

Let me draft the full report now.

I need to be careful about:
1. The note about "codex hooks" mentions process spawning (this is interesting context)
2. The Gateway heap issue (1073MB+) which is concrete and observable
3. The Codex runtime injection being a P1 security-related issue
4. The Slack DMs issue (#131150) is from yesterday and is NEW P1
5. The beta feedback issue #125626 is from maintainer @Patrick-Erichsen which is significant

Let me finalize the report. I'll write it in Chinese with technical terms in English where appropriate.

Actually, reviewing the data once more - the report should be in Chinese based on the prompt language. Yes.

One more thing - let me check if there's anything I should flag as a security concern:
- #86215 - Codex OAuth wedge (security/auth)
- #84393 - Codex runtime injects coding-agent base prompt (security/auth-related)
- #69008 - Telegram group-bound sessions default
- #71712 - Agent-facing scheduling API with non-forgeable provenance (security proposed)
- #71736 - Control UI plugin contribution slots (security)

These are all relevant. The Codex runtime injection issue (#84393) is particularly concerning - it's described as a P1 issue where the Codex runtime silently injects coding-agent base prompts into operational agents. That sounds like a serious cross-context contamination bug.

Now writing the final report.</think>

# OpenClaw 项目日报 · 2026-08-28

> 数据源：GitHub `openclaw/openclaw` 仓库，过去 24 小时活动快照（Issues: 500, PRs: 500）

---

## 1. 今日速览

OpenClaw 今天依然处于 **2026.8.1 beta 阶段的高强度迭代期**：没有新版本发布，但仓库活跃度维持高位（24h 内 500 条 Issue 更新、500 条 PR 更新，其中 183 条 PR 已合并/关闭）。社区讨论焦点高度集中于 **Codex runtime 集成稳定性**（#91009、#87744、#86215、#99947、#84393）、**网关/会话层可靠性**（#87109、#100941、#131150）以及 **macOS / Telegram / Slack 渠道的消息投递正确性**。维护者关注持续维护工作，**@steipete、@vincentkoc、@williamcodes、@aspalagin** 等核心贡献者今日提交了多份与 Channel 投递、Sandbox、Auth 状态迁移相关的 PR。整体来看，项目处于 **Beta 后期修 bug、补回归、提交 Control UI 体验改进** 的节奏，问题积压风险较高，但响应活跃度健康。

---

## 2. 版本发布

**今日无新版本发布。** 当前公开版本线仍为 `v2026.8.1-beta.3`（commit `5831b80721f802072b0ec1893b30a16cf42d538c`，详情见 [#125626](https://github.com/openclaw/openclaw/issues/125626)），正式 GA 尚未进入候选阶段。维护者 Patrick-Erichsen 在 beta 反馈帖（[#125626](https://github.com/openclaw/openclaw/issues/125626)）持续收集中，22 条评论集中于 Slack 多账号、会话恢复、Telegram 重复回复等面向，**近期是否会推进 beta.4 或 GA 将取决于 Slack/Telegram/Codex 一类 P1 的修复节奏**。

---

## 3. 项目进展

### 当日值得关注的合并/关闭动作

| 类型 | PR/Issue | 主题 | 影响 |
|------|---------|------|------|
| PR merged/closed | [#126424](https://github.com/openclaw/openclaw/pull/126424) | fix(gateway): keep conversation delivery within agent bindings（覆盖 7 个 channel） | 高 — 涉及 Discord/iMessage/Matrix/Mattermost/Slack/Telegram/F飞书 等多渠道 |
| PR closed | [#128371](https://github.com/openclaw/openclaw/pull/128371) | fix(release): authorize focused beta evidence | 释放了 beta.3 发布阻塞器，**Windows 升级时序证据纳入观察** |
| PR closed | [#128995](https://github.com/openclaw/openclaw/pull/128995) | feat: make full session actions available from chat header | Control UI 头部菜单补齐 pin/unread/icon/copy/move 会话操作 |
| PR closed | [#125471](https://github.com/openclaw/openclaw/pull/125471) | fix(models): keep Claude CLI OAuth available in Control UI | 修复网关重启后 Claude CLI OAuth 丢失刷新归属 |
| PR closed | [#116489](https://github.com/openclaw/openclaw/pull/116489) | feat(security): require acknowledgement for install policy warnings | 新增 `security.installPolicy: "warn"` 路径 |
| PR closed | [#123535](https://github.com/openclaw/openclaw/pull/123535) | fix(ui): avoid session catalog refresh storms | 修复 sidebar session catalog 反复刷新 |
| Issue closed | [#106760](https://github.com/openclaw/openclaw/issues/106760) | Telegram: pre-tool-call text erased when response has multiple content blocks | 🟢 已修复 |
| Issue closed | [#106914](https://github.com/openclaw/openclaw/issues/106914) | `models list` crashes on 2026.7.1（anthropic sonnet-5 cost regression） | 🟢 已修复 |
| Issue closed | [#103884](https://github.com/openclaw/openclaw/issues/103884) | GPT-5.6 Sol 在 OpenClaw Codex runtime 下被拒 | 🟢 已修复 |
| Issue closed | [#112248](https://github.com/openclaw/openclaw/issues/112248) | `@openclaw/codex` 插件启动 TypeError | 🟢 已修复 |
| Issue closed | [#116010](https://github.com/openclaw/openclaw/issues/116010) | All persistent sessions capped at 128k context | 🟢 已修复 |
| Issue closed | [#92057](https://github.com/openclaw/openclaw/issues/92057) | Gateway becomes slow/timeout

---

## 横向生态对比

<think>The user is asking me to generate a horizontal comparison analysis report across all the AI agent / personal AI assistant open source projects. I need to write this in Chinese, be concise and professional, data-driven, and useful for technical decision-makers and developers.

Let me organize the data from the seven projects:

1. **OpenClaw** (github.com/openclaw/openclaw) - 500 Issues, 500 PRs, 0 releases, beta phase (v2026.8.1-beta.3)
2. **NanoBot** (github.com/HKUDS/nanobot) - 1 Issue, 27 PRs, 0 releases
3. **PicoClaw** (github.com/sipeed/picoclaw) - 3 Issues, 7 PRs, 0 releases
4. **IronClaw** (github.com/nearai/ironclaw) - 32 Issues, 47 PRs, 0 releases
5. **LobsterAI** (github.com/netease-youdao/LobsterAI) - 5 Issues, 13 PRs, 1 release (2026.8.26)
6. **QwenPaw** (github.com/agentscope-ai/QwenPaw) - 49 Issues, 47 PRs, 1 release (v2.2.0-beta.2)
7. **Hermes Agent** (github.com/NousResearch/hermes-agent) - 50 Issues, 50 PRs, 1 release (v0.20.6)
8. **OpenHuman** (github.com/tinyhumansai/openhuman) - 5 Issues, 16 PRs, 0 releases

Now I need to write a comparative analysis. Let me think about each section:

1. **生态全景** - Top-level summary of the ecosystem
2. **各项目活跃度对比** - Comparison table
3. **OpenClaw 在生态中的定位** - Where OpenClaw stands
4. **共同关注的技术方向** - Common technical directions
5. **差异化定位分析** - Differentiation
6. **社区热度与成熟度** - Activity/maturity tiers
7. **值得关注的趋势信号** - Trend signals

Let me think about common themes I noticed across the projects:

- **Windows compatibility issues** - NanoBot (#5581, #5382, #5578, #5576), Hermes Agent (#95188, #96360, #87761, #97019, #96993), IronClaw (#6590), QwenPaw (no major issues today but was mentioned elsewhere), LobsterAI (#2566 - win installer hardening)
- **Multi-provider / model flexibility** - OpenClaw (#41165, #71058), NanoBot (#5574, #5561), PicoClaw (#3330), QwenPaw (#4011, #5992), Hermes Agent (#77111 RFC)
- **Memory system improvements** - OpenClaw (#87109, #53008), NanoBot (#5570, #5571, #5575), IronClaw (#7276, #7947-#7953), Hermes Agent (#96795), QwenPaw (memory issues)
- **Telegram/Channel integration** - OpenClaw (#41165, #87744, #130400), IronClaw (#7955, #7956), QwenPaw (#5030)
- **OAuth/Auth issues** - OpenClaw (#86215, #98702, #125471), NanoBot (#5573), QwenPaw (#87891 CSRF), Hermes Agent (#87891)
- **MCP integration** - OpenClaw (#98435), IronClaw (#7964, #7856, #7968), QwenPaw (#6874, #7330, #7329)
- **Context/compaction management** - OpenClaw (#90354 closed), IronClaw (#7824, #7954, #7962), NanoBot (#5568)
- **Sandbox/session persistence** - OpenClaw (#43797, #87109), NanoBot (#5579, #5580), QwenPaw (#7384 startup architecture)
- **Multi-tenant/team features** - QwenPaw (#7318 Hub roadmap), OpenClaw (multi-account #71058)

Differentiators:
- OpenClaw: Gateway-centric, multi-channel, beta with high activity
- NanoBot: Architecture refactoring focus, provider abstraction
- PicoClaw: Sipeed (likely embedded/edge computing), low activity
- IronClaw: NEAR AI, memory/learning system redesign, MCP focus
- LobsterAI: Netease Youdao, desktop app, Windows-focused
- QwenPaw: AgentScope, multi-tenant direction, mobile exploration
- Hermes Agent: NousResearch, voice provider RFC, large-scale (525 PRs aggregated)
- OpenHuman: tinyhumansai, memory subsystem hardening, security posture

Let me think about OpenClaw's positioning:
- It's the largest in absolute terms (500/500 events per day)
- Beta stage - high churn
- Gateway-centric architecture
- Multi-channel focus (Telegram, Slack, Discord, etc.)
- Codex runtime integration issues
- Control UI is being heavily iterated

Now let me draft the report.

I should make sure to:
- Be concise but data-driven
- Provide concrete numbers
- Cite specific issues where relevant
- Be balanced - not over-praising OpenClaw or being unfair to others
- Be useful for both decision-makers (high-level) and developers (technical detail)

Let me write this in Chinese.</think>

# 个人 AI 助手 / 自主智能体开源生态横向对比 · 2026-08-28

> 数据范围：8 个项目（OpenClaw、NanoBot、PicoClaw、IronClaw、LobsterAI、QwenPaw、Hermes Agent、OpenHuman）2026-08-27 ~ 2026-08-28 GitHub 公开事件。

---

## 1. 生态全景

整个赛道当前处于**"功能趋于同质化、深水区开始啃硬骨头"**的阶段：八个项目中有七个今日发布过 PR，其中三个直接推动了发版或大版本收尾（v2026.8.26 LobsterAI、v2.2.0-beta.2 QwenPaw、v0.20.6 Hermes Agent），表明**多项目已同步进入"基础设施硬化 + 体验一致性"的关键迭代周期**。从议题聚类看，**多 Provider 路由、内存子系统重构、MCP 工具链健壮性、Channel 适配层一致性**是跨项目共同痛点，而 Windows 兼容、OAuth/CSRF 安全面、远端/桌面端握手协议则是新浮现的次生风险面。OpenClaw 凭借 500/500 的吞吐仍稳居头部，但其 beta 阶段的迭代密度正在被 IronClaw 与 Hermes Agent 显著追赶。

---

## 2. 各项目活跃度对比

| 项目 | 24h Issues | 24h PRs | 待合并 | 已合并/关闭 | 版本 | 健康度评级 |
|------|-----------|---------|--------|------------|------|----------|
| **OpenClaw** | 500 | 500 | 317 | 183 | 🚫 无（仍 beta.3） | ⭐⭐⭐⭐ 极高活跃，beta 后期修 bug |
| **Hermes Agent** | 50 (11 closed) | 50 (12 closed) | 38 | 12 | ✅ v0.20.6 (525 PRs 聚合) | ⭐⭐⭐⭐⭐ 大版本收口，质量优先 |
| **QwenPaw** | 49 (33 closed) | 47 (19 closed) | 28 | 19 | ✅ v2.2.0-beta.2 | ⭐⭐⭐⭐⭐ 高活跃 + 高关闭率，迭代高效 |
| **IronClaw** | 32 (7 closed) | 47 (30 closed) | 17 | 30 | 🚫 无 | ⭐⭐⭐⭐ 极度活跃但未发版，基础设施期 |
| **NanoBot** | 1 (1 closed) | 27 (11 closed) | 16 | 11 | 🚫 无 | ⭐⭐⭐⭐ 架构重构为主，节奏快 |
| **LobsterAI** | 5 (5 closed) | 13 (13 closed) | 0 | 13 | ✅ v2026.8.26 | ⭐⭐⭐⭐ 版本收尾期，节奏稳健 |
| **OpenHuman** | 5 (2 closed) | 16 (8 closed) | 8 | 8 | 🚫 无 | ⭐⭐⭐ 维护型更新，全 p3，安全硬化中 |
| **PicoClaw** | 3 (2 closed) | 7 (6 closed) | 1 | 6 | 🚫 无 | ⭐⭐ 低活跃，过度依赖自动化维护 |

> **关键观察**：
> - OpenClaw 绝对量远超其他项目（10x），但其关闭率 36.6% 低于 QwenPaw（67%）、IronClaw（64%）、LobsterAI（100%），说明**积压风险显著高于同业**。
> - Herm

es Agent 的"525 PRs 聚合发版"策略是其他项目可借鉴的版本治理模式。
> - NanoBot 与 IronClaw 在"无版本日合并 10+ PR"的累积风险已显现，建议拉版本基线。

---

## 3. OpenClaw 在生态中的定位

### 优势
1. **规模与吞吐量**：24h 1000 条事件是第二梯队（Hermes/QwenPaw/IronClaw）的 ~10 倍，社区密度与发版压力形成正向飞轮。
2. **多 Channel 适配广度**：覆盖 Discord/iMessage/Matrix/Mattermost/Slack/Telegram/飞书 等十余种协议，是同类中最广；[#126424](https://github.com/openclaw/openclaw/pull/126424) 单 PR 覆盖 7 个 channel。
3. **Control UI 迭代速度**：Goals、Sessions、Sidebar 等多模块同时推进；[#131370](https://github.com/openclaw/openclaw/pull/131370)（Goals UI）、[#131716](https://github.com/openclaw/openclaw/pull/131716)（Sessions 持久化）、[#131728](https://github.com/openclaw/openclaw/pull/131728)（Goal 计时）形成完整闭环。
4. **Beta 收口已晚于预期**：beta.3 距 GA 仍存在 Codex/Telegram/Slack 三类 P1 阻塞。

### 与同类的关键技术路线差异

| 维度 | OpenClaw | IronClaw | Hermes Agent | QwenPaw |
|------|----------|----------|--------------|---------|
| 核心架构 | Gateway-centric，多 plugin 挂载 | Capability projection + memory bus | 多 Profile 多 Backend 路由 | ASGI + Tauri 双 runtime |
| Memory 路线 | 上下文压缩（#90354 已修）+ 隔离 lane（#53008 P1） | 第 4 代 MemoryService + Learning Review Router | `clarify` 提示 + 显式写入治理 | 工作区预加载 Skills |
| Provider 抽象 | 静态配置，多 OAuth 渠道 | 归一化投影（#7944 / #7968） | RealtimeVoiceProvider ABC 提案（#77111） | 自定义 OpenAI Provider 自动发现（#7320） |
| 桌面/移动 | Control UI 为核心 | 浏览器/CLI 双形态 | Desktop + SSH Profile 复杂语义 | Mobile 原生（#7378 草案）+ Desktop tray |
| 团队化 | 多账号单 Gateway（#71058） | 租户隔离 BI 遥测（#7961） | Bot Mode 群聊 | Hub 多租户路线图（#7318） |

### 社区规模对比
- **OpenClaw** ≈ **Hermes Agent** > **QwenPaw** ≈ **IronClaw** > **NanoBot** > **LobsterAI** ≈ **OpenHuman** > **PicoClaw**
- 外围贡献者密度：Hermes Agent、QwenPaw 明显高于 OpenClaw（OpenClaw 主要依赖 steipete、vincentkoc 等核心维护者）。
- **结论**：OpenClaw 在吞吐上是头部，但在"外围贡献者转化为核心维护者"的漏斗上落后于 Hermes Agent。

---

## 4. 共同关注的技术方向

跨项目共性议题（按出现频次排序）：

### A. 多 Provider / 多后端路由灵活性 ⭐⭐⭐⭐⭐
- **OpenClaw** [#71058](https://github.com/openclaw/openclaw/issues/71058)、[#98702](https://github.com/openclaw/openclaw/issues/98702)、[#86215](https://github.com/openclaw/openclaw/issues/86215)：多 Azure/Teams bots、OpenAI/Codex OAuth
- **NanoBot** [#5574](https://github.com/HKUDS/nanobot/pull/5574)（Provider 抽象统一）、[#5561](https://github.com/HKUDS/nanobot/pull/5561)（per-spawn 模型预设）
- **PicoClaw** [#3330](https://github.com/sipeed/picoclaw/issues/3330)（子代理动态模型）
- **QwenPaw** [#5992](https://github.com/agentscope-ai/QwenPaw/pull/5992)（per-session 模型覆盖）、[#4011](https://github.com/agentscope-ai/QwenPaw/issues/4011)（fallback 模型）
- **Hermes Agent** [#77111](https://github.com/NousResearch/hermes-agent/issues/77111)（RealtimeVoiceProvider ABC RFC）、[#5992/4011] 等

**诉求**：从静态配置 → 运行时动态、按会话/任务/子代理粒度切换。

### B. 内存子系统重构与可观测化 ⭐⭐⭐⭐⭐
- **OpenClaw** [#87109](https://github.com/openclaw/openclaw/issues/87109)（Gateway heap 1073MB）、[#90354](https://github.com/openclaw/openclaw/issues/90354)（pre-compaction flush，已修）
- **IronClaw** [#7276](https://github.com/nearai/ironclaw/issues/7276) + 5 子议题（#7947-#7953）：第 4 代 MemoryService + Learning Router
- **NanoBot** [#5570](https://github.com/HKUDS/nanobot/pull/5570)（可插拔 recall）、[#5571](https://github.com/HKUDS/nanobot/pull/5571)（显式 recall）、[#5575](https://github.com/HKUDS/nanobot/pull/5575)（移除 consolidationRatio）
- **OpenHuman** [#5820](https://github.com/tinyhumansai/openhuman/issues/5820)（34 分钟静默腐败）、[#5823](https://github.com/tinyhumansai/openhuman/pull/5823)（已修）、[#5825](https://github.com/tinyhumansai/openhuman/pull/5825)（MemoryScoring bus family）
- **Hermes Agent** [#96795](https://github.com/NousResearch/hermes-agent/issues/96795)（Memory 写入治理）

**诉求**：内存子系统从"黑盒自动注入"转向"显式 recall、可插拔后端、腐败可观测"。

### C. MCP 工具链健壮性 ⭐⭐⭐⭐
- **OpenClaw** [#98435](https://github.com/openclaw/openclaw/issues/98435)（loopback reconnect）
- **IronClaw** [#7964](https://github.com/nearai/ironclaw/pull/7964)（大目录返回 0 工具）、[#7968](https://github.com/nearai/ironclaw/pull/7968)（结果归一化）、[#7856](https://github.com/nearai/ironclaw/issues/7856)（camelCase 工具丢失）
- **QwenPaw** [#6874](https://github.com/agentscope-ai/QwenPaw/pull/6874)（tool-call timeout）、[#7330](https://github.com/agentscope-ai/QwenPaw/pull/7330)（Streamable-HTTP 双协议）、[#7329](https://github.com/agentscope-ai/QwenPaw/pull/7329)（session RPC abort）
- **Hermes Agent** [#97029](https://github.com/NousResearch/hermes-agent/issues/97029)（stdio 子进程活性颠倒）

**诉求**：MCP 从"能用"到"鲁棒、可观测、错误恢复"。

### D. 上下文压缩与成本治理 ⭐⭐⭐⭐
- **OpenClaw** [#90354](https://github.com/openclaw/openclaw/issues/90354)（pre-compaction flush）、[#53408](https://github.com/openclaw/openclaw/issues/53408)（长对话下参数丢失）
- **IronClaw** [#7824](https://github.com/nearai/ironclaw/issues/7824)（227.7M token vs 55.1M 对照数据）、[#7954](https://github.com/nearai/ironclaw/pull/7954)（累积式屏障）、[#7962](https://github.com/nearai/ironclaw/pull/7962)（overflow 后 compact+resume）
- **NanoBot** [#5568](https://github.com/HKUDS/nanobot/pull/5568)（AgentRunner 接管 compaction）、[#5388](https://github.com/HKUDS/nanobot/pull/5388)（MCP schema 字节预算）
- **OpenClaw** [#41966](https://github.com/openclaw/openclaw/issues/41966)（markdown 内 MEDIA tokens 忽略）

**诉求**：从"被动压缩"到"主动规划 + 成本可视化"。

### E. Windows 平台兼容性 ⭐⭐⭐
- **NanoBot** [#5581](https://github.com/HKUDS/nanobot/pull/5581)、[#5382](https://github.com/HKUDS/nanobot/pull/5382)、[#5578](https://github.com/HKUDS/nanobot/pull/5578)
- **Hermes Agent** [#95188](https://github.com/NousResearch/hermes-agent/issues/95188)（Profile 复活）、[#96360](https://github.com/NousResearch/hermes-agent/issues/96360)（SCM STOP_PENDING）、[#87761](https://github.com/NousResearch/hermes-agent/issues/87761)（WinError 32）、[#97019](https://github.com/NousResearch/hermes-agent/issues/97019)（os.kill 不安全）、[#96993](https://github.com/NousResearch/hermes-agent/issues/96993)（Chrome app-bound 加密）
- **IronClaw** [#6590](https://github.com/nearai/ironclaw/issues/6590)（workspace/skills 重叠）
- **LobsterAI** [#2566](https://github.com/netease-youdao/Lob

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

<think>Let me analyze the GitHub data for NanoBot project on 2026-08-28 and generate a comprehensive daily report.

Key observations from the data:

1. **Activity Overview**:
   - 1 Issue update (0 new/active, 1 closed)
   - 27 PR updates (16 open/pending, 11 merged/closed)
   - 0 new releases

2. **Issue #4429** was closed - related to allowing custom providers to configure thinking style (e.g., VolcEngine/Doubao)

3. **Major PRs analysis**:
   - #5568: Refactor agent runner to own context compaction (OPEN, important architectural change)
   - #5580: Move session persistence off event loop (OPEN, P1 bug/performance)
   - #5504: Surface model retry status in WebUI (OPEN, P2)
   - #5581: Fix TUI cursor position on Windows exit (OPEN, P2)
   - #5579: Session persistence off event loop (CLOSED, P1)
   - #5578: TUI clipboard race on Windows test (CLOSED)
   - #5571: Memory explicit recall by default (OPEN, P1, conflict)
   - #5570: Pluggable recall backend (OPEN, P2, conflict)
   - #5388: Budget model-visible MCP schemas (OPEN, conflict)
   - #5577, #5576: Herdr pane UI preservation (CLOSED, both)
   - #5574: Explicit fallback attempts (CLOSED, provider refactor)
   - #5569: Extract tool execution boundary (CLOSED)
   - #5575: Remove consolidation ratio (CLOSED, memory refactor)
   - #5483: Prevent deleted session recreation (OPEN, P2)
   - #5561: Per-spawn model presets (OPEN)
   - #5382: Retry os.replace on Windows (OPEN, P2, conflict)
   - #4346: Mark stripped images as unviewable (CLOSED)
   - #5573: Refresh OAuth tokens (OPEN, P2)
   - #5572: Default request concurrency to unlimited (CLOSED, P1)

4. **Bug categories**:
   - Windows-specific bugs (TUI cursor, clipboard race, os.replace permission)
   - Session persistence/event loop issues
   - OAuth token expiration
   - Deleted sessions being recreated
   - MCP schema budget

5. **Active contributors**: @chengyongru appears to be the most active (10+ PRs), with contributions from @KailBug, @dajiaohuang, @KDB-Wind, @BearMett, @albatrossflyon-coder

Let me structure the report now.

Notable patterns:
- @chengyongru is dominant contributor, doing heavy refactoring work
- Multiple P1 issues around session/event loop architecture
- Windows compatibility is a recurring theme
- Memory architecture being revamped (#5570, #5571, #5575)
- Provider architecture being improved (#5574)
- Agent architecture being modularized (#5568, #5569)

Let me write a comprehensive daily report.</think>

# NanoBot 项目日报 · 2026-08-28

---

## 1. 今日速览

NanoBot 今日呈现 **高强度架构重构** 态势：过去 24 小时共有 27 个 PR 更新、1 个 Issue 关闭，但 **0 个新版本发布**。当前仓库聚焦于 **会话/事件循环架构、记忆系统重构、Provider 路由统一化** 三大主线，提交活动高度集中于核心维护者 @chengyongru（贡献超过 10 个 PR）。从 11 个关闭的 PR 数量看，代码审查与合并节奏较快，但仍有 16 个 PR 待合并且其中多个标记为 `conflict`，说明存在并行开发的分支竞争风险。整体项目健康度处于 **活跃演进、架构调整期**。

---

## 2. 版本发布

🚫 **今日无新版本发布**。

尽管合并/关闭了 11 个 PR（包括多项 P1 修复、Provider 重构、记忆系统重构），但尚未触发版本标签。鉴于合并内容涉及大量内部接口调整（Provider、AgentRunner、SessionManager 边界），建议维护者在合并 #5574、#5569、#5568 等架构级 PR 后尽快规划下一个 minor 版本。

---

## 3. 项目进展

今日 **11 个 PR 被关闭/合并**，覆盖架构重构、性能优化、平台兼容性等多个维度：

### 🔧 核心架构重构（高价值）
| PR | 说明 | 影响 |
|---|---|---|
| [#5574](https://github.com/HKUDS/nanobot/pull/5574) | **refactor(providers): make fallback attempts explicit** — 引入不可变 `ProviderAttempt`，统一 provider/model/transport/上下文窗口/重试策略解析路径 | Provider 层抽象显著增强，为多 provider 容错和可观测性打基础 |
| [#5569](https://github.com/HKUDS/nanobot/pull/5569) | **refactor(agent): extract tool execution boundary** — 工具调用准备、执行、批处理、错误分类从 `AgentRunner` 抽离 | AgentRunner 重新聚焦 ReAct 阶段协调，降低核心复杂度 |
| [#5575](https://github.com/HKUDS/nanobot/pull/5575) | **refactor(memory): remove consolidation ratio** — 移除 `consolidationRatio` 配置和按比例归档循环 | 记忆归档逻辑确定性化，配合 #5570/#5571 构成记忆系统三件套 |

### 🐛 关键 Bug 修复
- [#5572](https://github.com/HKUDS/nanobot/pull/5572) — **fix(agent): default request concurrency to unlimited**（P1）：修复 WebUI 在并发请求时受限的问题，文档同步更新。
- [#5579](https://github.com/HKUDS/nanobot/pull/5579) — **fix(session): move persistence off event loop**（P1）：增加 `AsyncSessionManager` 边界，将同步 `SessionManager` 事务移出事件循环。
- [#4346](https://github.com/HKUDS/nanobot/pull/4346) — **fix(providers): mark stripped images as unviewable**：修复图像剥离回退时泄露本地路径的隐私问题。
- [#5576](https://github.com/HKUDS/nanobot/pull/5576) / [#5577](https://github.com/HKUDS/nanobot/pull/5577) — Herdr 面板 TUI 完整性修复（连续两个 PR 解决同一问题，第二个可能为第一次的回归修正）。
- [#5578](https://github.com/HKUDS/nanobot/pull/5578) — 修复 Windows 剪贴板图像测试中的竞态条件。

### 📈 综合评估
今日合并相当于完成了 **一轮架构整理 + 一批 P1 稳定性修复**，项目向前推进了相当大的步伐，尤其在 Provider/Agent/Memory 三层职责分离上初见雏形。

---

## 4. 社区热点

虽然数据中评论数普遍较低（多数 PR 显示为 `undefined`），但从 **PR 数量、优先级标签、关注模块** 可归纳热点方向：

| 热度议题 | 相关 PR | 社区诉求分析 |
|---|---|---|
| **Windows 兼容性** | [#5581](https://github.com/HKUDS/nanobot/pull/5581)、[#5382](https://github.com/HKUDS/nanobot/pull/5382)、[#5578](https://github.com/HKUDS/nanobot/pull/5578)、[#5576](https://github.com/HKUDS/nanobot/pull/5576) | Windows 平台用户在 TUI 退出、剪贴板、文件锁、os.replace 等场景反复遇到问题，已成为稳定的痛点来源 |
| **会话管理的事件循环阻塞** | [#5579](https://github.com/HKUDS/nanobot/pull/5579)、[#5580](https://github.com/HKUDS/nanobot/pull/5580) | 同步 `SessionManager` 在 `nanobot agent` 高并发或长时间运行下阻塞 asyncio 循环，影响 WebUI 与 SDK 用户体验 |
| **多 Provider / 模型路由灵活性** | [#5574](https://github.com/HKUDS/nanobot/pull/5574)、#4429（已关闭）、[#5561](https://github.com/HKUDS/nanobot/pull/5561)、[#5573](https://github.com/HKUDS/nanobot/pull/5573) | 用户希望自定义 provider 可配置 thinking 风格、支持 OAuth 自动刷新、按 spawn 粒度配置模型预设 |
| **记忆系统显式化与可插拔** | [#5570](https://github.com/HKUDS/nanobot/pull/5570)、[#5571](https://github.com/HKUDS/nanobot/pull/5571)、[#5575](https://github.com/HKUDS/nanobot/pull/5575) | 社区要求记忆召回可控、可观测，支持多种后端，避免 `MEMORY.md` 静默注入干扰主提示词 |

---

## 5. Bug 与稳定性

按严重程度排列：

### 🔴 P1（高优先级，已合并或待合并）
| Bug | 状态 | 说明 |
|---|---|---|
| WebUI 在高并发下被默认并发上限阻塞 | ✅ [#5572](https://github.com/HKUDS/nanobot/pull/5572) **已关闭** | 默认并发改为 unlimited，已带回归测试 |
| 会话持久化阻塞事件循环 | 🟡 [#5579](https://github.com/HKUDS/nanobot/pull/5579) **已关闭**；[#5580](https://github.com/HKUDS/nanobot/pull/5580) **OPEN** 续作 | 引入 `AsyncSessionManager` 边界，异步化所有 SessionManager 调用 |
| 模型重试状态对客户端不可见 | 🟡 [#5504](https://github.com/HKUDS/nanobot/pull/5504) **OPEN**（NAN-34） | WebSocket/TUI/WebUI 统一展示重试倒计时与尝试次数 |

### 🟠 P2（中优先级）
| Bug | 状态 |
|---|---|
| Windows TUI 退出后鼠标光标位置错误 | 🟡 [#5581](https://github.com/HKUDS/nanobot/pull/5581) **OPEN** |
| Windows 下 `os.replace()` 偶发 `[WinError 5]` | 🟡 [#5382](https://github.com/HKUDS/nanobot/pull/5382) **OPEN**（heartbeat cron 引发过两次 gateway 崩溃） |
| MCP OAuth token 过期未自动刷新 | 🟡 [#5573](https://github.com/HKUDS/nanobot/pull/5573) **OPEN** |
| 延迟消息在会话删除后重建会话 | 🟡 [#5483](https://github.com/HKUDS/nanobot/pull/5483) **OPEN** |

### ✅ 已修复
- 图像剥离回退泄露本地路径 → [#4346](https://github.com/HKUDS/nanobot/pull/4346)
- Herdr 面板 UI 不完整 → [#5576](https://github.com/HKUDS/nanobot/pull/5576) / [#5577](https://github.com/HKUDS/nanobot/pull/5577)
- Windows 剪贴板测试不稳定 → [#5578](https://github.com/HKUDS/nanobot/pull/5578)

> **结论**：Windows 平台相关 bug 已成系统性风险，建议维护者优先安排 Windows CI 强化与专项清理。

---

## 6. 功能请求与路线图信号

### 已关闭/转化的需求
- **#4429** — *Allow custom provider to configure thinking style*（2026-06-20 开启，今日关闭）：解决 VolcEngine/Doubao 等非标准 thinking 参数（如 `{"thinking": {"type": "enabled"}}`）在 custom provider 下无法启用推理模式的问题。关闭说明该需求已被实现或被替代方案覆盖（可能并入 [#5574](https://github.com/HKUDS/nanobot/pull/5574) 的 Provider 路由重构）。

### 进行中的功能请求
| PR/Issue | 提出的功能 | 路线图可能性 |
|---|---|---|
| [#5561](https://github.com/HKUDS/nanobot/pull/5561) | `spawnPresets` allowlist 实现 spawn 粒度模型预设 | 🟢 高 — 解决 [#4231](https://github.com/HKUDS/nanobot/issues/4231)，是已有讨论的替代实现 |
| [#5570](https://github.com/HKUDS/nanobot/pull/5570) + [#5571](https://github.com/HKUDS/nanobot/pull/5571) | 记忆后端可插拔 + 默认显式 recall | 🟢 高 — 两者互相依赖，构成完整方案 |
| [#5388](https://github.com/HKUDS/nanobot/pull/5388) | MCP 工具 schema 字节预算（默认关闭） | 🟡 中 — 解决上下文爆炸，但需协调 MCP 工具筛选策略 |
| [#5568](https://github.com/HKUDS/nanobot/pull/5568) | AgentRunner 接管 context compaction | 🟡 中 — 架构性变更，影响面大，需与 #5579 配套评审 |
| [#5561](https://github.com/HKUDS/nanobot/pull/5561) | per-spawn 模型预设 | 🟢 高 |

### 路线图信号
未来 1-2 个 minor 版本的潜在主题：
1. **会话/事件循环异步化**（#5579/#5580）
2. **Provider 抽象统一**（#5574）
3. **记忆系统可插拔与显式 recall**（#5570/#5571/#5575）
4. **Spawn 子代理模型配置增强**（#5561）
5. **Windows 平台稳定性专项**

---

## 7. 用户反馈摘要

由于多数 PR/Issue 评论数为 `undefined` 或 0，直接的社区反馈较为稀疏，但从 Issue/PR 描述可提炼以下用户痛点：

| 痛点 | 来源 | 情绪 |
|---|---|---|
| `custom` provider 无法启用 thinking/reasoning | [#4429](https://github.com/HKUDS/nanobot/issues/4429) | 😐 中性 — 功能缺口，描述克制但具体 |
| Windows TUI 退出后鼠标光标位置错乱 | [#5581](https://github.com/HKUDS/nanobot/pull/5581) | 😟 困扰 — 影响终端使用体验 |
| Windows `os.replace()` 偶发崩溃 gateway | [#5382](https://github.com/HKUDS/nanobot/pull/5382) | 😠 不满 — 已发生两次生产环境崩溃（heartbeat cron） |
| 同步 `SessionManager` 阻塞 asyncio 事件循环 | [#5579](https://github.com/HKUDS/nanobot/pull/5579)/[#5580](https://github.com/HKUDS/nanobot/pull/5580) | 😐 中性 — 性能与稳定性双重影响 |
| 图像剥离回退时泄露本地文件路径 | [#4346](https://github.com/HKUDS/nanobot/pull/4346) | 😟 隐私担忧 — 安全相关 |
| 模型重试状态对客户端不可见 | [#5504](https://github.com/HKUDS/nanobot/pull/5504) | 😟 困扰 — 用户难以判断是否在重试 |
| 延迟消息重建已删除的会话 | [#5483](https://github.com/HKUDS/nanobot/pull/5483) | 😠 不满 — 删除操作语义被破坏 |
| MCP OAuth token 过期需手动刷新 | [#5573](https://github.com/HKUDS/nanobot/pull/5573) | 😟 困扰 — 企业部署痛点 |

**综合画像**：社区当前最强烈的呼声集中在 **生产稳定性（Windows、会话持久化）与可观测性（重试状态、Provider 路由）**，对架构性重构接受度较高，但希望重构同时不引入回归。

---

## 8. 待处理积压

以下重要 Issue/PR 已开放较长时间，建议维护者关注：

| 编号 | 类型 | 标题 | 创建时间 | 备注 |
|---|---|---|---|---|
| [#4429](https://github.com/HKUDS/nanobot/issues/4429) | Issue | Allow custom provider to configure thinking style | 2026-06-20 | ⚠️ 今日已关闭，需确认是否有后续 PR 跟踪 |
| [#5382](https://github.com/HKUDS/nanobot/pull/5382) | PR | Retry `os.replace()` on Windows PermissionError | 2026-08-13 | 已 15 天，标记 `conflict`，生产崩溃相关，建议加速合并 |
| [#5388](https://github.com/HKUDS/nanobot/pull/5388) | PR | Budget model-visible MCP schemas | 2026-08-13 | 已 15 天，标记 `conflict`，需架构评审 |
| [#5483](https://github.com/HKUDS/nanobot/pull/5483) | PR | Prevent deleted sessions from being recreated | 2026-08-22 | 已 6 天，P2 bug |
| [#5504](https://github.com/HKUDS/nanobot/pull/5504) | PR | Surface model retry status (NAN-34) | 2026-08-24 | 已 4 天，P2，但涉及 WebUI/TUI/WebSocket 多端 |
| [#4346](https://github.com/HKUDS/nanobot/pull/4346) | PR | Mark stripped images as unviewable | 2026-06-15 | ⚠️ 今日已关闭（隐私问题） |
| [#4231](https://github.com/HKUDS/nanobot/issues/4231) | Issue | spawn 模型预设需求 | 推测较早 | 已被 [#5561](https://github.com/HKUDS/nanobot/pull/5561) 标记为 Resolves |

**维护者建议**：
1. 优先评审 `conflict` 标记的 PR（#5382、#5388、#5570、#5571），避免分支偏离主干
2. 对今日关闭的 #4429 给出明确的实施 PR 链接或在相关 PR 描述中交叉引用
3. 考虑为 Windows 兼容性创建专门的 milestone/标签，便于集中处理

---

## 📊 项目健康度总评

| 维度 | 评分 | 说明 |
|---|---|---|
| **活跃度** | ⭐⭐⭐⭐⭐ | 24h 内 28 项更新 |
| **架构演进** | ⭐⭐⭐⭐ | Provider/Agent/Memory 三线并进 |
| **稳定性** | ⭐⭐⭐ | Windows 平台和会话循环仍存在 P1 风险 |
| **社区参与** | ⭐⭐⭐ | 核心维护者驱动，外围贡献者较少 |
| **版本节奏** | ⭐⭐ | 累计大量变更但 0 版本发布，需及时打 tag |
| **

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

<think>Let me analyze the GitHub data for PicoClaw (sipeed/picoclaw) and generate a comprehensive project daily report for 2026-08-28.

Let me organize the information:

**Issues (3 total):**
1. #3287 [OPEN] Better support long messages in IRC - by @superuser-does, 8 comments, active discussion
2. #3331 [CLOSED] [stale] Feature - whisper transcription support - by @stanislavvv
3. #3330 [CLOSED] [stale] Feature - Dynamic model override in delegate/spawn/subagent - by @v2up-32mb

**Pull Requests (7 total):**
1. #3347 [OPEN] fix laggy interface - by @iMilnb, NEW PR, addresses web UI lag
2. #3336 [CLOSED] dependabot - aws-sdk-go-v2/service/bedrockruntime bump
3. #3335 [CLOSED] dependabot - aws-sdk-go-v2/config bump
4. #3334 [CLOSED] dependabot - anthropic-sdk-go bump
5. #3333 [CLOSED] dependabot - maunium.net/go/mautrix bump
6. #3332 [CLOSED] dependabot - aws-sdk-go-v2 bump
7. #1555 [CLOSED] fix: merge PR - old PR closed

Key observations:
- No new releases
- Most activity is from dependabot closing stale dependency PRs
- One significant feature Issue still open (#3287) with active discussion (8 comments)
- One new user-submitted PR for fixing UI lag (#3347)
- Two feature requests closed as stale (likely auto-close due to inactivity)
- The activity level is relatively low, mostly automated dependency management

Let me write a comprehensive report in Chinese as requested.</think>

# PicoClaw 项目日报

**日期**：2026-08-28  
**数据来源**：[github.com/sipeed/picoclaw](https://github.com/sipeed/picoclaw)  
**报告周期**：过去 24 小时

---

## 1. 今日速览

PicoClaw 过去 24 小时整体活跃度处于**低-中等**水平。Issues 与 PR 端均无重大里程碑事件，未发布新版本。PR 侧共 7 条更新，其中 **6 条为 Dependabot 自动维护的依赖升级**（已全部关闭），仅 **1 条来自真实用户的修复 PR**（#3347），值得关注。Issues 侧有 2 条 feature 请求因长期无响应被标记为 `stale` 后关闭，1 条关于 IRC 长消息处理的讨论仍在持续。今日项目推进主要依赖自动化维护流程，社区实质性贡献较少。

---

## 2. 版本发布

**无新版本发布**。过去 24 小时未触发任何 GitHub Release。

---

## 3. 项目进展

### 🔧 已合并/关闭的重要 PR

今日无功能性合并，但维护层面的推进值得记录：

| PR | 类型 | 影响 |
|---|---|---|
| [#3332](https://github.com/sipeed/picoclaw/pull/3332) | 依赖升级 | `aws-sdk-go-v2` 1.42.0 → 1.43.4 |
| [#3334](https://github.com/sipeed/picoclaw/pull/3334) | 依赖升级 | `anthropic-sdk-go` 1.55.1 → 1.62.0（涉及 Anthropic SDK 大版本更新） |
| [#3335](https://github.com/sipeed/picoclaw/pull/3335) | 依赖升级 | `aws-sdk-go-v2/config` 1.32.25 → 1.32.35 |
| [#3336](https://github.com/sipeed/picoclaw/pull/3336) | 依赖升级 | `bedrockruntime` 1.53.3 → 1.57.1 |
| [#3333](https://github.com/sipeed/picoclaw/pull/3333) | 依赖升级 | `mautrix` 0.27.0 → 0.29.0（Matrix 协议库升级，跨小版本） |

**评估**：这一批依赖升级显著降低了 AWS Bedrock、Anthropic SDK、Matrix 协议客户端的安全与稳定性风险，间接提升了 PicoClaw 对主流 LLM 供应商与 Matrix 桥接的兼容性。但因均为 `stale` 标签后关闭，意味着这些 PR 在被合并前已经积压了一段时间，可能在最新 main 分支中尚未集成，社区使用时需注意版本一致性。

另：[#1555](https://github.com/sipeed/picoclaw/pull/1555)（2026-03 创建的旧 PR）今日被关闭，提示其引用的子 PR（#1390/#1389/#1383/#1381）相关修复已通过其他途径合并。

---

## 4. 社区热点

###  最活跃讨论：[Issue #3287 — Better support long messages in IRC](https://github.com/sipeed/picoclaw/issues/3287)

- **状态**：OPEN（仍开放）
- **评论数**：8 条
- **创建时间**：2026-07-22（已存在 36 天）
- **点赞**：0

**核心诉求**：PicoClaw 当前对 IRC 协议下超过 512 字节的消息处理不够智能。IRCv3 协议限制单条消息不超过 512 字节，超长消息会被 IRC 客户端自动拆分为多条，PicoClaw 在解析时把它们当作独立消息处理，破坏了消息的连贯性。用户希望 PicoClaw 能够识别并合并来自同一发送者的连续消息片段，还原原始语义。

**诉求分析**：这反映了 PicoClaw 在多协议适配层（IRC、Matrix、Telegram 等）对**底层协议差异性**的处理仍不够完善。IRC 是较为古老的协议，其消息分片机制对 LLM 上下文理解构成挑战，社区对此有持续讨论意愿。维护者应优先回复该 issue，给出可行方案或时间表，避免进一步 stale 化。

---

## 5. Bug 与稳定性

### 🐛 用户报告的 Bug

#### [PR #3347 — fix laggy interface](https://github.com/sipeed/picoclaw/pull/3347)（OPEN，待合并）

- **报告者**：@iMilnb
- **创建时间**：2026-08-27
- **严重程度**：中等（影响 UI 体验，不影响功能正确性）
- **问题描述**：PicoClaw Web UI 在聊天区域文本量大时出现明显卡顿，桌面端与移动端浏览器（Brave）均可复现。`picoclaw-launcher` 也存在同样问题。

**修复内容**：作者已分析并定位性能瓶颈，构建并本地测试通过。作者自述非 TypeScript/Node 专业开发者，修复方案需要社区 review 验证。

**评估**：这是一个**有具体修复方案的 Bug**，且作者已完成初步验证。建议维护者尽快 review，避免 PR 因社区反馈不足而进入 stale 状态。该问题对 Web 端重度用户影响显著。

---

## 6. 功能请求与路线图信号

### 今日关闭的 Feature 请求（均因 `stale` 自动关闭）

#### [Issue #3331 — Support any models with /audio/transcriptions endpoint](https://github.com/sipeed/picoclaw/issues/3331)（已关闭）

- **建议内容**：当前 ASR 路径仅支持 `*-whisper-*` 系列模型，建议增加 `whisper-transcription` 标志位，允许任意支持 `/audio/transcriptions` 接口的模型用于语音转录。

#### [Issue #3330 — Support dynamic model override in delegate/spawn/subagent tools](https://github.com/sipeed/picoclaw/issues/3330)（已关闭）

- **建议内容**：当前 `delegate`、`spawn`、`subagent` 工具调用时无法动态指定模型，模型来源于配置文件静态绑定。希望支持调用时传入模型参数。

**路线图信号**：
- 两条 issue 虽然被标记 stale 关闭，但诉求具有**普遍价值**：
  - **#3330** 涉及子代理调用灵活性，是 AI Agent 框架的关键能力之一，未来很可能以不同形式被重新提出。
  - **#3331** 反映了用户希望摆脱对单一 whisper 实现的依赖，符合多模型趋势。
- 建议维护者在 stale 政策上保留对**高价值 feature 请求**的二次激活机制，避免优质建议被自动化流程吞噬。

### 持续开放的 Feature 请求

#### [Issue #3287 — IRC 长消息处理](https://github.com/sipeed/picoclaw/issues/3287)（见上文）

---

## 7. 用户反馈摘要

由于今日 Issues 评论数有限（主要为 #3287 的 8 条讨论），用户反馈提炼如下：

- **IRC 用户痛点**：现有 IRC 客户端在处理长回复时频繁出现消息碎片化，导致 PicoClaw 输出被错误拆分，影响对话可读性。社区讨论中已有人提出按时间窗口合并、基于发送者匹配、加入分隔标记等多种方案，但维护者尚未介入表态。
- **Web UI 性能反馈**（来自 #3347）：用户对长对话场景下的卡顿表示不满，但因 PR 描述详细、附测试说明，整体反馈情绪为"建设性投诉"，作者主动提供修复，体现社区正向贡献。
- **ASR/语音场景诉求**（来自 #3331 评论）：用户认为内置 whisper 模型"太旧太慢"，希望接入更快更新的转录模型（如基于 GPT-4o、ElevenLabs 等），表明 PicoClaw 语音功能有现代化升级压力。
- **Agent 调用灵活性诉求**（来自 #3330 评论）：用户在搭建多代理工作流时，发现子代理模型绑定死板，希望运行时按场景动态切换，体现 PicoClaw 正在被用于更复杂的 Agent 编排场景。

**整体满意度**：中性偏积极——用户愿意提交 PR 与详细 issue，而非直接 fork 分叉，说明社区对项目仍有信心。

---

## 8. 待处理积压

### ️ 需维护者关注的开放项

| 编号 | 类型 | 标题 | 创建距今 | 风险点 |
|---|---|---|---|---|
| [#3287](https://github.com/sipeed/picoclaw/issues/3287) | Feature | IRC 长消息处理 | 36 天 | 评论活跃但无维护者回应，存在 stale 化风险 |
| [#3347](https://github.com/sipeed/picoclaw/pull/3347) | Bug Fix | Web UI 卡顿 | 1 天 | 新 PR，需及时 review 防止作者失去动力 |

### 📌 已 stale 关闭但建议保留的高价值 issue

- [#3331](https://github.com/sipeed/picoclaw/issues/3331) — 多模型 ASR 支持
- [#3330](https://github.com/sipeed/picoclaw/issues/3330) — 子代理动态模型切换

**提醒**：今日 6 条 Dependabot PR 均因 `stale` 被关闭，意味着仓库整体的 stale 策略已自动触发。建议维护者：
1. **设置 dependabot PR 例外规则**，避免关键依赖升级被自动关闭；
2. **对 #3287 等持续活跃的 issue 主动回复**，设定明确处理计划；
3. **对 #3347 这类带具体修复的 PR 加快 review**，提升社区贡献者积极性。

---

## 📊 项目健康度评估

| 维度 | 评分 | 说明 |
|---|---|---|
| 活跃度 | ⭐⭐☆☆☆ | 高度依赖自动化流程，人类贡献稀少 |
| 维护响应 | ⭐⭐☆☆☆ | 存在 stale 关闭但缺维护者主动发声 |
| 社区参与 | ⭐⭐⭐☆☆ | 用户愿意提 PR，但 review 链路不畅通 |
| 依赖卫生 | ⭐⭐⭐⭐☆ | Dependabot 在跑，但 PR 未及时合并 |
| 整体健康度 | **B-** | 项目稳定运行，但社区互动与维护节奏需要提速 |

---

*报告生成时间：2026-08-28 | 数据基于过去 24 小时 GitHub 公开事件*

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

<think>The user wants me to generate a daily report for IronClaw project based on GitHub data from 2026-08-28. Let me analyze the data carefully and organize it into the requested sections.

Let me first understand the data:
- 32 Issues updated in 24h (25 new/active, 7 closed)
- 47 PRs updated in 24h (17 pending, 30 merged/closed)
- 0 new releases
- Most active issue: #7891 (10 comments) - performance issue with extension payloads
- Second most active: #7824 (4 comments) - context projection/compaction
- Third: #3278 (3 comments, closed) - MissionService integration
- Fourth: #6590 (3 comments) - Windows serve failure
- Many memory/learning related issues all from @serrrfirat

Key themes I see:
1. Performance issues - large MIME headers, token waste
2. Memory/learning system development - many issues from @serrrfirat about auto-promoting facts to memory
3. Notification system improvements - several PRs from @italic-jinxin
4. MCP integration fixes - hosted MCP discovery, OAuth, tool results
5. Context compaction - new approach for thread context management
6. Telegram integration bugs
7. CI/CD improvements

Let me organize these into the requested sections. I need to be objective, data-driven, and include GitHub links.

Let me count the merged/closed PRs that are notable:
- #7968 [CLOSED] feat(mcp): normalize hosted tool results
- #7907 [CLOSED] fix(memory): reject stale full-document rewrites
- #7943 [CLOSED] ci: compile integration batches once
- #7944 [CLOSED] feat(gmail): surface semantic message output
- #7954 [CLOSED] feat(threads): add cumulative compaction context barrier
- #7963 [CLOSED] feat(github): decode repository file content
- #7906 [CLOSED] chore(deps): bump everything-else group

Open important PRs:
- #7901 fix(notifications): persist auth gates before enrichment
- #7900 feat(notifications): publish durable resource blocks
- #7899 feat(notifications): publish automation pre-run failures
- #7967 ci: centralize integration test inventory
- #7964 fix(mcp): large tool catalog publishes zero tools
- #7961 feat(telemetry): add scoped tenant BI telemetry collection
- #7965 perf(github): tell model which issue tool spans org
- #7962 fix(loop): compact and resume once on context overflow
- #7958 feat(learning): add shared review router

Now let me write a comprehensive report in Chinese. I'll be objective and professional.

Let me write the report now.</think>

# IronClaw 项目日报 · 2026-08-28

> 数据范围：2026-08-27 ~ 2026-08-28  
> 报告生成时间：2026-08-28  
> 数据源：[github.com/nearai/ironclaw](https://github.com/nearai/ironclaw)

---

## 1. 今日速览

IronClaw 今日维持高强度迭代节奏，过去 24 小时内共处理 **32 条 Issue 更新**（活跃 25 / 关闭 7）与 **47 条 PR 更新**（待合并 17 / 已关闭 30），但 **未发布新版本**，说明项目目前处于密集的"内部重构 + 功能落地"窗口期，尚未到达发版节点。讨论热度最高的话题集中在**性能瓶颈（gmail 工具链 payload 膨胀）** 与**新一轮记忆/学习系统设计**两条主线，叠加多位核心贡献者（@serrrfirat、@italic-jinxin、@henrypark133、@pranavraja99）同步推进通知、记忆、MCP、CI 等多个子系统。整体活动活跃度评估为**极高**，社区反馈通道与工程交付通道均处于满负荷运行状态。

---

## 2. 版本发布

**今日无新版本发布。** 建议关注正在合并窗口内的 PR #7967（[CI 集成测试清单中心化](https://github.com/nearai/ironclaw/pull/7967)）与 PR #7958（[学习审阅路由](https://github.com/nearai/ironclaw/pull/7958)），这两项落地后可能触发下一轮版本标签。

---

## 3. 项目进展

今日关闭的 30 个 PR 中，以下对项目能力有结构性影响：

| 方向 | PR | 影响 |
|------|-----|------|
| **Gmail 语义输出** | [#7944](https://github.com/nearai/ironclaw/pull/7944) | 在 Gmail producer 边界层归一化 `get_message` 输出，base64url 解码 + HTML→Markdown + 语义头抽取，让模型直接消费可读文本，从源头降低后续性能事件发生概率（呼应 #7891） |
| **线程上下文压缩** | [#7954](https://github.com/nearai/ironclaw/pull/7954) | 引入"累积式上下文屏障"，压缩产出变为持久化、可跨 loop run 折叠的屏障，呼应 #7824 中"227.7M → 55.1M token"成本压降目标 |
| **内存并发安全** | [#7907](https://github.com/nearai/ironclaw/pull/7907) | 为 `memory.write` 增加 `expected_content_hash`（SHA-256），终结全文档覆写被并发 CAS 漏判的问题（对应关闭的 #7776） |
| **GitHub 内容解码** | [#7963](https://github.com/nearai/ironclaw/pull/7963) | 在 GitHub Contents API 处解码 base64，UTF-8 文本直接暴露给模型、二进制字节透明略过 |
| **MCP 结果归一化** | [#7968](https://github.com/nearai/ironclaw/pull/7968) | 在 MCP 协议边界投影 `CallToolResult`，剔除内联图像/音频/blob base64，减小跨通道传输载荷 |
| **CI 并行改造** | [#7943](https://github.com/nearai/ironclaw/pull/7943) | 将 PR/merge-group 集成 lane 合并为单 runner job，减少 Rust 套件的重复编译 |
| **依赖批次** | [#7906](https://github.com/nearai/ironclaw/pull/7906) | everything-else 组 +13；#7835 待合并，actions 组 +5 |

**推进度评估**：项目在"记忆系统重建 + 通知系统完善 + MCP 工具链健壮性 + 上下文压缩"四条主线上都在同日完成里程碑，整体向前迈进了一小步但属于"基础设施级"而非"用户可见特性级"。

---

## 4. 社区热点

按评论数与互动密度排序，今日最值得关注的 5 条讨论：

### 🔥 #7891 — `gmail.get_message` 一次 14.3 秒推理开销 [10 评论]
- 链接：https://github.com/nearai/ironclaw/issues/7891
- 作者：@henrypark133
- **热度来源**：实测数据触目惊心——两次 `gmail.get_message` 返回 274ms / 290ms，**整轮 19.7 秒**中有 **19.2 秒是模型推理**，根因被定位为"49,152 字节原始 MIME 头未压缩直接推入 prompt"。该议题同时挂出了 #7960（[HTML 复杂度上限](https://github.com/nearai/ironclaw/issues/7960)）作为后续修复点。
- **诉求**：暴露 capability payload 的"未投影"状态，让模型与运维侧能看见上下文污染。

### 🥈 #7824 — Pi 风格上下文压缩屏障 [4 评论]
- 链接：https://github.com/nearai/ironclaw/issues/7824
- **热度来源**：直接给出了 PinchBench 上 147 任务的对照数据——`54.4%` 准确率 vs `60.5%` 的旧 shell，但 token 量从 55.1M 飙到 227.7M（费用 $2.52 → $10.31）。该议题成为 #7954、#7962 共同的设计母题。

### 🥉 #3278 — MissionService 与 TurnCoordinator 集成 [3 评论，已关闭]
- 链接：https://github.com/nearai/ironclaw/issues/3278
- 一条跟踪型 issue 从 5 月 6 日穿越到 8 月 27 日终于关闭，标志着早期"Reborn 协议"骨架彻底完工。

### #6590 — Windows `serve` 启动失败 [3 评论]
- 链接：https://github.com/nearai/ironclaw/issues/6590
- 报告 `ironclaw serve` 在 `local-dev` / `local-dev-yolo` 下因 workspace root 与 `/skills` 默认技能根目录重叠直接报错。**目前无对应修复 PR**，是 Windows 用户入门第一道坎。

### #7276 — Reborn 跨会话记忆自动沉淀 [2 评论]
- 链接：https://github.com/nearai/ironclaw/issues/7276
- 该 epic 今日衍生出 5 条子议题（#7947/#7948/#7949/#7950/#7951/#7952/#7953），构成目前最大的"长链路特性集群"。

---

## 5. Bug 与稳定性

按风险等级排列：

| 等级 | 标识 | 描述 | 链接 | 修复 PR 状态 |
|------|------|------|------|--------------|
| 🔴 **中-高** | #7903 | 决策 spike：持久化 per-user 沙盒执行器仍跑在 trusted host 内核，每加一个 CLI 就要扩 host→sandbox 命令通道 | [link](https://github.com/nearai/ironclaw/issues/7903) | 待决策，无 PR |
| 🟠 **中** | #7891 | gmail 能力载荷 49 KiB 未压缩直接进 prompt，单轮 14.3s 推理 | [link](https://github.com/nearai/ironclaw/issues/7891) | **#7960 已开但未合**（HTML 复杂度）；邮件侧归一化 #7944 已合 |
| 🟠 **中** | #7964 | 托管 MCP 大目录遇上限返回 Err 直接丢弃全部工具，错误静默 | [link](https://github.com/nearai/ironclaw/pull/7964) | **修复 PR #7964 已提待合并** |
| 🟡 **中** | #7955 | Telegram 个人账号绑定在管理员未配 `api_id/api_hash` 时只显示"Something went wrong" | [link](https://github.com/nearai/ironclaw/issues/7955) | 无 PR |
| 🟡 **中** | #7956 | 未配对用户在 Telegram 收到 `/start` 后被回执命令清单而不是配对提示 | [link](https://github.com/nearai/ironclaw/issues/7956) | 无 PR |
| 🟡 **中** | #7856 | MCP 工具发现静默跳过 camelCase 名称 | [link](https://github.com/nearai/ironclaw/issues/7856) | 无 PR |
| 🟢 **低** | #6590 | Windows `serve` workspace root 与 `/skills` 冲突 | [link](https://github.com/nearai/ironclaw/issues/6590) | 无 PR |
| 🟢 **低** | #7972 | 被剥离的 preview 让模型陷入"工具完成但无内容"无限重试 | [link](https://github.com/nearai/ironclaw/pull/7972) | **修复 PR #7972 已提待合并** |
| 🟢 **低** | #6590 | （同上） | — | — |

**稳定性健康度**：🟡 中性偏弱。一日内仍有 **6 条以上中等风险 Bug 处于"无修复"状态**，社区贡献者集中在性能层（@henrypark133、@pranavraja99、@serrrfirat），但体验类/Telegram 端问题缺乏专职 owner。

---

## 6. 功能请求与路线图信号

正在强烈投票/讨论方向，多条已有 PR 配套落地：

### A. **记忆/学习系统（第 4 代架构）**
- 母议题：[#7276](https://github.com/nearai/ironclaw/issues/7276)  
- 配套提案（今日新增/活跃，全部由 @serrrfirat 发起）：
  - [#7947](https://github.com/nearai/ironclaw/issues/7947) 共享学习路由 + 持久化候选库
  - [#7948](https://github.com/nearai/ironclaw/issues/7948) 稳定 commit/feedback/forget capability
  - [#7949](https://github.com/nearai/ironclaw/issues/7949) 确定性入站 + 自动/审批晋升
  - [#7950](https://github.com/nearai/ironclaw/issues/7950) native/mem0/Mnesis 适配器
  - [#7951](https://github.com/nearai/ironclaw/issues/7951) 已入站 provider 记忆的有界主动召回
  - [#7952](https://github.com/nearai/ironclaw/issues/7952) 学习审阅结果路由到技能蒸馏
  - [#7953](https://github.com/nearai/ironclaw/issues/7953) 可观测性、评估与 provider 迁移门槛
- **首版落地图**：PR **#7958**（[feat(learning): add shared review router](https://github.com/nearai/ironclaw/pull/7958)）已就绪；PR #7920 已关闭，意味着"Inference 设置中暴露 learned-skill 提取开关"的 UI 入口已实现。**下一版本有望看到 `MemoryService` 接口 + LRR 学习审阅路由器先行可用**。

### B. **通知系统**
- 母议题在 [#7901](https://github.com/nearai/ironclaw/pull/7901)、[#7900](https://github.com/nearai/ironclaw/pull/7900)、[#7899](https://github.com/nearai/ironclaw/pull/7899) 三条 XL 级 PR 共同推动——Inbox 持久化认证门、资源阻塞、自动化预运行失败三类通知。**下一窗口内很可能合入**。

### C. **模型能力可视化**
- [#7969](https://github.com/nearai/ironclaw/issues/7969)、[#7970](https://github.com/nearai/ironclaw/issues/7970)、[#7971](https://github.com/nearai/ironclaw/issues/7971) 三条串联，把 NEAR AI 模型的多模态 capability 端到端暴露到 WebUI 的所有模型选择器。**纯增量特性，预计快速合并**。

### D. **遥测/BI**
- [#7961](https://github.com/nearai/ironclaw/pull/7961) 提议"租户隔离 BI 遥测"，通过 `ScopedFilesystem` 落地、不复用 libSQL/PostgreSQL 驱动。**风险中等**，需观察审查。

---

## 7. 用户反馈摘要

从 Issues 评论中可识别出的真实场景与痛点：

1. **Gmail 工作流被性能反噬** — #7891 用户实测：一次中等复杂度的两封邮件查询浪费 14.3s 推理 = 接近 `$0.20+/轮` 隐性成本。这是项目**最强烈的现实场景反馈**：日常邮件处理是 IronClaw 当前目标用户的核心使用形态，但能力未做投影，导致 95%+ 的 prompt token 是被白白消耗的。

2. **上下文成本失控** — #7824 引用 PinchBench 147 任务数据：旧 shell 准确率反而比新代码路径高 6 个百分点。这是**逆向的用户反馈信号**——社区已经分裂为"功能更强但更慢的新代码派"与"更便宜的旧 shell 派"。

3. **跨会话记忆缺位** — #7276 明确指出：用户在普通对话中"提供过的信息和确认"在新对话里找不到。这是**最普遍的用户痛点**，但解决路径涉及架构重写，所以仍未上线。

4. **Telegram 首次体验失衡** — #7955/#7956 显示：**未配对用户面对的是命令清单或通用错误**，而非引导说明。属于典型的"onboarding UX 裂口"。

5. **CI 反馈** — #7967 反映出团队意识到"集成测试清单四处分散"是长期维护负担，正在做精简。

6. **失败分类的工程纪律** — #7937 每日失败分类 issue（officeqa 套件 59 个 fail 主要是模型质量而非工程问题）体现团队开始**系统性区分"模型问题"与"工程问题"**，有助于优化排期。

满意方向暂无明显信号，社区仍以问题提交为主，反馈闭环尚需 PR 合并后再观察。

---

## 8. 待处理积压（提醒维护者）

| 编号 | 创建日 | 主题 | 状态 | 关注优先级 |
|------|--------|------|------|-----------|
| [#6590](https://github.com/nearai/ironclaw/issues/6590) | 2026-07-23 | Windows `serve` 因 workspace root 与 `/skills` 重叠启动失败 | 36 天 open，无 PR | 🔴 高 — Windows 入门用户被完全挡住 |
| [#7856](https://github.com/nearai/ironclaw/issues/7856) | 2026-08-24 | MCP camelCase 工具名静默丢失 | 4 天 open，无 PR | 🟠 中 — 影响所有 hosted MCP 用户 |
| [#7955](https://github.com/nearai/ironclaw/issues/7955) | 2026-08-27 | Telegram 配对错误显示通用"Something went wrong" | 1 天 open，无 PR | 🟡 中 |
| [#7956](https://github.com/nearai/ironclaw/issues/7956) | 2026-08-27 | Telegram `/start` 给未配对用户返回命令清单 | 1 天 open，无 PR | 🟡 中 |
| [#7835](https://github.com/nearai/ironclaw/pull/7835) | 2026-08-23 | dependabot: actions 组 +5（含 `setup-node` v7 升级） | 5 天待合并 | 🟡 中 — 依赖安全窗口不应拖太久 |
| [#7900](https://github.com/nearai/ironclaw/pull/7900)、[#7901](https://github.com/nearai/ironclaw/pull/7901)、[#7899](https://github.com/nearai/ironclaw/pull/7899) | 2026-08-26 | 通知系统三条 XL PR | 待合并 |

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

<think>Let me analyze the GitHub data for LobsterAI to generate a comprehensive daily report for 2026-08-28.

Key observations:
1. 5 Issues all CLOSED, all marked [stale] - these are older issues being closed due to inactivity
2. 13 PRs all CLOSED - high activity in PR closures
3. 1 new release: 2026.8.26
4. Most active contributors: @liuzhq1986 (multiple PRs), @fisherdaddy, @Mind-Hand, @liugang519
5. Multiple PRs are related to release/2026.8.24 branch - looks like release preparation/merging

Let me structure the report properly. I need to:
- Be objective and data-driven
- Include GitHub links
- Highlight project health
- Note that all issues were marked [stale] - this is important context

Looking at the issues:
- #1179: Sandbox forced in 3.31 - user complaint
- #1173: Uninstalled but still running - very concerning security/trust issue
- #1180: Modifying custom agent triggers gateway restart loop
- #1174: Feature request - multiple custom model providers
- #1162: Testing coverage for openclaw modules

PRs of note:
- #2572: Release/2026.8.24 - major release merge
- #2568: more models collapse feature
- #2551: app update preserve ready state
- #2566: Windows installer hardening
- #2565: library list query optimization
- #1166: prevent duplicate custom agent names
- #1163: scheduled task "run now" feedback
- #1165: Vitest unit tests for openclaw

Let me write this in Chinese as the request is in Chinese.</think>

# LobsterAI 项目日报
**日期：2026-08-28**

---

## 1. 今日速览

LobsterAI 今日呈现出**典型的版本收尾期特征**：主线活动围绕 `release/2026.8.24` 分支的整合与闭环展开，13 个 PR 全部已关闭（合并/关闭），5 个 Issues 全部因 [stale] 被批量清理（无新增/活跃 Issue）。核心贡献者 `@liuzhq1986` 与 `@fisherdaddy` 高频提交，多项修复聚焦 Windows 安装包、账户菜单与渲染层稳定性。整体**健康度良好**，版本发布节奏稳健，社区需求侧仍有未解问题值得关注。

---

## 2. 版本发布

### 🆕 v2026.8.26（2026-08-26 发布）
本次 Release 主要包含以下 installer 相关修复：
- **PR #2511**：`fix(installer): support silent upload-first web builds` — 支持静默安装场景下的"优先上传"Web 构建
- **PR #2512**：`fix(installer): hide banner for dictbind silent package` — 隐藏字典绑定静默包的横幅

**影响范围**：仅 Windows 安装包行为调整，对已安装用户无破坏性变更。升级建议：直接升级即可，无须手动迁移。

🔗 [Release 链接](https://github.com/netease-youdao/LobsterAI/releases/tag/2026.8.26)（基于 PR 数据推断）

---

## 3. 项目进展（今日合并/关闭的关键 PR）

| PR | 标题 | 贡献者 | 推进方向 |
|---|---|---|---|
| [#2572](https://github.com/netease-youdao/LobsterAI/pull/2572) | **Release/2026.8.24** | @liuzhq1986 | 主线版本分支整合，跨 renderer/build/docs/main/openclaw/cowork/artifacts 多模块 |
| [#2568](https://github.com/netease-youdao/LobsterAI/pull/2568) | feat: collapse more models and sync sidebar banner schedules | @Mind-Hand | 合并"更多模型"折叠功能，服务端协同侧边栏横幅调度，支持客户端版本网关控制与缓存恢复 |
| [#2551](https://github.com/netease-youdao/LobsterAI/pull/2551) | fix: app update preserve ready state | @fisherdaddy | 修复应用更新流程中"ready state"丢失的回归问题 |
| [#2566](https://github.com/netease-youdao/LobsterAI/pull/2566) | fix: win installer truncated payload hardening | @fisherdaddy | Windows 安装包载荷截断加固，提升极端环境下的安装成功率 |
| [#2565](https://github.com/netease-youdao/LobsterAI/pull/2565) | fix(library): 优化列表查询切换与重新加载状态 | @liugang519 | 列表查询切换流畅度优化，统一加载/骨架屏/无障碍状态管理，**附带测试补充** |
| [#2570](https://github.com/netease-youdao/LobsterAI/pull/2570) | fix(account): resolve phone masking merge conflict | @liuzhq1986 | 合并冲突修复，账户菜单手机号脱敏（136\*\*\*\*7834），测试数据脱敏 |
| [#2571](https://github.com/netease-youdao/LobsterAI/pull/2571) | Liuzhq/fix phone nickname | @liuzhq1986 | 手机号昵称修复 |
| [#2569](https://github.com/netease-youdao/LobsterAI/pull/2569) | Liuzhq/fix phone nickname | @liuzhq1986 | 同上分支迭代 |
| [#1165](https://github.com/netease-youdao/LobsterAI/pull/1165) | 为 openclawMemoryFile 与 openclawLocalTimeContextPrompt 补充 75 个 Vitest 单测 | @MaoQianTu | 补齐 OpenClaw 记忆模块与本地时间上下文模块的零测试覆盖 |
| [#1163](https://github.com/netease-youdao/LobsterAI/pull/1163) | fix(定时任务): "立即运行"交互反馈与乐观更新 | @gongzhi-netease | 修复定时任务"立即运行"无反馈问题，引入乐观更新 + Gateway 同步 |
| [#1166](https://github.com/netease-youdao/LobsterAI/pull/1166) | fix(agent): prevent duplicate custom agent names | @leedalei | 自建 Agent 重名校验，防止列表歧义 |

**项目整体评估**：今日向 2026.8.24 主版本推进了一大步，覆盖了 UX（列表/任务反馈）、稳定性（更新状态、安装加固）、可测试性（OpenClaw 单测补齐）、功能（多模型折叠）四个维度。

---

## 4. 社区热点

由于今日所有 Issue 均为 **stale 批量关闭**，无新增讨论。但回顾涉及的用户诉求：

- **[#1173 卸载后仍能运行](https://github.com/netease-youdao/LobsterAI/issues/1173)** —— 评论 2 次，涉及用户隐私与信任敏感面（"偷偷留后门"），是潜在的舆情风险点。
- **[#1179 强制沙箱](https://github.com/netease-youdao/LobsterAI/issues/1179)** —— 3 评论，针对 3.31 版本强制沙箱策略，部分用户回滚到 3.30，反映**策略变更的沟通不足**。
- **[#1180 自建 agent 图标修改触发网关重启](https://github.com/netease-youdao/LobsterAI/issues/1180)** —— 体现 Agent 配置变更链路存在脆弱性。

---

## 5. Bug 与稳定性

| 严重度 | 问题 | 链接 | 是否有 Fix |
|---|---|---|---|
| 🔴 高 | 卸载后程序仍可运行，可继续调用飞书等外部服务 | [#1173](https://github.com/netease-youdao/LobsterAI/issues/1173) | ❌ 无 |
| 🟠 中 | 修改自建 Agent 图标导致网关反复重启 | [#1180](https://github.com/netease-youdao/LobsterAI/issues/1180) | ❌ 无 |
| 🟡 低 | 应用更新后丢失 ready state | (隐含在 [#2551](https://github.com/netease-youdao/LobsterAI/pull/2551)) | ✅ 已修复 |
| 🟡 低 | Windows 安装包载荷截断 | (隐含在 [#2566](https://github.com/netease-youdao/LobsterAI/pull/2566)) | ✅ 已修复 |
| 🟡 低 | 自建 Agent 允许重名 | (隐含在 [#1166](https://github.com/netease-youdao/LobsterAI/pull/1166)) | ✅ 已修复 |
| 🟢 已修 | 定时任务"立即运行"无反馈 | (隐含在 [#1163](https://github.com/netease-youdao/LobsterAI/pull/1163)) | ✅ 已修复 |

**注**：高严重度 Issue #1173 与 #1180 均因长期无响应被自动关闭，存在被遗漏风险，建议维护者手动 reopen 并跟进。

---

## 6. 功能请求与路线图信号

- **[#1174 增加多个自定义模型提供商](https://github.com/netease-youdao/LobsterAI/issues/1174)** —— 唯一明确的功能请求，源于"弃用旧提供商时想保留旧的"场景。目前无对应 PR，**可能进入下个版本的需求池**。
- **[#2568 More Models 折叠](https://github.com/netease-youdao/LobsterAI/pull/2568)** —— 已合并，从侧面印证"模型数量增多"的产品演进方向，与 #1174 共同反映**模型供应商管理**的优先级正在上升。
- **OpenClaw 单测补齐（[#1165](https://github.com/netease-youdao/LobsterAI/pull/1165)）** —— 75 个测试覆盖，反映**质量工程投入在加强**，可能预示后续 OpenClaw 模块将有更密集迭代。

---

## 7. 用户反馈摘要

> **痛点 1：策略变更沟通缺位**  
> 用户 @syrphid 在 [#1179](https://github.com/netease-youdao/LobsterAI/issues/1179) 中反映 3.31 强制沙箱无说明、找不到关闭入口，被迫回滚 3.30。这表明**重大行为变更需要更明确的发布说明与配置入口**。

> **痛点 2：卸载不彻底引发信任危机**  
> 用户 @773780238 在 [#1173](https://github.com/netease-youdao/LobsterAI/issues/1173) 情绪强烈（"偷偷留后门"）。这是 Windows 上**安装包生命周期管理**的典型问题（卸载器未终止运行中的进程或未清理用户态服务），需要官方正式回应。

> **痛点 3：Agent 配置变更的鲁棒性**  
> [#1180](https://github.com/netease-youdao/LobsterAI/issues/1180) 反映简单修改图标就触发网关重启循环，提示**配置变更路径缺乏原子性与回滚机制**。

> **满意信号**  
> 贡献者侧的 PR 描述显示，社区开发者在自驱补齐测试覆盖（[#1165](https://github.com/netease-youdao/LobsterAI/pull/1165)）、修复细节 UX（[#1163](https://github.com/netease-youdao/LobsterAI/pull/1163)、[#2565](https://github.com/netease-youdao/LobsterAI/pull/2565)），说明社区**参与意愿高、内驱力强**。

---

## 8. 待处理积压

| 类型 | 编号 | 标题 | 状态 |
|---|---|---|---|
| ⚠️ 安全信任 | [#1173](https://github.com/netease-youdao/LobsterAI/issues/1173) | 卸载后程序仍可运行 | stale 关闭，建议 reopen |
| ⚠️ 稳定性 | [#1180](https://github.com/netease-youdao/LobsterAI/issues/1180) | 修改自建 agent 触发网关反复重启 | stale 关闭，建议 reopen |
| 💡 功能请求 | [#1174](https://github.com/netease-youdao/LobsterAI/issues/1174) | 增加多个自定义模型提供商 | stale 关闭，无对应 PR |
| ❓ 用户求助 | [#1179](https://github.com/netease-youdao/LobsterAI/issues/1179) | 3.31 强制沙箱如何关闭 | stale 关闭，需文档补齐 |

**提醒维护者**：所有今日关闭的 Issue 均带 [stale] 标记，但其中 #1173（卸载残留）与 #1180（网关重启）具有**用户可复现的安全/稳定性后果**，建议在下个工作日主动 reopen 并分配处理，避免社区信任损耗。

---

*报告基于 2026-08-28 公开 GitHub 数据生成。*

</details>

<details>
<summary><strong>QwenPaw</strong> — <a href="https://github.com/agentscope-ai/QwenPaw">agentscope-ai/QwenPaw</a></summary>

<think>The user wants me to generate a project daily report for QwenPaw based on the GitHub data provided. Let me analyze the data carefully and structure it according to the requested 8 sections.

Let me extract key information:

**Overview:**
- Past 24 hours: 49 Issues updated (16 new/active, 33 closed), 47 PRs updated (28 pending, 19 merged/closed), 1 new release

**Release:**
- v2.2.0-beta.2 with two PRs (workspace startup cleanup, e2e test coverage)

**Key Issues (by comment count):**
1. #7318 (10 comments) - Hub multi-tenant edition discussion
2. #6314 (9 comments) - RemoteProtocolError bug
3. #7298 (8 comments) - OpenSSL 3.0.x TLS issue
4. #2814 (7 comments) - Multi-agent chat history empty
5. #4770 (6 comments) - Left side session column order
6. #2777 (5 comments) - GPT-5.x max_tokens error
7. #4237 (5 comments) - Running shell commands observability
8. #6273 (5 comments) - Task tracking concurrency
9. #6083 (5 comments) - Desktop workspace access button
10. #4011 (4 comments) - Fallback model option
11. #3751 (4 comments) - Windows tray icon
12. #7316 (4 comments) - Tool result pruning
13. #4865 (4 comments, 2 likes) - Web console write_file not streaming
14. #6427 (3 comments) - WebView2 crash
15. #6124 (3 comments) - Editable install memory leak
16. #7335 (3 comments) - Prompt cache hit rate observability
17. #5718 (3 comments) - Auto switch model
18. #5030 (3 comments) - WeChat channel double reply
19. #3883 (3 comments) - Skills unit test support
20. #5344 (3 comments) - /api/console/chat drops messages
21. #4217 (3 comments) - Concurrent cron tasks empty replies
22. #7296 (3 comments) - OpenAI Responses multi-turn fails
23. #7355 (3 comments) - Android Chrome no newline
24. #7366 (3 comments) - platform.agentscope.io deployment version
25. #3014 (2 comments) - Isolated jobs sessions
26. #4986 (2 comments) - Real-time shell command output
27. #3187 (2 comments) - Conversation archive feature
28. #5622 (2 comments) - Windows Desktop tray
29. #7379 (2 comments) - PDF Chinese filename error
30. #4817 (2 comments) - History conversation sort

**Notable PRs:**
- #7328 - Bump Python to 3.13 (CLOSED - related to #7298)
- #7384 - A-tier deferred startup architecture (CLOSED, merged)
- #7348 - Release notes for v2.2.0
- #7378 - QwenPaw native mobile experience (DO NOT MERGE - draft)
- #7337 - migrated max_tokens
- #7380 - cut test suite 41%
- #7382 - AgentScopeRuntimeWebUI 1.2.0
- #7133 - ReMe 0.4.1.9 upgrade
- #7330 - Streamable-HTTP dual-protocol
- #7329 - MCP session RPCs abort
- #7381 - DingTalk stale stream connections
- #7320 - Custom OpenAI providers model discovery
- #7386 - Migrate model output limits
- #7267 - Channel contract checks portable
- #6874 - MCP tool call timeout
- #7383 - Plugin module sweep
- #7183 - Workspace-scoped preload Skills
- #7057 - User-local bin PATH
- #5992 - Per-session model overrides
- #7299 - Conflict chat payloads
- #7331 - Bound oversized tool results
- #7384 (already mentioned)

Let me now structure this into a comprehensive report in Chinese.</think>

# QwenPaw 项目日报 · 2026-08-28

> 数据来源：[agentscope-ai/QwenPaw](https://github.com/agentscope-ai/QwenPaw) | 统计窗口：过去 24 小时

---

## 1. 今日速览

QwenPaw 在过去 24 小时继续保持高活跃度，**49 条 Issues 更新（16 条活跃/新开、33 条关闭）与 47 条 PRs 更新（28 条待合并、19 条已合并/关闭）** 同步推进，并伴随 **v2.2.0-beta.2** 的发布。议题关闭率（33/49 ≈ 67%）与 PR 处理率（19/47 ≈ 40%）显示出项目对历史问题持续清理的同时，也在围绕 2.2.0 大版本做密集收尾。当日讨论焦点集中在 **多租户 Hub 路线图**、**TLS/网络栈升级**（OpenSSL 3.0 → 3.5）、**Provider/MCP 兼容性** 以及 **移动端体验探索** 等方向，整体项目健康度良好，处于版本迭代的关键节点。

---

## 2. 版本发布

### 🚀 v2.2.0-beta.2

本次为 2.2.0 的第二个 beta 版本，包含 2 项关键变更：

| PR | 作者 | 说明 |
|---|---|---|
| [#7194](https://github.com/agentscope-ai/QwenPaw/pull/7194) | @jinliyl | `fix(workspace)`：让启动失败时的清理流程具备 **cancellation-safety**，避免异常路径下资源/任务悬挂 |
| [#7327](https://github.com/agentscope-ai/QwenPaw/pull/7327) | @yutai78786 | `test(e2e)`：新增 **23 个针对性 Console e2e 用例** 并扩展断言，提升前端回归覆盖 |

> 📌 **迁移注意**：beta 版本不保证数据兼容性，建议在测试环境升级；生产用户建议等待后续 RC/GA。同步建议关注 PR #7348（[v2.2.0 release notes](https://github.com/agentscope-ai/QwenPaw/pull/7348)）以了解完整变更清单。

---

## 3. 项目进展（已合并/关闭的代表性 PR）

| PR | 标题 | 影响 |
|---|---|---|
| [#7384](https://github.com/agentscope-ai/QwenPaw/pull/7384) | `perf(app)`：共享 A-tier 延迟启动架构 | ⭐ **关键基础设施**。将 ASGI 启动运行时统一给 QwenPaw app 和 Tauri 后端使用，在默认 agent 可聊天时即标记 Ready，将昂贵的导入与启动工作延后暴露。对桌面端启动速度与可控上线体验提升显著。 |
| [#7328](https://github.com/agentscope-ai/QwenPaw/pull/7328) | `fix(ci)`：桌面打包与 Docker 镜像 Python 升级至 3.13 | ⭐ **修复 OpenSSL 3.0.x TLS 栈问题**（关联 #7298）。桌面与 Docker 渠道统一从 OpenSSL 3.0 跨代到 3.5，解决运营商 DPI 重置 TLS 握手的兼容性故障。 |
| [#7348](https://github.com/agentscope-ai/QwenPaw/pull/7348) | `chore`：v2.2.0 release notes | 2.2.0 版本说明文档，正在编辑完善。 |
| [#7299](https://github.com/agentscope-ai/QwenPaw/pull/7299) | `fix(console)`：拒绝冲突的 chat payload | 修复 #5344：第二个非重连 `POST /api/console/chat` 在已有 run 时被静默接收却未实际执行的问题，改为返回明确的冲突错误，避免用户消息丢失。 |
| [#7194](https://github.com/agentscope-ai/QwenPaw/pull/7194) | `fix(workspace)`：启动失败 cleanup cancellation-safe | 已被合入 v2.2.0-beta.2 |
| [#7327](https://github.com/agentscope-ai/QwenPaw/pull/7327) | `test(e2e)`：Console 23 个 e2e 用例 | 已被合入 v2.2.0-beta.2 |

**综合评估**：今日项目在「**启动可靠性 → Provider/MCP 兼容性 → 用户面可用性 → e2e 覆盖**」四个维度均有实质推进。#7384 与 #7328 是面向下一版本的**基础设施级**改进，影响面大。

---

## 4. 社区热点（评论/讨论最活跃）

| 排名 | Issue | 主题 | 评论数 | 关注度 |
|---|---|---|---|---|
| 🔥 1 | [#7318](https://github.com/agentscope-ai/QwenPaw/issues/7318) | **QwenPaw Hub 多租户版路线图征集**（2.2.0 推出） | 10 | ⭐ |
| 2 | [#6314](https://github.com/agentscope-ai/QwenPaw/issues/6314) | Agent Error: RemoteProtocolError（QwenPaw 主动关闭 TLS 连接） | 9 | |
| 3 | [#7298](https://github.com/agentscope-ai/QwenPaw/issues/7298) | Desktop & Docker 的 OpenSSL 3.0.x TLS 栈受运营商 DPI 干扰 | 8 | |
| 4 | [#2814](https://github.com/agentscope-ai/QwenPaw/issues/2814) | 多 agent 聊天中被调用方历史为空 | 7 | |
| 5 | [#4770](https://github.com/agentscope-ai/QwenPaw/issues/4770) | 左侧会话界面列顺序优化（按更新时间置顶） | 6 | |
| 6 | [#4865](https://github.com/agentscope-ai/QwenPaw/issues/4865) | Web Console 中 `write_file` 不流式渲染，长生成时界面像卡死（👍2） | 4 | 👍 |

**诉求解读**：

- **#7318（Hub 多租户）** 是项目从「个人 AI 助手」向「团队协作平台」演进的关键信号。社区围绕「多用户访问、admin 管理 skills、共享工作空间、统一计费/限额」展开讨论，反映企业/团队部署需求已被官方提上日程。
- **#6314 / #7298** 共同指向网络栈问题：客户端主动关闭连接 + 老旧 OpenSSL 在 DPI 环境下被 reset。**#7328 已正式关闭 #7298**，是当日修复闭环的典型案例。
- **#4865（写文件不流式）** 是高赞功能改进：用户希望工具调用参数（特别是长文件内容）能像 token 一样增量渲染，缓解误以为「卡死」的体验问题。

---

## 5. Bug 与稳定性

按严重程度排序（结合评论数、复现稳定性与影响面）：

| 等级 | Issue | 标题 | 是否有 Fix PR | 状态 |
|---|---|---|---|---|
| 🔴 高 | [#7298](https://github.com/agentscope-ai/QwenPaw/issues/7298) | OpenSSL 3.0.x TLS 在运营商 DPI 下被 reset | ✅ [#7328](https://github.com/agentscope-ai/QwenPaw/pull/7328) | 已合并（合入下个版本） |
| 🔴 高 | [#6427](https://github.com/agentscope-ai/QwenPaw/issues/6427) | WebView2 在 v2.0.0+post.4 启动约 7 秒后崩溃（`msedge.dll+0x36c7f6d`，异常码 `0x80000003`） | ❌ 暂未见 PR | 待跟进 |
| 🟠 中 | [#6314](https://github.com/agentscope-ai/QwenPaw/issues/6314) | RemoteProtocolError：peer closed connection without complete body | ❌ 待跟进 | 今日有讨论更新 |
| 🟠 中 | [#6124](https://github.com/agentscope-ai/QwenPaw/issues/6124) | Editable install 启动时 36 个 ReMe 后台循环吃光 48GB+ | ❌ 待跟进（相关 PR #7133 在升级 ReMe 0.4.1.9） | 长期 |
| 🟠 中 | [#7379](https://github.com/agentscope-ai/QwenPaw/issues/7379) | 处理中文长文件名 PDF 时报 UNKNOWN_AGENT_ERROR（无 connection adapter） | ❌ 待跟进 | 新报告 |
| 🟡 低 | [#7296](https://github.com/agentscope-ai/QwenPaw/issues/7296) | OpenAI Responses 多轮在无状态上游（OpenCode Zen/Go Muse Spark）报 400 reasoning item expired | ❌ 待跟进 | |
| 🟡 低 | [#5344](https://github.com/agentscope-ai/QwenPaw/issues/5344) | `/api/console/chat` 在 agent 忙时返回 200 却丢消息 | ✅ [#7299](https://github.com/agentscope-ai/QwenPaw/pull/7299) | 已合并 |
| 🟡 低 | [#4217](https://github.com/agentscope-ai/QwenPaw/issues/4217) | 同 cron 同时触发 + share_session=true 时返回空回复 | ❌ 待跟进 | |
| 🟡 低 | [#5030](https://github.com/agentscope-ai/QwenPaw/issues/5030) | 微信频道开启主动模式后同一问题回复两次 | ❌ 待跟进 | |

**稳定性观察**：v2.2.0 周期内 #6427（WebView2 渲染进程崩溃）和 #6124（ReMe 内存爆炸）属于影响"是否能跑起来"的 P0 级问题，建议维护者优先 review；#7379 是新出现的中文文件名编码问题，属于路径处理兼容性 bug。

---

## 6. 功能请求与路线图信号

### 可能进入下个版本的功能需求

| Issue | 标题 | 状态信号 |
|---|---|---|
| [#4237](https://github.com/agentscope-ai/QwenPaw/issues/4237) | In-chat 可观测性：运行中 shell 命令的查看/终止/延长超时 | 复用了现有 ApprovalCard/push-message 管线，工程量可控 |
| [#6083](https://github.com/agentscope-ai/QwenPaw/issues/6083) | Desktop 窗口增加工作区产出物快捷访问按钮 | 与 #7384 共享启动架构改进契合，可能顺势实现 |
| [#4011](https://github.com/agentscope-ai/QwenPaw/issues/4011) | Fallback 模型选项 | 与 #5718 自动切换模型诉求一致；可与 per-session overrides（#5992）协同 |
| [#3751](https://github.com/agentscope-ai/QwenPaw/issues/3751) + [#5622](https://github.com/agentscope-ai/QwenPaw/issues/5622) | Windows 桌面系统托盘支持 | 桌面端 UX 高频诉求 |
| [#3187](https://github.com/agentscope-ai/QwenPaw/issues/3187) | 会话归档分组 | Console 列表管理刚需 |
| [#3014](https://github.com/agentscope-ai/QwenPaw/issues/3014) | Scheduled Job 支持隔离/自定义 session | 与 #6273 的任务追踪语义统一方向契合 |
| [#4865](https://github.com/agentscope-ai/QwenPaw/issues/4865) | `write_file` 流式渲染 | 高赞（👍2），是 e2e 覆盖的目标区域 |

### 已开放中的相关 PR（很可能在 2.2.0 后合入）

- [#6874](https://github.com/agentscope-ai/QwenPaw/pull/6874) **MCP tool-call timeout 可配置**（closes #6724）
- [#7183](https://github.com/agentscope-ai/QwenPaw/pull/7183) **Workspace-scoped Skills 预加载配置**（受 Claude Code subagents 设计启发）
- [#5992](https://github.com/agentscope-ai/QwenPaw/pull/5992) **Per-session 模型覆盖**（first-time-contributor，等 review）
- [#7057](https://github.com/agentscope-ai/QwenPaw/pull/7057) **Shell subprocess 注入 user-local bin PATH**（ready-for-human-review）

### 远期路线图探索

- [#7378](https://github.com/agentscope-ai/QwenPaw/pull/7378) **QwenPaw Mobile 原生体验（Expo/React Native）**——明确写了 `DO NOT MERGE`，是面向 iOS/Android 的草案 PR，覆盖 Chats/Agents/Community/Workbench 四大模块。属战略性探索。

---

## 7. 用户反馈摘要

### 🔴 痛点类

1. **网络/连接层不稳定**：多个 Issue 反映在某些网络环境（运营商 DPI、VPN 切换、Wi-Fi 漫游）下 QwenPaw 主动关闭或被外部 reset 连接（[#6314](https://github.com/agentscope-ai/QwenPaw/issues/6314) / [#7298](https://github.com/agentscope-ai/QwenPaw/issues/7298)）。这是阻碍企业/团队场景的关键障碍。
2. **桌面端体验细节缺失**：系统托盘（[#3751](https://github.com/agentscope-ai/QwenPaw/issues/3751) / [#5622](https://github.com/agentscope-ai/QwenPaw/issues/5622)）、工作区产物一键访问（[#6083](https://github.com/agentscope-ai/QwenPaw/issues/6083)）、移动浏览器输入换行（[#7355](https://github.com/agentscope-ai/QwenPaw/issues/7355)）——基础体验被多次呼吁。
3. **大输出/长任务「假卡死」**：写大文件（[#4865](https://github.com/agentscope-ai/QwenPaw/issues/4865)）、执行 shell（[#4986](https://github.com/agentscope-ai/QwenPaw/issues/4986)）等场景下没有可见增量，用户无法判断是否在跑——这是工具类 agent 通用痛点。
4. **多 agent / 任务并发语义不清**：[#2814](https://github.com/agentscope-ai/QwenPaw/issues/2814)、[#4217](https://github.com/agentscope-ai/QwenP

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/NousResearch/hermes-agent">NousResearch/hermes-agent</a></summary>

<think>The user wants me to generate a project daily report for Hermes Agent based on the GitHub data provided. Let me analyze the data carefully and create a structured report in Chinese.

Key observations:
1. **Release**: v2026.8.27 / v0.20.6 - a patch release rolling up ~525 PRs since v0.20.5
2. **Issues**: 50 updates - 39 new/active, 11 closed
3. **PRs**: 50 updates - 38 pending, 12 merged/closed
4. Many closed PRs are fixing related vision/image issues (xAI, OpenAI/Codex, Kimi corrupt image)
5. Multiple closed skill-guard false positive fixes
6. Several Windows-specific issues (profile management, update flow, host_supervisor)
7. Desktop issues prominent: profile switching, sessions, bot mode, TUI

Hot issues (most comments):
- #69078 (14 comments, CLOSED) - xAI grok-4.5 invalid PNG bricks session
- #96282 (14 comments, CLOSED) - Desktop boot timeout after stdout redirect
- #77111 (10 comments, OPEN) - RFC for RealtimeVoiceProvider ABC
- #90477 (9 comments, OPEN) - Desktop profile switch on SSH spawns wrong backend
- #80670 (5 comments, OPEN) - Desktop "Could not react" 4040

Notable merged/closed PRs:
- #97059 - consolidates corrupt-image 400 fix across OpenAI/xAI/Kimi
- #97060 - consolidates skills-guard false-positive fixes
- #29864 - Codex invalid image retry
- #81326 - Kimi image 400 strip
- #69104 - xAI Invalid PNG recovery
- #60750 - skills-guard false positives

Open PRs of interest:
- #97061 - delegated mutations quarantine
- #97062 - 503 unwrap on Models page
- #97057 - image_generate schema refactor (43% token reduction)
- #97014 - terminal config scoping
- #87891 - Anthropic OAuth CSRF gap
- #69446 - plugin catalog

Let me write this up in a structured Chinese report.</think>

# Hermes Agent 项目日报
**日期：2026-08-28**

---

## 1. 今日速览

Hermes Agent 今日处于**高频迭代 + 集中清理**状态：v0.20.6（v2026.8.27）正式发布，将过去约 525 个 PR 一次性打包为稳定标签版本。Issues 与 PRs 同步活跃，**50 条 Issues 更新中已关闭 11 条**，**50 条 PR 更新中已关闭/合并 12 条**，关闭率显著高于通常水平，主要集中在「图像 400 错误导致 session 永久中毒」与「skills_guard 扫描器误报」这两类系统性缺陷上。社区讨论热度集中在 Desktop/TUI 的配置、Profile、Session 管理方向，Windows 平台问题占比上升明显。整体看，**项目处于「批量修复 + 关键架构 RFC 讨论」双轨推进阶段**，健康度良好。

---

## 2. 版本发布

### 🚀 v0.20.6 (v2026.8.27) — 2026-08-27 发布

- **类型**：Patch（向下游消费者交付的稳定标签版本）
- **规模**：聚合自 v0.20.5 以来的 **约 525 个 PR**
- **用途**：用于 Docker 镜像、托管部署与全新安装的稳定标签
- **破坏性变更**：无明确声明为 breaking change
- **迁移注意**：v0.20.5 → v0.20.6 主要为内部修复打包，下游消费方（Docker / 托管环境）应使用该标签替换 `latest` 浮动版本，以获得一致快照

> 完整 changelog 因聚合规模较大，建议查看自 v0.20.5 以来的 commit log 与 PR 列表交叉核对。

---

## 3. 项目进展

今日共 **12 个 PR 关闭/合并**，其中多条形成「Issue → 多个竞品 PR → 合并 PR 统一收口」的修复闭环，体现了项目的**自我修复能力**：

| 修复主题 | 代表 PR | 链接 |
|---|---|---|
| 损坏图像 400 通用恢复（OpenAI/xAI/Kimi 三家合一） | **#97059** 合并统一收口（salvage #69104 / #81326 / #29864） | [PR #97059](https://github.com/NousResearch/hermes-agent/pull/97059) |
| xAI "Invalid PNG image" 永久中毒 session | **#69104** 已关闭（被 #97059 salvage） | [PR #69104](https://github.com/NousResearch/hermes-agent/pull/69104) |
| Kimi/Moonshot 图像解码失败 400 | **#81326** 已关闭 | [PR #81326](https://github.com/NousResearch/hermes-agent/pull/81326) |
| Codex 无效图像数据重试 | **#29864** 已关闭 | [PR #29864](https://github.com/NousResearch/hermes-agent/pull/29864) |
| skills_guard 五项误报规则 | **#97060** 合并收口（salvage #60750） | [PR #97060](https://github.com/NousResearch/hermes-agent/pull/97060) |
| skills_guard 5 项良性模式误报 | **#60750** 已关闭 | [PR #60750](https://github.com/NousResearch/hermes-agent/pull/60750) |

**结构性进展**：
- 「损坏图像 → session 中毒」这一长期影响三类 provider 的**严重稳定性 bug** 已被统一封装为 `strip-and-retry` 恢复机制，从根上避免重启 session 仍无法恢复的「session 永久变砖」问题
- skills_guard 扫描器对**良性社区技能**的硬阻塞被化解，5 条规则降级/范围限定，有利于生态扩展
- **推进度评估**：今日合并质量高于数量，是一次**「系统级缺陷清零」式推进**，对生产稳定性和社区采用门槛均有显著正向影响

---

## 4. 社区热点

按评论数排序的热点 Issues：

| 排名 | Issue | 评论数 | 状态 | 链接 |
|---|---|---|---|---|
| 1 | #69078 xAI grok-4.5 'Invalid PNG image' 400 永久变砖 session | 14 | ✅ CLOSED（已修） | [#69078](https://github.com/NousResearch/hermes-agent/issues/69078) |
| 2 | #96282 Desktop 启动超时（HERMES_BACKEND_READY sentinel 写入 stderr） | 14 | ✅ CLOSED | [#96282](https://github.com/NousResearch/hermes-agent/issues/96282) |
| 3 | #77111 [RFC] RealtimeVoiceProvider ABC —— 四个 duplex-voice PR 需要接口而非合并队列 | 10 | 🔥 OPEN 👍2 | [#77111](https://github.com/NousResearch/hermes-agent/issues/77111) |
| 4 | #90477 Desktop 在 SSH 远程连接上切换 Profile 时错误地 spawn 本地后端 | 9 | 🔥 OPEN | [#90477](https://github.com/NousResearch/hermes-agent/issues/90477) |
| 5 | #80670 Desktop "Could not react" / 4040 —— 恢复会话时无法点赞 | 5 | 🔥 OPEN | [#80670](https://github.com/NousResearch/hermes-agent/issues/80670) |

**诉求解读**：
- **#77111 是今日最具战略价值的讨论**：作者引用 `AGENTS.md` 中的 Footprint Ladder 规则（L208），提出当 3+ 同类 PR 涌入时，应先设计 ABC（抽象基类）+ 编排器，再将现有内置实现作为首个 provider。👍2 的反应量表明社区认同这种**「先建接口、再合并实现」**的治理思路，可能成为后续 TTS / Voice 集成的标准做法
- **#90477 暴露了 Desktop 的多 Profile 多 Backend 路由语义模糊**：用户在两个 SSH 远端用户间切换 Profile 时，会错误 spawn 一个本地后端再回落到另一个无关本地 Profile，凸显 Profile ↔ Backend ↔ Connection 的**三角映射模型**需要被显式建模
- **#96282 揭示了 stdout 重定向会污染启动 sentinel**：一个看似无害的日志修复引发了 Desktop 全量用户无法启动，反映出**启动握手协议对 stderr 假设过度耦合**的脆弱性

---

## 5. Bug 与稳定性

按严重程度排列：

### 🔴 P1（高优先级）
- **[#96282](https://github.com/NousResearch/hermes-agent/issues/96282)** Desktop 启动超时 —— HERMES_BACKEND_READY sentinel 被错误重定向至 stderr（已关闭）

### 🟠 P2（中等，但影响生产）
- **[#69078](https://github.com/NousResearch/hermes-agent/issues/69078)** xAI grok-4.5 图像 400 永久中毒 session —— ✅ **已修复**（[#69104](https://github.com/NousResearch/hermes-agent/pull/69104)，收口于 [#97059](https://github.com/NousResearch/hermes-agent/pull/97059)）
- **[#90477](https://github.com/NousResearch/hermes-agent/issues/90477)** Desktop + SSH Profile 切换错乱 —— ❌ 无 fix PR
- **[#95188](https://github.com/NousResearch/hermes-agent/issues/95188)** Windows Desktop 删除 Profile 后通过两条路径复活（stale lastProfileByConnection + cron-ticker shell）—— ❌ 无 fix PR
- **[#96360](https://github.com/NousResearch/hermes-agent/issues/96360)** Windows Desktop 更新因无关 SCM 服务 STOP_PENDING 中止 —— ❌ 无 fix PR
- **[#87761](https://github.com/NousResearch/hermes-agent/issues/87761)** Windows `hermes profile delete` WinError 32 —— gateway 未停止 ❌ 无 fix PR
- **[#80670](https://github.com/NousResearch/hermes-agent/issues/80670)** Desktop "Could not react" / 4040（恢复会话）—— ❌ 无 fix PR
- **[#97019](https://github.com/NousResearch/hermes-agent/issues/97019)** Windows 上 `os.kill(pid, 0)` 不安全（host_supervisor 活性探测）—— ❌ 无 fix PR
- **[#97017](https://github.com/NousResearch/hermes-agent/issues/97017)** Desktop 客户端强行注入 desktop_ui toolset 导致本地推理延迟严重 —— ❌ 无 fix PR（重复）
- **[#97051](https://github.com/NousResearch/hermes-agent/issues/97051)** `message_agent` 误报告已送达消息失败 —— ❌ 无 fix PR
- **[#96993](https://github.com/NousResearch/hermes-agent/issues/96993)** Windows Chrome 151/152 app-bound 加密导致 cookie 复制被首次启动清空（556→6）—— ❌ 无 fix PR
- **[#97029](https://github.com/NousResearch/hermes-agent/issues/97029)** `MCPServerTask._stdio_children_dead()` 返回值颠倒 —— 所有 stdio MCP 调用瞬间失败 ❌ 无 fix PR
- **[#97020](https://github.com/NousResearch/hermes-agent/issues/97020)** TUI 在无本地 Agent 时丢失 reasoning 与 Fast 状态 —— ❌ 无 fix PR
- **[#87891](https://github.com/NousResearch/hermes-agent/pull/87891)** Anthropic OAuth CSRF 漏洞 + 跨进程 refresh 竞态 + API-key shadowing —— ✅ 已有 PR 待合并

### 🟡 P3
- **[#97011](https://github.com/NousResearch/hermes-agent/issues/97011)** Desktop 思维链展开时鼠标滚轮失效
- **[#60709](https://github.com/NousResearch/hermes-agent/issues/60709)** skills_guard 良性技能误报 —— ✅ 已修复（[#97060](https://github.com/NousResearch/hermes-agent/pull/97060)）
- **[#76884](https://github.com/NousResearch/hermes-agent/issues/76884)** 截断光栅图像污染 Codex session —— ✅ 已关闭
- **[#92376](https://github.com/NousResearch/hermes-agent/issues/92376)** skills_guard 对提及 AGENTS.md 的文档误报（重复）—— ✅ 已关闭

**稳定性观察**：
- **Windows 平台是今日 bug 集中爆发地**：至少 5 个 Windows-only issue 涉及 Profile 管理、SCM 服务、cookie 加密、host_supervisor 活性探测、跨进程信号，提示 Windows 端的**进程/服务边界处理仍是项目薄弱面**
- 图像中毒类 bug 已基本收敛到统一 PR #97059，**这一类 P0/P1 风险正在被系统性消除**

---

## 6. 功能请求与路线图信号

今日值得关注的 RFC 与功能请求：

### 📜 RFC（架构层面）
- **[#77111](https://github.com/NousResearch/hermes-agent/issues/77111) RealtimeVoiceProvider ABC** —— 🔥 最具结构性
  - 提议为 4 个并存的双工语音 PR 设计接口而非合并队列
  - 援引 `AGENTS.md` Footprint Ladder 规则
  - **路线图信号**：很可能成为后续「多 provider 共存」的治理范本

### 🆕 新功能
| Issue | 提议 | 可能路径 |
|---|---|---|
| [#96954](https://github.com/NousResearch/hermes-agent/issues/96954) | `clarify` 提示接受无歧义缩写（如 `1번`, `첫 번째`） | 可纳入下一轮 UX 改进 |
| [#96795](https://github.com/NousResearch/hermes-agent/issues/96795) | Memory 写入治理：显式写入与容量警告原生化 | 与现有 MEMORY.md 路由层配合 |
| [#91813](https://github.com/NousResearch/hermes-agent/issues/91813) / [#91814](https://github.com/NousResearch/hermes-agent/issues/91814) | Bot Mode 群聊应暴露 bot 作用域的实时会话记录 | 多智能体可观测性方向 |
| [#31980](https://github.com/NousResearch/hermes-agent/issues/31980) | 网关重启后丢失后台终端进程跟踪 | 进程生命周期治理 |

### 🛠️ 已合并/推进中
- **[#97057](https://github.com/NousResearch/hermes-agent/pull/97057)** `image_generate` schema 重构：554 → 317 tok/call（**-43%**）—— 维护者驱动，6 项维护发现汇总为统一重构
- **[#69446](https://github.com/NousResearch/hermes-agent/pull/69446)** 插件目录（SHA-pinned plugin catalog）：CLI、CI、文档、仪表板端到端
- **[#97014](https://github.com/NousResearch/hermes-agent/pull/97014)** terminal 配置按真实进程 profile 作用域隔离（多 Profile 共享进程场景）
- **[#97061](https://github.com/NousResearch/hermes-agent/pull/97061)** 委托子任务的 workspace 变更隔离（owner-aware mutation admission fence）

---

## 7. 用户反馈摘要

从 Issues 评论中提炼的真实痛点：

- **「session 永久变砖」是用户最深的恐惧** —— xAI grok-4.5 一次错误图像就让整个会话无法恢复，连纯文本回合也失败，必须删除 session 与 gateway 状态。修复后用户表示"终于可以不再担心一次失败的图像上传毁掉整个长对话"
- **「skills_guard 硬阻塞社区技能」严重伤害生态扩展** —— 一个被广泛安装的研究技能被 `CRITICAL` 误判，用户无法通过 `--force` 绕过 `dangerous` 判定。修复后是社区最强烈的正面反馈之一
- **「Desktop 配置变更后必须重启才生效」被反复吐槽** —— 多位用户反映改 `model.provider/base_url` 后 Desktop 报 `Unknown provider`，CLI 正常。这是 Desktop 进程内缓存未监听配置变化的根因
- **Windows 用户长期被遗忘** —— profile 删除、SCM 服务、更新流程、host_supervisor 在 Windows 都有或多或少的兼容性问题。用户多次表达「Windows 是二等公民」的感受
- **多 Profile 多后端的语义混乱** —— 用户在两台 SSH 远端之间切换时，Desktop 错误 spawn 本地后端，反映 Profile ↔ Backend ↔ Connection 的 UX 概念需要被显式化
- **本地推理后端用户体验差** —— Desktop 强行注入 desktop_ui toolset，导致本地推理 backend 延迟陡增，用户感受到"为桌面付出代价"
- **多智能体可观测性不足** —— Bot Mode 群聊只显示「career-lead is thinking…」级别的粗粒度状态，用户希望看到每个 bot 的实时会话记录

**整体情绪**：在 v0.20.6 集中修复后，社区情绪明显转暖，尤其是 session 中毒与 skills 误报两类问题被解决后。但 Windows 兼容性、Desktop 配置同步、多 Profile 语义仍是持续痛点。

---

## 8. 待处理积压

长期未响应或响应缓慢、需维护者重点关注：

| Issue/PR | 标题 | 创建时间 | 状态 |
|---|---|---|---|
| [#31980](https://github.com/NousResearch/hermes-agent/issues/31980) | 网关重启后丢失后台终端进程跟踪 | 2026-05-25 | OPEN（已 3 个月+） |
| [#61184](https://github.com/NousResearch/hermes-agent/issues/61184) | `agent.disabled_toolsets` 不阻止 `-z` oneshot 中 MCP 工具 | 2026-07-08 | OPEN（needs-repro） |
| [#77111](https://github.com/NousResearch/hermes-agent/issues/77111) | RealtimeVoiceProvider ABC RFC | 2026-08-02 | OPEN（needs-decision） |
| [#90477](https://github.com/NousResearch/hermes-agent/issues/90477) | Desktop + SSH Profile 切换错乱 | 2026-08-20 | OPEN（无 fix PR） |
| [#95188](https://github.com/NousResearch/hermes-agent/issues/95188) | Windows Profile 删除后通过两路径复活 | 2026-08-26 | OPEN |
| [#97061](https://github.com/NousResearch/hermes-agent/pull/97061) | 委托子任务 workspace 变更隔离 | 2026-08-28 | OPEN（needs-decision） |
| [#87891](https://github.com/NousResearch/hermes-agent/pull/87891) | Anthropic OAuth CSRF + refresh race | 2026-08-16 | OPEN（P1 安全） |
| [#91079](https://github.com/Nous

</details>

<details>
<summary><strong>OpenHuman</strong> — <a href="https://github.com/tinyhumansai/openhuman">tinyhumansai/openhuman</a></summary>

<think>The user wants me to generate a daily project report for OpenHuman based on the GitHub data provided. Let me analyze the data carefully and structure the report according to the 8 sections requested.

Let me first understand the data:

**Overview:**
- 5 Issues updated (3 open/active, 2 closed)
- 16 PRs updated (8 pending, 8 merged/closed)
- 0 new releases

**Issues (5 total):**
- #5830 [OPEN] - Local-folder source with relative path resolves against Tauri build dir
- #5831 [OPEN] - Folder picker silently stores only directory NAME when File.path unavailable
- #5827 [OPEN] - 71 module-gated tests never run in CI
- #5727 [CLOSED] - No check ties module's registry pin to submodule pin
- #5820 [CLOSED] - Memory-tree corruption reported as non-fatal for 34 minutes

**PRs (16 total):**
OPEN (8):
- #5822 - fix(auth): drop both current-user caches on sign-out (#5758)
- #5833 - feat(hosting): add hosting_deployment_logs
- #5794 - fix(claude-code): report Claude's structured error instead of empty stderr
- #5718 - fix(claude-code): decode the stdout stream across chunk boundaries
- #5583 - lint(app): enforce the centralized-frontend-config rule
- #5829 - Harden auth profile writes and logout cache clearing
- #5824 - ci: compile raw coverage on source changes
- #5793 - docs(readme): point Windows contributors at the Windows dev script

CLOSED/MERGED (8):
- #5743 - fix(memory): stop recall from hiding a failed chunk read as a missing chunk
- #5832 - fix(memory-sources): use the native directory chooser
- #5825 - feat: wire MemoryScoring bus family into openhuman (#5560)
- #5812 - Tie each module's registry pin to its submodule pin
- #5828 - fix(test): publish the module host policy for contract-routed chunk reads
- #5823 - fix(memory): make a corrupt memory-tree store fatal, visible, and recoverable
- #5826 - docs: bump README Rust requirement from 1.93.0 to 1.96.1
- #5774 - fix(auth): drop both current-user caches on sign-out (superseded by #5822)

Now let me structure the report in Chinese as requested, with professional and data-driven language.

Let me think about each section:

1. **今日速览** - High-level summary
2. **版本发布** - None today
3. **项目进展** - Merged/closed PRs
4. **社区热点** - Active discussions
5. **Bug 与稳定性** - Bugs reported
6. **功能请求与路线图信号** - Feature requests
7. **用户反馈摘要** - User feedback from issue comments
8. **待处理积压** - Long-standing items

Let me check details:
- #5832 closed - fixes #5831's entry-side
- #5812 closed - fixes #5727's issue (tying module pins)
- #5828 closed - test fix
- #5823 closed - memory corruption fix (relates to #5820)
- #5826 closed - README doc fix
- #5825 closed - new MemoryScoring feature
- #5774 closed - auth fix (superseded by #5822)
- #5743 closed - recall fix

These are all p3 priority, interesting.

The issues are mostly about memory subsystem bugs and CI test issues. #5820 is about a serious 34-minute silent corruption window.

Let me draft this report in Chinese.</think>

# OpenHuman 项目日报
**日期：2026-08-28**

---

## 1. 今日速览

OpenHuman 在过去 24 小时内呈现**高强度但全为 p3 优先级**的维护型活动：16 个 PR 更新中 8 个已合并/关闭，5 个 Issue 更新中 2 个已关闭，**无版本发布**。所有合并的 PR 集中于**内存子系统健壮性、认证安全、模块版本一致性、文档修正**四个方向，未触及功能大改或架构变更。整体看，项目处于"密集打补丁"阶段——多个长期潜伏的 bug 被识别并落地修复，但所有工单都被打上 `p3` 标签，说明尚无阻塞性问题；健康度评估：**良好，但需要关注内存子系统累积的技术债**。

---

## 2. 版本发布

无。已合并的 8 个 PR 均未触发版本发布，预计将在下一个常规发版窗口随 `tinymemory`、`tinymcp` 等子模块同步更新一同打包。

---

## 3. 项目进展

### 已合并的关键 PR（按重要性排序）

| PR | 标题 | 推进点 |
|---|---|---|
| [#5823](https://github.com/tinyhumansai/openhuman/pull/5823) | **fix(memory): make a corrupt memory-tree store fatal, visible, and recoverable** | 终结了 #5820 描述的"34 分钟静默腐败"灾难——`chunks.db` 损坏现统一由 vendored tinymemory#107 的单一策略处理，五处检测点（queue worker、两处 tree-ingest sink、reconcile、新增的 `quick_check`）行为一致，运行中止、单次上报、隔离 + 重建 |
| [#5812](https://github.com/tinyhumansai/openhuman/pull/5812) | **Tie each module's registry pin to its submodule pin, and catch rewinds** | 关闭 #5727。9 个 cdylib 子模块此前有两套独立 pin（git submodule + registry.rs），现在加入断言阻止回滚；顺带捕获了 tinymcp 的当前漂移 |
| [#5825](https://github.com/tinyhumansai/openhuman/pull/5825) | **feat: wire MemoryScoring bus family into openhuman (#5560)** | 新增第 21 个 tinymemory 总线能力族（`Capability::Scoring`），archivist 的 `embed_segment_recap` 与 subagent runner 的 `extract_query_entities` 路由到 `provider.as_scoring()` |
| [#5832](https://github.com/tinyhumansai/openhuman/pull/5832) | **fix(memory-sources): use the native directory chooser and never store a bare folder name** | 关闭 #5831。文件夹选择器切到 OS-native 目录选择器；`webkitdirectory` fallback 在 `File.path` 缺失时改为字段旁报错而非落盘不可用值 |
| [#5828](https://github.com/tinyhumansai/openhuman/pull/5828) | **fix(test): publish the module host policy for the contract-routed chunk reads** | 修复阻塞所有 open PR 的 `main` 红：使 in-process engine 写入的种子数据也能通过 memory contract 读回 |
| [#5826](https://github.com/tinyhumansai/openhuman/pull/5826) | **docs: bump README Rust requirement from 1.93.0 to 1.96.1** | 关闭 #5781。README 与 `rust-toolchain.toml`（`1.96.1`，受 `rusqlite 0.40` / `libsqlite3-sys 0.38` 强制）对齐 |
| [#5774](https://github.com/tinyhumansai/openhuman/pull/5774) | **fix(auth): drop both current-user caches on sign-out** | 已被 #5822 取代，但本身已合并——两次 sign-out/in 同 JWT 复用旧 session 状态的问题被同时加固 |
| [#5743](https://github.com/tinyhumansai/openhuman/pull/5743) | **fix(memory): stop recall from hiding a failed chunk read as a missing chunk** | `recall_rpc` 中 `.ok()` 混淆了"未命中"和"读取失败"，现在错误传播，不再假性"成功 recall" |

**进展评估：** 项目今日在**安全姿态（auth 缓存 + 0600 权限）、内存子系统正确性、模块供应链完整性**三个长期被忽视的角落完成了重要加固。`main` 分支的红色被修复（#5828），下一个发版的稳定性基线已显著抬升。

---

## 4. 社区热点

**评论/互动最高 Issues：**

- [#5830](https://github.com/tinyhumansai/openhuman/issues/5830) — **2 条评论**，是本批中讨论最活跃的工单。问题描述精准地指出 Tauri 工作目录与工作区工作目录的概念混淆，且错误信息只报相对路径、不报实际查找位置——这是典型的"信息泄露不足"的开发者体验缺陷。
- [#5831](https://github.com/tinyhumansai/openhuman/issues/5831) — **1 条评论**。#5830 的姊妹工单，入口侧已经被作者有意从 reader 侧分离处理（"obvious version is wrong"），评论透露出作者正在与 #5830 的 PR（tinymemory#113）协同推进两条修复路径。
- [#5830 + #5831 + #5832（PR）**形成完整修复闭环**：reader 侧（tinymemory#113） + entry 侧（#5832）+ 错误信息改进（#5830 待修）。这是 OpenHuman 社区少见的三联式工单治理模式。

**互动度说明：** 大多数 PR 评论数显示为 `undefined`，点赞数普遍为 0，表明 PR 评审主要依赖维护者内部快速流转，社区外审参与度有限；公开 issue 评论 0–2 条，属于"由作者主导技术深挖"的模式，而非大众用户反馈驱动。

---

## 5. Bug 与稳定性

按严重程度（主观评级，结合工单影响面与是否已修复）：

### 🔴 严重（数据丢失/静默失败窗口）

| Issue | 描述 | Fix PR |
|---|---|---|
| [#5820](https://github.com/tinyhumansai/openhuman/issues/5820) **[CLOSED]** | 用户 `memory_tree/chunks.db` 损坏**长达 34 分钟**期间，UI 持续显示"sync 成功"，所有 tree ingest 以 `WRN` 日志记为"non-fatal"；后续恢复流程又清空了 source registry | ✅ [#5823](https://github.com/tinyhumansai/openhuman/pull/5823) 已合并 |

### 🟠 中等（CI 红/隐性功能失效）

| Issue | 描述 | Fix PR |
|---|---|---|
| [#5827](https://github.com/tinyhumansai/openhuman/issues/5827) **[OPEN]** | **71 个 module-gated 测试永久跳过**，其环境变量 `OPENHUMAN_MODULE_PATH` 实际无人读取；CI 已下载这些模块却只跑其中一个；其中 10 个在 split store 上会失败 | ⏳ 无 |
| [#5727](https://github.com/tinyhumansai/openhuman/issues/5727) **[CLOSED]** | 9 个 cdylib 模块的双 pin 漂移无任何校验；tinymcp 当前已漂移 | ✅ [#5812](https://github.com/tinyhumansai/openhuman/pull/5812) |

### 🟡 较轻（路径/UX 错位）

| Issue | 描述 | Fix PR |
|---|---|---|
| [#5830](https://github.com/tinyhumansai/openhuman/issues/5830) **[OPEN]** | 本地文件夹 memory source 用相对路径时静默解析到 Tauri 构建目录，错误信息不暴露实际查找位置 | ⏳ reader 侧 tinymemory#113 已修，错误信息改进待补 |
| [#5831](https://github.com/tinyhumansai/openhuman/issues/5831) **[OPEN]** | 文件夹选择器在 `File.path` 缺失时仅存目录**名称**，写入后该 source 永远无法 sync | ✅ [#5832](https://github.com/tinyhumansai/openhuman/pull/5832) 已合并 |

**稳定性趋势：** 内存子系统今日完成两项关键加固（腐败策略统一 + `.ok()` 语义修正），下一个版本预计不再出现"UI 撒谎 34 分钟"级别的可用性事故。

---

## 6. 功能请求与路线图信号

**明确的新功能 PR：**

- [#5833](https://github.com/tinyhumansai/openhuman/pull/5833) — **feat(hosting): add hosting_deployment_logs**，作为第 10 个 `hosting_*` 工具，是 `tinyhumansai/opencompany#913` 的最后一块拼图。动机直接：现有 `hosting_deployment_status` 只能告诉 agent"构建失败 + 一行 provider 错误"，但拿不到构建日志——agent 在自行排查失败时完全是盲的。**极有可能在下个版本合入**，因为它是 opencompany 工单的关门项。
- [#5825](https://github.com/tinyhumansai/openhuman/pull/5825) **[已合并]** — MemoryScoring bus family，#5560 落地。

**待合并的相关 PR：**
- [#5824](https://github.com/tinyhumansai/openhuman/pull/5824) — ci: compile raw coverage on source changes；改动 src/** 时同时编译 `raw_coverage_all` 集成目标，避免 PR 改动让未映射的集成目标突然不再编译。属于"防回归"基础设施类。
- [#5829](https://github.com/tinyhumansai/openhuman/pull/5829) — 加固 auth profile 写入（0600 权限）+ 完善 sign-out 缓存清理；与 #5822 互补。

**路线图信号：** 当前重点仍是**安全姿态收尾**（auth 系列）+ **内存子系统硬化**（腐败/recall/module pin），尚未出现新的大型功能规划。

---

## 7. 用户反馈摘要

由于 Issue 评论数普遍较低（0–2 条），公开可提炼的真实用户痛点主要来自工单描述本身：

1. **"软件在撒谎"型痛点** — [#5820](https://github.com/tinyhumansai/openhuman/issues/5820) 用户的 `chunks.db` 损坏 34 分钟期间，UI 始终显示 sync 成功；这种"成功提示与底层状态严重背离"的体验是用户对桌面应用最深的恐惧之一，已通过统一腐败策略修复。

2. **"静默写死"型痛点** — [#5831](https://github.com/tinyhumansai/openhuman/issues/5831) 的 `webkitdirectory` fallback 在缺失 `File.path` 时把目录**名称**当作路径落库，用户随后看到一个永远无法 sync 的 source——"系统接受了我的输入但悄悄把它变成了废物"，是浏览器 API 兼容退化的典型失败模式。

3. **"错误信息不可信"型痛点** — [#5830](https://github.com/tinyhumansai/openhuman/issues/5830) 错误消息报相对路径而非实际查找位置，用户在排查时无法判断"路径是相对什么的"。

4. **"文档与工具不一致"型痛点** — [#5781](https://github.com/tinyhumansai/openhuman/issues/5781)（被 [#5826](https://github.com/tinyhumansai/openhuman/pull/5826) 修复）：README 要求 Rust 1.93.0，但 `rust-toolchain.toml` 要求 1.96.1；新贡献者按文档步骤直接构建失败。同样 [#5786](https://github.com/tinyhumansai/openhuman/issues/5786)（被 [#5793](https://github.com/tinyhumansai/openhuman/pull/5793) 修复）：Windows 贡献者被指引到实际是 macOS 脚本的命令。

**整体信号：** 痛点集中在"软件行为与文档/界面承诺不一致"，尚未看到关于性能、功能缺失的抱怨，说明当前最迫切的不是"加新东西"而是"让现有承诺更可靠"。

---

## 8. 待处理积压

按时间倒序排列今日仍 OPEN 的 Issue/PR，提醒维护者关注：

| 编号 | 类型 | 标题 | 关注点 |
|---|---|---|---|
| [#5827](https://github.com/tinyhumansai/openhuman/issues/5827) | Issue | 71 个 module-gated 测试永久跳过，CI 浪费下载 | 测试基础设施核心问题；阻碍 CI 信号可信度 |
| [#5830](https://github.com/tinyhumansai/openhuman/issues/5830) | Issue | 相对路径解析到 Tauri 构建目录，错误信息不透明 | reader 侧已修，错误信息改进是公开承诺的尾巴 |
| [#5831](https://github.com/tinyhumansai/openhuman/issues/5831) | Issue | 文件夹选择器在 `File.path` 缺失时静默存名称 | PR #5832 已合并，但 issue 本身还 OPEN，建议关闭 |
| [#5583](https://github.com/tinyhumansai/openhuman/pull/5583) | PR (p3) | lint(app): enforce centralized-frontend-config rule | 创建于 8/19，等待 lint 规则统一；存在时间最长 |
| [#5718](https://github.com/tinyhumansai/openhuman/pull/5718) | PR (p3) | fix(claude-code): decode stdout stream across chunk boundaries | 创建于 8/24；8 KiB 缓冲区跨 chunk 解码失败的稳健修复 |
| [#5794](https://github.com/tinyhumansai/openhuman/pull/5794) | PR (p3) | fix(claude-code): report Claude's structured error instead of empty stderr | 创建于 8/26；驱动层两个失败检查顺序倒置 |
| [#5829](https://github.com/tinyhumansai/openhuman/pull/5829) | PR (p3) | Harden auth profile writes and logout cache clearing | 与 #5822 功能正交，建议合并 |
| [#5824](https://github.com/tinyhumansai/openhuman/pull/5824) | PR (p3) | ci: compile raw coverage on source changes | CI 防回归，建议纳入 |
| [#5833](https://github.com/tinyhumansai/openhuman/pull/5833) | PR | feat(hosting): add hosting_deployment_logs | opencompany#913 最后一块，应优先合入 |
| [#5822](https://github.com/tinyhumansai/openhuman/pull/5822) | PR (p3) | fix(auth): drop both current-user caches on sign-out | 关闭 #5758；已替换 #5774，优先级较高 |

**维护建议：** 🔔
- 立即可关闭 #5831（PR #5832 已合并覆盖）。
- 推动 #5833 进入 review（外部依赖 opencompany#913 路径已清晰）。
- #5583 积压超过 9 天，建议合并或关闭说明。
- 内存子系统今日已合并多项加固，可考虑下个版本拉一个 "memory hardening" 集中发版。

---

*报告基于 OpenHuman

</details>

---
*本日报由 [Big Model Radar](https://github.com/96loveslife/big_model_radar) 自动生成。*
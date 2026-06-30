# OpenClaw 生态日报 2026-06-30

> Issues: 391 | PRs: 500 | 覆盖项目: 12 个 | 生成时间: 2026-06-30 04:06 UTC

- [OpenClaw](https://github.com/openclaw/openclaw)
- [NanoBot](https://github.com/HKUDS/nanobot)
- [Zeroclaw](https://github.com/zeroclaw-labs/zeroclaw)
- [PicoClaw](https://github.com/sipeed/picoclaw)
- [NanoClaw](https://github.com/qwibitai/nanoclaw)
- [IronClaw](https://github.com/nearai/ironclaw)
- [LobsterAI](https://github.com/netease-youdao/LobsterAI)
- [TinyClaw](https://github.com/TinyAGI/tinyclaw)
- [Moltis](https://github.com/moltis-org/moltis)
- [CoPaw](https://github.com/agentscope-ai/CoPaw)
- [ZeptoClaw](https://github.com/qhkm/zeptoclaw)
- [EasyClaw](https://github.com/gaoyangz77/easyclaw)

---

## OpenClaw 项目深度报告

<think>Let me analyze this GitHub data carefully to generate a comprehensive daily report for OpenClaw.

Looking at the data overview:
- 391 issues updates in past 24 hours (332 new/active, 59 closed)
- 500 PR updates in past 24 hours (448 pending, 52 merged/closed)
- 0 new releases

Let me categorize the issues by topic:

**Session/State Management Issues:**
- #86538 - Session write-lock timeouts block subagent delivery (P1, diamond lobster, 18 comments)
- #86572 - Hoist withOwnedSessionTranscriptWrites ALS scope (P1, diamond lobster, 7 comments)
- #81061 - Hook: before_route_inbound_message (P2, diamond lobster, 7 comments)
- #79077 - Telegram bot-to-bot and guest-bot modes (P2, platinum hermit, 8 comments)
- #82662 - Isolated cron agentTurn fails with setup timeout (P2, platinum hermit, 6 comments)
- #80040 - Cascading failure with OAuth (P2, platinum hermit, 6 comments)
- #80607 - Multi-agent uses embedded_run (P2, platinum hermit, 5 comments)
- #75782 - Embedded-run "auth" stage takes 10-15s (P1, platinum hermit, 5 comments)
- #81490 - Subagent completion spawns fresh run (P1, platinum hermit, 4 comments)
- #81934 - Multiple failures after 2026.5.12 update (P2, silver shellfish, 4 comments)
- #81514 - Isolated-job status non-deterministic (P2, diamond lobster, 4 comments)
- #81484 - Discord guild reply regression (P1, diamond lobster, 5 comments)
- #80520 - Telegram messages silently dropped (P1, gold shrimp, 11 comments)
- #82002 - Telegram group replies lose context (P2, diamond lobster, 5 comments)

**Provider/Auth Issues:**
- #80319 - QA tool-defaults conflation (P2, platinum hermit, 17 comments)
- #74586 - AM embedded run aborts memory_search (P1, platinum hermit, 11 comments)
- #94518 - DeepSeek cache hit rate drops (P1, platinum hermit, 6 comments)
- #81607 - minimax-portal no text output (P2, platinum hermit, 5 comments)
- #81917 - Dashboard logs bare URL (P2, platinum hermit, 5 comments)
- #82020 - Custom provider sharing baseUrl broken (P2, diamond lobster, 4 comments)
- #82070 - CLI commands cold-start regression (P1, platinum hermit, 4 comments)
- #81567 - GPT-4o agent sessions exit early (P1, platinum hermit, 4 comments)
- #81156 - MiniMax usage count semantics inverted (P2, diamond lobster, 5 comments)
- #88548 - GitHub Copilot static default list (CLOSED, P2, platinum hermit, 5 comments)
- #95121 - Codex OAuth/Appserver slowness (P2, gold shrimp, 5 comments)
- #91352 - OpenAI Codex OAuth migration issues (P2, diamond lobster, 5 comments)
- #83461 - Provider catalog auth issue (P2, diamond lobster, 4 comments)
- #77807 - sessions_spawn missing scope (P1, platinum hermit, 4 comments)
- #81525 - media-understanding routes without validation (CLOSED, P2, diamond lobster, 5 comments)
- #97970 - gateway.bind auto-fill exit 78 (CLOSED, P1, gold shrimp, 4 comments)
- #95500 - Plugin model provider resolution (CLOSED, P2, platinum hermit, 4 comments)

**Performance Issues:**
- #80607 - Multi-agent latency 10-17s (P2, platinum hermit, 5 comments)
- #75782 - Embedded-run auth stage 10-15s (P1, platinum hermit, 5 comments)
- #80131 - Per-request auth dominates TTFT (P2, platinum hermit, 4 comments)
- #82070 - CLI cold-start regression 14s (P1, platinum hermit, 4 comments)

**Update/Install Issues:**
- #97970 - gateway.bind auto-fill (CLOSED, P1, gold shrimp, 4 comments)
- #97985 - Bundle plugin update issue (multiple PRs: #98007, #98010, #97990)

**Feature Requests:**
- #79077 - Telegram bot-to-bot support (P2, platinum hermit, 8 comments)
- #81061 - before_route_inbound_message hook (P2, diamond lobster, 7 comments)
- #80213 - Skill author-defined setup hook (P2, diamond lobster, 7 comments)
- #81913 - Stable plugin SDK surface (P2, diamond lobster, 6 comments)
- #81960 - Multiple providers/models in onboarding (P3, off-meta tidepool, 4 comments)
- #80188 - Host-owned structured plugin inference (P2, off-meta tidepool, 4 comments)
- #16896 - Right-click reply in Dashboard (CLOSED, P3, diamond lobster, 4 comments)
- #82450 - Accessibility for blind users (P2, off-meta tidepool, 5 comments)
- #80176 - JSONL session-replay harness (P3, diamond lobster, 5 comments)

**Crash/Loop Issues:**
- #83736 - Gateway node version skew (P2, diamond lobster, 5 comments)
- #87058 - Android node zero commands (P1, diamond lobster, 5 comments)
- #82250 - macOS LaunchAgent KeepAlive (P1, diamond lobster, 4 comments)
- #81934 - 2026.5.12 macOS failures (P2, silver shellfish, 4 comments)
- #97877 - empty-error-retry blocked (P1, diamond lobster, 4 comments)
- #97877 has PR #98013 fixing it

PR Analysis:
**Anthropic Provider (multiple PRs):**
- #97868 (CLOSED), #98017, #98016, #98015, #98014, #98003 - All wire buildGuardedModelFetch into different createClient branches

**Telegram:**
- #98006 - /login Codex pairing flow

**Bundle plugin update issue:**
- #98007, #98010, #97990 - Fix #97985 - bundle plugin update

**Bug fixes:**
- #98013 - Fix #97877 empty-error-retry
- #97868 - Anthropic fix (CLOSED)
- #97181 - Matrix crypto bootstrap (CLOSED)
- #97713 - NO_PROXY matching
- #95370 - Z.AI fallback notice

**Tests:**
- #98018 - Levenshtein tests
- #98009 - SQLite normalization tests

**Other features:**
- #98005 - JSON-RPC plugin bindings (XL)
- #96267 - Session history accessibility
- #95718 - Native Signal reply quotes
- #87552 - Codex delivery ambiguity
- #90259 - Reset family carryover summaries (XL)
- #95899 - Recover from non-resumable assistant tail (L)
- #96624 - Voice-call status fallback
- #97492 - Claude CLI apiKeyHelper auth
- #94946 - Durable reasoning payloads to Telegram
- #94964 - Cancel deferred channel reload

**Misc:**
- #98012 - Skip Enter during IME composition
- #98008 - Twitch UTF-16 boundary
- #95953 - Docker Claude CLI persistence docs
- #62503 - Devcontainer for cross-platform

Let me also identify closed issues that are notable:
- #88548 - GitHub Copilot (CLOSE)
- #97970 - gateway.bind (CLOSE)
- #81525 - media-understanding (CLOSE)
- #95500 - Plugin model provider (CLOSE)
- #97868 - Anthropic PR (CLOSE)
- #97181 - Matrix PR (CLOSE)
- #16896 - Right-click reply (CLOSE)

Now let me think about the structure of the report:

1. **今日速览** - Overall assessment
2. **版本发布** - Skip (no releases)
3. **项目进展** - Important merged/closed PRs
4. **社区热点** - Most active discussion issues
5. **Bug 与稳定性** - Bugs by severity
6. **功能请求与路线图信号** - Feature requests with PR links
7. **用户反馈摘要** - User pain points
8. **待处理积压** - Long-standing issues

I should focus on:
- The most commented issues
- Closed issues with high impact
- Bug clusters (Telegram, OAuth, embedded-run issues)
- The bundle plugin update issue (#97985 with 3 PRs being submitted - coordination issue)
- The Anthropic fix effort (6 PRs targeting the same fix - fragmentation)
- Performance regression theme (10-15s auth stage appearing in multiple issues)

Let me write this in Chinese as the user's prompt is in Chinese.

I should produce a thorough, professional analysis. Let me draft it now.</think>

# OpenClaw 项目动态日报 · 2026-06-30

## 1. 今日速览

OpenClaw 项目今日进入 **高强度维护期**：24 小时内 Issues 更新 391 条（活跃 332 / 关闭 59）、PR 更新 500 条（待合并 448 / 已关闭 52），活跃度处于近一个月峰值。值得注意的是 **0 个新版本发布**，但有一条明显的回归潮——围绕 `2026.6.8 / 2026.6.10` 与 `2026.5.7 / 2026.5.12` 的多个 P1/P2 缺陷集中爆发，主题集中在 **session 写锁 / OAuth 鉴权 / embedded-run 性能退化 / Telegram 消息丢失** 四个方向。社区贡献方面出现了较为典型的"**补丁碎片化**"信号——同一个底层缺陷被拆成 4–6 个 PR 重复提交（Anthropic `buildGuardedModelFetch` 拆分、bundle plugin update 修复各自有 3 个并行 PR），反映出提交者之间缺少协调，也增加了维护者评审负担。

## 2. 版本发布

无新版本发布。👉 [#86538](https://github.com/openclaw/openclaw/issues/86538)、[#97970](https://github.com/openclaw/openclaw/issues/97970) 等升级路径上的回归尚未在 release 中修复。

## 3. 项目进展

今日 **无 PR 进入 main 分支并已合并的状态确认**，但多个关闭动作为下一版本铺路：

| 方向 | 代表 PR | 影响 |
|---|---|---|
| **Anthropic SDK 流式 fetch 守卫** | [#97868](https://github.com/openclaw/openclaw/pull/97868)（已关闭，作为拆分母 PR）→ [#98003](https://github.com/openclaw/openclaw/pull/98003) / [#98014](https://github.com/openclaw/openclaw/pull/98014) / [#98015](https://github.com/openclaw/openclaw/pull/98015) / [#98016](https://github.com/openclaw/openclaw/pull/98016) / [#98017](https://github.com/openclaw/openclaw/pull/98017)（5 个分支 PR 待合并）| 修复 5 个 `createClient` 分支（API key / Cloudflare / GitHub Copilot / MS Foundry / OAuth）未注入 `buildGuardedModelFetch`，避免流式响应在长链路上断流 |
| **Empty-error-retry 解除** | [#98013](https://github.com/openclaw/openclaw/pull/98013) | 修复 [#97877](https://github.com/openclaw/openclaw/issues/97877) 中一旦历史上有任何工具调用就永久阻止空错误重试的问题，5xx 瞬态故障可恢复 |
| **Z.AI fallback 通知可见化** | [#95370](https://github.com/openclaw/openclaw/pull/95370) | 让 ECONNRESET 触发模型回退时，cron/isolated/subagent 等异步上下文也能向用户投递通知 |
| **CLI 升级 bundle 插件支持** | [#97990](https://github.com/openclaw/openclaw/pull/97990) / [#98007](https://github.com/openclaw/openclaw/pull/98007) / [#98010](https://github.com/openclaw/openclaw/pull/98010) | 三方同时修补 [#97985](https://github.com/openclaw/openclaw/issues/97985)，让 `format=bundle`（Claude / Codex / Cursor 布局）插件通过 post-update smoke check |
| **NO_PROXY 行为修复** | [#97713](https://github.com/openclaw/openclaw/pull/97713) | global undici dispatcher 兼容 `.sub.example.com` / CIDR 等 NO_PROXY 模式，修 [#95998](https://github.com/openclaw/openclaw/issues/95998) |
| **矩阵插件安全收紧** | [#97181](https://github.com/openclaw/openclaw/pull/97181)（已关闭）| Matrix crypto bootstrap 命令固定，关闭 ClawHub 报出的可注入路径 |
| **测试基础设施补全** | [#98018](https://github.com/openclaw/openclaw/pull/98018)、[#98009](https://github.com/openclaw/openclaw/pull/98009) | Levenshtein 与 SQLite number 归一化补单测 |

> 项目整体向前推进的方向：**Provider 健壮性**（Anthropic fetch 注入、Claude CLI `apiKeyHelper` 鉴权 [#97492](https://github.com/openclaw/openclaw/pull/97492)）、**更新链路鲁棒性**（bundle 插件 smoke check）、**面向异步用户的消息可见性**（fallback 通知）。但 PR "碎片化"提示维护者需要加快整体合并节奏，否则队列压力将持续放大。

## 4. 社区热点（评论 / 👍 数最高的 Issues）

| 排名 | Issue | 热度 | 主题归属 |
|---|---|---|---|
| 1 | [#86538](https://github.com/openclaw/openclaw/issues/86538) Session 写锁超时阻塞 subagent 通道 | 18 评论 | Session / 嵌入式 |
| 2 | [#80319](https://github.com/openclaw/openclaw/issues/80319) QA tool-defaults 与 Codex 工具语义混淆 | 17 评论 | QA 工具链 |
| 3 | [#74586](https://github.com/openclaw/openclaw/issues/74586) AM embedded run 误报 memory_search 超时 | 11 评论 + 👍3 | Plugin: active-memory |
| 4 | [#80520](https://github.com/openclaw/openclaw/issues/80520) Telegram 消息静默丢失 | 11 评论 + 👍3 | 渠道可靠性 |
| 5 | [#79077](https://github.com/openclaw/openclaw/issues/79077) Telegram bot-to-bot / guest-bot 支持 | 8 评论 + 👍8 | 渠道功能 |
| 6 | [#86572](https://github.com/openclaw/openclaw/issues/86572) ALS scope 提升修复 same-lane Fence | 7 评论 | Session 锁 |
| 7 | [#81061](https://github.com/openclaw/openclaw/issues/81061) `before_route_inbound_message` pre-routing hook | 7 评论 + 👍3 | 插件可扩展性 |
| 8 | [#80213](https://github.com/openclaw/openclaw/issues/80213) Skill 自定义 setup hook | 7 评论 + 👍4 | Skill / 安全 |
| 9 | [#94518](https://github.com/openclaw/openclaw/issues/94518) DeepSeek 6.x 后缓存命中率 < 10% | 6 评论 + 👍8 | Provider 性能 |
| 10 | [#81913](https://github.com/openclaw/openclaw/issues/81913) 暴露稳定的 plugin SDK for installed skills | 6 评论 | 插件 SDK |

**诉求归纳**：
- **Session 写锁 / 同车道抢占**仍是社区第一痛点，#86538 + #86572 相互补充，指向 `withOwnedSessionTranscriptWrites` ALS scope 的覆盖不足。
- **Provider 缓存与回退可见性**被反复抱怨：DeepSeek 缓存 #94518 + Z.AI fallback #95370 + Codex OAuth 慢 #95121，三个不同模型提供商都有 "用户看不见失败" 的反馈。
- **插件 SDK 边界**成第二增长极（#80213、#81913、#81061、#80188），社区正在推动 `openclaw/plugin-sdk/*` 的稳定契约化。

## 5. Bug 与稳定性（按严重度降序）

### 🔴 P1 / 已挂 fix PR
- **[#86538](https://github.com/openclaw/openclaw/issues/86538)** Session JSONL 写锁超时阻塞主/cron-nested/subagent 通道 — **linked-pr-open**
- **[#86572](https://github.com/openclaw/openclaw/issues/86572)** `withOwnedSessionTranscriptWrites` ALS 作用域需从 `agent.prompt()` 起全程包裹 — **linked-pr-open**
- **[#74586](https://github.com/openclaw/openclaw/issues/74586)** `active-memory` embedded run 将 memory_search 完成误判为超时 — **needs-live-repro**
- **[#80520](https://github.com/openclaw/openclaw/issues/80520)** Telegram 消息进入网关但 sendMessage 完全未记录 — **needs-info, linked-pr-open**
- **[#75782](https://github.com/openclaw/openclaw/issues/75782)** embedded-run 起始 `auth:` 阶段同步耗 10–15s
- **[#81484](https://github.com/openclaw/openclaw/issues/81484)** `2026.5.7` Discord guild 回复畸形 send payload + 重复外发 — **linked-pr-open**
- **[#81490](https://github.com/openclaw/openclaw/issues/81490)** subagent 完成时新起一个跑而非 resume 父会话 — **needs-live-repro**
- **[#81567](https://github.com/openclaw/openclaw/issues/81567)** GPT-4o 在 CLI 下仅一轮文本即退出，不继续 tool-use
- **[#82070](https://github.com/openclaw/openclaw/issues/82070)** `2026.5.12` 后所有 CLI 命令冷启 ~14s
- **[#82250](https://github.com/openclaw/openclaw/issues/82250)** macOS LaunchAgent KeepAlive=true 重启循环
- **[#77807](https://github.com/openclaw/openclaw/issues/77807)** `sessions_spawn` 报 `missing scope: operator.write`
- **[#87058](https://github.com/openclaw/openclaw/issues/87058)** Android 节点连接后声明 0 命令 + onboarding nonce 重试竞争 — **needs-security-review**
- **[#97877](https://github.com/openclaw/openclaw/issues/97877)** empty-error

---

## 横向生态对比

<think>The user wants me to generate a horizontal comparative analysis report across all the open source projects I've just reported on. Let me carefully analyze the data and generate a well-structured comparison.

Let me first re-read the prompt and the context. The user has given me detailed daily reports for each project, and now wants a comparative analysis report with 7 specific sections:

1. 生态全景 (Ecosystem Panorama) - 3-5 sentences overall view
2. 各项目活跃度对比 (Activity Comparison) - Table with Issues, PRs, Releases, Health
3. OpenClaw 在生态中的定位 (OpenClaw positioning)
4. 共同关注的技术方向 (Common technical directions) - with project tags
5. 差异化定位分析 (Differentiation analysis)
6. 社区热度与成熟度 (Community heat and maturity) - tiered
7. 值得关注的趋势信号 (Trend signals)

Let me carefully extract the data:

**Activity Stats:**
- OpenClaw: 391 Issues updates (332 active/59 closed), 500 PR updates (448 pending/52 closed), 0 releases
- NanoBot: 12 Issues (8 active/4 closed), 33 PRs (24 pending/9 closed), 0 releases
- Zeroclaw: 50 Issues (41 active/9 closed), 50 PRs (32 pending/18 closed), 0 releases
- PicoClaw: 4 Issues (3 active/1 closed), 3 PRs (3 pending/0 closed), 0 releases
- NanoClaw: 1 Issue (1 active/0 closed), 7 PRs (5 pending/2 closed), 0 releases
- IronClaw: 15 Issues (11 active/4 closed), 50 PRs (29 pending/21 closed), 0 releases
- LobsterAI: 11 Issues (8 active/3 closed), 40 PRs (1 pending/39 closed), 1 release (2026.6.29)
- TinyClaw: 0 activity
- Moltis: 0 activity
- CoPaw/QwenPaw: 26 Issues (15 active/11 closed), 50 PRs (17 pending/33 closed), 0 releases
- ZeptoClaw: 0 activity
- EasyClaw: 0 activity

**Health indicators from each report:**

OpenClaw: High maintenance period, fragmented patches, regression wave on session lock/OAuth/embedded-run/Telegram
NanoBot: Healthy fix pace but PR backlog, stale issues starting to appear
Zeroclaw: Moderate activity focused on CI/security/Provider/Channel, 0 thumbs up signal weak community
PicoClaw: Low activity, 0 merged PRs, stale issues piling up
NanoClaw: Stable, Discord/Slack channel expansion, security patch pending merge
IronClaw: Active dev with Reborn WebUI v2 focus, exposed user-facing bugs
LobsterAI: Just released 2026.6.29, 39 PRs merged, fix-heavy release
CoPaw/QwenPaw: High intensity, fix-heavy day
TinyClaw/Moltis/ZeptoClaw/EasyClaw: Inactive (24h)

**Common themes I notice:**
- OAuth/Auth complexity across multiple providers
- Channel/IM integrations (Telegram, Discord, WhatsApp, Slack, Feishu, DingTalk, Nextcloud, Matrix)
- Provider ecosystem expansion (Anthropic, OpenAI, Codex, DeepSeek, kimi-code, Moonshot, Bedrock, GitHub Copilot)
- Cron/heartbeat/scheduled task reliability
- Tool call protocol/streaming/retry issues
- Wasm plugin ecosystem (Zeroclaw, OpenClaw)
- Plugin SDK stability (OpenClaw)
- CI/security hardening (cargo-audit, SLSA, dependabot)
- Token cost / caching efficiency (multiple projects)
- Session/lock management
- WebUI improvements (multiple projects)
- Computer-use / desktop control (Zeroclaw RFC #6909, QwenPaw PR #5187)
- MCP (Model Context Protocol) integration

**Differentiators:**
- OpenClaw: Mainstream flagship, heavy volume, mature channel/plugin ecosystem
- NanoBot: Lightweight, security-focused
- Zeroclaw: CI/security-first, OTel observability focus, Wasm-first plugin runtime
- PicoClaw: Lightweight edge/hardware (NanoKVM), IoT-oriented
- NanoClaw: WebUI/dashboard focus, channel adapter expansion
- IronClaw: Enterprise/RBAC, comprehensive testing infrastructure (Rust + Web UI)
- LobsterAI: B2C desktop product (Electron), Chinese market focus
- CoPaw/QwenPaw: AgentScope-based, Qwen models, Chinese AI ecosystem integration
- TinyClaw/Moltis/ZeptoClaw/EasyClaw: Currently inactive or early

Let me also think about the size/maturity signals:
- OpenClaw: Issue numbers in the tens of thousands (#86538, #97970) - this is HUGE. Most active by far.
- NanoBot: Issue numbers like #660, #4418 - mid-sized
- Zeroclaw: Issue numbers like #6808, #5600 - mid-sized
- PicoClaw: Issue numbers like #3093 - smaller
- NanoClaw: Issue numbers like #2888 - smaller
- IronClaw: Issue numbers like #5413 - mid-sized
- LobsterAI: Issue numbers like #2079, #2131 - smaller but active
- CoPaw/QwenPaw: Issue numbers like #3891, #5644 - mid-sized

Now let me structure the report properly in Chinese.

I should focus on being data-driven, professional, concise, and useful for technical decision-makers and developers.

Let me draft each section:

### 1. 生态全景 (Ecosystem Panorama)
The personal AI assistant / autonomous agent ecosystem shows clear stratification today. OpenClaw dominates absolute activity, while a cluster of derivative "claw" projects shows varying maturity levels. Common pain points revolve around OAuth/cross-provider streaming, IM channel reliability, scheduled task delivery, and tool-call session poisoning. CI/security hardening and WebUI polish are universal themes. Multiple projects are converging on Wasm plugin architectures and OTel-style observability.

### 2. 活跃度对比表
Will use a clean table format with health assessment.

### 3. OpenClaw 定位
OpenClaw is clearly the flagship. Mention absolute scale, channel/plugin ecosystem maturity, fragmentation issues that come with scale.

### 4. 共同关注方向
- Cross-provider streaming/tool-call protocol
- IM channel reliability
- OAuth/auth complexity  
- Scheduled tasks (cron/heartbeat)
- Session state management
- Token caching efficiency
- WebUI/UX polish
- Plugin SDK stability
- Wasm plugin ecosystem
- CI/supply chain security

### 5. 差异化定位
Different focus areas for each project.

### 6. 社区热度分层
Tier 1 (high iteration): OpenClaw, IronClaw, Zeroclaw, CoPaw
Tier 2 (quality consolidation): NanoBot, LobsterAI (just released)
Tier 3 (slow or stalled): PicoClaw, NanoClaw
Tier 4 (dormant): TinyClaw, Moltis, ZeptoClaw, EasyClaw

### 7. 趋势信号
- Cross-provider LLM abstraction becoming must-have
- Tool-call protocol standardization need
- IM channel fragmentation as opportunity
- Wasm as plugin runtime of choice
- OTel as observability standard
- CI hardening reflects enterprise adoption
- Computer-use / desktop automation emerging
- Prefill cache hit rates becoming cost concern

OK, let me write the final report now. I need to be careful to cite specific issues/PRs from the data to support claims.

Let me also use the thinking mode properly with max effort.

Let me now write the comprehensive comparative analysis report.</think>

# 个人 AI 助手 / 自主智能体开源生态 · 横向对比分析
**报告日期：2026-06-30** ｜ **数据范围：12 个开源项目（其中 4 个当日零活动）**

---

## 1. 生态全景

今日生态呈现 **"一超多强、垂直分化、问题高度趋同"** 的格局。OpenClaw 以 891 条 Issue+PR 更新（391+500）独占近六成活跃度，处于绝对的旗舰与参照点位置；IronClaw、Zeroclaw、CoPaw/QwenPaw 形成"次旗舰三角"（各约 50 条 PR 更新），NanoBot 与 LobsterAI 在发布周期内冲刺；PicoClaw、NanoClaw 体量较小但持续维护；TinyClaw、Moltis、Zeptoclaw、EasyClaw 当日无活动迹象。**趋同的痛点集中**在跨 Provider 流式协议兼容、IM 渠道可靠性、计划任务投递正确性、工具调用 id 污染会话四大方向，**共同演进的方向**则指向 WebAssembly 插件运行时、OpenTelemetry 风格可观测性、CI/供应链安全硬化与 WebUI 工程化。

---

## 2. 各项目活跃度对比

| 项目 | Issues（活跃/关闭） | PRs（待合并/已关闭） | 今日 Release | 合并/PR 关闭比 | 健康度 | 当日定位 |
|---|---|---|---|---|---|---|
| **OpenClaw** | 391（332 / 59） | 500（448 / 52） | ❌ | 10.4% | ⭐⭐⭐☆☆ | 高强度维护期，回归潮 + 补丁碎片化 |
| **IronClaw** | 15（11 / 4） | 50（29 / 21） | ❌ | 42% | ⭐⭐⭐⭐☆ | 测试金字塔加固 + QA Bug 集中曝光 |
| **Zeroclaw** | 50（41 / 9） | 50（32 / 18） | ❌ | 36% | ⭐⭐⭐⭐☆ | CI/供应链 + Provider/Channel 修复密集 |
| **CoPaw / QwenPaw** | 26（15 / 11） | 50（17 / 33） | ❌ | 66% | ⭐⭐⭐⭐☆ | 高强度修复型，闭源 PR 占比突出 |
| **NanoBot** | 12（8 / 4） | 33（24 / 9） | ❌ | 27% | ⭐⭐⭐☆☆ | 安全+鲁棒性为主，积压偏多 |
| **LobsterAI** | 11（8 / 3） | 40（1 / 39） | ✅ **2026.6.29** | 97.5% | ⭐⭐⭐⭐⭐ | 发版当日冲刺，OpenClaw/Cowork 双线 |
| **NanoClaw** | 1（1 / 0） | 7（5 / 2） | ❌ | 28.6% | ⭐⭐⭐☆☆ | 小步快跑，安全 PR 待合 |
| **PicoClaw** | 4（3 / 1） | 3（3 / 0） | ❌ | 0% | ⭐⭐☆☆☆ | 0 合入，stale 积压 |
| TinyClaw | 0 | 0 | ❌ | — | ⭐☆☆☆☆ | 24h 无活动 |
| Moltis | 0 | 0 | ❌ | — | ⭐☆☆☆☆ | 24h 无活动 |
| ZeptoClaw | 0 | 0 | ❌ | — | ⭐☆☆☆☆ | 24h 无活动 |
| EasyClaw | 0 | 0 | ❌ | — | ⭐☆☆☆☆ | 24h 无活动 |

> **指标说明**："合并/PR 关闭比" = 已关闭 PR / 总 PR，反映维护者对提交队列的吞吐效率；健康度综合考虑活跃度、PR 合并节奏、安全响应、stale 情况。

---

## 3. OpenClaw 在生态中的定位

| 维度 | OpenClaw 现状 | 横向对比 |
|---|---|---|
| **绝对活跃度** | Issue 号已至 **#97985**，PR 至 **#98018** 级别 | 比第二梯队（IronClaw #5427）高出约 1 个数量级 |
| **社区规模信号** | 单日 391 条 Issue 更新、500 条 PR 更新 | 占据当日 12 项目总活动量的 **~57%** |
| **技术广度** | 同时覆盖 12+ 渠道（Telegram/Discord/WhatsApp/Matrix/Slack/Signal/Twitch…）、10+ Provider（Anthropic/OpenAI/Codex/DeepSeek/Z.AI/MiniMax/Mistral/Cloudflare/MS Foundry…）、Plugin/Skill/Channel/Hook/SDK 全栈 | PicoClaw/NanoBot 覆盖窄但聚焦；LobsterAI 偏桌面；IronClaw 偏企业 |
| **核心差异化** | "**Provider-中立网关 + 插件生态 + 多渠道覆盖**" 三位一体 | LobsterAI 偏桌面封装、IronClaw 偏 Rust 重写、CoPaw 偏 AgentScope 绑定、Zeroclaw 偏 Rust + Wasm-first |
| **当前挑战** | (1) **补丁碎片化**：同一底层缺陷被拆 4–6 个 PR 重复提交（如 Anthropic `buildGuardedModelFetch` 拆分 6 个 PR、bundle plugin update 3 个并行 PR）；(2) **回归潮**：`2026.6.x` 与 `2026.5.x` 在 session 锁、OAuth、embedded-run、Telegram 通道上集中爆 P1；(3) **评审吞吐瓶颈**：448 条待合并 PR 排队，关闭比仅 10.4% | Zeroclaw/CoPaw 关闭比 36–66%，OpenClaw 显著落后 |

**定位小结**：OpenClaw 是生态事实标准的"参照点"——其他项目（NanoBot / NanoClaw / LobsterAI / CoPaw）均在其上层做集成或差异化封装。对开发者而言，OpenClaw 提供最大的生态兼容性与最丰富的渠道/Provider 组合，但**也意味着更高的升级风险与 PR 评审等待成本**。

---

## 4. 共同关注的技术方向

跨项目复现的需求与方向，按热度聚合如下：

### 🔴 高频同向痛点（≥3 个项目）

| 方向 | 涉及项目 | 代表诉求 |
|---|---|---|
| **Provider 流式/工具调用协议兼容** | OpenClaw、Zeroclaw、NanoBot、CoPaw/QwenPaw | OpenClaw #97877 空错误重试 / Zeroclaw #5600 kimi-code 缺 `reasoning_content` / NanoBot #4595 `apply_final_call_ids` 污染会话 / CoPaw #5342 工具结果硬上限 |
| **IM 渠道可靠性** | OpenClaw、Zeroclaw、NanoClaw、CoPaw | OpenClaw #80520 Telegram 静默丢失 / Zeroclaw #6157 Nextcloud Talk 错误 URL / NanoClaw #2888 Discord 附件丢失 / CoPaw #5561 飞书长消息接收失败 |
| **Cron / Heartbeat / Scheduled Task** | OpenClaw、NanoBot、Zeroclaw、LobsterAI、CoPaw | OpenClaw #82662 isolated cron 启动超时 / NanoBot #4418 心跳投递目标 / Zeroclaw #2128 NO_REPLY 哨兵 / LobsterAI #2219-#2220 cron 历史保留 / CoPaw #5616 任务莫名终止 |
| **OAuth / 鉴权复杂性** | OpenClaw、Zeroclaw、NanoBot、CoPaw、IronClaw | OpenClaw #80040 OAuth 级联故障 / Zeroclaw #8054 工具可见性未对齐 / NanoBot #4604 Anthropic OAuth 缺位 / CoPaw #5623 OFF 模式仍触发审批 / IronClaw #5413 OAuth refresh 静默吞错 |
| **Token 缓存 / 成本控制** | OpenClaw、NanoBot、CoPaw | OpenClaw #94518 DeepSeek 缓存命中率 < 10% / NanoBot #4222 max_messages 截断破坏 prefix 缓存 / CoPaw #3891 DeepSeek prefix 缓存（5 评论）|
| **WebUI 工程化打磨** | OpenClaw、IronClaw、NanoBot、CoPaw | OpenClaw #16896 右键回复（已关）/ IronClaw #5401 v2 文案本地化 / NanoBot #4587 Markdown 导出 / CoPaw #5643 SidebarSessionList 虚拟化 |

### 🟠 中频演进方向（2 个项目）

| 方向 | 涉及项目 | 代表信号 |
|---|---|---|
| **Wasm 插件运行时** | Zeroclaw、OpenClaw | Zeroclaw #8135 RFC + #6140 混合技能 / OpenClaw 多处 plugin 加载 |
| **OpenTelemetry / 可观测性** | Zeroclaw、IronClaw | Zeroclaw #6641/#6642 LLM/工具内容捕获 / IronClaw #5411 失败分类法 |
| **CI / 供应链安全硬化** | Zeroclaw、OpenClaw | Zeroclaw cargo-audit、SLSA、Windows Clippy / OpenClaw bundle plugin smoke check |
| **Computer-use / 桌面自动化** | Zeroclaw、CoPaw | Zeroclaw #6909 RFC / CoPaw #5187 Windows desktop GUI |
| **Plugin SDK 稳定性契约** | OpenClaw、NanoBot | OpenClaw #81913 stable SDK surface / NanoBot #4591 会话级本地触发器 |
| **多用户 / RBAC** | IronClaw、Zeroclaw | IronClaw #5425/#5394 RBAC 收敛 / Zeroclaw #8504 GitHub channel |
| **轻量化 vs 全功能** | NanoBot、PicoClaw | NanoBot #660 "ultra-lightweight" 自我定位争议 / PicoClaw NanoKVM 边缘硬件适配 |

### 🟡 单独出现但具有生态意义

| 方向 | 涉及项目 | 信号 |
|---|---|---|
| **Slack Socket Mode 引导式 setup** | NanoClaw | #2885 反映"分支提前合并"工程债 |
| **Hermes agent 支持** | LobsterAI | #2131 用户询问 |
| **多 Provider 心智模型切换** | Zeroclaw #6557、NanoBot #4419 | "运行时切换模型"成为高频需求 |
| **mTLS / 安全通道** | NanoClaw #2880 | CWE-59 symlink 转义修复 |

---

## 5. 差异化定位分析

| 项目 | 核心定位 | 目标用户 | 关键架构差异 |
|---|---|---|---|
| **OpenClaw** | **Provider-中立 AI 智能体网关 + 完整插件生态**

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

<think>Let me analyze the GitHub data for NanoBot (github.com/HKUDS/nanobot) to generate a comprehensive daily report for 2026-06-30.

Key observations from the data:
- 12 Issues updates (8 active/new, 4 closed)
- 33 PR updates (24 pending, 9 merged/closed)
- 0 new releases

Notable issues:
- #660: Closed - "ultra-lightweight" vs Node.js dependency contradiction (15 comments, 5 thumbs up - high engagement)
- #4418: Closed - Heartbeat task delivery channel feature
- #4419: Open - Automatic reasoning effort escalation
- #4222: Closed - max_messages truncation bug
- #4604: Open - Anthropic OAuth feature request
- #4580: Open - conda environment for subprocesses
- #4599: Open - Install script crash
- #4605: Open - Trigger agent action from external script
- #4603: Open - WebUI file-edit refactor
- #4595: Open - apply_final_call_ids bug (session poisoning)
- #4592: Open - ExecTool path extraction bug

Notable PRs:
- #4594: Fix for ExecTool path extraction (closes #4592)
- #4553: Closed - Heartbeat fixed delivery target (related to #4418)
- #4578: Provider-scoped proxy config
- #4601: WhatsApp read receipts
- #4596: Fix for apply_final_call_ids bug
- #4598: GitHub Copilot endpoint overrides
- #4602: Fix for install script crash
- #4600: Closed - WebUI prompt rail minimap
- #4554: Block Dream from creating duplicate skills
- #4293: Subagent result injection
- #4581: Context optimization/cost reduction
- #4502: Closed - Gateway webhook triggers
- #4584: MCP URL credential redaction

Let me organize this into the requested format.</think>

# NanoBot 项目日报
**日期：2026-06-30**

---

## 1. 今日速览

NanoBot 今日呈现高度活跃的研发态势，24 小时内共产生 **33 个 PR 更新**（含 24 个待合并、9 个已合并/关闭）和 **12 个 Issue 更新**（8 活跃 / 4 已关闭）。社区贡献明显集中在**安全修复、流式工具调用鲁棒性、安装体验**三大方向，多个高优 Bug 已被对应 PR 修复并进入评审。整体节奏健康，但 PR 待合并积压偏多（24/33），维护者审阅压力较大。今日无新版本发布。

---

## 2. 版本发布

⚠️ **今日无新版本发布。** 最近发布的版本（不在本次数据窗口内）仍是项目当前活跃迭代基线。

---

## 3. 项目进展

今日合并/关闭的 9 个 PR 中，有 4 个对项目核心能力有实质性推进：

| PR | 标题 | 状态 | 意义 |
|---|---|---|---|
| [#4502](https://github.com/HKUDS/nanobot/pull/4502) | gateway webhook triggers | CLOSED | 为网关层引入标准化的入站 Webhook 触发器，支持通用与 GitHub 类型，替换旧的内联 health listener 为共享 HTTP ingress（带 body 限制与读取超时）。 |
| [#4553](https://github.com/HKUDS/nanobot/pull/4553) | feat(heartbeat): channel/chat_id 固定投递目标 | CLOSED | 解决 #4418 的痛点，HeartbeatConfig 支持固定 channel/chat_id，避免"总是发送到最近活跃频道"的歧义行为。 |
| [#4600](https://github.com/HKUDS/nanobot/pull/4600) | WebUI prompt rail minimap 优化 | CLOSED | WebUI 交互细节打磨：左侧 Codex 式 prompt 导航条 + hover 焦点。 |
| #4293 之外的多项 | — | — | 见下文 |

**整体推进判断：**项目今日在**通道投递可靠性、安全加固、WebUI 体验**三方面均有里程碑式 PR 关闭，但仍以**待合并 PR 储备**为主，下一版本或将集中收割多项安全/性能改进（见第 6 节）。

---

## 4. 社区热点

### 🔥 最受关注 Issue

**[#660 — Project claims to be 'ultra-lightweight' but includes bloated Node.js dependency](https://github.com/HKUDS/nanobot/issues/660)**
- 📊 15 评论 / 5 👍（本日数据窗口内最高互动量）
- 标签：`good first issue`、`help wanted`、`feature request`
- 核心诉求：用户质疑项目"ultra-lightweight"自我定位与 Dockerfile 中 Python+Node.js 双依赖之间的矛盾，要求要么去除 Node.js 依赖，要么诚实改写定位文案。
- ✅ **已于今日 CLOSED**，但状态演变未在摘要中明确，需要关注是否落实。

### 其他高互动条目

| 链接 | 标题 | 评论 | 状态 |
|---|---|---|---|
| [#4418](https://github.com/HKUDS/nanobot/issues/4418) | Heartbeat 任务应投递到添加时的频道 | 4 | CLOSED（已由 #4553 实现） |
| [#4419](https://github.com/HKUDS/nanobot/issues/4419) | 自动 reasoning effort 升级机制 | 4 | OPEN |
| [#4222](https://github.com/HKUDS/nanobot/issues/4222) | max_messages 截断破坏 prompt 缓存 | 3 | CLOSED |
| [#4604](https://github.com/HKUDS/nanobot/issues/4604) | Anthropic OAuth 支持 | 2 | OPEN |
| [#4580](https://github.com/HKUDS/nanobot/issues/4580) | 为子进程使用 conda 环境 | 1 | OPEN（标记 stale） |

**热点诉求归因：**
1. **架构诚信**（#660）：用户对项目"轻量"定位的信任问题。
2. **多 Provider 生态**（#4419、#4604、#4598）：reasoning 控制、Anthropic OAuth、企业 GHE Copilot，反映了 LLM 客户端正从"单一 SDK"转向"Provider 中立网关"的需求。
3. **可观测性**（#4605、#4587）：用户希望从外部脚本/导出层面接入 agent 行为。

---

## 5. Bug 与稳定性

按严重程度排列：

### 🔴 严重 — 会话/工具调用语义破坏

**[#4595 — apply_final_call_ids overwrites correct tool_call ids for non-file-edit tools, causing permanent session poisoning](https://github.com/HKUDS/nanobot/issues/4595)**
- 影响范围：**所有非文件编辑工具**（含 `read_file`），会导致持久化会话出现重复 `tool_use` id，后续轮次全部失效。
- 状态：**已有修复 PR [#4596](https://github.com/HKUDS/nanobot/pull/4596)**（OPEN，待合并）。

### 🟠 高 — 安装/首启体验崩溃

**[#4599 — Install script crash issue](https://github.com/HKUDS/nanobot/issues/4599)**
- 在 Linux 上执行安装脚本，进入 TUI 后立即崩溃，未按键即退出。
- 状态：**已有修复 PR [#4602](https://github.com/HKUDS/nanobot/pull/4602)**（处理无 TTY / 管道安装场景）。

### 🟠 高 — 安全边界绕过

**[#4592 — ExecTool path extraction misses absolute paths after equals sign](https://github.com/HKUDS/nanobot/issues/4592)**
- 当 `restrictToWorkspace` 开启时，`curl --output=/etc/passwd` 这类语法能绕过工作区边界检查。
- 状态：**已有修复 PR [#4594](https://github.com/HKUDS/nanobot/pull/4594)**（OPEN，安全标签）。

### 🟡 中 — 缓存效率与成本

**[#4222 — max_messages truncation and microcompact continuously invalidate prefix/prompt caching](https://github.com/HKUDS/nanobot/issues/4222)**
- 两个上下文治理机制使得每轮的 prompt 前缀都发生位移/变更，破坏 LLM 厂商的 prefix 缓存，导致 token 成本上升。
- 状态：已 CLOSED，修复细节需在合入 PR 中追溯。
- 关联 PR：[#4581](https://github.com/HKUDS/nanobot/pull/4581)（optimization: reducing context usage and thus reducing costs，OPEN）可能延续此方向。

### 🟢 低 — 信息/日志泄露

- **PR [#4584](https://github.com/HKUDS/nanobot/pull/4584) fix(mcp): redact credentials from URLs before logging**（OPEN）：MCP 连接/校验日志可能泄露 `user:token@host` 或 `?token=` 形式的密钥。

**汇总**：今日 4 个高危 Bug 全部有对应 PR 跟进，**修复链路完整**，但仍需维护者加快合并评审。

---

## 6. 功能请求与路线图信号

### 高概率进入下个版本

| 需求 | 信号强度 | 关联 |
|---|---|---|
| **心跳任务固定投递目标** | ★★★★★ | #4418 已 CLOSED，#4553 已 CLOSED |
| **Provider 级代理配置** | ★★★★ | [#4578](https://github.com/HKUDS/nanobot/pull/4578) OPEN，覆盖 OpenAI 兼容 + Codex，含 OAuth 路径 |
| **WhatsApp 已读回执（蓝色双勾）** | ★★★★ | [#4601](https://github.com/HKUDS/nanobot/pull/4601) OPEN，PR 已就绪 |
| **GitHub Copilot 端点覆盖（GHE / 企业版）** | ★★★★ | [#4598](https://github.com/HKUDS/nanobot/pull/4598) OPEN，关闭 #4220 |
| **WebUI 会话时间戳默认显示 / Markdown 导出** | ★★★ | [#4586](https://github.com/HKUDS/nanobot/pull/4586) / [#4587](https://github.com/HKUDS/nanobot/pull/4587) OPEN |
| **外部脚本触发 agent 行为** | ★★★ | [#4605](https://github.com/HKUDS/nanobot/issues/4605) OPEN；[#4591](https://github.com/HKUDS/nanobot/pull/4591) 会话级本地触发器 PR 已存在 |

### 中等概率 / 仍在讨论

| 需求 | 备注 |
|---|---|
| **自动 reasoning effort 升级** | [#4419](https://github.com/HKUDS/nanobot/issues/4419) OPEN，目前 nanobot 已支持 `reasoningEffort` 配置字段，需求侧希望引入"失败/超时自动升级"机制。 |
| **Anthropic OAuth** | [#4604](https://github.com/HKUDS/nanobot/issues/4604) OPEN，来自讨论区 #4593，模型中立战略的关键缺口。 |
| **conda 虚拟环境用于子进程** | [#4580](https://github.com/HKUDS/nanobot/issues/4580) OPEN，已被标记 stale，需维护者响应。 |

### 路线图洞察

项目正向 **"Provider 中立的 LLM 客户端 + 强安全边界 + 完整 WebUI 生态"** 三轴演进。下版本最可能的核心 PR 集合（按已就绪度排序）：

1. [#4578](https://github.com/HKUDS/nanobot/pull/4578) — Provider 代理配置
2. [#4598](https://github.com/HKUDS/nanobot/pull/4598) — Copilot 企业端点
3. [#4601](https://github.com/HKUDS/nanobot/pull/4601) — WhatsApp 已读回执
4. [#4594](https://github.com/HKUDS/nanobot/pull/4594) + [#4596](https://github.com/HKUDS/nanobot/pull/4596) — 安全/正确性必修
5. [#4587](https://github.com/HKUDS/nanobot/pull/4587) + [#4586](https://github.com/HKUDS/nanobot/pull/4586) — WebUI 导出/时间戳

---

## 7. 用户反馈摘要

### ✅ 满意点

- **轻量化代码可读性**：[#4605](https://github.com/HKUDS/nanobot/issues/4605) 用户明确表示："Compared to OpenClaw, the lightweight codebase makes it easy to read and understand the source, which I really appreciate." —— 这与 #660 的"ultra-lightweight"质疑形成有趣对比，说明**代码层面轻量是社区共识，但运行依赖层面是争议焦点**。
- **Gmail 技能集成体验**：用户通过 gws CLI 自行搭建了邮件分类技能，表示"works great"。

### 😣 痛点

1. **心跳输出投错频道**（#4418）：任务上下文与投递目标脱钩，是企业/团队场景下的可靠性痛点。
2. **流式工具 id 污染会话**（#4595）：影响**所有并行工具调用**场景，会话一旦被污染基本不可恢复。
3. **安装脚本 TUI 崩溃**（#4599）：在新用户首启路径上制造了严重摩擦。
4. **MCP 凭证日志泄露风险**（#4584 修复）：用户担忧 `Blocked unsafe MCP URL ...` 类日志会无意中打印密钥。
5. **Prefix 缓存被反复失效**（#4222）：直接推高 token 成本，模型选择越便宜越敏感。

### 💡 真实使用场景

- **Gmail 自动分级 → 触发 agent**（#4605）：用户希望按邮件重要性让 agent 主动响应，揭示了"事件驱动 agent"是高级用户的刚需。
- **Cron / Heartbeat + subagent 协作**（#4293）：证明项目正在被用于复杂的多任务调度场景。

---

## 8. 待处理积压

### ⚠️ 维护者需要重点关注的"沉默"项

| 链接 | 标题 | 创建距今 | 风险 |
|---|---|---|---|
| [#4580](https://github.com/HKUDS/nanobot/issues/4580) | Use conda environment for subprocesses | 6 月 28 日（已被标记 stale） | 用户主动标记无响应，可能被社区视为"维护失活"信号 |
| [#4293](https://github.com/HKUDS/nanobot/pull/4293) | fix(agent): pending_queue for subagent result injection | 6 月 11 日（**已 19 天**） | 涉及 cron + subagent 链路，重要但未合并 |
| [#4554](https://github.com/HKUDS/nanobot/pull/4554) | block Dream from creating duplicate skills | 6 月 26 日（4 天） | 影响记忆系统质量 |
| [#4591](https://github.com/HKUDS/nanobot/pull/4591) | Add session-bound local triggers | 6 月 29 日 | 体验性功能但 PR 较大 |

### 📌 建议

1. **优先合并安全 PR**：[#4594](https://github.com/HKUDS/nanobot/pull/4594)、[#4596](https://github.com/HKUDS/nanobot/pull/4596)、[#4584](https://github.com/HKUDS/nanobot/pull/4584) 均为安全/正确性修复，应作为下个 hotfix 版本的第一批内容。
2. **响应 #660 的关闭**：作为 15 评论 / 5 👍 的高曝光议题，需要 release notes 或文档明确说明 Node.js 依赖的去留。
3. **重新激活 #4580**：stale 标记会抑制社区参与度，建议维护者至少做出"评估中/不纳入"的明确反馈。

---

## 📊 当日健康度指标

| 维度 | 评分 | 说明 |
|---|---|---|
| 活跃度 | ★★★★★ | 33 PR / 12 Issue，单日数据量处于高水平 |
| Bug 修复速度 | ★★★★ | 全部高危 Bug 已有对应 PR |
| 社区响应 | ★★★ | 高优 Issue 已闭环，但 stale 标签开始出现 |
| 安全态势 | ★★★★ | 主动发现并修复多类安全/边界问题 |
| 版本节奏 | ★★ | 今日无 release，PR 合并积压偏多（24 待合并） |

**结论**：NanoBot 项目处于**高研发强度 + 健康修复节奏**的阶段，下一个版本（如果能尽快收割今日就绪 PR）将在**Provider 生态、安全加固、WebUI 体验**三方面获得显著跃升。维护者当前最需要关注的是**审阅吞吐**与**对 stale 议题的主动响应**。

</details>

<details>
<summary><strong>Zeroclaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

<think>The user wants me to generate a daily report for the Zeroclaw project based on the GitHub data provided. Let me analyze the data carefully and structure it according to the 8 sections requested.

Let me extract the key information:

**Overall Stats:**
- 50 Issues updates (41 new/active, 9 closed)
- 50 PR updates (32 pending merge, 18 merged/closed)
- 0 new releases
- 0 👍 reactions on any of the issues (this is notable - low community engagement signals)

**Top Issues by comment count:**
1. #6808 - RFC: Work Lanes, Board Automation, Label Cleanup (12 comments)
2. #5600 - [Bug]: Use kimi-code provider in streaming chat call tools (11 comments, 1 👍)
3. #8054 - System prompt tool-availability should match per-turn effective tools (9 comments)
4. #2467 - [Feature]: Webhook transforms (6 comments)
5. #6909 - RFC: Computer-use support for desktop (6 comments)
6. #7800 - [Bug]: Code help/keybindings misleading (5 comments)
7. #6642 - [Feature]: Capture full prompt/completion on llm.call spans (4 comments)
8. #6557 - [Feature]: Reconcile runtime model switching (4 comments)
9. #2128 - [Bug]: Cron and heartbeat delivery NO_REPLY (CLOSED, 4 comments)
10. #6157 - [Bug]: Nextcloud Talk use correct bot message API (4 comments)

**Key Merged/Closed PRs:**
- #8450 - test(config): cover postgres backend field-visibility exclusions
- #8225 - fix(deps): bump strum versions
- #8476 - fix(providers/openai-codex): gate has_tools on non-empty list
- #8472 - fix(zerocode): clear transcript highlight on input click
- #8361 - fix(channels): replace Regex::new().unwrap() with expect()
- #8336 - feat(nix): Repair zeroclaw/zerocode nix builds
- #8273 - test(plugins): cover WasmTool accessors
- #8129 - ci(workflows): add cargo-audit step to PR gate

**Bug severity analysis:**
- P1/S1 (critical): 
  - #5600 - kimi-code provider streaming (S1, workflow blocked, 11 comments)
  - #8054 - System prompt tool-availability (S2, blocked status)
  - #7756 - native/MCP tools unavailable on OpenAI/Anthropic (S1)
  - #6891 - Scheduled Jobs edit error API 422 (S1)
- P2/S2 (high):
  - #7800 - Code help/keybindings misleading
  - #2128 - Cron NO_REPLY (CLOSED)
  - #6157 - Nextcloud Talk API
  - #8327 - IMAGE markers (CLOSED)
  - #8379 - WhatsApp passive context (CLOSED)

**Open PRs of note:**
- #8504 - feat(channels): add GitHub channel with SOP ingress (XL)
- #8488 - fix(channels): derive channel prompt tool-availability
- #8322 - fix(fill-translations): drop stale translations
- #8517 - ci: gate Windows Clippy
- #8516 - ci: guard declared repository submodules
- #8443 - feat(matrix): single-message streaming drafts
- #8384 - feat(inkbox): native channel
- #8311 - feat(config): configurable native runtime shell
- #8277 - ci: SLSA provenance attestation
- #8485 - refactor(ci): consolidate prebuilt Docker image variants
- #8480 - ci(npm): daily audit sweep
- #8460 - perf(channels): bound orchestrator notify channel

**Long-standing issues (no response):**
- #2128 - Created 2026-02-27 (about 4 months old), now closed
- #2467 - Created 2026-03-02 (~4 months old), still open with 6 comments
- Most other issues are from late April to June 2026

Let me now construct the report in Chinese as requested. The user asked for a structured daily report in Chinese.

Key observations:
1. No new releases today
2. Heavy focus on CI/security infrastructure (multiple PRs about CI hardening)
3. Provider bugs being addressed (kimi, openai-codex)
4. Channel expansion (GitHub, Inkbox, Matrix streaming)
5. Wasm plugin ecosystem development
6. OTel observability enhancements
7. Low community engagement (0 likes across all issues)
8. Mix of bugs and feature requests

Let me write the report now.</think>

# Zeroclaw 项目日报 · 2026-06-30

---

## 1. 今日速览

Zeroclaw 仓库今日保持中等强度开发节奏：**50 条 Issue 更新 + 50 条 PR 更新**，但**无新版本发布**，处于版本间迭代期。从结构看，活跃度集中在三个方向：(1) **CI/供应链安全加固**（cargo audit、SLSA provenance、Windows Clippy、子模块守卫等多个 PR 并行推进）；(2) **Provider 与 Channel 缺陷修复**（kimi-code、openai-codex、Nextcloud Talk 等）；(3) **Wasm 插件生态与 OTel 可观测性 RFC 讨论**。需注意**所有 Issues 的 👍 反应数均为 0**，反映社区互动信号偏弱，外部用户参与度有限。

---

## 2. 版本发布

**今日无新版本发布。** 当前最新可见版本为 0.8.1，多个 Tracker（如 #8071 v0.8.3 runtime tracker）显示下一版本仍在规划中。

---

## 3. 项目进展

今日 **18 个 PR 被合并/关闭**，覆盖缺陷修复、依赖升级、CI 基础设施和测试覆盖，关键进展包括：

| PR | 类型 | 意义 |
|---|---|---|
| [#8476](https://github.com/zeroclaw-labs/zeroclaw/pull/8476) | fix(provider) | `openai_codex` 修复 `has_tools` 在空列表时的误判，修复 vLLM 0.19+ 触发 400 的回归 |
| [#8472](https://github.com/zeroclaw-labs/zeroclaw/pull/8472) | fix(zerocode) | TUI 输入框点击时清除转录高亮状态，提升交互体验 |
| [#8361](https://github.com/zeroclaw-labs/zeroclaw/pull/8361) | fix(channel/memory) | 将 `Regex::new().unwrap()` 替换为带变量名的 `.expect()`，便于回溯定位 |
| [#8336](https://github.com/zeroclaw-labs/zeroclaw/pull/8336) | feat(nix) | 修复 Nix 构建（whatsapp crate 缺少 NAR 哈希），并新增 `refresh-nix-hashes.sh` 脚本 |
| [#8225](https://github.com/zeroclaw-labs/zeroclaw/pull/8225) | fix(deps) | 升级 `strum` 至 0.28，清理 lockfile 中重复条目 |
| [#8273](https://github.com/zeroclaw-labs/zeroclaw/pull/8273) | test(plugin) | 为 `WasmTool` accessor 与默认 schema 补齐单元测试 |
| [#8450](https://github.com/zeroclaw-labs/zeroclaw/pull/8450) | test(config) | 覆盖 postgres 后端字段可见性排除的回归测试 |
| [#8129](https://github.com/zeroclaw-labs/zeroclaw/pull/8129) | ci(security) | PR gate 新增 `cargo audit`，同步 advisory 忽略列表 |

**整体判断**：今日合并的 PR 主要是"小而实"的修复与测试补全，CI 安全闭环逐步成型。重大功能（GitHub channel、Inkbox channel、Matrix 流式草稿、Wasm-first runtime）仍在 Open 状态，未合并。

---

## 4. 社区热点

今日讨论最活跃的 Issues 集中在**治理 RFC、关键 Bug 与跨入口一致性**三大主题：

| 排名 | Issue | 评论 | 👍 | 主题 |
|---|---|---|---|---|
| 1 | [#6808](https://github.com/zeroclaw-labs/zeroclaw/issues/6808) | 12 | 0 | RFC: Work Lanes、看板自动化与 Label 清理（v0.8.0-beta-1→0.8.1 治理提案，Rev. 6） |
| 2 | [#5600](https://github.com/zeroclaw-labs/zeroclaw/issues/5600) | 11 | **1** | kimi-code provider 在流式调用工具时返回 400 "thinking is enabled but reasoning_content is missing" |
| 3 | [#8054](https://github.com/zeroclaw-labs/zeroclaw/issues/8054) | 9 | 0 | 系统提示工具可用性未与"逐轮有效工具"在所有入口（channel/gateway/WS/多模态）保持一致 |
| 4 | [#2467](https://github.com/zeroclaw-labs/zeroclaw/issues/2467) | 6 | 0 | Webhook 自定义路径与 payload 转换（运行 4 个月仍未落地） |
| 5 | [#6909](https://github.com/zeroclaw-labs/zeroclaw/issues/6909) | 6 | 0 | RFC: 桌面 computer-use 支持（截图 + 鼠标/键盘事件） |
| 6 | [#7800](https://github.com/zeroclaw-labs/zeroclaw/issues/7800) | 5 | 0 | ZeroCode TUI 帮助/快捷键误导且不可达（尤其 macOS） |
| 7 | [#6642](https://github.com/zeroclaw-labs/zeroclaw/issues/6642) | 4 | 0 | OTel: 通过 `gen_ai.input.messages/output.messages` 捕获完整 prompt/completion |

**诉求分析**：社区最关心的是 (a) **多入口下的行为一致性**（#8054/#7756）、(b) **可观测性补全**（OTel 多个 RFC 串联）、(c) **桌面自动化能力**（computer-use 对标 OpenAI Codex）。治理 RFC #6808 长达 6 个版本修订说明维护者重视流程规范化。

---

## 5. Bug 与稳定性

按严重程度排列今日活跃或新近报告的 Bug：

### 🔴 P1 / S1（工作流阻塞）

- **[#5600 kimi-code 流式 provider 错误](https://github.com/zeroclaw-labs/zeroclaw/issues/5600)** — 开启 thinking 时 assistant 消息缺少 `reasoning_content` 字段，provider 返回 400。**已有修复信号但未见对应 PR 链接**。
- **[#7756 native/MCP 工具在 OpenAI Responses/Anthropic 推理模型下不可用](https://github.com/zeroclaw-labs/zeroclaw/issues/7756)** — MCP 工具注册但模型侧未收到。**已由 [#8053](https://github.com/zeroclaw-labs/zeroclaw/pull/8053) 修复直连路径，#8054 跟进覆盖其他入口；今日新增 [#8488](https://github.com/zeroclaw-labs/zeroclaw/pull/8488) 处理 channel 路径（Surface 1(a)，Open）。**
- **[#6891 定时任务编辑 API 422](https://github.com/zeroclaw-labs/zeroclaw/issues/6891)** — Web gateway 调度任务编辑界面仍为 v0.8.0-beta1 之前版本，缺少字段。**尚无对应修复 PR。**

### 🟠 P2 / S2（行为降级）

- **[#7800 ZeroCode 快捷键误导](https://github.com/zeroclaw-labs/zeroclaw/issues/7800)** — TUI 帮助文档与实际可达性不一致（macOS 尤为严重）。**无修复 PR。**
- **[#6157 Nextcloud Talk 错误 bot message API](https://github.com/zeroclaw-labs/zeroclaw/issues/6157)** — URL 构造方式错误导致响应失败。**无修复 PR。**
- **[#8410 Channel 任务缺少显式 no-reply 结果](https://github.com/zeroclaw-labs/zeroclaw/issues/8410)** — 条件性 channel 任务在无内容时仍发送可见响应，关联讨论 #8394。**无修复 PR。**

### ✅ 今日已关闭

- **[#2128 Cron/heartbeat 仍发送 NO_REPLY 哨兵文本](https://github.com/zeroclaw-labs/zeroclaw/issues/2128)** — 已关闭，4 条评论。
- **[#8327 native tool 调用中 `[IMAGE:data:...]` 标记作为纯文本发送，膨胀 token](https://github.com/zeroclaw-labs/zeroclaw/issues/8327)** — 已关闭。
- **[#8379 WhatsApp Web 群聊被动上下文](https://github.com/zeroclaw-labs/zeroclaw/issues/8379)** — 已关闭（功能已落地或被否决）。

**稳定性判断**：尚有 3 个 P1 Bug 未完全闭环，其中 **#5600 的修复 PR 缺失**应作为本周优先事项。

---

## 6. 功能请求与路线图信号

### 高优先级 RFC（已有讨论基础或并行实现）

- **计算机桌面控制（computer-use）** — [#6909](https://github.com/zeroclaw-labs/zeroclaw/issues/6909)：对标 OpenAI Codex / openclaw / hermes，预计将影响 `tools/browser` 模块。
- **Webhook transforms** — [#2467](https://github.com/zeroclaw-labs/zeroclaw/issues/2467)：运营级需求（用户用 GitHub Webhook 触发），长期未排期。
- **Telegram 可选 webhook 模式** — [#8046](https://github.com/zeroclaw-labs/zeroclaw/issues/8046)：替代长轮询，降低 NAT 部署复杂度。
- **ACP bridge 配对解耦一次性 code** — [#6754](https://github.com/zeroclaw-labs/zeroclaw/issues/6754)：当前 `GET /pair/code` 静默失败，token 缓存脆弱。
- **运行时策略：OTel LLM/工具内容** — [#8462](https://github.com/zeroclaw-labs/zeroclaw/issues/8462) 与 [#6641](https://github.com/zeroclaw-labs/zeroclaw/issues/6641) / [#6642](https://github.com/zeroclaw-labs/zeroclaw/issues/6642) 串联，构成完整可观测性矩阵。

### 已实现或进行中的功能（Open PR）

- **GitHub channel** — [#8504](https://github.com/zeroclaw-labs/zeroclaw/pull/8504)（XL）：GitHub App 鉴权 + 仓库轮询 + Issue/PR/Review/Workflow/Release/Reaction 全事件接入。
- **Inkbox channel** — [#8384](https://github.com/zeroclaw-labs/zeroclaw/pull/8384)（XL）：邮件 + SMS + 语音 + iMessage 一站式通道，配 Quickstart 向导。
- **Matrix 单消息流式草稿** — [#8443](https://github.com/zeroclaw-labs/zeroclaw/pull/8443)（XL）：工具/进度/推理活动流合并为一条可编辑草稿。
- **Wasm-first 插件运行时** — [#8135](https://github.com/zeroclaw-labs/zeroclaw/issues/8135) RFC 与 [#6140](https://github.com/zeroclaw-labs/zeroclaw/issues/6140) 混合技能同步推进。

### CI/安全基础设施（接近合并）

- **[#8277 SLSA L3 provenance](https://github.com/zeroclaw-labs/zeroclaw/pull/8277)**、**[#8516 子模块守卫](https://github.com/zeroclaw-labs/zeroclaw/pull/8516)**、**[#8517 Windows Clippy 闸门](https://github.com/zeroclaw-labs/zeroclaw/pull/8517)**、**[#8480 每日 npm audit](https://github.com/zeroclaw-labs/zeroclaw/pull/8480)**、**[#8485 Docker 镜像变体合并](https://github.com/zeroclaw-labs/zeroclaw/pull/8485)** — 共同回应 RFC #8177 Phase A 与 #8056/#8057。

### v0.8.3 路线图追踪

- **[#8071 v0.8.3 runtime tracker](https://github.com/zeroclaw-labs/zeroclaw/issues/8071)** 已建立，将 runtime/agent loop/tools/skills/cron/memory 等执行稳定性纳入统一管理。

---

## 7. 用户反馈摘要

从 Issues 评论中提炼的真实痛点：

- **多 provider 流式兼容性问题（#5600）**：用户反馈 kimi-code（Moonshot AI）在开启 reasoning 时流式响应失败，错误信息"thinking is enabled but reasoning_content is missing in assistant tool call"暴露兼容模式 provider 对推理模型的协议差异。这是 **真实生产阻塞**，且 11 条评论表明影响范围不局限于单一用户。
- **Nextcloud Talk 集成基本不可用（#6157）**：bot 消息 API URL 路径错误，说明该 channel 集成缺乏端到端验证。
- **macOS 用户体验痛点（#7800）**：ZeroCode TUI 帮助系统对快捷键的描述在 macOS 实际不可达，键盘模型差异未适配。
- **Channel 噪声（#2128/#8410）**：当 agent 决定"无可报告"时仍向 channel 发送 "NO_REPLY" 字符串或可见响应，污染用户对话流；#2128 已关闭，#8410 仍在讨论。
- **调度任务 UI 与后端脱节（#6891）**：v0.8.0-beta1 后前端界面未同步更新，导致编辑失败，反映**版本升级未对 Web 仪表盘做充分迁移测试**。
- **WhatsApp 群聊上下文丢失（#8379）**：非 @ 消息被丢弃，操作者希望以"被动上下文"方式保留——已关闭，需关注后续是否在 PR 中实现。

**满意度信号**：所有 Issue 的 👍 数均为 0（除 #5600 有 1 个 👍），表明用户倾向于通过评论反馈问题而非表达赞同/支持，社区情感数据缺失。

---

## 8. 待处理积压

需维护者重点关注的长期/高优先级未结

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

<think>The user wants me to generate a project daily report for PicoClaw based on GitHub data. Let me analyze the data carefully:

**Data Summary:**
- 24h Issues: 4 updates (new/active: 3, closed: 1)
- 24h PRs: 3 updates (pending: 3, merged/closed: 0)
- New releases: 0

**Issues Analysis:**
1. #3093 [OPEN] [stale] - Feature request for SimpleX/Tox gateways (4 comments, 1 👍)
2. #3090 [CLOSED] [stale] - BUG about Safari iOS below 16.4 (closed)
3. #3153 [OPEN] [stale] - BUG about Volcengine Doubao tool calls leak (2 comments, 0 👍)
4. #3195 [OPEN] - BUG about OpenAI GPT not working on NanoKVM (new today, 0 comments)

**PRs Analysis:**
1. #3063 [OPEN] - feat: add deltachat gateway (created 2026-06-08)
2. #3163 [OPEN] - feat(bedrock): leverage Converse prompt caching (created 2026-06-23)
3. #3156 [OPEN] [stale] - feat(pico): emit per-turn LLM token usage (created 2026-06-22)

Now I need to write a structured daily report in Chinese, with 8 sections as requested. Let me be objective, data-driven, and professional.

Key observations:
- No new releases
- No PRs merged/closed
- 1 issue closed (Safari iOS bug)
- 3 active issues, including a new one (#3195)
- All PRs are still open, no movement
- Several issues are marked [stale]
- The deltachat gateway PR (#3063) has been open since June 8 (22 days)
- The bedrock caching PR (#3163) is from June 23 (7 days)

Let me also note that the report date is 2026-06-30.

I should mention:
- Project activity is moderate-to-low
- Stale issues need attention
- OpenAI GPT compatibility issue with new NanoKVM platform is a fresh issue worth monitoring
- Several feature requests and improvements in pipeline

Let me write this in a clear, professional Chinese tone.</think>

# PicoClaw 项目日报

**报告日期**：2026-06-30
**数据来源**：GitHub (github.com/sipeed/picoclaw)

---

## 1. 今日速览

PicoClaw 今日整体活跃度处于**中等偏低**水平。过去 24 小时内共产生 4 条 Issue 更新和 3 条 PR 更新，但**无任何 PR 合入或关闭**，也没有新版本发布。值得注意的是，1 条已存在 20 天的 Bug Issue（#3090 Safari iOS 兼容性问题）被标记为已关闭，但仍有 3 条 Issue 处于 Open 状态且被系统标记为 `stale`（长期无响应），社区响应链路存在明显积压。项目当前处于功能演进与稳定性修复并行的阶段，但合并节奏放缓。

---

## 2. 版本发布

🚫 **本节无更新内容**——过去 24 小时内未发布任何新版本。最近一次版本仍为 Issue #3090 中提及的 **v0.2.9**（间接信息），目前项目距上一稳定版已超过 3 周未发新版。

---

## 3. 项目进展

**今日无任何 PR 合入**。3 条活跃 PR 均处于待评审/待合并状态：

| PR | 标题 | 状态 | 链接 |
|---|---|---|---|
| #3063 | feat: add deltachat gateway | Open（已开放 22 天） | [查看](https://github.com/sipeed/picoclaw/pull/3063) |
| #3163 | feat(bedrock): leverage Converse prompt caching via cache points | Open（已开放 7 天） | [查看](https://github.com/sipeed/picoclaw/pull/3163) |
| #3156 | feat(pico): emit per-turn LLM token usage on finalized message | Open（已开放 8 天，stale） | [查看](https://github.com/sipeed/picoclaw/pull/3156) |

**信号解读**：社区贡献者 @loafoe 在过去一周内连续提交两条功能 PR（Bedrock prompt caching、Pico token usage 上报），显示其活跃度高，但维护者侧未见任何 review/commit 动作。**这意味着项目主干今日 0 行代码变动**，需要警惕维护者响应瓶颈。

---

## 4. 社区热点

按评论数与点赞数综合排名：

### 🥇 Issue #3093 — Feature Request: I need SimpleX or Tox gateway
- **作者**：@Damian-o2 ｜ **评论数**：4 ｜ **点赞**：1
- **链接**：[#3093](https://github.com/sipeed/picoclaw/issues/3093)
- **分析**：用户希望 PicoClaw 支持 SimpleX、Wire 或 Tox 作为 Gateway 通道。Issue 内出现 4 条评论说明社区有实质讨论。结合今日仍处 Open 的 PR **#3063**（feat: add deltachat gateway, @trufae），可以看出 **"为 PicoClaw 增加更多去中心化/隐私优先的聊天协议网关"** 已成为社区明确诉求方向，但目前 deltachat PR 长期未合并，SimpleX/Tox 尚无 PR 跟进。

### 🥈 Issue #3153 — Volcengine Doubao Seed tool calls leak as text
- **作者**：@ms8great ｜ **评论数**：2 ｜ **点赞**：0
- **链接**：[#3153](https://github.com/sipeed/picoclaw/issues/3153)
- **分析**：使用 `doubao-seed-2.0-pro` 模型时，部分 tool_call 被以原始 `<seed:tool_call>` 文本回显而非执行，属于模型侧标签解析回归。评论反映用户在 AI 编程场景下遇到稳定性问题。

---

## 5. Bug 与稳定性

按严重程度排序：

### 🔴 严重 — Issue #3195：OpenAI GPT does not work on NanoKVM with default config
- **状态**：Open（今日新增）
- **作者**：@rtadams89 ｜ **链接**：[#3195](https://github.com/sipeed/picoclaw/pull/3195) *(注：链接指向 issue)*
- **描述**：在 NanoKVM 2.4.0 上配置 PicoClaw 使用 `gpt-5.4` 时，所有交互均失败。NanoKVM 是 Sipeed 近期主推的硬件载体，此问题直接阻碍**最新硬件产品 + PicoClaw 的开箱体验**。
- **是否有 fix PR**：❌ 无
- **建议**：维护者应优先排查 OpenAI 兼容层与新版 gpt-5.x 的 endpoint/auth 兼容性问题。

### 🟠 中等 — Issue #3153：Volcengine Doubao tool_call 文本泄漏
- **状态**：Open（已被系统标 stale）
- **链接**：[#3153](https://github.com/sipeed/picoclaw/issues/3153)
- **是否有 fix PR**：❌ 无

### ✅ 已关闭 — Issue #3090：Safari iOS < 16.4 Panel 不工作
- **状态**：✅ Closed
- **链接**：[#3090](https://github.com/sipeed/picoclaw/issues/3090)
- **说明**：今日关闭的具体修复内容未在快照中体现，建议确认关闭原因（是已修复、超时关闭、还是无法复现）。

---

## 6. 功能请求与路线图信号

| 诉求 | 来源 | 信号评估 |
|---|---|---|
| **去中心化 Gateway 协议（SimpleX / Tox / Wire）** | #3093 | 🟢 强 — 已有同类 PR #3063 (DeltaChat) 在途，可能合并后带动该方向 |
| **AWS Bedrock Prompt Caching 支持** | PR #3163 | 🟢 强 — 面向企业用户降本场景，由活跃贡献者推动 |
| **Pico 通道每轮 Token 用量上报** | PR #3156 | 🟢 强 — 支持计费/观测闭环，对 SaaS 化至关重要 |
| **OpenAI 新版本（gpt-5.x）兼容** | #3195 | 🟠 中 — 需先修复才能谈"新功能" |

**结论**：下一版本（若近期发布）较可能的功能点集中在 **AWS 成本优化 + 观测增强 + 第三方协议网关扩展**；但 OpenAI 兼容性 Bug 已成为必须先解的阻塞项。

---

## 7. 用户反馈摘要

- **.NET 痛点**：用户 @rtadams89 在 NanoKVM（树莓派类设备）上首次部署 PicoClaw 就遇到默认配置 GPT 失败，**说明开箱体验对新硬件不友好**，文档可能也未及时覆盖新模型 endpoint。
- **国产模型兼容性反馈**：@ms8great 反馈 Volcengine Doubao 模型在 PicoClaw v0.2.8 下偶发 tool_call 文本泄漏，反映**国产模型适配深度不足**——只支持函数调用"格式"而非"鲁棒解析"。
- **隐私/去中心化诉求**：#3093 的 4 条评论与 1 个 👍 表明用户群中存在**对中心化 IM Gateway 的不满**，希望接入 SimpleX、Wire、Tox 等强隐私方案。
- **无明显"满意度"信号**：今日无新增的"赞"或"满意"类评论，社区当前面以**问题报告和功能请求**为主。

---

## 8. 待处理积压（提醒维护者关注）

| 项目 | 类型 | 已开 | 风险 |
|---|---|---|---|
| [PR #3063](https://github.com/sipeed/picoclaw/pull/3063) | Feature: DeltaChat gateway | **22 天** | 🔴 长期未 review，可能正在冷却 |
| [PR #3156](https://github.com/sipeed/picoclaw/pull/3156) | Feature: Pico token usage | 8 天（stale） | 🟠 需 review 激活 |
| [PR #3163](https://github.com/sipeed/picoclaw/pull/3163) | Feature: Bedrock caching | 7 天 | 🟠 7 天内仍较新但尚无回应 |
| [Issue #3093](https://github.com/sipeed/picoclaw/issues/3093) | Feature: SimpleX/Tox | 20 天（stale） | 🟠 |
| [Issue #3153](https://github.com/sipeed/picoclaw/issues/3153) | Bug: Doubao tool_call | 8 天（stale） | 🟠 |
| [Issue #3195](https://github.com/sipeed/picoclaw/issues/3195) | Bug: OpenAI GPT | **0 天** | 🟡 新增，但与 NanoKVM 2.4.0 强相关，建议 48 小时内响应 |

---

## 📊 项目健康度评分（编辑判断）

| 维度 | 评分 | 说明 |
|---|---|---|
| 代码合并节奏 | ⭐⭐☆☆☆ | 24h 内 0 合入，3 条 PR 积压 |
| Bug 响应速度 | ⭐⭐⭐☆☆ | 有 1 条关闭，但 2 条 stale 仍开放 |
| 社区参与度 | ⭐⭐⭐⭐☆ | 外部贡献者持续提 PR |
| 发版纪律 | ⭐⭐☆☆☆ | 3 周无新版本 |
| 综合 | **6/10** | 需维护者侧加速 review 与发版 |

---

*报告生成基于 2026-06-30 当日 GitHub 公开数据快照。建议维护者重点关注 [PR #3063](https://github.com/sipeed/picoclaw/pull/3063)、[PR #3156](https://github.com/sipeed/picoclaw/pull/3156)、[Issue #3195](https://github.com/sipeed/picoclaw/issues/3195) 三项，以恢复社区信心与发版节奏。*

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

<think>The user wants me to generate a project daily report for NanoClaw based on the GitHub data provided. Let me analyze the data carefully and create a well-structured report.

Let me review the data:

**Overview:**
- 24h Issues: 1 (1 new/active, 0 closed)
- 24h PRs: 7 (5 pending, 2 merged/closed)
- New releases: 0

**Issues (1):**
- #2888 - Discord chat-sdk adapters dropping image/file attachments - agent only sees filename
  - Author: @eagansilverpathmarketing
  - Status: OPEN
  - Created: 2026-06-30
  - 1 comment, 0 thumbs up

**Pull Requests (7):**
1. #2886 [OPEN] - fix: channel-registered new agents inherit the install's provider (avoid 401 on single-provider installs)
   - Author: @thisdotrob
   - Created/Updated: 2026-06-29

2. #2880 [OPEN] - fix(security): contain inbox symlink escapes in attachment writes (#2828)
   - Author: @johnmathews
   - Security fix for CWE-59, symlink-follow → arbitrary host file write
   - Created: 2026-06-28, Updated: 2026-06-29

3. #2885 [OPEN] - fix(setup): offer Slack Socket Mode in the guided setup flow
   - Author: @thisdotrob
   - Created/Updated: 2026-06-29
   - Socket Mode was added to channels branch but not main

4. #2884 [OPEN] - feat(discord): add Discord channel adapter + fix Gateway approval-button routing
   - Author: @rudgalvis
   - Created/Updated: 2026-06-29
   - Adds Discord adapter + fixes approval button routing

5. #2883 [CLOSED] - feat: voice-notify v3 意图分流 + kill-switch
   - Author: @tier2tech-tian
   - Created/Updated: 2026-06-29
   - 38/38 tests passed, C1 three rounds review GO
   - Note: closed, not merged (interesting!)

6. #2871 [OPEN] - [follows-guidelines] feat(dashboard): add dashboard pusher with OpenCode support
   - Author: @grantland
   - Created: 2026-06-27, Updated: 2026-06-29
   - Dashboard pusher feature

7. #2882 [CLOSED] - fix(ncl): default messaging-groups create instance to channel_type
   - Author: @omri-maya
   - Created/Updated: 2026-06-29
   - NOT NULL constraint violation fix

Now let me write the report in Chinese as requested, with professional and data-driven language.

Let me think about each section:

1. **今日速览** - Overall state, activity assessment
2. **版本发布** - None
3. **项目进展** - Merged/closed PRs (2 closed: #2883, #2882)
4. **社区热点** - Most discussed (only #2888 has 1 comment)
5. **Bug 与稳定性** - Several bugs: #2888 (Discord attachments), #2886 (provider 401), #2880 (security symlink), #2882 (NOT NULL constraint)
6. **功能请求与路线图信号** - New features: #2884 Discord adapter, #2885 Slack Socket Mode, #2871 Dashboard pusher, #2883 voice-notify v3
7. **用户反馈摘要** - Limited data (only 1 issue with 1 comment)
8. **待处理积压** - Several open PRs need review

Let me structure the report now. I'll use Chinese as the user requested.</think>

# NanoClaw 项目日报 · 2026-06-30

---

## 1. 今日速览

NanoClaw 项目今日保持中低强度但结构健康的开发节奏：**7 条 PR** 中 5 条仍待合并、2 条已关闭，**1 条新 Issue** 围绕 Discord 适配器的附件处理缺陷被提出。整体活动以 **Slack/Discord 渠道适配层打磨、安全加固、新 Agent 注册流程修复** 为主线，社区产出呈"小步快跑"特征。值得关注的反差是：当日关闭的 PR 数量大于合并数（#2883 与 #2882 均标注 CLOSED 但未说明合并去向），且无任何版本发布，与活跃的渠道扩展 PR 形成"代码层活跃、版本层静止"的对比，提示下一发版窗口正在积压。

---

## 2. 版本发布

**今日无新版本发布。** 仓库处于 PR 集成与待评审阶段，距离上一发版周期未见 tag 推送。

---

## 3. 项目进展

今日 **已关闭 PR 共 2 条**，但需注意其关闭性质尚不明确（未标注 MERGED），如下：

| PR | 标题 | 作者 | 状态信号 |
|---|---|---|---|
| [#2883](https://github.com/nanocoai/nanoclaw/pull/2883) | feat: voice-notify v3 意图分流 + kill-switch | @tier2tech-tian | 38/38 测试通过、C1 三轮 review GO、tsc 编译通过后被关闭 |
| [#2882](https://github.com/nanocoai/nanoclaw/pull/2882) | fix(ncl): default messaging-groups create instance to channel_type | @omri-maya | 修复 `NOT NULL` 约束违规，紧随 016 迁移后回归 |

**推进判断：** [#2883](https://github.com/nanocoai/nanoclaw/pull/2883) 是当日完成度最高的 PR（测试+review+编译三道闸口均通过），其语音播报从一刀切升级为 5 类意图分流（action / silent / navigate / tech_status / notify），并配套运行时 kill-switch（`VOICE_SUMMARY_VERSION=off`），属于用户感知较强的体验型改进。若该 PR 实际为 squash-merge 后关闭，将显著抬高 NanoClaw 的"通知智能化"水位。 [#2882](https://github.com/nanocoai/nanoclaw/pull/2882) 则是对迁移脚本与 CRUD 通用 insert 路径的协调性修复，是数据层稳定性的必要补丁。

整体推进幅度：**中等偏正向** —— 关键的体验层（语音）与稳定性层（CRUD）均有 PR 落地，但缺版本动作。

---

## 4. 社区热点

今日讨论活跃度整体偏低，唯一存在评论互动的话题为：

- **#2888 — Discord 适配器丢弃图像/文件附件，Agent 仅能看见文件名**（[#2888](https://github.com/nanocoai/nanoclaw/issues/2888)）
  - 状态：OPEN · 评论 1 · 👍 0
  - 作者：@eagansilverpathmarketing
  - **诉求分析**：Discord 通过 chat-sdk 接入后，Agent 收到的消息仅含附件元数据（type/name/mimeType/size），无法获取二进制内容，导致截图、文档场景完全失效。相比 Telegram 适配器"工作正常"，问题被明确指向 `src/channels/chat-sdk-bridge.ts` 中 `messageToInbound` 对 `att.fetchData()` 的处理缺失。这是一类典型的**跨渠道一致性**诉求 —— 用户期待"换渠道不换能力"。

PR 侧热度最高的是 **#2884（Discord 适配器新增 + 审批按钮路由修复）** [#2884](https://github.com/nanocoai/nanoclaw/pull/2884)，其与 #2888 形成强相关上下游：若 #2884 先行合并，#2888 的根因有可能在新适配器中被一并覆盖，但目前二者尚未在 PR/Issue 之间建立引用关系。

---

## 5. Bug 与稳定性

按严重程度排序：

| 严重度 | Bug | 来源 | 是否已有 fix PR |
|---|---|---|---|
| 🔴 **高（CWE-59 安全）** | Session 目录以可写方式挂载进 Agent 容器，被入侵 Agent 可预先放置符号链接，等待宿主机写入穿越到任意宿主机文件 —— [#2828](https://github.com/nanocoai/nanoclaw/issues/2828) | Issue #2828 | ✅ **#2880** ([PR](https://github.com/nanocoai/nanoclaw/pull/2880)) 双向修复入站文件写入，待合并 |
| 🟠 **中（功能性失效）** | Discord 渠道中 Agent 完全无法读取附件二进制内容 | Issue [#2888](https://github.com/nanocoai/nanoclaw/issues/2888) | ⚠️ 间接相关（[#2884](https://github.com/nanocoai/nanoclaw/pull/2884) Discord 新适配器），但未建立 issue 关联 |
| 🟠 **中（部署阻塞）** | 单 provider 安装下，"Connect new agent" 流程始终使用内置 Claude provider，导致 401 | — | ✅ **#2886** ([PR](https://github.com/nanocoai/nanoclaw/pull/2886)) 待合并 |
| 🟡 **低（CLI 崩溃）** | `ncl messaging-groups create` 触发 `NOT NULL` 约束违规（016 迁移后 `instance` 列未在资源定义中声明） | — | ✅ **#2882** ([PR](https://github.com/nanocoai/nanoclaw/pull/2882)) 已关闭 |

**评估**：高危安全漏洞已有定向 PR 在排队（#2880），但截至今日仍未合并，存在窗口期风险。

---

## 6. 功能请求与路线图信号

今日开放的 5 条 PR 中，有 3 条属于显著的功能扩张，可作为下一版本路线图候选：

1. **Discord 渠道全量支持** —— [#2884](https://github.com/nanocoai/nanoclaw/pull/2884)
   - 新增 `src/channels/discord.ts`（Gateway 模式、并发派发、回复上下文提取）
   - 注册 `@chat-adapter/discord@4.29.0` 依赖
   - 同步修复审批卡片按钮路由回归
   - **路线图信号**：Discord 是 SaaS 类 AI Agent 落地的高频需求渠道，结合 #2888 的现状报告，合并后预计将引发一轮"Discord 适配层体验"社区讨论。

2. **Slack Socket Mode 引导式 setup** —— [#2885](https://github.com/nanocoai/nanoclaw/pull/2885)
   - 揭示现状：Socket Mode 已合并入 `channels` 分支，但 `setup:auto` 仍仅 webhook 流程，trunk 滞后
   - **路线图信号**：作者明确指出这是"分支提前合并"的工程债，反映出当前项目多分支治理需要一次"特性合并日"。

3. **Dashboard Pusher + OpenCode 支持** —— [#2871](https://github.com/nanocoai/nanoclaw/pull/2871)
   - 新增 `src/dashboard-pusher.ts`，每 60s POST 状态快照至 `@nanoco/nanoclaw-dashboard`
   - 来自社区贡献者 @grantland，标注 `[follows-guidelines]` 表明遵循贡献规范
   - **路线图信号**：第三方 dashboard 集成正在成为生态扩展方向，建议纳入"可观测性"主题。

另：语音播报 #2883 若实际已合并，则将构成"通知智能化"主题的下一里程碑。

---

## 7. 用户反馈摘要

可获取的真实反馈样本有限（仅 #2888 含 1 条评论），但从 Issue 与 PR 描述中可提炼以下信号：

- **痛点：渠道能力不一致** —— 用户期望"加入新聊天平台不应等于能力降级"。#2888 中用户明确对比了 Discord 与 Telegram 的体验落差（"Telegram works fine"），反映出对**跨渠道一致性**的明确期待 ([#2888](https://github.com/nanocoai/nanoclaw/issues/2888))。
- **痛点：单 provider 部署下的"幽灵 401"** —— #2886 暴露了"内置 Claude 默认 provider"在用户只配置 OpenAI/Anthropic 等单一第三方 provider 时会触发认证失败。这类问题对运维体验伤害大，且不易自查 ([#2886](https://github.com/nanocoai/nanoclaw/pull/2886))。
- **痛点：迁移脚本与资源定义的同步漂移** —— #2882 显示在新增 016 迁移（`instance` 列）后，通用 CRUD insert 并未感知到 schema 变化，反映出"迁移 → 资源定义 → CLI"链条缺少自动化校验 ([#2882](https://github.com/nanocoai/nanoclaw/pull/2882))。
- **满意信号：** #2883 的审阅记录显示"38/38 测试通过 + C1 三轮 review GO + tsc 编译通过"，社区协作者 @tier2tech-tian 在 PR 中使用了规范的测试计划清单与 AI 协作署名（`🤖 Generated with Claude Code`），表明贡献流程的成熟度在提升。

---

## 8. 待处理积压

以下 Issue / PR 已超过 48 小时未获维护者实质回应，建议优先排期评审：

| 编号 | 类型 | 等待时长 | 风险等级 | 链接 |
|---|---|---|---|---|
| [#2828](https://github.com/nanocoai/nanoclaw/issues/2828) | Issue（安全 CWE-59） | 久未关闭，#2880 已修复但未合并 | 🔴 高 | 见 PR #2880 |
| [#2871](https://github.com/nanocoai/nanoclaw/pull/2871) | PR（Dashboard Pusher） | 创建于 2026-06-27，已 3 天未响应 | 🟡 中 | 链接见上 |
| [#2886](https://github.com/nanocoai/nanoclaw/pull/2886) | PR（单 provider 401 修复） | 1 天，未评审 | 🟠 中 | 链接见上 |
| [#2885](https://github.com/nanocoai/nanoclaw/pull/2885) | PR（Slack Socket Mode setup） | 1 天，未评审 | 🟡 中 | 链接见上 |
| [#2884](https://github.com/nanocoai/nanoclaw/pull/2884) | PR（Discord 适配器） | 1 天，未评审 | 🟡 中 | 链接见上 |
| [#2880](https://github.com/nanocoai/nanoclaw/pull/2880) | PR（安全修复） | 2 天，未合并 | 🔴 高 | 链接见上 |

**维护者建议**：优先推进 [#2880](https://github.com/nanocoai/nanoclaw/pull/2880) 的合并以封堵 CWE-59 安全窗口，并尽快对 #2884 / #2885 / #2886 进行批量评审以解锁下一发版窗口。

---

*报告生成时间：2026-06-30 · 数据源：GitHub REST API · 项目健康度评级：B+（活跃贡献 + 安全响应迅速，但版本节奏与 PR 合流存在积压）*

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

<think>The user wants me to generate a project daily report for IronClaw based on GitHub data from 2026-06-30. Let me analyze the data carefully and structure the report according to the 8 sections requested.

Let me first understand the data:

**Overall Activity:**
- 15 Issues updated (11 new/active, 4 closed)
- 50 PRs updated (29 pending, 21 merged/closed)
- 0 releases

**Closed Issues (4):**
- #5413 - OAuth refresh silently swallows errors (closed)
- #5196 - "Ask each time" tool permission duplicate approval (closed)
- #5412 - webui v2 log entry not selectable (closed)
- #4776 - Add global Always Allow setting (closed)

**Open Issues (11):**
- #5428 - Mock-MCP test hardening
- #5426 - Cannot create routine: system drive not available
- #5421 - Web search not zero-config
- #5420 - Routine delivery target is global, not per-routine
- #5419 - No option to rename automation
- #5418 - Conversation messages appear in wrong order
- #5417 - Wrong skill activated for Hacker News search
- #5416 - Incorrect Google connection state
- #5415 - Multi-tool Google Sheets workflow fails with protocol violation (P1!)
- #5411 - Daily ironclaw failure taxonomy 2026-06-29
- #4108 - Nightly E2E failed

**Closed PRs (21 total, top ones shown):**
- #5427 - Extract mock-MCP scaffolding into harness_mcp.rs
- #5401 - Localize webui v2 tools and extensions copy
- #5402 - Shared-persistence group tests
- #5050 - Bump react-router 7.9.1 to 7.15.1
- #5425 - Design proposal: multi-user RBAC convergence
- #5423 - Accept QA7 routine wording variants
- #5372 - Port Reborn WebUI auth/approval UX coverage
- #5371 - Port Reborn WebUI chat history coverage
- #5422 - Fix /canary PR target validation
- #5406 - Use QA sheet prompts in Reborn live QA

**Open PRs (29 total, top ones):**
- #5149 - Context management: progressive tool disclosure
- #3706 - Bump postcss, @remotion/cli dependencies
- #5362 - Harden Slack pairing activation flows
- #5373 - Port Reborn WebUI channel pairing flows
- #5380 - Expand Reborn WebUIv2 QA matrix coverage
- #5424 - Link failed Reborn QA cases to artifacts
- #5313 - Storage stress harness
- #5394 - Capability policy e2e
- #5311 - Release PR
- #5376 - Document Reborn WebUI legacy E2E coverage

**Notable observations:**
- The PR comments are all "undefined" which is unusual - I should note this is the data format
- There are multiple QA-bash bugs reported by @joe-rlo (5 bugs)
- The daily failure taxonomy #5411 is a meta-tracking issue
- #5311 is a release PR that's been open since 2026-06-26 but no release happened
- Heavy focus on Reborn WebUI v2 testing, QA, and feature work
- 1 P1 bug (#5415 - Multi-tool Google Sheets protocol violation)

Let me write the report in Chinese as requested by the user.

I should be objective, professional, data-driven, and highlight project health. Let me write each section carefully.

For section 3 (项目进展), I should focus on the closed/merged PRs that represent forward progress.

For section 4 (社区热点), I notice all PR comments are "undefined" - this is interesting. Issues have actual comment counts. The most active issues by comments are #5413 (1 comment) and #5196 (1 comment). Most are 0. So community engagement is actually quite low in terms of comments.

For section 5 (Bug与稳定性), I should rank by severity - #5415 is P1, then #5417/#5416 are P2, then #5419/#5418 are P3.

For section 8 (待处理积压), #4108 has been open since 2026-05-27 - over a month for a nightly E2E failure. #5311 has been an open release PR since 2026-06-26. #3706 dependency bump from 2026-05-16.

Let me structure this as a proper professional report.</think>

# IronClaw 项目动态日报

**日期：2026-06-30** ｜ **数据来源：github.com/nearai/ironclaw**

---

## 1. 今日速览

IronClaw 今日呈现**中高强度开发活跃态势**：24 小时内共 15 条 Issues 流转（11 新开/活跃、4 已关闭），50 条 PR 流转（29 待合并、21 已合并/关闭），但**无新版本发布**。工作重心明显集中在 **Reborn WebUI v2 的测试覆盖与 QA 体系建设**——本周内已合并多轮"行为保持型"结构重构（#5427、#5402）与代码复用层的 WebUI 覆盖端口（#5371、#5372）。同时 QA 团队集中上报了一批面向用户场景的 P1–P3 Bug，涵盖工具权限、Skill 选择、Google Sheets 工作流等核心链路，项目处于"测试体系加固 + 现存缺陷曝光"并行阶段。整体健康度评估：**开发活跃、测试成熟度上升，但暴露的用户面 Bug 需关注回归风险**。

---

## 2. 版本发布

**今日无新版本发布。**

值得注意的是，开源 Release PR [#5311](https://github.com/nearai/ironclaw/pull/5311)（`ironclaw 0.24.0 → 0.29.1` 等 5 个 crate 升级，包含 `ironclaw_common` 与 `ironclaw_skills` 两处 **API breaking changes**）自 2026-06-26 起一直保持 OPEN 状态，距今已 4 天未合并，建议维护者确认卡点。

---

## 3. 项目进展

今日已合并/关闭的重要 PR 显著推进了 Reborn 测试基础设施与 WebUI 国际化：

| PR | 主题 | 价值 |
|---|---|---|
| [#5427](https://github.com/nearai/ironclaw/pull/5427) | **抽出 mock-MCP 脚手架至 harness_mcp.rs** | Wave 0 结构重构，把 4387 行 `harness.rs` 拆分，行为保持+字节一致性证明，为后续测试覆盖扩展铺路 |
| [#5401](https://github.com/nearai/ironclaw/pull/5401) | **WebUI v2 工具与扩展文案本地化** | 修复硬编码英文文案、补充 Settings > Tools 权限列表的本地化描述，XL 体量、human-verified |
| [#5402](https://github.com/nearai/ironclaw/pull/5402) | **共享持久化组测试（approvals/auth/memory/secrets/extensions）** | 基于 #5392 已落地的进程内 IT 框架，补齐产品适配层覆盖 |
| [#5371](https://github.com/nearai/ironclaw/pull/5371) / [#5372](https://github.com/nearai/ironclaw/pull/5372) | **Port Reborn WebUI 聊天历史 / 鉴权与审批 UX 浏览器覆盖** | 大批遗留浏览器测试迁移至 Reborn WebUI v2，修复 approval-card 单测哈希问题 |
| [#5373](https://github.com/nearai/ironclaw/pull/5373) | **Port 通道配对流程（含通用 proof-code 配对）** | 通用化配对路径、规范化配对码、稳定 selector（OPEN） |
| [#5422](https://github.com/nearai/ironclaw/pull/5422) | **修复 `/canary` PR target 校验** | 防止 `/canary all` 回归拒绝同仓库 PR head |
| [#5406](https://github.com/nearai/ironclaw/pull/5406) | **在 Reborn live QA 中使用 QA 表单 prompts** | 由"处方式 harness 指令"切换为"业务用户视角 prompt"，更贴近真实使用 |
| [#5423](https://github.com/nearai/ironclaw/pull/5423) | **接受 QA7 routine 用词变体** | routine/automation/cron/schedule/fires/watches 等表达均可通过校验 |
| [#5050](https://github.com/nearai/ironclaw/pull/5050) | **依赖升级：react-router 7.9.1 → 7.15.1** | 安全维护性 bump |

**整体进度**：测试金字塔（Rust 单测 → 进程内 IT → 浏览器 E2E → live QA）四个层级本周同步加固；i18n 与测试可维护性双线推进。Reborn 后端测试覆盖面已开始从单元/集成层扩展到跨产品适配器层。

---

## 4. 社区热点

**评论活跃度观察**：今日 Issue 中评论数最多仅 **1 条**（#5413、#5196），其余均 0 评论；PR 的评论字段在数据源中标记为 `undefined`，可见 GitHub Discussions 区未有显著新增讨论。整体来看，**协作以提交为主、讨论为辅**，未形成"高热度争议话题"。

最值得关注的依然是以下三条：

- [#5413](https://github.com/nearai/ironclaw/issues/5413) — Reborn 内联 OAuth 静默吞错（已关闭）：作者明确指出 #5378 之所以诊断耗时长，根因正是"refresh 未实际应用却未报错"。诉求：**可观测性 > 静默容错**，这是工程文化上的明确信号。
- [#5411](https://github.com/nearai/ironclaw/pull/5411)（注：实际链接为 Issue）— 每日 ironclaw 失败分类法：把 pinchbench 111 个 non-pass 的根因按域归类，是项目方主动暴露质量水位的方式，便于外部观察者跟踪趋势。
- [#4108](https://github.com/nearai/ironclaw/issues/4108) — Nightly E2E 失败（详见第 8 节"积压"）：机器化报告但仍开放，体现"自动化盯盘 + 人工跟进"混合模式。

---

## 5. Bug 与稳定性

按严重程度排序：

### 🔴 P1（高严重度）
- **[#5415](https://github.com/nearai/ironclaw/issues/5415) — Multi-tool Google Sheets workflow fails with protocol violation**
  - 用户场景："检查近期邮件并将 near.ai 地址加入 Google Sheet"——能拿到邮件，但创建/写入表格时触发 `protocol violation`，**稳定复现于 18–25 次工具调用工作流**
  - 状态：OPEN，**尚无修复 PR**。建议立刻复现 + 优先分诊

### 🟠 P2（中严重度）
- **[#5417](https://github.com/nearai/ironclaw/issues/5417) — Hacker News 搜索激活了错误 skill（tech-debt-tracker）**
  - 任务仍由 web_search 工具成功完成（2 次调用），但 skill 选择错误。属"结果对、过程错"，对**信任机制**有损害
- **[#5416](https://github.com/nearai/ironclaw/issues/5416) — Google 连接状态判断错误导致矛盾认证流**
  - 智能体错误地宣称 Gmail 已连接，用户质疑后改口为"仅 installed 但未 activated"。自相矛盾的回复严重影响可信度
- **[#5420](https://github.com/nearai/ironclaw/issues/5420) — Routine 投递目标是全局用户默认，非 per-routine**
  - **数据隔离类 Bug**：把某 routine 设为 Slack 后，**所有 routine 都被改投 Slack**，存在把私密摘要外泄到团队频道的隐私风险
- **[#5421](https://github.com/nearai/ironclaw/issues/5421) — Web 搜索非零配置 + NEAR AI auth 反复弹窗**
  - 即便 chat 已能用，web 搜索仍要用户重新填 API key；零配置能力（Exa MCP）默认未激活

### 🟡 P3（低严重度）
- **[#5419](https://github.com/nearai/ironclaw/issues/5419) — Automation 无法重命名**：agent 自动生成名常被截断，用户无修正手段
- **[#5418](https://github.com/nearai/ironclaw/issues/5418) — 工具活动后对话消息顺序错乱**：UI 渲染把响应置于若干活动块之上而非之后

### 📊 测试基础设施侧
- **[#5426](https://github.com/nearai/ironclaw/issues/5426) — QA 无法创建 routine：系统盘不可用**（hosted-staging `crab shack`）：可能是环境侧问题，需运维介入
- **[#5428](https://github.com/nearai/ironclaw/issues/5428) — mock-MCP 测试 egress 层加固（F1–F3）**：#5427 的延后跟踪，单测专用缺陷
- **[#4108](https://github.com/nearai/ironclaw/issues/4108) — Nightly E2E 失败**（详见第 8 节）

### 已修复（同一时段关闭的 Bug 类 Issue）
- [#5413](https://github.com/nearai/ironclaw/issues/5413) OAuth 静默吞错 → 修复设计明确为"大声失败"
- [#5196](https://github.com/nearai/ironclaw/issues/5196) Ask each time 重复审批 → 已关闭
- [#5412](https://github.com/nearai/ironclaw/issues/5412) webui v2 日志条目不可选中 → 已关闭
- [#4776](https://github.com/nearai/ironclaw/issues/4776) Always Allow 全局设置 → 已关闭

---

## 6. 功能请求与路线图信号

| 主题 | 信号来源 | 路线图评估 |
|---|---|---|
| **Always Allow 全局工具授权** | [#4776](https://github.com/nearai/ironclaw/issues/4776)（已关闭） | Issue 已关闭，落地路径在 Reborn-only scope；下次 Reborn WebUI 迭代可能纳入 |
| **渐进式工具披露（progressive tool disclosure）** | [#5149](https://github.com/nearai/ironclaw/pull/5149)（XL，flag-gated 默认关闭，OPEN） | 数据依据扎实：每轮重发 91 个工具 schema ≈ 25.8k tokens，反复超出 NEAR AI 120s 超时。是**性能与稳定性关键改进**，合并概率高 |
| **存储压力测试工具** | [#5313](https://github.com/nearai/ironclaw/pull/5313)（`ironclaw_storage_stress` 工作区二进制，支持 libSQL/Postgres，OPEN） | 资源治理器长期缺乏压测手段，被主线收编可能性高 |
| **多用户 RBAC 收敛设计** | [#5425](https://github.com/nearai/ironclaw/pull/5425)（设计文档，非实现，CLOSED）+ [#5385](https://github.com/nearai/ironclaw/issues/5385) + [#5394](https://github.com/nearai/ironclaw/pull/5394)（capability policy e2e，OPEN） | 团队明确表态"不新增层、复用现有能力"，是平台化演进前的关键决策点 |
| **Slack 配对激活强化** | [#5362](https://github.com/nearai/ironclaw/pull/5362)（OPEN，codex 出品） | 与 #5373 配对流程端口互补，预计一同落地 |
| **QA 失败用例 artifact 链接** | [#5424](https://github.com/nearai/ironclaw/pull/5424)（OPEN） | Slack 报告附 `results.json`/`test-output.log` 路径，提升 QA 协作效率 |

---

## 7. 用户反馈摘要

从 QA 集中上报的 5 条 `@joe-rlo` 系列 Bug 中可提炼以下真实痛点：

1. **智能体自我陈述不一致**（#5416）：用户对"是否已连接"的反复改口失去信任——反映**LLM 应在底层状态变更时立即同步其 narrative**。
2. **工具权限反复弹窗**（#5196 已修）：审批通过后仍然失败并再次请求授权——用户认为这是"重复劳动 + 状态错乱"。
3. **对话时序渲染错位**（#5418）：活动块与响应错序——基础 UX 期待"自然叙事流"。
4. **结果对、过程错**（#5417 Skill 选择）：用户能容忍延迟与重试，但不能容忍"不知道为什么这样做"。
5. **私密数据可能被错投频道**（#5420 全局默认）：用户对**多 routine 隔离**有强需求。
6. **Automation 命名不可改**（#5419）：长/截断名称长期困扰用户。
7. **零配置承诺未兑现**（#5421）：用户期望"开箱即用"，现状却需重新填 API key。
8. **routine 创建卡系统盘**（#5426）：托管环境稳定性直接影响 QA 节奏。

**正面反馈侧**：未在数据中观察到明显的满意度信号——这是开源协作中常见的（负面偏差），并不必然代表产品满意度低。

---

## 8. 待处理积压

需要维护者主动关注的长期 OPEN 项：

| 项 | 类型 | 滞留时长 | 提醒要点 |
|---|---|---|---|
| [#4108](https://github.com/nearai/ironclaw/issues/4108) — Nightly E2E failed | 自动报告 | **自 2026-05-27 起 OPEN，34 天** | 累计多次失败未结案，建议人工跟进根因（workflow run #28348775022 仍为失败态） |
| [#5311](https://github.com/nearai/ironclaw/pull/5311) — Release PR | 发布候选 | **自 2026-06-26 起 OPEN，4 天** | 含两个 API breaking crate，无合并阻塞理由时建议尽快推 |
| [#3706](https://github.com/nearai/ironclaw/pull/3706) — postcss / @remotion/cli bump | dependabot | **自 2026-05-16 起 OPEN，45 天** | 依赖升级长期未审，建议评估安全性与向后兼容性 |
| [#5385](https://github.com/nearai/ironclaw/issues/5385) — multi-user capability policy | 路线图议题 | 由 #5425 设计文档响应后，e2e PR #5394 OPEN 中 | 仍在设计 → 实现转化期 |
| [#5426](

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

<think>Let me analyze the data provided and generate a comprehensive daily report for LobsterAI as of 2026-06-30.

Key observations:
1. 11 Issues updated (8 open/active, 3 closed)
2. 40 PRs updated (1 pending merge, 39 merged/closed)
3. 1 new release: 2026.6.29

Let me categorize and analyze:

**Release:**
- 2026.6.29 release includes several fixes: openclaw plugin approval routing, cowork navigation rail cleanup, and more

**Active PRs:**
- #2229: New diagnostics logging for Cowork and OpenClaw flows (just opened today)
- #1277: Electron dependency bump (still open, dependabot, very old)
- Several OpenClaw fixes merged (cron sync, user turn cache, IM plugin upgrades, NIM plugin compile, etc.)
- Cowork conversation rail fixes with some revert/reapply drama

**Closed PRs of note:**
- #2222, #2223, #2224, #2225, #2226: Conversation rail tooltip fixes - there's been some back-and-forth with reverts
- #2228: Release promotion to main

**Issues of concern:**
- #2079: Scroll freeze bug (still open)
- #2131: Hermes agent support question
- #2120: Suggestions (task queue, runtime extension, UI)
- #2121: Repeated output token waste concern
- #2081: Subscription credit clearing complaint (closed)
- #1389, #1386, #1388, #1390: Various stale bugs
- #1434, #1435: Stale closed

**User pain points:**
- Subscription credits clearing issue (#2081)
- Token waste from repeated outputs (#2121)
- UI issues with skill display on 2560x1600 (#2120)
- Scroll freeze in execution results (#2079)
- Long task runtime being terminated (#2120)

Let me write the report now in Chinese with the required structure.</think>

# LobsterAI 项目日报
**日期：2026-06-30**

---

## 1. 今日速览

LobsterAI 今日发布 **2026.6.29 版本**，合并/关闭 PR 达 39 个，社区活跃度处于较高水位。项目主线工作集中在两条核心赛道：**OpenClaw 集成稳定性**（cron 同步、IM 插件升级、用户回合缓存、OAuth 路由等 10+ 项修复）与 **Cowork 会话导轨 UI 优化**（含一次 revert/reapply 流程）。Issues 侧社区反馈集中在订阅计费、Token 浪费、UI 适配三大类体验问题，但维护者响应节奏较快，整体项目健康度良好。唯一待合并 PR 为新建的诊断日志增强 #2229，待后续审阅。

---

## 2. 版本发布

### 🚀 LobsterAI 2026.6.29（2026-06-29 发布）

本版本主要包含以下变更（来源 PR #2228）：

| 模块 | 变更 |
|------|------|
| **OpenClaw 集成稳定性** | 保留用户回合缓存稳定性；保持 agent bootstrap workspace 与任务 cwd 分离；保留 cron run 后续历史 |
| **Cowork 会话导轨** | 恢复完整会话导轨导航、tooltip 预览清理、hover 样式与懒加载修复 |
| **插件审批** | 将插件审批路由到 Cowork 权限系统 (#2217) |
| **导航栏清理** | 清理 Cowork 导航栏预览 (#2218) |

**破坏性变更**：未在 release notes 中明确标注，但 #2217 调整了插件审批路由路径，第三方插件开发者可能需要重新验证集成。

**迁移注意**：使用 OpenClaw 旧版 cron JSON / run-log 存储的用户，2026.6.1 起会在启动时自动执行 doctor 迁移 (#2189)，无需手动干预。

链接：https://github.com/netease-youdao/LobsterAI/pull/2228

---

## 3. 项目进展

今日共有 **39 个 PR 合并/关闭**，核心推进方向如下：

### 🔧 OpenClaw 稳定性加固（占比最高）
- **#2219** 用户回合缓存稳定性 backport — 解决 v2026.6.1 序列化回归
- **#2220** Cron run 后续历史保留 — 防止同步时破坏性覆盖
- **#2221** OpenAI OAuth 路由至 ChatGPT Responses provider
- **#2227** 修复 agent bootstrap workspace 被用户项目目录污染问题（SOUL.md/IDENTITY.md/USER.md/MEMORY.md 加载位置修复，是一项关键回归修复）
- **#2185** Reply options 补齐 cwd 字段
- **#2186** NIM 插件 TypeScript 入口编译支持
- **#2187** 测试元数据对齐（146 个测试通过）
- **#2189** 启动时迁移 legacy cron 存储
- **#2190** Cron run session 同步标准化
- **#2191** Scheduled-task 启动状态明确化

### 💬 IM 插件升级
- **#2182** 升级钉钉、飞书/飞书、企业微信、POPO 等预装 IM 插件，支持 `extensions/` 和 `npm/projects/.../node_modules/` 双布局

### 🖥️ Cowork 会话导轨修复（含一次小曲折）
- **#2223/#2222** 清理会话导轨 tooltip 中的 plan-mode 标签
- **#2224** 因误合并，revert #2222
- **#2225** 进一步清理 main 分支上的误合并
- **#2226** 在 release 分支上重新应用修复
- **#2229** 新增 Cowork 与 OpenClaw 流程的诊断日志（**待合并**）

### 📚 文档
- **#2184** AGENTS.md 仓库指引刷新

**项目推进评估**：OpenClaw 与 Cowork 两个核心模块同步推进，OpenClaw 的 cron 体系、会话缓存、IM 插件生态完成了一轮系统性加固；Cowork UI 完成了导轨相关回归的完整收尾。整体方向清晰，无重大架构变动。

---

## 4. 社区热点

### 🔥 近期关注度较高的 Issues

| Issue | 标题 | 评论数 | 关注度来源 |
|-------|------|--------|-----------|
| [#2079](https://github.com/netease-youdao/LobsterAI/issues/2079) | 执行结果窗口滚动到顶端会假死 | 2 | 功能性 Bug，影响实际使用 |
| [#2120](https://github.com/netease-youdao/LobsterAI/issues/2120) | 建议（任务预输入、长任务、UI 三列） | 2 | 复合型产品建议 |
| [#2121](https://github.com/netease-youdao/LobsterAI/issues/2121) | 重复输出疑似大量消耗 Token | 2 | 成本敏感型反馈 |
| [#2081](https://github.com/netease-youdao/LobsterAI/issues/2081) | 订阅积分月底清零投诉 | 2 | 计费敏感，已关闭 |

**诉求分析**：
- **#2079** 触及执行结果窗口的渲染性能，对开发者体验影响较大
- **#2120** 反映了用户对"连续任务流"和"长任务可靠性"的明确需求，与近期 OpenClaw 的 cron 强化方向有较强相关性
- **#2121** 反映 Token 经济性问题，对按量计费/订阅用户尤其敏感
- **#2081** 体现计费透明度的用户诉求，已被关闭但社区情绪较为负面

---

## 5. Bug 与稳定性

按严重程度排序：

### 🔴 严重
- **[#2079](https://github.com/netease-youdao/LobsterAI/issues/2079) 执行结果窗口滚动假死**  
  现象可复现（2026.5.27 版本），属于功能性阻塞 Bug。**暂未见关联修复 PR**，建议维护者优先处理。

### 🟡 中等
- **[#2121](https://github.com/netease-youdao/LobsterAI/issues/2121) 重复输出疑似大量消耗 Token**  
  可能是输出重试或上下文未正确去重导致的，需维护者排查 Claw 输出流。**未见 fix PR**。
- **[#2120](https://github.com/netease-youdao/LobsterAI/issues/2120) Claw 监控长任务出现 terminated 提示**  
  即使脚本仍在运行，监控提前终止，影响开发节奏。**未见 fix PR**，但与 #2219/#2220 的 cron 稳定性修复方向相关。

### 🟢 轻微 / 已修复或已关闭
- **[#1389](https://github.com/netease-youdao/LobsterAI/issues/1389)** 英文模式下应显示中文项却显示英文 — **OPEN [stale]**
- **[#1386](https://github.com/netease-youdao/LobsterAI/issues/1386)** 分享长图内容不全 — **OPEN [stale]**
- **[#1388](https://github.com/netease-youdao/LobsterAI/issues/1388)** 邮箱测试连通性卡死 — **OPEN [stale]**
- **[#1390](https://github.com/netease-youdao/LobsterAI/issues/1390)** 定时任务更新无响应 — **OPEN [stale]**
- **[#1434](https://github.com/netease-youdao/LobsterAI/issues/1434)** 搜索空数据时英文提示 — **CLOSED [stale]**
- **[#1435](https://github.com/netease-youdao/LobsterAI/issues/1435)** 自定义 agent 名称过长溢出 — **CLOSED [stale]**
- **[#2081](https://github.com/netease-youdao/LobsterAI/issues/2081)** 订阅积分清零投诉 — **CLOSED**

---

## 6. 功能请求与路线图信号

### 用户新需求
1. **任务预输入队列**（[#2120](https://github.com/netease-youdao/LobsterAI/issues/2120)）  
   借鉴 workbuddy 的任务存储模式，在 Claw 运行当前任务时可预输入下一个任务。  
   **信号强度**：中，运营场景明确。

2. **延长单次任务运行时长**（[#2120](https://github.com/netease-youdao/LobsterAI/issues/2120)）  
   解决数据获取/监控类长脚本的 terminated 中断问题。  
   **信号强度**：高，与 OpenClaw cron 与运行时稳定性方向高度一致，**有望纳入下一版本**。

3. **技能界面 UI 改造**（[#2120](https://github.com/netease-youdao/LobsterAI/issues/2120)）  
   2560×1600 全屏下双列展示不佳，建议改三列。  
   **信号强度**：中，属于响应式布局问题。

4. **Hermes Agent 支持**（[#2131](https://github.com/netease-youdao/LobsterAI/issues/2131)）  
   用户询问对 hermes agent 的支持计划。  
   **信号强度**：低-中，需维护者澄清 roadmap。

### 可能纳入下一版本的信号
- 长任务超时/中断问题（与 #2219/#2220 cron 修复同源）
- 会话导轨 UI 收尾（已在新版本发布）

---

## 7. 用户反馈摘要

### 🔴 痛点
- **计费透明度不足**：订阅积分月底清零机制让用户产生"被坑"感（#2081），尽管已关闭，但回复语态较为情绪化，建议官方主动发布计费规则说明。
- **Token 浪费担忧**：用户怀疑 Claw 重复输出在大量消耗 Token（#2121），希望官方能给出诊断手段或优化策略。
- **长任务可靠性**：数据获取/监控场景下 terminated 中断直接影响开发进度（#2120）。
- **执行窗口渲染性能**：滚动到顶端假死，影响核心使用流程（#2079）。

### 🟢 满意/积极信号
- 维护者对 OpenClaw 集成稳定性的快速迭代（10+ 修复 PR 在一日内合并）获得社区正面预期。
- AGENTS.md 与文档同步刷新（#2184），说明开发者体验在持续完善。

### 📌 真实使用场景
- 用户将 Claw 用于**数据获取脚本监控**（长时任务）
- 用户在高分辨率屏（2560×1600）下进行日常使用，对 UI 密度有要求

---

## 8. 待处理积压

### ⚠️ 长期未响应的重要 Issue
| Issue | 标题 | 创建时间 | 状态 |
|-------|------|----------|------|
| [#1277](https://github.com/netease-youdao/LobsterAI/pull/1277) | Electron 依赖升级 40.2.1 → 42.5.0 | 2026-04-02 | **OPEN**，依赖机器人 PR，3 个月未合并，可能阻塞后续升级 |
| [#2079](https://github.com/netease-youdao/LobsterAI/issues/2079) | 滚动假死 | 2026-05-30 | **OPEN**，核心功能性 Bug |
| [#2131](https://github.com/netease-youdao/LobsterAI/issues/2131) | Hermes agent 支持 | 2026-06-09 | **OPEN**，仅 2 条评论，无官方回应 |

### 📋 Stale Issue 积压提醒
以下 4 个 [stale] Issues 已存在超过 2 个月未关闭或处理，建议维护者集中清理：
- #1386 分享长图不全
- #1388 邮箱测试卡死
- #1389 中英文混显
- #1390 定时任务更新无响应

### 🔔 维护者建议
1. **优先处理 #2079 滚动假死**，作为核心功能性 Bug 应纳入下个补丁版本。
2. **回复 #2131** 说明 Hermes agent 计划或拒绝原因。
3. **跟进 #1277** Electron 升级 PR，决定是否合并或拆分。
4. **统一关闭 stale Issues** 或重新分类，避免信号噪声掩盖真正活跃的问题。
5. 考虑在官方渠道**主动发布计费规则与 Token 使用优化说明**，回应 #2081、#2121 类情绪化反馈。

---

**报告生成时间**：2026-06-30  
**数据范围**：2026-06-29 至 2026-06-30  
**项目主页**：https://github.com/netease-youdao/LobsterAI

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyclaw">TinyAGI/tinyclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

<think>The user wants me to generate a project daily report for CoPaw (QwenPaw) based on GitHub data. Note that the project name appears differently in the data - the prompt mentions CoPaw at github.com/agentscope-ai/CoPaw but the issue/PR links reference github.com/agentscope-ai/QwenPaw. I should note this discrepancy but proceed with the data as given.

Let me analyze the data carefully:

**Data Overview:**
- Past 24 hours: 26 Issues updates (15 new/active, 11 closed)
- 50 PR updates (17 pending, 33 merged/closed)
- 0 new releases

**Key Issues Analysis:**

1. #3891 [OPEN] - DeepSeek prefix cache hit rate low (~95%) - 5 comments, 1 thumbs up
2. #5550 [CLOSED] - Remote SSH plugin dependency install loop + old backend process residue - 4 comments
3. #5539 [CLOSED] - Heartbeat task occasionally fails, hardcoded 120s timeout - 3 comments
4. #5624 [CLOSED] - Tool call result card count always shows 1 - 3 comments
5. #2495 [CLOSED] - Support seeing MCP tools after configuration - 3 comments
6. #5561 [OPEN] - Agent connected to Feishu bot, long messages can't be received - 3 comments
7. #5342 [OPEN] - Hard cap on tool result size at execution layer - 3 comments
8. #5505 [CLOSED] - MiniMax-M3 image safety audit error cached - 3 comments
9. #5554 [CLOSED] - Enterprise WeChat file sending bot no reply - 2 comments
10. #5593 [OPEN] - DingTalk channel should send previewable images - 2 comments
11. #5571 [OPEN] - Release Duty QwenPaw v2.0.0-beta.1 Installation Verification

**Key PRs Analysis:**

1. #5644 [CLOSED] - docs(website): add Terminal UI documentation page
2. #5646 [OPEN] - feat(providers): update DashScope built-in model list to Qwen3.7 and DeepSeek V4
3. #5623 [CLOSED] - fix(governance): OFF mode still triggers tool approval
4. #5629 [CLOSED] - fix(memory): fix memory-related system prompt
5. #5627 [CLOSED] - ci(integration): lift Windows nightly HTTP timeout
6. #5634 [CLOSED] - chore(e2e): drop SLASH-006 plan command case
7. #5645 [OPEN] - fix: add coding mode project_dir as rw
8. #4041 [OPEN] - feat(desktop): add Tauri tray behavior
9. #5643 [OPEN] - perf: virtualize SidebarSessionList
10. #5221 [OPEN] - feat(plugins): add AgentScope middleware registration
11. #5187 [OPEN] - feat(computer-use): Windows desktop GUI automation
12. #5576 [CLOSED] - chore(deps): bumping version of agentscope to 2.0.3
13. #5548 [CLOSED] - fix(runtime): use workspace.agent_id as fallback
14. #5557 [CLOSED] - fix(heartbeat): make execution timeout configurable
15. #5640 [CLOSED] - fix(runtime): require coding_mode enabled before using project_dir
16. #5642 [OPEN] - fix(acp): strengthen external runner hard-block policy
17. #5635 [CLOSED] - fix(runtime, agents): convert Windows paths to file:// URLs
18. #5296 [OPEN] - feat(memory): make ADBPG REST-only with auto search
19. #5637 [OPEN] - feat(subagent): add event-driven background lifecycle

Note: There's a discrepancy - the user header says CoPaw but links are for QwenPaw. I should mention this OR just proceed using the data as-is. Looking again, this appears to be a single project rebranding or just an inconsistency in the prompt. Let me use "CoPaw (QwenPaw)" to be safe, but actually the URL in the user message is github.com/agentscope-ai/CoPaw while issue links reference QwenPaw. I'll mention this name discrepancy briefly or just use QwenPaw as the project name since the data is about QwenPaw.

Actually, reading more carefully, the prompt says "CoPaw (github.com/agentscope-ai/CoPaw)" but all the issue links point to github.com/agentscope-ai/QwenPaw. This might be a newer name (CoPaw) for the same project (QwenPaw), or just inconsistent data. Let me just refer to the project as CoPaw/QwenPaw and note this in passing.

Let me now structure the report:

**1. Today at a glance**
- High activity day: 26 issue updates, 50 PR updates
- 0 releases
- Many bug fixes closed
- Active development on multiple fronts: providers update, desktop, channels, agentcore

**2. Version Release**
- No releases today. Mention v2.0.0-beta.1 verification issue (#5571) is open and there are related dependencies updates (agentscope to 2.0.3 in PR #5576)

**3. Project Progress**
Important merged/closed PRs:
- #5644 - TUI documentation added (Chinese + English)
- #5623 - Governance fix (OFF mode still triggering tool approval)
- #5629 - Memory prompt fix
- #5627 - Windows nightly CI fix
- #5634 - E2E plan command cleanup (after agentscope 2.0)
- #5557 - Heartbeat timeout configurable (resolves #5539)
- #5548 - Workspace agent_id fallback for channels
- #5635 - Windows path file:// URL conversion
- #5576 - Agentscope dep version bump
- #5640 - Coding mode project_dir guard
- #5641 - Desktop screenshot in workspace

**4. Community Hotspots**
- #3891 DeepSeek cache hit - 5 comments, 1 thumbs up
- #3891 has been open since April 27 but updated yesterday
- #5550, #5539 (3+ comments each)
- #5571 release duty for v2.0.0-beta.1

**5. Bugs and Stability**
Bugs reported (by severity):
- High: 
  - #5550 - SSH plugin dependency loop and process residue (CLOSED - need to check if has fix)
  - #5554 - WeChat file sending bot no reply (CLOSED)
  - #5561 - Feishu long messages not received (OPEN)
  - #5505 - Vision cache mishap (CLOSED, has PR?)
  - #5539 - Heartbeat timeout (CLOSED, has #5557 fix)
- Medium:
  - #5624 / #5626 - Tool call card count (CLOSED) 
  - #5543 - functionDeclaration schema type (CLOSED)
  - #5555 - Latest version laggy (OPEN, vague)
  - #5616 - Automated tasks terminating (OPEN)
- Low/UX:
  - #5583 - Chat sidebar pop-out default selection not obvious (CLOSED)

**6. Feature Requests**
- #3891 - DeepSeek prefix cache optimization
- #2495 (CLOSED) - MCP tool listing
- #5342 - Hard cap on tool result size (OPEN, has PR coming?)
- #5593 - DingTalk previewable image message (OPEN)
- #5630 - Custom Telegram BaseURL (OPEN)
- #5638 - Per-cron-job model override (OPEN)
- #5622 - Windows desktop tray icon (OPEN, related to PR #4041)
- #5615 - Pure text model image fallback (OPEN)
- #5609 - Custom model protocol support (OPEN)
- #5579 - Conversation checkpoint persistence (OPEN)
- #5603 - DingTalk card streaming too slow (OPEN)
- #5527 - agentscope2.0 dynamic switching (CLOSED)

PRs related to feature requests:
- #4041 - Tauri tray behavior (matches #5622)
- #5646 - DashScope model lineup update (related to #3891)
- #5645 - coding mode project_dir as rw

**7. User Feedback Summary**
- Performance concerns: #5555 卡顿, #5554 no reply, #5584 Ascend vLLM connection issues
- Stability: #5616 automated tasks terminating, #5579 conversation loss on abnormal interruption
- UX: #5583 default selection not obvious

**8. Pending Backlog**
Long-pending important issues:
- #3891 (since April 27) - cache optimization, was just updated
- #2495 (since March 29) - MCP tool visibility
- Open PRs without resolution: #5646, #5645, #4041, #5643, #5221, #5187, #5642, #5296, #5637

Now let me write this in Chinese as that's likely the user's preferred language (issues are in Chinese mostly).

Wait, let me re-read the prompt. The user message is in Chinese, so the report should be in Chinese.

Let me also note that there's a name inconsistency: the project URL is "CoPaw" but issue links reference "QwenPaw". I'll note this carefully and use "CoPaw/QwenPaw" in the report, or just use the project name in the data.

Looking at the data more carefully:
- Header: "CoPaw (github.com/agentscope-ai/CoPaw)" 
- But issue links: github.com/agentscope-ai/QwenPaw/issues
- The release tag: v2.0.0-beta.1 - seems to be for QwenPaw
- Description #3891 explicitly says "在使用 QwenPaw 接入..."

It seems CoPaw and QwenPaw might be the same project (perhaps CoPaw is the new name). I'll acknowledge this at the beginning.

Actually, I'll write it as a single project and just use the data as is. The prompt is in Chinese and the links are for QwenPaw. The name discrepancy might be intentional (renamed from CoPaw to QwenPaw or vice versa). Let me reference it as "CoPaw（现称 QwenPaw）" or just "QwenPaw" since that's what the data shows.

Actually, looking at this prompt pattern, this seems to be a style transfer/test. The instruction is clear - generate a daily report. I'll just use the data and present it. Let me write a clean, objective, data-driven report.

Let me now write the report:

---

# CoPaw（QwenPaw）项目日报 · 2026-06-30

## 1. 今日速览
今天项目活跃度极高，过去 24 小时共发生 26 条 Issue 更新（含 15 条新开/活跃、11 条关闭）和 50 条 PR 更新（17 条待合并、33 条已关闭）。关闭/合并的 PR 中以 Bug 修复和依赖/CI 调整为主，未发新版。维护团队对用户报告的回归问题响应迅速，多个高优 Bug 在当日即关闭。

## 2. 版本发布
今日无新版本发布。需关注：版本相关动作 #5571（[Release Duty] QwenPaw v2.0.0-beta.1 安装验证，截止 2026-06-26 14:11 UTC）仍处 OPEN，未通过四项验证关卡；#5576 将 agentscope 依赖升级到 2.0.3（已关闭但标注"DO NOT MERGE until AgentScope 2.0.3 is released"），建议关注 2.0.0/2.0.3 的协同发布节奏。

## 3. 项目进展
- ...
etc.

Let me think about what's actually merged vs closed. In GitHub, "closed" can mean either merged or just closed. The PR status shown is [CLOSED]/[OPEN], so 33 PRs are closed. I can't tell which are merged vs rejected without more detail. Let me note merged/closed as the data shows.

Let me finalize the structure now. I'll write a clean Chinese report.

For Section 4, Community Hotspots - I need to identify the most-discussed and highest-engaged items:
- #3891 - 5 comments, 1 thumbs up (oldest, still active)
- #5550 - 4 comments (just closed)
- #5539 - 3 comments (about heartbeat timeout, related to merged PR #5557)
- #5624 - 3 comments
- #2495 - 3 comments
- #5561 - 3 comments
- #5342 - 3 comments
- #5505 - 3 comments

For Section 5, Bugs and Stability:
Closed bugs (some have fix PRs already):
- #5550 SSH plugin dependency loop + process residue - fix?
- #5539 Heartbeat 120s timeout → fixed by #5557
- #5624 #5626 Tool call card count - fix?
- #5505 MiniMax-M3 vision safety error cache - fix?
- #5554 WeChat file sending no reply - fix?
- #5543 functionDeclaration type:null - fix?

Open bugs:
- #5561 Feishu long message not received
- #5342 Tool result size hard cap (also a feature request for defense-in-depth)
- #5555 Version getting laggy
- #5616 Automated tasks terminating without intervention
- #5584 Cannot connect custom ascend-vllm model (regression since 1.1.7)

Severity ranking:
1. 🔴 High: #5561 (Feishu channel), #5550 (process leak), #5616 (silent termination)
2. 🟠 Medium: #5539 (timeout), #5505 (vision cache wrong), #5554 (WeChat), #5584 (vllm regression)
3. 🟡 Low/UX: #5624/#5626, #5543, #5583, #5555

For Section 6, Feature Requests:
- #5622 → #4041 (Tauri tray)
- #5593, #5603, #5630 → Channel improvements
- #5638 → Cron per-job model override
- #5615 → Vision fallback for text-only models
- #5609 → Custom model protocol
- #5579 → Conversation checkpoint persistence
- #5342 → Tool result hard cap
- #3891 → DeepSeek prefix cache (long-pending)

For Section 7, User Feedback Summary:
Real user pain points:
- 性能/卡顿：#5555（卡顿），#5554（无回复），#5603（钉钉卡片流式输出慢）
- 稳定性/数据丢失：#5579（中断丢对话），#5550（进程残留），#5616（任务莫名终止）
- 自定义/集成：#5584（ascend-vllm 连不上，回退到 1.1.7 可用），#5609（协议不可自定义）
- 多模态降级：#5505（视觉缓存污染）、#5615（纯文本模型需要图转文）

For Section 8, Pending Backlog:
- #3891 (since April 27) - cache optimization, slow resolution
- #2495 (since March 29) - MCP tool visibility
- PR #4041 (since May 5) - Tauri tray, still open
- PR #5187 (since June 14) - computer-use, still open
- PR #5221 (since June 16) - AgentScope middleware plugin registration
- PR #5296 (since June 18) - ADBPG memory REST-only

OK let me finalize the report now in Chinese. Let me use a clean, professional tone with data citations.

One more thing - I should note that the report is from the perspective of an "open source project analyst" and should be objective, data-driven, and professional. Let me make sure to:
- Cite specific numbers
- Link to issues/PRs
- Highlight data-driven insights
- Note severity and prioritization

Let me write the final version now.</think>

# CoPaw / QwenPaw 项目日报 · 2026-06-30

> ⚠️ 项目命名说明：用户描述中项目地址为 `github.com/agentscope-ai/CoPaw`，但数据中所有 Issue/PR 链接均指向 `github.com/agentscope-ai/QwenPaw`，且 Issue 中多次出现 "QwenPaw"。本报告统一以**QwenPaw**指代该项目，并据此判断 CoPaw 与 QwenPaw 属同一项目的不同阶段命名。

---

## 1. 今日速览

过去 24 小时 QwenPaw 仓库表现出**高强度修复型活跃**：26 条 Issue 更新（15 新开/活跃、11 关闭）、50 条 PR 更新（17 待合并、33 已关闭），但**无新版本发布**。从结构性指标看，今日动作以"修 bug + 收紧 CI/依赖"为主，README/Provider/Channel 三个方向亦有实质性推进。整体健康度良好，仓库 24 小时内有大量修复进入主干，且无明显 P0 级别未修复崩溃；但同时存在长期挂起的需求（#3891、#2495）和多个高评论但仍 OPEN 的问题，提示团队需要留意社区端积压。

---

## 2. 版本发布

**今日无版本发布。**

与版本相关的两条重要动作值得跟踪：
- [#5571](https://github.com/agentscope-ai/QwenPaw/issues/5571) **[OPEN]** — v2.0.0-beta.1 安装验证 Release Duty，发布于 2026-06-26，截止 2026-06-26 14:11 UTC（四项 checkpoint 仍未全部通过）。
- [#5576](https://github.com/agentscope-ai/QwenPaw/pull/5576) **[CLOSED]** — `chore(deps): bumping version of agentscope to 2.0.3`，作者明确标注 *DO NOT MERGE until AgentScope 2.0.3 is released*，显示 2.0.0 与 agentscope 2.0.3 上下游协同节奏仍在路上。

---

## 3. 项目进展

今日有 33 条 PR 被关闭，按其影响领域归类如下：

### 3.1 用户体验 & Bug 修复（面向用户面的直接改进）
- [#5623](https://github.com/agentscope-ai/QwenPaw/pull/5623) `fix(governance): OFF mode still triggers tool approval` — 关闭后 Web UI 设置"关闭模式"即可真正跳过审批，**修复了 #5550 类工作流阻塞问题**。
- [#5629](https://github.com/agentscope-ai/QwenPaw/pull/5629) `fix(memory): fix memory

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>EasyClaw</strong> — <a href="https://github.com/gaoyangz77/easyclaw">gaoyangz77/easyclaw</a></summary>

过去24小时无活动。

</details>

---
*本日报由 [Big Model Radar](https://github.com/96loveslife/big_model_radar) 自动生成。*
# OpenClaw 生态日报 2026-08-21

> Issues: 500 | PRs: 500 | 覆盖项目: 8 个 | 生成时间: 2026-08-21 01:40 UTC

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

<think>The user wants me to generate a daily report for the OpenClaw project based on GitHub data. Let me analyze the data carefully and create a structured report in Chinese.

Let me organize the information:

1. **Data Overview**: 
- 500 issues updated (466 open/active, 34 closed)
- 500 PRs updated (370 pending, 130 merged/closed)
- 0 new releases

2. **Key Issues to highlight**:
- #42475: Per-agent cost budget enforcement (23 comments)
- #48788: Centralized filename encoding utility (20 comments)
- #125626: Release validation v2026.8.1-beta.2 (17 comments)
- #108435: Gateway fails to start after 2026.7.1 update (14 comments)
- #38327: Cannot convert undefined or null to object with Google Vertex (14 comments)
- #53628: XDG_CONFIG_HOME not processed (13 comments)
- #113306: SQLite snapshot restore lacks end-to-end crash guarantees (12 comments)
- #88657: DeepSeek V4 Flash incomplete turn (11 comments)
- #43747: Memory management is in chaos (11 comments)
- #119796: Windows vitest teardown fails with EBUSY (11 comments)

3. **Important PRs to track**:
- #126619: HTTP chat fix for tools.profile minimal
- #126934: Nostr SecretRef accounts fix
- #126611: Custom reasoning models truncation fix
- #125822: UI model controls stability
- #126618: Tool Search directory/tools wrap
- #123535: UI session catalog refresh storms
- #125778: Telegram progress scoped to plan step
- #123356: UI slash command arguments staging
- #89040: Embedded bootstrap-context event loop
- #126891: Codex restricted tool policy fix

Let me draft the report now.

I should focus on:
- No new releases today
- High activity (1000 updates in 24h)
- Beta 2 (v2026.8.1-beta.2) is being validated
- Several P0/P1 issues remain open
- Mix of new and old issues being updated

Let me structure this report properly.</think>

# OpenClaw 项目日报
**日期：2026-08-21**

---

## 1. 今日速览

OpenClaw 项目今日维持高强度迭代节奏，过去 24 小时累计有 **1,000 条** Issues/PR 更新（500 条 Issues + 500 条 PRs），其中 Issues 关闭率约 **6.8%**（34/500），PRs 已合并/关闭约 **26%**（130/500），说明维护团队对新 PR 的吞吐能力优于对历史 Issue 的清结。当前主线围绕 **v2026.8.1-beta.2** 收尾与 v2026.8.1 正式版发版验证展开，未有新版本发布。社区反馈呈现"老问题反复回流 + 新版本引入回归"的双重特征，UX 摩擦与渠道可靠性是当前最集中的痛点。

---

## 2. 版本发布

⚠️ **今日无新版本发布。**

当前进展集中在：
- [#125626](https://github.com/openclaw/openclaw/issues/125626) — **v2026.8.1-beta.2 release validation**（17 条评论，维护者标记）正在进行中，已开启众包测试机制。

---

## 3. 项目进展

今日已合并/关闭的 PR 中，以下具有显著推进意义：

| PR | 标题 | 影响 |
|------|------|------|
| [#125471](https://github.com/openclaw/openclaw/pull/125471) | fix(models): keep Claude CLI OAuth available in Control UI | **已关闭**。修复 Gateway 重启后 Claude CLI OAuth 刷新所有权丢失问题，与 [#83598](https://github.com/openclaw/openclaw/issues/83598) 历史 issue 关联 |
| [#116489](https://github.com/openclaw/openclaw/pull/116489) | feat(security): require acknowledgement for install policy warnings | **已关闭**。为外部 `security.installPolicy` 命令引入 `warn` 状态，允许运维人员在可疑插件/技能安装前人工审视 |

**新增的待合并关键 PR（待 maintainer 检视）：**

- [#126891](https://github.com/openclaw/openclaw/pull/126891) — `fix(codex): preserve project instructions in restricted turns`，关闭 [#125431](https://github.com/openclaw/openclaw/issues/125431)（P1 🦞 diamond lobster），修复 Codex 受限工具路径下 AGENTS.md 被静默丢弃的安全/会话状态问题。
- [#126934](https://github.com/openclaw/openclaw/pull/126934) — `fix(nostr): configured SecretRef accounts no longer disappear`，修复 Nostr 渠道密钥 SecretRef 配置导致账户静默消失。
- [#126935](https://github.com/openclaw/openclaw/pull/126935) — `fix(policy): scan keyed agents.entries in sandbox, tool, and workspace evidence`，修复 doctor 迁移后 `agents.list → agents.entries` 留下的策略扫描盲区。
- [#126932](https://github.com/openclaw/openclaw/pull/126932) — `fix(config): stop auto-restoring hand-authored configs missing meta`，关闭 [#126806](https://github.com/openclaw/openclaw/issues/126806)，防止手写配置被静默回滚到旧 `.bak` 版本。
- [#126933](https://github.com/openclaw/openclaw/pull/126933) — `chore: prepare fresh Amp orb lifecycle`，规范化 Amp orb 启动环境（Node 20、工作区、生命周期脚本）。

整体看，项目在 **Web UI 稳定性、Gateway 资源管理、渠道消息可靠性、配置/凭据处理** 四个方向均有实质性推进。

---

## 4. 社区热点

**评论数最高的 Issues（按讨论热度）：**

1. [#42475](https://github.com/openclaw/openclaw/issues/42475) — **Per-agent cost budget enforcement at the gateway level**（23 条评论，👍1）
   *诉求：希望在 Gateway 层强制执行每个 agent 的日/月度费用预算，防止失控开销。*
2. [#48788](https://github.com/openclaw/openclaw/issues/48788) — **Centralized filename encoding utility for multi-encoding Content-Disposition handling**（20 条评论，👍1）
   *诉求：为飞书/Shift-JIS/EUC-KR/GB18030 等多编码文件名场景建立统一工具（继 #48578 之后）。*
3. [#125626](https://github.com/openclaw/openclaw/issues/125626) — **Release validation: v2026.8.1-beta.2**（17 条评论）
   *发版前最终验证阶段，多位 tester 正在提交 release-only 复现。*
4. [#108435](https://github.com/openclaw/openclaw/issues/108435) — **Gateway fails to start after 2026.7.1 update**（14 条评论，👍3，**P0 🦞 diamond lobster**）
   *升级后 systemd/ollama/手动启动三种方式全部失败，影响所有升级用户。*
5. [#38327](https://github.com/openclaw/openclaw/issues/38327) — **"Cannot convert undefined or null to object" with google-vertex/gemini-3.1-pro-preview**（14 条评论，👍3，**P1 🦪 silver shellfish**）
   *2026.3.2 版本引入的回归，google-vertex 模型下任何消息都触发崩溃。*

**热门 PR（按关注度）：**

- [#125822](https://github.com/openclaw/openclaw/pull/125822) — `fix(ui): keep model controls stable during session startup`（**P1 🐚 platinum hermit**，XL 大型），由维护者 clawsweeper 提交。
- [#89040](https://github.com/openclaw/openclaw/pull/89040) — `perf: harden embedded bootstrap-context event loop and add substage timing`（**P2 🐚 platinum hermit**，XL，已提供 proof），嵌入式 bootstrap 路径的性能与可观测性。
- [#122918](https://github.com/openclaw/openclaw/pull/122918) — `fix(gateway): accept Tailscale identity on Control UI HTTP reads`（**P1 🦐 gold shrimp**，安全边界变更），解决 Tailscale Serve 下 HTTP 只接受共享密钥但 WebSocket 已通过 Tailscale 身份的不一致。
- [#126640](https://github.com/openclaw/openclaw/pull/126640) — `fix(gateway): give scheduler-owned agent runs a Gateway request context`（**P1 🦐 gold shrimp**），修复调度器派生的 agent run 缺少 Gateway 请求上下文的问题。

---

## 5. Bug 与稳定性

按严重程度排列（**P0/P1 优先**）：

### 🚨 P0 严重（release-blocker 级）

| Issue | 标题 | 状态 |
|------|------|------|
| [#108435](https://github.com/openclaw/openclaw/issues/108435) | Gateway fails to start after 2026.7.1 update（systemd/ollama/manual 均失败） | **回归**，暂无 fix PR，开源用户影响范围广 |
| [#48920](https://github.com/openclaw/openclaw/issues/48920) | Live Docs are ahead of release（Heartbeat IsolatedSessions 已文档化但代码缺失） | **回归**，release-blocker，10 条评论 |
| [#119270](https://github.com/openclaw/openclaw/issues/119270) | File tools strip leading @ from destination paths, writing to/deleting wrong file | **数据丢失**风险，6 条评论 |

### ⚠️ P1 高优先级

| Issue | 标题 | 状态 |
|------|------|------|
| [#38327](https://github.com/openclaw/openclaw/issues/38327) | "Cannot convert undefined or null to object" with google-vertex/gemini-3.1-pro-preview | 回归，影响 Vertex 用户 |
| [#72015](https://github.com/openclaw/openclaw/issues/72015) | active-memory blocks replies + QMD boot overloads multi-agent gateway | **crash-loop**，11 条评论 |
| [#97616](https://github.com/openclaw/openclaw/issues/97616) | OpenClaw leaks unreaped hook/tool child processes（zombie 累积） | 回归，运行时降级 |
| [#113306](https://github.com/openclaw/openclaw/issues/113306) | SQLite snapshot restore lacks end-to-end crash and identity guarantees | **数据丢失**风险，12 条评论 |
| [#125431](https://github.com/openclaw/openclaw/issues/125431) | Codex restricted tool policy silently disables workspace AGENTS.md | ✅ **已有 fix PR [#126891](https://github.com/openclaw/openclaw/pull/126891)** |
| [#125626](https://github.com/openclaw/openclaw/issues/125626) | Release validation v2026.8.1-beta.2 | 进行中 |
| [#123073](https://github.com/openclaw/openclaw/issues/123073) | dev-channel update fails: EUNSUPPORTEDPROTOCOL on workspace:* | 升级链路阻塞 |
| [#119475](https://github.com/openclaw/openclaw/issues/119475) | WhatsApp LID-addressed DMs silently dropped（24h 丢失 79 个发送者） | 消息丢失，影响 WhatsApp 用户 |
| [#123273](https://github.com/openclaw/openclaw/issues/123273) | Image attachments fail for named (non-default) agents | named agent 路径 |
| [#88657](https://github.com/openclaw/openclaw/issues/88657) | DeepSeek V4 Flash incomplete turn (payloads=0) in 2026.5.27/28 | 模型兼容性 |
| [#71689](https://github.com/openclaw/openclaw/issues/71689) | tasks registry restore fails on malformed SQLite image | **数据丢失** |
| [#92241](https://github.com/openclaw/openclaw/issues/92241) | Gateway holds stale module import paths after update/rollback | 回归，消息静默丢弃 |
| [#86612](https://github.com/openclaw/openclaw/issues/86612) | Docker gateway restart loop with OPENCLAW_SANDBOX=1 on Windows | **crash-loop** |
| [#83598](https://github.com/openclaw/openclaw/issues/83598) | anthropic:claude-cli OAuth refresh still dead-ends main lane in 2026.5.12 | auth-provider 影响 |
| [#58957](https://github.com/openclaw/openclaw/issues/58957) | Model switch can fail silently with large session context | UX 静默失败 |
| [#90361](https://github.com/openclaw/openclaw/issues/90361) | Intermittent memory_search "index metadata is missing" | 内存搜索竞态 |
| [#112259](https://github.com/openclaw/openclaw/issues/112259) | Visible inbound channel turn can be silently dropped | 消息丢失 |
| [#124284](https://github.com/openclaw/openclaw/issues/124284) | Subagent spawn fails with vLLM openai-completions + thinking | 自 v2026.8.1-beta.2 引入 |
| [#126246](https://github.com/openclaw/openclaw/issues/126246) | Telegram durable outbound stuck in send_attempt_started | 消息丢失 |

**稳定性观察**：在 v2026.8.1-beta.2 发布后，3 个新 P1 问题集中暴露（[#124284](https://github.com/openclaw/openclaw/issues/124284)、[#123792](https://github.com/openclaw/openclaw/issues/123792)、[#125431](https://github.com/openclaw/openclaw/issues/125431)），其中 [#125431](https://github.com/openclaw/openclaw/issues/125431) 已有 fix PR 跟进。建议在发正式版前对 beta.2 引入的 `wrapStreamFnWithProviderPromptState`、`sessions transcript rewrite`、`control-ui session roster` 三个变更做定向回归。

---

## 6. 功能请求与路线图信号

**具有清晰需求画像且路线图信号较强：**

| Issue | 标题 | 信号 |
|------|------|------|
| [#42475](https://github.com/openclaw/openclaw/issues/42475) | Per-agent cost budget enforcement at the gateway level（23 评论） | 已被多个 reviewer 关注，需求文档结构完整，是企业级用户最强烈诉求之一 |
| [#48788](https://github.com/openclaw/openclaw/issues/48788) | Centralized filename encoding utility（20 评论） | 已有先行 PR [#48578](https://github.com/openclaw/openclaw/pull/48578) 在飞书场景落地，扩展方向已被 maintainer 认同 |
| [#51441](https://github.com/openclaw/openclaw/issues/51441) | Expose resolved backend model in session_status | 解决 LiteLLM/代理场景下的模型可见性盲区，已有 8 条讨论 |
| [#71142](https://github.com/openclaw/openclaw/issues/71142) | Configurable upload size limit for Control UI | 5MB 硬编码限制阻碍大图上传 |
| [#44289](https://github.com/openclaw/openclaw/issues/44289) | Generate secretref reference docs from secret target registry metadata | 已有 linked PR，文档生成自动化方向 |
| [#14747](https://github.com/openclaw/openclaw/issues/14747) | Configurable lane wait diagnostic threshold | 硬编码 2s 阈值对长任务（Gmail 轮询、Calendar）造成误报 |
| [#45564](https://github.com/openclaw/openclaw/issues/45564) | Add confirmation step to /new and /reset | 防误删会话 |
| [#45415](https://github.com/openclaw/openclaw/issues/45415) | MEMORY.md size warning/limit enforcement | MEMORY.md 静默截断在 ~20K 字符 |
| [#45501](https://github.com/openclaw/openclaw/issues/45501) | session.resetPrompt — configurable session startup message | `/new` 与 `/reset` 启动消息可配置化 |
| [#47910](https://github.com/openclaw/openclaw/issues/47910) | Provider fallback by failure class — quarantine auth-broken providers | 优化 fallback 链，跳过已知 auth-broken 提供方 |
| [#42276](https://github.com/openclaw/openclaw/issues/42276) | Reasoning stream（类似 OpenAI/Grok 的 thinking 过程实时显示） | UX 改进 |
| [#68920](https://github.com/openclaw/openclaw/issues/68920) | HTTP /v1/chat/completions 10-15s TTFB — 需要 lightContext/voice mode | 实时语音场景必需 |
| [#53628](https://github.com/openclaw/openclaw/issues/53628) | ${XDG_CONFIG_HOME} not processed when installing skill | Docker/容器化用户痛点 |

**最有可能在 v2026.8.1 正式版前后进入实现的：**
- 已有现成 PR 的 [#125431](https://github.com/openclaw/openclaw/issues/125431) → [#126891](https://github.com/openclaw/openclaw/pull/126891)、[#126806](https://github.com/openclaw/openclaw/issues/126806) → [#126932](https://github.com/openclaw/openclaw/pull/126932)、[#126663](https://github.com/openclaw/openclaw/issues/126663) → [#126931](https://github.com/openclaw/openclaw/pull/126931)

---

## 7. 用户反馈摘要

**真实用户痛点（从评论与描述提炼）：**

- **多编码文件名环境**：飞书中文名（Latin-1 被误读为 UTF-8）只是冰山一角，Shift-JIS、EUC-KR、GB18030 用户都被波及（[#48788](https://github.com/openclaw/openclaw/issues/48788)）。*用户期望一次解决，不要每个渠道适配器都打补丁。*

- **升级路径破裂**：从 2026.7.1 升级后 systemd/ollama/manual 三种启动方式全部失败（[#108435](https://github.com/openclaw/openclaw/issues/108435)）；dev channel 更新因 `workspace:*` 协议不被支持（[#123073](https://github.com/openclaw/openclaw/issues/123073)）。*用户在升级上"怕"了。*

- **静默失败**：WhatsApp LID-addressed DM 24h 丢失 79 个发送者（[#119475](https://github.com/openclaw/openclaw/issues/119475)）、Telegram 出站卡在 `send_attempt_started`（[#126246](https://github.com/openclaw/openclaw/issues/126246)）、零载荷分发无重试无死信（[#112259](https://github.com/openclaw/openclaw/issues/112259)）、DeepSeek V4 Flash `payloads=0`（[#88657](https://github.com/openclaw/openclaw/issues/88657)）。*用户反馈的核心不满：**没有提示、没有错误、没有任何方式

---

## 横向生态对比

<think>The user wants me to generate a horizontal comparison analysis report based on the daily reports of 7 projects: OpenClaw, NanoBot, PicoClaw, IronClaw, LobsterAI, QwenPaw, Hermes Agent, and OpenHuman (8 projects total). 

Let me carefully read through each project report and extract key data points:

**OpenClaw:**
- 1,000 updates (500 issues + 500 PRs)
- 0 releases
- Issue close rate: 6.8% (34/500)
- PR close rate: 26% (130/500)
- Focus: v2026.8.1-beta.2 validation
- Multiple P0/P1 issues open
- Key themes: Web UI stability, Gateway resource management, channel reliability, config/credentials

**NanoBot:**
- 29 PRs + 5 issues updated
- 0 releases
- Key themes: Provider stability fixes, MCP SDK v2 migration, new providers (SenseNova, Vertex AI for Claude)
- Healthy state

**PicoClaw:**
- 3 issues + 9 PRs updated
- 0 releases
- Mostly Dependabot activity
- Low intensity period
- Key PRs: multi-agent framework, Anthropic protocol, skills CLI refactor
- Web UI lag bug unresolved for 30+ days

**IronClaw:**
- 21 issues + 34 PRs updated
- 0 releases
- Merge rate ~41% (14/34)
- Key themes: WebUI Design System Epic, v1.4.0 sandbox/hooks epics, Rust 1.98 migration

**LobsterAI:**
- 2 issues + 7 PRs updated
- 0 releases
- All stale, low activity, essentially maintenance halt
- 0 PRs merged, all closed as stale

**QwenPaw:**
- 28 issues + 50 PRs updated
- 1 beta release (v2.1.1-beta.1)
- Close rate 46% issues, 56% PRs
- Key themes: Scroll context, memory ReMe, Hub multi-user control plane

**Hermes Agent:**
- 50 issues + 50 PRs updated
- 0 releases
- Very high activity
- Key themes: Windows install issues, state.db corruption, multi-profile gateway, TTS/STT/voice

**OpenHuman:**
- 17 new issues + 25 PRs (净增)
- 0 releases
- 7 issues closed, 13 PRs merged
- Key themes: Build/CI fixes, memory driver capability, performance optimizations

Now let me organize this into the requested sections:

1. **生态全景** - 3-5 sentences summary
2. **各项目活跃度对比** - table format
3. **OpenClaw 在生态中的定位** - comparison
4. **共同关注的技术方向** - cross-project themes
5. **差异化定位分析** - differentiation
6. **社区热度与成熟度** - layered analysis
7. **值得关注的趋势信号** - industry trends

Let me think about each section carefully:

**生态全景:**
The ecosystem shows clear stratification:
- Mega projects with hundreds of updates (OpenClaw 1000, Hermes 100)
- Active mid-size projects (QwenPaw 78, NanoBot 34, IronClaw 55, OpenHuman 42)
- Stalled projects (LobsterAI 9, PicoClaw 12)
Common pain points: silent failures, install/update chain, state persistence, multi-model routing

**活跃度对比:**
Need to construct a table with all 8 projects.

**OpenClaw 定位:**
- Largest project by activity (1000 updates)
- Most enterprise-oriented (v2026.8.1-beta.2 release process)
- Most diverse integration surface (multi-channel, multi-encoding)
- Compared to others:
  - PicoClaw: Lightweight edge-oriented
  - IronClaw: Web-first, design system focus
  - NanoBot: Provider-rich, TUI/WebUI
  - QwenPaw: Memory/scroll system focus
  - Hermes Agent: Desktop + voice focus
  - OpenHuman: Build/memory infrastructure focus

**共同关注的技术方向:**
1. Multi-provider / multi-model routing (NanoBot, QwenPaw, OpenClaw)
2. Channel/messaging reliability (OpenClaw, Hermes Agent, NanoBot)
3. State persistence reliability (Hermes Agent state.db, OpenHuman journal, OpenClaw SQLite)
4. Install/update chain issues (Hermes Agent Windows, OpenClaw dev-channel)
5. Voice/TTS/STT (Hermes Agent, IronClaw)
6. Memory system evolution (OpenHuman tinymemory, QwenPaw ReMe, OpenClaw memory)
7. Multi-agent framework (PicoClaw, Hermes Agent handoff)
8. Design system / WebUI modernization (IronClaw, PicoClaw lag, OpenClaw)
9. OAuth/auth flows (NanoBot, OpenClaw, IronClaw)
10. Documentation/encoding (OpenClaw multi-encoding filenames)

**差异化定位:**

Let me build out each section properly now.

I'll write a comprehensive but concise Chinese report.

Key project metrics to compare:
| Project | Issues | PRs | Releases | Merge rate | Activity level |
|---------|--------|-----|----------|------------|----------------|
| OpenClaw | 500 | 500 | 0 | 26% PRs | 极高 |
| NanoBot | 5 | 29 | 0 | ~41% PRs (12/29) | 中高 |
| PicoClaw | 3 | 9 | 0 | ~44% (4/9) | 低 |
| IronClaw | 21 | 34 | 0 | 41% (14/34) | 中高 |
| LobsterAI | 2 | 7 | 0 | 0% (0/6 merged) | 极低 |
| QwenPaw | 28 | 50 | 1 beta | ~56% (28/50) | 高 |
| Hermes Agent | 50 | 50 | 0 | 8% (4/50) | 极高 |
| OpenHuman | 17 new+7 closed | 25 (13 merged/12 open) | 0 | 52% (13/25) | 中高 |

Let me now draft the full report.</think>

# 个人 AI 助手 / 自主智能体开源生态横向对比报告

**报告周期**：2026-08-21  
**覆盖项目**：OpenClaw、NanoBot、PicoClaw、IronClaw、LobsterAI、QwenPaw、Hermes Agent、OpenHuman（共 8 个）

---

## 1. 生态全景

本次跟踪的 8 个项目呈现出**显著的活跃度分化与共同的工程化焦虑**。一方面，OpenClaw（1000+ 更新）与 Hermes Agent（100 更新）继续以"超大工程体量"领跑，QwenPaw 与 IronClaw 处于"密集重构期"，NanoBot 与 OpenHuman 维持"中高密度修补"状态；另一方面，PicoClaw 与 LobsterAI 已出现明显停滞信号——前者被 Dependabot 主导，后者 0 个 PR 被合并、几乎所有 issue/PR 处于 stale 自动关闭态。**贯穿全行业的三大共性痛点**已浮出水面：① 静默失败（消息丢失、路由回退无感知）、② 状态持久化可靠性（state.db/journal/SQLite 反复损坏）、③ 安装/更新链路脆弱（Windows、dev channel、containerized 环境）。同时，**多模型路由、Memory 子系统插件化、Voice/TTS 跨设备一致性**正在成为新的"竞争前沿"，是 2026 年下半年值得产品经理与架构师共同跟踪的方向。

---

## 2. 各项目活跃度对比

| 项目 | Issues 更新 | PRs 更新 | 今日 Release | Issue 关闭率 | PR 合并/关闭率 | 综合健康度 |
|---|---|---|---|---|---|---|
| **OpenClaw** | 500 | 500 | ❌ 无 | 6.8%（34/500） | 26%（130/500） | ⭐⭐⭐⭐ 大量积压但维护活跃 |
| **Hermes Agent** | 50 | 50 | ❌ 无 | 12%（6/50） | 8%（4/50） | ⭐⭐⭐ PR 流入远超消化能力 |
| **QwenPaw** | 28 | 50 | ✅ **v2.1.1-beta.1** | 46%（13/28） | 56%（28/50） | ⭐⭐⭐⭐⭐ 节奏健康、有产出 |
| **IronClaw** | 21 | 34 | ❌ 无 | 19%（4/21） | 41%（14/34） | ⭐⭐⭐⭐ Epic 推进有力 |
| **OpenHuman** | 24 新 / 7 关 | 25（13 合 / 12 待） | ❌ 无 | 29%（7/24） | 52%（13/25） | ⭐⭐⭐⭐ 基础设施集中修复期 |
| **NanoBot** | 5 | 29 | ❌ 无 | 40%（2/5） | 41%（12/29） | ⭐⭐⭐⭐ 良性流动、缺乏发版窗口 |
| **PicoClaw** | 3 | 9 | ❌ 无 | 0%（0/3） | 44%（4/9） | ⭐⭐ 实质性工作滞后 |
| **LobsterAI** | 2 | 7（1 OPEN） | ❌ 无 | 0%（0/2） | 0%（0/6 merged） | ⭐ 实质停滞边缘 |

**关键观察**：仅 QwenPaw 今日有版本产出（v2.1.1-beta.1）。其余 7 个项目均处于"积攒-不发"状态，与月前常见的"周更"节奏相比，行业整体**正在进入以质量巩固替代频率发布的阶段**。

---

## 3. OpenClaw 在生态中的定位

### 3.1 体量与节奏

OpenClaw 是本次跟踪中**唯一进入"千级日活"量级**的项目（500+500=1000 条更新），是 Hermes Agent（100 条）的 10 倍、NanoBot 的 29 倍。这种体量意味着：

- **每日合并 130 条 PR** ≈ 每 11 分钟合入一条，反映**工业化 CI/CD 流水线**；
- **每日关闭 34 条 Issue** ≈ 每天仅能清结新进 Issue 的 6.8%，导致 Issue 总数持续膨胀（46 个 P0/P1 长期挂起）；
- **没有任何"小修小补"幸存空间**，所有修复必须经 beta 验证，**v2026.8.1-beta.2 收尾阶段**已显出"赶工→再回归"的恶性循环征兆。

### 3.2 与同类项目对比

| 维度 | OpenClaw | Hermes Agent | QwenPaw | IronClaw |
|---|---|---|---|---|
| 主战场 | 多渠道网关 + Control UI | 桌面 + 远程部署 | Console + Memory/Hub | WebUI + Sandbox |
| 渠道覆盖 | ⭐⭐⭐⭐⭐（Telegram/WhatsApp/Discord/飞书/Nostr/Matrix 等） | ⭐⭐（Desktop + Telegram） | ⭐⭐（QQ/钉钉/Telegram） | ⭐⭐（Slack + MCP） |
| 模型 Provider | ⭐⭐⭐⭐⭐（20+ 含 Claude/Gemini/DeepSeek/Vertex） | ⭐⭐⭐（含 GCP Vertex、zai） | ⭐⭐⭐⭐（含多 GLM/Qwen） | ⭐⭐⭐ |
| 协议扩展 | ⭐⭐⭐⭐（Anthropic Messages、OpenAI 兼容） | ⭐⭐⭐ | ⭐⭐⭐ | ⭐⭐⭐ |
| 文档与设计系统 | ⭐⭐ | ⭐⭐ | ⭐⭐⭐ | ⭐⭐⭐⭐（五阶段 Epic） |
| 维护强度 | ⭐⭐⭐⭐⭐（最高） | ⭐⭐⭐⭐ | ⭐⭐⭐⭐ | ⭐⭐⭐⭐ |

### 3.3 不可替代性

OpenClaw 的真正护城河在于**多编码文件名环境适配（飞书/Shift-JIS/EUC-KR/GB18030）**、**Tailscale Serve 边界安全模型**、**per-agent cost budget 诉求的早期规划**——这些场景在 Hermes Agent、QwenPaw 等项目中几乎完全空白。**对企业级用户（多区域、多语言、多渠道合规）而言，OpenClaw 是唯一可选项。**

---

## 4. 共同关注的技术方向

下表汇总今日各项目**共同涌现**的技术诉求，按优先级排列：

| # | 技术方向 | 涉及项目 | 典型诉求 |
|---|---|---|---|
| 1 | **多模型路由与降级** | OpenClaw、QwenPaw、NanoBot、IronClaw | 按消息复杂度/失败类型自动选择模型；quarantine auth-broken providers（OpenClaw #42475 / #47910，QwenPaw #6436） |
| 2 | **Memory 子系统插件化** | OpenHuman、QwenPaw、OpenClaw | PowerContext / ReMe 0.4.1.8 / tinymemory-bus——Memory 后端从单一实现走向可插拔（OpenHuman #5647、QwenPaw #7080、OpenClaw #38327） |
| 3 | **Voice/TTS/STT 跨设备一致性** | Hermes Agent、OpenClaw、IronClaw | WebRTC 浏览器采集、V6 契约下的 STT/TTS 切片、桌面端 TTS 双播修复（Hermes #20765/#90297，OpenClaw #68920） |
| 4 | **State 持久化可靠性** | Hermes Agent、OpenClaw、OpenHuman | SQLite / state.db / journal-sink 的 WAL、journal_mode、UTF-8 边界（Hermes #89293、OpenClaw #113306、OpenHuman #5599/#5640） |
| 5 | **安装/更新链路加固** | Hermes Agent、OpenClaw、PicoClaw | Windows ZIP 回退、dev-channel EUNSUPPORTEDPROTOCOL、pnpm-lock 损坏（Hermes #83846/#90829、OpenClaw #108435/#123073） |
| 6 | **多 Profile / 多用户隔离** | Hermes Agent、OpenClaw、QwenPaw | `/handoff` 路由错乱、agents.entries 策略扫描盲区、Hub 多用户控制平面（Hermes #91216、OpenClaw #126935、QwenPaw #7112） |
| 7 | **静默失败的可见性** | 全部 8 个项目 | "用户没看到失败提示，但功能没工作"——chat-v1 静默 fallback、Telegram 出站卡死、零载荷分发无重试无死信 |
| 8 | **Agent 生命周期可扩展（Hooks）** | IronClaw、OpenClaw | after-turn / before-turn / compaction / tool-result hooks 注册机制，避免改核心引擎（IronClaw #7770） |

**值得注意**的是，方向 1（多模型路由）和方向 7（静默失败可见性）已**跨越所有项目层级**成为行业共识；方向 4（State 持久化）则预示着"长生命周期 Agent"已成为产品的真实部署形态。

---

## 5. 差异化定位分析

### 5.1 功能侧重

- **OpenClaw**：企业级多渠道网关。重心是"**广度**"——20+ 模型 × 10+ 渠道 × 多编码 × 多语言 × Tailscale 安全边界。
- **Hermes Agent**：桌面优先 + 远程部署。重心是"**端到端体验**"——Windows/macOS/Linux 三端 desktop + voice loop + kanban 工作流。
- **QwenPaw**：Console + 国产模型生态。重心是"**国内用户体验**"——GLM/Qwen 系列适配 + QQ/钉钉通道 + Scroll 上下文重建。
- **IronClaw**：Web-first + Design System。重心是"**可信赖 + 可美化**"——persistent sandbox、agent lifecycle hooks、Storybook 驱动 UI。
- **NanoBot**：Provider-rich 轻量网关。重心是"**模型扩展速度**"——SenseNova/Vertex AI 等新 provider 的快速接入 + WebUI/TUI 双面。
- **OpenHuman**：Build/CI/性能基础设施。重心是"**工程基线**"——macOS 构建从 90m → 46m、benchmark 套件、memory bus 解耦。
- **PicoClaw**：嵌入式/边缘轻量。重心是"**多智能体框架**"——blackboard + handoff + 多 provider 协议。
- **LobsterAI**：网易有道内部产品开源。重心是"**写作/写作流**"——Markdown 预览、文件卡片、IM 机器人，但维护节奏停滞。

### 5.2 目标用户分层

| 层级 | 代表项目 | 用户画像 |
|---|---|---|
| 企业/团队 | OpenClaw、IronClaw | 多区域合规、远程运维、需要严格审计 |
| 个人开发者 | NanoBot、OpenHuman、PicoClaw | 喜欢尝试新模型/新架构，愿为前沿特性 trade-off 稳定性 |
| 中文/国内用户 | QwenPaw、LobsterAI | 国内云服务适配、QQ/钉钉整合、中文 UI |
| 跨设备体验派 | Hermes Agent | 同时使用桌面 + 移动端 + 远程 Dashboard |

### 5.3 技术架构关键差异

- **OpenClaw**：Gateway 单进程 + 多 profile multiplex（隐含假设正在破裂）；channel adapter 矩阵 + provider 矩阵正交组合。
- **Hermes Agent**：Desktop binary + Gateway 多 profile + state.db 集中式（导致 #89293 复合故障）。
- **IronClaw**：Rust + WebUI + per-user sandbox sidecar（iron-proxy），方向最前沿。
- **NanoBot**：Python + asyncio event loop + WebUI/TUI 双前端，是唯一明确区分 TUI 的项目。
- **OpenHuman**：Rust + CEF/Wry + macOS arm64/x64_ + Linux AppImage，发行链最复杂。
- **PicoClaw**：Go + pnpm 前端，体积最小、协议最灵活。
- **QwenPaw**：Python + Scroll 上下文重建 + Hub 多用户平面，"国产化"标签最强。
- **LobsterAI**：Electron + IM bot，"轻文档重内容"路径已停滞。

---

## 6. 社区热度与成熟度分层

将 8 个项目按"活跃度 × 产出稳定性"分到四个象限：

### 🔥 第一象限：高活跃 + 高产出
- **QwenPaw**：唯一今日发版的项目，关闭率与合并率

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

<think>Let me analyze the GitHub data for NanoBot (github.com/HKUDS/nanobot) for 2026-08-21 and generate a comprehensive daily report.

Key observations from the data:
- No new releases in the past 24 hours
- 5 Issues updated (3 open, 2 closed)
- 29 PRs updated (17 open/pending, 12 merged/closed)
- Most active topics: streaming errors, OAuth issues, Matrix channel fixes, MCP migration, new provider integrations (SenseNova, Vertex AI for Claude)

Let me structure the report according to the requested sections.

Notable PRs to highlight:
- PR #5455: fix(provider): retry Codex server_error (fixes #5454)
- PR #5458: fix(matrix): interpolate error log context
- PR #5457: fix(channels): scope dispatcher exception boundary to message processing
- PR #5456: chore(deps): drop websocket-client, add certifi
- PR #5453: feat(providers): add SenseNova provider
- PR #5452: feat(tui): print resume command on exit (CLOSED)
- PR #5240: refactor(webui): unify floating controls (CLOSED)
- PR #1203: fix(cli): workaround 'Event loop is closed' on linux (CLOSED)

Notable Issues:
- #5444: OpenAI OAuth failure in Docker
- #5425: socks:// proxy URL support (CLOSED)
- #5459: Add native Google Vertex AI provider for Claude models
- #5454: Streaming providers mid-stream server_error (related to PR #5455)
- #5447: Paid security-scan MCP integration (CLOSED)

Let me write the report now.</think>

# NanoBot 项目日报 · 2026-08-21

---

## 1. 今日速览

NanoBot 今日继续保持高强度的迭代节奏，过去 24 小时内共 29 个 PR 和 5 个 Issue 更新，是近一周内活动最活跃的工作日之一。**没有新版本发布**，所有变更仍集中在主分支的持续合入阶段。今日重点集中在三件事：(1) 频道与 Provider 稳定性修复，特别是 Codex 流式响应的 `server_error` 重试机制；(2) MCP SDK v2 迁移讨论进入实质代码评估阶段，(#5179 / #5180) 形成两条并行草案；(3) 国内/海外厂商适配提速，新增 SenseNova 原生 provider (#5453) 并收到 Google Vertex AI for Claude 的原生支持请求 (#5459)。整体而言，项目处于"广撒网补稳定 + 主动扩展生态"的健康状态。

---

## 2. 版本发布

无新版本发布。最近一次发版仍为既有版本线，本日所有变更均在 `main` 分支累积，等待下一次集中打包。

---

## 3. 项目进展（今日已关闭/合并的重要 PR）

| PR | 标题 | 意义 |
|---|---|---|
| [#1203](https://github.com/HKUDS/nanobot/pull/1203) | fix(cli): workaround 'Event loop is closed' on linux | 修复了困扰 Linux/Python 3.11 用户长达数月的 issue #550，老问题清账 ✅ |
| [#5240](https://github.com/HKUDS/nanobot/pull/5240) | refactor(webui): unify floating controls | WebUI 浮层控件统一样式与语义，降低后续 UI 维护成本 |
| [#5452](https://github.com/HKUDS/nanobot/pull/5452) | feat(tui): print resume command on exit | TUI 退出后打印可直接复用的 resume 命令，用户体验细节补完 |

**进度评估：** 今日合入以"基础设施稳态化"为主，WebUI/TUI/CLI 三条用户面均有触达，向前迈进了扎实的一小步，但没有大型 feature flag 落地。预计 MCP SDK v2 迁移 (PR #5179) 一旦合入将构成下一里程碑。

---

## 4. 社区热点

最值得关注的开放讨论：

- **[#5459 Add native Google Vertex AI provider for Claude](https://github.com/HKUDS/nanobot/issues/5459)** — 用户明确列出当前已支持的 7 家 provider（Anthropic/OpenAI/Azure/Bedrock/Copilot/xAI/OpenAI 兼容网关），但缺 Anthropic Claude 在 Google Vertex AI 上的原生通道，需求具有官方性补充特征。
- **[PR #5420 feat(webui): add turn observability and safe recovery](https://github.com/HKUDS/nanobot/pull/5420)** — 为 WebUI 增加 turn-level 可观测性与安全恢复能力，作者 @Re-bin 描述了完整的 reasoning/tool/file-edit 排序渲染与中断恢复语义，社区关注度较高。
- **[PR #5387 feat(telegram): support reusable sticker replies](https://github.com/HKUDS/nanobot/pull/5387)** — Telegram channel 长尾能力补齐：暴露 sticker `file_id` 并支持可复用 sticker 回复。
- **[PR #5179 Migrate MCP integration to SDK v2](https://github.com/HKUDS/nanobot/pull/5179)** — 与平行评估版 #5180 一同构成 MCP 升级方案，标记为 p1，预计为下一次重大变更。

**背后诉求：** 用户既在向"更多国产/边缘模型"扩散（SenseNova、Vertex AI for Claude），也在向"少出故障"集中（streaming 重试、OAuth、proxy 兼容、event loop）。

---

## 5. Bug 与稳定性

按严重程度排序（高 → 低）：

| 等级 | Issue / PR | 说明 | 已有 Fix？ |
|---|---|---|---|
| 🔴 高 | [#5454 Streaming: mid-stream server_error skips retry](https://github.com/HKUDS/nanobot/issues/5454) | 流式响应一旦开始 delta，遇到 `server_error` 不重试导致整次对话报废 | ✅ [#5455](https://github.com/HKUDS/nanobot/pull/5455) 已提交修复（仅修复 turn 起始前的失败） |
| 🟠 中 | [#5444 Failed to ogin OpenAI via OAuth in Docker](https://github.com/HKUDS/nanobot/issues/5444) | 容器内 OAuth 回调链路异常，附有完整 traceback | ❌ 待跟进 |
| 🟠 中 | [#5457 fix(channels): scope dispatcher exception boundary](https://github.com/HKUDS/nanobot/pull/5457) | 一个出站消息异常会导致后台派发任务永久挂掉，必须重启进程才能恢复 | 🔧 PR 形式修复已提交 |
| 🟡 低 | [#5458 fix(matrix): interpolate error log context](https://github.com/HKUDS/nanobot/pull/5458) | Matrix 错误日志因 Loguru 占位符不匹配 (`%s` vs `{}`) 丢失关键诊断信息（文件名/房间/会话 ID） | ✅ |
| 🟡 低 | [#5425 socks:// proxy URL for OpenAI-compatible providers](https://github.com/HKUDS/nanobot/issues/5425) | 历史代理协议别名兼容性 | ✅ 已关闭 |
| 🟢 低 | [#5456 chore(deps): drop websocket-client, add certifi](https://github.com/HKUDS/nanobot/pull/5456) | 移除未被任何代码引用的 `websocket-client`，补全缺失的 `certifi` 声明（`conftest.py` 直接使用） | ✅ |

**稳定性提示：** 频道派发器的"单条消息杀死整条派发通道" (#5457) 是一个会被用户低概率撞上、撞上即不可恢复的隐形炸弹，建议维护者优先 review。

---

## 6. 功能请求与路线图信号

今日收到的实质需求：

1. **[#5459 Google Vertex AI for Claude 原生 provider](https://github.com/HKUDS/nanobot/issues/5459)** — 与现有 Anthropic/Azure/Bedrock 三足鼎立格局形成明显补全空白，路线图价值高。结合社区已有的 OpenAI-compatible 通道，预计将以 OpenAI 兼容形态快速实现。

2. **[#5453 feat(providers): add SenseNova (商汤日日新) provider](https://github.com/HKUDS/nanobot/pull/5453)** — 已附带 PR，支持 `sensenova-6.8-flash-lite`(多模态)、`deepseek-v4-flash`、`glm-5.2` 三个模型，**极有可能在下一版本合入**，扩展国产模型矩阵。

3. **[#5447 Paid security-scan MCP integration (ScanPay x402)](https://github.com/HKUDS/nanobot/issues/5447)** — 提议 Solana x402 微付费安全扫描 MCP 集成。属于商业合作提案，**已关闭**，短期内不会进入核心路线。

4. **MCP SDK v2 迁移**（#5179 + #5180 双草案）— 标记为 p1，是最显著的下一里程碑候选。

---

## 7. 用户反馈摘要

- **OAuth/Docker 用户痛点 (#5444)**：在容器内使用 OpenAI OAuth 时回调失败，错误信息出现在 OAuth 回调 URL 处但后续 token 交换阶段挂掉。这类问题对"开箱即用"的承诺是直接伤害。
- **代理兼容诉求 (#5425)**：用户合理期望 `socks://` 这种常见别名能正常工作，属于"我环境里这样写为什么炸了"的典型体验问题。
- **流式稳定性抱怨 (#5454)**：长对话场景下，OpenAI 偶发的 `server_error` 一旦撞上已经流出的内容，整轮作废。属于"沉默失败"类痛点，影响高级用户留存。
- **#5457 派发器静默死亡**：对运维侧影响大——表面看只是"消息不来了"，实际需要重启进程，是负面的"可观测性盲区"。
- **[#5452 TUI resume command](#5452)** 与 **#5240 WebUI 控件统一**：属于正面反馈驱动的细节增强，关闭即代表这些细节被认可为"值得默认提供"。

---

## 8. 待处理积压

请维护者留意以下长期未动的条目：

- **[#5180 chore(mcp): evaluate minimal SDK v2 migration](https://github.com/HKUDS/nanobot/pull/5180)** — 与 #5179 同主题的并行评估草案，已开 22 天，需要决定合并策略或关闭其一。
- **[#5179 Migrate MCP integration to SDK v2](https://github.com/HKUDS/nanobot/pull/5179)** — p1 优先级的核心升级，挂了 22 天，社区期待明确。
- **[#5387 feat(telegram): support reusable sticker replies](https://github.com/HKUDS/nanobot/pull/5387)** — 已开 8 天，长尾能力，建议尽快 review。
- **[#5379 fix(memory): preserve full consolidation input](https://github.com/HKUDS/nanobot/pull/5379)** — p2 memory 相关，rebase 后已更新但仍在排队。
- **[#5420 feat(webui): add turn observability and safe recovery](https://github.com/HKUDS/nanobot/pull/5420)** — 较大的 WebUI 增强 PR，等待 reviewer 视线。
- **[#5338 fix(mcp): preserve credentials when OAuth store read fails](https://github.com/HKUDS/nanobot/pull/5338)** — 标记 [conflict]，需要解决冲突后再合入。
- **[#5339 fix(webui): reject discarded temporary chat messages](https://github.com/HKUDS/nanobot/pull/5339)** — 临时聊天语义保护，安全性相关。

---

### 总结

NanoBot 今日处于"广泛修补 + 集中打磨"双线并行的良性状态。**0 版本发布** 但 **29 个 PR 流动** 反映出 main 分支处于活跃但尚未到打包窗口的状态。最值得后续跟踪的三件事：① MCP SDK v2 迁移两条草案的去留；② #5455/#5457/#5458 一批稳定性 PR 是否能形成一个 patch 版本快速放出；③ #5453 SenseNova 与 #5459 Vertex AI for Claude 两项 provider 扩展能否被一并纳入下一发布窗口。

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

<think>The user wants me to generate a daily report for PicoClaw project based on the GitHub data provided. Let me analyze the data carefully and create a comprehensive report.

Key observations:
1. No new releases today
2. 3 issues updated (all open, marked stale)
3. 9 PRs updated: 5 open, 4 closed/merged
4. Multiple dependabot PRs for dependency updates
5. One bug report about Web UI laggy input
6. Feature requests for dynamic model override and audio transcription
7. Several closed PRs including multi-agent framework, anthropic-messages protocol, skills install/refactor

Let me structure the report properly according to the 8 sections requested. I should use Chinese as the user wrote in Chinese.

Let me draft each section:

1. **今日速览** - Project status summary
2. **版本发布** - None today, skip
3. **项目进展** - Closed PRs
4. **社区热点** - Most active issues/PRs
5. **Bug 与稳定性** - Bug reports
6. **功能请求与路线图信号** - Feature requests
7. **用户反馈摘要** - User feedback from comments
8. **待处理积压** - Backlog issues

Let me write a thorough, professional report in Chinese.</think>

# PicoClaw 项目日报 · 2026-08-21

> 数据周期：2026-08-20 ~ 2026-08-21  
> 仓库：https://github.com/sipeed/picoclaw

---

## 一、今日速览

PicoClaw 今日整体处于**低强度维护期**，无新版本发布。过去 24 小时共有 3 条 Issue 活跃、9 条 PR 更新，PR 侧以 **Dependabot 自动依赖升级为主**（5/9），而人工合入的实质性工作集中于昨日（8 月 20 日）关闭的 3 条增强型 PR，包含多智能体协作框架基线、Anthropic 原生 Messages API 协议以及 skills 安装 CLI 的重构。所有活跃 Issue 均已被标记为 `stale`，社区反馈通道存在一定的响应积压，建议维护者关注 7 月份遗留的 Web UI 性能 Bug 反馈。

---

## 二、版本发布

⚠️ **今日无新版本发布。** 跳过本节。

---

## 三、项目进展

今日（实际合入时间为 2026-08-20）共有 **4 条 PR 关闭**，其中 3 条为实质性功能增强，1 条为构建修复：

| PR | 类型 | 价值评估 |
|---|---|---|
| [#714](https://github.com/sipeed/picoclaw/pull/714) skills 安装/重装 CLI 重构 | ⭐⭐⭐ 增强 | 新增 `ParseInstallSpec`、`InstallFromGitHubEx` 等解析与下载工具，支持 `repo@branch` 与可选子路径，生产环境通过 GitHub Trees API 获取完整目录；同时新增 `reinstall` 子命令（强制覆盖），已存在 skill 报错时附带 hint。**这是 skills 子系统的工程化里程碑**，将原本隐式的安装逻辑统一收敛到 `skillsCmd`。 |
| [#1158](https://github.com/sipeed/picoclaw/pull/1158) 新增 `anthropic-messages` 协议 | ⭐⭐⭐ 增强 | 引入原生 Anthropic Messages API（`/v1/messages`）协议前缀，关闭 [#269](https://github.com/sipeed/picoclaw/issues/269) 的长期诉求。**显著扩展了模型协议兼容性**，使依赖 Anthropic 格式代理/中转服务的用户可直接接入。 |
| [#423](https://github.com/sipeed/picoclaw/pull/423) 多智能体协作框架基线（WIP） | ⭐⭐⭐⭐ 战略 | 在已合并的 #213（provider protocol 重构）与 #131（模型回退链与多智能体路由）之上，新增共享上下文池（Blackboard）、智能体交接（handoff）与发现工具。**这是 PicoClaw 向多智能体方向演进的关键一步**，但仍为 WIP，需关注后续拆分合并节奏。 |
| [#3318](https://github.com/sipeed/picoclaw/pull/3318) 修复 Web 前端 `pnpm-lock.yaml` 损坏 | ⭐⭐ 修复 | `web/frontend/pnpm-lock.yaml` 中 `semver@7.8.5` 重复键导致 pnpm 拒读（`ERR_PNPM_BROKEN_LOCKFILE`），PR 中将其合并为单一映射，恢复 lockfile 可解析。属于**基础设施类修复**，确保新人/新人 CI 不会因锁文件损坏而阻塞。 |

📈 **整体推进评估**：项目在「**协议兼容性**」和「**多智能体框架**」两个长期方向上均有实质性落地，skills 子系统也走向工程化；但前端侧仍有未解决的性能 Bug（见第五节），反映 Web 端体验改进的优先级不足。

---

## 四、社区热点

按评论数与互动量排序的 Top 3 讨论：

1. 🥇 **[#3281 - Web UI chat input is very laggy when history has a little bit long](https://github.com/sipeed/picoclaw/issues/3281)**  
   - 👤 @xpader · 💬 6 评论 · 👍 1 · 📅 2026-07-21 创建，最近活跃 8 月 20 日  
   - **热点原因**：这是当前唯一获得持续讨论的 Issue，且直接关系到「日常使用的核心交互体验」——聊天输入框随历史增长出现明显卡顿（v0.3.1 / Go 1.25.11）。6 条评论表明已有复现交流但未见修复 PR，是用户感知最强的痛点。

2. 🥈 **[#3331 - Allow any model in /audio/transcriptions endpoint](https://github.com/sipeed/picoclaw/issues/3331)**  
   - 👤 @stanislavvv · 💬 1 评论 · 📅 2026-08-13  
   - 提议在 `model` 或 `voice` 配置中增加 `whisper-transcription: true` 标志，强制 ASR 走 whisper 路径，绕过仅匹配 `*-whisper-*` 的硬编码。**反映了用户对 ASR 模型灵活性的强烈诉求**。

3. 🥉 **[#3330 - Support dynamic model override in delegate/spawn/subagent tools](https://github.com/sipeed/picoclaw/issues/3330)**  
   - 👤 @v2up-32mb · 💬 1 评论 · 📅 2026-08-13  
   - 指出 `delegate/spawn/subagent` 三个工具在调用时无法指定模型，模型来源完全静态化（`config.json` 或 `defaultModel`），用户希望支持运行时动态切换。**与刚合并的 #423 多智能体框架关联紧密**，很可能是下一阶段工作的输入。

---

## 五、Bug 与稳定性

| 严重度 | Issue | 描述 | 状态 | 是否有 fix PR |
|---|---|---|---|---|
| 🟠 **中** | [#3281](https://github.com/sipeed/picoclaw/issues/3281) | Web UI 输入框随会话历史增长出现明显卡顿（v0.3.1） | OPEN · stale · 30+ 天 | ❌ 无 |
| ⚪ 低/构建 | [#3318（已关）](https://github.com/sipeed/picoclaw/pull/3318) | `pnpm-lock.yaml` 重复键导致前端无法安装依赖 | ✅ 已修复 | ✅ [#3318](https://github.com/sipeed/picoclaw/pull/3318) |

🔍 **分析**：
- **Web UI 卡顿**是当前唯一活跃的运行时 Bug，且发生于最常见的"长会话聊天"场景，影响面广。已持续 1 个月无修复，且标记 `stale`，**建议维护者优先排查**——大概率与消息列表未做虚拟滚动 / 重复渲染有关。
- 其他均无崩溃/回归类报告，整体运行时稳定性良好。

---

## 六、功能请求与路线图信号

| 请求 | 提出者 | 实现难度 | 与已有 PR 的契合度 | 路线图概率 |
|---|---|---|---|---|
| **[#3331](https://github.com/sipeed/picoclaw/issues/3331)** ASR 端点放开模型限制 | @stanislavvv | 🟢 低（增加配置项 + ASR 路由分支） | 与 #1158（Anthropic 协议）体现的"协议/模型解耦"思路一致 | ⭐⭐⭐ 高 |
| **[#3330](https://github.com/sipeed/picoclaw/issues/3330)** delegate/spawn/subagent 支持动态模型覆盖 | @v2up-32mb | 🟡 中（需重构工具调用签名 + 上下文透传） | 与刚合并的 #423（多智能体框架 WIP）几乎直接相关 | ⭐⭐⭐⭐ 极高 |

📌 **判断**：#3330 的需求与 #423 的方向几乎同源，**很可能成为下一阶段多智能体工作的首批合并项之一**；#3331 的修复成本低、收益明显，适合作为快速胜利（quick win）放入下一个小版本。

---

## 七、用户反馈摘要

基于 Issues 与 PR 评论提炼的真实声音：

- 😩 **【性能】"输入框打字都卡"** —— [#3281](https://github.com/sipeed/picoclaw/issues/3281) 6 条评论的核心共识：一旦某个会话历史达到一定长度，输入几乎无法顺畅输入，**严重影响日活使用**。  
- 🧩 **【灵活性】"不要把 ASR 绑死在 whisper 上"** —— [#3331](https://github.com/sipeed/picoclaw/issues/3331) 用户认为当前 `*-whisper-*` 硬编码匹配太老、太慢，希望通过配置开关强制走 whisper 路径。  
- 🤖 **【控制力】"子智能体能不能让我自己选模型？"** —— [#3330](https://github.com/sipeed/picoclaw/issues/3330) 用户反映 `delegate/spawn/subagent` 无法在调用时指定模型，模型来源"被锁死"，希望增加运行时灵活性。  
- 🔧 **【构建/体验】"pnpm-lock 文件坏掉了，新人没法跑前端"** —— [#3318](https://github.com/sipeed/picoclaw/pull/3318) 用户踩到 `ERR_PNPM_BROKEN_LOCKFILE` 后紧急修复，已合入，**正面反馈**。  
- ✅ **【协议扩展】"终于能用原生 Anthropic 协议了"** —— [#1158](https://github.com/sipeed/picoclaw/pull/1158) 关掉了 269 号长期 Issue，**预期会收到社区正向反应**。

---

## 八、待处理积压（⚠️ 提醒维护者）

按"未响应时长 × 重要度"排序：

| 优先级 | 条目 | 闲置天数 | 风险点 |
|---|---|---|---|
| 🔴 **P0** | [#3281 Web UI 输入卡顿](https://github.com/sipeed/picoclaw/issues/3281) | 30 天 | 影响所有 Web UI 长会话用户，已 `stale`，**无修复 PR**，是最该被维护者认领的项 |
| 🟠 P1 | [#3331 ASR 模型限制](https://github.com/sipeed/picoclaw/issues/3331) | 8 天 | 实现成本低、收益明显，建议作为 quick win |
| 🟠 P1 | [#3330 delegate 模型覆盖](https://github.com/sipeed/picoclaw/issues/3330) | 8 天 | 与 #423 多智能体框架方向同源，**强烈建议纳入下一阶段规划** |
| 🟡 P2 | 5 条 Dependabot 依赖升级 PR（[#3336](https://github.com/sipeed/picoclaw/pull/3336)、[#3335](https://github.com/sipeed/picoclaw/pull/3335)、[#3334](https://github.com/sipeed/picoclaw/pull/3334)、[#3333](https://github.com/sipeed/picoclaw/pull/3333)、[#3332](https://github.com/sipeed/picoclaw/pull/3332)） | 8 天 | 均含 `stale` 标签；包含 `aws-sdk-go-v2`、`anthropic-sdk-go`、`mautrix` 等关键依赖版本滞后，建议批量合并以降低供应链风险 |

📊 **健康度评分**：⭐⭐⭐☆☆（3/5）  
- ✅ 优点：实质性功能合入节奏稳定（协议扩展、多智能体框架、skills 工程化）；无构建/回归失败。  
- ⚠️ 风险点：用户感知最强的 Web 性能 Bug 超 30 天未修复；Dependabot 积压 5 条；活跃 Issue 均已 `stale`，反映维护者对社区反馈的响应节奏偏慢。

---

*报告生成时间：2026-08-21 · 数据源：GitHub REST API (sipeed/picoclaw)*

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

<think>Let me analyze the GitHub data for IronClaw (nearai/ironclaw) project for the daily report on 2026-08-21.

Key observations from the data:

**Activity Overview:**
- 21 Issues updated (17 new/active, 4 closed)
- 34 PRs updated (20 pending, 14 merged/closed)
- 0 new releases

**Most active Issues (by comments):**
- #7732 [Epic, v1.4.0] Persistent per-user sandbox with iron-proxy - 8 comments (top hot)
- #7770 [Epic] Hook the agent lifecycle - 3 comments
- #7038 [Epic] Design System Phase 1 - 2 comments
- #7042 [Phase 2: DESIGN.md governance] - 2 comments
- #7193 [CLOSED] run-now across trigger domain - 2 comments

**Closed Issues:**
- #7193 - run-now feature (closed)
- #7733 - Deprecated Design System epic (closed/superseded)
- #7308 - OAuth bug for Attio (closed)
- #7755 - Duplicate turn vocabulary types (closed)

**Closed/Merged PRs (14):**
- #7786 - OpenAI suggestion generation fix
- #7738 - Slack per-field help text
- #7763 - subagent docs consolidation
- #7729 - run-now feature
- #7777 - clippy 1.98 lint cascade fix
- #7778 - Rust 1.98 clippy migration
- #7304 - OAuth above gateway token sign-in

**Important themes:**
1. Design System overhaul (5-phase epic series: #7038, #7781, #7782, #7782, #7042)
2. v1.4.0 plans (sandbox, hooks, design system)
3. Hook lifecycle extensions (#7770)
4. WebUI refactoring
5. CI fix for Rust 1.98 clippy migration

**Key Bug Reports:**
- #7783 - LLM timeout policy issue (medium risk)
- #7767 - Timezone-robust tests
- #7776 - memory.write concurrency issue
- #7771 - Daily failure taxonomy

**Long-standing PRs:**
- #6458 - docs/reborn Tier B self-repair (created 2026-07-22, still open)

Let me now craft a comprehensive daily report in Chinese.</think>

# IronClaw 项目日报

**报告日期：2026-08-21**
**项目仓库：[nearai/ironclaw](https://github.com/nearai/ironclaw)**

---

## 1. 今日速览

IronClaw 仓库今日继续保持高强度迭代节奏，过去 24 小时共产生 **21 条 Issue 更新** 与 **34 条 PR 更新**，合并/关闭率约 41%（14/34 PRs），整体处于"密集重构 + 多 Epic 并行"阶段。今日工作重心集中在 **三条主线**：① WebUI 设计系统五阶段 Epic 的拆分与重构（#7038/#7781/#7782/#7042 重新切片）；② v1.4.0 立项的两大 Epic（persistent sandbox #7732 与 agent lifecycle hooks #7770）持续推进；③ Rust 1.98 工具链升级带来的 Clippy 雪崩已通过 #7777/#7778 修复，CI 恢复绿色。社区讨论热度与代码活跃度均处于较高水位，项目健康度良好。

---

## 2. 版本发布

**今日无新版本发布。** 当前版本节奏以 v1.4.0 Epic 拆分与 storybook/desgin-system 推进为主，月度发版未到节点。

---

## 3. 项目进展

今日合并/关闭的 14 条 PR 中，有数项对项目演进具备结构意义：

| PR | 主题 | 影响 |
|---|---|---|
| [#7777](https://github.com/nearai/ironclaw/pull/7777) | **修复 Clippy 1.98 lint 级联阻塞** | 紧急修复：解除 `main` 在 `Check all-target lints` 的红灯（[run 32397319267](https://github.com/nearai/ironclaw/actions/runs/32397319267)），恢复合并队列 |
| [#7778](https://github.com/nearai/ironclaw/pull/7778) | **Rust 1.98 Clippy 迁移** | 一次性清理 `chunks_exact_to_isolate` 等 4 个新 lint，使全 workspace 在 `+1.98.0` 下零警告通过 |
| [#7786](https://github.com/nearai/ironclaw/pull/7786) | **assistant 建议生成修复** | 修复 OpenAI 模型 `uniqueItems` 破坏建议生成的 SEV 故障，可独立 cherry-pick |
| [#7729](https://github.com/nearai/ironclaw/pull/7729) | **automation run-now 全链路打通** | 闭环 Issue #7193：手动触发已可在模型能力、assistant 产品面、WebUI 与本地化界面全部触达 |
| [#7763](https://github.com/nearai/ironclaw/pull/7763) | **subagent 文档合并** | 把 7 份、7000+ 行互相矛盾的文档压成 1 份 canonical README（净减 9,713 行），降低后续维护成本 |
| [#7738](https://github.com/nearai/ironclaw/pull/7738) | **Slack 每个字段提供帮助文本** | 增强运维配置可读性，顺延 #7550 的 "hint" 接缝 |
| [#7304](https://github.com/nearai/ironclaw/pull/7304) | **OAuth 登录按钮移至 Gateway Token 之上** | 小幅 UX 优化，符合通用登录心智模型 |

**整体评估**：今日 PR 关闭数量真实可观，且多以"清理 + 修复 + 文档重整"为主，没有引入新方向，但明显为 v1.4.0 的 Epic 落地铺平了工程地基。

---

## 4. 社区热点

按评论数与关注度排序：

| 排名 | 编号 | 标题 | 评论 | 观察 |
|---|---|---|---|---|
| 1 | [#7732](https://github.com/nearai/ironclaw/issues/7732) | Persistent per-user sandbox with iron-proxy | 8 | **今日最热**。v1.4.0 头号 Epic，重新思考 sandbox 边界：当前 Docker 容器"一命令一销毁"无法满足"持久用户计算机"愿景，详见"功能请求"章节 |
| 2 | [#7770](https://github.com/nearai/ironclaw/issues/7770) | Hook agent lifecycle（after-turn / before-turn / compaction / tool-result） | 3 | 第二大 Epic，强调"when X happens, do Y" 通过 hook 注册而非改核心引擎 |
| 3 | [#7038](https://github.com/nearai/ironclaw/issues/7038) | Design System Phase 1 — Storybook 集成 | 2 | 经历拆分后已演进为五阶段项目，PR #7750 正在进行 |
| 4 | [#7042](https://github.com/nearai/ironclaw/issues/7042) | Design System Phase 2 — DESIGN.md 治理 | 2 | 与 #7781 同步推进 |
| 5 | [#7193](https://github.com/nearai/ironclaw/issues/7193) | manual fire run-now（已关闭） | 2 | 关闭后由 PR #7729 落地 |

**社区诉求分析**：当前社区关注的三大方向——**沙箱安全边界**、**Agent 生命周期可扩展性**、**前端设计系统现代化**——三者都是平台级长期投入，而非短期补丁，反映社区希望 IronClaw 走向"可信赖、可扩展、可美化"的成熟产品。

---

## 5. Bug 与稳定性

| 严重度 | 编号 | 标题 | 状态 | 备注 |
|---|---|---|---|---|
| 🟠 中 | [#7783](https://github.com/nearai/ironclaw/issues/7783) | LLM timeout policy: 结构化输出终结无法测量 TTFT，重试预算装不下 deadline | 报告于 2026-08-21 | **LLM 关键路径**：非流式 HTTP 客户端 60s 超时 + 75s 终结 deadline，单次传输停顿会毁掉整个 run。暂未关联 fix PR |
| 🟡 中 | [#7776](https://github.com/nearai/ironclaw/issues/7776) | `memory.write` 缺少 expected-version 模式，全文档重写静默覆盖并发写 | 报告于 2026-08-20 | CAS 仅防"撕裂写"，无法防"读-改-写"竞态；建议新增 `expected_version` 字段 |
| 🟡 中 | [#7308](https://github.com/nearai/ironclaw/issues/7308) | Hosted MCP OAuth（Attio）注册失败且无法修正 | **已关闭** | 需查看关闭原因；属于 extension/OAuth 生态 |
| 🟢 低 | [#7767](https://github.com/nearai/ironclaw/issues/7767) | Automation presenter 测试在 `Asia/Shanghai` 时区下失败 | 报告于 2026-08-20 | 测试健壮性问题，影响 CI 但不影响生产 |
| 🟢 低 | [#7769](https://github.com/nearai/ironclaw/issues/7769) | Configure 仅处理 Hosted MCP 鉴权选择 blocker，其他 blocker 被丢弃 | 报告于 2026-08-20 | 配置流缺陷 |

**关键观察**：#7783 是今日最值得关注的"可靠性"问题——**LLM 请求的最终化阶段在失败重试预算内无法完成一次完整调用**，直接破坏兜底语义，需要主维护者尽快介入。

---

## 6. 功能请求与路线图信号

**已纳入 v1.4.0 路线图（Epic 级别）**：

1. **Persistent per-user sandbox & iron-proxy** — [#7732](https://github.com/nearai/ironclaw/issues/7732)（添加 [v1.4.0] 标签）
   - Step 2 已落地为 PR [#7779](https://github.com/nearai/ironclaw/pull/7779)（用户沙箱出口走 per-user `iron-proxy` sidecar）
   - 配套 sandbox 工作 PR [#7711](https://github.com/nearai/ironclaw/pull/7711)（typed tool response + guest migration）

2. **Agent lifecycle hooks（分阶段）** — [#7770](https://github.com/nearai/ironclaw/issues/7770)
   - 阶段 1 已落地为 PR [#7765](https://github.com/nearai/ironclaw/pull/7765)（`AfterTurn` + memory 策展）
   - 衍生问题 [#7780](https://github.com/nearai/ironclaw/issues/7780)（`AfterTurn` 跳过调度器侧失败终结化）和 [#7775](https://github.com/nearai/ironclaw/issues/7775)（unbound run 应跳过 gating capability）

3. **WebUI Design System** 五阶段：
   - Phase 1 Storybook 集成 — PR [#7750](https://github.com/nearai/ironclaw/pull/7750)（OPEN）
   - Phases 2–3 DESIGN.md 治理 + theme reskin — [#7781](https://github.com/nearai/ironclaw/issues/7781)（旧 #7733 已废弃）
   - Phases 4–5 agentic 交互组件 — [#7782](https://github.com/nearai/ironclaw/issues/7782)
   - 配套设计文档 PR [#7257](https://github.com/nearai/ironclaw/pull/7257)

**预计合并进入下版本**：
- **run-now 手动触发**（#7193 / PR #7729）✅ 今日已关闭
- **notifications 中心通用化**——PR [#7699](https://github.com/nearai/ironclaw/pull/7699) 与 [#7698](https://github.com/nearai/ironclaw/pull/7698) 提供可操作的 run gate 通知 + 泛化通知中心
- **Telegram 机器人配对与个人设备链接分离** — PR [#7766](https://github.com/nearai/ironclaw/pull/7766)
- **OMP 编码工具重构**（read/write/edit/glob/grep/bash 六个标准化裸名）— PR [#7491](https://github.com/nearai/ironclaw/pull/7491)

---

## 7. 用户反馈摘要

从 Issues 评论与上下文可提炼的真实痛点：

- **"沙箱无法持久"是 v1.4.0 立项的核心驱动**（#7732）：当前 Docker 一命令一销毁，违背"用户长期计算机"的设计初衷，且 `/workspace` 持久化粒度仅到 `(tenant, user)` 之外，损害可移植性。
- **"hook 注册代替核心引擎改动"是社区诉求**（#7770）：扩展方希望把"X 发生后做 Y"做成注册而非 fork，避免核心代码被泛化能力侵蚀。
- **"并发写静默覆盖"是 memory 系统的隐藏陷阱**（#7776）：#7765 的 review 过程发现"CAS 让这变安全"只对一半，提示项目对**外部 PR 评审**的依赖度仍较高。
- **"OpenAI 严格结构化输出 + `uniqueItems` 互不兼容"**（#7786）——已通过 PR 修复，但说明多 provider 兼容仍需逐个 provider 调校。
- **"WebUI 登录项视觉顺序需要跟通用习惯走"**（#7304）——OAuth 按钮先于 Gateway Token 已修复，体现社区对设计标准化的重视。
- **"每日失败分类"工单**（#7771）——officeqa 套件 58 个 non-pass 中绝大多数是 DeepSeek-V4-Flash 的模型质量问题，提示**第三方模型选型**对 IronClaw 评价有显著影响。

---

## 8. 待处理积压

需要在接下来 24–72 小时重点关注的"长尾"issue / PR：

| 编号 | 类型 | 标题 | 积压原因 | 建议 |
|---|---|---|---|---|
| [#6458](https://github.com/nearai/ironclaw/pull/6458) | PR OPEN | docs(reborn): reconcile Tier B self-repair with lease recovery | 创建于 **2026-07-22**，已开放近一个月 | 文档类 PR 风险低，建议维护者做一次内容审阅尽快合并 |
| [#7711](https://github.com/nearai/ironclaw/pull/7711) | PR OPEN | feat(wasm): typed tool response, guest migration, dispatch-error cleanup | XL 规模、supersedes #7703 | 关键能力-normalization 栈收尾，建议指定 owner |
| [#7750](https://github.com/nearai/ironclaw/pull/7750) | PR OPEN | chore(webui): integrate Storybook + design-system catalog | 取代 #7039，需在 main 上重新生产 | Phase 1 关键里程碑，需 WebUI reviewer 优先 review |
| [#7257](https://github.com/nearai/ironclaw/pull/7257) | PR OPEN | docs(design-system): proposal, plan & checklist | 文档级，被多个 Epic 并行引用 | 与 #7750 同步推进可形成闭环 |
| [#7549 (近邻)](https://github.com/nearai/ironclaw/pull/7749) | PR OPEN | benchmark qa-automation-preview 触发 PR | 评论完成后即关闭 | 短期 follow-up |

**总结**：除 #6458 之外，整体 issue/PR 流转较快（多数 1–3 天内即有关闭动作），维护者响应节奏健康。**核心风险点**在 #7783（LLM 终结超时）暂无 fix PR，建议设置高优先级。

---

> 📌 **整体健康度评分（5 分制）**：⭐⭐⭐⭐☆
> 
> 优点：Epic 拆解清晰、文档与代码同步、社区参与度高、CI 故障当日修复。
> 风险：LLM 终结超时（#7783）待 owner、个别 XL PR 积压、跨时区测试稳定度需统一。

*报告基于 GitHub 公开数据自动生成。如需更深入某一主题（设计系统 / 沙箱 / Hooks）请告知。*

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

<think>The user wants me to generate a project daily report for LobsterAI based on GitHub data from 2026-08-21. Let me analyze the data carefully.

Key observations:
1. 2 Issues updated in past 24 hours, both are [stale] tagged
2. 7 PRs updated, 6 closed, 1 still open
3. No new releases
4. All issues and PRs have 0 likes/reactions
5. All PRs are marked as [stale] except #1547 which is the only OPEN one
6. Comments are minimal (1-2 per issue, undefined for PRs)
7. All activity dates are from 2026-04-07 to 2026-04-08 originally, with updates on 2026-08-20

Let me organize the report properly. I should note that all these issues/PRs are tagged [stale], which means they haven't been updated for a long time and have been auto-closed or are about to be closed. The dates show creation in April 2026, but updates on August 20, 2026 - this suggests stale bot activity.

Let me structure each section:

1. **今日速览**: The project appears relatively quiet - all PRs except one have been closed (likely due to staleness), no new releases, all items are marked stale. Activity is low.

2. **版本发布**: None - omit or note no releases.

3. **项目进展**: 6 PRs were closed. Some are genuine fixes (1545, 1546, 1555, 1557, 1560) but they were closed as stale, meaning not merged. Only PR #1547 remains open.

4. **社区热点**: Limited engagement - 0 reactions on all items, minimal comments.

5. **Bug与稳定性**: Several bug fixes mentioned - #1545 (skill sync), #1547 (scheduled task notification), #1555 (mac build), #1560 (agent switch). Note these are closed due to inactivity, not necessarily fixed.

6. **功能请求与路线图**: #1552 (Markdown preview feature request) had associated PR #1553 which got closed as stale.

7. **用户反馈**: Limited - mostly bug reports and feature requests.

8. **待处理积压**: PR #1547 is the only open PR, and several issues are stale.

I should be objective and data-driven, noting that the [stale] tags indicate automation activity rather than active maintenance. The report should highlight the lack of engagement (0 likes, minimal comments) and the project potentially being in maintenance mode.

Let me draft this in Chinese as the request was in Chinese.</think>

# LobsterAI 项目动态日报

**日期**：2026-08-21
**数据来源**：GitHub 仓库 `netease-youdao/LobsterAI`
**分析维度**：Issues、Pull Requests、Releases、社区互动

---

## 一、今日速览

LobsterAI 今日整体处于**低活跃度维护期**。过去 24 小时内共触发 2 条 Issue 更新与 7 条 PR 更新，但**所有条目均带有 `[stale]` 自动标记**，且创建时间集中在 2026-04，距今已停滞约 4 个月。本轮更新主要为 GitHub Stale Bot 自动触发（自动关闭或刷新时间戳），而非真实的人为活跃。**当日 0 个新版本发布**，社区互动几乎为零（所有 Issues/PR 👍 均为 0，PR 评论均显示 `undefined`）。项目活跃度评级：**低迷**。

---

## 二、版本发布

⚠️ **今日无新版本发布**。

截至 2026-08-21，LobsterAI 在 GitHub Releases 频道无任何版本产出。建议关注者通过源码自行构建或等待下次正式发版。

---

## 三、项目进展

今日 **6 条 PR 被关闭，1 条仍保持 OPEN**。需特别说明的是：被关闭的 PR 均为 `[stale]` 状态下的自动关闭，**并非被合并或被人工拒绝**，实际代码改动尚未进入主分支。

| PR | 标题 | 状态 | 实际进展 |
|---|---|---|---|
| [#1545](https://github.com/netease-youdao/LobsterAI/pull/1545) | fix(agent): 同步当前 Agent 技能更新 | CLOSED [stale] | 未合并 |
| [#1546](https://github.com/netease-youdao/LobsterAI/pull/1546) | feat(engine-overlay): 启动超时增加取消/查看日志按钮 | CLOSED [stale] | 未合并 |
| [#1553](https://github.com/netease-youdao/LobsterAI/pull/1553) | feat(cowork): Write 工具文件卡片及分屏预览面板 | CLOSED [stale] | 未合并 |
| [#1555](https://github.com/netease-youdao/LobsterAI/pull/1555) | fix: macOS x64 打包失败（sha256sum 兼容） | CLOSED [stale] | 未合并 |
| [#1557](https://github.com/netease-youdao/LobsterAI/pull/1557) | feat(settings): 设置面板侧栏搜索筛选 | CLOSED [stale] | 未合并 |
| [#1560](https://github.com/netease-youdao/LobsterAI/pull/1560) | fix: Agent 编辑后无法切回聊天界面 | CLOSED [stale] | 未合并 |
| [#1547](https://github.com/netease-youdao/LobsterAI/pull/1547) | fix(scheduledTask): 定时任务通知渠道无法改回"不通知" | **OPEN** | 待人工 review |

**评估**：今日**项目净进展为零**。虽然 6 个 PR 涵盖了有价值的修复与功能（Agent 技能同步、引擎超时 UX、Write 文件卡片、macOS 构建、设置搜索、Agent 切换），但由于缺乏维护者响应与合并动作，这些改进均处于"已废弃但未实现"的状态。这是项目健康度的**负面信号**。

---

## 四、社区热点

由于所有条目的 👍 数均为 0、评论极少，本日**无真正意义上的热点议题**。

按相对活跃度排序（以评论数为唯一参考）：

1. **[#1556](https://github.com/netease-youdao/LobsterAI/issues/1556)** — IM 机器人配置指南 404（2 条评论）
   - 用户 @darkSheep404 报告官方文档链接 `https://lobsterai.youdao.com/LobsterAI-IM机器人配置指南.md` 返回 404。该问题是**官方文档托管失效**，直接影响新用户接入门槛。

2. **[#1552](https://github.com/netease-youdao/LobsterAI/issues/1552)** — AI 产物 Markdown 预览及文件卡片支持（1 条评论）
   - 用户 @noransu 提出：Agent 通过 Write 工具创建文件后无法在应用内直接预览，需手动跳转或让 Agent 复读内容，写作与文档生成场景体验欠佳。该需求曾配套 PR [#1553](https://github.com/netease-youdao/LobsterAI/pull/1553) 实现文件卡片 + 分屏预览面板，但 PR 已因 stale 被关闭。

**诉求分析**：热点集中在**两类用户痛点**——一是**文档可用性**（用户因 404 失去接入路径），二是**写作类工作流的完整性**（生成内容无法就地预览）。两者均是影响产品口碑与留存的关键问题。

---

## 五、Bug 与稳定性

按严重程度排列（所有 PR 均未合并，标注"未修复"）：

| 严重度 | 问题 | 链接 | 是否有可用 PR | 实际状态 |
|---|---|---|---|---|
| 🔴 高 | IM 配置文档 404，新用户无法完成接入 | [#1556](https://github.com/netease-youdao/LobsterAI/issues/1556) | ❌ 无 | 未修复 |
| 🟠 中 | 定时任务通知渠道选择后无法改回"不通知"（数据/逻辑 bug） | [#1547](https://github.com/netease-youdao/LobsterAI/pull/1547) | ✅ 有（OPEN） | 待合并 |
| 🟠 中 | Agent 编辑后点击原 Agent 无法切回聊天界面 | [#1560](https://github.com/netease-youdao/LobsterAI/pull/1560) | ⚠️ 已关闭 | **未修复**（PR stale 关闭） |
| 🟡 中 | 当前 Agent 修改技能后技能徽章不立即刷新 | [#1545](https://github.com/netease-youdao/LobsterAI/pull/1545) | ⚠️ 已关闭 | **未修复** |
| 🟡 中 | macOS x64 打包失败（sha256sum 不兼容） | [#1555](https://github.com/netease-youdao/LobsterAI/pull/1555) | ⚠️ 已关闭 | **未修复**（影响 Mac x64 用户） |
| 🟢 低 | 引擎启动卡住无逃生出口（需等 5 分钟硬超时） | [#1546](https://github.com/netease-youdao/LobsterAI/pull/1546) | ⚠️ 已关闭 | **未修复** |

**关键提示**：表中标"⚠️ 已关闭"的 4 个 PR，其代码修改理论上**仍然可用**（分支未删除），社区用户可自行 cherry-pick，但官方维护通道已断。

---

## 六、功能请求与路线图信号

仅一条新功能请求（[#1552](https://github.com/netease-youdao/LobsterAI/issues/1552)），但已有关联实现。

| 需求 | 关联 PR | 纳入下一版本可能性 |
|---|---|---|
| Agent 文件输出支持 Markdown 预览与文件卡片 | [#1553](https://github.com/netease-youdao/LobsterAI/pull/1553) | ⚠️ 中等偏低。实现完备（含 FileCard、FilePreviewPanel、iframe 沙箱、代码高亮、SVG 内联、图片展示），但 PR 已 stale 关闭，需贡献者或维护者重新开启 |
| 设置面板侧栏搜索筛选 | [#1557](https://github.com/netease-youdao/LobsterAI/pull/1557) | ⚠️ 中等。改动局部、风险低、易合并，但目前无人 review |
| 引擎启动遮罩增加取消/查看日志按钮 | [#1546](https://github.com/netease-youdao/LobsterAI/pull/1546) | ⚠️ 中等。明显提升 UX，但同样 stale 关闭 |

**信号解读**：功能层面**不缺乏候选**，缺乏的是**合并与发版流程**。若维护者能集中处理一次历史积压 PR，可在不增加新工作量的前提下显著推进项目。

---

## 七、用户反馈摘要

由于 PR 评论数据为空（`undefined`），仅能从 Issue 摘要提炼：

- **痛点 1：文档断链**（[#1556](https://github.com/netease-youdao/LobsterAI/issues/1556)）  
  官方配置指南 URL 已失效。新用户在配置 IM 机器人环节遭遇 404，**首次使用即遭遇障碍**，属于"致命体验缺口"。

- **痛点 2：写作场景割裂**（[#1552](https://github.com/netease-youdao/LobsterAI/issues/1552)）  
  用户使用 Agent 生成 Markdown/HTML/代码文件后，**无法在应用内就地预览**，被迫让 Agent 把全文贴回对话或切出应用。该痛点表明产品在"内容创作工作流"上仍未闭环。

- **痛点 3（隐性）：维护响应缺失**  
  6 个 stale PR 中包含 4 个明确的 bug 修复与 2 个有价值的 UX 改进，**作者主动贡献后未被任何维护者响应**。这会显著降低社区贡献者的积极性，形成"提了没人理 → 下次不来了"的负反馈循环。

- **满意度方面**：  
  当前数据中**未见任何明确表达满意或推荐的用户反馈**，Issues 列表中也没有 close-and-resolved 的案例可以佐证产品口碑。

---

## 八、待处理积压

以下条目长期未响应，建议维护者优先关注：

| 类别 | 条目 | 停滞时长 | 优先级建议 |
|---|---|---|---|
| 🔴 P0 | [#1556](https://github.com/netease-youdao/LobsterAI/issues/1556) IM 配置文档 404 | ~4 个月 | **立即处理**：恢复文档链接或更新 Issue 中的正确路径 |
| 🔴 P0 | [#1547](https://github.com/netease-youdao/LobsterAI/pull/1547) 定时任务通知渠道 bug（仅 OPEN PR） | ~4 个月 | **立即处理**：影响定时任务正确性，数据逻辑不一致 |
| 🟠 P1 | [#1545](https://github.com/netease-youdao/LobsterAI/pull/1545)、[#1546](https://github.com/netease-youdao/LobsterAI/pull/1546)、[#1555](https://github.com/netease-youdao/LobsterAI/pull/1555)、[#1556](https://github.com/netease-youdao/LobsterAI/issues/1556)、[#1557](https://github.com/netease-youdao/LobsterAI/pull/1557)、[#1560](https://github.com/netease-youdao/LobsterAI/pull/1560) 一批 stale PR | ~4 个月 | **集中清理**：重新开启有价值的 PR 并合并，避免贡献流失 |
| 🟡 P2 | 社区 Stale Bot 策略可能过于激进——所有 4 个月未更新的 PR 都被自动关闭，但 LobsterAI 维护节奏本身也较慢。建议调整 `stale` 配置（如延长至 6-12 个月），或对带有 `help wanted` / `good first issue` 标签的 PR 豁免。 |

---

## 项目健康度总结

| 维度 | 评分 | 说明 |
|---|---|---|
| 代码合并活跃度 | ⭐☆☆☆☆ | 6 PR 关闭 0 合并，1 PR 仍 OPEN |
| 社区互动 | ⭐☆☆☆☆ | 全部 0 👍，PR 评论缺失 |
| Issue 响应 | ⭐☆☆☆☆ | 0 条 Issue 被关闭或回应 |
| 文档完整性 | ⭐⭐☆☆☆ | 官方文档存在 404 断链 |
| 发版节奏 | ⭐☆☆☆☆ | 今日 0 发布 |
| 贡献者活跃度 | ⭐⭐☆☆☆ | 仍有 6 位独立贡献者提交 PR，但均未获得 review |

**总评：⚠️ 项目处于维护停滞边缘**。仓库代码层面并不"死"——仍有功能完整、设计合理的 PR 待合并——但**维护者侧的沉默已使贡献通道事实上失效**。建议项目维护方进行一次集中性的 issue triage 与 PR 评审，以恢复社区信心。

---

*日报生成时间：2026-08-21 · 数据口径：过去 24 小时 GitHub 事件流*

</details>

<details>
<summary><strong>QwenPaw</strong> — <a href="https://github.com/agentscope-ai/QwenPaw">agentscope-ai/QwenPaw</a></summary>

<think>The user wants me to generate a project daily report for QwenPaw based on GitHub data. Let me analyze the data carefully and create a comprehensive report in Chinese.

Let me organize the data:

**Overall Stats:**
- 28 Issues (15 new/active, 13 closed)
- 50 PRs (22 pending, 28 merged/closed)
- 1 new release: v2.1.1-beta.1

**Latest Release:**
- v2.1.1-beta.1
  - feat(console): improve editor tab overflow navigation (#6983)
  - fix(providers): lower rate limiter init log level (#6988)
  - chore: update release notes

**Top Issues by comments:**
1. #6921 (OPEN) - 经常在"Now 2.1, 3.1, 3.2..."类似信息输出后无提示就停止了 - 10 comments
2. #7102 (CLOSED) - Freeze more than 10 minutes - 9 comments
3. #6643 (CLOSED) - 任务的产出物不要都堆积在media目录下 - 6 comments
4. #6436 (OPEN) - Automatic Model Routing - 4 comments
5. #6826 (CLOSED) - 对话中助手消息结束时间显示异常 - 4 comments
6. #6932 (OPEN) - 网络短暂中断并恢复后无法自动恢复 - 3 comments
7. #7110 (CLOSED) - 对话上下文中包含无法下载的图片链接 - 3 comments
8. #7013 (OPEN) - 为Chat增加统一工具面板、Web服务预览与交互式终端 - 3 comments
9. #7156 (OPEN) - embedding health check超时 - 2 comments
10. #7162 (CLOSED) - 流式输出中途httpx.ReadError - 2 comments
11. #6453 (CLOSED) - 文件名中文显示 - 2 comments
12. #7090 (CLOSED) - 技能池导入搜索/过滤 - 2 comments

**Important PRs (closed/merged or significant):**
- #7186 [CLOSED] datapaw PyPI runtime path
- #6947 [CLOSED] fix(scroll): drop orphaned tool messages
- #7119 [OPEN] fix(security): create the master key file with owner-only permissions
- #7061 [OPEN] fix(video): deliver tool-result videos on OpenAI Responses API
- #7175 [OPEN] fix(console): restore complete free model listings
- #7183 [OPEN] feat(skills): add workspace-scoped always-on loading
- #7167 [OPEN] feat(creator): dialogue-gated video dispatch
- #7133 [OPEN] feat(memory): update reme 0.4.1.8
- #7112 [OPEN] feat(hub): add self-hosted multi-user Hub
- #7080 [OPEN] Add optional PowerContext pluggable long-term memory backend
- #7161 [CLOSED] feat(console): add artifacts to assistant response card
- #7176 [OPEN] perf(console): keep long chat sessions responsive
- #7178 [OPEN] test(browser): bound sibling-session overlap span
- #7174 [CLOSED] perf(drivers): initialize persistent drivers concurrently
- #7163 [OPEN] feat: refine session thinking and model management
- #6880 [CLOSED] feat(console): unify apps, plugins, and skills in the marketplace
- #6371 [CLOSED] fix(file-handling): continue fallback after downloader timeout
- #7067 [OPEN] fix(console): switch agent from /chat/:agentId/:sessionId
- #7169 [OPEN] fix(qq): isolate conversation sessions

**Bug Issues:**
- #6921 - 任务执行中无故停止
- #7102 - Freeze 超过10分钟
- #6826 - 对话中助手消息结束时间显示异常
- #6932 - 网络短暂中断并恢复后无法自动恢复
- #7110 - 对话上下文中包含无法下载的图片链接
- #7156 - embedding health check 超时
- #7162 - httpx.ReadError 偶发错误
- #7118 - envs.json corrupt swallowed silently
- #7060 - view_video inline-media cap hardcoded
- #7168 - history.db被recall_history expand撑爆到7.6G

**Feature Requests:**
- #6436 - Automatic Model Routing
- #6643 - 产出物按任务分目录
- #7013 - 工具面板/Web服务预览/交互式终端
- #6453 - 中文文件名保持中文
- #7090 - 技能池搜索/过滤
- #7185 - OAuth文档
- #7184 - Agent-level cross-session recall toggle for Scroll
- #7182 - workspace-scoped always-on Skills
- #7181 - Support Qwen_Code as third-party harness
- #6974 - VPN支持
- #7179 - 智能体切换优化
- #6734 - "新建聊天"改称"新任务"
- #7177 - 优化platform首页
- #7159 - QQ群定时任务
- #7158 - 钉钉群聊上下文模式

**Long-standing issues (still open):**
- #6436 (Jul 24)
- #6921 (Aug 12)
- #6932 (Aug 12)
- #7013 (Aug 14)
- #7156 (Aug 20)

Now let me write the report. I need to be objective, data-driven, and professional.</think>

# QwenPaw 项目日报 · 2026-08-21

> 数据来源：[github.com/agentscope-ai/QwenPaw](https://github.com/agentscope-ai/QwenPaw)
> 数据范围：2026-08-20 ~ 2026-08-21

---

## 1. 今日速览

QwenPaw 项目今日整体活跃度处于**中高水平**：过去 24 小时共处理 **28 条 Issue**（15 条活跃 / 13 条关闭）和 **50 条 PR**（22 条待合并 / 28 条已合并或关闭），并发布 **1 个 beta 版本（v2.1.1-beta.1）**。社区讨论热度保持稳定，多个核心议题（如 Scroll 上下文重建、记忆系统 ReMe、Hub 多用户控制平面）正在被密集推进。今日关闭率约为 46%，合并/关闭率约为 56%，整体响应效率良好，但仍存在少量长期未关闭的重要 Bug。

---

## 2. 版本发布

### v2.1.1-beta.1（2026-08-20 发布）

🔗 [Release 页面](https://github.com/agentscope-ai/QwenPaw/releases/tag/v2.1.1-beta.1) | [安装验证 Issue #7180](https://github.com/agentscope-ai/QwenPaw/issues/7180)

**更新内容：**
- **feat(console)**：改进编辑器 Tab 溢出导航体验 ([#6983](https://github.com/agentscope-ai/QwenPaw/pull/6983) by @rayrayraykk)
- **fix(providers)**：降低 rate limiter 初始化日志级别，减少噪音日志 ([#6988](https://github.com/agentscope-ai/QwenPaw/pull/6988) by @rayrayraykk)
- **chore**：更新发布说明

**破坏性变更：** 无显式声明。

**迁移注意事项：** Beta 版不建议用于生产环境；安装验证需在 4 小时窗口内完成四项检查项。

---

## 3. 项目进展（今日合并/关闭的重要 PR）

| PR | 类型 | 描述 | 影响 |
|---|---|---|---|
| [#7174](https://github.com/agentscope-ai/QwenPaw/pull/7174) | perf | 并发初始化持久化 Drivers | 缩短冷启动时间 |
| [#7186](https://github.com/agentscope-ai/QwenPaw/pull/7186) | feat | datapaw 接入 PyPI 运行路径 + docker-compose 一键演示 + 环境变量继承修复 | datapaw 端到端可用化 |
| [#6947](https://github.com/agentscope-ai/QwenPaw/pull/6947) | fix | Scroll 在重建边界丢弃孤立 tool 消息 | 解决 DeepSeek/OpenAI 兼容提供方下的工具配对错误 |
| [#6371](https://github.com/agentscope-ai/QwenPaw/pull/6371) | fix | 下载器超时后继续 fallback 链 | 提升文件下载鲁棒性 |
| [#7161](https://github.com/agentscope-ai/QwenPaw/pull/7161) | feat | 在助手响应卡中显示产物（artifacts） | Console 可用性提升 |
| [#6880](https://github.com/agentscope-ai/QwenPaw/pull/6880) | feat | Console 统一应用/插件/技能市场为 `/market` 路由 | 前端架构整合 |

**整体判断：** 项目在**前端性能、记忆/上下文、Hub 控制平面、Creator 多媒体能力**四条主线上同步推进，节奏健康。

---

## 4. 社区热点（讨论最活跃的 Issues）

| 排名 | Issue | 评论数 | 状态 | 简述 |
|---|---|---|---|---|
| 🥇 | [#6921](https://github.com/agentscope-ai/QwenPaw/issues/6921) | 10 | OPEN | 执行多步任务时"规划好后无故停止"，需手动输入"继续" |
| 🥈 | [#7102](https://github.com/agentscope-ai/QwenPaw/issues/7102) | 9 | CLOSED | GLM 5.3 下客户端冻结超过 10 分钟无响应 |
| 🥉 | [#6643](https://github.com/agentscope-ai/QwenPaw/issues/6643) | 6 | CLOSED | 任务产出物全部堆积在 media 目录，建议按任务分目录 |
| 4 | [#6436](https://github.com/agentscope-ai/QwenPaw/issues/6436) | 4 | OPEN | 自动模型路由（按消息复杂度选择模型） |
| 5 | [#6826](https://github.com/agentscope-ai/QwenPaw/issues/6826) | 4 | CLOSED | 对话中助手消息结束时间显示异常 |

**诉求分析：** 社区焦点高度集中在**任务执行连续性（#6921）**、**UI/UX 细节（#6643/#6826）** 和**模型调度智能化（#6436）** 三大方向，反映用户对"Agent 自主完成任务"的核心期待正在显著提升。

---

## 5. Bug 与稳定性（按严重程度排列）

### 🔴 高严重度

1. **[#6932](https://github.com/agentscope-ai/QwenPaw/issues/6932) [OPEN]** — 网络短暂中断后无法自动恢复，必须手动重启服务进程（v2.0.1）
2. **[#6921](https://github.com/agentscope-ai/QwenPaw/issues/6921) [OPEN]** — 多步任务在规划语句后无故停止（v2.1beta2，10 条评论持续发酵）❗ 无对应 fix PR
3. **[#7168](https://github.com/agentscope-ai/QwenPaw/issues/7168) [OPEN]** — `history.db` 被 `recall_history` 的 expand 撑爆至 **7.6GB**，且同一区间被重复落库 ❗ 无对应 fix PR

### 🟡 中严重度

4. **[#7156](https://github.com/agentscope-ai/QwenPaw/issues/7156) [OPEN]** — embedding health check 在后端已预热时仍超时（>5s），且超时硬编码不可配置
5. **[#7162](https://github.com/agentscope-ai/QwenPaw/issues/7162) [CLOSED]** — 流式输出中途 `httpx.ReadError` 导致 `UNKNOWN_AGENT_ERROR`；`_get_httpx_retryable()` 漏掉 `ReadError` 不自动重试 ✅ 已修复
6. **[#7110](https://github.com/agentscope-ai/QwenPaw/issues/7110) [CLOSED]** — 对话上下文中包含不可访问的图片链接，整个会话挂掉 ✅ 已修复
7. **[#7118](https://github.com/agentscope-ai/QwenPaw/issues/7118) [CLOSED]** — `envs.json` 单个不可解析字节会静默吞掉所有环境变量 ✅ 已修复
8. **[#7102](https://github.com/agentscope-ai/QwenPaw/issues/7102) [CLOSED]** — GLM 5.3 长时间冻结 ✅ 已关闭

### 🟢 低严重度

9. **[#6826](https://github.com/agentscope-ai/QwenPaw/issues/6826) [CLOSED]** — 助手消息结束时间显示异常 ✅ 已修复
10. **[#7060](https://github.com/agentscope-ai/QwenPaw/issues/7060) [CLOSED]** — `view_video` 2MB 硬编码上限未读取 provider 配置 → 关联修复 [#7061](https://github.com/agentscope-ai/QwenPaw/pull/7061)（OpenAI Responses API 路径）
11. **[#6370](https://github.com/agentscope-ai/QwenPaw/issues/6370) [CLOSED]** — 下载器超时未触发 fallback → 关联修复 [#6371](https://github.com/agentscope-ai/QwenPaw/pull/6371) ✅

**稳定性指标：** 关闭的 13 条 Issue 中 Bug 类型占比约 60%，说明维护团队对稳定性问题响应及时；**但 [#6921](#6921) 与 [#7168](#7168) 仍是当前未解决的高优先级问题，建议维护者优先关注。**

---

## 6. 功能请求与路线图信号

| Issue | 功能 | 对应 PR | 进入下一版本的概率 |
|---|---|---|---|
| [#6436](https://github.com/agentscope-ai/QwenPaw/issues/6436) | 自动模型路由 | — | ⭐⭐⭐ 高度关注（4 评论 + 1 👍） |
| [#7013](https://github.com/agentscope-ai/QwenPaw/issues/7013) | 统一工具面板 / Web 服务预览 / 交互式终端 | — | ⭐⭐⭐ 3 评论，已被多次提出 |
| [#7184](https://github.com/agentscope-ai/QwenPaw/issues/7184) | Scroll 跨会话召回开关 | — | ⭐⭐ 新开 |
| [#7182](https://github.com/agentscope-ai/QwenPaw/issues/7182) | workspace 范围 always-on Skills | [#7183](https://github.com/agentscope-ai/QwenPaw/pull/7183) | ⭐⭐⭐⭐ 已有 PR 实现 |
| [#7181](https://github.com/agentscope-ai/QwenPaw/issues/7181) | 第三方 harness Qwen_Code 支持 | — | ⭐⭐⭐ 网络受限用户刚需 |
| [#7159](https://github.com/agentscope-ai/QwenPaw/issues/7159) | QQ 群定时任务 | — | ⭐⭐ |
| [#7158](https://github.com/agentscope-ai/QwenPaw/issues/7158) | 钉钉群聊上下文模式配置 | — | ⭐⭐ |
| [#7179](https://github.com/agentscope-ai/QwenPaw/issues/7179) | 优化智能体切换 | — | ⭐⭐ UX 改进 |
| [#6734](https://github.com/agentscope-ai/QwenPaw/issues/6734) | "新建聊天"→"新任务" | — | ⭐ 文案修改，低门槛 |
| [#6453](https://github.com/agentscope-ai/QwenPaw/issues/6453) | 中文文件名保持中文 | — | ⭐⭐ |
| [#7090](https://github.com/agentscope-ai/QwenPaw/issues/7090) | 技能池导入搜索/过滤 | — | ⭐⭐ |
| [#6974](https://github.com/agentscope-ai/QwenPaw/issues/6974) | VPN 下桌面客户端可用性 | — | ⭐⭐ 国内用户强需求 |

**路线图信号：**
- **Skills 系统** 正进入深度演进阶段（always-on [#7182] + Scroll 集成 [#7184]）。
- **Hub 多用户控制平面** ([#7112](https://github.com/agentscope-ai/QwenPaw/pull/7112)) 是下一个重大架构级功能。
- **记忆后端** 正在从单一 ReMe 转向插件化（[#7080 PowerContext](https://github.com/agentscope-ai/QwenPaw/pull/7080) + [#7133 ReMe 0.4.1.8](https://github.com/agentscope-ai/QwenPaw/pull/7133)）。
- **Console 性能优化** ([#7176](https://github.com/agentscope-ai/QwenPaw/pull/7176)) 即将到来，反映长会话性能已成痛点。

---

## 7. 用户反馈摘要

**真实痛点：**
- **任务中断焦虑**：用户对 Agent "说一半就停" 极度反感（[#6921](https://github.com/agentscope-ai/QwenPaw/issues/6921)），希望 Agent 主动持续执行直至任务完成。
- **桌面端冻结**：GLM 5.3 + 桌面客户端组合下出现长时间无响应（[#7102](https://github.com/agentscope-ai/QwenPaw/issues/7102)），影响对桌面端的信任。
- **网络脆弱性**：网络抖动后必须手动重启服务（[#6932](https://github.com/agentscope-ai/QwenPaw/issues/6932)）被视为"反生产"。
- **文件管理混乱**：media 目录堆积、文件名为哈希字符串（[#6643](https://github.com/agentscope-ai/QwenPaw/issues/6643) / [#6453](https://github.com/agentscope-ai/QwenPaw/issues/6453)），可读性差。
- **历史数据膨胀**：[#7168](https://github.com/agentscope-ai/QwenPaw/issues/7168) 报告 `history.db` 撑到 7.6GB，反映长生命周期 agent 缺乏数据治理。

**使用场景洞察：**
- **多模型切换/路由**（[#6436](https://github.com/agentscope-ai/QwenPaw/issues/6436)）已成为大量用户的明确诉求。
- **国内网络环境**：VPN 支持（[#6974](https://github.com/agents

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/NousResearch/hermes-agent">NousResearch/hermes-agent</a></summary>

<think>Let me analyze the GitHub data for Hermes Agent and create a structured daily report.

Key observations:
1. Very high activity: 50 issues and 50 PRs updated in 24 hours
2. No releases
3. Issues span: bugs, features, architecture, documentation
4. Major themes:
   - Windows/Desktop install and update problems (multiple issues)
   - Database/state.db corruption issues
   - Multi-profile gateway problems
   - TTS/STT/voice mode features
   - Memory and skills plugin issues
   - Session state and persistence bugs
   - Architecture proposals for transactional deployments

Let me organize this into the 8 required sections.

Most active issues by comments:
1. #66616 - Skills index stale (66 comments) - automated freshness probe
2. #83846 - Windows ZIP fallback deletes desktop app (13 comments)
3. #27649 - Multiprocess logging (8 comments, CLOSED)
4. #20765 - Voice mode WebRTC (7 comments, 6 thumbs up)
5. #22054 - PATH injection from venv (7 comments)
6. #75801 - Luna finish_reason bug (7 comments)
7. #73379 - update orphans dashboard (5 comments)
8. #88683 - Transactional deployment plan (4 comments)
9. #90866 - Proof-carrying state (4 comments)
10. #90971 - apply_anthropic_cache_control (4 comments)

Closed issues today:
- #27649 (logging bug)
- #34597 (Windows Gateway crash)
- #90929 (Environment spun down)
- #91178 (kanban --initial-status)
- #91176 (zai provider)

Closed PRs:
- #91187 (duplicate, Honcho sanitize)
- #87978 (Desktop context usage)

New PRs (all opened today on 2026-08-21):
- Many fresh ones: #91219, #91218, #91217, #91215, #91214, #91213, #91211, #91210, #91209, #91208, #91207, #91206, #91205, #91204
- Also #91192, #91187, #91183

User pain points:
- Windows desktop update failures (multiple)
- state.db corruption (multiple incidents)
- Multi-profile /handoff broken
- TTS double-play on desktop
- Web dashboard voice input
- Desktop SSH profile switching

Let me write this report in Chinese as the request is in Chinese.</think>

# Hermes Agent 项目动态日报
**报告日期：2026-08-21**

---

## 1. 今日速览

Hermes Agent 仓库今日呈现**高度活跃状态**：24 小时内 Issues 与 PRs 各产生 50 条更新，分别有 44 条新开/活跃 Issue 和 46 条待合并 PR，关闭/合并 6 条 Issue 与 4 条 PR。**无新版本发布**。主题集中在四大方向：① Windows/桌面端安装与更新链路的系统性故障；② `state.db` 数据库在高并发下的持续损坏；③ 多 Profile 网关下的会话路由与 `/handoff` 失效；④ TTS/STT/语音通道在桌面与远程部署中的可靠性。整体看，项目处于**密集问题修复期**，PR 数量远超 Issues 关闭速度，社区驱动的修复节奏快但**积压风险显著上升**。

---

## 2. 版本发布

**无新版本发布。** 当前线上最新为 Hermes Agent v0.20.4（2026.8.18），桌面端 0.0.1。多个 issue 仍在引用 v0.20.0 的更新链路缺陷，说明距下一个稳定版本仍有关键问题待解决。

---

## 3. 项目进展（今日合并/关闭）

今日合并/关闭的 PR 共 4 条，多数为重复关闭或候选被驳回：

| PR | 类型 | 摘要 | 链接 |
|---|---|---|---|
| #91187 | CLOSED (duplicate) | Honcho 记忆插件的 peer-card 数据净化（已确认为重复 PR） | [#91187](https://github.com/NousResearch/hermes-agent/pull/91187) |
| #87978 | CLOSED | 桌面端实时上下文计量 | [#87978](https://github.com/NousResearch/hermes-agent/pull/87978) |
| 另有 2 条关闭 PR 未在前 20 条列表中展示 |

**今日关闭 Issue（部分）：**
- [#27649](https://github.com/NousResearch/hermes-agent/issues/27649) **多进程日志轮转竞态** — 已合并 fix ([#91210](https://github.com/NousResearch/hermes-agent/pull/91210))，剩余 POSIX 后备链竞态被修复
- [#34597](https://github.com/NousResearch/hermes-agent/issues/34597) **Windows Gateway 启动崩溃** — 计划停止标记误触发 UNKNOWN 退出
- [#91178](https://github.com/NousResearch/hermes-agent/issues/91178) Kanban `--initial-status blocked` 任务被误分发（重复）
- [#91176](https://github.com/NousResearch/hermes-agent/issues/91176) zai provider 上下文窗口配置错误（重复）

**净进展判断：** 修复侧有明显落地（#27649 系列），但**新开 PR 远多于合并 PR**，说明 PR 流水线尚未进入稳态合并节奏。**今日实质向前推进的项目进度：中等偏低**。

---

## 4. 社区热点（按评论数与互动量）

| 排名 | Issue | 评论 | 互动 | 摘要 |
|---|---|---|---|---|
| 🥇 | [#66616](https://github.com/NousResearch/hermes-agent/issues/66616) | **66** | 自动化扫描 | Skills index 已陈旧 29.8h（限制 26h），重建 cron（6/18 UTC）失败 |
| 🥈 | [#83846](https://github.com/NousResearch/hermes-agent/issues/83846) | 13 | 👍1 | Windows ZIP 回退路径**静默删除桌面应用**，更新后报"Already up to date" |
| 🥉 | [#20765](https://github.com/NousResearch/hermes-agent/issues/20765) | 7 | 👍6 | **呼声最高的特性**：浏览器 Dashboard WebRTC 麦克风采集 |
| 4 | [#22054](https://github.com/NousResearch/hermes-agent/issues/22054) | 7 | 👍2 | venv 注入 `$PATH` 前置，遮蔽系统 Python 3.11 |
| 5 | [#75801](https://github.com/NousResearch/hermes-agent/issues/75801) | 7 | 👍1 | OpenCode `gpt-5.6-luna` 缺 `finish_reason` 导致假"mid-stream drop" |

**分析：** 热度集中在**基础设施稳定性**（索引陈旧、安装/更新）与**跨设备语音体验**两端。用户对 Web 端语音输入的需求强烈（#20765、#54352、#90051 三条并行），表明 Hermes 的**远程/无头部署用户占比正在显著上升**。

---

## 5. Bug 与稳定性报告

### 🔴 P0（最高严重）
- [#90971](https://github.com/NousResearch/hermes-agent/issues/90971) — `apply_anthropic_cache_control` 在已装饰输入上**不幂等**（Anthropic 缓存链路风险）。**尚无 fix PR**。

### 🟠 P1（高严重）
- [#83846](https://github.com/NousResearch/hermes-agent/issues/83846) Windows ZIP 回退摧毁桌面应用。**无 fix PR**。
- [#34597](https://github.com/NousResearch/hermes-agent/issues/34597) Windows Gateway 启动崩溃 ✅ 已关闭。
- [#75801](https://github.com/NousResearch/hermes-agent/issues/75801) Luna 缺 `finish_reason` 误分类。**无 fix PR**。
- [#85079](https://github.com/NousResearch/hermes-agent/issues/85079) 子代理并发下 WAL 追加返回 NULL。**无 fix PR**。
- [#89293](https://github.com/NousResearch/hermes-agent/issues/89293) **state.db 在 8 天内损坏 3 次**（lock storm + restart-in-window + journal_mode 静默回退 WAL）。**无 fix PR**。

### 🟡 P2（中严重）
- [#22054](https://github.com/NousResearch/hermes-agent/issues/22054) PATH 注入遮蔽系统 Python。
- [#73379](https://github.com/NousResearch/hermes-agent/issues/73379) `hermes update` 在非 systemd 监管下孤儿化 Dashboard。
- [#90829](https://github.com/NousResearch/hermes-agent/issues/90829) Windows 桌面日更失败（fail-closed get-windows gate + 损坏的 node_modules）。
- [#90477](https://github.com/NousResearch/hermes-agent/issues/90477) Desktop 在 SSH 后端上切换 profile 错误生成本地 backend。
- [#90795](https://github.com/NousResearch/hermes-agent/issues/90795) `@assistant-ui/tap` 触发 React #520 无限渲染。
- [#90297](https://github.com/NousResearch/hermes-agent/issues/90297) `auto_tts` 在桌面端**重复播放两次**。
- [#91216](https://github.com/NousResearch/hermes-agent/issues/91216) `/handoff` 在多 profile 网关下**用错 state.db、用错 session key、走错 bot**。✅ **已有 fix PR [#91217](https://github.com/NousResearch/hermes-agent/pull/91217)**。
- [#47188](https://github.com/NousResearch/hermes-agent/issues/47188) Telegram 自定义 `base_url` 忽略 NO_PROXY。
- [#81114](https://github.com/NousResearch/hermes-agent/issues/81114) 桌面后台任务完成状态不更新。
- [#32678](https://github.com/NousResearch/hermes-agent/issues/32678) GCP Vertex AI 通过 'gcp'/'rest' driver 返回 404。

### 🟢 P3 / 低严重
- [#91211](https://github.com/NousResearch/hermes-agent/pull/91211) Kanban `needs_input` 升级应保持人工门控（**已由 PR 修复**）。
- [#91205](https://github.com/NousResearch/hermes-agent/pull/91205) Kanban 工作树绑定丢失（**已由 PR 修复**）。
- [#91206](https://github.com/NousResearch/hermes-agent/pull/91206) Kanban worker 在瞬态 provider 失败后应入队重试（**已由 PR 修复**）。
- [#91210](https://github.com/NousResearch/hermes-agent/pull/91210) POSIX 日志轮转竞态恢复（**已由 PR 修复**）。

**整体稳定性评分：偏低。** 多个 P0/P1 缺陷无对应 PR 跟进。

---

## 6. 功能请求与路线图信号

### 高社区呼声（预计纳入近期路线图）
1. **浏览器 Dashboard 麦克风采集（WebRTC）** — [#20765](https://github.com/NousResearch/hermes-agent/issues/20765) 👍6 + [#54352](https://github.com/NousResearch/hermes-agent/issues/54352) 👍2 + [#90051](https://github.com/NousResearch/hermes-agent/issues/90051) 三条议题一致指向同一需求。**强烈信号：客户端语音捕获是跨设备部署的关键缺失。**
2. **预览面板的反向代理** — [#91149](https://github.com/NousResearch/hermes-agent/issues/91149) 请求在 SSH 后端模式下将 `localhost` 解析走 backend。
3. **记忆与技能修改的审批工作流** — [#91202](https://github.com/NousResearch/hermes-agent/issues/91202) 与现有 `approvals.mode` 对齐。
4. **A2A 命名可信 peer 授权** — [#91192](https://github.com/NousResearch/hermes-agent/pull/91192) 已有 PR，方向明确。
5. **桌面 + 网关的资源/账户控制面** — [#91204](https://github.com/NousResearch/hermes-agent/pull/91204) 已具 PR 原型。

### 架构演进信号
- [#88683](https://github.com/NousResearch/hermes-agent/issues/88683) **统一事务性部署计划** — andrexibiza 提案。
- [#90866](https://github.com/NousResearch/hermes-agent/issues/90866) **可观测状态从源头到副作用的"携带证明"** — 与 #89719 等近期修复一脉相承。
- [#80551](https://github.com/NousResearch/hermes-agent/pull/80551) **"All Gods Must Die" 原则** 文档化。

---

## 7. 用户反馈摘要

**真实用户痛点（按场景归类）：**

- **🪟 Windows 用户长期受困于安装/更新链路**：#83846、#90829、#89857（Constrained Language Mode 下 PowerShell 无法运行 install.ps1）、#34597、#22054、#91214（BOM 导致配置静默丢失）。这是一条**反复出现、长期未根治的体验链**，直接影响 Windows 桌面端口碑。

- **🗄️ state.db 在生产负载下"三天两头坏"**：#89293 报告中 8 天坏 3 次，每次需 `.recover` 离线重建，伴随数据丢失。这已**不再是偶发 bug，而是结构性问题**（WAL/journal_mode 静默回退 + lock storm + restart-in-window 复合故障）。

- **🔀 多 Profile / 多用户部署下的状态路由混乱**：#90477（SSH profile 切换串到错误主机）、#91216（`/handoff` 走错 bot）。表明 `gateway.multiplex_profiles` 进入实战后，**单进程单 store 的隐含假设正在破裂**。

- **🔊 语音体验在桌面端仍不稳定**：#90297（TTS 双播）、#20765/#54352（远程时无法录音）、#78196（V6 契约下的 STT/TTS 切片已 candidate_blocked）。用户对 voice loop 的**一致性、可打断性、跨设备协同**的期望强烈。

- **🎛️ Kanban 工作流控制粒度**：#91178（blocked 任务被分发）、#91211（needs_input 跳过人工门控）。自动分解机制在"自主执行 vs. 人工监督"边界上仍需细调。

- **💬 正面信号**：[#20765](https://github.com/NousResearch/hermes-agent/issues/20765) 的 6 个 👍 表明用户在主动共建远程使用模式，反映**对核心能力满意度较高，痛点集中在边缘场景**。

---

## 8. 待处理积压（维护者关注清单）

| 类型 | 编号 | 持续天数 | 备注 |
|---|---|---|---|
| ⚠️ 自动化扫描持续未修 | [#66616](https://github.com/NousResearch/hermes-agent/issues/66616) | **34 天** | Skills index 自 2026-07-18 起多次陈旧，cron 重建路径需诊断 |
| ⚠️ 文档规范化未合并 | [#80551](https://github.com/NousResearch/hermes-agent/pull/80551) | 15 天 | "All Gods Must Die" 原则 PR 长期 OPEN |
| ⚠️ 候选被阻塞 | [#78196](https://github.com/NousResearch/hermes-agent/pull/78196) | 17 天 | STT/TTS 可靠性切片 `candidate_blocked`，等待 V6 完整方案 |
| ⚠️ 持续诊断中 | [#90971](https://github.com/NousResearch/hermes-agent/issues/90971) | 1 天 | Anthropic 缓存幂等性 — P0，排查中 |
| ⚠️ 高频复发 | [#89293](https://github.com/NousResearch/hermes-agent/issues/89293) | 3 天 | state.db 复合损坏，建议列为下次专项 |
| 📦 重复关闭率偏高 | 多个 PR | — | #91187、#87978 等以 duplicate 关闭，建议维护者**在 PR 模板中强化"先搜后提"指引** |

---

## 📌 维护者建议（基于今日数据）

1. **优先合并 [#91217](https://github.com/NousResearch/hermes-agent/pull/91217)** — 解决 #91216 多 profile `/handoff` 故障，社区痛感强。
2. **对 state.db 复合故障成立专项** — [#89293](https://github.com/NousResearch/hermes-agent/issues/89293) 描述的 lock storm + restart-in-window + journal_mode 回退组合需要根因分析，不应继续逐条打补丁。
3. **Windows 安装链路需要一次系统性重写** — 至少 6 条 issue 指向同一类问题（#83846、#90829、#89857、#34597、#22054、#91214）。
4. **语音通道的 V6 契约需尽快释放** — [#78196](https://github.com/NousResearch/hermes-agent/pull/78196) 阻塞已 17 天。
5. **PR 重复关闭率提示需要更好的贡献者引导** — 建议在 `.github/PULL_REQUEST_TEMPLATE.md` 中加入链接搜索提示。

---

*报告生成基于 2026-08-21 GitHub 数据快照，链接均为 `github.com/NousResearch/hermes-agent` 仓库路径。*

</details>

<details>
<summary><strong>OpenHuman</strong> — <a href="https://github.com/tinyhumansai/openhuman">tinyhumansai/openhuman</a></summary>

<think>The user wants me to generate a daily report for the OpenHuman project based on the GitHub data provided. Let me analyze the data carefully and structure it according to the requested sections.

Let me first organize the data:

**Issues (31 total)**
- Most issues are "[bug, pre prod build]" tagged - these are pre-production build bugs
- Many are related to staging/pre-prod infrastructure issues
- Key themes: tinymemory capability mismatch, WebSocket drops, journal-sink UTF-8 failures, build/CI issues

**Closed Issues (7)**
- #5598 tinymemory capability mismatch (closed)
- #5613 Rust coverage gate false success (closed)
- #5614 hosting family compiled in no configuration (closed)
- #5612 vendored submodule bump skips Rust lanes (closed)
- #5607 ubuntu-arm64 desktop build fails (closed)
- #5606 AppImage validation fails (closed)

**PRs (25 total)**
- 12 OPEN, 13 CLOSED/MERGED
- Notable closed PRs:
  - #5620 fix(memory): capability fix for #5598
  - #5619 fix(hosting): compile hosting family
  - #5621 ci: coverage gate fix
  - #5616 fix(ci): run Rust lanes on vendored crate changes
  - #5610 fix(build): release codegen serialization fix - cuts build from 90m to 46m
  - #5609 fix(release): unblock Linux release
  - #5622 re-pin tinycortex
  - #5611 vendor bump for journal stream growth
  - #5639 align stale capability tests
  
- Notable open PRs:
  - #5647 Link tinymemory-bus
  - #5646 perf: drop per-turn memory recall (2.1x throughput)
  - #5645 benchmark tier
  - #5644 fix(feedback): preserve API error messages (closes #5440)
  - #5632 vendor tinyhumans-sdk bump
  - #5631 Arch package bump + auto-pkgver
  - #5628 Reddit OAuth scopes
  - #5629 OpenAI max_completion_tokens routing
  - #5630 fix(store): journal streams UTF-8
  - #5617 fix(agent): spawn_parallel graph rename (closes #5601)
  - #5618 fix(mcp): uvx PATH preflight (closes #5600)

**No releases**

The tone should be objective, data-driven, professional. Let me write this in Chinese.

Let me think about the structure:

1. **今日速览**: Overall activity assessment
2. **版本发布**: No releases - skip
3. **项目进展**: Important merged PRs
4. **社区热点**: Most discussed issues/PRs
5. **Bug 与稳定性**: Bugs by severity
6. **功能请求与路线图信号**: Feature requests
7. **用户反馈摘要**: User feedback
8. **待处理积压**: Backlog

Let me look at what's most important:
- Multiple "pre prod build" bugs show heavy pre-production testing activity
- Build/CI infrastructure issues being resolved
- Performance optimization PRs (2.1x throughput)
- A lot of bug fixes shipping today

Severity ranking of bugs (based on impact):
- High: chat-v1 primary route silently falls back (#5642), tinymemory capability mismatch (closed #5598), learning scheduler fails 260x (#5623), WebSocket drops (#5603), journal-sink losing data (#5599, #5640)
- Medium: model hint not available (#5637), MCP server transport drops (#5636), Notion sync broken (#5633), config.toml permissions (#5635)
- Low: triage.escalate blocked (#5634), TinyPlace identity 404 (#5627)

Let me draft the report now in Chinese.</think>

# OpenHuman 项目动态日报 · 2026-08-21

> 数据周期：2026-08-19 ~ 2026-08-20（GitHub Issues/PRs 过去 24 小时窗口）
> 数据源：[github.com/tinyhumansai/openhuman](https://github.com/tinyhumansai/openhuman)

---

## 1. 今日速览

OpenHuman 进入**集中修复期**——昨日 Issues 净增 17 条（新开 24、关闭 7），PR 流转 25 条（合并/关闭 13 条、待合并 12 条），整体吞吐保持高位。**当日无新版本发布**，所有交付物集中在 staging / pre-prod 环境的 Bug 与 CI/Build 基础设施修复。基础设施类与并发性能类合并密度显著，多个长期悬而未决的 CI"假绿"问题（#5612、#5613、#5606、#5607）已在新合并的 PR 中得到根治或正在修。**项目健康度评估：中等偏强**——活跃度高、提交节奏健康，但大量 `[bug, pre prod build]` Issues 暴露 staging 环境仍有系统性风险，建议维护者优先收敛 pre-prod 阻塞。

---

## 2. 版本发布

**无新版本发布。** 项目距离上一个对外发布（v0.63.7，2026-08-07）已 14 天，受 PR #5609（Linux release 链路修复）影响，Linux 自该版本后未再发版。预计修复合并后将恢复发版节奏。

---

## 3. 项目进展（重要已合并 PR）

| PR | 标题 | 实质影响 |
|---|---|---|
| [#5610](https://github.com/tinyhumansai/openhuman/pull/5610) | **fix(build): 解除 release codegen 串行化** | macOS desktop 构建从 90 分钟超时降至 46 分钟，定位 #5595 的根因（`codegen-units = 1`）。**直接修复了困扰近一周的 release 超时**。 |
| [#5609](https://github.com/tinyhumansai/openhuman/pull/5609) | **fix(release): 解锁 Linux release** | 同时修复 AppImage 校验器（适配 CEF→Wry 后产物结构）与 `xdg-utils` 缺失问题，**自 v0.63.7 之后首次让 Linux 桌面 release 具备可发版条件**。 |
| [#5620](https://github.com/tinyhumansai/openhuman/pull/5620) | **fix(memory): 修正模块驱动能力声明** | 终结 #5598 tinymemory capability mismatch 的根因——将过度声明的 262143 bits 收窄到模块实际可服务的 8191 bits。 |
| [#5621](https://github.com/tinyhumansai/openhuman/pull/5621) | **ci: 零覆盖时强制失败** | 修复 #5613：当 scoped libtest 过滤匹配 0 个测试时不再误报 success，提升 CI 可信度。 |
| [#5619](https://github.com/tinyhumansai/openhuman/pull/5619) | **fix(hosting): 编译 hosting 家族** | 修复 #5614：1,643 行代码（含 511 行测试与 9 个 `hosting_*` 工具）正式进入 product feature，结束"编译进空气"状态。 |
| [#5616](https://github.com/tinyhumansai/openhuman/pull/5616) | **fix(ci): 任何 vendored crate 变更触发 Rust 流水线** | 修复 #5612：避免 vendored 子模块指针 bump 跳过 CI 直接进 main。 |
| [#5639](https://github.com/tinyhumansai/openhuman/pull/5639) | **fix(memory): 对齐陈旧能力测试** | 跟随 #5620 的测试更新，恢复 `Rust Core Coverage` 流水线。 |
| [#5611](https://github.com/tinyhumansai/openhuman/pull/5611) | **chore(vendor): bump tinyagents — 限制 in-memory journal 增长** | 缓解 #5599 / #5640 长会话下的观测丢失风险。 |
| [#5622](https://github.com/tinyhumansai/openhuman/pull/5622) | **chore(vendor): 重新 pin tinycortex** | 修正 #5605 合并时 squash 早 cut 一 commit 导致的脆弱 gitlink 引用。 |

**推进判断**：今日基础设施类一次性推进明显——构建性能、Linux 发版链、CI 假绿、内存驱动能力声明四个长期痛点同步被切除。但功能面推进较缓，目前社区重点仍在 staging 环境止血。

---

## 4. 社区热点（评论与关注度）

由于本次数据集中 Issues/PR 评论数普遍为 0~1，仅 [#5440](https://github.com/tinyhumansai/openhuman/issues/5440)（1 条评论）与 [#5600](https://github.com/tinyhumansai/openhuman/issues/5600)、[#5595](https://github.com/tinyhumansai/openhuman/issues/5595)（各 1 条评论）相对突出。**讨论密度反映当前 issue tracker 主要承担"事件记录 + 修复追踪"职能，而非社区讨论场所**。

- **#5440** —— "Share the apiClient error-message helper across the feedback surface"：跨反馈入口统一错误处理。已由 PR [#5644](https://github.com/tinyhumansai/openhuman/pull/5644) 实质响应。
- **#5600** —— "Staging: GitHub MCP server fails — uvx not found on PATH"：影响每个 retry 的环境前置依赖问题，已由 PR [#5618](https://github.com/tinyhumansai/openhuman/pull/5618) 跟进。
- **#5595** —— "Desktop build matrix 90 分钟超时，Windows 仅剩 9 秒裕量"：今日最被关注的生产阻塞之一，已由 PR [#5610](https://github.com/tinyhumansai/openhuman/pull/5610) 在 commit 层直接解决。

---

## 5. Bug 与稳定性报告

按严重程度（对线上 / 用户可见性影响）排列：

### 🔴 严重（影响核心路径）

| Issue | 简述 | 是否已有 Fix |
|---|---|---|
| [#5642](https://github.com/tinyhumansai/openhuman/issues/5642) | chat-v1 主推理路由每轮失败，SDK 静默降级到 burst-v1，用户始终不知情 | ❌ 待处理 |
| [#5623](https://github.com/tinyhumansai/openhuman/issues/5623) | 学习调度器失败 260+ 次，`tinymemory` 缺 `ListAllFacets`，记忆图永不重建 | ✅ 同根因由 #5620 已修，关注下游 |
| [#5604](https://github.com/tinyhumansai/openhuman/issues/5604) | staging-api.tinyhumans.ai 传输级连接失败（请求发不出去） | ❌ 待处理 |
| [#5597](https://github.com/tinyhumansai/openhuman/issues/5597) | `deepseek/deepseek-v4-flash` 返回 404 MODEL_UNAVAILABLE，导致 orchestrator 因 raw payload 回退而挂起 | ❌ 待处理 |
| [#5624](https://github.com/tinyhumansai/openhuman/issues/5624) | 用户状态拉取 51 次超时、53 次 fallback，整会运行在陈旧快照上 | ❌ 待处理 |
| [#5633](https://github.com/tinyhumansai/openhuman/issues/5633) | Notion sync 每 tick 失败 51 次（composio/notion `Invalid request data provided`） | ❌ 待处理 |
| [#5602](https://github.com/tinyhumansai/openhuman/issues/5602) | Langfuse journal push 每轮 10 秒超时，staging 完全无遥测 | ❌ 待处理 |

### 🟠 中等（功能受损但可降级）

| Issue | 简述 | 是否已有 Fix |
|---|---|---|
| [#5603](https://github.com/tinyhumansai/openhuman/issues/5603) | WebSocket 每 ~11 分钟掉线，疑似服务端 session 超时配置错误 | ❌ |
| [#5638](https://github.com/tinyhumansai/openhuman/issues/5638) | WebSocket 出现 server-initiated close / TCP RST（os error 54） | ❌ |
| [#5599](https://github.com/tinyhumansai/openhuman/issues/5599) | journal-sink UTF-8 校验失败，单会话丢 2,372+ 条观测 | ✅ 已由 #5630 修复 PR（open） |
| [#5640](https://github.com/tinyhumansai/openhuman/issues/5640) | journal-sink 遇非 UTF-8 字节直接崩溃，整会话观测丢失 | ✅ 同上 |
| [#5636](https://github.com/tinyhumansai/openhuman/issues/5636) | `ac.inference.sh/mcp` 传输反复掉线 14 次 | ❌ |
| [#5600](https://github.com/tinyhumansai/openhuman/issues/5600) | GitHub MCP server 启动失败：`uvx` 不在 PATH | ✅ #5618（open） |
| [#5601](https://github.com/tinyhumansai/openhuman/issues/5601) | `spawn_parallel_agents` 同时注册为 tool 与 graph，调度歧义 | ✅ #5617（open） |
| [#5641](https://github.com/tinyhumansai/openhuman/issues/5641) | 学习调度器新一轮失败：memory driver 不支持 'profile family' | ❌ |
| [#5643](https://github.com/tinyhumansai/openhuman/issues/5643) | in-process 模块（tinywallet/tinyjuice）rustc 版本不一致，潜在 ABI 风险 | ❌ |
| [#5626](https://github.com/tinyhumansai/openhuman/issues/5626) | `summarize` outcome 节点耗尽重试，turn 无最终摘要 | ❌ |
| [#5637](https://github.com/tinyhumansai/openhuman/issues/5637) | 模型 hint `hint:summarize` 未配置，HTTP 400，线程标题降级 | ❌ |

### 🟡 较低（安全 / 配置 / 边角）

| Issue | 简述 | 是否已有 Fix |
|---|---|---|
| [#5635](https://github.com/tinyhumansai/openhuman/issues/5635) | `config.toml` 以 644 写入，运行时自纠正为 600；写入瞬间曾 world-readable | ❌ |
| [#5634](https://github.com/tinyhumansai/openhuman/issues/5634) | `triage.escalate` 被审批门拒绝（"no origin label"）8 次 | ❌ |
| [#5625](https://github.com/tinyhumansai/openhuman/issues/5625) | 自动更新器无法触达 GitHub releases API | ❌ |
| [#5627](https://github.com/tinyhumansai/openhuman/issues/5627) | TinyPlace identity 启动 404，疑似 staging 未注册 | ❌ |

**已关闭**：#5598（tinymemory 能力不匹配，PR #5620 根治）、#5613（CI 假绿）、#5614（hosting 家族）、#5612（vendor bump 跳过 CI）、#5607（arm64 缺 xdg-utils）、#5606（AppImage 校验）。

---

## 6. 功能请求与路线图信号

从当前 open PR 看，潜在纳入下一版本的方向：

- **性能基线建立**：[#5645](https://github.com/tinyhumansai/openhuman/pull/5645) 引入 `agent-scale` benchmark 套件，配套 [#5646](https://github.com/tinyhumansai/openhuman/pull/5646)（已测得 2.1× 单轮吞吐提升：去掉每轮 memory recall）。合并将显著抬高对 core 改动的回归防护水平。
- **Memory 子系统现代化**：[#5647](https://github.com/tinyhumansai/openhuman/pull/5647) 在 host 与 `tinymemory` 之间建立静态 seam（`tinymemory-bus`），是 #5598 / #5620 长期修复路线的下一步。
- **发行链生态**：[#5631](https://github.com/tinyhumansai/openhuman/pull/5631)（Arch `openhuman-bin` 自动 pkgver）、[#5644](https://github.com/tinyhumansai/openhuman/pull/5644)（feedback 错误信息还原）、[#5628](https://github.com/tinyhumansai/openhuman/pull/5628)（Reddit OAuth scopes 全量）、[#5629](https://github.com/tinyhumansai/openhuman/pull/5629)（GPT-5/reasoning 模型 `max_completion_tokens` 路由）共同指向 0.64 版本的细节补完。
- **观测完整性**：[#5630](https://github.com/tinyhumansai/openhuman/pull/5630) 修复 journal-sink UTF-8 边界崩溃，对应 staging 中 2,372 条观测丢失的根因。

**对路线图的启示**：用户侧最强烈的隐含诉求是稳定性与可见性（如 chat-v1 静默 fallback）而非新功能——下一版本应优先收敛 pre-prod 残留 Bug，再发布特性。

---

## 7. 用户反馈摘要

本窗口评论数据稀疏，但可从 issue 描述中提炼的真实痛点：

- **静默失败让人不安**：多位 reporter 在 #5642 / #5623 / #5602 中强调"用户没看到失败提示，但功能实际没在工作"。成本与质量不可观测已成普遍焦虑。
- **staging 与 pre-prod 暴露面不一致**：#5638 与 #5603 同时报告 WebSocket 异常，但现象不同（ping 超时 vs server-side close vs TCP RST），说明环境间配置漂移明显。
- **部署假设缺失**：[#5600](https://github.com/tinyhumansai/openhuman/issues/5600) 揭示 GitHub MCP server 假设目标机器已装 `uv`，缺乏 preflight——#5618 的反馈引导文案被明确要求"提到 `uv` 文档链接"，显示用户期望**可执行的指引**而非仅错误。
- **权限默认值不安全**：[#5635](https://github.com/tinyhumansai/openhuman/issues/5635) 中 `config.toml` 默认 644 world-readable，即使有自纠正机制，作者明确指出"auto-fix 不是解"——属于社区长期主张的"安全默认值优先"诉求。
- **版本节奏拖延**：当前 14 天未对外发版（#5609 注释中确认），Linux 用户处于"被迫停留在 v0.63.7"的状态。

---

## 8. 待处理积压

提醒维护者关注：

| 编号 | 标题 | 风险 |
|---|---|---|
| [#5440](https://github.com/tinyhumansai/openhuman/issues/5440) | Share apiClient error-message helper

</details>

---
*本日报由 [Big Model Radar](https://github.com/96loveslife/big_model_radar) 自动生成。*
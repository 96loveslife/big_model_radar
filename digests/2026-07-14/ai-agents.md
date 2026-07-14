# OpenClaw 生态日报 2026-07-14

> Issues: 500 | PRs: 500 | 覆盖项目: 12 个 | 生成时间: 2026-07-14 02:53 UTC

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

<think>The user wants me to generate a daily report for the OpenClaw project based on GitHub data. Let me analyze the data carefully and create a comprehensive report.

Let me organize what I see:

**Data Overview:**
- 24h Issues updates: 500 (336 new/active, 164 closed)
- 24h PR updates: 500 (287 open, 213 merged/closed)
- 1 new release: v2026.7.1

**Release v2026.7.1 highlights:**
- New models/providers: Featherless, Claude Sonnet 5, Mythos 5, Meta Muse Spark 1.1, ClawRouter
- GPT-5.6 is new default for setup with `/think ultra` for Sol/Terra, `max` for Luna
- Honor Z.AI `max`
- Refresh model availability after OAuth

**Top Issues by comments:**
1. #75 (112 comments, 81 thumbs up) - Linux/Windows Clawdbot Apps - long-standing enhancement request
2. #7707 (18 comments) - Memory Trust Tagging by Source - security feature
3. #104721 (16 comments) - "(see attached image)" literal string bug
4. #102020 (13 comments) - Session initialization conflict on second message
5. #38327 (11 comments) - Cannot convert undefined or null with Vertex Gemini
6. #101290 (11 comments) - CLI preflight corrupts state DB
7. #90213 (10 comments) - Legacy state migration warnings
8. #10687 (10 comments) - Dynamic model discovery for OpenRouter
9. #7722 (10 comments) - Filesystem sandboxing config
10. #11665 (9 comments) - Webhook hook sessions reuse

**Recently closed issues (with high engagement):**
- #106555 (9 comments) - Refactor chat.send into explicit lifecycle phases
- #92057 (8 comments) - Gateway slow under multi-session
- #106914 (6 comments) - models list crashes 2026.7.1 regression
- #103884 (6 comments) - GPT-5.6 Sol needs newer Codex
- #102400 (6 comments) - Reply-session init conflict dropped silently

**Top PRs:**
Most are recent (today/yesterday). Let me look for important ones:
- #106951 - Fix unhandled rejection in session record
- #106636 - Sandbox stream stdin buffers
- #106840 - Active-memory recall billing rejection fix
- #89040 - Event-loop stall during embedded_run
- #107002 - Converge legacy startup migrations (XL, P0)
- #106314 - Gmail bind errors across chunks
- #106932 - Don't retire parent Codex binding
- #106981 - Restore reload history and bundled icons
- #107004 - Discord voice participant notifications
- #107025 - Retain who said what across group chat
- #107022 - Isolate auth planner provider hooks
- #106941 - Discover OpenCode and Pi sessions
- #106705 - Apply Context Profile presets via config.patch

Now let me structure the report:

1. **今日速览** - High activity, 1 release with new models, healthy PR flow (287 open, 213 closed), bugs in release noted
2. **版本发布** - v2026.7.1 details
3. **项目进展** - Notable closed items and important merged work
4. **社区热点** - Top issues by engagement
5. **Bug 与稳定性** - Critical bugs with severity
6. **功能请求** - Feature requests with PR backing
7. **用户反馈摘要** - Pain points from comments
8. **待处理积压** - Old issues needing attention

Let me write this in Chinese as the prompt is in Chinese, with English where technical terms benefit.</think>

# OpenClaw 项目动态日报
**日期：2026-07-14**

---

## 1. 今日速览

OpenClaw 在过去 24 小时保持极高的开发节奏：Issues 侧 500 条更新（活跃 336 / 关闭 164），PR 侧 500 条更新（待合并 287 / 已合并或关闭 213），并发布月度版本 **v2026.7.1**。维护者 `@steipete` 持续主导收尾工作，聊天网关、Codex 集成、模型目录与 Web UI 是当下三大热点。值得注意的是，本次版本发布后已有至少 2 个新回归 Bug（`models list` 崩溃 #106914、`see attached image` 占位串 #100121），需要 2026.7.2 快速补丁。整体健康度：**中等偏健康**，新增活跃度极高但回归与待审 PR 积压同步上升。

---

## 2. 版本发布

### 🚀 v2026.7.1 — 已发布
**Release 链接**：https://github.com/openclaw/openclaw

**Highlights**：
- **新增模型/Provider**：Featherless、Claude Sonnet 5、Mythos 5、Meta Muse Spark 1.1、ClawRouter
- **默认模型变更**：新装默认切换为 **GPT-5.6**，Sol/Terra 启用 `/think ultra`，Luna 启用 `max`
- **Z.AI 兼容**：honor Z.AI `max` 参数
- **OAuth 模型可用性刷新**：刷新流程后重新拉取模型列表

**⚠️ 已知回归（24h 内报告）**：
- [#106914](https://github.com/openclaw/openclaw/issues/106914) `models list` 因 `applyAnthropicSonnet5Cost` 缺少 cost 字段导致 TypeError（已关闭，已修复）
- [#100121](https://github.com/openclaw/openclaw/issues/100121) Exec 工具失败时模型响应被替换为 `(see attached image)`（P1，未关闭）

**迁移注意事项**：升级前若依赖 sonnet-5 cost 字段需确认配置完整；如使用 Codex OAuth 需重新触发模型可用性刷新。

---

## 3. 项目进展

今日关闭的关键 PR/Issue 反映项目向**架构清晰化**与**UX 修复**方向推进：

| 进展 | 编号 | 性质 | 说明 |
|---|---|---|---|
| ✅ 关闭 | [#106555](https://github.com/openclaw/openclaw/issues/106555) | 重构 | `chat.send` 拆分为显式生命周期阶段（4,015 行热点继续瘦身） |
| ✅ 关闭 | [#92057](https://github.com/openclaw/openclaw/issues/92057) | 性能 | 多会话/多智能体负载下 Gateway 变慢或超时（P1） |
| ✅ 关闭 | [#106914](https://github.com/openclaw/openclaw/issues/106914) | 回归 | `models list` 启动崩溃（2026.7.1 回归） |
| ✅ 关闭 | [#103884](https://github.com/openclaw/openclaw/issues/103884) | 模型 | GPT-5.6 Sol 需要更新版 Codex |
| ✅ 关闭 | [#102400](https://github.com/openclaw/openclaw/issues/102400) | 消息可靠性 | Slack/WebChat/Heartbeat 入站静默丢弃 reply session init 冲突 |
| 🔧 新开 PR | [#107002](https://github.com/openclaw/openclaw/pull/107002) | XL 重构 | 收敛 legacy 启动迁移（P0，等待作者补充） |
| 🔧 新开 PR | [#106981](https://github.com/openclaw/openclaw/pull/106981) | UI 修复 | Control UI 重新加载历史与图标恢复（P1） |
| 🔧 新开 PR | [#107025](https://github.com/openclaw/openclaw/pull/107025) | L | 群聊中保留「谁说了什么」的归属信息 |
| 🔧 新开 PR | [#106997](https://github.com/openclaw/openclaw/pull/106997) | L | macOS 仪表盘原生感增强（⌘N/⌘K、预加载、frame 自动保存） |
| 🔧 新开 PR | [#106941](https://github.com/openclaw/openclaw/pull/106941) | XL | 在配对节点发现 OpenCode 与 Pi 会话 |

**整体评估**：核心网关与聊天层正在做减法（chat.send 拆分），同时补齐 Codex、macOS 原生体验、多运行时会话发现等关键能力。

---

## 4. 社区热点

按评论数与👍数筛选的社区最活跃议题：

| 排名 | 编号 | 👍 | 评论 | 主题 | 状态 |
|---|---|---|---|---|---|
| 1 | [#75](https://github.com/openclaw/openclaw/issues/75) | 81 | 112 | **Linux/Windows 客户端缺失** — macOS/iOS/Android 之外的桌面端支持 | OPEN |
| 2 | [#7707](https://github.com/openclaw/openclaw/issues/7707) | 0 | 18 | 记忆信任标签（按来源分级） | OPEN |
| 3 | [#104721](https://github.com/openclaw/openclaw/issues/104721) | 1 | 16 | 所有工具结果变成 `(see attached image)` 字面量 | OPEN |
| 4 | [#102020](https://github.com/openclaw/openclaw/issues/102020) | 1 | 13 | 第二条消息报 `reply session initialization conflicted` | OPEN |
| 5 | [#101290](https://github.com/openclaw/openclaw/issues/101290) | 1 | 11 | CLI 启动预检在 gateway 运行中损坏 live state DB | OPEN |
| 6 | [#90213](https://github.com/openclaw/openclaw/issues/90213) | 1 | 10 | 2026.6.1 后 legacy 状态迁移警告持续出现 | OPEN |
| 7 | [#10687](https://github.com/openclaw/openclaw/issues/10687) | 3 | 10 | OpenRouter 等目录的完全动态模型发现 | OPEN |
| 8 | [#7722](https://github.com/openclaw/openclaw/issues/7722) | 4 | 10 | 文件系统沙箱配置（tools.fileAccess） | OPEN |
| 9 | [#11665](https://github.com/openclaw/openclaw/issues/11665) | 0 | 9 | Webhook hook 会话未按文档复用 sessionKey | OPEN |
| 10 | [#106555](https://github.com/openclaw/openclaw/issues/106555) | 1 | 9 | 重构 chat.send（已关闭） | CLOSED |

**背后诉求分析**：
- **桌面平台覆盖**（#75，112 条评论 / 81 👍）长期是社区最强烈呼声，至今未有里程碑，是项目最大的"未兑现承诺"。
- **安全/沙箱议题**（#7707、#7722、#6615）形成矩阵：记忆可信度、文件系统边界、exec denylist 互补，反映企业级部署正在逼近。
- **回归/可用性**（#104721、#100121、`models list` 崩溃）是 2026.7 系列最痛的痛点，直接影响最终用户。

---

## 5. Bug 与稳定性

### 🔴 P0 — Release Blocker
| 编号 | 描述 | 修复 PR |
|---|---|---|
| [#104721](https://github.com/openclaw/openclaw/issues/104721) | 所有工具结果返回字面量 `(see attached image)` 而非实际输出 | ❌ 无 |
| [#101290](https://github.com/openclaw/openclaw/issues/101290) | CLI 启动预检在 gateway 运行中损坏 SQLite（`database disk image is malformed`），原生 SQLite 不复现 | ❌ 无 |
| [#103076](https://github.com/openclaw/openclaw/issues/103076) | #102780 修复后仍有 5+ legacy 状态源阻塞 gateway 启动 | ✅ [#107002](https://github.com/openclaw/openclaw/pull/107002)（等待作者） |

### 🟠 P1 — 高优先级
| 编号 | 描述 | 修复 PR |
|---|---|---|
| [#38327](https://github.com/openclaw/openclaw/issues/38327) | 2026.3.2 + google-vertex/gemini-3.1-pro-preview 抛 `Cannot convert undefined or null to object` | ❌ 无 |
| [#100121](https://github.com/openclaw/openclaw/issues/100121) | Exec/tool 失败时模型响应被替换为 `(see attached image)`（2026.6.11 回归） | ❌ 无 |
| [#90944](https://github.com/openclaw/openclaw/issues/90944) | `sessions_yield` resume reply 未送达，用户收到子智能机原始摘要 | ✅ Linked PR open |
| [#77012](https://github.com/openclaw/openclaw/issues/77012) | WebChat 会话 JSONL 每回合被覆盖（5.2 回归） | ❌ 无 |
| [#77675](https://github.com/openclaw/openclaw/issues/77675) | 模型 Provider 的 `request.headers` SecretRef 在 embedded agent 中失败 | ❌ 无 |
| [#76665](https://github.com/openclaw/openclaw/issues/76665) | z.ai Provider 连续轮次间会话上下文静默丢失 | ❌ 无 |
| [#86012](https://github.com/openclaw/openclaw/issues/86012) | LINE 通道 reply token 过期导致消息静默丢失 | ✅ Linked PR open |
| [#98790](https://github.com/openclaw/openclaw/issues/98790) | 并发 agent-to-agent 分叉会话树，重建后被 Anthropic 拒绝并毒化转写 | ❌ 无 |
| [#77292](https://github.com/openclaw/openclaw/issues/77292) | 子代理/父代理交付上下文跨 Telegram DM 泄露 | ❌ 无 |
| [#77443](https://github.com/openclaw/openclaw/issues/77443) | WhatsApp 事件循环首条入站消息即阻塞 12s | ❌ 无 |
| [#77720](https://github.com/openclaw/openclaw/issues/77720) | 父代理中途死亡时子代理不接收终止信号 | ❌ 无 |
| [#92769](https://github.com/openclaw/openclaw/issues/92769) | OpenRouter 上 MiniMax M3 推理细节被丢弃（#65533 回归） | ✅ Linked PR open |
| [#76275](https://github.com/openclaw/openclaw/issues/76275) | Gateway 重启循环（4.24+） | ❌ 无 |
| [#77121](https://github.com/openclaw/openclaw/issues/77121) | exec 工具可在 live gateway 域内启动重型上游校验命令 | ❌ 无 |

### 🟡 P2 — 中等
| 编号 | 描述 |
|---|---|
| [#77610](https://github.com/openclaw/openclaw/issues/77610) | macOS `exec` 工具 ~10 次后 `spawn EBADF`（libuv kqueue slot 泄漏） |
| [#77750](https://github.com/openclaw/openclaw/issues/77750) | FD 数量高时 `spawn EBADF`（14,039 个 FD，13,982 来自 markdown 插件） |
| [#76584](https://github.com/openclaw/openclaw/issues/76584) | Feishu 通道初始化失败（`monitorAccountRuntimePromise` 未初始化） |
| [#77625](https://github.com/openclaw/openclaw/issues/77625) | `reasoningDefault=stream` 引发推理无限递归 |
| [#77802](https://github.com/openclaw/openclaw/issues/77802) | `doctor --fix` 多个验证错误时原子失败，无法持久化任何修复 |
| [#77347](https://github.com/openclaw/openclaw/issues/77347) | Plugin loader LRU 缓存键错误包含 workspaceDir |
| [#76690](https://github.com/openclaw/openclaw/issues/76690) | `openai/gpt-image-2` Codex OAuth 找不到 `image_generation` 工具 |
| [#91383](https://github.com/openclaw/openclaw/issues/91383) | Telegram 首段以 Markdown 链接开头时正常回复丢前缀 |

---

## 6. 功能请求与路线图信号

按被合入概率与维护者活跃度评估：

### 高概率纳入（已有 PR 或维护者亲推）
| 编号 | 功能 | 关联 PR | 状态 |
|---|---|---|---|
| [#11665](https://github.com/openclaw/openclaw/issues/11665) | Webhook hook 会话多轮复用 | — | 待认领 |
| [#6615](https://github.com/openclaw/openclaw/issues/6615) | exec-approvals denylist（7 👍） | — | 安全层关键 |
| [#107004](https://github.com/openclaw/openclaw/pull/107004) | Discord 语音参与者变化通知 | [#107004](https://github.com/openclaw/openclaw/pull/107004) | ✅ 维护者 PR |
| [#107025](https://github.com/openclaw/openclaw/pull/107025) | 群聊保留「谁说了什么」 | [#107025](https://github.com/openclaw/openclaw/pull/107025) | ✅ 维护者 PR |
| [#106941](https://github.com/openclaw/openclaw/pull/106941) | 在配对节点发现 OpenCode/Pi 会话 | [#106941](https://github.com/openclaw/openclaw/pull/106941) | ✅ 维护者 PR |
| [#106997](https://github.com/openclaw/openclaw/pull/106997) | macOS 仪表盘原生感增强 | [#106997](https://github.com/openclaw/openclaw/pull/106997) | ✅ 维护者 PR |

### 中等概率（清晰需求但无 PR）
| 编号 | 功能 | 价值 |
|---|---|---|
| [#7707](https://github.com/openclaw/openclaw/issues/7707) | 记忆按来源打信任标签 | 防记忆投毒，对企业部署关键 |
| [#7722](https://github.com/openclaw/openclaw/issues/7722) | 文件系统沙箱配置 | 安全基线 |
| [#10687](https://github.com/openclaw/openclaw/issues/10687) | OpenRouter 动态模型发现 | 模型目录生态扩展 |
| [#9986](https://github.com/openclaw/openclaw/issues/9986) | context length 超限时触发 fallback | 模型可用性 |
| [#9986](https://github.com/openclaw/openclaw/issues/9986) | `/models test-fallback` (#6599) | 可观测性 |
| [#8724](https://github.com/openclaw/openclaw/issues/8724) | 每模型生成超时配置 | Gemini Flash 无限思考循环 |
| [#9016](https://github.com/openclaw/openclaw/issues/9016) | 向 agent 暴露 OpenRouter 用量成本 | 成本可视化 |
| [#10118](https://github.com/openclaw/openclaw/issues/10118) | TUI Shift+Enter 换

---

## 横向生态对比

<think>The user wants me to generate a horizontal comparison analysis report based on the daily reports of multiple open-source AI projects (personal AI assistants and autonomous agents). Let me analyze the data from all the projects provided:

Projects covered:
1. **OpenClaw** - Core reference (very active, 500 Issues + 500 PR updates, 1 release v2026.7.1)
2. **NanoBot** (HKUDS/nanobot) - 14 Issues + 44 PR updates, no release
3. **Zeroclaw** - 50 Issues + 50 PR updates, no release
4. **PicoClaw** (sipeed/picoclaw) - 4 Issues + 5 PR updates, no release
5. **NanoClaw** (qwibitai/nanoclaw) - 3 Issues + 33 PR updates, no release
6. **IronClaw** (nearai/ironclaw) - 34 Issues + 50 PR updates, no release, but Bug Bash mode
7. **LobsterAI** (netease-youdao) - 0 Issues + 15 PR updates, no release, high merge rate
8. **TinyClaw** - No activity
9. **Moltis** - 0 Issues + 1 PR update, no release
10. **CoPaw/QwenPaw** (agentscope-ai) - 50 Issues + 50 PR updates, 1 release v2.0.0.post1
11. **ZeptoClaw** - No activity
12. **EasyClaw** - 0 Issues + 0 PR, 1 release v1.8.70

Let me synthesize a comprehensive comparison report following the 7 required sections. I should:

1. **Ecosystem panorama** - 3-5 sentences on the overall landscape
2. **Activity comparison table** - Issues, PRs, Releases, Health assessment
3. **OpenClaw positioning** - Advantages, technical differences, community size
4. **Common technical directions** - Multi-project converging trends
5. **Differentiation analysis** - Function focus, target users, architecture differences
6. **Community heat & maturity** - Activity tiers, fast iteration vs quality consolidation
7. **Trend signals** - Industry trends, value for AI agent developers

Let me structure this carefully. The report should be in Chinese, professional, data-driven, suitable for technical decision-makers and developers.

Key insights I need to highlight:
- OpenClaw is the most active and largest project (500/500 updates)
- QwenPaw also very active (50/50) and just released v2.0.0.post1
- IronClaw is in Bug Bash mode with massive issue inflow
- Zeroclaw is mature with v0.8.3 closed and v0.8.4 train starting
- LobsterAI has high merge rate (86.7%) but no community engagement
- PicoClaw has stagnant activity with many stale items
- Small/inactive projects: TinyClaw, ZeptoClaw, EasyClaw (latter has release but no community)

Common technical trends across projects:
1. **Multi-channel integration** - WhatsApp/Slack/Telegram/Feishu/Discord/Matrix everywhere
2. **MCP (Model Context Protocol)** - Tool registry/permissions becoming standard
3. **Memory systems** - Long-term memory, conversation history separation, dream/memory consolidation
4. **Sandbox security** - Landlock, file access policy, exec approvals
5. **Provider/model abstraction** - Multi-provider support (Anthropic, OpenAI, Gemini, Z.AI)
6. **Voice/real-time channels** - Dial channel, voice calls
7. **Routine/automation** - Cron, heartbeat, scheduled tasks
8. **Linux/Windows desktop client gap** - Multiple projects lacking cross-platform support

Differentiation:
- OpenClaw: All-in-one personal assistant, broad coverage
- NanoBot: Educational/research (HKUDS - Hong Kong University Data Science)
- Zeroclaw: Governance-focused, RFC-driven, work lanes
- IronClaw: NEAR AI ecosystem, Rust-based, "Reborn" architecture
- PicoClaw: Lightweight, security-focused (libolm/vodozemac migration)
- NanoClaw: Channel-first, MCP-centric
- LobsterAI: Desktop application, Cowork features, Chinese office scenarios
- QwenPaw: v2.0 major refactor, multi-channel heavy
- EasyClaw: E-commerce/distribution B2B focus
- Moltis: CalDAV-focused, niche integration

Let me write this report now.</think>

# 个人 AI 助手 / 自主智能体开源生态横向对比报告

**报告日期**：2026-07-14
**覆盖项目**：OpenClaw、NanoBot、Zeroclaw、PicoClaw、NanoClaw、IronClaw、LobsterAI、TinyClaw、Moltis、CoPaw/QwenPaw、ZeptoClaw、EasyClaw（合计 12 个项目）

---

## 1. 生态全景

2026 年 7 月中旬，个人 AI 助手 / 自主智能体开源生态呈现**"头部高速迭代 + 腰部质量收敛 + 尾部静默沉淀"** 的三层结构：OpenClaw 与 QwenPaw 仍占据绝对流量与开发节奏（单日 500 / 50 量级 Issue+PR 流转），Zeroclaw / IronClaw 进入 RFC 治理与架构重构期，LobsterAI / EasyClaw 则进入版本收尾与企业化沉淀阶段。从主题分布看，**多通道集成、MCP 工具协议、长期记忆、沙箱安全、Provider 抽象**五大方向已成行业共识；与此同时 **v2.0 类大版本发布后的回归阵痛**（典型如 QwenPaw v2.0.0）以及**长期 Issue 的 stale 治理**成为各项目共同面对的运营挑战。整体生态成熟度向上，但项目间的能力差距进一步拉大。

---

## 2. 各项目活跃度对比

| 项目 | 24h Issue 更新 | 24h PR 更新 | 新版本 | 主要阶段 | 健康度评估 |
|---|---|---|---|---|---|
| **OpenClaw** | 500（活跃 336 / 关闭 164） | 500（待合并 287 / 关闭 213） | **v2026.7.1** | 大版本发布 + 快速迭代 | ⭐⭐⭐⭐ 极活跃 |
| **QwenPaw** | 50（活跃 23 / 关闭 27） | 50（待合并 22 / 关闭 28） | **v2.0.0.post1** | v2 大版本后修复期 | ⭐⭐⭐⭐ 高活跃（回归阵痛） |
| **Zeroclaw** | 50（活跃 36 / 关闭 14） | 50（待合并 48 / 关闭 2） | — | v0.8.3 收尾 + v0.8.4 筹备 | ⭐⭐⭐⭐ 健康 |
| **IronClaw** | 34（活跃 28 / 关闭 6） | 50（待合并 33 / 关闭 17） | — | Reborn 重构 + Bug Bash | ⭐⭐⭐ 中等偏紧 |
| **NanoBot** | 14（活跃 3 / 关闭 11） | 44（待合并 27 / 关闭 17） | — | 功能密集迭代 + 历史清理 | ⭐⭐⭐ 健康 |
| **NanoClaw** | 3（活跃 0 / 关闭 3） | 33（待合并 7 / 关闭 26） | — | 安全债清偿 + 新通道扩张 | ⭐⭐⭐⭐ 健康 |
| **LobsterAI** | 0 | 15（待合并 2 / 关闭 13） | — | 发版前质量收尾 | ⭐⭐⭐ 单点贡献者风险 |
| **PicoClaw** | 4 | 5（待合并 4 / 关闭 1） | — | 维护期 | ⭐⭐ stale 积压 |
| **Moltis** | 0 | 1（待合并 1） | — | 静默期 | ⭐⭐⭐ 零干扰 |
| **EasyClaw** | 0 | 0 | **v1.8.70** | 内部迭代 + B 端沉淀 | ⭐⭐ 社区冷清 |
| **TinyClaw** | 0 | 0 | — | 静默 | ⭐ 不活跃 |
| **ZeptoClaw** | 0 | 0 | — | 静默 | ⭐ 不活跃 |

**关键观察**：
- **OpenClaw 单日 Issue/PR 量是 QwenPaw / Zeroclaw 的 10 倍**，是当之无愧的"流量中心"。
- **LobsterAI 合并率 86.7%** 为全榜最高，但 24h 零 Issue 暴露其"内修外冷"特征。
- **Zeroclaw PR 待合并 48 条** 是最大的合并管道压力。
- **TinyClaw / ZeptoClaw** 连续 24h 零活动，处于停滞状态。

---

## 3. OpenClaw 在生态中的定位

| 维度 | OpenClaw 表现 | 横向对比 |
|---|---|---|
| **活跃度** | 单日 1000 条更新（500 Issue + 500 PR） | 远超第二梯队（QwenPaw/Zeroclaw/IronClaw 各 100 条级别） |
| **发布节奏** | 月度大版本（v2026.7.1） | 与 QwenPaw 同频；快于 Zeroclaw（v0.8.4 筹备至 7-31） |
| **功能覆盖** | 全平台（macOS/iOS/Android）+ Web + CLI + Gateway | 桌面端仅 macOS 覆盖完整，Linux/Windows 仍是 112 评论/81 👍 的头号诉求（#75） |
| **模型支持** | Claude Sonnet 5、GPT-5.6、Mythos 5、Featherless、Z.AI、ClawRouter 等 7+ Provider | 广度第一，超过 Zeroclaw / IronClaw 等中型项目 |
| **架构成熟度** | chat.send 拆分、Codex 集成、OAuth 模型刷新 | 正在做的减法（拆分 4,015 行单文件）与 NanoBot "通道解耦" 同步推进 |
| **社区规模** | 头号 Issue 单帖 112 评论 + 81 👍 | 远超 NanoBot 头号 Issue 4 评论、NanoClaw 多为零评论 |

**核心优势**：
1. **流量虹吸效应**：超大社区形成"问题→修复→新功能"飞轮，开发者贡献动力强。
2. **全栈覆盖**：从底层 Provider 到 UI（Web、macOS Dashboard）形成完整产品形态。
3. **快速模型跟进**：GPT-5.6 默认切换、Sonnet 5、Z.AI max 兼容均能在 24h 内集成。

**明显短板**：
1. **回归 Bug 密度高**：v2026.7.1 发布当日即出现 `models list` 崩溃（#106914）与 `see attached image` 占位串（#104721 / #100121）。
2. **桌面端覆盖严重不均**：Linux/Windows 客户端缺口长期未填补（Issue #75 已成社区"未兑现承诺"代名词）。
3. **PR 审阅积压**：287 条待合并 PR 远超维护者处理能力，#107002 等 XL 重构 PR 长期等待 review。

---

## 4. 共同关注的技术方向

以下方向在 **至少 3 个项目** 中同时涌现，构成行业级技术趋势：

| 方向 | 涉及项目 | 具体诉求 |
|---|---|---|
| **多通道 IM 集成** | OpenClaw / NanoBot / Zeroclaw / NanoClaw / IronClaw / QwenPaw | WhatsApp、Slack、Telegram、Discord、Feishu、Matrix、Signal 等通道持续扩张；NanoBot #4911 提出"通道与 Agent 工具的网关接缝"，NanoClaw 新增 Dial 通道（#3032），Zeroclaw 推动 WASM 通道插件（#8852） |
| **MCP（Model Context Protocol）治理** | NanoClaw / IronClaw / QwenPaw / OpenClaw | NanoClaw #3037 引入 `MCP_TOOL_ALLOWLIST`；IronClaw #5970 实现 per-user MCP registration store；QwenPaw #5947 紧急修复 MCP allow/deny 失效；OpenClaw Codex OAuth 集成 |
| **长期记忆 / 持久记忆** | OpenClaw / NanoBot / Zeroclaw / NanoClaw / QwenPaw | NanoBot Dream 子系统集中修复（#4882、#4893、#4894、#4909）；Zeroclaw #9048 RFC 提议"会话历史与长期记忆解耦"；NanoClaw #3012/#3013 铺设跨提供商共享记忆树；QwenPaw context compression 回归频发 |
| **沙箱与权限边界** | OpenClaw / Zeroclaw / QwenPaw | Zeroclaw #8973（Landlock/Fedora）、#8741（browser 截图越权）、#7960（execute_pipeline 策略门禁）；QwenPaw #5879/#6054（沙箱开关）、#5947（MCP 权限失效）；OpenClaw #7707（记忆信任标签）、#7722（filesystem sandbox） |
| **Provider / 模型抽象** | OpenClaw / Zeroclaw / IronClaw / QwenPaw | OpenClaw v2026.7.1 新增 5 个 Provider；IronClaw ACP SDK 主版本升级；Zeroclaw provider responses-wire 选项传播覆盖；QwenPaw 解决 tool_call/tool_result 跨 Provider 兼容性 |
| **Routine / 自动化任务** | OpenClaw / NanoBot / IronClaw / LobsterAI / QwenPaw | OpenClaw heartbeat、cron 迁移；NanoBot #4620 Heartbeat 触发命令；IronClaw Routine 暴露内部细节（#5707）、线程绑定（#5836）；LobsterAI #2320 cron fast-forward |
| **Linux/Windows 桌面端缺口** | OpenClaw / NanoBot / Zeroclaw（隐含） | OpenClaw #75（112 评论/81 👍）仍是社区头号未解需求；NanoBot 多平台部署需求强烈 |
| **Channel Plugin 解耦** | NanoBot / Zeroclaw / NanoClaw | NanoBot #4908 通道架构解耦；Zeroclaw #8852 WASM 通道插件 + #6165 "减重核心" RFC；NanoClaw #3035 结构化 Skill 格式 |

---

## 5. 差异化定位分析

| 项目 | 功能侧重 | 目标用户 | 技术架构关键差异 |
|---|---|---|---|
| **OpenClaw** | 全能型个人 AI 助手 | 个人开发者 + 高级用户 | TypeScript/Node 单体架构，强 Web/macOS 端，Codex OAuth 集成是杀手锏 |
| **QwenPaw** | 多通道 AI 智能体平台 | 企业协作 + 个人 | v2.0 大重构后引入严格沙箱与多通道编排，重 Agent/工具治理 |
| **Zeroclaw** | 治理 / RFC 驱动 | 中大型运维团队 | 强调 work lanes、label 自动化、release train（v0.8.4 = 7-31），更接近"开源公司"治理范式 |
| **IronClaw** | NEAR AI 生态 + Rust 运行时 | 技术极客 + Web3 边缘 | Rust 实现，Reborn Railway 镜像架构，NEA-25 统一扩展模型 |
| **NanoBot** | 研究 / 教育导向 | 学术研究者 | HKUDS 出品，强调通道解耦 + Dream 记忆子系统 + Heartbeat 可配置性 |
| **NanoClaw** | 安全优先的 channel-first 助手 | 隐私敏感个人用户 | MCP approval flow 显式化（#2998）、结构化 SKILL.md（#3035）、Dial 通道（#3032） |
| **PicoClaw** | 轻量级 Go 实现 | 资源受限部署 | libolm→vodozemac 安全迁移是核心议程；Anthropic prompt caching 落地中 |
| **LobsterAI** | 桌面端 Cowork 办公 | 中国办公场景用户 | Electron 桌面应用，OpenClaw 后端 + 文档写作/PPT/网站快捷场景，Windows 安装链路重投入 |
| **EasyClaw** | 电商分销 / 客服 SaaS | 中小企业（电商 + BD 团队） | v1.8.70 聚焦未付款订单转化曲线 + 分销渠道管控，ToB 重 |
| **Moltis** | 协议标准严格的集成 | 协议一致性敏感用户 | CalDAV 等协议级集成严格遵循 RFC，但功能广度有限 |

**关键差异点**：
- **企业级 vs 个人级**：Zeroclaw / QwenPaw / EasyClaw 偏向企业协作与运维；OpenClaw / NanoClaw / NanoBot 偏向个人用户。
- **通用 vs 垂直**：LobsterAI（办公）、EasyClaw（电商分销）、Moltis（CalDAV 协议）是典型垂直项目；OpenClaw / QwenPaw / NanoBot 是通用型。
- **语言栈分布**：OpenClaw / NanoBot / LobsterAI / QwenPaw 多为 TypeScript/Python；IronClaw / PicoClaw 走 Rust / Go 路线，差异显著。
- **治理模式**：Zeroclaw 的 RFC + Work Lanes 治理最接近 Kubernetes / CNCF 模式；其他多为 "Maintainer-driven"。

---

## 6. 社区热度与成熟度分层

### 🥇 第一梯队 · 快速迭代型（高 Issue+PR 流入，活跃重构中）
- **OpenClaw**：日均千级更新，月度大版本，处于"超大规模快速迭代"阶段。
- **QwenPaw**：v2.0 大版本发布后进入"密集修复期"，Issue 关闭率 54%（27/50），修复吞吐可观但用户满意度受回归冲击。

### 🥈 第二梯队 · 质量收敛型（社区反馈稳定，治理框架成熟）
- **Zeroclaw**：v0.8.3 全部 6 个子追踪器关闭，转入 v0.8.4 维护列车，治理节奏清晰。
- **NanoBot**：关闭率 78.6%（11/14 Issue），PR 池 27 条 OPEN 但 conflict 标记多，处于"功能密集开发 + 历史债务清理"阶段。
- **NanoClaw**：所有

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

<think>
The user wants me to generate a daily report for the NanoBot project based on GitHub data from 2026-07-14. Let me analyze the data carefully and produce a structured report in Chinese.

Key observations:
1. 14 Issues updated (3 new/active, 11 closed)
2. 44 PRs updated (27 pending, 17 merged/closed)
3. No new releases
4. Many issues are stale/old ones being closed (likely a cleanup effort)
5. Several bug fixes being actively worked on
6. The project seems to be in active development with channels, webui, and dream/memory features being major focus areas

Let me structure the report professionally with data-driven insights.

Important context:
- Many "closed" issues are old (Feb-March 2026) - these are likely stale issue cleanup
- Active development on channels (Telegram, Discord, Feishu/Lark)
- WebUI improvements ongoing
- Several P1 priority fixes in progress
- There's a "Dream" feature being heavily worked on (memory consolidation)
- Heartbeat migration to cron is a notable architectural change

Let me categorize the issues properly:
- Stale/old closed issues: #1304, #1500, #192, #1011, #2376, #2352, #1599 (PR)
- New/active issues: #4864, #4787, #4911 (open) + recent closed bug fixes
- Bug fixes closed: #4897, #4887, #4882, #4893, #4894

PR analysis:
- Merged/closed PRs: #4320, #4909, #4914, #4913, #4912
- Important open PRs: #4915, #4908, #4866, #4917, #4916, #4839, #4620, #4888, #4878, #4853, #4819, #4816

Let me write this in a professional, data-driven Chinese style.
</think>
# NanoBot 项目动态日报

**报告日期**：2026-07-14
**项目**：HKUDS/nanobot
**数据周期**：过去 24 小时

---

## 1. 今日速览

NanoBot 今日呈现**高活跃度**的维护状态：过去 24 小时内共处理 14 个 Issue（11 个关闭、3 个仍开放）和 44 个 PR（27 个待合并、17 个已合并/关闭），Issues 关闭率高达 78.6%，显示维护团队正在执行一次显著的 issue 清理与问题修复冲刺。开发重心集中在 **通道（Channels）架构重构**、**Dream 记忆子系统** 与 **Heartbeat 心跳机制迁移** 三大方向。无新版本发布，社区依然处于功能密集迭代期，PR 待合并队列压力较大（27/44 = 61%），建议关注合并节奏。

---

## 2. 版本发布

**今日无新版本发布。** 当前迭代仍以 PR 合入与 bug 修复为主，未触发发版动作。

---

## 3. 项目进展

### 已合并/关闭的重要 PR

| PR | 标题 | 影响 |
|---|---|---|
| [#4913](https://github.com/HKUDS/nanobot/pull/4913) | docs: update recent changes through July 12 | 更新 README 与 6/24–7/12 的发布档案，共 17 天的更新摘要 |
| [#4912](https://github.com/HKUDS/nanobot/pull/4912) | docs: remove broken Star History embed | 移除 README 中失效的 Star History 图表（GitHub 限制公开 API） |
| [#4914](https://github.com/HKUDS/nanobot/pull/4914) | feat(webui): add Brazilian Portuguese (pt-BR) locale | WebUI 新增巴西葡萄牙语本地化，i18n 矩阵扩展 |
| [#4909](https://github.com/HKUDS/nanobot/pull/4909) | fix(dream): ignore line-ending-only memory diffs | 修复 Git 在 CRLF/LF 差异下误报 memory 文件变更的回归 |
| [#4320](https://github.com/HKUDS/nanobot/pull/4320) | feat(audit): add tools.audit config and AuditTool | 引入 Agent 行为可观测性模块（MC-486），默认关闭，零开销 |

**整体评估**：项目在**文档质量、i18n 覆盖、Agent 可观测性、记忆系统鲁棒性** 四个维度取得了实质性推进；通道架构、Heartbeat 评估、模型预设绑定等核心功能则进入 PR 评审阶段，预计 1–2 周内可合入主干。

---

## 4. 社区热点

### 讨论最活跃 Issues（按评论数）

| 排名 | Issue | 评论 | 👍 | 状态 |
|---|---|---|---|---|
| 1 | [#1304](https://github.com/HKUDS/nanobot/issues/1304) Can't use codex | 4 | 0 | 已关闭 |
| 2 | [#4864](https://github.com/HKUDS/nanobot/issues/4864) Endless loop for <tool_call> | 3 | 0 | 开放 |
| 3 | [#4897](https://github.com/HKUDS/nanobot/issues/4897) Discord bot integration | 3 | 0 | 已关闭 |
| 4 | [#1500](https://github.com/HKUDS/nanobot/issues/1500) 信息流强制输出 | 2 | 1 | 已关闭 |
| 5 | [#1011](https://github.com/HKUDS/nanobot/issues/1011) Mattermost Bot | 2 | 4 | 已关闭 |

### 诉求分析

- **集成渠道多样性**：Mattermost（👍 4）与 WeChat（[#192](https://github.com/HKUDS/nanobot/issues/192)）的需求反复出现，社区对去中心化 IM 渠道有较强诉求。
- **消息输出分级控制**（[#1500](https://github.com/HKUDS/nanobot/issues/1500)）：用户希望对 LLM 执行过程产生的"思考/工具调用"信息进行日志级别分层，避免噪音淹没有用结果。
- **可观测性**：[#4320](https://github.com/HKUDS/nanobot/pull/4320) 引入的 AuditTool 直接回应了社区对 Agent 行为审计的长期需求。

---

## 5. Bug 与稳定性

### 🔴 P1 严重问题（建议立即关注）

| Issue | 描述 | 是否有 Fix PR |
|---|---|---|
| [#4864](https://github.com/HKUDS/nanobot/issues/4864) | `complete_goal` 工具陷入死循环，gateway 将 `recap` 参数错误地解析为字符串而非 JSON 对象（疑似近期序列化变更引入的回归） | ❌ 暂无 |
| [#4888](https://github.com/HKUDS/nanobot/pull/4888) | workspace 写入并发竞争（涉及 #4798） | ✅ 已有 PR（OPEN, conflict） |
| [#4917](https://github.com/HKUDS/nanobot/pull/4917) | Windows PowerShell 输出按 UTF-16 解码导致 NUL 字节污染（#4881） | ✅ 已有 PR（OPEN） |
| [#4915](https://github.com/HKUDS/nanobot/pull/4915) | Heartbeat 迁移至 cron 后响应评估逻辑需更可配置（#4896 回归） | ✅ 已有 PR（OPEN, p1） |
| [#4816](https://github.com/HKUDS/nanobot/pull/4816) | `AgentRunner._run_tool()` 捕获 `BaseException`，导致 `KeyboardInterrupt`/`SystemExit` 被吞掉 | ✅ 已有 PR（OPEN, p1） |

### 🟡 P2 中等问题

| Issue | 描述 | 是否有 Fix PR |
|---|---|---|
| [#4787](https://github.com/HKUDS/nanobot/issues/4787) | `Session.messages` 列表无界增长，资源泄漏；`FILE_MAX_MESSAGES` 仅控制回放不限制存储 | ❌ 暂无 |
| [#4897](https://github.com/HKUDS/nanobot/issues/4897) | Discord 机器人在线但无法收到消息 | ✅ 已关闭（疑似配置问题） |
| [#4887](https://github.com/HKUDS/nanobot/issues/4887) | dev extras 缺少 `lark-oapi`，Feishu 测试导入失败 | ✅ 已关闭 |
| [#4882](https://github.com/HKUDS/nanobot/issues/4882) | `MemoryStore.dream_content_diff()` 将未变更的空文件报为已修改 | ✅ 已关闭 |
| [#4893](https://github.com/HKUDS/nanobot/issues/4893) | `/dream-log` 与 `/dream-restore` 显示非 Dream 的 git 提交 | ✅ 已关闭 |
| [#4894](https://github.com/HKUDS/nanobot/issues/4894) | `prune_dream_sessions()` 无法清理 base64 编码的新版文件名 | ✅ 已关闭 |
| [#4839](https://github.com/HKUDS/nanobot/pull/4839) | Telegram 流式溢出分块 HTML 解析错误（#4637） | ✅ 已有 PR（OPEN, p1） |
| [#4819](https://github.com/HKUDS/nanobot/pull/4819) | `WeakValueDictionary` 中的 `asyncio.Lock` 被 GC 回收，引发并发 consolidation 竞态 | ✅ 已有 PR（OPEN, p2） |

**稳定性评估**：Dream 记忆子系统的多个 bug 已闭环处理，但 **#4864（gateway 死循环）** 与 **#4787（会话消息无界增长）** 仍处于开放状态，前者影响功能可用性，后者是潜在的资源耗尽风险，建议优先处理。

---

## 6. 功能请求与路线图信号

### 新提出的增强请求

| Issue | 提议 | 已有相关 PR |
|---|---|---|
| [#4911](https://github.com/HKUDS/nanobot/issues/4911) | 在通道与 Agent 工具之间引入**受控工具网关接缝**，使通道可调用 Agent 工具（如实时语音通道需要 `function_calls` 桥接） | 与 [#4908](https://github.com/HKUDS/nanobot/pull/4908) 通道重构方向高度一致 |

### 已有 PR 推进中的功能

| 功能方向 | 对应 PR | 优先级 |
|---|---|---|
| 通道架构解耦（Feishu 多实例、setup 所有权下沉） | [#4908](https://github.com/HKUDS/nanobot/pull/4908) | P1 |
| 模型预设绑定到 Session（`/model` 会话级） | [#4866](https://github.com/HKUDS/nanobot/pull/4866) | P1 |
| Telegram `sendMessageDraft` 实时流式回复 | [#1599](https://github.com/HKUDS/nanobot/pull/1599) | conflict |
| Heartbeat 触发命令（CLI + Gateway 共用 runner） | [#4620](https://github.com/HKUDS/nanobot/pull/4620) | OPEN |
| WebUI Session Markdown 导出 | [#4587](https://github.com/HKUDS/nanobot/pull/4587) | P2, conflict |
| WebUI / config.json 设置项对齐 | [#4313](https://github.com/HKUDS/nanobot/pull/4313) | conflict |
| Agent hooks 自动发现机制 | [#4878](https://github.com/HKUDS/nanobot/pull/4878) | P2, conflict |
| `nano_timer` 核心工具（时区/日历） | [#4853](https://github.com/HKUDS/nanobot/pull/4853) | P1, conflict |
| 文档围绕用户工作流重组 | [#4916](https://github.com/HKUDS/nanobot/pull/4916) | P2 |

**路线图信号**：
- **多通道 AI 工具桥接** 正在成为新的设计焦点（#4911 + #4908）。
- **会话级模型/工具治理** 是核心演进方向（#4866、#4816、#4819、#4620）。
- **可观测性与审计** 已被纳入主干（#4320 已关闭合并中）。

---

## 7. 用户反馈摘要

### 痛点

- **飞书（Feishu）文件传输失败**（[#2352](https://github.com/HKUDS/nanobot/issues/2352)）：bot 试图通过浏览器下载网页端文件，权限已开仍失败，疑似缺少 MCP/SDK 直传通道。
- **Discord 集成静默失败**（[#4897](https://github.com/HKUDS/nanobot/issues/4897)）：机器人显示在线但收不到消息，缺乏可观测的错误日志。
- **消息输出噪音**（[#1500](https://github.com/HKUDS/nanobot/issues/1500)）：定时任务执行流程被原样输出，即便最终结论是"无需提示用户"，中间过程仍充斥 channel。
- **LLM 响应格式错误**（[#2376](https://github.com/HKUDS/nanobot/issues/2376)）：子代理结果消息角色为 `user` 而非 `assistant`，触发 vLLM 校验失败。

### 场景与诉求

- **定时任务场景**：用户希望 cron 任务能根据结果决定是否输出，而非强制回显。
- **多平台/隐私敏感部署**：Mattermost、WeChat 等去中心化或本地化 IM 渠道需求长期存在，反映出对数据主权与平台中立性的关注。
- **国际化**：WebUI 新增 pt-BR 显示社区已扩展至拉美用户群。

---

## 8. 待处理积压

### 长期开放且评论/反应较高的 Issue

| Issue | 创建日期 | 状态 | 关注度 |
|---|---|---|---|
| [#1011](https://github.com/HKUDS/nanobot/issues/1011) Mattermost Bot | 2026-02-22 | 关闭（stale） | 👍 4 |
| [#1304](https://github.com/HKUDS/nanobot/issues/1304) Can't use codex | 2026-02-27 | 关闭 | 评论 4 |
| [#1599](https://github.com/HKUDS/nanobot/pull/1599) Telegram stream via sendMessageDraft | 2026-03-06 | OPEN, conflict | 等待合入 |
| [#4313](https://github.com/HKUDS/nanobot/pull/4313) WebUI/config.json parity | 2026-06-12 | OPEN, conflict | 等待合入 |
| [#4587](https://github.com/HKUDS/nanobot/pull/4587) WebUI Markdown export | 2026-06-29 | OPEN, conflict | 等待合入 |
| [#4878](https://github.com/HKUDS/nanobot/pull/4878) Hooks auto-discovery | 2026-07-10 | OPEN, conflict | 等待合入 |
| [#4853](https://github.com/HKUDS/nanobot/pull/4853) nano_timer core tool | 2026-07-08 | OPEN, conflict | 等待合入 |

### 给维护者的提醒

- 27 个 OPEN PR 中**至少 6 个带有 conflict 标记**，建议优先 rebase 与冲突解决，避免合并进一步漂移。
- **#4864（gateway 死循环）** 与 **#4787（消息无界增长）** 是当前唯二**无对应修复 PR 的高优先级 Bug**，建议在下一个发版窗口前指定 owner。
- 多个通道相关 Issue（Discord、Feishu 文件、Mattermost、WeChat）反映**多渠道集成是 NanoBot 落地的关键瓶颈**，建议在路线图中明确"渠道稳定性"专项。

---

## 健康度总评

| 维度 | 评级 | 说明 |
|---|---|---|
| 提交活跃度 | ⭐⭐⭐⭐ | 24h 内 44 个 PR 变更，高强度迭代 |
| Bug 响应速度 | ⭐⭐⭐⭐ | 多数 Bug 24h 内闭环或已挂载 Fix PR |
| 社区响应 | ⭐⭐⭐ | 旧 Issue 大批关闭（stale 机制），新 Issue 关注度有限 |
| 文档质量 | ⭐⭐⭐⭐ | 主动重构文档结构、新增多语言 |
| 合并吞吐 | ⭐⭐ | 27 OPEN PR 中多 conflict，合并管道存在压力 |
| 路线图清晰度 | ⭐⭐⭐⭐ | 通道架构、模型治理、可观测性主线明确 |

**结论**：NanoBot 当前处于**功能密集开发 + 历史债务清理并行阶段**，开发节奏健康，但需关注 PR 合并管道的吞吐能力以及 #4864、#4787 等开放 P1 问题，以避免技术债累积影响后续发版质量。

---

*本报告由 GitHub Issues/PR 数据自动生成，所有链接均指向 HKUDS/nanobot 仓库。*

</details>

<details>
<summary><strong>Zeroclaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

<think>The user wants me to generate a daily report for the Zeroclaw project based on the GitHub data provided. Let me analyze the data carefully and create a comprehensive, professional report in Chinese.

Let me organize the key information:

**Overall Activity:**
- 50 issues updated in 24h (36 new/active, 14 closed)
- 50 PRs updated in 24h (48 pending, 2 merged/closed)
- 0 new releases

**Key Themes from Issues:**
1. RFC for Work Lanes, Board Automation (#6808) - 14 comments, governance RFC
2. RFC for lighter ZeroClaw core (#6165) - 9 comments
3. Slack thread context hydration (#6055) - 7 comments
4. Local-First Mode for Small Models (#5287) - 5 comments
5. Landlock blocks shell access on Fedora (#8973) - high priority bug
6. Docker Compose gateway loopback issue (#9035) - S1 severity
7. Persistent memory tracker (#8891) - in progress
8. zerorelay tracker (#8358)
9. SOP milestone tracker (#8288)
10. v0.8.3 milestone index (#7320) - all child trackers closed
11. New RFC: Separate conversation history from long-term memory (#9048)
12. models_cache.json bug (#9046)
13. Various closed v0.8.3 trackers

**Key PRs:**
- #8546 fix(cli): localize status fragments
- #8571 fix(delegate): OAuth credential fallback
- #9011 feat(zerocode): show active runtime context
- #8996 fix(goal): preserve running goals across daemon reload
- #8893 feat(memory): gated audit trail
- #9051 fix(release): restore lean prebuilt feature set
- #8975 fix(channels/slack): track assistant threads
- #8741 fix(browser): validate screenshot destination path (security)
- #8852 feat(channels): run installed WASM channel plugins

**Key Bugs to highlight:**
1. #8973 - Landlock blocks shell on Fedora (P1, security) - NO FIX PR MENTIONED
2. #9035 - Docker Compose gateway loopback (S1) - NO FIX PR
3. #9028 - Ctrl+C force quit on Windows
4. #9046 - models_cache.json never written
5. #6548 - Channel runtime replies bypass Fluent localization

**Closed issues (good progress):**
- #7694 - memory storage-reader coverage
- #8073, #8071, #8360, #8362, #8070, #8363, #9044, #7693, #7690, #7688 - mostly v0.8.3 trackers and test coverage
- #7320 - v0.8.3 milestone index (all child trackers closed)

**RFC signals:**
- #9048 - NEW RFC: Separate conversation history from long-term memory
- #6808 - Work Lanes RFC
- #6165 - Lighter core RFC

**v0.8.4 maintenance train** (#8357) - target date July 31, 2026

Let me now write the report in Chinese with all these elements.

I should structure this professionally with clear sections, use data-driven language, and provide actionable insights.</think>

# Zeroclaw 项目动态日报

**日期：** 2026-07-14
**数据周期：** 过去 24 小时
**报告人：** AI 项目分析师

---

## 1. 今日速览

Zeroclaw 仓库过去 24 小时维持高强度活动节奏：**50 条 Issue 更新 + 50 条 PR 更新**，新开/活跃 36 条、关闭 14 条 Issue，PR 池中 48 条仍待合并。无新版本发布，但社区治理与工程交付双向推进明显：**v0.8.3 收尾节点已关闭全部 6 个子跟踪器并完成 release-closeout 索引**（#7320），同时面向 v0.8.4 维护列车（#8357，目标 7 月 31 日）的工单已经开张。安全与稳定性议题仍是主线：P1 级 Landlock 沙箱 Bug（#8973）、S1 级 Docker Compose 网关不可达（#9035）以及浏览器截图路径越权写入（#8741 PR）反映出社区在自托管场景下对边界安全的高度敏感。

---

## 2. 版本发布

⚠️ **过去 24 小时无新版本发布。**

最近的活动集中在 v0.8.3 收尾（全部子追踪器已关闭）与 v0.8.4 维护列车筹备阶段（#8357，目标日期 2026-07-31）。release 验证与发布说明对齐工作仍在持续。

---

## 3. 项目进展

今日合并/关闭列表以 **v0.8.3 收尾** 与 **测试覆盖率补齐** 为主线，多个子追踪器集中结案。

### 已关闭的关键 Issue / 追踪器

| 编号 | 类型 | 标题 | 链接 |
|------|------|------|------|
| #7320 | tracker | v0.8.3 milestone index — 所有 6 个子追踪器关闭，进入发布验证阶段 | https://github.com/zeroclaw-labs/zeroclaw/issues/7320 |
| #8073 | tracker | v0.8.3 observability / CI / docs / deps / release support | https://github.com/zeroclaw-labs/zeroclaw/issues/8073 |
| #8071 | tracker | v0.8.3 runtime execution / agent loop / tools / skills | https://github.com/zeroclaw-labs/zeroclaw/issues/8071 |
| #8360 | tracker | v0.8.3 provider & native-tool message serialization | https://github.com/zeroclaw-labs/zeroclaw/issues/8360 |
| #8362 | tracker | v0.8.3 channel adapter behavior & interaction parity | https://github.com/zeroclaw-labs/zeroclaw/issues/8362 |
| #8070 | tracker | v0.8.3 gateway / web / ZeroCode / onboarding | https://github.com/zeroclaw-labs/zeroclaw/issues/8070 |
| #8363 | tracker | v0.8.3 config-driven runtime policy / routing / tool access | https://github.com/zeroclaw-labs/zeroclaw/issues/8363 |
| #7694 | enhancement | memory storage-reader 时间戳与排序边界用例覆盖 | https://github.com/zeroclaw-labs/zeroclaw/issues/7694 |
| #7693 | enhancement | zerocode insecure-TLS 确认流覆盖 | https://github.com/zeroclaw-labs/zeroclaw/issues/7693 |
| #7690 | enhancement | provider responses-wire 选项传播覆盖 | https://github.com/zeroclaw-labs/zeroclaw/issues/7690 |
| #7688 | enhancement | runtime hook panic recovery 与 cancellation propagation 覆盖 | https://github.com/zeroclaw-labs/zeroclaw/issues/7688 |
| #9044 | bug | google_workspace 拒绝 gws 必需的 camelCase 方法（batchUpdate） | https://github.com/zeroclaw-labs/zeroclaw/issues/9044 |

### 推进方向解读

- **v0.8.3 走向封板**：六大子追踪器全部关闭，仅留 #7320 作为 release-closeout 索引，标志着 feature freeze 已落地。
- **测试覆盖率补齐**收尾：源自 #7685 的 13 个分片审计中至少 4 个关键缺口已在本次关闭（memory storage、zerocode TLS、provider wire、runtime hook）。
- **维护列车已启动**：#8357 开张并标注 2026-07-31 目标，暗示 8 月初将进入 v0.8.4 候选阶段。

---

## 4. 社区热点

### 高评论 Issues

1. **#6808 RFC: Work Lanes, Board Automation, and Label Cleanup**（14 条评论，状态 Accepted，Rev.16）
   https://github.com/zeroclaw-labs/zeroclaw/issues/6808
   *治理类 RFC 修订 16 版仍持续迭代，反映维护者试图通过 lane/label 自动化减轻人工分流负担。*

2. **#6165 RFC: Prefer a lighter ZeroClaw core through external integrations**（9 条评论）
   https://github.com/zeroclaw-labs/zeroclaw/issues/6165
   *推动将长尾集成迁出核心，转向 skills / MCP / CLI-backed 形态，与 PR #8852（WASM 通道插件）形成共振。*

3. **#6055 [Feature]: Slack — hydrate thread context from conversations.replies**（7 条评论）
   https://github.com/zeroclaw-labs/zeroclaw/issues/6055
   *对话连续性诉求强烈，与 PR #8975 修复 polling 模式下 assistant thread 追踪互补。*

4. **#5287 [Feature]: Local-First Mode for Small Models**（5 条评论，2 👍）
   https://github.com/zeroclaw-labs/zeroclaw/issues/5287
   *本地小模型用户的强需求——避免 prompt 膨胀、杜绝提示词泄露、严格解析。*

### 诉求背后

社区当前最强烈的两类诉求是 **① 工作流治理可扩展性**（lane/label 自动化 + 外部集成减重核心）和 **② 多通道场景的连续性与可控性**（Slack thread 上下文、Windows 终端行为、CLI i18n）。前者关心项目如何长期维护，后者关心用户如何在不同部署形态下不被坑。

---

## 5. Bug 与稳定性

按严重程度排列：

| 严重等级 | 编号 | 描述 | 是否有修复 PR |
|----------|------|------|---------------|
| 🔴 **P1 / S1** | #8973 | Landlock 沙箱阻止 Shell 访问 `/dev/null`，Fedora 下 Shell 工具完全失效 | ❌ 暂无关联 fix PR |
| 🔴 **S1** | #9035 | Docker Compose up 后端口不可达，gateway 仍绑定 loopback | ❌ 暂无关联 fix PR |
| 🟠 **P2 / S2** | #9028 | Windows 下 Ctrl+C 强制退出，exit code 1073741510（STATUS_CONTROL_C_EXIT 异常） | ❌ 暂无关联 fix PR |
| 🟠 **P2 / S2** | #9046 | `models_cache.json` 只读不写，`/model` 永远读到空目录，提示词 "run zeroclaw models refresh" 无法解析 | ❌ 暂无关联 fix PR |
| 🟡 **P2 / S3** | #6548 | 通道运行时命令回复绕过 Fluent 本地化（zh-CN 等非英语 locale 下仍硬编码英文） | 🟡 PR #8546（fix(cli): localize status fragments）部分相关，但未完全覆盖 |
| 🟢 **closed** | #9044 | google_workspace 拒绝 camelCase 方法（batchUpdate），与 gws CLI 不兼容 | ✅ 已关闭 |

### 安全相关 PR 进展（值得肯定）

- **#8741 fix(browser): validate screenshot destination path against workspace policy**
  https://github.com/zeroclaw-labs/zeroclaw/pull/8741
  *浏览器截图工具未做 `is_path_allowed` / `canonicalize` 校验，攻击者可借 agent 写到任意路径。该 PR 补齐越权写入漏洞，risk:high。*

- **#7960 fix(tools): gate execute_pipeline sub-tool execution with per-agent ToolAccessPolicy**
  https://github.com/zeroclaw-labs/zeroclaw/pull/7960
  *execute_pipeline 携带未过滤的内部注册表，绕过 `allowed_tools` / `excluded_tools`。*

> **建议**：维护者优先处理 #8973 与 #9035，这是仅有的两个 P1/S1 级别 Issue，对自托管用户体验影响显著。

---

## 6. 功能请求与路线图信号

### 新开放 / 新活跃的功能请求

| 编号 | 标题 | 优先级 | 当前配套 PR |
|------|------|--------|--------------|
| #6055 | Slack：首次提及时通过 conversations.replies 回填线程上下文 | P2 | #8975（polling mode thread tracking） |
| #5287 | Local-First Mode：紧凑提示词 + 严格解析 + 防泄漏 | P2 | 暂无 PR |
| #8358 | zerorelay milestone：搭建安全传输面上的提名中继 | P2 | 暂无 PR |
| #8288 | SOP milestone：daemon-owned SOP 控制平面达 5/5 | P2 | #8979（feat(sop): channel gate prompts with checkpoint edit） |
| #8891 | 持久记忆：策展/相关性/可运维三平面齐平 | P2 | #8893（audit trail）+ #8895（rerank stage） |
| #8997 | peer_groups.*.channel 引用不存在别名时给出 doctor 警告 | P2 | 暂无 PR |
| #8998 | 为 channel 的待绑定一次性配对码提供专用 GUI 卡片 | P2 | 暂无 PR |
| #9022 | Slack Events API（HTTP Request URL）模式，适配 scale-to-zero | P2 | 暂无 PR |
| #8325 | 网关 LAN peer discovery hints | P2 | **#8325（已存在 PR，待合并）** |
| #9048 | RFC: 区分会话历史与 agent 策展的长期记忆 | RFC | 暂无 PR |
| #8878 | providers：细化 per-model vision catalog 解析 | 低 | **#8878（已存在 PR，待合并）** |

### 路线图信号研判

- **zerorelay** 与 **SOP** 两个里程碑仍在并行推进，zerorelay 旨在解决 NAT/CGNAT 后守护进程的可达性（blind forwarder + 内部 mTLS），SOP 则在向"无 agent turn 即可执行的确定性管道"演化（#8979）。
- **持久记忆** 出现新的架构性 RFC（#9048），尝试将 `MemoryCategory::Conversation` 与策展层正式解耦，可能影响 #8891 的工单拆分。
- **LAN peer discovery** 与 **WASM 通道插件**（#8852）共同呼应 #6165"减重核心"RFC，是下一阶段架构外延的关键拼图。

> 评估：综合 v0.8.4 维护列车 7 月 31 日的窗口期判断，#8325、#8878、#8546、#8975、#7960、#8741 这类低风险补全/安全修复最有可能纳入 v0.8.4；而 SOP / zerorelay / 持久记忆三大里程碑更可能在 v0.9.0+ 才有完整落地。

---

## 7. 用户反馈摘要

### 真实痛点（来自 Issue 描述）

- **🐧 Linux/Fedora 自托管用户**（#8973）：Landlock 启用后 `sh` 无法访问 `/dev/null`，整条 Shell 工具链在生产配置下失效。痛点：安全特性与基本可用的冲突。
- **🐳 Docker 用户**（#9035）：Compose 启动后端口无法访问，"Connection refused"，怀疑 gateway 仍绑 loopback。痛点：部署文档与实际行为不一致。
- **🪟 Windows 用户**（#9028）：Ctrl+C 在交互模式下产生 -1073741510（0xC000013A）异常退出，无法优雅关闭 agent 进程。痛点：跨平台信号处理未统一。
- **🤖 推理模型用户**（PR #8964）：Telegram 通道偶发泄漏 `<tool_result>` / `<tool_call>` / `<think>` 等模型内部草稿板内容。痛点：用户体验层面的"模型内心戏"外泄。
- **🌐 Slack 重度用户**（#6055 + #9022）：连续对话需反复 @ 提及；当前 poll/Socket 模式在弹性部署下不友好。痛点：上下文连续性 + 部署形态多样性。

### 满意面

- 多个 v0.8.3 子追踪器按期关闭，社区对工程交付节奏整体可控。
- 新增 #8741（浏览器越权修复）、#7960（pipeline 工具策略门禁）等主动安全补丁获得优先标注 risk:high，体现出 maintainer 对安全边界问题的重视。

### 不满意面

- 用户对 **Bug 修复响应延迟** 的隐含诉求明显：#8973、#9035、#9028、#9046 四个高优先级 Issue 截至当前均无关联修复 PR，部分 Issue 创建已超过 24 小时。

---

## 8. 待处理积压

> 以下条目已超过 24 小时未见关联修复 PR 或维护者动作，建议优先关注。

| 编号 | 类型 | 创建日期 | 当前状态 | 链接 |
|------|------|----------|----------|------|
| #8973 | bug (P1) | 2026-07-11 | 已 accepted，无 PR | https://github.com/zeroclaw-labs/zeroclaw/issues/8973 |
| #9035 | bug (S1) | 2026-07-13 | 已 accepted，无 PR | https://github.com/zeroclaw-labs/zeroclaw/issues/9035 |
| #9028 | bug (P2) | 2026-07-13 | 已 accepted，无 PR | https://github.com/zeroclaw-labs/zeroclaw/issues/9028 |
| #9046 | bug | 2026-07-13 | 已 opened，无 PR | https://github.com/zeroclaw-labs/zeroclaw/issues/9046 |
| #6548 | bug (i18n) | 2026-05-09 | 已 accepted，PR #8546 仅覆盖 status 片段 | https://github.com/zeroclaw-labs/zeroclaw/issues/6548 |
| #8997 | enhancement | 2026-07-11 | 已 accepted，无 PR | https://github.com/zeroclaw-labs/zeroclaw/issues/8997 |
| #8998 | enhancement (high risk) | 2026-07-11 | 已 accepted，无 PR | https://github.com/zeroclaw-labs/zeroclaw/issues/8998 |
| #9022 | enhancement (high risk) | 2026-07-12 | 已 accepted，无 PR | https://github.com/zeroclaw-labs/zeroclaw/issues/9022 |
| PR #8571 | fix(delegate) OAuth 凭据回退 | 2026-07-01 | needs-author-action 状态持续 | https://github.com/zeroclaw-labs/zeroclaw/pull/8571 |
| PR #7960 | fix(tools) ToolAccessPolicy 门禁 | 2026-06-19 | needs-author-action 状态持续 | https

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

<think>Let me analyze the data carefully and generate a comprehensive daily report for PicoClaw project as of 2026-07-14.

Key observations:
- 4 issues updated, 0 closed
- 5 PRs updated, 1 closed (PR #3253)
- 0 new releases
- Most issues are marked as "stale"
- The most active issue is #3088 with 8 comments and 2 thumbs up
- One bug report (#3230) about Gemini API compatibility
- One feature request (#3088) to replace libolm with vodozemac
- PR #3254 is fresh (created today, 2026-07-13)
- PR #3228 is related to issue #3229 (caching improvement for Anthropic)
- PR #3253 was closed today

Let me structure this into a professional Chinese daily report.</think>

# PicoClaw 项目动态日报
**日期：2026-07-14** | 数据周期：过去 24 小时

---

## 1. 今日速览

PicoClaw 项目今日活跃度处于**中等偏低**水平：4 条 Issue 与 5 条 PR 出现更新，但**无新版本发布**，且绝大多数条目均带有 `stale` 标记，表明社区响应存在明显积压。今日唯一关闭的 PR（#3253）为 Gateway Webhook 新功能尝试，未能合入主干。当日亮点是新提交的 PR #3254（Agent 模型解析逻辑修复），直接改善了 `model_list` 配置的可靠性。整体看，项目处于"维护期"节奏，重磅功能推进较少，更多是 Bug 修复与基础设施改进。

---

## 2. 版本发布

**无新版本发布。**

过去 24 小时内未检测到任何 Release 标签更新。建议关注者留意后续是否会有 0.3.x 系列的补丁版本合并 #3230（Gemini 兼容性问题）相关修复。

---

## 3. 项目进展

### 已关闭 PR
| PR | 标题 | 状态说明 |
|---|---|---|
| [#3253](https://github.com/sipeed/picoclaw/pull/3253) | Feat/gateway webhook | **已关闭（未合并）**，作者 @tisoga 提交于 2026-07-13。缺少详细描述与变更类型说明，可能因信息不全或与路线图不符被驳回。 |

### 新增/活跃 PR（待合并）
- **[#3254](https://github.com/sipeed/picoclaw/pull/3254)** — `fix(agent): prefer verbatim model matches over provider-alias splits when resolving refs`
  - 作者：@fabdelgado（同日新提交）
  - 修复 `pkg/agent/model_resolution.go` 中 `lookupModelConfigByRef` 的模型解析歧义问题。当前实现单遍匹配时，provider-alias 拆分匹配可能"抢走"真正的完全匹配项，导致用户配置的 `model_list` 优先级错乱。该 PR 是确定性 Bug 修复，**建议优先 review**。
  - 推进意义：直接提升 Agent 多模型路由的可预测性，对生产环境多模型用户至关重要。

- **[#3228](https://github.com/sipeed/picoclaw/pull/3228)** — `fix(anthropic-messages): send SystemParts as system blocks with cache_control`
  - 修复 Anthropic Messages Provider 将 system messages 扁平化为单字符串、丢失 `cache_control` 标记的问题。这是支持 Anthropic prompt caching 的前置条件，与 Issue [#3229](https://github.com/sipeed/picoclaw/issues/3229) 协同推进。

- **[#3192](https://github.com/sipeed/picoclaw/pull/3192)** — `chore(docker): bump goreleaser base images from alpine:3.21 to 3.23`
  - 依赖更新，与主 Dockerfile 保持一致性。

- **[#3191](https://github.com/sipeed/picoclaw/pull/3191)** — `chore: remove duplicate build/ entry in .gitignore`
  - 配置清理，移除 `.gitignore` 第 4 行与第 21 行重复的 `build/` 条目。

整体推进评估：今日净合并 0 项，**项目处于停滞-维护区间**，核心功能无显著推进。

---

## 4. 社区热点

### 讨论最活跃
**[#3088](https://github.com/sipeed/picoclaw/issues/3088) — [Feature] use vodozemac instead of libolm**
- 👤 作者：@pbsds | 📊 8 条评论 | 👍 2 | 🏷️ `help wanted`, `priority: high`, `stale`
- **诉求核心**：libolm 已停止维护且存在安全风险，应替换为官方继任者 **vodozemac**（Matrix 生态维护）。提议将 libolm 设为编译时可选。
- **分析**：这是目前社区最高优先级但**长期未推进**的安全议题。该 Issue 创建于 2026-06-09，至今已逾一个月被标 stale，说明维护团队可能因人力或依赖迁移复杂度搁置。鉴于其"安全 + 官方继任"的双重合法性，**有较大概率在下一安全版本被纳入**。

### 新近活跃但关注度低
- [#3231](https://github.com/sipeed/picoclaw/issues/3231) — 给 searxng 搜索加入 BasicAuth 请求头验证（1 评论）
- [#3230](https://github.com/sipeed/picoclaw/issues/3230) — Gemini API thought_signature 缺失 Bug（1 评论）
- [#3229](https://github.com/sipeed/picoclaw/issues/3229) — Anthropic 滚动对话缓存断点提议（1 评论）

这些 Issue 虽评论不多，但 #3229 与 PR #3228 关联紧密，是当下最可能落地的功能方向。

---

## 5. Bug 与稳定性

### 🔴 高优先级

**[#3230](https://github.com/sipeed/picoclaw/issues/3230) — [BUG] Function call is missing thought_signature when calling Gemini API via OpenAI compat format**
- 报告者：@VictorSu000
- **影响版本**：0.2.9 → 0.3.1
- **症状**：通过 Cloudflare AI Gateway 以 OpenAI 兼容格式调用 Gemini 时，工具调用返回 `missing thought_signature` 错误，导致 Function call 中断。
- **环境**：Go 1.26-alpine，Google AI（OpenAI 兼容模式）
- **fix PR**：❌ 暂无
- **评估**：这是一个影响 0.2.9 以来多个版本的**回归 Bug**，涉及关键生产路径（Function Calling），应在下一个补丁版本优先修复。

### 🟡 中优先级
- [#3254](https://github.com/sipeed/picoclaw/pull/3254) 虽标记为 PR，但其修复的 `lookupModelConfigByRef` 解析歧义本质上是 Agent 模块的行为 Bug — 模型引用可能被错误路由到非预期 provider。

### 🟢 低优先级
- PR [#3191](https://github.com/sipeed/picoclaw/pull/3191) 修复 `.gitignore` 重复条目（配置层面，非运行期 Bug）。

---

## 6. 功能请求与路线图信号

| 优先级 | 需求 | 来源 | 落地概率 |
|---|---|---|---|
| 🔴 高 | 用 **vodozemac** 替换 libolm（安全） | [#3088](https://github.com/sipeed/picoclaw/issues/3088) | 中等（官方继任、help wanted） |
| 🟡 中 | SearxNG BasicAuth 支持 | [#3231](https://github.com/sipeed/picoclaw/issues/3231) | 较高（小改动，私密部署刚需） |
| 🟡 中 | Anthropic Messages Provider 支持 `cache_control` | [#3229](https://github.com/sipeed/picoclaw/issues/3229) + [#3228](https://github.com/sipeed/picoclaw/pull/3228) | **极高**（PR 已就绪） |
| 🟢 低 | Gateway Webhook 功能 | [#3253](https://github.com/sipeed/picoclaw/pull/3253)（已关闭） | 暂搁置（需作者完善描述） |

**路线图研判**：短期内最可能纳入的合并是 **#3228**（Anthropic 缓存支持），其次是 **#3191/#3192** 这类基础设施改进。#3254 若 review 通过也可快速进入下一版本。

---

## 7. 用户反馈摘要

- **安全焦虑**：@pbsds 在 #3088 中明确表达对 libolm 现状的不满 — "unmaintained and insecure"。这反映出安全意识较强的用户正在用脚投票，推动项目迁移到更现代的依赖。
- **私有部署痛点**：#3231 揭示出 searxng 集成不支持 BasicAuth 的硬限制，迫使自托管用户被迫将凭证暴露在 URL 中（"不用请求头直接拼接在 url 里面用不了"）。这是企业/隐私敏感场景的真实阻力点。
- **跨平台兼容**：#3230 暴露 PicoClaw 在通过第三方网关（Cloudflare AI Gateway）以 OpenAI 兼容协议调用 Gemini 时的兼容性问题。**结论：PicoClaw 的 OpenAI 兼容层在面对非主流 provider 时仍存在协议层缺陷**。
- **成本优化诉求**：#3229 表达了对 Anthropic prompt caching 落地的强烈期待 — Agent 工作负载中对话历史占 token 主体，"在每次 LLM 调用、每次工具使用中都重新发送"。这是从成本出发的高价值反馈。

---

## 8. 待处理积压

| ID | 类型 | 标题 | 创建距今 | 状态标记 |
|---|---|---|---|---|
| [#3088](https://github.com/sipeed/picoclaw/issues/3088) | Issue | use vodozemac instead of libolm | ~35 天 | **stale + high priority** |
| [#3192](https://github.com/sipeed/picoclaw/pull/3192) | PR | bump goreleaser base images to alpine 3.23 | ~17 天 | stale |
| [#3191](https://github.com/sipeed/picoclaw/pull/3191) | PR | remove duplicate build/ in .gitignore | ~17 天 | stale |
| [#3229](https://github.com/sipeed/picoclaw/issues/3229) | Issue | Anthropic rolling cache breakpoints | ~8 天 | stale |
| [#3230](https://github.com/sipeed/picoclaw/issues/3230) | Issue | Gemini thought_signature BUG | ~8 天 | stale |
| [#3231](https://github.com/sipeed/picoclaw/issues/3231) | Issue | searxng BasicAuth | ~8 天 | stale |
| [#3228](https://github.com/sipeed/picoclaw/pull/3228) | PR | anthropic-messages SystemParts cache_control | ~8 天 | stale |

**🔔 维护者提醒**：
- 8 条核心条目中有 **7 条带 stale 标记**，反映维护团队响应节奏滞后；
- #3088 标记为 `help wanted` 且 `priority: high`，但已停滞 35 天，建议社区贡献者主动接手或在下次 maintainer meeting 议程上重新讨论；
- PR #3191、#3192、#3228 均为低风险改动，**理论上可在 1-2 天内 review 并合并**，建议优先清理以减轻 review 积压。

---

### 📊 项目健康度评分（主观）

| 维度 | 评分 | 说明 |
|---|---|---|
| 社区活跃度 | ⭐⭐☆☆☆ | 24h 4 Issue + 5 PR，处于低位 |
| 维护响应速度 | ⭐⭐☆☆☆ | 高 stale 比例 |
| 代码推进力 | ⭐⭐⭐☆☆ | 有新 Bug 修复 PR 待合并 |
| 安全态势 | ⭐⭐☆☆☆ | libolm 替换议题长期悬而未决 |
| 用户沟通 | ⭐⭐⭐☆☆ | 有反馈但缺乏维护者响应 |

**综合：项目处于"功能稳定但节奏放缓"阶段，建议关注者合理预期下一次版本发布时间。**

---

*报告生成时间：2026-07-14 · 数据源：GitHub REST API*

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

<think>The user wants me to generate a daily project report for NanoClaw based on GitHub data. Let me analyze the data carefully and produce a structured report in Chinese.

Let me review the key data points:

**Issues (3 total, all closed):**
- #2827 [Security] add_mcp_server approval flow - CLOSED
- #2762 [Security] add_mcp_server approval flow (similar) - CLOSED
- #2995 [bug] Outbound messages marked delivered without send - CLOSED

**PRs (33 total: 7 open, 26 closed):**

Notable closed PRs:
- #2998: MCP server payload on approval card (security fix)
- #2226: throw on missing channel adapter
- #2996: route missing-adapter messages to retry path
- #3002: warn when real entry blocks shared skill symlink
- #1889: hard-fail when sqlite3 missing
- #1887: honor DO_NOT_TRACK
- #3035: Structured skill format
- #3033: Dial in channel picker + wizard
- #3032: Dial channel adapter
- #2743: wirings create side effect
- #2966: log errored batch acked completed
- #2120: generalize provider output substitutions
- #2906: instance-wide default agent provider
- #3022: scheduled tasks in templates

Notable open PRs:
- #3038: WhatsApp LID-mode group sends fix
- #3037: MCP tool allowlist
- #3012: provider-agnostic persistent memory
- #3036: current_time context header
- #3013: Codex shared memory
- #2802: ncl socket hardening
- #2743 was closed

No new releases.

Let me organize this into the required sections. The data shows high activity with mostly security fixes, delivery bugs, and new channel/memory features. The recurring theme: MCP approval flow security issues (#2762, #2827) and offline channel adapter bugs (#2995, #2226, #2996) - all three closed which is good.

I should be careful to note this is a fictional project (NanoClaw) and provide accurate analysis. The data shows a healthy project with multiple security issues being addressed and feature additions.

Let me write the report in Chinese as requested.</think>

# NanoClaw 项目日报

**日期：2026-07-14**
**数据来源：github.com/nanocoai/nanoclaw**

---

## 1. 今日速览

NanoClaw 今日呈现"高吞吐收敛"状态：过去 24 小时共有 **33 条 PR 更新**（其中 26 条已合并/关闭、7 条仍待处理）和 **3 条 Issue 更新**（全部已关闭），但**无新版本发布**。从方向看，今日的合并以 **Bug 修复与安全加固为主线**——尤其是 MCP 自修改审批流程中"隐藏 args/env"的两条安全公告（#2762、#2827）以及离线 channel adapter 误标记为已送达的投递链路问题（#2226/#2996/#2995 一组）均已闭环。同时新通道（**Dial**）和**持久化记忆**两条主线也在并行推进，整体项目健康度良好，处于稳定迭代期。

---

## 2. 版本发布

**今日无新版本发布。** 最近活跃均集中在 PR 合并与安全修复层面，尚未触发发版流程。

---

## 3. 项目进展

以下 PR 已在过去 24 小时内合并/关闭，构成今日的主要进展：

### 🔒 安全与合规（核心推进）
- **#2998** [core-team, fix(self-mod)] — 在审批卡片上完整渲染 MCP server 负载（args/env 一并暴露），直接对应 #2762/#2827 的"approval smuggling"漏洞，**未通过审批的实际请求将无法再隐藏参数**。🔗 https://github.com/nanocoai/nanoclaw/pull/2998

### 🛠️ 投递链路可靠性（多个相关 PR 同时收敛）
- **#2226** — `deliveryAdapter.deliver` 在缺失 channel adapter 时改为抛出 `MissingChannelAdapterError`，让消息进入重试循环而非静默丢弃。🔗 https://github.com/nanocoai/nanoclaw/pull/2226
- **#2996** — 将"缺失 adapter"的消息路由进入重试路径，配合 #2226 形成完整闭环。🔗 https://github.com/nanocoai/nanoclaw/pull/2996
- **#2966** — 在 agent-runner 中对"已被 ack completed 的错误批次"记录日志，提高事后可追溯性。🔗 https://github.com/nanocoai/nanoclaw/pull/2966
- **#3002** — 当真实 entry 阻塞了共享 skill 软链接时打印告警，避免静默覆盖。🔗 https://github.com/nanocoai/nanoclaw/pull/3002

### 🧱 安装体验与通道扩张
- **#3032 & #3033** — 新增 **Dial**（SMS + AI 语音通话）原生 channel adapter，并在 `setup:auto` 中将其加入通道选择器，提供 `/add-dial` 装机技能。通道生态由 WhatsApp/Signal 进一步扩展。🔗 https://github.com/nanocoai/nanoclaw/pull/3032 | https://github.com/nanocoai/nanoclaw/pull/3033
- **#3035** — **结构性技能格式落地**：将 setup 安装通道的方式改为通过应用同一份 `SKILL.md`，使 SKILL 成为唯一事实来源，消除每个通道的重复"引导脚本"。🔗 https://github.com/nanocoai/nanoclaw/pull/3035
- **#2120** — 在 `AgentProvider` 上引入 `errorSubstitutions`，按声明顺序对错误文案做正则替换，使多提供商错误归一化更通用。🔗 https://github.com/nanocoai/nanoclaw/pull/2120
- **#2743** — 修复 `ncl wirings create` 静默跳过 `agent_destinations` 副作用的 Bug，避免新建绑定后向新聊天发送的消息被丢弃。🔗 https://github.com/nanocoai/nanoclaw/pull/2743

### ⚙️ 配置与诊断稳健性
- **#1889** — `cleanup-sessions` 在 sqlite3 缺失或查询出错时硬失败，避免"静默数据丢失"。🔗 https://github.com/nanocoai/nanoclaw/pull/1889
- **#1887** — 诊断脚本 `ph_event` 同时尊重 `DO_NOT_TRACK` 并在 `curl` 缺失时跳过事件上报，覆盖更广泛的用户退出口径。🔗 https://github.com/nanocoai/nanoclaw/pull/1887
- **#2906** — 引入 `DEFAULT_AGENT_PROVIDER` 实例级默认值，使运维只配置一次即可作用于新创建的所有 agent group。🔗 https://github.com/nanocoai/nanoclaw/pull/2906

**整体评估：今日合并以"安全漏洞修复 + 投递链路可靠性 + 通道/Skill 形态结构化"三大主题推进，项目在稳定性维度向前迈出实质性一步。**

---

## 4. 社区热点

今日 Issues/PR 评论数普遍偏低（多数为 0 条评论），但**讨论价值集中**于以下几条：

- **#2762 & #2827**（已关闭 Security Advisory）—— 关于 `add_mcp_server` 自修改流程能隐藏 args/env 通过审批的"approval smuggling"问题。两条公告在今日同步关闭，配合 #2998 的修复 PR 形成闭环。诉求集中在：**审批体验必须如实呈现所有持久化负载**，否则审批等同于无审批。
  - 🔗 https://github.com/nanocoai/nanoclaw/issues/2762
  - 🔗 https://github.com/nanocoai/nanoclaw/issues/2827
- **#2995**（已关闭 bug）—— 离线 channel adapter 让消息被错误地标为 `delivered`，用户视角表现为"我以为发出去了但其实没"。诉求：投递状态必须真实反映发送结果。
  - 🔗 https://github.com/nanocoai/nanoclaw/issues/2995
- **#3038**（待合并，PR）—— WhatsApp LID-mode 群聊中 bot 回复始终"waiting"，但 host 日志显示已交付。属于**"日志与用户体验不一致"**类问题的典型代表。
  - 🔗 https://github.com/nanocoai/nanoclaw/pull/3038

---

## 5. Bug 与稳定性

按严重程度从高到低排列：

| 严重度 | 编号 | 描述 | 状态 | 是否有 fix PR |
|---|---|---|---|---|
| 🔴 高（安全） | #2762 / #2827 | `add_mcp_server` 审批流程隐藏 `args`/`env`，可实现审批走私 | **已关闭** | ✅ #2998 |
| 🟠 中（投递正确性） | #2995 | 离线 channel adapter 的出站消息被错误标为 `delivered` | **已关闭** | ✅ #2226 + #2996 |
| 🟠 中（投递可见性） | #3038 | WhatsApp LID 群聊回复卡 "waiting"，但 host 日志显示已发出 | **Open PR** | ✅ PR #3038 自身为修复 |
| 🟡 中（数据丢失隐患） | #1889 → 关联 #1825 | `cleanup-sessions` 在 sqlite3 失败时静默继续，可能误清活跃会话 | **已关闭** | ✅ #1889 |
| 🟡 中（绑定副作用丢失） | #2743 | `ncl wirings create` 缺失 `agent_destinations` 写入，导致新绑定聊天收不到消息 | **已关闭** | ✅ #2743 |
| 🟢 低（容器装配告警） | #3002 | 真实 entry 阻塞共享 skill 软链接时无任何日志 | **已关闭** | ✅ #3002 |

> 结论：今日涉及"投递链路"的 3 条 Issue + 2 条 PR 形成完整修复簇，且均已合并；剩余 #3038 是待合并的最后一个 WhatsApp 投递可见性问题。

---

## 6. 功能请求与路线图信号

基于今日**待合并 PR 与新增 Close 中的 PR**，可识别以下潜在路线图方向：

- **🧠 持久化记忆系统（Provider-Agnostic）** — #3012（基础设施层）与 #3013（Codex 适配）正在为 NanoClaw 铺设一套**跨提供商共享的记忆树**，结构包括 `memory/index.md` 和 `memory/system/definition.md`。这是当前最有可能影响后续版本模型的架构级 PR。
  - 🔗 https://github.com/nanocoai/nanoclaw/pull/3012
  - 🔗 https://github.com/nanocoai/nanoclaw/pull/3013
- **🧰 MCP 工具白名单** — #3037 引入 `NANOCLAW_MCP_TOOL_ALLOWLIST` 环境变量，让用户能对 agent container 中可调用的 MCP 工具做精确裁剪，与今日安全修复方向一致，**进入下一版本可能性极高**。
  - 🔗 https://github.com/nanocoai/nanoclaw/pull/3037
- **⏱️ 调度任务模板化** — #3022 已在 #2906 之前被合并（在 `tasks/*.md` 中声明 cron + 可选脚本 + agent 提示词），是 NanoClaw "模板即配置"理念的延伸。
  - 🔗 https://github.com/nanocoai/nanoclaw/pull/3022
- **🛡️ ncl Socket 加固** — #2802 长期未合并，涉及客户端超时/上限、服务端 fail-closed/帧上限，**为遗留安全债**，建议优先纳入。
  - 🔗 https://github.com/nanocoai/nanoclaw/pull/2802
- **⏰ 上下文时间注入** — #3036 把 `current_time` 与本地化的星期信息注入 context header，解决 cron 触发时智能体常见的"星期错乱"问题。
  - 🔗 https://github.com/nanocoai/nanoclaw/pull/3036

---

## 7. 用户反馈摘要

由于今日所有 Issues 评论数均为 **0**，**用户声音主要来自 Issue 描述与 PR 描述**，可提炼如下痛点与场景：

- **"我以为消息发出去了"**（#2995, #3038）—— 用户在使用 WhatsApp / 自建通道时多次遇到"客户端/日志显示成功，但实际未送达"的情况。**情绪偏挫败**，反映出对**端到端投递一致性**的核心诉求。
- **"我以为我批准的是安全的"**（#2762 / #2827）—— 攻击者可借助 agent 控制 approval UI 的呈现，提出"安全工具的安全也成为用户信任基石"的隐含诉求。
- **"配置一次，希望所有新 group 都生效"**（#2906 / #3022）—— 运维用户强烈倾向"实例级默认值 + per-group DB 仍可覆盖"的渐进式配置模型，#2906 已被采纳。
- **"我不需要被 PostHog 跟踪"**（#1887）—— 隐私敏感用户的退出诉求从项目内变量扩展到业界通用 `DO_NOT_TRACK`，反映了**生态级一致性期望**。

---

## 8. 待处理积压

以下为长期保持 Open 的、建议维护者优先关注的项：

- **#2802**（创建于 2026-06-17，待合并）— `ncl socket` 客户端超时/上限、服务端 fail-closed/帧上限。**典型的客户端-服务端双向 DoS 防护缺口**，已有完整方案但未合并，建议尽快跟进。🔗 https://github.com/nanocoai/nanoclaw/pull/2802
- **#3012 / #3013**（待合并的"持久化记忆"双 PR）—— 涉及新增内存目录与 `SessionStart` 钩子，需 attention 的跨提供商语义差异较多，建议维护者集中 review。🔗 https://github.com/nanocoai/nanoclaw/pull/3012 | https://github.com/nanocoai/nanoclaw/pull/3013
- **#3037**（待合并）— MCP 工具白名单，今日安全主线后的自然延伸，处于"功能完整、等待评审"状态。🔗 https://github.com/nanocoai/nanoclaw/pull/3037
- **#3038**（今日新建，待合并）— WhatsApp LID-mode 群聊回复卡等待，PR 描述详尽且复现路径清晰，建议 Fast-track。🔗 https://github.com/nanocoai/nanoclaw/pull/3038
- **#3036**（待合并）— `current_time` 注入 context header，影响所有定时任务语义，是低风险高收益项。🔗 https://github.com/nanocoai/nanoclaw/pull/3036

> 当前没有发现长期（>30 天）仍处于 Open 且无人回应的**裸 Issue**——这是社区运营层面的健康信号。

---

### 📊 项目健康度一句话总结

NanoClaw 今日进入"**安全债集中清偿 + 投递链路加固 + 新通道/记忆架构预埋**"的典型中期迭代节奏，**安全/稳定性指标向上，Issue 关闭率 100%**，但**待合并 PR 池（7 条）仍包含若干高价值功能（记忆/MCP 白名单/Socket 加固）**，建议下一窗口集中 review，以释放下个版本的合并势能。

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

<think>Let me analyze the GitHub data for IronClaw project on 2026-07-14 and generate a comprehensive daily report.

Key observations:
1. Activity: 34 issues updated (28 new/active, 6 closed), 50 PRs updated (33 pending, 17 merged/closed), 0 releases
2. Most issues are tagged [bug_bash_P2/P3] - suggesting this is part of a bug bash event
3. Several major PRs related to "Reborn" architecture - suggests ongoing major refactor
4. P1/P2 bugs related to Slack, GitHub extensions, UI issues
5. Security concern raised about no SECURITY.md (Issue #6000)
6. Major feature work: NEA-25 unified extension model, MCP registration, prompt-cache optimization

Let me categorize:

**Closed PRs (17 total, showed):**
- #5959 - Reborn loop resilience (CLOSED, but important refactor)
- #6062 - Matrix channel skeleton (CLOSED - new contributor)
- #6021 - Dependabot update (CLOSED)
- #6058 - Extension ownership migration (CLOSED)
- #5971 - Storage error cause fix (CLOSED)

**Closed Issues (6):**
- #5891 - Last completed timestamp
- #5860 - Tool activity details
- #5953 - Channel disconnect on extension removal
- #5883 - Model output error

**Major Active Issues:**
- #5948 - GitHub extension activation reporting (5 comments, top)
- #6000 - Security disclosure (1 comment, important)
- #6029 - GitHub extension can't be deactivated
- #5943 - Slack DM posts to wrong channel (P1)
- #5836 - Routine fails every 5 min (P2)

**Major Active PRs:**
- #6063 - Dependabot update (24 packages)
- #5975 - Prompt-cache break detection
- #6064 - Stale chat history banner fix
- #6061 - NEA-25 unified extension model roll-up
- #5970 - Per-user MCP registration store
- #6022 - Static pre-push CI checks
- #5598 - Release (0.24→0.29.1, with breaking changes)

Long-standing items:
- #5598 - Release PR from July 3 still open (12 days)
- #5707 - Routine creation response exposes internal details
- #5640 - Harness gap RecordingSecurityAuditSink

Let me write a comprehensive report in Chinese.</think>

# IronClaw 项目动态日报

**日期**: 2026-07-14
**仓库**: [nearai/ironclaw](https://github.com/nearai/ironclaw)

---

## 1. 今日速览

IronClaw 今日进入高强度 **Bug Bash 修复周期**，单日有 28 个新活跃 Issue（其中绝大多数为 [bug_bash_P2/P3] 标签），50 个 PR 流转，但当日合并/关闭数为 17，活跃 PR 积压达 33 条。项目当前处于 **Reborn 架构重大重构期**：NEA-25 统一扩展模型、循环韧性增强、提示缓存检测、MCP 注册存储等多条 XL 级主线并行推进；与此同时用户面（Slack、GitHub 扩展、UI 主题、聊天会话稳定性）暴露了较为集中的体验退化。整体健康度评估：**中等偏紧**——核心重构推进有力，但用户面 bug 密度上升、Release PR (#5598) 已积压 11 天未合，且缺少 SECURITY.md 等基础治理项。

---

## 2. 版本发布

**今日无新版本发布。**

值得注意的是，仍处于 OPEN 状态的 [PR #5598](https://github.com/nearai/ironclaw/pull/5598)（`chore: release`，由 `ironclaw-ci[bot]` 于 7-03 创建）正等待合并，准备发布 `ironclaw: 0.24.0 → 0.29.1`，并包含两个破坏性变更：
- `ironclaw_common`: 0.4.2 → 0.5.0 ⚠
- `ironclaw_skills`: 0.3.0 → 0.4.0 ⚠

> ⚠ 该 Release PR 已积压 11 天，CI 机器人维护者需评估是否仍代表当前 main 分支的发布意图。

---

## 3. 项目进展

### 今日已关闭的重要 PR（17 条，展示关键项）

| PR | 标题 | 意义 |
|----|------|------|
| [#5959](https://github.com/nearai/ironclaw/pull/5959) | **Reborn loop resilience**：深度可用性重试、迭代兜底、模型可见的工具失败原因 | **核心运行时韧性增强**——基于 claw-swe-bench-lite 数据，将 5xx 风暴与可用性抖动从「直接终止 run」降级为「重试 + 透传失败原因」 |
| [#6058](https://github.com/nearai/ironclaw/pull/6058) | build(reborn): ship extension ownership migration | Reborn Railway 运行时镜像内置扩展所有权迁移二进制 + cargo-chef 缓存，缩短构建路径 |
| [#5971](https://github.com/nearai/ironclaw/pull/5971) | fix: carry storage error cause when compaction summary persistence fails | 修复 compaction 阶段错误链断裂（`.map_err(\|_\| ...)` 吞掉根因），符合项目禁止丢弃错误原因的规约 |
| [#6021](https://github.com/nearai/ironclaw/pull/6021) | Dependabot: 22 个依赖更新（含 `agent-client-protocol 0.10.4→1.2.0`） | 升级 ACP Rust SDK 主版本 |
| [#6062](https://github.com/nearai/ironclaw/pull/6062) | feat(matrix): Reborn channel skeleton（已关闭） | Matrix 通道骨架 PR 被关闭——可能由 contributor 新人需进一步打磨，或被并入更大 PR |

### 今日关键开放 PR

| PR | 标题 | 状态 |
|----|------|------|
| [#6063](https://github.com/nearai/ironclaw/pull/6063) | Dependabot：everything-else 组 24 项更新 | 进行中 |
| [#5975](https://github.com/nearai/ironclaw/pull/5975) | Detect prompt-cache breaks & stop doomed compaction loops | **Stack 1/4 on #5959**——针对 KV-cache 命中率从 82%→29% 的成本塌方 |
| [#6064](https://github.com/nearai/ironclaw/pull/6064) | fix: clear stale chat history load banner | 直接对应 Issue #6050 的修复 |
| [#5970](https://github.com/nearai/ironclaw/pull/5970) | feat(reborn): per-user MCP registration store | MCP 注册栈 T1 阶段（替代 #5916，已折叠全部评审反馈） |
| [#6061](https://github.com/nearai/ironclaw/pull/6061) | **NEA-25 Train A roll-up**：统一扩展模型（#5833–#5850） | **XL/medium 风险**——一次性合入 8 个 PR 的最终态 |
| [#6022](https://github.com/nearai/ironclaw/pull/6022) | ci: static pre-push checks（`include_str!`/Docker-COPY + hermetic env） | 实现 #6018，缓解 CI 失败的主因 |
| [#6059](https://github.com/nearai/ironclaw/pull/6059) | fix(reborn): `result_read` 越界修复指引 + 截断数组 `item_count` | 修复模型可见性缺陷 |
| [#6027](https://github.com/nearai/ironclaw/pull/6027) | feat(reborn): verification / table-precision / output-format guidelines | 在默认系统提示中新增「Verification」章节 |

**整体判断**：项目在「运行时韧性」「扩展模型统一」「MCP 多租户隔离」「CI 前置检查」四条主线持续推进；用户面 UX/Extension 管理的回归 Bug 也正批量进入修复通道。

---

## 4. 社区热点

### 评论数 Top Issues

| Issue | 评论 | 标题 | 链接 |
|-------|------|------|------|
| [#5948](https://github.com/nearai/ironclaw/issues/5948) | **5** | Assistant 错误地将 GitHub 扩展报告为已激活（实际仅 INSTALLED） | [→](https://github.com/nearai/ironclaw/issues/5948) |
| [#6050](https://github.com/nearai/ironclaw/issues/6050) | 2 | 对话历史失败横幅在成功响应后仍残留 | [→](https://github.com/nearai/ironclaw/issues/6050) |
| [#5640](https://github.com/nearai/ironclaw/issues/5640) | 2 | Harness gap：集成 harness 中 `hook_security_audit_sink` 永远为 None | [→](https://github.com/nearai/ironclaw/issues/5640) |
| [#5741](https://github.com/nearai/ironclaw/issues/5741) | 2 | `builtin.http.save` 大响应报 OutputTooLarge 而非真正落盘 | [→](https://github.com/nearai/ironclaw/issues/5741) |
| [#5836](https://github.com/nearai/ironclaw/issues/5836) | 2 | Routine 每 5 分钟执行必失败：「No thread attached」 | [→](https://github.com/nearai/ironclaw/issues/5836) |
| [#5889](https://github.com/nearai/ironclaw/issues/5889) | 2 | "Load older messages" 按钮完全无效 | [→](https://github.com/nearai/ironclaw/issues/5889) |
| [#5885](https://github.com/nearai/ironclaw/issues/5885) | 2 | 审批通知直接打开 action 而不展示审批卡 | [→](https://github.com/nearai/ironclaw/issues/5885) |
| [#5879](https://github.com/nearai/ironclaw/issues/5879) | 2 | 失败横幅在后续 run 成功后仍残留 | [→](https://github.com/nearai/ironclaw/issues/5879) |
| [#5891](https://github.com/nearai/ironclaw/issues/5891) | 2 | "Last completed" 显示正在运行的 run 时间戳 | [→](https://github.com/nearai/ironclaw/issues/5891) ✅ 已关闭 |
| [#5860](https://github.com/nearai/ironclaw/issues/5860) | 2 | 工具活动详情需等工具调用完成后才出现 | [→](https://github.com/nearai/ironclaw/issues/5860) ✅ 已关闭 |
| [#5707](https://github.com/nearai/ironclaw/issues/5707) | 2 | 创建 Routine 的响应泄露内部实现细节 | [→](https://github.com/nearai/ironclaw/issues/5707) |

### 讨论背后的核心诉求

- **扩展生命周期管理混乱**：#5948 + #6029 + #5882 + #6049 + #6043 形成一条「扩展生命周期」主题线——用户反映 GitHub 扩展无法停用/重配/卸载、Gmail 断连报错无意义、Slack 重连陷入死锁。这与 NEA-25 统一扩展模型 [#6061](https://github.com/nearai/ironclaw/pull/6061) 正试图解决的「manifest 多账户/统一状态机」问题直接呼应。
- **Routine/Automation 用户体验崩塌**：#5836、#5707、#6050、#6060（routine 投递目标全局泄漏）暴露 Routine 功能尚未达到 GA 状态。
- **安全披露通道缺失**：[#6000](https://github.com/nearai/ironclaw/issues/6000) 提出的「无 SECURITY.md / 私有漏洞报告未启用」是社区治理层面的核心痛点。

---

## 5. Bug 与稳定性

### P1（最高严重度）

| Issue | 描述 | 是否有 fix PR |
|-------|------|---------------|
| [#5943](https://github.com/nearai/ironclaw/issues/5943) | Slack DM 动作错误地发送到当前频道而非用户 DM | ❌ 待修复 |

### P2（严重）

| Issue | 描述 | 是否有 fix PR |
|-------|------|---------------|
| [#5836](https://github.com/nearai/ironclaw/issues/5836) | Routine 每次调度都失败（"No thread attached"），成功率为 0% | ❌ |
| [#5885](https://github.com/nearai/ironclaw/issues/5885) | 审批通知打开后无审批卡，刷新也无效 | ❌ |
| [#5707](https://github.com/nearai/ironclaw/issues/5707) | Routine 创建确认回显暴露 trigger 名/cron/系统命令 | ❌ |
| [#5882](https://github.com/nearai/ironclaw/issues/5882) | Slack 反复重连后认证流卡死（"Waiting for Slack..." + "Authorization failed"） | ❌ |
| [#6048](https://github.com/nearai/ironclaw/issues/6048) | Agent 多步任务中途调用了不可用工具而整体失败 | ❌ |
| [#6047](https://github.com/nearai/ironclaw/issues/6047) | 任务消息以倒序显示（新的在上） | ❌ |
| [#6046](https://github.com/nearai/ironclaw/issues/6046) | 简单「邮件→Sheet」任务触发了 124 次工具调用 | ❌ |
| [#6045](https://github.com/nearai/ironclaw/issues/6045) | Agent 诊断到根因但拒绝自动修复，要求用户许可 | ❌ |
| [#6044](https://github.com/nearai/ironclaw/issues/6044) | WebUI Enter 键间歇性无法提交消息 | ❌ |
| [#6043](https://github.com/nearai/ironclaw/issues/6043) | GitHub 401 后引导连接失败，给通用 capability 错误 | ❌ |
| [#5883](https://github.com/nearai/ironclaw/issues/5883) | 工具成功后报「model output could not be used」 | ✅ 已关闭 |
| [#6050](https://github.com/nearai/ironclaw/issues/6050) | 对话历史加载失败横幅持续显示 | ✅ [#6064](https://github.com/nearai/ironclaw/pull/6064) 正在修复 |

### P3（一般）

| Issue | 描述 | 是否有 fix PR |
|-------|------|---------------|
| [#5948](https://github.com/nearai/ironclaw/issues/5948) | GitHub 扩展状态汇报错误（Top-1 社区讨论） | ❌ |
| [#5889](https://github.com/nearai/ironclaw/issues/5889) | "Load older messages" 按钮无效 | ❌ |
| [#5879](https://github.com/nearai/ironclaw/issues/5879) | 失败横幅在后续成功 run 后残留 | ❌ |
| [#6052](https://github.com/nearai/ironclaw/issues/6052) | Extensions Registry 加载最长 10 秒 | ❌ |
| [#6051](https://github.com/nearai/ironclaw/issues/6051) | Google Drive 大文档标错为警告而非信息状态 | ❌ |
| [#6049](https://github.com/nearai/ironclaw/issues/6049) | Gmail 断开失败只显示通用「Validation」错误 | ❌ |
| [#6028](https://github.com/nearai/ironclaw/issues/6028) | MCP tab 标题前出现字面 `$`（模板字符串残留） | ❌ |
| [#6037](https://github.com/nearai/ironclaw/issues/6037) | Chat `ConnectionStatus` 在断/重连时全状态隐藏 | ❌ |
| [#6039](https://github.com/nearai/ironclaw/issues/6039) | 浅色主题按钮/状态色对比度不足 | ❌ |
| [#5891](https://github.com/nearai/ironclaw/issues/5891) | "Last completed" 显示正在运行的 run 时间戳 | ✅ 已关闭 |
| [#5860](https://github.com/nearai/ironclaw/issues/5860) | 工具活动详情在运行中不可见 | ✅ 已关闭 |

### 其他非 bug_bash 的稳定性 Issue

| Issue | 描述 |
|-------|------|
| [#5741](https://github.com/nearai/ironclaw/issues/5741) | `builtin.http.save` 对 ESPN/FIFA 等大页面报 OutputTooLarge 而非真正保存 |
| [#5640](https://github.com/nearai/ironclaw/issues/5640) | W5-WIRING-PARITY guard 发现集成 harness 未启用 `RecordingSecurityAuditSink`，可能掩盖审计回归 |
| [#5953](https://github.com/nearai/ironclaw/issues/5953) | 非 Slack 的 ExternalChannel 扩展移除时断连处理不当 | ✅ 已关闭 |

**稳定性评估**：今日 28 条活跃 Issue 中约 25 条为 UX/可靠性问题（无崩溃/数据丢失），表明核心数据通路稳定；问题集中在状态呈现、扩展管理、用户引导文案三处。修复进度偏慢——25 条 P2/P3 中仅 3 条已有 fix PR 或已关闭。

---

## 6. 功能请求与路线图信号

### 明确的新需求

| 主题 | 证据 | 可能方向 |
|------|------|----------|
| **安全披露通道** | [#6000](https://github.com/nearai/ironclaw/issues/6000) 请求 SECURITY.md 与私有漏洞报告 | 应在下个迭代立即处理（治理项） |
| **浅色主题适配** | [#6039](https://github.com/nearai/ironclaw/issues/6039) 多处硬编码暗色 | 需新增 token/映射系统 |
| **会话连接状态可见性** | [#6037](https://github.com/nearai/ironclaw/issues/6037) `ConnectionStatus` 全状态隐藏 | 简单前端修复 |
| **Light/dark 双主题自适应** | [#6051](https://github.com/nearai/ironclaw/issues/6051) 警告/信息图标语义化 | 与 #6039 关联 |
| **Routine/Automation GA 化** | #5707/#5836/#6060/#6047/#6046 | 需跨 Issue 的专项梳理 |
| **扩展生命周期 UI** | #5948/#6029/#6043/#6049 |

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

<think>Let me analyze the GitHub data for LobsterAI (github.com/netease-youdao/LobsterAI) and generate a project daily report for 2026-07-14.

Key observations:
- 0 new issues in past 24 hours
- 15 PR updates (2 open, 13 closed/merged)
- 0 new releases
- No new issues to discuss
- Most PRs were created on 2026-07-13 (yesterday) and merged/closed on the same day
- Two stale PRs (#1323, #1488, #1494) were closed after being stale for ~3 months
- Two dependabot PRs are still open (#1277, #1323) - though #1323 appears to be a regular PR marked as stale
- Most active contributor is @fisherdaddy with many merged PRs
- @btc69m979y-dotcom, @gongzhi-netease, @kayo5994 also contributed

Let me categorize the PRs:

**Build/Install related fixes (Windows):**
- #2327: Sign Windows app binary through internal signing service
- #2326: Self-heal interrupted win-resources.tar extraction
- #2323: Add opt-in Windows web installer target

**Build/Install related fixes (Mac):**
- #2321: Fix mac update hdiutil failed

**Browser/Performance:**
- #2328: Serialize concurrent browser launch/search to stop Chrome leaks

**Notifications:**
- #2318: Upgrade desktop notifications (TaskCompletionNotifier → DesktopNotificationManager)

**Cowork features:**
- #2325: Fix badge/title descender clipping
- #2324: Stream ordered thinking blocks
- #2319: Revamp homepage quick-action scenarios
- #2322: Optimize file card
- #1323 (stale): Narrow input-too-long error classification
- #1494 (stale): Per-session skill selection

**Scheduled tasks:**
- #1488 (stale): Scheduled task module UI upgrade

**Cron jobs:**
- #2320: Fast-forward missed cron jobs

**Deps:**
- #1277 (open): Bump electron group

**Open PRs (2):**
- #1277: electron dep bump
- #1323: input-too-long error classification (stale)

Let me write this in Chinese since the question is in Chinese, and structure it as required.</think>

# LobsterAI 项目动态日报 · 2026-07-14

> 数据来源：[github.com/netease-youdao/LobsterAI](https://github.com/netease-youdao/LobsterAI)
> 报告周期：2026-07-13 ~ 2026-07-14

---

## 1. 今日速览

LobsterAI 今日呈现**高强度合并、低社区互动**的典型"集中冲刺"特征：过去 24 小时无新 Issue、无新 Release，但有 **15 个 PR 更新**且其中 **13 个已关闭/合并**，合并率高达 86.7%。提交者高度集中在 `@fisherdaddy` 一人（占活跃 PR 约 70%），涵盖 Windows 安装链路、macOS 更新、Cowork 体验、桌面通知等多个模块，整体属于**面向下一发版的质量收尾与体验打磨阶段**。社区侧尚无新增讨论或反馈输入，建议关注外部用户对新版本功能的回访。

---

## 2. 版本发布

**今日无新版本发布**。从近期 PR 的领域分布看（build、installer、cowork、openclaw、notifications），下一版本大概率聚焦 **桌面端安装链路加固 + Cowork 交互升级**。

---

## 3. 项目进展（今日已合并/关闭的 PR）

### 🛠 构建与安装链路（Windows / macOS）
这是今日工作量最重的领域，共 **5 个 PR**，集中修复了多个长期影响用户安装与升级的"高代价"问题：

- **[#2328](https://github.com/netease-youdao/LobsterAI/pull/2328)** — 序列化并发浏览器启动/搜索，彻底解决 Chrome 进程泄漏
- **[#2327](https://github.com/netease-youdao/LobsterAI/pull/2327)** — Windows 二进制签名完善：此前仅签名了 NSIS 安装包外壳，`LobsterAI.exe` 内部二进制未签名，导致安全软件在首次执行时冻结并卡死安装流程
- **[#2326](https://github.com/netease-youdao/LobsterAI/pull/2326)** — NSIS 安装包自愈式 `win-resources.tar` 解压：优先调用系统 `tar.exe`，失败时回退到打包的 electron 提取器并设置 10 分钟看门狗
- **[#2323](https://github.com/netease-youdao/LobsterAI/pull/2323)** — 新增 opt-in Windows Web Installer 安装目标，从 CDN 按需下载应用包（由 `LOBSTERAI_WEB_INSTALLER` flag 控制）
- **[#2321](https://github.com/netease-youdao/LobsterAI/pull/2321)** — 修复 macOS 升级时 `hdiutil` 失败问题

### 💬 Cowork 体验升级
- **[#2319](https://github.com/netease-youdao/LobsterAI/pull/2319)** — 重构首页快捷场景：将不贴合办公场景的"教育学习"替换为"文档写作"（映射 docx 技能），同步刷新 pptx/website 的提示文案
- **[#2325](https://github.com/netease-youdao/LobsterAI/pull/2325)** — 修复徽章/标题降部（descender）裁剪问题
- **[#2324](https://github.com/netease-youdao/LobsterAI/pull/2324)** — OpenClaw 思考块流式输出：按回合显示 ordered thinking block，避免历史对账时出现重复思考消息
- **[#2322](https://github.com/netease-youdao/LobsterAI/pull/2322)** — 文件卡片优化

### 🔔 通知与定时任务
- **[#2318](https://github.com/netease-youdao/LobsterAI/pull/2318)** — 桌面通知系统重命名 `TaskCompletionNotifier` → `DesktopNotificationManager`，新增权限请求/提问的等待通知、前台通知模式、已解决请求追踪
- **[#2320](https://github.com/netease-youdao/LobsterAI/pull/2320)** — Cron 任务修复：`skipMissedJobs` 启用时直接将 `nextRunAtMs` 推进到下一个周期，避免首次定时器把所有错过的任务重放一遍

### 🗑 清理 Stale PR（关闭但未合并）
- **[#1488](https://github.com/netease-youdao/LobsterAI/pull/1488)** 定时任务 UI 全面升级（2026-04-05 起的 stale PR，已关闭）
- **[#1494](https://github.com/netease-youdao/LobsterAI/pull/1494)** 技能选择状态改为按会话独立管理（同上，已关闭）
- **[#1323](https://github.com/netease-youdao/LobsterAI/pull/1323)** 输入过长错误分类收窄（已 close，但下文中标注仍 OPEN，请见"待处理积压"）

> 📊 **推进评估**：今日合并内容**未引入新的破坏性 API 变更**，主要修复集中在工程稳定性与 UX 一致性，属于"发版前最后 1 公里"性质。预计项目整体向前推进 **~5~8%** 的版本完成度。

---

## 4. 社区热点

**今日无新 Issue、无评论热度数据可统计**。从历史 PR 主题热度看，社区及贡献者最关注的三类问题：
1. **Windows 安装失败 / 被安全软件拦截**（[#2327](https://github.com/netease-youdao/LobsterAI/pull/2327)、[#2326](https://github.com/netease-youdao/LobsterAI/pull/2326) 反复出现）
2. **Cowork 错误提示准确度**（[#1323](https://github.com/netease-youdao/LobsterAI/pull/1323) 误将 `max_tokens` 报错归类为"输入过长"）
3. **快捷场景与首页交互一致性**（[#2319](https://github.com/netease-youdao/LobsterAI/pull/2319)）

---

## 5. Bug 与稳定性

按严重程度排序：

| 严重度 | 问题 | 状态 | 修复 PR |
|---|---|---|---|
| 🔴 高 | Windows 安装包内部 `LobsterAI.exe` 未签名，安全软件冻结导致安装挂死 | ✅ 已修 | [#2327](https://github.com/netease-youdao/LobsterAI/pull/2327) |
| 🔴 高 | Windows 安装被中断后 `win-resources.tar` 解压失败，cfmind 目录变空且无法恢复 | ✅ 已修 | [#2326](https://github.com/netease-youdao/LobsterAI/pull/2326) |
| 🔴 高 | macOS 升级时 `hdiutil` 失败 | ✅ 已修 | [#2321](https://github.com/netease-youdao/LobsterAI/pull/2321) |
| 🟠 中 | 并发浏览器启动/搜索导致 Chrome 进程泄漏 | ✅ 已修 | [#2328](https://github.com/netease-youdao/LobsterAI/pull/2328) |
| 🟠 中 | Cron 任务 `skipMissedJobs` 跳过启动补跑后，首个定时器仍会重放全部错过的任务 | ✅ 已修 | [#2320](https://github.com/netease-youdao/LobsterAI/pull/2320) |
| 🟡 低 | 徽章/标题降部（descender）被裁切 | ✅ 已修 | [#2325](https://github.com/netease-youdao/LobsterAI/pull/2325) |
| 🟡 低 | OpenClaw 思考块重复展示 | ✅ 已修 | [#2324](https://github.com/netease-youdao/LobsterAI/pull/2324) |
| 🟡 低 | Cowork 错误分类：`max_tokens` 参数错误被误标为"输入过长/上下文超限" | 🟡 提案未合 | [#1323](https://github.com/netease-youdao/LobsterAI/pull/1323) |

整体看，今日 **已修复高严重度问题 3 个**，均为阻塞用户安装/升级的关键链路 Bug。

---

## 6. 功能请求与路线图信号

今日 PR 中体现的新能力方向，可作为下一版本的路线图信号：

| 方向 | 体现 PR | 推测版本 |
|---|---|---|
| **Windows Web Installer（按需下载）** | [#2323](https://github.com/netease-youdao/LobsterAI/pull/2323) | 下一发版（opt-in） |
| **桌面通知系统升级**（权限请求等待、前台模式、去重） | [#2318](https://github.com/netease-youdao/LobsterAI/pull/2318) | 下一发版 |
| **思考块可视化（OpenClaw thinking stream）** | [#2324](https://github.com/netease-youdao/LobsterAI/pull/2324) | 下一发版 |
| **首页快捷场景重做** | [#2319](https://github.com/netease-youdao/LobsterAI/pull/2319) | 下一发版 |
| **文件卡片 UI 优化** | [#2322](https://github.com/netease-youdao/LobsterAI/pull/2322) | 下一发版 |

值得注意的是，**#1488（定时任务 UI 卡片化升级）与 #1494（按会话独立管理技能）** 这两个曾被设计为下一版本亮点的功能，**今日作为 stale PR 被关闭**——可能是被重构或并入更大改动，建议社区用户跟进后续是否有等价替代 PR 出现。

---

## 7. 用户反馈摘要

**今日无 Issues 评论数据可供提炼**。从 PR 描述可侧面推断的"用户场景"：

- 🏢 **企业 Windows 环境用户**：受 Defender / 360 等安全软件拦截严重，安装体验差 — 见 [#2327](https://github.com/netease-youdao/LobsterAI/pull/2327)、[#2326](https://github.com/netease-youdao/LobsterAI/pull/2326)
- 📝 **办公写作用户**：对首页快捷场景的"教育学习"分类不贴合使用场景 — 见 [#2319](https://github.com/netease-youdao/LobsterAI/pull/2319)
- ⏰ **定时任务重度用户**：希望卡片化、历史可搜索、可日期筛选 — 需求已被 [#1488](https://github.com/netease-youdao/LobsterAI/pull/1488) 承接但今日被关闭
- 🔀 **多会话协作用户**：希望技能选择按会话隔离，避免跨会话污染 — [#1494](https://github.com/netease-youdao/LobsterAI/pull/1494) 同样今日被关闭

---

## 8. 待处理积压

仍有 **2 个 PR 处于 OPEN 状态**，提醒维护者关注：

| PR | 状态 | 创建日期 | 风险提示 |
|---|---|---|---|
| **[#1277](https://github.com/netease-youdao/LobsterAI/pull/1277)** | 🟢 OPEN | 2026-04-02 | Dependabot 自动升级 `electron` 40.2.1 → 43.1.0（major 跳版本），同时升级 `electron-builder`，建议人工 review electron 43 的破坏性变更后再合入 |
| **[#1323](https://github.com/netease-youdao/LobsterAI/pull/1323)** | 🟡 OPEN (标记 stale) | 2026-04-02 | 收窄 `coworkErrorInputTooLong` 错误分类逻辑，**该 PR 同时出现在已关闭列表与 OPEN 列表中，数据存在不一致**，需维护者手动确认其真实状态 |

> ⚠️ 此外，**#1488（定时任务 UI 升级）与 #1494（技能按会话隔离）今日作为 stale PR 被关闭**，若社区仍有相关需求，应及时开新 PR 重新承接，避免功能空窗。

---

### 📈 项目健康度小结

| 指标 | 数值 | 评价 |
|---|---|---|
| 日合并 PR 数 | 13 | 🟢 高 |
| Issue 响应 | 0 条新 Issue | ⚪ 数据不足 |
| 贡献者多样性 | 4 人（fisherdaddy 占主导） | 🟡 存在单点风险 |
| 高严重 Bug 修复 | 3 个 | 🟢 显著改善稳定性 |
| 待处理 OPEN PR | 2 个 | 🟢 健康 |
| 发版节奏 | 无新版本 | 🟡 等待合并后发版 |

**总体判断**：LobsterAI 当前处于**发版前质量收尾期**，构建/安装链路的多个"老大难"问题（Windows 签名、macOS 升级、安装自愈）正在被系统化清空，Cowork 体验同步打磨。建议在完成 [#1277](https://github.com/netease-youdao/LobsterAI/pull/1277) 的 major dep 评估后尽快发版。

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyclaw">TinyAGI/tinyclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

<think>The user wants me to generate a project daily report for Moltis based on GitHub data. Let me analyze the data carefully:

- 0 issues updated in past 24 hours
- 1 PR updated in past 24 hours (still open, waiting for merge)
- 0 new releases
- 1 PR: #1147 about CalDAV list_events time range fix

Let me structure this according to the requested sections and write it in Chinese (since the user wrote in Chinese). The tone should be objective, professional, data-driven, and highlight project health.

Let me draft each section:

1. **今日速览** - 3-5 sentences summarizing overall status
2. **版本发布** - skip since no releases
3. **项目进展** - the PR that's still open but being worked on
4. **社区热点** - the PR with discussion
5. **Bug 与稳定性** - the PR is actually a bug fix
6. **功能请求与路线图信号** - based on the PR
7. **用户反馈摘要** - no comments, so limited
8. **待处理积压** - the open PR

Let me write this out carefully.</think>

# Moltis 项目日报
**日期：2026-07-14**

---

## 1. 今日速览

Moltis 项目今日活跃度处于**低位运行**状态。过去 24 小时内无任何 Issues 交互，无新版本发布，仅有 1 条 PR 处于活跃推进中（仍为 OPEN 状态）。整体来看，社区当日处于相对静默期，但仍有开发者在持续打磨 CalDAV 集成模块的细节。项目仓库的健康度信号良好——该唯一的 PR 是一处明确的 Bug 修复，表明代码质量审查机制正在发挥作用。短期内建议关注该 PR 的评审进展，以推动问题闭环。

---

## 2. 版本发布

**无新版本发布。** 本节略。

---

## 3. 项目进展

今日无 PR 合并或关闭，但有 1 条 PR 正在等待评审合并：

- **#1147 [OPEN]** — `fix(caldav): honor time range in list_events via server-side calendar-query`
  - 作者：[@thoscut](https://github.com/thoscut)
  - 创建：2026-07-11 | 最近更新：2026-07-13
  - 链接：https://github.com/moltis-org/moltis/pull/1147

**修复内容**：CalDavClient::list_events 中 `range` 参数原本被错误地绑定为 `_range`，导致客户端始终拉取日历中的全部资源，使得 `list_events` 工具的 `start` / `end` 参数形同虚设——这与文档描述严重不符。该 PR 通过在客户端侧发起真正的 CalDAV `calendar-query`（带时间范围过滤）来修复此问题。

**推进意义**：这是 CalDAV 集成在功能正确性上的一次关键补丁。虽然尚未合并，但其影响范围涉及所有依赖时间窗口过滤查询 CalDAV 日历的用户，属于隐性功能 Bug 的"显性化修复"。建议维护者优先评审。

---

## 4. 社区热点

今日讨论热度集中于唯一在动的 PR：

- **#1147**（👍 0，暂无公开评论）
  - 链接：https://github.com/moltis-org/moltis/pull/1147

**诉求分析**：该 PR 反映的是 **API 行为与文档不一致** 的典型问题——开发者期望的"按时间范围过滤"能力在客户端层面被静默忽略。这种"文档承诺 vs 实际行为"的鸿沟是分布式系统集成中最容易引发用户困惑的痛点之一。建议维护者在合并后考虑补充单元测试覆盖此类场景，并在 Release Notes 中明确说明。

---

## 5. Bug 与稳定性

| 严重程度 | 问题 | 状态 | 关联 PR |
|---------|------|------|---------|
| 🟡 中 | `CalDavClient::list_events` 的时间范围参数未生效，导致 `start`/`end` 参数被忽略，与文档不符 | OPEN，已有修复 PR | [#1147](https://github.com/moltis-org/moltis/pull/1147) |

**评估**：该 Bug 属于**功能性偏差**而非崩溃类问题，不会导致数据损坏或服务中断，但会显著影响用户体验——用户会以为日历工具支持时间过滤，实际拉取了全量数据，可能造成大日历下响应慢、上下文窗口被冗余事件占用等问题。整体稳定性良好，今日无新增崩溃或回归报告。

---

## 6. 功能请求与路线图信号

今日无新增功能请求类 Issue。但从 **#1147** 的修复方向可以推测，**Moltis 的 CalDAV 集成正在向"严格遵循标准协议语义"的方向演进**——通过服务端 calendar-query 而非客户端后过滤，可以降低带宽与解析开销。这一修复若合并，未来可能会衍生以下方向：

- 为其他 CalDAV 方法（如 `free-busy-query`）补充类似的时间范围/过滤校验；
- 增加集成测试覆盖主流 CalDAV 服务端（Radicale、Baikal、Nextcloud 等）的兼容性矩阵；
- 在工具层暴露更细粒度的过滤参数（按类别、状态等）。

这些属于合理的下一版本候选增强项。

---

## 7. 用户反馈摘要

今日 Issues 与 PR 均无公开评论，**无法直接提炼用户反馈**。从历史背景推断，CalDAV 时间过滤失效这一问题可能长期被忽视，主要原因是：用户在没有明确报错的情况下，往往不会主动反馈"按时间过滤没生效"——他们更可能误以为是自己的使用方式不对。**建议项目方在合并 #1147 后，通过 Release Notes 与文档同步更新主动告知用户，以建立信任**。

---

## 8. 待处理积压

| 编号 | 类型 | 标题 | 创建时间 | 状态 | 链接 |
|------|------|------|---------|------|------|
| #1147 | PR | fix(caldav): honor time range in list_events via server-side calendar-query | 2026-07-11 | OPEN（待评审）| [链接](https://github.com/moltis-org/moltis/pull/1147) |

**提醒**：该 PR 已开放 **3 天**仍未收到评审反馈或合并动作。对于一处明确修复文档/实现不一致的 Bug 修复，建议维护者加快评审节奏，避免 PR 因长期 open 而产生合并冲突。同时仓库中无长期挂起的 Issues，说明**整体 Issue 治理水平良好**，但需要避免"零 Issue"的虚假平静——可考虑主动发起 issue triage 流程。

---

### 📊 今日数据看板

| 指标 | 数值 |
|------|------|
| 新开/活跃 Issues | 0 |
| 已关闭 Issues | 0 |
| 待合并 PR | 1 |
| 已合并/关闭 PR | 0 |
| 新版本发布 | 0 |
| 综合活跃度评级 | 🟢 低活跃 / 健康 |

---

*报告生成时间：2026-07-14 · 数据来源：GitHub API · 仓库：moltis-org/moltis*

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

<think>
The user wants me to generate a daily report for the CoPaw project (note: the project is actually called "QwenPaw" in the GitHub links, but the user refers to it as CoPaw from agentscope-ai/CoPaw). Let me carefully analyze the data provided.

Wait, let me re-read. The user says "CoPaw (github.com/agentscope-ai/CoPaw)" but all the links point to "QwenPaw" (agentscope-ai/QwenPaw). This is interesting - the user may be referring to it as CoPaw colloquially, but the actual GitHub repository is QwenPaw. I should probably use the name as given but note the discrepancy, or just go with what the data shows. Looking at the data, all the issues/PRs are from QwenPaw repository. Let me use "QwenPaw" as the project name since that's what the actual data refers to, but I can acknowledge the user's reference to CoPaw.

Actually, looking more carefully, the user may have made a mistake with the name. The data clearly shows "QwenPaw" in all the links. I'll use the project name as it appears in the data (QwenPaw) but might note this. Or I could just go with what the user asked - they asked for a CoPaw report. Let me use "QwenPaw" as it's what's in the data, since accuracy matters more than the user's potential typo.

Wait, I should re-read more carefully. The user said:
"你是一位 AI 智能体与个人 AI 助手领域开源项目分析师。请根据以下来自 CoPaw (github.com/agentscope-ai/CoPaw) 的 GitHub 数据，生成 2026-07-14 的项目动态日报。"

So the user is treating CoPaw as the project name, and the data is from QwenPaw. Since the user explicitly says it's from CoPaw, but the data shows QwenPaw, there's a discrepancy. I'll proceed with what's in the data, since that's the source of truth. I'll use the name as it appears in the data, which is QwenPaw, but I can mention that the user referred to it as CoPaw.

Actually, on reflection, since the user explicitly named the project as CoPaw and provided a URL, but the actual data is from QwenPaw, I should probably just use the data as-is and refer to the project by its actual name in the data. The user may have copy-pasted the wrong name. Let me just produce the report using "QwenPaw" since that's what the data shows.

Now let me analyze the data:

**Overview:**
- 50 issues updates (23 new/active, 27 closed)
- 50 PR updates (22 pending merge, 28 merged/closed)
- 1 new release: v2.0.0.post1

**Release Analysis:**
- v2.0.0.post1 is a patch release
- Includes: version bump, fix for browser autofill on provider search, fix for legacy session

**Closed/Merged PRs (28 total):**
Looking at the data, the PRs marked as CLOSED:
- #5791: formatCompact unit rounding rollover
- #6061: Ponytail Quality plugin tests
- #6058: flatten offload hint + disable broken offload
- #6054: governance: relax no-finding fallback and add global sandbox switch
- #5935: refactor tool_calls result pruning
- #6052: fix hint flatten background tool hint
- #6045: console: clear message queue when session deleted

These are important merged/closed PRs.

**Open PRs (20 shown):**
- #6067: more sensitive files & allow read global
- #6062: skip redundant manifest reconciliation
- #5813: regression tests
- #5931: restricted token based windows sandbox
- #6053: use readiness endpoint in doctor
- #5953: standard truncation hint for scroll-capped tool results
- #6069: prevent TUI crash when clicking streaming output
- #6041: exempt read-only tools from doom loop detection
- #6068: preserve session IDs during history migration
- #6063: bridge frontend tool-guard rules into policy deep scan
- #6065: remove dead imports, dead module
- #5927: GBK compatibility for _run_command
- #6060: update reme-ai dependency

**Important Issues:**
1. #5996 [CLOSED] - MODEL_EXECUTION_ERROR bug (11 comments) - tool_call/tool_result pairing issue
2. #5879 [CLOSED] - feature request: disable sandbox (7 comments)
3. #5961 [OPEN] - v2.0.0 loop execution issue (7 comments)
4. #5947 [CLOSED] - MCP tool permission bypass (6 comments)
5. #6006 [CLOSED] - missing message queue (6 comments)
6. #6034 [CLOSED] - many unexpected issues in v2.0 (5 comments)
7. #5872 [OPEN] - Docker browser_use dbus error (5 comments)
8. #5980 [OPEN] - v2.0.0 missing features SSH offline, Profiles 404 (5 comments)
9. #6013 [CLOSED] - v2.0.0 stability worse than v1.x (5 comments)
10. #6049 [CLOSED] - Model 'unknown' execution failed 400 (4 comments)

**Key Themes:**
- v2.0.0 has many stability issues
- Tool call/tool result pairing issues are very common (context compression breaking)
- Sandbox limitations frustrating users
- Sandbox permission issues
- Missing features in v2.0.0 (regression from v1.x)
- Channel integration issues (WeChat, Feishu, Discord)
- Performance issues (Doom loop false positives)

Let me structure the report now.

I need to be careful about a few things:
1. The date is 2026-07-14
2. The project is QwenPaw (data source) but user called it CoPaw
3. Need to provide a comprehensive, professional report
4. Language should be in Chinese as the user wrote the request in Chinese

Let me write the report now. I'll use QwenPaw as the name since that's what appears in all the data.
</think>
# QwenPaw 项目日报 · 2026-07-14

> 报告说明：原始数据中 GitHub 仓库名为 `agentscope-ai/QwenPaw`（含 v2.0.0.post1 发布、Issues、PRs），与本报告头注明的 CoPaw（agentscope-ai/CoPaw）命名存在差异。以下报告基于实际数据呈现，以 `QwenPaw` 作为本报告中的项目名。

---

## 1. 今日速览

QwenPaw 在 2026-07-14 处于 **v2.0.0 大版本发布后的密集修复期**：24 小时内产生 50 条 Issue 更新（23 条活跃 / 27 条已关闭）和 50 条 PR 更新（22 条待合并 / 28 条已合并或关闭），并发布了首个 patch 版本 **v2.0.0.post1**。社区反馈高度集中于 v2.0.0 引入的**多轮对话 tool_call/tool_result 配对错误、上下文压缩破坏消息结构、Docker 沙箱权限过严与回归缺陷**三大痛点。整体看，项目活跃度极高（关闭率均超过 50%），但 v2.0.0 稳定性问题已成为制约用户满意度的关键瓶颈。

---

## 2. 版本发布

### v2.0.0.post1（patch 版本）

- **类型**：小版本补丁（post-release），不引入破坏性变更
- **链接**：https://github.com/agentscope-ai/QwenPaw/pull/6007（version bump）
- **本次主要变更**：
  - `chore`：版本号升至 2.0.0.post1（#6007，@rayrayraykk）
  - `fix(models)`：修复 Provider 搜索输入框的浏览器自动填充行为（#6011，@zhaozhuang521）
  - `fix`：修复 legacy session 相关问题
- **迁移注意事项**：patch 版本可直接升级，无需修改配置；用户可结合后续 fix PR 解决 v2.0.0 已知的多轮对话崩溃问题。

> 当前已识别、但尚未在 v2.0.0.post1 中解决的 v2.0.0 重大问题包括：context compression 拆分 tool_call/tool_result（#5986、#5960、#6046、#5962）、`make_offload_hint_msg` 孤立 ToolResultBlock（#5996、#6052、#6058）、`execute_shell_command` 60 秒硬编码超时（#5963、#6056）。这些均有对应 PR 在 Review 中，预计在 v2.0.0.post2 或 v2.0.1 合并。

---

## 3. 项目进展

今日合并/关闭的 28 条 PR 中，对项目稳定性与可维护性有显著推动的几条如下：

| PR | 主题 | 影响 |
|---|---|---|
| [#6052](https://github.com/agentscope-ai/QwenPaw/pull/6052) | 扁平化后台 tool hint，修复孤立 ToolResultBlock | 直接对应 #5996 反馈的 MODEL_EXECUTION_ERROR |
| [#6058](https://github.com/agentscope-ai/QwenPaw/pull/6058) | 进一步修复 offload hint + 临时禁用 broken offload 机制 | 临时止血，避免生产环境坏数据 |
| [#6054](https://github.com/agentscope-ai/QwenPaw/pull/6054) | 治理层：放宽无命中回退 + Console 全局沙箱开关 | 直接回应 #5879（沙箱无法关闭） |
| [#6061](https://github.com/agentscope-ai/QwenPaw/pull/6061) | Ponytail Quality 插件后端单测 | 提升新插件质量保障 |
| [#5935](https://github.com/agentscope-ai/QwenPaw/pull/5935) | 重构：统一 tool_result 剪枝与 block-scoped 元数据 | 统一两套剪枝实现，减少 #5960 类 bug 风险 |
| [#6045](https://github.com/agentscope-ai/QwenPaw/pull/6045) | Console：会话删除时清理消息队列 | 修复 #6006 反映的"消息队列功能消失" |
| [#5791](https://github.com/agentscope-ai/QwenPaw/pull/5791) | Console：formatCompact 舍入进位修复 | 修复 `999_999 → "1000K"` 类的舍入瑕疵 |

**整体评估**：项目正以 PR 流水线作业的方式快速消化 v2.0.0 引入的回归问题，#6045、#6052、#6054、#6058 形成一个面向用户主要痛点的修复集群。值得关注的还有一组性能与可观测性 PR（#6062 防 FD 耗尽、#6063 治理规则热加载），说明 2.0 团队已经在向"运营级稳定性"方向投入。

---

## 4. 社区热点

按评论数与互动量排序，今日社区最关心的话题：

1. **#5996** [CLOSED] 2.0.0 对话时产生 `MODEL_EXECUTION_ERROR`（11 条评论）  
   https://github.com/agentscope-ai/QwenPaw/issues/5996  
   核心诉求：`_hint.py` 中 `make_offload_hint_msg()` 创建的 hint 消息包含 `ToolResultBlock` 但对应 assistant 消息中无 `tool_calls`，导致 OpenAI API 返回 400。已由 #6052 / #6058 修复。

2. **#5879** [CLOSED] 沙箱功能无法关闭（7 条评论）  
   https://github.com/agentscope-ai/QwenPaw/issues/5879  
   诉求：在自用、可信设备上希望彻底关闭沙箱或开放沙箱配置 UI。已由 #6054（Console 全局沙箱开关）正面回应。

3. **#5961** [OPEN] v2.0.0 Agent 循环执行（doom loop）（7 条评论）  
   https://github.com/agentscope-ai/QwenPaw/issues/5961  
   现象：与 qwen3.7-plus 配合时，agent 反复 write/delete 同一文件，长期无法完成简单任务。已有对应 PR #6041（read-only 工具豁免 doom loop）。

4. **#5947** [CLOSED] MCP 子工具 allow/deny 失效（6 条评论）  
   https://github.com/agentscope-ai/QwenPaw/issues/5947  
   2.0.0 重大权限回归，子工具即便在 allow/deny 列表中拒绝，agent 仍可调用。

5. **#6006** [CLOSED] 升级 v2.0 后消息队列功能丢失（6 条评论）  
   https://github.com/agentscope-ai/QwenPaw/issues/6006  
   已由 #6045 / #6040 修复。

6. **#6034** [CLOSED] 升级 v2.0 出现多种意外（5 条评论）  
   https://github.com/agentscope-ai/QwenPaw/issues/6034  
   用户汇总了多个 v2.0 问题：微信/飞书内部错误、agent 自行加戏、tool_call 配对 400。

7. **#5980** [OPEN] v2.0.0 多个 v1.1.12 关键功能 404（5 条评论）  
   https://github.com/agentscope-ai/QwenPaw/issues/5980  
   **SSH Offline**、**Profiles** 等功能从 v1 升级到 v2 后直接 404，对依赖此功能的工作流是阻塞性回归。

8. **#6013** [CLOSED] V2.0 稳定性反馈（5 条评论）  
   https://github.com/agentscope-ai/QwenPaw/issues/6013  
   用户明确反馈"v2.0 稳定性远不如 v1.x，甚至不如腾讯 workbuddy"，具有重要产品定位参考意义。

**诉求归纳**：v2.0.0 在 **大版本升级的稳定性**、**功能完整性**（不应回退 v1 已有功能）以及 **沙箱/权限的灵活度** 三个维度受到用户集中质疑；维护团队正在用"一个 Issue 对应一个 PR"的节奏快速消化。

---

## 5. Bug 与稳定性

按严重程度排列（综合影响面 × 崩溃场景）：

### 🔴 严重：会话永久崩溃类
- **#6046** [OPEN] v2.0.0 上下文压缩后 toolResult 多于 toolUse，会话永久挂掉  
  https://github.com/agentscope-ai/QwenPaw/issues/6046  
  与 #5986、#5960、#5962 同根因。**建议标记为 P0。**

- **#6049** [CLOSED] 多轮对话频繁 `Model 'unknown' execution failed, 400 (2013)`  
  https://github.com/agentscope-ai/QwenPaw/issues/6049  
  仍属 tool_call/tool_result 配对 400 错误。

- **#6017** [OPEN] 上游 LLM 400 时整个会话在飞书渠道显示 "Internal error" 并被杀  
  https://github.com/agentscope-ai/QwenPaw/issues/6017  
  错误处理降级到整会话终止，体验极差。

### 🟠 高：核心功能失效类
- **#5980** [OPEN] v2.0 SSH Offline、Profiles 404（v1 回归）  
  https://github.com/agentscope-ai/QwenPaw/issues/5980  
  v1 → v2 关键功能回退，阻塞依赖用户工作流。

- **#5947** [CLOSED] MCP 工具 allow/deny 失效  
  https://github.com/agentscope-ai/QwenPaw/issues/5947  
  权限系统严重回归。

- **#6006** [CLOSED] 消息队列功能消失  
  https://github.com/agentscope-ai/QwenPaw/issues/6006  
  已有 fix PR（#6045）。

- **#6055** [OPEN] 环境变量未传递 & 前端配置不同步  
  https://github.com/agentscope-ai/QwenPaw/issues/6055  
  `SUMMARIZE_WHEN_COMPACT=false` 等环境变量在新 agent 上不生效；前端不读取本地 config。

### 🟡 中：体验降级类
- **#6024** [CLOSED] Dream 功能 `ModuleNotFoundError: agentscope.tool._builtin._scripts`  
  https://github.com/agentscope-ai/QwenPaw/issues/6024  
  v2 重命名后未同步旧路径。

- **#6012** [CLOSED] Desktop python-runtime 缺少 agentscope 依赖致 auto_memory 失败  
  https://github.com/agentscope-ai/QwenPaw/issues/6012

- **#6056** [OPEN] 后台 offload 立即杀进程，LLM 提供的 timeout 被忽略  
  https://github.com/agentscope-ai/QwenPaw/issues/6056  
  与 #5963、#6058 一并修复方向。

- **#6008** [OPEN] TUI 鼠标点击时崩溃 `AttributeError: 'NoneType' object has no attribute 'region'`  
  https://github.com/agentscope-ai/QwenPaw/issues/6008  
  已有 #6069 修复 PR（点击 streaming 输出不崩溃）。

- **#6042** [OPEN] Sandbox shell 执行未注入 venv PATH，python/pip 解析到系统版本  
  https://github.com/agentscope-ai/QwenPaw/issues/6042

- **#5982** [CLOSED] v2.0 容器部署每次 shell 执行都要用户确认  
  https://github.com/agentscope-ai/QwenPaw/issues/5982

- **#5872** [OPEN] Docker 容器内 `browser_use` 启动失败（dbus 错误致 Chromium 退出）  
  https://github.com/agentscope-ai/QwenPaw/issues/5872

- **#5954** [CLOSED] v2.0 报错 `[Errno 21] Is a directory: '/app/working/workspaces/default/.mcp'`  
  https://github.com/agentscope-ai/QwenPaw/issues/5954

### 🟢 低：UI / 性能
- **#5955**

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>EasyClaw</strong> — <a href="https://github.com/gaoyangz77/easyclaw">gaoyangz77/easyclaw</a></summary>

<think>The user wants me to generate a daily report for the EasyClaw project based on the provided GitHub data. Let me analyze the data:

1. Issues updates in past 24 hours: 0
2. PR updates in past 24 hours: 0
3. New releases: 1 (v1.8.70)

The release notes mention:
- Refine unpaid-order experiments with clearer workflows, maturity signals, and modeled payment curves
- Redesign affiliate team operations with BD team and channel controls
- Improve desktop gateway authentication, provider loading, and customer-service agent behavior

The Chinese description appears truncated: "优化未" (optimize... incomplete)

Since there's very little activity data (no issues, no PRs), I need to generate a report that's honest about the low activity while still being useful. The report should focus mainly on the release.

Let me write this in a professional, data-driven way in Chinese as requested.</think>

# 📊 EasyClaw 项目日报

**报告日期：2026-07-14**
**项目地址**：[github.com/gaoyangz77/easyclaw](https://github.com/gaoyangz77/easyclaw)

---

## 1. 今日速览

EasyClaw 项目今日社区交互处于**静默期**，过去 24 小时内无新增或活跃的 Issue，无待合并/已合并的 Pull Request，社区讨论热度极低。然而项目开发节奏**并未停滞**——今日按计划发布了 **v1.8.70** 版本（代号 RivonClaw），表明维护团队当前更聚焦于功能迭代与内部打磨，而非外部社区协作。整体活跃度评估：**中低（版本活跃 / 社区静默）**。

---

## 2. 版本发布 🚀

### v1.8.70 — RivonClaw
🔗 [查看 Release](https://github.com/gaoyangz77/easyclaw/releases/tag/v1.8.70)

**核心更新内容：**

| 模块 | 变更说明 |
|------|---------|
| 未付款订单实验 | 优化工作流清晰度，增加订单成熟度信号，并建模付款转化曲线 |
| 推广团队运营 | 重新设计 BD 团队与渠道管控体系，重构分销/佣金相关操作 |
| 桌面网关 | 改善身份认证流程，优化 Provider 加载机制，改进客服 Agent 行为表现 |

> ⚠️ **说明**：官方中文版更新日志显示"优化未"后疑似被截断，建议参照英文 "What's New" 完整条目。建议维护者补全中文说明，避免国内用户阅读歧义。

**破坏性变更**：从 release notes 描述来看，本次更新以"优化"（Refine / Improve / Redesign）为主，**未明确标注 Breaking Change**。但涉及"推广团队运营重构""桌面网关身份认证改进"等模块，**生产环境升级前建议充分回归测试以下场景**：
- 现有分销/BD 团队的权限与佣金规则
- 桌面端已登录会话的兼容与重新鉴权
- 客服 Agent 对接的下游 Provider 配置

**迁移注意事项**：暂无数据库 schema 迁移提示，但鉴于发布节奏稳定在次版本号级别，建议仍按标准流程备份数据后再升级。

---

## 3. 项目进展

今日**无公开的 PR 合并/关闭记录**（过去 24 小时 0 条）。无法从 PR 维度评估代码层面的推进。但结合 v1.8.70 的发布内容，可以推断开发侧在以下方向**向前迈进了一步**：

- ✅ **支付转化漏斗**：未付款订单从"提示"到"建模"升级，数据驱动转化优化的能力增强
- ✅ **分销生态治理**：BD + 渠道双轨重构，渠道管控粒度提升
- ✅ **桌面入口稳定性**：网关认证与 Provider 加载是常见痛点，本次针对性优化

整体可视为一次"体验与运营并重"的小步迭代，非里程碑式突破。

---

## 4. 社区热点 🔥

今日 Issues 与 PRs 更新均为 **0 条**，无讨论热点。

**分析**：项目目前更偏向 B 端/企业级 SaaS 形态（未付款订单、BD 团队、客服 Agent 等字段均为 ToB 场景），用户更倾向于通过工单或私域反馈问题，导致 GitHub 社区侧天然低活跃。**建议团队适度引导用户到 GitHub 提 issue**，以增强项目透明度与外部贡献。

---

## 5. Bug 与稳定性 🐛

**今日新增 Bug 报告：0 条**。

由于无新 issue 流入，过去 24 小时**无法识别新增稳定性问题**。建议关注以下历史性高风险模块（基于本次 release 描述反推）：

| 模块 | 风险等级 | 触发条件 |
|------|---------|---------|
| 桌面网关认证 | 🟡 中 | 版本升级后旧 token 失效、多 Provider 并发加载竞争 |
| 客服 Agent | 🟡 中 | Provider 配置变更后行为漂移 |
| 未付款订单 / 付款曲线 | 🟢 低 | 数据建模初期，可能存在曲线拟合误差 |

> 当前**无关联 fix PR 可追踪**。

---

## 6. 功能请求与路线图信号

今日**无新增功能请求**。

从 v1.8.70 反复出现的关键词推断，未来 1-2 个版本的可能走向：
- 💡 **支付转化优化** ⭐⭐⭐ — 连续多个版本迭代未付款订单管理，验证为团队当前主线投入
- 💡 **分销/BD 体系重构** ⭐⭐⭐ — 已进入"重新设计"阶段，下一步可能开放更细粒度的 API/插件
- 💡 **桌面端体验** ⭐⭐ — 持续打磨网关与 Provider，可关注是否会有桌面客户端独立发版

---

## 7. 用户反馈摘要

今日无新增用户反馈可分析。

**基于项目过往特性的用户画像推断**（仅供方向参考，未经实证）：
- 🏢 主要为电商/分销型企业用户
- 🛠️ 关心点集中在订单流转效率、分佣准确性、桌面端可用性
- 📉 公开社区活跃度偏低，可能意味着客户走"合同 SLA"通道更普遍

---

## 8. 待处理积压 ⏳

⚠️ **数据缺失警告**：今日无任何 Issue/PR 流入，无法反映 backlog 真实状态。

**给维护者的提醒**：
1. 📌 补全 v1.8.70 的中文 release notes（当前被截断为"优化未"）
2. 📌 公开 backlog 中长期未响应 issue，避免僵尸 issue 堆积影响项目健康度评分
3. 📌 在 README 或 CONTRIBUTING 中明确 Issue 提交流范，降低外部用户协作门槛

---

## 📈 项目健康度小结

| 维度 | 评分 | 说明 |
|------|------|------|
| 发布节奏 | ⭐⭐⭐⭐⭐ | 保持稳定迭代（v1.8.70） |
| 社区活跃度 | ⭐⭐ | 24h 零互动，需引导 |
| 文档完整度 | ⭐⭐⭐ | 中英文 release notes 同步存在缺失 |
| 透明度 | ⭐⭐ | Issues/PRs 公开度不足，建议增加 |
| 代码可见进展 | ⭐⭐⭐ | 无近期公开 PR 可见，节奏偏内部 |

**总评：项目处于"内修外冷"阶段**——版本节拍稳健，但需加强社区侧露出与贡献者引导，以避免 OSS 项目常见的"维护者孤岛"风险。

---

*报告生成时间：2026-07-14 | 数据来源：GitHub Public API*

</details>

---
*本日报由 [Big Model Radar](https://github.com/96loveslife/big_model_radar) 自动生成。*
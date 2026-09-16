# OpenClaw 生态日报 2026-09-16

> Issues: 500 | PRs: 500 | 覆盖项目: 8 个 | 生成时间: 2026-09-16 04:15 UTC

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

<think>The user wants me to generate a daily report for the OpenClaw project based on the GitHub data provided. Let me analyze the data carefully and create a structured report in Chinese.

Key observations:
1. No new releases today
2. 500 issues updated (338 active, 162 closed) - very high activity
3. 500 PRs updated (325 pending, 175 merged/closed) - very high activity
4. Many issues are P0/P1 critical bugs
5. Major themes:
   - Memory leaks (RSS growing to 15.5GB)
   - Process leaks (zombie processes)
   - Gateway crashes and OOM
   - Session state bugs
   - Tool authority snapshot issues
   - Codex/Claude integration problems
   - SQLite WAL growth issues
   - Telegram/iMessage delivery issues
   - Authentication/billing issues

Top issues by comments:
1. #25592 (40 comments) - Text leaks to messaging channels between tool calls
2. #97616 (30 comments) - Process leaks causing zombie accumulation
3. #91588 (25 comments) - Gateway memory leak 350MB to 15.5GB
4. #91009 (24 comments) - Codex hook relay spawns CPU-bound processes
5. #119720 (20 comments) - Synchronous persistence blocks event loop

Top PRs - all have 0 comments but are rated:
- Several "platinum hermit" rated (P2)
- Two "gold shrimp" (P1)
- One "silver shellfish" (P1) - #145747 (Buzz mid-thread replies)

Let me structure this report carefully with all required sections.

For section 8 (待处理积压), I need to look at issues with high comments but no recent closure, indicating they may be stuck. Issues like #25592 (created Feb 2026, still open), #97616, #91588, #91009 etc. are all still open despite high discussion.

Let me write this in Chinese as requested, with professional, data-driven tone.</think>

# OpenClaw 项目日报 · 2026-09-16

---

## 一、今日速览

OpenClaw 项目今日呈现**高活跃度、高问题密度**的特征。过去 24 小时内共有 500 条 Issue 更新（338 条活跃 / 162 条已关闭）与 500 条 PR 更新（325 条待合并 / 175 条已合并或关闭），数据规模在 AI Agent 开源项目中处于头部水平。**当日无新版本发布**，但合并/关闭 PR 数量约占 PR 总量的 35%，表明工程端仍保持持续合入节奏。社区讨论高度集中在 **P0/P1 级别的 Gateway 稳定性与内存/进程泄漏问题**，多个老 Issue（2026-02 至 2026-06 创建）今日仍被频繁提及，说明若干"顽疾"尚未被根治。

---

## 二、版本发布

**今日无新版本发布**。从合并 PR 内容看，近期合入主要涉及：`fix(plugins):` 系列（注册器内存释放、bundled setup 重用、配置错误保留等）、`fix(gateway):` 取消后测试隔离、subagent fork 限制、`systemd` `%` 转义修复、WebSocket 帧保留等，未形成独立 Release 标签。

---

## 三、项目进展

今日已合并/关闭的 PR 主要集中在**插件系统、Gateway 子系统、内存管理与 CI 稳定性**四大方向：

| 领域 | 代表 PR | 价值 |
|---|---|---|
| **插件内存治理（partial memory release 系列）** | [#149643](https://github.com/openclaw/openclaw/pull/149643)、[#149644](https://github.com/openclaw/openclaw/pull/149644)、[#149645](https://github.com/openclaw/openclaw/pull/149645)、[#149646](https://github.com/openclaw/openclaw/pull/149646)、[#149648](https://github.com/openclaw/openclaw/pull/149648)、[#149675](https://github.com/openclaw/openclaw/pull/149675) | 共同缓解 [`#91588`](https://github.com/openclaw/openclaw/issues/91588) 所述的 Gateway RSS 350MB→15.5GB 内存泄漏，属本次最重要的根因治理方向 |
| **Gateway 测试/进程清理** | [#149668](https://github.com/openclaw/openclaw/pull/149668)、[#149005](https://github.com/openclaw/openclaw/pull/149005) | 修复 MCP/LSP stdio shutdown 误报与 placement 测试状态污染 |
| **Node pairing / 远程执行** | [#145741](https://github.com/openclaw/openclaw/pull/145741) | 修复 paired-node Claude 续接会丢失 Gateway context 的问题 |
| **运维与发布** | [#149676](https://github.com/openclaw/openclaw/pull/149676)、[#149559](https://github.com/openclaw/openclaw/pull/149559)、[#149629](https://github.com/openclaw/openclaw/pull/149629) | WebSocket 帧保留、systemd `%` 双写、配置文件空白路径 |
| **CI 优化** | [#149655](https://github.com/openclaw/openclaw/pull/149655)、[#149650](https://github.com/openclaw/openclaw/pull/149650)、[#149674](https://github.com/openclaw/openclaw/pull/149674) | Docker seed/QA smoke 门控、插件 fallback 装箱、legacy merge 证据保留 |

整体评估：**项目向前迈进了显著一步**，特别是 plugin 注册器的多层次内存释放构成了对长期内存泄漏问题的系统性回应；但**用户侧的崩溃/丢消息体验尚未在本日合入中得到根治**（见第五节）。

---

## 四、社区热点

今日评论与互动最高的 Issues 与 PR 如下：

| 排名 | Issue / PR | 评论数 | 链接 | 核心诉求 |
|---|---|---|---|---|
| 1 | [#25592](https://github.com/openclaw/openclaw/issues/25592) Text between tool calls leaks to messaging channels（diamond lobster / 安全影响） | **40** | [link](https://github.com/openclaw/openclaw/issues/25592) | 内部处理文本不应外发到 Slack/iMessage 等渠道，**UX + 隐私双重问题** |
| 2 | [#97616](https://github.com/openclaw/openclaw/issues/97616) Hook/tool 子进程泄漏，僵尸进程堆积 | **30** | [link](https://github.com/openclaw/openclaw/issues/97616) | 与 [`#91588`](https://github.com/openclaw/openclaw/issues/91588) 内存问题同源 |
| 3 | [#91588](https://github.com/openclaw/openclaw/issues/91588) Gateway RSS 350MB→15.5GB 内存泄漏 | **25** | [link](https://github.com/openclaw/openclaw/issues/91588) | OOM 反复触发 `launchd-handoff` 重启循环 |
| 4 | [#91009](https://github.com/openclaw/openclaw/issues/91009) Codex PreToolUse relay 派生 CPU 100% 进程 | **24** | [link](https://github.com/openclaw/openclaw/issues/91009) | Gateway RPC 卡死 |
| 5 | [#119720](https://github.com/openclaw/openclaw/issues/119720) 同步持久化阻塞 Gateway 事件循环 | **20** | [link](https://github.com/openclaw/openclaw/issues/119720) | 已有 `#140231`、`#138984` 部分修复 |

**背后共性诉求**：用户希望 Gateway 在长会话、长期运行、多 agent 高密度场景下保持**资源占用稳定**、**消息不丢**、**运行不卡**。这一诉求在排名前 5 的议题中以 5 种不同形态反复出现，说明它并非单一 bug，而是**结构性瓶颈**。

---

## 五、Bug 与稳定性

按严重程度排序（均反映在 2026.9.x 系列中）：

### 🔴 P0（阻断 / 严重回归）

| Issue | 描述 | 是否已有 fix PR |
|---|---|---|
| [#91009](https://github.com/openclaw/openclaw/issues/91009) | Codex PreToolUse relay 派生 CPU 100% 进程，Gateway RPC 卡死 | ❌ 无直接 PR |
| [#143524](https://github.com/openclaw/openclaw/issues/143524) | Agent SQLite WAL 无界增长（1.4–2.8 GB），阻塞 Gateway 启动（2026.9.2/9.3，Windows） | ❌ 无 |
| [#115642](https://github.com/openclaw/openclaw/issues/115642) | Billing cooldown 5 小时过 TTL，订阅 auth 永远无法恢复 | ❌ 无 |
| [#145929](https://github.com/openclaw/openclaw/issues/145929) | Auth profile logout 中断后 lock 永久 busy（已关闭，可能未根治） | ⚠️ 已 CLOSED |
| [#148866](https://github.com/openclaw/openclaw/issues/148866) | `gateway.bind=lan` 永久重启循环（Ubuntu/systemd，2026.9.1+9.4） | ⚠️ 已 CLOSED |
| [#146637](https://github.com/openclaw/openclaw/issues/146637) | 2026.9.3→2026.9.4 npm 全局安装升级失败（Linux Mint） | ❌ 无 |

### 🟠 P1（核心功能受损）

| Issue | 描述 | 是否已有 fix PR |
|---|---|---|
| [#25592](https://github.com/openclaw/openclaw/issues/25592) | Tool call 间文本泄漏到消息渠道 | ❌ 无 |
| [#97616](https://github.com/openclaw/openclaw/issues/97616) | Hook/tool 子进程未 reap | ⚠️ 多 PR 间接治理中 |
| [#91588](https://github.com/openclaw/openclaw/issues/91588) | Gateway 严重内存泄漏 | ⚠️ [#149643](https://github.com/openclaw/openclaw/pull/149643) 等系列 PR 正在分批修复 |
| [#119720](https://github.com/openclaw/openclaw/issues/119720) | 同步持久化阻塞事件循环 | ⚠️ 部分修复已落地 |
| [#111897](https://github.com/openclaw/openclaw/issues/111897) | 同 session lane 并发重复回复 | ❌ 无 |
| [#144911](https://github.com/openclaw/openclaw/issues/144911) | MCP init 超时拖垮 Gateway（unhandled rejection） | ❌ 无 |
| [#139847](https://github.com/openclaw/openclaw/issues/139847) | 2026.9.2 回归：active run 时新消息被丢弃 | ❌ 无 |
| [#139710](https://github.com/openclaw/openclaw/issues/139710) | mid-turn plugin 替换杀 turn + planner fallback | ❌ 无 |
| [#136311](https://github.com/openclaw/openclaw/issues/136311) | memory-core 19 GB 孤儿索引 DB 堆积 | ❌ 无 |
| [#137332](https://github.com/openclaw/openclaw/issues/137332) | mixed terminal requester-settle 永久重试 | ❌ 无 |
| [#118839](https://github.com/openclaw/openclaw/issues/118839) | WebChat→Telegram 重启恢复回归 | ❌ 无 |
| [#128140](https://github.com/openclaw/openclaw/issues/128140) | `memory_search` 工具 15s 必超时 | ❌ 无 |
| [#144809](https://github.com/openclaw/openclaw/issues/144809) | claude-cli 超长 turn 丢失生成回复 | ❌ 无 |
| [#148707](https://github.com/openclaw/openclaw/issues/148707) | 2026.9.4 回归：tool authority snapshot 缺失丢回复 | ❌ 无 |

### 🟡 P2（行为 / UX）

[#53628](https://github.com/openclaw/openclaw/issues/53628)（`${XDG_CONFIG_HOME}` 未展开）、[#116512](https://github.com/openclaw/openclaw/issues/116512)（Telegram 进度重复首段）、[#146004](https://github.com/openclaw/openclaw/issues/146004)（2026.9.3 heartbeat 误触发）、[#143278](https://github.com/openclaw/openclaw/issues/143278)（heartbeat 泄漏到 Telegram）、[#143632](https://github.com/openclaw/openclaw/issues/143632)（iMessage 入站重投 2-3 次）、[#140129](https://github.com/openclaw/openclaw/issues/140129)（Anthropic 缓存卡 46k）、[#138409](https://github.com/openclaw/openclaw/issues/138409)（plugin 更新 deadlock）、[#112313](https://github.com/openclaw/openclaw/issues/112313)（outbound 死信永久滞留）、[#115354](https://github.com/openclaw/openclaw/issues/115354)（catch-all binding 覆盖 ACP）等。

**判断**：今日仅有约 10–15% 的 P0/P1 Issue 已存在直接对应的修复 PR，**结构性缺口仍然显著**，特别是会话状态、消息丢失、tool authority snapshot 三大类。

---

## 六、功能请求与路线图信号

今日评论靠前的功能请求与建议：

| Issue | 诉求 | 路线图信号 |
|---|---|---|
| [#86881](https://github.com/openclaw/openclaw/issues/86881)（CLOSED） | 无 AI harness 的 Gateway-lite 模式 | 已关闭，可能被否决或转 PR |
| [#44309](https://github.com/openclaw/openclaw/issues/44309) | A2A 单向 dispatch（无 reply-back ping-pong） | 长期 stale，需维护者决策 |
| [#51441](https://github.com/openclaw/openclaw/issues/51441) | 在 `session_status` 与 agent runtime 暴露解析后的真实 backend 模型 | 适合 LiteLLM 等代理场景 |
| [#76247](https://github.com/openclaw/openclaw/issues/76247) | 多 surface（cron / sessions_spawn / acp_downstream 等）原生 ACK/landing telemetry | 已被长期讨论，与 subagent 完成路径重构相关 |
| [#44291](https://github.com/openclaw/openclaw/issues/44291) | 原生 PowerShell 贡献者命令冒烟测试 | 面向 Windows 贡献者路径 |
| [#49259](https://github.com/openclaw/openclaw/issues/49259) | Dashboard 中清理孤儿会话 | UX 改进型请求 |

**最可能进入下个版本的**：功能请求整体偏 stale（多个 issue 标注 `needs-product-decision` 且无响应）。真正会在近期合入的多为 PR 列表中已有的"准 feature"工作，如 [#145747](https://github.com/openclaw/openclaw/pull/145747)（Buzz mid-thread 血统保留）、[#146646](https://github.com/openclaw/openclaw/pull/146646)（多问答案部分答复回报）、[#149470](https://github.com/openclaw/openclaw/pull/149470)（UI agent identity 保存恢复）。

---

## 七、用户反馈摘要

从 Issues 评论中提炼出的真实声音：

- **崩溃与可靠性焦虑**（[`#91588`](https://github.com/openclaw/openclaw/issues/91588)、[`#97616`](https://github.com/openclaw/openclaw/issues/97616)、[`#91009`](https://github.com/openclaw/openclaw/issues/91009)）：
  > "RSS grows from ~350 MB at startup to 15.5 GB over 2–3 days of normal use, eventually causing the process to be killed by the OS OOM killer. This triggers repeated `launchd-handoff` restart cycles."

- **消息丢失 / 不一致回复**（[`#111897`](https://github.com/openclaw/openclaw/issues/111897)、[`#139847`](https://github.com/openclaw/openclaw/issues/139847)、[`#148707`](https://github.com/openclaw/openclaw/issues/148707)）：同一 session 内出现并发、重复或直接丢弃的回复，用户体验为"AI 突然说错了或沉默了"。

- **文本/上下文外泄**（[`#25592`](https://github.com/openclaw/openclaw/issues/25592)、[`#143278`](https://github.com/openclaw/openclaw/issues/143278)）：heartbeat 内部输出、工具调用间的 narration 被发送到 Telegram/Discord，**对隐私敏感用户构成信任问题**。

- **运维挫败**（[`#146637`](https://github.com/openclaw/openclaw/issues/146637)、[`#148866`](https://github.com/openclaw/openclaw/issues/148866)、[`#145929`](https://github.com/openclaw/openclaw/issues/145929)）：升级失败、LAN 绑定陷入循环、auth 锁死——反映出 **0.9.x 系列在运维链路上的脆弱性**。

- **满意度信号**：plugin 系统的 Lossless 重载、注册器释放系列 PR（[#149643–149675](https://github.com/openclaw/openclaw/pulls?q=is%3Apr+author%3APatrick-Erichsen+is%3Aclosed)）已合并，说明维护者对核心稳定性问题持积极推进态度，社区对此持谨慎乐观。

---

## 八、待处理积压（提醒维护者关注）

下列 Issue 评论活跃度高但**至今未关闭**，且创建时间较早，存在响应不足风险：

| Issue | 创建时间 | 评论数 | 链接 | 现状 |
|---|---|---|---|---|
| [#25592](https://github.com/openclaw/openclaw/issues/25592) | 2026-02-24 | 40 | [link](https://github.com/openclaw/openclaw/issues/25592) | **6 个月未根治**，影响所有 channel |
| [#91588](https://github.com/openclaw/openclaw/issues/91588) | 2026-06-09 | 25 | [link](https://github.com/openclaw/openclaw/issues/91588) | 已有系列 PR 但 Issue 未关闭 |
| [#91009](https://github.com/openclaw/openclaw/issues/91009) | 2026-06-06 | 24 | [link](https://github.com/openclaw/openclaw/issues/91009) | P0 长期缺 fix PR |
| [#53628](https://github.com/openclaw/openclaw/issues/53628) | 2026-03-24 | 14 | [link](https://github.com/openclaw/openclaw/issues/53628) | `XDG_CONFIG_HOME` 解释问题已 6 个月 |
| [#51441](https://github.com/openclaw/openclaw/issues/51441) | 2026-03-21 | 9 | [link](https://github.com/openclaw/openclaw/issues/51441) | feature 请求，stale |
| [#44309](https://github.com/openclaw/openclaw/issues/44309) | 2026-03-12 | 10 | [link](https://github.com/openclaw/openclaw/issues/44309) | A2A 单向 dispatch，stale |
| [#49259](https://github.com/openclaw/openclaw/issues/

---

## 横向生态对比

<think>The user wants me to generate a comprehensive cross-project comparison analysis report based on the daily reports from 7 projects:
1. OpenClaw (核心参照)
2. NanoBot
3. PicoClaw
4. IronClaw (无活动)
5. LobsterAI
6. QwenPaw
7. Hermes Agent
8. OpenHuman

I need to write this in Chinese, professional, data-driven, suitable for technical decision-makers and developers. Let me structure this carefully.

Let me think about what makes this ecosystem interesting:

**Scale comparison:**
- OpenClaw: 500 issues, 500 PRs - massive scale
- Hermes Agent: 50 issues, 50 PRs - high activity
- OpenHuman: 37 issues, 32 PRs - high activity
- LobsterAI: 3 issues, 28 PRs - PR-heavy
- QwenPaw: 20 issues, 50 PRs - high activity
- NanoBot: 3 issues, 20 PRs - moderate
- PicoClaw: 2 issues, 4 PRs - low
- IronClaw: 0 - dormant

**Common themes:**
1. **Gateway/memory stability** - OpenClaw (#91588 memory leak 15.5GB), Hermes Agent (zombie sessions), NanoBot (SQLite), OpenHuman (CI gate)
2. **Session state lifecycle** - OpenClaw (#25592, #119720), Hermes Agent (phantom/zombie sessions), OpenHuman (replay metadata)
3. **Plugin/Skill ecosystem** - OpenClaw (plugin memory release series), OpenHuman (skill registry), NanoBot (skill fixes)
4. **Multi-channel/IM integration** - OpenClaw (Telegram/iMessage), NanoBot (QQ/Feishu/email), PicoClaw (QQ), Hermes Agent (Discord), QwenPaw (WeChat)
5. **MCP integration** - OpenClaw (MCP), Hermes Agent (MCP), OpenHuman (MCP), QwenPaw (MCP)
6. **Cross-platform compatibility** - Hermes Agent (Windows/macOS), OpenHuman (Windows Tauri), NanoBot (TUI cross-platform)
7. **Billing/auth issues** - OpenClaw (billing cooldown, auth lock), Hermes Agent (Portal billing)
8. **Subagent orchestration** - OpenClaw, OpenHuman (subagent delegation), QwenPaw (spawn subAgent bug), NanoBot (Dream)
9. **Tool authority/permission** - OpenClaw (tool authority snapshot), OpenHuman (approval gate)
10. **Long-running stability** - OpenClaw (RSS growth), OpenHuman (subagent), NanoBot (Dream loops)

**Differentiators:**
- OpenClaw: Most comprehensive, largest scale, complex Gateway architecture
- NanoBot: Multi-modal workbench (terminal/webui)
- PicoClaw: Minimal, single-contributor, lightweight
- IronClaw: Dormant
- LobsterAI: Built on OpenClaw (compatibility fixes)
- QwenPaw: Hub multi-tenant focus
- Hermes Agent: Desktop app, multi-provider
- OpenHuman: Skill registry ecosystem, embedded API

**Maturity assessment:**
- OpenClaw: Mature, scale issues
- Hermes Agent: Mature, cross-platform challenges
- OpenHuman: Active development, CI issues
- QwenPaw: Active, Hub roadmap
- NanoBot: Steady releases
- LobsterAI: Dependents on OpenClaw
- PicoClaw: Niche/single contributor risk
- IronClaw: Inactive

Let me write a professional, data-driven report now.

I need to:
- Use tables effectively
- Cite specific data
- Be concise but comprehensive
- 7 sections as requested
- Professional Chinese language
- Target audience: technical decision-makers and developers

Let me draft this carefully.</think>

# AI 智能体开源生态横向对比报告

**报告日期**：2026-09-16
**覆盖项目**：OpenClaw、NanoBot、PicoClaw、IronClaw、LobsterAI、QwenPaw、Hermes Agent、OpenHuman

---

## 一、生态全景

当前个人 AI 助手/自主智能体开源生态呈现**"双高峰、多纵深、长尾休眠"**的格局：OpenClaw（500 Issues / 500 PRs）与 Hermes Agent、OpenHuman、QwenPaw（50/50、37/32、20/50）形成头部品类第一梯队，NanoBot、LobsterAI（3/20、3/28）处于稳定迭代的中坚带，PicoClaw（2/4）显现单点贡献风险，IronClaw 已进入完全休眠。**整体上"会话生命周期管理"与"多渠道/MCP 集成稳定性"是当下最普遍的技术债**；OpenClaw 的 Gateway 内存泄漏（350MB→15.5GB）、Hermes Agent 的僵尸会话租约、OpenHuman 的子代理调度紊乱、QwenPaw 的 spawn subAgent 全失败，构成生态级的"长会话综合症"。从市场信号看，**多租户 Hub（QwenPaw）、终端统一工作台（NanoBot）、技能注册中心（OpenHuman）**正在替代单一聊天机器人形态，成为下一阶段差异化竞争点。

---

## 二、各项目活跃度对比

| 项目 | Issues（活跃/关闭） | PRs（待合并/已合并） | 新版本 | 关闭率 | 健康度 |
|---|---|---|---|---|---|
| **OpenClaw** | 500 (338/162) | 500 (325/175) | ❌ 无 | 32% / 35% | 🟠 中（结构性问题多） |
| **Hermes Agent** | 50 (34/16) | 50 (45/5) | ❌ 无 | 32% / 10% | 🟡 中偏低（合并率低） |
| **OpenHuman** | 37 (11/26) | 32 (2/30) | ❌ 无 | 70% / 94% | 🟢 优（快速消化） |
| **QwenPaw** | 20 (6/14) | 50 (24/26) | ❌ 无 | 70% / 52% | 🟢 良（Hub 路线清晰） |
| **LobsterAI** | 3 (1/2) | 28 (10/18) | ❌ 无（9.15 集成中） | 67% / 64% | 🟢 良（聚焦 compat） |
| **NanoBot** | 3 (3/0) | 20 (9/11) | ✅ v0.3.5 | 0% / 55% | 🟢 优（发布驱动） |
| **PicoClaw** | 2 (2/0) | 4 (3/1) | ❌ 无 | 0% / 25% | 🔴 低（单点贡献） |
| **IronClaw** | 0 | 0 | ❌ 无 | — | ⚫ 休眠 |

**关键观察**：
- **OpenClaw 体量是次梯队的 5-10 倍**，Issue 关闭率（32%）明显低于 OpenHuman（70%）与 QwenPaw（70%），反映规模带来的运维压力；
- **PR 合并率分化明显**：OpenHuman 94% vs Hermes Agent 10%，前者属于"快速清积压"模式，后者属于"待评审堆积"模式；
- **当日发布仅 NanoBot 一家**（v0.3.5 终端工作台），其他项目均处于"修而不发"状态。

---

## 三、OpenClaw 在生态中的定位

| 维度 | OpenClaw | 同梯队对照 |
|---|---|---|
| **Issue/PR 规模** | 500/500（头部） | Hermes Agent 50/50、OpenHuman 37/32、QwenPaw 20/50 |
| **架构复杂度** | Gateway + Plugins + MCP + Channels + Skills + A2A + ACP + Cron | QwenPaw/OpenHuman 较轻，NanoBot 收敛于工作台，PicoClaw 极简 |
| **集成深度** | 16+ 渠道（Slack/Telegram/iMessage/Discord/Feishu/QQ/WeChat…）、10+ Provider、Anthropic/OpenAI/Codex/Claude/Gemini 全栈 | Hermes Agent 重 Desktop + 多 provider；NanoBot 重工作台统一 |
| **社区规模** | 月度高评论议题普遍 20-40 条，单 Issue `#25592` 累计 40 评论 | Hermes Agent 头部议题 28 评论（Debian 安装）；QwenPaw `#7318` 27 评论（Hub 路线） |
| **下游生态** | 直接派生 LobsterAI（兼容性修复链路），影响网易有道产品线 | OpenHuman/QwenPaw 暂无公开下游 |
| **技术债深度** | 最深（结构性瓶颈）：内存泄漏、session lane 并发、tool authority snapshot、auth 锁死 | Hermes Agent 类似深度但聚焦会话；OpenHuman 处于快速重构期 |

**核心定位差异**：OpenClaw 是**"通用 AI Agent OS"**路线——以 Gateway 为中心，插件系统、渠道生态、A2A 协议、子代理调度、Cron/Kanban 全部内建，是当前生态中**复杂度天花板**。这一定位带来两个后果：①能力边界最广、可承载企业级混合场景；②维护成本最高、技术债最重，单次修复常涉及 5+ 子系统联动（如 `#91588` 内存泄漏横跨 plugin 注册器、bundled setup、config cache、partial release）。

---

## 四、共同关注的技术方向

### 1. 会话生命周期正确性（涉及 5/8 项目）
- **OpenClaw**：`#25592`（tool call 间文本泄漏）、`#119720`（同步持久化阻塞 event loop）、`#139847`（active run 时新消息丢弃）
- **Hermes Agent**：`#104691`（僵尸会话租约锁死）、`#111999`（Phantom-Sessions）、`#80280`（Kanban 超时 worker 留活进程组）
- **OpenHuman**：`#6282`（replay transcript 元数据错乱）、`#6294`（失败 chat turn 抹去已完成工作）
- **QwenPaw**：`#7678`（spawn subAgent 全 timeout 失败）
- **NanoBot**：`#5781`（Dream 1-2h 循环读取同一文件，~200 次工具调用）

**共性诉求**：会话状态的"创建-执行-暂停-恢复-销毁"五阶段在长会话、多 agent、并发场景下出现系统性退化。**这是当前生态最高优先级技术债**。

### 2. MCP（Model Context Protocol）集成稳定性（涉及 4/8 项目）
- **OpenClaw**：`#144911`（MCP init 超时拖垮 Gateway）、MCP stdio shutdown 误报
- **Hermes Agent**：`#73997`（mcp login OAuth 端口自冲突）、`#98382`（并发 hook 被误判超时）
- **OpenHuman**：`#6302`（编排器不委派 MCP/Skill 子代理）、`#6313`（mcp_registry_list_tools RPC 不可达）、`#6317`（端到端栈共享进程级 tool registry）
- **QwenPaw**：`#7716`（MCP 无法注册）、`#7764`（Dagu MCP zlib header）、`#7735`（MCP HTTP body-framing 污染）

**共性诉求**：MCP 作为生态事实标准已普及，但**注册发现、错误恢复、子代理委托、HTTP/stdio 协议边界**仍普遍脆弱。

### 3. 跨平台 / Windows 兼容性（涉及 4/8 项目）
- **OpenClaw**：`#143524`（Windows SQLite WAL 阻塞）、`#44291`（PowerShell 贡献者命令）
- **Hermes Agent**：`#77394`（Windows hermes update 失败）、`#63383`（Desktop 忽略 docker_volumes）、`#42199`（Intel macOS x86_64 构建）
- **OpenHuman**：`#6266`（Windows pnpm tauri 失败 + Dockerfile 残留）、`#6303`（Windows 长路径持久化）
- **NanoBot**：`#5787`（原生 TUI 跨平台 wheel 打包）

**共性诉求**：Windows 桌面端是普遍短板；Linux/macOS/Windows 三端一致性是产品化必需。

### 4. 多渠道噪声 / 系统消息折叠（涉及 4/8 项目）
- **OpenClaw**：`#143278`（heartbeat 泄漏到 Telegram）、`#116512`（Telegram 进度重复首段）、`#143632`（iMessage 入站重投 2-3 次）
- **NanoBot**：`#5784`（QQ 自动压缩通知作为普通消息）、`#5780`（停止发送 context compaction 通知）
- **Hermes Agent**：`#111719`（Bot 轮询 2×/分钟噪声）
- **OpenHuman**：`#6289`（关闭空 turn 时基于工具记录生成回复）

**共性诉求**：渠道用户对"系统级噪声"的容忍度持续下降，需要可配置的折叠/隐藏机制。

### 5. 工具权限与审批边界（涉及 3/8 项目）
- **OpenClaw**：`#148707`（tool authority snapshot 缺失丢回复）
- **OpenHuman**：`#6315`（审批闸门包在工具策略外，被拒 use_skill 仍弹审批）
- **NanoBot**：`#5750`（稳定 per-invocation tool context）

**共性诉求**：工具粒度的 authority 控制正在从"全有/全无"走向"per-invocation context + 策略化审批"。

---

## 五、差异化定位分析

| 项目 | 功能侧重 | 目标用户 | 技术架构特征 |
|---|---|---|---|
| **OpenClaw** | 通用 AI Agent OS（全栈：渠道 + 子代理 + A2A + ACP + 技能 + Cron + Kanban） | 企业级、混合场景、要求"一个 gateway 治理全部 agent"的用户 | Plugin 钩子体系 + Gateway 中心调度 + Node Pairing 远程执行；复杂度天花板 |
| **NanoBot** | 一个 Agent，多端工作台（终端 TUI + 浏览器 WebUI + 聊天应用） | 个人开发者、CLI 重度用户、跨设备连续性需求 | 共享执行内核 + 原生 TUI wheels 打包；v0.3.5 跨端里程碑 |
| **PicoClaw** | 极简轻量、配置驱动 | 资源受限场景、单 key 自托管 | `pkg/config` 集中式配置；单贡献者风险 |
| **IronClaw** | （休眠） | — | — |
| **LobsterAI** | OpenClaw 兼容层 + 网易产品形态（Cowork/技能/POPO/飞书） | 网易系产品用户 | 严格跟随 OpenClaw 版本节奏；本次日报 18 条 PR 几乎全是 OpenClaw 升级 compat |
| **QwenPaw** | 多租户 Hub + Workbench + 主题可定制 + 实时语音 | 团队/企业协作场景 | Hub 模型网关 + 成员治理 + 用量仪表盘（`#7779`）；2.2.x 路线图 |
| **Hermes Agent** | Desktop-first + 多 provider + OAuth 计费透明 + 跨平台安装 | 本地化 AI 代理用户、跨平台爱好者 | Desktop/Tauri + 计划任务（Kanban/Cron）+ Skills 守卫 |
| **OpenHuman** | 技能/MCP 注册中心 + 嵌入式 API + 本地 LLM | 第三方嵌入者、隐私敏感用户、技能市场参与者 | Runtime → Agent 库 API；ClawHub/skills.sh 注册中心；本地推理免登录 |

**架构路线分化**：
- **Gateway 中心化**（OpenClaw、LobsterAI）vs **Workbench 中心化**（NanoBot）vs **Hub 多租户**（QwenPaw）vs **Desktop 优先**（Hermes Agent）vs **Skill Marketplace**（OpenHuman）——这是生态最重要的五条技术路线分支。

---

## 六、社区热度与成熟度分层

### 🔥 快速迭代层（建议密切跟踪）
- **OpenHuman**：32 PR 中 30 合并（94%），主干从"多线告警"转为"关键路径打通"，CI 闸门、agent 调度、技能生态三条线同时推进，**处于 v0.63.x → v0.64 重构冲刺期**。
- **QwenPaw**：50 PR 触达 + 27 评论的高互动 Hub 路线讨论（`#7318`），first-time-contributor 友好（4 位新人已合入），**Hub 多租户版 2.2.0 是下一个里程碑**。
- **NanoBot**：v0.3.5 发布日，11 PR 合入 + 2 项安全修复 + 1 项打包改进，**稳定的发布驱动型节奏**。

### ⚙️ 质量巩固层（重点关注债务清理）
- **OpenClaw**：体量最大但关闭率最低（32%），plugin 内存释放系列（`#149643–#149675`）是结构性回应，但**用户侧消息丢失 / tool authority / session lane 三大类仍无根治 PR**。
- **LobsterAI**：28 PR 中 18 已合并，全部围绕 OpenClaw 8.1 升级 compat，**作为下游对 OpenClaw 质量高度敏感**。
- **Hermes Agent**：50 Issue / 50 PR 但合并率仅 10%，**评审瓶颈明显**；长尾僵尸会话、跨平台更新、Kanban 协议污染等问题已堆积。

### 📉 风险信号层（需介入）
- **PicoClaw**：4 PR + 2 Issue 全数 `[stale]` 标记，**单点贡献风险极高**（@sting8k 一人占绝对活跃度），外部贡献者提交（Keenable provider）无明确反馈节奏。
- **IronClaw**：24 小时完全无活动，**已进入事实休眠**；若属战略放弃应明示归档计划，避免社区误判。

---

## 七、值得关注的趋势信号

### 趋势 1：从"Chatbot"到"Agent Workbench"的范式迁移
**证据**：NanoBot v0.3.5（终端 + WebUI 共享内核）、OpenHuman `AgentSpec` 嵌入式 API、QwenPaw `#7790` 统一 Chat Workbench Shell（可拖拽/可关闭）。
**开发者启示**：单点对话界面已不足以承载复杂任务流；项目方应尽早规划**任务面板 + 工作流可视化 + 多 artifact 协同**能力。

### 趋势 2：MCP 成为

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

<think>The user wants me to generate a structured daily report for the NanoBot project based on GitHub data from 2026-09-16. Let me analyze the data carefully:

**Data Overview:**
- Past 24 hours Issues: 3 (new/active: 3, closed: 0)
- Past 24 hours PRs: 20 (pending: 9, merged/closed: 11)
- New releases: 1 (v0.3.5)

**Key observations:**

1. **v0.3.5 Release** - Major release bringing terminal workbench and cross-platform conversation continuity (browser, terminal, chat apps)

2. **Issues (all OPEN):**
   - #5781 - Dream runs looping on same read_file calls (1-2h, up to 200 tool calls), dream.maxIterations deprecated
   - #5784 - QQ channel auto-compaction notices appearing as regular messages
   - #5788 - Announcement of v0.3.5 release

3. **PRs Analysis:**

OPEN (9):
- #5652 - Gateway signed direct delivery webhook (feature/security)
- #5748 - Recovery: persist partial tool progress at batch boundaries
- #5666 - aimlapi.com as OpenAI-compatible provider
- #5626 - copy_file and move_file filesystem tools
- #5779 - Serialize concurrent session file writes
- #5750 - Stable per-invocation tool context
- #5780 - Stop sending context compaction notifications
- #5777 - Mobile drawer stealing focus
- #5776 - Search in provider pickers

CLOSED (11):
- #5789 - docs: refresh README WebUI screenshots
- #5782 - fix(dream): enforce configured iteration limit
- #5787 - build: bundle native TUI in platform wheels
- #5785 - chore(release): prepare v0.3.5
- #5786 - refactor(webui): animate segmented control indicator
- #5783 - fix(providers): preserve assistant content with tool calls
- #5775 - fix(tools): scope file-read dedup to model context
- #5778 - fix(email): require trusted authentication results
- #5757 - fix(session): search older pages of persisted conversation history
- #5768 - fix(feishu): use /page/cli verification URL for QR onboarding
- #5697 - fix(qq): protect inbound attachment downloads from SSRF

**Activity Assessment:**
- Very active day with v0.3.5 release
- 11 PRs merged/closed - high throughput
- Mix of bug fixes, security fixes, features, documentation
- Strong focus on TUI, webui improvements, provider/channel fixes

**Security items:**
- #5778 - Email authentication hardening
- #5697 - QQ attachment SSRF protection
- #5652 - Signed webhook delivery

**Bug fixes:**
- #5782 - Dream iteration limit
- #5783 - Provider content preservation
- #5775 - File-read dedup scope
- #5757 - Session history search
- #5768 - Feishu QR onboarding
- #5777 - Mobile focus stealing

**Features:**
- #5787 - TUI in platform wheels
- #5666 - aimlapi provider
- #5626 - copy/move file tools
- #5750 - Tool invocation context
- #5776 - Provider search

**Documentation:**
- #5789 - README screenshots

Let me structure the report now in Chinese with professional tone. I need to provide:
1. 今日速览
2. 版本发布
3. 项目进展
4. 社区热点
5. Bug 与稳定性
6. 功能请求与路线图信号
7. 用户反馈摘要
8. 待处理积压

Let me write this out carefully.</think>

# NanoBot 项目日报 · 2026-09-16

---

## 1. 今日速览

NanoBot 今日迎来 **v0.3.5 版本发布**这一里程碑事件，工作室（workbench）正式登陆终端，并打通了浏览器、终端与聊天应用之间的会话连续性。仓库 24 小时内 **关闭/合并了 11 个 PR**，涉及 Bug 修复、安全加固、WebUI 体验优化与发布工程，吞吐量处于近期高位。社区侧 3 条新 Issue 全部聚焦在使用痛点（Dream 失控循环、QQ 频道噪声、Release 公告），反映用户正积极与 v0.3.5 互动。综合来看，项目处于**发布驱动的稳健推进期**，健康度良好。

---

## 2. 版本发布

### 🐈 v0.3.5 已发布
- **发布 PR**：[#5785 chore(release): prepare v0.3.5](https://github.com/HKUDS/nanobot/pull/5785)
- **官方公告 Issue**：[#5788 Nanobot 0.3.5 released!](https://github.com/HKUDS/nanobot/issues/5788)
- **核心亮点**：
  - **"一个 Agent，更多工作场景"**：原生终端客户端 `nanobot` 与浏览器客户端 `nanobot webui` 共用同一套执行内核
  - 原生 TUI 客户端已纳入官方 PyPI 平台 wheels（见 [#5787](https://github.com/HKUDS/nanobot/pull/5787)），无需首次启动下载或额外安装 Bun
- **破坏性变更**：从现有 Issue/PR 描述来看无明确 Breaking Change；release PR 明确"不发布 tag / GitHub Release / PyPI 包 / 文档部署"以外的内容
- **迁移注意事项**：
  - 用户需更新 Python 端版本至 0.3.5，并使用匹配架构的 wheel
  - 安装后建议核对原生 TUI 是否随包正确打包（checksum 已校验）
  - README WebUI 截图已同步刷新（[#5789](https://github.com/HKUDS/nanobot/pull/5789)），文档与新界面保持一致

---

## 3. 项目进展（今日合并/关闭 PR）

| 类别 | PR | 说明 |
|---|---|---|
| 🚀 发布工程 | [#5785](https://github.com/HKUDS/nanobot/pull/5785) | 完成 v0.3.5 发布准备 checklist |
| 📦 打包 | [#5787](https://github.com/HKUDS/nanobot/pull/5787) | 原生 TUI 嵌入 5 个平台 wheel，PyPI 安装即可开箱使用 |
| 🐛 Bug 修复 | [#5782 fix(dream): enforce configured iteration limit](https://github.com/HKUDS/nanobot/pull/5782) | 恢复 `agents.defaults.dream.maxIterations` 配置，默认 15，覆盖手动与定时 Dream |
| 🐛 Bug 修复 | [#5783 fix(providers): preserve assistant content with tool calls](https://github.com/HKUDS/nanobot/pull/5783) | 停止剥离含 `tool_calls` 的 assistant `content`，移除历史兼容开关 |
| 🐛 Bug 修复 | [#5775 fix(tools): scope file-read dedup to model context](https://github.com/HKUDS/nanobot/pull/5775) | `read_file` 去重仅作用于当前请求上下文，避免压缩后误命中 |
| 🐛 Bug 修复 | [#5757 fix(session): search older pages of persisted conversation history](https://github.com/HKUDS/nanobot/pull/5757) | `search_sessions` / `read_session` 翻页搜索不再漏掉旧消息 |
| 🐛 Bug 修复 | [#5768 fix(feishu): use /page/cli verification URL for QR onboarding](https://github.com/HKUDS/nanobot/pull/5768) | 修复 v0.3.0 飞书扫码登录报"Link expired"问题 |
| 🔒 安全加固 | [#5778 fix(email): require trusted authentication results](https://github.com/HKUDS/nanobot/pull/5778) | 邮件入站边界强制受信认证服务，结构化解析并校验发件域 |
| 🔒 安全加固 | [#5697 fix(qq): protect inbound attachment downloads from SSRF](https://github.com/HKUDS/nanobot/pull/5697) | QQ 附件下载前校验 URL、禁用重定向、仅接受 200 |
| 🎨 WebUI | [#5786 refactor(webui): animate segmented control indicator](https://github.com/HKUDS/nanobot/pull/5786) | 分段控件改为单一指示器动画，主题切换复用组件 |
| 📖 文档 | [#5789 docs: refresh README WebUI screenshots](https://github.com/HKUDS/nanobot/pull/5789) | 更新 WebUI 截图画廊，覆盖新会话、工作台、MCP 目录、Automations 日历 |

**整体进度评估**：今日 PR 净增推进 ≥10 项可量化的代码改动，其中 2 项属于安全领域（邮件认证、QQ SSRF），1 项为版本发布，3 项为关键 Bug 修复。仓库的可观测质量正在稳步上升。

---

## 4. 社区热点

按评论数与互动度排序：

| 排名 | 议题 | 类型 | 互动 |
|---|---|---|---|
| 1 | [#5781 Dream runs 1–2h looping on same read_file calls](https://github.com/HKUDS/nanobot/issues/5781) | Bug · p2 | 💬 3 评论 |
| 2 | [#5784 QQ: automatic compaction notices sent as standalone messages](https://github.com/HKUDS/nanobot/issues/5784) | Bug | 💬 1 评论 |
| 3 | [#5788 Nanobot 0.3.5 released! Let's go!](https://github.com/HKUDS/nanobot/issues/5788) | 公告 | 👍 0（刚发布） |
| 4 | [#5666 feat(providers): add aimlapi.com as gateway provider](https://github.com/HKUDS/nanobot/pull/5666) | 新 Provider | 商业合作意向 |

**诉求分析**：
- 用户最关心的是 **Dream 长任务失控**——`maxIterations` 形同虚设，导致 API 调用浪费 1–2 小时，说明大家对"定时反思/整合"功能高度依赖但又缺乏有效护栏
- **渠道噪声（QQ/微信/Telegram 等）**成新晋痛点，与 [#5719] 同类问题反复出现，提示需要统一的"系统消息折叠"机制
- 商业方（aimlapi.com）主动提交集成 PR，反映 NanoBot 已成为模型聚合方愿意接入的"分发渠道"

---

## 5. Bug 与稳定性

| 严重度 | 问题 | 状态 | 修复 PR |
|---|---|---|---|
| 🔴 高 | [#5781](https://github.com/HKUDS/nanobot/issues/5781) Dream 循环读取同一文件 1–2 小时，浪费算力 | 已有修复方向但 Issue 仍 OPEN | [#5782](https://github.com/HKUDS/nanobot/pull/5782) 已关闭 ✓（修复已合入，需 Issue 关闭） |
| 🟡 中 | [#5784](https://github.com/HKUDS/nanobot/issues/5784) QQ 频道自动压缩通知作为普通消息发出 | 已识别，但未关闭 | [#5780](https://github.com/HKUDS/nanobot/pull/5780) 待合并 |
| 🟢 低（已修复）| Feishu 扫码"Link expired" | 已修复 | [#5768](https://github.com/HKUDS/nanobot/pull/5768) ✓ |
| 🟢 低（已修复）| WebUI 移动端抽屉夺焦搜索按钮 | 已修复 | [#5777](https://github.com/HKUDS/nanobot/pull/5777) |
| 🟢 低（已修复）| 旧会话历史搜索漏页 | 已修复 | [#5757](https://github.com/HKUDS/nanobot/pull/5757) |
| 🟢 低（已修复）| 文件读去重越过上下文边界 | 已修复 | [#5775](https://github.com/HKUDS/nanobot/pull/5775) |

**结论**：今日报告的所有用户感知 Bug **均已存在或即将合入修复**，未出现重大 P0 级回归。

---

## 6. 功能请求与路线图信号

| 优先级 | 请求/提案 | 当前状态 | 趋势判断 |
|---|---|---|---|
| 🔥 高 | 限制 Dream / Agent 循环的最大步数与去重策略 | [#5782](https://github.com/HKUDS/nanobot/pull/5782) 已合 | 已纳入 v0.3.5 修复链 |
| 🔥 高 | 渠道系统消息折叠 / 可配置 | [#5780](https://github.com/HKUDS/nanobot/pull/5780) 待合并 | 强烈信号：至少 2 个 Issue (#5719, #5784) 同类诉求 |
| ⭐ 中 | 文件系统新增 `copy_file` / `move_file` 工具 | [#5626](https://github.com/HKUDS/nanobot/pull/5626) OPEN · conflict | 需解决冲突，可能进入下一版本 |
| ⭐ 中 | 工具调用 ContextVar（每调用稳定标识）| [#5750](https://github.com/HKUDS/nanobot/pull/5750) OPEN | 是批处理恢复 (#5748) 的基础，路线图互补 |
| ⭐ 中 | aimlapi 接入作为内置 Provider | [#5666](https://github.com/HKUDS/nanobot/pull/5666) OPEN | 商业合作 + 技术贡献双驱动，纳入概率较高 |
| 🆕 新 | Settings Provider 下拉支持搜索 | [#5776](https://github.com/HKUDS/nanobot/pull/5776) OPEN | WebUI 体验持续打磨，合并门槛低 |
| 🔒 安全 | Gateway 签名直投递 Webhook | [#5652](https://github.com/HKUDS/nanobot/pull/5652) OPEN · conflict | CI / 监控场景刚需，预计 v0.3.6+ |

---

## 7. 用户反馈摘要

- **🤬 痛点（Dream 失控）**（[#5781](https://github.com/HKUDS/nanobot/issues/5781)）：用户用 Dream 做"夜间整合"是高频用法，但单次运行 25–111 分钟、~200 次工具调用、循环读取同一文件，反映出**无超时熔断 + 无 dedup 状态**双重缺陷。社区明确表态 `dream.maxIterations` 文档需重写。
- **😤 痛点（渠道噪声）**（[#5784](https://github.com/HKUDS/nanobot/issues/5784)）：自托管用户对"Compressing context…"等生命周期消息被作为聊天消息发送感到不满，与 [#5719] 一脉相承，**希望默认折叠或加配置开关**。
- **🎉 正面（v0.3.5 发布）**（[#5788](https://github.com/HKUDS/nanobot/issues/5788)）：社区对"一个 Agent 跨终端/浏览器"特性反应热烈，README 截图文档同步刷新。
- **🤝 商业合作意向**：aimlapi 团队主动联系并提供 50/50 营收分成提案，反映 NanoBot 正在成为模型聚合生态的重要节点。

---

## 8. 待处理积压（维护者关注提醒）

| 编号 | 类型 | 标题 | 状态持续时间 | 建议 |
|---|---|---|---|---|
| [#5781](https://github.com/HKUDS/nanobot/issues/5781) | Bug | Dream 1–2h 循环 | 1 天 | 修复 PR (#5782) 已合，请同步关闭 Issue 并补充配置文档 |
| [#5652](https://github.com/HKUDS/nanobot/pull/5652) | 安全/Feature | Gateway 签名 webhook | 12 天 · conflict | 高价值，建议优先解决冲突并评审 |
| [#5626](https://github.com/HKUDS/nanobot/pull/5626) | Feature | copy_file / move_file | 15 天 · conflict | 解决冲突后可纳入下个 minor 版本 |
| [#5748](https://github.com/HKUDS/nanobot/pull/5748) | Bug | 批处理边界持久化部分进度 | 4 天 | 与 #5750 联动，建议一起评审 |
| [#5666](https://github.com/HKUDS/nanobot/pull/5666) | Feature | aimlapi Provider | 12 天 | 商业方驱动，建议尽快评估合规与质量 |
| [#5779](https://github.com/HKUDS/nanobot/pull/5779) | Bug | 并发会话文件写序列化 | 1 天 | 修复 #4798，已 OPEN 待评审 |

---

**日报小结**：NanoBot 在 v0.3.5 发布窗口期展现出健康的开发节奏，**11 个 PR 合入 + 1 个版本发布 + 多项安全/稳定性修复**构成今日主线。社区反馈集中在"长任务护栏"与"渠道噪声折叠"两类，建议在 v0.3.6 规划中将其作为优先项；商业侧 aimlapi 合作与 Gateway Webhook PR 值得维护者集中评审。

— *AI 项目分析师 · MiniMax*

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

<think>The user wants me to generate a project daily report for PicoClaw based on GitHub data. Let me analyze the data carefully:

**Summary:**
- 24h Issues: 2 new/active, 0 closed
- 24h PRs: 4 updates, 3 pending, 1 closed/merged
- New releases: 0

**Key observations:**
1. Both new issues (#3373 and #3374) are from @sting8k, both flagged as [stale] - created on 2026-09-08, updated 2026-09-15
2. PR #3375 by @sting8k appears to be the fix for issue #3374 (both created same day)
3. PR #1780 was CLOSED - this is the only closed PR (QQ connection stability)
4. PR #3372 by @sting8k - fix for reaction tool configuration
5. PR #3370 by @ilya-bogin-keenable - new feature: Keenable web search provider
6. All PRs and issues have 0 likes and minimal comments - suggesting low community engagement

**Activity assessment:**
- Activity level is low to moderate
- Mostly a single contributor (@sting8k) is active with bug reports and fixes
- One new feature PR from external contributor
- No new releases
- Multiple items flagged as [stale]

Let me structure the report according to the 8 required sections, keeping it professional and data-driven.

Let me think about each section:

1. **今日速览** - Low activity, single contributor dominance, no releases, stale flags appearing
2. **版本发布** - None, skip
3. **项目进展** - PR #1780 closed (QQ channel stability), PR #3375 fixes data race
4. **社区热点** - Low engagement overall, 0 likes on most items
5. **Bug 与稳定性** - Two serious bugs: data race in config and silent data loss in SaveConfig
6. **功能请求与路线图信号** - Keenable web search provider, reaction tool configuration
7. **用户反馈摘要** - Minimal feedback due to low comments
8. **待处理积压** - Multiple stale items needing attention

Let me draft this report in Chinese with proper formatting.</think>

# PicoClaw 项目动态日报

**报告日期：** 2026-09-16
**数据周期：** 过去 24 小时
**项目仓库：** [github.com/sipeed/picoclaw](https://github.com/sipeed/picoclaw)

---

## 1. 今日速览

PicoClaw 今日整体活跃度处于**偏低水平**：过去 24 小时仅新增 2 条 Issues、4 条 PR 动态，且**无新版本发布**。值得关注的是，活跃贡献者高度集中在 **@sting8k** 一人身上——2 个 Bug 报告、2 个对应修复 PR 均出自其手，呈现典型的"单点贡献"模式。多个 Issue 和 PR 已被标记为 **[stale]**，社区互动指标（👍 与评论数）普遍为 0，提示维护者需加强跟进节奏。

---

## 2. 版本发布

⚠️ **今日无新版本发布。** 当前暂无任何已合并的发布相关 PR 处于可发布状态。

---

## 3. 项目进展

### ✅ 已关闭 PR（1 条）

| PR | 标题 | 作者 | 影响范围 |
|---|---|---|---|
| [#1780](https://github.com/sipeed/picoclaw/pull/1780) | Qq connection stability | @xiang33 | QQ 通道连接稳定性参数（重连间隔、重试次数、限流）可配置化 |

**分析：** 该 PR 于 2026-03-19 创建，历时约 6 个月后被关闭，提示其要么被合并（未明确显示 merged）要么被维护者驳回。如属于合并范畴，意味着 QQ 通道在生产环境中的稳定性获得了一次系统性加固；建议维护者在 commit 信息中补充明确的合并去向，以便追溯。

### 🟡 待合并 PR（3 条）

- [#3375](https://github.com/sipeed/picoclaw/pull/3375) **fix(config): guard lazy sensitive-data cache against concurrent init** — 修复 `Config.sensitiveCache` 的数据竞争问题，与 Issue #3374 直接对应。
- [#3372](https://github.com/sipeed/picoclaw/pull/3372) **fix(config): make the reaction tool configurable** — 修复 `reaction` 工具配置路径缺失的问题。
- [#3370](https://github.com/sipeed/picoclaw/pull/3370) **feat(tools): add Keenable web search provider** — 新增 Keenable 作为 `web_search` 提供方。

---

## 4. 社区热点

| 议题 | 类型 | 评论数 | 👍 | 链接 |
|---|---|---|---|---|
| #3374 数据竞争导致 panic | Issue | 1 | 0 | [链接](https://github.com/sipeed/picoclaw/issues/3374) |
| #3373 SaveConfig 静默删除 api_key | Issue | 1 | 0 | [链接](https://github.com/sipeed/picoclaw/issues/3373) |
| #1780 QQ 连接稳定性 | PR | - | 0 | [链接](https://github.com/sipeed/picoclaw/pull/1780) |

**诉求分析：**
- 两个 Bug 报告均直接关联用户配置安全和数据完整性（敏感数据过滤、API key 持久化），属于高敏感度议题。
- 当前的 [stale] 标记与极低的点赞/评论数，表明这些问题尚未在社区中形成广泛讨论，可能影响修复优先级评估。
- 建议维护者主动置顶或加标签（如 `priority: high`、`security`），以提升可见度。

---

## 5. Bug 与稳定性

按严重程度排序：

### 🔴 P0 — 数据竞争导致潜在 Panic
**Issue [#3374](https://github.com/sipeed/picoclaw/issues/3374)**
- **位置：** `pkg/config/security.go:221-222`
- **问题：** `Config.sensitiveCache` 懒加载时缺少同步机制，导致其内部的 `sync.Once` 失效。两个 goroutine 可能分别分配各自的 `SensitiveDataCache`，进而使 `SensitiveDataReplacer` 返回 **nil `*strings.Replacer`**，最终在 `FilterSensitiveData` 中触发 panic。
- **影响范围：** 涉及敏感信息过滤的全局行为，多 goroutine 并发场景下必然发生。
- **修复状态：** ✅ 已有对应 PR [#3375](https://github.com/sipeed/picoclaw/pull/3375) 提交，待合并。

### 🔴 P0 — 静默数据丢失
**Issue [#3373](https://github.com/sipeed/picoclaw/issues/3373)**
- **问题：** `SaveConfig` 在处理 `model_list` 中包含多个 `api_keys` 的条目时，仅保留第一个 key，其余全部静默删除；且保留项的 `fallbacks` 字段会留下指向已不存在模型的悬挂引用。
- **影响范围：** 任意 `LoadConfig` → `SaveConfig` 操作即可触发，等价于一次"配置往返即损坏"。
- **修复状态：** ⚠️ 暂无明确对应 PR，需尽快跟进。

### 🟡 P2 — 工具配置缺失
**PR [#3372](https://github.com/sipeed/picoclaw/pull/3372)** — `reaction` 工具在 `ToolsConfig.IsToolEnabled` 中未配置专用分支，默认返回值不符合预期，且 `ToolsConfig` 缺少 `reaction` 字段。该问题属于配置一致性问题，影响范围有限。

---

## 6. 功能请求与路线图信号

| 信号来源 | 方向 | 评估 |
|---|---|---|
| [PR #3370](https://github.com/sipeed/picoclaw/pull/3370) | 新增 Keenable 作为 web_search provider，免 API key 即可使用 | 🟢 有助于降低用户接入门槛，扩展搜索能力生态，符合工具可插拔化趋势，建议纳入下一版本 |
| [PR #3372](https://github.com/sipeed/picoclaw/pull/3372) | 完善 reaction 工具的可配置性 | 🟢 工具粒度可配置的演进方向，与已有模式一致 |
| [Issue #3373](https://github.com/sipeed/picoclaw/issues/3373) | 隐含诉求：SaveConfig 应保留所有 api_key 并校验 fallbacks 有效性 | 🟡 需评估是否与现有 `model_list` schema 兼容 |

---

## 7. 用户反馈摘要

由于今日 Issues 评论数极少（均为 1 条），可提炼的真实用户痛点有限：

- **配置安全焦虑：** 用户 @sting8k 在两个 Issue 中聚焦于"静默"、"panic"、"data loss"等关键词，反映对配置层数据完整性的强烈关注。
- **使用场景推断：** Issue #3373 的描述指向多 key、多模型 fallback 的复杂使用场景，提示 PicoClaw 已被用于相对成熟的多模型工作流，而非简单的单 key 配置。
- **满意度信号：** 无明确负面反馈，但 [stale] 标记和 0 点赞也反映出社区对当前修复进度的沉默——可能意味着问题尚未传播给更广泛用户群。

---

## 8. 待处理积压与维护者提醒

⚠️ **重点关注：**

1. **[stale] 标记泛滥** — 今日活跃的 4 条 PR + 2 条 Issue 中，**全部 6 条均带有 [stale] 标记**。stale 机器人可能因长期无活动而自动加标，需维护者及时响应以避免误关闭。

2. **Issue [#3373](https://github.com/sipeed/picoclaw/issues/3373) 暂无修复 PR** — 该问题影响用户配置数据的完整性，属于数据丢失级风险，建议优先安排修复。

3. **PR [#3370](https://github.com/sipeed/picoclaw/pull/3370) 由外部贡献者 @ilya-bogin-keenable 提交** — 涉及第三方服务集成，需进行代码审查与协议合规性评估，维护者应尽早给出反馈以维持外部贡献者积极性。

4. **PR [#1780](https://github.com/sipeed/picoclaw/pull/1780) 关闭原因不明** — 跨越半年的 PR 被关闭，建议在 issue 中补充说明，避免社区误读为"贡献被拒"。

---

**总体健康度评估：🟡 中等偏低**
- 单点贡献风险较高（@sting8k 占绝对活跃度）；
- 关键 Bug 有修复路径但合并进度不明；
- 社区互动指标偏低，需主动运营；
- 建议下一周期优先合并数据竞争修复（#3375）并启动数据丢失修复工作。

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

<think>The user wants me to generate a project daily report for LobsterAI based on the GitHub data provided. Let me analyze the data carefully:

**Overall Activity:**
- 3 Issues updated (1 active/open, 2 closed)
- 28 PRs updated (10 pending/open, 18 merged/closed)
- 0 new releases

**Key Observations:**
1. There's a release PR #2687 "Release/2026.9.15" which suggests today's release cut
2. Many OpenClaw-related fixes being merged (a major compatibility repair effort)
3. The community seems engaged with ad-related concerns
4. Several stale issues/PRs being closed

Let me structure this professionally:

1. **今日速览**: Very active day with major OpenClaw compatibility release
2. **版本发布**: No new release today, but a release PR exists
3. **项目进展**: Many OpenClaw fixes merged
4. **社区热点**: Issue #2342 about ad banner (with PR #2374 addressing it)
5. **Bug 与稳定性**: OpenClaw compatibility issues
6. **功能请求与路线图信号**: Hide sidebar ad permanently
7. **用户反馈摘要**: Ads in left bottom
8. **待处理积压**: Several stale issues and a Dependabot PR

Let me write a detailed, professional report in Chinese.</think>

# LobsterAI 项目日报
**日期：2026-09-16**

---

## 1. 今日速览

LobsterAI 今日进入 2026.9.15 版本发布的收尾阶段，过去 24 小时内 PR 流转极为活跃（28 条），其中 18 条已完成合并/关闭，主线围绕 **OpenClaw v2026.8.1 兼容性修复**集中展开。社区侧，热度最高的议题是用户对左下角广告的关闭诉求（issue #2342），已有对应 PR #2374 提交但仍未合并。整体来看，项目处于「重大版本发布 + 长尾兼容性修复」的并行状态，开发节奏健康，但**用户侧的体验诉求尚未得到充分响应**。

---

## 2. 版本发布

**今日无新版本发布。**

但值得注意的是，PR #2687「Release/2026.9.15」已于今日创建，标记为渲染层、构建、主进程、OpenClaw、Cowork 多区域联动发布，这表明 **2026.9.15 版本正在集成窗口中**，预计后续 1-2 天内将正式发布。本次发布将包含本次日报"项目进展"部分提到的大批 OpenClaw 兼容性补丁。

---

## 3. 项目进展

今日合并/关闭的 PR 中，包含多条与 **OpenClaw v2026.8.1 升级后兼容性修复**直接相关的重要变更，构成一次系统性的"compat repair"：

| PR | 关键变更 |
|---|---|
| [#2683](https://github.com/netease-youdao/LobsterAI/pull/2683) | OpenClaw compatibility repair（合集） |
| [#2679](https://github.com/netease-youdao/LobsterAI/pull/2679) | 升级后网关状态兼容性修复：备份引擎数据 → 官方 doctor repair → 恢复 memory index 与 bundled plugins |
| [#2686](https://github.com/netease-youdao/LobsterAI/pull/2686) | 修复 pnpm pack 将 workspace:* 重写为 registry 版本，导致本地补丁被丢弃的问题 |
| [#2685](https://github.com/netease-youdao/LobsterAI/pull/2685) | 修复 `prepareReplayMessages` 缺失导致的运行时崩溃 |
| [#2684](https://github.com/netease-youdao/LobsterAI/pull/2684) | 防止启发式输出预算被错误压缩到 1 token 导致长会话无正文 |
| [#2682](https://github.com/netease-youdao/LobsterAI/pull/2682) | 历史会话回放字段校验，避免损坏块导致任务反复失败 |
| [#2681](https://github.com/netease-youdao/LobsterAI/pull/2681) | 启动时恢复 `memory/.dreams/` 损坏的旧 JSON |
| [#2680](https://github.com/netease-youdao/LobsterAI/pull/2680) | 配置同步时保留 `modelPolicy` 迁移字段 |
| [#2678](https://github.com/netease-youdao/LobsterAI/pull/2678) | 长会话压缩保留摘要格式与审计事实 |
| [#2677](https://github.com/netease-youdao/LobsterAI/pull/2677) | 恢复 Cowork 请求失败的「技术详情」展示 |
| [#2664](https://github.com/netease-youdao/LobsterAI/pull/2664) | 修复 POPO SDK 在 ESM 导入未完成时的 `ERR_REQUIRE_ESM_RACE_CONDITION` |

此外，也清理了一批历史 stale PR（均为 2026-03-31 提交、长达 6 个月未推进的 stale 变更），包括：
- [#1142](https://github.com/netease-youdao/LobsterAI/pull/1142) 技能管理页快捷创建技能
- [#1143](https://github.com/netease-youdao/LobsterAI/pull/1143) Agent 默认图标保存
- [#1144](https://github.com/netease-youdao/LobsterAI/pull/1144) 定时任务显示上次执行时间
- [#1145](https://github.com/netease-youdao/LobsterAI/pull/1145) 团队配置模板导入导出
- [#1146](https://github.com/netease-youdao/LobsterAI/pull/1146) 新建 Agent 后任务记录未加载

**整体评估**：今日是 LobsterAI 一次重要的"质量稳固日"，OpenClaw 升级引发的 8+ 个独立 Bug 在同一窗口内被集中根治，反映出团队对回归问题响应迅速。

---

## 4. 社区热点

今日评论数最多的两个话题均为**社区体验类诉求**，而非技术缺陷：

### 🔥 热度 #1：左下角广告能否彻底关闭？
- **Issue** [#2342](https://github.com/netease-youdao/LobsterAI/issues/2342)（OPEN，2 评论，👍 0）
- 用户 @PYUDNG 自 7 月 15 日提出，截图显示 v2026.7.15 版本起新增左下角广告横幅，仅可通过"×"临时关闭，无法彻底禁用。
- **对应 PR** [#2374](https://github.com/netease-youdao/LobsterAI/pull/2374)（OPEN）：@bunnysayzz 在 7 月 21 日即提交了实现，在 **Settings → General** 增加永久隐藏开关，但截至今日仍未合并，**已搁置约 2 个月**。

### 🔥 热度 #2：Vitest 单元测试补齐
- **Issue** [#1149](https://github.com/netease-youdao/LobsterAI/issues/1149)（CLOSED stale）
- 关于 `coworkMemoryExtractor.ts` 的测试覆盖，已被识别为 stale 关闭。

### 诉求分析
广告相关诉求的核心矛盾是：**商业化诉求 vs 用户体验**。值得注意的是，已有可用的 PR 解决方案，但社区代码合并节奏放缓，导致 2 个月的等待窗口，对用户信心存在负面影响。

---

## 5. Bug 与稳定性

按严重程度排序：

| 等级 | 描述 | 关联 PR |
|---|---|---|
| 🔴 **严重** | OpenClaw 2026.8.1 升级后 **prepareReplayMessages 缺失**导致运行时崩溃 | [#2685](https://github.com/netease-youdao/LobsterAI/pull/2685) ✅ 已合并 |
| 🔴 **严重** | 长会话输出预算被错误压缩到 1 token，导致**推理协议成功但无正文**，且续答无法恢复 | [#2684](https://github.com/netease-youdao/LobsterAI/pull/2684) ✅ 已合并 |
| 🔴 **严重** | 历史回放中损坏的 content blocks 缺失 ID / 类型错误时反复抛错 | [#2682](https://github.com/netease-youdao/LobsterAI/pull/2682) ✅ 已合并 |
| 🟠 **高** | 升级后网关状态需要完整 repair 流程，否则 memory index 与 plugin 失效 | [#2679](https://github.com/netease-youdao/LobsterAI/pull/2679) ✅ 已合并 |
| 🟠 **高** | 旧版 `memory/.dreams/` JSON 解析失败阻断网关启动 | [#2681](https://github.com/netease-youdao/LobsterAI/pull/2681) ✅ 已合并 |
| 🟡 **中** | Cowork 请求失败卡片丢失异常摘要，仅显示 provider/model | [#2677](https://github.com/netease-youdao/LobsterAI/pull/2677) ✅ 已合并 |
| 🟡 **中** | POPO 2.1.13 插件加载 `ERR_REQUIRE_ESM_RACE_CONDITION` | [#2664](https://github.com/netease-youdao/LobsterAI/pull/2664) ✅ 已合并 |

**修复率 100%**：今日所有被报告的严重 Bug 均有对应已合并 PR，体现了良好的工程响应闭环。

---

## 6. 功能请求与路线图信号

| 需求 | 来源 | 当前状态 | 纳入下一版本的概率 |
|---|---|---|---|
| 永久关闭左下角广告 | [#2342](https://github.com/netease-youdao/LobsterAI/issues/2342) | PR [#2374](https://github.com/netease-youdao/LobsterAI/pull/2374) 已就绪未合并 | ⚠️ 中等 — 存在 PR 但挂起 2 个月，需关注合并意愿 |
| Cowork 会话列表隐藏 OpenClaw 主 agent 会话 | [#1181](https://github.com/netease-youdao/LobsterAI/pull/1181) | PR OPEN 已 5 个月未合并 | 🟢 高 — 与 OpenClaw 兼容性修复相关 |
| URL 拼接 off-by-one（Gemini `/v1` 路径） | [#1151](https://github.com/netease-youdao/LobsterAI/issues/1151) | 已关闭 stale | 🟡 建议在下一窗口复核 |

**路线图信号**：今日主线是 **OpenClaw 兼容性 + 构建稳定性**；功能侧的需求更多来自 PR 长期挂起，而非新增需求。建议维护者重点清理 2 个月以上的 PR 积压。

---

## 7. 用户反馈摘要

从可用 issue 评论中提炼：

- **@PYUDNG（#2342）**：对 v2026.7.15 后新增的广告横幅表达不满，明确反馈"在更新到这个版本之前还没有遇到过这种广告"，并指出"我看了设置项，没有找到和这个广告相关的开关"。**痛点**：设置项缺失而非功能错误。
- **历史 stale 关闭项**（#1149、#1151、#1142-#1146 系列）：反映了**社区贡献者提交后长期未被 review** 的现象，建议引入定期的 stale 清理机制或 reviewer 轮值。

**用户满意度信号**：在 OpenClaw 兼容性这一块，由于修复集中上线，用户反馈尚未及时回流到 issue 区；建议在 2026.9.15 版本发布后主动收集反馈。

---

## 8. 待处理积压

| 类别 | 编号 | 挂起时长 | 风险 |
|---|---|---|---|
| 社区 PR | [#2374](https://github.com/netease-youdao/LobsterAI/pull/2374) 永久隐藏侧边栏广告 | ~2 个月 | 🔴 用户体验 + 社区贡献者信心 |
| 社区 PR | [#1181](https://github.com/netease-youdao/LobsterAI/pull/1181) 隐藏 OpenClaw 主 agent 会话 | ~5 个月 | 🟠 会话列表污染 |
| Dependabot PR | [#1277](https://github.com/netease-youdao/LobsterAI/pull/1277) electron 43.5.0 → 44.3.0 | ~5 个月 | 🟠 安全补丁缺失 |
| 社区 Issue | [#2342](https://github.com/netease-youdao/LobsterAI/issues/2342) 广告关闭 | ~2 个月 | 🟠 持续用户困惑 |

**维护者提醒**：建议在 2026.9.15 发布后单独开一个「社区 PR 清理窗口」，集中处置 2 个月以上的 PR（包括长期未合并的 stale PR 与有效但未评审的 PR），以保持社区贡献活力。

---

### 📊 项目健康度评分

| 维度 | 评分 | 说明 |
|---|---|---|
| 开发活跃度 | ⭐⭐⭐⭐⭐ | 单日 28 PR，节奏极强 |
| Bug 响应速度 | ⭐⭐⭐⭐⭐ | 所有严重 Bug 当日 fix |
| 社区响应度 | ⭐⭐ | 长期挂起 PR 较多，2 个月+ 等待普遍 |
| 发布节奏 | ⭐⭐⭐⭐ | 9.15 版本集成进行中 |
| 综合 | ⭐⭐⭐⭐ | 工程能力突出，社区治理待加强 |

---

*报告生成时间：2026-09-16 | 数据来源：[netease-youdao/LobsterAI](https://github.com/netease-youdao/LobsterAI)*

</details>

<details>
<summary><strong>QwenPaw</strong> — <a href="https://github.com/agentscope-ai/QwenPaw">agentscope-ai/QwenPaw</a></summary>

<think>The user wants me to generate a daily project status report for QwenPaw based on GitHub data from 2026-09-16. Let me analyze the data carefully and structure the report according to the requested 8 sections.

Let me analyze the data:

**Overview:**
- 20 Issues updated in past 24h (6 active/new, 14 closed)
- 50 PRs updated in past 24h (24 pending merge, 26 merged/closed)
- 0 new releases

**Active Issues (6):**
- #7318 [OPEN] QwenPaw Hub multi-tenant - discussion, 27 comments, 4 likes
- #7678 [OPEN] spawn subAgent bug, 7 comments
- #7650 [OPEN] channel params to MCP tools, 3 comments
- #7797 [OPEN] artifacts only output target files, 1 comment
- #7792 [OPEN] WeChat file:// URL bug, 1 comment
- #7786 [OPEN] Cloud/NFS deployment file browser freezes, 1 comment

**Closed Issues (14):**
- #5872 Docker dbus browser_use bug [CLOSED]
- #7739 History to right side [CLOSED]
- #3871 SSE infinite thinking [CLOSED]
- #7772 newapi proxy [CLOSED]
- #7689 PDF multimodal unfixed [CLOSED]
- #7716 MCP can't connect [CLOSED]
- #7746 skills channel list incomplete [CLOSED]
- #4037 Unauthenticated HTTP gateway [CLOSED]
- #7730 Plugin catalog offline [CLOSED]
- #7406 Theming support [CLOSED]
- #7764 MCP dagu inactive [CLOSED]
- #7744 Web console auto-collapse [CLOSED]
- #7700 Switching conversation left [CLOSED]
- #7743 Hub mode 401 preview [CLOSED]

**Closed/Merged PRs (26):**
Notable ones:
- #7763 fix(plugins) - closed
- #7741 feat(console) customizable theme colors - closes #7406
- #7636 fix(agents) strip PDF blocks
- #7737 expand multi-agent trigger keywords - first-time-contributor
- #7736 add DeepSeek V4 Flash - first-time-contributor
- #7735 fix(mcp) preserve decoded HTTP - first-time-contributor

**Active/Open PRs (24):**
Notable ones:
- #7789 proj dir multi-folder workspaces
- #7798 record and replay workflows
- #7795 expand multi-agent collaboration keywords
- #7785 realtime voice chat
- #7791 custom IMAP/SMTP via custom provider
- #7382 AgentScopeRuntimeWebUI 1.2
- #7790 unified chat workbench
- #7637 QwenPaw-Data app 0.3.0
- #7729 recognize Java jsonRpcError
- #7796 diagnose dropped subagent overrides
- #7569 Advisor Mode
- #7794 DeepSeek V4 Flash capabilities
- #6399 reranker UI config panel
- #7779 Hub model gateway, governance, usage dashboard
- #7737 expand multi-agent trigger keywords

Now let me write a comprehensive daily report. The user wants Chinese output based on the data (mostly Chinese issues), and it should be professional, data-driven, focusing on project health.

Let me organize the report:

1. **今日速览** - 3-5 sentences overview
2. **版本发布** - skip (none)
3. **项目进展** - merged/closed PRs that are important
4. **社区热点** - most discussed
5. **Bug 与稳定性** - bugs reported
6. **功能请求与路线图信号** - feature requests
7. **用户反馈摘要** - user pain points
8. **待处理积压** - backlogs

Let me draft this carefully and use proper formatting.</think>

# QwenPaw 项目日报 · 2026-09-16

> 数据范围：2026-09-15 ~ 2026-09-16 · 数据源：GitHub (agentscope-ai/QwenPaw)

---

## 一、今日速览

QwenPaw 今日继续保持高活跃度，**24 小时内共触达 70 条更新事件**（20 Issues + 50 PRs），其中 **40 条以关闭/合并状态收尾**（14 Issues + 26 PRs），关闭/合并率约 **57%**，反映出维护团队响应节奏稳定、积压正在被快速消化。Issues 与 PRs 的数量比为 **1:2.5**，社区已不局限于"提问题"，更多贡献者直接提交代码（含多位 first-time-contributor），项目处于**协作活跃期**。值得关注的三大主线：①Hub 多租户与模型网关进入实质落地；②MCP/agents 链路多个高优先级回归被修复；③Console 可定制化（主题、历史栏位置、Workbench Shell）集中收尾，UI/UX 主题正成为短期迭代重点。整体项目健康度：**良好偏优**，但仍有若干高严重度 Bug（spawn subAgent 全失败、Cloud/NFS 5 分钟级 freeze）尚未关闭。

---

## 二、版本发布

无新版本发布。

---

## 三、项目进展

今日合并/关闭的重要 PR 共 **26 条**，以下是推进项目向前迈进的关键贡献：

### 🔧 稳定性与兼容性修复

- **#7763** `fix(plugins)` — 处理插件目录 CDN 连接重置 / IncompleteRead，修复 #7730，关闭离线回退的"逃逸"问题。
- **#7636** `fix(agents)` — 在 OpenAI Chat Completions 路径上**无条件**剥离 tool-result 中的 PDF DataBlock（#7621 仅覆盖 `supports_multimodal=False` 路径的回归补救），覆盖 vLLM / DeepSeek / DashScope / Zhipu 等自托管端点。
- **#7735** `fix(mcp)` — 修复 MCP HTTP 错误响应在二次解压时的 body-framing 头污染，修复 #7716（2.2.x 升级后 MCP 无法注册）。
- **#7737** `fix(skills)` — 扩展多智能体协作触发关键词，修复 #3113，首轮对话即可识别，无需"打断-重试"。*（first-time-contributor @lorenzozanee）*
- **#7736** `feat(providers)` — DeepSeek V4 Flash 能力注册（图输入 / 1M token / 推理档位），便于模型选择与上下文管理。*（first-time-contributor @lorenzozanee）*

### 🎨 Console / UI 体验

- **#7741** `feat(console)` — 主题色可定制化 + 实时预览 + 6 套内置配色，关闭 #7406。引入主题相关 API 与全应用样式联动。
- 与 #7739（历史对话移至右侧）、#7700（切换文档预览侧栏）合并相呼应，**左侧拥挤、14 寸笔记本体验差**的痛点已系统性收敛。

### ✅ 关闭的 Issue 修复落地

- **#5872** Docker 内 Chromium 因 dbus 失败退出 → 修复并关闭。
- **#4037** 工具型 HTTP 网关默认无鉴权（仅 loopback 允许） → 已落实 `QWENPAW_AUTH_ENABLED` 强校验并关闭。
- **#3871** SSE 流未正常关闭导致无限 Thinking → 修复并关闭。
- **#7764** Dagu MCP 客户端 zlib header check → 修复并关闭。
- **#7743** Hub 模式文件预览 401 → 修复并关闭。
- **#7744** Web Console 发送文件后自动折叠 → 修复并关闭。
- **#7772** newapi 代理连接错误 → 修复并关闭。
- **#7746** skills 适用 channel 列表不全 → 修复并关闭。

> **判断**：今日关闭的 14 条 Issue 大多带有明确 PR 修复，**议题 → 代码 → 关闭**链路清晰，**项目迭代节奏处于近一个月来最佳状态**。

---

## 四、社区热点

### 🔥 最高互动：QwenPaw Hub 多租户版路线图征询

- **#7318** [OPEN] — *"QwenPaw Hub, the multi-tenant edition, is coming in 2.2.0: what should we build next?"*
  - **27 条评论、4 个 👍**，由核心维护者 @rayrayraykk 主动发起。
  - 关联请求：#2324（多用户访问与管理员托管 skills）等。
  - **信号**：Hub 已是社区共识最强的下一个里程碑；#7779（Hub 模型网关 + 成员治理 + 用量仪表盘）今日开启 Open PR，与该讨论形成"讨论 → 实现"的紧密闭环。
  - 链接：https://github.com/agentscope-ai/QwenPaw/issues/7318

### 🗣 第二梯队（高评论量）

- **#7678** [OPEN, Bug] *spawn subAgent 全 timeout 失败* — 7 条评论，**严重度：极高**（win2.2.0 任务一旦触发 spawn 即全军覆没，即便大幅延长 timeout 也无效）。
  - 链接：https://github.com/agentscope-ai/QwenPaw/issues/7678
- **#7739** [CLOSED] *历史对话移至右侧* — 6 条评论，今日合并落地。
- **#5872** [CLOSED] *Docker 内 dbus Chromium 退出* — 6 条评论，长尾问题终于解决。

> **诉求分析**：社区当前最强烈的两类声音是——①**多用户/团队协作**（Hub 系列）；②**2.2.x 升级带来的回归**（subAgent、MCP、newapi、Hub 鉴权）。前者代表"增量价值"，后者代表"维护者必须偿还的技术债"。

---

## 五、Bug 与稳定性

按严重度排列（以"对核心功能的影响范围"为依据）：

| 严重度 | Issue | 描述 | 影响范围 | 是否有 fix PR |
|---|---|---|---|---|
| 🔴 **P0** | [#7678](https://github.com/agentscope-ai/QwenPaw/issues/7678) | `spawn subAgent` 在 win2.2.0 上 100% timeout，错误吞掉堆栈 | 多智能体协作功能完全不可用 | ❌ 无；今日新增 **#7796** 仅做"诊断日志增强"，未真正修复 |
| 🔴 **P0** | [#7786](https://github.com/agentscope-ai/QwenPaw/issues/7786) | Cloud/NFS 部署打开工作区文件浏览器 → **进程冻结 5-6 分钟**，文件 I/O 阻塞 event loop | 云托管用户全员受影响 | ❌ 无 |
| 🟠 **P1** | [#7792](https://github.com/agentscope-ai/QwenPaw/issues/7792) | WeChat 音视频附件以 `file://` URL 直接发给 OpenAI 兼容 API → `400 invalid URL` | 微信渠道附件功能完全失效 | ❌ 无 |
| 🟠 **P1** | [#7650](https://github.com/agentscope-ai/QwenPaw/issues/7650) | 频道顶层字段（QQ/电话/工号）无法透传给 MCP 工具（标记 wontfix） | 跨渠道上下文传递能力缺失 | ❌ 标记 wontfix |
| 🟡 **P2** | [#7797](https://github.com/agentscope-ai/QwenPaw/issues/7797) | 产物区堆满中间文件 / 临时文件 | 体验问题，无功能影响 | ❌ 无 |

> **结论**：今日 **仍开放 6 条 Issue 中有 3 条属于 P0/P1**，均无对应修复 PR 进入合并通道，**维护者应优先消化 #7678 与 #7786**，否则 2.2.x 系列的稳定性口碑存在恶化风险。

---

## 六、功能请求与路线图信号

按"已存在对应 PR → 极可能进入下版本"的程度排序：

### 🟢 极高确定性（PR 已开启或合并）

| 需求 | Issue | 对应 PR | 状态 |
|---|---|---|---|
| 主题色 / 字体 / 间距可定制 | [#7406](https://github.com/agentscope-ai/QwenPaw/issues/7406) | [#7741](https://github.com/agentscope-ai/QwenPaw/pull/7741) | ✅ 已合并 |
| 历史对话移至右侧 / 文档预览侧栏切换 | [#7739](https://github.com/agentscope-ai/QwenPaw/issues/7739), [#7700](https://github.com/agentscope-ai/QwenPaw/issues/7700) | — | ✅ Issue 已关闭 |
| 多智能体协作触发词扩展 | [#3113](https://github.com/agentscope-ai/QwenPaw/issues/3113) | [#7737](https://github.com/agentscope-ai/QwenPaw/pull/7737), [#7795](https://github.com/agentscope-ai/QwenPaw/pull/7795) | ✅ #7737 合并，#7795 评审中 |
| Hub 模型网关 + 成员治理 + 用量面板 | [#7318](https://github.com/agentscope-ai/QwenPaw/issues/7318) | [#7779](https://github.com/agentscope-ai/QwenPaw/pull/7779) | 🟡 评审中 |

### 🟡 中等确定性（PR 开启，未合并）

- **#7798** Record & Replay 工作流（隐私过滤 + 显式同意） — 桌面端能力扩展。
- **#7785** 实时语音聊天（提供商可配置、interrupt、模型可选择）— 重要交互革新。
- **#7790** 统一 Chat Workbench Shell（可拖拽、可关闭、首次使用前保持空）— UI 升级。
- **#7569** Advisor Mode（advisor 模型 + 廉价 worker 配对）— 新会话模式。
- **#7791** 邮件支持自定义 IMAP/SMTP（"custom" provider）— 解决自托管邮箱需求。
- **#7794** DeepSeek V4 Flash 能力（千 token / 图 / 推理档）— 模型目录完善。
- **#7789** 多文件夹工作区默认配置 — 项目目录 UX 改进。
- **#7382** AgentScopeRuntimeWebUI 1.2 适配与队列稳定性 — 涉及多前端组件。
- **#7637** QwenPaw-Data App 0.3.0 — 数据分析工作流补齐。
- **#6399** ReMeLightMemoryCard 重排器配置面板 — 记忆模块可视化。

### 🟢 新提出（仅 Issue，无 PR）

- **#7797** 产物只输出任务目标产出物，不输出中间 / 临时文件 — 与 Cursor / 其他产品对比，UI 整洁度诉求。

> **路线图研判**：2.2.x 后续小版本的主题词大概率是 **"Hub 化 + Console 可定制 + 实时语音/Record & Replay"**；Advisor Mode 与 Data App 0.3 是更长周期布局。

---

## 七、用户反馈摘要

### 😣 痛点集中区

1. **2.2.x 升级回归重灾区**
   - *MCP 无法连接注册*（#7716）
   - *spawn subAgent 全失败*（#7678）
   - *newapi 代理模型测试错误*（#7772）
   - *Hub 文件预览 401*（#7743）
   - *插件目录离线时返回服务端错误而非空目录*（#7730）
   - → 用户侧感受："**升级像在踩雷**"，每升一次都要排查多项配置。

2. **UI 在小屏 / 14 寸笔记本上"挤"**
   - #7739 / #7700 / #7744 三连击，反映历史栏、文件卡片、文档预览在 14 寸屏需要左右滑动才能看全。

3. **跨渠道上下文缺失**
   - #7650 用户明确表达 QQ 号、电话、工号等"频道侧身份"无法进入 MCP 工具，影响企业场景。

4. **产物区杂乱**（#7797）— 直接对比竞品，"为什么别人只给目标文件，你给一坨"。

### 😊 满意点

- **多用户 / Hub 呼声获得正式回应**（#7318 维护者亲自挂帖 + #7779 PR）— 社区参与感强。
- **first-time-contributor 友好**：#7735 / #7736 / #7737 / #7791 由 4 位新贡献者提交并合并/进入评审，**社区吸纳新人能力良好**。
- **历史对话 / 文档预览侧栏切换**（#7700、#7739）— 用户提出到合并耗时仅 **4 天**，响应速度极快。

---

## 八、待处理积压（提醒维护者关注）

按"长期未响应 + 高严重度"筛选：

| Issue / PR | 标题 | 创建日期 | 距今 | 备注 |
|---|---|---|---|---|
| [#7678](https://github.com/agentscope-ai/QwenPaw/issues/7678) | spawn subAgent 全 timeout | 2026-09-11 | 5 天 | 🔴 P0，**今日仅 #7796 加诊断日志，无实质修复**，建议尽快复现/热修 |
| [#7786](https://github.com/agentscope-ai/QwenPaw/issues/7786) | Cloud/NFS 文件浏览器冻结 5-6 分钟 | 2026-09-15 | 1 天 | 🔴 P0，event loop 阻塞问题，无对应 PR |
| [#7792](https://github.com/agentscope-ai/QwenPaw/issues/7792) | WeChat 音视频附件 file:// → 400 | 2026-09-15 | 1 天 | 🟠 P1，建议参考 #7621/#7636 的 PDF 剥离思路，在 outgoing request 序列化前做 file://→本地上传/转 base64 兜底 |
| [#7797](https://github.com/agentscope-ai/QwenPaw/issues/7797) | 产物只输出目标文件 | 2026-09-16 | 当日 | 🟡 P2，需评估产物分类规则 |
| [#7650](https://github.com/agentscope-ai/QwenPaw/issues/7650) | 频道参数透传给 MCP | 2026-09-09 | 7 天 | ⚠️ 已标 wontfix，建议在文档中明确说明替代方案 |
| [#7382](https://github.com/agentscope-ai/QwenPaw/pull/7382) | AgentScopeRuntimeWebUI 1.2 适配 | 202

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/NousResearch/hermes-agent">NousResearch/hermes-agent</a></summary>

<think>Let me analyze the GitHub data for Hermes Agent (github.com/NousResearch/hermes-agent) and generate a comprehensive daily report for 2026-09-16.

Key observations from the data:
- 50 issues updated (34 new/active, 16 closed)
- 50 PRs updated (45 pending merge, 5 merged/closed)
- No new releases
- Multiple bug categories: session state, cron, desktop, gateway, CLI, plugins, billing
- High activity around session lifecycle issues
- Several security fixes
- Multiple Windows-related issues
- Lots of Kanban/cron related issues

Let me structure the report according to the requested sections.

Top issues by comments:
1. #87093 - Debian installation broken (28 comments, CLOSED)
2. #42199 - x86_64 macOS build for Desktop (16 comments, CLOSED)
3. #68592 - Cron agents with mandatory kanban_show protocol (15 comments, OPEN)
4. #110912 - Nous Portal billing/credit bug (14 comments, CLOSED)
5. #98382 - Concurrent observer-hook invocations dropped (7 comments, CLOSED)
6. #73997 - mcp login retry self-collides (7 comments, OPEN)
7. #80280 - Kanban timed-out workers leave descendants (6 comments, OPEN)
8. #104691 - Zombie session lease (5 comments, OPEN)
9. #85957 - api_server wake self-POSTs (5 comments, CLOSED)
10. #77394 - Windows hermes update fails (5 comments, OPEN)
11. #111999 - Phantom-Sessions (4 comments, CLOSED)
12. #63383 - docker_volumes ignored in Desktop (3 comments, OPEN)

Top PRs - most are open with no comments yet, but they cover:
- Plugin fixes
- Skill security fixes
- STT fixes
- Session fixes
- Web UI features
- Memory fixes
- Egress fixes
- Gateway fixes
- TUI fixes
- Cron fixes
- Kanban fixes
- Windows compat

Let me think about the themes:
1. **Session state lifecycle** - Multiple bugs around session state, zombie sessions, phantom sessions, ownerless sessions - clearly a major pain point
2. **Cron/Kanban** - Multiple issues around cron execution and Kanban worker lifecycle
3. **Desktop app stability** - Many issues specific to the Desktop app
4. **Windows compatibility** - Multiple Windows-specific issues
5. **Billing/Portal** - Subscription credit/billing bugs
6. **Plugin/hook system** - Issues with concurrent hook invocations

Let me write the report now.</think>

# Hermes Agent 项目日报

**日期**：2026-09-16  
**数据来源**：github.com/NousResearch/hermes-agent

---

## 1. 今日速览

Hermes Agent 仓库今日活跃度处于**高位运行**状态：24 小时内共触达 50 个 Issue 和 50 个 PR，闭环率分别为 32%（16/50 关闭）和 10%（5/50 合并/关闭）。社区关注点高度集中于**会话生命周期稳定性**（zombie session、phantom session、ownerless runtime）、**Cron/Kanban 调度器正确性**以及 **Desktop App 端的多会话并发渲染**，多个 P1 级缺陷被报告并迅速修复。无新版本发布，修复主要以 PR 形式流入 `main` 分支待合并。整体健康度中等偏上——bug 报告密集但响应迅速，闭环比例与新开比例保持均衡，未见大规模积压恶化迹象。

---

## 2. 版本发布

**今日无新版本发布。**

最近可参考版本仍为 `v0.21.x` 系列（最新观察到的版本为 v0.21.3，见 [#112060](https://github.com/NousResearch/hermes-agent/issues/112060)）。当前分支上的 PR 多针对 v0.21.x 的稳定性问题，预计将在下一次小版本（v0.21.4 或 v0.22.0）中合入。

---

## 3. 项目进展

今日共有 5 个 PR 完成生命周期（合并/关闭），推进了若干关键修复与功能：

| PR | 标题 | 影响 |
|---|---|---|
| [#112130](https://github.com/NousResearch/hermes-agent/pull/112130) | fix(skills): CommonMark fence tracking in skills_guard | 安全修复：技能守卫的 Markdown 围栏解析遵循 CommonMark 规范 |
| [#112567](https://github.com/NousResearch/hermes-agent/pull/112567) | fix(discord): 回退到父频道当回复线程 404 | Discord 适配器可靠性提升 |
| [#112534](https://github.com/NousResearch/hermes-agent/issues/112534) | probe_api_models 修复（实际为 issue 关闭，关联 PR 未列出） | Together.ai 等非标准 `/models` 响应兼容 |
| [#111132](https://github.com/NousResearch/hermes-agent/pull/111132) | fix(gateway): 中性化阻塞循环分诊通知措辞 | 关闭 [#111125](https://github.com/NousResearch/hermes-agent/issues/111125)，运营文案更中性 |

同时，16 个 Issue 在今日关闭，覆盖安装、计费、OAuth、磁盘/会话恢复等多个方面。整体上，**会话状态管理**与**插件 hook 系统**是两条并行推进的修复主线——分别由 [#112564](https://github.com/NousResearch/hermes-agent/pull/112564)（session oneshot 隔离）、[#112559](https://github.com/NousResearch/hermes-agent/pull/112559)（server request 原子结算）、[#104763](https://github.com/NousResearch/hermes-agent/pull/104763)（hook 串行化）协同推进，标志项目正系统性重构这两个高故障面。

---

## 4. 社区热点

按评论数与关注度排序：

- 🥇 [#87093 — Debian 安装失败（uv.lock & npm install）](https://github.com/NousResearch/hermes-agent/issues/87093)（28 评论，4 👍，已关闭）  
  最高热度议题，揭示 `curl | bash` 安装路径在 Debian 13.6 + uv 依赖管理下的脆弱性。已关闭表明已找到根本修复。

- 🥈 [#42199 — 请求 Intel macOS x86_64 Desktop 构建](https://github.com/NousResearch/hermes-agent/issues/42199)（16 评论，5 👍，已关闭）  
  Intel MacBook Pro (2019) 用户诉求，关闭后意味着发布流程已加入 x86_64 通道。

- 🥉 [#68592 — Cron 代理被强制注入 kanban_show 协议](https://github.com/NousResearch/hermes-agent/issues/68592)（15 评论，仍 OPEN）  
  揭示 cron 调度路径与 Kanban 工作流的协议污染问题，影响所有非 Kanban 的定时任务。

- [#110912 — Nous Portal 折扣路由 Bug](https://github.com/NousResearch/hermes-agent/issues/110912)（14 评论，已关闭）  
  用户在 Plus 订阅额度耗尽后遭遇全额计费，触及订阅信用与模型路由的关键计费逻辑。

- [#98382 — 并发观察者 hook 被误判为超时](https://github.com/NousResearch/hermes-agent/issues/98382)（7 评论，已关闭）  
  触发 [#104763](https://github.com/NousResearch/hermes-agent/pull/104763) 的根因修复。

- [#80280 — Kanban 超时 worker 留下孤儿进程组](https://github.com/NousResearch/hermes-agent/issues/80280)（6 评论，仍 OPEN）  
  工作树并发修改的严重数据完整性风险。

- [#104691 — 僵尸会话租约锁定会话](https://github.com/NousResearch/hermes-agent/issues/104691)（5 评论，仍 OPEN）  
  Desktop v0.21.0 上"已存在活 owner"的永久锁死现象。

- [#77394 — Windows `hermes update` 仍失败](https://github.com/NousResearch/hermes-agent/issues/77394)（5 评论，仍 OPEN）  
  即使 #73684 已合入，paused gateway 仍持有 `_rust.pyd` 句柄。

**社区诉求归纳**：用户高度关注**跨平台一致性**（Debian、Intel macOS、Windows）、**计费透明度**以及**任务调度器的边界清晰度**——这些是 Hermes Agent 作为本地化 AI 代理获得主流采用的关键门槛。

---

## 5. Bug 与稳定性

按严重程度排序（今日新建或更新的 P0/P1/P2 bug）：

### P1（高优先级，仍 OPEN）
| Issue | 描述 | 是否有 fix PR |
|---|---|---|
| [#68592](https://github.com/NousResearch/hermes-agent/issues/68592) | Cron agent 被强制注入 Kanban 协议 | ❌ 无 |
| [#104691](https://github.com/NousResearch/hermes-agent/issues/104691) | 桌面端僵尸会话租约永久锁死 | ❌ 无（关联讨论 [#112564](https://github.com/NousResearch/hermes-agent/pull/112564)） |

### P1（已关闭或有关联修复）
| Issue | 描述 | 修复状态 |
|---|---|---|
| [#87093](https://github.com/NousResearch/hermes-agent/issues/87093) | Debian 安装失败 | ✅ 已关闭 |
| [#110912](https://github.com/NousResearch/hermes-agent/issues/110912) | Portal 计费折扣路由 bug | ✅ 已关闭 |
| [#98382](https://github.com/NousResearch/hermes-agent/issues/98382) | 并发 hook 误判 | ✅ [#104763](https://github.com/NousResearch/hermes-agent/pull/104763) 待合并 |
| [#85957](https://github.com/NousResearch/hermes-agent/issues/85957) | api_server 自 POST 投递异步委派完成 | ✅ 已关闭 |

### P2（中等优先级）
| Issue | 描述 | 关联 PR |
|---|---|---|
| [#73997](https://github.com/NousResearch/hermes-agent/issues/73997) | MCP login OAuth 端口自冲突 | ❌ 无 |
| [#77394](https://github.com/NousResearch/hermes-agent/issues/77394) | Windows update 失败（respawned gateway） | ❌ 无 |
| [#63383](https://github.com/NousResearch/hermes-agent/issues/63383) | Desktop 忽略 docker_volumes | ❌ 无 |
| [#93827](https://github.com/NousResearch/hermes-agent/issues/93827) | Desktop 多会话切换后选项不显示 | ❌ 无 |
| [#112482](https://github.com/NousResearch/hermes-agent/issues/112482) | 上下文压缩活锁，commit 永不落地 | ❌ 无 |
| [#112570](https://github.com/NousResearch/hermes-agent/issues/112570) | SOUL.md 含注入短语被误判屏蔽 | ❌ 无 |

### P3（已关闭的低优先级）
- [#111417](https://github.com/NousResearch/hermes-agent/issues/111417) uv.lock 过期 SQLite  
- [#111414](https://github.com/NousResearch/hermes-agent/issues/111414) cron 静默跳过  
- [#111719](https://github.com/NousResearch/hermes-agent/issues/111719) Bot 轮询 2×/分钟噪声  
- [#112534](https://github.com/NousResearch/hermes-agent/issues/112534) probe_api_models 崩溃  
- [#112060](https://github.com/NousResearch/hermes-agent/issues/112060) Higgsfield OAuth issuer 不匹配  
- [#112296](https://github.com/NousResearch/hermes-agent/issues/112296) Desktop SSH 错误诊断信息

**稳定性结论**：今日共触及至少 **10 个独立 P1/P2 缺陷**，其中 **3 个 P1 已闭环**，**4 个 P2 仍 OPEN 且无 fix PR**，主要分布在会话状态与 Windows/macOS 跨平台路径上。

---

## 6. 功能请求与路线图信号

今日 PR 中包含若干面向用户体验的功能增强信号：

| PR | 功能 | 进入下版本的概率 |
|---|---|---|
| [#112581](https://github.com/NousResearch/hermes-agent/pull/112581) | **Web 侧边栏删除会话** | 🟢 高——属于基础 UX 补完 |
| [#103297](https://github.com/NousResearch/hermes-agent/pull/103297) | ollama-cloud /usage 配额面板 | 🟢 高——补齐多 provider 计费可视化 |
| [#112540](https://github.com/NousResearch/hermes-agent/pull/112540) | SSH 沙箱走 reverse forward + 不透明 token（proxy.ssh_tunnel） | 🟡 中——受 Perplexity 启发，关闭"Docker only"凭据防护缺口 |
| [#106461](https://github.com/NousResearch/hermes-agent/pull/106461) | bounded pre_turn_finalize hook | 🟡 中——插件生命周期扩展点 |
| [#112545](https://github.com/NousResearch/hermes-agent/pull/112545) | `hermes chat -q` 失败时非零退出 + Kanban 75 语义覆盖 429/503/529 | 🟢 高——稳定契约 |
| [#112562](https://github.com/NousResearch/hermes-agent/pull/112562) | `hermes config set UPPER_SNAKE` 永远写 `.env` | 🟢 高——修复 [#111848](https://github.com/NousResearch/hermes-agent/issues/111848) |
| [#112554](https://github.com/NousResearch/hermes-agent/pull/112554) | CLI 审批提示未回答时正确报告 | 🟢 高——修复 [#22992](https://github.com/NousResearch/hermes-agent/issues/22992) |
| [#112579](https://github.com/NousResearch/hermes-agent/pull/112579) | macOS Screen Recording 拒绝时优雅降级 | 🟢 高——[#111183](https://github.com/NousResearch/hermes-agent/issues/111183) 的延续 |

**路线图预判**：下一版本（v0.21.4 或 v0.22.0）很可能聚焦"**会话与调度的正确性收敛**"——关闭现有 P1/P2 中至少一半，并合入上述 5-6 个 UX/stability PR。

---

## 7. 用户反馈摘要

从评论中提炼的真实痛点与场景：

**🔴 主要痛点**

1. **跨平台安装的脆弱性**  
   Debian 用户（[#87093](https://github.com/NousResearch/hermes-agent/issues/87093)）反映 `curl | bash` 路径在 uv.lock 与 npm install 双重依赖下高度敏感，任何上游变动都会直接 break 一键安装。CI pin 旧版 uv 的副作用（[#111417](https://github.com/NousResearch/hermes-agent/issues/111417)）进一步加剧。

2. **订阅计费透明度缺失**  
   用户（[#110912](https://github.com/NousResearch/hermes-agent/issues/110912)）对 Plus 订阅信用耗尽后突然全额计费感到困惑——日志显示 usage 未变但账单跳涨 3×。需要更明确的折扣路由指示。

3. **桌面端的会话歧义**  
   用户（[#111999](https://github.com/NousResearch/hermes-agent/issues/111999)）反馈网络错误恢复路径产生 `source='unknown'` 的"幽灵会话"，破坏本地会话连贯性，导致"New Session"按钮误触时丢失上下文。

4. **调度器的隐式行为**  
   Kanban 插件（[#87283](https://github.com/NousResearch/hermes-agent/issues/87283)）未声明 gateway 硬依赖及自动 fork 行为，用户在未经 opt-in 时被静默分叉 worker，违反最小惊讶原则。

5. **僵尸会话与孤儿进程**  
   多个会话租约未释放（[#104691](https://github.com/NousResearch/hermes-agent/issues/104691)、[#80280](https://github.com/NousResearch/hermes-agent/issues/80280)）和超时 worker 留下活进程组，反映生命周期清理路径在 v0.20/v0.21 升级中出现退化。

**🟢 满意方向**

- Intel macOS 构建（[#42199](https://github.com/NousResearch/hermes-agent/issues/42199)）的快速响应让长期被排除的 MacBook Pro 2019 用户获得支持。
- Together.ai 等非标准 provider（[#112534](https://github.com/NousResearch/hermes-agent/issues/112534)）的兼容性修复获得自托管用户好评。

---

## 8. 待处理积压

以下重要 Issue/PR 已超过 30 天未关闭，建议维护者优先关注：

| 项 | 类型 | 创建日期 | 概要 |
|---|---|---|---|
| [#68592](https://github.com/NousResearch/hermes-agent/issues/68592) | P1 Bug | 2026-07-21 | Cron 注入 Kanban 协议，影响所有非 Kanban 定时任务（57 天） |
| [#63383](https://github.com/NousResearch/hermes-agent/issues/63383) | P2 Bug | 2026-07-12 | Desktop 忽略 docker_volumes，CLI 正常（66 天） |
| [#73997](https://github.com/NousResearch/hermes-agent/issues/73997) | P2 Bug | 2026-07-29 | MCP OAuth 端口自冲突掩盖真实鉴权错误（49 天） |
| [#77394](https://github.com/NousResearch/hermes-agent/issues/77394) | P2 Bug | 2026-08-03 | Windows update 在 paused gateway 上仍失败（44 天） |
| [#80280](https://github.com/NousResearch/hermes-agent/issues/80280) | P3 Bug | 2026-08-06 | Kanban 超时 worker 留活进程组（41 天） |
| [#104691](https://github.com/NousResearch/hermes-agent/issues/104691) | P1 Bug | 2026-09-07 | 僵尸会话租约永久锁定（9 天） |
| [#104763](https://github.com/NousResearch/hermes-agent/pull/104763) | PR | 2026-09-07 | hook 串行化关键修复（9 天未合并） |

**重点提醒**：
- [#104763](https://github.com/NousResearch/hermes-agent/pull/104763) 是 [#98382](https://github.com/NousResearch/hermes-agent/issues/98382)（已闭环）所依赖的代码级修复，至今未合入主分支，存在"Issue 已关闭但根因仍存在"的隐患。
- [#68592](https://github.com/NousResearch/hermes-agent/issues/68592) 涉及所有 cron 用户，57 天未修复对生产环境构成潜在干扰。
- Windows 相关 P2（[#63383](https://github.com/NousResearch/her

</details>

<details>
<summary><strong>OpenHuman</strong> — <a href="https://github.com/tinyhumansai/openhuman">tinyhumansai/openhuman</a></summary>

<think>
The user wants me to generate a daily project report for OpenHuman based on the GitHub data provided. Let me analyze the data carefully and create a structured report in Chinese.

Key observations from the data:
1. Very active day: 37 issues updated, 32 PRs updated
2. No new releases
3. Most PRs are CLOSED/MERGED (30 out of 32), only 2 still pending
4. Many p0/p1 priority items being addressed
5. Active work by @M3gA-Mind (appears to be a major contributor)
6. Focus areas: CI/gate issues, agent/skill/MCP fixes, harness improvements

Let me organize this into the required sections.

Major themes:
- CI gate issues (Rust file layout, PR CI Gate not blocking)
- Agent/harness improvements (multiple related fixes)
- Skill registry and MCP fixes
- Windows build issues
- Tool failure classification
- WebSocket/connector stability

Let me draft the report now.
</think>
# OpenHuman 项目日报

**报告日期：2026-09-16**
**数据周期：过去 24 小时**

---

## 1. 今日速览

OpenHuman 今日进入**高强度迭代期**，过去 24 小时共发生 37 条 Issue 更新与 32 条 PR 更新，合并/关闭率分别高达 70% 与 94%，维护者 @M3gA-Mind 单人贡献了绝大多数核心改动。**工作重心集中在「智能体调度与子代理协作」「技能 / MCP 注册中心」「Rust 代码布局与 CI 闸门」三大方向**，连续多日的 p0/p1 高优先级问题被集中清理。无新版本发布，但主干已具备发版条件。整体健康度良好——issue 关闭数明显多于新开数，回归类问题被快速响应。

---

## 2. 版本发布

**无新版本发布。** 尽管主干合入了大量修复（含 4 个 p0 PR），尚未触发新 Release 流程。建议维护者评估是否在下一工作日进行补丁版本发布（如 v0.63.26），以便把 ClawHub/skills.sh 安装能力、Windows 长路径持久化、OpenRouter 登录交互等关键修复交付到用户。

---

## 3. 项目进展

今日合并/关闭的 PR 中，**至少 7 项属于 p0/p1 优先级**，集中解决了过去一周暴露的核心架构问题，**主干质量有明显跃升**。按重要性排列：

### 🔴 p0 关键修复（已合并）

- **[#6304](https://github.com/tinyhumansai/openhuman/pull/6304)** — 编排器直接调用 MCP / Skill 子代理：将 `setup_mcp_server`、`use_mcp_server`、`setup_skills`、`run_skill` 从工具包中释放为编排器腰带的直接工具；同时当调方可达时让工具包直接暴露。这是修复「**编排器无法委托 MCP 和 Skill 子代理**」（[#6302](https://github.com/tinyhumansai/openhuman/issues/6302)）的关键 PR。
- **[#6272](https://github.com/tinyhumansai/openhuman/pull/6272)** — `openhuman-embed` 引入 Runtime → Agent 两步库 API：宿主进程负责登录与会话，core 接收凭据。嵌入式集成边界清晰化。
- **[#6299](https://github.com/tinyhumansai/openhuman/pull/6299)** — 恢复会话时保留回放 transcript 的 `request_id` 与 `failure` 标记，修复 thread 重放元数据错乱（[#6282](https://github.com/tinyhumansai/openhuman/issues/6282)）。
- **[#6297](https://github.com/tinyhumansai/openhuman/pull/6297)** — 持久化的工具结果回读不再经过摘要器，原样返回；底层存储改为真实输出而非摘要（[#6284](https://github.com/tinyhumansai/openhuman/issues/6284)）。

### 🟠 p1 重要修复（已合并）

- **[#6292](https://github.com/tinyhumansai/openhuman/pull/6292)** — 补全 ClawHub 与 skills.sh 注册中心安装链路：78,155 个无下载 URL 的条目现已可装；catalog id 改为唯一。
- **[#6301](https://github.com/tinyhumansai/openhuman/pull/6301)**、`[#6307](https://github.com/tinyhumansai/openhuman/pull/6307)` — 两次对 Rust 750 行布局闸门的救火（`harness_assembly.rs`、`skills/catalog/ops.rs`），恢复 main 分支绿色。

### 🟡 p3 体验与质量改进（已合并）

- **[#6296](https://github.com/tinyhumansai/openhuman/pull/6296)** 载荷摘要器复用同 payload 摘要、传入用户目标、报告真实大小。
- **[#6298](https://github.com/tinyhumansai/openhuman/pull/6298)** 拦截 A/B/A/B 交替式重复循环（升级 vendor/tinyagents）。
- **[#6294](https://github.com/tinyhumansai/openhuman/pull/6294)** 失败 chat turn 不再抹去已完成的工作与失败原因。
- **[#6295](https://github.com/tinyhumansai/openhuman/pull/6295)** 工具失败分类新增 `NotFound` / `Unsupported` 永久类，14 种语言文案齐备。
- **[#6291](https://github.com/tinyhumansai/openhuman/pull/6291)** 模型调用上限仅计被管 run 自身调用，修复嵌套 run 误触发提前暂停。
- **[#6290](https://github.com/tinyhumansai/openhuman/pull/6290)** 新增「注册中心技能 / MCP 真正可被 agent 使用」端到端测试。
- **[#6288](https://github.com/tinyhumansai/openhuman/pull/6288)** 裸名调用被工具包收纳的工具时，自动路由到 `use_skill`。
- **[#6289](https://github.com/tinyhumansai/openhuman/pull/6289)** 关闭空 turn / 被熔断 turn 时基于工具记录生成回复。
- **[#6293](https://github.com/tinyhumansai/openhuman/pull/6293)** `skill_registry_search` 改为分页（limit/offset/total/next_offset）。
- **[#6306](https://github.com/tinyhumansai/openhuman/pull/6306)** 回放元数据包裹的 marker 化与多 marker 安全（#6299 后续修复）。
- **[#6249](https://github.com/tinyhumansai/openhuman/pull/6249)** 允许本地推理运行时无需 OpenHuman 会话。

**整体评估：主干从"多线告警"转为"关键路径打通"，具备进入下一冲刺阶段的基础。**

---

## 4. 社区热点

按评论数排序，今日最热议题：

- **[#6308](https://github.com/tinyhumansai/openhuman/issues/6308) — p1（3 条评论）**：2026-09-15 合并的 4 个 PR 中有 3 个在 `PR CI Gate` 必选检查出结果前就已合入，其中 #6292 拉红 main。**这暴露出 GitHub Branch Protection 与 CI 报告时序的根本性冲突**，是基础设施级风险。
- **[#6246](https://github.com/tinyhumansai/openhuman/issues/6246) — p2 bug（3 条评论）**：聊天编辑器附图后只占位不渲染缩略图（v0.63.25），影响日常使用直观性。已关闭，预期随下一版本修复。
- **[#6300](https://github.com/tinyhumansai/openhuman/issues/6300) — p1（2 条评论）** + **[#6310](https://github.com/tinyhumansai/openhuman/issues/6310) — p1（2 条评论）**：同一根本问题（Rust 750 行布局闸门）的两次暴露，#6310 进一步指出**两个文件已卡在 750 行**、LEGACY 列表有一项零余量、且闸门缺预警带，是典型的"闸门将失守"型预警。
- **[#6255](https://github.com/tinyhumansai/openhuman/issues/6255) — p2（2 条评论）** GitHub 连接器失败时**无退避风暴**（52 秒 100+ 次重试）。
- **[#6256](https://github.com/tinyhumansai/openhuman/issues/6256) — p1（2 条评论）** WebSocket 反复 ping 超时掉线，重连最长 10 分钟。

**诉求分析**：社区与维护者当前最关心的是 **(a) 基础设施闸门可信度** 与 **(b) 真实使用下的稳定性**——智能体看似能跑通但频繁掉链子、CI 看似有门但没拦住。

---

## 5. Bug 与稳定性

按严重程度排列：

### 🔴 P1（已修复或修复在路上）

| Issue | 标题 | 修复 PR |
|---|---|---|
| [#6256](https://github.com/tinyhumansai/openhuman/issues/6256) | WebSocket ping 超时反复掉线，最长 10 分钟重连 | 暂无对应 PR（已关闭，**建议复盘**） |
| [#6300](https://github.com/tinyhumansai/openhuman/issues/6300) | main 红：harness_assembly.rs 751 行 | [#6301](https://github.com/tinyhumansai/openhuman/pull/6301) ✅ |
| [#6305](https://github.com/tinyhumansai/openhuman/issues/6305) | main 红：skills/catalog/ops.rs 752 行 | [#6307](https://github.com/tinyhumansai/openhuman/pull/6307) ✅ |
| [#6302](https://github.com/tinyhumansai/openhuman/issues/6302) | 编排器不委派 MCP/Skill 子代理 | [#6304](https://github.com/tinyhumansai/openhuman/pull/6304) ✅ |
| [#6266](https://github.com/tinyhumansai/openhuman/issues/6266) | Windows `pnpm tauri` 失败 + Dockerfile 残留 src/ | 已关闭（**确认 fix 已并入 #6237 crate 迁移链路**） |
| [#6263](https://github.com/tinyhumansai/openhuman/issues/6263) | OpenRouter 登录期间锁死 + Deny 后误报"已登录" | 已关闭（**需追踪 fix**） |
| [#6308](https://github.com/tinyhumansai/openhuman/issues/6308) | `PR CI Gate` 未真正阻塞合并 | **仍 OPEN** ⚠️ |
| [#6311](https://github.com/tinyhumansai/openhuman/issues/6311) | Skill Setup Agent 单请求被启动 3 次，"运行技能"半段从未发生 | **仍 OPEN** ⚠️ |
| [#6312](https://github.com/tinyhumansai/openhuman/issues/6312) | 异步子代理成功载荷指引不存在的 `wait_subagent` 工具 | **仍 OPEN** ⚠️ |
| [#6309](https://github.com/tinyhumansai/openhuman/issues/6309) | 技能目录 GitHub sourceUrl 安装任意 .md；blob 链接 `?plain=1` 拼出无法抓取的 URL | **仍 OPEN** ⚠️ |
| [#6310](https://github.com/tinyhumansai/openhuman/issues/6310) | Rust 布局闸门：两文件卡在 750 行，无预警带 | **仍 OPEN** ⚠️ |

### 🟠 P2（中等）

- [#6246](https://github.com/tinyhumansai/openhuman/issues/6246) 附图不可见 — 已关闭（推测随下一版本修复）
- [#6255](https://github.com/tinyhumansai/openhuman/issues/6255) GitHub 连接器重试风暴 — 已关闭
- [#6313](https://github.com/tinyhumansai/openhuman/issues/6313) `mcp_registry_list_tools` 接受注册中心限定名为 `server_id` 后给出不可达 RPC — 仍 OPEN
- [#6314](https://github.com/tinyhumansai/openhuman/issues/6314) 委派信封首跳漏 `prompt`，浪费两步 — 仍 OPEN
- [#6315](https://github.com/tinyhumansai/openhuman/issues/6315) 审批闸门包在工具策略检查之外，被拒的 `use_skill` 仍弹审批 — 仍 OPEN
- [#6317](https://github.com/tinyhumansai/openhuman/issues/6317) 端到端 agent 栈共享进程级 tool registry，结果依赖测试顺序 — 仍 OPEN

**回归风险提示**：多个 Issue 是新合入 PR（#6304 等）的直接观测结果——这种"修一个、暴露一片"的模式说明 **agent 调度体系仍在快速重构期**，建议在 v0.64 系列版本前冻结核心调度接口。

---

## 6. 功能请求与路线图信号

- **[#5538](https://github.com/tinyhumansai/openhuman/issues/5538) — Proposal**（@vnbochkarev-netizen，2026-08-13 提交、9-15 更新）：第三方厂商提议接入 ViBo Cloud API 提供托管记忆层，主打"减少 97.5% tokens"。**与 OpenHuman 自身的「持久化状态」定位高度重合**，维护者目前未置评——如不引入，应明确说明以避免社区误判项目方向。
- **嵌入式 API 升级**（[#6272](https://github.com/tinyhumansai/openhuman/pull/6272)）：Runtime → Agent 库 API 是**面向第三方嵌入者的明确方向信号**，预期后续会出现更完善的 `AgentSpec` 文档与示例。
- **本地 LLM 支持**（[#6249](https://github.com/tinyhumansai/openhuman/pull/6249)）：允许本地推理运行时无 OpenHuman 会话即可运行——**直接回应了隐私敏感用户的长期呼声**，建议列入下一版本 changelog 的"亮点"项。
- **技能生态扩张**（[#6292](https://github.com/tinyhumansai/openhuman/pull/6292)）：ClawHub（78,155 条目）+ skills.sh 接入，**技能总量大幅跃升**，建议配套发布"技能市场"上线公告。

---

## 7. 用户反馈摘要

- **可观测性诉求强烈**：多份 issue（#6282、#6284、#6281、#6279）都直接指出"用户看到的是 'Something went wrong'，而真实失败信息在历史与 transcript 中已被抹掉"——**透明度 / 可诊断性是当下一线痛点**。#6294 / #6289 已部分回应，但还需面向最终用户暴露更多结构化错误。
- **CI 信任度受损**：#6308 的事实是"CI 闸门在主分支上失效 3 次"，且一次拉红 main——这对**内部发布节奏**与**外部贡献者信心**都是负面信号。
- **Windows 用户被多次刺痛**：[#6266](https://github.com/tinyhumansai/openhuman/issues/6266)（构建脚本）、[#6303](https://github.com/tinyhumansai/openhuman/pull/6303) 仍在 OPEN（长路径持久化）。Windows 桌面端似乎是**质量短板**。
- **OpenRouter 登录体验**（[#6263](https://github.com/tinyhumansai/openhuman/issues/6263)）被形容为"锁死 + 假阳性"——**OAuth 弹窗期间的 UI 锁状态**是典型跨平台容易踩到的坑。
- **技能目录可用性**（[#6285](https://github.com/tinyhumansai/openhuman/issues/6285)、[#6287](https://github.com/tinyhumansai/openhuman/issues/6287)）被批"展示能装却装不上"、"重名选错"——**信息展示与实际能力脱节**，是注册中心类功能的常见反模式，已被集中修复。

---

## 8. 待处理积压

| 类型 | 编号 | 标题 | 优先级 | 风险 |
|---|---|---|---|---|
| OPEN 长期未根治 | [#6310](https://github.com/tinyhumansai/openhuman/issues/6310) | Rust 布局闸门两项卡在 750 行 | p1 | **极高**（任意一行 PR 即拉红 main） |
| OPEN 流程性 | [#6308](https://github.com/tinyhumansai/openhuman/issues/6308) | `PR CI Gate` 未真正阻塞合并 | p1 | **极高**（保护机制失灵） |
| OPEN 体验 | [#6311](https://github.com/tinyhumansai/openhuman/issues/6311) | Skill Setup Agent 启动 3 次，"运行"半段缺失 | p1 | 高 |
| OPEN 安全 | [#6315](https://github.com/tinyhumansai/openhuman/issues/6315) | 审批闸门包在工具策略外，被拒 `use_skill` 仍弹审批 | p2 | 中 |
| OPEN 安全 | [#6309](https://github.com/tinyhumansai/openhuman/issues/6309) | 任意 GitHub .md 可被当作技能安装 | p1 | **高（供应链）** |
| 待合并 PR | [#6303](https://github.com/tinyhumansai/openhuman/pull/6303) | Windows 长路径 turn_state 持久化 | p1 | 中 |
| 长期提案 | [#5538](https://github.com/tinyhumansai/openhuman/issues/5538) | 第三方托管记忆接入（已 1 月+ 无回应） | — | 低（建议明确表态） |

**维护者建议**：优先在 24 小时内落实 #6308（CI 闸门时序）与 #6309（技能供应链），二者是阻断性风险；其余按 p1→p2 节奏消化。

---

*报告基于 OpenHuman GitHub 仓库过去 24 小时公开数据生成。*

</details>

---
*本日报由 [Big Model Radar](https://github.com/96loveslife/big_model_radar) 自动生成。*
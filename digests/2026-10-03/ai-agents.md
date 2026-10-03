# OpenClaw 生态日报 2026-10-03

> Issues: 473 | PRs: 500 | 覆盖项目: 8 个 | 生成时间: 2026-10-03 04:44 UTC

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

<think>The user wants me to generate a daily project status report for OpenClaw (an open-source AI agent/personal AI assistant project on GitHub) based on the provided data. Let me analyze the data carefully:

**Overview:**
- 473 issues updated in 24 hours (316 active, 157 closed)
- 500 PRs updated in 24 hours (291 pending merge, 209 merged/closed)
- 2 new releases

**Releases:**
1. v2026.9.8 - 58 commits, 43 PRs, 21 contributors
2. v2026.8.35 - gateway-only extended-stable (LTS equivalent)

**Top Issues by comments:**
1. #143524 (104 comments) - SQLite WAL grows to 1.4-2.8 GB blocking Gateway startup (P0)
2. #116201 (59 comments) - Realtime voice unbounded state retention (P2)
3. #144911 (31 comments, CLOSED) - MCP server init timeout crashes Gateway
4. #119720 (21 comments) - Sync agent persistence blocks Gateway event loop (P1)
5. #102175 (21 comments) - Embedded prompt cache breaks across boundaries (P2)
6. #97616 (17 comments) - Unreaped hook/tool child processes causing zombies (P1)
7. #38327 (17 comments) - "Cannot convert undefined or null" with vertex/gemini (P0, regression since March)

**Top PRs:**
Most PRs are by @steipete doing "deslop" refactoring (cleaning up code debt)
- #163930 - sessions reset in agent executor
- #163799 - immutable installations and sealed generations
- #162759 - webhook port preservation
- #164011 - UI refactoring
- #163995 - worker lifecycle history UI
- #119735 - WhatsApp activity refresh (autofix)
- #111252 - reject altered local session cursors (anthropic)

Many closed PRs:
- #164033 - refactor auto-reply (closed)
- #164028 - diagnostics Prometheus labels (closed)
- #159476 - auto-compaction honors configured thinking (closed)
- #163997 - refactor auto-reply (closed)
- #163945 - state and memory storage (closed)
- #164039 - M12/phase3 native worker plan (closed)
- #164034 - related to #164038

Let me now structure the report according to the 8 sections requested.

Key observations:
1. Heavy focus on code cleanup ("deslop") refactoring - many PRs from @steipete
2. Major stability issues remain: SQLite WAL growth, MCP server timeouts, process leaks
3. Two releases in 24h suggests active shipping
4. Many regression bugs (marked as regression) in 2026.9.x series
5. Several Windows-specific issues
6. Lots of session/state persistence issues

Let me write the report in Chinese as requested, professional and data-driven.</think>

# OpenClaw 项目日报 · 2026-10-03

## 1. 今日速览

OpenClaw 仓库在 2026-10-03 维持了极高的工程活跃度：过去 24 小时内 Issues 净更新 473 条（活跃 316 / 关闭 157），PRs 更新 500 条（待合并 291 / 已合并关闭 209），并连续发布 **v2026.9.8** 与 **v2026.8.35（gateway-only extended-stable）** 两个版本。@steipete 主导的"deslop"系列重构 PR 集中提交（约 10+ 个 XL 级 PR），覆盖 gateway、agent、auto-reply、state、UI、iOS、Swift、Android 等核心模块，表明项目正进入系统性的技术债务清理阶段。与此同时，社区持续报告与 2026.9.x 系列相关的稳定性问题（SQLite WAL 失控、MCP/stdio 进程泄漏、子进程僵尸、agent 持久化阻塞事件循环等），其中 **#143524（SQLite WAL 膨胀）** 单日讨论量达 104 条评论，是当前 P0 级最严重的生产可用性障碍。

---

## 2. 版本发布

### 🚀 v2026.9.8（已发布）
- **规模**：58 commits · 43 PRs · 21 contributors
- **频道**：常规 release 通道
- **亮点**：继承并刷新了 2026.9.x 系列的修复；社区测试反馈中已确认候选版本在 `package-verify` 阶段出现 `Invalid package` 报告（见 [#163999 / #164036](https://github.com/openclaw/openclaw/pull/164036)），release 标签已成功重命名为 `2026.9.8`，不再出现降级拒绝。
- **建议**：升级前重点回归 SQLite WAL 管理、prepared-model-catalog worker 内存管理、WebChat 媒体路径映射等场景；详见 [release notes](https://docs.openclaw.ai/releases/2026.9)。

### 🛡️ v2026.8.35（已发布，gateway-only extended-stable）
- **定位**：当前 LTS 等价通道，"August 2026 末版 + 关键安全 / 稳定性补丁 + 新模型支持"。
- **适用对象**：需要长期稳定运行、不希望跟随 9.x 实验性变更的企业 / 嵌入式部署。
- **注意**：仅 gateway 包；非 gateway 客户端不通过此通道更新。

---

## 3. 项目进展（今日合并/关闭的关键 PR）

| PR | 标题 | 影响 |
|---|---|---|
| [#144911](https://github.com/openclaw/openclaw/issues/144911) | MCP server init timeout 导致 Gateway 崩溃（已关闭） | 修复 stdio MCP `initialize` 30s 超时引发 child cleanup 路径未处理 rejection；属于 9.x 系列 release blocker |
| [#163999 → #164036](https://github.com/openclaw/openclaw/pull/164036) | release 候选重命名 + dist 校验回归测试 | 让 v2026.9.8 顺利出包，避免降级 |
| [#159476](https://github.com/openclaw/openclaw/pull/159476) | auto-compaction 遵循配置的 `compaction.thinkingLevel` | 解决 [#159424](https://github.com/openclaw/openclaw/issues/159424) — 文档默认 `low` 与实际行为 `high` 不一致 |
| [#111252](https://github.com/openclaw/openclaw/pull/111252) | Anthropic 拒绝被篡改的本地 session cursor | 阻止对 OpenClaw 发出 cursor 追加脏数据 / padding / 注入 JSON 字段 |
| [#163995](https://github.com/openclaw/openclaw/pull/163995) | Control UI 显示 worker 生命周期历史 | 解决 #163982 — 解决 Systems 页面 reclaim 后 worker 仍显示为 Attached 的困惑 |
| [#164038](https://github.com/openclaw/openclaw/pull/164038) | Unix 安装器不再误判 PATH 就绪 | 解决 [#164034](https://github.com/openclaw/openclaw/issues/164034) — shell profile 中的注释 / 旧 export 不再被误识别为 PATH 配置 |
| [#163138](https://github.com/openclaw/openclaw/pull/163138) | ask_user 使用 monotonic clock 计时问题过期 | NTP 时钟跳变不再导致问题立即过期 |
| [#164040](https://github.com/openclaw/openclaw/pull/164040) | Android 显式重连时重新校验 TLS 信任 | 解决 #164026 — 证书变更后用户仍能正常重连 |

**整体判断**：项目层面在 v2026.9.8 出包 + 系统性"deslop"重构双线推进。Deslop 系列批量集中删除 dead code、单调用方转发层、重复 result shape、pre-July 的 OAuth 侧车 import（[#163186](https://github.com/openclaw/openclaw/pull/163186)）等，**净影响是配置 / 协议 / 持久化数据形状全部不变**，可见工程团队重视内部清理但严格守住向后兼容。

---

## 4. 社区热点

### 🔥 高讨论度 Issues

1. **[#143524](https://github.com/openclaw/openclaw/issues/143524) — SQLite WAL 增长到 1.4–2.8 GB 阻塞 Gateway 启动（104 评论 · P0 · 🦐 gold shrimp）**
   - Windows 单机部署，`wal_autocheckpoint=1000` 未生效，手动 `wal_checkpoint(TRUNCATE)` 后又迅速膨胀。多个用户受影响，影响面跨 Windows / 嵌入式部署。

2. **[#116201](https://github.com/openclaw/openclaw/issues/116201) — Realtime voice 无界状态保留（59 评论 · P2 · 🐚 platinum hermit）**
   - 实时语音会话以条目计数 / 取消信号而非硬所有权边界作为限制，存在 provider / client 卡顿时无限保留 consult 工作、超大帧、pre-ready 音频等。

3. **[#119720](https://github.com/openclaw/openclaw/issues/119720) — 同步 agent 持久化与 transcript 维护阻塞 Gateway 事件循环（21 评论 · P1 · 🦞 diamond lobster）**
   - 大规模下转写原子重写 + 持久化在主线程；社区已合并 #140231、#138984 等部分修复，但仍有用户在 2026.9.5+ 上观察回归。

4. **[#102175](https://github.com/openclaw/openclaw/issues/102175) — embedded prompt cache 跨 room-event / policy / Responses 边界失效（21 评论 · P2 · 🦞）**
   - 长会话跨多种内部边界时，模型可见工具清单变化导致 provider prompt-cache 复用被打破，触发费用与延迟放大。

5. **[#38327](https://github.com/openclaw/openclaw/issues/38327) — `Cannot convert undefined or null to object` on google-vertex/gemini-3.1-pro-preview（17 评论 · P0 · 自 3 月起长期未修复）**
   - 自 2026.3.2 起的回归，影响所有 Vertex Gemini-3.1 用户，👍 3。维护者长期关注但缺 fix PR。

### 🧑‍🤝‍🧑 多贡献者协作热点

- **"deslop" 系列**（[steipete](https://github.com/steipete) 主导）：[gateway](https://github.com/openclaw/openclaw/pull/164022)、[workers & turns](https://github.com/openclaw/openclaw/pull/164014)、[agent session / subagent](https://github.com/openclaw/openclaw/pull/163996)、[UI core](https://github.com/openclaw/openclaw/pull/164011)、[state & memory](https://github.com/openclaw/openclaw/pull/163945)、[auto-reply](https://github.com/openclaw/openclaw/pull/163997)、[iOS](https://github.com/openclaw/openclaw/pull/164037)。每个 PR 都明确标注"无用户可见行为变化"，是内部代码质量的长期投资。
- **macOS sidebar 增强**（[#164013](https://github.com/openclaw/openclaw/pull/164013)）：Cmd/Shift 多选、批量编辑、拖拽组织 session，伴随 [#163699](https://github.com/openclaw/openclaw/pull/163699) 的 per-session tree 行展示。
- **Webhooks 改造**（[#162759](https://github.com/openclaw/openclaw/pull/162759)）：保留已注册的回调 URL，关闭无 listener 配置时的隐式端口，避免反向代理断链。

---

## 5. Bug 与稳定性

### 🔴 P0 / Crash-loop 类（建议立即关注）

| Issue | 描述 | Fix PR | 平台 |
|---|---|---|---|
| [#143524](https://github.com/openclaw/openclaw/issues/143524) | Agent SQLite WAL 无界增长 → 阻塞 Gateway 启动 | ❌ 无 | Windows |
| [#144911](https://github.com/openclaw/openclaw/issues/144911) ✅ 已关闭 | MCP stdio `initialize` 30s 超时致 Gateway 崩溃 | ✅ 已合并 | 全平台 |
| [#145252](https://github.com/openclaw/openclaw/issues/145252) | 2026.9.3/9.4 升级 / 恢复可靠性追踪（tracking） | 部分 | 全平台 |
| [#160521](https://github.com/openclaw/openclaw/issues/160521) | state DB 读许证关 → `Worker environment inventory has closed` unhandled rejection | ❌ 无 | Linux |
| [#158390](https://github.com/openclaw/openclaw/issues/158390) | plugin-captures tmp 永不 GC，磁盘无限增长 | ❌ 无 | 全平台 |
| [#162031](https://github.com/openclaw/openclaw/issues/162031) | 2026.9.7 `Unhandled promise rejection: undefined` crash-loop（runtime tool assembly） | ❌ 无 | macOS |
| [#157818](https://github.com/openclaw/openclaw/issues/157818) | 2026.9.4 → 9.6 npm 更新卡 300s canary 硬上限 | ❌ 无 | 全平台 |
| [#159514](https://github.com/openclaw/openclaw/issues/159514) ✅ 已关闭 | 2026.9.6/9.7 catalog worker 每请求重建注册表（~8MB/req） | ✅ | 全平台 |
| [#38327](https://github.com/openclaw/openclaw/issues/38327) | vertex/gemini-3.1-pro-preview `Cannot convert undefined`（自 3 月起） | ❌ 无 | 全平台 |

### 🟠 P1 / 数据/会话状态

| Issue | 描述 | Fix PR |
|---|---|---|
| [#119720](https://github.com/openclaw/openclaw/issues/119720) | 同步持久化阻塞 event loop | 部分（#140231、#138984） |
| [#97616](https://github.com/openclaw/openclaw/issues/97616) | hook/tool 子进程泄漏 → 僵尸积累 | ❌ 无 |
| [#161976](https://github.com/openclaw/openclaw/issues/161976) | WhatsApp DM durable registry handoff 失败（2026.9.7） | ❌ 无 |
| [#154572](https://github.com/openclaw/openclaw/issues/154572) | sessions_spawn → claude-cli 必失败 `SessionTranscriptWriterClaimReboundError` | ❌ 无 |
| [#160548](https://github.com/openclaw/openclaw/issues/160548) | 2026.9.6 prepared-model-catalog worker 内存泄漏 ~1GiB/5min | ❌ 无 |
| [#157989](https://github.com/openclaw/openclaw/issues/157989) | 插件 source capture 每次 CLI 写 ~1.4 GB、Gateway 启动写 ~6.5 GB → SSD 损耗 | ❌ 无 |
| [#161379](https://github.com/openclaw/openclaw/issues/161379) | Gateway pinned 一颗 CPU：prepared model catalog 60s TTL < per-agent refresh | ❌ 无 |
| [#163566](https://github.com/openclaw/openclaw/issues/163566) | durable context-engine turns stuck as 'session-rebound'，~100s CPU/turn（2026.9.7） | ❌ 无 |
| [#163138](https://github.com/openclaw/openclaw/pull/163138) 已合并 | ask_user 时钟跳变导致问题立即过期 | ✅ |

### 🟡 P2 / 体验 & 性能

- [#102175](https://github.com/openclaw/openclaw/issues/102175) 跨边界 prompt cache 失效 — 长期 P2，但影响所有 embedded 长会话用户
- [#150635](https://github.com/openclaw/openclaw/issues/150635) dreaming deep phase 因 512-entry cap 不再 promote
- [#116201](https://github.com/openclaw/openclaw/issues/116201) Realtime voice 状态保留
- [#154299](https://github.com/openclaw/openclaw/issues/154299) 2026.9.5 子 agent completion-delivery 静默丢失
- [#151962](https://github.com/openclaw/openclaw/issues/151962) 13 天长会话出现 phantom user messages
- [#116512](https://github.com/openclaw/openclaw/issues/116512) Telegram progress 重复首条评论
- [#160610](https://github.com/openclaw/openclaw/issues/160610) Discord autoPresence 永远 "runtime degraded"（env-only 凭据）
- [#159912](https://github.com/openclaw/openclaw/issues/159912) memory-core 后台回调保留 retired plugin registry

---

## 6. 功能请求与路线图信号

| 提议 | 来源 | 状态 / 信号 |
|---|---|---|
| **Per-agent dreaming 配置** | [#67413](https://github.com/openclaw/openclaw/issues/67413) | 12 评论 · 👍 5。呼声持续，社区反映 M3 carries 所有 agent 同时 dreaming 触发 OOM。短期路线内合并的可能性高（已有相关修复合入趋势） |
| **cron auto-retry** | [#49740](https://github.com/openclaw/openclaw/issues/49740) | 已关闭（stale）。但用户因 LLM 上游抖动需 `--retry-count` / `--retry-delay` 的需求反复出现 |
| **Native approval buttons for Feishu / Teams / Mattermost** | [#104521](https://github.com/openclaw/openclaw/issues/104521) | 已关闭（stale）。等待重新开启 — 依赖 [#103679](https://github.com/openclaw/openclaw/issues/103679) typed approval 路径 |
| **Memory write pipeline（分类 / 去重 / merge / 冲突）** | [#42648](https://github.com/openclaw/openclaw/issues/42648) | 已关闭（stale · 7 评论）。Memory MVP 的下一块拼图 |
| **macOS sidebar 多选 / 拖拽** | [#164013](https://github.com/openclaw/openclaw/pull/164013) | ✅ PR 已开，等待 maintainer 检视 |
| **Control UI worker 生命周期** | [#163995](https://github.com/openclaw/openclaw/pull/163995) | ✅ PR 已开，等待合并 |
| **immutable installations + sealed generations** | [#163799](https://github.com/openclaw/openclaw/pull/163799) | 🚧 XL · waiting on author，关系到 native update 的可靠性 |
| **WhatsApp pending-work activity refresh** | [#119735](https://github.com/openclaw/openclaw/pull/119735) | 🐢 Stale + clawsweeper autogenerated，等作者推进 |
| **Tool Search 支持 anyOf/oneOf/allOf** | [#164032](https://github.com/openclaw/openclaw/pull/164032) | ✅ 修复 [#164024](https://github.com/openclaw/openclaw/issues/164024)，合并后工具发现率提升 |

**信号**：v2026.9.8 已发，下一

---

## 横向生态对比

<think>The user wants me to generate a comparative analysis report across all the project daily reports provided. Let me organize my thinking carefully.

The projects covered are:
1. **OpenClaw** (github.com/openclaw/openclaw) - Core reference, very active
2. **NanoBot** (github.com/HKUDS/nanobot) - Active, mostly bug fixes
3. **PicoClaw** (github.com/sipeed/picoclaw) - Low activity
4. **IronClaw** (github.com/nearai/ironclaw) - Very low activity
5. **LobsterAI** (github.com/netease-youdao/LobsterAI) - Stale, security concerns
6. **QwenPaw** (github.com/agentscope-ai/QwenPaw) - Strong merge activity today
7. **Hermes Agent** (github.com/NousResearch/hermes-agent) - Very active
8. **OpenHuman** (github.com/tinyhumansai/openhuman) - Very active

Let me extract key data points:

**Activity Summary (24h):**
- OpenClaw: 473 issues updated (316 active/157 closed), 500 PRs (291 pending/209 merged), 2 releases
- NanoBot: 5 issues (4 open/1 closed), 29 PRs (22 pending/7 closed)
- PicoClaw: 3 issues, 3 PRs, 0 releases
- IronClaw: 1 issue, 0 PRs, 0 releases
- LobsterAI: 6 issues, 3 PRs (1 open/2 closed-stale), 0 releases
- QwenPaw: 13 issues (all open), 14 PRs (7 open/7 closed), 0 releases
- Hermes Agent: 50 issues (29 active/21 closed), 50 PRs (28 pending/22 merged), 0 releases
- OpenHuman: 9 issues (7 open/2 closed), 31 PRs (2 pending/29 merged), 0 releases

**Common Technical Themes I can identify:**

1. **Headless/Self-hosted deployment** - OpenHuman (#6925, #6926, #6927, #6929), PicoClaw (#3415 Nginx), IronClaw (#8122 macOS local dev)

3. **Provider compatibility** - NanoBot (#5898 GPT-6, #5845 Opper), QwenPaw (#8074 GPT-6, #8090 fix)

4. **MCP (Model Context Protocol) standardization** - OpenClaw (#144911 stdio timeout), NanoBot (#5763 multimodal), LobsterAI (#908 command injection fix)

5. **Session/State persistence** - OpenClaw (#143524 SQLite WAL, #119720 sync persistence), Hermes Agent (#68321 desktop session state), NanoBot (#5932 cron pending actions), LobsterAI (#906 SQLite data loss)

6. **Channel adapter reliability** - NanoBot (QQ/Telegram/Slack/Email issues), Hermes Agent (Feishu), QwenPaw (Lark)

7. **Memory/Long-term context** - OpenClaw (#116201 realtime state, #102175 prompt cache), NanoBot (#42648 memory pipeline), QwenPaw (#7884 history load), LobsterAI (#914 import/export)

8. **Mobile adaptation** - QwenPaw (#6281, #8086), Hermes Agent (Desktop multi-device)

9. **Security concerns** - LobsterAI (#908, #909, #911), Hermes Agent (#123343 CVE deps), NanoBot (#5997 Linear reauth race)

10. **Provider parameter coupling** - NanoBot (#6002 reasoningEffort→temperature)

11. **Approval/safety gates** - OpenClaw (#104521 native approval), NanoBot (#5994 empty tool registry)

12. **Multi-agent communication** - QwenPaw (#8080), OpenClaw (#101178 implicit delegation)

14. **WebSearch compatibility** - NanoBot (#5926 URL case)

Let me think about positioning differences:
- OpenClaw: Most feature-rich, mature, with "deslop" code health initiative
- NanoBot: Active multi-channel AI assistant with broad provider support (46 providers)
- PicoClaw: Lightweight, embedded scenarios
- IronClaw: Desktop/app extension focus
- LobsterAI: Memory-first AI assistant with IM integration
- QwenPaw: Provider-rich with multi-modal capabilities
- Hermes Agent: Desktop-centric, multi-platform
- OpenHuman: Self-hostable agent platform with composable architecture

Now let me write the report in Chinese, professional, data-driven.

Key insights for the report:
- OpenClaw leads in activity (973 total updates today vs. 100 for OpenHuman which is 2nd)
- Hermes Agent and OpenHuman are most comparable to OpenClaw in scope
- LobsterAI shows signs of maintenance abandonment
- PicoClaw and IronClaw are in maintenance hibernation

Let me write a clean, structured report.</think>

# 个人 AI 助手 / 自主智能体开源生态横向对比报告

**报告日期：2026-10-03**
**覆盖项目：OpenClaw · NanoBot · PicoClaw · IronClaw · LobsterAI · QwenPaw · Hermes Agent · OpenHuman（8 个）**

---

## 一、生态全景

当前个人 AI 助手 / 自主智能体开源生态呈现**两极分化 + 头部集聚**的格局：**OpenClaw 以 24 小时 973 条 Issue/PR 更新量遥遥领先**（约为第二名 Hermes Agent 的 10 倍），OpenHuman 与 Hermes Agent 紧随其后构成第二梯队（合计约 150 条更新），NanoBot 与 QwenPaw 处于中等活跃带，而 PicoClaw、IronClaw 与 LobsterAI 已进入**维护空窗期或半失活状态**（合计仅 16 条更新）。整体而言，头部项目已进入"功能扩张 + 系统性重构 + 跨平台稳定性"的复杂工程阶段，而中尾部项目则普遍面临**维护人手不足、安全积压、PR stale 流失**的共性挑战。值得注意的是，今日生态中出现两条主轴：**去中心化部署能力（headless / 自托管 / 容器化）**与**MCP（Model Context Protocol）适配层的工程可靠性**，两者共同构成了下一代个人 AI 助手的核心战场。

---

## 二、各项目活跃度对比

| 项目 | Issues（活跃/关闭） | PRs（待合并/已关） | Release | 综合活跃度 | 健康度评估 | 当前阶段 |
|---|---|---|---|---|---|---|
| **OpenClaw** | 316 / 157 = 473 | 291 / 209 = 500 | **2**（v2026.9.8 + v2026.8.35 LTS） | ⭐⭐⭐⭐⭐ | 🟢 健康 | 功能深化 + 技术债清理 |
| **Hermes Agent** | 29 / 21 = 50 | 28 / 22 = 50 | 0 | ⭐⭐⭐⭐ | 🟢 健康 | 密集修 bug，桌面端收尾 |
| **OpenHuman** | 7 / 2 = 9 | 2 / 29 = 31 | 0 | ⭐⭐⭐⭐ | 🟢 健康 | 高频小步快跑 + P0 重构 |
| **NanoBot** | 4 / 1 = 5 | 22 / 7 = 29 | 0 | ⭐⭐⭐ | 🟡 偏改进 | 质量夯实，渠道适配层补漏 |
| **QwenPaw** | 13 / 0 = 13 | 7 / 7 = 14 | 0 | ⭐⭐⭐ | 🟢 良好 | 集中清理积压 PR |
| **LobsterAI** | 6 / 0 = 6 | 1 / 2 = 3 | 0 | ⭐ | 🔴 需警惕 | 维护空窗，6 个月积压 |
| **PicoClaw** | 3 / 0 = 3 | 2 / 1 = 3 | 0 | ⭐ | 🟡 关注 | 低活跃，PR stale 风险 |
| **IronClaw** | 1 / 0 = 1 | 0 / 0 = 0 | 0 | ☆ | 🟡 关注 | 几乎静默，1 个硬阻塞 Bug |

> **关键观察**：OpenHuman 的 PR 关闭率高达 93.5%（29/31），处理效率领先；OpenClaw 的关闭率 41.8% 略低但绝对量最高，体现出"广进严出"特征；LobsterAI 的 PR **全部为 stale 关闭**，需警惕维护机制失效。

---

## 三、OpenClaw 在生态中的定位

### 3.1 与同类项目的横向对比

| 维度 | OpenClaw | Hermes Agent | OpenHuman | NanoBot |
|---|---|---|---|---|
| **架构重心** | Gateway + 多端（Desktop / iOS / Android / WebChat） | Desktop + Gateway | Agent 平台 + 容器化 | 多渠道 Bot 框架 |
| **Provider 数** | 50+ | 30+ | 10+ (含自托管推理) | 46+ |
| **当前版本节奏** | 双轨（main + extended-stable） | v0.21.5 patch 累积 | 频繁小步合入 | v0.3.5 |
| **代码健康投入** | **系统性"deslop"重构**（10+ XL 级 PR） | i18n 重构中 | 模块化重构 | 局部修复 |
| **核心差异化** | "工业级稳定 + 长生命周期协议" | "桌面优先 + 多端消费" | "自托管 + 离线优先" | "Provider 数量 + 渠道广度" |

### 3.2 关键差异化优势

1. **生命周期管理**：双轨版本（v2026.9.8 主线 + v2026.8.35 gateway-only LTS）是当前生态中**唯一具备正式 LTS 概念**的项目，反映出对生产部署的工程承诺。
2. **代码健康主动性**：@steipete 主导的"deslop"系列（10+ XL 级 PR，零用户可见行为变更）是行业罕见的"内部重构"工程投入，表明团队有余力做防御性维护。
3. **多端覆盖广度**：iOS / Android / WebChat / Desktop / CLI 的全端覆盖，加上 macOS sidebar、Webhooks、UI worker 生命周期等能力，已接近商业级个人助手的体验基线。

### 3.3 社区规模与影响力

OpenClaw 单日 973 条 Issue/PR 更新量约为 Hermes Agent 的 10 倍、OpenHuman 的 30 倍、NanoBot 的 17 倍。其 P0 议题（#143524 SQLite WAL）单条评论量 104，是当前生态中**单条技术议题最高讨论度**，反映出真实的用户规模与多样性（覆盖 Windows 嵌入式、macOS、Linux、生产部署、自托管等多类用户）。

---

## 四、共同关注的技术方向

| 技术方向 | 涉及项目 | 具体诉求 | 共识强度 |
|---|---|---|---|
| **MCP（Model Context Protocol）适配层可靠性** | OpenClaw、LobsterAI、NanoBot、QwenPaw | stdio 进程超时、命令注入防护、多模态字段 400 处理、工具发现能力 | ⭐⭐⭐⭐⭐ |
| **Headless / 自托管 / 容器化部署** | OpenHuman、PicoClaw、IronClaw | Docker compose 可写卷、glibc 兼容、容器密钥环、BYOK、Nginx 子路径、macOS 本地开发 | ⭐⭐⭐⭐⭐ |
| **Provider 接入标准化** | NanoBot、QwenPaw | GPT-6 / Opper / Claude 缓存（`cache_control` 块）/ OCI 兼容端点 64 字符 tool_call_id | ⭐⭐⭐⭐ |
| **会话与状态持久化** | OpenClaw、Hermes Agent、NanoBot、QwenPaw、LobsterAI | SQLite WAL 失控、cron 动作原子性、桌面端 UI 与持久化不同步、history 加载不全 | ⭐⭐⭐⭐⭐ |
| **多端协同（Desktop ↔ Mobile ↔ Web）** | QwenPaw、Hermes Agent、OpenClaw | 移动端适配、LAN 终端身份、多端共享 session | ⭐⭐⭐⭐ |
| **Memory / 长上下文工程** | OpenClaw、LobsterAI、NanoBot、QwenPaw | prompt cache 跨边界失效、记忆导入/导出、memory pipeline、Reactive-Room 记忆升级 | ⭐⭐⭐⭐ |
| **渠道适配层（IM / Bot）** | NanoBot、QwenPaw、Hermes Agent | QQ 引用消息、Telegram 链接渲染、Slack 3000 字截断、Lark/Feishu 信息显示 | ⭐⭐⭐⭐ |
| **安全与凭据管理** | LobsterAI、Hermes Agent、NanoBot、OpenClaw | auth token 加密、命令注入、依赖 CVE、Anthropic 凭据池误判 | ⭐⭐⭐⭐⭐ |

---

## 五、差异化定位分析

| 项目 | 功能侧重 | 目标用户 | 架构关键差异 |
|---|---|---|---|
| **OpenClaw** | 全场景个人 AI 助手 + 协议稳定性 | 中高级用户 / 企业 / 自托管爱好者 | Gateway 进程统一化、多端隔离、LTS 双轨 |
| **NanoBot** | 多渠道 Bot + 多 Provider 网关 | 客服 / SaaS 集成 / IM 重度用户 | 46+ Provider 兼容层、渠道适配抽象 |
| **PicoClaw** | 轻量级嵌入式助手 | 资源受限场景 / 简单部署 | 单二进制、最小依赖 |
| **IronClaw** | Desktop 应用扩展 / 凭据管理 | macOS / 本地开发者 | keychain 集成、extension 架构 |
| **LobsterAI** | 记忆优先 + IM 集成 | 个人知识管理 / 国内 IM 用户 | 飞书深度适配、本地 SQLite 存储 |
| **QwenPaw** | Provider 丰富 + 多模态 | 多模型用户 / 桌面控制台 | 编码/游戏/UI 多语言、可配置 MCP 超时 |
| **Hermes Agent** | Desktop 中心 + 多端消费 | Desktop 重度用户 | 桌面会话生命周期、profile 隔离 |
| **OpenHuman** | 自托管 Agent 平台 + Bench | 开发者 / 研究人员 / 企业自托管 | OCI 镜像、原生模块捆绑、Composio 集成 |

**架构差异的关键启示**：
- OpenClaw 选择"以 Gateway 为中心 + 多端轻客户端"；
- OpenHuman 选择"以平台化为中心 + 自托管优先"；
- Hermes Agent 选择"以 Desktop 为中心 + 移动消费"；
- NanoBot 选择"以 Provider / 渠道为中心 + 广覆盖"。

四种路线对应四种商业/产品哲学，**并不互斥而是互补**。

---

## 六、社区热度与成熟度分层

### 6.1 第一梯队：高速迭代 + 系统性重构（OpenClaw / Hermes Agent / OpenHuman）

- **OpenClaw**：进入"功能深化 + 技术债清理"双线推进期（"deslop"重构），需警惕**P0 Bug 密度未消化**（SQLite WAL、MCP 进程泄漏、prepared-model-catalog worker 内存泄漏）。
- **Hermes Agent**：聚焦桌面端稳健性 + 跨平台兼容，已合并 22 PR，关闭率 42%，健康度良好。
- **OpenHuman**：高频小步合入（93% PR 关闭率），但 Discord 自动采集的 issue（如 #6941）信息缺失，**外部反馈→工程团队的转化效率待提升**。

### 6.2 第二梯队：质量巩固 + 渠道补漏（NanoBot / QwenPaw）

- **NanoBot**：处于"P0 已修、P2 积压"状态，14 个 P2 PR 待合并，存在**PR 积压导致合入摩擦**风险；provider 行为一致性（#6002 影响 38 个 provider）是潜在架构风险。
- **QwenPaw**：今日合入 7 PR（含 @AaronZ345 主导的 6 条），**一次清理 8 月以来积压**，是近期合并力度最强的单日。

### 6.3 第三梯队：维护空窗 + 风险积压（LobsterAI / PicoClaw / IronClaw）

- **LobsterAI**：6 个月以上 6 个 Issue / 3 个 PR 全部 stale，**3 个安全相关 PR 被误关**（#909、#911 涉及 auth token 与技能扫描），需立即复核。
- **PicoClaw**：核心 Bug #3281（Web UI 长会话卡顿）**挂起 70+ 天**未修；多个 PR 处于 stale 关闭边缘。
- **IronClaw**：仅 1 条新 Issue（macOS 本地开发硬阻塞），无任何 PR 或版本活动，需维护者主动介入。

### 6.4 综合健康度雷达

```
            OpenClaw         ●●●●●  95
           Hermes Agent      ●●●●○  82
           OpenHuman         ●●●●○  80
             NanoBot         ●●●○○  68
             QwenPaw         ●●●○○  65
             PicoClaw        ●●○○○  42
             IronClaw        ●●○○○  38
            LobsterAI        ●○○○○  28
```

---

## 七、值得关注的趋势信号

### 7.1 🔥 趋势一：从"云优先"到"自托管 Web3 化"

**信号**：OpenHuman 的 OCI/Docker/headless 全栈改造（#6925 / #6926 / #6927 / #6929 一组）配合 P0 PR #6915 把原生模块从"运行时下载"改为"构建期捆绑"，意味着**分发模型正在从 SaaS 默认转向"可完全离线运行"**。同期 PicoClaw 的 Nginx 子路径请求（#3415）、IronClaw 的本地开发失败（#8122）也印证此趋势。

**对开发者的启示**：未来个人 AI 助手架构设计应假设"无账号、无网络、无 TLS 终止"为合法运行场景。

### 7.2 🔥 趋势二：MCP 正在成为"事实标准"，但工程可靠性滞后

**信号**：8 个项目中 5 个（OpenClaw / LobsterAI / NanoBot / QwenPaw / OpenHuman）在今日同时讨论 MCP 相关问题，涵盖**stdio 进程超时、multimodal 字段校验、命令注入、超时配置、工具发现、prompt cache 失效**等 6+ 个独立工程维度。

**对开发者的启示**：MCP 已是事实协议，但**适配层工程能力远未标准化**。开发者若做 MCP server 集成，需特别关注：stdio 子进程清理、初始化

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

<think>Let me carefully go through all the data provided and generate a comprehensive project daily report for NanoBot.

Let me analyze the data:

**Issues (5 total)**:
1. #5898 [OPEN] - gpt-6 model series through Github Copilot (4 comments) - bug
2. #6002 [OPEN] - reasoningEffort silently drops temperature (1 comment) - bug
3. #5932 [CLOSED] - cron pending actions lost (closed - likely has fix PR #5933)
4. #6008 [OPEN] - sidebar state wiped (bug, webui)
5. #6006 [OPEN] - QQ quoted messages never reach agent (bug)

**Pull Requests (29 total, showing 20 with most comments)**:
- OPEN (待合并, 22): 
  - #6011 - fix Codex image generation responses
  - #5845 - Add Opper as a built-in provider
  - #6001 - Make sendProgress mean what it says
  - #5763 - fix(api): return 400 for invalid multimodal field types
  - #5793 - fix(tools): scope recursive directory ignores
  - #5926 - 避免网页抓取将大小写不同的 URL 误判为重复请求
  - #5965 - 执行 null 参数的类型和枚举校验
  - #5963 - fix(providers): sum compound durations in 'try again in' retry hints
  - #5962 - fix(cron): reject non-positive every_seconds intervals
  - #5927 - 通知评估器拒绝非布尔值
  - #5928 - 邮件正文字符集未知时回退解码
  - #5961 - fix(slack): keep full text of button messages beyond 3000 chars
  - #5931 - 保留 Telegram 命令的换行参数和邮箱内容
  - #5960 - fix(telegram): keep link URLs intact when rendering Markdown to HTML

- CLOSED (已合并/关闭, 7):
  - #5918 - fix(tools): preserve valid JSON Schema union arguments
  - #5995 - fix(agent): clear stale failure state when resuming runner iterations
  - #5997 - fix(linear): reject stale member access updates after reauthorization
  - #5957 - fix(exec): enforce session hard timeouts without polling
  - #5933 - fix(cron): preserve pending actions until store save succeeds (P0!)
  - #5994 - fix(agent): preserve explicitly empty tool registries

Let me write the report in Chinese as the user prompt is in Chinese.

Note: I should pay attention to the date - the report is for 2026-10-03, but the issues/PRs were created on 2026-09-14 to 2026-10-02. This seems like a future-dated report, but I'll go with the dates as provided.

Let me structure this clearly.</think>

# NanoBot 项目日报 · 2026-10-03

> 数据源：`github.com/HKUDS/nanobot`  
> 统计窗口：过去 24 小时（截至 2026-10-03）

---

## 一、今日速览

NanoBot 在过去 24 小时保持**高活跃度**：29 个 PR 更新（22 待合并 / 7 已关闭）、5 个 Issue 更新（4 开 / 1 关）。代码提交与 Bug 修复呈密集流水线特征，单日合并 7 个 PR，涉及 **P0 级别的 cron 数据一致性修复**与多项回归问题。社区侧则集中暴露了多 provider 参数一致性、Web 侧 / 渠道（QQ/Telegram/Slack/Email）边界场景缺陷。无版本发布，迭代处于内部沉淀期。

---

## 二、版本发布

无新版本发布。当前最新为 **v0.3.5**，#5898 反馈该版本对 GitHub Copilot 后端的 GPT-6 系列模型兼容性存在问题，建议维护者下次发版前重点回归验证多 provider 兼容性。

---

## 三、项目进展（今日合并/关闭 PR）

| PR | 标题 | 等级 | 意义 |
|---|---|---|---|
| [#5933](https://github.com/HKUDS/nanobot/pull/5933) | fix(cron): preserve pending actions until store save succeeds | **P0** | 修复 cron 服务在 `_save_store` 失败时丢动作的原子性问题，对应 #5932 已关闭 |
| [#5918](https://github.com/HKUDS/nanobot/pull/5918) | fix(tools): preserve valid JSON Schema union arguments | P2 | 修复 JSON Schema `type` 数组的多类型联合校验，避免 `"00123"` 被误转为 `123` |
| [#5995](https://github.com/HKUDS/nanobot/pull/5995) | fix(agent): clear stale failure state when resuming runner iterations | P2 | 修复"延迟后续消息"路径下成功恢复被报告为失败的回归，避免最终 WS 响应被吞 |
| [#5997](https://github.com/HKUDS/nanobot/pull/5997) | fix(linear): reject stale member access updates after reauthorization | P2 / Security | 修复 Linear 工作区重新授权后旧请求误恢复成员权限的竞态 |
| [#5957](https://github.com/HKUDS/nanobot/pull/5957) | fix(exec): enforce session hard timeouts without polling | P2 | 修复 exec 会话在下次轮询前完成时硬超时未触发、误报成功的关键安全/正确性问题 |
| [#5994](https://github.com/HKUDS/nanobot/pull/5994) | fix(agent): preserve explicitly empty tool registries | P2 | 修复空 `ToolRegistry()` 被默认工具覆盖的回归，使沙箱/策略约束真正生效 |

**整体判断**：今日合入 7 个 PR 全部为 **Bug 修复**或**回归修复**，其中 1 项 P0、5 项 P2，无新功能合并。项目处于**质量夯实**阶段，优先消化存量缺陷，未启动新功能扩张。

---

## 四、社区热点

| 议题 | 链接 | 评论 | 关注度分析 |
|---|---|---|---|
| **#5898** GPT-6 在 GitHub Copilot 后端不可用 | [链接](https://github.com/HKUDS/nanobot/issues/5898) | 4 | 唯一多评论 Issue，反映 v0.3.5 与 OpenAI 新一代模型族的对接空缺；用户期望"按常规配置即用" |
| **#6002** `reasoningEffort` 静默丢弃 `temperature`，波及 38 个 openai_compat provider | [链接](https://github.com/HKUDS/nanobot/issues/6002) | 1 | 影响面极广（46 个 provider 中 38 个命中），属于**架构层规则过宽**问题 |

**诉求分析**：
- 用户希望 provider 配置行为更"所见即所得"，避免一个开关污染所有兼容后端；
- 对 GPT-6、Opper 这类新模型/新供应商的接入有明确诉求（[#5845](https://github.com/HKUDS/nanobot/pull/5845) 已提交 Opper 内置 provider PR）；
- 渠道适配层（QQ/Telegram/Slack/Email）缺陷密度高，反映此层测试矩阵尚需扩充。

---

## 六、Bug 与稳定性

按严重度排列：

### 🔴 严重 / P0
- **[#5932](https://github.com/HKUDS/nanobot/issues/5932) CLOSED → [#5933](https://github.com/HKUDS/nanobot/pull/5933) MERGED**：cron 服务 `_merge_action` 在 store 写失败时丢失已合并动作。✅ **已修复并合并**。

### 🟠 中等 / P2（多 provider / 渠道兼容）
| Issue / PR | 描述 | Fix PR 状态 |
|---|---|---|
| [#5898](https://github.com/HKUDS/nanobot/issues/5898) | v0.3.5 不识别 GitHub Copilot 后端的 GPT-6 系列 | ❌ 待 PR |
| [#6002](https://github.com/HKUDS/nanobot/issues/6002) | `reasoningEffort` 影响 38 个 openai_compat provider 的 temperature | ❌ 待 PR |
| [#6008](https://github.com/HKUDS/nanobot/issues/6008) | WebUI `useSidebarState` 初次拉取失败后静默回退，导致状态丢失 | ❌ 待 PR |
| [#6006](https://github.com/HKUDS/nanobot/issues/6006) | QQ 引用消息未传递给 agent，引用上下文丢失 | ❌ 待 PR |
| [#5763](https://github.com/HKUDS/nanobot/pull/5763) | API 对畸形多模态字段类型未返回 400 | 🟡 PR 待合并 |
| [#5793](https://github.com/HKUDS/nanobot/pull/5793) | 递归 `list_dir` 将 `build`/`dist` 等父目录也纳入忽略 | 🟡 PR 待合并 |
| [#5926](https://github.com/HKUDS/nanobot/pull/5926) | 网页抓取 URL 小写归一化导致大小写敏感 URL 被误判重复 | 🟡 PR 待合并 |
| [#5965](https://github.com/HKUDS/nanobot/pull/5965) | null 参数未严格校验类型/枚举 | 🟡 PR 待合并 |
| [#5963](https://github.com/HKUDS/nanobot/pull/5963) | `try again in 1m30s` 复合时长解析错误 | 🟡 PR 待合并 |
| [#5962](https://github.com/HKUDS/nanobot/pull/5962) | cron 接受非正 `every_seconds` | 🟡 PR 待合并 |
| [#5927](https://github.com/HKUDS/nanobot/pull/5927) | 通知评估器字符串 `"false"` 被当作 True | 🟡 PR 待合并 |
| [#5928](https://github.com/HKUDS/nanobot/pull/5928) | 邮件未知字符集抛 `LookupError` 中断轮询 | 🟡 PR 待合并 |
| [#5961](https://github.com/HKUDS/nanobot/pull/5961) | Slack 带按钮消息超 3000 字后丢失 | 🟡 PR 待合并 |
| [#5931](https://github.com/HKUDS/nanobot/pull/5931) | Telegram 多行 / 邮箱命令参数被截断 | 🟡 PR 待合并 |
| [#5960](https://github.com/HKUDS/nanobot/pull/5960) | Telegram 渲染链接 URL 含特殊字符被破坏 | 🟡 PR 待合并 |

**稳定性结论**：技术债集中在**渠道适配层**与**provider 注册中心**两个老问题区域；多个 P2 PR 已通过测试但尚未合并，存在**积压风险**（详见第八节）。

---

## 七、功能请求与路线图信号

| 请求 | 形式 | 进入下一版本的概率 |
|---|---|---|
| **新增 GPT-6 模型族**（来自 #5898） | Issue | 高 — 兼容 OpenAI 新代际是基本盘，应在下个版本前补齐 |
| **新增 Opper 内置 provider**（#5845） | PR | 中高 — 与 Eden AI / OrcaRouter gateway 同构，merge 门槛低 |
| **修复 `sendProgress` 语义**（[#6001](https://github.com/HKUDS/nanobot/pull/6001) → #6000） | PR | 中 — 让开关名实相符，对默认安装首因体验有改善 |
| **明确 `temperature` 与 `reasoningEffort` 的耦合范围**（#6002） | Issue | 高 — 影响 38 个 provider，结构性调整建议尽快规划 |

**建议路线图动作**：
1. 短期补丁包（hotfix）：合并 [#5933](https://github.com/HKUDS/nanobot/pull/5933) 已落入主干后的累积 P2 修复；
2. 下一 minor 版本：引入 GPT-6 + Opper 拓展 provider 数量至 49+；
3. 架构治理：将 `reasoningEffort` → `temperature` 的影响范围**白名单化**，避免 38 provider 误伤。

---

## 八、用户反馈摘要

- **#5898（4 条评论）**：用户按官方文档配置 GitHub Copilot 鉴权后，GPT-6 调用报 `Mode provider request failed`，且错误信息缺乏可执行的修复指引。**痛点**：文档与实际支持的 provider 范围不一致，缺少 provider 能力矩阵声明。
- **#6002（1 条评论）**：用户基于官方文档同时启用 `reasoningEffort` 与 `temperature`，实际却发现后者被静默忽略，且行为覆盖所有兼容 provider。**痛点**：参数交互缺乏**白名单/黑名单**透明度，且日志无 warning 提示。
- **#6006（QQ 用户）**：在群聊或 C2C 中**引用**一条消息再发送时，agent 无法看到被引用内容。**痛点**：破坏多轮对话上下文的语义基础，对客服/支持类场景影响较大。
- **#6008（WebUI 用户）**：网络抖动导致首次 `sidebar-state` 拉取失败后，用户后续所有侧栏操作（pin/rename/archive）都会被静默回退到默认值。**痛点**：缺乏**用户可见的错误反馈**与**本地暂存**机制。

整体满意度倾向：**功能丰富度认可**，**渠道稳定性与配置透明度**是主要不满来源。

---

## 九、待处理积压（建议维护者优先关注）

> 今日新开 Issue 4 个、新 PR 22 个，但缺少明确分诊与里程碑归属。以下为应优先处理的"老 + 重"组合：

| 风险等级 | Issue / PR | 创建日 | 距今 | 处置建议 |
|---|---|---|---|---|
| 🔴 老 + 影响面广 | [#5763](https://github.com/HKUDS/nanobot/pull/5763) API 多模态字段 400 错误 | 2026-09-14 | ~19 天 | P2 已具备测试，等待 review |
| 🟠 老 + 用户多模型耦合 | [#5845](https://github.com/HKUDS/nanobot/pull/5845) 新增 Opper provider | 2026-09-21 | ~12 天 | 与 Eden AI 同模板，review 成本低 |
| 🟠 老 + 工具可靠性 | [#5793](https://github.com/HKUDS/nanobot/pull/5793) `list_dir` 父目录误忽略 | 2026-09-16 | ~17 天 | 影响文件浏览体验 |
| 🟡 待开 PR | [#5898](https://github.com/HKUDS/nanobot/issues/5898) GPT-6 Copilot 支持 | 2026-09-24 | 9 天 | 需 maintainer 给出修复方向或临时 workaround |
| 🟡 待开 PR | [#6002](https://github.com/HKUDS/nanobot/issues/6002) `reasoningEffort` 误伤 temperature | 2026-10-02 | 1 天 | 需先做架构讨论，再实现 |
| 🟡 待开 PR | [#6006](https://github.com/HKUDS/nanobot/issues/6006) QQ 引用消息丢失 | 2026-10-02 | 1 天 | 需渠道适配层跟进 |
| 🟡 待开 PR | [#6008](https://github.com/HKUDS/nanobot/issues/6008) WebUI 侧栏状态丢失 | 2026-10-02 | 1 天 | 建议前端加本地暂存 |

---

## 总结

NanoBot 今日处于**密集修复 + 渠道适配层补漏**的双线推进节奏。亮点是 **P0 cron 数据一致性**已落地，体现维护者对生产可用性的重视；隐忧是**provider 行为一致性**（#6002）与**渠道边界场景**（QQ/Telegram/Slack/Email/WebUI）的缺陷密度持续偏高，且 P2 PR 合并节奏尚未跟上提交节奏。建议在下一个 minor 版本前：

1. 完成 GPT-6 / Opper 等**模型/供应商扩展**；
2. 完成**今日未合并的 14 个 P2 PR** 的批量评审；
3. 针对 provider 参数交互制定**白名单治理**方案；
4. 为渠道适配层补一份**系统级回归测试矩阵**。

整体健康度评估：**🟢 健康偏改进型** — 高活跃 + 高缺陷密度 + 无版本阻塞，但需警惕 PR 积压导致合入摩擦升高。

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

<think>Let me analyze the data provided for PicoClaw (github.com/sipeed/picoclaw) and generate a comprehensive daily report for 2026-10-03.

Key observations:
1. **Activity Level**: Low - only 3 issues and 3 PRs updated, no new releases
2. **Issues**: 
   - #3281: Open bug about Web UI chat input lag (high activity, 17 comments, 2 likes) - very active
   - #3392: Open bug about CLA assistant signature detection (1 comment)
   - #3415: New feature request for Nginx reverse proxy support (just created today)
3. **PRs**:
   - #3393: Open, adds Cheaper Inference provider
   - #3381: Open, switches OpenAI to responses API
   - #3368: Closed (likely not merged but closed - it's marked [stale])

Let me structure this into the requested sections. The report should be in Chinese as the user wrote in Chinese.

Note: The dates show some inconsistency - "今天" should be 2026-10-03 based on the prompt, but the issues were created/updated on 2026-10-02. I'll treat 2026-10-03 as the report date, with the past 24 hours being roughly 2026-10-02 to 2026-10-03.

Let me check the PR #3368 status more carefully - it's marked [CLOSED] [stale]. Being marked as "stale" and closed typically means it was auto-closed due to inactivity, not necessarily merged. I should note this distinction.

Let me write the report now.</think>

# PicoClaw 项目动态日报

**报告日期：2026-10-03**
**数据周期：过去 24 小时**

---

## 1. 今日速览

PicoClaw 项目今日整体活跃度处于**较低水平**。过去 24 小时仅有 3 条 Issue 与 3 条 PR 发生更新，且**无新版本发布**。社区讨论热度主要集中在一条历史 Bug（#3281，17 条评论、2 个点赞）上，而新提交的 Issue（#3415 Nginx 反向代理）与新 PR 均处于早期阶段。多个 PR 与 Issue 被标记为 `[stale]`，提示维护者可能存在响应积压问题，需关注项目维护节奏。

---

## 2. 版本发布

⚠️ **今日无新版本发布。**

最新稳定版本仍为 Issue #3281 中提及的 **v0.3.1**，自该版本以来积累的 Bug（特别是 Web UI 卡顿问题）尚未通过新版本解决。建议关注维护者是否会在下一版本（如 v0.3.2 或 v0.4.0）中集中修复。

---

## 3. 项目进展

### 已关闭 PR

- **#3368 [CLOSED] [stale] docs: add Parallel Search MCP setup example**（[链接](https://github.com/sipeed/picoclaw/pull/3368)）
  - 该 PR 因被标记为 `[stale]` 而被自动关闭，**并非合并**。
  - 内容是为 CLI 指南添加 Parallel Search MCP 的复制即用配置示例，使 PicoClaw 具备网页搜索与页面提取能力，且无需 Parallel 账号或 API Key。
  - ⚠️ **建议维护者复查**：这是一份纯文档增强 PR，且无需额外凭证即可使用，被标记为 stale 自动关闭可能错失了有价值的功能集成。建议联系作者 @georgeatparallel 重新提交或直接合入。

### 待合并 PR

- **#3393 [OPEN] [stale]** - 新增 Cheaper Inference 作为 OpenAI 兼容 Provider（[链接](https://github.com/sipeed/picoclaw/pull/3393)）
- **#3381 [OPEN] [stale]** - 将 OpenAI Provider 切换至 responses API（[链接](https://github.com/sipeed/picoclaw/pull/3381)）

> 两个 PR 均已被标记 `[stale]`，存在被自动关闭风险，需作者或维护者主动响应以避免流失贡献。

---

## 4. 社区热点

### 🔥 讨论最活跃：Issue #3281

**[BUG] Web UI chat input is very laggy when history has a little bit long**
（[链接](https://github.com/sipeed/picoclaw/issues/3281)）
- **作者**：@xpader | **评论数**：17 | **👍**：2
- **创建时间**：2026-07-21（已存在超过 2 个月）
- **影响范围**：所有通过 Web UI 进行长会话的用户

**诉求分析**：该 Issue 反映出 PicoClaw Web Console 在长对话历史场景下的**前端性能瓶颈**。一旦会话历史增长，输入框就出现明显卡顿，这是影响日常可用性的关键体验问题。17 条评论说明大量用户可能遇到类似情况，且此 Bug 已存在 70 余天仍未解决，可能正在**侵蚀用户对 Web UI 版本的信心**。

### 次活跃：Issue #3392

**[BUG] CLAassistant does not detect signature**
（[链接](https://github.com/sipeed/picoclaw/issues/3392)）
- 关联 PR #3381 一起报告，提示贡献流程存在阻塞问题。

---

## 5. Bug 与稳定性

| 严重程度 | Issue | 描述 | 是否有 Fix PR |
|---------|-------|------|--------------|
| 🔴 **高** | [#3281](https://github.com/sipeed/picoclaw/issues/3281) | Web UI 长会话输入卡顿，影响核心聊天功能 | ❌ 无关联修复 PR |
| 🟡 **中** | [#3392](https://github.com/sipeed/picoclaw/issues/3392) | CLA Assistant 无法检测签名，影响贡献者提交流程 | ❌ 无（需检查 CLA bot 配置） |

**风险提示**：
- #3281 作为长期高互动 Bug，是当前项目**最大的稳定性痛点**。建议维护者优先排查前端渲染/虚拟滚动/输入防抖等机制。
- #3392 属于工程流程问题而非代码 Bug，但会影响新贡献者体验。

---

## 6. 功能请求与路线图信号

### Issue #3415 [Feature] 支持 Nginx 反向代理挂载到子路径

（[链接](https://github.com/sipeed/picoclaw/issues/3415)）
- **作者**：@altman08 | **创建于今日**
- **核心需求**：希望 PicoClaw Web Console 能通过 Nginx 反向代理部署在 `https://example.com/pico/` 子路径下，而非必须占用根路径。
- **挑战**：当前前后端部分路径硬编码为根路径（如 `/api/...`、`/launcher-login`、`/pico/ws`），仅靠 Nginx 配置无法解决。

**路线图可能性分析**：
- 该需求反映了用户希望将 PicoClaw 作为已有网站子服务部署的典型场景，是**企业/团队部署场景中的常见诉求**。
- 建议方向：为 Web Launcher 增加 `--base-path` 启动参数，使前后端统一支持子路径前缀。
- 由于是今日新建且无 PR，**进入下一版本的可能性较低**，但应纳入中期路线图考量。

### 已有相关 PR

- **PR #3393**：新增 Cheaper Inference Provider，扩展 LLM 网关生态 → **建议纳入下一版本**
- **PR #3381**：切换 OpenAI 至 responses API，对齐最新 OpenAI 能力 → **建议纳入下一版本**

---

## 7. 用户反馈摘要

从 Issue #3281 的 17 条评论中可提炼以下用户痛点：

- 😐 **不满**：「Web UI 在稍长的对话历史下输入明显卡顿」—— 长会话是 AI 助手的核心使用场景，此问题影响基础可用性。
- 😟 **不满**：「问题已报告 70 余天仍未解决」—— 用户对响应速度存在疑虑，可能影响贡献意愿。
- 💡 **场景**：用户期望将 PicoClaw 部署到自有域名子路径下（#3415），希望更灵活的部署选项。
- ✅ **期待**：社区贡献者希望扩展更多 LLM Provider（#3393）和支持最新的 OpenAI responses API（#3381），说明项目在模型接入层仍有扩展空间。

---

## 8. 待处理积压

以下 Issue/PR 已存在较长时间且被标记 `[stale]`，**维护者需重点关注**：

| 类型 | 编号 | 标题 | 创建时间 | 风险 |
|------|------|------|---------|------|
| Issue | [#3392](https://github.com/sipeed/picoclaw/issues/3392) | CLAassistant does not detect signature | 2026-09-25 | 阻塞贡献者流程 |
| PR | [#3381](https://github.com/sipeed/picoclaw/pull/3381) | Switch Openai to responses API | 2026-09-17 | 高价值功能，即将关闭 |
| PR | [#3393](https://github.com/sipeed/picoclaw/pull/3393) | Add Cheaper Inference provider | 2026-09-25 | 生态扩展功能 |
| Issue | [#3281](https://github.com/sipeed/picoclaw/issues/3281) | Web UI chat input laggy | 2026-07-21 | 高互动 Bug，已 70+ 天 |

> ⚠️ **重点提醒**：PR #3381 与 PR #3393 被自动关闭的风险较高，若被关闭将造成贡献者流失。建议维护者在 24-48 小时内进行 Code Review 或给出反馈意见。

---

## 📊 项目健康度评估

| 维度 | 评分 | 说明 |
|------|------|------|
| **活跃度** | ⭐⭐☆☆☆ | 24 小时仅 3 Issue / 3 PR 更新，无新版本 |
| **响应速度** | ⭐⭐☆☆☆ | 多条高价值 Issue/PR 超过 30 天未响应 |
| **Bug 修复** | ⭐⭐☆☆☆ | 长期高互动 Bug（#3281）悬而未决 |
| **社区参与** | ⭐⭐⭐☆☆ | 仍有新 Issue 与 PR 提交，但 stale 风险高 |
| **整体健康度** | 🟡 **需关注** | 项目需维护者加强响应，避免贡献者流失 |

---

*本报告由 AI 智能体开源项目分析师自动生成，基于 GitHub 公开数据整理。*

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

<think>Let me analyze the GitHub data provided for IronClaw (github.com/nearai/ironclaw) and generate a project daily report for 2026-10-03.

Key observations from the data:
1. Only 1 new/active issue in the past 24 hours
2. 0 PR updates
3. 0 new releases
4. The single issue is a bug report about `ironclaw serve` failing with credential read error on macOS

The single issue (#8122) is about:
- Environment: macOS Apple Silicon
- IronClaw 1.4.1 (with regression to 1.4.0)
- Profile: local-dev
- Error: "credential read failed: BackendUnavailable" for extension web-app
- Doctor: 8/8 passed (so environment seems fine)

Let me structure the report according to the requested sections. Since there's minimal activity, several sections will be brief or omitted.

I need to be objective, professional, data-driven, and highlight project health. With only 1 issue and 0 PRs/releases, the activity level is very low - I should note this honestly but not negatively. It could indicate project maturity, stability, or possibly reduced maintenance activity.

Let me write this in Chinese as the request is in Chinese.</think>

# IronClaw 项目日报

**日期：2026-10-03**
**仓库：github.com/nearai/ironclaw**

---

## 1. 今日速览

IronClaw 项目今日活跃度处于**低位水平**：过去 24 小时仅产生 1 条新 Issue，PR 与版本发布均为 0。整体属于"无功能推进、无版本迭代"的静默日，反映项目目前处于相对稳定或维护空窗期。唯一的新动态是一条来自 macOS 用户的可重现 Bug 报告（#8122），涉及 `ironclaw serve` 在 local-dev 模式下因凭据后端不可用而启动失败，建议维护者尽快跟进以避免影响 Apple Silicon 用户群体。

---

## 2. 版本发布

无新版本发布。最新公开版本仍为 **1.4.1**（来自 #8122 用户环境信息），上一节点为 1.4.0。

---

## 3. 项目进展

今日无 PR 合并或关闭，**项目代码层面今日无任何推进**。从历史节奏看，1.4.x 系列目前未见进一步提交活动，建议关注后续是否有针对 #8122 类问题的修复提交。

---

## 4. 社区热点

| 排名 | 主题 | 类型 | 互动情况 |
|------|------|------|---------|
| 1 | `ironclaw serve` 在 macOS local-dev 模式下启动失败 | Issue | 0 评论 / 0 👍（新建） |

**链接**：[#8122](https://github.com/nearai/ironclaw/issues/8122)

由于仅 1 条 Issue，暂无显著社区讨论热度。该 Issue 由用户 @rahhbster 创建，关注点集中在 Apple Silicon 平台的兼容性与凭据后端可用性，潜在影响所有在 macOS 上进行本地开发的用户。

---

## 5. Bug 与稳定性

### 🔴 [#8122](https://github.com/nearai/ironclaw/issues/8122) — `ironclaw serve` 启动失败（macOS / local-dev）

| 维度 | 详情 |
|------|------|
| **严重程度** | 🔴 高（阻塞本地开发启动） |
| **影响范围** | macOS Apple Silicon (aarch64-apple-darwin)，local-dev profile |
| **可重现性** | ✅ 100% 重现（1.4.1 官方安装包 + 1.4.0 `cargo install` 均复现） |
| **报错信息** | `credential read failed: BackendUnavailable` for extension `web-app` |
| **诊断状态** | `ironclaw doctor` 8/8 通过，**诊断工具未能识别该问题**，存在检测盲区 |
| **Fix PR** | ❌ 暂无 |

**风险评估**：
- 该 Bug 影响 Apple Silicon 平台的本地开发体验，属于安装即可触发的硬性失败。
- 关键信号：`ironclaw doctor` 全通过但 `serve` 仍失败，说明 doctor 的健康检查覆盖不完整。
- 1.4.0 与 1.4.1 均复现，表明问题自 1.4.0 起持续存在，**可能未被升级说明覆盖**。

**建议**：
1. 维护者优先验证 macOS 上 `web-app` 扩展的 keychain/credential 后端实现；
2. 补充 doctor 对 `web-app` credential backend 的可用性检查；
3. 在 1.4.2 修复并发布 patch 版本。

---

## 6. 功能请求与路线图信号

今日无新功能请求提交。基于现有 Issue（仅 1 条 Bug），**当前缺乏明确的路线图信号输入**。

---

## 7. 用户反馈摘要

- **痛点 #1：macOS 本地开发环境启动不可用**
  - 用户 @rahhbster 在 Apple Silicon 上通过官方安装脚本安装 1.4.1 后，无法启动 `ironclaw serve`，且 `ironclaw doctor` 未给出任何告警，存在"虚假安全感"。
  - 用户已主动降级到 1.4.0 源码构建，仍复现问题，体现较高的自助排查意愿。

- **使用场景**：本地开发（local-dev profile），表明 IronClaw 在开发者本地工作流中的易用性是用户关注重点。

---

## 8. 待处理积压

由于当前仅检索过去 24 小时数据，**今日新增积压项仅 1 条**，即上述 #8122。

**维护者提醒**：
- ⚠️ #8122 为硬阻塞型 Bug，影响平台关键用户群（macOS 开发者），建议在 24-48 小时内首次响应；
- 由于 1.4.x 多个版本均受影响，建议同时检查是否有相关 issue 已存在但未被合并关联，避免重复追踪。

---

## 📊 项目健康度仪表盘

| 指标 | 今日数值 | 评估 |
|------|---------|------|
| Issue 新增 | 1 | 低 |
| PR 流转 | 0 | 静默 |
| 版本发布 | 0 | 无迭代 |
| 关键 Bug 数 | 1（高严重度） | ⚠️ 待处理 |
| 社区活跃度 | 低 | 需观察 |

**总体判断**：项目今日处于维护空窗期，但存在 1 个高严重度未响应 Bug，建议维护者尽快介入，避免问题在 macOS 用户群中扩散。

---
*报告生成时间：2026-10-03 | 数据来源：GitHub REST API*

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

<think>Let me analyze the GitHub data for LobsterAI (github.com/netease-youdao/LobsterAI) and generate a daily report for 2026-10-03.

Key observations:
1. All 6 issues are marked [stale] and were created on 2026-03-26, updated on 2026-10-02 - this suggests they've been open for over 6 months with no recent activity
2. 3 PRs - 1 still open (#908), 2 closed (#909, #911)
3. No new releases
4. All issues have only 1 comment and 0 thumbs up - low engagement
5. The closed PRs (#909, #911) are marked [stale] - meaning they were closed without merging
6. Important security-related PRs:
   - #908: Fix MCP command injection vulnerability (still open)
   - #909: Fix skill security scan bypass (closed/stale - NOT merged)
   - #911: Fix auth token storage security (closed/stale - NOT merged)

Let me structure the report accordingly. The key concerns:
- Low activity overall (all stale items)
- Security PRs being closed without merge is concerning
- Multiple bugs that haven't been addressed in 6+ months

Let me write this in Chinese as the user prompt is in Chinese.</think>

# LobsterAI 项目日报

**报告日期**：2026-10-03
**项目仓库**：[netease-youdao/LobsterAI](https://github.com/netease-youdao/LobsterAI)

---

## 1. 今日速览

LobsterAI 今日整体活跃度较低，**过去 24 小时内无任何新版本发布**，Issues 与 PRs 均为存量项目的更新维护，**所有 6 条 Issues 与 2 条已关闭 PR 均标记为 [stale]**，原始创建时间均集中在 2026-03-26，距今已超过 6 个月未推进。社区参与度极低（所有 Issue 评论数 ≤1，点赞数均为 0）。值得关注的是，**3 条 PR 中有 2 条涉及安全修复的 PR 被关闭而非合并**，而第 3 条同样涉及安全的 PR 仍处于待合并状态，项目维护者响应节奏明显放缓。

---

## 2. 版本发布

⚠️ 今日无新版本发布。

---

## 3. 项目进展

今日共有 **3 条 PR 更新**，其中 **2 条已关闭（stale），1 条仍待合并**：

| PR | 状态 | 主题 | 链接 |
|---|---|---|---|
| [#908](https://github.com/netease-youdao/LobsterAI/pull/908) | 🔓 OPEN | **fix(mcp)**: 校验 stdio command 防命令注入 | [查看](https://github.com/netease-youdao/LobsterAI/pull/908) |
| [#909](https://github.com/netease-youdao/LobsterAI/pull/909) | 🔴 CLOSED (stale) | **fix(security)**: 技能扫描失败需用户确认 | [查看](https://github.com/netease-youdao/LobsterAI/pull/909) |
| [#911](https://github.com/netease-youdao/LobsterAI/pull/911) | 🔴 CLOSED (stale) | **fix(auth)**: 使用 safeStorage 加密 auth token | [查看](https://github.com/netease-youdao/LobsterAI/pull/911) |

**进展评估**：⚠️ **实质性进展有限**。本日报窗口内的 PR 动作以"关闭陈旧 PR"为主，**两条高质量安全相关 PR（#909、#911）未被合并而是被标记 stale 关闭**，社区安全贡献未能落地。仅有 #908 仍待评审，是当前最具落地价值的待合并贡献。

---

## 4. 社区热点

由于今日所有 Issues 均仅有 1 条评论、0 点赞，**社区热度整体处于低位**。相对而言，下述议题反映了用户的实际诉求焦点：

- 🔥 **定时任务调度异常** ([#900](https://github.com/netease-youdao/LobsterAI/issues/900))：用户从"半小时/次"调整为"1小时/次"后，任务被错误转换为"1分钟/次"，属严重功能性 Bug。
- 🔥 **数据安全/丢失风险** ([#906](https://github.com/netease-youdao/LobsterAI/issues/906))：SQLite 写入缺乏异常处理与重试机制，关系到核心数据完整性。
- 🔥 **MCP/网关兼容性问题** ([#898](https://github.com/netease-youdao/LobsterAI/issues/898))：Cherry Studio 更新后导致端口 18789 被占用，与第三方生态的协同稳定性问题。

**诉求分析**：用户最集中的痛点集中在"数据安全 + 调度稳定性 + 第三方兼容"三大方向，缺乏对话题本身的深度讨论（评论数过低）。

---

## 5. Bug 与稳定性

按严重程度排序：

| 级别 | Issue | 问题描述 | 修复 PR |
|---|---|---|---|
| 🔴 P0-数据丢失 | [#906](https://github.com/netease-youdao/LobsterAI/issues/906) | SQLite 写入无异常处理、无重试、无原子性，可能导致用户操作数据直接丢失或数据库损坏 | ❌ 暂无 |
| 🟠 P1-功能异常 | [#900](https://github.com/netease-youdao/LobsterAI/issues/900) | 定时任务间隔从 1h 被错误解析为 1min，调度逻辑存在单位换算 Bug | ❌ 暂无 |
| 🟠 P1-内存泄漏 | [#886](https://github.com/netease-youdao/LobsterAI/issues/886) | `CopyButton` 组件使用裸 `setTimeout` 而非 `useRef`，卸载后 timer 仍触发，可能引起 React warning 与内存泄漏 | ❌ 暂无 |
| 🟡 P2-生态兼容 | [#898](https://github.com/netease-youdao/LobsterAI/issues/898) | Cherry Studio 更新重启后导致 LobsterAI 网关端口冲突 | ❌ 暂无 |
| 🟡 P2-功能缺失 | [#910](https://github.com/netease-youdao/LobsterAI/issues/910) | 飞书机器人定时任务推送报错 `Delivering to Feishu requires target`，IM 集成存在参数传递问题 | ❌ 暂无 |

**稳定性评估**：⚠️ **存在未修复的高危数据丢失风险**（#906），且全部 Bug 均无对应修复 PR 跟进。

---

## 6. 功能请求与路线图信号

| 功能请求 | Issue | 信号强度 | 落地可能性判断 |
|---|---|---|---|
| 记忆导入与导出 | [#914](https://github.com/netease-youdao/LobsterAI/issues/914) | ⭐⭐⭐ | 用户场景明确（换机迁移、记忆分享），属于数据可移植性基础能力，**建议纳入下一版本路线图** |
| MCP stdio 命令校验 | [#908 PR](https://github.com/netease-youdao/LobsterAI/pull/908) | ⭐⭐⭐ | 已有 PR 待合并，**优先级应提升至 P0 安全项** |
| Auth Token 加密存储 | [#911 PR](https://github.com/netease-youdao/LobsterAI/pull/911) | ⭐⭐⭐⭐ | 安全合规必备，**当前被 stale 关闭不合理，建议重新开启评审** |

---

## 7. 用户反馈摘要

由于 Issue 评论数普遍仅为 1 条（含自动回复或简单陈述），**难以提炼深入的用户讨论**，可识别的真实痛点包括：

- 😟 **数据迁移焦虑**（[#914](https://github.com/netease-youdao/LobsterAI/issues/914)）：用户换机时面临记忆丢失，反映出本地化 AI 助手的数据可移植性需求未被满足。
- 😟 **IM 集成不完整**（[#910](https://github.com/netease-youdao/LobsterAI/issues/910)）：飞书机器人对话可用但定时推送失败，表明 IM 渠道的场景覆盖存在断点。
- 😟 **第三方工具协同脆弱**（[#898](https://github.com/netease-youdao/LobsterAI/issues/898)）：端口管理缺乏隔离机制，单点更新即可破坏整个本地网关链路。

**满意度评估**：当前数据不足以判断整体满意度，但**长期未响应状态本身就是负面信号**。

---

## 8. 待处理积压 ⚠️

**以下 Issue/PR 已超过 6 个月（自 2026-03-26 起）未获实质性响应，建议维护者优先关注：**

| 类型 | 编号 | 主题 | 距今 |
|---|---|---|---|
| 🔴 安全 PR | [#908](https://github.com/netease-youdao/LobsterAI/pull/908) | MCP stdio 命令注入漏洞修复 | ~6 个月 |
| 🔴 安全 PR（已误关） | [#909](https://github.com/netease-youdao/LobsterAI/pull/909) | 技能安全扫描绕过漏洞修复 | ~6 个月（被 stale 关闭） |
| 🔴 安全 PR（已误关） | [#911](https://github.com/netease-youdao/LobsterAI/pull/911) | Auth token 明文存储修复 | ~6 个月（被 stale 关闭） |
| 🔴 数据丢失风险 | [#906](https://github.com/netease-youdao/LobsterAI/issues/906) | SQLite 数据丢失风险 | ~6 个月 |
| 🟠 功能 Bug | [#900](https://github.com/netease-youdao/LobsterAI/issues/900) | 定时任务调度单位错误 | ~6 个月 |
| 🟠 内存泄漏 | [#886](https://github.com/netease-youdao/LobsterAI/issues/886) | CopyButton setTimeout 泄漏 | ~6 个月 |
| 🟡 生态兼容 | [#898](https://github.com/netease-youdao/LobsterAI/issues/898) | Cherry Studio 端口冲突 | ~6 个月 |
| 🟡 IM 集成 | [#910](https://github.com/netease-youdao/LobsterAI/issues/910) | 飞书定时任务推送失败 | ~6 个月 |
| 💡 功能请求 | [#914](https://github.com/netease-youdao/LobsterAI/issues/914) | 记忆导入导出 | ~6 个月 |

**健康度预警** 🚨：

- **3 条安全相关 PR 全部未能合并落地**，其中 2 条被直接关闭，社区安全贡献严重受阻。
- **核心数据可靠性存在已知高危风险**（#906）但无修复计划。
- 维护者对社区贡献的响应机制（Stale Bot）可能误伤有效贡献，建议人工复核被关闭的 #909、#911。

---

*数据来源：GitHub REST API · 报告生成时间：2026-10-03*

</details>

<details>
<summary><strong>QwenPaw</strong> — <a href="https://github.com/agentscope-ai/QwenPaw">agentscope-ai/QwenPaw</a></summary>

<think>The user wants me to generate a daily report for QwenPaw project based on GitHub data. Let me analyze the data carefully:

**Overall Stats:**
- Issues: 13 updates (all open, 0 closed)
- PRs: 14 updates (7 open/pending, 7 merged/closed)
- New releases: 0

**Today's Date Context:**
- Report date: 2026-10-03
- Data covers past 24 hours

**Key Issues to analyze:**
1. #7884 - Question about chat history compression (8 comments, from 09-19)
2. #7997 - Feature: Message retraction/editing (8 comments)
3. #6281 - Web console mobile adaptation (6 comments, from 07-20!)
4. #8074 - Bug: OpenAI provider gpt-6 connection test fails
5. #8073 - Bug: V2.2.2.beta4 conversation page error
6. #8077 - Bug: Qoder third-party agent custom models
7. #8078 - Bug: Cross-session messages registered as separate chats
8. #8088 - Bug: Image routed to chat_with_image hangs
9. #8087 - Feature: Lark chatbot info display
10. #8085 - truncation: surface finish_reason="length"
11. #8082 - docs(heartbeat) document
12. #8081 - Feature: view_audio built-in tool
13. #8080 - Feature: Inter-instance Agent communication

**Key PRs:**
OPEN:
- #8090 - fix(providers): GPT token limit parameters (XS)
- #8089 - fix(console): terminal identity over LAN (S)
- #8086 - feat(console): mobile drawer for settings (M)
- #8084 - fix(agents): oversized prompts (L)
- #8079 - fix(app): reload drain timeout (M)
- #8083 - feat(tools): view_audio tool
- #7936 - fix(i18n): translate access-control username

CLOSED (these are interesting - they were recently merged):
- #7347 - fix: rich input caret visible
- #6877 - feat(desktop): window geometry memory
- #7356 - feat(console): chat scroll lock
- #7357 - feat(chat): tool call visibility toggle
- #7359 - feat(providers): per-media inline caps
- #6874 - feat(mcp): tool call timeout
- #7344 - feat(console): game-dev file languages

Now let me analyze:
- The PRs that were closed (merged) all have AaronZ345 as the author - this user has been very active
- The PRs were created in August 2026 but just got merged/closed today (2026-10-02 to 2026-10-03)
- This is a sign of project advancement

**Cross-references between Issues and PRs:**
- #8074 (OpenAI gpt-6 bug) → #8090 (fix PR)
- #8073 (V2.2.2.beta4 conversation page) → #8089 (terminal identity LAN fix)
- #6281 (mobile adaptation) → #8086 (mobile drawer for settings)
- #8076 (referenced in #8079) - reload drain
- #8081 (view_audio feature) → #8083 (view_audio PR)
- #7201 (referenced in #7359) - per-media caps

**Analysis points:**
1. The closed PRs suggest AaronZ345 has had a queue of features/fixes waiting and they've all been processed
2. Multiple bugs are reported and some have immediate PR fixes
3. The view_audio feature is being developed in parallel (issue + PR)
4. There's an interesting long-standing issue #6281 about mobile adaptation that's been waiting since July
5. The cross-instance Agent communication #8080 is an ambitious feature request

Let me now write the report in Chinese as requested, with all required sections.

Severity ranking for bugs:
- #8088 - Image handling hangs and silent cancel - HIGH (user-facing silent failure)
- #8074 - OpenAI provider gpt-6 fails - MEDIUM (specific to gpt-6, but real)
- #8073 - V2.2.2.beta4 conversation page error - HIGH (blocks basic functionality)
- #8077 - Qoder third-party agent custom models - MEDIUM
- #8078 - Cross-session messages split - HIGH (affects UX badly)

For long-standing items:
- #6281 (July 20 - mobile adaptation, 2.5+ months old)
- #7884 (Sept 19 - history compression issue)
- #7997 (Sept 27 - message retraction feature)

Let me write the comprehensive report now.</think>

# QwenPaw 项目日报 · 2026-10-03

---

## 📌 今日速览

QwenPaw 仓库今日呈现**集中清理 + 同步推进**的特征：过去 24 小时共有 13 条 Issue 与 14 条 PR 更新，无新版本发布**。值得关注的两个信号是：(1) 7 条积压 PR 被一次性关闭/合并（其中 6 条由同一贡献者 @AaronZ345 提交），表明维护团队集中处理了 8 月以来的待合并队列，项目活跃度显著上升；(2) 新报 Bug 集中在 **2.2.2.beta4 与第三方 Agent/Provider 兼容**层面，且其中 3 条已有配套 Fix PR 进入评审，说明社区反馈已形成"问题—修复"快速闭环。无重大安全/数据风险事件。

---

## 🚀 版本发布

**无新版本发布**。最近一个版本为 **V2.2.2.beta4**，但今日已有 #8073 等 Beta 用户反馈"会话页无法打开"问题，建议关注 beta 渠道稳定性，下个 stable 版本可能需要回滚或修补相关变更。

---

## 📈 项目进展（合并/关闭 PR）

今日一次性关闭 7 条 PR，包含多项用户长期期待的能力，已实质进入下个版本候选：

| PR | 类型 | 影响面 | 链接 |
|---|---|---|---|
| [#6877](https://github.com/agentscope-ai/QwenPaw/pull/6877) | feat(desktop): 记忆窗口位置与尺寸 | 桌面端用户体验提升 | PR |
| [#7356](https://github.com/agentscope-ai/QwenPaw/pull/7356) | feat(console): 聊天滚动锁定 | 长流式输出场景可读性 | PR |
| [#7357](https://github.com/agentscope-ai/QwenPaw/pull/7357) | feat(chat): 工具调用可见性切换 | 普通聊天场景降噪 | PR |
| [#7359](https://github.com/agentscope-ai/QwenPaw/pull/7359) | feat(providers): 暴露每媒体内联上限 | 修复 #7201，跨 Provider 媒体配额精细化 | PR |
| [#7344](https://github.com/agentscope-ai/QwenPaw/pull/7344) | feat(console): 支持游戏开发文件语言 | Unity/Godot/Shader 语法高亮 | PR |
| [#7347](https://github.com/agentscope-ai/QwenPaw/pull/7347) | fix: 保持富文本输入光标可见 | 修复长多行提示输入体验 | PR |
| [#6874](https://github.com/agentscope-ai/QwenPaw/pull/6874) | feat(mcp): 可配置 MCP 工具调用超时 | MCP 客户端稳定性（默认 300s） | PR |

**整体评估**：今日是 QwenPaw 近一个月以来合并力度最强的一天，集中解决了"桌面体验 / 控制台可读性 / MCP 稳定性 / Provider 媒体配额"四个方向，**项目向前迈出了一大步**。@AaronZ345 是本次合并潮的主要贡献者，建议维护团队关注其后续节奏与代码评审吞吐。

---

## 🔥 社区热点

按评论数与活跃度排序：

1. **[#7884](https://github.com/agentscope-ai/QwenPaw/issues/7884) — 历史消息加载不全（8 评论，自 09-19 起）**
   用户对"压缩后刷新前端，历史信息无法全量加载"强烈不满，情绪表达激烈（"知道这个体验多差么"）。这是**最被吐槽的体验痛点之一**，社区已积累较多讨论但仍无明确修复承诺。

2. **[#7997](https://github.com/agentscope-ai/QwenPaw/issues/7997) — 消息撤回/编辑与工作区回滚（8 评论）**
   希望 WebUI 支持编辑或撤回已发送消息、自动截断历史、可选快照回滚文件改动。这是典型的"上下文安全网"诉求，对开发类 Agent 尤其重要。

3. **[#6281](https://github.com/agentscope-ai/QwenPaw/issues/6281) — Web 控制台适配移动端（6 评论，已挂 76 天）**
   长期未解决，今日由 [#8086](https://github.com/agentscope-ai/QwenPaw/pull/8086)（移动抽屉式设置导航）部分回应。

**诉求分析**：三大热点共同指向"**控制台前端体验与移动适配**"，社区正在用 Issue 投票推动前端优先级提升。

---

## 🐛 Bug 与稳定性

按严重程度排序：

| 严重度 | 编号 | 问题 | 状态 | 链接 |
|---|---|---|---|---|
| 🔴 高 | [#8073](https://github.com/agentscope-ai/QwenPaw/issues/8073) | V2.2.2.beta4 局域网访问导致会话页无法打开 | 已有 fix PR #8089 | Issue / [PR](https://github.com/agentscope-ai/QwenPaw/pull/8089) |
| 🔴 高 | [#8088](https://github.com/agentscope-ai/QwenPaw/issues/8088) | 图片消息被路由到 `chat_with_image` 后陷入 Bash+PIL 切片循环，被静默取消无回复 | 待修复（潜在 agent 编排缺陷） | Issue |
| 🟠 中 | [#8074](https://github.com/agentscope-ai/QwenPaw/issues/8074) | OpenAI provider 对 gpt-6 系列连接测试失败（HTTP 400） | 已有 fix PR #8090 | Issue / [PR](https://github.com/agentscope-ai/QwenPaw/pull/8090) |
| 🟠 中 | [#8078](https://github.com/agentscope-ai/QwenPaw/issues/8078) | 跨会话消息被注册成独立 chat，UI 中分裂 | 待修复 | Issue |
| 🟡 中低 | [#8077](https://github.com/agentscope-ai/QwenPaw/issues/8077) | Qoder 第三方 Agent 自定义模型不可见，上下文计量隐藏 | 待修复（3 个子缺陷） | Issue |

**稳定性观察**：
- #8088 暴露的是**默认 Agent 的视觉模型缺失 → 错误子 Agent 路由**问题，行为风险较高（图片内容可能被无意丢弃，且用户完全无感知），建议作为下一版本优先修复。
- #8073 提示 beta 渠道需加强 LAN/网络环境回归。

---

## 💡 功能请求与路线图信号

| 编号 | 请求 | 配套 PR | 纳入下一版本概率 |
|---|---|---|---|
| [#8081](https://github.com/agentscope-ai/QwenPaw/issues/8081) | 增加 `view_audio` 内置工具补齐多模态（与 `view_image`/`view_video` 对齐） | [#8083](https://github.com/agentscope-ai/QwenPaw/pull/8083) 已提交 | **高**，纯加法能力 |
| [#8087](https://github.com/agentscope-ai/QwenPaw/issues/8087) | 飞书机器人回复底部显示智能体/provider/model 名称 | 无 | 中，参考 OpenClaw |
| [#7997](https://github.com/agentscope-ai/QwenPaw/issues/7997) | 消息撤回/编辑 + 工作区快照回滚 | 无 | 中，需工作区快照支持，工程量较大 |
| [#8080](https://github.com/agentscope-ai/QwenPaw/issues/8080) | **跨实例 Agent 通信（自动发现、任务委托、记忆共享）** | 无 | **中长期**，架构级改造，涉及分布式发现/安全/同步问题，是项目向"群体智能"演进的明确信号 |

**路线图观察**：`view_audio` 与 `view_image`/`view_video` 形态一致，作者同步提交 PR，符合项目内建工具命名习惯，**极有可能在下一个 minor 版本合并**。

---

## 💬 用户反馈摘要

- **历史记录过短**（#7884）：用户情绪最强反馈之一，质疑"为什么聊天记录不能多存点"，反映**长任务场景下上下文保留**已成为日常痛点。
- **Beta 升级回归**（#8073）：从 2.2.1 升到 2.2.2.beta4 后 LAN 访问异常，提示**版本升级路径需要更稳健的迁移说明与回归覆盖**。
- **静默失败**（#8088、#8085）：用户最反感的两种体验——模型跑到一半没下文、回复突然中断没有原因。#8085 提议在 UI 上呈现 `finish_reason="length"`，#8084 PR 也提出对超大 prompt 显式拒绝并显示空回复，方向一致：**让失败可见**。
- **跨设备/多端一致性**（#6281、#8073）：移动端适配与局域网 HTTP 下的终端身份创建（`crypto.randomUUID`）均出现在今日新增/活跃 Issue，说明**移动 + LAN 部署**是真实使用场景而非边缘用例。
- **第三方 Agent 完整性**（#8077）：Qoder 自定义模型不可见、上下文计量隐藏，提示第三方 Agent 接入路径**仍需补齐文档与默认暴露**。

---

## ⏳ 待处理积压（提醒维护者关注）

| 编号 | 类型 | 创建日期 | 挂起时长 | 备注 | 链接 |
|---|---|---|---|---|---|
| [#6281](https://github.com/agentscope-ai/QwenPaw/issues/6281) | 移动端适配 | 2026-07-20 | **76 天** | 已有 #8086 部分覆盖，但 Issue 本身无回复 | Issue |
| [#7884](https://github.com/agentscope-ai/QwenPaw/issues/7884) | 历史消息加载 | 2026-09-19 | 14 天 | 评论活跃、情绪强，无修复承诺 | Issue |
| [#7997](https://github.com/agentscope-ai/QwenPaw/issues/7997) | 消息撤回/编辑 | 2026-09-27 | 6 天 | 8 条评论，社区共识明显，无 PR | Issue |
| [#7936](https://github.com/agentscope-ai/QwenPaw/pull/7936) | i18n 翻译补全 | 2026-09-22 | 11 天 | 首贡献者小 PR，长期 open | PR |

**健康度提示**：移动端适配挂起超过两个月，**是当前最显眼的积压项**；历史消息压缩属于高频反馈主题但缺乏明确响应。建议维护团队在下一版本说明中针对 #6281 / #7884 给出明确表态或时间线。

---

### 📊 今日数据快照

| 指标 | 数值 |
|---|---|
| Issues 更新 | 13（全部 OPEN） |
| PR 更新 | 14（7 OPEN / 7 CLOSED） |
| 新发布 | 0 |
| 已有 fix PR 的 Bug | 2 / 5 |
| 长期积压（>30 天） | 1（#6281） |
| 首贡献者 PR | 2（#8086, #8083, #7936 共 3 条含首贡献标签） |

---

*报告生成时间：2026-10-03 · 数据范围：过去 24 小时 GitHub 公开活动*

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/NousResearch/hermes-agent">NousResearch/hermes-agent</a></summary>

<think>Let me analyze the GitHub data for Hermes Agent and generate a daily report for 2026-10-03.

Key data points:
- Issues: 50 updates (29 new/active, 21 closed)
- PRs: 50 updates (28 pending, 22 merged/closed)
- No new releases

Looking at the issues:
- Highest discussion: #68321 (14 comments) - Desktop assistant messages vanish when switching sessions
- #129993 (10 comments) - Assistant reply rendered twice in transcript
- #123347 (10 comments) - Group Chat worker startup deadlock
- #96731 (9 comments) - browser_exec timeout on Windows
- #131653 (7 comments) - Narrow Review pane layout issue

Closed issues:
- Several P1/P2 bugs closed today including Windows install updates, Kimi User-Agent, macOS PTY leak, WinError 32, Nous free model, profile delete, etc.

PRs:
- Many fix PRs targeting desktop session issues, gateway fixes, i18n fixes
- Notable merged/closed: #119076, #130362, #67317, #120333, #120303, #120301, #120458, #120354, #120146, #120142
- Open: #132025, #128923, #130493, #132019, #130476, #132017, #132020, #132018, #132021, #132022

P1 bugs (high severity):
- #123347 - Group Chat worker startup deadlock
- #131444 - Silent .git runaway on Windows (180GB!)
- #131745 - Gateway exit-127 crash loop after reboot

Recurring issues:
- Session state issues on Desktop
- Windows platform-specific bugs
- i18n / localization problems
- Memory provider config issues
- Profile management problems

Let me write this report in Chinese as requested.</think>

# Hermes Agent 项目日报

**日期：2026-10-03** | **项目：NousResearch/hermes-agent**

---

## 1. 今日速览

Hermes Agent 仓库今日维持高强度的迭代节奏，过去 24 小时共发生 **50 次 Issue 更新（29 条活跃 / 21 条关闭）**与 **50 次 PR 更新（28 条待合并 / 22 条合并/关闭）**，但**无新版本发布**。从议题分布看，Desktop 客户端的会话状态管理与 Windows 平台兼容性仍是当前主线痛点，多个高严重度问题（macOS PTY 句柄泄漏、Windows .git 失控增长、Group Chat 死锁）已陆续关闭或进入修复分支。整体项目处于"密集修 bug、稳步收尾桌面端核心问题"阶段，社区健康度良好，关闭率 42%（21/50），PR 处理周期多为 1-2 周。

---

## 2. 版本发布

⚠️ **本周期无新版本发布**。最新版本仍为 [v0.21.5](https://github.com/NousResearch/hermes-agent)，观察 main 分支已积累多个修复（i18n、gateway、desktop session），近期具备发版条件，建议关注下一个 patch/minor 版本。

---

## 3. 项目进展

今日共 **22 条 PR 关闭/合并**，显著成果包括：

### 关键修复已合入
- **[#119076](https://github.com/NousResearch/hermes-agent/pull/119076)** — 修复 `hermes update` 反复将 `HERMES_HOME` 持久化到 HKCU（User scope）导致的 Windows SSH 远程探测泄漏问题（修复 [Issue #118988](https://github.com/NousResearch/hermes-agent/issues/118988) 的更新器泄漏）
- **[#120303](https://github.com/NousResearch/hermes-agent/pull/120303)** — Desktop 预览 webview 复用同一 guest，避免 URL 切换丢失 JS 状态、cookies、表单数据
- **[#120301](https://github.com/NousResearch/hermes-agent/pull/120301)** — 修复 Desktop resume 失败时未回滚的 transcript-tail paint（解决会话冻结）
- **[#120354](https://github.com/NousResearch/hermes-agent/pull/120354)** — Cron 手动运行改走多路复用路由，对 Telegram 等外部投递更可靠
- **[#120458](https://github.com/NousResearch/hermes-agent/pull/120458)** — `tool_call` scope gate 准确指明缺失的 GUI 表面，错误信息可操作
- **[#120333](https://github.com/NousResearch/hermes-agent/pull/120333)** — Dashboard 插件 API 路由在请求 profile 的 secret 域内运行，修复 `UnscopedSecretError` 静默吞错
- **[#120146](https://github.com/NousResearch/hermes-agent/pull/120146)** — 网关内存管理器在 `/v1/chat/completions` 请求间复用，解决外部 memory provider 在第二轮无法注入的问题
- **[#120142](https://github.com/NousResearch/hermes-agent/pull/120142)** — Profile 轻量克隆时同步复制 memory provider 配置目录
- **[#67317](https://github.com/NousResearch/hermes-agent/pull/67317)** — 修复被拒绝的提交文本被回填到已切换会话 composer 的问题
- **[#130362](https://github.com/NousResearch/hermes-agent/pull/130362)** — Desktop 已安装插件无目录条目时显示卡片封面图

### 进行中的重要分支
- **[#128923](https://github.com/NousResearch/hermes-agent/pull/128923)** — i18n 性能：bundle 目录解析从 gateway 主循环剥离（依赖链：`#128923` → `#128950` → `#130476`）
- **[#130493](https://github.com/NousResearch/hermes-agent/pull/130493)** — 网关恢复存储 sources 到运行时 profile
- **[#132022](https://github.com/NousResearch/hermes-agent/pull/132022)** — **P1**：前台 local 命令使用独立 systemd scope，避免内存密集任务击垮网关

> 📈 整体判断：本期合并重点集中在 **Desktop 会话稳健性 + 跨平台兼容性 + i18n/gateway 内部重构**三大方向，产品成熟度稳步提升。

---

## 4. 社区热点

| 排名 | Issue | 评论 | 👍 | 主题 |
|------|------|------|----|------|
| 1 | [#68321](https://github.com/NousResearch/hermes-agent/issues/68321) | 14 | 0 | Desktop 切换会话返回后 assistant 消息全部消失 |
| 2 | [#129993](https://github.com/NousResearch/hermes-agent/issues/129993) | 10 | 1 | Desktop assistant 回复渲染两次（持久化仅一条） |
| 2 | [#123347](https://github.com/NousResearch/hermes-agent/issues/123347) | 10 | 0 | Group Chat hosted-room worker 启动死锁 |
| 4 | [#96731](https://github.com/NousResearch/hermes-agent/issues/96731) | 9 | 0 | Windows Desktop `browser_exec` 420s 超时 |
| 5 | [#131653](https://github.com/NousResearch/hermes-agent/issues/131653) | 7 | 0 | Review 面板变窄时 scope 标签换行碰撞图标 |
| 6 | [#109148](https://github.com/NousResearch/hermes-agent/issues/109148) | 5 | 0 | Desktop composer 闲置时显示"Queue message"按钮且无响应 |
| 6 | [#30678](https://github.com/NousResearch/hermes-agent/issues/30678) | 5 | 0 | Worker 环境忽略 kanban board 显式 override |

### 热点诉求分析
- **会话/前端渲染一致性**：榜首的 [#68321](https://github.com/NousResearch/hermes-agent/issues/68321)、[#129993](https://github.com/NousResearch/hermes-agent/issues/129993)、[#109148](https://github.com/NousResearch/hermes-agent/issues/109148) 均直指"持久化数据完整但 UI 状态错乱"——这是 Desktop 端最大的信任损耗来源。
- **跨平台稳定性**：[#96731](https://github.com/NousResearch/hermes-agent/issues/96731)、[#131444](https://github.com/NousResearch/hermes-agent/issues/131444)（180 GB .git 失控增长）、[#131745](https://github.com/NousResearch/hermes-agent/issues/131745) 暴露出更新器、launcher、git partial-clone 在 Windows 上存在系统性脆弱点。

---

## 5. Bug 与稳定性

### 🔴 P1（高严重度）
| Issue | 描述 | Fix PR |
|------|------|--------|
| [#131444](https://github.com/NousResearch/hermes-agent/issues/131444) | Windows 更新后 .git 失控，7 小时增长 ~180 GB | 无 |
| [#131745](https://github.com/NousResearch/hermes-agent/issues/131745) | 启动器指向 e2e scratch Python，重启后 gateway 崩溃循环 | 无 |
| [#123347](https://github.com/NousResearch/hermes-agent/issues/123347) | Group Chat hosted-room worker `_DeadlockError` 两次启动失败 | 无 |
| [#132022 (PR)](https://github.com/NousResearch/hermes-agent/pull/132022) | 前台 local 命令可击垮 gateway cgroup | 修复 PR 待合并 |

### 🟠 P2（中高严重度）
| Issue | 描述 | Fix PR |
|------|------|--------|
| [#132006](https://github.com/NousResearch/hermes-agent/issues/132006) | 14 字节 YAML 锚点环导致 locale 展平 `RecursionError` | [#132021](https://github.com/NousResearch/hermes-agent/pull/132021) ✅ |
| [#132016](https://github.com/NousResearch/hermes-agent/issues/132016) | 深度嵌套工具参数 → `RecursionError` | 无 |
| [#132003](https://github.com/NousResearch/hermes-agent/issues/132003) | Feishu 深度嵌套卡片 → 入站规范化崩溃 | 无 |
| [#131993](https://github.com/NousResearch/hermes-agent/issues/131993) | Anthropic 仅列在 fallback 时被误判为"凭据池耗尽" | 无 |
| [#131924](https://github.com/NousResearch/hermes-agent/issues/131924) | Telegram 通知 `display.platforms.telegram.notifications` 被忽略 | 无 |
| [#131270](https://github.com/NousResearch/hermes-agent/issues/131270) | `hermes update` 静默等待卡死的 git fetch | 无 |
| [#131657](https://github.com/NousResearch/hermes-agent/issues/131657) | Desktop Artifacts 会话读取丢失 `connection_id` | 无 |
| [#128915](https://github.com/NousResearch/hermes-agent/issues/128915) | Windows 中国代理下 `hermes update` 失败，错误信息不可操作 | 无 |

### 🟡 P3（一般严重度）
| Issue | 描述 | Fix PR |
|------|------|--------|
| [#131653](https://github.com/NousResearch/hermes-agent/issues/131653) | Review 面板窄宽下标签换行碰撞图标 | 无 |
| [#131978](https://github.com/NousResearch/hermes-agent/issues/131978) | Desktop Artifacts 列表显示 URL-encoded CJK 文件名 | 无 |

### ✅ 今日已关闭的严重 Bug
- [#68321](https://github.com/NousResearch/hermes-agent/issues/68321) 助手消息消失（P2）
- [#96731](https://github.com/NousResearch/hermes-agent/issues/96731) Windows `browser_exec` 超时（P2）
- [#67962](https://github.com/NousResearch/hermes-agent/issues/67962) Desktop 系统消息注入丢失历史（P2）
- [#74739](https://github.com/NousResearch/hermes-agent/issues/74739) Kimi User-Agent 伪装（P2）
- [#128942](https://github.com/NousResearch/hermes-agent/issues/128942) **macOS /dev/ptmx 句柄泄漏致所有终端 app 死亡**（P2，已修复 ✅）
- [#130244](https://github.com/NousResearch/hermes-agent/issues/130244) Profile 删除 WinError 32 残留（P2）
- [#123180](https://github.com/NousResearch/hermes-agent/issues/123180) Nous :free 模型 slug 失效（P2）
- [#74535](https://github.com/NousResearch/hermes-agent/issues/74535) 应用更新失败（P2）
- [#109148](https://github.com/NousResearch/hermes-agent/issues/109148) Queue message 按钮误显示（P3）
- [#30678](https://github.com/NousResearch/hermes-agent/issues/30678) Kanban board override 被环境变量压制（P3）
- [#126589](https://github.com/NousResearch/hermes-agent/issues/126589) 自定义 provider 保存丢失 key_env（P2）

### 🔒 安全相关
- **[#123343](https://github.com/NousResearch/hermes-agent/issues/123343)** — 依赖 `httpx2==2.7.0` / `httpcore2` 触发 6 个 CVE（PYSEC-2026-3844..3849），标记为 duplicate，建议尽快修订依赖钉版。

---

## 6. 功能请求与路线图信号

| Issue | 需求 | 状态 |
|------|------|------|
| [#112028](https://github.com/NousResearch/hermes-agent/issues/112028) | 多端访问同一 session（Desktop + Mobile Dashboard） | OPEN，已是核心用户体验诉求 |
| [#132020 (PR)](https://github.com/NousResearch/hermes-agent/pull/132020) | 在压缩边界裁剪过时 reasoning 文本（DeepSeek/Kimi/Xiaomi） | 待合并，性能 + token 经济性 |
| [#128923 (PR)](https://github.com/NousResearch/hermes-agent/pull/128923) | i18n 目录解析从 gateway 循环剥离 | 主线 i18n 重构 |
| [#130362](https://github.com/NousResearch/hermes-agent/pull/130362) | 已安装插件无目录条目时显示卡片图 | ✅ 已合入 |

**路线图信号**：会话多端协作（[#112028](https://github.com/NousResearch/hermes-agent/issues/112028)）反映出 Desktop 走向"中心化会话、多端消费"的产品方向，值得纳入下个 milestone；[#132020](https://github.com/NousResearch/hermes-agent/pull/132020) 表明项目正在向"支持思考链的 provider"做差异化优化。

---

## 7. 用户反馈摘要

### 痛点
- **信任损耗**："数据完整但 UI 不显示"（[#68321](https://github.com/NousResearch/hermes-agent/issues/68321)、[#129993](https://github.com/NousResearch/hermes-agent/issues/129993)）让用户怀疑数据丢失，是 Desktop 端的**首要不满**。
- **Windows 平台系统性脆弱**：更新器 ([#131444](https://github.com/NousResearch/hermes-agent/issues/131444)、[#131270](https://github.com/NousResearch/hermes-agent/issues/131270)、[#128915](https://github.com/NousResearch/hermes-agent/issues/128915))、launcher ([#131745](https://github.com/NousResearch/hermes-agent/issues/131745))、browser ([#96731](https://github.com/NousResearch/hermes-agent/issues/96731)) 多点告急。
- **macOS 资源泄漏**：PTY 句柄累积导致整个 Mac 无法打开终端 app ([#128942](https://github.com/NousResearch/hermes-agent/issues/128942))，影响范围远超 Hermes 自身。
- **i18n & 安全硬化**：[#132006](https://github.com/NousResearch/hermes-agent/issues/132006)、[#132016](https://github.com/NousResearch/hermes-agent/issues/132016)、[#132003](https://github.com/NousResearch/hermes-agent/issues/132003) 三条 `RecursionError` 提示存在普遍的"递归深度预算缺失"反模式。
- **错误信息不可操作**：[#128915](https://github.com/NousResearch/hermes-agent/issues/128915) 直接抱怨 partial-clone 失败提示 "不可操作"。

### 满意点 / 协作氛围
- 多个修复 PR（[#120303](https://github.com/NousResearch/hermes-agent/pull/120303)、[#120301](https://github.com/NousResearch/hermes-agent/pull/120301)、[#120146](https://github.com/NousResearch/hermes-agent/pull/120146)）的描述非常专业，含根因分析 + 测量数据，反映开发者生态成熟。
- [#132019](https://github.com/NousResearch/hermes-agent/pull/132019)、[#132018](https://github.com/NousResearch/hermes-agent/pull/132018) 明确"cherry-pick 保留原作者署名"，社区协作规范良好。

---

## 8. 待处理积压（提醒维护者关注）

> 下列 Issue 已有显著讨论或涉及核心模块，但尚未分配/无 PR：

| Issue | 创建日期 | 严重度 | 风险类型 | 备注 |
|------|----------|--------|----------|------|
| [#131444](https://github.com/NousResearch/hermes-agent/issues/131444) | 2026-10-02 | **P1** | Windows update | 180 GB .git 失控 |
| [#131745](https://github.com/NousResearch/hermes-agent/issues/131745) | 2026-10-02 | **P1** | launcher | gateway 崩溃循环 |
| [#123347](https://github.com/NousResearch/hermes-agent/issues/123347) | 2026-09-26 | **P1** | gateway | Group Chat worker 死锁（已 7 天未修） |
| [#112028](https://github.com/NousResearch/hermes-agent/issues/112028) | 2026-09-15 | P3 | desktop | 多端 session（社区热议，路线图价值高） |
| [#128915](https://github.com/NousResearch/hermes-agent/issues/128915) | 2026-09-30 | P2 | Windows proxy | 中国代理 update 不可操作 |
| [#131993](https://github.com/NousResearch/hermes-agent/issues/131993) | 2026-10-03 | P2 | provider | Anthropic fallback 误判 |
| [#131657](https://github.com/NousResearch/hermes-agent/issues/131657) | 2026-10-02 | P3 | desktop | Artifacts connection_id 丢失 |
| [#131924](https://

</details>

<details>
<summary><strong>OpenHuman</strong> — <a href="https://github.com/tinyhumansai/openhuman">tinyhumansai/openhuman</a></summary>

<think>Let me analyze the GitHub data for OpenHuman project and generate a daily report for 2026-10-03.

Key data points:
- 9 Issues updated (7 new/active, 2 closed)
- 31 PRs updated (2 pending, 29 merged/closed)
- 0 new releases

Let me organize the information:

**Issues:**
- #6933 [OPEN, P1] - OpenAI-compatible endpoints reject tool_call ids >64 chars
- #6601 [OPEN, P3] - Key-first onboarding (created earlier, updated today)
- #6927 [CLOSED, P2] - Document headless deployment gaps
- #6925 [CLOSED, P1] - Compose read_only root leaves agent projects dir uncreatable
- #6938 [OPEN, P1] - Chat UI model picker doesn't set chat_provider/etc.
- #6934 [OPEN, P1] - agent_registry_update of orchestrator's subagents allowlist
- #6926 [OPEN, P2] - Let headless deployments supply encrypted_file keyring master key
- #6941 [OPEN, P2] - OpenHuman stalls after tool calls
- #6932 [OPEN] - Local offline session triggers expired session error

**PRs (showing 20 with most comments):**
- #6943 [CLOSED, P1] - fix(embed): restore scoped stop hook compatibility
- #6942 [CLOSED, P3] - Add per-turn host tool withholding
- #6931 [CLOSED] - chore(vendor): bump pins, repin modules
- #6937 [CLOSED, P3] - test(agent): update orchestrator iteration-cap snapshot
- #6929 [CLOSED, P3] - docs(cloud-deploy): glibc floor, headless without account, etc.
- #6939 [OPEN, P3] - fix(agent): honour saved subagents.allowlist override
- #6928 [CLOSED, P3] - fix(compose): give agent projects dir writable volume
- #6935 [OPEN, P3] - feat(keyring): let headless deployments supply encrypted_file master key
- #6936 [CLOSED, P2] - test(harness): orchestrator's effective max_iterations is 50
- #6930 [CLOSED, P3] - fix(registry): raise orchestrator turn cap from 15 to 50
- #6907 [CLOSED, P2] - Merge upstream/main and stabilize release CI
- #6924 [CLOSED, P3] - chore(modules): re-pin tinymemory to v1.22.4
- #6923 [CLOSED, P3] - docs(bench): follow-up review fixes for #6918
- #6922 [CLOSED, P3] - chore(deps): bump vendor/tinybus
- #6918 [CLOSED, P3] - fix(inference): prompt-cache breakpoints for Claude models
- #6921 [CLOSED, P3] - perf(mcp): stop seeding GitBook docs as MCP server
- #6920 [CLOSED, P2] - feat(composio): disabled mode and OPENHUMAN_COMPOSIO_MODE override
- #6915 [CLOSED, P0] - feat(modules): bundle pinned native modules at build time
- #6919 [CLOSED, P3] - feat(bench): green for top results, yellow for runners-up
- #6916 [CLOSED, P2] - fix(agent_chat): stream model calls when no progress sink attached

Let me identify patterns:
1. Major theme today: Headless deployment / Docker / OCI support - #6927, #6925, #6926, #6929, #6928, #6935
2. Vendor pin updates: #6931, #6924, #6922, #6915 (all by @senamakel)
3. Bench/inference improvements: #6918, #6919, #6916, #6923
4. Agent/orchestrator: #6930, #6936, #6937, #6934, #6939

The project appears very active with a lot of merge activity. Most issues are related to deployment scenarios and a few functional bugs.

Let me write the report now.</think>

# OpenHuman 项目日报 · 2026-10-03

## 1. 今日速览

OpenHuman 项目今日保持高度活跃的开发节奏：24 小时内共合并/关闭 29 个 PR，新增/活跃 7 个 Issue，整体 Issue 处理闭环率达到 22%（9 条中 2 条已关）。提交内容高度聚焦于**无账号无界面部署（headless deployment）**、**vendor 与依赖更新**、以及**Bench 评测基础设施优化**三个主线。无版本发布，但底层 fix 密度较大，预示下一次发版前可能进入一次较大规模的稳定化整合期。项目整体健康度良好，长期 Issue #6601（无登录 onboarding）已获得维护者关注。

## 2. 版本发布

无新版本发布。

## 3. 项目进展

今日共 29 个 PR 进入终态，以下为对项目具有结构性影响的重要合并：

**核心稳定性**
- [#6930](https://github.com/tinyhumansai/openhuman/pull/6930) — 将 orchestrator 的 `max_iterations` 由 15 提升至 50，解决多文件任务中"读 repo 时已到上限，导致一轮无编辑结束"的问题。
- [#6916](https://github.com/tinyhumansai/openhuman/pull/6916) — 修复 `agent_chat` 在无 progress sink 时回退到 unary 调用导致 TTFT 等于完整延迟的严重体验问题，bench smoke-2 的 TTFT 指标得到改善。
- [#6918](https://github.com/tinyhumansai/openhuman/pull/6918) — 修正托管推理对 Anthropic Claude 模型 0% prompt-cache 命中问题（需使用 `cache_control` 块而非 `prompt_cache_key`），同时梳理 harness prompt。
- [#6915](https://github.com/tinyhumansai/openhuman/pull/6915) — **P0** ：native modules 从"运行时下载"改为"构建期捆绑 + 摘要校验"，覆盖所有平台（含 Windows installer），显著提升分发可靠性。

**Headless / 容器化部署**（与 Issue #6925、#6926、#6927 形成完整闭环）
- [#6928](https://github.com/tinyhumansai/openhuman/pull/6928) — `docker-compose.yml` 在 `read_only: true` 下挂载 `openhuman-projects` 命名卷，修复 agent 无法创建项目目录的告警。
- [#6929](https://github.com/tinyhumansai/openhuman/pull/6929) — 文档补全：glibc 最低版本、无 TinyHumans 账号的 BYOK 路径、容器密钥环配置、OCI 部署示例。
- [#6920](https://github.com/tinyhumansai/openhuman/pull/6920) — 新增 Composio `disabled` 模式及 `OPENHUMAN_COMPOSIO_MODE` 环境变量覆写，bench 中使用以避免 hosted round-trip。

**生态与 Embedding**
- [#6943](https://github.com/tinyhumansai/openhuman/pull/6943) — 恢复 v0.64.10 迁移后 OpenCompany 所需的 embedder API（task-local stop-hook、budget stop hook、tool-group defaults re-export）。
- [#6942](https://github.com/tinyhumansai/openhuman/pull/6942) — `HostTurnTools` 新增 per-turn 临时工具隐藏能力，主机无需重构建。

**Bench / 评测**
- [#6919](https://github.com/tinyhumansai/openhuman/pull/6919) — 排名表视觉化：最佳值绿色全标、次佳值黄色。
- [#6923](https://github.com/tinyhumansai/openhuman/pull/6923) — bench 文档 CodeRabbit 后续修正。
- [#6936](https://github.com/tinyhumansai/openhuman/pull/6936) / [#6937](https://github.com/tinyhumansai/openhuman/pull/6937) — 配套 #6930 的测试快照更新。

**Vendor 与依赖**
- [#6931](https://github.com/tinyhumansai/openhuman/pull/6931) — 顶层 vendor 升至 TinyRuntime v0.2.11 等最新上游提交。
- [#6922](https://github.com/tinyhumansai/openhuman/pull/6922) — `vendor/tinybus` 升级（tinybus#34），加快 bundle 模块加载。
- [#6924](https://github.com/tinyhumansai/openhuman/pull/6924) — `tinymemory` 重定位至 v1.22.4，消除 `Memory::store` 提前返回带来的 1.5s 卡顿。
- [#6921](https://github.com/tinyhumansai/openhuman/pull/6921) — MCP host 不再预注册 gitbooks MCP server，减少首轮 MCP 桥接工具冗余。

**CI / 发布**
- [#6907](https://github.com/tinyhumansai/openhuman/pull/6907) — 合并 upstream/main 并稳定 release CI（Full Playwright 制品 cache key 扩展、迁移 fixture 轮询修复）。

整体推进评估：项目在"部署可达性"、"agent 回合稳定性"、"性能与缓存利用"三方面均取得实质性推进，并向一个**更易自托管**、**更易离线运行**的形态演进。

## 4. 社区热点

按评论数与优先级排序：

- **#6933**（[链接](https://github.com/tinyhumansai/openhuman/issues/6933)，P1，2 评论）—— harness 自动生成的 `tool_call_id` 长度（69 字符）超过 OCI Generative AI 等 OpenAI 兼容端点的 64 字符上限，导致 400 错误。诉求集中在"实现层一致性"：用户期望 harness 在 mint id 时即考虑目标 provider 的协议约束。
- **#6601**（[链接](https://github.com/tinyhumansai/openhuman/issues/6601)，P3，2 评论）—— "Key-first onboarding"：首屏即提供 TinyHumans 一键授权或 BYOK，避免 JWT 注册墙。这与 #6932（本地离线凭证过期报错）、#6929（无账号 BYOK 文档）共同构成用户对**去注册化体验**的一致呼声。
- **#6938**（[链接](https://github.com/tinyhumansai/openhuman/issues/6938)，P1，1 评论）—— Chat UI 模型选择器未真正设置 `chat_provider`，全部请求静默回退到托管后端并 401。诉求直指"用户看到的选项必须生效"，是 UI 与路由解耦的典型 bug。

## 5. Bug 与稳定性

按严重程度排列：

| 级别 | Issue | 描述 | 是否有 fix PR |
|---|---|---|---|
| **P1** | [#6938](https://github.com/tinyhumansai/openhuman/issues/6938) | Chat UI 模型选择器不生效，所有回合 401 | ❌ 暂无 |
| **P1** | [#6933](https://github.com/tinyhumansai/openhuman/issues/6933) | `tool_call_id` 长度超 64 字符被 OCI 兼容端点拒绝 | ❌ 暂无 |
| **P1** | [#6934](https://github.com/tinyhumansai/openhuman/issues/6934) | `agent_registry_update` 修改的 `subagents.allowlist` 不传播至 `spawn_async_subagent` 枚举 | ✅ [#6939](https://github.com/tinyhumansai/openhuman/pull/6939)（OPEN，待合并） |
| **P1** | [#6925](https://github.com/tinyhumansai/openhuman/issues/6925) | Compose `read_only` 根下 agent 项目目录不可创建 | ✅ [#6928](https://github.com/tinyhumansai/openhuman/pull/6928)（已合并） |
| **P2** | [#6941](https://github.com/tinyhumansai/openhuman/issues/6941) | OpenHuman 在工具调用完成后停滞（来自 Discord 报告，缺诊断信息） | ❌ 暂无，且缺少复现/构建信息 |
| **P2** | [#6926](https://github.com/tinyhumansai/openhuman/issues/6926) | Headless 部署无法为 `encrypted_file` keyring 注入主密钥 | ✅ [#6935](https://github.com/tinyhumansai/openhuman/pull/6935)（OPEN，待合并） |
| **未分级** | [#6932](https://github.com/tinyhumansai/openhuman/issues/6932) | 本地离线 profile 聊天消息立即报"session expired" | ❌ 暂无 |

维护者应优先关注 P1 未修复项（#6938、#6933），因其直接破坏本地/兼容端点的实际可用性。

## 6. 功能请求与路线图信号

- **#6601 Key-first onboarding**（[链接](https://github.com/tinyhumansai/openhuman/issues/6601)）—— 用户希望取消注册墙、提供"粘贴 key 即用"的入口。短期内可借助 #6929 的 BYOK 文档缓解，但根本性的 setup wizard 需要单独的工程投入；这是产品向"低门槛试用"演进的关键信号。
- **#6926 / #6935 容器化密钥环**（[链接](https://github.com/tinyhumansai/openhuman/pull/6935)）—— PR 已开且针对具体痛点，若近期合并，将显著降低生产部署门槛，**很可能进入下一个稳定版本**。
- **#6920 Composio disabled 模式**（[链接](https://github.com/tinyhumansai/openhuman/pull/6920)）—— 已合并，为合规/离线场景提供"零网络接入"路径，反映用户对**集成可控性**的需求上升。
- **#6942 per-turn 工具隐藏**（[链接](https://github.com/tinyhumansai/openhuman/pull/6942)）—— 已合并，为嵌入式 host 提供更细粒度工具控制，是 SDK 演化的清晰方向。
- **#6918 Claude 缓存修复**（[链接](https://github.com/tinyhumansai/openhuman/pull/6918)）—— 已合并，反映对**主流商业模型缓存利用率**的工程关注。

## 7. 用户反馈摘要

- **部署痛点集中爆发**：#6925、#6926、#6927、#6929 一组 Issue/PR 几乎全部围绕 OCI / Docker / 容器化 headless 部署，且由同一作者（@fede-kamel）系统化提交，说明存在真实生产级自托管需求。
- **本地离线体验割裂**：#6932（凭证过期）、#6938（模型选择器不生效）共同显示 OpenHuman 在"无 TinyHumans 账号"路径上的 UX 一致性不足；用户在一个分支做了选择，却被静默路由到另一条路径。
- **协议兼容细节被忽视**：#6933 表明 harness 的 id 生成策略未与下游 provider 协议约束对齐，用户在自定义 OpenAI 兼容端点时遭遇"无法控制且无报错信息"的 400。
- **社区信号未充分使用**：#6941 由 Discord 自动采集 bot（@tinysweeper[bot]）生成，但缺少构建号与复现步骤，提示**外部反馈通道到工程团队的转化效率有待提升**。

## 8. 待处理积压

- **#6601**（创建于 2026-09-24，至今日 9 天未合并）：Key-first onboarding 提议虽 P3 但战略意义大，且已有 2 条评论，建议维护者明确路线图回应。
- **#6934 / PR #6939**（P1 fix 已开 OPEN）：唯一解决自定义 sub-agent 注册的关键修复，建议优先审阅合并。
- **#6926 / PR #6935**（P2 fix 已开 OPEN）：容器密钥环主密钥注入能力，与 #6929 文档配套，建议一并合入。
- **#6941**（Discord 转入，缺信息）：需维护者主动联系报告者补充构建号与复现步骤，否则将持续处于"无法诊断"状态。
- **#6932 / #6938**（P1，但无 fix PR）：影响本地离线用户的核心路径，需在下一个迭代窗口内至少给出临时 workaround。

---

**总体判断**：项目处于"高频小步快跑 + 少量 P0 结构性重构"的健康状态，今日最值得关注的窗口是 HEAD 系列（headless/docker/OCI）相关 PR 是否能在下一稳定版本中完整闭合，以兑现"开箱即可自托管"的承诺。

</details>

---
*本日报由 [Big Model Radar](https://github.com/96loveslife/big_model_radar) 自动生成。*
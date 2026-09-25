# OpenClaw 生态日报 2026-09-25

> Issues: 500 | PRs: 500 | 覆盖项目: 8 个 | 生成时间: 2026-09-25 04:21 UTC

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

<think>The user wants me to generate a daily report for the OpenClaw project based on GitHub data. Let me analyze the data carefully and create a comprehensive report in Chinese.

Let me organize the data:

**Overview:**
- Issues in 24h: 500 total (377 new/active, 123 closed)
- PRs in 24h: 500 total (379 pending, 121 merged/closed)
- New releases: 0

**Key Issues to highlight (top by comments):**
1. #155753 - Model-catalog expiry/rebuild loop pins one CPU core (P2, 23 comments)
2. #142585 - 2026.9.3 Doctor regression (P0, 17 comments)
3. #97616 - Leaked unreaped child processes (P1, 16 comments)
4. #137332 - Mixed terminal requester-settle batches retry forever (P1, 16 comments)
5. #98435 - MCP loopback transport doesn't auto-reconnect (P1, 14 comments)
6. #148963 - Session listings scan archived metadata (P2, 13 comments)
7. #157531 - 2026.9.7 Fixes Tracker (P2, 11 comments)
8. #10687 - Dynamic model discovery feature (P3, 10 comments)
9. #50291 - Plugin Hooks missing trace context (P2, 10 comments)
10. #153067 - [CLOSED] Gateway re-copies state DB every 5s (P2, 10 comments)

**Closed Issues notable:**
- #153067 - State DB re-copy (closed)
- #110346 - Local media allowlist inconsistency (closed)
- #74594 - Skill Capability Manifests RFC (closed)
- #43564 - ACP Session Skill Context Injection (closed)
- #99253 - Safety: fabricated user turn (closed)
- #79281 - ACP thread-binding preset (closed)
- #157234 - Update recovery with active DB lease (closed)

**Key PRs (top by comments):**
1. #157615 - fix(doctor): preserve current sessions after restored-index replay
2. #154208 - feat(agentsapi): add OpenClaw tool support
3. #146230 - fix(macos): forward MCP app sandbox over remote SSH
4. #132955 - fix: recreate agent database after explicit close
5. #157717 - fix(ui): plugin sidebar selection falls out of sync
6. #142556 - fix: keep sandbox transports out of Linux OOM adjustment
7. #137878 - fix(cli): include derived Scope column in approvals get
8. #157339 - fix: plugin reloads lose tool results and strand subagent settlement
9. #157620 - fix(release): serialize plugin SDK install and render phases
10. #157878 - fix(subagents): settle requester wakes whose task owner is another runtime

**Themes I see:**
- 2026.9.5 and 2026.9.6 release issues dominating (regressions in catalog, gateway startup, plugin activation)
- Update/installation mechanism problems (global install swap failures)
- Memory and resource pressure issues
- MCP transport and reconnect issues
- Subagent lifecycle issues
- Plugin activation/lifecycle issues

**Severity breakdown:**
- P0 issues: #142585, #156112, #152804, #151467, #155859, #157234, #137177, #152275, #148307, #117742
- P1 issues: #97616, #137332, #98435, #145309, #118885, #157067, #129314, #141474, #135117, #118839, #121661, #157617
- Many P2s

**Fix PR availability:**
- #137332 has fix PR #157878
- #157234 closed (recovery failure fixed)
- #98435 - MCP loopback - has close issues
- #145309 - linked-pr-open
- #153067 - closed
- #118885 - has close issues
- #135117 - has linked-pr-open
- #157067 - linked-pr-open

Now let me write a professional report. I'll focus on what's most useful.

Let me also identify backlog items:
- #97616 - Created 2026-06-29, still open, leaked child processes - 16 comments
- #10687 - Created 2026-02-06, dynamic model discovery - 10 comments
- #81960 - Created 2026-05-14, multiple providers onboarding - 7 comments
- #9912 - Created 2026-02-05, maxTurns feature - 6 comments
- #50291 - Created 2026-03-19, plugin trace context - 10 comments
- #84242 - Created 2026-05-19, memory-lancedb tool exposure - 6 comments

These are long-standing open issues.

Let me write the report now in Chinese, structured as requested.</think>

# OpenClaw 项目动态日报

**日期：2026-09-25** | **数据范围：过去 24 小时**

---

## 1. 今日速览

OpenClaw 仓库在过去 24 小时维持高强度开发与社区互动节奏，共更新 **500 条 Issue**（377 新开/活跃 + 123 关闭）与 **500 条 PR**（379 待合并 + 121 合并/关闭）。本期工作高度集中于 **2026.9.5 / 2026.9.6 版本引入的多类回归修复**——覆盖 Gateway 启动墙钟、模型目录重建、插件热重载、subagent settle 闭环、Doctor 历史会话恢复等领域，修复类 PR 居多。社区端讨论聚焦于**更新机制（`openclaw update` 在 global install swap 阶段失败）、模型目录重建 CPU 烧核、僵尸子进程泄露、子代理唤醒卡死**等稳定类问题。**未发布任何新版本**，版本线处于"热修复 + 2026.9.7 Fixes Tracker（#157531）规划中"状态。整体项目健康度：⚠️ **中等偏紧**——合并率高但 P0/P1 阻塞项仍未清零，回归面需要持续止血。

---

## 2. 版本发布

**本期无新版本发布。**

当前主版本线维持在 **2026.9.6**（eb377ac，对应 Issue #157617 现场），社区已建立 **2026.9.7 Fixes Tracker**（[#157531](https://github.com/openclaw/openclaw/issues/157531)），由 @RomneyDa 维护，追踪 1,058 个主分支 commit 的审计 ledger。

---

## 3. 项目进展

今日合并/关闭的重要 PR（按对项目稳定性影响排序）：

| PR | 标题 | 影响 |
|---|---|---|
| [#157615](https://github.com/openclaw/openclaw/pull/157615) | fix(doctor): preserve current sessions after restored-index replay | 🟢 Doctor 修复 legacy 会话导入后 restored-index 覆盖当前会话的回归 |
| [#157339](https://github.com/openclaw/openclaw/pull/157339) | fix: plugin reloads lose tool results and strand subagent settlement | 🟢 解决插件热重载导致工具结果丢失、子代理 settle 卡死的双重缺陷 |
| [#157878](https://github.com/openclaw/openclaw/pull/157878) | fix(subagents): settle requester wakes whose task owner is another runtime | 🟢 关闭 [#137332](https://github.com/openclaw/openclaw/issues/137332)，终结 requester-settle 跨 runtime 永久重试 |
| [#157620](https://github.com/openclaw/openclaw/pull/157620) | fix(release): serialize plugin SDK install and render phases | 🟢 修复 Full Validation 中 Plugin SDK 渲染与 sibling 安装竞态导致的非确定性失败 |
| [#157836](https://github.com/openclaw/openclaw/pull/157836) | fix(gateway): correct reload receipts and authority test setup | 🟢 修复 plugin reload 重报完成（双计 work consumer）的 late-receipt 问题 |
| [#157695](https://github.com/openclaw/openclaw/pull/157695) | fix(qa): serialize source-backed startup proofs | 🟢 QA-Lab 中 mcp-gateway-connect-startup-retry / voice-call-cli-rpc-agent-tool 测试串行化 |
| [#157663](https://github.com/openclaw/openclaw/pull/157663) | docs: update maturity scorecard | 🟢 发布成熟度文档与 QA 证据源同步 |

**项目推进评估**：今日修复集中在 **Doctor 数据迁移、Subagent 生命周期、Gateway 资源/启动链、QA 串行化** 四个维度；新增能力类 PR（如 [#154208](https://github.com/openclaw/openclaw/pull/154208) Agents API Gateway tool 支持、 [#154229](https://github.com/openclaw/openclaw/pull/154229) Agents API 附件传输）已具备截图/端到端证据，正等待维护者审视。整体上项目在 **2026.9.7 修复版的核心阻塞项上稳步推进**。

---

## 4. 社区热点

按评论数与社区关注度排序的热门议题：

**🔴 最受关注（≥15 评论）**

- [#155753](https://github.com/openclaw/openclaw/issues/155753) — **Model-catalog 重建循环固定单核 CPU**：每 60s TTL 触发 `readFullModelCatalog()` → `refreshExpiredCatalog()` 重入，造成 worker 持续满负载（23 评论）。由 [#154276](https://github.com/openclaw/openclaw/issues/154276) / [#153422](https://github.com/openclaw/openclaw/issues/153422) 衍生。
- [#142585](https://github.com/openclaw/openclaw/issues/142585) — **2026.9.3 Doctor 拒绝合法 legacy workspace 迁移**：P0 升级阻断项（17 评论）。
- [#97616](https://github.com/openclaw/openclaw/issues/97616) — **Hook/Tool 子进程未收割 → 僵尸累积 + 运行时退化**：6/29 创建至今仍 OPEN（16 评论，👍1）。
- [#137332](https://github.com/openclaw/openclaw/issues/137332) — **Mixed terminal requester-settle batches 永久重试**：等待 ownership 检查后唤醒未投递，completion 路径对所有 pending 子代理一视同仁（16 评论）。已有 [#157878](https://github.com/openclaw/openclaw/pull/157878) 修复 PR。

**🟠 高度活跃（10–14 评论）**

- [#98435](https://github.com/openclaw/openclaw/issues/98435) — **MCP loopback 传输在 gateway 重启后不自动重连**，`recovered=1` 误导（14 评论，👍1）
- [#148963](https://github.com/openclaw/openclaw/issues/148963) — 会话列表扫描并保留请求页外的归档元数据（13 评论）
- [#157531](https://github.com/openclaw/openclaw/issues/157531) — **2026.9.7 Fixes Tracker**（11 评论），社区修复进展入口
- [#10687](https://github.com/openclaw/openclaw/issues/10687) — **动态模型发现**（OpenRouter 等快速迭代目录）长期诉求（2/6 创建，10 评论，👍4）
- [#50291](https://github.com/openclaw/openclaw/issues/50291) — Plugin Hooks 缺少 trace context（messageId/runId/parentSpanId），影响可观测性（3/19 创建，10 评论）

**诉求分析**：社区痛点高度收敛为三个方向：
1. **更新/升级链路脆弱**（多个 P0 报告 `openclaw update` 在 global install swap 失败，但直接 npm install 成功）
2. **资源型回归**（CPU 烧核、内存飙升、SQLite 重建/复制放大）
3. **生命周期一致性**（subagent/插件 reload/MCP transport 的状态机对故障恢复不健壮）

---

## 5. Bug 与稳定性

按严重程度排序的关键 Bug（标注 fix PR 可用性）：

### 🔴 P0 — 升级/发布阻断

| Issue | 标题 | Fix PR 状态 |
|---|---|---|
| [#156112](https://github.com/openclaw/openclaw/issues/156112) | `openclaw update` 在 global install swap 失败，直接安装同版本成功 | ❌ 无 |
| [#152804](https://github.com/openclaw/openclaw/issues/152804) | 2026.9.5 回归：minimax-portal 模型目录丢失，'Unknown model' | ❌ 无 |
| [#151467](https://github.com/openclaw/openclaw/issues/151467) | 自升级死锁 + 回滚 cron 失败（v6.33→v9.4 自动回退） | ❌ 无 |
| [#155859](https://github.com/openclaw/openclaw/issues/155859) | 2026.9.5 Gateway 启动墙钟随插件数线性扩张，120s 超 budget | ❌ 无 |
| [#157234](https://github.com/openclaw/openclaw/issues/157234) | Update recovery fails with active agent database lease | ✅ 已 CLOSED |
| [#152275](https://github.com/openclaw/openclaw/issues/152275) | Post-commit plugin activation 失败 → 模型目录与 reply dispatch 全部停摆 | ❌ 无 |
| [#148307](https://github.com/openclaw/openclaw/issues/148307) | 464MB agent DB + 0 freelist → session reclamation 超 5s busy timeout → DB locked | ❌ 无 |
| [#117742](https://github.com/openclaw/openclaw/issues/117742) | 多文件 apply_patch 失败时已执行的破坏性 hunks 不回滚 | ❌ 无 |
| [#137177](https://github.com/openclaw/openclaw/issues/137177) | 内置 `@wecom/wecom-openclaw-plugin@2026.7.2` 安装失败 | ❌ 无 |
| [#142585](https://github.com/openclaw/openclaw/issues/142585) | 2026.9.3 Doctor 拒绝合法 legacy workspace | ❌ 无 |

### 🟠 P1 — 功能/会话状态风险

| Issue | 标题 | Fix PR 状态 |
|---|---|---|
| [#137332](https://github.com/openclaw/openclaw/issues/137332) | requester-settle batches 永久重试 | ✅ [#157878](https://github.com/openclaw/openclaw/pull/157878) |
| [#98435](https://github.com/openclaw/openclaw/issues/98435) | MCP loopback transport 重启后不重连 | ❌ 无 |
| [#145309](https://github.com/openclaw/openclaw/issues/145309) | claude-cli backend 忽略 `CLAUDE_CONFIG_DIR` | 🔗 linked-pr-open |
| [#157067](https://github.com/openclaw/openclaw/issues/157067) | Windows isolated cron 传递 uncloneable Proxy 给 worker | 🔗 linked-pr-open |
| [#157339](https://github.com/openclaw/openclaw/issues/157339) | 插件重载丢工具结果，子代理永久重试 | ✅ PR 已开 |
| [#157617](https://github.com/openclaw/openclaw/issues/157617) | 2026.9.6 session writer 队列等数分钟，频繁 integrity/maintenance | ❌ 无（needs-info） |
| [#118885](https://github.com/openclaw/openclaw/issues/118885) | 启动期 SQLite 冗余完整性检查 | 🔗 source-repro |
| [#135117](https://github.com/openclaw/openclaw/issues/135117) | 2026.8.1 heartbeat 重复投递 Discord 已送达异步结果 | 🔗 linked-pr-open |
| [#141474](https://github.com/openclaw/openclaw/issues/141474) | Collector sessions_yield strands agents_wait，claude-cli outputSchema 静默失效 | ❌ 无 |
| [#97616](https://github.com/openclaw/openclaw/issues/97616) | 子进程未收割 → 僵尸累积 | ❌ 无（3 个月未关闭） |

### 🟡 P2 — 性能/一致性

- [#155753](https://github.com/openclaw/openclaw/issues/155753) Catalog 重建 CPU 烧核（23 评论）
- [#148963](https://github.com/openclaw/openclaw/issues/148963) 列表扫描超页元数据
- [#156191](https://github.com/openclaw/openclaw/issues/156191) 2026.9.5 多 agent catalog 内存压力
- [#153067](https://github.com/openclaw/openclaw/issues/153067) Gateway 稳态每 5s 全量复制 state DB（约 5.9 TB/天）— ✅ 已 CLOSED

---

## 6. 功能请求与路线图信号

**已具备 PR 的功能请求（高优先级，下个版本可能纳入）**

- **Agents API Gateway tool 支持** [#154208](https://github.com/openclaw/openclaw/pull/154208)：补齐 hosted agent 调用 OpenClaw Gateway 工具的能力（含 tokenjuice/codex extensions），已有 telegram 端到端证据。状态：等待作者跟进 ⏳。
- **Agents API 附件传输** [#154229](https://github.com/openclaw/openclaw/pull/154229)：将已接纳附件上传到 hosted Linux workspace 并把完成文件回传用户。
- **macOS 远程 SSH 转发 MCP App sandbox** [#146230](https://github.com/openclaw/openclaw/pull/146230)：解决 widget iframe 在 remote-over-SSH 下加载失败。
- **Linux sandbox transports 移出 OOM-score 调整** [#142556](https://github.com/openclaw/openclaw/pull/142556)：避免本地 sandbox backend transport 被错误打分。
- **Plugin 部署专属 supervisor 指引** [#157679](https://github.com/openclaw/openclaw/pull/157679)：外部管理部署可注册 supervisor 名称与安装命令。

**长期呼声但尚无 PR 的需求**

- [多 provider/model onboarding (#81960)](https://github.com/openclaw/openclaw/issues/81960) — 当前 onboard 仅支持单 provider 配置，社区 5/14 提出至今未跟进。
- [maxTurns/maxToolCalls 配置项 (#9912)](https://github.com/openclaw/openclaw/issues/9912) — 防止模型无限迭代（2/5 提出至今）。
- [动态模型发现 (#10687)](https://github.com/openclaw/openclaw/issues/10687) — 4 个 👍，针对 OpenRouter 等快速变化目录（2/6 提出至今，10 评论）。

---

## 7. 用户反馈摘要

**用户真实痛点（直接摘自 Issue 摘要）**

1. **升级路径不确定**（[#156112](https://github.com/openclaw/openclaw/issues/156112)、[#152804](https://github.com/openclaw/openclaw/issues/152804)）：用户描述 `openclaw update` 失败而直接

---

## 横向生态对比

<think>The user wants me to generate a horizontal comparative analysis report based on the daily reports from 7 open source projects: OpenClaw, NanoBot, PicoClaw, IronClaw, LobsterAI, QwenPaw, Hermes Agent, and OpenHuman. Let me carefully analyze each project's situation and create a comprehensive comparative analysis.

Let me think through each section:

1. **生态全景** - Need 3-5 sentences covering overall landscape
2. **各项目活跃度对比** - Table format with metrics
3. **OpenClaw 在生态中的定位** - Compare against peers
4. **共同关注的技术方向** - Cross-cutting themes
5. **差异化定位分析** - Differentiators
6. **社区热度与成熟度** - Layering analysis
7. **值得关注的趋势信号** - Industry trends

Let me gather the data points first:

**OpenClaw**:
- 500 Issues (377 new/active + 123 closed)
- 500 PRs (379 pending + 121 merged/closed)
- 0 releases
- Status: heavy regression fixing period, P0/P1 unresolved

**NanoBot**:
- 14 Issues (8 new/active + 6 closed)
- 37 PRs (13 pending + 24 merged/closed)
- 0 releases
- Status: stable iteration, 1 high-severity bug unfixed (#5849 auto-compaction deadlock)

**PicoClaw**:
- 2 Issues (1 new/active + 1 closed)
- 8 PRs (all 8 pending, 0 merged/closed)
- 0 releases
- Status: low activity, dependabot-driven, 3 stale PRs

**IronClaw**:
- 1 Issue (1 new/active + 0 closed)
- 1 PR (1 pending + 0 merged/closed)
- 1 release (ironclaw-v1.4.1-rc.2)
- Status: low activity but RC pipeline healthy

**LobsterAI**:
- 18 Issues (2 new/active + 16 closed stale)
- 13 PRs (7 pending + 6 merged/closed)
- 0 releases
- Status: maintenance mode with security disclosures

**QwenPaw**:
- 19 Issues (15 new/active + 4 closed)
- 17 PRs (15 pending + 2 merged/closed)
- 0 releases
- Status: high activity, beta regression fixing, expanding features

**Hermes Agent**:
- 50 Issues (21 new/active + 29 closed)
- 50 PRs (43 pending + 7 merged/closed)
- 1 release (v0.21.5)
- Status: high iteration, desktop-focused

**OpenHuman**:
- 23 Issues (12 active + 11 closed)
- 49 PRs (6 pending + 43 merged/closed)
- 0 releases
- Status: high-velocity fix day, regression from TinyAgents refactor

Let me organize these into a clear comparison report.

For positioning:
- OpenClaw: heaviest project by volume, mature, multi-surface (desktop/mobile/tui/etc), focused on update/release infrastructure
- NanoBot: medium-sized, multi-channel agent
- PicoClaw: small/mobile-focused, similar to OpenClaw (likely a fork/related)
- IronClaw: NEAR AI's product, model quality benchmarking focus
- LobsterAI: Chinese (NetEase Youdao) desktop assistant with OpenClaw integration
- QwenPaw: Aliyun's agent (with Realtime Voice Chat focus)
- Hermes Agent: Nous Research's agent, desktop-centric
- OpenHuman: tinyhumansai's project, modular architecture with TinyBus

Common themes:
1. Session state consistency across frontends
2. Provider/model compatibility (especially with new OpenAI Responses API)
3. Desktop UI regressions (Console, sidebar redesign)
4. Auto-compaction/context management
5. Update/installation mechanism failures
6. Subagent lifecycle issues
7. Tool approval flows
8. Security concerns (file access, SSRF)
9. Multi-tenant/team collaboration
10. Realtime Voice/STT capabilities

Differentiation:
- OpenClaw: comprehensive feature set, broad platform support, gateway architecture
- NanoBot: multi-channel (Discord/Telegram/Matrix/Feishu), web UI focus
- PicoClaw: mobile TUI emphasis, smaller scope
- IronClaw: enterprise/quality focus, benchmarks
- LobsterAI: desktop with OpenClaw integration
- QwenPaw: hub multi-tenant, voice capabilities
- Hermes Agent: desktop-heavy, Windows focus
- OpenHuman: modular plugin architecture, billing transparency

Let me draft this now.</think>

# 个人 AI 助手 / 自主智能体开源生态 · 横向对比日报
**日期：2026-09-25** | **样本项目：8 个**

---

## 1. 生态全景

今日观测样本中，**OpenClaw、OpenHuman、Hermes Agent、QwenPaw 四家处于高强度迭代状态**（PR/Issue 流量均 ≥17），构成生态第一梯队；NanoBot、LobsterAI 处于稳健打磨期；IronClaw 与 PicoClaw 活跃度较低但维护节奏健康。整个生态普遍处于"**修复 2026 年 8–9 月集中发布引入的回归**"的共同阶段，问题域高度收敛——**桌面端 UI 回归、会话状态跨端一致性、Provider 兼容性、上下文管理失控、Subagent/Tool 生命周期**成为五项共识挑战。**安全披露的批量关闭与未公开修复**（LobsterAI 5 条高危 Issue 关闭无对应 PR）是值得警惕的生态级风险信号。

---

## 2. 各项目活跃度对比

| 项目 | 24h Issue 更新 | 24h PR 更新 | 24h 新发布 | 健康度 | 当前阶段 |
|------|---------------|-------------|-----------|--------|----------|
| **OpenClaw** | 500（377+123） | 500（379+121） | 0 | 🟡 中等偏紧 | 2026.9.7 修复版冲刺 |
| **OpenHuman** | 23（12+11） | 49（6+43） | 0 | 🟢 良好（修复日） | TinyAgents 升级回归清理 |
| **Hermes Agent** | 50（21+29） | 50（43+7） | **1（v0.21.5）** | 🟢 良好 | Desktop 重构 + Patch 发布 |
| **QwenPaw** | 19（15+4） | 17（15+2） | 0 | 🟡 偏紧 | 2.2.2-beta 系列打磨 |
| **LobsterAI** | 18（2+16） | 13（7+6） | 0 | 🟡 安全债风险 | OpenClaw 集成与 UI 重构 |
| **NanoBot** | 14（8+6） | 37（13+24） | 0 | 🟡 中等（1 个高危） | WebUI 打磨 + 通道稳定性 |
| **IronClaw** | 1（1+0） | 1（1+0） | **1（v1.4.1-rc.2）** | 🟢 平稳 | RC 阶段，准备 GA |
| **PicoClaw** | 2（1+1） | 8（8+0） | 0 | 🟡 偏低 | Dependabot 驱动 + 待审积压 |

**核心观察**：
- **OpenClaw 以 500/500 的双 500 数据体量明显领跑**，是其他项目的 5–10 倍级，反映其作为参照基线的"重量级"地位。
- **OpenHuman 关闭率 87.8%（43/49）**，是今日合并效率最高的项目，呈现"清理债务型"维护日特征。
- **IronClaw 与 PicoClaw 处于低活跃状态**，但 IronClaw 的发布管线正常运转（每日 RC），PicoClaw 则有积压风险。
- **OpenClaw 与 PicoClaw 的 0 发布** 表明二者处于"修整窗口"，与发布管线的常态化项目（IronClaw、Hermes Agent）形成对比。

---

## 3. OpenClaw 在生态中的定位

### 优势对比

| 维度 | OpenClaw | NanoBot | PicoClaw | Hermes Agent | OpenHuman |
|------|----------|---------|----------|--------------|-----------|
| **生态影响力** | ⭐⭐⭐⭐⭐（基准） | ⭐⭐⭐ | ⭐⭐ | ⭐⭐⭐⭐ | ⭐⭐⭐ |
| **多端覆盖** | Desktop / TUI / Mobile / Web 全端 | Discord / Telegram / Matrix / Feishu / WebUI | Mobile TUI 专属 | Desktop + TUI + Dashboard | Desktop |
| **功能广度** | Gateway + Agent + Plugin + MCP | Agent + Channel + Provider | Provider + Channel | Desktop + TUI | Modular (TinyBus) |
| **更新机制** | 内置 `openclaw update`（脆弱） | 标准包管理 | 依赖 Dependabot | `hermes update`（有 bug） | 内置模块 pin |
| **社区规模** | Issue 总量数倍于其他 | 中等 | 小 | 较大 | 中等 |
| **企业可用性** | 高（多 Provider / 审计 / 凭据） | 中 | 低 | 中 | 中 |

### 技术路线差异

- **OpenClaw**：走"**全栈一体化 + Gateway 中枢**"路线，强调 Gateway 作为统一入口、Plugin SDK 作为扩展、MCP 作为协议桥梁，是生态中**唯一明确具备 Gateway 抽象**的项目。
- **NanoBot / Hermes Agent**：以"**多通道前端 + Agent 内核**"为骨架，OpenClaw 通过 Gateway 与多前端解耦，NanoBot 则直接绑定 Discord/Telegram。
- **PicoClaw**：定位"**移动端 TUI 优先**"，是 OpenClaw 的轻量化分支或同类，依赖项选择更精简。
- **QwenPaw**：走"**多租户 Hub + 实时语音**"路线，Hub 战略与 OpenClaw 的"本地优先"形成互补。
- **IronClaw**：走"**模型质量评估 + 灰度发布**"路线，今日的 #8111 "Daily failure taxonomy" 是其最鲜明的差异化能力。
- **LobsterAI**：走"**桌面端集成 OpenClaw**"路线，是生态中**唯一明确"消费 OpenClaw"**的项目。
- **OpenHuman**：走"**模块化子系统 + 计费透明**"路线，TinyBus 模块宿主是其架构核心。

### 社区规模对比

OpenClaw 24h Issue 量是 NanoBot 的 36 倍、PicoClaw 的 250 倍、Hermes Agent 的 10 倍。从 Issue 评论密度看，OpenClaw 单 Issue 评论数普遍低于 Hermes Agent（Hermes 最高 12，OpenClaw 最高 23），说明 **OpenClaw 更倾向于"广而平"的社区分布，Hermes 更倾向于"窄而深"的争议集中**。

---

## 4. 共同关注的技术方向

下列方向在多个项目中同时浮现，构成生态级共识需求：

### 🔥 方向一：跨端会话状态一致性（SSOT）

| 项目 | 具体诉求 |
|------|----------|
| **OpenClaw** | [#137332](https://github.com/openclaw/openclaw/issues/137332) requester-settle batches 永久重试、 [#148963](https://github.com/openclaw/openclaw/issues/148963) 会话列表扫描归档元数据 |
| **Hermes Agent** | [#42962](https://github.com/NousResearch/hermes-agent/issues/42962) Desktop 会话从 Telegram 更新后不刷新、 [#94778](https://github.com/NousResearch/hermes-agent/issues/94778) 共享后端中断轮次标记误读、 [#106217](https://github.com/NousResearch/hermes-agent/issues/106217) 桌面端恢复 TUI 会话死锁 |

**共识**：当用户在 Desktop、TUI、IM 多个前端共享同一会话时，写入身份与会话所有权管理是普遍痛点。

### 🔥 方向二：Provider 兼容性与 OpenAI Responses API 迁移

| 项目 | 具体诉求 |
|------|----------|
| **NanoBot** | [#5896](https://github.com/HKUDS/nanobot/issues/5896) `muse-spark` 需要 Responses API、 [#5906](https://github.com/HKUDS/nanobot/pull/5906) OpenCode Responses PR |
| **PicoClaw** | [#3381](https://github.com/sipeed/picoclaw/pull/3381) Switch OpenAI to responses API（stale） |
| **QwenPaw** | [#7500](https://github.com/agentscope-ai/QwenPaw/pull/7500) OpenAI extra_headers 转发（provider 兼容关键） |
| **OpenHuman** | [#6504](https://github.com/tinyhumansai/openhuman/issues/6504) OpenAI 传输丢弃 429 `Retry-After` |
| **NanoBot** | [#5898](https://github.com/HKUDS/nanobot/issues/5898) GPT-6 Copilot 不支持 |

**共识**：OpenAI Responses API 是行业新范式，生态内全面迁移正当时；同时 Retry-After / Extra Headers 等 provider 抽象层的鲁棒性成为共同短板。

### 🔥 方向三：桌面端 UI 回归（高频）

| 项目 | 具体诉求 |
|------|----------|
| **OpenClaw** | [#157717](https://github.com/openclaw/openclaw/pull/157717) fix(ui): plugin sidebar selection falls out of sync |
| **QwenPaw** | [#7968](https://github.com/agentscope-ai/QwenPaw/issues/7968) v2.2.2b3 Console 侧栏重构回归 |
| **LobsterAI** | [#2760](https://github.com/netease-youdao/LobsterAI/pull/2760) / [#2762](https://github.com/netease-youdao/LobsterAI/pull/2762) UI 配色与布局统一 |
| **Hermes Agent** | [#105498](https://github.com/NousResearch/hermes-agent/issues/105498) Ctrl+W 误关闭、 [#101318](https://github.com/NousResearch/hermes-agent/issues/101318) macOS composer 误触拖拽 |

**共识**：Desktop / Console 是用户日常高频接触面，回归容忍度极低；UI 重构需要"原子化 PR + 灰度发布 + 快速回滚"机制。

### 🔥 方向四：上下文管理与自动压缩

| 项目 | 具体诉求 |
|------|----------|
| **NanoBot** | [#5849](https://github.com/HKUDS/nanobot/issues/5849) 自动压缩死锁（高危） |
| **QwenPaw** | [#7628](https://github.com/agentscope-ai/QwenPaw/issues/7628) 压缩超预算、 [#7733](https://github.com/agentscope-ai/QwenPaw/issues/7733) Agent 自治式上下文管理、 [#7836](https://github.com/agentscope-ai/QwenPaw/issues/7836) 滚动淘汰丢 user turn |
| **OpenClaw** | [#155753](https://github.com/openclaw/openclaw/issues/155753) Catalog 重建 CPU 烧核、 [#148307](https://github.com/openclaw/openclaw/issues/148307) 464MB agent DB 阻塞 |
| **Hermes Agent** | [#88988](https://github.com/NousResearch/hermes-agent/issues/88988) `/compress` 误报 120s 超时 |

**共识**：上下文管理从"纯 token 阈值"向"agent 自治 + 用户可控"演进，是各项目共同的产品方向。

### 🔥 方向五：更新 / 安装机制脆弱

| 项目 | 具体诉求 |
|------|----------|
| **OpenClaw** | [#156112](https://github.com/openclaw/openclaw/issues/156112) global install swap 失败、 [#151467](https://github.com/openclaw/openclaw/issues/151467) 自升级死锁 |
| **Hermes Agent** | [#44580](https://github.com/NousResearch/hermes-agent/issues/44580) update 假装成功 |

**共识**：内置 update 命令与 npm/pip 包管理冲突、构建失败未诚实反馈是生态普遍问题。

### 🔥 方向六：Subagent / Tool 生命周期

| 项目 | 具体诉求 |
|------|----------|
| **OpenClaw** | [#137332](https://github.com/openclaw/openclaw/issues/137332) requester-settle 永久重试、 [#157339](https://github.com/openclaw/openclaw/pull/157339) 插件重载丢工具结果 |
| **QwenPaw** | [#7534](https://github.com/agentscope-ai/QwenPaw/issues/7534) 飞书 session 卡死、 [#7856](https://github.com/agentscope-ai/QwenPaw/issues/7856) qwenpaw-pet 破坏工具审批 |
| **OpenHuman** | [#6389](https://github.com/tinyhumansai/openhuman/issues/6389) 编排器最终合成丢失、 [#6376](https://github.com/tinyhumansai/openhuman/issues/6376) hosted 缺 specialist 工具面 |
| **NanoBot** | [#5429](https://github.com/HKUDS/nanobot/issues/5429) AgentLoop 吞异常 |

**共识**：Subagent / Tool 的异常可见性、跨运行时所有权、工具审批链路是稳定性的核心挑战。

---

## 5. 差异化定位分析

| 项目 | 核心定位 | 目标用户 | 关键技术架构特征 |
|------|----------|----------|------------------|
| **OpenClaw** | 全栈 AI 助手平台（Agent + Gateway + Plugin + MCP） | 企业 / 高级开发者 / 自托管用户 | Gateway 中枢、Plugin SDK、MCP transport |
| **NanoBot** | 多通道对话 Agent（Discord / TG / Matrix / Feishu） | 社区运营 / 频道机器人使用者 | 通道适配器、WebUI 多语言 |
| **PicoClaw** | 移动 TUI 优先的轻量化 Agent | 移动端开发者 / 命令行爱好者 | 精简 Provider、Mobile TUI 优化 |
| **IronClaw** | 模型质量评估 + 灰度发布的 Agent Runtime | AI Lab / 模型研究人员 | Daily failure taxonomy、benchmark harness |
| **LobsterAI** | 桌面端集成 OpenClaw 的中文 AI 助手 | 中文桌面用户 / 编程工具

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

<think>Let me analyze the GitHub data for NanoBot project and generate a comprehensive daily report for 2026-09-25.

Key observations from the data:

**Overall Activity:**
- 14 Issues updated (8 new/active, 6 closed)
- 37 PRs updated (13 pending merge, 24 merged/closed)
- No new releases

**Issues Analysis:**
- Closed: #5366 (WebUI localization), #5429 (AgentLoop background tasks), #5524 (WebUI notification sound), #5881 (workspace issue), #5274 (Matrix replies), #5806 (Discord reaction tasks)
- New/Open: #5896 (OpenAI Responses API), #5849 (Auto-compaction deadlock - serious!), #5910 (composer draft persistence), #5909 (message queue), #5908 (tokens/sec indicator), #5903 (Feishu checkpoint leak), #5900 (silent compaction/WeChat logs), #5898 (GPT-6 support)

**PR Analysis:**
- Many closed PRs: #5864, #1387, #5367, #5724, #5905, #5292, #5807, #5431, #5904
- Open PRs: #5911 (Telegram tilde fences), #5838 (session routing), #5907 (test consolidation), #5906 (OpenCode Responses), #5257 (sustained-goal), #5834 (reasoning_text events), #5260 (memory runtime files), #5845 (Opper provider), #5780 (silent compaction), #5902 (TG topic rename), #5865 (context window preservation)

Let me structure this into a comprehensive Chinese report.</think>

# NanoBot 项目日报 · 2026-09-25

> 数据来源：GitHub HKUDS/nanobot ｜ 报告周期：过去 24 小时

---

## 一、今日速览

NanoBot 今日维持**较高活跃度**，24 小时内共有 14 条 Issue 更新、37 条 PR 更新，PR 流转量明显高于 Issue 流转量，呈现"代码先行、社区跟进"的特征。Issues 关闭率 42.8%（6/14），PR 关闭率 64.9%（24/37），合并节奏紧凑。本轮合入的 PR 主要集中在 WebUI 体验优化、Discord/Telegram 通道稳定性与背景任务异常处理，**整体健康度良好**。值得关注的负面信号是 Issue #5849 报告的「自动压缩死锁」问题——一旦历史超过输入预算，自动压缩通道可能永远无法恢复，属于需高度警惕的稳定性隐患。

---

## 二、版本发布

**今日无新版本发布。** 上一版本仍为 v0.3.5（参见 [#5881](https://github.com/HKUDS/nanobot/issues/5881) 中用户反馈的 0.3.5 配置目录校验变更）。

---

## 三、项目进展（重要合入/关闭的 PR）

今日有大量面向生产质量与用户体验的 PR 完成合并，NanoBot 在以下方向均有实质推进：

### 1. 通道稳定性
- **[#5431](https://github.com/HKUDS/nanobot/pull/5431) `fix(agent): report background task failures`**（合并）— 重写 `AgentLoop.schedule_background` 的 `set.discard` 回调，引入生命周期感知的完成处理器，正确记录失败任务的 traceback，关联修复 [#5429](https://github.com/HKUDS/nanobot/issues/5429)。
- **[#5807](https://github.com/HKUDS/nanobot/pull/5807) `fix(discord): clean up reaction state on stop`**（合并）— 跟踪所有延迟的工作 emoji 任务，重写 Discord 通道关闭时的清理逻辑，关联修复 [#5806](https://github.com/HKUDS/nanobot/issues/5806)。
- **[#5292](https://github.com/HKUDS/nanobot/pull/5292) `fix(matrix): reply to the room-level user event that started the turn`**（合并）— Matrix 通道回复现在正确携带 `m.in_reply_to` 引用，关闭 [#5274](https://github.com/HKUDS/nanobot/issues/5274)。
- **[#5724](https://github.com/HKUDS/nanobot/pull/5724) `fix(agent): retrieve background task exceptions and log unexpected failures`**（合并）— 与 #5431 互补，进一步加强后台任务的异常可见性。

### 2. WebUI 体验与性能
- **[#5367](https://github.com/HKUDS/nanobot/pull/5367) `feat(webui): localize agent activity`**（合并）— 为 10 种 WebUI 语言完成 Agent 活动标签本地化，支持界面语言切换时实时刷新，关闭 [#5366](https://github.com/HKUDS/nanobot/issues/5366)。
- **[#5904](https://github.com/HKUDS/nanobot/pull/5904) `perf(webui): improve chat refresh and mobile interactions`**（合并）— 使用有界的标签本地缓存恢复上次认证的会话，并在引导阶段使用安静布局占位符。
- **[#5905](https://github.com/HKUDS/nanobot/pull/5905) `fix(webui): keep global page URLs clean and defer chat mounting`**（合并）— 修复设置/应用等全局页 URL 序列化选中的会话导致的多余网络请求。

### 3. Provider 与协议扩展
- **[#1387](https://github.com/HKUDS/nanobot/pull/1387) `feat: add Anthropic extended thinking support alongside reasoning_effort`**（关闭）— 支持 Anthropic `thinking` 双模式，旧 PR 长期未合并后被关闭，可能已通过其他途径落地或被回退。
- **[#5864](https://github.com/HKUDS/nanobot/pull/5864) `fix(discord): cancel delayed reaction tasks on runtime reset`**（标记 conflict，仍 OPEN）— 与 #5807 思路一致，需要解决冲突后合并。

### 4. 测试体系
- **[#5907](https://github.com/HKUDS/nanobot/pull/5907) `test: consolidate redundant coverage across the test suite`**（OPEN）— 跨 34 个文件整合 Python 与 WebUI 测试，净减少 703 行；保持全部 171 个原始输入和断言。

**整体评价**：今日合入内容属于"清理债 + 体验打磨"型，没有颠覆性新特性，但显著提升系统的可观测性（背景任务异常）、多语言一致性（WebUI 本地化）和多通道可靠性，**项目整体向前推进了一小步，方向正确**。

---

## 四、社区热点

今日 Issues 与 PR 的评论密度普遍偏低（多数为 0–1 条），**讨论最活跃**的话题集中在以下几个：

| 话题 | 入口 | 关注度 | 背景诉求 |
|---|---|---|---|
| WebUI 本地化 | [#5366](https://github.com/HKUDS/nanobot/issues/5366) / [#5367](https://github.com/HKUDS/nanobot/pull/5367) | 高（已合入） | 社区希望 Agent 活动文案不再局限于英文，体现国际化成熟度 |
| 后台任务异常被吞掉 | [#5429](https://github.com/HKUDS/nanobot/issues/5429) | 高（已合入） | 异步任务失败时只有 asyncio 的通用 "Task exception was never retrieved" 警告，难以排障 |
| 自动压缩死锁 | [#5849](https://github.com/HKUDS/nanobot/issues/5849) | **极高（开放）** | 一旦历史超过输入预算，系统可能进入"自动压缩路径本身需要更大预算"的不归路 |
| WebUI 通知铃声 | [#5524](https://github.com/HKUDS/nanobot/issues/5524) | 中（已关闭） | 用户长时间任务期间无明显完成提示，需要主动检查 |
| GPT-6 GitHub Copilot 支持 | [#5898](https://github.com/HKUDS/nanobot/issues/5898) | 中（新开） | v0.3.5 似乎未识别最新的 OpenAI 6 系列模型 |

**诉求分析**：社区当前诉求主要分三类——**可观测性**（错误被吞）、**大上下文可靠性**（压缩、fallback）、**WebUI 体验细节**（通知、token 速度、消息队列、composer 草稿持久化）。其中"自动压缩死锁"问题已被指出但**暂未发现修复 PR**，需关注。

---

## 五、Bug 与稳定性

### 🔴 高严重度（生产风险）

| Issue | 描述 | 状态 | Fix |
|---|---|---|---|
| [#5849](https://github.com/HKUDS/nanobot/issues/5849) | 自动压缩死锁：`summarize_transcript` 发送整个会话历史+系统提示给摘要模型，无 token 预算保护；一旦超出输入预算，压缩永远无法恢复 | OPEN（高优先级） | ⚠️ **暂无修复 PR** |

### 🟠 中严重度（功能不可用）

| Issue | 描述 | 状态 | Fix |
|---|---|---|---|
| [#5898](https://github.com/HKUDS/nanobot/issues/5898) | v0.3.5 不支持通过 GitHub Copilot 使用 OpenAI 6 系列模型 | OPEN | ⚠️ 暂无 |
| [#5896](https://github.com/HKUDS/nanobot/issues/5896) | `muse-spark` contributor 模型在 OpenCode Go 上 500 错误，需要 Responses API | OPEN | [#5906](https://github.com/HKUDS/nanobot/pull/5906) OPEN，待合并 |
| [#5881](https://github.com/HKUDS/nanobot/issues/5881) | 0.3.5 强制 `_nanobot` 必须在 workspace 外，多实例用户困扰 | **已关闭** | 已修复 |
| [#5806](https://github.com/HKUDS/nanobot/issues/5806) | Discord 关闭后残留 reaction 任务 | **已关闭** | [#5807](https://github.com/HKUDS/nanobot/pull/5807) 合并；[#5864](https://github.com/HKUDS/nanobot/pull/5864) 重复方案待 conflict 解决 |
| [#5903](https://github.com/HKUDS/nanobot/issues/5903) | Feishu 通道将内部会话检查点标记作为普通消息发出 | OPEN | ⚠️ 暂无 |

### 🟡 低严重度（体验问题）

| Issue | 描述 | 状态 | Fix |
|---|---|---|---|
| [#5429](https://github.com/HKUDS/nanobot/issues/5429) | AgentLoop 不读取后台任务异常 | **已关闭** | [#5431](https://github.com/HKUDS/nanobot/pull/5431) / [#5724](https://github.com/HKUDS/nanobot/pull/5724) 合并 |

---

## 六、功能请求与路线图信号

今日新提出的功能请求中，以下几个具有明确的产品演进方向意义：

| 请求 | Issue | 已有 PR | 评估 |
|---|---|---|---|
| WebUI composer 草稿按会话持久化 | [#5910](https://github.com/HKUDS/nanobot/issues/5910) | 无 | 体验类，预计近期可纳入 |
| 服务端消息队列（agent busy 时的"等候室"） | [#5909](https://github.com/HKUDS/nanobot/issues/5909) | 无 | 进阶功能，依赖 server-side session 控制 |
| 流式回复期间显示实时 tokens/sec | [#5908](https://github.com/HKUDS/nanobot/issues/5908) | 无 | 简单可视化，可能随流式性能优化一并上线 |
| 静默上下文压缩 + 降低 WeChat 轮询日志 | [#5900](https://github.com/HKUDS/nanobot/issues/5900) | [#5780](https://github.com/HKUDS/nanobot/pull/5780) 已存在同类实现 | 高概率并入，签名"我同意"评论已经在等 |
| 会话结束通知铃声（WebUI） | [#5524](https://github.com/HKUDS/nanobot/issues/5524) | 无 | 已关闭但未实现，可能被搁置或转 good first issue |
| 添加 Opper 作为内置 provider | [#5845](https://github.com/HKUDS/nanobot/pull/5845) | PR 已开 | 与 Eden AI/OrcaRouter 模式一致，预计合并 |
| Telegram 主题自动重命名为会话标题 | [#5902](https://github.com/HKUDS/nanobot/pull/5902) | PR 已开 | 体验增强 |

**路线图信号**：NanoBot 当前正在从"功能可用"转向"运维可观测 + 体验精致"，长任务可中断与排队（#5909）、静默压缩（#5780、#5900）以及会话元数据一致性（#5902、#5910）构成下一版本的最强需求集。

---

## 七、用户反馈摘要

从今日活跃 Issue 的评论与描述中提炼：

- **「WebUI 长时间任务无感」（#5524 用户）**：开启 agent 后用户必须一直盯着屏幕或主动刷新才知道回复完成，反映出**缺少被动通知能力**。
- **「agent 跑长任务时无法追加消息」（#5909 用户）**：浏览器自动化查成绩场景下既无法中断、又无法排队，反映出**会话交互模型缺少"busy 状态下的写入接口"**。
- **「会话切换后草稿丢失」（#5910）**：composer 文本是纯内存状态，切换会话或误刷即丢失，反映出**WebUI 状态层缺少持久化设计**。
- **「v0.3.5 配置目录必须搬到 workspace 外」（#5881 用户）**：用户有两个实例，质疑"为什么同一个 workspace 要把 _nanobot 单独放出去"，反映出**0.3.5 的目录校验规则可能过于严苛，缺少向后兼容说明**。Issue 已关闭但**用户结论未在评论中体现**，需关注是否真的修复了多实例场景。
- **「Context 压缩过程在 WeChat 上发通知」（#5900 用户）**：`idleCompactAfterMinutes=15` 后收到频繁的压缩通知信息，**用户反馈为"骚扰"**，期望默认静默。

整体反馈显示用户对 NanoBot 的**功能完整度满意**，但对**被动体验（通知、状态、节奏感）有强烈改进诉求**。

---

## 八、待处理积压（提醒维护者）

以下 Issue/PR 在过去一段时间内处于 OPEN 状态且重要性较高，建议维护者优先关注：

| 编号 | 类型 | 主题 | 状态摘要 |
|---|---|---|---|
| [#5849](https://github.com/HKUDS/nanobot/issues/5849) | Bug | 自动压缩死锁 | **🔴 最高优先级**，暂无修复 PR，可能导致用户数据不可恢复 |
| [#5910](https://github.com/HKUDS/nanobot/issues/5910) | Feature | WebUI composer 草稿持久化 | 新开未分配 |
| [#5909](https://github.com/HKUDS/nanobot/issues/5909) | Feature | 服务端消息队列 | 新开未分配 |
| [#5908](https://github.com/HKUDS/nanobot/issues/5908) | Feature | 实时 tokens/sec | 新开未分配 |
| [#5903](https://github.com/HKUDS/nanobot/issues/5903) | Bug | Feishu 隐藏检查点消息泄漏 | 新开未分配 |
| [#5898](https://github.com/HKUDS/nanobot/issues/5898) | Bug | GPT-6 Copilot 不支持 | 新开未分配 |
| [#5838](https://github.com/HKUDS/nanobot/pull/5838) | PR | session_id 路由到对应 chat | 标记 conflict，待解决 |
| [#5864](https://github.com/HKUDS/nanobot/pull/5864) | PR | Discord 延迟 reaction 任务取消 | 标记 conflict，与 #5807 重叠 |
| [#5260](https://github.com/HKUDS/nanobot/pull/5260) | PR | 忽略 workspace 目录中的运行时文件 | 已开放 50+ 天，需关注 |
| [#5257](https://github.com/HKUDS/nanobot/pull/5257) | PR | sustained-goal 在 turn 闲置时停止 | 已开放较久 |
| [#5834](https://github.com/HKUDS/nanobot/pull/5834) | PR | 处理 SSE Responses `reasoning_text.*` 事件 | 等待 review |
| [#5780](https://github.com/HKUDS/nanobot/pull/5780) | PR | 静默上下文压缩通知 | 等待 review，与 #5900 诉求一致 |

---

## 📌 数据小结

| 指标 | 数值 |
|---|---|
| Issue 新开/活跃 | 8 |
| Issue 关闭 | 6 |
| PR 待合并 | 13 |
| PR 合并/关闭 | 24 |
| 新版本发布 | 0 |
| 高严重度未修复 Bug | 1（[#5849](https://github.com/HKUDS/nanobot/issues/5849)） |
| 长期未响应 PR（>30 天） | 至少 2（#5260、#5257） |

**结论**：NanoBot 处于**稳健迭代期**，代码侧推进节奏健康，但存在 1 个高严重度稳定性隐患（自动压缩死锁）和若干长期 open 的 PR 待清理。建议下一版本在修复 #5849 的基础上，将 #5780（静默压缩）、#5431/#5724 已合并的可观测性改进、#5367 的本地化成果一起打包发布，作为对用户社区的明确回应。

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

<think>The user is asking me to generate a daily report for PicoClaw project based on GitHub data. Let me analyze the data carefully:

1. **Data Overview**:
   - Past 24 hours Issues: 2 (1 new/active, 1 closed)
   - Past 24 hours PRs: 8 (all pending, 0 merged/closed)
   - No new releases

2. **Issues**:
   - #3390 [CLOSED] - Bug about Pico channel splitting multi-line input
   - #3391 [OPEN] - Bug about Pico channel splitting multi-line input (duplicate of #3390)

3. **PRs**:
   - #3381 [stale] - feat: Switch Openai to responses API (created 2026-09-17)
   - #3376 [stale] - fix(deltachat): initialize as custom channel (created 2026-09-10)
   - #3371 - feat(providers): add opencode-go provider (created 2026-09-08)
   - #3389 - build(deps): bump golang.org/x/crypto (dependabot)
   - #3388 - build(deps): bump github.com/modelcontextprotocol/go-sdk (dependabot)
   - #3387 - build(deps): bump github.com/anthropics/anthropic-sdk-go (dependabot)
   - #3386 - build(deps): bump maunium.net/go/mautrix (dependabot)
   - #3385 - build(deps): bump github.com/line/line-bot-sdk-go/v8 (dependabot)

Now I need to generate a structured daily report. The date is 2026-09-25.

Let me think about this carefully:
- No new releases
- 8 PRs but none merged (all pending)
- 5 of those PRs are dependabot dependency bumps created on 2026-09-24
- 3 PRs are feature/fix related but stale
- 1 issue closed, 1 new issue (which looks like a duplicate)
- The closed issue #3390 and open issue #3391 appear to be duplicates with the same bug description

Let me structure the report following the requested sections:

1. **今日速览** (Today's Highlights) - 3-5 sentences
2. **版本发布** (Releases) - Skip since none
3. **项目进展** (Project Progress) - No merged PRs, so discuss what pending
4. **社区热点** (Community Hotspots)
5. **Bug 与稳定性** (Bugs & Stability)
6. **功能请求与路线图信号** (Feature Requests & Roadmap Signals)
7. **用户反馈摘要** (User Feedback Summary)
8. **待处理积压** (Pending Backlog)

Let me write this in a professional, objective, data-driven tone. I should note that no PRs were merged today, which is important for project health assessment. The dependabot activity is high (5 of 8 PRs), suggesting automated maintenance but lack of human review/merge.

The duplicate issue situation (#3390 closed but #3391 is essentially the same) is interesting - usually closing one as duplicate of the other, but here #3390 was closed and #3391 still open with same content. This might indicate the issue was closed without resolution or #3391 is the tracking issue.

Actually, looking again, #3390 is CLOSED and #3391 is OPEN. Both have the same author and same bug description. This is unusual - perhaps #3390 was closed as duplicate pointing to #3391, or the user reopened/recreated the issue.

Let me draft the report now.</think>

# PicoClaw 项目日报 · 2026-09-25

---

## 📌 今日速览

PicoClaw 仓库过去 24 小时整体活跃度偏低，但**自动化维护显著高于人工进展**：8 条 PR 中有 5 条来自 Dependabot 的依赖版本更新，3 条为功能/修复类 PR，但**全部 8 条均处于 OPEN 状态，零合并零关闭**。Issues 侧出现一对高度疑似重复的 Bug 报告（#3390 已关闭、#3391 仍 OPEN），社区反馈信号较稀薄。无新版本发布。整体来看，项目当前处于"依赖滚动 + 等待评审"的待审状态，建议维护者尽快处理积压 PR 与重复 Issue。

- 活跃度评估：🟡 **中等偏低**（自动化 PR 占主导，人工合并停滞）
- 健康度提示：⚠️ 3 条非依赖类 PR（含 2 条标记为 `stale`）已超 1 周未推进

---

## 🚀 版本发布

无新版本发布。

---

## 🛠️ 项目进展

过去 24 小时内**无任何 PR 被合并或关闭**，项目代码层面无实质性推进。但有 5 条依赖升级 PR 处于待审状态，覆盖以下关键库：

| PR | 依赖项 | 版本变更 | 类别 |
|----|--------|----------|------|
| [#3389](https://github.com/sipeed/picoclaw/pull/3389) | golang.org/x/crypto | 0.53.0 → 0.57.0 | 核心加密库 |
| [#3388](https://github.com/sipeed/picoclaw/pull/3388) | modelcontextprotocol/go-sdk | 1.6.1 → 1.8.0 | MCP 协议 SDK |
| [#3387](https://github.com/sipeed/picoclaw/pull/3387) | anthropics/anthropic-sdk-go | 1.55.1 → 1.74.0 | Anthropic SDK |
| [#3386](https://github.com/sipeed/picoclaw/pull/3386) | mautrix | 0.27.0 → 0.31.0 | Matrix 桥接 |
| [#3385](https://github.com/sipeed/picoclaw/pull/3385) | line/line-bot-sdk-go | 8.20.1 → 8.22.0 | LINE 通道 |

其中 **Anthropic SDK 跨度较大**（跨越 19 个小版本），MCP SDK 与 mautrix 同样包含重要的安全与协议更新，建议维护者优先评估合并。

---

## 🔥 社区热点

- **#3390 / #3391 ([#3390](https://github.com/sipeed/picoclaw/issues/3390) · [#3391](https://github.com/sipeed/picoclaw/issues/3391))** — 同一作者 (@chentianxiong123) 在 24 小时内提交了**两份内容几乎完全一致**的 Bug 报告，描述 Pico 通道（mobile TUI）将粘贴的多行文本（诗歌、代码块）按换行符拆分为多条独立消息，破坏了消息结构。该 Issue 是今日**唯一有评论互动**的话题（1 条评论），也是唯一具备实质性用户痛点反馈的话题。
- **[#3381](https://github.com/sipeed/picoclaw/pull/3381)** — `feat: Switch Openai to responses API` 作为最具影响力的功能 PR，已被标记为 `stale` 但仍未合并，反映社区评审节奏放缓。

---

## 🐛 Bug 与稳定性

| 严重程度 | Issue | 标题 | 状态 | 修复 PR |
|---------|-------|------|------|---------|
| 🟠 中 | [#3391](https://github.com/sipeed/picoclaw/issues/3391) | Pico channel splits multi-line input into multiple messages | OPEN | ❌ 无 |
| ⚪ 已关闭 | [#3390](https://github.com/sipeed/picoclaw/issues/3390) | Pico channel splits multi-line input into multiple messages | CLOSED | ❌ 无 |

**说明**：
- 该 Bug 影响 **mobile TUI 端的粘贴体验**，对诗歌、代码块、日志等多行内容场景属于常见且高频的操作，影响用户体验明确。
- #3390 与 #3391 内容高度雷同，#3390 已关闭、#3391 仍 OPEN，**疑似未做合并 / 关联标记**，存在重复追踪风险，建议维护者将 #3391 标记为 duplicate，或说明关闭原因（如已通过其他 PR 修复）。
- 截至目前**无对应的修复 PR**，需关注此回归是否已在 [#3388](https://github.com/sipeed/picoclaw/pull/3388) 的 MCP SDK 升级中隐式解决。

---

## 💡 功能请求与路线图信号

今日**未提出明确的新功能请求 Issue**，但待合并 PR 透露出项目下一阶段的潜在方向：

| PR | 功能 | 路线图信号 |
|----|------|-----------|
| [#3381](https://github.com/sipeed/picoclaw/pull/3381) | OpenAI 切换至 **Responses API** | 顺应 OpenAI 新一代对话 API 范式，属于战略性升级，被纳入下一版本的概率较高 |
| [#3371](https://github.com/sipeed/picoclaw/pull/3371) | 新增 **opencode-go** provider，支持 session header | 扩展多模型路由能力，体现"多 provider + 会话感知"的产品演进 |
| [#3376](https://github.com/sipeed/picoclaw/pull/3376) | 修复 **DeltaChat** 通道配置校验错误（[#3265](https://github.com/sipeed/picoclaw/issues/3265)） | 属于历史 issue 闭环，门槛较低 |

**预测**：下一版本若聚焦"Provider 扩展 + OpenAI 协议现代化"，[#3381](https://github.com/sipeed/picoclaw/pull/3381) 与 [#3371](https://github.com/sipeed/picoclaw/pull/3371) 最有可能被纳入。

---

## 💬 用户反馈摘要

由于 Issues 评论数量极少（仅 #3390 有 1 条评论），可提取的真实用户痛点如下：

1. **多行粘贴被破坏** — 用户在 mobile TUI 端粘贴代码块或诗歌时，Pico 通道按 `\n` 拆分为多条消息，破坏语义结构。该反馈反映出 **mobile TUI 与桌面端在输入处理一致性上的短板**。
2. **社区互动响应速度** — 同一 Bug 24h 内被开两次，暗示用户未在第一时间看到维护者反馈或指引，反映**首次提交的反馈循环可能不够高效**。
3. **依赖维护透明度** — 当前 PR 列表中 5 条 Dependabot 升级均无人 review，反映**对依赖变更的安全评估机制可能缺失或响应不及时**。

---

## 📦 待处理积压

提醒维护者关注的"超期未响应"资产：

| 编号 | 类型 | 标题 | 创建时间 | 距今 | 状态 |
|------|------|------|---------|------|------|
| [#3381](https://github.com/sipeed/picoclaw/pull/3381) | PR | Switch Openai to responses API | 2026-09-17 | **+8 天** | `stale` |
| [#3376](https://github.com/sipeed/picoclaw/pull/3376) | PR | fix(deltachat): initialize as custom channel | 2026-09-10 | **+15 天** | `stale` |
| [#3371](https://github.com/sipeed/picoclaw/pull/3371) | PR | feat(providers): add opencode-go provider | 2026-09-08 | **+17 天** | OPEN |
| [#3391](https://github.com/sipeed/picoclaw/issues/3391) | Issue | Pico channel splits multi-line input | 2026-09-24 | **+1 天** | OPEN（疑似重复 #3390） |

**特别提醒**：
- [#3371](https://github.com/sipeed/picoclaw/pull/3371) 与 [#3376](https://github.com/sipeed/picoclaw/pull/3376) 均超过 2 周无实质性进展，且其中 2 条已被自动标记为 `stale`，存在被机器人关闭的风险。
- 建议维护者优先 review 这 3 条非依赖类 PR，并**澄清 #3390 与 #3391 的关系**，避免重复追踪造成社区混淆。

---

> 📊 **日报小结**：PicoClaw 今日呈"自动化驱动、人工静默"的态势。零合并与多 `stale` PR 暴露了 review 节奏问题；多行输入 Bug 的重复出现提示维护流程需要更明确的一线响应机制。下一版本若要顺利推进，**处理积压 PR + 完善输入处理体验**将是关键突破口。

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

<think>Let me analyze the provided GitHub data for the IronClaw project and generate a comprehensive daily report for 2026-09-25.

Key data points:
1. Issues update in past 24 hours: 1 new/active, 0 closed
2. PR updates: 1 pending, 0 merged/closed
3. New release: 1 - ironclaw-v1.4.1-rc.2

Let me structure the report carefully:

1. **今日速览**: Overall status - low activity day, just 1 issue and 1 PR, but a new release candidate published
2. **版本发布**: 1.4.1-rc.2 - patch release fixing Google OAuth extensions via Web UI
3. **项目进展**: No PRs merged today - the pending PR #7988 is for codebase knowledge graph refresh
4. **社区热点**: Issue #8111 about daily failure taxonomy - the only active issue
5. **Bug 与稳定性**: The release notes fix Google extensions OAuth issue
6. **功能请求与路线图信号**: Limited signals
7. **用户反馈摘要**: Minimal due to low activity
8. **待处理积压**: PR #7988 has been open since 2026-08-29 - about a month

I should write this in Chinese since the request is in Chinese, with objective and data-driven language.</think>

# IronClaw 项目动态日报
**日期：2026-09-25**
**数据来源：GitHub (github.com/nearai/ironclaw)**

---

## 1. 今日速览

IronClaw 项目今日活跃度处于**低位水平**：过去 24 小时内仅有 1 条 Issue 更新和 1 条 PR 更新，且均无任何关闭/合并动作，仓库未发生实质性推进。但项目维护节奏健康，**新版本 ironclaw-v1.4.1-rc.2 已于昨日发布**，延续了 RC1 的修复方向（Google OAuth Web UI 路径支持）。整体而言，这是典型的"修整日"——无新代码落地，但发布管线持续运转，建议关注长期待合并的 PR #7988 是否会阻塞下一正式版的 cut。

---

## 2. 版本发布

### 🏷️ ironclaw-v1.4.1-rc.2（2026-09-24）

这是 `1.4.0` 的第二个候选补丁版本，沿用 RC1 的同一修复方向。

**修复内容（Fixed）：**
- Google 扩展（Gmail、Google Calendar）现在支持通过 **Web UI 注入 Google OAuth client**（而非依赖环境变量 `GOOGLE_OAUTH_CLIENT_*`）来完成部署激活与授权流程。

**破坏性变更：** 无明确标识。属于向后兼容性扩展——环境变量路径若仍可使用，则不构成破坏；详情建议核对 [Release 页面](https://github.com/nearai/ironclaw/releases/tag/ironclaw-v1.4.1-rc.2)。

**迁移注意事项：**
- 运维侧若有现网部署依赖环境变量方式提供 OAuth 凭据，可保持不变。
- 若计划切换至 Web UI 路径管理 OAuth client，需确保部署实例具备相应的 Web 管理访问权限与凭据存储策略。
- 关注 RC1 → RC2 的差分 changelog，确认是否引入了其他隐性改动。

---

## 3. 项目进展

今日**无 PR 合并或关闭**，代码层未发生新的推进。唯一活跃 PR：

- **#7988 — `chore(agents): refresh codebase knowledge graph`**（@ironclaw-ci[bot] 提交）
  - 链接：https://github.com/nearai/ironclaw/pull/7988
  - 该 PR 由夜间 `Codebase Graph Refresh` workflow 自动生成，目标是刷新已提交的 codebase-memory bootstrap snapshot。
  - 标记为 `size: XS / risk: low / contributor: core`，属 CI/基础设施类常规维护。
  - 创建于 **2026-08-29，至今已挂起约 27 天**，今日有最新更新活动。鉴于其低风险特性，建议维护者优先审阅，避免在自动 snapshot 与主干之间形成更大漂移。

**今日推进度评估：项目整体向前迈进约 0 步**（无合并）。版本管线层面则向前推进了 1 个 RC（昨日发布 RC2）。

---

## 4. 社区热点

今日讨论活跃度极低，仅 1 条活跃 Issue：

- **#8111 — Daily ironclaw failure taxonomy — 2026-09-24**
  - 链接：https://github.com/nearai/ironclaw/issues/8111
  - 作者：@pranavraja99 ｜ 评论：0 ｜ 👍：0
  - 内容：每日失败分类报告，聚焦 `officeqa` 测试套件 38 个非通过任务，分析指出这些均为 `deepseek-v4-flash` 模型在 OCR 数字化 Treasury 类文档上的真实模型质量问题。
  - 引用了 [benchmarks 运行](https://nearai.github.io/benchmarks/#/runs/ironclaw/officeqa/69f799a5-16f3-4577-b008-89c48b9deb82) 的可追溯链接。

**诉求分析：** 该 Issue 实质上是**质量可观测性（quality observability）** 维度的日常信号输出，非用户求助类话题。其价值在于：① 持续追踪模型质量基线；② 区分"产品 bug"与"模型能力不足"，避免误归因。建议关注官方是否会在后续动作中给出对应计划。

---

## 5. Bug 与稳定性

| 严重度 | 问题 | 状态 | Fix PR |
|--------|------|------|--------|
| 🟡 中 | Google 扩展（Gmail/Calendar）激活在通过 Web UI 注入 OAuth client 时失败 | ✅ 已在 RC1+RC2 中修复 | 已合入 1.4.1-rc.2 |
| 🟢 低 | Codebase 知识图谱 snapshot 与主干漂移（间接稳定性/可复现性问题） | ⏳ 待合并 | #7988 待审 |

**稳定性评估：** 已知 Bug 均已通过 1.4.1-rc.2 修复并进入候选阶段。若 RC2 在内部灰度中验证通过，预计可较快推进到 1.4.1 正式版。**无新增崩溃或回归报告。**

---

## 6. 功能请求与路线图信号

- 今日 Issues 区无新功能请求（FR）类话题。
- 路线图侧的可推断信号：
  - **Web UI 作为运维管理入口** 的能力在持续扩展（Google OAuth 路径印证），可预期后续会有更多扩展/凭据管理的 UI 化重构。
  - **模型质量评估/benchmark 可观测性** 议题（#8111 类）若持续产出，可能催生内置的失败分类管线或仪表盘功能。

暂无新 PR 直接对应具体 FR。

---

## 7. 用户反馈摘要

由于今日 Issue #8111 评论数为 0，且无其他活跃用户议题，**缺乏可直接采样的真实用户痛点反馈**。

可观察到的间接信号：
- **运维侧痛点**：Google OAuth client 必须通过环境变量注入，是阻碍"可插拔 Web 部署"体验的摩擦点——RC2 的修复方向正是回应此痛点。
- **模型能力边界**：#8111 反映出用户对 `deepseek-v4-flash` 在 OCR 类任务上的能力天花板有所感知，但当前以"分类报告"形式呈现，尚非吐槽或负面反馈。

**满意度信号：** 维护节奏稳定（每日有 RC 类动作、CI 自动 PR），暂未观察到强烈不满情绪。

---

## 8. 待处理积压

| 类型 | 编号 | 标题 | 挂起时长 | 提醒 |
|------|------|------|----------|------|
| PR | [#7988](https://github.com/nearai/ironclaw/pull/7988) | chore(agents): refresh codebase knowledge graph | ~27 天（自 2026-08-29） | 低风险但持续漂移，建议尽快审阅 |

**给维护者的提醒：**
1. PR #7988 属于机器人自动维护类任务，挂起近一个月可能影响 `Codebase Graph Refresh` 工作流的持续集成预期，应优先处置。
2. 若 1.4.1-rc.2 灰度通过，建议立即推进 GA 1.4.1 发布，避免 RC 链条过长消耗发布工程资源。
3. 建议为每日失败分类（#8111 类）建立 Issue 模板或固定入口，便于后续自动化汇总与趋势追踪。

---

## 📊 项目健康度仪表盘

| 指标 | 数值 | 评价 |
|------|------|------|
| 24h Issue 更新 | 1 | 🟢 低活跃但稳定 |
| 24h PR 合并 | 0 | 🟡 无代码推进 |
| 24h 新发布 | 1（RC） | 🟢 发布管线健康 |
| 长期待处理 PR | 1（27 天） | 🟡 需关注 |
| 崩溃/回归报告 | 0 | 🟢 |
| 已知 Bug 修复率 | 100%（RC2 覆盖） | 🟢 |

**总体判定：** 项目处于**平稳迭代期**，无显著风险点。下一关键节点为 **1.4.1 正式版（GA）发布** 与 PR #7988 的合并处置。

---
*报告生成时间：2026-09-25 ｜ 数据截止：过去 24 小时 GitHub 活动*

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

<think>Let me analyze the GitHub data for LobsterAI and generate a comprehensive daily report for 2026-09-25.

Key observations:
1. 18 Issues updated in past 24 hours, but 16 were closed (likely stale/bot closures) and only 2 are active/open
2. 13 PRs updated, 7 still open and 6 closed/merged
3. No new releases

Active Issues (still open):
- #1861: Image attachment doesn't reprocess when switching models (supportsImage sync issue) - bug from April
- #2385: Can't add folder to dialog, only files - feature request from July

Closed Issues (16) - most appear to be stale bot closures:
- #2079: Execution result window freezes when scrolling to top
- #2120: Suggestions (task queue, runtime, skills UI)
- #2121: Question about duplicate output consuming tokens
- #2131: Hermes agent support inquiry
- #2176: Security - MEDIA file reference allows arbitrary local file reads
- #2216: Memory Search can't switch embedding provider
- #2180: AI Collaborator feature proposal
- #2181: Security - private-network browser access
- #2214: Data backup causes main process freeze
- #2215: Install error - resource extraction failed
- #2230: Same model much slower than CodeBuddy
- #2239: Programming tool "OpenClaw-ification" trend suggestion
- #2243: skills.load.watch performance bottleneck
- #2286: Security - unauthenticated local token proxy
- #2287: Security - NIM outbound media flow allows file exfiltration
- #2288: Security - HTML preview server symlink disclosure

Closed PRs (6):
- #2761: fix model output-length truncation (GLM-5.3 cutoff)
- #2762: UI palette and layout alignment
- #2760: UI palette and layout alignment (similar)
- #2759: Repair malformed OpenAI-compatible tool calls
- #2358: Cowork session rename failure feedback
- #2373: Sync image attachments with model capability

Open PRs (7):
- #2765: Preserve accepted work through recovery and compaction
- #2758: Display and refresh native OpenClaw progress cards
- #2764: Hot reload gateway policies without restart
- #2763: Stop whole-turn replay after model call started
- #2374: Permanent setting to hide sidebar ad banner
- #2452: Preserve provider for slashed model IDs
- #2504: OrcaRouter provider integration

Let me now write the report in Chinese as requested.</think>

# LobsterAI 项目动态日报
**日期：2026-09-25**

---

## 1. 今日速览

LobsterAI 今日整体处于**活跃的工程迭代状态**，无新版本发布。代码侧由维护者 @alison-xx 与 @fisherdaddy 持续推进 OpenClaw 运行时稳定性与 UI 体验相关 PR（共 5 个新提交/更新），但社区侧的活跃度较低——18 条 Issues 更新中 16 条为 stale 状态关闭，实质活跃 Issues 仅 2 条；PR 侧 7 处于待合并状态。值得关注的是 7 条 6 月份集中提交的安全类 Issue（涉及本地文件读取、SSRF、token 代理、符号链接泄露等）被批量关闭，需进一步确认是否已落实修复。

---

## 2. 版本发布

无新版本发布。

---

## 3. 项目进展

今日有 6 个 PR 进入已合并/已关闭状态，主要推进方向为 **OpenClaw 运行时健壮性** 与 **UI 视觉重构**：

| PR | 标题 | 意义 |
|---|---|---|
| [#2759](https://github.com/netease-youdao/LobsterAI/pull/2759) | fix(openclaw): 修复并续接格式错误的 OpenAI 兼容工具调用 | 回移植上游字符串字面量修复，允许对被拒绝的调用最多两次内部续接，避免因原始控制字符或非法转义导致整轮带副作用的回合被丢弃 |
| [#2761](https://github.com/netease-youdao/LobsterAI/pull/2761) | fix(openclaw): 解决模型输出长度截断问题 | 修复 GLM-5.3 等模型 max_tokens 默认过低、模型目录扫描遗漏第三方插件（volcengine/zai/deepseek）的问题 |
| [#2760](https://github.com/netease-youdao/LobsterAI/pull/2760) / [#2762](https://github.com/netease-youdao/LobsterAI/pull/2762) | feat(ui): 统一配色与布局 | 重构主题 token 为中性灰阶，主内容区与侧边栏边到边贴合，侧边栏导航改为胶囊按钮，窗口尺寸独立适配 24pt 侧边栏 |
| [#2358](https://github.com/netease-youdao/LobsterAI/pull/2358) | fix(cowork): 会话重命名失败时给出反馈 | 解决 #670 用户重命名会话失败无任何提示的问题，闭环了长达数月的 UX 缺陷 |
| [#2373](https://github.com/netease-youdao/LobsterAI/pull/2373) | fix(cowork): 图片附件与模型视觉能力同步 | 修复切换非视觉模型后历史 dataUrl 仍被发送的 stale 状态问题，对应长期未关的 #1861 |

> 整体评估：今日合并的 PR 集中在 **模型调用稳定性** 与 **桌面端视觉一致性** 两个维度，是项目向前迈进的具体表现。

---

## 4. 社区热点

由于 Issues 侧多数被自动判定为 stale 后关闭，"热点"更多体现在**长期被讨论、用户反复提及**的议题：

- **OpenClaw 化趋势与生态联动（[#2239](https://github.com/netease-youdao/LobsterAI/issues/2239)）** — 用户 @woxinsj 提出编程工具与桌面 Agent 融合的系统性建议，主张通过 MCP 实现与 OpenCode、CodeBuddy CN 的深度联动。此议题虽被关闭，但呼应了 [#2180](https://github.com/netease-youdao/LobsterAI/issues/2180) "AI Collaborator 形态"的诉求，**代表产品方向信号**。
- **技能系统性能与可观测性（[#2243](https://github.com/netease-youdao/LobsterAI/issues/2243)）** — 174 个技能场景下 skills.load.watch 拖慢启动并浪费 token，用户要求增加 UI 开关。
- **同模型对比性能差异（[#2230](https://github.com/netease-youdao/LobsterAI/issues/2230)）** — 用户实测 LobsterAI 跑同一提示词耗时 25 分钟/60M tokens，CodeBuddy 仅 2m24s/67610 tokens，差距悬殊，已引发对 token 损耗的怀疑（与 #2121 重复输出问题形成证据链）。
- **图片附件 @ 模型切换问题（[#1861](https://github.com/netease-youdao/LobsterAI/issues/1861)）** — 用户 @btc69m979y-dotcom 详细拆解三种失效路径，已有 [#2373](https://github.com/netease-youdao/LobsterAI/pull/2373) 对应修复 PR（今日关闭），属于闭环案例。

---

## 5. Bug 与稳定性

按严重程度排序（**严重** → **一般**）：

| 严重度 | Issue | 问题描述 | 是否已有修复 |
|---|---|---|---|
| 🔴 严重 | [#2176](https://github.com/netease-youdao/LobsterAI/issues/2176) | 自动解析 `MEDIA:` 引用导致任意本地文件读取（Electron 提权链路） | ❌ 未见明确修复 PR |
| 🔴 严重 | [#2181](https://github.com/netease-youdao/LobsterAI/issues/2181) | 浏览器默认恢复私有网络访问，削弱 OpenClaw SSRF 防护 | ❌ 未见明确修复 PR |
| 🔴 严重 | [#2286](https://github.com/netease-youdao/LobsterAI/issues/2286) | 本地 token 代理未鉴权，可被任意本地进程重放 | ❌ 未见明确修复 PR |
| 🔴 严重 | [#2287](https://github.com/netease-youdao/LobsterAI/issues/2287) | NIM 出站媒体流允许通过助手生成的绝对路径外泄本地文件 | ❌ 未见明确修复 PR |
| 🔴 严重 | [#2288](https://github.com/netease-youdao/LobsterAI/issues/2288) | HTML 预览服务器跟随根内符号链接泄露任意本地文件 | ❌ 未见明确修复 PR |
| 🟠 高 | [#2214](https://github.com/netease-youdao/LobsterAI/issues/2214) | 桌面端"数据备份"导致主进程卡死（Windows 11 24H2, 100% 复现） | ❌ 未见明确修复 PR |
| 🟠 高 | [#2079](https://github.com/netease-youdao/LobsterAI/issues/2079) | 执行结果窗口滚动到顶端假死 | ❌ 未见明确修复 PR |
| 🟡 中 | [#1861](https://github.com/netease-youdao/LobsterAI/issues/1861) | 图片附件 supportsImage 状态不同步 | ✅ 已由 [#2373](https://github.com/netease-youdao/LobsterAI/pull/2373) 修复 |
| 🟡 中 | [#2216](https://github.com/netease-youdao/LobsterAI/issues/2216) | Memory Search 无法切换 local embedding，索引重建 DB 锁阻塞 | ❌ 未见明确修复 PR |
| 🟡 中 | [#2215](https://github.com/netease-youdao/LobsterAI/issues/2215) | 安装时 "Resource extraction failed"（NSIS 残留路径） | ❌ 用户自排查给出方案，无官方修复 |

> ⚠️ **安全告警**：5 条 6 月集中披露的高危安全问题均已关闭，但未见对应修复 PR 进入合并通道。**强烈建议维护者公开披露修复状态或致谢研究者 @YLChen-007，避免安全债累积。**

---

## 6. 功能请求与路线图信号

| 提议 | 链接 | 与现有 PR 的关联 | 纳入可能性评估 |
|---|---|---|---|
| OpenClaw 化编程工具联动（与 CodeBuddy / OpenCode / DBX） | [#2239](https://github.com/netease-youdao/LobsterAI/issues/2239) | 已有 [#2230](https://github.com/netease-youdao/LobsterAI/issues/2230) 性能对比 | 🟡 中长期 |
| OpenClaw 升级为 "AI Collaborator" 形态 | [#2180](https://github.com/netease-youdao/LobsterAI/issues/2180) | [#2765](https://github.com/netease-youdao/LobsterAI/pull/2765) 正在做持久化与压缩保留 | 🟢 已部分启动 |
| 添加任务队列预输入、延长单次任务时长 | [#2120](https://github.com/netease-youdao/LobsterAI/issues/2120) | 无 | 🟡 视运行时调度改造 |
| 技能界面三列展示 | [#2120](https://github.com/netease-youdao/LobsterAI/issues/2120) | 无 | 🟢 易实现 |
| skills.load.watch 改手动并加 UI 开关 | [#2243](https://github.com/netease-youdao/LobsterAI/issues/2243) | 无 | 🟢 易实现 |
| 对话框支持添加文件夹 | [#2385](https://github.com/netease-youdao/LobsterAI/issues/2385) | 无 | 🟢 易实现 |
| 添加 OrcaRouter provider | [#2504](https://github.com/netease-youdao/LobsterAI/pull/2504) | 已有待合并 PR | 🟢 高 |
| 永久隐藏侧边栏广告横幅 | [#2374](https://github.com/netease-youdao/LobsterAI/pull/2374) | 已有待合并 PR | 🟢 高 |

---

## 7. 用户反馈摘要

**真实痛点（提炼自 Issues 评论）：**
- 🐢 **性能与 token 损耗焦虑**：用户在同一模型对比中实测 LobsterAI 比 CodeBuddy 多耗近 **1000 倍 token**，并怀疑重复输出是 claw 端问题（[#2121](https://github.com/netease-youdao/LobsterAI/issues/2121)、[#2230](https://github.com/netease-youdao/LobsterAI/issues/2230)）。
- 💾 **备份场景主进程卡死**：71.6 MB SQLite 数据库在 WAL 模式下备份导致 NSIS 安装路径下整个窗口白屏 + "未响应"，用户只能强杀（[#2214](https://github.com/netease-youdao/LobsterAI/issues/2214)）。
- 🔧 **技能体系负重**：174 个技能触发 watch 后启动慢、I/O 高，已通过隐藏 167 个技能缓解，但用户呼吁 UI 开关（[#2243](https://github.com/netease-youdao/LobsterAI/issues/2243)）。
- 📁 **日常使用摩擦**：对话框不支持 @ 文件夹（[#2385](https://github.com/netease-youdao/LobsterAI/issues/2385)）、执行结果窗口滚动顶端假死（[#2079](https://github.com/netease-youdao/LobsterAI/issues/2079)）——都直接影响日常工作流。
- 🧠 **离线/降级能力**：Memory Search 强依赖 OpenAI embedding，429 后整个记忆功能不可用，用户要求支持 local provider（[#2216](https://github.com/netease-youdao/LobsterAI/issues/2216)）。

**满意度信号：**
- 用户对 UI 重构 PR [#2760](https://github.com/netease-youdao/LobsterAI/pull/2760) / [#2762](https://github.com/netease-youdao/LobsterAI/pull/2762) 的方向持正面态度（中性灰阶、边到边布局）。
- 会话重命名失败反馈 ([#2358](https://github.com/netease-youdao/LobsterAI/pull/2358)) 解决了长期被吐槽"以为保存成功"的体验盲区。

---

## 8. 待处理积压

提醒维护者关注以下**长期未响应但具有实质性影响**的条目：

| 编号 | 类型 | 创建日期 | 距今 | 状态 |
|---|---|---|---|---|
| [#1861](https://github.com/netease-youdao/LobsterAI/issues/1861) | Bug | 2026-04-28 | ~5 个月 | 🟢 已有修复 PR [#2373](https://github.com/netease-youdao/LobsterAI/pull/2373)，待确认是否随版本发布 |
| [#2214](https://github.com/netease-youdao/LobsterAI/issues/2214) | 严重 Bug | 2026-06-26 | ~3 个月 | 🟠 高严重度，无修复 PR |
| [#2079](https://github.com/netease-youdao/LobsterAI/issues/2079) | Bug | 2026-05-30 | ~4 个月 | 🟡 已关闭为 stale，建议复测后重开 |
| [#2230](https://github.com/netease-youdao/LobsterAI/issues/2230) | 性能问题 | 2026-06-30 | ~3 个月 | 🟡 涉及 token 经济性，需运行时团队介入 |
| [#2385](https://github.com/netease-youdao/LobsterAI/issues/2385) | 功能请求 | 2026-07-25 | ~2 个月 | 🟢 简单 UX 改进 |
| [#2243](https://github.com/netease-youdao/LobsterAI/issues/2243) | 性能/UX | 2026-07-01 | ~3 个月 | 🟡 需要 UI + 配置层联动 |
| [#2176](https://github.com/netease-youdao/LobsterAI/issues/2176) / [#2181](https://github.com/netease-youdao/LobsterAI/issues/2181) / [#2286](https://github.com/netease-youdao/LobsterAI/issues/2286) / [#2287](https://github.com/netease-youdao/LobsterAI/issues/2287) / [#2288](https://github.com/netease-youdao/LobsterAI/issues/2288) | 安全 | 2026-06 ~ 2026-07 | ~3 个月 | 🔴 **全部已关闭但无对应修复 PR 公开可见，安全债风险高** |

> **建议**：维护者应在下一次 Release Notes 中明确披露以上 5 项安全披露的修复状态，或对研究者 @YLChen-007 公开致谢，以维持社区信任。同时建议为性能问题（[#2230](https://github.com/netease-youdao/LobsterAI/issues/2230)、[#2121](https://github.com/netease-youdao/LobsterAI/issues/2121)）设置专项排查 issue，因为 token 损耗焦虑会直接影响付费意愿。

---

*报告生成基于 2026-09-25 过去 24 小时的 GitHub 数据快照。*

</details>

<details>
<summary><strong>QwenPaw</strong> — <a href="https://github.com/agentscope-ai/QwenPaw">agentscope-ai/QwenPaw</a></summary>

<think>The user wants me to generate a project daily report for QwenPaw based on GitHub data. Let me analyze the data carefully and create a comprehensive, data-driven report.

Let me analyze the data:

**Overall Activity:**
- 19 Issues updated (15 new/active, 4 closed)
- 17 PRs updated (15 pending merge, 2 merged/closed)
- 0 new releases

**Closed Issues (4):**
- #7576: RetryChatModel hardcoded 32768 context_size fallback
- #7856: qwenpaw-pet 0.1.1 breaks QwenPaw 2.2.2b2 tool approvals
- #7968: Console sidebar redesign broke chat group/folder
- #4450: Simplify approval commands feature

**Closed/Merged PRs (2):**
- #7972: fix(console): default session list grouping to source
- #7971: fix(console): gate tool-call lifecycle queries on execution start

**Hot Issues (by comments):**
- #7318: QwenPaw Hub multi-tenant - 32 comments, 4 likes
- #7576: Context size bug - 6 comments
- #7628: Context compaction issue - 6 comments
- #7377: Agent Loop mode not persisted - 5 comments
- #7534: Feishu session stuck - 4 comments
- #7715: Daily Paper arxiv unreachable - 4 comments
- #5856: Tool_call structure lost - 4 comments
- #7733: Agent-autonomous context management - 3 comments
- #7856: qwenpaw-pet breaks tool approvals - 3 comments
- #7836: scroll eviction drops user turn - 1 like

**Notable new issues (2026-09-24 to 09-25):**
- #7968 (closed): Console sidebar redesign broke chat groups
- #7966: Session broken after provider switch - file:// URLs
- #7979: Cloud context-window catalog applied to local llama.cpp
- #7978: Cross-agent Recent Sessions panel
- #7976: Official mobile app request
- #7975 (PR): Plugin dir discovery
- #7974 (PR): QR login wait bound
- #7970 (PR): Module-level return in finally
- #7969 (PR): Cron delete rollback
- #7967 (PR): Markdown fence splitter

Let me structure the report well. The report should be in Chinese since the user asked in Chinese.

Let me focus on key themes:
1. Console/UI bugs - many issues around console (v2.2.2b3 sidebar redesign, cron UI, etc.)
2. Context management - multiple issues about context compaction/eviction/scroll
3. Plugin/provider compatibility issues
4. Mobile app request - high visibility feature request

Now let me write the report.</think>

# QwenPaw 项目动态日报
**日期：2026-09-25**

---

## 1. 今日速览

QwenPaw 今日保持**高活跃度**，24 小时内共更新 19 条 Issues 与 17 条 PRs，Issue 关闭率约 21%，PR 处理速度良好（2 条快速合并/关闭）。**Console 侧栏 v2.2.2b3 重构引发的回归**成为本日主线，相关会话分组、附件、媒体 URL 等问题集中暴露；同时**上下文管理**仍是社区持续关注的焦点，涵盖压缩、滚动淘汰、思维链省略等多条改进。Hub 多租户讨论热度不减（32 条评论），但官方移动端诉求首次以独立 issue 形式高调浮现。无新版本发布，社区目前仍处于 v2.2.2-beta 系列打磨阶段。

---

## 2. 版本发布

**无新版本发布。** 当前稳定渠道仍为 `v2.2.0`，最新 beta 为 `2.2.2-beta.3`。从活跃 Issue 看，`2.2.2b3` 引入了 Console 侧栏重构，已报告多项 UI 回归（#7968、#7966 等），建议用户在升级前关注相关修复 PR 进展。

---

## 3. 项目进展（已合并/关闭 PR）

| PR | 标题 | 影响 |
|---|---|---|
| [#7972](https://github.com/agentscope-ai/QwenPaw/pull/7972) | fix(console): default session list grouping to source | 将侧栏默认分组从 `date` 切回 `source`，**直接回滚 #7968 报告的会话分组功能断裂** |
| [#7971](https://github.com/agentscope-ai/QwenPaw/pull/7971) | fix(console): gate tool-call lifecycle queries on execution start | 修复 Console 过早轮询 tool-call 状态导致的资源浪费 |

**整体评估：** 推进速度积极但量小，集中在 Console UX 紧急回滚层面。值得注意的是 [#7971](https://github.com/agentscope-ai/QwenPaw/pull/7971) 揭示了一个**前后端契约不一致**问题——前端在 `plugin_call` 完成时即开始轮询，而后端需等待 `on_acting` 中间件真正注册，反映出 Console 重构与后端生命周期对齐仍需磨合。

---

## 4. 社区热点

### 🔥 最热讨论：Hub 多租户方向（持续）
- **[#7318](https://github.com/agentscope-ai/QwenPaw/issues/7318)** — *QwenPaw Hub 多租户版下一步建设方向*
  - 评论 32 条、👍 4、近期更新
  - 官方主动征集社区诉求，涵盖多用户访问、管理员托管技能、组织级审计等
  - **诉求分析：** Hub 已于 2.2.0 发布，社区正推动团队级协作能力建设，这是项目从"个人助手"向"组织级 AI 平台"演进的**战略信号**

### 其他高热度话题
| 主题 | Issue | 评论 | 趋势 |
|---|---|---|---|
| 飞书会话卡死 | [#7534](https://github.com/agentscope-ai/QwenPaw/issues/7534) | 4 | 高优队列阻塞导致 consumer 无法重建 |
| Daily Paper 静默失败 | [#7715](https://github.com/agentscope-ai/QwenPaw/issues/7715) | 4 | 缺代理配置，错误信息被掩盖 |
| 上下文压缩超预算 | [#7628](https://github.com/agentscope-ai/QwenPaw/issues/7628) | 6 | 压缩阈值未覆盖完整请求体 |
| Loop 模式不持久化 | [#7377](https://github.com/agentscope-ai/QwenPaw/issues/7377) | 5 | v2.1.0 UI 设置回退 default |

---

## 5. Bug 与稳定性

### 🔴 严重（影响核心功能）

**[#7966](https://github.com/agentscope-ai/QwenPaw/issues/7966)** — 切换 provider 后历史 `file://` 媒体 URL 被拒，导致**会话永久性不可用**
- 触发路径：模型从云端切到 `agentscope` (OpenAI 兼容) 后回退
- 状态：OPEN，**无对应 fix PR**

**[#7968](https://github.com/agentscope-ai/QwenPaw/issues/7968)** — v2.2.2b3 Console 侧栏重构导致聊天分组/文件夹功能失效
- 影响：现有分组不可见，无法新建分组
- 状态：已关闭（**#7972 已合并修复**）✅

**[#7979](https://github.com/agentscope-ai/QwenPaw/issues/7979)** — 云端模型目录被错误套用到本地 llama.cpp，32k 被当成 1M，压缩永不触发
- 触发条件：本地部署 `qwen3.8-27b` 别名匹配云端 `qwen3.8`
- 状态：OPEN，无 fix PR

### 🟡 中等

| Issue | 严重度 | 状态 | Fix PR |
|---|---|---|---|
| [#7856](https://github.com/agentscope-ai/QwenPaw/issues/7856) qwenpaw-pet 0.1.1 破坏 2.2.2b2 工具审批 | 高 | 已关闭 | 已有 |
| [#7576](https://github.com/agentscope-ai/QwenPaw/issues/7576) RetryChatModel 硬编码 32768 context | 高 | 已关闭 | 已有 |
| [#7534](https://github.com/agentscope-ai/QwenPaw/issues/7534) 飞书单 session queue 卡死 | 中 | OPEN | 无 |
| [#7715](https://github.com/agentscope-ai/QwenPaw/issues/7715) Daily Paper 静默失败 | 中 | OPEN | 无 |
| [#7377](https://github.com/agentscope-ai/QwenPaw/issues/7377) Loop 模式不持久 | 中 | OPEN | 无 |
| [#5856](https://github.com/agentscope-ai/QwenPaw/issues/5856) 上下文压缩丢失 tool_call 结构 | 中（陈旧 7-08） | OPEN | 无 |
| [#7850](https://github.com/agentscope-ai/QwenPaw/issues/7850) Driver card 并发写丢更新 | 中 | OPEN | 无 |
| [#7857](https://github.com/agentscope-ai/QwenPaw/issues/7857) ACP shutdown 泄漏 event loop | 中 | OPEN | 无 |
| [#7767](https://github.com/agentscope-ai/QwenPaw/issues/7767) 守卫插件 4 个并发问题 | 中 | OPEN | 无 |

### 🟢 轻量（已被 PR 跟进）
- [#7836](https://github.com/agentscope-ai/QwenPaw/issues/7836) Scroll 淘汰丢 user turn → [#7965](https://github.com/agentscope-ai/QwenPaw/pull/7965) fix(context) 跟进中

---

## 6. 功能请求与路线图信号

### 高优先级 / 高概率进入下版本

| 诉求 | 来源 | 已有 PR | 评估 |
|---|---|---|---|
| **Realtime Voice Chat** | [#7785](https://github.com/agentscope-ai/QwenPaw/pull/7785) | 已提交 11 天，OPEN | 即将合入，与 Chat UI 共用执行路径，架构清晰 |
| **持久化分页会话历史** | [#7931](https://github.com/agentscope-ai/QwenPaw/pull/7931) | OPEN 3 天 | SQLite + 游标，配套会话恢复，预计 2.2.3 |
| **Console 多标签认证终端** | [#7861](https://github.com/agentscope-ai/QwenPaw/pull/7861) | OPEN 7 天 | xterm + lazy load，强化开发者体验 |
| **ReMe 独立记忆模型** | [#7719](https://github.com/agentscope-ai/QwenPaw/pull/7719) | OPEN 13 天 | 显著降低运营成本，社区长期诉求 |
| **Agent 自治式上下文管理** | [#7733](https://github.com/agentscope-ai/QwenPaw/issues/7733) | 仅有 issue | 长期方向，需设计共识 |

### 战略级 / 待评估

- **[#7978](https://github.com/agentscope-ai/QwenPaw/issues/7978) — 跨 Agent "Recent Sessions" 面板** ：聚合所有 agent 会话，便于多 agent 监控切换，与多租户 Hub 方向一致
- **[#7976](https://github.com/agentscope-ai/QwenPaw/issues/7976) — 官方移动端** ：中文社区明确表达诉求（"希望尽快推出"），目前只有非官方 Android 客户端

---

## 7. 用户反馈摘要

### 🔊 真实痛点

1. **"会话切换 = 会话自杀"** —— [#7966](https://github.com/agentscope-ai/QwenPaw/issues/7966) 用户从云端切到本地 OpenAI 兼容端后，因历史中保留 `file://` 媒体 URL，**整个对话无法继续**。反映出 provider 兼容性仍是普通用户最大踩坑点。

2. **"升级 = 倒退"** —— 多名用户在 #7968 反映 2.2.2b3 侧栏改版丢失分组功能，Console 是日常高频使用面，**回归容忍度极低**。

3. **"静默失败最可怕"** —— [#7715](https://github.com/agentscope-ai/QwenPaw/issues/7715) Daily Paper 每天只报"completed with no returned content"，实际是网络不可达。错误信息被吞，用户无法自助排查。

4. **"上下文管理失控"** —— [#7628](https://github.com/agentscope-ai/QwenPaw/issues/7628)、[#7733](https://github.com/agentscope-ai/QwenPaw/issues/7733)、[#7836](https://github.com/agentscope-ai/QwenPaw/issues/7836) 反复出现：**压缩/淘汰由纯 token 阈值驱动，agent 自身无法介入**。长任务用户对"醒来变薄"的体验深感不满。

5. **"飞书生产事故"** —— [#7534](https://github.com/agentscope-ai/QwenPaw/issues/7534) 飞书私聊运行数小时后静默卡死，无 traceback，对**生产环境用户**造成信任损耗。

### 👍 满意信号

- [#4450](https://github.com/agentscope-ai/QwenPaw/issues/4450) `/approve` 简化命令已在 v1.1.7 实现，**陈旧 issue 被关闭**，表明社区历史诉求在被持续消化。
- Hub 32 条评论、4 点赞表明用户对多租户方向**抱持期待**。

---

## 8. 待处理积压提醒

### ⚠️ 长期未关闭的重要 Issue

| Issue | 创建日期 | 现状 |
|---|---|---|
| [#5856](https://github.com/agentscope-ai/QwenPaw/issues/5856) | 2026-07-08 | tool_call 结构丢失导致 400 错误，**80 天+ 未修**，影响 v1.1.12 用户 |
| [#7534](https://github.com/agentscope-ai/QwenPaw/issues/7534) | 2026-09-03 | 飞书静默卡死，**22 天未响应**，生产风险 |
| [#7715](https://github.com/agentscope-ai/QwenPaw/issues/7715) | 2026-09-12 | Daily Paper 静默失败，**13 天无 fix** |
| [#7377](https://github.com/agentscope-ai/QwenPaw/issues/7377) | 2026-08-28 | Loop 模式不持久，**近 30 天** |

### ⚠️ 长期未合并的 PR

| PR | 标题 | 已开 | 风险 |
|---|---|---|---|
| [#7785](https://github.com/agentscope-ai/QwenPaw/pull/7785) | Realtime Voice Chat | 10 天 | 等待 Code Review |
| [#7861](https://github.com/agentscope-ai/QwenPaw/pull/7861) | Console 多标签终端 | 7 天 | UI 影响面大 |
| [#7719](https://github.com/agentscope-ai/QwenPaw/pull/7719) | ReMe 独立模型 | 13 天 | 收益明显 |
| [#7500](https://github.com/agentscope-ai/QwenPaw/pull/7500) | OpenAI extra_headers 转发 | 23 天 | provider 兼容性关键 |

**维护者关注建议：** [#5856](https://github.com/agentscope-ai/QwenPaw/issues/5856) 已超 80 天未修复，涉及核心上下文压缩路径；[#7715](https://github.com/agentscope-ai/QwenPaw/issues/7715) 与 [#7979](https://github.com/agentscope-ai/QwenPaw/issues/7979) 都涉及"**配置缺失导致静默失败**"模式，建议系统性梳理错误传播链。

---

## 健康度评分

| 维度 | 评分 | 说明 |
|---|---|---|
| **活跃度** | ★★★★☆ | Issue/PR 流量高，第一贡献者参与积极（#7967-#7975 来自同一位新贡献者 @lihongyuan99） |
| **响应速度** | ★★★☆☆ | 紧急 bug 修复快（#7972 当日合入），但 80 天积压问题仍存 |
| **稳定性** | ★★☆☆☆ | beta 阶段 Console 回归频发，provider 切换脆弱 |
| **路线图清晰度** | ★★★★☆ | Hub 战略明确，Realtime Voice、持久化历史等大特性排队合入 |
| **社区参与** | ★★★★★ | 多语言讨论、多议题覆盖、新贡献者涌现 |

**总评：** 项目处于**功能扩张期 + 稳定化阵痛期**。2.2.2 正式版发布前，建议优先解决 Console 回归、provider 切换脆弱、上下文管理失控三大问题群。

---

*报告生成时间：2026-09-25 | 数据来源：QwenPaw GitHub Repository*

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/NousResearch/hermes-agent">NousResearch/hermes-agent</a></summary>

<think>The user wants me to generate a daily project report for Hermes Agent based on GitHub data. Let me analyze the data carefully and create a structured report in Chinese.

Key observations from the data:
1. Release: v0.21.5 (v2026.9.24) - patch release rolling up ~460 PRs
2. Issues: 50 total (21 new/active, 29 closed)
3. PRs: 50 total (43 pending, 7 merged/closed)
4. Most issues are Desktop-related (comp/desktop)
5. Many Windows-related bugs
6. Session state bugs are prevalent
7. Top issues discuss Desktop session refresh, update failures, and interrupted-turn markers

Let me structure the report according to the 8 sections requested.</think>

# Hermes Agent 项目动态日报

**报告日期：2026-09-25**
**数据周期：过去 24 小时**
**项目地址：** [github.com/NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent)

---

## 1. 今日速览

Hermes Agent 项目今日维持高强度迭代节奏，单日合并/关闭 7 个 PR 并关闭 29 个 Issue，同时新开 43 个待合并 PR。核心焦点高度集中于 **Hermes Desktop 应用**（约占 Issues 标签 70%）与 **多端会话状态一致性**（sweeper:risk-session-state）。新发布的 **v0.21.5** 是将自 v0.21.4 以来 ~460 个 PR 打包的稳定性 Patch 版本，主要面向 Docker、Cloud 和托管部署的下游消费者。整体来看，项目处于"密集修复 + 桌面端重构"阶段，社区活跃度处于高位，bug 关闭率显著高于积压速率（29 关闭 vs 21 新增），健康度良好。

---

## 2. 版本发布

### 🚀 v0.21.5 (v2026.9.24) — Patch Release

**发布日期：** 2026-09-24

- **版本性质：** Patch（稳定版标签发布）
- **变更规模：** 合并自 v0.21.4 以来的 **~460 个 PR**
- **目标受众：** 下游消费者（Docker 镜像、Hermes Cloud、托管部署）
- **精选说明：** 延期发布（Full curated notes deferred）
- **迁移提示：** 作为 Patch 版本，理论上保持 API 兼容性；但鉴于包含大量变更，下游应重点回归测试 Desktop 应用与会话恢复路径

🔗 [Release v2026.9.24](https://github.com/NousResearch/hermes-agent/releases/tag/v2026.9.24)

---

## 3. 项目进展（今日合并/关闭的重要 PR）

| PR | 标题 | 影响范围 | 链接 |
|---|---|---|---|
| **#122258** | fix(desktop): 忽略自动重复和后聚焦的 Ctrl+W/Ctrl+R | Windows 桌面端键盘事件处理（修复 #105498 残余路径） | [#122258](https://github.com/NousResearch/hermes-agent/pull/122258) |
| **#121684** | fix(desktop): 让 SSH 隔离后端脱离本地 attach 与 update，并在代码版本偏移时退役它们 | 多机 SSH 拓扑下后端归属管理 | [#121684](https://github.com/NousResearch/hermes-agent/pull/121684) |

**进展评估：** 今日进入主线的 PR 数量不多（合并仅 2 条），但质量较高，均针对桌面端在多端、跨平台场景下的关键路径。`sweeper:risk-session-state`、`sweeper:risk-platform-windows` 标签下的高优先级 bug 正在被系统性清理。

---

## 4. 社区热点（高讨论度 Issues）

按评论数排序，反映社区最关切的痛点：

| 排名 | Issue | 评论 | 👍 | 核心诉求 | 链接 |
|---|---|---|---|---|---|
| 1 | **#42962** Desktop 会话从 Telegram 更新后不刷新 | 12 | 0 | 多前端共享同一会话时桌面端实时同步 | [#42962](https://github.com/NousResearch/hermes-agent/issues/42962) |
| 2 | **#44580** `hermes update` 在桌面端构建失败时仍报告成功 | 10 | 0 | 更新流程的诚实反馈 | [#44580](https://github.com/NousResearch/hermes-agent/issues/44580) |
| 3 | **#94778** 自动续写误报：中断轮次标记跨后端无写入身份 | 8 | 0 | 共享 HERMES_HOME 时进程隔离 | [#94778](https://github.com/NousResearch/hermes-agent/issues/94778) |
| 4 | **#60456** `prefill_messages_file` 在桌面端 v0.18.0 被忽略 | 6 | 0 | Desktop agent 路径配置加载一致性 | [#60456](https://github.com/NousResearch/hermes-agent/issues/60456) |
| 5 | **#101318** macOS Desktop 底部 composer 拖拽太容易触发 | 6 | 0 | 可关闭"未停靠"行为 | [#101318](https://github.com/NousResearch/hermes-agent/issues/101318) |
| 6 | **#106217** 恢复活跃 TUI 拥有的会话时桌面端死锁 | 6 | 0 | 会话所有权冲突时提供恢复路径 | [#106217](https://github.com/NousResearch/hermes-agent/issues/106217) |
| 7 | **#88988** Desktop `/compress` 误报 120s 超时 | 5 | **3** | 长时间压缩的真实状态反馈 | [#88988](https://github.com/NousResearch/hermes-agent/issues/88988) |

**社区诉求提炼：**
- **会话状态真相源（Single Source of Truth）**：跨 TUI / Desktop / Telegram / Dashboard 的会话写入应当具备写入身份与广播机制。
- **失败可见性**：用户对"操作静默失败"的容忍度极低（如 update 假装成功、压缩假超时）。
- **跨平台一致性**：Windows、macOS、Linux 在同一行为下的体验差异被反复报告。

---

## 5. Bug 与稳定性

按严重程度（评论数 + 👍 数 + 跨平台影响）排序：

### 🔴 P2 严重 — 会话状态类（高优先级）

| Issue | 状态 | Fix PR | 描述 |
|---|---|---|---|
| **#94778** [OPEN] | OPEN | ❌ | 共享后端中断轮次标记误读导致重复生成轮次 | [#94778](https://github.com/NousResearch/hermes-agent/issues/94778) |
| **#106217** [OPEN] | OPEN | ❌ | 桌面端恢复 TUI 会话时进入不可恢复的死锁错误页 | [#106217](https://github.com/NousResearch/hermes-agent/issues/106217) |
| **#91536** [OPEN] | OPEN | ❌ | 恢复逻辑将垃圾浮点数写入 messages.timestamp 导致 SESSIONS 面板崩溃 | [#91536](https://github.com/NousResearch/hermes-agent/issues/91536) |
| **#120730** [OPEN] | OPEN | ❌ | 桌面端向远程 backend 附图时发送客户端路径而非字节 | [#120730](https://github.com/NousResearch/hermes-agent/issues/120730) |

### 🟠 P2 严重 — Windows / 安装更新类

| Issue | 状态 | Fix PR | 描述 |
|---|---|---|---|
| **#44580** [CLOSED] | CLOSED | ⚠️ 待验证 | `hermes update` 报告成功但 Desktop 构建失败 | [#44580](https://github.com/NousResearch/hermes-agent/issues/44580) |
| **#70544** [CLOSED] | CLOSED | ✅ | Windows 11 Smart App Control 拦截未签名 Hermes Desktop | [#70544](https://github.com/NousResearch/hermes-agent/issues/70544) |
| **#80569** [OPEN] | OPEN | ❌ | Windows Gateway 自启动残留导致更新后重复进程 | [#80569](https://github.com/NousResearch/hermes-agent/issues/80569) |
| **#105498** [CLOSED] | CLOSED | ✅ #122258 | Ctrl+W 跨窗口焦点继承误触发关闭 Tab | [#105498](https://github.com/NousResearch/hermes-agent/issues/105498) |

### 🟡 P2 中等 — Desktop 配置 / 工具 / 体验

| Issue | 状态 | Fix PR | 描述 |
|---|---|---|---|
| **#60456** [OPEN] | OPEN | ✅ #122251 | `prefill_messages_file` 在 Desktop agent 路径被忽略 | [#60456](https://github.com/NousResearch/hermes-agent/issues/60456) |
| **#62213** [OPEN] | OPEN | ❌ | 桌面端无法再配置本地 OpenAI-兼容 provider | [#62213](https://github.com/NousResearch/hermes-agent/issues/62213) |
| **#81564** [OPEN] | OPEN | ✅ #122250 | `hermes serve --status` 隐藏 SSH 后端但 `--stop` 会杀死它们 | [#81564](https://github.com/NousResearch/hermes-agent/issues/81564) |
| **#92888** [OPEN] | OPEN | ❌ | Kanban 后台 worker worktree 污染前台 composer 工作空间 | [#92888](https://github.com/NousResearch/hermes-agent/issues/92888) |
| **#95415** [OPEN] | OPEN | ❌ | Skills 出处误标与归档复生 | [#95415](https://github.com/NousResearch/hermes-agent/issues/95415) |

**稳定性观察：** `sweeper:risk-session-state` 与 `sweeper:risk-platform-windows` 是当前最高密度的失败域，建议在下一个 Patch 版本中集中出清。

---

## 6. 功能请求与路线图信号

### 已提交但尚未合并的功能 PR

| PR | 标题 | 路径 | 路线图信号 |
|---|---|---|---|
| **#122256** | Desktop Capabilities 页：分组可见 + 批量切换 | Desktop UX | 高 — 解决 Skills/Toolsets 大类启用痛点 |
| **#122246** | Google Gemini STT 原生 provider | TTS/STT 集成 | 中 — 多 IM 平台（QQBot/Telegram）需要 STT 统一 |
| **#122245** | `ConfigBackend` 接口 + `FileBackend` 重构所有 `config.yaml` 读写 | 架构基础设施 | 高 — 为后续多 backend / 加密 config 铺垫 |
| **#122269** | 客户端模型覆盖击败 profile 默认时记录日志 | 可观测性 | 中 — 修复 #107410 静默覆盖的可诊断性 |
| **#122247** | QQBot 语音适配器接入中央 STT 流水线 | IM 集成 | 中 — 多平台 STT 统一化的前奏 |

**预判：** #122256、#122245 在下一个 Minor 版本（v0.22.x）极有可能纳入；#122246/#122247 体现的"IM 平台 STT 统一"是清晰的产品方向。

---

## 7. 用户反馈摘要

从高评论 Issues 提炼的真实使用场景：

- **多设备工作者**（#94778, #106217, #120730）：用户在 Desktop 与 TUI/远程 backend 之间切换时频繁遭遇会话状态冲突，期望"我打开的会话就是真相"。
- **Windows 用户**（#70544, #75879, #76167, #105498, #80569）：更新流程、安装、智能应用控制、键盘焦点继承四类问题集中爆发，反映 Windows 桌面端的最后 10% 体验仍需打磨。
- **macOS 用户**（#101318）：底部 composer 误触拖拽被报告，呼吁提供"禁用 detach"开关。
- **大型会话用户**（#88988, #91536）：超过 250K token 的会话在压缩 / 恢复时容易出现数据损坏或 UI 崩溃，长会话可靠性成为高优先级需求。
- **OpenRouter / 自托管用户**（#62213, #68064）：本地 OpenAI-兼容 provider 在 v0.18+ 桌面端的可配置性下降，模型选择列表不全。
- **DevOps 用户**（#87930）：nix 包在 Linux x86_64 上版本错误且构建失败，NixOS 用户期望官方支持。

**满意度信号：** 👍 反应普遍较低（多数为 0），但 #88988 获得 3 👍，表明 `/compress` 超时误导问题在大型会话用户中具有显著共鸣。

---

## 8. 待处理积压（提醒维护者关注）

以下 Issue/PR 创建已久但尚未合并或关闭，建议优先处理：

| 编号 | 类型 | 创建日期 | 等待天数 | 标题 | 链接 |
|---|---|---|---|---|---|
| **#42962** | Bug | 2026-06-09 | ~108 天 | Desktop 会话从 Telegram 更新后不刷新 | [#42962](https://github.com/NousResearch/hermes-agent/issues/42962) |
| **#44580** | Bug | 2026-06-12 | ~105 天 | `hermes update` 在桌面构建失败时仍报告成功 | [#44580](https://github.com/NousResearch/hermes-agent/issues/44580) |
| **#42467** | Bug | 2026-06-09 | ~108 天 | 多 profile 下 Desktop session 列表静默为空 | [#42467](https://github.com/NousResearch/hermes-agent/issues/42467) |
| **#62213** | Bug | 2026-07-10 | ~77 天 | 桌面端无法配置本地 OpenAI 兼容 provider | [#62213](https://github.com/NousResearch/hermes-agent/issues/62213) |
| **#87930** | Bug | 2026-08-16 | ~40 天 | nix linux x86_64 上 hermes-desktop 版本错误且构建失败 | [#87930](https://github.com/NousResearch/hermes-agent/issues/87930) |
| **#60456** | Bug | 2026-07-07 | ~80 天 | `prefill_messages_file` 在 Desktop v0.18.0 被忽略（已有 fix PR #122251） | [#60456](https://github.com/NousResearch/hermes-agent/issues/60456) |
| **#72070** | Bug | 2026-07-26 | ~61 天 | MCP 服务器进程在会话结束时永不清理（标记 duplicate） | [#72070](https://github.com/NousResearch/hermes-agent/issues/72070) |
| **#98682** | Bug | 2026-08-30 | ~26 天 | Nous Portal OAuth 流程死锁（标记 from-pain-miner） | [#98682](https://github.com/NousResearch/hermes-agent/issues/98682) |

**维护建议：**
1. #60456 与 #81564 已有对应 fix PR（#122251、#122250）等待合并，建议优先评审；
2. #42962、#42467、#62213 等超过 60 天未关闭的 P2 bug 建议在下一个 Minor 版本前集中清理；
3. 标记 `from-pain-miner` 的 #98682 反映社区高频痛点，应在周会上独立追踪。

---

## 附录：数据快照

- **Issues 总数（过去 24h）：** 50（新开/活跃 21，关闭 29）
- **PRs 总数（过去 24h）：** 50（待合并 43，已合并/关闭 7）
- **新发布版本：** 1（v0.21.5）
- **合并率：** 14%（50 PR 中 7 进入终态）
- **Issue 关闭率：** 58%（50 Issue 中 29 已关闭）
- **Desktop 相关占比：** 约 70%（Issue 标签维度）

---

*本报告基于 2026-09-25 GitHub 公开数据自动生成，仅供参考。*

</details>

<details>
<summary><strong>OpenHuman</strong> — <a href="https://github.com/tinyhumansai/openhuman">tinyhumansai/openhuman</a></summary>

<think>The user wants me to generate a daily report for the OpenHuman project based on GitHub data. Let me analyze the data carefully and create a structured report in Chinese.

Key observations from the data:
1. 34 Issues updated, 23 new/active, 11 closed
2. 49 PRs updated, 6 pending, 43 merged/closed
3. No new releases
4. High number of P1/P0 issues
5. Many issues related to "TinyAgents update" regressions
6. Several fixes already in PRs

Let me organize this into a comprehensive daily report.

Major themes:
- P0 issue #6608 - Chat fails after assistant-ui-elements refactor (CLOSED, has fix PR #6612/#6622)
- Many TinyAgents hosted runtime regression issues (#6370, #6374, #6375, #6376, #6377, #6379, #6381, #6388, #6389, #6390, #6391)
- Cache prefix issues (#6618 closed, PR #6633 fixes it)
- Sandbox /dev/null issue (#6631 has PR #6636)
- OpenAI transport 429 retry-after (#6504)
- Native module Rust toolchain mismatch (#6614 has PR #6632)

Active contributors:
- @Al629176 (bug reports)
- @senamakel (mostly fixes)
- @M3gA-Mind (test fixes)
- @M3gA-Mind (bug reports)
- @shaurya703 (bug reports)

Let me write the report now.</think>

# OpenHuman 项目日报 · 2026-09-25

---

## 1. 今日速览

OpenHuman 仓库今日呈现**高强度修复日**特征：过去 24 小时 Issues 新开/活跃 23 条、关闭 11 条，PRs 合并/关闭 43 条、待合并仅 6 条，关闭率高达 87.8%。绝大多数提交来自两位核心维护者 `@senamakel` 与 `@M3gA-Mind`，围绕上周合并的 **TinyAgents 升级 + assistant-ui-elements 重构**产生的回归问题集中"灭火"。无新版本发布，整体处于"修 bug → 修测试 → 准备下一次发布"的滚动维护节奏。

- **活跃度评估**：⭐⭐⭐⭐⭐（极高，回归修复集中）
- **健康度提示**：P0 严重事故 1 条已修复；P1 问题 9 条正在通过 PR 流转；测试基础设施同步修复中
- **核心主线**：tinyagents-runtime 重构带来的 hosted runtime / 工具面 / 审批流回归

---

## 2. 版本发布

**无新版本发布**。当前所有变更均直接合并至 `main` 分支，尚未打 tag。鉴于大量 PR 已 CLOSED，预计下一个版本（v0.x 或下一个小版本）将在 CI 全绿后于本周内发布。

---

## 3. 项目进展

### 🚀 关键功能推进
- **[#6634](https://github.com/tinyhumansai/openhuman/pull/6634) Integrate TinyBrowser as a deferred browser module**（已关闭）
  - 用 TinyBrowser 模块适配器替换旧的浏览器后端；引入有界的 Jev `browser(task)` 动作
  - `browser` 与 `browser_open` 延后到 `tool_search` 阶段执行；初始 prompt 简化为简短网站提示；会话跨轮次保留
- **[#6638](https://github.com/tinyhumansai/openhuman/pull/6638) feat: integrate tinydesktop through TinyBus**（仍 OPEN，待合并）
  - 集成 tinydesktop v0.3.0 经由 TinyBus v0.1.2 模块宿主，pin 住 macOS/Windows 归档校验和
- **[#6630](https://github.com/tinyhumansai/openhuman/pull/6630) chore: refresh TinyBus modules and pin new releases**（已关闭，P0）
  - 推进 OpenHuman 及其子模块至含最新 TinyBus 源码与流式回复空闲超时修复的上游版本
  - 为 TinyDocs / TinyWallet / TinyMemory / TinyJuice / TinyVoice / TinyRuntime / Tiny* 等 pin 新版本与 SHA-256

### 🛠 测试基础设施跃升
- **[#6612](https://github.com/tinyhumansai/openhuman/pull/6612) make the e2e suites runnable, type-checked and honestly measured**（已关闭）
  - 新增 `typecheck:e2e` 并接入 CI Lite
  - **205 个 spec 文件此前无任何 lane 做类型检查**，其中藏有 34 处错误（含 7 处空挂的 `@ts-expect-error`）；修复后 230 个文件 0 错误
  - 恢复 15 个被遗忘的 WDIO spec
- **[#6622](https://github.com/tinyhumansai/openhuman/pull/6622)**（已关闭，stacked on #6612）：为 assistant-ui 元素补齐端到端覆盖

### 📦 模块 / 依赖健康度
- **[#6639](https://github.com/tinyhumansai/openhuman/pull/6639) Reconcile module pins and product catalog fixtures**（已关闭）
- **[#6640](https://github.com/tinyhumansai/openhuman/pull/6640) Recalibrate CI Fast dependency gates**（已关闭）
- **[#6641](https://github.com/tinyhumansai/openhuman/pull/6641) Align Rust behavior test fixtures with current runtime**（已关闭）

> 项目整体在一天之内完成了**测试基建加固 + 第三方模块治理 + 浏览器/桌面代理模块化**三大方向，单日推进幅度较大。

---

## 4. 社区热点

| 排名 | 编号 | 主题 | 评论数 | 状态 |
|------|------|------|--------|------|
| 1 | [#6618](https://github.com/tinyhumansai/openhuman/issues/6618) | KV-cache misses on deepseek-v4-flash：prefix 跨轮次变化 | 3 | ✅ 已修复 |
| 2 | [#6617](https://github.com/tinyhumansai/openhuman/issues/6617) | Agent 在 shell 工具上死循环；no-progress nudge 触发于 4/13/19 步 | 3 | ✅ 已修复 |
| 3 | [#6398](https://github.com/tinyhumansai/openhuman/issues/6398) | Playwright connector focus-trap 套件在 test core 退出时不稳定 | 3 | 🔄 进行中 |
| 4 | [#6608](https://github.com/tinyhumansai/openhuman/issues/6608) | **P0**：assistant-ui-elements 重构后聊天报"Something went wrong" | 2 | ✅ 已修复 |
| 5 | [#6504](https://github.com/tinyhumansai/openhuman/issues/6504) | OpenAI 传输丢弃 429 `Retry-After` 头，重试策略无法遵守 | 2 | 🔄 进行中 |

**分析**：今日热点集中在「**模型缓存命中**」「**Agent 行为控制**」「**前端崩溃**」三大类。其中 P0 #6608 的根因非常清晰——前端 refactor 后从未发出 `channel_web_chat` / `chat_stream` RPC，是纯前端层错误，已通过 #6612/#6622 链路修复；#6618 与 #6617 则是典型的"运行时副作用"：nudge 与 steering 消息污染了 prompt-cache 的稳定前缀，PR #6633 已将 prefix 限定为"前两层系统提示 + 工具 schema"，将后续 steering 排除在外。

---

## 5. Bug 与稳定性

### 🔴 P0（严重，已修复）
- **[#6608](https://github.com/tinyhumansai/openhuman/issues/6608)** Chat 全面报错 "Something went wrong"
  - 触发：PR #6604（assistant-ui-elements refactor）commit `fceb0cb96`
  - 修复链路：PR #6612 + #6622 ✅

### 🟠 P1（高优先级）
| Issue | 概述 | Fix PR |
|--------|------|--------|
| [#6631](https://github.com/tinyhumansai/openhuman/issues/6631) | macOS Seatbelt 沙箱阻止 `/dev/null`，所有 `2>/dev/null` 命令失败 | ✅ PR #6636 已修复 |
| [#6613](https://github.com/tinyhumansai/openhuman/issues/6613) | 失败轮次点 Regenerate 无任何反馈 | ✅ PR #6623 已修复 |
| [#6616](https://github.com/tinyhumansai/openhuman/issues/6616) | `vision_agent` 用 `openrouter/qwen/qwen3.7-flash` 但模型不可用 | 🔄 无 fix PR，需更新模型路由 |
| [#6614](https://github.com/tinyhumansai/openhuman/issues/6614) | 启动时 5 个 bundled module 与 host Rust 工具链不匹配（无 ABI 保证） | ✅ PR #6632 已修复（pin 至 Rust 1.96.1） |
| [#6504](https://github.com/tinyhumansai/openhuman/issues/6504) | OpenAI 传输丢弃 429 `Retry-After`；Anthropic 路径正常 | 🔄 暂未合并 |
| [#6379](https://github.com/tinyhumansai/openhuman/issues/6379) | Composio list-tools 回归测试让 hosted worker 栈溢出 | 🔄 |
| [#6388](https://github.com/tinyhumansai/openhuman/issues/6388) | pre-stream 聊天传输失败时仅 watchdog 超时，未提示用户 | 🔄 |
| [#6389](https://github.com/tinyhumansai/openhuman/issues/6389) | 合并 #6349 后，编排器丢失最终合成 | 🔄 |
| [#6391](https://github.com/tinyhumansai/openhuman/issues/6391) | TinyAgents 更新后 cron write 工具缺失审批提示 | 🔄 |
| [#6554](https://github.com/tinyhumansai/openhuman/issues/6554) | agent_harness_e2e 四个审批闸测试 60s 超时 | 🔄 |
| [#6370](https://github.com/tinyhumansai/openhuman/issues/6370) | Delegated registry specialists 在 hosted runtime 中不可用 | 🔄 |
| [#6376](https://github.com/tinyhumansai/openhuman/issues/6376) | Hosted runtime 缺 specialist 工具面 | 🔄 |
| [#6377](https://github.com/tinyhumansai/openhuman/issues/6377) | Turn override fixture 缺 hosted root authority | ✅ PR #6628 已修复 |
| [#6381](https://github.com/tinyhumansai/openhuman/issues/6381) | Flows build JSON-RPC 弧线丢失工作流 proposal | 🔄 |

### 🟡 P2（中等）
- [#6615](https://github.com/tinyhumansai/openhuman/issues/6615) Progress bridge 3s 未排干，但响应仍被发出 → PR #6625 已修复
- [#6618](https://github.com/tinyhumansai/openhuman/issues/6618) KV-cache miss → PR #6633 已修复
- [#6617](https://github.com/tinyhumansai/openhuman/issues/6617) Agent shell 死循环 → PR #6633 修复（cache 修复后 nudge 不再污染 prefix）
- [#6609](https://github.com/tinyhumansai/openhuman/issues/6609) 错误消息把 `<openhuman-link>` 显示为原文（HTML 未渲染）
- [#6374](https://github.com/tinyhumansai/openhuman/issues/6374) 流式托管 turn 估算费用高达 ledger 计费 3 倍
- [#6375](https://github.com/tinyhumansai/openhuman/issues/6375) Hosted TinyAgents 流式回归：丢失轮次延续与类型化失败
- [#6387](https://github.com/tinyhumansai/openhuman/issues/6387) 恢复 worker-b raw web-search coverage → PR #6627 已修复
- [#6390](https://github.com/tinyhumansai/openhuman/issues/6390) channel-bridge cron 审批流回归
- [#6395](https://github.com/tinyhumansai/openhuman/issues/6395) 模型选择器迁移后 Managed catalog Playwright 套件失效 → PR #6629 部分恢复
- [#6396](https://github.com/tinyhumansai/openhuman/issues/6396) Discord Composio modal 桌面 E2E 不稳定 → PR #6626 修复（之前点错了 sidebar 的"Join our Discord"按钮）
- [#6398](https://github.com/tinyhumansai/openhuman/issues/6398) Playwright connector focus-trap → PR #6624（路径可移植）
- [#6602](https://github.com/tinyhumansai/openhuman/issues/6602) `check-linux-tls-dependencies.sh` Sentry 所有权检查永远不触发（grep 反向树列 0 失效）

### 🟢 P3（低）
- [#6364](https://github.com/tinyhumansai/openhuman/issues/6364) feature-gate 转发断言

**总体看**：今日共关闭/合并的 fix PR 中，有 **14 条**对应已存在的 Issue，闭环率良好。但仍有 **约 8 条 P1 长期挂着无 fix PR**，主要聚集在 hosted TinyAgents 工具面/编排器回归集群，是下个冲刺的重点。

---

## 6. 功能请求与路线图信号

虽然今日没有显式的"enhancement"标签 Issue，但以下 PR 暗示了明确的路线图方向：

| 方向 | 信号 | 链接 |
|------|------|------|
| **模块化子系统接入** | tinydesktop、TinyBrowser 通过 TinyBus 模块宿主接入，发布校验和 pin 到 core | [#6638](https://github.com/tinyhumansai/openhuman/pull/6638), [#6634](https://github.com/tinyhumansai/openhuman/pull/6634), [#6630](https://github.com/tinyhumansai/openhuman/pull/6630) |
| **托管计费透明度** | 流式 turn 估算费用偏离 ledger 3 倍（#6374），暗示下一个版本将打通 `openhuman.billing.charged_amount_usd` 真实计费到 UI | [#6374](https://github.com/tinyhumansai/openhuman/issues/6374) |
| **OpenAI 兼容传输鲁棒性** | 429 Retry-After 被丢弃揭示 provider transport 抽象层缺陷，未来会统一 Anthropic / OpenAI 行为 | [#6504](https://github.com/tinyhumansai/openhuman/issues/6504) |
| **测试可观测性** | 205 个 spec 无 type-check lane → `typecheck:e2e` 进入 CI Lite | [#6612](https://github.com/tinyhumansai/openhuman/pull/6612) |
| **Rust 工具链可复现构建** | pin native module 到 Rust 1.96.1 + SHA-256 校验和 | [#6632](https://github.com/tinyhumansai/openhuman/pull/6632) |

---

## 7. 用户反馈摘要

从 Issue 描述与复现路径中可提炼的真实用户痛点：

- 🗣 **"我的聊天发不出去了"**（#6608）：assistant-ui 重构后所有消息即刻失败、UI 无报错。说明前端 regression 直接影响全部 daily 用户，**最痛**。
- 🗣 **"我的 agent 卡在 shell 工具里不动"**（#6617）：steps 4/13/19 三次 nudge 才扭转，但许多用户在 retry cap 前就已耗尽耐心。
- 🗣 **"我的 `2>/dev/null` 命令都跑不了"**（#6631）：shell sandbox 阻止 `/dev/null` 让几乎所有标准 shell 习惯失效，agent 几乎无法做可靠的错误抑制。
- 🗣 **"我看到的费用是实际的 3 倍"**（#6374）：托管计费显示与实际 ledger 不一致，**直接打击付费用户信任**。
- 🗣 **"重试按钮按了没反应"**（#6613）：UI 暴露了不可用的操作，违背 don't-show-actions-you-can't-perform 原则。
- 🗣 **"vision_agent 用了一个不存在的模型"**（#6616）：编排器回退虽能恢复 transcript，但任务失败，体验不完整。
- 🗣 **"我的 Rust 工具链对不上"**（#6614）：ABI 不稳是潜在静默崩溃来源，用户感受到的是"启动时一堆 WRN"。

> **正面信号**：维护者响应速度极快——单日 P0 0 残留，绝大多数高优先级 Issue 当日闭环 PR。

---

## 8. 待处理积压

下列重要 Issue/PR 已开放多日且优先级高，提醒维护者关注：

| 编号 | 标题 | 优先级 | 创建日 | 备注 |
|------|------|--------|--------|------|
| [#6137](https://github.com/tinyhumansai/openhuman/issues/6137) | Controller schemas 缺少 < 64 位整数类型（已 CLOSED 但相关底层问题需关注） | p1 | 09-08 | 已关但根因（`TypeSchema` 无窄类型）需跟踪 |
| [#6370](https://github.com/tinyhumansai/openhuman/issues/6370) | Delegated registry specialists 在 hosted runtime 不可用 | p1 | 09-20 | 与 #6376/#6377 同簇，无 fix PR |
| [#6374](https://github.com/tinyhumansai/openhuman/issues/6374) | 流式托管 turn 估算费用 3x 偏离 | p2 | 09-20 | **影响付费信任**，应优先 |
| [#6376](https://github.com/tinyhumansai/openhuman/issues/6376) | Hosted runtime 缺 specialist 工具面 | p1 | 09-20 | 与 #6370 同一根因 |
| [#6381](https://github.com/tinyhumansai/openhuman/issues/6381) | Flows build JSON-RPC 弧线丢失 proposal | p1 | 09-20 | hosted builder 应保留 `propose_workflow` |
| [#6388](https://github.com/tinyhumansai/openhuman/issues/6388) | pre-stream 失败仅 watchdog 超时 | p1 | 09-20 | 临时缓解：15s 无反馈 |
| [#6389](https://github.com/tinyhumansai/openhuman/issues/6389) | 编排器最终合成丢失 | p1 | 09-20 | 临时缓解：parent 回复中间态 |
| [#639

</details>

---
*本日报由 [Big Model Radar](https://github.com/96loveslife/big_model_radar) 自动生成。*
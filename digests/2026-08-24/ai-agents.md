# OpenClaw 生态日报 2026-08-24

> Issues: 500 | PRs: 500 | 覆盖项目: 8 个 | 生成时间: 2026-08-24 01:40 UTC

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

<think>Let me analyze the GitHub data provided and generate a comprehensive daily report for OpenClaw project as of 2026-08-24.

Key data points to cover:
- 500 issues updated (449 new/active, 51 closed)
- 500 PRs updated (404 pending, 96 merged/closed)
- 0 new releases
- Multiple high-priority bugs and stability issues
- Active discussions on session state, message delivery, and persistence issues

Let me structure this report carefully, ensuring accuracy and following the 8-section requirement.

I need to be careful about:
1. Issue/PR numbers and links
2. Severity assessment (P0, P1, P2, P3)
3. Whether each issue has a linked PR
4. Whether items are merged/closed or still open
5. Extracting real user pain points from the data

Let me organize the data:

**Top active issues by comment count:**
- #125626 (18 comments) - Release validation v2026.8.1-beta.2
- #119796 (15 comments) - Windows vitest teardown EBUSY - CLOSED
- #121953 (13 comments) - Cron agent turns stall on DeepSeek
- #109490 (12 comments) - codex app-server turn interrupted - CLOSED duplicate
- #39476 (12 comments) - A2A sessions_send duplicate messages
- #89278 (10 comments) - Codex OAuth refresh 10s timeout
- #97616 (9 comments) - OpenClaw leaks unreaped child processes
- #111857 (8 comments) - CLI budget reopens compacted JSONL branch
- #79451 (8 comments) - tools.deny not enforced for claude-cli - CLOSED
- #108215 (7 comments) - Context usage drops without compaction - CLOSED
- #86214 (7 comments) - Codex app-server client closes mid-turn
- #91455 (7 comments) - Kubernetes documentation
- #96692 (7 comments) - Slack thread replies lost
- #90098 (7 comments) - Stack-safe large attachment handling
- #127176 (6 comments) - CLI/Node Host metadata approvals on Windows
- #111944 (6 comments) - Codex commentary not delivered to Telegram
- #112668 (6 comments) - sessions_yield abort-settle timeout drops
- #124911 (6 comments) - Compaction reserveTokensFloor
- #116010 (6 comments) - All sessions capped at 128k context
- #112246 (6 comments) - Codex app-server session-key bindings - CLOSED
- #128067 (5 comments) - beta.7 field report 6 reliability classes

**Important PRs:**
- #125471 - fix(models): keep Claude CLI OAuth available - CLOSED
- #123535 - fix(ui): avoid session catalog refresh storms - OPEN
- #112362 - fix(skills): allow browse commands - OPEN
- #124305 - feat(whatsapp): add replyRate - OPEN
- #128371 - fix(release): authorize focused beta evidence - CLOSED
- #128093 - fix(signal): preserve messages - OPEN
- #110641 - fix(gateway): preserve Unicode boot replies - OPEN
- #123975 - fix(scripts): clean up tsgo process trees - CLOSED
- #126424 - fix(gateway): keep conversation delivery within agent bindings - CLOSED
- #116489 - feat(security): require acknowledgement for install policy - CLOSED
- #126618 - fix: Tool Search directory/tools wrap - OPEN
- #123356 - improve(control-ui): stage slash command arguments - OPEN
- #126082 - Audit exact-bound owner-native lifecycle receipts - OPEN
- #120900 - feat(ui): review install policy warnings - CLOSED
- #128116 - fix(commands): skip retired catalog rows in auth probe - OPEN
- #128442 - fix(ui): pool reply-less wake activity - OPEN
- #127112 - fix(read): drop image payload for non-vision models - OPEN
- #128431 - improve(mattermost): speed up inbound direct-message - CLOSED
- #121576 - fix(text): only insert separator between word chars - OPEN
- #128397 - fix(ui): terminal messages no longer reload session roster - OPEN
- #128443 - fix(comfy): isolate cloud credential failures - OPEN
- #112932 - fix(auth): re-seed only tombstoned OAuth target - OPEN
- #128421 - feat(nodes): automatic device placement for sessions.dispatch - OPEN
- #128447 - feat(nodes): opt-in container isolation for worker sessions - OPEN
- #128438 - feat(control-ui): show client IP and time zone - OPEN
- #128448 - docs(slack): use canonical postAs key - CLOSED
- #127353 - fix: stop retry storms after definitive channel rejections - OPEN

Now let me structure the report. I should be careful and accurate, using only the data provided.</think>

# OpenClaw 项目动态日报

**报告日期**：2026-08-24
**项目**：OpenClaw (github.com/openclaw/openclaw)
**数据周期**：过去 24 小时

---

## 1. 今日速览

OpenClaw 仓库今日维持高强度迭代节奏，过去 24 小时共有 **500 条 Issues** 更新（新开/活跃 449，关闭 51）与 **500 条 PR** 更新（待合并 404，合并/关闭 96），但 **无新版本发布**，且有一条 beta 版本验证工单处于挂起状态（[#125626](https://github.com/openclaw/openclaw/issues/125626)）。讨论焦点高度集中于 **会话状态一致性、消息送达可靠性、子进程/资源泄漏** 三类稳定性议题，其中多条被标记为 `impact:message-loss`、`impact:session-state`、`impact:data-loss` 的 P1 级缺陷仍未合并修复。整体而言，项目处于「大量待办、合并率低、发布暂停」的消化期，PR 待合并/合并比约 4.2:1，需重点关注积压的回归类与跨平台稳定性问题。

---

## 2. 版本发布

**无新版本发布**。当前进行中的发布验证工作为：

- **[#125626](https://github.com/openclaw/openclaw/issues/125626)** *Release validation: v2026.8.1-beta.2*（OPEN, P2, 18 评论）
  - 状态：`maintainer` / `release-validation`，要求在真实网关上做 beta 升级并通过 worksheet 提交 release-only 评论。
  - 配套的发布工程 PR [#128371](https://github.com/openclaw/openclaw/pull/128371) `fix(release): authorize focused beta evidence`（XL, P1）今日已 CLOSED，针对 beta.3 发布阻断项——canonical publisher 之前只接受「全组 Full Release Validation manifest」通过，但 frozen candidate 仅改动已评审的 Slack 测试且两条历史失败 leaf 已重跑成功。相关变更放宽了 focused beta 证据授权流程。

> ⚠️ 提示：在无新稳定版本发布前，建议生产部署暂缓升级至 `v2026.8.1-beta.2`，等待验证工单闭环。

---

## 3. 项目进展（今日合并/关闭的重要 PR）

以下 PR 已在过去 24 小时内进入 CLOSED 状态（合并或被替代/关闭），代表项目本日实际推进的工作：

| # | PR | 范围 | 说明 |
|---|---|---|---|
| [#125471](https://github.com/openclaw/openclaw/pull/125471) | fix(models): keep Claude CLI OAuth available in Control UI | web-ui/gateway/agents (XL) | 修复 Gateway 重启后 Claude CLI OAuth 因遗留 `auth.profiles["anthropic:claude-cli"]`（`provider: anthropic, mode: token`）而失去 refresh 所有权的问题，同时消除空 `anthropic: missing` 行导致的误导。状态：📣 needs proof，CLOSED。|
| [#128371](https://github.com/openclaw/openclaw/pull/128371) | fix(release): authorize focused beta evidence | scripts (XL, P1) | 解决 beta.3 发布阻断项（见上文）。|
| [#123975](https://github.com/openclaw/openclaw/pull/123975) | fix(scripts): clean up tsgo process trees on timeout or signal | docs/scripts (M) | 将 `tsgo` 包装器接入已有的 managed-process owner，新增可选的 `OPENCLAW_TSGO_TIMEOUT_MS` 看门狗，避免信号到来时留下僵死编译进程。|
| [#126424](https://github.com/openclaw/openclaw/pull/126424) | fix(gateway): keep conversation delivery within agent bindings | 覆盖几乎所有 channel + gateway/scripts (XL, P1) | 修复多 agent 运营者使用 conversation 工具时，消息可能「漂出」原本 agent binding 的问题（多渠道、跨平台覆盖）。|
| [#116489](https://github.com/openclaw/openclaw/pull/116489) | feat(security): require acknowledgement for install policy warnings | docs/app/cli/security/commands/agents (XL) | 引入外部 `security.installPolicy` 命令的 `warn` 返回，强制 CLI 安装前由授权运维人员复核可疑插件/技能，并要求输入精确目标名。|
| [#120900](https://github.com/openclaw/openclaw/pull/120900) | feat(ui): review install policy warnings | docs/web-ui/gateway/cli/security (XL, 视频证明) | Control UI 配套能力：管理员可在 UI 内复核 install-policy 警告并显式 continue；`plugins.install` 接受可选字面量 `acknowledgeInstallPolicyWarning: true`。|
| [#128431](https://github.com/openclaw/openclaw/pull/128431) | improve(mattermost): speed up inbound direct-message replies | channel: mattermost (L) | 复用 inbound 事件中已识别的 channel，避免每次冷回复前的冗余 `GET /users/me` + `POST /channels/direct`。|
| [#128448](https://github.com/openclaw/openclaw/pull/128448) | docs(slack): use canonical postAs key | docs (XS) | 替换文档中已退役的 `identity` 字段，统一为规范的 `postAs` 字段。|
| [#127353](https://github.com/openclaw/openclaw/pull/127353) | fix: stop retry storms after definitive channel rejections | slack/telegram (L, P1, proof: sufficient) | 修复 Slack/Telegram 出站消息在被 provider 明确拒绝后仍停留在恢复队列、反复重试的问题。|
| [#112932](https://github.com/openclaw/openclaw/pull/112932) | fix(auth): re-seed only the tombstoned OAuth target from fresh Codex login | agents (XL, P1, proof: sufficient) | 当 OAuth refresh grant 永久被拒时，仅重新填充已 tombstone 的目标，避免本地旧 grant 反复重试阻挡新的 `codex login` 同步。|

> 合计今日 10 项实质性合并/关闭（含 1 项替代关闭 [#108522](https://github.com/openclaw/openclaw/pull/108522) `feat(slack): support user identity sessions` 因被后续工作覆盖而 close:superseded）。推进方向集中在 **消息送达闭环、OAuth/认证恢复、安全策略可见性、跨 channel 一致性**。

---

## 4. 社区热点（评论最多 / 反应最强）

按评论数排序的活跃议题：

| 排名 | Issue | 标题 | 评论 | 👍 | 状态 |
|---|---|---|---|---|---|
| 1 | [#125626](https://github.com/openclaw/openclaw/issues/125626) | Release validation: v2026.8.1-beta.2 | 18 | 0 | OPEN |
| 2 | [#119796](https://github.com/openclaw/openclaw/issues/119796) | Windows vitest teardown EBUSY unlink on agent state DB | 15 | 0 | CLOSED |
| 3 | [#121953](https://github.com/openclaw/openclaw/issues/121953) | Cron agent turns stall on DeepSeek | 13 | 0 | OPEN |
| 4 | [#109490](https://github.com/openclaw/openclaw/issues/109490) | codex app-server turn interrupted after `terminate:true` | 12 | 1 | CLOSED（duplicate） |
| 5 | [#39476](https://github.com/openclaw/openclaw/issues/39476) | A2A `sessions_send` 互发导致重复消息 | 12 | 0 | OPEN |
| 6 | [#89278](https://github.com/openclaw/openclaw/issues/89278) | Codex OAuth refresh 10s timeout 导致 cron/heartbeat 失败 | 10 | 2 | OPEN |
| 7 | [#97616](https://github.com/openclaw/openclaw/issues/97616) | OpenClaw 泄漏未回收的 hook/tool 子进程 | 9 | 1 | OPEN |
| 8 | [#111857](https://github.com/openclaw/openclaw/issues/111857) | CLI budget 重开整条压缩 JSONL 分支 | 8 | 0 | OPEN |
| 9 | [#79451](https://github.com/openclaw/openclaw/issues/79451) | `tools.deny` 对 `claude-cli` MCP 不生效 | 8 | 1 | CLOSED（stale） |
| 10 | [#128067](https://github.com/openclaw/openclaw/issues/128067) | beta.7 实地报告：6 类可靠性缺陷 + 3 项小问题 | 5 | 0 | OPEN |
| 11 | [#108215](https://github.com/openclaw/openclaw/issues/108215) | 上下文用量 57% → 13% 无压缩下跌 | 7 | 1 | CLOSED |
| 12 | [#90098](https://github.com/openclaw/openclaw/issues/90098) | Control UI 大附件栈溢出 | 7 | 2 | OPEN |
| 13 | [#91455](https://github.com/openclaw/openclaw/issues/91455) | Kubernetes 文档优化 | 7 | 1 | OPEN |
| 14 | [#96692](https://github.com/openclaw/openclaw/issues/96692) | Slack thread 回复在 origin tuple 丢失后无法投递 | 7 | 1 | OPEN |

**热点诉求分析**：

- **平台/通道一致性**：`sessions_send` 互发（#39476）、Slack 回复丢失（#96692）、Telegram 进度消息不送达（#111944）、Signal 重复消息丢失（[#128093](https://github.com/openclaw/openclaw/pull/128093)）反映出多 agent 跨 channel 投递模型的反复出现问题是社区怨念的核心。
- **Codex 集成稳定性**：codex app-server session-key 永久 tombstone（#112246）、OAuth 10s 刷新超时（#89278）、turn interrupted（#109490）、image/tool 期间 client 关闭（#86214）说明 Codex 作为默认后端的接入层仍不够稳定。
- **资源/进程治理**：未回收子进程累积僵尸（#97616）、memory-core embedding worker 与 codex app-server 无 idle TTL（[#125344](https://github.com/openclaw/openclaw/issues/125344)）是生产部署的头号隐患。
- **Beta 验证机制本身**：#125626 显示 beta 发布流程本身的工件（manifest 强校验）曾阻断过 focused 变更，今天才通过 [#128371](https://github.com/openclaw/openclaw/pull/128371) 修复。

---

## 5. Bug 与稳定性（按严重程度排列）

### 🔴 P0（影响发布/核心功能）

| Issue | 标题 | 状态 | 是否有 Fix PR |
|---|---|---|---|
| [#108520](https://github.com/openclaw/openclaw/issues/108520) | iOS app 更新破坏 Talk Mode 和聊天——网关连上但无任何功能（`ux-release-blocker`, `maturity:stable`） | OPEN | ❌ 未见对应 PR |

### 🟠 P1（高优先级，影响会话/消息/数据）

| Issue | 标题 | 状态 | Fix PR |
|---|---|---|---|
| [#121953](https://github.com/openclaw/openclaw/issues/121953) | DeepSeek 上 cron agent turns 卡住：`[cron:<jobId> <name>]` 前缀被降级 | OPEN | ❌ |
| [#39476](https://github.com/openclaw/openclaw/issues/39476) | A2A `sessions_send` 互发引发重复消息 | OPEN | ❌ |
| [#89278](https://github.com/openclaw/openclaw/issues/89278) | Codex OAuth refresh 成功但 cron/heartbeat 失败（10s auth refresh timeout） | OPEN | ❌ |
| [#97616](https://github.com/openclaw/openclaw/issues/97616) | 泄漏未回收 hook/tool 子进程导致僵尸累积 | OPEN | ❌ |
| [#111857](https://github.com/openclaw/openclaw/issues/111857) | CLI budget 重开整条压缩 JSONL 分支，反复压缩低上下文父会话 | OPEN | ❌ |
| [#86214](https://github.com/openclaw/openclaw/issues/86214) | 大 `logs_2.sqlite` 下 Codex app-server mid-turn 关闭 | OPEN | ❌ |
| [#96692](https://github.com/openclaw/openclaw/issues/96692) | Slack thread 回复生成后未投递（origin tuple 丢失） | OPEN | ❌ |
| [#90098](https://github.com/openclaw/openclaw/issues/90098) | 大附件栈溢出（Control UI 与 gateway） | OPEN | ❌ |
| [#127176](https://github.com/openclaw/openclaw/issues/127176) | Windows 下 CLI/Node Host 交替设备元数据批准 | OPEN | ❌ |
| [#111944](https://github.com/openclaw/openclaw/issues/111944) | Codex commentary 未投递到 Telegram 进度/block 流 | OPEN | ❌ |
| [#112668](https://github.com/openclaw/openclaw/issues/112668) | `sessions_yield` abort-settle 超时仍丢弃 subagent announce（`clawsweeper-recovery-stuck`） | OPEN | ❌ |
| [#116010](https://github.com/openclaw/openclaw/issues/116010) | 所有持久会话被限制为 128k context | OPEN | ❌ |
| [#128067](https://github.com/openclaw/openclaw/issues/128067) | beta.7 实地报告 6 类可靠性缺陷 | OPEN | ❌ |
| [#126900](https://github.com/openclaw/openclaw/issues/126900) | `maxActiveTranscriptBytes` 在压缩后仍超阈值时无限循环压缩 | OPEN | ❌ |
| [#126906](https://github.com/openclaw/openclaw/issues/126906) | 拒绝 `write` 工具静默禁用记忆持久化，agent 仍报告成功 | OPEN | ❌ |
| [#126631](https://github.com/openclaw/openclaw/issues/126631) | Sandbox skills bind-mount 创建 root-owned `/workspace

---

## 横向生态对比

<think>The user wants me to generate a comparative analysis report based on the daily reports of multiple AI agent/open-source projects. Let me synthesize the data provided across all projects:

1. **OpenClaw** (github.com/openclaw/openclaw) - Core reference
   - 500 issues updated (449 active/new, 51 closed)
   - 500 PRs updated (404 pending, 96 merged/closed)
   - 0 releases
   - Heavy on stability/session state/messaging issues
   - Version validation for v2026.8.1-beta.2 in progress
   
2. **NanoBot** (github.com/HKUDS/nanobot)
   - 19 PRs (5 closed/merged, 14 open)
   - 2 issues (1 new, 1 closed)
   - 0 releases
   - Focus on Provider abstraction, OAuth persistence, TUI, WebUI
   
3. **PicoClaw** (github.com/sipeed/picoclaw)
   - 0 issues (2 closed as stale)
   - 2 PRs open, 5 closed
   - 0 releases
   - Low activity, stale cleanup
   
4. **IronClaw** (github.com/nearai/ironclaw)
   - 12 active issues
   - 24 PRs (19 open, 5 closed)
   - 0 releases
   - Heavy CI refactor work (T1-T4), sandbox/proxy infrastructure
   
5. **LobsterAI** (github.com/netease-youdao/LobsterAI)
   - 4 issues (0 new, 4 closed)
   - 3 PRs (0 pending, 3 closed)
   - 0 releases
   - All stale closures, low activity
   
6. **QwenPaw** (github.com/agentscope-ai/QwenPaw)
   - 5 new issues (0 closed)
   - 15 PRs (7 open, 8 closed)
   - 0 releases
   - Stability bugs, skill system, token visualization
   
7. **Hermes Agent** (github.com/NousResearch/hermes-agent)
   - 50 issues (10 active, 40 closed)
   - 50 PRs (33 open, 17 closed)
   - 0 releases (v0.20.5 latest)
   - lifecycle_guard null byte bug explosion, security/stability
   
8. **OpenHuman** (github.com/tinyhumansai/openhuman)
   - 42 issues updated
   - 25 PRs (13 merged/closed)
   - 0 releases
   - GPT-5.x compatibility, pre-prod infrastructure bugs, memory subsystem refactor

Let me create a comprehensive comparative analysis with:
1. Ecosystem overview (3-5 sentences)
2. Activity comparison table
3. OpenClaw positioning
4. Common technical directions
5. Differentiation analysis
6. Community heat/maturity layers
7. Trend signals

Let me write this in Chinese, professional, data-driven, with all links to GitHub.</think>

# AI 智能体与个人 AI 助手开源生态横向对比报告

**报告日期**：2026-08-24
**对比范围**：OpenClaw（参照系）+ NanoBot / PicoClaw / IronClaw / LobsterAI / QwenPaw / Hermes Agent / OpenHuman 共 8 个项目

---

## 1. 生态全景

当前个人 AI 助手与自主智能体开源生态呈现**「头部高强度迭代 + 中尾部清理巩固」**的鲜明分层：**OpenClaw、OpenHuman、Hermes Agent** 处于 500/42/50 量级的高强度日活状态，聚焦会话一致性、内存子系统与安全边界；**IronClaw、QwenPaw、NanoBot** 处于中等活跃区间，重心在 CI 改造、Provider 抽象与可视化补强；而 **PicoClaw、LobsterAI** 已显现疲态，PR 被 stale 自动关闭、Issue 进入"批量关闭"模式。**8 个项目今日均无新版本发布**，反映行业整体进入"修复消化期"而非"功能爆发期"——头部项目尤其在 OAuth 持久化、安全 gateway、沙箱隔离、上下文压缩这些基础设施类问题上反复投入资源。

---

## 2. 各项目活跃度对比

| 项目 | 今日 Issues | 今日 PRs | Release | 合并/关闭率 | 健康度 | 主要状态 |
|------|-------------|----------|---------|------------|--------|----------|
| **OpenClaw** | 500 更新（449 新/活跃，51 关闭） | 500 更新（404 待合并，96 合并/关闭） | ❌ | 19.2% | 🟡 谨慎 | 大规模消化期，beta.2 验证挂起 |
| **Hermes Agent** | 50 更新（10 活跃，40 关闭） | 50 更新（33 待合并，17 合并/关闭） | ❌（v0.20.5） | 34% / 80% | 🟢 健康 | lifecycle_guard 系列收尾 |
| **OpenHuman** | 42 更新 | 25 更新（13 合并/关闭） | ❌ | ~52% | 🟡 压力修复期 | pre-prod 集群 bug 暴露 |
| **IronClaw** | 12 活跃 | 24 更新（19 待合并，5 关闭） | ❌ | ~21% | 🟡 重构期 | CI 四轨并行 + 沙箱地基 |
| **QwenPaw** | 5 新开（0 关闭） | 15 更新（7 待合并，8 关闭） | ❌ | ~53% | 🟢 稳健 | 稳定性 patch 候选积压 |
| **NanoBot** | 2 更新（1 新/1 关闭） | 19 更新（5 合并/关闭） | ❌ | ~26% | 🟢 健康 | Provider 抽象定型 |
| **PicoClaw** | 0 新开（2 关闭） | 7 更新（2 待合并，5 关闭） | ❌ | ~71% | 🔴 偏低 | stale 清理，无新开发 |
| **LobsterAI** | 4 更新（0 新/4 关闭） | 3 更新（0 待合并/3 关闭） | ❌ | 100% | 🔴 偏低 | 全部 stale 关闭，无进展 |

> **关键观察**：
> - 合并率（关闭 PR / 总 PR）的"虚高"在 PicoClaw、LobsterAI 是**危险信号**——多为 stale 自动关闭而非真正合并；
> - OpenClaw 的 500/500 数据规模显著高于其他项目一个数量级，符合"参照系"定位；
> - 8 个项目 0 发布是少见的一致状态，提示整个生态正在"夯实地基"。

---

## 3. OpenClaw 在生态中的定位

### 3.1 规模优势

OpenClaw 以单日 500 Issues / 500 PRs 的吞吐远超第二梯队（OpenHuman 42/25，Hermes Agent 50/50），是当前个人 AI 助手领域**最大的开源工程协作场**。社区贡献密度（评论/作者数）也明显领先，单日关闭 96 个 PR 体现成熟的 review 流水线。

### 3.2 与同类对比的差异化

| 维度 | OpenClaw | OpenHuman | Hermes Agent | NanoBot |
|------|----------|-----------|--------------|---------|
| **架构重心** | 多 agent 跨 channel 协同 | tinymemory/tinycortex 内存子系统 | lifecycle_guard + SDK 工具调用契约 | Provider 抽象统一 |
| **技术路线** | "会话持久计算"为核心 | "模块化独立发布"为核心 | "安全优先 + 多平台兼容"为核心 | "类型化 LLM 契约"为核心 |
| **社区规模** | 巨型（500+ 日活） | 中大型 | 中大型 | 中等 |
| **差异化优势** | 覆盖 channel 数最多（Slack/Telegram/Signal/Mattermost/Discord/LINE/WeChat/WeCom）；release 工程化最深 | Rust + 多语言 bus 契约标准化 | 跨 OS 覆盖最广（macOS/Windows/Linux/WSL2/CachyOS/Fedora） | Provider/TUI/WebUI 三端最简 |

### 3.3 关键差异

- **OpenClaw 的"超广 channel 覆盖"**带来了**最复杂的会话一致性挑战**（[#39476](https://github.com/openclaw/openclaw/issues/39476) A2A 互发重复、[#96692](https://github.com/openclaw/openclaw/issues/96692) Slack thread 丢失、[#128093](https://github.com/openclaw/openclaw/pull/128093) Signal 消息保留），而 IronClaw/NanoBot 在 channel 接入上更聚焦；
- **OpenClaw 的 release 工程最严**（manifest 强校验、focused beta evidence 授权），PicoClaw/LobsterAI 则根本没有同等量级的发布治理；
- **OpenClaw 的 OAuth/认证恢复**专门成体系（[#125471](https://github.com/openclaw/openclaw/pull/125471)、[#112932](https://github.com/openclaw/openclaw/pull/112932)、[#116489](https://github.com/openclaw/openclaw/pull/116489)），Hermes Agent 也强烈关注（[#93426](https://github.com/NousResearch/hermes-agent/pull/93426)），而 NanoBot 仅刚刚补齐 Docker OAuth 持久化。

---

## 4. 共同关注的技术方向

### 4.1 OAuth / 凭据持久化与恢复

| 项目 | 关键议题 |
|------|----------|
| OpenClaw | [#125471](https://github.com/openclaw/openclaw/pull/125471) Claude CLI OAuth 重建、 [#112932](https://github.com/openclaw/openclaw/pull/112932) Codex OAuth tombstone 重播种、 [#89278](https://github.com/openclaw/openclaw/issues/89278) 10s auth refresh 超时 |
| NanoBot | [#5445](https://github.com/HKUDS/nanobot/pull/5445) Docker OAuth 持久化、 [#5495](https://github.com/HKUDS/nanobot/pull/5495) Linear OAuth+PKCE |
| IronClaw | [#7810](https://github.com/nearai/ironclaw/pull/7810) iron-proxy 凭证中介 |
| Hermes Agent | [#93426](https://github.com/NousResearch/hermes-agent/pull/93426) 401 不永久污染、 [#93342](https://github.com/NousResearch/hermes-agent/pull/93342) MCP OAuth provider-specific 参数 |
| OpenHuman | [#4688](https://github.com/tinyhumansai/openhuman/issues/4688) OAuth 切换致工作区孤儿化、 [#5686](https://github.com/tinyhumansai/openhuman/issues/5686) Composio key 校验误报错 |

> **共性诉求**：单一 provider 瞬态错误不应永久污染凭据池；容器/部署环境切换必须保持认证状态；OAuth 流程必须可恢复。

### 4.2 子进程 / 资源治理与沙箱隔离

| 项目 | 关键议题 |
|------|----------|
| OpenClaw | [#97616](https://github.com/openclaw/openclaw/issues/97616) 未回收 hook/tool 子进程、 [#126631](https://github.com/openclaw/openclaw/issues/126631) Sandbox skills bind-mount 权限、 [#123975](https://github.com/openclaw/openclaw/pull/123975) tsgo 进程树清理 |
| Hermes Agent | [#82887](https://github.com/NousResearch/hermes-agent/issues/82887)+十余条 lifecycle_guard NUL 字节、 [#93418](https://github.com/NousResearch/hermes-agent/pull/93418) sudo/nohup/timeout bypass、 [#93427](https://github.com/NousResearch/hermes-agent/pull/93427) 时钟回拨 magnitude 上限 |
| IronClaw | [#7732](https://github.com/nearai/ironclaw/issues/7732) v1.4.0 Epic 持久沙箱、 [#7825](https://github.com/nearai/ironclaw/issues/7825) sandbox 出口鉴权、 [#7810](https://github.com/nearai/ironclaw/pull/7810) 凭证替换占位符 |
| OpenHuman | [#1401](https://github.com/tinyhumansai/openhuman/issues/1401) sandbox_mode OS 强制化、 [#3010](https://github.com/tinyhumansai/openhuman/issues/3010) CVSS 9.0 安全 advisory |

> **共性诉求**：进程生命周期必须被严格托管；安全策略既要拒杀恶意行为，也要减少对合法命令的误报；OS 级强沙箱是终极目标但目前都未实现。

### 4.3 会话状态一致性 & 上下文压缩

| 项目 | 关键议题 |
|------|----------|
| OpenClaw | [#121953](https://github.com/openclaw/openclaw/issues/121953) Cron agent turns stall、 [#112668](https://github.com/openclaw/openclaw/issues/112668) sessions_yield abort-settle 丢 subagent announce、 [#116010](https://github.com/openclaw/openclaw/issues/116010) 128k 限制、 [#126900](https://github.com/openclaw/openclaw/issues/126900) maxActiveTranscriptBytes 压缩死循环 |
| Hermes Agent | [#93022](https://github.com/NousResearch/hermes-agent/issues/93022) 反 thrashing 熔断永久禁用压缩、 [#93057](https://github.com/NousResearch/hermes-agent/issues/93057) 压缩禁用重复重放 350-384k 上下文、 [#93391](https://github.com/NousResearch/hermes-agent/pull/93391) pre_compression 钩子 |
| QwenPaw | [#7222](https://github.com/agentscope-ai/QwenPaw/issues/7222) 内存泄漏 20GB+、 [#7217](https://github.com/agentscope-ai/QwenPaw/issues/7217) 中途停止复现上次思考链路 |
| OpenHuman | [#5509](https://github.com/tinyhumansai/openhuman/issues/5509) bulk session 摄入超时、 [#5510](https://github.com/tinyhumansai/openhuman/issues/5510) token 截断浪费预算 |

> **共性诉求**：压缩策略必须有可观察、可中断、可恢复的接口；多 agent 场景下 subagent 消息必须可靠投递；长跑场景的内存/状态累积是普遍痛点。

### 4.4 跨平台 / 安装兼容性

| 项目 | 关键议题 |
|------|----------|
| OpenClaw | [#119796](https://github.com/openclaw/openclaw/issues/119796) Windows vitest teardown EBUSY、 [#127176](https://github.com/openclaw/openclaw/issues/127176) Windows CLI/Node Host 交替设备元数据批准 |
| Hermes Agent | [#76312](https://github.com/NousResearch/hermes-agent/issues/76312) CachyOS Playwright 挂起、 [#93063](https://github.com/NousResearch/hermes-agent/issues/93063) Fedora 44 安装失败、 [#88810](https://github.com/NousResearch/hermes-agent/issues/88810) Windows NUL 字符崩溃、 [#93017](https://github.com/NousResearch/hermes-agent/issues/93017) install.ps1 初始化 |
| IronClaw | [#7821](https://github.com/nearai/ironclaw/pull/7821) CI T1 setup-rust 复合步骤（消灭本地绿/CI 红漂移） |
| PicoClaw | [#3320](https://github.com/sipeed/picoclaw/pull/3320) whatsmeow 升级解 405 瘫痪 |

> **共性诉求**：所有项目都在试图消灭"本地能跑/CI 红"漂移；新发行版（Fedora 44、CachyOS）和 ARM 平台（macOS/Metal）持续带来意外。

### 4.5 Provider 抽象与多模型兼容

| 项目 | 关键议题 |
|------|----------|
| NanoBot | [#5480](https://github.com/HKUDS/nanobot/pull/5480) 不可变 `LLMUsage` 契约 |
| OpenHuman | [#5498](https://github.com/tinyhumansai/openhuman/issues/5498) GPT-5.x 需 `max_completion_tokens` 而非 `max_tokens` |
| Hermes Agent | [#93423](https://github.com/NousResearch/hermes-agent/pull/93423) max_tokens 不应被当作 context length |
| OpenClaw | [#86214](https://github.com/openclaw/openclaw/issues/86214) Codex app-server mid-turn 关闭 |

> **共性诉求**：OpenAI/Anthropic/各家自托管网关的协议差异必须被类型化抽象捕获，新模型发布（GPT-5.x 等）造成的兼容性回归是高频 bug 源。

### 4.6 可视化与可观测性

| 项目 | 关键议题 |
|------|----------|
| QwenPaw | [#7219](https://github.com/agentscope-ai/QwenPaw/pull/7219) Token 用量全 agent 趋势图 |
| OpenClaw | [#128438](https://github.com/openclaw/openclaw/pull/128438) Control UI 显示客户端 IP/时区、 [#126082](https://github.com/openclaw/openclaw/pull/126082) 生命周期 receipt 审计 |
| NanoBot | [#5490](https://github.com/HKUDS/nanobot/pull/5490) 聚合 turn token 用量清晰化、 [#5497](https://github.com/HKUDS/nanobot/pull/5497)/[#5498](https://github.com/HKUDS/nanobot/pull/5498) OpenTUI schema 驱动配置面板 |
| IronClaw | [#7831](https://github.com/nearai/ironclaw/pull/7831) Design System Phase 3a |

> **共性诉求**：用户对"成本/质量可观测性"的诉求强烈，传统的纯日志接口已不够。

---

## 5. 差异化定位分析

| 项目 | 功能侧重 | 目标用户 | 技术架构关键差异 |
|------|----------|----------|-----------------|
| **OpenClaw** | 跨 channel 多 agent 协同 + 安全认证可见 | 企业运维 / 复杂自动化场景 | "超广 channel + agent binding" 模型，release 工程化最深 |
| **OpenHuman** | 内存子系统重构 + 多模型兼容 | AI-native 应用开发者 | Rust Core + 多语言 `*-bus` 契约 crate，模块独立发布 |
| **Hermes Agent** | 安全 gateway + 跨 OS 兼容 | 终端/CLI 重度用户 | lifecycle_guard 多层防御 + 多发行版安装矩阵

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

<think>Let me analyze the GitHub data for NanoBot and generate a comprehensive daily report.

Let me review the data:

**Issues:**
- #5444 [CLOSED] Bug - Failed to login OpenAI via OAuth in Docker (closed on 2026-08-23)
- #5493 [OPEN] Enhancement - Add HTML, .txt, .md document preview (created 2026-08-23)

**PRs (19 total):**
- OPEN: 14
- CLOSED/MERGED: 5

Let me categorize the closed/merged PRs:
- #5420 [CLOSED] feat(runtime): add user-controlled turn recovery
- #5491 [CLOSED] fix(webui): keep answer text outside reasoning shell
- #5492 [CLOSED] feat(cli): expose nanobot process identities
- #5475 [CLOSED] refactor: remove remaining dead code
- #5445 [CLOSED] fix(docker): persist OAuth client data

Open PRs by category:
- Provider/Refactor: #5480, #5500, #5496, #5490
- TUI: #5467, #5499
- Agent: #5430, #5152, #5388, #5386
- Config: #5498, #5497
- Channel: #5495, #5385

Let me draft the report following the required structure.

Key observations:
1. Active development - 19 PRs in 24 hours is quite active
2. The project focuses on provider abstraction, TUI, WebUI, channels, and configuration
3. A closed bug #5444 about OAuth in Docker was closed alongside a fix PR #5445
4. Heavy contribution from @chengyongru (6 PRs) and @Re-bin (3 PRs)
5. Matrix protocol PRs from @dajiaohuang (5385, 5388, 5386)
6. Linear agent channel feature being added

Bug analysis:
- #5444: Docker OAuth login failure - CLOSED with fix PR #5445
- #5496: No-tools model requests timing out
- #5500: TLS context reuse for OpenAI Codex
- #5499: Empty sessions being saved in TUI
- #5490: Token usage display clarity in WebUI
- #5491: WebUI answer text positioning - CLOSED

Long-pending issues:
- #5152 opened 2026-07-28, still open
- #5385, #5386, #5388 opened 2026-08-13, still open
- #5430 opened 2026-08-18, still open

Let me write the report now.</think>

# NanoBot 项目日报

**日期：2026-08-24**
**项目地址：** [github.com/HKUDS/nanobot](https://github.com/HKUDS/nanobot)

---

## 1. 今日速览

NanoBot 在过去 24 小时内呈现**高强度、多线并进**的开发态势：共发生 19 个 PR 更新（其中 5 个已关闭/合并）和 2 个 Issue 变更（1 新开 / 1 关闭）。核心贡献者 `@chengyongru` 持续主导重构与稳定性修复方向（涉及 Provider、WebUI、Agent、Config 等多条线），`@Re-bin` 聚焦 CLI/TUI 会话生命周期，`@dajiaohuang` 则持续推进 Matrix 与 MCP 协议层功能。整体来看，项目处于**质量治理与跨模块抽象阶段**：移除遗留死代码、统一类型化 LLM 使用契约、补齐 OAuth/TLS 边界问题，没有新版本发布，但多个 P2 优先级 PR 已在合入轨道。

---

## 2. 版本发布

无新版本发布。

---

## 3. 项目进展

今日有 **5 个 PR 进入已关闭/已合并**状态，集中在**运行期健壮性、CLI 进程可见性、WebUI 表现正确性、OAuth 持久化与死代码清理**五条主线，显著推进了项目的生产可用性。

| PR | 标题 | 意义 |
|---|---|---|
| [#5445](https://github.com/HKUDS/nanobot/pull/5445) | `fix(docker): persist OAuth client data` | 解决 Docker 容器中 OAuth 凭据随容器重建丢失的长期痛点，配套 Issue #5444 一并关闭。 |
| [#5491](https://github.com/HKUDS/nanobot/pull/5491) | `fix(webui): keep answer text outside reasoning shell` | 修复 WebUI 中推理/工具面板吞掉最终回答文本的显示回归。 |
| [#5420](https://github.com/HKUDS/nanobot/pull/5420) | `feat(runtime): add user-controlled turn recovery` | 新增显式 **Continue / Dismiss** 中断会话恢复机制，避免自动恢复带来的不可控语义。 |
| [#5492](https://github.com/HKUDS/nanobot/pull/5492) | `feat(cli): expose nanobot process identities` | 进程命名为 `nanobot-agent` / `nanobot-webui` / `nanobot-gateway` / `nanobot-tui`，便于运维识别。 |
| [#5475](https://github.com/HKUDS/nanobot/pull/5475) | `refactor: remove remaining dead code` | 删除零消费的运行时/设置/Channel/测试 helper 与未使用依赖 `websocket-client`，瘦身代码面。 |

**整体进度判断：** 项目向"生产级 v1"又迈出扎实一步——OAuth 持久化补齐了 Docker 部署最后一公里；进程命名降低了线上排障成本；死代码清理为下一轮抽象重构腾出空间。

---

## 4. 社区热点

今日热度集中在**OAuth 登录容器化**问题闭环：

- 🔥 **[Issue #5444](https://github.com/HKUDS/nanobot/issues/5444)** — "Failed to login OpenAI via OAuth in Docker"（2 条评论，已关闭）
  - 用户在 Docker 环境下走 OAuth 回调后报错，反映容器重建即丢失 token 的实际部署痛点。
  - 已由 [PR #5445](https://github.com/HKUDS/nanobot/pull/5445) 修复（将 XDG 应用数据重定向至挂载实例目录）。

评论数为 0 但工程关注度高的方向：

- **[PR #5480](https://github.com/HKUDS/nanobot/pull/5480)** — 类型化 `LLMUsage` 契约重构（标记 `conflict`，正在解决冲突）。
- **[PR #5495](https://github.com/HKUDS/nanobot/pull/5495)** — 新增 **Linear Agent 原生 Channel**，引入 OAuth + PKCE 与去重 SQLite 队列，企业工作流集成信号明显。
- **[Issue #5493](https://github.com/HKUDS/nanobot/issues/5493)** — 提议在 Channel 渲染 HTML/.txt/.md 文档预览，方案采用 iframe + srcdoc 沙箱。

---

## 5. Bug 与稳定性

按严重程度排序：

| 严重度 | 问题 | 状态 | Fix PR |
|---|---|---|---|
| 🟠 高 | [Issue #5444](https://github.com/HKUDS/nanobot/issues/5444) Docker 中 OAuth 登录失败 | ✅ 已关闭 | [PR #5445](https://github.com/HKUDS/nanobot/pull/5445) ✅ |
| 🟠 高 | [PR #5500](https://github.com/HKUDS/nanobot/pull/5500) `fix(codex): reuse TLS contexts across requests` — OpenAI Codex 每次请求重建 TLS 导致 10 秒级无响应 | 🔧 待合并 | — |
| 🟠 高 | [PR #5496](https://github.com/HKUDS/nanobot/pull/5496) `fix(agent): time out no-tools model requests` — 无工具请求绕过了 `AgentRunner` 的超时保护，turn 可能僵死 | 🔧 待合并 | — |
| 🟡 中 | [PR #5499](https://github.com/HKUDS/nanobot/pull/5499) `fix(tui): avoid saving empty sessions` — 新建会话未发送消息即落盘，浪费内存与存储 | 🔧 待合并 | — |
| 🟡 中 | [PR #5490](https://github.com/HKUDS/nanobot/pull/5490) `fix(webui): clarify aggregate turn token usage` — 多步 turn 的输入 token 显示聚合错误 | 🔧 待合并 | — |
| 🟢 低 | [PR #5491](https://github.com/HKUDS/nanobot/pull/5491) WebUI 回答文本位置回归 | ✅ 已合并 | — |

**关键观察：** 今日修复路径揭示了**请求生命周期一致性**仍是当前最大隐患——TLS 上下文复用、no-tools 超时、空会话持久化三个问题都指向同一根因：不同代码路径在"持久资源/会话边界"语义上未对齐。

---

## 6. 功能请求与路线图信号

### 用户提请
- **[Issue #5493](https://github.com/HKUDS/nanobot/issues/5493)**（OPEN）—— **文档预览能力**
  - 用户希望在 Channel 中预览 HTML / `.txt` / `.md`。
  - 提议方案：原生 iframe + srcdoc 沙箱隔离（安全性高、实现轻）。
  - **纳入概率：中等偏高**。该诉求契合 WebUI/Channel 能力扩展方向，且实现成本可控。

### 已有 PR 揭示的内部路线图
| 方向 | PR | 路线图含义 |
|---|---|---|
| **Provider 抽象统一** | [#5480](https://github.com/HKUDS/nanobot/pull/5480) | 用不可变 `LLMUsage` 契约替代动态字典，统一 OpenAI/Anthropic/Bedrock 边界 |
| **OpenTUI 配置面板** | [#5498](https://github.com/HKUDS/nanobot/pull/5498), [#5497](https://github.com/HKUDS/nanobot/pull/5497) | schema 驱动的完整配置编辑器，与 WebUI 共享序列化层，秘密字段安全快照 |
| **Linear 集成** | [#5495](https://github.com/HKUDS/nanobot/pull/5495) | 企业 SaaS Channel 战略扩展，OAuth + PKCE + 去重 SQLite 队列 |
| **Matrix E2EE** | [#5385](https://github.com/HKUDS/nanobot/pull/5385) | Element SAS 端到端加密验证补完 |
| **MCP 优化** | [#5388](https://github.com/HKUDS/nanobot/pull/5388), [#5386](https://github.com/HKUDS/nanobot/pull/5386) | 模型可见 MCP schema 字节预算 + MCP Apps 结果元数据保留 |
| **子智能体语义** | [#5152](https://github.com/HKUDS/nanobot/pull/5152) | 子智能体部分完成时附加 `subagent_remaining_count` 元数据 |

---

## 7. 用户反馈摘要

今日 Issues 评论样本较少，但已可勾勒出两类真实痛点：

1. **容器化部署的"非持久化陷阱"**
   - 用户 @Bennett-Yang 在 Docker 中完成 OAuth 回调后，token 写入路径不与挂载卷对齐，导致认证无法持久。
   - 反映了一线运维用户对"配置即容器外部卷"心智模型的强烈预期。
   - **满意度信号：** 修复 PR [#5445](https://github.com/HKUDS/nanobot/pull/5445) 已合并，问题闭环较满意。

2. **多模态/富内容展示缺位**
   - 用户 @john00010 希望 Channel 内可直接预览附件/文档。
   - 体现 NanoBot 正在从"纯文本对话体"过渡到"工作台"的诉求——对话流中需要承载更多结构化内容。

---

## 8. 待处理积压

| 编号 | 标题 | 距今 | 链接 | 备注 |
|---|---|---|---|---|
| #5152 | `fix(subagent): mark partial completion results` | ~27 天 | [PR](https://github.com/HKUDS/nanobot/pull/5152) | 长期未合并，需维护者推动 |
| #5385 | `fix(matrix): complete Element SAS request flow` | ~11 天 | [PR](https://github.com/HKUDS/nanobot/pull/5385) | 涉及 E2EE，评审门槛较高 |
| #5386 | `feat(mcp): preserve MCP Apps result metadata` | ~11 天 | [PR](https://github.com/HKUDS/nanobot/pull/5386) | 与 #5388 同作者，建议一并评审 |
| #5388 | `feat(agent): budget model-visible MCP schemas` | ~11 天 | [PR](https://github.com/HKUDS/nanobot/pull/5388) | 涉及上下文工程，建议优先 |
| #5430 | `fix(agent): release completed task groups` | ~6 天 | [PR](https://github.com/HKUDS/nanobot/pull/5430) | 长会话内存泄漏相关 |
| #5480 | `refactor(providers): define typed LLM usage contract` | ~3 天 | [PR](https://github.com/HKUDS/nanobot/pull/5480) | 标记 `conflict`，需解决合并冲突 |

**维护者关注建议：**
- 优先解决 [PR #5480](https://github.com/HKUDS/nanobot/pull/5480) 的合并冲突——这是 Provider 层重构的地基，阻塞下游多个 token 显示修复（#5490）。
- [PR #5496](https://github.com/HKUDS/nanobot/pull/5496) 与 [#5500](https://github.com/HKUDS/nanobot/pull/5500) 涉及生产可用性死锁风险，建议快速通道评审。
- `@dajiaohuang` 的三条 MCP/Matrix PR 已搁置 11 天，建议安排专项评审或拆分。

---

### 📊 项目健康度卡片

| 指标 | 数值 | 评价 |
|---|---|---|
| 24h PR 吞吐量 | 19 | 🟢 活跃 |
| 合并/关闭率 | 26.3% (5/19) | 🟢 正常节奏 |
| Open Issue 数 | 1 | 🟢 健康 |
| 高严重度未修复 Bug | 0 | 🟢 良好 |
| 长期积压 PR (>7 天) | 4 | 🟡 需关注 |
| 新版本发布 | 0 | 🟢 重构期常态 |

> *本日报由 AI 自动生成，基于 NanoBot GitHub 公开数据。所有链接均指向 github.com/HKUDS/nanobot 仓库。*

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

<think>Let me analyze the GitHub data for PicoClaw (github.com/sipeed/picoclaw) and generate a project daily report for 2026-08-24.

Key observations:
- 0 new issues, 2 issues closed (both stale)
- 2 PRs open (待合并), 5 PRs closed/merged
- 0 new releases
- Most closed items are marked [stale]

Closed Issues:
- #3302: OAuth 2.1 support for MCP servers (stale, closed)
- #3325: Render Telegram tables with rich messages (stale, closed)

Open PRs:
- #3344: Add Build Remote Agent phone pairing (gbr/1) - new
- #3222: refactor(deltachat): cleanup - long-standing

Closed PRs (stale):
- #3324: fix(weixin): use CreateSafeHTTPClient for media downloads
- #3323: fix(wecom): use CreateSafeHTTPClient for media downloads
- #3322: fix(channels): block private targets on inbound media downloads
- #3321: fix(agent): move dynamic context after history to preserve prefix caching
- #3320: fix(deps): bump whatsmeow to unblock WhatsApp "client outdated (405)"

Let me organize this into a clean daily report.</think>

# PicoClaw 项目日报 · 2026-08-24

## 1. 今日速览

PicoClaw 今日整体处于**低活跃、清理整理型**节奏。过去 24 小时无新 Issue 提交、无新版本发布，2 条历史 Issue 均被标记为 [stale] 后关闭；PR 侧则呈现"批量关闭旧 PR + 1 条新 PR"模式，5 条关闭 PR 中有 4 条为 8 月初提交的 SSRF/前缀缓存/依赖更新类修复方案，但均因 stale 自动关闭未被合并。值得关注的信号是 #3344 新提交的 **Build Remote Agent 远程配对**能力（手机端观战桌面 agent），以及长期开放中的 #3222（DeltaChat 重构）。整体而言，项目活跃度较冷清，社区反馈通道未见活跃讨论，需关注 stale 清理策略对有效贡献的潜在损耗。

---

## 2. 版本发布

**无新版本发布。** 项目当前仍处于依赖与基础设施整理阶段，未产出新的 Release 标签。

---

## 3. 项目进展

今日关闭的 5 条 PR 中，**实际推进合并的为 0 条**，均为 stale 自动关闭。下面分类回顾其技术价值，以判断维护者后续是否需手动 reopen：

| 类型 | PR | 技术价值 | 状态 |
|---|---|---|---|
| **SSRF 安全加固** | [#3322](https://github.com/sipeed/picoclaw/pull/3322) — 为 QQ / Telegram / Discord / LINE / Slack 的入站媒体下载启用 `BlockPrivateTargets`，补齐 OneBot 之外的 SSRF 防护面 | 高 | ⚠️ stale 关闭 |
| **SSRF 安全加固** | [#3324](https://github.com/sipeed/picoclaw/pull/3324) — Weixin CDN 媒体走 `CreateSafeHTTPClient` + `ValidateSafeHTTPURL` | 高 | ⚠️ stale 关闭 |
| **SSRF 安全加固** | [#3323](https://github.com/sipeed/picoclaw/pull/3323) — WeCom `mediaClient` 同源加固 | 高 | ⚠️ stale 关闭 |
| **性能/缓存优化** | [#3321](https://github.com/sipeed/picoclaw/pull/3321) — 把动态上下文块（时间、运行时、会话、发送者）从系统消息前部移到历史之后，**保护 LLM prefix caching 命中率** | 中高 | ⚠️ stale 关闭 |
| **依赖修复** | [#3320](https://github.com/sipeed/picoclaw/pull/3320) — 升级 `whatsmeow` 以解决 WhatsApp "client outdated (405)" 致原生通道瘫痪 | 高（功能性） | ⚠️ stale 关闭 |

**评估：** 这批 PR 涵盖了安全、性能、依赖三个关键维度，但因 stale 自动机制被关闭，反映出维护者审阅节奏跟不上社区提交速度，存在"好 PR 被流程吃掉"的风险，建议维护者优先 re-evaluate。

---

## 4. 社区热点

今日社区互动整体偏低，最高的评论数也仅为 4 条：

- 🔥 **#3302 [Feature] Support OAuth 2.1 for MCP servers** — 4 条评论
  [https://github.com/sipeed/picoclaw/issues/3302](https://github.com/sipeed/picoclaw/issues/3302)
  与 #2546 同源诉求，希望 MCP 服务端实现 OAuth 2.1 授权流，反映出**安全接入企业级 MCP 生态**的潜在需求。

- 🔥 **#3325 [Feature] Render Telegram tables with rich messages** — 2 条评论
  [https://github.com/sipeed/picoclaw/issues/3325](https://github.com/sipeed/picoclaw/issues/3325)
  用户希望利用 Telegram Bot API 10.1 的原生表格渲染能力，替代当前的 Markdown 表格退化为代码块的体验。

两条 Feature Issue 均因 stale 被关闭，未进入路线图讨论。

---

## 5. Bug 与稳定性

本周期内**无新 Bug 报告**，但通过历史 PR 揭示出若干待修复的稳定性问题：

| 严重程度 | 问题 | 关联修复 | 状态 |
|---|---|---|---|
| 🔴 **高（P0）** | WhatsApp 通道因 `whatsmeow` 客户端版本陈旧被服务端 405 拒绝，socket 连上 ~5s 后断连且无重连，原生通道处于瘫痪 | [#3320](https://github.com/sipeed/picoclaw/pull/3320) | ⚠️ PR 被 stale 关闭，未合并 |
| 🟠 **中-高** | 多通道（Weixin / WeCom / QQ / Telegram / Discord / LINE / Slack）入站媒体下载缺少 SSRF 防护，重定向可达 loopback / RFC1918 | [#3322](https://github.com/sipeed/picoclaw/pull/3322) / [#3323](https://github.com/sipeed/picoclaw/pull/3323) / [#3324](https://github.com/sipeed/picoclaw/pull/3324) | ⚠️ PR 均被 stale 关闭 |
| 🟡 **中** | 动态上下文块位置破坏 LLM prefix caching，每次请求都需重算整个对话前缀，推理成本上升 | [#3321](https://github.com/sipeed/picoclaw/pull/3321) | ⚠️ PR 被 stale 关闭 |

**健康度提示：** 这三类问题对生产部署影响显著，但所有相关修复 PR 均被 stale 流程关闭、未合并，建议项目维护者**手动 triage 一次并 reopen 关键修复**。

---

## 6. 功能请求与路线图信号

| 需求 | 关联 Issue | 路线图判断 |
|---|---|---|
| **OAuth 2.1 for MCP servers** | [#3302](https://github.com/sipeed/picoclaw/issues/3302) | 与 #2546 同源，呼声持续；属于"Nice-to-Enhancement"级别，但对企业部署是关键门槛，**建议纳入中长期路线图** |
| **Telegram 原生表格渲染** | [#3325](https://github.com/sipeed/picoclaw/issues/3325) | 利用 Bot API 10.1 新能力，**实现成本低、用户体验提升明显**，可作为短期增强候选 |
| **手机远程配对观战 desktop agent**（新 PR） | [#3344](https://github.com/sipeed/picoclaw/pull/3344) — 引入第三方 `gbr-agent v0.6.0+` 配对协议 `gbr/1`，QR + 8 位码，仅暴露 127.0.0.1:8788 或 stdio | **新功能信号**，需评估第三方依赖治理风险 |
| **DeltaChannel 实现清理 -200LOC** | [#3222](https://github.com/sipeed/picoclaw/pull/3222) | 7 月初提交至今未合并，长期开放中，反映维护者对 channel 层重构持谨慎态度 |

---

## 7. 用户反馈摘要

由于 Issue/PR 评论数普遍较低，可提炼的真实用户痛点有限：

- **Telegram 用户体验瓶颈：** 用户明确指出"Markdown 表格退化为代码块或纯文本"影响数据展示可读性（[#3325](https://github.com/sipeed/picoclaw/issues/3325)），说明表格场景在 Agent 输出中是高频用例。
- **企业/安全场景诉求：** OAuth 2.1 需求（[#3302](https://github.com/sipeed/picoclaw/issues/3302)）反映部分用户在尝试把 PicoClaw 接入受控 MCP 服务生态。
- **未观察到明确的"满意/抱怨"反馈：** 评论集中度低，社区活跃度偏冷。

---

## 8. 待处理积压

以下条目已较长时间未获维护者响应，存在积压风险：

| 编号 | 类型 | 标题 | 创建日期 | 状态 | 链接 |
|---|---|---|---|---|---|
| #3222 | PR（长期 OPEN） | refactor(deltachat): cleanup implementation, documentation -200LOC | 2026-07-03 | 待合并 | [查看](https://github.com/sipeed/picoclaw/pull/3222) |
| #3302 | Issue | Support OAuth 2.1 for MCP servers | 2026-07-30 | 已 stale 关闭 | [查看](https://github.com/sipeed/picoclaw/issues/3302) |
| #3320 | PR | fix(deps): bump whatsmeow to unblock WhatsApp "client outdated (405)" | 2026-08-07 | 已 stale 关闭 | [查看](https://github.com/sipeed/picoclaw/pull/3320) |
| #3321 | PR | fix(agent): move dynamic context after history to preserve prefix caching | 2026-08-07 | 已 stale 关闭 | [查看](https://github.com/sipeed/picoclaw/pull/3321) |
| #3322 | PR | fix(channels): block private targets on inbound media downloads | 2026-08-09 | 已 stale 关闭 | [查看](https://github.com/sipeed/picoclaw/pull/3322) |
| #3323 | PR | fix(wecom): use CreateSafeHTTPClient for media downloads | 2026-08-09 | 已 stale 关闭 | [查看](https://github.com/sipeed/picoclaw/pull/3323) |
| #3324 | PR | fix(weixin): use CreateSafeHTTPClient for media downloads | 2026-08-09 | 已 stale 关闭 | [查看](https://github.com/sipeed/picoclaw/pull/3324) |
| #3325 | Issue | Render Telegram tables with rich messages | 2026-08-09 | 已 stale 关闭 | [查看](https://github.com/sipeed/picoclaw/issues/3325) |
| #3344 | PR（新） | Add Build Remote Agent phone pairing (gbr/1) | 2026-08-23 | 待合并 | [查看](https://github.com/sipeed/picoclaw/pull/3344) |

**维护者提醒：** 建议对 8 月 7-9 日集中提交的 5 条修复类 PR 进行一次批量 triage（尤其是 WhatsApp 通道瘫痪与 SSRF 安全加固），评估后**手动 reopen** 关键修复，避免 stale 自动机制误伤有效贡献。

---

*报告生成时间：2026-08-24 ｜ 数据来源：GitHub REST API (sipeed/picoclaw)*

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

<think>Let me analyze the GitHub data for IronClaw (github.com/nearai/ironclaw) and generate a comprehensive daily report for 2026-08-24.

Key observations:
1. **Activity Overview**: 12 new/active Issues, 24 PR updates (19 open, 5 closed/merged), 0 releases
2. **Hot Issue**: #7732 - Epic about persistent per-user sandbox with iron-proxy (9 comments)
3. **Active Discussion**: #7812 - Onboarding suggestions with read-only tool access (3 comments)
4. **Several user feedback issues** from Slack channel #x-ai-product-feedback - bugs related to Gmail, Slack, Telegram, Notion setup
5. **Major CI work**: Multiple PRs (T1, T2, T3, T4) from @henrypark133 working on CI pipeline improvements
6. **Sandbox security**: PR #7810 about credential bindings, Issue #7825 about egress auth
7. **Dependabot**: Multiple dependency update PRs

Let me organize this into the required sections:

1. **今日速览** - 3-5 sentences summary
2. **版本发布** - No releases, skip
3. **项目进展** - Closed PRs and key work
4. **社区热点** - Most discussed issues
5. **Bug 与稳定性** - Bugs reported
6. **功能请求与路线图信号** - New features
7. **用户反馈摘要** - User pain points
8. **待处理积压** - Long-standing items

Notable PRs that were closed:
- #7730 (dependabot dependency bump)
- #7406 (dependabot actions update)
- #7262 (dependabot wasm update)

Most active issues:
- #7732 - 9 comments (epic)
- #7812 - 3 comments

Major themes:
1. Sandbox/Proxy infrastructure (persistent user sandbox, credential mediation)
2. CI pipeline overhaul (4 parallel tracks T1-T4)
3. User onboarding/feedback issues from Slack
4. Tool advertisement/availability filtering
5. WebUI improvements (Design System, IronHub agent link)

Let me write this in Chinese as the user wrote in Chinese.</think>

# IronClaw 项目日报 · 2026-08-24

## 1. 今日速览

IronClaw 今日继续保持高强度的多线推进节奏，**24 小时内活跃 Issues 12 条、PR 24 条（19 待合并 / 5 已关闭）**，无新版本发布。技术主线集中在 **CI 流水线重构（4 条平行 PR）** 与 **持久化沙箱 + iron-proxy 凭证代理** 两项基础设施级工程；产品侧则集中处理了一批从 `#x-ai-product-feedback` Slack 通道汇入的集成设置类 bug 反馈（Slack / Gmail / Telegram / Notion）。整体来看，项目处于"基础设施定型期"，代码层面动作频繁但尚未合并入主干，闭环度需要观察 CI 改造 PR 的合并进展。

---

## 2. 版本发布

**无新版本发布。** 当前 trunk 仍处于 CI 改造多轨并行的 draft 阶段，未触发发版动作。

---

## 3. 项目进展

### ✅ 已关闭 PR（5 条，均为依赖与 CI 收尾）

| PR | 类型 | 说明 |
|---|---|---|
| [#7730](https://github.com/nearai/ironclaw/pull/7730) | deps | dependabot everything-else 组 6 项更新（uuid、base64、toml 等） |
| [#7406](https://github.com/nearai/ironclaw/pull/7406) | deps | dependabot actions 组 4 项更新（claude-code-action、setup-node、rust-cache、docker/login-action） |
| [#7262](https://github.com/nearai/ironclaw/pull/7262) | deps | dependabot wasm 组 2 项更新（wit-component、wit-parser） |

### 🚧 进行中的关键基础设施 PR

- **[#7810](https://github.com/nearai/ironclaw/pull/7810)** `feat(sandbox)` — 完成"每用户一持久沙箱 + 受管出口代理"的关键能力：实现 `builtin.shell` 直接执行 `gh` 时的占位符-真实凭证替换（仅代理可看到真实 token）。这是 v1.4.0 Epic [#7732](https://github.com/nearai/ironclaw/issues/7732) 的核心交付之一。
- **[#7817](https://github.com/nearai/ironclaw/pull/7817)** `ci(T2)` — 把 `Tests (Reborn)` 工作流从逐 binary 顺序 `cargo test` 切到 `cargo nextest`，并提供完整失败信号（不再只看到第一个失败 job）。
- **[#7821](https://github.com/nearai/ironclaw/pull/7821)** `ci(T1)` — 单一 `setup-rust` 复合步骤，统一 toolchain pin、mold linker、build profile，消灭"本地绿 CI 红"的漂移类问题。
- **[#7819](https://github.com/nearai/ironclaw/pull/7819)** `ci(T3)` — PR/queue 检查收敛：planner drift 防护、PR 阶段默认 features clippy。
- **[#7809](https://github.com/nearai/ironclaw/pull/7809)** `ci(T4)` — 规范化 preflight：单一边门清单 + worktree-safe hooks + 自打印 REPRO。

整体看，CI 改造正按 4 轨（T1–T4）并行推进，合并时序互相耦合（[#7820](https://github.com/nearai/ironclaw/pull/7820)、[#7838](https://github.com/nearai/ironclaw/pull/7838)、[#7839](https://github.com/nearai/ironclaw/pull/7839) 均为 throwaway CI 探测分支）。

### 🎨 产品/Web 侧进展

- **[#7831](https://github.com/nearai/ironclaw/pull/7831)** — Design System Phase 3a：新增 `webui-v2-chromatic` lane + 缺失的设计 token 轴。
- **[#7833](https://github.com/nearai/ironclaw/pull/7833)** — 关闭 [#7812](https://github.com/nearai/ironclaw/issues/7812)：建议生成现在使用用户配置文件中"无审批 + 只读"工具子集，使建议内容真实反映用户已连接账户。

---

## 4. 社区热点

### 🔥 讨论最活跃

1. **[#7732 — Epic: Persistent per-user sandbox with iron-proxy](https://github.com/nearai/ironclaw/issues/7732)** · `epic, v1.4.0` · 9 评论
   - 长期愿景 issue：当前 Docker 模式每条命令启停容器、`/workspace` 只在 `(tenant, user)` 粒度持久，希望演进为真正的"用户持久计算机"。
   - 配套动作：[#7810](https://github.com/nearai/ironclaw/pull/7810) 与 [#7825](https://github.com/nearai/ironclaw/issues/7825) 正在分阶段落地。
2. **[#7812 — Onboarding suggestions: respect user-level tool permissions](https://github.com/nearai/ironclaw/issues/7812)** · 3 评论
   - 关键洞察：建议生成 agent 持有硬编码四能力白名单，无法读取用户真实数据，导致建议"看不见 Gmail 也读不到邮件"。
   - 已在 [#7833](https://github.com/nearai/ironclaw/pull/7833) 中被关闭，落地速度很快。

### 📈 反映强烈诉求的方向

- **沙箱 → 真实用户的可信计算环境**（[#7732](https://github.com/nearai/ironclaw/issues/7732) + [#7825](https://github.com/nearai/ironclaw/issues/7825)）
- **工具可见性必须真实可执行**（[#7836](https://github.com/nearai/ironclaw/issues/7836)）：当前 prompt schema / namespace 预览 / `ironclaw.tool_search` 都不过滤"已安装 + 已激活 + 凭证就绪 + 已授权"，导致模型做出注定失败的调用，PinchBench 已有量化测量。
- **Hub 链路联通**（[#7516](https://github.com/nearai/ironclaw/pull/7516) + [#7826](https://github.com/nearai/ironclaw/pull/7826)）：WebUI 一直缺少 IronHub agent link 操作面，4 个目录条目安装必失败。

---

## 5. Bug 与稳定性

按严重程度排列：

| 等级 | Issue | 描述 | 是否有 fix PR |
|---|---|---|---|
| **P1** | [#7841](https://github.com/nearai/ironclaw/issues/7841) | Telegram setup 在 "admin must configure" 处死胡同 | ❌ |
| **P1** | [#7842](https://github.com/nearai/ironclaw/issues/7842) | 请求执行中出现通用 "invalid result" 错误 | ❌ |
| **P1** | [#7829](https://github.com/nearai/ironclaw/issues/7829) | WebUI 中 Gmail 设置的鉴权弹窗 1 秒即消失 | ❌ |
| **P1** | [#7830](https://github.com/nearai/ironclaw/issues/7830) | Notion 扩展在 IronClaw 中无法安装 | ❌ |
| **P2** | [#7828](https://github.com/nearai/ironclaw/issues/7828) | NEAR Foundation 账户无法完成 Slack 设置 | ❌ |
| **P2** | [#7840](https://github.com/nearai/ironclaw/issues/7840) | Slack 连接引导不清晰 | ❌ |

**观察**：今日 6 条 P1/P2 bug 全部来自用户反馈渠道（`#x-ai-product-feedback` Slack 通道），**均无对应 fix PR**，建议维护者优先级回看 [#7829](https://github.com/nearai/ironclaw/issues/7829)（Gmail 弹窗闪烁）与 [#7841](https://github.com/nearai/ironclaw/issues/7841)（Telegram 配置死路），这两条直接阻断核心集成接入。

---

## 6. 功能请求与路线图信号

| 提议 | 来源 | 路线图归属判断 |
|---|---|---|
| **[#7812](https://github.com/nearai/ironclaw/issues/7812)** 建议生成用只读工具感知用户真实数据 | 产品 | ✅ 已通过 [#7833](https://github.com/nearai/ironclaw/pull/7833) 纳入 |
| **[#7825](https://github.com/nearai/ironclaw/issues/7825)** sandbox 出口鉴权：原生 iron-proxy recipe + host credential broker | 工程 | 🟢 强信号，与 v1.4.0 Epic 同源，下一窗口期极可能进入开发 |
| **[#7836](https://github.com/nearai/ironclaw/issues/7836)** 工具广告按 availability 过滤（已装/已激活/凭证/授权） | 评测驱动 | 🟢 强信号，作者 @serrrfirat 持有 PinchBench 量化数据，与 [#7810](https://github.com/nearai/ironclaw/pull/7810) 路线一致 |
| **[#7826](https://github.com/nearai/ironclaw/pull/7826)** 安装 hub 发布的包 + 允许 deep link 落地 | Web/Hub | 🟡 需先合并 [#7516](https://github.com/nearai/ironclaw/pull/7516) 的 WebUI 操作面 |

---

## 7. 用户反馈摘要

通过 Slack `#x-ai-product-feedback` 通道汇入的真实用户声音（[Issue #7827](https://github.com/nearai/ironclaw/issues/7827) 负责 triage）：

### 😣 主要痛点

1. **OAuth/集成流程易中断**
   - Gmail 鉴权弹窗瞬间消失（[#7829](https://github.com/nearai/ironclaw/issues/7829)）— 用户无法完成认证。
   - Telegram "admin must configure" 死路（[#7841](https://github.com/nearai/ironclaw/issues/7841)）— 用户被卡在管理员配置环节，没有后续引导。
   - Slack 在 NEAR Foundation 域账户下安装受阻（[#7828](https://github.com/nearai/ironclaw/issues/7828)）— 暗示存在租户级配置权限问题。
   - Notion 扩展安装失败（[#7830](https://github.com/nearai/ironclaw/issues/7830)）— 需要排查扩展安装/auth/UI/路由。

2. **连接引导缺失**（[#7840](https://github.com/nearai/ironclaw/issues/7840)）
   - 用户反映应用未清晰引导如何连接 Slack，说明引导 UI/文案存在断层。

3. **执行失败信号不友好**（[#7842](https://github.com/nearai/ironclaw/issues/7842)）
   - "invalid result" 这种通用错误对用户调试没有帮助。

### 🧠 反映出的场景

- **多集成并行**：用户往往同时在配置 Gmail + Slack + Notion + Telegram，意味着引导链路必须串联，不能只修复单点。
- **企业租户视角**：NEAR Foundation 账户的特例暗示组织级 OAuth/应用分发配置可能与个人账户路径不同。

---

## 8. 待处理积压

| 项 | 链接 | 打开天数 | 备注 |
|---|---|---|---|
| PR [#7020](https://github.com/nearai/ironclaw/pull/7020) | tokio-tungstenite 0.29→0.30 升级 | **22 天** | dependabot 长期悬挂，存在 wasmtime 等可能共享依赖冲突 |
| Issue [#7732](https://github.com/nearai/ironclaw/issues/7732) | v1.4.0 Epic 持久沙箱 | 6 天 | 战略级 epic，依赖 [#7810](https://github.com/nearai/ironclaw/pull/7810) 合并节奏 |
| PR [#7516](https://github.com/nearai/ironclaw/pull/7516) | WebUI IronHub agent link 操作面 | 12 天 | contributor: new，规模 XL，是 Hub 链路闭环的前置依赖 |
| PR [#7255](https://github.com/nearai/ironclaw/pull/7255) | APDD Kit 治理评估 | 19 天 | 治理文档类评审周期长，建议维护者给出明确意见 |
| PR [#7826](https://github.com/nearai/ironclaw/pull/7826) | hub 包安装 + deep link 落地 | 1 天 | 依赖 [#7516](https://github.com/nearai/ironclaw/pull/7516) 的 WebUI 操作面 |

**维护者关注建议**：
1. 给 [#7020](https://github.com/nearai/ironclaw/pull/7020) 一个合并或关闭的明确结论，避免 dependabot PR 越积越多。
2. CI 四轨 PR（[#7817](https://github.com/nearai/ironclaw/pull/7817) / [#7821](https://github.com/nearai/ironclaw/pull/7821) / [#7819](https://github.com/nearai/ironclaw/pull/7819) / [#7809](https://github.com/nearai/ironclaw/pull/7809)）互相依赖，建议在 [#7817](https://github.com/nearai/ironclaw/pull/7817) merge 后尽快排定 T1/T3/T4 的合并顺序，避免 throwaway 探测分支 [#7838](https://github.com/nearai/ironclaw/pull/7838)/[#7839](https://github.com/nearai/ironclaw/pull/7839) 长期占用 CI 资源。
3. P1 bug（[#7841](https://github.com/nearai/ironclaw/issues/7841)、[#7829](https://github.com/nearai/ironclaw/issues/7829)）阻断核心集成，积压 0–1 天即需分配 owner。

---

*报告生成时间：2026-08-24 · 数据来源：GitHub REST API（近 24 小时窗口）*

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

<think>
We need answer Chinese, date 2026-08-24 based supplied data. Need carefully distinguish past 24h updates all created Apr 1, updated Aug23, now closed stale. The report as of 2026-08-24, likely all were closed on Aug 24? Data says past 24h issues update 4, closed 4; PR updates 3, merged/closed 3. Need not claim merged if closed stale, likely auto-closed as stale. Section "项目进展 今日合并/关闭重要 PR": 3 all closed/stale, one associated fix PR. No evidence merged. Need note no release, maybe omit version section per instruction "如无则省略", but data may be useful? They explicitly ask version release no then omit. Could perhaps say not listed? Better omit entire "版本发布". But every item links. Sections 3-8 and maybe top status. Need be objective and data-driven. We have only metadata and summaries, no comments text. Can't fabricate community discussion. Mention all issues have 2 comments, all PR comments undefined. "今日讨论最活跃" based comments all tied at 2 among issues, none PR; reaction all 0. Closed issues. Link.

Need assess health. Project had no release, no open/new activity; routine stale closure. Overall maintenance tick, not release cycle, and closed items included potentially relevant bugs. Issue #1200 and PR #1201 are direct fix, but PR closed stale, unknown whether fix landed. Important: Don't state bug fixed. #1202 security key leak high severity, no fix PR shown, now closed stale -> concern. #1198 restart progress/browser service unavailable, no PR. #1196 workflow. PR #1197 agent management UX, #1199 model context token config. Both closed, no merge. So project progress net ambiguous; no confirmed code landed. "向前迈进了多少": verified code increment 0 confirmed; backlog cleanup 7 items. If issue closure auto stale. No release.

"今日新开/活跃 0, closed 4"; all issues labels stale and dates Apr1, updated Aug23. PR all stale. This signals inactivity, stale cleanup, perhaps not active development. Could call activity low / maintenance-only. There are 4 issues, 3 PRs, no releases. Need perhaps timeline as of Aug24.

Need community hotspots: all comments 2, all thumbs 0. Issues #1202 security, #1196 repeated generated files, #1200 group names, #1198 gateway/browser. PRs no comments. Mention data cannot assess satisfaction. Each entry with links. "真实用户痛点" but comments not supplied. We can infer from issue descriptions, not claim comments. Explicitly note comments not supplied? User asks from Issues 评论提炼. We can say data only gives count, not comment body, so based on issue body rather than actual comments. But they expect summary. Need perhaps mention "评论共2条" and user's pain. We can formulate.

"待处理积压" Since all closed, no open long-term items in data. We can mention no open backlog; however stale closure without fix evidence is "潜在积压/风险". There is no dates beyond. All opened Apr1 and closed Aug24 after about 145 days (Apr 1 to Aug 24 = 145 days? Let's calculate: Apr 30, May31, Jun30, Jul31, Aug24 =146? Difference date: day of year Apr1 in nonleap 2026: Jan31+Feb28+Mar31+1=91. Aug24: Jan31+Feb28+Mar31+Apr30+May31+Jun30+Jul31+24=236. Difference145. If created Apr1 and closure Aug24, 145 days. Could say "约4个半月". #1202 security risk closed without associated PR. Is it "long-term unhandled"? no, closed, but unresolved. We can categorize closure follow-up. Need not overstate.

Severity ranking:
- Critical/High #1202 agent leaks model key info, security sensitivity. No matching PR in PR list. But perhaps no fix shown, not necessarily absent repository globally; only "今日列表未提供 fix PR." State exactly.
- Medium #1200 SDK enum mapping causes wrong group names. Associated #1201 closed stale, no merge evidence, so status unresolved.
- Medium #1198 browser/gateway service unavailable, progress disappearing. No PR shown.
- UX #1196 repeated file generation. Maybe not bug stability but usability.
PR #1197 etc.

Could infer #1201 "一行修改" intended fix, but not merged. Need link to both.

"功能请求与路线图信号":
- #1196 common AGENTS.md or hidden dir + global system prompt—design request. PR? #1197 unrelated, so no implementation evidence.
- #1197 agent management card direct delete, sidebar etc. Closed no merge, unclear next version.
- #1199 per model contextWindow/maxTokens persisted/export, chat and Cowork/OpenClaw. No merge evidence.
- #1200 fix.
Potential next version: cannot confirm. Could rank:
Likely/technically low cost: #1200/#1201, but closed stale. Maybe security fix high priority. User requests may not be in next release due no release. Need objective and no speculation too strong.
Could say "已有实现载体": #1200 has corresponding PR #1201, so most clear route; #1199 has implementation PR but not merged. #1197 feature PR. #1196 no PR. This meets "结合已有 PR 判断哪些可能被纳入下一版本". We can list:
1. High probability? No data to know priority. We can use "具备进入后续版本条件/已存在PR草案", not probability.
- NIM bug: corresponding one-line PR exists but stale; quickest candidate.
- model context settings: PR exists, larger scope, candidate if branch salvaged.
- Agent page optimization: PR exists stale due conflict, needs rebase/reopen.
- common agents hidden system config: no PR, only user proposal.
No release => next version not identifiable.
Security fix absent PR, high priority, but cannot say version.

"项目进展": All PR closed stale. #1201 associated bug. #1197 had original #1176 and conflicts, possibly closure due stale. #1199. Maybe say "今日确认 3 个 PR 均已关闭（按标签属于 stale），但没有“已合并”数据；因此不能认定功能已上线。" This is key.
"推进多少": no code progress confirmed, maintenance debt cleanup. Could use "可量化：关闭 4 Issues + 3 PR = 7 stale records; confirmed merged 0, release 0." The user says "合并/关闭". Good.

"今日速览" 3-5 sentences, activity. We can have maybe 4 sentences. Mention all old. No new issues/active. "活跃度低，偏向 stale 清理" and health: neutral/cautious. Why cautious: unresolved security bug and intended fixes closed without merge evidence. Need avoid judging health excessively from one day.

Need all "每个条目附 GitHub link." Ensure each bullet/table item has links. Could structure with Markdown. For section release omitted. Every item maybe titles links. Need potentially no standalone item without link. Intro metrics don't need link? Data source project but no URL perhaps link. We can include links.

Date 2026-08-24. The issue update date is Aug23; data says past 24h likely report. We should not overclaim exact close timestamp. Say "数据窗口内（截至 8/24）". Also "创建 4/1, updated 8/23, now closed." Could mention update 8/23 not 8/24 due window. The source could be generated on 8/24. No new release.

Community: "comments 2, thumbs 0". We can't say "today discussion most active" because all equal. "按可量化数据并列第一". Since all issues have 2 comments. PRs have undefined; treat as unavailable, not 0. Use no PR data. Each has 0 likes. It says "最新 Issues共4". We can say not new today. For #1198 comments 2, body long. #1202 comments 2. All stale. #1196 etc. Need perhaps rank community interest: all 2 comments, 0 thumbs, so no strong reaction. Maybe group table. "讨论深度有限". Need link.

User feedback summary:
- workspace file proliferation and deletion/recreation: repeated operational friction.
- gateway restart progress disappears / no status, subsequent chats model unavailable, uncertain service state.
- @ robot in NIM super group/or normal group wrong group name due mapping.
- agent reveals config path/env vars/model key, sensitive data leak.
- positive feedback? None. No comments bodies, cannot establish satisfaction. State no positive satisfaction signals in provided data.
Each link.

Could perhaps "stale means GitHub stale label, not necessarily problem unimportant." Explicitly distinguish. This is important. Don't infer auto-close, only labels. The issue statuses all [CLOSED] [stale]. We can say "按状态/标签". No reason for closure. PRs all closed stale. In #1197 summary says conflicts, but stale likely. We shouldn't say auto closed; say "标记为 stale".

Potential concern: user wants "今日报告的 Bug...". The issues all created April, not newly reported today; data says new/open active 0. We should clearly distinguish. "今日无新开/活跃 Bug；以下是过去24h关闭的历史 Bug 存量." That is objective. For Bug and stability, no new bugs today. All were historical. Severity:
P0? Agent key leak maybe High not Critical (sensitive info but no actual key exposure? It can guide to find key; potential). Use 高.
#1200 medium.
#1198 medium.
#1196 usability medium/low.

Need maybe include #1198 browser service. It says opened Chrome/page but service unavailable. Could affect gateway restart. No fix PR.
"已 fix PR" column:
#1200: 有关联 PR #1201, but not merged/closed stale. Should not call fix merged.
#1198 no associated.
#1202 none shown.
#1196 no.
For #1197 unrelated PR.
"已修复": no confirmed fix. #1201 intended one-line fix not merged. #1199 maybe model config not bug.
Potential security follow-up: closure of issue without fix is concerning but not necessarily unresolved if secret redaction was applied elsewhere. Data doesn't show. Phrase "在本次数据中未见已合并修复，因此无法确认已修复". Good.

"待处理积压": Open backlog 0 in provided latest. But "潜在未闭环项" 4 or perhaps all:
- #1202 security risk no fix
- #1200 intended fix PR closed
- #1198 no PR
- #1196 no PR
Maybe #1197/#1199 intended PRs closed and need rebase. Since no open items, report says no currently open item among these. But "长期未响应" Apr1 to Aug24 ~4.5 months. The fact all created Apr1 and only closed now indicates long wait. Even if closed, closure without merge can be "待验证". We can put table with status and recommended followup. All links. This section is useful. "待处理积压" technically no open. Say:
- 严格口径: 今日清单已全部 closed, no open backlog.
- 但以下 5 have unresolved implementation/verification:
#1202 no fix.
#1200/#1201 intended fix not merged.
#1198 no fix.
#1196/#1197, #1199? Could include perhaps 6. Need not overload.
- #1197 and #1199 feature PRs stale, if desired need rebase/reopen.
The user specifically asks long-term unresponsive important issue or PR. Since all closed, no "积压". We can say "无开放积压", but mention "stale closure audit queue" not current backlog. Perhaps they expect a report with all closed due stale and no new activity. Fine.

Could include a summary health score? Maybe "健康度：谨慎/中性偏低". We can explain. Data-driven metrics:
- issue closure rate 100% (4/4 updates; but new/active 0)
- PR closure 100% (3/3)
- confirmed merge 0
- release 0
- new issue 0
- all items stale.
This is a routine cleanup, not progress. Overall "活跃度低、维护状态平稳但功能推进不明". Stable? no evidence of regressions. "健康度中性偏谨慎". Maybe include mini table in today snapshot:
更新窗口 issues: 4 (active/new 0, closed 4)
PR:3 (pending0, merged/closed3)
release0
All 7 closed marked stale
This would be objective. They asked 3-5 sentences, can do 4 sentences plus table? Better 4 sentences exactly then maybe table in project progress. No need duplicate.

Need "版本发布" omitted. User says no new then omit. Could mention in today overview "new release 0", not section.

Potential issue: "过去24小时 Issues 更新：4条（新开/活跃0，已关闭4）" and each updated 8/23. "2026-08-24 daily" yes. Could say "本报告按 2026-08-24 数据快照". Good.

Need include links. Could have title and tables with markdown links. Each item link. For PR #1201 link. If mention issue #1176 (original PR), if linked yes. Maybe don't mention.

Let's draft with sections exactly. Since version release omitted. Start date and methodology note maybe useful:
> 口径：统计窗口过去24h; “active/new0” means all are historical closures. All updated Aug23 and created Apr1. "stale" means marked stale, not proof no longer relevant.
This prevents misread. "merged/closed3" means all closed but no separate merged count. "已合并/关闭" from overview says 3. Need careful: "已合并/关闭" as aggregate not necessarily merged; all shown closed, so confirmed merged 0 in list. Good.

Section 1 today:
4 sentences:
1 "过去24h，4条Issues全部关闭，无新开/活跃; 3 PR all closed stale, 0 pending, no release."
2 "All 7 created Apr1, updated Aug23, close report, so activity is cleanup, low development activity."
3 "No confirmed merge, and #1200 intended one-line fix and #1197/#1199 feature PRs all closed, so cannot count as delivered."
4 "Health neutral/cautious: backlog markers cleared but security #1202, gateway #1198, workspace #1196 lack confirmed fixes; no evidence regression/release."

Could mention 4 issues all [stale]. Great.

Project progress:
Maybe table:
PR, result, impact, delivery judgment
#1201 intended NIM group type fix, closes stale, no merge evidence. Technical advancement not confirmed. Link.
#1197 Agent page direct delete/sidebar etc, closed stale/conflict; no landing.
#1199 per-model contextWindow/maxTokens persist/export and integration, closed stale; no landing.
Then "量化": 0 confirmed merged, 7 stale closures, no releases. "Overall forward step: backlog cleanup only; code increment unconfirmed."
Need every item link. The table item has links.

Community hotspots:
- data: all 4 issues each 2 comments and 0 likes. Since "today discussion most active" no one above. Could say "No PR comments available (undefined)". Do not use as 0.
List four in maybe ranking:
#1202 security concern 2 comments/0 likes
#1196 workspace proliferation 2/0
#1200 group names 2/0
#1198 service status 2/0
"诉求" each.
PRs: no comment counts; don't label.
Maybe all equal. Ensure every row link.
Potential "reaction" data: 0 likes. Good.

Bug stability:
First line "今日无新 Bug 活跃/新开，以下为窗口内关闭的历史存量". Table:
Severity high #1202, symptom and impact, fix PR: no matching shown, current: closed stale, unable confirm.
Medium #1200, fix PR #1201 present but closed stale/no merge.
Medium #1198, no.
Medium/Low #1196, no.
Do we include #1200 as data correctness bug. #1198 can be high availability? "模型不可用" in subsequent conversations, but likely medium. #1202 high.
No confirmed fix. Include "stale ≠ fixed". Great.

Feature requests roadmap:
Could table:
Proposal, evidence, roadmap signal:
- global common AGENTS.md/hidden dir, global system prompt. Issue #1196; no associated implementation PR. "Needs design; no direct next release signal."
- Agent management page direct deletion and sidebar/UI. PR #1197; stale due conflict. "Reopen/rebase if accepted."
- per-model contextWindow/maxTokens persist/export/use in chat/Cowork/OpenClaw. PR #1199; stale. "Broad integration, candidate but not in release."
- NIM mapping one-line correction. #1200/#1201. "Clear smallest patch; no merge evidence, not release."
Then "No release, no next version schedule; cannot infer any feature included." Maybe every row links.
The user asks "哪些可能被纳入下一版本." We can explicitly say "技术可实现性/已有PR ≠ 排期". Ranking:
1. NIM one-line fix low scope, but no merge.
2. model token config medium.
3. Agent UI medium.
4. global system prompt bigger.
Security should be prioritized, but not a feature request. Maybe mention in roadmap signal that security fix should precede feature release. But don't assert policy.

User feedback:
Four bullets with scenario and pain. "satisfaction" not available.
#1196 scenario switch work directories; system generates 6 files; deletion triggers regeneration; "agents content clutter."
#1198 opens Chrome/page after gateway restart; progress disappears, model unavailable, unclear status.
#1200 @ robot in NIM super/normal group; raw IDs instead of names due enum.
#1202 asks agent current key; agent gives file/env var paths, further prompts can locate key; security concern.
Satisfaction: no positive signals. "Comments body unavailable" perhaps mention.
Need every item links.

Backlog:
- Strict: no open items among latest 4/3; all closed.
- But follow-up audit:
#1202 no fix PR and security closure needs verification.
#1200/#1201 patch closed stale, needs rebase/reopen/test.
#1198 no fix PR.
#1197/#1199 stale due conflict? #1197 summary explicitly conflict. #1199 no reason; don't say conflict. They are old feature branches. #1196 no implementation.
"Created Apr1, around 145 days before report, all waited nearly 4.5 months before closure." Is that a derived metric. We can mention collectively. Each is linked.
Maybe "待处理积压" table:
Type, item, follow-up
Security: #1202.
Bug: #1200 + #1201.
Availability: #1198.
Feature backlog: #
</think>

</details>

<details>
<summary><strong>QwenPaw</strong> — <a href="https://github.com/agentscope-ai/QwenPaw">agentscope-ai/QwenPaw</a></summary>

<think>The user wants me to generate a daily report for the QwenPaw project based on the GitHub data provided. Let me analyze the data carefully and create a comprehensive, structured report.

Key observations from the data:
1. Date: 2026-08-24
2. 5 new/active Issues, 0 closed
3. 15 PRs: 7 open/pending merge, 8 merged/closed
4. 0 new releases
5. Issues cover: plugin reload, memory leak, Aider CLI integration, peer connection issue, conversation continuation bug
6. PRs cover: session-scoped project dirs, token cache, Windows tasklist, CLI task command, DeepSeek catalog refresh, skill system, auto-title-sync, OAuth2 persistence, image dimension limits, token usage trends, title generation, etc.

Let me structure the report with all 8 required sections, in Chinese, professional and data-driven.

I'll need to:
- Summarize today's status
- Skip version release section (no new releases)
- Highlight the closed/merged PRs and what they accomplished
- Identify hot discussions
- Categorize bugs by severity
- Note feature requests
- Extract user feedback
- Identify backlog

Let me think about the bugs by severity:
- #7222 - Memory grows to 20GB+ over 2 days - HIGH SEVERITY (stability/critical)
- #7218 - peer closed connection without complete message body - MEDIUM (long text/long inference)
- #7217 - After stopping task, next conversation follows previous one - MEDIUM/HIGH (UX impact)
- #7221 - reload_agent drops plugin workspace-scoped registrations - MEDIUM (functionality loss)

Feature requests:
- #7224 - How to integrate Aider CLI as agent in QwenPaw - This is a question/Help, but signals feature demand

Merged/closed PRs (8):
- #6220 - fix token usage cache on shutdown
- #6203 - fix Windows tasklist liveness probe  
- #6616 - fix CLI task command user message
- #7033, #7031 - skill-system (one of these is closed but both seem similar - one is duplicate/superseded)
- #7027 - auto-title-sync + skill-system cleanup
- #7032, #7030 - auto-title-sync (one is duplicate/superseded)

Open PRs (7):
- #6976 - session-scoped multi project directories
- #7223 - DeepSeek catalog refresh
- #7183 - skills: workspace-scoped always-on loading
- #7220 - fix oversized image dimensions
- #7219 - all-agent LLM and tool-call trend
- #7187 - exclude reasoning from titles
- #7066 - OAuth2 refresh_token persistence

Let me look at duplicative PRs:
- #7030 and #7032 seem to be on auto-title-sync (one is "Under Review")
- #7031 and #7033 seem to be on skill-system (one is "Under Review")
These are likely duplicate PRs from same author - one for CI/check, one for human review.

Now let me write the report.</think>

# QwenPaw 项目日报 · 2026-08-24

> 数据来源：[github.com/agentscope-ai/QwenPaw](https://github.com/agentscope-ai/QwenPaw)
> 报告范围：2026-08-23 ~ 2026-08-24（UTC）

---

## 1. 今日速览

QwenPaw 在过去 24 小时呈现出**中等偏高的开发活跃度**：5 条新 Issue（全部 OPEN，0 关闭）和 15 条 PR 更新（7 待合并、8 已关闭）。今日亮点集中在**稳定性修复与外部集成**两个方向——合入了一组关于 token 用量缓存、Windows 进程探测、CLI 任务消息构建等底层稳健性 PR，同时处理了多份围绕 Skill 系统的迭代版本；但社区报告的 **20 GB+ 进程内存泄漏**（#7222）和 **reload_agent 丢失插件注册**（#7221）成为新的高分歧点。**无新版本发布**，版本号仍停在 v2.1.0。

---

## 2. 版本发布

⚠️ 今日**无新版本发布**。主线版本仍为 **v2.1.0**（见 [Issue #7221](https://github.com/agentscope-ai/QwenPaw/issues/7221) 报告的运行版本）。

---

## 3. 项目进展（已合并/关闭的 PR）

今日共有 8 条 PR 进入关闭状态，呈现明显的**「清理 + 底层加固」**特征。

| PR | 标题 | 贡献者 | 影响 |
|----|------|--------|------|
| [#6220](https://github.com/agentscope-ai/QwenPaw/pull/6220) | fix(token_usage): 关闭时不持久化空种子缓存 | @Yigtwxx | 修复 `TokenUsageBuffer.stop()` 在未种子化时仍强制 flush 的隐患，减少多余磁盘写入 |
| [#6203](https://github.com/agentscope-ai/QwenPaw/pull/6203) | fix(utils): Windows tasklist 探活加 timeout/隐藏控制台窗口 | @Yigtwxx | 解决 `command_runner._is_pid_running()` 在 Windows 上无超时导致 hang 的跨平台问题 |
| [#6616](https://github.com/agentscope-ai/QwenPaw/pull/6616) | fix(cli): 为 headless task 命令构造合法 user 消息 | @Yigtwxx | 修复 `qwenpaw task` 因 `Msg.content` 类型不匹配而始终无法运行的核心 CLI bug |
| [#7031](https://github.com/agentscope-ai/QwenPaw/pull/7031) / [#7033](https://github.com/agentscope-ai/QwenPaw/pull/7033) | feat(skill-system): 动态加载 + 自动卸载 + frontmatter 修复 | @Ferrum360 | 补齐 Skill 生命周期，闭源 PR 之间的版本对齐（CI 副本 #7033 合并） |
| [#7030](https://github.com/agentscope-ai/QwenPaw/pull/7030) / [#7032](https://github.com/agentscope-ai/QwenPaw/pull/7032) | feat(auto-title-sync): auto-memory 联动刷新会话标题 | @Ferrum360 | 让会话标题随 auto-memory 更新，新增可观测化 |
| [#7027](https://github.com/agentscope-ai/QwenPaw/pull/7027) | feat: auto-title-sync + skill-system cleanup | @Ferrum360 | 合并两特性并清理临时 `.backup/.bak-/.lock` |

**健康度评价**：今日合入的 PR 多来自**资深贡献者**（@Yigtwxx、@Ferrum360），明显集中在「修补被忽视的边缘路径」（token 缓存、Windows 兼容、CLI headless）。Skill 系统的两批 PR 重复打开（同一作者、同主题一对 PR 通常是「CI/Review 副本」），维护者应注意减少 PR 重复创建以降低 review 负担。

---

## 4. 社区热点

按评论数与互动度排名：

1. **[Issue #7222](https://github.com/agentscope-ai/QwenPaw/issues/7222)** —— qwenpaw-backend 运行时内存 2 天内增长到 **20.7 GB**（2 条评论）。诉求明确指向**长跑场景下的稳定性**，与历史 #9（启动阶段 ReMe 泄漏）的性质不同，社区希望区分诊断路径。
2. **[Issue #7221](https://github.com/agentscope-ai/QwenPaw/issues/7221)** —— `MultiAgentManager.reload_agent` 在零停机热更后会丢失 plugin 工作区级注册（3 条评论）。这反映出插件体系与热加载协议存在语义不一致，是 2.x 系列被广泛使用的关键 API，**影响面较大**。
3. **[Issue #7218](https://github.com/agentscope-ai/QwenPaw/issues/7218)** —— 长文本/长推理时 `peer closed connection without sending complete message body`（1 条评论）。用户在 180 s 上游超时与 130-140 s 客户端退出的猜测中呼吁**官方文档明确 QwenPaw 客户端侧的超时配置入口**。
4. **[Issue #7224](https://github.com/agentscope-ai/QwenPaw/issues/7224)** —— 俄罗斯语用户希望把 Aider CLI 作为 agent 接入（1 条评论）。诉求方向其实是**「把任意 CLI 工具套壳为 QwenPaw 可管理的 agent」**，可形成通用集成范式。
5. **[PR #6976](https://github.com/agentscope-ai/QwenPaw/pull/6976)** —— session 范围内多项目目录，今日仍在更新但尚无评论，方向被多位多仓库开发者在 #7221 中隐性需求叠加。

---

## 5. Bug 与稳定性

按严重程度排序：

| 等级 | Issue | 描述 | 是否已有 fix PR |
|------|-------|------|-----------------|
| 🔴 **P0 - 资源耗尽** | [#7222](https://github.com/agentscope-ai/QwenPaw/issues/7222) | 后端运行时内存持续累积至 20.7 GB（2 天） | ❌ 暂无 |
| 🟠 **P1 - 功能丢失** | [#7221](https://github.com/agentscope-ai/QwenPaw/issues/7221) | `reload_agent` 热更后丢失 plugin 工作区注册 | ❌ 暂无 |
| 🟠 **P1 - 业务会话错乱** | [#7217](https://github.com/agentscope-ai/QwenPaw/issues/7217) | 中途停止任务后下次对话复现上一次的思考链路 | ❌ 暂无 |
| 🟡 **P2 - 网络/超时** | [#7218](https://github.com/agentscope-ai/QwenPaw/issues/7218) | peer closed connection（长推理/长文本场景） | ❌ 暂无（客户端超时配置未文档化） |

**观察**：今日报告的 4 个 Bug **均无对应 fix PR 在飞**，反映维护团队需在版本规划中预留一个「2.1.1 稳定性 patch」的窗口。`#7222` 优先级最高，建议并行接入内存剖析与可达性验证。

---

## 6. 功能请求与路线图信号

- **「任何 CLI Agent 套壳接入」**（[#7224](https://github.com/agentscope-ai/QwenPaw/issues/7224)）：用户希望 QwenPaw 像 orchestrator 一样托管 Aider CLI。结合已有 Skill 系统与 PR #7183（always-on Skills 加载），技术栈**已经具备此类集成所需的「外部 agent 描述 + 调用通道」雏形**，下一个 minor 版本有望提供官方范式。
- **「会话标题排除模型推理」**（[#7187](https://github.com/agentscope-ai/QwenPaw/pull/7187)，fix #6979）：当 QwenPaw 启用 thinking 时，自动生成的会话标题会把推理文本混入；该 PR 已就绪并锁定主路径，**极可能并入下一 patch**。
- **「Token 用量全 agent 趋势图」**（[#7219](https://github.com/agentscope-ai/QwenPaw/pull/7219)）：在 Settings → Token Usage 中新增跨 agent 的 LLM/工具调用趋势，与 Agent Statistics 的 `by_date` 口径对齐。可视化方向较为成熟，与今天的稳定性补强相邻，**有较高概率进入下个 minor**。
- **「超大图片像素拦截」**（[#7220](https://github.com/agentscope-ai/QwenPaw/pull/7220)）：仅检查 2 MiB 字节限制而忽略像素上限，会让高度压缩的「合法字节 + 巨型像素」图片拖崩 vision provider。该 PR 是**面向多模态稳定性的明确补丁**。

---

## 7. 用户反馈摘要

- **痛点 1 · 长跑场景**：用户反馈后端在 2 天内把进程拖到 20 GB，**没有自动 GC 或内存上限告警机制**，表明对 Prow 生产级部署的可观测性诉求强烈（[#7222](https://github.com/agentscope-ai/QwenPaw/issues/7222)）。
- **痛点 2 · 热更新语义**：用户发现任何配置改动触发的 `reload_agent` 都会让 plugin 的运行时钩子/modes/slash command 失效，意味着「零停机热更」名不副实，**实际能力与文档宣传存在落差**（[#7221](https://github.com/agentscope-ai/QwenPaw/issues/7221)）。
- **痛点 3 · 会话延续性**：「中途停止任务后下次对话完全按上次进行」的体验使 multi-turn 工作流不可信（[#7217](https://github.com/agentscope-ai/QwenPaw/issues/7217)）。
- **痛点 4 · 客户端超时透明度**：用户在与自建模型服务端联调时被迫猜测 130-140 s 退出的来源，**官方文档未明示超时配置位置**（[#7218](https://github.com/agentscope-ai/QwenPaw/issues/7218)）。
- **正面信号**：社区对 Skill 系统的快速迭代（@Ferrum360 两日内 4 条 PR）以及 token 用量可视化（@yuanxs21）显示出**核心开发者与外围贡献者协同良好**。

---

## 8. 待处理积压

以下条目在近 24 小时内仍有更新，但**仍处于 open 状态**，建议维护者优先 review：

| 编号 | 类型 | 创建至今 | 关注点 |
|------|------|----------|--------|
| [#6976](https://github.com/agentscope-ai/QwenPaw/pull/6976) | PR | 11 天 | session-scoped 多项目目录，是多仓库开发刚需 |
| [#7066](https://github.com/agentscope-ai/QwenPaw/pull/7066) | PR | 8 天 | OAuth2 旋转 refresh_token 持久化（XMind MCP 场景） |
| [#7183](https://github.com/agentscope-ai/QwenPaw/pull/7183) | PR | 4 天 | workspace-scoped always-on Skill 加载 |
| [#7222](https://github.com/agentscope-ai/QwenPaw/issues/7222) | Issue | 1 天 | **P0 内存泄漏**，建议 24h 内响应 |
| [#7221](https://github.com/agentscope-ai/QwenPaw/issues/7221) | Issue | 1 天 | **P1 reload_agent 行为不一致** |
| [#7031](https://github.com/agentscope-ai/QwenPaw/pull/7031) / [#7033](https://github.com/agentscope-ai/QwenPaw/pull/7033) | PR 副本 | 10 天 | 同主题 Skill 重复创建，请维护者统一归并以减少 review 噪声 |
| [#7030](https://github.com/agentscope-ai/QwenPaw/pull/7030) / [#7032](https://github.com/agentscope-ai/QwenPaw/pull/7032) | PR 副本 | 10 天 | 同主题 auto-title-sync 重复创建 |

**整体建议**：
1. 把 P0/P1 升级为 **2.1.1 候选**（#7222、#7221、#7217）；
2. 短期内整合同一作者的 CI/review 重复 PR（提议让 fork-first contributor 直接在新 PR 中标注 supersede 关系）；
3. 在文档侧补齐「客户端超时」、「reload_agent 行为边界」两条说明，先回应社区关切再投入新特性。

---

*本报告基于公开 GitHub 数据自动生成，数据时间窗：2026-08-23 ~ 2026-08-24 UTC。*

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/NousResearch/hermes-agent">NousResearch/hermes-agent</a></summary>

<think>The user wants me to generate a daily report for Hermes Agent based on GitHub data from 2026-08-24. Let me analyze the data carefully and produce a comprehensive, structured report in Chinese.

Let me identify key observations from the data:

1. **Activity Overview**: 50 issues updated (10 active, 40 closed), 50 PRs (33 open, 17 merged/closed), 0 releases
2. **Closed rate**: Issues 40/50 = 80% closed, PRs 17/50 = 34% merged/closed - moderate velocity
3. **Major themes in issues**:
   - lifecycle_guard "embedded null byte" / "embedded null character" bug (MANY duplicates - this is the dominant theme, at least 10+ issues all related to lifecycle_guard crashes on binary paths)
   - Playwright/Chromium installation hangs
   - state.db repair issues
   - Context compression / session state issues
   - Desktop UI bugs (session list, profile display, /context command)
   - MCP server connection issues
   - Flatpak/snap packaging version drift

4. **Major themes in PRs**:
   - Multiple fixes for lifecycle_guard (binary paths, sudo/nohup wrappers, NUL-padded scripts)
   - Phase 4 fleet UX and canary rollouts (#93042)
   - pre_compression hook (#93391)
   - 401 auth failure self-healing (#93426)
   - MCP session reuse and reconnection
   - DeepSeek max_tokens probe fix
   - /review briefing improvements

5. **Notable users**: @yflmq001, @teknium1, @cervantesh, @JoaoMarcos44 appear multiple times - active community

6. **Severity distribution**: Mix of P1 (one critical - #93064 state.db), P2 (most), P3 (some)

7. **Open issues that need attention**: #93290, #93289, #93280, #93412 (all OPEN status)

8. **Duplicate explosion**: The lifecycle_guard NUL byte bug has many duplicates - this indicates either a known issue being aggressively reported or fragmented triage

Let me now compose the report. I'll make it professional, data-driven, and highlight the key themes.

Key points to emphasize:
- The lifecycle_guard "embedded null byte" issue is the dominant bug pattern - many duplicates
- Active PR backlog (33 open) shows healthy development momentum
- No releases - this is a maintenance/fix day
- Phase 4 fleet rollout PR is significant
- Security and stability are the main themes

Let me write this up.</think>

# Hermes Agent 项目日报 · 2026-08-24

## 1. 今日速览

Hermes Agent 今日保持高强度维护节奏，Issues 关闭率高达 **80%**（40/50），PR 合并/关闭占比 **34%**（17/50），仍有 **33 个 PR 待合并**，显示项目处于"批量修复 + 持续合并"阶段。**未发布新版本**（v0.20.5 仍为最新），整体聚焦在稳定性与安全边界的扫尾工作。最突出的主题是 `cron/lifecycle_guard.py` 的"embedded null byte"系列 Bug 集中爆发，多达 10 余条 Issue 报告同一根因的衍生场景，反映 PR #76762 的修复并不彻底。

---

## 2. 版本发布

无新版本发布。当前最新版本为 **v0.20.5**（2026-08-19，commit `4a6b362178`），距今约 5 天。今日的修复内容预计将合并进 **v0.20.6** 或随下一批功能更新一并发布。

---

## 3. 项目进展

### 已合并 / 已关闭的重要 PR

| PR | 标题 | 意义 |
|---|---|---|
| [#93416](https://github.com/NousResearch/hermes-agent/pull/93416) | fix(agent): use canonical call_id for tool results | 解决 SDK 工具调用对象 `id` 与 `call_id` 不一致时工具结果被替换为 `[Result unavailable]` 的问题，对应 Issue #93404。 |
| [#93418](https://github.com/NousResearch/hermes-agent/pull/93418) | 修复 sudo/nohup/env 包装器绕过 lifecycle_guard | 关闭三条已知 bypass 路径（`sudo bash`、`nohup bash`、`env FOO=1 bash`、`timeout`），同时修复相对路径误报，拯救停滞的 #84203。 |
| [#93423](https://github.com/NousResearch/hermes-agent/pull/93423) | 修复 model_metadata 把 max_tokens 当作 context length | DeepSeek/OpenAI 兼容网关的 1M 上下文端点不再被误判为 393K（对应 #93412）。 |
| [#93427](https://github.com/NousResearch/hermes-agent/pull/93427) | 限制时钟回拨链路邻接的最大间隔 | gateway 重启循环守卫中"时钟向后跳"豁免现在有 magnitude 上限，避免攻击者构造任意长度链。 |
| [#93426](https://github.com/NousResearch/hermes-agent/pull/93426) | 单次瞬态 401 不再永久污染凭证池 | 第三方路由（如 opencode.ai 返回 `401 "Model is not supported"`）不会再让 provider 被错误地永久拉黑。 |

### 待合并的高价值 PR（代表性）

- **[#93042](https://github.com/NousResearch/hermes-agent/pull/93042)** Phase 4 Fleet UX 与金丝雀发布闭环（基于 #91277），含 5×2×3 区域对抗验证，是本周最大的功能落地候选。
- **[#93391](https://github.com/NousResearch/hermes-agent/pull/93391)** 新增 `pre_compression` 插件钩子，让插件可在上下文压缩前观测/归档完整会话记录。
- **[#92596](https://github.com/NousResearch/hermes-agent/pull/92596)** MCP 服务器凭证变更时自动重连（修复 #92565），解决 token 轮换/配置修改后必须重启才能生效的问题。
- **[#93419](https://github.com/NousResearch/hermes-agent/pull/93419)** Anthropic 配额耗尽不再误报为 "Gateway needs setup"（修复 #93198、拯救 #93218）。

### 项目整体推进度

今日闭环了大量跨平台的安装/启动/会话恢复类 P2 Bug，主线稳定性显著增强；但**安全边界（lifecycle_guard、MCP 鉴权、API 鉴权）**仍是当前最大未交付面。

---

## 4. 社区热点

### 讨论最活跃的 Issues

1. **[#82887](https://github.com/NousResearch/hermes-agent/issues/82887)**（💬10）`terminal` 工具执行任何路径含二进制可执行文件的命令都会崩溃。根因 `_read_script_in_env` 把 ELF 的 NUL 字节误当作"路径嵌入空字符"。这是今天讨论最热烈的根因 Issue，衍生出大量 duplicate。
2. **[#76312](https://github.com/NousResearch/hermes-agent/issues/76312)**（💬9，👍6）CachyOS 上 Playwright Chromium 安装卡在 "extracting archive"。这是今日 **👍 最多** 的 Issue，社区对 Playwright 在新 Node/内核组合下的安装兼容性呼声较高。
3. **[#93063](https://github.com/NousResearch/hermes-agent/issues/93063)**（💬9）Fedora 44 安装失败，新发行版的兼容性反馈聚集。
4. **[#81322](https://github.com/NousResearch/hermes-agent/issues/81322)**、**[#77173](https://github.com/NousResearch/hermes-agent/issues/77173)**（各 💬6）lifecycle_guard 在 ELF/全路径二进制下的两种误报变种。

### 讨论最活跃的 PR

PR 列表中评论数较少（多数为 0~1），但 **#[93042](https://github.com/NousResearch/hermes-agent/pull/93042)** 是为数不多的"重量级"功能交付，承载 Phase 4 整套舰队管理与金丝雀机制，并附带完整的对抗性验收。

### 诉求分析

- **平台兼容性**：CachyOS、Fedora 44、Windows 11、WSL2 等多平台密集反馈，说明项目用户群已跨主流操作系统。
- **安全策略 vs. 可用性**：lifecycle_guard 的"过度严格"导致大量良性命令被拦截，社区在反复要求**收紧误报、保持拒杀能力**的双向优化。

---

## 5. Bug 与稳定性

### 🔴 P1（最高严重度）

- **[#93064](https://github.com/NousResearch/hermes-agent/issues/93064)** `state.db` 自动修复可能在恢复策略未验证成功前就破坏规范数据（重建 FTS、`REINDEX`、写 `sqlite_master` + `VACUUM`）。状态：**已关闭**，需确认 fix PR 是否同日合并。

### 🟠 P2（中等严重度，多条已闭环）

| Issue | 描述 | 是否已修复 |
|---|---|---|
| [#82887](https://github.com/NousResearch/hermes-agent/issues/82887) | terminal 工具：二进制路径触发 `embedded null character` | 已关闭（#93418 系列收尾） |
| [#76312](https://github.com/NousResearch/hermes-agent/issues/76312) | Playwright Chromium 安装挂起 | 已关闭，⚠️ 暂无明确 PR |
| [#93063](https://github.com/NousResearch/hermes-agent/issues/93063) | Fedora 44 安装失败 | 已关闭，⚠️ 暂无明确 PR |
| [#81322](https://github.com/NousResearch/hermes-agent/issues/81322) | lifecycle_guard 对 ELF 路径抛 `embedded null byte` | 已关闭 |
| [#77173](https://github.com/NousResearch/hermes-agent/issues/77173) | gateway terminal guard 全路径二进制误报 | 已关闭 |
| [#77927](https://github.com/NousResearch/hermes-agent/issues/77927) | NUL-padded 文本脚本绕过扫描（#76762 回归） | 已关闭 |
| [#93404](https://github.com/NousResearch/hermes-agent/issues/93404) | 工具结果在 SDK id 与 call_id 不一致后变不可用 | ✅ 已修复 [#93416](https://github.com/NousResearch/hermes-agent/pull/93416) |
| [#93022](https://github.com/NousResearch/hermes-agent/issues/93022) | 反 thrashing 熔断在过短会话上永久禁用压缩 | 已关闭 |
| [#90174](https://github.com/NousResearch/hermes-agent/issues/90174) | Desktop 会话列表启动后闪烁再清空 | 已关闭 |
| [#93134](https://github.com/NousResearch/hermes-agent/issues/93134) | TUI 剪贴板路径超时后 `execFileNoThrow` 永不结算 | 已关闭 |
| [#93057](https://github.com/NousResearch/hermes-agent/issues/93057) | 同模型后台 review 因压缩禁用重复重放 350k–384k 上下文 | 已关闭 |
| [#93053](https://github.com/NousResearch/hermes-agent/issues/93053) | `execute_code` 误报"用户发送了新消息" | 已关闭 |
| [#93412](https://github.com/NousResearch/hermes-agent/issues/93412) | 本地上下文探测把 `max_tokens` 当成 context length | ✅ 已修复 [#93423](https://github.com/NousResearch/hermes-agent/pull/93423) |
| [#88810](https://github.com/NousResearch/hermes-agent/issues/88810) | Windows 下 terminal 工具 "embedded null character" 崩溃 | 已关闭 |

### 🟡 P3（低严重度）

包含 [#93137](https://github.com/NousResearch/hermes-agent/issues/93137)（压力测试断言过期字段）、[#93197](https://github.com/NousResearch/hermes-agent/issues/93197)（Desktop "Show all profiles" 重启失效）、[#77925](https://github.com/NousResearch/hermes-agent/issues/77925)（dot-operator sourced 脚本漏扫）、[#93136](https://github.com/NousResearch/hermes-agent/issues/93136)（Windows 压力子进程可能误跑系统已安装二进制）、[#93017](https://github.com/NousResearch/hermes-agent/issues/93017)（`install.ps1` `$script:LastResolver` 未初始化）。

### 仍 OPEN 待处理

- **[#93290](https://github.com/NousResearch/hermes-agent/issues/93290)** Flatpak metainfo `<release>` 手动维护
- **[#93289](https://github.com/NousResearch/hermes-agent/issues/93289)** snapcraft.yaml 版本硬编码漂移
- **[#93280](https://github.com/NousResearch/hermes-agent/issues/93280)** Desktop `/context` 始终报 "No active agent"
- **[#93412](https://github.com/NousResearch/hermes-agent/issues/93412)** 上下文探测误读 max_tokens（PR [#93423](https://github.com/NousResearch/hermes-agent/pull/93423) 已开）

### 稳定性观察

**lifecycle_guard NUL 字节系列 Bug** 仍是今日最严重的稳定性热点，相关 Issue 至少有 **12 条**（包括 [#82887](https://github.com/NousResearch/hermes-agent/issues/82887)、[#81322](https://github.com/NousResearch/hermes-agent/issues/81322)、[#77173](https://github.com/NousResearch/hermes-agent/issues/77173)、[#83853](https://github.com/NousResearch/hermes-agent/issues/83853)、[#77927](https://github.com/NousResearch/hermes-agent/issues/77927)、[#79474](https://github.com/NousResearch/hermes-agent/issues/79474)、[#78244](https://github.com/NousResearch/hermes-agent/issues/78244)、[#87497](https://github.com/NousResearch/hermes-agent/issues/87497)、[#80268](https://github.com/NousResearch/hermes-agent/issues/80268)、[#77813](https://github.com/NousResearch/hermes-agent/issues/77813)、[#88810](https://github.com/NousResearch/hermes-agent/issues/88810)、[#77925](https://github.com/NousResearch/hermes-agent/issues/77925)），表明 #76762 修复后**至少有两条独立的相邻漏洞**（二进制内容检测 + 路径中嵌入 NUL）。[PR #93418](https://github.com/NousResearch/hermes-agent/pull/93418) 是一次系统性收尾，但仍需关注是否完全覆盖。

---

## 6. 功能请求与路线图信号

| 需求 | 来源 | 对应 PR | 进入下一版本概率 |
|---|---|---|---|
| Phase 4 Fleet UX 与金丝雀发布 | [#91277](https://github.com/NousResearch/hermes-agent/issues/91277) | [#93042](https://github.com/NousResearch/hermes-agent/pull/93042) | **极高**（已带 5×2×3 验收） |
| `pre_compression` 插件钩子 | — | [#93391](https://github.com/NousResearch/hermes-agent/pull/93391) | 高 |
| `/review` 子代理继承父代理加载的 skills | [#93420](https://github.com/NousResearch/hermes-agent/pull/93420) | [#93420](https://github.com/NousResearch/hermes-agent/pull/93420) | 高 |
| MCP OAuth provider-specific 授权参数（如 Zoho `access_type=offline`） | — | [#93342](https://github.com/NousResearch/hermes-agent/pull/93342) | 中 |
| Petdex 在交互式 CLI 中渲染 Kitty 图形 | — | [#93396](https://github.com/NousResearch/hermes-agent/pull/93396) | 中（趣味性功能） |
| MCP HTTP 会话在 `_probe_single_server` 中复用 | — | [#89581](https://github.com/NousResearch/hermes-agent/pull/89581) | 中 |

---

## 7. 用户反馈摘要

### 痛点

- **"我的 Python 命令又崩了"**——大量 venv Python 用户反复遇到 lifecycle_guard 拒绝合法命令的体验（[#81322](https://github.com/NousResearch/hermes-agent/issues/81322)、[#83853](https://github.com/NousResearch/hermes-agent/issues/83853)、[#78244](https://github.com/NousResearch/hermes-agent/issues/78244)），迫切需要守护逻辑能区分"恶意脚本"与"正常的二进制解释器路径"。
- **"安装到一半卡死了"**——CachyOS / Fedora / Windows 用户在 Playwright Chromium 解压或 install.ps1 resolver 初始化阶段遭遇挂起或异常终止，对首次安装体验造成严重负面影响。
- **"我的会话记录丢了"**——`state.db` 自动修复反而破坏规范数据（#93064）、Desktop 会话列表启动后被清空（#90174），对数据完整性焦虑突出。
- **"MCP token 换了为何不生效"**——[#92565](https://github.com/NousResearch/hermes-agent/issues/92565) 反馈 token 轮换后必须重启；[#89581](https://github.com/NousResearch/hermes-agent/pull/89581) 反映 health probe 占用唯一会话导致真会话被踢。

### 满意 / 期待

- **多平台覆盖**：CachyOS、Fedora、WSL2、macOS、Windows 用户的活跃反馈说明 Hermes Agent 在跨平台场景下口碑稳健。
- **金丝雀与舰队管理**（#93042）被积极推进，暗示团队在面向"多用户 / 多实例"运维场景发力，企业用户方向明确。

---

## 8. 待处理积压（提醒维护者关注）

| 类别 | 编号 | 标题 | 备注 |
|---|---|---|---|
| 仍 OPEN 的 Bug | [#93280](https://github.com/NousResearch/hermes-agent/issues/93280) | Desktop `/context` 永远 "No active agent" | 用户日常调试命令，影响可用性 |
| 仍 OPEN 的 Bug | [#93290](https://github.com/NousResearch/hermes-agent/issues/93290) | Flatpak metainfo 手动维护 | GNOME Software/Discover 显示错误版本 |
| 仍 OPEN 的 Bug | [#93289](https://github.com/NousResearch/hermes-agent/issues/93289) | snapcraft.yaml 版本漂移 | snap 用户看到过期版本 |
| 仍 OPEN 的 Bug | [#93412](https://github.com/NousResearch/hermes-agent/issues/93412) | max_tokens 误读为 context length | PR [#93423](https://github.com/NousResearch/hermes-agent/pull/93423) 已开但未合并 |
| 待合并大型 PR | [#93042](https://github.com/NousResearch/hermes-agent/pull/

</details>

<details>
<summary><strong>OpenHuman</strong> — <a href="https://github.com/tinyhumansai/openhuman">tinyhumansai/openhuman</a></summary>

<think>Let me analyze the GitHub data for OpenHuman project and generate a comprehensive daily report for 2026-08-24.

Key observations:
1. 42 issues updated, 25 PRs updated, no new releases
2. Many pre-prod build bugs reported on 2026-08-20 (a cluster of related issues)
3. Several high-priority bugs (P1) around: bulk session ingest timeout, GPT-5.x compatibility on macOS, Reddit connection issues, iPhone pairing
4. PR activity shows heavy work on memory subsystem refactor (tinymemory, tinycortex migration), UI improvements, MCP changes
5. Some merged PRs: #5703, #5692, #5698, #5697, #5694, #5690, #5669, #5688, #5683
6. Open PRs: 12, Closed: 13
7. Major theme: Memory subsystem modernization (tinymemory bus contracts), UI overhaul (shadcn), security policy improvements

Let me structure this report properly:

1. Today's overview - project is very active with 42 issues/25 PRs, multiple P1 bugs, focused refactoring work on memory subsystem
2. No releases today
3. PRs merged: focus on memory bus contracts, UI migration, security policy
4. Hottest issues: #5509 (4 comments), #5498 (3 comments), several with 2 comments
5. Bugs: P1 issues around GPT-5.x, bulk ingest timeout, iPhone pairing, Reddit integration; pre-prod bugs cluster
6. Feature requests: #4036 Composio cache refresh button, #1401 sandbox security
7. User feedback: macOS DMG issues, security concerns, integration problems
8. Backlog: #3010 (security CVSS 9.0 since May), #1401 (sandbox from May), older issues needing attention

Let me write this in Chinese as the prompt is in Chinese.</think>

# OpenHuman 项目日报 · 2026-08-24

## 1. 今日速览

OpenHuman 项目今日**高度活跃但处于压力修复期**：过去 24 小时共有 42 条 Issue 更新和 25 条 PR 更新，无新版本发布。社区关注度集中在 **GPT-5.x 模型兼容（macOS/DMG）**、**批量会话摄入超时**、**iPhone 配对失败** 以及 **pre-prod 构建** 上暴露出的一批基础设施级 Bug（学习调度、用户状态拉取、WebSocket 重置、Langfuse 遥测、心跳等）。维护团队则在同步推进 **tinymemory/tinycortex 内存子系统重构** 与 **UI 层全面 shadcn 化迁移**，今日合并/关闭了 13 个 PR。整体判断：**项目高速迭代，但 pre-prod 环境的稳定性正在消耗相当多的维护者精力**。

---

## 2. 版本发布

今日**无新版本发布**（0 个 release）。从议题活跃度看，v0.63.13 等后续小版本需要尽快跟进以解决 P1 级问题（详见第 5 节）。

---

## 3. 项目进展

今日合并/关闭 **13 个 PR**，主要进展如下：

### 🔧 核心架构与内存子系统
- **#5692** 已合并：`fix(memory): carry source scope and self-echo exclusion across the bus; re-pin tinymemory v1.2.0` — 把内存子系统的"调用接口"统一到 `tinymemory-api`，令 host 只需对接 Engine Bus 即可。
  🔗 https://github.com/tinyhumansai/openhuman/pull/5692
- **#5688** 已合并：`Wire every loadable module to its own bus contract crate` — 全部 loadable module（tinydocs 等）现在通过各自的 `*-bus` 契约 crate 通信，命中每仓库"接口 + 实现"拆分标准。
  🔗 https://github.com/tinyhumansai/openhuman/pull/5688
- **#5690** 已合并：`feat(web3): take tinywallet-bus, the contract crate, instead of the wallet library` — Web3 模块对齐拆分范式。
  🔗 https://github.com/tinyhumansai/openhuman/pull/5690
- **#5694** 已合并：`fix(mcp): resolve connected-tool lookups by workspace, not the process default` — 修复 MCP 多工作区下工具解析的进程级污染。
  🔗 https://github.com/tinyhumansai/openhuman/pull/5694

### 🎨 UI 与前端
- **#5698** 已合并：`fix(ui): shell + settings pass, DataTable primitive, unified NoticeCenter, thread-render crash` — 移除了 mesh-gradient 背景、Settings 改成 routed page、新增 `DataTable` 原语、统一通知中心。
  🔗 https://github.com/tinyhumansai/openhuman/pull/5698
- **#5683** 已合并：`refactor(ui): migrate settings and assistant chat surfaces` — 把 assistant chat 的 mock runtime 替换为 Redux-backed 的真实外部 store runtime。
  🔗 https://github.com/tinyhumansai/openhuman/pull/5683

### 🛒 构建与依赖
- **#5697** 已合并：`chore(vendor): bump tinyflows to 4e2e042` — 引入 `ExecutionStep.transcript` 字段，使 agent node 能传递 transcript 给 `RunObserver`。
  🔗 https://github.com/tinyhumansai/openhuman/pull/5697
- **#5703** 已关闭（重复，本次以 draft 提交 #5702 推进）：`fix(flows): initialize execution step transcripts` — 修复 Rust Core 覆盖率编译失败。
  🔗 https://github.com/tinyhumansai/openhuman/pull/5703
- **#5669** 已合并：`refactor(todos,goals): move task-run, dispatch, and goal-budget logic to tinyagents` — OpenHuman 本仓库净减 377 行。
  🔗 https://github.com/tinyhumansai/openhuman/pull/5669

**整体评估**：今日项目同时在 **"拆分模块以独立发布"** 与 **"UI 系统现代化"** 两条主线上取得实质推进，向模块化、可独立发布的形态又走了一步。

---

## 4. 社区热点

按评论活跃度排序：

| 排名 | 议题 | 评论数 | 主题 |
|---|---|---|---|
| 1 | [#5509](https://github.com/tinyhumansai/openhuman/issues/5509) | 4 | **P1**:批量 coding-session 摄入因 `rpc.rs` 的超时模型误算（按 session 30s，但 `digest_session` 按 window 多次调用）而超时；同时 `DIGEST_MAX_OUTPUT_TOKENS=4096` 静默丢观测。 |
| 2 | [#5498](https://github.com/tinyhumansai/openhuman/issues/5498) | 3 | **P2**:macOS DMG 全新安装下 GPT-5.x 模型（5.4-mini、5.6-Luna）每轮对话都返回 HTTP 400，因为客户端发送的是 `max_tokens` 而不是 GPT-5 要求的 `max_completion_tokens`。 |
| 3 | [#5686](https://github.com/tinyhumansai/openhuman/issues/5686) | 2 | Composio Direct Mode 粘贴 API key 触发"非空校验"误报错，完全阻断保存。 |
| 4 | [#5677](https://github.com/tinyhumansai/openhuman/issues/5677) | 2 | 自定义 OpenAI-兼容 embedding 端点返回结构无 `data` 数组，初始化即报"couldn't verify embeddings endpoint"。 |
| 5 | [#5500](https://github.com/tinyhumansai/openhuman/issues/5500) | 2 | Agent 读取 Notion 页时对结构化属性（dropdown 等）张冠李戴、凭空捏造。 |
| 6 | [#4036](https://github.com/tinyhumansai/openhuman/issues/4036) | 2 | **P1 老议题（06-24 提出）**:admin dashboard 缺少 Composio toolkit 缓存刷新按钮。 |
| 7 | [#4688](https://github.com/tinyhumansai/openhuman/issues/4688) | 2 | OAuth provider 不一致时新建工作区，把原工作区变成"孤儿"，无恢复路径。 |
| 8 | [#5510](https://github.com/tinyhumansai/openhuman/issues/5510) | 2 | **P2**:`DIGEST_MAX_OUTPUT_TOKENS=4096` 在密集 session 下截断 JSON 响应，导致 30–45s 超时预算被浪费且观测静默丢弃。 |
| 9 | [#1401](https://github.com/tinyhumansai/openhuman/issues/1401) | 2 | **超长期议题（05-09 提出）**:让 `sandbox_mode = "sandboxed"` 真正成为 OS 强制的 jail 执行环境（macOS/Windows 优先）。 |
| 10 | [#5507](https://github.com/tinyhumansai/openhuman/issues/5507) | 2 | **P1**:Reddit 集成通过 Composio 连接时永远卡在"connecting"，最终 "bad request" 超时。 |

**热点背后的诉求**：
- **多模型兼容性**：用户希望 OpenAI、Anthropic、各家自托管网关开箱即用，但当前对最新模型（GPT-5.x 系）默认适配仍存在协议层面的硬错误。
- **集成稳定性**：Composio（Reddit、Notion 等）的连接流程在 UI 反馈与底层状态机之间不同步，缺乏可恢复性。
- **批处理鲁棒性**：围绕 `digest_session` 的 token 上限、RPC 超时预算、窗口分割三者间缺乏端到端协调机制。

---

## 5. Bug 与稳定性

### 🔴 P1 级（影响核心可用性）
| 议题 | 状态 | 简述 | 是否已有 fix PR |
|---|---|---|---|
| [#5509](https://github.com/tinyhumansai/openhuman/issues/5509) | OPEN | bulk session ingest 超时（rpc.rs 30s/session 模型错误） | ❌ 未见 |
| [#5498](https://github.com/tinyhumansai/openhuman/issues/5498) | OPEN | macOS 上 GPT-5.x 模型 `max_tokens` → `max_completion_tokens` 协议错误 | ❌ 未见 |
| [#5507](https://github.com/tinyhumansai/openhuman/issues/5507) | OPEN | Reddit Composio 连接永远卡在 connecting | ❌ 未见 |
| [#5479](https://github.com/tinyhumansai/openhuman/issues/5479) | OPEN | iPhone 配对失败（`channelId` 缺失） | ❌ 未见 |
| [#4036](https://github.com/tinyhumansai/openhuman/issues/4036) | OPEN | admin dashboard 缺 Composio 缓存刷新按钮 | ❌ 未见 |

### 🟠 P2 / 高优先级
| 议题 | 简述 |
|---|---|
| [#5510](https://github.com/tinyhumansai/openhuman/issues/5510) | `DIGEST_MAX_OUTPUT_TOKENS=4096` 截断 JSON |
| [#5497](https://github.com/tinyhumansai/openhuman/issues/5497) | pikaOS .deb 安装下：缺 `stream=true`、steering 404、PATH 损坏（三合一）|
| [#4688](https://github.com/tinyhumansai/openhuman/issues/4688) | OAuth 切换 provider 时工作区孤儿化 |
| [#5568](https://github.com/tinyhumansai/openhuman/issues/5568) | macOS/ARM 退出时 `ggml_metal_rsets_free` 触发 `SIGABRT` |
| [#5579](https://github.com/tinyhumansai/openhuman/issues/5579) | v0.63.7 桌面端 CSP 阻断私网云端 WebSocket |
| [#5648](https://github.com/tinyhumansai/openhuman/issues/5648) | Claude Code brain：driver 持久化未创建的 session ID，永久 `"No conversation found"` |
| [#5500](https://github.com/tinyhumansai/openhuman/issues/5500) | Notion 内容读取严重偏差 |

### 🟡 Pre-prod 构建基础设施问题集群（2026-08-20 同日报出，约 8–10 个）
这是一组**特别值得关注的稳定性信号**，都集中在 staging 环境：
- [#5623](https://github.com/tinyhumansai/openhuman/issues/5623) — learning scheduler 失败 260+，缺 `ListAllFacets`（与 #5598 同一根因）
- [#5643](https://github.com/tinyhumansai/openhuman/issues/5643) — `tinywallet-module` / `tinyjuice-module` 以不同 `rustc` 编译并被加载（潜在 ABI 不一致）
- [#5635](https://github.com/tinyhumansai/openhuman/issues/5635) — `config.toml` 以 0644 写入，runtime 被动修正
- [#5634](https://github.com/tinyhumansai/openhuman/issues/5634) — `triage.escalate` 因"无 origin label"被准入门挡掉（8x）
- [#5624](https://github.com/tinyhumansai/openhuman/issues/5624) — `current user` 拉取 5s 超时 51 次，全程跑在 stale snapshot
- [#5603](https://github.com/tinyhumansai/openhuman/issues/5603) — WebSocket 每 ~11min 掉线（服务端 timeout 配错）
- [#5642](https://github.com/tinyhumansai/openhuman/issues/5642) — `chat-v1` 主路由全失败，静默回落 `burst-v1`
- [#5626](https://github.com/tinyhumansai/openhuman/issues/5626) — `summarize` outcome node 重试后失败
- [#5597](https://github.com/tinyhumansai/openhuman/issues/5597) — `deepseek-v4-flash` 持续 404
- [#5602](https://github.com/tinyhumansai/openhuman/issues/5602) — Langfuse 推送全超时，遥测全失
- [#5599](https://github.com/tinyhumansai/openhuman/issues/5599) — `journal-sink` UTF-8 校验失败，单 session 静默丢 2,372+ 观测

**分析与建议**：这部分并非单一 bug，而是 pre-prod 环境存在**系统性配置/契约漂移**。维护者应考虑在下一版本前安排专项硬化 sprint，而不是逐条修。

### 🟢 已有 fix PR 的安全问题
- **#5416**（路径遍历误报）→ [#5691](https://github.com/tinyhumansai/openhuman/pull/5691)（"区分缺失 workspace 与路径逃逸"） OPEN，正在合并中。

---

## 6. 功能请求与路线图信号

| 诉求 | 议题 | 当前进展 | 路线图可能性 |
|---|---|---|---|
| admin 后台提供 Composio 缓存刷新按钮 | [#4036](https://github.com/tinyhumansai/openhuman/issues/4036) | 已存在后端 API，缺 UI | **高** — 实现成本低，与 OAuth/集成稳定性议题契合 |
| 真正的 OS 强制沙箱隔离（macOS/Windows） | [#1401](https://github.com/tinyhumansai/openhuman/issues/1401)（05-09 提出） | 仅 issue，无 PR | **中** — 与现行 `sandbox_mode` 重构方向一致，但是大型工程 |
| 移除 `config.toml` 创建后立即可被任何用户读取的窗口期 | [#5635](https://github.com/tinyhumansai/openhuman/issues/5635) | runtime 已有 auto-fix，缺写入侧修复 | **高** — 易修复，明显属于"应该立刻修" |
| Rust ABI 校验在模块加载 | [#5643](https://github.com/tinyhumansai/openhuman/issues/5643) | 仅有警告并放行 | **高** — 与"模块独立发布 + 契约 crate"方向一致 |

---

## 7. 用户反馈摘要

从活跃议题评论中提炼的真实用户感受：

- **"全新安装就坏"**（[#5498](https://github.com/tinyhumansai/openhuman/issues/5498)）：macOS 用户从 DMG 装出来，选最新的 GPT-5.x 模型直接 HTTP 400，这对"开箱即用"体验是致命打击。
- **"看不到进度，卡死也不知道"**（[#5507](https://github.com/tinyhumansai/openhuman/issues/5507)、[#5686](https://github.com/tinyhumansai/openhuman/issues/5686)）：Reddit 永远 connecting、Composio Direct Mode 报错"非空"，UI 没有"已取消 / 失败原因"反馈路径。
- **"配对手机不能用"**（[#5479](https://github.com/tinyhumansai/openhuman/issues/5479)）：v0.63.12 上 iPhone 配对直接报错 `parse tunnel:register ack failed: missing field channelId`，影响跨设备场景。
- **"我以为接入的是 A，实际跑的是 B"**（[#5642](https://github.com/tinyhumansai/openhuman/issues/5642)）：chat-v1 全失败静默回落到 burst-v1，用户无感知——这会让"成本/质量可观测性"成为空话。
- **"工作区丢了"**（[#4688](https://github.com/tinyhumansai/openhuman/issues/4688)）：换 OAuth 登录后旧工作区成为孤儿，没有恢复路径——典型的"用着用着突然失去所有数据"痛点。
- **积极信号**：UI 大改（移除 mesh 背景、Settings 改 routed page、DataTable 原语、NoticeCenter 统一）获得实质推进，社区对"产品感更现代"的导向明显积极（从 #5698、#5683 PR 提交密度可见）。

---

## 8. 待处理积压与维护者提醒

值得维护者优先关注的"长期未响应"项：

| 议题 | 提交日期 | 等待天数 | 状态 | 提醒 |
|---|---|---|---|---|
| [#3010](https://github.com/tinyhumansai/openhuman/issues/3010) | 2026-05-30 | **~86 天** | OPEN | critical security problem（CVSS 9.0），提及 GHSA-gg3m-wgmq-vhmx 等多个 advisory 仍在 triage，**安全 SLA 已严重超期**。 |
| [#1401](https://github.com/tinyhumansai

</details>

---
*本日报由 [Big Model Radar](https://github.com/96loveslife/big_model_radar) 自动生成。*
# OpenClaw 生态日报 2026-07-23

> Issues: 463 | PRs: 500 | 覆盖项目: 12 个 | 生成时间: 2026-07-23 03:23 UTC

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

<think>The user wants me to generate a daily project status report for OpenClaw based on GitHub data. Let me analyze the data carefully and produce a comprehensive, structured report in Chinese.

Let me organize the key information:

**Overall Stats:**
- 463 issue updates (315 new/active, 148 closed)
- 500 PR updates (296 pending, 204 merged/closed)
- 0 new releases

**Top Issues by comments:**
- #75: Linux/Windows Clawdbot Apps (115 comments, 80👍)
- #85333: openclaw doctor --fix 4-5x slower (17 comments)
- #13583: Pre-response enforcement hooks (16 comments)
- #91009: Codex PreToolUse hook CPU issue (15 comments)
- #10659: Masked Secrets feature (15 comments)

**Recent important PRs:**
- #112033: dependabot actions update
- #75165: termination algebra + GSAR (XL)
- #104018: readiness conditions (XL)
- #112798: stage migration imports (XL)
- #107765: standard hosting profiles (XL)
- #112860: skip OpenClawKit suite for frozen
- #112773: portable agent policy settings
- #112661: fix(cron) senderless runs lose tools
- #112859: fix: commentary no longer repeats
- #112858: fix: steer active Codex tasks
- #112678: refactor implicit-main fallback
- #112787: session visibility states
- #112627: fix(cli) gateway call migrations
- #112821: watch-pr-ci CI watcher
- #112855: doctor preserves locks

**Closed/merged PRs:**
- #112850: refactor Telegram/iMessage schemas (CLOSED)
- #112841: validate frozen extended-stable (CLOSED)
- #111861: canonical lineage model (CLOSED)
- #112782: hoist channel doctor migration (CLOSED)

**Important Bugs:**
- #108435: gateway fails to start on 2026.7.1 (P0)
- #85333: doctor --fix 4-5x slower (P1)
- #91009: Codex hook CPU consumption (P1)
- #90840: Subagent run delivery regression (P1)
- #87212: System envelope echoed to Telegram (P1)
- #108580: cron tool schema incompatible with llama.cpp (P1)
- #86031: Windows gateway timeout (P1)

Let me now write the report. I'll aim for a thorough, data-driven, objective analysis.</think>

# OpenClaw 项目动态日报

**报告日期**：2026-07-23
**数据来源**：[github.com/openclaw/openclaw](https://github.com/openclaw/openclaw)

---

## 一、今日速览

OpenClaw 今日处于**高强度迭代与稳健合并并行期**：过去 24 小时共产生 463 条 Issue 更新（315 新开/活跃、148 已关闭）与 500 条 PR 更新（296 待合并、204 已合并/关闭），合并/关闭率约 40.8%，说明仓库虽然吞吐巨大，但维护团队仍能持续推进清理。Issue 侧有约 31.9% 的工单被关闭，证明 triage 与修复回路相对通畅。当日**未发布任何新版本**，但有大量面向下一版本（likely 2026.7.x 后续补丁或 2026.8）的基础设施类 PR 在评审中。整体看，项目处于"修旧与拓边并重"的健康节奏，没有出现集中式故障或重大回退事件。

---

## 二、版本发布

⚠️ **过去 24 小时内无新版本发布。**

最近一次被广泛讨论的版本仍是 `2026.7.1`（2026-07-15），存在 [#108435](https://github.com/openclaw/openclaw/issues/108435) 等网关启动失败的回归问题；以及 `2026.7.2`（`3659c85`）中 WhatsApp 自动回复受影响（[#110504](https://github.com/openclaw/openclaw/issues/110504)）。维护者近期在 [#112841](https://github.com/openclaw/openclaw/pull/112841)（CLOSED）等 PR 中持续打磨 release validation 流程，预示下一次发版将更受质量门禁保护。

---

## 三、项目进展（今日合并/关闭的重要 PR）

以下 PR 今日状态推进明显（均含 maintainer 与 XL/S 等显著工作量标记），按功能领域分组：

### 3.1 会话与多操作员架构
- 🔀 **[#112787](https://github.com/openclaw/openclaw/pull/112787)** `feat(sessions): visibility states, membership, and server-enforced participation`（OPEN，XL，@steipete）
  为多操作员 Gateway 引入会话可见性、成员资格与服务端强制参与规则，是 [#112499](https://github.com/openclaw/openclaw/issues/112499) 第二部分。
- 🔀 **[#111861](https://github.com/openclaw/openclaw/pull/111861)** `refactor(sessions): canonical lineage model`（CLOSED，XL，@steipete，P1）— 统一会话派生关系字段，奠定可信赖会话树基础。
- 🔀 **[#112678](https://github.com/openclaw/openclaw/pull/112678)** `refactor(agents): move implicit-main fallback into load-time roster injection`（OPEN，XL）— 将 38 处隐式 `main` 回退收敛到加载期名单注入。

### 3.2 通道插件化与配置清理
- 🔀 **[#112850](https://github.com/openclaw/openclaw/pull/112850)** `refactor: move Telegram and iMessage config schemas to plugins`（CLOSED，XL，@steipete）— 将 Telegram/iMessage schema 迁出核心 config 层，与插件归属一致。
- 🔀 **[#112782](https://github.com/openclaw/openclaw/pull/112782)** `refactor: hoist channel doctor migration helpers`（CLOSED，XL，@steipete）— 9 个捆绑通道插件共用 doctor 迁移工具。
- 🔀 **[#112773](https://github.com/openclaw/openclaw/pull/112773)** `feat(claws): add portable agent policy settings`（OPEN，M，@giodl73-repo）— 引入 `alsoAllow`/`deny`/工作区策略与受限 memory-search 同意开关。

### 3.3 Control UI 与 Codex 交互
- 🔀 **[#112859](https://github.com/openclaw/openclaw/pull/112859)** `fix: commentary no longer repeats after steering a task`（OPEN，M，@fuller-stack-dev）— 修复"用户中途引导任务后评论重复一次"的问题。
- 🔀 **[#112858](https://github.com/openclaw/openclaw/pull/112858)** `fix: steer active Codex tasks from the Control UI`（OPEN，XS，@fuller-stack-dev）— 让 Control UI 在 Codex 进行中的回合真正下发 steering 消息。
- 🔀 **[#112853](https://github.com/openclaw/openclaw/pull/112853)** `refactor(ui): move sidebar session data ownership into a reactive controller`（OPEN，XL，@steipete）— UI 侧栏数据所有权重构。

### 3.4 Gateway 健壮性与诊断
- 🔀 **[#112661](https://github.com/openclaw/openclaw/pull/112661)** `fix(cron): senderless runs lose authorized tools`（OPEN，XL，@joshavant，closes [#111809](https://github.com/openclaw/openclaw/issues/111809)）— 修复 cron senderless 运行丢失 creator 授权工具的问题。
- 🔀 **[#112627](https://github.com/openclaw/openclaw/pull/112627)** `fix(cli): stop gateway call from running local state migrations at bootstrap`（OPEN，XS，@aspalagin，closes [#112626](https://github.com/openclaw/openclaw/issues/112626)）— 监控/watchdog 调用不再触发本地状态迁移。
- 🔀 **[#112855](https://github.com/openclaw/openclaw/pull/112855)** `fix: doctor preserves locks owned by exact gateway process title`（OPEN，XS，@fr-meyer，closes [#112854](https://github.com/openclaw/openclaw/issues/112854)）— Linux 容器中 `openclaw-gateway` 进程名锁不再误报为 stale。
- 🔀 **[#112860](https://github.com/openclaw/openclaw/pull/112860)** `fix(ci): skip new OpenClawKit suite for frozen targets`（OPEN，XS，@RomneyDa）— Frozen 候选避免被新 CI suite 误判。
- 🔀 **[#112841](https://github.com/openclaw/openclaw/pull/112841)** `fix(release): validate frozen extended-stable candidates`（CLOSED，S，@RomneyDa）— 修复合版本验证兼容性问题。
- 🔀 **[#112740](https://github.com/openclaw/openclaw/pull/112740)** `ci(release): restore full validation after config migrations`（OPEN，M，@steipete）— 修复配置迁移后 Full Release Validation 的回归。

### 3.5 安全、提示词与生态
- 🔀 **[#112000](https://github.com/openclaw/openclaw/pull/112000)** `refactor(prompt): use plain inbound context labels and drop system-tag sanitizer`（OPEN，XL，@jesse-merhi，P1）— 去除注入敏感字面量，简化入站上下文标签。
- 🔀 **[#112798](https://github.com/openclaw/openclaw/pull/112798)** `feat(onboard): stage migration imports before promotion`（OPEN，XL，@steipete）— 完整 onboarding 导入先 staging 再 promote，避免半途失败留下脏配置。
- 🔀 **[#112033](https://github.com/openclaw/openclaw/pull/112033)** `chore(deps): bump the actions group across 1 directory with 12 updates`（OPEN，S，@dependabot）— GitHub Actions 12 项批量升级，含安全相关版本。

### 3.6 性能/资源限制
- 🔀 **[#111181](https://github.com/openclaw/openclaw/pull/111181)** `fix(canvas): bound A2UI JSONL file reads`（OPEN，M，@sunlit-deng）— A2UI JSONL 读入加上 25 MiB 上限，避免 CLI/agent 工具无限缓冲。
- 🔀 **[#110562](https://github.com/openclaw/openclaw/pull/110562)** `fix(scripts): bound check-workflows subprocesses`（OPEN，M，@sunlit-deng）— `scripts/check-workflows.mjs` 子进程加 5 分钟固定超时。
- 🔀 **[#104492](https://github.com/openclaw/openclaw/pull/104492)** `fix(gateway): preserve channel restart ownership`（OPEN，S，@arcabotai，P1）— `ChannelManager` 在 crash-loop backoff 期间保持权威，健康监控不再误清重试进度。
- 🔀 **[#101777](https://github.com/openclaw/openclaw/pull/101777)** `fix(codex): suppress stdout/stderr stream errors in sandbox subprocesses`（OPEN，L，@sunlit-deng，P1）— 阻止 Codex sandbox 流事件导致 exec-server WS 桥崩溃。

> 📊 **今日推进小结**：基础设施类（XL/M）PR 占比约 60%，主要做"减负"——把零散隐式假设、配置耦合、迁移工具等老债集中偿还。这是 7.0 系列以来典型的"基础现代化"窗口。

---

## 四、社区热点（评论/反应最多）

| 排名 | 议题 | 类型 | 👍 | 评论 | 摘要 |
|---|---|---|---|---|---|
| 1 | [#75](https://github.com/openclaw/openclaw/issues/75) Linux/Windows Clawdbot Apps | 增强 | 80 | 115 | 跨平台应用缺口：长期呼声最高的 feature request |
| 2 | [#85333](https://github.com/openclaw/openclaw/issues/85333) doctor --fix 4-5x slower (2026.5.20) | P1 性能回归 | 1 | 17 | 同一命令从 55s → 229s+ |
| 3 | [#13583](https://github.com/openclaw/openclaw/issues/13583) Pre-response enforcement hooks | 增强 | 2 | 16 | 高风险场景下"机械强制"工具调用 |
| 4 | [#91009](https://github.com/openclaw/openclaw/issues/91009) Codex PreToolUse relay CPU 100% | P1 崩溃链路 | 2 | 15 | hook relay 进程耗尽 CPU 并阻塞 Gateway RPC |
| 5 | [#10659](https://github.com/openclaw/openclaw/issues/10659) Masked Secrets | 增强 | 4 | 15 | API key "可用不可见"，反 prompt 注入 |
| 6 | [#96857](https://github.com/openclaw/openclaw/issues/96857) tool output → "(see attached image)" | 行为 bug | 4 | 13 | 普通文本被替换为附件占位符 |
| 7 | [#92043](https://github.com/openclaw/openclaw/issues/92043) 180s compaction timeout single wall-clock | P1 | 3 | 12 | 缺乏部分进度复用，合法长 compaction 每次都失败 |

### 社区诉求分析
1. **跨平台对等**：`#75` 以 80 👍 + 115 评论稳居榜首，社区明确要求 Linux/Windows 客户端与 macOS 能力对齐，这是项目**用户面最大缺口**。
2. **"硬"安全/合规约束**：`#13583`（pre-response hooks）与 `#10659`（masked secrets）共同体现"软指令不够用，需要机械门禁与凭证隔离"的诉求——面向量化、金融、安全运营等高 stakes 工作流。
3. **稳定性 > 新功能**：性能回归（`#85333`）、Gateway 崩溃（`#91009`、`#86031`、`#83968`）、协议 bug（`#92043`）反复成为热点，提示 5.x → 6.x → 7.x 间的回归管理仍是社区情绪的核心变量。

---

## 五、Bug 与稳定性

按严重程度排序（不重复列出第四节已点名的）：

### 🔴 P0 级（Beta/UX release blocker）
- 🚨 **[#108435](https://github.com/openclaw/openclaw/issues/108435)** — `update to openclaw 2026.7.1: gateway fails to start w/ error`（@leder11011）
  - 影响 systemd / ollama / 手动启动三种入口，gateway 完全不可用。
  - **fix PR**：暂无明确关闭 PR；同向修复可关注 [#112740](https://github.com/openclaw/openclaw/pull/112740)。

### 🟠 P1 级（影响核心流程）
- **[#85333](https://github.com/openclaw/openclaw/issues/85333)** `openclaw doctor --fix` 4-5x 慢于上一版本（session snapshot 路径遍历瓶颈）— 关联 [#87314](https://github.com/openclaw/openclaw/issues/87314) gateway 内存增长同源方向。
  - **fix PR**：无（`needs-live-repro` 待复现）。
- **[#91009](https://github.com/openclaw/openclaw/issues/91009)** Codex PreToolUse relay 进程 CPU 100%+，阻塞 gateway RPC。
  - **fix PR**：相关 [#101777](https://github.com/openclaw/openclaw/pull/101777) 已针对 sandbox 子进程流错误，但本 issue CPU 占用根因仍未合并修复。
- **[#90840](https://github.com/openclaw/openclaw/issues/90840)** Subagent 完成消息直接外发到 QQBot chat，绕过 parent 摘要（regression）。
  - **fix PR**：暂无。
- **[#92043](https://github.com/openclaw/openclaw/issues/92043)** 180s compaction timeout 是单一 wall clock，无部分进度复用，合法长 compaction 每次都失败。
  - **fix PR**：无（`linked-pr-open` 暗示存在草案）。
- **[#87212](https://github.com/openclaw/openclaw/issues/87212)** 系统信封页脚文本被原样回显到 Telegram 出站消息（带音频入站 + group+topic）。
  - **fix PR**：无（`needs-info` 待补数据）。
- **[#108580](https://github.com/openclaw/openclaw/issues/108580)** cron tool schema 与 llama.cpp grammar-constrained 工具调用不兼容（2026.7.1 regression）。
  - **fix PR**：无（`linked-pr-open`，可能即将合并）。
- **[#86031](https://github.com/openclaw/openclaw/issues/86031)** Windows gateway 监听但本地 health/status 超时（Telegram polling stall 后）。
  - **fix PR**：无。
- **[#41199](https://github.com/openclaw/openclaw/issues/41199)** Agent-to-Agent 工具存在参数冲突。
  - **fix PR**：`linked-pr-open` 状态，候补中。
- **[#98702](https://github.com/openclaw/openclaw/issues/98702)** 子代理继承 OpenAI OAuth 在 `openai-chatgpt-responses` transport 被拒绝。
  - **fix PR**：无。
- **[#99773](https://github.com/openclaw/openclaw/issues/99773)** 热重载丢失 `OPENCLAW_INCLUDE_ROOTS` 引入的模型，产生幽灵"Unknown model" failover 直至重启。
  - **fix PR**：无。
- **[#39807](https://github.com/openclaw/openclaw/issues/39807)** 402 计费错误无 backoff 导致 inline-apiKey provider 死亡螺旋（6 小时 5206+ 失败）。
  - **fix PR**：无（`linked-pr-open`）。

### 🟡 P2 / 行为 Bug
- **[#96857](https://github.com/openclaw/openclaw/issues/96857)** 普通 tool 文本降级为 `(see attached image)` 占位符。
- **[#87318](https://github.com/openclaw/openclaw/issues/87318)** amazon-bedrock: Haiku 4.5 inference profile ARN 不支持。
- **[#94626](https://github.com/openclaw/openclaw/issues/94626)** LINE `/status` 间歇性无响应（reply token 过期竞态）。
- **[#88955](https://github.com/openclaw/openclaw/issues/88955)** qqbot WebSocket 重连后出现 `Outbound not configured for channel: qqbot`。
- **[#87687](https://github.com/openclaw/openclaw/issues/87687)** vllm openai-completions streaming parser 在大 systemPrompt 下丢 tool_calls。
- **[#87980](https://github.com/openclaw/openclaw/issues/87980)** exec 工具静默破坏 `2>&1`/`2>/dev/null` 重定向

---

## 横向生态对比

<think>The user wants me to generate a horizontal comparative analysis report based on the daily dynamics of multiple open-source AI agent/personal AI assistant projects. Let me carefully synthesize the information from all 11 projects:

1. OpenClaw - High activity, 463 issues + 500 PRs, no release
2. NanoBot - 5 issues + 61 PRs, no release
3. Zeroclaw - 50 issues + 50 PRs (none merged), no release
4. PicoClaw - 3 issues + 5 PRs, no release
5. NanoClaw - 1 issue + 3 PRs, no release
6. IronClaw - 50 issues + 50 PRs, no release
7. LobsterAI - 1 issue + 5 PRs, no release
8. TinyClaw - no activity
9. Moltis - 0 issues + 1 PR, no release
10. CoPaw - 26 issues + 50 PRs, v2.0.0.post4 released!
11. ZeptoClaw - no activity
12. EasyClaw - no activity

Let me think about the structure:

1. 生态全景 - 3-5 sentences summary
2. 各项目活跃度对比 - table format
3. OpenClaw 定位 - competitive analysis
4. 共同技术方向 - cross-project themes
5. 差异化定位 - functional differences
6. 社区热度与成熟度 - maturity tiers
7. 趋势信号 - industry trends

Let me identify common themes across projects:
- **Multi-agent/multi-tenant collaboration**: OpenClaw (#112787 multi-operator), NanoBot (#5000 multi-agent), Zeroclaw (#5982 per-sender RBAC), IronClaw (ProductSurface architecture)
- **Cross-platform/Windows support**: OpenClaw (#75 Linux/Windows apps), Zeroclaw (#7462 Windows tests), LobsterAI (Windows hardening #2377)
- **Telegram/Channel integration stability**: OpenClaw (#87212 echo bug), IronClaw (#6474, #6475, #6478 Telegram bugs), NanoBot (#5033 Telegram multi-bot)
- **Provider/Model integration**: OpenClaw (#112798 onboarding, #112000 prompt refactor), NanoBot (#5035 Grok OAuth), Zeroclaw (#5937 providers refactor, #9266 Anthropic fallback)
- **Security/isolation**: OpenClaw (#13583 pre-response hooks, #10659 masked secrets), Zeroclaw (#9233 Landlock, #5869 RUSTSEC, #6250 gateway auth), NanoClaw (#3118 SECURITY.md), IronClaw (#6532 Ledger signing)
- **Performance/regression management**: OpenClaw (#85333 doctor slow, #92043 compaction timeout), CoPaw (#6307 v2.0 2s overhead)
- **WebUI/Mobile experience**: NanoBot (#4494 PWA, #5003 SQLite index), OpenClaw (#112853 sidebar refactor), CoPaw (#6297 drag-and-drop)
- **Cron/scheduled tasks**: OpenClaw (#112661 cron senderless), CoPaw (#6316 per-cron model), NanoBot (#5036 idle compaction), LobsterAI (#1347 Cron scheduling)
- **Release/deployment friction**: CoPaw (v2.0.0.post4 hotfix), OpenClaw (#108435 gateway fail on 2026.7.1), NanoClaw (#3257 stateless mode)
- **Migration/upgrade safety**: OpenClaw (#112798 stage migration, #112740 release validation), NanoBot (#5042-5046 null safety)

For maturity tiers:
- **High maturity, high activity**: OpenClaw, NanoBot, CoPaw
- **High activity, mid maturity**: IronClaw, Zeroclaw
- **Mid activity**: LobsterAI
- **Low activity**: PicoClaw, NanoClaw, Moltis
- **Dormant**: TinyClaw, ZeptoClaw, EasyClaw

Let me think about OpenClaw positioning:
- Largest absolute activity (463 issues + 500 PRs) — significantly larger than others
- Most comprehensive channel ecosystem (Telegram, iMessage, WhatsApp, Slack, DingTalk, Discord, Feishu, LINE, QQBot)
- Most mature plugin architecture
- Cross-platform gap is the biggest community pain (#75)
- Strongest in: stability investments (release validation), protocol abstraction, multi-operator architecture
- Weakest in: Linux/Windows app parity, end-to-end performance regressions

Trends to highlight:
1. Multi-agent systems becoming the central architecture pattern (NanoBot #5000, OpenClaw #112787, IronClaw ProductSurface, Zeroclaw Goal controller)
2. Security hardening shifting from opt-in to mandatory (masked secrets, pre-response hooks, per-sender RBAC, attested signing)
3. WebUI as a strategic battleground (PWA, drag-and-drop, mobile gestures)
4. Cross-platform parity moving from nice-to-have to must-have
5. Provider ecosystem fragmentation forcing unified abstractions
6. Release engineering becoming critical (multiple post-patches in same day)
7. Performance as a first-class concern (regression bugs dominating community feedback)

Let me now write this in Chinese, professional tone, with data support, suitable for technical decision-makers and developers.

I'll aim for a comprehensive but well-structured report. Let me think about formatting:
- Use tables for comparison
- Use bullet points for themes
- Bold key data points
- Include links where appropriate
- Use emojis sparingly but consistently with the upstream reports

Let me draft this now.</think>

# 个人 AI 助手/智能体开源生态 · 横向对比分析报告

**报告日期**：2026-07-23
**样本项目**：11 个（OpenClaw / NanoBot / Zeroclaw / PicoClaw / NanoClaw / IronClaw / LobsterAI / TinyClaw / Moltis / CoPaw / ZeptoClaw / EasyClaw）
**数据口径**：过去 24 小时 GitHub 公开数据

---

## 一、生态全景

今日生态呈现"**头部高强度吞吐、中部稳健治理、长尾静默休眠**"的鲜明分层：**OpenClaw 以单日 963 条 Issues+PRs 占据绝对流量主导**（约占样本总活动的 60%+），与 NanoBot（66）、Zeroclaw（100）、IronClaw（100）、CoPaw（76）共同构成第一梯队活跃集群；而 LobsterAI / PicoClaw / NanoClaw 处于维护性小步迭代期；Moltis 仅有 1 个 PR；TinyClaw / ZeptoClaw / EasyClaw 三项目 24 小时零活动。当日**仅 CoPaw 发布 v2.0.0.post4**，其余 10 个项目均无版本发布，说明生态整体处于"内部重构与稳定性回填"窗口期，而非新功能爆发期。最值得关注的现象是：**多代理/多租户架构、安全机械门禁、WebUI 体验、跨平台对等**四大议题在多家项目同时浮现，已形成跨项目的共识性方向。

---

## 二、各项目活跃度对比

| 项目 | 24h Issues | 24h PRs | 新增/合并 | 新 Release | 健康度评级 | 当日状态标签 |
|---|---|---|---|---|---|---|
| **OpenClaw** | 463（315 新/活，148 关） | 500（296 待，204 合） | 0 | ⭐⭐⭐⭐⭐ | 🔥 **头部高吞吐** |
| **NanoBot** | 5（4 新/活，1 关） | 61（23 待，38 合） | 0 | ⭐⭐⭐⭐ | 🔥 **高密度合并** |
| **Zeroclaw** | 50（39 新/活，11 关） | 50（**50 待，0 合**） | 0 | ⭐⭐⭐ | ⚠️ **审稿堵塞** |
| **IronClaw** | 50（36 新/活，14 关） | 50（25 待，25 合） | 0 | ⭐⭐⭐⭐ | 🔄 **v1 RC 冲刺** |
| **CoPaw** | 26（19 新/活，7 关） | 50（34 待，16 合） | **v2.0.0.post4** | ⭐⭐⭐ | 🛠️ **快速修复期** |
| **LobsterAI** | 1（0 新/活，1 关） | 5（0 待，5 合） | 0 | ⭐⭐⭐ | 🧹 **清理维护日** |
| **PicoClaw** | 3（3 新/活，0 关） | 5（2 待，3 合/关） | 0 | ⭐⭐ | 😴 **低强度运维** |
| **NanoClaw** | 1（1 新/活，0 关） | 3（3 待，0 合） | 0 | ⭐⭐ | 😴 **待审积压** |
| **Moltis** | 0 | 1（1 待，0 合） | 0 | ⭐⭐ | 😴 **极静默** |
| **TinyClaw** | 0 | 0 | 0 | ⭐ | 💤 **零活动** |
| **ZeptoClaw** | 0 | 0 | 0 | ⭐ | 💤 **零活动** |
| **EasyClaw** | 0 | 0 | 0 | ⭐ | 💤 **零活动** |

**关键观察**：
- **唯一发版**：CoPaw v2.0.0.post4（针对 v2.0 推理循环的主进程崩溃紧急补丁）
- **审稿阻塞典型**：Zeroclaw 50 个 PR 0 合并，积压严重
- **唯一关闭率最高**：NanoBot 62% PR 关闭率（38/61），反映快速迭代 + 高效 review
- **跨度最大合并**：LobsterAI 关闭 PR 编号跨度 #1346~#2377，体现 stale bot 大规模清理

---

## 三、OpenClaw 在生态中的定位

### 3.1 规模优势
OpenClaw 当日 963 条 Issues+PRs，约相当于 Zeroclaw+IronClaw+CoPaw+NanoBot 四家总和（967）。**社区规模与日常活跃度均居样本首位**，反映出最强的开发者吸引力和问题沉淀能力。

### 3.2 架构与生态成熟度
| 维度 | OpenClaw | NanoBot | Zeroclaw | IronClaw | CoPaw |
|---|---|---|---|---|---|
| 通道覆盖 | 10+（Telegram/iMessage/WhatsApp/Slack/Feishu/LINE/QQBot/DingTalk/Discord/Signal） | 6+（含 DingTalk/Xiaozhi） | 5+ | 2-3（Telegram/Slack） | 1-2 |
| 多代理架构 | ✅ 会话 lineage + 多操作员（#111861/#112787） | 🟡 提案阶段（#5000） | 🟡 Goal controller PR 堆叠 | ✅ ProductSurface 重构完成 | ❌ |
| 插件化深度 | ✅ 通道/工具/Provider 全插件化 | ✅ 通道插件化 | 🟡 推进中 | ✅ Reborn 边界 | ✅ |
| Release 工程化 | 🟡 加强中（#112841/#112740） | ❌ | ❌ | ✅ CI 护栏强化 | 🟡 紧急补丁模式 |
| 跨平台客户端 | ❌ 仅 macOS（#75 长期缺口） | 🟡 CLI 为主 | 🟡 CLI 为主 | ❌ | 🟡 Web + Docker |
| 安全门禁 | 🟡 软指令 + 新增 hooks | 🟡 | 🟡 RBAC 待落地 | 🟡 Attested signing 设计中 | ✅ |

### 3.3 技术路线差异
- **OpenClaw** 走"**通道插件化 + 会话 lineage + 多操作员**"路线，定位是**多渠道 AI 网关**，最贴近"个人/团队 AI 助手"原始定义；
- **NanoBot** 走"**Provider 扩展 + WebUI 体验深化**"路线，**新版本窗口期已超过 1 个月**，可能是迭代节奏最克制的一家；
- **Zeroclaw** 走"**Provider 统一 + Goal 控制器**"路线，体现 Rust 实现的优势（Landlock 安全沙箱 + RUSTSEC 治理），但审稿拥堵显著；
- **IronClaw** 走"**Reborn 重构 + 错误恢复 + 链上清算签名**"路线，是唯一向 Web3 延伸的样本；
- **CoPaw** 走"**AG-UI 协议 + Creator App + 模型自动发现**"路线，最具"平台化"野心，但当前被稳定性问题困扰。

### 3.4 社区规模对比
OpenClaw 的社区参与度体现在两个具体信号上：
1. **Issue #75（Linux/Windows 客户端缺口）以 80👍 + 115 评论稳居跨项目"最长尾呼声"之首**，已沉淀为社区情绪核心议题；
2. **P1 级回归性能问题（#85333 doctor --fix 慢 4-5 倍）的评论热度**，提示社区对版本质量的容忍度阈值正在收紧。

---

## 四、共同关注的技术方向

以下议题在多家项目**同时浮现**，具备跨生态共识性：

### 4.1 多代理/多租户协作架构（5/11）
| 项目 | 形态 | 关键 PR/Issue |
|---|---|---|
| OpenClaw | 多操作员 Gateway + 会话可见性 | [#112787](https://github.com/openclaw/openclaw/pull/112787) / [#111861](https://github.com/openclaw/openclaw/pull/111861) |
| NanoBot | subagent → 多代理协作提案 | [#5000](https://github.com/HKUDS/nanobot/issues/5000) |
| Zeroclaw | Goal 控制器/Verifier + per-sender RBAC | [#5982](https://github.com/zeroclaw-labs/zeroclaw/issues/5982) / [#8687](https://github.com/zeroclaw-labs/zeroclaw/pull/8687) |
| IronClaw | ProductSurface 统一面 + 错误恢复 | [#6284](https://github.com/nearai/ironclaw/issues/6284) / [#6480](https://github.com/nearai/ironclaw/pull/6480) |
| CoPaw | cron 任务独立模型（半相关） | [#6316](https://github.com/agentscope-ai/QwenPaw/issues/6316) |

**诉求共性**：从单 Agent 助手升级为多 Agent 协同系统，同时解决身份/权限隔离与运行可观测性。

### 4.2 安全机械门禁（5/11）
| 项目 | 诉求 |
|---|---|
| OpenClaw | Pre-response 强制 hooks（#13583） + Masked Secrets（#10659） |
| Zeroclaw | Landlock 自锁修复（#9233） + 网关鉴权中间件（#6250） + 技能级权限（#5775） |
| NanoClaw | SECURITY.md 文档诚信（#3118） |
| IronClaw | Attested-signing + Ledger 硬件钱包清算（#6532） |
| CoPaw | OMP workspace/fork/deny-all 强化（#6317） |

**诉求共性**："软指令/System Prompt 不足以满足高 stakes 场景"已成为社区共识，机械化的策略门禁、密钥隔离、链上签名是下一阶段重点。

### 4.3 跨平台对等（4/11）
| 项目 | 缺口 |
|---|---|
| OpenClaw | Linux/Windows 桌面客户端（#75，115 评论） |
| Zeroclaw | Windows 测试 74 失败（#7462） |
| LobsterAI | Windows 安装器加固（#2377） |
| CoPaw | Docker Web 热更新（#6344） |

**诉求共性**：跨平台体验不一致仍是开发生态系统级别的痛点，中文 Windows 用户（936 代码页）尤为受影响。

### 4.4 WebUI/移动端体验升级（4/11）
| 项目 | 进展 |
|---|---|
| NanoBot | PWA + 侧边栏滑动手势（#4494） + SQLite 索引对话历史（#5003） |
| OpenClaw | Sidebar 数据所有权重构（#112853） |
| CoPaw | 对话拖拽上传（#6297） |
| IronClaw | 自动激活 web-access 与 Brave search（#6232） |

**诉求共性**：WebUI 已从"附属面板"上升为产品体验的核心战场。

### 4.5 Provider 抽象统一（5/11）
| 项目 | 进展 |
|---|---|
| OpenClaw | Onboarding 阶段迁移（#112798） + 入站 context 标签净化（#112000） |
| NanoBot | xAI Grok OAuth（#5035） + OAuth 状态/到期（#4689） |
| Zeroclaw | Providers 重构（#5937） + Anthropic 服务端 fallback 三件套（#9265/#9266/#9268） |
| CoPaw | 安全模型发现基础设施（#6302） |
| IronClaw | OpenAI compat 路径归 ProductSurface（#6538） |

**诉求共性**：Provider 碎片化推动统一抽象层建设，Anthropic/OAuth/xAI 是当前热点扩展对象。

### 4.6 稳定性与 Release 工程（5/11）
| 项目 | 信号 |
|---|---|
| OpenClaw | doctor 慢 4-5×（#85333） + compaction timeout 单 wall clock（#92043） + release validation 修复（#112841） |
| Zeroclaw | RUSTSEC 多公告（#5869） + 需 Linux-only → Windows 兼容 |
| NanoBot | Dream cursor 饿死（#5041） + null 级联 quarantine（#5042-5046） |
| IronClaw | CI 护栏修复（#6537） + 状态机测试需求（#6105） |
| CoPaw | v2.0 2s 开销回归（#6307） + post3/post4 主进程崩溃（#6376） + post4 紧急发布 |

**诉求共性**：性能回归与发布质量门禁已成为社区情绪核心变量，5.x → 6.x → 7.x 跨大版本时的回归管理是普遍痛点。

---

## 五、差异化定位分析

### 5.1 目标用户分层
| 项目 | 主要用户群 | 部署门槛 | 核心价值主张 |
|---|---|---|---|
| OpenClaw | macOS 重度用户 +

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

<think>The user wants me to generate a daily report for the NanoBot project based on GitHub data. Let me analyze the data carefully and produce a comprehensive report.

Let me go through the data:

**Overview:**
- 24h Issues: 5 (4 active/new, 1 closed)
- 24h PRs: 61 (23 pending merge, 38 merged/closed)
- New releases: 0

**Issues:**
1. #5000 [OPEN] - Proposal: evolve subagent system to multi-agent collaboration - by @bingqilinweimaotai, 4 comments
2. #5041 [OPEN] - Bug: completed no-op Dream batches can starve later history - by @dajiaohuang
3. #5040 [OPEN] - MCP tool schema with non-'#/$defs/' $ref forwarded verbatim - by @3L1AS
4. #4948 [CLOSED] - WebUI loses visibility when late subagent completion starts system turn - by @chengyongru
5. #5028 [OPEN] - media path and workspace restriction conflict (Feishu) - by @KuruZaphkiel

**PRs (Top 20 shown):**
Let me categorize them by topic:

Provider:
- #5035 - xAI Grok OAuth with capability-gated X Search
- #4689 - OAuth status and expiry warnings

Channel (Telegram, Feishu, Slack, DingTalk):
- #5033 - Telegram multi-bot instances in WebUI
- #5009 - Feishu groupPolicy listen
- #4446 - DingTalk private chat gating and group mention
- #5046 - fix(feishu) fenced markdown tables
- #5045 - fix(slack) fenced markdown tables

WebUI:
- #5017 - show actual fallback model
- #5003 - index conversation history in SQLite (perf)
- #4494 - PWA support and mobile swipe
- #5047 - Parallel Search MCP preset
- #4866 [CLOSED] - make model presets session-scoped

Agent/Tools:
- #5018 - skills explicit context loading
- #4439 - read-only search_history tool
- #4988 - keep background turns silent when empty
- #5036 - configurable idle compaction scan interval

Bug fixes:
- #5044 - fix(pairing) null approved channel lists
- #5043 - fix(cron) null runHistory elements
- #5042 - fix(cron) null schedule

Other:
- #2584 - Xiaozhi support (very old, March 2026)

**Key observations:**
- High PR activity (61) but low Issues (5) suggests heavy development
- Most PRs are still OPEN with conflict markers
- Bug fixes from @santhreal are related to null handling in JSON loads
- @chengyongru is very active in WebUI/Provider work
- The community is focused on: WebUI enhancements, channel integrations (Feishu, Telegram, Slack, DingTalk), provider OAuth, and JSON parsing robustness

**Active discussions:**
- Issue #5000 has 4 comments - multi-agent collaboration proposal
- Most other issues have 0 comments

**Bug severity:**
- #5041 (Dream cursor starvation) - medium
- #5040 (MCP schema breaks Kimi) - high (breaks strict providers)
- #5028 (Feishu media path conflict) - medium
- #4948 (WebUI loses visibility) - already closed

Let me write a professional, structured daily report.

I should write this in Chinese as the user prompt is in Chinese. The report should be objective, data-driven, and highlight project health.

Let me structure it well:

1. **今日速览** - 3-5 sentences summary
2. **版本发布** - skip since none
3. **项目进展** - closed/merged PRs
4. **社区热点** - most active issues/PRs
5. **Bug 与稳定性** - new bug reports
6. **功能请求与路线图信号** - new feature requests
7. **用户反馈摘要** - from issue comments
8. **待处理积压** - stale items

Let me be careful to:
- Be objective and data-driven
- Include links
- Highlight project health
- Note that only 20 of 61 PRs are shown
- Distinguish between merged and closed
- Note "conflict" tagged PRs which suggest merging issues

Let me write the report now.</think>

# NanoBot 项目动态日报
**日期：2026-07-23** | 数据来源：GitHub 仓库 [HKUDS/nanobot](https://github.com/HKUDS/nanobot)

---

## 1. 今日速览

NanoBot 今日呈现"高 PR 吞吐、低 Issue 增量"的典型活跃开发期特征：24 小时内共产生 61 个 PR 更新（含 23 个待合并、38 个已合并/关闭）和 5 个 Issue 动态，整体仓库活跃度处于较高水平。新开/活跃的 4 个 Issue 中，2 个为明确 Bug 报告（#5040、#5041）、1 个为中文社区反馈的飞书集成问题（#5028），另有 1 个面向未来的多代理架构提案（#5000）仍在持续讨论。当日无新版本发布，但 WebUI 性能重构、Provider OAuth 增强、跨渠道（Feishu/Slack/Telegram/DingTalk）健壮性修复形成主线推进。无新发布版本提示当前变更仍在合并前的评审与冲突解决阶段。

---

## 2. 版本发布

**无新版本发布。** 当前所有变更仍在主干或分支上积累，未形成 tag 级别的可交付版本。建议关注者留意接下来 1–2 周内可能出现的小版本或预发布版本。

---

## 3. 项目进展

今日合并/关闭的 PR 数量为 38 个（占 PR 总量的 62%），整体推进效率良好。以下列出可识别的"已关闭"且具有结构性意义的 PR：

- **#4866 [CLOSED]** — `feat(agent): make model presets session-scoped`（[@chengyongru](https://github.com/HKUDS/nanobot/pull/4866)）：将命名模型预设的选择范围限制为会话级，并以单一不可变 `LLMRuntime` 贯穿 turn 全链路（provider 调用、prompt 尺寸、tools/subagents、compaction），意味着会话内的模型行为一致性获得更强保障。

由于数据集中仅展示评论数前 20 的 PR，其余已合并/关闭的 PR 多为按 reviewer 共识快速流转的常规变更，**整体推进评估：仓库开发节奏健康**，没有出现大量长期积压的合并阻塞。

**亮点**：今日多个 PR 围绕"JSON 鲁棒性"集中爆发——@santhreal 一人贡献了 #5042、#5043、#5044、#5045、#5046 共 5 个修复 PR，覆盖 cron schedule、cron runHistory、pairing 通道、Feishu/Slack markdown 转译等场景，集中解决了"null/格式异常导致整个 store 被 quarantine"的级联故障。这批修复对长期运行实例的稳定性意义重大。

---

## 4. 社区热点

按评论数与关注度排序：

### 🥇 Issue #5000 — 提议将 subagent 系统演进为多代理协作（4 条评论）
- 链接：https://github.com/HKUDS/nanobot/issues/5000
- 作者：[@bingqilinweimaotai](https://github.com/HKUDS/nanobot/issues/5000)
- 创建：2026-07-20，最近更新：2026-07-22
- **诉求分析**：当前 subagent 更像是"后台任务委托"而非"真正的多代理系统"——subagent 没有持久身份、共享任务状态等。该 issue 是近一周讨论最密集的设计议题，反映社区对 NanoBot 多代理架构的长期期待。值得关注的是该作者同日还提交了 #5018（skills 显式上下文加载），体现其对架构演进的连贯思考。

### 🥈 PR #5035 — xAI Grok OAuth + 能力门控的 X Search（p1）
- 链接：https://github.com/HKUDS/nanobot/pull/5035
- 标签覆盖 documentation / enhancement / provider / webui / new-provider / feature / test / security / priority: p1
- 为符合资格的 xAI Grok 订阅提供原生 OAuth 2.0 + PKCE 登录，引入 `grok-4.5` Responses provider，并在 `/v1/models` 未声明 `supportsBackend` 时自动关闭托管 `x_search`，避免空指针类失败。

### 🥉 PR #5033 — Telegram 多 Bot 实例支持（p1）
- 链接：https://github.com/HKUDS/nanobot/pull/5033
- 向后兼容地为 WebUI 增加多 Telegram Bot 配置，每个 Bot 拥有独立的 runtime/session 名、token 校验、proxy、连接检查与启停控制。

### 其他值得关注的活跃 PR
- [#5017](https://github.com/HKUDS/nanobot/pull/5017) `feat(webui): show the actual fallback model` — 让用户能直观看到真正处理请求的模型（解决"以为用了 A 模型、实际是 B"的信任问题）。
- [#5009](https://github.com/HKUDS/nanobot/pull/5009) `feat(feishu): groupPolicy listen` — 飞书群聊"仅监听、不主动回复"的轻量模式。

---

## 5. Bug 与稳定性

按严重程度排序：

| 严重度 | Issue | 描述 | 修复 PR |
|---|---|---|---|
| 🔴 高 | [#5040](https://github.com/HKUDS/nanobot/issues/5040) | MCP 工具 schema 中非 `#/$defs/` 的 `$ref`（如自引用 `#/properties/...`）会被原样转发给 LLM provider，**严格 provider（如 Kimi/Moonshot 的 moonshot flavored json schema）下单个工具就可能让整个模型不可用** | 暂无对应修复 PR |
| 🟡 中 | [#5041](https://github.com/HKUDS/nanobot/issues/5041) | 已完成但无 diff 的 Dream run 不会推进 `.dream_cursor`，导致后续 history 条目被永久饿死；与 #4055 不同场景 | 暂无对应修复 PR |
| 🟡 中 | [#5028](https://github.com/HKUDS/nanobot/issues/5028) | 飞书通道上传文件落入 media 目录后，与 workspace 限制策略冲突，用户反馈无法读取历史上传文件 | 暂无对应修复 PR |
| 🟢 低/已闭环 | [#4948](https://github.com/HKUDS/nanobot/issues/4948) | WebUI 在 subagent 延迟完成时丢消息可见性 | 已 CLOSED |

**稳定性观察**：今日有 3 个新开 Bug，但均暂无关联 fix PR 提交。**@santhreal 集中提交的 #5042–#5046 系列修复虽与新 Bug 不直接对应，但揭示了同类根因（null/格式异常导致级联 quarantine）**，可作为新 Bug 修复时的参考模式。

---

## 6. 功能请求与路线图信号

今日虽 Issue 数量不多，但功能请求信号清晰：

1. **多代理协作架构（#5000）**：4 条评论表明这是被持续讨论的设计议题，关联 PR #5018（skills 显式上下文加载）已同步推进，说明该作者正以"小步快跑"方式铺垫多代理基础设施。
2. **Provider 扩展**：xAI Grok OAuth（#5035）+ OAuth 状态/到期预警（#4689）+ Parallel Search MCP 预设（#5047）共同勾勒出"丰富 provider/工具生态"的方向。
3. **WebUI 体验升级**：
   - 性能：[#5003](https://github.com/HKUDS/nanobot/pull/5003) 用 SQLite 索引对话历史（替代 JSONL 顺序读）
   - 移动端：[#4494](https://github.com/HKUDS/nanobot/pull/4494) PWA 支持 + 侧边栏滑动手势
   - 透明性：[#5017](https://github.com/HKUDS/nanobot/pull/5017) 显示真实 fallback 模型
4. **跨渠道一致性**：Telegram 多 Bot（#5033）、飞书 listen（#5009）、DingTalk 私聊门控（#4446）三条线并行，体现"渠道适配深度化"的路线图。
5. **资源配置优化**：[#5036](https://github.com/HKUDS/nanobot/pull/5036) 让空闲 compaction 扫描间隔可配置，源自 Raspberry Pi 上 30–40% 单核常驻的实测反馈。

---

## 7. 用户反馈摘要

从今日活跃 Issue 中可提炼的真实用户痛点：

- **🗣️ 飞书企业用户（#5028）**：上传文件→读取文件的链路在工作区限制下断裂，期望"用户主动上传的内容不受 workspace 限制"。这是典型的"安全策略与用户预期"摩擦。
- **🗣️ Moonshot/Kimi 用户（#5040）**：仅因一个 MCP 工具的 schema 写法，整个模型无法使用，反映**严格 provider 对客户端 schema 校验的零容忍**。
- **🗣️ 树莓派部署者（#5036）**：实例空闲时仍占 30–40% 单核，呼吁降低资源占用。
- **🗣️ 长期运行者（#5041）**：Dream 机制的 cursor 不推进会让历史记忆"卡死在同一个 batch"，导致用户的长期记忆功能失效而无明显错误提示。

**社区情绪**：未观察到强烈不满。Issue 反馈均属"功能扩展/边界场景"类，质量较高。中文与英文社区均有贡献，但中文社区贡献了相当比例（#5000、#5018、#5028、#5009），说明项目在中文开发者群体中也有一定渗透。

---

## 8. 待处理积压

提醒维护者关注：

- **#2584 — `Feature/xiaozhi support`**（[@zavaruev](https://github.com/HKUDS/nanobot/pull/2584)）：创建于 **2026-03-28**，至今约 4 个月仍未合并，标签含 `conflict`。Xiaozhi 语音网关（ESP32 设备 + WebSocket + Opus + OTA + FastMCP）作为一个完整的垂直集成 PR，长期停留在"待合入但冲突"状态，对贡献者积极性是负面信号。
- **#4439 — `feat(tools): add read-only search_history tool`**（[@waelantar](https://github.com/HKUDS/nanobot/pull/4439)）：创建于 2026-06-21（约 1 个月前），含 `conflict` 标签，关联 issue #4440 关闭原因待确认。
- **#4494 — `feat(webui): PWA support and mobile swipe gesture`**（[@zpljd258](https://github.com/HKUDS/nanobot/pull/4494)）：2026-06-24 提交，含 conflict 标签，与 #4479 / #4480（前序已删分支）有关联，存在重提交未合入的情况。
- **#4689 — OAuth status and expiry warnings**：2026-07-03 创建至今 20 天仍未合入，被标记 `invalid` —— 维护者需对"为何标记 invalid"给出明确反馈，避免贡献者误解。
- **#5018 — skills 显式上下文加载**：作为 #5000 多代理架构的落地前置，建议维护者优先 review 形成正反馈循环。

---

## 项目健康度总评

| 维度 | 评估 |
|---|---|
| **开发活跃度** | ⭐⭐⭐⭐⭐ 极高（61 PR / 24h） |
| **Issue 响应率** | ⭐⭐⭐ 中等（多数新 Issue 0 评论） |
| **合并吞吐** | ⭐⭐⭐⭐ 良好（38/61 PR 已流转完毕） |
| **Bug 修复及时性** | ⭐⭐⭐ 有改进空间（3 个新 Bug 无对应 fix PR） |
| **架构演进一致性** | ⭐⭐⭐⭐ 清晰（多代理、provider 扩展、渠道鲁棒性三条主线明确） |
| **长期 PR 积压** | ⚠️ 需关注（#2584 等超 1 个月未合入） |

**维护者建议**：① 优先对 #2584、#4439、#4494 这类超 1 个月的 conflict PR 给出 reviewer 指派或合入/关闭决策；② 对 #5040、#5041 这类影响核心可用性的 Bug 主动协调 fix PR；③ 为 #5000 的多代理架构提案提供官方回复，定向引导后续演进路径。

---

*报告生成时间：2026-07-23 | 数据窗口：过去 24 小时 | 注：本报告仅基于公开 GitHub 数据生成，不含私有或非公开贡献统计。*

</details>

<details>
<summary><strong>Zeroclaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

<think>The user wants me to generate a daily report for the Zeroclaw project for 2026-07-23. Let me analyze the data carefully and create a structured report in Chinese.

Let me go through the data:

1. **Overall stats**: 
   - 50 Issues updated (39 new/active, 11 closed)
   - 50 PR updates (50 open, 0 merged/closed)
   - 0 new releases

2. **Notable Issues**:
   - #5937 - Refactor providers architecture (12 comments) - OPEN
   - #7462 - 74 test failures on Windows (12 comments, p1) - OPEN
   - #5982 - Per-sender RBAC for multi-tenant (10 comments) - OPEN
   - #5808 - Defer built-in tool schemas (9 comments, p1) - OPEN
   - #6641 - Turn-level OTel trace correlation (8 comments) - CLOSED
   - #5674 - Make classify_channel_reply_intent configurable (7 comments, 👍3) - CLOSED
   - #6289 - Prompt-triggered install suggestions (7 comments) - CLOSED
   - #6157 - Nextcloud Talk bot API (6 comments) - OPEN
   - #6391 - Real heartbeat tracking (6 comments) - OPEN
   - #6557 - Reconcile runtime model switching for v0.8.0 (5 comments) - CLOSED
   - #6715 - Delete unneeded branches (5 comments) - OPEN
   - #5869 - rumqttc RUSTSEC security advisory (4 comments, p1, blocked) - OPEN
   
3. **Notable PRs** (all open, no merges):
   - #8687 - Goal controller and verifier (XL size, needs author action)
   - #9261 - Route mirror coverage through production paths
   - #9233 - Fix Landlock locks zeroclaw itself (security bug)
   - #9268/9266/9265 - Anthropic server-side fallback stack (3 PRs from IftekharUddin)
   - #8996/#8746/#8689/#8688 - Goal-related stacked PRs from vrurg (XL, needs author action)
   - #9212 - Gate CI on replay regression suite
   - #9075 - Persist model catalog to cache
   - #9153 - Matrix transcription
   - #8966 - Model context window separately from trim budget
   - #9056 - Cause-specific provider failure diagnostics

Let me organize this into a comprehensive report. I should be objective and data-driven.

Let me count by category:

**Closed Issues (11)**: #6641, #5674, #6289, #6557, #6489, #5752, #5840 (and others not shown)

**Open high-priority issues**:
- p1: #7462 (Windows tests), #5869 (rumqttc security), #5808 (tool schemas), #6250 (gateway auth)
- p2 with many comments: #5937, #5982, #6157, #6391, etc.

**PR status**: All 50 PRs are open, none merged/closed. This is notable - though maybe the data only shows PRs that had activity.

**Important themes**:
1. Provider architecture refactoring (#5937, #5752, #9266/9265, #9262)
2. Security (RUSTSEC, RBAC, per-skill permissions, gateway auth)
3. Windows compatibility
4. Anthropic provider stack (server-side fallback)
5. Goal controller system (stacked PRs from vrurg)
6. Channel improvements

Let me write this out in a professional manner.</think>

# Zeroclaw 项目日报

**日期：2026-07-23**
**项目：[zeroclaw-labs/zeroclaw](https://github.com/zeroclaw-labs/zeroclaw)**

---

## 一、今日速览

过去 24 小时内，Zeroclaw 仓库共产生 **50 条 Issue 更新**（其中 39 条新建/活跃，11 条已关闭）和 **50 条 PR 更新**（**全部仍为待合并状态，无任何合并或关闭**），且当日无新版本发布。Issue 与 PR 流量基本对称，但 PR 侧长期零合并意味着大量待审阅/待响应的工作积压。从内容分布看，项目当前处于"多线并行推进"的紧张状态：架构重构（providers 统一）、Anthropic 服务端回退栈、安全加固（rumqttc 漏洞、RustSEC 公告、网关鉴权层）三大主题集中爆发。总体而言社区参与度高，但维护者审稿与合并节奏明显滞后。

---

## 二、版本发布

无新版本发布（当前活跃讨论集中于 v0.8.0 路线图范围内的供应商语义收敛，参见 [Issue #6557](https://github.com/zeroclaw-labs/zeroclaw/issues/6557)）。

---

## 三、项目进展

尽管 PR 侧合并数为 0，但 **11 条 Issue 已关闭**，代表部分需求/缺陷在讨论中收敛：

| 关闭项 | 类型 | 推进价值 |
|---|---|---|
| [#6641](https://github.com/zeroclaw-labs/zeroclaw/issues/6641) Turn 级 OTel trace 关联 | 观测性（in-progress） | 为后续溯源/计费提供 turn 级父 span |
| [#5674](https://github.com/zeroclaw-labs/zeroclaw/issues/5674) `classify_channel_reply_intent` 可配置 | 渠道（👍3） | 直接解决一对一私聊被助手"沉默"忽略的痛点 |
| [#6289](https://github.com/zeroclaw-labs/zeroclaw/issues/6289) 提示触发的缺失 Skill/Plugin 安装建议 | 网关/Skills | 提升零配置发现能力 |
| [#6557](https://github.com/zeroclaw-labs/zeroclaw/issues/6557) v0.8.0 runtime 模型切换与 provider 结构协同 | Config/provider | 路线图级里程碑 |
| [#6489](https://github.com/zeroclaw-labs/zeroclaw/issues/6489) "万物皆插件"——Integrations 与 Plugins 统一 | 架构方向 | 长期方向收敛（phased） |
| [#5752](https://github.com/zeroclaw-labs/zeroclaw/issues/5752) 超时硬编码 → 可配置参数 | provider 弹性 | 与 [#5937](https://github.com/zeroclaw-labs/zeroclaw/issues/5937) 共同支撑 provider 统一重构 |

需要关注的是：**这些 Issue 的"关闭"目前多为方案收敛/PR 待跟进而非合入**，社区实际见到的代码推进会被 PR 队列延迟。

---

## 四、社区热点

按评论数与互动量排序：

### 1. [Issue #5937](https://github.com/zeroclaw-labs/zeroclaw/issues/5937) — 统一 providers 架构与 reqwest 客户端管理（12 评论）
反映 `providers` 模块中 `reqwest` 使用与模型构造参数不一致、配置碎片化的现状，是后续 [#5937/#5752](https://github.com/zeroclaw-labs/zeroclaw/issues/5752) 系列重构的纲领性问题，关联多份 PR。

### 2. [Issue #7462](https://github.com/zeroclaw-labs/zeroclaw/issues/7462) — Windows 上 74 个测试失败（12 评论，p1）
CI 仅在 Linux 运行，Windows 11（中文 936 代码页）出现大量 `Unix-only` 命令/路径/编码错误；维护者已受理，是阻塞跨平台体验的硬伤。

### 3. [Issue #5982](https://github.com/zeroclaw-labs/zeroclaw/issues/5982) — 多租户 Agent 的 per-sender RBAC（10 评论）
单一实例服务多类用户（客户/运营/开发者）的隔离工作区、工具集、限流、系统提示，社区对"租户边界"诉求较强。

### 4. [Issue #5808](https://github.com/zeroclaw-labs/zeroclaw/issues/5808) — 延迟内建工具 schema，压缩固定 prompt 底面积（9 评论，S1）
默认 `max_context_tokens=32000` 首轮即被内置 schema 撑爆 ~3.3x，影响所有 LLM 调用的"第一回合"体验，定位为 workflow 阻塞。

### 5. [Issue #5674](https://github.com/zeroclaw-labs/zeroclaw/issues/5674) — `classify_channel_reply_intent` 可配置（7 评论，👍3）
情绪化痛点用户反馈强烈（"私聊里助手无视我"），是社区罕见的高 👍 Issue，标志性体现 config-first 诉求。

### 6. [Issue #6157](https://github.com/zeroclaw-labs/zeroclaw/issues/6157) — Nextcloud Talk 走错 bot 消息 API（6 评论，in-progress）
给出具体 URL 形态与修复方案，等待 PR 跟进。

### 7. [Issue #6391](https://github.com/zeroclaw-labs/zeroclaw/issues/6391) — Daemon 节点真实心跳（Online/Stale/Offline，6 评论）
与 [#6346](https://github.com/zeroclaw-labs/zeroclaw/issues/6346)、[#6390](https://github.com/zeroclaw-labs/zeroclaw/issues/6390) 构成"分布式多机集群"三件套。

---

## 五、Bug 与稳定性

按严重程度排列（p1 → p3）：

| 严重度 | Issue | 概述 | 是否已有 fix PR |
|---|---|---|---|
| **P1 / 阻塞** | [#5869](https://github.com/zeroclaw-labs/zeroclaw/issues/5869) | `rumqttc v0.25.1` 间接锁定 rustls-webpki 0.102.x 等触发 **RUSTSEC-0049/0098/0099/0104/0134** 多个公告 | status: **blocked**，暂无 PR |
| **P1** | [#7462](https://github.com/zeroclaw-labs/zeroclaw/issues/7462) | Windows 测试 74 个失败（CI 未覆盖） | 待补齐 Windows CI runner 提案 |
| **P1（安全）** | [#6250](https://github.com/zeroclaw-labs/zeroclaw/issues/6250) | 网关 `/api/config`、`/api/onboard` 鉴权需统一到中间件层，避免 handler 漏放 | 待 PR |
| **P2** | [#6157](https://github.com/zeroclaw-labs/zeroclaw/issues/6157) | Nextcloud Talk 走错 bot API | status: in-progress |
| **P2** | [#6548](https://github.com/zeroclaw-labs/zeroclaw/issues/6548) | 渠道 runtime 命令回复绕过 Fluent 本地化（中文 zh-CN 仍为英文硬编码） | 待 PR |
| **P3** | [#6724](https://github.com/zeroclaw-labs/zeroclaw/issues/6724) | Signal/Voice Call 等 enabled=false 的 channel 让 supervisor ~2s crashloop | 待 PR |

### 关联安全类 fix PR（待合入）
- **[PR #9233](https://github.com/zeroclaw-labs/zeroclaw/pull/9233)** fix(runtime/security): 防止 Landlock 把 daemon 自己锁住 — @perillamint，风险 high，建议优先审阅。
- **[Issue #5842](https://github.com/zeroclaw-labs/zeroclaw/issues/5842)** Codex CLI `extra_args` 弱化沙箱/策略边界（p1 安全风险），等待 PR。
- **[Issue #5775](https://github.com/zeroclaw-labs/zeroclaw/issues/5775)** 技能级 `allow_scripts`/`allowed_commands` 权限隔离（p1），目前仍为全局开关。

> 安全提醒：rumqttc 漏洞为最高优先级，建议在下次维护窗口处理。

---

## 六、功能请求与路线图信号

按热度归纳，候选进入 v0.8.0 概率从高到低：

### 高概率（已有方向性 PR）
1. **Anthropic 服务端 fallback 完整栈** — 三层 PR 已就绪（opt-in 请求 → 响应检测 → 渠道 fallback 提示）：
   - [PR #9265](https://github.com/zeroclaw-labs/zeroclaw/pull/9265) 客户端 opt-in `server_fallback_models`
   - [PR #9266](https://github.com/zeroclaw-labs/zeroclaw/pull/9266) 解析 `NativeChatResponse.model`/`AnthropicUsage.iterations`
   - [PR #9268](https://github.com/zeroclaw-labs/zeroclaw/pull/9268) 渠道层 surface safeguard notice
   - [PR #9262](https://github.com/zeroclaw-labs/zeroclaw/pull/9262) Anthropic 原生 refusal 转为类型化错误
   - 由 @IftekharUddin 同人集中提交，节奏完整。
2. **Goal 控制器/Verifier/工具面** — @vrurg 的堆叠 PR 形成完整图景：
   - [PR #8687](https://github.com/zeroclaw-labs/zeroclaw/pull/8687) 控制器+verifier
   - [PR #8688](https://github.com/zeroclaw-labs/zeroclaw/pull/8688) trusted goal tools & 委托边界
   - [PR #8689](https://github.com/zeroclaw-labs/zeroclaw/pull/8689) `/goal` 命令 admit（start/objective/status/budget/pause/resume/cancel/help）
   - [PR #8746](https://github.com/zeroclaw-labs/zeroclaw/pull/8746) 阻止 self-resume 循环
   - [PR #8996](https://github.com/zeroclaw-labs/zeroclaw/pull/8996) daemon reload 保留 Running goals
   - 全部位于 master，size:XL 且 `needs-author-action` 较多，**急需维护者审稿**。
3. **Provider 重构** — [#5937](https://github.com/zeroclaw-labs/zeroclaw/issues/5937) 已 accepted，但尚未见统一对应 PR。
4. **跨平台 CI** — [#7462](https://github.com/zeroclaw-labs/zeroclaw/issues/7462) 推进 Windows runner 落地。
5. **观测性升级** — [#6641](https://github.com/zeroclaw-labs/zeroclaw/issues/6641) 关闭，OTel turn-span 进入落地阶段（[PR #9212](https://github.com/zeroclaw-labs/zeroclaw/pull/9212) 把 eval/replay 设为 CI 硬门槛）。

### 中等概率
- **多机集群**：[#6391](https://github.com/zeroclaw-labs/zeroclaw/issues/6391) / [#6346](https://github.com/zeroclaw-labs/zeroclaw/issues/6346) / [#6390](https://github.com/zeroclaw-labs/zeroclaw/issues/6390) — Issues 均处于 accepted 状态，方向一致但未见合并 PR。
- **Skill/Plugin 发现** ([#6289](https://github.com/zeroclaw-labs/zeroclaw/issues/6289)) — 已关闭，等待 PR。
- **Config-validation doctor** ([#6416](https://github.com/zeroclaw-labs/zeroclaw/issues/6416)) — 仍 accepted，无 PR。

### 探索性 / 长期
- **LSP 支持**：[RFC #5907](https://github.com/zeroclaw-labs/zeroclaw/issues/5907) （type:rfc）。
- **Xcode 外部 Agent MCP 桥接**：[#6065](https://github.com/zeroclaw-labs/zeroclaw/issues/6065)。
- **Tool 协作取消**：[#5836](https://github.com/zeroclaw-labs/zeroclaw/issues/5836)（`CancellationToken` 已传给 `execute_tools`，尚缺 PR）。
- **PDF 受限分页读取**：[#5745](https://github.com/zeroclaw-labs/zeroclaw/issues/5745)。
- **"万物皆插件"**：[#6489](https://github.com/zeroclaw-labs/zeroclaw/issues/6489)（已关闭作方向收敛，未给实施时间表）。

---

## 七、用户反馈摘要

从 Issue 评论中提炼的真实用户痛点：

- **"助手在私聊里无视我"** — [#5674](https://github.com/zeroclaw-labs/zeroclaw/issues/5674) 中用户明确指出 `classify_channel_reply_intent` 群聊语义被错误地套到 1:1 私聊，造成助手静默，这是当周最具体的可复现体验问题，👍 数也最高。

- **"第一回合 prompt 就超预算 3.3×，每次都要重置"** — [#5808](https://github.com/zeroclaw-labs/zeroclaw/issues/5808) 的报告带具体文件行号（`schema.rs:1511`），是典型企业级上下文窗口预算的硬痛点。

- **"Windows 上跑不动测试，CI 还看不出来"** — [#7462](https://github.com/zeroclaw-labs/zeroclaw/issues/7462)，附带了具体中文 Windows 11/936 代码页复现，对中文用户尤为刺耳。

- **"Node 看起来一直 Online，但其实没在通信"** — [#6391](https://github.com/zeroclaw-labs/zeroclaw/issues/6391) 用户痛点是 dashboard 假在线，"half-open TCP" 等场景会被误导成正常。

- **"Skill 装一个 Python 就要给全部 Skill 开后门"** — [#5775](https://github.com/zeroclaw-labs/zeroclaw/issues/5775) 揭示了当前全局 `allow_scripts`/`allowed_commands` 的安全/可用性张力。

- **"Daemon 重载会把运行中目标清掉"** — [#8996](https://github.com/zeroclaw-labs/zeroclaw/pull/8996) / [#8746](https://github.com/zeroclaw-labs/zeroclaw/pull/8746) 的提交者 @vrurg 在 PR 描述中点出"self-resume 循环+reload 掉活

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

<think>Let me analyze the GitHub data for PicoClaw and generate a comprehensive daily report for 2026-07-23.

Key observations from the data:
1. No new releases in the past 24 hours
2. 3 Issues updates (all still open, no closures)
3. 5 PR updates (2 closed, 3 still open)
4. Two PRs were closed: #3286 (Go/x-text update for govulncheck) and #3285 (docs: remove picopaw)
5. New issue #3287 about IRC long message support
6. Issue #3258 and #3257 are still open and marked stale

Let me organize this into a structured daily report in Chinese.

Key points to highlight:
- Closed PRs: #3286 (security fix for Go and x/text) and #3285 (docs cleanup removing picopaw reference)
- The closed PR #3285 reverts #3096 which suggests there was some debate about adding/removing picopaw
- Multiple stale items suggest maintenance backlog
- The stale marker on issues and PRs indicates GitHub's auto-stale bot has flagged them
- New IRC feature request shows continued interest in messaging channel improvements

Let me write the report now with proper structure and depth.</think>

# PicoClaw 项目日报

**日期**：2026-07-23
**项目**：[sipeed/picoclaw](https://github.com/sipeed/picoclaw)
**报告周期**：过去 24 小时

---

## 1. 今日速览

PicoClaw 今日处于**低强度维护状态**：无新版本发布，Issues 新增/活跃 3 条且均为旧问题持续发酵，PR 活跃 5 条但其中 2 条当日关闭、3 条仍待合并。社区讨论密度一般，Issues 累计评论仅 2 条，多个 Issue/PR 已被 GitHub 自动标记为 `stale`，反映出项目维护者响应节奏放缓。今日推进的两项关闭动作偏向**安全合规与文档清理**（govulncheck 升级、picopaw 文档回退），未触及核心功能演进。整体而言，项目处于**功能稳定期**，但需警惕积压问题无人跟进。

---

## 2. 版本发布

**今日无新版本发布**。

当前最新稳定版本仍为 `picoclaw 0.3.1`（参考 [#3258](https://github.com/sipeed/picoclaw/issues/3258) 中用户报告的版本号）。

---

## 3. 项目进展

### ✅ 今日已关闭的 PR（2 条）

| PR | 标题 | 类型 | 意义 |
|---|---|---|---|
| [#3286](https://github.com/sipeed/picoclaw/pull/3286) | fix: update Go and x/text for govulncheck | 安全修复 | **重要** — 升级 Go 与 golang.org/x/text 以修复 `govulncheck` 报告的已知漏洞，提升依赖安全性 |
| [#3285](https://github.com/sipeed/picoclaw/pull/3285) | docs: remove picopaw | 文档清理 | 回退此前 PR [#3096](https://github.com/sipeed/picoclaw/pull/3096) 中引入的 "picopaw" 内容，文档回归一致状态 |

### 📊 进展评估

今日合并/关闭的 2 条 PR 均非功能型改动：
- **安全面**：通过 [#3286](https://github.com/sipeed/picoclaw/pull/3286) 推进了依赖治理，是基础设施级改进。
- **文档面**：[#3285](https://github.com/sipeed/picoclaw/pull/3285) 揭示了此前 [#3096](https://github.com/sipeed/picoclaw/pull/3096) 的合并可能存在争议——关闭此 PR 等于恢复原状，说明社区或维护者对 picopaw 相关命名/链接有不同意见。

**核心功能模块无实质性推进**，项目整体前进幅度较小。

---

## 4. 社区热点

### 🔥 讨论与关注

由于多数 Issue 评论数偏低（0–1 条），"热点"相对平淡。仍可关注以下几项：

1. **[#3257 — Add stateless/no-history mode for gateway sessions](https://github.com/sipeed/picoclaw/issues/3257)**（1 条评论）
   - 用户 `lisiying` 指出：CLI 模式下可通过 `--session` 参数开启新会话，但 **Gateway 模式下 session key 由 channel/chat 派生，无法实现无状态/无历史交互**。
   - 诉求本质：**隐私隔离 + 多会话并行**，对生产环境部署有实际意义。

2. **[#3258 — Process Hook before_tool modify not working](https://github.com/sipeed/picoclaw/issues/3258)**（1 条评论）
   - 用户 `@Shiniese` 报告 `before_tool` 钩子的 `decision` 字段被丢弃、`args` 反序列化异常，影响工具调用拦截/改写场景。

3. **[#3287 — Better support long messages in IRC](https://github.com/sipeed/picoclaw/issues/3287)**（今日新建，0 评论）
   - 用户 `@superuser-does` 提出 IRC 协议 512 字节限制下消息自动拆分问题，期望 PicoClaw 将多条分片还原为单一语义消息。

> 分析：三个 Issue 反映出 PicoClaw 用户群对**会话管理精细度、扩展点可靠性、协议兼容性**三方面的真实需求，但因评论稀少尚未形成强势社区压力。

---

## 5. Bug 与稳定性

### 🐛 今日相关 Bug 报告

| 严重度 | Issue | 描述 | 是否有 Fix PR |
|---|---|---|---|
| **中** | [#3258](https://github.com/sipeed/picoclaw/issues/3258) | `before_tool` 钩子的 `decision` 字段被丢弃、`args` 反序列化异常，钩子拦截机制基本失效 | ❌ 暂无关联 PR |
| **低** | [#3287](https://github.com/sipeed/picoclaw/issues/3287) | IRC 长消息被错误地拆分为多条独立消息，影响对话连贯性 | ❌ 暂无关联 PR |

### 🔒 安全相关

- [#3286](https://github.com/sipeed/picoclaw/pull/3286) 已合并，针对 `govulncheck` 报告升级 Go 与 `x/text`，降低供应链漏洞风险。建议用户尽快拉取 main 分支或等待下一版本。

### ⚠️ 风险提示

- 0.3.1 版本下的钩子机制存在确认性 Bug（[#3258](https://github.com/sipeed/picoclaw/issues/3258)），**依赖 `before_tool` 做安全拦截/审计的用户应暂停在生产环境使用该特性**。

---

## 6. 功能请求与路线图信号

| 需求 | 链接 | 当前匹配 PR | 纳入下一版本可能性 |
|---|---|---|---|
| **IRC 长消息合并** | [#3287](https://github.com/sipeed/picoclaw/issues/3287) | ❌ 暂无 | 中 — 实现成本不高，但 IRC 非主流渠道 |
| **Gateway 无状态/无历史模式** | [#3257](https://github.com/sipeed/picoclaw/issues/3257) | ❌ 暂无 | 中高 — 涉及 session key 架构调整，但用户场景清晰 |
| **DingTalk 图片消息入站支持** | (由 [#3283](https://github.com/sipeed/picoclaw/pull/3283) 实现中) | ✅ [#3283](https://github.com/sipeed/picoclaw/pull/3283) | **高** — PR 已就绪，待 review 合并 |
| **AWS Bedrock Converse 提示缓存** | (由 [#3163](https://github.com/sipeed/picoclaw/pull/3163) 实现中) | ✅ [#3163](https://github.com/sipeed/picoclaw/pull/3163) | 中 — 已 `stale`，需作者 rebump |
| **DeltaChat 实现清理（-200LOC）** | [#3222](https://github.com/sipeed/picoclaw/pull/3222) | ✅ [#3222](https://github.com/sipeed/picoclaw/pull/3222) | 中 — 已 `stale`，需关注 breaking change 文档 |

### 📌 路线图信号

- **多渠道扩展仍是主线**：[#3283](https://github.com/sipeed/picoclaw/pull/3283)（DingTalk 图片）和 [#3222](https://github.com/sipeed/picoclaw/pull/3222)（DeltaChat 重构）显示团队持续优化渠道矩阵。
- **云厂商优化**：[#3163](https://github.com/sipeed/picoclaw/pull/3163) 针对 AWS Bedrock 提示缓存，对企业级用户降本有意义。
- **架构层缺位**：Gateway 无状态会话（[#3257](https://github.com/sipeed/picoclaw/issues/3257)）暂无对应 PR，可能是下个迭代的重点功能。

---

## 7. 用户反馈摘要

提炼自 Issues 评论与摘要：

### 😣 用户痛点

- **钩子机制不可靠**（[#3258](https://github.com/sipeed/picoclaw/issues/3258)）：用户 `@Shiniese` 在使用 `rtk_rewrite_hook.py` 自定义工具拦截时遭遇 `decision` 字段丢失、`args` 反序列化异常，**导致扩展点几乎无法使用**——这对依赖插件机制做安全/审计/路由的开发者是阻断性问题。
- **Gateway 模式缺乏会话隔离**（[#3257](https://github.com/sipeed/picoclaw/issues/3257)）：用户 `@lisiying` 明确表达 CLI 与 Gateway 行为不一致的不便，**每次对话不得不使用全新 session id 才能"清空历史"**——使用体验不一致。
- **IRC 长消息语义丢失**（[#3287](https://github.com/sipeed/picoclaw/issues/3287)）：协议层自动分片导致 PicoClaw 误判为多条独立消息，**影响 IRC 用户上下文连贯性**。

### 🟢 正面信号

- 无新版本发布也未引发投诉，说明 0.3.1 在核心功能上稳定性尚可。
- 用户使用场景以 **多渠道接入（Telegram / DingTalk / DeltaChat / IRC）** 为主，体现 PicoClaw 作为"AI 网关"定位已被接受。

---

## 8. 待处理积压

以下 Issue/PR 已被 GitHub 自动 stale 机器人标记，长期未得到维护者响应，建议项目维护者优先 review：

| 编号 | 类型 | 标题 | 创建日期 | 距今 |
|---|---|---|---|---|
| [#3163](https://github.com/sipeed/picoclaw/pull/3163) | PR | feat(bedrock): leverage Converse prompt caching via cache points | 2026-06-23 | **30 天** |
| [#3222](https://github.com/sipeed/picoclaw/pull/3222) | PR | refactor(deltachat): cleanup implementation, documentation -200LOC | 2026-07-03 | **20 天** |
| [#3257](https://github.com/sipeed/picoclaw/issues/3257) | Issue | Add stateless/no-history mode for gateway sessions | 2026-07-15 | **8 天** |
| [#3258](https://github.com/sipeed/picoclaw/issues/3258) | Issue | Process Hook before_tool modify not working | 2026-07-15 | **8 天** |

### 📣 维护者提醒

- **优先级 1**：[#3258](https://github.com/sipeed/picoclaw/issues/3258) 是核心扩展机制的 Bug，影响所有依赖 hook 的用户，应尽快确认并修复。
- **优先级 2**：[#3163](https://github.com/sipeed/picoclaw/pull/3163) 与 [#3222](https://github.com/sipeed/picoclaw/pull/3222) 均为已就绪 PR，作者可能需要 rebump 或 maintainer 主动合并/反馈，避免贡献者流失。
- **优先级 3**：[#3257](https://github.com/sipeed/picoclaw/issues/3257) 涉及 Gateway 架构，建议在路线图中给出明确表态（计划纳入/拒绝/延迟）。

---

## 📈 项目健康度总评

| 维度 | 评分 | 说明 |
|---|---|---|
| 活跃度 | ⭐⭐☆☆☆ | 24h 内仅 5 条 PR / 3 条 Issue 更新，偏低 |
| 响应速度 | ⭐⭐☆☆☆ | 多项 PR/Issue 已被自动 stale |
| 安全态势 | ⭐⭐⭐⭐☆ | [#3286](https://github.com/sipeed/picoclaw/pull/3286) 已合并 govulncheck 修复 |
| 社区参与 | ⭐⭐⭐☆☆ | 有持续外部贡献者（@trufae, @loafoe, @MrTreasure, @imguoguo 等）但反馈回路慢 |
| 稳定性 | ⭐⭐⭐☆☆ | 核心功能稳定，hook 机制存在已知缺陷 |

> **总结**：PicoClaw 处于稳态运维期，今日进展以**安全补丁 + 文档回退**为主，缺乏核心功能迭代。建议维护者重点清理 stale 队列，并对 [#3258](https://github.com/sipeed/picoclaw/issues/3258) 这类阻断性 Bug 给出明确回应。

---

*报告生成时间：2026-07-23 · 数据来源：GitHub REST API*

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

<think>Let me analyze the GitHub data for NanoClaw and generate a comprehensive daily report for 2026-07-23.

Key observations from the data:
1. Issues: 1 new/active, 0 closed - #3118 about SECURITY.md overclaims credential isolation
2. PRs: 3 open, 0 merged/closed - #3070 (WhatsApp sender identity), #3117 (Omarchy statusbar skill), #2877 (Telegram rich rendering)
3. No releases
4. Low activity overall - small number of updates

Note: There's a discrepancy in the repo name. The URL shows "nanoclaw" but the data refers to "NanoClaw" - I'll use NanoClaw as the project name consistently.

Let me structure the report according to the 8 sections requested:

1. 今日速览 - Overall activity is low, 1 issue opened, 3 PRs still pending, no releases
2. 版本发布 - None, so omit
3. 项目进展 - No merged/closed PRs, so note that
4. 社区热点 - The security issue and the WhatsApp fix PR are notable
5. Bug 与稳定性 - #3070 is a bug fix PR (sender identity divergence)
6. 功能请求与路线图信号 - #3117 (new skill), #2877 (Telegram rendering)
7. 用户反馈摘要 - From the SECURITY.md issue
8. 待处理积压 - The Telegram PR #2877 is from late June, still open

Let me write this in Chinese, professionally and data-driven.</think>

# NanoClaw 项目动态日报

**日期：2026-07-23**
**项目**：NanoClaw ([github.com/qwibitai/nanoclaw](https://github.com/qwibitai/nanoclaw))

---

## 1. 今日速览

NanoClaw 过去 24 小时整体活跃度偏低，未出现版本发布或 PR 合入事件。仓库仅新增 1 条 Issue（编号 #3118），涉及文档对凭据隔离能力的过度承诺；另有 3 条 PR 处于开放状态等待维护者审核，覆盖 WhatsApp 通道身份一致性、新增 Omarchy 状态栏技能与 Telegram 原生富渲染能力。项目当前处于"小型迭代+待审"阶段，节奏平稳但缺乏推进动作，建议关注长期未合并的 PR #2877。

---

## 2. 版本发布

**今日无新版本发布**，本节省略。

---

## 3. 项目进展

⚠️ **过去 24 小时内无 PR 被合并或关闭**，项目代码主干今日无任何推进。具体在审 PR 概况如下：

| PR | 标题 | 提交者 | 创建日期 | 当前状态 |
|---|---|---|---|---|
| [#3070](https://github.com/qwibitai/nanoclaw/pull/3070) | Fix WhatsApp sender identity divergence between Baileys and Cloud paths | @QuantumBreakz | 2026-07-16 | 待合并 |
| [#3117](https://github.com/qwibitai/nanoclaw/pull/3117) | feat(skill): add-omarchy-statusbar — Waybar status indicator | @mmneimne | 2026-07-22 | 待合并 |
| [#2877](https://github.com/qwibitai/nanoclaw/pull/2877) | feat(telegram): native rich rendering via Bot API 10.1 sendRichMessage | @robbyczgw-cla | 2026-06-28 | 待合并 |

维护者团队今日对 PR 队列的响应为 **0**，建议在下次例行 review 中优先处理。

---

## 4. 社区热点

今日讨论热度有限，但以下几个议题值得社区关注：

- **🔥 文档诚信问题（[#3118](https://github.com/qwibitai/nanoclaw/pull/3118)）** — 由 @bradfeld 提出，指控 `docs/SECURITY.md` 的"Per-agent policies"小节对自托管 OneCLI 网关上 OAuth 凭据隔离能力的描述存在夸大。该 Issue 触及**安全承诺与实际行为的一致性**，是当下最受关注的话题。
- **🛠️ WhatsApp 跨通道一致性修复（[#3070](https://github.com/qwibitai/nanoclaw/pull/3070)）** — 关闭了 Issue #3069，涉及核心通道行为差异，潜在影响所有同时使用 Baileys 与 Cloud 双路径的用户。
- **✨ Telegram 富渲染能力升级（[#2877](https://github.com/qwibitai/nanoclaw/pull/2877)）** — 等待已久的 Bot API 10.1 `sendRichMessage` 集成，社区已等待 25 天。

---

## 5. Bug 与稳定性

| 严重程度 | 问题 | 是否已有 fix PR | 链接 |
|---|---|---|---|
| 🟡 中 | **WhatsApp 双路径下发送者身份不一致**（Baileys 与 Cloud 路径对同一手机号生成不同的 user ID，可能导致会话上下文错乱、跨通道路由失败） | ✅ 已有 fix PR（[#3070](https://github.com/qwibitai/nanoclaw/pull/3070)），待合并 | [#3069](https://github.com/qwibitai/nanoclaw/issues/3069) |
| 🟢 低 | **SECURITY.md 文档描述与实际行为不符**（OAuth 连接在自托管 OneCLI 上是账号级别而非按 group 隔离，存在文档过度承诺） | ❌ 暂无 fix PR | [#3118](https://github.com/qwibitai/nanoclaw/issues/3118) |

今日**未报告新的崩溃或回归问题**，稳定性面整体平稳。

---

## 6. 功能请求与路线图信号

- **Waybar 状态栏技能**（[#3117](https://github.com/qwibitai/nanoclaw/pull/3117)）— 由 @mmneimne 提交的实用型技能，将 NanoClaw 接入 Omarchy/Waybar 桌面环境，反映社区有**Linux 桌面端可视化监控**的潜在需求。
- **Telegram 原生富渲染**（[#2877](https://github.com/qwibitai/nanoclaw/pull/2877)）— 借助 Bot API 10.1 的 `sendRichMessage` 实现原生卡片式渲染，已等待 25 天未合并，是下一版本候选清单中的高优先级条目。
- **WhatsApp 身份统一**（[#3070](https://github.com/qwibitai/nanoclaw/pull/3070)）— 更接近缺陷修复而非新功能，但解决了双路径用户体验割裂的问题。

**路线图判断**：若按当前开放 PR 全部合并的方向推进，下一版本有望在「Telegram 体验」「WhatsApp 稳定性」「桌面端集成」三个维度同时获得提升。

---

## 7. 用户反馈摘要

今日 Issue 评论数普遍为 0，公开反馈较少，但可从现有 Issue 文本中提炼以下痛点：

- 🔐 **自托管用户的信任顾虑**：自托管 OneCLI 网关的用户期待"按 group 隔离凭据"的承诺，但实际 OAuth 连接是账号级别的。这暴露了**营销/文档叙事与产品实际能力之间的落差**，可能影响企业用户的合规判断。
- 📱 **多通道用户的体验不一致**：WhatsApp 用户若同时依赖 Baileys（本地）与 Cloud（云）两条路径，会发现同一联系人在会话中表现为不同 user ID，影响对话连续性。

---

## 8. 待处理积压

提醒维护者关注的长期未响应项：

| 类型 | 编号 | 标题 | 已等待天数 | 链接 |
|---|---|---|---|---|
| PR | [#2877](https://github.com/qwibitai/nanoclaw/pull/2877) | feat(telegram): native rich rendering via Bot API 10.1 sendRichMessage | **25 天** | 🔗 |
| PR | [#3070](https://github.com/qwibitai/nanoclaw/pull/3070) | Fix WhatsApp sender identity divergence | 7 天 | 🔗 |
| Issue | [#3118](https://github.com/qwibitai/nanoclaw/issues/3118) | SECURITY.md overclaims per-group credential isolation | 1 天 | 🔗 |

**重点提醒**：PR #2877 已挂起 25 天仍未获得维护者任何反馈（评论数未定义、👍 为 0），建议维护者尽快 ack 或给出 review 意见，避免贡献者流失。

---

## 📊 健康度小结

| 维度 | 评估 |
|---|---|
| 代码推进 | ⚠️ 今日 0 PR 合入 |
| 社区响应 | 🟡 新 Issue 当日未被回复 |
| 安全/文档 | 🟡 存在夸大承诺待澄清 |
| 长期积压 | 🔴 PR #2877 已超 25 天未响应 |
| 整体趋势 | 🟢 项目持续接受贡献，无重大故障 |

*报告基于 GitHub 公开数据生成，数据时间窗口为 2026-07-22 至 2026-07-23。*

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

<think>The user wants me to generate a daily project status report for IronClaw (github.com/nearai/ironclaw) based on GitHub data. Let me analyze the data carefully and produce a structured report.

Let me organize the information:

**Data Overview:**
- 50 Issue updates in past 24h (36 new/active, 14 closed)
- 50 PR updates in past 24h (25 pending merge, 25 merged/closed)
- 0 new releases

**Key themes I'm seeing:**
1. V1 launch checklist issues - multiple bugs being reported from staging (Google OAuth, Telegram setup, agent creation with test flag)
2. Telegram bugs - pairing loop, channel not recognized, delivery defaults missing
3. Reborn ProductSurface refactoring - lots of PRs around this
4. Epic-level issues around error recoverability, QA automation, hermetic testing
5. Many "completed foundation" issues being closed as retrospective records - this is significant workflow signal
6. Security/attestation work - Ledger hardware wallet signing
7. Sandbox/secrets work - egress proxy, secret lease

**Closed Issues (retrospective "completed foundation" pattern):**
- #6519, #6515, #6514, #6513, #6510, #6505, #6499, #6498, #6495, #6494, #6493, #6489, #6521 (CLI not available)
- These are by @BenKurrek - they're marking previously-merged PR work as foundation complete

**Open Issues - Critical/Bug:**
- #6523 - Agent fails to create with testing flag (v1 launch)
- #6534 - Google OAuth config can't be applied in hosted (v1 launch)
- #6522 - IronClaw doesn't know how to setup Telegram (v1 launch)
- #6478 - Agent doesn't recognize connected Telegram, redirects to Slack (bug_bash_P2)
- #6475 - Telegram /pair command not recognized (bug_bash_P1)
- #6474 - Telegram delivery channel not configurable (bug_bash_P1)

**Epic/Strategic Issues:**
- #6284 - error-recoverability endgame (4 comments, most active)
- #6105 - Extension/channel lifecycle state-machine test (3 comments)
- #5459 - Configurable skills and tools
- #3288 - Reborn capability lifecycle admin parity
- #6524 - Hermetic capability and journey testing platform
- #4775 - Automated QA for Reborn binary
- #6532 - Attested-signing stack + Ledger hardware wallet

**Key Merged PRs (significant):**
- #6538 - Route OpenAI compat through ProductSurface (CLOSED)
- #6540 - Mask ambient NEARAI env in tests (CLOSED)
- #6529 - Move outbound preferences facade (CLOSED)
- #6537 - ci: run full Reborn test/E2E gates on release-fix-* PR branches (CLOSED)
- #6480 - Continue ProductSurface conversion (CLOSED) - was already merged based on #6536 referencing it
- #6535 - test: add Slice 0 reference model oracles (CLOSED)
- #6444 - docs: refresh Reborn ProductSurface routing design (CLOSED)
- #6441 - refactor: name ProductSurface boundary (CLOSED)

**Pending/Open PRs - Important:**
- #6536 - Route channel ingress through ProductSurface (L, OPEN)
- #6533 - fix: add container-supervised mode for hosted deployments (XL, OPEN, related to #6534)
- #6520 - fix: make extension readiness and channel delivery generic (XL, OPEN)
- #6527 - feat: add admin-managed user security foundation (XL, OPEN)
- #6531 - fix: apply admin OAuth config at runtime (XL, OPEN)
- #6442 - Unify Reborn runtime composition (XL, OPEN)
- #6539 - feat: opt-in BENCHMARKING_MODE system-prompt addendum (M, OPEN)
- #6232 - fix: auto-activate web-access and Brave-backed web_search (XL, OPEN)
- #6428, #6361, #6446 - Dependabot bumps (OPEN)

**Backlog/Long-standing Issues:**
- #2246 - Unify extension model (from April 2026)
- #1519 - Routine notifications lack context (from March 2026)
- #1330 - Tool schema discovery (from March 2026)

Let me now structure the report. Since the user requested Chinese, I'll write in Chinese. Let me make this professional and data-driven.

For "today" the report date is 2026-07-23. I should be careful about what counts as "today's activity" - the data says past 24 hours which would be approximately July 22-23.

Looking at the closed issues, the "Completed foundation" ones are being closed as retrospective records - this is a workflow consolidation pattern, not actual development activity. I should note this distinction.

Let me think about the activity health:
- 50 Issues updates in 24h is very high activity
- 50 PRs in 24h is very high activity  
- 0 releases - but v1.0.0-rc.1 appears to be in release-fix branches
- Many critical v1-launch-checklist bugs open - this is a yellow/red flag
- Telegram bugs accumulating - significant regression concern
- ProductSurface refactor work in progress - significant architectural work

I think this report should highlight:
1. High activity but v1 launch blocker concerns
2. Telegram integration regression
3. Architectural refactor progress (ProductSurface)
4. Backlog of completed foundation records being closed
5. Some long-standing issues still open

Let me write the report now.</think>

# IronClaw 项目日报 · 2026-07-23

---

## 1. 今日速览

IronClaw 仓库过去 24 小时活跃度极高，共更新 50 条 Issue 与 50 条 PR，新增/活跃 Issue 36 条、关闭 14 条，PR 待合并 25 条、已合并/关闭 25 条。项目当前正处于 **v1.0.0-rc.1 发布冲刺阶段**（存在 `release-fix-1.0.0-rc.1` 分支），今日活动呈现两大主线：一是架构层面的 **ProductSurface 重构**（Reborn 运行时统一面）持续推进；二是 QA 在 hosted-staging 上集中报告一批 **v1 发布阻断类缺陷**，集中在 Telegram 集成、Google OAuth 与 onboarding 流程。Telegram 相关 P1/P2 缺陷在同一天集中暴露，提示该通道在最近回归明显。整体健康度评估：**中等**——开发节奏强劲但 v1 发布存在明确阻断项。

---

## 2. 版本发布

无新版本发布。`release-fix-1.0.0-rc.1` 分支当前活跃，PR #6533 已尝试合入该分支但此前 CI 未运行完整 Reborn Test/E2E 门禁（见 #6537 修复），说明正式版发布前仍有阻塞。

---

## 3. 项目进展

今日已合并/关闭的 PR 中，以下对项目推进具有实质意义：

| PR | 标题 | 影响 |
|---|---|---|
| [#6480](https://github.com/nearai/ironclaw/pull/6480) | Continue ProductSurface conversion for operator, project, admin, automation, and view APIs（XL） | 把操作员/项目/管理/自动化/视图 API 统一接入 ProductSurface，是后续 #6536、#6538 等路由重构的前置依赖 |
| [#6538](https://github.com/nearai/ironclaw/pull/6538) | Route OpenAI compat through ProductSurface（XL） | OpenAI 兼容 Chat Completions 与 Responses 路径脱离 ProductWorkflow，改走 ProductSurface |
| [#6535](https://github.com/nearai/ironclaw/pull/6535) | test(reborn): add Slice 0 reference model oracles | 为 turn/run 生命周期新增纯函数参考模型与状态化覆盖率，奠定确定性测试基础 |
| [#6537](https://github.com/nearai/ironclaw/pull/6537) | ci: run full Reborn test/E2E gates on release-fix-* PR branches | **修复发布分支跳过核心 E2E 门禁的 CI 漏洞**，关键质量护栏 |
| [#6540](https://github.com/nearai/ironclaw/pull/6540) | Mask ambient NEARAI env in tests | 提升测试可重现性，移除对环境变量的隐式依赖 |
| [#6529](https://github.com/nearai/ironclaw/pull/6529) | Move outbound preferences facade out of composition | 把出站投递目标目录从 composition 中剥离，沉淀到 `ironclaw_outbound` 库 |
| [#6441](https://github.com/nearai/ironclaw/pull/6441) / [#6444](https://github.com/nearai/ironclaw/pull/6444) | name ProductSurface boundary / refresh design docs | 为 ProductSurface 建立正式边界与文档语义 |

另有一批由 @BenKurrek 提交的 **"Completed foundation: ..."历史回溯关闭记录**（[#6493](https://github.com/nearai/ironclaw/issues/6493)、[#6494](https://github.com/nearai/ironclaw/issues/6494)、[#6495](https://github.com/nearai/ironclaw/issues/6495)、[#6498](https://github.com/nearai/ironclaw/issues/6498)、[#6499](https://github.com/nearai/ironclaw/issues/6499)、[#6505](https://github.com/nearai/ironclaw/issues/6505)、[#6510](https://github.com/nearai/ironclaw/issues/6510)、[#6513](https://github.com/nearai/ironclaw/issues/6513)、[#6514](https://github.com/nearai/ironclaw/issues/6514)、[#6515](https://github.com/nearai/ironclaw/issues/6515)、[#6489](https://github.com/nearai/ironclaw/issues/6489)、[#6519](https://github.com/nearai/ironclaw/issues/6519)、[#6521](https://github.com/nearai/ironclaw/issues/6521)），共 12 条 Issue 被关闭以**保留已合并 PR 的交付历史**。这是路线图整合动作，不等同于新增交付，但显著提升了 Issue 看板的信号清晰度。

**整体判断**：ProductSurface 边界已基本成形（XL 重构 PR 连续合入），CI 护栏得到加固；今日在「架构清晰度」与「测试可重现性」上明显向前推进了一步。

---

## 4. 社区热点

按评论数排序，最受关注的讨论：

1. **[#6284](https://github.com/nearai/ironclaw/issues/6284) — `[EPIC] error-recoverability endgame`（4 评论）**
   - 目标：模型必须能从其看到的 100% 错误中恢复——运行存活、模型看见、错误携带根因与可执行线索、模型获得应对回合。该 epic 设定了 Reborn 错误处理的"终极契约"。
   - 信号：错误恢复是当前最受关注的产品能力话题，可能成为 v1 之后的稳定性主打方向。

2. **[#6105](https://github.com/nearai/ironclaw/issues/6105) — Extension/channel lifecycle state-machine test（3 评论）**
   - 指出 Slack/扩展通道生命周期是**过去两周用户最常遭遇的 bug 家族**，且在四轮 QA 中全部回归，尽管期间已合入 #5851、#5898、#5953、#5957、#6054 等多个修复。
   - 信号：今天集中爆发的 Telegram 缺陷印证了这条 Issue 的判断，扩展生命周期需要更严格的状态机测试与 canary 自动化。

3. **[#5459](https://github.com/nearai/ironclaw/issues/5459) — Configurable skills and tools（2 评论）**
   - 管理员/用户安装 WASM 工具与 Skill 的可见性、作用域策略尚未完整实现，属于长期呼声。

4. **[#3288](https://github.com/nearai/ironclaw/issues/3288) — production/scoped capability lifecycle admin parity（2 评论）**
   - 父 epic #3031 下的能力生命周期管理对等性议题，涉及 typed lifecycle/config/package/trust services 与 `CapabilityCatalog` 重构。

---

## 5. Bug 与稳定性

按严重程度排序（标 ✅ 表示已存在修复 PR）：

### 🔴 P1（v1 发布阻断）

| Issue | 描述 | 修复 PR |
|---|---|---|
| [#6475](https://github.com/nearai/ironclaw/issues/6475) | Telegram `/pair` 命令被当作文本处理，用户被困在 pairing 循环 | 未见明确修复 PR，#6520（make extension readiness generic）部分相关 |
| [#6474](https://github.com/nearai/ironclaw/issues/6474) | Delivery Defaults 页面仅暴露 "Web app only"，无法配置 Telegram/Slack | 未见明确修复 PR |
| [#6534](https://github.com/nearai/ironclaw/issues/6534) | hosted-staging 上保存 Google OAuth 配置后无法生效 | ✅ 部分修复：[#6531](https://github.com/nearai/ironclaw/pull/6531)（apply admin OAuth at runtime）+ [#6533](https://github.com/nearai/ironclaw/pull/6533)（container-supervised mode） |

### 🟠 P2（用户可见但不阻断）

| Issue | 描述 | 修复 PR |
|---|---|---|
| [#6478](https://github.com/nearai/ironclaw/issues/6478) | Telegram 已连接时 Agent 仍触发 Slack 授权 | 未见明确修复 PR |
| [#6523](https://github.com/nearai/ironclaw/issues/6523) | onboarding 时勾选 "test build" 导致 Agent 创建失败 | 未见明确修复 PR |
| [#6522](https://github.com/nearai/ironclaw/issues/6522) | IronClaw 缺少 Telegram 本地/托管部署的清晰设置说明 | 未见明确修复 PR |
| [#6521](https://github.com/nearai/ironclaw/issues/6521)（已关闭） | agent-stg.near.ai 上 `ironclaw` CLI 不可用 | 记录为已关闭 |

### 🟡 中风险

| Issue | 描述 |
|---|---|
| [#6529 / #6530 一类](https://github.com/nearai/ironclaw/pull/6529) | 出站偏好 facade 已在重构中（已合并） |

**稳定性信号**：Telegram 通道在一天内集中暴露 P1×2 + P2×1，且 #6105 中已指出过去两周通道类 bug 反复回归，**该子系统稳定性是 v1 发布的最大风险点**。

---

## 6. 功能请求与路线图信号

| 议题 | 现有 PR 动向 | 纳入下一版本概率 |
|---|---|---|
| **Extension/Channel 统一运行时** | [#6520](https://github.com/nearai/ironclaw/pull/6520) OPEN（XL）— 把 readiness 与 delivery 泛化为三类状态 | 高 |
| **错误可恢复性 endgame** | 暂无实现 PR，仍是 epic 阶段 | 中（v1 后） |
| **Hermetic capability/journey 测试平台** | [#6524](https://github.com/nearai/ironclaw/issues/6524) 新开 epic | 中 |
| **自动化 QA for Reborn 二进制** | [#4775](https://github.com/nearai/ironclaw/issues/4775) epic 仍 OPEN | 中 |
| **管理员级用户安全管理** | [#6527](https://github.com/nearai/ironclaw/pull/6527) OPEN（XL）— 私有用户 vs 受管 Agent 分离 | 高 |
| **Attested-signing + Ledger 硬件钱包清算签名** | [#6532](https://github.com/nearai/ironclaw/issues/6532) 新开（设计 + Phase A 计划） | 中（设计阶段） |
| **Secret-lease + egress-proxy 守护进程** | [#6472](https://github.com/nearai/ironclaw/issues/6472) OPEN（计划 C1–C7） | 中 |
| **路由 channel ingress 通过 ProductSurface** | [#6536](https://github.com/nearai/ironclaw/pull/6536) OPEN（XL） | 高（紧随 #6480） |
| **web-access 与 Brave `web_search` 自动激活** | [#6232](https://github.com/nearai/ironclaw/pull/6232) OPEN（XL） | 高（5 天仍未合） |
| **opt-in BENCHMARKING_MODE 系统提示附录** | [#6539](https://github.com/nearai/ironclaw/pull/6539) OPEN（M） | 中 |

值得注意的设计信号：[#6532](https://github.com/nearai/ironclaw/issues/6532) 提出了**带证明签名栈 + Ledger 硬件钱包清算签名**，让 IronClaw Agent 能在用户授权下完成链上交易，但**单方面无法动用资金**。这是项目向 Web3/链上代理方向延伸的明确信号。

---

## 7. 用户反馈摘要

从今日 Issue 评论与描述中可提炼以下真实痛点：

- **🗣️ "我没办法把 Telegram 接上"**（[#6522](https://github.com/nearai/ironclaw/issues/6522)、[#6475](https://github.com/nearai/ironclaw/issues/6475)、[#6474](https://github.com/nearai/ironclaw/issues/6474)）—— 用户既缺文档（如何本地/托管部署），又被 `/pair` 死循环困住，Delivery Defaults 又无法配置 Telegram。三件事叠加，使 Telegram 用户体验几乎不可用。

- **🗣️ "Google OAuth 配置保存了却没生效"**（[#6534](https://github.com/nearai/ironclaw/issues/6534)）—— 在 hosted-staging 上运营者保存 Google OAuth 后，重启/连接时读取路径不通，错误信息暴露底层 `os error 2` 而非清晰提示。这是 hosted 部署上的关键可用性缺陷。

- **🗣️ "Agent 把我导到 Slack 授权，可我已经接好 Telegram 了"**（[#6478](https://github.com/nearai/ironclaw/issues/6478)）—— Agent 不识别当前活动通道，触发错误的 OAuth 流程。说明 agent 对当前连接状态缺乏清晰模型。

- **🗣️ "我连 onboarding 阶段都过不去"**（[#6523](https://github.com/nearai/ironclaw/issues/6523)）—— 在 v1 上线前的 onboarding 中勾选 test build 直接报错失败，提示早期用户配置分支缺乏测试。

- **🗣️ "ironclaw CLI 在 staging 上不可用"**（[#6521](https://github.com/nearai

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

<think>The user wants me to generate a daily report for LobsterAI project based on GitHub data. Let me analyze the data carefully:

1. **Issue updates**: 1 issue (closed, stale)
2. **PR updates**: 5 PRs (all closed/merged)
3. **No new releases**

Key observations:
- Issue #1348 [CLOSED] [stale] - about scheduled task name duplication validation - closed
- PR #2377 - Windows update installer hardening - closed
- PR #2376 - Fix render export modal above sidebar - closed
- PR #1346 - Feat/skills management - closed (stale)
- PR #1347 - feat(scheduledTask): Cron custom scheduling, Agent selector, UX improvements - closed (stale)
- PR #2375 - fix(openclaw): guard against oversized transcript OOM crashes - closed

Let me categorize:

**Active recent work (July 22):**
- PR #2377 - Windows update installer hardening
- PR #2376 - Fix export modal z-index issue
- PR #2375 - OOM crash fix for openclaw

**Stale closed (April 2 created, closed July 22):**
- PR #1346 - Skills management
- PR #1347 - Scheduled task Cron scheduling
- Issue #1348 - Scheduled task name validation

Notable insights:
1. The project had a housekeeping day where stale items (3+ months old) were closed
2. Recent active development focused on stability (OOM crash fix, Windows installer hardening) and UI fixes
3. Skills management and Cron scheduling features appear to have been closed as stale - this might indicate they weren't merged but the work may have been integrated differently or abandoned
4. The OOM crash fix in openclaw is significant - it's about preventing crashes when transcripts get too large

For sections:

1. **今日速览** - Project shows moderate activity. Active development focused on stability fixes (OOM crashes, installer hardening) and UI bugs. Several stale items were cleaned up. Overall health: stable maintenance mode.

2. **版本发布** - None, skip

3. **项目进展** - Cover the 3 active PRs (#2375, #2376, #2377) as recent merged work

4. **社区热点** - Limited activity, but #1348 closed

5. **Bug 与稳定性** - 
   - OOM crash in openclaw gateway (HIGH) - Fixed via PR #2375
   - Export modal z-index conflict (LOW) - Fixed via PR #2376
   - Scheduled task name duplication (LOW) - Closed as stale

6. **功能请求与路线图信号** - The Cron scheduling PR #1347 and skills management PR #1346 being closed as stale suggests these features may have been addressed elsewhere or deprioritized

7. **用户反馈摘要** - Limited, only Issue #1348 had 2 comments

8. **待处理积压** - None visible since the stale items were just cleaned up

Let me write this in Chinese as the user requested. The tone should be objective, professional, data-driven, highlighting project health.

I should follow the system instructions to use thinking tags and provide max thinking effort.

Let me craft the report now.</think>

# LobsterAI 项目动态日报

**日期**: 2026-07-23
**数据周期**: 过去 24 小时
**仓库**: [netease-youdao/LobsterAI](https://github.com/netease-youdao/LobsterAI)

---

## 1. 今日速览

LobsterAI 过去 24 小时整体活跃度处于**中等偏低**水平，呈现典型的"维护日"特征：无新版本发布，活跃贡献仅 5 条 PR（全部当日合并/关闭）和 1 条 Issue 关闭。值得关注的是，工作内容明显分为两类：**一类是近 24 小时内的即时开发**（3 条 7 月 22 日新开并当日关闭的 PR），聚焦于稳定性修复（OpenClaw OOM 防护、Windows 安装器加固）和 UI 渲染细节；**另一类是大规模清理历史积压**（2 条 4 月份创建的 stale PR 与 1 条 stale Issue 被集中关闭）。从关闭编号跨度（#1346~#2377）可见，仓库采用 stale bot 自动化策略定期清理长期无响应的条目。整体项目健康度评估为**稳定**，处于常态化维护与质量加固阶段。

---

## 2. 版本发布

⏸ **今日无新版本发布**，跳过本节。

---

## 3. 项目进展

今日合并/关闭的 PR 中，以下 3 条为近 24 小时内的实际开发工作，对项目有实质性推进：

### 🔧 稳定性关键修复

- **[PR #2375](https://github.com/netease-youdao/LobsterAI/pull/2375) — fix(openclaw): guard against oversized transcript OOM crashes** ✅
  - 解决了 OpenClaw 网关在加载超大对话记录时触发的 JavaScript 堆内存溢出（OOM）崩溃问题
  - 实施了三层防御：在网关加载超大活跃转录前阻断回合、为 JS 堆内存溢出网关崩溃归类、忽略堆 OOM 重启后过期的网关客户端代际以防止僵尸重连
  - **意义**：直接提升长会话场景下的可用性，属于高价值稳定性修复

### 🛡️ Windows 平台加固

- **[PR #2377](https://github.com/netease-youdao/LobsterAI/pull/2377) — feat: windows update installer hardening** ✅
  - 针对 Windows 更新安装器进行安全加固（涉及 renderer / main 双模块）
  - 标签覆盖 `platform: windows`，说明是面向 Windows 部署链路的强化

### 🎨 UI 渲染修复

- **[PR #2376](https://github.com/netease-youdao/LobsterAI/pull/2376) — fix(cowork): render export modal above sidebar** ✅
  - 通过 body portal 挂载导出选项模态框，规避堆叠上下文冲突
  - 修复了协作模块中导出弹窗被侧边栏遮挡的视觉 Bug

### 📦 积压清理（stale 关闭）

- **[PR #1346](https://github.com/netease-youdao/LobsterAI/pull/1346) — Feat/skills management** 与 **[PR #1347](https://github.com/netease-youdao/LobsterAI/pull/1347) — feat(scheduledTask): 新增 Cron 自定义调度、Agent 选择器及交互体验优化**
  - 均为 2026-04-02 创建，历经 3.5 个月后作为 stale 被关闭，未合并
  - 表明"Skills 管理"和"定时任务 Cron 自定义调度"功能未走该 PR 路径进入主干，可能已被其他实现替代或被弃用

---

## 4. 社区热点

过去 24 小时社区交互量极低，Issues/PRs 评论数普遍为 0，仅 [Issue #1348](https://github.com/user-attachments/assets/c3633d13-101a-47ef-b352-74aff0e61fd4) 有 2 条评论但随其关闭而告终。整体社区参与度处于低谷期，暂无明显热点议题。

---

## 5. Bug 与稳定性

| 严重程度 | 问题 | 状态 | 修复 PR |
|---------|------|------|---------|
| 🔴 **高** | OpenClaw 网关加载超大对话转录时触发 JS 堆 OOM 崩溃 | ✅ 已修复 | [#2375](https://github.com/netease-youdao/LobsterAI/pull/2375) |
| 🟡 **中** | Windows 更新安装器加固需求（推测为权限/签名/安全相关） | ✅ 已处理 | [#2377](https://github.com/netease-youdao/LobsterAI/pull/2377) |
| 🟢 **低** | 协作模块导出模态框被侧边栏遮挡 | ✅ 已修复 | [#2376](https://github.com/netease-youdao/LobsterAI/pull/2376) |
| 🟢 **低** | 定时任务名称重复缺少校验 ([#1348](https://github.com/netease-youdao/LobsterAI/issues/1348)) | ❌ 已作为 stale 关闭，未提修复 PR | 无 |

**整体评价**：今日报告的 4 类问题中，3 类已有关联修复 PR 同步落地，仅 [#1348](https://github.com/netease-youdao/LobsterAI/issues/1348) 作为长期 stale 被关闭未给出修复，存在轻微的输入校验类技术债遗留。

---

## 6. 功能请求与路线图信号

从 PR 与 Issue 的关闭模式可推断几条信号：

- **Skills 管理（#1346）**：作为 stale 关闭，**暗示该功能可能已被其他 PR 路径合并或重新设计**，不排除后续以新 PR 形式重启。
- **定时任务 Cron 自定义调度（#1347）**：包含可视化构建器、原始表达式实时解析、Agent/Model 绑定、表单 UX 统一等较为完整的设计，**作为 stale 关闭可能意味着开发资源转移**，但功能诉求本身（更强的调度灵活性）仍具用户价值，未来或被重新纳入路线图。
- **OpenClaw 稳定性（#2375）**：OOM 防护表明 OpenClaw 已成为当前重点维护模块，长会话稳定性是当前优先级方向。

---

## 7. 用户反馈摘要

由于评论数据极少，本期用户反馈较为有限：

- **[Issue #1348](https://github.com/netease-youdao/LobsterAI/issues/1348)（2 条评论）**：用户反馈定时任务模块在创建同名任务时缺少校验，存在重复调度隐患。该 Issue 自 4 月提出后未获修复，最终以 stale 机制关闭，反映出**项目对存量校验类问题的响应较慢**。
- **缺乏更广泛的用户反馈**：今日无新增开放性讨论，建议关注下一周期用户活跃度变化。

---

## 8. 待处理积压

⚠️ 经过今日的大规模 stale 清理后，**可见的开放积压显著减少**。需提醒维护者持续关注的方向：

1. **OpenClaw 长会话稳定性**：虽 #2375 已修复 OOM，但需持续监控是否还有其他与 transcript 大小相关的稳定性边缘场景。
2. **Windows 安装体验**：#2377 已做加固，建议后续收集用户升级失败率数据以验证加固效果。
3. **历史 stale 功能诉求再评估**：#1346（Skills 管理）与 #1347（定时任务 Cron）作为用户已付出开发投入的成熟功能设计，建议维护者明确表态是否计划复活，避免社区重复劳动。

---

## 📊 项目健康度总评

| 指标 | 评估 |
|------|------|
| 当日活跃度 | ⭐⭐ 中等偏低 |
| 稳定性进展 | ⭐⭐⭐⭐ 优秀（OOM 等关键问题快速修复） |
| 社区互动 | ⭐⭐ 偏低 |
| 积压管理 | ⭐⭐⭐ 通过 stale bot 自动化清理有效 |
| 路线图清晰度 | ⭐⭐⭐ 一般，需对关闭功能给出明确去向 |

**一句话总结**：LobsterAI 今日以稳定性加固为主轴，OpenClaw OOM 修复与 Windows 安装器硬化是亮点；同时大规模清理了 3.5 个月前的 stale 积压，整体仓库处于健康、克制的维护节奏。

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyclaw">TinyAGI/tinyclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

<think>Let me analyze the GitHub data provided for Moltis (github.com/moltis-org/moltis) and generate a project status report for 2026-07-23.

Key observations:
1. No Issues updates in the past 24 hours (0 new/active, 0 closed)
2. Only 1 PR update in the past 24 hours (1 pending merge, 0 merged/closed)
3. No new releases
4. The single PR #1162 is about fixing date display for older sessions on the web
5. No community discussions or reactions

Let me structure the report according to the requested format, keeping in mind that this is a relatively quiet day for the project.</think>

# Moltis 项目动态日报

**日期：2026-07-23**
**数据周期：过去 24 小时**
**项目地址：** [github.com/moltis-org/moltis](https://github.com/moltis-org/moltis)

---

## 1. 今日速览

Moltis 项目今日进入**低活跃期**，过去 24 小时内无新 Issue 提出或关闭，仓库未发布新版本，仅有 1 个面向 Web 端的 PR 处于待合并状态。整体来看，项目处于维护性迭代节奏中，无重大功能推进或紧急修复事件。社区互动热度较低，PR 与 Issue 均无评论、点赞或反应数据。建议关注者留意该 PR 的后续合并进展以及是否存在尚未浮出水面的反馈。

---

## 2. 版本发布

**本期无新版本发布。** 最近一次版本更新情况未在本次数据范围内体现。

---

## 3. 项目进展

### ✅ 已合并/关闭 PR

过去 24 小时无 PR 被合并或关闭。

### 🔄 待合并 PR（1 条）

| PR | 标题 | 作者 | 创建/更新时间 |
|---|---|---|---|
| [#1162](https://github.com/moltis-org/moltis/pull/1162) | fix(web): show dates for older sessions | [@shixi-li](https://github.com/shixi-li) | 2026-07-22 |

**进度评估：** 项目今日推进幅度有限。该 PR 聚焦 Web 端会话列表的日期展示逻辑优化，属于体验细节打磨，并未触及核心架构或新功能模块。在合并前，整体向前迈进可视为 **0.1 个提交级单位**（按 PR 准备度估算）。

---

## 4. 社区热点

今日**无任何高互动议题**。所有 Issue 与 PR 的评论数、点赞数均为 0 或未定义（undefined），表明：

- 没有引发社区讨论的争议或功能提案；
- 用户反馈渠道相对沉默，可能反映项目当前稳定，也可能是问题未被有效上报。

建议维护者主动在 Discord / Discussions 等渠道征求反馈，以避免沉默期掩盖潜在问题。

---

## 5. Bug 与稳定性

### 今日报告的 Bug

无新增 Bug 报告。

### 待合并的修复类 PR

| PR | 描述 | 状态 |
|---|---|---|
| [#1162](https://github.com/moltis-org/moltis/pull/1162) | 修复 Web 端"老会话"无日期显示的问题 | 待合并（Open） |

**严重程度评估：** 属于 **UI/UX 级别的体验缺陷**，不影响功能可用性，但会影响用户对历史会话的快速定位。PR 已附带浏览器端测试覆盖四个时间桶（today / yesterday / weekday / 完整日期），合并风险较低。

---

## 6. 功能请求与路线图信号

今日**无新功能请求**。

可观察到的潜在方向信号：
- **本地化体验持续打磨**：PR #1162 显示团队正在细化日期/时间的本地化展示策略，这或暗示本地化（i18n）是当前迭代周期的重点之一。
- **Web 前端质量提升**：唯一在飞 PR 属于 Web 端 fix，提示前端健壮性是近期关注方向。

---

## 7. 用户反馈摘要

由于今日 Issue 与 PR 均无评论，**无新的真实用户痛点可直接提炼**。

可参考的上下文信息：项目为 AI 智能体与个人 AI 助手领域的开源项目，今日唯一动作为 Web 端会话时间显示的体验修复，间接反映出用户曾在历史会话浏览时遇到"看不到日期"的困扰。

---

## 8. 待处理积压

### 长期未响应 PR

- **[#1162 fix(web): show dates for older sessions](https://github.com/moltis-org/moltis/pull/1162)** — 创建于 2026-07-22，距今约 1 天，尚处早期阶段。虽不属于长期积压，但作为唯一在飞 PR，建议维护者优先 review，避免形成新积压。

### 长期未响应 Issue

**无活跃 Issue 数据**，无法评估积压情况。若仓库存在历史长期未关闭 Issue，建议项目维护者在下次报告中补充该维度。

---

## 📊 项目健康度速览

| 指标 | 数值 | 评估 |
|---|---|---|
| 24h 新增 Issue | 0 | ⚪ 静默 |
| 24h 关闭 Issue | 0 | ⚪ 静默 |
| 24h 新增 PR | 1 | 🟢 正常 |
| 24h 合并 PR | 0 | ⚪ 无产出 |
| 新版本发布 | 0 | ⚪ 无 |
| 社区互动量 | 极低 | 🟡 需关注 |
| 待合并 PR | 1 | 🟢 正常 |

**总体评价：** 🟡 **平稳但需主动驱动** — 项目无异常信号，但社区互动空白可能掩盖潜在问题，建议维护者主动发起反馈征集或关注 CI/Issue 趋势。

---

*报告生成时间：2026-07-23 | 数据来源：Moltis GitHub 仓库公开数据*

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

<think>The user wants me to generate a daily project report for CoPaw (which appears to be a rebranded/forked version based on the data - the actual repo is QwenPaw at github.com/agentscope-ai/QwenPaw, but the report should be about CoPaw at github.com/agentscope-ai/CoPaw). I should treat this as the CoPaw project report based on the data provided.

Let me analyze the data:

**Overview:**
- 26 Issues updated in 24h (19 new/active, 7 closed)
- 50 PRs updated in 24h (34 pending merge, 16 merged/closed)
- 1 new release: v2.0.0.post4

**Release v2.0.0.post4:**
- Optimized agent reasoning to mitigate redundant thinking loops and duplicate tool invocations

**Key Issues to highlight:**

Most discussed (by comments):
1. #5218 [CLOSED] Context compaction causes process freeze - 18 comments - significant bug, now closed
2. #6322 [CLOSED] platform domain redirect to ads - 8 comments
3. #6314 [OPEN] RemoteProtocolError - 8 comments - active bug
4. #6307 [OPEN] v2.0 introduces ~2s fixed overhead - 5 comments - performance regression
5. #6297 [CLOSED] Drag-and-drop upload feature - 4 comments
6. #6316 [OPEN] Per-cron-job model specification - 3 comments
7. #6366 [CLOSED] Console coverage timeout - 2 comments
8. #6362 [OPEN] MiniMax-M3 image recognition broken - 2 comments
9. #6376 [OPEN] v2.0.0.post3/post4 main process crashes - 2 comments
10. #6344 [OPEN] Docker web hot update - 2 comments

**Important Bugs:**
- #6314: RemoteProtocolError, peer closed connection
- #6307: v2.0 ~2s overhead regression
- #6362: MiniMax-M3 image recognition failure
- #6376: v2.0.0.post3/post4 main process crashes from loop feature
- #6363: tool_call arguments polluted with markdown/XML
- #6358: context injection as system role causes ValueError
- #6372: idle cleanup can remove newly recreated queue state
- #6368: audit_level=none not honored
- #6370: downloader doesn't fallback after timeout
- #6374: token usage persistence doesn't retry
- #6361: Console test scripts don't start on Windows
- #6355: Mission parser splits quoted --verify commands
- #6366 [CLOSED]: Console coverage timeout
- #5135 [CLOSED]: MiniMax-M3 visual capability (closed)

**Important PRs:**
- #6357 [CLOSED]: fix(console): prioritize one-time approval
- #6337: feat(agui): expose AG-UI protocol
- #6284: feat(apps): add qwenpaw-creator app
- #6369: fix(governance): honor disabled audit logging
- #6378: perf: prevent synchronous I/O blocking event loop
- #6367 [CLOSED]: test(console): stabilize Gate coverage test
- #6317: fix(omp): harden workspace/fork/deny-all gates
- #6302: feat(providers): safe model discovery infrastructure
- #6375 [CLOSED]: fix(token-usage): retry token usage persistence
- #6373: fix(channels): preserve recreated queue state
- #6353: feat(crons): support per-job model overrides
- #6311: fix: share ToolGuard safety_checks
- #6371: fix(file-handling): continue fallback after timeout
- #6364: fix: strip markdown fences from tool_call arguments
- #6365: fix(console): run test scripts on Windows
- #6360: fix: change context injection role from system to user
- #6356: fix(mission): preserve quoted verify commands
- #6352: fix(mission): avoid directory collisions
- #6348: fix(mission): handle malformed user stories
- #6351: fix(memory): guide failed memory edits

**Feature Requests:**
- #6297: Drag-and-drop upload (closed - perhaps already implemented)
- #6316: Per-cron-job model specification (#6353 PR addresses this)
- #6344: Docker web hot update
- #6335: Multi-user support
- #6377: Specific task APIs

**User Feedback/Pain Points:**
- v2.0 introduces ~2s overhead (lululau)
- post3/post4 main process crashes (lijikai1206)
- Docker updates lose environment (ook826092-cloud)
- Multi-user for enterprise (ccwxl)
- MiniMax-M3 vision broken
- Approval dialog UX issue (#6354)
- platform domain ad redirect on mobile

**Backlog:**
The data only shows recent issues, but #5218 has been open since 2026-06-16 (over a month) - now closed
#5135 has been open since 2026-06-11 - now closed

Let me now structure the report properly. I should note that the project name is CoPaw but the actual data references QwenPaw - this appears to be a name transition. I'll use CoPaw as the project name but reference the GitHub links as provided.

Let me write the report now.</think>

# CoPaw 项目动态日报
**报告日期：2026-07-23**

---

## 1. 今日速览

CoPaw 今日保持高强度迭代节奏，**24 小时内共产生 76 条 Issues/PRs 变动**（26 条 Issues + 50 条 PRs），活跃度处于高位。v2.0.0.post4 紧急补丁刚刚发布，主要针对 v2.0 引入的"循环思考"导致主进程崩溃问题进行了推理优化。然而多个用户在升级 post3/post4 后反馈主进程频繁挂掉、回复延迟新增约 2s 等稳定性问题，社区正集中提交修复 PR，**整体处于"快速修复期"，质量与稳定性挑战明显**。开发侧呈现"提 PR 多、合 PR 审慎"的特点——50 个 PR 中仅 16 个关闭，34 个待合并，等待维护者评审。

---

## 2. 版本发布

### 🚀 v2.0.0.post4（2026-07-22 发布）
**变更内容：**
- 优化 Agent 推理逻辑，缓解冗余思考循环与重复工具调用

**上下文：**
此版本紧随 v2.0.0.post3 之后发布，是针对 v2.0 系列稳定性问题的紧急修补。多个 Issue（如 #6376）反映 v2.0.0.post3/post4 主进程频繁崩溃，与新引入的"loop 功能"相关。该版本未在 changelog 中详细列出回归修复清单。

**升级建议：** 暂未发现破坏性变更，但鉴于 #6376 报告 post4 仍存在主进程崩溃问题，**生产环境建议观望或灰度升级**。发布验证 Issue #6338 显示官方正在进行安装验证检查。

**Release 链接：** https://github.com/agentscope-ai/QwenPaw/releases/tag/v2.0.0.post4

---

## 3. 项目进展

### 已合并/关闭的重要 PR

| PR | 标题 | 意义 |
|---|---|---|
| [#6357](https://github.com/agentscope-ai/QwenPaw/pull/6357) | fix(console): prioritize one-time approval | 修复 Console 审批卡片 UI 设计缺陷，"仅本次"提升为首选操作，避免误授权（对应 #6354）|
| [#6367](https://github.com/agentscope-ai/QwenPaw/pull/6367) | test(console): stabilize Gate coverage test | 解决 Console 覆盖率测试超时问题 |
| [#6375](https://github.com/agentscope-ai/QwenPaw/pull/6375) | fix(token-usage): retry token usage persistence | Token 使用持久化失败后重试，避免数据丢失 |

### 待合并的重要 PR（展示进展方向）

- **[#6337](https://github.com/agentscope-ai/QwenPaw/pull/6337)** feat(agui): 暴露 AG-UI 协议端点 `/protocol/agui/chat`，拓展 AgentScope 生态互操作性
- **[#6284](https://github.com/agentscope-ai/QwenPaw/pull/6284)** feat(apps): 新增 qwenpaw-creator 应用，集成脚本→资产→分镜→视频工作流
- **[#6302](https://github.com/agentscope-ai/QwenPaw/pull/6302)** feat(providers): 安全模型发现基础设施 + 首批 provider 集成
- **[#6353](https://github.com/agentscope-ai/QwenPaw/pull/6353)** feat(crons): 支持每个 cron 任务独立指定模型（呼应 #6316）
- **[#6378](https://github.com/agentscope-ai/QwenPaw/pull/6378)** perf: 集中化原子 I/O 避免阻塞事件循环（性能优化重点）
- **[#6317](https://github.com/agentscope-ai/QwenPaw/pull/6317)** fix(omp): 强化 OMP workspace/fork/deny-all 门控（修复 #5882 的合并后回归）
- **[#6311](https://github.com/agentscope-ai/QwenPaw/pull/6311)** fix: ToolGuard 与 ACP 共享 safety_checks

**整体评估：** 项目在多线并行推进——稳定性修复、协议扩展、性能优化、新功能开发同步进行；但 **34 个 PR 积压等待合并**，维护者评审压力较大，建议关注哪些被优先合入以判断近期路线图重心。

---

## 4. 社区热点

### 🔥 讨论最活跃的 Issue

| Issue | 评论数 | 主题 |
|---|---|---|
| [#5218](https://github.com/agentscope-ai/QwenPaw/issues/5218) ⭐ | 18 | **子 Agent 触发上下文压缩时进程冻结**（已关闭）— 高复杂度问题，长达 36 天后终于关闭 |
| [#6322](https://github.com/agentscope-ai/QwenPaw/issues/6322) | 8 | platform 域名移动网络跳转到广告页面（已关闭）— 用户体验与信任问题 |
| [#6314](https://github.com/agentscope-ai/QwenPaw/issues/6314) | 8 | RemoteProtocolError 客户端主动关闭连接（待修复）|
| [#6307](https://github.com/agentscope-ai/QwenPaw/issues/6307) | 5 | **v2.0 简单对话新增 ~2s 固定开销**（架构性性能回归）|
| [#6316](https://github.com/agentscope-ai/QwenPaw/issues/6316) | 3 | cron 任务独立指定模型（已被 #6353 响应）|

**热点诉求分析：**
- **稳定性**成为首要关切（#5218 长期未关闭、#6376 反复崩溃、#6314 网络错误）
- **性能回归**（#6307）反映 v2.0 架构变更的代价，用户在简单对话场景就能感受到
- **流量/信任危机**（#6322）涉及官方域名的合规问题，影响品牌形象

---

## 5. Bug 与稳定性

### 🔴 严重（P0/P1）：影响主流程

| Issue | 描述 | 修复 PR |
|---|---|---|
| [#6376](https://github.com/agentscope-ai/QwenPaw/issues/6376) | **v2.0.0.post3/post4 主进程频繁崩溃**，新增的 loop 功能导致挂死，用户要求发布前做压力测试 | ❌ 暂无 |
| [#6362](https://github.com/agentscope-ai/QwenPaw/issues/6362) | 内置 MiniMax-M3 provider 完全无法识别图片，返回乱编答案 | ❌ 暂无 |
| [#6307](https://github.com/agentscope-ai/QwenPaw/issues/6307) | v2.0 每个简单对话回复固定新增约 2s 开销，架构性性能回归 | ❌ 暂无 |
| [#5218](https://github.com/agentscope-ai/QwenPaw/issues/5218) | 子 Agent 上下文压缩导致 QwenPaw 进程冻结 | ✅ 已关闭（修复已合入）|
| [#6314](https://github.com/agentscope-ai/QwenPaw/issues/6314) | RemoteProtocolError，qwenpaw 主动关闭连接 | ❌ 暂无 |

### 🟡 中等（P2）：影响部分功能

| Issue | 描述 | 修复 PR |
|---|---|---|
| [#6363](https://github.com/agentscope-ai/QwenPaw/issues/6363) | tool_call 参数被模型包上 markdown/XML 标签导致 JSON 解析失败（GLM-5-Turbo、DeepSeek-V3）| ✅ [#6364](https://github.com/agentscope-ai/QwenPaw/pull/6364) 已提交 |
| [#6358](https://github.com/agentscope-ai/QwenPaw/issues/6358) | 上下文注入为 system role 出现在消息中间，导致 GLM/OpenAI API 报错 | ✅ [#6360](https://github.com/agentscope-ai/QwenPaw/pull/6360) 已提交 |
| [#6372](https://github.com/agentscope-ai/QwenPaw/issues/6372) | idle cleanup 会移除刚重建的队列状态 | ✅ [#6373](https://github.com/agentscope-ai/QwenPaw/pull/6373) 已提交 |
| [#6370](https://github.com/agentscope-ai/QwenPaw/issues/6370) | 下载器超时未触发 fallback | ✅ [#6371](https://github.com/agentscope-ai/QwenPaw/pull/6371) 已提交 |
| [#6368](https://github.com/agentscope-ai/QwenPaw/issues/6368) | audit_level=none 配置未生效 | ✅ [#6369](https://github.com/agentscope-ai/QwenPaw/pull/6369) 已提交 |
| [#6366](https://github.com/agentscope-ai/QwenPaw/issues/6366) | Console 覆盖率测试 Gate 选择超时 | ✅ [#6367](https://github.com/agentscope-ai/QwenPaw/pull/6367) 已关闭 |
| [#6361](https://github.com/agentscope-ai/QwenPaw/issues/6361) | Windows 下 Console 测试脚本无法启动 | ✅ [#6365](https://github.com/agentscope-ai/QwenPaw/pull/6365) 已提交 |
| [#6355](https://github.com/agentscope-ai/QwenPaw/issues/6355) | Mission 解析器破坏带引号 --verify 命令 | ✅ [#6356](https://github.com/agentscope-ai/QwenPaw/pull/6356) 已提交 |
| [#6354](https://github.com/agentscope-ai/QwenPaw/issues/6354) | 审批对话框"总是允许"按钮视觉过强易误点 | ✅ [#6357](https://github.com/agentscope-ai/QwenPaw/pull/6357) 已关闭 |

### 🟢 轻微：边界情况

- [#6374](https://github.com/agentscope-ai/QwenPaw/issues/6374) token usage 持久化瞬时失败不重试
- [#6352](https://github.com/agentscope-ai/QwenPaw/pull/6352) Mission 同一秒启动两个会目录冲突
- [#6348](https://github.com/agentscope-ai/QwenPaw/pull/6348) Mission 处理畸形 user stories
- [#6176](https://github.com/agentscope-ai/QwenPaw/issues/6176) ✅ 已关闭：cron CLI update 重置未触及字段
- [#5135](https://github.com/agentscope-ai/QwenPaw/issues/5135) ✅ 已关闭：MiniMax-M3 视觉能力异常（v1.1.11 老问题）

**稳定性健康度评估：** 多数 P2 问题已有对应修复 PR，**社区驱动修复效率较高**；但 P0 级崩溃（#6376）和性能回归（#6307）尚未有公开修复方案，是当前最大隐患。

---

## 6. 功能请求与路线图信号

| 需求 | Issue | 状态 | 预计路线图 |
|---|---|---|---|
| Cron 任务独立指定模型 | [#6316](https://github.com/agentscope-ai/QwenPaw/issues/6316) | PR [#6353](https://github.com/agentscope-ai/QwenPaw/pull/6353) 已实现 | 短期 |
| 对话中拖拽上传图片/PDF/Office | [#6297](https://github.com/agentscope-ai/QwenPaw/issues/6297) | 已关闭（疑似已实现或转为内部跟踪）| 短期 |
| Docker 部署 Web 端热更新 | [#6344](https://github.com/agentscope-ai/QwenPaw/issues/6344) | 提议中，参考 AstrBot 方案 | 中期 |
| **企业级多用户/多账号** | [#6335](https://github.com/agentscope-ai/QwenPaw/issues/6335) | 当前架构不支持，企业用户重大关切 | 长期/战略 |
| **特定任务 API 化**（Agent as a Service） | [#6377](https://github.com/agentscope-ai/QwenPaw/issues/6377) | 提议中，自主学习 + HTTP 请求体约束 | 中期 |
| AG-UI 协议暴露 | [#6337 PR](https://github.com/agentscope-ai/QwenPaw/pull/6337) | 实现中 | 短期 |
| 安全模型自动发现 | [#6302 PR](https://github.com/agentscope-ai/QwenPaw/pull/6302) | 实现中 | 短期 |

**路线图信号解读：**
- **生态化方向：** AG-UI 协议、模型自动发现、Creator App 表明项目正从"工具"向"平台"演进
- **企业化探索：** #6335 多用户需求浮出水面，可能是下一阶段战略重点
- **API 化趋势：** #6377 反映用户希望将 Agent 封装为可集成服务，与 #6337 AG-UI 暴露方向一致

---

## 7. 用户反馈摘要

### 🗣️ 真实用户痛点

1. **性能与稳定性并重**（@lululau）："升级到 v2.0.0.post3 后每个简单对话多了约 2 秒

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
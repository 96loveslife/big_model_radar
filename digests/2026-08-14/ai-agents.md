# OpenClaw 生态日报 2026-08-14

> Issues: 487 | PRs: 500 | 覆盖项目: 8 个 | 生成时间: 2026-08-14 02:22 UTC

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

<think>Let me analyze the GitHub data for OpenClaw and generate a comprehensive daily report for 2026-08-14. Let me carefully process the information provided.

Key metrics:
- Issues updated in past 24h: 487 (324 new/active, 163 closed)
- PRs updated in past 24h: 500 (375 pending, 125 merged/closed)
- New releases: 0

I need to organize this into the 8 requested sections. Let me identify the key themes:

1. **Top active Issues** (by comment count):
   - #121058: Silent reply failures (92 comments)
   - #7707: Memory Trust Tagging by Source (48 comments)
   - #25592: Text between tool calls leaks (48 comments)
   - #44925: Subagent completion silently lost (27 comments)
   - #121953: Cron agent turns stall on DeepSeek (16 comments)
   - #43367: Multi-agent orchestration unstable (13 comments)
   - #43747: Memory management in chaos (11 comments)
   - #44431: Browser tool improvements (11 comments, CLOSED)
   - #67777: Subagent completion delivery lost (10 comments)
   - #47975: Subagent sessions persist (10 comments)
   - #91363: Isolated cron fails with LLM request failed (10 comments, 6 thumbs up)
   - #72015: Active-memory blocks replies (10 comments)
   - #97983: iOS/WebChat messages don't trigger replies (9 comments)

2. **Major themes from PRs**:
   - Memory authorization contract (#121422, #121945)
   - Slack fixes backport (#123426)
   - Various UI fixes
   - Secrets egress substitution proxy (#123216)
   - Subagent fixes
   - Anthropic server-side compaction (#123402)
   - Memory fixes

3. **Closed Issues**:
   - #44431: Browser tool improvements
   - #42273: backup create stalls
   - #85714: Agent message stranded
   - #91456: Telegram DM lane guarded
   - #105342: exec output as images
   - #121605: Model fallback delivery
   - #91283: minSecurity inverted

Let me now write the report in Chinese (as the prompt is in Chinese).

Let me think about the bug categorization:
- 🦞 Diamond Lobster (highest severity): Many bugs with this rating
- 🐚 Platinum Hermit
- 🦪 Silver Shellfish
- 🦐 Gold Shrimp
- 🌊 Off-meta tidepool (lowest)

Bugs with fix PRs:
- #25592 - has linked-pr-open
- #121953 - has linked-pr-open
- #43367 - has linked-pr-open
- #41165 - has linked-pr-open
- #89278 - has linked-pr-open
- #77733 - has linked-pr-open
- #120449 - has linked-pr-open

Let me structure the report now. I'll aim for a professional, data-driven analysis.

For the "待处理积压" section, I should look at issues with old creation dates but recent activity:
- #7707: Created 2026-02-03 (6 months old!)
- #45758: Created 2026-03-14
- #9016: Created 2026-02-04
- #16555: Created 2026-02-14
- #25592: Created 2026-02-24
- #44431: Created 2026-03-12 (CLOSED)
- #42276: Created 2026-03-10

Let me also note that some PRs have been open for a long time:
- #97175: Created 2026-06-27 (stale, P1)
- #78035: Created 2026-05-05
- #93247: Created 2026-06-15 (stale)

Now let me write the report comprehensively.</think>

# OpenClaw 项目日报

**报告日期**：2026-08-14
**项目地址**：https://github.com/openclaw/openclaw

---

## 1. 今日速览

OpenClaw 今日活跃度维持高位，24 小时内共触发 **987** 次 Issue/PR 更新（487 Issue + 500 PR），但当日**无新版本发布**，社区进入"高密度修复、慢节奏发版"的阶段。当前 Issues 中 P1 高优先级问题密集，已识别的"🦞 Diamond Lobster"级别严重 Bug 仍在累积，**silent reply failure、subagent completion lost、Telegram DM 路由串扰**三大顽疾仍未根治。但好消息是后端、UI、协议层均有活跃 PR 跟进，其中**内存授权合约（Phase 1C）**与**Slack 全局配置回滚**进入关键收尾。整体看，社区贡献节奏稳健，但 P1 积压问题对维护者的响应带宽提出明显挑战。

---

## 2. 版本发布

**今日无新版本发布**。

最近一次可见版本参考为 Issues 中提及的 `2026.7.1-2 (0790d9f)`（约 8 月上旬），存在多个 Regression 报告（如 #121605、#114154、#111498）。维护者需关注在 `#114612`（SQLite 无界增长）、`#78493`（sudo update 产生混合所有权）等稳定性议题上的修复是否已纳入下一构建。

---

## 3. 项目进展

### 当日值得关注的合并/关闭

虽然列表中"已合并/关闭"标注的 125 条 PR 未给出明细，但从 **已关闭 Issue** 可见今日完成了若干实质性修复：

| Issue | 标题 | 状态 |
|---|---|---|
| [#85714](https://github.com/openclaw/openclaw/issues/85714) | Agent 最终消息因 LLM 未调用 delivery tool 而丢失（无 fallback） | 已关闭 |
| [#91456](https://github.com/openclaw/openclaw/issues/91456) | Telegram DM lane 在 send timeout 后持续 guard，导致 DM 延迟或丢弃 | 已关闭 |
| [#105342](https://github.com/openclaw/openclaw/issues/105342) | 所有 exec 命令输出在 Telegram 渲染为图片 | 已关闭 |
| [#42273](https://github.com/openclaw/openclaw/issues/42273) | backup create 在 4GB+ 大目录下 stall | 已关闭（已修复） |
| [#91283](https://github.com/openclaw/openclaw/issues/91283) | minSecurity 排序反转：security="full" 被钳制为 allowlist | 已关闭（安全修复） |
| [#44431](https://github.com/openclaw/openclaw/issues/44431) | Browser Tool 7 项改进（来自实地测试） | 已关闭 |
| [#121605](https://github.com/openclaw/openclaw/issues/121605) | claude-cli fallback 后回复未投递（2026.7.1-2 回归） | 已关闭 |

### 重点 PR 推进（仍 OPEN，待合并）

- **[#121422](https://github.com/openclaw/openclaw/pull/121422)** `feat(plugin-sdk): add memory authorization contract` — 内存授权合约 Phase 0A，是 `multiplayer-memory` 路线图的基础，由 `@galiniliev` 提交，标记 `merge-risk: 🚨 security-boundary`。
- **[#121945](https://github.com/openclaw/openclaw/pull/121945)** `fix(memory): complete Phase 1C read isolation` — 完成内存读隔离切换，验证 capability/receipt envelope，建立 P1 级别的安全门控。
- **[#123426](https://github.com/openclaw/openclaw/pull/123426)** `[BACKPORT] fix(slack): keep global settings and monitor state live` — Slack 全局配置 + 监控状态保活，Backport 至 `sjf_openclaw_2026-07-31` 分支。
- **[#123402](https://github.com/openclaw/openclaw/pull/123402)** `feat(anthropic): opt-in server-side compaction (compact-2026-01-12)` — 接入 Anthropic 服务端 compaction，有望告别客户端 compaction 破坏 warm cache 的问题。
- **[#123216](https://github.com/openclaw/openclaw/pull/123216)** `feat(secrets): authenticated egress substitution proxy with destination binding` — secret 类型 store 现在可以在 agent 派生的 bash/`curl` 调用中被替换使用。
- **[#121274](https://github.com/openclaw/openclaw/pull/121274)** `fix(gateway): show one entry per subagent run in the tasks rail` — 修复后台任务栏重复展示同一 subagent run 的问题。
- **[#122748](https://github.com/openclaw/openclaw/pull/122748)** `fix(tooling): bound tsgo core test memory` — tsgo 测试分片，14 个 shard 顺序运行，单进程内存不再爆炸。
- **[#122985](https://github.com/openclaw/openclaw/pull/122985)** `fix: chat jumps from latest as composer grows` — 多行输入时自动跟随最新消息，扫读的读者位置不被覆盖。

**整体评估**：今日在内存安全、Slack 稳定性、Anthropic 服务端能力、Web UI 体验四个方向都有明确推进，但**仍以修复为主、新功能谨慎落地**，项目整体节奏稳健但偏保守。

---

## 4. 社区热点

### 评论数 Top 5

1. **[#121058](https://github.com/openclaw/openclaw/issues/121058)** — 92 条评论 🔥
   **Silent reply failures 在 #116277 关闭后仍持续复发**。用户 @sloptop-the-terrible 报告监控 cron 持续记录 silent-reply 失败新发生实例（含 2026-08-09）。这是当前社区共识度最高的"未根除"问题，**反映 OpenClaw 在消息投递可靠性上仍存在隐性回归**。

2. **[#7707](https://github.com/openclaw/openclaw/issues/7707)** — 48 条评论
   **Feature Request: Memory Trust Tagging by Source**。@LumenLantern 提出按来源（用户指令/网页抓取/三方 skill）对内存条目打信任标签，**防御 memory poisoning 攻击**。该议题已开放近 6 个月（创建于 2026-02-03），标签 `needs-security-review`，与今日推进的 `#121422`/`#121945` 内存授权合约存在强协同——是路线图可消化的方向。

3. **[#25592](https://github.com/openclaw/openclaw/issues/25592)** — 48 条评论
   **Text between tool calls leaks to messaging channels**。@doomclaw 反馈错误处理/处理确认/旁白等内部文本会被路由到 Slack/iMessage 作为可见消息。已关联 PR，但 `needs-security-review` 状态表明修复形态待定。

4. **[#44925](https://github.com/openclaw/openclaw/issues/44925)** — 27 条评论
   **Subagent completion silently lost**。@IIIyban 详细列举 5 种 subagent 任务失败的 silent-loss 模式（E31/E42/E45 等）。该议题与 #67777、#92433、#47975 形成"subagent 投递可靠性"问题集群，**是 P1 级别的稳定性核心痛点**。

5. **[#121953](https://github.com/openclaw/openclaw/issues/121953)** — 16 条评论
   **Cron agent turns stall on DeepSeek**。@Dytchem 发现 OpenClaw 自动加的 `[cron:<jobId> <name>]` 前缀被 DeepSeek API edge 路由到低优先级队列，cron 任务延迟从数十秒到数分钟。**揭示了 provider 级别的优先级对抗问题**，已关联修复 PR。

### 高反应度（👍）Issue

- **[#91363](https://github.com/openclaw/openclaw/issues/91363)** — 👍6
  **Isolated cron consistently fails with "LLM request failed"**。模型调用从未到达 provider（usage.input=0），manual `cron run` 同样失败。👍 数最高，说明**大量用户被该回归困扰**。

### PR 端热点

- **[#97175](https://github.com/openclaw/openclaw/pull/97175)** `fix(context-engine): keep background maintenance from blocking new messages` — 创建已 48 天仍未合并，状态 `📣 needs proof`，但属于 P1 关键路径（session-state 影响）。
- **[#78035](https://github.com/openclaw/openclaw/pull/78035)** `fix(memory-core): preserve sibling supplement results when one search rejects` — 修复 `Promise.all` fail-fast 吞噬兄弟结果，已挂 100 天。
- **[#122748](https://github.com/openclaw/openclaw/pull/122748)** — 6769 测试根节点、14 分片，单进程不再 OOM，**对 CI 流水线有直接收益**。

---

## 5. Bug 与稳定性

### 🦞 Diamond Lobster（最高严重度）— 持续累积

| Issue | 标题 | 有 fix PR? | 关联 PR |
|---|---|---|---|
| [#25592](https://github.com/openclaw/openclaw/issues/25592) | Tool 调用间的文本泄漏到 messaging channel | ✅ | linked-pr-open |
| [#41165](https://github.com/openclaw/openclaw/issues/41165) | Telegram DM 仍可能进入 agent:main:main | ✅ | linked-pr-open |
| [#72015](https://github.com/openclaw/openclaw/issues/72015) | active-memory 阻塞回复 + QMD 启动压垮多 agent 网关 | ❌ | needs-maintainer-review |
| [#78493](https://github.com/openclaw/openclaw/issues/78493) | sudo openclaw update 导致混合所有权 + doctor 覆盖 config | ❌ | needs-security-review |
| [#95553](https://github.com/openclaw/openclaw/issues/95553) | preflight 压缩硬限 ~60s，忽略 compaction.timeoutSeconds | ❌ | needs-product-decision |
| [#97983](https://github.com/openclaw/openclaw/issues/97983) | iOS/WebChat 消息追加但不触发 assistant 回复 | ❌ | source-repro |
| [#114612](https://github.com/openclaw/openclaw/issues/114612) | memory-core SQLite 无界增长（无 retention） | ❌ | needs-product-decision |
| [#115421](https://github.com/openclaw/openclaw/issues/115421) | Schema 降级恢复不应隔离/清空 state DB（cron job 丢失） | ✅ | linked-pr-open |
| [#120449](https://github.com/openclaw/openclaw/issues/120449) | tools.loopDetection WARNING 仅服务端日志，未上抛模型 | ✅ | linked-pr-open |
| [#123073](https://github.com/openclaw/openclaw/issues/123073) | dev-channel update 失败：EUNSUPPORTEDPROTOCOL workspace:* | ✅ (新) | queueable-fix, source-repro |

### 🦐 Gold Shrimp / 🐚 Platinum Hermit

- **[#111498](https://github.com/openclaw/openclaw/issues/111498)** — Anthropic auth 恢复后主 agent 仍被遗留 workspace-state 迁移阻塞（macOS 复现）
- **[#97616](https://github.com/openclaw/openclaw/issues/97616)** — Hook/tool 子进程泄漏，僵尸积累导致运行时降级
- **[#43747](https://github.com/openclaw/openclaw/issues/43747)** — 内存管理混乱：3 人团队各以不同方式存储（chunking+embedding、纯文件、...）
- **[#95759](https://github.com/openclaw/openclaw/issues/95759)** — ACP `sessions_spawn` opencode agentId 注册成功但 0 字节 transcript
- **[#77733](https://github.com/openclaw/openclaw/issues/77733)** — `/new` 与 `/reset` 不再触发 persona greeting（2026.5.3 regression）

### 关键稳定性观察

1. **Subagent 投递链路仍是最大单点风险**：#44925 + #67777 + #92433 + #47975 形成系统性 Bug 簇，跨多种失败模式（timeout/drain/orphan/steer），维护者亟需专题处理。
2. **schema 演进引发的数据丢失**（#115421、#114612）提示**状态机迁移的回滚/前向兼容机制缺失**，是基础设施级风险。
3. **Provider 行为耦合**（#121953 DeepSeek、#89278 Codex OAuth 10s 超时、#91363 隔离 cron 永不达 provider）说明 OpenClaw 与外部模型服务之间的 SLA 假设需要更显式的契约表达。

---

## 6. 功能请求与路线图信号

### 已有 PR 在途（很可能进入下一版本）

- **[#121422](https://github.com/openclaw/openclaw/pull/121422)** + **[#121945](https://github.com/openclaw/openclaw/pull/121945)** — **multiplayer-memory Phase 0A/1C**：内存授权合约 + 读隔离，是与 #7707（信任标签）直接呼应的安全基础设施。
- **[#123402](https://github.com/openclaw/openclaw/pull/123402)** — Anthropic 服务端 compaction，长 session 体验改善。
- **[#123216](https://github.com/openclaw/openclaw/pull/123216)** — Secret egress 替换代理，secret 类型从"几乎不可用"变为"可用"，解锁自托管 STT/TTS / OAuth token 类工作流。
- **[#115670](https://github.com/openclaw/openclaw/pull/115670)** — `claws add` 支持采用现有 workspace 目录，为存量 agent 提供迁移路径。
- **[#123424](https://github.com/openclaw/openclaw/pull/123424)** — 传统 main session 迁移引擎，未来下线 main 时不丢 session。
- **[#117337](https://github.com/openclaw/openclaw/pull/117337)** — iOS/macOS Talk Mode 支持指定 on-device TTS 语音。
- **[#123408](https://github.com/openclaw/openclaw/pull/123408)** — Mobile 嵌入 Control UI 跟随系统深色/浅色。

### 热门 Feature Request（仍待评估）

| Issue | 标题 | 👍 | 路线图契合度 |
|---|---|---|---|
| [#7707](https://github.com/openclaw/openclaw/issues/7707) | Memory Trust Tagging by Source | 0 | 高（与 #121422/#121945 强协同） |
| [#45758](https://github.com/openclaw/openclaw/issues/45758) | YAML 配置格式支持 | 2 | 中（运维友好，长期低优先） |
| [#9016](https://github.com/openclaw/openclaw/issues/9016) | 暴露 OpenRouter usage cost 到 agent runtime | 1 | 中（成本可见性需求） |
| [#45508](https://github.com/openclaw/openclaw/issues/45508) | WebChat TTS/STT 自托管路由 | 2 | 高（与 #123216 secrets 解锁呼应

---

## 横向生态对比

<think>用户要求我基于今天（2026-08-14）各开源项目的动态，生成一份横向对比分析报告。这是一个典型的生态分析任务，需要我从宏观视角对比 6 个 AI Agent/个人 AI 助手开源项目：
- OpenClaw（核心参照）
- NanoBot (HKUDS)
- PicoClaw (Sipeed)
- IronClaw (NearAI)
- LobsterAI (NetEase Youdao)
- QwenPaw (AgentScope)
- Hermes Agent (Nous Research)
- OpenHuman (TinyHuman AI)

等等，让我数一下：OpenClaw, NanoBot, PicoClaw, IronClaw, LobsterAI, QwenPaw, Hermes Agent, OpenHuman - 这是 8 个项目。

我需要按照 7 个部分组织这份报告：
1. 生态全景 - 3-5 句话概括
2. 各项目活跃度对比 - 表格
3. OpenClaw 在生态中的定位
4. 共同关注的技术方向
5. 差异化定位分析
6. 社区热度与成熟度
7. 值得关注的趋势信号

让我从所有日报中提取关键数据：

**OpenClaw** (核心参照):
- 24h Issues: 487, PRs: 500, Release: 0
- 主题：silent reply、subagent 投递、内存授权合约、Anthropic 服务端 compaction
- 多个 P1 Diamond Lobster bug 持续累积
- 生态中最大规模（24h 987 更新）

**NanoBot**:
- 24h Issues: 11, PRs: 31, Release: 0
- 主题：Cron 调度器、会话原子性、Windows 兼容性、MCP 集成
- 安全公告关闭（exec.allowPatterns shell-chain bypass）

**PicoClaw**:
- 24h Issues: 2, PRs: 9, Release: 0
- 主题：Web UI 卡顿、whisper 模型升级、Dependabot 依赖更新
- 实质性功能 PR 零合入

**IronClaw**:
- 24h Issues: 50, PRs: 50, Release: 1 (v1.2.0)
- 主题：Pluggable agent loops（Epic #7482）、Postgres 写放大（Epic #7591）、unbound-turns
- 战略级架构重组期

**LobsterAI**:
- 24h Issues: 2, PRs: 10, Release: 0
- 主题：renderer UI 整合、Vitest 测试补充、企业版
- @fisherdaddy 单日 3 条 UI 重构

**QwenPaw**:
- 24h Issues: 46, PRs: 50, Release: 2 (v2.1.0 + v2.1.0-beta.5)
- 主题：OS Shell、并发会话回归、Anthropic 误审核、安全问题
- 主版本发布 + 多回归问题

**Hermes Agent**:
- 24h Issues: 50, PRs: 50, Release: 1 (v0.20.1)
- 主题：Desktop-Gateway 生命周期、回归面、Provider 数据归一化
- 大量 P1 集中在同一根因

**OpenHuman**:
- 24h Issues: 17, PRs: 28, Release: 0
- 主题：TinyCortex 迁移回归、子模块解耦、ElevenLabs 语音、CI 基础设施
- 关单率极高（Issue 47%, PR 86%）

现在让我组织对比分析：

**生态全景**:
个人 AI 助手/自主智能体生态在 2026-08-14 呈现"高活跃度、强收敛方向、回归问题集中爆发"的态势。各项目围绕"消息投递可靠性"、"Provider 数据归一化"、"安全/权限边界"、"MCP 生态接入"等共性议题展开密集修复；与此同时，架构层路线分化加速——OpenClaw 推进内存授权合约、IronClaw 实施 Pluggable agent loops、Hermes Agent 收缩 IM 中转依赖，标志着生态从"功能广度竞赛"逐步过渡到"基础设施治理"阶段。

**各项目活跃度对比**:
需要列出 Issues、PRs、Release、健康度评分。

**OpenClaw 在生态中的定位**:
OpenClaw 仍然是生态中**绝对量级最大**的项目（24h 987 更新约为第二梯队的 2-3 倍），但也是"P1 积压最重"的项目——silent reply、subagent completion lost、Telegram DM 路由等"🦞 Diamond Lobster"级 Bug 长期悬而未决。
技术路线：强调**协议中立 + 多平台适配 + 深度可扩展**（Plugin SDK、Memory Authorization Contract）。
社区规模：评论数 92 的 #121058 与其他项目最高评论数（多数在 20 以内）形成数量级差异。
对比：
- 比 IronClaw 更"功能堆叠"（IronClaw 正在主动收敛）
- 比 Hermes Agent 更"IM 优先"（Hermes 正在脱离 IM 中转）
- 比 QwenPaw 更"国际化"（QwenPaw 国内生态接入更深）
- 比 PicoClaw 更"工程化"（PicoClaw 处于功能迭代趋缓阶段）
- 比 NanoBot 更"企业级"（NanoBot 关注原子性、Cron 健壮性）
- 比 OpenHuman 更"通用"（OpenHuman 强记忆图谱导向）
- 比 LobsterAI 更"独立"（LobsterAI 强有道生态依赖）

**共同关注的技术方向**:
1. **消息投递可靠性 / Subagent 交付**：OpenClaw (#44925, #67777, #92433, #47975), Hermes Agent (P0 _canonicalize_api_tool_calls), NanoBot (Cron scheduler dies), OpenHuman (cron 跨 core 不一致)
2. **MCP 生态接入**：NanoBot (#5251 MCP Apps, #5298 schema 预算), OpenClaw (#123216 secrets 替换), QwenPaw (隐含), OpenHuman (TinyJuice 模块化)
3. **Provider 数据归一化 / 多模型路由**：Hermes Agent (#85769 normalize_usage), QwenPaw (#6302 provider discovery), OpenClaw (Anthropic server-side compaction)
4. **安全/权限边界**：OpenClaw (#7707 memory trust, #121422 authorization contract), NanoBot (#5306 exec.allowPatterns bypass - 已修复), QwenPaw (#6916 插件注入, #6992 端口暴露), OpenHuman (#5530 SVG XSS)
5. **跨平台兼容性**：Hermes Agent (Windows gateway reap), NanoBot (Windows os.replace), QwenPaw (Windows Desktop TUI), OpenClaw (macOS workspace-state migration)
6. **记忆系统与持久化**：OpenClaw (multiplayer-memory Phase 1C), OpenHuman (TinyCortex 迁移回归 #5473), NanoBot (Dream consolidation), LobsterAI (openclawMemoryFile 测试)

**差异化定位**:
- **OpenClaw**: 综合型、协议中立、Plugin 生态
- **IronClaw**: 架构收敛、内核化、可插拔 harness
- **Hermes Agent**: IM 中转收缩、Provider 路由精细化
- **QwenPaw**: 国内生态（阿里云百炼、飞书）、OS Shell 桌面化
- **NanoBot**: 学术风格、MCP 全栈
- **PicoClaw**: 嵌入式/硬件导向（基于 Sipeed）
- **LobsterAI**: 商业产品（有道背书）、管理面一体化
- **OpenHuman**: 强记忆图谱、ElevenLabs 语音、子模块生态

**社区热度与成熟度**:
活跃度分层：
- 第一梯队（极高活跃）：OpenClaw、Hermes Agent、IronClaw、QwenPaw
- 第二梯队（高活跃）：OpenHuman
- 第三梯队（中等活跃）：NanoBot、LobsterAI
- 第四梯队（中等偏低）：PicoClaw

成熟度信号：
- IronClaw 发布 1.2.0 稳定版 → 进入质量巩固阶段
- QwenPaw 发布 2.1.0 → 主版本扩张但回归多
- Hermes Agent v0.20.1 → 仍在快速迭代
- OpenClaw → 仍在快速迭代（量大但 P1 积压）
- OpenHuman → CI 整顿 + 子模块重构（基础设施阶段）
- NanoBot → 稳定性打磨期
- LobsterAI → UI 整合期
- PicoClaw → 维护放缓期

**值得关注的趋势信号**:
1. **Agent 协议层标准化**：IronClaw 推 ACP、OpenClaw plugin-sdk 演进、QwenPaw MissionGate、NanoBot MCP Apps，暗示行业正在向"运行时协议 + 工具协议"双轨标准化靠拢。
2. **Provider 数据归一化成为基础设施工作**：Hermes Agent normalize_usage、QwenPaw provider discovery、OpenClaw Anthropic server-side compaction 说明各家都在补"上游 SDK 形态漂移"的课。
3. **安全/权限边界成为核心议题**：从 OpenClaw Memory Authorization Contract、NanoBot exec.allowPatterns 修复、QwenPaw 端口暴露、OpenHuman SVG XSS 看，权限治理正在从"事后修复"转向"事前合约"。
4. **Subagent/工具调用交付可靠性仍是阿喀琉斯之踵**：跨项目一致性问题，提示需要标准化工具调用回执协议。
5. **多平台部署正在成为默认假设**：Windows/macOS/Linux、桌面/移动/Web 全面覆盖，跨平台回归面同步扩大。
6. **第三方记忆/工具生态快速渗透**：ViBo、ElevenLabs 等第三方 SaaS 提供"97.5% token 节省"等承诺，提示未来生态可能围绕"专业模块即服务"展开。

让我开始写报告。语言要专业简洁，数据支撑强，适合技术决策者。</think>

# 2026-08-14 AI 智能体开源生态横向对比分析

> 数据窗口：2026-08-14 过去 24 小时 · 项目数：8 个（含核心参照 OpenClaw）

---

## 一、生态全景

个人 AI 助手/自主智能体开源生态在 2026-08-14 呈现"**高活跃、强收敛、回归集中爆发**"的态势：8 个项目 24 小时内累计触发 **1,000+** 条 Issue/PR 更新，发布 **3** 个版本（IronClaw v1.2.0、QwenPaw v2.1.0 + v2.1.0-beta.5、Hermes Agent v0.20.1）。各项目在**消息投递可靠性、Provider 数据归一化、安全权限边界、MCP 生态接入**四个共性议题上密集修复；与此同时架构层路线分化明显——OpenClaw 推进内存授权合约、IronClaw 实施 Pluggable agent loops、Hermes Agent 收缩 IM 中转依赖——标志着生态从"功能广度竞赛"过渡到"**基础设施治理 + 协议标准化**"阶段。整体评估：**生态成熟度跃升明显，但 P1 级回归问题在多家项目集中爆发，提示底层消息/工具调用协议仍是行业未解之痛**。

---

## 二、各项目活跃度对比

| 项目 | 24h Issues | 24h PRs | 24h Release | 关单率（Issue/PR） | 健康度 | 当前阶段 |
|---|---|---|---|---|---|---|
| **OpenClaw**（参照） | 487 | 500 | 0 | 33% / 25% | 🟠 B | 高活跃度 + P1 重积压 |
| **IronClaw** | 50 | 50 | **1** (v1.2.0) | 36% / 48% | 🟢 A- | 架构重组 + 性能冲刺 |
| **Hermes Agent** | 50 | 50 | **1** (v0.20.1) | 6% / 12% | 🟠 B+ | 快速迭代 + 多平台回归 |
| **QwenPaw** | 46 | 50 | **2** (v2.1.0 + β5) | 22% / 38% | 🟠 B | 主版本扩张 + 集中修复 |
| **OpenHuman** | 17 | 28 | 0 | 47% / **86%** | 🟢 A- | 子模块重构 + CI 整顿 |
| **NanoBot** | 11 | 31 | 0 | 9% / 29% | 🟢 B+ | 稳定性打磨期 |
| **LobsterAI** | 2 | 10 | 0 | 0% / 60% | 🟡 B- | UI 整合 + 测试补充 |
| **PicoClaw** | 2 | 9 | 0 | 0% / 33% | 🟡 C+ | 维护放缓（依赖自动化） |

> **关键观察**：
> - **OpenClaw 量级独大**（24h 987 更新 ≈ 第二梯队 2 倍），但关单率最低 → 维护者带宽承压；
> - **OpenHuman 关单率最高**（PR 86%），呈现典型的"基础设施收敛"特征；
> - **QwenPaw/IronClaw/Hermes** 同日发布版本，但 IronClaw 升级为稳定版、QwenPaw 主版本扩张伴随回归、Hermes 仍是 patch → 三种不同的发布成熟度策略。

---

## 三、OpenClaw 在生态中的定位

### 量级层面
OpenClaw 24h **987 条更新**约为第二梯队（IronClaw/Hermes/QwenPaw 各 100 条）的 **10 倍**，是当之无愧的生态头部。但这一规模也带来**维护带宽瓶颈**——P1 级 Bug 长期悬而未决（#121058 silent reply 92 评论仍未根治），是 8 个项目中"高活跃 + 高积压"特征最显著者。

### 技术路线差异
| 维度 | OpenClaw | 主要对手 |
|---|---|---|
| **架构哲学** | 协议中立 + Plugin SDK 生态 | IronClaw 主动收敛为内核；Hermes 收缩 IM 中转 |
| **扩展机制** | Plugin SDK + Memory Authorization Contract | IronClaw Harness Driver；QwenPaw MissionGate |
| **多模型策略** | Anthropic 服务端 compaction（#123402） | Hermes normalize_usage（#85769）；QwenPaw provider discovery（#6302） |
| **部署形态** | macOS/iOS/WebChat/Slack/Telegram 全覆盖 | IronClaw 主打容器 + 云端桥接；Hermes Desktop ↔ Gateway 生命周期管理 |
| **社区规模** | 单 Issue 评论数 92（#121058） | 其余项目最高评论数普遍 ≤ 20 |

### 社区规模对比
- **OpenClaw #121058**（92 评论）≈ **Hermes #66616**（25 评论）的 3.7 倍、**OpenHuman 最高评论**（2 条）的 46 倍；
- 单日 500 条 PR 中含 22 名不同作者的活跃贡献，是 PicoClaw（自动化 Dependabot 占主导）的完全不同量级。

### 优势评估
✅ **绝对量级**、✅ **功能广度**、✅ **Plugin 生态成熟度**、✅ **国际化社区**；
⚠️ **P1 积压**、⚠️ **稳定性收敛速度** 落后于 IronClaw/OpenHuman。

---

## 四、共同关注的技术方向

| 议题 | 涉及项目 | 具体诉求 |
|---|---|---|
| **🛰️ 消息投递可靠性 / Subagent 交付** | OpenClaw、Hermes Agent、NanoBot、OpenHuman | OpenClaw `#44925` 五种 silent-loss 模式；Hermes P0 `_canonicalize_api_tool_calls` 历史污染；NanoBot `#5378` 文件上限归档预修改 session；OpenHuman `#5499/#5458` cron 跨核心拒绝 |
| **🔌 MCP 生态接入** | NanoBot、OpenClaw、QwenPaw | NanoBot `#5251` MCP Apps UI + `#5298` schema 字节预算；OpenClaw `#123216` secrets 替换代理；OpenHuman TinyJuice 模块化 |
| **🔁 Provider 数据归一化 / 多模型路由** | Hermes Agent、QwenPaw、OpenClaw | Hermes `#85769` normalize_usage；QwenPaw `#6302` 统一 provider discovery；OpenClaw Anthropic 服务端 compaction |
| **🔐 安全/权限边界** | OpenClaw、NanoBot、QwenPaw、OpenHuman | OpenClaw Memory Authorization Contract；NanoBot `#5306` exec.allowPatterns bypass；QwenPaw `#6916` 插件注入 + `#6992` 端口暴露；OpenHuman `#5530` SVG XSS |
| **🪟 跨平台兼容性回归** | Hermes Agent、NanoBot、QwenPaw、OpenClaw | Hermes Desktop reap gateway（5 条 P1）；NanoBot `#5382` Windows os.replace；QwenPaw `#7007` Windows TUI；OpenClaw macOS workspace-state migration |
| **🧠 记忆系统与持久化** | OpenClaw、OpenHuman、NanoBot、LobsterAI | OpenClaw multiplayer-memory Phase 1C；OpenHuman TinyCortex 迁移回归 `#5473`；NanoBot Dream consolidation；LobsterAI openclawMemoryFile 测试 |

> **行业意义**：上述 6 个方向中，**消息投递可靠性、Provider 数据归一化、安全权限边界** 三项在 4 个及以上项目同时爆发，提示这是**生态级共性瓶颈**，而非单家实现缺陷。

---

## 五、差异化定位分析

| 项目 | 功能侧重 | 目标用户 | 技术架构关键差异 |
|---|---|---|---|
| **OpenClaw** | 综合型 AI 助手 + Plugin 生态 | 重度自定义用户、平台运营方 | 协议中立、Plugin SDK、Memory Authorization Contract |
| **IronClaw** | 内核化 Agent 运行时 | 企业 / 云端部署 | Rust 原生 + 可插拔 harness + ACP 协议 |
| **Hermes Agent** | 多 IM 通道网关 | IM 重度用户 / 海外市场 | Desktop ↔ Gateway 双进程 + 多 profile 路由 |
| **QwenPaw** | 桌面 OS Shell + 国内生态 | 国内开发者、Pro 用户 | QwenPaw OS Shell + 阿里云/飞书深度集成 |
| **NanoBot** | MCP 全栈实验田 | 学术 / 高级开发者 | MCP Apps 优先 + 会话原子性设计 |
| **OpenHuman** | 强记忆图谱 + 语音 | 长程任务 / 知识工作者 | TinyCortex + ElevenLabs 实时语音 + 子模块

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

<think>Let me analyze the GitHub data for NanoBot (github.com/HKUDS/nanobot) for the date 2026-08-14 and generate a comprehensive project daily report.

Key observations from the data:

**Activity Overview:**
- 11 Issues updated (10 new/active, 1 closed)
- 31 PRs updated (22 pending merge, 9 merged/closed)
- 0 new releases
- Heavy activity around session management, cron scheduler, and WebUI

**Notable Patterns:**
1. Multiple fixes for the same issue #5373 (cron scheduler dies) - there are 3 PRs all attempting to fix this (#5374, #5375, #5376), with #5374 and #5375 closed (likely superseded by #5376)
2. Heavy focus on session-related bug fixes (#5377, #5378, #5379, #5380, #5382, #5383)
3. WebUI improvements (#5357, #5358, #5366, #5368, #5381, #5384)
4. MCP-related enhancements (#5251, #5298, #5386, #5388)
5. Security fix for #5306 (exec.allowPatterns shell-chain bypass) - CLOSED
6. Cross-platform issues (Matrix Element SAS verification #4841)

**Critical Bugs Identified:**
1. Cron scheduler permanent failure on persistence error (#5373)
2. Windows-specific os.replace() PermissionError (#5382)
3. Session corruption on file-cap archive failure (#5378)
4. Consolidation truncates archive input but advances cursor (#5377)
5. WebUI copy/fork actions appear during active turn (#5368)
6. Localize agent activity text (#5366)

**Closed Items:**
- #5306 Security advisory (closed)
- #5381 native workspace folder picker (closed)
- #5384 restore transcript-only session history (closed)
- #5374, #5375, #4556, #4550 (older PRs closed)

**Long-standing Issues:**
- #4841 Matrix Element 'untrusted' device (from 2026-07-07)

Now let me structure this into a comprehensive daily report in Chinese, since the request is in Chinese.

I'll write a detailed, professional, data-driven report following all 8 sections requested.</think>

# NanoBot 项目日报 · 2026-08-14

> 数据源：[github.com/HKUDS/nanobot](https://github.com/HKUDS/nanobot)  
> 数据采集窗口：过去 24 小时  
> 报告生成时间：2026-08-14

---

## 1. 今日速览

NanoBot 今日呈现**高活跃度 + 高稳定性关注**的双重特征：过去 24 小时共有 11 条 Issue 更新、31 条 PR 更新，其中 PR 处理密度显著高于均值。议题主题高度集中在三个方向——**会话（Session）可靠性**、**定时任务（Cron）健壮性**、**WebUI 体验完善**。同日关闭了一条安全公告（`exec.allowPatterns` shell-chain bypass），多条历史遗留 PR（#4550、#4556 等）被合并或清理，整体项目健康度良好，处于一次密集的"问题清理 + 体验打磨"周期内。

---

## 2. 版本发布

**今日无新版本发布。** 鉴于存在大量 P2 级别的 Bug 修复 PR 处于待合并状态（#5376、#5379、#5380、#5382、#5383 等），下一补丁版本（建议为 PATCH 级）很可能在 1–2 周内发布，重点修复 Cron / Session / Windows 兼容性三类问题。

---

## 3. 项目进展

### ✅ 今日已合并 / 已关闭的重要 PR

| PR | 标题 | 意义 |
|---|---|---|
| [#5306](https://github.com/HKUDS/nanobot/issues/5306) (Issue, **已关闭**) | Security: `exec.allowPatterns` shell-chain bypass | **安全公告关闭**——`exec` 工具的 allowPatterns 配置存在 shell 链式调用绕过漏洞，影响执行策略 |
| [#5381](https://github.com/HKUDS/nanobot/pull/5381) (PR, **已关闭**) | feat(webui): native workspace folder picker | WebUI 新增 macOS/Windows/Linux 原生文件夹选择器，仅在 loopback 绑定时启用 |
| [#5384](https://github.com/HKUDS/nanobot/pull/5384) (PR, **已关闭**) | fix(webui): restore transcript-only session history | 修复 WebUI 侧栏对仅 transcript 会话的发现能力 |
| [#5374](https://github.com/HKUDS/nanobot/pull/5374) / [#5375](https://github.com/HKUDS/nanobot/pull/5375) (PR, **已关闭**) | fix(cron): keep scheduler alive | 同一定时任务修复的早期版本，被 [#5376](https://github.com/HKUDS/nanobot/pull/5376) 取代（典型的 PR 收敛过程） |
| [#4556](https://github.com/HKUDS/nanobot/pull/4556) (PR, **已关闭**) | feat(dream): wire up model_override for Dream consolidation | 关闭 06 月遗留 PR，为 Dream 内存整合引入 `model_override`（参考 #4029） |
| [#4550](https://github.com/HKUDS/nanobot/pull/4550) (PR, **已关闭**) | fix(cron): per-run session key | 关闭 06 月遗留 PR，修复 cron 任务跨次运行共享 session 导致上下文污染的问题（参考 #4082） |

### 🚀 进展亮点

- **安全公告关闭**：Exec 工具配置层的 shell 链式调用绕过漏洞正式处理完毕，运营商配置的 `allowPatterns` 现在更可靠。
- **Cron 调度器健壮性提升**：针对 #5373（持久化失败导致调度器永久静默死亡）已有 [#5376](https://github.com/HKUDS/nanobot/pull/5376) 提交最终修复方案。
- **WebUI 原生体验增强**：原生文件夹选择器、仅 transcript 会话发现、活跃 turn 期间禁止复制/分叉等多项体验改进齐头并进。

---

## 4. 社区热点

### 🔥 议题热度排行（按评论数 / 关注度）

| 排名 | 议题 / PR | 关注点 | 链接 |
|---|---|---|---|
| 1 | **#5373** Cron scheduler dies permanently | 单次持久化失败即导致调度器永久死亡，是过去 24h 最受关注的严重稳定性 bug | [#5373](https://github.com/HKUDS/nanobot/issues/5373) |
| 2 | **#5306** exec.allowPatterns shell-chain bypass | 安全公告，影响执行策略配置可信度（**已关闭**） | [#5306](https://github.com/HKUDS/nanobot/issues/5306) |
| 3 | **#5298** budget model-visible MCP schemas | MCP 工具集过大导致 context 成本高企，提议按字节预算裁剪 | [#5298](https://github.com/HKUDS/nanobot/issues/5298) |
| 4 | **#5289** Telegram sticker & reaction support | Telegram 通道缺贴纸能力；reaction 仅作为内部 ack 流程 | [#5289](https://github.com/HKUDS/nanobot/issues/5289) |
| 5 | **#5251** MCP Apps host in WebUI | 提议把官方 MCP Apps (`io.modelcontextprotocol/ui`) 接入 WebUI | [#5251](https://github.com/HKUDS/nanobot/issues/5251) |
| 6 | **#5366** WebUI 本地化 Agent 活动文本 | 用户已选语言不能应用于 Agent 活动文本 | [#5366](https://github.com/HKUDS/nanobot/issues/5366) |
| 7 | **#4841** Matrix Element 'untrusted' device | 跨签与 SAS 验证路径缺失导致 Element 标记 bot 设备为"不可信" | [#4841](https://github.com/HKUDS/nanobot/issues/4841) |

### 💡 诉求分析

- **稳定性焦虑是主基调**：#5373 / #5378 / #5377 三条新 Bug 都指向"失败时静默破坏会话状态"这一类问题，社区对**原子性、失败可恢复性**的诉求集中爆发。
- **平台差异化诉求**：Telegram（贴纸、反应）、Matrix（Element SAS 信任）、Windows（`os.replace` 权限错误）三条线表明 NanoBot 的多平台部署正在扩展，跨平台兼容性成为新的痛点来源。
- **Context 工程成新焦点**：#5298 + #5388 提议限制模型可见的 MCP schema 大小，反映出用户在接入大量 MCP 工具后**开始关注 token 经济性**。

---

## 5. Bug 与稳定性

### 🚨 严重程度排序

| 级别 | Issue / PR | 现象 | 是否已有修复 PR |
|---|---|---|---|
| 🔴 **P0** | [#5373](https://github.com/HKUDS/nanobot/issues/5373) | 单次持久化失败 → Cron 调度器**永久静默死亡**（`_arm_timer()` 在 try/finally 外） | ✅ [#5376](https://github.com/HKUDS/nanobot/pull/5376) |
| 🔴 **P0** | [#5382](https://github.com/HKUDS/nanobot/pull/5382) | Windows `os.replace()` 偶发 `[WinError 5] Access is denied` 导致 gateway 崩溃（2026-08-11 已出现两次） | ✅ [#5382](https://github.com/HKUDS/nanobot/pull/5382) |
| 🟠 **P1** | [#5378](https://github.com/HKUDS/nanobot/issues/5378) | 文件上限归档失败时**预先修改**了 live Session，内存中的会话已丢弃溢出内容，后续 save 无法恢复 | ✅ [#5380](https://github.com/HKUDS/nanobot/pull/5380) |
| 🟠 **P1** | [#5377](https://github.com/HKUDS/nanobot/issues/5377) | Consolidation 把输入按 token 预算截断，但 cursor 仍推进到整批消息末尾，导致被截断内容**永久丢失** | ✅ [#5379](https://github.com/HKUDS/nanobot/pull/5379) |
| 🟡 **P2** | [#5368](https://github.com/HKUDS/nanobot/issues/5368) | WebUI 在 Agent turn 仍在运行时即显示 Copy / Fork 动作，造成"完成"信号冲突 | ❌ 待修复 |
| 🟡 **P2** | [#5366](https://github.com/HKUDS/nanobot/issues/5366) | WebUI 已选语言无法应用于 Agent 活动文本（"Working for..." 等） | ❌ 待修复 |

### 📌 集中模式

- **失败原子性 (atomicity)**：#5373、#5378、#5377 三者都体现同一类问题——**失败前已修改状态、失败后无法回滚**。这表明项目需要一次系统性的"fail-closed + 快照/回滚"机制梳理。
- **跨平台**：Windows-specific bug (#5382) 表明 Windows 用户基数正在增长。

---

## 6. 功能请求与路线图信号

### 🆕 新提出的功能需求

| 议题 | 需求 | 已有对应 PR？ | 路线图可能性 |
|---|---|---|---|
| [#5372](https://github.com/HKUDS/nanobot/issues/5372) | 第三方 ViBo 记忆系统集成 | ❌（**疑似外部推广**） | ⚠️ 低，需评估 |
| [#5298](https://github.com/HKUDS/nanobot/issues/5298) | 模型可见 MCP schema 字节预算 | ✅ [#5388](https://github.com/HKUDS/nanobot/pull/5388) **已提交** | 🟢 高 |
| [#5289](https://github.com/HKUDS/nanobot/issues/5289) | Telegram 贴纸 + 主动 reaction | ✅ [#5387](https://github.com/HKUDS/nanobot/pull/5387) **已提交** | 🟢 高 |
| [#5251](https://github.com/HKUDS/nanobot/issues/5251) | WebUI 接入 MCP Apps 扩展 | ✅ [#5386](https://github.com/HKUDS/nanobot/pull/5386) **已提交** | 🟢 高 |
| [#4841](https://github.com/HKUDS/nanobot/issues/4841) | Matrix Element 跨签 + 主动 SAS 验证 | ✅ [#5385](https://github.com/HKUDS/nanobot/pull/5385) **已提交** | 🟡 中 |
| [#4549](https://github.com/HKUDS/nanobot/pull/4549) | Heartbeat 模型覆盖（低成本模型） | ✅ PR 已存在（06 月建） | 🟡 中 |
| [#4551](https://github.com/HKUDS/nanobot/pull/4551) | Heartbeat 共享 session 配置 | ✅ PR 已存在（06 月建） | 🟡 中 |

### 🧭 路线图观察

- **"MCP 全栈"路径清晰**：从 schema 预算 (#5388) → MCP Apps UI 承载 (#5386) → Telegram 等通道的 MCP 接入，MCP 已是事实上的核心生态战略。
- **Heartbeat 系统进入打磨期**：[#4549](https://github.com/HKUDS/nanobot/pull/4549)、[#4551](https://github.com/HKUDS/nanobot/pull/4551) 等 06 月的 PR 仍未合入，说明 Heartbeat 是当前重点优化但**节奏受 PR 评审阻塞**的子模块。
- **国际化 (i18n) 启动**：#5366 提示 WebUI 已具备多语言基础但 Agent 活动文本尚未本地化，是 i18n 工程的下一站。

---

## 7. 用户反馈摘要

从今日活跃议题的描述中提炼：

- **失败可恢复性成第一痛点**："永久死亡"、"pre-mutates the session"、"advances past the full message batch"——用户在使用中遭遇过**永久性数据 / 状态丢失**，对静默失败极为敏感。
- **多通道用户体验差距**：Telegram 用户明确表达"贴纸根本用不了 / reaction 像是内部 hack"，反映出**与官方平台原生能力对齐**的诉求。
- **企业级 / 安全诉求升级**：#5306 安全公告能在一日内处理关闭，反映用户群体中存在**对执行策略严格性要求较高的运营方**。
- **大型 MCP 集成的 Context 经济性焦虑**：#5298 指出 `ToolRegistry.get_definitions()` 在 MCP 工具数大时显著增加 prompt 成本，是**真实部署中观察到的性能问题**，而非理论担忧。
- **Windows 用户存在感增强**：#5382 提到"两次崩溃均在 CDT 15:44 与 18:45"，说明 Windows 平台已成为生产部署选项之一。

---

## 8. 待处理积压（提醒维护者关注）

| 项目 | 类型 | 创建时间 | 已等待 | 状态 |
|---|---|---|---|---|
| [#4841](https://github.com/HKUDS/nanobot/issues/4841) | Matrix Element 信任验证 | 2026-07-07 | **~38 天** | 🟠 已 38 天无实质进展，今日 [#5385](https://github.com/HKUDS/nanobot/pull/5385) PR 提交，关注合并 |
| [#4549](https://github.com/HKUDS/nanobot/pull/4549) | PR: heartbeat model_override | 2026-06-26 | ~49 天 | 🟡 待合并 |
| [#4551](https://github.com/HKUDS/nanobot/pull/4551) | PR: heartbeat isolated_session | 2026-06-26 | ~49 天 | 🟡 待合并 |
| [#4029](https://github.com/HKUDS/nanobot/issues/4029) | (相关历史议题) | — | — | 由今日关闭的 #4556 关联，建议复核是否真的解决了原 issue |
| [#5298](https://github.com/HKUDS/nanobot/issues/5298) | MCP schema 预算 | 2026-08-08 | 6 天 | ✅ 已有 PR #5388，但需评审 |

### 📣 维护者建议

1. **优先评审 #5376**：解决 Cron 永久静默死亡这一 P0 问题。
2. **批量评审 #5379/#5380/#5382/#5383**：四个 Session 相关 P1/P2 修复应同步合并，并补充 release notes。
3. **清理历史 PR**：#4549 / #4551 / #4550 / #4556 一批 06 月 PR 长期悬置，今日 #4550 / #4556 已关闭，建议审视 #4549 / #4551 是否还有现实价值。
4. **关注 #5372**：第三方记忆系统集成提案，应警惕其商业属性，避免与项目中立性冲突。

---

## 附录 · 数据摘要

```
Issues:   11 条更新（10 活跃 / 1 已关闭）
PRs:      31 条更新（22 待合并 / 9 已关闭）
Releases: 0
合并率:    ~29% （9/31）
最活跃作者: @dajiaohuang（贡献 7 条 PR / Issue）
```

> 报告由 AI 智能体开源项目分析师自动生成，基于公开 GitHub 数据汇总分析。

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

<think>The user wants me to generate a daily report for the PicoClaw project based on the GitHub data provided. Let me analyze the data carefully:

**Overview:**
- 24h Issues: 2 (2 active, 0 closed)
- 24h PRs: 9 (6 pending, 3 merged/closed)
- New versions: 0

**Issues:**
1. #3281 - Web UI chat input laggy with longer history (BUG, @xpader, updated 2026-08-13, 5 comments, 1 👍)
2. #3331 - Feature request: Use any models with /audio/transcriptions endpoint (whisper-transcription flag, @stanislavvv, new 2026-08-13, 0 comments)

**PRs:**
1. #3318 [OPEN, stale] - fix(web): repair unparseable pnpm-lock.yaml (@nuestraai)
2. #3336 [OPEN] - build(deps): bump aws-sdk-go-v2/service/bedrockruntime 1.53.3 → 1.57.1
3. #3305 [CLOSED, stale] - build(deps): bump aws-sdk-go-v2/service/bedrockruntime 1.53.3 → 1.56.2 (closed, replaced by #3336)
4. #3335 [OPEN] - build(deps): bump aws-sdk-go-v2/config 1.32.25 → 1.32.35
5. #3306 [CLOSED, stale] - build(deps): bump aws-sdk-go-v2/config 1.32.25 → 1.32.33 (closed, replaced by #3335)
6. #3334 [OPEN] - build(deps): bump anthropic-sdk-go 1.55.1 → 1.62.0
7. #3304 [CLOSED, stale] - build(deps): bump anthropic-sdk-go 1.55.1 → 1.61.0 (closed, replaced by #3334)
8. #3332 [OPEN] - build(deps): bump aws-sdk-go-v2 1.42.0 → 1.43.4
9. #3333 [OPEN] - build(deps): bump maunium.net/go/mautrix 0.27.0 → 0.29.0

Notable: 5 of the 6 closed PRs are dependabot stale closures being replaced by newer versions.

Let me structure the report now:

1. **今日速览**: Active dependabot dependency updates, one important web UI bug, one feature request, mostly automated maintenance activity.

2. **版本发布**: No new releases.

3. **项目进展**: Closed PRs are mostly stale dependabot PRs being closed/replaced - no functional code changes merged. The actual functional change pending is #3318 which fixes pnpm-lock.yaml.

4. **社区热点**: #3281 is the most active issue (5 comments, 1 👍), needs web UI performance fix.

5. **Bug 与稳定性**: #3281 - Web UI input lag with long history.

6. **功能请求与路线图信号**: #3331 - whisper-transcription flag for arbitrary models.

7. **用户反馈摘要**: From #3281 - users experience laggy input on web UI with longer chat history. The whisper model complaint shows users want more flexibility in ASR.

8. **待处理积压**: #3281 has been open since 2026-07-21 (24+ days), still needs attention. #3318 is marked stale.

Let me write this in Chinese as requested.</think>

# PicoClaw 项目日报
**日期：2026-08-14**

---

## 1. 今日速览

PicoClaw 今日整体活跃度处于**中等偏低**水平，未发布新版本，过去 24 小时共产生 2 条 Issue 更新和 9 条 PR 活动。其中 6 条 PR 由 Dependabot 自动发起且均处于待合并状态，3 条被关闭的 PR 中多为 **stale 依赖升级被新版本替代**（#3304 → #3334、#3305 → #3336、#3306 → #3335），意味着**实质性功能/修复 PR 当日几乎零合入**。值得关注的是一条社区已反馈 24 天的 Web UI 性能 Bug（#3281）今日再次被讨论，以及一条关于 ASR 模型灵活性的新功能诉求（#3331）。项目健康度评估：**维护正常，但功能迭代节奏趋缓，需关注用户报告的输入延迟问题。**

---

## 2. 版本发布

🚫 **今日无新版本发布**。最近一次正式发布仍为 0.3.1（见 #3281 报告环境）。

---

## 3. 项目进展

今日无实质性功能 PR 合并，**项目代码层面前进几乎为零**。具体动作如下：

- **关闭/替代的 PR**（多为 stale 清理）：
  - [#3304](https://github.com/sipeed/picoclaw/pull/3304) — Anthropic SDK 升级至 1.61.0 → **关闭**（被 #3334 替代为 1.62.0）
  - [#3305](https://github.com/sipeed/picoclaw/pull/3305) — BedrockRuntime SDK 升级至 1.56.2 → **关闭**（被 #3336 替代为 1.57.1）
  - [#3306](https://github.com/sipeed/picoclaw/pull/3306) — AWS Config SDK 升级至 1.32.33 → **关闭**（被 #3335 替代为 1.32.35）

- **等待维护者处理的关键 PR**：
  - [#3318](https://github.com/sipeed/picoclaw/pull/3318) — 修复 `pnpm-lock.yaml` 重复键导致 pnpm 拒绝解析的 bug（已被标记 **stale**），直接阻塞前端依赖安装流程。

> 💡 **项目进度信号**：仓库近期高度依赖 Dependabot 自动维护，核心功能迭代缺乏人工合入，建议维护者关注功能类 PR 的审阅节奏。

---

## 4. 社区热点

| 排名 | 标题 | 类型 | 互动数据 | 链接 |
|---|---|---|---|---|
| 🥇 | Web UI chat input is very laggy when history has a little bit long | Issue | 5 评论 / 1 👍 | [#3281](https://github.com/sipeed/picoclaw/issues/3281) |
| 🥈 | Use any models with /audio/transcriptions endpoint | Issue | 0 评论（新开） | [#3331](https://github.com/sipeed/picoclaw/issues/3331) |
| 🥉 | fix(web): repair unparseable pnpm-lock.yaml | PR | stale 标记 | [#3318](https://github.com/sipeed/picoclaw/pull/3318) |

**#3281 为绝对热点**，引发 5 条评论讨论，背后反映出 Web UI 在长会话下的渲染/输入性能问题已影响实际使用体验。

---

## 5. Bug 与稳定性

| 严重程度 | Issue | 描述 | 是否有 fix PR |
|---|---|---|---|
| 🟠 **中** | [#3281](https://github.com/sipeed/picoclaw/issues/3281) | Web UI 当会话历史稍长时，输入框输入明显卡顿，影响用户体验 | ❌ 暂无 fix PR |
| 🟡 **低/阻塞性** | [#3318](https://github.com/sipeed/picoclaw/pull/3318) | `pnpm-lock.yaml` 含重复 `semver@7.8.5` 键，pnpm 直接报 `ERR_PNPM_BROKEN_LOCKFILE` | ✅ 已有 fix PR，但被标 stale 未合入 |

> ⚠️ **风险点**：#3318 的 lockfile 损坏会导致前端模块安装失败，间接影响所有 Web UI 相关工作（包括 #3281 的修复验证流程）。建议维护者优先合并。

---

## 6. 功能请求与路线图信号

**[#3331 — Use any models with /audio/transcriptions endpoint](https://github.com/sipeed/picoclaw/issues/3331)**

- **诉求**：当前 ASR 仅支持 `*-whisper-*` 模型（用户认为"too old and slow"），希望扩展到任意支持 `/audio/transcriptions` 端点的模型。
- **建议方案**：在 model 或 voice 配置中新增 `whisper-transcription: true` 标志位，强制 `asr.go` 走 whisper 路径。
- **路线图可能性**：⭐⭐⭐⭐（较高）
  - 实现成本低（仅配置开关），与现有架构兼容性好。
  - 社区对老旧 whisper 模型性能不满已有明确表达，是合理演进方向。
  - 建议维护者在下一 minor 版本（如 0.3.2 或 0.4.0）纳入。

---

## 7. 用户反馈摘要

**🎯 用户痛点 1 — Web UI 输入卡顿（#3281）**
- 用户反馈：在 Web UI 中，当单会话聊天历史变长后，输入框"very laggy"，每次键入都明显延迟。
- 社区评论热度：5 条讨论，说明问题并非个案。
- **满意度**：❌ 不满，核心交互体验受损。

**🎯 用户痛点 2 — Whisper 模型过时（#3331）**
- 用户观点：`*-whisper-*` 模型"too old and slow"，制约了 ASR 性能与可用性。
- **使用场景**：用户希望使用更新的 ASR 模型以获得更快速度和更高准确率。
- **满意度**：⚠️ 期望改进，主动提交 feature proposal。

---

## 8. 待处理积压

| Issue/PR | 类型 | 开置时间 | 风险等级 | 链接 |
|---|---|---|---|---|
| #3281 | Bug | 2026-07-21（约 24 天） | 🟠 中 | [#3281](https://github.com/sipeed/picoclaw/issues/3281) |
| #3318 | Bug Fix PR | 2026-08-05（已被标 stale） | 🟡 中 | [#3318](https://github.com/sipeed/picoclaw/pull/3318) |

> 📌 **维护者提醒**：
> 1. #3281 已开放 24 天且持续有用户互动，建议尽快回应或分配负责人；
> 2. #3318 作为阻塞性 lockfile 修复，不应继续以 stale 标签搁置——它实际上影响所有前端开发流程；
> 3. 6 个待合并的 Dependabot PR 形成积压，建议批量 review 后合并，避免长期占用 PR 队列。

---

## 📊 数据附录

| 指标 | 数值 |
|---|---|
| Issues 活跃/新开 | 2 / 1 |
| Issues 已关闭 | 0 |
| PRs 待合并 | 6 |
| PRs 已关闭 | 3（均为 stale 依赖升级被替代） |
| 新版本发布 | 0 |
| 社区互动总量 | 6 条评论（5 来自 #3281）+ 1 👍 |

---

**报告生成时间**：2026-08-14
**数据范围**：过去 24 小时（截至 2026-08-14）
**项目地址**：[github.com/sipeed/picoclaw](https://github.com/sipeed/picoclaw)

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

<think>Let me analyze the GitHub data for IronClaw and create a comprehensive daily report.

Key observations:
1. There's a new release: ironclaw-v1.2.0 (stable promotion from rc.3)
2. 50 issues updated (32 active/new, 18 closed)
3. 50 PRs updated (26 pending, 24 merged/closed)
4. The major epic #7482 "Pluggable agent loops" is a huge architectural change
5. Many sub-issues of #7482 were created today (#7606-#7626)
6. Performance work (#7591 epic) is generating multiple Tier 3 optimization PRs
7. Several bug reports from users: MCP connection issues, GitHub extension auth issue, PDF mime_type issue, memory recall issue
8. The Telegram channel pairing feature is in PR #7464
9. ACP-related work (Agent Communication Protocol)

Let me structure this as a proper daily report in Chinese.

Key items to highlight:
- Release: 1.2.0 stable promotion
- Epic #7482 expansion (20+ sub-issues)
- Performance optimization batch (#7591 epic, multiple PRs)
- User-reported bugs: #7626, #7627, #7589, #6257, #7185
- Unbound-turns work (#7562, #7633, #7634)
- ACP executor work (#7624, #7513)
- Nostr WASM host functions (#7184)
- Doc-truth contract tests (#7378, #7376)
- Document editing feature (#7163)

Let me organize this into the required sections.</think>

# IronClaw 项目日报 · 2026-08-14

---

## 1. 今日速览

IronClaw 今日保持高强度迭代节奏：**24 小时内 50 条 Issues 更新、50 条 PR 更新**，并正式发布稳定版 **v1.2.0**。战略层面，Epic #7482「Pluggable agent loops」进入大规模执行阶段，今天一次性拆出 20 余个子 Issue（#7606–#7626），围绕 **iron-proxy 边车、ACP 执行器、HarnessDriver 契约、能力套接字**等四大工作流形成清晰的可交付阶梯。性能层面，Epic #7591「Postgres 写放大」正在批量推进（#7628/#7629/#7631/#7630/#7603–7605），多支 PR 已就绪待合。总体评估：**项目处于架构重组与性能优化的关键冲刺期，活跃度极高，文档与质量门禁同步收紧。**

---

## 2. 版本发布

### 🚀 ironclaw-v1.2.0（稳定版，2026-08-13）

由 RC3 提升为稳定版，由 [PR #7625](https://github.com/nearai/ironclaw/pull/7625) 完成发布操作。变更内容：

- **已修复**：运行时容器镜像现安装 `curl`，容器内 HTTP 健康检查可正常执行——直接消除编排器对 Worker 的探测失败问题
- **完整集成**：RC1 全部特性 + RC2/RC3 验证通过的全部修复
- **变更来源**：[PR #7625](https://github.com/nearai/ironclaw/pull/7625)（已关闭，含 RC1–RC3 完整 changelog）

⚠️ **升级注意**：本次发布未声明破坏性变更，主要是运行时依赖与健康检查路径修复；建议所有自托管用户在升级后验证容器编排器（如 Kubernetes）健康检查配置。

---

## 3. 项目进展

### ✅ 重要合并/关闭 PR（按重要性排序）

| PR | 主题 | 影响 |
|---|---|---|
| [#7625](https://github.com/nearai/ironclaw/pull/7625) | 发布 1.2.0 稳定版 | RC3 验证通过，正式 ship |
| [#7633](https://github.com/nearai/ironclaw/pull/7633) | feat(unbound-turns): 准备上下文接收门、未绑定运行通道、内核绑定引用删除 | 实现 #7562 设计端状态，线程成为协调器工作单元；kernel 不再承担 reply 路由 |
| [#7163](https://github.com/nearai/ironclaw/pull/7163) | feat(documents): 结构化编辑 docx/xlsx/pptx + HTML→PDF | 解决 #6898 延迟项，修复 #7109 文本日志回归（关闭） |
| [#7590](https://github.com/nearai/ironclaw/pull/7590) | fix(live-canary): 对齐打包技能标记 owner | Canary 首轮验证成功，技能快照行为可控（关闭） |
| [#7376](https://github.com/nearai/ironclaw/pull/7376) | ci(check-guidance): 扩展引用门禁至 docs/ 表面 | doc-truth 系列第二篇，覆盖 Mintlify 页面与合约语料库 |
| [#7506](https://github.com/nearai/ironclaw/pull/7506) | chore(deps): 升级 17 个 everything-else 依赖 | async-trait/thiserror 等升至最新版（关闭） |
| [#7619](https://github.com/nearai/ironclaw/pull/7619) | 引入可插拔循环一致性套件 | 任何 Harness 失败即不可 ship，绑定 #7482 所有决策（关闭） |
| [#7617](https://github.com/nearai/ironclaw/pull/7617) | 集成策略记录：声明式 vendor/domain 清单 | 集成≈30 行配置而非手写 WASM 包（关闭） |
| [#7616](https://github.com/nearai/ironclaw/pull/7616) | 锁定代理镜像与构建管线 | claude-code/pi/codex 三套镜像固定（关闭） |

**整体判断**：项目在**架构现代化（unbound-turns）、文档质量门禁、运行时稳定性**三条主线同步推进，1.2.0 稳定版标志着 RC 阶段正式收官，下一窗口将集中投入 #7482 的执行落地。

---

## 4. 社区热点

### 🔥 最高讨论度 Issues/PRs

1. **[#7482](https://github.com/nearai/ironclaw/issues/7482)** — Epic: Pluggable agent loops（6 条评论，OPEN）
   - 项目级战略变更：IronClaw 收敛为「kernel」，放弃 agent loop 所有权，转为承载 harness 调度的内核层
   - 今日新增 14 个子 Issue 覆盖六大工作流（WS1–WS6）

2. **[#6257](https://github.com/nearai/ironclaw/issues/6257)** — PDF 文件发送报 `Invalid value (attachments.mime_type)`（4 条评论，已关闭）
   - 由 Slack `#x-ai-product-feedback` 真实用户反馈驱动

3. **[#2117](https://github.com/nearai/ironclaw/pull/2117)** — ironclaw-bridge：云端部署访问本地文件/MCP（2 条评论，1 👍）
   - 解决 Obsidian vault、用户本地项目目录等关键场景

4. **[#7185](https://github.com/nearai/ironclaw/issues/7185)** — 跨会话记忆召回不可靠（2 条评论）
   - 来自 IronClaw Champions 每周反馈，多名独立测试者复现

**背后诉求**：用户与社区正在推动 IronClaw 从「单一 Rust 原生循环」向「可插拔内核」演进，同时强调**云端-本地桥接、跨会话记忆、PDF/文档处理**等真实场景痛点。

---

## 5. Bug 与稳定性

### 🐛 今日报告 Bug（按严重程度）

| 严重度 | Issue | 描述 | 修复状态 |
|---|---|---|---|
| 🔴 高 | [#7185](https://github.com/nearai/ironclaw/issues/7185) | 跨会话记忆不可靠召回（Devon 法律场景复现） | OPEN，暂无 fix PR |
| 🔴 高 | [#7626](https://github.com/nearai/ironclaw/issues/7626) | 自定义 MCP 需浏览器/邮箱鉴权时卡死 | OPEN，新报告 |
| 🟠 中 | [#7627](https://github.com/nearai/ironclaw/issues/7627) | GitHub 扩展输入任意凭证后显示「已连接」 | OPEN，新报告 |
| 🟠 中 | [#7589](https://github.com/nearai/ironclaw/issues/7589) | NEAR AI Cloud Sonnet-5 连续 3 天返回 500 | 已关闭（云端依赖问题） |
| 🟡 低 | [#6257](https://github.com/nearai/ironclaw/issues/6257) | PDF 生成 `Invalid value (attachments.mime_type)` | 已关闭（依赖 PR #7163 修复链路） |

**关键观察**：跨会话记忆（#7185）问题已进入第三周持续报告，但尚未绑定 fix PR，建议维护者优先安排；MCP 鉴权流卡死（#7626）为新晋高优先级议题。

---

## 6. 功能请求与路线图信号

### 📥 今日新增功能请求

- **WebUI 暴露 Reborn 版本**（[#7580](https://github.com/nearai/ironclaw/issues/7580)）—— 用户无法在 UI 中定位当前运行版本，UX 类需求，预计随 1.2.x 补丁快速响应
- **ironclaw-bridge 本地桥接守护进程**（[#2117](https://github.com/nearai/ironclaw/issues/2117)）—— 云托管部署访问本地文件（Obsidian vault 等），属大尺寸 L 工单，社区 👍 1 票
- **Telegram 联动设备配对**（[#7464](https://github.com/nearai/ironclaw/pull/7464)）—— 已进入 PR 阶段，配对手机号后自动绑定 bot channel，**很可能进入下一版本**
- **Nostr 主机函数**（[#7184](https://github.com/nearai/ironclaw/pull/7184)）—— WASM 工具沙箱新增 Nostr 签名/查询，扩展去中心化身份场景
- **结构化自动化执行契约**（[#7548](https://github.com/nearai/ironclaw/pull/7548)）—— scheduled automations 引入版本化契约，要求目标/成功条件/输出/允许能力/必需技能五元组
- **docx/xlsx/pptx 结构化编辑**（[#7163](https://github.com/nearai/ironclaw/pull/7163)）—— 已合并，1.2.0 后即生效
- **ACP serve 命令 + 流式/取消**（[#7513](https://github.com/nearai/ironclaw/pull/7513)）—— 暴露 Agent Communication Protocol，让外部工具（Copilot CLI、VS Code）连接

**路线图信号**：[#7482](https://github.com/nearai/ironclaw/issues/7482) 的子 Issue #7624 明确写明 **「v0: ACP harness executor — claude-code as the loop, dev-only yolo」是当前唯一要立即构建的可插拔循环项**，意味着 ACP 路径将作为下一里程碑的旗舰功能。

---

## 7. 用户反馈摘要

从 Slack `#x-ai-product-feedback` 与 Champions 周会渠道提炼：

- **场景痛点**：
  - 法律行业用户（Devon）：Agent 缺少对前期会话信息的访问，影响多轮法律咨询连贯性 → 触发 #7185
  - PDF 文件发送：mime_type 校验失败阻断业务流 → #6257 已修复
  - 自定义 MCP 接入：浏览器+邮箱双因素鉴权时 IronClaw 卡死 → #7626 待处理
  - GitHub 扩展：凭证任意输入即显示「已连接」，状态与实际不符 → #7627 待处理

- **使用场景信号**：
  - 云端部署+本地文件（Obsidian、本地项目目录）需求强烈 → 推动 #2117
  - 用户希望从 WebUI 直接查看 Reborn 版本 → #7580
  - Champions 持续反馈机制已成稳定输入渠道，建议团队维持周会节奏

- **正向信号**：
  - 1.2.0 稳定发布且 Canary 验证一次性成功（[PR #7590](https://github.com/nearai/ironclaw/pull/7590) 报告）
  - 性能优化批次获得明确量化收益预期（每轮 -11/-14 行 Postgres 写、-11 行事件）

---

## 8. 待处理积压提醒

### ⚠️ 长期未响应/待合并清单

| 编号 | 创建时间 | 议题 | 状态 | 风险 |
|---|---|---|---|---|
| [#7185](https://github.com/nearai/ironclaw/issues/7185) | 2026-08-04（10 天） | 跨会话记忆召回不可靠 | OPEN，无关联 PR | 🔴 高 — 已三周持续报告 |
| [#2117](https://github.com/nearai/ironclaw/issues/2117) | 2026-04-07（4 个月） | ironclaw-bridge 本地桥接 | OPEN，无 PR | 🟠 中 — 真实场景阻塞 |
| [#7562](https://github.com/nearai/ironclaw/pull/7562) | 2026-08-13 | docs: detached turns 设计文档 | OPEN，XL | 🟡 中 — 设计基线，建议优先合入 |
| [#7464](https://github.com/nearai/ironclaw/pull/7464) | 2026-08-10（4 天） | Telegram 联动设备配对 | OPEN，XL | 🟡 中 — 用户场景已具体 |
| [#7184](https://github.com/nearai/ironclaw/pull/7184) | 2026-08-04（10 天） | Nostr 主机函数 | OPEN，XL | 🟢 低 — 新场景 |

**建议**：维护者重点关注 **#7185 跨会话记忆**（已三周社区报告，影响法律/咨询等核心场景）与 **#7562 设计文档**（作为 #7633/#7634 的依赖栈基线，阻塞 unbound-turns 主线落地）。

---

## 📊 健康度仪表盘

| 维度 | 评分 | 说明 |
|---|---|---|
| 迭代活跃度 | ⭐⭐⭐⭐⭐ | 24h 100 条更新，Epic 拆分+性能批次双线推进 |
| 架构清晰度 | ⭐⭐⭐⭐ | #7482 工作流边界清晰，绑定决策已固化 |
| 质量门禁 | ⭐⭐⭐⭐ | doc-truth 一致性套件铺开，Canary 自动验证 |
| 用户响应 | ⭐⭐⭐ | 仍有 4 个月未响应 Issue，10 天级别 bug 待解 |
| 性能投入 | ⭐⭐⭐⭐⭐ | Epic #7591 全 Tier 3 量化目标已拆分 |
| 综合健康度 | **A-** | 项目处于关键架构冲刺期，建议加强社区反馈闭环 |

---

*报告基于 GitHub 数据自动生成，数据快照：2026-08-14（24 小时窗口）*

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

<think>Let me analyze the GitHub data for LobsterAI (github.com/netease-youdao/LobsterAI) for the daily report dated 2026-08-14.

Key data points:
- 24h Issues updates: 2 (new/active: 2, closed: 0)
- 24h PR updates: 10 (pending: 4, merged/closed: 6)
- No new releases

Looking at the PRs:
- Closed/merged (6): #2488, #2487, #2485, #2486, #1232, #2484
- Open/pending (4): #1156, #1163, #1165, #1166

Issues:
- #2489: 快更新v4pro！ (just opened today, asking for v4pro update)
- #1162: stale - asking for Vitest unit tests for openclawMemoryFile and openclawLocalTimeContextPrompt

Let me note that some PRs and issues are marked as "stale" and were created in March/April 2026 but updated on 2026-08-13. These are old items being revived.

Let me structure the report properly:

1. **今日速览** - 24h activity overview
2. **版本发布** - None
3. **项目进展** - Closed PRs analysis
4. **社区热点** - Active discussions
5. **Bug 与稳定性** - Bug-related items
6. **功能请求与路线图信号** - Feature requests
7. **用户反馈摘要** - User pain points
8. **待处理积压** - Stale items

Let me write this in Chinese as requested, with professional and data-driven tone.</think>

# LobsterAI 项目动态日报

**日期**：2026-08-14
**项目**：[netease-youdao/LobsterAI](https://github.com/netease-youdao/LobsterAI)

---

## 1. 今日速览

LobsterAI 仓库过去 24 小时呈现"**前端重构集中爆发 + 后端测试积压清理**"的态势：合并/关闭 PR 6 条，活跃 Issue 2 条，无版本发布。核心贡献者 @fisherdaddy 单日连推 3 条 renderer 层 UI 重构 PR（#2486、#2487、#2488），覆盖 Skills/MCP/Cowork 视图整合，反映团队正在为下一阶段体验收敛做准备；同时多个 3 月份遗留的"stale"单测与体验修复 PR 重新进入待审状态（#1156、#1163、#1165、#1166），说明维护者正在主动清理长尾积压。整体活跃度处于中高位。

---

## 2. 版本发布

无新版本发布。

---

## 3. 项目进展

今日有 6 条 PR 被关闭（含合并/拒合），其中具有实质性进展的包括：

- **[#2485 feat(activity): support evergreen daily check-in](https://github.com/netease-youdao/LobsterAI/pull/2485)**（@btc69m979y-dotcom）— 将签到活动从短期活动调整为 evergreen 常驻形态，复用既有服务端/管理端能力，并补充自动状态刷新与积分入口跳转优化。Vitest 7/7 通过、ESLint 零警告、build 通过，质量信号良好。
- **[#2486 refactor(mcp): unify MCP card/detail UI with kits and skills styling](https://github.com/netease-youdao/LobsterAI/pull/2486)**（@fisherdaddy）— 抽象 `CardOverflowMenu`、`managementTypography` 等共享样式，新增 `McpCard`、`McpDetailModal`，将 MCP 与 Kits/Skills 视觉语言统一，是 renderer 层 UI 一致性工作的关键一步。
- **[#2487 refactor(skills): merge skills and mcp views into unified skills-and-connectors view](https://github.com/netease-youdao/LobsterAI/pull/2487)**（@fisherdaddy）— 将 Skills 与 MCP 视图合并为统一的 skills-and-connectors 视图，是 UI 整合的延续。
- **[#2488 Refactor/cowork btw and management UI](https://github.com/netease-youdao/LobsterAI/pull/2488)**（@fisherdaddy）— Cowork 区块与管理端 UI 重构。
- **[#1232 fix(scheduledTask): 修复定时任务首次执行结果不推送到 UI 的问题](https://github.com/netease-youdao/LobsterAI/pull/1232)**（@choyuenga，已关闭）— 定位到 `cronJobService.ts` 中 `pollOnce()` 因 `previousRunAtMs` 初值判断导致首次执行通知丢失的根因。
- **[#2484 Feat/enterprise edition](https://github.com/netease-youdao/LobsterAI/pull/2484)**（@liugang519，已关闭）— 涉及 renderer/docs/main/openclaw 多区域的企业版特性，需关注后续是否会拆分或重新提交。

**整体评价**：renderer 层 UI 一体化向前迈进了一大步，组件复用与样式统一成为近期主线；但企业版 PR 与 #1232 等修复的具体落点仍需在主分支进一步验证。

---

## 4. 社区热点

- **[#2489 快更新v4pro！](https://github.com/netease-youdao/LobsterAI/issues/2489)**（@nimamasl114514，今日新建，1 条评论）— 用户对 v4pro 版本发布的催促，是当前评论区唯一活跃贴，反映 Pro 版本更新节奏与用户预期存在落差。
- **[#1162 [stale] 为 openclawMemoryFile 和 openclawLocalTimeContextPrompt 补充 Vitest 单元测试](https://github.com/netease-youdao/LobsterAI/issues/1162)**（@MaoQianTu，今日被关联 PR 唤醒）— 牵动 #1165 的 75 个测试用例，揭示社区对核心记忆模块零测试覆盖的长期关注。

诉求分析：用户的核心诉求集中在两个方向——**版本节奏可见性**（v4pro 何时发布）与**核心模块质量基线**（记忆/安全模块需要测试保障）。

---

## 5. Bug 与稳定性

| 优先级 | 问题 | 状态 | 链接 |
|---|---|---|---|
| 中 | 定时任务"立即运行"无 UI 反馈，需等 ~15s 轮询 | 已有 fix PR #1163 待审 | [#1163](https://github.com/netease-youdao/LobsterAI/pull/1163) |
| 中 | 定时任务首次执行结果不推送 UI | PR #1232 已关闭，需确认是否合入 main | [#1232](https://github.com/netease-youdao/LobsterAI/pull/1232) |
| 中 | 自定义 Agent 允许重名，列表歧义 | 已有 fix PR #1166 待审 | [#1166](https://github.com/netease-youdao/LobsterAI/pull/1166) |
| 高（潜在） | 危险命令检测模块 `commandSafety.ts` 零测试，误判将导致 AI 静默执行 `rm -rf`/`git push --force` | 已有补测 PR #1156 待审 | [#1156](https://github.com/netease-youdao/LobsterAI/pull/1156) |
| 高（潜在） | 记忆候选质量评分 `coworkMemoryJudge.ts` 零测试 | 随 #1156 一起覆盖 | [#1156](https://github.com/netease-youdao/LobsterAI/pull/1156) |

**特别提醒**：#1156 涉及的安全与记忆门卫模块虽无现场崩溃报告，但其风险等级高于一般 UX Bug，建议维护者优先合并。

---

## 6. 功能请求与路线图信号

- **企业版功能**：[#2484 Feat/enterprise edition](https://github.com/netease-youdao/LobsterAI/pull/2484) 涉及 renderer/docs/main/openclaw 多区域，规模较大；当前已关闭，需关注是否拆分为多个聚焦 PR 重新提测。
- **Skills + MCP 统一视图**：[#2487](https://github.com/netease-youdao/LobsterAI/pull/2487) 反映了"将 AI 能力连接器（Skills/MCP/Kits）聚合为单一管理面"的路线图方向，与 #2486 共同推进。
- **常驻签到活动**：[#2485](https://github.com/netease-youdao/LobsterAI/pull/2485) 显示产品正从"周期性活动"过渡到"持续性用户粘性设计"，可能影响后续增长策略。
- **v4pro 升级呼声**：[#2489](https://github.com/netease-youdao/LobsterAI/issues/2489) 表明 Pro 用户的版本期待正在累积，建议维护者在 release notes 中给出明确节奏。

---

## 7. 用户反馈摘要

- **版本节奏不透明**（#2489）：用户明确表达对 v4pro 更新的期待，单条 Issue 评论已生成，说明此话题具备传播潜力。
- **核心模块安全感缺失**（#1162 + #1156）：社区贡献者主动为 `commandSafety` 与 `coworkMemoryJudge` 补测，反映用户对"AI 自动执行破坏性命令"和"记忆污染"的隐忧——这是 LobsterAI 作为 AI Agent 产品最敏感的两类风险。
- **交互即时性差**（#1163、#1232）：定时任务"立即运行"按钮无反馈、首次执行不推送，本质是 IPC/状态层缺少乐观更新；用户场景是"高频触发任务后等待确认"，体验痛点真实。
- **管理面一致性**（#2486、#2487、#2488）：连续三天的 UI 重构显示贡献者与用户对"SKills/MCP/Kits/Agent 应有统一管理体验"达成共识。

---

## 8. 待处理积压

以下条目虽被贴上 [stale] 标签，但今日 PR 重新激活，建议维护者重点跟进：

- **[#1156 为 commandSafety 和 coworkMemoryJudge 补充 Vitest 单元测试](https://github.com/netease-youdao/LobsterAI/pull/1156)** — 安全/记忆门卫模块，零测试覆盖风险高。
- **[#1163 补全"立即运行"交互反馈，引入乐观更新与 Gateway 状态同步](https://github.com/netease-youdao/LobsterAI/pull/1163)** — 涉及前端 loading、IPC 改造、状态同步三处改动，体量较大，需维护者评估拆分。
- **[#1165 为 openclawMemoryFile 和 openclawLocalTimeContextPrompt 补充 Vitest 单元测试](https://github.com/netease-youdao/LobsterAI/pull/1165)** — 75 个用例，与 #1162 配套。
- **[#1166 fix(agent): prevent duplicate custom agent names](https://github.com/netease-youdao/LobsterAI/pull/1166)** — 轻量修复，建议快速合并。

**维护者建议**：将上述 4 条按"安全 #1156 → 体验 #1163 → 测试 #1165 → 小修 #1166"顺序评审，可在不大改 API 的前提下显著提升项目稳定性指标。

---

*本报告由 AI 分析 GitHub 数据自动生成，数据来源为 LobsterAI 公开仓库事件流。*

</details>

<details>
<summary><strong>QwenPaw</strong> — <a href="https://github.com/agentscope-ai/QwenPaw">agentscope-ai/QwenPaw</a></summary>

<think>Let me analyze the data provided and generate a comprehensive daily report for QwenPaw project.

Key observations:
1. Two versions released: v2.1.0 and v2.1.0-beta.5 - major version release
2. 46 issues updated (29 new/active, 17 closed)
3. 50 PRs updated (31 pending, 19 merged/closed)
4. Multiple security-related issues including serious ones (port exposure, plugin permission gaps)
5. Several significant bugs in v2.1.0 release
6. Active community engagement with feature requests

Let me organize this into a structured daily report in Chinese as requested.</think>

# QwenPaw 项目日报 · 2026-08-14

> 数据来源：GitHub agentscope-ai/QwenPaw | 统计窗口：过去 24 小时

---

## 一、今日速览

QwenPaw 项目今日迎来 **v2.1.0 正式版与 v2.1.0-beta.5 同步发布** 的重要节点，伴随高强度的社区反馈与修复迭代。Issues 活跃 46 条（29 新开/活跃、17 关闭），PR 活跃 50 条（31 待合并、19 合并/关闭），整体处于 **"重大版本发布 + 集中修复期"** 的典型路径。值得警惕的是，多个 v2.1.0 回归问题（并发会话、Desktop TUI、Anthropic 审核误报、Shabox/UV 冲突）已经上线，若干安全相关报告（端口暴露、插件静默注入）持续发酵。建议社区在升级 v2.1.0 前重点评估 #7011、#7007、#7008 等回归风险。

---

## 二、版本发布

### 🚀 v2.1.0（正式版）

主版本发布，核心亮点：

- **QwenPaw OS Shell**（[#6645](https://github.com/agentscope-ai/QwenPaw/pull/6645)）：可移动、可缩放的应用窗口，启动器、任务栏、通知系统与持久化布局
- **App Center 统一目录**：已安装应用与市场应用共享同一目录结构
- **整体控制台体验升级**

> ⚠️ **破坏性变更提示**：v2.1.0 引入 Agent 状态持久化与并发会话相关变更，#7011 报告存在并发会话时 Agent 状态写入错误 session 文件的回归（2.0.1 不复现）。建议生产环境暂留 2.0.1。

### 🚀 v2.1.0-beta.5

发布前修复密集，主要包括：

- `fix(chats)` 处理 dict-like 模型响应（[#6816](https://github.com/agentscope-ai/QwenPaw/pull/6816) by @RerankerGuo）
- `fix(memory)` 简化长期记忆引导（[#6942](https://github.com/agentscope-ai/QwenPaw/pull/6942) by @jinliyl）
- 文档站 Files 工作区相关修复

### 📌 迁移注意事项

- 升级前并发使用多个会话（特别是飞书长连接 WebSocket）请先验证状态隔离
- Windows 用户启用 Shabox 沙箱前需评估 #7005 的 UV 写入受限问题
- Anthropic 兼容模型 + 长历史会话场景（>60 条消息）需关注 #7008 误审核问题

---

## 三、项目进展

今日共 **19 个 PR 合并/关闭**，项目在多个方向同步推进：

| 方向 | 代表 PR | 说明 |
|------|---------|------|
| **平台与可靠性** | [#6999](https://github.com/agentscope-ai/QwenPaw/pull/6999) | CI 阶段预构建多架构 Docker 镜像，发布阶段不再重构建，显著加快 release pipeline |
| **核心会话** | [#6636](https://github.com/agentscope-ai/QwenPaw/pull/6636) | 修复 #6635：聊天历史接口分页 + GZip 压缩，长会话 1MB+ 不再 30s 超时 |
| **任务控制** | [#6652](https://github.com/agentscope-ai/QwenPaw/pull/6652) | 修复 #6505：MissionGate 服务端强制 `max_iterations`，防止 LLM 耗尽账户余额 |
| **整合稳健性** | [#6884](https://github.com/agentscope-ai/QwenPaw/pull/6884) | Auto-Dream 集成对 LLM 畸形结构化输出做容错 |
| **依赖管理** | [#6387](https://github.com/agentscope-ai/QwenPaw/pull/6387) | 频道可选依赖按需安装，配置注册保持兼容 |
| **发布管理** | [#6989](https://github.com/agentscope-ai/QwenPaw/pull/6989) | v2.1.0 发布说明更新 |

整体看，项目在 **后端可靠性、发布工程、配置系统** 上明显收紧，但 v2.1.0 同期暴露的回归问题表明新主版本上线前的端到端测试覆盖仍需加强。

---

## 四、社区热点

### 🔥 评论数 TOP 5 Issues

1. **#6921**（6 条评论）—— 多步骤任务中模型输出"下一步规划"后无提示停止，需用户手动 "继续"  
   链接：https://github.com/agentscope-ai/QwenPaw/issues/6921  
   *诉求：模型"说而不做"是 Agent 类产品的核心 UX 痛点，影响任务完成率*

2. **#6973**（5 条评论）—— QwenPaw Creator 是否支持阿里云百炼 Token Plan  
   链接：https://github.com/agentscope-ai/QwenPaw/issues/6973  
   *诉求：国内用户希望使用本地化模型供应商套餐*

3. **#6811**（5 条评论，已关闭）—— OpenAI Responses 续接摘要忽略 `disable_thinking`、60 秒取消被误报为畸形输出  
   链接：https://github.com/agentscope-ai/QwenPaw/issues/6811  
   *已修复关闭*

4. **#5856**（4 条评论）—— 上下文压缩时 `tool_call` 结构丢失，导致 400 错误  
   链接：https://github.com/agentscope-ai/QwenPaw/issues/5856  
   *诉求：长期开放，#5856 反映 Scroll/压缩流水线对工具调用结构化数据的破坏问题*

5. **#6047**（4 条评论，已关闭）—— 升级后新建聊天复用旧会话  
   链接：https://github.com/agentscope-ai/QwenPaw/issues/6047  
   *已修复关闭*

### 🔥 社区洞察

- **国内用户偏好凸显**：#6973、#6970、#6882 等多议题是中文用户对国内生态（阿里云百炼、CopilotKit 集成）的需求
- **多 Agent/多会话隔离成为新焦点**：#7001（Matrix 房间内按发送人隔离 session/memory）、#6976（session-scoped multi project directories）、#7011（并发会话状态串档）

---

## 五、Bug 与稳定性

### 🔴 高严重度（建议 v2.1.0 用户重点关注）

| Issue | 描述 | 状态 | 修复 PR |
|-------|------|------|---------|
| [#7011](https://github.com/agentscope-ai/QwenPaw/issues/7011) | 2.1.0 回归：并发会话 Agent 状态写入错误文件（macOS + 飞书） | OPEN | 待修复 |
| [#6992](https://github.com/agentscope-ai/QwenPaw/issues/6992) | 端口 0.0.0.0:8088 公网暴露 + 插件安装 API 无鉴权 + 任意命令执行（已被标 invalid，但安全关切需关注） | CLOSED-invalid | 已存历史讨论 |
| [#6916](https://github.com/agentscope-ai/QwenPaw/issues/6916) | 插件可静默创建 cron 任务并向会话注入消息 | CLOSED | 待复审权限治理 |
| [#7007](https://github.com/agentscope-ai/QwenPaw/issues/7007) | Windows Desktop TUI 启动失败：打包后 `qwenpaw.exe` 拒绝 `-m qwenpaw acp` | OPEN | 待修复 |
| [#7008](https://github.com/agentscope-ai/QwenPaw/issues/7008) | Anthropic 端误审核导致长历史会话中断（1026） | OPEN | 待修复 |

### 🟡 中严重度

| Issue | 描述 | 状态 |
|-------|------|------|
| [#6921](https://github.com/agentscope-ai/QwenPaw/issues/6921) | 多步骤任务无提示停止 | OPEN |
| [#6768](https://github.com/agentscope-ai/QwenPaw/issues/6768) | 多步任务完成 Agent 进入死循环，会话卡死数小时 | CLOSED |
| [#6955](https://github.com/agentscope-ai/QwenPaw/issues/6955) | v2.0.1 概率性启动崩溃（asyncio WindowsEvents 异常） | OPEN |
| [#6951](https://github.com/agentscope-ai/QwenPaw/issues/6951) | Scroll 压缩后 UI 仅显示 eviction index | OPEN |
| [#5856](https://github.com/agentscope-ai/QwenPaw/issues/5856) | 上下文压缩 tool_call 结构丢失 | OPEN（长期） |
| [#7005](https://github.com/agentscope-ai/QwenPaw/issues/7005) | 启用 Shabox 导致 UV Run 失败（cache 目录被沙箱拦截） | OPEN |

### 🟢 低严重度但用户体验受损

- [#7006](https://github.com/agentscope-ai/QwenPaw/issues/7006) 语言下拉与设置齿轮语言列表不一致
- [#6585](https://github.com/agentscope-ai/QwenPaw/issues/6585) 字符计数动态闪烁影响视觉（已关闭）
- [#6883](https://github.com/agentscope-ai/QwenPaw/issues/6883) 日记页面子文件夹笔记被错误归类（已关闭）
- [#6100](https://github.com/agentscope-ai/QwenPaw/issues/6100) 升级丢失 workspace（已关闭）
- [#6457](https://github.com/agentscope-ai/QwenPaw/issues/6457) 任务模式历史对话异常（已关闭）

> 已有对应修复 PR 的：#7011（无）、#7007（无）、#7008（无）、#6955（无）、#5856（无）、#7005（无）—— **v2.1.0 多个高优先级 Bug 仍无在途修复**，需维护者关注。

---

## 六、功能请求与路线图信号

### 高信号需求（高评论 + 已有 PR 跟进）

- **#6970** 会话级 API Key + 无侧边栏聊天嵌入页 + Session 列表高级筛选  
  链接：https://github.com/agentscope-ai/QwenPaw/issues/6970  
  *企业嵌入场景信号明显*

- **#7013** Chat 工具面板（含 Web 服务预览、交互式终端）  
  链接：https://github.com/agentscope-ai/QwenPaw/issues/7013  
  *对应 PR #7013 已有雏形*

- **#7012** UI 上支持会话级模型选择（不再依赖全局切换）  
  链接：https://github.com/agentscope-ai/QwenPaw/issues/7012  
  *与 #6302（unify provider discovery）联动*

- **#7003** 第三方 Memory 方案 ViBo（97.5% token 节省）  
  链接：https://github.com/agentscope-ai/QwenPaw/issues/7003  
  *商业合作潜力待评估*

### 已有 PR 对应的潜在 v2.1.x / v2.2 路线图

| PR | 功能 | 状态 |
|----|------|------|
| [#6960](https://github.com/agentscope-ai/QwenPaw/pull/6960) | Pawport：跨 Agent 导入流（Codex/Qoder → QwenPaw） | OPEN |
| [#7004](https://github.com/agentscope-ai/QwenPaw/pull/7004) | Console 持久化 spawn 父子会话链路 | OPEN |
| [#7001](https://github.com/agentscope-ai/QwenPaw/pull/7001) | Matrix 频道按发送人隔离 session/memory | OPEN |
| [#6976](https://github.com/agentscope-ai/QwenPaw/pull/6976) | Session-scoped 多项目目录 | OPEN |
| [#6998](https://github.com/agentscope-ai/QwenPaw/pull/6998) | 修复流未消费导致的信号量泄漏（修 #5411） | OPEN |
| [#6984](https://github.com/agentscope-ai/QwenPaw/pull/6984) | ReMe 记忆运行时状态仪表盘 | OPEN |
| [#6990](https://github.com/agentscope-ai/QwenPaw/pull/6990) | 系统文件 / 技能文件 cache 优化 | OPEN |
| [#6302](https://github.com/agentscope-ai/QwenPaw/pull/6302) | 提供商发现 + 模型元数据 + 路由统一 | OPEN（长期大型 PR） |

---

## 七、用户反馈摘要

### 用户痛点聚焦

1. **数据丢失与迁移焦虑**  
   #5856、#6047、#6100、#6951 共同反映：用户对"上下文压缩后不可见"、"升级后旧会话被复用或丢失"高度敏感。**Agent 类产品的"不可见性"是头号信任问题**。

2. **多任务/多会话心智模型不匹配**  
   #7011、#7001、#6976、#6970 集中爆发：用户期待"标签页 / 项目 / 会话"三层结构，但当前会话级状态隔离不彻底。

3. **沙箱 / 安全策略误伤**  
   #7005（Shabox 拦截 UV）、#6847（被杀软杀进程）、#6916（插件权限）、#6992（端口暴露）显示 **安全策略与开发者工作流存在摩擦**，需要更精细的权限文档和默认安全基线。

4. **模型"说而不做"是 Agent 体验天花板**  
   #6921 获得 6 条评论，反映用户对"Agenti 自主性"的核心期待——一旦规划完必须执行而非等待手动继续。

5. **本地化与生态接入**  
   #6973（阿里云百炼）、#6882（CopilotKit）、#6847（与 WorkBuddy 对比）表明 **国内用户对国产模型生态与"无杀软误报" 的诉求**。

### 满意面

- 用户对 QwenPaw 整体评价正面（即便在报 bug 时也常附"非常不错的项目"），#6585 即是典型  
- v2.1.0 OS Shell 桌面体验被多次称赞

---

## 八、待处理积压（提醒维护者关注）

### 🔴 长期未响应重要 Issue（>30 天）

| Issue | 描述 | 初始时间 | 状态 |
|-------|------|----------|------|
| [#5856](https://github.com/agentscope-ai/QwenPaw/issues/5856) | 上下文压缩 tool_call 丢失 | 2026-07-08 | 37 天 OPEN |
| [#6302](https://github.com/agentscope-ai/QwenPaw/pull/6302) | 统一 provider discovery 大型 PR | 2026-07-21 | 24 天 OPEN |
| [#6670-*（推断）** | 多个 v2.0 升级过渡问题 | 7 月下旬 | 待维护者盘点 |

### 🟡 重要 PR 待 review

- **#6302**（24 天未合并）提供商标 discovery + 模型路由统一，体量大、影响面广，需 reviewer 投入
- **#6715** OneBot 频道入站媒体本地化 #6715 长期待审
- **#7004**、#7001（first-time-contributor）建议快速识别 first-time contributor 友好度

### ⚠️ v2.1.0 回归问题未进入修复流水线

以下 v2.1.0 紧急问题 **目前无对应修复 PR**，建议维护者优先响应：

- #7011 并发会话状态串档
- #7007 Windows Desktop TUI 启动失败
- #7008 Anthropic 误审核导致长历史中断
- #6955 v2.0.1 启动崩溃回归
- #7005 Shabox/UV 冲突

---

## 📊 项目健康度打分

| 维度 | 评分 | 说明 |
|------|------|------|
| **活跃度** | ⭐⭐⭐⭐⭐ | 24h 内 46 Issues + 50 PRs，节奏健康 |
| **版本节奏** | ⭐⭐⭐⭐ | v2.1.0 + v2.1.0-beta.5 同步发布，节奏紧凑 |
| **新主版本质量** | ⭐⭐⭐ | 多个 v2.1.0 回归，安全相关 issue 集中 |
| **社区响应** | ⭐⭐⭐⭐ | 中文社区活跃，first-time contributor 持续涌现 |
| **积压清理** | ⭐⭐⭐ | 仍有 30+ 天长期 open 重要议题 |

---

*日报生成时间：2026-08-14 · 数据源：github.com/agentscope-ai/QwenPaw*

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/NousResearch/hermes-agent">NousResearch/hermes-agent</a></summary>

<think>
The user wants me to generate a daily report for the Hermes Agent project based on the GitHub data provided. Let me analyze the data carefully and create a comprehensive report in Chinese.

Let me break down the key information:

1. **Data Overview**:
   - 50 Issues updated in last 24h (47 new/active, 3 closed)
   - 50 PRs updated in last 24h (44 pending, 6 merged/closed)
   - 1 new release: v0.20.1 (v2026.8.13) - patch release rolling up ~656 PRs

2. **Release**: v0.20.1 is a patch release rolling up ~656 PRs since v0.20.0

3. **Most active issues** (by comment count):
   - #66616 (25 comments) - Skills index stale/degraded
   - #83683 (20 comments) - Desktop restart reaps gateway (WeChat/QQ silent) - regression
   - #84834 (16 comments) - Webhook Revolution meta-issue
   - #69592 (12 comments) - /sessions and /models overlays invisible in TUI
   - #83390 (9 comments) - DeepSeek title_generation fails
   - #4438 (8 comments) - Rich Spreadsheet Skill feature
   - #67798 (6 comments) - Lifecycle hooks shared runtime contract
   - #72064 (6 comments) - oneshot --ignore-rules silently ignored
   - #52339 (6 comments) - Terminal update rebuilds Desktop but leaves Hermes.app stale
   - #35966 (5 comments, 4 thumbs up) - Native desktop/mobile client app
   - #83427 (5 comments) - browser_exec pydantic_core ModuleNotFoundError
   - #71023 (4 comments, 1 thumb up) - Live upgrade zero-downtime
   - #80117 (4 comments) - SQLite POSIX lock conflict
   - #83846 (4 comments) - Windows ZIP fallback deletes desktop app

4. **Key themes from issues**:
   - **Gateway reap/orphan killing**: Multiple Windows and macOS issues around desktop app killing the live gateway
   - **Desktop app problems**: Various UI/state issues
   - **P0/P1 bugs**: Critical messaging delivery issues
   - **Refactor campaigns**: Webhook Revolution meta-issue
   
5. **Notable PRs**:
   - #85767 - Bundled Box skill
   - #85769 - Normalize provider cache/usage wire shape
   - #82891 - Pin kittentts wheel sha256
   - #85730 - Block per-profile gateways when multiplex_profiles
   - #77773 - Update @playwright/test
   - #85750 - Per-profile remote ws routing
   - #85768 - Explain per-turn search caps
   - #85766 - Stop Sessions list bounce
   - #67934 - Native Ollama tags
   - #70667 - Kanban delegated-child refusals test
   - #35601 - Prevent credential leaks in profile exports
   - #85761 - Feishu stale topics fallback
   - #85762 - Mask array-style query credentials
   - #85763 - Clear tool-definitions cache after .env reload
   - #85765 - Discord thread routing for progress edits
   - #85764 - Recall /new-reset sessions in current lineage
   - #51296 - LM Studio multimodal tool content recovery
   - #81366 - Drop shell=True editor fallback

6. **P0/P1 issues** (critical):
   - #83683 P1 - Desktop restart reaps live gateway
   - #69592 P1 - TUI overlays invisible
   - #85344 P1 - macOS desktop reaps launchd-supervised gateway
   - #85368 P1 - gateway process repeatedly killed
   - #84855 P1 - Windows permission denied to kill gateway
   - #85044 P1 - Windows desktop reaps standalone gateway
   - #81639 P0 (closed) - _canonicalize_api_tool_calls mutates history

7. **Closed issues**:
   - #81639 - P0 (duplicate, closed)
   - #85707 - fix(cache) typed tool-schema boundary

8. **Closed PRs**:
   - #85760 - invalid, opened in error

Let me structure the report now.

I need to be objective, data-driven, and use professional Chinese. The report date is 2026-08-14.

Let me calculate some statistics:
- 50/50 issues (50 active, 3 closed in 24h)
- 50/50 PRs (44 pending, 6 merged/closed)
- 1 new release
- Most issues are around Desktop app and gateway stability
- Multiple P0/P1 issues indicate significant stability problems

Let me write the report now.
</think>
# Hermes Agent 项目日报

**报告日期**：2026-08-14
**数据窗口**：过去 24 小时
**项目健康度**：🟠 活跃但承压（高活跃度伴随多条 P0/P1 稳定性问题待解）

---

## 1. 今日速览

Hermes Agent 过去 24 小时保持极高活跃度：50 条 Issue 更新、50 条 PR 更新，并发布 v0.20.1 稳定版（回滚合并约 656 个 PR）。当前关注点高度集中在 **Desktop App 与 Gateway 进程的协作稳定性** 上，至少 5 条 P1 Issue 描述了不同平台下 desktop 后端启动杀掉已运行 gateway 但不再拉起、导致 WeChat/QQ/Telegram 静默的回归。TUI 会话/模型面板不可见、P0 级别的 `_canonicalize_api_tool_calls` 历史污染（已关闭为重复）等也是社区讨论焦点。整体看，项目在功能广度（Webhook 革命、Box Skill、profile 路由）上持续推进，但在多平台部署路径上暴露出明显的回归面。

---

## 2. 版本发布

**v2026.8.13 / v0.20.1**（2026-08-13）已发布
🔗 https://github.com/NousResearch/hermes-agent/releases/tag/v2026.8.13

- **类型**：Patch（语义化补丁版）
- **内容说明**：将自 v0.20.0 以来的约 656 个 PR 打包为稳定 tag，主要面向 Docker 镜像、托管部署以及从 latest tag 拉取的下游消费者。
- **破坏性变更**：未明确列出。
- **迁移注意事项**：
  - 仍在 v0.20.0 之前版本的下游，建议直接拉取 v2026.8.13 以获得累计修复。
  - 注意：v0.20.0 自身在 Windows/macOS 桌面端引入了"重新拉起后杀掉 gateway 而不重启"的回归（见 #83683、#85344、#85044、#84855、#85368），升级前请关注后续 patch 是否回滚该路径。
  - 安装 KittenTTS 的用户需关注 #82891（pip wheel sha256 钉死）相关变更是否已合入。

---

## 3. 项目进展

过去 24 小时共有 6 条 PR 被合并/关闭，其中值得关注的有：

| PR | 说明 | 价值 |
|---|---|---|
| #85707 [CLOSED] | `fix(cache): establish typed tool-schema boundary before planned_tools[-1]` | 修复原生工具缓存路径上未经归一化就访问 `planned_tools[-1]` 的潜在崩溃路径 |
| #85760 [CLOSED] | author 自撤（误开） | 无实质内容 |

其余 44 条 PR 仍在待合并，覆盖以下方向（无官方合并记录，仅按主题归类）：

- **多 profile / 多 gateway 路由正确性**：[#85730](https://github.com/NousResearch/hermes-agent/pull/85730) 在 `multiplex_profiles=true` 时硬性禁止 per-profile gateway；[#85750](https://github.com/NousResearch/hermes-agent/pull/85750) 修复 Desktop profile 远程覆盖时 chat WS 仍指向本地主后端。
- **Provider 数据形状归一化**：[#85769](https://github.com/NousResearch/hermes-agent/pull/85769)（5-PR 整合）让 `normalize_usage` 同时支持 dict 与 SDK 对象，修复 cache 写读/推理 token 被静默置 0 的问题。
- **凭据与 Secret 防护**：[#35601](https://github.com/NousResearch/hermes-agent/pull/35601) 收紧 profile 导出的安全边界；[#85762](https://github.com/NousResearch/hermes-agent/pull/85762) 遮蔽 PHP/Rails 风格的 `access_token[]=...`；[#82891](https://github.com/NousResearch/hermes-agent/pull/82891) 钉死 kittentts 第三方 wheel 的 sha256；[#81366](https://github.com/NousResearch/hermes-agent/pull/81366) 移除 `/prompt` 中 `shell=True` 编辑器回退。
- **会话/搜索/工具链一致性**：[#85764](https://github.com/NousResearch/hermes-agent/pull/85764) 让 `/new-reset` 后 `session_search` 能召回上一会话；[#85763](https://github.com/NousResearch/hermes-agent/pull/85763) 修 cron 在 `.env` 重新加载后未清空 tool-definitions 缓存；[#51296](https://github.com/NousResearch/hermes-agent/pull/51296) 为 LM Studio/llama.cpp 的多模态工具内容错误增加恢复路径。
- **平台适配**：[#85761](https://github.com/NousResearch/hermes-agent/pull/85761) 修 Feishu 在话题陈旧时回落到父聊天；[#85765](https://github.com/NousResearch/hermes-agent/pull/85765) 让 Discord 进度编辑保留 thread 路由；[#77773](https://github.com/NousResearch/hermes-agent/pull/77773) 升 `@playwright/test` 修复安装卡死。
- **UX 微修**：[#85766](https://github.com/NousResearch/hermes-agent/pull/85766) 修桌面 Sessions 列表在日期分隔处抖动；[#85768](https://github.com/NousResearch/hermes-agent/pull/85768) 修每轮搜索上限提示的措辞误导。

**整体推进度**：从 24h 活动面看，社区正同时推进"安全/凭据边界"、"多 profile 路由正确性"、"桌面端体验"三条主线。但"6 关闭 / 44 待合并"的高悬空比说明 PR 评审吞吐仍是当前瓶颈。

---

## 4. 社区热点

按 24h 评论数排序的讨论焦点：

1. **[#66616](https://github.com/NousResearch/hermes-agent/issues/66616) — 25 条评论** · Skills 索引陈旧（29.8h 超过 26h 阈值） · 自动化探针报 `degraded` · 涉及 `skills-index.yml` 与 `deploy-site.yml` 的定时构建路径。
2. **[#83683](https://github.com/NousResearch/hermes-agent/issues/83683) — 20 条评论** · Desktop 重启 reap 网关后不再拉起，WeChat/QQ 静默 · 明确标注为 **回归**。
3. **[#84834](https://github.com/NousResearch/hermes-agent/issues/84834) — 16 条评论** · Webhook Revolution 元议题（5×2×3 修复战役） · 治理性大题，影响 webhook 全链路。
4. **[#69592](https://github.com/NousResearch/hermes-agent/issues/69592) — 12 条评论** · `/sessions`、`/models`、`/reload` 在 ambient widget 模式下被遮挡不可见 · TUI 核心工作流被切断。
5. **[#83390](https://github.com/NousResearch/hermes-agent/issues/83390) — 9 条评论 👍2** · DeepSeek 上 `title_generation` 返回 400（`response_format` 不可用）。
6. **[#4438](https://github.com/NousResearch/hermes-agent/issues/4438) — 8 条评论** · 长期呼声：xlsx/csv 富表格 Skill。
7. **[#67798](https://github.com/NousResearch/hermes-agent/issues/67798) — 6 条评论** · 将 lifecycle hooks 提升为跨所有执行面（gateway/CLI/TUI/cron/plugins/Desktop）的运行时共享契约。
8. **[#72064](https://github.com/NousResearch/hermes-agent/issues/72064) — 6 条评论** · `oneshot -z` 无法跳过内置 memory 注入，`--ignore-rules` 被静默忽略。
9. **[#52339](https://github.com/NousResearch/hermes-agent/issues/52339) — 6 条评论** · 终端 `hermes update` 重建 Desktop 但 `/Applications/Hermes.app` 残留，造成 split-brain。
10. **[#35966](https://github.com/NousResearch/hermes-agent/issues/35966) — 5 条评论 👍4** · 原生桌面/移动客户端应用 · 👍 数据说明社区对"摆脱第三方 IM 中转"有较高期待。

**诉求归纳**：当前社区呼声集中在三件事——**Desktop ↔ Gateway 生命周期不一致**（回归恐慌）、**官方 TUI/Skills 内容质量与新鲜度**（#66616 自动化报警已经触发）、以及 **#35966 反映的"我们想要自己的原生客户端而非依赖 WeChat/QQ/Telegram"**。

---

## 5. Bug 与稳定性

按严重程度排序（24h 报告/更新）：

| 严重度 | Issue | 标题 | 是否有对应修复 PR | 状态 |
|---|---|---|---|---|
| **P0** | [#81639](https://github.com/NousResearch/hermes-agent/issues/81639) | `_canonicalize_api_tool_calls` 写穿持久化历史，导致会话陷入"仅推理" | 未指明 | **CLOSED**（重复） |
| **P1** | [#83683](https://github.com/NousResearch/hermes-agent/issues/83683) | Desktop 重启 reap 网关后不重启（Windows，WeChat/QQ 静默） | 暂未见专门 PR；[#85730](https://github.com/NousResearch/hermes-agent/pull/85730) 仅处理 multiplex_profiles 分支 | OPEN |
| **P1** | [#69592](https://github.com/NousResearch/hermes-agent/issues/69592) | TUI `/sessions` `/models` 在 ambient widget 下不可见 | 暂未见 | OPEN |
| **P1** | [#85344](https://github.com/NousResearch/hermes-agent/issues/85344) | `_reap_unsupervised_gateway_orphans` 杀掉 macOS launchd 监管的 gateway | 暂未见 | OPEN |
| **P1** | [#85368](https://github.com/NousResearch/hermes-agent/issues/85368) | gateway 进程被反复 SIGKILL（`suspected_oom=False`） | 暂未见 | OPEN |
| **P1** | [#84855](https://github.com/NousResearch/hermes-agent/issues/84855) | Windows 下 desktop 启动 reap gateway 时报权限拒绝 | 暂未见（重复） | OPEN |
| **P1** | [#85044](https://github.com/NousResearch/hermes-agent/issues/85044) | Windows Scheduled Task gateway 被 desktop serve 杀掉 | 暂未见（重复） | OPEN |
| **P2** | [#72064](https://github.com/NousResearch/hermes-agent/issues/72064) | `oneshot -z --ignore-rules` 静默失效 | 暂未见 | OPEN |
| **P2** | [#52339](https://github.com/NousResearch/hermes-agent/issues/52339) | Terminal update 留下 stale `/Applications/Hermes.app` | 暂未见 | OPEN |
| **P2** | [#83427](https://github.com/NousResearch/hermes-agent/issues/83427) | `browser_exec` 加载 Hermes venv 内的 pydantic 失败 | 暂未见 | OPEN |
| **P2** | [#80117](https://github.com/NousResearch/hermes-agent/issues/80117) | SQLite POSIX 锁冲突 → gateway `APIConnectionError` | 暂未见 | OPEN（需复现） |
| **P2** | [#83846](https://github.com/NousResearch/hermes-agent/issues/83846) | Windows ZIP 回退删了 desktop app，后续报 Already up to date | 暂未见 | OPEN |
| **P2** | [#85758](https://github.com/NousResearch/hermes-agent/issues/85758) | `_find_git_root` PermissionError 在 gateway 模式下崩 system prompt 构建 | 暂未见 | OPEN（重复） |
| **P2** | [#85406](https://github.com/NousResearch/hermes-agent/issues/85406) | Windows host + Docker 终端下 `vision_analyze` 因 `Path()` 把 `/` 改成 `\` 失败 | 暂未见 | OPEN |
| **P2** | [#85104](https://github.com/NousResearch/hermes-agent/issues/85104) | Desktop 同一条助手消息渲染两次（前端层问题） | 暂未见 | OPEN |
| **P3** | [#83390](https://github.com/NousResearch/hermes-agent/issues/83390) | DeepSeek `title_generation` 400 | 暂未见 | OPEN |
| **P3** | [#84058](https://github.com/NousResearch/hermes-agent/issues/84058) | Desktop 工具流式输出时 composer 焦点丢失 | 暂未见 | OPEN |
| **P3** | [#85745](https://github.com/NousResearch/hermes-agent/issues/85745) | Desktop profile 切换显示错的会话列表 | [#85750](https://github.com/NousResearch/hermes-agent/pull/85750) 接近覆盖 | OPEN |

**稳定性总结**：5 条 P1 在 24h 内集中出现，且**都集中于"Desktop 启动时 reap gateway"这一同一根因路径**（commit `bc1223840` 引入），但目前未见直接修复 PR 进入合并通道。P2 一组与"v0.20.0 升级 + 多平台打包/路径处理"耦合，呈现典型的版本升级回归面。

---

## 6. 功能请求与路线图信号

| Issue | 标题 | 现状 | 进入下一版本的概率 |
|---|---|---|---|
| [#35966](https://github.com/NousResearch/hermes-agent/issues/35966) | 原生桌面/移动客户端（脱离 IM 中转） | 👍4，无明确 PR | 🟡 中（社区意愿高，但工程量大） |
| [#4438](https://github.com/NousResearch/hermes-agent/issues/4438) | xlsx/csv 富表格 Skill | 长期

</details>

<details>
<summary><strong>OpenHuman</strong> — <a href="https://github.com/tinyhumansai/openhuman">tinyhumansai/openhuman</a></summary>

<think>The user wants me to generate a daily project report for OpenHuman based on GitHub data. Let me analyze the data carefully and produce a well-structured report in Chinese.

Let me organize the information:

**Issues Overview:**
- 17 total (9 open/active, 8 closed)
- Key themes:
  - Connector memory sync issues after TinyCortex migration (#5473)
  - Bulk session ingest timeout (#5509)
  - DIGEST_MAX_OUTPUT_TOKENS truncation (#5510, related to #5509)
  - Notion memory sync fetch_type missing (#5506)
  - Mascot SVG XSS vulnerability (#5530)
  - Cron creation policy issues (#5499, #5458, #5508)
  - LLM router degradation (#5503)
  - Notion content misreading (#5500)
  - Managed embeddings (#5501)
  - Discord channel restart loop (#5350)
  - Voice chat replacement with ElevenLabs (#5399, closed)
  - tiny.place visibility (#5424)
  - In-app web apps visibility (#5423)
  - ViBo Cloud hosted memory proposal (#5538)
  - Rust binary bloat (#5539)

**PR Overview:**
- 28 total (4 open, 24 closed)
- Key PRs:
  - #5542 - Stabilize attribution and archivist segments (open, P1)
  - #5541 - Load TinyJuice outside dependency graph (open, P2)
  - #5540 - Prune unused dependencies (closed, P2)
  - #5537 - Advance tinyflows (closed, P3)
  - #5533 - Move wallet primitives to tinywallet (open, P2)
  - #5536 - Raise voice turn ceiling 90s→180s (closed)
  - #5534 - Move artifact-offload into TinyAgents (closed, P2)
  - #5535 - Build OpenHuman agent cockpit TUI (closed)
  - #5532 - Add model and provider overrides CLI (closed, P2)
  - #5489 - Realtime ElevenLabs voice agent (closed, P2)
  - #5531 - Size ingest RPC budget (closed, P2)
  - #5527 - Scope turn origin for cron tools (closed, P3)
  - #5514 - Route WebChat approval via origin fallback (closed, P2)
  - #5496 - docs for mapComposioCategory (closed)
  - #5442 - Rebuild app shell (closed, P1)
  - #5439 - Show tiny.place only to identity users (closed, P3)
  - #5493 - Refuse git under untrusted config (closed)
  - #5517 - Unblock Rust Feature-Gate Smoke (closed, P3)
  - #5518 - Regenerate tauri lockfile (closed, P1)
  - #5516 - Regenerate Cargo.lock (closed, P3)

Now let me analyze and write the report.

Key themes emerging:
1. TinyCortex migration fallout - multiple issues from the migration (memory sync, ingest timeouts, token limits)
2. Cron authorization bug - multiple issues and fixes converging on the same root cause
3. CI/Infrastructure cleanup - several PRs unblocking CI lanes
4. Module extraction/refactoring - moving code to tinywallet, tinyflows, TinyAgents
5. Voice chat - ElevenLabs integration
6. UI shell improvements - app shell rebuild, tiny.place/web apps visibility

I need to highlight which Issues have matching fix PRs:
- #5473 (connector memory sync) - no clear fix yet, needs attention
- #5509 (bulk session timeout) - fix in #5531 (closed, merged)
- #5510 (DIGEST_MAX_OUTPUT_TOKENS) - related to #5509, no clear fix PR visible
- #5506 (Notion fetch_type) - no clear fix yet
- #5530 (SVG XSS) - closed but no specific PR referenced
- #5499 (cron_add origin label) - fix in #5527 (closed/merged)
- #5458 (cron creation) - same as above, fix in #5527
- #5508 (agent cron inconsistent) - related to #5514 (closed/merged)
- #5501 (managed embeddings) - closed, may have been fixed
- #5350 (Discord restart loop) - closed
- #5399 (Voice chat ElevenLabs) - fix in #5489 (closed/merged)
- #5424 (tiny.place) - fix in #5439 (closed/merged)
- #5423 (web apps visibility) - closed
- #5503 (LLM router degradation) - no clear fix
- #5500 (Notion misreading) - no clear fix

Let me write a comprehensive, professional report now.

I'll keep in mind the language requirements: objective, professional, data-driven, highlighting project health.</think>

# OpenHuman 项目动态日报

**报告日期：2026-08-14**
**数据范围：过去 24 小时（基于 2026-08-13 ~ 2026-08-14 的 GitHub 活动）**
**仓库：[tinyhumansai/openhuman](https://github.com/tinyhumansai/openhuman)**

---

## 一、今日速览

OpenHuman 仓库在过去 24 小时保持了高强度的工程节奏：17 条 Issue 流转（9 新开/活跃、8 关闭）、28 条 PR 流转（4 待合并、24 已合并/关闭），整体呈"大规模合入、批量清理"特征。**主线工作集中在三件事**：(1) 修复 TinyCortex 迁移带来的下游回归（记忆同步、批处理 RPC 超时、Token 截断）；(2) 推进各 Tiny 子模块（tinywallet、tinyflows、TinyAgents、TinyJuice）的解耦重构；(3) 修复一批阻塞 CI 的基础设施问题（锁文件漂移、Feature-Gate Smoke 失败），使主分支重新回到"绿"。项目活跃度极高，Issue 关单率 47%，PR 关单率 86%，健康度良好。

---

## 二、版本发布

**今日无新版本发布。** 当前窗口的所有改动仍处于主分支滚动合并阶段，下一次版本节奏待定。

---

## 三、项目进展

今日有大量合并动作集中在"基础设施修复 + 子模块化重构 + 用户可见体验"三条主线，以下按影响力排序：

### 1. 修复主分支长期红 CI（基础设施）
这是过去 24 小时最重要的进展之一——多个 PR 协同将主分支从"每 PR 红"恢复到可合并状态：

- **[#5518](https://github.com/tinyhumansai/openhuman/pull/5518) fix(ci): regenerate stale tauri lockfile + install memory seam in migration tests**（p1）—— 修复了阻断 #5515、#5514、#5513、#5489 等多个 PR 的 `Rust Quality (fmt, clippy)` 与 `Rust Feature-Gate Smoke` 两类失败。
- **[#5516](https://github.com/tinyhumansai/openhuman/pull/5516) Regenerate app/src-tauri/Cargo.lock to match the manifest**（p3）—— 单独修复 lockfile 漂移。
- **[#5517](https://github.com/tinyhumansai/openhuman/pull/5517) Unblock the Rust Feature-Gate Smoke lane (embedding host seam + tinymemory-core kernel-floor)**（p3）—— 解决 `--no-default-features` 下两个 migration 测试的 panic。

### 2. TinyCortex 迁移相关的关键修复
- **[#5531](https://github.com/tinyhumansai/openhuman/pull/5531) fix(memory/sources): size ingest RPC budget for multi-window sessions**（p2）—— 直接修复 [#5509](https://github.com/tinyhumansai/openhuman/issues/5509) 报告的 `rpc.rs` 30s/会话预算问题。窗口分割后单会话多次 LLM 调用导致批量摄取超时。
- **[#5527](https://github.com/tinyhumansai/openhuman/pull/5527) fix(hosted/orchestration): scope turn origin for local-agent spawn so cron tools aren't denied**（p3）—— 解决 `cron_add` 因 `AGENT_TURN_ORIGIN` 不跨 `tokio::spawn` 而被打 policy 拒绝的根因，覆盖 [#5499](https://github.com/tinyhumansai/openhuman/issues/5499) 与 [#5458](https://github.com/tinyhumansai/openhuman/issues/5458) 报告的现象。

### 3. 子模块化与依赖瘦身
- **[#5540](https://github.com/tinyhumansai/openhuman/pull/5540) chore(rust): prune unused dependencies and repair TinyFlows import**（p2）—— 移除核心、桌面壳与实验性移动端未使用直依赖，三份 lockfile 同步更新；呼应 [#5539](https://github.com/tinyhumansai/openhuman/issues/5539) 的二进制体积审计。
- **[#5537](https://github.com/tinyhumansai/openhuman/pull/5537) Advance tinyflows to the inherited host stack**（p3）—— `vendor/tinyflows` 升级到 `c242184`，吸纳 Medulla workflow 栈的 host-agnostic 半。
- **[#5533](https://github.com/tinyhumansai/openhuman/pull/5533) refactor(web3): move wallet primitives and the Tron verifier into tinywallet (-5,520 lines)**（p2，仍 OPEN）—— 回收 `3ee5a3cad` 提交中错误内联的 ~3,700 行代码。
- **[#5541](https://github.com/tinyhumansai/openhuman/pull/5541) refactor(modules): load TinyJuice outside dependency graph**（OPEN，p2）—— 把 TinyJuice 作为独立 checksum-pin 的 TinyBus 模块发布。

### 4. 用户可见体验
- **[#5489](https://github.com/tinyhumansai/openhuman/pull/5489) feat(voice): realtime ElevenLabs voice agent alongside classic path**（p2）—— 落实 [#5399](https://github.com/tinyhumansai/openhuman/issues/5399) 的语音聊天升级请求，新增 always-on "Start Voice Chat"。
- **[#5536](https://github.com/tinyhumansai/openhuman/pull/5536) fix(voice): raise the background turn ceiling from 90s to 180s** —— #5489 的跟进 PR，修复实测中真实回复被 90s 截断的问题。
- **[#5442](https://github.com/tinyhumansai/openhuman/pull/5442) feat(shell): rebuild the app shell as chrome + an inset content card**（p1）—— 主 UI 改造：去掉 1px 缝与六条发丝分隔线，动画背景首次获得合法展示面。
- **[#5535](https://github.com/tinyhumansai/openhuman/pull/5535) feat(tui): build OpenHuman agent cockpit** —— 将四标签 TUI 改造为 Chat-first 驾驶舱，含持久会话恢复、Unicode 安全多行输入、slash 命令、模型覆盖、转向指令等。
- **[#5532](https://github.com/tinyhumansai/openhuman/pull/5532) feat(cli): add model and provider overrides**（p2）—— 为 CLI 添加 `--model`/`--provider` 启动覆盖。
- **[#5534](https://github.com/tinyhumansai/openhuman/pull/5534) refactor(agent): move artifact-offload into TinyAgents, wire tool completion**（p2）—— `docs/specs/plan-agents.md` Phase 5 + Phase 4 适配。

### 5. 安全与可靠性
- **[#5493](https://github.com/tinyhumansai/openhuman/pull/5493) fix(tools): refuse to run git under untrusted workspace repo config** —— 修复 `read_workspace_state` 工具允许 `.git/config` 注入 `core.fsmonitor` 等命令执行的工作树 RCE 类风险。
- **[#5514](https://github.com/tinyhumansai/openhuman/pull/5514) fix(approval): route WebChat approval parks via origin fallback**（p2）—— 修复 chat 内调度 cron 时审批卡片无法送达的问题（呼应 [#5508](https://github.com/tinyhumansai/openhuman/issues/5508)）。

---

## 四、社区热点

按评论数与互动密度排序：

| 排名 | 议题 | 评论 | 👍 | 关注点 |
|---|---|---|---|---|
| 1 | [#5473](https://github.com/tinyhumansai/openhuman/issues/5473) Connector syncs stopped feeding the memory tree after the TinyCortex migration | 2 | 0 | TinyCortex 迁移造成 Gmail/Slack/Notion/GitHub/Linear 全部 connector 静默停止喂入摘要树，p1 |
| 2 | [#5509](https://github.com/tinyhumansai/openhuman/issues/5509) Bulk session ingest timeout — rpc.rs 30s/session + DIGEST_MAX_OUTPUT_TOKENS=4096 drops observations | 2 | 0 | 批处理摄取超时+静默丢观察，p1 |
| 3 | [#5530](https://github.com/tinyhumansai/openhuman/pull/5530) Mascot SVG sanitizer bypass via tab-smuggled javascript: URLs（已关闭） | 1 | 0 | 吉祥物 SVG 清洗可绕过 XSS，p0 |
| 4 | [#5539](https://github.com/tinyhumansai/openhuman/issues/5539) Reduce Rust binary bloat | 1 | 0 | 二进制体积与单态化优化空间 |
| 5 | [#5508](https://github.com/tinyhumansai/openhuman/issues/5508) Agent cron create/update fails inconsistently across cores（已关闭） | 1 | 0 | 跨 core 不一致的 cron 权限问题 |
| 6 | [#5510](https://github.com/tinyhumansai/openhuman/issues/5510) DIGEST_MAX_OUTPUT_TOKENS=4096 truncates digest mid-JSON | 1 | 0 | Token 上限截断→静默软失败，p2 |

**诉求分析**：今日热点高度集中在 **"TinyCortex 迁移副作用"** 与 **"应用层授权/Cron 工具"** 两个主题，反映用户对**持久记忆完整性**与**Agent 可调度能力**的强依赖。前者是数据丢失级（摘要树不再生长），后者是 Agent 工作流不可用级。

---

## 五、Bug 与稳定性

按严重程度排序（已合并/关闭的 fix 在括注中标识）：

| 级别 | 议题 | 状态 | 是否有 fix PR |
|---|---|---|---|
| **P0 安全** | [#5530](https://github.com/tinyhumansai/openhuman/issues/5530) Mascot SVG 清洗器可被 tab-smuggle 绕过 javascript: URL | 已关闭 | 已通过（具体 PR 未在数据中明示） |
| **P1 数据丢失** | [#5473](https://github.com/tinyhumansai/openhuman/issues/5473) 所有 connector 停止喂入摘要树 | OPEN | ❌ 无对应 fix PR |
| **P1 性能/可用性** | [#5509](https://github.com/tinyhumansai/openhuman/issues/5509) 批量 session 摄取超时 + 静默丢观察 | OPEN | ✅ [#5531](https://github.com/tinyhumansai/openhuman/pull/5531) 已合并 |
| **P1 可用性** | [#5506](https://github.com/tinyhumansai/openhuman/issues/5506) Notion 记忆同步因缺 `fetch_type` 失败（ce98837 未修） | OPEN | ❌ 无对应 fix PR |
| **P2 数据丢失** | [#5510](https://github.com/tinyhumansai/openhuman/issues/5510) `DIGEST_MAX_OUTPUT_TOKENS=4096` 截断 JSON 软失败 | OPEN | ❌ 关联 #5509 已部分修复，但 token 上限仍待调 |
| **P2 可用性** | [#5508](https://github.com/tinyhumansai/openhuman/issues/5508) Agent cron 跨 core 不一致 | 已关闭 | ✅ [#5514](https://github.com/tinyhumansai/openhuman/pull/5514) |
| **P2 可用性** | [#5499](https://github.com/tinyhumansai/openhuman/issues/5499) `cron_add` 被 "agent turn has no origin label" 阻断 | 已关闭 | ✅ [#5527](https://github.com/tinyhumansai/openhuman/pull/5527) |
| **P2 可用性** | [#5458](https://github.com/tinyhumansai/openhuman/issues/5458) Cron 创建策略错误（用户报告） | OPEN | ✅ [#5527](https://github.com/tinyhumansai/openhuman/pull/5527) 已合并根治，但 Issue 本身未联动关闭 |
| **P2 可用性** | [#5503](https://github.com/tinyhumansai/openhuman/issues/5503) LLM router 渐进劣化直至全模型失败 | OPEN | ❌ 无对应 fix PR |
| **P2 正确性** | [#5500](https://github.com/tinyhumansai/openhuman/issues/5500) Agent 误读 Notion 页面（杜撰下拉值） | OPEN | ❌ 无对应 fix PR |
| **P3 资源** | [#5539](https://github.com/tinyhumansai/openhuman/issues/5539) Rust 二进制臃肿 | OPEN | ✅ [#5540](https://github.com/tinyhumansai/openhuman/pull/5540) 已部分合并 |
| **P3 进程** | [#5350](https://github.com/tinyhumansai/openhuman/issues/5350) Discord channel 在 Linux 上 100% CPU 重启循环 | 已关闭 | （已修复关闭） |
| **P3 数据丢失** | [#5501](https://github.com/tinyhumansai/openhuman/issues/5501) 托管 embeddings 测试连接通过但下游不跑 | 已关闭 | （已修复关闭） |

**稳定性评估**：今日修复吞吐显著，但仍有 4 个 OPEN 的 P1/P2 Bug 缺少 fix PR，尤其是 **#5473（connector 静默停止写入摘要树）**——一旦用户长时间运行，记忆图谱会与实际数据出现不可逆漂移，应作为最高优先级排查对象。

---

## 六、功能请求与路线图信号

今日出现两条具有路线图意义的提案/需求：

1. **[#5538](https://github.com/tinyhumansai/openhuman/issues/5538) [Proposal] Hosted memory for OpenHuman users — 97.5% fewer tokens (ViBo Cloud API)**
   - 由第三方供应商

</details>

---
*本日报由 [Big Model Radar](https://github.com/96loveslife/big_model_radar) 自动生成。*
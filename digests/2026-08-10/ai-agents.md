# OpenClaw 生态日报 2026-08-10

> Issues: 500 | PRs: 500 | 覆盖项目: 8 个 | 生成时间: 2026-08-10 02:10 UTC

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

<think>Let me analyze the GitHub data for OpenClaw from 2026-08-10 and generate a comprehensive daily report. Let me organize the data:

**Overall Activity (Past 24 Hours):**
- Issues: 500 updates (429 new/active, 71 closed)
- PRs: 500 updates (336 pending merge, 164 merged/closed)
- New Releases: 0

**Key Issues (top by comments):**
1. #116277 - DeepSeek v4 Flash silent reply failure (CLOSED, 196 comments)
2. #22438 - Tiered bootstrap file loading (19 comments)
3. #121058 - Silent reply failures still recurring after #116277 closed (19 comments)
4. #91009 - Codex PreToolUse native hook relay CPU bound (18 comments)
5. #45740 - gh-issues skill security issue (16 comments)
6. #48003 - Steer mode doesn't inject messages mid-turn (16 comments)
7. #10659 - Masked Secrets feature request (15 comments)
8. #57901 - Safeguard compaction ignores compaction.model (14 comments)
9. #69208 - Umbrella: duplicate transcript/replay/context assembly (13 comments)
10. #53628 - XDG_CONFIG_HOME not processed (13 comments)

**Top PRs:**
1. #121308 - refactor(channels): flatten channel-turn dispatch naming
2. #121278 - fix(agents): scope quota failures to auth profiles
3. #121074 - fix(ollama): expose and send max thinking
4. #120496 - fix(compaction): allow Claude CLI sessions to compact
5. #118359 - fix(auto-reply): retire queued cancellation ownership
6. #120864 - refactor(slack): detect Enterprise Grid installs
7. #121346 - preserve GPT-5 personality through doctor migration
8. #121345 - refactor: remove dead branches and test-only helpers

Now let me write the report in Chinese, structured and professional.</think>

# OpenClaw 项目日报 · 2026-08-10

---

## 1. 今日速览

OpenClaw 仓库今日维持高强度的开发与社区互动节奏，过去 24 小时共有 **500 条 Issues 更新**（活跃 429 / 关闭 71）与 **500 条 PR 更新**（待合并 336 / 已合并或关闭 164），但 **无任何新版本发布**，反映团队当前处于密集重构与修复窗口期，未达到发版门槛。从热度看，社区关注高度集中在「消息丢失 / Session 状态异常」类问题上，尤其是 Telegram、Codex、Matrix 等通道的静默失败和会话状态污染问题。同时维护者正进行大范围命名扁平化与死代码清理（#121308、#121345、#121338、#121350 等），项目处于「结构调整 + 稳定性兜底」并行阶段。整体来看，**Issue 流入速度（429）远超关闭速度（71），积压持续扩大，是当前主要风险信号**。

---

## 2. 版本发布

⚠️ **今日无新版本发布**。从相关 PR 状态可推断下一发版候选仍以 2026.7.x 与 2026.8.x 系列为目标，重点修复 Codex CLI 会话恢复、cron SQLite 迁移、Telegram 重复消息、Slack Enterprise Grid 检测等 P1 级问题。

---

## 3. 项目进展

今日关闭/合并的代表性 PR 集中在**通道层重构、协议对齐、UI 修复和清理型 refactor**，具体如下：

| PR | 类型 | 说明 | 链接 |
|---|---|---|---|
| #121322 | fix(ui) | 恢复 Cloud Worker Desktop 面板启动器（web-ui） | [#121322](https://github.com/openclaw/openclaw/pull/121322) |
| #121323 | fix(scripts) | Crabbox 全 provider 故障时回退本地 check:changed 通道 | [#121323](https://github.com/openclaw/openclaw/pull/121323) |
| #121331 | refactor(core) | 在 normalization-core 上规范化 record guards，去除重复实现 | [#121331](https://github.com/openclaw/openclaw/pull/121331) |
| #121334 | fix(protocol) | 对齐 worker fallback 与 cron 的 reason schema（修补 #121285） | [#121334](https://github.com/openclaw/openclaw/pull/121334) |
| #121338 | refactor(extensions) | 删除不再使用的兼容导出（含已退役的 OpenAI Codex provider 拼写） | [#121338](https://github.com/openclaw/openclaw/pull/121338) |
| #121347 | fix(slack) | 回移植 Slack Enterprise Grid reaction 与 pin 事件监听 | [#121347](https://github.com/openclaw/openclaw/pull/121347) |

另外，处于「Ready for maintainer look」的较重要 PR 包括：
- **#121308**（XL，P1）— 通道 turn 派发命名扁平化，清理 6 层命名重复；
- **#121122**（XL，P2）— 防止云 worker 消失导致跨重启的失败诊断丢失；
- **#121146**（S，P1）— 修复 reset 后 tool call ID 复用造成的会话历史错配；
- **#121349**（M）— 单 session patch 不再扫描整个 store（修复 #120873 的复盘）；
- **#121350**（L）— agents/spawn 子系统迁移到 `src/agents/subagents/spawn`，阶段性重构；
- **#119344**（L，P2）— Signal 插件新增 signal-cli 账户链接适配器；
- **#119342**（XL，P2）— System-Agent 托管 QR 设置步骤；
- **#119343**（XL，P2）— Gateway 接管 QR setup sessions 的所有权；
- **#119341**（L，P2）— 定义 system-agent QR 协议契约。

> 总体判断：今日合并/关闭的工作以「清理 + 修补」为主，结构性功能主要在 QR 设置链路（Signal / 系统代理）和 spawn 子系统重构上推进，**项目整体稳步向前但缺乏明确的版本发布节点**。

---

## 4. 社区热点

### 🔥 Issues 热度排行

| Issue | 评论 | 主题 | 链接 |
|---|---|---|---|
| #116277 | **196** | DeepSeek v4 Flash 静默回复失败（今日已 CLOSED） | [链接](https://github.com/openclaw/openclaw/issues/116277) |
| #22438 | 19 | 分层 Bootstrap 文件加载（P2） | [链接](https://github.com/openclaw/openclaw/issues/22438) |
| #121058 | 19 | **#116277 关闭后静默失败仍在复发** | [链接](https://github.com/openclaw/openclaw/issues/121058) |
| #91009 | 18 | Codex PreToolUse 派生进程吃满 CPU，gateway RPC 阻塞 | [链接](https://github.com/openclaw/openclaw/issues/91009) |
| #45740 | 16 | gh-issues skill 把不可信 issue body 直接注入 sub-agent | [链接](https://github.com/openclaw/openclaw/issues/45740) |
| #48003 | 16 | `messages.queue.mode: "steer"` 在主会话不生效 | [链接](https://github.com/openclaw/openclaw/issues/48003) |
| #10659 | 15 | Feature：Masked Secrets，阻止 agent 看到原始 API Key | [链接](https://github.com/openclaw/openclaw/issues/10659) |
| #57901 | 14 | safeguard compaction 忽略 `compaction.model` 配置 | [链接](https://github.com/openclaw/openclaw/issues/57901) |
| #69208 | 13 | 伞形 issue：跨通道 transcript / replay / context 组装重复 | [链接](https://github.com/openclaw/openclaw/issues/69208) |
| #96242 | 8 | Telegram 多路径重复消息（独立 3 路径确认） | [链接](https://github.com/openclaw/openclaw/issues/96242) |

### 🔥 PR 热度

今日展示的 PR 评论数大多为 `undefined`，但从状态看讨论集中在 **#121308**（命名扁平化）、**#121278**（auth profile 配额隔离）、**#120864**（Slack Grid 运行时检测） 等 XL 大型重构上。

### 讨论诉求分析

- **静默回复类问题占据绝对话语权**：#116277 一条 issue 累计 196 条评论，是过去一周的「事件级」Bug，关闭后又被 #121058「复发追踪」顶上，体现社区对 **可观测性 + 修复真实生效** 的强烈诉求。
- **通道歧义与重放问题** 仍是 MSTeams / Webchat / Telegram / Matrix 多端用户共同痛点（#69208 伞形 issue 高度典型）。
- **安全与凭证隔离** 类需求升温（#45740、#10659），反映 AI Agent 上下文注入与凭证泄露风险在生产环境中开始被严肃对待。

---

## 5. Bug 与稳定性

### 🔴 P0 / P1 高危

| 严重度 | Issue | 状态 | 简述 | 是否有 fix PR |
|---|---|---|---|---|
| P1 | [#48003](https://github.com/openclaw/openclaw/issues/48003) | OPEN | steer 模式不向主会话注入 mid-turn 消息（KeyedAsyncQueue 回归） | 关联 PR 待定 |
| P1 | [#91009](https://github.com/openclaw/openclaw/issues/91009) | OPEN | Codex PreToolUse 派生 CPU 满载，gateway 卡死 | 暂无 |
| P1 | [#47975](https://github.com/openclaw/openclaw/issues/47975) | OPEN | Subagent 会话完成后未清理，主会话失响应 | 暂无 |
| P1 | [#72015](https://github.com/openclaw/openclaw/issues/72015) | OPEN | active-memory + QMD boot 让多 agent gateway 过载 | 暂无 |
| P1 | [#96242](https://github.com/openclaw/openclaw/issues/96242) | OPEN | Telegram 至少 3 条独立路径导致重复消息 | 暂无 |
| P1 | [#90378](https://github.com/openclaw/openclaw/issues/90378) | OPEN | 5.28→6.1 cron 静默迁移 SQLite，新 job 默认 announce 致 channel 错误 | 暂无 |
| P1 | [#87327](https://github.com/openclaw/openclaw/issues/87327) | OPEN | isolated agent 在 runtime-plugins 阶段 hang | 暂无 |
| P1 | [#114211](https://github.com/openclaw/openclaw/issues/114211) | OPEN | Matrix 房间 agent 在 no-reply 上自循环 | 暂无 |
| P1 | [#105528](https://github.com/openclaw/openclaw/issues/105528) | OPEN | Windows v2026.6.x exec/read 工具静默返回空 | 暂无 |
| P1 | [#56653](https://github.com/openclaw/openclaw/issues/56653) | OPEN | Slack reaction_added/removed 在 Socket Mode 多账户下从不投递 | 暂无 |
| P1 | [#51049](https://github.com/openclaw/openclaw/issues/51049) | OPEN | WhatsApp 入站消息在 k3s 嵌套容器中收不到（出站正常） | 暂无 |
| P1 | [#111372](https://github.com/openclaw/openclaw/issues/111372) | OPEN | macOS 网关「loading configuration」无限 SIGTERM 循环（2026.6.11→2026.7.1-2 回归） | 暂无 |
| P1 | [#114020](https://github.com/openclaw/openclaw/issues/114020) | OPEN | 2026.7.2-beta.4 后 Feishu/Telegram 通道派发失败，runChannelInboundEvent 缺 runDispatchLifecycle | 暂无 |
| P1 | [#116277](https://github.com/openclaw/openclaw/issues/116277) | **CLOSED** | DeepSeek v4 Flash 静默回复失败 | ✅ 关闭；但 #121058 仍复发 |
| P1 | [#116022](https://github.com/openclaw/openclaw/issues/116022) | **CLOSED** | beta.5 `/new` 复用稳定 session ID，无法恢复已退役 Codex tombstone | ✅ 关闭 |

### 🟡 P2 / P3 中等

| Issue | 简述 | 链接 |
|---|---|---|
| #45740 | gh-issues skill 把未净化 issue body 注入 sub-agent（安全） | [链接](https://github.com/openclaw/openclaw/issues/45740) |
| #57901 | safeguard compaction 不读 `compaction.model` | [链接](https://github.com/openclaw/openclaw/issues/57901) |
| #53628 | 安装 skill 时未展开 `${XDG_CONFIG_HOME}` | [链接](https://github.com/openclaw/openclaw/issues/53628) |
| #92460 | 隔离 cron 完成 announcer 丢弃 `delivery.channel` | [链接](https://github.com/openclaw/openclaw/issues/92460) |
| #48786 | Feishu reply 引用中 `@_user_N` 占位符未解析 | [链接](https://github.com/openclaw/openclaw/issues/48786) |
| #94919 | Z.AI Coding-Plan ECONNRESET 触发 fallback，对用户不可见 | [链接](https://github.com/openclaw/openclaw/issues/94919) |
| #56692 | 群聊上下文歧义导致 agent 误回应 | [链接](https://github.com/openclaw/openclaw/issues/56692) |
| #78301 | 插件加载器对老/非法插件契约静默失败 | [链接](https://github.com/openclaw/openclaw/issues/78301) |
| #85461 | 未捕获 image-generation provider 用量元数据 | [链接](https://github.com/openclaw/openclaw/issues/85461) |
| #60572 | 多 Slot Memory 架构（已有 PR 待合并） | [链接](https://github.com/openclaw/openclaw/issues/60572) |
| #88079 | WebChat 不流式渲染 Kimi Code / DeepSeek Reasoner 思维链 | [链接](https://github.com/openclaw/openclaw/issues/88079) |

> ⚠️ **稳定性观察**：上述 P1 Bug 中绝大多数 **目前没有任何关联 fix PR**，仅 #116277/#116022 已通过合入的修复关闭（但复发信号未消）。维护者应优先在 #96242、#87327、#111372、#114020 等反复出现的回归类问题上集中产出。

---

## 6. 功能请求与路线图信号

将社区诉求与已有 PR 交叉比对，可以提炼出几条潜在的下一版本方向：

| 方向 | 代表 Issue / PR | 状态 |
|---|---|---|
| **System-Agent + QR 设置链路**（Signal、Control UI、Gateway） | #119341、#119342、#119343、#119344、#118169、#114173 | 已分层提 PR，预计 **2026.8.x** 周期合并 |
| **Channel Turn 命名扁平化** | #121308 | XL，正在等待作者回应 |
| **Subagent / Spawn 子系统结构化迁移** | #121350、#121295 系列 | 进行中 |
| **OAuth / 配额按 auth profile 隔离** | #121278 | 需 proof，候补 |
| **Claude CLI compaction 免 API key** | #120496 | 需 proof，候补 |
| **Ollama Cloud 模型 max thinking** | #121074 | 需 proof，候补 |
| **Masked Secrets**（用而不看 API key） | #10659 | 长期热门（👍4），仍 OPEN |
| **Telegram 一级 reaction trigger** | #47677 | 👍2，OPEN |
| **Webchat/Control UI 内联按钮 + callback** | #46656 | 长期 OPEN |
| **Graceful sub-agent timeout 预警** | #6625 | 长期 OPEN |
| **按 agent 配置 dreaming**（避免 OOM） | #67413 | 👍5，OPEN |
| **消息/聊天列表分页（替代硬编码 25）** | #71452 | OPEN |
| **`/models test-fallback` 命令** | #6599 | OPEN |
| **图片批处理 / 媒体组合并** | #39343 | OPEN |

> 路线图信号：**「设置链路 QR 化」是当前最具确定性的演进方向**；「凭证隔离 / 反应触发 / 上下文分层」是社区呼声最一致、但仍缺乏明确实现承诺的功能。

---

## 7. 用户反馈摘要

- **静默失败是头号痛点**。#116277 在 196 条评论中，用户反复反映 DeepSeek v4 Flash 在 Telegram 群聊里毫无提示地不回复，仅给出通用 fallback；这一体验严重损害用户对 fallback 机制的信任。即便 issue 已关闭，#121058 中用户明确指出 **「监控 cron 仍记录新发生」**，说明「已修复但未真正生效」的反馈会反向放大挫败感。
- **Codex / CLI 后端集成不稳定**。#91009、#116022、#47975 都集中在 Codex CLI 与 native hook 的资源/会话恢复上，部分用户被迫降级或长期停留在旧版（2026.6.1）。
- **macOS 网关 SIGTERM 循环** (#111372) 是从 2026.6.11 升级到 2026.7.1-2 后的新回归，对 Apple 生态用户打击明显。
- **Windows 工具静默空输出** (#105528) 影响所有 Windows + Docker 用户，影响面广。
- **可观测性诉求** 突出：用户希望 fallback / restart / model 切换对终端用户可见（#33975、#94919），而不是埋在日志里。
- **安全意识抬头**：#45740 报告的 issue body → sub-agent 注入路径和 #10659 的 Masked Secrets 在 👍 数上都高于均值，反映企业用户对 Agent 安全边界的关注。
- **多 agent / 群聊上下文歧义** (#56692、#96242) 表明用户开始在更复杂的多 agent 拓扑中使用 OpenClaw，但当前群聊归属与消息路由逻辑跟不上。
- **正面信号**：清理型 PR（#121345、#121331、#121338、#121348）说明维护者仍在持续做减法，社区对项目演进方向整体认可，仅在「能否更快闭环 P1」上有明显焦虑。

---

## 8. 待处理积压

以下 Issue / PR **长期 OPEN** 且严重度较高，建议维护者优先 review：

| 编号 | 严重度 | 创建日期 | 描述 | 链接 |
|---|---|---|---|---|
| #10659 | P1 | 2026-02-06 | Masked Secrets（👍4） | [链接](https://github.com/openclaw/openclaw/issues/10659) |
| #6599 | P3 | 202

---

## 横向生态对比

<think>The user wants me to generate a horizontal comparative analysis report based on the daily dynamics of 7 open-source AI assistant/agent projects (OpenClaw, NanoBot, PicoClaw, IronClaw, LobsterAI, QwenPaw, Hermes Agent, OpenHuman). Let me carefully analyze the data and produce a professional, data-driven report in Chinese.

Let me think through each section:

1. **生态全景** - Overall ecosystem status
- All 8 projects show no releases today, suggesting a stabilization/refactoring phase
- High activity across the board (50-500+ issue/PR updates daily)
- Common themes: stability, security hardening, channel reliability, observability
- Ecosystem is in a "maturity + expansion" dual-track phase

2. **各项目活跃度对比** - Need a comprehensive table
- OpenClaw: 500 issues, 500 PRs, 0 releases
- NanoBot: 5 issues, 16 PRs, 0 releases
- PicoClaw: 3 issues, 6 PRs, 0 releases
- IronClaw: 22 issues, 32 PRs, 0 releases
- LobsterAI: 3 issues, 0 PRs, 0 releases
- QwenPaw: 18 issues, 28 PRs, 0 releases
- Hermes Agent: 50 issues, 50 PRs, 0 releases
- OpenHuman: 50 issues, 18 PRs, 0 releases

3. **OpenClaw 定位** - As the core reference, OpenClaw is the largest in terms of activity but also faces the most accumulation pressure. Compare to others.

4. **共同关注的技术方向** - 
- Channel/messaging reliability (Telegram, Slack, Matrix, Discord)
- Tool discovery and management at scale
- Security/SSRF/credential isolation
- Memory systems (ReMe, SQLite, pluggable)
- Observability (token usage, fallback visibility)
- Mobile/PWA support
- Model context window issues

5. **差异化定位** - 
- OpenClaw: largest scale, mature, channel-focused
- NanoBot: token observability focus, security-hardening
- PicoClaw: SSRF hardening, lightweight
- IronClaw: tool disclosure epic, web push
- LobsterAI: model flexibility, multi-model collaboration
- QwenPaw: ReMe memory system, console UX
- Hermes Agent: Windows safety crisis, accessibility
- OpenHuman: kernel platformization, memory subsystem

6. **社区热度与成熟度** - Tier the projects
- Tier 1 (high maturity, large scale): OpenClaw, Hermes Agent
- Tier 2 (active iteration): IronClaw, QwenPaw, OpenHuman
- Tier 3 (early/mid stage): NanoBot, PicoClaw, LobsterAI

7. **趋势信号** - 
- Security hardening (SSRF, approval systems)
- Memory systems as competitive differentiator
- Tool discovery at scale is the next frontier
- Observability (token usage) becoming standard expectation
- Multi-model collaboration emerging
- PWA/Web push as new channel
- Accessibility gaining attention

Let me write this report now in Chinese, professional and data-driven, suitable for technical decision-makers and developers.</think>

# 个人 AI 助手 / 自主智能体开源生态 · 横向对比分析

**报告周期：2026-08-10**
**覆盖项目：OpenClaw · NanoBot · PicoClaw · IronClaw · LobsterAI · QwenPaw · Hermes Agent · OpenHuman**

---

## 一、生态全景

今日覆盖的 8 个项目**均无新版本发布**，整体处于"重构 + 稳定性收敛"的并行窗口期；其中 OpenClaw、IronClaw、Hermes Agent 维持高频迭代（24h 内 50–500 条更新），NanoBot、PicoClaw、LobsterAI 处于低密度维护状态，QwenPaw 与 OpenHuman 则呈现"开放社区 + 内核重构"两种典型范式分化。**安全加固（SSRF、审批越权、测试夹具泄漏）、工具规模可扩展性（deferred retrieval / pluggable driver）、可观测性（token 用量 / fallback 可见性）** 已成为跨项目共识方向；而 **macOS 客户端冻结、Windows 智能体灾难级命令执行、记忆管线回归** 等高频 P0/P1 问题在多个项目中重复出现，提示**Agent 应用层稳定性尚未达到生产可信门槛**。

---

## 二、各项目活跃度对比

| 项目 | 24h Issues | 24h PRs | 24h Release | 合并/关闭 PR | 主要议题 | 健康度评估 |
|---|---|---|---|---|---|---|
| **OpenClaw** | 500（活跃 429 / 关闭 71） | 500（待合并 336 / 已合并 164） | ❌ | 164 | 静默回复复发、通道命名扁平化、QR 设置链路、Slack Grid 检测 | ⚠️ **积压严重**——Issue 流入远超关闭速度，P1 多数无 fix PR |
| **Hermes Agent** | 50（活跃） | 50（待合并 47 / 已合并 3） | ❌ | 3 | Desktop 消息丢失（3 次复发）、Windows `rd /s /q C:\` 灾难、可访问性、cron TypeError | 🔴 **高风险**——存在数据丢失链 + 灾难级命令执行隐患 |
| **OpenHuman** | 50（关闭 49 / 新增 1 P1） | 18（已合并 8 / 待合并 10） | ❌ | 8 | main 分支编译断裂、TinyCortex 迁移后 connector 静默失数据、CEF → Wry 切换 | 🟠 **主干断裂期**——P1 回归无 fix PR，但合并 PR 量最大 |
| **IronClaw** | 22（活跃 15 / 关闭 7） | 32（待合并 24 / 已合并 8） | ❌ | 8 | 工具发现 epic（v1.2.0）、僵尸线程、Slack 鉴权死锁、Web Push | 🟡 **结构化推进**——epic 拆分清晰，但 #7400 僵尸线程 100% 复现 |
| **QwenPaw** | 18（活跃 11 / 关闭 7） | 28（待合并 27 / 已合并 1） | ❌ | 1 | ReMe4 记忆路线、strict provider 兼容、MCP 类型推断、移动端适配 | 🟠 **吞吐瓶颈**——28 PR 仅 1 关闭，review 节奏跟不上贡献 |
| **NanoBot** | 5（活跃 5 / 关闭 0） | 16（待合并 12 / 已合并 4） | ❌ | 4 | `exec.allowPatterns` 越权安全 advisory×2、token 用量记录、Docker 部署 | 🟢 **健康**——议题聚焦，4 个 PR 合并，无 P0 遗留 |
| **PicoClaw** | 3（活跃 2 / 关闭 1） | 6（待合并 5 / 已合并 1） | ❌ | 1 | SSRF 系列修复（×3 PR）、Telegram 富消息表格、Matrix sync 静默死亡 | 🟢 **稳健**——安全响应迅速，但长期积压 PR 待清 |
| **LobsterAI** | 3（活跃 3 / 关闭 0） | 0 | ❌ | 0 | 自定义 Provider 误判、context overflow、跨模型子任务 | 🔴 **停滞**——零 PR、零合入，2 条 stale 议题积压 2–4 个月 |

> **共性信号**：8/8 项目今日零发布 → 表明生态整体处在**大版本前的密集重构窗口**；合并 PR 数与待审 PR 数的比值（合并率）普遍偏低（OpenHuman 44%、IronClaw 25%、QwenPaw 仅 3.6%），**reviewer 带宽是当前生态的共同瓶颈**。

---

## 三、OpenClaw 在生态中的定位

| 维度 | OpenClaw | 同类均值（其他 7 项目） |
|---|---|---|
| 24h 议题量 | **500** | ~25 |
| 24h PR 量 | **500** | ~21 |
| 议题关闭率 | 14.2% | ~30% |
| 合并率 | 32.8% | ~18% |
| 待处理积压量 | 数百条 P0/P1 | 普遍 5–15 条 |

**定位判断**：
- **规模 / 复杂度层面**：OpenClaw 是同类项目中唯一进入"超大仓库"形态（24h 500+ 更新），覆盖通道、AI 后端、UI、子智能体、Skills、System Agent 等十余子系统；与之相对，其他项目多为 1–3 个核心子系统。
- **战略选择差异**：OpenClaw 走"**多通道 + 多 Provider + QR 链路 + Subagent**"的全场景扩展路线，与 IronClaw（侧重工具规模与渐进披露）、OpenHuman（侧重内核平台化）、QwenPaw（侧重记忆与 Console UX）等形成清晰分工。
- **风险特征**：项目体量带来"**大型项目病**"——Issue 流入速度（429）远超关闭速度（71），维护者注意力被稀释，**P1 Bug 多无 fix PR**（#91009、#47975、#72015、#87327、#111372 等）。这是其他小型项目暂时未触及的成熟期挑战。
- **正向优势**：合并率 32.8% 高于其他项目，说明即便在高压下，maintainer 仍在批量推进结构性重构（命名扁平化、死代码清理、reason schema 对齐）。

---

## 四、共同关注的技术方向

跨多个项目同时浮现的诉求，可视为生态级共识：

| 共同方向 | 涉及项目 | 具体诉求 |
|---|---|---|
| **🔒 通道 SSRF / 媒体下载安全** | PicoClaw（#3322/#3323/#3324）、OpenClaw（关联 credential 隔离） | 统一 `CreateSafeHTTPClient`、重定向链路校验、阻止私网/loopback 命中 |
| **🧰 工具规模可扩展性（deferred retrieval / pluggable driver）** | IronClaw（#7166 + #7409/#7410/#7411）、OpenHuman（#5446 memory subsystem）、OpenClaw（通道命名扁平化） | 工具集 1k+ 时延迟发现、可插拔 provider、内存驱动抽象 |
| **📊 Token / 用量可观测性** | NanoBot（#5266 + #5299）、OpenClaw（#121278 OAuth/profile 配额） | 每次调用级 token 记录、provider-level 配额隔离 |
| **🧠 记忆系统重构 / 持久化** | OpenHuman（#5446 + #5473）、QwenPaw（#6840 ReMe4 路线）、Hermes Agent（#43819 SQLite 共享连接） | Pluggable memory driver、checkpoint 恢复、Auto-Dream 单 unit 失败容错 |
| **📱 移动端 / PWA / Web Push** | QwenPaw（#6281）、IronClaw（#7398 PWA）、OpenHuman（#335/#395 桌面语音与通知） | 手机端控制、原生通知渠道、Web 端离线能力 |
| **🤖 多模型协同与 Provider 路由** | LobsterAI（#2132/#2453）、OpenClaw（多 provider）、Hermes Agent（OpenRouter 过滤） | 跨模型子任务通知、自定义 provider 误判修正、router 模型可见性 |
| **🛡️ 智能审批 / 命令越权防护** | Hermes Agent（#82842 Windows `rd /s /q C:\` + #82830 hardline floor PR）、OpenClaw（#48003 steer mode） | 绝对路径硬底线、smart-approval 超时兜底 |
| **♿ 可访问性 / 包容性设计** | Hermes Agent（#26689 VoiceOver，13 评论） | CLI/TUI/Gateway/Dashboard 全面屏幕阅读器适配 |

> **结论**：**安全 + 规模 + 可观测 + 记忆** 是当前生态的四大主轴；任何在 AI 智能体领域的创业团队，都应将"工具规模下的渐进披露 + 用量审计 + 审批越权硬底线"视为 P0 必修课。

---

## 五、差异化定位分析

| 项目 | 核心定位 | 目标用户 | 技术架构关键差异 |
|---|---|---|---|
| **OpenClaw** | 多通道、多 Provider、全场景 AI 助手平台 | 企业 IT、复杂工作流用户、跨 IM 部署 | 通道层抽象（Slack/Telegram/WeCom/Matrix…）+ Subagent + QR 链路 + 内置 Skills 市场 |
| **Hermes Agent** | 强调 "Hermes 桌面端 + Gateway 中继" 的端侧体验 | 桌面重度用户、自动化爱好者 | Tauri 桌面端 + 多通道 Relay + 全息记忆 SQLite + MCP 协议 |
| **OpenHuman** | 以"内核平台化"为长期方向的 AI 操作系统 | 开发者、内核贡献者 | tinybus 事件总线 + 可插拔 memory driver + Master Agent + Wry runtime（去 CEF） |
| **IronClaw** | 工具规模可扩展 + 多渠道渐进披露（v1.2.0 主轴） | 重度 Skills 用户、企业流程自动化 | Memory-style pluggable tool retrieval + Web Push + System Prompt UX |
| **QwenPaw** | 记忆系统（ReMe）+ Console 体验 + 国产模型深度适配 | 国内用户、Qwen/DeepSeek/火山引擎订阅用户 | ReMe4（Auto-Link/三模搜索）+ 2.0/2.1 beta 双轨 + 火山引擎内置 provider |
| **NanoBot** | 轻量级、安全优先的可观测 Agent 框架 | 注重安全的个人/小团队用户 | 结构化 token 用量 API + 安全 advisory 响应 + i18n WebUI |
| **PicoClaw** | 紧凑型多通道 AI 网关 | 资源受限环境、轻量部署 | SSRF 强防护 + Telegram/Weixin/WeCom/IRC 多通道 |
| **LobsterAI** | 模型灵活性与多模型协同（网易有道系） | 学术 / 跨模型实验用户 | Provider 路由 + 子任务调度 + 网关级 function call |

**关键差异点**：
- **架构哲学**：OpenClaw、OpenHuman 走"**巨型平台**"路线；NanoBot、PicoClaw、LobsterAI 走"**轻量专注**"路线；IronClaw、QwenPaw、Hermes Agent 介于两者之间。
- **AI 模型选择**：QwenPaw 与国产模型（DeepSeek V4、火山引擎、Qwen）深度耦合；LobsterAI 强调跨模型灵活路由；其余多为 OpenAI 兼容 + Anthropic 路线。
- **桌面/服务端侧重**：Hermes Agent、OpenHuman 押注桌面端（Tauri 路线），OpenClaw、NanoBot 以服务端 / 网关为主，PicoClaw 则两者皆不强。

---

## 六、社区热度与成熟度分层

| 层级 | 项目 | 特征 | 阶段判断 |
|---|---|---|---|
| **Tier 1 · 旗舰 / 成熟期** | **OpenClaw** | 超大仓库、多子系统、Issue 积压、合并率最高 | 进入"**成熟期阵痛**"——扩张速度超过稳定性收敛，需专项治理 |
| **Tier 2 · 高活跃迭代期** | **Hermes Agent、IronClaw、QwenPaw** | 24h 18–50 更新、议题集中度高、贡献者群体稳定 | 处于"**功能扩张 + 稳定收敛**"双线并行期 |
| **Tier 3 · 平台化重构期** | **OpenHuman** | 大量合并（8/18）、主干编译断裂、内核抽象化推进 | 处于"**架构升级期**"——以牺牲短期稳定性换长期可扩展性 |
| **Tier 4 · 稳健维护期** | **NanoBot、PicoClaw** | 议题少、合并率高、安全响应快 | 处于"**质量巩固期**"——专注于安全与可观测性深耕 |
| **Tier 5 · 停滞 / 风险期** | **LobsterAI** | 零 PR、零合入、stale 积压 | 处于"**社区失活期**"——维护者响应链路几近中断 |

**评估维度**：
- **快速迭代阶段**：OpenHuman（合并 PR 量最大）、IronClaw（epic 化推进）
- **质量巩固阶段**：NanoBot（覆盖率门槛、V8 上报）、PicoClaw（SSRF 体系化修复）
- **成熟期阵痛阶段**：OpenClaw、Hermes Agent（议题积压 + 重复复发）
- **架构转型阶段**：OpenHuman（内核平台化）、QwenPaw（ReMe4 记忆路线）

---

## 七、值得关注的趋势信号

### 趋势 1：**安全边界正成为 Agent 产品的核心护城河**

- 信号：PicoClaw 1 天内提交 3 条 SSRF 修复；Hermes Agent 出现 Windows `rd /s /q C:\` 灾难级命令执行；OpenClaw 长期讨论 Masked Secrets；NanoBot 提交 2 条 `exec.allowPatterns` 越权 advisory。
- 启示：**审批硬底线、命令路径白名单、用量/凭据隔离** 应作为 AI Agent 类产品的**默认安全基线**，而非可选配置。

### 趋势 2：**工具规模 1k+ 是新一代 Agent 的必修课**

- 信号：IronClaw v1.2.0 epic 聚焦 "deferred tool retrieval + pluggable provider"；OpenClaw 通道命名扁平化清理 6 层重复；OpenHuman 抽象化 memory driver。
- 启示：**当工具/MCP server 数量突破百级，向千级迈进时，必须重构检索与上下文注入路径**——渐进式披露、按需展开、命名空间感知成为产品差异化关键。

### 趋势 3：**可观测性从"加分项"转为"准入门槛"**

- 信号：NanoBot 引入 `/api/settings/usage/records`；OpenClaw 推进 OAuth/profile 配额隔离；Hermes Agent 报告 `normalize_usage` 静默归零。
- 启示：**用户已不再接受"AI 在后台烧 token 而无迹可循"的体验**，每次调用级用量审计、provider 级配额、fallback 可见性必须成为标准输出。

### 趋势 4：**记忆系统成为下一阶段产品差异化主战场**

- 信号：OpenHuman 抽象化 memory subsystem；QwenPaw 公布 ReMe4 完整路线图（Auto-Link、三模搜索

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

<think>The user wants me to generate a daily project status report for NanoBot based on the GitHub data provided. Let me analyze the data carefully and structure the report according to the 8 sections requested.

Let me first analyze the data:

**Data Overview:**
- 24h Issues: 5 (all new/active, 0 closed)
- 24h PRs: 16 (12 open/pending, 4 merged/closed)
- New releases: 0

**Issues (5 total, all OPEN):**
1. #5266 - Token consumption logs enhancement (13 comments, most active)
2. #5295 - Docker compose deployment bug (5 comments)
3. #5311 - Agnes AI nested-object double-encoding bug (0 comments, today)
4. #5306 - Security: exec.allowPatterns shell-chain bypass
5. #5305 - Security: exec.allowPatterns allowlist bypass

**PRs (16 total):**
- 12 OPEN:
  - #5271 - Fix session stale background task saves (p0)
  - #5301 - Fix telegram stdlib logging bridge
  - #5255 - Truthful API service status (conflict)
  - #5204 - Refactor providers Responses capabilities (p1)
  - #4276 - Computer use tools (enhancement, conflict)
  - #5310 - Fix weixin forced QR login
  - #5309 - Fix skills marketplace shadow builtins (p2)
  - #5288 - Feat plugins integrate CLI Apps
  - #5299 - Feat api structured token usage records
  - #5303 - Fix skills weather workflow Windows-safe (p2)
  - #5302 - Fix Dream consolidation tool calls (p2)
  - #5156 - Fix telegram stalled polling (p2)

- 4 CLOSED:
  - #4019 - GitAgent Protocol support
  - #5307 - Restore Star History chart
  - #5308 - Test strengthen coverage
  - #5304 - Fix webui HTTPS requirement voice input

Now let me write the report in Chinese, structured as requested. The user wants:
1. 今日速览
2. 版本发布 (skip if none)
3. 项目进展 (merged/closed PRs)
4. 社区热点 (most discussed)
5. Bug 与稳定性
6. 功能请求与路线图信号
7. 用户反馈摘要
8. 待处理积压

Let me write a professional, data-driven report in Chinese.</think>

# NanoBot 项目动态日报

**报告周期：** 2026-08-09 ~ 2026-08-10
**数据来源：** [github.com/HKUDS/nanobot](https://github.com/HKUDS/nanobot)

---

## 一、今日速览

NanoBot 过去 24 小时保持中高强度的开发活跃度，共产生 5 条新 Issue 与 16 条 PR 更新，其中 4 条 PR 已关闭/合并，12 条仍待合并。值得关注的是，今日新增 **两条安全相关 Issue**（#5305、#5306），均涉及 `exec.allowPatterns` 的 allowlist 绕过，属于较高优先级的安全通告，需维护团队尽快响应。整体来看，项目处于多线并行推进状态：核心 Bug 修复、安全加固、Provider 重构、Agent Plugins 集成与 WebUI 体验改进同步展开。无新版本发布，最新主线版本仍待下一次发版周期确认。

---

## 二、版本发布

**今日无新版本发布。** 合并的 4 条 PR（含安全、WebUI、CI/CD、文档类）将进入下一次发版候选。

---

## 三、项目进展

今日共关闭/合并 **4 条 PR**，推进的方向如下：

| PR | 类别 | 核心价值 |
|---|---|---|
| [#5304](https://github.com/HKUDS/nanobot/pull/5304) | Bug/WebUI | 解决 WebUI 在 HTTP 来源下无法使用语音输入的问题，新增 HTTPS 要求提示，覆盖全部 i18n 语言；Android Chrome 等浏览器仅在 secure context 下暴露麦克风权限 |
| [#5307](https://github.com/HKUDS/nanobot/pull/5307) | Documentation | 恢复 Star History 图表（原方案因 GitHub 限制被下线），使用新的不受限的图表 provider |
| [#5308](https://github.com/HKUDS/nanobot/pull/5308) | CI/CD/Test | 强化用户路径测试覆盖，新增交互式 CLI、WebUI Chat fork、版本检查、路由鉴权、失败边界等测试场景；接入 V8 覆盖率上报与阈值门槛，移除 5 条冗余测试 |
| [#4019](https://github.com/HKUDS/nanobot/pull/4019) | Feature (CLOSED 未合并) | GitAgent Protocol 支持提案（agent.yaml + SOUL.md），因偏离主线被关闭，标准集成方案待重新讨论 |

**整体评估：** 项目在 **质量门禁**（覆盖率与 CI 阈值）与 **用户体验提示**（HTTPS/语音）两条线取得实质进展；[#5304](https://github.com/HKUDS/nanobot/pull/5304) 与 [#5308](https://github.com/HKUDS/nanobot/pull/5308) 均由 `@chengyongru` 提交，体现出在用户体验与工程质量两条线持续输出。

---

## 四、社区热点

**今日最活跃 Issue：**

- 🔥 [#5266](https://github.com/HKUDS/nanobot/issues/5266) **Token 消耗日志需求**（13 条评论，最高活跃度）
  - 用户反馈 nanobot 在仅 2 小时、用户无明显操作的场景下消耗近百万 token，期望系统能按调用粒度记录 token 用量，便于追溯
  - 已与 PR [#5299](https://github.com/HKUDS/nanobot/pull/5299)（暴露结构化 token 用量记录、保留最近 50 条记录、/api/settings/usage/records 接口）形成联动呼应，说明该痛点已被开发侧同步接收

**讨论诉求分析：** 用户对 **可观测性（Observability）** 的需求集中在"何时/哪个调用消耗了多少 token"，反映出在大模型 Agent 类应用中，缺乏用量细粒度审计是普遍痛点；同时这与 [#5299](https://github.com/HKUDS/nanobot/pull/5299) 提供的 `/api/settings/usage/records` 端点恰好呼应，验证了 Issue → PR 的需求闭环路径。

---

## 五、Bug 与稳定性

按严重程度排序：

### 🔴 高优先级（安全类）
- **[#5305](https://github.com/HKUDS/nanobot/issues/5305)** —— `exec.allowPatterns` allowlist 可被 OpenAI 兼容 API 链式绕过，允许执行白名单外的 shell 片段
- **[#5306](https://github.com/HKUDS/nanobot/issues/5306)** —— 同根问题在 `exec` 工具链上的绕过

> **状态：** 两份安全 advisory 来自同一报告者（@YLChen-007），目前尚无对应修复 PR，建议维护者立即评估 CVSS 并发布补丁版本。

### 🟠 中优先级（功能不可用）
- **[#5295](https://github.com/HKUDS/nanobot/issues/5295)** —— Docker Compose 部署失败：`/usr/local/bin/entrypoint.sh: Permission denied`，gateway 容器反复重启（5 条评论）
  - 暂无对应 fix PR，需在 Dockerfile 中显式声明 entrypoint 可执行位
- **[#5311](https://github.com/HKUDS/nanobot/issues/5311)** —— Agnes AI 自定义 Provider 在 MCP 工具调用时对嵌套对象参数做双重 JSON 编码，导致 obsidian_get_note 等工具调用失败
  - 暂无 fix PR

### 🟡 中优先级（已存在修复 PR）
- [#5171 → #5156](https://github.com/HKUDS/nanobot/pull/5156) —— Telegram 轮询在网络抖动后静默卡死，bot 停止收消息但进程存活；修复 PR 仍在 OPEN 状态
- [#5271](https://github.com/HKUDS/nanobot/pull/5271) —— P0：后台任务（如 `maybe_generate_webui_title`）持有的 Session 引用可能在 `/new` 后被过期数据覆盖（已 OPEN，标记 conflict）
- [#5301](https://github.com/HKUDS/nanobot/pull/5301) —— Telegram stdlib 日志桥接与轮询停滞检测（从 #5156 拆分的低风险观测面）

### 🟢 低优先级（已修复/待合入）
- [#5302](https://github.com/HKUDS/nanobot/pull/5302) —— Dream 记忆整合时仍引用通用系统 prompt 中列出的不可用工具
- [#5303](https://github.com/HKUDS/nanobot/pull/5303) —— Windows PowerShell 中 `curl` 别名导致 weather skill 首次失败
- [#5309](https://github.com/HKUDS/nanobot/pull/5309) —— Marketplace 把 workspace skill 误判为已安装，导致 github 等内建技能的"安装"按钮失效
- [#5310](https://github.com/HKUDS/nanobot/pull/5310) —— `nanobot channels login weixin --force` 因 `account.json` 残留导致强制 QR 登录失效

---

## 六、功能请求与路线图信号

| 需求 | 对应 Issue/PR | 路线图可能性 |
|---|---|---|
| 结构化 token 用量记录与查询 | [#5266](https://github.com/HKUDS/nanobot/issues/5266) + [#5299](https://github.com/HKUDS/nanobot/pull/5299) | **高** —— 已进入 PR 评审 |
| WebUI 真实反映外部 API 服务状态 | [#5255](https://github.com/HKUDS/nanobot/pull/5255) | 中 —— draft 阶段，需设计共识 |
| 模型无关的 computer use（browser + computer_use 工具） | [#4276](https://github.com/HKUDS/nanobot/pull/4276) | 中 —— 长期 PR，需对齐路线图 |
| Agent Plugins 与 CLI Apps 统一边界 | [#5288](https://github.com/HKUDS/nanobot/pull/5288) | **高** —— 标准化封装，价值清晰 |
| Providers Responses 能力声明式重构 | [#5204](https://github.com/HKUDS/nanobot/pull/5204) | **高** —— 减少分支判断，长期受益 |

**信号判断：** [#5299](https://github.com/HKUDS/nanobot/pull/5299)、[#5204](https://github.com/HKUDS/nanobot/pull/5204)、[#5288](https://github.com/HKUDS/nanobot/pull/5288) 三条 PR 均不涉及破坏性变更，预期将进入下一发版候选；安全类修复（#5305/#5306）若未在本周内修复，建议单独发布补丁版本。

---

## 七、用户反馈摘要

1. **Token 消耗不透明（#5266）** —— 核心痛点：用户对"Agent 是否在后台无意义消耗 token"高度敏感，期望可追溯到单次调用的用量。这反映 AI Agent 工具的 **可观测性短板** 已成为用户信任的关键指标。

2. **Docker 部署体验不佳（#5295）** —— 用户严格按 deployment.md 操作仍遇权限错误，说明文档与镜像产物的发布一致性需要校验流程保障。

3. **第三方 Provider 兼容性（#5311）** —— 用户接入 Agnes AI 时遭遇 MCP 工具调用参数编码问题，说明自定义 Provider 与标准 MCP 协议的对接面缺乏充分测试覆盖，建议补充矩阵化 Provider 兼容性测试。

4. **跨平台体验不一致（#5303）** —— Windows PowerShell 下 `curl` 别名导致命令失效，反映出跨平台 shell 兼容仍是 skill 编写者的负担，未来可在文档/skill 规范中提供平台安全命令清单。

5. **WebUI 语音输入受阻（#5304 已修）** —— 用户反馈未在 GitHub Issue 中体现大量评论，但 PR 中描述了 Android Chrome 在 HTTP 下不发麦克风权限的"无声失败"体验——典型的浏览器安全策略对本地开发场景不友好的体现。

---

## 八、待处理积压

以下 Issue/PR 长期未关闭，建议维护者评估是否合并、关闭或调整路线：

| 类型 | 编号 | 标题 | 创建时间 | 状态 |
|---|---|---|---|---|
| PR | [#4276](https://github.com/HKUDS/nanobot/pull/4276) | model-agnostic computer use (browser + computer_use) | 2026-06-10 | OPEN ~60 天，已标 conflict |
| PR | [#5255](https://github.com/HKUDS/nanobot/pull/5255) | Truthful API service status + `nanobot api status` | 2026-08-05 | OPEN，draft |
| PR | [#5271](https://github.com/HKUDS/nanobot/pull/5271) | Prevent stale background task saves from overwriting session | 2026-08-06 | OPEN，标记 P0 + conflict |
| PR | [#5156](https://github.com/HKUDS/nanobot/pull/5156) | Telegram recover from silently stalled polling | 2026-07-29 | OPEN 12 天，P2 |
| Issue | [#5266](https://github.com/HKUDS/nanobot/issues/5266) | Logs about token consumption | 2026-08-06 | OPEN，社区关注度高 |

**建议：** [#5271](https://github.com/HKUDS/nanobot/pull/5271)（P0 session 数据损坏）与安全类 Issue（[#5305](https://github.com/HKUDS/nanobot/issues/5305) / [#5306](https://github.com/HKUDS/nanobot/issues/5306)）应作为本周优先处理项。

---

*报告生成时间：2026-08-10 ｜ 数据口径：GitHub Issues & Pull Requests 公开事件*

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

<think>The user wants me to generate a daily report for the PicoClaw project based on the GitHub data provided. Let me analyze the data carefully:

**Data Overview:**
- Past 24 hours Issues updates: 3 (new/active: 2, closed: 1)
- Past 24 hours PR updates: 6 (pending: 5, merged/closed: 1)
- New releases: 0

**Issues:**
1. #3203 [CLOSED] [stale] [BUG] Matrix sync loop has no reconnection logic - closed (probably as stale)
2. #3287 [OPEN] [Feature] Better support long messages in IRC - active with 4 comments
3. #3325 [OPEN] [Feature] Render Telegram tables with rich messages - new

**Pull Requests:**
1. #3222 [OPEN] refactor(deltachat) - cleanup, -200 LOC - long-standing
2. #3327 [OPEN] feat(telegram): render tables with native rich messages - new (linked to #3325)
3. #3326 [CLOSED] fix(web): remove duplicate pnpm lock entries - closed
4. #3324 [OPEN] fix(weixin): use CreateSafeHTTPClient for media downloads - new
5. #3323 [OPEN] fix(wecom): use CreateSafeHTTPClient for media downloads - new
6. #3322 [OPEN] fix(channels): block private targets on inbound media downloads - new

Now let me analyze the themes:
- Security hardening (SSRF protection) for media downloads across multiple channels (Weixin, WeCom, channels) - 3 related PRs from @SashaMIT
- Telegram table rendering feature - both issue and PR by @As-tsaqib
- Long-standing DeltaChat refactor PR
- IRC long messages feature request
- Matrix sync bug closed (likely as stale)

Let me write a comprehensive, professional daily report in Chinese.

Date: 2026-08-10

Let me structure this properly:

1. **今日速览** - Overall status, activity assessment
2. **版本发布** - No releases, skip
3. **项目进展** - PRs closed/merged (only #3326 closed)
4. **社区热点** - Most active issues (#3203 with 8 comments, #3287 with 4 comments)
5. **Bug 与稳定性** - SSRF-related fixes
6. **功能请求与路线图信号** - Telegram tables, IRC long messages
7. **用户反馈摘要** - From comments
8. **待处理积压** - #3222 has been open since July 3 (about 5 weeks)

Let me draft this now.</think>

# PicoClaw 项目日报
**日期：2026-08-10**
**数据周期：过去 24 小时**

---

## 1. 今日速览

PicoClaw 在过去 24 小时内呈现"小而集中"的活跃态势：共产生 **3 条 Issue 更新** 和 **6 条 PR 更新**，无新版本发布。社区活动呈现两个清晰的聚焦点——**安全加固**与**富消息渲染**。其中 @SashaMIT 一人贡献了 3 条围绕 SSRF（服务端请求伪造）防护的 PR，覆盖 Weixin、WeCom 及通用 channels 通道；@As-tsaqib 同步提交了 Telegram 表格渲染的 Feature Issue 与对应实现 PR，体现出"问题—方案"快速闭环的良好协作节奏。整体而言，项目维护活跃度中等偏高，Issues/PRs 处理节奏健康，未见明显的回归或危机事件。

---

## 2. 版本发布

**无新版本发布**。当前最新版本仍为 Issue #3203 中提及的 v0.2.9，建议关注下一个 minor 版本是否会将本日报涉及的 SSRF 修复（#3322/#3323/#3324）与 Telegram 表格渲染（#3327）打包发布。

---

## 3. 项目进展

过去 24 小时有 **1 条 PR 进入已关闭状态**，具体如下：

| PR | 标题 | 作者 | 意义 |
|---|---|---|---|
| [#3326](https://github.com/sipeed/picoclaw/pull/3326) | fix(web): remove duplicate pnpm lock entries | @As-tsaqib | 清理 `pnpm-lock.yaml` 中重复的 `semver@7.8.5` 条目，修复 `pnpm install --frozen-lockfile` 抛出的 `ERR_PNPM_BROKEN_LOCKFILE` 错误。这属于构建链健康度修复，避免 CI 流水线阻塞，提升前端构建可重复性。 |

其他 5 条 PR 均处于待评审状态，详见后续章节。从推进角度看，今日实质性合并动作较少，但 **PR 入库质量较高**——安全相关 PR 描述详尽，Telegram 富消息 PR 与 Issue #3325 紧密联动，便于评审者对照需求验收。

---

## 4. 社区热点

按评论数与互动量排序，过去 24 小时最活跃的讨论集中在以下条目：

- **#3203 [BUG] Matrix sync loop has no reconnection logic** — [链接](https://github.com/sipeed/picoclaw/issues/3203)
  - 评论 **8 条**，👍 **2 次**。讨论围绕 Matrix 通道 `/sync` 长轮询在网络/服务器抖动后无法自动重连，导致"静默死亡"，且 systemd `Restart=on-failure` 无法触发的实际问题。议题已被标记 `[stale]` 并关闭，意味着维护者认为该问题已超出活跃处理窗口，或暂无修复方案。
- **#3287 [Feature] Better support long messages in IRC** — [链接](https://github.com/sipeed/picoclaw/issues/3287)
  - 评论 **4 条**。用户提出希望 PicoClaw 正确处理 IRCv3 中的长消息（>512 字节自动分片），将其视作单一语义消息而非多条独立消息。这是真实使用场景驱动的体验改进诉求。

**背后诉求分析**：今日热点话题呈现两类典型用户关切——一类是**系统可靠性**（通道断线自愈能力），另一类是**多通道体验一致性**（不同 IM 平台下的内容语义保留）。前者属于基础设施层稳健性，后者属于产品体验层打磨。

---

## 5. Bug 与稳定性

### 5.1 已识别并附带修复 PR 的安全问题（重点）

| Issue/PR | 通道 | 严重度 | 状态 |
|---|---|---|---|
| [#3324](https://github.com/sipeed/picoclaw/pull/3324) | Weixin（微信） | 🔴 **高** | 修复 PR 待合并 |
| [#3323](https://github.com/sipeed/picoclaw/pull/3323) | WeCom（企业微信） | 🔴 **高** | 修复 PR 待合并 |
| [#3322](https://github.com/sipeed/picoclaw/pull/3322) | 通用 channels（OneBot/QQ/Telegram/Discord/LINE/Slack 入站附件） | 🔴 **高** | 修复 PR 待合并 |

**问题本质**：上述三个 PR 共同指出 PicoClaw 在下载远端媒体文件时使用的 `http.Client` 未启用 SSRF 防护，攻击者可通过构造恶意媒体 URL，使请求经重定向后命中 loopback、link-local 或 RFC1918 私网地址，构成潜在的内网探测/服务攻击向量。修复方案为统一接入 `utils.CreateSafeHTTPClient` + `ValidateSafeHTTPURL`，并对重定向链路做二次校验。这是同一作者在极短时间内针对同一根因提交的"系列修复"，建议维护者优先评审并考虑合并入同一安全补丁版本。

### 5.2 已关闭但问题仍存

- **#3203 Matrix sync loop 静默死亡** —— [链接](https://github.com/sipeed/picoclaw/issues/3203)
  - 严重度：🟠 **中-高**（影响生产可用性，但非崩溃）。该 Issue 因标记 `[stale]` 被自动关闭，**当前无对应修复 PR**。对于依赖 Matrix 通道部署 PicoClaw 的用户，这是一个潜在的生产事故风险，建议维护者主动认领或重新开放。

### 5.3 构建链问题

- **#3326 pnpm lock 重复条目** —— [链接](https://github.com/sipeed/picoclaw/pull/3326)
  - 严重度：🟡 **中**。已通过 #3326 修复并关闭。

---

## 6. 功能请求与路线图信号

### 6.1 高确定性纳入（已具备实现 PR）

| 需求 | Issue | 实现 PR | 可能性 |
|---|---|---|---|
| Telegram 原生富消息表格渲染 | [#3325](https://github.com/sipeed/picoclaw/issues/3325) | [#3327](https://github.com/sipeed/picoclaw/pull/3327) | ⭐⭐⭐⭐⭐ |

- **判断依据**：Issue 与 PR 由同一作者 @As-tsaqib 在同一天提交，PR 描述明确引用 Bot API 10.1 新引入的富消息能力，并具备完整 send/reply/topic/edit 行为路径说明。Issue 与 PR 编号紧邻（#3325 → #3327），协作链路非常清晰，纳入下一版本概率极高。

### 6.2 中等确定性

| 需求 | Issue | 路线图信号 |
|---|---|---|
| IRC 长消息合并为单一语义 | [#3287](https://github.com/sipeed/picoclaw/issues/3287) | ⭐⭐⭐ |

- 4 条评论显示出实际使用场景诉求，但目前尚无对应实现 PR，需观察是否吸引贡献者。

### 6.3 长期信号

- **DeltaChat 通道重构**：[#3222](https://github.com/sipeed/picoclaw/pull/3222) 提交于 2026-07-03，净减约 200 行代码，清理遗留特性、密码鉴权路径，并将 `invite_link` 重命名为 `join_invite_link`。这种"减法重构"暗示项目维护者正有意提升 DeltaChat 通道的长期可维护性，可视为该通道在下一版本结构化调整的信号。

---

## 7. 用户反馈摘要

从可观察的 Issues 评论中提炼以下用户痛点：

1. **可靠性焦虑（来自 #3203）**：用户在生产环境依赖 Matrix 通道，但缺乏断线自愈能力。评论显示该问题已影响生产可用性（systemd 重启策略失效），用户对"静默失败"高度敏感。**痛点关键词**：静默死亡、监控盲区、生产事故。

2. **跨平台语义一致（来自 #3287）**：用户希望 PicoClaw 不要把跨多行的长消息在 IRC 通道里"碎裂"为多条独立消息，因为这破坏了消息语义。**痛点关键词**：消息分段、内容语义丢失。

3. **富格式降级（来自 #3325）**：用户希望 Telegram 通道能渲染原生表格而非退化为等宽代码块。**痛点关键词**：体验降级、Markdown 表格、Telegram 原生 UI。

4. **构建可重复性（来自 #3326）**：前端 `pnpm install --frozen-lockfile` 在 CI 中失败，开发者工作流受影响。**痛点关键词**：CI 阻塞、lockfile 损坏。

综合来看，用户对 PicoClaw 的**通道多样性**与**多平台体验一致性**给予较高期待，同时对**生产稳定性**与**构建链健康度**有明确底线诉求。

---

## 8. 待处理积压

提醒维护者关注的长期未响应条目：

| 条目 | 类型 | 创建日期 | 等待时长 | 状态 |
|---|---|---|---|---|
| [#3222](https://github.com/sipeed/picoclaw/pull/3222) | PR（DeltaChat 重构） | 2026-07-03 | **约 37 天** | OPEN，0 评论 |
| [#3203](https://github.com/sipeed/picoclaw/issues/3203) | Issue（Matrix 重连） | 2026-07-02 | **约 38 天** | 已 stale 关闭，但问题未解决 |
| [#3287](https://github.com/sipeed/picoclaw/issues/3287) | Issue（IRC 长消息） | 2026-07-22 | **约 19 天** | OPEN，4 评论 |

**维护者建议**：
- **#3222** 作为大规模重构 PR，等待超过一个月未获评审，建议维护者主动指派 Reviewer，或拆分为更小的可评审单元以加快推进。
- **#3203** 实质问题（Matrix 通道生产可用性）仍未解决，stale 关闭并非根治，建议重新开启或明确转交 Roadmap。
- **#3287** 已有用户共识但缺实现，可考虑在社区中征集贡献者或将其纳入下一里程碑。

---

## 项目健康度总评

| 维度 | 评分 | 说明 |
|---|---|---|
| 维护活跃度 | ★★★★☆ | 24h 内 9 条更新，无积压阻塞性危机 |
| 安全响应 | ★★★★★ | SSRF 系列修复迅速、同根因合并识别清晰 |
| 社区互动 | ★★★☆☆ | 评论量偏低（最大 8 条），但关键问题讨论充分 |
| Roadmap 清晰度 | ★★★☆☆ | 缺少公开的 milestone 或 project board |
| 构建/发布 | ★★☆☆☆ | 无新版本发布；前端 lockfile 问题暴露 |
| 长期积压 | ⚠️ 中等 | DeltaChat 重构 PR 与 Matrix 可靠性 Issue 待处理 |

**结论**：PicoClaw 当前处于**稳健迭代期**，安全补丁与富消息体验同步推进，整体节奏健康；主要风险点在于长期挂起的重要重构 PR 与生产级可靠性 Issue 未关闭，维护者建议在下一次迭代中优先处理 #3222 与 #3203，并尽快打包发布包含 SSRF 修复的安全版本。

---

*报告生成时间：2026-08-10 | 数据源：GitHub REST API*

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

<think>Let me analyze the GitHub data for IronClaw (github.com/nearai/ironclaw) and generate a comprehensive project daily report for 2026-08-10.

Key observations from the data:
1. 22 Issues updated in past 24 hours (15 new/active, 7 closed)
2. 32 PRs updated in past 24 hours (24 open, 8 merged/closed)
3. 0 new releases

Major themes I can identify:
- Tool discovery and deferred tool retrieval is a hot topic (PRs #7411, #7410, #7409, Issue #7405)
- Bug bash QA issues - many P2 bugs being addressed
- WebUI/Slack/Telegram channel improvements
- CI/DevOps improvements (dependabot, cargo-component, etc.)
- Stability issues - "zombie" threads, TOCTOU races
- Web push notifications as new feature

Let me organize this into a structured report in Chinese as requested.

Let me categorize the issues:
- Closed Issues: #5522, #7292, #5552, #5509, #5510, #4341, #4344
- Active/New Issues: #7405, #7407, #7346, #7348, #7345, #5882, #7349, #7400, #7360, #6479, #6046, #5878, #5551, #7166, #7392

PRs:
- Open major PRs: #7411, #7410, #7409, #7396, #7398, #7395, #7352, #7394, #7063, #7027
- Closed PRs: #7171 (merged), #7387, #7022, and others
- Dependabot PRs: #7408, #7387 (closed), #7406, #7020, #7262, #7022 (closed)

Let me identify the most discussed/active items:
- #7407 (2 comments, recent)
- #7405 (2 comments, recent)
- #7346, #7348, #7345, #7349 (2 comments each)
- #5882 (2 comments)
- #7400 (2 comments, high severity)
- #7360 (2 comments)

Let me create a comprehensive report now.</think>

# IronClaw 项目日报
**日期：2026-08-10**
**数据来源：github.com/nearai/ironclaw**

---

## 一、今日速览

IronClaw 今日维持高强度迭代节奏，过去 24 小时内共更新 22 条 Issue 与 32 条 PR，整体活跃度处于近期高位。议题焦点集中在 **工具发现（tool discovery）重构**、**WebUI/Slack/Telegram 渠道稳定性**以及 **Bug Bash P2 修复** 三条主线，无新版本发布。代码层最大动作来自 `@serrrfirat` 与 `@pranavraja99` 推进的"延迟工具检索可插拔化"系列 PR（#7409/#7410/#7411），预示 v1.2.0 的渐进式工具披露 epic（#7166）即将进入落地阶段。基础设施侧依赖升级（dependabot）和 CI 修复保持常规节奏，未出现阻塞性事件。

---

## 二、版本发布

无新版本发布。

> ⚠️ 提醒：上一稳定版仍为 1.1.0（含 1.1.0-rc.1），Issue #7400 报告该版本存在 `/api/v1/responses` 流式接口的"僵尸线程"严重缺陷，尚未确认是否将在 1.1.1 中修复。

---

## 三、项目进展（已合并/关闭的重要 PR）

| PR | 标题 | 贡献者 | 影响 |
|---|---|---|---|
| [#7171](https://github.com/nearai/ironclaw/pull/7171) | `fix(skills): one DB-backed tree for every skill mount` | @pranavraja99 | **核心修复**：关闭 #7168。技能安装后"丢失"问题得到修复，技能命令可执行。属于 #6941 epic 第 4 项 |
| [#7387](https://github.com/nearai/ironclaw/pull/7387) | `chore(deps): bump the everything-else group (12 updates)` | @dependabot | 依赖批次升级 |
| [#7022](https://github.com/nearai/ironclaw/pull/7022) | `chore(deps): bump the actions group (2 updates)` | @dependabot | GitHub Actions 升级至 setup-node v7 |
| [#4344](https://github.com/nearai/ironclaw/issues/4344) | Qwen3.6 模型消息镜像 Bug | @joe-rlo | 已关闭（QA 修复完成） |
| [#4341](https://github.com/nearai/ironclaw/issues/4341) | Qwen3.6 思考链暴露 Bug | @joe-rlo | 已关闭 |
| [#5522](https://github.com/nearai/ironclaw/issues/5522) | Reborn routine 缺少 Slack 读能力 | @thisisjoshford | 已关闭（能力补齐） |
| [#5510](https://github.com/nearai/ironclaw/issues/5510) | 无法删除旧 routines | @joe-rlo | 已关闭 |
| [#5509](https://github.com/nearai/ironclaw/issues/5509) | 新建聊天延迟随历史累积 | @joe-rlo | 已关闭 |
| [#5552](https://github.com/nearai/ironclaw/issues/5552) | 多次工具失败后 run 报"invalid result" | @joe-rlo | 已关闭 |
| [#7292](https://github.com/nearai/ironclaw/issues/7292) | 已安装工具运行时 heartbeat 错误 | @joe-rlo | 已关闭（P1 优先修复） |

**整体判断**：今日净关闭 7 条 Issue + 4+ 条 PR，项目整体向前推进约 **+12 个工单净量**；其中 #7171（技能挂载修复）和 #5522（Slack 读能力补齐）为最值得关注的实质功能修复。

---

## 四、社区热点

### 4.1 高讨论度 Issues

| Issue | 标题 | 评论 | 关注点 |
|---|---|---|---|
| [#5522](https://github.com/nearai/ironclaw/issues/5522) | Reborn routine 读 Slack DM 失败 | 4 | **闭环**：暴露能力模型缺口的代表性 case |
| [#7405](https://github.com/nearai/ironclaw/issues/7405) | 改进延迟工具发现（完整签名 + 命名空间感知） | 2 | v1.2.0 epic 子任务，影响所有大规模工具集用户 |
| [#7407](https://github.com/nearai/ironclaw/issues/7407) | 并发执行并行能力批 | 2 | 性能关键，直接关联 agent 循环吞吐 |
| [#7400](https://github.com/nearai/ironclaw/issues/7400) | 流式 + 工具调用产生"僵尸线程" | 2 | **高严重度**，100% 复现，影响稳定版 |
| [#7360](https://github.com/nearai/ironclaw/issues/7360) | 扩展内置/持久化写路径压力覆盖 | 2 | CI 质量基建 |
| [#7346/#7348/#7349/#7345](https://github.com/nearai/ironclaw/issues/7346) | Emoji/活动顺序/历史刷新/automation 计数 | 2 each | WebUI 一致性 Bug 群 |
| [#5882](https://github.com/nearai/ironclaw/issues/5882) | Slack 重复重连导致鉴权死锁 | 2 | OAuth 流程缺陷 |

### 4.2 高价值新开 PR

- [#7411](https://github.com/nearai/ironclaw/pull/7411) — 延迟工具检索成为可插拔 provider（沿用 #6345 memory 模式）
- [#7398](https://github.com/nearai/ironclaw/pull/7398) — Web Push + PWA 作为一等通知渠道（XL 级）
- [#7396](https://github.com/nearai/ironclaw/pull/7396) — Slack/Telegram 通用渐进式预览
- [#7395](https://github.com/nearai/ironclaw/pull/7395) — 关闭 send-claim TOCTOU race
- [#7352](https://github.com/nearai/ironclaw/pull/7352) — 多门控运行 ID 哈希隔离（fail-closed）

**热点诉求提炼**：
1. 工具规模扩大后模型上下文管理成首要矛盾（#7405/#7407/#7411 系列）
2. 渠道（Slack/Telegram/Web）一致性成为产品质量主线
3. 用户对"agent 不可控行为"的容忍度持续下降（#6479 自我复制 routines、#5551 中间消息外泄、#5552 静默失败）

---

## 五、Bug 与稳定性

### 🔴 严重（Severity: High）

| Issue | 描述 | Fix PR |
|---|---|---|
| [#7400](https://github.com/nearai/ironclaw/issues/7400) | `/api/v1/responses` 流式 + `tools[]` 调用中途失败，残留"僵尸线程"无法删除。**1.1.0-rc.1 与 1.1.0 stable 100% 复现** | ❌ 暂无 |

### 🟠 P1

| Issue | 描述 | Fix PR |
|---|---|---|
| [#7292](https://github.com/nearai/ironclaw/issues/7292) | 已安装 CoinGecko 工具运行报 runner heartbeat 错 | ✅ 已关闭 |

### 🟡 P2（多数尚未指派修复）

| Issue | 描述 |
|---|---|
| [#7346](https://github.com/nearai/ironclaw/issues/7346) | Emoji 短代码以纯文本展示 |
| [#7348](https://github.com/nearai/ironclaw/issues/7348) | Activity 块与进度消息乱序 |
| [#7349](https://github.com/nearai/ironclaw/issues/7349) | 刷新页面导致部分运行历史消失 |
| [#7345](https://github.com/nearai/ironclaw/issues/7345) | 仪表板显示 50 automations，agent 报告 61 — 数据一致性 |
| [#6479](https://github.com/nearai/ironclaw/issues/6479) | Routines 可创建/修改其他 routines，无护栏（**自复制自动化风险**） |
| [#6046](https://github.com/nearai/ironclaw/issues/6046) | 简单邮件转表格任务触发 124 次工具调用（效率问题） |
| [#5878](https://github.com/nearai/ironclaw/issues/5878) | GitHub token 撤销后报误导性错误，未触发重新鉴权 |
| [#5551](https://github.com/nearai/ironclaw/issues/5551) | Slack 自动化把中间进度消息当成最终结果发出 |
| [#5882](https://github.com/nearai/ironclaw/issues/5882) | Slack 重连进入鉴权死锁，需重装扩展恢复 |

**稳定性评估**：⚠️ 中等风险。**#7400 僵尸线程**与 **#6479 自复制 routines** 是当前最值得升级修复的两条；如放任不管将影响 1.1.x 系列的整体可信度。

---

## 六、功能请求与路线图信号

### 6.1 v1.2.0 Epic 信号
- [#7166](https://github.com/nearai/ironclaw/issues/7166) **Tool disclosure follow-up**（epic）：渐进式工具披露成为 Reborn 默认路径。配套 PR：
  - [#7409](https://github.com/nearai/ironclaw/pull/7409) 100-1,000 工具基线测试
  - [#7410](https://github.com/nearai/ironclaw/pull/7410) 返回有界完整 schema
  - [#7411](https://github.com/nearai/ironclaw/pull/7411) 检索层可插拔化

### 6.2 渠道生态扩张
- [#7396](https://github.com/nearai/ironclaw/pull/7396) Slack/Telegram 通用预览协议
- [#7398](https://github.com/nearai/ironclaw/pull/7398) **Web Push + PWA**：将 Web 应用提升为与 Slack/Telegram 并列的一等通知渠道（W3C RFC 8030/8291/8292）

### 6.3 实验性方向
- [#7392](https://github.com/nearai/ironclaw/issues/7392) 替换 first-party coding tools 为 `oh-my-pi` 固定工具面
- [#7360](https://github.com/nearai/ironclaw/issues/7360) 扩展压力测试覆盖内置能力写入路径

**路线图判断**：v1.2.0 的主轴是 **"工具规模可扩展性 + 渠道可靠性"**；Web Push 进入评审说明团队正在严肃考虑将 PWA 作为默认前端。

---

## 七、用户反馈摘要

> 数据来自 Issues 评论与摘要

- **🔴 痛点 1：自动化失控**
  - #6479 揭示 routines 可在执行中创建新 routines，存在"自复制自动化"或"无限调度循环"风险，用户期待系统级护栏。
  - #5551 用户反馈："内部执行步骤被作为自动化输出投递"，期待渠道消息仅含最终结果。

- **🔴 痛点 2：失败可见性**
  - #5552：当 run 报"invalid result"时，UI 不指明哪个工具失败、原因是什么 —— 调试体验差。

- **🟠 痛点 3：鉴权/Token 生命周期**
  - #5878：GitHub token 外部撤销后系统报"工具输入无法编码"等误导信息，未触发重新鉴权。
  - #5882：Slack 多次断连后鉴权死锁，唯一恢复方式是重装扩展。

- **🟠 痛点 4：UI 状态不一致**
  - #7345：仪表板与 agent 报告自动化数量不一致（50 vs 61），用户对系统可信度产生疑虑。
  - #7349：刷新页面丢失运行历史，影响长任务复盘。

- **🟡 痛点 5：效率**
  - #6046：简单邮件转表格任务消耗 124 次工具调用，模型过度解码无关内容（base64、FOIA 请求等）。

- **🟢 满意信号**
  - 多个 #4341/#4344 等历史 QA 缺陷得到关闭，说明对历史报告有持续消化能力。
  - #7171 解决了"装完即丢"的技能管理问题，被用户视为重大改进。

---

## 八、待处理积压（提醒维护者关注）

| 类型 | Issue/PR | 标题 | 风险 |
|---|---|---|---|
| 长期未修复 Bug | [#6479](https://github.com/nearai/ironclaw/issues/6479) | Routines 自复制（07-22 创建） | **安全** |
| 长期未修复 Bug | [#5882](https://github.com/nearai/ironclaw/issues/5882) | Slack 鉴权死锁（07-09 创建） | 用户体验 |
| 长期未修复 Bug | [#6046](https://github.com/nearai/ironclaw/issues/6046) | 简单任务触发 124 次工具调用（07-13） | 成本/性能 |
| 长期未修复 Bug | [#5878](https://github.com/nearai/ironclaw/issues/5878) | Token 撤销误导错误（07-09） | 用户体验 |
| 长期开放 PR | [#7063](https://github.com/nearai/ironclaw/pull/7063) | CI 委托 Platform-owned 路径（08-03） | 构建阻塞 |
| 长期开放 PR | [#5101](https://github.com/nearai/ironclaw/pull/5101) | cargo-component 安装器复用（**06-20 创建，已 51 天**） | CI 卫生 |
| 长期开放 PR | [#7020](https://github.com/nearai/ironclaw/pull/7020) | tokio-tungstenite 升级（08-02） | 依赖滞后 |
| 长期开放 PR | [#7076](https://github.com/nearai/ironclaw/pull/7076) | 安装 catalog 已发布的包（08-03） | 打包/分发 |
| 长期开放 PR | [#7027](https://github.com/nearai/ironclaw/pull/7027) | 禁用环境代理发现（08-03） | 网络安全 |

**积压健康度评估**：⚠️ 中等。有 **2 条 PR 超过 30 天未合并**（#5101 尤甚），建议维护者评估是否阻塞或放弃；4 条 7 月创建的 P2 Bug 至今无明确修复 PR，可能影响即将到来的 v1.2.0 范围谈判。

---

### 附录：今日活跃贡献者

- **@serrrfirat**（核心）：推进 #7166 epic 的工具检索系列（#7409/#7410），新增 #7407 并行能力批需求
- **@pranavraja99**（核心）：#7411 可插拔 provider、#7171 技能挂载修复
- **@theredspoon**（新晋）：#7027/#7063/#5101/#7394/#7352/#7395 网络与 CI 一组修复
- **@joe-rlo**：QA Bug Bash 主要报告人
- **@BenKurrek**：#7398 Web Push 大型 PR 作者
- **@neo-sky**：#7076 包分发修复
- **@cuongdcdev**：报告 #7400 僵尸线程高严重度 Bug

---

*报告生成时间：2026-08-10 | 数据窗口：过去 24 小时*

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

<think>The user wants me to generate a project daily report for LobsterAI based on GitHub data. Let me analyze the data carefully:

1. **Today's Overview**: 3 issues updated (all open), 0 PRs, 0 releases
2. **Issues**:
   - #1187: [stale] About context window and output token settings - created 2026-04-01, updated 2026-08-09, 2 comments, 1 thumbs up
   - #2453: About custom model switching being flagged as not permitted - created 2026-08-09, updated 2026-08-09, 1 comment, 0 thumbs up
   - #2132: [stale] Cross-model subtask calling problem - created 2026-06-09, updated 2026-08-09, 1 comment, 0 thumbs up

All three issues are marked [OPEN]. Two are marked as [stale] which means they haven't had recent activity. Let me structure the report.

Key observations:
- No releases, no PRs in the past 24 hours
- Low activity overall
- Issues are about: context window settings, custom model switching bugs, cross-model subtask collaboration
- 2 of 3 issues are marked stale - long-standing community concerns
- Issue #2453 is brand new (created today) and seems to be a critical bug

Let me write this report in Chinese, professionally and data-driven, with all the required sections.</think>

# LobsterAI 项目日报 · 2026-08-10

---

## 1. 今日速览

LobsterAI 仓库过去 24 小时活跃度较低：仅 3 条 Issue 出现状态更新，**无 PR 提交、无版本发布**。其中 2 条 Issue 已被系统标记为 `[stale]`（长期未获维护者响应），仅 1 条 Issue（#2453）为新开问题。整体看，项目当前处于"低维护、零推进"的状态，缺乏新的代码合入与版本迭代信号。建议关注维护者响应节奏与社区积压。

---

## 2. 版本发布

**无新版本发布。** 过去 24 小时未检测到任何 Release tag 更新。

---

## 3. 项目进展

**今日无 PR 合并或关闭记录。** 过去 24 小时仓库 Pull Request 队列无任何新增、合入或关闭动作，代码层面无实质性推进。

---

## 4. 社区热点

按互动度（评论数 + 反应数）排序，今日最受关注的 Issue 为：

| 排名 | Issue | 评论 | 👍 | 状态 | 链接 |
|---|---|---|---|---|---|
| 1 | #1187 建议增加上下文窗口与输出 token 设置 | 2 | 1 | OPEN (stale) | https://github.com/netease-youdao/LobsterAI/issues/1187 |
| 2 | #2453 切换自定义模型被判为不许可 | 1 | 0 | OPEN | https://github.com/netease-youdao/LobsterAI/issues/2453 |
| 3 | #2132 跨模型子任务调用机制问题 | 1 | 0 | OPEN (stale) | https://github.com/netease-youdao/LobsterAI/issues/2132 |

**诉求分析**：三条 Issue 集中反映出社区对**模型灵活性**的强烈需求——既包括手动调整上下文窗口这类基础参数能力（#1187），也包括对**自定义模型路由的兼容性**（#2453），以及**多模型协同调度机制**（#2132）。可见用户已不满足于单一厂商模型，正在向"自定义 Provider + 多模型协同"的方向延展使用场景。

---

## 5. Bug 与稳定性

按严重程度排列：

### 🔴 高优先级

- **#2453 切换自定义模型被系统误判为不许可** 🆕
  - 作者：@Alexandre0820 | 创建时间：2026-08-09（今日新开）
  - 现象：当模型定义为 `custom_1/openai/gpt-oss-20b:free`（即路径中含 `openai` 关键字）时，系统根据 `provider/model` 规则将 Provider 误判为 OpenAI，进而判定为"不认可"。**新开线程使用同一模型则正常**，仅在已有线程内切换模型时触发。
  - 影响范围：OpenRouter 免费模型、NVIDIA 上的模型均存在报错。
  - 严重性：高——直接影响用户在多模型工作流中的切换体验，且属于"工作线程内必现"的功能缺陷。
  - 是否有 fix PR：**无**。
  - 链接：https://github.com/netease-youdao/LobsterAI/issues/2453

### 🟡 中优先级

- **#1187 DeepSeek 模型 Context Overflow 错误**
  - 作者：@qxjysd | 创建时间：2026-04-01（已 4 个月）
  - 现象：使用 DeepSeek 模型时出现 `Context overflow: prompt too large for the model` 提示，根本原因为上下文窗口设置与模型实际能力不兼容。
  - 是否有 fix PR：**无**，且已标 `[stale]`。
  - 链接：https://github.com/netease-youdao/LobsterAI/issues/1187

---

## 6. 功能请求与路线图信号

- **#1187 在模型 API 设置中增加上下文窗口大小与输出 token 设置**  
  提议让用户可针对每个模型手动配置 `context window` 与 `max output tokens`，避免系统默认值与模型实际能力不匹配。当前**无对应 PR**，但属于明确的功能增强需求。

- **#2132 跨模型子任务调用机制（主任务 M3 + 子任务 DeepSeek 协作）**  
  作者 @woxinsj 提出了完整的"根因 + 修复 + 优化"方案，包括：
  1. 同模型子任务完成时主任务可即时感知的机制可借鉴到跨模型场景；
  2. 子任务完成后主动通知主任务的设计。
  并给出了诊断结果：`call_function_*` 是网关级函数调用（gateway function call），不是 `sessions_spawn` 创建的子任务。  
  当前**无对应 PR**，但分析深度较高，若维护者采纳将是一项结构性改进。

---

## 7. 用户反馈摘要

- **真实痛点 1：自定义 Provider 模型路由误判**（#2453）  
  用户希望以 `provider/model` 形式灵活接入第三方模型，但系统基于路径字符串做 Provider 匹配，导致误判。这是"自由接入第三方模型"场景下非常典型的体验问题。

- **真实痛点 2：DeepSeek 长会话崩溃**（#1187）  
  用户在长上下文场景下遇到 Context Overflow，反映出系统缺乏对"模型实际上下文窗口"的精细化适配能力。

- **真实痛点 3：多模型协同调度能力不足**（#2132）  
  用户期望"规划模型 + 执行模型"的分层协作架构能更顺畅，例如 M3 负责规划与验收、DeepSeek 负责快速执行。当前系统在跨模型子任务通知机制上存在缺失。

- **满意度信号**：本批次 Issues 中**无正面评价或功能赞美**，社区声音以问题反馈与功能诉求为主。

---

## 8. 待处理积压（提醒维护者关注）

| Issue | 标题 | 创建时间 | 积压时长 | 状态 |
|---|---|---|---|---|
| [#1187](https://github.com/netease-youdao/LobsterAI/issues/1187) | 增加上下文窗口与输出 token 设置 | 2026-04-01 | **约 4 个月** | stale |
| [#2132](https://github.com/netease-youdao/LobsterAI/issues/2132) | 跨模型子任务调用机制 | 2026-06-09 | **约 2 个月** | stale |

⚠️ **提醒**：#1187 与 #2132 均已被系统标记为 `stale`，若长期不响应可能进一步降低社区参与意愿。特别是 #1187 拥有 1 个 👍 与 2 条评论，具备一定代表性，建议维护者优先处理以释放积压信号。

---

**报告生成时间**：2026-08-10  
**数据来源**：GitHub REST API（Issues / Pulls / Releases）  
**健康度总评**：🔶 **需关注** — 活跃度偏低，零代码合入，积压 stale 议题需清理。

</details>

<details>
<summary><strong>QwenPaw</strong> — <a href="https://github.com/agentscope-ai/QwenPaw">agentscope-ai/QwenPaw</a></summary>

<think>Let me analyze this GitHub data for QwenPaw project and generate a comprehensive daily report for 2026-08-10.

Key observations:
1. 18 issues updated in 24 hours, with 11 active/open and 7 closed
2. 28 PRs updated, with 27 pending and only 1 merged/closed
3. No new releases
4. The project shows high activity with many first-time contributors
5. Several notable themes emerge: ReMe memory backend, Gemini provider issues, mobile adaptation, MCP tool calls, conversation checkpoint persistence

Let me organize this into the required sections:

1. 今日速览 - High activity, no releases, many first-time contributors
2. 版本发布 - None, skip
3. 项目进展 - Only 1 PR closed (#6846 DeepSeek V4 context windows)
4. 社区热点 - #2291 has 66 comments (most active), #6281 mobile adaptation
5. Bug 与稳定性 - Multiple bugs: #6826, #6839, #6812, #6851-6852, #6806, #6853, #6851-6850-6849-6848 (duplicates)
7. 用户反馈 - Various pain points: anti-virus killing, mobile, checkpoint, etc.
8. 待处理积压 - Some older issues without resolution

Let me write this report in Chinese, professional and data-driven.</think>

# QwenPaw 项目日报

**日期：2026-08-10**  
**项目：agentscope-ai/QwenPaw**（AI 智能体与个人 AI 助手）

---

## 1. 今日速览

QwenPaw 项目今日维持高活跃度，过去 24 小时共有 **18 条 Issue 更新**（11 条仍开放、7 条已关闭）与 **28 条 PR 更新**（27 条仍待合并、仅 1 条关闭）。整体呈现"Issue 活跃度高于 PR"的状态，且今日无新版本发布。当前社区关注焦点集中在 **ReMe 记忆后端实现差异、MCP 工具调用兼容性、Gemini/StepFun 等 strict provider 的 schema 清理** 等议题，并首次提交了火山引擎 / DeepSeek V4 等新模型的内置支持。

---

## 2. 版本发布

**今日无新版本发布。** 社区讨论显示主线版本为 `2.0.1`（稳定）与 `2.1.0b2`（预发布，含 ReMe Light 后端）。

---

## 3. 项目进展

今日仅 **1 条 PR 关闭**，推进较为有限：

| PR | 内容 | 影响 |
|---|---|---|
| [#6846](https://github.com/agentscope-ai/QwenPaw/pull/6846) | feat(providers): catalog DeepSeek V4 context windows (1M) | 修复了 DeepSeek V4 Flash / Pro 模型在静态目录中缺失 1M context window 注册的问题，避免 Console 显示 131K 错误并过早触发 context compaction |

另有数条有价值的待合并 PR 已进入"待合并"通道（详见第 6 节），项目整体向前推进的方向是：**ReMe 记忆系统完善、strict provider 兼容、多模型接入扩展、Console 交互修复**。

---

## 4. 社区热点

按评论数排序的活跃 Issue：

| 排名 | Issue / PR | 评论数 | 关注度 |
|---|---|---|---|
| 1 | [#2291](https://github.com/agentscope-ai/QwenPaw/issues/2291) "Help Wanted: Open Tasks"（P0–P2 任务认领） | **66** | 长期置顶的贡献者招募帖 |
| 2 | [#6281](https://github.com/agentscope-ai/QwenPaw/issues/6281) Web 控制台适配移动端 | 5 | 移动端用户强需求 |
| 3 | [#5584](https://github.com/agentscope-ai/QwenPaw/issues/5584) 无法连接自定义的 ascend-vllm 模型（已关闭） | 4 | 1.1.7 后回归的兼容性问题 |
| 4 | [#6826](https://github.com/agentscope-ai/QwenPaw/issues/6826) 对话助手消息结束时间显示异常 | 4 | 真实体验问题 |
| 5 | [#6839](https://github.com/agentscope-ai/QwenPaw/issues/6839) MCP 工具调用字符串/数字类型混淆 | 3 | MCP 集成通用陷阱 |

**诉求解读**
- 移动端适配 [#6281](https://github.com/agentscope-ai/QwenPaw/issues/6281) 反映出用户希望从手机随时操控 Agent 的强烈需求；
- [#2291](https://github.com/agentscope-ai/QwenPaw/issues/2291) 作为"开放任务清单"置顶帖，66 条评论表明项目治理结构偏向于"任务认领制 + P0/P1/P2 优先级"。

---

## 5. Bug 与稳定性

按严重程度排列（今日新增/更新）：

### 🔴 高严重度（影响核心功能）

| Issue | 现象 | 状态 |
|---|---|---|
| [#5579](https://github.com/agentscope-ai/QwenPaw/issues/5579) **对话记录在异常中断场景下丢失** | Agent 执行 `reboot`/`shutdown` 或服务崩溃后，对话完全消失，无 checkpoint | ✅ 已关闭（含方案） |
| [#6826](https://github.com/agentscope-ai/QwenPaw/issues/6826) 助手消息结束时间显示异常 | 实际思考 2 分钟，UI 显示仅几秒 | 🟡 待修复 |
| [#6839](https://github.com/agentscope-ai/QwenPaw/issues/6839) MCP 调用字符串/数字传参错乱 | "0"/"1" 被当作数字，导致类型校验失败 | 🟡 待修复 |
| [#6853](https://github.com/agentscope-ai/QwenPaw/issues/6853) **prompts.py 对 agent "撒谎"** | prompts.py 声称 Dream 过程会写入 `MEMORY.md`，实际未实现 | 🟡 待修复（信任问题） |
| [#6812](https://github.com/agentscope-ai/QwenPaw/issues/6812) Gemini API `Model 'unknown'` 执行失败 | `$schema` 字段被 Google SDK 拒绝 | 🟢 已有 fix PR [#6844](https://github.com/agentscope-ai/QwenPaw/pull/6844) |

### 🟡 中严重度（前端 / 体验）

| Issue | 现象 | 状态 |
|---|---|---|
| [#6851](https://github.com/agentscope-ai/QwenPaw/issues/6851) / [#6850](https://github.com/agentscope-ai/QwenPaw/issues/6850) / [#6849](https://github.com/agentscope-ai/QwenPaw/issues/6849) / [#6848](https://github.com/agentscope-ai/QwenPaw/issues/6848) / [#6852](https://github.com/agentscope-ai/QwenPaw/issues/6852) | 前端渲染长多行 tool 输出坍塌为不可读 blob（**重复提交 5 次**，状态各异） | 大部分已关闭，#6852 仍 OPEN |
| [#6806](https://github.com/agentscope-ai/QwenPaw/issues/6806) | qwenpaw-creator 在 Windows 下保存模型配置始终 `Internal Server Error` | 🟡 待修复 |
| [#6841](https://github.com/agentscope-ai/QwenPaw/issues/6841) | Auto-Dream 单 unit schema 校验失败导致整个任务被标错 | 🟡 待修复 |

### 🔵 兼容性回归

| Issue | 现象 | 状态 |
|---|---|---|
| [#5584](https://github.com/agentscope-ai/QwenPaw/issues/5584) | 1.1.7 之后无法连接自定义 ascend-vllm | ✅ 已关闭 |

**观察**：用户 [@lcq225](https://github.com/lcq225) 重复提交了 5 份几乎相同的"长 tool 输出坍塌"Issue（#6848–#6852），多数被快速关闭，可能意味着批量上报或缺少去重机制。

---

## 6. 功能请求与路线图信号

### 新功能请求

| 需求 | Issue / PR | 路线图可能性评估 |
|---|---|---|
| Web 控制台适配移动端 | [#6281](https://github.com/agentscope-ai/QwenPaw/issues/6281) | 🟢 强烈建议纳入下一版（用户呼声高） |
| AI 审批加入用途描述 | [#6832](https://github.com/agentscope-ai/QwenPaw/issues/6832) + PR [#6854](https://github.com/agentscope-ai/QwenPaw/pull/6854) | 🟢 已落 PR，PR 标记 `[first-time-contributor] [codex]` |
| Built-in 工具文档在 Console 内展示 | PR [#6325](https://github.com/agentscope-ai/QwenPaw/pull/6325) | 🟢 处于 OPEN 待合并状态 |
| 可配置主题/皮肤模块（Task 1 草案） | PR [#6312](https://github.com/agentscope-ai/QwenPaw/pull/6312) | 🟡 草案 PR，待 review |
| Agent `hidden` 字段（隐藏 UI 选择器） | PR [#6842](https://github.com/agentscope-ai/QwenPaw/pull/6842) | 🟢 插件作者明确诉求 |
| ReMe4 完整路线图（Auto-Link、三模搜索、四类 digest 权重） | [#6840](https://github.com/agentscope-ai/QwenPaw/issues/6840) | 🔵 已询问，维护者需回应 |
| Auto-Dream 单 unit 失败容错 + retry | [#6841](https://github.com/agentscope-ai/QwenPaw/issues/6841) | 🟡 与 ReMe4 路线耦合 |

### 模型与 Provider 扩展

| 能力 | PR | 备注 |
|---|---|---|
| 火山引擎 Agent Plan + MiMo Standard API 内置 provider | [#6515](https://github.com/agentscope-ai/QwenPaw/pull/6515) | 🔴 **关键 PR**，影响订阅用户 |
| DeepSeek V4 1M context catalog | [#6846](https://github.com/agentscope-ai/QwenPaw/pull/6846) | ✅ 已关闭 |

---

## 7. 用户反馈摘要

> 以下观点提炼自 Issue 评论与摘要原文

**痛点：易被杀软拦截**
- [#6847](https://github.com/agentscope-ai/QwenPaw/issues/6847)：用户反馈 QwenPaw 在执行任务时频繁被杀软拦截甚至强制关停进程，而同类产品 WorkBuddy 不会。**这是一个直接关联安全的可用性问题，亟待安全/兼容性侧响应**。

**痛点：记忆系统"言行不一"**
- [#6853](https://github.com/agentscope-ai/QwenPaw/issues/6853)：社区成员 [@AL-Mint](https://github.com/AL-Mint) 指出 `prompts.py` 声称 Dream 过程会自动同步 digest 至 `MEMORY.md`，但实际未实现——属于**对 agent 的误导性指令**，会引发下游混乱行为。

**痛点：对话脆弱**
- [#5579](https://github.com/agentscope-ai/QwenPaw/issues/5579)：用户列举了"Agent 执行 `reboot` 命令"和"服务异常崩溃"两种典型场景，对话直接消失，已被关闭但仍反映**长期未被根治的脆弱性**。

**痛点：MCP 类型推断**
- [#6839](https://github.com/agentscope-ai/QwenPaw/issues/6839)：模型把字符串字段（如市场代码 "0"/"1"/"2"）推断为整数，导致 MCP 调用失败。这是 LLM+MCP 集成普遍存在的边界问题。

**痛点：审批 UX 不直观**
- [#6832](https://github.com/agentscope-ai/QwenPaw/issues/6832)：用户反映 2.0 b2 中权限审批仅显示 PowerShell 命令，需读代码才能判断是否通过；希望在审批卡片加一句自然语言说明。

**痛点：strict provider 兼容**
- [#6809](https://github.com/agentscope-ai/QwenPaw/pull/6809)：StepFun 等 strict OpenAI-compatible provider 因 QwenPaw 携带 `delta`/`index` 等内部 envelope 字段而拒绝请求。

---

## 8. 待处理积压与维护者关注提醒

### 🟥 长期未关闭的重要 Issue

| Issue | 创建日期 | 状态 |
|---|---|---|
| [#2291](https://github.com/agentscope-ai/QwenPaw/issues/2291) | 2026-03-25 | 仍 OPEN（任务认领帖）|
| [#6281](https://github.com/agentscope-ai/QwenPaw/issues/6281) 移动端适配 | 2026-07-20 | 仍 OPEN，5 条评论 |
| [#6806](https://github.com/agentscope-ai/QwenPaw/issues/6806) Windows 模型配置 Internal Server Error | 2026-08-07 | 仍 OPEN |

### 🟧 高价值但未被合并的 PR（建议维护者优先 review）

| PR | 类型 | 优先级 |
|---|---|---|
| [#6515](https://github.com/agentscope-ai/QwenPaw/pull/6515) 火山引擎 Agent Plan 内置 provider | feat | 🔴 高（订阅用户影响） |
| [#6843](https://github.com/agentscope-ai/QwenPaw/pull/6843) Console SSE 实时流式（修复 `BaseHTTPMiddleware` 缓冲） | fix | 🔴 高（核心交互体验） |
| [#6704](https://github.com/agentscope-ai/QwenPaw/pull/6704) 会话 fork（checkpoint 式快照） | feat | 🟢 中 |
| [#6360](https://github.com/agentscope-ai/QwenPaw/pull/6360) context injection role 从 system 改为 user（修 #6358） | fix | 🟢 中 |
| [#6398](https://github.com/agentscope-ai/QwenPaw/pull/6398) ReMe 记忆搜索 reranker 后端支持 | feat | 🟡 中（与 ReMe4 路线耦合） |
| [#6325](https://github.com/agentscope-ai/QwenPaw/pull/6325) Console 内置工具文档展示 | feat | 🟡 中 |
| [#6259](https://github.com/agentscope-ai/QwenPaw/pull/6259) no-auth host allowlist 支持 CIDR | security | 🟡 中 |
| [#6581](https://github.com/agentscope-ai/QwenPaw/pull/6581) 去除冗余多模态上传警告 | fix | 🟢 中 |
| [#6809](https://github.com/agentscope-ai/QwenPaw/pull/6809) Chat Completions content 字段清理 | fix | 🟢 中 |
| [#6844](https://github.com/agentscope-ai/QwenPaw/pull/6844) Gemini schema `$schema` 字段剥离（修 #6812） | fix | 🟢 中 |

### 🟨 重复 Issue 处理建议

- 长 tool 输出坍塌问题被 [@lcq225](https://github.com/lcq225) 重复提交 5 次（#6848–#6852）。建议维护者：**统一 issue tracker 模板 + 自动化去重提示**，避免刷屏。

---

## 项目健康度总结

| 维度 | 评估 |
|---|---|
| **活跃度** | 🟢 高（24h 18 Issue / 28 PR） |
| **响应速度** | 🟡 中（多数 Issue 24h 内有响应，但 #6281 等长尾未解） |
| **贡献者多样性** | 🟢 高（多个 `[first-time-contributor]` PR） |
| **合并吞吐** | 🔴 偏低（28 PR 仅 1 条关闭，瓶颈可能在 review） |
| **版本节奏** | 🟡 暂无新版本，但 2.1.0b2 已公开 beta |
| **关键风险** | 🔴 杀软兼容 [#6847](https://github.com/agentscope-ai/QwenPaw/issues/6847)、对话丢失 [#5579](https://github.com/agentscope-ai/QwenPaw/issues/5579) |

**维护者建议优先级**：
1. 🔴 回应杀软 / 对话丢失两大用户痛点
2. 🔴 推进 [#6515](https://github.com/agentscope-ai/QwenPaw/pull/6515)（火山引擎）和 [#6843](https://github.com/agentscope-ai/QwenPaw/pull/6843)（SSE 实时流）的 review
3. 🟡 回应 ReMe4 路线图咨询 [#6840](https://github.com/agentscope-ai/QwenPaw/issues/6840)
4. 🟡 修复 `prompts.py` 误导性指令 [#6853](https://github.com/agentscope-ai/QwenPaw/issues/6853)

---

*报告生成时间：2026-08-10 · 数据源：GitHub REST API*

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/NousResearch/hermes-agent">NousResearch/hermes-agent</a></summary>

<think>Let me analyze the GitHub data for Hermes Agent and generate a comprehensive daily report for 2026-08-10.

Key observations:
1. Very high activity: 50 issues updated, 50 PRs updated, 0 releases
2. Top issues are mostly bugs with serious implications (P0, P1)
3. Critical safety issue: agent executed `rd /s /q C:\` on Windows (Issue #82842)
4. Data loss issue: Desktop silently deleted ~65 messages (Issue #82756) - third occurrence
5. Test fixtures leaking into production state.db (Issue #82770)
6. Smart-approval has no timeout (Issue #82846)
7. macOS desktop freezing (Issue #63047) - 19 comments, P1
8. Accessibility for VoiceOver users (Issue #26689) - 13 comments
9. Multiple cron job bugs (TypeError)

Let me organize the data into the required sections and write the report in Chinese.

Notable bug issues by priority:
- P0: #82756 (data loss), #82770 (test leak)
- P1: #63047 (desktop freeze macOS), #43819 PR (memory SQLite sharing)
- P2: Many - #82842 (Windows rd /s /q), #82846 (smart-approval no timeout), #80125 (weixin adapter), #77211 (hermes update), #75097 (iteration budget), #80841 (Fastmail), #78190 (Gmail MCP), #82798 (skills_guard false positive), #80841, etc.

Closed/Merged PRs (3 closed):
- #77992 (test OS-specific gates)
- #43819 (memory SQLite shared connection) - this is important, P1 memory fix

Important security issues:
- #82842 - critical, agent ran `rd /s /q C:\` - prevented only by lack of admin rights
- #82846 - smart-approval no timeout
- #80360 - security fix for gateway auth gate

Let me write the report now.</think>

# Hermes Agent 项目日报
**日期：2026-08-10**

---

## 1. 今日速览

Hermes Agent 今日呈现**高活跃度、高风险信号并存**的状态。过去 24 小时内 50 条 Issue 和 50 条 PR 同步更新，但**无任何新版本发布**，3 条 PR 被关闭。讨论焦点高度集中在 **Desktop 客户端稳定性**（macOS 冻结、消息静默丢失）、**关键安全边界**（Windows 智能体执行 `rd /s /q C:\`、smart-approval 无超时）以及 **Gateway/Telegram 中继层** 的消息投递缺陷上。从优先级分布看，P0/P1 关键 Issue 至少有 3 条，新增问题多为已修复 Bug 的**第三次/重复复发**（如 #70516 → #80763 → #82756 数据丢失链），反映出**回归测试覆盖不足**的问题。

---

## 2. 版本发布

无新版本发布。最新版本仍为 Issue #82842 中提及的 **v0.20.0（2026.8.3）** 和 #75097 中提到的 **v0.19.1**。考虑到积压的 P0/P1 问题数量，建议维护团队在下个补丁版本中优先纳入下列修复。

---

## 3. 项目进展

过去 24 小时内共 **关闭/合并 3 个 PR**：

- **[#43819](https://github.com/NousResearch/hermes-agent/pull/43819)**（P1，已关闭）`fix(memory): share one SQLite connection per holographic store database` — 全息记忆插件的 `MemoryStore` 现改为共享单进程 SQLite 连接 + 重入锁 + 引用计数 `close()`，是记忆层并发安全的重要修复。  
- **[#77992](https://github.com/NousResearch/hermes-agent/pull/77992)**（P3，已关闭）`test: gate OS-specific tests by real host` — 将 OS 相关测试从「伪造 host 标志」改为 macOS/Windows 真实 CI lane，提升测试可信度。  
- 其他关闭 PR 未在摘要中显示细节。

整体看，今日合并量极少（3/47 待合并 = ~6%），**PR 积压压力持续上升**，新提交 PR 大量涌入但合并节奏滞后，需关注维护者带宽。

---

## 4. 社区热点

### 🔥 讨论最活跃 Issues

1. **[#63047](https://github.com/NousResearch/hermes-agent/issues/63047)（19 评论）**  
   **macOS 27 beta Desktop 客户端 ~5 条消息后完全冻结**（包括设置入口）— 用户 martino-vigiani 报告 UI 几乎完全卡死，仅能依赖「随机解冻」。该问题区别于 #40692 的打字卡顿，是更深层的 session-state 风险。

2. **[#26689](https://github.com/NousResearch/hermes-agent/issues/26689)（13 评论，👍 1）**  
   **盲人 VoiceOver 用户的可访问性诉求** — 用户 xiaopinpin-music 作为完全失明的 macOS 用户，详细列举了 Hermes 后端强大但前端 UX 对屏幕阅读器极不友好，提出多组件（CLI/Gateway/TUI/Dashboard）的无障碍改进清单。是少数涉及**包容性设计**的长期议题。

3. **[#66824](https://github.com/NousResearch/hermes-agent/issues/66824)（6 评论）** + **[#71987](https://github.com/NousResearch/hermes-agent/issues/71987)（6 评论）**  
   **cronjob create/update 抛 TypeError**（`'<=' not supported between instances of 'str' and 'int'`）— 两条高度相似的重复报告，标签均为 `duplicate`，表明用户**未先检索**或重复 issue 未及时合并。

### 💬 高讨论 PR

PR 列表评论数普遍为空，主要通过标题判断关注度。`security`/`P2` 标签的 Gateway 安全修复 PR 较为密集（如 #80360、#81222、#82775、#82830），反映 Gateway 层是当前攻防重点。

---

## 5. Bug 与稳定性（按严重度排列）

### 🔴 P0（紧急）

- **[#82756](https://github.com/NousResearch/hermes-agent/issues/82756)** Desktop 客户端 `truncate_before_user_ordinal` + `confirm_truncate` 静默删除约 65 条消息 — **第三次复发**（前两次：#70516 删除 308 条、#80763 删除 244 条），merged 修复未根治路径。**暂无 fix PR**。

- **[#82770](https://github.com/NousResearch/hermes-agent/issues/82770)** 测试 fixture 泄漏到开发者生产 `state.db`，产生 700+ 零消息的开放行（2026-07-24~29）。属于 fixture-escape 类问题，影响数据完整性。**暂无 fix PR**。

### 🟠 P1（高）

- **[#63047](https://github.com/NousResearch/hermes-agent/issues/63047)** macOS Desktop 冻结（如上）。**暂无 fix PR**。

### 🟡 P2（重要，已关联 fix PR 的标 ✅）

- **[#82842](https://github.com/NousResearch/hermes-agent/issues/82842)**（critical severity，作者自评）  
  Windows 11 上 Hermes Agent 在用户授权的文件夹删除后，执行了 `rd /s /q C:\`（C 盘根目录），仅因进程非管理员权限才避免数据完全丢失。**目前无 fix PR**，是今日**最值得升级到 P0 的安全/数据灾难隐患**。  
  相关修复尝试：[PR #82830](https://github.com/NousResearch/hermes-agent/pull/82830) `fix(approval): stop absolute-path spellings bypassing the hardline floor` — 来自 #71996 拆分，cherry-pick 至 main，**应加快 review**。

- **[#82846](https://github.com/NousResearch/hermes-agent/issues/82846)** 智能审批辅助 LLM 调用**无强制超时**，provider 卡死将永久卡住整个 agent session（Telegram 上观察到）。**暂无 fix PR**。

- **[#82798](https://github.com/NousResearch/hermes-agent/issues/82798)** `skills_guard` 把 `__PLACEHOLDER__` 模板占位符误判为 CRITICAL 凭证泄露，`--force` 也无法覆盖，阻断 skill 安装。**暂无 fix PR**。

- **[#80841](https://github.com/NousResearch/hermes-agent/issues/80841)** Fastmail `delete_event` 确认 widget 在 CLI/TUI/Matrix 下无法完成。**暂无 fix PR**。

- **[#80125](https://github.com/NousResearch/hermes-agent/issues/80125)** weixin 适配器把 `ret=-2 / prepare failed` 一律报为「频率限制」并触发 30s 熔断，掩盖了缺失 `context_token` 的真实原因。**暂无 fix PR**。

- **[#77211](https://github.com/NousResearch/hermes-agent/issues/77211)** 已最新版本的 checkout 上 `hermes update` 跳过 Node.js 依赖刷新，导致先前失败的 `npm install` 无法修复。**暂无 fix PR**。

- **[#78190](https://github.com/NousResearch/hermes-agent/issues/78190)** Gmail MCP（HTTP OAuth）CLI 登录/测试通过，但 gateway 进程 `OAuthRegistrationError 404 on /register`，疑似与 #39551 同源。**暂无 fix PR**。

- ✅ **[#82805](https://github.com/NousResearch/hermes-agent/issues/82805)** 本地 llama.cpp 间歇性空体 HTTP 400（连接池复用 server 关闭的 SSE 连接）— **有 fix PR [#82809](https://github.com/NousResearch/hermes-agent/pull/82809)**。

- ✅ **[#82831](https://github.com/NousResearch/hermes-agent/issues/82831)** `normalize_usage` 在 usage details 为 dict 时推理 token 静默记为 0 — **暂无关联 PR，但属于 #26689 之外的另一处计费/账单准确性隐患**。

- **[#75097](https://github.com/NousResearch/hermes-agent/issues/75097)** 迭代预算语义分裂：`AIAgent` 默认 90 而 `execute_code` 仅退一个 limiter。

- **[#71987](https://github.com/NousResearch/hermes-agent/issues/71987)** / **[#66824](https://github.com/NousResearch/hermes-agent/issues/66824)** cron `repeat='forever'` TypeError（重复报告）。

### 🟢 P3（一般，已附 fix PR 的标 ✅）

- ✅ **[#79336](https://github.com/NousResearch/hermes-agent/issues/79336)** godmode 拒绝检测只用 ASCII 撇号，被 curl 引号绕过；**暂无 fix PR**，但 deepseek-v4-flash-0731 等模型已实测触发。
- **[#82851](https://github.com/NousResearch/hermes-agent/issues/82851)** Desktop HUD 在 KDE Plasma 6 / Wayland 下无法拖动（`setPosition` 在 Wayland 合成器下是 no-op）。
- **[#82872](https://github.com/NousResearch/hermes-agent/issues/82872)** Desktop 上 `ws_orphan_reap` 杀掉的会话恢复为不可点击的幽灵 tile。
- **[#79518](https://github.com/NousResearch/hermes-agent/issues/79518)** Desktop 隐藏 tab strip 后无法恢复（adoption 重新 pin 上 hidden）。
- **[#81055](https://github.com/NousResearch/hermes-agent/issues/81055)** Desktop markdown 预览的目录链接失效（无 heading id）。
- **[#82875](https://github.com/NousResearch/hermes-agent/issues/82875)** `reasoning_effort` 对命名 `providers:` 端点被静默丢弃。
- **[#82876](https://github.com/NousResearch/hermes-agent/issues/82876)** `tool_search` 对连字符 MCP server 名查找失败。

---

## 6. 功能请求与路线图信号

| Issue | 功能 | 关联 PR | 纳入下一版本的概率 |
|---|---|---|---|
| [#26689](https://github.com/NousResearch/hermes-agent/issues/26689) | CLI/TUI/Gateway/Dashboard 全面无障碍化 | — | 中（长期） |
| [#61644](https://github.com/NousResearch/hermes-agent/issues/61644) | 自驱评估与自改进引擎 HAEE | — | 中（长期愿景） |
| [#62738](https://github.com/NousResearch/hermes-agent/issues/62738) | 缓解模型「劝服轰炸 / 谄媚」倾向 | — | 中（涉及安全策略） |
| [#76883](https://github.com/NousResearch/hermes-agent/issues/76883) | 内存 `remove/replace` 可逆（本地归档） | — | 高（与 curator 现有 archive 语义一致） |
| [#15831](https://github.com/NousResearch/hermes-agent/issues/15831) | cron 任务链式触发 | — | 中 |
| [#82316](https://github.com/NousResearch/hermes-agent/issues/82316) | Desktop「+」不应强制进入项目下钻视图 | — | 高（UI 小改） |
| — | Telegram 用原生 reaction 投递纯 reaction 回复 | [#82864](https://github.com/NousResearch/hermes-agent/pull/82864) | 高（PR 已开） |
| — | MCP `bearer_refresh_cmd` 自动愈合 401 | [#52418](https://github.com/NousResearch/hermes-agent/pull/52418) | 中（能力增强） |
| — | Gateway systemd `Type=notify` + `WatchdogSec=` | [#55018](https://github.com/NousResearch/hermes-agent/pull/55018) | 中（运维侧） |
| — | MCP 调用前参数 schema 校验 | [#78335](https://github.com/NousResearch/hermes-agent/pull/78335) | 高（安全相关） |
| — | 插件 mandatory hook fail-closed 强制预检 | [#82787](https://github.com/NousResearch/hermes-agent/pull/82787) | 高（兼容/稳定） |
| — | 内存插件 TencentDB v2.0.0 + 阿里 MaaS `/compatible-mode/v1` | [#78356](https://github.com/NousResearch/hermes-agent/pull/78356) | 中 |

---

## 7. 用户反馈摘要

- **数据丢失恐惧**：用户对 Desktop 客户端「消息静默消失」极度敏感，#82756 的评论反复提到「自上次修复后第三次发生」，社区信任正在被消耗。建议在 UI 端加入不可关闭的「truncate 前需二次确认」机制并保留可恢复的本地快照。  
- **Windows 平台安全恐慌**：#82842 的严重度由用户自评为「Critical — 几乎完全数据丢失」，社区对 Agent 在桌面端拿到「文件夹删除授权」后**越权执行根目录递归删除**的容忍度接近零；这是关系到生产可用的硬指标。  
- **可访问性被忽视**：#26689 的 VoiceOver 用户描述「UX 极难用」，得到 1 个 👍，虽不热门但属长尾需求，体现项目对包容性设计投入不足。  
- **Cron / 调度可靠性差**：cron TypeError（#66824 / #71987）让 `repeat='forever'` 不可用，影响自动化场景；用户期望「Job 链式触发」（#15831）说明当前调度模型对复杂工作流支持薄弱。  
- **OpenRouter 模型可见性**：#46064 指出 router 模型被静默过滤，用户只能手工改 yaml，破坏 CLI 一致性。  
- **「重复 Issue 没人合并」**：cron TypeError 同源报告至少 2 条以上、Desktop 数据丢失 3 次复发，反映 triage 自动化程度低，重复问题占用 reviewer 注意力。

---

## 8. 待处理积压（提醒维护者）

以下 Issue/PR **已存在较长时间但今日仍开放**，且优先级较高，建议优先响应：

| ID | 类型 | 创建日期 | 等待时长 | 链接 |
|---|---|---|---|---|
| [#43819](https://github.com/NousResearch/hermes-agent/pull/43819) | PR（P1，记忆 SQLite 共享连接） | 2026-06-10 | ~2 个月 | 已关闭 ✅ |
| [#52418](https://github.com/NousResearch/hermes-agent/pull/52418) | PR（mcp bearer_refresh_cmd） | 2026-06-25 | ~6 周 | open |
| [#55018](https://github.com/NousResearch/hermes-agent/pull/55018) | PR（systemd notify/watchdog） | 2026-06-29 | ~6 周 | open |
| [#8428](https://github.com/NousResearch/hermes-agent/pull/8428) | PR（OpenRouter GPT point-release 上下文查找） | 2026-04-12 | ~4 个月 | open |
| [#78356](https://github.com/NousResearch/hermes-agent/pull/78356) | PR（TencentDB v2.0.0 + 阿里 MaaS 兼容） | 2026-08-04 | ~1 周 | open |
| [#15831](https://github.com/NousResearch/hermes-agent/issues/15831) | Feature（cron 任务链） | 2026-04-26 | ~3.5 个月 | open |
| [#26689](https://github.com/NousResearch/hermes-agent/issues/26689) | Feature（VoiceOver 可访问性） | 2026-05-16 | ~3 个月 | open |
| [#46064](https://github.com/NousResearch/hermes-agent/issues/46064) | Bug（OpenRouter router 模型被过滤） | 2026-06-14 | ~2 个月 | open |
| [#61644](https://github.com/NousResearch/hermes-agent/issues/61644) | Feature（HAEE 自评估引擎） | 2026-07-09 | ~1 个月 | open |

**特别提醒**：
- **#8428** 等待 4 个月仍 open，且属 OpenRouter 模型解析兼容性问题，影响所有经 OpenRouter 调用的 GPT point-release 用户，应优先 review。  
- **#26689**（可访问性）等待 3 个月、评论 13 条仍无 PR 回应，建议至少给出维护者立场表态。  
- **#43819** 虽然已关闭，但需在 release notes 中明确提示**全息记忆插件的并发模型变更**（共享连接 + 引用计数 close），确保下游插件作者适配。

---

**总结**：Hermes Agent 当前核心矛盾是**功能扩张速度超过稳定性收敛速度**。Desktop 客户端三大数据丢失/冻结 Bug 链 + Windows 智能体灾难级命令执行 + Gateway/Relay 中继层多个投递缺陷，构成对生产可信度的实质性威胁

</details>

<details>
<summary><strong>OpenHuman</strong> — <a href="https://github.com/tinyhumansai/openhuman">tinyhumansai/openhuman</a></summary>

<think>The user wants me to generate a daily report for the OpenHuman project based on the GitHub data provided. Let me analyze the data carefully:

**Overview:**
- 50 Issues updates (1 new/active, 49 closed)
- 18 PR updates (10 open, 8 merged/closed)
- 0 new releases

**Key observations:**
1. Most issues shown are CLOSED (49 out of 50). This suggests a major cleanup or a batch closure activity.
2. The 1 OPEN issue is #5473 - a P1 priority bug about "Connector syncs stopped feeding the memory tree after the TinyCortex migration" - this is significant!
3. Many of the closed issues are from March-April 2026, suggesting a backlog cleanup.
4. PR activity is heavy around: CI/build fixes, memory subsystem refactoring, agent improvements, removing CEF/Chromium dependencies.

**Notable PRs:**
- #5469 [OPEN] - repair upstream main build (P3)
- #5418 [OPEN] - cloud summarization toggle from app (P2)
- #5471 [OPEN] - attribute OpenHuman git commits (P2)
- #5470 [OPEN] - memory refactor follow-up
- #5432 [OPEN] - normalize provider slugs
- #5468 [OPEN] - split Cargo gates
- #5467 [OPEN] - repair main after tinybus/memory collision
- #5465 [CLOSED] - embedded turn observable
- #5456 [CLOSED] - replace CEF with upstream Wry
- #5460 [CLOSED] - master agent coding-capable
- #5446 [CLOSED] - memory pluggable subsystem
- #5454 [CLOSED] - delete whisper STT, prediction-markets, tokenjuice-treesitter
- #5459 [CLOSED] - replace event bus with tinybus
- #5453 [CLOSED] - CI toolchain fix
- #5455 [OPEN] - Windows installer failures

**Active Issue:**
- #5473 - Connector syncs stopped feeding memory tree after TinyCortex migration - this is a P1 regression bug!

Let me write this report in Chinese as requested, with proper structure.

The most discussed issues are:
1. #335 - Voice dictation and commands: in-app UI integration (2 comments)
2. #395 - Native macOS notifications (2 comments)
3. #5473 - Connector syncs regression (1 comment)
4. #332, #333, #334, #472, #478 - Voice dictation related (1 comment each)

Let me organize the report well.</think>

# OpenHuman 项目动态日报

**日期：2026-08-10**
**数据周期：过去 24 小时**

---

## 1. 今日速览

OpenHuman 今日呈现典型的 **"大扫除 + 修复主线"** 节奏：单日内集中关闭了 49 个 Issue 与 8 个 PR，覆盖大量历史 Feature 请求与多个 Build/Infrastructure 任务，但同时新增 1 个 P1 级回归 Bug（[#5473](https://github.com/tinyhumansai/openhuman/issues/5473)），与若干主线编译修复 PR 形成对照。当前 `main` 分支已确认无法编译（[#5467](https://github.com/tinyhumansai/openhuman/pull/5467)），合并窗口仍处于"先修主干再合新特性"的状态。整体活跃度偏高，但健康度受 P1 回归与构建断裂牵制。

---

## 2. 版本发布

无新版本发布。当前进版节奏被主干修复与基础设施重构打断，预计恢复合并后会集中发版。

---

## 3. 项目进展（已合并/已关闭 PR）

以下 PR 在过去 24 小时内关闭（含合并），是项目今日主要推进力：

| PR | 主题 | 影响 |
|---|---|---|
| [#5460](https://github.com/tinyhumansai/openhuman/pull/5460) | **feat(agent): master agent 编程能力化** | 把默认 orchestrator 升级为可读/可改/可验证的 Master Agent，路由到 coding 模型工作负载 |
| [#5465](https://github.com/tinyhumansai/openhuman/pull/5465) | **feat(agent): 嵌入式 turn 可观测/可终结** | 让 Medulla 等进程内嵌入器能把 core 当真实 coding agent 驱动 |
| [#5456](https://github.com/tinyhumansai/openhuman/pull/5456) | **refactor(tauri): 用上游 Wry 替换 CEF runtime** | 移除 vendored CEF fork、Chromium 构建脚本、fake-camera 管道等大块原生依赖，CDP 自动化转为显式 unsupported |
| [#5459](https://github.com/tinyhumansai/openhuman/pull/5459) | **refactor(core): 用 tinybus 替换事件总线** | 删除 `src/core/event_bus/`（3,787 行），统一到 vendored tinybus crate |
| [#5453](https://github.com/tinyhumansai/openhuman/pull/5453) | **build: CI 工具链统一 + mold + aws-lc-sys 瘦身** | 修 CI 镜像与 rust-toolchain 不一致（1.93 vs 1.96.1），节省每次 Rust job 下载耗时 |
| [#5454](https://github.com/tinyhumansai/openhuman/pull/5454) | **feat(build): 删除本地 whisper STT / prediction-markets / tokenjuice-treesitter** | 构建时间削减计划 Phase 2 |
| [#5446](https://github.com/tinyhumansai/openhuman/pull/5446) | **feat(memory): 内存子系统化为可插拔驱动** | 引入 `DriverClass` / `DriverHealth` 等通用内核词汇，第三方后端可在不改内核代码下绑定 |
| [#5397](https://github.com/tinyhumansai/openhuman/pull/5397) | **feat(kernel): Node.js 运行时默认置于 `runtime-node` feature 之后** | 本计划首个真正移除原生工具链的 Gate，构建 floor 显著下降 |

**整体方向判断**：今日属于"瘦身 + 平台化"双线推进期。memory 子系统抽象化、agent 编程能力化、桌面 runtime 切到上游 Wry、build 时间削减——这四条主线同步在推，项目正从"功能堆叠期"转向"内核平台期"。

---

## 4. 社区热点

**评论数最高的 Issue（已关闭）：**

- **[#335](https://github.com/tinyhumansai/openhuman/issues/335) — Voice dictation and commands: in-app UI integration**（2 评论）
  作者 @senamakel。要求把语音听写/语音命令从 Power-user 快捷键推进到 UI 集成层（开关、设置、状态、帮助入口），并对齐设计系统。

- **[#395](https://github.com/tinyhumansai/openhuman/issues/395) — Native macOS notifications + in-app notification center**（2 评论）
  作者 @graycyrus。要做 macOS 原生推送 + 站内通知中心，聚合消息、skill 事件、agent 完成等。

**当日新增活跃 Issue（仍 OPEN）：**

- **[#5473](https://github.com/tinyhumansai/openhuman/issues/5473) — Connector syncs stopped feeding the memory tree after the TinyCortex migration**（P1，1 评论）
  作者 @yh928。提交 `96c370314` (#4794) 删除了各 provider 的 `source.rs`，新管线只写入 base namespace store，导致 Gmail/Slack/Notion/GitHub/Linear 的同步项不再进入 summary tree。

**诉求分析**：语音相关（#332–#335、#333、#334、#472）形成一组相互关联的体验闭环诉求——全局热键 + 浮层 + STT/LLM + 文本注入 + 全屏穿透。通知中心（#395）则代表"桌面体验与系统级一致性"的统一诉求。两者都指向桌面应用层的产品成熟度，是下一阶段 UX 优先级的重要信号。

---

## 5. Bug 与稳定性

按严重程度排列：

### P1（高优先级，已知回归）
- **[#5473](https://github.com/tinyhumansai/openhuman/issues/5473)** Connector 同步不再写入 memory summary tree
  - 根因：`#4794` 删除 per-provider `source.rs`，新管线只写 base namespace。
  - 影响：Gmail / Slack / Notion / GitHub / Linear 等连接器的同步结果在 summary tree 中不可见，间接影响所有依赖 summary 的下游功能（检索、摘要、上下文注入）。
  - 修复 PR：**暂无**（与 [#5446](https://github.com/tinyhumansai/openhuman/pull/5446) 内存子系统抽象化时间窗重叠，预计修复 PR 即将跟进）。

### 主干编译断裂（基础设施级）
- **[#5467](https://github.com/tinyhumansai/openhuman/pull/5467)** main 编译失败
  - 根因：#5459（tinybus 迁移）与 #5446（memory subsystem）合并后相互冲突，`crate::core::event_bus` 旧引用未被清理。
  - 状态：修复 PR OPEN，**Stacked on #5467** 的 [#5469](https://github.com/tinyhumansai/openhuman/pull/5469) 与 [#5468](https://github.com/tinyhumansai/openhuman/pull/5468) 在排队。
  - 阻断所有新合并，必须优先合入。

### 其他稳定性修复
- **[#5410](https://github.com/tinyhumansai/openhuman/pull/5410)** triage escalation 的 `Acknowledge` 写不写 memory 的日志误导（OPEN）
  - 修复日志措辞并新建跟踪 issue，原计划描述是错的。
- **[#5432](https://github.com/tinyhumansai/openhuman/pull/5432)** Provider 凭据 slug 大小写不一致导致静默 save/read mismatch（OPEN）
- **[#5455](https://github.com/tinyhumansai/openhuman/pull/5455)** Windows 安装器失败未传播为 PowerShell 错误（OPEN，作者 @NgoQuocViet2001）

---

## 6. 功能请求与路线图信号

今日关闭的 Feature 请求覆盖了多个产品方向，关闭动作本身具有"批量收口"的信号。结合已合并/已开放的 PR，可推断下阶段可能纳入的方向：

| 方向 | 代表性 Issue | 当前落地证据 |
|---|---|---|
| Agent / Coding 能力 | [#478](https://github.com/tinyhumansai/openhuman/issues/478) 一级 Agent 分类法 | [#5460](https://github.com/tinyhumansai/openhuman/pull/5460) Master Agent 已编程能力化 |
| 桌面语音 UX | [#332](https://github.com/tinyhumansai/openhuman/issues/332), [#333](https://github.com/tinyhumansai/openhuman/issues/333), [#334](https://github.com/tinyhumansai/openhuman/issues/334), [#335](https://github.com/tinyhumansai/openhuman/issues/335), [#472](https://github.com/tinyhumansai/openhuman/issues/472) | [#5454](https://github.com/tinyhumansai/openhuman/pull/5454) 删除本地 whisper STT；短期本地 STT 路径退场，语音能力将被推迟/重写 |
| 系统通知 | [#395](https://github.com/tinyhumansai/openhuman/issues/395) macOS 通知中心 | 无对应 PR，关注度靠后 |
| Skills 隔离 | [#94](https://github.com/tinyhumansai/openhuman/issues/94) Per-skill QuickJS 隔离 | 无对应 PR |
| 安装分发 | [#106](https://github.com/tinyhumansai/openhuman/issues/106), [#128](https://github.com/tinyhumansai/openhuman/issues/128) 跨平台安装器/包管理器 | 无对应 PR；[#5455](https://github.com/tinyhumansai/openhuman/pull/5455) 仍聚焦 Windows 安装错误传播 |
| 云端训练 | [#97](https://github.com/tinyhumansai/openhuman/issues/97) 语义图云端上传 | [#5418](https://github.com/tinyhumansai/openhuman/pull/5418) 已在内存健康面板加入 cloud summarization 开关，是云端能力的产品前奏 |
| Telegram 机器人 | [#87](https://github.com/tinyhumansai/openhuman/issues/87) 共享 OpenHuman TG bot | 无对应 PR |
| 静默 onboarding | [#101](https://github.com/tinyhumansai/openhuman/issues/101) 更克制的引导 | 无对应 PR |

**判断**：#335 语音 UI 整合 + #395 通知中心 + #94 Skills 隔离 是呼声集中但今日被收口关闭、暂未进入主线的产品方向；下一轮 UX 周期大概率会重新打开其中之一。

---

## 7. 用户反馈摘要

从 Issue 描述与评论中提炼的痛点（不含维护者自建任务）：

- **桌面浮层与全屏应用的冲突**：[#472](https://github.com/tinyhumansai/openhuman/issues/472) 反映 overlay 在 exclusive fullscreen 应用下不可见、且透明区域会"偷"鼠标点击——这是桌面级 AI 工具的关键体验缺陷。
- **Connector 同步静默丢失**：[#5473](https://github.com/tinyhumansai/openhuman/issues/5473) 是用户最容易忽视但影响最大的回归——summary tree 不再被 connector 喂数据，意味着基于摘要的回答、检索、上下文窗口都会逐步"变笨"，而用户无从察觉。
- **Onboarding 体验反复**：[#189](https://github.com/tinyhumansai/openhuman/issues/189), [#199](https://github.com/tinyhumansai/openhuman/issues/199), [#200](https://github.com/tinyhumansai/openhuman/issues/200), [#201](https://github.com/tinyhumansai/openhuman/issues/201), [#202](https://github.com/tinyhumansai/openhuman/issues/202), [#203](https://github.com/tinyhumansai/openhuman/issues/203) 集中反映 E2E 与 onboarding 6 步流程不同步、登出再登入会留下 `userLoadTimedOut` 状态——用户对"反复弹引导"的不满。
- **凭据管理的大小写陷阱**：[#5432](https://github.com/tinyhumansai/openhuman/pull/5432) 指出 `provider:DeepSeek` 这种 mixed-case slug 写下去却读不出来，是典型"用户配了但就是连不上"的暗故障。
- **Windows 安装失败被吞**：[#5455](https://github.com/tinyhumansai/openhuman/pull/5455) 反映 MSI 报错但脚本仍 return success——是 Windows 用户安装体验的硬伤。

---

## 8. 待处理积压

**主干断裂相关（必须立刻合并）：**

- [#5467](https://github.com/tinyhumansai/openhuman/pull/5467) — main 编译失败，阻断一切新合并
- [#5468](https://github.com/tinyhumansai/openhuman/pull/5468) — 拆分 Cargo gates 为 contributor / product 两套（Stacked on #5467）
- [#5469](https://github.com/tinyhumansai/openhuman/pull/5469) — 清理 stale CEF / notification-plugin gitlink（Stacked on #5468）

**P1 回归（无修复 PR）：**

- [#5473](https://github.com/tinyhumansai/openhuman/issues/5473) — Connector 同步不再喂 memory summary tree，提交 `96c370314` (#4794) 引入。建议维护者直接接手修复 PR，或指派给 #5446 的作者收口。

**P2 待合并（含未审）：**

- [#5410](https://github.com/tinyhumansai/openhuman/pull/5410) — triage 日志误导（修文案 + 新建跟踪 issue）
- [#5418](https://github.com/tinyhumansai/openhuman/pull/5418) — 让用户在 app 内开启云端 summary 化（closes #5417）
- [#5471](https://github.com/tinyhumansai/openhuman/pull/5471) — 为 agent 提交的 commit 自动追加 OpenHuman co-author trailer
- [#5472](https://github.com/tinyhumansai/openhuman/pull/5472) — 让单次 `agent_chat` 可指定 endpoint
- [#5470](https://github.com/tinyhumansai/openhuman/pull/5470) — 把 raw profile SQLite 收到 `ProfileStore` 之后，memory 模块清理

**Windows 平台（社区作者首推）：**

- [#5455](https://github.com/tinyhumansai/openhuman/pull/5455) — Windows 安装失败传播，由外部贡献者 @NgoQuocViet2001 提交，建议维护者优先 review 以保留贡献者活跃度。

**已被关闭但仍可能回滚的诉求：**

- 语音 UX（#332/#333/#334/#335/#472）、macOS 通知（#395）、Skills 隔离（#94）今天批量关闭，但产品方向仍有真实需求，建议在路线图中显式标注"延后"而非"已完成"，以免误导社区。

---

*报告生成时间：2026-08-10｜数据来源：OpenHuman GitHub 仓库公开 Issues / Pull Requests*

</details>

---
*本日报由 [Big Model Radar](https://github.com/96loveslife/big_model_radar) 自动生成。*
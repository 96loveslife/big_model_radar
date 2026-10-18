# OpenClaw 生态日报 2026-10-18

> Issues: 500 | PRs: 500 | 覆盖项目: 8 个 | 生成时间: 2026-10-18 03:56 UTC

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

<think>The user is asking me to generate a daily project report for OpenClaw based on GitHub data from 2026-10-18. Let me analyze the data carefully and produce a structured, professional report in Chinese.

Let me organize the key information:

1. **Data Overview:**
- Past 24 hours Issues: 500 (new/active: 348, closed: 152)
- Past 24 hours PRs: 500 (pending: 255, merged/closed: 245)
- New releases: 0

2. **Key Issues to highlight:**
- #119720 (24 comments) - Synchronous agent persistence blocks Gateway event loop at scale
- #157989 (19 comments) - Plugin source capture rewrites 1.1-1.4 GB per CLI command
- #164923 (16 comments) - Short-term promotion workspace issue
- #146118 (CLOSED, 14 comments) - Superseded-task compaction guard
- #121953 (14 comments) - Cron agent turns stall on DeepSeek
- #118839 (14 comments) - Restart recovery claim regression
- #154812 (13 comments, P0) - Gateway runaway RSS OOM
- #129314 (13 comments) - Hidden runtime context message bug
- #158390 (13 comments) - plugin-captures tmp dirs not GC'd
- #120385 (13 comments) - Code Mode tool catalog incomplete
- #164799 (13 comments) - Agents admit one by one after version change

3. **Important PRs:**
- Most PRs shown have 0 likes, but I need to note the substantive ones
- #176047 - recover retained tooling dependency pins
- #176029 - skip discarded Linux fixture package builds
- #176052 - preserve current-source replies during steering
- #176051 - remove label-only code-mode case fixtures
- #144862 - identify completed sessions by explicit labels
- #175509 - Bifrost provider
- #176042 - move Nostr channel settings into plugin
- #176026 - Active Memory's recall prompts show in search results (Diamond Lobster)
- #163655 - preserve active chat input during announcements
- #176033 - use canonical sandbox contract owners
- #176018 - path JSON refusals (Diamond Lobster)
- #124953 - record interrupted trajectory ending
- #175918 - support core Goals on Codex cloud workers
- #168045 - reject blank or non-UTF-8 wiki apply body-file
- #175783 - incrementally append tagged stream snapshots
- #175246 - unblock replies after native children finish

Let me write the report now. I need to be objective, data-driven, and highlight project health.

Looking at the data:
- High activity (500 issues, 500 PRs)
- Mix of P0/P1/P2/P3 issues
- Several Diamond Lobster (highest) rated issues still open
- 152 issues closed vs 348 new/active = net new load of ~196
- 245 PRs merged/closed vs 255 pending = decent merge activity
- No releases today

Let me categorize the issues by theme:
- Memory/transcript issues: #119720, #164923, #121232, #143017, #176026
- Plugin/runtime issues: #157989, #158390, #159638, #175783, #176049, #176017
- Channel issues (Telegram/Signal/Android): #118839, #116512, #53783, #101793, #131768, #120735, #154299, #169930, #175027
- Gateway stability: #154812, #117262, #125333, #163566, #166665
- Model/provider issues: #121953, #118793, #116691, #162914, #138599
- UX issues: #129314, #120385, #164799, #159789, #122019, #124759, #162164, #176039
- Security: #150822, #156883, #149564, #146232
- Auto-compaction: #138599, #146118, #166665, #164799
- Documentation/refactor PRs

Now let me think about the format. I'll structure it clearly with headers and the data the user requested. I should be concise but thorough, and use proper Chinese technical writing.</think>

# OpenClaw 项目日报 · 2026-10-18

## 1. 今日速览

OpenClaw 仓库今日活跃度处于**高位运行**状态：过去 24 小时累计处理 **500 条 Issue 更新**（新开/活跃 348、已关闭 152）与 **500 条 PR 更新**（待合并 255、已合并/关闭 245），但**未发布新版本**。净增 Issue 约 196 条，积压信号明显。从内容分布看，仓库目前的主要矛盾集中在**内存/会话子系统**（#119720、#164923、#121232、#143017）、**Gateway 运行时稳定性**（#154812、#117262、#163566、#166665）、**插件与原生二进制开销**（#157989、#158390、#159638）以及**多通道（Telegram / Signal / Android）的边角行为**上。整体健康度可评为"**活跃但承压**"：PR 处理速度良好（合并/关闭率约 49%），但 P0/P1 级别 Diamond Lobster（钻石龙虾）评级问题仍多日未得到根治修复。

## 2. 版本发布

无新版本发布。今日的 PR 活动以**单点修复与重构**为主，尚未形成可发布的版本变更集合。鉴于已关闭 #146118、#125570、#107464、#67366 等多个 P1 问题，且包含若干 Diamond Lobster 评级修复（#176026、#176018、#168045），下一版本（候选为 2026.10.x）很可能整合今日的部分修复，但需关注破坏性变更兼容性（如 #175509 涉及 auth-provider / security-boundary 的合并风险）。

## 3. 项目进展

今日合并/关闭的实质性 PR 涵盖了多个关键领域：

- **#176047** 修复保留工具依赖 pin 失效后的恢复路径，让维护者可以从匹配的隔离安装恢复保留的包装层。🔗 https://github.com/openclaw/openclaw/pull/176047
- **#176029** 跳过 Linux 原生 fixture 中被丢弃的桌面 npm 包构建，缩减 CI 耗时。🔗 https://github.com/openclaw/openclaw/pull/176029
- **#176052** 修复 `message_tool_only` 转向时因顺序工具运行被插入新消息而丢失当前源回复的缺陷（关联 #176028）。🔗 https://github.com/openclaw/openclaw/pull/176052
- **#176026** 修复 Active Memory 召回提示污染 memory 搜索结果的问题（🦞 Diamond Lobster，关联 #176024）。🔗 https://github.com/openclaw/openclaw/pull/176026
- **#176018** 修复 `openclaw path --json` 在处理路径/文件拒绝时把 JSON 结果写到 stderr 而非 stdout 的问题（🦞 Diamond Lobster）。🔗 https://github.com/openclaw/openclaw/pull/176018
- **#168045** 拒绝空白或非 UTF-8 的 `wiki apply synthesis --body-file`，避免覆盖合成摘要（🦞 Diamond Lobster）。🔗 https://github.com/openclaw/openclaw/pull/168045
- **#176034** 停止保留已处置的插件恢复图，修复已处置恢复/源托管对象的内存泄漏（已关闭合并）。🔗 https://github.com/openclaw/openclaw/pull/176034
- **#176046** 修复 DeepSeek 声明两个主要用途类别导致的打包插件类别检查失败（已关闭合并）。🔗 https://github.com/openclaw/openclaw/pull/176046
- **#176051** 重构：删除仅用于格式化测试名的代码模式单行表用例。🔗 https://github.com/openclaw/openclaw/pull/176051

合并/关闭的 **P1/P0 关键 Issue** 包括：#146118（Codex-native 压缩守卫）、#125570（Skill Workshop 描述覆写）、#107464（Codex 转向过早释放）、#67366（onboard Telegram 替换 TypeError）、#119454（嵌入式运行泄漏自抑制）、#138599（自动压缩死锁）、#166665（字节触发压缩抑制自闭）。整体而言，今日在"**会话/内存一致性**"和"**插件运行时整洁度**"两条线上向前推进了一步，但 Gateway OOM 与事件循环阻塞等长期问题未见根本性修复合入。

## 4. 社区热点

| 排名 | Issue/PR | 标题 | 评论数 | 👍 |
|---|---|---|---|---|
| 1 | [#119720](https://github.com/openclaw/openclaw/issues/119720) | 同步 agent 持久化与转录维护阻塞 Gateway 事件循环 | 24 | 2 |
| 2 | [#157989](https://github.com/openclaw/openclaw/issues/157989) | 插件源捕获每次 CLI 命令重写 1.1–1.4 GB、Gateway 启动 6.5 GB | 19 | 0 |
| 3 | [#164923](https://github.com/openclaw/openclaw/issues/164923) | 短期 promotion：单工作区 0/512 而兄弟工作区 50–90% | 16 | 0 |
| 4 | [#146118](https://github.com/openclaw/openclaw/issues/146118) | 压缩守卫未覆盖 Codex-native 路径（已关闭） | 14 | 0 |
| 5 | [#118839](https://github.com/openclaw/openclaw/issues/118839) | 重启恢复认领变更在 2026.7.2-beta.7 再次回归 | 14 | 0 |
| 6 | [#121953](https://github.com/openclaw/openclaw/issues/121953) | Cron 转向在 DeepSeek 上停滞 | 14 | 0 |
| 7 | [#154812](https://github.com/openclaw/openclaw/issues/154812) | Gateway RSS 失控致 OOM 与关闭超时（P0） | 13 | 0 |
| 8 | [#129314](https://github.com/openclaw/openclaw/issues/129314) | 隐藏"下一轮运行时上下文"消息被当作独立可见轮发出 | 13 | 0 |
| 9 | [#158390](https://github.com/openclaw/openclaw/issues/158390) | plugin-captures 临时目录不回收，磁盘无限增长 | 13 | 1 |
| 10 | [#120385](https://github.com/openclaw/openclaw/issues/120385) | Code Mode 工具目录在 cron/内存刷新轮中构建不完整 | 13 | 0 |

**诉求分析**：今日热点呈现"**两类长期系统性问题**"高密度叠加的特征：

1. **持久化与资源回收**（#119720、#158390、#157989、#159638）—— 用户对 SSD 寿命、磁盘占用、Gateway OOM 的焦虑已经从"个案报告"升级为"长期观察"。#157989 测量出的 6.5 GB/启动的数字直接引发社区对硬件损耗的担忧。
2. **通道一致性**（#118839、#129314、#116512、#53783、#169930）—— WebChat → Telegram 持久会话在重启恢复时的"认领变更"反复回归，体现出**跨通道状态机在 beta 阶段脆弱**。

值得关注的是，#119720 的 2 个 👍 是当日 Issues 区最高的点赞数，表明社区对"Gateway 事件循环阻塞"问题的关注已具备一定共识基础。

## 5. Bug 与稳定性

按严重程度排列：

### 🔴 P0 / 🦐 Gold Shrimp

- **[#154812](https://github.com/openclaw/openclaw/issues/154812)** Gateway RSS 失控（非 V8 堆）导致主机 OOM 与关闭超时。**环境**：OpenClaw 2026.9.5、Node.js 26.4.0、Linux x64、systemd 用户服务。**事件**：2026-09-20 Gateway 达到 9.32 GiB RSS，仅 V8 堆 ~600 MB。**修复状态**：无 PR，已被标记 stale。
- **[#153521](https://github.com/openclaw/openclaw/issues/153521)** 2026.9.3 全局安装失败的更新报告（marked `global-install-failed`）。**修复状态**：无 PR，stale。
- **[#115642](https://github.com/openclaw/openclaw/issues/115642)** 订阅认证下结算冷却时间在故障恢复后未及时释放，需要探测式恢复、更短的 TTL 与手动重置命令。**修复状态**：无 PR。

### 🟠 P1 / 🦞 Diamond Lobster（最高严重度）

- **[#119720](https://github.com/openclaw/openclaw/issues/119720)** 同步 agent 持久化与转录维护阻塞 Gateway 事件循环。**修复状态**：#140231 与 #138984 已合并部分修复，但根因（持久化与事件循环耦合）未解。
- **[#158390](https://github.com/openclaw/openclaw/issues/158390)** plugin-captures 临时目录不被 GC。**修复状态**：被标记 `fix-shape-clear` + `queueable-fix` + `source-repro`，具备合并条件但尚无 PR。
- **[#157989](https://github.com/openclaw/openclaw/issues/157989)** 插件源捕获重写 ~1.1–1.4 GB/CLI 命令，~6.5 GB/Gateway 启动。**修复状态**：无 PR。
- **[#164799](https://github.com/openclaw/openclaw/issues/164799)** 版本变更后 agent 逐个入场数分钟，未配置系统代理 DB 被拒（readyz 503 直至重启）。**修复状态**：无 PR。
- **[#101793](https://github.com/openclaw/openclaw/issues/101793)** Signal 通道上同一轮内工具调用前的助手文本被静默丢弃。**修复状态**：无 PR。
- **[#118185](https://github.com/openclaw/openclaw/issues/118185)** 单次 claude-cli 转向被两个写者写入两次、采用不同组装规则。**修复状态**：无 PR。
- **[#121232](https://github.com/openclaw/openclaw/issues/121232)** memory-core 梦中：ranker 与 applier 对候选资格判定分歧（"Ranked N, Promoted 0"）。**修复状态**：无 PR。
- **[#125333](https://github.com/openclaw/openclaw/issues/125333)** totalTokens 在 2026.8.1-beta.2 上仍膨胀（#123065 修复仅覆盖 `api === "cli"`）。**修复状态**：无 PR。
- **[#143017](https://github.com/openclaw/openclaw/issues/143017)** Prompt 缓存：5 种方式让持久会话重写前缀，7 天测量 21.31M cache-write tokens。**修复状态**：无 PR。
- **[#149564](https://github.com/openclaw/openclaw/issues/149564)** cron lane 中 `scheduledToolPolicy.mode="account"` 解析为空工具集并硬失败。**修复状态**：无 PR。

### 🟡 P1 / 🦪 Silver Shellfish 与其他 P2

- **[#154299](https://github.com/openclaw/openclaw/issues/154299)** 2026.9.5 子 agent 完成交付的最终文本静默丢弃。
- **[#117262](https://github.com/openclaw/openclaw/issues/117262)** SQLite 3 个并发写句柄造成 ~33s 事件循环停顿（点赞 2）。
- **[#118839](https://github.com/openclaw/openclaw/issues/118839)** 重启恢复认领回归。
- **[#121953](https://github.com/openclaw/openclaw/issues/121953)** Cron 转向在 DeepSeek 上停滞。
- **[#131768](https://github.com/openclaw/openclaw/issues/131768)** Android Talk 在工具调用或等待时丢会话。
- **[#120385](https://github.com/openclaw/openclaw/issues/120385)** Code Mode 工具目录不完整。
- **[#118793](https://github.com/openclaw/openclaw/issues/118793)** Claude CLI 会话限制错误导致 surface_error 而非触发模型回退链。
- **[#116691](https://github.com/openclaw/openclaw/issues/116691)** 调用火山引擎长对话缺少 `input.status` 参数。
- **[#150822](https://github.com/openclaw/openclaw/issues/150822)** 原生 Codex 子节点宣传 OpenClaw 工具但无执行处理器。

**稳定性观察**：今日有 152 条 Issue 被关闭，但 P0/P1 Diamond Lobster 评级问题中**绝大多数仍处于"无修复 PR"状态**。已合并/关闭的 P1 Issue 多为"已在 2026.10.x 修复"的老问题收尾，**新增 P0/P1 的修复滞后**。

## 6. 功能请求与路线图信号

- **[#162164](https://github.com/openclaw/openclaw/issues/162164)** iOS/macOS 中可选个人身份以保留 Shared owner。属于 #136686 平台采纳与路由选择路线下的子提案，被评级 `🌊 off-meta tidepool`（非主流潮池），更可能在 2026.Q4 路线图中得到回应。
- **[#120244](https://github.com/openclaw/openclaw/issues/120244)** RFC：cron 维护窗口与角色隔离（#79192 / #119575 后续）。提议在维护窗口期间推迟非名册 cron 与心跳工作并 FIFO 重放。
- **[#144862](https://github.com/openclaw/openclaw/pull/144862)** 为完成的会话提供显式标签以便在 Web Push 中区分（关联 #143946）。**合并概率高**：已与 #133164 通知整合协同，权限范围内。
- **[#175509](https://github.com/openclaw/openclaw/pull/175509)** 新增 Bifrost provider 并允许匿名自托管网关。**合并概率中等**：被标记 `merge-risk: 🚨 compatibility / auth-provider / security-boundary`，需 proof。
- **[#175918](https://github.com/openclaw/openclaw/pull/175918)** 在 Codex 云 worker 上支持核心 Goals。**合并概率中等**：包含 `security-sensitive-changed`。
- **[#146232](https://github.com/openclaw/openclaw/issues/146232)** 可配置的自动 triage agent 允许列表 / 优先级。涉及安全审查，路线优先级较低。

**综合判断**：下一版本最有可能吸收的包括 Bifrost provider（如果兼容性风险可控）、通知会话显式标签、Codex 云 Goals 支持这三项。

## 7. 用户反馈摘要

**真实痛点（提炼自 Issues 评论）**：

- **硬件损耗焦虑**：#157989 报告者测量

---

## 横向生态对比

<think>The user wants me to generate a horizontal comparative analysis report based on the daily reports of 7 projects (OpenClaw, NanoBot, PicoClaw, IronClaw, LobsterAI, QwenPaw, Hermes Agent, OpenHuman - actually that's 8 projects). Let me organize this carefully.

Wait, let me count: OpenClaw, NanoBot, PicoClaw, IronClaw, LobsterAI, QwenPaw, Hermes Agent, OpenHuman = 8 projects.

I need to provide:
1. 生态全景 - 3-5 sentences overview
2. 各项目活跃度对比 - table with Issues, PRs, Releases, health assessment
3. OpenClaw 生态定位 - vs peers, advantages, tech route, community size
4. 共同关注的技术方向 - common needs across projects
5. 差异化定位分析 - features, target users, architecture differences
6. 社区热度与成熟度 - activity stratification, iteration vs consolidation phases
7. 趋势信号 - industry trends for AI agent developers

Language: concise, professional, data-driven, suitable for tech decision makers and developers.

Let me synthesize the data:

**Activity Summary:**
- OpenClaw: 500 issues, 500 PRs, 0 releases - 极高活跃度，承压
- NanoBot: 5 issues, 44 PRs, 0 releases - 高活跃，效率高
- PicoClaw: 1 issue, 1 PR, 0 releases - 极低活跃 (stale cleanup)
- IronClaw: 0 issues, 1 PR (Dependabot), 0 releases - 静默维护
- LobsterAI: 1 issue, 5 PRs, 0 releases - 中等活跃
- QwenPaw: 10 issues, 17 PRs, 0 releases - 高活跃，bug 修复期
- Hermes Agent: 50 issues, 50 PRs, 0 releases - 高活跃，重构期
- OpenHuman: 50 issues, 13 PRs, 0 releases - 高活跃，Epic 重构

**Common Themes:**
1. Gateway/runtime stability issues (OpenClaw, Hermes Agent)
2. Channel/messaging platform adapters (multiple)
3. MCP tool reliability (NanoBot, OpenHuman)
4. Session/memory state persistence (OpenClaw, LobsterAI)
5. Cross-platform encoding issues (QwenPaw Windows ZIP)
6. Storage schema consolidation (OpenHuman, OpenClaw)
7. Provider/multi-model abstractions (LobsterAI, NanoBot)

**Differentiation:**
- OpenClaw: Full-featured, enterprise-grade, "Diamond Lobster" rating system, mature plugin ecosystem
- NanoBot: Lightweight, fast iteration, good community responsiveness
- PicoClaw: Edge/embedded focused (Sipeed), low activity
- IronClaw: NEAR AI focused, minimal public activity
- LobsterAI: Desktop companion + OpenClaw wrapper, NetEase Youdao
- QwenPaw: Qwen/Tongyi aligned, multi-channel adapter focus
- Hermes Agent: Nous Research, gateway unification architecture
- OpenHuman: tinyhumans.ai, heavy refactor toward upstream libraries

Let me write the report now in Chinese, professional and data-driven.</think>

# 个人 AI 助手 / 自主智能体开源生态横向对比报告
**数据周期：2026-10-18｜样本项目：8 个**

---

## 1. 生态全景

当前个人 AI 助手与自主智能体开源生态呈现"**头部高度活跃、腰部快速迭代、尾部静默维护**"的三层结构。**OpenClaw 与 Hermes Agent** 作为基准参照，单日 Issue/PR 更新量均达 500 与 50 级别，处于大规模功能迭代与架构演进并行阶段；**NanoBot、QwenPaw、OpenHuman** 处于"密集修 bug / 重构去重"的稳定巩固期，工程纪律强但社区声量中等；**LobsterAI** 围绕"OpenClaw 协议下沉"持续提交叠加型重构；**PicoClaw、IronClaw** 当日仅见依赖升级与陈旧工单清理，已显著掉队。无项目发布新版本，整体节奏以**修复与重构为先**，新功能发布处于"准冻结"状态。

---

## 2. 各项目活跃度对比

| 项目 | 24h Issue 更新 | 24h PR 更新 | 净 Issue 增 | PR 合并/关闭率 | 新 Release | 当日健康度 |
|------|---------------|------------|-------------|----------------|------------|-----------|
| **OpenClaw** | 500 (新/活 348, 关 152) | 500 (待 255, 合 245) | +196 | 49% | ❌ | 🟠 活跃但承压 |
| **NanoBot** | 5 (新/活 4, 关 1) | 44 (待 23, 合 21) | +3 | 48% | ❌ | 🟢 健康迭代 |
| **PicoClaw** | 1 (关 1) | 1 (关 1) | 0 | 100% (stale) | ❌ | 🔴 静默 |
| **IronClaw** | 0 | 1 (待 1) | 0 | 0% | ❌ | 🔴 静默 |
| **LobsterAI** | 1 (新 1) | 5 (待 5) | +1 | 0% | ❌ | 🟡 中等活跃 |
| **QwenPaw** | 10 (全 OPEN) | 17 (待 16, 关 1) | +10 | 6% | ❌ | 🟠 密集修 bug |
| **Hermes Agent** | 50 (新/活 46, 关 4) | 50 (待 44, 合 6) | +42 | 12% | ❌ | 🟠 重构治理期 |
| **OpenHuman** | 50 (新/活 5, 关 45) | 13 (待 12, 合 1) | -40 | 8% | ❌ | 🟠 大重构冲刺 |

**核心观察**：
- 没有任何项目今日发版，显示生态普遍处于"修 > 发"的工程节奏。
- **OpenHuman** Issue 净增量为 -40（关闭远超新增），是当日唯一显著"减负"的项目。
- **OpenClaw** Issue 净增 +196，是当日生态中积压压力最大的项目。
- 整体合并率分化明显：NanoBot 48% > OpenClaw 49% > PicoClaw 100% (stale) > Hermes Agent 12%。

---

## 3. OpenClaw 在生态中的定位

**OpenClaw 是当前生态中规模最大、复杂度最高的"基准参照型"项目**，与同类相比具有显著优势：

| 维度 | OpenClaw 优势 | 对比项 |
|------|--------------|--------|
| **Issue 体量** | 单日 500 条更新，是 Hermes Agent 的 10 倍、NanoBot 的 100 倍 | NanoBot、QwenPaw、LobsterAI |
| **评级体系** | 唯一采用"🦐 Gold Shrimp / 🦞 Diamond Lobster / 🦪 Silver Shellfish / 🌊 Tidepool"四级严重度 + 行为可观测标签（如 `fix-shape-clear` / `queueable-fix`） | 其他项目普遍使用 P0-P3 |
| **生态依附** | LobsterAI 明确将自身定位为"基于 OpenClaw 的桌面伴侣"，上游协议变更直接影响下游 | NanoBot、QwenPaw、Hermes 均为独立架构 |
| **插件系统** | 拥有完整的 plugin-capture / plugin-recovery / 跨 CLI 插件复用机制 | 大多项目为内置单层架构 |
| **通道覆盖** | Telegram / Signal / WebChat / Android / CLI / Codex 多通道状态机 | Hermes Agent 覆盖 Matrix / WhatsApp / Telegram |
| **长期挂账 P0** | 多项 P0（如 #154812 Gateway OOM）已挂数月无 PR | Hermes Agent 已能在数日关闭 P0 (#137255 TLS) |

**技术路线差异**：OpenClaw 选择"**完整功能 + 评级严谨 + 插件可扩展**"路线，代价是**长期挂账 P0 多、PR 评审压力大**。Hermes Agent 走"**统一网关 + 包式批量修复**"路线（[#106742](https://github.com/NousResearch/hermes-agent/pull/106742) 合并触发 9 个修复包），响应更敏捷但牺牲部分插件灵活性。NanoBot 走"**轻量 + Issue→PR 闭环 < 24h**"路线，劣势是功能覆盖较窄。

**社区规模对比**：以"参与评论 + 点赞 + 多样化贡献者"为指标，OpenClaw > Hermes Agent > OpenHuman > NanoBot > QwenPaw > LobsterAI > PicoClaw ≈ IronClaw。OpenClaw 与 Hermes Agent 的用户反馈呈现"**多平台场景化使用**"特征，NanoBot/QwenPaw 偏向"**开发者自部署**"。

---

## 4. 共同关注的技术方向

| 方向 | 涉及项目 | 具体诉求 |
|------|---------|----------|
| **🔌 跨通道状态一致性** | OpenClaw, Hermes Agent, NanoBot, QwenPaw | Telegram/WebChat/Signal/Matrix/WhatsApp 间的 session 归属、恢复、认领反复回归。OpenClaw #118839、Hermes Agent #134889 投入主要工程力量。 |
| **🧠 持久化 / 内存子系统** | OpenClaw, OpenHuman, LobsterAI | OpenClaw #119720（同步持久化阻塞事件循环）、#121232（ranker vs applier 分歧）；OpenHuman Epic #7973（统一 v2 schema）；LobsterAI #2895（Computer Use 跨会话授权丢失）。 |
| **🔍 工具/MCP 可靠性** | NanoBot, OpenHuman | NanoBot #6291（MCP 错误吞掉）、#6290（搜索瞬时拒绝未重试）；OpenHuman #8061（EgressDescriptor 强制前置）。 |
| **🪟 平台编码 / 跨 OS 兼容性** | QwenPaw, OpenClaw, Hermes Agent | QwenPaw #8270（Windows CP437 乱码）；OpenClaw #157989（plugin-capture 1.4 GB/CLI）；Hermes Agent #122160（Windows CLI 引导丢失工作目录）。 |
| **⚙️ Provider 抽象与多模型路由** | LobsterAI, NanoBot, OpenClaw | LobsterAI #2897（OpenAI Responses + Gemini 原生协议）；NanoBot #6283（DeepSeek 图像能力元数据）；OpenClaw #175509（Bifrost provider）。 |
| **🛡️ 安全与隐私透明度** | OpenHuman, NanoBot, OpenClaw | OpenHuman #6260（Voice STT 缺 EgressDescriptor）、#7770（无界文件系统扫描）；NanoBot #5866（CLI Apps 注册中心签名）；OpenClaw #150822（Codex 子节点执行处理器）。 |
| **🤖 Cron / 调度 / 长期任务** | OpenClaw, NanoBot, OpenHuman | OpenClaw #121953（Cron 在 DeepSeek 停滞）、#154299（子 agent 完成消息静默）；Hermes Agent #140872（Cron 结果 ≥30 天保留）。 |
| **📦 插件市场与版本溯源** | QwenPaw, NanoBot, OpenHuman | QwenPaw #8231（market install provenance）；NanoBot #5866 / #6168；OpenHuman Epic #7973 子模块 vendor。 |

**最强共鸣点**：跨通道 session 状态一致性 + 持久化层架构收敛 —— 这两条几乎在所有"高活跃"项目中都形成实质性工程瓶颈。

---

## 5. 差异化定位分析

| 项目 | 功能侧重 | 目标用户 | 技术架构关键差异 |
|------|---------|---------|-----------------|
| **OpenClaw** | 全功能 AI 助手 + 插件市场 + 多通道 + 完整 CLI | 高级用户、自托管玩家、跨平台重度使用者 | 插件可插拔 + 多级严重度评级 + Gateway 中心化 |
| **NanoBot** | 轻量 CLI 智能体 + 多 provider + WebUI | 开发者、CLI 优先用户、研究者 | 简洁模块化 + Issue→PR < 24h 响应链 |
| **PicoClaw** | 边缘 / 嵌入式场景（推测） | 资源受限设备用户 | 当日信号不足，无从判断 |
| **IronClaw** | NEAR AI 生态绑定（推测） | NEAR 生态用户 | 当日仅 Dependabot 信号，无架构线索 |
| **LobsterAI** | 桌面伴侣 + 截图/语音/Computer Use + Cowork 协作 | macOS/iOS 桌面用户、团队协作 | OpenClaw 上层封装 + 协议下沉重构 |
| **QwenPaw** | 通义/Qwen 系列模型深度集成 + 多通道适配 | 国内中文用户、阿里云生态 | ReMe 嵌入式记忆 + 多通道 fallback 分类器 |
| **Hermes Agent** | 本地优先 + 多模型路由 + Kanban 工作流 | Nous 生态、隐私敏感用户 | 统一网关（#106742）+ 包式批量修复 |
| **OpenHuman** | 自适应恢复 + voice-native + 文件系统安全扫描 | 研究型用户、隐私优先 | tinystoragedrivers / tinyagents / tinychannels 上游库归一 |

**架构哲学对比**：OpenClaw 是"**内核中心化 + 插件外围**"，Hermes Agent 是"**网关统一 + 通道薄壳**"，NanoBot 是"**内核最小化 + 工具中性**"，OpenHuman 是"**基础设施上游归一 + 业务下放**"。四种路线在生态中各有拥趸，**目前尚无明显收敛趋势**。

---

## 6. 社区热度与成熟度

**快速迭代阶段**（Issue 净增 > +10，新功能活跃）：
- OpenClaw（+196）
- Hermes Agent（+42）
- QwenPaw（+10）

**质量巩固阶段**（PR 多为修复，净 Issue 接近零或为负）：
- OpenHuman（-40，Epic #7973 集中收口）
- NanoBot（+3，bug 修复节奏稳定）
- LobsterAI（+1，中等活跃）

**静默维护阶段**（无实质社区动态）：
- PicoClaw（仅 stale 清理）
- IronClaw（仅 Dependabot）

**成熟度信号**：
- **OpenClaw** 是生态中唯一**有完整"评级体系 + 行为标签（`fix-shape-clear` / `queueable-fix` / `source-repro`）+ PR 风险标注（`🚨 auth-provider`）"**的项目，体现其工程化成熟度。
- **OpenHuman** 拥有最详细的 Issue 拆解（Epic #7973 下 28 个 owner），项目管理颗粒度最高。
- **Hermes Agent** 拥有最显著的"维护者中心化"特征（[@unsupportedpastels](https://github.com/unsupportedpastels) 单人主导 9 个修复包），存在**关键人风险**。
- **NanoBot** 拥有最快的社区响应节奏，所有新 Issue 在 24 小时内均有对应 PR，**社区健康度最佳**。

---

## 7. 值得关注的趋势信号

### 🔥 趋势一：跨通道 session 一致性成为"通用难题"
**OpenClaw #134889 (Hermes) / #118839 (OpenClaw) / #96683 (Hermes) / #6288 (NanoBot)** 均反映同一本质：用户期望"在桌面/Telegram/Web/Matrix 之间无缝切换同一项目"，但当前架构普遍无法保证 session 归属唯一、状态可恢复。**对开发者的启示**：将 session 状态抽象为 first-class 数据结构（参考 CRDT 或事件溯源），而非依附于通道 ID，将成为下一代 agent 框架的核心竞争力。

### 🔥 趋势二：存储 / 持久化层进入"统一抽象"窗口
**OpenHuman Epic #7973 + OpenClaw #119720 + LobsterAI #2895** 同时指向同一个方向：从"多 DB、多 schema、内存 Set"收敛到"单一 v2 schema + 显式 EgressDescriptor"。这是 agent 系统从"PoC 可用"走向"生产可信"的关键拐点。

### 🔥 趋势三：Provider 多协议抽象走向成熟
**LobsterAI #2897（OpenAI Responses + Gemini 原生）+ NanoBot #6283（DeepSeek 能力元数据）+ OpenClaw #175509（Bifrost provider）** 表明：**协议适配（而非模型选择）正在成为新的差异化战场**。OpenAI Responses API 与 Gemini generateContent 的原生接入是当前主流方向。

### 🔥 趋势四："评级体系 + 标签体系"成为大型项目的事实标准
OpenClaw 的 🦐/🦞/🦪/🌊 + 行为标签（`fix-shape-clear` / `queueable-fix` / `source-repro`）+ 合并风险标注（`🚨 auth-provider / security-boundary`）体系，正在被 Hermes Agent、OpenHuman 部分模仿（`close-and-review-later` / `needs-decision` / `conflict`）。**对治理大型仓库的团队**而言，这是值得借鉴的项目管理范式。

### 🔥 趋势五：媒体（音频/视频）触发的"会话永久锁定"成为高频痛点
**QwenPaw #8171（audio wedge）/ #8298（video wedge）/ #8290（video wedge）+ OpenClaw #154812** 暴露一个被低估的可靠性问题：**当 LLM 返回特定格式错误（`At most 0 audio(s)` / `unknown variant 'video_url'`）时，agent 会话进入无法恢复的死锁，必须重启进程**。这是当前多模态 agent 部署中最具实战意义的稳定性缺陷，建议优先解决 fallback 分类器的覆盖度。

### 🔥 趋势六：维护者中心化风险显现
**Hermes Agent #135782** 明确指出"per-author open-PR limit"阻止贡献者提交 ready 的修复；OpenClaw 多项 P0 长期无 PR；OpenHuman 几乎全部由少数内部贡献者驱动。**对生态的启示**：分布式治理（CODEOWNERS 自动分派、PR 模板约束、贡献者容量管理）将成为大型 agent 项目可持续发展的关键。

### 💡 对 AI 智能体开发者的总体参考
1. **不要重造 session 状态机**：跨通道 session 一致性是行业级难题，优先复用成熟抽象。
2. **优先夯实持久化层**：v2 schema + 显式 EgressDescriptor

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

<think>Let me analyze the GitHub data from NanoBot project and generate a comprehensive daily report for 2026-10-18.

Key data points:
- 24-hour Issue updates: 5 (4 new/active, 1 closed)
- 24-hour PR updates: 44 (23 pending merge, 21 merged/closed)
- No new releases

Let me organize this into the required sections:

1. **今日速览** - Overall summary
2. **版本发布** - No releases, skip
3. **项目进展** - Merged/closed important PRs
4. **社区热点** - Most active discussions
5. **Bug 与稳定性** - Reported bugs
6. **功能请求与路线图信号** - Feature requests
7. **用户反馈摘要** - User feedback
8. **待处理积压** - Backlog items

Let me categorize the PRs:
- Closed/Merged PRs (21 total): #6284, #6279, #6282, #6281, #5490, and others
- Important closed PRs from data:
  - #6284 - fix(tools): accept a top-level path in apply_patch
  - #6279 - feat(webui): rename sidebar topics inline
  - #6282 - test: replace false-green checks with behavioral coverage
  - #6281 - fix(webui): keep search activity summaries on one line
  - #5490 - fix(webui): clarify aggregate turn token usage

Important Issues:
- #5833 [CLOSED] - SSE Responses consumer drops reasoning_text events
- #6288 [OPEN] - Matrix listen group policy
- #6079 [OPEN] - Allow agents to observe group messages without replying
- #6286 [OPEN] - Matrix groupPolicyOverrides
- #6285 [OPEN] - web_search DuckDuckGo retry/backoff

Let me identify the key themes:
1. Matrix channel improvements (3 related items: #6288, #6286, #6289, #6287)
2. MCP/tools improvements (#6291, #6285/#6290)
3. WebUI refinements (#6279, #6281, #5490)
4. Provider improvements (#6283 - DeepSeek, #5833 - OpenAI Responses)
5. Documentation/test quality (#6282, #6284)

Now let me write the report in Chinese, professional tone, data-driven.</think>

# NanoBot 项目动态日报
**日期：2026-10-18**

---

## 1. 今日速览

NanoBot 今日继续保持高活跃度，过去 24 小时共产生 **49 条更新事件**（5 个 Issue + 44 个 PR），其中 PR 处理效率突出——44 个 PR 中 **21 条已合并/关闭**（占比约 48%），合并节奏稳定。今日工作重点集中在 **Matrix 频道能力补齐**（新增 listen 策略、per-room 覆盖）、**工具调用可靠性提升**（DuckDuckGo 重试、MCP 错误传播）以及 **WebUI 体验细节打磨**。Issues 与 PRs 形成紧密联动——本期 4 个新开 Issue 均在同一天即获得对应修复 PR，显示社区响应链路健康。整体评估：**项目处于积极迭代期，工程节奏紧凑**。

---

## 2. 版本发布

⚠️ **今日无新版本发布**。根据 PR #6168（in-app updates）描述，目前 update 流程仍处于"未激活、未就绪"状态，预计下次发版将整合 #6168 及其 follow-up #6280。

---

## 3. 项目进展

今日有 21 条 PR 完成合并/关闭，以下为对功能推进较关键的条目：

| PR | 标题 | 影响领域 | 链接 |
|---|---|---|---|
| [#6284](https://github.com/HKUDS/nanobot/pull/6284) | fix(tools): accept a top-level path in apply_patch | 工具易用性：补丁可声明顶层 path，子编辑自动继承，减少重复书写 | [🔗](https://github.com/HKUDS/nanobot/pull/6284) |
| [#6279](https://github.com/HKUDS/nanobot/pull/6279) | feat(webui): rename sidebar topics inline | WebUI 体验：移除模态框重命名流程，支持侧边栏内联编辑（Linear NAN-249） | [🔗](https://github.com/HKUDS/nanobot/pull/6279) |
| [#6282](https://github.com/HKUDS/nanobot/pull/6282) | test: replace false-green checks with behavioral coverage | 测试质量：替换复制生产编排、负向断言脱钩等假阳性测试 | [🔗](https://github.com/HKUDS/nanobot/pull/6282) |
| [#6281](https://github.com/HKUDS/nanobot/pull/6281) | fix(webui): keep search activity summaries on one line | WebUI 排版：搜索摘要单行 + 省略号，复用 hover tooltip 展示完整内容 | [🔗(https://github.com/HKUDS/nanobot/pull/6281) |
| [#5490](https://github.com/HKUDS/nanobot/pull/5490) | fix(webui): clarify aggregate turn token usage | 透明度：聚合多 prompt 的 turn 展示调用次数，并暴露最新请求上下文与配置上限 | [🔗](https://github.com/HKUDS/nanobot/pull/5490) |

**整体推进评估**：今日更倾向"小步快跑 + 体验打磨"——没有大型架构变更，但完成了一批增量质量修复与 UX 细节。配合 #5833 关闭与 #6290/#6291/#6289/#6287 等 23 条待合并 PR，**项目处于稳定迭代期，代码质量与可观测性均有提升**。

---

## 4. 社区热点

今日讨论焦点集中在 **Matrix 频道策略扩展** 与 **工具调用鲁棒性** 两大主题，形成两个明显的"主题簇"：

### 🔥 热点一：Matrix 频道的群组策略演进（3 个 Issue + 2 个 PR 同步推进）

- [#6288](https://github.com/HKUDS/nanobot/issues/6288) **Matrix: "listen" group policy**（评论: 1, 👍 0）  
  用户 `@orrinwitt` 指出：在 `mention` 策略下，被过滤的消息直接丢弃，机器人对群上下文无感知，希望增加"观察但不主动回复"模式。
- [#6286](https://github.com/HKUDS/nanobot/issues/6286) **Matrix: add groupPolicyOverrides (per-room 覆盖)**  
  与 Napcat 频道对齐，请求支持按房间覆盖 `groupPolicy`。
- [#6079](https://github.com/HKUDS/nanobot/issues/6079) **Allow agents to observe group messages without always replying**（评论: 1）  
  概念层面补充：观察 → 相关性判断 → 处理 → 回复判定，四步分离。

**诉求分析**：核心痛点是**单频道全局配置无法满足多房间部署**——管理员希望不同房间执行不同策略（监听/仅提及/白名单），但目前只能选其一。`@orrinwitt` 在 #6288/#6286 同日提交了对应的实现 PR（[#6289](https://github.com/HKUDS/nanobot/pull/6289)、[#6287](https://github.com/HKUDS/nanobot/pull/6287)），**Issue→PR 闭环速度极快**，预计将进入下一个 release。

### 🔥 热点二：搜索/MCP 工具可靠性

- [#6285](https://github.com/HKUDS/nanobot/issues/6285) **web_search (DuckDuckGo): no retry/backoff**（👍 0）  
  连续 `web_search` 调用偶发 "No results found"，实际是上游瞬时拒绝未重试。
- 对应修复 PR：[**#6290**](https://github.com/HKUDS/nanobot/pull/6290) — 已实现带封顶指数退避的重试逻辑。
- 另有 [#6291](https://github.com/HKUDS/nanobot/pull/6291)（fix(mcp): propagate resource/prompt failures as structured tool errors）——MCP resource/prompt 失败被当作成功结果返回，存在**静默错误**隐患，修复后通过 `ToolResult.is_error` 正确传播。

---

## 5. Bug 与稳定性

按严重程度排列：

| 严重度 | Issue/PR | 描述 | 是否有修复 PR |
|---|---|---|---|
| 🟠 P2-高 | [#6285](https://github.com/HKUDS/nanobot/issues/6285) / [#6290](https://github.com/HKUDS/nanobot/pull/6290) | DuckDuckGo 连续搜索失败（瞬时拒绝未重试） | ✅ 已修复（#6290，待合并） |
| 🟠 P2-高 | [#6291](https://github.com/HKUDS/nanobot/pull/6291) | MCP resource/prompt 失败被吞，返回伪成功 | ✅ 已修复（#6291，待合并） |
| 🟡 P2-中 | [#5833](https://github.com/HKUDS/nanobot/issues/5833) | SSE Responses 消费方丢失 `response.reasoning_text.*` 事件 | ✅ 已关闭（SDK 路径已修复，transport 路径仍有差距） |
| 🟡 P2-中 | [#6140](https://github.com/HKUDS/nanobot/pull/6140) | `read_file` 与 `edit_file` 行号规则不一致（splitlines vs `\n`） | ✅ 修复 PR 待合并 |
| 🟡 P2-中 | [#6197](https://github.com/HKUDS/nanobot/pull/6197) | `web_fetch` 对大小写敏感 `Content-Type: Image/PNG` 处理错误 | ✅ 修复 PR 待合并 |
| 🟡 P2-中 | [#6097](https://github.com/HKUDS/nanobot/pull/6097) | XLSX 含 chart-only sheet 时 `AttributeError`，并中断 read_file/grep 流 | ✅ 修复 PR 待合并 |
| 🟢 P2-低 | [#6283](https://github.com/HKUDS/nanobot/pull/6283) | DeepSeek `deepseek-v4-flash` 静默剥离图像；能力元数据丢失 | ✅ 修复 PR 待合并 |
| 🟢 P2-低 | [#6138](https://github.com/HKUDS/nanobot/pull/6138) | Matrix `m.new_content` 编辑丢失 HTML 格式 | ✅ 修复 PR 待合并 |

**稳定性结论**：本期 8 个报告的 Bug 中，**100% 已有对应修复 PR**——其中 1 个已合并（#6284）、7 个待合并。修复链路完整，但仍积压 23 条 PR 待 review，**建议维护者加速 PR review 节奏以降低合并延迟风险**。

---

## 6. 功能请求与路线图信号

| 优先级 | 需求 | 状态 | 来源 |
|---|---|---|---|
| 🔥 高 | Matrix 新增 `"listen"` 群组策略 | PR 已就绪 | [#6288](https://github.com/HKUDS/nanobot/issues/6288) → [#6289](https://github.com/HKUDS/nanobot/pull/6289) |
| 🔥 高 | Matrix per-room `groupPolicyOverrides` | PR 已就绪 | [#6286](https://github.com/HKUDS/nanobot/issues/6286) → [#6287](https://github.com/HKUDS/nanobot/pull/6287) |
| 🟡 中 | 群消息观察与回复分离（架构层） | 设计讨论中 | [#6079](https://github.com/HKUDS/nanobot/issues/6079) |
| 🟡 中 | API SSE 流式工具进度事件 | 长期挂起（#3745，5月开启仍 OPEN，标 `conflict`） | [#3745](https://github.com/HKUDS/nanobot/pull/3745) |
| 🟡 中 | 设置存储读写事务统一到 config store | 重构进行中 | [#6271](https://github.com/HKUDS/nanobot/pull/6271) |
| 🟡 中 | 实例存储统一到 home（NAN-264） | 重构进行中 | [#6261](https://github.com/HKUDS/nanobot/pull/6261) |
| 🟠 高（安全） | CLI Apps 安装来源验证，registry drift 时 fail-closed | 修复 PR 待合并 | [#5866](https://github.com/HKUDS/nanobot/pull/5866) |
| 🟠 高（安全） | 托管安装 + 可恢复的 in-app 更新 | 待发布（#6168 不建议合并） | [#6168](https://github.com/HKUDS/nanobot/pull/6168) / [#6280](https://github.com/HKUDS/nanobot/pull/6280) |

**路线图信号**：
- **下一版本最可能整合**：Matrix 频道双策略（#6289、#6287）+ DuckDuckGo 重试（#6290）+ MCP 错误传播（#6291）。
- **长期演进信号**：群消息"观察/处理/回复"三段式架构（#6079）正在从单点修补走向系统性重构。
- **安全相关**：CLI Apps 注册中心签名验证（#5866）与 in-app 更新（#6168/#6280）是下个版本的安全基石，但 #6168 明确标注 "Not activated or release-ready"。

---

## 7. 用户反馈摘要

从 Issue 评论中提炼：

1. **痛点：群上下文缺失**（[#6288](https://github.com/HKUDS/nanobot/issues/6288)）  
   用户反馈：在繁忙群聊中，被 @ 才介入的机器人对历史对话一无所知，无法做出有上下文的回复。**期望：bot 应"隐身观察"，仅在必要时回复。**

2. **痛点：搜索结果随机失败**（[#6285](https://github.com/HKUDS/nanobot/issues/6285)）  
   用户反馈：相同查询间隔几秒后即可成功，连续调用却报错 "No results found"——错误信息具有误导性。**期望：内部瞬时失败应有重试，且错误信息更明确。**

3. **痛点：MCP 工具静默失败**（[#6291](https://github.com/HKUDS/nanobot/pull/6291) 描述）  
   开发者场景：MCP resource/prompt 调用失败被上报为成功，导致上层 agent 依据错误数据继续执行。**期望：失败通过 `ToolResult.is_error` 结构化传播。**

4. **痛点：SSE 推理事件丢失**（[#5833](https://github.com/HKUDS/nanobot/issues/5833)）  
   用户 `@remote-controlled-man` 反馈：transport 与 SDK 两条 Responses API 流处理路径行为不一致，导致 reasoning_text 在 transport 路径被丢弃。**期望：两条路径行为对齐。**

5. **满意点**：所有报告的 Bug 在 24 小时内均有对应修复 PR 提交，社区响应速度获得用户认可。

---

## 8. 待处理积压

> 以下为 **长期未响应** 或 **标记为 conflict** 的高重要性条目，提醒维护者关注：

| 编号 | 类型 | 标题 | 创建日期 | 状态 | 链接 |
|---|---|---|---|---|---|
| **#3745** | PR | stream tool progress SSE events | 2026-05-11 | OPEN, `conflict`（5 个月未合并） | [🔗](https://github.com/HKUDS/nanobot/pull/3745) |
| **#5490** ✅ | PR | clarify aggregate turn token usage | 2026-08-22 | 已合并（2 个月内关闭） | [🔗](https://github.com/HKUDS/nanobot/pull/5490) |
| **#5866** | PR | record install provenance, fail-closed on registry drift | 2026-09-22 | OPEN, `conflict`（安全相关） | [🔗](https://github.com/HKUDS/nanobot/pull/5866) |
| **#6168** | PR | managed installs + recoverable in-app updates | 2026-10-12 | OPEN（**显式声明勿合并**） | [🔗](https://github.com/HKUDS/nanobot/pull/6168) |
| **#6271** | PR | settings: config store owns read-modify-write | 2026-10-17 | OPEN, `conflict` | [🔗](https://github.com/HKUDS/nanobot/pull/6271) |
| **#6261** | PR | unify instance storage under home (NAN-264) | 2026-10-16 | OPEN, `conflict` | [🔗](https://github.com/HKUDS/nanobot/pull/6261) |
| **#6138** | PR | fix(matrix): keep HTML in m.new_content edits | 2026-10-10 | OPEN, `conflict` | [🔗](https://github.com/HKUDS/nanobot/pull/6138) |
| **#6140** | PR | fix(tools): read_file lines by newline | 2026-10-10 | OPEN, `conflict` | [🔗](https://github.com/HKUDS/nanobot/pull/6140) |

**维护者建议**：
- 🔴 **#3745** 已挂起超 5 个月，建议评估与当前架构的兼容性，给出明确 closure 或重新 base 计划；
- 🟠 **#6168** 标记为"勿合并"但仍在主分支，**存在长期不维护分支风险**，建议明确拆分计划；
- 🟡 多条 PR 标 `conflict`（#3745、#5866、#6138、#6140、#6261、#6271），需 rebase 到最新 main 后再次进入 review；
- 🟢 **23 条待合并 PR** 构成下一版本候选集，建议按"安全 > 用户可见功能 > 内部重构"优先级分批合并。

---

## 📊 今日健康度评分

| 维度 | 评分 | 说明 |
|---|---|---|
| 活跃度 | ⭐⭐⭐⭐⭐ | 49 条更新，节奏紧凑 |
| 响应速度 | ⭐⭐⭐⭐⭐ | 所有新 Issue 当日有对应 PR |
| 合并吞吐 | ⭐⭐⭐⭐ | 48% 合并率，积压可控 |
| 安全态势 | ⭐⭐⭐ | CLI Apps 签名验证仍 OPEN |
| 架构演进 | ⭐⭐⭐⭐ | 群消息模型、settings 事务重构推进中 |
| **综合** | **⭐⭐⭐⭐** | **健康，持续迭代** |

---

*报告生成时间：2026-10-18 | 数据源：[HKU

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

<think>The user wants me to generate a project daily report for PicoClaw based on the GitHub data provided. Let me analyze the data carefully:

1. **Data Overview:**
   - Past 24 hours Issues updates: 1 (new/active: 0, closed: 1)
   - Past 24 hours PR updates: 1 (pending: 0, merged/closed: 1)
   - New releases: 0

2. **Issues:**
   - #3415 [CLOSED] [stale] Feature request about supporting reverse proxy with Nginx to mount PicoClaw under a subpath like /pico/

3. **Pull Requests:**
   - #3414 [CLOSED] [stale] feat(agent): add wall-clock turn time budget - closed without merging

Both items are marked as [stale] and were closed. This suggests the project might have lower activity or the maintainers are cleaning up stale issues/PRs.

Let me structure the report according to the requested sections, keeping in mind:
- Objective and professional tone
- Data-driven
- Highlight project health
- Each item with GitHub links
- Language: Chinese (since the request is in Chinese)

I need to be honest about the state - the activity is quite low (1 issue closed, 1 PR closed, both stale), no new releases. This is important for the "daily overview" section.

Let me draft this carefully.</think>

# PicoClaw 项目日报

**日期：2026-10-18**
**仓库：github.com/sipeed/picoclaw**

---

## 1. 今日速览

PicoClaw 仓库今日活跃度处于低位，过去 24 小时仅有 1 条 Issue 与 1 条 PR 被更新，且均为**关闭（CLOSED）**状态，无新增开放项，也未发布新版本。值得注意的是，今日关闭的两项均被标记为 **[stale]**（陈旧），说明它们并非因得到处理而关闭，而是经机器人或维护者清理长期无响应的陈旧工单后自动归档。整体来看，项目当日处于"静默维护期"，未观察到实质性的代码推进或社区互动。

---

## 2. 版本发布

无新版本发布。本节略去。

---

## 3. 项目进展

今日**无 PR 被合并**。唯一更新的 PR：

- **#3414** [CLOSED] [stale] — feat(agent): add wall-clock turn time budget
  作者 @racso2609，提交于 2026-10-01，最新更新 2026-10-17。
  该 PR 提议为每轮（turn）增加可选的 wall-clock 时间预算配置（`agents.defaults.turn_time_budget_seconds`，默认 `0` 即禁用），当一轮耗时超限时，提示智能体停止调度新工具并交付简洁摘要，以避免陷入空转循环。**该 PR 未被合并，以 stale 状态关闭**，未推进任何功能进入主线。
  链接：https://github.com/sipeed/picoclaw/pull/3414

> **评估**：今日项目代码层面无实质推进，"向前迈进的距离"为零。

---

## 4. 社区热点

今日**无新增或活跃讨论**的 Issue/PR。以下为过去 24 小时唯一被更新的 Issue，也是昨日最具代表性的社区诉求：

- **#3415** [CLOSED] [stale] — 支持 Nginx 反向代理挂载到子路径（如 `/pico`）
  作者 @altman08，2 条评论，0 👍。
  诉求核心：希望将 PicoClaw Web Console 通过 Nginx 反代挂载到非根路径（如 `https://example.com/pico/`），但当前前端与后端部分地址硬编码根路径（`/api/...`、`/launcher-login`、`/pico/ws` 等），导致仅靠 Nginx 路径转发无法工作，期望新增反向代理兼容模式（可由启动参数开启）。
  链接：https://github.com/sipeed/picoclaw/issues/3415

> **诉求分析**：该需求反映了用户希望将 PicoClaw 与同域名下其他服务共存的部署场景，属于自助托管场景下的合理诉求，但因长期无维护者响应而被自动归档。

---

## 5. Bug 与稳定性

今日**未报告任何新的 Bug、崩溃或回归问题**。今日关闭的 Issue 与 PR 均非稳定性相关：

- #3415 为功能请求（非 Bug）；
- #3414 为新功能 PR，且未合并即关闭。

因此本节无可报告内容。

---

## 6. 功能请求与路线图信号

过去 24 小时关闭的 **#3415** 提供了两个潜在的功能信号：

1. **反向代理 / 子路径部署支持**：用户希望支持以子路径方式部署 Web 控制台，需要前端资源路径与后端 API 路由可配置前缀。当前实现硬编码根路径，需要架构层面（前端 build 配置 + 后端路由前缀注入）协同改动。**纳入下一版本的概率评估：中等偏低**，因为 stale 关闭表明维护者短期内未回应。

2. **智能体单轮时间预算（#3414）**：该功能已在 PR 中给出完整实现草案（默认关闭、可配置、超限摘要），具备较低的实现成本。**纳入下一版本的概率评估：中等**，但因 PR 已 stale 关闭，需作者重新开新 PR 或由社区 fork 后再提。

综合来看，过去 24 小时内未出现强烈的路线图推动信号。

---

## 7. 用户反馈摘要

可提取的反馈来自 **#3415**（2 条评论），提炼如下：

- **真实痛点**：用户希望在同一域名下共存 PicoClaw 与其他 Web 服务，受限于硬编码路径难以落地；
- **使用场景**：自托管玩家将 PicoClaw 作为多服务集群中的子系统部署，而非独立子域；
- **满意度**：从 👍=0 与仅 2 条评论来看，社区参与度低，暂无其他用户表达支持或反对；
- **关注点**：该 Issue 被 stale 自动关闭可能引发用户不满——功能请求在无明确回应下被归档，缺少维护者对核心架构改造的公开态度说明。

---

## 8. 待处理积压

⚠️ **维护者需关注**：今日两条被清理的工单均为陈旧归档而非主动处理，说明仓库可能存在**Issue/PR 响应机制仅依赖 stale 机器人而缺少人工巡检**的情况。建议维护者：

1. 复核 **#3414** 的实现质量——该 PR 已具备完整摘要与默认值设计，是可直接合并的低风险增强；
2. 对 **#3415** 这类涉及部署架构的功能请求给出官方态度（如 `enhancement` 标记、路线图归类或明确说明"非优先"），以避免重复提交；
3. 建议为 PicoClaw 启用更明确的状态标签（如 `needs-triage`、`help-wanted`），以便区分"待处理陈旧项"与"已明确放弃项"。

| 编号 | 类型 | 状态 | 链接 |
|------|------|------|------|
| #3414 | PR（时间预算） | 关闭（stale，未合并） | https://github.com/sipeed/picoclaw/pull/3414 |
| #3415 | Issue（反代子路径） | 关闭（stale，未回应） | https://github.com/sipeed/picoclaw/issues/3415 |

---

**整体健康度评估：⚠️ 偏低**
当日活跃度极低，无代码推进、无新版本、无新 Issue/PR 流入，且仅有的更新均为自动清理陈旧工单。建议维护团队在下个工作日主动巡检 PR 队列并对典型功能请求给出正式回应，以恢复社区信心。

*报告生成时间：2026-10-18，数据来源：GitHub REST API*

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

<think>The user wants me to generate a project daily report for IronClaw based on GitHub data. Let me analyze the data:

1. Issues: 0 updates in past 24 hours
2. PRs: 1 update (1 pending merge, 0 merged/closed)
3. No new releases
4. Only 1 PR: dependabot dependency bump for source-map-js from 1.2.1 to 1.2.2 in docs/internal/architecture-video

This is a very quiet day for the project. Let me generate the report honestly, reflecting the low activity level.

Let me structure this according to the requested sections:

1. Today at a Glance - quiet day, only dependency update
2. Version Release - skip, no new releases
3. Project Progress - no merged PRs
4. Community Hot Spots - no discussion to analyze
5. Bug & Stability - none reported
6. Feature Requests & Roadmap - none
7. User Feedback - none to extract
8. Pending Backlog - just 1 PR

I should be honest about the data limitations while still providing the structural report. Let me write this in Chinese as the prompt is in Chinese.</think>

# IronClaw 项目日报

**报告日期：2026-10-18**

---

## 1. 今日速览

IronClaw 项目今日活跃度处于**极低水平**。过去 24 小时内社区动态几乎为零：没有新的或被关闭的 Issues，没有 PR 被合并或关闭，也没有新版本发布。唯一的仓库动态是一条由 Dependabot 自动化提交的依赖升级 PR（#8139），尚未合并。整体而言，项目今日处于"静默维护"状态，无实质性功能推进。

---

## 2. 版本发布

**无新版本发布。** 仓库今日未发布任何 Release。

---

## 3. 项目进展

**今日合并/关闭的重要 PR：无**

在过去 24 小时内，没有 PR 处于已合并或已关闭状态。代码层面无向前推进的功能或修复记录。

---

## 4. 社区热点

**今日讨论最活跃的 Issues/PRs：无**

- 唯一处于 Open 状态的 PR #8139 的评论数为 `undefined`、点赞数为 0，暂无社区互动。
- Issues 板块今日无更新。

链接：[PR #8139](https://github.com/nearai/ironclaw/pull/8139)

---

## 5. Bug 与稳定性

**今日报告的 Bug / 崩溃 / 回归问题：无**

今日未新增任何 Bug 报告、崩溃报告或回归性问题报告。已合并待生效的依赖更新 PR #8139 涉及 `source-map-js` v1.2.2 的 crash fix，但该 PR 当前还未合并。

- [PR #8139 – source-map-js 1.2.1 → 1.2.2 (含 crash fix)](https://github.com/nearai/ironclaw/pull/8139) *(状态：OPEN，尚未 merge)*

---

## 6. 功能请求与路线图信号

**无新功能请求。**

今日未提交任何 Issues 或 PR 涉及新功能、新模块或路线图方向的讨论。因缺乏社区活跃信号，本节无法预测下一版本可能纳入的功能点。

---

## 7. 用户反馈摘要

**无来自 Issues 评论的用户反馈可供分析。**

由于今日 Issues 数量为 0、且唯一 PR 无互动评论，本节无法提炼用户痛点、使用场景或满意度信息。建议关注历史 Issues 评论区以获取用户原始反馈。

---

## 8. 待处理积压

### 8.1 今日新增的待处理项

| 编号 | 类型 | 标题 | 状态 | 链接 |
|---|---|---|---|---|
| #8139 | PR (dependabot) | chore(deps): bump source-map-js from 1.2.1 to 1.2.2 in /docs/internal/architecture-video | OPEN | [链接](https://github.com/nearai/ironclaw/pull/8139) |

### 8.2 维护者关注提醒

- **PR #8139**：该 PR 是由 Dependabot 生成的依赖升级，目标文件位于 `docs/internal/architecture-video`，属于**非关键路径文档组件**，对核心运行时影响极小。建议维护者可优先快速合并（merge）以保持依赖的最新性和构建健康度。
- 建议维护者关注社区互动度长期低迷的趋势：若连续多日呈现 0 Issues / 0 合并 的情况，可能需要主动通过社区渠道（如 Discord、Twitter/𝕏、邮件列表）发布进度更新或征集反馈，以保持项目能见度。

---

## 📊 项目健康度概览

| 指标 | 数值 | 评估 |
|---|---|---|
| 24h Issues 活跃 | 0 | 🔴 极低 |
| 24h PR 合并 | 0 | 🔴 极低 |
| 24h 新 Release | 0 | 🟡 中性（视节奏） |
| 唯一动态 | 1 个 Dependabot 依赖升级 | ⚪ 自动化维护 |
| Bug 报告 | 0 | 🟢 安全 |
| 社区互动 | 0 评论 | 🔴 无 |

**总评**：IronClaw 项目当日处于纯自动化维护状态，暂无实质性社区动态或代码推进。建议维护者评估是否存在活跃度下降的系统性原因。

---

*本报告基于 2026-10-18 GitHub 数据自动生成，数据来源：[github.com/nearai/ironclaw](https://github.com/nearai/ironclaw)*

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

<think>The user wants me to generate a project daily report for LobsterAI based on the GitHub data provided. Let me analyze the data carefully:

**Data Overview:**
- Past 24 hours Issues updates: 1 (1 new/active, 0 closed)
- Past 24 hours PR updates: 5 (5 pending merge, 0 merged/closed)
- New releases: 0

**Issues:**
- #2895 - Feature request for persisting Computer Use app approvals across sessions

**Pull Requests:**
- #2898 - Refactor to remove OpenAI compatibility proxy
- #2897 - Support OpenAI Responses and Gemini formats for custom providers
- #2896 - Keep user overrides in openclaw.user.json across config syncs
- #2894 - Custom companion skins, screenshot tools and Cowork follow-ups
- #1181 - Hide OpenClaw main agent sessions from session list (older PR, updated today)

Now let me generate a structured daily report in Chinese (the user's language was Chinese).

Let me think about each section:

1. **今日速览** - Project is active with 1 new issue and 5 active PRs, but no merges/closures. All PRs are open/pending. This shows development activity but no completions.

2. **版本发布** - No releases, skip.

3. **项目进展** - All PRs are pending, no merged. But I can discuss what these PRs aim to achieve.

4. **社区热点** - The new issue #2895 has 1 comment. PRs mostly don't have comments yet.

5. **Bug 与稳定性** - The new issue #2895 is a feature request, not a bug. PR #1181 looks like a bug fix (UI confusion from internal sessions appearing in user list).

6. **功能请求与路线图信号** - #2895 is a feature request that aligns with the desktop companion improvements in #2894.

7. **用户反馈摘要** - Need to extract from issue #2895 - users frustrated by having to re-approve apps every session.

8. **待处理积压** - PR #1181 has been open since 2026-04-01 (about 6.5 months), still pending.

Let me write this in a professional, data-driven tone.</think>

# LobsterAI 项目日报

**日期：2026-10-18**
**项目：[netease-youdao/LobsterAI](https://github.com/netease-youdao/LobsterAI)**

---

## 1. 今日速览

LobsterAI 在过去 24 小时保持中等开发活跃度：新增 1 条 Issue 和 5 条 PR，但**没有任何 PR 合并或关闭，也未发布新版本**。从内容看，今日工作重点集中在「自定义模型提供方协议扩展」「OpenClaw 配置持久化」「Cowork 重构」以及「桌面伴侣体验增强」四条主线，体现出团队在 AI 智能体可扩展性与桌面端体验两端的持续投入。社区层面仅 1 条 Issue 被开启，整体反馈节奏平稳，但积压的旧 PR（#1181）仍待维护者关注。

---

## 2. 版本发布

🚫 **今日无新版本发布。** Release 渠道在本统计周期内未推出新的稳定版、RC 版或预发布版。

---

## 3. 项目进展

今日无任何 PR 进入 merged/closed 状态，故本节以「提交候选」视角，盘点未来 24–72 小时可能合入主干的内容：

- **[#2898 refactor(cowork): remove the OpenAI compatibility proxy](https://github.com/netease-youdao/LobsterAI/pull/2898)** — 作者 @fisherdaddy。删除约 3500 行 Claude Agent SDK 时代的 `coworkOpenAICompatProxy.ts` 与 `coworkFormatTransform.ts` 兼容层，以 OpenClaw 原生传输替代。该 PR 依赖 #2897，需先合入。
- **[#2897 feat(providers): support OpenAI Responses and Gemini formats for custom providers](https://github.com/netease-youdao/LobsterAI/pull/2897)** — 作者 @fisherdaddy。在自定义模型提供方中新增 **OpenAI Responses** 与原生 **Gemini (generateContent)** 协议支持，复用 OpenClaw 原生传输，显著扩展三方模型接入能力。
- **[#2896 feat(openclaw): keep user overrides in openclaw.user.json across config syncs](https://github.com/netease-youdao/LobsterAI/pull/2896)** — 作者 @fisherdaddy。解决用户在 `openclaw.json` 中手工编辑（启用 enhancement 插件等）后重启配置被覆盖的痛点，改为通过 `openclaw.user.json` 持久化用户覆盖项。
- **[#2894 feat(desktop): add custom companion skins, screenshot tools and Cowork follow-ups](https://github.com/netease-youdao/LobsterAI/pull/2894)** — 作者 @alison-xx。桌面伴侣体验三件套：自定义皮肤上传（PNG/JPEG/WebP + 缩放预览）、截图工具增强、Cowork 跟进消息模板化。
- **[#1181 fix(cowork): hide OpenClaw main agent sessions from session list](https://github.com/netease-youdao/LobsterAI/pull/1181)** — 作者 @Noodles006。修复 OpenClaw 主 agent 会话（用于心跳/cron 路由）以硬编码 `[OpenClaw]` 标题出现在用户可见会话列表中的问题；新增 `hidden` 字段予以屏蔽。

**净推进评估：** 0 commit merged，但有 5 个功能/修复处于评审流程。若 #2897 → #2898 顺利合入，将一次性释放约 3500 行技术债务并提升多协议兼容能力；#2896 直接修复长期被吐槽的配置被覆盖问题。

---

## 4. 社区热点

- **[#2895 [Feature] Persist Computer Use app approvals across sessions](https://github.com/netease-youdao/LobsterAI/issues/2895)** — 评论 1 条，👍 0。**今日唯一被激活的 Issue**。作者 @cwx07426 提出：Computer Use 在每个新会话都会重新弹窗请求「Allow LobsterAI to use <app>?」，即使用户几分钟前刚刚批准过。原因指向 `mcp-br…` 中仅存在内存级 `Set` 缓存。该 Issue 与今日 #2894（桌面伴侣/Cowork 增强）属于同一用户体验主线，反映用户对「跨会话状态连续性」的强烈诉求。

**活跃度分布概览：** 5 条 PR 中 4 条由同一位作者 @fisherdaddy 在 24 小时内创建（#2896/#2897/#2898），属于高度集中的「叠加型重构 + 协议扩展」批次；社区评论量整体偏低，尚未在 PR 内形成明显讨论。

---

## 5. Bug 与稳定性

按严重程度排列（**注：今日仅 1 条新 Issue，且属 Feature 需求；下方列出的 Bug 维度问题来自既有 PR 与 Issue 的交叉分析**）：

| 级别 | 现象 | 状态 | 关联链接 |
|---|---|---|---|
| 🟠 中 | OpenClaw 主 agent 的内部会话污染用户可见会话列表（硬编码 `[OpenClaw]`） | 已有 fix PR，待合入 | [#1181](https://github.com/netease-youdao/LobsterAI/pull/1181) |
| 🟡 低 | `openclaw.json` 在每次配置同步时被重新生成，导致用户手编辑的配置（enhancement 插件等）在重启后丢失 | 已有修复 PR（`openclaw.user.json` 方案） | [#2896](https://github.com/netease-youdao/LobsterAI/pull/2896) |
| 🟡 低 | Computer Use 应用审批仅保留在内存 `Set`，新会话需重复授权 | 暂无 fix PR，待社区响应 | [#2895](https://github.com/netease-youdao/LobsterAI/issues/2895) |

**稳定性评估：** 今日新报告的崩溃/回归类 Bug 为 0。现有 Bug 主要集中在「状态持久化」与「内部会话 UI 隔离」两个非致命体验问题，整体稳定性处于良好水位。

---

## 6. 功能请求与路线图信号

- **#[2895 持久化 Computer Use 应用授权](https://github.com/netease-youdao/LobsterAI/issues/2895)** — 用户期望将 MCP bridge 的授权映射写入磁盘（如 SQLite/JSON），实现跨会话复用。结合今日 [#2894](https://github.com/netease-youdao/LobsterAI/pull/2894) 中对桌面伴侣与 Cowork 的密集打磨，**该需求被纳入 `release/2026.10.19` 周窗口的概率较高**，建议维护者评估实现成本。
- **路线图信号：** 今日 @fisherdaddy 一口气提交的 #2896/#2897/#2898 三联 PR 显示团队正围绕 **OpenClaw 协议抽象**进行系统性重构，目标是把 LobsterAI 端的多协议（OpenAI Chat / OpenAI Responses / Anthropic / Gemini）统一下沉到 OpenClaw 原生层，是一条清晰的「客户端瘦化、网关下沉」演进路径。

---

## 7. 用户反馈摘要

从 [#2895](https://github.com/netease-youdao/LobsterAI/issues/2895) 的评论以及配套 PR 的语境可提炼：

- 🔁 **跨会话状态丢失**：「每次新会话都重新授权」被作者形容为高频痛点（场景：在几分钟内对同一应用反复触发 Computer Use）。
- 🧩 **配置被覆盖焦虑**：#2896 的存在说明社区有用户习惯手编辑配置文件以启用插件或微调选项，对「重启即失效」表达不满。
- 🖼 **桌面伴侣个性化诉求**：#2894 显示用户希望自定义皮肤、灵活使用截图工具，并希望 Cowork 提供更便捷的「跟进消息」模板。
- 🫥 **会话列表 UI 噪音**：#1181 反映出内部 agent 出现在用户列表中已造成可观察的认知困扰，需明确会话可见性边界。

**满意度信号：** 暂无用户对体验的正向反馈帖；社区整体处于「反馈具体、修复跟进及时」的良性反馈环中。

---

## 8. 待处理积压

| 编号 | 类型 | 创建日期 | 等待时长 | 备注 |
|---|---|---|---|---|
| [#1181](https://github.com/netease-youdao/LobsterAI/pull/1181) | PR (fix) | 2026-04-01 | **约 6.5 个月** | 修复 OpenClaw 主 agent 会话污染用户列表，今日仍在更新却未合入。建议维护者明确评审节奏或给出阻塞原因。 |
| [#2895](https://github.com/netease-youdao/LobsterAI/issues/2895) | Issue (Feature) | 2026-10-17 | 1 天 | 暂无明确负责人或 triage 标签，建议在 48 小时内指派 owner 并与 #2894 一并排期。 |

**提醒：** #1181 跨越整个 `2026.04 → 2026.10` 三个发布窗口仍未合并，建议项目维护者在下次站会优先确认其阻塞点，避免在主干多次重构期间出现更大的合并冲突面。

---

*报告基于 2026-10-17 至 2026-10-18 之间的 GitHub 公开数据生成。数据来源：[netease-youdao/LobsterAI](https://github.com/netease-youdao/LobsterAI)。*

</details>

<details>
<summary><strong>QwenPaw</strong> — <a href="https://github.com/agentscope-ai/QwenPaw">agentscope-ai/QwenPaw</a></summary>

<think>Let me analyze the GitHub data for QwenPaw (which appears to be the project name used here, though it seems to reference AgentScope-style data). Let me structure this as a comprehensive project daily report.

Key observations:
1. **Activity**: 10 new/active issues, 17 PRs with 1 closed. No new releases.
2. **Active themes**: Media/audio/video handling issues, channel-specific bugs (DingTalk, Feishu, Matrix), Windows encoding issues, Console UI bugs
3. **Closed PRs**: Only #8296 was closed (Close-and-review-later status)
4. **Hot issue**: #8171 has 5 comments - the audio file wedge issue
5. **Media bug cluster**: Multiple issues (#8171, #8298, #8290) related to send_file_to_user wedging sessions
6. **PRs addressing bugs**: Several bug-fixing PRs map directly to issues
7. **Notable PR**: #8164 - HarmonyOS native client (XXXL size, feature)

Let me organize this into a structured daily report. I'll write in Chinese as requested.

Let me count and organize:

**Issues by date (2026-10-17 to 2026-10-18)**:
- #8171 (Oct 10, updated Oct 17, 5 comments) - audio wedge
- #8278 (Oct 16, updated Oct 17, 4 comments) - DingTalk markdown degradation
- #3361 (Apr 14, updated Oct 18, 3 comments) - Feishu console config error
- #8270 (Oct 16, updated Oct 18, 3 comments) - Windows ZIP encoding
- #2882 (Apr 3, updated Oct 18, 2 comments) - Matrix config
- #1612 (Mar 16, updated Oct 18, 1 comment) - Web UI [object Object]
- #8300 (Oct 17, updated Oct 17, 1 comment) - Console input not cleared
- #8298 (Oct 17, updated Oct 17, 1 comment) - Video wedge
- #8293 (Oct 17, updated Oct 17, 1 comment) - Injected context blocks
- #8290 (Oct 17, updated Oct 17, 1 comment) - Media block wedges (video)

**Most discussed issue**: #8171 with 5 comments

**PRs**: 17 total, 1 closed (#8296), 16 open

**Key PR-issue mappings**:
- #8215 fixes #8171 (LM Studio audio)
- #8299 fixes #8298 (video variants)
- #8295 fixes #8293 (injected context display)
- #8294 fires workspace_created hooks - fixes #8281
- #8292 sanitizes malformed file parts - fixes #8280
- #8291 requires non-empty api_key - fixes #8276
- #8301 preserves Windows ZIP filenames - likely fixes #8270
- #8303 delivers approval prompts - fixes #6695/#6819
- #8231 - market install provenance - fixes #8176

Let me write the report now.</think>

# QwenPaw 项目动态日报

**报告日期：2026-10-18**
**数据来源：github.com/agentscope-ai/QwenPaw**

---

## 1. 今日速览

QwenPaw 仓库今日继续保持高活跃度，过去 24 小时内共有 **10 条 Issues 更新**（全部处于 OPEN 状态）和 **17 条 PR 更新**（其中 16 条待合并、1 条已关闭），无新版本发布。当日的核心议题集中在 **多模态（音/视频）媒体块的会话锁定（wedging）问题**、**DingTalk/飞书/Matrix 等即时通信通道的兼容性缺陷**、以及 **Windows 平台 ZIP 编码乱码** 等与跨平台、跨通道稳定性相关的系统性 bug。PR 端则呈现"一题一修"的快速对应模式，大量 fix PR 与 Issues 一一映射，反映出维护者对一线 bug 的响应效率。整体来看，项目处于"密集修 bug、新功能暂缓"的稳定维护期。

---

## 2. 版本发布

无新版本发布。最近一次发版为 **v2.2.2（2026-10-15）**，见 [Issue #8300](https://github.com/agentscope-ai/QwenPaw/issues/8300) 的环境信息。

---

## 3. 项目进展

今日仅有 **1 条 PR 被关闭** —— [#8296](https://github.com/agentscope-ai/QwenPaw/pull/8296)（Close-and-review-later，S 级）。该 PR 修复了 Windows CPython 在 `os.kill(pid, 0)` 探测陈旧进程时抛出 `SystemError` 导致 `qwenpaw-creator` 启动钩子误判进程存活性的问题（[#8194](https://github.com/agentscope-ai/QwenPaw/issues/8194)）。该 PR 被标记为延迟复审，反映出维护者倾向于先沉淀改动再批量评审。

值得关注的 **开放 PR** 包括：

- **[#8164](https://github.com/agentscope-ai/QwenPaw/pull/8164) —— `feat(apps): add HarmonyOS native client`（XXXL 级）**
  为 QwenPaw 增加基于 ArkUI/ArkTS（Stage 模型、API 26）的鸿蒙原生客户端。该 PR 已开放约 1 周（2026-10-10），尚未合并，是当前仓库内规模最大的功能变更，象征 QwenPaw 跨端生态向鸿蒙延伸。

- **[#8302](https://github.com/agentscope-ai/QwenPaw/pull/8302) —— `fix(channels): retain consumers until shutdown cleanup finishes`（S 级）**
  解决通道重载期间取消消费者被提前丢弃、导致 asyncio 打印 `Task was destroyed but it is pending!` 的问题。

- **[#8303](https://github.com/agentscope-ai/QwenPaw/pull/8303) —— `fix(approvals): deliver approval prompts to the chat channel that raised them`（M 级）**
  修复审批请求只回传到 console、而原始聊天通道（WeChat 等）长时间无响应后被判定为 `TIMEOUT` 的问题（[#6695](https://github.com/agentscope-ai/QwenPaw/issues/6695) → 根因定位 [#6819](https://github.com/agentscope-ai/QwenPaw/issues/6819)）。

- **[#8301](https://github.com/agentscope-ai/QwenPaw/pull/8301) —— `fix(skills): preserve Chinese Windows ZIP filenames`（M 级）**
  解决中文 Windows 压缩包内文件名被错误按 CP437 解码产生乱码、导致技能 `references/说明.txt` 无法打开的问题，对应 [#8270](https://github.com/agentscope-ai/QwenPaw/issues/8270)。

整体看，项目在 **多端通道适配、模型兼容性、平台编码** 等方向均有实质性推进。

---

## 4. 社区热点

按评论数与多 PR 交叉引用密度排序：

| 排名 | Issue / PR | 热度信号 | 核心诉求 |
|---|---|---|---|
| 1 | [#8171](https://github.com/agentscope-ai/QwenPaw/issues/8171) | 5 条评论 + 2 个关联 PR（[#7024](https://github.com/agentscope-ai/QwenPaw/pull/7024)、[#7654](https://github.com/agentscope-ai/QwenPaw/pull/7654)、[#8215](https://github.com/agentscope-ai/QwenPaw/pull/8215)） | LM Studio 对音频块的拒绝错误（`At most 0 audio(s)`）未被识别导致会话永久锁定 |
| 2 | [#8278](https://github.com/agentscope-ai/QwenPaw/issues/8278) | 4 条评论 | DingTalk 通道长消息（>3500 字）静默降级为纯文本，表格/Markdown 全部失效 |
| 3 | [#8270](https://github.com/agentscope-ai/QwenPaw/issues/8270)、[#3361](https://github.com/agentscope-ai/QwenPaw/issues/3361) | 各 3 条评论 | 中文 Windows ZIP 编码乱码、飞书 console 配置报错 |
| 4 | [#8293](https://github.com/agentscope-ai/QwenPaw/issues/8293) | 1 条评论 + 关联 PR [#8295](https://github.com/agentscope-ai/QwenPaw/pull/8295) | `<system-notification>` / `<system-info>` 等内部注入标记被原样转发给通道用户 |
| 5 | [#8290](https://github.com/agentscope-ai/QwenPaw/issues/8290)、[#8298](https://github.com/agentscope-ai/QwenPaw/issues/8298) | 1 条评论 | 视频块触发的 422 `unknown variant 'video_url'` 与 `At most 0 video(s)` 同样让会话永久锁定 |

**诉求分析**：热点高度集中在「**会话锁定（session wedging）**」一类系统性缺陷——一旦模型返回特定格式的错误信息，整个 agent 会话将无法恢复，必须重启进程。这类问题对生产环境的可用性影响极大，是当前社区最迫切的需求。

---

## 5. Bug 与稳定性

按严重程度排列：

### 🔴 高严重度（影响会话可用性、跨通道兼容性）

| Issue | 描述 | 已有 fix PR |
|---|---|---|
| [#8171](https://github.com/agentscope-ai/QwenPaw/issues/8171) | LM Studio audio 拒绝未被分类器识别 → 会话永久锁定 | [#8215](https://github.com/agentscope-ai/QwenPaw/pull/8215)、[#7654](https://github.com/agentscope-ai/QwenPaw/pull/7654) |
| [#8298](https://github.com/agentscope-ai/QwenPaw/issues/8298) | `video_url` 未知变体 → 422 错误永久锁定 | [#8299](https://github.com/agentscope-ai/QwenPaw/pull/8299) |
| [#8290](https://github.com/agentscope-ai/QwenPaw/issues/8290) | `At most 0 video(s)` 与 `unsupported_request` 双重未识别 | 待认领 |
| [#8278](https://github.com/agentscope-ai/QwenPaw/issues/8278) | DingTalk 长消息静默降级为纯文本 | 未匹配 fix |
| [#3361](https://github.com/agentscope-ai/QwenPaw/issues/3361) | 飞书对话中通过 console 改配置报错（`UnifiedQueueManager` 异步清理遗留） | [#8302](https://github.com/agentscope-ai/QwenPaw/pull/8302) 间接相关 |

### 🟡 中严重度（功能回归、字符编码、UI 异常）

| Issue | 描述 | 已有 fix PR |
|---|---|---|
| [#8270](https://github.com/agentscope-ai/QwenPaw/issues/8270) | 中文 Windows ZIP 解压后文件名乱码 | [#8301](https://github.com/agentscope-ai/QwenPaw/pull/8301) |
| [#8293](https://github.com/agentscope-ai/QwenPaw/issues/8293) | 注入的 context blocks 被作为助手文本发送给通道用户 | [#8295](https://github.com/agentscope-ai/QwenPaw/pull/8295) |
| [#8300](https://github.com/agentscope-ai/QwenPaw/issues/8300) | v2.2.2 控制台发送后输入框不清空（队列分支 `clear` 依赖会话活跃状态） | 未匹配 fix |
| [#2882](https://github.com/agentscope-ai/QwenPaw/issues/2882) | Matrix 通道复制粘贴 `USER ID`/`ACCESS TOKEN` 自动加前缀空格 | 未匹配 fix |
| [#1612](https://github.com/agentscope-ai/QwenPaw/issues/1612) | Web UI 自定义通道配置显示为 `[object Object]` | 未匹配 fix |

**总体观察**：约 60% 的高严重度 bug 已有 1 对 1 的修复 PR，但仍存在多个"会话锁定"亚型（视频、文本-Only、未知变体）未覆盖。建议维护者优先 review [#8299](https://github.com/agentscope-ai/QwenPaw/pull/8299) 与 [#8215](https://github.com/agentscope-ai/QwenPaw/pull/8215) 以快速止血。

---

## 6. 功能请求与路线图信号

今日 Issues 中**未观察到明确的功能请求（feature request）**，社区焦点集中在 bug 修复。但从开放 PR 中可读出以下**路线图信号**：

- **跨端生态扩张**：[#8164](https://github.com/agentscope-ai/QwenPaw/pull/8164) 引入 HarmonyOS 原生客户端，标志 QwenPaw 不再局限于 Web+Python，正在向桌面/移动多端布局演进。
- **模型容错能力增强**：[#7654](https://github.com/agentscope-ai/QwenPaw/pull/7654)、[#8215](https://github.com/agentscope-ai/QwenPaw/pull/8215)、[#8124](https://github.com/agentscope-ai/QwenPaw/pull/8124) 共同指向"fallback 分类器持续扩展"，预计 v2.3.0 将重点打磨多模型/多网关的弹性。
- **内存子系统升级**：[#8297](https://github.com/agentscope-ai/QwenPaw/pull/8297) 升级嵌入式 ReMe 依赖，#8291 加强 ReMe reranker 的凭据校验，#7211 重构 `inject_context` 持久化行为，**记忆与上下文管理是 v2.3.x 的潜在主轴**。
- **控制台与插件市场**：[#8231](https://github.com/agentscope-ai/QwenPaw/pull/8231) 持久化市场安装溯源信息，让 "Update All" 覆盖第三方插件，可能预示后续插件生态强化。

---

## 7. 用户反馈摘要

从 Issues 评论中提炼的真实痛点：

- **[#8171](https://github.com/agentscope-ai/QwenPaw/issues/8171)** 用户 @sc1993415-cmyk：媒体能力分类器对不同厂商的拒绝错误缺乏统一抽象，导致**同一种故障产生多种'卡死'形态**，且 PR 评审周期较长，给生产环境带来可观测性差、恢复成本高的体验。
- **[#8278](https://github.com/agentscope-ai/QwenPaw/issues/8278)** 用户 @tecgic：钉钉通道正文超过 3500 字就静默降级，且**调用方拿不到任何"已被降级"的信号**——典型的"魔法阈值 + 无报错"反模式，影响所有数据报表/多列表格场景。
- **[#8270](https://github.com/agentscope-ai/QwenPaw/issues/8270)** 用户 @andrew2010y：跨平台编码问题未在官方文档强调，对**国内 Windows 用户**极不友好，是项目本地化的明显缺口。
- **[#8300](https://github.com/agentscope-ai/QwenPaw/issues/8300)** 用户 @yylxdzz 在 v2.2.2 中发现"消息成功发送但输入框未清空"，**指向 v2.2.2 的 UI 回归**，未出现在 v2.2.1 或更早版本中，影响 v2.2.x 升级信心。
- **[#8293](https://github.com/agentscope-ai/QwenPaw/issues/8293)** 用户 @BeiMu-new：框架内部 `<system-notification>` 等元数据泄漏到面向最终用户的消息中，**对多通道部署的可解释性构成风险**。

---

## 8. 待处理积压

按"开放时间长 × 影响面"筛选：

| Issue / PR | 首次创建天数 | 关注理由 |
|---|---|---|
| [#7211](https://github.com/agentscope-ai/QwenPaw/pull/7211) `fix(runtime): prevent injected context from persisting` | ~58 天 | L 级、Ready-for-human-review 状态、first-time-contributor，长期 pending |
| [#7654](https://github.com/agentscope-ai/QwenPaw/pull/7654) `audio-fallback classifier` 扩展 | ~39 天 | 与 [#8171](https://github.com/agentscope-ai/QwenPaw/issues/8171) 关联，社区呼声高 |
| [#2882](https://github.com/agentscope-ai/QwenPaw/issues/2882) Matrix 配置空格问题 | ~199 天（4 月） | 长期未根治，影响 Matrix 用户 |
| [#1612](https://github.com/agentscope-ai/QwenPaw/issues/1612) Web UI `[object Object]` 显示 | ~217 天 | 自定义通道配置不可用的基础体验缺陷 |
| [#3361](https://github.com/agentscope-ai/QwenPaw/issues/3361) 飞书 console 配置报错 | ~187 天 | 飞书用户主流程之一 |

建议维护者优先处置 **[#7211](https://github.com/agentscope-ai/QwenPaw/pull/7211)** 与 **[#7654](https://github.com/agentscope-ai/QwenPaw/pull/7654)**，二者的合并将直接缓解最热的"会话锁定"社区声量。

---

### 维护者建议（摘要）

1. 集中合并音频/视频 fallback 修复（[#8215](https://github.com/agentscope-ai/QwenPaw/pull/8215)、[#7654](https://github.com/agentscope-ai/QwenPaw/pull/7654)、[#8299](https://github.com/agentscope-ai/QwenPaw/pull/8299)、[#8034](https://github.com/agentscope-ai/QwenPaw/pull/8034)），单独发一版以快速止血。
2. 对 [#8164](https://github.com/agentscope-ai/QwenPaw/pull/8164) 的 XXXL 级鸿蒙 PR 给出早期反馈。
3. 着手清理 [#3361](https://github.com/agentscope-ai/QwenPaw/issues/3361)、[#2882](https://github.com/agentscope-ai/QwenPaw/issues/2882)、[#1612](https://github.com/agentscope-ai/QwenPaw/issues

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/NousResearch/hermes-agent">NousResearch/hermes-agent</a></summary>

<think>The user wants me to generate a daily report for the Hermes Agent project based on GitHub data. Let me analyze the data carefully and produce a structured, professional report.

Let me first understand what I'm seeing:
- Project: Hermes Agent (NousResearch/hermes-agent)
- Date: 2026-10-18
- 24h Issues: 50 (46 new/active, 4 closed)
- 24h PRs: 50 (44 pending, 6 merged/closed)
- No new releases

Key observations:
1. Issue #134889 is the dominant tracking issue (175 comments) - related to unified gateway runtime
2. Multiple "Gateway fixes (#134889), package X" issues - this is clearly a major cleanup effort
3. PR #106742 merged on Oct 14 triggered many post-merge fixes
4. Lots of gateway-related fixes being pushed
5. Some closed issues showing progress

Let me organize:

**Today's Summary (速览):**
- High activity: 50 issues, 50 PRs in 24h
- Major work on gateway unified runtime post-merge fixes
- Several package-style tracking issues closing
- No releases

**Closed issues (4):**
- #139160 - Gateway fixes package 2 (closed)
- #137255 - TLS cert bundle bug (closed)
- #140337 - Gateway fixes package 9 (closed)
- #129075 - Local runtime vision capability (closed)

**Closed PRs (6):**
- Need to identify from the PR list... I see #140854 (CLOSED) is one

**Active areas:**
- Gateway/unified runtime fixes
- Kanban dispatcher
- Local model management
- WhatsApp/Telegram adapters
- Desktop/dashboard issues
- Credential/auth issues

**Bugs by severity:**
P0 issues:
- #134889 (gateway ownership)
- #137255 (TLS - closed)
- #135392 (gateway ownership restart loop)

P2 issues (many):
- Multiple gateway session state issues
- Kanban issues
- Local model issues

**Hot discussions:**
- #134889 - 175 comments (gateway tracking)
- #131859 - 44 comments (PR creation permission)
- #122160 - 10 comments (CLI bootstrap)
- #139160 - 8 comments (gateway fixes package 2)
- #137255 - 6 comments (TLS)

Let me now write this out in Chinese, since the user asked in Chinese.

Let me count closed items more carefully:
Closed issues: #139160, #137255, #140337, #129075 = 4 ✓
Closed PRs: I need to identify. Looking at the PR list, I see:
- #140854 [CLOSED] - feat(api): serve stored images

I only see one closed PR clearly. Let me note that I have limited visibility into the other 5 closed PRs but only one is shown in the top 20.

Now let me structure the report properly.

For the "待处理积压" (backlog) section, I should look at issues that have been open for a long time without resolution:
- #70547 - from 2026-07-24 (about 3 months old) - Kanban dispatcher
- #54197 - from 2026-06-28 (about 4 months old) - Browserbase warnings
- #96683 - from 2026-08-27 - Project workspaces
- #96759 - from 2026-08-28 - Screenshot attachments

Let me write this out now.</think>

# Hermes Agent 项目动态日报
**日期：2026-10-18**
**数据范围：过去 24 小时**

---

## 1. 今日速览

Hermes Agent 今日呈现**高活跃度集中修复状态**：24 小时内产出 50 条 Issue 与 50 条 PR 更新，但核心主线围绕一个大型合并展开——10 月 14 日合入 `main` 的 [#106742](https://github.com/NousResearch/hermes-agent/pull/106742)（统一网关运行时）触发了大规模 post-merge 修复工作，多个 "Gateway fixes (#134889)" 分包正在批量收口。Issues 关闭率 8%、PR 合并/关闭率 12%，属于"密集治理期"而非新版本冲刺阶段。无新版本发布，社区聚焦于稳定性与回归问题修复。

---

## 2. 版本发布

**今日无新版本发布。**

---

## 3. 项目进展

今日明确关闭/合入的关键条目（4 个 Issue、6 个 PR，其中 5 个 PR 在 Top 20 之外但计入总数）：

| 类型 | 编号 | 标题 | 意义 |
|---|---|---|---|
| Issue | [#139160](https://github.com/NousResearch/hermes-agent/issues/139160) | Gateway fixes package 2: session creation / 模型选择 / 凭据 | 全部条目已修复或归类，整包关闭 |
| Issue | [#140337](https://github.com/NousResearch/hermes-agent/issues/140337) | Gateway fixes package 9: 17 个 detach / 连接 / Windows 残留 | 17 项跨 5 通道问题集中关闭 |
| Issue | [#137255](https://github.com/NousResearch/hermes-agent/issues/137255) | TLS 客户端在 env 轮换后死亡 | P0 严重问题已修复并关闭 |
| Issue | [#129075](https://github.com/NousResearch/hermes-agent/issues/129075) | 本地运行时 vision 能力探测加载整模型 | 已关闭 |
| PR | [#140854](https://github.com/NousResearch/hermes-agent/pull/140854) | feat(api): 为 API server 暴露已存储图片 | 已关闭（未合并） |

**整体判断**：项目处于"统一网关架构落地后修缮"阶段。Bug 批量关闭但 PR 仍以新增为主（44 待合并 vs 6 已合并/关闭），说明修复方案被持续提交，等待审阅与合并。架构演进方向明确，回归风险已被主动管理。

---

## 4. 社区热点

**讨论最活跃的 Issues（评论数 Top 5）：**

1. **[#134889](https://github.com/NousResearch/hermes-agent/issues/134889) — 175 条评论** 🏆
   - 标题：*Tracking: one gateway owns every local session — post-merge fixes*
   - 这是今日当之无愧的"核心战"。[#106742](https://github.com/NousResearch/hermes-agent/pull/106742) 合并到 `main` 后由 [@unsupportedpastels](https://github.com/unsupportedpastels) 牵头拆分为多个修复包（package 1–9），覆盖 CLI、Desktop、TUI、Gateway、session、profile、streaming、Windows、macOS 等几乎全部前端表面。
   - **诉求**：保证"任何与本地 session 通信的表面都唯一归属于一个网关"，杜绝两后端争抢同一会话。

2. **[#131859](https://github.com/NousResearch/hermes-agent/issues/131859) — 44 条评论**
   - 标题：*Cannot open a pull request via API: CreatePullRequest permission error*
   - 真实用户 [@kuehnberger](https://github.com/kuehnberger) 反馈：fork 仓库能创建 Issue、但 PR 创建失败，其他人正常。讨论聚焦权限边界与 API 行为差异。

3. **[#122160](https://github.com/NousResearch/hermes-agent/issues/122160) — 10 条评论**
   - Windows 源码安装下 `hermes_cli` 引导机制错误地重执行外部 Python 脚本，导致工作目录丢失。

4. **[#139160](https://github.com/NousResearch/hermes-agent/issues/139160) — 8 条评论**（已关闭）
   - 见上方"进展"部分，体现社区追踪力度。

5. **[#137255](https://github.com/NousResearch/hermes-agent/issues/137255) — 6 条评论**（已关闭）
   - P0 TLS 死锁问题修复并关闭，社区响应及时。

---

## 5. Bug 与稳定性

### 🔴 P0 级（需紧急关注）

| Issue | 描述 | 平台 | 状态 |
|---|---|---|---|
| [#134889](https://github.com/NousResearch/hermes-agent/issues/134889) | 统一网关 session 归属冲突 | 全平台 | 多个 PR 推进中（package 1/2/9 已关闭） |
| [#135392](https://github.com/NousResearch/hermes-agent/issues/135392) | 新建 Nous Cloud 实例环境更新后进入网关归属死循环 | Cloud | 需复现，无 fix PR |
| [#137255](https://github.com/NousResearch/hermes-agent/issues/137255) | TLS 客户端在 env 轮换后死亡 | 全平台 | ✅ 已关闭 |

### 🟠 P2 级（已分配 fix PR）

| Issue | 标题 | 修复 PR |
|---|---|---|
| [#122160](https://github.com/NousResearch/hermes-agent/issues/122160) | hermes_cli 引导误重执行外部脚本 | 等待 PR |
| [#123184](https://github.com/NousResearch/hermes-agent/issues/123184) | macOS Keychain 截断 Claude Code 凭据 | 等待 PR |
| [#140860](https://github.com/NousResearch/hermes-agent/issues/140860) | 非 loopback 绑定仪表板 Chrome 卡死（uvicorn 0.41.0 缺陷） | 等待 PR |
| [#140638](https://github.com/NousResearch/hermes-agent/issues/140638) | WhatsApp adapter 发送失败不可重试 | 等待 PR |
| [#140845](https://github.com/NousResearch/hermes-agent/issues/140845) | Telegram 编辑消息触发 admission_conflict | 等待 PR |
| [#140803](https://github.com/NousResearch/hermes-agent/issues/140803) | `/kanban` `/curator` 带引号参数崩溃 | 等待 PR |
| [#140838](https://github.com/NousResearch/hermes-agent/issues/140838) | 吊销的 Codex OAuth 导致模型列表不全 | 等待 PR |
| [#140858](https://github.com/NousResearch/hermes-agent/issues/140858) | 卡牌 owner receipt 未释放，无法被任何调度器认领 | 等待 PR |
| [#140786](https://github.com/NousResearch/hermes-agent/issues/140786) | 用户轮合并后时间戳未更新 | 等待 PR |
| [#140606](https://github.com/NousResearch/hermes-agent/issues/140606) | 外部进程 provider 无法启用流式输出 | 等待 PR |
| [#140758](https://github.com/NousResearch/hermes-agent/issues/140758) | Nous 缓存令牌 ~400k 流失（98%→4%→4%） | 等待 PR |

### 🟡 P3 / 其他

| Issue | 标题 |
|---|---|
| [#131859](https://github.com/NousResearch/hermes-agent/issues/131859) | API 创建 PR 权限错误（被阻塞） |
| [#54197](https://github.com/NousResearch/hermes-agent/issues/54197) | 本地浏览器模式仍输出 Browserbase 警告 |
| [#126631](https://github.com/NousResearch/hermes-agent/issues/126631) | macOS llama-server 残留内存 |
| [#140437](https://github.com/NousResearch/hermes-agent/issues/140437) | Home Manager 模块改 .env 不重启服务 |

---

## 6. 功能请求与路线图信号

| 提议 | 编号 | 信号强度 |
|---|---|---|
| **Kanban 可配置分派器 spawn**（外部 CLI worker 支持） | [#70547](https://github.com/NousResearch/hermes-agent/issues/70547) | ⭐⭐⭐ 长期高赞（2 个 👍），已进入实质方案讨论 |
| **显式项目工作区 + 跨渠道 session 路由** | [#96683](https://github.com/NousResearch/hermes-agent/issues/96683) | ⭐⭐⭐ 与 #134889 架构演进契合 |
| **Desktop live-turn 支持截图附件** | [#96759](https://github.com/NousResearch/hermes-agent/issues/96759) | ⭐⭐ 桌面端体验增强 |
| **Provider 凭据池支持额外环境变量源** | [#140821](https://github.com/NousResearch/hermes-agent/issues/140821) | ⭐⭐ 多账户/多订阅场景，与 OpenAI 兼容接口相关 |
| **归档脏 worktree + 全仓库扫描 + dirty 退出询问** | [PR #140603](https://github.com/NousResearch/hermes-agent/pull/140603) | ⭐⭐ 由核心维护者 [@teknium1](https://github.com/teknium1) 提交 |
| **Desktop Subagents 模型配置面板** | [PR #129142](https://github.com/NousResearch/hermes-agent/pull/129142) | ⭐⭐ 配置 UX 优化 |
| **辅助压缩路由按端点作用域** | [PR #115232](https://github.com/NousResearch/hermes-agent/pull/115232) | ⭐⭐ 本地模型 + 云模型混部场景 |
| **后审批 terminal 中间件** | [PR #135418](https://github.com/NousResearch/hermes-agent/pull/135418) | ⭐ 安全边界 |
| **Kanban 强制 terminal call 规则** | [PR #140870](https://github.com/NousResearch/hermes-agent/pull/140870) | ⭐ 完成 #50386 部分工作 |
| **Cron 执行结果保留 ≥30 天** | [PR #140872](https://github.com/NousResearch/hermes-agent/pull/140872) | ⭐⭐ 审计合规需求 |
| **Matrix MAS OAuth2 refresh-token** | [PR #140876](https://github.com/NousResearch/hermes-agent/pull/140876) | ⭐⭐ Matrix 平台现代化一部分 |

**路线图信号**：平台适配（Matrix / Telegram / WhatsApp）、凭据与认证（OAuth refresh、设备码超时、Codex 吊销处理）、本地模型治理（缓存、env 轮换、下载恢复）、配置 UX（Desktop 设置面板）、Kanban 工作流强化 是当前五大主线。

---

## 7. 用户反馈摘要

从 Issues 评论中可提炼的真实用户痛点：

- **😤 维护者治理负担**：[@unsupportedpastels](https://github.com/unsupportedpastels) 单人主导 #134889 拆分 9 个修复包，并明示"无人值守运行"。该贡献者已发声明"can't open a PR right now because of the per-author open-PR limit"（[#135782](https://github.com/NousResearch/hermes-agent/issues/135782)），**仓库存在每人开放 PR 数量限制**，可能拖累修复节奏。
- **🔐 凭据管理混乱**：
  - macOS Keychain 截断问题让用户"被登出 Claude Code"（[#123184](https://github.com/NousResearch/hermes-agent/issues/123184)）
  - Codex OAuth 吊销后模型列表静默不全（[#140838](https://github.com/NousResearch/hermes-agent/issues/140838)）
  - 用户希望"凭据池支持额外 env 变量源"以保留所有 key 在 `.env` 中（[#140821](https://github.com/NousResearch/hermes-agent/issues/140821)）
- **💸 成本与缓存焦虑**：用户 [@Xipong](https://github.com/Xipong) 反馈 Nous 上 400k 暖缓存令牌被白白消耗（98%→4%→4%），已开始关注订阅消耗速度（[#140758](https://github.com/NousResearch/hermes-agent/issues/140758)）
- **🪟 Windows 体验**：多个 Issue 聚焦 Windows 特有回归——非 loopback 绑定仪表板在 Chrome 卡死（[#140860](https://github.com/NousResearch/hermes-agent/issues/140860)）、UCRT64 Git trampoline 恢复缺失（[PR #140878](https://github.com/NousResearch/hermes-agent/pull/140878)）、elevated gateway 控制管道身份识别（[PR #140783](https://github.com/NousResearch/hermes-agent/pull/140783)）
- **🤖 机器人提交比例高**：观察今日 PR 作者如 `dust-11`、`ocasta181`、`fangmaster35`、`DearGlory`、`vlify`、`GregoryMoravAgente`、`tsella`、`tdreyno`、`33hodl`、`liuhao1024` 等大量代理/工具化账户，社区自动化水平较高
- **🙋 工作流割裂**：用户 [@ekama](https://github.com/ekama) 明确提出"多 Telegram 账号 / 群组 / 桌面端切换同一项目时 session 路由困难"（[#96683](https://github.com/NousResearch/hermes-agent/issues/96683)），反映多渠道项目协作痛点

---

## 8. 待处理积压（需维护者关注）

### 长期未解决的重要 Issue

| Issue | 创建日期 | 标题 | 积压原因 |
|---|---|---|---|
| [#54197](https://github.com/NousResearch/hermes-agent/issues/54197) | **2026-06-28**（~4 个月） | Browserbase-specific warnings shown in local browser mode | 低优先级 P3，长期无人认领 |
| [#70547](https://github.com/NousResearch/hermes-agent/issues/70547) | **2026-07-24**（~3 个月） | Kanban configurable dispatcher spawn | `needs-decision`，维护者未拍板 |
| [#96683](https://github.com/NousResearch/hermes-agent/issues/96683) | **2026-08-27** | Project Workspaces & Cross-Channel Session Routing | `needs-decision` |
| [#96759](https://github.com/NousResearch/hermes-agent/issues/96759) | **2026-08-28** | Desktop screenshot/image attachments in live-turn steering | P3，无明确实施计划 |

### 流程层面风险

- **🚧 维护者瓶颈**：[#135782](https://github.com/NousResearch/hermes-agent/issues/135782) 作者明确指出"per-author open-PR limit"阻止其提交 ready 的修复（3 行 fix on branch）。建议维护者评估该限制是否仍适用于当前活跃开发节奏。
- **📊 PR 待合并比例**：44/50 = 88% 待合并，建议关注审阅资源是否充足。

### 已合并等待后续的回归修复

[#106742](https://github.com/NousResearch/hermes-agent/pull/106742) 合并后产生大量小修复（packages 1/2/9 已关闭，1/3-8 仍在进行），需关注是否还有未被追踪的回归点。

---

## 附：项目健康度评分（定性）

| 维度 | 评级 | 说明 |
|---|---|---|
| 活跃度 | 🟢 高 | 50/

</details>

<details>
<summary><strong>OpenHuman</strong> — <a href="https://github.com/tinyhumansai/openhuman">tinyhumansai/openhuman</a></summary>

<think>Let me analyze the GitHub data for OpenHuman and generate a comprehensive daily report.

Key observations:
1. Issues: 50 updated (5 new/active, 45 closed) - high closure rate
2. PRs: 13 updated (12 open, 1 closed)
3. No releases
4. The issues show a major refactor effort - moving from local implementations to upstream libraries (tinyagents, tinychannels, tinystoragedrivers)
5. Major epic #7973 about "uniform storage schema v2" with many sub-issues
6. There's a security-related issue #6260 about Voice STT not having EgressDescriptor
7. PR #8064 is a large storage schema v2 PR
8. The project seems to be in a major consolidation/refactor phase

Let me structure the report professionally.</think>

# OpenHuman 项目日报
**日期：2026-10-18**
**数据周期：过去 24 小时**

---

## 1. 今日速览

OpenHuman 今日进入了一轮密集的"统一存储架构 v2"重构冲刺——围绕 Epic #7973 一次性关闭了大量子任务 Issues（45/50 关闭率 90%），同时打开了 13 个待合并 PR（12 OPEN）。整体活跃度处于高位，但绝大多数工作集中在内部架构整合（向 `tinyagents`/`tinychannels`/`tinystoragedrivers` 等上游库迁移），社区可见的新版本发布为零。需特别关注的遗留安全 Issue #6260（语音 STT 缺少 EgressDescriptor）仍未关闭。

---

## 2. 版本发布

⚠️ **无新版本发布。**

过去 24 小时没有 Release 标记。这与项目当前以"架构合并 + 重构"为主的工程节奏一致：大量模块在统一到上游库，预计下一次版本号跃迁会在 Epic #7973（uniform storage schema v2）落地之后。

---

## 3. 项目进展

### 已合并/关闭的关键 PR

| PR | 标题 | 影响 |
|----|------|------|
| [#7998](https://github.com/tinyhumansai/openhuman/pull/7998) | fix(test): stabilize CI after upstream merge | 修复上游合并后的 CI 抖动，验证方式切换为 `threads_messages_list`（读取当前 SQLite 后端），并把可复用 Rust 测试锁定到 digest-pinned 模块发布。CI 基线得以稳定。 |

### 重大待合并 PR（进展中的核心工作）

- **[#8064](https://github.com/tinyhumansai/openhuman/pull/8064)** — `feat(storage): uniform storage schema v2, one storage.db per user, layout migration`
  这是 Epic #7973 的"总装件"：把 `tinystoragedrivers v1.0.0` 作为顶层子模块 patch 到每个模块，组合 28 个 owner 的 schema，落地单用户单库的 layout 迁移。该 PR 一旦合并，将一次性推进数十个关闭的子任务。

- **[#8066](https://github.com/tinyhumansai/openhuman/pull/8066)** + **[#8067](https://github.com/tinyhumansai/openhuman/pull/8067)** — EX63 验证 CI 时间预算从 120 分钟提升到 180 分钟，避免 Tinymold 签名 nextest 任务被旧 workflow 取消。

- **[#7771](https://github.com/tinyhumansai/openhuman/pull/7771)** — `feat(autonomous): modern execution loop, adaptive recovery and failure policies`
  引入可持久化的自主执行服务与自适应恢复策略（停滞切片触发 `RECOVERY:` → `REPLAN:`），并把 `file_write`/`apply_patch` 后验证失效的逻辑做了修正。

- **[#7770](https://github.com/tinyhumansai/openhuman/pull/7770)** — `fix(security): block unbounded root filesystem scans in shell policy`
  P2 级安全修复，阻止 `find /`、`grep -r /`、`ls -R /System` 等无界扫描触发 macOS TCC 系统授权弹窗。

- **[#8065](https://github.com/tinyhumansai/openhuman/pull/8065)** — `fix(agent): refresh process agent registry after agent_registry_update`
  P2 级修复：`update_agent` 现在即时刷新进程内 agent 注册表，子代理 allowlist 覆盖无需重启即可生效。

### 整体推进度评估
本次重构属于"基础设施层归一"，未直接带来用户可见的新功能，但**显著降低了代码冗余**——例如 #7935/#7957/#7951/#7953 等多个 Issue 都在计划删除上千行与上游重复的本地实现（如 `progress_tracing/collector` 1771 行、`lifecycle.rs` 1235 行）。如果 PR #8064 顺利合并，OpenHuman 的存储层将与上游 TSD v1.0.0 严格对齐。

---

## 4. 社区热点

按评论数排序，今日最活跃的 Issues：

| Issue | 标题 | 评论 | 关注点 |
|-------|------|------|--------|
| [#7975](https://github.com/tinyhumansai/openhuman/issues/7975) | Vendor tinystoragedrivers as a top-level submodule | 3 | 子模块 vendor 策略 + Cargo `[patch]` 强制解析 |
| [#7974](https://github.com/tinyhumansai/openhuman/issues/7974) | tinystoragedrivers: land the uniform v2 schema and release v1.0.0 | 3 | v2 schema 落地（scope grammar、Key、文档/流/Blob 步骤等） |
| [#7997](https://github.com/tinyhumansai/openhuman/issues/7997) | OpenHuman: layout migration, archive and storage CLI | 2 | `storage/layout/` 迁移流程（OS lock → VACUUM INTO → zstd 备份） |
| [#6260](https://github.com/tinyhumansai/openhuman/issues/6260) | **Voice STT has no EgressDescriptor** | 2 | **隐私合规隐患**（仍未关闭，长期 OPEN） |
| [#7996](https://github.com/tinyhumansai/openhuman/issues/7996) | OpenHuman: layout v2 (one storage.db per user) | 2 | profile layout 解析逻辑 |

**背后诉求分析**：
- 排在前面的几乎全部是 Epic #7973 的子任务，反映出项目当前最核心的工程压力是 **统一存储抽象**——从多数据库、多 schema 收敛到单一 v2 schema。
- 真正具有"社区讨论密度"的反而是 #6260（隐私漏洞），但目前仅 2 条评论 + 0 赞，说明该项目以**内部开发为主、社区反馈为辅**，与开源个人 AI 助手项目应有形态略有偏差。

---

## 5. Bug 与稳定性

| 严重度 | Issue/PR | 状态 | 说明 |
|--------|-----------|------|------|
| 🟠 **P2 安全** | [#6260](https://github.com/tinyhumansai/openhuman/issues/6260) | OPEN，无 fix PR | 语音 STT 离设备上传麦克风音频但缺少 `EgressDescriptor`，S7 的 `local_only` 实际无法拦截。已存在逾 1 个月。 |
| 🟠 **P2 安全** | [#7770](https://github.com/tinyhumansai/openhuman/pull/7770) | OPEN PR（未合并） | 无界文件系统扫描会触发 macOS TCC 授权弹窗，shell 策略应拦截。 |
| 🟡 **P2 功能/正确性** | [#8065](https://github.com/tinyhumansai/openhuman/pull/8065) | OPEN PR（待合并） | `agent_registry_update` 不刷新进程内注册表，allowlist 覆盖需重启才生效。 |
| 🟡 **P2 正确性** | [#7968](https://github.com/tinyhumansai/openhuman/issues/7968) | 今日关闭 | 外部渠道（bot tokens）走 A 路径（内存历史，无 SessionRef），与宿主路径不一致，已纳入重构方案。 |
| 🟢 **P3** | [#8060](https://github.com/tinyhumansai/openhuman/pull/8060) | OPEN PR | `delegate_graph` 在模型错误信息中报告不一致。 |
| 🟢 **P3** | [#8061](https://github.com/tinyhumansai/openhuman/pull/8061) | OPEN PR | 语音上传隐私策略前置强制 + 回归测试覆盖 7 条路由。 |
| 🟢 **P3** | [#8062](https://github.com/tinyhumansai/openhuman/pull/8062) | OPEN PR | "关于"页面删除了 #7449 中识别的 4 项未实现能力承诺。 |
| 🟢 **P3** | [#7769](https://github.com/tinyhumansai/openhuman/pull/7769) | OPEN PR | 思考计时器按 `currentRequestId` 锚定，新增 15 分钟阈值。 |

**观察**：今日修复整体偏向"修正文档/UI 承诺"与"补齐策略钩子"，而非回归崩溃；尚无新增的崩溃/数据丢失类 Issue 报告。

---

## 6. 功能请求与路线图信号

### 直接来自用户需求的增强
- **[#7966](https://github.com/tinyhumansai/openhuman/issues/7966)** — In-app voice notes（录音发送、回放带字幕、持久化助手语音回复）。当前 dictation/PTT 只把语音转文字再发送，**用户无法发送语音消息**；助手 `speak_reply` 也是临时 TTS 而非持久化。该 Issue 反映出明确的"原生消息体验"诉求。
- **[#7965](https://github.com/tinyhumansai/openhuman/issues/7965)** — Voice host ports: Transcriber/SpeechSynthesizer。TTS 后端目前只接 `/openai/v1/audio/speech`，扩展性受限。
- **[#7771](https://github.com/tinyhumansai/openhuman/pull/7771)** — 自主代理自适应恢复策略已进入 PR 阶段，可能进入下个版本。

### 路线图信号
项目当前路线图清晰呈现在三个 Epic 中：
1. **Epic #7973 — Uniform Storage Schema v2**（大量子任务今日关闭，#8064 是 PR 形式落地）
2. **TinyChannels v2 + 渠道重构**（#7967/#7968/#7971/#7972）
3. **Agent/tinyagents 整合**（#7935/#7950–#7960）

预计下个版本（约 v1.x → v2.x 跳跃）会集中在"存储层 + 渠道层"两项重构合并。

---

## 7. 用户反馈摘要

⚠️ **本次数据集中几乎没有"非维护者"提交者**——绝大部分 Issues/PR 由 `@senamakel`、`@taljeri`、`@daniyyell-dev`、`@sx4im`、`@shaurya703`、`@hemanth1999k`、`@YellowSnnowmann` 等少数核心贡献者驱动，且单人/单组织连续提交大量结构化任务清单。

可提炼的真实用户痛点（来自 Issue 描述而非评论）：

- **隐私透明度不足**：Voice STT 不带 `EgressDescriptor`（#6260），外部用户/审核者无法直观看到"麦克风数据离开了设备"。这与 S2 disclosure 层承诺脱节。
- **能力声明与实现脱节**：#7449 / #8062 显示"关于"页面曾承诺尚未实现的能力，社区信任受损。
- **TCC 弹窗骚扰**（#7770）：macOS 上盲扫 `/`、`/System`、`/Applications` 会弹出系统授权框，影响普通用户信任感。
- **重启依赖**（#8065）：用户修改代理白名单需要重启进程，体验割裂。
- **缺少原语**：voice-note 双向消息（#7966）属于"日常聊天"应得体验，但当前缺失。

满意侧信号较少，缺乏外部用户"👍"或正面评论；项目目前更像**内部工程推进**状态。

---

## 8. 待处理积压

### 长期未响应的关键 Issue

| Issue | 标题 | 创建日期 | 状态 |
|-------|------|----------|------|
| [#6260](https://github.com/tinyhumansai/openhuman/issues/6260) | Voice STT has no EgressDescriptor | 2026-09-15 | OPEN 已 33 天，0 赞 |
| [#7361](https://github.com/tinyhumansai/openhuman/pull/7361) | ci: typecheck the e2e specs in the frontend lane | 2026-10-10 | OPEN PR 8 天未审查 |

### 待合并 PR 积压（按优先级）

| 优先级 | PR | 等待天数（截至 10-18） |
|--------|----|-----------------------|
| P2 | [#7770](https://github.com/tinyhumansai/openhuman/pull/7770) security fix | 5 |
| P2 | [#8065](https://github.com/tinyhumansai/openhuman/pull/8065) agent registry refresh | 1 |
| P3 | [#7771](https://github.com/tinyhumansai/openhuman/pull/7771) autonomous loop | 5 |
| P3 | [#8060](https://github.com/tinyhumansai/openhuman/pull/8060) delegate_graph | 1 |
| P3 | [#8061](https://github.com/tinyhumansai/openhuman/pull/8061) voice privacy | 1 |
| P3 | [#8062](https://github.com/tinyhumansai/openhuman/pull/8062) about-app cleanup | 1 |
| P3 | [#7769](https://github.com/tinyhumansai/openhuman/pull/7769) thinking timer | 5 |
| P3 | [#7361](https://github.com/tinyhumansai/openhuman/pull/7361) e2e typecheck | 8 |
| P3 | [#8059](https://github.com/tinyhumansai/openhuman/pull/8059) provider headers | 1 |
| P3 | [#8066](https://github.com/tinyhumansai/openhuman/pull/8066) EX63 nextest | 1 |
| P3 | [#8067](https://github.com/tinyhumansai/openhuman/pull/8067) 180min budget | 1 |

### 建议关注
1. **#6260 安全 Issue** 应优先处理——它直接涉及麦克风数据外发的合规问题，且公开 Issue/PR 中已具备 fix 路径（参考 #8061 PR 中"EgressDescriptor 强制前置"的设计）。
2. **PR #7361** 已 8 天未审查，建议维护者分配 reviewer。
3. 关注 **PR #8064** 的合并窗口——它阻塞了至少 10 个已关闭 Issue 的真正"完成"语义。

---

### 项目健康度总评

| 维度 | 评分 | 说明 |
|------|------|------|
| 开发活跃度 | ⭐⭐⭐⭐⭐ | 13 PR + 50 Issue，单日量极高 |
| 社区参与度 | ⭐⭐ | 几乎全部由内部贡献者驱动 |
| 安全响应 | ⭐⭐ | #6260 已挂 1 个月，P2 修复 PR #7770 仍 OPEN |
| 代码质量趋势 | ⭐⭐⭐⭐ | 大规模去重 + 统一上游，方向正确 |
| 发布节奏 | ⭐⭐ | 无新版本，重构未到合并节点 |

**结论**：OpenHuman 当前处于"内部架构大重构"窗口期，工程纪律良好（任务拆分细、依赖关系清晰），但**对外可见的发布、社区参与、安全响应是短板**。建议维护者在合并 PR #8064 前后安排一次小版本发布，把已经稳定的 #8060/#8061/#8062 等 P3 修复一起带出，重建社区节奏感。

</details>

---
*本日报由 [Big Model Radar](https://github.com/96loveslife/big_model_radar) 自动生成。*
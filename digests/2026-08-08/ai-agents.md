# OpenClaw 生态日报 2026-08-08

> Issues: 500 | PRs: 500 | 覆盖项目: 8 个 | 生成时间: 2026-08-08 01:58 UTC

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

<think>Let me analyze the data carefully and generate a comprehensive daily report for OpenClaw project.

Key observations:
1. No releases today
2. 500 Issues updated (467 new/active, 33 closed)
3. 500 PRs updated (408 pending merge, 92 merged/closed)
4. Several P0/P1 critical bugs:
   - #119263 Agent DB v14->v15 migration fails (P0)
   - #118772 premature compaction at 4-8% context window (P0)
   - #91588 Gateway memory leak (P0)
   - #101290 CLI startup preflight DB corruption (P0)
5. Closed Issues: #116277 (DeepSeek v4 Flash silent reply) was closed today
6. Several closed PRs today: #120362, #112808, #120418, #120420, #120365, #120372, #120395, #120391

Let me write a structured daily report in Chinese.</think>

# OpenClaw 项目日报 · 2026-08-08

> 数据周期：过去 24 小时 · 数据源：[github.com/openclaw/openclaw](https://github.com/openclaw/openclaw)

---

## 一、今日速览

OpenClaw 仓库今日维持**极高的开发活跃度**：500 条 Issues 更新（467 新开/活跃、33 关闭），500 条 PR 更新（408 待合并、92 已合并/关闭），但**无新版本发布**。从数据看，项目仍处于 2026.7.2 → 2026.8 系列过渡期的密集修复与硬化阶段，多个 **P0 级稳定性问题**（数据库迁移失败、内存泄漏、状态损坏）进入公众视野并出现对应修复 PR；同时大批 maintainer 主导的 CI/QA 硬化 PR（`steipete`、`vincentkoc`）被快速关闭，说明 release 工程化工作正在并行推进。整体健康度**中等偏紧**：核心功能迭代活跃，但 Beta 通道暴露的回归问题较多，社区对稳定性诉求强烈。

---

## 二、版本发布

**无新版本发布。** 当前最新 Beta 仍为 `2026.7.2-beta.7`，稳定线为 `2026.7.1`/`2026.6.x` 系列。从 PR #119087（[#119087](https://github.com/openclaw/openclaw/issues/119087)）与 PR #119263（[#119263](https://github.com/openclaw/openclaw/issues/119263)）等反馈看，2026.7.2 系列在冷启动性能、数据库 schema v14→v15 迁移、嵌入式 agent 计数等多个维度出现回归，预计 release 工程团队（[PR #120421](https://github.com/openclaw/openclaw/pull/120421)、[PR #120392](https://github.com/openclaw/openclaw/pull/120392)）正在为下次合并窗口做准备。

---

## 三、项目进展

### 已合并/关闭的代表性 PR

| PR | 作者 | 主题 | 影响 |
|---|---|---|---|
| [#120362](https://github.com/openclaw/openclaw/pull/120362) | @steipete | `test(qa)` 会话与 Workboard 托管 worktree 生命周期覆盖 | 修复 symlinked state-dir 锁盲区，强化 QA 实验室 |
| [#120418](https://github.com/openclaw/openclaw/pull/120418) | @steipete | `test(qa)` UX 生产者聚合状态派生 | 关闭 [#120417](https://github.com/openclaw/openclaw/issues/120417)，UX Matrix 场景化结果可追溯 |
| [#120420](https://github.com/openclaw/openclaw/pull/120420) | @steipete | `fix(queue)` 跨 turn 边界的 steer 消息按到达顺序投递 | 解决"后发消息抢占先发 steer"的顺序破坏 |
| [#120372](https://github.com/openclaw/openclaw/pull/120372) | @steipete | `fix(ui)` 初始鉴权期间隐藏连接表单 | 修复 trusted-proxy / Tailscale 登录闪烁（[#101847](https://github.com/openclaw/openclaw/issues/101847)） |
| [#120365](https://github.com/openclaw/openclaw/openclaw/pull/120365) | @steipete | `fix(ci)` 强化 hydrated dead-export 扫描 | 消除 AWS Crabbox 上的假阳性 |
| [#120395](https://github.com/openclaw/openclaw/pull/120395) | @steipete | `fix(ci)` 支持 Windows 环境变量指定目标 | CI 平台覆盖扩展 |
| [#120391](https://github.com/openclaw/openclaw/pull/120391) | @steipete | `fix(ui)` 清除执行继续时的陈旧活动错误高亮 | WebUI 体验修复（[#120371](https://github.com/openclaw/openclaw/issues/120371)） |
| [#112808](https://github.com/openclaw/openclaw/pull/112808) | @giodl73-repo | `feat(claws)` 生命周期 Control UI（experimental） | 新增只读 Claw 状态/doctor 投影 |
| [#115962](https://github.com/openclaw/openclaw/pull/115962) | @giodl73-repo | `feat(claws)` 应用 schema-v1 profile 要求 | RFC #48/#52/#56 一致性落实 |

**整体评估**：今日 CI/QA 基础设施硬化进度显著（7/10 关闭 PR 与 CI、QA、UX 校验相关），但**用户面向的功能 PR 合并数较少**，提示团队当前优先级是"先把 Beta 通道修稳"，新功能暂缓进入主干。

---

## 四、社区热点

### 讨论最活跃的 Issues（按评论数排序）

1. **[#116277](https://github.com/openclaw/openclaw/issues/116277)** — 129 条评论 · DeepSeek v4 Flash 静默回复失败
   *今日已 CLOSED*。开发者反馈 Telegram 群组消息触发 DeepSeek-v4-Flash 时，OpenClaw 仅输出"未生成回复"占位文案，回退机制对用户不透明。社区强烈要求明确 fallback 来源与可观测性。

2. **[#116201](https://github.com/openclaw/openclaw/issues/116201)** — 59 条评论 · Realtime 语音会话状态无界保留
   高优先级 P1 资源/会话状态问题。Realtime 语音 provider 在慢/卡顿/突发流量下会保留已废弃的 consult work、大体积 provider 帧、pre-ready 音频，存在内存与算力耗尽风险。

3. **[#7707](https://github.com/openclaw/openclaw/issues/7707)** — 29 条评论 · 内存按来源打信任标签（防 memory poisoning）
   自 2026-02 起开放的增强请求，社区认可度高，主线仍未推进。

4. **[#77598](https://github.com/openclaw/openclaw/issues/77598)** — 23 条评论 · Pash dev agent 24h 行为观察笔记
   观察型 issue，强调"不主动干预"，体现 OpenClaw 在 agent 行为可观测性方面的成熟方法论。

5. **[#91588](https://github.com/openclaw/openclaw/issues/91588)** — 22 条评论 · Gateway 内存泄漏（350MB → 15.5GB → OOM）
   P0 级崩溃循环，影响稳定线用户。

### 评论最多的 PR

- **[#120362](https://github.com/openclaw/openclaw/pull/120362)**、`[#112808](https://github.com/openclaw/openclaw/pull/112808)`、`[#115962](https://github.com/openclaw/openclaw/pull/115962)` 等 XL 级维持者 PR 均已关闭，主要被 maintainer 团队快速接力处理。

**热点诉求总结**：用户集中呼吁（1）provider 失败路径的**可观测性**与**显式回退**，（2）**资源/会话状态**的硬性边界，（3）**安全边界与信任标签**。

---

## 五、Bug 与稳定性

### 🔴 P0 — 阻塞级（建议立刻修复）

| Issue | 描述 | 状态 |
|---|---|---|
| [#119263](https://github.com/openclaw/openclaw/issues/119263) | Agent DB v14→v15 迁移失败（`no such column: entry_valid`），gateway 拒绝启动（2026.7.2 b4f01af） | 升级链路 blocker，待 fix |
| [#118772](https://github.com/openclaw/openclaw/issues/118772) | embedded-agent-runner `sessionEntry.totalTokens` 累计膨胀，4–8% 上下文即触发过早 compaction → 数据丢失（2026.7.1+） | 待 fix |
| [#91588](https://github.com/openclaw/openclaw/issues/91588) | Gateway RSS 内存泄漏 350MB→15.5GB → OOM → `launchd-handoff` 重复重启 | 待 fix |
| [#101290](https://github.com/openclaw/openclaw/issues/101290) | CLI 启动 preflight 在 gateway 运行期间损坏 `openclaw.sqlite`（macOS 2026.6.6） | 待 fix |

### 🟠 P1 — 高优先级

| Issue | 描述 | Fix PR |
|---|---|---|
| [#116201](https://github.com/openclaw/openclaw/issues/116201) | Realtime 语音 provider 状态无界保留 | ❌ 无 |
| [#116022](https://github.com/openclaw/openclaw/issues/116022) | `beta.5 /new` 复用 stable session ID，无法恢复已退役 Codex 绑定 | ❌ 无 |
| [#49876](https://github.com/openclaw/openclaw/issues/49876) | Cron 会话在工具失败时输出 LLM 幻觉内容（信任与安全问题） | ❌ 无 |
| [#86684](https://github.com/openclaw/openclaw/issues/86684) | `sessions_yield` subagent 唤醒时父分支被低用量 compaction | PR 已 open |
| [#85030](https://github.com/openclaw/openclaw/issues/85030) | MCP 工具未注入 `sessions_spawn` 子代理 | ❌ 无 |
| [#115700](https://github.com/openclaw/openclaw/issues/115700) | `chat.send` "thread switched branches" 误报 | ✅ [#116382](https://github.com/openclaw/openclaw/pull/116382) |
| [#45494](https://github.com/openclaw/openclaw/issues/45494) | Cron 在 LLM API 持续 500 时耗尽 timeout 而非快速失败 | ❌ 无 |
| [#119087](https://github.com/openclaw/openclaw/issues/119087) | 2026.7.1→2026.7.2-beta.7 冷启动回归 2.5×（1-vCPU 容器） | ❌ 无 |
| [#98435](https://github.com/openclaw/openclaw/issues/98435) | MCP loopback 传输在 gateway 重启后 CLI 侧未自动重连 | ❌ 无 |
| [#109145](https://github.com/openclaw/openclaw/issues/109145) | Gateway HTTP 监听但 TCP 不接受连接（2026.7.1-beta.5） | ❌ 无 |
| [#90789](https://github.com/openclaw/openclaw/issues/90789) | claude-cli 合成 "No response requested." 占位导致 Telegram 静默无观测 | ❌ 无 |
| [#86012](https://github.com/openclaw/openclaw/issues/86012) | LINE channel：reply token 过期导致消息静默丢失 | ❌ 无 |
| [#117209](https://github.com/openclaw/openclaw/issues/117209) | `AuthProfileStoreUnreadable` 在 runtime snapshot 失败后粘滞 | ❌ 无 |
| [#119411](https://github.com/openclaw/openclaw/issues/119411) | memory watcher 不重新索引，`Dirty: no` 误报 | ❌ 无 |

### 🟡 P2 / 回归 / 体验类

- [#119796](https://github.com/openclaw/openclaw/issues/119796) — Windows: vitest teardown EBUSY unlink
- [#119086 同期 99586](https://github.com/openclaw/openclaw/issues/99586) — Runtime tool surface 在 gateway 操作后返回空 body
- [#108379](https://github.com/openclaw/openclaw/issues/108379) — Xiaomi MiMo 重复生成导致叙述重复后中止
- [#88079](https://github.com/openclaw/openclaw/issues/88079) — WebChat Kimi/DeepSeek Reasoner `reasoning_content` 未流式
- [#52186](https://github.com/openclaw/openclaw/issues/52186) — ElevenLabs TTS 成功后却播放 OpenAI 语音
- [#51429](https://github.com/openclaw/openclaw/issues/51429) — 工作路径 hardcode 到 `/Users/wangtao`
- [#74378](https://github.com/openclaw/openclaw/issues/74378) — Windows CLI 命令结束后 `node.exe` 进程残留
- [#30381](https://github.com/openclaw/openclaw/issues/30381) — `chatCompletions` 在 `x-openclaw-agent-id` 头存在时仍校验 `model`
- [#117609](https://github.com/openclaw/openclaw/issues/117609) — Embedded assistant 阶段未重试瞬态 LLM/socket 错误
- [#118560](https://github.com/openclaw/openclaw/issues/118560) — WebChat canvas 主会话重置后隐藏早期消息

**分析**：今日新增/活跃 P0–P1 缺陷集中在**数据库迁移、状态/会话、provider 失败路径**三大方向。其中**P0 数据库类问题（#119263、#101290）直接阻断升级**，对 release 工程是首要红灯；**MCP 工具注入缺失（#85030）**等高赞但缺 fix 的问题需要 maintainer 主动认领。

---

## 六、功能请求与路线图信号

| Issue | 提议 | 关联 PR / 信号 |
|---|---|---|
| [#7707](https://github.com/openclaw/openclaw/issues/7707) | 内存按来源打信任标签 | [#35203](https://github.com/openclaw/openclaw/issues/35203)、[#54373](https://github.com/openclaw/openclaw/issues/54373) 同源 RFC |
| [#22438](https://github.com/openclaw/openclaw/issues/22438) | 分层 bootstrap 加载节省 20–30% token | [#67419](https://github.com/openclaw/openclaw/issues/67419) 推动类似诉求 |
| [#35203](https://github.com/openclaw/openclaw/issues/35203) | 多 Agent 协作：能力画像 + 共享黑板 + 分层记忆 + token 治理 | 大型 RFC，社区关注 |
| [#78308](https://github.com/openclaw/openclaw/issues/78308) | MCP 工具调用走 `/approve` 通道鉴权 envelope | 安全边界路线图重点 |
| [#45608](https://github.com/openclaw/openclaw/issues/45608) | `/new` 与每日重置前也做 memory flush | 👍 4，社区高度认可 |
| [#81061](https://github.com/openclaw/openclaw/issues/81061) | `before_route_inbound_message` 预路由钩子 | 插件架构增强 |
| [#17840](https://github.com/openclaw/openclaw/issues/17840) | Reaction 触发 agent turn（opt-in） | 互动模式扩展 |
| [#87325](https://github.com/openclaw/openclaw/issues/87325) | Azure Foundry GPT Realtime Talk | Realtime 生态扩展 |
| [#99583](https://github.com/openclaw/openclaw/issues/99583) | 智能会话自动命名（懒生成 + 廉价模型） | UX 优化 |
| [#13219](https://github.com/openclaw/openclaw/issues/13219) | Per-model 用量日志（成本追踪） | 运维诉求 |
| [#119344](https://github.com/openclaw/openclaw/pull/119344) | Signal `signal-cli` 账户绑定适配器 | ✅ PR 已开 |
| [#120373](https://github.com/openclaw/openclaw/pull/120373) | Meta Muse Spark 1.2 模型 | ✅ PR 待合并 |
| [#80396](https://github.com/openclaw/openclaw/pull/80396) | 围栏代码块内 `MEDIA:` 跳过时给警告 | ✅ PR 待合并 |

**信号判断**：下一版本最可能纳入的方向是 (1) **MCP 安全/审批 envelope**（#78308），(2) **bootstrap 分层加载**（#22438/#67419），(3) **memory 信任/来源标签**（#7707/#54373）。三者均与上下文效率与安全边界相关，是 maintainer 反复出现的稳定话题。

---

## 七、用户反馈摘要

**真实痛点（来自 Issue 描述与评论）：**

1. **静默失败最令人沮丧**——多次报告 Telegram、LINE、WebChat 通道在 provider 出错时无任何回复或告警，用户"看不到失败、只能猜测"。(#116277, #90789, #86012, #115700)
2. **回归损害信任**——多名用户在升级到 2026.7.x 后遇到数据库损坏（[#101290](https://github.com/openclaw/openclaw/issues/101290)）、过早 compaction（[#118772](https://github.com/openclaw/openclaw/issues/118772)）、gateway 不接受连接（[#109145](https://github.com/openclaw/openclaw/issues/109145)）。"#101290 一周内四次数据库损坏"是典型极端案例。
3. **资源/成本失控**——bootstrap 文件每次 turn 重新注入消耗 20–30% token（[#67419](https://github.com/openclaw/openclaw/issues/67419)）；诊断日志无上限增长（[#75380](https://github.com/openclaw/openclaw/issues/75380)）；同一 workspace 多 agent 重复构建 vector index（[#95724](https://github.com/openclaw/openclaw/issues/95724)）。
4. **细节泄露与本地化失误**——`/Users/wangtao` 工作目录硬编码（[#51429](https://github.com/openclaw/openclaw/issues/51429)）让用户怀疑供应链审计。
5. **可观测性诉求强烈**——无论是 Pash 的 24h agent 行为笔记（[#77598](https://github.com/openclaw/openclaw/issues/77598)）还是 Codex worker runaway 硬化 sprint（[#99551](https://github.com/openclaw/openclaw/issues/99551)），社区希望"透明、可审计、可解释"。

**满意度信号**：Steipete / vincentkoc 主导的 CI/QA 硬化 PR 被社区广泛认作"放心补丁"，但功能层面仍嫌节奏过慢。

---

## 八、待处理积压（维护者关注提醒）

### 高优待响应 Issue（无 fix PR

---

## 横向生态对比

<think>The user wants me to generate a horizontal comparison analysis report based on the daily dynamics of various open-source projects. Let me carefully analyze each project's data and create a comprehensive cross-project comparison.

Let me organize the key data points from each project:

**OpenClaw** (核心参照)
- Issues: 500 updates (467 active, 33 closed)
- PRs: 500 updates (408 pending, 92 merged/closed)
- Releases: 0
- Health: Medium-tight, P0 stability issues, active iteration

**NanoBot**
- Issues: 9 updates (7 active, 2 closed)
- PRs: 21 updates (10 pending, 11 merged/closed)
- Releases: 0
- Health: Good, high activity, pre-release intensive phase

**PicoClaw**
- Issues: 4 updates (3 active, 1 closed)
- PRs: 14 updates (12 pending, 2 closed)
- Releases: 0
- Health: Medium, stale accumulation concern

**IronClaw**
- Issues: 50 updates (36 active, 14 closed)
- PRs: 50 updates (38 pending, 12 merged/closed)
- Releases: 0
- Health: High activity, Doc-Truth pipeline focus, stability pressure

**LobsterAI**
- Issues: 6 updates (3 active, 3 closed)
- PRs: 7 updates (1 pending, 6 merged/closed)
- Releases: 1 (2026.8.7)
- Health: Good, frequent releases, dense fixes

**QwenPaw**
- Issues: 31 updates (20 active, 11 closed)
- PRs: 47 updates (26 pending, 21 merged/closed)
- Releases: 1 (v2.1.0-beta.2)
- Health: High activity, v2.1.0 test phase, regression concerns

**Hermes Agent**
- Issues: 50 updates (46 active, 4 closed)
- PRs: 50 updates (45 pending, 5 merged/closed)
- Releases: 0
- Health: High activity, P1 bugs open, no release

**OpenHuman**
- Issues: 5 updates (5 active, 0 closed)
- PRs: 13 updates (7 pending, 6 merged/closed)
- Releases: 3 (v0.63.7, v0.63.11, v0.63.12)
- Health: Good release cadence, P0 regressions in latest version

Let me structure the comparison report now. I need to focus on:
1. 生态全景 - Big picture
2. 活跃度对比 - Activity table
3. OpenClaw 定位 - Positioning vs peers
4. 共同方向 - Common technical directions
5. 差异化 - Differentiation
6. 社区成熟度 - Maturity layers
7. 趋势信号 - Trend signals

I should be concise, professional, and data-driven.</think>

# 个人 AI 助手开源生态横向对比分析报告

**报告日期：2026-08-08 · 数据周期：过去 24 小时**

---

## 一、生态全景

2026-08-08 当日，个人 AI 助手/自主智能体开源生态整体处于**密集迭代与质量巩固并行的关键阶段**。从绝对活跃度看，OpenClaw（500 Issues / 500 PRs）、IronClaw（50/50）、Hermes Agent（50/50）、QwenPaw（31/47）四者构成第一梯队，反映出"主力项目仍在加速期"；而 NanoBot（9/21）、PicoClaw（4/14）、LobsterAI（6/7）则以更聚焦的修复包为特征。当日仅 LobsterAI（2026.8.7）、QwenPaw（v2.1.0-beta.2）、OpenHuman（v0.63.7 / v0.63.11 / v0.63.12）共 5 个版本释出，表明多数项目处于"修而不发"的硬化期。**社区关注的焦点高度收敛于五个方向**：上下文压缩可靠性、Provider 失败路径可观测性、MCP/Plugin 生态安全、记忆系统重构、以及多渠道一致性体验。

---

## 二、各项目活跃度对比

| 项目 | Issues 更新（活跃/关闭） | PRs 更新（待合并/已合并） | 今日 Release | 健康度 | 阶段特征 |
|---|---|---|---|---|---|
| **OpenClaw** | 500（467/33） | 500（408/92） | ❌ | 🟡 中等偏紧 | P0 稳定性修复密集期，多 maintainer 并行硬化 |
| **IronClaw** | 50（36/14） | 50（38/12） | ❌ | 🟡 中等 | Doc-Truth 治理 + 渐进式工具披露双主线推进 |
| **Hermes Agent** | 50（46/4） | 50（45/5） | ❌ | 🟡 中等偏紧 | P1 漏洞敞口大（OAuth/压缩崩溃），修复积压 |
| **QwenPaw** | 31（20/11） | 47（26/21） | ✅ v2.1.0-beta.2 | 🟡 中等 | Beta 测试高密度反馈期，含 6+ 项 UI 回归 |
| **NanoBot** | 9（7/2） | 21（10/11） | ❌ | 🟢 良好 | 小步快跑型迭代，WebUI/API 收敛顺利 |
| **LobsterAI** | 6（3/3） | 7（1/6） | ✅ 2026.8.7 | 🟢 良好 | 高频小版本发布，PR 流转效率高（6/7 落地） |
| **PicoClaw** | 4（3/1） | 14（12/2） | ❌ | 🟠 警告 | **stale 标记率 100%**，维护者响应链断裂 |
| **OpenHuman** | 5（5/0） | 13（7/6） | ✅×3（v0.63.7/11/12） | 🟡 中等偏紧 | 版本节奏强，但 v0.63.12 出现 2 项 P0 回归 |

**关键观察**：活跃度与健康度**不构成简单正相关**——OpenHuman 仅 5 条 Issue 更新却出现 P0 回归，PicoClaw 14 条 PR 中仅 2 条关闭则反映维护者瓶颈。判断项目健康应同时看"产出量"与"关闭率/响应延迟"。

---

## 三、OpenClaw 在生态中的定位

### 规模优势
OpenClaw 当日 500/500 的活跃体量是其他项目的 **10-100 倍**，是生态中绝对的"参照系"。这与其（假设的）成熟 maintainer 团队（steipete、vincentkoc 主导）、多平台覆盖（macOS/Windows/Linux/Termux）、以及"先稳定再发版"的工程纪律直接相关。

### 技术路线差异

| 维度 | OpenClaw | IronClaw | Hermes Agent | NanoBot |
|---|---|---|---|---|
| **架构核心** | 多 channel gateway + embedded runner | Doc-Truth + progressive tool disclosure | God-file 拆分中（Epic #78647） | WebUI/Channel/Plugin 三层 |
| **分发策略** | Beta 通道密集迭代 | 渠道连通性优先 | 稳定性修复优先 | 高频小步发布 |
| **社区规模** | 极大（500+ 互动/日） | 大（50+） | 大（50+） | 中（9-21） |

### 优势小结
- **稳定性深度**：OpenClaw 的 P0 修复（DB 迁移 #119263、内存泄漏 #91588）反映其已深入到基础设施层，是 PicoClaw 等轻量项目尚未触及的复杂度。
- **多平台覆盖**：从 #74378（Windows node 残留）、#119796（vitest EBUSY）等 Issue 看，OpenClaw 已建立完整的跨平台 QA 流程，这是 Hermes Agent 仍在追赶的领域。
- **生态广度**：MCP、Realtime Voice、多 Provider（DeepSeek/Gemini/Kimi/MiMo）覆盖明显领先于 PicoClaw 等聚焦型项目。

---

## 四、共同关注的技术方向

### 1. **上下文压缩可靠性**（OpenClaw、IronClaw、Hermes Agent）
- OpenClaw [#118772](https://github.com/openclaw/openclaw/issues/118772)：embedded-agent-runner 4–8% 即过早 compaction
- Hermes Agent [#79278](https://github.com/NousResearch/hermes-agent/issues/79278)：压缩丢失在途工具链（**非幂等操作重放风险**）
- Hermes Agent [#80449](https://github.com/NousResearch/hermes-agent/issues/80449)：压缩器保留超大单回合（PR #81444 已就绪）
- IronClaw [#7365](https://github.com/nearai/ironclaw/pull/7365)：memory-save guidance + always-on MEMORY.md
- **行业意义**：压缩策略正从"按 token 阈值切分"转向"按工具链完整性 + 语义边界"演进。

### 2. **Provider 失败路径的可观测性**
- OpenClaw [#116277](https://github.com/openclaw/openclaw/issues/116277)（129 评论）、[#90789](https://github.com/openclaw/openclaw/issues/90789)、[#86012](https://github.com/openclaw/openclaw/issues/86012)
- Hermes Agent [#79278](https://github.com/NousResearch/hermes-agent/issues/79278)
- LobsterAI [#2447](https://github.com/netease-youdao/LobsterAI/issues/2447)
- QwenPaw [#6811](https://github.com/agentscope-ai/QwenPaw/issues/6811)、[#6812](https://github.com/agentscope-ai/QwenPaw/issues/6812)
- **共识诉求**："静默失败"是用户流失的最大单一因素 — 必须显式暴露 fallback 来源与重试策略。

### 3. **MCP / Plugin 安全边界**
- OpenClaw [#78308](https://github.com/openclaw/openclaw/issues/78308)（`/approve` envelope）、[#85030](https://github.com/openclaw/openclaw/issues/85030)（MCP 工具未注入子代理）
- PicoClaw [#3302](https://github.com/sipeed/picoclaw/issues/3302)（OAuth 2.1）
- NanoBot [#5278](https://github.com/HKUDS/nanobot/issues/5278) / [#5279](https://github.com/HKUDS/nanobot/pull/5279)（会话历史越权读取）
- QwenPaw [#6688](https://github.com/agentscope-ai/QwenPaw/pull/6688)（plugin namespace 隔离）
- **趋势**：从"能调用"向"调用前鉴权/调用后审计"的全链路治理。

### 4. **记忆/上下文系统的信任与可追溯**
- OpenClaw [#7707](https://github.com/openclaw/openclaw/issues/7707)（按来源打信任标签）、[#45608](https://github.com/openclaw/openclaw/issues/45608)（`/new` 前 flush）
- Hermes Agent [#31584](https://github.com/NousResearch/hermes-agent/issues/31584)（记忆作为背景而非权威）、[#509](https://github.com/NousResearch/hermes-agent/issues/509)（认知记忆操作）
- IronClaw [#7185](https://github.com/nearai/ironclaw/issues/7185)（跨会话记忆召回）
- NanoBot [#5266](https://github.com/HKUDS/nanobot/issues/5266)（token 消耗透明，10 评论热点）
- **共识**：Memory poisoning 与记忆膨胀是横跨所有项目的长期痛点。

### 5. **多渠道一致性 UX**
- PicoClaw [#3307](https://github.com/sipeed/picoclaw/issues/3307)（Telegram 会话管理）、[#3283](https://github.com/sipeed/picoclaw/pull/3283)（钉钉图片）
- QwenPaw [#6786](https://github.com/agentscope-ai/QwenPaw/issues/6786)（Telegram ACL 重置）、[#6715](https://github.com/agentscope-ai/QwenPaw/pull/6715)（OneBot 媒体）
- OpenClaw [#109145](https://github.com/openclaw/openclaw/issues/109145)（gateway TCP 不接受连接）
- NanoBot [#5156](https://github.com/HKUDS/nanobot/pull/5156)（Telegram 静默停摆）
- **趋势**：从"通道协议适配"转向"通道抽象层 + 跨渠道一致性"。

---

## 五、差异化定位分析

| 项目 | 核心定位 | 目标用户 | 架构关键词 |
|---|---|---|---|
| **OpenClaw** | **跨平台全能型助手**（多 channel + 嵌入式 agent） | 个人开发者 / 中小企业运维 | Gateway + embedded runner + 多 Provider |
| **IronClaw** | **企业级 + 文档严谨型**（Doc-Truth 治理） | 企业内部部署 / 合规场景 | 渐进式工具披露 + 可审计 |
| **Hermes Agent** | **可扩展研究型 agent**（god-file 拆分中） | 高级用户 / 研究者 | 插件生态 + 长期记忆探索 |
| **QwenPaw** | **国产 LLM 优先 + 多通道场景** | 中文用户 / 自托管玩家 | 多 Provider 国内生态 + Docker 一键部署 |
| **NanoBot** | **轻量可扩展 WebUI 助手** | 多用户/多会话场景 | WebUI/Channel/Plugin 三层解耦 |
| **LobsterAI** | **教育/协作场景一体化** | 教育 / 团队协作用户 | Cowork + IM 数据分析 + Markdown |
| **PicoClaw** | **极致轻量化（$10 硬件 + <10MB）** | 嵌入式 / IoT / 极客 | Go 单二进制 + 多渠道网关 |
| **OpenHuman** | **桌面 AI 一等公民 + Voice 优先** | macOS 桌面用户 / Voice 体验派 | Tauri 桌面 + ElevenLabs 集成 |

**关键差异点**：
- **运行环境**：从 PicoClaw 的 10MB 嵌入式到 OpenHuman 的桌面 GUI，覆盖了完整的部署谱系。
- **协议对齐**：OpenClaw/ Hermes Agent 在 MCP 上较激进，IronClaw 偏向自有 Responses API，NanoBot/PicoClaw 走 Plugin 路线。
- **记忆策略**：OpenClaw 强调"信任标签"，Hermes Agent 强调"认知操作"，IronClaw 强调"持久化合并前强制" — 三种哲学并行演进。

---

## 六、社区热度与成熟度分层

### 🔥 第一梯队：快速迭代期（Issue/PR 互动 > 50）
- **OpenClaw**、**IronClaw**、**Hermes Agent**：日互动量 100+，处于功能扩张与硬化同步阶段，**修复速度跟不上新 Bug 出现速度**是共同特征。
- 标志：P0/P1 Bug 数量超过已合并 PR 数量（OpenClaw 4 个 P0 + 14 个 P1 vs 92 已合并 PR；Hermes 3 个 P1 无 fix PR）。

### 🌱 第二梯队：质量巩固期（Issue/PR 互动 10-50）
- **QwenPaw**（v2.1.0-beta 测试期）、**NanoBot**（API 收敛期）、**OpenHuman**（高频小版本）。
- 特征：版本节奏稳定、PR 流转快（NanoBot 11/21 已合并、OpenHuman 6/13 已合并），但开始出现"修一处坏一处"的连锁回归风险（OpenHuman v0.63.12、QwenPaw v2.1.0b2）。

### 🪨 第三梯队：维护者瓶颈期（互动 < 10）
- **LobsterAI**、**PicoClaw**：LobsterAI 走"小步快跑"健康路径，PicoClaw 则因 **100% stale 标记率**发出健康警告。

---

## 七、值得关注的趋势信号

### 🚨 趋势 1：Agent 核心循环的"系统性硬化"成为分水岭
OpenClaw/Hermes Agent/IronClaw 今日均暴露出**压缩 + 状态 + 内存**相关的 P0/P1 缺陷，且都集中于"长会话/嵌入式/自动化"三个场景。**信号**：2026 下半年的竞争重心已从"能否跑通 agent"转向"能否在百万 token 级场景稳定运行"。

### 🚨 趋势 2：可观测性从"加分项"变为"生存线"
8 个项目中有 6 个出现"静默失败"相关 Issue（OpenClaw #116277、LobsterAI #2447、Hermes #81440、NanoBot #5156 等）。**预测**：未来 6 个月内，"trace/explain fallback/显式状态机"将成为标配，**无观测能力的 agent 框架将率先被用户抛弃**。

### 🚨 趋势 3：插件/MCP 生态从"协议先行"转向"安全对齐"
OAuth 2.1（PicoClaw #3302）、`/approve` envelope（OpenClaw #78308）、plugin namespace 隔离（QwenPaw #6688）几乎同步推进。**信号**：MCP 生态正在补齐"授权 + 审计 + 命名空间"的安全三角，企业级落地窗口即将打开。

### 🚨 趋势 4：记忆系统进入"反思期"
Hermes Agent #31584（记忆应作为背景而非权威）、OpenClaw #7707（信任标签）、IronClaw #7185（跨会话可靠性）三者形成共振。**预测**：记忆系统将从"越大越好"转向"按信任级别分层 + 显式生命周期管理"。

### 🚨 趋势 5：UI 形态分化加剧
- OpenHuman / Hermes Agent 押注**桌面 GUI（Tauri）+ 浮窗 mascot**
- NanoBot / LobsterAI 押注**WebUI + Cowork 协作**
- PicoClaw / QwenPaw 押注**多 channel 抽象**
- **预测**：未来 12 个月，**"桌面端是否原生集成 Voice/Mascot"**将成为 C 端产品的关键差异化点。

### 💡 对 AI 智能体开发者的参考价值
1. **优先解决可观测性** —— 在动手做新能力之前，先把"silent failure"的兜底路径做好。
2. **压缩策略需结合业务语义** —— 不要只按 token 数切分，要理解"在途

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

<think>The user wants me to generate a daily project report for NanoBot based on the GitHub data provided. Let me analyze the data carefully and produce a structured report in Chinese.

Let me analyze the key information:

**Overall Activity:**
- 9 Issues updated in 24 hours (7 open/active, 2 closed)
- 21 PRs updated in 24 hours (10 pending merge, 11 merged/closed)
- 0 new releases
- This is a very active day with significant PR churn

**Issues Analysis:**
1. #5266 - Token consumption logs (enhancement) - 10 comments, most active
2. #5149 - No audio on WhatsApp (bug)
3. #5276 - Session-level temp file isolation
4. #5290 - Deduplicate JSONL write idiom
5. #5256 - /goal message bug
6. #5264 - CLOSED - media_urls issue
7. #5278 - Security: session history outside workspace
8. #5289 - Telegram stickers/reactions
9. #5273 - CLOSED - session retention bug

**PRs Analysis:**
- 21 PRs total, 11 closed/merged, 10 still open
- Notable PRs:
  - #5288 - Agent Plugins with CLI Apps (integration)
  - #5291 - Subagent transcripts persistence
  - #5156 - Telegram polling recovery
  - #4276 - Computer use tools (model-agnostic)
  - #5287 - CLOSED - Channel progress defaults
  - #5286 - Matrix thread sessions
  - #5252 - WebUI temporary chat
  - #5268 - CLOSED - WebUI media staging
  - #5263 - CLOSED - Weixin hardening
  - #5260 - Memory runtime files
  - #5285 - CLOSED - WebUI topic route
  - #5284 - CLOSED - Legacy session messages route
  - #5283 - Per-session sandbox isolation
  - #5282 - CLOSED - Dependency recovery
  - #5281 - CLOSED - WebUI activity fade
  - #5277 - CLOSED - Model preset editor
  - #5280 - CLOSED - Dream idle sessions
  - #5272 - CLOSED - Channel delivery preservation
  - #5279 - Session history outside workspace
  - #5231 - CLOSED - Dream idle sessions (earlier)

Let me organize this into the requested sections. I'll write this in Chinese as the user prompt is in Chinese.

I should note that since this is for 2026-08-08, the data is hypothetical but I should treat it as a real report.

Let me think about the structure:

1. 今日速览 - Overview of project state
2. 版本发布 - No new releases, omit or note
3. 项目进展 - Merged/closed PRs progress
4. 社区热点 - Most discussed issues
5. Bug 与稳定性 - Bug reports
6. 功能请求与路线图信号 - Feature requests
7. 用户反馈摘要 - User feedback from comments
8. 待处理积压 - Backlog items

I notice some interesting patterns:
- Multiple PRs from @chengyongru (very active maintainer/contributor)
- Focus on WebUI improvements
- Security-related issues around session/workspace isolation
- Memory/Dream system work
- Channel integrations (Telegram, Matrix, Weixin)

Let me write a comprehensive but concise report.

For the "待处理积压" section, I should look at older open issues/PRs:
- #5149 from 2026-07-28 - WhatsApp audio bug (still open after 10 days)
- #5156 from 2026-07-29 - Telegram polling (still open)
- #4276 from 2026-06-10 - Computer use tools (open for ~2 months)

Let me write this now.</think>

# NanoBot 项目动态日报
**日期：2026-08-08**
**数据周期：过去 24 小时**

---

## 📌 今日速览

NanoBot 今日呈现出**高活跃度、高产出**的态势：过去 24 小时内共处理 9 条 Issue 更新和 21 条 PR 更新，其中 PR 合并/关闭数量（11 条）甚至超过待合并数量（10 条），表明项目处于集中发版前的密集收尾阶段。维护者 [@chengyongru](https://github.com/chengyongru) 单人贡献了多条 PR，覆盖 WebUI、Memory/Channel、依赖恢复等多个方向，工作面铺得很开。社区侧最热的诉求集中在**Token 消耗透明度**（#5266，10 条评论）和**会话沙箱/安全隔离**（#5278、#5279、#5283、#5276）两条主线，反映出项目在多用户/多会话场景下的安全边界正在被系统性重塑。整体健康度良好，但部分长期未解决的旧 Issue（如 #5149 WhatsApp 音频）需关注。

---

## 🚀 版本发布

**今日无新版本发布。**

从近期 PR 合并密度推断，项目可能即将发布包含 WebUI 体验优化、Channel 强化、Memory/Dream 系统增强的新版本，建议关注 [Releases 页面](https://github.com/HKUDS/nanobot/releases)。

---

## 📈 项目进展（已合并/关闭 PR）

今日共 **11 条 PR** 完成合并或关闭，推进方向多元：

### WebUI 体验打磨（密集更新）
- [#5285](https://github.com/HKUDS/nanobot/pull/5285) **fix(webui): preserve newly created topic route** — 修复新建话题路由在乐观更新窗口内的丢失问题。
- [#5284](https://github.com/HKUDS/nanobot/pull/5284) **refactor(webui): remove legacy session messages route** — 移除已无调用方的旧 `/api/sessions/{key}/messages` 路由，并清理相关媒体水合与子代理消息塑形代码，**WebUI API 表面进一步收敛**。
- [#5281](https://github.com/HKUDS/nanobot/pull/5281) **fix(webui): keep activity text crisp while fading edges** — 活动流边缘淡出效果不再模糊文字（53 个测试文件 / 939 用例保障）。
- [#5277](https://github.com/HKUDS/nanobot/pull/5277) **feat(webui): expand model preset editor inline** — 模型预设编辑器支持行内展开，兼顾宽窄屏布局。
- [#5268](https://github.com/HKUDS/nanobot/pull/5268) **fix(webui): stage out-of-media-root attachments on history reads** — 历史消息读取时对 media root 之外的附件做 staging（关闭 Issue #5264）。

### Channel 与协议硬化
- [#5287](https://github.com/HKUDS/nanobot/pull/5287) **fix(channels): preserve global progress defaults** — 保留全局 `sendProgress` / `sendToolHints` 默认值，新增 Mattermost 回归测试。
- [#5263](https://github.com/HKUDS/nanobot/pull/5263) **fix(weixin): harden protocol delivery, streaming, and login** — 对齐 `@tencent-weixin/openclaw-weixin` 2.4.6 协议头、QR 校验、登录生命周期。

### Memory / Dream 系统
- [#5282](https://github.com/HKUDS/nanobot/pull/5282) **fix: modernize dependency recovery guidance** — 用统一的 `nanobot plugins enable ...` 命令替换 Langfuse/Olostep/WeChat 等过时指引。
- [#5280](https://github.com/HKUDS/nanobot/pull/5280) **fix(memory): archive short idle sessions for Dream** — 让短空闲会话也能产出 `history.jsonl`，Dream 不再"看不见"它们。
- [#5231](https://github.com/HKUDS/nanobot/pull/5231) **feat(memory): archive idle sessions for Dream** — 同主题的早期实现（#5280 为其后续修复）。

### 会话保留与历史
- [#5272](https://github.com/HKUDS/nanobot/pull/5272) **fix(session): preserve proactive channel delivery during session retention trimming** — 修复会话裁剪时误丢主动投递消息的 Bug（关闭 Issue #5273）。

**整体评估**：今日合并动作把 WebUI API 表面又削掉了一块历史包袱（旧路由移除），同时把 Channel 协议对齐与 Memory/Archive 闭环向前推了一步。**项目整体处于"小步快跑 + 持续清理"的稳健迭代节奏。**

---

## 🔥 社区热点

### 评论最多 / 讨论最热

1. **[#5266](https://github.com/HKUDS/nanobot/issues/5266) — [enhancement] Logs about token consumption** — **10 条评论**
   - 诉求直击：用户报告 nanobot "两小时烧掉百万 token"却无可见活动，要求对每次调用的 token 消耗做可追溯日志。
   - 这是当前**最强烈的运营可观测性诉求**，影响所有用户的成本体验。

2. **[#5149](https://github.com/HKUDS/nanobot/issues/5149) — [bug] no audio?** — **5 条评论**
   - WhatsApp 通道只能收音频不能发音频（`neonize.utils.ffmpeg` 告警）。
   - 距创建已逾 10 天仍 OPEN，属于"沉默但持续影响用户"的稳定性问题。

### 受关注方向
- **会话/工作区安全隔离**形成 Issue–PR 闭环：
  - [#5278](https://github.com/HKUDS/nanobot/issues/5278) Issue → [#5279](https://github.com/HKUDS/nanobot/pull/5279) PR（将 session history 移出 workspace）
  - [#5276](https://github.com/HKUDS/nanobot/issues/5276) Issue → [#5283](https://github.com/HKUDS/nanobot/pull/5283) PR（非 WebUI 通道的 per-session sandbox 隔离）
  - 表明社区正在推动 nanobot 从"单用户玩具"向"多用户/多会话可信环境"演进。

---

## 🐛 Bug 与稳定性

按严重程度排列：

| 严重度 | Issue / 关联 PR | 描述 | 状态 |
|---|---|---|---|
| 🔴 **高** | [#5278](https://github.com/HKUDS/nanobot/issues/5278) + [#5279](https://github.com/HKUDS/nanobot/pull/5279) | **安全**：`restrict_to_workspace` 开启时，agent 可通过文件工具读取 `<workspace>/sessions/` 下的会话历史，存在跨会话信息泄露风险。 | ✅ **已有 fix PR（#5279）**，OPEN 待审 |
| 🔴 **高** | [#5149](https://github.com/HKUDS/nanobot/issues/5149) | **功能缺失**：WhatsApp 通道无法发送音频消息，仅能接收。 | ❌ **无 PR**，已 10 天未响应 |
| 🟠 **中** | [#5256](https://github.com/HKUDS/nanobot/issues/5256) | `/goal` 命令触发系统循环，生成数十条近似回复直到用户打断或模型自行识别。 | ❌ 无 PR |
| 🟡 **低-中** | [#5266](https://github.com/HKUDS/nanobot/issues/5266) | Token 消耗异常（百万级/2 小时），无定位手段。 | ❌ 无 PR，但已是社区热点 |
| ✅ **已关闭** | [#5264](https://github.com/HKUDS/nanobot/issues/5264) | `/api/sessions/{key}/messages` 历史接口不返回非 media root 文件的 `media_urls` | ✅ 由 [#5268](https://github.com/HKUDS/nanobot/pull/5268) 修复 |
| ✅ **已关闭** | [#5273](https://github.com/HKUDS/nanobot/issues/5273) | 会话裁剪误丢 `_channel_delivery` 主动消息 | ✅ 由 [#5272](https://github.com/HKUDS/nanobot/pull/5272) 修复 |

---

## 💡 功能请求与路线图信号

| 方向 | 信号来源 | 进入下一版本的概率 |
|---|---|---|
| **Token 消耗可观测性** | [#5266](https://github.com/HKUDS/nanobot/issues/5266)（10 评论） | 🟢 高 — 社区呼声最强烈，且与成本痛点直接相关 |
| **Telegram Sticker + Reaction** | [#5289](https://github.com/HKUDS/nanobot/issues/5289) | 🟡 中 — 由 kaguya-nanobot bot 自动提出，结构清晰，等待维护者认领 |
| **Agent Plugins v1 与 CLI Apps 集成** | [#5288](https://github.com/HKUDS/nanobot/pull/5288) | 🟢 高 — 已是 OPEN PR，统一 manual plugin 与 catalog-installed 的包边界 |
| **WebUI 临时聊天模式** | [#5252](https://github.com/HKUDS/nanobot/pull/5252) | 🟢 高 — PR 已就绪，等待合并 |
| **会话级别临时文件隔离** | [#5276](https://github.com/HKUDS/nanobot/issues/5276) + [#5283](https://github.com/HKUDS/nanobot/pull/5283) | 🟢 高 — opt-in 模式，已有实现 |
| **模型无关 Computer Use 工具** | [#4276](https://github.com/HKUDS/nanobot/pull/4276) | 🟡 中 — 已挂起约 2 个月（自 2026-06-10），量大且需要评审 |

**路线图信号**：从今日主线看，**安全隔离（workspace / session 边界）+ 可观测性（token 日志）+ WebUI 体验收敛**是当前三条明确的演进轴；Plugin 体系标准化（#5288）可能成为下一里程碑的标志性能力。

---

## 🗣️ 用户反馈摘要

从 Issue 评论中提炼的真实痛点：

- **💸 成本失控感**（#5266）：用户最直接的负面情绪来源——token 在无明显交互下被大量消耗却无法追因，"像钱被水龙头放走"。这会直接影响新用户的留存意愿。
- **🔇 静默故障焦虑**（#5156 PR 描述）：Telegram 通道在网络抖动后可能**永久停止收消息但进程不退出、日志静默**，生产环境真实发生。这是企业用户最难接受的故障模式。
- **🛡️ 多租户信任缺失**（#5276、#5278）：多个用户在不同语境下提出"工作区/会话互相可见"，说明项目正在被尝试用于多人协作或共享主机场景，**安全模型需要正式文档化**。
- **🎯 WebUI 细节打磨满意**（#5285、#5281、#5277）：今日 WebUI 方向的 PR 均带有完整的回归测试和像素级细节修复，说明维护者对前端体验有高标准；用户社区尚未对这些 PR 发表负面反馈，侧面反映认可度。
- **🤖 自动机器人提案**（#5289 由 `kaguya-nanobot[bot]` 提出）：值得关注的是，社区已出现自动化提案机制，可降低贡献门槛，但也需维护者警惕质量审核。

---

## ⏳ 待处理积压（提醒维护者关注）

| 编号 | 标题 | 创建日期 | 距今 |
|---|---|---|---|
| [#4276](https://github.com/HKUDS/nanobot/pull/4276) | **feat(tools): model-agnostic computer use** | 2026-06-10 | **~59 天** — 大型 PR，长期 OPEN，建议维护者明确 approve/request changes 状态 |
| [#5149](https://github.com/HKUDS/nanobot/issues/5149) | **no audio (WhatsApp)** | 2026-07-28 | **~11 天** — 无 PR、无明确维护者回复，影响 WhatsApp 用户的核心功能 |
| [#5156](https://github.com/HKUDS/nanobot/pull/5156) | **fix(telegram): recover from silently stalled polling** | 2026-07-29 | **~10 天** — 修复"静默停摆"的 PR，关联 #5171，已描述清晰但待合并 |
| [#5260](https://github.com/HKUDS/nanobot/pull/5260) | **fix(memory): ignore runtime files inside tracked workspace dirs** | 2026-08-05 | 3 天 — 重要内存系统修复，建议优先评审 |
| [#5156 / #5171](#) | Telegram polling 静默停摆 Issue | 2026-07-29 | 10 天 — 与 PR 同步挂起 |

**建议**：
1. 对 [#4276](https://github.com/HKUDS/nanobot/pull/4276) 给出阶段性评审结论，避免超大 PR 长期悬空。
2. 为 [#5149](https://github.com/HKUDS/nanobot/issues/5149) WhatsApp 音频分配 owner 或明确"已知问题/暂不修复"。
3. [#5260](https://github.com/HKUDS/nanobot/pull/5260) 与 [#5291](https://github.com/HKUDS/nanobot/pull/5291)（subagent 转录持久化）都是 Memory/Agent 子系统的修复，建议同一评审批次处理。

---

*报告基于 GitHub 公开数据生成，覆盖 2026-08-07 ~ 2026-08-08 周期。*

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

<think>The user wants me to generate a daily report for the PicoClaw project based on GitHub data. Let me analyze the data carefully:

**Overview:**
- 24h Issues updates: 4 (3 active/open, 1 closed)
- 24h PR updates: 14 (12 open, 2 closed/merged)
- No new releases

**Key observations:**

Issues:
1. #3093 (CLOSED) - Feature request for SimpleX/Wire/Tox gateway - stale
2. #3302 (OPEN, stale) - OAuth 2.1 for MCP servers - feature request
3. #3308 (OPEN, stale) - BUG - Concurrency hazards in SeaHorse, Channel Manager, Hooks
4. #3307 (OPEN, stale) - Session list/switch for Telegram

PRs:
- Most are dependabot dependency updates (stale)
- Two closed dependabot PRs (#3291 copilot-sdk, #3289 pion/rtp)
- Notable functional PRs:
  - #3321 fix(agent): move dynamic context after history to preserve prefix caching - by grrowl
  - #3320 fix(deps): bump whatsmeow to unblock WhatsApp "client outdated (405)" - by grrowl
  - #3319 fix(tools): honor exec timeout and boolean run options - by MrTreasure
  - #3283 fix(dingtalk): support picture/image message inbound - by MrTreasure
  - #3279 fix(seahorse): prevent tool-call format leakage into LLM summaries - by MrTreasure
  - #3271 chore(providers): update default model names to 2026-07 latest - by LeaderOnePro
  - #3270 feat: add DashScope TTS provider and WeChat audio file sending - by MrTreasure
  - #3200 feat(models): add configurable default fallback chain - by lc6464

All items are marked as "stale" - this is a concern. The project seems to have a lot of stale items.

Let me structure the report:

1. 今日速览 - Overall status
2. 版本发布 - No releases
3. 项目进展 - Closed PRs and notable new PRs
4. 社区热点 - Most discussed issues
5. Bug 与稳定性 - #3308 concurrency bug
6. 功能请求与路线图 - Various feature requests
7. 用户反馈摘要 - From comments
8. 待处理积压 - Stale items

Let me write this in Chinese as requested.

The date is 2026-08-08.

Let me draft the report now. I should note that all issues and most PRs are marked as "stale" which is a significant health signal. Many are from late July, and the project's activity seems to have slowed.

Looking at the data more carefully:
- The two closed PRs (#3291 and #3289) are dependabot updates that were closed - but not necessarily "merged" in the traditional sense. The description says "closed/merged: 2". 
- No new releases
- All issues are marked stale (no recent activity from maintainers)

This suggests the project may be in a slow maintenance period or maintainers are not actively triaging.

Let me write a comprehensive report.</think>

# PicoClaw 项目日报 · 2026-08-08

> 数据来源：[github.com/sipeed/picoclaw](https://github.com/sipeed/picoclaw) · 统计窗口：过去 24 小时

---

## 1. 今日速览

PicoClaw 今日整体活跃度处于**中低水平**，仓库以依赖更新类 PR 为主（14 条 PR 中约 8 条来自 Dependabot），功能性贡献占比较小。Issues 与 PRs **全部被标记为 `stale`**，过去 24 小时仅有 1 个 Issue (#3093) 被关闭、2 个依赖类 PR 被关闭，没有新的 Release 发布。值得关注的活跃贡献者包括 @grrowl（提交 2 条 fix PR）和 @MrTreasure（累计维护 4 条功能/修复 PR），显示出社区核心贡献者仍在持续工作，但**维护者侧响应较慢**，需要警惕 stale 标签堆积对社区积极性的影响。

---

## 2. 版本发布

🚫 **今日无新版本发布**。当前项目状态以代码迭代为主，尚未产出新的 Release tag。建议关注 #3271（模型名称刷新）等 PR 的合并进展，以便下一次发版时的 changelog 整理。

---

## 3. 项目进展

### 已关闭的 PR（2 条，均为依赖更新）

| PR | 标题 | 状态 |
|---|---|---|
| [#3291](https://github.com/sipeed/picoclaw/pull/3291) | build(deps): bump github.com/github/copilot-sdk/go from 0.2.0 to 1.0.8 | 已关闭 |
| [#3289](https://github.com/sipeed/picoclaw/pull/3289) | build(deps): bump github.com/pion/rtp from 1.10.2 to 1.10.5 | 已关闭 |

⚠️ 注：上述两条均为 Dependabot 自动发起的依赖升级，且原本已被标记为 stale，关闭原因大概率是"被新版本覆盖"或"手动放弃"，**非典型合并**。

### 今日新提交的关键功能/修复 PR

虽然尚未合并，但以下 PR 体现出明确的项目演进方向：

- **[#3321 fix(agent): move dynamic context after history to preserve prefix caching](https://github.com/sipeed/picoclaw/pull/3321)** — @grrowl 提交，针对 LLM 前缀缓存命中率优化，属于性能层面重要改进。
- **[#3320 fix(deps): bump whatsmeow to unblock WhatsApp "client outdated (405)"](https://github.com/sipeed/picoclaw/pull/3320)** — @grrowl 提交，修复 WhatsApp 渠道因客户端版本过旧被服务端拒绝连接导致连接断开的严重可用性问题（连接 5s 后被踢，无重连）。
- **[#3319 fix(tools): honor exec timeout and boolean run options](https://github.com/sipeed/picoclaw/pull/3319)** — @MrTreasure 提交，修复 `exec` 工具的 `timeout` 参数被忽略，以及 `background`/`pty` 类型标注错误（应为 boolean）的问题。
- **[#3283 fix(dingtalk): support picture/image message inbound](https://github.com/sipeed/picoclaw/pull/3283)** — @MrTreasure 提交，钉钉渠道增加图片消息接收支持（含 OpenAPI token 缓存）。
- **[#3279 fix(seahorse): prevent tool-call format leakage into LLM summaries](https://github.com/sipeed/picoclaw/pull/3279)** — @MrTreasure 提交，修复 seahorse 模块的 `partsToReadableContent` 将工具调用格式泄漏到 LLM 摘要中的问题。
- **[#3271 chore(providers): update default model names to 2026-07 latest](https://github.com/sipeed/picoclaw/pull/3271)** — @LeaderOnePro 提交，更新 9 个 Provider 的默认模型列表（如 OpenAI 升级到 `gpt-5.6` 系列）。
- **[#3270 feat: add DashScope TTS provider and WeChat audio file sending](https://github.com/sipeed/picoclaw/pull/3270)** — @MrTreasure 提交，新增阿里云 DashScope TTS 提供商 + 微信音频文件发送支持。
- **[#3200 feat(models): add configurable default fallback chain](https://github.com/sipeed/picoclaw/pull/3200)** — @lc6464 提交，为模型页增加可视化默认 fallback 链路配置功能。

📌 **整体判断**：今日项目向前推进的步伐以**修复和小幅增强**为主，尚未涉及架构级变更。WhatsApp 连接失效修复 (#3320) 和前缀缓存优化 (#3321) 是今日含金量最高的两条改动。

---

## 4. 社区热点

按评论数和👍数排序，**今日最活跃的 Issues**：

| 排名 | Issue | 评论数 | 👍 | 主题 |
|---|---|---|---|---|
| 1 | [#3093 (已关闭)](https://github.com/sipeed/picoclaw/issues/3093) | 6 | 1 | 请求 SimpleX/Wire/Tox 网关支持 |
| 2 | [#3302](https://github.com/sipeed/picoclaw/issues/3302) | 2 | 0 | OAuth 2.1 for MCP servers |
| 3 | [#3308](https://github.com/sipeed/picoclaw/issues/3308) | 1 | 0 | SeaHorse/Channel Manager 并发 Bug |
| 3 | [#3307](https://github.com/sipeed/picoclaw/issues/3307) | 1 | 0 | Telegram 会话列表/切换命令 |

**诉求分析**：
- **多渠道网关扩展**：用户希望 PicoClaw 能接入 SimpleX、Wire、Tox 等去中心化即时通讯协议，体现其作为个人 AI 助手在隐私敏感用户群中的吸引力。
- **MCP 生态对齐**：OAuth 2.1 是 MCP 协议族的标准演进方向，与 issue #2546 联动，说明社区对工具调用安全标准化的需求迫切。
- **聊天渠道体验对等**：用户期望 Web UI 与 Telegram 等 IM 渠道在会话管理能力上保持一致，是典型的"全渠道 UX 一致性"诉求。

⚠️ **数据观察**：尽管有 6 条评论，#3093 的👍只有 1，说明同类功能请求的社区共识度并不算高，且该项目最终被关闭（很可能因 stale 政策）。

---

## 5. Bug 与稳定性

### 🔴 高严重度

- **[#3320 WhatsApp 渠道连接失效](https://github.com/sipeed/picoclaw/pull/3320)** — 已存在 fix PR（grrowl 提交，等待合并）。现象：whatsmeow 客户端版本过旧被服务端拒绝，连接建立 ~5s 后被 405 错误踢下线，**且无重连机制**，导致原生 WhatsApp 渠道完全失联。影响所有依赖 WhatsApp 网关的用户，建议优先合并。

### 🟡 中严重度

- **[#3308 Concurrency hazards, goroutine leaks in SeaHorse/Channel Manager/Hooks](https://github.com/sipeed/picoclaw/issues/3308)** — 用户提交的代码审查报告，指出 SeaHorse、Channel Manager、Hooks 模块存在并发风险、goroutine 泄漏、内存/速度优化空间。**目前尚无对应 fix PR**，属于架构层面隐患，建议维护者尽快评估。
- **[#3279 seahorse 工具调用格式泄漏](https://github.com/sipeed/picoclaw/pull/3279)** — 已有 fix PR（MrTreasure），属于数据一致性问题，可能导致 LLM 摘要质量下降或行为异常。
- **[#3319 exec 工具 timeout 参数被忽略](https://github.com/sipeed/picoclaw/pull/3319)** — 已有 fix PR（MrTreasure），类型标注也存在 bug，影响工具调用稳定性。

### 总结

3 条潜在 Bug 中有 2 条已配套 fix PR，仅 #3308 的并发问题尚未明确归属。维护者应优先合并 #3320 以恢复 WhatsApp 渠道可用性。

---

## 6. 功能请求与路线图信号

### 高潜力（已有或接近 PR 实现）

| 需求 | 现有 PR | 进入下版本概率 |
|---|---|---|
| DashScope TTS + 微信音频 | [#3270](https://github.com/sipeed/picoclaw/pull/3270) | ⭐⭐⭐⭐ |
| 默认模型 fallback 链配置 | [#3200](https://github.com/sipeed/picoclaw/pull/3200) | ⭐⭐⭐⭐ |
| 钉钉图片消息接收 | [#3283](https://github.com/sipeed/picoclaw/pull/3283) | ⭐⭐⭐⭐ |
| 模型列表更新 | [#3271](https://github.com/sipeed/picoclaw/pull/3271) | ⭐⭐⭐⭐⭐ |

### 待评估（仅 Issue 阶段）

| 需求 | Issue | 路线图概率 |
|---|---|---|
| MCP OAuth 2.1 支持 | [#3302](https://github.com/sipeed/picoclaw/issues/3302) | ⭐⭐⭐（与 #2546 关联，方向明确） |
| Telegram 会话管理命令 | [#3307](https://github.com/sipeed/picoclaw/issues/3307) | ⭐⭐⭐（提升 UX 一致性） |
| SimpleX/Wire/Tox 网关 | [#3093 (已关闭)](https://github.com/sipeed/picoclaw/issues/3093) | ⭐（已被 stale 关闭，短期不会纳入） |

**路线图信号**：可见 PicoClaw 的近期演进集中在**多渠道体验增强（钉钉、微信、Telegram）+ LLM 集成优化（前缀缓存、模型更新）+ Provider 扩展（DashScope）**，与"轻量级个人 AI 助手"定位高度一致。

---

## 7. 用户反馈摘要

从 Issues 与 PR 描述中提炼的真实用户痛点：

- **痛点 1：跨渠道体验割裂** — Web UI 与 Telegram/IM 渠道在会话管理能力上不对等，用户无法在手机上完成会话列表查看/切换 (#3307)。
- **痛点 2：WhatsApp 用户被完全切断** — 当前 whatsmeow 版本导致整个原生 WhatsApp 渠道失效，且无重连 (#3320)，对生产环境用户影响严重。
- **痛点 3：工具调用稳定性差** — `exec` 工具的 timeout 参数形同虚设 (#3319)；seahorse 摘要会泄漏工具调用格式 (#3279)，导致 LLM 行为不可预测。
- **痛点 4：模型版本滞后** — 默认模型列表停留在早期版本（如 `gpt-5.4/5.5`），用户需手动配置最新模型 (#3271)。
- **痛点 5：MCP 安全标准缺位** — OAuth 2.1 支持缺失，限制了 PicoClaw 在企业/生产环境的 MCP 集成适用性 (#3302)。

**正向反馈**：用户对 PicoClaw 在 $10 硬件上 <10MB RAM、亚秒级启动的轻量特性表达赞赏（见 #3308 描述），说明项目核心定位被社区认可。

---

## 8. 待处理积压 ⚠️

🚨 **健康度警告**：今日可见的 4 条 Issues 与 12 条 Open PRs **全部被标记为 `stale`**，表明维护者侧响应严重滞后。建议立即关注以下对象：

### 高优先级（功能影响大、等待时间长）

| 项目 | 标题 | 创建日期 | 等待天数 |
|---|---|---|---|
| [#3200](https://github.com/sipeed/picoclaw/pull/3200) | feat(models): add configurable default fallback chain | 2026-07-01 | **38 天** |
| [#3302](https://github.com/sipeed/picoclaw/issues/3302) | OAuth 2.1 for MCP servers | 2026-07-30 | 9 天 |
| [#3308](https://github.com/sipeed/picoclaw/issues/3308) | Concurrency hazards / goroutine leaks | 2026-07-30 | 9 天 |
| [#3307](https://github.com/sipeed/picoclaw/issues/3307) | Telegram session list/switch | 2026-07-30 | 9 天 |
| [#3270](https://github.com/sipeed/picoclaw/pull/3270) | DashScope TTS + 微信音频 | 2026-07-20 | 19 天 |
| [#3279](https://github.com/sipeed/picoclaw/pull/3279) | fix(seahorse): prevent tool-call leakage | 2026-07-21 | 18 天 |
| [#3283](https://github.com/sipeed/picoclaw/pull/3283) | fix(dingtalk): support image message | 2026-07-22 | 17 天 |
| [#3271](https://github.com/sipeed/picoclaw/pull/3271) | chore(providers): update default model names | 2026-07-20 | 19 天 |

### 维护建议

1. **集中审阅 8 条 stale PR**（多为 @MrTreasure 与 @grrowl 的高质量贡献），优先合并功能性 PR（#3270、#3200、#3283、#3279、#3319）。
2. **对 4 条 stale Issues 给出官方回应**，即使拒绝也应明确说明（如 #3093 已被关闭但理由不清晰）。
3. **审视 stale 机器人策略**：当前策略可能过于激进，导致高质量贡献者被劝退。
4. **#3200 已积压 38 天**，是 Top 1 积压对象，建议本周内 review。

---

## 附：今日数据总览

| 指标 | 数值 |
|---|---|
| Issues 更新 | 4（3 Open / 1 Closed） |
| PRs 更新 | 14（12 Open / 2 Closed） |
| 新版本 | 0 |
| 关闭率（PR） | 14.3% |
| Stale 标记率 | 100%（所有可见 Issue/PR） |
| 活跃贡献者 | @grrowl, @MrTreasure, @LeaderOnePro, @lc6464 |

> 📊 **项目健康度评估**：🟡 **中等**。代码侧活跃度尚可（核心贡献者持续提交），但维护者响应链存在明显缺口，stale 标签堆积存在社区信心风险。建议短期内组织一次 backlog 清理冲刺。

---

*报告生成时间：2026-08-08 · 数据基于 GitHub 公开 API*

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

<think>Let me analyze the GitHub data for IronClaw (github.com/nearai/ironclaw) and generate a comprehensive daily report for 2026-08-08.

Key observations from the data:

1. **Activity overview**: 50 Issues updates (36 new/active, 14 closed), 50 PR updates (38 pending, 12 merged/closed), 0 new releases
2. **No new releases today**
3. **Notable issues with high discussion**:
   - #7340: No way to reset model settings to factory defaults (6 comments)
   - #6989: Token accounting bug with hybrid provider-usage (4 comments)
   - #7317: Proposal: Doc-Truth Verification Pipeline (3 comments)
   - #7360: Expand stress coverage across built-in and durable write paths (2 comments)
   - #6476: Slack extension_activate fails with encoding error (2 comments, closed)
   - #6590: serve fails on Windows (2 comments)
   - #7185: Memory not reliably recalled across conversations (2 comments)
   - #7292: Installed tool cannot be used and run fails with runner heartbeat error (2 comments)

4. **Notable closed issues** (good progress):
   - #6476: Slack extension_activate encoding error
   - #7367: Docs drift about chat cannot connect channels
   - #6644: Telegram replies delivered to wrong user
   - #6643: Telegram messages accepted but never processed
   - #6475: Telegram /pair command not recognized
   - #6810: Make progressive tool disclosure default-on
   - #7177: Improve deferred tool retrieval with schema-aware ranked search
   - #4874: WebChat v2 "Illegal invocation" bug
   - #7224: Inspector Activity timeline and turn navigation
   - #7324: dependabot everything-else group bump

5. **Notable open PRs**:
   - #6938: fix(skills): the model chooses the skill, not a keyword scorer (XL)
   - #7374: feat(disclosure): bulk tool_describe to collapse per-schema round-trips (XL)
   - #7387: dependabot bump (L)
   - #7386: dependabot dompurify bump (S)
   - #7214: feat(sandbox): Docker and Railway profiles (CLOSED, XL)
   - #7375: docs: fix live drift (doc-truth PR 1/5) (M)
   - #7379: docs-live branch for deploy (doc-truth PR 4/5) (L)
   - #7131: fix(run_delivery): deliver triggered run failures to creator (XL)
   - #7381: doc-truth pipeline design record (doc-truth PR 5/5) (XS)
   - #7378: doc-fact contract tests (doc-truth PR 3/5) (L)
   - #5503: compact Google extension capabilities (XL)
   - #7385: feat(events): durable, queryable tool-disclosure rollout metrics (XL)
   - #7384: fix(reborn): load the operator .env, stop reporting session faults as bad API key (L)
   - #7376: ci(check-guidance): extend reference gate to docs/ (doc-truth PR 2/5) (L)
   - #7365: feat(memory): memory-save guidance + always-on MEMORY.md prompt lane (XL)
   - #7382: feat(stress): scripted tool-call workload with durable write read-back (XL)
   - #7372: test(disclosure): pin wide-catalog schema-token reduction floor (CLOSED) (M)
   - #7157: feat: explicit channel delivery tool (CLOSED) (XL)
   - #7377: a run acts as its invoker (#7157 follow-ups) (XL)

6. **Doc-Truth Pipeline**: A clear focus today. Issue #7317 (proposal) and 5 PRs (7375, 7376, 7377, 7378, 7379, 7381) make up a coordinated doc-truth pipeline effort to fix docs drift.

7. **QA Bugs (bug_bash_P1)**: Multiple QA-reported issues from Railway deployment - many Telegram, Slack, agent hallucination issues. Several closed (good progress), many still open.

8. **Stability issues**:
   - #5456: Runner lease expiration (still open since June 30)
   - #7292: Runner heartbeat error
   - #7298: Request fails / monitoring system loses contact with runner
   - #6590: Windows serve fails
   - #7368: Channel turns take minutes on DeepSeek

9. **Backlog concerns**:
   - #5456: Open since June 30, 2026 (~5 weeks)
   - #5503: PR open since July 1, 2026
   - #4874: Was closed but had been open since June 14

Let me structure the report now.</think>

# IronClaw 项目日报

**报告日期**: 2026-08-08
**数据范围**: 过去 24 小时（基于 GitHub Issues/PRs 更新）

---

## 1. 今日速览

IronClaw 项目今日整体保持高活跃度，Issues 与 PRs 各有 50 条更新，但**无新版本发布**。维护团队重心明显落在两条主线：**文档真实（Doc-Truth）治理** 与 **渐进式工具披露（Progressive Tool Disclosure）的工程化收尾**。多个 Telegram / Slack 渠道的 QA P1 Bug 在今日集中关闭（#6476、#6643、#6644、#6475 等），说明 Railway 实例上的渠道连通性问题正在被系统性解决；但仍有 10+ 个新的 P1 QA Bug 被打开（涉及 Runner 心跳、Agent 幻觉、连接状态误判等），稳定性依旧是项目最大的短板。

---

## 2. 版本发布

**今日无新版本发布。** 当前主线工作集中在 main 分支上的 PR 合并与 QA 修复，下一个稳定版（推测 1.2.0 系列）的发布窗口尚未打开。

---

## 3. 项目进展

今日有 14 条 Issue 与 12 条 PR 被关闭或合并，主要推进集中在以下方向：

### 3.1 文档真实（Doc-Truth）治理正式启动
Issue [#7317](https://github.com/nearai/ironclaw/issues/7317) 提出的 Doc-Truth Verification Pipeline 已经被分解为 **5 个配套 PR**，全部由 @thisisjoshford 推动：
- [#7375](https://github.com/nearai/ironclaw/pull/7375) — 重写扩展/Responses API/渠道文档至 v3 manifest 格式
- [#7376](https://github.com/nearai/ironclaw/pull/7376) — 将 `check-guidance.py` 路径校验扩展到 `docs/` 表面
- [#7378](https://github.com/nearai/ironclaw/pull/7378) — 新增 CLI/manifest/Responses 的 doc-fact 契约测试
- [#7379](https://github.com/nearai/ironclaw/pull/7379) — 引入 `docs-live` 分支，由稳定发布自动化 force-point
- [#7381](https://github.com/nearai/ironclaw/pull/7381) — 归档设计记录（5/5）

这是对"Mintlify 部署与二进制发布不同步"这一**根因问题**的结构性修复，意味着未来文档漂移将可在 PR 阶段被自动拦截。

### 3.2 渐进式工具披露的工程化收尾
- [#7374](https://github.com/nearai/ironclaw/pull/7374) — `bulk tool_describe` 把 5 个工具的 schema 加载从 5 次往返压缩为 1 次。
- [#7372](https://github.com/nearai/ironclaw/pull/7372)（已关闭）— 给宽目录（91 工具）的 schema-token 减半基线加上可见性回归测试。
- [#7385](https://github.com/nearai/ironclaw/pull/7385) — 把披露指标做成可持久化、可查询的事件流。
- [#7383](https://github.com/nearai/ironclaw/issues/7383) — 跟进 `tool_disclosure_port.rs`（4.4k 行）的拆分治理。

### 3.3 渠道与渠道交付
- [#7157](https://github.com/nearai/ironclaw/pull/7157)（已关闭）— 引入"双通道（conversation lifecycle + notification channel）"的明确渠道交付工具，删除旧的交付启发式。
- [#7377](https://github.com/nearai/ironclaw/pull/7377) — 移除共享路由的 subject 绑定，让 Run 即其调用者。
- [#7367](https://github.com/nearai/ironclaw/issues/7367)（已关闭）— 修复"chat 不能连接 channel"过时的文档陈述。

### 3.4 渠道连通性 P1 Bug 批量关闭
- [#6475](https://github.com/nearai/ironclaw/issues/6475) — Telegram `/pair` 命令未被识别。
- [#6643](https://github.com/nearai/ironclaw/issues/6643) — Telegram 配对后消息未处理。
- [#6644](https://github.com/nearai/ironclaw/issues/6644) — Telegram 回复投递到错误消息。
- [#6476](https://github.com/nearai/ironclaw/issues/6476) — Slack `extension_activate` 编码错误，引发模型对管理员权限的幻觉。
- [#4874](https://github.com/nearai/ironclaw/issues/4874) — WebChat v2 在非 localhost 主机经明文 HTTP 访问时报 `Illegal invocation`。
- [#6810](https://github.com/nearai/ironclaw/issues/6810) — 渐进式工具披露默认开启且不退化日常工具使用。
- [#7177](https://github.com/nearai/ironclaw/issues/7177) — 使用 schema 感知的排序检索替代原 lowercased name 评分。
- [#7224](https://github.com/nearai/ironclaw/issues/7224) — Inspector 活动时间线与 turn 导航。

### 3.5 依赖与基础设施
- [#7324](https://github.com/nearai/ironclaw/pull/7324)（已关闭）— dependabot `everything-else` 组 11 项更新。
- [#7387](https://github.com/nearai/ironclaw/pull/7387) — dependabot `everything-else` 组 12 项更新（包含 base64 0.22→0.23）。
- [#7386](https://github.com/nearai/ironclaw/pull/7386) — dompurify 3.4.12 → 3.4.13。

---

## 4. 社区热点

按评论数排序的讨论焦点：

| 排名 | Issue | 标题 | 评论 | 链接 |
|---|---|---|---|---|
| 1 | #7340 | 无法将模型设置恢复出厂默认值 | 6 | [链接](https://github.com/nearai/ironclaw/issues/7340) |
| 2 | #6989 | Token accounting: 混合 provider-usage + tail 估算 | 4 | [链接](https://github.com/nearai/ironclaw/issues/6989) |
| 3 | #7317 | Proposal: Doc-Truth Verification Pipeline | 3 | [链接](https://github.com/nearai/ironclaw/issues/7317) |
| 4 | #7360 | 扩展内建/持久化写入路径的压力覆盖 | 2 | [链接](https://github.com/nearai/ironclaw/issues/7360) |
| 5 | #6476 | Slack `extension_activate` 编码错误（已关） | 2 | [链接](https://github.com/nearai/ironclaw/issues/6476) |
| 6 | #6590 | Windows 下 `serve` 启动失败 | 2 | [链接](https://github.com/nearai/ironclaw/issues/6590) |
| 7 | #7185 | 跨会话记忆召回不可靠 | 2 | [链接](https://github.com/nearai/ironclaw/issues/7185) |
| 8 | #7292 | 已安装工具无法使用，runner heartbeat 错误 | 2 | [链接](https://github.com/nearai/ironclaw/issues/7292) |

**诉求分析**：
- **设置/状态管理**（#7340、#7246、#7247、#7294、#7295、#7344）：用户集中抱怨 Agent **幻觉自动化/连接/工具状态**，而非真正去校验。这意味着系统提示需要强化"先 verify 后声称"的约束，并且设置面板需要提供"Reset to defaults"动作。
- **记忆可靠性**（#7185）：跨会话事实丢失是 Champions 周会反复出现的痛点，已配套 [#7365](https://github.com/nearai/ironclaw/pull/7365) 进入 PR 阶段。
- **文档即代码**（#7317）：社区与核心贡献者已经形成共识，文档必须像代码一样接受 CI 约束。

---

## 5. Bug 与稳定性

按严重程度排列的今日活跃 Bug（多数为 QA P1）：

### 🔴 P1 — Runner / 执行链路（影响所有用户）
- [#5456](https://github.com/nearai/ironclaw/issues/5456) — Routine runs 频繁因 90 秒 lease 过期失败（**已 open 39 天，无 fix PR**，自 2026-06-30）。
- [#7298](https://github.com/nearai/ironclaw/issues/7298) — "The request failed before it could be sent" + 监控与 runner 失联。**无 fix PR**。
- [#7292](https://github.com/nearai/ironclaw/issues/7292) — CoinGecko 工具安装后 runner heartbeat 错误。**无 fix PR**。

### 🟠 P1 — 渠道 / 模型集成
- [#7344](https://github.com/nearai/ironclaw/issues/7344) — Slack 已 ACTIVE 但助手仍声称未连接。**无 fix PR**。
- [#7295](https://github.com/nearai/ironclaw/issues/7295) — Agent 把 Slack DM 发给错误的用户（身份混淆）。**无 fix PR**。
- [#7294](https://github.com/nearai/ironclaw/issues/7294) — Agent 错误"记忆"其他 scope/thread 的 Telegram routine。**无 fix PR**。
- [#7247](https://github.com/nearai/ironclaw/issues/7247) — Agent 虚假声称 GitHub 已连接。**无 fix PR**。
- [#7246](https://github.com/nearai/ironclaw/issues/7246) — Agent 幻觉自动化运行状态。**无 fix PR**。
- [#7074](https://github.com/nearai/ironclaw/issues/7074) — 多工具会议研究在读取日历后失败。**无 fix PR**。
- [#7368](https://github.com/nearai/ironclaw/issues/7368) — DeepSeek 类模型下 channel turn 耗时数分钟（#6643 根因）。**无 fix PR**。

### 🟡 中等 — 平台 / 配置
- [#6590](https://github.com/nearai/ironclaw/issues/6590) — Windows 上 `serve` 在 `local-dev` / `local-dev-yolo` 配置下因 workspace root 与 `/skills` 重叠而失败。**无 fix PR**。
- [#6989](https://github.com/nearai/ironclaw/issues/6989) — `ModelWorkRequest::for_assistant` 误用 `content_ref` 长度估算 token。**无 fix PR**。

### ✅ 今日已修复（值得肯定的清理）
- [#6476](https://github.com/nearai/ironclaw/issues/6476) Slack 编码错误（已关闭）
- [#6643](https://github.com/nearai/ironclaw/issues/6643) / [#6644](https://github.com/nearai/ironclaw/issues/6644) / [#6475](https://github.com/nearai/ironclaw/issues/6475) Telegram 三连（已关闭）
- [#4874](https://github.com/nearai/ironclaw/issues/4874) WebChat v2 HTTP 非法调用（已关闭）
- [#7367](https://github.com/nearai/ironclaw/issues/7367) 文档漂移导致的 chat 拒绝连接 channel（已关闭）

**总体评估**：修复速度（12 PR + 14 Issue）尚可，但**新增 P1 QA Bug 的速度（10+）高于修复速度**，稳定性压力未减。

---

## 6. 功能请求与路线图信号

| 需求 | 信号 | 状态 | 链接 |
|---|---|---|---|
| 模型设置 "Reset to defaults" | 用户报告 6 条评论 | 新建 Issue，无 PR | [#7340](https://github.com/nearai/ironclaw/issues/7340) |
| 错误时捕获 trace 的 UI 按钮 | 用户截图反馈 | 新建 Issue，无 PR | [#7369](https://github.com/nearai/ironclaw/issues/7369) |
| Host API 错误摘要 i18n 化 + CLI 解析器 | 涉及 65 条硬编码英文 | 已开 Issue，无 PR | [#7362](https://github.com/nearai/ironclaw/issues/7362) |
| 持久化状态兼容性合并前强制 | 1.0.0-rc.1→1.1.0-rc.1 升级暴露的差距 | 已开 Epic，无 PR | [#7380](https://github.com/nearai/ironclaw/issues/7380) |
| 跨会话记忆召回 | Champions 周会反馈 | [#7365](https://github.com/nearai/ironclaw/pull/7365) PR 已就绪 | [#7185](https://github.com/nearai/ironclaw/issues/7185) |
| Skill 选择交给模型而非关键词评分 | Epic #6941 一部分 | [#6938](https://github.com/nearai/ironclaw/pull/6938) PR 已就绪（XL） | [#6938](https://github.com/nearai/ironclaw/pull/6938) |
| 紧凑型 Google 扩展能力 | 实验性 | [#5503](https://github.com/nearai/ironclaw/pull/5503) 已 open 39 天 | — |
| 触发型 run 失败向创建者投递 | 设计已批准 | [#7131](https://github.com/nearai/ironclaw/pull/7131) PR 已就绪 | — |

**最有可能进入下一版本**：
- 渠道交付双通道（[#7157](https://github.com/nearai/

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

<think>Let me analyze the data provided and create a comprehensive daily report for LobsterAI project. Let me organize the information:

**Overview:**
- Past 24 hours: 6 Issues updates (3 new/active, 3 closed), 7 PR updates (1 pending, 6 merged/closed), 1 new release

**Release:**
- 2026.8.7 with features like title-bar conversation search, markdown latex math delimiters, win-installer watchdog fix

**Issues:**
- #1195 [OPEN] - stale bug about custom skills installed to OpenClaw not showing in panel after restart
- #1263 [CLOSED] - stale - scheduled tasks showing twice, API rate limit
- #1265 [CLOSED] - stale - IM bot/model binding to different AGENTS
- #1273 [CLOSED] - stale - sql.js WASM memory crash and database corruption risk
- #2443 [OPEN] - SiliconFlow model ID with slash not selectable in UI
- #2447 [OPEN] - execution produced no result, no error message

**PRs:**
- #2452 [OPEN] - fix for slashed model IDs preservation in OpenClaw
- #2451 [CLOSED/MERGED] - Release/2026.8.5 merge to main
- #2450 [CLOSED/MERGED] - fix cowork fullscreen code toolbar on Windows
- #2449 [CLOSED/MERGED] - markdown latex math delimiters fix
- #2448 [CLOSED/MERGED] - chat search fix
- #2445 [CLOSED/MERGED] - fix strip plugin-index-managed keys
- #2446 [CLOSED/MERGED] - fix win-installer null watchdog exit code

Let me write a comprehensive, professional Chinese report.</think>

# LobsterAI 项目动态日报
**日期：2026-08-08**
**数据源：github.com/netease-youdao/LobsterAI**

---

## 1. 今日速览

LobsterAI 在过去 24 小时内呈现**高频发布、密集修复**的活跃态势：完成 6 个 PR 合并（含 1 个发布分支合并）、关闭 3 个历史 Issue，并正式推出 **2026.8.7 版本**。社区侧新开 3 个 Issue，整体互动度适中（评论数均为 1-2 条）。其中 #2443 关于 SiliconFlow 等含斜杠模型 ID 不可用的 Bug 已由社区贡献者 ump45nose 提交对应修复 PR #2452，体现了"问题—修复"的快速响应闭环。项目当前健康度良好，开发节奏稳健。

---

## 2. 版本发布

### 🚀 LobsterAI 2026.8.7
**发布日期：2026-08-07**

本版本主要变更（来自 PR #2451 合并至 main）：

| 类别 | 变更内容 | 贡献者 |
|------|---------|--------|
| 功能新增 | Cowork 会话标题栏新增"会话内搜索" | @liuzhq1986 (#2435) |
| 功能新增 | Markdown 支持 LaTeX 数学公式定界符渲染 | @fisherdaddy (#2449) |
| 体验改进 | OpenClaw 配置与插件安装流程优化 | — |
| 分析能力 | IM 数据分析增强 | — |
| 稳定性 | Windows 安装/更新可靠性修复（含 null watchdog 退出码兜底） | @fisherdaddy (#2446) |

**破坏性变更**：未明示。
**迁移注意事项**：从 2026.8.5/2026.8.6 升级可直接覆盖安装；Windows 用户如遇安装卡死，建议清理残留进程后重试。
🔗 [Release 分支 PR #2451](https://github.com/netease-youdao/LobsterAI/pull/2451)

---

## 3. 项目进展

今日 6 个 PR 完成合并/关闭，标志着多项关键改进落地：

| PR | 模块 | 内容 | 影响 |
|----|------|------|------|
| [#2451](https://github.com/netease-youdao/LobsterAI/pull/2451) | 全模块 | release/2026.8.5 → main 发布合并 | 推动版本号演进 |
| [#2450](https://github.com/netease-youdao/LobsterAI/pull/2450) | renderer | Cowork 全屏代码工具栏 Windows 点击失效修复 | 修复 Windows 全屏交互体验 |
| [#2449](https://github.com/netease-youdao/LobsterAI/pull/2449) | renderer/main/openclaw | Markdown LaTeX 定界符渲染 | 显著提升技术文档表达力 |
| [#2448](https://github.com/netease-youdao/LobsterAI/pull/2448) | renderer/openclaw/cowork | 会话搜索功能修复 | 配合 #2435 完善搜索闭环 |
| [#2445](https://github.com/netease-youdao/LobsterAI/pull/2445) | main/openclaw | 剥离插件索引托管键，避免 `config.set` 污染 | 提升插件配置一致性 |
| [#2446](https://github.com/netease-youdao/LobsterAI/pull/2446) | docs/win-installer | Windows 安装器 null watchdog 退出码通过 extractor 兜底 | 降低 Windows 端安装失败概率 |

**整体评价**：项目在 **Cowork 协作体验、Markdown 数学渲染、Windows 安装可靠性、OpenClaw 插件体系**四个维度同步推进，属于"质效并重"的一次更新周期。

---

## 4. 社区热点

今日评论与互动最活跃的话题集中在两个方向：

**🔥 热点一：自定义模型 Provider 的兼容性问题**
- Issue [#2443](https://github.com/netease-youdao/LobsterAI/issues/2443)（👍0，评论 1）— SiliconFlow 等模型 ID 含 `/` 的 OpenAI 兼容服务商在 UI 无法选择。该问题已引发开发者即时响应：贡献者 @ump45nose 当日提交修复 PR [#2452](https://github.com/netease-youdao/LobsterAI/pull/2452)。
- **背后诉求**：用户希望在 LobsterAI 中无缝接入国产推理服务（DeepSeek、Qwen、Kimi 等托管于 SiliconFlow 等平台），模型 ID 路径化命名（如 `deepseek-ai/DeepSeek-V4-Flash`）是行业惯例，目前的解析逻辑切断了这一体验。

**🔥 热点二：执行结果缺失的可观测性盲区**
- Issue [#2447](https://github.com/netease-youdao/LobsterAI/issues/2447)（评论 1）— 用户反馈 Agent 执行后既无结果也无错误信息，怀疑是静默失败。
- **背后诉求**：缺乏执行反馈的可见性会极大削弱用户信任，尤其在自动化/批量任务场景下。

---

## 5. Bug 与稳定性

按严重程度排序：

| 等级 | Issue | 描述 | 状态 | 是否有 Fix PR |
|------|-------|------|------|---------------|
| 🔴 高 | [#1195](https://github.com/netease-youdao/LobsterAI/issues/1195) | 自建 skill 被安装到 OpenClaw 目录后，重启 LobsterAI 技能面板不显示（必现） | OPEN（4 个月未解决，标记 stale） | ❌ 无 |
| 🔴 高 | [#2443](https://github.com/netease-youdao/LobsterAI/issues/2443) | 含 `/` 的自定义模型 ID 在 UI 无法使用 | OPEN（当日新开） | ✅ PR #2452 待合并 |
| 🟡 中 | [#2447](https://github.com/netease-youdao/LobsterAI/issues/2447) | 执行无结果且无错误信息 | OPEN（当日新开） | ❌ 无 |
| ⚫ 已关闭 | [#1263](https://github.com/netease-youdao/LobsterAI/issues/1263) | 定时任务 UI 显示重复 + API rate limit | CLOSED（stale） | — |
| ⚫ 已关闭 | [#1273](https://github.com/netease-youdao/LobsterAI/issues/1273) | sql.js WASM 高频操作 OOM 崩溃 + 数据库损坏风险 | CLOSED（stale）⚠️ 未确认修复 | — |

**风险提示**：
- #1195 已报告 4 个月，技能面板与 OpenClaw 路径的数据同步机制缺陷仍未根治，是当前最显眼的"老 Bug"。
- #1273 关于 sql.js 内存安全与 `fs.writeFileSync` 非原子写入的隐患被标记为 stale 关闭，但未在合并记录中看到对应修复，**存在被静默搁置的风险**，建议维护者公开说明是否已迁移至更稳健的存储方案。

---

## 6. 功能请求与路线图信号

今日功能诉求主要来自历史 Issue（多数被 stale 关闭，但仍有参考价值）：

| 诉求 | 来源 | 可能性评估 |
|------|------|-----------|
| **多 Agent 各自绑定 IM 机器人与模型** | [#1265](https://github.com/netease-youdao/LobsterAI/issues/1265) | 🟡 中等 — 体现多 Agent 团队协作愿景，与 Cowork 方向契合，可能纳入中期路线图 |
| **Markdown LaTeX 数学公式渲染** | PR [#2449](https://github.com/netease-youdao/LobsterAI/pull/2449) 已合并 | ✅ 已落地（2026.8.7） |
| **Cowork 全屏工具栏跨平台一致性** | PR [#2450](https://github.com/netease-youdao/LobsterAI/pull/2450) 已合并 | ✅ 已落地（2026.8.7） |
| **自定义 Provider 模型解析鲁棒性** | [#2443](https://github.com/netease-youdao/LobsterAI/issues/2443) + PR #2452 | 🟢 高 — 预计随 PR #2452 合入下个补丁版本 |
| **斜杠模型 ID 的 UI 选择支持** | 同上 | 🟢 高 — 同上 |

---

## 7. 用户反馈摘要

基于今日 Issue 评论与摘要：

**😟 不满意 / 痛点**
- **技能创建"看似成功但失效"**（#1195）：用户对"提示安装成功—重启却找不到"这种状态不一致体验非常失望，破坏了"技能"作为产品差异化能力的可信度。
- **执行静默失败**（#2447）：零反馈等同于零信任，用户无法判断是网络问题、模型问题还是本地 Bug。
- **国产模型接入门槛**（#2443）：自带 API Key 接入 SiliconFlow/DeepSeek 等主流服务被默认 UI 阻挡，与"开发者友好"的定位存在落差。

**😊 满意信号**
- 社区开发者能在 Issue 提出当日即提交 PR（#2452 对 #2443），说明开发者社区具备较强自驱力。
- 2026.8.7 的发布说明密集覆盖功能新增、稳定性、平台适配，反映维护团队对多模块并行治理的纪律性。

---

## 8. 待处理积压

以下长期未响应或标记为 stale 的重要条目建议维护者优先 review：

| 编号 | 类型 | 创建时间 | 待办 | 链接 |
|------|------|---------|------|------|
| #1195 | Bug | 2026-04-01 | OpenClaw skill 路径与技能面板同步机制 — 已 4 个月 | [🔗](https://github.com/netease-youdao/LobsterAI/issues/1195) |
| #1265 | Feature | 2026-04-02 | 多 Agent 差异化绑定 IM 机器人与模型（多 Agent 团队协作场景） | [🔗](https://github.com/netease-youdao/LobsterAI/issues/1265) |
| #1273 | Bug（高危） | 2026-04-02 | sql.js WASM OOM + 数据库损坏 — 被 stale 关闭但未见对应修复提交 | [🔗](https://github.com/netease-youdao/LobsterAI/issues/1273) |
| PR #2452 | 待合并 | 2026-08-07 | 斜杠模型 ID Provider 前缀保留（解决 #2443） | [🔗](https://github.com/netease-youdao/LobsterAI/pull/2452) |

**维护者建议**：
1. 优先合入 PR #2452，对应 Issue #2443 可在合并后一并关闭，形成快速正向循环。
2. 重新评估 #1195 与 #1273 是否已通过间接方式修复；若未修复，应恢复其 OPEN 状态并排期。
3. 对 #1265 的多 Agent 差异化配置诉求，可在路线图文档中给出明确反馈。

---

> 📊 **项目健康度总评**：⭐⭐⭐⭐☆（4/5）
> 版本迭代节奏健康，社区响应链路短；扣分项在于关键 Bug 长期未根治与 stale 关闭机制可能掩盖系统性风险。

</details>

<details>
<summary><strong>QwenPaw</strong> — <a href="https://github.com/agentscope-ai/QwenPaw">agentscope-ai/QwenPaw</a></summary>

<think>The user wants me to generate a project daily report for QwenPaw based on the GitHub data provided. Let me analyze the data carefully and produce a structured, professional report.

Let me go through the data:

**Overview:**
- 31 Issues updated (20 active/new, 11 closed)
- 47 PRs updated (26 pending, 21 merged/closed)
- 1 new release: v2.1.0-beta.2

**Release v2.1.0-beta.2:**
- fix(ci): fence-aware section extraction in real-behavior-proof (fixes #6626) by @hanson-hex
- fix(checkpoints): restore auto snapshots in web workspace bootstrap by @qbc2016

Note: The release notes seem truncated, only showing 2 PRs. I should mention what I can see.

**Top Issues by comments:**
1. #6116 [CLOSED] doom loop bug - 8 comments - wontfix
2. #6782 [OPEN] 2.0.1 docker version plugin market maintenance - 8 comments
3. #6732 [OPEN] mcp tools regularly fail - 6 comments
4. #6490 [OPEN] Add Volcengine Agent Plan and Xiaomi MiMo Standard API - 4 comments
5. #6786 [OPEN] Telegram channel access_control whitelist resets - 4 comments
6. #6770 [OPEN] Make user Chrome tab lifetime configurable - 3 comments
7. #6780 [OPEN] v2.0.1 freezes after tens of minutes idle - 3 comments
8. #6797 [CLOSED] v2.1.0b2 desktop mode text selection - 3 comments
9. #6285 [OPEN] Add qwen3.8-max-preview support - 3 comments
10. #6810 [OPEN] Windows install/update should terminate processes - 2 comments
11. #6785 [OPEN] Profile category hard-codes official persona files - 2 comments
12. #6792 [OPEN] Built-in ACP runner uses deprecated npm packages - 2 comments
13. #6480 [CLOSED] nohup commands cause agent to hang - 2 comments
14. #6794 [OPEN] Agent Kanban 405 error - 2 comments
15. #6789 [CLOSED] 401 Unauthorized GitHub binding issue - 2 comments
16. #6790 [CLOSED] v2.1.0-beta.2 desktop mode double-click to open - 2 comments
17. #6775 [OPEN] Malware Bytes found Trojan in Windows Desktop - 2 comments

**Top PRs:**
1. #6772 - feat(memory): enhance ReMe configuration - new feature
2. #6809 - fix(providers): sanitize Chat Completions content - bug fix
3. #6799 - fix(shell): stop temp output file leakage - bug fix
4. #6750 - fix(chat): session identity deadlock - bug fix
5. #6808 - fix(console): show custom profile markdown files - bug fix
6. #6725 - fix(agents): report fork finalization failures - bug fix
7. #6688 - fix(plugins): isolate bare absolute imports - bug fix
8. #6615 - fix(config): handle corrupted agent config - bug fix
9. #6617 - fix(providers): honor the Retry-After cap - bug fix
10. #6715 - feat(onebot): handle remote inbound voice and image media
11. #6623 - fix(acp): prevent final text loss - bug fix
12. #6776 - fix(browser): self-heal dead Playwright driver - bug fix
13. #6788 - fix: use shared root profile workspace for ACL store - bug fix
14. #6805 - fix(scripts): repair channel check environment detection
15. #6804 - feat(wechat): accept Chinese approval replies
16. #6564 - fix(memory): flush pending turns before compression
17. #6802 - fix: restore desktop window text selection
18. #6801 - fix(os): restore text selection in OS desktop window
19. #6800 - feat(mailbox): intelligent email management assistant
20. #4694 [CLOSED] feat(website): downloads UI Refactoring

Let me now structure the report. I'll write it in Chinese since the prompt is in Chinese, and use a professional, data-driven tone.

Let me make sure to note:
- Multiple recent bugs that suggest v2.1.0-beta.2 has stability issues
- The release notes look truncated - I should note this
- There are many "first-time-contributor" PRs which is a healthy sign
- Some bugs (Telegram ACL reset, doom loop, MCP failure) suggest systemic issues

Let me draft each section:

### 1. 今日速览
QwenPaw 今日活跃度较高，发布 v2.1.0-beta.2 新版本，过去24小时有 31 条 Issue 更新和 47 条 PR 更新，反映出 v2.1.0 测试阶段社区反馈密集。

### 2. 版本发布
v2.1.0-beta.2 发布，修复了 CI 段提取和 Web 工作区自动快照问题。需要注意的是，该版本引发了不少 UI/UX 回归问题（桌面模式文本选择、双击打开、任务执行期间无法提交会话等）。

### 3. 项目进展
今日合并/关闭的 PR 包括...（但实际数据中没有显示哪些 PR 是"今日合并/关闭"的，只有所有更新的 PR。我需要假设 21 个已合并/关闭的 PR 中哪些值得提及）

Looking at closed PRs in the visible list:
- #4694 - feat(website): downloads UI Refactoring [CLOSED]

The 47 PR updates show 26 pending and 21 merged/closed. I don't have full details on which specific ones were merged, so I should be careful.

### 4. 社区热点
Top issues by engagement.

### 5. Bug 与稳定性
- #6786 Telegram ACL reset - has fix PR #6788
- #6785 Profile regression - has fix PR #6808
- #6792 Deprecated ACP npm packages - no fix PR
- #6794 Agent Kanban 405 - no fix PR
- #6775 Malware detection false positive - no fix PR
- #6813 consume_model_response KeyError - no fix PR
- #6811 OpenAI Responses disable_thinking - no fix PR
- #6812 Gemini $schema extra field - no fix PR
- #6803 OpenAI Responses content type rejected - has PR #6809
- #6780 Desktop freeze after idle - no fix PR
- #6732 MCP tools fail periodically - no fix PR
- #6782 Plugin market maintenance - no fix PR
- #6116 Doom loop (CLOSED/wontfix) - known limitation

### 6. 功能请求与路线图
- #6490 Add Volcengine and Xiaomi MiMo providers - no PR yet
- #6285 qwen3.8-max-preview support - no PR yet
- #6770 Configurable Chrome tab lifetime - no PR yet
- #6800 Mailbox assistant - has PR #6800 (pending)
- #6804 WeChat Chinese approval replies - has PR #6804 (pending)
- #6772 ReMe memory enhancement - has PR #6772 (pending)
- #6715 OneBot voice/image media - has PR #6715 (pending)
- #4694 Downloads UI - CLOSED

### 7. 用户反馈摘要
Real user pain points extracted from comments.

### 8. 待处理积压
Looking for issues/PRs that have been open for a while without action:
- #6490 (2026-07-27) Add Volcengine/MiMo providers - 4 comments, open 11 days
- #6285 (2026-07-20) qwen3.8-max-preview - 3 comments, open 18 days
- #6116 doom loop (CLOSED wontfix)
- #4694 Downloads UI (CLOSED)

Let me write the report now in Chinese, structured and professional.</think>

# QwenPaw 项目动态日报
**日期：2026-08-08**

---

## 1. 今日速览

QwenPaw 今日进入 **v2.1.0-beta 测试阶段高密度反馈期**：发布 v2.1.0-beta.2 预发布版本，过去 24 小时共 **31 条 Issue 更新**（活跃/新开 20，关闭 11）与 **47 条 PR 更新**（待合并 26，已合并/关闭 21）。社区活跃度处于近期高位，且出现大量首贡献者（first-time-contributor）PR，贡献者生态健康。但 v2.1.0b2 也带来了多项 UI 回归与稳定性问题，桌面端、Windows 安装链路、以及多 Provider 兼容性是当日主要矛盾焦点。

---

## 2. 版本发布

**🚀 v2.1.0-beta.2** 已发布  
🔗 https://github.com/agentscope-ai/QwenPaw/releases/tag/v2.1.0-beta.2

**更新内容（已披露的变更）：**
- `fix(ci)`：fence-aware 段提取逻辑（PR #6653，修复 #6626），由 @hanson-hex 贡献
- `fix(checkpoints)`：恢复 Web 工作区引导过程中的自动快照（PR #6，由 @qbc2016 贡献）

> ⚠️ **说明**：Release notes 摘要显示已截断，目前可见仅 2 条变更记录，建议查阅 GitHub Release 页面获取完整变更列表。

**⚠️ 已知回归与破坏性变更（来自社区反馈）：**
- 桌面模式文本选择/复制失效（#6797、#6802、#6801）
- 桌面模式需双击打开应用、缺少回到完整模式入口（#6790）
- 任务执行时对话窗口无法提交新会话（#6796）
- Files 页面 Profile 分类硬编码官方 persona 文件，自定义 .md 文件被隐藏（#6785）

**📌 迁移提示**：从 v2.0.1 升级到 v2.1.0b2 的用户，需注意 Windows 升级路径在文件被占用时会卡死（#6810），建议先手动退出所有运行中的 QwenPaw 进程再执行更新。

---

## 3. 项目进展

虽然数据未直接列出"今日合并"清单，但**已关闭的 21 条 PR** 中可识别的关键进展包括：

| 类别 | PR | 内容 |
|---|---|---|
| Web 站点 | #4694 | feat(website): downloads UI 重构（已关闭，疑为设计方向调整） |

**🛠 待合并的高价值 PR（影响即将发布的 v2.1.0）：**
- **#6772** `feat(memory): enhance ReMe configuration, embedding lifecycle, and Daily Paper` — 大型内存系统增强，引入 Embedding 服务工厂、Daily Paper 定时简报、通用 Cron 任务机制，对长期记忆质量影响显著  
  🔗 https://github.com/agentscope-ai/QwenPaw/pull/6772
- **#6800** `feat(mailbox): intelligent email management assistant` — 新增 AI 邮箱管理能力（实时监控、访问控制、多邮箱支持）  
  🔗 https://github.com/agentscope-ai/QwenPaw/pull/6800
- **#6804** `feat(wechat): accept Chinese approval replies` — 修复 #6728，微信通道支持「允许/拒绝」中文审批指令  
  🔗 https://github.com/agentscope-ai/QwenPaw/pull/6804
- **#6715** `feat(onebot): handle remote inbound voice and image media` — OneBot 通道补齐远端媒体处理  
  🔗 https://github.com/agentscope-ai/QwenPaw/pull/6715
- **#6688** `fix(plugins): isolate bare absolute imports per plugin namespace` — 修复 #6683 插件安装失败的根因  
  🔗 https://github.com/agentscope-ai/QwenPaw/pull/6688

**🤝 首贡献者活跃度高**：今日可见 PR 中带有 `[first-time-contributor]` 标签的有 #6799、#6750、#6808、#6725、#6688、#6615、#6623、#6776、#6800 共 9 条，说明贡献者漏斗健康，新人上手路径通畅。

---

## 4. 社区热点（评论最多）

| 排名 | Issue | 评论数 | 状态 | 主题 |
|---|---|---|---|---|
| 1 | [#6116](https://github.com/agentscope-ai/QwenPaw/issues/6116) | 8 | CLOSED / wontfix | 末日循环：单轮内重复触发同一工具调用 |
| 2 | [#6782](https://github.com/agentscope-ai/QwenPaw/issues/6782) | 8 | OPEN | 2.0.1 Docker 版插件/应用市场始终"维护中"无法使用 |
| 3 | [#6732](https://github.com/agentscope-ai/QwenPaw/issues/6732) | 6 | OPEN | MCP 工具周期性失效，需重启 Docker 才能恢复 |
| 4 | [#6490](https://github.com/agentscope-ai/QwenPaw/issues/6490) | 4 | OPEN | 内置 Volcengine Agent Plan + 小米 MiMo Standard Provider |
| 5 | [#6786](https://github.com/agentscope-ai/QwenPaw/issues/6786) | 4 | OPEN | Telegram 通道 multica 新建任务时 ACL 白名单被重置 |

**诉求分析：**
- **企业/平台集成诉求**凸显：#6490 要求接入火山引擎 Agent Plan 和小米 MiMo，#6285 持续呼吁加入 qwen3.8-max-preview，反映国内大模型多 Provider 支持需求强烈。
- **通道稳定性问题**集中爆发：Telegram (#6786) + MCP (#6732) + 微信（#6728 已修）三连击，显示 v2.x 系列在多通道场景下边界条件未充分覆盖。
- **基础设施类痛点**（#6782 Docker 插件市场 403/维护中）影响所有自托管用户，是社区日报中呼声最一致的功能阻塞。

---

## 5. Bug 与稳定性

按严重程度排列：

### 🔴 高严重（影响核心功能）
| Issue | 描述 | 是否有 fix PR |
|---|---|---|
| [#6782](https://github.com/agentscope-ai/QwenPaw/issues/6782) | Docker 2.0.1 插件/应用市场不可用 | ❌ |
| [#6732](https://github.com/agentscope-ai/QwenPaw/issues/6732) | MCP 工具每隔数小时静默失效 | ❌ |
| [#6780](https://github.com/agentscope-ai/QwenPaw/issues/6780) | 2.0.1 空闲数十分钟后卡死需重启 | ❌ |
| [#6786](https://github.com/agentscope-ai/QwenPaw/issues/6786) | Telegram ACL 白名单 multica 任务间被重置 | ✅ #6788 |
| [#6794](https://github.com/agentscope-ai/QwenPaw/issues/6794) | Agent Kanban POST 405、热重载 404 | ❌ |

### 🟡 中严重（v2.1.0b2 回归）
| Issue | 描述 | 是否有 fix PR |
|---|---|---|
| [#6785](https://github.com/agentscope-ai/QwenPaw/issues/6785) | Profile 分类硬编码官方 persona，自定义 .md 失效 | ✅ #6808 |
| [#6797](https://github.com/agentscope-ai/QwenPaw/issues/6797) | v2.1.0b2 桌面模式无法选中文本复制 | ✅ #6802、#6801 |
| [#6796](https://github.com/agentscope-ai/QwenPaw/issues/6796) | v2.1 beta2 任务执行期间无法提交新会话 | ❌ |
| [#6790](https://github.com/agentscope-ai/QwenPaw/issues/6790) | v2.1.0-beta.2 桌面模式需双击打开、缺回退入口 | ❌ |
| [#6810](https://github.com/agentscope-ai/QwenPaw/issues/6810) | Windows 更新时占用文件导致 NSIS 报错 | ❌ |

### 🟠 跨 Provider 兼容性问题
| Issue | 描述 | 是否有 fix PR |
|---|---|---|
| [#6813](https://github.com/agentscope-ai/QwenPaw/issues/6813) | consume_model_response 对 agentscope 2.x ChatResponse 抛 KeyError: '__aiter__' | ❌ |
| [#6812](https://github.com/agentscope-ai/QwenPaw/issues/6812) | Gemini Provider 工具 schema 含 `$schema` 字段被拒 | ❌ |
| [#6811](https://github.com/agentscope-ai/QwenPaw/issues/6811) | OpenAI Responses 续接摘要忽略 disable_thinking，60s 取消被误报 | ❌ |
| [#6803](https://github.com/agentscope-ai/QwenPaw/issues/6803) | OpenAI-compatible chat 含 Responses-API input_text 被 StepFun 拒绝 | ✅ #6809 |

### 🟢 已关闭
- [#6116](https://github.com/agentscope-ai/QwenPaw/issues/6116) 末日循环 — **wontfix**（社区有不同声音：用户希望检测阈值从 ~6 次下调，或提供禁用工具开关）
- [#6789](https://github.com/agentscope-ai/QwenPaw/issues/6789) GitHub OAuth 401 无法解绑 — 已关闭（疑似用户不当请求）
- [#6480](https://github.com/agentscope-ai/QwenPaw/issues/6480) `nohup` 后台命令 agent 卡住 — 已关闭
- [#6565](https://github.com/agentscope-ai/QwenPaw/issues/6565) `execute_shell_command` 多行命令换行被吞 — 已关闭
- [#6773](https://github.com/agentscope-ai/QwenPaw/issues/6773) Linux 上 doom-loop / rubric 闸门永不触发 — 已关闭

**📊 健康度指标**：v2.1.0b2 引入 6+ 项可见回归，强烈建议在正式 v2.1.0 GA 前增加一轮完整回归测试；现有 fix PR 覆盖了其中 3 项。

---

## 6. 功能请求与路线图信号

| 请求 | 是否已有 PR | 进入下一版本的概率 |
|---|---|---|
| [#6490](https://github.com/agentscope-ai

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/NousResearch/hermes-agent">NousResearch/hermes-agent</a></summary>

<think>Let me analyze this GitHub data for Hermes Agent and generate a comprehensive daily report for 2026-08-08.

Let me organize the data:

**Overall Activity:**
- 50 Issues updated (46 new/active, 4 closed)
- 50 PRs updated (45 open, 5 merged/closed)
- 0 new releases

**Top Issues by Comments:**
1. #78647 - Epic: Shard all 20 god files (60 comments)
2. #64182 - Plugin Interface Expansion tracking (30 comments)
3. #47349 - Configurable Memory Backends (15 comments)
4. #17565 - Configurable Temperature Parameter (11 comments, 13 thumbs)
5. #31584 - Memory-context as background context (11 comments)
6. #40662 - PreToolUse enforcement hook (10 comments)
7. #79278 - Context compression drops in-flight tool chain (10 comments)
8. #13332 - Hybrid Tool Pre-Selection (9 comments, 4 thumbs)
9. #11349 [CLOSED] - Discord docs drift (9 comments)
10. #65365 - OAuth/Anthropic 400 error (8 comments)

**Closed Issues (4):**
- #11349 - Discord docs drift
- #79331 - Telegram Rich Messages copy affordance
- #81441 - Windows ripgrep paths (duplicate, closed)
- Others

**Closed PRs (5):**
- #81441 - Windows search fix (closed as duplicate)
- Others

**Notable New Issues (P1/P2):**
- #79278 [P1] - Context compression drops in-flight tool chain
- #65365 [P1] - OAuth Anthropic 400 error on memory/session_search tools
- #79624 [P1] - Gateway crashes during preflight compaction
- #22418 [P2] - macOS gateway conflicts
- #54523 [P2] - Tailscale remote desktop issues
- #80449 [P2] - Compressor keeps oversized turn whole
- #80968 [P2] - Windows gateway crash with --tui
- #80946 [P3] - Windows local file path issue
- #81290 [P2] - Secondary Desktop window black
- #81440 [P2] - Discord bot reacts ✅ on rejected messages

**Notable PRs:**
- #81444 - Fix for #80449 (compression split oversized turns)
- #80781 - AGENTS.md directory chain merge
- #81439 - Configurable timestamps
- #81442 - max_context key in /models
- #81443 - Cron failure breaker
- #81407 - Cron SSRF protection
- #81059 - MCP remove all OAuth files
- #78324 - Windows hooks path separators
- #81042 - A2A audit logging

Now let me write the report in Chinese, professional, data-driven, with all the structure requested.</think>

# Hermes Agent 项目日报 · 2026-08-08

> 数据来源：[github.com/NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent)
> 数据周期：过去 24 小时（截至 2026-08-08）

---

## 一、今日速览

Hermes Agent 仓库今日维持**高强度活跃状态**：24 小时内 Issues 更新 50 条（活跃 46 / 已关闭 4），PR 更新 50 条（待合并 45 / 已合并关闭 5），**无新版本发布**。讨论热度集中于上下文压缩可靠性、记忆系统重构、插件接口扩展三大主题，反映项目正处于"agent 核心循环稳定性 → 生态扩展"的过渡期。Bug 修复 PR 持续落地（压缩器、Windows 兼容、MCP 清理、安全加固），但仍有数个 **P1 级别严重问题**（OAuth 触发 400、网关压缩崩溃）处于开放状态，需维护者尽快响应。

---

## 二、版本发布

⚠️ **今日无新版本发布**。当前迭代以修复与小特性为主，未触发新的 Release 标签。

---

## 三、项目进展

今日已合并/关闭的关键 PR 较少，主要进展集中在**待合并队列中的高质量修复**：

| PR | 主题 | 状态 | 影响 |
|---|---|---|---|
| [#81444](https://github.com/NousResearch/hermes-agent/pull/81444) | 压缩器拆分超大活跃回合（修复 #80449） | 待合并 | 修复单回合超大时 token 预算被打破的 bug，提升长会话压缩可靠性 |
| [#81401](https://github.com/NousResearch/hermes-agent/pull/81401) | Honcho 客户端泄漏修复 | 待合并 | 修复超时重建/OAuth 回退时旧 SDK 客户端未释放的连接泄漏 |
| [#80781](https://github.com/NousResearch/hermes-agent/pull/80781) | 合并 AGENTS.md 目录链（移植自 grok-cli） | 待合并 | 单仓库 monorepo 内启动会话可读取完整 AGENTS.md 链，提升系统提示连贯性 |
| [#78324](https://github.com/NousResearch/hermes-agent/pull/78324) | Windows hook 路径分隔符修复 | 待合并 | 解决 Windows 上 `shlex` 把 `C:\Users\alice\hook.exe` 错误解析的兼容性问题 |
| [#81407](https://github.com/NousResearch/hermes-agent/pull/81407) | Cron monitor 防 SSRF | 待合并 | 安全加固：对所有 URL hop 施加 SSRF 防护 |
| [#81059](https://github.com/NousResearch/hermes-agent/pull/81059) | MCP 移除时清理所有 OAuth 文件 | 待合并 | 修复 `hermes mcp remove` 残留 `.client.json`/`.meta.json` 导致的重启循环 |
| [#81042](https://github.com/NousResearch/hermes-agent/pull/81042) | A2A 拒绝请求审计日志 | 待合并 | 安全可观测性：401/403 请求现在写入 `a2a_audit.jsonl` |

**项目整体推进评估**：今日"代码层面"的实际落地以**稳定性修复**为主（Windows 兼容、连接泄漏、Cron 安全、MCP 清理），缺乏新功能合并。需关注 45 个待合并 PR 的审阅积压。

---

## 四、社区热点

### 🔥 讨论最活跃的 Issues（评论数 ≥10）

| Issue | 评论数 | 👍 | 主题 | 链接 |
|---|---|---|---|---|
| [#78647](https://github.com/NousResearch/hermes-agent/issues/78647) | **60** | 0 | **Epic：拆分仓库全部 20 个 god file** | [查看](https://github.com/NousResearch/hermes-agent/issues/78647) |
| [#64182](https://github.com/NousResearch/hermes-agent/issues/64182) | **30** | 0 | 插件接口扩展追踪（社区提议汇总） | [查看](https://github.com/NousResearch/hermes-agent/issues/64182) |
| [#47349](https://github.com/NousResearch/hermes-agent/issues/47349) | 15 | 1 | 可配置记忆后端（honcho/fact_store 替代 memory.md） | [查看](https://github.com/NousResearch/hermes-agent/issues/47349) |
| [#17565](https://github.com/NousResearch/hermes-agent/issues/17565) | 11 | **13** | **可配置 temperature 参数**（社区呼声最高） | [查看](https://github.com/NousResearch/hermes-agent/issues/17565) |
| [#31584](https://github.com/NousResearch/hermes-agent/issues/31584) | 11 | 0 | 记忆上下文应作为背景而非权威用户消息 | [查看](https://github.com/NousResearch/hermes-agent/issues/31584) |
| [#79278](https://github.com/NousResearch/hermes-agent/issues/79278) | 10 | 0 | 上下文压缩丢失在途工具链 | [查看](https://github.com/NousResearch/hermes-agent/issues/79278) |
| [#40662](https://github.com/NousResearch/hermes-agent/issues/40662) | 10 | 0 | PreToolUse 强制 hook（调试时 LLM 不遵守规则） | [查看](https://github.com/NousResearch/hermes-agent/issues/40662) |

**诉求分析**：
- **架构层**（#78647、#64182）：社区要求打破 god file 垄断、扩展插件接口，说明项目正面临"代码组织 → 生态扩展"的关键转型。
- **可控性层**（#17565、#47349）：用户对"硬编码默认值"的不满集中在 temperature 与 memory 后端，👍 13 的温度参数是**反应数最高**的单点请求。
- **可靠性层**（#79278、#31584）：压缩与记忆被多次指出是当前最大的体验痛点。

---

## 五、Bug 与稳定性

### 🚨 P1（严重 — 影响核心功能）

| Issue | 描述 | 状态 |
|---|---|---|
| [#65365](https://github.com/NousResearch/hermes-agent/issues/65365) | **Anthropic OAuth 会话只要 schema 含 `memory`/`session_search` 即触发 HTTP 400 "out of extra usage"** — 影响所有 Claude Pro/Max 订阅用户 | 开放，无 fix PR |
| [#79278](https://github.com/NousResearch/hermes-agent/issues/79278) | **上下文压缩丢弃在途工具链** — 副作用已完成但结果未送达 agent，导致非幂等操作被错误重放 | 开放，无 fix PR |
| [#79624](https://github.com/NousResearch/hermes-agent/issues/79624) | **网关重启时 preflight 压缩崩溃 exit(1)** — 超大 session 直接杀死进程 | 开放，无 fix PR |

### 🟧 P2（重要 — 体验受损）

| Issue | 描述 | Fix PR |
|---|---|---|
| [#54523](https://github.com/NousResearch/hermes-agent/issues/54523) | Tailscale 远程桌面：异步路由阻塞 asyncio loop 10–25s | — |
| [#80449](https://github.com/NousResearch/hermes-agent/issues/80449) | 压缩器保留超大单回合 | ✅ [#81444](https://github.com/NousResearch/hermes-agent/pull/81444) |
| [#22418](https://github.com/NousResearch/hermes-agent/issues/22418) | macOS Atomic Hermes 与 CLI gateway 端口冲突 | — |
| [#81290](https://github.com/NousResearch/hermes-agent/issues/81290) | Windows 次级 Desktop 窗口黑屏无恢复 | — |
| [#80968](https://github.com/NousResearch/hermes-agent/issues/80968) | Windows `hermes --tui` 输入即崩溃（重复 issue） | — |
| [#81440](https://github.com/NousResearch/hermes-agent/issues/81440) | Discord bot 对未授权消息误反应 ✅，造成"已确认"假象 | — |
| [#80744](https://github.com/NousResearch/hermes-agent/pull/80744) | `file_tools.py` Docker 配置选项缺失 | ✅ PR 待合并 |

### 🟨 P3（一般 — 边角问题）

- [#11349](https://github.com/NousResearch/hermes-agent/issues/11349) Discord 文档 6 处漂移（**已关闭** ✅）
- [#79331](https://github.com/NousResearch/hermes-agent/issues/79331) Telegram Rich Message 复制手势缺失（**已关闭** ✅）
- [#81441](https://github.com/NousResearch/hermes-agent/pull/81441) Windows ripgrep 路径（**重复，已关闭** ✅）
- [#63485](https://github.com/NousResearch/hermes-agent/issues/63485)、[#81368](https://github.com/NousResearch/hermes-agent/issues/81368) Telegram Bot API 10.1 rich_message 被静默忽略（两条重复 issue，均开放）
- [#80946](https://github.com/NousResearch/hermes-agent/issues/80946) Desktop 无法打开 Windows 本地路径
- [#80507](https://github.com/NousResearch/hermes-agent/issues/80507) 委派子 Kanban 退出守卫耗尽父回合预算
- [#80383](https://github.com/NousResearch/hermes-agent/issues/80383)、[#73888](https://github.com/NousResearch/hermes-agent/issues/73888) Desktop 项目侧边栏未区分显式/自动发现项目

**评估**：3 个 P1 bug 均无对应 fix PR，是**最大的稳定性风险敞口**。其中 OAuth + `memory` 工具 schema 的 400 错误尤其严重，因为它直接影响订阅用户能否使用核心工具。

---

## 六、功能请求与路线图信号

### 已被 PR 实现（待合并）

| Feature | 关联 PR | 评估 |
|---|---|---|
| 显示层可配置时间戳（CLI/TUI/Desktop） | [#81439](https://github.com/NousResearch/hermes-agent/pull/81439) | 几乎确定进入下一版本 |
| 合并 AGENTS.md 目录链 | [#80781](https://github.com/NousResearch/hermes-agent/pull/80781) | 高确定性 |
| Cron 任务失败熔断（连续 3 次失败暂停 + 操作员告警） | [#81443](https://github.com/NousResearch/hermes-agent/pull/81443) | 高确定性 |
| 模型元数据识别 `max_context` 键（兼容 vLLM/ArliAI） | [#81442](https://github.com/NousResearch/hermes-agent/pull/81442) | 高确定性 |
| Desktop composer render/edit 桥 | [#81435](https://github.com/NousResearch/hermes-agent/pull/81435) | 中等确定性 |
| Email 会话按 subject 隔离 | [#81018](https://github.com/NousResearch/hermes-agent/pull/81018) | 中等确定性 |
| OpenAI 兼容图像生成插件 | [#49157](https://github.com/NousResearch/hermes-agent/pull/49157) | 长期 open，需评估 |

### 强信号但尚无 PR

| Feature Request | 信号强度 | 路线图可能性 |
|---|---|---|
| [#17565](https://github.com/NousResearch/hermes-agent/issues/17565) 可配置 temperature | 👍 13、11 评论 | **高** — 用户呼声最高 |
| [#13332](https://github.com/NousResearch/hermes-agent/issues/13332) 混合工具预选（RAG 风格 schema 注入） | 👍 4、9 评论 | 高 — 14k token 的工具 schema 是公认开销 |
| [#509](https://github.com/NousResearch/hermes-agent/issues/509) 认知记忆操作（LLM 驱动编码/巩固/自适应回忆） | 👍 4、7 评论 | 中高 |
| [#81438](https://github.com/NousResearch/hermes-agent/issues/81438) 可中断的 per-tool 执行租约/watchdog | 新开 | 中 |
| [#81405](https://github.com/NousResearch/hermes-agent/issues/81405) 一等公民 Teams（多 profile 持久团队 + Quick Chat） | 新开 | 中（创新方向） |
| [#28056](https://github.com/NousResearch/hermes-agent/issues/28056) 运行时质量门 + 有界重试 | 7 评论 | 中 |
| [#57364](https://github.com/NousResearch/hermes-agent/issues/57364) `pre_llm_message` 隐私/脱敏中间件 hook | 4 评论 | 中 |
| [#18374](https://github.com/NousResearch/hermes-agent/issues/18374) cronjob 暴露完整 prompt | 👍 5、4 评论 | 中 |

---

## 七、用户反馈摘要

从高评论 Issues 的讨论中提炼出的真实用户痛点：

- **🔴 幻觉失控**：温度硬编码为 1.0 导致"严重幻觉"，是用户提出最多的单一痛点 [#17565](https://github.com/NousResearch/hermes-agent/issues/17565)。
- **🔴 记忆污染 prompt**：用户担心 `MEMORY.md` 注入系统提示会被恶意内容利用，主张应作为"背景上下文"而非"权威消息" [#31584](https://github.com/NousResearch/hermes-agent/issues/31584)。
- **🟠 压缩副作用**：压缩丢失在途工具结果是**安全级别**问题（#79278），社区称之为"对任何非幂等操作都不安全"。
- **🟠 工具 schema 过大**：默认注入 14k token 工具描述被反复抱怨 [#13332](https://github.com/NousResearch/hermes-agent/issues/13332)。
- **🟡 调试时规则被忽略**：LLM 在多步调试中忽视系统提示/记忆规则（recency bias）[#40662](https://github.com/NousResearch/hermes-agent/issues/40662)。
- **🟡 Discord 假确认**：✅ 反应出现在消息被拒绝时，让用户误以为 agent 已接收 [#81440](https://github.com/NousResearch/hermes-agent/issues/81440)。
- **🟢 满意信号**：可配置温度获得 13 👍，表明用户对"控制权回归"诉求强烈。

---

## 八、待处理积压

### ⏰ 长期未响应 / 优先级高

| Issue/PR | 创建日期 | 等待时长 | 主题 | 维护者建议 |
|---|---|---|---|---|
| [#78647](https://github.com/NousResearch/hermes-agent/issues/78647) | 2026-08-04 | 4 天 | **20 个 god file 拆分 epic**（60 评论） | 建议维护者给出明确时间表或拆分子 issue |
| [#64182](https://github.com/NousResearch/hermes-agent/issues/64182) | 2026-07-14 | **25 天** | 插件接口扩展追踪 | 长期追踪 issue 需阶段性 sync |
| [#65365](https://github.com/NousResearch/hermes-agent/issues/65365) | 2026-07-16 | 23 天 | **P1 OAuth + memory 触发 400** | **极高优先**，影响所有 Claude 订阅用户 |
| [#22418](https://github.com/NousResearch/hermes-agent/issues/22418) | 2026-05-09 | **91 天** | macOS gateway 端口冲突 | 长期未修，建议升级 P2 → P1 跟踪 |
| [#509](https://github.com/NousResearch/hermes-agent/issues/509) | 2026-03-06 | **155 天** | 认知记忆操作 | 5 个月未推进，需明确是否进入路线图 |
| [#31584](https://github.com/NousResearch/hermes-agent/issues/31584) | 2026-05-24 | 76 天 | 记忆上下文权威性问题 | 安全相关，建议独立审查 |
| [#13332](https://github.com/NousResearch/hermes-agent/issues/13332) | 202

</details>

<details>
<summary><strong>OpenHuman</strong> — <a href="https://github.com/tinyhumansai/openhuman">tinyhumansai/openhuman</a></summary>

<think>Let me analyze the OpenHuman project data and generate a comprehensive daily report for 2026-08-08.

Key observations from the data:
1. **Activity Overview**: 5 Issues updated, 13 PRs updated, 3 releases
2. **Releases**: v0.63.7, v0.63.11, v0.63.12 - showing rapid version progression
3. **Issues**: All 5 still open, none closed - some are fresh from 2026-08-07
4. **PRs**: Mixed - 6 closed/merged, 7 still open
5. **Themes**: 
   - Realtime/socket issues on v0.63.12
   - Self-hosted features broken on Debian
   - API key save issues (DeepSeek)
   - UI shell redesign
   - Removal of tiny.place and web apps (deprecation notices)
   - Voice/mascot integration
   - Feedback quality tier surfacing
   - Keyring concurrency fixes

Let me structure the report properly. I need to be objective and data-driven, with GitHub links to each item.

Let me organize:

**Today's Snapshot (今日速览)**: High activity - 3 releases, 13 PRs, 5 Issues. Mixed signals with some critical bugs on latest release.

**Version Releases**: 3 versions in close succession - v0.63.7, v0.63.11, v0.63.12. v0.63.12 is marked as a smooth bump, v0.63.11 was the big feature release (187 commits), v0.63.7 was the flows/memory/voice power-up.

**Project Progress** (closed/merged PRs):
- #5445 Release (closed)
- #5441 Realtime voice mode toggle by default (closed)
- #5419 Human page merged into chat (closed)
- #5435 main history as ancestor of release (closed)
- #5434 merge:main into release (closed)
- #5433 Promote main -> release (closed)
- Plus PR #5432 might be still open - let me check... it's listed as OPEN

**Community Hotspots**:
- Issue #5349 has 3 comments - DeepSeek API key
- Most Issues are fresh today with 0 comments

**Bugs & Stability**:
- #5444: Realtime socket broken on v0.63.12 (regression)
- #5443: Self-hosted features broken on pikaOS/Debian
- #5349: DeepSeek API key save issue
- #5436 PR: keyring concurrency (fix)
- #5432 PR: provider slug normalization (fix)
- #5441 PR: voice mode toggle visibility (fix, closed)
- #5440: feedback error message helper refactor

**Feature Requests**:
- #5425: Talk to floating mascot (high priority voice feature)
- #5431 PR: feedback quality tier in composer
- #5442 PR: app shell chrome + inset card

**User Feedback**:
- pikaOS/Debian user has full self-hosted stack broken
- DeepSeek users can't save API keys
- Realtime socket breakage after 401 fix

**Backlog**:
- Issue #5349 from 2026-08-04, multiple updates but not closed
- Several fresh issues need triage

Let me write this in Chinese since the prompt was in Chinese.</think>

# OpenHuman 项目日报 · 2026-08-08

> 数据来源：[github.com/tinyhumansai/openhuman](https://github.com/tinyhumansai/openhuman)
> 报告周期：2026-08-07 ~ 2026-08-08（UTC 24h）

---

## 1. 今日速览

OpenHuman 进入**高频发布与回归修复并行的密集迭代期**。过去 24 小时共产生 **3 个版本发布**（v0.63.7、v0.63.11、v0.63.12）、**13 个 PR 更新**（合并/关闭 6，待合并 7）、**5 个活跃 Issue**（全部仍 OPEN）。主线进展明显：`release` 分支同步、main 历史记录、voice 模式默认开关、Human 页与 chat 合并等 PR 集中落地；但与此同时，**v0.63.12 出现了 session 401 与 realtime socket 的新回归信号**，另有 2 个高严重度 Bug 被新报告。整体健康度评估：**版本节奏良好，稳定性承压，需关注 v0.63.12 的 socket/自托管链路问题**。

---

## 2. 版本发布

24 小时内连发 3 个版本，呈现"特性主版本 + 自动化 bump + 历史校准"的组合：

### 🚀 v0.63.12 — *The Smooth Release Bump Upgrade*
[Release 链接](https://github.com/tinyhumansai/openhuman/releases)（实际页面对应仓库 release 视图）
- **性质**：轻量级版本号 bump，主要由 release workflow 自动触发
- **要点**：保持发布管线节奏，无明确功能/破坏性变更说明
- **风险提示**：用户报告 [#5444](https://github.com/tinyhumansai/openhuman/issues/5444) 指出 v0.63.12 上 session 401 已修复但 realtime Socket.IO 通道在桌面客户端 ⇄ 远程 headless core 之间仍断裂，升级前建议在自托管场景验证实时语音链路

### 🚀 v0.63.11 — *187 commits feature drop*
- **量级**：187 commits，含 **52 features / 90 fixes / 45 refactors**，以及 docs/CI
- **核心变更**：
  - 内核重构（kernel restructure）
  - 集成 **ElevenLabs Voice Agents**
  - 大规模可靠性 pass：memory / inference / voice 三条主干稳定性加固
- **破坏性变更**：发布说明中带 ⚠️ "Note on the previ..." 的提醒（原文截断），建议在升级前阅读完整 release notes 中关于前序版本的说明
- **迁移注意**：若使用了先前版本的 voice / 自托管组件，需复核配置

### 🚀 v0.63.7 — *Flows, Memory, and Voice Power‑Up*
- **核心变更**：
  - **Flows & Work** 深度工作流构建能力升级
  - 精简的 kernelized core
  - memory / inference / voice 可靠性显著提升
  - UI 性能与流畅度优化

**📌 综合建议**：v0.63.11 是承载本次跨度的"特性锚点"版本；普通桌面用户可考虑直接跳到 v0.63.12；自托管 / Linux 用户请关注 [#5443](https://github.com/tinyhumansai/openhuman/issues/5443) 反馈的兼容性问题后再升级。

---

## 3. 项目进展（已合并/关闭 PR）

24 小时内 PR 净关闭 **6 条**，主线明显向前推进：

| PR | 标题 | 影响 |
|---|---|---|
| [#5445](https://github.com/tinyhumansai/openhuman/pull/5445) | Release | 发布版本自动化 |
| [#5441](https://github.com/tinyhumansai/openhuman/pull/5441) | fix(voice): 默认所有构建展示 realtime voice mode 开关 | 🟢 **功能可见性提升** —— ElevenLabs realtime 模式从 opt-in 改为默认开启，并保留 `VITE_VOICE_MODE=false` kill switch |
| [#5419](https://github.com/tinyhumansai/openhuman/pull/5419) | feat(chat): Human 页合并为 chat 内 docked 可展开 mascot | 🟢 **重要 UX 里程碑** —— 浮窗 mascot 直接整合进 `/chat` 的输入框，点击放大成右侧语音舞台；`/human` 仍保留为独立 tab |
| [#5435](https://github.com/tinyhumansai/openhuman/pull/5435) | Record main's history as an ancestor of release | 🔧 **分支拓扑校准**（0 文件修改，需保持 non-squash） |
| [#5434](https://github.com/tinyhumansai/openhuman/pull/5434) | merge: main into release | 🔧 分支合并 |
| [#5433](https://github.com/tinyhumansai/openhuman/pull/5433) | Promote main → release (conflict-resolved) | 🔧 发布分支推进 |

**整体进度判断**：✅ **release 分支版本治理已闭环**（merge → history record → promote → release bump 形成完整链路），**voice 与 chat UI 两条主线均向前迈出实质性一步**。下一步的关键变量是 v0.63.12 的 socket 回归能否被快速 fix。

---

## 4. 社区热点

按讨论热度与产品影响排序：

| 排名 | 主题 | 关键指标 | 分析 |
|---|---|---|---|
| 🔥 1 | [Issue #5349](https://github.com/tinyhumansai/openhuman/issues/5349) DeepSeek API key 保存状态显示不一致 | **3 条评论**、跨 4 天仍 OPEN | 用户报告保存 DeepSeek API key 后 UI 显示已保存但对话框报"未成功"且 API 调用失败，重启与重新配置均复现。配合 [#5432](https://github.com/tinyhumansai/openhuman/pull/5432) 的 fix PR（**待合并**）分析，问题根源很可能是 **provider slug 大小写不归一**导致的写/读路径错配 |
| 🔥 2 | [Issue #5425](https://github.com/tinyhumansai/openhuman/issues/5425) Talk to the floating mascot | high priority 标签 + voice + react-ui + tauri-shell 多标签 | 与已合并的 [#5419](https://github.com/tinyhumansai/openhuman/pull/5419) 强相关，体现社区对**浮窗 mascot 可对话化**的明确诉求（hotkey 说话 / 点击触发） |
| 🔥 3 | [Issue #5444](https://github.com/tinyhumansai/openhuman/issues/5444) v0.63.12 realtime socket 回归 | 最新版本最关键链路 | 表征 "fix 一个洞冒另一个洞" 的典型发布候选日 |

**诉求共鸣点**：浮窗 mascot（voice/chat 融合）+ 凭证保存可靠性 是当前社区的两大主诉求。

---

## 5. Bug 与稳定性

按严重程度分级：

### 🔴 P0 — 关键路径不可用
- **[Issue #5444](https://github.com/tinyhumansai/openhuman/issues/5444)** v0.63.12 realtime Socket.IO 桌面客户端 ↔ 远程 headless core 通道断裂
  - 上下文：#5307 引发的 401 session 回归已修复（`auth_store_session` 成功 + 后端 200），但 realtime 通道仍未通
  - 影响范围：远程部署 + 实时语音/反馈场景用户
  - **修复状态**：❌ 尚无对应 PR

### 🔴 P0 — 自托管链路
- **[Issue #5443](https://github.com/tinyhumansai/openhuman/issues/5443)** pikaOS（Debian）`.deb` 新装后**全部自托管功能失灵**：voice server 关闭 / Codex 不路由 / Ollama 未识别 / Whisper 与 Piper 重启后失效
  - 用户从 CachyOS 迁到 pikaOS（已预格式化），影响安装完整性的判定
  - **修复状态**：❌ 尚无对应 PR

### 🟠 P1 — 凭证保存可靠性
- **[Issue #5349](https://github.com/tinyhumansai/openhuman/issues/5349)** DeepSeek API key 保存状态显示矛盾
  - **修复状态**：✅ 已有 fix PR [#5432](https://github.com/tinyhumansai/openhuman/pull/5432) **待合并**（`aryash45`：provider slug 写时归一化 + 自动迁移）

### 🟡 P2 — 并发安全
- **[PR #5436](https://github.com/tinyhumansai/openhuman/pull/5436)** fix(keyring): 阻止并发写入擦除共享密钥文件
  - 描述：文件 keyring 后端的 set 是一次 read-modify-write 全量操作，缺跨进程互斥；并发写一旦读到 corrupt 内容会退化为空 map，把所有 secret 清零
  - **修复状态**：✅ PR 已提交 **待合并**

### 🟢 P3 — UX 一致性
- **[Issue #5440](https://github.com/tinyhumansai/openhuman/issues/5440)** 共享 `apiClient` 错误消息助手（`messageForApiError`）到整个反馈面
  - **修复状态**：🔄 仍为 Issue 阶段，但已识别 4 个待收敛 call site

**稳定性判断**：⚠️ **v0.63.12 同时出现两个 P0 级问题**，且均无即时 fix 链接，社区修复 SLA 表现需在 24-48h 内验证。

---

## 6. 功能请求与路线图信号

| 信号 | 来源 | 是否可能被纳入下一版本 |
|---|---|---|
| 浮窗 mascot 可对话化（hotkey + 点击两种触发，多状态反馈） | [Issue #5425](https://github.com/tinyhumansai/openhuman/issues/5425) | 🟢 **可能性高** —— 与已合并的 [#5419](https://github.com/tinyhumansai/openhuman/pull/5419) Human 页→chat mascot 合并一脉相承，high priority 标签 |
| App Shell 重构为 chrome + 单一 inset 内容卡片，去掉 1px 缝与 6 道 hairline divider | [PR #5442](https://github.com/tinyhumansai/openhuman/pull/5442) | 🟢 视觉大改，可纳入 0.64.x 视觉版本 |
| Feedback composer 实时反馈质量等级（block / warn / pass） | [PR #5431](https://github.com/tinyhumansai/openhuman/pull/5431) | 🟢 与 [#5440](https://github.com/tinyhumansai/openhuman/issues/5440) 一起打磨用户体验闭环 |
| tiny.place 8 月 31 日下线：仅向已有身份用户展示入口 + 移除提示 | [PR #5439](https://github.com/tinyhumansai/openhuman/pull/5439) | 🟢 已是确定下线流程 |
| in-app web apps (Accounts webview rail) 8 月 31 日下线 | [PR #5438](https://github.com/tinyhumansai/openhuman/pull/5438) | 🟢 与 tiny.place 同步下线策略 |
| 全局 `ProductIdentity` + `x-sdk-name` 请求头 | [PR #5437](https://github.com/tinyhumansai/openhuman/pull/5437) | 🟢 嵌入式产品的观测性基建，便于多租户溯源 |

**路线图推断**：下一版本（推测 **v0.64.x**）的关键词可能是 **Mascot-Voice 合一 / Shell 视觉刷新 / 下线治理（tiny.place / web apps）**。

---

## 7. 用户反馈摘要

来自 5 条活跃 Issue 的真实声音：

- 😡 **"自托管不是次等公民"** —— pikaOS 用户在新装后整套自托管语音/LLM 链路静默失效，且无可用降级路径（[#5443](https://github.com/tinyhumansai/openhuman/issues/5443)）。这是**安装即破**的最严重等级，体现对 Linux 多发行版兼容矩阵的真实焦虑。
- 😡 **"UI 撒谎"** —— DeepSeek 用户被 settings 与 dialog 给出的相反信号反复困扰，重启仍无法收敛（[#5349](https://github.com/tinyhumansai/openhuman/issues/5349)）。这是典型的"信任损耗型"反馈。
- 🤩 **"想要浮窗 mascot 真的能说话"** —— [#5425](https://github.com/tinyhumansai/openhuman/issues/5425) 的发起者用 6 个标签标出 priority: high，并设计了 idle/hovered/listening 三态反馈与 hotkey 触发 UX，说明社区对该特性有**成型产品共识**，不是零散请求。
- 😐 **"release 升级了，但 socket 反而坏了"** —— [#5444](https://github.com/tinyhumansai/openhuman/issues/5444) 用户细致列出哪些调用 200 / 哪个通道仍断，提示该用户具备较强的工程诊断能力，维护者应优先与这种高质量 reporter 协同。

**整体情绪**：谨慎乐观 —— **特性释放节奏让一部分用户满意**，但**Linux 自托管 + 凭证保存两条线正在消耗信任**，需要维持者优先处理。

---

## 8. 待处理积压与维护者提醒

| 类别 | 链接 | 提示 |
|---|---|---|
| 🟥 4 天未关闭的活跃 Issue | [#5349](https://github.com/tinyhumansai/openhuman/issues/5349) | 已有配套 fix PR [#5432](https://github.com/tinyhumansai/openhuman/pull/5432)，建议尽快 review + merge 闭环 |
| 🟧 v0.63.12 新增 P0 未分配 | [#5444](https://github.com/tinyhumansai/openhuman/issues/5444)、[#5443](https://github.com/tinyhumansai/openhuman/issues/5443) | 无 assignee / 无对应 fix PR；建议 hotfix 一个 v0.63.13 |
| 🟨 Issue 阶段的功能重构 | [#5440](https://github.com/tinyhumansai/openhuman/issues/5440) `messageForApiError` 抽取 | 仍处 Issue 阶段，建议配套 PR 化 |
| 🟦 5 条 Issue 均未带 label 校验（如 platform / version） | 全部 | triage 后再分派可显著提升响应效率 |
| 📦 7 个 OPEN PR 待合并 | [#5442](https://github.com/tinyhumansai/openhuman/pull/5442)、[#5437](https://github.com/tinyhumansai/openhuman/pull/5437)、[#5439](https://github.com/tinyhumansai/openhuman/pull/5439)、[#5438](https://github.com/tinyhumansai/openhuman/pull/5438)、[#5431](https://github.com/tinyhumansai/openhuman/pull/5431)、[#5436](https://github.com/tinyhumansai/openhuman/pull/5436)、[#5432](https://github.com/tinyhumansai/openhuman/pull/5432) | 积压量在合理范围，但 v0.63.12 P0 修复应优先 |

---

### 📊 项目健康度仪表盘

| 指标 | 数值 | 评级 |
|---|---|---|
| 24h 活跃度（Issue+PR+Release） | 21 | 🟢 高 |
| Issue 关闭率（24h） |

</details>

---
*本日报由 [Big Model Radar](https://github.com/96loveslife/big_model_radar) 自动生成。*
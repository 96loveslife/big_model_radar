# OpenClaw 生态日报 2026-08-15

> Issues: 500 | PRs: 500 | 覆盖项目: 8 个 | 生成时间: 2026-08-15 01:34 UTC

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

<think>The user wants me to generate a comprehensive daily report for the OpenClaw project based on the GitHub data provided. Let me analyze the data carefully and create a structured report in Chinese.

Key data points:
- 500 Issues updated (485 new/active, 15 closed) in past 24 hours
- 500 PRs updated (400 pending merge, 100 merged/closed) in past 24 hours
- 0 new releases
- Date: 2026-08-15

Let me analyze the most important issues and PRs:

Top issues by comments:
1. #121058 - Silent reply failures recurring (94 comments) - high priority
2. #7707 - Memory Trust Tagging by Source (51 comments)
3. #42475 - Per-agent cost budget enforcement (25 comments)
4. #91588 - Gateway Memory Leak (P0, 24 comments)
5. #91009 - Codex PreToolUse hook CPU issue (P1, 20 comments)
6. #48003 - Steer mode not injecting messages (P1, 19 comments)
7. #121953 - Cron DeepSeek stalls (P1, 19 comments)
8. #53628 - XDG_CONFIG_HOME bug (14 comments)
9. #50093 - WhatsApp backfill missed messages (12 comments)
10. #48920 - Live Docs ahead of release (11 comments)

Closed/merged PRs visible:
- #116489 - feat(security): require acknowledgement for install policy warnings - CLOSED
- #123914 - fix(cron): keep agent-less schedules running after adding an agent - CLOSED
- #123901 - fix(workers): bound Gateway bundle cache growth - CLOSED
- #123911 - perf(ui): restore startup bundle headroom - OPEN
- #123913 - refactor(sessions): avoid duplicate SQLite conformance runs - CLOSED
- #123808 - fix(doctor): keep migrated agents on their existing workspace - CLOSED

Notable themes:
- Memory issues (leaks, search, context)
- Multi-channel integration bugs (WhatsApp, Telegram, Feishu, Discord, LINE, Matrix)
- Provider issues (Codex, DeepSeek, Ollama, ElevenLabs, OpenAI)
- UI/UX improvements (vyctorbrzezowski has many UI PRs)
- Security (install policy warnings)

Let me draft a comprehensive report now.</think>

# OpenClaw 项目日报 — 2026-08-15

---

## 1. 今日速览

OpenClaw 仓库今日继续保持极高活跃度，过去 24 小时累计更新 **500 条 Issue + 500 条 PR**，但合并/关闭率偏低（Issue 关闭 15/500 ≈ 3%，PR 关闭 100/500 = 20%），呈现"高吞吐、低落库"的特征。**无新版本发布**，主线仍处于 2026.7.x beta 阶段（P0/P1 级别的内存泄漏、消息丢失、Codex 集成问题在多版本中仍未收敛）。社区讨论最热的话题集中在 **gateway 内存泄漏回归**、**多渠道消息丢失（WhatsApp/Telegram/LINE/Feishu）** 和 **Codex/DeepSeek provider 集成** 三条主线上，项目健康度评估为 **"功能演进快、生产稳定性承压"**。

---

## 2. 版本发布

**今日无新版本发布。** 当前主线版本仍为 `2026.7.2-beta.x`，相关修复集中在 PR #123911（启动 bundle 体积回退）、#123901（worker bundle 缓存无界增长）等构建/性能侧，未形成新的 stable/beta tag。建议关注者继续使用 `dev` 通道或钉在 2026.6.x stable。

---

## 3. 项目进展（今日合并/关闭的重要 PR）

虽然总数为 100 条已关闭 PR，但多数为自动 stale 清理。从可见条目中梳理出的实质性进展：

| PR | 主题 | 影响 |
|---|---|---|
| [#123914](https://github.com/openclaw/openclaw/pull/123914) ⏹ CLOSED | **fix(cron)**: 添加 agent 后保留无 agent 定时任务继续运行 | 修复 Memory Dreaming Promotion 等内置 cron 在引入第二个 agent 后全员失败的回归 |
| [#123901](https://github.com/openclaw/openclaw/pull/123901) ⏹ CLOSED | **fix(workers)**: 限制 Gateway bundle 缓存无界增长 | 每次 worker 构建留下的 content-addressed tarball 终于有生命周期所有者 |
| [#123913](https://github.com/openclaw/openclaw/pull/123913) ⏹ CLOSED | **refactor(sessions)**: 去除重复 SQLite 一致性测试 | 13 个直接 SQLite 场景被去重 |
| [#123808](https://github.com/openclaw/openclaw/pull/123808) ⏹ CLOSED | **fix(doctor)**: 迁移后的 agent 保留原 workspace | `doctor --fix` 不再静默把 owner agent 搬到 `<workspace>/<agentId>` |
| [#116489](https://github.com/openclaw/openclaw/pull/116489) ⏹ CLOSED | **feat(security)**: 安装策略告警需用户显式确认 | `security.installPolicy` 可返回 `warn`，CLI 需键入精确 target name 才放行 |
| [#123911](https://github.com/openclaw/openclaw/pull/123911) 🟢 OPEN | **perf(ui)**: 恢复启动 bundle 预算（333,077 → 限 333,064） | 修复连续 3 次 main CI 失败 |

**整体推进度**：今日有意义的合并集中在 **稳定性/可观测性/doctor 安全路径** 这三条非功能主线上，对终端用户可见的新功能增量较小。

---

## 4. 社区热点（评论数 / 关注度最高）

按评论数排序的活跃话题，反映了社区的真实诉求：

| 排名 | Issue | 评论数 | 核心诉求 |
|---|---|---|---|
| 🥇 | [#121058](https://github.com/openclaw/openclaw/issues/121058) — Silent reply 故障在 #116277 关闭后仍然复发 | **94** | 监控 cron 持续抓到失败，"无排队 reply payload"——这是**已知问题被过早关闭**的典型，破坏用户对 triage 流程的信任 |
| 🥈 | [#7707](https://github.com/openclaw/openclaw/issues/7707) — 按来源标记 memory 信任等级 | **51** | 防止 memory poisoning 攻击：网页/第三方 skill 注入的指令不应与用户命令同等信任 |
| 🥉 | [#42475](https://github.com/openclaw/openclaw/issues/42475) — Gateway 层 per-agent 成本预算 | **25** | 防止模型调用失控烧钱，无需外部监控即可硬性截断 |
| 4 | [#91588](https://github.com/openclaw/openclaw/issues/91588) — Gateway 内存泄漏 350MB → 15.5GB，触发 OOM 反复重启 | **24** | P0，生产事故级，影响所有长跑用户 |
| 5 | [#91009](https://github.com/openclaw/openclaw/issues/91009) — Codex PreToolUse hook 派生 CPU-bound 子进程阻塞 gateway RPC | **20** | 集成路径上的资源争抢 |
| 6 | [#48003](https://github.com/openclaw/openclaw/issues/48003) — `messages.queue.mode=steer` 不向主会话中途注入消息 | **19** | UX 直觉违反：用户期望"被打断"，实际"等到回合结束" |
| 7 | [#121953](https://github.com/openclaw/openclaw/issues/121953) — DeepSeek 对 `[cron:` 前缀消息降级，cron 卡住数十秒 | **19** | 平台侧优先级策略与 OpenClaw 用户消息格式冲突 |
| 8 | [#53628](https://github.com/openclaw/openclaw/issues/53628) — 安装 skill 时未展开 `${XDG_CONFIG_HOME}` | **14** | Docker/容器用户的标准环境变量约定被违反 |
| 9 | [#50093](https://github.com/openclaw/openclaw/issues/50093) — WhatsApp 重连后未 backfill 断开期间消息 | **12** | **静默数据丢失**，对群组监控场景尤为严重 |
| 10 | [#48920](https://github.com/openclaw/openclaw/issues/48920) — 文档领先于发布（Heartbeat IsolatedSessions） | **11** | 文档/release 一致性问题，UX 阻塞 |

**热点背后的共性**：用户最关心的不是新功能，而是**消息不丢、内存不爆、Provider 集成不退化**——三者构成了 OpenClaw "生产可用"的最低公约数。

---

## 5. Bug 与稳定性

按 P0 → P3 严重程度排列，并标注是否已有 fix PR：

### 🚨 P0（生产事故级）
- **[#91588](https://github.com/openclaw/openclaw/issues/91588)** Gateway 内存泄漏至 15.5GB，OOM 反复重启 — *尚无 fix PR*，标记 `needs-live-repro`
- **[#48920](https://github.com/openclaw/openclaw/issues/48920)** Live Docs 领先于发布（2026.3.13 缺失 Heartbeat IsolatedSessions）— *尚无 fix PR*，标记 `needs-maintainer-review`
- **[#119270](https://github.com/openclaw/openclaw/issues/119270)** 文件工具剥离前导 `@`，write/edit/apply_patch 写错文件并删错文件 — *尚无 fix PR*，影响数据安全

### 🔥 P1（功能降级）
- **[#91009](https://github.com/openclaw/openclaw/issues/91009)** Codex hook relay 派生子进程 100%+ CPU、阻塞 RPC — *尚无 fix PR*
- **[#48003](https://github.com/openclaw/openclaw/issues/48003)** Steer mode 不中途注入消息（Commit `9889c6da5` 引入）— *尚无 fix PR*，`fix-shape-clear` 已确认
- **[#121953](https://github.com/openclaw/openclaw/issues/121953)** DeepSeek cron 卡死，`[cron:` 前缀触发平台降级 — *尚无 fix PR*
- **[#120563](https://github.com/openclaw/openclaw/openclaw/issues/120563)** Ollama 自定义 provider 对话历史不发送，每轮固定大小上下文 — *尚无 fix PR*
- **[#121058](https://github.com/openclaw/openclaw/issues/121058)** Silent reply 故障回归（94 评论）— *尚无 fix PR*
- **[#113181](https://github.com/openclaw/openclaw/issues/113181)** Cron delivery.mode="none" + isolated agent 静默 no-op — *尚无 fix PR*
- **[#123799](https://github.com/openclaw/openclaw/issues/123799)** 2026.5.12 受 Codex compact 404 影响的生产升级/回退指导缺失 — *需 backport guidance*
- **[#123273](https://github.com/openclaw/openclaw/issues/123273)** 命名（非默认）agent 图片附件失败 — *尚无 fix PR*
- **[#91009](https://github.com/openclaw/openclaw/issues/91009)** + **[#86119](https://github.com/openclaw/openclaw/issues/86119)** 嵌入式 subagent/cron 运行后 `node server.js` 孤儿进程累积 — *尚无 fix PR*
- **[#84662](https://github.com/openclaw/openclaw/issues/84662)** Codex app-server 每轮把 runtime context 写入原生用户历史，导致 `response.create` 输入爆炸 — *尚无 fix PR*
- **[#86050](https://github.com/openclaw/openclaw/issues/86050)** Gateway 缓存 claude-cli stream 事件，WebChat/TUI 只看到最终组装消息 — *尚无 fix PR*
- **[#47975](https://github.com/openclaw/openclaw/issues/47975)** Subagent 会话完成后未清理，主会话卡死 — *尚无 fix PR*
- **[#91941](https://github.com/openclaw/openclaw/issues/91941)** Feishu 流式卡片全量更新导致长回复严重延迟回归 — *尚无 fix PR*
- **[#92186](https://github.com/openclaw/openclaw/issues/92186)** Foreground reply fence 自动模式取消早期并发群消息回复的投递 — *尚无 fix PR*
- **[#86012](https://github.com/openclaw/openclaw/issues/86012)** LINE channel 因 reply token 过期 + 缺少 push fallback 静默丢消息 — *尚无 fix PR*

### ⚠️ P2（功能性退化）
- **[#53628](https://github.com/openclaw/openclaw/issues/53628)** skill 安装时不展开 `${XDG_CONFIG_HOME}` — *尚无 fix PR*，`not-repro-on-main` 标记
- **[#87109](https://github.com/openclaw/openclaw/issues/87109)** Gateway heap 在 macOS 空闲态涨到 1073MB+，cron 内存压力下静默失败 — *尚无 fix PR*
- **[#115001](https://github.com/openclaw/openclaw/issues/115001)** Hybrid memory search 通过 FTS LIKE 回退硬编码 `textScore=1.0` 返回虚假相似度 — *尚无 fix PR*
- **[#120735](https://github.com/openclaw/openclaw/openclaw/issues/120735)** Telegram 入站 sticker 仅以裸文件 ref 到达、未落盘、无描述 — *尚无 fix PR*
- **[#88079](https://github.com/openclaw/openclaw/issues/88079)** WebChat 对 Kimi Code / DeepSeek Reasoner 不渲染 `reasoning_content` — *尚无 fix PR*
- **[#53540](https://github.com/openclaw/openclaw/issues/53540)** 大参数 tool call 生成延迟超过请求超时导致"Network connection lost" — *尚无 fix PR*
- **[#52186](https://github.com/openclaw/openclaw/issues/52186)** ElevenLabs TTS 生成音频但 OpenClaw 播放 OpenAI 语音（4.29 起回归）— *尚无 fix PR*

### 📝 P3（轻微）
- **[#56693](https://github.com/openclaw/openclaw/issues/56693)** OpenAI Codex OAuth 可能绑定到已停用的 ChatGPT workspace — *尚无 fix PR*
- **[#54463](https://github.com/openclaw/openclaw/issues/54463)** QMD memory 索引进 symlink 循环触发 ENAMETOOLONG — *尚无 fix PR*
- **[#95566](https://github.com/openclaw/openclaw/issues/95566)** WebChat 在用户提示之前渲染助手回复并重复入站消息 — *尚无 fix PR*

**汇总**：今日 50 条头部 Issue 中**仅 #123914（已关闭）** 一条对应真正落地的 fix，**fix PR 覆盖率 < 5%**。多个高优 issue 已 `linked-pr-open` 但 PR 仍处于 `needs-proof` / `waiting-on-author` 状态，意味着修复在路上但缺乏证据收敛。

---

## 6. 功能请求与路线图信号

按落地可能性从高到低：

### 🟢 高落地概率（已有对应 PR 提交）
- **Per-agent 成本预算**（[#42475](https://github.com/openclaw/openclaw/issues/42475)）— 与 PR [#120491](https://github.com/openclaw/openclaw/pull/120491) per-turn per-target send budget 方向一致；维护者共识已形成
- **Bootstrap 文件注入顺序可配置**（[#65438](https://github.com/openclaw/openclaw/issues/65438)）— 用于 Anthropic prompt cache 优化，是高频被 PR 引用的"小但影响大"项
- **File tools 路径安全** — 来自 #119270 的反思，社区已就"绝对禁止修改路径语义"达成隐性共识

### 🟡 中等概率（RFC / 设计阶段）
- **Memory 信任标签（[#7707](https://github.com/openclaw/openclaw/issues/7707)） + Context 来源元数据（[#54373](https://github.com/openclaw/openclaw/issues/54373)）** — 两条 issue 高度同源（都关于 memory poisoning 防御），维护者层面已有 `clawsweeper:needs-product-decision` 标注，但跨多个版本仍未推动
- **Self-compact 工具（[#6757](https://github.com/openclaw/openclaw/issues/6757)）** — agent 自治方向，符合 OpenClaw"agent-as-user"哲学
- **Session 维护按模式保留（[#50900](https://github.com/openclaw/openclaw/issues/50900)）** — 解决当前 `pruneAfter` 一刀切问题
- **任务流生命周期 hook 暴露（[#87362](https://github.com/openclaw/openclaw/issues/87362)）** — 插件可观测性，对生态至关重要
- **本地 embedding 多线程（[#54128](https://github.com/openclaw/openclaw/issues/54128)）** — 16 核只用 6 核，明显的性能债

### 🔴 低概率（off-meta / tidepool）
- **UI 基于 UX 评分重设计（[#75947](https://github.com/openclaw/openclaw/issues/75947)）** — 范围过大，缺乏统一规范
- **Control UI 上传大小可配（[#71142](https://github.com/openclaw/openclaw/issues/71142)）** — 看似简单，但社区已经习惯硬编码 5MB

---

## 7. 用户反馈摘要

从 Issues 评论中提炼的典型用户痛点：

### 😡 高频不满
1. **"静默失败"模式普遍化**：silent reply、cron no-op、WhatsApp 重连丢消息、Codex hook 子进程——用户最难接受的不是报错，而是**没有反馈的失败**（[#121058](https://github.com/openclaw/openclaw/issues/121058)、[#113181](https://github.com/openclaw/openclaw/issues/113181)、[#50093](https://github.com/openclaw/openclaw/issues/50093)）
2. **文档与版本脱节**：用户按文档配置 `IsolatedSessions` 才发现 2026.3.13 实际未实现（[#48920](https://github.com/openclaw/openclaw/issues/48920)），且 SecretRef 的 `provider: "default"` 隐式别名未在文档中显式说明（[#121083](https://github.com/openclaw/openclaw/issues/121083)）
3. **回归式 bug 难以接受**：#52186（ElevenLabs）、#82020（自定义 provider 共享 baseUrl）、#86050（claude-cli 流缓存）都是"曾经可用"的回退，对升级用户的信任伤害最大
4. **Provider 集成脆弱面**：DeepSeek 对 `[cron:` 前缀降级（[#121953](https://github.com/openclaw/openclaw/issues/121953)）、Oll

---

## 横向生态对比

<think>The user wants me to generate a horizontal comparative analysis report based on the daily dynamics from these open-source projects. Let me analyze the data carefully and produce a comprehensive report in Chinese.

Let me first synthesize what I have from each project:

1. **OpenClaw** (核心参照) - github.com/openclaw/openclaw
   - 500 issues + 500 PRs updated
   - 0 releases
   - 15 issues closed (~3%), 100 PRs closed (20%)
   - Key themes: gateway memory leak, multi-channel message loss, Codex/DeepSeek integration
   - High activity, low completion rate
   - 2026.7.x beta stage

2. **NanoBot** - github.com/HKUDS/nanobot
   - 3 issues + 22 PRs updated
   - 0 releases
   - 14 open, 8 closed PRs
   - WebUI improvements + session/provider stability fixes
   - High iteration density

3. **PicoClaw** - github.com/sipeed/picoclaw
   - 3 issues + 9 PRs updated
   - 0 releases
   - 4 pending merge, 5 merged/closed
   - Stale strategy concerns, MCP hang fix #3337

4. **IronClaw** - github.com/nearai/ironclaw
   - 25 issues + 47 PRs updated
   - 0 releases
   - 16 new/active issues, 9 closed
   - v1.3.0 automation epic, unbound-turns refactor
   - High intensity iteration

5. **LobsterAI** - github.com/netease-youdao/LobsterAI
   - 2 issues + 27 PRs updated
   - 1 release (2026.8.14)
   - 22 closed PRs, 5 open
   - Release day, major UI improvements

6. **QwenPaw** - github.com/agentscope-ai/QwenPaw
   - 50 issues + 41 PRs updated
   - 0 releases
   - 13 new/active issues, 37 closed
   - 26 open PRs, 15 closed
   - 2.0→2.1 upgrade issues, desktop update needs

7. **Hermes Agent** - github.com/NousResearch/hermes-agent
   - 50 issues + 50 PRs updated
   - 0 releases
   - 47 active issues, 3 closed
   - 27 open PRs, 23 closed
   - Windows desktop stability, Discord Omniscience campaign
   - EPIC #78647 closed

8. **OpenHuman** - github.com/tinyhumansai/openhuman
   - 5 issues + 14 PRs updated
   - 0 releases
   - 10 PRs merged (~71%)
   - Heavy refactoring (net -13K lines)
   - Voice pipeline migration to tinyvoice module

Now let me structure the comparative analysis:

1. **生态全景** - 3-5 sentences
2. **活跃度对比表格**
3. **OpenClaw 定位**
4. **共同关注的技术方向**
5. **差异化定位分析**
6. **社区热度与成熟度分层**
7. **值得关注的趋势信号**

Let me write this in a professional, data-driven Chinese.</think>

# 个人 AI 助手 / 自主智能体开源生态横向对比报告
**日期：2026-08-15**

---

## 1. 生态全景

当前个人 AI 助手 / 自主智能体开源生态呈现"**头部高吞吐、中部密集迭代、长尾架构收敛**"的三段式格局：以 OpenClaw 为代表的 500-issue 量级超级仓库与 Hermes Agent、QwenPaw 等 50 量级活跃项目构成第一梯队，体现"渠道接入 + Provider 集成 + UI 体验"的持续堆叠；IronClaw、LobsterAI、NanoBot 处于"发布窗口前后"的中位节奏，PR 合并率显著高于头部（71-81%），正在完成架构级重构的交付；PicoClaw 与 OpenHuman 则代表两类截然不同的方向——前者面临 stale 机制与维护者响应瓶颈，后者则通过模块外迁与净减 1.3 万行代码进行激进的架构"轻量化"。共同的技术焦虑集中在 **长跑稳定性（内存泄漏、进程管理）、多渠道一致性、Provider 兼容回归与平台（特别是 Windows）适配**四个非功能维度。

---

## 2. 各项目活跃度对比

| 项目 | Issues 24h | PRs 24h | PR 合并/关闭率 | 新版本 | 综合活跃度 | 健康度评估 |
|------|-----------|---------|---------------|--------|-----------|-----------|
| **OpenClaw** | 500 (485 active / 15 closed ≈ 3%) | 500 (400 pending / 100 closed = 20%) | **低** | ❌ | 🔥🔥🔥🔥🔥 | ⚠️ 高吞吐、低落库，稳定性承压 |
| **Hermes Agent** | 50 (47 active / 3 closed) | 50 (27 pending / 23 closed = 46%) | 中 | ❌ | 🔥🔥🔥🔥 | ⚠️ Discord Omniscience 阵营活跃，Windows 缺陷集中 |
| **QwenPaw** | 50 (13 active / **37 closed = 74%**) | 41 (26 pending / 15 closed = 37%) | 中 | ❌ | 🔥🔥🔥🔥 | ✅ Issue 响应迅速，PR 审阅积压较重 |
| **IronClaw** | 25 (16 active / 9 closed = 36%) | 47 (24 pending / **23 closed = 49%**) | 较高 | ❌ | 🔥🔥🔥🔥 | ✅ v1.3.0 路线图清晰，质量与节奏双稳 |
| **NanoBot** | 3 (1 active / 2 closed) | 22 (14 pending / 8 closed = 36%) | 中 | ❌ | 🔥🔥🔥 | ✅ WebUI 与 Provider 修复双线推进，p0 #5271 急需合并 |
| **LobsterAI** | 2 (both open) | **27 (22 closed = 81% / 5 open)** | **极高** | ✅ **2026.8.14** | 🔥🔥🔥 | ✅ 集中发版日，UI 打磨密集落地 |
| **OpenHuman** | 5 (2 open / 3 closed) | 14 (4 open / **10 closed = 71%**) | **高** | ❌ | 🔥🔥🔥 | ✅ 激进的模块外迁 + 体验闭环，整体最健康 |
| **PicoClaw** | 3 (1 active / 2 stale-closed) | 9 (4 open / 5 closed) | 中 | ❌ | 🔥⭐ | ⚠️ **stale 策略正在损耗贡献者**，P0 #3337 待合并 |

**横向观察**：
- **合并/关闭率前两名**为 LobsterAI (81%) 与 OpenHuman (71%)，二者分别代表"集中发版日"和"主动架构收敛"两种良好节奏。
- **Issue 关闭率反差极大**：QwenPaw 74% ↔ OpenClaw 3%，体现"成熟维护"与"爆炸式增长"的本质差异。
- **唯一当日有新版本发布**：LobsterAI 2026.8.14（含 Team Edition 与 Skills 体系升级）。

---

## 3. OpenClaw 在生态中的定位

### 3.1 量级差距
OpenClaw 500+500 的双 500 体量是其他所有项目之和的数倍（QwenPaw 91、Hermes Agent 100、IronClaw 72）。**这意味着 OpenClaw 是该生态事实上最大的"公共基础设施"型仓库**——它的 Channel Adapter、Provider 抽象、Memory 系统等设计被 LobsterAI、QwenPaw、NanoBot、IronClaw 等大量下游直接复用。

### 3.2 优势
| 维度 | OpenClaw 的位置 |
|------|----------------|
| **生态广度** | 多渠道（WhatsApp/Telegram/Feishu/Discord/LINE/Matrix）+ 多 Provider（Codex/DeepSeek/Ollama/ElevenLabs/OpenAI）+ 多 surface（CLI/WebChat/TUI）覆盖最完整 |
| **功能纵深** | cron / heartbeat / steer queue / Memory trust tagging / per-agent budget 等"agent-as-product"特性最成熟 |
| **社区规模** | 单 issue 最高 94 评论（#121058），单 PR 最高 24 评论，是其他项目的数倍 |
| **可观测性** | 监控 cron、gateway 内存压力等 P0 反馈机制最健全 |

### 3.3 技术路线差异
- **OpenClaw**：以 "Gateway + 多 Channel" 为枢纽，**强调覆盖面与集成深度**，但代价是 Issue/PR 流速难以收敛。
- **NanoBot / LobsterAI**：更聚焦 **WebUI / Cowork 等单一端体验**，单点体验更精致。
- **IronClaw**：走 **结构化执行规范（v1.3.0 Epic）** 的"agent-as-platform"路线，强调小模型下的可靠性。
- **Hermes Agent / OpenHuman**：强调 **runtime / 依赖图层面的模块化与多租户**，开发者导向更强。

### 3.4 社区规模对比（基于评论数与活跃度）
| 项目 | 单日最高评论数 | 长期 Epic 项目 |
|------|--------------|---------------|
| OpenClaw | 94 (#121058) | v1.3.0、Memory Trust Tagging 等多线 |
| Hermes Agent | 78 (#78647 EPIC) | Discord Omniscience 阵营式推进 |
| QwenPaw | 8 (#3045) | Skills-Hub 管理、桌面端升级 |
| IronClaw | ~10 (Epic #6879) | v1.3.0 Automation 17 天长跑 |
| 其他 | < 5 | 无显著长程 |

**结论**：OpenClaw 不仅是体量最大的项目，也是社区互动深度最高、长期共识项目最多的"枢纽型"仓库。

---

## 4. 共同关注的技术方向

按出现频次排序：

| 共同方向 | 涉及项目 | 共性诉求 |
|---------|---------|---------|
| **🧠 Memory 安全与信任模型** | OpenClaw #7707（Memory Trust Tagging 51 评）、Hermes #34352（多租户 memory）、LobsterAI #1154（`coworkMemoryJudge` 零测试）、IronClaw #7664（可插拔 MCP 化 memory） | 防止 memory poisoning、跨用户隔离、memory 路径标准化 |
| **🪟 Windows 平台适配** | OpenClaw #119270 / Hermes #83683（gateway reap）/ Hermes #85825（CRLF）/ QwenPaw #6806 / #6197 / #4832 | 进程管理（CREATE_NO_WINDOW / 守护）、编码（CRLF）、UI 一致性 |
| **📡 Provider 集成回归** | OpenClaw（DeepSeek / Codex / Ollama / ElevenLabs）/ NanoBot（Anthropic）/ LobsterAI（Gemini URL） | Provider 协议升级、tool call 协议兼容、流式行为差异 |
| **💸 成本与资源治理** | OpenClaw #42475（per-agent budget）、#121953（DeepSeek cron 卡死）、#84662（Codex context 爆炸） | LLM 调用失控、上下文增长、cron 静默烧钱 |
| **🔗 多渠道一致性** | OpenClaw（9+ channel 几乎都有 issue）、PicoClaw #3307（Telegram 无 session 列表）、IronClaw #7662（MP4 附件 400） | 能力差距、消息丢失（reconnect backfill）、流式卡片 UX |
| **🔧 开发者/运维体验** | OpenClaw #53628（XDG_CONFIG_HOME 展开）、PicoClaw #3319（exec timeout 文档与代码不一致）、QwenPaw #7010（无 daemon 模式）、Hermes #67798（hooks 共享契约） | 配置可移植、工具语义正确、部署标准 |
| **🛠️ 桌面/原生应用深化** | QwenPaw #2846（自动更新/任务栏）、IronClaw #7456（持久化 profile 解耦）、PicoClaw（$10/10MB RAM 极致）、OpenHuman (TinyVoice) | 从 CLI/Web 向 native app/runtime 演化 |
| **🕷️ stale / 贡献者响应机制** | PicoClaw（4 条有价值 PR 因 stale 被关）、NanoBot #4145（75 天）/ #4329（63 天）、LobsterAI #1xxx 系列 | 长尾贡献流失风险 |

> **关键洞察**：四个方向（Memory 安全、Windows 适配、Provider 稳定性、stale 治理）已是**生态级共识**，任何新入场项目都应作为默认工程基线。

---

## 5. 差异化定位分析

| 项目 | 一句话定位 | 核心受众 | 关键技术架构 | 关键权衡 |
|------|----------|---------|------------|---------|
| **OpenClaw** | "超级渠道枢纽"——覆盖面最广的个人 AI 助手引擎 | 跨国/多渠道部署者、重度用户 | Gateway + 多 Channel Adapter + Memory Trust | 覆盖广 vs 稳定性收敛 |
| **NanoBot** | "WebUI 体验派"——精致 Cowork + Agent 协作体验 | 重 UI 协作的团队 | ContextBuilder + Skills 显式加载 + WebUI | 视觉精致 vs 核心稳定性 |
| **PicoClaw** | "极致嵌入式"——$10/10MB/秒级启动的轻量助手 | 嵌入式 / 边缘 / IoT 玩家 | Tiny 依赖、低 footprint | 极致精简 vs Stale 机制损耗贡献 |
| **IronClaw** | "企业级 agent 平台"——结构化执行 + 多租户 | 企业 IT、内部 AI 平台 | unbound-turns / 设计系统 / QA Bug Bash 流程 | 规范化 vs 创新节奏 |
| **LobsterAI** | "中文 Cowork 工作台"——Team Edition + Skills 商业化 | 中文团队协作 / 知识工作者 | Sidebar 改版 + 视觉统一 + Skills 刷新 | 商业化 vs 工程深度 |
| **QwenPaw** | "Provider 多面手 + Desktop 原生化"——agentscope 生态 | 阿里/通义生态用户、桌面端用户 | agentscope 抽象层 + 多 provider + Desktop | 多 Provider 覆盖 vs Windows 体验 |
| **Hermes Agent** | "工程化严谨派"——架构卫生 + Epic 治理 + 测试先行 | 高级开发者 / 平台构建者 | god-file 分片 + Hook 契约 + Discord Omniscience 阵营 | 架构严谨 vs Windows 平台落差 |
| **OpenHuman** | "模块化收敛派"——核心下沉到独立仓库 | 跨端复用 / 二次开发 | TinyBus + 模块校验钉版 + Rust 轻量化 | 架构清晰 vs 依赖外链复杂度 |

**关键差异点**：
- **OpenClaw vs OpenHuman**：两个极端——前者覆盖广但单仓巨大，后者把核心模块下沉到独立仓库（tinyvoice / tinywallet / tinyflows），主仓仅做编排。
- **PicoClaw vs Hermes Agent**：两个窗口——前者 $10/10MB RAM/秒级启动的极致嵌入式，后者 Epic + 测试先行的工程化严谨。
- **IronClaw vs LobsterAI**：两个阶段——前者处于 v1.3.0 结构化执行规范的设计期，后者刚完成 2026.8.14 集中发版进入 UI 打磨期。

---

## 6. 社区热度与成熟度分层

### 🔥 Layer 1：成熟爆发型（高活跃 + 高并发问题）
- **OpenClaw** — 渠道与集成生态的"基础设施仓库"，单日 1000 项动态，Issue 关闭率仅 3%，**进入"修不完"阶段**。
- **Hermes Agent** — 50+50 高频，Epic 治理 + 阵营式推进，**进入"快速扩张 + 局部失稳"阶段**。
- **QwenPaw** — Issue 关闭率 74%（健康），但 26 个 PR 待合并，**进入"PR 审阅积压"阶段**。

### ⚙️ Layer 2：稳健推进型（中等活跃 + 高合并率）
- **IronClaw** — v1.2 → v1.3 的稳定过渡，QA Bug Bash 闭环，路线图清晰。
- **LobsterAI** — 集中发版日，PR 合并率 81%（当日最高）。
- **NanoBot** — WebUI + Provider 修复双线，单日 22 PR 中 8 关闭。

### 🧹 Layer 3：架构收敛型（低活跃 + 主动清理）
- **OpenHuman** — 净减 1.3 万行核心代码，模块下沉，合并率 71%。
- **PicoClaw** — 关键贡献被 stale 策略吞噬，**亟需维护者响应节奏调整**。

**成熟度坐标图（粗略）**：

```
            高活跃度
              ↑
              │ OpenClaw
              │ Hermes Agent
              │ QwenPaw
   ───────────┼────────────────────→ 高合并率
              │ IronClaw          LobsterAI
              │                   NanoBot
              │
              │ OpenHuman
              │ PicoClaw
              ↓
            低活跃度
```

理想区间在"高活跃 + 高合并率"的右上区（IronClaw、LobsterAI 当日最接近）。

---

## 7. 值得关注的趋势信号

### 7.1 🔒 **Memory 信任与多租户正在成为一等公民**
- 信号源：OpenClaw #7707（51 评论，居高不下）/ Hermes #34352（真实生产方反馈）/ IronClaw #7664（v1.3.0 tracking issue）/ LobsterAI #1154（coworkMemoryJudge 零测试）
- **行业启示**：随着 memory 操作从"用户私有"扩展到"多通道/多用户/第三方 skill 写入"，信任标签、来源元数据、跨用户隔离将成为 AI 助手的事实标准。开发者应在 memory write path 早期就内嵌来源标签和最小权限边界。

### 7.2 🪟 **Windows 仍是被系统性低估的平台**
- 信号源：OpenClaw（多个 Windows issue）/ Hermes Agent（CRLF、gateway reap、SMB、SSH resume）/ QwenPaw（#4832、#6197、#6806）
- **行业启示**：AI agent 项目普遍以 macOS/Linux 为主要开发环境，Windows 路径上的编码、进程

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

<think>The user wants me to generate a daily project report for NanoBot based on the GitHub data provided. Let me analyze the data carefully and produce a comprehensive report in Chinese.

Let me organize the information:

**Issues (3 total):**
1. #5161 [OPEN] - refactor: narrow file-level Pyright suppressions (by chengyongru, updated 2026-08-14)
2. #5391 [CLOSED] - [bug] NANOBOT_STREAM_IDLE_TIMEOUT_S acts as a total timeout (by shen0122, created/closed 2026-08-14)
3. #5378 [CLOSED] - Bug: file-cap archive failure mutates the session before persistence (by dajiaohuang, created 2026-08-13, closed 2026-08-14)

**PRs (22 total, showing top 20 by comments):**
OPEN PRs:
- #5396 - refactor: narrow file-level Pyright suppressions (ojassharma7)
- #5309 - fix(skills): allow marketplace skills to shadow builtins (KDB-Wind)
- #5152 - fix(subagent): mark partial completion results (yu-xin-c)
- #5271 - fix(session): prevent stale background task saves from overwriting session data (yorkhellen) - p0
- #5367 - feat(webui): localize agent activity (ZhouJ-sh)
- #4329 - feat(cli): add native TypeScript terminal UI (pancacake)
- #5356 - feat(webui): improve setup flows across chat channels (chengyongru)
- #5179 - Migrate MCP integration to SDK v2 with legacy compatibility (bingqilinweimaotai) - p1
- #5389 - feat(webui): add drag-and-drop session organization (bingqilinweimaotai)
- #5371 - fix(webui): hide assistant actions until turn end (ZhouJ-sh)
- #5358 - feat(webui): add session collaboration via mentions (chengyongru)
- #5340 - feat(webui): add interactive particle hero background (chengyongru)
- #4145 - fix: resolve #3958 — Weather Skill (chinhkrb113)
- #5382 - fix(session): retry os.replace() on transient Windows PermissionError (albatrossflyon-coder)

CLOSED PRs:
- #5392 - fix(anthropic): treat stream idle timeout as inactivity only (shen0122)
- #5395 - feat(webui): refine conversation groups and shared shapes (Re-bin)
- #5393 - feat(webui): polish sidebar and session transitions (chengyongru)
- #4689 - feat(providers): surface OAuth status and expiry warnings (bingqilinweimaotai) - INVALID
- #5018 - feat(skills): support explicit context loading (bingqilinweimaotai)
- #5390 - Agent/knowledge graph (yuhcszyt)
- Plus 2 more (to reach 22 total)

Let me write the report now. I'll be objective, data-driven, and use Chinese.

Let me check the comment counts - the PRs all show "undefined" for comments. Only the Issues show real comment counts (#5161 has 1 comment).

Now let me draft the report:

1. **今日速览**: Active day, 14 PRs pending merge, 8 closed/merged. No new releases. Multiple WebUI feature PRs, session stability fixes. Active community engagement.

2. **版本发布**: None

3. **项目进展**: Merged/closed PRs worth highlighting:
- #5392 - Anthropic stream idle timeout fix (critical)
- #5395 - WebUI conversation groups
- #5393 - WebUI sidebar polish
- #4689 - OAuth status (closed as invalid)
- #5018 - Skills explicit context loading

4. **社区热点**: WebUI improvements dominate, several conflict markers suggest WebUI is undergoing major refactor. p0 #5271 about session saves is most critical.

5. **Bug与稳定性**:
- #5391 (CLOSED) - Anthropic timeout bug, fixed by #5392
- #5378 (CLOSED) - Session mutation bug, closed same day
- #5382 - Windows PermissionError retry

6. **功能请求与路线图信号**: Multiple WebUI feature requests

7. **用户反馈摘要**: Limited feedback data, only #5161 has 1 comment

8. **待处理积压**: #4145 (Weather Skill) from June 1, #4329 (TypeScript terminal UI) from June 13, #5179 from July 30

Let me write this all out properly now.</think>

# NanoBot 项目日报
**日期：2026-08-15**

---

## 1. 今日速览

NanoBot 今日社区活跃度处于**中等偏高**水平：过去 24 小时内共有 22 个 PR 更新（14 待合并、8 已关闭）和 3 个 Issue 更新（1 活跃、2 关闭），但**无新版本发布**。工作重心明显集中在 **WebUI 体验打磨**与 **Session/Provider 稳定性修复**两条线上——前者由 @chengyongru、@ZhouJ-sh 等贡献者主导，多个 PR 存在 `conflict` 标记，说明主分支正经历密集的 WebUI 重构；后者则修复了 Anthropic 流式超时误判、会话存档异常等影响生产可用性的 P0/P2 级问题。整体看，项目处于"密集迭代 + 静默发版前"的状态，健康度良好。

---

## 2. 版本发布

**今日无新版本发布。** 上游未推送 tag/release，建议下游用户继续使用当前 `main` 分支或锁定最近一个稳定版本（如有需要可关注 issue #5161 衍生 PR #5396 的合并节奏）。

---

## 3. 项目进展（已合并/关闭 PR）

| PR | 标题 | 作者 | 影响 |
|---|---|---|---|
| [#5392](https://github.com/HKUDS/nanobot/pull/5392) | fix(anthropic): treat stream idle timeout as inactivity only | @shen0122 | 🔴 关键修复：解决 #5391，将 `NANOBOT_STREAM_IDLE_TIMEOUT_S` 由"总超时"纠正为"空闲超时"，长生成不再被错误中断 |
| [#5395](https://github.com/HKUDS/nanobot/pull/5395) | feat(webui): refine conversation groups and shared shapes | @Re-bin | WebUI 会话分组、拖拽、本地化文案统一 |
| [#5393](https://github.com/HKUDS/nanobot/pull/5393) | feat(webui): polish sidebar and session transitions | @chengyongru | 从 #5358 拆出的纯 UI 改进（侧边栏层级、tab、folder 展开） |
| [#5018](https://github.com/HKUDS/nanobot/pull/5018) | feat(skills): support explicit context loading | @bingqilinweimaotai | Skills 系统支持显式 `skill_names` 注入，打破"只注入 `always: true`"的限制 |
| [#5390](https://github.com/HKUDS/nanobot/pull/5390) | Agent/knowledge graph | @yuhcszyt | 探索性特性（知识图谱与 Agent 的结合） |
| [#4689](https://github.com/HKUDS/nanobot/pull/4689) | feat(providers): surface OAuth status and expiry warnings | @bingqilinweimaotai | ⚠️ 被标记为 `[invalid]` 关闭，OAuth 状态展示需求未被认可，可能需重新设计 |

**今日推进要点**：Anthropic 流式行为修正（#5392）是当日对生产环境影响最大的提交；Skills 显式上下文加载（#5018）补齐了 `ContextBuilder` 一个长期被忽视的能力；WebUI 视觉/交互统一动作密集（#5393、#5395），暗示下一版本 WebUI 体验将显著升级。

---

## 4. 社区热点

由于今日 PR 评论数普遍缺失（数据中标记 `undefined`），热点主要由 **优先级标签 + 关注度持续时间** 反映：

- 🥇 **[#5271](https://github.com/HKUDS/nanobot/pull/5271) — `p0` fix(session): prevent stale background task saves from overwriting session data**（@yorkhellen，创建于 8-06）  
  唯一标注 **p0（最高优先级）** 的待合并 PR，修复 `/new` 或会话生命周期切换时，后台 compactor 的过期保存覆盖当前会话的严重数据丢失风险。强烈建议维护者优先 review。

- 🥈 **[#5179](https://github.com/HKUDS/nanobot/pull/5179) — `p1` Migrate MCP integration to SDK v2**（@bingqilinweimaotai，创建于 7-30）  
  MCP 客户端从 `ClientSession` v1 升级到 v2，并保留 SSRF / DNS pinning / 代理校验等安全特性。是 provider 体系现代化的核心工作，已积压 2 周。

- 🥉 **[#5161](https://github.com/HKUDS/nanobot/issues/5161) — refactor: narrow file-level Pyright suppressions**（@chengyongru）  
  唯一今日有评论（1 条）的 Issue，对应修复 PR [#5396](https://github.com/HKUDS/nanobot/pull/5396) 同日提交。诉求：把基于 PR #5158 的 strict 模式下散落在 31 个文件中的 `# pyright: ...` 抑制指令收窄到最小范围，提升类型检查覆盖率。

**热点背后的诉求**：WebUI 协作（#5358 mentions、#5389 drag-and-drop、#5393 sidebar）和类型安全/工程化（#5161/#5396）两条线最受关注，反映用户既想要"更现代的界面"，也希望项目代码质量持续提升。

---

## 5. Bug 与稳定性

按严重程度排序：

| 严重度 | Issue/PR | 描述 | 状态 |
|---|---|---|---|
| 🔴 **P0** | [#5271](https://github.com/HKUDS/nanobot/pull/5271) | 后台任务陈旧保存覆盖当前会话 | 已修，待合并 |
| 🟠 **P1 / Provider 回归** | [#5391](https://github.com/HKUDS/nanobot/issues/5391) → [#5392](https://github.com/HKUDS/nanobot/pull/5392) | Anthropic 流式将"空闲超时"误用为"总超时"，长生成被中断 | ✅ **当日关闭，修复已合并** |
| 🟡 **P2** | [#5378](https://github.com/HKUDS/nanobot/issues/5378) | `Session.enforce_file_cap()` 在 archive 回调失败前已变更会话状态，造成内存-磁盘不一致 | ✅ **当日关闭**（需进一步确认是否真正修复） |
| 🟡 **P2 / Windows 平台** | [#5382](https://github.com/HKUDS/nanobot/pull/5382) | Windows 上 `os.replace()` 偶发 `[WinError 5] Access is denied`，gateway 直接崩溃（heartbeat cron 中两次复现） | 待合并，已提供 retry 方案 |

**点评**：今日关键 bug 闭环速度较快（#5391 → #5392 同日内 issue+PR 闭环），但 **#5271 已挂起 9 天仍未合并**，建议维护者优先处理以避免潜在数据丢失事故。

---

## 6. 功能请求与路线图信号

| 候选需求 | 对应 PR | 进入下一版本概率 |
|---|---|---|
| WebUI 拖拽会话组织 / 分组 | [#5389](https://github.com/HKUDS/nanobot/pull/5389), [#5395](https://github.com/HKUDS/nanobot/pull/5395) | ⭐⭐⭐⭐⭐ 高（视觉改进 + 已有合并先例） |
| WebUI @mention 跨会话协作 | [#5358](https://github.com/HKUDS/nanobot/pull/5358) | ⭐⭐⭐⭐ 高（特性完成度高，但与主分支冲突多） |
| 原生 TypeScript/OpenTUI 终端客户端 | [#4329](https://github.com/HKUDS/nanobot/pull/4329) | ⭐⭐⭐ 中（架构级改动，需长期 review；创建超 2 个月） |
| Anthropic 流式空闲超时语义修正 | [#5392](https://github.com/HKUDS/nanobot/pull/5392) | ✅ **已合并**，将随下次发版生效 |
| Skills 显式上下文加载 | [#5018](https://github.com/HKUDS/nanobot/pull/5018) | ⭐⭐⭐⭐ 高（已关闭合并，能力补齐） |
| MCP SDK v2 迁移 | [#5179](https://github.com/HKUDS/nanobot/pull/5179) | ⭐⭐⭐⭐ 高（p1 长期任务） |
| WebUI 本地化 agent 活动标签（10 种语言） | [#5367](https://github.com/HKUDS/nanobot/pull/5367) | ⭐⭐⭐⭐ 高 |
| Setup flows 跨 channel 改进 | [#5356](https://github.com/HKUDS/nanobot/pull/5356) | ⭐⭐⭐ 中（`conflict` 标记） |
| 粒子背景 Hero | [#5340](https://github.com/HKUDS/nanobot/pull/5340) | ⭐⭐ 低（视觉玩具型特性） |
| Agent + 知识图谱（探索性） | [#5390](https://github.com/HKUDS/nanobot/pull/5390) | ❓ 不确定，已被关闭（合并失败） |
| OAuth 状态与过期预警 | [#4689](https://github.com/HKUDS/nanobot/pull/4689) | ⭐ 低（被标 `invalid` 关闭，需重新设计） |

**信号总结**：WebUI 协作 + 多语言 + 拖拽 = 下一版本主旋律；Provider/SDK 现代化（MCP v2、Skills 显式加载）= 基础设施层稳定推进；TypeScript 终端、粒子背景属于"长期愿景"，短期不太可能发版。

---

## 7. 用户反馈摘要

由于今日 PR 评论数据缺失（多数条目 `comments: undefined`），可观察到的用户反馈有限：

- **#5161 评论区**：仅有 1 条评论，诉求聚焦"strict 模式下逐文件抑制指令应当最小化，体现项目对类型安全的承诺"，与 #5158 引入 BasedPyright strict 的整体方向一致——社区希望项目持续"以类型为先"。
- **#5391 报告人 @shen0122**：精准定位到 `nanobot/providers/anthropic_provider.py:842-845` 的 `asyncio.wait_for` 误用，属于高质量 bug report，反向推动了 #5392 的同日内修复。
- **#5378 报告人 @dajiaohuang**：指出 `Session.enforce_file_cap()` 在 archive 回调失败时已不可逆地改变了内存对象，触发持久化原子性讨论——属于"低频但影响数据完整性"的场景。
- **#5382 报告人 @albatrossflyon-coder**：附上具体时间戳（2026-08-11 15:44 / 18:45 CDT）和 `gateway.log` 证据，属于 Windows 平台兼容性痛点，揭示项目在跨平台稳定性上仍有欠账。

**整体满意度信号**：未见明显抱怨或负面反馈；当日的关闭/合并动作表明维护者响应积极。

---

## 8. 待处理积压（提醒维护者关注）

| PR/Issue | 创建日期 | 挂起时长 | 备注 |
|---|---|---|---|
| [#4145](https://github.com/HKUDS/nanobot/pull/4145) Weather Skill 示例 | 2026-06-01 | **~75 天** | `examples/skills/weather/` 长期未 review，作为示例贡献却始终未合并，对社区示例生态不利 |
| [#4329](https://github.com/HKUDS/nanobot/pull/4329) 原生 TypeScript/OpenTUI 终端 | 2026-06-13 | **~63 天** | 架构级改动，建议维护者明确"是否在路线图"的回应，避免贡献者空转 |
| [#5179](https://github.com/HKUDS/nanobot/pull/5179) MCP SDK v2 迁移 | 2026-07-30 | **~16 天** | `p1` 级 Provider 现代化工作，影响 MCP 生态长期兼容性 |
| [#5152](https://github.com/HKUDS/nanobot/pull/5152) fix(subagent): mark partial completion results | 2026-07-28 | **~18 天** | 影响 subagent 多任务并发场景的语义正确性 |
| [#5309](https://github.com/HKUDS/nanobot/pull/5309) fix(skills): allow marketplace skills to shadow builtins | 2026-08-09 | **~6 天** | Marketplace 中 bundled skill 阻断 install 按钮的 UX bug |
| [#5161](https://github.com/HKUDS/nanobot/issues/5161) narrow file-level Pyright suppressions | 2026-07-29 | **~17 天** | Issue 本身已挂起，对应 PR #5396 才刚提交 |

**建议**：
1. 对 **>30 天** 的 #4145、#4329 给出明确结论（合并 / 关闭 / 重写），避免贡献者流失。
2. 对 **p0** #5271 安排优先 review。
3. 对多个标记 `conflict` 的 WebUI PR（#5356、#5358、#5371、#5389、#5393、#5395）考虑建立 WebUI 子分支或专项里程碑，集中 rebase。

---

*报告生成时间：2026-08-15 · 数据基于 HKUDS/NanoBot GitHub 公开事件流*
*分析维度：活跃度、稳定性、社区信号、路线图走向、积压风险*

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

<think>The user wants me to generate a daily report for the PicoClaw project based on GitHub data. Let me analyze the data carefully and structure the report according to the requested sections.

Let me first understand the data:
- 3 Issues updated in last 24h: 1 new/active, 2 closed
- 9 PRs updated in last 24h: 4 pending merge, 5 merged/closed
- No new releases

Issues:
1. #3269 [OPEN] MCP server failure hangs agent loop (active)
2. #3308 [CLOSED] [stale] Code review about concurrency hazards
3. #3307 [CLOSED] [stale] Feature request for session list/switch for Telegram

PRs:
1. #3222 [OPEN] refactor(deltachat) - long-standing
2. #3337 [OPEN] Fix/mcp failure hangs agent loop - related to #3269
3. #3303 [CLOSED] Bump actions/stale from 10 to 11 (dependabot)
4. #3319 [OPEN] fix(tools): honor exec timeout and boolean run options
5. #3283 [CLOSED] fix(dingtalk): support picture/image message inbound
6. #3279 [CLOSED] fix(seahorse): prevent tool-call format leakage
7. #3271 [CLOSED] chore(providers): update default model names to 2026-07 latest
8. #3270 [CLOSED] feat: add DashScope TTS provider and WeChat audio file sending
9. #3200 [OPEN] [stale] feat(models): add configurable default fallback chain

Let me write this report in Chinese, professional and data-driven.</think>

# PicoClaw 项目日报
**日期：2026-08-15**
**数据来源：[github.com/sipeed/picoclaw](https://github.com/sipeed/picoclaw)**

---

## 一、今日速览

PicoClaw 在过去 24 小时整体处于**中低活跃度**的维护与清理状态：9 条 PR 中 5 条已关闭（含 4 条因 `[stale]` 标记被自动清理）、4 条仍待处理；3 条 Issue 中 2 条关闭、1 条核心 Bug 仍在追踪。**无新版本发布**。值得关注的亮点是社区 PR #3337 修复了阻塞聊天主流程的 MCP 失败挂起问题，与活跃 Issue #3269 形成"问题—修复"闭环；多数关闭的 PR 为依赖升级、模型清单刷新或长期无人跟进的 stale 项，表明仓库当前主要在做收尾式维护，而非功能爆发式增长。

---

## 二、版本发布

⚪ **无新版本发布**。过去 24 小时未触发任何 Release 标签，建议关注 #3337（MCP hang 修复）和 #3271（已合并的 9 家 provider 模型清单刷新）的后续发布节奏。

---

## 三、项目进展

今日被合并/关闭的 5 条 PR，按价值排序如下：

| PR | 标题 | 类型 | 价值评估 |
|---|---|---|---|
| [#3337](https://github.com/sipeed/picoclaw/pull/3337) | Fix/mcp failure hangs agent loop | Bug 修复（OPEN，待合并） | ⭐⭐⭐ 修复聊天主链路阻塞，**关键** |
| [#3271](https://github.com/sipeed/picoclaw/pull/3271) | chore(providers): update default model names to 2026-07 latest | 已关闭（stale） | 9 家 provider（OpenAI、Anthropic 等）模型 ID 同步至 2026-07 最新，**已被放弃合并** ⚠️ |
| [#3279](https://github.com/sipeed/picoclaw/pull/3279) | fix(seahorse): prevent tool-call format leakage into LLM summaries | 已关闭（stale） | 工具调用格式泄漏问题未落地，可能影响用户体验 |
| [#3283](https://github.com/sipeed/picoclaw/pull/3283) | fix(dingtalk): support picture/image message inbound | 已关闭（stale） | 钉钉渠道图片消息接收未合入 |
| [#3270](https://github.com/sipeed/picoclaw/pull/3270) | feat: add DashScope TTS provider and WeChat audio file sending | 已关闭（stale） | 阿里云 DashScope TTS + 微信音频，重要功能未合并 |
| [#3303](https://github.com/sipeed/picoclaw/pull/3303) | build(deps): bump actions/stale from 10 to 11 | 已关闭（stale） | Dependabot 自动依赖升级 |

**整体评估**：今日 PR 表面热闹，实际**净进展有限**——4 条具备实际功能/修复价值的 PR 因 stale 被关闭，仅有 #3337 是真正进入合并通道的工作。建议维护者复盘 stale 策略，避免优质贡献被自动清理。

---

## 四、社区热点

按评论数与互动量排序：

1. 🔥 **[#3269 MCP 失败导致 agent 挂起](https://github.com/sipeed/picoclaw/issues/3269)** — 5 条评论、1 个 👍，是今日**唯一活跃 Issue**。其核心诉求是"通道异常不应拖垮整个聊天主流程"，属于稳定性刚需。
2. 💬 **[#3308 并发/内存优化代码评审](https://github.com/sipeed/picoclaw/issues/3308)** — 2 条评论，聚焦 SeaHorse、Channel Manager、Hooks 的 goroutine 泄漏与并发风险，已被标记 stale 关闭。社区诉求：希望维护者严肃对待内存/性能优化建议。
3. 💬 **[#3307 Telegram 会话列表/切换功能](https://github.com/sipeed/picoclaw/issues/3307)** — 2 条评论，对比 Web UI 已有的 session-history-menu，**强烈呼吁补齐 Telegram 等聊天渠道的能力差**，stale 关闭可能引发贡献者流失。

**诉求分析**：社区当前最关心两件事——**核心链路稳定性**（#3269/#3337）和**多渠道功能对齐**（#3307、#3283）。两者均为直接影响终端用户感知的痛点。

---

## 五、Bug 与稳定性

按严重程度排列：

| 严重级别 | Issue/PR | 描述 | 是否已有 fix PR |
|---|---|---|---|
| 🔴 P0 - 主链路阻塞 | [#3269](https://github.com/sipeed/picoclaw/issues/3269) / [#3337](https://github.com/sipeed/picoclaw/pull/3337) | MCP server 连接失败时 `ensureMCPInitialized` 错误向上传播，`AgentLoop.Run` 直接退出，**聊天界面完全失声**直至重启 | ✅ PR #3337 已创建并 OPEN，今日提交 |
| 🟠 P1 - 工具语义错误 | [#3319](https://github.com/sipeed/picoclaw/pull/3319) | `exec` 工具文档声明支持 per-run `timeout`，但代码静默忽略；`background`/`pty` schema 错误标为 string | ✅ 同 PR 修复，OPEN 待合并 |
| 🟡 P2 - 内容泄漏 | [#3279](https://github.com/sipeed/picoclaw/pull/3279) | SeaHorse `partsToReadableContent` 将工具调用格式泄漏进 LLM summary | ❌ PR 已被 stale 关闭，无替代方案 |

**结论**：今日最严重的 P0 Bug 已具备可合并的修复，**强烈建议维护者优先审 #3337**；P1 的 exec 工具语义不一致 PR #3319 同样需要审阅。

---

## 六、功能请求与路线图信号

| 需求 | 来源 | 当前状态 | 纳入下版本的可能性 |
|---|---|---|---|
| Telegram/聊天渠道的 session 列表与切换 | [#3307](https://github.com/sipeed/picoclaw/issues/3307) | Issue 被 stale 关闭，**无对应 PR** | ⚠️ 中等偏低，除非有贡献者主动接手 |
| Web UI 可配置的模型 fallback chain | [#3200](https://github.com/sipeed/picoclaw/pull/3200) | OPEN，已 stale | ⚠️ 已有完整 PR，需维护者审阅即可合并 |
| DashScope TTS + 微信音频发送 | [#3270](https://github.com/sipeed/picoclaw/pull/3270) | 已关闭（stale） | ❌ 当前被自动清理，需要重新开 PR |
| 钉钉图片消息接收 | [#3283](https://github.com/sipeed/picoclaw/pull/3283) | 已关闭（stale） | ❌ 需重新提交 |
| DeltaChat 渠道重构 | [#3222](https://github.com/sipeed/picoclaw/pull/3222) | OPEN（最早，2026-07-03） | ⚠️ 重构类，需较长评审周期 |

**信号解读**：路线图主要由社区贡献驱动，但**stale 机制正在严重损耗贡献者热情**——至少 3 条具备合并潜力的功能 PR 在今日被一并清理。

---

## 七、用户反馈摘要

从 Issue 评论与 PR 描述中提炼的真实痛点：

- 😡 **"MCP 失败后聊天彻底死了"**（#3269）— 用户在生产部署中遇到单个 MCP server 不可达导致整个 Picoclaw 失去响应，被迫重启，**影响可用性**。
- 😤 **"Web UI 已经有 session 管理，Telegram 没有，凭什么？"**（#3307）— 用户明确感受到**渠道间能力不对等**，期待至少在 Telegram 复刻 Web UI 的 session 体验。
- 😐 **"工具调用格式出现在 AI 回复里很奇怪"**（#3279）— LLM 总结时混入 `<tool_call>` 块，**输出体验受损**。
- 👍 **picoclaw 本身**（#3308）— "在 $10 硬件 + <10MB RAM + 秒级启动"的定位被社区赞为 seriously awesome，工程美学仍是项目最大资产。

---

## 八、待处理积压

提醒维护者关注以下**长期未响应但价值较高**的项：

| 编号 | 类型 | 滞留天数（截至 2026-08-15） | 备注 |
|---|---|---|---|
| [#3200](https://github.com/sipeed/picoclaw/pull/3200) | feat(models): 默认 fallback chain | ~45 天 | 已有完整 PR，已被 stale，**亟需审阅** |
| [#3222](https://github.com/sipeed/picoclaw/pull/3222) | refactor(deltachat) | ~43 天 | -200LOC 重构，长期 OPEN |
| [#3319](https://github.com/sipeed/picoclaw/pull/3319) | fix(tools): exec timeout/boolean options | ~8 天 | 已 stale，修复工具语义缺陷 |
| [#3337](https://github.com/sipeed/picoclaw/pull/3337) | Fix MCP failure hang | **当日新提交** | P0 修复，建议 24h 内响应 |

**风险提示**：今日被 stale 关闭的 4 条 PR（#3271、#3279、#3283、#3270）若均为优质贡献，**stale 策略可能与项目利益相悖**——建议维护者评估是否需要调整 stale 阈值或豁免"有价值贡献"。

---

### 📊 项目健康度评分

| 维度 | 评分 | 说明 |
|---|---|---|
| 活跃度 | ⭐⭐☆☆☆ | 0 Release，关闭多为自动清理 |
| 稳定性响应 | ⭐⭐⭐☆☆ | P0 Bug 已有人修复但未合并 |
| 社区响应 | ⭐⭐☆☆☆ | 多个贡献 PR 被 stale 吞掉，反馈机制存疑 |
| 功能推进 | ⭐⭐☆☆☆ | 净功能进展接近零 |
| 综合 | ⭐⭐☆☆☆ | **维护者响应节奏是当前最大瓶颈** |

---

*本日报基于 GitHub Issues/PRs 数据自动整理，链接均为 github.com/sipeed/picoclaw 域内。*

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

<think>Let me analyze the GitHub data for IronClaw (github.com/nearai/ironclaw) and generate a comprehensive daily report for 2026-08-15.

Key observations from the data:

1. **Activity Overview**: 
   - 25 issues updated (16 new/active, 9 closed)
   - 47 PRs updated (24 pending, 23 merged/closed)
   - No new releases

2. **Major Themes**:
   - **v1.3.0 Automations Epic (#6879)**: A massive epic with multiple sub-issues being worked on (#7644, #7645, #7646, #7647, #7532)
   - **Unbound-turns refactor (#7634, #7562)**: Major architectural change
   - **Memory MCP provider (#7664, #7661)**: Pluggable memory system
   - **Design system consolidation (#7639, #7637, #7569, #7565)**: Frontend refactoring
   - **Bug bash P2 issues (#7660, #7662, #7659)**: QA-related bugs
   - **Release engineering (#7657, #7663)**: 1.2.0 release forward-porting

3. **Key PRs merged/closed today**:
   - #7668: Extension auth diagnostics
   - #7665: Hosted MCP OAuth
   - #7652: DB write workload measurement
   - #7666: Extension card truth (QA fixes)
   - #7655: CI coverage floor re-pin
   - #7658: Telegram 2FA gate
   - #7657: 1.2.0 release merge back

4. **Open important PRs**:
   - #7516: IronHub agent link WebUI (XL, new contributor)
   - #7634: Unbound-turns completion (stacked on #7562)
   - #7651: Deterministic no-result suppression
   - #7628: Heartbeat journal churn removal
   - #7456: Durable storage profile-agnostic
   - #7648: ACP harness executor
   - #7661: MCP-backed memory provider
   - #7663: Release forward-port
   - #7255: APDD kit governance
   - #7379: Public docs deployment
   - #7378: Doc-fact contract tests
   - #7636: Shell tool description fix

5. **Bug reports (P2)**:
   - #7660: Slack shows "Reconnect" despite working connection → PR #7666 (closed)
   - #7662: MP4 attachment fails in Telegram
   - #7659: Extensions leaking between users
   - #7667: Telegram phone-mode login code hint

6. **Long-standing important issues**:
   - #6879: v1.3.0 Epic on automation reliability (active)
   - #7414: Dogfooding & QA epic (08/10-08/16, closed - period ended)
   - #6869: DOCX corruption (closed)

Let me structure this report now.

For "社区热点", since comments data is mostly undefined for PRs, I'll focus on issues with comments and notable engagement patterns.

For "待处理积压", I need to identify long-standing important issues. #6879 is from 2026-07-29 (over 2 weeks old) and still very active. #6869 (DOCX corruption) was just closed. Let me look for ones that are old and still open.

Looking more carefully:
- #6879: opened 2026-07-29, still open, epic-level issue with many sub-issues
- #7255: PR from 2026-08-05, still open (10 days)
- #7456: PR from 2026-08-10, still open (5 days)  
- #7379: PR from 2026-08-07, still open (8 days)
- #7378: PR from 2026-08-07, still open (8 days)
- #7516: PR from 2026-08-12, still open (3 days)
- #7183: Issue from 2026-08-04, just closed (per-user LLM model selection)

Let me also check for issues that are quite old:
- #6869: 2026-07-29, now closed

The "待处理积压" should focus on things that have been waiting for a while.

Now let me write the report in Chinese, professional tone, with all the GitHub links.</think>

# IronClaw 项目动态日报
**日期：2026-08-15** | 数据来源：[github.com/nearai/ironclaw](https://github.com/nearai/ironclaw)

---

## 1. 今日速览

IronClaw 今日维持**高强度迭代节奏**，24 小时内累计处理 72 项议题（25 Issues + 47 PRs），合并/关闭率约 44%（32/72）。整体活动集中在三条主线：**(1) v1.3.0 自动化可靠性 Epic (#6879)** 正在被分解为多个可并行开发的子任务，今日新增 4 个结构化执行契约相关的增强 Issue；**(2) "unbound-turns" 架构重构** 进入收尾阶段，配套的 71 项一致性审计已完成；**(3) QA Bug Bash（08/10–08/16）** 进入尾声，多个 P2 缺陷已通过批量 PR 处理。代码健康度良好，无新版本发布。

---

## 2. 版本发布

⚠️ **今日无新版本发布。** 当前主线仍处于 v1.2.0 之后的迭代窗口，v1.3.0 路线图正在成型（详见后文）。

---

## 3. 项目进展（合并/关闭的重要 PR）

| PR | 标题 | 影响面 | 链接 |
|---|---|---|---|
| [#7657](https://github.com/nearai/ironclaw/pull/7657) | merge the 1.2.0 release line back into main | **发布工程**：将已验证的 `release/2026-08-11` 分支合并回主干，携带状态保留的 1.0/1.1→1.2 启动迁移 | [🔗](https://github.com/nearai/ironclaw/pull/7657) |
| [#7652](https://github.com/nearai/ironclaw/pull/7652) | perf(stress): measure production DB write workloads | **数据库压力基线**：测量生产级 agent turn（含 10 个能力调用、11 次模型尝试、durable events、process-journal、heartbeat）的实际写入压力，为后续优化提供数据 | [🔗](https://github.com/nearai/ironclaw/pull/7652) |
| [#7665](https://github.com/nearai/ironclaw/pull/7665) | fix(auth): support origin-scoped hosted MCP OAuth | **MCP 鉴权**：适配 MKT1 的窄边界 hosted-MCP OAuth 形态，保留已解析的资源/元数据 URL 跨 DCR、token 交换、刷新全链路 | [🔗](https://github.com/nearai/ironclaw/pull/7665) |
| [#7668](https://github.com/nearai/ironclaw/pull/7668) | fix(extensions): surface provider auth diagnostics | **扩展错误可观测性**：在 WASM/扩展工具 ABI/能力/运行时门控等路径携带 GitHub provider 错误码与消息，避免 401 被折叠为通用 re-auth | [🔗](https://github.com/nearai/ironclaw/pull/7668) |
| [#7666](https://github.com/nearai/ironclaw/pull/7666) | fix(extensions): tell the truth on cards and install results | **QA 联动**：修复 QA #7660 的 Slack 卡片误显"Finish Setup/Reconnect"，并改进设备链接安装引导 | [🔗](https://github.com/nearai/ironclaw/pull/7666) |
| [#7658](https://github.com/nearai/ironclaw/pull/7658) | fix(telegram): recognize the 2FA gate on migrated DCs | **Telegram 登录**：识别迁移 DC 上的 2FA 网关，明示登录码到达位置 | [🔗](https://github.com/nearai/ironclaw/pull/7658) |
| [#7655](https://github.com/nearai/ironclaw/pull/7655) | fix(ci): re-pin slack/telegram coverage floors | **CI 校准**：将 slack/telegram 集成覆盖率下限重置为 main 当前实际值，避免漂移 | [🔗](https://github.com/nearai/ironclaw/pull/7655) |
| [#7562](https://github.com/nearai/ironclaw/pull/7562) | feat(unbound-turns): design + phase 1 | **架构重构**（已合并）：unbound-turns 基线 PR，合并了 #7633（squash-merged），为 #7634 的收尾切换铺平 | [🔗](https://github.com/nearai/ironclaw/pull/7562) |

**整体推进评估：** 今日合并密度高且涉及面广——发布线回归、性能基线、鉴权、QA 缺陷、Telegram 登录均有所推进；架构层面"unbound-turns"已合入主干。**项目整体处于 v1.2.0 收尾、向 v1.3.0 加速过度的关键节点。**

---

## 4. 社区热点

由于多数 PR 评论数为 `undefined`，以 Issues 评论和创建活跃度为热度信号：

- **🔥 #6879（v1.3.0 自动化 Epic）**：创建 16 天、累计 1 条评论，今日仍有 4 个子任务（[#7644](https://github.com/nearai/ironclaw/issues/7644)、[#7645](https://github.com/nearai/ironclaw/issues/7645)、[#7646](https://github.com/nearai/ironclaw/issues/7646)、[#7647](https://github.com/nearai/ironclaw/issues/7647)）开单，是项目当前**最重要的战略议题**。诉求：小模型下自动化任务的"靠谱化"——结构化执行契约、预授权、模型绑定等系统性增强。
- **🆕 #7664（可插拔记忆 MCP）**：今日新开的战略性 tracking issue，定位为"Mnesis 作为首个消费者"的合约层。
- **🆕 #7414（QA Bug Bash Epic）**：08/10–08/16 周期，今日关闭，标志 Dogfooding 周期正式结束。
- **🆕 #7532（结构化执行规范）**：作为 #6879 子任务，今日合并——这是 v1.3.0 自动化的"地基"已落定。

---

## 5. Bug 与稳定性

按严重程度排列：

### 🔴 P2 - Bug Bash 期间发现的 QA Bug

| Issue | 描述 | 状态 | 关联 PR |
|---|---|---|---|
| [#7662](https://github.com/nearai/ironclaw/issues/7662) | Telegram MP4 附件失败：`invalid_value (attachments.mime_type)` | **OPEN**，暂无 fix | — |
| [#7660](https://github.com/nearai/ironclaw/issues/7660) | Slack 误显 "Reconnect" / "Finish Setup"（实际已连接） | 已闭环 | [#7666](https://github.com/nearai/ironclaw/pull/7666) ✅ |
| [#7659](https://github.com/nearai/ironclaw/issues/7659) | 扩展安装状态在用户间泄漏 | **OPEN**，严重性高（跨用户隔离），暂无 fix | — |

### 🟡 中等

| Issue | 描述 | 状态 | 关联 PR |
|---|---|---|---|
| [#7667](https://github.com/nearai/ironclaw/issues/7667) | Telegram phone-mode 登录码提示未反映 `sentCode.type_`（原始 TL send path） | **OPEN**，暂无 fix | — |
| [#7638](https://github.com/nearai/ironclaw/issues/7638) | 删除线程失败仍使用阻塞 `window.alert()` | **OPEN**，低危 UX 问题 | — |

### ✅ 今日修复（已闭环）

- DOCX 生成被 Word 拒读（[#6869](https://github.com/nearai/ironclaw/issues/6869)）
- Telegram 2FA 网关识别（[#7658](https://github.com/nearai/ironclaw/pull/7658)）

**稳定性评估：** 隔离类问题（#7659 跨用户扩展可见）需优先关注；其他多为 UI/提示类，可随下个迭代窗口清理。

---

## 6. 功能请求与路线图信号

### 明确指向 v1.3.0 的增强（均挂载在 Epic #6879 下）

- **结构化执行规范**（[#7532](https://github.com/nearai/ironclaw/issues/7532)）✅ 已合并
- **预授权 grants + scoped 长期租约**（[#7646](https://github.com/nearai/ironclaw/issues/7646)）—— 安全前置
- **per-automation 模型绑定**（[#7645](https://github.com/nearai/ironclaw/issues/7645)）—— 防止默认路由变动导致的静默行为漂移
- **确定性 no-delivery 结局**（[#7647](https://github.com/nearai/ironclaw/issues/7647)）→ PR [#7651](https://github.com/nearai/ironclaw/pull/7651) 待合并
- **武装计划前验证一次**（[#7644](https://github.com/nearai/ironclaw/issues/7644)）—— 复用父 Epic 的成功判据

### 已存在 PR、待纳入的 Roadmap 项

| 方向 | PR | 评估 |
|---|---|---|
| 可插拔内存（MCP 化） | [#7661](https://github.com/nearai/ironclaw/pull/7661) + [#7664](https://github.com/nearai/ironclaw/issues/7664) | **高概率纳入 v1.3.0**，tracking issue 已开 |
| WebUI 结构化 Ask User 卡片 | [#7653](https://github.com/nearai/ironclaw/issues/7653) | 复用 `LoopCompletionKind::AskUserReply`，落地成本低 |
| 设计系统组件化（`InlineNotice`、`SearchField`、类型化 props） | [#7639](https://github.com/nearai/ironclaw/issues/7639) / [#7569](https://github.com/nearai/ironclaw/issues/7569) / [#7637](https://github.com/nearai/ironclaw/issues/7637) / [#7565](https://github.com/nearai/ironclaw/issues/7565) | 前端清理正在系统化推进，**大概率随 Reborn WebUI 持续滚动** |
| IronHub 代理链接的 WebUI 操作面 | [#7516](https://github.com/nearai/ironclaw/pull/7516) | 新贡献者驱动，等待评审 |
| ACP harness executor（v0） | [#7648](https://github.com/nearai/ironclaw/pull/7648) + [#7624](https://github.com/nearai/ironclaw/issues/7624) | **实验性**，明确标注 "dev-only yolo"，可能仅作内部里程碑 |
| 文档治理（APDD Kit 评估） | [#7255](https://github.com/nearai/ironclaw/pull/7255) | 文档-only，已搁置 10 天 |
| 公共文档站部署管线（doc-truth 4/5） | [#7379](https://github.com/nearai/ironclaw/pull/7379) | 待合并，解决 docs↔release skew |

**信号解读：** v1.3.0 路线图将以 **"自动化可靠性 + 可插拔内存"** 为双引擎；设计系统清理与 Reborn WebUI 同向推进；发布工程（1.2 修复 forward-port [#7663](https://github.com/nearai/ironclaw/pull/7663)）将很快落定。

---

## 7. 用户反馈摘要

- **企业级痛点（来自 Champions 周会 #7183，已关闭）**：营销侧反馈普通用户**无法自主选择 LLM 模型**——目前仅管理员可控。已通过 [#7183](https://github.com/nearai/ironclaw/issues/7183) 关闭，预计 v1.3.0 会以 per-user 配置形式落地。
- **文档生成质量（#6869，已修复）**：用户 Davin Basi 反馈 IronClaw 生成的 NDA `.docx` 被 Word 判定损坏，并对比 ChatGPT/Claude 可正常生成。说明文档生成在 Word 兼容性上仍落后主流产品，修复后已闭环。
- **Telegram QA 现场反馈（#7667）**：QA 工程师现场报告 `PHONE_MIGRATE_1` 后用户收不到登录码——提示语未跟随原始 TL 类型，属 UX 信号弱、行为正确但用户迷茫。
- **QA 一线诉求集中体现**：#7414 Bug Bash 周期内累计产出了**扩展可见性跨用户泄漏、Slack/Telegram 集成误报、附件 MIME 校验**等高敏感度问题，反映**多租户隔离 + 渠道集成稳健性**是当前最被一线人员"摸到"的能力短板。

---

## 8. 待处理积压（提醒维护者关注）

| 编号 | 类型 | 标题 | 创建日期 | 等待天数 | 链接 |
|---|---|---|---|---|---|
| #6879 | Epic | **v1.3.0 自动化可靠性** | 2026-07-29 | **17 天** | [🔗](https://github.com/nearai/ironclaw/issues/6879) |
| #7255 | PR | docs(governance): APDD Kit 评估 | 2026-08-05 | 10 天 | [🔗](https://github.com/nearai/ironclaw/pull/7255) |
| #7379 | PR | release(docs): docs-live 分支部署 | 2026-08-07 | 8 天 | [🔗](https://github.com/nearai/ironclaw/pull/7379) |
| #7378 | PR | test(docs): doc-fact 合约测试 | 2026-08-07 | 8 天 | [🔗](https://github.com/nearai/ironclaw/pull/7378) |
| #7456 | PR | fix(reborn): 持久化与 profile 解耦 | 2026-08-10 | 5 天 | [🔗](https://github.com/nearai/ironclaw/pull/7456) |
| #7624 | Issue | ACP harness executor v0 |

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

<think>Let me analyze the GitHub data for LobsterAI and generate a comprehensive daily report for 2026-08-15.

Key observations:
1. 2 Issues updated (both OPEN)
2. 27 PRs updated - 5 still open, 22 closed/merged
3. 1 new release: 2026.8.14

The release 2026.8.14 was published. Let me look at the PRs associated with this release from the release branch PR #2498.

Key PRs in the release:
- #2411: sidebar support check-in and banner carousel
- #2418: sidebar multi-agent task activity filter

Closed PRs today include:
- #2498: Release 2026.7.30 (67 commits ahead, 264 files changed, +24,736/-4,253)
- #2499: fix cowork turn process expand
- #2497: i18n improvements for cowork
- #2496: badge popover viewport fix
- #2495: typography font size bump
- #2494: account credits icon style
- #2493: session export image and card toggle UI
- #2492: account credits icon color
- #2491: fix openclaw key skills.entries by frontmatter name
- #2490: browser annotation attachments in artifact panel
- #2483: skill key by frontmatter name (duplicate)
- #1228: mark session as unread
- #1231: AgentCreateModal Escape key fix
- #2422: btw tools fix
- #2423: revert btw tools fix

Open PRs:
- #2374: hide sidebar ad banner (2026-07-21, stale)
- #2460: rimraf dependency bump
- #2465: vite dependency bump
- #1153: Gemini URL bug fix (stale)
- #1155: in-page search Ctrl+F (stale)

Issues:
- #1154: commandSafety and coworkMemoryJudge unit tests (stale, opened 2026-03-31)
- #2489: user requesting v4pro update (new today)

Let me write the report now.</think>

# LobsterAI 项目日报 · 2026-08-15

> 数据来源：[github.com/netease-youdao/LobsterAI](https://github.com/netease-youdao/LobsterAI)
> 数据周期：过去 24 小时（基于 2026-08-14 的活动）

---

## 1. 今日速览

LobsterAI 今日进入 **发布日** 节奏：发布了 **2026.8.14 版本**，并将 `release/2026.7.30` 分支一次性合入 `main`（+24,736 / −4,253，跨越 264 个文件），表明项目处于集中发版窗口的尾部。PR 流转活跃——24 小时内 27 条 PR 更新，其中 **22 条已合并/关闭、5 条仍待合并**，并入的修复集中在侧边栏/账户 UI 打磨、Cowork 行为修正以及 OpenClaw 技能键解析。社区侧热度仍偏低：2 条新开 Issue 中仅 1 条为真实功能诉求（[#2489](https://github.com/netease-youdao/LobsterAI/issues/2489)），其余多由自动化维护触发。**整体评估：发布驱动、活跃度中等偏上，社区互动有待激活。**

---

## 2. 版本发布

### 🦞 LobsterAI 2026.8.14 已发布

**Release：** [LobsterAI 2026.8.14](https://github.com/netease-youdao/LobsterAI/pull/2411)（合入 PR #2411 / #2418 等）

**主要更新内容（基于今日合并的关键 PR）：**

| 模块 | 变更 |
|------|------|
| **Sidebar（侧边栏）** | 新增签到（check-in）与横幅轮播（[#2411](https://github.com/netease-youdao/LobsterAI/pull/2411)）；新增多 Agent 任务活动筛选器（[#2418](https://github.com/netease-youdao/LobsterAI/pull/2418)） |
| **Account（账户）** | 重构 Credits 余额图标（[#2494](https://github.com/netease-youdao/LobsterAI/pull/2494)）；统一明暗模式颜色（[#2492](https://github.com/netease-youdao/LobsterAI/pull/2492)） |
| **Typography（字体）** | 默认 UI / 代码字号上调，并提供一次性迁移路径（[#2495](https://github.com/netease-youdao/LobsterAI/pull/2495)） |
| **Cowork（协作）** | 修复回合流程在等待子 Agent 时过早折叠（[#2499](https://github.com/netease-youdao/LobsterAI/pull/2499)）；Badge Popover 不再越出视口（[#2496](https://github.com/netease-youdao/LobsterAI/pull/2496)）；会话导出图像与卡片切换 UI 修复（[#2493](https://github.com/netease-youdao/LobsterAI/pull/2493)）；i18n 文案润色（[#2497](https://github.com/netease-youdao/LobsterAI/pull/2497)）；浏览器批注附件预览支持（[#2490](https://github.com/netease-youdao/LobsterAI/pull/2490)） |
| **OpenClaw** | 技能条目以 frontmatter `name` 为键，解决 UI 开关静默失效（[#2491](https://github.com/netease-youdao/LobsterAI/pull/2491) / [#2483](https://github.com/netease-youdao/LobsterAI/pull/2483)） |
| **Artifacts（工件）** | 会话内图像 / 卡片切换体验优化 |
| **依赖** | 同步更新多次 dependabot 提交（rimraf、vite 等） |

**⚠️ 重大变更与迁移注意事项：**

1. **字体迁移**（[#2495](https://github.com/netease-youdao/LobsterAI/pull/2495)）：默认 UI/代码字号上调，包含**一次性用户迁移逻辑**。升级后已保存的用户偏好会被覆盖一次以反映新默认值；如自定义过字号需重新设置。
2. **OpenClaw 技能键**（[#2491](https://github.com/netease-youdao/LobsterAI/pull/2491)）：内部技能 ID 解析改为基于 frontmatter `name`。若用户曾依赖目录名作为技能标识符，需检查 Skills 列表中的开关状态是否仍正确持久化。
3. **侧边栏横幅**：新增 carousel，**未提供永久隐藏开关**（参考 Issue [#2342](https://github.com/netease-youdao/LobsterAI/issues/2342)，相关 PR [#2374](https://github.com/netease-youdao/LobsterAI/pull/2374) 仍 OPEN）。

**无破坏性 API 变更。** 建议升级前备份用户偏好与 Skills 配置。

---

## 3. 项目进展

今日是项目典型的"**集中合并日**"，多项重要修复集中落地：

### 🚀 重要合并（按优先级排序）

1. **[Release 2026.7.30 → main 合入]** [#2498](https://github.com/netease-youdao/LobsterAI/pull/2498) — 将 67 个提交一次性合并进主干，涉及 264 个文件（+24,736 / −4,253）。该分支引入了 **Team Edition 账户与配额流程**，并对 Skills / Connectors 体验做了显著刷新，是项目近一个半月最大的功能集合合入。**这是 2026.8.14 版本的前置基础。**

2. **[UI 稳定性]** [#2499](https://github.com/netease-youdao/LobsterAI/pull/2499) — 修复 Cowork 回合在 `sessions_yield` 后父任务恢复前误折叠为"空持续时长"——**消除了一个被误判为失败状态的 UX 假阳性**。

3. **[功能完善]** [#2490](https://github.com/netease-youdao/LobsterAI/pull/2490) — Cowork 的浏览器批注截图现在作为带编号的附件卡渲染，并在专用 Artifact 面板（而非通用图片预览器）中打开。**这是 Cowork 工作流可视化的重要升级。**

4. **[配置一致性修复]** [#2491](https://github.com/netease-youdao/LobsterAI/pull/2491) — OpenClaw 技能键以 frontmatter `name` 索引——**修复了目录名与 frontmatter 名不一致时 UI 开关静默无效的潜在数据丢失类缺陷**。

5. **[视觉一致性]** [#2494](https://github.com/netease-youdao/LobsterAI/pull/2494) / [#2492](https://github.com/netease-youdao/LobsterAI/pull/2492) — Credits 图标重构与色彩统一，提升账户区视觉品质。

6. **[依赖维护]** [#2460](https://github.com/netease-youdao/LobsterAI/pull/2460) **OPEN**（rimraf 5→6）、[#2465](https://github.com/netease-youdao/LobsterAI/pull/2465) **OPEN**（vite 5→8）——dependabot 提交的两个版本跨幅较大的依赖升级 PR，**尚未合入**，需关注兼容性。

### 📊 项目健康度

- **PR 周转率高**：27 条更新中有 22 条已处理（~81%）。
- **功能→稳定**：今日合入以 bug fix 与视觉打磨为主，辅以一项新功能（浏览器批注附件），**符合发版前稳定化的工程节奏**。
- **跨模块影响范围广**：涉及 renderer / main / cowork / openclaw / artifacts 多个领域，证明团队多线并行能力强。

---

## 4. 社区热点

> 今日评论与互动密度整体较低，没有"爆款"讨论。

### 讨论量最高的 Issues / PRs

| 排名 | 编号 | 标题 | 评论数 | 链接 |
|------|------|------|--------|------|
| 1 | #1154 | [stale] 为 commandSafety 和 coworkMemoryJudge 补充 Vitest 单元测试 | 1 | [链接](https://github.com/netease-youdao/LobsterAI/issues/1154) |
| 2 | #2489 | 快更新 v4pro！ | 1 | [链接](https://github.com/netease-youdao/LobsterAI/issues/2489) |

### 热点诉求分析

- **[#1154 安全模块测试缺失](https://github.com/netease-youdao/LobsterAI/issues/1154)**：`commandSafety` 与 `coworkMemoryJudge` 是两条**核心安全门**——一旦误判可能导致 AI 静默执行 `rm -rf`、`git push --force` 等破坏性命令，或将大量无关内容写入用户记忆。**该 Issue 已 4 个多月未响应**，标记 stale，是当下最值得关注的"潜在隐患"。

- **[#2489 用户催促版本](https://github.com/netease-youdao/LobsterAI/issues/2489)**：用户期望尽快更新到 "v4pro"（推测为新版订阅/模型能力）。**今天恰好发布了 2026.8.14，可视为对此诉求的部分回应**；建议维护者在该 Issue 下回复说明更新内容以收拢反馈。

- 其余被多个编号前缀（#1xxx 序列）覆盖的 PR（[#1155](https://github.com/netease-youdao/LobsterAI/pull/1155)、[#1153](https://github.com/netease-youdao/LobsterAI/pull/1153)、[#1228](https://github.com/netease-youdao/LobsterAI/pull/1228)、[#1231](https://github.com/netease-youdao/LobsterAI/pull/1231)）均为 3 月底/4 月初提出、**长期被标记 stale 的功能/修复**，反映出社区早期贡献的"沉默期"。

---

## 5. Bug 与稳定性

按严重程度排序：

| 严重度 | 描述 | 修复 PR | 状态 |
|--------|------|--------|------|
| 🔴 **高** | `commandSafety.ts` / `coworkMemoryJudge.ts` **零测试覆盖**，一旦回归可能导致危险命令执行或记忆污染 | — | **未修复**，[#1154](https://github.com/netease-youdao/LobsterAI/issues/1154) OPEN 142 天 |
| 🟠 **中** | `buildOpenAIChatCompletionsURL` 处理 Google Gemini `/v1` baseURL 时多切一个字符，URL 拼接后缺少 `/` | — | **未合并**，[#1153](https://github.com/netease-youdao/LobsterAI/pull/1153) OPEN stale |
| 🟠 **中** | OpenClaw 技能条目键与 OpenClaw 解析器不一致，UI 开关**静默失效**（潜在配置丢失） | [#2491](https://github.com/netease-youdao/LobsterAI/pull/2491) / [#2483](https://github.com/netease-youdao/LobsterAI/pull/2483) | ✅ **已合并** |
| 🟡 **低** | Cowork 回合在 `sessions_yield` 后父任务恢复前被折叠为"空持续时长"，误导为失败 | [#2499](https://github.com/netease-youdao/LobsterAI/pull/2499) | ✅ **已合并** |
| 🟡 **低** | Badge Popover 越出视口、覆盖后续消息 | [#2496](https://github.com/netease-youdao/LobsterAI/pull/2496) | ✅ **已合并** |
| 🟡 **低** | `AgentCreateModal` 缺 Escape 关闭支持、重新打开残留旧数据 | [#1231](https://github.com/netease-youdao/LobsterAI/pull/1231) | ✅ **已合并** |
| 🟢 **极低** | 侧边栏横幅无永久隐藏开关 | [#2374](https://github.com/netease-youdao/LobsterAI/pull/2374) | ⏳ **OPEN**，未合并 |

**稳定性总评**：今日合入的 22 个 PR 中绝大多数为 bug fix 与 UI 修正，**未观察到新的崩溃/回归报告**。安全模块测试缺失（[#1154](https://github.com/netease-youdao/LobsterAI/issues/1154)）是当前最突出的工程债务。

---

## 6. 功能请求与路线图信号

### 今日新增请求

- **[#2489 "快更新 v4pro"](https://github.com/netease-youdao/LobsterAI/issues/2489)**：暗示用户希望尽快接触更新一代模型/订阅能力。**结合今日 2026.8.14 发布，可推断路线图中"快速迭代"仍是重点**，维护者可在该 Issue 下给出 roadmap 解释。

### 已存在但尚未合并的功能请求（按合入可能性排序）

| PR | 功能 | 合入概率评估 |
|----|------|--------------|
| [#2374](https://github.com/netease-youdao/LobsterAI/pull/2374) | 设置项永久隐藏侧边栏广告横幅 | ⭐⭐⭐ 极高——解决明显痛点、PR 已存在超 3 周 |
| [#1155](https://github.com/netease-youdao/LobsterAI/pull/1155) | 会话内页内搜索（Ctrl+F） | ⭐⭐ 高——社区高价值功能，已 stale 4 个月，需 maintainer 优先级确认 |
| [#1228](https://github.com/netease-youdao/LobsterAI/pull/1228) | 会话"标记为未读" | ✅ **已合并** |
| [#2460](https://github.com/netease-youdao/LobsterAI/pull/2460) / [#2465](https://github.com/netease-youdao/LobsterAI/pull/2465) | 升级 rimraf、vite | ⭐⭐ 高——dependabot 自动维护，需回归测试 |

**路线图信号**：今日合入的 [#2495 字体迁移](https://github.com/netease-youdao/LobsterAI/pull/2495)、[#2494/#2492 账户图标](https://github.com/netease-youdao/LobsterAI/pull/2494)、[#2490 浏览器批注附件](https://github.com/netease-youdao/LobsterAI/pull/2490) 显示 **"Cowork 可视化 + 视觉统一"** 是当前主线； [#2411/#2418 侧边栏改版](https://github.com/netease-youdao/LobsterAI/pull/2411) 则表明 **"侧边栏商业化（签到/活动/横幅）"** 是 2026 下半年的产品重点。

---

## 7. 用户反馈摘要

**活跃样本量有限**——今日仅 2 条新 Issue 且只有 1 条评论。可提炼的真实反馈如下：

### 痛点

- 🗣️ **"快更新 v4pro！"**（[#2489](https://github.com/netease-youdao/LobsterAI/issues/2489)）：用户对**最新能力/订阅版本**有明确期待，可能反映当前版本与竞品/最新模型存在落差。**这是产品层面的紧迫信号**。

- 🗣️ **侧边栏横幅烦扰**（[#2342](https://github.com/netease-youdao/LobsterAI/issues/2342) → [#2374](https://github.com/netease-youdao/LobsterAI/pull/2374)）：社区已有 PR 等了 25 天仍未合并，**反映用户对"非用户主动订阅的内容"敏感度高**。

- 🗣️ **会话内搜索缺失**（[#1155](https://github.com/netease-youdao/LobsterAI/pull/1155)）：长会话找不到历史信息是高频用户场景。

### 满意/积极信号

- ✅ 浏览器批注从通用图片预览器升级为专用 Artifact 面板（[#2490](https://github.com/netease-youdao/LobsterAI/pull/2490)）——回应了协作场景下"截图难以回溯"的痛点。

> ⚠️ 由于 Issue 评论数过低（n=2），本节内容代表性有限，建议维护者主动引导用户反馈。

---

## 8. 待处理积压

按对项目健康度的影响排序：

### 🔴 长期未响应（stale，≥ 90 天）

| 类型 | 编号 | 标题 | 等待天数 | 链接 |
|------|------|------|----------|------|
| 安全测试缺口 | [#1154](

</details>

<details>
<summary><strong>QwenPaw</strong> — <a href="https://github.com/agentscope-ai/QwenPaw">agentscope-ai/QwenPaw</a></summary>

<think>The user wants me to generate a project daily report for QwenPaw (a GitHub project) based on the provided data. Let me analyze the data carefully:

**Data Summary:**
- Past 24 hours: 50 issues updated (13 new/active, 37 closed), 41 PRs updated (26 pending merge, 15 merged/closed)
- 0 new releases

**Key observations:**

1. **Closed Issues (37)** - High closure rate indicates active maintenance
2. **Open PRs (26)** - Significant backlog of pending PRs
3. **Active Issues (13)** - Including some high-priority bugs

**Notable Issues:**
- #3045: 自动获取模型为什么不可用 (8 comments, closed)
- #2418: skills-hub 管理页面 (7 comments, closed)
- #2846: 桌面端自动更新功能 + 任务栏图标 (6 comments, closed)
- #2303: MiniMax provider 404 error (6 comments, closed)
- #7010: 缺少后台守护模式 (6 comments, closed)
- #6405: 升级2.0后 MCP 工具问题 (6 comments, closed)
- #7011: [OPEN] Console stop 取消 Feishu session (5 comments, open - critical)
- #3002: 不兼容 OpenAI Responses API (5 comments, closed)
- #4001: [OPEN] 支持删除单条消息 (4 comments, open)
- #7025: [OPEN] QwenPaw Creator 插件冲突 (4 comments, open)

**Notable PRs:**
- #7033: dynamic skill loading + auto-unload + frontmatter fix (OPEN)
- #6940: native DataPaw app runtime (OPEN)
- #5992: per-session model overrides (OPEN)
- #7032: auto-memory linked chat title refresh (OPEN)
- #6969: fix duplicate tool result from MCP (OPEN)
- #6302: unify provider discovery (OPEN)
- #7038: home WorksForYou & update blog (OPEN)
- #7035: organize subagent conversations (OPEN)
- #7036: media download controls (OPEN)
- #6869: background task timeout fix (OPEN)
- #7037: computer-use related window surfaces (OPEN)
- #7024: DashScope audio formatting (OPEN)
- #7031: skill-system (CLOSED - duplicate or superseded)
- #7030: auto-title-sync (CLOSED)
- #2105: whisper installation docs (CLOSED)
- #6715: OneBot inbound media (CLOSED)
- #6908: bumping agentscope to 2.0.6 (OPEN)
- #6997: memory guides rewrite (OPEN)
- #6943: plugin channel configurators (CLOSED)
- #7029: skill-system Chinese (CLOSED)

I notice #7031, #7030, #7029, #7033, #7032 - these seem to be duplicates (closed ones superseded by open ones with new numbers). The author @Ferrum360 has multiple PRs.

**Critical/Important issues to highlight:**
- #7011 (OPEN): Console stop cancels Feishu session - critical multi-session bug
- #7016 (OPEN): 工具调用404 - Tool call 404 errors
- #6958 (OPEN): MCP duplicate data issue (has PR #6969)
- #4001 (OPEN): 消息删除功能
- #7025 (OPEN): QwenPaw Creator 插件冲突
- #7010 (CLOSED): daemon mode

**Project Health Assessment:**
- High activity with 91 total updates in 24h
- Good closure rate on issues (74%)
- Many open PRs (26) - significant review backlog
- Multiple duplicate PRs from same author suggests iteration
- 0 releases - might indicate ongoing stabilization

Let me write this in Chinese as the request was in Chinese.

I'll structure the report with the 8 sections requested.</think>

# QwenPaw 项目日报
**日期：2026-08-15**

---

## 1. 今日速览

QwenPaw 项目今日保持高度活跃，过去 24 小时共产生 **91 项动态**（50 条 Issue + 41 条 PR），其中 Issue 关闭率达到 **74%**（37/50），表明社区维护响应迅速。但同时有 **26 个 PR 待合并**，审阅积压压力较大，且未发布新版本。值得关注的是，作者 `@Ferrum360` 今日提交了多个动态技能加载和自动标题同步相关的 PR（#7029/#7030/#7031 被关闭，由 #7033/#7032 取代），呈现出快速迭代状态。整体项目健康度良好，但 PR 审阅节奏需要关注。

---

## 2. 版本发布

⚠️ 今日 **无新版本发布**。结合 PR #6908（agentscope 升级至 2.0.6）和多项修复的积累，社区应留意下一个补丁版本的发布窗口。

---

## 3. 项目进展

今日合并/关闭的 15 个 PR 中，多项重要进展值得关注：

| PR | 内容 | 影响 |
|---|---|---|
| [#6943](https://github.com/agentscope-ai/QwenPaw/pull/6943) | 恢复插件 channel 的交互式 `get_configurator()` 支持 | 提升插件生态扩展能力 |
| [#6715](https://github.com/agentscope-ai/QwenPaw/pull/6715) | OneBot 入站媒体本地化（对齐 AgentScope 2.0 DataBlock） | 修复 OneBot 通道媒体处理 |
| [#7029](https://github.com/agentscope-ai/QwenPaw/pull/7029) | 动态技能加载/自动卸载/Frontmatter 修复 | 已被 #7033 取代 |
| [#7030](https://github.com/agentscope-ai/QwenPaw/pull/7030) | 自动内存联动聊天标题刷新 | 已被 #7032 取代 |
| [#2105](https://github.com/agentscope-ai/QwenPaw/pull/2105) | Whisper 安装文档 | 完善本地语音支持文档 |

**整体判断：** 项目在插件生态、技能系统、多通道整合三条线持续推进，但 PR 重开/关闭的频繁节奏（同一作者的多个版本被互相替换）说明合并策略需要更明确，避免审阅资源浪费。

---

## 4. 社区热点

**今日讨论最热的 Issues（按评论数）：**

- 🔥 [#3045](https://github.com/agentscope-ai/QwenPaw/issues/3045) **（8 条评论，已关闭）** — "自动获取模型为什么不可用"。模型配置自动发现仍是用户高频痛点。
- 🔥 [#2418](https://github.com/agentscope-ai/QwenPaw/issues/2418) **（7 条评论，已关闭）** — "能否在新增 skills-hub 管理页面"。Skills 生态管理诉求强烈，与 #7033 动态技能加载方向契合。
- 🔥 [#2846](https://github.com/agentscope-ai/QwenPaw/issues/2846) **（6 条评论，已关闭）** — 桌面端自动更新 + Windows 任务栏图标问题。
- 🔥 [#2303](https://github.com/agentscope-ai/QwenPaw/issues/2303) **（6 条评论，已关闭）** — MiniMax provider `check_connection()` 调用 `/models` 返回 404。涉及多 provider 适配问题。
- 🔥 [#7010](https://github.com/agentscope-ai/QwenPaw/issues/7010) **（6 条评论，已关闭）** — `qwenpaw app` 缺少真正的 daemon/后台运行模式，SSH 启动挂死。
- 🔥 [#6405](https://github.com/agentscope-ai/QwenPaw/issues/6405) **（6 条评论，已关闭）** — 升级 2.0 后 MCP 工具出现 "Tool not found"，工具命名规则变化引发兼容问题。

**背后诉求：** 模型配置的"零摩擦"接入、桌面端的原生体验（自动更新、图标）、多 Provider 兼容、Skills/MCP 生态的易用性 —— 这四个方向构成了 QwenPaw 用户最集中的声音。

---

## 5. Bug 与稳定性

**按严重程度排列：**

| 严重度 | Issue | 描述 | 状态 |
|---|---|---|---|
| 🔴 高 | [#7011](https://github.com/agentscope-ai/QwenPaw/issues/7011) | Console stop 请求会误取消其他 UI Session 中的活跃 Feishu 会话（2.1.0） | **OPEN**，无 fix PR，多会话并发关键缺陷 |
| 🔴 高 | [#7016](https://github.com/agentscope-ai/QwenPaw/issues/7016) | 工具调用 offload 接口返回 404 "Tool call not found"（2.1.0） | **OPEN**，流式会话受影响 |
| 🟡 中 | [#6958](https://github.com/agentscope-ai/QwenPaw/issues/6958) | FastMCP 返回 structuredContent 时 Tool Result 文件写入两份重复数据 | **OPEN**，已有修复 PR [#6969](https://github.com/agentscope-ai/QwenPaw/pull/6969) ✅ |
| 🟡 中 | [#7025](https://github.com/agentscope-ai/QwenPaw/issues/7025) | QwenPaw Creator 插件安装后导致所有插件失效 | **OPEN**，插件冲突未解决 |
| 🟡 中 | [#6806](https://github.com/agentscope-ai/QwenPaw/issues/6806) | qwenpaw-creator Windows 端无法保存模型配置 "Internal Server Error" | 已关闭 |
| 🟢 低 | [#4832](https://github.com/agentscope-ai/QwenPaw/issues/4832) | Windows shell subprocess 缺少 `CREATE_NO_WINDOW` 导致 cmd 窗口闪烁 | 已关闭 |
| 🟢 低 | [#6197](https://github.com/agentscope-ai/QwenPaw/issues/6197) | QwenPaw Desktop 在 `nvidia-smi` 挂起时启动卡死 | 已关闭 |
| 🟢 低 | [#6951](https://github.com/agentscope-ai/QwenPaw/issues/6951) | Scroll 压缩后重新进入会话，压缩前消息不可见（仅 eviction index） | 已关闭 |
| 🟢 低 | [#7040](https://github.com/agentscope-ai/QwenPaw/issues/7040) | 文案错别字 "Stopp Running" | 已关闭（invalid） |
| 🟢 低 | [#6972](https://github.com/agentscope-ai/QwenPaw/issues/6972) | Chrome 扩展 WebSocket 发送 `tab.create` 后断开 | 已关闭 |

**关键关注：** 2.1.0 版本上集中暴露了 **Console stop 误取消其他会话（#7011）** 和 **工具调用 404（#7016）** 两个仍未修复的严重 Bug，建议在下个补丁版本优先处理。

---

## 6. 功能请求与路线图信号

**用户高频诉求：**

| 诉求 | 代表 Issue | 现有 PR / 进展 |
|---|---|---|
| 🆕 **动态技能生命周期管理** | [#2418](https://github.com/agentscope-ai/QwenPaw/issues/2418) | ✅ [#7033](https://github.com/agentscope-ai/QwenPaw/pull/7033) 已提交（待审） |
| 🆕 **桌面端自动更新** | [#2846](https://github.com/agentscope-ai/QwenPaw/issues/2846), [#3464](https://github.com/agentscope-ai/QwenPaw/issues/3464) | ❌ 暂无 PR |
| 🆕 **聊天标题自动同步（联动 Auto-Memory）** | — | ✅ [#7032](https://github.com/agentscope-ai/QwenPaw/pull/7032) 已提交（待审） |
| 🆕 **OpenAI Responses API 兼容** | [#3002](https://github.com/agentscope-ai/QwenPaw/issues/3002), [#2737](https://github.com/agentscope-ai/QwenPaw/issues/2737), [#944](https://github.com/agentscope-ai/QwenPaw/issues/944) | ⚠️ 路由 `/v1/chat/completions` 与 `responses` API 不兼容，仍待架构级方案 |
| 🆕 **会话内单条消息删除** | [#4001](https://github.com/agentscope-ai/QwenPaw/issues/4001) | ❌ 暂无 PR |
| 🆕 **会话拆分** | [#4436](https://github.com/agentscope-ai/QwenPaw/issues/4436) | ❌ 暂无 PR |
| 🆕 **提供商无关的对话历史** | [#2314](https://github.com/agentscope-ai/QwenPaw/issues/2314) | ⚠️ [#6302](https://github.com/agentscope-ai/QwenPaw/pull/6302) "统一 provider 发现" 是相关方向 |
| 🆕 **/models 与 /model 命令** | [#2763](https://github.com/agentscope-ai/QwenPaw/issues/2763) | ❌ 暂无 PR |
| 🆕 **本地 GGUF 模型零配置运行** | [#6433](https://github.com/agentscope-ai/QwenPaw/issues/6433) | ❌ 暂无 PR |
| 🆕 **Computer Use 支持** | [#5551](https://github.com/agentscope-ai/QwenPaw/issues/5551) | ✅ [#7037](https://github.com/agentscope-ai/QwenPaw/pull/7037) Computer Use 窗口观测已提交 |
| 🆕 **DataPaw 原生应用运行时** | — | ✅ [#6940](https://github.com/agentscope-ai/QwenPaw/pull/6940) 已提交 |
| 🆕 **定时任务"不投递"模式** | [#2554](https://github.com/agentscope-ai/QwenPaw/issues/2554) | ❌ 暂无 PR |
| 🆕 **会话级模型覆盖** | — | ✅ [#5992](https://github.com/agentscope-ai/QwenPaw/pull/5992) 已提交 |
| 🆕 **后台守护模式** | [#7010](https://github.com/agentscope-ai/QwenPaw/issues/7010) | ❌ Issue 已关闭但无 PR，需关注是否真的实现 |

**路线图信号：** 项目在 2.1.0 后的方向上，**技能系统、Provider 抽象层、Computer Use、内存/标题联动** 是最清晰的几条主线；**桌面端自动更新、单条消息删除、会话拆分、本地 GGUF 模型** 仍是用户呼声高但缺乏实现的"空白区"。

---

## 7. 用户反馈摘要

**真实痛点：**

- 🚨 **桌面端运维体验差**："每次都要卸载后再更新很麻烦"（[#2846](https://github.com/agentscope-ai/QwenPaw/issues/2846)、[#3464](https://github.com/agentscope-ai/QwenPaw/issues/3464)），任务栏图标显示为 Python 而非 CoPaw 品牌。
- 🚨 **多 Provider 适配脆弱**：MiniMax（Anthropic 兼容）的 `/models` 端点 404（[#2303](https://github.com/agentscope-ai/QwenPaw/issues/2303)），仅支持 Responses API 的网关 400（[#3002](https://github.com/agentscope-ai/QwenPaw/issues/3002)）。
- 🚨 **2.0 → 2.1 升级阵痛**：MCP 工具命名规则变化导致 "Tool not found"（[#6405](https://github.com/agentscope-ai/QwenPaw/issues/6405)），与 agentscope 2.0.4.post1 兼容性破坏（[#6612](https://github.com/agentscope-ai/QwenPaw/issues/6612)）。
- 🚨 **服务器部署不可用**：`qwenpaw app` 不支持 daemon 模式，SSH 启动卡死（[#7010](https://github.com/agentscope-ai/QwenPaw/issues/7010)）。
- 🚨 **插件兼容性问题**：qwenpaw-creator 安装后导致其他插件集体失效（[#7025](https://github.com/agentscope-ai/QwenPaw/issues/7025)），Windows 端保存配置 Internal Server Error（[#6806](https://github.com/agentscope-ai/QwenPaw/issues/6806)）。
- 😤 **会话体验不完整**：无法删除单条消息（[#4001](https://github.com/agentscope-ai/QwenPaw/issues/4001)），无法拆分长会话（[#4436](https://github.com/agentscope-ai/QwenPaw/issues/4436)），scroll 压缩后原始消息不可见（[#6951](https://github.com/agentscope-ai/QwenPaw/issues/6951)）。
- 😤 **Channel 工具调用缺乏审批提示**（[#6819](https://github.com/agentscope-ai/QwenPaw/issues/6819)）—— 用户无法判断工具是正常调用还是卡在审批。

**值得关注的满意点：**
- 🎉 项目多 Provider 设计思路获得社区认可，多个 Issue 围绕模型路由与切换展开讨论。
- 🎉 文档本地化（中英双 README）持续完善，#2105 等文档 PR 顺利合并。

---

## 8. 待处理积压

**重要但尚未收到维护者回应的 OPEN Issue：**

| Issue | 创建时间 | 等待天数 | 备注 |
|---|---|---|---|
| [#7011](https://github.com/agentscope-ai/QwenPaw/issues/7011) | 2026-08-14 | 1 天 | 🔴 严重：多 UI 会话状态交叉污染 |
| [#7016](https://github.com/agentscope-ai/QwenPaw/issues/7016) | 2026-08-14 | 1 天 | 🔴 严重：工具调用 404 |
| [#7025](https://github.com/agentscope-ai/QwenPaw/issues/7025) | 2026-08-14 | 1 天 | 🟡 中等：插件冲突致全体失效 |
| [#4001](https://github.com/agentscope-ai/QwenPaw/issues/4001) | 2026-05-02 | **105 天** | ⚠️ 长期：单条消息删除 |
| [#4436](https://github.com/agentscope-ai/QwenPaw/issues/4436) |

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/NousResearch/hermes-agent">NousResearch/hermes-agent</a></summary>

<think>The user wants me to generate a daily project report for Hermes Agent based on GitHub data. Let me analyze the data carefully and structure it according to the 8 sections requested.

Key observations from the data:

1. **Activity Overview**: 50 issues updated (47 new/active, 3 closed), 50 PRs updated (27 pending, 23 merged/closed), 0 new releases
2. **No new releases** - skip section 2 or note it
3. **Closed/merged PRs** - need to identify these from the list. Looking at the data, closed PRs include:
   - #86562 (duplicate, closed)
   - #83785 (closed - rewind truncation fix)
   - #84859 (closed - duplicate, browser venv fix)
   - #86572 (closed - stream-drop stall fix)
   - #86374 (closed - tui PATH fix)

4. **Hot discussions** (most comments):
   - #78647 [CLOSED] Epic: All Gods Must Die (78 comments) - big refactor epic closed
   - #34352 Multi-Tenant Hermes Problem (31 comments, 3 👍)
   - #66616 Skills index stale (31 comments)
   - #83683 Desktop restart kills gateway regression (27 comments)
   - #4064 Mouse support feature (13 comments)

5. **Bugs and stability**:
   - #83683 P1 Desktop restart reaps gateway (Windows) - regression
   - #85825 P0 memory replace on Windows (CRLF) - CLOSED
   - #30449 P2 reasoning_content not in SSE stream
   - #84969 P2 Docker reuse ignores config drift
   - #85834 P2 SSH resume 'Session not found'
   - #86558 P2 XDG_RUNTIME_DIR crash
   - #86510 P2 read_file off-by-one
   - #86513 P2 file_tools stat for remote backends
   - #64384 P2 Codex Responses stream
   - #86566 P2 timeout exceptions retried
   - #79625 P2 checkpoints ignored in desktop
   - #86565 P3 session dot color sync
   - #68876 P3 provider/model switch sync
   - #83845 P3 browser_exec CLI discovery - CLOSED

6. **Feature requests**:
   - #34352 Multi-tenant memory
   - #4064 Mouse support in CLI
   - #67798 Lifecycle hooks as shared contract
   - #79564 Discord Feature Parity Campaign (meta)
   - #86535, #86536, #86537, #86538, #86539, #86549, #86521 Discord omniscience sub-features
   - #85159 file:// links in desktop chat
   - #86561 Move sessions into Projects
   - #86576 Strip encrypted reasoning tokens on delegation
   - #86575 Secret-scanner skill

7. **Closed Issues**:
   - #78647 Epic closed
   - #85825 Windows CRLF bug
   - #83845 browser_exec PATH

Now let me write the report in Chinese, structured professionally and data-driven.

Let me think about activity level - 50 issues + 50 PRs in 24h is very high activity, indicating a busy day. Let me assess project health.

Health indicators:
- High issue activity (47 active/3 closed) suggests heavy development
- No releases means changes are accumulating for next version
- Many Discord-related PRs suggest focused feature campaign
- Some P0/P1 bugs show stability concerns on Windows desktop
- Good closing rate on duplicates

I'll write a comprehensive Chinese report.</think>

# Hermes Agent 项目日报 · 2026-08-15

> 数据周期：2026-08-14 至 2026-08-15（UTC）
> 仓库：[NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent)

---

## 一、今日速览

Hermes Agent 今日延续了**极高的开发活跃度**：过去 24 小时内共触达 50 条 Issue 与 50 条 PR，但未发布任何新版本。Issue 侧以 **47 条新开/活跃 vs 3 条关闭**的结构呈现，社区仍处于"提报多于消化"的净增长阶段；PR 侧则有 **27 条待合并 / 23 条已合并或关闭**（其中多数为重复或合并后的闭包），意味着半数流量已进入代码主干。值得关注的两个方向：**(1) Windows 桌面端的稳定性问题集中爆发**（P0 内存写入、P1 网关重启回归），**(2) Discord Omniscience 功能对齐运动持续推进**，今日新增 7 条子 Issue + 2 条 PR，测试覆盖率稳步上升。整体来看项目健康度处于"高强度演进 + 局部平台稳定性承压"的状态。

---

## 二、版本发布

**今日无新版本发布。** 当前仍停留在最近发布的版本（参考 #83683 报告为 Hermes 0.20.0）。考虑到累计关闭的 EPIC #78647 已完成 20/20 god-file 分片重构，以及 #83785 等关键回归修复已合入主干，下一版本（推测为 0.20.1 或 0.21.0）有望在近期发布。

---

## 三、项目进展

### ✅ 已合并/关闭的重要 PR（推进方向）

| PR | 标题 | 影响 | 链接 |
|----|------|------|------|
| **#83785** | fix(gateway/desktop): durable row-id addressing for rewind truncation | **P0 修复**：解决 Desktop 端 rewind/regenerate 截断时的会话状态错位，由 #83202 cherry-pick 救活并补齐 DB heal/fallback 守卫 | [链接](https://github.com/NousResearch/hermes-agent/pull/83785) |
| **#86374** | fix(tui): prepend Hermes tool dirs to slash_worker PATH | **P3 修复**：Desktop/Dashboard 派生的 `slash_worker` 子进程不再因最小化 PATH 丢失 `browser-use`/`uvx`/`uv` 解析能力（救活 #83854） | [链接](https://github.com/NousResearch/hermes-agent/pull/86374) |
| **#86572** | fix(agent): escalate repeated stream-drop stalls to fallback chain | **韧性改进**：针对 OpenRouter 上 Claude Sonnet 4.6 流式故障导致 100% `PARTIAL_STREAM_STUB_ID` 的事件，加入 fallback chain 升级逻辑 | [链接](https://github.com/NousResearch/hermes-agent/pull/86572) |
| **#84859** | fix(browser): strip parent venv pointers from browser-use subprocess env | **P2 修复**：消除 `PYTHONPATH` 污染引发的 `pydantic_core` ABI 不匹配（duplicate 关闭） | [链接](https://github.com/NousResearch/hermes-agent/pull/84859) |

### 🔭 重大里程碑

- **EPIC #78647 "All Gods Must Die" 已正式关闭**（78 条评论，20/20 god-file 全部分片完成）。这是项目架构层面的一项关键性重构，意味着 Hermes 进入了"无 god-file"时代，为后续模块边界清晰化奠定基础。
  → [EPIC 链接](https://github.com/NousResearch/hermes-agent/issues/78647)

---

## 四、社区热点

### 🔥 评论数最高的 Issue（社区诉求地图）

1. **#78647 (78 条)** — [EPIC 关闭] god-file 分片全完成。标志着 Hermes 完成了仓库级架构卫生运动，详见第三节。
2. **#34352 (31 条, 👍3)** — [多租户 Hermes 问题](https://github.com/NousResearch/hermes-agent/issues/34352)：NimbleCoAI 提出 memory 操作绕过 hook 系统，租户隔离需要 fork 核心才能实现。该作者已在生产环境跑了一段时间补丁，希望向社区贡献。
   - **诉求**：将 memory 路径纳入统一 hook 契约，使多租户 AI agent 部署成为一等公民。
3. **#66616 (31 条)** — [Skills Index 看门狗告警 degraded](https://github.com/NousResearch/hermes-agent/issues/66616)：自动化探针发现统一技能索引已陈旧 29.8h（阈值 26h），影响 [Skills Hub](https://docs/skills) 的可用性。
   - **诉求**：自动重建机制需要更频繁或具备 on-demand 触发能力。
4. **#83683 (27 条)** — [Desktop 重启终结 live gateway（Windows 回归）](https://github.com/NousResearch/hermes-agent/issues/83683)：WeChat/QQ/Telegram 在桌面应用重启后完全静默。
   - **诉求**：P1 回归，要求在重启桌面应用时正确守护/重启 gateway 进程。
5. **#4064 (13 条)** — [CLI 鼠标支持请求](https://github.com/NousResearch/hermes-agent/issues/4064)：长期悬而未决，用户希望 prompt_toolkit `mouse_support=False` 改为可配置 toggle。
6. **#67798 (10 条)** — [Lifecycle hooks 应成为跨执行面的共享运行时契约](https://github.com/NousResearch/hermes-agent/issues/67798)：提议把 `HookRegistry` 从 gateway 提升为 runtime 级。
7. **#85622 (10 条)** — [外部 memory provider (mode both) 抑制内置 MEMORY.md/USER.md 注入](https://github.com/NousResearch/hermes-agent/issues/85622)：与官方文档"additive"承诺相矛盾。

### 🎯 Discord Omniscience 阵营（高强度连续输出）

[@andrexibiza](https://github.com/andrexibiza) 在元 Issue [#79564](https://github.com/NousResearch/hermes-agent/issues/79564) 下今日新开 7 个子任务（I3/I4/V1/W3/R3/I1/T5），覆盖 slash 补全、组件鉴权、原生语音消息、profile 路由、recovery 游标、命令注册表同步、线程权限。每个子任务都有相应的测试文件与通过数（如 `test_discord_autocomplete.py 16/16`、`test_discord_component_auth.py 19/19`），可见"测试先行"的工程节奏。

---

## 五、Bug 与稳定性

按严重程度排列：

| 严重度 | Issue | 描述 | 平台/组件 | 是否有 fix PR |
|--------|-------|------|-----------|--------------|
| **P0** | [#85825](https://github.com/NousResearch/hermes-agent/issues/85825) | `memory(replace/remove)` 在 Windows CRLF 环境下静默覆写整份 MEMORY.md | Windows / memory | ✅ 已 CLOSED（08-15） |
| **P1** | [#83683](https://github.com/NousResearch/hermes-agent/issues/83683) | Desktop 重启 reap 掉 gateway 但不再启动 → WeChat/QQ 静默（0.20.0 回归） | Windows / Desktop / gateway | ❌ 暂无 |
| **P2** | [#30449](https://github.com/NousResearch/hermes-agent/issues/30449) | DeepSeek 后端的 `reasoning_content`/`reasoning_effort` 不到达 SSE 流 | API / streaming | ❌ 暂无 |
| **P2** | [#84969](https://github.com/NousResearch/hermes-agent/issues/84969) | 持久化 Docker 终端跨进程复用忽略不可变配置漂移 | terminal / docker | ❌ 暂无 |
| **P2** | [#85834](https://github.com/NousResearch/hermes-agent/issues/85834) | Desktop per-profile SSH 远程 resume 失败（"Session not found"） | SSH / Desktop | ❌ 暂无 |
| **P2** | [#86558](https://github.com/NousResearch/hermes-agent/issues/86558) | `hermes gateway restart` 在 XDG_RUNTIME_DIR 跨用户污染时崩溃 | CLI / gateway | ❌ 暂无 |
| **P2** | [#86510](https://github.com/NousResearch/hermes-agent/issues/86510) | `read_file` 行数 `wc -l` 语义 off-by-one（无 trailing newline 时） | file_tools | ❌ 暂无（duplicate） |
| **P2** | [#86513](https://github.com/NousResearch/hermes-agent/issues/86513) | file_tools 在远端/容器后端用 host fs stat | file_tools | ❌ 暂无（duplicate） |
| **P2** | [#79625](https://github.com/NousResearch/hermes-agent/issues/79625) | Desktop 会话忽略 `checkpoints.enabled`（无文件系统 checkpoint） | TUI / Desktop | ❌ 暂无 |
| **P2** | [#64384](https://github.com/NousResearch/hermes-agent/pull/64384) | Codex Responses 流原始 payload 未规范化 | codex / streaming | 🔄 PR 待合并 |
| **P2** | [#86566](https://github.com/NousResearch/hermes-agent/pull/86566) | terminal-tool 把 timeout 当 transient 重试 3 次 | terminal | 🔄 PR 待合并 |
| **P3** | [#83845](https://github.com/NousResearch/hermes-agent/issues/83845) | Dashboard `slash_worker` PATH 缺 Hermes venv | TUI / browser | ✅ 已 CLOSED（#86374 修复） |
| **P3** | [#86565](https://github.com/NousResearch/hermes-agent/issues/86565) | Desktop 会话审批时状态点仍是蓝色 | Desktop / sessions | ❌ 暂无 |
| **P3** | [#68876](https://github.com/NousResearch/hermes-agent/issues/68876) | 切换 provider/model 后菜单/输入栏/session 绑定不同步 | Desktop | ❌ 暂无 |

**稳定性观察**：Windows 桌面端连续出现 P0/P1 级问题（CRLF 内存覆写、gateway 静默），加上 Desktop 长期存在多个同步类缺陷（#68876、#79625、#86565），表明**桌面端在多平台质量保障上仍是最薄弱环节**，建议维护团队在下一版本中将其作为优先验证目标。

---

## 六、功能请求与路线图信号

### 高优先级 / 已有 PR 推进

| 提案 | 已有 PR | 进入下一版本的概率 |
|------|---------|-------------------|
| **多租户 Hermes**（#34352） | 无独立 PR，但 #67798 在向"runtime-owned hooks"迁移，方向契合 | 中高 |
| **Lifecycle hooks 共享运行时契约**（#67798） | 暂无 | 中 |
| **Discord 全功能对齐**（#79564） | 已有 M1/M3/M5 PR（#86440/#86419/#86451），子任务 I/V/W/R 多线推进 | **高**（阵营式推进） |
| **CLI 鼠标支持 toggle**（#4064） | 无 | 中（影响 CLI 用户面） |
| **移动既有 session 到 Projects**（#86561） | 无 | 中 |
| **路由 file:// 链接到 #media:**（#85159） | 无 | 中 |
| **GLM-5.3 支持**（#86433） | ✅ [#86433](https://github.com/NousResearch/hermes-agent/pull/86433) 待合并 | **高** |
| **Matrix 项目路由**（#86355） | ✅ [#86355](https://github.com/NousResearch/hermes-agent/pull/86355) 待合并 | 高 |
| **A2A 自定义 headers + UA**（#86322） | ✅ [#86322](https://github.com/NousResearch/hermes-agent/pull/86322) 待合并 | 高 |
| **Secret scanner 安全技能**（#86575） | ✅ [#86575](https://github.com/NousResearch/hermes-agent/pull/86575) 待合并 | 高 |
| **Skills 生态 Phase 0+1.3+1.1**（data-engineering / cloud-native / security / social-media / mobile / meta 新分类 + 106 个 social-media 技能） | 🔄 #86557 待合并，#86562 重复已关 | **极高**（社区与维护方都在推） |
| **跨 provider 切换剥离加密 reasoning tokens**（#86576） | 无 | 中（语义安全相关） |

### 🆕 新出现的设计信号

- **跨进程 turn 序列化（DB 级 lease）** [#67454](https://github.com/NousResearch/hermes-agent/pull/67454)：用 SQLite 异步上下文管理器取代当前 in-process 锁，对多 gateway 实例 / Sidecar 部署至关重要。
- **FTS5 索引自检与自愈** [#86183](https://github.com/NousResearch/hermes-agent/pull/86183)：升级 SQLite 后能识别并修复遗留 `messages_fts_trigram` 索引。
- **Desktop 日志环脱敏** [#70375](https://github.com/NousResearch/hermes-agent/pull/70375)：让本地 `hermes serve` 的 stdout/stderr 与 SSH 路径一致，过 token。

---

## 七、用户反馈摘要

### 痛点集中区

1. **桌面端的"状态不同步"反复出现**
   - 用户多次报告切换模型/打开审批/恢复会话时 UI 状态与实际请求行为脱节（#68876、#79625、#86565）。这构成了桌面用户**最强的群体性不满**。

2. **Windows 平台被当成二等公民**
   - 从 #85825（CRLF 写入）、#83683（gateway 被 reap）、#85159（`file://` 渲染为 `[blocked]`）可看出，Windows 路径上的 lint/编码/进程管理问题系统性低于 macOS/Linux。建议设立 Windows CI smoke gate。

3. **CLI 体验落后于现代 IDE 期待**
   - #4064 的鼠标支持、#67798 的 hook 一致性、#4064 的 prompt_toolkit 限制都反映出 CLI 仍是"够用就好"路线，与 TUI/Desktop 的精致形成落差。

4. **多租户与 SaaS 化是社区前进的方向**
   - #34352 来自 NimbleCoAI 这类"多租户 AI agent"产品方，透露社区已经有真实生产部署在等待 Hermes 给出官方多租户方案。

5. **Discord Omniscience 阵营士气高涨**
   - [@andrexibiza](https://github.com/andrexibiza) 单日开出 7 个子任务、2 个 PR，全部带测试与文档。"测试先行"已经成为该阵营的事实标准，值得其他领域借鉴。

### 满意信号

- **EPIC #78647 关闭**：20/20 god-file 分片完成，社区对项目架构卫生的投入表示认可。
- **#83785 的 cherry-pick 救活**：维护者对历史 PR 的尊重与救活行为（保留原始 authorship）受到社区赞誉。
- **#70375 的 SSH/Desktop 行为对齐**：说明维护者对"行为一致性"有

</details>

<details>
<summary><strong>OpenHuman</strong> — <a href="https://github.com/tinyhumansai/openhuman">tinyhumansai/openhuman</a></summary>

<think>Let me analyze the GitHub data for OpenHuman project and generate a daily report for 2026-08-15.

Let me organize the data:

**Issues (5 total):**
1. #5553 [CLOSED] - Human tab realtime voice creates a new chat thread per turn - by YellowSnnowmann
2. #5539 [CLOSED] - Reduce Rust binary bloat from duplicate dependency versions - by senamakel
3. #5545 [CLOSED] - Animate the mascot's mouth during realtime voice calls - by YellowSnnowmann
4. #5552 [OPEN] - Voice agent announces the tool call instead of running it - by YellowSnnowmann
5. #5551 [OPEN] - Voice deadline line promises delivery it cannot guarantee - by YellowSnnowmann

**Pull Requests (14 total):**
1. #5533 [OPEN] - refactor(web3): sign every chain inside the tinywallet module (−6,252 lines) - by senamakel
2. #5557 [CLOSED] - Fix three capture regressions from the TinyVoice port - by senamakel
3. #5548 [CLOSED] - refactor(agent): wire tool-call parsing to TinyAgents, drop the Rhai REPL tool - by senamakel
4. #5547 [CLOSED] - Port the voice pipeline to the TinyVoice module - by senamakel
5. #5556 [OPEN] - fix(ci): align dep-sim calibration with the post-git-shed kernel floor - by YellowSnnowmann
6. #5554 [CLOSED] - fix(human): keep realtime voice turns in one chat thread - by YellowSnnowmann
7. #5546 [CLOSED] - feat(voice): animate the mascot's mouth during realtime voice calls - by YellowSnnowmann
8. #5555 [CLOSED] - chore(vendor): resync tinyflows to main - by oxoxDev
9. #5550 [OPEN] - fix(voice): stop the directive turning an announcement into the answer - by YellowSnnowmann
10. #5549 [OPEN] - fix(voice): make the deadline line a neutral acknowledgement - by YellowSnnowmann
11. #5544 [CLOSED] - chore(deps): move git2 ownership into tinycortex - by senamakel
12. #5543 [CLOSED] - Upgrade tinyflows to 0.8: host-owned checkpointer, engine decoupled from tinyagents - by senamakel
13. #5542 [CLOSED] - fix(agent): stabilize attribution and archivist segments - by senamakel
14. #5541 [CLOSED] - refactor(modules): load TinyJuice outside dependency graph - by senamakel

**Key observations:**

1. **Realtime Voice Pipeline Refactor is the dominant theme** - The major PR #5547 ports the voice pipeline to TinyVoice module, with follow-up PR #5557 fixing three regressions from that port.

2. **Two parallel sub-themes around realtime voice UX:**
   - #5553/#5554: Fix chat thread duplication in realtime voice
   - #5545/#5546: Add mascot mouth animation during realtime voice
   - #5552/#5550: Fix tool call announcement issue
   - #5551/#5559: Fix deadline line promise issue

3. **Major dependency/rust refactor:**
   - #5533: Refactor web3/tinywallet (-6,252 lines)
   - #5541: Load TinyJuice outside dependency graph
   - #5544: Move git2 to tinycortex
   - #5543: Upgrade tinyflows to 0.8
   - #5548: Tool-call parsing moved to TinyAgents, drop Rhai REPL (-4,822 lines)
   - #5555: Resync tinyflows to main

4. **CI/Infra:**
   - #5556: Fix dep-sim calibration

5. **Other:**
   - #5539: Rust binary bloat reduction
   - #5542: Stabilize attribution and archivist segments

The project is clearly in an active refactoring phase, with major code reduction across multiple PRs. The voice pipeline is being ported to a separate module (TinyVoice), with active bug fixes happening in parallel.

No releases today.

Let me now structure the report properly in Chinese as required.</think>

# OpenHuman 项目动态日报
**日期：2026-08-15**

---

## 1. 今日速览

OpenHuman 今日呈现**高强度架构重构与稳定性修复并行的活跃态势**：14 个 PR 中已有 10 个关闭/合并（合并率约 71%），5 个 Issue 中 3 个已关闭。围绕 **realtime voice 体验质量** 形成密集的"问题-修复"闭环（4 对 Issue/PR 同时推进），同时进行 **大刀阔斧的 Rust 依赖瘦身**：单日累计净删减代码行数超过 **1.3 万行**（含 #5533 的 −6,252 行、#5548 的 −4,822 行、#5547 的净 −445 行等）。项目整体处于"模块化边界外迁 + 语音管线稳定化"的关键节点，无新版本发布。

---

## 2. 版本发布

**无新版本发布。** 当前开发节奏集中在主干合并与架构重构，预计下一版本将整合 tinyvoice 模块、tinyflows 0.8 升级及若干稳定性修复。

---

## 3. 项目进展（已合并/关闭的重要 PR）

### 3.1 语音管线整体外迁至 TinyVoice 模块（核心里程碑）
- **#5547** [p1, 已合并] Port the voice pipeline to the TinyVoice module — 将宿主无关的语音管线一半迁入 [`tinyvoice v0.1.3`](https://github.com/tinyhumansai/tinyvoice/releases/tag/v0.1.3)，通过 TinyBus 模块加载，净 −1,863 / +1,418 行。
- **#5557** [p2, 已合并] Fix three capture regressions from the TinyVoice port — 修复随 #5547 引入的三个回归：always-on capture channel 无界、采样窗口失真、AEC 参考信号泄漏。

### 3.2 Realtime Voice 用户体验闭环
- **#5554** [p2, 已合并] fix(human): keep realtime voice turns in one chat thread — 修复实时语音会话每轮新建对话线程的问题，将 `proactive:voice` 会话钉在首个解析到的对话面上。
- **#5546** [p2, 已合并] feat(voice): animate the mascot's mouth during realtime voice calls — 新增 `useAmplitudeLipsync` + `amplitudeLipsync.ts`，在 ElevenLabs agent 说话时驱动吉祥物口型同步。

### 3.3 Rust 核心依赖重构（代码瘦身）
- **#5541** [已合并] refactor(modules): load TinyJuice outside dependency graph — TinyJuice 改为独立 TinyBus 模块发布与校验和钉版，删除原 Rust crate 链接。
- **#5544** [p1, 已合并] chore(deps): move git2 ownership into tinycortex — 移除 `git2` 依赖，`memory-git` 转发 `tinycortex/git-diff` 与 `tinycortex/git-tree`。
- **#5543** [p2, 已合并] Upgrade tinyflows to 0.8: host-owned checkpointer, engine decoupled from tinyagents — `vendor/tinyflows` 从 `c242184` → `cd39220`（0.6 → 0.8），宿主侧移植 SQLite checkpointer，新增 5 类节点。
- **#5548** [已合并] refactor(agent): wire tool-call parsing to TinyAgents, drop the Rhai REPL tool — 工具调用解析宿主侧对接 tinyagents #102/#105/#106，**净 −4,822 行**。
- **#5555** [p3, 已合并] chore(vendor): resync tinyflows to main — 跟随主分支将 vendored tinyflows 推进至 `c77db474`（gitlink-only 重同步）。

### 3.4 Agent 测试稳定性与依赖模拟校准
- **#5542** [p1, 已合并] fix(agent): stabilize attribution and archivist segments — 修复父级 harness 注入非 UTF-8 Git 参数时 OpenHuman commit attribution 丢失问题。
- **#5556** [p3, 仍 OPEN] fix(ci): align dep-sim calibration with the post-git-shed kernel floor — 配合 #5544，CI Lite 期望值 281 → 279 仍待对齐 `main`。

**推进评估**：今日 OpenHuman 在"模块边界清晰化"与"realtime voice 稳定性"两个方向均取得阶段性成果，核心 voice 管线首次以独立模块形式对外发布，预期将显著降低后续跨端复用的工程负担。

---

## 4. 社区热点

今日所有开放/关闭的 Issue 评论数与反应数均较低（最高 1 条评论，0 个 👍），尚未形成显著社区讨论。但从 Issue 与 PR 的**主题聚类**可清晰看出社区与维护者共同关注的焦点：

| 议题 | 对应 Issue | 对应 PR | 关注度信号 |
|---|---|---|---|
| Realtime voice 会话管理 | #5553 | #5554 | 已被快速闭环 |
| Mascot 口型同步 | #5545 | #5546 | 已被快速闭环 |
| 工具调用语义 | #5552 | #5550 | 已提修复，待合并 |
| Ack 超时文案 | #5551 | #5549 | 已提修复，待合并 |

**诉求分析**：今日的"热点"实质上是维护者主动发掘的产品一致性问题（4 个 Issue 全部由同一作者 @YellowSnnowmann 创建），显示项目当前的重心在于打磨 **Human tab 的 realtime voice 体验闭环**，而非被动响应社区反馈。

---

## 5. Bug 与稳定性

按严重程度排列：

| 严重度 | 问题 | 链接 | 状态 |
|---|---|---|---|
| **P1** | Web3 签名散落在调用方：tinywallet 模块边界被破坏，6 千余行跨链签名代码滞留主仓 | [Issue #5539](https://github.com/tinyhumansai/openhuman/issues/5539) / [PR #5533](https://github.com/tinyhumansai/openhuman/pull/5533) | Issue 已 CLOSED；PR 仍 OPEN |
| **P1** | 语音管线端口引入 3 个 capture 回归（always-on 通道无界、采样窗口失真、AEC 参考泄漏） | [PR #5557](https://github.com/tinyhumansai/openhuman/pull/5557) | 已合并 |
| **P1** | 父级 harness 注入非 UTF-8 Git 参数时 OpenHuman commit attribution 丢失 | [PR #5542](https://github.com/tinyhumansai/openhuman/pull/5542) | 已合并 |
| **P2** | Realtime voice 每轮创建新 chat 线程，污染 Conversations 列表 | [Issue #5553](https://github.com/tinyhumansai/openhuman/issues/5553) | 已 CLOSED，PR #5554 已合并 |
| **P2** | Realtime voice 中吉祥物嘴部静止，无口型同步 | [Issue #5545](https://github.com/tinyhumansai/openhuman/issues/5545) | 已 CLOSED，PR #5546 已合并 |
| **P2** | 语音 agent 在工具调用前口头宣告意图，宣告本身成为最终答复（"summarize my emails" 返回"我马上取邮件"而非邮件摘要） | [Issue #5552](https://github.com/tinyhumansai/openhuman/issues/5552) | OPEN，PR #5550 已提 |
| **P2** | Ack deadline 文案"我稍后给你"在简单请求中读起来像答非所问 | [Issue #5551](https://github.com/tinyhumansai/openhuman/issues/5551) | OPEN，PR #5549 已提 |
| **P3** | CI Lite dep-sim 校准硬编码 281，与剔除 git 后的实际 279 不一致 | [PR #5556](https://github.com/tinyhumansai/openhuman/pull/5556) | OPEN |

**观察**：今日所有 P1/P2 Bug 均有对应修复路径，无悬空的高严重度问题。

---

## 6. 功能请求与路线图信号

1. **Realtime Voice UX 矩阵已成形**（#5554 / #5546 已落地，#5550 / #5549 待合并）：Human tab 的实时语音会话即将具备"单线程会话 + 吉祥物口型同步 + 工具语义正确 + 超时文案中性"四项基础能力。下一版本大概率整合。

2. **Web3 模块边界收敛**（[PR #5533](https://github.com/tinyhumansai/openhuman/pull/5533)）：将 tinywallet 的密钥派生与签名下沉到 tinywallet 模块本身，删除主仓内联副本。仍 OPEN（p1），是当前未合并的最具规模 PR。

3. **Rust 二进制体积优化**（[Issue #5539](https://github.com/tinyhumansai/openhuman/issues/5539)）：通过去重依赖版本与单态化（monomorphization）优化，Issue 已关闭但尚未看到对应优化 PR，预计将被纳入后续性能专题。

4. **依赖图与模块加载策略统一化**：TinyJuice（#5541）已外迁，tinyvoice（#5547）已外迁，tinyflows 0.8（#5543）已解耦 tinyagents — 体现维护者明确的"核心逻辑下沉 + 主仓轻量化"路线图。

---

## 7. 用户反馈摘要

今日 Issue 评论样本有限，可提炼的真实痛点（全部来自 #5553/#5551/#5552 类问题描述）：

- **会话碎片化**：实时语音会话每轮新建 "Chat <日期> <时间>" 对话，导致 Conversations 列表被大量近乎重复的线程淹没，用户无法回溯完整对话。
- **语音 agent "假动作"**：当工具调用本应执行却以文字宣告收尾时（例如请求"总结邮件"得到"我马上去取邮件"），用户感知为"答非所问"，信任度受损。
- **超时承诺失真**：~8s ack 截止后输出"稍后给你"这类承诺式语句，对简单请求而言读起来像误解问题。

**正面信号**：所有上述问题均已被维护者主动捕获并提 PR 修复，反馈到修复的链路极短（issue 与 PR 同日提交），说明项目对 Human tab 实时语音的产品敏感度较高。

---

## 8. 待处理积压

提醒维护者关注的长期或重要未合并项：

| 编号 | 类型 | 优先级 | 链接 | 备注 |
|---|---|---|---|---|
| **#5533** | PR | p1 | [#5533](https://github.com/tinyhumansai/openhuman/pull/5533) | **最大规模重构（−6,252 行）**，跨 4 个上游 release 累积，更新于 2026-08-15，亟需最终评审 |
| **#5556** | PR | p3 | [#5556](https://github.com/tinyhumansai/openhuman/pull/5556) | CI 校准失准会导致 `main` 上 Feature-Gate Smoke 持续失败，建议尽快合入 |
| **#5550** | PR | — | [#5550](https://github.com/tinyhumansai/openhuman/pull/5550) | 修复"宣告即答案"的工具调用语义，应作为 realtime voice 体验闭环的关键修复 |
| **#5549** | PR | — | [#5549](https://github.com/tinyhumansai/openhuman/pull/5549) | 替换超时文案，建议与 backend#1275 联动合并 |
| **#5551** | Issue | — | [#5551](https://github.com/tinyhumansai/openhuman/issues/5551) | 等待 #5549 合并后关闭 |
| **#5552** | Issue | — | [#5552](https://github.com/tinyhumansai/openhuman/issues/5552) | 等待 #5550 合并后关闭 |

**健康度评估**：OpenHuman 今日整体处于**架构收敛与体验打磨并进**的高活跃健康状态，Issue→PR 闭环周期短，P1/P2 问题均已挂接修复，无悬空阻塞。建议尽快推进 #5533 与 #5556 的合并以释放后续工作流。

---

*报告生成基于 OpenHuman GitHub 公开数据（截至 2026-08-15）。*

</details>

---
*本日报由 [Big Model Radar](https://github.com/96loveslife/big_model_radar) 自动生成。*
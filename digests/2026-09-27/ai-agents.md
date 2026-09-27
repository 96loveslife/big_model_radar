# OpenClaw 生态日报 2026-09-27

> Issues: 500 | PRs: 500 | 覆盖项目: 8 个 | 生成时间: 2026-09-27 04:43 UTC

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

<think>Let me analyze the GitHub data for OpenClaw and generate a comprehensive daily report for 2026-09-27.

Key observations from the data:
1. **Activity Level**: Very high - 500 issues updated (414 active, 86 closed) and 500 PRs updated (368 pending, 132 merged/closed) in just 24 hours
2. **No releases** in the past 24 hours
3. **Major theme**: Memory leaks, crash loops, native memory issues, especially in 2026.9.5/2026.9.6 versions
4. **Top concern**: Stability regressions in recent versions, particularly around the prepared-model-catalog worker introduced in 9.6
5. **Active maintainers**: steipete, vincentkoc, roboclaw-bot seem to be active

Let me organize the report:

**Today's Highlights**:
- Massive activity: 500 issues + 500 PRs in 24 hours
- No new releases (likely stabilizing 2026.9.7 RC)
- Critical stability issues dominate discussion
- 9.5/9.6 versions have introduced multiple regression bugs

**Major Bug Themes**:
1. Native memory leak (~1 GiB/30s) - #155191, #154812, #157842, #156191, #157568
2. Plugin source capture disk fill - #156571, #157568, #157989
3. Update failures - #156112, #157812, #157319, #154924, #154679
4. Crash loops and gateway startup issues - #157325, #153257, #155859
5. CLI-budget compaction failures - #115546
6. Session state issues - #115908, #102020

**Notable PRs**:
- #159392 - Reuse resolved npm target metadata (perf)
- #159348 - Reduce Gateway blocking during image delivery
- #159226 - Adopt fs-safe watch for config/skills/memory (major refactor)
- #159255 - Harden native hook relay ownership (security)
- #158447 - Identify config-read child by env (P0 fix)
- #159327 - Update fs-safe to 0.21.0
- #156971 - Fix before_model_resolve on CLI dispatch path
- #126224 - Recover after catalog generation mismatch (P1)

**Closed PRs**:
- #159190 - Bound workspace provenance and dreaming reads
- #159411 - Test UI roster reply contracts

**Hot Issues**:
- #153257 (40 comments) - 9.5 made stable environment into 8-hour recovery
- #115908 (23 comments) - Session transcript projection livelock
- #42475 (23 comments) - Per-agent cost budget feature request
- #157842 (17 comments) - Worker retains 77MB per agent turn

Let me now structure this report properly with the Chinese language requirements.</think>

# OpenClaw 项目日报 — 2026-09-27

## 📌 今日速览

OpenClaw 今日进入**极高活跃期**，过去 24 小时内 Issues 与 PRs 更新量均触顶 500 条上限（Issues 活跃 414/已闭 86，PRs 待合并 368/已闭 132），但**未发布任何新版本**，说明社区目前聚焦在为 2026.9.7 RC 准备修复与重构。讨论主题高度集中于 **2026.9.5 / 2026.9.6 引入的稳定性回归**——尤其是原生内存泄漏（RSS 失控）、prepared-model-catalog worker 行为异常、插件源码快照写盘过快等 P0 级问题。维护者方面 @steipete、@vincentkoc、@roboclaw-bot 输出集中，fs-safe 0.21.0 升级与多轮 "deslop" 重构并行推进，整体节奏偏治理与质量修复而非新特性。

---

## 🚀 版本发布

**今日无新版本发布**。从 PR #159385、#159393 的描述可推断，2026.9.7 的 RC（候选发布）正在 CI 中进行最终验证，预计 9.27–9.28 窗口可能正式发布。

---

## 🛠 项目进展（今日合并/关闭的重要 PR）

| PR | 主题 | 影响 | 状态 |
|---|---|---|---|
| [#159190](https://github.com/openclaw/openclaw/pull/159190) | **perf(memory)**: 限定 workspace provenance 与 dreaming 读取范围 | 修复 SQLite 全表扫描造成的 memory-core 性能下降，关联 [#114612](https://github.com/openclaw/openclaw/issues/114612) 的 SQLite 无界增长 | ✅ 已合并 |
| [#159411](https://github.com/openclaw/openclaw/pull/159411) | **test(ui)**: 匹配标准化 roster 响应契约 | 修复 UI 测试在 roster hydration 标准化后的 5 个 CI 失败 | ✅ 已合并 |
| [#159392](https://github.com/openclaw/openclaw/pull/159392) | **perf(update)**: 复用已解析的 npm 目标元数据 | npm 升级从两次 metadata 请求降为一次，节省升级耗时 | 👀 待 maintainer 复核 |
| [#159348](https://github.com/openclaw/openclaw/pull/159348) | **improve**: 减少图片投递期间 Gateway 阻塞 | 将图片元数据写入从事件循环搬到 worker，提升发布体验 | 👀 待 maintainer 复核 |
| [#159226](https://github.com/openclaw/openclaw/pull/159226) | **refactor**: 全面采用 fs-safe watch 替代分散的 fs 监听 | 跨 config/skills/memory/dev supervision 的大重构，统一文件系统事件 API | 👀 待 maintainer 复核 |
| [#159327](https://github.com/openclaw/openclaw/pull/159327) | **chore(deps)**: 升级 fs-safe 至 0.21.0 | 修复 Linux 共享 /tmp 下临时目录的创建/清理问题 | 👀 待 maintainer 复核 |
| [#159255](https://github.com/openclaw/openclaw/pull/159255) | **fix(agents)**: 加固原生 hook relay 所有权 | 解决 Codex 重叠运行时 hook relay 注册被覆盖、teardown 误杀活跃监听的安全/可用性问题，P1 | 📣 等待 proof |
| [#158447](https://github.com/openclaw/openclaw/pull/158447) | **fix(updater)**: 用 env 而非 import 查询标识 config-read 子进程 | P0 修复 Bun Gateway 中无限衍生 config-read 子进程链（曾测得 8462 个后代进程） | 👀 待 maintainer 复核 |
| [#159421](https://github.com/openclaw/openclaw/pull/159421) | **fix(agents)**: 在 run 完成前结算 CLI MCP 资源 | 修复 CLI 准备阶段失败时跳过资源回收、终端结算误释放会话运行时的双 bug | 👀 待 maintainer 复核 |
| [#156971](https://github.com/openclaw/openclaw/pull/156971) | **fix(agents)**: CLI 调度路径调用 before_model_resolve | 让插件钩子在 CLI 分派回合也能触发（修复 claude-cli/codex/gemini 跳过 hook 的回归） | 📣 等待 proof |

**整体进度评估**：今日合并的 PR 数量较少（仅 2 条），但进入 "ready for maintainer look" 状态的重要 PR 有十余条——集中在 **fs-safe 收编、Gateway 性能、updater P0 修复** 三大方向，工程推进稳健但偏后期打磨，距离下一个稳定版本（2026.9.7）发布在即。

---

## 🔥 社区热点

### 评论数 TOP Issues

1. **[#153257](https://github.com/openclaw/openclaw/issues/153257) — 40 评论**
   *"OpenClaw 2026.9.5 把稳定环境变成 8 小时故障恢复"* — 用户 @abuegab1-spec 详述升级 9.5 后从一个稳定环境陷入一整天的连续修复，被标记为 P0 + ux-release-blocker。这是最具代表性的"升级恐惧"案例，反映社区对 9.5 稳定性的强烈不满。

2. **[#115908](https://github.com/openclaw/openclaw/issues/115908) — 23 评论**
   *Session transcript projection 在持续写入下活锁主线程* — 影响所有 channel transports 的严重问题，已关闭（说明修复已在路上）。

3. **[#42475](https://github.com/openclaw/openclaw/issues/42475) — 23 评论**
   *网关层 per-agent 成本预算强制执行* — 高互动功能请求，反映多 agent 部署下的成本失控焦虑。

4. **[#157842](https://github.com/openclaw/openclaw/issues/157842) — 17 评论**
   *prepared-model-catalog worker 每回合保留 77MB（永不释放）* — 2026.9.6 引入 worker 的核心病灶，已关闭。

5. **[#102020](https://github.com/openclaw/openclaw/issues/102020) — 16 评论**
   *会话中第二条消息失败 "reply session initialization conflicted"* — 跨通道、位置依赖的 P1 bug。

6. **[#114612](https://github.com/openclaw/openclaw/openclaw/issues/114612) — 16 评论**
   *memory-core SQLite 无界增长* — 长期未解决，但 PR #159190 已合并，预计进入 9.7。

### 讨论背后的诉求
- **稳定性 > 新功能**：40 评论的 P0 issue 全部是回归/崩溃，鲜有新功能诉求占据头部
- **运营可观测性**：多位用户呼吁更清晰的 doctor 状态、Provider 错误透传（#51336、#42252）
- **平台覆盖**：Windows / WSL / macOS 平台相关 issue 占比显著上升（#157067、#157812、#157568）

---

## 🐛 Bug 与稳定性

### 🔴 P0 严重（已报告 fix 或有 PR 跟进）

| Issue | 描述 | Fix 状态 |
|---|---|---|
| [#153257](https://github.com/openclaw/openclaw/issues/153257) | 9.5 升级后稳定环境陷入 8h 恢复 | 无 fix PR，需 maintainer 关注 |
| [#157325](https://github.com/openclaw/openclaw/issues/157325) | 僵死 agent-DB 资源导致所有 agent 回复失败 | 无 fix PR |
| [#156112](https://github.com/openclaw/openclaw/issues/156112) | `openclaw update` 在 npm 全局安装 swap 步骤失败 | 无 fix PR |
| [#156571](https://github.com/openclaw/openclaw/openclaw/issues/156571) | 9.5 model-catalog worker 在 tmp 泄漏插件源码（1-3 GB/分钟） | 无 fix PR |
| [#155859](https://github.com/openclaw/openclaw/issues/155859) | Gateway 启动时长随插件数线性增长 | 无 fix PR |
| [#157812](https://github.com/openclaw/openclaw/issues/157812) | Windows 自动升级反复失败（3 种失败模式） | 无 fix PR |
| [#157319](https://github.com/openclaw/openclaw/issues/157319) | 2026.9.6 升级校验失败 | 无 fix PR |
| [#155191](https://github.com/openclaw/openclaw/issues/155191) | 9.5 原生内存泄漏（RSS 每 30s 增 1GiB） | 无 fix PR（与 #157842、#157568 同一根因） |
| [#154812](https://github.com/openclaw/openclaw/issues/154812) | Gateway RSS 失控（达 9.32 GiB） | 无 fix PR |
| [#154679](https://github.com/openclaw/openclaw/issues/154679) | 9.6 升级中断导致 gateway 永久无法启动（exit 78） | 无 fix PR |
| [#154924](https://github.com/openclaw/openclaw/issues/154924) | 全局安装失败（9.4） | 无 fix PR |
| [#157989](https://github.com/openclaw/openclaw/issues/157989) | 插件源码快照每 CLI/Gateway 写入 1.1-6.5 GB | 无 fix PR |
| [#157568](https://github.com/openclaw/openclaw/issues/157568) | 9.6 WSL Gateway 4 分钟内重新长出 7.5 GB 插件捕获 | 无 fix PR |
| [#158114](https://github.com/openclaw/openclaw/issues/158114) | 启动迁移中断使 gateway 永久无法启动 | **已关闭** ✅ |
| [#109867](https://github.com/openclaw/openclaw/issues/109867) | beta.2 状态迁移在加列前先建索引 | **已关闭** ✅（👍 7，PR #159393 跟进） |
| [#157842](https://github.com/openclaw/openclaw/issues/157842) | model-catalog worker 每回合保留 77MB | **已关闭** ✅ |

### 🟠 P1 严重

| Issue | 描述 | Fix 状态 |
|---|---|---|
| [#115908](https://github.com/openclaw/openclaw/issues/115908) | transcript projection 活锁 | **已关闭** ✅ |
| [#157067](https://github.com/openclaw/openclaw/issues/157067) | Windows 隔离 cron 传递不可 clone 的 env Proxy | 无 fix PR（PR #158992 间接相关） |
| [#102020](https://github.com/openclaw/openclaw/issues/102020) | 会话第二条消息失败 | 无 fix PR |
| [#157630](https://github.com/openclaw/openclaw/issues/157630) | `--max-old-space-size` 静默覆盖 worker resourceLimits | 无 fix PR |
| [#115546](https://github.com/openclaw/openclaw/issues/115546) | CLI-budget compaction 超时提前触发（4.9s–50s） | 无 fix PR |
| [#113701](https://github.com/openclaw/openclaw/issues/113701) | 大工具输出撑爆上下文，compaction 无法恢复 | 无 fix PR |
| [#114234](https://github.com/openclaw/openclaw/issues/114234) | usage-cost 刷新锁在容器中永不可释放 | 无 fix PR（PR #49603 修复同类问题但已关闭） |
| [#115642](https://github.com/openclaw/openclaw/issues/115642) | 计费冷却在订阅类 auth 故障恢复后未解除 | 无 fix PR |
| [#157319](https://github.com/openclaw/openclaw/issues/157319) | 9.6 升级校验失败，codex 插件残留 | 无 fix PR |
| [#87561](https://github.com/openclaw/openclaw/issues/87561) | 跨通道最终回退投递语义未定义 | 无 fix PR |

### 🟡 回归与质量

| Issue | 描述 |
|---|---|
| [#40255](https://github.com/openclaw/openclaw/issues/40255) | 用户配置的 heartbeat 提示词不再被尊重 — **已关闭** ✅ |
| [#157989](https://github.com/openclaw/openclaw/issues/157989) | 插件源码快照高频重写（SSD 损耗风险） |

**Bug 健康度评估**：500 条 Issue 中已闭 86 条（17% 关闭率），低于健康水位；但 P0 中有 4 条今日关闭（#158114、#109867、#157842、#157568 中前两条），说明 maintainer 正集中清理升级相关崩溃链。

---

## 💡 功能请求与路线图信号

| Issue | 优先级 | 评估纳入下一版本可能性 |
|---|---|---|
| [#42475](https://github.com/openclaw/openclaw/issues/42475) **网关层 per-agent 成本预算** | P2 | **高** — 23 评论且无明显反对，社区需求强烈，可能随 9.7+ 进入 |
| [#76159](https://github.com/openclaw/openclaw/issues/76159) cron `acceptSilentStop` 标志 | P2 | **中** — 已关闭，说明已有方案在合入中 |
| [#76247](https://github.com/openclaw/openclaw/issues/76247) 跨 surface 投递 ACK/入口遥测 | P2 | **中** — 遥测需求与 [#87561](https://github.com/openclaw/openclaw/issues/87561)（最终回退投递语义）天然配套 |
| [#51336](https://github.com/openclaw/openclaw/issues/51336) Provider 名称透出到错误信息 | P2 | **高** — 简单 UX 改进，预计快速合并 |
| [#42591](https://github.com/openclaw/openclaw/issues/42591) `install.sh` 模块化拆分 | P3 | **中** — 中文社区提交，符合长期代码健康方向 |
| [#71335](https://github.com/openclaw/openclaw/issues/71335) gateway 模式下 `sync.watch` 默认 false | P2 | **中** — 多 agent 部署 fd 泄漏痛点 |

**路线图信号**：9.7 之后的方向很可能围绕 **(1) 多 agent 治理（成本、fd、调度）** 与 **(2) 跨通道投递可靠性** 展开。

---

## 💬 用户反馈摘要

### 主要痛点
1. **升级恐惧**：多位用户明确表示"后悔升级到 9.5/9.6"（[#153257](https://github.com/openclaw/openclaw/issues/153257)、[#154679](https://github.com/openclaw/openclaw/issues/154679)），反映版本稳定性信任受损
2. **磁盘耗尽**：plugin source capture 在 tmp 累积 1-3 GB/分钟（[#156571](https://github.com/openclaw/openclaw/issues/156571)），生产环境直接打爆磁盘
3. **恢复路径缺失**：多个 P0 issue 提及"无法自愈，必须手动介入"（[#157325](https://github.com/openclaw/openclaw/issues/157325)、[#158114](https://github.com/openclaw/openclaw/issues/158114)、[#154679](https://github.com/openclaw/openclaw/issues/154679)）
4. **Windows 平台体验差**：自动升级、cron 隔离、State 目录展开等多个 Windows-specific 问题集中爆发
5. **订阅类 Provider 误报**：Anthropic/Claude 订阅因 5h 冷却窗口被"锁死"（[#115642](https://github.com/openclaw/openclaw/issues/115642)），影响生产可用性

### 满意/正向反馈
- 9.4 → 9.5 跨大版本升级在某些 Linux 用户侧"顺利"
- fs-safe 0.21.0 升级（[#159327](https://github.com/openclaw/openclaw/pull/159327)）获得正面预期

---

## ⏰ 待处理积压（提醒维护者关注）

下列 issue/PR 已存在 30 天以上

---

## 横向生态对比

<think>The user wants me to generate a horizontal comparative analysis report based on the daily dynamics of the 7 open-source projects (OpenClaw, NanoBot, PicoClaw, IronClaw, LobsterAI, QwenPaw, Hermes Agent, OpenHuman). I need to produce a structured report with 7 sections in Chinese, professional and concise with data support.

Let me analyze the data carefully:

**Activity metrics summary:**
- OpenClaw: 500 Issues (414 active/86 closed), 500 PRs (368 pending/132 merged/closed), 0 releases - EXTREMELY HIGH
- NanoBot: 4 Issues, 15 PRs (13 open/2 closed), 0 releases - MEDIUM
- PicoClaw: 1 Issue, 3 PRs (1 open/2 closed), 0 releases - LOW
- IronClaw: 1 Issue, 1 PR update, 0 releases - LOW
- LobsterAI: 0 new Issues, 6 closed (stale), 12 PRs (2 open/10 closed), 0 releases - LOW
- QwenPaw: 6 Issues (4 active/2 closed), 4 PRs (all open), 0 releases - MEDIUM
- Hermes Agent: 50 Issues (37 active/13 closed), 50 PRs (50 open/0 closed), 0 releases - HIGH
- OpenHuman: 1 Issue, 17 PRs (8 open/9 merged/closed), 0 releases - MEDIUM-HIGH

**Common technical themes:**
1. MCP (Model Context Protocol) integration - OpenHuman (security/safety), NanoBot (pagination), Hermes Agent (PATH resolution)
2. Stability/memory issues - OpenClaw (memory leaks), Hermes Agent (session state)
3. Multi-channel/platform support - OpenClaw, NanoBot (Feishu/Telegram/Napcat), PicoClaw (QQ), QwenPaw (wecom)
4. CI/stale PR cleanup - LobsterAI, OpenHuman
5. Observability - OpenHuman (Langfuse), NanoBot (tokens/sec), OpenClaw (telemetry)
7. Web UI experience - QwenPaw (settings), PicoClaw (laggy), NanoBot (WebUI tokens/sec)
6. Platform-specific issues - Windows (Hermes Agent, OpenClaw, NanoBot), macOS (Hermes Agent)
8. Refactoring - OpenHuman (modularization), OpenClaw (fs-safe adoption)
9. Cron/scheduling - NanoBot (DST), QwenPaw (script execution), OpenClaw
10. Per-agent credentials/isolation - OpenHuman (Composio), OpenClaw (cost budget)

**Project positioning:**
- OpenClaw: Reference project, the most active, complex
- NanoBot: HKUDS academic, multi-channel focus
- PicoClaw: Sipeed (edge/embedded), small footprint
- IronClaw: NearAI (NEAR ecosystem, agent framework)
- LobsterAI: NetEase Youdao (AI + document collaboration)
- QwenPaw: AgentScope AI (Alibaba)
- Hermes Agent: Nous Research (LLM research)
- OpenHuman: Tinyhumans AI (personal AI assistant, Rust-based)

**Trend signals:**
1. Multi-agent governance becoming critical (cost budget, fd limits, scheduling)
2. MCP becoming a universal integration layer (with security concerns)
3. Session state consistency across platforms is the biggest pain point
4. Windows platform support needs attention
5. Observability requirements growing
6. Refactoring core into modules (Rust workspace pattern)
7. AI + document collaboration as a niche
8. Academic projects vs production-grade projects

Let me structure this carefully.

I should follow the thinking_mode instruction with detailed thinking, then provide the report.

The user wants Chinese output, professional, with data support, suitable for technical decision-makers and developers. Let me craft a clean, well-organized report.</think>

# 个人 AI 助手 / 自主智能体开源生态横向对比分析报告

**报告日期：2026-09-27 ｜ 覆盖项目：8 个**

---

## 一、生态全景

今日观察的 8 个开源项目（OpenClaw、NanoBot、PicoClaw、IronClaw、LobsterAI、QwenPaw、Hermes Agent、OpenHuman）共同勾勒出 **个人 AI 助手 / 自主智能体生态正处于"密集修缮 + 架构定型"的关键窗口**：头部项目（OpenClaw、Hermes Agent）单日活跃量已突破 500 条 Issue/PR 触顶线，中部项目（OpenHuman、NanoBot、QwenPaw）则密集推进模块化重构与稳定性收口，而尾部项目（IronClaw、PicoClaw、LobsterAI）则受困于社区互动冷清与 stale 积压。**整体无新版本发布**、**全部聚焦 P0/P1 修复**，反映出行业从"功能爆发期"过渡到"质量巩固期"的明显信号。**MCP 协议、跨通道一致性、Session 状态管理、可观测性** 是当前社区最高频的共识痛点。

---

## 二、各项目活跃度对比

| 项目 | Issues（24h） | PRs（24h） | Release | 主要维护者 | 健康度评估 | 当前阶段 |
|---|---|---|---|---|---|---|
| **OpenClaw** | 500（414 活跃/86 关闭） | 500（368 待/132 已闭） | ❌ 无 | @steipete、@vincentkoc、@roboclaw-bot | 🟡 中（高活跃但关闭率仅 17%） | 稳定性攻坚 + RC 收口 |
| **Hermes Agent** | 50（37 活跃/13 关闭） | 50（50 待/0 合并） | ❌ 无 | NousResearch 核心团队 | 🟢 中（PR 全待合但方向明确） | 平台兼容性 + Windows 攻坚 |
| **OpenHuman** | 1（1 活跃/0 关闭） | 17（8 待/9 已闭） | ❌ 无 | @tinysweeper[bot] + 核心 | 🟢 良（合并率 53%，CI 修复落地） | 架构拆分 + 安全加固 |
| **NanoBot** | 4（4 活跃/0 关闭） | 15（13 待/2 已闭） | ❌ 无 | @2gg-bit（单人贡献 8 PR） | 🟡 中（PR 评审积压） | 清扫式修复 + 单点风险 |
| **QwenPaw** | 6（4 活跃/2 关闭） | 4（4 待/0 合并） | ❌ 无 | AgentScope AI | 🟢 良（提交质量高） | 控制台打磨 + i18n |
| **LobsterAI** | 6（0 活跃/6 stale 关闭） | 12（2 待/10 已闭） | ❌ 无 | @fisherdaddy（单人主导） | 🟠 偏低（半年无版本） | stale 清理 + 单点维护 |
| **PicoClaw** | 1（1 活跃/0 关闭） | 3（1 待/2 已闭） | ❌ 无 | Sipeed | 🟠 偏低 | 维持性维护 |
| **IronClaw** | 1（1 活跃/0 关闭） | 1（1 待/0 合并） | ❌ 无 | NearAI | 🟠 偏低 | 安静期 + 提案接洽 |

**关键观察**：
- **零版本发布日**：8/8 项目今日无新 Release，行业整体进入"代码冻结、密集修缮"模式
- **OpenClaw 是绝对头部**：Issues/PRs 量级相当于 Hermes Agent 的 10 倍、其他项目 30–500 倍
- **单点风险普遍**：NanoBot、LobsterAI 出现单一贡献者占比 50%+ 的现象，长期可持续性需关注
- **Stale 治理成为常态**：LobsterAI 一次性清理 14 条陈旧条目，OpenHuman 也在批量关闭废弃模块

---

## 三、OpenClaw 在生态中的定位

| 维度 | OpenClaw | 与同类典型差异 |
|---|---|---|
| **功能完整度** | ⭐⭐⭐⭐⭐ | 全功能"agent OS"：含 Memory、Skills、Plugins、Channels、Gateway、Updater 全栈 |
| **社区规模** | ⭐⭐⭐⭐⭐ | 单日 500+ Issues/PRs 触顶，与 Hermes Agent 拉开 10 倍量级差距 |
| **技术路线** | 多运行时（Bun/Node）、fs-safe 统一 watcher、prepared-model-catalog worker、CLI-budget 压缩 | 比 Hermes Agent 多了专门的 compaction 与 catalog worker；比 OpenHuman（纯 Rust）走的是多运行时路径 |
| **平台覆盖** | macOS / Windows / Linux / WSL / Docker | 与 OpenHuman、IronClaw 同档；Hermes Agent 同样强调 Windows native |
| **集成深度** | 多 Provider、多 Channel（10+）、多 Surface | NanoBot 同样多通道但更轻量；QwenPaw/LobsterAI 集中桌面端 |
| **成熟度** | 已发 2026.9.5/9.6，正在做 2026.9.7 RC | IronClaw、PicoClaw 仍处于功能型维护；OpenHuman 处于 pre-release |

**核心差异化优势**：
1. **最完整的"AI Agent 全栈参考实现"**——其他项目更像是 OpenClaw 某个模块的"轻量化分支"
2. **fs-safe、prepared-model-catalog、CLI-budget 等基础设施级抽象**已沉淀为行业范式
3. **维护者集中度可控**（3 位核心 maintainer），组织化程度优于单人主导项目
4. **升级窗口管理意识强**——9.5 引发大量 P0 回归后已建立 ux-release-blocker 标签体系

**主要短板**：稳定性回归频繁、版本信任受损（[#153257](https://github.com/openclaw/openclaw/issues/153257) "后悔升级"）、磁盘/内存资源控制不力（plugin source capture 1–3 GB/分钟）。

---

## 四、共同关注的技术方向

下表列出**多项目同时出现的需求或痛点**，反映行业级共识：

| 共同方向 | 涉及项目 | 具体诉求 | 信号强度 |
|---|---|---|---|
| **MCP 协议深化** | OpenHuman（凭据安全、工具直连）、NanoBot（工具分页）、Hermes Agent（PATH 管理） | 安全暴露、统一调度、跨 server 凭据隔离 | 🔥🔥🔥 强烈 |
| **Session / 会话状态一致性** | OpenClaw（transcript 活锁）、Hermes Agent（Bot Mode 中断）、OpenHuman（Desktop resume）、NanoBot（飞书 checkpoint 泄露） | 跨 surface 同步、删除持久化、跨 host 切换 | 🔥🔥🔥 强烈 |
| **多通道适配层统一化** | OpenClaw、Windows Cron；NanoBot（飞书/Telegram/Napcat/邮件）、PicoClaw（QQ）、QwenPaw（wecom）、Hermes Agent（Slack/Discord/Telegram） | 协议细节差异、错误处理统一、附件解析 | 🔥🔥🔥 强烈 |
| **可观测性 / 遥测** | NanoBot（WebUI tokens/sec）、OpenHuman（Langfuse OTLP）、OpenClaw（provider 错误透传 #51336） | 流式延迟可视化、trace 导出、错误归因 | 🔥🔥 中等 |
| **成本/资源治理** | OpenClaw（per-agent budget #42475）、Hermes Agent（turn-lease queue）、QwenPaw（TaskTracker 一致性） | 多 agent 调度下成本失控、fd 泄漏 | 🔥🔥 中等 |
| **Windows 平台兼容性** | OpenClaw（升级 3 种失败模式）、Hermes Agent（updater / PID / QuickEdit）、NanoBot（CRLF） | PID 检测、updater、HMR、native install | 🔥🔥 中等 |
| **Stale / CI 治理** | LobsterAI（批量关闭 14 条）、OpenHuman（#6693 main 红）、OpenClaw（PR #159190 性能合并） | main 红灯修复、stale bot 误关、模块拆分 | 🔥 中等 |
| **Cron / 定时任务增强** | NanoBot（DST 漂移 #5922）、QwenPaw（脚本执行 #4963）、OpenClaw（acceptSilentStop #76159） | 时区、夏令时、原生脚本支持 | 🔥 中等 |

---

## 五、差异化定位分析

| 项目 | 功能侧重 | 目标用户 | 技术架构关键差异 |
|---|---|---|---|
| **OpenClaw** | 全功能 agent OS（Memory+Skills+Channels+Plugins） | 多 agent 部署者、生产级用户、企业运维 | 多运行时（Bun/Node）、fs-safe 统一 watcher、prepared-catalog worker |
| **NanoBot** | 多通道轻量 agent、WebUI 优先 | 研究者、Hackathon 用户、轻量级个人助手 | 学术派（HKUDS）、单一贡献者主导、多渠道适配层显式 |
| **PicoClaw** | 嵌入式 / 边缘场景 QQ/Telegram bot | Sipeed 硬件用户、极简开发者 | 极小 footprint、QQ 通道深耕、stale 治理待优化 |
| **IronClaw** | NEAR 生态链上 agent、AI + DeFi | Web3 开发者、NEAR 生态玩家 | MCP-first、链上工具链扩展、hosted-MCP 架构探索 |
| **LobsterAI** | AI + 文档协作（Word/Markdown）、桌面端 | 知识工作者、文档密集用户 | Electron 桌面、Markdown 实时编辑重构、openclaw 网关集成 |
| **QwenPaw** | 控制台打磨、i18n、企业微信 | 国内企业用户、跨国团队 | Qwen 生态、设计语言统一、control plane 优先 |
| **Hermes Agent** | LLM agent 基础设施、模型路由 | 研究者、模型实验者、多 surface 桌面用户 | LCM 外部 context engine、Windows native 优先、turn-lease 调度 |
| **OpenHuman** | 个人 AI 助手 + Rust 工具链、性能敏感场景 | 开发者、安全敏感用户 | Rust workspace（rpc/tinyhumans/search 多 crate）、Sentry/TinyHumans SDK 集成 |

**关键差异化点**：
- **学术派 vs 工业派**：NanoBot、IronClaw、Hermes Agent 偏学术/前沿探索；OpenClaw、LobsterAI、QwenPaw 偏生产落地
- **轻量 vs 全功能**：PicoClaw < NanoBot ≈ OpenHuman < QwenPaw < Hermes Agent < OpenClaw
- **Web3 vs 传统**：IronClaw 是唯一专注链上金融场景
- **桌面 vs 服务端**：LobsterAI、QwenPaw 强桌面；OpenClaw、Hermes Agent 双端；NanoBot/PicoClaw 偏服务端
- **多语言 vs 单一市场**：Hermes Agent 推进波斯语 RTL（[#112035](https://github.com/NousResearch/hermes-agent/pull/112035)），NanoBot 中文用户为主，QwenPaw 国际化

---

## 六、社区热度与成熟度分层

### 🟢 快速迭代层（头部 2 个）

- **OpenClaw**：单日 1000 条互动，全功能持续演进，受"升级恐惧"困扰但活跃度极高
- **Hermes Agent**：Windows native 攻坚期，PR 评审积压但提交密度健康，PR 全待合并暗示合并流水线紧张

### 🟡 质量巩固层（中部 3 个）

- **OpenHuman**：合并率 53%，CI 修复落地，处于"重构收口 → pre-release"窗口
- **NanoBot**：清扫式修复日，单一贡献者占比 80%+，评审积压信号明显
- **QwenPaw**：提交质量高、议题针对性强，控制台打磨主线明确，但功能请求（如 #4963 脚本执行）搁置 110+ 天

### 🟠 维护收缩层（尾部 3 个）

- **LobsterAI**：6 个月无版本发布，单一维护者 @fisherdaddy 主导，存在"stale 误关核心 fix"风险
- **IronClaw**：1 Issue + 1 PR 的安静日，CI 知识图谱刷新（[#7988](https://github.com/nearai/ironclaw/pull/7988)）已挂起 30 天
- **PicoClaw**：QQ 通道持续薄弱，自动化 PR 噪音（[#3310](https://github.com/sipeed/picoclaw/pull/3310)），社区反馈渠道冷清

**成熟度信号**：
- **头部项目**已建立标签体系（ux-release-blocker、stale-bot、P0/P1）、CI gating、E2E 守门
- **中部项目**开始模块化拆分（OpenHuman 的 3 crate 拆分、OpenClaw 的 fs-safe 收编）
- **尾部项目**普遍受困于"单一贡献者 + 缺乏 review bandwidth + stale 治理工具粗糙"

---

## 七、值得关注的趋势信号

### 1. **MCP 协议成为 AI Agent 集成的"准标准"**
- **信号**：OpenHuman 安全修复 [#6688](https://github.com/tinyhumansai/openhuman/pull/6688)、NanoBot 分页修复 [#5916](https://github.com/HKUDS/nanobot/pull/5916)、Hermes Agent PATH 管理 [#124792](https://github.com/NousResearch/hermes-agent/pull/124792) 同期出现
- **行业含义**：MCP 已在 3 个月内从"新协议"演进为"事实标准"，未来 AI 智能体开发应**默认假设 MCP 是工具/资源层的第一选项**，并**优先设计凭据隔离与权限边界**

### 2. **Session 状态管理是跨平台最大痛点**
- **信号**：OpenClaw transcript projection 活锁（#115908）、Hermes Agent 多 surface 切换丢 tab（#120106）、OpenHuman Desktop resume 空白（#124789）"三连发"
- **行业含义**：跨 surface（desktop/mobile/web/gateway）同步是 2026 下半年的硬骨头；建议采用 **CRDT-style / lease 机制 + 服务端真源**架构

### 3. **"升级恐惧"成为大型 agent 框架的共性危机**
- **信号**：OpenClaw 9.5/9.6 多次引发 [#153257](https://github.com/openclaw/openclaw/issues/153257) "后悔升级"，PR #158447 紧急修复 Bun gateway 进程泄漏（8462 个子进程链）
- **行业含义**：**功能

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

<think>The user wants me to generate a daily project report for NanoBot based on the GitHub data provided. Let me analyze the data carefully and create a well-structured report in Chinese.

Let me analyze the data:

**Overview:**
- 24h Issues: 4 (all open, no closed)
- 24h PRs: 15 (13 open, 2 closed)
- No new releases

**Issues (4):**
1. #5908 - WebUI streaming tokens/sec indicator (p2) - 4 comments
2. #5903 - Feishu hidden session-checkpoint marker bug - 3 comments
3. #5929 - Feishu bot-to-bot messages in groups
4. #5924 - Agent stuck in sudo loop

**PRs (15):**
- Closed (2): #5916 (MCP tools pagination), #5919 (Linear workspace)
- Open (13): Many bug fixes from @2gg-bit (8 PRs), plus others

Let me organize this into the required 8 sections:

1. 今日速览 - overall summary
2. 版本发布 - none
3. 项目进展 - closed PRs
4. 社区热点 - most discussed
5. Bug 与稳定性 - bug reports
6. 功能请求与路线图信号 - feature requests
7. 用户反馈摘要 - user feedback
8. 待处理积压 - backlog

Key observations:
- @2gg-bit is very active, opening many bug fix PRs (8 in this batch)
- Two PRs were closed today: #5916 (MCP fix) and #5919 (Linear feature)
- The Feishu bot-to-bot issue #5929 has a corresponding fix PR #5930
- Issue #5247 PR is quite old (created Aug 5, updated today) - that's a backlog item
- The most commented issues are #5908 (4 comments) and #5903 (3 comments)

Let me write the report now. I should follow the thinking_mode instruction and provide detailed thinking first, then the response.

For the report, I need to:
- Be objective and professional
- Data-driven
- Highlight project health
- Each item should have a GitHub link
- Use Chinese language as requested

Let me structure the URLs consistently:
- Issues: https://github.com/HKUDS/nanobot/issues/XXXX
- PRs: https://github.com/HKUDS/nanobot/pull/XXXX

Note: The repository name in the URL is "nanobot" (HKUDS/nanobot) but the project name is "NanoBot". I'll use "NanoBot" for project name and "nanobot" for repository references where appropriate.

Let me write this out properly.</think>

# NanoBot 项目日报 · 2026-09-27

> 数据来源：[HKUDS/nanobot](https://github.com/HKUDS/nanobot) GitHub Issues / Pull Requests
> 数据窗口：过去 24 小时（2026-09-26 → 2026-09-27）

---

## 一、今日速览

NanoBot 今日呈现**高活跃度的集中修复日**特征：24 小时内共有 15 个 PR 提交、4 个新活跃 Issue，但**无新版本发布**、**PR 零合并**（当日仅 2 个 PR 被关闭）。修复工作高度集中在单一贡献者 **@2gg-bit** 身上，单人贡献了 8 个跨模块的 bug 修复 PR（涵盖 Telegram 路由、邮件解码、通知评估、网页抓取、文件换行、Cron 时区、日志流关闭、Unicode 截断等），显示出一种"清扫式"提交节奏。整体而言，项目处于**密集修缮阶段**而非功能演进阶段，社区未关闭积压有所增加，需关注后续评审与合入进度。

---

## 二、版本发布

⚠️ **今日无新版本发布。** 最近一次发布情况未在本次数据中体现，建议关注 [Releases 页面](https://github.com/HKUDS/nanobot/releases)。

---

## 三、项目进展

### 今日关闭的 PR（2 个）

| PR | 标题 | 价值 |
|---|---|---|
| [#5916](https://github.com/HKUDS/nanobot/pull/5916) | `fix(mcp): load all pages of server tools before registration` | **已关闭** · 修复 MCP 工具发现不完整问题。此前 `connect_mcp_servers()` 仅注册 `tools/list` 响应的第一页，分页工具始终不可用，该修复保证 MCP 集成可用性。 |
| [#5919](https://github.com/HKUDS/nanobot/pull/5919) | `feat(linear): manage member access and simplify workspace connections` | **已关闭** · 让管理员从 WebUI 直接控制 Linear agent 的成员访问权限，避免全员交换配对码的繁琐流程。属于 WebUI 管理能力的功能改进。 |

📌 **整体推进判断**：今日虽无 PR 被 merge，但 Feishu 多机器人支持（[#5930](https://github.com/HKUDS/nanobot/pull/5930)）和 sudo 循环修复（[#5257](https://github.com/HKUDS/nanobot/pull/5257)）均处于活跃更新中，处于"可评审/可合入"窗口。**项目整体功能方向未明显推进，稳定性侧显著修复**，但合入节奏滞后于提交节奏。

---

## 四、社区热点

按评论数排序，今日讨论最活跃的 Issue 为：

1. **[#5908](https://github.com/HKUDS/nanobot/issues/5908)** – `feat(webui): show live tokens/sec while streaming a reply`（4 评论）
   - 用户希望在 WebUI 流式回复时实时显示 `tokens/sec` 指标，用以判断模型生成是否正常或停滞。
   - 该需求涉及流式输出 UX 改进，与"可观测性"诉求一致，**有望纳入下一版本 WebUI 增强**。

2. **[#5903](https://github.com/HKUDS/nanobot/issues/5903)** – `Feishu: hidden session-checkpoint marker is delivered to the user after idle compaction`（3 评论）
   - 用户反馈 Feishu（飞书）通道在 idle compaction 之后，把内部的 session-checkpoint 文本"Continue the active task from the working-memory checkpoint above."作为普通聊天消息发给用户。
   - 这是**隐私/误投递问题**，直接影响终端用户体验，且只能在飞书通道复现——存在明显的渠道特定缺陷。

3. [#5929](https://github.com/HKUDS/nanobot/issues/5929) – `feishu: allow bot-to-bot messages in groups`（0 评论 · 已直接配套 PR [#5930](https://github.com/HKUDS/nanobot/pull/5930)）
   - 实际上形成了一组典型的"Issue+PR 联动"，开发响应非常及时。

> 💡 **诉求分析**：当前社区讨论集中在"流式可视化"+"飞书通道缺陷"两件事。前者反映 WebUI 体验不足；后者反映飞书渠道在多机器人协作场景下的协议处理存在一致性偏差。

---

## 五、Bug 与稳定性

按严重程度排列：

### 🔴 P1（紧急）
- **[PR #5922](https://github.com/HKUDS/nanobot/pull/5922)** – `fix: 使用本地时区规则计算 cron 下次运行时间` (**[p1]**)
  - **问题**：`CronSchedule.tz` 未显式设置时，`_compute_next_run()` 使用 `datetime.now().astimezone().tzinfo`，仅保留 UTC 偏移，**缺失夏令时规则**。
  - **影响**：跨季节定时任务会**偏移一小时**误执行（如纽约冬→夏）。任务调度类严重问题。
  - **状态**：已有 fix PR，来自 @2gg-bit。

### 🟡 P2（一般严重，多个并存）
| Issue / PR | 描述 | 已有 Fix？ |
|---|---|---|
| [#5924](https://github.com/HKUDS/nanobot/issues/5924) | **Agent sudo 循环卡死** – sudo 仅持续一轮，agent 进入死循环 | ❌ 无对应 PR，需关注 |
| [#5903](https://github.com/HKUDS/nanobot/issues/5903) | Feishu 内部 checkpoint 标记泄露给用户 | ❌ 无对应 PR |
| [#5931](https://github.com/HKUDS/nanobot/pull/5931) | Telegram 命令换行参数丢失、邮箱被截断 | ✅ fix PR 已开 |
| [#5257](https://github.com/HKUDS/nanobot/pull/5257) | Sustained-goal 持续触发空答复（**长期未合入**，自 2026-08-05 开放） | ✅ fix PR 已开（评审中） |
| [#5914](https://github.com/HKUDS/nanobot/pull/5914) | Napcat 图片 `file_size` 非数字时整条消息被丢弃 | ✅ fix PR 已开 |
| [#5928](https://github.com/HKUDS/nanobot/pull/5928) | 邮件未知字符集导致 `LookupError` 中断收件轮询 | ✅ fix PR 已开 |
| [#5927](https://github.com/HKUDS/nanobot/pull/5927) | 通知评估器把字符串 `"false"` 当作 `True` | ✅ fix PR 已开 |
| [#5926](https://github.com/HKUDS/nanobot/pull/5926) | URL 重复抓取检查误判大小写不同路径/查询参数 | ✅ fix PR 已开 |
| [#5925](https://github.com/HKUDS/nanobot/pull/5925) | Windows 上 `write_file` 把 LF 改写成 CRLF | ✅ fix PR 已开 |
| [#5923](https://github.com/HKUDS/nanobot/pull/5923) | 图片 base64 含非 ASCII 字符会逃逸异常转换 | ✅ fix PR 已开 |
| [#5921](https://github.com/HKUDS/nanobot/pull/5921) | 已关闭的 `RotatingTextOutput` 流被重新打开 | ✅ fix PR 已开 |
| [#5920](https://github.com/HKUDS/nanobot/pull/5920) | token 截断产生 `` 替换字符 | ✅ fix PR 已开 |
| [#5918](https://github.com/HKUDS/nanobot/pull/5918) | 工具参数 JSON Schema union 类型被错误转换 | ✅ fix PR 已开 |

📊 **统计**：今日 13 个开放 PR 中 **12 个为 bug 修复**，其中 11 个标记为 p2、1 个 p1。**已派发 fix PR 的覆盖率很高**（>90%），主要风险集中在两个还没有 fix 的 Issue：sudo 卡死（[#5924](https://github.com/HKUDS/nanobot/issues/5924)）和飞书 checkpoint 泄露（[#5903](https://github.com/HKUDS/nanobot/issues/5903)）。

---

## 六、功能请求与路线图信号

| 诉求 | 来源 | 配套 PR | 评估 |
|---|---|---|---|
| WebUI 流式 `tokens/sec` 实时指示器 | [#5908](https://github.com/HKUDS/nanobot/issues/5908) | ❌ 暂无 | 可观测性诉求，**与 2.0 WebUI 主线契合**，优先级 p2 |
| 飞书支持群内 bot-to-bot 消息（白名单 + 跳数限制） | [#5929](https://github.com/HKUDS/nanobot/issues/5929) | ✅ [#5930](https://github.com/HKUDS/nanobot/pull/5930) | 已基本就绪，等评审 |
| Linear 工作区成员管理与简化连接 | [#5919](https://github.com/HKUDS/nanobot/pull/5919) | ✅ 已闭环（closed） | 等待后续 |
| Sustained-goal continuation 边界 | [#5257](https://github.com/HKUDS/nanobot/pull/5257) | ✅ PR 已开（aged） | 长期 backlog，需维护者关注 |

🧭 **路线图信号**：
- **WebUI 可观测性**是当前明显缺口，至少一个 p2 资源投入于此。
- **飞书渠道深耕**：今日 2 个 Issue（泄露 + bot-to-bot）+ 1 个 PR，呈现"飞书专项"集中模式。
- **多通道一致性**：Telegram、飞书、Napcat、邮件在不同日期集中暴露细节差异，显示 **多渠道适配层需要进一步统一化**。

---

## 七、用户反馈摘要

从 Issue 评论区提炼的真实痛点（按主题）：

1. **可观测性缺失**："流式回复时没法判断模型是不是在工作/卡住" ([#5908](https://github.com/HKUDS/nanobot/issues/5908))——典型原因：用户对延迟敏感，但又没有量化指标。

2. **多渠道行为不一致**：飞书用户被系统内部文本骚扰（[#5903](https://github.com/HKUDS/nanobot/issues/5903)），Telegram 命令在多行输入时丢失参数（[#5931](https://github.com/HKUDS/nanobot/pull/5931)），Napcat 因图片大小声明缺字段丢消息（[#5914](https://github.com/HKUDS/nanobot/pull/5914)）。**说明：渠道适配层仍存在碎片化痛点**。

3. **自动化/人机协作失灵**：sudo 循环（[#5924](https://github.com/HKUDS/nanobot/issues/5924)）和 cron 跨季节漂移（[#5922](https://github.com/HKUDS/nanobot/pull/5922)）是**机器/人/任务链**共有的两类"自动化反咬一口"问题——前者导致 agent 不可用，后者静默误执行。

4. **国际/本地化兼容**：Windows CRLF 隐式转换（[#5925](https://github.com/HKUDS/nanobot/pull/5925)）、Unicode 截断产生 ``（[#5920](https://github.com/HKUDS/nanobot/pull/5920)）表明 **跨平台与多语言**仍是长期底盘工作的方向。

> 综合来看，社区的"**满意度信号**"集中在：项目响应速度较快（多数 bug 当日就有 fix PR），修复 PR 都附带回归测试；"**不满意信号**"集中在：飞书通道错误行为、Telegram 命令解析粗糙、Agent 进入"卡死循环"无人值守。

---

## 八、待处理积压

以下 PR/Issue 已开放较长时间或当日需要提醒维护者重点处理：

| 编号 | 类型 | 标题 | 创建日期 | 风险 |
|---|---|---|---|---|
| [#5257](https://github.com/HKUDS/nanobot/pull/5257) | PR | `fix(agent): bound sustained-goal continuation when the turn goes idle` | 2026-08-05（**53 天前**） | 当前最老旧 PR，每隔多日仍被 rebase/重推，**阻塞** agent 行为正确性 |
| [#5908](https://github.com/HKUDS/nanobot/issues/5908) | Issue | WebUI 实时 tokens/sec | 2026-09-24 | 评论活跃、需求明确，**无 PR 跟进** |
| [#5903](https://github.com/HKUDS/nanobot/issues/5903) | Issue | Feishu checkpoint 标记泄露 | 2026-09-24 | 用户可见的隐私/误投递，**无 PR 跟进** |
| [#5924](https://github.com/HKUDS/nanobot/issues/5924) | Issue | Agent sudo 循环卡死 | 2026-09-26 | 直接令 agent 不可用，**无 PR 跟进** |

🔔 **维护者建议关注**：
1. 评估 PR [#5257](https://github.com/HKUDS/nanobot/pull/5257) 是否可纳入下一轮合入；
2. 给 Issue [#5903](https://github.com/HKUDS/nanobot/issues/5903)、[#5924](https://github.com/HKUDS/nanobot/issues/5924) 分配 owner 或附加社区求助标签。

---

### 📊 项目健康度指标（本日）

| 维度 | 取值 | 解读 |
|---|---|---|
| 24h 活跃 Issue | 4 | 中等热度，含可观测性、隐私、agent 行为等真实诉求 |
| 24h 新开 PR | 15（13 开放 + 2 关闭） | 高提交 |
| 24h 合并 PR | 0 | **合入节奏滞后于提交** |
| Bug-fix PR 占比 | 12/13（≈92%） | 偏重稳定性而非新功能 |
| 已有 fix 的 Issue 比例 | 11/14 ≈ 79% | 修复覆盖率高 |
| 主要贡献者集中度 | @2gg-bit 单人贡献 8 个 PR | **贡献者结构集中，单点风险偏高** |
| 平均 PR 待评审时长 | 数日 — 50+ 天均有 | 评审积压存在 |

> 一句话总结：**今天是"清扫式修复日"，质量信号良好，但合入与评审流水线需要提速；同时单一贡献者占比过高，长期需补强 reviewer 与维护带宽。**

---

*报告基于 GitHub 公开数据自动整理，所有链接指向 [HKUDS/nanobot](https://github.com/HKUDS/nanobot) 仓库。*

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

<think>The user wants me to generate a project daily report for PicoClaw based on GitHub data. Let me analyze the data carefully:

**Data Overview:**
- Past 24 hours Issues updates: 1 (new/active: 1, closed: 0)
- Past 24 hours PR updates: 3 (pending: 1, merged/closed: 2)
- New releases: 0

**Issues:**
1. #3394 - [OPEN] [BUG] QQ bot interface updated but QQ chat channel interface seems not updated
   - Author: @qinglt
   - Created: 2026-09-26
   - Comments: 0
   - Likes: 0

**Pull Requests:**
1. #3347 - [OPEN] [stale] fix laggy interface
   - Author: @iMilnb
   - Created: 2026-08-27
   - Updated: 2026-09-26
   
2. #3310 - [CLOSED] Feat/auto pr
   - Author: @j-v
   - Created: 2026-08-02
   - Updated: 2026-09-26
   - Summary: "picoclanker did this"

3. #1349 - [CLOSED] [type: enhancement, domain: channel, go] feat(qq): support parsing and replying to more attachment types
   - Author: @aishannon
   - Created: 2026-03-11
   - Updated: 2026-09-26
   - This is about QQ Channel attachment parsing - emoji, voice, image, video, file

Now I need to create a structured daily report in Chinese. Let me think about the analysis:

1. **今日速览**: 
   - 项目今日活跃度较低，1个新Issue，0个新版本
   - 有2个PR被关闭（#3310 auto PR, #1349 QQ附件支持），1个PR仍待处理
   - 整体来看，项目处于维护状态，没有重大新功能发布

2. **版本发布**: 无新版本

3. **项目进展**:
   - PR #1349 关闭 - QQ通道附件类型解析功能（注意：此PR创建于3月，关闭于9月，需要分析关闭原因）
   - PR #3310 关闭 - 自动PR功能（"picoclanker did this"看起来像是机器人自动创建后关闭）
   - 需要注意的是，#1349是QQ通道附件增强功能被关闭，而#3394恰恰是QQ接口相关Bug被提出，可能存在关联

4. **社区热点**: 
   - 唯一活跃Issue是#3394关于QQ通道接口更新问题
   - 没有太多讨论

5. **Bug 与稳定性**:
   - #3394 是新报告的Bug，关于QQ机器人接口更新后QQ聊天通道未跟进
   - 严重程度：中等 - 影响使用QQ通道的用户

6. **功能请求与路线图信号**:
   - #3347 修复Web UI卡顿问题（stale标记，待合并）
   - #1349 关闭 - QQ通道增强功能未合并

7. **用户反馈摘要**:
   - 从Issue#3394看出QQ通道用户对接口同步问题有困扰

8. **待处理积压**:
   - #3347 stale 状态的Web UI卡顿修复PR
   - 长期积压的QQ通道相关需求

让我组织一份专业的日报。</think>

# PicoClaw 项目日报

**日期：2026-09-27**
**数据周期：过去 24 小时**

---

## 1. 今日速览

PicoClaw 项目今日整体活跃度偏低，处于常规维护状态。过去 24 小时内仅有 1 条新 Issue 被提出、3 条 PR 出现状态更新，无新版本发布。从数据信号看，社区围绕 **QQ 通道** 的问题集中显现：一条新 Bug 报告与一条早前提交的功能增强 PR 在同一日产生状态变化，提示维护者需要重点关注 QQ 通道链路的整体健康度。整体健康度评估：**中等偏低**，需关注待合并 PR 的积压。

---

## 2. 版本发布

⚠️ 本周期内 **无新版本发布**。建议关注主分支提交与下一次发版规划。

---

## 3. 项目进展

| PR | 标题 | 状态 | 意义 |
|---|---|---|---|
| [#1349](https://github.com/sipeed/picoclaw/pull/1349) | feat(qq): support parsing and replying to more attachment types | 已关闭 | 该 PR 旨在为 QQ 通道增加对 emoji、语音、图片、视频、文件等附件类型的解析与回复能力，**但未被合并**。考虑到今日 #3394 又报告 QQ 接口同步问题，QQ 通道是该项目的薄弱环节。 |
| [#3310](https://github.com/sipeed/picoclaw/pull/3310) | Feat/auto pr | 已关闭 | 描述为 "picoclanker did this"，疑似自动化机器人提交的试验性 PR，已被关闭，未对主分支产生影响。 |

**整体进度评估**：今日并无实质性功能被合入主线。QQ 通道附件增强方案（#1349）从 3 月提出至 9 月关闭未合并，是一条值得复盘的搁置需求。

---

## 4. 社区热点

本期热度集中度较高（议题数量少），主要焦点为：

- 🔥 **[#3394](https://github.com/sipeed/picoclaw/issues/3394) [BUG] QQ 机器人的接口更新了，但 QQ 聊天通道的接口似乎没有更新** — 作者 @qinglt
  - **诉求分析**：用户明确指出上游 QQ 机器人接口已变更，但 PicoClaw 的 QQ 聊天通道适配层未跟进。这是一个典型的 **外部依赖变更引发的兼容性问题**，属于高优先级。
  - 当前 0 评论、0 👍，但因与 #1349 议题方向高度重合（均为 QQ 通道能力缺失），建议维护者优先确认两者是否可联动处理。

---

## 5. Bug 与稳定性

| 严重度 | Issue | 描述 | 是否已有 Fix PR |
|---|---|---|---|
| 🟠 **中** | [#3394](https://github.com/sipeed/picoclaw/issues/3394) | QQ 机器人接口更新未在 PicoClaw QQ 通道同步跟进，可能导致该通道无法正常使用 | ❌ 暂无关联修复 PR |

**说明**：目前仅 1 条新 Bug 报告，但若不及时跟进，可能影响所有使用 QQ 通道的用户。建议在下一次发版前确认上游接口变更点并提交对应适配。

---

## 6. 功能请求与路线图信号

- **[#3347](https://github.com/sipeed/picoclaw/pull/3347) fix laggy interface**（状态：OPEN，已被标记 stale）
  - 修复 Web UI 在长对话场景下的卡顿问题，作者已构建并自测通过（含桌面与移动端 Brave 浏览器）。
  - ⚠️ 该 PR 已被标记为 **stale**，存在被机器人关闭的风险，但实质上是一项用户体验提升的有效改动，建议维护者尽快 Review。

- **QQ 通道附件增强（#1349 已关闭）**：用户对 QQ 通道的多媒体交互能力有持续需求（emoji、语音、图片、视频、文件）。虽然该 PR 已关闭，但其需求并未消失，建议作为新 Issue 重启并明确归属。

---

## 7. 用户反馈摘要

- **QQ 通道使用者**：感受到接口同步滞后带来的困扰（#3394），反映 QQ 生态的接口变更节奏较快，PicoClaw 在该集成层存在被动响应问题。
- **Web UI 使用者**：希望解决长会话卡顿（#3347），已有可用的修复方案等待合并。
- 本期 Issues 评论数均为 0，反映社区反馈渠道较冷清，可能影响产品迭代闭环。

---

## 8. 待处理积压提醒

| 项目 | 状态 | 提醒 |
|---|---|---|
| [#3347](https://github.com/sipeed/picoclaw/pull/3347) | OPEN / stale | Web UI 卡顿修复 PR 等待 Review，存在被自动关闭风险 |
| [#3394](https://github.com/sipeed/picoclaw/issues/3394) | NEW | QQ 通道接口同步 Bug，新开 Issue，等待维护者分诊 |
| QQ 通道附件增强（#1349 已关闭） | 需求搁置 | 用户需求仍在，建议重启为新 Issue 并规划 |

---

### 📌 维护者建议

1. **立即分诊 #3394**：QQ 通道接口同步问题影响集成可用性，建议 48 小时内响应并指派负责人。
2. **审阅 #3347**：避免有效修复因 stale 机制被关闭，必要时关闭 stale 标记。
3. **复盘 #1349 关闭原因**：QQ 通道附件能力是用户明确诉求，可考虑重启为新 Issue 并拆分迭代。
4. **观察 #3310 类自动化 PR**：建议在仓库配置层面限制自动机器人提交低质量 PR，提升 Review 效率。

---

*报告生成时间：2026-09-27 ｜ 数据来源：GitHub REST API*

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

<think>The user wants me to generate a daily project report for IronClaw based on the GitHub data provided. Let me analyze the data carefully:

1. Issues in the past 24 hours: 1 new/active, 0 closed
2. PRs in the past 24 hours: 1 pending, 0 merged/closed
3. New releases: 0

The issue #8112 is about adding a NEARA hosted-MCP extension for keyless NEAR token launchpad tools.
The PR #7988 is a chore PR to refresh the codebase knowledge graph, opened on 2026-08-29 and updated on 2026-09-27.

I need to structure this report according to the 8 sections requested, in Chinese, with an objective and data-driven tone. Let me draft this carefully.

Since there's no release, no closed PRs, and limited activity, I should be honest about the project's current state - it's relatively quiet today.

Let me write the report now.</think>

# IronClaw 项目动态日报

**日期：2026-09-27**
**仓库：[nearai/ironclaw](https://github.com/nearai/ironclaw)**

---

## 1. 今日速览

IronClaw 今日活跃度处于较低水平。过去 24 小时内仅有 1 条新 Issue 和 1 条 PR 更新，无任何版本发布、无 PR 合并或关闭。社区互动指标整体平稳：今日 Issue 评论为 0，PR 点赞为 0，反映出当前讨论热度有限。整体来看，项目处于常规维护节奏，主要进展来自 CI 自动化触发的代码知识图谱刷新工作，外部社区贡献以功能提案为主，尚未形成实质性合并闭环。

---

## 2. 版本发布

无新版本发布。本节略过。

---

## 3. 项目进展

今日无任何 PR 被合并或关闭，项目在功能实现层面无新的推进。

唯一活跃的 PR 是 **#7988**（[chore(agents): refresh codebase knowledge graph](https://github.com/nearai/ironclaw/pull/7988)），由自动化机器人 `@ironclaw-ci[bot]` 维护。该 PR 创建于 2026-08-29，今日（2026-09-27）被更新，标记为 `[size: XS, risk: low, contributor: core]`，属于 CI/Infrastructure 类型。其作用是刷新默认分支的代码库记忆快照，由 `Codebase Graph Refresh` 工作流自动触发。由于风险极低、变更范围明确，该 PR 处于待合并的"正常 review 流程"状态，对项目代码知识索引维护有持续性意义，但不代表实质功能演进。

---

## 4. 社区热点

今日社区讨论冷清，仅 1 条新议题被提出：

- **#8112** [Feature: NEARA hosted-MCP extension (keyless NEAR token launchpad tools)](https://github.com/nearai/ironclaw/issues/8112) — 由社区用户 @iwaterheater 于 2026-09-26 提交，今日新增。

该 Issue 提出者关注的是 IronClaw agent 与 NEAR 链上代币发射平台（launchpad）的衔接能力。当前 IronClaw agents 缺乏对 NEAR mainnet 上 NEARA（一个固定 1B 供应、整个供应量在 Rhea DCL 上以锁定集中流动性池形式开放的发射平台）进行**列币、报价、发射、交易**等操作的工具链支持。提案方向是引入托管型 MCP（hosted-MCP）扩展，以无密钥（keyless）方式接入相关工具。

**诉求分析**：这反映出社区用户希望 IronClaw 从通用 agent 框架进一步延伸到**链上金融场景**（尤其是 NEAR 生态内的代币交易与发射），并偏好**无密钥/低门槛**的接入方式以降低用户使用摩擦。该方向若被纳入路线图，可能为项目带来"AI Agent + DeFi 发射平台"的新使用场景。

---

## 5. Bug 与稳定性

今日未报告任何 Bug、崩溃或回归问题。本节略过。

> 📎 **健康度提示**：连续无 Bug 报告可能反映真实缺陷较少，亦可能是社区反馈渠道活跃度不足。建议维护者关注是否需要主动邀请测试或扩大外部测试覆盖。

---

## 6. 功能请求与路线图信号

**主要功能请求：**

- **#8112 — NEARA hosted-MCP extension**：如上所述，属于面向 NEAR 生态金融场景的功能扩展。该 Issue 已被归类为 Feature，尚未关联任何实现 PR。

**与已有 PR 的关联性判断：**
目前仓库内与链上金融/MCP 工具扩展相关的 PR 暂未在本次数据中显现，**#8112** 距离实现还有较大距离（无关联 PR、无维护者响应）。若该项目希望落地，预计需要：
1. 维护者对 MCP 托管架构及 NEAR 链上交互安全性进行评估；
2. 明确 keyless 接入的鉴权与限流策略；
3. 至少 1 个骨架级实现 PR 进入 Draft 状态。

短期内被纳入下一版本的概率较低，建议作为路线图候选讨论。

---

## 7. 用户反馈摘要

由于今日 Issues 评论数为 0，无新的用户反馈可提炼。

> 📎 **历史观察**：参考 #8112 的描述，可推断用户痛点集中在——
> - **能力缺口**：现有 IronClaw agents 无法覆盖 NEAR 链上发射与交易场景；
> - **使用门槛**：用户希望以"无密钥"方式接入链上工具，避免传统钱包授权/私钥管理的复杂度；
> - **生态延伸诉求**：用户期望 IronClaw 与具体 DeFi 协议（如 Rhea、NEARA）形成端到端闭环。
>
> 这些痛点均为推测性总结，因缺乏评论交互佐证，后续需以更多 Issue/PR 讨论验证。

---

## 8. 待处理积压

需要维护者关注的事项如下：

| 类型 | 编号 | 标题 | 创建/更新 | 状态 | 关注建议 |
|------|------|------|-----------|------|----------|
| PR | [#7988](https://github.com/nearai/ironclaw/pull/7988) | chore(agents): refresh codebase knowledge graph | 创建 2026-08-29 / 更新 2026-09-27 | 待合并 | 已挂起约 30 天，建议维护者快速 review 并合并，避免 CI 快照与默认分支长期脱节 |
| Issue | [#8112](https://github.com/nearai/ironclaw/issues/8112) | Feature: NEARA hosted-MCP extension | 创建 2026-09-26 | Open，无响应 | 建议维护者至少给出标签分类（如 `enhancement` / `needs-design`）与初步意向回复，避免新提案沉没 |

> ⚠️ **风险提示**：PR #7988 虽属低风险自动化产物，但若长期不合并可能导致代码知识图谱与主分支漂移，进而影响依赖该快照的下游 agent 行为准确性。

---

## 📊 项目健康度总览

| 维度 | 今日表现 | 评估 |
|------|----------|------|
| 提交活跃度 | 1 Issue + 1 PR 更新 | 🟡 偏低 |
| 合并/响应速度 | 0 合并 / 0 关闭 | 🔴 需关注积压 |
| 社区互动 | 评论 0、点赞 0 | 🟡 安静 |
| 版本发布 | 无 | ⚪ 常规日 |
| Bug 报告 | 无 | 🟢 良好或反馈不足 |
| 功能提案 | 1 条新 Feature | 🟢 有外部贡献意愿 |

**整体判断**：项目处于**低速维护态**，无显著进展但也无风险事件。维护者建议优先清理 PR #7988 积压，并对 #8112 给出初步反馈以保持社区参与感。

---
*报告生成时间：2026-09-27 | 数据来源：GitHub REST API*
*本报告由 IronClaw 项目动态分析生成*

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

<think>Let me analyze the GitHub data for LobsterAI and generate a comprehensive project daily report.

Key observations:
1. 0 new releases today
2. 6 issues closed (all stale), 0 newly opened - all from March 2026, closed today (Sept 26/27) as stale
3. 12 PR updates - 2 open, 10 closed/merged
4. The PRs are a mix of:
   - 2 open PRs: #2770 (word document editing feat), #2769 (Vite watch fix)
   - Recent activity from @fisherdaddy on multiple PRs (#2767-2770)
   - Many stale PRs being closed (#1049, #1052, #1054, #1056, #1057, #1058, #1059, #1065) all from March 2026

The close dates for stale items are 2026-09-26 (yesterday from report date 2026-09-27), and the open PRs are from 2026-09-27 (today).

Wait, looking more carefully:
- Most issues/PRs were created in March 2026 and closed today as stale
- But there are also some created recently (#2767-2770 from Sept 26-27)
- The report date is 2026-09-27

Let me check the numbering - the stale items have issue numbers around #1048-#1066 while the active ones are #2767-#2770. This suggests PRs and Issues have separate numbering, and the stale ones are older, recently closed as stale.

Active PRs (recent dates):
- #2770: Word document editing feature (OPEN, today)
- #2769: Vite watch fix (OPEN, yesterday)
- #2768: openclaw gateway timeout (CLOSED, yesterday)
- #2767: markdown live-editing refactor (CLOSED, yesterday)

Stale items all closed:
- Issues: #1048, #1051, #1053, #1061, #1062, #1066
- PRs: #1049, #1052, #1054, #1056, #1057, #1058, #1059, #1065

Let me now write a comprehensive daily report in Chinese.</think>

# LobsterAI 项目日报
**日期：2026-09-27**

---

## 一、今日速览

LobsterAI 项目今日整体处于**低活跃但有实质性推进**的状态。过去 24 小时内没有新版本发布，Issue 端仅清理了 6 条陈旧（stale）Issue，未产生新的用户报告；PR 端则是双轨并行——一方面由 @fisherdaddy 主导推进了 **Markdown 实时编辑引擎重构、openclaw 网关超时修复、Vite 热更新修复**以及重磅特性 **Word 文档编辑**等 4 个 PR，另一方面批量关闭了 8 个长达半年未更新的 stale PR。健康度评估：**中等偏上**，核心维护者在持续推进产品演进，但社区参与度较低，自 3 月以来的贡献者活跃度明显下滑。

---

## 二、版本发布

⚠️ **今日无新版本发布。**

最近一次可识别的版本为用户在 Issue #1062 中提及的 `v2026.3.26`（3 月 26 日），距今已超过 6 个月未发布新版。建议维护者评估近期合并的 PR 是否积攒足够发版条件。

---

## 三、项目进展

今日（9 月 26–27 日窗口内）共有 4 个 PR 由同一核心维护者 @fisherdaddy 推进，方向集中在 **Markdown 编辑器体系重构** 与 **openclaw 网关可靠性**：

| PR | 标题 | 状态 | 价值 |
|----|------|------|------|
| [#2767](https://github.com/netease-youdao/LobsterAI/pull/2767) | refactor(markdown): split live-editing engine into structure/commands/widgets modules | CLOSED | 将巨型 `markdownLivePreview` 拆分为 `markdownLiveStructure` / `markdownEditorCommands` / `markdownLiveWidgets` 三个模块，可维护性显著提升 |
| [#2768](https://github.com/netease-youdao/LobsterAI/pull/2768) | fix: openclaw gateway startup timeout extension | CLOSED | 延长 openclaw gateway 启动超时，避免复杂环境下 AI 会话启动失败 |
| [#2769](https://github.com/netease-youdao/LobsterAI/pull/2769) | fix(dev): stop Vite watch from ignoring renderer artifact sources | OPEN | 修复因 `**/artifacts/**` glob 同时匹配仓库根目录与 `src/renderer/components/artifacts/` 导致的 HMR 失效问题 |
| [#2770](https://github.com/netease-youdao/LobsterAI/pull/2770) | Feat: word document editing | OPEN | **跨 7 个模块（renderer/build/docs/main/openclaw/skills/artifacts）的 Word 文档编辑能力**，是近期最大型功能特性 |

**总体而言**，Markdown 编辑引擎的重构为后续富文档能力奠定基础，Word 编辑功能的引入标志着产品在“AI + 文档协作”方向上的明显加码。

---

## 四、社区热点

⚠️ **今日 Issues 端几乎无新增互动**——所有被关闭的 Issue 仅有 0 点赞和 2 条评论，且均为半年陈旧条目，由 stale 机器人自动清理。

历史遗留中讨论价值较高的 Issue（仍值得关注）：

- **[#1051](https://github.com/netease-youdao/LobsterAI/issues/1051)**：openclaw 两处竞态条件导致 AI 会话永久无法启动——这是少数获得实质 PR 响应的陈旧报告，对应 [#1052](https://github.com/netease-youdao/LobsterAI/pull/1052) 修复。
- **[#1053](https://github.com/netease-youdao/LobsterAI/issues/1053)**：Modal 关闭按钮无反应——反馈广泛影响所有 Modal/Popover 弹窗，对应 [#1054](https://github.com/netease-youdao/LobsterAI/pull/1054)（已 stale 关闭）。

**诉求分析**：用户最关注的痛点集中在 **AI 会话启动可靠性**（竞态导致永久卡死）和 **Electron 窗口交互异常**（拖拽区拦截）两类。

---

## 五、Bug 与稳定性

按严重程度排列今日被关闭（实际是 stale）的 Bug 类 Issue：

### 🔴 高严重度（影响核心功能）

1. **[#1051](https://github.com/netease-youdao/LobsterAI/issues/1051)** — openclaw 竞态导致 AI 会话永久无法启动
   - 问题点 S-07：`ensureGatewayClientReady` 首次调用失败后，等待者静默 return 不检查 gateway 是否就绪
   - 问题点 S-08：`ensureActiveTurn` 对已停止 session 仍创建 ActiveTurn，造成 session 永久锁死
   - ✅ **已有对应修复 PR** [（#1052，stale 关闭）](https://github.com/netease-youdao/LobsterAI/pull/1052)

2. **[#1048](https://github.com/netease-youdao/LobsterAI/issues/1048)** — `fetchWithAuth` 并发 401 时双重消费 refreshToken，强制用户登出
   - 涉及 `src/main/main.ts` 中两套独立 token 刷新路径绕过 `refreshOnce` 去重机制
   - ✅ **已有对应修复 PR** [（#1049，stale 关闭）](https://github.com/netease-youdao/LobsterAI/pull/1049)，方案为引入 `sharedRefreshOnce` 共享槽

3. **[#1053](https://github.com/netease-youdao/LobsterAI/issues/1053)** — Modal 关闭按钮在拖拽区域下方时无反应
   - 根因为 `.draggable`（`-webkit-app-region: drag`）拦截鼠标事件
   - ✅ **已有对应修复 PR** [（#1054，stale 关闭）](https://github.com/netease-youdao/LobsterAI/pull/1054)，方案为 `.fixed` / `.modal-backdrop` 加 `no-drag`

### 🟡 中严重度

4. **[#1062](https://github.com/netease-youdao/LobsterAI/issues/1062)** — 定时任务修改时间后与标题描述不符（必现）
   - 用户环境：Windows 10 / v2026.3.26
   - ❌ **无对应修复 PR**

5. **[#1066](https://github.com/netease-youdao/LobsterAI/issues/1066)** — 心跳对话未被过滤，污染用户对话列表
   - ❌ **无对应修复 PR**

### 🟢 低严重度

6. **[#1061](https://github.com/netease-youdao/LobsterAI/issues/1061)** — 网关端口与 Openclaw 端口冲突，无法修改
   - 用户建议增加网关端口自定义能力
   - ❌ **无对应修复 PR**

---

## 六、功能请求与路线图信号

虽然今日无新功能请求，但结合已合并 / 在途的 PR，可清晰看到下一版本的演进方向：

| 信号 | 关联条目 | 预期纳入版本 |
|------|----------|---------------|
| **Word 文档编辑** | [PR #2770 OPEN](https://github.com/netease-youdao/LobsterAI/pull/2770) | v2026.Q4 大版本可能性高（跨 7 个模块） |
| **定时任务绑定已有 cowork session** | [PR #1065 CLOSED stale](https://github.com/netease-youdao/LobsterAI/pull/1065) | 需要重新开 PR，可能进 v2026.Q4 |
| **Markdown 编辑引擎模块化重构** | [PR #2767 已关闭](https://github.com/netease-youdao/LobsterAI/pull/2767) | 已落地 |
| **Vite HMR 修复** | [PR #2769 OPEN](https://github.com/netease-youdao/LobsterAI/pull/2769) | 下次开发版本即生效 |

**维护者建议**：批量关闭 stale PR 时，容易误关仍有价值的修复方案（如 #1054、#1052、#1049），这些问题已具备成熟修复方案，应作为下一版本的 hotfix 候选。

---

## 七、用户反馈摘要

从今日关闭 Issue 的描述中提炼的真实痛点：

1. **认证与会话稳定性焦虑**（#1048、#1051）——用户最担心的是“核心流程静默失败”：被强制登出、AI 会话卡死无法恢复，这两类问题严重动摇使用信心。
2. **UI 交互细节疏忽**（#1053、#1062、#1066）——用户发现多个 Modal 关闭按钮失灵、定时任务标题未与实际时间同步、心跳对话污染列表，反映出**UI 细节与状态一致性**需要系统化审计。
3. **跨组件环境冲突**（#1061、#1059）——端口冲突、默认浏览器识别错误（启动 Edge 而非 Chrome），表明 Windows 端的桌面应用集成层仍有边界场景未覆盖。
4. **强烈反馈集中于去年 Q1 版本**——所有被关闭 Issue 均为 3 月 30 日创建，说明 **3 月之后社区反馈通道趋于沉寂**，可能是用户活跃下降或反馈入口存在导流问题。

---

## 八、待处理积压

虽然今日清理了一批 stale 项，但仍有重要关注点提醒维护者：

1. **🚨 核心修复 PR 被误标 stale 关闭**：[#1049](https://github.com/netease-youdao/LobsterAI/pull/1049)、[#1052](https://github.com/netease-youdao/LobsterAI/pull/1052)、[#1054](https://github.com/netease-youdao/LobsterAI/pull/1054) 均为高价值 fix，但已关闭。需要重新开 PR 或直接 cherry-pick。
2. **🚨 开放中的 PR 待审**：
   - [#2770](https://github.com/netease-youdao/LobsterAI/pull/2770) — Word 文档编辑，跨 7 个模块的大型 PR，需要架构评审
   - [#2769](https://github.com/netease-youdao/LobsterAI/pull/2769) — Vite HMR 修复，影响开发体验
3. **🚨 无 PR 修复的中高严重度 Issue**：
   - [#1062](https://github.com/netease-youdao/LobsterAI/issues/1062) — 定时任务标题同步问题（必现，影响可用性）
   - [#1066](https://github.com/netease-youdao/LobsterAI/issues/1066) — 心跳对话污染问题
4. **🚨 长期无版本发布**：自 v2026.3.26（3 月 26 日）以来已超过 6 个月未发布新版，建议尽快整合近期 Markdown 重构与 openclaw 修复进行小版本发布。
5. **🚨 社区活跃度下滑警示**：3 月后几乎无新 Issue / PR 创建，需关注用户活跃度原因（产品推广、反馈渠道、版本节奏等）。

---

*数据来源：LobsterAI GitHub 仓库（[netease-youdao/LobsterAI](https://github.com/netease-youdao/LobsterAI)），报告生成时间 2026-09-27。*

</details>

<details>
<summary><strong>QwenPaw</strong> — <a href="https://github.com/agentscope-ai/QwenPaw">agentscope-ai/QwenPaw</a></summary>

<think>Let me analyze the GitHub data for QwenPaw and generate a comprehensive daily report for 2026-09-27.

Key observations from the data:
- 6 Issues updated in past 24 hours (4 new/active, 2 closed)
- 4 PRs updated (all 4 still pending/awaiting merge)
- No new releases
- Active issues span bug fixes, feature requests, and management improvements
- Two PRs (#7996) directly addresses bug #7995 (Files panel refresh issue)
- Several i18n and formatting bugs being addressed

Let me structure this into a clear, professional report in Chinese.</think>

# QwenPaw 项目动态日报

**日期：2026-09-27**
**项目：QwenPaw（github.com/agentscope-ai/QwenPaw）**

---

## 1. 今日速览

QwenPaw 今日维持中等活跃度，**24 小时内共产生 6 条 Issue 更新与 4 条 PR 提交**，但尚未有新版本发布，仓库整体处于"持续修缮 + 新功能讨论"的并行阶段。值得关注的信号有三点：其一，控制台（Console）侧的可见性 Bug 与体验问题集中爆发（文件面板刷新、上下文压缩、任务计数器不一致）；其二，国际化（i18n）漏译与企业微信（wecom）误识别 Markdown 表格两个细节问题被快速定位为 PR；其三，老牌 Feature Request #4963（定时任务直接执行脚本）虽已存在逾 110 天仍未推进，需维护者后续关注。整体项目健康度评估为**中等偏稳**，提交节奏正常、问题闭环效率较高，但仍存在功能需求长期积压问题。

---

## 2. 版本发布

⚠️ 过去 24 小时**无新版本发布**。

最近一次可见版本基线为 Issue #7995 中用户报告的 **v2.2.2b4**，另有用户反馈 **v2.2.3b** 仍存在上下文压缩 Bug，建议维护者在合并 #7996、#7993、#7992 等修复后考虑发版。

---

## 3. 项目进展

过去 24 小时内**无 PR 合并或关闭**，所有 4 条 PR 均处于 OPEN 状态，但提交质量较高、议题针对性强，构成了下个版本候选补丁集：

| PR | 标题 | 价值 |
|---|---|---|
| [#7996](https://github.com/agentscope-ai/QwenPaw/pull/7996) | fix(console): refresh expanded folders in Files panel | 修复文件面板刷新后已展开目录状态陈旧问题 |
| [#7993](https://github.com/agentscope-ai/QwenPaw/pull/7993) | fix(i18n): add two missing error strings | 修复两条错误提示在所有 locale 中均缺失翻译的问题 |
| [#7992](https://github.com/agentscope-ai/QwenPaw/pull/7992) | fix(wecom): stop treating prose containing a pipe as a markdown table | 修复企业微信通道将普通含 `\|` 文本误识别为表格的回归 |
| [#7956](https://github.com/agentscope-ai/QwenPaw/pull/7956) | feat(console): unify settings UX and smooth conversation transitions | 统一控制台设置 UI 体验并修复工作区选择器溢出与欢迎页闪烁 |

**整体推进评估**：项目前端控制台、国际化、企业微信通道三条线均取得具体修复进展，但均停留在 PR 待审阶段，距离用户实际可感知还需经过 Review + Merge + Release 链路。若维持当前节奏，预计 1–2 周内可形成新的 beta 标签版本。

---

## 4. 社区热点

按评论数与关注度排序，今日最值得关注的话题包括：

- 🔥 **[#4963](https://github.com/agentscope-ai/QwenPaw/issues/4963) Cron: Support direct script/shell execution task type**（4 条评论）
  社区对"定时任务不仅限于 AI 推理，还应支持原生脚本/Shell 执行"呼声较高。当前 cron 仅支持 `text` 与 `agent` 两种类型，无法满足运维、数据同步等纯确定性场景。该 Issue 已被搁置 110 天以上，社区持续顶贴，是路线图级别的功能请求。

- 🔥 **[#7957](https://github.com/agentscope-ai/QwenPaw/issues/7957) 手动停用预制模型/频道的建议**（3 条评论）
  用户希望提供关闭预置但未启用的模型和频道的开关。评论区指出该需求虽小但能显著降低新手用户的认知负担，属于"洁癖级"UI 增强诉求。

- **[#7804](https://github.com/agentscope-ai/QwenPaw/issues/7804) management 增强**（2 条评论，已关闭）
  涉及全栈组件的综合性管理类需求讨论，已被关闭，疑似被合并或标记为重复。

---

## 5. Bug 与稳定性

按严重程度排列：

| 严重度 | Issue | 描述 | 状态 | 是否有 Fix PR |
|---|---|---|---|---|
| 🔴 高 | [#7991](https://github.com/agentscope-ai/QwenPaw/issues/7991) TaskTracker 僵尸条目膨胀 running_task_count | Dashboard 显示 "2 running tasks" 与 `/api/chats` 返回 1 条 running 不一致；任务聚合作用域错误 | OPEN | ❌ 无 |
| 🟠 中 | [#7995](https://github.com/agentscope-ai/QwenPaw/issues/7995) 文件面板刷新后已展开文件夹状态陈旧 | 需整页刷新浏览器才能看到新增文件 | OPEN | ✅ [#7996](https://github.com/agentscope-ai/QwenPaw/pull/7996) 待合并 |
| 🟠 中 | [#7994](https://github.com/agentscope-ai/QwenPaw/issues/7994) 上下文显示状态更新不及时 / 压缩不触发 | 圈圈数据不切换；超过 91.7K/131.1K 阈值仍不压缩 | CLOSED | ⚠️ 已关闭但无 fix PR，可能需复盘 |
| 🟡 低 | （通过 PR 间接修复）企业微信 Markdown 表格误识别 | 含 `\|` 的散文被错误改造为表格 | — | ✅ [#7992](https://github.com/agentscope-ai/QwenPaw/pull/7992) |
| 🟡 低 | （通过 PR 间接修复）i18n 错误提示未本地化 | `common.operationFailed`、`voiceTranscription.loadFailed...` 无翻译 | — | ✅ [#7993](https://github.com/agentscope-ai/QwenPaw/pull/7993) |

**稳定性评估**：核心链路无崩溃级回归，但前端状态同步层（计数器、压缩触发、文件树刷新）暴露出一致性问题，建议作为下一版本优先修复目标。

---

## 6. 功能请求与路线图信号

**强信号（已进入讨论或实现阶段）：**

- **Console 设置统一化** — 已被 [#7956](https://github.com/agentscope-ai/QwenPaw/pull/7956) 落地，符合 `design.md` 设计语言，可纳入下一版本。
- **预制模型/频道可手动禁用** — [#7957](https://github.com/agentscope-ai/QwenPaw/issues/7957) 反映 UI 简化诉求，实现成本低，建议作为快速 PR 候选。

**中等信号（持续累积需求）：**

- **Cron 支持直接脚本/Shell 执行** — [#4963](https://github.com/agentscope-ai/QwenPaw/issues/4963) 4 条评论、0 👍 但开放 110+ 天仍未有回应或 Plan。考虑到安全边界（任意脚本执行）设计成本较高，可考虑引入"白名单+用户确认"折中方案。

**弱信号（孤立请求）：**

- #7804 已关闭，反映"全栈管理面"诉求较发散，未形成集中方向。

---

## 7. 用户反馈摘要

- **#7994 用户 @xiaohushi512（win10 桌面端 v2.2.3b）**：上下文显示的圆环数据"经常不随着对话切换更新，新建对话还是显示旧对话的数据，必须退出程序重新进才更新"。这反映出客户端状态管理未与后端 chat list 完全同步；同时压缩阈值 0.5 已设置但 91K/131K 仍不触发压缩，说明阈值判断逻辑存在 Bug 或文档缺失。
- **#7995 用户 @iluv7**：Files 面板刷新按钮在 agent 新建文件后未更新已展开目录，需要硬刷新页面。该问题反映前端缓存失效策略过于激进或过于保守。
- **#7991 用户 @yylxdzz**：Dashboard 与 API 返回值不一致，使用户难以判断当前真实运行负载。该 Bug 在生产环境中可能导致监控/告警误判。
- **#7957 用户 @dylanleesky**：用"强迫症"形容对预制未启用项可见性的不适——典型产品洁癖诉求，意味着默认暴露所有预置项的策略在用户感知层面偏冗余。

总体而言，**用户满意度集中在 AI 推理能力本身**（未出现抱怨），**不满集中在 UI/状态同步层**——这通常出现在功能快速迭代、UI 抽象尚未完全稳定的成长期项目。

---

## 8. 待处理积压（提醒维护者关注）

| 优先级 | 编号 | 标题 | 搁置时长 | 建议动作 |
|---|---|---|---|---|
| ⚠️ 高 | [#4963](https://github.com/agentscope-ai/QwenPaw/issues/4963) | Cron: Support direct script/shell execution | ~110 天 | 给出官方回复或 Roadmap 标签，避免沉默 |
| ⚠️ 中 | [#7991](https://github.com/agentscope-ai/QwenPaw/issues/7991) | TaskTracker 僵尸条目 | <1 天 | 已有充分复现步骤，建议快速定位并出 fix PR |
| ⚠️ 中 | [#7956](https://github.com/agentscope-ai/QwenPaw/pull/7956) | feat(console): unify settings UX | 4 天 | 较大特性 PR，建议优先分配 Reviewer 资源 |
| 💡 低 | [#7957](https://github.com/agentscope-ai/QwenPaw/issues/7957) | 手动停用预制模型/频道 | 4 天 | 可作为 Quick Win 处理 |

---

### 📌 维护者行动建议

1. **优先合并 #7996、#7993、#7992** 这三个低风险修复 PR，可快速形成补丁版本。
2. **对 #4963 给出版本化回复**：即使暂不实现，也建议标记为 `help-wanted` 或 `roadmap`，避免社区因长期沉默而流失贡献者。
3. **关注 #7991 TaskTracker 一致性问题**：监控计数器与 API 数据源对齐是基础设施级问题，应在下个里程碑前修复。
4. **组织一次 Console UI 集中打磨**：结合 #7956 统一设置体验 + #7997 系列控制台可见性 Bug 集中清理，作为一次小版本（如 v2.2.4）发布主题。

---

*本报告基于 GitHub 公开数据自动生成，数据时间窗口为 2026-09-26 至 2026-09-27（UTC）。*

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/NousResearch/hermes-agent">NousResearch/hermes-agent</a></summary>

<think>The user wants me to generate a structured daily report for the Hermes Agent project based on the GitHub data provided. Let me analyze the data carefully and produce a comprehensive report in Chinese.

Key observations from the data:
1. 50 Issues updated in 24h (37 new/active, 13 closed)
2. 50 PRs updated (50 open, 0 merged/closed)
3. No new releases
4. Many Windows-specific issues are prominent
5. Several session-state related bugs
6. Issues span desktop, CLI, gateway, plugins, and platform integrations

Let me organize this into the requested sections:

1. 今日速览 - Project status overview
2. 版本发布 - No releases
3. 项目进展 - No merged PRs, but many open PRs addressing issues
4. 社区热点 - Most commented issues
5. Bug与稳定性 - Bug analysis with severity
6. 功能请求与路线图信号 - Feature requests
7. 用户反馈摘要 - User pain points
8. 待处理积压 - Backlog items

Let me look at the most commented issues:
- #103410 - 10 comments - TUI live compression crash with LCMEngine
- #122609 - 10 comments - Skills index stale
- #122299 - 10 comments - Kanban dispatcher ModuleNotFoundError (has 👍: 4)
- #105162 - 5 comments - Desktop chat hidden in Bot Mode
- #118628 - 5 comments - Session tile interrupt issue
- #123463 - 5 comments - Windows PID identity check
- #123430 - 4 comments - Windows updater leaves no gateway.pid
- #124120 - 4 comments - gateway migrate --multiplex fails
- #123203 - 4 comments - NVIDIA SwiftShader fallback
- #123926 - 3 comments - Plugins dropped at boot

Long-standing issues:
- #72132 - from 2026-07-26 - ARM32 Pillow builds (3 months old)
- #42422 - closed but from 2026-06-08 - Discord session delete
- #60207 - closed but from 2026-07-07 - Desktop session delete persistence
- #80569 - closed but from 2026-08-06 - Windows gateway install duplicates
- #103281 - from 2026-09-04 - WhatsApp Meta AI confusion

Closed issues today:
- #42422, #80569, #123499, #121875, #119204, #118271, #118083, #103222, #60207

PRs to highlight:
- #124796 - fix gateway runpy launcher identity (fixes #124588)
- #124779 - e2e Windows tests
- #124788 - desktop Linux long HERMES_HOME fix
- #124793 - kanban worker PYTHONPATH fix
- #124791 - credential pool UTC parsing fix
- #124785 - supervised launch update tail fix (P1)
- #124786 - skill_manage file mutation coverage
- #124787 - workspace pin key normalization
- #120525 - docker s6 boot reconciler
- #115009 - turn-lease queue layer 2/4
- #112035 - Persian localization
- #106869 - operator settings lock feature

Now let me write the report in a professional, data-driven manner.</think>

# Hermes Agent 项目日报
**报告日期：2026-09-27**

---

## 1. 今日速览

Hermes Agent 在过去 24 小时内保持高度活跃：共更新 **50 条 Issue**（37 条活跃、13 条已关闭）和 **50 条 PR**（全部处于待合并状态，无合入记录）。当日**无新版本发布**，仓库处于密集的 bug 修复与重构阶段，未见功能级 release。从 issue 标签分布看，**Windows 平台兼容性 (`platform/windows`)** 与 **会话状态一致性 (`risk-session-state`)** 是当前最突出的两大风险域，多个 P0/P1 级问题在排队处理。整体节奏属于"修多于进"，社区贡献保持稳定，未出现阻塞性事故。

---

## 2. 版本发布

无新版本发布。`main` 分支最新可识别版本为 **`v0.21.5+2451.g11e22f2`**（见 [#123430](https://github.com/NousResearch/hermes-agent/issues/123430)、[#123499](https://github.com/NousResearch/hermes-agent/issues/123499)）。

---

## 3. 项目进展

尽管今日**无 PR 合入**，仓库内的提交密度表明多个关键修复已进入就绪状态：

| PR | 关键说明 | 状态 |
|---|---|---|
| [#124796](https://github.com/NousResearch/hermes-agent/pull/124796) | 修复 gateway 在 launchd 管理下识别 `python -I -c` runpy 启动器形态（fixes #124588） | 待合并 |
| [#124793](https://github.com/NousResearch/hermes-agent/pull/124793) | 修复 Kanban worker 在 PM launcher 下 `No module named hermes_cli`（关联 #122299 / #124763） | 待合并 |
| [#124788](https://github.com/NousResearch/hermes-agent/pull/124788) | 修复 Linux 下 `HERMES_HOME` 路径过长导致 Electron 在 `requestSingleInstanceLock()` 永久挂起 | 待合并 |
| [#124795](https://github.com/NousResearch/hermes-agent/pull/124795) | Desktop composer 在 provider 从 default 迁移至 `custom:*` 时重置用户手选模型 | 待合并 |
| [#124791](https://github.com/NousResearch/hermes-agent/pull/124791) | 凭据池将无时区 ISO 时间戳解析为 UTC 而非本地时间（最多偏移 ~14h） | 待合并 |
| [#124785](https://github.com/NousResearch/hermes-agent/pull/124785) | **P1 修复** [#123340](https://github.com/NousResearch/hermes-agent/issues/123340)：监督启动下不再执行 update completion tail，避免磁盘被填满 | 待合并 |
| [#124297](https://github.com/NousResearch/hermes-agent/pull/124297) | store-Python 安装路径下，将 `-I -c` bootstrap 识别为 live gateway | 待合并 |
| [#124786](https://github.com/NousResearch/hermes-agent/pull/124786) | 将 `skill_manage` 纳入文件变更校验，关闭 #123868 静默失败 | 待合并 |
| [#124787](https://github.com/NousResearch/hermes-agent/pull/124787) | workspace pin key 标准化为解析后的物理路径，修复跨平台缓存命中失效 | 待合并 |
| [#124789](https://github.com/NousResearch/hermes-agent/pull/124789) | 修复 Desktop resume 在会话列表 stale 时主线程空白无法恢复 | 待合并 |
| [#124792](https://github.com/NousResearch/hermes-agent/pull/124792) | MCP stdio PATH 中以 managed Node 为权威版本 | 待合并 |

**基础设施与测试** 方面也有显著动作：
- [#124779](https://github.com/NousResearch/hermes-agent/pull/124779) 新增原生 Windows 上 `install.ps1` → `hermes update` 的 E2E 测试（18 个 cell / 5 个 journey），对应约 110 个 Windows 安装/更新相关 issue。
- [#124692](https://github.com/NousResearch/hermes-agent/pull/124692) 新增基于真实 git smart-HTTP origin 的 `hermes update` PR gating suite。
- [#120525](https://github.com/NousResearch/hermes-agent/pull/120525) Docker s6 boot reconciler 支持 `gateway.standalone` profile 自启动。

总体看，**核心功能层无大跃迁**，但稳定性与平台兼容性层面的"暗礁"在被系统化清理，且首次为 Windows 安装/更新引入了 CI 守门。

---

## 4. 社区热点

**评论量最高的三条 Issue** 均达到 10 条评论：

1. **[#103410 — TUI 实时压缩热重载在 LCM 外部引擎上崩溃](https://github.com/NousResearch/hermes-agent/issues/103410)**  
   `tui_gateway.server` 在每次配置变更时对 `LCMEngine` 访问缺失属性 `_coerce_threshold_tokens_cap`。诉求集中在：暴露统一压缩配置适配层、为外部 context engine 提供 attribute existence check。

2. **[#122609 — Skills 索引降级（degraded）](https://github.com/NousResearch/hermes-agent/issues/122609)**  
   自动化探针显示索引陈旧 28.1h（阈值 26h）。Skills Hub 直接依赖此 JSON，社区痛点是文档/技能发现**静默不可用**，无前端提示。

3. **[#122299 — Kanban dispatcher argv guard 在 PM 启动器下失效](https://github.com/NousResearch/hermes-agent/issues/122299)** (👍 4)  
   `find_spec("hermes_cli")` 在父进程通过但子进程失败。已获得 [#124793](https://github.com/NousResearch/hermes-agent/pull/124793) 修复，但合并前仍卡住。

**互动性次高**（4–5 评论）：
- [#105162](https://github.com/NousResearch/hermes-agent/issues/105162)、[#118628](https://github.com/NousResearch/hermes-agent/issues/118628)、[#123463](https://github.com/NousResearch/hermes-agent/issues/123463) — 全部为桌面/Windows 会话状态类问题，反映该场景下的复现密度。
- [#123203](https://github.com/NousResearch/hermes-agent/issues/123203) — NVIDIA ≥580 SwiftShader 回退误伤新驱动，是少有的 perf 类热点。

**最受关注的 PR**：
- [#106869 — 操作员设置锁 (operator settings lock)](https://github.com/NousResearch/hermes-agent/pull/106869)：保护 `approvals.mode` / `yolo` 不被任意 client 关闭，触及安全底线。

---

## 5. Bug 与稳定性

### P0（最严重）
- **[#123499 — Windows：launch-time interrupted-update tail 误杀祖先 Hermes.exe，导致永久 boot loop](https://github.com/NousResearch/hermes-agent/issues/123499)**（已关闭，但需关注是否真正修复）  
  `_stop_desktop_processes_locking_build` 将自身祖先进程纳入终结集合，引发整棵树死亡。

### P1（严重）
- **[#123340 — 监督启动下的 update completion tail 可填满磁盘](https://github.com/NousResearch/hermes-agent/issues/123340)**  
  已有 [#124785](https://github.com/NousResearch/hermes-agent/pull/124785) 待合入。

### P2（重要）
| Issue | 主题 | 关联 fix PR |
|---|---|---|
| [#122299](https://github.com/NousResearch/hermes-agent/issues/122299) | Kanban worker `ModuleNotFoundError: hermes_cli` | [#124793](https://github.com/NousResearch/hermes-agent/pull/124793) |
| [#105162](https://github.com/NousResearch/hermes-agent/issues/105162) | Bot Mode ⌘T 新建会话隐藏且不可恢复 | 暂无 |
| [#118628](https://github.com/NousResearch/hermes-agent/issues/118628) | 关闭会话卡片强制中断监控中 turn | 暂无 |
| [#123463](https://github.com/NousResearch/hermes-agent/issues/123463) | Windows 更新后 PID 校验误报 "no gateway" | 暂无（[#124297](https://github.com/NousResearch/hermes-agent/pull/124297) 部分缓解） |
| [#123430](https://github.com/NousResearch/hermes-agent/issues/123430) | Windows updater 留下 `gateway.pid`，阻塞下次 update | 暂无 |
| [#124120](https://github.com/NousResearch/hermes-agent/issues/124120) | launchd 启动器无法被迁移流程识别 | [#124796](https://github.com/NousResearch/hermes-agent/pull/124796) |
| [#120106](https://github.com/NousResearch/hermes-agent/issues/120106) | Desktop 切换本地/远端后端丢失全部 tab | 暂无 |
| [#123801](https://github.com/NousResearch/hermes-agent/issues/123801) | macOS Desktop 重复渲染同一 assistant 回复 | 暂无 |
| [#124211](https://github.com/NousResearch/hermes-agent/issues/124211) | Bot Mode canonical chat 永远收不到 toolset 变更 | 暂无 |
| [#123281](https://github.com/NousResearch/hermes-agent/issues/103281) | WhatsApp self-chat 把 Meta AI 提示当作 agent 命令 | 暂无 |
| [#124700](https://github.com/NousResearch/hermes-agent/issues/124700) | lifecycle guard 过度拦截无关维护命令 | 暂无 |

### P3（一般 / 体验）
- [#123926](https://github.com/NousResearch/hermes-agent/issues/123926)（boot 时插件随机丢失，迭代中修改字典）
- [#103410](https://github.com/NousResearch/hermes-agent/issues/103410)、[#122609](https://github.com/NousResearch/hermes-agent/issues/122609)、[#123203](https://github.com/NousResearch/hermes-agent/issues/123203)（NVIDIA 回退误伤）
- [#121875](https://github.com/NousResearch/hermes-agent/issues/121875)（已关闭：模型选择器需重开才显示下拉）
- [#119204](https://github.com/NousResearch/hermes-agent/issues/119204)（已关闭：搜索框 × 按钮位置）
- [#118271](https://github.com/NousResearch/hermes-agent/issues/118271)（已关闭：macOS composer 不暴露 AX）
- [#118083](https://github.com/NousResearch/hermes-agent/issues/118083)（已关闭：模型选择器同一模型重复展示）
- [#103222](https://github.com/NousResearch/hermes-agent/issues/103222)（已关闭：Windows update 残留 PowerShell QuickEdit 模式）
- [#42422](https://github.com/NousResearch/hermes-agent/issues/42422)（已关闭：Desktop 删除 Discord 会话不持久）
- [#60207](https://github.com/NousResearch/hermes-agent/issues/60207)（已关闭：default profile 删除会话不持久并残留 secret JSON）
- [#80569](https://github.com/NousResearch/hermes-agent/issues/80569)（已关闭：Windows 安装/更新产生重复启动项）
- [#124762](https://github.com/NousResearch/hermes-agent/issues/124762)（Slack manifest 命令数被错误地 clamp 到 50，实为 25）
- [#124228](https://github.com/NousResearch/hermes-agent/issues/124228)（Telegram 配置的 home 构建 venv 缺 `python-telegram-bot`）
- [#123238](https://github.com/NousResearch/hermes-agent/issues/123238)（不同 `HERMES_HOME` 启动会污染 checkout 共享 launcher）

**整体趋势**：约 **14% 的更新 Issue 已关闭**，但仍有较多 P2 无对应 fix PR 在跑；尤其 Windows 启动链路（updater → PID 检测 → gateway 启动）存在多个互相缠绕的脆弱点。

---

## 6. 功能请求与路线图信号

1. **多表面会话共享** — [#112028](https://github.com/NousResearch/hermes-agent/issues/112028) 诉求 desktop + mobile dashboard 同时读写同一 session，server 当前会拒绝。属于体验层面"自然下一步"，尚未见 fix PR。

2. **操作员设置锁** — [#106869](https://github.com/NousResearch/hermes-agent/pull/106869) 已作为 PR 提出（命名锁定 + 需解锁），是少数触及**安全/合规**层面的特性提案，合并可能性较高。

3. **Turn-lease 队列化** — [#115009](https://github.com/NousResearch/hermes-agent/pull/115009) 是 4 层系列的第 2 层，将因 lease 等待超时而丢失的入站消息改为排队，是基础设施级改进。

4. **i18n / RTL** — [#112035](https://github.com/NousResearch/hermes-agent/pull/112035) 提供完整波斯语本地化与 RTL 视觉回归套件。说明社区开始向非英语市场扩张。

5. **Slack 集成修正** — [#124762](https://github.com/NousResearch/hermes-agent/issues/124762) Slack manifest clamp 错误实为 bug 修复，但揭示当前缺乏对各平台限额的系统化单元测试。

6. **NVIDIA EGL 回退粒度** — [#123203](https://github.com/NousResearch/hermes-agent/issues/123203) 提议从"major ≥ 580"改为白名单，是 Electron/Linux 桌面的现实痛点。

---

## 7. 用户反馈摘要

- **Windows 是头号痛点**：在 50 条 issue 中至少有 17 条与 Windows 直接相关（PID 检测、updater、Scheduled Task、QuickEdit、native install、profile 切换等）。社区对 native Windows（非 WSL）体验的诉求已经远远超过 macOS/Linux。
- **会话是用户的"工作记忆"，但当前最脆弱**：用户对 Bot Mode / 多 surface / 远端切换 / 删除持久性 / 中断后回复渲染 等场景的不满高度集中。代表性表述："**daily blocker in split-host setups**"（#120106）。
- **静默失败被强烈厌恶**：插件随机丢失（#123926）、skill 编辑静默失败（#123868）、索引降级无提示（#122609）、重复回复无来源线索（#123801）—— 用户期望系统对不可见状态给出声明显式。
- **升级路径的"破坏性更新"未明确沟通**：#123238 反映一次 `HERMES_HOME` 变更可永久污染 launcher，用户并不清楚 launcher 的副作用范围。
- **积极信号**：[#118083](https://github.com/NousResearch/hermes-agent/issues/118083)、[#119204](https://github.com/NousResearch/hermes-agent/issues/119204)、[#118271](https://github.com/NousResearch/hermes-agent/issues/118271) 等已关闭的 UX 问题表明桌面细节打磨在持续推进；[#112035](https://github.com/NousResearch/hermes-agent/pull/112035) 的高质量 i18n 提交也说明外部贡献者活跃度健康。

---

## 8. 待处理积压

**长期未关闭的重要项，提醒维护者关注：**

| 编号 | 创建时间 | 主要积压原因 |
|---|---|---|
| [#72132](https://github.com/NousResearch/hermes-agent/issues/72132) | **2026-07-26**（已 2 个月） | ARM32 (Raspberry Pi OS) `Pillow` 源码构建问题，uv 不读 piwheels 配置，标签 `needs-decision` |
| [#103

</details>

<details>
<summary><strong>OpenHuman</strong> — <a href="https://github.com/tinyhumansai/openhuman">tinyhumansai/openhuman</a></summary>

<think>The user wants me to generate a daily report for the OpenHuman project based on GitHub data. Let me analyze the data carefully:

**Overview:**
- 24h Issues: 1 new/active, 0 closed
- 24h PRs: 17 updates (8 open/pending, 9 merged/closed)
- No new releases

**Issue #6695:** Reported in Discord - "yw" message, plus a bug report about "Reveal folder" in Brain > View Vault crashing OH. Bot auto-triaged with confidence 0.90.

**Open PRs (8):**
1. #6702 - Refresh OpenHuman UI and settings workflows
2. #6703 - Move JSON-RPC server into openhuman-rpc
3. #6705 - Move api module out of core into openhuman-tinyhumans
4. #6697 - Move hosted surfaces onto TinyHumans SDK (Sentry 36649)
5. #6689 - Per-agent Composio credentials for embedders
6. #6688 - Keep MCP server credentials out of tool output
7. #6698 - Add mobile contributor tip
8. #6696 - Stop hosted-account errors for offline profile reaching Sentry

**Closed PRs (9):**
1. #6704 - Humanized narrative pass over READMEs
2. #6701 - Clarify ownership of vendored modules
3. #6700 - Stabilize full frontend and native E2E coverage
4. #6699 - Nuke dead apparmour stuff
5. #6683 - Export readable agent traces via Langfuse OTLP
6. #6678 - Move external web search into TinySearch
7. #6668 - Call connected MCP tools directly
8. #6632 - Pin native module releases to host Rust toolchain
9. #6693 - Fix CI tests and lints keeping main red

Let me structure this as a daily report in Chinese.

Key observations:
- High PR activity (17 updates) but no new releases
- Many refactoring PRs (moving modules out of core, vendoring concerns)
- Test stability fix (CI red status)
- Documentation improvements
- Some bug fixes (Sentry error suppression, MCP credentials leak)
- One new bug report from Discord (Reveal Folder crash)
- Active security concern: MCP credentials being leaked in tool output (#6688)

Let me write a comprehensive report now.</think>

# OpenHuman 项目日报
**日期：2026-09-27**

---

## 1. 今日速览

OpenHuman 今日呈现"高 PR 活跃度 + 零版本发布"的典型重构期特征。过去 24 小时内共产生 17 条 PR 更新（9 条关闭/合并、8 条待审），但仅 1 条新 Issue 进入看板，且无新 Release。整体活跃度评估为 **中高**：仓库处于大规模模块解耦（核心拆分为 `openhuman-rpc`、`openhuman-tinyhumans` 子 crate）与 E2E 测试修复阶段，多个 P1 级稳定性修复已落地，但功能面尚未触达"可发布"门槛。CI 红灯问题被 #6693 关闭，可视为今日最重要的"质量门槛恢复"事件。

---

## 2. 版本发布

**今日无新版本发布。**

仓库当前仍处于重构整合期（核心拆分、TinyHumans SDK 化、native 工具链 pin 锁），适合作为内部 pre-release 而非正式版本。建议关注以下 PR 合并后的下一个 nightly/release tag。

---

## 3. 项目进展

### 已合并/关闭的重要 PR（按重要性排序）

| # | 标题 | 影响层级 | 链接 |
|---|------|---------|------|
| **#6693** | fix(ci): repair the tests and lints that keep main red | **P2, CI 修复** —— 修复 main 分支 `11afb0840` 持续红灯问题，包括 `Rust Feature-Gate Smoke` 与 `Rust Quality` 检查。顺带修复一个产品 Bug：unknown-tool 错误分类错误 | [#6693](https://github.com/tinyhumansai/openhuman/pull/6693) |
| **#6700** | test: stabilize full frontend and native E2E coverage | **P1, 测试基础设施** —— 对齐浏览器/原生 E2E 断言（账户、auth、tool-insights、session-owner），保留已废弃契约为 skipped 测试 | [#6700](https://github.com/tinyhumansai/openhuman/pull/6700) |
| **#6683** | Export readable agent traces via Langfuse OTLP | **可观测性** —— 代理 turn 通过认证 OTLP 代理导出，Langfuse 收到可读 turn root 与每次模型调用一个 generation；过滤 stream-delta 与中间件噪音 | [#6683](https://github.com/tinyhumansai/openhuman/pull/6683) |
| **#6678** | Move external web search into TinySearch | **搜索模块重构** —— 外部搜索迁移至 TinySearch TinyBus 子模块，新增 provider 选择与展示模式 | [#6678](https://github.com/tinyhumansai/openhuman/pull/6678) |
| **#6668** | Call connected MCP tools directly and trim integration prompts | **编排器优化** —— 移除 orchestrator 与 integrations-agent prompt 中"权限开关后的额外能力"附录；已连接 MCP 工具直接调用，不再委托给 `mcp_agent` | [#6668](https://github.com/tinyhumansai/openhuman/pull/6668) |
| **#6632** | Pin native module releases to the host Rust toolchain | **P1, native 构建** —— 6 个 native 模块 pin 锁至 Rust 1.96.1 工具链，更新 checksum 与 vendor gitlinks | [#6632](https://github.com/tinyhumansai/openhuman/pull/6632) |
| **#6704** | docs: humanized narrative pass over READMEs | **文档** —— 全量重写根 README、crate README、gitbook 开发者章节，遵循 humanizer 清单（去除 em dash、AI 套话） | [#6704](https://github.com/tinyhumansai/openhuman/pull/6704) |
| **#6701** | docs: clarify ownership of vendored modules | **P3, 治理文档** —— 在 AGENTS.md 中明确每个 vendor submodule 的所有权归属 | [#6701](https://github.com/tinyhumansai/openhuman/pull/6701) |
| **#6699** | ci: nuke dead apparmour stuff | **P1, CI 清理** —— AppImage 烟雾测试不再临时修改系统安全设置 | [#6699](https://github.com/tinyhumansai/openhuman/pull/6699) |

### 进展评估

- **测试稳定性**显著提升：#6700 + #6693 + #6632 三 PR 联动修复了 main 分支长期红灯问题。
- **可观测性**迈出关键一步：#6683 为 Langfuse 用户提供清晰代理 trace。
- **架构边界**持续清晰化：核心拆分为 RPC、TinyHumans 等独立 crate（详见"待处理积压"中的开放 PR）。
- **整体前进程度**：今日将项目从"几乎不可发版"推进到"接近 pre-release 状态"，但仍有 8 个核心 refactor PR 待合并。

---

## 4. 社区热点

今日 Issue/PR 评论数普遍为 0（除 @tinysweeper[bot] 自动 triage 机器人回复外），社区互动处于低位。但从 PR 优先级标签与维护者集中度可推断出隐含热点：

| 热度 | 主题 | 链接 |
|-----|------|------|
| 🔥🔥🔥 | **MCP 安全**：server credentials 泄露至 tool output | [#6688](https://github.com/tinyhumansai/openhuman/pull/6688) |
| 🔥🔥🔥 | **架构拆分**：JSON-RPC server 出 core 进入 `openhuman-rpc` | [#6703](https://github.com/tinyhumansai/openhuman/pull/6703) |
| 🔥🔥 | **品牌化**：托管面迁移至 TinyHumans SDK（Sentry #36649） | [#6697](https://github.com/tinyhumansai/openhuman/pull/6697) |
| 🔥🔥 | **UI 大改**：Settings、Connections、Theme Studio、workflow canvas 全面刷新 | [#6702](https://github.com/tinyhumansai/openhuman/pull/6702) |
| 🔥 | **Sentry 噪音治理**：离线本地 profile 不再上报 hosted-account 错误 | [#6696](https://github.com/tinyhumansai/openhuman/pull/6696) |

**诉求分析**：
- MCP 凭据泄露（#6688）反映出工具安全模型的紧迫需求——这不是"加 feature"，而是"堵漏洞"，建议优先合并。
- 三个架构拆分 PR（#6703 / #6705 / #6697）形成"包外置"协同，反映项目正在做"产品边界"重塑，对应 Sentry 36649 工单。
- UI 刷新（#6702）单 PR 触及多个 surface（chat / skills / workflows / themes / dashboards / desktop），合并风险较高，需要重点 review。

---

## 5. Bug 与稳定性

### 新报告 Bug（来自 Discord 自动 triage）

**[#6695](https://github.com/tinyhumansai/openhuman/issues/6695)** — *严重程度：中*
- **症状**：用户 @DavidH_MA 报告在 Brain > View Vault > Reveal Folder 时，OpenHuman 直接关闭（疑似崩溃）。
- **Triage 置信度**：0.90（自动）
- **附加信息**：用户在 Discord 附言"yw"（疑似无意义短消息）。
- **Fix PR**：暂无。

### 间接相关的稳定性 PR

| # | 内容 | 链接 |
|---|------|------|
| **#6696** | 离线"Continue locally"profile 不再向 Sentry 上报 hosted-account RPC 错误（Sentry 噪音治理） | [#6696](https://github.com/tinyhumansai/openhuman/pull/6696) |
| **#6688** | `mcp_list_servers` 仅报告 `auth_configured`/`auth_kind`，不序列化凭据；`mcp_list_tools` / `mcp_call_tool` 替换目标服务器凭据值 | [#6688](https://github.com/tinyhumansai/openhuman/pull/6688) |

**严重度排序**：
1. **#6688（MCP 凭据泄露）** — P1 安全问题，建议最早合并
2. **#6695（Reveal Folder 崩溃）** — 中等，复现路径清晰但未分配负责人
3. **#6696（Sentry 噪音）** — 低（非功能 bug，但影响产品稳定性感知）

---

## 6. 功能请求与路线图信号

### 用户原始请求
- **[#6695](https://github.com/tinyhumansai/openhuman/issues/6695)**：仅含崩溃报告，无明确功能请求。

### 来自 PR 队列的隐含路线图信号

| 信号方向 | 对应 PR | 推测纳入下一版本的可能性 |
|---------|--------|----------------------|
| **每代理独立 Composio 凭据**（多租户隔离） | [#6689](https://github.com/tinyhumansai/openhuman/pull/6689) | 高 — P1 优先级，待合并 |
| **UI 大刷新 + Theme Studio** | [#6702](https://github.com/tinyhumansai/openhuman/pull/6702) | 高 — 体积大但与品牌化方向一致 |
| **Langfuse 可读 trace 导出** | [#6683](https://github.com/tinyhumansai/openhuman/pull/6683) | **已关闭（合并）**，下版本可用 |
| **TinySearch 接管外部搜索** | [#6678](https://github.com/tinyhumansai/openhuman/pull/6678) | **已关闭（合并）**，下版本可用 |
| **MCP 工具直连（无需 `mcp_agent` 中转）** | [#6668](https://github.com/tinyhumansai/openhuman/pull/6668) | **已关闭（合并）**，下版本可用 |
| **移动端贡献指南** | [#6698](https://github.com/tinyhumansai/openhuman/pull/6698) | 中 — P2 文档补充 |
| **核心拆分三个 PR（rpc / api / hosted）** | [#6703](https://github.com/tinyhumansai/openhuman/pull/6703) / [#6705](https://github.com/tinyhumansai/openhuman/pull/6705) / [#6697](https://github.com/tinyhumansai/openhuman/pull/6697) | 中 — 合并顺序需协调，预计下下版本窗口 |

**结论**：下一个 release 大概率包含 Langfuse 可观测、TinySearch、MCP 直连三项已合并功能，并附带 Sentry 噪音治理（#6696）与 MCP 凭据安全修复（#6688）。

---

## 7. 用户反馈摘要

由于今日 Issue 仅 1 条且评论为 0，可用的真实用户反馈极为有限：

- **@DavidH_MA（Discord 渠道，issue #6695）**：
  - **痛点**：Brain > View Vault > Reveal Folder 操作导致应用直接关闭；用户怀疑这是崩溃而非预期行为。
  - **场景**：典型 vault 文件管理流程（查看 vault 文件夹物理位置）。
  - **情绪**："yw" 一词含义不明（可能是 Thanks 的反向调侃、无意义文本或缩写），整体语气平淡。
  - **未表达满意度**。

- **Discord 渠道→GitHub 自动同步机制**：今日由 @tinysweeper[bot] 检出，置信度 0.90，表明 bot 自动化已基本可用，但缺乏人工 review 跟进。

> 💡 建议维护者主动联络 @DavidH_MA 获取日志与重现步骤，并确认是否影响所有平台（macOS / Windows / Linux）。

---

## 8. 待处理积压

### 高优先级 Open PR（建议维护者本周关注）

| # | 标题 | 优先级 | 风险点 | 链接 |
|---|------|------|------|------|
| **#6688** | fix(mcp): keep configured server credentials out of MCP tool output | P1 | **安全**，应最先合并 | [#6688](https://github.com/tinyhumansai/openhuman/pull/6688) |
| **#6696** | fix(auth): stop hosted-account errors for offline profile reaching Sentry | P1 | 影响 Sentry 信号质量 | [#6696](https://github.com/tinyhumansai/openhuman/pull/6696) |
| **#6689** | feat(composio): per-agent Composio credentials for embedders | P1 | embedder 多租户功能 | [#6689](https://github.com/tinyhumansai/openhuman/pull/6689) |
| **#6703** | refactor: move JSON-RPC server into openhuman-rpc | — | 与 #6705、#6697 合并顺序相关 | [#6703](https://github.com/tinyhumansai/openhuman/pull/6703) |
| **#6705** | refactor(backend): move api module out of core | — | 2324 行体量大，需充分 review | [#6705](https://github.com/tinyhumansai/openhuman/pull/6705) |
| **#6697** | refactor(tinyhumans): move hosted surfaces onto TinyHumans SDK | — | Sentry 36649 关联 | [#6697](https://github.com/tinyhumansai/openhuman/pull/6697) |
| **#6702** | Refresh OpenHuman UI and settings workflows | — | 跨 surface 大改动 | [#6702](https://github.com/tinyhumansai/openhuman/pull/6702) |
| **#6698** | Add mobile contributor tip | P2 | 文档补充 | [#6698](https://github.com/tinyhumansai/openhuman/pull/6698) |

### 未分配 / 长期未响应 Issue
- **[#6695](https://github.com/tinyhumansai/openhuman/issues/6695)**：唯一的活跃 Issue，无 assignee，无标签（除 `discord, triage`），创建已 24 小时未见人工响应，建议为 Reveal Folder 崩溃分配 owner。

### 整体健康度提醒

- **Issue 响应时间**：仅 1 条 Issue 但 24 小时无人工回复 → ⚠️ 需关注社区互动健康度。
- **PR 合并节奏**：8 条待合并 PR 中有 3 条为大型架构 refactor，建议拆分 PR 或锁定合并顺序以避免冲突。
- **版本节奏**：上次 release 至今日已 1+ 天，叠加 Sentry 36649 与 MCP 安全修复，**预计下一版本将聚焦"安全 + 稳定性"主题**。

---

*日报生成时间：2026-09-27 · 数据源：GitHub API · 仓库：[tinyhumansai/openhuman](https://github.com/tinyhumansai/openhuman)*

</details>

---
*本日报由 [Big Model Radar](https://github.com/96loveslife/big_model_radar) 自动生成。*
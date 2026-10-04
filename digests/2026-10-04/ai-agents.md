# OpenClaw 生态日报 2026-10-04

> Issues: 500 | PRs: 500 | 覆盖项目: 8 个 | 生成时间: 2026-10-04 05:16 UTC

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

<think>The user wants me to generate a daily report for the OpenClaw project based on GitHub data. Let me analyze the data carefully and produce a structured report in Chinese.

Let me go through the data:

1. **Overall stats**:
   - 500 issues updated (338 new/active, 162 closed)
   - 500 PRs updated (302 pending, 198 merged/closed)
   - 0 new releases

2. **Key Issues to highlight** (by comment count and severity):
   - #119720 - P1, diamond lobster - Gateway event loop blocking (22 comments)
   - #137332 - P1, CLOSED - mixed terminal requester-settle (21 comments)
   - #97616 - P1, silver shellfish - zombie child processes (17 comments)
   - #94228 - P1, CLOSED - Anthropic thinking blocks replay (15 comments)
   - #150635 - P2, diamond lobster - dreaming deep phase eviction (15 comments)
   - #159612 - P0, platinum hermit - subagent settlement retries (14 comments)
   - #110190 - P1, CLOSED - runtime context carrier confusion (13 comments)
   - #121953 - P1, platinum hermit - DeepSeek cron stalls (13 comments)
   - #145252 - P0, tidepool - 2026.9.3/9.4 update tracking (13 comments)
   - #154812 - P0, gold shrimp - Gateway runaway RSS (12 comments)
   - #161976 - P1, platinum hermit - WhatsApp DM handoff (12 comments)
   - #117956 - P1, CLOSED - claude-cli metered usage (11 comments)
   - #123792 - P2, diamond lobster - assistant turns render twice (11 comments)
   - #113434 - P1, CLOSED - Codex sessions.reset RAM exhaustion (10 comments)
   - #160386 - P0, silver shellfish - SQLite I/O pressure (10 comments)
   - #161379 - P1, platinum hermit - Gateway CPU pinning (9 comments)
   - #164394 - P2, silver shellfish - WebChat jitter (9 comments)
   - #121187 - P1, diamond lobster - NO_REPLY retry (9 comments)
   - #157575 - P1, diamond lobster - heap flag overrides (9 comments)
   - #44289 - P3, CLOSED - secretref docs (8 comments)
   - #157818 - P0, diamond lobster - 2026.9.4→9.6 update fail (8 comments)
   - #123799 - P0, tidepool - Codex compact 404 guidance (8 comments)
   - #122019 - P2, tidepool - update status omits plugins (8 comments)
   - #121617 - P0, diamond lobster - compaction guard (8 comments)
   - #91532 - P2, CLOSED - cron false positive (7 comments)
   - #112696 - P1, CLOSED - Control UI avatar (7 comments)
   - #87362 - P3, CLOSED - task flow hooks (7 comments)
   - #78055 - P1, CLOSED - subagent announce stale (7 comments)
   - #71417 - P3, CLOSED - openclaw agent defaults (7 comments)
   - #161728 - P2, tidepool - Codex native-task migration (7 comments)
   - #156341 - P3, CLOSED - task-scoped decision models RFC (7 comments)
   - #142271 - P1, diamond lobster - cron agentTurn exec (7 comments)
   - #120735 - P2, tidepool - Telegram stickers (7 comments)
   - #112638 - P2, diamond lobster - session.maintenance enforce (7 comments)
   - #158966 - browser CDP credentials (6 comments)
   - #124843 - P2, diamond lobster - ACP control sync (6 comments)
   - #142754 - P2, CLOSED - runtime context text leak (6 comments)
   - #95601 - P2, CLOSED - VoiceOver accessibility (6 comments)
   - #124759 - P2, silver shellfish - iOS app lag (6 comments)
   - #80352 - P2, CLOSED - memory-wiki scope (6 comments)
   - #124731 - P2, diamond lobster - claude-cli queue steering (6 comments)
   - #164396 - P0, silver shellfish - 2026.9.8 gateway connection (6 comments)
   - #103804 - P1, platinum hermit - service-env double quotes (6 comments)
   - #119009 - P1, CLOSED - runaway retry $204 (6 comments)
   - #101445 - P2, silver shellfish - Ollama agent (6 comments)
   - #123354 - P1, silver shellfish - Matrix E2EE (6 comments)
   - #101422 - P2, diamond lobster - memory recall paths (6 comments)
   - #138629 - P1, diamond lobster - Codex ACP adapter (6 comments)
   - #164066 - P0, silver shellfish - 2026.9.8 managed update rollback (6 comments)
   - #162031 - P0, CLOSED - 2026.9.7 gateway crash-loop (6 comments)

3. **Key PRs**:
   - #140760 - daemon service env (S, ready)
   - #164773 - memory search vector (S, ready)
   - #164782 - update refusal reason (L, ready)
   - #164694 - TTS preferences dispatch (XL, ready)
   - #164501 - versioned upgrade recipes (XL, needs proof)
   - #164758 - worktrees GC background (XL, needs proof, P1)
   - #164723 - copilot tool handlers (XS, ready, P1)
   - #164465 - runtime lifecycle resources (XL, ready)
   - #164783 - device-pair authorization (S, ready, P1, security)
   - #164764 - Control UI session list (XL, waiting)
   - #164781 - memory-wiki path lookups (M, ready)
   - #163592 - compaction state migration (XL, ready)
   - #164776 - finished processes collapse (S, ready)
   - #164725 - telegram preview deletes (S, needs proof)
   - #164780 - Vault/1Password blocklist (XS, ready, P1, security)
   - #119055 - code-mode durability (XL, ready, maintainer)
   - #164778 - openshell git exclude (S, ready)
   - #164777 - hooks hookKey (S, ready)
   - #164727 - incognito ACP (XL, ready)
   - #164761 - memory-wiki related pages (L, ready)
   - #164630 - model-account links workers (XL, ready)
   - #164774 - Astra NO_REPLY fix (M, ready, P1)
   - #164779 - session projections workers (XL, ready)
   - #145895 - claude-cli CLAUDE_CONFIG_DIR (XL, needs proof, P1)
   - #140067 - mac companion exec timeouts (M, ready, P1)
   - #164772 - ws response logs (S, ready)
   - #164759 - device join codes workers (L, ready)
   - #164710 - agents deslop (XL, ready, CLOSED)
   - #164775 - exec vertical whitespace (S, needs proof, P0, security)
   - #164719 - heartbeat conversation completion (L, needs proof, P1)

Now let me organize this into a proper daily report. Key observations:

1. **No new releases** - this is concerning given the number of open P0 issues
2. **High activity** - 500 issues + 500 PRs in 24h is very high
3. **Several P0 issues** - many critical bugs affecting release
4. **2026.9.8 just released** (visible in #164066, #164396) - released 2026-10-03, but already has issues
5. **Multiple update/upgrade bugs** - many issues around 9.x updates
6. **Performance focus** - many PRs about moving work off main thread to workers
7. **Security hardening** - several security-related PRs (Vault/1Password blocklist, exec vertical whitespace, hookKey, CDP credentials)

Let me write the report now. I should be objective, data-driven, and highlight project health.

I'll note that today is 2026-10-04 based on the request. The data is from "the past 24 hours".

Looking at issue dates, this appears to be synthetic/fictional data (issues dated in the future from "2026"). But I should treat it as the user has presented it.

Let me write the report in Chinese with professional, data-driven language.</think>

# OpenClaw 项目动态日报
**日期：2026-10-04** | **数据来源：[github.com/openclaw/openclaw](https://github.com/openclaw/openclaw)**

---

## 1. 今日速览

OpenClaw 仓库在 24 小时内出现 **500 条 Issue 更新** 和 **500 条 PR 更新**，整体活跃度处于极高水平。新提交中 Issue 新开/活跃 338 条、关闭 162 条；PR 待合并 302 条、合并/关闭 198 条。**当日未发布任何新版本**，但 9.7→9.8 升级问题集中爆发（[#164066](https://github.com/openclaw/openclaw/issues/164066)、[#164396](https://github.com/openclaw/openclaw/issues/164396)），说明刚发布的 `2026.9.8` 已暴露出发布阻断级回归。仓库当前讨论焦点集中在 **Gateway 主线程性能/内存治理**、**subagent 结算逻辑** 和 **2026.9.x 升级链路可靠性** 三大方向，P0/P1 议题密度显著高于常态，项目处于"高活跃、高风险"状态。

---

## 2. 版本发布

**今日无新版本发布。** 此前一日（2026-10-03）发布的 [`2026.9.8`](https://github.com/openclaw/openclaw/issues/164066) 在今日已收到首轮故障反馈：

- [#164066](https://github.com/openclaw/openclaw/issues/164066) **管理升级仍回滚**：`#160671`、`#163803` 修复仅合入 main，未进入 9.8 包；激活 Doctor 仍返回 `undergoing offline maintenance`。
- [#164396](https://github.com/openclaw/openclaw/issues/164396) **Win11 + Node 22 LTS 无法连接本地 Gateway**：2026.9.8 全新安装后 onboarding 卡死。

> ⚠️ **迁移提示**：建议生产环境暂缓从 9.7 直跳 9.8，等待针对 `doctor-failed` 激活路径与本地 onboarding 的 hotfix。

---

## 3. 项目进展

### 已关闭的关键 Bug 修复

| Issue | 主题 | 影响 |
|---|---|---|
| [#137332](https://github.com/openclaw/openclaw/issues/137332) | mixed terminal requester-settle 永久重试 | 修复 owner 校验后的子代理结算 |
| [#94228](https://github.com/openclaw/openclaw/issues/94228) | Anthropic `thinking` block 回放砖死长工具会话 | 修复签名失效 400 |
| [#117956](https://github.com/openclaw/openclaw/issues/117956) | `claude-cli` 后端绕过 `CLAUDE_CLI_CLEAR_ENV` 造成 13.7M token 计费 | **安全/成本** 关键修复 |
| [#110190](https://github.com/openclaw/openclaw/issues/110190) | 运行时上下文载体被错误置于 user message 之后 | 模型推理浪费 |
| [#113434](https://github.com/openclaw/openclaw/issues/113434) | Codex `sessions.reset` 复用退役 session ID 导致 Gateway RAM 耗尽 | 内存治理 |
| [#119009](https://github.com/openclaw/openclaw/issues/119009) | 模型调用重试死循环刷掉 $204 | **计费风暴** 防护 |
| [#162031](https://github.com/openclaw/openclaw/issues/162031) | 2026.9.7 Gateway 启动期 crash-loop | 9.7→9.8 升级链前置修复 |
| [#91532](https://github.com/openclaw/openclaw/issues/91532) | Cron 隔离会话 tool-level 错误被误判失败 | 误报修复 |

### 重要 RFC / 功能合并

- [#44289](https://github.com/openclaw/openclaw/issues/44289) **secretref 文档自动生成**（关闭）：从 secret target registry 元数据生成参考文档。
- [#156341](https://github.com/openclaw/openclaw/issues/156341) **任务范围决策模型 RFC**（关闭）：复用 Decision 运行时支持每任务选模型。
- [#80352](https://github.com/openclaw/openclaw/issues/80352) **memory-wiki 作用域**（关闭）：为 `includeCompiledDigestPrompt` 增加 per-agent/sessionKey 维度。
- [#71417](https://github.com/openclaw/openclaw/issues/71417) **CLIs 默认值修正**（关闭）：`openclaw agent` 不再隐式 `--channel last`。

### 重点未关闭 PR（"ready for maintainer look"）

- [#164773](https://github.com/openclaw/openclaw/pull/164773) `perf(memory)` 不解码 number[] 直接打分 sqlite-vec 回退路径（@etzelm）
- [#164782](https://github.com/openclaw/openclaw/pull/164782) `fix(update)` 通过 managed handoff 透传子进程拒绝原因（@steipete）
- [#164783](https://github.com/openclaw/openclaw/pull/164783) `fix(device-pair)` `/pair approve` 与 `device.pair.approve` 鉴权对齐（@yetval）🔒 安全敏感
- [#164780](https://github.com/openclaw/openclaw/pull/164780) `fix(security)` 拦截 workspace `.env` 中的 Vault/1Password CLI 控制（@yetval）🔒 安全敏感
- [#164775](https://github.com/openclaw/openclaw/pull/164775) `fix(exec)` 拒绝 shell 授权中未引用的垂直空白符（@yetval）🔒 P0 安全
- [#164774](https://github.com/openclaw/openclaw/pull/164774) `fix(agents)` 修复 GPT-6 Astra 异步工具后续 NO_REPLY 致回复被吞（@obviyus）

> **总体评估**：项目在性能治理（worker 化、内存）、subagent 结算、AI provider 适配三条主线持续推进，今日合并/关闭多集中在历史遗留 bug 收尾；下一阶段瓶颈在"Gateway 主线程长事务"的系统性重构（[#164465](https://github.com/openclaw/openclaw/pull/164465)、[#164630](https://github.com/openclaw/openclaw/pull/164630)、[#164779](https://github.com/openclaw/openclaw/pull/164779)、[#164759](https://github.com/openclaw/openclaw/pull/164759) 等 XL 级 PR 共同推进）。

---

## 4. 社区热点

### 评论数 Top Issues

| Rank | Issue | 评论 | 主题 | 状态 |
|---|---|---|---|---|
| 1 | [#119720](https://github.com/openclaw/openclaw/issues/119720) | 22 | 同步 agent 持久化阻塞 Gateway 事件循环 | OPEN |
| 2 | [#137332](https://github.com/openclaw/openclaw/issues/137332) | 21 | requester-settle 永久重试 | ✅ CLOSED |
| 3 | [#97616](https://github.com/openclaw/openclaw/issues/97616) | 17 | hook/tool 子进程泄漏致僵尸累积 | OPEN |
| 4 | [#94228](https://github.com/openclaw/openclaw/issues/94228) | 15 | Anthropic thinking 回放砖死会话 | ✅ CLOSED |
| 4 | [#150635](https://github.com/openclaw/openclaw/issues/150635) | 15 | short-term recall 驱逐导致 dreaming 无法晋升 | OPEN |
| 6 | [#159612](https://github.com/openclaw/openclaw/issues/159612) | 14 | subagent settlement "owner changed" 反复重投 | OPEN |

### 👍 数亮点

- [#97616](https://github.com/openclaw/openclaw/issues/97616)（1 👍）、[#94228](https://github.com/openclaw/openclaw/issues/94228)（2 👍）、[#78055](https://github.com/openclaw/openclaw/issues/78055)（2 👍）、[#95601](https://github.com/openclaw/openclaw/issues/95601)（2 👍）、[#44289](https://github.com/openclaw/openclaw/issues/44289)（1 👍）。

### 诉求分析

- **会话状态机正确性** 是当下最高频诉求（结算、归属、合并、压缩），几乎所有 P0/diamond lobster 议题都涉及 subagent / parent 状态机。
- **AI provider 适配裂痕**（Anthropic thinking、Codex ACP、Ollama 工具、claude-cli 转写目录）持续成为新增故障源，社区对"多 provider 兼容矩阵"的不安全感明显上升。
- **升级/迁移可靠性** 已超越单点 bug 演化为系统性议题（[#145252](https://github.com/openclaw/openclaw/issues/145252) 跟踪贴 + 多条并行报告）。

---

## 5. Bug 与稳定性

### 🔴 P0 / 崩溃循环 / 发布阻断（无 fix PR）

| Issue | 严重度 | 主题 | 备注 |
|---|---|---|---|
| [#159612](https://github.com/openclaw/openclaw/issues/159612) | P0 / 🐚 platinum | subagent 完成结算 "owner changed" 每轮重投 | QQ Bot / mac mini，私信模式触发 |
| [#145252](https://github.com/openclaw/openclaw/issues/145252) | P0 / 🌊 tidepool | 2026.9.3/9.4 升级/回滚/Doctor 协调贴 | 维护者跟踪索引 |
| [#154812](https://github.com/openclaw/openclaw/issues/154812) | P0 / 🦐 gold | Gateway RSS 在 V8 堆外失控 → host OOM | 单实例 9.32 GiB |
| [#160386](https://github.com/openclaw/openclaw/issues/160386) | P0 / 🦪 silver | 9.6 大库 SQLite I/O 压力 + WebUI RPC 超时 | 回归 |
| [#164066](https://github.com/openclaw/openclaw/issues/164066) | P0 / 🦪 silver | 2026.9.8 管理升级仍回滚（修复未进包

---

## 横向生态对比

<think>The user wants me to generate a horizontal comparison analysis report based on the dynamic summaries of various open source projects. Let me organize this carefully.

I have data from:
1. OpenClaw - high activity, 500 issues, 500 PRs, no releases
2. NanoBot - 47 PRs, 3 issues, 21 closed
3. PicoClaw - very low activity, 1 issue
4. IronClaw - no activity
6. LobsterAI - 6 stale issues, 1 PR, no activity
7. QwenPaw - 4 issues, 7 PRs
8. Hermes Agent - 50 issues, 50 PRs
9. OpenHuman - 17 issues, 27 PRs (highly productive)

Let me structure the report with all 7 sections requested. The language should be concise, professional, data-supported, suitable for tech decision-makers and developers.

Key observations:
- OpenClaw is the clear leader in volume and the reference project
- OpenHuman shows extremely high efficiency (closed 9 issues, merged 19 PRs in 24h)
- Hermes Agent has similar volume to OpenClaw but Windows-heavy issues
- NanoBot shows focused mobile/WebUI iteration
- PicoClaw, IronClaw, LobsterAI are showing signs of stagnation or low maintenance
- QwenPaw has small but clean iteration

Common technical directions:
- Subagent/session state management (OpenClaw, NanoBot)
- Multi-provider AI compatibility (OpenClaw, NanoBot, Hermes)
- Windows platform stability (OpenClaw, Hermes)
- Memory systems (OpenClaw, NanoBot #1651, OpenHuman memory v2)
- Web/Mobile UI (NanoBot, Hermes, QwenPaw)
- Update/upgrade reliability (OpenClaw 9.7→9.8, Hermes)
- Security hardening (OpenClaw exec/shell security, Hermes js-yaml)
- MCP integration (NanoBot)
- Performance optimization (workers, prompt caching)

Let me write a comprehensive report now.</think>

# 个人 AI 助手/自主智能体开源生态横向对比分析
**数据日期：2026-10-04** | **覆盖项目：8 个**

---

## 1. 生态全景

个人 AI 助手与自主智能体开源生态呈现**"双高峰 + 长尾"的马太分布**：OpenClaw 与 Hermes Agent 以 500+500 与 50+50 的 24 小时吞吐稳居第一梯队，OpenHuman 以 17 关闭/19 合并的高转化率成为单兵作战效率之最；而 NanoBot（47 PR）、QwenPaw（11 更新）处于密集打磨期，PicoClaw、IronClaw、LobsterAI 则集体陷入**维护停滞或活跃度冰点**。整体技术焦点已从"模型接入"过渡到"长回合自主性、跨 Provider 鲁棒性、子代理结算、Windows 平台一等公民化"四个深水区，**基准驱动（Terminal-Bench / DeepSWE）+ 维护者集中修复**正在成为新范式。

---

## 2. 各项目活跃度对比

| 项目 | Issues 更新（新开/关闭） | PR 更新（待合并/已合并关闭） | 新版本 | 健康度 | 主要特征 |
|---|---|---|---|---|---|
| **OpenClaw** | 338 / 162 | 302 / 198 | ❌ | 🟡 高活跃·高风险 | P0 密度高，9.7→9.8 升级链暴露，subagent 结算风暴 |
| **Hermes Agent** | 42 / 8 | 45 / 5 | ❌ | 🟡 高活跃·Windows 债 | P0/P1 集中于 Windows 命名管道/PTY/注册表 |
| **OpenHuman** | 8 / 9 | 8 / 19 | ❌ | 🟢 高效闭环 | 基准回归驱动，Issue→PR 强耦合，转化率 70% |
| **NanoBot** | 3 / 0 | 26 / 21 | ❌ | 🟢 稳健迭代 | WebUI 移动端集中打磨，无 P0 积压 |
| **QwenPaw** | 4 / 1 | 7 / 0 | ❌ | 🟡 小步快跑 | Bug-PR 强耦合但合并端吞吐为零 |
| **PicoClaw** | 1 / 0 | 0 / 0 | ❌ | 🔴 静默期 | 仅 1 条 QQ 通道 stale Issue，已 8 天无响应 |
| **LobsterAI** | 6* / 0 | 1 / 0 | ❌ | 🔴 近乎停摆 | *6 条全为 stale bot 触发，193 天前 P0 Bug 无 PR |
| **IronClaw** | 0 / 0 | 0 / 0 | ❌ | ⚫ 无活动 | 24h 零信号 |

> **健康度图例：🟢=稳健 · 🟡=高活跃但有风险点 · 🔴=停滞 · ⚫=无活动**

---

## 3. OpenClaw 在生态中的定位

| 维度 | OpenClaw | 同类对照 |
|---|---|---|
| **吞吐规模** | 24h 1000 条更新（500+500），约为 Hermes Agent 的 10 倍、NanoBot 的 20 倍 | 生态绝对头部 |
| **议题深度** | P0 议题覆盖 Gateway 内存、SQLite I/O、subagent 结算、升级链断裂、provider 矩阵 | 已进入"生产可用性"阶段 |
| **技术路线** | 强调 worker 化（#164465/#164630/#164779/#164759 XL 级 PR 群）、sqlite-vec 检索、managed upgrade、shell/secret 安全 | 与 Hermes 趋同（皆 worker 化），但更系统化 |
| **社区规模** | 维护者标签细分（diamond lobster / platinum hermit / silver shellfish 等），多人协作 | NanoBot、QwenPaw 多为单点贡献；OpenHuman 主要由 @senamakel 一人驱动 |
| **生态卡位** | 个人 AI 助手的"Linux/服务器/CLI first"代表，与 Hermes 的"Desktop first"形成镜像 | 是其他项目的事实参考（用户基数与议题量级） |

**关键差异点**：OpenClaw 是当前唯一**主动治理升级链路（[#145252](https://github.com/openclaw/openclaw/issues/145252) tracking + 多 fix PR）**的项目；Hermes 仍处于 PR 端交付不稳定状态（v0.21.x 后无新版本）；OpenHuman 则用基准驱动快速抹平 P1/P2。**生态参照价值**最高的项目，但今日"无版本发布 + P0 高密度"信号值得生产用户警惕。

---

## 4. 共同关注的技术方向

| 方向 | 涉及项目 | 具体诉求 |
|---|---|---|
| **🔁 子代理/会话状态机** | OpenClaw（#159612/#150635）、NanoBot（#5985）、Hermes（#132401/#127919） | requester-settle 重试、scratch 静默删除、session-owned task、Bot Chat 重启断流 |
| **🌐 多 Provider AI 适配** | OpenClaw（Anthropic thinking/Codex/Ollama/claude-cli）、NanoBot（OpenAI SDK 3.8/MCP）、Hermes（OpenRouter 403/delisted 404） | SDK 升级字段别名、provider 故障分类（safety vs bad_request）、第三方 403 防护 |
| **🪟 Windows 平台一等公民** | OpenClaw（#162031 gateway crash-loop）、Hermes（5 个 P0/P1） | 命名管道读取阻塞、Win11 25H2 UserChoice、app-bound 加密、PTY setsid 杀进程超时 |
| **🧠 记忆系统** | OpenClaw（dreaming 晋升）、NanoBot（#1651 技能记忆层，6 个月未决）、OpenHuman（memory v2 #6949 草案） | 短期 recall 驱逐、context 压缩丢消息、engine-selectable recall/store |
| **⚡ 性能 / Worker 化** | OpenClaw（#164465/#164630/#164779/#164759 XL 群）、Hermes（#113565 技能索引裁剪 1.1K→0.45K）、OpenHuman（DeepSeek prompt cache #6962） | 长事务主线程治理、prompt cache 命中、tokenjuice 按需摘要 |
| **🔒 安全加固** | OpenClaw（#164775 shell 垂直空白、#164780 Vault/1Password 拦截、#164783 device-pair）、Hermes（#127958 js-yaml 4.3.2 GHSA） | shell 注入面收窄、依赖 CVE 升级、鉴权边界对齐 |
| **🔄 升级/迁移可靠性** | OpenClaw（#164066/#164396 9.7→9.8）、Hermes（#128461 parked-branch、#132365 update marker v2） | 管理升级回滚、stable 渠道 R2、parked-branch 非破坏性跳过 |
| **💬 通道一致性 / fallback 透明** | NanoBot（#6031 fallback 通知、#6029 静默压缩）、OpenClaw（subagent 归属） | observer hook 覆盖、跨渠道广播粒度控制、用户对模型切换的可见性 |
| **🧰 MCP 协议完整性** | NanoBot（#6018 分页、#6019 无工具服务连接） | resources/prompts 分页拉取、空能力 MCP 服务兼容性 |
| **🖥️ Desktop / 移动 UI 打磨** | NanoBot（4 条 WebUI 移动端 PR）、Hermes（#132597 Markdown 预览、#132596 Quick Entry） | 触屏可点击区、键盘自适应、窗口位置持久化 |

---

## 5. 差异化定位分析

| 项目 | 功能侧重 | 目标用户 | 技术架构关键差异 |
|---|---|---|---|
| **OpenClaw** | 全栈个人 AI 助手：CLI/Gateway/Memory/Subagent | 开发者 + 重度技术用户 | 多 Provider 适配、sqlite-vec、managed upgrade、子代理结算 |
| **Hermes Agent** | Desktop-first 助手 + Bot 跨网关协作 | 桌面深度用户 + IDE 集成（ACP） | Windows/macOS/Linux 多平台 messaging、watchdog 心跳、Bot 协作 |
| **OpenHuman** | 自主回合优化 + 基准驱动 | 评测/AI 工程师 | memory v2 engine-selectable、回合时钟/迭代预算、TinyJuice 按需摘要 |
| **NanoBot** | WebUI/TUI 跨端体验 + Provider 兼容 | 触屏 + 终端双栖用户 | 移动键盘自适应、MCP 全能力发现、cron 时区 DST |
| **QwenPaw** | 元数据一致 + 异常可观测 | 国内/企业 LLM 集成方 | catalog ↔ runtime 元数据同步、`finish_reason=length` 暴露、网关内容审查容错 |
| **LobsterAI** | 桌面端消费级助手 + 商业化（加油包） | C 端桌面用户 | 微信公众号集成、Windows 桌面斜杠命令、内存治理缺陷 |
| **PicoClaw** | 轻量级（推测） | 国内 QQ 生态用户 | QQ 通道依赖、第三方平台绑定 |
| **IronClaw** | 不明 | 不明 | 零数据无法判断 |

**关键差异**：
- **架构哲学**：OpenClaw/OpenHuman 偏"agent runtime"（强调长回合自主、状态机正确性），Hermes 偏"desktop suite"（强调跨平台 messaging 与 IDE 集成），NanoBot 偏"前端体验工程"，QwenPaw 偏"LLM 网关可观测性"，LobsterAI/PicoClaw 偏"国内 C 端/单通道"。
- **治理成熟度**：OpenClaw > Hermes ≈ OpenHuman > NanoBot > QwenPaw ≫ LobsterAI ≈ PicoClaw > IronClaw。

---

## 6. 社区热度与成熟度分层

```
┌─────────────────────────────────────────────────────────────┐
│  第一梯队 · 高活跃 + 高风险                                  │
│  OpenClaw · Hermes Agent                                    │
│  —— 24h 50-500+ 吞吐，P0 密度高，需关注发版与 Windows 治理  │
├─────────────────────────────────────────────────────────────┤
│  第二梯队 · 高效闭环                                         │
│  OpenHuman                                                  │
│  —— 19/27 PR 合并率，基准驱动单兵效率之王                   │
├─────────────────────────────────────────────────────────────┤
│  第三梯队 · 稳健打磨                                         │
│  NanoBot · QwenPaw                                          │
│  —— 移动端/WebUI 体验优化、多 Provider 兼容，节奏紧凑        │
├─────────────────────────────────────────────────────────────┤
│  第四梯队 · 停滞/信号微弱                                    │
│  LobsterAI · PicoClaw · IronClaw                            │
│  —— 193 天 P0 Bug 无 fix，stale Issue 堆积，无新版本        │
└─────────────────────────────────────────────────────────────┘
```

**分层结论**：
- **快速迭代阶段**：OpenClaw、Hermes、OpenHuman、NanoBot、QwenPaw
- **质量巩固阶段**：OpenHuman（最典型——单兵高频合并，bug 漏斗完整）
- **风险期/失速期**：LobsterAI（193 天 P0 无 fix）、PicoClaw（8 天 stale Issue 无响应）、IronClaw（24h 零活动）

---

## 7. 值得关注的趋势信号

### 🔥 趋势一：基准驱动开发（BDD）正在成为新范式
OpenHuman 通过 Terminal-Bench 4.0 / DeepSWE 跑分系统性发现 8 个 P1/P2 并逐一 PR 修复，转化率高达 70%。**对 AI 智能体开发者的启示**：建立自动化基准测试套件，让"机器可量化的回归"替代"用户反馈驱动"，是提升修复响应效率的有效路径。

### 🔥 趋势二：Windows 平台从"能用"向"好用"跃迁，但仍是系统性短板
OpenClaw + Hermes 24h 内累计暴露 **6+ 个 Windows P0/P1**（命名管道、注册表、app-bound 加密、PTY、shell hook）。**对架构师的启示**：命名管道与同步 IO 阻塞事件循环是 desktop agent 的"原罪"，必须从一开始就采用异步 I/O 与 watchdog 租约设计。

### 🔥 趋势三：多 Provider 兼容矩阵裂痕普遍化
Anthropic thinking 签名回放（OpenClaw）、OpenAI SDK 3.8 别名（NanoBot）、OpenRouter 403 会话中毒（Hermes）、Ali 网关内容审查误杀（QwenPaw）。**对 LLM 集成开发者的启示**：必须建立"故障分类 → 降级 → 会话隔离"三段式 provider 适配层，且需监控 SDK 升级引入的字段别名/默认行为变化。

### 🔥 趋势四：长回合自主性是下一阶段核心竞争力
OpenClaw（subagent 结算）、OpenHuman（回合时钟/迭代预算/推理耗尽恢复）、Hermes（scratch 数据安全）共同指向同一议题——**agent 能否在多日/多回合内保持状态一致性、不静默丢失工作、能在截断时优雅恢复**。这将成为区分"玩具"与"生产可用"的分界线。

### 🔥 趋势五：升级链路正在成为新的可靠性战场
OpenClaw 9.7→9.8、Hermes parked-branch、QwenPaw WebView2 缓存，**"用户信任升级通道"的成本急剧上升**。**对运维的启示**：可热补丁的 worker 化 + 显式 update marker v2 + rollback safety net 应成为标配，而非可选项。

### 🔥 趋势六：记忆系统进入"重写期"
OpenHuman memory v2（engine-selectable recall/fetch/store）、NanoBot 技能记忆层（7 个月未决）、OpenClaw dreaming 晋升机制——三家同时在重构记忆层。**对架构师的启示**：第一代基于"全量上下文 + 简单压缩"的方案已触及天花板，下一代记忆系统将围绕"分层存储 + 选择性 recall + 与 subagent 边界"展开。

### 🔥 趋势七：观察者钩子（Observer Hook）成为跨产品共识
NanoBot #6031（fallback 跨通道通知）、#6029（静默压缩）共同揭示**observer hook 应作为统一的渠道事件源**。**对产品经理的启示**：将"用户对 agent 行为的可观测性"提升为一等公民，是建立 AI 助手信任的关键 UX 投资。

### ⚠️ 警示信号
- **生态长尾失速**：LobsterAI 193 天 P0 Bug 无 fix + IronClaw 24h 零信号 → 社区资源向头部集中的趋势明显，新入场项目需要明确的差异化卡位。
- **PicoClaw 单通道依赖风险**：QQ 接口升级 8 天无响应，体现单一第三方通道绑定的脆弱性。

---

**📊 一句话总结**：今日生态呈现"OpenClaw 领跑、OpenHuman 效率最高、Hermes/Windows 议题最重、NanoBot/QwenPaw 稳健打磨、长尾项目集体失速"的格局；**长回合自主性、Provider 故障分类、Windows 平台化、记忆系统重写**是下一阶段四大技术风口。

---

*本报告基于 2026-10-04 当日 GitHub 公开数据生成，仅供技术决策参考。*

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

<think>让我仔细分析这些数据，生成一份专业的项目日报。

数据概览：
- 过去24小时 Issues: 3条新开/活跃，0条已关闭
- 过去24小时 PRs: 47条（26待合并，21已合并/关闭）
- 新版本发布: 0个

让我分析具体内容：

**Issues (3条)**:
1. #6031 - 通知聊天渠道当fallback模型服务（目前仅WebUI）
2. #6029 - Bug: 后台idle/dream周期静默上下文压缩和抑制频道广播
3. #6024 - Bug: CLI App for Obsidian在nanobot下找不到Obsidian

**PRs (47条，展示20条)**:
已关闭(21)：
- #6030 - fix(cli-apps): 保留XDG_RUNTIME_DIR给桌面CLI
- #6023 - fix(webui): 放大触摸设备预览控件
- #6022 - fix(webui): 保持触摸导航在键盘上方可见
- #6021 - fix(webui): 隐藏不可用的网站预览操作
- #5640 - feat(webui): 移动键盘输入和流式发送
- #5763 - fix(api): 对无效多模态字段类型返回400
- (其他更多已关闭)

Open PRs (26待合并)：
- #1651 - feat(memory): 添加可选技能记忆和查询感知检索
- #5914 - fix(napcat): 保留图像声明非数字文件大小的消息
- #6027 - fix(tui): 按时间顺序合并保存的文件编辑
- #6026 - fix(tui): 发送失败后保留排队的提示
- #6025 - fix(tui): 使用Kitty keypad Enter提交提示
- #5985 - feat(subagent): 添加会话拥有的任务消息和取消
- #6018 - fix(mcp): 发现所有资源和提示页面
- #5922 - fix: 使用本地时区规则计算cron下次运行时间
- #6009 - fix(webui): 失败初始获取后保留侧边栏状态
- #5764 - fix(provider): 序列化半开fallback探针
- #6013 - fix: 使用JSON相等性进行枚举验证
- #6011 - fix(providers): 流式传输Codex图像生成响应
- #6019 - fix(mcp): 连接到没有工具能力的服务器
- #6020 - fix(responses): 使用API别名序列化SDK模型
- (更多)

让我注意到重要关联：
- #6024 (Issue) ↔ #6030 (PR) - Obsidian XDG_RUNTIME_DIR问题
- #6008 (Issue未列出但PR提到) ↔ #6009 (PR) - 侧边栏状态
- #5987 (Issue未列出但PR提到) ↔ #6025 (PR) - Kitty keypad Enter
- #4332 (历史) ↔ #6011 (PR) - Codex图像生成
- #5916 (历史) ↔ #6018 (PR) - MCP工具分页
- #5976 (历史) ↔ #5985 (PR) - subagent会话

让我组织一下报告内容：

1. **今日速览**: 高活跃度，47个PR，21个已合并/关闭，没有新版本但有多项修复
2. **版本发布**: 无
3. **项目进展**: WebUI移动端优化（TUI触摸、键盘、预览），CLI apps桌面集成修复，subagent会话功能
4. **社区热点**: 都是0评论，但可以分析内容
5. **Bug与稳定性**: Obsidian XDG_RUNTIME_DIR、TUI文件编辑合并、cron时区、Codex图像、subagent排队等
7. **用户反馈**: 来自Issue内容的痛点
8. **待处理积压**: #1651（开放很久）、#5764（半开fallback）

让我撰写报告：

注意：用户希望我详细思考并输出报告。报告需使用中文，因为用户是用中文提问的。

让我开始撰写：</think>

# NanoBot 项目日报
**日期：2026-10-04**

---

## 1. 今日速览

NanoBot 今日呈现出**高活跃的开发态势**：过去 24 小时共产生 47 条 PR 更新，其中 21 条已合并或关闭，26 条仍待评审，合并/关闭比例约 45%，反映出维护团队对 Bug 修复与体验优化类 PR 的快速响应。Issues 方面新增 3 条，均为当日创建、未关闭，无新版本发布。整体而言，项目处于**密集迭代期**，重点聚焦在 WebUI 移动端适配、TUI 输入体验、CLI Apps 桌面集成、MCP 协议完整性以及 Provider 稳定性等多个方向。

---

## 2. 版本发布

今日无新版本发布。

---

## 3. 项目进展

### 已合并/关闭的重要 PR（21 条）

**WebUI 移动端体验集中修复（4 条）**

- [#6023](https://github.com/HKUDS/nanobot/pull/6023) `fix(webui): enlarge preview controls on touch devices` —— 在触屏设备上放大预览标签/关闭按钮的可点击区域
- [#6022](https://github.com/HKUDS/nanobot/pull/6022) `fix(webui): keep touch navigation visible above the keyboard` —— iOS 键盘弹出时自适应可视视口，避免导航被遮挡
- [#6021](https://github.com/HKUDS/nanobot/pull/6021) `fix(webui): hide unavailable website preview actions` —— 共享浏览器的预览能力校验，避免点击后展示空白面板
- [#5640](https://github.com/HKUDS/nanobot/pull/5640) `feat(webui): mobile keyboard input and streaming send` —— 触屏下 Enter 改换行、Send 按钮提交；流式响应期间持续可发送（合并跨度近 1 个月）

**API 与 Provider 稳定性**

- [#5763](https://github.com/HKUDS/nanobot/pull/5763) `fix(api): return 400 for invalid multimodal field types` —— 区分畸形 JSON 字段类型（400）与超大文件（413），语义更准确
- 此外还有多条已关闭但未在评论 TOP20 展示的修复

**整体评估**：WebUI 在移动端的可用性是一次集中打磨，配合 [#6030](#6030) 的 CLI Apps 环境继承，构成了本轮"桌面/移动跨端一致性"主线。

---

## 4. 社区热点

注：今日所有 Issues 与 PR 评论数均显示为 0 或 undefined，社区讨论密度较低，热度主要通过**功能/修复覆盖广度**体现，而非评论量。

**最受关注的功能/痛点**（按代码评审权重与领域热度排序）：

1. **#5985** [`feat(subagent): add session-owned task messaging and cancellation`](https://github.com/HKUDS/nanobot/pull/5985) —— 在 #5976 之上构建会话级子代理管控，支持创建/通讯/检查/定向取消，WebUI 区分"进行中工作"与"持久化结果"。这是当前**最具架构意义**的开放 PR。
2. **#1651** [`feat(memory): add optional skill memory and query-aware retrieval`](https://github.com/HKUDS/nanobot/pull/1651) —— 开放超过 6 个月的记忆增强提案，引入 `memory/SKILLS.jsonl` 与查询感知技能检索，长期未合并可能受限于评审人手。
3. **#6031** [`Notify chat channels when a fallback model serves a turn`](https://github.com/HKUDS/nanobot/issues/6031) —— 用户明确诉求：当模型跨 Provider 切换时，QQ / Discord / Telegram 等渠道应收到提示，目前仅 WebUI 显示。揭示了**观察者钩子（observer hook）的渠道覆盖缺口**。

---

## 5. Bug 与稳定性

### 高优先级（已有 P0/P1 fix PR）

| 严重度 | Issue/PR | 描述 | 状态 |
|--------|----------|------|------|
| **P0** | [#6026](https://github.com/HKUDS/nanobot/pull/6026) | TUI 自动排队发送时，head 项在 transport 确认前就被移除，发送失败将**丢失文本和附件** | Open，已附 send-failure 回归测试 |
| **P1** | [#5922](https://github.com/HKUDS/nanobot/pull/5922) | `CronSchedule.tz` 未设置时使用当前 UTC 偏移而非 DST 规则，09:00 任务在夏令时切换后会**早/晚 1 小时**触发 | Open |
| **P2** | [#6027](https://github.com/HKUDS/nanobot/pull/6027) | TUI 保存的文件编辑事件以**逆时间序**合并，导致 start 事件覆盖已完成 diff | Open，含 diff-viewer 回归用例 |

### 中优先级（用户报告 + 已有修复）

- **[#6024](https://github.com/HKUDS/nanobot/issues/6024) ↔ [#6030](https://github.com/HKUDS/nanobot/pull/6030)**：Obsidian 在 GNOME/Wayland 下被 CLI Apps 报"unable to find Obsidian"。根因是 `XDG_RUNTIME_DIR` 被丢弃；PR 已保留该变量并补充文档说明。**Issue-PR 已成对修复**。
- **[#6029](https://github.com/HKUDS/nanobot/issues/6029)**：后台 `idleCompactAfterMinutes` 与 dream/heartbeat 周期会向活跃聊天渠道广播"Compressing context…"，干扰用户。期望支持静默模式。**目前尚无对应 PR**。
- **[#5914](https://github.com/HKUDS/nanobot/pull/5914)**：Napcat 图片 `file_size` 为非数字时被 `_download_image` 上层错误丢弃。**已有修复 PR**。
- **[#6018](https://github.com/HKUDS/nanobot/pull/6018)**：MCP `connect_mcp_servers()` 仅请求第一页 resources/prompts，分页后的内容从未进入工具注册表。延续 #5916 的工作。
- **[#6019](https://github.com/HKUDS/nanobot/pull/6019)**：仅暴露 resources/prompts 而无 tools 能力的 MCP 服务，初始化后调用 `Method not found` 导致连接中止。
- **[#6011](https://github.com/HKUDS/nanobot/pull/6011)**：Codex 图像生成使用缓冲 `AsyncClient.post()`，HTTPX 可能在 `response.completed` 后读完整 body，造成已生成图像丢失。#4332 的后续。
- **[#6009](https://github.com/HKUDS/nanobot/pull/6009)**：WebUI 侧边栏首次拉取失败时会被误判为空仓库；新增每 3 秒重试逻辑（修复 #6008）。
- **[#6025](https://github.com/HKUDS/nanobot/pull/6025)**：Kitty keypad Enter 被解码为 `kpenter`，与 composer 的普通 Enter 绑定冲突（关联 #5987）。

### Provider/SDK 兼容性

- **[#6020](https://github.com/HKUDS/nanobot/pull/6020)**：OpenAI SDK 3.8.0 引入 `ResponseFunctionToolCall.async_`（API 别名为 `async`），`model_dump()` 默认未带 `by_alias=True` 导致内部字段名泄漏到 API。
- **[#6013](https://github.com/HKUDS/nanobot/pull/6013)**：工具参数 enum 校验使用 Python `in` 语义，导致 `True` 通过 `{"enum":[1]}`、`0` 通过 `{"enum":[false]}`，违反 JSON Schema 类型区分。
- **[#5764](https://github.com/HKUDS/nanobot/pull/5764)**：`FallbackProvider` 半开状态下并发请求可同时打到恢复中的主 Provider，应串行化。

**修复覆盖度**：3 条新增 Issue 中，#6024 已有 PR #6030 跟进（占比 33%）；整体 P0/P2 Bug 基本都已附 PR。

---

## 6. 功能请求与路线图信号

1. **跨通道 fallback 通知**（#6031）—— 不仅是"补通知"，更暗示 **observer hook 应作为统一的渠道事件源**。可与 #6029 的"静默后台模式"合并为**渠道广播粒度控制层**。该方向有较大概率进入路线图。
2. **后台任务静默压缩**（#6029）—— `idleCompactAfterMinutes` 与 dream/heartbeat 的广播策略需要配置化，预计伴随下一个 0.3.x 或 0.4 版本发布。
3. **#5985 subagent 会话所有权** —— 引入 `subagent` 统一工具，是当前最接近合并的大型功能。落地后 WebUI 将出现"任务 → 结果"的可追溯视图。
4. **#1651 技能记忆层** —— 6 个月未合并，需维护者明确是否进入长期路线图或归档。

---

## 7. 用户反馈摘要

- **#6031**：用户对当前 fallback 行为存在**透明度疑虑** —— "the reply simply comes back from a different model"，无任何提示，影响对模型输出的归因与可信度。
- **#6029**：用户希望后台维护任务**不要污染活跃对话**，特别是 `Compressing context…` 这种系统消息出现在聊天渠道中会打断用户。
- **#6024**：用户实际场景为 Ubuntu + GNOME/Wayland + Obsidian 1.13.7，终端可用但 nanobot 下不可用，反映出 **Linux 桌面环境变量透传** 存在路径不一致。
- 整体满意度信号：WebUI 移动端连续 4 条 PR 合并，说明用户对**触屏体验**反馈较多且被积极响应。

---

## 8. 待处理积压

| 编号 | 类型 | 标题 | 开放时长 | 建议 |
|------|------|------|----------|------|
| [#1651](https://github.com/HKUDS/nanobot/pull/1651) | PR | feat(memory): add optional skill memory and query-aware retrieval | **约 7 个月** | 维护者需明确方向：纳入/拆分/关闭 |
| [#5764](https://github.com/HKUDS/nanobot/pull/5764) | PR | fix(provider): serialize half-open fallback probes | 约 3 周 | Provider 稳定性相关，建议优先评审 |
| [#5985](https://github.com/HKUDS/nanobot/pull/5985) | PR | feat(subagent): add session-owned task messaging and cancellation | 4 天 | 架构级变更，需核心维护者关注 |
| [#6029](https://github.com/HKUDS/nanobot/issues/6029) | Issue | Allow silent context compaction | 1 天 | 尚无 PR，建议与 #6031 联合规划 |
| [#6031](https://github.com/HKUDS/nanobot/issues/6031) | Issue | Notify chat channels when fallback fires | 1 天 | 尚无 PR，与 observer hook 设计耦合 |

---

**项目健康度评估**：🟢 **活跃且稳定**
- 维护节奏紧凑，Bug 反馈闭环快（Issue-PR 成对率高）
- 移动端/WebUI 体验显著改善
- 风险点：长期未决的 #1651 与多 Provider 兼容性问题（OpenAI SDK 升级、MCP 分页、Codex 流式）需持续投入

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

<think>The user wants me to generate a daily project report for PicoClaw based on GitHub data from the past 24 hours. Let me analyze the data:

- Issues: 1 new/active (Issue #3394 about QQ bot interface not updated), 0 closed
- PRs: 0
- New releases: 0

The only issue is #3394, which is a bug report about QQ bot interface not being updated. It's marked as stale, created on 2026-09-26, last updated 2026-10-03, has 2 comments and 0 thumbs up.

Let me structure the report according to the 8 sections requested. Given the very limited data (only 1 issue, no PRs, no releases), I need to be honest about the low activity level while still providing useful analysis.

Let me write this in Chinese since the request is in Chinese.</think>

# PicoClaw 项目动态日报

**日期：2026-10-04**
**数据来源：github.com/sipeed/picoclaw**

---

## 1. 今日速览

PicoClaw 项目今日活跃度**较低**，过去 24 小时内仅出现 1 条活跃 Issue，无新增或合并的 Pull Request，亦无新版本发布。整体社区处于相对静默状态，未见明显推进或讨论热点的形成。当前仅有的活跃线程（Issue #3394）已处于 stale 状态，反映出社区响应与维护者跟进之间存在一定程度的滞后，建议关注积压 Issue 的处理节奏。

---

## 2. 版本发布

无新版本发布，本节省略。

---

## 3. 项目进展

过去 24 小时内**无任何 Pull Request 合并或关闭**，项目代码层面无明显推进。建议维护者审视 PR 队列，确认是否存在待审未动的关键修复或功能合并请求。

---

## 4. 社区热点

| Issue | 标题 | 评论数 | 👍 | 状态 |
|---|---|---|---|---|
| [#3394](https://github.com/sipeed/picoclaw/issues/3394) | [BUG] QQ 机器人的接口更新了，但 QQ 聊天通道的接口似乎没有更新 | 2 | 0 | OPEN / stale |

**分析**：该 Issue 是当前唯一活跃的社区话题，反映出 QQ 机器人平台接口升级后，PicoClaw 的 QQ 聊天通道适配层未能及时跟进，**属于典型的第三方平台依赖断裂问题**。尽管点赞数较少，但评论数为 2，说明至少存在多位用户受影响或参与讨论，具备一定代表性。

---

## 5. Bug 与稳定性

### 🔴 Issue #3394 — QQ 聊天通道接口未跟进更新
- **链接**：[https://github.com/sipeed/picoclaw/issues/3394](https://github.com/sipeed/picoclaw/issues/3394)
- **严重程度**：中
- **报告者**：@qinglt
- **创建时间**：2026-09-26（已存在约 8 天）
- **影响范围**：使用 QQ 聊天通道接入 PicoClaw 的全部用户
- **状态**：标记为 stale，无对应修复 PR
- **备注**：截至当前**无关联 fix PR**。考虑到 QQ 官方接口变更是强制性的，若长期不修复将导致该通道完全不可用，影响用户留存。

---

## 6. 功能请求与路线图信号

过去 24 小时内**无新增功能请求类 Issue 或 PR**。基于现有数据，难以推断下一版本的路线图方向。维护者可主动在仓库发布 RFC，弥补社区信号不足的问题。

---

## 7. 用户反馈摘要

从 Issue #3394 的评论中可提炼以下用户痛点：

- **第三方平台依赖痛点**：用户依赖 PicoClaw 的 QQ 通道连接机器人，但平台侧接口升级后缺乏响应机制，暴露出项目对外部平台变更的**适配滞后风险**。
- **通道生态不均衡**：相比其他通道，QQ 通道的维护投入明显不足，可能影响国内部分用户群体的接入体验。
- **Issue 状态感知缺失**：用户提交 Bug 后被标记为 stale，但未收到维护者的明确反馈或修复承诺，**沟通闭环不够完善**。

---

## 8. 待处理积压

| 类型 | 编号 | 标题 | 创建时间 | 当前状态 | 关注建议 |
|---|---|---|---|---|---|
| Issue | [#3394](https://github.com/sipeed/picoclaw/issues/3394) | QQ 聊天通道接口未更新 | 2026-09-26 | OPEN / stale | **建议优先处理**——该 Issue 涉及核心通道可用性，且已停滞 8 天 |

> ⚠️ 提醒维护者：stale 标签并不代表问题已解决，建议主动评估该 Issue 并给出明确处理计划（修复 / 延期 / 接受），避免社区信任流失。

---

## 📊 项目健康度总结

| 维度 | 状态 | 评分（5 分制） |
|---|---|---|
| 代码提交活跃度 | 无 PR 活动 | ⭐⭐ |
| Issue 响应速度 | 积压 1 条 stale Issue | ⭐⭐ |
| 版本发布节奏 | 今日无版本发布 | ⭐⭐⭐ |
| 社区讨论热度 | 仅有 1 条活跃话题 | ⭐⭐ |
| 整体健康度 | **偏静默，需主动驱动** | ⭐⭐ |

**结论**：PicoClaw 今日呈"静默期"特征，无重大进展也无明显衰退。建议维护者在 PR 队列审查、stale Issue 清理、版本规划沟通三方面主动发力，以维持项目可见性与社区信心。

---

*报告基于 GitHub 公开数据自动生成，如有遗漏请以仓库实际状态为准。*

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

<think>Let me analyze the data provided and generate a comprehensive daily report for LobsterAI project dated 2026-10-04.

Key observations:
1. No new releases
2. 6 Issues updated in past 24 hours, but ALL of them are marked [stale] - meaning they were just marked stale (auto-bumped), not actively discussed. All 6 issues were created back in March 2026 and only got 1-2 comments total. They got updated today likely because of staleness bot.
3. 1 PR updated - PR #2374 about hiding sidebar ad banner, also from July 2026, currently OPEN with no comments
4. All issues have 0 thumbs up
5. No new activity from maintainers - no PRs merged, no issues closed, no responses

This is actually a sign of an INACTIVE/STALE project. The "updates" are just the GitHub stale bot bumping old issues.

Let me write an honest, data-driven report that reflects this reality.

Issues analysis:
- #884: Account/login and paid credits question
- #885: WeChat link unavailable (image-based)
- #867: Transaction inconsistency in autoDeleteNonPersonalMemories()
- #873: Feature request for EARS principle PRD conversion + git worktree skill
- #879: SQLite foreign key constraint bug causing database bloat
- #883: Desktop Windows slash commands all broken

PR analysis:
- #2374: Add permanent setting to hide sidebar ad banner (referenced issue #2342)

Bugs ranked by severity:
1. #879 - SQLite foreign keys not enabled, causing DB bloat (technical debt, data integrity)
2. #883 - ALL slash commands broken on Windows desktop (major functionality broken)
3. #867 - Transaction inconsistency in memory deletion (data integrity)
4. #885 - WeChat link unavailable (functional)

Feature requests:
- #873 - EARS principle PRD + git worktree skill
- #884 - Login/paid credits documentation (more like documentation request)
- #2374 (PR) - Permanent sidebar ad banner toggle

User feedback from comments - most issues only have 1-2 comments, very low engagement.

Backlog: All these issues have been open for ~6 months (March to October 2026) with minimal responses.

Let me draft the report in Chinese as the prompt is in Chinese.</think>

# LobsterAI 项目动态日报
**日期：2026-10-04（基于过去 24 小时 GitHub 数据）**

---

## 1. 今日速览

LobsterAI 项目在过去 24 小时内出现 **6 条 Issue 更新与 1 条 PR 更新，但整体活跃度极低**——所有更新的 Issues 均带有 `[stale]` 标签，且都是 2026-03 月创建的旧 Issue（年龄约 6 个月），今日动作大概率由 GitHub Stale Bot 自动触发（因长期无活动而被重新标记/关闭前提醒），并非社区新讨论。无 Issue 被关闭，无 PR 被合并，无新版本发布。**PR #2374（隐藏侧边栏广告开关）已开放 75 天仍未得到维护者评审。** 综合判断：项目维护响应处于停滞状态，社区活跃度接近冰点，需要维护者介入清理 Stale 状态并对积压 Issue 给出明确反馈。

---

## 2. 版本发布

🚫 **本周期无新版本发布。** 仓库无 Release 活动。

---

## 3. 项目进展

🚫 **无 PR 合并 / 关闭**，项目代码层面今日无任何推进。

唯一有动作的 **PR #2374**（feat: add permanent setting to hide sidebar ad banner，作者 @bunnysayzz）已开放 **75 天**（创建于 2026-07-21），仍处于 OPEN 状态，等待维护者 Code Review。该 PR 旨在 Settings → General 中加入"永久隐藏侧边栏广告"的开关，呼应了 Issue #2342。👉 https://github.com/netease-youdao/LobsterAI/pull/2374

---

## 4. 社区热点

过去 24 小时无新增讨论，**评论热度最高仅为 2 条**（出现在 #884 和 #885），所有 Issue 👍 数为 0，社区参与几乎为零。

值得关注的存量讨论：

- 🔥 **#884 关于账户登录与付费加油包的问题** —— 用户希望厘清"登录/不登录功能差异""加油包积分用途""与自配 Model 的协同关系"。👉 https://github.com/netease-youdao/LobsterAI/issues/884
- 🔥 **#885 微信链接不可用** —— 含 2 张报错截图（登录入口或分享链路疑似断裂）。👉 https://github.com/netease-youdao/LobsterAI/issues/885

诉求分析：用户核心疑问集中在 **产品定位边界**（登录价值）和 **商业化透明度**（积分用途），说明官方文档/产品引导仍存在缺口。

---

## 5. Bug 与稳定性

按严重程度排序：

| 严重度 | Issue | 描述 | 是否有 Fix PR |
|--------|-------|------|---------------|
| 🔴 P0 | **#879** SQLite 外键约束未启用，删除 session 不级联删除 messages，**导致数据库持续膨胀** | 数据完整性 + 长期可用性问题 | ❌ 无 |
| 🔴 P0 | **#883** Desktop (Windows) **所有斜杠命令全部失效**（/status, /reasoning, /help, /commands, /whoami, /think 等） | 桌面端核心交互全瘫 | ❌ 无 |
| 🟠 P1 | **#867** `autoDeleteNonPersonalMemories()` 方法存在事务不一致问题 | 数据一致性问题 | ❌ 无 |
| 🟠 P1 | **#885** 微信链接不可用 | 功能链路断裂，影响获客 | ❌ 无 |

👉 链接：
- https://github.com/netease-youdao/LobsterAI/issues/879
- https://github.com/netease-youdao/LobsterAI/issues/883
- https://github.com/netease-youdao/LobsterAI/issues/867
- https://github.com/netease-youdao/LobsterAI/issues/885

**重要提示：3 个技术型 Bug（#867, #879, #883）均为高严重度，且全部没有对应 Fix PR，社区贡献者未被有效引导参与修复。**

---

## 6. 功能请求与路线图信号

| 诉求 | Issue/PR | 实现可能性评估 |
|------|----------|----------------|
| 加入 **EARS 原则** 自动转化 PRD，方便 AI 接收产品 spec | [#873](https://github.com/netease-youdao/LobsterAI/issues/873) | 中：作者已与研发沟通 git-worktree 和 prd-to-ears，社区可行性较高，但需维护者拍板 |
| 新增 **git worktree** 研发常用 skill | [#873](https://github.com/netease-youdao/LobsterAI/issues/873) | 中：同上，建议与 prd-to-ears 合并为"研发协作能力增强"主题 |
| Settings → General 增加 **永久隐藏侧边栏广告**开关 | [PR #2374](https://github.com/netease-youdao/LobsterAI/pull/2374) | 高：PR 已就绪 75 天，代码层面只需 Review 即可合并 |

**路线图信号判断**：维护者目前无公开 Roadmap 信号，但 PR #2374 是最容易落地的一项；EARS / git worktree 类请求属于能力扩展，可纳入"AI 智能体技能生态"下一阶段规划。

---

## 7. 用户反馈摘要

由于评论数极少（多为 0–2 条），可用信号有限：

- 😟 **付费模式不透明**：#884 显示用户对"加油包积分到底能干什么"缺乏清晰认知，提示官方文档/付费页面需补充对照说明。
- 😟 **Windows 桌面体验受损**：#883 指出 **所有** 斜杠命令不可用，反映 Windows 端集成测试覆盖不足。
- 😐 **反馈无人响应**：所有 6 条 Issue 均 0 👍、评论 ≤2，且创建 6 个月未被解决，明显影响贡献者提交 Issue 的意愿（"反正没人理")。

---

## 8. 待处理积压（维护者警示）

⚠️ 以下 7 项均长期未响应，**建议维护者优先处理**：

1. **PR #2374**（2026-07-21 起，75 天）—— 隐藏广告开关，等待 Review
2. **Issue #879**（2026-03-25 起，193 天）—— SQLite 外键 Bug，影响数据治理
3. **Issue #883**（2026-03-25 起，193 天）—— Windows 斜杠命令全失效
4. **Issue #867**（2026-03-25 起，193 天）—— 事务一致性问题
5. **Issue #885**（2026-03-26 起，192 天）—— 微信链接失效
6. **Issue #884**（2026-03-25 起，193 天）—— 付费与登录说明缺失
7. **Issue #873**（2026-03-25 起，193 天）—— EARS + git worktree 技能请求

📊 **健康度小结**：代码停滞 + 文档缺口 + Bug 积压 + 社区沉默 = 项目需重新激活。建议短期执行：(1) 回应 Stale Issues 关闭/重开；(2) Review PR #2374；(3) 修复 #879、#883 两个 P0 Bug 以恢复产品基本可用性。

---

*报告基于 netease-youdao/LobsterAI 公开 GitHub 数据生成。*

</details>

<details>
<summary><strong>QwenPaw</strong> — <a href="https://github.com/agentscope-ai/QwenPaw">agentscope-ai/QwenPaw</a></summary>

<think>The user wants me to generate a daily project report for QwenPaw (github.com/agentscope-ai/QwenPaw) based on GitHub data from 2026-10-04. Let me analyze the data carefully and produce a structured report in Chinese.

Let me organize the information:

**Data Overview:**
- Issues updates in past 24 hours: 5 (new/active: 4, closed: 1)
- PR updates in past 24 hours: 7 (pending: 7, merged/closed: 0)
- New releases: 0

**Issues Analysis:**

1. #7535 [CLOSED] - Element-specific Matrix compatibility (MSC2965 OIDC login) - Created 2026-09-03, Updated 2026-10-03, 2 comments - Feature enhancement, was closed today
2. #8101 [OPEN] - /chat/<id> deep link fails across agents - Created 2026-10-04 (today), 1 comment - Bug
3. #8094 [OPEN] - Console boot splash no retry, stale WebView2 cache - Created 2026-10-03, 1 comment - Bug
4. #8093 [OPEN] - Runtime blocks image input despite multimodal=true - Created 2026-10-03, 1 comment - Bug
5. #8092 [OPEN] - Content inspection false positives from Ali-style gateways - Created 2026-10-03, 1 comment - Bug

**PR Analysis:**

1. #8100 - fix(agents): use resolved media capabilities at runtime - size/M - relates to #8093
2. #8099 - fix(qoder): enable custom providers and context usage - size/S
3. #8098 - fix(agents): return a result for foreground chat timeouts - size/S
4. #7004 - feat(console): persist spawn parent-child linkage - size/M - first-time contributor, old PR
5. #8097 - test(agents): cover sent PDF tool-result replay - size/XS
6. #8096 - fix(providers): surface finish_reason length truncation - size/S - relates to #8085
7. #8095 - fix(agents): attribute inter-agent chat messages to current user - size/S

Now let me generate the report following the requested structure.

Key observations:
- No releases today
- No PRs merged today
- 4 new bugs all reported by users (xyxy, GIT6608, veveyluo) within 24 hours
- Bug #8093 has a corresponding fix PR #8100 already
- PR #7004 is a long-standing first-time contributor PR (from 2026-08-13) - this is concerning for backlog
- Multiple related fixes from @lorenzozanee and @wxhking suggesting active development
- Issue #7535 was closed (matrix enhancement)

Let me write the report now.</think>

# QwenPaw 项目动态日报 · 2026-10-04

---

## 1. 今日速览

QwenPaw 项目今日呈现"问题密集提交、修复集中跟进"的高活跃节奏：过去 24 小时内出现 **4 条新 Bug 报告 + 7 条新 PR**，所有 PR 均处于待合并状态，无版本发布和合并事件。Bug 与对应 fix PR 形成强耦合关系（#8093↔#8100、#8085↔#8096），说明维护团队响应较为及时；但 PR 整体通过率为零，需关注合并瓶颈。社区信号指向 **多模态能力发现一致性、WebView2 启动健壮性、跨 agent 路由、网关内容审查容错** 四大工程化痛点。

---

## 2. 版本发布

⚠️ **无新版本发布**。建议关注即将合并的 #8095、#8096、#8098、#8099、#8100 这些 size/S–M 的低风险 fix，它们具备直接随下一个补丁版本（如 2.2.2 正式版）合入的成熟度。

---

## 3. 项目进展

今日无合并事件，但 PR 池构成了一组清晰的"可合并候选"：

| PR | 标题 | 大小 | 战略价值 |
|---|---|---|---|
| [#8100](https://github.com/agentscope-ai/QwenPaw/pull/8100) | fix(agents): use resolved media capabilities at runtime | M | 直接修复"catalog 显示支持但运行期拒绝图片"的元数据不一致问题 |
| [#8099](https://github.com/agentscope-ai/QwenPaw/pull/8099) | fix(qoder): enable custom providers and context usage | S | 修复 Qoder 后端 BYOK 与上下文显示，扩展第三方集成能力 |
| [#8098](https://github.com/agentscope-ai/QwenPaw/pull/8098) | fix(agents): return a result for foreground chat timeouts | S | 让超时成为显式工具结果而非静默取消，提升可观测性 |
| [#8096](https://github.com/agentscope-ai/QwenPaw/pull/8096) | fix(providers): surface finish_reason length truncation | S | 暴露 `finish_reason="length"`，区分截断与正常完成 |
| [#8095](https://github.com/agentscope-ai/QwenPaw/pull/8095) | fix(agents): attribute inter-agent chat messages to the current user | S | 修复 `chat_with_agent` 用户归属错位，提升审计准确性 |
| [#8097](https://github.com/agentscope-ai/QwenPaw/pull/8097) | test(agents): cover sent PDF tool-result replay | XS | 纯测试补充，无运行时变更 |
| [#7004](https://github.com/agentscope-ai/QwenPaw/pull/7004) | feat(console): persist spawn parent-child linkage in chat meta | M | 首次贡献者 PR，**已挂起约 53 天**，需关注 |

**进展评估**：今日项目整体向前推进了一个"小迭代级别"，主要由 @lorenzozanee、@wxhking 两位贡献者产出；社区贡献通道（#7004）响应节奏滞后。

---

## 4. 社区热点

按评论活跃度排序，今日讨论最集中的三条：

1. 🥇 **[#7535 Matrix Element 兼容性](https://github.com/agentscope-ai/QwenPaw/issues/7535)** —— 2 条评论，已于今日关闭。作为 Element 已成为 Matrix 事实参考客户端的背景，该 Issue 提出 MSC2965（recovery-key）登录与 MAS next-gen OIDC 的支持，被关闭可能意味着需求被分流或被合并至更大重构。
2. 🥈 **[#8101 跨 agent 深度链接失败](https://github.com/agentscope-ai/QwenPaw/issues/8101)** —— 1 条评论，今日新开。反映了外部插件/集成对 `/chat/<id>` 跳转的高度依赖，以及"激活会话"语义的缺失。
3. 🥉 **[#8094 Console 启动卡死](https://github.com/agentscope-ai/QwenPaw/issues/8094)** —— 1 条评论。用户对"加载控制台"占位页的零重试、零错误出口表达强烈不满，影响升级后无法启动的可靠性。

**诉求总结**：用户希望在通道集成（Matrix/OIDC）、跨 agent 路由稳定性、Console 启动健壮性三个方向看到投入。

---

## 5. Bug 与稳定性

按严重程度排列（无 PR 关联的风险更高）：

| 严重度 | Issue | 是否有对应 PR | 状态 |
|---|---|---|---|
| 🔴 **高** | [#8093 图片输入被拒（多模态元数据不一致）](https://github.com/agentscope-ai/QwenPaw/issues/8093) | ✅ [#8100](https://github.com/agentscope-ai/QwenPaw/pull/8100) 待合并 | 已有修复 |
| 🔴 **高** | [#8101 `/chat/<id>` 跨 agent 深度链接失效](https://github.com/agentscope-ai/QwenPaw/issues/8101) | ❌ 无 | 待认领 |
| 🟠 **中** | [#8094 Console 启动页无重试无错误出口](https://github.com/agentscope-ai/QwenPaw/issues/8094) | ❌ 无 | 待认领 |
| 🟠 **中** | [#8092 Ali 网关内容审查误杀（`data_inspection_failed` → `bad_request`）](https://github.com/agentscope-ai/QwenPaw/issues/8092) | ❌ 无 | 待认领 |

**风险信号**：
- #8092 描述的是阿里风格网关返回的 `data_inspection_failed` 被错误归类为 `bad_request`，导致**整轮被 kill、无降级**。在 12 模型 fallback 链路上仍发生，说明网关响应分类器缺乏 `safety` 类别。
- #8094 影响"更新后永久卡死"路径，是升级路径上的重大可靠性问题。

---

## 6. 功能请求与路线图信号

| 需求 | 来源 | 已有动作 | 路线图可能性 |
|---|---|---|---|
| Element / Matrix 兼容 MSC2965 + MAS OIDC | [#7535](https://github.com/agentscope-ai/QwenPaw/issues/7535) | 已关闭 | 中（可能进入 matrix-nio 升级轨道） |
| spawn 子代理父子关系持久化 | [#7004](https://github.com/agentscope-ai/QwenPaw/pull/7004) PR | 待合并 | 高（已挂起 53 天） |
| Qoder BYOK + 上下文用量展示 | [#8099](https://github.com/agentscope-ai/QwenPaw/pull/8099) PR | 待合并 | 高（已落到 PR） |
| 暴露 `finish_reason=length` | [#8096](https://github.com/agentscope-ai/QwenPaw/pull/8096) PR | 待合并 | 高（已落到 PR） |

**信号解读**：维护团队今日提交的 PR 集中在"小而正确的工程化修复"，未出现重大新特性，呈现"先解决正确性、再谈路线图"的稳健姿态。

---

## 7. 用户反馈摘要

提炼自今日 Issues：

- **@xyxy（#8101）** —— 自托管 2.2.1 通过 pip 安装；依赖外部插件用 `/chat/<UUID>` 跳转定位会话，希望"跨 agent 跳转"和"激活会话"成为一等公民。
- **@GIT6608（#8094）** —— 升级后因 WebView2 缓存陈旧无法进入 Console，**无任何错误提示、无重试按钮**；希望 splash 阶段有错误表面。
- **@GIT6608（#8093）** —— 跑 `mimo-v2.6-flash`、`glm-5.3-flash` 多模态模型，发现 `view_image` 日志直接判定"模型显式不支持多模态"，但 catalog/prober 显示 `supports_multimodal=true`。希望 catalog 与运行时使用同一份元数据。
- **@veveyluo（#8092）** —— 容器部署 2.2.2b4，Telegram 通道；与 12 模型 fallback 链路上的常规 DevOps 对话被网关判定违规，**整轮被 kill**；希望内容审查错误应被分类为 `safety` 而非 `bad_request`，并触发降级或重试。

**总体满意度信号**：用户对**能力发现层的可信度**与**异常路径的可观测性**表达出明显不满，对**新功能/新模型接入**保持期待。

---

## 8. 待处理积压

| 项目 | 链接 | 挂起时长 | 备注 |
|---|---|---|---|
| PR #7004（首次贡献者） | https://github.com/agentscope-ai/QwenPaw/pull/7004 | ~53 天 | 标记 `first-time-contributor`，维护者应优先 review |
| Issue #7535 关闭后去向未说明 | https://github.com/agentscope-ai/QwenPaw/issues/7535 | n/a | 关闭理由未在评论区说明，建议补充 |

**提醒**：建议维护者针对 #7004 给出明确 review 反馈，以维护社区贡献通道健康度。

---

📌 **总评**：QwenPaw 处于"问题驱动 + 修复密集 + 待合并积压"的活跃期。Bug 报告与 fix PR 强耦合体现工程响应力较好，但合并端吞吐为零以及 PR #7004 长期挂起是当前最大风险点。

*日报基于 GitHub 公开数据生成，仅供参考。*

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/NousResearch/hermes-agent">NousResearch/hermes-agent</a></summary>

<think>Let me analyze the GitHub data for Hermes Agent and generate a comprehensive daily report. Let me organize the information:

**Overall Stats:**
- 50 issues updated (42 new/active, 8 closed)
- 50 PRs updated (45 pending merge, 5 merged/closed)
- 0 new releases

**Top Issues by comments:**
1. #97681 - Bots collaborate across gateways (37 comments, 4 likes) - OPEN
2. #132401 - scratch prune destroys multi-day work (15 comments) - OPEN P0
3. #123238 - HERMES_HOME rebinds launchers (6 comments) - CLOSED
4. #125746 - Plugin load concurrent dict iteration (5 comments) - OPEN
5. #47435 - Register Hermes in ACP Registry (4 comments) - OPEN
6. #96993 - Windows real-profile cookie copy purged (4 comments) - OPEN
7. #82688 - ClassifiedError.should_fallback unused (3 comments) - OPEN
8. #132358 - PTY background process kill hangs (3 comments) - OPEN P0
9. #38650 - MCP servers reported as failed (3 comments) - OPEN
10. #132498 - kanban scratch pruning (3 comments) - OPEN
11. #65426 - WhatsApp profile integration (3 comments) - CLOSED
12. #107854 - Windows real-profile detection false-negative (3 comments) - OPEN
13. #124309 - Stable source update channel unavailable (3 comments) - OPEN
14. #101513 - agent.service_tier config not on wire (3 comments) - OPEN
15. #125813 - Linux desktop menu launch failure notification (3 comments) - OPEN
16. #120356 - Shell hook input() freezes Windows event loop (2 comments) - OPEN
17. #132547 - Windows named-pipe read blocks gateway (2 comments) - OPEN P1
18. #132517 - Multiplexed gateway quick_commands (2 comments) - OPEN
19. #132504 - OpenRouter 403 from bundled skills (2 comments) - OPEN P1
20. #79471 - One-shot execution Relay session lifecycle (2 comments) - CLOSED

**Top PRs:**
- Various PRs about fix(update), fix(gateway), fix(agent), etc.

**Key Themes:**
- Many Windows-related bugs
- Gateway stability issues (multiple watchdog exits)
- Session state management
- Plugin loading concurrency
- Profile/multi-profile support
- ACP integration
- Update mechanism improvements

Let me write a structured report.</think>

# Hermes Agent 项目日报 · 2026-10-04

---

## 1. 今日速览

Hermes Agent 在过去 24 小时内呈现**高活跃度但重维护负担**的态势：50 条 Issues 更新（42 活跃/8 关闭）、50 条 PR 更新（45 待合并/5 已关闭），无新版本发布。讨论焦点集中在三个方向——**Gateway 在 Windows 平台的稳定性**（命名管道读取挂起、PTY 杀进程超时、Shell hook 阻塞事件循环）、**会话状态与生命周期管理**（scratch 24h 静默清理、Bot Chat 重启断流、OpenRouter 403 会话中毒），以及**更新/安装机制的健壮性**（parked-branch 跳过导致本地提交丢失、stable 渠道 R2 记录不可用）。整体来看社区贡献持续流入（多平台适配、Markdown 实时预览、Quick Entry 窗口定位等 Desktop 增强），但 Windows 命名管道引发的 exit 75 看门狗死循环已确认是 P0 级连锁问题，需要维护者重点投入。

---

## 2. 版本发布

**无新版本发布。** 距上一个可观测发布节点（v0.21.5 / v0.21.1，参考 Issue #132594 / #107854）后尚未有新 tag 推出，多个 fix PR（#128461、#132365、#101127、#130309 等）已 pending 较长时间等待合并。

---

## 3. 项目进展

过去 24 小时内 5 条 PR 合并/关闭，主要集中在兼容性修复与文档对齐：

| PR | 说明 | 状态 |
|---|---|---|
| [#98087](https://github.com/NousResearch/hermes-agent/pull/98087) | 将 `SEARXNG_URL` 配置正确路由到 dotenv，避免写入未使用的 YAML 顶层键 | CLOSED |
| [#76373](https://github.com/NousResearch/hermes-agent/pull/76373) | 适配多版本 GitHub CLI 的认证检测，使用 `gh auth status --json hosts` | CLOSED |
| [#103377](https://github.com/NousResearch/hermes-agent/pull/103377) | 文档同步：baoyu 技能输入输出与 `image_generate` 对齐 | CLOSED |
| [#103376](https://github.com/NousResearch/hermes-agent/pull/103376) | 文档修订：computer-use 拒绝拆分/伪装/绕道规避危险模式 | CLOSED |
| [#115542](https://github.com/NousResearch/hermes-agent/pull/115542) 相关 | 关闭：Gateway 重启循环（state.db 37 GB + quick_check 无进度租约） | CLOSED |

**进展评估：** 本日推进以**文档/兼容性修补**为主，未见重大功能落地。`update` 子系统的两个关键修复（[#128461](https://github.com/NousResearch/hermes-agent/pull/128461) parked-branch 非破坏性跳过、[#132365](https://github.com/NousResearch/hermes-agent/pull/132365) update marker v2 + checkout lock）仍 OPEN，需维护者审阅合并以缓解用户更新通道信任危机。

---

## 4. 社区热点

**最热议题（按评论量）：**

- 🔥 [#97681 Let Bots collaborate across gateways](https://github.com/NousResearch/hermes-agent/issues/97681) — **37 评论 / 4 👍**，核心愿景：让个人 Bot 跨机器、跨所有者协作而不丧失自治权。这是项目**当前最重要的战略级 Feature Request**，标记为 innovation + gateway + sessions，正在塑造 Hermes 的多 Bot 协作底座。
- [#132401 scratch prune 静默销毁多日工作](https://github.com/NousResearch/hermes-agent/issues/132401) — **15 评论**，P0，用户工作流隐性数据丢失引发强烈关注。
- [#123238 HERMES_HOME 重绑 launcher 致砖化](https://github.com/NousResearch/hermes-agent/issues/123238) — **6 评论**，已关闭但讨论密度高，揭示源安装下的高危 launcher 重写路径。
- [#125746 字典并发迭代致插件静默丢弃](https://github.com/NousResearch/hermes-agent/issues/125746) — **5 评论**，长生命周期重插件安装的稳定性痛点。
- [#47435 注册 Hermes 到 ACP Registry](https://github.com/NousResearch/hermes-agent/issues/47435) — **4 评论**，关乎在 Zed/JetBrains/VS Code 中的 IDE 集成可见性。

**诉求分析：** 用户最强烈的呼声集中在「**协作能力**」（#97681）与「**数据安全感**」（#132401 scratch 清理、#123238 砖化、#127919 重启断流）。协作是面向未来的能力跃迁，数据安全则是影响日常信任的当下痛点。

---

## 5. Bug 与稳定性

按严重程度排序：

### 🔴 P0（关键，影响数据/可用性）

| Issue | 简述 | 状态 |
|---|---|---|
| [#132401](https://github.com/NousResearch/hermes-agent/issues/132401) | `scratch prune` 24h 空闲静默删除 TMPDIR 指向的多日 agent 产出，无日志/无隔离/无 keep-marker | OPEN，无对应 PR |
| [#132358](https://github.com/NousResearch/hermes-agent/issues/132358) | `use_pty=True` 后台进程若子孙 `setsid()` 则 `kill_process` 永久挂起，dashboard/serve 不回收逃逸进程 | OPEN，无对应 PR |
| [#132504](https://github.com/NousResearch/hermes-agent/issues/132504) | OpenRouter 403 "prompt injection patterns detected" 因技能含字面量 `<tool>` 标签，并污染整会话 | OPEN，无对应 PR |

### 🟠 P1（高，影响核心功能）

| Issue | 简述 | 状态 |
|---|---|---|
| [#132547](https://github.com/NousResearch/hermes-agent/issues/132547) | Windows 上 `_profile_reconcile_watcher` 同步命名管道读取阻塞事件循环，触发 shutdown_watchdog exit 75 | OPEN，**与 #105279/#100014 是独立根因** |
| [#123238](https://github.com/NousResearch/hermes-agent/issues/123238) | `HERMES_HOME` 切换时 launcher 被重写，临时目录删除后系统砖化 | CLOSED |

### 🟡 P2（中等，影响体验/配置）

- [#96993](https://github.com/NousResearch/hermes-agent/issues/96993) Windows Chrome 151/152 app-bound 加密使真实 profile cookie 复制后被全清
- [#82688](https://github.com/NousResearch/hermes-agent/issues/82688) `ClassifiedError.should_fallback` 7 处写入但全代码库无读取
- [#124309](https://github.com/NousResearch/hermes-agent/issues/124309) `stable` 渠道 R2 记录缺失仍可被持久化，桌面更新失败
- [#101513](https://github.com/NousResearch/hermes-agent/issues/101513) `agent.service_tier` 在 `tui_gateway` 会话中不上行
- [#120356](https://github.com/NousResearch/hermes-agent/issues/120356) Windows shell hook 审批 `input()` 阻塞 asyncio 105s，gateway 自杀 exit 75
- [#132517](https://github.com/NousResearch/hermes-agent/issues/132517) 多 profile gateway 中次级 profile 的 quick_commands 从未被查询
- [#132589](https://github.com/NousResearch/hermes-agent/issues/132589) 自定义 Anthropic provider 对畸形 SSE 无非流回退
- [#121878](https://github.com/NousResearch/hermes-agent/issues/121878) 流式 watchdog 用挂钟计时，S3 唤醒后误判 6.5h 停滞
- [#132477](https://github.com/NousResearch/hermes-agent/issues/132477) `_relay_thinking` 在结构化推理模型上重复渲染 reply 文本
- [#132554](https://github.com/NousResearch/hermes-agent/issues/132554) Signal "Open setup guide" 链接指向错误项目（应指向 hermes 自家文档）

### ⚪ P3（低，配置/兼容性）

- [#125746](https://github.com/NousResearch/hermes-agent/issues/125746) 插件并发加载 `dict changed size`；[#38650](https://github.com/NousResearch/hermes-agent/issues/38650) MCP 显示失败；[#132498](https://github.com/NousResearch/hermes-agent/issues/132498) kanban 示例路径会被清理；[#107854](https://github.com/NousResearch/hermes-agent/issues/107854) Win11 25H2 UserChoice 失效；[#125813](https://github.com/NousResearch/hermes-agent/issues/125813) Linux 桌面启动失败无反馈；[#132483](https://github.com/NousResearch/hermes-agent/issues/132483) Docker 销毁规则覆盖不全；[#132594](https://github.com/NousResearch/hermes-agent/issues/132594) Slack `setStatus` 在 3.44+ 失效。

**Windows 平台系统性风险：** 至少 5 个 P0/P1 级 Issue（#96993、#107854、#120356、#132547、#132589）与 Windows 平台相关——命名管道读取、app-bound 加密、VBS shim 隐藏控制台、Win11 25H2 注册表变更——构成今日最大的稳定性债。

---

## 6. 功能请求与路线图信号

| 需求 | Issue/PR | 落地概率评估 |
|---|---|---|
| Bot 跨网关协作 | [#97681](https://github.com/NousResearch/hermes-agent/issues/97681) | **高**——37 评论 + 4 👍 表明社区愿景级共识，已有战略讨论 |
| ACP Registry 注册（IDE 集成） | [#47435](https://github.com/NousResearch/hermes-agent/issues/47435) | **中-高**——Zed v1.5 已废弃自定义 entry，集成是必经之路 |
| 邮件 subject-scoped session + `/new` 重置 + 自动轮转 | [PR #103196](https://github.com/NousResearch/hermes-agent/pull/103196) | **高**——已实现为 PR，待审 |
| Desktop Markdown 实时预览 | [PR #132597](https://github.com/NousResearch/hermes-agent/pull/132597) | **高**——新 PR，已就绪 |
| Quick Entry 窗口位置可配置 + 拖拽 | [PR #132596](https://github.com/NousResearch/hermes-agent/pull/132596) | **高**——UX 改进已成型 |
| 技能索引提示词裁剪 ~1.1K → ~0.45K 字符 | [PR #113565](https://github.com/NousResearch/hermes-agent/pull/113565) | **高**——每轮每用户节省 token，性能显著 |
| 全平台 messaging 在 `hermes config` 中显示 | [PR #64049](https://github.com/NousResearch/hermes-agent/pull/64049) | **高**——7/14 开 PR，至今未合并，长期挂起需关注 |
| 全息记忆 retrieval_count 实际递增 | [PR #126197](https://github.com/NousResearch/hermes-agent/pull/126197) | **高**——指标永远为 0 的 Bug 必须修 |
| Docker 跨进程容器复用绑定到运行时姿态 | [PR #107791](https://github.com/NousResearch/hermes-agent/pull/107791) | **中**——安全边界相关，需重点 review |
| js-yaml 升级至 4.3.2 修复 GHSA-2883-xcg3-v3hh | [PR #127958](https://github.com/NousResearch/hermes-agent/pull/127958) | **极高**——安全公告，理应优先合并 |

---

## 7. 用户反馈摘要

**痛点聚焦：**

1. **数据安全感严重缺失**——用户在 #132401 中反映 agent 多日工作成果会被静默删除无任何通知；#123238 反映出源安装路径下 launcher 重写致整系统砖化；#127919 揭示 serve 重启会"搁浅" Bot Chat 中途 turn。这些都指向**缺少"事务性+可恢复"语义**。

2. **Windows 平台二级公民**——#96993、#107854、#120356、#132547、#132589 一连串 Windows 专属问题（命名管道、注册表、app-bound 加密、隐藏控制台）说明在 Win11 最新版本下 Hermes Desktop + Gateway 体验**尚未达到 macOS/Linux 同等成熟度**。

3. **OpenRouter/第三方 provider 兼容性陷阱**——#126730（delisted model 404 无回退）、#132504（技能字面 `<tool>` 触发 403 并毒化会话）表明 Hermes 对 LLM 供应商的故障模式假设过窄。

4. **错误信号被静默吞噬**——#125746（并发字典迭代致插件整批丢弃）、#82688（should_fallback 写而不读）、#132498（示例路径走 scratch）共同反映"**功能存在但失效路径无反馈**"的设计缺陷。

5. **正面信号**——#132597（Markdown 实时预览）、#132596（Quick Entry 可拖拽定位）、[#103196](https://github.com/NousResearch/hermes-agent/pull/103196)（subject-scoped 邮件会话）等 PR 显示社区对 Desktop UX 和邮件工作流的打磨意愿强烈且方案成型。

---

## 8. 待处理积压（提醒维护者关注）

按搁置时长排序：

| 编号 | 类型 | 创建日期 | 状态 | 关注点 |
|---|---|---|---|---|
| [#28570](https://github.com/NousResearch/hermes-agent/issues/28570) | UDS agent-wake 传输 | 2026-05-19 | CLOSED | 已关闭但相关 #28852 同期关闭，需确认合并 |
| [#28852](https://github.com/NousResearch/hermes-agent/issues/28852) | wake-inbox 持久化排空 | 2026-05-19 | CLOSED | 同上 |
| [#38650](https://github.com/NousResearch/hermes-agent/issues/38650) | MCP "failed" 误报 | 2026-06-04 | OPEN | 持续 4 个月的用户体验问题 |
| [#47435](https://github.com/NousResearch/hermes-agent/issues/47435) | ACP Registry 注册 | 2026-06-16 | OPEN | 影响 IDE 用户触达 |
| [#64049](https://github.com/NousResearch/hermes-agent/pull/64049) | **PR**: config 显示所有 messaging 平台 | 2026-07-14 | OPEN | **已 pending 80+ 天**，社区反复遭遇 |
| [#65426](https://github.com/NousResearch/hermes-agent/issues/65426) | WhatsApp profile 隔离 | 2026-07-16 | CLOSED | 已关闭，建议确认是否需要文档跟进 |
| [#82688](https://github.com/NousResearch/hermes-agent/issues/82688) | should_fallback 死代码 | 2026-08-09 | OPEN | 6 周无响应，建议清理 |
| [#96993](https://github.com/NousResearch/hermes-agent/issues/96993) | Win Chrome app-bound 加密 | 2026-08-28 | OPEN | 5 周无 fix |
| [#113565](https://github.com/NousResearch/hermes-agent/pull/113565) | **PR**: 技能索引提示词裁剪 | 2026-09-16 | OPEN | 性能收益明确，建议加速审 |
| [#64049](https://github.com/NousResearch/hermes-agent/pull/64049) | 同上 messaging platforms | 2026-07-14 | OPEN | **最长 pending PR** |

**维护者行动建议：**

1. **立即合并 [PR #127958](https://github.com/NousResearch/hermes-agent/pull/127958)**（js-yaml 4.3.2 安全升级）。
2. **优先 review `update` 子系统 PR**（#128461、#132365、#101127）以化解渠道信任危机。
3. **专题治理 Windows 平台**——本周新增/活跃的 5 个 Windows P0/P1 Issue 表明已

</details>

<details>
<summary><strong>OpenHuman</strong> — <a href="https://github.com/tinyhumansai/openhuman">tinyhumansai/openhuman</a></summary>

<think>Let me analyze this GitHub data for the OpenHuman project and generate a comprehensive daily report for 2026-10-04.

Key observations:
1. 17 issues updated (8 active, 9 closed) - very high activity
2. 27 PRs updated (8 open, 19 merged/closed) - high activity
3. No new releases
4. Most issues are from a "benchmarks" run, suggesting systematic bug discovery
5. Many issues have priorities p1/p2 indicating significant bugs
6. Many issues are being closed quickly with corresponding PRs - good responsiveness

Let me categorize:

**Issues by status:**
- OPEN: #6957, #6952, #6951, #6983, #6964, #6962, #6960, #6984, #6978 (PR)
- CLOSED: #6953, #6955, #6954, #6956, #6950, #6933, #6958, #6961, #6959

**PRs by status:**
- OPEN: #6971, #6973, #6974, #6972, #6986, #6985, #6978, #6949
- CLOSED: #6975, #6976, #6979, #6980, #6981, #6982, #6977, #6968, #6970, #6966, #6969, #6967

Looking at the pattern - many issues are being closed with corresponding fix PRs from @senamakel. This appears to be a coordinated bug bash from running on Terminal-Bench and DeepSWE benchmarks.

Issues that have corresponding PRs:
- #6953 → #6975 (turn clock, tool durations)
- #6952 → #6973 (spec check before final answer)
- #6954 → #6966 (credential scrubber)
- #6956 → #6968 (thread-less goal tools)
- #6955 → #6969 (tinyjuice on demand)
- #6950 → closed (but #6980 related?)
- #6958 → #6976 (iteration cap)
- #6961 → #6970 (sandbox stdout/stderr)
- #6959 → closed
- #6957 → still open
- #6951 → #6971 (reasoning model exhausted)
- #6962 → #6972 (DeepSeek prompt cache)
- #6960 → #6974 (compaction drops user message)
- #6984 → #6985 (memory custom embedding)

This is a very systematic issue → PR closure pattern. Almost all the p1/p2 bugs from the benchmarks run have fix PRs.

Let me now write the report.</think>

# OpenHuman 项目日报
**日期：** 2026-10-04
**数据周期：** 过去 24 小时

---

## 1. 今日速览

OpenHuman 今日处于**高强度 Bug 修复节奏**：过去 24 小时共处理 17 个 Issue（9 关闭/8 仍开）和 27 个 PR（19 已合并或关闭/8 待合并）。绝大多数 Issue 来自基准测试（Terminal-Bench 4.0 与 DeepSWE）的系统性回归发现，由 `@senamakel` 主导创建并提交对应修复 PR，形成"问题→修复"闭环，效率极高。无新版本发布，但主干代码健康度显著提升，反映了"基准驱动 → 集中修复"的高质量工程节奏。

---

## 2. 版本发布

**无新版本发布**。所有修复仍处于 PR 合并阶段，待主干稳定后再行发版。

---

## 3. 项目进展

今日合并/关闭了 19 个 PR，推进了多个关键能力与稳定性修复，整体进展显著：

### 核心 Agent 稳定性
- **#6975** [已关闭] `feat(agent): turn clock, tool durations and turn-aware shell timeouts` — 新增工具耗时（`[took 900.3s]`）和 shell timeout 与回合预算联动 (修复 [#6953](https://github.com/tinyhumansai/openhuman/issues/6953))
- **#6971** [OPEN] `fix(agent): bound reasoning and stop truncated-empty turns closing as finished` — 限制推理预算，避免截断空回合被错误标记为完成 (修复 [#6951](https://github.com/tinyhumansai/openhuman/issues/6951))
- **#6976** [已关闭] `fix(agent): liftable iteration cap, budget notice, real-edit final write` — 编排器迭代上限从 50 提升至 200，新增 `[agent] max_tool_iterations_override` 配置 (修复 [#6958](https://github.com/tinyhumansai/openhuman/issues/6958))

### 缓存与性能优化
- **#6972** [OPEN] `fix(agent): keep nudges off DeepSeek's system prefix so its prompt cache survives` — 修复 DeepSeek 提示缓存被中段系统消息击穿问题 (修复 [#6962](https://github.com/tinyhumansai/openhuman/issues/6962))
- **#6969** [已关闭] `fix(tokenjuice): summarize tool output with the LLM only on request` — 摘要模型改为按需调用，避免 8s 超时即丢结果 (修复 [#6955](https://github.com/tinyhumansai/openhuman/issues/6955))
- **#6967** [已关闭] `fix(agent): verbatim file reads, no LLM summary; clearer juice tool guidance` — 纯文件读取类工具调用不再被压缩

### 工具与沙箱改进
- **#6968** [已关闭] `fix(agent): don't offer thread goal tools to thread-less turns` — headless 会话不再暴露无法使用的 goal_* 工具 (修复 [#6956](https://github.com/tinyhumansai/openhuman/issues/6956))
- **#6970** [已关闭] `fix(sandbox): capture local-jail output outside the user's project` — 沙箱 `.sandbox_stdout/.sandbox_stderr` 不再污染项目根目录 (修复 [#6961](https://github.com/tinyhumansai/openhuman/issues/6961))
- **#6981** [已关闭] `fix(sandbox): grant toolchain/git/scratch to the real local jail` — 重新启用 Landlock/Seatbelt 沙箱后端
- **#6966** [已关闭] `fix(agent): stop the credential scrubber redacting source code` — credential_scrub 不再误删源代码 (修复 [#6954](https://github.com/tinyhumansai/openhuman/issues/6954))
- **#6980** [已关闭] `fix(agent): a fetched site's HTTP status is not a credential failure` — 区分外站 401/403 与本系统凭据失败
- **#6977** [已关闭] `Attach permanent tools to existing embedded agents` — Embedder 可向已实例化的 Agent 添加原生工具

### 测试与质量
- **#6979** [已关闭] `test(session): cover thread-less goal-tool gating in text-dialect prompts`
- **#6982** [已关闭] `test: fix lib tests failing on main` — 修复 main 分支上的库测试用例失败

**综合评估**：今日合并的工作显著抬升了 OpenHuman 在长时间自主回合、DeepSeek/类似前缀缓存模型、shell 沙箱、tokenjuice 摘要策略等多个维度的稳定性，并提升了 orchestrator 的多文件交付能力。

---

## 4. 社区热点

今日讨论最集中、关注度最高的条目均来自 `@senamakel` 主导的基准回归修复，评论数最高为 **3 条**（[Issue #6957](https://github.com/tinyhumansai/openhuman/issues/6957)），其余 p1/p2 议题均有 2 条评论讨论。

### 关键热点议题：
- **[#6957](https://github.com/tinyhumansai/openhuman/issues/6957)**（3 评论）— `analyze_image` 视觉子代理无法识别磁盘上的图片，`image_info` 把 base64 当作文本返回。这是 [Issue #6964](https://github.com/tinyhumansai/openhuman/issues/6964) "类型感知的附件处理" 的核心症状，亟需"附件摄入层"设计。
- **[#6953](https://github.com/tinyhumansai/openhuman/issues/6953)** — 模型缺乏对回合剩余时间的感知，工具结果缺耗时，shell 超时与回合预算无关。已被 [PR #6975](https://github.com/tinyhumansai/openhuman/pull/6975) 解决。
- **[#6952](https://github.com/tinyhumansai/openhuman/issues/6952)** — 所有 5 个 Terminal-Bench 4.0 失败都以"自我确认但错误输出"结尾，反映缺少"基于规范的交付前自检"。[PR #6973](https://github.com/tinyhumansai/openhuman/pull/6973) 提交了实验性方案。
- **[#6958](https://github.com/tinyhumansai/openhuman/issues/6958)** — Orchestrator 迭代上限对模型不可见且会覆盖配置。已被 [PR #6976](https://github.com/tinyhumansai/openhuman/pull/6976) 解决。
- **[#6962](https://github.com/tinyhumansai/openhuman/issues/6962)** — DeepSWE 跑分中 DeepSeek 因中段系统消息导致 prompt cache 重置。已被 [PR #6972](https://github.com/tinyhumansai/openhuman/pull/6972) 解决。

**诉求分析**：用户（基准测试开发者）最关心的是"自主回合的端到端可靠性"，尤其是模型自我评估、超时管理、缓存利用率、多文件交付、压缩鲁棒性这五大长期痛点。今日的 PR 矩阵几乎是针对这五大痛点的逐一回应。

---

## 5. Bug 与稳定性

按严重程度排列（基于 priority 标签与影响面）：

### 🔴 P1（严重）— 均已有对应修复 PR
| Issue | 标题 | 状态 | 修复 PR |
|-------|------|------|---------|
| [#6953](https://github.com/tinyhumansai/openhuman/issues/6953) | 模型无回合时间感知，shell timeout 忽略回合预算 | 已关闭 | [#6975](https://github.com/tinyhumansai/openhuman/pull/6975) |
| [#6956](https://github.com/tinyhumansai/openhuman/issues/6956) | headless 会话提供 goal_complete 但永远失败 | 已关闭 | [#6968](https://github.com/tinyhumansai/openhuman/pull/6968) |
| [#6950](https://github.com/tinyhumansai/openhuman/issues/6950) | 单次 exit-127 shell 失败即终止整回合（0 重试） | 已关闭 | — |
| [#6951](https://github.com/tinyhumansai/openhuman/issues/6951) | 推理模型耗尽输出预算两回合，交付物未写入 | OPEN | [#6971](https://github.com/tinyhumansai/openhuman/pull/6971) |
| [#6958](https://github.com/tinyhumansai/openhuman/issues/6958) | Orchestrator 迭代上限对模型不可见且覆盖配置 | 已关闭 | [#6976](https://github.com/tinyhumansai/openhuman/pull/6976) |
| [#6962](https://github.com/tinyhumansai/openhuman/issues/6962) | 中段系统消息重置 DeepSeek prompt cache | OPEN | [#6972](https://github.com/tinyhumansai/openhuman/pull/6972) |
| [#6960](https://github.com/tinyhumansai/openhuman/issues/6960) | 中段压缩丢弃用户任务消息 | OPEN | [#6974](https://github.com/tinyhumansai/openhuman/pull/6974) |
| [#6933](https://github.com/tinyhumansai/openhuman/issues/6933) | OpenAI 兼容端点拒绝超过 64 字符的 tool_call id（harness 发放 69 字符） | 已关闭 | — |

### 🟠 P2（中等）— 大多已有修复 PR
| Issue | 标题 | 状态 | 修复 PR |
|-------|------|------|---------|
| [#6957](https://github.com/tinyhumansai/openhuman/issues/6957) | analyze_image 子代理无法识别磁盘图片 | OPEN | [#6964](https://github.com/tinyhumansai/openhuman/issues/6964) 设计中 |
| [#6955](https://github.com/tinyhumansai/openhuman/issues/6955) | TinyJuice 丢弃刚超 8s 超时的工具输出摘要 | 已关闭 | [#6969](https://github.com/tinyhumansai/openhuman/pull/6969) |
| [#6954](https://github.com/tinyhumansai/openhuman/issues/6954) | credential_scrub 误删普通源代码 | 已关闭 | [#6966](https://github.com/tinyhumansai/openhuman/pull/6966) |
| [#6952](https://github.com/tinyhumansai/openhuman/issues/6952) | 缺少基于规范的完成前自检 | OPEN | [#6973](https://github.com/tinyhumansai/openhuman/pull/6973)（实验性） |
| [#6983](https://github.com/tinyhumansai/openhuman/issues/6983) | 内存队列 LLM 并发（llm_permits）不可配置 | OPEN | — |
| [#6984](https://github.com/tinyhumansai/openhuman/issues/6984) | 内存主机忽略自定义 embedding 端点 | OPEN | [#6985](https://github.com/tinyhumansai/openhuman/pull/6985) |
| [#6964](https://github.com/tinyhumansai/openhuman/issues/6964) | 附件缺少类型感知摄入 | OPEN | — |

### 🟡 其他已关闭（无 P 标签）
- **[#6961](https://github.com/tinyhumansai/openhuman/issues/6961)** 沙箱把 `.sandbox_stdout/.sandbox_stderr` 写入项目根 → 已通过 [#6970](https://github.com/tinyhumansai/openhuman/pull/6970) 修复
- **[#6959](https://github.com/tinyhumansai/openhuman/issues/6959)** Web 研究预算清空工具并强制最终答案 → 已关闭

**整体评估**：今日处理的所有 P1/P2 Bug 均已"在途"或"已修复"，Bug 漏斗完整，未见回归遗留。

---

## 6. 功能请求与路线图信号

### 显式增强请求
- **[#6964](https://github.com/tinyhumansai/openhuman/issues/6964)** `enhancement` 附件类型感知摄入（视觉解读、内嵌图片、压缩包通知）— 与 [#6957](https://github.com/tinyhumansai/openhuman/issues/6957) 同根，提示附件处理层需要被提升为一等公民
- **[#6952](https://github.com/tinyhumansai/openhuman/issues/6952)** `enhancement` 在最终答案前进行规范化的"spec check"自检 — 已被 [PR #6973](https://github.com/tinyhumansai/openhuman/pull/6973) 实验性落地，是"模型质量杠杆"方向的重要信号
- **[#6983](https://github.com/tinyhumansai/openhuman/issues/6983)** 暴露内存队列 LLM 并发配置 — 让大规模首次摄入可在云摘要模型上从"数日"压缩到合理时长

### 已存在但仍 OPEN 的功能 PR
- **[#6949](https://github.com/tinyhumansai/openhuman/pull/6949)** `feat(memory): memory v2 — engine-selectable recall, fetch, store and context.md` — **重大路线图信号**：完全重写内存系统，引入引擎可选的 recall/fetch/store 与 context.md。草案状态，等待上游 TinyAgents #282/#287 合入。
- **[#6986](https://github.com/tinyhumansai/openhuman/pull/6986)** `feat(i18n): add Japanese UI locale (日本語)` — 添加日语界面与浏览器语言自动检测（覆盖 4,753 个键）
- **[#6978](https://github.com/tinyhumansai/openhuman/pull/6978)** `Fix composer routing for selected and persisted models` — 修复 composer 路由对选定/持久化模型的路由处理

### 路线图预测
下一稳定版本大概率会包含：
1. 回合时钟与工具耗时（[#6975](https://github.com/tinyhumansai/openhuman/pull/6975)）
2. Orchestrator 迭代上限可配置（[#6976](https://github.com/tinyhumansai/openhuman/pull/6976)）
3. TinyJuice 按需摘要（[#6969](https://github.com/tinyhumansai/openhuman/pull/6969)）
4. Local jail 重新启用（[#6981](https://github.com/tinyhumansai/openhuman/pull/6981)）
5. 日语 i18n（[#6986](https://github.com/tinyhumansai/openhuman/pull/6986)）
6. 自定义 embedding 端点（[#6985](https://github.com/tinyhumansai/openhuman/pull/6985)）

Memory v2（[#6949](https://github.com/tinyhumansai/openhuman/pull/6949)）作为重大架构调整，会单独规划版本。

---

## 7. 用户反馈摘要

由于今日议题几乎全部来自 `@senamakel` 在 Terminal-Bench/DeepSWE 基准测试上的回归发现，"用户"实际是基准测试开发者与项目维护者自身。提炼的真实痛点：

1. **长回合自主性差**：模型无法感知时间预算（[#6953](https://github.com/tinyhumansai/openhuman/issues/6953)），推理耗尽无恢复（[#6951](https://github.com/tinyhumansai/openhuman/issues/6951)），压缩丢任务（[#6960](https://github.com/tinyhumansai/openhuman/issues/6960)），是当前最突出的可靠性缺陷。
2. **DeepSeek 类前缀缓存模型兼容性差**：中段系统消息 / 校验提示 / no-progress nudge 会重置缓存（[#6962](https://github.com/tinyhumansai/openhuman/issues/6962)），按官方数据显示 71 次中 53 次缓存崩塌，造成 1.88M prompt token 重复计费。
3. **自我评估失败**：所有 5 个 Terminal-Bench 4.0 失败以"自我确认但错误"结尾（[#6952](https://github.com/tinyhumansai/openhuman/issues/

</details>

---
*本日报由 [Big Model Radar](https://github.com/96loveslife/big_model_radar) 自动生成。*
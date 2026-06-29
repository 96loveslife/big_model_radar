# OpenClaw 生态日报 2026-06-29

> Issues: 500 | PRs: 500 | 覆盖项目: 12 个 | 生成时间: 2026-06-29 04:26 UTC

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

<think>
The user wants me to generate a comprehensive daily report for the OpenClaw project based on the GitHub data provided. Let me analyze the data carefully and create a well-structured report in Chinese.

Let me analyze the key data points:

1. **Overall Activity:**
   - 500 issues updated (426 new/active, 74 closed)
   - 500 PRs updated (398 pending merge, 102 merged/closed)
   - 1 new release: v2026.6.11-beta.2

2. **Release highlights:**
   - Slack relay mode
   - Native Mattermost /oc_queue
   - Per-DM model overrides
   - PRs: #94707, #95546, #95120

3. **Top issues by comments:**
   - #75 - Linux/Windows Clawdbot Apps (110 comments, 81 thumbs up)
   - #88838 - SQLite migration tracking (36 comments)
   - #77598 - Live dev agent behavior tracking (22 comments)
   - #88312 - Codex turn-completion regression (18 comments)
   - #86538 - Session write-lock timeouts (17 comments)
   - Various others

4. **Top PRs:**
   - #85651 - context-pressure-aware continuation
   - #97656 - GEMINI_API_KEY rotation
   - #84525 - avoid serializing plaintext model api keys
   - #97431 - feishu token invalidation
   - #88992 - recover stranded replies
   - #97228 - bound SSE response reads
   - #83933 - cron deleteAfterRun fix
   - #89040 - event-loop stall perf
   - #95951 - google-gemini-cli auth alias
   - #97642 - Discord false stale snapshots
   - #94106 - secrets env scrub
   - #79538 - skill config requirements
   - #78075 - plugin hook closure state
   - #89041 - discord ws limits
   - #97620 - google-meet OOM bound
   - #97646 - flushPendingToolResults defer
   - #77559 - codex channel plugin diagnostics
   - #74734 - ACP stream keys migration
   - #74783 - gateway health telemetry
   - #73822 - SecretRef for phone numbers
   - #73788 - memory-lancedb refresh tool
   - #72209 - passive session recovery
   - #71154 - exec POSIX line continuations
   - #97191 - proxy SSE parser bound
   - #96875 - vydra bound control responses
   - #70046 - cron HH:MM support
   - #96886 - fal bound responses
   - #70002 - ci docs sync skip
   - #96904 - together/pixverse bound reads
   - #96625 - SQLite sessions/transcripts flip

Now let me organize this into the requested report structure. I need to be objective, data-driven, and emphasize project health.

Let me think about the analysis:
- The project is very active with 500 issues and 500 PRs in 24 hours
- There are many security/performance related fixes (bounding reads, SSe parsing, OOM prevention)
- The SQLite migration is a major ongoing effort
- There's a strong focus on channel integrations (Slack, Mattermost, Discord, Telegram, Feishu, etc.)
- Authentication/authorization improvements are visible
- The project shows good health overall with high activity, structured PR review process, and multiple maintainer-tracked issues

For bugs and stability, I should categorize:
- P1 critical bugs (session state, message loss, crash loops)
- Regressions
- Performance issues
- Security issues

For features:
- Cross-platform support (Linux/Windows)
- SQLite companion APIs
- MCP approval flow
- Gateway-lite mode
- Telegram bot-to-bot
- i18n
- Secret management
- etc.

For user feedback - I need to extract common pain points from issue titles and summaries:
- Session management issues
- Channel-specific bugs
- Performance/latency
- Installation issues
- Cross-backend model switching
- Plugin reliability

Let me draft the report now. I need to be in Chinese and use a professional, objective tone.
</think>
# OpenClaw 项目日报 · 2026-06-29

## 一、今日速览

OpenClaw 仓库在过去 24 小时继续保持高强度迭代节奏：500 条 Issues 更新（426 条活跃/新开，74 条关闭）与 500 条 PR 更新（398 条待合并，102 条合并/关闭），并发布 `v2026.6.11-beta.2` 增量版本。议题活跃度依旧饱满，P1/P2 级别的会话状态、消息丢失、Auth/OOM 类问题密集出现，但 PR 侧同时涌现出大量针对 SSE/JSON 解析、Provider 响应读取边界的稳定性修复（"bound reads" 系列），说明项目处于"集中修缮 + 大型重构并行"阶段。整体健康度评估：**活跃但承压**——代码侧抗风险能力在快速提升，Issues 侧中长尾积压与维护者审阅带宽仍是主要瓶颈。

---

## 二、版本发布

### v2026.6.11-beta.2（新增）

- **渠道控制能力增强**
  - 新增 **Slack relay 模式**（[#94707](https://github.com/openclaw/openclaw/pull/94707)）
  - 原生 **Mattermost `/oc_queue`** 命令（[#95546](https://github.com/openclaw/openclaw/pull/95546)）
  - **按 DM 粒度覆盖模型**（per-DM model overrides，[#95120](https://github.com/openclaw/openclaw/pull/95120)）
- **致谢**：@sjf-oa、@amknight、@xydigit-zt、@thomaszta、@gandalf-at-lerian
- **破坏性变更**：从摘要判断，beta 增量未涉及 schema 级破坏；建议在 Slack relay、Mattermost queue 启用前进行 staging 回归测试
- **迁移注意**：若使用 per-DM 模型覆盖，需确认下游 Provider 配额与计费边界

---

## 三、项目进展

今日合并/关闭的关键 PR 涵盖稳定性、安全边界、Auth、Provider 兼容等多条线：

| 类别 | PR | 关键内容 |
|---|---|---|
| **安全/资源边界** | [#97191](https://github.com/openclaw/openclaw/pull/97191) `fix(proxy): bound SSE parser via complete-line cap at 1 MiB` | 防止 proxy SSE 解析无界缓冲 |
| | [#97228](https://github.com/openclaw/openclaw/pull/97228) `fix(openai-completions): bound SSE response reads via buildGuardedModelFetch` | openai-completions SSE 读取加 byte 上限 |
| | [#96875](https://github.com/openclaw/openclaw/pull/96875) `fix(vydra): bound control response reads` | Vydra 控制响应读取加防 OOM 上限 |
| | [#96886](https://github.com/openclaw/openclaw/pull/96886) `fix(fal): bound music/video generation response reads` | fal provider 成功路径加读取上限 |
| | [#96904](https://github.com/openclaw/openclaw/pull/96904) `fix(together, pixverse): bound video response reads` | Together / PixVerse 视频响应读取加上限 |
| | [#97620](https://github.com/openclaw/openclaw/pull/97620) `fix(google-meet): bound Drive document export reads to prevent OOM` | Google Meet Drive 导出文本限制 16 MiB |
| **Provider 修复** | [#97656](https://github.com/openclaw/openclaw/pull/97656) `fix(google): rotate GEMINI_API_KEY on rate-limit errors in LLM streaming path` | Gemini 多 key 在 429 错误时轮换 |
| | [#95951](https://github.com/openclaw/openclaw/pull/95951) `fix(google): add google-gemini-cli auth alias and expand model runtime bindings` | 修复 Google-Gemini-CLI 重新 onboard 后聊天卡死 |
| | [#97431](https://github.com/openclaw/openclaw/pull/97431) `fix(feishu): invalidate cached token and retry on 99991663 / 99991664` | 飞书 token 过期自动重试 |
| **可靠性** | [#88992](https://github.com/openclaw/openclaw/pull/88992) `fix: recover stranded replies in message_tool_only mode` | 修复 message_tool 模式下被 LLM 忘记调用时回复静默丢失 |
| | [#83933](https://github.com/openclaw/openclaw/pull/83933) `fix(cron): skip deleteAfterRun and preserve counters for manual runs` | 修复 `cron run` 误删一次性 at-job |
| | [#89040](https://github.com/openclaw/openclaw/pull/89040) `perf: avoid event-loop stall during embedded_run bootstrap-context` | embedded_run bootstrap 阶段 14-22s 事件循环阻塞 |
| | [#89041](https://github.com/openclaw/openclaw/pull/89041) `fix(discord): disable ws 8.21.0 receiver part limits for gateway sockets` | 关闭 ws 8.21.0 接收端分片限制导致的连接中断 |
| **配置/Auth** | [#84525](https://github.com/openclaw/openclaw/pull/84525) `fix: avoid serializing plaintext model api keys` | 防止明文 API key 落盘到 models.json |
| | [#94106](https://github.com/openclaw/openclaw/pull/94106) `fix(secrets): scope env scrub to migrated providers' vars` | 防止 SecretRef 迁移时误删其他 provider 凭据 |
| | [#74734](https://github.com/openclaw/openclaw/pull/74734) `fix(config): migrate legacy ACP stream keys on load` | 兼容旧 ACP stream 配置键 |
| **运维/CI** | [#70002](https://github.com/openclaw/openclaw/pull/70002) `ci: skip docs sync & translate-trigger workflows in forks` | Fork 仓库跳过上游专属 workflow |
| | [#70046](https://github.com/openclaw/openclaw/pull/70046) `fix(cron): support HH:MM time-only strings in --at; apply --tz to time-only input` | cron `--at` 支持纯时间字符串 |

**整体进展评估**：
- 安全/资源边界一次性收紧了 6 条以上路径的"无界读取"风险，体现出"以小步快跑方式系统性消除 OOM/DoS 攻击面"的工程纪律；
- Provider 兼容性修复集中在 Google / Feishu / Together / PixVerse / Fal 等近期高曝光渠道；
- 配置文件层面的 SecretRef 与 key 序列化收紧，配合 [#84525](https://github.com/openclaw/openclaw/pull/84525) 形成"凭据不落盘"的双重保险；
- 性能侧首条 PR（[#89040](https://github.com/openclaw/openclaw/pull/89040)）切入 embedded_run bootstrap 阻塞问题，回应了社区长期抱怨的"消息延迟"痛点。

---

## 四、社区热点

按评论数与互动量排序的 Top 议题（附链接）：

1. **[#75](https://github.com/openclaw/openclaw/issues/75) — Linux/Windows Clawdbot Apps**  
   - 110 评论 / 81 👍，仓库历史最热议题之一  
   - 诉求：补齐 Linux/Windows 桌面客户端，缩小与 macOS/iOS/Android 的功能差距
2. **[#88838](https://github.com/openclaw/openclaw/issues/88838) — Track core session/transcript SQLite migration**  
   - 36 评论，活跃维护者追踪  
   - 诉求：把 session/transcript 切换到 SQLite 单一权威存储（Path 3）
3. **[#77598](https://github.com/openclaw/openclaw/issues/77598) — Track live dev agent behavior and trajectory**  
   - 22 评论，观测型追踪 issue  
   - 诉求：观察真实 dev agent 24h 行为轨迹，不主动干预
4. **[#88312](https://github.com/openclaw/openclaw/issues/88312) — Codex app-server turn-completion stall regression**  
   - 18 评论，自 2026.5.27 起的多 tool agent turn 必现失败
5. **[#86538](https://github.com/openclaw/openclaw/issues/86538) — Session write-lock timeouts block subagent delivery**  
   - 17 评论，影响主链路 / cron / subagent 通道
6. **[#79902](https://github.com/openclaw/openclaw/issues/79902) — Companion-friendly SQLite transcript/session seams**  
   - 13 评论，umbrella 下含 [#79903](https://github.com/openclaw/openclaw/issues/79903)、[#79904](https://github.com/openclaw/openclaw/issues/79904)、[#79905](https://github.com/openclaw/openclaw/issues/79905)
7. **[#78308](https://github.com/openclaw/openclaw/issues/78308) — Channel-mediated approval for MCP tool calls (consent envelope)**  
   - 13 评论，安全 + UX 取舍
8. **[#74484](https://github.com/openclaw/openclaw/issues/74484) — Gateway pairing scope deadlock**  
   - 12 评论，CLI 处于 scope 死锁，approve/reject 路径均不可达
9. **[#55334](https://github.com/openclaw/openclaw/issues/55334) — sessions.json 无界增长导致 Gateway OOM**  
   - 11 评论，根因 skillsSnapshot 重复写入

**分析**：社区讨论高度集中于三类诉求——
- **平台覆盖完整性**（Linux/Windows 桌面端 [#75](https://github.com/openclaw/openclaw/issues/75)）
- **会话/转录层架构升级**（SQLite 单一权威存储 [#88838](https://github.com/openclaw/openclaw/issues/88838)、companion 配套 API 系列 [#79902-79905](https://github.com/openclaw/openclaw/issues/79902)）
- **稳定性的硬骨头**（OOM、回归、scope 死锁、turn stall）

---

## 五、Bug 与稳定性

按严重程度整理今日仍在追踪的代表性问题：

### 🔴 P1（影响消息/会话/认证/崩溃循环）

| Issue | 主题 | Fix PR | 状态 |
|---|---|---|---|
| [#88838](https://github.com/openclaw/openclaw/issues/88838) | Core session/transcript SQLite 迁移 | [#96625](https://github.com/openclaw/openclaw/pull/96625) | PR 等待作者更新 |
| [#86538](https://github.com/openclaw/openclaw/issues/86538) | Session JSONL write-lock 超时阻塞 subagent 通道 | 待 | 无 |
| [#88312](https://github.com/openclaw/openclaw/issues/88312) | Codex app-server turn-completion 停顿（2026.5.27 回归） | 待 | 无 |
| [#74484](https://github.com/openclaw/openclaw/issues/74484) | Gateway pairing scope 死锁 | 待 | 无 |
| [#55334](https://github.com/openclaw/openclaw/issues/55334) | sessions.json 无界增长致 OOM | 部分 | 关联 session storage 重构 |
| [#74586](https://github.com/openclaw/openclaw/issues/74586) | AM embedded run 误判 memory_search 为 timeout | 待 | 无 |
| [#91363](https://github.com/openclaw/openclaw/issues/91363) | Isolated cron 一直 LLM request failed | 待 | 无 |
| [#75593](https://github.com/openclaw/openclaw/issues/75593) | `/subagents list` spawn 后仍为空（v2026.4.29） | 待 | 无 |
| [#76042](https://github.com/openclaw/openclaw/issues/76042) | 2026.5.x 全新安装卡住 | 待 | needs-info |
| [#76038](https://github.com/openclaw/openclaw/issues/76038) | Stuck Session Recovery 双重失效 | 待 | 无 |
| [#78493](https://github.com/openclaw/openclaw/issues/78493) | `sudo openclaw update` 导致混合所有权 + doctor 覆盖 config | 待 | 无 |
| [#79752](https://github.com/openclaw/openclaw/issues/79752) | Node v26 下 Discord HTTP 响应 gzip 未解压 | 待 | 无 |
| [#80040](https://github.com/openclaw/openclaw/issues/80040) | OAuth 失效级联：placeholder + 重复 tool + cold-cache 上下文丢失 | 待 | 无 |
| [#91592](https://github.com/openclaw/openclaw/issues/91592) | memory_search `--force` 后 scopeHash 失配 | 已 CLOSED | — |
| [#83184](https://github.com/openclaw/openclaw/issues/83184) | Heartbeat reply 留下 pendingFinalDelivery 卡死 | 已 CLOSED | — |
| [#85822](https://github.com/openclaw/openclaw/issues/85822) | Discord turn 末尾 ~48s 静默 lane 滞留 | 已 CLOSED | — |
| [#79308](https://github.com/openclaw/openclaw/issues/79308) | Telegram 群组回复错发到 DM | 已 CLOSED | — |
| [#77642](https://github.com/openclaw/openclaw/issues/77642) | 5.3 lossless-claw 重复回答 + 合成 tool result 缺失 | 待 | 无 |
| [#78055](https://github.com/openclaw/openclaw/issues/78055) | Subagent announce 投递陈旧输出 + 继承无关历史 | 待 | 无 |

### 🟠 P2（影响功能/性能/可观测性）

| Issue | 主题 | 备注 |
|---|---|---|
| [#77136](https://github.com/openclaw/openclaw/issues/77136) | WebChat 部分 assistant 消息不渲染 | TUI 与转录数据完好 |
| [#77930](https://github.com/openclaw/openclaw/issues/77930) | Discord channel 在 2026.5.4+ 加载失败（回归） | beta.1 可用 |
| [#79077](https://github.com/openclaw/openclaw/issues/79077) | Telegram bot-to-bot / guest-bot 模式 | 8 👍，高呼声 |
| [#77733](https://github.com/openclaw/openclaw/issues/77733) | `/new` `/reset` 裸调用不触发 persona greeting（5.3 回归） | 待 |
| [#78602](https://github.com/openclaw/openclaw/issues/78602) | Browser 插件 chrome-mcp targetId 失配 + AbortError | 待 |
| [#75380](https://github.com/openclaw/openclaw/issues/75380) | provider-payload / cache-trace JSONL 无界增长 | 待 |
| [#80036](https://github

---

## 横向生态对比

<think>
The user wants a comprehensive horizontal comparison report across all the open-source projects covered in the daily reports. Let me analyze the data carefully and structure the report according to the 7 required sections.

Let me first summarize the key data from each project:

1. **OpenClaw**: 500 issues, 500 PRs, 1 release (v2026.6.11-beta.2). Highly active. Focus on stability fixes, security boundaries, provider compatibility.

2. **NanoBot**: 6 issues, 25 PRs, 0 releases. Moderate activity. Key focus on prompt cache (#4222 fix via #4568), WebUI streaming, shell security.

3. **Zeroclaw**: 50 issues, 50 PRs, 0 releases. High activity. Focus on v0.8.3 release and v0.9.0 roadmap. vLLM 0.19+ compatibility issues.

4. **PicoClaw**: 0 issues, 2 PRs, 0 releases. Low activity. Stale cleanup day.

5. **NanoClaw**: 0 issues, 6 PRs, 0 releases. Low-moderate. Security focus (CWE-59 symlink).

6. **IronClaw**: 3 issues, 41 PRs, 0 releases. Very high PR activity. Focus on Reborn integration test framework, Slack pairing, capability policy.

7. **LobsterAI**: 5 issues, 6 PRs, 0 releases. Low activity. Mostly stale cleanup. New bug #2216 about memory search.

8. **TinyClaw**: No activity.

9. **Moltis**: 1 issue, 2 PRs, 0 releases. Low activity. Focus on image compression and feature flags.

10. **CoPaw**: 14 issues, 24 PRs, 0 releases. High activity. Focus on agentscope 2.0 migration, DingTalk/Matrix channels, subagent loops.

11. **ZeptoClaw**: No activity.

12. **EasyClaw**: 0 issues, 0 PRs, 1 release (v1.8.49). Quiet day, release only.

Now let me think about the ecosystem positioning:

**Project Categories** (based on activity, focus):
- **High-intensity iteration phase**: OpenClaw, IronClaw, CoPaw, Zeroclaw
- **Moderate activity, quality polishing**: NanoBot
- **Low activity / quiet phase**: PicoClaw, NanoClaw, LobsterAI, Moltis, EasyClaw
- **Dormant**: TinyClaw, ZeptoClaw

**Common Technical Themes** (cross-project):
1. **Stability / resource bounds** (OOM, SSE parsing, response reading):
   - OpenClaw: 6+ "bound reads" PRs
   - Zeroclaw: vLLM 0.19+ compatibility
   - NanoClaw: symlink escape
   - Moltis: image downscaling
   - LobsterAI: EBUSY lock

2. **Multi-channel integration** (Slack, Discord, Telegram, Feishu, Mattermost, Matrix, DingTalk):
   - OpenClaw: Slack, Mattermost, Feishu
   - IronClaw: Slack pairing
   - CoPaw: DingTalk, Matrix
   - NanoBot: Weixin
   - NanoClaw: Discord, Telegram
   - Zeroclaw: Telegram multi-message

3. **Memory/Context management**:
   - OpenClaw: SQLite migration (#88838)
   - NanoBot: prompt cache (#4222)
   - Zeroclaw: context budget (#5808), memory lifecycle decoupling (#6850)
   - LobsterAI: memory search provider lock (#2216)
   - CoPaw: compaction threshold, memory search reranker

4. **Auth/Security hardening**:
   - OpenClaw: API key serialization, SecretRef
   - NanoClaw: symlink containment
   - CoPaw: Codex auth
   - LobsterAI: OAuth
   - IronClaw: Capability policy (#5385)

5. **Multi-agent orchestration**:
   - OpenClaw: subagent delivery
   - NanoBot: A2A delegation (#4571)
   - IronClaw: subagent flow
   - CoPaw: subagent polling loop (#4873)

6. **Test infrastructure**:
   - IronClaw: reborn integration test framework
   - CoPaw: pytest-xdist, e2e tests
   - Zeroclaw: MCP enforcement tests

7. **CI/CD hardening**:
   - OpenClaw: fork workflow skip
   - Zeroclaw: cosign, SLSA, SBOM

Now let me structure the report. The user wants:
1. 生态全景 (3-5 sentences)
2. 各项目活跃度对比 (table)
3. OpenClaw 在生态中的定位
4. 共同关注的技术方向
5. 差异化定位分析
6. 社区热度与成熟度
7. 值得关注的趋势信号

Let me write this in a professional, data-driven way in Chinese.

For OpenClaw positioning - it's clearly the most active and the reference point. It's the "core" project for comparison.

Let me draft:

## 1. 生态全景
Brief overview of the entire personal AI assistant/agent ecosystem based on today's data.

## 2. 各项目活跃度对比
Table with: project name, issue count, PR count, release, health rating, status

## 3. OpenClaw 在生态中的定位
- 优势: 24h activity level (500/500), 长期 beta 通道, 多渠道深度集成
- 技术路线: provider 适配 + 多渠道 + 会话管理
- 社区规模: 最大体量, 500+ active items

## 4. 共同关注的技术方向
Table of themes with project list

## 5. 差异化定位分析
- OpenClaw: 渠道+provider 广度
- NanoBot: 极致轻量, prompt 缓存
- Zeroclaw: 生产级可观测性
- PicoClaw: 嵌入式协议
- NanoClaw: 容器安全
- IronClaw: Rust, NEAR AI 集成, Slack-first
- LobsterAI: 桌面 GUI, 中文场景
- Moltis: 极致精简, Apple 平台
- CoPaw: agentscope 生态, 钉钉

## 6. 社区热度与成熟度
分层

## 7. 值得关注的趋势信号
- SSE/资源边界收紧
- 多模态预处理前置
- Capability policy / 细粒度授权
- SQLite 单一权威存储
- 测试基础设施投资
- 渠道 abstraction 收敛

Let me write the final report now. I need to use thinking tags first as per the system prompt.

Note: I should make this comprehensive but not too long. The user wants it to be "简洁专业" (concise and professional). So I need to balance depth with readability.

Let me think about health ratings:
- OpenClaw: B+ (active but under pressure)
- NanoBot: A- (good)
- Zeroclaw: B+ (good but with some S1 issues)
- PicoClaw: C (stale cleanup day)
- NanoClaw: B- (focused but quiet)
- IronClaw: A- (high activity, some backlog)
- LobsterAI: C+ (low engagement, stale issues)
- TinyClaw: D (dormant)
- Moltis: B- (good PR quality, low volume)
- CoPaw: A- (very active, well-balanced)
- ZeptoClaw: D (dormant)
- EasyClaw: B (release only)

Let me think about how to present OpenClaw's positioning. Compared to the others:
- It's clearly the most active (500/500 = 100x NanoBot's volume)
- It has the most extensive channel integrations
- It has the most mature beta release cadence
- It has the most diverse contributor base
- It has the broadest issue/PR coverage

Differentiators:
- Volume: 20x larger than next active (IronClaw 41 PRs)
- Release cadence: only one of two with releases today
- Channel breadth: Slack, Mattermost, Feishu, Discord, Telegram, etc.
- Provider breadth: Google, Feishu, Together, PixVerse, Fal, Vydra, etc.
- Stability focus: 6+ "bound reads" PRs

Let me write this up now.
</think>
# 个人 AI 助手 / 智能体开源生态横向对比分析
**报告日期：2026-06-29**

---

## 1. 生态全景

今日 12 个受监测的开源项目呈现明显的**"哑铃型"分布**：头部项目（OpenClaw、IronClaw、CoPaw、Zeroclaw）保持高强度迭代，PR/Issue 流转活跃；中部项目（NanoBot、Moltis、NanoClaw）处于内部打磨期，单条 PR 质量较高但整体音量偏小；尾部项目（PicoClaw、LobsterAI、EasyClaw、TinyClaw、ZeptoClaw）社区互动趋于静默，以 stale 清理或单点发版为主。整体生态已度过"野蛮生长期"，**稳定性、安全边界、上下文治理、可观测性**成为跨项目共识级主线；与此同时，多模态预处理前置、细粒度能力授权、单一权威存储等新方向开始密集浮现。

---

## 2. 各项目活跃度对比

| 项目 | 24h Issues | 24h PRs | 24h Releases | 健康度 | 当前阶段 |
|---|---|---|---|---|---|
| **OpenClaw** | 500（426 活跃 / 74 关闭） | 500（398 待合并 / 102 关闭） | **1**（v2026.6.11-beta.2） | **B+** | 大型重构 + 集中修缮并行 |
| **IronClaw** | 3（2 活跃 / 1 关闭） | 41（24 待合并 / 17 关闭） | 0 | **A-** | Reborn 测试框架 + Slack 配对硬化 |
| **CoPaw** | 14（11 活跃 / 3 关闭） | 24（15 待合并 / 9 关闭） | 0 | **A-** | agentscope 2.0 迁移 + 钉钉/Matrix |
| **Zeroclaw** | 50（45 活跃 / 5 关闭） | 50（39 待合并 / 11 关闭） | 0 | **B+** | v0.8.3 收尾 + v0.9.0 预研 |
| **NanoBot** | 6（5 活跃 / 1 关闭） | 25（14 待合并 / 11 关闭） | 0 | **A-** | 上下文缓存优化 + 流处理鲁棒性 |
| **NanoClaw** | 0 | 6（5 待合并 / 1 关闭） | 0 | **B-** | 安全加固（CWE-59） + 渠道适配 |
| **Moltis** | 1 | 2（2 待合并） | 0 | **B-** | 构建瘦身 + 上下文加固 |
| **LobsterAI** | 5（1 活跃 / 4 stale 关闭） | 6（2 待合并 / 4 stale 关闭） | 0 | **C+** | 存量清理 + 维护节奏放缓 |
| **EasyClaw** | 0 | 0 | **1**（v1.8.49） | **B** | 静默发版，专注企业稳定性 |
| **PicoClaw** | 0 | 2（1 待合并 / 1 stale 关闭） | 0 | **C** | stale 清理日 |
| **TinyClaw** | 0 | 0 | 0 | **D** | 静默期 |
| **ZeptoClaw** | 0 | 0 | 0 | **D** | 静默期 |

---

## 3. OpenClaw 在生态中的定位

| 维度 | OpenClaw 表现 | 生态对标 |
|---|---|---|
| **绝对活跃度** | 24h 内 500 Issues + 500 PRs，**约为第二名 IronClaw 的 12 倍** | 远超所有同类项目 |
| **发布节奏** | v2026.6.11-beta.2 增量发布，beta 通道稳定 | 仅 OpenClaw 与 EasyClaw 今日有版本 |
| **渠道广度** | Slack、Mattermost、Feishu、Discord、Telegram、Google Meet 全覆盖 | Zeroclaw、CoPaw 渠道覆盖度次之 |
| **Provider 兼容** | Google / Gemini / Feishu / Together / PixVerse / Fal / Vydra 等 7+ 路径同步修复 | NanoBot 侧重 Anthropic 兼容，IronClaw 偏 NEAR AI |
| **安全姿态** | 6+ "bound reads" 系列 PR 系统性消除 OOM/DoS 攻击面 | 同期 Zeroclaw 落地 cosign/SLSA/SBOM，NanoClaw 修 CWE-59 |
| **社区规模** | 单 Issue 110 评论、81 👍（[#75](https://github.com/openclaw/openclaw/issues/75)）级别头部议题 | IronClaw、Zeroclaw 的头部议题互动量约为其 1/5–1/10 |

**核心定位判断**：OpenClaw 已确立为该生态的**事实标准（de-facto reference）**——在功能广度、迭代速度、社区规模三个维度均显著领先。但其体量也带来了**审阅带宽不足**与**长尾 Issue 积压**的代价（500 Issues 中有约 20% 为 30 天以上未响应），这与中型项目（如 NanoBot、IronClaw）的小而精形成鲜明对比。

---

## 4. 共同关注的技术方向

| 方向 | 涉及项目 | 典型诉求 |
|---|---|---|
| **资源读取边界（OOM/DoS 防护）** | OpenClaw（6+ PRs）、Moltis（#1138 图像下采样）、Zeroclaw（#8463 stdin 上限） | SSE 解析、Provider 响应、用户输入、图像 payload 均需 byte-level 边界 |
| **会话/转录层 SQLite 化** | OpenClaw（#88838 tracker + #79902-79905 配套 API）、Zeroclaw（#5808 context budget）、NanoBot（#4222 cache 失效） | 单一权威存储替代 JSONL 无界增长，companion 友好接口 |
| **多渠道适配器增强** | OpenClaw（Slack/Mattermost/Feishu）、IronClaw（Slack 配对硬化）、CoPaw（钉钉/Matrix）、NanoClaw（Discord/Telegram）、Zeroclaw（Telegram 多消息） | 每家渠道都至少贡献 1+ 协议级修复或功能 |
| **细粒度授权（Capability Policy）** | OpenClaw（#73822 SecretRef）、IronClaw（#5385 + #5394 e2e）、CoPaw（plugin approvals #2217）、NanoBot（#4562 exec allowlist） | owner/admin/member 分级、tool 级别审批 |
| **测试基础设施投资** | IronClaw（reborn 集成测试 7 个切片）、CoPaw（pytest-xdist 提速 7x）、Zeroclaw（#8370 MCP 回归测试） | 共识：测试是工程治理的杠杆点 |
| **多 Agent / 子 Agent 编排稳定性** | OpenClaw（#86538 subagent 阻塞、#78055 投递陈旧）、NanoBot（#4571 A2A 委派）、CoPaw（#4873 死循环、#5204 Matrix 死循环） | 缺统一的"打断 / 取消 / 反馈"机制 |
| **多模态输入前置处理** | Moltis（#1138）、PicoClaw（#2964 图像压缩未合入）、OpenClaw（隐含） | 图像、语音、视频进入上下文前先降级/转码 |
| **CI / 供应链安全** | OpenClaw（#70002 fork workflow）、Zeroclaw（cosign + SLSA + SBOM） | 镜像签名、可复现构建、SBOM 公开化 |

---

## 5. 差异化定位分析

| 项目 | 功能侧重 | 目标用户 | 技术架构关键差异 |
|---|---|---|---|
| **OpenClaw** | 渠道 + Provider 广度优先 | 多渠道 SaaS 集成商、平台方 | 多语言、provider 适配器模式、beta 增量节奏 |
| **NanoBot** | 极致轻量 + 上下文效率 | 个人开发者、成本敏感用户 | 块对齐 replay-window、small model 友好 |
| **Zeroclaw** | 生产级可观测性 + 网关化 | 企业 DevOps、air-gapped 部署 | OTel/cosign/SLSA、MemoryStrategy trait 抽象 |
| **IronClaw** | NEAR AI 生态 + Slack-first 工作流 | NEAR 生态开发者、Slack 重度用户 | Rust 性能、Capability Policy 三级模型、Reborn 协议 |
| **CoPaw** | agentscope 生态 + 钉钉/Matrix | 阿里系生态、飞书/钉钉企业用户 | 与 agentscope 2.0 深度绑定、DataPaw 插件市场 |
| **LobsterAI** | 桌面 GUI + 中文场景 | 网易生态、中文终端用户 | Cowork 技能 + Artifacts 预览管道、定时任务 |
| **PicoClaw** | 嵌入式协议运行时 | 第三方客户端、自动化测试 | 显式 turn-completion 协议、Tauri 桌面 |
| **Moltis** | 极简 + Apple 平台优先 | macOS 本地用户、隐私敏感群体 | matrix-sdk 可选依赖、gateway feature flag 治理 |
| **NanoClaw** | 容器化安全 + 多渠道 | 自托管运维 | CWE-59 symlink 防御、agent-to-agent 转发 |
| **EasyClaw** | 客服场景 + 企业级稳定性 | 客服 SaaS、坐席管理 | 客服会话状态机、JWT 订阅恢复 |

**关键差异点提炼**：
- **架构语言**：IronClaw（Moltis 偏 Rust）、CoPaw（Python agentscope）、其余多为 TS/Python 混合
- **分发形态**：OpenClaw/CoPaw/Zeroclaw 偏 daemon + 多端客户端；LobsterAI/PicoClaw 偏桌面 GUI；Moltis 偏轻量 CLI
- **生态归属**：CoPaw ↔ agentscope；IronCl

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

<think>Let me analyze the GitHub data for NanoBot (github.com/HKUDS/nanobot) for 2026-06-29 and create a structured daily report.

Key data points:
- Issues: 6 updates (5 open, 1 closed)
- PRs: 25 updates (14 pending, 11 merged/closed)
- New releases: 0

Let me organize this:

**Issues:**
1. #4222 - OPEN - bug about max_messages truncation invalidating prefix/prompt caching
2. #4010 - OPEN - Feature request for TTS/voice output
3. #4500 - CLOSED - WebUI self-restart stuck streaming
4. #4580 - OPEN - enhancement for conda environment for subprocesses
5. #3938 - OPEN - enhancement for message buffering/debounce for group chat
6. #4579 - OPEN - WebUI session timestamps + markdown export

**Important PRs (closed/merged):**
1. #4568 - CLOSED - block-aligned replay-window eviction (fixes #4222)
2. #4510 - CLOSED - drop malformed tool calls
3. #4569 - CLOSED - harden tool-call path against malformed relay responses
4. #4504 - CLOSED - support skills in subdirectories
5. #4566 - CLOSED - repair corrupt legacy-stem files
6. #4542 - CLOSED - deliver image content from MCP tools as artifacts
7. #4565 - CLOSED - clear stuck streaming after reconnect (fixes #4500)

**Open Important PRs:**
1. #4291 - subagents configurable model presets
2. #4582 - make replay message cap internal
3. #4578 - provider-scoped proxy config
4. #4554 - block Dream from creating duplicate skills
5. #4574 - return RetentionResult instead of bare tuple
6. #4192 - subagents inherit MCP tools
7. #4581 - reducing context usage/costs
8. #4562 - validate shell segments against exec.allowPatterns
9. #4577 - cover bwrap sandbox mounts
10. #4567 - weixin streaming fix
11. #4570 - per-subagent model override on spawn
12. #4571 - native A2A peer delegation
13. #4573 - oauth login to be/set main provider

Let me now compose the report in Chinese.</think>

# NanoBot 项目动态日报
**日期：2026-06-29**

---

## 1. 今日速览

NanoBot 项目今日继续保持较高的开发活跃度，过去 24 小时内共有 31 条 Issues/PR 更新（Issues 6 条 + PRs 25 条），其中 PR 合并/关闭率达 44%（11/25）。**Issue #4222（prompt cache 失效）作为当前最重要的性能 Bug，已由 PR #4568 给出修复方案并进入关闭流程**，标志着上下文治理（context governance）这条主线取得关键进展。今日无新版本发布。

整体健康度：**🟢 良好** —— 关键 Bug 修复响应迅速，WebUI、流处理、shell 安全、agent 协议等多条主线同步推进，社区贡献者密度高。

---

## 2. 版本发布

无新版本发布。

---

## 3. 项目进展（今日合并/关闭的重要 PR）

| PR | 类型 | 关键内容 |
|---|---|---|
| [#4568](https://github.com/HKUDS/nanobot/pull/4568) | bug + performance | **块对齐的 replay-window 淘汰机制**，修复 `max_messages` 切片引发的 prefix cache 持续失效问题（修 [#4222](https://github.com/HKUDS/nanobot/issues/4222)）。这是今日最重要的进展，理论上可显著降低长对话 token 成本。 |
| [#4510](https://github.com/HKUDS/nanobot/pull/4510) | bug | **过滤畸形 LLM 工具调用**：在执行与持久化前丢弃缺名/非字符串名称的工具调用，并清理历史中被污染的旧会话。 |
| [#4569](https://github.com/HKUDS/nanobot/pull/4569) | bug | **强化工具调用路径**：针对上游 relay 返回的畸形 `tool_use`（缺 id/name/input）增加防御。 |
| [#4565](https://github.com/HKUDS/nanobot/pull/4565) | bug (WebUI) | **WebUI 重连后清理卡死的流式输出**，并修复"无活动任务可停止"提示（修 [#4500](https://github.com/HKUDS/nanobot/issues/4500) 的 Bug 2 和 Bug 3）。 |
| [#4566](https://github.com/HKUDS/nanobot/pull/4566) | bug | **修复 `list_sessions()` 静默丢失历史命名会话文件**的问题（旧 `telegram_12345.jsonl` 等）。 |
| [#4542](https://github.com/HKUDS/nanobot/pull/4542) | feature (MCP) | **MCP 工具的图片内容以 artifact 形式交付**，避免把整个 base64 payload 灌进 tool-result 字符串造成 token 浪费。 |
| [#4504](https://github.com/HKUDS/nanobot/pull/4504) | feature | **支持 skills 的子目录分组组织**，改善技能数量增长后的可导航性。 |

> 综合来看，项目在**上下文缓存优化、流处理鲁棒性、shell 安全**三方面获得了实质推进。

---

## 4. 社区热点

| 条目 | 数据 | 分析 |
|---|---|---|
| [#4222 prefix cache 失效](https://github.com/HKUDS/nanobot/issues/4222) | 3 条评论 | **核心痛点**：长对话场景下每次 turn 都触发重新缓存，导致 token 与延迟双双飙升。该 Bug 的修复 PR（#4568）当日即关闭，表明社区"性能即成本"的诉求得到快速响应。 |
| [#4010 TTS/语音输出](https://github.com/HKUDS/nanobot/issues/4010) | 2 条评论 / 👍 2 | **双向语音闭环诉求**：nanobot 已支持语音输入，但缺语音输出，特别在 Telegram/Feishu 等原生支持 voice note 的渠道上，闭环体验有缺失。 |
| [#4291 spawn 模型预设](https://github.com/HKUDS/nanobot/pull/4291) | 待合并 | 子 agent 可独立指定 model preset（provider/model/temperature/tokens），解决"不同子任务需要不同模型"的现实诉求。 |
| [#4571 A2A 委派协议](https://github.com/HKUDS/nanobot/pull/4571) | 待合并 | 原生 Agent-to-Agent 委派机制（Supervisor → Researcher → Writer），是该项目从"单 agent + 子 agent"走向"团队协作"的关键演进。 |

---

## 5. Bug 与稳定性

| 严重度 | 条目 | 状态 |
|---|---|---|
| 🔴 **高** | [#4222 prefix cache 失效](https://github.com/HKUDS/nanobot/issues/4222) | ✅ **已有修复 PR（#4568 已关闭）**，待打标签合入主干 |
| 🟠 **中** | [#4500 WebUI 重启后流卡死](https://github.com/HKUDS/nanobot/issues/4500) | ✅ **已有修复 PR（#4565 已关闭）**，Bug 2 与 Bug 3 已解；建议关注 Bug 1 是否一并解决 |
| 🟡 **中** | [#4562 exec allowlist 被命令链接绕过](https://github.com/HKUDS/nanobot/pull/4562) | ⏳ PR 待合并；`echo allowlisted && touch /tmp/evil` 此前可绕过 `re.search` 检查，**安全相关，建议优先 review** |
| 🟡 **中** | [#4567 微信渠道非流式 bug](https://github.com/HKUDS/nanobot/pull/4567) | ⏳ PR 待合并；`channels.weixin.streaming` 字段此前被 pydantic 静默丢弃，导致部分上游 Anthropic relay 丢 `tool_use` 元信息 |
| 🟢 **低** | [#4566 旧命名会话文件丢失](https://github.com/HKUDS/nanobot/pull/4566) | ✅ 已关闭 |

---

## 6. 功能请求与路线图信号

| 需求 | 来源 | 已存在 PR？ | 路线图概率 |
|---|---|---|---|
| **TTS / 语音输出** | [#4010](https://github.com/HKUDS/nanobot/issues/4010) | ❌ 暂无 PR | 🟡 中：闭环体验明确，但 TTS 涉及多家 provider 适配，工作量较大 |
| **群聊消息缓冲/防抖** | [#3938](https://github.com/HKUDS/nanobot/issues/3938) | ❌ 暂无 PR | 🟢 高：多人连发消息场景高频，逻辑简单，应纳入下个迭代 |
| **conda 虚拟环境支持** | [#4580](https://github.com/HKUDS/nanobot/issues/4580) | ❌ 暂无 PR | 🟡 中 |
| **WebUI 会话时间戳 + Markdown 导出** | [#4579](https://github.com/HKUDS/nanobot/issues/4579) | ❌ 暂无 PR | 🟢 高：与项目"keep it tiny"哲学契合 |
| **子 agent 模型覆盖** | [#4231](https://github.com/HKUDS/nanobot/issues/4231)（关联 PR [#4570](https://github.com/HKUDS/nanobot/pull/4570)） | ✅ 已有 #4570、#4291 | 🟢 高 |
| **A2A 委派协议** | [#4179](https://github.com/HKUDS/nanobot/issues/4179)（关联 PR [#4571](https://github.com/HKUDS/nanobot/pull/4571)） | ✅ 已有 #4571 | 🟡 中：架构级变更，落地周期较长 |

---

## 7. 用户反馈摘要

- **长对话成本痛点**（[#4222](https://github.com/HKUDS/nanobot/issues/4222)）：用户反馈 `max_messages` 与 microcompact 两个机制叠加后，几乎每一轮都会改变 LLM 接收的前缀，导致 prompt cache 命中率接近 0。修复后将带来明显成本下降。
- **WebUI 重连体验断裂**（[#4500](https://github.com/HKUDS/nanobot/issues/4500)）：用户描述"nanobot 自重启后 UI 一直显示 processing，按停止按钮却提示 'No active task to stop'"，反映**前端状态与服务端会话注册表的一致性问题**。
- **群聊高并发场景下的反应过激**（[#3938](https://github.com/HKUDS/nanobot/issues/3938)）：用户反馈 Feishu/Telegram 群聊中多人连发消息时，每个消息都触发一次 agent 调度，体感"过于敏感"，希望增加缓冲/防抖。
- **shell 安全误判**（[#4562 关联 #4521](https://github.com/HKUDS/nanobot/pull/4562)）：用户发现 `echo allow && malicious` 形式的命令可绕过 `exec.allowPatterns`，**安全风险**，维护者反应迅速。
- **配置导出与时间戳诉求**（[#4579](https://github.com/HKUDS/nanobot/issues/4579)）：多 session 并行的"重度用户"期望侧边栏显示会话时间戳并能导出为 Markdown，体现项目正在从"尝鲜工具"走向"日用工具"。

---

## 8. 待处理积压（提醒维护者关注）

| 条目 | 类型 | 等待时长 | 备注 |
|---|---|---|---|
| [#4010 TTS 支持](https://github.com/HKUDS/nanobot/issues/4010) | feature | ~34 天 | 👍 2，社区呼声较高，但尚未有具体 PR |
| [#4291 spawn 模型预设](https://github.com/HKUDS/nanobot/pull/4291) | PR (open) | ~18 天 | 待合并，长期 open |
| [#4192 subagent MCP 工具继承](https://github.com/HKUDS/nanobot/pull/4192) | PR (open) | ~25 天 | 修复 #4166，长期 open，建议尽快 review |
| [#4580 conda 环境支持](https://github.com/HKUDS/nanobot/issues/4580) | feature | 1 天 | 新开 Issue，建议尽快评估 |
| [#3938 群聊缓冲](https://github.com/HKUDS/nanobot/issues/3938) | feature | ~40 天 | 高频用户场景，仍无 PR |

> **建议优先级**：安全相关的 [#4562](https://github.com/HKUDS/nanobot/pull/4562) 应尽快 review；[#4291](https://github.com/HKUDS/nanobot/pull/4291) 与 [#4192](https://github.com/HKUDS/nanobot/pull/4192) 已 open 较久，建议维护者给出合并时间表或转 draft。

---

*报告基于 HKUDS/nanobot 仓库 2026-06-29 公开数据生成。*

</details>

<details>
<summary><strong>Zeroclaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

<think>Let me analyze the GitHub data for Zeroclaw and generate a comprehensive daily report for 2026-06-29.

Key observations:
1. 50 issues updated (45 open/active, 5 closed)
2. 50 PRs updated (39 pending, 11 merged/closed)
3. No new releases
4. Multiple high-priority bugs related to context budget, MCP tools, OpenAI-compat providers
5. Several v0.8.3 tracker issues
6. Major theme: vLLM 0.19+ compatibility issues with `tool_choice` when tools list is empty - this appears across multiple providers (OpenAI Codex, OpenRouter, Copilot, Azure OpenAI, compatible)
7. CI improvements including cosign signing, SLSA provenance
8. In-app upgrade feature being developed
9. Memory lifecycle decoupling RFC
10. Structured observability RFC

Let me structure this report properly with all required sections.</think>

# Zeroclaw 项目日报 · 2026-06-29

---

## 一、今日速览

Zeroclaw 今日继续保持高强度迭代节奏，过去 24 小时共产生 50 条 Issue 更新和 50 条 PR 更新，无新版本发布。当前社区讨论高度聚焦于两个主题：**v0.8.3 发布前的收尾**（provider 兼容性、runtime 稳定性、CI 加固）以及 **v0.9.0 路线图的预研**（auth/security/网关架构重构）。一个特别突出的工程信号是：vLLM 0.19+ 升级触发了 OpenAI 兼容 provider 的 `tool_choice` 空列表序列化问题，单一根本原因在 5 个不同 provider 仓库同步推动了修复 PR，体现了团队高效的回归响应能力。

---

## 二、版本发布

**本周期无新版本发布。** 当前最新版本为 v0.8.0 系列，社区正集中精力为 v0.8.3 收尾，相关协调集中在 [Tracker #8071](https://github.com/zeroclaw-labs/zeroclaw/issues/8071)（runtime/agent loop）、[#8360](https://github.com/zeroclaw-labs/zeroclaw/issues/8360)（provider 序列化）、[#7314](https://github.com/zeroclaw-labs/zeroclaw/issues/7314)（WASM 插件）以及 [#8357](https://github.com/zeroclaw-labs/zeroclaw/issues/8357)（overflow 排队队列）。

---

## 三、项目进展

### 已关闭/合并的重要 PR

| PR | 标题 | 影响 |
|---|---|---|
| [#8370](https://github.com/zeroclaw-labs/zeroclaw/pull/8370) | MCP `mcp_bundles` 强制执行回归测试 | 验证 [#7733](https://github.com/zeroclaw-labs/zeroclaw/issues/7733) 修复，避免 per-agent MCP scope 再次成为 silent no-op |
| [#8058](https://github.com/zeroclaw-labs/zeroclaw/issues/8058) | CI: cosign 镜像签名 + SLSA provenance + SBOM 发布 | 已关闭，意味着 release-only 安全加固工作已落地，进入分割自 #7675 的拆分流程 |
| [#8238](https://github.com/zeroclaw-labs/zeroclaw/issues/8238) | 独立 delegate mode for specialist handoffs | 已关闭，对应 PR #7590 的功能需求闭环 |

**进展评估**：今日合并/关闭的 PR 中，安全相关（#8058、MCP enforcement）和稳定性相关（#7733 测试）的工作具有较高质量。整体项目在 v0.8.3 收尾节奏上保持稳定推进。

---

## 四、社区热点

### 讨论最活跃的 Issues（按评论数）

1. **[#5808](https://github.com/zeroclaw-labs/zeroclaw/issues/5808)** ⭐ 7 评论  
   *Default 32k context budget 被 system prompt + tool definitions 首轮就击穿 3.3x*  
   S1 级别阻塞问题，作者 @JordanTheJet 长期追踪。诉求：调高默认预算或采用按需扩展。

2. **[#6969](https://github.com/zeroclaw-labs/zeroclaw/issues/6969)** ⭐ 7 评论  
   *RFC: 统一输出路由模型（per-peer modality 偏好 + agent send_via 工具）*  
   从 Letta 迁移而来的用户痛点：丢失了显式控制"如何/在哪送达回复"的能力。

3. **[#6699](https://github.com/zeroclaw-labs/zeroclaw/issues/6699)** ⭐ 7 评论  
   *`tool_filter_groups` 对真实 MCP 工具是 no-op（前缀检查 bug）+ 与 deferred_loading 未集成*  
   两个独立 bug 的合并报告，技术细节深入（指明 `crates/zeroclaw-runtime/src/agent/loop_.rs:149`）。

4. **[#7184](https://github.com/zeroclaw-labs/zeroclaw/issues/7184)** ⭐ 5 评论  
   *RFC: 将翻译文件移入 git submodule*  
   仓库结构治理：让翻译 churn 独立历史。

5. **[#6642](https://github.com/zeroclaw-labs/zeroclaw/issues/6642)** ⭐ 4 评论  
   *通过 `gen_ai.input.messages` / `gen_ai.output.messages` 捕获完整 prompt/completion*  
   与上游 Micra-io 分支对齐的可观测性增强。

6. **[#7800](https://github.com/zeroclaw-labs/zeroclaw/issues/7800)** ⭐ 4 评论 + 👍 0  
   *ZeroCode Code 帮助/键绑定在 macOS 上误导或不可达*  
   来自维护者 @Audacity88 自身的 UX 反馈。

**诉求分析**：热点话题集中在 **生产可用性**（context budget）、**用户控制力**（输出路由、技能注册）、**可观测性**（OTel 事件丰富化）三大方向，反映了项目从"能跑"向"生产级可靠"的演进需求。

---

## 五、Bug 与稳定性

### P1 / S1 高危 Bug（按严重程度排列）

| Issue | 严重度 | 描述 | 修复状态 |
|---|---|---|---|
| [#5808](https://github.com/zeroclaw-labs/zeroclaw/issues/5808) | **S1** | 默认 32k context 被 system prompt + tools 首轮击穿 3.3x，导致持续 preemptive trim | in-progress |
| [#6361](https://github.com/zeroclaw-labs/zeroclaw/issues/6361) | **S1** | `context_compression` 丢弃 assistant(tool_calls) 与 tool(result)，OpenAI-兼容 provider（如 MiniMax）多轮工具对话不可用 | 待修复 |
| [#8386](https://github.com/zeroclaw-labs/zeroclaw/issues/8386) | S2 | SQLite 是默认 memory backend 但 quickstart 不要求 embedding 模型，hybrid search 静默降级为 keyword-only | 待修复 |
| [#6891](https://github.com/zeroclaw-labs/zeroclaw/issues/6891) | **S1** | 网关 Scheduled Jobs 编辑界面还是 v0.8.0-beta1 前的版本，保存报 API 422 | 待修复 |
| [#7733](https://github.com/zeroclaw-labs/zeroclaw/issues/7733) | S2 (建议提级) | `mcp_bundles` 解析但运行时从不强制 → per-agent MCP 隔离 silent no-op | **已修复**（#8370 回归测试已合并） |

### 今日批量修复的 provider 兼容性 Bug

vLLM 0.19+ 升级导致 **所有 OpenAI-compat provider** 在 `tools` 为空时仍序列化 `tool_choice: "auto"`，触发 HTTP 400。同一根因在 5 个 provider 上同步推动修复 PR：

- [PR #8476](https://github.com/zeroclaw-labs/zeroclaw/pull/8476) — OpenAI Codex
- [PR #8475](https://github.com/zeroclaw-labs/zeroclaw/pull/8475) — OpenRouter
- [PR #8474](https://github.com/zeroclaw-labs/zeroclaw/pull/8474) — Copilot
- [PR #8473](https://github.com/zeroclaw-labs/zeroclaw/pull/8473) — Azure OpenAI
- [PR #8471](https://github.com/zeroclaw-labs/zeroclaw/pull/8471) — Compatible（涉及 `compatible.rs:1954` 与 `:3020`）

这一批次是今日最值得关注的"工厂模式"修复，体现了回归响应的高效组织。

---

## 六、功能请求与路线图信号

### v0.8.3 候选（已有 PR 推进）

- **In-app upgrade + auto-restart（Web 仪表盘）**：[PR #8173](https://github.com/zeroclaw-labs/zeroclaw/pull/8173) 实现 [RFC #8170](https://github.com/zeroclaw-labs/zeroclaw/issues/8170)，将侧边栏版本标签升级为完整 upgrade affordance。预计随 v0.8.3 发布。
- **Cost: 离线定价目录 + cost/org RPC + 仪表盘周期/组织视图**：[PR #8380](https://github.com/zeroclaw-labs/zeroclaw/pull/8380)，为 air-gapped/自托管场景补齐 [#8233](https://github.com/zeroclaw-labs/zeroclaw/issues/8233) 未覆盖的部分。
- **ACP multiple-choice elicitation**：[PR #8338](https://github.com/zeroclaw-labs/zeroclaw/pull/8338)（XL 规模）。⚠️ 注意：spec 仍是 draft，且 Zed 等客户端未实现。

### v0.9.0 预研（架构级 RFC）

- **[#7232](https://github.com/zeroclaw-labs/zeroclaw/issues/7232)** 结构化可观测性增强（OTel trace correlation + Bridge 重构）
- **[#6850](https://github.com/zeroclaw-labs/zeroclaw/issues/6850)** 解耦 memory lifecycle 策略与存储后端（`MemoryStrategy` trait）
- **[#7759](https://github.com/zeroclaw-labs/zeroclaw/issues/7759)** 解耦 WebSocket 生命周期与 agent turn（断线不取消 in-flight turn）
- **[#7816](https://github.com/zeroclaw-labs/zeroclaw/issues/7816)** 可插拔 skill registry（保留 GitHub 官方为默认 tier）

### 小型增强（可能合入 v0.8.3 patch）

- [PR #8438](https://github.com/zeroclaw-labs/zeroclaw/pull/8438) — Cron `shell_output_format` 原始 stdout 输出
- [PR #8463](https://github.com/zeroclaw-labs/zeroclaw/pull/8463) — 交互式 CLI stdin 行上限 1 MiB
- [PR #8461](https://github.com/zeroclaw-labs/zeroclaw/pull/8461) — SOP filesystem 事件源

---

## 七、用户反馈摘要

### 主要痛点

1. **本地小模型体验差**（[#5287](https://github.com/zeroclaw-labs/zeroclaw/issues/5287)，👍 2 唯一有正反馈的条目）  
   > 用户呼吁 local-first mode：紧凑 prompt、严格 parser、禁止 prompt leakage 泄漏到用户可见输出。

2. **生产部署成本不可见**  
   > [#8412](https://github.com/zeroclaw-labs/zeroclaw/pull/8412) 修复 cost ledger 并发追加问题，反映已有用户在并发场景下发现记录交错。

3. **macOS 桌面用户体验差**（[#7800](https://github.com/zeroclaw-labs/zeroclaw/issues/7800)）  
   > 维护者主动反馈：Code/Chat 帮助和键绑定在 macOS 上误导或不可达。

4. **channel "沉默"语义缺失**（[#8410](https://github.com/zeroclaw-labs/zeroclaw/issues/8410)）  
   > 条件性 channel 任务（如"有新邮件再通知，否则保持静默"）仍会发出可见回复。需要 first-class NO_REPLY outcome（[PR #8405](https://github.com/zeroclaw-labs/zeroclaw/pull/8405) 已在 cron/heartbeat 侧修复）。

5. **Telegram 多消息模式缺失**（[#8445](https://github.com/zeroclaw-labs/zeroclaw/issues/8445)）  
   > 当前会把所有 turn 文本拼接为单条消息，用户希望每个 agent turn 一条独立消息。

### 满意度信号

- [#5287](https://github.com/zeroclaw-labs/zeroclaw/issues/5287) 获得 2 个 👍，是今日唯一被社区明确点赞的需求，说明 local-first mode 在用户心中优先级较高。
- 跨项目的 Micra-io 下游 fork 维护者 [@alexandme](https://github.com/zeroclaw-labs/zeroclaw/issues/6642) 主动 offer 上游，说明生态正在反向反哺上游。

---

## 八、待处理积压与维护者提醒

### 长期未响应需关注

- **[#5287](https://github.com/zeroclaw-labs/zeroclaw/issues/5287)** Local-First Mode — 2026-04-04 创建，已 86 天，仅 2 👍，至今无明确 owner 或 PR 关联。建议分配 maintainer 跟进。
- **[#6361](https://github.com/zeroclaw-labs/zeroclaw/issues/6361)** `context_compression` 对 OpenAI-compat provider 丢消息 — 2026-05-04 创建，56 天，S1 级阻塞且影响 MiniMax 等用户的工具对话，但仍未见修复 PR 推进。
- **[#6891](https://github.com/zeroclaw-labs/zeroclaw/issues/6891)** Scheduled Jobs 编辑 API 422 — 36 天未解决，影响 v0.8.0 用户升级体验。

### Tracker 协调压力

[#7432 v0.9.0 tracker](https://github.com/zeroclaw-labs/zeroclaw/issues/7432) 截至 2026-06-27 共 111 个开放项（10 PR + 101 issue），协调面较大，建议关注是否会分裂出独立子 tracker 降低认知负担。

### 待 Maintainer Review

- [PR #8173](https://github.com/zeroclaw-labs/zeroclaw/pull/8173) — In-app upgrade (L 规模，已标 needs-maintainer-review)
- [PR #8380](https://github.com/zeroclaw-labs/zeroclaw/pull/8380) — Cost: offline pricing (标 needs-author-action)

---

## 总结

**项目健康度评估：良好（B+）**

- ✅ **响应速度**：vLLM 0.19+ 触发的 5 个 provider 回归当日同步出修复 PR，响应链路高效。
- ✅ **架构演进**：v0.9.0 路线图（memory 解耦、可观测性增强、WebSocket 解耦）多个 RFC 并行推进。
- ⚠️ **S1 阻塞项未关闭**：[#5808](https://github.com/zeroclaw-labs/zeroclaw/issues/5808)、[#6361](https://github.com/zeroclaw-labs/zeroclaw/issues/6361) 已 in-progress 较长时间，建议关注 ETA。
- ⚠️ **本地体验**：唯一被点赞的 [#5287](https://github.com/zeroclaw-labs/zeroclaw/issues/5287) 仍无 PR 跟进，可能错过 Ollama/本地用户群窗口期。
- ✅ **CI 加固**：cosign/SLSA/SBOM（[#8058](https://github.com/zeroclaw-labs/zeroclaw/issues/8058)）已落地，deny.toml 清理（[#8059](https://github.com/zeroclaw-labs/zeroclaw/issues/8059)）也在推进，安全姿态稳步提升。

> 数据统计窗口：2026-06-28 ~ 2026-06-29 24 小时。

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

<think>The user wants me to generate a daily project report for PicoClaw based on the GitHub data provided. Let me analyze the data carefully:

**Data Summary:**
- Issues: 1 update in past 24h, 0 new/active, 1 closed
- PRs: 2 updates in past 24h, 1 pending merge, 1 merged/closed
- No new releases

**Issue #2984** - [CLOSED] [stale]
- Title: Add explicit turn completion signal for Pico WebSocket clients
- Author: @Brook-sys
- Created: 2026-06-02, Updated: 2026-06-28
- Comments: 4, 👍: 2
- About adding deterministic signal for WebSocket clients to know when agent finished processing

**PR #2964** - [CLOSED] [stale]
- Title: Feat/image input compression
- Author: @afjcjsbx
- Created: 2026-05-28, Updated: 2026-06-28
- Comments: undefined, 👍: 0
- About configurable inbound image compression for vision pipeline

**PR #3193** - [OPEN]
- Title: Added simplex channel type
- Author: @dim
- Created: 2026-06-27, Updated: 2026-06-28
- Comments: undefined, 👍: 0
- New feature: simplex channel type

Let me structure the report according to the user's requirements. Since there are no releases, I'll skip that section or note it briefly. The activity is relatively low (1 closed issue, 1 closed PR, 1 open PR), which suggests a quiet day or stale cleanup.

Note: The date is 2026-06-29, which is in the future from my knowledge cutoff, but I'll go with the user's framing.

Let me craft a professional, data-driven report in Chinese as requested.</think>

# PicoClaw 项目动态日报

**日期：2026-06-29**
**仓库：[sipeed/picoclaw](https://github.com/sipeed/picoclaw)**

---

## 1. 今日速览

PicoClaw 今日整体活跃度**偏低**，呈现典型的"陈旧工单清理日"特征。过去 24 小时内无新增 Issue 与 PR，所有可见活动均为对长期未响应条目的批量关闭：1 条 Issue 与 1 条 PR 被标记为 `[stale]` 并自动关闭，仅 1 条新功能 PR（#3193）仍处开放待评审状态。项目目前没有新版本发布，社区反馈渠道整体趋静，建议维护者关注开放 PR 与潜在积压风险。

---

## 2. 版本发布

**无新版本发布**。近 24 小时内未见任何 Release 标签或构建产物更新。

---

## 3. 项目进展

今日被关闭的条目（#2984、#2964）均为陈旧（stale）状态被自动清理，**实质性的代码合并进展为零**：

| 编号 | 类型 | 状态 | 实质影响 |
|------|------|------|----------|
| [#2964](https://github.com/sipeed/picoclaw/pull/2964) | PR - 图像输入压缩 | CLOSED (stale) | 未合并，可配置的入站图像压缩方案暂未进入主干 |
| [#2984](https://github.com/sipeed/picoclaw/issues/2984) | Issue - WebSocket 完成信号 | CLOSED (stale) | 该协议改进需求被搁置 |

唯一向前推进的是仍处于开放状态的 PR #3193（详见第 6 节）。

---

## 4. 社区热点

由于今日所有活跃条目都已关闭，**社区讨论热度处于低谷**。回顾最近 24 小时内互动最高的条目：

- 🔥 **[#2984 - Add explicit turn completion signal for Pico WebSocket clients](https://github.com/sipeed/picoclaw/issues/2984)**
  - 评论数：**4** ｜ 👍：2
  - 核心诉求：外部 Pico 协议的 WebSocket 客户端目前仅能通过 `message.create`、`message.update`、`typing.start/stop` 等事件推断 Agent 是否完成处理，缺乏**确定性的回合完成信号（turn completion signal）**。这给自动化流水线、UI 状态机以及断线重连场景带来了不确定性。

虽然该 Issue 因 stale 被关闭，但其代表的是一类**协议层语义明确化**的真实需求，未来大概率会重新被提出。

---

## 5. Bug 与稳定性

今日**未报告任何新的 Bug、崩溃或回归问题**。

需要注意的是，被 stale 关闭的 PR [#2964 - Feat/image input compression](https://github.com/sipeed/picoclaw/pull/2964) 曾尝试解决一个潜在稳定性隐患——入站图像仅受 `max_media_size` 限制，缺少多级压缩策略，容易在大图场景下造成模型 Payload 超限。该方案未被合并，意味着当前主干的视觉链路仍存在过载风险，建议维护者评估是否需要重新拉起或自行实现。

---

## 6. 功能请求与路线图信号

### 待合并的功能 PR

- 🟢 **[#3193 - Added simplex channel type](https://github.com/sipeed/picoclaw/pull/3193)**
  - 作者：@dim ｜ 创建：2026-06-27 ｜ 👍：0
  - 类型：新功能（Non-breaking Feature）
  - 内容：新增 **Simplex 通道类型**，扩展 PicoClaw 的渠道接入能力
  - 评估：该 PR 处于开放状态且作者已声明为非破坏性新增功能，具备合并潜力。建议维护者：
    1. 审查代码质量、测试覆盖与文档完整性
    2. 确认是否与现有 channel 抽象（如 Slack、Telegram 等）的设计一致
    3. 若质量达标，可纳入下一版本

### 历史功能需求（暂被搁置）

- [#2984](https://github.com/sipeed/picoclaw/issues/2984)：WebSocket 显式回合完成信号 —— 协议层增强，2 👍 与 4 条评论表明存在真实用户场景，建议纳入中期路线图。

---

## 7. 用户反馈摘要

由于今日 Issue #2984 被关闭，仅能基于其历史评论提炼代表性反馈：

- **痛点场景**：将 PicoClaw 作为**外部应用嵌入式 Agent** 的开发者（典型场景：聊天客户端、自动化测试、第三方 UI 集成），需要可靠的"Agent 已结束本轮思考"信号以驱动前端状态切换或下一步业务流程。
- **当前不满**：依赖 `typing.stop` 推断结束存在**竞态条件**——同一连接上的连续消息可能造成事件交错，无法稳定识别单轮边界。
- **隐含期待**：社区希望 PicoClaw 在协议层面提供与 OpenAI/Anthropic 等成熟协议类似的 `message.completed` 或 `turn.end` 类显式事件。

该反馈反映出 PicoClaw 正从"命令行工具"向"可嵌入协议运行时"演进，**协议稳定性是其生态扩展的关键瓶颈**。

---

## 8. 待处理积压

| 编号 | 类型 | 标题 | 创建时间 | 风险提示 |
|------|------|------|----------|----------|
| [#3193](https://github.com/sipeed/picoclaw/pull/3193) | PR (OPEN) | Added simplex channel type | 2026-06-27 | 开放 2 天尚未收到任何评审，0 👍；若长期无响应可能被自动 stale 关闭 |
| [#2964](https://github.com/sipeed/picoclaw/pull/2964) | PR (CLOSED/stale) | Feat/image input compression | 2026-05-28 | 视觉链路过载风险未解，建议作者重新推送或维护者手动接手 |
| [#2984](https://github.com/sipeed/picoclaw/issues/2984) | Issue (CLOSED/stale) | Add explicit turn completion signal | 2026-06-02 | 高价值协议需求，需主动 reopen 或转化为 RFC |

**给维护者的建议：**
1. 对 PR #3193 主动发起评审，避免新功能因 stale 机制流失贡献者积极性；
2. 评估图像压缩与 WebSocket 完成信号两条历史需求，安排 reopen 或在路线图中正式记录；
3. 适当调整 stale 判定阈值（如对带 👍 或 PR 标签的条目豁免），防止优质贡献被误关。

---

## 📊 项目健康度指标（今日快照）

| 指标 | 数值 | 趋势判断 |
|------|------|----------|
| 24h 新增 Issue | 0 | ⚠️ 低活跃 |
| 24h 新增 PR | 0 | ⚠️ 低活跃 |
| 24h 关闭 Issue | 1 (stale) | 🟡 非真实解决 |
| 24h 关闭 PR | 1 (stale) | 🟡 非真实合并 |
| 待合并 PR | 1 | 🟡 需关注 |
| 新版本发布 | 0 | 🟢 稳定（无故障） |
| 社区反应（👍） | 2 | ⚠️ 偏低 |

**总体评估**：项目主干稳定但社区脉搏偏弱，今日主要是 stale 清理而非实质性推进。建议维护者主动激活开放 PR 并回应积压需求，以维持贡献者信心。

---

*本报告基于 2026-06-29 GitHub 公开数据自动生成。*

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

<think>Let me analyze the GitHub data for NanoClaw and generate a structured daily report for 2026-06-29.

Key observations:
1. No issues updated in past 24 hours
2. 6 PRs updated - 5 open, 1 closed
3. No new releases
4. The closed PR (#2879) was actually a fix PR that was closed, but #2880 seems to be a superseding version of the same fix
5. Notable patterns:
   - #2879 closed, #2880 opened - both fix the same issue #2828 (symlink security issue)
   - Security focus with #2880 (symlink containment)
   - Discord adapter fix #2881
   - Coolify deployment PR #2875
   - Codex auth fix #2878
   - Telegram rich rendering #2877

Let me think about the activity level:
- 6 PRs in 24h is reasonably active
- No issues is unusual but not necessarily concerning
- 1 PR closed (which was actually replaced by #2880 covering more)
- 5 PRs pending review

The PR data shows no comments and no reactions explicitly (the field shows undefined). So I can't really report on "most discussed" - I should be honest about this.

Let me structure the report carefully and honestly based on the data provided.</think>

# NanoClaw 项目动态日报
**日期：2026-06-29**

---

## 1. 今日速览

NanoClaw 今日呈现出 **中等活跃、以维护性修复为主** 的状态。过去 24 小时内无 Issue 变动，但 Pull Request 端有 6 条更新，包含 5 条待合并和 1 条已关闭。核心看点是围绕 **Issue #2828（CWE-59 symlink 逃逸漏洞）** 的安全加固——维护者 @johnmathews 先提交了 #2879（修复 agent-to-agent 转发路径），随后被 #2880 取代，后者覆盖更全面的写入路径修复，体现了社区对安全问题的快速响应。无新版本发布，当前主线仍处于 PR 累积、待评审阶段。

---

## 2. 版本发布

⚠️ **今日无新版本发布。** 建议关注以下合并候选 PR 一旦进入主干是否触发版本号更新。

---

## 3. 项目进展

今日唯一关闭的 PR 为 **#2879**，由 @johnmathews 提交：

- **#2879** — `fix(agent-to-agent): containment-check target inbox in forwardAttachedFiles`  
  [链接](https://github.com/nanocoai/nanoclaw/pull/2879)  
  状态：**已关闭**（同日被 #2880 取代覆盖范围更大的修复）

**实质性进展评估：** 从代码层面看，#2879 的关闭并非"撤销"，而是**被迭代版本取代**。#2880 继承了其防御思路（lstat → realpath → isPathInside），并扩展至更多写入路径。这种"先窄修后广修"的处理模式说明项目在安全问题上**采取了纵深防御策略**，整体方向是积极向前的，但短期内 #2828 仍未完全关闭。

---

## 4. 社区热点

⚠️ **数据说明：** 当前提供的 PR 数据中 `comments` 和 `reactions` 字段均为 undefined，无法精确统计讨论热度。以下根据 PR 创建/更新时间排序及修复的议题重要性推断热点：

| 热度推断 | PR | 主题 | 链接 |
|---|---|---|---|
| 🔥 高（CVE 级安全修复） | #2880 | symlink 逃逸修复 | [PR](https://github.com/nanocoai/nanoclaw/pull/2880) |
| 🔥 高（频道集成增强） | #2877 | Telegram 原生富文本渲染 | [PR](https://github.com/nanocoai/nanoclaw/pull/2877) |
| 🔥 中（认证流程稳定性） | #2878 | Codex 过期 secret 重连 | [PR](https://github.com/nanocoai/nanoclaw/pull/2878) |
| 🔥 中（核心适配器 Bug） | #2881 | Discord `custom_id` 解析 | [PR](https://github.com/nanocoai/nanoclaw/pull/2881) |
| ⚪ 低（部署文档） | #2875 | Coolify 部署指南 | [PR](https://github.com/nanocoai/nanoclaw/pull/2875) |

**诉求分析：** 社区当前关注点集中在 **三个方向**：(a) 容器化环境下的安全边界，(b) 多渠道（Discord/Telegram）适配器的交互稳定性，(c) 认证流程的健壮性。

---

## 5. Bug 与稳定性

按严重程度排序：

### 🔴 严重（安全漏洞）
- **#2828 / #2880** — 容器内 symlink 逃逸导致主机文件任意写入  
  [Issue](https://github.com/nanocoai/nanoclaw/issues/2828) · [Fix PR #2880](https://github.com/nanocoai/nanoclaw/pull/2880)  
  严重度：**高危 (CWE-59)**  
  已有 fix PR：**是（#2880 待合并）**  
  说明：受感染的 agent 可在自身 session 目录预置 symlink，诱导宿主机写入越界。修复对入站文件写入与 A2A 转发两条路径均做 containment 检查。

### 🟡 中等（功能异常）
- **#2881** — Discord 按钮 `custom_id` 未解码分隔符导致 `resolveSelectedOption` 失败  
  [PR](https://github.com/nanocoai/nanoclaw/pull/2881)  
  严重度：中（影响所有使用 Discord 按钮的交互）  
  已有 fix PR：**是（#2881 待合并）**

- **#2878** — Codex 凭据过期时 `runCodexAuthStep()` 误判成功  
  [PR](https://github.com/nanocoai/nanoclaw/pull/2878)  
  严重度：中（导致 agent 在会话中途报 `Your access token could not be refreshed`）  
  已有 fix PR：**是（#2878 待合并）**

### 🟢 轻微
- **#2879**（已关闭，被 #2880 吸收）

---

## 6. 功能请求与路线图信号

| 提案 | PR | 路线图可能性判断 |
|---|---|---|
| Telegram Bot API 10.1 `sendRichMessage` 原生富文本 | [PR #2877](https://github.com/nanocoai/nanoclaw/pull/2877) | ⭐⭐⭐⭐ **高** —— 与 Discord 适配器修复 #2881 同方向，属于多渠道渲染能力扩展，符合 NanoClaw 多适配器架构 |
| Coolify 一键部署 | [PR #2875](https://github.com/nanocoai/nanoclaw/pull/2875) | ⭐⭐⭐ 中 —— 属 Operational skill 类型，符合仓库贡献指南，社区反响待观察 |

**整体信号：** NanoClaw 的短期路线图偏向 **(a) 安全加固** + **(b) 渠道能力补齐** + **(c) 部署易用性**，并未见新功能领域（如多模态、Agent 编排）的探索性 PR。

---

## 7. 用户反馈摘要

⚠️ **数据限制：** 今日 Issues 列表为空，且 PR 评论字段缺失。以下反馈均来自 PR 描述中维护者/贡献者陈述的痛点，不构成终端用户声音：

- **可观察的开发者痛点（间接证据）：**
  - 部署场景：#2875 反映出用户对 **零配置 SaaS 化部署（Coolify）** 的需求，说明当前文档/Docker 化对自托管用户不够友好。
  - 多渠道体验：#2877 + #2881 暗示 Discord/Telegram 用户曾遇到按钮无响应、富文本缺失等体验问题。
  - 认证可靠性：#2878 描述 `Your access token could not be refreshed` 错误，反映终端用户曾**在会话中途遭遇 agent 中断**。
- **满意度信号：** 暂无（无 Issue 评论数据）。

---

## 8. 待处理积压

⚠️ **风险提醒：** 今日 **5 条 PR 均待合并且 0 条评论、0 反应**，处于"提交即静默"状态，维护者介入有限。

| 待关注项 | 链接 | 风险 |
|---|---|---|
| #2880 安全修复（CWE-59） | [PR](https://github.com/nanocoai/nanoclaw/pull/2880) | 🔴 **建议优先合并** —— 涉及 CVE 级漏洞，且 #2879 已先关闭等待被取代 |
| #2881 Discord 适配器 Bug | [PR](https://github.com/nanocoai/nanoclaw/pull/2881) | 🟡 影响生产环境按钮交互 |
| #2878 Codex 凭据刷新 | [PR](https://github.com/nanocoai/nanoclaw/pull/2878) | 🟡 影响 Codex agent 长会话可用性 |
| #2877 Telegram 富文本 | [PR](https://github.com/nanocoai/nanoclaw/pull/2877) | ⚪ 新功能，可稍后评估 |
| #2875 Coolify 部署 | [PR](https://github.com/nanocoai/nanoclaw/pull/2875) | ⚪ 文档/工具类，社区需求待验证 |

**给维护者的建议：**
1. **优先评审 #2880**，因其为安全漏洞修复，#2828 至今未关闭。
2. **集中处理 #2878/#2881**（都是直接导致用户可见错误的修复），合并后建议发版。
3. **对 #2875 标记 milestone 或标签**，以便区分"功能 PR"与"修复 PR"。

---

### 📊 项目健康度评分（基于今日数据）

| 维度 | 评分 | 说明 |
|---|---|---|
| 活跃度 | ⭐⭐⭐☆☆ | 有 PR 提交但无 Issue 互动 |
| 安全响应 | ⭐⭐⭐⭐☆ | CVE 漏洞有跟进，但尚未合并 |
| 社区参与 | ⭐⭐☆☆☆ | 0 评论、0 反应，互动信号弱 |
| 发版节奏 | ⭐⭐☆☆☆ | 24h 内无版本发布 |
| 代码质量信号 | ⭐⭐⭐⭐☆ | fix PR 描述规范、引用 CVE 编号 |

**总评：** 项目处于"维护期"而非"扩张期"，今日最佳实践是尽快合并 #2880 并发布 patch 版本。

---

*本日报基于 2026-06-28 至 2026-06-29 的 GitHub 数据自动生成。*

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

<think>The user wants me to generate a daily report for the IronClaw project based on GitHub data from 2026-06-29. Let me analyze the data carefully and structure the report according to the requested sections.

Let me review the data:

**Overall metrics:**
- 3 Issues updated (2 active, 1 closed)
- 41 PRs updated (24 open, 17 closed/merged)
- 0 new releases

**Issues:**
1. #5385 [OPEN] Add Capability Policy - new feature request for fine-grained user configuration (owner/admin/member roles)
2. #5236 [CLOSED] Stop committing WebUI v2 dist bundle artifacts - cleanup issue, now closed
3. #4108 [OPEN] Nightly E2E failed - May 27th issue that's still open, CI failure

**PRs - Notable closed/merged:**
- #5377 [CLOSED] feat(reborn): add /pair Slack slash command - now closed (could be superseded or closed)
- #5393 [CLOSED] test: validate /benchmark build - throwaway, validated
- #5386 [CLOSED] docs(reborn-itest): Slice 9 — descope embeddings fake - STOP verdict (seam unreachable)
- #5387 [CLOSED] test(reborn): slice 4 — URL-keyed HTTP matcher
- #5388 [CLOSED] [codex] fix reborn google oauth decode and preview host login

**PRs - Notable open:**
- #5392 [OPEN] Reborn integration-test framework slices 3–9
- #5338 [OPEN] fix(reborn): surface real failure detail
- #5362 [OPEN] Harden Slack pairing activation flows
- #5306 [OPEN] fix(reborn): ask-each-time approval resume loop
- #5354 [OPEN] Add Reborn WebUI v2 live QA canary
- #5395 [OPEN] [codex] Fix Web Access Exa content fetch
- #5394 [OPEN] capability policy e2e (addresses #5385)
- #5252 [OPEN] fix(reborn): persist Slack host conversation bindings
- #5149 [OPEN] feat(reborn): Context management — progressive tool disclosure
- #5311 [OPEN] chore: release (0.24.0 -> 0.29.1)
- Multiple dependabot bumps: #5391, #4002, #5114, #4032, #4498

Let me structure this thoughtfully:

1. **今日速览** - High PR activity (41 updates), with 17 closed/merged showing good progress. Capability policy work emerging (Issue #5385 + PR #5394). Several integration test framework slice PRs closed. Active dependency maintenance via dependabot.

2. **版本发布** - No releases today (but PR #5311 is a release chore pending)

3. **项目进展** - Notable closed PRs and their impact

4. **社区热点** - Top discussions

5. **Bug 与稳定性** - #4108 nightly E2E still open since May 27, fixes in PRs (#5338 surface real failure, #5306 approval loop)

6. **功能请求与路线图信号** - #5385 capability policy with PR #5394 in progress

7. **用户反馈摘要** - Issues have 0 comments, so limited direct feedback, but the themes show up

8. **待处理积压** - #4108 from May 27 still open, several long-standing PRs

Let me write this in Chinese as requested, with professional, data-driven language.</think>

# IronClaw 项目日报 · 2026-06-29

> 数据范围：近 24 小时 GitHub 事件 · 仓库：[nearai/ironclaw](https://github.com/nearai/ironclaw)

---

## 一、今日速览

过去 24 小时 IronClaw 仓库呈现出**高 PR 流转、低 Issue 节奏**的典型工程收尾型状态：41 条 PR 更新（24 OPEN / 17 已 CLOSED）远超 3 条 Issue 更新，重点工作集中在 **Reborn 集成测试框架**、**Slack 配对流程加固**与 **Capability Policy（权限策略）** 三条主线上。值得关注的是，一条新开的「细粒度用户权限」Feature Request（#5385）已经配套出现首个 E2E PR（#5394），显示该方向已进入落地阶段。整体活跃度高，**主线闭环进展明显**，但有 1 条 5 月底开启的 CI 失败 Issue（#4108）仍未关闭，存在积压信号。

## 二、版本发布

⚠ **今日无正式 Release 合入**。

但仓库中存在一条待合入的发版机器人 PR：
- [#5311 chore: release](https://github.com/nearai/ironclaw/pull/5311) — 由 `ironclaw-ci[bot]` 提交，将 5 个 crate 同时升版：
  - `ironclaw_common`: 0.4.2 → 0.5.0 ⚠ **包含破坏性 API 变更**
  - `ironclaw_safety`: 0.2.2 → 0.2.3 ✓ 兼容
  - `ironclaw_skills`: 0.3.0 → 0.4.0 ⚠ **包含破坏性 API 变更**
  - `ironclaw`: 0.24.0 → 0.29.1
  - `ironclaw_skill_learning`: 0.1.0 → 0.1.1

  > 📌 若合入，下游消费者需重点关注 `ironclaw_common` 与 `ironclaw_skills` 的迁移说明。

## 三、项目进展

### ✅ 已关闭/合并的重要 PR（节选）

| PR | 标题 | 推进意义 |
|---|---|---|
| [#5388](https://github.com/nearai/ironclaw/pull/5388) | [codex] fix reborn google oauth decode and preview host login | 修复 Reborn WebUI Google SSO 在 `jsonwebtoken 10.x` 升级后的 `RS256 id_token` 解码回归，并将 `/auth/login/{provider}` 规范化为 `IRONCLAW_REBORN_WEBUI_BASE_URL`，解决 Railway Preview/自定义域下的回调丢失误定向问题。 |
| [#5377](https://github.com/nearai/ironclaw/pull/5377) | feat(reborn): add /pair Slack slash command | 新增 Slack `/pair` 斜杠命令，以**临时、不入日志**方式临时直发新配对码，并引导失效码 redeem 指向 `/pair`。⚠ 当前状态为 CLOSED，需关注是否被 [#5362](https://github.com/nearai/ironclaw/pull/5362) 的硬化版替代。 |
| [#5387](https://github.com/nearai/ironclaw/pull/5387) | slice 4 — URL-keyed HTTP matcher + egress assertion API | 集成测试框架切片 4 合入，补齐「多步工具 HTTP 流」的 URL/method 脚本匹配层。 |
| [#5386](https://github.com/nearai/ironclaw/pull/5386) | Slice 9 — descope embeddings fake (STOP verdict) | 经实测确认**当前没有可注入的 Embedding 抽象接缝**，决定把 Slice 9 退出范围，避免无效投入。 |
| [#5393](https://github.com/nearai/ironclaw/pull/5393) | test: validate `/benchmark` build（throwaway）| 一次性 PR，确认 `/benchmark` 在 toml_parser 锁更新后对当前 main 可构建。 |

### 🟢 进行中的关键方向

- **集成测试框架**：[#5392](https://github.com/nearai/ironclaw/pull/5392) 将切片 3–9 合并为单分支，覆盖 LibSql 矩阵、egress/HTTP matcher、inert 进程端口、MCP/OAuth/refresh，是该方向最重磅的合PR。
- **Reborn 错误可观测性**：[#5338](https://github.com/nearai/ironclaw/pull/5338) 端到端透出工具失败真实原因，避免对用户只显示「driver protocol error」。
- **能力审批循环**：[#5306](https://github.com/nearai/ironclaw/pull/5306) 修复 ask-each-time 审批恢复循环，并保留 `disabled` 作为最强单工具覆写。
- **上下文管理**：[#5149](https://github.com/nearai/ironclaw/pull/5149) 引入**渐进式工具披露**（默认关闭、按 flag 启用）。从生产数据看，将原本 ~25.8k token/turn 的工具 schema 下发削薄，目标是解决 NEAR AI 120s 请求超时问题。

## 四、社区热点

由于本次时间窗内 Issues/PR 评论数普遍为 0 或未披露，**热度主要通过 PR 体量与提交者集中度体现**：

- 🔥 **#5392 集成测试框架 slices 3–9（XL / medium risk）** — 一次性合并 7 个切片，是本日最具杠杆的改动。
- 🔥 **#5385 Add Capability Policy（Feature Request）** — 即时获得 PR #5394 跟进，议题闭环速度**极快**（Issue 开 → 首个实现 PR，仅 1 天）。
- 🔥 **#5149 渐进式工具披露** — 距生产痛点最近（NEAR AI 超时），是当前最受关注但合入门槛较高的 PR。

## 五、Bug 与稳定性

按严重度排列：

| 严重度 | Issue/PR | 状态 | 备注 |
|---|---|---|---|
| 🟠 中 | [#4108 Nightly E2E failed](https://github.com/nearai/ironclaw/issues/4108) | **仍 OPEN**，始于 2026-05-27 | 距今 **33 天**未关闭，Full E2E (features) 任务失败（run 28311379145，commit `6a3b10fa`）。已有相关修复在 [#5392](https://github.com/nearai/ironclaw/pull/5392) 集成测试强化中体现，但 Issue 未关闭。 |
| 🟡 中 | [#5338](https://github.com/nearai/ironclaw/pull/5338) — 工具失败时只展示「invalid_input」 | OPEN，fix 已就绪 | 修复后将端到端暴露真实失败原因。 |
| 🟡 中 | [#5306](https://github.com/nearai/ironclaw/pull/5306) — ask-each-time 审批恢复循环 | OPEN，fix 已就绪 | 关联一次性 capability 租约语义与 `disabled` 强优先。 |
| 🟢 低 | [#5377](https://github.com/nearai/ironclaw/pull/5377) — Slack 失效配对码错误指向 | CLOSED | 在 [#5362](https://github.com/nearai/ironclaw/pull/5362) 中硬化并保留语义。 |
| 🟢 低 | [#5388](https://github.com/nearai/ironclaw/pull/5388) — Google SSO 解码回归 | CLOSED | jsonwebtoken 10.x 已修复。 |

> ⚠ **#4108 是当前稳定性层面最大风险点**，建议维护者立即 triage。

## 六、功能请求与路线图信号

### 🆕 新增请求

- **[#5385 Add Capability Policy](https://github.com/nearai/ironclaw/issues/5385)**（@zetyquickly，6/27 开）
  - 提出 **三类用户角色**：`owner`（环境变量唯一确定）/ `admin` / `member`，并明确 `owner` 通过 `IRONCLAW_REBORN_WEBUI_TOKEN` 等环境变量注入。
  - **落地判断**：⭐⭐⭐⭐⭐ 高概率进路线图 — 已紧跟 PR [#5394 capability policy e2e](https://github.com/nearai/ironclaw/pull/5394)（同日提交、同样作者），说明这是一个**议题与实现一体推进**的设计，对应即将到来的 minor 版本。

### 🧭 后续候选信号

- **Slack 配对硬化** ([#5362](https://github.com/nearai/ironclaw/pull/5362))：硬化 `/pair` 文案、隔离配对续作、保留本地-only code 兑换，明显为即将到来的「Slack v2 个人绑定」做准备。
- **Web Access Exa** ([#5395](https://github.com/nearai/ironclaw/pull/5395))：将 `get_content` 直链 fetch 路由到 `web_fetch_exa`，是搜索/抓取能力演进的信号。
- **Reborn WebUI v2 Live QA Canary** ([#5354](https://github.com/nearai/ironclaw/pull/5354))：把 canary 链路接入 Playwright + 真实 LLM/工具，是为发布前真实链路把关的关键基础设施。

## 七、用户反馈摘要

本时间窗内 Issues 评论均为 0，缺乏可量化的直接用户声音。结合 PR 摘要可提炼的**间接诉求信号**如下：

1. **可观测性缺口** — `driver protocol error` 这种粗糙提示让真实失败原因丢失在多层之间（[#5338](https://github.com/nearai/ironclaw/pull/5338)），说明**生产用户调试体验**是当前痛点。
2. **NEAR AI 超时反复触发**（[#5149](https://github.com/nearai/ironclaw/pull/5149)）— 25.8k token × 4次/turn 把上游顶到 120s 超时，重试耗尽后无回复。**这是当前最现实的端到端性能瓶颈**。
3. **Slack 个人绑定恢复路径混乱**（[#5377](https://github.com/nearai/ironclaw/pull/5377) / [#5362](https://github.com/nearai/ironclaw/pull/5362)）— 失效码不应当让聊天恢复或打到模型，反映出**beta 期用户配对体验不稳**。
4. **Google SSO 在自定义域名 Preview 部署下失定向**（[#5388](https://github.com/nearai/ironclaw/pull/5388)）— 反映**多部署形态**（Railway / 自定义域）下的 canonical URL 处理需要被一致强化。

## 八、待处理积压 ⚠

| 项 | 类型 | 创建时间 | 已开天数 | 备注 |
|---|---|---|---|---|
| [#4108](https://github.com/nearai/ironclaw/issues/4108) | Issue (CI failure) | 2026-05-27 | **33 天** | Nightly E2E 失败，无 owner 显式接管，PR 进展未回填到此 Issue。 |
| [#4002](https://github.com/nearai/ironclaw/pull/4002) | PR (依赖) | 2026-05-24 | **36 天** | dependabot 一次性合 16 个 Actions 升级，含 `actions/checkout 4.3.1 → 7.0.0`，建议优先评估。 |
| [#4032](https://github.com/nearai/ironclaw/pull/4032) | PR (依赖) | 2026-05-25 | **35 天** | wasm group 升级（wit-component / wit-parser）。 |
| [#4498](https://github.com/nearai/ironclaw/pull/4498) | PR (依赖) | 2026-06-05 | **24 天** | `serde_yml 0.0.12 → 0.0.13` 序列化组小升级。 |
| [#5252](https://github.com/nearai/ironclaw/pull/5252) | PR (功能) | 2026-06-25 | **4 天** | Slack host conversation bindings 持久化，尚未合入主线。 |

> 🛎 **提醒维护者**：#4108 已超 30 天未关闭且无明确 owner；多张 dependabot PR（#4002、#4032、#4498）排队等待批量合入，存在「积压越久 → 冲突风险越大」的隐患。

---

### 📊 健康度雷达（定性）

| 维度 | 评分 | 说明 |
|---|---|---|
| 提交活跃度 | ⭐⭐⭐⭐⭐ | 41 条 PR 更新，今日仍有 17 条闭环 |
| 主线闭环速度 | ⭐⭐⭐⭐ | 关键修复（#5388 / #5387 / #5386）当日即关 |
| 需求-实现链路 | ⭐⭐⭐⭐⭐ | #5385 → #5394 一日闭环 |
| 长期积压 | ⭐⭐ | #4108 33 天 + 多张长龄 dependabot PR |
| 版本节奏 | ⭐⭐⭐ | 今日无 release，#5311 发版待评审 |

*— 完 —*

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

<think>
The user wants me to generate a daily report for the LobsterAI project based on GitHub data. Let me analyze the data carefully and create a structured report.

Key observations from the data:
- Date: 2026-06-29
- 5 Issues updates: 1 new/active, 4 closed
- 6 PR updates: 2 pending, 4 merged/closed
- No new releases
- Most issues/PRs are marked as "stale" - this is a significant pattern
- The closed issues (#1443, #1437, #1439, #1442) all have creation date of 2026-04-03 and were last updated 2026-06-28, marked as stale - they're being closed due to staleness
- Issue #2216 is new and active - about Memory Search provider lock-in
- PR #2217 is new and closed (not merged) - about openclaw plugin approvals
- Open PRs #1488 and #1494 are stale but still open

Let me think about the structure:

1. **今日速览** - 3-5 sentences summarizing overall status
2. **版本发布** - None, skip
3. **项目进展** - Closed/merged PRs
4. **社区热点** - Most discussed issues/PRs
5. **Bug 与稳定性** - Bug reports
6. **功能请求与路线图信号** - Feature requests
7. **用户反馈摘要** - User feedback
8. **待处理积压** - Backlog

Let me draft each section carefully.

For the daily overview, the project shows moderate activity. Notable patterns:
- 4 stale issues were auto-closed (these are old issues from April)
- 1 new substantive issue (#2216) about Memory Search provider
- 1 new PR (#2217) about openclaw that was closed without merging
- 2 open PRs (#1488, #1494) are still stale and pending

For Bug and stability:
- #2216 - Memory Search provider lock and DB lock (EBUSY) - this is a real bug
- The closed stale issues include some bug reports (#1437 about scheduled task UI, #1439 about skills still callable after disabled)

For feature requests:
- #1443 - support new openclaw version
- Skills related features in PRs #1440, #1441, #1445, #1494
- Scheduled task UI upgrade #1488

For backlog:
- 2 open PRs marked stale
- The closed issues due to staleness suggest maintainer responsiveness concerns

Let me write the report in Chinese as requested.
</think>
# LobsterAI 项目日报
**日期：2026-06-29**
**仓库：[netease-youdao/LobsterAI](https://github.com/netease-youdao/LobsterAI)**

---

## 1. 今日速览

LobsterAI 今日整体活跃度偏低，处于"清理存量 + 零星新问题"状态。过去 24 小时无新版本发布，Issue 与 PR 的更新以**自动关闭长期不活跃（stale）的旧条目**为主（共 4 条 Issue + 3 条 PR 被打 stale 标记关闭），仅有 1 条实质性新 Issue（#2216）和 1 条新 PR（#2217）出现，且新 PR 在当天即被关闭、未合并。社区侧缺乏活跃的评审对话（多数 PR 评论数为 0），反映出近期维护节奏放缓，**项目健康度需要关注**。

---

## 2. 版本发布

**无新版本发布。** 当前公开可见的最新版本仍为 Issue #2216 中提及的 **2026.6.1**。

---

## 3. 项目进展

今日无新合并的 PR。关闭的 4 条 PR 均因长期未响应被自动标记为 stale 关闭，未实际进入代码库：

| PR | 标题 | 状态 | 说明 |
|---|---|---|---|
| [#2217](https://github.com/netease-youdao/LobsterAI/pull/2217) | fix(openclaw): route plugin approvals through permissions | 新开 + 当日关闭 | 由 `@btc69m979y-dotcom` 提交，尝试将 OpenClaw 插件审批事件接入现有 Cowork 权限流，提取审批解析/决策逻辑，并补充了 adapter 测试。但当日被关闭，可能与主分支策略或评审未跟上有关。 |
| [#1440](https://github.com/netease-youdao/LobsterAI/pull/1440) | feat(cowork): 将已选技能标签移至输入框内顶部展示 | Stale 关闭 | 提案改进 Cowork 技能标签视觉层级，未推进。 |
| [#1441](https://github.com/netease-youdao/LobsterAI/pull/1441) | feat(artifacts): add extensible preview pipeline for HTML, React and Mermaid | Stale 关闭 | 这是 #1011 解决冲突后的再投递版本，声称修复了 10 个冲突文件和 5 个运行时 bug，但仍未合并即被关闭。 |
| [#1445](https://github.com/netease-youdao/LobsterAI/pull/1445) | fix(skills): 修复技能重复导入无校验及 zip 导入目录名异常的问题 | Stale 关闭 | 解决技能重复注入 system prompt 的稳定性问题，未合并。 |

**项目整体推进评估：今日净进展为 0。** 多个对体验有实质提升的 PR（含可扩展 Artifacts 预览管道、技能重复校验、定时任务 UI 升级）持续停留在评审阶段，需要维护者主动跟进。

---

## 4. 社区热点

今日评论/互动最多的条目仍为昨日（2026-06-28）更新的 4 条已关闭 Issue，但已无新增互动。

| 条目 | 评论 | 概要 |
|---|---|---|
| [#1443](https://github.com/netease-youdao/LobsterAI/issues/1443) | 3 | 询问 OpenClaw v2026.3.24 适配计划，因存在 breaking change 导致本地不可用。 |
| [#1437](https://github.com/netease-youdao/LobsterAI/issues/1437) | 2 | 定时任务创建时选择"不重复"且清空日历后，点击"创建任务"无响应。 |
| [#1439](https://github.com/netease-youdao/LobsterAI/issues/1439) | 2 | 技能已停用后，对话中仍可被关键字调用。 |
| [#1442](https://github.com/netease-youdao/LobsterAI/issues/1442) | 2 | Agent 对话后已选技能不再展示，并质疑技能选择语义。 |

**诉求分析：** 这 4 条 Issue 集中在 **Cowork 技能管理**与**定时任务 UI**两条产品线上，反映出该模块存在一组体验不一致的连锁问题。维护者在 stale 关闭前并未给出官方回应，可能影响社区贡献者信心。

---

## 5. Bug 与稳定性

按严重程度排列：

### 🔴 P0 — 核心功能不可用
- **[#2216](https://github.com/netease-youdao/LobsterAI/issues/2216) — Memory Search 无法切换 embedding provider，索引重建被 DB 锁阻塞 (EBUSY)**（新开，OPEN）
  - 环境：LobsterAI 2026.6.1 / Windows 11 (26200) / Node.js v24.11.1
  - 现象 1：UI 中 Memory Search 的 Provider 被锁死为 `openai`，用户无法在设置中切换为 `local` 或其他 provider；OpenAI 配额耗尽（HTTP 429）时整个记忆搜索功能瘫痪。
  - 现象 2：切换 provider 或重建索引时遭遇 `EBUSY` 资源锁，疑似 SQLite/向量库在 Windows 上的文件锁未释放。
  - 影响面：所有依赖长期记忆的 Agent 场景，属于核心能力降级。
  - **尚无对应 fix PR。**

### 🟠 P1 — 体验/状态一致性
- **[#1439](https://github.com/netease-youdao/LobsterAI/issues/1439) — 技能停用后仍可调用**（stale 关闭，无 fix）
  - 风险：实际影响模型路由与权限控制，关闭技能无法生效相当于权限绕过。
- **[#1445](https://github.com/netease-youdao/LobsterAI/pull/1445) — 技能重复导入 + 目录名随机串**（PR 已 stale 关闭，问题未修）
  - 风险：重复技能同时注入 system prompt，影响大模型路由稳定性，**这是被关闭 PR 中最值得抢救的修复**。
- **[#1437](https://github.com/netease-youdao/LobsterAI/issues/1437) — 定时任务创建按钮无响应**（stale 关闭，无 fix）

### 🟡 P2 — UI 表现
- **[#1442](https://github.com/netease-youdao/LobsterAI/issues/1442) — Agent 对话后已选技能不展示**（stale 关闭，无 fix）

---

## 6. 功能请求与路线图信号

| 需求 | 提出方 | 关联 PR | 落地概率评估 |
|---|---|---|---|
| **OpenClaw 新版本适配** | Issue [#1443](https://github.com/netease-youdao/LobsterAI/issues/1443) | 无对应 PR，仅今日新 PR [#2217](https://github.com/netease-youdao/LobsterAI/pull/2217) 与 OpenClaw 集成相关 | **中** — 用户已在本地被 breaking change 阻断，但官方未明确表态。 |
| **可扩展的 Artifacts 预览管道（HTML / React / Mermaid）** | Issue 间接需求 | [#1441](https://github.com/netease-youdao/LobsterAI/pull/1441) | **中** — 已存在一个高完成度的 conflict-resolved 版本，合并成本可控。 |
| **定时任务模块 UI 全面升级（卡片网格 + 搜索 + 历史分组）** | 隐含于 #1437 | [#1488](https://github.com/netease-youdao/LobsterAI/pull/1488)（仍 OPEN，stale） | **中高** — 改动大但与现有技能/MCP 页面风格一致，社区有需求。 |
| **Cowork 技能选择按会话独立管理** | 隐含于 #1442 的设计疑问 | [#1494](https://github.com/netease-youdao/LobsterAI/pull/1494)（仍 OPEN，stale） | **高** — 设计模式与现有 draftPrompts/draftAttachments 一致，迁移路径清晰。 |
| **Memory Search 支持 local embedding + 解锁 provider 切换** | Issue [#2216](https://github.com/netease-youdao/LobsterAI/issues/2216) | 无 | **高** — 当 OpenAI 配额成为可用性瓶颈时，本地化是必选项。 |

**路线图判断：** 当前仓库有 ≥ 2 条处于 stale 但具备合并条件的 PR（#1488、#1494），且均与社区实际痛点对齐，建议作为下一版本候选优先评审。

---

## 7. 用户反馈摘要

- **痛点 1：OpenClaw 版本耦合。** 用户（[#1443](https://github.com/netease-youdao/LobsterAI/issues/1443)）升级上游依赖后本地完全不可用，且缺乏官方迁移说明，反映出**对外部依赖的版本兼容与沟通机制不足**。
- **痛点 2：技能生命周期管理混乱。** 同一用户（`@devilszy`）连续开了 #1439（停用不生效）和 #1442（选择后不展示），并主动质疑"agent 选择技能的作用是什么？"——这指向**技能选择的语义设计在用户侧不够清晰**，文档与 UI 都需要补强。
- **痛点 3：定时任务可用性问题。** 至少两位用户（#1437、PR #1488）报告了任务创建/管理流程的反直觉行为，表明**该模块尚未达到日常可用水平**。
- **痛点 4：供应商锁定风险。** #2216 揭示了将记忆搜索完全绑定 OpenAI 后的可用性风险，**用户对本地化、可替换 provider 的诉求强烈**。
- **整体满意度信号：** 4 条被 stale 关闭的 Issue 中，官方**均未在关闭前留下任何回应**。这通常被社区解读为"维护者缺席"，建议在 stale 关闭时附上统一模板（如"暂不维护/请重开并补充信息/已修复于某版本"），以维持贡献者信任。

---

## 8. 待处理积压

维护者建议重点关注以下长期未推进的条目，避免形成"开口即烂尾"的负面循环：

| 类型 | 编号 | 标题 | 创建时间 | 状态 |
|---|---|---|---|---|
| PR | [#1488](https://github.com/netease-youdao/LobsterAI/pull/1488) | 定时任务模块 UI 全面升级 | 2026-04-05 | OPEN，stale，已 55+ 天 |
| PR | [#1494](https://github.com/netease-youdao/LobsterAI/pull/1494) | 技能选择按会话独立管理 | 2026-04-06 | OPEN，stale，已 54+ 天 |
| Issue | [#2216](https://github.com/netease-youdao/LobsterAI/issues/2216) | Memory Search provider 锁定 + EBUSY | 2026-06-28 | OPEN，新开 1 天 |

**风险提示：** 当日 4 条 stale Issue 与 3 条 stale PR 的集中关闭，叠加 2 条 stale 仍 OPEN 的 PR，**容易让外部贡献者形成"提交无用"的印象**。建议维护者在本周内对 #1488、#1494、#2216 三条给出明确反馈（评审、合并或附原因关闭），以恢复社区信心。

---

*报告生成时间：2026-06-29 · 数据来源：GitHub REST API（Issues & Pull Requests）*

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyclaw">TinyAGI/tinyclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

<think>The user wants me to generate a daily project status report for Moltis (github.com/moltis-org/moltis) dated 2026-06-29, based on GitHub data provided. Let me analyze the data carefully:

**Data Summary:**
- Past 24 hours Issues updates: 1 (new/active: 1, closed: 0)
- Past 24 hours PR updates: 2 (pending merge: 2, merged/closed: 0)
- New releases: 0

**Issues (1):**
- #1137 [bug] Apple Container ID exceeds name limit - opened by @holgzn, created 2026-06-27, updated 2026-06-28, 1 comment, 0 👍

**Pull Requests (2):**
- #1139 [fix/gateway] don't force-enable matrix-sdk via the metrics feature - by @resumeparseeval, created/updated 2026-06-28
- #1138 [fix/agents] downscale oversized images before they enter model context - by @resumeparseeval, created/updated 2026-06-28

Let me structure the report according to the requirements:

1. **今日速览** - Project overall status assessment
2. **版本发布** - No new releases, skip or briefly mention
3. **项目进展** - Important merged/closed PRs (none merged today, but I should note the open PRs)
4. **社区热点** - Most active Issues/PRs
5. **Bug 与稳定性** - Bug #1137
6. **功能请求与路线图信号** - Not much here, but I can mention the PRs
7. **用户反馈摘要** - From the bug report
8. **待处理积压** - Note items needing attention

The report should be in Chinese, professional, data-driven, and assess project health.

Let me think about project health:
- Activity level: Low to moderate - 1 issue, 2 PRs, all very recent
- No releases, no merges
- Both PRs from the same author (@resumeparseeval) suggest an active maintainer/contributor
- The bug report is about a specific edge case (Apple Container ID name limit)
- Both PRs address real performance/dependency issues

Let me draft the report now.</think>

# Moltis 项目日报

**报告日期：2026-06-29**
**项目地址：https://github.com/moltis-org/moltis**

---

## 1. 今日速览

Moltis 项目今日活跃度处于**低-中等水平**：过去 24 小时内共产生 1 条新 Issue 和 2 条新 Pull Request，无版本发布、无 PR 合入。值得注意的是，两位 PR 均来自同一贡献者 **@resumeparseeval**，提交了 2 个具有实际工程价值的修复（feature flag 治理 与 图像 token 压缩），显示出维护层面对构建体积与上下文窗口等核心问题的持续关注。整体而言，项目仍处于活跃的内部打磨阶段，社区外部反馈较少，但提交质量较高。

---

## 2. 版本发布

**无新版本发布。** 过去 24 小时未触发任何 Release 标签。建议关注后续合并窗口，#1138 与 #1139 具备成为下一补丁版本候选的条件。

---

## 3. 项目进展

今日 **无 PR 合并/关闭**。但有以下两个待评审的高质量修复：

### PR #1139 — `fix(gateway): don't force-enable matrix-sdk via the metrics feature`
- **作者**：@resumeparseeval | **链接**：https://github.com/moltis-org/moltis/pull/1139
- **价值**：修正 gateway 的 `metrics` feature 配置中遗漏弱依赖标记 `?` 的问题，避免在未启用 Matrix 通道时仍强制拉入完整的 `matrix-sdk`，缩减编译产物体积。
- **进展评估**：体现项目对 **feature flag 治理** 与 **可选依赖最小化** 的精细化追求，是一次工程洁癖式的修复。

### PR #1138 — `fix(agents): downscale oversized images before they enter model context`
- **作者**：@resumeparseeval | **链接**：https://github.com/moltis-org/moltis/pull/1138
- **价值**：在图像进入模型上下文前进行下采样，解决单张高分辨率手机照片（如 4032×3024）以内联 base64 注入后消耗约 **350K tokens**（超出整个上下文预算）的严重问题，避免 preemptive-overflow 守卫误拒。
- **进展评估**：直接提升 **多模态 agent 的可用性**，属于核心交互链路的关键修复，影响面广。

**整体推进度**：⭐⭐⭐☆☆ — 工程层面有明显优化，但尚处评审期，未真正落地到主线。

---

## 4. 社区热点

按评论/互动量排序：

| 排名 | 议题 | 评论数 | 👍 | 链接 |
|---|---|---|---|---|
| 1 | Issue #1137 Apple Container ID 超限 | 1 | 0 | https://github.com/moltis-org/moltis/issues/1137 |
| 2 | PR #1139 matrix-sdk feature flag 修复 | 0 | 0 | https://github.com/moltis-org/moltis/pull/1139 |
| 2 | PR #1138 图像下采样修复 | 0 | 0 | https://github.com/moltis-org/moltis/pull/1138 |

**分析**：当前社区讨论密度极低（总评论仅 1 条），所有新议题均为 24 小时内提交，尚未形成讨论热度。#1137 是唯一一个有用户互动的条目，反映用户希望报告 **macOS 容器化部署** 中的实际痛点。

---

## 5. Bug 与稳定性

### 🐞 Bug #1137 — Apple Container ID exceeds name limit
- **严重程度**：🟡 **中（平台兼容性 Bug）**
- **报告者**：@holgzn
- **复现路径**：在 Apple 平台使用 Container 部署时，容器 ID 超过系统名称长度限制
- **影响面**：仅限 Apple Silicon / macOS 容器化用户，但属于 **安装即触发** 的可用性问题
- **是否有 fix PR**：❌ 暂无关联修复 PR
- **链接**：https://github.com/moltis-org/moltis/issues/1137
- **建议优先级**：建议维护者在下一个维护版本中纳入对容器 ID 的规范化处理（如哈希截断、UUID 前缀等）。

### 🐞 隐性 Bug — 上下文溢出由图片引发（PR #1138 已部分修复）
- **严重程度**：🟠 **中-高（核心链路 Bug）**
- **表现**：用户发送一张未压缩照片即被拒绝请求，错误信息指向 overflow 而非图像
- **修复状态**：PR #1138 正在评审
- **链接**：https://github.com/moltis-org/moltis/pull/1138

---

## 6. 功能请求与路线图信号

今日 **无明确功能请求类 Issue**。从两条 PR 的方向可推断出当前内部路线图信号：

- **构建体积优化**（#1139）：表明项目对 **可选依赖精确化** 的持续投入，未来可能扩展到更多 feature 的依赖治理。
- **多模态上下文管理**（#1138）：暗示 agent 层正在加强 **图像预处理管线**，未来或扩展到视频、音频的统一预处理层。

预测下一版本（若发布）的核心主题：**构建瘦身 + 上下文窗口加固**。

---

## 7. 用户反馈摘要

来自 Issue #1137 的真实用户声音（@holgzn）：

> *"Apple Container ID exceeds name limit"*

**提炼的痛点**：
- 用户在 **macOS 原生容器环境**部署时遇到 ID 校验失败，提示项目对 **Apple Container 生态的兼容性** 仍存在缺口。
- 用户已完成 **Preflight Checklist**（搜索重复 issue、使用最新版本、提供完整会话上下文），属于高质量反馈，反映该用户为 **资深开发者/运维人员**。
- 当前讨论仅 1 条评论，**社区响应速度待提升**，用户尚未得到维护者回复。

**满意度信号**：用户愿意详细提交 bug 并附完整上下文，对项目仍抱有信心，但需要维护者及时 acknowledge 以维持贡献意愿。

---

## 8. 待处理积压

| 编号 | 类型 | 创建时间 | 状态 | 风险点 |
|---|---|---|---|---|
| #1137 | Bug | 2026-06-27 | OPEN，无维护者回复 | 距创建已 2 天，Apple 用户被阻塞 |
| #1139 | PR | 2026-06-28 | OPEN，未评审 | feature flag 长期遗留问题 |
| #1138 | PR | 2026-06-28 | OPEN，未评审 | 影响核心 agent 体验，建议优先合并 |

**风险提示**：
- 3 条新议题/请求 **均集中于 48 小时内**，尚处于"待处理"早期窗口，但维护者应避免堆积。
- #1138 修复的 Bug 直接关联 **agent 核心交互链路**，建议优先 Review；#1139 涉及 feature flag 治理，影响所有用户的构建产物，亦应纳入下一版本。
- 缺少维护者对 #1137 的初步响应，建议至少留下一条 acknowledge 评论以保留贡献者积极性。

---

## 📊 项目健康度评估

| 维度 | 评分 | 说明 |
|---|---|---|
| 活跃度 | ⭐⭐☆☆☆ | 当日新增 1 Issue + 2 PR，无合入 |
| 提交质量 | ⭐⭐⭐⭐☆ | 两条 PR 工程价值高，问题描述精确 |
| 社区响应 | ⭐⭐☆☆☆ | Bug 报告未获维护者回复，响应延迟 |
| 版本节奏 | ⭐⭐⭐☆☆ | 长期无发布，积压 PR 待合并 |
| 工程治理 | ⭐⭐⭐⭐☆ | feature flag、上下文管理等深层问题被积极处理 |

**总评**：项目处于 **"内部高质量打磨、外部社区安静"** 的典型阶段。短期内主要风险为 **社区响应延迟** 与 **PR 评审积压**，建议维护者尽快处理 #1138、#1139，并回复 #1137。

---

*报告生成时间：2026-06-29 ｜ 数据来源：GitHub REST API*

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

<think>The user wants me to generate a daily project report for CoPaw (formerly QwenPaw) based on GitHub data. Let me analyze the data carefully.

Key observations:
1. The project is at github.com/agentscope-ai/QwenPaw (despite the user saying CoPaw - it seems the project name changed but data still uses QwenPaw)
2. No new releases today
3. 14 issues updated (11 new/active, 3 closed)
4. 24 PRs updated (15 pending, 9 merged/closed)
5. Most issues are enhancements/features, with a few bugs

Let me organize this into the requested sections:

1. **今日速览** - Activity summary
2. **版本发布** - No releases, skip
3. **项目进展** - Merged/closed PRs analysis
4. **社区热点** - Most active discussions
5. **Bug 与稳定性** - Bug reports
6. **功能请求与路线图信号** - Feature requests
7. **用户反馈摘要** - User pain points
8. **待处理积压** - Long-standing issues

Let me identify:

**Closed/Merged PRs (9 total)**:
- #5594 - test scroll fix
- #5578 - Tauri CI fix
- #5565 - pet plugin fix
- #5321 - scroll context manager (CLOSED but interesting)
- #5500 - detectors cache key fix
- #5210 - cron update command (closes #4939)
- #4622 - DataPaw plugin
- #5542 - e2e tests for agentscope 2.0
- #5531 - parallelize tests with pytest-xdist

**Open PRs of note**:
- #5187 - Windows computer use
- #5595 - hide access logs
- #5592 - skip memory for heartbeat/cron
- #5590 - DingTalk mentions
- #5586 - compaction threshold fix
- #5585 - Matrix streaming
- #5577 - reply aggregation
- #5575 - no-text debounce config
- #5574 - chat refresh
- #5582 - streaming reasoning_content fix
- #5515 - chat beta UI
- ...

**Bugs**:
- #5573 - DeepSeek V4 thinking mode 400 errors (3 comments)
- #4873 - Subagent polling loop (3 comments)
- #5204 - Matrix infinite loop (CLOSED, 3 comments)
- #5591 - Too many log info (CLOSED, 2 comments)
- #5587 - Qwen-Image Tool install error
- #5584 - ascend-vllm connection

**Closed Issues**:
- #5204 - Matrix infinite loop
- #5591 - Too many logs
- #4939 - cron update command (has matching PR #5210)

**Feature Requests**:
- #5564 - DingTalk @mention
- #5593 - DingTalk image message
- #4939 - cron update (closed, PR exists)
- #5588 - Memory search reranker
- #5583 - Chat UI selected background
- #5572 - Model fallback
- #5579 - Conversation checkpoint
- #5589 - Multi-skill input

Long-standing issues:
- #4873 - Created 2026-06-01, still open
- #5187 (PR) - Created 2026-06-14, still open
- #5204 - CLOSED but was around for a while

Let me note that the date is 2026-06-29 (future date, but I should treat it as today per the user's instruction).

Now let me write the report in Chinese as requested, professional and data-driven.

Let me think about the project health:
- High activity (24 PRs, 14 issues in 24h)
- Healthy PR flow (9 closed/merged, 15 pending)
- Mix of bugs, features, and infrastructure work
- Good first-time contributor activity (#4622, #5210, #5321, #5574, #5586)
- Active memory/context work suggests 2.0 migration is ongoing

Let me also note the interesting observation that some PRs are still marked "first-time-contributor" but are quite substantial - this suggests the project is actively nurturing new contributors.

Let me write the report now.</think>

# CoPaw (QwenPaw) 项目动态日报
**日期：2026-06-29**

---

## 1. 今日速览

CoPaw 仓库今日保持**高强度活跃**：24 小时内共有 14 个 Issue 变动（11 开/活跃、3 关闭）和 24 个 PR 变动（15 待合并、9 已合并/关闭），PR 流转率达到 **37.5%**，说明合并通道畅通、审阅响应及时。Issue 分布以**功能增强**为主（占比 60%+），但暴露出若干**稳定性热点**：DeepSeek V4 兼容、子 agent 死循环、Matrix 双向唤醒、ascend-vllm 断连等属于对核心运行链路的影响面。整体来看，项目处于 **agentscope 2.0 迁移收尾 + 钉钉/Matrix 渠道能力扩展** 的并行阶段，工程健康度良好。

---

## 2. 版本发布

> 无新版本发布。

---

## 3. 项目进展（已合并/关闭 PR）

今日合并/关闭的 PR 共 9 个，覆盖**测试基础设施、Tauri 桌面、插件生态、上下文管理、CLI 命令**等多条线：

| PR | 类型 | 核心价值 |
|---|---|---|
| [#5531](https://github.com/agentscope-ai/QwenPaw/pull/5531) | test(integration) | 引入 `pytest-xdist` 并行执行，本地集成测试时间从 ~24 分钟降至 ~3.5 分钟（**约 7 倍提速**），CI 反馈环路显著优化 |
| [#5542](https://github.com/agentscope-ai/QwenPaw/pull/5542) | test(e2e) | 适配 agentscope 2.0 上游迁移，一次性修复 6 个 P0 级别 e2e 失败用例 |
| [#5210](https://github.com/agentscope-ai/QwenPaw/pull/5210) | feat(cli) | 新增 `qwenpaw cron update <job_id>` 子命令，闭环 Issue #4939，避免"删除-重建"反模式 |
| [#4622](https://github.com/agentscope-ai/QwenPaw/pull/4622) | plugin(datapaw) | 合并 DataPaw 数据分析插件（12 个 BI 技能）入 `plugins/bundle/`，扩展官方插件生态 |
| [#5321](https://github.com/agentscope-ai/QwenPaw/pull/5321) | feat(context) | 引入 **scroll 上下文管理策略**：持久化全量对话到 SQLite，提供 REPL 召回能力，作为压缩策略的替代路线（尽管被标记 CLOSED，需关注后续走向） |
| [#5500](https://github.com/agentscope-ai/QwenPaw/pull/5500) | fix | 修正检测器缓存 key，防止过期模式命中 |
| [#5565](https://github.com/agentscope-ai/QwenPaw/pull/5565) | fix(plugin) | 修复 qwenpaw pet 插件 |
| [#5578](https://github.com/agentscope-ai/QwenPaw/pull/5578) | fix(ci) | 修复 Tauri 桌面打包后侧车自动初始化流程，移除过早删除的 `BOOTSTRAP.md` |
| [#5594](https://github.com/agentscope-ai/QwenPaw/pull/5594) | test(scroll) | 清理 scroll 模块中已移除的 `_FORCE_RESERVE_RATIO` 参数，补全 pre-commit |

**整体评估**：今日合并的 PR 中，**测试基础设施和上下文管理**两条线推进最显著，反映出团队在为 2.0 时代打下更扎实的工程地基；同时新插件（DataPaw）和 CLI 能力（cron update）的落地，让"用户可立即收益"的功能面也保持前进。

---

## 4. 社区热点

按评论数与活跃度排序：

### Issue 端
1. **[#5573](https://github.com/agentscope-ai/QwenPaw/issues/5573)**（3 评论）— **DeepSeek V4 thinking 模式在 OpenAI 兼容端点上的 400 错误**  
   - 报告者已自行验证修复方案，邀请核心开发者评审；属于"非官方中转站 + thinking 模式"普遍痛点，已有关联修复 PR [#5582](https://github.com/agentscope-ai/QwenPaw/pull/5582)
2. **[#4873](https://github.com/agentscope-ai/QwenPaw/issues/4873)**（3 评论）— **并发启动两个 subagent 导致主 agent 疯狂轮询 + 飞书侧无法打断**  
   - 已存在近一个月（自 2026-06-01）仍未关闭，与 [#5204](https://github.com/agentscope-ai/QwenPaw/issues/5204) 同属"循环失控"类问题
3. **[#5204](https://github.com/agentscope-ai/QwenPaw/issues/5204)**（3 评论，**已关闭**）— **两 QwenPaw Agent 通过 Matrix 互聊陷入死循环**  
   - 关闭后建议进一步关注根因修复（双向唤醒链路）是否落到代码层
4. **[#5564](https://github.com/agentscope-ai/QwenPaw/issues/5564)**（2 评论）— **钉钉渠道 @mention 支持**  
   - 已有对应 PR [#5590](https://github.com/agentscope-ai/QwenPaw/pull/5590) 实现，落地在即

### PR 端
- **[#5187](https://github.com/agentscope-ai/QwenPaw/pull/5187)**（待合并）— Windows 桌面 GUI 自动化（UIA + Tauri Control Mode），是当前最大体量的功能 PR，已开放 15 天
- **[#5515](https://github.com/agentscope-ai/QwenPaw/pull/5515)**（待合并）— 启用 chat beta UI（pin `@agentscope-ai/chat` 至 `1.1.71-beta.1782368240491`）
- **[#5592](https://github.com/agentscope-ai/QwenPaw/pull/5592)**（待合并）— 恢复 `a0741c0b` 提交中丢失的能力：heartbeat/cron 请求**跳过 auto-memory 与搜索**，节省 token、避免记忆污染

**诉求分析**：社区当前最强烈的需求集中在三处——**模型兼容性**（DeepSeek、ascend-vllm）、**多 Agent 协同稳定性**（subagent / Matrix 死循环）、**企业渠道增强**（钉钉 @mention、图片消息）。

---

## 5. Bug 与稳定性

按严重程度（影响核心链路 > 影响边缘体验）排列：

| 严重度 | Issue | 状态 | 简述 | 已有 Fix？ |
|---|---|---|---|---|
| 🔴 高 | [#5573](https://github.com/agentscope-ai/QwenPaw/issues/5573) | OPEN | DeepSeek V4 + OpenAI 兼容端点 + thinking 模式出现 400（流式 reasoning_content 缺失、工具 Schema null 未清洗） | ✅ [#5582](https://github.com/agentscope-ai/QwenPaw/pull/5582) 流式 reasoning 恢复已提 PR |
| 🔴 高 | [#4873](https://github.com/agentscope-ai/QwenPaw/issues/4873) | OPEN（已近 1 个月） | 双 subagent 并发触发主 agent 轮询风暴，飞书侧无法打断 | ❌ 暂未见对应 fix PR |
| 🟠 中 | [#5587](https://github.com/agentscope-ai/QwenPaw/issues/5587) | OPEN | Qwen-Image Tool 安装报错（v1.1.12.post2） | ❌ |
| 🟠 中 | [#5584](https://github.com/agentscope-ai/QwenPaw/issues/5584) | OPEN | 无法连接自定义 ascend-vllm（自 1.1.7 后版本均失效，模型配置界面测试通过但对话失败） | ❌ |
| 🟡 低 | [#5591](https://github.com/agentscope-ai/QwenPaw/issues/5591) | **CLOSED** | 终端一晚上打印 40000+ 条 `GET /api/console/inbox/events` 噪音日志 | 🔧 已有 [#5595](https://github.com/agentscope-ai/QwenPaw/pull/5595) 默认隐藏访问日志的 PR 待合并 |
| 🟡 低 | [#5204](https://github.com/agentscope-ai/QwenPaw/issues/5204) | **CLOSED** | Matrix 双 Agent 互唤醒死循环 | ⚠️ 已关闭但根因（runtime 无反馈打断机制）需关注是否落地为系统级 fix |

**稳定性观察**：核心模型兼容层（多 provider、thinking 模式）成为当前最突出的稳定性议题；死循环类问题（subagent / Matrix）显示出**运行时反馈中断机制**存在结构性缺失，建议在路线图中安排系统性修复。

---

## 6. 功能请求与路线图信号

| Issue | 需求 | 已有 PR？ | 落地概率 |
|---|---|---|---|
| [#5564](https://github.com/agentscope-ai/QwenPaw/issues/5564) | `channels send` / `/messages/send` 支持钉钉 `@mention` | ✅ [#5590](https://github.com/agentscope-ai/QwenPaw/pull/5590) | 🟢 高 |
| [#5593](https://github.com/agentscope-ai/QwenPaw/issues/5593) | 钉钉渠道上传图片以 `media_id` 形式作为图片消息（非降级为 file） | ❌ | 🟡 中 |
| [#4939](https://github.com/agentscope-ai/QwenPaw/issues/4939) | `qwenpaw cron update` 子命令 | ✅ [#5210](https://github.com/agentscope-ai/QwenPaw/pull/5210) | 🟢 已合 |
| [#5588](https://github.com/agentscope-ai/QwenPaw/issues/5588) | 记忆搜索引入专用 Reranker 模型（两阶段检索） | ❌ | 🟡 中（取决于 reME 集成计划） |
| [#5583](https://github.com/agentscope-ai/QwenPaw/issues/5583) | 聊天界面右侧对话弹出层默认选中背景强化 | ❌ | 🟢 易实现 |
| [#5572](https://github.com/agentscope-ai/QwenPaw/issues/5572) | 模型自动降级（配额耗尽/超时 → 切换备选） | ❌ | 🟡 中（关键运维诉求） |
| [#5579](https://github.com/agentscope-ai/QwenPaw/issues/5579) | 对话记录异常中断下断点保存机制 | ❌ | 🟠 价值高但工作量大 |
| [#5589](https://github.com/agentscope-ai/QwenPaw/issues/5589) | 输入框 `/` 触发技能后连续添加多个技能 | ❌ | 🟢 易实现 |

**路线图信号**：钉钉能力补齐（@mention + 图片消息）、cron CLI 完善、UI 体验打磨构成本轮短周期需求；而**模型自动降级**与**对话断点持久化**代表了用户对"鲁棒性"的高阶诉求，建议列入下一季度规划。

---

## 7. 用户反馈摘要

从今日 Issues 评论中提炼的真实痛点：

- **"配了模型但实际跑不通"**（[#5584](https://github.com/agentscope-ai/QwenPaw/issues/5584)）：用户在 ascend-vllm 上自 1.1.7 后所有版本都连不上，UI 测试通过但对话时 `openai.APIConnectionError`，且 vLLM 后端日志显示正常——表明**模型连通性自检与真实调用路径不一致**，是影响自助接入体验的关键摩擦。
- **"非官方中转站 + thinking 模式"的兼容性焦虑**（[#5573](https://github.com/agentscope-ai/QwenPaw/issues/5573)）：DeepSeek V4 经第三方中转几乎"必现" 400，社区用户已主动 patch 并求评审，反映出**用户对国产模型深度使用远超官方覆盖范围**。
- **"日志洪水"**（[#5591](https://github.com/agentscope-ai/QwenPaw/issues/5591)）：UOS 上一晚 40000+ 条访问日志直击终端，运维友好度差，验证了 [#5595](https://github.com/agentscope-ai/QwenPaw/pull/5595) 的价值。
- **"我修了，请大佬看看是否合理"**（[#5573](https://github.com/agentscope-ai/QwenPaw/issues/5573)）：非 Python 程序员也能产出可用 patch，社区工程参与度与共建意愿良好，维护者可适当释放审稿带宽。
- **多 Agent 编排失控**（[#4873](https://github.com/agentscope-ai/QwenPaw/issues/4873)、[#5204](https://github.com/agentscope-ai/QwenPaw/issues/5204)）：用户对**子 agent + Matrix 组合**下的失控风险高度敏感，期望运行时能提供打断机制。

---

## 8. 待处理积压

提醒维护者关注的长期未响应条目：

| 类型 | 编号 | 创建日期 | 等待时长 | 关注理由 |
|---|---|---|---|---|
| Issue | [#4873](https://github.com/agentscope-ai/QwenPaw/issues/4873) | 2026-06-01 | ~28 天 | 双 subagent 死循环 + 飞书无法打断，影响生产可用性 |
| PR | [#5187](https://github.com/agentscope-ai/QwenPaw/pull/5187) | 2026-06-14 | ~15 天 | Windows 桌面 GUI 自动化（UIA + Tauri Control Mode），体量大、价值高，需明确合并策略 |
| PR | [#5515](https://github.com/agentscope-ai/QwenPaw/pull/5515) | 2026-06-25 | ~4 天 | chat beta UI 升级，pin 至特定 beta 版本，需评估稳定性后合并 |
| Issue | [#5584](https://github.com/agentscope-ai/QwenPaw/issues/5584) | 2026-06-27

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>EasyClaw</strong> — <a href="https://github.com/gaoyangz77/easyclaw">gaoyangz77/easyclaw</a></summary>

<think>Let me analyze the provided GitHub data for EasyClaw and generate a structured daily report for 2026-06-29.

Key observations from the data:
1. No Issue activity in the past 24 hours (0 opened/active, 0 closed)
2. No PR activity in the past 24 hours (0 pending, 0 merged/closed)
3. 1 new release: v1.8.49 (RivonClaw)
4. The release contains 3 main improvements:
   - Reduce customer-service session churn and require pending dispatch replies before forwarding
   - Recover backend subscriptions after invalid JWT responses
   - Clean up duplicate chat image bubbles and OAuth token expiry display

Since there's no issue/PR activity, I need to structure the report to reflect this quiet state while still focusing on the release. Let me write a professional, data-driven report.</think>

# EasyClaw 项目日报

**日期**：2026-06-29
**项目仓库**：[github.com/gaoyangz77/easyclaw](https://github.com/gaoyangz77/easyclaw)
**报告人**：AI 智能体领域开源项目分析师

---

## 1. 今日速览

EasyClaw（旗下 RivonClaw 产品线）今日社区互动处于近期的低位静默状态——过去 24 小时内 Issues 与 PRs 均无任何新增、关闭或评论活动。但项目维护节奏并未停滞，团队按计划发布了 **v1.8.49 版本**，聚焦于客服会话稳定性、后端订阅恢复及聊天界面细节打磨。整体而言，项目处于"低噪声、高质量迭代"阶段，活跃度可评为 **中低**，但代码层推进仍保持稳定节拍。

---

## 2. 版本发布

### 🚀 v1.8.49（RivonClaw） — [查看 Release](https://github.com/gaoyangz77/easyclaw/releases/tag/v1.8.49)

本次为常规迭代版本，无破坏性变更，主要面向**稳定性与用户体验**优化，包含三项实质性改进：

| # | 更新内容 | 影响维度 |
|---|---------|---------|
| 1 | **降低客服会话流失率**：在转发消息前要求待分派回复到位 | 提升客服工作流完整性，避免消息丢失 |
| 2 | **无效 JWT 响应后恢复后端订阅**：桌面端更新通道与实时连接保持稳定 | 修复桌面端断连顽疾，保障实时性 |
| 3 | **清理重复的聊天图片气泡与 OAuth 令牌过期显示** | 优化聊天 UI 一致性与认证提示体验 |

**迁移注意事项**：
- ✅ 无 API 破坏性变更，向后兼容
- ✅ 无需额外配置或数据迁移
- ⚠️ 若企业部署依赖旧版 JWT 重试逻辑，建议回归测试实时通道连接稳定性

---

## 3. 项目进展

⚠️ **今日无 PR 合并/关闭记录**。

过去 24 小时内未有任何 Pull Request 进入合并流程或被关闭。代码层面的推进主要通过 **v1.8.49 版本的直接发布** 体现，意味着维护者可能采用了直推 main 分支的发布策略，或相关 PR 在更早时段已合并但未在统计窗口内活跃。建议关注者在 GitHub 上通过 commit 历史进一步追溯本次版本的代码归属。

---

## 4. 社区热点

⚠️ **今日无活跃 Issue 或 PR 讨论**。

- Issues 区域：0 条新增、0 条活跃、0 条关闭
- PRs 区域：0 条待合并、0 条已合并/关闭

**分析师观察**：今日的零讨论状态在开源项目中并不罕见，可能原因包括：
- 周末/节假日效应
- v1.8.49 集中修复了大量此前被报告的问题（参见下节"稳定性"推测）
- 社区进入功能验证期，尚未形成新议题

---

## 5. Bug 与稳定性

今日未在 Issues 通道收到新的 Bug 报告，但结合 **v1.8.49 发布说明**，可反向推断以下历史问题在本次得到修复：

| 严重程度 | 问题描述 | 修复状态 |
|---------|---------|---------|
| 🔴 高 | **JWT 无效导致后端订阅断开**：影响桌面端自动更新与实时通信通道 | ✅ 已在 v1.8.49 修复 |
| 🟡 中 | **客服会话流转消息丢失**：分派回复未到位即被转发 | ✅ 已在 v1.8.49 修复 |
| 🟢 低 | **聊天界面重复图片气泡** + **OAuth 过期显示混乱** | ✅ 已在 v1.8.49 清理 |

**健康度判断**：v1.8.49 体现出团队对**企业级稳定性**的高度关注，JWT 与客服流转两个修复均属于影响生产环境可用性的关键问题。

---

## 6. 功能请求与路线图信号

⚠️ **今日无新增功能请求 Issues**。

由于社区互动静默，本节无法从前端 Issues 提炼需求信号。但从 v1.8.49 的修复方向可推测下一阶段路线图可能聚焦于：

- 🔁 **会话状态机的健壮性深化**（基于客服流转修复）
- 🔐 **认证与会话生命周期管理**（基于 JWT 恢复机制）
- 💬 **聊天 UI 的一致性打磨**（基于图片气泡清理）

建议关注者：在 [Issue 区](https://github.com/gaoyangz77/easyclaw/issues) 主动提交增强建议，以推动路线图透明化。

---

## 7. 用户反馈摘要

⚠️ **今日无新增用户评论**。

本节数据来源为空。鉴于 v1.8.49 修复内容具有明确的用户痛点指向性，可推断历史用户反馈主要集中在：

- 桌面客户端"突然断线"的困扰 → 已修复
- 客服坐席抱怨"消息接力丢失" → 已修复
- 终端用户对聊天界面混乱的体验投诉 → 已修复

**分析师建议**：建议项目方在 v1.8.49 发布帖或对应 Issue 中补充"用户反馈闭环"说明，有助于增强社区信任。

---

## 8. 待处理积压

⚠️ **数据未提供长期 Issue/PR 积压指标，无法量化提醒**。

基于今日数据为零的状态，需提示维护者注意：

- ⏰ **若 24 小时静默状态持续超过一周**，建议主动通过 Discussions 或公告渠道与社区同步进展，避免社区参与感下降。
- 📋 **建议补充数据维度**：长期未响应（>30 天）的 Issue 与 PR 列表，以便持续追踪积压健康度。

---

## 📊 项目健康度总评

| 维度 | 评分 | 说明 |
|------|------|------|
| 发布节奏 | ⭐⭐⭐⭐ | 持续迭代，v1.8.49 体现稳定性导向 |
| 社区活跃 | ⭐⭐ | 24h 内零互动，需关注 |
| 代码质量 | ⭐⭐⭐⭐⭐ | 本次修复均为生产关键问题 |
| 透明度 | ⭐⭐⭐ | 缺少路线图与积压数据公开 |
| 综合 | **3.5 / 5** | 稳定推进，社区参与待激活 |

---

*本日报由 AI 项目分析师基于 GitHub 公开数据自动生成。数据时间窗口：2026-06-28 至 2026-06-29。*

</details>

---
*本日报由 [Big Model Radar](https://github.com/96loveslife/big_model_radar) 自动生成。*
# AI CLI 工具社区动态日报 2026-10-10

> 生成时间: 2026-10-10 05:16 UTC | 覆盖工具: 8 个

- [Claude Code](https://github.com/anthropics/claude-code)
- [OpenAI Codex](https://github.com/openai/codex)
- [Gemini CLI](https://github.com/google-gemini/gemini-cli)
- [GitHub Copilot CLI](https://github.com/github/copilot-cli)
- [Kimi Code CLI](https://github.com/MoonshotAI/kimi-cli)
- [OpenCode](https://github.com/anomalyco/opencode)
- [jcode](https://github.com/1jehuang/jcode)
- [pi](https://github.com/earendil-works/pi)
- [Claude Code Skills](https://github.com/anthropics/skills)

---

## 横向对比

<think>用户希望我基于前面提供的 7 个 AI CLI 工具（Claude Code、OpenAI Codex、Gemini CLI、GitHub Copilot CLI、Kimi Code CLI、OpenCode、jcode、pi）的社区动态日报，生成一份横向对比分析报告。

让我先梳理各个工具的关键数据：

**Claude Code (Anthropic)**
- Releases: 1 (v2.1.296)
- Issues: 50 条更新
- PRs: 2 条变更
- 核心热点: #91870 Mods 扩展性提案（250 评论，131 👍）、TUI 长输入截断、后台任务被杀、安全分类器误报、模型自陈报告
- 关键趋势: 插件化扩展、Desktop 体验、合规企业级配置

**OpenAI Codex (OpenAI)**
- Releases: 3 (rust-v0.162.1, rust-v0.163.0-alpha.4, rust-v0.163.0-alpha.5)
- Issues: 30 条展示
- PRs: 20+ 条
- 核心热点: /rewind 工作区级回滚（👍227）、VS Code workspace 隔离、Windows 平台稳定性（Computer Use、WSL、沙箱）
- 关键趋势: 会话/工程上下文管理、Windows 可靠性、协议/能力扩展、code-mode 沙箱化

**Gemini CLI (Google)**
- Releases: 2 (v0.65.0-nightly, v0.64.0-preview.1)
- Issues: 10 条展示
- PRs: 10 条
- 核心热点: Subagent MAX_TURNS 后误报成功、generalist agent 永久挂起、浏览器子代理 Wayland 失败、无害命令误报
- 关键趋势: Agent 可观测性、AST 感知工具链、技能自发调用率低

**GitHub Copilot CLI**
- Releases: 5 (v1.0.95, v1.0.96 系列)
- Issues: 43 条更新，30 条展示
- PRs: 1 条（异常冷清）
- 核心热点: 沙箱权限与跨进程语义、MCP 集成稳定性、Hooks 与扩展性
- 关键趋势: 沙箱成为新基建瓶颈、MCP 生态磨合期

**Kimi Code CLI**
- 无活动

**OpenCode**
- Releases: 0
- Issues: 10 条展示
- PRs: 10 条
- 核心热点: V1→V2 迁移问题、Windows 桌面体验、MCP 401 状态机、Plan mode 安全漏洞
- 关键趋势: V2 性能与迁移、Windows 桌面体验、MCP 生态成熟度、上下文压缩

**jcode**
- Releases: 1 (v0.93.0 — Instant startup, 135ms→20ms)
- Issues: 10 条精选
- PRs: 10 条
- 核心热点: SDK 进程生命周期、CI 质量门禁、TUI 体验、协议可观察性
- 关键趋势: SDK 一等公民化、嵌入式/SDK 集成、CI 矩阵可信度

**pi**
- Releases: 0
- Issues: 30 条展示
- PRs: 18 条
- 核心热点: Windows 平台（#7547 79 评论征集）、SDK 1.1.0 稳定性、多 Provider 兼容性、CJK 渲染
- 关键趋势: Windows 一等公民体验、SDK/RPC 稳定性、CJK 本地化

现在开始撰写横向对比分析报告：

**1. 生态全景**
- 整体态势：AI CLI 工具从"功能竞赛"转向"平台可靠性与生态成熟度"
- 主流厂商（Anthropic、OpenAI、Google、GitHub）和独立工具（OpenCode、jcode、pi）都在不同层面进行优化
- Windows 平台成为各家共同短板
- MCP（Model Context Protocol）成为生态聚合点
- 嵌入式/SDK 场景成为新焦点

**2. 各工具活跃度对比**
需要制表

**3. 共同关注的功能方向**
- Windows 平台体验：Claude Code、Codex、Copilot CLI、OpenCode、pi 都有大量 Windows 相关 issue
- MCP 生态：Codex、Copilot CLI、OpenCode 都在重点投入
- 沙箱与权限：Codex、Copilot CLI、OpenCode 都涉及
- Agent 可观测性/可解释性：Claude Code（自陈报告）、Gemini CLI（subagent trajectory）
- CJK/本地化：jcode、pi 关注度高

**4. 差异化定位**
- Claude Code: 插件化生态 + 企业级合规（HIPAA）
- OpenAI Codex: code-mode 沙箱化 + Windows 平台攻坚
- Gemini CLI: AST 感知工具链 + 浏览器代理韧性
- GitHub Copilot CLI: IDE 一等公民 + ACP 性能
- OpenCode: 透明上下文压缩 + 多模型网关
- jcode: SDK 一等公民化 + TUI 体验极致打磨
- pi: Windows 平台一等公民 + 多 Provider 深度兼容

**5. 社区热度与成熟度**
- 头部热度（评论数）：
  - Claude Code #91870: 250 评论 / 131 👍
  - Codex #11626: 48 评论 / 227 👍
  - Codex #25319: 43 评论 / 106 👍
  - pi #7547: 79 评论
- 成熟度分层：
  - 高成熟：Claude Code（v2.x）、Codex（v0.162.x 稳定 + 0.163 alpha）、Copilot CLI（v1.0.x）
  - 快速迭代：Gemini CLI（nightly + preview）、OpenCode（V2 迁移期）、jcode（v0.93.0）
  - 早期阶段：pi（无 release 仍在大量 bug 修复）

**6. 趋势信号**
- "撤销/回滚"语义成为核心诉求（Codex /rewind）
- Windows 平台是 AI CLI 的共同短板
- MCP 协议从"基础设施"走向"信任层"
- Agent 可观测性与自陈报告兴起
- 长会话成本管理（上下文压缩、记忆回溯）
- 多 Provider 抽象层的挑战

我准备用约 1500-2000 字写一份专业简洁的报告。让我开始写。</think>

# 主流 AI CLI 工具横向对比分析报告
**数据日期：2026-10-10**

---

## 一、生态全景

AI CLI 工具已进入"功能竞赛后的可靠性收敛期"——主流厂商（Anthropic、OpenAI、Google、GitHub）正将研发重心从"新增能力"转向**平台稳定性、沙箱安全、MCP 生态、Windows 一等公民体验**四大方向；独立工具（OpenCode、jcode、pi）则凭借差异化路线快速攀升：jcode 押注 SDK 一等公民化、pi 主打多 Provider 深度兼容、OpenCode 抢占透明上下文压缩赛道。值得注意的是，**MCP（Model Context Protocol）正从"扩展协议"演变为"信任基石"**，其 401 重试风暴、OAuth 兼容性、状态机完整性等问题已成为各家共同关注的焦点。

---

## 二、各工具活跃度对比

| 工具 | Releases | Issues 更新 | 头部 Issue 互动 | 成熟阶段 |
|------|----------|-------------|----------------|----------|
| **Claude Code** | 1（v2.1.296） | 50 | #91870：250 评论 / 👍131 | 高成熟（v2.x 稳定） |
| **OpenAI Codex** | 3（0.162.1 + 0.163α×2） | 30+ | #11626：48 评论 / 👍227；#25319：43 评论 / 👍106 | 高成熟（双轨制） |
| **Gemini CLI** | 2（nightly + preview） | 10+ | #22323：13 评论 | 快速迭代 |
| **GitHub Copilot CLI** | 5（v1.0.95–96 系列） | 43 | #4313：9 评论 | 高成熟，PR 端异常冷清 |
| **Kimi Code CLI** | 0 | 0 | — | 静默期 |
| **OpenCode** | 0 | 10+ | #54095：13 评论 | V2 迁移期 |
| **jcode** | 1（v0.93.0 Instant startup） | 10+ | SDK 生命周期系列 | 快速迭代 |
| **pi** | 0 | 30+ | #7547：79 评论（Windows 调研） | 早期成长 |

> **关键信号**：Codex 在 👍 数上领先（单 issue 最高 227），Claude Code 在评论深度上领先（单 issue 最高 250），pi 在调研型议题上表现最强（79 条 Windows 反馈）。**GitHub Copilot CLI 的 PR 端近乎停滞（仅 1 条提交），与高活跃 Issue 形成结构性失衡，值得关注。**

---

## 三、共同关注的功能方向

### 1. Windows 平台体验（涉及 5 家工具）
- **Claude Code**：TUI 长输入截断（#74004/#90910/#92118）、后台任务被误杀（#78674）
- **Codex**：WSL exec 失败（#49731）、Computer Use 死锁（#35446）、execpolicy 误报（#40060）
- **Copilot CLI**：JVM 沙箱不传导（#4516）、桌面端 git 拦截（#5094）
- **OpenCode**：Web 文件选择器不识别盘符（#43173）、TUI 鼠标回归（#54239）
- **pi**：官方主动发起 Windows 调研（#7547）、TUI 每按键重绘（#6300）、ConPTY OSC 串扰（#10742）

> Windows 已从"附带支持"变成"体验瓶颈"，预计未来 1–2 个季度将出现集中修复潮。

### 2. MCP 协议成熟度（涉及 4 家工具）
- **Codex**：code-mode 沙箱化（#52748 exit 语义、#52685 取消传播、#52723 gRPC over stdio）
- **Copilot CLI**：Atlassian MCP 反复授权（#2536）、GitHub MCP 让工具消失（#5101）
- **OpenCode**：MCP 401 状态机缺失（#54225）、OAuth localhost 回归（#54245）
- **pi**：多 Provider 协议细节差异（OpenRouter / Groq / Gemini thought signature）

### 3. Agent 可观测性与可解释性
- **Claude Code**：5 条 `claude-opus-5-5` 自陈报告（#100976 系列），代表"agent 自审"新实践
- **Gemini CLI**：Subagent trajectory 通过 `/chat share` 可见（#22598）、`/bug` 自动包含子代理上下文（#21763）
- **jcode**：协议层补齐 `message_id` 与 `text_done`（#1118）、可取消 mid-turn 消息（#1778）

### 4. 沙箱与权限安全
- **Codex**：Windows MXC 沙箱迁移（#52707）、execpolicy 精度
- **Copilot CLI**：macOS 阻断 Gradle（#5105）、沙箱凭证锁定（#5102）
- **OpenCode**：Plan mode bash 绕过确认（#53955 → #54119 已修复）
- **Gemini CLI**：无害命令（`ls -ld`/`grep -rn`）误报（#29672 已修复）

### 5. CJK / 本地化体验
- **jcode**：TUI CJK 字符边界（#1766）
- **pi**：CJK 强调渲染（#10154 → #10730 修复）

---

## 四、差异化定位分析

| 工具 | 功能侧重 | 目标用户 | 技术路线 |
|------|---------|---------|---------|
| **Claude Code** | 插件化生态（Mods）+ 企业合规（HIPAA 示例） | 追求深度定制的大型组织、独立开发者 | Hook/Plugin + subagent + Desktop Gateway |
| **OpenAI Codex** | code-mode 子运行时 + Windows 攻坚 | IDE 内深度使用者（VS Code） | Rust 核心 + Alpha/Beta/Stable 三轨 |
| **Gemini CLI** | AST 感知工具链 + 浏览器代理韧性 | 重视可解释性、长上下文工程的开发者 | Gemini 3 + untrusted context tracker |
| **GitHub Copilot CLI** | IDE 一等公民 + ACP 性能 | GitHub 生态重度用户、企业团队 | Native Entra broker + 时间线权限溯源 |
| **OpenCode** | 透明上下文压缩网关 + 多模型路由 | 追求供应商灵活性的开发者 | 本地代理 + Effect 4.0 + Plugin 生态 |
| **jcode** | SDK 一等公民化 + TUI 体验极致 | 嵌入式集成方（Web/Slack/CI） | TUI 20ms 冷启动 + Harness API |
| **pi** | Windows 一等公民 + 多 Provider 深度兼容 | 跨平台、多供应商环境的团队 | Node/Bun 双运行时 + AI Gateway 自定义 |

> **差异化本质**：头部厂商在"协议层/平台层"展开较量（Codex code-mode、Claude Mods、Copilot ACP），独立工具则通过"特定场景的极致打磨"建立护城河（jcode SDK、pi Windows、OpenCode 压缩）。

---

## 五、社区热度与成熟度

### 热度分层
- **🔥 头部巨头**：Claude Code（#91870 已成为社区"风向标"提案）、Codex（#11626 撤销语义获 227 👍）
- **📈 快速攀升**：pi（Windows 调研帖 79 评论，开发者主动响应官方号召）、jcode（SDK 连续 4 个 PR 闭环）
- **🛠 工程化推进**：Gemini CLI（修复频率高、议题结构化）
- **⚠️ 关注预警**：GitHub Copilot CLI（PR 端断流 24 小时仅 1 条，疑似 CI/CLA 阻碍）、Kimi Code CLI（持续静默）

### 成熟度曲线
- **v2/v1.x 稳定期**：Claude Code、Codex、Copilot CLI——重心在企业级特性、跨平台一致性
- **v0.x 快速迭代**：Gemini CLI（nightly/preview 双轨）、jcode、OpenCode——重心在 SDK、协议、压缩等基础设施
- **早期成长**：pi——Windows 调研与多 Provider 兼容是其当下命题

---

## 六、值得关注的趋势信号

### 1. "撤销/回滚"语义成为核心痛点
Codex `/rewind` 提案（👍227）揭示：用户对 AI 已变更代码的"后悔成本"高度敏感。**预示**：事务式代码编辑、可恢复 agent 工作流将成下一波差异化竞争点。

### 2. Windows 平台从"附带支持"变为"决策变量"
5 家工具同时在 Windows 上"翻车"，pi 甚至主动发起社区调研。**对开发者的参考**：评估 AI CLI 工具时，Windows 体验应列入关键指标，不再是 macOS/Linux 体验的"附带品"。

### 3. MCP 正从"扩展点"演变为"信任层"
401 重试风暴、OAuth 兼容性、状态机完整性——这些不再是协议功能问题，而是产品可靠性问题。**预示**：未来 3–6 个月，MCP 治理能力（认证恢复、错误可观测、安全默认）将成竞争分水岭。

### 4. Agent 自审/可解释机制兴起
Claude Opus 5.5 的"流程违规自报"实践、Gemini CLI 的 `/chat share` trajectory——代表 agent 系统正在引入**类 CI 质量门禁的合规回路**。**对开发者的参考**：在企业落地场景，应将"agent 可审计性"列入选型指标。

### 5. 上下文压缩与记忆回溯成为长会话的关键成本
OpenCode 的"透明压缩网关"（#53678）、jcode 的"零工具调用记忆回溯"（#41453）共同指向：**长会话成本管理已从"模型层"下沉到"工具层"**。这是开发者构建复杂工作流时必须正视的系统工程问题。

### 6. 多 Provider 抽象层的"协议细节"战争
pi 在 OpenRouter、Groq、Gemini AI Studio、Anthropic managed-effort 各家"小怪癖"上反复出现兼容性 issue。**信号**：在跨供应商时代，AI CLI 工具的核心壁垒已从"模型接入"转向"协议工程"。

### 7. PR 端的活跃度是社区健康的真实指标
GitHub Copilot CLI 的高 Issue / 低 PR 失衡、Claude Code 的 PR 几乎停滞（24 小时仅 2 条）都提示：**仅看 Issue 数量会高估社区健康度，PR 流入率才是开源治理的硬指标**。

---

## 📌 报告小结

整体来看，AI CLI 生态已从"百舸争流"进入"分层竞争"阶段：
- **头部厂商在协议层与平台层正面交锋**（Mods / code-mode / MCP / ACP）
- **独立工具通过垂直场景建立护城河**（SDK / Windows / 压缩）
- **Windows 体验、MCP 信任、Agent 可观测性**是下一阶段的三大主战场

对开发者而言，建议优先关注 **Codex（撤销语义）、Claude Code（Mods 生态）、jcode（SDK 集成）、pi（Windows + 多 Provider）** 这四条主线，它们代表 AI CLI 在 2026 年末的演进方向。

---

*报告基于 2026-10-10 GitHub 公开数据生成，仅供技术决策参考。*

---

## 各工具详细报告

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills 社区热点

> 数据来源: [anthropics/skills](https://github.com/anthropics/skills)

<think>The user wants me to analyze the Claude Code Skills community data and generate a report. Let me carefully look through the data provided.

Important observations:
1. The PR data shows "评论: undefined" and "👍: 0" for all PRs - which means the data doesn't actually contain real comment counts or likes. The PRs are listed but no engagement metrics are available.
2. The Issues section has actual comment counts and likes.

Let me work with what we have:
- 50 PRs listed (top 20 shown), but no engagement metrics
- 50 Issues with engagement metrics (top 15 shown)

For the PR ranking, since comment counts are undefined, I'll need to base it on other factors like recency of updates, the nature of the PR (security fixes being more critical), or inference from related issue activity.

Let me identify the most noteworthy PRs based on context:

1. **#1961 skill-creator: harden eval viewer** - Security hardening, relates to #1394 (XSS issue with 4 comments), recent (2026-10-07)
2. **#1742 fix(mcp-builder): support mcp>=2 streamable_http_client** - Relates to breaking changes, important fix
3. **#1980 webapp-testing: avoid shell=True** - Security fix (command injection CWE-78)
4. **#1977 algorithmic-art: wrapAround()** - Bug fix
5. **#1976 webapp-testing: report textarea and select** - Bug fix
6. **#1792 fix(docx): report LibreOffice timeout** - Reliability fix
7. **#1298 fix(skill-creator): isolate trigger evals** - Relates to issue #1383 (4 comments) and #1352 (4 comments)
8. **#1730 fix(claude-api): replace dead URLs** - Documentation fix
9. **#1771 proofcore-contract-auditor** - New Web3 skill
10. **#1703 md2video-audio** - New media skill
11. **#1245 notion-spec-to-implementation and quantitative-resume-auditor** - New productivity skills
12. **#486 Add ODT skill** - Long-standing new skill request
13. **#514 Add document-typography skill** - Long-standing new skill request
14. **#1615 Add scnet-hpc skill** - HPC cluster skill
15. **#822 AWT (AI Watch Tester)** - E2E testing skill
16. **#83 Add skill-quality-analyzer and skill-security-analyzer** - Meta skills

For Issues (with actual engagement):

1. **#492 - 43 comments, 2 likes** - Security: Community skills distributed under anthropic/ namespace - HIGHEST priority issue
2. **#228 - 16 comments, 8 likes** - Org-wide skill sharing
3. **#556 - 12 comments, 7 likes** - run_eval.py never triggers skills
4. **#62 - 10 comments, 2 likes** - Skills disappearing
5. **#1329 - 9 comments** - compact-memory proposal
6. **#202 [CLOSED] - 8 comments, 1 like** - skill-creator should be updated
7. **#412 [CLOSED] - 6 comments** - agent-governance proposal
8. **#189 - 6 comments, 9 likes** - Document-skills and example-skills duplicate
9. **#1385 - 5 comments** - Reasoning Quality Gate Pipeline
10. **#1487 - 4 comments** - claude-api skill injects 156k tokens
11. **#1394 - 4 comments, 2 likes** - eval-viewer XSS
12. **#1390 - 4 comments** - mcp-builder evaluation broken
13. **#1383 - 4 comments** - skill-creator silent benchmark failures
14. **#1352 - 4 comments, 2 likes** - run_eval parallel workers
15. **#1175 [CLOSED] - 4 comments** - SharePoint security

Now let me identify key themes from Issues:
- **Security & Trust**: #492 (impersonation), #1394 (XSS), #1980 (command injection), #1175 (SharePoint), #1961 (security hardening)
- **Distribution/Sharing**: #228 (org sharing), #189 (duplicates), #62 (skills disappearing)
- **Skill Quality/Reliability**: #556 (0% trigger), #1487 (token exhaustion), #1390 (broken eval), #1383 (silent failures), #1352 (parallel workers)
- **New Skill Proposals**: #1329 (compact-memory), #412 (agent-governance), #1385 (quality gate pipeline)
- **Skill Creator Improvements**: #202 (best practices), #1298, #1352, #1383, #1394, #1961

Let me prepare the report now. I should note in my report that the PR "热度" data wasn't fully populated, so I'll use proxy indicators (recency, security relevance, related issue activity).

Now let me write a polished, professional report in Chinese.</think>

# Claude Code Skills 社区热点报告

> 数据截止：2026-10-10 | 数据源：github.com/anthropics/skills

---

## 1. 热门 PR/Skill 排行

> ⚠️ **数据说明**：PR 数据中评论数与点赞数未采集（均显示为 `undefined`），以下排行综合"近期活跃度、与高热度 Issue 的关联性、安全严重性、新颖性"等代理指标得出。

| 排名 | PR / Skill | 类型 | 热度来源 | 状态 |
|---|---|---|---|---|
| 🥇 | **#1961** skill-creator：eval viewer 加固 | 安全修复 | 直接回应高优 Issue #1394（XSS），涉及脚本逃逸/DNS 重新绑定/CSRF | OPEN |
| 🥈 | **#1980** webapp-testing：消除 `shell=True` | 安全修复 | 修复 CWE-78 命令注入 | OPEN |
| 🥉 | **#1742** mcp-builder：兼容 mcp>=2 | 兼容性 | 修复破坏性 API 更名（`streamable_http_client`）+ 自定义 header | OPEN |
| 4 | **#1298** skill-creator：隔离 trigger eval + Windows 兼容 | 核心修复 | 回应多个高优 Issue（#1383、#1352），并行 worker 跨匹配 UUID | OPEN |
| 5 | **##1771** proofcore-contract-auditor | 新 Skill | Web3 智能合约静态分析 + TON 链上 Merkle 存证 | OPEN |
| 6 | **#1792** docx：LibreOffice 超时报错 + 输出校验 | 可靠性 | 修复"看似成功实际失败"的静默 bug | OPEN |
| 7 | **#1703** md2video-audio | 新 Skill | Markdown → MP4 视频，零成本、含 AI 配音 | OPEN |
| 8 | **#1245** notion-spec-to-implementation + quantitative-resume-auditor | 新 Skill（×2） | Notion 文档→任务、简历量化审计 | OPEN |

**配套说明**：
- `#1977 algorithmic-art: wrapAround()` 与 `#1976 webapp-testing: textarea/select 识别` 来自社区积极贡献者 @gerardrecinto，是同期较活跃的连续小修。
- `#1730 fix(claude-api): replace dead URLs` 清理了 Academy 与 Tool-use 文档中已 404 的链接，反映社区对"Skill 自身体质"的关注。

---

## 2. 社区需求趋势（来自 Issues）

按主题聚合：

### 🔴 A. 安全与信任（热度最高）
- **#492**（43 评论 / 2 👍，热度断层第一）：社区 Skill 在 `anthropic/` 命名空间下分发，存在信任边界滥用 → 仍 OPEN，**社区最关注的底层议题**。
- **#1394**（4/2）skill-creator eval-viewer 的 `escapeHtml` 不一致 → display-path XSS。
- **#1175**（CLOSED，4）在 SKILL.md 中硬编码权限的 SharePoint 安全担忧。
- **#62**（10/2）用户自行上传的 Skills "消失"——数据所有权与可见性问题。

### 🟠 B. 评估与触发可靠性
- **#556**（12/7）`run_eval.py` 对所有 query 的触发率为 0%，意味着 skill-creator 的离线评估不收敛。
- **#1487**（4）`claude-api` skill 单次工具调用注入了 ~156k tokens，撑爆上下文。
- **#1390**（4）`mcp-builder/evaluation.py` 对所有真实 MCP server 打 0 分。
- **#1383 / #1352**（各 4）并行 worker 跨匹配 UUID、静默基准失败。

→ **共性结论**：评估管线（skill-creator）是当前最大的"质量瓶颈带"。

### 🟢 C. 协作与分发
- **#228**（16/8，**👍 数最高**）组织级 Skills 共享——目前只能 .skill 文件手动分发。
- **#189**（6/9，**👍/评论比最高**）`document-skills` 与 `example-skills` 插件内容重复。

### 🟣 D. 新 Skill 提案方向
- **#1329**（9）`compact-memory`——长任务代理的符号化压缩记忆。
- **#412**（CLOSED，6）`agent-governance`——策略执行、审计、信任评分（提示词层治理模式）。
- **#1385**（5）**Reasoning Quality Gate Pipeline**：Pre-task 校准 → 对抗评审 → 交付验证三段式质量门。
- **#202**（CLOSED，8）`skill-creator` 自身应改写为"操作型"而非"教学型" Skill。

---

## 3. 高潜力待合并 PR

按"近期更新 × 安全/基础设施修复 × 解决已知 Issue 链路"排序：

| PR | Skill | 关键价值 | 最后活跃 | 链接 |
|---|---|---|---|---|
| #1961 | skill-creator | eval viewer 三类漏洞修复（脚本逃逸 / DNS rebinding / CSRF） | 2026-10-07 | [查看](https://github.com/anthropics/skills/pull/1961) |
| #1980 | webapp-testing | 消除命令注入，关闭 `shell=True` | 2026-10-06 | [查看](https://github.com/anthropics/skills/pull/1980) |
| #1977 | algorithmic-art | wrapAround 模运算修复负值/越界 | 2026-10-07 | [查看](https://github.com/anthropics/skills/pull/1977) |
| #1976 | webapp-testing | textarea/select 元素识别正确化 | 2026-10-07 | [查看](https://github.com/anthropics/skills/pull/1976) |
| #1742 | mcp-builder | 跟上 mcp>=2.0 破坏性变更 | 2026-10-08 | [查看](https://github.com/anthropics/skills/pull/1742) |
| #1681 | skill-creator | 让 `package_skill.py` 可独立执行，修 CLI 文档 | 2026-10-08 | [查看](https://github.com/anthropics/skills/pull/1681) |
| #1298 | skill-creator | Windows 兼容 + 隔离 trigger eval | 2026-09-16 | [查看](https://github.com/anthropics/skills/pull/1298) |
| #1792 | docx | LibreOffice 超时变 Error + 输出重核 | 2026-09-25 | [查看](https://github.com/anthropics/skills/pull/1792) |

> 含义：这批 PR 大多在 **10 月初仍在被维护方迭代**，最有可能在下一个发布窗口进入 skills 市场。

---

## 4. Skills 生态洞察（一句话）

**社区当前最集中的诉求是"信任与可评估性"——既要求 Skills 生态建立清晰的安全/来源边界（#492 占 43 评论），又要求 skill-creator 自身的评估管线（trigger rate、XSS、并行 worker）真正可信；在此基础上，组织级分发（#228）与新形态代理能力（compact-memory、agent-governance、quality gate）才具备落地土壤。**

---

<think>The user wants me to generate a daily report based on GitHub data for Claude Code. Let me analyze the data carefully and create a structured Chinese report.

Key observations:
1. Release v2.1.296 - Added `code` key to Claude apps gateway managed.policies and `autoCompactWindow` to subagent frontmatter
2. Most issues are from October 10, 2026 - they have 0 comments because just created
3. Top issues by comments:
   - #91870 (250 comments, 131 thumbs up) - Mods - make Claude 10x more extensible - HUGE community engagement
   - #78674 (7 comments) - Background tasks mass-killed by memory-pressure reaper on Linux
   - #85848 (3 comments) - Discussion mode
   - #74004 (3 comments) - Long input truncation
   - #90910 (3 comments) - Long prompt truncated on macOS/Warp
   - #100106 (2 comments) - Auto-update drops Remote Control sessions
   - #92118 (2 comments) - Large pasted messages truncated
   - #98299 (2 comments) - 5-hour session limit kills workflow agents
   - Various with 1 comment or 0 comments

4. PRs: Only 2 listed
   - #41447 - Open source claude code (since March 2026)
   - #100293 - HIPAA settings example (closed)

Let me identify patterns:
- Multiple "long input/paste truncated" issues (#74004, #90910, #92118, #99252) - TUI input handling bug
- Security classifier false positives (#100965, #100964)
- Model behavior issues from claude-opus-5-5 self-reports (#100976, #100972, #100971, #100970, #100968)
- Desktop app bugs (#100106, #100975, #100974, #100973, #100966)
- Plugin/extension enhancements (#91870 is the major one)

Now I'll compose the report in Chinese.</think>

# Claude Code 社区动态日报
**日期：2026-10-10**
**数据来源：github.com/anthropics/claude-code**

---

## 今日速览

社区活跃度显著提升，过去 24 小时内有 50 条 Issue 更新与 2 条 PR 变更。最受关注的依然是长期高人气提案 **#91870「Mods — 让 Claude 强 10 倍的可扩展性」**（评论 250、👍 131），Claude 团队昨日在帖内发布了 *Community Micro-Update*，明确表示正在快速迭代这一扩展能力。同时，**TUI 长文本/粘贴输入被静默截断** 已成为近期高频 Bug，多平台复现；另外出现一批由 `claude-opus-5-5` 自身按用户指令汇报的"模型自陈问题"——这是社区行为观察的新样本。版本方面 **v2.1.296** 落地，主要新增了 Desktop Gateway 与 subagent 自动压缩窗口配置。

---

## 版本发布

### v2.1.296
- **Claude Apps Gateway `managed.policies[]` 新增 `code` key**：与 `cli` 等价，应用于 Claude Desktop 的 Code tab，并在 `desktop` 之外再开启 Gateway 模式。
- **subagent frontmatter 与 `--agents` 定义支持 `autoCompactWindow`**：允许为子代理单独配置自动上下文压缩窗口。
- 详情见：[v2.1.296](https://github.com/anthropics/claude-code/releases/tag/v2.1.296)（变更日志仅含上述条目，PR 列表需查阅 release notes）

---

## 社区热点 Issues（Top 10）

1. **#91870 [OPEN] [enhancement, hooks, plugins] Mods — make Claude 10x more extensible** — 250 评论 / 👍131
   长期最具人气的扩展性提案（Hook / 插件系统）。昨日官方发 *Community Micro-Update* 称 "We're live!" 并正在快速消化社区反馈。👉 [链接](https://github.com/anthropics/claude-code/issues/91870)

2. **#78674 [OPEN] [bug, linux] 后台任务被内存压力 reaper 误杀（MemAvailable 充足、PSI ≈0）** — 7 评论
   即便机器实际有 ~39 GB 可用且 PSI 接近 0，Linux 上 Claude Code 的 memory-pressure reaper 会一次性 kill 掉 session 内所有 `run_in_background` Bash 任务。核心组件层面的可靠性问题。👉 [链接](https://github.com/anthropics/claude-code/issues/78674)

3. **#85848 [OPEN] [feature] Discussion mode：只读对话型 session + 可导出产物** — 3 评论
   提议增加"只读 / 不执行命令"的会话模式，并能将产物导出。适合评审、头脑风暴、安全评估场景。👉 [链接](https://github.com/anthropics/claude-code/issues/85848)

4. **#74004 [OPEN] [bug, macOS] 长输入消息被静默截断（~121 行被吃掉）** — 3 评论
   用户辛苦输入的内容被截断才送达模型，造成生产力浪费。👉 [链接](https://github.com/anthropics/claude-code/issues/74004)

5. **#90910 [OPEN] [bug, macOS/Warp] 大 prompt 开头被静默截断 762/2211 字符** — 3 评论
   有复现步骤，macOS + Warp 终端组合下粘长 prompt 时字符被截断，且从开头开始——语义被切断。👉 [链接](https://github.com/anthropics/claude-code/issues/90910)

6. **#100106 [OPEN] [bug, desktop] 自动更新重启后所有 Remote Control 会话断开** — 2 评论
   Desktop 半夜自动升级会丢弃所有 Code tab 的 Remote Control 状态，直到本地打开才恢复。👉 [链接](https://github.com/anthropics/claude-code/issues/100106)

7. **#92118 [OPEN] [bug, linux/WSL] 大块粘贴消息被静默截断（无警告）** — 2 评论
   与 #74004、#90910 同源，跨平台问题，体感严重。👉 [链接](https://github.com/anthropics/claude-code/issues/92118)

8. **#98299 [OPEN] [bug, windows, agents] 5 小时会话上限杀掉 in-flight 工作流 agent** — 2 评论
   期望是"暂停"而非"kill"，否则长任务（多 agent 流水线）会被浪费。👉 [链接](https://github.com/anthropics/claude-code/issues/98299)

9. **#100973 [OPEN] [bug, macOS desktop] 撤回/编辑消息会杀光所有后台任务（包括撤回点之前的）** — 0 评论（今日新建）
   终端版 rewind 不杀，desktop 版却会——一个明显的功能/一致性回归。👉 [链接](https://github.com/anthropics/claude-code/issues/100973)

10. **#100969 [OPEN] [bug, regression, Windows Server 2022] Claude Code 启动挂死、无输出、占 1 核 CPU** — 0 评论（今日新建）
    即便 `CLAUDE_CONFIG_DIR` 干净也复现，回归风险高。👉 [链接](https://github.com/anthropics/claude-code/issues/100969)

> 另：今日创建的多条 **#100976 / #100972 / #100971 / #100970 / #100968** 值得关注——它们均标注 "Filed by Claude Code itself (claude-opus-5-5)"，即用户给 Opus 5.5 下了"每次违反流程必须自报"的指令。这类"agent 自我报告"机制代表了一种新的合规/QA 实践样本。

---

## 重要 PR 进展（仅 Top 10，昨日新变更）

> 昨日仅 2 条 PR 出现变更，故全部列出：

1. **#41447 [OPEN] feat: open source claude code ✨** — `@gameroman` 提出
   长期未合并的"开源 Claude Code"提案，关联关闭了 #59 / #456 / #2846 / #22002 / #41434。仍处于 Open 状态，反映开源诉求仍在持续。👉 [链接](https://github.com/anthropics/claude-code/pull/41447)

2. **#100293 [CLOSED] Add a HIPAA settings example** — `@sarahdeaton`
   新增 `examples/settings/` 中的 HIPAA 合规示例（`settings-hipaa.json`、`managed-mcp-hipaa.json`、`README-hipaa.md`），帮助企业在 HIPAA 场景下限制会话内容外发能力。已关闭，预计合并入主干。👉 [链接](https://github.com/anthropics/claude-code/pull/100293)

> ⚠️ 今日 PR 更新量极少（2 条），建议补充关注主干提交以观察 v2.1.296 后的常规修复节奏。

---

## 功能需求趋势

从今日活跃 Issue 中提炼的社区诉求：

- **🔌 插件化与可扩展（Hooks / Mods）**：#91870 一骑绝尘，社区在等"Mods"标准化、Test API 与时间预算控制（参见 #100978）。这是当前最强烈的方向。
- **🖥️ Desktop 体验升级**：文件型组织、Browser pane 不强制关闭、pane 输入焦点、`/auto-mode-setup` 误触发等多达 5+ Issues 集中在 Desktop。
- **📋 更丰富的会话/产物形态**：Discussion mode（#85848）、会话持久恢复（#94063 Ctrl+S 暂存跨会话）、on-demand 上下文查询（#100967）。
- **🛡️ 合规与企业级配置**：HIPAA 示例 PR（#100293）、CVP 区域身份验证（#89566）。
- **🧠 模型行为透明度**：用户开始主动让 agent 自陈流程违规（#100976 等 5 条），反映对 **可解释 / 可审计** 的需求上升。
- **💸 计费与认证**：OAuth 切换后 `/usage` 面板破损（#99804）触发对鉴权路径回归的关注。

---

## 开发者关注点（高频痛点）

1. **TUI 长输入/粘贴静默截断** —— 已成 P0 级别社区声音，覆盖 macOS / Linux / WSL / Warp：
   - #74004、#90910、#92118、#99252（粘贴块"折叠 + 不可恢复"）、#94063（Ctrl+S 暂存跨会话缺失）。
   反映：TUI 层缺乏"输入是否被截断"的回显与恢复机制。

2. **后台任务 / 长 agent 流程被误杀或丢失** —— #78674（Linux PSI 误杀）、#98299（5 小时上限 kill agent）、#100973（Desktop 编辑消息杀光后台）、#100106（自动更新断 Remote Control）。
   反映："长任务可靠性"成为企业/工程团队落地的关键阻碍。

3. **Desktop ≠ Terminal 行为一致性** —— #100973、#100974（auto-mode 提示仅终端可见）、#100975（Browser pane 30 分钟强制关闭）等显示 Desktop 与 CLI 平行演化已经"分叉"，需要回归对齐。

4. **安全分类器误报** —— #100965、#100964 报告在合法安全/认证文档场景下被 `[cyber]` 标记为违规，影响合规与安全研究用户体验。

5. **模型自陈报告机制兴起** —— 5 条 claude-opus-5-5 自报问题提示开发者社区正在把 agent 自身纳入到"流程违规 → 自动上报"的 CI-like 回路。

---

*本日报由社区数据自动汇总，关键 Issue 已附 GitHub 链接，便于追溯。*

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

<think>The user wants me to generate a Chinese daily report about OpenAI Codex community dynamics for 2026-10-10 based on GitHub data. Let me analyze the data carefully and structure the report according to the requested sections.

Let me go through the data:

**Releases:**
1. rust-v0.162.1 - Bug fixes for TUI crash with multi-line async questions and startup failures from feature setting mismatches
2. rust-v0.163.0-alpha.5 - Alpha release
3. rust-v0.163.0-alpha.4 - Alpha release

**Top Issues by comments:**
1. #11626 - /rewind checkpoint restore for chat context and code edits (48 comments, 227 👍)
2. #25319 - Scope VS Code chats to current workspace (43 comments, 106 👍)
3. #49731 - Windows WSL "Failed to create unified exec process" (34 comments)
4. #40060 - Windows execpolicy false positive with Start-Process (30 comments)
5. #35446 - Windows 10 Computer Use deadlock (19 comments)
6. #49753 - Dot creates Codex tasks with mixed Linux/Windows paths (13 comments)
7. #42412 - ChatGPT/Codex Desktop Windows startup failure (10 comments)
8. #52776 - Highwatch Builder stalls on desktop-control (7 comments)
9. #52394 - server_overloaded errors despite 70% usage (7 comments)
10. #48490 - Cross-device conversation sync stale (6 comments)
11. #50884 - Windows exec_command blocked by policy (6 comments)
12. #49961 - Repeated early compaction in GPT-6.1 Sol and Astra (5 comments)
13. #50749 - Windows Computer Use Notepad capture timeout (5 comments)
14. #45868 - macOS in-app browser hangs (5 comments)
15. #37473 - False-positive cyber_policy (5 comments)
16. #41977 - macOS Chromium native host duplicates (3 comments)
17. #47531 - Auto commit message generation fails (3 comments)
18. #23441 - Colab MCP only exposes one tool (3 comments)
19. #30873 - Windows Codex App crashes after legacy_notify (3 comments)
20. #51659 - Windows browser/CUA fails with header policy (3 comments)
21. #52465 - Selected model at capacity (3 comments)
22. #49022 - Active Goal lost after context compaction (3 comments)
23. #52483 - macOS "More details" missing (3 comments)
24. #52437 - Unable to load workspace settings (3 comments)
25. #28990 - macOS 12 Remote Control authorization fails (2 comments)
26. #49520 - macOS "Failed to restore conversation" (2 comments)
27. #52773 - S3 storage blocked by safety checks (2 comments)
28. #51915 - macOS Dock badge persists (2 comments)
29. #52790 - Windows workspace settings Cloudflare challenge (1 comment)
30. #51983 - Message Bookmarks feature request (1 comment)

**Top PRs:**
All PRs are from copyberry[bot] and most are CLOSED. Let me pick the most notable ones:
1. #52778 - Make pinned transcript prompts clickable
2. #52756 - Classify voice session failures
3. #52748 - Make code-mode exit() stop entire cell
4. #52742 - Add opt-in output token replay for OpenAI requests
5. #52736 - Allow model catalogs to override incremental tool notices
6. #52725 - Report terminal program status with OSC 7501
7. #52724 - Add observers for initial exec-server connection attempts
8. #52723 - Add opt-in gRPC over stdio for code-mode host
9. #52721 - Explain session creation failures during server shutdown
10. #52707 - Migrate Windows MXC sandbox to split MXC crates
11. #52702 - Retry bootstrap GETs through system proxy
12. #52700 - Update exec-server stable compatibility baseline to 0.162.1
13. #52696 - Fix marketplace path matching for Windows junctions
14. #52689 - Forward per-turn Cyber access programs to Guardian
15. #52686 - Add opt-in retention for turn tool outputs
16. #52685 - Preserve code mode cancellation during output serialization
17. #52682 - Validate Windows sandbox accounts before password repair
18. #52681 - Reject reserved Serde JSON keys in code mode
19. #52679 - Add timeout-aware exec-server configuration reads
20. #52676 - Refresh persisted capability roots from owner-provided configuration

Now let me identify feature request trends:
- IDE integration (VS Code workspace scoping)
- Rewind/checkpoint functionality
- Cross-device sync
- Computer use reliability on Windows
- Workspace settings/Cloudflare connectivity
- Capacity/rate limiting issues
- Model context compaction

Developer pain points:
- Windows-specific bugs dominate (WSL, Computer Use, exec-server, sandbox, startup)
- Cross-platform path handling issues
- Capacity/rate limiting despite available capacity
- False-positive safety checks
- Session sync staleness

Let me write the report now in Chinese.</think>

# OpenAI Codex 社区动态日报
**日期：2026-10-10**

---

## 📌 今日速览

今日 Codex 发布了 **rust-v0.162.1 稳定版**，修复了 TUI 多行异步问题崩溃和后台服务启动兼容性问题；同步推进了 0.163.0 的两个 alpha 迭代（alpha.4 / alpha.5）。社区侧，Windows 平台的 Computer Use、WSL 执行与沙箱问题依旧是高频痛点（多条 issue 评论数 ≥ 10），而「`/rewind` 检查点恢复工作区代码变更」与「VS Code 会话按 workspace 隔离」两大长期 enhancement 持续吸引高互动（👍 227 / 106）。

---

## 🚀 版本发布

### rust-v0.162.1（稳定版）
**关键修复：**
- **TUI 崩溃修复**：异步问题含多行内容时保留换行与完整超链接目标，避免 UI 崩溃（[#51866](https://github.com/openai/codex/pull/51866)）
- **启动兼容性**：修复后台服务特性开关与 CLI 默认值不一致导致的启动失败

### rust-v0.163.0-alpha.5 / alpha.4
0.163.0 持续迭代，本次未提供详细 changelog，建议关注 alpha 频道稳定性。

---

## 🔥 社区热点 Issues

| # | Issue | 热度 | 核心内容 |
|---|-------|------|---------|
| 1 | [#11626](https://github.com/openai/codex/issues/11626) `/rewind` 检查点恢复同时回退对话 + 工作区代码 | 👍 227 / 💬 48 | 当前 Esc rewind 仅回滚对话，无法撤销 Codex 已应用的代码修改，开发者强烈期望统一检查点 |
| 2 | [#25319](https://github.com/openai/codex/issues/25319) VS Code 扩展按当前 workspace 隔离会话 | 👍 106 / 💬 43 | 多个项目切换时历史会话互相干扰，亟需按工程根目录隔离 thread |
| 3 | [#49731](https://github.com/openai/codex/issues/49731) Windows WSL agent 执行全部失败（unified exec process No such file/directory） | 💬 34 | Windows exec-server 删除了 arg0 helper 目录，所有命令瘫痪 |
| 4 | [#40060](https://github.com/openai/codex/issues/40060) Windows execpolicy 对 Start-Process + URL 误报 | 💬 30 | PowerShell 脚本中只要同时出现 Start-Process 与无关 URL 就被拦截，影响范围广 |
| 5 | [#35446](https://github.com/openai/codex/issues/35446) Windows 10 Computer Use 在 FrameArrived 中死锁 | 💬 19 | SoftwareBitmap 转换挂起，Computer Use 在 Win10 完全不可用 |
| 6 | [#49753](https://github.com/openai/codex/issues/49753) dot 创建任务混合 Linux/Windows 工作路径 | 💬 13 | 跨平台任务路径不一致导致后续轮次失败 |
| 7 | [#42412](https://github.com/openai/codex/issues/42412) Codex Desktop Windows 自动更新后 `cua_node` 重定位导致启动崩溃 | 💬 10 | MSIX 包升级后 `cua_node` runtime 路径变更，应用无法启动 |
| 8 | [#52776](https://github.com/openai/codex/issues/52776) ChatGPT Work / Windows Highwatch Builder 在桌面控制限制上卡死 | 💬 7 | 长任务中途拒绝执行先前可用的辅助脚本，且无法分叉会话 |
| 9 | [#52394](https://github.com/openai/codex/issues/52394) Windows 长任务频繁 `server_overloaded`，实际余量约 70% | 💬 7 | 容量统计/实际可用性不一致，切换模型只能短暂恢复 |
| 10 | [#48490](https://github.com/openai/codex/issues/48490) 跨设备会话同步停滞（iPhone 继续，Windows/web 卡死） | 💬 6 | 会话版本号未推进，stale 客户端会隐藏更新内容 |

**选评**：本日互动最高的 issue 反映出三个核心矛盾——**回滚/撤销粒度不足**、**VS Code 多工程隔离缺失**、**Windows 平台稳定性系统性薄弱**（WSL、Computer Use、exec-server、沙箱 4 个子系统同时出现重大 bug）。

---

## 🛠 重要 PR 进展

| # | PR | 主题 | 价值 |
|---|----|------|------|
| 1 | [#52778](https://github.com/openai/codex/pull/52778) 点击 pinned 转写 prompt 直接定位原文 | UX 增强 | 左键点击固定 prompt 即可滚动到原始位置并清理选择/搜索状态 |
| 2 | [#52748](https://github.com/openai/codex/pull/52748) code-mode `exit()` 终止整个 cell | 安全/语义 | 避免 `exit()` 被 `catch`/`finally`/Promise 队列绕过，确保 cell 干净结束 |
| 3 | [#52742](https://github.com/openai/codex/pull/52742) 为 OpenAI 请求新增 opt-in 输出 token replay | 新能力 | 默认关闭的 `output_token_replay` 特性，支持请求 `output.encrypted_content`，保留加密消息/工具状态 |
| 4 | [#52736](https://github.com/openai/codex/pull/52736) 模型目录可覆盖增量工具提示 | 国际化/可定制 | `model_messages.tools.incremental_tools` 支持自定义 update/removal header，>512B 自动回落 |
| 5 | [#52725](https://github.com/openai/codex/pull/52725) 通过 OSC 7501 上报终端程序状态 | 生态兼容 | 在 stdout 为终端时发出 `idle/working/blocked`，让 iTerm2 之外的其他终端也能感知 Codex 状态 |
| 6 | [#52723](https://github.com/openai/codex/pull/52723) code-mode host 新增 opt-in gRPC over stdio | 新传输 | 默认关闭 `code_mode_host_grpc`，支持 `grpc+stdio://`，共享 HTTP/2 channel |
| 7 | [#52721](https://github.com/openai/codex/pull/52721) 服务关闭期间结构化拒绝新会话 | 可观测性 | 返回 `serverShuttingDown` 原因，command center 可展示暂停说明 |
| 8 | [#52707](https://github.com/openai/codex/pull/52707) Windows MXC 沙箱迁移到拆分 crate | 平台兼容 | 替换 `mxc-sdk`，处理 PSEC API 存在但 MXC 未启用的过渡构建 |
| 9 | [#52686](https://github.com/openai/codex/pull/52686) turn 工具输出新增 opt-in retention | 上下文控制 | `TurnToolOutput.retain` 为 `true` 时，请求把输出留在 thread 模型历史中 |
| 10 | [#52700](https://github.com/openai/codex/pull/52700) exec-server 稳定版基线升至 Codex 0.162.1 | 配套发布 | Bazel 归档/checksum/repo 全部对齐 0.162.1，与稳定版同步 |

**整体观察**：今日 PR 集中在三条主线 ——**code-mode 沙箱化**（取消语义、`RawValue` 拒绝、保留取消）、**终端/TUI 生态**（OSC 7501、pinned prompt 跳转、增量工具提示可覆盖）、**OpenAI 协议增强**（encrypted_content、turn retention、Cyber access program 透传）。

---

## 📈 功能需求趋势

从过去 24 小时的 enhancement / bug 分布提炼：

1. **会话/工程上下文管理**（热度最高）
   - `/rewind` 工作区级回滚（#11626）
   - VS Code workspace 级 thread 隔离（#25319）
   - 长会话中的 Message Bookmarks / 跟进收件箱（#51983）
   - 长会话的 Active Goal 在 compaction 后丢失（#49022）

2. **Windows 平台可靠性**（数量最多、影响面最大）
   - Computer Use：Win10 FrameArrived 死锁、Notepad 截图超时、browser CUA header policy 失败
   - WSL/沙箱：unified exec process 路径被删、execpolicy 误报、MXC 迁移
   - 启动/更新：cua_node 重定位崩溃、workspace settings Cloudflare 403

3. **服务容量与稳定性**
   - `server_overloaded` 与实际余量不一致（#52394、#52465）
   - 跨设备会话同步 stale（#48490）

4. **协议/能力扩展**
   - 输出 token 加密回放（#52742）
   - turn 输出 retention（#52686）
   - gRPC over stdio code-mode host（#52723）

5. **安全策略精度**
   - 多起 cyber_policy / safety-check 误报（#37473、#52773、#50884），开发者期待可解释、可申诉

---

## 🧑‍💻 开发者关注点

综合 30 条高互动 issue 与 PR，开发者社区当前最强烈的反馈集中在以下几点：

- **「撤销」语义不完整**：Esc rewind 只能回滚对话、不能回滚代码，这与「Codex 已经替你改了一堆文件」的日常体验严重冲突，是当前呼声最高的 enhancement（👍 227）。
- **Windows = 二等公民**：今天更新的 30 条 issue 中，**Windows 标签占比超过 60%**，集中在 Computer Use、WSL agent、沙箱、自动更新四个子系统；多条 bug 已在多个版本上复现却仍未修复（#40060、#51659 等跨 ~10 个更新仍存在）。
- **可靠性指标与体验脱节**：容量面板显示充足但任务仍报 `at capacity`，CLI 内部 token 计数与上报使用量不一致（#49961），跨设备同步版本号停滞（#48490）——开发者对"可观测性"的诉求正在超越"功能丰富度"。
- **安全策略的"可解释性"**：多条 cyber_policy / sandbox policy 误报都伴随着"没有任何 actionable 提示"的吐槽，#50884 直接将 `blocked by policy` 称为"无信息量的拒绝"。
- **code-mode 想"做正经运行时"**：PR #52748 / #52685 / #52681 / #52723 集中处理 exit 语义、取消传播、Serde 注入、gRPC 传输——code-mode 正在从实验特性走向可信任的子运行时。
- **VS Code 扩展的产品化诉求**：除了 workspace 隔离，社区对会话历史、跨设备协同的预期明显在向"IDE 一等公民"靠拢。

---

*日报基于 GitHub `openai/codex` 仓库过去 24 小时数据生成。*

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

<think>Let me analyze the GitHub data for Gemini CLI and generate a comprehensive daily report for 2026-10-10. I need to carefully review:

1. New releases: v0.65.0-nightly.20261010.g9b6e0265d and v0.64.0-preview.1
2. Latest issues (30 most commented)
3. Latest PRs (20 most commented)

Let me organize this into the required sections in Chinese.

Key observations:
- Two releases today: nightly v0.65.0 and preview v0.64.0-preview.1 (a patch)
- The nightly version mainly has two fixes: JSON parse error handling and line terminator preservation
- Preview version is a cherry-pick of a security fix for false positives in untrusted command flags
- Most issues revolve around agent-related bugs (subagent recovery, browser agent, etc.)
- Common themes: agent reliability, tool error handling, security false positives, performance

Let me draft the report.</think>

# Gemini CLI 社区动态日报 · 2026-10-10

---

## 📌 今日速览

Gemini CLI 今日发布了 **v0.65.0 nightly** 和 **v0.64.0-preview.1 补丁版**，后者修复了安全检测中"误报"命令行 flag 与复合循环的问题；与此同时，社区反馈集中在 **Agent 稳定性** 上，多个高优 issue 反映 subagent 在 `MAX_TURNS` 达到后误报成功、generalist agent 永久卡死、浏览器子代理在 Wayland 环境下失败等问题。

---

## 🚀 版本发布

### v0.65.0-nightly.20261010.g9b6e0265d（Nightly）
- **fix(cli)**: `fetchJson` 中增加 JSON 解析与响应流错误处理（[#29658](https://github.com/google-gemini/gemini-cli/pull/29658)）
- **fix(core)**: `truncateString` 中保留行终止符 `\n`（[#29673](https://github.com/google-gemini/gemini-cli/pull/29673)）

### v0.64.0-preview.1（Preview 补丁）
- **fix(core)**: 消除 `untrustedContextTracker` 中针对无害 POSIX 命令（`ls -ld`、`grep -rn`、`git status` 等）和复合循环的误报安全告警（[#29672](https://github.com/google-gemini/gemini-cli/pull/29672)）— 这是一个社区期待已久的修复，避免简单命令被强制进入确认流程。

---

## 🔥 社区热点 Issues（Top 10）

| # | Issue | 重要性 | 评论 |
|---|-------|--------|------|
| [#22323](https://github.com/google-gemini/gemini-cli/issues/22323) | Subagent 在 `MAX_TURNS` 后仍报 `GOAL success`，掩盖了中断事实 | **P1**：状态上报错误让用户以为子代理成功完成，掩盖了真实的失败路径，影响可信度与可观测性 | 13 |
| [#21409](https://github.com/google-gemini/gemini-cli/issues/21409) | Generalist agent 永久挂起（最长 1 小时），连简单文件夹创建也无法完成 | **P1**：影响所有使用 generalist agent 委派任务的用户，⏎ 0 赞 8 的反差显示问题广但易被低估 | 8 |
| [#19873](https://github.com/google-gemini/gemini-cli/issues/19873) | 利用 Gemini 3 模型的 bash 亲和性，通过零依赖 OS 沙箱 + 执行后意图路由 | **P2**：这是大型增强方向，目标是让模型原生使用 POSIX 工具链（grep/cat/sed/awk），同时不牺牲安全性 | 9 |
| [#22745](https://github.com/google-gemini/gemini-cli/issues/22745) | 评估 AST 感知的文件读取、搜索与映射的影响（EPIC） | **P2**：当前 token 基线约 36.6k/turn，AST 工具能精准切片、降低 context bloat | 7 |
| [#21968](https://github.com/google-gemini/gemini-cli/issues/21968) | Gemini 几乎不使用自定义 skills 与 sub-agents，必须显式提示才调用 | **P2**：揭示了模型对自描述能力（gradle、git 等 skills）的自发调用率过低，影响产品"开箱即用"体验 | 7 |
| [#22267](https://github.com/google-gemini/gemini-cli/issues/22267) | Browser Agent 完全忽略 `settings.json` 中的 `maxTurns` 等覆盖项 | **P2**：配置失效是用户最难定位的故障之一，AgentRegistry 合并逻辑存在缺陷 | 4 |
| [#22232](https://github.com/google-gemini/gemini-cli/issues/22232) | 增强 `browser_agent` 韧性：会话接管与锁恢复 | **P3**：当前 BrowserManager 是 fail-fast 策略，profile 锁定时整个会话崩溃 | 4 |
| [#21983](https://github.com/google-gemini/gemini-cli/issues/21983) | browser subagent 在 Wayland 下失败 | **P1**：Linux 桌面用户被直接阻断，影响发行版覆盖度 | 4 |
| [#20079](https://github.com/google-gemini/gemini-cli/issues/20079) | `~/.gemini/agents/` 中的符号链接不被识别为子代理 | **P2**：阻断了使用 dotfiles 仓库管理 agent 的常见工作流 | 4 |
| [#23571](https://github.com/google-gemini/gemini-cli/issues/23571) | 模型在随机位置创建临时脚本，工作区清理负担大 | **P2**：突显"沙箱写路径约束"缺失，需要把模型写出路径限定到受控目录 | 3 |

---

## 🛠️ 重要 PR 进展（Top 10）

| PR | 标题 | 关键内容 |
|----|------|---------|
| [#29672](https://github.com/google-gemini/gemini-cli/pull/29672) | fix(core): 消除 untrusted 命令 flag 与复合循环的误报 | 修复 `untrustedContextTracker` 的 shell 变量展开和过度索引问题，避免 `ls -ld`/`grep -rn`/`git status` 等无害命令触发阻断（已 cherry-pick 到 preview） |
| [#29608](https://github.com/google-gemini/gemini-cli/pull/29608) | fix(core): 30 秒超时挂起的 web 搜索 | 为 `GoogleSearch`/`WebFetch` 加上独立超时，避免 LLM 调用永不结束导致的 30+ 分钟永久 "Thinking..." 状态 |
| [#29703](https://github.com/google-gemini/gemini-cli/pull/29703) | fix(core): 原子写入临时文件名限制在 NAME_MAX 内 | 215-255 字节文件名因附加 41 字节 `.uuid.tmp` 触发 `ENAMETOOLONG`，现在会做长度收敛 |
| [#29611](https://github.com/google-gemini/gemini-cli/pull/29611) | fix(core): 为带点的 Gemini 3 模型及别名支持多模态 function response | 修复 `gemini-3.8-flash` 等模型下 `read_file` 返回图片被错误地作为 sibling part 发出导致的 HTTP 400 |
| [#29476](https://github.com/google-gemini/gemini-cli/pull/29476) | fix(cli): 解决 IDE 集成下 Enter 按键无响应的卡死 | 在工具确认提示中，把用户确认事件发布与 IDE 集成解耦（已合并） |
| [#29582](https://github.com/google-gemini/gemini-cli/pull/29582) | perf(core): 优化 ignore 过滤并启用子树剪枝 | 引入分层目录级 memoization、通配符目录模式展开、symlink/realpath 缓存，大仓库延迟从秒级降到毫秒级（已合并） |
| [#29606](https://github.com/google-gemini/gemini-cli/pull/29606) | fix(core): 自定义头只在合法 RFC 9110 token 前才拆分 | 修复 JSON 元数据（如 `x-portkey-metadata: {"_user":"alice"...}`）被错误切分的 bug |
| [#29607](https://github.com/google-gemini/gemini-cli/pull/29607) | fix(scripts): nightly eval 无报告时直接失败 | 防止"matrix legs 全失败且无 report.json"被静默通过（continue-on-error 漏洞修复） |
| [#29505](https://github.com/google-gemini/gemini-cli/pull/29505) | fix: 支持 rootless Podman 配合 keep-id | 修复 rootless Podman 沙箱启动失败的问题，保留宿主 UID/GID（已关闭，可能需要重新提交） |
| [#29644](https://github.com/google-gemini/gemini-cli/pull/29644) | fix(cli): 恢复终端宽度变化时的 debounced 静态 UI 刷新 | 使用 100ms 防抖避免水平 resize 抖动，恢复 inline 模式体验 |

---

## 📈 功能需求趋势

从 Issue 池提炼的高频方向：

1. **Agent 自我认知与可观测性** — Subagent trajectory 通过 `/chat share` 可见（#22598）、`/bug` 报告包含子代理上下文（#21763）、Self-Awareness：准确 CLI flags/hotkeys（#21432）
2. **AST 感知的代码操作工具链** — 多条围绕 AST-grep / Glyph / Tilth 的探索（#22745、#22746、#22747），目标是减少 36.6k/turn 的 context bloat
3. **Subagent 并行化与共享记忆** — 共享内存/并行协作（#18287）、被阻塞的早期 sprint（#20195）
4. **Sandbox & 安全精细化** — 零依赖 OS 沙箱（#19873）、按工作区的策略（#18397）、阻止破坏性操作（#22672）
5. **性能与终端体验** — Resize 无闪烁（#21924）、临时文件位置收敛（#23571 + #29703）、rootless Podman 支持（#29505）
6. **多模型兼容** — Gemini 3 多模态 function response 别名解析（#29611）、自定义头兼容性（#29606）
7. **浏览器代理韧性** — Wayland 支持（#21983）、session 接管与锁恢复（#22232）、settings 覆盖生效（#22267）

---

## 💬 开发者关注点

社区反馈集中在以下痛点：

- **Agent 透明性严重不足**：用户无法看到 subagent 内部发生了什么、为什么提前结束、是否真的成功。这直接拉高了调试成本。
- **"无害命令"的误报安全阻断**：`ls`、`grep`、`git status` 这些日常命令被无差别拦截，被多人吐槽——PR #29672 是近期最受欢迎的安全修复之一。
- **Skills/Subagents 自发调用率低**：开发者期望"开箱即用"，但模型几乎不会主动加载自定义 skill/subagent，必须显式 prompt 才能触发（#21968）。
- **沙箱体验分裂**：rootless Podman、Wayland、符号链接 agent 等"边角"场景缺乏覆盖，影响 Linux 桌面用户的首日体验。
- **WebFetch/WebSearch 永久挂死**：没有独立于 LLM stream 的超时机制，让 agent 卡在 "Thinking..."，是开发者最担心的可靠性问题之一（已在 #29608 修复）。
- **工具数量膨胀触发 400**：当启用 >128 个工具时即触发 API 错误（#24246），期望 agent 能"在 scoped context 中裁剪工具列表"。

---

*数据来源：[google-gemini/gemini-cli](https://github.com/google-gemini/gemini-cli) · 统计窗口：过去 24 小时*

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

<think>The user wants me to generate a Chinese-language daily report for GitHub Copilot CLI based on the provided data. Let me analyze the data carefully:

**Releases (past 24 hours):**
- v1.0.96-2 (Fixed: model IDs case-insensitive in /model and /config)
- v1.0.96-1 (Added: Interactive sandbox settings suggest environment secrets, masking hosts)
- v1.0.96-0 (Improved: git repos reach input prompt faster, timeline shows permission decision sources; Fixed: /add-dir grants sandbox access, /user)
- v1.0.95 (2026-10-09) - native Microsoft Entra broker on macOS, sandbox credential injectHosts, --context for new/resumed ACP
- v1.0.95-3 (fixes)

**Issues (43 total, top 30 shown):**
Most commented:
1. #4313 (9 comments) - Scrolling through conversation history [CLOSED]
2. #3355 (5 comments) - Configurable context window for Claude Opus 4.6 [CLOSED]
3. #4686 (4 comments) - Node.js OOM crash after 37 min [OPEN]
4. #5076 (4 comments) - /add-dir not adding to sandbox allow list [CLOSED]
5. #3035 (3 comments) - Tool-callable cwd [OPEN]
6. #2536 (3 comments) - Atlassian MCP needs auth every invocation [OPEN]
7. #3081 (2 comments) - NixOS keychain support broken [OPEN]
8. #939 (2 comments) - Slash command tab completion [CLOSED]
9. #4565 (2 comments) - App configuration problems [CLOSED]
10. #4633 (1 comment) - view tool rejects normal 8.6 KB file [OPEN]
11. #3535 (1 comment) - Windows Ramdisk [OPEN]
12. #5101 (1 comment) - --add-github-mcp-tool issue_write [OPEN]
13. #5098 (1 comment) - sessionStart hook stops running [OPEN]
14. #3052 (1 comment) - --add-github-mcp-tool=create_pull_request readonly [OPEN]
15. #3403 (1 comment) - Hooks not preserved [CLOSED]
16. #3249 (1 comment) - Edit tools diffs messy [CLOSED]
17. #2535 (1 comment) - Show timestamps [CLOSED]
18. #2311 (1 comment) - /restart mode [CLOSED]
19. #4516 (1 comment) - Sandbox RW path grants not honored by JVM [OPEN]
20. #5094 (1 comment) - Desktop app Windows git [OPEN]
21. #5091 (1 comment) - Session queues all prompts, MCP reconnect loop [OPEN]
22. #5108 (0 comments) - ACP session/list slow
23. #5107 (0 comments) - HOME override triggers script_action_changed
24. #5105 (0 comments) - macOS sandbox blocks Gradle
25. #5090 (0 comments) - Boot experience
26. #5104 (0 comments) - Move chat into project
27. #5103 (0 comments) - BYOK sub-agents wire API
28. #5102 (0 comments) - Sandboxed git credential
29. #5100 (0 comments) - Session event delivery timeout
30. #5099 (0 comments) - Display-only hook

**PRs:** Only 1 PR in past 24 hours
- #5106 - Create index.html (likely spam/test)

Now I need to write a Chinese report. Note that the user is asking for a report dated 2026-10-10, so I should treat this as the current date. The data shows the most recent issues from 2026-10-09 and 2026-10-10.

Since there are only 1 PR, I should note that PR activity is low. Let me organize the report:

1. **今日速览** - summarize
2. **版本发布** - v1.0.96 series
3. **社区热点 Issues** - top 10 by importance/comment count
4. **重要 PR 进展** - only 1 PR, mention the situation
5. **功能需求趋势** - identify themes
6. **开发者关注点** - common pain points

Let me draft the report now. I need to be concise and professional, suitable for technical developers. Each entry should include GitHub links.

I should note that PRs are very few (only 1, and it looks like a test/spam PR). I'll be honest about this in the report.

Let me write it out in Chinese.</think>

# GitHub Copilot CLI 社区动态日报
**2026-10-10**

---

## 一、今日速览

今日 Copilot CLI 进入 **v1.0.96** 迭代节奏，沙箱配置交互、模型 ID 容错、权限决策溯源等体验持续打磨；社区侧 Issue 数量活跃（过去 24 小时更新 43 条），但 PR 端近乎停滞（仅 1 条提交，且为可疑的 index.html 提交），开发者反馈集中在**沙箱权限、模型上下文配置、MCP 集成稳定性**三大方向。

---

## 二、版本发布

过去 24 小时集中发布了 v1.0.95 与 v1.0.96 系列共 5 个迭代版本：

### v1.0.96-2（最新）
- **修复**：`/model` 与 `/config` 中的模型 ID 改为大小写不敏感，并保存规范化 ID。

### v1.0.96-1
- **新增**：交互式沙箱设置可推测环境变量中的密钥，并允许用户在保存前添加 masking hosts。
- **修复**：企业策略尚未解析完成时，`/allow-all` 在启动期间保持可用。

### v1.0.96-0
- **改进**：Git 仓库内交互式会话进入输入提示更快；时间线现在标注每条权限决策的来源（用户、Assisted Permissions、企业策略或 unattended fallback）。
- **修复**：`/add-dir` 授予沙箱对新增目录的访问权限（修复合并 [#5076](https://github.com/github/copilot-cli/issues/5076)）。

### v1.0.95（2026-10-09）
- macOS 上优先使用原生 Microsoft Entra broker 认证，浏览器兜底。
- `copilot config` 支持沙箱 credential `injectHosts`，Bash/Zsh/Fish 提供键补全。
- `--context` 现在同时作用于新建和恢复的 ACP 会话。

### v1.0.95-3
- 修复与小改动。

---

## 三、社区热点 Issues

按社区关注度（评论数 × 影响力）排序，挑选 10 条最值得追踪：

| # | Issue | 状态 | 关注度 | 点评 |
|---|-------|------|--------|------|
| 1 | [#4313](https://github.com/github/copilot-cli/issues/4313) 滚动浏览当前会话历史 | 已关闭 | 9 评论 | TUI 长会话导航核心痛点，关闭状态值得跟进 PR 是否落地 |
| 2 | [#3355](https://github.com/github/copilot-cli/issues/3355) Claude Opus 4.6 可配置上下文窗口（200K vs 1M） | 已关闭 | 5 评论 / 👍4 | 上下文窗口硬限是开发者高频诉求，影响深度技术会话 |
| 3 | [#4686](https://github.com/github/copilot-cli/issues/4686) Node.js OOM 崩溃，libuv 句柄泄漏 | 仍开放 | 4 评论 | 严重稳定性问题（SEA 忽略 `NODE_OPTIONS`），约 37 分钟必崩 |
| 4 | [#5076](https://github.com/github/copilot-cli/issues/5076) `/add-dir` 未加入沙箱白名单 | 已关闭 | 4 评论 | 已在 v1.0.96-0 修复 |
| 5 | [#2536](https://github.com/github/copilot-cli/issues/2536) Atlassian MCP 每次调用都要授权 | 仍开放 | 3 评论 / 👍3 | MCP 凭证持久化老大难问题 |
| 6 | [#3081](https://github.com/github/copilot-cli/issues/3081) NixOS keychain 支持失效 | 仍开放 | 2 评论 / 👍3 | Linux 桌面平台兼容性问题 |
| 7 | [#3035](https://github.com/github/copilot-cli/issues/3035) 工具可调用的 `cwd` 命令 | 仍开放 | 3 评论 | 技能/工具互操作能力扩展，呼应 v1.0.96 时间线权限标注思路 |
| 8 | [#4516](https://github.com/github/copilot-cli/issues/4516) JVM 子进程不遵守沙箱 RW 授权 | 仍开放 | 1 评论 | 沙箱与 JVM 生态的兼容性盲区，影响 Maven/Gradle 用户 |
| 9 | [#5091](https://github.com/github/copilot-cli/issues/5091) 会话队列卡死，MCP 反复重连 | 仍开放 | 1 评论 | 会话可用性退化，影响工作流 |
| 10 | [#5108](https://github.com/github/copilot-cli/issues/5108) ACP `session/list` 每次分页都全量扫描 | 仍开放 | 0 评论（新） | 大会话库下性能急剧恶化，未来编辑器集成隐患 |

---

## 四、重要 PR 进展

> ⚠️ **PR 端异常冷清**：过去 24 小时仅 [#5106](https://github.com/github/copilot-cli/pull/5106) 一条提交（创建 index.html，疑似测试/垃圾提交）。

社区活跃贡献度几乎归零，建议官方关注是否有 CI、CLA 或贡献者引导问题阻碍 PR 流入。对比 Issue 的高活跃度，这种"提 Issue 多、合 PR 少"的失衡值得关注。

---

## 五、功能需求趋势

从 30 条热门 Issue 提炼出五大社区关注方向：

1. **🧠 模型能力扩展**：Claude Opus 4.6 1M 上下文窗口开启（[#3355](https://github.com/github/copilot-cli/issues/3355)）；BYOK 子代理跨模型族共用 Wire API 失败（[#5103](https://github.com/github/copilot-cli/issues/5103)）——大型模型与多模型编排是核心。

2. **🛡️ 沙箱权限与跨进程语义**：沙箱 RW 授权不传导至 JVM（[#4516](https://github.com/github/copilot-cli/issues/4516)）、macOS 阻断 Gradle daemon（[#5105](https://github.com/github/copilot-cli/issues/5105)）、Windows Ramdisk 不可访问（[#3535](https://github.com/github/copilot-cli/issues/3535)）、沙箱内 Git 凭证身份锁定（[#5102](https://github.com/github/copilot-cli/issues/5102)）——沙箱成为新一轮体验瓶颈。

3. **🔌 MCP 集成稳定性**：GitHub MCP `issue_write` 让所有工具消失（[#5101](https://github.com/github/copilot-cli/issues/5101)）、`create_pull_request` 落到只读端点（[#3052](https://github.com/github/copilot-cli/issues/3052)）、Atlassian MCP 反复要求授权（[#2536](https://github.com/github/copilot-cli/issues/2536)）、会话内 MCP 重连风暴（[#5091](https://github.com/github/copilot-cli/issues/5091)）。

4. **🎨 TUI/UX 打磨**：会话时间戳（[#2535](https://github.com/github/copilot-cli/issues/2535)）、滚动浏览历史（[#4313](https://github.com/github/copilot-cli/issues/4313)）、编辑 diff 行序混乱（[#3249](https://github.com/github/copilot-cli/issues/3249)）、斜杠命令 Tab 补全（[#939](https://github.com/github/copilot-cli/issues/939)）、启动时 MCP/插件同步阻塞（[#5090](https://github.com/github/copilot-cli/issues/5090)）。

5. **🪝 Hooks 与扩展性**：配置 Hooks 不持久化（[#3403](https://github.com/github/copilot-cli/issues/3403)）、`sessionStart` Hook 在添加沙箱策略后失效（[#5098](https://github.com/github/copilot-cli/issues/5098)）、"展示专用"Hook 让用户看真实值但模型看脱敏值（[#5099](https://github.com/github/copilot-cli/issues/5099)）。

---

## 六、开发者关注点

**高频痛点：**

- **崩溃与内存**：长会话 libuv 句柄泄漏（[#4686](https://github.com/github/copilot-cli/issues/4686)）；会话事件 120s 超时后永久失效（[#5100](https://github.com/github/copilot-cli/issues/5100)）。
- **跨平台认证**：NixOS 密钥环（[#3081](https://github.com/github/copilot-cli/issues/3081)）、macOS 桌面端 bundled git 调用被拒（[#5094](https://github.com/github/copilot-cli/issues/5094)）。
- **ACP 性能**：会话列表分页每次全表扫描（[#5108](https://github.com/github/copilot-cli/issues/5108)），对编辑器宿主影响极大。
- **文档/预期不符**：`view` 工具对 8.6 KB 文件误判过大（[#4633](https://github.com/github/copilot-cli/issues/4633)）、`HOME` 环境覆盖触发误报（[#5107](https://github.com/github/copilot-cli/issues/5107)）。

**社区情绪信号：** Issue 关闭与版本修复之间形成良性循环（[#5076](https://github.com/github/copilot-cli/issues/5076) → v1.0.96-0、v1.0.95 系列 Entra 认证等），但**沙箱与 MCP**两大新基建仍处于"用户积极试用、边界不断被发现"的磨合期，预计未来一周相关 Issue 数量仍将高位运行。

---

*数据来源：[github.com/github/copilot-cli](https://github.com/github/copilot-cli) ｜ 统计窗口：2026-10-09 ~ 2026-10-10 UTC*

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

<think>The user wants me to generate a daily report for the OpenCode community based on GitHub data from October 10, 2026. Let me analyze the data and create a structured Chinese report.

Key observations from the data:
1. No new releases in the past 24 hours
2. There are many issues around V1→V2 migration bugs
3. Several MCP-related issues (OAuth, authentication)
4. TUI (Terminal UI) related bugs are prominent
5. Web UI project picker issues
6. Permission system bugs
7. Plan mode security issues
8. Many PRs from @potoior around MCP and core fixes

Let me structure this into the required sections and provide a comprehensive analysis.</think>

# OpenCode 社区动态日报

**📅 2026-10-10** | 数据来源: github.com/anomalyco/opencode

---

## 📌 今日速览

OpenCode V2 迁移问题持续发酵：TUI 出现鼠标滚轮延迟、计划模式可绕过确认直接执行 Shell、MCP OAuth 在 v2.0.4 后对 localhost 域名回归，多个高优先级修复 PR 已合入主干。同时社区围绕 Windows 文件选择器、权限校验 Schema 编码、MCP 401 状态机等集中提交了一批修复。

---

## 🚀 版本发布

今日无新版本发布（过去 24 小时）。

---

## 🔥 社区热点 Issues

| # | Issue | 热度 | 核心要点 |
|---|-------|------|---------|
| [#54095](https://github.com/anomalyco/opencode/issues/54095) | API 自签名证书连接失败 | 💬 13 | V1.18.35 在固定网络下无法连接 API，需 Node.js 加 `--use-system-ca`；社区普遍关注企业代理环境兼容性问题 |
| [#30221](https://github.com/anomalyco/opencode/issues/30221) | "terminated" 报错 | 💬 10 · 👍 4 | OpenCode Go 订阅下所有会话无故 `terminated`，直连 API 正常；高关注度的稳定性问题 |
| [#39434](https://github.com/anomalyco/opencode/issues/39434) | "Open project" 无法列出文件夹 | 💬 5 | Web/桌面端"打开项目"对话框始终显示 "No folders found"，根因是 `GET /file` 缺少 `path` 参数 |
| [#54244](https://github.com/anomalyco/opencode/issues/54244) | TUI 余额误判 | 💬 4 | OpenCode Go 活跃订阅下 TUI 新会话报 "Insufficient funds"，但 CLI 正常，疑似前后端配额同步问题 |
| [#53709](https://github.com/anomalyco/opencode/issues/53709) | V1→V2 会话丢失 | 💬 4 | 迁移时未规范化 `session.path`，导致旧会话从 `/sessions` 列表中消失 |
| [#37611](https://github.com/anomalyco/opencode/issues/37611) | Web 项目选择器初始为空 | 💬 4 · 👍 2 | 空查询请求 `/find/file?query=` 返回空集，必须先输入搜索词才能列出目录 |
| [#41453](https://github.com/anomalyco/opencode/issues/41453) | 持久化会话守护进程 | 💬 4 | 提议实现常驻 daemon + 零工具调用记忆回溯，目标减少上下文重建开销 |
| [#43173](https://github.com/anomalyco/opencode/issues/43173) | Windows 盘符项目不可见 | 💬 3 | Web UI 文件选择器锚定 home 目录，无法定位其他盘符下的项目 |
| [#53673](https://github.com/anomalyco/opencode/issues/53673) | Idle 进程空轮询唤醒 | 💬 3 | `Logging.fileLogger` 每秒强制唤醒线程 flush 空日志，显著影响笔记本续航 |
| [#54239](https://github.com/anomalyco/opencode/issues/54239) | Windows TUI 输入延迟回归 | 💬 3 | V2 TUI 鼠标滚轮与窗口拖拽明显卡顿，桌面 GUI 不受影响；性能回归需重点关注 |

---

## 🛠 重要 PR 进展

| # | PR | 作者 | 说明 |
|---|----|------|-----|
| [#54255](https://github.com/anomalyco/opencode/pull/54255) | Console Salesforce 潜客增强 | @Slickstef11 | 区分 Enterprise 询盘与 Console 注册来源、修正 inference spend 字段存储 |
| [#52678](https://github.com/anomalyco/opencode/pull/52678) | 子代理错误向上汇报 | @JerryLiu369 | `finish: "error"` 无显式 `error` 字段时，修复 `TaskTool.runTask` 漏报 parent bug |
| [#54254](https://github.com/anomalyco/opencode/pull/54254) | YAML frontmatter 兼容 | @SeashoreShi | 修复未加引号且以 `[` 开头的 `description` 标量被误判为 flow 序列的问题 |
| [#52887](https://github.com/anomalyco/opencode/pull/52887) | 插件激活顺序修复 | @kikuchan | 在 `generate.text` 前等待插件激活完成，避免 service 重启后首调用失败 |
| [#54090](https://github.com/anomalyco/opencode/pull/54090) | 权限元数据 undefined 清理 | @kitlangton | 去除 glob/grep 权限元数据中 `undefined` 字段，修复 `/api/session/:id/permission` 400 |
| [#53678](https://github.com/anomalyco/opencode/pull/53678) | 生态：billion-context | @ranxianglei | 新增透明上下文压缩网关插件，通过本地代理折叠历史 |
| [#54119](https://github.com/anomalyco/opencode/pull/54119) | Plan mode bash 强制确认 | @potoior | 修复 V2 plan 模式 shell 命令无确认执行的安全漏洞 (#53955) |
| [#54225](https://github.com/anomalyco/opencode/pull/54225) | MCP 401 标记 needs_auth | @potoior | 当 OAuth 刷新后仍 401，将服务器状态置为需重新认证而非持续重试 |
| [#54243](https://github.com/anomalyco/opencode/pull/54243) | 权限 metadata 字段精简 | @potoior | 从 glob/grep permission 元数据中移除缺失的可选字段，修复 schema 编码失败 |
| [#54198](https://github.com/anomalyco/opencode/pull/54198) | Effect 升级 4.0.1 | @kitlangton | 从 RC 升级到稳定版，修复 `Schema.brand` 类型化导致的客户端生成器兼容问题 |

---

## 📈 功能需求趋势

基于过去 24 小时社区话题聚类，当前诉求主要集中在以下方向：

1. **🪟 Windows 桌面体验**：Web UI 文件选择器 (#43173)、TUI 鼠标滚轮回归 (#54239)、盘符搜索 — Windows 用户占比上升，跨平台一致性成焦点。
2. **🔌 MCP 生态成熟度**：OAuth 兼容性 (#54245)、401 重试风暴 (#53942)、Agent Relay 集成 (#54231) — MCP 作为核心扩展点的稳定性被高度关注。
3. **⚡ V2 性能与迁移**：V1→V2 路径规范化 (#53709)、文件树 symlink 缺失、schema 编码失败 — 迁移兼容性是 V2 GA 前的最大风险面。
4. **🧠 新模型与工具链**：xAI x_search 原生支持 (#54168)、Langdock 集成 (#36702) — 社区自发推动供应商覆盖。
5. **🛡 计划与权限安全**：plan 模式绕过确认 (#53955)、pending close 标签下的账单/订阅咨询 (#54063) — 安全默认配置是首要诉求。
6. **♻️ 上下文压缩与记忆**：持久化 daemon (#41453)、Prompt 队列 (#41465)、零工具调用记忆回溯 — 长会话成本管理进入落地阶段。

---

## 💡 开发者关注点

从高赞/高评论议题提炼，开发者社区当前最迫切的痛点：

- **🔐 计划模式安全默认缺失**：plan agent 可不经用户批准执行 shell，是被多个 PR 同时修复的高优 bug，反映出"安全开箱即用"成为体验底线。
- **🧩 MCP 状态机不完整**：401 后既不重认证也不报错，是最常见的"沉默失败"模式，直接打击自动化工作流。
- **📂 fff 文件索引边界**：home 目录、根目录、跨盘符等边界场景下 fff 直接拒绝初始化、且无 ripgrep 回退，是 Web/桌面端一致性的薄弱点。
- **🔁 Schema 严格化副作用**：v2 引入了更严格的 JSON schema 校验，但 `undefined` 可选字段、YAML flow 标量等"模糊合法"输入未做平滑迁移，每次小变更都会暴露一批兼容问题。
- **🖥 TUI 终端性能回归**：V2 的 Terminal 后端在 Windows 上相比 V1 出现可感知延迟，桌面 GUI 不受影响，说明 TUI 渲染层与 GUI 渲染层尚未对齐。
- **📊 计费/订阅反馈链路**：法语用户 #54063、法语 #54063 等"已付款未拿到 Key"的 pending close 工单，提示官方需强化非英语支持与支付后回调自动化。
- **🔄 OpenCode Go 配额同步**：CLI 与 TUI 的配额判断不一致 (#54244)，订阅状态在多端之间缺乏单一可信源。

---

*日报由 AI 自动汇总，仅供参考；详细讨论请前往 [GitHub 仓库](https://github.com/anomalyco/opencode)。*

</details>

<details>
<summary><strong>jcode</strong> — <a href="https://github.com/1jehuang/jcode">1jehuang/jcode</a></summary>

<think>Let me analyze the GitHub data for jcode community and generate a comprehensive daily report in Chinese.

Key observations:
1. v0.93.0 was released with focus on instant startup performance
2. There's a mix of issues - some old, some new (created today 2026-10-09/10)
3. Issues are categorized as: bugs, enhancements, tech-debt, harness API
4. Several CI-related issues indicate quality concerns
5. SDK-related issues about private instances auto-updating and daemon lifecycle

Let me organize:

**Releases:**
- v0.93.0 - Instant startup, 20ms first frame (down from 135ms), 3x faster resume, new post_tool_fe...

**Top Issues to highlight (10):**
1. #692 - CI red: code-size ratchet exceeded (master broken)
2. #547 - master CI is red + Windows-only Python bugs
3. #1177 - Zero-warning budget is Linux-only, 2700+ tests never run
4. #1778 - Harness API: cancellable mid-turn messages (active feedback)
5. #1118 - Protocol: assistant text framing (just closed)
6. #1773 - Windows slash suggestions + skill activation bug
7. #1560 - --provider-profile wrong transport (just closed)
8. #1762 - CI warning gate hides errors (just closed)
9. #1766 - CJK character copy bug (just closed)
10. #1784 - Flaky test in session_picker

**Top PRs (10):**
1. #1785 - menubar streaming icon green
2. #1776 - sdk: stop instance daemon on failure
3. #1777 - sdk: prevent auto-update mid-session
4. #1706 - Ctrl+S in /model picker for swarm
5. #1707 - Restore kitty keyboard protocol on signal exit
6. #1709 - Overview folding widget + memory_effort config
7. #1347 - Stop image blocks breaking text-only models
8. #1783 - macOS kitty detection for Cmd+;
9. #1708 - display.show_tps config
10. #1780 - Elapsed usage display mode

**Trends:**
- SDK stability (private instance lifecycle, daemon management)
- TUI UX improvements (CJK, keyboard protocols, swarm model picker)
- CI/CD quality (warning budgets, ratchet checks)
- Provider integrations (OpenAI catalog, Anthropic transport)
- Performance (instant startup, resume time)
- Harness API enhancements (cancellable messages)

Let me write this in Chinese now.</think>

# jcode 社区动态日报 · 2026-10-10

---

## 📌 今日速览

**v0.93.0 正式发布**，核心亮点是"瞬时启动"——新会话首帧渲染时间从 ~135ms 降至 ~20ms，大型会话恢复速度提升约 3 倍。同时社区热点集中在两条主线：**SDK 私有实例的进程生命周期治理**（#1774/#1775/#1776/#1777 系列）与 **CI 质量门禁的可靠性**（#692/#547/#1177 等长期未解决的 master 红灯）。开发者对 TUI 体验、模型路由、终端协议细节的关注度持续走高。

---

## 🚀 版本发布

### [v0.93.0 — Instant startup](https://github.com/1jehuang/jcode/releases/tag/v0.93.0)

**重点更新：**

| 维度 | 优化效果 |
|---|---|
| 首帧渲染 | ~135ms → **~20ms**（约 6.7× 提升） |
| 连续开多个会话 | 恢复至流畅水平 |
| 大型会话恢复 | **约 3× 提速** |
| 视觉稳定性 | 连接过程中屏幕不再抖动 |
| 新增协议事件 | `post_tool_fe…`（详情待官方文档补充） |

> 💡 这是一次以**冷启动体验**为核心的版本，对日常交互密度高的开发者影响显著。

---

## 🔥 社区热点 Issues（精选 10 条）

### 🐛 长期未关闭 · 质量基础设施

1. **[#692 — CI red on master: oversized-file ratchet exceeded](https://github.com/1jehuang/jcode/issues/692)** · @1jehuang · 🔴 high
   `transcript.rs` 突破 LOC 红线（2364 → 2799）。Quality Guardrails 长期挂红，但评论数（6）与点赞数（0）说明大家已习惯此问题，建议维护者给出拆分计划。

2. **[#547 — master CI is red + Windows-only Python tooling bugs](https://github.com/1jehuang/jcode/issues/547)** · @Pahuut420 · 🔴 high
   Windows 主机无 Rust 工具链也能复现三类 CI 错误。这是反映 **CI 矩阵覆盖不全** 的代表性 bug，关联 #692/#1177。

3. **[#1177 — Zero-warning budget 仅 Linux 生效；2,700+ 测试永不执行](https://github.com/1jehuang/jcode/issues/1177)** · @ianalitis · 🟡 tech-debt
   macOS 上 `cargo check` 就能产生 5 个 warning，而 CI 绿灯放行；2700+ lib 测试仅在 Linux 编译、永不运行。**是当前最具结构性影响的技术债**。

### ✨ 新功能需求 · 关注度上升

4. **[#1778 — Harness API：可观察、可取消的 mid-turn 消息](https://github.com/1jehuang/jcode/issues/1778)** · @guyb1
   集成方通过 jcode-sdk 在 Web/Slack 嵌入时，遇到"用户在 agent 工作中途发送第二条消息"场景，需 soft_interrupt id / injected event / per-message cancel 三件套。**反映嵌入式场景已成核心使用形态**。

5. **[#1782 — `display.show_tps` 配置：隐藏流式 TPS 行](https://github.com/1jehuang/jcode/issues/1782)** · @alecuba16
   TPS 实时显示无法关闭，与已有 `show_thinking` 模式不对称。对应 PR #1708 已开启。

6. **[#1784 — `session_picker` 套件在并发负载下 ~1/50 flake](https://github.com/1jehuang/jcode/issues/1784)** · @alecuba16
   `cached_grouped_sessions_round_trip_from_disk` 在 `cargo test -p jcode-tui --` 下偶发 panic。

### 🐛 已关闭 · 反映当前修复重心

7. **[#1118 — Protocol: assistant text 缺少 message framing](https://github.com/1jehuang/jcode/issues/1118)** · @guyb1 · ✅ CLOSED
   推动协议层补齐 `message_id` 与 `text_done` 事件，与 #1778 同源诉求。

8. **[#1560 — `--provider-profile` 强制 OpenAI transport](https://github.com/1jehuang/jcode/issues/1560)** · @frolio · ✅ CLOSED
   即使 profile 类型为 `anthropic-compatible`，仍走 `/chat/completions` 端点。涉及多 provider 用户的根本路由。

9. **[#1762 — CI 警告门禁吞掉 cargo check 输出](https://github.com/1jehuang/jcode/issues/1762)** · @ianalitis · ✅ CLOSED
   `scripts/check_warning_budget.sh` 因 `pipefail` 未设置丢弃诊断信息，是与 #1177 同源的"CI 看似绿灯"的元问题。

10. **[#1766 — TUI 复制 CJK 末位字符丢失](https://github.com/1jehuang/jcode/issues/1766)** · @wtry · ✅ CLOSED
    选区终点落在宽字符内时，最后一字被截断；纯 ASCII 不受影响。i18n 体验细节。

### 🪟 平台特定

- **[#1773 — Windows v0.86.0：斜杠补全再次忽略已装 skills](https://github.com/1jehuang/jcode/issues/1773)** · @miaoxu1com · 🔴
  回归 #1186/#873 的同类问题，`/skill` 可激活但不执行。Windows 用户体感问题。

---

## 📥 重要 PR 进展（精选 10 条）

| PR | 标题 | 作者 | 要点 |
|---|---|---|---|
| [**#1785**](https://github.com/1jehuang/jcode/pull/1785) | fix(menubar): 流式图标改为绿色绘制而非染色模板 | @costajohnt | 修复深色菜单栏上 vibrancy 路径被破坏的问题，关闭 #1124 |
| [**#1783**](https://github.com/1jehuang/jcode/pull/1783) | fix(macos): 检测 kitty 并按 Cmd+; 调用 | @costajohnt | 新增 `MacTerminalKind::Kitty` 枚举；从 `TERM`/`KITTY_WINDOW_ID` 识别 |
| [**#1777**](https://github.com/1jehuang/jcode/pull/1777) | sdk: 阻止私有实例会话中途自动更新 | @takumi3488 | 关闭 #1774。空 `JCODE_HOME` 触发的 mid-session 重启会让 turn 丢失 |
| [**#1776**](https://github.com/1jehuang/jcode/pull/1776) | sdk: launch_instance 失败时停止已启动的 daemon | @takumi3488 | 关闭 #1775。补齐"启动超时/退出"路径上 daemon 残留问题 |
| [**#1709**](https://github.com/1jehuang/jcode/pull/1709) | feat(tui): overview 折叠 widget + `agents.memory_effort` 配置 | @alecuba16 | 三项联动：信息面板可折叠、记忆提取 sidecar 的 reasoning effort 可钉死、运行时模型行 |
| [**#1707**](https://github.com/1jehuang/jcode/pull/1707) | fix(tui): 信号退出时恢复 kitty 协议与 TUI 模式 | @alecuba16 | 关闭 #1635。SIGINT/SIGTERM/SIGHUP/SIGQUIT 后不再泄漏 CSI u 模式 |
| [**#1706**](https://github.com/1jehuang/jcode/pull/1706) | feat(tui): /model 选择器中 Ctrl+S 进入 swarm 模型 | @alecuba16 | 关闭 #981。swarm 模型从主流程可发现 |
| [**#1708**](https://github.com/1jehuang/jcode/pull/1708) | feat(tui): `display.show_tps` 配置 | @alecuba16 | 关闭 #1782。沿用 `show_thinking` 模式 |
| [**#1347**](https://github.com/1jehuang/jcode/pull/1347) | fix: 阻止图像块在 text-only 模型上毁掉后续轮次 | @alecuba16 | 关闭 #1302。三层协同的运行时模态恢复 |
| [**#1780**](https://github.com/1jehuang/jcode/pull/1780) | feat: 添加 elapsed 用量显示模式 | @n3ko | 把"已用/已用窗口"成对展示，超支一眼可见 |

> 另值得关注的 PR：**#1772**（已合并 · 修复 `Format` job 红灯）、**#1511**（provider 快速失败、内容过滤、429 重试上限）、**#1513**（测试隔离）、**#1362**（`swarm stop` 真正静默 worker）。

---

## 📈 功能需求趋势

| 方向 | 代表 Issue / PR | 趋势信号 |
|---|---|---|
| **SDK 进程生命周期** | #1774 / #1775 / #1776 / #1777 | ⬆️ 强上升。嵌入场景下对 daemon / 桥接 / 自动更新行为的可控性成为首要诉求 |
| **CI / 质量门禁可信度** | #692 / #547 / #1177 / #1762 / #1772 | ⬆️ 持续。社区认为"CI 绿 ≠ 代码健康"，需统一警告预算、扩展矩阵 |
| **TUI 体验打磨** | #1706 / #1707 / #1708 / #1709 / #1766 | ⬆️ 稳定。键盘协议、模式切换、i18n、widget 折叠 |
| **多 Provider 路由** | #1560 / #1505 / #1507 / #1511 | ⬆️。OpenAI/Anthropic/Comtegra/FPT 路由边界持续细化 |
| **协议可观察性** | #1118 / #1778 | ⬆️。consumer 需要 message_id / cancel / soft_interrupt |
| **用量可视化** | #1345 / #1780 | ➡️。已用/窗口双指标已成标配候选 |
| **性能与冷启动** | v0.93.0 / #1347 | ➡️。首帧 20ms 是新基线 |
| **Agent 协作** | #1362 / #1706 / #1709 | ➡️。swarm 模型、worker quiesce、memory_effort 是新焦点 |

---

## 🧑‍💻 开发者关注点

> 直接从 issue 摘要中提炼的痛点频次（按出现密度排序）：

1. **"绿灯下的暗病"** —— CI 显示通过，但 macOS 警告、Windows-only bug、format drift 持续漏到 master（#1177、#547、#1762）。开发者最希望看到的是**统一的工具链策略**，而不是"先合并、再修 lint"。

2. **嵌入式/SDK 用例的不可控性** —— 私有实例中途被自动更新拉新版本（#1774）、launch 失败后 daemon 残留（#1775）、bridge 与 daemon 协调错位。`@takumi3488` 连续提交 #1776/#1777 反映**SDK 一等公民化**是当前最迫切需求。

3. **TUI 的"看不见的状态"** —— kitty 协议退出残留（#1635）、CJK 字符边界（#1766）、TPS 行无法关闭（#1782）。开发者希望"功能可配置、状态可恢复"，而不是默默耦合。

4. **协议层缺失语义** —— assistant text 没有 message framing（#1118）、mid-turn 取消机制缺失（#1778）。社区正在推动协议从"能跑"走向"可被外部系统正确建模"。

5. **Provider 路由的边界 bug** —— `--provider-profile` 与 profile 类型不一致（#1560）、OpenRouter 丢弃合法 reasoning delta（#1779）。多 provider 时代需要**显式声明 transport**。

6. **测试可重复性** —— 并发下的 flake（#1784）、环境变量导致的偶发失败（#1781）、测试被父会话命名污染（#1513）。是 CI 红灯与本地"通过"撕裂的根源之一。

---

**日报小结**：v0.93.0 的性能跃升是用户侧的"显性利好"，但社区工程层面的真正主线是 **SDK 稳定性 + CI 矩阵可信度**。两条主线均已有高优先级 PR 在路上，未来 1–2 周预计会陆续合并；与此同时，TUI 体验与协议层语义工作在持续小步快跑。

</details>

<details>
<summary><strong>pi</strong> — <a href="https://github.com/earendil-works/pi">earendil-works/pi</a></summary>

<think>用户让我基于 GitHub 数据生成一份 pi 社区的日报。让我仔细分析这些数据：

**数据概览：**
- 时间：2026-10-10
- 过去 24 小时无新 Release
- 50 个更新的 Issues，其中 30 个展示（按评论数排序）
- 18 个更新的 PR

**最重要的 Issues 观察：**

1. **#7547** - Windows 使用问题征集（79 条评论）— 这是最热的 issue，反映 Windows 用户群体大但体验差
2. **#10480** - OpenAI 直连不识别手动重置的额度（17 条评论）
3. **#8643** - Bedrock OpenAI 模型拒绝 toolResult 中的图片（12 条评论，4 个赞）— 有 PR 准备
4. **#9773** - before_provider_request 在 summarization/compaction 请求时不触发（11 条评论）
5. **#6300** - Windows TUI 输入行每按键重绘（11 条评论）
6. **#10497** - OpenRouter 400 错误（已关闭，11 条评论）
7. **#9257** - extractCursorPosition 重复 CURSOR_MARKER（6 条评论）
8. **#3896** - TUI 失焦时游标仍激活（已关闭，5 条评论，8 赞）
9. **#9656** - Windows + Zellij 鼠标滚轮滚动历史（5 条评论，4 赞）
10. **#10393** - xterm 终端内复制文本失效（已关闭）
11. **#10645** - resizeImage 在 Bun 编译后为 null（5 条评论）
12. **#10719** - Bun 安装的 pi + Node runtime 找不到 jiti 模块（3 条评论）
13. **#10606** - RPC 模式下 preflight 时发送的 prompt 被静默丢弃（3 条评论）
14. **#10157** - Gemini 思维签名在 AI Studio OpenAI 端点被丢弃（3 条评论）
15. **#10695** - macOS / Node 24 图片 resize worker 竞态（2 条评论）
16. **#10742** - Windows SSH/ConPTY 下 OSC 颜色查询回复被当输入（2 条评论）
17. **#10741** - Groq Qwen3.8 27B 因 developer role 失败（2 条评论）
18. **#10743** - ChromeOS Crostini 剪贴板问题（2 条评论）

**重要的 PR 观察：**

1. **#10751** - 使用 pi.dev 配置 schemas
2. **#10747** - 允许自定义 Cloudflare AI gateway 域名和凭证
3. **#10672** - 只列出 OpenRouter key 可用的模型
4. **#10745** - 禁用鼠标重新定位光标的选项（已关闭）
5. **#9126** - 在处置前结算工具结果
6. **#10739** - 为自定义消息启动的运行触发 before_agent_start
7. **#10734** - 在 transformMessages 中丢弃孤立工具结果（已关闭）
8. **#10730** - 渲染 CJK 强调旁全角标点
9. **#10663** - `pi auth --continue` 命令
10. **#10718** - `--export` HTML 包含系统提示
11. **#10716** - pi-env 启动错误包含 stderr
12. **#10715** - 为 Qwen token plan 启用显式上下文缓存（已关闭）

**功能需求趋势分析：**

1. **Windows 平台支持** - #7547（征集）、#6300（TUI）、#9656（Zellij）、#10645（图片）、#10742（SSH/ConPTY）、#10393（xterm）— 大量 Windows 相关问题
2. **跨平台终端兼容性** - ChromeOS Crostini、Zellij、ConPTY、xterm
3. **多 Provider 兼容性** - OpenRouter、Groq、Bedrock、Gemini AI Studio、Anthropic
4. **SDK/RPC 稳定性** - 多个 SDK 1.1.0 相关问题
5. **资源管理** - 图片 resize、worker teardown
6. **CJK 支持** - #10730 CJK 强调渲染
7. **认证/登录流程** - `pi auth --continue`、OpenAI 额度重置
8. **会话/持久化** - 多个关于 session manager、watch()、export 的问题

**痛点：**

1. **Windows 平台是重灾区** - 多种终端、多路复用器、SSH/ConPTY 都有问题
2. **SDK 1.1.0 引发的稳定性问题** - 多个 SDK 相关 bug 集中爆发
3. **图片处理** - resizeImage 在编译环境、worker 竞态都出问题
4. **多 provider 兼容性** - 各 provider 都有特定的小 bug
5. **终端剪贴板/选择** - xterm、Crostini 等场景失效
6. **OSC 序列处理** - 颜色查询回复泄漏到输入流

让我开始写日报。格式要专业简洁。</think>

# Pi 社区动态日报 · 2026-10-10

## 📌 今日速览

今日社区活动以 **Bug 修复与平台兼容性** 为核心主题。**Windows 平台体验**持续是热点议题（#7547 已累计 79 条评论），**SDK 1.1.0 暴露的多项稳定性问题**（abort 行为、agent_settled 时机、prompt 静默丢弃等）被集中报告，**多 Provider 兼容性问题**（OpenRouter、Groq、Gemini AI Studio、Anthropic managed-effort）也各有反馈。PR 侧亮点集中在 Cloudflare AI Gateway 自定义、OpenRouter 模型按 key 过滤、CJK 强调渲染修复等。

---

## 🚀 版本发布

过去 24 小时无新版本发布。

---

## 🔥 社区热点 Issues

| # | Issue | 评论 | 👍 | 为什么值得关注 |
|---|-------|------|-----|----------------|
| [#7547](https://github.com/earendil-works/pi/issues/7547) | [Windows] Pi 在 Windows 上的使用现状与问题征集 | 79 | 2 | **本月最热 issue**，官方主动调研 Windows 用户分布与痛点，决定核心修复优先级。 |
| [#10480](https://github.com/earendil-works/pi/issues/10480) | Direct OpenAI 连接无法识别手动重置的额度 | 17 | 0 | 影响 ChatGPT Pro 用户的真实使用流，工作流需 logout/login 才能绕过。 |
| [#8643](https://github.com/earendil-works/pi/issues/8643) | Bedrock: OpenAI 模型拒绝 toolResult 嵌套图片 | 12 | 4 | **修复+回归测试已就绪**（在 fork 上），是即将合并的高质量贡献。 |
| [#9773](https://github.com/earendil-works/pi/issues/9773) | `before_provider_request` 不在 summarization 请求触发 | 11 | 1 | 文档与行为不一致，影响扩展作者对 compaction 流程的可观测性。 |
| [#6300](https://github.com/earendil-works/pi/issues/6300) | Windows TUI 每按键重绘一行 | 11 | 0 | Windows 终端体验的基础设施级问题，未有进展。 |
| [#10497](https://github.com/earendil-works/pi/issues/10497) | OpenRouter 偶发 400（上下文超限） | 11 | 0 | 已关闭，但反映了扩展注入大文件时的风险，社区需注意 limit 提示。 |
| [#10645](https://github.com/earendil-works/pi/issues/10645) | `resizeImage` 在 Bun 编译可执行文件中返回 null | 5 | 0 | **影响所有 0.87.x 起的 Windows 独立二进制**，图片附件全部丢失，影响面较大。 |
| [#10719](https://github.com/earendil-works/pi/issues/10719) | Bun 安装 + Node 运行时加载扩展失败（缺 `jiti`） | 3 | 0 | Bun/Node 混用场景的破坏性故障，所有扩展无法加载。 |
| [#10606](https://github.com/earendil-works/pi/issues/10606) | RPC: preflight 期间的 prompt 被 ack 后静默丢弃 | 3 | 0 | 影响自动化 host（WebPi、CI agent），无任何错误提示。 |
| [#10157](https://github.com/earendil-works/pi/issues/10157) | Gemini 思维签名在 AI Studio OpenAI 兼容端点被丢弃 | 3 | 0 | 多轮 tool call 失败，跨 provider 兼容性的典型盲点。 |

---

## 🛠 重要 PR 进展

| PR | 状态 | 内容 |
|----|------|------|
| [#10751](https://github.com/earendil-works/pi/pull/10751) | OPEN | 让 `pi.dev` 成为生成配置 schema 的 `$id`，统一主题/模型/按键绑定 schema 源。 |
| [#10747](https://github.com/earendil-works/pi/pull/10747) | OPEN | 支持自定义 Cloudflare AI Gateway 域名与凭证（修复 #10627）。 |
| [#10672](https://github.com/earendil-works/pi/pull/10672) | OPEN | OpenRouter 模型列表与 `/models/user` 交集，剔除 key 无权访问的 chat 模型。 |
| [#9126](https://github.com/earendil-works/pi/pull/9126) | OPEN | 在 runtime 释放前 await `session.abort()`，避免工具结果丢失（修复 #9124）。 |
| [#10739](https://github.com/earendil-works/pi/pull/10739) | OPEN | `sendMessage(..., { triggerTurn: true })` 启动的运行补发 `before_agent_start`，避免系统提示中途被覆盖导致缓存失效。 |
| [#10730](https://github.com/earendil-works/pi/pull/10730) | OPEN | 修复 CJK 强调在 markdown 全角标点旁无法闭合的渲染 bug（修复 #10154）。 |
| [#9155](https://github.com/earendil-works/pi/pull/9155) | OPEN | 拒绝 prompt 准备与 tree 导航并发，避免上下文互相覆盖（修复 #9154）。 |
| [#9222](https://github.com/earendil-works/pi/pull/9222) | OPEN | 在运行或 compaction 中拒绝 reload，避免扩展 tool 上下文失效（修复 #9221）。 |
| [#10663](https://github.com/earendil-works/pi/pull/10663) | OPEN | 新增 `pi auth --continue [payload]` 通用 continuation 认证 handoff。 |
| [#10718](https://github.com/earendil-works/pi/pull/10718) | OPEN | `pi --export` 生成的 HTML 包含系统提示，与 `/export` 行为对齐。 |

---

## 📈 功能需求趋势

1. **Windows 平台一等公民体验** — 多个 issue 集中反映 TUI 重绘（#6300）、SSH/ConPTY（#10742）、Zellij 鼠标（#9656）、独立二进制图片处理（#10645）等问题，官方已正式发起 #7547 调研。
2. **SDK / RPC 稳定性** — 围绕 SDK 1.1.0 集中出现 abort/agent_settled/prompt 调度三类问题（#10606、#10754、#10755），反映新版本扩展点还需打磨。
3. **多 Provider 兼容性深度优化** — OpenRouter key 过滤（#10672）、Groq Qwen 角色模板（#10741）、Anthropic managed-effort beta header（#10759）、Gemini thought signature（#10157）、Qwen token plan 缓存（#10715）成为近期高发区。
4. **CJK / 本地化渲染** — TUI 中 CJK 强调渲染（#10730 → #10154）表明非英文体验仍需持续投入。
5. **扩展与部署形态** — Bun 安装/编译（#10719、#10645）、Cloudflare 自定义网关（#10627）、`pi auth --continue` handoff（#10663）等反映出用户对自定义部署与认证流程的需求。
6. **可观测性与恢复语义** — `before_provider_request` 不覆盖 summarization（#9773）、watch() 跨进程（#10749）、recovery salvage 文档（#10750）等条目显示出对"运行期透明"与"恢复语义"日益强烈的诉求。

---

## 🧩 开发者关注点（高频痛点）

- **Windows 终端栈碎片化**：cmd.exe / Windows Terminal / Alacritty / Zellij / OpenSSH+ConPTY 各有不同行为，渲染、剪贴板、OSC 序列、鼠标事件四大类反复出问题（#6300、#9656、#10742、#10393、#10743）。
- **图片附件链路脆弱**：`resizeImage` 在 Bun 编译与 Node 24 worker teardown 下两度翻车（#10645、#10695），跨运行时稳定性不足。
- **SDK 1.1.0 的并发/生命周期模型尚不成熟**：abort、prompt 排队、agent_settled 阶段 promise 解析时机等都需要进一步文档化与修正（#10754、#10755、#10606）。
- **Provider 协议细节差异巨大**：每个 Provider 都有自己的怪癖（OpenRouter 模型枚举、Gemini thought signature、Anthropic beta header、Qwen 角色命名），给统一抽象层带来持续挑战。
- **剪贴板 / 文本选择**：在 xterm.js、Crostini、ChromeOS 等场景下选区复制失效或串行（#10393、#10743、#10746），影响基本使用。
- **资源竞争与持久化**：`SessionManager` 缺少文件锁（#8848）、tool 结果在 dispose 时可能丢失（#9126）等老问题仍在修复中。

---

> **日报小结**：本周 Pi 的关注重心明显从"功能新增"转向"多平台、多 Provider、多运行时的稳健性收敛"。#7547 的 Windows 调研结果、以及围绕 SDK 1.1.0 的几个 PR（#9126、#9155、#9222、#10726、#10739）合并后，预计将带来一波稳定性提升，值得关注后续 release note。

</details>

---
*本日报由 [Big Model Radar](https://github.com/96loveslife/big_model_radar) 自动生成。*
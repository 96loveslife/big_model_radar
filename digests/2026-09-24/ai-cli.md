# AI CLI 工具社区动态日报 2026-09-24

> 生成时间: 2026-09-24 04:08 UTC | 覆盖工具: 8 个

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

<think>The user is asking me to create a horizontal comparative analysis report based on the daily dynamics of 7 AI CLI tools (Claude Code, OpenAI Codex, Gemini CLI, GitHub Copilot CLI, Kimi Code CLI, OpenCode, jcode, pi). Let me carefully synthesize the data from all these reports into a coherent cross-comparison.

Let me extract key data points from each tool:

**Activity Summary (past 24h):**

1. **Claude Code (anthropics/claude-code)**
   - Release: v2.1.281 (Claude apps gateway, Bedrock assume_role)
   - Top issue: #16157 Max subscription usage limits - 1497 comments/694 👍 (massive)
   - Issues with notable activity: #14200 (Plugin rules), #10071 (MCP reconnection), #78148 (cost tracking)
   - PRs: 6 listed (security-guidance, telemetry, hook fixes, AGENTS.md pagination)
   - Focus: Max subscription trust crisis, IDE/Desktop integration, MCP/Plugin ecosystem

2. **OpenAI Codex (openai/codex)**
   - Releases: 7 alphas (0.158.0-alpha.2 to alpha.6, 0.157.0-alpha.11, 0.155.0-alpha.16.4)
   - Top issues: #25319 (VS Code workspace isolation 93👍), #3141 (GPU sandbox), #44561 (Astra star animation 77👍)
   - PRs: 50 from copyberry[bot] - Guardian refactor, WebSocket, extension hooks, Windows sandbox
   - Focus: Windows parity, TUI animation backlash, sandbox boundaries, IDE session management

3. **Gemini CLI (google-gemini/gemini-cli)**
   - Releases: v0.61.0, v0.61.0-preview.1, v0.62.0-preview.0, nightly
   - New: Gemini 3.8 Flash & 3.5 Flash Lite support
   - Top issues: #22323 (Subagent MAX_TURNS), #21409 (generalist hangs), #19873 (zero-dep sandbox)
   - PRs: Notable - retry progress indicator, AST-aware tools, Auto Memory improvements
   - Focus: Subagent controllability, Auto Memory safety, Browser Agent cross-platform

4. **GitHub Copilot CLI (github/copilot-cli)**
   - Release: v1.0.89-1 (GPT-6 Sol/Luna, view tool fixes)
   - Top issues: #2421 (HTTP/2 GOAWAY), #4535 (store_memory), #4847 (managed-settings MCP), #4663 (compaction unbounded retries)
   - PRs: Only 1 (#4948)
   - Focus: BYOK/provider compatibility, context memory, auth/session management

5. **Kimi Code CLI (MoonshotAI/kimi-cli)**
   - Releases: None
   - Issues: Only 1 issue (#2596) - yolo mode rm -rf safety incident
   - PRs: None
   - Focus: Safety boundaries (limited data)

6. **OpenCode (anomalyco/opencode)**
   - Releases: None
   - Top issues: #28089 (.so leak), #50201 (Go subscription lost), #20252 (annual billing), #38857 (security: cryptominer), #48365 (V2 plugin issues)
   - PRs: Many by rekram1-node (V2 migration, Copilot/Gemini routing, GitLab OAuth)
   - Focus: V1→V2 migration, new model support, security defaults

7. **jcode (1jehuang/jcode)**
   - Releases: v0.88.0 (Claude Opus 5.5 default, multi-browser), v0.87.1 (adaptive status line)
   - Top issues: #1217 (proactive tool-result clearing), #1173 (OpenCode Go routing), #1215 (Qwen3.8-Max), #1390 (Claude OAuth version gate), #1411 (TUI viewport epic)
   - PRs: Many (provider routing, macOS fixes, TUI refactor)
   - Focus: Provider routing robustness, macOS quality, TUI rendering, Asian models

8. **pi (earendil-works/pi)**
   - Releases: None
   - Top issues: #7885 (npm indexing), #9361 (Windows shellPath), #5294 (timeout), #9688 (clipboard), #5581 (custom messages bypass hooks)
   - PRs: mitsuhiko's TUI refactor and image/classifier model infrastructure unification
   - Focus: Extension ecosystem, Windows compatibility, multi-provider, billing accuracy

Now let me organize the comparative analysis:

**Common themes across multiple tools:**

1. **Provider routing/compatibility fragility** - Claude Code, jcode, OpenCode all hit similar issues with provider API changes (Claude OAuth version, OpenCode Go protocols, Gemini schema)

2. **TUI rendering stability** - Codex (animation), Gemini (tool count >128), jcode (viewport coords), pi (colors/Kitty images), Claude Code (VS Code focus)

3. **Subagent/agent observability** - Claude Code (#14200 plugin rules), Codex (#43594 Computer Use), Gemini (#22323 MAX_TURNS), Copilot (#2261 FLEET custom agents)

4. **Cost/usage transparency** - Claude Code (#16157 Max limits), Copilot (#4663 compaction retries), jcode (banked usage), pi (provider-reported cost)

5. **Windows parity issues** - Codex, Gemini, jcode, pi - all have Windows-specific bugs

6. **Extension/Plugin ecosystem** - Claude Code (plugins/MCP), Codex (model contributor hooks), Gemini (skills/sub-agents), Copilot (custom agents), jcode (new providers), pi (extension API)

7. **Safety/boundary enforcement** - Kimi (rm -rf), Claude Code (security-guidance PR), OpenCode (cryptominer via web), Gemini (destructive commands)

8. **Auto Memory / Context Management** - Gemini (Auto Memory issues), Claude Code (memory caching), Copilot (compaction), jcode (tool-result clearing), pi (SSE OOM)

9. **New model integration challenges** - Gemini 3.8/3.5 (Gemini), GPT-6 Sol/Luna (Copilot), Qwen3.8-Max (jcode), Claude Opus 5.5 (jcode), MiMo 2.6 Flash (OpenCode), Mistral (pi)

**Differentiation:**
- Claude Code: Enterprise/Max subscription focus, mature plugin/MCP ecosystem
- Codex: Aggressive Windows expansion, deep automation (copyberry bot), Guardian system
- Gemini CLI: Research-oriented (new models, AST tools, Auto Memory)
- Copilot CLI: Pragmatic + enterprise integration, GitHub ecosystem
- Kimi Code: Minimal data, focus on safety event
- OpenCode: V2 migration pain + V1 plugin compat
- jcode: Cross-CLI ecosystem bridge, Asian models
- pi: TUI architecture + extension system depth

Let me write this up cleanly. I'll use a similar formatting style as the input reports but more comparative.

Length-wise, the user wants a comprehensive comparative report. I'll aim for clear tables, structured sections, and concrete signals.</think>

# AI CLI 工具横向对比分析报告
**日期：2026-09-24 | 覆盖 8 款主流工具**

---

## 1. 生态全景

当前 AI CLI 工具生态已进入 **「模型能力趋同、工程深度分化」** 的阶段：基础模型竞争退居二线，社区关注度向 **Provider 路由鲁棒性、TUI 渲染稳定性、Subagent 可控性、计费/用量透明化、Windows 平台对等性** 等工程底层议题集中。Claude Code 与 GitHub Copilot CLI 在订阅信任和 BYOK 上承压，OpenAI Codex 以每日 7+ alpha 的高频迭代 + 自动化机器人重构拉开工程节奏；Gemini CLI 借 Gemini 3.x 模型红利推进 Agent 架构；OpenCode 与 jcode 处于 V1→V2/多 CLI 桥接的过渡阵痛期，Kimi CLI 与 pi 则反映出**新晋工具要么受困于安全/生态冷启动，要么正以架构重构蓄力**。

---

## 2. 各工具活跃度对比

> 数据口径：过去 24 小时更新 / 新增的活动数

| 工具 | Release | 高热度 Issues | PR 数 | 主要活动类型 |
|------|---------|---------------|-------|--------------|
| **Claude Code** | v2.1.281 | 50+ | 6 | 订阅争议集中爆发，PR 偏小型修复 |
| **OpenAI Codex** | 7 个 alpha (0.158 周期) | 50+ | **50（全部 bot 合入）** | 高频发版 + 自动化基础设施重构 |
| **Gemini CLI** | v0.61.0 / v0.62-preview / nightly | 50+ | 38 | 新模型接入 + Agent/Subagent 修复 |
| **GitHub Copilot CLI** | v1.0.89-1 | 50+ | 1 | 活跃 Issue 但 PR 流水线放缓 |
| **Kimi Code CLI** | 无 | 1 | 0 | 冷启动期，仅 1 起安全事件 Issue |
| **OpenCode** | 无 | 50+ | 20+ | 单人高频提交（rekram1-node），V2 迁移主导 |
| **jcode** | v0.88.0 / v0.87.1 | 11+ | 20+ | Provider 路由 + TUI 视口重构双线推进 |
| **pi** | 无 | 50+ | 19 | TUI 主题/模型基础设施重构（mitsuhiko） |

**活跃度梯队**：
- 🔥 **第一梯队**（高频 + 高量）：OpenAI Codex、Gemini CLI、OpenCode
- ⚡ **第二梯队**（稳定 + 议题集中）：Claude Code、jcode、pi
- 🧊 **第三梯队**（冷启动 / 维稳）：GitHub Copilot CLI（PR 量少）、Kimi Code CLI

---

## 3. 共同关注的功能方向

| 方向 | 涉及工具 | 共同诉求 |
|------|----------|----------|
| **Provider 路由鲁棒性** | Claude Code、OpenCode、jcode、pi、Copilot CLI | 远端协议/版本/默认值变动引发静默失败；要求**显式失败而非隐式降级**。典型：jcode #1173→#1446（OpenCode Go 协议分发）、OpenCode #51026（Copilot 路由）、Claude Code Bedrock assume_role |
| **Subagent / Agent 可控性与可观测性** | Claude Code、Codex、Gemini CLI、Copilot CLI | 子代理生命周期/状态语义缺失，缺少「可见、可控、可中断」面板。典型：Gemini #22323（MAX_TURNS 误报 GOAL）、Copilot #2261（FLEET 忽略 customAgents） |
| **Windows 平台对等性** | Codex、Gemini CLI、jcode、pi、Claude Code | 沙箱初始化、Computer Use、IME、CJK 输入、bash 路径系统性落后于 macOS/Linux |
| **TUI 渲染稳定性与去装饰化** | Codex、Gemini CLI、Claude Code、jcode、pi | Codex Astra 星空动画（#44561、#44640，77+18 👍）vs jcode #1411 视口坐标化重构 vs pi mitsuhiko 颜色 API 重构 |
| **计费与用量透明化** | Claude Code、Copilot CLI、jcode、pi | 跨会话成本、缓存命中率、provider-reported cost、失败重试无界计费成为高敏感话题 |
| **扩展/插件/MCP 生态** | Claude Code、Codex、Gemini CLI、Copilot CLI、OpenCode、jcode、pi | 普遍存在 hooks 语义不清、reload 竞态、权限粒度粗等问题 |
| **新模型集成摩擦** | 全部工具 | GPT-6、Claude Opus 5.5、Gemini 3.8 Flash、Qwen3.8-Max、MiMo 2.6、Mistral 等模型带来上下文窗口、协议、schema 投影差异 |
| **安全与边界执行** | Kimi CLI（rm -rf 事故）、OpenCode（web 未鉴权挖矿）、Claude Code（security-guidance PR）、Gemini（Auto Memory 脱敏） | 危险命令拦截、默认鉴权、确定性脱敏成为共同呼声 |

---

## 4. 差异化定位分析

| 工具 | 功能侧重 | 目标用户 | 技术路线特征 |
|------|----------|----------|--------------|
| **Claude Code** | 企业部署、Plugin/MCP 生态、订阅化产品 | Max/Team 订阅用户、企业 IT | 与 Bedrock/Vertex 深度集成；apps gateway 为企业管控导向 |
| **OpenAI Codex** | 多平台对等、自动化重构、Guardian 授权 | Windows/桌面端用户、平台贡献者 | Rust 重写 + copyberry 自动化机器人 + GuardianContextMode 统一 |
| **Gemini CLI** | 新模型首发、Agent 架构、AST 感知工具 | Google Cloud 用户、研究型开发者 | 与 Gemini 3.x 模型训练偏好深度绑定；Auto Memory 为差异化亮点 |
| **GitHub Copilot CLI** | GitHub 生态、BYOK、IDE 集成 | 已有 GitHub Enterprise 采购的组织 | FLEET 多 Agent、managed-settings 策略体系 |
| **Kimi Code CLI** | 简洁直接、Agent 执行 | 中文 / Moonshot AI 用户 | 数据少，社区处于冷启动；当前安全事件暴露路径校验薄弱 |
| **OpenCode** | Provider 桥接、Go 订阅、桌面/Web 多端 | 多 provider 重度用户、独立开发者 | V1→V2 双 schema 兼容期；单核心开发者驱动 |
| **jcode** | 跨 CLI 生态（OpenCode/Antigravity/Devin）、亚洲模型、Provider 路由 | 工具链整合者、亚洲市场 | 内置 profile namespace + jcode-router sidecar 雏形 |
| **pi** | TUI 极致、扩展系统深度、provider 透明 | 终端原教旨主义者、扩展开发者 | mitsuhiko 主导；颜色 API 与模型基础设施重构预示非终端 UI 演进 |

**关键差异信号**：

- **生态策略**：Claude Code/Codex/Copilot 倾向**深度封闭 + 企业管控**；OpenCode/jcode/pi 倾向**开放 provider + 工具链整合**；Gemini CLI 居中偏研究型。
- **迭代节奏**：Codex/OpenCode 偏「快速收尾 + 频繁 alpha」；Gemini CLI/jcode/pi 偏「稳定 + 大型重构 PR」；Claude Code/Copilot CLI 偏「功能点状更新」。
- **架构开放度**：jcode 已开放 Yolo-Auto/Antigravity CLI/Devin 等多 CLI 接入；pi 在扩展 API 上深度重构；OpenCode 仍处于 V2 迁移阵痛。

---

## 5. 社区热度与成熟度

### 热度指标（按 👍 + 评论数加权）

| 排名 | 工具 | 标志性议题 | 热度信号 |
|------|------|-----------|----------|
| 1 | **Claude Code** | #16157（1497 评论/694 👍）| 仓库有史以来最热 issue 之一，订阅信任危机 |
| 2 | **OpenAI Codex** | #25319（93 👍）、#44561（77 👍）| 单一议题已达 Claude Code 平均水平 |
| 3 | **Gemini CLI** | #21409（8 👍）、多 P1 Bug | 增速快但单议题热度待积累 |
| 4 | **jcode** | #1173（5 👍）、#1217 7 评论 | 中型社区高密度技术讨论 |
| 5 | **pi** | #5581（3 👍）、#9688（2 👍）| 高质量 PR，议题相对分散 |
| 6 | **OpenCode** | #28089（10 👍）、#34410（9 👍）| 议题多元，beta 阶段焦点明确 |
|  | **Copilot CLI** | #2421（19 👍）| 单议题影响力高，但 PR 流水线冷清 |
|  | **Kimi Code CLI** | #2596（安全事件）| 冷启动期，单事件影响大 |

### 成熟度评估

- **企业级成熟**：Claude Code（订阅 + 网关）、Copilot CLI（GitHub 生态）—— 已进入"信任维护"阶段
- **工程深度成熟**：Codex（自动化重构规模化）、pi（架构演进清晰）
- **快速演进**：Gemini CLI（新模型 + Agent 重构）、OpenCode（V2 迁移）、jcode（多 CLI 桥接）
- **冷启动 / 风险期**：Kimi Code CLI（安全事件暴露路径校验缺陷，急需建立安全默认值）

---

## 6. 值得关注的趋势信号

### 🔥 强信号（多工具共振 + 高频议题）

1. **Provider 兼容性成为新可靠性瓶颈**
   7/8 工具在过去 24 小时都暴露 Provider 路由/版本/schema 投影问题。**信号**：模型层能力趋同后，工程层面的「接入正确性」正在取代「模型表现」成为新的差异化竞争维度。开发者应关注工具的 **协议感知路由能力** 与 **provider 回归测试矩阵**。

2. **Agent 可观测性进入产品力门槛**
   Subagent 状态污染、挂起、调度惰性在 Claude Code/Gemini/Codex/Copilot 共振。**信号**：未来 6 个月，「能不能让多 Agent 并行任务**可见、可控、可中断**」将决定工具在企业场景的可用性，而 #1783（Copilot 折叠面板）、#50751（OpenCode 子代理通知）等早期信号已显现。

3. **TUI「装饰性 UI」的反向潮流**
   Codex Astra 星空动画争议、jcode 视口坐标化重构、pi 颜色 API 重构共同指向一个判断：**终端用户的耐心正在耗尽装饰性动效，回归「确定性渲染 + 可读性」**。产品经理应警惕把 web 端的"愉悦设计"无脑搬到 CLI。

4. **计费透明度成为订阅类工具的生死线**
   Claude Code Max 限额（#16157）、Copilot 失败 Compaction 无界重试（#4663）、pi 1h/5m cache 错价（#9210）——**信任崩塌的速度往往快于功能发布的速度**。建议所有订阅类工具优先发布「跨会话成本仪表盘」。

### ⚡ 中等信号

5. **Windows 平台对等性是普

---

## 各工具详细报告

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills 社区热点

> 数据来源: [anthropics/skills](https://github.com/anthropics/skills)

<think>The user wants me to analyze Claude Code Skills community trends based on the provided GitHub data. Let me carefully examine the data and create a structured report.

Key observations from the data:

**Pull Requests (PRs) - Top 20 by comment count:**
Looking at the data, I notice that ALL PRs show `评论: undefined` and `👍: 0`. This means the actual ranking data isn't fully populated. However, the data is sorted by comments, so I'll work with what's presented and note this limitation.

The PRs shown include:
1. #1298 - skill-creator fixes (Windows, runtime failures)
2. #1771 - proofcore-contract-auditor (smart contract auditing)
3. #1742 - mcp-builder fixes
4. #1703 - md2video-audio skill
5. #1734 - Detect orphaned docx comments
6. #525 - pyxel skill (retro game dev)
7. #514 - document-typography skill
8. #1615 - scnet-hpc skill (HPC clusters)
9. #822 - AWT (AI Watch Tester)
10. #538 - fix(pdf) case sensitivity
11. #486 - ODT skill
12. #210 - Improve frontend-design skill
13. #83 - skill-quality-analyzer and skill-security-analyzer
14. #1776 - blast-radius skill
15. #723 - testing-patterns skill
16. #541 - fix(docx) tracked change collision
17. #539 - fix(skill-creator) YAML validation
18. #1792 - fix(docx) LibreOffice timeout
19. #1790 - fix(docx) document.xml.rels
20. #1769 - Fix skill-creator trigger detection

**Issues (with actual comment counts):**
1. #492 - Security: Community skills under anthropic namespace (43 comments, OPEN) - trust boundary abuse
2. #228 - Enable org-wide skill sharing in Claude.ai (16 comments, OPEN)
3. #556 - run_eval.py: claude -p never triggers skills (12 comments, OPEN)
4. #1329 - compact-memory skill proposal (10 comments, OPEN)
5. #62 - Skills disappeared (10 comments, OPEN)
6. #202 - skill-creator best practices (8 comments, CLOSED)
7. #412 - agent-governance skill (6 comments, CLOSED)
8. #189 - duplicate skills in plugins (6 comments, OPEN)
9. #1487 - claude-api skill context exhaustion (4 comments, OPEN)
10. #1390 - mcp-builder evaluation 0/N (4 comments, OPEN)
11. #1385 - Reasoning Quality Gate Pipeline (4 comments, OPEN)
12. #1175 - SharePoint security concerns (4 comments, CLOSED)
13. #29 - Usage with bedrock (4 comments, OPEN)
14. #16 - Expose Skills as MCPs (4 comments, OPEN)
15. #1362 - web-artifacts-builder pnpm issues (3 comments, OPEN)

Now let me structure the report.

**热门 Skills 排行 (Hot Skills)** - Based on actual PR data, but comment counts are undefined. I'll select based on the data given (which is sorted by comments), focusing on the most notable ones:

1. #1298 - skill-creator fixes (foundational tool)
2. #1771 - proofcore-contract-auditor (Web3, novel category)
3. #1742 - mcp-builder fixes (ecosystem critical)
4. #525 - pyxel (long-standing, game dev)
5. #514 - document-typography (AI output quality)
6. #822 - AWT (E2E testing)
7. #83 - skill-quality/security-analyzer (meta tools)
8. #1776 - blast-radius (destructive operations safety)

**社区需求趋势 (Community demand trends)** - From Issues:
- Trust & security (#492, #1175)
- Skill distribution/sharing (#228, #189)
- Tooling for skill creation (#556, #202, #1769, #1298)
- Domain-specific skills (governance #412, smart contracts #1771, HPC #1615)
- Context window concerns (#1487)
- MCP integration (#16)

**高潜力待合并 Skills (High-potential pending skills)** - Recently active, well-defined:
- #1771 (smart contract auditor)
- #525 (Pyxel - long standing, recently updated)
- #1776 (blast-radius)
- #822 (AWT)
- #1703 (md2video-audio)
- #1615 (scnet-hpc)

**Skills 生态洞察 (Ecosystem insight)**:
The community is increasingly focused on three converging concerns: (1) trust and security boundaries for community-contributed skills, (2) the quality and reliability of skill-creation tooling itself, and (3) operational safety patterns (blast radius, governance, destructive operations).

Let me now write a comprehensive, professional report in Chinese.</think>

# Claude Code Skills 社区热点报告
**数据周期：截至 2026-09-24 · 数据源：[anthropics/skills](https://github.com/anthropics/skills)**

> ⚠️ **数据说明**：本次抓取的 PR 评论数与点赞数显示为 undefined（疑似 API 字段缺失），故 PR 排行主要依据仓库内置排序及最近活跃度综合判断；Issue 数据完整。

---

## 一、热门 Skills 排行（PR Top）

### 1. 🛠️ skill-creator 修复合集（PR #1298 / #539 / #1769）
- **功能**：修复 `skill-creator` 在 Windows 下 `select()` 调用失败、trigger 评估出现 0% recall、YAML 特殊字符未引号报错等核心缺陷
- **讨论热点**：触发器评估机制几乎对所有 skill 失效（precision 100% / recall 0%），导致负样本被误判通过
- **状态**：OPEN（#1298 最近更新 2026-09-16）
- **链接**：[#1298](https://github.com/anthropics/skills/pull/1298) · [#539](https://github.com/anthropics/skills/pull/539) · [#1769](https://github.com/anthropics/skills/pull/1769)

### 2. ⛓️ proofcore-contract-auditor（PR #1771）
- **功能**：基于 Merkle 零存储协议，将 Solidity/Rust 智能合约静态审计结果锚定到 TON 区块链
- **讨论热点**：首个 Web3/区块链原生 Skill，将"审计可验证性"作为核心差异化
- **状态**：OPEN（2026-09-15 创建，次日更新）
- **链接**：[#1771](https://github.com/anthropics/skills/pull/1771)

### 3. 🧪 AI Watch Tester (AWT)（PR #822）
- **功能**：赋予 Claude 视觉 + 浏览器控制能力，实现零代码 E2E 测试生成与回放
- **讨论热点**：跨 6 个月持续维护，是"AI 驱动测试"方向代表性 Skill
- **状态**：OPEN（最近更新 2026-09-19）
- **链接**：[#822](https://github.com/anthropics/skills/pull/822)

### 4. 🎮 Pyxel 复古游戏开发 Skill（PR #525）
- **功能**：Python 复古游戏开发，涵盖实现、无头帧检查、状态校验与发行检查清单
- **讨论热点**：长期停留在 OPEN（超过 6 个月），是观察 Anthropic 对"娱乐/小游戏"类 Skill 接受度的风向标
- **状态**：OPEN（最近更新 2026-09-22）
- **链接**：[#525](https://github.com/anthropics/skills/pull/525)

### 5. 📝 document-typography（PR #514）
- **功能**：修复 AI 生成文档中的孤字、寡行、编号错位等排版问题
- **讨论热点**：触及"Claude 生成的所有文档都受影响"这一普适痛点
- **状态**：OPEN（创建于 2026-03-04，长期未合并）
- **链接**：[#514](https://github.com/anthropics/skills/pull/514)

### 6. 💥 blast-radius（PR #1776）
- **功能**：批量/破坏性写入前的检查清单（归档用户、撤销权限、批量发信等）
- **讨论热点**：填补了"查询对行是对的"≠"批量操作对世界是对的"这一关键认知缺口
- **状态**：OPEN（2026-09-17 创建）
- **链接**：[#1776](https://github.com/anthropics/skills/pull/1776)

### 7. 🔌 mcp-builder 兼容性修复（PR #1742）
- **功能**：适配 `mcp>=2.0.0` 的 `streamable_http_client` 重命名与自定义 header 机制
- **讨论热点**：MCP 协议版本演进下的破坏性变更修复，阻塞所有依赖 mcp-builder 的下游
- **状态**：OPEN（最近更新 2026-09-19）
- **链接**：[#1742](https://github.com/anthropics/skills/pull/1742)

### 8. 📄 ODT 文档 Skill（PR #486）
- **功能**：OpenDocument 格式 (.odt/.ods) 的创建、模板填充与 HTML 解析
- **讨论热点**：补齐开源/ISO 格式覆盖，是 docx/pdf 之外的第三种文档生态
- **状态**：OPEN
- **链接**：[#486](https://github.com/anthropics/skills/pull/486)

---

## 二、社区需求趋势（Issues 提炼）

| 需求方向 | 代表 Issue | 评论数 | 状态 |
|---------|-----------|-------|------|
| **🔒 信任与安全边界** | [#492](https://github.com/anthropics/skills/issues/492) 社区 Skill 冒充官方 anthropic/ 命名空间 | **43** | OPEN |
| **🏢 组织级 Skill 分发** | [#228](https://github.com/anthropics/skills/issues/228) Claude.ai 内一键共享 | **16** | OPEN |
| **🧰 Skill 创建工具链可靠性** | [#556](https://github.com/anthropics/skills/issues/556) run_eval.py 触发率 0% | **12** | OPEN |
| **🧠 长会话记忆压缩** | [#1329](https://github.com/anthropics/skills/issues/1329) compact-memory 提案 | **10** | OPEN |
| **📦 插件去重 / 安装治理** | [#189](https://github.com/anthropics/skills/issues/189) document-skills 与 example-skills 内容重复 | **6** | OPEN |
| **🪟 上下文窗口治理** | [#1487](https://github.com/anthropics/skills/issues/1487) claude-api Skill 单次注入 156k tokens | **4** | OPEN |
| **🤝 Skills ↔ MCP 协议化** | [#16](https://github.com/anthropics/skills/issues/16) 将 Skill 暴露为 MCP | **4** | OPEN |
| **🛡️ Agent 治理模式** | [#412](https://github.com/anthropics/skills/issues/412) agent-governance 安全模式 | **6** | CLOSED |
| **⚖️ 推理质量门禁** | [#1385](https://github.com/anthropics/skills/issues/1385) 三阶段质量门禁管线 | **4** | OPEN |

### 趋势速读
1. **信任危机** 是当前最大共识（43 评论的 #492 一骑绝尘），社区强烈呼吁官方对 `anthropic/*` 命名空间做严格治理。
2. **Skill 创建工具自身是质量瓶颈**：run_eval 0% 触发、trigger 评估反向调优——属于"开发者工具还没准备好迎接开发者"。
3. **企业 / 团队场景** 呼声明显（组织分发、Bedrock 适配、SharePoint 集成）。
4. **协议化倾向**：希望 Skill 与 MCP 进一步打通，使 Skill 成为可调用的标准接口。
5. **上下文治理** 成为新焦点（compact-memory、context exhaustion）。

---

## 三、高潜力待合并 Skills

以下 PR 兼具 **活跃维护** + **明确痛点** + **尚未合并**，近期落地概率较高：

| 优先级 | PR | Skill | 亮点 | 最近活跃 |
|------|----|----|------|--------|
| ⭐⭐⭐ | [#1776](https://github.com/anthropics/skills/pull/1776) | blast-radius | 破坏性操作前清单，运营/数据库/邮件场景通用 | 2026-09-18 |
| ⭐⭐⭐ | [#1771](https://github.com/anthropics/skills/pull/1771) | proofcore-contract-auditor | 首个 Web3 链上审计 Skill，差异化强 | 2026-09-16 |
| ⭐⭐⭐ | [#1742](https://github.com/anthropics/skills/pull/1742) | mcp-builder 兼容性 | 阻塞 MCP 2.x 用户，修复必要性强 | 2026-09-19 |
| ⭐⭐ | [#1703](https://github.com/anthropics/skills/pull/1703) | md2video-audio | Markdown → MP4 + 拟人配音，零成本 | 2026-09-15 |
| ⭐⭐ | [#1615](https://github.com/anthropics/skills/pull/1615) | scnet-hpc | SCNet 超算集群 SSH + Slurm 工作流 | 2026-08-24 |
| ⭐⭐ | [#822](https://github.com/anthropics/skills/pull/822) | AWT E2E Testing | 视觉驱动测试，活跃 6 个月 | 2026-09-19 |
| ⭐ | [#1792](https://github.com/anthropics/skills/pull/1792) | docx LibreOffice 超时修复 | 误报告成功是严重缺陷 | 2026-09-23 |
| ⭐ | [#1769](https://github.com/anthropics/skills/pull/1769) | skill-creator trigger 修复 | 评估工具自身失效，影响所有 Skill 优化 | 2026-09-15 |

---

## 四、Skills 生态洞察（一句话总结）

> **社区当前最集中的诉求是"信任与可验证性"——既要求官方治理冒充官方命名空间的安全边界（#492），也强烈需要 Skill 创建/评估工具链本身不再给出虚假指标（#556/#1769），进而推动 Skill 走向可审计、可治理、可在破坏性操作前自我拦截的成熟阶段。**

---

### 📌 给开发者的建议
- 如果你要贡献 Skill：**避开** docx/pdf/mcp-builder 等已被高频修复的领域，转向 Web3 审计、blasting-radius、testing-patterns 这类差异化方向。
- 如果你要使用 Skill：**警惕** `anthropic/*` 命名空间下的非官方 Skill，优先核对 PR 作者与维护者。
- 如果你在构建 Skill 平台：**投资** trigger 评估、YAML 校验、上下文注入量控制三类基础设施——它们是社区当前最稀缺的公共组件。

---

<think>The user wants me to generate a daily report for the Claude Code community based on GitHub data. Let me analyze the data carefully.

Key observations:
1. New release: v2.1.281 - adds Claude apps gateway support with Bedrock assume_role
2. Most commented issue: #16157 with 1497 comments about Max subscription usage limits - this is a massive community concern
3. Several issues about cost/usage limits
4. VS Code extension issues
5. macOS specific issues (Keychain, packaging)
6. Discord plugin issue
7. PRs are mostly small fixes for the mods/plugins

Let me organize this into the requested sections in Chinese.

For the top 10 issues, I need to balance between comment count and recency. Let me pick:
1. #16157 - 1497 comments (the dominant issue)
2. #14200 - 36 comments (Plugin rules support)
3. #10071 - 29 comments (MCP reconnection)
4. #7618 - 22 comments (VS Code terminal focus)
5. #78148 - 12 comments (historical cost tracking)
6. #77697 - 9 comments (macOS Keychain)
7. #95775 - 7 comments (Discord plugin)
8. #95966 - 6 comments (Scheduled tasks)
9. #96105 - 5 comments (macOS 12 stuck version)
10. #95960 - 4 comments (reasoning_extraction bug)
or #90018 - prompt cache floor

For PRs, there are only 6 listed, but I should pick the most important:
1. #96434 - security-guidance (fixes security issue)
2. #96487 - telemetry version info
3. #96570 - command.run hook fix
4. #96363 - git diff --no-color
5. #96364 - AGENTS.md pagination
6. #79150 - code-review README update

Let me draft the report now in Chinese, professional and concise.</think>

# Claude Code 社区动态日报
**日期：2026-09-24**

---

## 📌 今日速览

今日 Claude Code 发布 **v2.1.281**，重点强化 Claude 应用网关（Bedrock assume_role、Desktop key 策略块）。社区层面，**Max 订阅用量限制争议**（#16157）持续发酵，评论数突破 1497 条且 👍 接近 700，是仓库有史以来最受关注的单条 issue 之一；同时 VS Code 扩展、macOS 桌面版打包、Discord 插件订阅等近期 bug 也集中爆发。

---

## 🚀 版本发布

### v2.1.281（今日）

**What's Changed**

- **Claude 应用网关（apps gateway）**：在 `desktop` 策略块中支持更新的 Claude Desktop key，新增 `blockReadsOutsideWorkingDirectories` 与 `disableBypassPermissionsMode` 选项，强化本地文件访问边界控制。
- **Bedrock 上游 `assume_role`**：网关在调用 Bedrock 时以 IAM 角色身份执行，简化企业部署的身份管理链路。

> 两条更新都面向企业 / 平台集成场景，未涉及 CLI / IDE 端用户直接可见的新功能。

---

## 🔥 社区热点 Issues

| # | Issue | 评论 / 👍 | 重点 |
|---|-------|----------|------|
| [#16157](https://github.com/anthropics/claude-code/issues/16157) | [BUG] Max 订阅瞬间撞用量上限 | 1497 / 694 | **当前仓库热度断层第一**。用户普遍反馈 Max 20x 计划在新会话一开始就触发限流，与订阅承诺不符。社区已演化出 workaround 集合，官方仍未给出统一答复。 |
| [#14200](https://github.com/anthropics/claude-code/issues/14200) | [FEATURE] Plugins 支持 rules | 36 / 108 | 长期受关注。Plugin 系统目前无法携带 `rules`，用户希望像主仓库一样对插件进行上下文约束，是插件生态扩张的关键缺口。 |
| [#10071](https://github.com/anthropics/claude-code/issues/10071) | [FEATURE] MCP 断线自动重连 | 29 / 43 | MCP 是 Claude Code 的核心扩展面，但每次断连都要手动 `/mcp` 重启，体验割裂。 |
| [#7618](https://github.com/anthropics/claude-code/issues/7618) | [BUG] `/ide` 命令在终端关闭时仍抢 VS Code 焦点 | 22 / 38 | macOS 上长期存在的 IDE 集成 UX bug，反映出外部终端与 VS Code 进程间的窗口焦点协议存在缺陷。 |
| [#78148](https://github.com/anthropics/claude-code/issues/78148) | [FEATURE] 跨会话历史用量追踪 | 12 | `/cost` 仅显示当前会话，缺乏周/月汇总。团队用户与个人开发者都呼吁补齐。 |
| [#77697](https://github.com/anthropics/claude-code/issues/77697) | [BUG] macOS Keychain 无 trusted-application list → 每次读取都弹授权 | 9 / 12 | 安全/UX 双输：既不优雅也降低凭据保护强度。 |
| [#95775](https://github.com/anthropics/claude-code/issues/95775) | [CLOSED] Discord 频道插件入站消息静默丢弃（2.1.278） | 7 | 已被官方关闭但作为"重现 #86566"回流，提示插件 → MCP → 会话链路在 2.1.278 存在回归。 |
| [#95966](https://github.com/anthropics/claude-code/issues/95966) | [BUG] 定时任务静默跳过执行窗口 | 6 | Desktop 端 Scheduled Tasks 在主机与调度引擎均活跃的情况下不触发，run history 无记录，严重影响自动化场景。 |
| [#96105](https://github.com/anthropics/claude-code/issues/96105) | [BUG] macOS 12 Desktop 锁在 2.1.260，Opus 5.5 灰显 | 5 | 版本矩阵与更新通道不一致，老 macOS 用户被夹在稳定版与最新版之间。 |
| [#90018](https://github.com/anthropics/claude-code/issues/90018) | [BUG] `totalTokensReminder` 造成 prompt-cache floor；关闭后恢复增量命中 | 4 / 2 | 揭示一个深层的成本/性能耦合缺陷：成本提示副作用影响缓存命中率。 |

> 备注：#95960（reasoning_extraction 把用户自定义分析章节误读为推理抽取）与 #94694（"接近周限额"横幅在 54% 时提前触发）也是值得关注的近期回归类 bug。

---

## 🛠 重要 PR 进展

| # | PR | 说明 |
|---|----|------|
| [#96434](https://github.com/anthropics/claude-code/pull/96434) | **security-guidance**：阻止 reviewer 触及被 deny 规则屏蔽的文件 | 修复 #96276。Stop-hook / commit-and-push review 提示会从 `git diff` 中拼装内容，可能把 `secrets.yaml`、`config/prod.json` 等凭据间接注入模型上下文；本 PR 把这些路径从 reviewer 视野中剥离，提升企业级部署安全性。 |
| [#96487](https://github.com/anthropics/claude-code/pull/96487) | **telemetry**：携带 engine 的 `version` / `base` / `builtAt` | 自 2.1.281 起 `$.session.version()` 暴露构建信息，mod 现在能随 telemetry 上报版本，便于外部构建排障与版本分布统计。 |
| [#96570](https://github.com/anthropics/claude-code/pull/96570) | **diff**：`command.run` hook 用字面命令名匹配 | 修复 hook 自匹配引发的启动期等待死锁。 |
| [#96363](https://github.com/anthropics/claude-code/pull/96363) | **diff**：`git diff` 加 `--no-color` | 仓库或个人 `color.ui=always` 时 ANSI 转义会"吃掉"hunk 内容；header / `--shortstat` 不受影响，仅 diff 体被空化。本 PR 根治此回归。 |
| [#96364](https://github.com/anthropics/claude-code/pull/96364) | **agents-md**：嵌套 `AGENTS.md` 自动分页读取不再视为"已送达" | Read 工具超过 token 上限会自动分页，旧逻辑误认为整文件已交付，导致后续轮次错误地不再挂载 AGENTS.md 上下文。 |
| [#79150](https://github.com/anthropics/claude-code/pull/79150) | **docs**：对齐 code-review README 与现行校验式命令 | README 仍在描述已被替换的"git blame 历史 agent + 0–100 置信度评分 + 80 阈值"流程，本 PR 删除陈旧段落。 |

---

## 📈 功能需求趋势

从 Issues + PR 综合提炼，社区最强烈的诉求集中在以下方向：

1. **用量与成本透明化**（高频）
   - 跨会话历史用量追踪（#78148）
   - 用量横幅提前误报（#94694）
   - Max 计划限额争议（#16157）
   - 升级计划后配额未跟上（#96581）
   - 凭证余额不同步（#96585）

2. **IDE / Desktop 集成体验**（高频）
   - VS Code 扩展：终端焦点抢占（#7618）、光标渲染偏移（#96571）、历史对话渲染缺失末尾消息（#95656）、managed settings 跳过审批对话框（#96588）
   - macOS Desktop 打包与更新通道错位（#96105、#93528）

3. **插件与 MCP 生态**
   - Plugin 支持 rules（#14200）
   - MCP 自动重连（#10071）
   - Discord 等官方插件可靠性（#95775）

4. **跨平台认证与会话管理**
   - macOS Keychain trusted-application list（#77697）
   - Windows OAuth `user:profile` scope 缺失（#93967）
   - `/clear` 继承旧 `/rename` 名（#96580）

5. **企业 / 自动化**
   - Scheduled Tasks 静默失效（#95966）
   - 安全 reviewer 触及受限文件（#96434）
   - `claude project mv` 一键迁移项目状态（#96018）

---

## 🧑‍💻 开发者关注点与高频痛点

- **配额体验与"信任鸿沟"**：Max 20x 用户普遍遇到"刚开 session 就触顶"的现象，配合 54% 就弹"接近周限"的横幅和升级后配额不增长等问题，正在动摇付费订阅的核心信任。#16157 单条 1497 评论 + 694 👍 已经构成需要官方正式回应的临界事件。
- **缓存与成本的耦合反直觉**：`totalTokensReminder`（#90018）、`CLAUDE_CODE_DISABLE_AUTO_MEMORY=1` 后才能恢复缓存命中（#96578），说明**展示层 UX 提示**正在暗中破坏**底层成本优化**，开发者希望官方明确哪些开关会影响 cache hit/miss。
- **IDE 扩展细节 bug 集中**：仅过去 24 小时就有 5 条以上 VS Code 扩展相关 bug，提示 IDE 集成在 2.1.27x 升级后存在较多边缘场景回归。
- **插件生态规则缺口**：`rules` 不可注入 Plugin（#14200）使得任何带敏感提示词或合规要求的组织都无法把 Plugin 真正纳入治理，阻碍企业落地。
- **定时任务可靠性**：Desktop 的 Scheduled Tasks 静默失败而无任何 run history 记录，是自动化用户最危险的故障模式——失败不可见。
- **凭据存储安全 vs UX**：macOS Keychain 缺少 trusted-application list 导致每次读凭据都弹窗，既不优雅也削弱了"系统级凭据保护"的安全叙事。
- **项目目录迁移的高摩擦成本**：transcripts、memory、prompt history、session registry、profiles 全部与目录路径耦合，开发者希望官方提供 `claude project mv`（#96018）这种一等公民命令。
- **GitHub 集成仍未稳定**：今天新增 3 条 GitHub connector / 100 积分领取相关 bug（#96582、#96586、#96587、#96579），说明云端 ↔ GitHub OAuth 流仍处在快速迭代但用户体验粗糙的阶段。

---

*日报基于 GitHub 公开数据自动汇总，覆盖 anthropics/claude-code 仓库过去 24 小时内的 Releases、Issues 与 Pull Requests 活动。*

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

<think>Let me analyze the GitHub data for OpenAI Codex community dynamics on 2026-09-24 and generate a comprehensive daily report in Chinese.

Key observations:
1. Releases: 7 alpha releases (rust-v0.158.0-alpha.6 down to alpha.2, plus v0.157.0-alpha.11 and v0.155.0-alpha.16.4) - all very rapid iterations
2. Issues: 50 updated, 30 most-discussed shown
3. PRs: 50 merged, 20 shown - all from copyberry[bot] (likely an automated bot)

Key themes from Issues:
- Windows desktop/app issues (many)
- TUI/CLI issues (whimsy effects, sparkles, etc.)
- Sandbox issues
- Computer Use issues
- IDE extension issues
- Rate limits display issues
- GPU access in sandbox

Key themes from PRs:
- TUI fixes (model picker recursion)
- WebSocket improvements
- Guardian authorization refactoring
- Capability discovery
- Extension hooks
- Windows sandbox credentials

Let me write a structured Chinese daily report.</think>

# OpenAI Codex 社区动态日报
**日期：2026-09-24**

---

## 📌 今日速览

今日 Codex 仓库进入高频迭代节奏，**rust-v0.158.0** 在 24 小时内连发 5 个 alpha 版本（alpha.2 至 alpha.6），同时伴随 v0.157.0-alpha.11 和 v0.155.0-alpha.16.4，显示出 0.158 正式版前的密集收尾。Issues 端 **Windows 桌面端** 问题集中爆发（Core setup、Computer Use、IAB 路由、sandbox 等多条线程），**TUI/Astra 动效** 争议也持续发酵；PR 端则全部由 `copyberry[bot]` 自动化机器人合入，重点围绕 **Guardian 授权重构、WebSocket 会话、扩展钩子与 Windows 沙箱** 等基础设施改进。

---

## 🚀 版本发布

过去 24 小时共发布 **7 个 alpha 版本**，核心主线围绕 rust-v0.158.0：

| 版本 | 说明 |
|------|------|
| `rust-v0.158.0-alpha.6` | 0.158.0-alpha.6 |
| `rust-v0.158.0-alpha.5` | 0.158.0-alpha.5 |
| `rust-v0.158.0-alpha.4` | 0.158.0-alpha.4 |
| `rust-v0.158.0-alpha.3` | 0.158.0-alpha.3 |
| `rust-v0.158.0-alpha.2` | 0.158.0-alpha.2 |
| `rust-v0.157.0-alpha.11` | 0.157.0-alpha.11（同步收尾） |
| `rust-v0.155.0-alpha.16.4` | 0.155.0-alpha.16.4（backport 修复） |

**观察**：0.158 连续 alpha 节奏表明 release 团队正在快速收敛残余问题；backport 到 0.155 通常意味着关键回归修复需要回灌到稳定通道。

---

## 🔥 社区热点 Issues

> 以下按社区关注度（评论 + 👍）综合排序

### 1. [#25319 — VS Code 扩展会话按 workspace 隔离](https://github.com/openai/codex/issues/25319) · 💬 39 · 👍 93
**类别**：enhancement / extension
**为何重要**：企业用户在多 workspace 环境下混用 Codex 聊天记录是长期痛点；累计 93 赞、39 评论表明这几乎是一项"全民呼声"。

### 2. [#3141 — 沙箱内允许 GPU 访问](https://github.com/openai/codex/issues/3141) · 💬 37 · 👍 62
**类别**：enhancement / sandbox
**为何重要**：Linux 用户在 sandbox 模式下无法访问 NVIDIA GPU，直接阻断本地推理与 CUDA 工作流；作为已知最久的功能请求之一仍 open，说明涉及安全模型调整。

### 3. [#44561 — 默认关闭 Astra "星空" 动效](https://github.com/openai/codex/issues/44561) · 💬 33 · 👍 77
**类别**：enhancement / TUI
**为何重要**：用户普遍反馈 Astra 的星星动画干扰阅读与进度判断，77 赞、33 评论代表强烈的 UX 反对意见。

### 4. [#47383 — Windows 10 Core setup 阻断审批模式](https://github.com/openai/codex/issues/47383) · 💬 25
**类别**：bug / windows-os / sandbox
**为何重要**：桌面更新后用户无法进入任何审批流程，0 赞但 25 评论说明这是阻塞性故障，需优先修复。

### 5. [#44696 — Windows sandbox helper 全局失败](https://github.com/openai/codex/issues/44696) · 💬 19
**类别**：bug / windows-os / sandbox
**为何重要**：所有 `exec_command` 和文件读取在 sandbox 初始化层失败，影响 Windows 用户基本可用性。

### 6. [#45317 — Chrome 浏览器集成拒绝 API-key 认证](https://github.com/openai/codex/issues/45317) · 💬 18
**类别**：bug / windows-os / browser
**为何重要**：API-key 用户在被错误地引导到 ChatGPT-only 鉴权分支后，浏览器自动化能力彻底失效。

### 7. [#17793 — Backspace 删除多个字符](https://github.com/openai/codex/issues/17793) · 💬 21 · 👍 5
**类别**：bug / TUI
**为何重要**：TUI 在 Kitty 等终端下的输入处理回归，长期未修复，社区耐心消耗明显。

### 8. [#44640 — 关闭 Sparkle 动效](https://github.com/openai/codex/issues/44640) · 👍 18
**类别**：enhancement / TUI
**为何重要**：与 #44561 同源诉求，反映出 Astra 主题的"装饰性 UI"正成为社区共识级的负面反馈。

### 9. [#43594 — Windows Computer Use 后端被错误门控](https://github.com/openai/codex/issues/43594) · 💬 14
**类别**：bug / windows-os / computer-use
**为何重要**：`@oai/sky` 注册逻辑错误导致 Windows 端 Computer Use 功能实质被禁用，影响平台间功能对等性。

### 10. [#47511 — 桌面端缺失 git commit & push 按钮](https://github.com/openai/codex/issues/47511) · 👍 13
**类别**：bug / app
**为何重要**：26.917.51856 版本的 UI 回归，标准 Git 工作流按钮被移除，影响日常开发闭环体验。

> 其他值得跟踪：[#18822 VS Code 状态栏 Rate limit 缺失](https://github.com/openai/codex/issues/18822)、[#22293 CLI 更新不清理旧版本](https://github.com/openai/codex/issues/22293)、[#46647 远程会话写锁未显示持有者](https://github.com/openai/codex/issues/46647)。

---

## 🛠️ 重要 PR 进展

> 今日合入的 50 个 PR **全部由 `copyberry[bot]` 自动提交**，呈现明显的"批量重构"特征，按主题归类如下：

### 网络与连接层
- **[#47709 — Resume 预热走缓存 WebSocket 会话](https://github.com/openai/codex/pull/47709)**：恢复启动预热后的会话并通过正常路径调度 resume，避免重复握手。
- **[#47701 — 空闲线程可预热 / 修复 WebSocket](https://github.com/openai/codex/pull/47701)**：暴露 `CodexThread::prewarm()`，健康连接不再被反复预热。
- **[#47703 — 保留 ChatGPT 后端网络策略](https://github.com/openai/codex/pull/47703)**：默认 HTTP client 绕过账户策略的隐患修复，凭证撤销行为现在会真正生效。
- **[#47712 — unified exec 输出缓冲原子化](https://github.com/openai/codex/pull/47712)**：将 transcript 与 polling 缓冲合并到共享互斥锁，防止取消导致 chunk 写入撕裂。

### Guardian 授权大重构（连续 5 个 PR）
- **[#47686](https://github.com/openai/codex/pull/47686)、[#47688](https://github.com/openai/codex/pull/47688)、[#47689](https://github.com/openai/codex/pull/47689)、[#47690](https://github.com/openai/codex/pull/47690)、[#47691](https://github.com/openai/codex/pull/47691)**：彻底下线 `features.guardianv2.thread_context` 标志，强制启用 `GuardianContextMode::ThreadOwned`；移除遗留 session-level capture mode 与旧授权证据路径，简化 fork / 审批 / compaction 一致性逻辑。**这是本轮最显著的重构方向**。

### 扩展能力
- **[#47679 — 模型请求/响应流扩展钩子](https://github.com/openai/codex/pull/47679)**：新增 `ModelRequestContributor` 与 `ModelResponseInterceptor`，为第三方贡献 `client_metadata` 与流拦截器打开通道。
- **[#47683 — 执行器能力发现 V2 基础设施](https://github.com/openai/codex/pull/47683)**：定义 `capabilities/discoverV2` 协议、声明 `capabilityDiscoveryV2`，并在启动时预热插件/技能目录。

### Windows 沙箱加固
- **[#47695 — 修复被拒 Windows sandbox 凭据](https://github.com/openai/codex/pull/47695)**：provisioning 阶段主动校验账户标志位，根治"注册成功但运行时登入失败"的隐性故障。

### 测试与 CI
- **[#47698 / #47696](https://github.com/openai/codex/pull/47698)**：WebSocket 测试服务器与 lagged-event 测试的关闭竞态修复。
- **[#47693 — DotSlash 安装配置 curl 重试](https://github.com/openai/codex/pull/47693)**：CI 可靠性补丁。
- **[#47680 — exec-server RPC 时序埋点](https://github.com/openai/codex/pull/47680)**：拆分调度与响应的 span offset，便于后续性能分析。

### TUI / 配置
- **[#47717 — 修复模型选择器递归事件派发](https://github.com/openai/codex/pull/47717)**：解决 Astra 模型选择时 TUI 大派发器递归占用栈帧的问题。
- **[#47713 — 共享配置 crate 解耦](https://github.com/openai/codex/pull/47713)**：将 `Provider` / `RetryConfig` 迁入 `codex-client`，feature-state metric 迁入 `codex-core`，改善依赖图。

---

## 📈 功能需求趋势

从近 24 小时活跃 Issue 与 PR 中可提炼出 **5 个明显的社区共识方向**：

| 方向 | 代表 Issue / PR | 信号强度 |
|------|----------------|----------|
| **IDE / 工作区级会话管理** | [#25319](https://github.com/openai/codex/issues/25319) | ⭐⭐⭐⭐⭐ |
| **Windows 桌面端功能对等性**（Computer Use、IAB 浏览器、sandbox 凭据、审批模式） | [#47383](https://github.com/openai/codex/issues/47383)、[#43594](https://github.com/openai/codex/issues/43594)、[#47695](https://github.com/openai/codex/pull/47695) | ⭐⭐⭐⭐⭐ |
| **TUI "装饰性 UI" 反向诉求**（关闭 Astra 星空/闪光动效） | [#44561](https://github.com/openai/codex/issues/44561)、[#44640](https://github.com/openai/codex/issues/44640)、[#47717](https://github.com/openai/codex/pull/47717) | ⭐⭐⭐⭐ |
| **Sandbox 边界扩展**（GPU 访问、Btrfs、WSL2、socket mount） | [#3141](https://github.com/openai/codex/issues/3141)、[#47415](https://github.com/openai/codex/issues/47415)、[#47429](https://github.com/openai/codex/issues/47429) | ⭐⭐⭐⭐ |
| **扩展 / 第三方能力钩子** | [#47679](https://github.com/openai/codex/pull/47679)、[#47683](https://github.com/openai/codex/pull/47683) | ⭐⭐⭐ |

可观察到的冷信号：**新模型支持**（仅 [#47420 "No GPT-6 Sol"](https://github.com/openai/codex/issues/47420) 一条，且反映的是 *缺失* 而非诉求），说明 9 月底社区关注重心已从"模型名单"转向"工程稳定性与跨平台对等"。

---

## 👨‍💻 开发者关注点

综合评论与 PR 内容，可归纳当前 **开发者的真实痛点**：

1. **Windows 是体验重灾区**。近 24 小时 Top 30 Issue 中近一半（#47383、#44696、#45317、#43594、#45340、#45996、#45028、#47429、#42968、#47738、#47734、#47739）带有 `windows-os` 标签，涵盖沙箱初始化、Computer Use 门控、IAB 路由、浏览器鉴权、凭据修复、时区错位等。Windows 用户的"功能正常但跨平台对不齐"是当前最突出的不满。

2. **TUI 装饰性动效干扰工作流**。Astra 的星空与 Sparkle 动画引发多用户报告"误判为屏幕故障"或"无法判断 agent 进度"，社区情绪趋于一致反感。

3. **沙箱太严 vs. 沙箱太松同时存在**。一方面 Linux 沙箱拦掉了 NVIDIA GPU、Btrfs mount、WSL2 路径；另一方面 Windows 沙箱在权限和凭据层面又出现"配置显示正常但实际被拒"的执行冲突，反映沙箱策略在不同平台的实现成熟度差异。

4. **IDE 扩展缺少项目级隔离**。VS Code 用户在多项目/多工作区切换时会"串台"，是 0.158 周期内呼声最高的功能请求。

5. **CLI 长期痛点（仍未根治）**。Backspace 行为异常（#17793）、更新不清理旧版本（#22293）、CLI/TUI 上 service_tier 不持久（#47534）——这些"小毛病"在版本高速迭代中持续累积，影响工程师对 CLI 稳定性的信任。

6. **自动化重构进入"规模化"阶段**。今日 PR 全部由 `copyberry[bot]` 合入，主题高度集中（Guardian / WebSocket / 扩展钩子），提示 OpenAI 内部已开启一整套系统性重构，下一阶段外部开发者可能感受到更明显的 API 与行为调整，建议关注 0.158 正式版的 changelog。

---

*报告数据来源：[github.com/openai/codex](https://github.com/openai/codex) · 截止时间 2026-09-24*

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

<think>The user wants me to generate a Chinese daily report for Gemini CLI community dynamics on 2026-09-24. Let me analyze the data provided:

1. **Releases** (past 24 hours):
   - v0.62.0-nightly.20260924.g8e70c862f
   - v0.62.0-preview.0
   - v0.61.0
   - v0.61.0-preview.1

2. **Issues** (50 total updated, top 30 shown by comment count) - need to pick 10 most important
3. **PRs** (38 total updated, top 20 shown by comment count) - need to pick 10 most important

Let me analyze and structure this report:

**Today's Highlights:**
- Multiple releases including v0.61.0 stable, v0.61.0-preview.1, v0.62.0-preview.0, and v0.62.0-nightly
- New Gemini 3.8 Flash and Gemini 3.5 Flash Lite model support added
- Retry progress indicator fix is a major UX fix
- Major focus areas: agent subagents, browser agent, auto memory system

**Version Releases Summary:**
- v0.61.0 stable release
- v0.61.0-preview.1 (patch)
- v0.62.0-preview.0
- v0.62.0-nightly

**Key Issues to highlight (10 most important based on comment count, priorities, themes):**
1. #22323 (13 comments, P1) - Subagent recovery MAX_TURNS issue
2. #19873 (9 comments, P2) - Zero-Dependency OS Sandboxing
3. #21409 (8 comments, P1, 8 likes) - Generalist agent hangs
4. #22745 (7 comments, P2) - AST-aware file reads
5. #21968 (6 comments, P2) - Skills and sub-agents usage
6. #26525 (5 comments, P2) - Auto Memory redaction
7. #26522 (4 comments, P2) - Auto Memory retries
8. #22267 (4 comments, P2) - Browser Agent settings.json override
9. #22232 (4 comments, P3) - Browser Agent resilience
10. #21983 (4 comments, P1) - Browser subagent fails in Wayland
11. #21000 (4 comments, P3) - Native file tools for task tracker
12. #20079 (4 comments, P2) - Symlink agents not recognized
13. #26523 (3 comments, P2) - Auto Memory invalid patches
14. #24246 (3 comments, P2) - 400 error with >128 tools
15. #23571 (3 comments, P2) - Tmp scripts in random spots
16. #22672 (3 comments, P2) - Discourage destructive behavior
17. #22186 (3 comments, P1) - get-shit-done output hook crash
18. #20195 (3 comments, P3) - Local Subagent Sprint 1
19. #18836 (3 comments, P3) - Persistent File-Based Task Tracking

Let me select the top 10 most strategic ones:
1. #22323 - Subagent MAX_TURNS bug (P1, most comments)
2. #21409 - Generalist agent hangs (P1, 8 likes, critical)
3. #21983 - Browser subagent Wayland (P1)
4. #22186 - get-shit-done crash (P1)
5. #19873 - Zero-Dep OS Sandboxing (strategic feature)
6. #22745 - AST-aware file reads (strategic enhancement)
7. #21968 - Subagent usage (key product feedback)
8. #26525 - Auto Memory redaction (security)
9. #22267 - Browser Agent settings.json (P2 bug)
10. #22672 - Discourage destructive behavior (safety)

Or include one about memory issues too. Let me finalize:
1. #22323 - P1 bug, 13 comments - Subagent MAX_TURNS bug
2. #21409 - P1, 8 likes - Generalist agent hangs
3. #19873 - P2 strategic - Zero-Dep OS Sandboxing
4. #22745 - P2 strategic - AST-aware tools
5. #21968 - P2 product feedback - Skills/sub-agents usage
6. #26525 - P2 security - Auto Memory redaction
7. #22267 - P2 bug - Browser Agent settings
8. #21983 - P1 bug - Browser Wayland
9. #22672 - P2 safety - Destructive behavior
10. #18836 - P3 architecture - Persistent task tracking

**Important PRs (top 10):**
1. #29265 - Fix session context poisoning on interrupted turns (P2) - important agent fix
2. #29451 - Bound tool output size & memory lifecycle (P1, size/xl)
3. #29443 - Gemini 3.8 Flash & 3.5 Flash Lite support (P1)
4. #29468 - Retry progress indicator fix (P1)
5. #29359 - web_fetch keep table rows/columns (M)
6. #29358 - Reverse-search highlight alignment (M)
7. #29354 - --userns=keep-id for rootless podman (P2)
8. #29352 - Document hook decision values (P3)
9. #29353 - Fix env redaction docs (P2)
10. #29472 - Changelog v0.61.0 (documentation)

Also notable:
- #29473 - Version bump
- #29471 - Version bump
- #29470 - Changelog v0.62.0-preview.0
- #19013 - Windows extension lock error

**Feature Trends:**
1. **Subagents/Agents architecture** - Many issues around subagent behavior, recovery, hangs
2. **Browser Agent** - Settings.json, Wayland, lock recovery
3. **Auto Memory system** - Redaction, retries, invalid patches, quality
4. **Sandboxing & Security** - Zero-Dep OS sandboxing, rootless podman, redaction
5. **Performance** - Tool output size, memory lifecycle, terminal resize
6. **New Model Support** - Gemini 3.8 Flash, 3.5 Flash Lite
7. **AST-aware tools** - Code reading efficiency
8. **UX improvements** - Retry indicators, reverse-search

**Developer Pain Points:**
1. Agent hangs and unexpected termination
2. Subagent recovery state issues
3. Browser Agent reliability (settings ignored, Wayland)
4. Auto Memory system noise/redaction
5. Tool count limits (>128/400)
6. Crash on output hooks
8. Vite interactive prompt stuck
9. Symlink agents not recognized
10. /compress not persistent

Let me write this in clean Chinese, well-structured format.</think>

# Gemini CLI 社区动态日报

**日期：2026-09-24**

---

## 1. 今日速览

今日 Gemini CLI 发布节奏密集：稳定版 **v0.61.0** 正式落地，**v0.61.0-preview.1**、**v0.62.0-preview.0** 及夜间版同步推进，社区关注的焦点是 **Gemini 3.8 Flash / 3.5 Flash Lite 新模型接入** 与 **Agent/Subagent 架构稳定性**（多个 P1 Bug 集中在子代理中断恢复与 generalist 代理挂起）。开发者反馈普遍指向四大痛点：**子代理行为可控性、Auto Memory 安全重写、Browser Agent 跨平台兼容、长会话内存治理**。

---

## 2. 版本发布

| 版本 | 类型 | 要点 |
|---|---|---|
| **v0.61.0** | Stable | 主线稳定版，集成 0.60 preview 系列累积变更 |
| **v0.61.0-preview.1** | Preview patch | 针对 PR #29443 的 cherry-pick 修复 |
| **v0.62.0-preview.0** | Preview | 引入 v0.61.0-preview.0 变更日志；a2a-server 对不支持的 store 提前返回 |
| **v0.62.0-nightly.20260924** | Nightly | 加入 VSC 集成测试检查、CLI 重试进度指示器 |

**关键看点**：
- PR #29443 关闭，新增对 **Gemini 3.8 Flash（`gemini-3.8-flash`）** 与 **Gemini 3.5 Flash Lite（`gemini-3.5-flash-lite`）** 的支持，原 3.x 模型完成 GA 推广
- PR #29468 修复了网络恢复/429/503 重试时终端长期停留在 "Thinking..." 的体验问题（[#29468](https://github.com/google-gemini/gemini-cli/pull/29468)）

完整变更：[v0.62.0-nightly](https://github.com/google-gemini/gemini-cli/pull/29473) ｜ [v0.62.0-preview.0](https://github.com/google-gemini/gemini-cli/pull/29470)

---

## 3. 社区热点 Issues

| # | 标题 | 优先级 | 评论数 | 重要性 |
|---|---|---|---|---|
| [#22323](https://github.com/google-gemini/gemini-cli/issues/22323) | **Subagent 在达到 MAX_TURNS 后被误报为 GOAL 成功** | P1 | 13 | 子代理中断信号被吞掉，破坏任务可观测性，是社区讨论最多的架构性 Bug |
| [#21409](https://github.com/google-gemini/gemini-cli/issues/21409) | **Generalist agent 长时间挂起不返回** | P1 | 8（8 👍） | 简单建目录等基础操作即可触发、长达 1 小时无响应，强制要求不委派给子代理才能绕过 |
| [#19873](https://github.com/google-gemini/gemini-cli/issues/19873) | **零依赖 OS 沙箱 + 执行后意图路由** | P2 | 9 | 借助 Gemini 3 的 bash 训练偏好做安全沙箱，是平台层重大演进提案 |
| [#22745](https://github.com/google-gemini/gemini-cli/issues/22745) | **评估 AST 感知文件读取/搜索/代码库映射的影响** | P2 | 7 | 通过 AST 工具减少误读与 token 噪声的 EPIC 议题，呼应 36k/turn 基线优化方向 |
| [#21968](https://github.com/google-gemini/gemini-cli/issues/21968) | **Gemini 几乎不主动使用 skills 和 sub-agents** | P2 | 6 | 产品体验反馈：模型未自动调度用户自定义能力，需要显式指令才能调用 |
| [#26525](https://github.com/google-gemini/gemini-cli/issues/26525) | **Auto Memory 增加确定性脱敏并减少日志** | P2 | 5 | Auto Memory 当前依赖 LLM 后置脱敏，存在隐私风险，需引入确定性重写 |
| [#22267](https://github.com/google-gemini/gemini-cli/issues/22267) | **Browser Agent 忽略 settings.json（如 maxTurns）** | P2 | 4 | `AgentRegistry` 注册时正确合并，但 BrowserAgent 内部硬编码忽略用户覆盖 |
| [#22672](https://github.com/google-gemini/gemini-cli/issues/22672) | **Agent 应阻止/劝阻破坏性行为（如 `git reset --force`）** | P2 | 3 | 安全相关：复杂 git/DB 场景下模型可能选用不安全命令，需要策略约束 |
| [#18836](https://github.com/google-gemini/gemini-cli/issues/18836) | **将 WriteToDo 替换为基于文件的持久任务跟踪（CRUD）** | P3 | 3 | 解决 in-context todo 带来的"context rot"、token 浪费与会话间丢失问题 |
| [#22186](https://github.com/google-gemini/gemini-cli/issues/22186) | **get-shit-done 输出 hook 触发崩溃** | P1 | 3 | 输出流末尾异常导致 CLI 直接崩溃，影响外部 skill 集成稳定性 |

**社区反应**：P1 议题集中在"代理可观测性"与"挂起/崩溃"，P2 议题聚焦"内存安全 + 工具智能调度"。

---

## 4. 重要 PR 进展

| PR | 标题 | 说明 |
|---|---|---|
| [#29443](https://github.com/google-gemini/gemini-cli/pull/29443) | **新增 Gemini 3.8 Flash & 3.5 Flash Lite** | 推动两个新模型进入 Flash / Flash Lite GA 档位（已合并 → v0.61.0-preview.1） |
| [#29468](https://github.com/google-gemini/gemini-cli/pull/29468) | **修复连接恢复期间的重试进度指示** | 在 429/503 等场景下让 UI 不再卡在 "Thinking..."，显著提升网络抖动场景的可观察性 |
| [#29451](https://github.com/google-gemini/gemini-cli/pull/29451) | **限制工具输出大小并优化长会话内存生命周期（XL）** | 针对长跑测试/构建输出无界增长导致内存膨胀的 P1 修复 |
| [#29265](https://github.com/google-gemini/gemini-cli/pull/29265) | **防止中断回合毒化会话上下文** | 修复 SIGINT/超时/工具 abort 后污染历史导致的连续 prompt 失败（已关闭） |
| [#29359](https://github.com/google-gemini/gemini-cli/pull/29359) | **`web_fetch` 保留表格行列** | html-to-text 在缺少 `table` selector 时把 `<table>` 渲染成空块；本 PR 修复定价表等多列场景的丢失 |
| [#29358](https://github.com/google-gemini/gemini-cli/pull/29358) | **反向搜索高亮对齐原文位置** | 修复在 `echo İ abc` 中搜索 `abc` 只高亮 `bc` 的多字节字符 bug（Closes #29302） |
| [#29354](https://github.com/google-gemini/gemini-cli/pull/29354) | **为 rootless podman 沙箱加 `--userns=keep-id`** | 解决无 root podman 沙箱挂载工作目录 `EACCES`，导致 node-gyp 重构建失败 |
| [#29353](https://github.com/google-gemini/gemini-cli/pull/29353) | **修正环境变量脱敏配置文档** | 同步 settings schema 与运行时，提示脱敏默认关闭需显式启用（Fixes #29007） |
| [#29352](https://github.com/google-gemini/gemini-cli/pull/29352) | **文档化所有 Hook 决策值** | 把 `ask`、`approve` 加入 Hooks 参考，与原有 `allow/deny/block` 一致（Fixes #28977） |
| [#19013](https://github.com/google-gemini/gemini-cli/pull/19013) | **修复 Windows 扩展更新 EBUSY 锁** | 解决 Windows 下 `rmdir` 失败的 EBUSY 文件锁问题（Fixes #18884，help wanted） |

> 多个 `chore/release` 自动版本 bump（#29471、#29473）与 changelog PR（#29470、#29472、#29469）属于日常发版流水线动作。

---

## 5. 功能需求趋势

| 方向 | 代表议题 | 趋势信号 |
|---|---|---|
| **Subagent 行为可控性 & 可恢复性** | #22323、#21409、#21968、#21763 | 已成为 agent 体系第一痛点：状态污染、挂起、轨迹缺失、调度惰性 |
| **Browser Agent 跨平台稳健性** | #21983、#22267、#22232 | Wayland、settings.json 覆盖、浏览器锁恢复三条线齐头并进 |
| **Auto Memory 安全 & 质量** | #26516、#26522、#26523、#26525 | 围绕提取器提示词/确定性脱敏/低信号重试/inbox 校验形成集群 |
| **AST 感知工具 & token 节流** | #22745、#22746、#19561 | 配合 36.6k/turn 上下文基线，目标为外科手术式读取 |
| **零依赖 OS 沙箱** | #19873 | 把 Gemini 3 的 bash 训练偏好与最小特权沙箱结合，平台级演进 |
| **新模型矩阵扩张** | #29443 | Gemini 3.8 Flash / 3.5 Flash Lite GA，模型选择层级进一步细化 |
| **长会话内存治理** | #29451、#21335 | 工具输出有界 + `/compress` 持久化跨会话恢复 |
| **持久化任务跟踪** | #18836、#21000 | 替代 in-context WriteToDo，从会话内 todo 走向持久 CRUD |
| **终端渲染性能** | #21924、#22466 | Ink `RenderStatic` 迁移 + `\n` 转义正确性 |
| **Agent 安全策略** | #22672、#19873、#26525 | 危险命令劝阻、沙箱隔离、确定性脱敏三条防线 |

---

## 6. 开发者关注点

1. **子代理不可控**：MAX_TURNS 错误转写为 GOAL 成功（#22323）、generalist 委派即挂死（#21409）、`/bug` 报告不含子代理上下文（#21763），共同指向缺乏统一的子代理生命周期/状态语义。
2. **Auto Memory 副作用噪声**：低信号会话无限循环重试（#26522）、恶意/畸形 patch 静默丢弃（#26523）、日志与脱敏确定性不足（#26525），开发者希望引入确定性重写与 inbox quarantine 机制。
3. **Browser Agent 配置无效**：`settings.json` 中的 `maxTurns` 等参数被硬编码覆盖（#22267）、Wayland 环境下崩溃（#21983）、锁定 profile 的 fail-fast（#22232）—— 一线工具的可靠度直接影响日常使用。
4. **工具数量与输出规模**：`>128/400 tools` 触发 400（#24246）、长跑 agent 内存无界（#29451），需要工具筛选策略与输出截断/流式策略。
5. **沙箱与平台兼容**：rootless podman `EACCES`（#29354）、Windows 扩展锁（#19013）、vite 交互 prompt 卡死（

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

<think>The user wants me to generate a Chinese-language daily report for GitHub Copilot CLI community dynamics based on the provided data for 2026-09-24. Let me analyze the data carefully:

**Release:**
- v1.0.89-1: Adds GPT-6 Sol and GPT-6 Luna to model picker; fixes view tool line range handling and chat input recall behavior

**Issues (50 total, showing top 30):**
Let me identify the most important ones by comments and topics:

1. #4535 [CLOSED] - store_memory fails in v1.0.81 prereleases (10 comments) - context-memory
2. #2995 [CLOSED] - Can't use DeepSeek API (9 comments) - models/configuration
3. #2421 [CLOSED] - HTTP/2 GOAWAY race condition (8 comments, 19 👍) - networking
4. #4847 [OPEN] - managed-settings refresh breaks IDE MCP (4 comments) - triage
5. #4003 [OPEN] - Support custom model endpoint (4 comments) - models
6. #4521 [CLOSED] - Sandbox cannot be disabled (4 comments) - permissions
7. #3331 [CLOSED] - auto-update plugins (4 comments) - plugins
8. #4663 [OPEN] - Failed compaction unbounded retries (3 comments) - context-memory/models
9. #4929 [OPEN] - Process-local auth token stops refreshing (3 comments) - triage
10. #3877 [CLOSED] - Auto-allow permissions on session start (3 comments)
11. #2827 [CLOSED] - Improve rate limit UI (3 comments, 9 👍)
12. #2533 [CLOSED] - Blocking shell/tool call freezes agent (3 comments)
13. #2197 [CLOSED] - --config-dir=PATH not working (3 comments)
14. #4843 [CLOSED] - Colors don't respect Warp terminal theme (3 comments)
15. #1063 [CLOSED] - Zsh completion broken (3 comments, 7 👍)
16. #4840 [OPEN] - BYOK not working with Deepseek (2 comments)
17. #2261 [OPEN] - FLEET ignores customAgents (2 comments)
18. #4594 [OPEN] - Custom agent tools bind zero tools (2 comments)
19. #2682 [OPEN] - Surface long-running shell commands (2 comments, 5 👍)
20. #4901 [OPEN] - Atlassian MCP OAuth fails (2 comments)
21. #4605 [CLOSED] - latest-prerelease lookup strands users (2 comments, 3 👍)
22. #4213 [CLOSED] - drops enter key events when pane unfocused (2 comments)
23. #1133 [CLOSED] - Add /security-review command (2 comments)
24. #4724 [OPEN] - Auto-compact on idle (1 comment, 1 👍)
25. #4667 [OPEN] - Voice on cannot be activated (1 comment)
26. #4814 [OPEN] - Voice mode install fails 401 (1 comment)
27. #1783 [OPEN] - Collapsible worker/background agent panel (1 comment, 3 👍)
28. #4512 [OPEN] - Allow locally-defined stdio MCP servers (1 comment, 2 👍)
29. #4297 [CLOSED] - Copilot crashes on launch if log level wrong (1 comment)
30. #3933 [CLOSED] - Drops out of autopilot after each request (1 comment)

**Pull Requests:**
Only 1 PR in the past 24 hours: #4948 - Update github-script action pin

The user asked for 10 PRs but only 1 was provided. I'll mention this limitation.

Let me think about the trends:

1. **Model/Provider support**: DeepSeek issues, custom model endpoints, GPT-6 support, BYOK with custom providers
2. **Context/Memory management**: store_memory issues, auto-compact, failed compaction retries
3. **Authentication & Security**: Auth token refresh issues, MCP OAuth, /security-review
4. **IDE Integration**: managed-settings refresh breaks IDE MCP, Computer Use policy
5. **UI/UX**: rate limit UI, background agent panel, terminal themes, key event handling
6. **Plugin system**: auto-update plugins
7. **Voice features**: voice install failing
8. **HTTP/Networking**: HTTP/2 race conditions

Now let me write the report in Chinese, professional and concise.</think>

# GitHub Copilot CLI 社区动态日报

**日期**: 2026-09-24
**数据来源**: [github.com/github/copilot-cli](https://github.com/github/copilot-cli)

---

## 📌 今日速览

今天社区聚焦于 **AI 模型生态扩展** 与 **运行时稳定性**。新版本 `v1.0.89-1` 正式引入 GPT-6 Sol / Luna 双模型，同时修复了 View 工具的行范围解析与本地会话输入回溯逻辑；多条高优 Issue 集中在 HTTP/2 连接复用、Compaction 无界重试、进程级 Auth Token 失效等深层稳定性问题上，反映出 CLI 在企业级长会话场景下的可靠性仍需打磨。

---

## 🚀 版本发布

### v1.0.89-1

- **新增**: 模型选择器中按可用区域上线 **GPT-6 Sol** 与 **GPT-6 Luna**
- **修复**:
  - View 工具正确处理 provider 发送的扁平化 `view_range` 参数
  - 本地会话中，聊天输入框为空时按 `Up` 可回溯到挂起消息，且保留队列中的提示

---

## 🔥 社区热点 Issues

| # | Issue | 状态 | 关键意义 |
|---|-------|------|---------|
| [#2421](https://github.com/github/copilot-cli/issues/2421) | HTTP/2 GOAWAY 竞态引发级联重试与静默 premium 请求浪费（合并 5 个相关 Issue） | CLOSED | 👍19，揭示 undici 连接池在 GOAWAY 帧处理上的状态机缺陷，是本月最重要的基础设施类 Issue |
| [#2995](https://github.com/github/copilot-cli/issues/2995) | 无法使用 DeepSeek API（BYOK 路径） | CLOSED | 👍9，OpenAI 兼容 provider 接入失败的典型案例，影响第三方模型可及性 |
| [#4535](https://github.com/github/copilot-cli/issues/4535) | `store_memory` 在 v1.0.81 预发布版失败（缺少 instance id） | CLOSED | 评论最多（10 条），暴露 Rust 运行时在 native memory writer 上的契约缺陷 |
| [#4847](https://github.com/github/copilot-cli/issues/4847) | 自动 managed-settings 刷新破坏 IDE MCP 重载并禁用 /allow-all | OPEN | 长会话中 VS Code 集成的关键回归，影响企业管控场景 |
| [#4663](https://github.com/github/copilot-cli/issues/4663) | 失败的 Compaction 每轮原样重试：无界计费 + 上下文单调增长 | OPEN | 涉及计费安全与资源耗尽风险，需立即关注 |
| [#4929](https://github.com/github/copilot-cli/issues/4929) | 进程级 auth token 永久停止刷新，全部 prompt 失败直到重启 | OPEN | /login 无法恢复会话，对长任务自动化是致命打击 |
| [#4003](https://github.com/github/copilot-cli/issues/4003) | 支持自定义模型端点（对齐 VS Code） | OPEN | 企业部署本地/私有模型的强需求，呼声持续上升 |
| [#4840](https://github.com/github/copilot-cli/issues/4840) | BYOK Copilot CLI 与 DeepSeek 不再可用（tool type 解析错误） | OPEN | 与 #2995 互相印证，BYOK 路径在 v1.0.86+ 出现回归 |
| [#2261](https://github.com/github/copilot-cli/issues/2261) | FLEET: `fleet.start()` 忽略 `customAgents`，始终分派内置 agent 类型 | OPEN | 暴露 SDK 在自定义 Agent 调度上的静默回退 |
| [#4594](https://github.com/github/copilot-cli/issues/4594) | Custom agent 的 `tools:` 中 `web` / `search` 别名绑定零工具 | OPEN | v1.0.81-9 上的隐性回归，无任何日志输出，调试困难 |

> 注：另有多条 CLOSED Issue 涉及 Sandbox 状态不一致（[#4521](https://github.com/github/copilot-cli/issues/4521)）、插件自动更新（[#3331](https://github.com/github/copilot-cli/issues/3331)）、Warp 终端配色（[#4843](https://github.com/github/copilot-cli/issues/4843)）等，均已在过去 24 小时内完成修复或关闭。

---

## 🛠 重要 PR 进展

过去 24 小时内仓库仅合并/更新 **1 条 Pull Request**：

- [#4948](https://github.com/github/copilot-cli/pull/4948) — 将 `actions/github-script` 升级到当前 v9.0.0 提交 pin；`actions/stale` 已为最新，`git diff --check` 通过。属于供应链卫生维护，无功能变更。

> ⚠️ 由于近期 PR 数量较少（仅 1 条），无法凑齐 10 条。建议结合近 7 天窗口补充更多合并 PR 以观察开发节奏。

---

## 📈 功能需求趋势

综合过去 24 小时活跃 Issue，提炼出以下社区最关注的方向：

1. **🧠 模型可扩展性与 BYOK**
   - GPT-6 接入、DeepSeek 兼容性、自定义模型端点（[#4003](https://github.com/github/copilot-cli/issues/4003)）形成主线，反映社区对"不被单一 provider 绑定"的强烈诉求。

2. **💾 上下文与记忆管理**
   - Compaction 失败重试（[#4663](https://github.com/github/copilot-cli/issues/4663)）、`store_memory` 实例 ID 缺失（[#4535](https://github.com/github/copilot-cli/issues/4535)）、按 prompt cache TTL 自动 compact（[#4724](https://github.com/github/copilot-cli/issues/4724)）三条 Issue 共同指向长会话的**成本可控性**与**状态可靠性**。

3. **🔐 认证与安全**
   - 进程级 Auth Token 失活（[#4929](https://github.com/github/copilot-cli/issues/4929)）、Atlassian MCP OAuth 失败（[#4901](https://github.com/github/copilot-cli/issues/4901)）、`/security-review` 命令请求（[#1133](https://github.com/github/copilot-cli/issues/1133)）显示认证栈与企业 SSO 集成仍是高频痛点。

4. **🖥 IDE 与终端集成**
   - VS Code MCP 重载断裂（[#4847](https://github.com/github/copilot-cli/issues/4847)）、Warp 配色（[#4843](https://github.com/github/copilot-cli/issues/4843)）、Zsh completion 失效（[#1063](https://github.com/github/copilot-cli/issues/1063)）、PTY 焦点丢失（[#4213](https://github.com/github/copilot-cli/issues/4213)）说明 CLI 在 IDE/终端适配上仍有大量边界 case。

5. **🤖 Agent 可观测性**
   - 子 Agent 折叠面板（[#1783](https://github.com/github/copilot-cli/issues/1783)）、长任务后台 UI（[#2682](https://github.com/github/copilot-cli/issues/2682)）、FLEET 自定义 Agent 调度（[#2261](https://github.com/github/copilot-cli/issues/2261)）指向同一诉求：**让多 Agent 并行任务"可见、可控、可中断"**。

6. **🎙 新兴能力**
   - Voice 模式安装失败（[#4667](https://github.com/github/copilot-cli/issues/4667), [#4814](https://github.com/github/copilot-cli/issues/4814)）—— NuGet 私有 feed 的 401 错误，阻塞语音输入新功能落地。

---

## 💬 开发者关注点与痛点

- **静默失败最致命**：多条高优 Issue（[#4594](https://github.com/github/copilot-cli/issues/4594)、[#4663](https://github.com/github/copilot-cli/issues/4663)、[#2261](https://github.com/github/copilot-cli/issues/2261)）共同特征是**没有任何错误/警告日志**就退化到错误行为，社区呼吁增加防御性的运行时校验与可观测信号。

- **BYOK 体验倒退**：从 #2995 到 #4840，BYOK + 自定义 provider 路径在多个版本间反复出现回归，缺乏回归测试覆盖。

- **预发布版升级陷阱**：[#4605](https://github.com/github/copilot-cli/issues/4605) 揭示 `copilot update prerelease` 由于 GitHub Release `created_at` 同分导致排序错乱，将用户卡在旧版本——**发布工程细节**直接影响终端用户体验。

- **计费与资源失控风险**：[#4663](https://github.com/github/copilot-cli/issues/4663) 明确指出失败 Compaction 持续计费且上下文无限增长，在生产环境可能造成**真实金钱损失**，呼吁引入重试退避与用户可见错误。

- **企业管控与本地配置的拉扯**：[#4847](https://github.com/github/copilot-cli/issues/4847)、[#4512](https://github.com/github/copilot-cli/issues/4512) 显示 managed policy 失败时 CLI 倾向"失败关闭"，导致本地 stdio MCP 等基础能力被一并禁用——企业策略与个人配置的**故障域隔离**尚未到位。

---

*日报由社区数据自动聚合生成，欢迎在 Issue 中反馈建议。*

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

<think>The user wants me to generate a daily report for Kimi Code CLI community dynamics based on GitHub data from 2026-09-24. Let me analyze the data:

1. No new releases in the past 24 hours
2. Only 1 issue was updated in the past 24 hours (#2596)
3. No new PRs in the past 24 hours

The data is quite sparse - just one issue. I need to be honest about this and not fabricate content. Let me create the report accordingly, noting the limited activity.

Let me look at the issue details:
- #2596: A serious issue where the agent ran `rm -rf` on a pre-existing directory outside the workspace, deleting user session data. This is a safety/security issue.
- The agent was in "yolo permission mode"
- The symlink creation failed earlier, but the agent didn't notice
- This is a critical safety bug

I should be honest that with only 1 issue and no PRs/releases, the report will be limited. I should not fabricate 10 issues and 10 PRs when they don't exist. The user asked to pick 10, but there aren't 10. I need to be transparent about this.

Let me structure the report properly:
1. 今日速览 - brief summary
2. 版本发布 - skip since no releases
3. 社区热点 Issues - only 1 issue available, I'll discuss it
4. 重要 PR 进展 - skip since no PRs
5. 功能需求趋势 - based on the single issue
6. 开发者关注点 - safety concerns

I need to be honest about the limited data. Let me write a professional report that accurately reflects what's available.</think>

# Kimi Code CLI 社区动态日报

**日期**：2026-09-24
**数据来源**：[MoonshotAI/kimi-cli](https://github.com/MoonshotAI/kimi-cli)

---

## 📌 今日速览

今日社区活跃度较低，过去 24 小时内仅有 1 个 Issue 获得更新，且无新版本发布与 PR 提交。值得关注的是，该 Issue 报告了一起严重的安全事故——Agent 在 `yolo` 权限模式下误删用户工作区外的会话数据，暴露了路径校验与权限边界方面的设计缺陷。

---

## 🚀 版本发布

*过去 24 小时内无新版本发布，本节略。*

---

## 🔥 社区热点 Issues

> ⚠️ **数据说明**：今日仅 1 个 Issue 在过去 24 小时内有更新，以下为完整呈现。

### #2596 [OPEN] Agent 在 `yolo` 模式下误删工作区外的用户会话目录

- **作者**：[@iMaxTomas](https://github.com/iMaxTomas)
- **链接**：https://github.com/MoonshotAI/kimi-cli/issues/2596
- **热度**：👍 0 · 💬 1 评论
- **重要性**：⭐⭐⭐⭐⭐（高危安全事件）

**事件概要**：
用户报告在一次会话中，要求 Agent 清理此前在 `~/.pi/agent/sessions` 创建的 symlink，但实际执行过程出现严重偏差：

1. **Symlink 创建失败**：`ln -sfn` 因目标已是真实目录而失败，但 Agent 未察觉失败。
2. **误删真实数据**：随后 Agent 执行 `rm -rf` 时，目标已回退到用户真实的会话目录，导致用户数据被永久删除。
3. **突破工作区边界**：删除操作发生在工作区之外，说明路径校验机制存在漏洞。

**社区反应**：评论数较少（仅 1 条），但该 Issue 涉及**数据安全**与**权限边界**两大核心问题，对于一个以 Agent 自动执行为核心特性的 CLI 工具而言，影响面较大。

**建议关注**：
- 是否会在后续版本引入对 `rm -rf` 类危险命令的二次确认机制
- `yolo` 模式是否需要增加对工作区外路径的拦截策略
- Agent 是否应在命令执行后主动检查 exit code，识别静默失败

---

## 🔧 重要 PR 进展

*过去 24 小时内无 PR 更新，本节略。*

---

## 📈 功能需求趋势

由于今日仅有 1 个 Issue 数据可用，趋势分析样本有限，但仍可从该 Issue 提炼出明确的方向：

| 需求方向 | 关联 Issue | 说明 |
|---------|-----------|------|
| **安全与权限边界** | [#2596](https://github.com/MoonshotAI/kimi-cli/issues/2596) | Agent 执行破坏性命令时缺乏有效的边界保护与二次确认 |
| **失败感知能力** | [#2596](https://github.com/MoonshotAI/kimi-cli/issues/2596) | Agent 需对 `ln`、`rm` 等命令的失败状态进行校验，避免基于错误前提继续执行 |

---

## 💡 开发者关注点

结合今日 Issue，社区反馈聚焦于以下痛点：

1. **`yolo` 模式的风险控制不足**
   全权限模式下，Agent 可自由执行 `rm -rf`，一旦路径推断错误便可能造成不可逆损失。开发者呼吁加入**危险命令拦截**或**工作区外操作预警**。

2. **静默失败被忽视**
   `ln -sfn` 等命令即使失败也不抛错，Agent 后续基于"已创建 symlink"的错误认知执行 `rm -rf`，是典型的**失败传播问题**。建议在工具层增加执行结果验证。

3. **对真实数据缺乏保护**
   用户家目录下的 `.pi/agent/sessions` 等路径本应视为敏感区域，Agent 不应在无显式确认的情况下对其进行破坏性操作。

---

## 📊 数据总览

| 指标 | 数量 |
|------|------|
| 新 Release | 0 |
| 更新 Issues | 1 |
| 更新 PRs | 0 |
| 高优安全 Issue | 1（#2596） |

> 📝 **备注**：今日数据量较少，建议结合更长周期的报告观察趋势。若需获取更全面的社区动态，请提供更长时间窗口的 GitHub 数据。

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

<think>The user wants me to generate a daily community report for OpenCode based on GitHub data from 2026-09-24. Let me analyze the data carefully and produce a comprehensive Chinese-language report.

Let me organize the data:

**Issues (top 30 by comments, focusing on what's important):**

1. #28089 [OPEN] - OpenCode leaks temporary .so files in /tmp - 11 comments, 10 likes - This is a serious bug about memory leak
2. #50201 [OPEN] - opencode account lost in dashboard migration - 8 comments, 4 likes - Migration issue affecting paid users
3. #20252 [CLOSED] - 年费套餐 feature request - 7 comments - Chinese users requesting annual plans
4. #34410 [CLOSED] - TUI @ and / skill invocation - 6 comments, 9 likes - Popular feature
5. #39170 [OPEN] - Desktop LaTeX inline math not rendering - 5 comments, 2 likes
6. #38519 [CLOSED] - auto-close bot discussion - 4 comments, 3 likes
7. #31435 [CLOSED] - JSON drops events in containers - 4 comments - Real bug
8. #38898 [CLOSED] - Window buttons issue on Desktop Arabic - 3 comments
9. #50172 [OPEN] - v1 plugin loader doesn't fall back - 3 comments - Real V2 migration issue
10. #38873 [CLOSED] - Internal Server Error - 3 comments
11. #38857 [CLOSED] - SECURITY: Cryptominer via unsecured web server - 3 comments - Critical security issue
12. #38661 [CLOSED] - run --attach exits 0 drops final text - 3 comments
13. #50678 [OPEN] - MiMo 2.6 Flash infinite loops - 2 comments
14. #44935 [OPEN] - TUI single-tilde issue - 2 comments
15. #48365 [OPEN] - V2 plugin issues - 2 comments
16. #47398 [OPEN] - v2 max_tokens not sent - 2 comments, 1 like - Real bug
17. #48925 [OPEN] - ACP agent stuck with PowerShell - 2 comments
18. #50751 [OPEN] - subagent completion notification - 2 comments
19. #38861 [CLOSED] - desktop version error - 2 comments
20. #38855 [CLOSED] - Weekly usage limit bug - 2 comments
21. #38848 [CLOSED] - Setting button overlap - 2 comments
22. #38842 [CLOSED] - Git worktree folder issue - 2 comments, 4 likes
23. #38839 [CLOSED] - provider hook skipped - 2 comments
24. #38832 [CLOSED] - Frozen messages in queue feature - 2 comments
25. #38824 [CLOSED] - API endpoint for Go plan usage - 2 comments
26. #38800 [CLOSED] - run fails with Unexpected server error - 2 comments
27. #38792 [CLOSED] - desktop setting page bug - 2 comments
28. #35746 [CLOSED] - V2 IME composition Enter bug - 2 comments
29. #38672 [CLOSED] - /undo doesn't revert in non-Git - 2 comments
30. #38664 [CLOSED] - shell tool bypasses permission - 2 comments

**PRs (top 20):**

1. #51021 - feat(core): fit output limits to context window - Closes #46595 #47398
2. #49172 - feat(desktop): improve settings project management
3. #51026 - fix(opencode): resolve Copilot models to bundled SDK
4. #51029 - feat(core): request PostHog MCP tools under Code Mode
5. #50422 - feat(core): restore GitLab workflow discovery + OAuth login
6. #48501 - feat(app): sign in to OpenCode Console + Go via device flow
7. #50517 - fix(ui): fix desktop theme background seeds, light contrast, token typos
8. #51027 - docs(plugin): explain direct tool invocation
9. #51017 - fix(ai): apply Gemini and Kimi schema handling by model name
10. #51025 - feat(tui): show model tokens cost in subagent picker
11. #51024 - fix(core): route responses-only Copilot models to Responses API
12. #49229 - fix(core): default provider header and chunk timeouts to 5 minutes
13. #50892 - feat(tui): show elapsed time on tool parts
14. #51019 - fix(opencode): retry instance state after failed lookup
15. #50188 - feat(core): note renamed legacy tools when migrating V1 sessions
16. #51018 - fix(tui): dedupe attention notifications across instances
17. #51009 - fix(ai): send Gemini tool schemas as parametersJsonSchema
18. #50921 - fix(tui): open execute details after tool failure
19. #51011 - fix(core): report read length and cap limits and long lines
20. #50890 - chore: bump gitlab-ai-provider to 6.18.0

Now let me write the report in Chinese:

Themes I see:
- V2 migration issues (V2 schema, V1 plugin compatibility, V1 session migration)
- Copilot/Gemini/Copilot integration bugs
- Desktop UI bugs (Arabic, Windows, settings page)
- Security concerns (cryptominer via unsecured web server, shell tool bypassing permissions)
- Subscription/account management issues (dashboard migration, Go plan usage limits)
- Performance/resource issues (.so file leak, timeouts)
- New model support (MiMo 2.6 Flash)
- CJK/IME issues
- TUI rendering issues
- Plugin system issues

Let me structure the report now.</think>

# OpenCode 社区动态日报

**日期**：2026-09-24
**数据来源**：[github.com/anomalyco/opencode](https://github.com/anomalyco/opencode)

---

## 📌 今日速览

今日社区焦点集中在 **V2 迁移** 与 **Copilot/Gemini 集成稳定性** 上：`rekram1-node` 在 24 小时内提交了 7 个核心 PR，集中修复 `max_tokens` 丢失、Copilot Grok/Gemini/MAI 路由错配、Gemini schema 投影丢失等关键问题。与此同时，**#28089** 关于 `/tmp` 目录 `.so` 文件泄漏的长期 Bug 持续获得关注，以及 **#38857** 揭示的 `opencode web` 未鉴权被植入挖矿木马的安全问题，仍是开发者社区讨论的重点。

---

## 🚀 版本发布

*过去 24 小时内无新版本发布。*

---

## 🔥 社区热点 Issues

> 按评论数与社区关注度筛选的 10 个最值得关注 Issue

### 1. [#28089](https://github.com/anomalyco/opencode/issues/28089) — OpenCode 泄漏 `/tmp` 中临时 `.so` 文件，长期占用数百 GB
**[OPEN] | 11 评论 | 10 👍**
CentOS 7 上 OpenCode 在 `/tmp` 生成 ELF 共享库文件却从不清理，长期运行会累积到数百 GB。属于长期未被修复的严重资源泄漏 Bug，获 👍 数为今日最高。

### 2. [#50201](https://github.com/anomalyco/opencode/issues/50201) — Dashboard 迁移导致 OpenCode Go 订阅丢失
**[OPEN] | 8 评论 | 4 👍**
付费用户反馈在 Console 迁移后，原 Go workspace 消失且无法恢复历史订阅与发票记录。直接关系到付费用户的资产连续性。

### 3. [#20252](https://github.com/anomalyco/opencode/issues/20252) — 建议推出年费套餐并支持开发票
**[CLOSED] | 7 评论**
中文社区企业用户的典型诉求：年付套餐 + 发票支持，方便公司统一采购报销。

### 4. [#34410](https://github.com/anomalyco/opencode/issues/34410) — TUI 提示符支持 @ 和 / 技能调用
**[CLOSED] | 6 评论 | 9 👍**
希望在 TUI 中直接通过 `@` / `/` 唤起 skill 与 slash command，获赞数较高，反应社区对快捷调用工作流的强烈需求。

### 5. [#39170](https://github.com/anomalyco/opencode/issues/39170) — Desktop 应用不渲染行内 LaTeX 数学（`$...$`）
**[OPEN] | 5 评论 | 2 👍**
Windows 桌面端块级 `$$...$$` 渲染正常，但行内 `$...$` 仅显示原始源码。影响科研/教育用户使用体验。

### 6. [#38519](https://github.com/anomalyco/opencode/issues/38519) — 关于自动关闭 Bot 导致讨论碎片化的讨论
**[CLOSED] | 4 评论 | 3 👍**
对 OpenCode 仓库现有的 auto-close 机制提出质疑，认为它把同一功能区域的活跃讨论切散，不利于社区沉淀。

### 7. [#50172](https://github.com/anomalyco/opencode/issues/50172) — v1 文件插件加载器在存在 v2 default export 时无法回退到 legacy named export
**[OPEN] | 3 评论**
双 schema 兼容性问题：使用 v1 命名导出的旧插件在新版加载逻辑下直接崩溃，缺少迁移路径。

### 8. [#38857](https://github.com/anomalyco/opencode/issues/38857) — ⚠️ [SECURITY] 通过未鉴权 `opencode web` 部署 XMRig 挖矿木马
**[CLOSED] | 3 评论**
当 `opencode web` 未设置 `OPENCODE_SERVER_PASSWORD` 且监听 `0.0.0.0:4096` 时，攻击者可直接获取未鉴权 bash 终端并部署 Monero 矿马。建议默认强制鉴权并启用访问日志。

### 9. [#50678](https://github.com/anomalyco/opencode/issues/50678) — MiMo 2.6 Flash 模型陷入无限循环无法使用
**[OPEN] | 2 评论**
新接入的 MiMo 2.6 Flash 会在数轮后反复调用 Glob/Find/Read 形成工具调用风暴。模型兼容性问题。

### 10. [#48365](https://github.com/anomalyco/opencode/issues/48365) — V2 Beta：V1 插件无法加载、自定义命令在 headless 下不可达、无 V2 插件/API 文档
**[OPEN] | 2 评论**
2.0 beta 阶段暴露出四个独立缺陷：V1 插件无迁移路径、自定义 `command.transform` 在 `run` 命令下被当作文本、V2 API 缺乏面向 Agent 的文档。

---

## 🛠️ 重要 PR 进展

### 1. [#51021](https://github.com/anomalyco/opencode/pull/51021) — `feat(core)`：根据上下文窗口自适应 output limit
**关联**: 关闭 #46595、#47398
修复 V2 仅在 Anthropic 上发送固定 32k output limit 的问题，其他 provider 一律走 4096 默认值。改为基于模型上下文窗口动态适配。

### 2. [#51026](https://github.com/anomalyco/opencode/pull/51026) — `fix(opencode)`：将 Copilot 模型路由到其内置 SDK 与 Responses 端点
Copilot 上的 Grok/Gemini/MAI Code 仅在 `/responses` 暴露，但当前 fallback 仅路由 `gpt-5+`，导致其他模型族被错发到 `/chat/completions`。

### 3. [#51017](https://github.com/anomalyco/opencode/pull/51017) — `fix(ai)`：按模型名分别处理 Gemini 与 Kimi schema
继 [#51009](https://github.com/anomalyco/opencode/pull/51009) 切换到 `parametersJsonSchema` 后，对通过 OpenAI 兼容端点（OpenRouter、Vercel AI Gateway、Google、Vertex）接入的 Gemini 进一步修复 schema 投影丢失问题。

### 4. [#50422](https://github.com/anomalyco/opencode/pull/50422) — `feat(core)`：恢复 GitLab workflow 发现 + 新增 OAuth 登录
**关联**: 关闭 #50421
在 `gitlab.ts` 中恢复 GitLab Duo provider 的 workflow discovery 并补充 OAuth 登录流程。

### 5. [#48501](https://github.com/anomalyco/opencode/pull/48501) — `feat(app)`：通过设备流登录 OpenCode Console 与 Go
所有平台统一通过 Console 设备登录流程接入，Console 管理 provider 在模型列表中归并到统一的 "OpenCode Console" 区段。

### 6. [#51029](https://github.com/anomalyco/opencode/pull/51029) — `feat(core)`：在 Code Mode 下请求 PostHog MCP 工具
PostHog 托管 MCP 默认走 "cli" 模式，会在 OpenCode Code Mode 内部再嵌套一层 code mode。通过请求 MCP tools 模式消除嵌套，让模型直接调用工具。

### 7. [#49229](https://github.com/anomalyco/opencode/pull/49229) — `fix(core)`：默认 provider header 与 chunk 超时为 5 分钟
针对 #46917 在 v2 上的重写：响应头等待与流式 chunk 之间间隔都改为 5 分钟（300,000ms），chunk 计时器在每次收到数据后重置。

### 8. [#51025](https://github.com/anomalyco/opencode/pull/51025) — `feat(tui)`：在子代理选择器显示模型 token 成本 + shell 执行时长
Subagents 选择器原本只显示 agent 与 title，新增 token 成本与 shell 耗时以便区分不同子代理的开销。

### 9. [#50892](https://github.com/anomalyco/opencode/pull/50892) — `feat(tui)`：在 tool parts 上显示耗时
**关联**: 关闭 #50891
TUI 工具调用原本只显示静态一行 + spinner，Web UI 也无任何时序信息。新增工具执行耗时展示。

### 10. [#51019](https://github.com/anomalyco/opencode/pull/51019) — `fix(opencode)`：实例状态查找失败后自动重试
**关联**: 关闭 #50906
Effect 的 `ScopedCache` 会把失败的查询结果持久化到键下，导致单个配置错误（如 command frontmatter schema）阻塞该实例后续所有读取。修复后实现失败自动重试。

### 其他值得关注的 PR

- [#51027](https://github.com/anomalyco/opencode/pull/51027) `docs(plugin)`：补充插件工具直接调用说明（`codemode: false`）
- [#51018](https://github.com/anomalyco/opencode/pull/51018) `fix(tui)`：多 TUI 窗口去重桌面通知与提示音
- [#50188](https://github.com/anomalyco/opencode/pull/50188) `feat(core)`：V1 历史迁移时标记已重命名的旧工具
- [#51011](https://github.com/anomalyco/opencode/pull/51011) `fix(core)`：修正 `read` 工具的 offset/limit/超长行处理
- [#50890](https://github.com/anomalyco/opencode/pull/50890) `chore`：升级 `gitlab-ai-provider` 到 6.18.0

---

## 📈 功能需求趋势

从 Issue 与 PR 聚类分析，社区当前最关注的方向：

| 方向 | 代表性 Issue / PR | 关注热度 |
|---|---|---|
| **V2 迁移与兼容性** | #48365, #50172, #50188 | 🔥🔥🔥 |
| **新模型支持（MiMo、新版 Gemini/Grok 等）** | #50678, #51017, #51026 | 🔥🔥🔥 |
| **桌面端 UI/UX 与国际化** | #39170, #38848, #38898, #35746 | 🔥🔥 |
| **付费/订阅/企业计费** | #50201, #20252, #38824, #38855 | 🔥🔥 |
| **TUI 工作流增强** | #34410, #44935, #51025, #50892 | 🔥🔥 |
| **GitLab / GitHub 集成** | #50422, #50890 | 🔥 |
| **子代理/后台任务** | #50751 | 🔥 |

---

## 💡 开发者关注点

总结 Issue 与 PR 中的高频痛点：

1. **🪫 资源与稳定性**
   `/tmp` 中 `.so` 文件长期泄漏（#28089）以及 provider chunk 超时（#49229）反映社区对长时间运行场景下 OpenCode 资源管理的担忧。

2. **🔐 安全默认配置**
   `opencode web` 未鉴权导致挖矿木马入侵（#38857）以及 `shell` 工具绕过 `edit`/`write` 权限检查（#38664），开发者呼吁对暴露面工具给出更安全的默认配置与文档警示。

3. **🔄 V1 → V2 升级摩擦**
   大量 issue 集中在 V2 beta 阶段的兼容性断裂：插件 schema 不兼容、自定义 slash 命令在 headless 下不可达、缺少面向 Agent 的 V2 文档。`rekram1-node` 单人主导了多个关键修复，PR 节奏密集。

4. **💳 商业化能力短板**
   付费用户在 dashboard 迁移中遇到订阅与发票丢失（#50201），同时缺乏 Go plan 用量的程序化查询接口（#38824）以及年付发票能力（#20252），影响企业采购决策。

5. **🌏 区域化体验**
   Windows Arabic 桌面端窗口按钮错位（#38898）、CJK IME 在 review 面板的 Enter 误提交（#35746）、行内 LaTeX 不渲染（#39170）等本地化体验问题仍待系统性解决。

6. **🧩 生态集成**
   GitLab Duo OAuth（#50422）、PostHog MCP Code Mode（#51029）、Copilot 多端点路由（#51024/#51026）等持续扩展集成面，但每次新集成都伴随 schema 与路由的边缘问题。

---

*日报生成时间：2026-09-24 | 数据窗口：过去 24 小时更新*

</details>

<details>
<summary><strong>jcode</strong> — <a href="https://github.com/1jehuang/jcode">1jehuang/jcode</a></summary>

<think>The user is asking me to generate a Chinese-language daily report for the jcode community, based on GitHub data from 2026-09-24. Let me analyze the data carefully and produce a well-structured report.

Let me first organize the key information:

**Releases (past 24 hours):**
- v0.88.0: Claude Opus 5.5 as default, multi-browser support, banked usage resets
- v0.87.1: Always-on adaptive status line

**Top Issues by comments:**
1. #1217 - Proactive tool-result clearing (7 comments)
2. #1173 - OpenCode Go models need protocol-aware routing (6 comments, 5 👍)
3. #1215 - Add native Alibaba Token Plan support for Qwen3.8-Max (5 comments)
4. #1390 - Claude OAuth version gate regression (4 comments)
5. #1376 - Windows PowerShell7 cursor jumping (3 comments)
6. #1411 - Epic: viewport state in model coordinates (3 comments)
7. #1327 - MCP servers from codex/config.toml lose enabled=false (3 comments, CLOSED)
8. #1405 - swarm worker generation interrupt no self-healing (2 comments)
9. #1406 - jcode works on milkv titan riscv64 Fedora (2 comments)
10. #1401 - MiMo v2.6 capped at 256K (2 comments, CLOSED)
11. #1404 - First-run skill import fails with EACCES (2 comments, CLOSED)

**Top PRs:**
1. #1446 - route OpenCode Go Responses models by protocol
2. #1444 - Fix /accounting slash-command boundary
3. #1441 - stop tests writing into real ~/.jcode
4. #1443 - fix macOS-only failures in lib test suites
5. #1442 - Use built-in profile default models
6. #1439 - pin running binary identity for reload on macOS
7. #1440 - OAuth callback sockets busy-spin on macOS
8. #1438 - Bind built-in catalog refreshes to profile namespace
9. #1290 - fix Grok Build usable in Jcode (CLOSED)
10. #1433 - fix providers sticky-fallback and stale-default
11. #1430 - fix Claude Code version with override
12. #1432 - add Yolo-Auto provider (CLOSED)
13. #1436 - fix ambient bugs
14. #1427 - fix TUI viewport state across resize
15. #1428 - refactor prompt-jump
16. #1419 - prune stale active-pid markers (CLOSED)
17. #1368 - fix account tests (CLOSED)
18. #1360 - fix 11 jcode-base lib tests (CLOSED)
19. #1278 - support embedded and multiple slash commands (CLOSED)

**Feature trends analysis:**
- New model providers: Yolo-Auto (#1437/#1432), agy/Antigravity CLI (#1407/#1409), Devin (#1435)
- TUI improvements: viewport state (#1411), embedded slash commands (#1277/#1278), adaptive status line (v0.87.1)
- Model support: Qwen3.8-Max (#1215), MiMo context window (#1401), DeepSeek-flash (#1395)
- Browser multi-support (v0.88.0)
- Protocol routing: OpenCode Go Responses (#1173/#1446)
- Provider routing/sticky-fallback (#1433)
- Claude OAuth version gating (#1390/#1430)
- macOS-specific fixes
- TUI refactor (large refactor epic #1411)
- Security advisories
- RISC-V support (#1406)
- swarm worker issues (#1405)
- jcode-router sidecar (#1445)

**Developer pain points:**
- macOS test/UX issues (multiple PRs)
- OAuth/version compatibility (Claude, OAuth callback)
- Tool result context bloat
- TUI rendering edge cases
- Provider routing fragility

Now let me structure the report in Chinese.</think>

# jcode 社区动态日报 · 2026-09-24

## 1. 今日速览

v0.88.0 与 v0.87.1 接连发布，将 **Claude Opus 5.5 (medium effort)** 设为默认 Anthropic 模型，并引入多浏览器工具与自适应状态行。Issue/PR 流量高度集中于三件事：provider 路由与协议分发（#1173/#1446）、TUI 视口重构 Epic（#1411 及其分支 PR），以及 macOS 平台上的回归（OAuth busy-spin、reload 不识别 promoted binary、lib 测试失败）。今天 0 评论的新议题 #1445（jcode-router sidecar 注入）也预示着社区开始向"外挂 health-feeder / 路由控制"方向探索。

---

## 2. 版本发布

### v0.88.0 — Claude Opus 5.5 默认 + 多浏览器 + 用量重置
- **Anthropic**：Claude Opus 5.5 medium effort 成为默认模型，`anthropic-api` 模型规格切换到 Anthropic 原生运行时（告别 OpenAI 兼容适配层）。
- **Browser tool**：自动检测系统默认浏览器，原生支持 Chrome、Edge 等。
- **Banked usage resets**：用额度的"累积/重置"周期被明确化，便于长会话预算控制。
- 链接：https://github.com/1jehuang/jcode/releases/tag/v0.88.0

### v0.87.1 — 始终可见的自适应状态行
- 默认始终渲染 status line（目录 / 模型 / 上下文用量），根据终端宽度自动重排。
- 状态行右对齐，模型名置于右端，窄终端也能完整看到上下文用量。
- 链接：https://github.com/1jehuang/jcode/releases/tag/v0.87.1

---

## 3. 社区热点 Issues

| # | 标题 | 为什么值得关注 | 社区反应 |
|---|------|--------------|---------|
| [#1217](https://github.com/1jehuang/jcode/issues/1217) | Proactive tool-result clearing（确定性，仅 send-view） | 工具输出是上下文膨胀的最大来源（一次 read/bash 即可塞入上万 token），目前只能被动等 compaction；提议"发送前主动清理"，是性能-成本权衡的关键设计。 | 7 条评论，无 👍，处于 needs-decision |
| [#1173](https://github.com/1jehuang/jcode/issues/1173) | OpenCode Go 模型需要按协议感知路由 | OpenCode Go 把多协议模型统一走 Chat Completions，导致 `muse-spark-1.3-contributor` 等走 Responses 协议的模型在 jcode 中失败。 | 6 条评论 / 5 👍，是今天**获赞最多**的开放 issue |
| [#1215](https://github.com/1jehuang/jcode/issues/1215) | 原生支持 Alibaba Cloud Qwen3.8-Max（Token Plan） | Qwen3.8-Max 是阿里云当前旗舰编码/长程 agent 模型，社区希望以一等公民身份挂到 `alibaba-coding-plan` provider。 | 5 条评论，反映中文/亚洲生态诉求 |
| [#1390](https://github.com/1jehuang/jcode/issues/1390) | Claude OAuth 版本门槛复发（2.1.257 → 需要 2.1.280） | 与 #1134 同类问题再发，`claude-opus-5-5` 被静默回退到 `opus-5`。Anthropic 持续抬高 Claude Code 版本下限，jcode 急需统一可注入机制。 | 4 条评论，是回归型痛点 |
| [#1376](https://github.com/1jehuang/jcode/issues/1376) | Windows / PowerShell 7 光标跳动 + 启动卡死 | 视频已附，v0.86 在 Windows 平台复现，且首次启动整个键盘失效只能关终端。 | 3 条评论，Windows 用户必看 |
| [#1411](https://github.com/1jehuang/jcode/issues/1411) | **Epic**：viewport state 改为模型坐标，删除 line-index 补偿 | 一次性修复一类渲染 bug 并带来可观行数缩减，影响 `ui_viewport.rs`、`navigation.rs`、`state_ui_messages.rs`、`ui.rs`，是当前最大的 TUI 重构工作。 | 3 条评论，已分阶段拆 PR |
| [#1327](https://github.com/1jehuang/jcode/issues/1327) | 从 `~/.codex/config.toml` 导入的 MCP server 丢失 `enabled=false` | v0.85.0 在 Linux 上复现，被关闭的 MCP server 被无差别启动，是显见的回归。 | 3 条评论，已 CLOSED |
| [#1405](https://github.com/1jehuang/jcode/issues/1405) | swarm worker 生成中断无自愈 + minimalist 直连无端点级降级 | 三连故障判例：worker 在生成中途中断后没有自愈，minimalist 直连模式没有按端点粒度降级，对 swarm 部署非常实际 |
| [#1406](https://github.com/1jehuang/jcode/issues/1406) | jcode 在 Milkv Titan RISC-V64 + Fedora 44 Server 上跑通 | 罕见的 RISC-V 平台实测验证，表明 jcode 在非主流架构上已可用 |
| [#1401](https://github.com/1jehuang/jcode/issues/1401) | MiMo v2.6 模型被 `open_weight_family_context_limit` 错误限制为 256K | 真实窗口 1M，分类器对所有含 `mimo` 的 model id 一刀切。MiMo v2.6 用户被白白限制。 | 2 条评论，已 CLOSED |

---

## 4. 重要 PR 进展

| # | 标题 | 进展说明 |
|---|------|--------|
| [#1446](https://github.com/1jehuang/jcode/pull/1446) | fix: route OpenCode Go Responses models by protocol | **#1173 的直接修复**：为 OpenCode Go 模型加入 per-model 协议元数据，Chat Completions 为默认，Responses 显式路由。已加 3 个 Responses 测试 + 7 个 OpenRouter SSE 测试。 |
| [#1444](https://github.com/1jehuang/jcode/pull/1444) | fix /accounting slash-command 边界 | 修复 `/accounting` 被误解析为 `ing` account label 的回归；要求斜杠命令 token 边界，并把 `/accounts` 置于 `/account` 之前。 |
| [#1443](https://github.com/1jehuang/jcode/pull/1443) | test: 修复 macOS 专属 lib 测试失败 | CI 不覆盖的 macOS 上 9 个 lib 测试 + 串行 jcode-tui 测试在 M 系列 Mac 上失败，补齐 cohort 后方可纳入 CI。 |
| [#1441](https://github.com/1jehuang/jcode/pull/1441) | test: 测试不再写入真实 `~/.jcode` | 即使设置了 `JCODE_HOME`，`cargo test --workspace` 仍会在 macOS 上向真实 `~/.jcode/sessions` 写 ~4 个会话；保留并恢复 `JCODE_HOME` 变量。 |
| [#1442](https://github.com/1jehuang/jcode/pull/1442) | 使用内置 profile 的 default_model | 缺省用户覆盖时不再回退到 OpenRouter 的 Claude 默认，避免"幽灵默认模型"问题。 |
| [#1439](https://github.com/1jehuang/jcode/pull/1439) | fix(reload): 在 macOS 上钉住运行中的二进制身份 | 非强制的 `jcode server reload` 始终看到旧 binary；启动时锁定身份后，`jcode server promote` 才生效。 |
| [#1440](https://github.com/1jehuang/jcode/pull/1440) | fix(sdk): OAuth 回调 socket busy-spin | macOS 上 SDK OAuth 循环端口在预连接时占满 CPU 2 秒；接受 socket 改回阻塞，让 100 ms 读超时生效。 |
| [#1438](https://github.com/1jehuang/jcode/pull/1438) | 内置目录刷新绑定到 profile namespace | 模型目录的前台读写都按 profile id 命名空间化，避免环境变量切换时缓存被串写。 |
| [#1430](https://github.com/1jehuang/jcode/pull/1430) | fix(anthropic): 通过 `JCODE_CLAUDE_CODE_VERSION` 覆盖 | 解决 #1390/#1134 同源问题：Claude Code 版本号从三处硬编码统一为单一来源 + 可注入。**根治 Anthropic 抬高版本门槛**。 |
| [#1433](https://github.com/1jehuang/jcode/pull/1433) | fix(providers): 移除 sticky-fallback 与 stale-default | 跟进 #1431（Gemini 静默降级），在所有 provider 上消除这两类弱点：粘性回退不再重提、过期默认不再被静默使用。 |

其他值得关注的：#1419 修复 exec reload 后 stale `active_pids` 泄漏（关 #1414）；#1427/#1428 是 #1411 视口重构的 phase 4/5a，奠定 TUI 坐标系统重构基础；#1278 已 CLOSED，给出 prompt 中可嵌多个 slash 命令的实现。

---

## 5. 功能需求趋势

| 趋势 | 代表 Issue / PR |
|-----|---------------|
| **新 Provider 接入**（持续高热） | #1437 yolo-auto / #1432 已 CLOSED；#1407 agy (Antigravity CLI) / #1409 已 CLOSED；#1435 Devin |
| **协议感知路由**（Chat Completions vs Responses vs /messages） | #1173 → #1446；#1326（OpenWebUI 风格代理） |
| **多模型上下文窗口修正** | #1401（MiMo 1M vs 256K）、#1395（DeepSeek-flash 1M） |
| **Anthropic 版本/身份注入** | #1390、#1430，统一 `JCODE_CLAUDE_CODE_VERSION` |
| **TUI 视口坐标化重构**（大型史诗） | #1411、#1427（resize 锚定）、#1428（prompt-jump 重读 retained frame） |
| **状态行/可用性细节** | v0.87.1 自适应 status line、#1376 Windows 光标/键盘失效 |
| **多浏览器工具** | v0.88.0 默认浏览器探测 |
| **生态扩展** | #1215 Qwen3.8-Max 原生支持、#1406 RISC-V64 Fedora 44 |
| **外部健康探针/路由 sidecar** | #1445（jcode-router 静态实例无法被外部 health-feeder 注入） |
| **安全/依赖卫生** | #1343（私下披露两条已验证漏洞）、#1374（Cargo.lock tar/cmov/rand 落后补丁）、#1397（删除颜色近似启发） |

---

## 6. 开发者关注点

1. **Provider 路由鲁棒性成为头号痛点**
   OpenCode Go 协议分发、OpenWebUI 风格代理、Anthropic 版本门槛三件套说明：**任何 provider 在首次连通后都可能因为"远端改了协议/版本/默认值"而静默坏掉**。#1433（移除 sticky-fallback 和 stale-default）反映社区要求显式失败而非隐式降级。

2. **macOS 体验长期欠账**
   仅今天就有 4 个相关修复：测试污染真实 `~/.jcode` (#1441)、reload 不识别 promoted binary (#1439)、OAuth 回调 busy-spin (#1440)、lib 测试在 Mac 上失败 (#1443)。维护者 Kenmege 集中处理，开发者应留意 CI 矩阵是否需要扩列。

3. **TUI 长会话渲染稳定性的"硬骨头"**
   #1411 视口坐标化 Epic 拆成至少 5 个阶段 PR，是少见的"以重构换稳定性"型工程。社区共识是：line-index 补偿这一临时补丁让渲染与扫描时序耦合太紧，必须切除。

4. **上下文膨胀的成本焦虑上升**
   #1217 提出"发送前主动清理"——开发者已经不再满足于"压到 compaction 才清理"的被动策略，希望在 send-view 引入确定性清理路径，配合 v0.88.0 的 banked usage reset 做预算闭环。

5. **生态接入请求集中于"新 CLI agent"和"亚洲模型"**
   yolo-auto、agy/Antigravity CLI、Devin 接连请求接入；Qwen3.8-Max、MiMo 上下文修正代表亚洲/中文编码模型阵营加速被纳入一等公民。

6. **安全披露通道开始被正式请求**
   #1343 明确请求私密通道提交两条已验证的 v0.85.0 漏洞（均不涉及真实凭据），表明项目正在走向更规范的 security policy 阶段，#1374 的依赖补丁也呼应了这一点。

</details>

<details>
<summary><strong>pi</strong> — <a href="https://github.com/earendil-works/pi">earendil-works/pi</a></summary>

<think>Let me analyze the GitHub data for the pi repository (earendil-works/pi) and generate a comprehensive Chinese daily report for 2026-09-24.

Let me organize the key information:

**Releases (过去24小时)**: 无新版本

**Top Issues (by comments)**:
1. #7885 - npm search not indexing newly published pi-packages (14 comments) - CLOSED - 包索引问题
2. #9361 - Windows: settings shellPath non-deterministically ignored (10 comments) - OPEN - Windows bash工具问题
3. #5294 - Request timed out error (9 comments) - CLOSED
4. #9688 - clipboard copy doesn't work (8 comments) - CLOSED, 2 likes
5. #5581 - Custom messages bypass before_agent_start (7 comments) - OPEN, 3 likes
6. #8643 - Bedrock OpenAI models reject images (6 comments) - OPEN
7. #8834 - Opt-in package namespace (6 comments) - CLOSED
8. #9674 - mistral-conversations empty content deltas (6 comments) - OPEN
9. #9098 - Expose prompt disposition in RPC responses (5 comments) - OPEN
10. #9210 - Anthropic gateway cacheWrite1h never set (5 comments) - CLOSED
11. #9036 - openai-codex SSE parser OOM (5 comments) - CLOSED
12. #9497 - Windows CJK IME input laggy (4 comments) - OPEN
13. #9886 - clearQueue destroys extension messages (4 comments) - OPEN
14. #9243 - Session resume restores wrong model (4 comments) - CLOSED
15. #9389 - New files bypass mutation queue (4 comments) - CLOSED
16. #9966 - openai-responses reasoning id (4 comments) - CLOSED

**Top PRs**:
1. #9988 - fix read renderer line range - CLOSED
2. #6881 - feat use provider-reported cost - OPEN
3. #8398 - feat: add color values and theme styling - OPEN (mitsuhiko核心贡献)
4. #9459 - fix prefer recorded model changes on resume - CLOSED
5. #9970 - feat: add pkgdiet dependency guardrail - CLOSED
6. #9763 - feat: add pi.dev compatibility check - CLOSED
7. #9964 - fix: use GPT-6 API context limits - CLOSED
8. #9948 - feat: unify image and classifier model infrastructure - CLOSED (mitsuhiko)
9. #9957 - fix(tui): round Kitty image rows - OPEN
10. #9901 - feat: expose provider stream events to extensions - CLOSED
11. #7948 - feat: defer extension runtime reloads - OPEN
12. #9880 - feat: publish configuration schemas - OPEN
13. #9222 - fix: reject reload while running - OPEN
14. #9889 - fix: align manifest resource discovery - OPEN

Let me think about the trends:
- IDE/Extension system improvements (multiple PRs about extension runtime, manifest, reload)
- Windows platform issues (shellPath, CJK IME)
- Multi-provider support (OpenAI, Anthropic, Bedrock, Mistral, Ollama, Codex)
- TUI improvements (colors, Kitty images, clipboard)
- Cost/billing accuracy (provider-reported cost, cache billing)
- Memory/performance (OOM in SSE parser, timeouts)
- Session/model management (resume, fork, clearQueue)

Let me write the report now.</think>

# pi 社区动态日报
**日期**：2026-09-24
**数据源**：[earendil-works/pi](https://github.com/earendil-works/pi)

---

## 📌 今日速览

今日社区聚焦于 **pi 包生态与跨平台兼容性问题**。npm 包索引失效问题（#7885）引发长达 14 条评论的讨论；Windows 平台爆出两处严重 Bug：`shellPath` 非确定性失效（#9361）与 CJK IME 输入卡顿（#9497）。PR 层面，**mitsuhiko 提交的大型 TUI 主题重构与图像/分类器模型基础设施统一**成为亮点，预示着 pi 向非终端 UI 扩展的战略意图。

---

## 🚀 版本发布

*过去 24 小时内无新版本发布。*

---

## 🔥 社区热点 Issues（Top 10）

| # | Issue | 状态 | 评论 | 关键点 |
|---|-------|------|------|--------|
| [#7885](https://github.com/earendil-works/pi/issues/7885) | npm search 不索引新发布的 pi-packages | CLOSED | 14 | 8 月 4 日后发布的包均无法被 `npm search` 收录，导致 pi.dev/packages 画廊严重落后。这是仓库内争论最久的生态问题，已被官方关注 |
| [#9361](https://github.com/earendil-works/pi/issues/9361) | Windows：`shellPath` 被非确定性忽略 | OPEN | 10 | 加载任何扩展后，`settings.json` 中的 `shellPath` 被静默忽略，fallback 到 WSL System32 下的 `bash.exe`，严重影响 Windows 开发者工作流 |
| [#5294](https://github.com/earendil-works/pi/issues/5294) | Request timed out 错误 | CLOSED | 9 | llama.cpp 后端即使关闭 timeout 仍报错，涉及慢模型推理路径，已获修复 |
| [#9688](https://github.com/earendil-works/pi/issues/9688) | 剪贴板复制回归失效 | CLOSED | 8 | 修复 #9618 时 OSC 52 触发条件被改窄，容器内/无 SSH 会话场景失效。**👍 2**，反映较广 |
| [#5581](https://github.com/earendil-works/pi/issues/5581) | 自定义消息绕过 `before_agent_start` | OPEN | 7 | `pi.sendMessage({triggerTurn: true})` 直接调用 `_runAgentPrompt`，跳过扩展钩子。**👍 3**，对插件生态影响大 |
| [#8643](https://github.com/earendil-works/pi/issues/8643) | Bedrock OpenAI 模型拒绝嵌套图片 | OPEN | 6 | 需要把 tool-result 图片提升到顶层 user content，社区已提供修复 fork |
| [#9674](https://github.com/earendil-works/pi/issues/9674) | Mistral 会话空内容 deltas 打开文本块 | OPEN | 6 | 零长度 delta 触发 GLM 5.x 白空格与重放 400 错误，是 #8069 的正式替代方案 |
| [#8834](https://github.com/earendil-works/pi/issues/8834) | 提议包命名空间（`pi.namespace`） | CLOSED | 6 | 统一 skill/模板命名空间方案，最终定为 no-action，已被社区充分讨论 |
| [#9098](https://github.com/earendil-works/pi/issues/9098) | 在 RPC 响应中暴露 prompt disposition | OPEN | 5 | 让扩展区分"已处理/排队/已开始"，改善 RPC 可观测性 |
| [#9210](https://github.com/earendil-works/pi/issues/9210) | Vercel 网关 cacheWrite1h 计费错误 | CLOSED | 5 | Anthropic 1h 缓存写入被按 5m 价计费，涉及成本准确性，已修复 |

---

## 🛠️ 重要 PR 进展（Top 10）

| # | PR | 状态 | 内容 |
|---|----|------|------|
| [#9988](https://github.com/earendil-works/pi/pull/9988) | fix: read renderer 字符串行范围转数字 | CLOSED | 修复小米 MiMo 等模型发送 `"13"`/`"25"` 字符串导致 `25 + "13" - 1 = 2512` 的渲染 BUG，对应 #9887 |
| [#8398](https://github.com/earendil-works/pi/pull/8398) | feat: 颜色值与主题样式重构 | OPEN | **mitsuhiko 操刀的大型 TUI 重构**，暴露颜色直接 API，支持未来非终端 UI（GUI/Web），保留向后兼容 |
| [#6881](https://github.com/earendil-works/pi/pull/6881) | feat: 优先使用 provider-reported cost | OPEN | 当响应含 `usage.cost` 时替代目录价计算，处理 BYOK 共享成本（Vercel AI Gateway 等） |
| [#9459](https://github.com/earendil-works/pi/pull/9459) | fix: resume 时优先 `model_change` 记录 | CLOSED | 基于 #9243 诊断，session 恢复时读取显式的模型切换事件而非消息回显名，避免模型被错乱覆盖 |
| [#9948](https://github.com/earendil-works/pi/pull/9948) | feat: 统一图像与分类器模型基础设施 | CLOSED | **mitsuhiko 重大重构**：模型系统不再限于聊天模型，为图像/分类模型铺路 |
| [#9901](https://github.com/earendil-works/pi/pull/9901) | feat: 向扩展暴露 provider stream events | CLOSED | 新增 `onProviderStreamEvent` 及 `provider_stream_event` 钩子，关 #9784，扩展可以监听实时 token 流 |
| [#9763](https://github.com/earendil-works/pi/pull/9763) | feat: 添加 pi.dev 兼容性检查 | CLOSED | 重构 PR gate，统一贡献者授权边界，将已批准 PR commit 分发到 pi.dev，移除高权限 `pull_request_target` 任务 |
| [#9964](https://github.com/earendil-works/pi/pull/9964) | fix: GPT-6 API 上下文限制 | CLOSED | GPT-6 Astra/Sol/Luna 上下文窗口设为 1.05M tokens，保留 128K 输出限制，加入回归测试 |
| [#9957](https://github.com/earendil-works/pi/pull/9957) | fix(tui): Kitty 图片行取整 | OPEN | 改进 Kitty 协议下图像渲染的稳定性和尺寸准确度 |
| [#7948](https://github.com/earendil-works/pi/pull/7948) | feat: 延迟扩展运行时重载 | OPEN | 将 `ctx.reload()` 改为异步 `requestReload()`，合并请求并延后到操作收尾时执行，避免 race condition |

---

## 📈 功能需求趋势

通过对今日 50 条 Issue + 19 条 PR 的语义聚类，社区关注方向清晰可辨：

1. **🪟 Windows / 跨平台体验**（持续高热）
   - `shellPath` 失效、CJK IME 卡顿、bash 解析路径——Windows 用户的稳定性短板仍待系统性解决。

2. **🔌 扩展生态（Extension System）完善**
   - `before_agent_start` 钩子语义、运行时重载时机、manifest 资源发现、provider_stream_event 暴露——`@christianklotz` 与 `mitsuhiko` 多 PR 同向推进，扩展开发生命周期正在被彻底重构。

3. **💰 计费与成本准确性**
   - Vercel 网关 1h 缓存计费、provider-reported cost 优先、parseChunkUsage 字段透传——成本透明度成为新的硬性诉求。

4. **🤖 多 Provider / 多模型支持**
   - Bedrock、OpenAI Codex、OpenAI Responses、Mistral、Ollama、GPT-6——每个 provider 都暴露出独立 BUG，"provider 兼容性矩阵"是测试用例的匮乏区。

5. **📦 包生态与命名空间**
   - npm 索引失效、`pi.namespace` 提议、配置 schema 发布（PR #9880）——围绕"包"的可发现性与互操作性是中长期主线。

6. **🖼️ TUI 视觉与可用性**
   - 颜色 API 重构、Kitty 图像渲染优化、剪贴板 OSC 52——为后续 GUI/Web 客户端铺路。

---

## 💬 开发者关注点（高频痛点）

| 痛点 | 典型反馈 |
|------|----------|
| **Windows 仍是"二等公民"** | CJK IME/容器/bash 路径三类问题表明 Windows 测试覆盖严重不足 |
| **扩展 API 语义隐式契约多** | "清空队列丢消息"（#9886）、"重载 race"（#9222）、"工具 setActiveTools 不立即生效"（#9932）——扩展开发者需依赖 implicit 行为 |
| **历史会话恢复的"正确模型"判定** | 提供商回显名 vs 显式 model 变更记录（#9243/#9459）已成为反复出现的 source of truth 争论 |
| **大模型/长上下文的内存墙** | Codex SSE 整段缓冲导致 V8 OOM（#9036），长上下文物化存储方案尚未成熟 |
| **成本对账不透明** | 1h/5m cache 错价、上游 inference cost 拆分、parseChunkUsage 丢字段三连击，财务可观测性成短板 |
| **Provider 异常路径信息不足** | `onResponse` 不被调用导致 HTTP 状态码丢失（#5623），调错时只能看 errorMessage 字符串 |
| **包可发现性** | npm 搜索不索引导致生态作品"发布即失踪"，冷启动体验差 |

---

> **编辑视角**：今日动静看似分散，但两条主线值得关注——**扩展系统深度重构**（manifest → reload → stream event → config schema）正在打通；**mitsuhiko 的 TUI 主题与模型基础设施双重重构**则暗示 pi 正为"非终端 UI 客户端"做架构准备。对扩展开发者和平台贡献者而言，未来几个 release 周期是介入的最佳窗口。

</details>

---
*本日报由 [Big Model Radar](https://github.com/96loveslife/big_model_radar) 自动生成。*
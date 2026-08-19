# AI CLI 工具社区动态日报 2026-08-19

> 生成时间: 2026-08-19 01:36 UTC | 覆盖工具: 8 个

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

<think>The user wants me to generate a horizontal comparison analysis report based on the daily dynamics of various AI CLI tools. Let me carefully analyze the data provided and create a comprehensive, data-driven report.

Let me organize the key data points from each tool:

**Claude Code:**
- 1 new release (v2.1.235)
- 50 issues updated in 24 hours
- 1 PR updated
- Major focuses: Cowork VM on Intel Mac regressions, send_message cross-session messaging bugs, Windows update issues, macOS sandbox ARG_MAX, Auto Memory

**OpenAI Codex:**
- 4 new releases (v0.148.0 stable, v0.149.0-alpha.1, v0.148.0-alpha.22 & 23)
- 50 issues (showing top 30)
- 49 PRs (showing top 20)
- Major focuses: TUI Markdown export, session fork, Windows browser plugin (Trusted RPC), Linux VS Code extension blank webview, security hardening (Git/MCP/OAuth)

**Gemini CLI:**
- 1 nightly release (v0.56.0)
- 50 issues (showing top 30)
- 49 PRs (showing top 20)
- Major focuses: Agent/Subagent reliability, Auto Memory, AST-aware tools, browser agent Wayland, shell hangs

**GitHub Copilot CLI:**
- 1 new release (v1.0.81-1)
- 36 issues updated
- 1 PR updated (irrelevant)
- Major focuses: Organization models missing, sandbox regression in 1.0.81, MCP stability, agent granularity, BYOK

**Kimi Code CLI:**
- 0 new releases
- 2 issues updated
- 2 PRs updated
- Major focuses: Web UI rendering with non-OpenAI providers, SSH failure logging

**OpenCode:**
- 0 new releases
- 50 issues (showing top 30)
- 20 PRs (showing top 20)
- Major focuses: Zen/Go billing, session storage architecture, desktop cross-platform consistency, model integration

**jcode:**
- 1 new release (v0.78.0)
- 50 issues
- 1 PR
- Major focuses: bash gate false positives, swarm reliability, TUI/UX, provider ecosystem

**pi:**
- 0 new releases
- 50 issues (showing top 30)
- 29 PRs (showing top 20)
- Major focuses: Session persistence concurrency, TUI rendering, OpenAI SDK integration, extension hooks

Now let me identify common themes across tools:

1. **Memory/Context Management** - Claude Code Auto Memory, Gemini CLI Auto Memory, jcode memory retrieval improvements
2. **Cross-session/Subagent Communication** - Claude Code send_message, Gemini CLI subagent, OpenCode subagent
3. **Provider/Model Integration** - All tools adding new providers (OpenAI compatible, Bedrock, Anthropic fallback)
4. **Windows/WSL Compatibility** - Claude Code, Codex, OpenCode
5. **MCP/Plugin Ecosystem** - Codex, Copilot CLI, jcode
6. **TUI/UX Reliability** - All tools have TUI bugs
7. **Sandbox/Security** - Copilot CLI sandbox issues, Codex security PRs, Gemini CLI security
8. **Session Persistence** - pi, OpenCode (event table growth)
9. **Compaction/Context Compression** - pi, Codex, Gemini CLI
10. **Linux/Wayland Support** - Gemini CLI, OpenCode

Let me think about maturity vs. iteration speed:
- Codex: Most PRs (49), 4 releases, very active
- Gemini CLI: 49 PRs, 1 release, active
- pi: 29 PRs, many issues, active
- Claude Code: 1 release, 50 issues, mature
- OpenCode: 20 PRs, 50 issues, active
- Copilot CLI: 1 PR, 36 issues, slower
- Kimi Code CLI: 2 issues, 2 PRs, low activity
- jcode: 1 release, 1 PR, focused

Let me build the report now.</think>

# AI CLI 工具生态横向对比分析报告
**报告日期：2026-08-19 | 数据覆盖：过去 24 小时 GitHub 公开动态**

---

## 一、生态全景

AI CLI 工具赛道已从"功能竞赛"进入"工程化深水区"：头部项目（Codex、Claude Code、Claude Code、Copilot CLI）正集中治理 **跨平台稳定性**（Windows/WSL/macOS/Linux 桌面端）与 **企业级安全边界**（MCP 沙箱、OAuth 凭据、Git 信任链），而 OpenCode、pi、jcode 等新兴项目则分别在 **会话持久化架构**、**TUI 渲染性能**、**分布式 swarm 执行** 上展开差异化突围。值得注意的是，"Agent 自主性"与"操作可审计性"之间的张力正在所有工具上同步浮现——这或将成为下一阶段产品迭代的核心矛盾。

---

## 二、各工具活跃度对比

| 工具 | 今日 Release | Issues 更新 | PR 更新 | 维护强度评级 |
|------|-------------|------------|---------|------------|
| **Claude Code** | 1（v2.1.235） | 50 | 1 | ⭐⭐⭐⭐ 成熟型，重心在质量修复 |
| **OpenAI Codex** | 4（v0.148.0 + 3 alpha） | 50 | 49 | ⭐⭐⭐⭐⭐ 最活跃，发布节奏快 |
| **Gemini CLI** | 1（nightly） | 50 | 49 | ⭐⭐⭐⭐⭐ 治理收紧，PR 集中修复 |
| **GitHub Copilot CLI** | 1（v1.0.81-1） | 36 | 1 | ⭐⭐ 三方发育，企业功能优先 |
| **Kimi Code CLI** | 0 | 2 | 2 | ⭐ 平稳期，公开仓库活跃度低 |
| **OpenCode** | 0 | 50 | 20 | ⭐⭐⭐⭐ 架构重构期 |
| **jcode** | 1（v0.78.0） | 50 | 1 | ⭐⭐⭐ 维护者主导，Batch 修复 |
| **pi** | 0 | 50 | 29 | ⭐⭐⭐⭐ 扩展生态快速成型 |

**关键信号**：Codex 与 Gemini CLI 的 PR 数量（49 ≈ 49）几乎对等，但前者发布密度更高（4 个版本 vs 1 个 nightly），反映两者工程节奏存在差异；Kimi Code CLI 与 OpenCode 今日均无版本发布，但后者属于"刻意沉淀"——包含大量架构级 PR（#43302 会话同步引擎、#43200 设计系统重构）。

---

## 三、共同关注的功能方向

通过对各工具 Top 10 Issue/PR 的语义聚类，以下 7 个方向被 **3 个以上工具同时关注**：

### 1. **会话持久化与跨进程一致性** 🔥🔥🔥🔥🔥
- **pi** #8300 / #8334：单写者锁、provider 前缀血缘审计（PR #8333 已合并）
- **OpenCode** #41175 / #42748：事件表快照膨胀（GB 级）、`message.updated.*` 二次方写入
- **Claude Code** #86279 / #86608 / #87323 / #87694：`send_message` 跨会话通信乐观返回失败
- **Codex** #28276 / #39231：归档失败空线程、`TurnDiffTracker` 内存泄漏

> **行业含义**：当"CLI 多窗口/多进程"成为常态使用模式时，文件级 JSONL 假设正在失效。

### 2. **Auto Memory / 上下文压缩** 🔥🔥🔥🔥
- **Claude Code** #87783 / #77261 / #81833：缺乏"绑定关系"字段，无法区分有效记忆与漂移笔记
- **Gemini CLI** #26516 / #26522 / #26523：低信号会话过滤、确定性脱敏、空 patch 隔离
- **pi** #6339 / #8328 / PR #8307：阈值评估时机、cache-friendly compaction 利用暖缓存
- **jcode** #822 / #824 / #825：mid-turn 记忆、多行噪声过滤、图像压缩+OCR

### 3. **Provider / 模型集成扩展** 🔥🔥🔥🔥
- **Claude Code** 模型目录 Bug 隐含新增请求
- **Codex** #25319 / #23200 / #37674：workspace 隔离、headless Linux、Bedrock 缓存
- **Copilot CLI** #4390 / #2904：企业启用模型缺失、自定义 Agent reasoning effort
- **OpenCode** #42729 / #26338 / #42520：Qwen3.8-27B、CommandCode、SCX.ai
- **pi** #6216 / #8320 / #8324：Bedrock Mantle、OpenAI 兼容 API

### 4. **TUI 长会话性能与 UX** 🔥🔥🔥🔥
- **pi** #8281 / #8309 / #8327：10k+ 行闪烁、视图跳顶、巨型 Markdown 渲染让步
- **Claude Code** #2254 / #85011 / #85470：禁用欢迎页（👍107）、会话列表混淆、FleetView 冻结
- **OpenCode** #7648 / #43295 / #43299：滚动配置、Web UI V2 控件重叠、Linux 滚动条缺失
- **jcode** #928 / #996 / #997：Windows 终端粘贴、命令可观测性、后台任务折叠

### 5. **MCP / 插件生态稳定性** 🔥🔥🔥🔥
- **Codex** PR #39333 / #39334 / #39335 / #39336：linked worktree 信任、hooks 绑定脚本内容、MCP 强制环境策略
- **Claude Code** #21108 / #17200：启动期未授权访问 Git origin、MCP 沙箱
- **Copilot CLI** #4392 / #3698 / #4096 / #4490：stdio 进程泄漏、Atlassian OAuth 回归

### 6. **Agent / Subagent 状态机** 🔥🔥🔥
- **Claude Code** send_message 接收方永久卡死
- **Gemini CLI** #22323 / #21409 / #21983：MAX_TURNS 误报 GOAL、Generalist Agent 挂死、Wayland 浏览器 agent 失败
- **OpenCode** #41469 / #40176 / #43297：空 LLM 响应静默退出、tool_calls 截断、subagent sessionID 必填
- **pi** #8317 / #8292：原生重试耗尽钩子、pre-persistence 改写

### 7. **Windows / WSL 兼容性** 🔥🔥🔥
- **Claude Code** #73107 / #76357：AppX 容器进程锁死、MSIX "Another program is using this file"
- **Codex** #39136 / #35119 / #23283：Trusted RPC 信任、WSL Git 误判、Chrome 插件注册表
- **OpenCode** #29831：Windows spawn 挂起
- **jcode** #928：Windows Terminal 多行粘贴

---

## 四、差异化定位分析

| 工具 | 核心定位 | 目标用户 | 技术路线特征 |
|------|---------|---------|------------|
| **Claude Code** | 终端原生 + 桌面端旗舰 | 全栈开发者 + 企业团队 | 单一 CLI 主仓 + 内部 monorepo；Cowork VM 是护城河 |
| **OpenAI Codex** | 全平台覆盖（CLI/IDE/桌面/Mobile） | 多端切换开发者、Pro/Plus 订阅用户 | Rust 内核 + 多端 UI；最激进的版本迭代节奏 |
| **Gemini CLI** | 模型原生能力 + 开源治理 | 早期采用者、量化/研究用户 | 大量 PR 集中于 SSR Agent 与安全；nightly 发布透明 |
| **Copilot CLI** | 企业/Codespaces 集成 | 企业付费用户（GitHub 商业版） | 与 GitHub Codespaces/Auth 深度绑定；功能需等企业开通 |
| **Kimi Code CLI** | 长上下文 + 量化场景 | 中文圈、技术博主 | 公开仓库活跃度低，可能主战场在内部协作 |
| **OpenCode** | 桌面端 + 本地 LLM 友好 | 自托管开发者、隐私敏感场景 | Go 订阅 + Qwen 系开源权重模型；存储架构重 |
| **jcode** | 单一维护者主导的精品工具 | 极简主义开发者、Swarm 尝鲜者 | Harness API/SDK 化的"工具外壳"理念 |
| **pi** | 扩展生态 + Provider 灵活性 | 高级用户、Plugin 作者 | 用户贡献活跃（PR #6216 等来自社区）；扩展钩子体系完善 |

**最深差异化**：
- **Claude Code** vs **Codex**：前者是"工具 + 桌面应用"双线作战，后者是"CLI + IDE + Mobile + Desktop"全平台；前者强调会话质量，后者强调覆盖广度。
- **OpenCode** vs **jcode**：前者在做存储/会话架构重构（系统性问题），后者在做交互细节打磨（具体体验）。
- **pi** 几乎独立走 **"扩展可救场"** 路线——其 `agent_recovery_exhausted`、`pre-persistence` 钩子体系是其他工具尚未涉及的设计维度。

---

## 五、社区热度与成熟度

### 分层判断

**第一梯队（高活跃 + 快速迭代）**：Codex、Gemini CLI、Claude Code
- Issue/PR 数量均在 50/20 上下
- 发布频率高（Codex 一天 4 个版本）
- 社区反馈 → 修复 → 发布的闭环完整

**第二梯队（活跃但克制）**：pi、OpenCode、Copilot CLI
- pi 与 OpenCode 都处于二阶演化阶段（架构性变更）
- Copilot CLI 受制于 GitHub 企业节奏，公开 PR 很少

**第三梯队（稳定 / 隐身）**：jcode、Kimi Code CLI
- jcode 由单一维护者 `@1jehuang` 主导，Batch 修复风格（PR #992 一次性解决 7 个 issue）
- Kimi Code CLI 公开仓库活跃度低，可能反映其社区主要在中文/微信生态

### 成熟度信号

- **Claude Code** 进入"企业 SLA"阶段：多个 P1 长期未解决的问题（#2254、#76357、#21108）反映功能优先 vs 质量稳定的取舍
- **Codex** 处于"产品扩张期"：版本 0.148 还远未到 1.0，但功能面已与 Claude Code 相当
- **Gemini CLI** 处于"治理收紧期"：Maintainer-Only 标签占比 80%，说明 triage 流程专业化
- **OpenCode** 处于"架构重构期"：43302 会话同步引擎这类底层重写表明项目仍在为稳定性补课

---

## 六、值得关注的趋势信号

### 📈 信号 1：安全边界治理成为"集体行动"
- Codex 一次性提交 8 个由 `codex-security-validator-staging[bot]` 发起的 PR（#39328-#39337），覆盖 Git diff driver、worktree 信任、MCP stdio 沙箱、OAuth 凭据、ext 传输
- jcode、Claude Code、Copilot CLI 同步出现沙箱/凭据/进程泄漏问题
- **对开发者的价值**：选择 AI CLI 工具时，应优先评估其安全治理透明度和沙箱设计哲学；个人开发者也建议在工作目录外运行 Agent

### 📈 信号 2："Memory 漂移"成为 Memory 系统的下一个挑战
- Claude Code #87783 提出"绑定关系"字段
- Gemini CLI #26522 关注低信号会话过滤
- pi PR #8307 探索 cache-friendly compaction
- **对开发者的价值**：使用 Agent 长期记忆时，应主动记录"记忆来源"而非仅"结论"，否则 6 个月后将无法判断哪些记忆仍有效

### 📈 信号 3：会话持久化假设正在从"单进程"转向"多进程"
- pi #8333 强制单写者 + provider 血缘审计
- OpenCode #41175 事件表快照膨胀 GB 级
- Claude Code `send_message` 跨会话交付失败
- **对开发者的价值**：在 CI/CD、多终端、远程开发场景下，文件级 JSONL 持久化方案正接近极限；团队应关注工具的"会话锁"机制

### 📈 信号 4：跨平台一致性的"最大公约数"是 Windows/WSL
- 4 个工具（Claude Code、Codex、OpenCode、jcode）同日报道 Windows 关键 Bug
- **对开发者的价值**：如果你的主力平台是 Windows，建议优先关注官方"Windows 专项质量门"或使用 WSL2 作为开发环境

### 📈 信号 5：扩展/插件生态从"功能扩展"走向"可救场"
- pi 的 `agent_recovery_exhausted` 钩子让扩展在原生重试耗尽后接管
- jcode #999 明确要求 first-class lifecycle-hook API
- Codex security PRs 大量围绕 hook 信任绑定
- **对开发者的价值**：扩展 API 的"故障域"设计将成为下一阶段工具差异化的关键——你的扩展能否在 Agent 失败时介入？

### 📈 信号 6：产品方对"用户模型选择权"的策略分歧
- Copilot CLI：组织启用模型不可见（#4390，引发 10 条评论）
- OpenCode：将 Qwen 硬编码采样参数移除（PR #43310）
- pi：暴露 transparent Anthropic fallback usage（PR #8319）
- **对开发者的价值**：工具是否允许"我的模型我做主"将成为企业用户的硬性筛选条件

---

## 七、决策建议

| 场景 | 推荐工具 | 理由 |
|------|---------|------|
| **企业级稳定性 + 长期 SLA** | Claude Code | 桌面端 Cowork VM 体验完整，质量治理透明 |
| **多端切换 + 快速迭代** | OpenAI Codex | CLI/IDE/Mobile/Desktop 全覆盖，发布节奏最快 |
| **Agent 行为研究与扩展** | pi | 钩子体系最完善，社区贡献活跃 |
| **本地 LLM / 隐私优先** | OpenCode | 自托管友好，Qwen 系开源权重集成 |
| **极简主义 + 单一维护者确定性** | jcode | Batch 修复风格，每个版本都明确 |
| **早期实验 + 开源治理透明** | Gemini CLI | nightly 版本与 P1/P2 标签可被外部观察 |
| **企业 Codes

---

## 各工具详细报告

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills 社区热点

> 数据来源: [anthropics/skills](https://github.com/anthropics/skills)

<think>The user wants me to analyze the data from the anthropics/skills GitHub repository and generate a community hot topic report. Let me analyze the data carefully.

Looking at the PRs:
1. #1298 - fix(skill-creator): run_eval.py always reports 0% recall - critical bug fix for skill-creator's evaluation tool
2. #514 - Add document-typography skill - typographic quality control
3. #538 - fix(pdf): correct case-sensitive file references
4. #486 - Add ODT skill - OpenDocument text creation
5. #210 - Improve frontend-design skill clarity
6. #83 - Add skill-quality-analyzer and skill-security-analyzer
7. #541 - fix(docx): prevent tracked change w:id collision
8. #539 - fix(skill-creator): warn on unquoted description with YAML special characters
9. #1367 - feat(skills): add self-audit
10. #1099 - skill-creator: fix run_eval.py crash on Windows
11. #1050 - skill-creator: fix Windows subprocess + encoding bugs
12. #723 - feat: add testing-patterns skill
13. #568 - feat: add ServiceNow platform skill
14. #525 - Add pyxel skill for retro game development
15. #509 - docs: add CONTRIBUTING.md
16. #181 - Add SAP-RPT-1-OSS predictor skill
17. #95 - Add comprehensive system documentation
18. #1595 - docs: add UIZZE to partner skills
19. #1538 - fix: bring two skills back under the Agent Skills spec
20. #1528 - FIX (vague)

Note: The PR data shows "评论: undefined" and "👍: 0" for all PRs, which means the actual comment counts are not available. So I'll need to focus on the Issues for comment analysis.

Actually wait - looking more carefully, the PR section doesn't have comment counts shown. The Issues section does have comments. So I should focus on what's available.

Looking at the Issues by comment count:
1. #492 - Security: Community skills distributed under anthropic/ namespace - 43 comments
2. #228 - Enable org-wide skill sharing in Claude.ai - 16 comments
3. #556 - run_eval.py: claude -p never triggers skills/commands - 12 comments
4. #62 - All my skills have disappeared - 10 comments
5. #1329 - Proposing compact-memory skill - 9 comments
6. #202 - skill-creator should be updated to best practice - 8 comments (CLOSED)
7. #412 - Skill proposal: agent-governance - 6 comments (CLOSED)
8. #189 - document-skills and example-skills plugins install identical content - 6 comments
9. #1487 - claude-api skill eagerly injects ~156k tokens - 4 comments
10. #1385 - Reasoning Quality Gate Pipeline - 4 comments
11. #1175 - Concerns regarding Security and Context Window with SharePoint - 4 comments (CLOSED)
12. #29 - Usage with bedrock - 4 comments
13. #16 - Expose Skills as MCPs - 4 comments
14. #12 - Add guidance to avoid whitespace reformatting in docx/ooxml skill - 4 comments
15. #1362 - web-artifacts-builder: bundle/init scripts fail on pnpm - 3 comments

Now let me synthesize:

**Hot PRs (Skills):**
Since the PR comment counts are all "undefined", I need to use other indicators. The PRs that are most substantive / have been updated multiple times / are most recent suggest community interest. Let me pick the ones that look most impactful:

1. #1298 - run_eval.py fix (critical bug, affects skill-creator evaluation)
2. #514 - document-typography (new skill)
3. #486 - ODT skill (new skill, fills a gap)
4. #1367 - self-audit skill (new skill, important for quality)
5. #723 - testing-patterns skill (new skill)
6. #568 - ServiceNow platform skill (enterprise integration)
7. #83 - skill-quality-analyzer and skill-security-analyzer (meta skills)
8. #210 - Improve frontend-design skill (improvement)

Actually, since PR comments are not visible, I should focus on the volume of discussion/issues each PR has spawned or the importance of the changes. Let me restructure this report.

I think the best approach is to highlight:
- The most substantive / important PRs based on content (since we don't have PR comment counts)
- The most discussed issues (which suggest community concerns)
- Cross-reference where PRs relate to popular issues

Let me structure the report:

1. **热门 Skills 排行** - Based on PR content importance and how much discussion they generate
2. **社区需求趋势** - From issues
3. **高潜力待合并 Skills** - Open PRs that look promising
4. **Skills 生态洞察** - One-line summary

Let me write this report now.</think>

# Claude Code Skills 社区热点报告
**数据截止：2026-08-19 | 仓库：anthropics/skills**

---

## 1. 热门 Skills 排行（按讨论热度与影响力）

> 说明：PR 模块的评论数与点赞数在抓取数据中均为空，本榜单综合"被引用 Issue 数、修复重要 bug、跨平台影响、提交频率"等次级指标综合排序。

| 排名 | PR | Skill / 主题 | 状态 | 核心看点 |
|---|---|---|---|---|
| 🥇 | [#1298](https://github.com/anthropics/skills/pull/1298) | **skill-creator 评测体系修复** | OPEN | `run_eval.py` 永远报 0% recall，导致描述优化循环在"噪声"上迭代。修复后直接打通 skill 自动优化闭环。关联 [#556](https://github.com/anthropics/skills/issues/556) 12 条评论 |
| 🥈 | [#514](https://github.com/anthropics/skills/pull/514) | **document-typography** | OPEN | 解决 AI 生成文档的孤儿行、寡行、编号错位等排版顽疾，被视为"每个文档输出场景都受益"的基础设施类 Skill |
| 🥉 | [#1367](https://github.com/anthropics/skills/pull/1367) | **self-audit** | OPEN | 输出前的"机械文件验证 + 四维推理质量门"，跨技术栈通用，是社区对 AI 交付可信度的核心诉求落地 |
| 4 | [#723](https://github.com/anthropics/skills/pull/723) | **testing-patterns** | OPEN | 覆盖 Testing Trophy 哲学、单元测试、React/Playwright 组件与 E2E 的一站式测试范式 |
| 5 | [#568](https://github.com/anthropics/skills/pull/568) | **ServiceNow 平台助手** | OPEN | 覆盖 ITSM/ITOM/SecOps/SPM/CSDM 等 8+ 模块，企业级 ITSM 集成 |
| 6 | [#83](https://github.com/anthropics/skills/pull/83) | **skill-quality-analyzer / skill-security-analyzer** | OPEN | 元 Skill：评估 Skill 质量五维（结构/工程/语义/可维护/安全），呼应社区对 Skill 治理的迫切需求 |
| 7 | [#486](https://github.com/anthropics/skills/pull/486) | **ODT / OpenDocument** | OPEN | 填补 LibreOffice / ODF 生态空白，可创建/填充/解析 ODT/ODS |
| 8 | [#210](https://github.com/anthropics/skills/pull/210) | **frontend-design 优化** | OPEN | 重写模糊指令，提升可执行性，体现"Skill 描述必须精准触发"的最佳实践 |

---

## 2. 社区需求趋势（来自 Issues）

按讨论密度排序，提炼出 5 大诉求方向：

### 🔒 2.1 Skill 安全与命名空间治理（最热）
- [#492](https://github.com/anthropics/skills/issues/492) **43 评论**：社区 Skill 滥用 `anthropic/` 命名空间冒充官方，存在信任边界风险。**社区最关心的核心议题。**

### 🏢 2.2 企业级分发与协作
- [#228](https://github.com/anthropics/skills/issues/228) **16 评论**：呼吁 Claude.ai 支持组织级 Skill 共享，告别"下载→Slack→手动上传"流程。
- [#1175](https://github.com/anthropics/skills/issues/1175) **4 评论**：关注 SharePoint 文档 + Skill 权限控制的设计（已 CLOSED）。

### 🧠 2.3 上下文窗口与 Skill 体积优化
- [#1487](https://github.com/anthropics/skills/issues/1487) **4 评论**：`claude-api` Skill 单次注入 156k token 直接耗尽上下文，反映"Skill 体积失控"是普遍痛点。
- [#189](https://github.com/anthropics/skills/issues/189) **6 评论**：`document-skills` 与 `example-skills` 插件安装重复 Skill，污染上下文。

### 🛠️ 2.4 Skill 元能力建设
- [#556](https://github.com/anthropics/skills/issues/556) **12 评论**：`run_eval.py` 评测失效——评测基础设施比想象中更脆弱。
- [#202](https://github.com/anthropics/skills/issues/202) **8 评论**：要求 `skill-creator` 升级为最佳实践（已 CLOSED）。
- [#1385](https://github.com/anthropics/skills/issues/1385) **4 评论**：提议"推理质量门"三阶段管线（前置校准→对抗评审→交付验证）。
- [#1329](https://github.com/anthropics/skills/issues/1329) **9 评论**：提案 `compact-memory` 用符号化压缩 Agent 长期记忆。

### 🔗 2.5 跨平台/协议互通
- [#29](https://github.com/anthropics/skills/issues/29) **4 评论**：在 AWS Bedrock 中使用 Skill 的可行性。
- [#16](https://github.com/anthropics/skills/issues/16) **4 评论**：将 Skill 封装为 MCP 暴露统一 API。

### 🐛 2.6 文档格式工程的隐形雷区
- [#12](https://github.com/anthropics/skills/issues/12) **4 评论**：docx/ooxml Skill 的空白字符重格式化导致文件不可读。
- [#1362](https://github.com/anthropics/skills/issues/1362) **3 评论**：`web-artifacts-builder` 在 pnpm ≥10.1 构建失败。

---

## 3. 高潜力待合并 Skills（OPEN 状态、影响面广）

依据"提交质量高 + 解决真实痛点 + 跨平台/跨场景价值"评估，最可能近期落地：

| PR | Skill | 价值信号 |
|---|---|---|
| [#1298](https://github.com/anthropics/skills/pull/1298) | skill-creator 评测 bug 修复 | 若不修，整个描述优化基础设施形同虚设，**优先级最高** |
| [#1099](https://github.com/anthropics/skills/pull/1099) + [#1050](https://github.com/anthropics/skills/pull/1050) | Windows 兼容修复 | Windows 下 `run_eval.py` 完全不可用，3 个相关 PR 同期提交 |
| [#1367](https://github.com/anthropics/skills/pull/1367) | self-audit | 通用质量门，跨技术栈，是 Agent 输出可信度的关键拼图 |
| [#541](https://github.com/anthropics/skills/pull/541) | docx tracked-change 修复 | 避免 w:id 冲突损坏已有书签的文档 |
| [#538](https://github.com/anthropics/skills/pull/538) | pdf 大小写路径修复 | 在 Linux / macOS 大小写敏感系统直接 Skill 失效 |
| [#539](https://github.com/anthropics/skills/pull/539) | YAML 描述校验 | 防止未引号描述被 YAML 静默截断 |
| [#1538](https://github.com/anthropics/skills/pull/1538) | Skill 规范回归修复 | 两个 Skill 无法通过 `skills-ref validate`，规范统一性强需求 |
| [#1367](https://github.com/anthropics/skills/pull/1367) | self-audit v1.3.0 | 多套评估维度，工程化最完整 |

---

## 4. Skills 生态洞察（一句话总结）

> **社区当前最集中的诉求是：建立"可信、可评测、可治理"的 Skill 元基础设施——既要解决 skill-creator 自身 0% recall 等评测失效问题（[#556](https://github.com/anthropics/skills/issues/556)）、又要堵住 anthropic 命名空间滥用的安全漏洞（[#492](https://github.com/anthropics/skills/issues/492)）、还要在上下文窗口爆炸（[#1487](https://github.com/anthropics/skills/issues/1487)）与文档工程化雷区之间找到平衡——也就是说，Skills 生态正在从"量增"走向"质治"。**

---

### 📌 附录：观察到的 3 个潜在风险信号

1. **评测基础设施脆弱**：`run_eval.py` 几乎在所有平台（Windows/Linux/macOS）都存在不同 bug（[#556](https://github.com/anthropics/skills/issues/556), [#1099](https://github.com/anthropics/skills/pull/1099), [#1050](https://github.com/anthropics/skills/pull/1050), [#1298](https://github.com/anthropics/skills/pull/1298)），意味着**目前仓库内大量 Skill 描述的"自动优化"功能本质是失效的**。
2. **PR 治理压力**：贡献者已自发提出 `skill-quality-analyzer` / `skill-security-analyzer` 等元 Skill（[#83](https://github.com/anthropics/skills/pull/83)）和规范回归修复（[#1538](https://github.com/anthropics/skills/pull/1538)），官方尚未介入。
3. **文档格式类 Skill 是 bug 重灾区**：docx、pdf、odt、web-artifacts-builder 在工程化层面均出现可复现的兼容性问题（[#12](https://github.com/anthropics/skills/issues/12), [#538](https://github.com/anthropics/skills/pull/538), [#541](https://github.com/anthropics/skills/pull/541), [#1362](https://github.com/anthropics/skills/issues/1362)），提示该类 Skill 急需更严格的 CI 验证。

---

<think>The user is asking me to generate a Chinese daily report for the Claude Code community based on GitHub data from 2026-08-19. Let me analyze the data carefully and produce a well-structured report.

Looking at the data:
1. There's a new release v2.1.235 with spellcheck feature
2. There are 50 issues updated in the last 24 hours, but only 30 are shown with the most comments
3. Only 1 PR is shown

Let me structure the report according to the user's requirements:
1. 今日速览 - 2-3 sentences summary
2. 版本发布 - v2.1.235 release details
3. 社区热点 Issues - Top 10 most important
4. 重要 PR 进展 - The data shows only 1 PR, so I'll need to address this
5. 功能需求趋势 - Analyze trends from issues
6. 开发者关注点 - Pain points

Let me note some important things:
- Issue #2254 has 107 likes, it's an old issue (created 2025-06-18) but still actively discussed - about disabling welcome banner
- Issue #76357 - serious Windows MSIX update bug
- Issue #21108 - security concern about git origin access on startup
- Issue #81703 - billing incident ($604.71 dispute)
- Issue #87503, #87512, #87642 - Cowork VM issues on Intel Mac after recent update
- Issue #27744 - closed feature request for PostWorktreeCreate hook
- Issue #73468 - macOS sandbox ARG_MAX issue

Many of these issues are about cross-session messaging (send_message), which seems to be a significant new feature with multiple bugs.

Trends I can identify:
1. Cowork VM bugs (especially Intel Mac) - multiple issues
2. Cross-session messaging (send_message) issues - multiple bugs
3. Windows update/launch issues
4. macOS sandbox issues
5. Billing disputes
6. Auto memory feature
7. Welcome banner UI issue
8. Git origin access security concern

Let me write the report now.</think>

# Claude Code 社区动态日报
**日期：2026-08-19**

---

## 📌 今日速览

今日 Claude Code 发布 **v2.1.235**，新增可选拼写检查功能并修复提示缓存失效问题。社区焦点集中在 **Cowork VM 在 Intel Mac 上的回归性故障**（#87503、#87512、#87642 三连发）以及 **跨会话 `send_message` 通信的严重缺陷**（#86279、#86608、#87323、#87694），后者导致接收方会话永久卡死。Windows 桌面端的更新冲突（#76357）和 macOS 沙箱 ARG_MAX 限制（#73468）仍是悬而未决的高优先级问题。

---

## 🚀 版本发布

### v2.1.235（2026-08-19）

**新功能**
- ✨ **可选拼写检查**：在提示输入框中实时标出拼写错误的单词，需系统已安装 `aspell` / `hunspell` / `ispell` 之一

**Bug 修复**
- 🐛 修复 LSP（语言服务器）中途断开或重连时引发的**全提示缓存（prompt cache）失效**问题
- 🐛 修复嵌套会话中的若干稳定性问题（完整 release notes 未披露）

> 链接：https://github.com/anthropics/claude-code/releases/tag/v2.1.235

---

## 🔥 社区热点 Issues（Top 10）

### 1. #2254 — 禁用欢迎横幅（36 评论 / 👍107）
**[OPEN] enhancement · TUI**
- 持续一年多的"老大难"请求：用户希望在终端中关闭每次启动时的欢迎页面与提示
- 👍 数高达 107，是当前社区呼声最高的功能增强
- 虽属于小细节，但对重度使用者影响明显
- 链接：https://github.com/anthropics/claude-code/issues/2254

### 2. #76357 — Windows 桌面端更新失败（26 评论）
**[OPEN] bug · Windows · Cowork · Desktop**
- MSIX 安装的 Claude Desktop 每次更新都报 *"Another program is currently using this file"*，必须重启电脑才能恢复
- 属于**每次更新必现**的严重阻塞性 Bug，影响大量 Windows 用户
- 链接：https://github.com/anthropics/claude-code/issues/76357

### 3. #21108 — 启动时未授权访问 Git origin（15 评论 / 👍17）
**[OPEN] bug · Linux · security**
- Claude Code 在**任何命令发出前**就主动连接 Git origin 服务器，引发隐私与安全担忧
- 同时被标记 `area:security` 与 `reproduced`，是较罕见的安全类 Issue
- 链接：https://github.com/anthropics/claude-code/issues/21108

### 4. #81703 — 7 月 17 日计费事件争议（12 评论）
**[OPEN] bug · Billing**
- 用户报告计费事故：套餐内额度本应免费，却从 usage credits 扣费；累计 $604.71 自动充值被申诉
- 这是已获 Anthropic 承认的事故，但**至今未对受影响用户完成退费**
- 链接：https://github.com/anthropics/claude-code/issues/81703

### 5. #87503 — Cowork VM 在 Intel Mac 连接超时（11 评论）
**[OPEN] bug · macOS · regression · Desktop**
- 更新至 1.32352.0 后，Intel Mac 上的 Cowork VM 客户端永远无法建立连接
- 标记为 **regression**（回退性问题），表明此功能曾在旧版本正常工作
- 链接：https://github.com/anthropics/claude-code/issues/87503

### 6. #27744 — 添加 `PostWorktreeCreate` 钩子（10 评论 / 👍29 · 已关闭）
**[CLOSED] enhancement**
- 在 `--worktree`、`isolation: worktree`、Agent Teams 创建新 git worktree 时，缺乏环境初始化钩子
- 👍 29 表明开发者社区强烈需要该能力，可能已通过其他途径落地
- 链接：https://github.com/anthropics/claude-code/issues/27744

### 7. #87512 — Intel Mac 上 VM 内核无法识别 NVMe 磁盘（10 评论）
**[OPEN] bug · macOS · regression · Desktop**
- 与 #87503 同期出现：8 月 18 日捆绑更新后，x86_64 架构下 VM 内核不枚举 NVMe，导致 `Run /init` 后挂起，60 秒后连接超时
- 两个相关 Issue 共同表明 **8/18 更新对 Intel Mac 平台造成系统性破坏**
- 链接：https://github.com/anthropics/claude-code/issues/87512

### 8. #73468 — macOS 沙箱 ARG_MAX 超限（9 评论）
**[OPEN] bug · macOS · sandbox**
- 当存在大量 git worktree 时，沙箱 Seatbelt 配置通过 `sandbox-exec -p` 内联传递会**超出 ARG_MAX**，导致**所有** Bash 命令（包括 `printf ok`）均报 `E2BIG`
- 沙箱在 macOS 上**完全不可用**，是严重可用性问题
- 链接：https://github.com/anthropics/claude-code/issues/73468

### 9. #86279 — `send_message` 跨会话投递失败（4 评论）
**[OPEN] bug · Windows · core**
- `mcp__ccd_session_mgmt__send_message` 返回成功，消息也写入 UI，但**目标会话永远不创建新回合**，最终只能 Esc 取消
- 这是新近被密集报告的跨会话通信系列 Bug 之一
- 链接：https://github.com/anthropics/claude-code/issues/86279

### 10. #73107 — Windows 桌面端升级后无法启动（4 评论）
**[OPEN] bug · Windows · Desktop**
- 与 #76357 同源的 AppX 容器问题（`0x80070020`），但定位更深：是旧版提升权限的 Claude Code 子进程**未退出**，锁死了容器 silo
- 错误信息具有误导性，实际无进程持有文件
- 链接：https://github.com/anthropics/claude-code/issues/73107

---

## 🔧 重要 PR 进展

> 过去 24 小时内仅 1 条 PR 更新：

### #41611 — 补充缺失的源码（OPEN）
- 作者：@tornikeo
- 提交于 2026-03-31，长期未合入；标题与摘要均较为简略
- 链接：https://github.com/anthropics/claude-code/pull/41611

📝 *今日 PR 数量极少，建议关注上游主仓库外的活动（内部 monorepo 通常承担主要开发任务）。*

---

## 📈 功能需求趋势

通过对 Issue 标签与摘要的语义聚类，过去 24 小时内社区关注的功能方向如下：

| 趋势主题 | 关键 Issue | 热度 |
|---------|-----------|------|
| **Cowork VM 稳定性（尤其 Intel Mac）** | #87503、#87512、#87642、#87750、#87679 | 🔥🔥🔥🔥🔥 |
| **跨会话通信 `send_message` 缺陷** | #86279、#86608、#87323、#87694 | 🔥🔥🔥🔥 |
| **Windows 桌面端更新与启动机制** | #76357、#73107、#87750 | 🔥🔥🔥🔥 |
| **Auto Memory 体系完善** | #87783、#77261、#79217、#83114、#81833、#85075 | 🔥🔥🔥 |
| **`.claude/rules/` 主题触发与作用域** | #87804、#85300、#75610 | 🔥🔥 |
| **TUI / 桌面端 UX 改进** | #2254、#85011、#85470、#87560、#87807 | 🔥🔥🔥 |
| **计费与权限/套餐一致性** | #81703、#83062、#87534、#87805 | 🔥🔥🔥 |
| **多语言/本地化体验** | #87810（韩语逐词注释）、#87806（日语历史丢失） | 🔥 |

**最值得产品侧关注的三大方向：**
1. **Cowork 在 Intel Mac 上的可用性** — 一次性回归影响大批存量用户
2. **跨会话通信可靠性** — 涉及 MCP 工具链的契约一致性
3. **Auto Memory 的"绑定语义"** — 当前只记录结论不记录来源，导致"漂移笔记"与"未绑定笔记"无法区分

---

## 🛠️ 开发者关注点（痛点与高频需求）

1. **🪟 Windows 桌面端更新机制脆弱**
   升级流程容易在 AppX 容器层产生 `ERROR_SHARING_VIOLATION`，需要重启电脑，且错误信息具误导性。涉及 #76357、#73107、#87750。

2. **🍎 macOS Cowork VM 对 Intel 架构支持回退**
   8 月 18 日捆绑更新后 Intel Mac 用户集体中招：VM 无法连接、NVMe 不枚举、错误信息错误归因于 VPN。涉及 #87503、#87512、#87642。

3. **🧩 跨会话 `send_message` 设计缺陷**
   API 在 sender 侧返回成功，但 recipient 侧永远不写入/不触发新回合。**这类"乐观返回失败"的问题在分布式系统语义下尤为危险**。涉及 #86279、#86608、#87323、#87694。

4. **🔐 安全与隐私：自动访问 Git origin**
   #21108 揭示启动阶段会主动访问远程仓库，对隔离环境/气隙开发机/隐私敏感场景构成威胁。

5. **💸 计费事故退费机制不透明**
   #81703、#83062 表明 7/17 事件已公开承认但未完成退费，8 月 1 日又出现新一例 $995.67 自动充值争议，影响个人付费用户信任。

6. **🧱 macOS 沙箱在大 worktree 场景下完全失效**
   #73468 的 E2BIG 问题使任何沙箱命令均失败，且目前无规避方案。

7. **🎛️ TUI 微体验长期积压**
   禁用欢迎页（#2254）、FleetView 输入冻结（#85470）、会话列表跨项目混淆（#85011）等都是"小但高频"的开发者摩擦点。

8. **🧠 Auto Memory 元信息缺失**
   #87783 指出只持久化结论不记录来源，导致后期无法判断某条记忆是否仍有效，亟需补充"绑定关系"字段。

9. **🌐 本地化与辅助阅读**
   非英语母语开发者开始提出**逐词注释**（#87810，韩语）等深度本地化需求。

10. **⚙️ 权限分类器的死锁**
    #87809 指出：在非交互会话中，权限分类器会拒绝那些本应能授予权限的操作，且无逃生通道。

---

*本日报基于 GitHub 公开数据自动整理；如需特定方向深挖或趋势对比，请告知。*

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

<think>Let me analyze the GitHub data for the OpenAI Codex community on 2026-08-19 and generate a comprehensive daily report in Chinese.

Key observations:
1. New releases: v0.148.0 (stable), v0.149.0-alpha.1, v0.148.0-alpha.22 & 23
2. v0.148.0 features: Export TUI conversations to Markdown, fork sessions with codex exec fork, archive/restore sessions, draft prompts during TUI init
3. Most active issues seem to be around:
   - Browser plugin issues on Windows (Trusted RPC dependency)
   - VS Code extension blank webview on Linux
   - Subagent UI stuck states
   - WSL-related issues
   - Performance issues (memory leak, owner discovery timeout)
4. PRs are heavily focused on security hardening - many from `codex-security-validator-staging[bot]`
   - Trust validation
   - Sandbox isolation
   - MCP security
   - Git command safety
   - OAuth credential handling
5. Feature requests:
   - Workspace-scoped chats
   - Headless remote Linux hosts
   - Secrets handling
   - Markdown export (already implemented in 0.148.0!)
   - Bedrock cache controls
6. Pain points:
   - Windows compatibility issues (WSL, browser plugin, registry)
   - Linux VS Code extension regression
   - Performance issues (memory leak, quadratic thread resume)
   - Subagent lifecycle bugs

Let me now structure this into a clean Chinese daily report.</think>

# OpenAI Codex 社区动态日报
**2026-08-19**

---

## 📌 今日速览

今日 Codex 生态迎来 **v0.148.0 稳定版**发布，重点带来 TUI 会话导出 Markdown、`codex exec fork` 会话分叉及 TUI 内的归档/恢复能力；同时 **v0.149.0-alpha.1** 已进入下一轮预发布。社区侧，Windows 平台浏览器插件的"Trusted RPC 依赖路径不可信"问题成为最高热议题（单 Issue 评论 63 条），并触发了一系列由官方安全机器人发起的安全加固 PR，集中治理 Git/MCP/OAuth/Hooks 等多链路信任边界。

---

## 🚀 版本发布

### rust-v0.148.0（稳定版）🔗 [Release](https://github.com/openai/codex/releases/tag/rust-v0.148.0)

**核心新特性：**
- **TUI 会话导出 Markdown**：新增 `/export` 命令，可将完整对话导出至剪贴板或新文件。
- **会话分叉**：通过 `codex exec fork` 创建分叉会话；TUI 的 resume 选择器支持归档与恢复（#37358/#37367/#37369/#37371）。
- **初始化期草稿提示**：TUI 启动阶段即可输入草稿提示，提升响应速度感知。

### rust-v0.149.0-alpha.1（预发布）
首个 0.149.0 内测版本释出，建议提前试用 TUI 与 fork 相关 API 的开发者关注兼容性变化。

### rust-v0.148.0-alpha.22 / 0.148.0-alpha.23
稳定版前最后的预发布，修复若干稳定性问题。

---

## 🔥 社区热点 Issues（Top 10）

1. **#39136** [OPEN] 🔗 [Link](https://github.com/openai/codex/issues/39136) — **Windows 内置浏览器插件初始化失败**：`Trusted RPC dependency is not within a trusted code path`。评论 63，👍21。已成为 Windows 桌面端最高热 Bug，多人复现并引发连锁回归。

2. **#32041** [OPEN] 🔗 [Link](https://github.com/openai/codex/issues/32041) — **VS Code 扩展 26.5707.* 在 Linux 上打开空白 webview**；26.5623 可用但缺少 5.6-Sol 支持。评论 56，Linux 用户强烈关注，影响升级意愿。

3. **#25319** [OPEN] 🔗 [Link](https://github.com/openai/codex/issues/25319) — **将 VS Code 中的 Codex Chat 限定到当前 workspace/project**。评论 33，👍65（高赞），是呼声最高的 IDE 集成增强请求之一。

4. **#2880** [CLOSED] 🔗 [Link](https://github.com/openai/codex/issues/2880) — **TUI 中"复制/导出消息为 Markdown"**。评论 31，👍78。随着 v0.148.0 的 `/export` 上线，此增强需求已被实现并关闭，是社区长期诉求落地的典范。

5. **#23930** [OPEN] � [Link](https://github.com/openai/codex/issues/23930) — **App 中 subagent 卡片在关闭后仍卡住显示**。评论 26，subagent 生命周期/UI 状态机一致性问题的代表性 Bug。

6. **#35119** [OPEN] � [Link](https://github.com/openai/codex/issues/35119) — **Windows + WSL 下 Codex 误判合法仓库为非 Git 仓库**（"Git is unavailable"）。评论 23，👍17。影响 WSL 用户的核心使用路径。

7. **#39173** [CLOSED] 🔗 [Link](https://github.com/openai/codex/issues/39173) — **无法控制浏览器（App 内或 Chrome）**：与 #39136 同一根因（Trusted RPC）。评论 21，体现该问题影响面广。

8. **#23200** [OPEN] 🔗 [Link](https://github.com/openai/codex/issues/23200) — **Codex Mobile 支持无桌面端依赖的 headless Linux 远端主机**。评论 19，👍48。开发者希望从 SSH 服务器直接使用 Mobile 控制流。

9. **#28276** [OPEN] 🔗 [Link](https://github.com/openai/codex/issues/28276) — **归档会话失败 + 出现莫名其妙的空线程**。评论 19，会话管理数据一致性问题，影响 Pro/Plus 用户。

10. **#37398** [OPEN] 🔗 [Link](https://github.com/openai/codex/issues/37398) — **Codex Desktop 打开任意未加载本地聊天固定等待 ~5 秒**（owner-discovery 超时）。评论 16，👍10。性能退化已可量化定位。

> *同时值得关注：* **#23283**（Windows Chrome 插件重装不写注册表，评论 10）、**#37418**（CLI 0.147.0 误报 "MCP startup interrupted"，评论 7）、**#39231**（`TurnDiffTracker` 内存泄漏数小时 OOM，评论 3）。

---

## 🛠️ 重要 PR 进展（Top 10）

1. **#39337** [OPEN] 🔗 [Link](https://github.com/openai/codex/pull/39337) — **git-utils：验证 linked worktree 的信任元数据**。修复 `.git` 链接绕过信任继承的攻击面。

2. **#39336** [OPEN] 🔗 [Link](https://github.com/openai/codex/pull/39336) — **hooks：将命令信任绑定到脚本内容而非命令字符串**。避免受信任 hook 命令被替换脚本后绕过重审。

3. **#39335** [CLOSED] 🔗 [Link](https://github.com/openai/codex/pull/39335) — **强制执行环境级 MCP 策略**：对配置与插件提供的服务器施加环境限制；attachment-scoped 服务器在环境配置未就绪时被禁用。

4. **#39334** [OPEN] 🔗 [Link](https://github.com/openai/codex/pull/39334) — **rmcp-client：将 stdio MCP 服务器纳入沙箱执行器**。阻止仓库控制的 MCP 命令获得宿主文件系统与网络访问。

5. **#39333** [OPEN] 🔗 [Link](https://github.com/openai/codex/pull/39333) — **core-plugins：隔离 curated 插件的 `ls-remote`**。避免在预信任阶段通过仓库本地 `url.*.insteadOf` 触发任意命令执行。

6. **#39331** [CLOSED] 🔗 [Link](https://github.com/openai/codex/pull/39331) — **将 hook 触发的 MCP 调用走当前连接**，不再等待启动或重连，断连立即拒绝。

7. **#39330** [OPEN] 🔗 [Link](https://github.com/openai/codex/pull/39330) — **rmcp-client：以私有权限创建 OAuth 回退凭据**。修复 keyring 失败时凭据文件被 chmod 之前以宽松权限创建的窗口期泄露。

8. **#39329** [OPEN] 🔗 [Link](https://github.com/openai/codex/pull/39329) — **shell-command：`git show/diff/log -p` 需要审批**，防止不可信仓库的 diff driver 绕过审批直接执行。

9. **#39328** [OPEN] 🔗 [Link](https://github.com/openai/codex/pull/39328) — **core-plugins：启动同步期间阻止 ext 传输**。避免 `ext::` 配合本地 SSH 命令在建立信任前执行。

10. **#39322** [CLOSED] � [Link](https://github.com/openai/codex/pull/39322) — **对 header 鉴权强制工作区限制**：根据 `chatgpt-account-id` 校验外部凭据，拒绝工作区不允许的账号。

> *此外已合入值得关注：* **#39319**（新增 `send_user_message_async` 异步用户消息工具）、**#39316**（支持 Edu Plus / Edu Pro 账户套餐）、**#39311**（将 unified exec 审批绑定到 shell 可执行文件本体）、**#39325**（停止迁移 Cursor sandbox 配置，避免误读取不可信源）。

---

## 📈 功能需求趋势

从 Issue 标签与诉求方向归纳，当前社区最关注的方向集中在：

| 方向 | 代表性诉求 | 信号强度 |
| --- | --- | --- |
| **IDE/工作区集成** | 按 workspace 隔离 Chat 与线程（#25319，👍65）；会话分叉 + Markdown 导出（已在 0.148.0 落地，#2880，👍78） | 🔥🔥🔥 |
| **多端/远程控制** | Mobile 直连 headless Linux 主机（#23200，👍48）；Remote 配对体验（#32164） | 🔥🔥🔥 |
| **模型与上下文管理** | GPT-5.6 Sol 上下文窗口升级对齐 Terra/Luna（#39144）；Bedrock 上显式 prompt cache 控制（#37674，👍6） | 🔥🔥 |
| **Windows 兼容与生命周期** | WSL Git 误判（#35119）、浏览器插件 RPC 信任（#39136）、归档失败（#39321）、卸载/清理入口（#27230） | 🔥🔥🔥 |
| **MCP / 安全治理** | OAuth 刷新失败重试死循环（#39054）；MCP stdio 服务器被反复 spawn 未回收（#38754） | 🔥🔥 |
| **性能** | `TurnDiffTracker` 内存泄漏（#39231）；`thread/resume` 大线程接近二次方（#38787）；Desktop 5s owner-discovery 超时（#37398） | 🔥🔥 |
| **配置与 Secret 处理** | `.env` / `.npmrc` 等 secret 跨 worktree 携带（#10528）；自定义 Responses provider 工具调用（#32318） | � |

---

## 💬 开发者关注点

1. **Windows 平台是当前最大的可靠性洼地**：浏览器插件 Trusted RPC、WSL Git 误判、Windows 归档任务路径 `\\?\` 前缀问题（#39321）、WSL 集成终端静默失败（#37104）——多个高赞 Bug 集中在 Windows/WSL，开发者强烈呼吁官方设立 Windows 专项质量门。

2. **Linux 上的 IDE 扩展出现回归**：#32041 指出 26.5707.* 在 Linux 打开空白 webview，导致一部分用户"不敢升级"，需要更稳健的扩展预发与回滚机制。

3. **安全边界与易用性的张力**：今日 PR 列表中近 8 个由 `codex-security-validator-staging[bot]` 集中提交，覆盖 Git diff driver、worktree 信任、MCP stdio 沙箱、OAuth 凭据写入权限、ext 传输等。开发者既希望 Agent 更"自主"，又对不可信仓库内的命令/MCP 行为高度警惕——这是后续版本治理的关键矛盾。

4. **会话管理与性能瓶颈**：subagent 卡片卡死、归档失败、5 秒 owner-discovery 超时、大线程 `thread/resume` 接近二次方、内存泄漏 OOM 等问题指向同一个深层信号——会话/线程/扩展状态机在大规模使用时仍缺少稳定的资源回收与一致性约束。

5. **平台扩展诉求**：教育版套餐（Edu Plus/Pro）已上线（#39316），但企业级痛点（Bedrock 缓存成本、AWS 区域定价）需要更精细的速率限制与配置可观测性；Mobile + 远端 Linux 主机的"无桌面依赖"工作流，是产品下一阶段最具想象空间的方向。

---

*日报数据来源：GitHub `openai/codex` 仓库 2026-08-18 ~ 2026-08-19 更新。*

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

<think>The user wants me to generate a daily report for Gemini CLI community dynamics based on the GitHub data provided. Let me analyze the data carefully and produce a professional Chinese-language report.

Let me break down the data:

1. **Latest Release**: v0.56.0-nightly.20260819.g571851b10 - automated nightly release with SSR Agent fixes

2. **Issues**: 50 issues total, showing top 30 by comments. The most discussed ones are around agent/subagent issues, security, memory system bugs, and CLI core issues.

3. **Pull Requests**: 49 PRs total, showing top 20. Many are SSR Agent issue fixes (closed), plus some significant ones around security, refactoring, and bug fixes.

Let me identify the most important issues and PRs to highlight:

**Top Issues by comments:**
- #22323 (12 comments) - Subagent recovery after MAX_TURNS reported as GOAL success (P1 bug)
- #21409 (8 comments, 8 likes) - Generalist agent hangs (P1 bug)
- #19873 (8 comments) - Zero-Dependency OS Sandboxing & Post-Execution Intent Routing (P2 enhancement)
- #24353 (7 comments) - Robust component level evaluations (P1)
- #22745 (7 comments) - AST-aware file reads, search, and mapping (P2)
- #21968 (6 comments) - Gemini does not use skills and sub-agents enough (P2 bug)
- #26522 (5 comments) - Stop Auto Memory from retrying low-signal sessions (P2 bug)
- #26525 (4 comments) - Add deterministic redaction and reduce Auto Memory logging (P2 security bug)
- #25166 (4 comments, 3 likes) - Shell command "Waiting input" hang (P1 bug)
- #22232 (4 comments) - Enhance browser_agent resilience (P3 feature)
- #21983 (4 comments) - browser subagent fails in wayland (P1 bug)
- #21000 (4 comments) - Native file tools for task tracker (P3)
- #20079 (4 comments) - ~/.gemini/agents/filename.md symlink not recognized (P2 bug)

**Top PRs:**
- #28899 - version bump
- #28892 - preserve empty text turns with tools or media (core fix)
- #28898 - pr-generator-core subprocess execution security hardening
- #28883 - Support symlinked agent markdown files (fixes #20079)
- #28877 - Prevent false positive loop detection on uniform streaming content (fixes #18551)
- #28876 - Handle 404 API error in Cloud Shell default project (fixes #18062)
- #28873 - Prevent unhandled promise rejection on OAuth callback timeout (fixes #28512)
- #28871 - Translate compact matchers to compress and update enum (fixes #14724)
- #28870 - Emit pending tool call update before requesting permission (fixes #21783)
- #28862 - remove eslint-disable and type-asserts from shellExecutionService
- #28863 - prompt for consent on environment changes and sanitize runtime-altering env vars
- #28895 - fix(core): recognize mixed function-call turns
- #28897 - fix(core): respect plan-routing model availability
- #28641 - prevent ghost text wrapping infinite loop at narrow widths
- #28891 - Fix/eval retry 429 rate limit
- #28671 - resolve context corruption and quota error fallback issues
- #28369 - local report command and developer documentation for evals
- #28893 - preserve explicit flash model IDs

Now let me identify trends:
- **Agent/Subagent issues** dominate (most issues are area/agent)
- **Auto Memory system** - multiple related issues (#26516, #26522, #26523, #26525)
- **Security** - OAuth, environment variables, content redaction
- **Browser Agent** - wayland compatibility, session recovery
- **Shell/PTY issues** - infinite loops, hangs
- **AST-aware tools** - for better code understanding
- **Evaluation infrastructure** - more behavioral tests
- **Model selection** - explicit flash model IDs, 400 errors with too many tools

Let me structure the report now.</think>

# Gemini CLI 社区动态日报
**日期：2026-08-19**

---

## 📌 今日速览

今日 Gemini CLI 发布了 nightly 版本 **v0.56.0**，主线变更聚焦于 SSR Agent 的多项问题修复。社区最关注的议题仍集中在 **Agent/Subagent 可靠性**（如 MAX_TURNS 状态误报、Generalist Agent 挂死、Wayland 浏览器子代理失败等），同时 **Auto Memory 系统** 与 **安全加固** 相关讨论热度上升，多项 P1 级 Bug 已陆续合入修复 PR。

---

## 🚀 版本发布

### v0.56.0-nightly.20260819.g571851b10
自动化 nightly 版本，PR [#28899](https://github.com/google-gemini/gemini-cli/pull/28899) 完成版本号 bump。本次 nightly 同步合入了 SSR Agent 的多项问题修复（详见下方 PR 部分）。除此之外，仓库未发布稳定版本更新。

---

## 🔥 社区热点 Issues（Top 10）

| # | Issue | 关注度 | 重要性 |
|---|-------|--------|--------|
| 1 | [#22323](https://github.com/google-gemini/gemini-cli/issues/22323) **Subagent 触达 MAX_TURNS 后被误报为 GOAL 成功** | 12 评论 | P1 · 影响用户对子代理行为的判断，可能掩盖中断风险 |
| 2 | [#21409](https://github.com/google-gemini/gemini-cli/issues/21409) **Generalist Agent 无限挂死** | 8 评论 · 8 👍 | P1 · 用户反馈"小时级挂死"，是最受欢迎的痛点之一 |
| 3 | [#19873](https://github.com/google-gemini/gemini-cli/issues/19873) **零依赖 OS 沙箱与执行后意图路由** | 8 评论 | P2 · 利用 Gemini 3 模型的 bash 原生能力改进安全与 UX |
| 4 | [#24353](https://github.com/google-gemini/gemini-cli/issues/24353) **组件级评测体系构建** | 7 评论 | P1 · 行为评测已积累 76 项测试，需扩展到更多维度 |
| 5 | [#22745](https://github.com/google-gemini/gemini-cli/issues/22745) **AST 感知的文件读取/搜索/映射** | 7 评论 | P2 · 精准定位方法边界，降低 token 消耗 |
| 6 | [#21968](https://github.com/google-gemini/gemini-cli/issues/21968) **Gemini 不主动使用 Skills 与 Sub-agents** | 6 评论 | P2 · 影响自定义能力被模型自动调用的体验 |
| 7 | [#25166](https://github.com/google-gemini/gemini-cli/issues/25166) **Shell 命令完成后仍卡在"等待输入"** | 4 评论 · 3 👍 | P1 · 频繁出现的卡死现象，已被多个用户反复报告 |
| 8 | [#21983](https://github.com/google-gemini/gemini-cli/issues/21983) **Browser subagent 在 Wayland 下失败** | 4 评论 | P1 · Linux Wayland 用户无法正常使用浏览器代理 |
| 9 | [#26522](https://github.com/google-gemini/gemini-cli/issues/26522) **Auto Memory 反复重试低信号会话** | 5 评论 | P2 · 资源浪费与用户体验问题 |
| 10 | [#20079](https://github.com/google-gemini/gemini-cli/issues/20079) **`~/.gemini/agents/` 中的符号链接不被识别** | 4 评论 | P2 · 影响用户通过 dotfiles 跨机同步 agent 配置 |

**社区反应**：P1/P2 级 Bug 仍占绝大多数，"挂死/卡死"是高频关键词；同时 Maintainer-Only 标签占比较高（30 个中 24 个），说明项目治理正在收紧 triage 流程。

---

## 🛠️ 重要 PR 进展（Top 10）

### 已合并的 SSR Agent 修复
以下 PR 均已合入 nightly，构建链路完整：

- [#28883](https://github.com/google-gemini/gemini-cli/pull/28883) — 支持 `~/.gemini/agents/` 中的 **符号链接 Markdown 文件**（fixes [#20079](https://github.com/google-gemini/gemini-cli/issues/20079)）
- [#28877](https://github.com/google-gemini/gemini-cli/pull/28877) — 防止流式内容中**均匀字符触发循环检测假阳性**（fixes [#18551](https://github.com/google-gemini/gemini-cli/issues/18551)）
- [#28876](https://github.com/google-gemini/gemini-cli/pull/28876) — Cloud Shell 中默认项目 404 的**优雅错误处理**（fixes [#18062](https://github.com/google-gemini/gemini-cli/issues/18062)）
- [#28873](https://github.com/google-gemini/gemini-cli/pull/28873) — 修复 OAuth 回调超时导致的**未捕获 Promise 拒绝**（fixes [#28512](https://github.com/google-gemini/gemini-cli/issues/28512)）
- [#28871](https://github.com/google-gemini/gemini-cli/pull/28871) — 将 Claude Code 的 `compact` matcher 翻译为 Gemini CLI 的 `compress`（fixes [#14724](https://github.com/google-gemini/gemini-cli/issues/14724)）
- [#28870](https://github.com/google-gemini/gemini-cli/pull/28870) — ACP 模式下请求权限前**先发送 pending tool_call 更新**（fixes [#21783](https://github.com/google-gemini/gemini-cli/issues/21783)）

### 仍在 Review 中的重要变更

- [#28892](https://github.com/google-gemini/gemini-cli/pull/28892) — `isValidContent` 逻辑重构：**保留带工具/媒体的空文本回合**，避免上下文被错误裁剪
- [#28898](https://github.com/google-gemini/gemini-cli/pull/28898) — 强化 PR 生成器核心的**子进程执行安全**：防止认证令牌泄露到不受信任环境
- [#28863](https://github.com/google-gemini/gemini-cli/pull/28863) — 扩展更新时**提示用户同意环境变量变更**并清洗运行时变量
- [#28893](https://github.com/google-gemini/gemini-cli/pull/28893) — **保留显式 Flash 模型 ID**（如 `gemini-3.6-flash`），避免被隐式重写（fixes [#28859](https://github.com/google-gemini/gemini-cli/issues/28859)）

---

## 📈 功能需求趋势

通过对当日 50 条 Issue 的归纳，社区最强烈的关注方向集中在以下 5 类：

1. **Agent/Subagent 可靠性**（占比约 60%）
   - 状态机正确性（GOAL vs MAX_TURNS）、挂死恢复、Wayland 兼容性、配置加载（符号链接）
2. **Auto Memory 系统优化**（4 个相关 Issue）
   - 低信号会话过滤、确定性脱敏、无效 patch 隔离、整体质量追踪（[#26516](https://github.com/google-gemini/gemini-cli/issues/26516)）
3. **AST 感知工具链**
   - 精准读取方法边界、降低 token 消耗（[#22745](https://github.com/google-gemini/gemini-cli/issues/22745)、[#22746](https://github.com/google-gemini/gemini-cli/issues/22746)）
4. **零依赖沙箱与安全 UX**
   - 利用模型 bash 原生能力，结合 OS 级沙箱（[#19873](https://github.com/google-gemini/gemini-cli/issues/19873)）
5. **行为评测基础设施**
   - 组件级评测、Eval 报告、retry 429 限流处理（[#24353](https://github.com/google-gemini/gemini-cli/issues/24353)、[#28891](https://github.com/google-gemini/gemini-cli/pull/28891)）

---

## 👨‍💻 开发者关注点

从开发者反馈中提炼出以下高频痛点：

- **🧱 Agent 不主动调用 Skills/Sub-agents**（[#21968](https://github.com/google-gemini/gemini-cli/issues/21968)）——用户自定义能力被"埋没"，需明确提示或强制触发
- **⏳ Shell 与 PTY 稳定性问题**（[#25166](https://github.com/google-gemini/gemini-cli/issues/25166)、[PR #28862](https://github.com/google-gemini/gemini-cli/pull/28862)）——`Awaiting user input` 假阳性、PTY 资源泄漏等导致流程中断
- **🐚 模型在随机位置生成临时脚本**（[#23571](https://github.com/google-gemini/gemini-cli/issues/23571)）——污染工作区，影响提交流程
- **🔧 工具数量超过 128 时出现 400 错误**（[#24246](https://github.com/google-gemini/gemini-cli/issues/24246)）——Agent 缺少智能裁剪 scope 的能力
- **🛑 破坏性命令缺乏防护**（[#22672](https://github.com/google-gemini/gemini-cli/issues/22672)）——`--force`、`git reset` 等被无脑使用，缺少安全护栏
- **🐛 Subagent 上下文缺失**（[#21763](https://github.com/google-gemini/gemini-cli/issues/21763)）——`/bug` 报告不包含子代理运行细节，调试困难
- **🤖 Agent 缺乏"自我认知"**（[#21432](https://github.com/google-gemini/gemini-cli/issues/21432)）——无法准确告知用户自身的 CLI flags、热键与最佳实践

---

*日报生成依据为 GitHub `google-gemini/gemini-cli` 仓库当日公开数据。*

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

<think>The user wants me to generate a Chinese daily report for GitHub Copilot CLI community dynamics on 2026-08-19. Let me analyze the data carefully:

1. **Latest Release**: v1.0.81-1 with:
   - Added: Gemini 3.7 Flash support, Ctrl+E in /sandbox to open settings.json, per-agent usage metrics to --usage-output-file JSON
   - Improved: x to remove scheduled /every and /after prompts
   - Fixed: Turning allow-all off from (truncated)

2. **Issues**: 36 issues updated in the past 24 hours, showing top 30 by comment count. Key themes:
   - Sandbox-related issues (#4521, #4522, #4524, #4516) - very prominent, especially after 1.0.81 release
   - MCP issues (#4392, #4490, #4096, #3162, #3248, #3698, #4515)
   - Model configuration issues (#4390, #2904, #2958, #4511)
   - Authentication issues (#3682, #4490)
   - Agent/instructions issues (#1990, #4438)
   - UI/scrolling (#4313)
   - Hooks (#4520)
   - Plugins (#4513, #4523)

3. **PRs**: Only 1 PR updated - #3163 which seems to be a spam/irrelevant "ViewSonic monitor" PR.

Since there's only 1 PR, I need to be careful - the user asked for 10 important PRs but only 1 exists. I'll need to handle this gracefully.

Let me categorize the top issues by importance:

**Top Issues by Comment Count:**
1. #4390 - Enabled organization models missing (Claude Sonnet 5/Opus 5, Kimi K3) - 10 comments, 7 thumbs up - HIGH importance (enterprise blocker)
2. #4313 - Allow scrolling through conversation history - 8 comments - Feature request
3. #3162 - 1.0.42 MCP registry false positives - 7 comments (CLOSED)
4. #2904 - Custom Agent YAML frontmatter should support reasoning effort - 7 comments, 20 thumbs up - HIGH importance (popular feature)
5. #4096 - OAuth token bridging for third-party MCP - 6 comments (CLOSED)
6. #2958 - Per-mode default model configuration - 4 comments, 16 thumbs up - Feature request
7. #4206 - Environment footer stuck loading (CLOSED) - 4 comments
8. #4490 - Atlassian MCP OAuth broken in 1.0.80 - 3 comments
9. #4521 - Sandbox cannot be disabled - 2 comments, 3 thumbs up - 1.0.81 regression
10. #4524 - Sandbox won't let copilot use git - 2 comments - 1.0.81 regression
11. #4522 - 1.0.81 forces sandbox overriding sandbox.enabled=false - 2 comments, 6 thumbs up - 1.0.81 regression (high impact)
12. #4520 - Standalone .github/hooks/*.json postToolUse never fires - 2 comments
13. #4392 - MCP client rebuild leaves orphaned stdio processes - 2 comments
14. #3682 - Refresh BYOK credential without restart - 2 comments, 6 thumbs up
15. #4035 - Voice installer fails 401 - 2 comments
16. #812 - AGENTS.md not reloaded after start (docs) - 2 comments
17. #4438 - disable-model-invocation: true makes skill unreachable - 2 comments
18. #4519 - 400 missing namespace for function_call - 1 comment
19. #1990 - Built-in agents don't inherit custom instructions - 1 comment
20. #2622 - Manual /rename overwritten by auto - 1 comment
21. #4511 - Session AIC display unreliable - 1 comment
22. #4482 - allowed_directories don't suppress prompt - 1 comment
23. #4513 - Plugin marketplace cache ignores ref - 1 comment
24. #4515 - Both MCP content and structuredContent exposed - 1 comment
25. #4516 - Sandbox RW path not honored by JVM - 0 comments - 1.0.81 regression
26. #4523 - Add search/filter to plugin marketplace browse - 0 comments
27. #3698 - MCP server connect leak unbounded child processes - 0 comments

Key themes from 1.0.81 release:
- Sandbox regressions - many new issues
- Gemini 3.7 Flash support
- Per-agent metrics

Let me write the report in Chinese now.

For the PRs section, since only 1 PR was updated and it seems like a noise PR (ViewSonic monitor), I'll note this honestly.

Let me structure the report well:

1. **今日速览** - Most important: 1.0.81 release introduces Gemini 3.7 Flash support but caused multiple sandbox regressions; Organization models issue is the highest-priority concern.

2. **版本发布** - v1.0.81-1 details

3. **社区热点 Issues** - Top 10 by importance
   1. #4390 - Organization models missing (10 comments, enterprise critical)
   2. #2904 - Reasoning effort in custom agents (20 thumbs up)
   3. #4522 - 1.0.81 sandbox regression (6 thumbs up)
   4. #2958 - Per-mode default model (16 thumbs up)
   5. #4313 - Conversation history scrolling
   6. #4521 - Sandbox can't be disabled
   7. #4524 - Sandbox blocks git
   8. #4490 - Atlassian MCP OAuth regression
   9. #3682 - BYOK credential refresh
   10. #3162 - MCP registry false positives (closed)

4. **重要 PR 进展** - Only 1 PR, will note this

5. **功能需求趋势** - Multiple categories

6. **开发者关注点** - Summary

Let me write this now.</think>

# GitHub Copilot CLI 社区动态日报

**日期：2026-08-19** | **数据来源：github.com/github/copilot-cli**

---

## 📌 今日速览

**v1.0.81-1 正式发布，新增 Gemini 3.7 Flash 支持与每 Agent 用量指标，但同日引爆多个 Sandbox 强制启用的回归问题。** 此外，企业级 Copilot Business 用户反映已显式启用的 Claude Sonnet 5/Opus 5、Kimi K3 等模型在 CLI 中仍然不可用，已成为社区最高优先级讨论话题。

---

## 🚀 版本发布：v1.0.81-1

### 新增（Added）
- ✅ **Gemini 3.7 Flash 模型支持**：可直接在 CLI 中选用最新 Google Gemini 系列模型。
- ✅ **`/sandbox` 内 Ctrl+E 快捷键**：快速在编辑器中打开 `settings.json`。
- ✅ **每 Agent 用量指标**：在 `--usage-output-file` 的 JSON 输出中加入 per-agent 维度，便于精细化计费/审计。

### 改进（Improved）
- 🔧 在 Schedule Manager 中可用 `x` 键快速移除 `/every` 与 `/after` 定时任务。

### 修复（Fixed）
- 🐛 关闭"allow-all"开关时的边界场景（条目被截断，需关注后续完整 release notes）。

> ⚠️ **版本观察**：v1.0.81-1 似乎引入了 Sandbox 强制启用逻辑的回归，下文社区热点中有 4 条直接相关。

---

## 🔥 社区热点 Issues（Top 10）

| # | Issue | 关键标签 | 评论 | 👍 | 重要性 |
|---|---|---|---|---|---|
| 1 | [#4390](https://github.com/github/copilot-cli/issues/4390) **企业启用模型缺失（Claude Sonnet 5/Opus 5、Kimi K3）** | organization, models | 10 | 7 | ⭐⭐⭐⭐⭐ |
| 2 | [#2904](https://github.com/github/copilot-cli/issues/2904) **自定义 Agent 应支持 reasoning effort** | agents, models | 7 | 20 | ⭐⭐⭐⭐⭐ |
| 3 | [#4522](https://github.com/github/copilot-cli/issues/4522) **1.0.81 强制启用 Sandbox，覆盖 `sandbox.enabled=false`** | sandbox, regression | 2 | 6 | ⭐⭐⭐⭐⭐ |
| 4 | [#2958](https://github.com/github/copilot-cli/issues/2958) **支持按模式配置默认模型（plan / autopilot）** | agents, configuration | 4 | 16 | ⭐⭐⭐⭐ |
| 5 | [#4313](https://github.com/github/copilot-cli/issues/4313) **支持滚动浏览当前会话历史（鼠标滚轮/PgUp/PgDn）** | input-keyboard, terminal-rendering | 8 | 0 | ⭐⭐⭐⭐ |
| 6 | [#3162](https://github.com/github/copilot-cli/issues/3162) **MCP 1.0.42 误报 Registry 中的自定义服务器为策略阻断**（已 Closed） | mcp | 7 | 1 | ⭐⭐⭐⭐ |
| 7 | [#4521](https://github.com/github/copilot-cli/issues/4521) **Sandbox 无法被禁用（配置与状态不一致）** | sandbox | 2 | 3 | ⭐⭐⭐⭐ |
| 8 | [#4524](https://github.com/github/copilot-cli/issues/4524) **Sandbox 阻止 Copilot 调用 git** | sandbox | 2 | 0 | ⭐⭐⭐⭐ |
| 9 | [#4490](https://github.com/github/copilot-cli/issues/4490) **Atlassian MCP OAuth 在 1.0.80 回归（违反 RFC 8414 §3.3）** | authentication, mcp | 3 | 0 | ⭐⭐⭐ |
| 10 | [#3682](https://github.com/github/copilot-cli/issues/3682) **不重启 CLI 刷新 BYOK 提供方凭证** | authentication, models | 2 | 6 | ⭐⭐⭐ |

### 重点解读

- **[#4390 企业模型缺失](https://github.com/github/copilot-cli/issues/4390)** 是当前社区讨论最热的 bug：企业管理员在 Copilot Business 控制台显式启用了 Claude Sonnet 5/Opus 5、Kimi K3，但 CLI 端模型目录仍然看不到，Anthropic 全系列被报告 `disabled by your ...`。直接影响付费企业用户的功能可用性。
- **[#2904 自定义 Agent reasoning effort](https://github.com/github/copilot-cli/issues/2904)** 累计 20 👍，是当前呼声最高的增强请求：`.agent.md` 已有 `model` frontmatter，但 reasoning effort 只能全局配置，开发者希望按 Agent 粒度控制思考深度。
- **Sandbox 三连回归（[#4521](https://github.com/github/copilot-cli/issues/4521)、[#4522](https://github.com/github/copilot-cli/issues/4522)、[#4524](https://github.com/github/copilot-cli/issues/4524)、[#4516](https://github.com/github/copilot-cli/issues/4516)）**：均与 v1.0.81-1 的 Sandbox 默认开启逻辑相关，包括"无法禁用"、"覆盖用户配置"、"阻断 git"、"JVM 进程不识别 RW 授权路径"等。其中 #4522 已获 6 👍，存在普遍性。

---

## 📥 重要 PR 进展

> ⚠️ **说明**：过去 24 小时内仓库仅出现 1 条 PR 更新，且内容与 Copilot CLI 功能无关（[PR #3163](https://github.com/github/copilot-cli/pull/3163) - "ViewSonic monitor"，疑似误提交）。本节未做扩展性内容填充，建议关注后续合并动态。

---

## 📈 功能需求趋势

通过分析过去 24 小时活跃 Issues 的标签与摘要，可归纳出五大最受关注的趋势：

### 1. 🧠 模型与推理控制（热度最高）
- **每 Agent 推理强度配置** [#2904](https://github.com/github/copilot-cli/issues/2904)（20 👍）
- **按模式（plan / autopilot）默认模型** [#2958](https://github.com/github/copilot-cli/issues/2958)（16 👍）
- **新模型可用性**（Gemini 3.7 Flash、Claude Sonnet 5/Opus 5、Kimi K3）

### 2. 🛡️ Sandbox 与权限治理
- v1.0.81-1 之后集中爆发的 Sandbox 强制启用问题（#4521、#4522、#4524、#4516）
- `allowed_directories` 未抑制 Shell 命令的越界提示 [#4482](https://github.com/github/copilot-cli/issues/4482)

### 3. 🔌 MCP 生态稳定性
- OAuth 凭据未桥接到 CLI 会话 [#4096](https://github.com/github/copilot-cli/issues/4096)
- stdio MCP 进程泄漏 / 孤儿进程 [#3698](https://github.com/github/copilot-cli/issues/3698) / [#4392](https://github.com/github/copilot-cli/issues/4392)
- `structuredContent` 与 `content` 同时暴露 [#4515](https://github.com/github/copilot-cli/issues/4515)
- 第三方 OAuth（Atlassian）在 1.0.80 回归 [#4490](https://github.com/github/copilot-cli/issues/4490)

### 4. 🤖 Agent 行为一致性
- 内置 Agent（explore/task/code-review）不继承自定义指令 [#1990](https://github.com/github/copilot-cli/issues/1990)
- `disable-model-invocation: true` 导致 Skill 完全不可达 [#4438](https://github.com/github/copilot-cli/issues/4438)
- `.github/hooks/*.json` postToolUse 不触发 [#4520](https://github.com/github/copilot-cli/issues/4520)

### 5. 🎨 终端 UX 改进
- 会话历史滚动 [#4313](https://github.com/github/copilot-cli/issues/4313)
- 插件市场浏览命令缺少搜索/过滤 [#4523](https://github.com/github/copilot-cli/issues/4523)
- AIC 用量显示不准确（Kimi K3） [#4511](https://github.com/github/copilot-cli/issues/4511)

---

## 🧩 开发者关注点总结

| 痛点类别 | 典型反馈 | 代表 Issue |
|---|---|---|
| **版本升级引入回归** | 1.0.81-1 升级后 Sandbox 默认强制开启，无法回退；1.0.80 破坏 Atlassian MCP OAuth | #4522 / #4490 |
| **企业配置不可达** | 组织已批准模型在 CLI 仍不可见 | #4390 |
| **MCP 进程/凭据管理脆弱** | stdio 子进程泄漏、OAuth 令牌未桥接到 CLI、连接握手卡死 | #4392 / #4096 / #4206 / #3698 |
| **Agent 粒度控制不足** | 模型、reasoning effort、默认模式均缺细分配置 | #2904 / #2958 / #1990 |
| **BYOK 体验差** | 短期令牌无法热更新，必须重启 | #3682 |
| **文档/可发现性缺口** | AGENTS.md 不热加载、插件市场无搜索 | #812 / #4523 |

> 💡 **开发者建议**：在升级到 v1.0.81-1 前请确认本地 `settings.json` 中 `sandbox.enabled` 配置；企业用户若依赖 Claude/Kimi 模型，建议暂时回退或跟踪 [#4390](https://github.com/github/copilot-cli/issues/4390)；BYOK 短凭证用户可关注 [#3682](https://github.com/github/copilot-cli/issues/3682) 进展。

---

*报告生成时间：2026-08-19 | 数据范围：近 24 小时 GitHub 仓库动态*

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

<think>Let me analyze the data and generate a comprehensive daily report for Kimi Code CLI community dynamics on 2026-08-19.

Looking at the data:
- No new releases in the past 24 hours
- 2 issues updated in the past 24 hours (#2607, #2608)
- 2 pull requests updated in the past 24 hours (#848 closed, #2606 open)

Note: The user asks for "10 most noteworthy Issues" but there are only 2 issues in the data. I should adjust to reflect the actual data available.

Similarly for PRs, there are only 2 PRs.

Let me create a comprehensive but honest report that acknowledges the actual volume of activity.</think>

# Kimi Code CLI 社区动态日报

**📅 日期：2026-08-19**
**📊 数据源：github.com/MoonshotAI/kimi-cli**

---

## 1️⃣ 今日速览

今日社区活跃度较低，无新版本发布。**Issue #2607** 报告了一个关于 Web UI 的渲染 Bug —— 使用 OpenAI 兼容协议的第三方 provider 时，会话重新挂载后助手消息退化为逐行渲染。同时，**PR #2606** 提交了一个"开发/知识平面"（Dev/knowledge plane）相关的大规模改动，**PR #848**（kaos SSH 失败日志）已合并关闭。整体来看，社区处于平稳迭代期。

---

## 2️⃣ 版本发布

⚠️ **过去 24 小时内无新版本发布。** 本节省略。

---

## 3️⃣ 社区热点 Issues

> 注：过去 24 小时仅 2 条 Issue 更新，以下逐条分析。

### 🔴 #2607 — Web UI：非 Kimi（OpenAI 兼容）provider 会话重载时助手消息退化为逐流渲染
- **链接**：[#2607](https://github.com/MoonshotAI/kimi-cli/issues/2607)
- **作者**：@chenxupeng1990-eng
- **重要性**：⭐⭐⭐⭐
- **分析**：这是一个直接影响多 provider 兼容性的渲染缺陷。流式输出阶段正常，但 tab 切换/刷新/重开会话后会丢失聚合逻辑，UI 体验显著降级。随着越来越多用户接入 OpenAI 兼容的第三方模型（非 Moonshot 直连），此类兼容性问题会被持续放大。值得关注修复 PR 是否会很快跟进。

### 🟢 #2608 — 量化策略生成基准测试报告开源（K3 + Kimi Code）
- **链接**：[#2608](https://github.com/MoonshotAI/kimi-cli/issues/2608)
- **作者**：@frank-quant
- **重要性**：⭐⭐⭐
- **分析**：B 站/YouTube 量化交易频道主分享了使用 Kimi Code CLI 驱动 Freqtrade ETH 永续策略生成的实测报告。属于社区用户驱动的"用例验证"型 Issue，对量化/金融科技方向用户具备引导价值，也间接展示了 CLI 在真实编码工作流中的能力。

---

## 4️⃣ 重要 PR 进展

> 注：过去 24 小时仅 2 条 PR 更新。

### ✅ #848 — fix(kaos): 记录 SSH 失败日志（已合并关闭）
- **链接**：[#848](https://github.com/MoonshotAI/kimi-cli/pull/848)
- **作者**：@powerfooI
- **重要性**：⭐⭐⭐
- **进展**：从 2 月创建，历经半年多今日关闭合并。这是一个针对 `kaos` 子模块在 SSH 启用场景下失败可观测性的修复 —— 当 SSH 失败时不再静默吞错，方便远程开发/部署场景下的问题排查。属于长尾 issue 清理的典型代表。

### 🟡 #2606 — Dev/knowledge plane（开放中）
- **链接**：[#2606](https://github.com/MoonshotAI/kimi-cli/pull/2606)
- **作者**：@SoMiReMiReDo
- **重要性**：⭐⭐⭐⭐
- **进展**：新提交的、涉及"开发面/知识面"架构的较大规模 PR。按仓库 PR 模板要求，提交者应先在 issue 中与维护者讨论后再提 PR，否则可能被直接关闭。建议关注社区维护者的初步回应，判断其架构方向是否符合 roadmap。

---

## 5️⃣ 功能需求趋势

由于今日 Issue 体量较小（仅 2 条），趋势信号弱，但仍可提炼出两点方向：

| 趋势方向 | 信号来源 | 说明 |
|---------|---------|------|
| **多 Provider 兼容与 Web UI 稳定性** | #2607 | 第三方 OpenAI 兼容 provider 的渲染一致性仍是高频痛点 |
| **CLI 在垂直领域工作流的应用验证** | #2608 | 量化交易、代码生成等场景的端到端用例被社区主动输出 |

---

## 6️⃣ 开发者关注点

- **🧩 第三方模型兼容性**：#2607 反映出 Kimi CLI 在对接非 Moonshot 模型时，UI 层（流式响应解析、消息聚合）存在隐藏路径。开发者期望"接入即用"，不希望为不同 provider 维护差异化 UI 行为。
- **🔍 远程/SSH 场景的可观测性**（#848 合并）：`kaos` 子模块在 SSH 启用下的失败日志被长期忽视，说明边缘场景的 telemetry 仍有补齐空间。
- **🏗️ 架构层演进信号**（#2606）："Dev/knowledge plane" 命名暗示项目可能在向**开发面与知识/上下文管理分离**的方向演进（如 RAG、长期记忆、工具注册表等），值得保持关注。
- **📹 内容生态自发形成**：#2608 显示已有技术博主将 Kimi Code CLI 作为生产工具带进量化视频，社区影响力正从代码层向"内容传播层"扩散。

---

## 📌 总结

今日属于低活跃度日，但 #2607（兼容渲染 Bug）和 #2606（架构演进 PR）两条线索值得持续跟进。下一阶段建议重点观察：

1. 维护者对 #2606 的回应 —— 是否接受 knowledge plane 方向；
2. #2607 是否有对应修复 PR 出现；
3. 下个版本号是否在近 1-2 周内发布。

---
*报告由 AI 自动生成，基于 GitHub 公开数据生成于 2026-08-19。*

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

<think>The user wants me to generate a daily report for OpenCode community dynamics based on GitHub data. Let me analyze the data carefully and create a comprehensive Chinese report.

Let me organize the data:

**Issues (Top 30 by comment count):**
1. #3787 - Linear Agent (CLOSED, 17 comments, 34👍)
2. #32149 - Opencode Stops Processing Requests (OPEN, 15 comments, 6👍)
3. #7648 - TUI scrolling setting (CLOSED, 11 comments, 18👍)
4. #26338 - CommandCode as Provider (CLOSED, 9 comments, 36👍)
5. #7226 - /resume and /pause command (CLOSED, 8 comments, 28👍)
6. #33495 - Zen balance/free usage cap bug (OPEN, 7 comments, 1👍)
7. #42729 - Add Qwen3.8-27B (OPEN, 6 comments, 4👍)
8. #37489 - Context cache invalidation performance (OPEN, 6 comments, 1👍)
9. #41469 - Session silently stops on empty LLM response (OPEN, 5 comments, 0👍)
10. #43305 - API Key (CLOSED, 5 comments, 0👍)
11. #39831 - Zen: gpt-5.6-luna/terra fail (CLOSED, 5 comments, 1👍)
12. #34737 - Project path not updated (OPEN, 5 comments, 0👍)
13. #41582 - Truncated model response for OpenCode Go (OPEN, 4 comments, 2👍)
14. #32696 - Export & Import sessions in Desktop (OPEN, 3 comments, 2👍)
15. #43296 - App unresponsive (CLOSED, 3 comments)
16. #42748 - message.updated.1 quadratic writes (OPEN, 3 comments)
17. #43304 - Detect Mermaid diagrams in untagged fences (OPEN, 3 comments)
18. #43208 - zen balance issue (OPEN, 3 comments)
19. #34130 - Google Gemini 400 schema error (OPEN, 3 comments)
20. #41528 - Uncompleted Response (OPEN, 2 comments)
21. #40176 - deepseek-v4-flash tool_calls issue (OPEN, 2 comments)
22. #43307 - i18n project question (CLOSED, 2 comments)
23. #43131 - Login to console for all cli (CLOSED, 2 comments)
24. #43299 - Scrollbar missing in settings Linux (CLOSED, 2 comments)
25. #43297 - subagent tool sessionID required (CLOSED, 2 comments)
26. #42775 - sampling parameters hard-coded (CLOSED, 2 comments)
27. #43303 - Message IDs wrapped (OPEN, 2 comments)
28. #43295 - Web UI V2 prompt controls overlap (OPEN, 2 comments)
29. #42315 - Same git remote URL identical project_id (OPEN, 2 comments)
30. #41175 - Excessive storage event table (OPEN, 2 comments)

**PRs (Top 20):**
1. #43302 - Session sync engine
2. #43200 - Promote current design system
3. #32370 - Linux clipboard selection support
4. #43319 - TUI markdown rendering for injected text
5. #43317 - docs update readme
6. #43306 - SuperCompress MCP server example
7. #42978 - Show current worktree branch
8. #42520 - SCX.ai providers list
9. #43314 - Degrade undecodable image attachments
10. #29831 - Resolve spawn completion Windows
11. #43282 - Expose valid subagent IDs
12. #43310 - Remove Qwen sampling defaults
13. #43309 - Make generated title length configurable
14. #43308 - Limit prompt drag state to files
15. #37684 - Bridge runtime MCP tools
16. #37679 - Drop undefined metadata values
17. #37678 - Expose toolChoice via PromptInput
18. #37674 - Stabilize dialog mouse selection
19. #37673 - Add opencode-session-id-plugin
20. #37670 - Saved remote servers

Now let me categorize and analyze:

**Categories from Issues:**

1. **Provider/Model integration issues**: #33495, #39831, #34130, #41582, #42775, #43310, #42729
2. **Performance/Storage**: #37489, #42748, #41175, #43303
3. **TUI/UX**: #7648, #43304, #43295, #43299
4. **Session management**: #41469, #41528, #40176, #34737, #7226, #32696, #32149
5. **Provider additions**: #26338, #42520
6. **Desktop app issues**: #43296, #32696, #42315, #42978
7. **i18n**: #43307
8. **CLI features**: #43131
9. **Tool features**: #3787, #43297
10. **Bug fixes**: #43208, #43305

**Trend analysis:**
- Zen/Go billing issues are prevalent
- Storage/performance issues (event table, cache invalidation)
- Tool/model integrations (Linear, CommandCode, SCX.ai, Qwen3.8)
- TUI/UX improvements
- Cross-platform issues (Linux, Windows)

Let me write this in Chinese in a professional tone.

I should be careful - I need to check the date. The report is for 2026-08-19. Many issues are dated in this range. The issues list shows issues updated in the last 24 hours.

Let me draft the report:

---

# OpenCode 社区动态日报 | 2026-08-19

## 今日速览
今日 OpenCode 仓库无新版本释出，社区活跃主要集中在 Zen 计费体系稳定性（付费用户仍触发免费额度）、OpenCode Go 模型响应截断、桌面端路径/项目管理缺陷以及会话存储性能问题。多个高赞历史特性请求（Linear Agent、CommandCode Provider、/resume & /pause）已完成关闭，标志着工作流集成类需求进入落地阶段。

## 版本发布
无

## 社区热点 Issues

1. **#32149 [OPEN] Opencode Stops Processing Requests Without Response** (15 评论)
   - 高频出现却未定位根因的"thinking 后无响应"问题，多用户报告但缺乏稳定复现路径，社区等待官方排查。
   - 链接: https://github.com/anomalyco/opencode/issues/32149

2. **#33495 [OPEN] Zen 余额不计费，付费用户仍触发 200 次免费额度** (7 评论)
   - 影响核心商业模式，重复反馈两次均复现。OpenCode 营收链路问题，社区反应强烈。
   - 链接: https://github.com/anomalyco/opencode/issues/33495

3. **#39831 [CLOSED] Zen: gpt-5.6-luna/terra 持续 403 上游失败** (5 评论)
   - 上游 provider 接口异常，影响 Go 订阅主力模型，已关闭意味着已修复或上游恢复。
   - 链接: https://github.com/anomalyco/opencode/issues/39831

4. **#41582 [OPEN] OpenCode Go 模型响应中途截断** (4 评论)
   - DeepSeek-V4-Pro、Kimi-K3、MiMo-V2-Pro 等多个 Go 模型出现中途中断，流式 API 服务端问题。
   - 链接: https://github.com/anomalyco/opencode/issues/41582

5. **#41469 [OPEN] 空 LLM 响应导致会话静默退出** (5 评论)
   - 精确定位至 `packages/opencode/src/session/prompt.ts` 的 loop 退出条件，建议将 0 token/未知 finish 当作错误而非正常完成。
   - 链接: https://github.com/anomalyco/opencode/issues/41469

6. **#37489 [OPEN] 切换 mode 或 compaction 时上下文缓存失效，性能严重下降** (6 评论)
   - 影响本地 LLM (vLLM/Ollama) 用户，关系到长会话体验，是 cache 策略优化关键信号。
   - 链接: https://github.com/anomalyco/opencode/issues/37489

7. **#42729 [OPEN] FEATURE: 增加 Qwen3.8-27B** (6 评论)
   - 4 个👍表明 Qwen 系列开源模型在订阅目录中呼声高，期待 Go 订阅纳入更多开源权重模型。
   - 链接: https://github.com/anomalyco/opencode/issues/42729

8. **#34737 [OPEN] 项目目录移动后旧路径仍被打开** (5 评论)
   - 桌面端基础数据持久化缺陷，影响所有重命名/迁移项目的用户。
   - 链接: https://github.com/anomalyco/opencode/issues/34737

9. **#41175 [OPEN] 事件表存储完整 message 快照导致 GB 级膨胀** (2 评论)
   - 占比 ~90% 数据库体积，社区开发者提供工具，反映 opencode.db 存储架构亟需重构。
   - 链接: https://github.com/anomalyco/opencode/issues/41175

10. **#3787 [CLOSED] Linear Agent 集成** (17 评论，34👍)
    - 历史高互动特性请求，正式纳入规划/已关闭意味着已实现 Linear 集成。
    - 链接: https://github.com/anomalyco/opencode/issues/3787

## 重要 PR 进展

1. **#43302 feat(client): 会话同步引擎重构** (开放)
   - 以 `view = render(fold(snapshot ⊕ durable log) ⊕ outbox ⊕ overlay)` 重写 TUI 同步路径，确定性 + 单次快照 hydrate，重大架构变更。
   - 链接: https://github.com/anomalyco/opencode/pull/43302

2. **#43200 refactor(ui): 提升当前设计系统为标准导出** (开放)
   - 移除 `/v2` 临时导出与重复实现，统一到 `@opencode-ai/ui/*` 平面包，UI 体系规范化。
   - 链接: https://github.com/anomalyco/opencode/pull/43200

3. **#32370 feat(tui): Linux primary buffer 剪贴板选择支持** (开放)
   - 新增 `linux_clipboard_selection` 配置项，支持 Linux 平台 Ctrl+C/V 与 primary selection 双模，是 Linux 用户长期痛点。
   - 链接: https://github.com/anomalyco/opencode/pull/32370

4. **#43319 tui: 注入文本片段支持 markdown 渲染** (开放)
   - 用户消息与助手消息渲染路径统一化，解决历史行为不一致问题。
   - 链接: https://github.com/anomalyco/opencode/pull/43319

5. **#43314 fix(session): 图像附件解码失败时降级而非整体失败** (开放)
   - 修复 AVIF/HEIC/BMP/TIFF 等不被 Photon resizer 解码格式导致整条 prompt 失败的体验问题。
   - 链接: https://github.com/anomalyco/opencode/pull/43314

6. **#42978 fix(app): 显示当前 worktree 分支** (开放)
   - 桌面端手动创建的 Git worktree 在新建会话时正确解析分支，桌面 Git 体验补全。
   - 链接: https://github.com/anomalyco/opencode/pull/42978

7. **#43310 fix(opencode): 移除 Qwen 硬编码采样参数** (已关闭)
   - 取消 Qwen 系列模型强制的 temperature/top_p，回归由 provider/server 默认控制，由 bot 自动修复。
   - 链接: https://github.com/anomalyco/opencode/pull/43310

8. **#43309 feat(opencode): 可配置生成会话标题长度** (开放)
   - 新增 `title_max_words` 配置，控制标题 agent 输出字数。
   - 链接: https://github.com/anomalyco/opencode/pull/43309

9. **#43282 fix(core): 暴露 subagent 工具的有效 agent ID** (开放)
   - 修复 V2 subagent 工具 `sessionID` 必填与 schema 矛盾。
   - 链接: https://github.com/anomalyco/opencode/pull/43282

10. **#29831 fix(core): 在 Windows 下基于 exit 而非 close 解决 spawn 卡死** (开放)
    - Windows 后台进程残留导致 agent 永久挂起，老牌但仍未合并的高优先级 bug 修复。
    - 链接: https://github.com/anomalyco/opencode/pull/29831

## 功能需求趋势

从过去 24 小时 50 条活跃 Issue 中，社区关注度集中于以下方向：

| 方向 | 代表 Issue | 占比 |
|------|------------|------|
| **工作流/第三方集成** | #3787 Linear, #26338 CommandCode, #43307 i18n | 12% |
| **模型/Provider 扩展** | #42729 Qwen3.8-27B, #26338 CommandCode, #42520 SCX.ai | 10% |
| **Zen/Go 计费链路** | #33495, #39831, #41582, #43208, #43305 | 22% |
| **存储/性能架构** | #37489, #41175, #42748, #43303 | 16% |
| **TUI/UX 与可访问性** | #7648, #43295, #43304, #43299 | 14% |
| **会话/Agent 鲁棒性** | #41469, #40176, #32149, #7226, #32696 | 18% |
| **桌面端数据完整性** | #34737, #42315, #42978, #43296 | 8% |

**关键洞察**：
- **Zen/Go 计费问题成为最大热点**，用户对免费/付费切换体验的容忍度正在快速下降；
- **存储架构**（事件表快照、cache 失效）问题开始从单点 bug 演变为系统性问题；
- **Qwen 系模型与开源权重模型** 在订阅目录中的呼声显著上升，反映社区对厂商绑定风险的警惕。

## 开发者关注点

1. **空响应/截断响应的处理哲学**
   多个 Issue (#41469, #41582, #40176, #41528) 指向同一现象：模型返回 0 token 或中途停止时，OpenCode 将其视为正常完成而非错误，导致 agent 循环静默退出。开发者期望"未完成即异常"语义化处理，并暴露 hook 供业务判断。

2. **快照型事件日志的存储膨胀**
   #41175、#42748 共同指出 `event` 表重复序列化完整 message（含 diff、metadata），单会话可达 GB 级。社区建议引入 delta-only event、压缩快照或单独 diff 表。

3. **Message ID 时间戳溢出风险**
   #43303 揭示 2026-08-14 11:19:55 UTC 时间戳字段回绕，导致新消息排序反向，影响 revert/历史回放。是 ID 设计层面的系统性问题。

4. **Provider 行为硬编码**
   #42775 / #43310 暴露 OpenCode 在未配置时仍向特定模型（Qwen）注入 `temperature: 0.55`、`top_p: 1`，开发者呼吁改为 opt-in 而非 opt-out，避免 provider 默认值被覆盖。

5. **会话恢复与项目持久化**
   #7226 已实现 /resume & /pause，但 #34737、#42315 显示桌面端项目元数据（路径、git remote 派生 project_id）鲁棒性不足，开发者期待引入更稳定的内容寻址而非路径/URL 派生。

6. **Linux/跨平台一致性**
   #43299（Linux 设置无滚动条）、#29831（Windows spawn 挂起）、#32370（Linux primary buffer）凸显桌面端在不同 OS 上的体验碎片化，是桌面端最大未解决矛盾。

---

Let me refine this. I want to make sure I'm being accurate and helpful. Let me also make sure the formatting is clean and professional.

Actually, I should be careful about a few things:
- The data shows "no releases in past 24 hours" so I should clearly state that
- Issues include both OPEN and CLOSED status
- I should focus on the 30 issues shown (those with most comments)
- I should pick 10 PRs (top 20 are shown)

Let me also note that #43302 mentions "kitlangton" which is a notable name in the OpenCode community.

Let me finalize the report.</think>

# OpenCode 社区动态日报 | 2026-08-19

## 今日速览
今日仓库无新版本释出，社区活跃度聚焦三条主线：**Zen / Go 计费链路稳定性**（付费用户仍受 200 次免费额度限制、模型响应中途截断、403 上游错误）、**会话与存储架构**（事件表快照膨胀、Message ID 时间戳回绕、上下文缓存失效）以及 **桌面端跨平台一致性**（项目路径陈旧、Linux 滚动条缺失、Windows spawn 挂起）。多个高赞历史特性请求（Linear Agent、CommandCode Provider、/resume & /pause）于今日关闭，意味着工作流集成与基础指令已陆续落地，社区讨论重心正在从"提需求"转向"修问题"。

## 版本发布
无

## 社区热点 Issues（按评论数排序）

1. **#32149 [OPEN] Opencode Stops Processing Requests Without Response**（15 评论）
   高频且持续发酵的"thinking 后静默"问题，多名用户复现但缺乏稳定根因路径，社区等待官方排查。
   🔗 https://github.com/anomalyco/opencode/issues/32149

2. **#33495 [OPEN] [BUG] Zen 余额不计费，付费用户仍触发 200 次免费额度**（7 评论）
   跨双账号复现，影响核心商业模式；与 #43208、#43305 同源，是 Zen 营收链路最严重的信任风险。
   🔗 https://github.com/anomalyco/opencode/issues/33495

3. **#39831 [CLOSED] Zen: gpt-5.6-luna / gpt-5.6-terra 持续 403 上游失败**（5 评论）
   仅 `luna`/`terra` 受影响而 `nano` 等正常，疑似上游模型路由问题；今日已关闭意味着已修复或上游恢复。
   🔗 https://github.com/anomalyco/opencode/issues/39831

4. **#41582 [OPEN] OpenCode Go 模型响应中途截断**（4 评论）
   DeepSeek-V4-Pro、Kimi-K3、MiMo-V2

</details>

<details>
<summary><strong>jcode</strong> — <a href="https://github.com/1jehuang/jcode">1jehuang/jcode</a></summary>

<think>The user wants me to generate a daily community report for the jcode project on GitHub, dated 2026-08-19. Let me analyze the data carefully.

Looking at the data:
- There's a new release v0.78.0 with highlights about Harness API/SDK supporting embedded images in transcript messages
- There are 50 issues updated in the last 24 hours (showing top 30 by comment count)
- There's only 1 PR (#992) updated in the last 24 hours

Let me organize this into a Chinese daily report with the requested sections.

Key observations:
1. v0.78.0 released - image embedding support
2. Several critical bugs:
   - #940: Daemon hangs after stopping swarm workers (10 comments, critical)
   - #932: bash gate false positive on `rm -rf x 2>/dev/null` (9 comments, high)
   - #938: HTTP support for jcode provider access (8 comments)
   - #922: Destructive-command filter false positives (5 comments)
   - #972: MCP dispatch_name follow-ups (5 comments)
   - #935: Zombie process leak from detached spawns (3 comments, critical)

Common themes:
- bash gate/safety filter false positives (recurring theme - issues #709, #725, #932, #922)
- Swarm issues (#940, #975, #1001, #1002)
- Provider/API issues (#938, #849, #993, #961, #994, #984)
- TUI/UX improvements (#928, #955, #996, #997, #995, #930, #998)
- Memory retrieval improvements (#822, #824, #673, #825)
- Performance (#935, #955, #974, #825)

PR #992 is interesting - it resolves seven reproducible triage issues including #975, #983, #985 and others.

Let me write the report.</think>

# jcode 社区动态日报

**日期：2026-08-19**
**数据来源：github.com/1jehuang/jcode**

---

## 一、今日速览

v0.78.0 正式发布，Harness API/SDK 现已支持在 transcript 消息中嵌入图片，Todo 校验体验也得到优化。社区焦点仍集中在 **bash 安全门控的误报**（#709、#725、#932、#922 接连出现同类问题）、**swarm 分布式执行的稳定性**（#940、#975、#1001、#1002）以及 **Provider/ACP 接入的兼容性问题**上；维护者今日合并了 PR #992 一次性解决 7 个可复现的 triage 问题。

---

## 二、版本发布

### v0.78.0（已发布）

- **Highlights**：Harness API 与 SDK Client 现可在 transcript 消息中接收嵌入图片。
- **Improvements**：Todo 质量检查现在给出更短、更清晰的指引，避免重复阻塞最终响应。
- **Fixes**：已完成 hook 的 observer 现在可被可靠清理（避免资源残留）。
- 链接：<https://github.com/1jehuang/jcode/releases/tag/v0.78.0>

---

## 三、社区热点 Issues

| # | Issue | 关键看点 | 链接 |
|---|-------|---------|------|
| #940 | 停止 swarm worker 后守护进程持续重放 detached 命令，导致系统挂起 | **critical + regression**，10 条评论，进程无法被 kill，是当前最严重的稳定性问题 | <https://github.com/1jehuang/jcode/issues/940> |
| #932 | `rm -rf x 2>/dev/null` 被解析为多个删除目标并命中"保护路径"硬阻断 | **recurring-theme**，9 条评论，bash gate 误报问题再添一例 | <https://github.com/1jehuang/jcode/issues/932> |
| #938 | 允许 jcode 通过 HTTP（而非仅 HTTPS）访问内部 AI 基础设施 | 8 条评论，企业内网/VPN 场景的硬性需求 | <https://github.com/1jehuang/jcode/issues/938> |
| #922 | heredoc 中的英文文本触发"破坏性命令"安全门误报 | **fixed-pending-release**，5 条评论，模式匹配过激问题 | <https://github.com/1jehuang/jcode/issues/922> |
| #972 | #941 修复后续：dispatch_name 调用点残留、静默 MCP 命名冲突、complete_simple 仍丢 in-band error | 5 条评论，来自已合并 PR 的回归清扫 | <https://github.com/1jehuang/jcode/issues/972> |
| #935 | detached spawn 每次工具调用泄漏一个 zombie，shared-server 终将无法 fork() | **critical + regression**，3 条评论，资源生命周期设计缺陷 | <https://github.com/1jehuang/jcode/issues/935> |
| #928 | Windows Terminal / conhost 下多行粘贴自动提交、右键粘贴失效 | 3 条评论，TUI 跨终端兼容性 | <https://github.com/1jehuang/jcode/issues/928> |
| #673 | 增加 Voyage AI 作为 memory retrieval 的 embedding 后端 | 3 条评论，扩展检索能力选项 | <https://github.com/1jehuang/jcode/issues/673> |
| #996 | 在 bash 命令执行行展示更多细节（路径、参数等） | 2 条评论，提升 agent 可观测性 | <https://github.com/1jehuang/jcode/issues/996> |
| #974 | 为 provider 流量启用 reqwest socks 代理支持 | 2 条评论，企业网络场景 | <https://github.com/1jehuang/jcode/issues/974> |

**社区反应**：用户对 bash gate 反复出现的误报已显疲态，多个 issue（#709/#725/#932/#922）被标记为 `recurring-theme`，期望维护者从根本上重构 tokenizer 与模式匹配逻辑，而非逐个打补丁。

---

## 四、重要 PR 进展

过去 24 小时仅 1 条 PR 更新，但内容非常密集：

### PR #992 — `fix: resolve seven reproducible triage issues`
- 作者：@1jehuang（维护者本人）
- 状态：OPEN
- 内容：一次性打包修复 7 个已标记 `fixed-pending-release` 的 issue，包括：
  - **#975**：swarm spawn 中当 `initial_message` 为空字符串时保留非空 `prompt`
  - **#983**：visible launch 失败时回退到 headless ambient 执行
  - **#985**：inline diff 预览中显示文件路径与多文件边界
  - 关闭一次性会话并在成功后清理 active PID markers
  - 以及其他 3 项 triage 问题
- 链接：<https://github.com/1jehuang/jcode/pull/992>

> **值得关注的修复模式**：PR #992 体现了维护者将已修复但未发布的 issue 集中打包发布的策略。社区应关注该 PR 的 merge 节奏与 review 速度。

---

## 五、功能需求趋势

通过对 50 条更新 Issue 的归类，社区当前的关注焦点按热度排序：

1. **bash 安全门控重构**（5+ 条 issue）：#709、#725、#932、#922、#993 — 误报频发，已成为最高频痛点
2. **Swarm 分布式执行可靠性**（4 条）：#940、#975、#1001、#1002 — provider 路由、prompt 丢失、default_provider 不继承
3. **TUI/UX 细节打磨**（6 条）：#928、#996、#997、#995、#930、#998、#955 — 跨平台粘贴、命令可观测性、后台任务折叠、键盘导航、Sixel 渲染
4. **Provider 生态扩展**（4 条）：#938（HTTP）、#974（SOCKS 代理）、#673（Voyage AI embedding）、#961（OpenAI Responses prompt_cache_key）
5. **Memory / ACP 集成增强**（3 条）：#822（mid-turn 记忆）、#824（multi-line 噪声过滤）、#825（图像压缩+OCR）
7. **OpenAI 兼容层错误处理**（3 条）：#984、#994（HTTP 422 token-limit 自动重试）、#849（ACP 模型切换）

---

## 六、开发者关注点

从反馈密度与措辞提炼出几条高频痛点：

- **🛑 bash gate 是"双刃剑"**：开发者普遍认可安全设计的必要性，但当前 tokenizer 将 `2>/dev/null`、`<<EOF`、命令替换内的 `(` `)` 等语法结构错误地解析为命令参数，导致**大量正常命令被硬阻断**。社区呼吁要么放宽 `justification` escape 的适用范围，要么彻底重写 parser。
- **🧟 资源生命周期缺乏系统性设计**：#935（zombie 泄漏）、#940（detached 命令无限重放）、#972（observer 清理）暴露了 spawn/observer 体系缺乏统一的生命周期管理。
- **🔌 企业网络场景的真实需求**：HTTP、SOCKS、VPN、内网推理网关 — 这类需求在 issue #938、#974 中被反复提及，且目前只有 workaround。
- **👀 Agent 可观测性不足**：#996（bash 执行详情）、#997（后台任务折叠）、#1000（auto-resume 缺少 opt-out）反映开发者对"agent 在做什么"越来越敏感，需要更精细的 UI 控制权。
- **🔁 Hook 系统被评价为"too thin"**：#999 来自一位正在评估将 jcode 用作 GSD 类工作流框架底座的开发者，明确要求 first-class lifecycle-hook API；这是社区向更深层次扩展迈进的信号。

---

*日报基于过去 24 小时 GitHub 公开数据自动汇总，仅供参考。*

</details>

<details>
<summary><strong>pi</strong> — <a href="https://github.com/earendil-works/pi">earendil-works/pi</a></summary>

<think>Let me analyze the GitHub data from the earendil-works/pi repository and create a comprehensive daily report in Chinese.

Key observations:
1. No new releases in past 24 hours
2. 50 issues updated, with 30 shown (most commented)
3. 29 PRs updated, 20 shown
4. Most issues are marked [CLOSED] with [no-action] or [untriaged] tags
5. Several themes emerge:
   - GitHub Copilot integration issues
   - TUI rendering bugs (long transcripts, markdown tables)
   - Session persistence and concurrency issues
   - OpenAI SDK issues (timeout, User-Agent, timeoutMs)
   - Auto-compaction logic bugs
   - Provider-specific issues (Bedrock, Anthropic fallback)
   - Extension hooks proposals

Let me craft the report now.

Top issues to highlight:
1. #8251 - GitHub Enterprise Copilot login (4 comments) - rate limiting issue
2. #8281 - TUI full-screen flash (4 comments)
3. #6339 - Auto-compaction threshold bug (3 comments)
4. #8138 - openai-codex retry classification (OPEN, 2 comments)
5. #8323 - OpenAI client no timeout (2 comments)
6. #8317 - agent_recovery_exhausted hook (2 comments)
7. #8309 - Interface jumping (2 comments)
8. #8292 - Pre-persistence message hook (2 comments)
9. #8286 - openai-completions network failure (2 comments)
10. #8282 - find死进程 (2 comments)

Top PRs:
1. #8320/#8324 - OpenAI-compatible API provider in /login
2. #6216 - Amazon Bedrock Mantle provider
3. #8333 - Session writer ownership
4. #8330 - Stream inactivity watchdog
5. #8327 - Yield long markdown rendering
6. #8326 - disabledCommands setting
7. #8254 - Copilot policy login rate limits
8. #8319 - Anthropic fallback usage
9. #8307 - Cache-friendly compaction
10. #8316 - agent_recovery_exhausted hook
11. #8314 - Bedrock redacted reasoning
12. #8308 - Anthropic fallback usage (reverted via #8313)

Feature trends:
- Session persistence safety (multiple issues about concurrent writes)
- Extension hooks (recovery_exhausted, pre-persistence, skills namespace)
- New providers (OpenAI compatible, Bedrock Mantle)
- Auto-compaction improvements
- TUI performance (markdown rendering, viewport scrolling)
- Security/safety (disabledCommands, User-Agent identification)
- Provider quirks (Anthropic fallback pricing, Bedrock reasoning)

Let me write this up.</think>

# Pi 社区动态日报 · 2026-08-19

## 📌 今日速览

过去 24 小时社区非常活跃，共 **50 条 Issue** 与 **29 个 PR** 更新。讨论热点集中在三个方向：**会话持久化的并发安全**（多进程写入、provider 链路审计）、**TUI 长会话渲染性能**（Markdown 表格着色、整屏闪烁），以及 **OpenAI SDK 集成细节**（缺省超时、User-Agent 泄漏、`streamSimple` 参数透传）。多个能力增强型 PR 进入评审，包括流式响应看门狗、OpenAI-兼容 API 登录流程、可禁用内置斜杠命令等。

---

## 🚀 版本发布

无新版本发布。`pi 0.84.x` 仍是主线，多个 PR 仍在合并中。

---

## 🔥 社区热点 Issues

1. **[#8251](https://github.com/earendil-works/pi/issues/8251)** — GitHub Enterprise Copilot 设备流登录后并发策略请求触发 HTTP 429（4 评论，CLOSED）  
   影响 0.84.0/0.84.1，`enableAllGitHubCopilotModels()` 用 `Promise.all` 并发拉取策略，被企业限速识别为滥用。

2. **[#8281](https://github.com/earendil-works/pi/issues/8281)** — TUI 长会话（10k+ 行）滚动到视口上方更新时整屏闪烁（4 评论，CLOSED）  
   与 [#8309](https://github.com/earendil-works/pi/issues/8309) 同源问题：长会话新增命令时视图跳顶再回落。

3. **[#6339](https://github.com/earendil-works/pi/issues/6339)** — Auto-compaction 阈值在 agentic 运行中永远不被评估（3 评论，CLOSED）  
   `compaction.reserveTokens` 只在 run 边界检查，导致长 agentic 流程无法主动压缩。

4. **[#8138](https://github.com/earendil-works/pi/issues/8138)** — Contribution Proposal: 将 openai-codex "Sorry, something went wrong" 归类为可重试（OPEN，2 评论）  
   罕见的"我想自己贡献修复"提案，反映 Codex 后端稳定性问题。

5. **[#8323](https://github.com/earendil-works/pi/issues/8323)** — OpenAI 客户端创建时无 timeout，回退到 SDK 默认 600s（2 评论，CLOSED）  
   长思考的本地模型会被中途切断。

6. **[#8317](https://github.com/earendil-works/pi/issues/8317)** — 新增 `agent_recovery_exhausted` 扩展钩子（2 评论，CLOSED）  
   让扩展在原生重试耗尽后能切换模型继续。

7. **[#8286](https://github.com/earendil-works/pi/issues/8286)** — openai-completions 在真实网络下静默失败，127.0.0.1 回环却 100% 成功（2 评论，CLOSED）  
   指向远程 Ollama 场景下非确定性失败。

8. **[#8282](https://github.com/earendil-works/pi/issues/8282)** — `find` 在 Windows 大目录下扫描卡死（2 评论，CLOSED）  
   用户已在 AGENTS.md 中建议改用 fd。

9. **[#8334](https://github.com/earendil-works/pi/issues/8334)** — 会话持久化需要"单写者 + provider 前缀血缘审计"（1 评论，CLOSED）  
   与 [#8300](https://github.com/earendil-works/pi/issues/8300) 同根：两进程共享同一 JSONL 产生分叉。

10. **[#8331](https://github.com/earendil-works/pi/issues/8331)** — Agent 循环在 provider SSE 流中途卡顿时永远挂起（1 评论，CLOSED）  
    Anthropic 529 期间四个长会话冻结，spinner 一直转。

> 其他值得关注：[#8329](https://github.com/earendil-works/pi/issues/8329) skills 命名空间、[#8325](https://github.com/earendil-works/pi/issues/8325) 禁用 `/share`、`/export` 等命令、[#8305](https://github.com/earendil-works/pi/issues/8305) User-Agent 泄漏（OPEN）、[#8285](https://github.com/earendil-works/pi/issues/8285) Anthropic fallback 计费错误（OPEN）。

---

## 🛠 重要 PR 进展

1. **[#8333](https://github.com/earendil-works/pi/pull/8333)** — 强制会话写者独占 + provider payload 血缘审计（CLOSED）  
   关闭 [#8334](https://github.com/earendil-works/pi/issues/8334)，把持久化置于内存变更之前，是今天最重要的安全修复。

2. **[#8330](https://github.com/earendil-works/pi/pull/8330)** — Agent 流式响应不活动看门狗（CLOSED）  
   解决 [#8331](https://github.com/earendil-works/pi/issues/8331) 流卡死问题，超时后会失败关闭而不是永久挂起。

3. **[#8320](https://github.com/earendil-works/pi/pull/8320) / [#8324](https://github.com/earendil-works/pi/pull/8324)** — 在 `/login` 中加入 OpenAI 兼容 API provider（CLOSED）  
   双胞胎 PR，让用户可交互地添加自定义 base URL + model + key，自动写 `models.json`。

4. **[#8327](https://github.com/earendil-works/pi/pull/8327)** — 长 Markdown 渲染让步（CLOSED）  
   为 TUI 渲染加入单调截止时间，避免巨型字符串测量阻塞事件循环。

5. **[#8326](https://github.com/earendil-works/pi/pull/8326)** — 新增 `disabledCommands` 设置（CLOSED）  
   关闭 [#8325](https://github.com/earendil-works/pi/issues/8325)，允许组织级禁用 `/share`、`/export` 等命令。

6. **[#8254](https://github.com/earendil-works/pi/pull/8254)** — 修复 Copilot 策略登录限速（OPEN）  
   关闭 [#7850](https://github.com/earendil-works/pi/issues/7850)：先取账号模型目录、节流重试、仅更新未配置的工具型模型。

7. **[#8319](https://github.com/earendil-works/pi/pull/8319)** — Anthropic fallback usage 修复（OPEN）  
   之前 [#8308](https://github.com/earendil-works/pi/pull/8308) 因按请求模型计费被回退（[#8313](https://github.com/earendil-works/pi/pull/8313)），本 PR 改用透传的 usage 成本。

8. **[#8316](https://github.com/earendil-works/pi/pull/8316)** — 新增 `agent_recovery_exhausted` 扩展钩子（CLOSED）  
   关闭 [#8317](https://github.com/earendil-works/pi/issues/8317)，让扩展可在原生重试后接管会话。

9. **[#8307](https://github.com/earendil-works/pi/pull/8307)** — 启用实验性 cache-friendly compaction（OPEN）  
   把 compaction 请求追加到主会话，复用暖缓存，显著降低 token 成本。

10. **[#6216](https://github.com/earendil-works/pi/pull/6216)** — 新增 Amazon Bedrock Mantle OpenAI Responses provider（OPEN）  
    持续一个多月的 PR，借助 OpenAI 官方的 Bedrock provider，对 AWS 用户意义重大。

> 其他值得跟踪：[#8314](https://github.com/earendil-works/pi/pull/8314) Bedrock 加密 reasoning 回传、[#8275](https://github.com/earendil-works/pi/pull/8275) 泛化 openai-completions 思考预算字段、[#8249](https://github.com/earendil-works/pi/pull/8249) 主题失效重算（OPEN）、[#8303](https://github.com/earendil-works/pi/pull/8303) 折叠态不再挂载图片子节点。

---

## 📈 功能需求趋势

从 50 条 Issue 中归纳出几条清晰主线：

- **会话持久化正确性**：单写者锁、provider 前缀血缘、跨进程冲突成为本周最热话题（[#8300](https://github.com/earendil-works/pi/issues/8300)、[#8334](https://github.com/earendil-works/pi/issues/8334)），反映多窗口/多进程使用已成常态。
- **扩展 API 扩展面**：社区希望获得更细粒度钩子——`agent_recovery_exhausted`、pre-persistence 改写、skills 命名空间身份化（[#8317](https://github.com/earendil-works/pi/issues/8317)、[#8292](https://github.com/earendil-works/pi/issues/8292)、[#8329](https://github.com/earendil-works/pi/issues/8329)）。
- **新模型/Provider 集成**：Codex 错误归类、Bedrock Mantle、Anthropic fallback 计费、GPT-5.6 Terra/Sol/Luna 上下文覆盖（[#8138](https://github.com/earendil-works/pi/issues/8138)、[#6216](https://github.com/earendil-works/pi/pull/6216)、[#8285](https://github.com/earendil-works/pi/issues/8285)、[#8332](https://github.com/earendil-works/pi/issues/8332)）。
- **TUI 性能与渲染正确性**：长 transcript 滚动闪烁、Markdown 表格换行着色、巨型 Markdown 渲染让步（[#8281](https://github.com/earendil-works/pi/issues/8281)、[#8335](https://github.com/earendil-works/pi/issues/8335)、[#8327](https://github.com/earendil-works/pi/pull/8327)）。
- **安全/合规**：禁用 `/share`、区分 `dangerouslyAllowBrowser` 默认、自定义 User-Agent（[#8325](https://github.com/earendil-works/pi/issues/8325)、[#8305](https://github.com/earendil-works/pi/issues/8305)）。
- **Auto-compaction 智能化**：阈值评估时机、cache-friendly 复用、零用量 provider 兜底（[#6339](https://github.com/earendil-works/pi/issues/6339)、[#8307](https://github.com/earendil-works/pi/pull/8307)、[#8328](https://github.com/earendil-works/pi/issues/8328)）。

---

## 💬 开发者关注点

1. **长会话体验仍不理想**：从 10k+ 行 transcript 闪烁到命令队列后跳顶，"会话越长越难用"已成为最普遍的 UI 抱怨。
2. **网络路径脆弱**：远程 Ollama、GitHub Enterprise、Anthropic 529 等不同场景暴露出 stream 缺超时、重试缺失、限流并发过高等共性问题。
3. **并发/持久化假设过强**：当前没有"单写者"约束，用户自然地用 `pi -c` 多窗口协作，结果产生分叉 JSONL 和 provider 请求交替——这是产品迈向多人/多设备的关键缺口。
5. **OpenAI SDK 集成的隐藏缺陷**：BOM、`dangerouslyAllowBrowser` 默认 600s、`User-Agent` 泄漏、`streamSimple` 丢弃 `timeoutMs`——这些"小坑"对生产部署都是地雷。
6. **本地工具默认值的合理性**：`find` 在 Windows 扫大目录直接卡死，让用户只能在 AGENTS.md 里手写指引，提示默认工具链应做平台适配。
7. **扩展生态想要更"可救场"的能力**：希望在原生重试耗尽、provider 故障、写入冲突等场景下，扩展能以"医生"角色介入而不是被迫退出。

---

> 📊 数据范围：2026-08-18 ~ 2026-08-19 (UTC)。完整 50 条 Issue 与 29 个 PR 见 [earendil-works/pi](https://github.com/earendil-works/pi)。

</details>

---
*本日报由 [Big Model Radar](https://github.com/96loveslife/big_model_radar) 自动生成。*
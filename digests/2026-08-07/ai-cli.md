# AI CLI 工具社区动态日报 2026-08-07

> 生成时间: 2026-08-07 02:53 UTC | 覆盖工具: 8 个

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

<think>The user wants me to synthesize the daily reports from 7 AI CLI tools into a horizontal comparative analysis. Let me carefully analyze the data provided and produce a comprehensive yet professional cross-comparison report in Chinese.

Let me organize my thinking:

**Tools covered:**
1. Claude Code (Anthropic)
2. OpenAI Codex
3. Gemini CLI (Google)
4. GitHub Copilot CLI
5. Kimi Code CLI (Moonshot)
6. OpenCode
7. jcode
8. pi

Wait, that's 8 tools. Let me re-count... Looking at the input: Claude Code, OpenAI Codex, Gemini CLI, GitHub Copilot CLI, Kimi Code CLI, OpenCode, jcode, pi. Yes, 8 tools.

Let me extract key data points from each:

**Claude Code:**
- 0 new releases
- 50 issues updated, 3 PRs updated
- Hot themes: TUI rendering (2-space indent), Cowork/Desktop bugs, permission system, cost tracking

**OpenAI Codex:**
- 1 release: rust-v0.147.0 (Agent Plugins, conversation organization)
- 50 issues, 34 PRs
- Hot themes: Linux Desktop support (#11023, 933 likes), Windows process leaks, MCP improvements, HTTP proxy

**Gemini CLI:**
- 2 version actions: v0.55.0-preview.2, v0.56.0-nightly
- Multiple issues, ~10+ PRs highlighted
- Hot themes: Windows/PowerShell compatibility, MCP Client Sampling, agent safety, IDE integration

**GitHub Copilot CLI:**
- 1 release: v1.0.79-6
- 32 issues, 0 PRs
- Hot themes: Terminal rendering, MCP issues, session management regression in 1.0.74, model availability

**Kimi Code CLI:**
- 0 releases
- 8 issues, 3 PRs
- Hot themes: Memory System (#1283), StrReplaceFile UTF-8 bug (#2591), VSCode extension

**OpenCode:**
- 0 releases
- Multiple issues (Go subscription 401, 16 days ongoing), many PRs
- Hot themes: OpenCode Go/Zen 401 errors, context management, TUI improvements, multi-provider compat

**jcode:**
- 0 releases
- 50 issues, 1 PR (#820 addressing 4 bugs)
- Hot themes: Session/data loss bugs, model routing, multi-agent/swarm UX

**pi:**
- 1 release: v0.84.0 (Fullscreen TUI)
- 50 issues, 31 PRs
- Hot themes: Fullscreen TUI bugs, new provider support (Ollama Cloud, Qwen, Bedrock Mantle), Harness v2

Now let me create the comparative analysis:

**1. 生态全景 (3-5 sentences)**
- Overall: The AI CLI space is maturing rapidly. Multi-agent, MCP ecosystem, cross-platform desktop, and TUI quality are key battlegrounds.
- Three tools released versions today (Codex, Gemini CLI, Copilot CLI, pi)
- Subscription/auth issues (OpenCode Go 401 lasting 16 days) and cross-platform stability are common pain points
- MCP has become a common expansion surface for all tools

**2. 活跃度对比 (Table)**
| 工具 | Issues | PRs | Release | 热信号 |
| ... |

**3. 共同关注方向**
- MCP 生态 (Codex, Gemini CLI, Copilot CLI, Kimi)
- TUI/终端体验 (Claude Code, Copilot CLI, pi)
- 跨平台稳定性 (Claude Code Cowork, Codex Windows, Gemini CLI Windows, Copilot CLI NixOS)
- 多 Agent/Subagent (Claude Code, Gemini CLI, OpenCode, jcode, pi)
- 上下文/会话管理 (Codex, OpenCode, jcode, Kimi Memory)
- 企业级网络/认证 (Codex, Copilot CLI, OpenCode)
- 会话数据可靠性 (jcode, Claude Code)

**4. 差异化定位**
- Claude Code: Anthropic 生态，企业级
- Codex: OpenAI 生态，Linux Desktop 呼声最高，扩展性（Plugins）
- Gemini CLI: Google 生态，MCP 扩展积极
- Copilot CLI: GitHub 生态，企业级 MCP 集成
- Kimi Code: 中文友好，IDE 插件
- OpenCode: 多 provider，自托管/国产模型
- jcode: 个人维护，多 agent/swarm 实验性
- pi: 多 provider，Harness v2 架构演进

**5. 社区热度与成熟度**
- High activity: Claude Code, Codex, OpenCode, pi, Gemini CLI
- Lower activity but active: Kimi Code, jcode, Copilot CLI
- Mature phase: Codex, Copilot CLI (more maintenance)
- Fast iteration: OpenCode, pi, jcode

**6. 趋势信号**
- MCP becoming the standard extension protocol
- TUI quality becoming a key differentiator (Claude Code's 2-space indent issue lasting 8 months)
- Subscription/billing transparency issues
- Multi-provider support as competitive advantage
- Local model support (Ollama Cloud, Bedrock Mantle, DashScope)
- Agent safety/guardrails (destructive operations)
- IDE/CLI convergence

Let me write this in Chinese, professional and concise, suitable for technical decision makers.

I should make sure to:
- Be data-driven (cite specific numbers)
- Compare fairly
- Highlight actionable insights
- Be professional in tone
- Use tables and structured format

Let me draft the report now.</think>

# 2026-08-07 AI CLI 工具横向对比分析报告

---

## 一、生态全景

当前 AI CLI 工具赛道已进入**多线并进的成熟阶段**：头部产品（Claude Code、OpenAI Codex）已切入企业级与桌面端的工程化深水区，OpenCode、pi 等新兴力量以多 Provider 兼容性与新架构（Harness v2）快速崛起，Kimi Code CLI、jcode 等长尾项目以差异化能力（中文友好、Swarm 多 Agent）保持存在感。**MCP 协议**已成为所有工具共同的扩展基础；**TUI 渲染质量**、**跨平台稳定性**、**会话/数据可靠性**成为继"模型能力"之后的下一轮竞争焦点；而 **OpenCode Go 订阅 401 故障持续 16 天**未解，提示"AI CLI 的稳定性工程"仍是行业级短板。

---

## 二、各工具活跃度对比

| 工具 | 当日 Release | Issues 更新 | PRs 更新 | 社区状态 |
|---|---|---:|---:|---|
| **Claude Code** | 无 | 50 | 3 | 维护期 · Cowork/Desktop 集中爆雷 |
| **OpenAI Codex** | `rust-v0.147.0`（Agent Plugins + 会话组织） | 50 | 34 | 高频迭代 · Linux Desktop 933 👍 长期最热 |
| **Gemini CLI** | `v0.55.0-preview.2` + `v0.56.0-nightly` | 多个关键 Issue | ~15 | preview/nightly 双轨并行 |
| **GitHub Copilot CLI** | `v1.0.79-6`（UI/会话历史两处体验修复） | 32 | 0 | 维护态 · 终端渲染与 MCP 体验修复 |
| **Kimi Code CLI** | 无 | 8 | 3 | 低活跃但响应快 · StrReplaceFile bug 当日 2 PR 并行修复 |
| **OpenCode** | 无 | 高密度（Go 订阅故障延续） | ~20 | 快速迭代 · 2.0 路线密集合入 |
| **jcode** | 无 | 50 | 1 | 关键修复 PR #820 单条覆盖 4 个 critical bug |
| **pi** | `v0.84.0`（Fullscreen TUI） | 50 | 31 | 高速迭代 · Harness v2 + 多 Provider 扩张 |

**读数说明**：Claude Code / Codex / jcode / pi 的当日 Issue 数被 GitHub 截断显示为 50（实际活跃度更高），但 PR 数差异（Claude 3 vs pi 31）真实反映了"维护态"与"高速迭代态"的分野。

---

## 三、共同关注的功能方向

跨工具统计，以下 7 个方向在 **≥3 个工具**社区被同时提及，可视为行业级共识需求：

### 1. 🧩 MCP 协议生态扩展
- **Codex**：`#20883`（项目级进程池）、`#37337`（OAuth 重认证后恢复）
- **Gemini CLI**：`#10704`（Client Sampling，已 Closed）、Figma/Calendar MCP 接入诉求
- **Copilot CLI**：`#4392`（stdio 子进程泄漏）、`#4346`（CI 中 GITHUB_TOKEN 403）、`#4374`（Azure DevOps 400）、`#4211`（BigInt 序列化）
- **Kimi Code**：`#2147`（懒加载 MCP tool schema）
- 共识：MCP 已是事实标准，但**子进程治理、鉴权恢复、企业网络兼容**三大共性痛点尚未解决。

### 2. 🪟 跨平台 / 桌面端稳定性
- **Claude Code**：Cowork 在 Windows GPU 进程崩溃 / macOS 计划任务冲突
- **Codex**：Linux Desktop 缺失（`#11023`，933 👍）、Windows 进程风暴（`#33776`）、macOS 4875 个僵尸进程
- **Gemini CLI**：PowerShell 5.1 `&&` 解析失败 / Backspace 行为不一致 / subshell 误判
- **Copilot CLI**：NixOS Bash 启动失败（`#3392`）、tmux 深色主题不可读、Windows codepage 复制错乱
- **OpenCode**：Windows 10 + Node 26.7 启动失败、Linux XFCE/X11 TUI 卡死
- 共识：**Windows + macOS + Linux** 的"三角形"兼容仍是几乎所有工具的软肋。

### 3. 🤖 多 Agent / Subagent 编排
- **Claude Code**：多 Agent 隔离（`#73638` `server_tool_use` 注入顺序）、模型伪造 user turn（`#81461`）
- **Gemini CLI**：Subagent MAX_TURNS 后错误上报 `success`（`#22323`）
- **OpenCode**：subagent 会话复用 + lineage 跟踪（`#40931`）
- **jcode**：Swarm Plan 跨会话泄漏（`#816`）、tmux pane 同屏视图（`#792`）
- 共识：多 Agent 从"demo"走向"可用"需要解决**状态隔离、配额归属、可视化**三件套。

### 4. 💾 会话持久化与可靠性
- **Claude Code**：Session 重命名导致 transcript 永久损坏（`#73638`）
- **Copilot CLI**：v1.0.74 恢复 OOM 回归（`#4251`）、加载失败导致时间轴永久空白（v1.0.79-6 修复）
- **jcode**：close/clear 路径丢失长会话（`#814`，critical）、`/rewind n` 语义错乱（`#688`）
- **OpenCode**：会话摘要写入完整 patch 导致存储膨胀（`#40861` 已修）
- **Kimi Code**：跨会话 Memory System（`#1283`，累计 20 条评论）
- 共识："**会话不丢、状态可恢复**"是 Agent 类工具的**信任底线**，目前是高频爆雷区。

### 5. 📊 上下文与用量可视化
- **Claude Code**：会话限额 100% 但用量极低（`#54750`）
- **OpenCode**：会话上下文用量面板（`#6152`，129 👍，高赞榜首）
- **Codex**：subagent 配额夜间耗尽整周（`#35463`）
- **Kimi Code**：MCP tool schema 占用过多初始 token（`#2147`）
- 共识：**Token 经济性**与**用量透明度**已成为订阅用户最关心的"计费信任"问题。

### 6. 🔌 多 Provider 兼容
- **pi**：Ollama Cloud（`#7742`）、Qwen Token Plan（`#7659`）、Bedrock Mantle（`#6216`）、DeepSeek thought signature（`#7702`/`#7745`）
- **OpenCode**：Bedrock Opus 4.6 thinking 块（`#14332`）、DashScope 空 ID delta（`#40969`）、无 finish_reason 流（`#40965`）
- **jcode**：Meta Muse 新 Provider（`#817`）、按能力路由（`#819`）
- 共识：**摆脱单一模型供应商绑定**是 AI CLI 走向"长尾用户"的核心策略；国产模型生态（DashScope/Qwen）正在崛起。

### 7. 🛡️ Agent 行为安全与可解释性
- **Claude Code**：700+ 次权限弹窗的编排阻断（`#76718`）
- **Gemini CLI**：用户控诉 Agent 未经允许删除数千文件（`#26856`，47 评论）、破坏性命令护栏（`#22672`）
- **Copilot CLI**：权限触发规则不可见（`#4386`）、auto→interactive 行为不一致
- **OpenCode**：权限规则 fail-open（`#40945`，`deny` 语义偏差）
- 共识：**权限系统从"过度询问"走向"可解释 + 可编排"**是 AI Agent 落地的关键瓶颈。

---

## 四、差异化定位分析

| 工具 | 核心定位 | 目标用户 | 技术路线特征 |
|------|----------|----------|--------------|
| **Claude Code** | Anthropic 一体化旗舰 | 企业 + 重度 CLI 用户 | Cowork/Desktop 多模态、TUI 优化（但 8 个月未解的 2-space 缩进是反面教材） |
| **OpenAI Codex** | OpenAI 生态 + 桌面化扩张 | Linux/macOS 桌面用户 + 多 Plugin 集成商 | Agent Plugins 跨目录检索、会话分组增量浏览 |
| **Gemini CLI** | Google 生态 + MCP 激进扩展 | VS Code 用户 + MCP server 开发者 | preview/nightly 双轨、Client Sampling 等 MCP 新特性首发 |
| **GitHub Copilot CLI** | GitHub 企业生态 | Azure DevOps / GHE.com / CI 用户 | ACP 协议对齐 GitHub Actions 与企业身份 |
| **Kimi Code CLI** | 中文友好 + Agent 工程化 | 中文开发者 + VSCode 用户 | AGENTS.md 规范、工具二进制安全（UTF-8） |
| **OpenCode** | 多 Provider + 自托管友好 | 跨云订阅 + 国产模型用户 | MCP 进程池、tool output 截断、i18n 治理 |
| **jcode** | 实验性 Swarm / 个人维护者驱动 | 多 Agent 爱好者 | tmux pane 同屏、模型动态路由 |
| **pi** | 多 Provider + 架构创新 | 全栈工程师 + Provider 尝鲜者 | Harness v2 抽象、SQLite 会话引擎、独立架构路线 |

**关键差异点**：
- **生态绑定**：Claude Code / Codex 强绑定自家模型；Gemini CLI / OpenCode / pi 强调多 Provider
- **桌面化深度**：Codex 是当前桌面化投入最大的（Linux Desktop 933 👍 信号）；Claude Code 的 Cowork 则陷入稳定性泥潭
- **架构创新**：pi 的 Harness v2 抽象是当下最具系统性的工程化尝试；OpenCode 的 2.0 路线（queue/steer/break）紧随其后
- **维护模式**：jcode 是个人维护者快速响应模式（单 PR 修 4 个 critical bug）；其余以团队/公司维护为主

---

## 五、社区热度与成熟度

### 按"活跃度 × 迭代强度"分层

```
                    高活跃 ─────────────────────────────────────── 低活跃
  高迭代 │    pi (31 PRs)        Codex (34 PRs)          Gemini (~15 PRs)
         │    OpenCode (~20)                             Kimi (3 PRs)
         │    jcode (1 PR · 但单条含金量高)
         │
  低迭代 │    Claude Code (3)     Copilot CLI (0)        
         │    
```

### 阶段判断

| 阶段 | 工具 | 特征 |
|---|---|---|
| **高速迭代期** | pi、OpenCode | PR 密度高、2.0/Harness v2 路线图密集落地 |
| **成熟维护期** | Codex、Claude Code、Copilot CLI | Release 节奏稳定，但面临"用户体验债务"集中爆发 |
| **双轨并行期** | Gemini CLI | preview/nightly 双线推进，preview 通道积极 cherry-pick |
| **小而美响应期** | Kimi Code CLI、jcode | Issue 总量低，但响应速度极快（bug 当日即修） |

### 社区参与度指标

- **最热 Issue 总点赞**：OpenCode `#6152`（129 👍）、Codex `#11023`（933 👍）、Claude Code `#13378`（72 👍）
- **最强社区期望**：Linux Desktop 支持（Codex）、TUI 渲染修复（Claude Code）、Memory System（Kimi）
- **最长尾议题**：Claude Code 的 2-space 缩进问题已存在 **8 个月以上**

---

## 六、值得关注的趋势信号

### 📡 趋势 1：MCP 协议正在成为"通用扩展总线"
**信号强度**：🔥🔥🔥🔥🔥
今日 7 个工具中 **4 个明确推进 MCP 增强**，包括 Codex 的 OAuth 恢复、Gemini 的 Client Sampling、Copilot 的 BigInt 修复、Kimi 的 schema 懒加载。**MCP 已不再是单一供应商特性**，而是 AI CLI 工具的"事实标准扩展协议"。**对开发者的参考价值**：投资 MCP server 开发具有跨工具复用的长期价值。

### 📡 趋势 2："AI CLI 稳定性工程"成为下一轮竞争点
**信号强度**：🔥🔥🔥🔥
- OpenCode Go 401 故障持续 16 天未解
- Claude Code Cowork 在 Windows/macOS 多处回归
- Codex Windows 进程风暴、macOS 4875 个僵尸进程
- Copilot CLI v1.0.74 恢复 OOM 回归
- jcode close 路径直接丢失长会话

**对开发者的参考价值**：选型时**稳定性 > 新功能**。建议关注各项目的故障响应速度与 RCA 透明度，而非仅看 Release 频率。

### 📡 趋势 3：多 Provider / 国产模型生态加速渗透
**信号强度**：🔥🔥🔥🔥
pi 同期引入 Ollama Cloud、Qwen Token Plan

---

## 各工具详细报告

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills 社区热点

> 数据来源: [anthropics/skills](https://github.com/anthropics/skills)

<think>The user wants me to analyze the data from the anthropics/skills repository and generate a community hotspot report. Let me organize the information carefully.

Let me look at the data:

**Top PRs by comments (showing top 20):**
- #1298 - fix(skill-creator): run_eval.py always reports 0% recall
- #514 - Add document-typography skill
- #538 - fix(pdf): correct case-sensitive file references
- #486 - Add ODT skill
- #210 - Improve frontend-design skill
- #83 - Add skill-quality-analyzer and skill-security-analyzer
- #541 - fix(docx): prevent tracked change w:id collision
- #539 - fix(skill-creator): warn on unquoted description
- #1367 - feat(skills): add self-audit
- #1099 - skill-creator: fix run_eval.py crash on Windows
- #1050 - skill-creator: fix Windows subprocess + encoding bugs
- #723 - feat: add testing-patterns skill
- #525 - Add pyxel skill for retro game development
- #509 - docs: add CONTRIBUTING.md
- #181 - Add SAP-RPT-1-OSS predictor skill
- #95 - Add comprehensive system documentation
- #1479 - Add plan-file-hygiene skill
- #1323 - fix(skill-creator): run_eval trigger detection
- #1302 - Add color-expert skill
- #1261 - fix(skill-creator): isolate trigger-eval command files

**Top Issues by comments:**
- #492 (43 comments) - Community skills under anthropic/ namespace - trust boundary abuse
- #228 (16 comments) - Enable org-wide skill sharing
- #556 (12 comments) - run_eval.py: claude -p never triggers skills
- #62 (10 comments) - All my skills have disappeared
- #1329 (9 comments) - compact-memory skill proposal
- #202 (8 comments, closed) - skill-creator should be updated
- #412 (6 comments, closed) - agent-governance skill
- #189 (6 comments) - duplicate skills in document-skills and example-skills
- #1487 (4 comments) - claude-api skill token injection issue
- #1385 (4 comments) - Reasoning Quality Gate Pipeline
- #1175 (4 comments, closed) - SharePoint Online concerns
- #29 (4 comments) - Usage with bedrock
- #16 (4 comments) - Expose Skills as MCPs
- #12 (4 comments) - whitespace reformatting in docx
- #1169 (3 comments) - skill-creator description-optimisation loop

Note: PR comments all show as "undefined" in the data, so I need to focus more on Issues and the PR content/themes. The user wants me to identify "hot" PRs based on themes and discussions.

Let me organize the report:

1. **Hot Skills Ranking** - I should focus on PRs that have meaningful themes:
- #1298 - skill-creator fix (critical bug)
- #514 - document-typography (new skill)
- #486 - ODT skill (new skill)
- #83 - skill-quality-analyzer (meta skill)
- #1367 - self-audit skill
- #723 - testing-patterns skill
- #1302 - color-expert skill
- #1479 - plan-file-hygiene skill

2. **Community Needs** - From Issues:
- Org-wide skill sharing (#228)
- Trust/security concerns (#492)
- skill-creator bugs (#556, #1169, multiple PRs)
- MCP integration (#16)
- Bedrock support (#29)
- compact-memory (#1329)
- agent-governance (#412)
- Reasoning quality pipeline (#1385)
- duplicate skills issue (#189)
- token exhaustion (#1487)

3. **High Potential Unmerged Skills** - PRs that are open with significant potential:
- #1298 - skill-creator critical fix
- #514 - document-typography
- #486 - ODT
- #83 - skill-quality/security-analyzer
- #1367 - self-audit
- #723 - testing-patterns
- #1302 - color-expert
- #1479 - plan-file-hygiene
- #525 - pyxel

4. **Ecosystem Insights** - One sentence summary

Let me write this in Chinese as requested, professional and concise.</think>

# Claude Code Skills 社区热点报告
*数据截止 2026-08-07*

---

## 一、热门 Skills 排行

| 排名 | PR | Skill 名称 | 功能 | 讨论热点 | 状态 |
|---|---|---|---|---|---|
| 🥇 | [#1298](https://github.com/anthropics/skills/pull/1298) | **skill-creator 修复** | 修复 `run_eval.py` 永远报告 0% recall 的核心 bug，附带 Windows 流读取与并行 worker 修复 | 这是 issue #556 中复现 10+ 次的关键缺陷，导致 `improve_description.py` 描述优化在"噪音"上跑 | OPEN |
| 🥈 | [#83](https://github.com/anthropics/skills/pull/83) | **skill-quality-analyzer / skill-security-analyzer** | 两款 Meta-Skills：五维质量评分 + 安全审计 | 回应社区对 Skills 质量参差、缺乏审查机制的担忧 | OPEN |
| 🥉 | [#1367](https://github.com/anthropics/skills/pull/1367) | **self-audit** | "机械文件验证 + 四维推理审计"双闸门质量门控 v1.3.0 | 与 #1385 提案同源,目标是在交付前自动阻断劣质输出 | OPEN |
| 4 | [#514](https://github.com/anthropics/skills/pull/514) | **document-typography** | 检测并修复 AI 生成文档中的孤行/寡行、编号错位等排版缺陷 | 解决"每个 Claude 文档都中招"的普遍痛点 | OPEN |
| 5 | [#486](https://github.com/anthropics/skills/pull/486) | **ODT** | OpenDocument (.odt/.ods) 创建、模板填充、HTML 互转 | 补齐 LibreOffice 开源办公生态的 Skill 空白 | OPEN |
| 6 | [#723](https://github.com/anthropics/skills/pull/723) | **testing-patterns** | Testing Trophy 全栈:哲学→单元→组件→E2E→契约测试 | 覆盖社区呼声最高的"软件工程方法论"类需求 | OPEN |
| 7 | [#1302](https://github.com/anthropics/skills/pull/1302) | **color-expert** | 颜色命名体系(ISCC-NBS/Munsell/XKCD…)+ 色彩空间选型表 | 设计向垂直深度知识,提升 UI/前端输出质量 | OPEN |
| 8 | [#1479](https://github.com/anthropics/skills/pull/1479) | **plan-file-hygiene** | 规划工件的生命周期管理(对应 issue #1417) | 解决"planning 产物无限堆积、无人清理"的生态级痛点 | OPEN |

---

## 二、社区需求趋势

从 Top 15 Issues 提炼出五大诉求方向:

### 1. 🚨 信任边界与安全 — 最强烈诉求
- [#492](https://github.com/anthropics/skills/issues/492) **(43 评论,Top 1)**:社区 Skills 借 `anthropic/` 命名空间冒充官方,引发权限滥用信任危机
- [#1175](https://github.com/anthropics/skills/issues/1175) (closed):SharePoint/企业文档接入 Skill 时的权限边界
- 反映出社区急需**官方命名规范 + 签名/审核机制**

### 2. 🏢 企业级分发与协作
- [#228](https://github.com/anthropics/skills/issues/228) **(16 评论)**:Claude.ai 内组织级 Skill 共享(目前只能 .skill 文件手动上传)
- [#29](https://github.com/anthropics/skills/issues/29) (4 评论):AWS Bedrock 兼容性
- 典型企业落地"最后一公里"问题

### 3. 🛠 skill-creator 工具链可靠性
- [#556](https://github.com/anthropics/skills/issues/556) **(12 评论) + [#1169](https://github.com/anthropics/skills/issues/1169)**:`run_eval.py` 0% recall 问题
- [#62](https://github.com/anthropics/skills/issues/62) **(10 评论)**:Skills 莫名消失
- [#189](https://github.com/anthropics/skills/issues/189) (6 评论):`document-skills` 与 `example-skills` 内容重复
- 配套多个修复 PR(#1298/#1323/#1261/#1099/#1050),是当前最密集的维护战场

### 4. 🧠 智能体能力深化
- [#1329](https://github.com/anthropics/skills/issues/1329) (9 评论):`compact-memory` — 长会话符号化压缩,降低 context 占用
- [#1385](https://github.com/anthropics/skills/issues/1385) (4 评论):三段式推理质量门控管线
- [#1487](https://github.com/anthropics/skills/issues/1487) (4 评论):`claude-api` 单次工具调用注入 ~156k tokens 导致 context 爆掉
- 共同指向:**Agent 自身的状态管理与质量自检**

### 5. 🔌 协议与互操作
- [#16](https://github.com/anthropics/skills/issues/16) (4 评论):Skills → MCP 暴露统一 API
- [#412](https://github.com/anthropics/skills/issues/412) (closed, 6 评论):`agent-governance` 治理模式
- 预示 Skills 与 MCP 边界的下一阶段讨论

---

## 三、高潜力待合并 Skills

以下 PR 处于 OPEN 状态、且对应明确的社区痛点或被 Issues 引用,**短期内最有可能落地**:

| Skill | PR | 落地驱动力 | 链接 |
|---|---|---|---|
| **self-audit** | [#1367](https://github.com/anthropics/skills/pull/1367) | 与 issue #1385 提案同源,提供推理质量门控基础设施 | 🔗 |
| **document-typography** | [#514](https://github.com/anthropics/skills/pull/514) | 全局性排版缺陷,覆盖所有文档生成场景 | 🔗 |
| **ODT** | [#486](https://github.com/anthropics/skills/pull/486) | 补齐 ODF 国际标准格式,作者反复迭代 1.5 个月 | 🔗 |
| **skill-quality-analyzer** | [#83](https://github.com/anthropics/skills/pull/83) | 直接回应 #492 的"质量参差+冒充官方"两大问题 | 🔗 |
| **testing-patterns** | [#723](https://github.com/anthropics/skills/pull/723) | 社区呼声最高的工程方法论 Skill | 🔗 |
| **plan-file-hygiene** | [#1479](https://github.com/anthropics/skills/pull/1479) | 解决 #1417 的工件堆积治理问题 | 🔗 |
| **color-expert** | [#1302](https://github.com/anthropics/skills/pull/1302) | 设计向垂直深度,持续迭代至 7 月底 | 🔗 |
| **pyxel 复古游戏** | [#525](https://github.com/anthropics/skills/pull/525) | 配套 MCP,小游戏/像素艺术创作场景 | 🔗 |

**关键观察**:`skill-creator` 的 5 个相关修复 PR(#1298/#1323/#1261/#1099/#1050)集中在 4–6 月爆发,显示官方/社区已将该工具链视为基础设施,优先级最高。

---

## 四、Skills 生态洞察

> **社区当下最集中的诉求是:为快速膨胀的 Skills 生态建立"质量与信任"基础设施**——既包括元工具层的 `skill-creator` 评测修复、Skill 质量/安全审计,也包括命名空间治理(#492)与组织级分发(#228),而垂直领域新 Skill(typography / ODT / testing-patterns / color-expert)正是在这一基础设施之上批量涌现。

---

<think>Let me analyze the GitHub data for claude-code and generate a daily report for 2026-08-07.

Key observations:
1. No new releases in the past 24 hours
2. 50 issues updated, showing 30 most commented
3. Only 3 PRs updated in past 24 hours
4. Notable themes:
   - Many bugs related to Cowork feature
   - TUI/copy-paste issues with 2-space indentation
   - Permission system bugs
   - Desktop app issues (Windows)
   - Cost/usage tracking issues
   - Session management bugs
   - Multi-agent isolation issues

Let me categorize the most important issues:

**Top Issues by comments:**
1. #6527 - ask list ignored when Bash in allow list (23 comments)
2. #57371 - Disable bundled Cowork service on Windows (18 comments)
3. #13378 - 2-space indent and hard wrap at 80 breaks copy-paste (16 comments, 72 thumbs up)
4. #54750 - Session limit reaches 100% despite low usage (16 comments)
5. #76248 - Cloud/Cowork git proxy blocks pushes (14 comments)
6. #37796 - Copied text includes 2-space indentation (13 comments, 49 thumbs up)
7. #58402 - Cannot upgrade Pro to Max (10 comments, CLOSED)
8. #79584 - Assistant text emitted before tool call not rendered (9 comments)
9. #73638 - Session rename corrupts transcript (9 comments)
10. #71307 - Cowork scheduled reserved-path overlap (8 comments)
11. #26581 - System notifications when Claude needs attention (8 comments, 32 thumbs up)
12. #33026 - Allow Claude to self-initiate context compaction (8 comments, CLOSED)
13. #81461 - Model fabricates user turns (7 comments)
14. #76718 - Compound-command permission prompting (7 comments)
15. #78775 - Desktop session time-range filter regression (7 comments, 23 thumbs up)

**PRs (only 3):**
1. #84600 - Enable frontend-design plugin at project scope
2. #84427 - Fix validate-agent.sh exiting on first warning
3. #84381 - Fix validate-hook-schema.sh handling

Let me write the report in Chinese.</think>

# Claude Code 社区动态日报 · 2026-08-07

---

## 📌 今日速览

今日社区活跃度集中在 **Cowork 功能相关缺陷** 与 **TUI 文本渲染问题** 两大主题。多个高赞 Issue 聚焦于 Claude Code 终端输出中多余的 2 空格缩进导致复制粘贴困难（持续 8 个月仍未解决），以及 Cowork/Desktop 在 Windows 与 macOS 平台的权限、Git 代理、定时任务等多处回归。无新版本发布。

---

## 🚀 版本发布

今日无新 Release 发布。

---

## 🔥 社区热点 Issues（按热度与重要性筛选）

### 1. ⚠️ [Bug] 复制文本含 2 空格缩进（TUI 渲染问题）
**#37796** · 👍 49 · 💬 13
终端复制 Claude Code 输出时，每行开头自动加上 2 空格渲染内边距，导致粘贴到其他位置时缩进错乱，需手动清理。这是社区抱怨最久的问题之一，👍 数高达 49，反映出对日常使用的严重影响。
🔗 https://github.com/anthropics/claude-code/issues/37796

### 2. ⚠️ [Bug] 2 空格缩进 + 80 字符硬换行破坏复制粘贴
**#13378** · 👍 72 · 💬 16
**今日 👍 数最高的 Issue**。除了复制问题，输出在 80 字符处硬换行同样破坏内容完整性。社区强烈呼吁提供可配置开关以禁用该行为。
🔗 https://github.com/anthropics/claude-code/issues/13378

### 3. 🛡️ [Bug] Ask 权限列表在 Bash 加入 allow list 后被忽略
**#6527** · 评论数 23，权限系统存在绕过风险，影响安全策略的可预测性。
🔗 https://github.com/anthropics/claude-code/issues/6527

### 4. 💰 [Bug] 会话限额显示 100% 但实际用量极低
**#54750** · 💬 16
费用统计/会话计量异常：客户端显示会话已耗尽，但本地用量跟踪显示极低。涉及成本透明度问题。
🔗 https://github.com/anthropics/claude-code/issues/54750

### 5. 🪟 [Feature] Windows 桌面端：允许禁用捆绑的 Cowork 后台服务
**#57371** · 👍 42 · 💬 18
Windows 用户反馈 CoworkVMService 在不需要 Cowork 的场景下仍然占用资源，需求热度高。
🔗 https://github.com/anthropics/claude-code/issues/57371

### 6. 🐙 [Bug] Cowork 云会话 Git 代理阻止所有 Push
**#76248** · 💬 14 · 涉及 PAT 透传失效，影响团队协作能力。
🔗 https://github.com/anthropics/claude-code/issues/76248

### 7. 🖥️ [Bug] Assistant 文本在工具调用前未被渲染（Windows）
**#79584** · 💬 9 · TURN 内文本丢失，影响对话可读性。
🔗 https://github.com/anthropics/claude-code/issues/79584

### 8. 🧬 [Bug] Session 重命名导致 transcript 永久损坏
**#73638** · 💬 9 · 涉及 server_tool_use 与 system-reminder 注入顺序，后续所有 prompt 返回 400。
🔗 https://github.com/anthropics/claude-code/issues/73638

### 9. 🔔 [Feature] 系统通知：Claude 需要关注或完成任务时提醒
**#26581** · 👍 32 · 💬 8 · 用户希望在多任务并行时获得桌面通知，类似 GitHub Copilot。
🔗 https://github.com/anthropics/claude-code/issues/26581

### 10. 🧮 [Feature] 允许 Claude 主动发起上下文压缩
**#33026** · 👍 15 · 💬 8 · 已被关闭（CLOSED），但需求具有持续价值。
🔗 https://github.com/anthropics/claude-code/issues/33026

---

## 🔧 重要 PR 进展

> 今日仅 3 条 PR 更新，全部聚焦于 `plugins/plugin-dev` 工具链修复与项目级插件启用。

### 1. [PR #84600] 在项目范围内启用 frontend-design 插件
通过 `.claude/settings.json` 注册官方插件市场并自动加载 frontend-design 技能。
🔗 https://github.com/anthropics/claude-code/pull/84600

### 2. [PR #84427] 修复 validate-agent.sh 在首个 warning 时退出
修复 `((error_count++))` 在 `set -e` 下因返回非零退出码导致脚本中断的问题（#76985 的后续修复）。
🔗 https://github.com/anthropics/claude-code/pull/84427

### 3. [PR #84381] 修复 validate-hook-schema.sh 对包装格式与可选 matcher 的支持
使 hook 配置校验脚本支持顶层 `hooks` 包装对象与可选 matcher 字段。
🔗 https://github.com/anthropics/claude-code/pull/84381

---

## 📈 功能需求趋势

| 方向 | 代表 Issue | 热度 |
|---|---|---|
| **TUI 渲染质量（缩进/换行/复制）** | #37796 #13378 | 🔥🔥🔥 累计 👍 121 |
| **Cowork / Desktop 平台稳定性** | #57371 #76248 #71307 #78775 #81123 | 🔥🔥🔥 |
| **权限系统可预测性** | #6527 #76718 #59707 | 🔥🔥 |
| **费用与会话计量准确性** | #54750 #84612 | 🔥🔥 |
| **通知与终端集成（OS/tmux）** | #26581 #71369 | 🔥🔥 |
| **多 Agent / 会话隔离** | #73638 #81461 #84685 | 🔥 |
| **上下文压缩策略（Agent 自控）** | #33026 | 🔥 |

总体趋势：**Cowork 与 Desktop 的跨平台稳定性**已上升为当前最大诉求，**TUI 文本渲染**次之；开发者同时要求更细粒度的**权限控制**与**用量可视化**。

---

## 🧑‍💻 开发者关注点

1. **终端可用性痛点长期未解** —— 2 空格缩进与硬换行问题已存在超过 8 个月，👍 累计超过 120，几乎每个重度 CLI 用户都会遇到，影响工作流效率。

2. **Cowork 是当前最不稳定的子产品** —— Git 代理、计划任务、AskUserQuestion 权限通道、MSIX 安装包等问题集中爆发；尤其在 Windows 平台（GPU 进程崩溃导致包自我"砖化"）。

3. **权限系统的"过度询问"成为编排瓶颈** —— #76718 报告在 2 天并行会话中遭遇 700+ 次权限弹窗，即便是已加入 allowlist 的复合命令也被拆分询问，迫使开发者放弃多会话编排。

4. **用量统计缺乏信任度** —— 多个 Issue 报告显示限额提前耗尽或凭空产生消耗（#54750 #84612 #84352），开发者要求提供更透明的本地用量日志。

5. **会话/Transcript 一致性问题** —— server_tool_use 与 system-reminder 的注入顺序、模型在 assistant block 中伪造 user turn (#81461)，暴露出多 Agent 场景下 transcript 完整性校验的薄弱。

6. **AGENTS.md / CLAUDE.md 规则未被主动执行** —— #84486 指出文档化规则只在用户主动挑战时才被采纳，削弱了"项目级规范"机制的实用价值。

---

*数据来源：[anthropics/claude-code](https://github.com/anthropics/claude-code) · 统计窗口：2026-08-06 ~ 2026-08-07*

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

<think>Let me analyze the GitHub data provided for OpenAI Codex and generate a comprehensive daily report in Chinese for 2026-08-07.

Key observations from the data:

**Releases:**
- rust-v0.147.0 with new features about Agent Plugins and conversation organization

**Hot Issues (by comments):**
1. #11023 - Linux desktop app request (203 comments, 933 👍) - VERY popular
2. #33776 - Windows process spawning issues (32 comments)
3. #2880 - Copy/Export as Markdown (28 comments, closed)
4. #28080 - Desktop thread tools losing handlers (23 comments)
5. #20883 - Project-scoped MCP process pool (17 comments)
6. #6060 - HTTP proxy support (15 comments)
7. #19694 - Model picker filtering bug (14 comments, closed)
8. #26820 - CLI Chrome extension issues (12 comments)
9. #21653 - Multi-line status line (12 comments, 58 👍)
10. #33967 - Windows setup issues (9 comments)

**Notable PRs:**
- #37360 - TUI placeholder consistency
- #37358 - Markdown export to TUI
- #37357 - wait_agent timeout clamping
- #37356 - Agent identity endpoint overrides
- #37354 - Retry busy app-server spawns
- #37352 - Code-mode exec yield timeout config
- #37350 - ThreadManager custom ID generation
- #37349 - Minimal /dev in Bubblewrap sandboxes
- #37348 - Rollout migration tooling
- #37347 - Track context windows per agent
- #37345 - Model routing hints
- #37344 - Subagent MCP startup status
- #37343 - Bazel test binary staging
- #37342 - Preserve foreign cwd URIs
- #37341 - Content references for inline visualizations
- #37340 - Consolidate deferred environment provisioning
- #37339 - Reload app-server telemetry
- #37338 - Honor configured ChatGPT origin
- #37337 - Recover MCP servers after OAuth reauth

Let me organize this into a well-structured Chinese daily report.</think>

# OpenAI Codex 社区动态日报
**日期：2026-08-07**

---

## 📌 今日速览

今日 Codex 项目发布了 **rust-v0.147.0** 版本，重点引入了**可移植 Agent Plugins**机制与跨本地/工作区/远程的插件目录检索，同时改进了长会话的结构化组织能力。社区方面，**Linux Desktop 支持**（#11023）持续高居热度榜首（933 👍），Windows 桌面端则集中爆发了多起进程泄漏与崩溃问题，开发者对稳定性的呼声强烈。PR 端则呈现高频合并态势，多达近 20 个特性与修复进入主干。

---

## 🚀 版本发布

### rust-v0.147.0
**核心更新：**
- **Agent Plugins 可移植安装**：支持在本地、个人、工作区与远程插件目录中搜索与安装插件（#36544, #36409, #36919, #36796）
- **会话结构化组织**：支持将对话归入持久化、可手动排序的分组，并支持长对话的增量浏览（#35722, #36007, #36380, #36948 等）

> 这些特性显著扩展了 Codex 的扩展生态与会话可管理性，尤其对企业用户的插件分发与长任务处理具有实际价值。

---

## 🔥 社区热点 Issues（Top 10）

| # | Issue | 热度 | 重要性 |
|---|-------|------|--------|
| 1 | **[#11023](https://github.com/openai/codex/issues/11023)** Codex Desktop for Linux | 💬203 / 👍933 | ⭐⭐⭐⭐⭐ 长期最高呼声 Issue，反映 Linux 开发者群体的强烈诉求，933 👍 是本周最强信号 |
| 2 | **[#33776](https://github.com/openai/codex/issues/33776)** Windows 桌面子进程风暴导致 WMI/DWM 崩溃 | 💬32 / 👍27 | ⭐⭐⭐⭐ Windows 资源管理的严重缺陷，影响系统稳定性 |
| 3 | **[#2880](https://github.com/openai/codex/issues/2880)** TUI 复制/导出为 Markdown | 💬28 / 👍78 | ⭐⭐⭐⭐ 已 CLOSED，需求落地（见 PR #37358），开发者长期期待的功能 |
| 4 | **[#28080](https://github.com/openai/codex/issues/28080)** Desktop 线程工具间歇丢失 handler | 💬23 / 👍2 | ⭐⭐⭐⭐ 反映 Desktop app-server 架构稳健性问题，与 #27395 紧密相关 |
| 5 | **[#20883](https://github.com/openai/codex/issues/20883)** 项目级 MCP 进程池复用 | 💬17 / 👍4 | ⭐⭐⭐⭐ 性能优化方向，避免每个会话重复启动 MCP server |
| 6 | **[#6060](https://github.com/openai/codex/issues/6060)** 企业级 `http_proxy` 出站代理配置 | 💬15 / 👍68 | ⭐⭐⭐⭐ 企业部署刚需，👍68 显示高认同度 |
| 7 | **[#19694](https://github.com/openai/codex/issues/19694)** Model picker 过滤掉自定义模型 | 💬14 / 👍35 | ⭐⭐⭐⭐ 已 CLOSED，反映自定义模型接入的稳定性 |
| 8 | **[#26820](https://github.com/openai/codex/issues/26820)** CLI 无法获取 Chrome 扩展后端 | 💬12 / 👍9 | ⭐⭐⭐ Desktop/CLI 浏览器集成一致性问题 |
| 9 | **[#21653](https://github.com/openai/codex/issues/21653)** TUI 多行 status line | 💬12 / 👍58 | ⭐⭐⭐ 用户体验优化，状态行截断痛点 |
| 10 | **[#33967](https://github.com/openai/codex/issues/33967)** Windows ChatGPT 卡在 "Complete setup" | 💬9 / 👍0 | ⭐⭐⭐ Windows 新用户入门阻断，影响采用率 |

---

## 🛠 重要 PR 进展（Top 10）

| PR | 内容概要 |
|---|----------|
| **[#37358](https://github.com/openai/codex/pull/37358)** | **TUI 新增 Markdown 会话导出** `/export` 命令，支持剪贴板、文件路径与默认文件名提示 — 兑现了 #2880 的核心诉求 |
| **[#37360](https://github.com/openai/codex/pull/37360)** | **统一 TUI 输入占位符**：主输入框统一为 `Ask Codex to do anything`，侧边会话改为 `Ask a follow-up question`，移除随机示例 |
| **[#37348](https://github.com/openai/codex/pull/37348)** | **新增 rollout 迁移工具** `codex migrate-rollouts`，支持 dry-run、按线程过滤、I/O 限流与 JSON/verbose 报告 |
| **[#37347](https://github.com/openai/codex/pull/37347)** | **按 agent 跟踪 context window**：Forked subagent 继承父级压缩历史时，启动独立的 window lineage |
| **[#37345](https://github.com/openai/codex/pull/37345)** | **向后端发送 `x-codex-routing-hint` 头**：包含请求模型与 service tier，覆盖 Responses HTTP、远程压缩与 WebSocket 握手 |
| **[#37349](https://github.com/openai/codex/pull/37349)** | **Bubblewrap 全文件系统沙箱挂载最小 `/dev`**：解决宿主设备树被继承带来的安全面扩大问题 |
| **[#37337](https://github.com/openai/codex/pull/37337)** | **OAuth 重认证后恢复 MCP servers**：解决 Streamable HTTP MCP 因凭证失效导致启动失败且需重启的问题 |
| **[#37352](https://github.com/openai/codex/pull/37352)** | **可配置 code-mode exec yield 超时**：新增 `features.code_mode.default_exec_yield_time_ms`，默认 30s |
| **[#37339](https://github.com/openai/codex/pull/37339)** | **账户变更后重载 app-server 遥测**：account 切换触发 OTel collector 配置重建，确保日志/指标/追踪与新账户一致 |
| **[#37344](https://github.com/openai/codex/pull/37344)** | **修复 subagent MCP 启动状态滞留**：清理缓存 MCP server 的 startup expectation，避免 TUI 永久显示启动中 |

---

## 📈 功能需求趋势

通过对今日 50 条活跃 Issue 的归纳，社区关注点集中在以下方向：

| 方向 | 代表 Issue | 信号强度 |
|------|-----------|---------|
| **🖥 跨平台桌面支持** | #11023 (Linux), #32676, #37247 (macOS 崩溃) | 🔥 极强 |
| **⚡ 性能与资源管理** | #33776 (进程风暴), #33531 (MCP 内存泄漏), #20883 (MCP 池化) | 🔥 极强 |
| **🔌 MCP 生态完善** | #20883, #37351 (顺序确定性), #37337 (OAuth 恢复) | 🔥 强 |
| **🪟 Windows 平台稳定性** | #33776, #28080, #33967, #31556 (WFP 防火墙) | 🔥 强 |
| **🏢 企业级网络配置** | #6060 (HTTP 代理) | 中高 |
| **🧰 TUI/CLI 体验优化** | #21653, #24685 (剪贴板), #2880 (Markdown 导出) | 中 |
| **🤖 Subagent / 多 agent 治理** | #25341, #35463 (配额统计) | 中 |

---

## 👨‍💻 开发者关注点

从 Issue 摘要与讨论中提炼出开发者当前最迫切的痛点：

1. **Linux 桌面缺失是最大未解议题** — #11023 自 2026-02 提出至今热度不减，点赞数突破 933，多名开发者留言称因 Linux 端可用性问题被迫回退到 CLI 或绕过方案。
2. **Windows 平台资源管理失控** — 多个高优 Issue 集中反映 ChatGPT/Codex Desktop 在 Windows 上泄漏 `taskkill.exe`、`conhost.exe` 进程，触发 WMI 风暴、DWM 退化乃至 fork 失败（macOS 端 4875 个僵尸进程的 #37247 同类问题）。
3. **MCP 进程模型不够高效** — 开发者明确指出当前 stdio MCP 每个会话启动一份新进程的策略在大型项目中代价过高（#20883），同时 MCP 工具顺序在不同运行间存在 HashMap 迭代随机性（#37351），影响模型输出稳定性。
4. **企业网络集成能力不足** — `http_proxy` 长期不支持（#6060），让 Zscaler/PAC 代理环境下的企业用户几乎无法集成 Codex。
5. **Subagent 配额/上下文追踪缺陷** — #35463 反映 subagent 夜间耗尽整周配额，说明 usage 计数与上下文窗口归属在多 agent 场景下尚未健全。
6. **TUI 易用性细节仍待打磨** — 多行 statusline（#21653）、CLI 复制粘贴（#24685）、占位符不感知任务（#13466）等"小痛点"累积明显，今日 PR #37358/#37360 已开始系统性回应。

---

*日报基于 2026-08-07 当日 GitHub 数据生成，覆盖 1 个 Release、50 条更新 Issue 与 34 条更新 PR。*

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

<think>The user wants me to generate a Chinese daily report for the Gemini CLI community based on GitHub data. Let me analyze the data carefully and create a well-structured report.

Let me organize the information:

1. **Releases (past 24 hours)**:
   - v0.56.0-nightly.20260807.gd5c9a97dc - Nightly build
   - v0.55.0-preview.2 - Patch on preview release

2. **Top Issues by comments**:
   - #26856 - 47 comments - User complaint about data loss ($300 worth)
   - #20773 - 17 comments - PowerShell 5.1 ParserError with && operator (CLOSED)
   - #10704 - 13 comments - MCP Client Sampling feature request (CLOSED)
   - #22323 - 12 comments - Subagent MAX_TURNS bug
   - #25867 - 10 comments - Backspace deletes word on Windows (CLOSED)
   - #25884 - 10 comments - Invalid whitespaces/newlines in commands (CLOSED)
   - #25933 - 7 comments - execvp Permission denied on RHEL
   - #27132 - 7 comments - VS Code UI lockup
   - #24353 - 7 comments - Robust component level evaluations (maintainer only)
   - #22745 - 7 comments - AST-aware file reads (maintainer only)
   - #26318 - 5 comments - PowerShell command substitution (CLOSED)
   - #27180 - 5 comments - Session loss during shutdown (CLOSED)
   - #28698 - 5 comments - High memory usage
   - #26522 - 5 comments - Auto Memory retry issue (maintainer only)

3. **Top PRs**:
   - #28716 - Reclassifying Capacity Exhaustion as Terminal Error (CLOSED)
   - #28519 - prevent infinite auth loop (CLOSED)
   - #28597 - load environment variables before settings placeholders
   - #28602 - Docker base image update to node:24-slim
   - #28603 - Sandbox Dockerfile to Node 22
   - #28596 - --list-all-sessions CLI option
   - #28592 - keep auto model visible without preview access
   - #28720 - Automated version bump (nightly)
   - #28719 - cherry-pick to patch version (CLOSED)
   - #28526 - stop leaking disposables in vscode-ide-companion
   - #28718 - record usage when stream is aborted
   - #28641 - prevent ghost text wrapping infinite loop
   - #28640 - point ProjectIdRequiredError at current auth docs
   - #28639 - guard formatTruncatedToolOutput
   - #19638 - cap search results and clarify context overflow
   - #28700 - stop user message fusing into unanswered tool response (CLOSED)

Now let me craft a comprehensive Chinese daily report.

Let me think about the trends:
- IDE integration issues (VS Code)
- Windows/PowerShell compatibility issues
- MCP support (Client Sampling)
- Auto Memory feature improvements
- Auth flow improvements
- Docker/Node version updates
- Performance (memory usage, search results)
- Security concerns
- Bug fixes related to stream/interrupt handling

Let me write a structured report now.</think>

# Gemini CLI 社区动态日报

**日期：2026-08-07**
**数据来源：[google-gemini/gemini-cli](https://github.com/google-gemini/gemini-cli)**

---

## 📌 今日速览

社区今日活跃度集中在 **0.54.x → 0.55.0-preview → 0.56.0-nightly** 的版本迭代闭环上：`gemini-cli-robot` 在过去 24 小时内连续完成预览版 patch、自动化版本号回滚/重打与 nightly bump，开发者侧则集中修复了若干影响生产可用性的关键缺陷（OAuth 鉴权死循环、流式中断后的状态污染、上下文溢出）。**Windows / PowerShell 兼容性**仍是讨论度最高的痛点，单日有 3 条相关 Issue/Close。值得关注的是 **VS Code 扩展**的 UI 卡顿和 disposable 泄漏问题进入维护者视野，多个核心修复正在合入。

---

## 🚀 版本发布

过去 24 小时内共有 **2 个版本动作**：

| 版本 | 类型 | 说明 |
|---|---|---|
| [v0.55.0-preview.2](https://github.com/google-gemini/gemini-cli/pull/28719) | Preview Patch | 自动 cherry-pick `2139b12` 到 v0.55.0-preview.1 分支，触发"Capacity Exhaustion（容量耗尽）"被归类为 **Terminal Error**（不再重试，直接走模型降级）。即 #28716 的修复已落到 preview 通道。 |
| [v0.56.0-nightly.20260807.gd5c9a97dc](https://github.com/google-gemini/gemini-cli/pull/28720) | Nightly | 自动化 nightly 发行，包含 0.55.0-preview.1 changelog 和 0.56.0-nightly.20260806 的 bump。 |

> 备注：[#28715](https://github.com/google-gemini/gemini-cli/pull/28715) "Fix/revert version bump" 与 [#28712](https://github.com/google-gemini/gemini-cli/pull/28712) "chore: bump version to 0.54.2" 已先后 Closed，说明 0.54.2 的版本号尝试已被回滚，release 流程正在收敛到 0.55.0-preview 系列。

---

## 🔥 社区热点 Issues

按评论活跃度排序，挑选 10 条最值得关注的：

1. **[#26856](https://github.com/google-gemini/gemini-cli/issues/26856)** — *"AI disobeyed me… cost me 300 dollars worth of work…"* — 💬 47 | 👍 16  
   **为什么重要**：用户控诉 Agent 未遵守指令并删除了 Obsidian 中数千份文件，强烈情绪化表述。这是社区对 **Agent 自主性与可逆性** 担忧的极端样本，对"破坏性操作的二次确认"机制有标杆意义。

2. **[#20773](https://github.com/google-gemini/gemini-cli/issues/20773)** — *CLI throws ParserError on Windows PowerShell 5.1 due to '&&' operator* — 💬 17（✅ Closed）  
   **为什么重要**：PowerShell 5.1 不识别 `&&`，是 Windows 用户高频踩坑点。已关闭，说明该问题在 preview 中已修复，但仍有用户在不同 Windows 版本上复现。

3. **[#10704](https://github.com/google-gemini/gemini-cli/issues/10704)** — *MCP Feature Request: Support Client Sampling* — 💬 13 | 👍 9（✅ Closed）  
   **为什么重要**：呼声最高的 MCP 扩展能力 —— 让 MCP server 反向调用 LLM。已 Closed 表示已落地或正在落地，是 Gemini CLI 与 VS Code/Cursor 生态对齐的关键能力。

4. **[#22323](https://github.com/google-gemini/gemini-cli/issues/22323)** — *Subagent recovery after MAX_TURNS is reported as GOAL success* — 💬 12  
   **为什么重要**：子 Agent 在达到最大轮次后仍上报 `status: "success"`，会掩盖中断事实，直接影响 `codebase_investigator` 等 agent 的可信度评估。

5. **[#25867](https://github.com/google-gemini/gemini-cli/issues/25867)** — *Backspace deletes word instead of character on Windows* — 💬 10（✅ Closed）  
   **为什么重要**：终端输入体验问题。Windows 终端键位语义不一致是体验类 bug 的重灾区。

6. **[#25884](https://github.com/google-gemini/gemini-cli/issues/25884)** — *CLI agent introduces invalid whitespaces/newlines in terminal commands* — 💬 10（✅ Closed）  
   **为什么重要**：模型生成的多行命令在 Zsh 中复制粘贴失败，反映 Agent 输出到 shell 的格式化鲁棒性问题。

7. **[#27132](https://github.com/google-gemini/gemini-cli/issues/27132)** — *VS Code UI lockup and Gemini lag: globalState storage blocking main thread* — 💬 7  
   **为什么重要**：长会话后 `globalState` 同步阻塞主线程，直接导致 VS Code "Window not responding"。这是 **IDE 扩展性能** 方向的代表问题。

8. **[#28698](https://github.com/google-gemini/gemini-cli/issues/28698)** — *High memory usage detected* — 💬 5  
   **为什么重要**：发生在 v0.53.1，break-time 循环递增内存。是当前较新版本上的潜在内存泄漏信号，需关注 0.55.x 是否复现。

9. **[#26522](https://github.com/google-gemini/gemini-cli/issues/26522)** — *Stop Auto Memory from retrying low-signal sessions indefinitely* — 💬 5  
   **为什么重要**：Auto Memory 后台抽取 agent 对低信号会话无限重读，暴露 **memory 子系统** 的调度缺陷，与 #26523、#26525 共同构成"Auto Memory 三连"。

10. **[#25166](https://github.com/google-gemini/gemini-cli/issues/25166)** — *Shell command execution gets stuck with "Waiting input" after command completes* — 💬 4 | 👍 3  
    **为什么重要**：命令已结束但 CLI 仍显示 "Awaiting user input"，是 P1 级 agent 阻塞类 bug，影响日常使用。

---

## 🛠️ 重要 PR 进展

按修复影响力排序，挑选 10 条关键 PR：

1. **[#28716](https://github.com/google-gemini/gemini-cli/pull/28716)** — *Reclassifying Capacity Exhaustion as Terminal Error*（✅ Closed）  
   将"容量耗尽"和"信用余额不足"从可重试错误改为 **terminal error**，触发模型降级而非无限重试。已 cherry-pick 到 v0.55.0-preview.2。

2. **[#28718](https://github.com/google-gemini/gemini-cli/pull/28718)** — *fix(core): record usage already received when a stream is aborted*  
   修复 `generateContentStream` 在流被中断时未 flush 已收到的 `usageMetadata`，导致上游配额/计费统计丢失。Closes #28682。

3. **[#28700](https://github.com/google-gemini/gemini-cli/pull/28700)** — *fix(core): stop a new user message fusing into an unanswered tool response*（✅ Closed）  
   解决"模型替你把句子说完"的诡异行为：工具调用被中断（流失败/ESC）后，新消息被并入旧的未完成 turn。属于对话状态机的关键修复。

4. **[#28519](https://github.com/google-gemini/gemini-cli/pull/28519)** — *fix(core): prevent infinite auth loop by awaiting credential save…*（✅ Closed）  
   `oauth_creds.json` 异步写入未 await 导致无限授权循环，Fixes #28430。鉴权体验核心修复。

5. **[#28597](https://github.com/google-gemini/gemini-cli/pull/28597)** — *fix(cli): load environment variables before resolving settings placeholders*  
   修复 `.env` 与 `settings.json` 中 `${ENV_VAR}` 占位符的加载顺序竞态，影响所有依赖环境变量注入的项目配置。

6. **[#28639](https://github.com/google-gemini/gemini-cli/pull/28639)** — *fix(core): guard formatTruncatedToolOutput against non-positive maxChars*  
   `maxChars <= 0` 时 `String.slice` 负索引行为会导致输出膨胀约 2 倍。修复 #28620 并新增回归测试。

7. **[#28641](https://github.com/google-gemini/gemini-cli/pull/28641)** — *fix(cli): prevent ghost text wrapping infinite loop at narrow widths*  
   `getGhostTextLines` 在 CJK/emoji 等宽字符下窄宽终端可能死循环。修复 #19985，含 `help wanted`。

8. **[#28526](https://github.com/google-gemini/gemini-cli/pull/28526)** — *fix(vscode-ide-companion): stop leaking gemini.diff.accept and onDidChangeWorkspaceFolders disposables*  
   修复 VS Code 扩展中 `context.subscriptions.push(...)` 因多余括号被 collapse 成逗号表达式，导致 Disposable 泄漏。Fixes #27790。

9. **[#28602](https://github.com/google-gemini/gemini-cli/pull/28602)** / **[#28603](https://github.com/google-gemini/gemini-cli/pull/28603)** — *Docker 基础镜像升级到 Node 22/24-slim*  
   Node 20 已于 2026-04-30 EOL，沙箱环境运行模型生成的命令属于安全敏感面，必须升级。

10. **[#28596](https://github.com/google-gemini/gemini-cli/pull/28596)** — *feat(cli): add --list-all-sessions option to list sessions across all workspaces*  
    新增跨 workspace 会话列表能力，按目录分组。会话管理 UX 的明显增强。

> 其他值得追踪：[#28592](https://github.com/google-gemini/gemini-cli/pull/28592)（Auto 模型在无 preview 权限下仍可见）、[#28679](https://github.com/google-gemini/gemini-cli/pull/28679)（Vertex AI + 标准 API Key 的 401 错误提示）、[#19638](https://github.com/google-gemini/gemini-cli/pull/19638)（搜索结果上限与上下文溢出提示）、[#28640](https://github.com/google-gemini/gemini-cli/pull/28640)（修复 `ProjectIdRequiredError` 文档链接 404）。

---

## 📈 功能需求趋势

综合 Issues 与 PR 方向，社区关注度集中在以下赛道：

| 方向 | 代表 Issue/PR | 热度信号 |
|---|---|---|
| **MCP 生态扩展** | [#10704](https://github.com/google-gemini/gemini-cli/issues/10704) Client Sampling；[#27731](https://github.com/google-gemini/gemini-cli/issues/27731) Figma MCP；[#27725](https://github.com/google-gemini/gemini-cli/issues/27725) Calendar MCP | MCP 集成已是 Gemini CLI 与同类工具差异化竞争的主战场 |
| **IDE 集成质量** | [#27132](https://github.com/google-gemini/gemini-cli/issues/27132) VS Code 锁屏；[#28526](https://github.com/google-gemini/gemini-cli/pull/28526) Disposable 泄漏；[#22267](https://github.com/google-gemini/gemini-cli/issues/22267) Browser Agent 配置覆盖 | 长会话性能、配置覆盖、资源回收成为新焦点 |
| **Agent 可控性与安全** | [#22672](https://github.com/google-gemini/gemini-cli/issues/22672) 阻止破坏性命令；[#26856](https://github.com/google-gemini/gemini-cli/issues/26856) 用户数据丢失；[#26525](https://github.com/google-gemini/gemini-cli/issues/26525) 凭据脱敏 | `git reset --force`、自动 memory 中的密钥泄露等 |
| **会话与持久化** | [#28596](https://github.com/google-gemini/gemini-cli/pull/28596) 全局会话列表；[#27180](https://github.com/google-gemini/gemini-cli/issues/27180) 异常关机后 session 丢失；[#27721](https://github.com/google-gemini/gemini-cli/issues/27721) 0.45.2 后 history 被清 | `gemini --resume` 体验和跨 workspace 管理呼声高 |
| **AST-aware 工具能力** | [#22745](https://github.com/google-gemini/gemini-cli/issues/22745)、[#24353](https://github.com/google-gemini/gemini-cli/issues/24353) 组件级评估 | 维护者正在评估结构化代码理解对 token 经济性的提升 |
| **Auto Memory 子系统** | [#26522](https://github.com/google-gemini/gemini-cli/issues/26522)、[#26523](https://github.com/google-gemini/gemini-cli/issues/26523)、[#26525](https://github.com/google-gemini/gemini-cli/issues/26525) | "三连"说明团队正在系统化重构 memory pipeline |

---

## 🧑‍💻 开发者关注点

整理自用户提交的痛点与高频反馈：

1. **Windows / PowerShell 兼容性是体验头号瓶颈**  
   `&&` 解析失败、Backspace 行为不一致、`detectCommandSubstitution` 误判 subshell —— [#20773](https://github.com/google-gemini/gemini-cli/issues/20773)、[#25867](https://github.com/google-gemini/gemini-cli/issues/25867)、[#26318](https://github.com/google-gemini/gemini-cli/issues/26318) 三连击。许多 Linux/macOS 上无感知的命令在 Windows 下直接 break。

2. **Agent 的破坏性操作缺乏护栏**  
   用户反复报告 agent 使用 `git reset`/`--force`、删除整个文件树、覆盖 Unicode 文本（[#27386](https://github.com/google-gemini/gemini-cli/issues/27386)）。开发者普遍希望引入 **dry-run / undo / 二次确认** 机制，而不是完全依赖 prompt 工程。

3. **长会话的性能与可靠性**  
   内存泄漏（[#28698](https://github.com/google-gemini/gemini-cli/issues/28698)）、VS Code 主线程阻塞（[#27132](https://github.com/google-gemini/gemini-cli/issues/27132)）、意外关机后 session 丢失（[#27180](https://github.com/google-gemini/gemini-cli/issues/27180)）—— 长任务工作流正在成为常态，但基础设施还停留在短会话假设上。

4. **状态机与流中断的边界 case**  
   工具调用被中断后新消息被"融合"（[#28700](https://github.com/google-gemini/gemini-cli/pull/28700)）、流被 abort 时 usage 统计丢失（[#28718](https://github.com/google-gemini/gemini-cli/pull/28718)）、shell 命令结束后仍卡在 "Waiting input"（[#25166](https://

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

<think>Let me analyze the GitHub data for the Copilot CLI repository and generate a comprehensive daily report in Chinese.

Key observations from the data:

1. **Releases**: v1.0.79-6 was released with two bug fixes:
   - Fixed internal delay diagnostic warning on interactive UI
   - Fixed failed session-history load leaving timeline blank

2. **Issues**: 32 issues updated in the past 24 hours. Let me identify the most important ones:

Top issues by comments and reactions:
- #4313: Allow scrolling through current conversation history (4 comments, OPEN)
- #3392: Bash tool breaks on NixOS >=1.0.49 (3 comments, 7 likes, OPEN) - High community interest
- #4174: ACP server doesn't expose token/context usage (3 comments, 2 likes, CLOSED)
- #4251: Resume large session OOMs regression in 1.0.74 (2 comments, 1 like, OPEN)
- #4311: Transcript renders as blank lines (2 comments, OPEN)
- #4212: Prompt box invisible in tmux dark-on-dark (2 comments, OPEN)
- #4211: BigInt handling in MCP response (2 comments, OPEN)
- #4380: Rubber Duck reviewer model issue (2 comments, OPEN)
- #4392: Orphaned stdio MCP server processes (1 comment, OPEN)
- #4391: Copying text clears screen on Windows codepages (1 comment, OPEN)
- #4118: /app command not selecting current directory (35 likes, CLOSED) - Very high reaction
- #4346: MCP registry 403 in GitHub Actions with GITHUB_TOKEN (1 comment, 1 like, OPEN)
- #3053: Wrong reasoning effort when changing models (1 comment, OPEN)
- #4282: Session resume fails due to model name prefix (1 comment, OPEN)
- #4204: Add .agents discovery for non-git folders (1 comment, OPEN)
- #4374: /mcp search fails in Azure DevOps repos (4 likes, OPEN)
- #4376: BYOM model discovery and switching (1 like, OPEN)

3. **PRs**: No PRs in the past 24 hours - will note this.

4. **Trends**:
   - Terminal rendering/UX issues (multiple issues about display problems)
   - MCP-related issues (registry, server management, BigInt handling)
   - Session management problems (resume, memory, model persistence)
   - Cross-platform compatibility (NixOS, Windows, tmux)
   - Model support (BYOM, organization models missing)
   - ACP protocol (token usage exposure)

Let me now create the daily report in Chinese.</think>

# GitHub Copilot CLI 社区动态日报
**日期：2026-08-07**

---

## 📌 今日速览

过去 24 小时 Copilot CLI 仓库更新活跃，共 32 条 Issues 推进，并发布 v1.0.79-6 补丁版本，修复了交互式 UI 中的两处体验问题——内部延迟诊断警告干扰 UI、会话历史加载失败导致时间轴永久空白。社区关注焦点集中在**终端渲染异常**、**MCP 生态兼容性**与**会话恢复/模型一致性回归**三大方向；无 PR 更新，仓库开发节奏偏维护态。

---

## 🚀 版本发布

### v1.0.79-6（已发布）
🔗 https://github.com/github/copilot-cli/releases/tag/v1.0.79-6

**修复内容：**
- **UI 体验优化**：罕见的内部延迟不再在交互式 UI 顶部打印诊断警告，避免干扰用户操作视野。
- **会话历史恢复**：修复会话历史加载失败导致的时间轴永久空白问题——此前失败会被静默丢弃，整个会话期间转录区保持空白且无日志；现在失败会被正确捕获处理。

> 该版本为补丁级别更新，建议所有用户升级以避免长期会话出现"看不见历史"的隐性数据丢失。

---

## 🔥 社区热点 Issues（精选 10 条）

### 1. #4313 — 支持滚动浏览当前对话历史 ⭐ 持续热议
🔗 https://github.com/github/copilot-cli/issues/4313
**标签**：`area:input-keyboard`, `area:terminal-rendering` | 状态：OPEN | 4 条评论
**为何重要**：用户希望用鼠标滚轮或 PageUp/PageDown 在 Copilot CLI 中浏览当前对话历史，这是终端类 AI 工具的基础体验需求，长期被社区呼吁。

### 2. #3392 — NixOS 上 Bash 工具在 v1.0.49+ 全面失效 ⭐ 7 👍
🔗 https://github.com/github/copilot-cli/issues/3392
**标签**：`area:platform-linux`, `area:tools` | 状态：OPEN | 3 条评论
**为何重要**：从 1.0.49 开始的回归性缺陷，导致 Bash 工具在 NixOS 上报 `Failed to start bash process`，影响全部 NixOS 用户群体，获 7 个 👍 印证严重性。

### 3. #4251 — 大型会话恢复在 1.0.74 出现严重 OOM 与 CPU 占用回归 ⭐ 性能回退
🔗 https://github.com/github/copilot-cli/issues/4251
**标签**：`area:sessions` | 状态：OPEN | 2 条评论
**为何重要**：用户通过 A/B 测试精确定位到 1.0.74 引入的回归，恢复会话时内存占用比 1.0.73 高约 **3–4 倍**，且 CPU 满载持续约 70 分钟。这是阻塞重度用户的明确性能退步。

### 4. #4118 — `/app` 命令未默认选中当前工作目录 ⭐ 35 👍 最高赞
🔗 https://github.com/github/copilot-cli/issues/4118
**标签**：无 | 状态：CLOSED | 35 个 👍（本批最高）
**为何重要**：虽已关闭但**社区呼声最高**（35 👍），说明大量用户对当前 `/app` 命令每次都要手动选择目录的体验不满。**说明：本次虽已关闭，可能为重复 issue 或临时关闭，值得持续关注是否会在后续版本修复**。

### 5. #4374 — `/mcp search` 在 Azure DevOps 远程仓库下 400 报错 ⭐ 企业用户痛点
🔗 https://github.com/github/copilot-cli/issues/4374
**标签**：`area:enterprise`, `area:mcp` | 状态：OPEN | 4 个 👍
**为何重要**：在 git remote 指向 Azure DevOps 的受信任仓库内，MCP 注册表策略获取直接失败 400，导致 `/mcp search` 不可用，影响非 GitHub 企业用户（Azure DevOps 用户）。

### 6. #4346 — Actions 中 `GITHUB_TOKEN` 触发 MCP 注册表 403 ⭐ CI 阻塞
🔗 https://github.com/github/copilot-cli/issues/4346
**标签**：`area:authentication`, `area:non-interactive`, `area:mcp` | 状态：OPEN | 1 条评论 / 1 👍
**为何重要**：GitHub Actions 文档化推荐的无 PAT 模式下，Copilot CLI 通过内置 `GITHUB_TOKEN` 认证后，**所有非默认 MCP 服务器全部无法加载**，直接阻塞 CI 场景使用 MCP。

### 7. #4392 — 鉴权后重建 MCP 客户端导致 stdio 子进程泄漏 ⭐ 资源泄漏
🔗 https://github.com/github/copilot-cli/issues/4392
**标签**：`triage` | 状态：OPEN | 1 条评论
**为何重要**：CLI 启动时会生成首批 stdio MCP 进程，鉴权完成后销毁并重建 MCP 客户端，但**第一代子进程既没被 kill 也没被 reap**，每次启动都会留下一批孤儿进程。

### 8. #4212 — tmux 内提示框与高亮菜单呈"深色对深色"不可读
🔗 https://github.com/github/copilot-cli/issues/4212
**标签**：`area:theming-accessibility`, `area:terminal-rendering` | 状态：OPEN | 2 条评论
**为何重要**：在 tmux 中使用 Copilot CLI 会导致关键交互元素完全不可见，而裸 iTerm2 正常——典型的终端兼容性/主题检测缺陷。

### 9. #4311 — 会话转录区在终端宽度不变时渲染为空白（缓存失效但未触发重测）
🔗 https://github.com/github/copilot-cli/issues/4311
**标签**：`area:terminal-rendering` | 状态：OPEN | 2 条评论
**为何重要**：交互模式下底部转录区空白（向上滚动可见内容），`/resume` 也无法恢复，是与 #4251 等并列的 UI 渲染层缺陷。

### 10. #4390 — 组织启用的模型目录中缺失（Claude Sonnet 5 / Opus 5 / Kimi K3）⭐ 新模型可用性
🔗 https://github.com/github/copilot-cli/issues/4390
**标签**：无 | 状态：OPEN
**为何重要**：Copilot Business 组织明确启用的模型在 CLI 有效模型目录中不可见，**全部 Anthropic 模型在 CLI 中不可用**，对 Copilot Business 付费用户影响重大。

---

## 🛠 重要 PR 进展

过去 24 小时内**无 PR 更新**。仓库目前处于维护期，开发节奏主要在 Issue 排查与版本补丁（v1.0.79-6）上。建议关注以下历史高价值 PR 后续动向：

- 可滚动对话历史 UI 实现（对应 #4313）
- NixOS Bash 启动路径兼容修复（对应 #3392）
- 1.0.74 会话恢复内存回归回退（对应 #4251）

---

## 📈 功能需求趋势

从近 24 小时活跃的 32 条 Issue 中提炼出的社区关注方向：

| 方向 | 代表性 Issue | 热度信号 |
|------|------------|---------|
| **终端渲染/UI 一致性** | #4313, #4311, #4212, #4391, #4387 | 多条 Issue 集中爆发，是当前最高频投诉区 |
| **MCP 生态完善** | #4392, #4346, #4374, #4211, #168 | 涉及注册表、CI 鉴权、子进程管理、BigInt 序列化、Azure DevOps 兼容 |
| **会话管理/恢复可靠性** | #4251, #4282, #4383, #4372, #4373 | 重点是 v1.0.74 后的回归与模型/工作树一致性问题 |
| **跨平台兼容性** | #3392 (NixOS), #4391 (Windows codepage), #4384 (Windows Terminal), #4212 (tmux) | 桌面端各 OS/终端组合的边角缺陷大量涌现 |
| **模型支持扩展** | #4390 (组织模型目录), #4376 (BYOM 动态切换), #3053 (推理档位), #4380 (Rubber Duck 模型选择) | 企业组织模型、BYOM、自定义端点等长尾场景需求增加 |
| **权限/审批透明化** | #4386, #4388, #4389 | 希望权限提示展示触发规则，以及 auto→interactive 切换后的行为不一致 |
| **Shell 与后台任务调度** | #4385, #4387, #4372, #4373 | Shell 模式 Tab 补全、后台任务完成检测、消息队列顺序异常 |

---

## 💬 开发者关注点（痛点 & 高频需求）

1. **"看不见"的体验问题最扎心**：多个终端渲染空白（#4311, #4383）、不可读（#4212）、标题错乱（#4384）——开发者把 Copilot CLI 当作长时间使用的工具，**可视性缺陷会直接破坏信任感**。

2. **会话一致性是隐性数据风险**：v1.0.74 后的恢复 OOM（#4251）、worktree 残留（#4383）、模型前缀不匹配导致恢复失败（#4282）——开发者依赖 CLI 跨日延续工作流，**恢复机制的脆弱性影响生产连续性**。

3. **MCP 在企业/非 GitHub 场景举步维艰**：403 阻断 Actions CI（#4346）、400 阻断 Azure DevOps（#4374）、子进程泄漏（#4392）、BigInt 序列化崩溃（#4211）——MCP 生态虽被看好，但**接入路径远未在所有企业环境中打通**。

4. **新模型/新版本发布的"目录同步"掉队**：组织启用 Claude Sonnet 5 / Opus 5 / Kimi K3 后 CLI 看不到（#4390），切换模型后推理档位错乱（#3053），Rubber Duck 选了"同源"模型（#4380）——**CLI 与上层模型/计费平台的同步机制存在延迟**。

5. **权限与审批缺乏可解释性**：用户希望知道"为什么这条命令需要审批"（#4386），且 auto→interactive 切换后行为不一致（#4388/#4389）——**AI Agent 操作透明化是可被工程化的需求**。

6. **Shell 模式与原生终端体验割裂**：! 前缀进 Shell 后 Tab 不再补全（#4387）、后台任务完成检测失效（#4385）——开发者期望 CLI 内的"Shell 通道"**遵循终端原生约定**。

---

> 📊 **日报小结**：本期社区动态呈现"**补丁发布 + 多点缺陷爆发**"特征。v1.0.79-6 修复的两个体验问题指向"会话历史不可见"的隐性数据丢失，方向正确；终端渲染、MCP 企业集成、1.0.74 后的会话回归三大问题簇需重点跟踪。开发者对 Copilot CLI 的期许已从"能不能跑"转向"**长期可靠运行 + 企业级兼容**"。

*数据来源：[github.com/github/copilot-cli](https://github.com/github/copilot-cli) · 统计窗口：2026-08-06 至 2026-08-07*

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

<think>The user wants me to generate a Chinese-language community digest for Kimi Code CLI based on the GitHub data provided. Let me analyze the data carefully.

Looking at the data:
- Date: 2026-08-07
- No new releases in past 24 hours
- 8 issues updated in past 24 hours
- 3 PRs updated in past 24 hours

Let me organize the information:

**Issues (8 total)**:
1. #1283 - Memory System feature request - 20 comments, 0 likes
2. #2317 - VSCode Extension Plan mode file path not clickable - 4 comments, 1 like
3. #2591 - StrReplaceFile corrupts undecodable bytes - 3 comments, 0 likes (NEW, just created)
4. #2474 - Interface keeps shaking/re-rendering - 2 comments, 2 likes
5. #621 - WriteFile Invalid path bug - 2 comments, 0 likes (CLOSED)
6. #2147 - Lazy-load MCP tool schemas - 1 comment, 1 like
7. #2593 - VSCode plugin mode switching - 0 comments, 0 likes (NEW)
8. #821 - Security authorization + dependency updates - CLOSED

**PRs (3 total)**:
1. #2595 - fix StrReplaceFile UTF-8 validation - OPEN
2. #2255 - feat Shift+Enter for newlines - CLOSED
3. #2594 - fix preserve non-UTF-8 bytes - OPEN

Key observations:
- There are TWO competing PRs (#2594 and #2595) for the same StrReplaceFile UTF-8 bug (#2591)
- One bug (#2591) has multiple proposed fixes - this is interesting
- Multiple VSCode extension related issues
- Security issue #821 was closed
- Memory system feature has most engagement (20 comments)
- MCP lazy loading is a popular optimization request

Let me prepare the report. I need to note that the data is somewhat sparse (only 8 issues, 3 PRs in 24 hours), so I should be honest about the limited activity and not fabricate trends. The user asked for 10 in each section, but only 8 issues exist - I should mention this naturally or work with what we have.

Actually, looking again at the instructions: "挑选 10 个最值得关注的 Issue" - since there are only 8 issues updated, I should work with all of them rather than fabricating.

Same for PRs - only 3 updated, I'll work with all 3.

Let me draft the report now:

Important bug #2591 (StrReplaceFile UTF-8 corruption) is attracting immediate PR attention from two different authors (#2594 and #2595) - this is a notable community response pattern.

Issue #1283 (Memory System) has 20 comments - clearly a hot community topic.

Issue #821 security report was closed - good news.

Let me write the report in Chinese with technical depth appropriate for developers.</think>

# Kimi Code CLI 社区动态日报

**日期**: 2026-08-07  
**数据来源**: github.com/MoonshotAI/kimi-cli

---

## 今日速览

今日最值得关注的事件是 **`StrReplaceFile` 的 UTF-8 字节损坏 Bug（#2591）获得了社区的即时响应** —— 在 bug 被报告的同一日，就有两位开发者分别提交了 PR #2594（保留原始字节）和 PR #2595（拒绝编辑非 UTF-8 文件）两种修复方案，呈现罕见的并行修复局面。此外，长期高热度的"持久化记忆系统"需求（#1283）和"VSCode 插件面板模式切换"等 IDE 体验优化继续获得社区关注，运营节奏平稳。

---

## 版本发布

⚠️ 过去 24 小时内无新版本发布。建议关注后续 PR #2594 / #2595 合并后的版本号更新。

---

## 社区热点 Issues

过去 24 小时共有 **8 条** Issue 更新（总量较少，以下覆盖全部活跃条目）：

| # | 标题 | 状态 | 互动 | 重要性 |
|---|------|------|------|--------|
| [#1283](https://github.com/MoonshotAI/kimi-cli/issues/1283) | **Feature Request: Memory System - 跨会话持久化上下文** | OPEN | 💬 20 / 👍 0 | ⭐⭐⭐⭐⭐ |
| [#2591](https://github.com/MoonshotAI/kimi-cli/issues/2591) | **StrReplaceFile 损坏编辑区外的非 UTF-8 字节** | OPEN | 💬 3 / 👍 0 | ⭐⭐⭐⭐⭐ |
| [#2474](https://github.com/MoonshotAI/kimi-cli/issues/2474) | CLI 界面持续抖动 / 莫名重渲整段对话 | OPEN | 💬 2 / 👍 2 | ⭐⭐⭐⭐ |
| [#2317](https://github.com/MoonshotAI/kimi-cli/issues/2317) | VSCode 插件 Plan 模式文件路径不可点击 | OPEN | 💬 4 / 👍 1 | ⭐⭐⭐ |
| [#2147](https://github.com/MoonshotAI/kimi-cli/issues/2147) | **懒加载 MCP 工具 schema，节省上下文预算** | OPEN | 💬 1 / 👍 1 | ⭐⭐⭐⭐ |
| [#2593](https://github.com/MoonshotAI/kimi-cli/issues/2593) | VSCode 插件快捷切换 auto/yolo/manual 模式 + 状态栏显示 5h 配额 | OPEN | 💬 0 / 👍 0 | ⭐⭐⭐ |
| [#621](https://github.com/MoonshotAI/kimi-cli/issues/621) | 首次 `WriteFile` 报 `Invalid path` | **CLOSED** | 💬 2 | ✅ 已关闭 |
| [#821](https://github.com/MoonshotAI/kimi-cli/issues/821) | [安全] 缺少鉴权检查 + 依赖 CVE | **CLOSED** | 💬 0 | ✅ 已关闭 |

**重点解读：**

- **#1283 Memory System**：累计 20 条评论，是近期讨论最密集的功能请求，反映出社区对"AI 记住项目惯例/用户偏好"这一长上下文能力的强烈渴望，是产品下一阶段的核心竞争点。
- **#2591 StrReplaceFile 字节损坏**：这是一个潜在的数据丢失型 bug——`StrReplaceFile` 用 `errors="replace"` 解码整个文件，导致**编辑区域之外**的非法 UTF-8 字节被替换成 U+FFFD (`EF BF BD`) 永久写入磁盘。严重程度高，建议所有用户关注。
- **#2474 界面抖动**：已有 2 个 👍，影响终端体验的高频痛点。
- **#621 / #821 关闭**：早期版本的路径处理 Bug 和安全审计报告均已关闭，社区治理动作到位。

---

## 重要 PR 进展

过去 24 小时共有 **3 条** PR 更新：

### 🚧 并行修复：`StrReplaceFile` UTF-8 问题

| # | 标题 | 作者 | 状态 | 说明 |
|---|------|------|------|------|
| [#2594](https://github.com/MoonshotAI/kimi-cli/pull/2594) | **fix(tools): preserve non-UTF-8 bytes in StrReplaceFile edits** | @686f6c61 | OPEN | 将 `old`/`new` 作为 UTF-8 字节子串在原始 bytes 上匹配，**保留**编辑范围外的非 UTF-8 字节，更彻底、对二进制安全 |
| [#2595](https://github.com/MoonshotAI/kimi-cli/pull/2595) | **fix(StrReplaceFile): refuse to edit files that are not valid UTF-8** | @shoemoney | OPEN | 改为**拒绝编辑**任何非法 UTF-8 文件，行为更保守、避免误处理 |

> ⚠️ **维护者注意**：两条 PR 针对同一 Bug（#2591）提出了不同策略，建议明确取舍——选择 #2594 的方案更贴合 Agent 编辑场景的容错需求，但需要更多测试；#2595 的"快速失败"策略实现更轻量。建议尽快选定一条并通知另一作者避免重复劳动。

### ✅ 已合并的功能增强

| # | 标题 | 作者 | 状态 | 说明 |
|---|------|------|------|------|
| [#2255](https://github.com/MoonshotAI/kimi-cli/pull/2255) | **feat(shell): support Shift+Enter for inserting newlines** | @donbeave | **CLOSED** | 在交互式 prompt 中增加 `Shift+Enter` 换行快捷键，补充现有的 `Ctrl-J` 和 `Alt-Enter`，降低从 IDE/IM 习惯迁移的心智成本 |

---

## 功能需求趋势

从近期 Issue 提炼的社区诉求方向（按热度排序）：

### 1. 🧠 跨会话记忆与上下文持久化
**#1283** 是当前讨论最强的功能请求。建议优先支持：
- 自动记忆：AI 自行整理项目笔记
- 手动记忆：用户通过配置注入偏好
- 与 `.kimi/` 目录、AGENTS.md 等现有约定结合

### 2. 🪟 VSCode 插件体验全面升级
三类高频反馈集中指向 IDE 集成短板：
- **#2317** Plan 模式文件路径不可点击 → 需超链接渲染
- **#2593** 缺少模式切换（auto / yolo / manual）+ 配额可视化的状态栏
- 此外历史 Issue 中还有大量关于 Webview 渲染、内容对比、多文件选择的需求

### 3. ⚡ 上下文工程与性能优化
- **#2147** Lazy-load MCP tool schemas 暴露的核心问题是：**多个 MCP server 时，工具 schema 占用大量初始 token 预算**，影响首轮交互质量。这是 Agent 工程化的共性痛点。

### 4. 🖥️ 终端 UI 稳定性
- **#2474** 的"渲染抖动 / 重绘整段对话"反映 TUI 框架在长对话下的状态管理压力。

### 5. 🔒 安全加固
- **#821**（已关闭）说明官方对鉴权缺陷和依赖 CVE 已有响应通道，但建议官方定期公开安全审计摘要以增强信任。

---

## 开发者关注点

基于活跃 Issue 与 PR 的反馈摘要：

- **🛠️ Agent 文件操作可靠性**：从 #2591 衍生出的两条并行 PR 显示，社区对"工具调用不能破坏用户文件"这一底线要求极为敏感。开发者期待更稳健的二进制安全处理，而非 silent corruption。
- **🎯 与 IDE 操作习惯对齐**：#2593 与 #2255 的共同信号是——开发者习惯于 IDE 中的 `Shift+Enter`、状态栏可视化等交互方式，希望 CLI/插件能"无缝迁移"。
- **💰 成本意识增强**：#2147 折射出开发者开始关注 token 预算分配，**懒加载、摘要化、按需注入**将成为新功能的标配设计要求。
- **🌐 国际化协作**：#2593、#621 等 Issue 同时提交中英双语描述，说明项目拥有活跃的国际贡献者群体，CI/模板应继续支持双语 Issue。
- **🤝 响应速度**：bug #2591 当日即获得 2 个 PR 修复，体现了 Moonshot 社区较高的开发者活跃度——但官方维护者需建立**集中 review 并行方案**的机制以避免冲突。

---

*日报生成基于 2026-08-07 过去 24 小时的公开 GitHub 数据。如需查看更长周期的趋势分析，请指明时间窗口。*

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

<think>The user wants me to generate a Chinese daily report based on GitHub data for OpenCode community dynamics as of 2026-08-07. Let me analyze the data carefully and structure the report according to the requested sections.

Let me analyze the key themes:

1. **Major Issues:**
   - "Request blocked by upstream provider" - this is clearly a MAJOR ongoing issue affecting multiple users (issues #38257, #38218, #38195, #38216, #39827, #38323, #38473, #40055, #39215) - all related to OpenCode Go/Zen subscription 401 errors. This has been going since July 22 and is still unresolved as of Aug 6-7.
   - Feature: Session context usage (#6152) - high likes (129), 22 comments
   - Feature: Cross-project session list (#31932) - 15 comments
   - Feature: Clickable links (#1168) - high likes (119), 11 comments
   - Bug: Web interface not auto-refreshing (#40502)
   - Bug: Subscription not effective (#40234)
   - Privacy/policy concerns (#39875) - 44 likes, sensitive
   - Feature: Configurable mid-run prompt delivery (#32157) - 67 likes

2. **PRs:**
   - Many PRs are from `opencode-agent[bot]` and `kitlangton` and `rekram1-node`
   - PR #40922: feat(tui): queue prompts with option enter - matches feature request #32157
   - PR #40929: bound tool output
   - PR #40943: preserve Responses item IDs
   - PR #40965: support streams without finish reasons
   - PR #40981: complete translation coverage
   - PR #40974: preserve macOS app on window close
   - PR #40861: stop storing full patch text in session summary diffs
   - PR #40977: i18n fix for Chinese token translation
   - PR #40979: isolate session MCP tools (ACP)
   - PR #40931: continue subagent sessions

3. **Trends:**
   - Subscription/auth issues with Go/Zen plans (major pain point)
   - Context window management features
   - TUI improvements (session management, prompts)
   - Privacy/policy transparency
   - i18n improvements
   - Provider compatibility (Bedrock, DashScope, OpenAI-compatible)
   - V2 API migration efforts

4. **Developer pain points:**
   - OpenCode Go subscription blocking requests
   - Web interface not refreshing
   - TUI freezes on Linux
   - Windows 10 startup issues
   - Permission rules fail-open behavior

Let me write the report now in Chinese, professional and concise.</think>

# OpenCode 社区动态日报 · 2026-08-07

## 📌 今日速览

今日社区焦点高度集中于**两大主线**：一是 OpenCode Go / Zen 订阅服务自 7 月 22 日起持续爆发的 `401 Request blocked by upstream provider` 故障，仍未得到实质性修复，多个相关 Issue 在过去 24 小时仍在持续活跃；二是 TUI/会话管理类功能进入密集合入期，多个社区高赞需求（队列提示、上下文用量、跨项目会话等）出现对应 PR 落地。隐私政策透明度争议也成为订阅用户讨论的热点。

---

## 🚀 版本发布

过去 24 小时无新版本发布。当前官方版本仍为社区 Issues 中频繁出现的 **v1.18.11 – v1.18.14** 区间。

---

## 🔥 社区热点 Issues（TOP 10）

| # | Issue | 热度 | 为何重要 |
|---|-------|------|----------|
| 1 | [#38257](https://github.com/anomalyco/opencode/issues/38257) OpenCode Go 全模型 401 报错 | 💬44 👍11 | 截至今日仍是讨论量最高的单 Issue，影响全部 Go 订阅用户使用 `/chat/completions`，`/v1/models` 却正常，疑似服务端鉴权/上游路由异常 |
| 2 | [#38218](https://github.com/anomalyco/opencode/issues/38218) All Go models blocked | 💬31 👍13 | 与 #38257 同源问题，进一步确认 Go 订阅用户"全模型不可用"，具有代表性 |
| 3 | [#38195](https://github.com/anomalyco/opencode/issues/38195) 401 AuthError（桌面端 + Hermes 复现） | 💬24 👍17 | 跨平台（Windows + Desktop）复现，免费模型可用，进一步坐实服务端问题，👍 数最高 |
| 4 | [#6152](https://github.com/anomalyco/opencode/issues/6152) [FEATURE] 会话上下文用量面板 | 💬22 👍129 | 类 Claude `/context` 的 TUI 上下文窗口拆解工具，长期高赞需求，反映开发者对**上下文可视化与管控**的强需求 |
| 5 | [#31932](https://github.com/anomalyco/opencode/issues/31932) [FEATURE] 跨项目会话列表/选择器 | 💬15 👍6 | 解决多仓库工作流痛点：`/sessions` 仅限当前项目，跨项目切换体验差 |
| 6 | [#40234](https://github.com/anomalyco/opencode/issues/40234) 订阅 OpenCode Go 后套餐未生效（中文用户） | 💬13 | 国内中文用户典型场景：付款成功但仍提示 `No payment method`，反映**订阅链路与计费侧稳定性问题** |
| 7 | [#14332](https://github.com/anomalyco/opencode/issues/14332) Bedrock Opus 4.6 compaction 失败 | 💬13 👍8 | `thinking`/`redacted_thinking` 块被修改导致报错，体现**多 provider 兼容性**仍是工程难点 |
| 8 | [#39875](https://github.com/anomalyco/opencode/issues/39875) [FEATURE] 恢复 Go 隐私文案 + 增加遥测/留存说明 | 💬6 👍44 | 👍 数极高，订阅用户要求撤销近期"静默"修改，并完善隐私政策透明度，是**政策与信任**类高敏感议题 |
| 9 | [#32157](https://github.com/anomalyco/opencode/issues/32157) [2.0] queue vs steer vs break 中途提示策略 | 💬5 👍67 | 2.0 路线下"运行时提示交付"语义需求，已获得 67 👍，是核心交互模型设计的关键讨论 |
| 10 | [#1168](https://github.com/anomalyco/opencode/issues/1168) 让链接可点击（Ctrl+Click 打开） | 💬11 👍119 | 长期呼声极高的 UX 改进（👍119），今日仍有更新，是编辑器基础体验的典型缺失 |

> 另需关注：[#40502](https://github.com/anomalyco/opencode/issues/40502) Web 端对话不实时刷新、[#39522](https://github.com/anomalyco/opencode/issues/39522) `opencode web` 无法定位项目、[#11748](https://github.com/anomalyco/opencode/issues/11748) PowerShell 关闭 CLI 后鼠标滚轮乱码——均反映 **Web / 桌面端稳定性**有待加强。

---

## 🛠️ 重要 PR 进展（TOP 10）

| PR | 模块 | 说明 |
|----|------|------|
| [#40922](https://github.com/anomalyco/opencode/pull/40922) feat(tui): queue prompts with option enter | TUI | 落地 [#32157](https://github.com/anomalyco/opencode/issues/32157) 的核心诉求：`Enter` 显式 steer 当前响应，`Alt/Option+Enter` 排队，队列项以紧凑 dock 形式附在输入框，**是 2.0 交互模型的关键 PR** |
| [#40931](https://github.com/anomalyco/opencode/pull/40931) feat(core): continue subagent sessions | Core | 子代理会话支持通过 `sessionID` 复用会话历史，校验父子归属与 agent 身份，前/后台完成事件暴露 `sessionID`，**为多 agent 编排打基础** |
| [#40929](https://github.com/anomalyco/opencode/pull/40929) feat(core): bound tool output | Core | 对顶层本地工具输出按 `tool_output` 配置的字节/行数上限截断，完整内容托管到文件并自动清理 7 天前旧文件，配合 `metadata.truncated` 标记 |
| [#40943](https://github.com/anomalyco/opencode/pull/40943) fix(ai): preserve Responses item IDs | AI | 修复 OpenAI Responses `store=false` 路径下 reasoning / 工具调用 ID 丢失问题，统一 OpenAI / Azure / Open Responses 的客户端历史管理 |
| [#40965](https://github.com/anomalyco/opencode/pull/40965) fix(ai): support streams without finish reasons | AI | 引入 `compatibility.requireFinishReason` 选项，处理上游不发 finish reason 的边缘情况（DashScope 等已发现类似问题） |
| [#40969](https://github.com/anomalyco/opencode/pull/40969) fix(llm): treat empty tool call identity as absent | LLM | 修复阿里云 DashScope 等 OpenAI 兼容端点在续传 delta 中 `id=""` 触发的 `tool call delta is missing id or name` 错误 |
| [#40861](https://github.com/anomalyco/opencode/pull/40861) fix(opencode): stop storing full patch text in session summary diffs | OpenCode | 解决 `SessionSummary.summarize()` 把完整 `Snapshot.diffFull()` patch 文本写入摘要导致的存储/性能问题（关闭 #32005） |
| [#40979](https://github.com/anomalyco/opencode/pull/40979) fix(acp): isolate session MCP tools | ACP | 按会话追踪动态注册的 MCP server 命名空间，避免跨会话/目录串扰（关闭 #40978） |
| [#40981](https://github.com/anomalyco/opencode/pull/40981) fix(app): complete translation coverage | App | 补齐 27 个非英文 locale 中缺失的 8 处会话导出文案，标题栏标签改用 i18n key，并补全"不再显示"按钮翻译 |
| [#40977](https://github.com/anomalyco/opencode/pull/40977) fix(i18n): 词元 vs 令牌（zh） | i18n | 中文 locale 把 "token" 由「令牌」改为「词元」，更正 LLM 语义下的术语习惯（关闭 #40976） |

> 顺带关注：[#40974](https://github.com/anomalyco/opencode/pull/40974)（macOS 关窗后保留应用）、[#40973](https://github.com/anomalyco/opencode/pull/40973)（自定义模型透传 `temperature`）、[#40971](https://github.com/anomalyco/opencode/pull/40971)（TUI 插件暴露 prompt action 命令）、[#40967](https://github.com/anomalyco/opencode/pull/40967)（workspace 环境基础模块）—— 共同勾勒出 **2.0 架构与桌面/TUI 体验并进**的路线图。

---

## 📈 功能需求趋势

从过去 24 小时活跃 Issue 与近期 PR 综合看，社区当前最关注的能力方向集中在以下五条线：

1. **🧠 会话与上下文管理** — 上下文用量可视化（#6152, 👍129）、跨项目会话列表（#31932）、会话搜索（#38973）、按目录统计会话（#37760）。这与"长任务、长上下文"工作流普及直接相关。
2. **⌨️ TUI 交互模型升级** — queue / steer / break 三态提示交付（#32157, 👍67）、链接可点击（#1168, 👍119）、Todo 侧栏与 Linear 集成（#38081）。核心是**向 Claude Code 体验对标**。
3. **🌐 多 Provider 兼容与稳定性** — Bedrock Opus 4.6 思考块（#14332）、DashScope 空 ID delta（#40969 已修）、无 finish_reason 流（#40965 已修）、Anthropic prompt cache / temperature 透传（#40973）。**自托管 / 国产模型用户**生态正在成为重要力量。
4. **🔒 隐私与计费透明度** — Go 隐私文案回滚诉求（#39875, 👍44）、订阅未生效（#40234）。订阅用户对"功能变更 + 条款变更"均高度敏感。
5. **🖥️ 桌面 / Web 端体验补课** — Web 实时刷新（#40502）、`opencode web` 找不到项目（#39522）、Linux TUI 卡死（#35494）、HA 集成挂起（#40242，已关闭）。桌面端仍处于**追赶 CLI 体验**的阶段。

---

## 🧑‍💻 开发者关注点（高频痛点）

- **💥 OpenCode Go / Zen 服务端鉴权故障（持续 16 天）**：从 7/22 起横跨桌面、CLI、Hermes、Codespaces 多端复现，401 仅阻断 `chat/completions` 而 `/v1/models` 正常，**说明问题不在客户端**，但截至今日仍无明确 RCA 或修复时间表，影响订阅体验与社区信任。
- **📉 订阅链路异常**：付费成功邮件已收，仍提示 `No payment method`（#40234），叠加隐私文案争议（#39875），**订阅用户的留存风险上升**。
- **🧱 平台兼容性矩阵薄弱**：Windows 10 + Node 26.7 启动失败（#40957）、PowerShell 鼠标乱码（#11748）、Linux XFCE/X11 TUI 卡死（#35494）。桌面端多平台回归不足是结构性问题。
- **🔐 权限系统语义偏差**：`permission.edit` 规则匹配 worktree-相对路径，导致绝对路径 / `~` 模式静默不命中，且对 `deny` 是 **fail-open**（#40945）——安全相关设计需尽快修正。
- **🧩 上下文与工具输出无界增长**：会话摘要写入完整 patch（#40861 已修）、工具输出无截断（#40929 已修）——长期会话的性能与存储成本是开发者隐性成本。
- **🈶 中文 / i18n 体验**：token 翻译歧义（#40977 已修）等细节表明**中文用户体量**已不容忽视，需要更系统化的 i18n 治理。

---

> 📊 数据窗口：2026-08-06 → 2026-08-07（UTC），仅基于过去 24 小时有更新的 Issue / PR。多数高赞 Feature Request 仍处于 OPEN 状态，建议关注 2.0 路线下 [#32157](https://github.com/anomalyco/opencode/issues/32157) 的逐步落地节奏。

</details>

<details>
<summary><strong>jcode</strong> — <a href="https://github.com/1jehuang/jcode">1jehuang/jcode</a></summary>

<think>The user wants me to generate a Chinese daily report for the jcode community based on GitHub data from 2026-08-07. Let me analyze the data:

1. **Today's Overview**: No new releases in the past 24 hours. There's a significant PR #820 that addresses critical issues (session loss, memory sidecar bug, etc.). Multiple critical/high priority issues remain active.

2. **Version Release**: No new releases, skip this section.

3. **Hot Issues**: I need to pick 10 most important issues. Let me prioritize by:
   - High comment count
   - High priority tags
   - Critical bugs
   - Community relevance

Top issues by comment count:
- #688 (13 comments) - Critical /rewind bug
- #145 (13 comments) - How to get started question
- #809 (12 comments) - CLI flags silently ignored
- #755 (10 comments) - Images break text-only models
- #567 (10 comments) - Unexpected transmission
- #814 (9 comments) - Data loss critical bug
- #816 (9 comments) - /clear leaks swarm plan
- #792 (8 comments) - tmux pane spawning feature
- #817 (8 comments) - Meta Muse provider
- #813 (6 comments) - ACP layer missing features
- #807 (6 comments) - Shift+Tab model cycle bug
- #812 (6 comments) - ACP token usage missing
- #683 (6 comments) - Per-agent model selection
- #531 (5 comments) - Headless browser setup
- #810 (5 comments) - Per-tool model routing
- #819 (5 comments) - Capability-based routing
- #811 (5 comments) - Privacy/security concern

I'll pick the top 10 by importance (critical bugs + high comment + high impact):
1. #814 - Critical data-loss bug (fixed-pending-release)
2. #688 - Critical /rewind bug
3. #809 - CLI flags ignored (high priority impact)
4. #755 - Images break text-only models
5. #816 - /clear leaks swarm plan
6. #792 - tmux pane spawning (closed, being implemented)
7. #817 - Meta Muse provider support
8. #567 - Unexpected transmission (Windows)
9. #811 - Privacy/security concern (controversial)
10. #810 or #819 - Model routing features

4. **Important PR**: Only 1 PR (#820), which actually addresses multiple critical issues. I should note this.

5. **Feature Trends**:
- Model routing/selection (per-tool, capability-based, per-agent)
- New provider support (Meta Muse, OpenCode Go)
- ACP protocol enhancements
- Swarm improvements (tmux panes, plan isolation)
- MCP timeouts
- Security/permissions

6. **Developer Concerns**:
- Data loss/session management bugs
- CLI flag handling
- Cross-platform issues (Windows, Linux headless)
- Privacy/transparency concerns
- Documentation/getting started

Let me write this in Chinese now.</think>

# jcode 社区动态日报 · 2026-08-07

## 今日速览

今日社区无新版本发布，但维护者 @1jehuang 提交了关键修复 PR #820，一次性覆盖会话丢失、Claude 内存 Sidecar 模型失效以及空会话检查点破坏数据等多项高危问题。Issues 侧热度集中在"会话/数据可靠性"和"模型路由能力扩展"两条主线：多条 **critical / high** 级别 Bug 被推到 8 月 6 日的讨论高峰，CLI 标志被静默忽略、ACP 层能力缺失、隐私边界争议等议题引发较多讨论。

---

## 版本发布

过去 24 小时无新 Release。关注 #820 合并后可能触发的下一个版本号（推测为 v0.64.3 或 v0.65.0）。

---

## 社区热点 Issues

> 排序按"严重程度 × 社区参与度"综合排序，附 GitHub 链接。

### 1. [#814 数据丢失：关闭会话路径可能清空长会话（已修复待发版）](https://github.com/1jehuang/jcode/issues/814)
**Critical · fixed-pending-release · 9 评论**
`close/clear` 路径用 0 消息的新会话替换并以 `status=Closed` 保存时，`save()` 的 shrink 检测会触发全量快照，覆盖真实会话快照并删除底层文件。作者已在其 fork 中提供修复与测试，**正好被 #820 覆盖**。这是本周最值得关注的 Issue——数据丢失是工具型应用的底线问题。

### 2. [#688 `/rewind n` 总是回到错误位置](https://github.com/1jehuang/jcode/issues/688)
**Critical Bug · high priority · 13 评论**
首次在新会话中使用 `/rewind n`，实际回退到的是目标条目的前一条；`/rewind undo` 可恢复但指定数字无效。涉及对话导航核心语义，交互体验影响显著。

### 3. [#809 CLI 标志 `--provider` 与 `--model` 被服务端静默忽略](https://github.com/1jehuang/jcode/issues/809)
**Bug · needs-info · 12 评论**
在 `jcode`（TUI）与 `jcode run` 中传入 `--provider` / `--model` 没有任何效果，服务端自动检测直接覆盖客户端请求。**这是配置可控性的根基性问题**，对所有需要精确切模型的用户（例如多订阅组合场景）影响极大。

### 4. [#755 图像历史破坏纯文本模型会话（GLM-5.2 等非视觉 provider）](https://github.com/1jehuang/jcode/issues/755)
**Bug · high priority · 10 评论**
截图产生的 `ContentBlock::Image` 持久化进历史后，每轮都会带着图片块重发给 provider，导致非视觉模型直接报错。关联性极强：常切模型的开发者在视觉/非视觉 provider 间来回切时几乎必踩。

### 5. [#816 `/clear` 把旧会话的 Swarm Plan 泄漏到新会话](https://github.com/1jehuang/jcode/issues/816)
**Bug · reproducible · 9 评论**
清屏只清空 transcript / side panel / diagram registry，但 TUI 仍持有旧会话的 `swarm_plan_*`，新会话的 TODO 列表直接显示旧 swarm 计划，常导致永久卡死。属于状态隔离类缺陷。

### 6. [#792 原生 tmux pane 多人同屏多 Agent 视图（已关闭，待合并）](https://github.com/1jehuang/jcode/issues/792)
**Feature · fixed-pending-release · 8 评论**
希望 `swarm spawn` 把 teammate 渲染为与 coordinator 同窗口的 tmux pane，复刻 Claude Code 的体验。该需求已被维护者标记为 fixed-pending-release，是 Swarm 工作流的标志性能力补齐。

### 7. [#817 Meta Muse Provider 支持（分支就绪，PR 受限）](https://github.com/1jehuang/jcode/issues/817)
**Enhancement · needs-decision · 8 评论**
按 Celeris / MiMo 模式为 Meta 新 Model API 添加 OpenAI 兼容接入，目录条目、环境变量、登录流程均已实现。社区对新模型 Provider 接入节奏持续关注。

### 8. [#567 Windows 下意外触发发送（误换行/复制换行）](https://github.com/1jehuang/jcode/issues/567)
**Bug · medium priority · 10 评论**
Windows 上意外回车或剪贴板内含换行时，会被识别为提交键，导致误发/重复发送。平台一致性问题是当前讨论中高频出现的痛点。

### 9. [#811 停止通过 Claude/Codex 配置静默推广 jcode 并修改 dotfile](https://github.com/1jehuang/jcode/issues/811)
**Question · 5 评论 · 引发争议**
`curl ... | bash` 安装脚本在 Linux 上静默改写 `~/.config/niri/config.kdl`（3 个全局快捷键）并向 `~/.claude/settings.json`、`~/.codex/hooks.json` 注入 `SessionStart` Hook 推送桌面通知。**这是隐私与边界信任问题**，不是技术 Bug，但对项目声誉影响不容低估。

### 10. [#819 基于能力（Cap）的模型路由：仅在含图时路由到视觉模型](https://github.com/1jehuang/jcode/issues/819)
**Enhancement · needs-decision · 5 评论**
按输入内容是否含图动态选择视觉 / 纯文本模型，是 #683 静态按角色路由的更细粒度补充。代表社区在"成本/性能优化"方向上的一致诉求。

---

## 重要 PR 进展

过去 24 小时仅 1 条 PR 更新：

### [#820 fix: 防止会话丢失并修复启动生命周期竞态](https://github.com/1jehuang/jcode/pull/820) — @1jehuang
单 PR 多修，覆盖了今日 Issues 列表中的多项核心问题：

| 修复点 | 对应 Issue |
|--------|------------|
| 新 daemon 启动后等待注册再让 SDK `close()` 退出 | #818 |
| 用回归测试覆盖 `servers.json` 延迟发布 | #818 |
| 更新 Claude 内存 Sidecar 到合法的 Haiku 4.5 模型 ID | #798 |
| 拒绝破坏性的空会话 checkpoint，保留字节级一致性 | #814 |

> 该 PR 一次解决 4 个独立 Bug，且其中 #798（Sidecar 模型 ID 失效）与 #814（数据丢失）均为 critical 级。**强烈建议关注合并时间与配套 Release Note。**

---

## 功能需求趋势

从 30 条热门 Issues 中提炼出以下 5 个最受关注的演进方向：

1. **细粒度模型路由** — 同时存在"按工具路由"（#810）、"按能力路由"（#819）、"按 Swarm 角色路由"（#683）三条提案。社区希望把"一个 Provider/Model 走到底"升级为按任务复杂度、输入模态、Agent 角色动态选择，最大化订阅配额利用率。

2. **多 Agent / Swarm UX 升级** — 同屏 tmux pane（#792）、Swarm Plan 状态隔离（#816）、待办提醒降噪（#793）、头无 Linux 浏览器接入（#531）共同指向"让 Swarm 在生产环境真正能用"。

3. **新 Provider 接入与 ACP 协议完善** — Meta Muse（#817）、ACP 层缺模型目录与 token 用量（#812、#813）说明社区希望 jcode 既能接住更多模型供应商，也能在 ACP / IDE 宿主场景下达到 Claude Code 的可观测性。

4. **会话/数据可靠性** — 会话关闭丢数据（#814）、`/rewind` 语义错乱（#688）、OpenCode Go 重启模型数截断（#716）等共同反映持久化层是当前最大短板。

5. **隐私与安装体验边界** — #811 把安装脚本静默改 dotfile 推上风口浪尖；MCP 30s 硬超时（#802）也呼吁提供可配置项。

---

## 开发者关注点

- **数据可恢复性 > 功能丰富度**：本周评论数与优先级最高的几条全部围绕"会话/历史丢失"展开，社区对 Agent 类工具最敏感的并非模型能力，而是会话不丢、状态可恢复。
- **CLI/配置可控性不足**：`--provider` / `--model` 被覆盖（#809）、MCP 超时硬编码（#802）、内存 Sidecar 模型 ID 写死（#798）反映出"配置即代码"的可观测性还有较大差距。
- **跨平台一致性反复被投诉**：Windows 误触发发送（#567）、Linux 无头环境浏览器安装（#531）、Linux IPC daemon 挂死（#703）几乎覆盖了所有平台，是稳定性口碑的关键。
- **多 Agent 工作流的"假可用"问题**：Swarm 看似支持子 Agent，但 Plan 泄漏（#816）、无同屏视图（#792）、todo 提示风暴（#793）说明整体流程尚未闭环，距离"生产可用"还有清晰距离。
- **安装与信任边界成为新的争议焦点**：`curl | bash` 静默修改 dotfile（#811）让一部分用户在合规场景下无法采纳，建议维护者拆分安装层与可选增强（如把 Niri/Claude/Codex Hook 作为显式 opt-in）。

---

*日报基于 2026-08-07 过去 24 小时更新的 50 条 Issues、1 条 PR 整理。*
*数据来源：[github.com/1jehuang/jcode](https://github.com/1jehuang/jcode)*

</details>

<details>
<summary><strong>pi</strong> — <a href="https://github.com/earendil-works/pi">earendil-works/pi</a></summary>

<think>Let me analyze the GitHub data for pi (earendil-works/pi) on 2026-08-07 and generate a comprehensive daily report in Chinese.

Key observations:
1. **Release**: v0.84.0 just released with Fullscreen TUI mode
2. **Issues**: 50 total updated, 30 shown. Many issues are about the new fullscreen TUI mode bugs and improvements
4. **PRs**: 31 total, 20 shown - mix of TUI fixes, new providers (Ollama Cloud, Qwen, Bedrock Mantle), and harness v2 work

Let me organize the content:

**Most important Issues** (by comment count + relevance):
1. #7547 - Windows usage (22 comments, hot topic)
2. #6879 - Auto-compaction bug (12 comments, 15 likes - high engagement)
3. #7128 - System prompt over-encourages bash (10 comments)
4. #4990 - Edits failing (8 comments)
5. #5323 - Vertex GCP metadata (7 comments)
6. #6662 - Mouse select+copy scroll bug (7 comments)
7. #7413 - Copilot GHE.com compaction (7 comments)
8. #6733 - Gemini thought_signature (4 comments)
9. #7703 - Agent.reset() bug (4 comments)
10. #7702 - DeepSeek reasoning_content (4 comments)

**Important PRs**:
1. #7745 - Gemini thought signatures fix
2. #7742 - Ollama Cloud support
3. #7729 - keybinding docs
4. #7733 - multi-click text selection fix
5. #7732 - TUI test runner docs
6. #7686 - Harness factory
7. #7659 - Qwen Token Plan provider
8. #7722 - theme override flag
9. #6216 - Bedrock Mantle provider
10. #7727 - SQLite optimizations

**Feature trends**:
- Fullscreen TUI mode refinement (many related issues)
- New model/provider support (Ollama Cloud, Qwen, Bedrock Mantle, DeepSeek)
- Harness v2 implementation
- SQLite/performance optimizations
- Windows compatibility

**Developer concerns**:
- Fullscreen TUI bugs (line width crashes, copy behavior)
- Cross-platform issues (Windows, Termux, SSH)
- Provider-specific bugs (Copilot, DeepSeek, GLM, Vertex)
- Performance (compaction, X11 leaks, O(n²) parsing)
- System prompt design issues

Let me write the report.</think>

# Pi 社区动态日报 · 2026-08-07

## 📌 今日速览

v0.84.0 正式发布，**全屏 TUI 模式**成为核心新特性，但围绕它的多项交互缺陷（多击选词、超宽行崩溃、复制行为）随即引发密集的 Issue 与 PR。同时，**新 Provider 支持**持续扩展（Ollama Cloud、Qwen Token Plan、Bedrock Mantle），**Harness v2 架构**也在稳步推进，AgentHarness 的恢复、遥测、SQLite 优化等里程碑相继落地。

---

## 🚀 版本发布

### v0.84.0 — 全屏 TUI 模式（Fullscreen TUI mode）

- 支持运行时在普通模式与全屏模式之间切换
- 编辑器与底部状态栏**粘性固定**，会话转录（transcript）独立可滚动
- 引入**可拖拽滚动条**
- 详见 [UI & Display 文档](https://github.com/earendil-works/pi/blob/v0.84.0/packages/coding-agent/docs/settin...)

⚠️ 该版本上线后引发多条 Issues（见下文 #7720、#7725、#7736、#7737、#7746 等），主要集中在交互细节与边界场景。

---

## 🔥 社区热点 Issues

| # | Issue | 评论 | 重点 |
|---|-------|----:|------|
| [#7547](https://github.com/earendil-works/pi/issues/7547) | [Windows] How do you use Pi on windows? What issues are you seeing? | **22** | **热度第一**。维护者 @petrroll 发起的「Windows 使用体验」调研，征集在 Windows 上的运行方式与痛点，为后续优化重点提供依据 |
| [#6879](https://github.com/earendil-works/pi/issues/6879) | auto-compaction 越过 100% 才触发 | **12** (👍15) | **点赞最高**。在 gpt-5.6-sol 长任务中，footer 已超阈值却未触发压缩，直至 API 在 373k token 处拒绝 |
| [#7128](https://github.com/earendil-works/pi/issues/7128) | 新增的 PI_* 系统提示过度鼓励 bash | **10** | 默认系统提示让 Agent 频繁无意义地运行 env 检查命令，影响 token 效率与体验 |
| [#4990](https://github.com/earendil-works/pi/issues/4990) | 编辑工具校验失败（已关闭） | 8 | 升级到新版后 edit 工具失败，提示缺少 `edits` 属性 |
| [#5323](https://github.com/earendil-works/pi/issues/5323) | Vertex + GCP metadata server 支持改进 | 7 | 当前 `is Vertex authed?` 检查是同步 `existsSync`，无法感知 metadata server 动态凭据 |
| [#6662](https://github.com/earendil-works/pi/issues/6662) | TUI 鼠标选择后自动滚到底部（已关闭） | 7 | 在长消息中向上滚动并复制后，视图跳到末尾，影响回看 |
| [#7413](https://github.com/earendil-works/pi/issues/7413) | Copilot GHE.com 企业账号压缩失败（已关闭） | 7 | `/compact` 在 GHE.com 上报 `unknown stamp "prod-cus-01"`，普通对话正常 |
| [#6733](https://github.com/earendil-works/pi/issues/6733) | Gemini thought_signature 在 openai-completions 中丢失（已关闭） | 4 | 经 PR #7745 已修复 |
| [#7703](https://github.com/earendil-works/pi/issues/7703) | Agent.reset() 在运行中产生孤立 transcript（已关闭） | 4 | 运行中调用 reset 导致只剩 assistant 消息的脏状态（PR #7717 修复） |
| [#7702](https://github.com/earendil-works/pi/issues/7702) | DeepSeek 经 opencode zen 网关 400 错误 | 4 | 工具调用多轮对话中需回传 `reasoning_content`，否则触发 400 |

---

## 🛠 重要 PR 进展

| # | PR | 类型 | 说明 |
|---|----|------|------|
| [#7745](https://github.com/earendil-works/pi/pull/7745) | Gemini thought_signature 透传 | fix(ai) | 捕获并回放 `extra_content.google/vertex.thought_signature`，与 OpenRouter 的 `reasoning.encrypted` 并存（关闭 #6733） |
| [#7742](https://github.com/earendil-works/pi/pull/7742) | Ollama Cloud Provider 新增 | feat(ai) | 新增 `ollama-cloud` 内置 provider，通过 `OLLAMA_API_KEY` 鉴权，本地与云端可并存 |
| [#7686](https://github.com/earendil-works/pi/pull/7686) | Harness 工厂可配置化 | feat(coding-agent) | 暴露内部 Harness 构造工厂，保留 caller tools/activation/prompt policy/Harness 选项 |
| [#7710](https://github.com/earendil-works/pi/pull/7710) | 挂起 Harness 操作恢复 | feat(agent) | 实现 harness v2 计划中的 R3，可从已有 session 重建 harness |
| [#7659](https://github.com/earendil-works/pi/pull/7659) | Qwen Token Plan 个人版 Provider | feat(ai) | 新增 `qwen-token-plan-individual`，通过国际版 Token Plan endpoint + `QWEN_TOKEN_PLAN_API_KEY` 鉴权 |
| [#6216](https://github.com/earendil-works/pi/pull/6216) | Amazon Bedrock Mantle OpenAI Responses | feat | 通过 OpenAI 官方 Bedrock Provider 接入 Bedrock Mantle |
| [#7727](https://github.com/earendil-works/pi/pull/7727) | SQLite 查询优化 | fix | 分支查询下推 `type`/`cursor`/`limit`，新增 `(session_id, entry_id, branch_id, entry_seq)` 覆盖索引 |
| [#7733](https://github.com/earendil-works/pi/pull/7733) | 多击选词修正 | fix(tui) | 双击不再吞掉首个空白；空白组双击行为合理化 |
| [#7721](https://github.com/earendil-works/pi/pull/7721) | 全屏复制去除冗余换行 | fix(tui) | 记录行归属关系，复制时不再因软换行插入 `\n` |
| [#7718](https://github.com/earendil-works/pi/pull/7718) | 内容驱动重绘保留 scrollback | fix(tui) | 流式 markdown 重排时不再清空滚动区历史 |
| [#7717](https://github.com/earendil-works/pi/pull/7717) | 运行中拒绝 reset | fix(agent) | Agent.reset() 在活跃运行期间被拒绝，等待 in-flight 响应结束 |
| [#7715](https://github.com/earendil-works/pi/pull/7715) | blocked 工具调用支持 terminate 提示 | feat(agent) | `beforeToolCall` 与 `tool_call` 事件可携带 `terminate: true`（对应 #5998） |

> 注：#7729（keybinding 文档校准）、#7685（bunfig autoload 修复）、#7681（AGENTS.override.md 支持）等亦在合并/审阅流程中。

---

## 📈 功能需求趋势

1. **全屏 TUI 交互打磨** 🔝
   围绕 v0.84.0 的新模式出现密集反馈：双击选词边界（`/`、`-`）、超宽行崩溃、复制行为、滚动条交互、页面滚动键位等。

2. **新模型 / Provider 支持扩张**
   Ollama Cloud、Qwen Token Plan、Bedrock Mantle、DeepSeek via opencode zen、Gemini thought signature —— 显示出 Pi 在「多模型兼容性」上的投入持续加大。

3. **Harness v2 架构演进**
   工厂化构造、Session 恢复、遥测、流式 assistant + config，构成核心路线图（见 `packages/agent/docs/harness-v2.md`）。

4. **SQLite 会话存储性能优化**
   分支查询下推、覆盖索引等工程性改进正在系统化推进。

5. **系统提示与 Token 效率**
   PI_* 环境变量提示被认为过度诱导 bash 调用，反映出社区对「默认 system prompt 行为边界」的敏感。

6. **跨平台体验**
   Windows 调研正式启动；Termux、SSH 无头场景的 OAuth 流程也是新增关注点。

---

## 👨‍💻 开发者关注点

| 痛点 / 需求 | 代表 Issue |
|------------|------------|
| **TUI 交互边界**：双击选词误吞空白、整行崩溃而非截断、复制产生多余换行、滚动条体验 | #7736、#7737、#7746、#7721、#7733 |
| **上下文压缩策略**：auto-compaction 阈值未生效，导致超限后被 API 拒绝 | #6879 |
| **企业/私有部署兼容性**：Copilot GHE.com、Vertex metadata server、GLM Fireworks prompt cache | #7413、#5323、#7676 |
| **跨平台**：Windows 装机体验、Termux 多行粘贴、SSH 下的 OAuth 回调 | #7547、#7321、#7691 |
| **Agent 状态机健壮性**：运行中 reset 导致 transcript 脏状态 | #7703 / #7717 |
| **默认系统提示的「隐性代价」**：鼓励不必要的 bash 调用，浪费 token | #7128 |
| **性能 / 资源泄漏**：X11 连接泄漏（8 天 182 连接）、工具调用 O(n²) 重解析 | #7600、#7698 |
| **文档一致性**：环境变量、AI_AGENT 标记、keybinding 与 `/hotkeys` 实际行为对齐 | #7747、#7729 |

---

*日报基于 github.com/earendil-works/pi 在 2026-08-06 ~ 2026-08-07 期间更新的 1 个 Release、50 条 Issues、31 条 PR 整理。*

</details>

---
*本日报由 [Big Model Radar](https://github.com/96loveslife/big_model_radar) 自动生成。*
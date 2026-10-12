# AI CLI 工具社区动态日报 2026-10-12

> 生成时间: 2026-10-12 05:21 UTC | 覆盖工具: 8 个

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

<think>
The user wants me to generate a horizontal comparison analysis report based on the daily dynamics of various AI CLI tools. Let me analyze the data carefully and structure it according to the 6 required sections.

Let me extract key data points from each tool's report:

**Claude Code:**
- 50 issues updated, 1 PR updated
- No new release
- Top issue: #22543 (Cowork 10GB VM bundle, 231 likes, 79 comments, oncall)
- Focus: Windows compatibility, model routing/cost, Agent Skills standardization, data loss risk (#101188)

**OpenAI Codex:**
- 50 issues updated, 11 PRs (all from copyberry[bot])
- No new release
- Top issue: #52407 (Windows CUA MXC launcher, 58 comments)
- Focus: Windows desktop stability, app-server protocol, subagent/dots, TUI

**Gemini CLI:**
- 50 issues updated, 19 PRs updated
- 1 release: v0.65.0-nightly.20261012.g9b6e0265d
- Top issue: #22323 (Subagent MAX_TURNS reports GOAL success, P1)
- Focus: Subagent observability, browser subagent, security hardening, AST code reading

**GitHub Copilot CLI:**
- 26 issues updated, 0 PRs
- No new release
- Top issue: #1953 (Context window visibility, 11 thumbs up)
- Focus: ACP protocol, Windows compatibility, MCP OAuth

**Kimi Code CLI:**
- No activity

**OpenCode:**
- 50 issues updated, 50 PRs updated
- No new release
- Top issue: #6111 (Windows SSH clipboard, 4 likes, 10 comments)
- Focus: V1→V2 migration, Go subscription, TUI enhancements

**jcode:**
- 25 issues updated, 29 PRs
- 1 release: v0.95.0
- Top issue: #1176 (HIGH security, MCP .mcp.json arbitrary command execution)
- Focus: CI/master red, security, MCP

**pi:**
- 40 issues updated, 6 PRs
- No new release
- Top issue: #4945 (openai-codex Connection Reliability, 82 comments, 35 likes)
- Focus: openai-codex reliability, Anthropic integration, Compaction, local models

Now let me build the comparison:

**1. 生态全景 (3-5 sentences):**
- AI CLI 工具已从单一"代码生成器"演化为多代理协作平台
- 各工具处于不同阶段：成熟商业产品（Claude Code、Copilot CLI）vs 快速迭代开源项目（Gemini CLI、OpenCode、jcode）
- 跨平台稳定性（尤其是 Windows）成为普遍痛点
- 协议层（MCP、ACP、app-server）正在成为差异化竞争点
- 安全、可观测性、成本控制是当前三大行业级关注

**2. 各工具活跃度对比:**
表格

**3. 共同关注的功能方向:**
- Windows 平台兼容性：Claude Code, Codex, Copilot CLI, OpenCode, jcode
- 子代理/多代理工作流：Gemini CLI, Codex, Copilot CLI
- 上下文管理与可视化：Claude Code, Copilot CLI, pi
- MCP 协议：所有
- TUI/CLI 体验：所有
- 数据安全：Claude Code, jcode
- 成本/计费透明：Claude Code, Copilot CLI
- 模型路由：Claude Code, jcode
- 离线/CI 场景：OpenCode, jcode

**4. 差异化定位:**
- Claude Code: 商业旗舰, 桌面端 Cowork, Max 订阅
- OpenAI Codex: 商业 + 多代理 Dots, app-server 协议
- Gemini CLI: 纯开源, Gemini 3 模型深度耦合, subagent 体系
- Copilot CLI: GitHub 生态绑定, ACP 协议, 企业策略
- Kimi Code CLI: 国内/中文 (无活动)
- OpenCode: 高度可扩展, TUI/桌面多端, V2 迁移
- jcode: Rust, 注重安全和 CI 质量, OpenCode 兼容
- pi: Anthropic/Codex 兼容, 长会话 compaction, 本地模型支持

**5. 社区热度与成熟度:**
- 高活跃度: Gemini CLI, OpenCode, Claude Code, Codex
- 中等活跃度: Copilot CLI, pi, jcode
- 低/无活动: Kimi Code CLI
- 成熟度判断: Claude Code > Copilot CLI > OpenAI Codex > Gemini CLI > OpenCode > jcode > pi

**6. 趋势信号:**
- 协议化（MCP、ACP、app-server）正在成为新的护城河
- Windows 兼容性是普遍但被低估的工程债
- 子代理可观测性是下一个突破点
- 本地/自托管模型成为差异化方向
- 安全审计成为开源项目"毕业"的标志
- "AI CLI" 已从工具演化为"AI 代理运行时"

Let me write this in Chinese with concise professional tone, with data support.
</think>
# 主流 AI CLI 工具横向对比分析报告

**报告日期**：2026-10-12
**覆盖范围**：Claude Code / OpenAI Codex / Gemini CLI / GitHub Copilot CLI / Kimi Code CLI / OpenCode / jcode / pi

---

## 一、生态全景

AI CLI 工具已从"代码补全器"全面演化为**多代理协作运行时（agent runtime）**，子代理、可观测性、协议层（MCP/ACP/app-server）成为竞争主战场。今日数据呈现三个清晰信号：**一是 Windows 平台兼容性是行业级工程债**（在 5 个工具中均排名前三），**二是商业产品（Claude Code、Codex、Copilot CLI）已进入"桌面/订阅信任度"维护期**，**三是开源项目（Gemini CLI、OpenCode、jcode）正处在"安全审计 → 协议化 → 跨平台一致"的毕业冲刺阶段**。整体社区讨论重心已从"模型能力"转向"基础设施可靠性"。

---

## 二、各工具活跃度对比

| 工具 | Issues (24h) | PRs (24h) | Release | 社区热度锚点 |
|------|-------------|-----------|---------|------------|
| **Claude Code** | 50 | 1 | 无 | #22543（231 👍，oncall 性能 bug） |
| **OpenAI Codex** | 50 | 11 | 无 | #52407（58 评论，Windows CUA 链路） |
| **Gemini CLI** | 50 | 19 | **v0.65.0-nightly** | #22323（P1，子代理沉默失败） |
| **Copilot CLI** | 26 | 0 | 无 | #1953（11 👍，上下文窗口可见性） |
| **Kimi Code CLI** | 0 | 0 | 无 | — （24h 无活动） |
| **OpenCode** | 50 | 50 | 无 | #6111（10 评论，Windows SSH 剪贴板） |
| **jcode** | 25 | 29 | **v0.95.0** | #1176（HIGH 安全漏洞） |
| **pi** | 40 | 6 | 无 | #4945（82 评论 / 35 👍，连接稳定性） |

**观察**：
- **OpenCode** 的 PR 活跃度（50）居首，是当日贡献最密集的项目，但伴随大量 V1→V2 回归
- **Gemini CLI** 保持"高频 Issue + 高频 PR"双热，且 nightly 版本节奏稳定
- **jcode** 虽规模小但 PR/Issue 比例（29/25 ≈ 1.16）最高，呈现"全员高强度修复"
- **Claude Code** 与 **Codex** 处于"高 issue / 低 PR"模式，外部贡献者参与门槛较高

---

## 三、共同关注的功能方向

| 方向 | 涉及工具 | 核心诉求 |
|------|---------|---------|
| **🪟 Windows 平台兼容** | Claude Code / Codex / Copilot CLI / OpenCode / jcode | Git Bash 编码、winget 升级、SSH 剪贴板、捆绑二进制启动、长路径权限 |
| **🔌 协议层（MCP / ACP / app-server）** | 全员 | OAuth 严格性、连接绑定、工具调用合规、版本兼容 |
| **👁️ 上下文与多模态可见性** | Claude Code / Copilot CLI / pi | 上下文窗口 UI、图像上限、prompt-cache 状态 |
| **💰 成本/计费透明度** | Claude Code / Copilot CLI / pi | 模型路由、cache 利用、订阅识别、重复计费 |
| **🧒 子代理/多代理工作流** | Gemini CLI / Codex / Copilot CLI / OpenCode | 终止语义、状态机可见性、跨设备委托 |
| **🖱️ TUI 体验打磨** | 全员 | 剪贴板、语法着色、快捷键、终端闪烁 |
| **🔒 数据安全/审计** | Claude Code / jcode / Gemini CLI | Rewind 数据丢失、MCP 任意命令执行、路径穿越 |
| **🏠 本地/自托管模型** | pi / OpenCode / Gemini CLI | Qwen、llama.cpp、MiMo、Chat-template 适配 |

> **交叉印证**：**Windows 兼容性**与**协议层合规性**是当日出现频次最高的两类议题。

---

## 四、差异化定位分析

| 工具 | 功能侧重 | 目标用户 | 技术路线 |
|------|---------|---------|---------|
| **Claude Code** | 桌面端 Cowork 协作、Max 订阅商业化 | 付费重度用户、企业 | 闭源 + 私有 issue tracker，对外开放低 |
| **OpenAI Codex** | 多代理 Dots、Cloud Tasks、app-server 协议 | IDE 集成开发者、Pro/Enterprise | 半开源，活跃 app-server 生态 |
| **Gemini CLI** | Gemini 3 模型原生能力、subagent 体系 | Google Cloud 用户、开源贡献者 | 全开源，nightly 发布，安全审计周期化 |
| **Copilot CLI** | GitHub 生态绑定、ACP 协议、企业策略 | 企业/团队、GitHub 用户 | 闭源，与编辑器深度集成 |
| **Kimi Code CLI** | 中文场景（推测） | 国内/中文用户 | 24h 无活动，无法判断 |
| **OpenCode** | 多 Provider 兼容、TUI/桌面/Web 三端 | 高级个人开发者、插件作者 | 全开源，可扩展 Plugin/MCP 体系 |
| **jcode** | Rust 实现、安全/CI 严格、OpenCode 兼容 | 安全敏感用户、CI/工业场景 | Rust monorepo，质量门禁严苛 |
| **pi** | Anthropic + Codex 双 Provider、compaction、本地模型 | 重度会话用户、自托管玩家 | 全开源，TUI/扩展体系 |

**路线分化**：
- **闭源商业派**：Claude Code、Codex、Copilot CLI — 重点优化桌面与订阅
- **开源迭代派**：Gemini CLI、OpenCode、jcode、pi — 重点打磨协议与可观测性
- **国产代表**：Kimi Code CLI（静默期）

---

## 五、社区热度与成熟度

### 热度维度（按今日 Issues+PRs+Comments 总量估算）

1. **OpenCode** ≈ **Gemini CLI** > **Claude Code** > **OpenAI Codex** > **pi** > **jcode** > **Copilot CLI** > **Kimi Code CLI**

### 成熟度判断

| 维度 | 商业派（Claude/Codex/Copilot） | 开源派（Gemini/OpenCode/jcode/pi） |
|------|------------------------------|----------------------------------|
| **版本节奏** | 稳定，少 nightly | 高频 nightly/RC |
| **协议标准化** | 自有协议 + 兼容 MCP | MCP 原生 + 自有扩展 |
| **安全审计** | 内部闭环 | 公开 PR 集中修复（Gemini 4 个安全 PR 1 日内 CLOSED） |
| **跨平台一致性** | Windows 仍为短板 | 仍为短板但修复密度更高 |
| **企业就绪度** | 高（订阅/合规） | 中（依赖自托管能力） |

**判断**：
- **进入"质量收敛期"**：Claude Code、Copilot CLI（修复小问题、优化计费透明度）
- **处于"功能爆发期"**：Gemini CLI、OpenCode（subagent 体系、V2 迁移、Provider 互操作）
- **处于"基础夯实期"**：jcode（CI 红色、安全门禁、master 健康度）
- **处于"长尾探索期"**：pi（compaction、本地模型、协议兼容多点开花）

---

## 六、值得关注的趋势信号

### 🚨 信号 1：协议层正在成为新的护城河
- **MCP** 已成事实标准：所有工具均实现 MCP，但 OAuth 严格性、连接绑定的实现差异正在制造新的兼容性问题（Copilot CLI #5082、pi #10274、jcode #1176）
- **ACP**（Agent Client Protocol）成为 IDE/编辑器集成的新接口：Copilot CLI 多条 issue 表明 ACP 模式与 CLI 直连的功能落差
- **app-server**（Codex 私有协议）外溢为生态：11 条 PR 集中收敛 app-server 生命周期事件

> **对开发者的参考**：选择工具时需评估其"协议深度"——只支持 MCP 调用 vs 实现完整 MCP 生命周期，二者的可靠性差距正在拉大。

### 🪟 信号 2：Windows 兼容性是行业级工程债
5 个工具均出现 Windows 相关 issue，覆盖 Git Bash 编码、winget 升级、SSH 剪贴板、捆绑二进制、长路径权限。**这反映"AI CLI 工具的跨平台策略仍以 macOS 为先"**。

> **参考价值**：在 Windows-first 的团队中部署 AI CLI 时，应优先选择"有专门 Windows 维护者"的项目（如 jcode 的 CI 已覆盖 Windows）。

### 👁️ 信号 3：可观测性需求从"日志"升级为"代理轨迹"
- Claude Code #66115（自动 compact）、#101188（Rewind 数据丢失）
- Gemini CLI #22323（subagent 沉默失败）、#22598（轨迹共享）
- pi #10267（重复计费）、#10809（CompactionStatusIndicator）

> **参考价值**：评估 AI CLI 时，"能否事后审计 agent 行为"应成为关键指标，而非仅仅"能否跑起来"。

### 💰 信号 4：成本透明度是商业化产品的护城河
Claude Code 93.8% token 流向 Opus（#27665）、Copilot CLI 订阅识别错误（#98134、#5109）、pi 重复计费（#10267）——**用户对"花了多少钱、花在哪、为什么"的需求已超过"花得便宜"**。

> **参考价值**：在为团队采购 AI CLI 订阅时，优先选择"提供用量/路由/缓存可见性"的方案。

### 🏠 信号 5：本地/自托管模型成为差异化新方向
pi 集中讨论 Qwen3.8、llama.cpp、MiMo，OpenCode 提供多 Provider 透传。**这是对"中心化 API 依赖"风险的市场对冲**。

> **参考价值**：对于数据敏感或网络受限场景，应关注"Provider 抽象层"成熟度，而非单一模型能力。

### 🔒 信号 6：安全审计已成为开源项目"毕业标志"
Gemini CLI 1 日内合并 4 个安全 PR（路径穿越、环境变量、信任边界、glob 越权），jcode 持续维护 CI 警告预算。**安全审计密度正在成为评估开源 AI 工具成熟度的硬指标**。

> **参考价值**：评估开源 AI CLI 时，关注"安全 PR 比例"和"CI 红色历史"。

---

## 总结

> 2026-10-12 的 AI CLI 生态已进入**"基础设施竞争"阶段**：模型能力趋同，差异点集中在**跨平台一致性、协议合规性、可观测性、成本透明度、安全成熟度**五个维度。
>
> **对于技术决策者**：建议从"协议深度 + 跨平台覆盖 + 可观测性"三角评估工具成熟度。
>
> **对于开发者**：建议关注 OpenCode / Gemini CLI / jcode 等高 PR 活跃度项目，这些是学习"协议层、可观测性、Provider 抽象"的最佳实践来源。

---

*报告基于 2026-10-12 过去 24 小时 GitHub 公开数据自动整理，仅供技术参考。*

---

## 各工具详细报告

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills 社区热点

> 数据来源: [anthropics/skills](https://github.com/anthropics/skills)

<think>The user wants me to analyze the Claude Code Skills community data and produce a report. Let me carefully go through the data provided.

First, I notice that the "评论" (comments) field is "undefined" for all PRs - this is interesting data. So I cannot rank by comments. Let me look at other signals like 👍 (also 0), the issue numbers, dates, and content to assess community attention.

For PRs, I should infer attention from:
- Number of recent updates (active PRs)
- Issue linking
- Content significance
- Recency

For Issues, I have actual comment counts:
- #492: 44 comments - SECURITY issue about community skills impersonating official anthropic namespace (huge!)
- #228: 16 comments - Org-wide skill sharing
- #556: 12 comments - run_eval.py bug, 0% trigger rate
- #62: 10 comments - Skills disappearing
- #1329: 9 comments - compact-memory skill proposal
- #202: 8 comments (CLOSED) - skill-creator best practices
- #412: 6 comments (CLOSED) - agent-governance proposal
- #189: 6 comments - duplicate skills between plugins
- #1385: 5 comments - Reasoning Quality Gate Pipeline
- #1487: 4 comments - claude-api eager 156k token injection
- #1394: 4 comments - eval-viewer XSS
- #1390: 4 comments - mcp-builder evaluation bug
- #1383: 4 comments - skill-creator multiple issues
- #1352: 4 comments - run_eval.py parallel workers bug
- #1175: 4 comments (CLOSED) - SharePoint security

Let me identify the most important PRs based on content, security implications, and engagement:

Top PRs by importance:
1. #1742 - mcp-builder fix - critical infrastructure fix
2. #1961 - skill-creator eval viewer security hardening (XSS, DNS rebinding, etc.) - security critical
3. #1980 - webapp-testing avoid shell=True (CWE-78 injection) - security
4. #1977 - algorithmic-art wrapAround() bug fix
5. #1976 - webapp-testing textarea/select fix
6. #1298 - skill-creator trigger evals Windows fix
7. #1681 - skill-creator package_skill.py execution
8. #1792 - docx LibreOffice timeout fix
9. #1730 - dead URLs fix
10. #514 - document-typography skill
11. #1771 - proofcore-contract-auditor (Web3)
12. #1734 - orphaned docx comments
13. #1703 - md2video-audio
14. #1245 - notion-spec-to-implementation & quantitative-resume-auditor
15. #1615 - scnet-hpc
16. #822 - AWT E2E testing
17. #538 - pdf case-sensitivity fix
18. #486 - ODT skill
19. #210 - frontend-design
20. #83 - skill-quality-analyzer and skill-security-analyzer

Let me now structure the report.

For "热门 Skills 排行" (Hot Skills Ranking), I should pick PRs that show high community attention. Since comments are undefined, I'll use judgment based on:
- Security implications (multiple eyeballs)
- Scope of impact (infrastructure-level changes)
- Recent activity

Key candidates:
1. #1961 - skill-creator eval viewer hardening (security)
2. #1980 - webapp-testing shell=True removal (security)
3. #1742 - mcp-builder mcp>=2 support (core infrastructure)
4. #1771 - proofcore-contract-auditor (new domain - Web3)
5. #1245 - Notion & Resume skills (productivity)
6. #1703 - md2video-audio (creative)
7. #514 - document-typography (popular request)
8. #1615 - scnet-hpc (HPC niche)
9. #822 - AWT E2E testing
10. #83 - skill-quality/security-analyzer

For "社区需求趋势" (Community Demand Trends):
- Security concerns dominate (#492, #1394, #1175, #1390, #1976's parallel concerns)
- Trigger evaluation reliability (#556, #1352, #1298, #1394)
- Token/context efficiency (#1487, #202)
- Skill distribution and sharing (#228, #62, #189)
- Quality assurance frameworks (#1385, #83)
- Governance/safety (#412)
- Memory/state management (#1329)

For "高潜力待合并 Skills" (High-potential unmerged Skills):
Focus on PRs that are still open but address important needs:
- #1771 - Web3 smart contract auditor
- #1245 - Notion & Resume
- #1703 - md2video-audio
- #514 - document-typography
- #1615 - scnet-hpc
- #822 - AWT
- #486 - ODT
- #210 - frontend-design improvement
- #83 - quality/security analyzers

For "Skills 生态洞察" (Ecosystem Insight):
Single sentence summary - the dominant theme is **security and trust** in the Skills ecosystem (CWE-78, XSS, command injection, namespace impersonation), combined with **evaluation reliability** concerns.

Let me write this up in Chinese, professional but concise, with GitHub links for each item.</think>

# Claude Code Skills 社区热点报告
**数据周期**：截至 2026-10-12 ｜ 数据源：[anthropics/skills](https://github.com/anthropics/skills)

> 注：本期 PR 评论数（评论字段）均为 `undefined`，下文"热门"维度综合 PR 近期活跃度、安全影响面、相关 Issue 关联度综合判定。

---

## 1. 热门 Skills 排行

| 排名 | Skill / PR | 类型 | 社区焦点 | 状态 |
|---|---|---|---|---|
| 🛡️ 1 | **skill-creator eval viewer 加固** – [PR #1961](https://github.com/anthropics/skills/pull/1961) | 安全修复 | 修补脚本逃逸（script breakout）、DNS Rebinding、跨站 POST、HTML 转义不全等 3 类严重漏洞。直接回应 [#1394](https://github.com/anthropics/skills/issues/1394) 的 XSS 报告 | OPEN |
| 🛡️ 2 | **webapp-testing 弃用 shell=True** – [PR #1980](https://github.com/anthropics/skills/pull/1980) | 安全修复（CWE-78） | 移除 `subprocess.Popen(..., shell=True)` 防止命令注入，agent 侧不可信字符串不再直入系统 shell | OPEN |
| 🔧 3 | **mcp-builder 支持 mcp>=2** – [PR #1742](https://github.com/anthropics/skills/pull/1742) | 核心依赖升级 | `streamablehttp_client` 重命名 + 新增 `http_client` / 自定义 Header 路径，作为 Phase-4 评估管线必修项 | OPEN |
| 🌐 4 | **proofcore-contract-auditor** – [PR #1771](https://github.com/anthropics/skills/pull/1771) | 新 Skill（Web3） | 首次将 Skills 扩展至智能合约静态分析，结合 TON 区块链做零存储 Merkle 存证 | OPEN（草案） |
| 🛠️ 5 | **skill-creator 触发评估修复** – [PR #1298](https://github.com/anthropics/skills/pull/1298) | Bug 修复 | 解决 Windows `select()` 失败、并行探针互相干扰、误把 runtime error 判为负例，关联 [#1352](https://github.com/anthropics/skills/issues/1352) / [#1383](https://github.com/anthropics/skills/issues/1383) | OPEN |
| 🧪 6 | **AWT（AI Watch Tester）** – [PR #822](https://github.com/anthropics/skills/pull/822) | 新 Skill（E2E 测试） | 零代码 E2E、视觉理解 + 浏览器控制，常被作为测试自动化方向的代表性提案 | OPEN |
| 📝 7 | **notion-spec-to-implementation + quantitative-resume-auditor** – [PR #1245](https://github.com/anthropics/skills/pull/1245) | 双新 Skill | 把产品规格直接转 Notion 任务，再加简历量化审核，是 productivity 双拼提案 | OPEN |
| 🎬 8 | **md2video-audio** – [PR #1703](https://github.com/anthropics/skills/pull/1703) | 新 Skill（多媒体） | Markdown → Marp 幻灯片 → MP4 + 拟人化语音旁白，零成本视频化 | OPEN（草案） |

---

## 2. 社区需求趋势（基于 50 条 Issues）

### 🔐 A. 信任与安全是头号议题
- **#492（44 条评论）– 命名空间冒用风险**：社区 Skill 被打包进 `anthropic/` 命名空间，仿冒官方 Skill，破坏信任边界。[链接](https://github.com/anthropics/skills/issues/492)
- **#1394（4）– eval-viewer XSS**：[链接](https://github.com/anthropics/skills/issues/1394)
- **#1175（4）– SharePoint 访问控制写在 SKILL.md 的合规担忧**：[链接](https://github.com/anthropics/skills/issues/1175)
- **#1390（4）– mcp-builder evaluation 静默吃掉真实 MCP 响应**：[链接](https://github.com/anthropics/skills/issues/1390)

### 📊 B. 评估与触发可靠性
- **#556（12）– `claude -p` 触发率 0%**：[链接](https://github.com/anthropics/skills/issues/556)
- **#1352（4）– 并行 worker 错配 Skill UUID**：[链接](https://github.com/anthropics/skills/issues/1352)
- **#1383（4）– 静默 benchmark 失败 + Windows 不兼容**：[链接](https://github.com/anthropics/skills/issues/1383)

### 🪟 C. 分发与体验
- **#228（16）– Claude.ai 组织级 Skill 共享**：[链接](https://github.com/anthropics/skills/issues/228)
- **#189（6）– document-skills / example-skills 重复安装**：[链接](https://github.com/anthropics/skills/issues/189)
- **#62（10）– Skill 丢失与可见性问题**：[链接](https://github.com/anthropics/skills/issues/62)

### 🧠 D. 新方向提案
- **#1385（5）– Reasoning Quality Gate Pipeline（Calibration → Adversarial Review → Delivery Verification）**：[链接](https://github.com/anthropics/skills/issues/1385)
- **#1329（9）– compact-memory（紧凑符号化 agent 持久状态）**：[链接](https://github.com/anthropics/skills/issues/1329)
- **#412（已关闭，6）– agent-governance（Agent 治理与审计）**：[链接](https://github.com/anthropics/skills/issues/412)
- **#202（已关闭，8）– skill-creator 应改为"指令式"而非"文档式"**：[链接](https://github.com/anthropics/skills/issues/202)

### ⚡ E. 上下文效率
- **#1487（4）– `claude-api` 单次注入 156k token 打爆上下文**：[链接](https://github.com/anthropics/skills/issues/1487)

> 趋势总结：社区正在从"做更多 Skill"转向"让 Skill 可信、可评估、可治理"——安全、评估、分发效率并列成为前三痛点。

---

## 3. 高潜力待合并 Skills

按影响力 + 解决真实痛点排序，**最有可能近期落地**：

| PR | Skill | 落地概率信号 |
|---|---|---|
| [#1961](https://github.com/anthropics/skills/pull/1961) | skill-creator eval viewer 加固 | 关联 #1394 直接修复 XSS，合入门槛仅测试 |
| [#1980](https://github.com/anthropics/skills/pull/1980) | webapp-testing 去 shell=True | 安全必修，标签清晰 |
| [#1742](https://github.com/anthropics/skills/pull/1742) | mcp-builder mcp>=2 适配 | 整个 Phase-4 评估管线被卡，强烈阻塞性 |
| [#1298](https://github.com/anthropics/skills/pull/1298) | skill-creator 触发评估隔离 + Win 兼容 | 与 #1352 / #1383 形成"组合修复" |
| [#1681](https://github.com/anthropics/skills/pull/1681) | package_skill.py 直接执行 | 小修复，依赖路径治理 |
| [#1792](https://github.com/anthropics/skills/pull/1792) | docx LibreOffice 超时改判 Error | 与 #1734 同主题，已形成修复簇 |
| [#1730](https://github.com/anthropics/skills/pull/1730) | academy-guide / tool-use 死链替换 | 文档级，低风险快修 |
| [#538](https://github.com/anthropics/skills/pull/538) | pdf 大小写引用修正 | 仅 8 处改名，极易合入 |

**草案级（关注 ≥ 落地不确定）**：
- [#1771](https://github.com/anthropics/skills/pull/1771) proofcore-contract-auditor（Web3 新方向）
- [#1245](https://github.com/anthropics/skills/pull/1245) notion-spec-to-implementation + 简历审计
- [#514](https://github.com/anthropics/skills/pull/514) document-typography（提问最久的"AI 文排版"刚需）
- [#83](https://github.com/anthropics/skills/pull/83) skill-quality-analyzer + skill-security-analyzer（元能力）
- [#822](https://github.com/anthropics/skills/pull/822) AWT E2E 测试
- [#1615](https://github.com/anthropics/skills/pull/1615) scnet-hpc（HPC 场景化）

---

## 4. Skills 生态洞察（一句话）

> **社区诉求已从"扩充 Skill 数量"转入"加固 Skill 信任链"：命名空间冒用、命令注入、XSS、评估静默失败四类风险集中爆发，下一波主线是 Security Hardening + Eval Reliability + Org-wide Distribution 三件套。**

---

### 📌 附录：本期数据观察备注
- 全部 50 条热门 PR 的"评论数"字段均为 `undefined`，疑似 GitHub API 快照缓存延迟或查询字段缺失，本报告以"近期更新 + 安全面 + Issue 关联"作为代理指标。
- Issues 真实评论数 #492 (44) > #228 (16) > #556 (12)，安全/分发/触发可靠性是近半年最热的三大议题。

---

<think>
The user wants me to generate a daily report in Chinese about Claude Code community dynamics based on GitHub data. Let me analyze the data carefully.

Key observations:
- No new releases in the past 24 hours
- 50 issues updated in past 24 hours, top 30 shown
- Only 1 PR updated in past 24 hours
- The data is from 2026-10-12

Let me identify the most important issues:

1. **#22543** - Cowork creates 10GB VM bundle causing severe performance degradation - HIGH PRIORITY, ONCALL, 79 comments, 231 likes - This is a serious performance bug affecting desktop users
2. **#87640** - Fable 5 safeguard false-positives on "Hi" - 32 comments, 21 likes - Model safeguard bug
3. **#16345** - Support .agents/skills/ directory - 31 comments, 58 likes - Important feature request
4. **#66115** - Auto-compact on idle timeout - 18 comments, 21 likes - Cost optimization
5. **#27665** - Intelligent Model Routing (93.8% to Opus) - 14 comments, 24 likes - Model routing
6. **#85856** - Windows Git Bash backslash issue - 11 comments, 8 likes - Windows compatibility
7. **#98134** - Apple Max 20x recognized as Pro - 9 comments, 0 likes
8. **#95580** - Windows computer use WS_EX_TOPMOST - 8 comments, 2 likes
9. **#101173** - iOS Live Activity on Dynamic Island - 7 comments
10. **#48037** - Copying text from terminal includes hard line breaks - 7 comments, 17 likes
11. **#76517** - Mac app bundle lacks NSBluetoothAlwaysUsageDescription - 6 comments
12. **#99130** - Mods off remotely despite docs - 5 comments
13. **#101188** - Rewind feature overwrote files but said it couldn't - 2 comments, 0 likes - DATA LOSS BUG
14. **#99795** - Headless sessions via Task Scheduler deny tool calls - 3 comments
15. **#99277** - Linux GNOME Wayland tiling - 1 comment, 1 like
16. **#100981** - Background daemon environment cross-contamination - 1 comment
17. **#101432** - Model committed behavior change with docs not updated - 1 comment
18. **#101435** - User complaint issue
19. **#96339** - Billing defect
20. **#83062** - $995 billing issue

PR: Only 1 PR (#79150) about code-review README alignment

Now let me categorize:

**功能需求趋势：**
- IDE/桌面集成（#16345, #88176, #98565, #95580, #92337, #94291）
- 模型路由与成本优化（#27665, #66115）
- Windows 兼容性（#85856, #95580, #99795, #98976, #92337, #94291）
- 终端/TUI 改进（#48037, #89318）
- Agent Skills 标准化（#16345）
- Cowork 稳定性（#22543, #76517）
- 安全性/数据保护（#101188, #83062, #96339）

**开发者关注点：**
- 性能与稳定性问题（10GB VM bundle）
- 平台兼容性问题（Windows/Mac/Linux）
- 成本控制（缓存过期、自动压缩）
- 文档与实际行为不一致
- 数据丢失风险
- 权限与安全

Let me write the report in Chinese now.
</think>
# Claude Code 社区动态日报

**日期：2026-10-12**
**数据源：github.com/anthropics/claude-code**

---

## 一、今日速览

今日社区最热议题聚焦于 **#22543（Cowork 功能导致 10GB VM bundle 性能严重下降）**，该 Issue 已被标记为高优先级并进入 oncall 流程，累计 231 个 👍 和 79 条评论，是近 24 小时内最受关注的讨论。围绕 **Windows 平台兼容性**、**模型路由与成本优化**、**Agent Skills 标准支持** 的多条 Issue 持续活跃，开发者对桌面端稳定性与跨平台一致性的诉求明显上升。

---

## 二、版本发布

**无新版本发布。** 过去 24 小时内仓库未发布新的 Release，建议关注上游 main 分支提交与 2.1.296 之后的稳定版本动态。

---

## 三、社区热点 Issues（Top 10）

### 1. 🚨 #22543 — Cowork 创建 10GB VM bundle，性能严重下降
- **优先级**：`bug, high-priority, oncall, performance, area:desktop`
- **社区反应**：79 评论 / 231 👍
- **重要性**：被标记为 oncall，意味着 Anthropic 工程团队已介入。macOS 用户每次使用 Cowork 都会在 `~/Library/Application...` 下累积 VM bundle，导致 Claude Desktop 启动变慢、UI 卡顿、响应迟缓，且单次会话内性能会持续劣化。这是影响所有 Mac 桌面端用户的严重性能回归。
- 🔗 https://github.com/anthropics/claude-code/issues/22543

### 2. ⚠️ #87640 — Fable 5 安全机制对 "Hi" 误报 `reasoning_extraction`
- **标签**：`bug, platform:macos, area:model`
- **社区反应**：32 评论 / 21 👍
- **重要性**：单字问候被分类器错误地标记为提示词注入，暴露了安全模型在边界判定上的粗糙度，影响了用户最基本的交互体验。
- 🔗 https://github.com/anthropics/claude-code/issues/87640

### 3. 🌟 #16345 — 支持标准 `.agents/skills/` 目录加载 Skills
- **标签**：`enhancement, platform:windows, area:tools, area:skills`
- **社区反应**：31 评论 / 58 👍
- **重要性**：随着 AgentSkills.io 标准的建立，社区强烈希望 Claude Code 在 CLI 中原生发现 `.agents/skills/` 而非仅 `.claude/skills/`，实现工具链的可移植性。
- 🔗 https://github.com/anthropics/claude-code/issues/16345

### 4. 💰 #66115 — 闲置超时自动 compact，避免缓存过期成本
- **标签**：`enhancement, area:cost, area:core`
- **社区反应**：18 评论 / 21 👍
- **重要性**：用户长时间离开会话（>5 分钟）会导致 prompt cache 过期，下次回合需重处理全部上下文，造成显著费用。该 Issue 建议在 idle 时自动 compact，是直接降低 Max 订阅者账单的关键改进。
- 🔗 https://github.com/anthropics/claude-code/issues/66115

### 5. 🧠 #27665 — 智能模型路由：93.8% Max 订阅 token 流向 Opus
- **标签**：`area:model`
- **社区反应**：14 评论 / 24 👍
- **重要性**：作者通过 `ccusage` 实测数据指出，Claude Code 无任何自动模型路由逻辑，93.8% 的 token 都被路由到 Opus，已合并 30+ 相关重复 Issue。这对 Max 订阅者来说是核心痛点。
- 🔗 https://github.com/anthropics/claude-code/issues/27665

### 6. 🪟 #85856 — Windows/Git Bash 反斜杠被静默减半（MSVCRT vs MSYS2 编码不匹配）
- **标签**：`bug, platform:windows, area:bash`
- **社区反应**：11 评论 / 8 👍
- **重要性**：所有 Bash 工具调用中的反斜杠在到达 bash 之前数量减半，引用无法规避。这是 Windows 平台上一个长期、隐蔽但影响面极广的 bug。
- 🔗 https://github.com/anthropics/claude-code/issues/85856

### 7. 💸 #98134 — Apple Max 20x 订阅仍被识别为 Pro
- **标签**：`bug, platform:macos, area:auth`
- **社区反应**：9 评论 / 0 👍
- **重要性**：订阅识别问题直接影响用户能否使用高倍率模型，是高价值订阅者的基础功能缺陷。
- 🔗 https://github.com/anthropics/claude-code/issues/98134

### 8. 🪟 #95580 — Windows Computer Use 残留 WS_EX_TOPMOST（窗口置顶无法解除）
- **标签**：`bug, platform:windows, area:desktop`
- **社区反应**：8 评论 / 2 👍
- **重要性**：与 #92337、#94291 构成"Alt+Tab 失灵"系列问题，影响所有 Windows 桌面用户。
- 🔗 https://github.com/anthropics/claude-code/issues/95580

### 9. 📋 #48037 — 从终端复制文本携带硬换行（duplicate）
- **标签**：`duplicate, area:tui`
- **社区反应**：7 评论 / 17 👍
- **重要性**：被标记为重复但依然持续被关注，说明 TUI 文本复制体验问题面广、影响大但迟迟未修复。
- 🔗 https://github.com/anthropics/claude-code/issues/48037

### 10. 🔒 #101188 — Rewind 功能"无法恢复"但仍覆写了约 20 小时编辑（数据丢失）
- **标签**：`bug, has repro, area:core, data-loss`
- **社区反应**：2 评论 / 0 👍
- **重要性**：**这是最严重的数据丢失风险之一**。UI 提示无法回滚，但磁盘上的文件实际已被覆盖，且对话未被回滚。下一个回合还错误地告知用户"已恢复文件"。任何使用 Rewind 功能的用户都可能遭遇。
- 🔗 https://github.com/anthropics/claude-code/issues/101188

---

## 四、重要 PR 进展

过去 24 小时仅 1 条 PR 活跃更新：

### #79150 — docs: align code-review README with the current validation-based command
- **状态**：OPEN
- **重要性**：code-review 命令的 README 描述了已不存在的实现（git blame 流程、0-100 置信度评分 + 80 分阈值），误导用户。该 PR 旨在同步文档与实际命令行为。
- 🔗 https://github.com/anthropics/claude-code/pull/79150

> 📉 整体而言，PR 活跃度偏低，可能与近 24 小时内无新发布、外部贡献周期有关。

---

## 五、功能需求趋势

通过对今日活跃 Issue 的聚类分析，社区关注的功能方向按热度排序：

| 排名 | 方向 | 代表 Issue | 核心诉求 |
|------|------|-----------|---------|
| 1 | **跨平台稳定性** | #22543, #85856, #95580, #92337, #94291, #99277 | Windows/macOS/Linux 桌面端行为一致性与 bug 修复 |
| 2 | **成本与模型路由** | #27665, #66115 | 智能路由避免 Opus 浪费、cache 过期自动 compact |
| 3 | **Agent Skills 标准化** | #16345 | 遵循 agentskills.io 规范，支持 `.agents/skills/` |
| 4 | **桌面端 UI 完善** | #98565, #88176 | Web/Desktop 的 CLAUDE.md、output style、侧边栏过滤 |
| 5 | **Cowork 功能稳定化** | #22543, #76517, #93956 | VM bundle 清理、权限声明、MCP 链路 |
| 6 | **TUI 体验改进** | #48037, #89318 | 复制文本、focus mode 渲染 |
| 7 | **后台/Headless 行为** | #99795, #100650, #100981 | Task Scheduler、Remote Control 下的环境隔离与权限 |

---

## 六、开发者关注点总结

通过分析 Issue 标题、摘要与社区互动，提炼出以下高频痛点：

### 🔥 高频痛点
1. **Windows 是重灾区** — 至少 6 条 Issue 涉及 Windows 平台的命令编码、窗口置顶、Task Scheduler、Git Bash 等问题。Windows 用户的日常使用体验仍落后于 macOS。
2. **数据安全焦虑上升** — #101188 揭示 Rewind 功能的"假失败、真覆写"行为是潜在的灾难性 bug，社区对核心回滚机制的信任度正在受损。
3. **文档与实际行为脱节** — #99130（Mods 默认开关）、#88176（Web 缺基础能力）、#101432（模型改了行为但文档没改）共同指向"文档不可信"的问题。
4. **订阅/计费信任危机** — #98134、#83062、#96339 反映了用户对订阅识别、计费透明度的强烈不满，$995 等极端案例需要官方正式回应。
5. **成本透明度不足** — 多条 Issue 反映出用户对 token 路由、cache 利用率无感知的焦虑，#27665、#66115 的高分印证了这一需求是商业化关键。

### 💡 高频需求
- **更细粒度的成本控制面板**（路由策略、cache 状态可见化）
- **跨平台体验一致性**（尤其是 Windows）
- **可移植的 Skills/Settings 体系**（遵循行业标准）
- **更安全、更可预测的回滚机制**（Rewind、Snapshot）
- **Headless/CI 场景的稳定性**（后台进程、权限传递、daemon 隔离）

---

> 📌 **编辑建议**：近期 Issue 趋势显示，Anthropic 在桌面端（尤其 Windows）与计费/订阅透明度上需要集中投入；数据丢失类 Issue（#101188）建议提升优先级以维护用户信任。

*本日报基于 GitHub 公开数据自动整理，仅供参考。*

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

<think>The user wants me to generate a Chinese daily report about OpenAI Codex community dynamics for 2026-10-12 based on the provided GitHub data. Let me analyze the data carefully and create a structured report.

Key observations from the data:
1. No new releases in the past 24 hours
2. 50 issues updated, top 30 shown with most comments
3. 11 PRs all closed (likely merge or close), all from @copyberry[bot] which seems to be an automated bot

Let me identify the most important issues:
- #52407 - Windows Dots CUA MXC launcher fails (58 comments, 7 likes) - HIGH
- #15777 - Codex sandbox corrupts ACL on AppData (30 comments) - HIGH
- #29797 - Windows helper_unknown_error setup refresh (24 comments, 9 likes) - HIGH
- #51675 - macOS Cloud tasks disappear from sidebar (19 comments) - HIGH
- #49883 - Delegated work stalls (9 comments)
- #16405 - Thread rename SQLite stale (CLOSED, 8 comments) - notable closure
- #30859 - Steered conversation prompts issue (7 comments)
- #52593 - Windows sandbox native realpath EPERM (7 comments)
- #52567 - CLI goal context overflow (6 comments)
- #18122 - Patch approval diff empty (CLOSED, 5 comments)
- #9766 - Shift+Tab mode toggle (CLOSED, 5 comments)
- #44604 - Tool output batch wedging (5 comments)
- #51659 - Browser/CUA always fails (5 comments)
- #46638 - macOS image download error (5 comments)
- #53188 - Browser tools fail HRESULT (5 comments)

PRs all from copyberry[bot] (looks like an automated merge bot or similar):
- #53224 - Windows clipboard text paste
- #53201 - Agents navigation after archive
- #53173 - Restart background servers from TUI
- #53156 - Simplify terminal drawing API
- #53155 - Remote app-server events during shutdown
- #53153 - Subagent navigation shortcuts in help
- #53152 - Selecting and copying TUI turn tips
- #53150 - Restore thread-owned permissions on cold resume
- #53148 - Fix startup draft recovery for Vim Replace
- #53109 - Handle broken pipes in plugin list
- #53049 - Connection-bound reply handles for app-server

Let me now structure the report in Chinese.

The trends I observe:
1. Windows-specific issues dominate - sandbox, AppData ACL, CUA/browser/MXC launcher failures
2. macOS issues - image download, cloud tasks sidebar
3. TUI improvements (many PRs)
4. Tool output/wedging issues with custom providers
5. Subagent/dots/delegation issues
6. Browser use permission issues

The copyberry[bot] appears to be automated merging - all PRs from this bot have 0 likes and are closed quickly, suggesting an automated process.

Let me write the report now.</think>

# OpenAI Codex 社区动态日报
**日期：2026-10-12**

---

## 📌 今日速览

过去 24 小时内 Codex 仓库无新版本发布，但 Windows 桌面端的稳定性问题持续成为社区焦点——多起关于 **CUA/MXC 启动器（HRESULT 0x80070003）**、**Sandbox 权限（ACL 损坏、realpath EPERM）** 以及 **Browser Use 失败**的 Bug 报告同时活跃，单日新增/更新 Issues 达 50 条。与此同时，TUI 与 app-server 周边的小型修复以自动化 Bot 形式集中合入 11 个 PR，显示团队正持续打磨桌面与终端交互细节。

---

## 🚀 版本发布

无新版本发布。

---

## 🔥 社区热点 Issues（Top 10）

| # | Issue | 热度 | 为什么值得关注 |
|---|---|---|---|
| 1 | **[#52407](https://github.com/openai/codex/issues/52407)** Windows Dots: CUA MXC 启动器失败（HRESULT 0x80070003） | 58 评论 / 👍 7 | 今日最高热度 Issue，影响 Windows 11 25H2 + Codex 26.1002 桌面端的 Computer Use 核心链路，已升级为多用户复现 |
| 2 | **[#15777](https://github.com/openai/codex/issues/15777)** Codex Sandbox 安装损坏 AppData 的 ACL | 30 评论 / 👍 2 | 影响 Windows 10 用户的系统级目录权限，老 Issue（3 月创建）持续被追新，说明权限模型在 Windows 上尚未根治 |
| 3 | **[#29797](https://github.com/openai/codex/issues/29797)** Windows desktop app 反复抛出 `helper_unknown_error` | 24 评论 / 👍 9 | 点赞数最高，说明稳定复现且影响工作流，git log / 读取文件等基础操作触发 |
| 4 | **[#51675](https://github.com/openai/codex/issues/51675)** macOS 桌面端：重启后侧栏 Cloud tasks 消失 | 19 评论 / 👍 4 | Pro 用户反馈，影响"云端任务 ↔ 本地视图"的数据一致性问题 |
| 5 | **[#49883](https://github.com/openai/codex/issues/49883)** [Dots][macOS] 委托任务完成后挂起，需反复提醒 | 9 评论 / 👍 1 | 揭示 Dots 子代理工作流的状态机缺陷，影响多 Agent 协作体验 |
| 6 | **[#16405](https://github.com/openai/codex/issues/16405)** Thread 重命名导致 SQLite title 陈旧（已关闭） | 8 评论 / 👍 3 | 暴露 `session_index.jsonl` 与 SQLite 元数据双写不一致问题，关闭意味着已修复，可关注对应 PR |
| 7 | **[#30859](https://github.com/openai/codex/issues/30859)** 压缩后 Steered 已完成项被误认为当前任务 | 7 评论 | 与上下文压缩/子目标交互有关，影响 Pro 20x 重度用户 |
| 8 | **[#52593](https://github.com/openai/codex/issues/52593)** Windows sandbox：`realpath` 返回 EPERM | 7 评论 / 👍 1 | 写入型 workspace 中仍触发权限拒绝，暴露 Windows 沙箱 ACL 配置缺陷 |
| 9 | **[#52567](https://github.com/openai/codex/issues/52567)** CLI goal 上下文溢出 + 恢复失败 | 6 评论 | WebSocket 重试与 resume 协同问题，影响长时间自动化任务 |
| 10 | **[#44604](https://github.com/openai/codex/issues/44604)** 下一次采样早于上一批 tool output，线程被卡死 | 5 评论 | 影响所有 OpenAI 兼容 Provider 的严格 tool pairing，是当前自定义模型接入的最大障碍之一 |

> 其他值得标记的 Windows 浏览器相关 Issue：[#51659](https://github.com/openai/codex/issues/51659)（Statsig 超时）、[#53188](https://github.com/openai/codex/issues/53188)（MXC 启动失败）、[#53031](https://github.com/openai/codex/issues/53031)（Browser Use 已保存拒绝）——三者具有明显的同源症状，可能指向同一个根因。

---

## 🛠 重要 PR 进展（Top 10）

> 今日所有 PR 均由 `copyberry[bot]` 提交并以已合并/已关闭状态快速流转，呈现出**集中式批量合入**的特征。

| PR | 功能 / 修复 |
|---|---|
| **[#53224](https://github.com/openai/codex/pull/53224)** | TUI 支持 Windows 剪贴板文本粘贴快捷键（`Ctrl+V` / `Shift+Insert` 统一处理文本与图片） |
| **[#53201](https://github.com/openai/codex/pull/53201)** | 线程被归档后仍保留 agents 导航入口，避免空 composer 上 Left-arrow 失效 |
| **[#53173](https://github.com/openai/codex/pull/53173)** | TUI 内确认重启 managed background server，无需退出刷新配置 |
| **[#53156](https://github.com/openai/codex/pull/53156)** | 简化自定义终端绘制 API，移除 `autoresize`/`try_draw`，统一在 `draw_with_size` 中渲染 |
| **[#53155](https://github.com/openai/codex/pull/53155)** | 关闭流程中保留 remote app-server 事件接收，确保 WebSocket close 帧正常发送 |
| **[#53153](https://github.com/openai/codex/pull/53153)** | TUI 帮助浮层新增 `Alt+Left`/`Alt+Right` 子代理导航快捷键说明 |
| **[#53152](https://github.com/openai/codex/pull/53152)** | TUI turn tips 文本支持鼠标选中与复制 |
| **[#53150](https://github.com/openai/codex/pull/53150)** | 冷启动恢复时还原 thread-owned 权限，避免被默认配置覆盖 |
| **[#53148](https://github.com/openai/codex/pull/53148)** | 修复 Vim Replace 启动恢复时的字符丢失（如 `abcd → Xbcd` 而非 `Xabcd`） |
| **[#53109](https://github.com/openai/codex/pull/53109)** | `codex plugin list` 优雅处理 broken pipe（如管道到 `head`） |
| **[#53049](https://github.com/openai/codex/pull/53049)** | app-server 请求引入 connection-bound reply handle，避免跨连接复用 request ID 时错发 |

整体看，**TUI 交互细节** 与 **app-server 生命周期** 是当前最密集的两条合入主线。

---

## 📈 功能需求趋势

从全部 50 条 Issue 标签分布提炼，社区当前关注方向如下（按频次排序）：

1. **Windows 桌面端稳定性（最高频）**
   - 涉及标签：`windows-os` × `sandbox` × `app` × `browser` × `computer-use`
   - 主要诉求：修复 MXC/CUA 启动失败、Sandbox ACL/Symlink 兼容、Browser Use 权限持久化

2. **多 Agent / Dots / 子代理工作流**
   - 涉及标签：`subagent` × `delegation` × `dots`
   - 主要诉求：任务完成后的状态机推进、跨设备委托审批、嵌套 agent 队列隔离（[#20191](https://github.com/openai/codex/issues/20191)、[#40932](https://github.com/openai/codex/issues/40932)、[#49883](https://github.com/openai/codex/issues/49883)）

3. **自定义 / OpenAI 兼容 Provider 的工具调用合规**
   - 涉及标签：`custom-model` × `tool-calls` × `app-server`
   - 主要诉求：tool output 严格配对、`<image_resize_notice>` 干扰批处理、reply 句柄与连接绑定（[#44604](https://github.com/openai/codex/issues/44604)、[#52834](https://github.com/openai/codex/issues/52834)、PR #53049）

4. **macOS 桌面 UX 一致性**
   - 涉及标签：`mac` × `app` × `imagen` × `browser`
   - 主要诉求：Cloud tasks 重启后可见性、远程图像下载、Browser Use 权限持久化

5. **TUI/CLI 小型增强**
   - 涉及标签：`TUI` × `enhancement`
   - 主要诉求：快捷键、剪贴板、Vim 模式、macOS Terminal Meta 键（[#39206](https://github.com/openai/codex/issues/39206)）

6. **新模型 & 上下文管理**
   - 涉及标签：`model-behavior` × `context`
   - 出现"GPT-6.1 Sol"等新代号；[#49735](https://github.com/openai/codex/issues/49735) 反映长任务中的 token-budget 提示过早关闭问题

---

## 👨‍💻 开发者关注点（高频痛点）

1. **Windows 沙箱与 CUA 链路是当前最大负面舆情**
   同一症状（MXC 启动失败、Sandbox EPERM、Browser Use 拒绝）在多条 Issue 中以不同版本号复现，开发者希望官方给出**根因公告 + 统一修复里程碑**，而不是逐个版本"修了再坏"。

2. **app-server 与自定义 Provider 的协议边界**
   严格校验 tool output 配对的 OpenAI 兼容服务越来越多，社区呼吁 Codex 在写入批处理 / 插入 `<image_resize_notice>` 时**尊重下游协议**（[#44604](https://github.com/openai/codex/issues/44604)、[#52834](https://github.com/openai/codex/issues/52834)）。

3. **Dots / 子代理的状态机透明性**
   "任务完成后挂起"、"父上下文提示被误当当前任务"、"冷启动恢复时丢失权限"——开发者希望 Codex 提供**更明确的事件/状态日志**，而不是依赖猜测。

4. **TUI 持续打磨，但缺乏对 macOS Terminal 默认键位的尊重**
   Option-as-Meta、剪贴板、Vim 模式都是高频小诉求，PR 已陆续合入，社区期待**整合进一次明确的 TUI 设置面板**。

5. **大型会话日志与磁盘占用**
   [#24682](https://github.com/openai/codex/issues/24682) 报告单次会话 TUI 日志膨胀至 **92GB**，说明默认日志滚动/采样策略需要改进。

6. **Bot 化合入节奏**
   `copyberry[bot]` 集中合入大量小 PR，开发者关注：**是否在 CI 中已具备对应测试覆盖**，避免某次合入回归（如工具按小重组）影响 TUI 主线。

---

*日报基于 GitHub 公开数据生成，仅供参考。如需对某一 Issue 做深度跟踪，可附 Issue 编号进一步检索。*

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

<think>
Let me analyze the GitHub data for Gemini CLI to generate a comprehensive daily report for 2026-10-12.

Key observations:
1. One new release: v0.65.0-nightly.20261012.g9b6e0265d
2. 50 issues updated in past 24 hours, with focus on agent-related issues
3. 19 PRs updated, with a mix of bug fixes, security patches, and dependency updates
4. Heavy focus on subagent behavior, browser agent issues, and security fixes

Let me categorize:

**Top Issues by relevance:**
- #22323: Subagent recovery after MAX_TURNS reported as GOAL success (P1, 13 comments, 2 likes)
- #21409: Generalist agent hangs (P1, 8 comments, 8 likes) - high engagement
- #29600: formatDuration bug (P3, 8 comments)
- #19873: Zero-Dependency OS Sandboxing (P2, 9 comments)
- #21968: Gemini doesn't use skills/sub-agents enough (P2, 7 comments)
- #21432: Improve Agent "Self-Awareness" (P3, 2 comments)
- #24246: 400 error with >128 tools (P2, 3 comments)
- #21432: Agent self-awareness
- #19873: Zero-dep sandboxing
- #22186: get-shit-done output hook causes crash (P1, 3 comments)
- #21983: browser subagent fails in wayland (P1, 4 comments)
- #22267: Browser Agent ignores settings.json (P2, 4 comments)
- #20079: Symlink not recognized as agent (P2, 4 comments)
- #23571: Model creates tmp scripts in random spots (P2, 3 comments)

**Important PRs:**
- #29611: multimodal function response for Gemini 3
- #29621: preserve subagent multimodal tool response parts
- #29523: env and output cap for safety checkers (security, closed)
- #29522: keep glob matches inside search directory (security, closed)
- #29525: never derive workspace trust from request agentSettings (security, closed)
- #29527: 400 error fix (closed)
- #29521: contain checkpoint paths (security, closed)
- #29629: cap pending text height to reduce flicker
- #29626: preserve shared references in JSON serialization
- #29705: fix formatDuration round before unit selection
- #29664: 74 npm dependencies bump

**Trends:**
- Subagent reliability and visibility
- Browser agent improvements
- Security hardening (sandbox, path traversal, env vars)
- AST-aware code reading
- Performance (terminal flicker, streaming)
- Self-awareness of the agent

Let me write the report in Chinese, professional and concise.
</think>
# Gemini CLI 社区动态日报
**日期：2026-10-12**

---

## 📌 今日速览

今日 v0.65.0 nightly 版本如期发布，社区焦点高度集中在 **子代理（subagent）稳定性** 与 **浏览器子代理** 的多个长期 P1/P2 缺陷上；与此同时，PR 侧出现一批集中性安全加固（环境变量净化、路径沙箱、glob 工具越权修复），安全审计进入收尾阶段。

---

## 🚀 版本发布

**v0.65.0-nightly.20261012.g9b6e0265d** 已发布
- 自动化夜间版本，对应 [PR #29714](https://github.com/google-gemini/gemini-cli/pull/29714)
- Diff 区间：v0.65.0-nightly.20261010 → v0.65.0-nightly.20261012
- 完整 Changelog：https://github.com/google-gemini/gemini-cli/compare/v0.65.0-nightly.20261010.g9b6e0265d...v0.65.0-nightly.20261012.g9b6e0265d

---

## 🔥 社区热点 Issues

| # | 标题 | 优先级 | 关注点 |
|---|------|--------|--------|
| [#22323](https://github.com/google-gemini/gemini-cli/issues/22323) | Subagent 触发 MAX_TURNS 后仍上报为 GOAL success，掩盖了中断事实 | **P1** | 13 评论，影响范围广——子代理"假装成功"会误导上层决策，是观测可信度的核心问题 |
| [#21409](https://github.com/google-gemini/gemini-cli/issues/21409) | Generalist agent 频繁 hang 死 | **P1** | 8 👍，单 issue 最高赞，问题具象（创建文件夹即卡住），绕过方法是显式禁用 subagent，开发者吐槽明显 |
| [#29600](https://github.com/google-gemini/gemini-cli/issues/29600) | `formatDuration` 边界处显示错误单位 | P3 | 8 评论，标注 help wanted + effort/small，新人友好的快速 PR 入口 |
| [#19873](https://github.com/google-gemini/gemini-cli/issues/19873) | 利用 Gemini 3 模型的 bash 亲和性做零依赖 OS 沙箱 + 后置意图路由 | **P2** | effort/large 架构性提案，9 评论，承载 Gemini 3 范式重塑 CLI 的方向 |
| [#21968](https://github.com/google-gemini/gemini-cli/issues/21968) | Gemini 几乎不会主动调用 skills 和 sub-agents | **P2** | 7 评论，与 #22323/#21409 互为佐证：子代理"应当被用"但"没被用 / 用错" |
| [#21983](https://github.com/google-gemini/gemini-cli/issues/21983) | Wayland 下 browser subagent 启动失败 | **P1** | 4 评论，Linux 桌面环境覆盖度问题，终止原因仍误报为 GOAL（同 #22323 模式） |
| [#22267](https://github.com/google-gemini/gemini-cli/issues/22267) | Browser Agent 忽略 `settings.json` 覆盖（如 maxTurns） | **P2** | 4 评论，`AgentRegistry` 已正确合并但下游未传递，是经典的配置漂移 |
| [#20079](https://github.com/google-gemini/gemini-cli/issues/20079) | `~/.gemini/agents/*.md` 为 symlink 时不被识别为 agent | **P2** | 4 评论，dotfile 工作流下常见 |
| [#24246](https://github.com/google-gemini/gemini-cli/issues/24246) | 启用 > 128 个 tool 时报 400 | **P2** | 反映模型上下文窗口对工具数量的实际上限，agent 工具生态扩展性瓶颈 |
| [#23571](https://github.com/google-gemini/gemini-cli/issues/23571) | 模型频繁在随机位置创建临时脚本 | **P2** | 与 #19873 的"安全 bash 沙箱"愿景同源，缺基础设施导致体验劣化 |

> 总体看：**子代理层（subagent / browser-agent / generalist）的可观测性、终止语义、配置传播** 是当前最热的"长期债务"。

---

## 🛠 重要 PR 进展

| # | 标题 | 状态/类型 | 价值 |
|---|------|----------|------|
| [#29521](https://github.com/google-gemini/gemini-cli/pull/29521) | 将 legacy checkpoint 路径限制在 checkpoint 目录内 | **CLOSED · 安全** | 修复 `path.join` 吃掉 `..` 段导致任意文件读取的路径穿越 |
| [#29522](https://github.com/google-gemini/gemini-cli/pull/29522) | Glob 工具匹配结果限定在已校验的搜索目录内 | **CLOSED · 安全** | glob 12 下绝对 pattern 绕过 cwd，可读取 `/etc/*.conf` 等 |
| [#29523](https://github.com/google-gemini/gemini-cli/pull/29523) | 第三方 safety checker 使用最小环境 + 输出封顶 | **CLOSED · 安全** | 阻断 `GEMINI_API_KEY` 等敏感变量泄漏 |
| [#29525](https://github.com/google-gemini/gemini-cli/pull/29525) | `createTask` 不再从请求 `agentSettings` 派生 workspace trust | **CLOSED · 安全** | a2a-server 信任边界修复 |
| [#29527](https://github.com/google-gemini/gemini-cli/pull/29527) | 请求内容不以 model turn 结尾（修 `/rewind` 后的 400） | **CLOSED · P1** | 直接修复 #29530，提升回滚流程的健壮性 |
| [#29611](https://github.com/google-gemini/gemini-cli/pull/29611) | 为带点号的 Gemini 3 模型及别名启用 multimodal function response | OPEN | 解决 `gemini-3.8-flash` 等点号模型下多模态 tool 输出被丢弃 |
| [#29621](https://github.com/google-gemini/gemini-cli/pull/29621) | 保留 subagent multimodal tool response parts | OPEN | 与 #29611 配套：让子代理图像结果回传至主模型 |
| [#29626](https://github.com/google-gemini/gemini-cli/pull/29626) | JSON 序列化保留共享引用 | OPEN | 修复 OTel metrics 中合法的"非循环"共享对象被误标为 `[Circular]` |
| [#29629](https://github.com/google-gemini/gemini-cli/pull/29629) | 限制流式 plain text 高度以减少终端闪烁 | OPEN | 终端性能与可读性双改善，与 #21924 路线一致 |
| [#29705](https://github.com/google-gemini/gemini-cli/pull/29705) | `formatDuration` 先四舍五入再选单位 | OPEN | 紧贴 #29600 修复 issue，PR 标注 `help wanted`，典型 good-first-PR |

> **观察**：今日 5 个 CLOSED 的 PR 中有 4 个属于安全加固（`ManoharPaturi` / `venkatchalla06` 主笔），呈现"集中收口安全审计"的态势。

---

## 📈 功能需求趋势

| 方向 | 代表 Issues | 趋势信号 |
|------|------------|----------|
| **AST-aware 代码理解** | [#22745](https://github.com/google-gemini/gemini-cli/issues/22745) · [#22746](https://github.com/google-gemini/gemini-cli/issues/22746) · [#22747](https://github.com/google-gemini/gemini-cli/issues/22747) | 已形成 EPIC + 子任务结构，正在评估 `tilth` / `glyph` / `ast-grep` |
| **子代理可观测性 & 协作** | [#22323](https://github.com/google-gemini/gemini-cli/issues/22323) · [#22598](https://github.com/google-gemini/gemini-cli/issues/22598) · [#21763](https://github.com/google-gemini/gemini-cli/issues/21763) · [#18287](https://github.com/google-gemini/gemini-cli/issues/18287) | 社区从"能不能用"转向"能不能调试 / 评估 / 共享轨迹" |
| **零依赖沙箱 / 安全 bash** | [#19873](https://github.com/google-gemini/gemini-cli/issues/19873) · [#22672](https://github.com/google-gemini/gemini-cli/issues/22672) | 与 Gemini 3 模型 native bash 训练方向耦合 |
| **任务跟踪持久化** | [#21000](https://github.com/google-gemini/gemini-cli/issues/21000) · [#18836](https://github.com/google-gemini/gemini-cli/issues/18836) | 弃用 in-context `WriteToDo`，转向 file-based CRUD |
| **Token 经济的"手术式"读取** | [#19561](https://github.com/google-gemini/gemini-cli/issues/19561) | 单轮 ~36.6k tokens 基线成为性能瓶颈量化参考 |
| **IDE 集成 / 平台** | [#18397](https://github.com/google-gemini/gemini-cli/issues/18397) · [#21924](https://github.com/google-gemini/gemini-cli/issues/21924) · [#29709](https://github.com/google-gemini/gemini-cli/pull/29709) | per-workspace 策略、终端渲染、VSCode 扩展内存管理 |
| **评估体系内部化** | [#23166](https://github.com/google-gemini/gemini-cli/issues/23166) · [#23313](https://github.com/google-gemini/gemini-cli/issues/23313) | 内部 eval "bleed" 问题成为质量门禁阻碍 |

---

## 💬 开发者关注点

1. **子代理的"沉默失败"是最痛的问题** —— [#22323](https://github.com/google-gemini/gemini-cli/issues/22323) 中 `codebase_investigator` 已触顶 MAX_TURNS 仍报 `GOAL/success`，导致上层编排器继续推进错误结论。多个 issue（#21983、#21409、#21763）都指向同一类**终止语义与上下文传递**的缺失。

2. **Linux 桌面兼容性是隐形门槛** —— Wayland 下 browser subagent 失败、终端 resize 闪烁（#21924）等问题集中暴露，#29629 的流式高度封顶 PR 正是为此。

3. **工具数量上限（128）成为规模化瓶颈** —— [#24246](https://github.com/google-gemini/gemini-cli/issues/24246) 显示开发者已开始装配大量自定义工具，agent 侧的 tool 范围裁剪需求被提出。

4. **自定义 skill / subagent 在"自由发挥"模式下几乎不会被调用** —— [#21968](https://github.com/google-gemini/gemini-cli/issues/21968) 反映出 agent "自我意识" 与"工具主动性"的双重短板，#21432 提议提升 agent 对自身 CLI 标志、快捷键、执行方式的认知准确度。

5. **安全审计临近收尾** —— 一日内 4 个安全相关 PR 全部 CLOSED（[#29521](https://github.com/google-gemini/gemini-cli/pull/29521) · [#29522](https://github.com/google-gemini/gemini-cli/pull/29522) · [#29523](https://github.com/google-gemini/gemini-cli/pull/29523) · [#29525](https://github.com/google-gemini/gemini-cli/pull/29525)），覆盖路径穿越、环境变量泄漏、信任边界、glob 越权，社区可重点复测。

6. **新贡献者入口友好** —— `help wanted` + `effort/small` 标签的 [#29600](https://github.com/google-gemini/gemini-cli/issues/29600) / [#29705](https://github.com/google-gemini/gemini-cli/pull/29705) 是当前最适合首次贡献的入口。

---

*日报由 AI 分析师基于 GitHub 公开数据自动生成，仅供参考。如需订阅特定标签或方向的深度周报，可调整数据源过滤条件。*

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

<think>Let me analyze the GitHub data for the Copilot CLI community daily report for 2026-10-12.

Key observations:
1. No new releases in the past 24 hours
2. 26 issues updated in the past 24 hours
3. No PRs updated in the past 24 hours

Let me categorize the issues:

**Recently Closed Issues (resolved):**
- #3755: Reasoning/thinking display garbles streamed text (CLOSED)
- #3573: Bell doesn't work (CLOSED)
- #4469: Orphaned permission.requested event replays (CLOSED)
- #4287: general-purpose subagent uses gpt-5.4-mini (CLOSED)
- #4889: Resume session with session id fails (CLOSED)
- #3167: preToolUse silently dropped (CLOSED)

**Open Issues (recently active):**
- #1953: Always visible context window status (11 thumbs up - high community interest)
- #4126: Right click to copy also pastes
- #3785: Clarify .copilotignore semantics
- #5115: ACP: /rename doesn't rename
- #5049: Computer Use plugin unavailable in ACP mode
- #5094: Windows bundled git cannot be spawned
- #5079: MCP ping protocol issue
- #5118: Atlassian Rovo MCP Server connector fails
- #5117: No way to attach files from Mobile app
- #5116: 400 internal server error on continuation
- #5114: Doesn't continue after session limit
- #5113: Home/End scrolls timeline
- #5112: Support OSC 7501 program status
- #5111: Image cap ignores modelCapabilities
- #5110: Right click copy fails
- #5109: copilot-cli is unusable (enterprise)
- #5096: Windows /upgrade on winget install
- #5095: view refuses files >256 chars
- #5082: MCP OAuth Dataverse rejection
- #5081: Failed to get response, certificate issue

Key trends I can identify:
1. Windows-specific issues are heavily represented (winget, bundled git, long paths)
2. MCP (Model Context Protocol) issues are prominent (OAuth, ping protocol, Atlassian)
3. ACP mode bugs (#5115, #5049, #5117)
4. Terminal rendering/input issues (#4126, #5113, #5112, #5111)
5. Authentication/OAuth issues (#5082, #5079, #5109)
6. Session continuity issues (#5114, #5116, #4889, #4469)
7. Enterprise policy issues (#5109)

Let me now craft the report. Since there are no PRs, I'll note that section is omitted or empty.

Let me select 10 most important issues:
1. #1953 - context window status (highest thumbs up: 11)
2. #5115 - ACP /rename bug (recent)
3. #5049 - Computer Use plugin in ACP
4. #5094 - Windows git spawn breaking
6. #5117 - Mobile app can't attach files
8. #5111 - Image cap issue
9. #5109 - Enterprise unusable
10. #5079 - MCP protocol negotiation
11. #5118 - Atlassian connector fails
12. #5081 - Certificate/network issue
13. #5112 - OSC 7501 feature request
14. #5082 - MCP OAuth Dataverse

Top 10 selection based on:
- Recency
- Community impact (thumbs up)
- Severity (breaking issues)
- Trend representation

Final 10:
1. #1953 - Always visible context window (11 👍, most popular feature request)
2. #5115 - ACP /rename (new, protocol bug)
3. #5049 - Computer Use plugin in ACP (new)
4. #5094 - Windows bundled git spawn (breaking on Windows)
5. #5117 - Mobile app attachment (mobile UX gap)
6. #5111 - Image cap behavior (advanced model feature)
7. #5109 - Enterprise unusable (critical, broad impact)
8. #5118 - Atlassian MCP connector (auth blocker)
9. #5082 - MCP OAuth Dataverse (OAuth spec compliance)
10. #5112 - OSC 7501 program status (terminal integration)
11. #5081 - TLS/cert issue (network)
12. #5079 - MCP ping protocol (protocol negotiation)

Let me write this report in Chinese, professional and concise.</think>

# GitHub Copilot CLI 社区动态日报

**日期：2026-10-12**
**数据来源：[github.com/github/copilot-cli](https://github.com/github/copilot-cli)**

---

## 📌 今日速览

过去 24 小时内 Copilot CLI 仓库未发布新版本，但社区活跃度集中在 **ACP 协议、Windows 平台兼容性**和 **MCP 集成**三大方向。当日新增/更新的 26 条 Issue 中，Windows 安装链路（winget 升级、捆绑 git 启动、长路径权限）问题集中爆发，MCP OAuth 与 Atlassian 等企业级连接器接连报告鉴权失败，ACP 模式下的功能缺失（Computer Use 插件、Mobile 端附件）也成为新的关注焦点。

---

## 🚀 版本发布

无新版本发布（过去 24 小时）。

---

## 🔥 社区热点 Issues

### 1. [#1953](https://github.com/github/copilot-cli/issues/1953) — 始终可见的上下文窗口状态 [OPEN]
**👍 11（今日最高赞）** | area: context-memory
社区呼声最高的特性请求之一。开发者希望在 UI 中实时显示当前上下文使用量，以避免在接近窗口上限时 LLM 性能下降却无任何提示。该 Issue 已开放逾 7 个月，社区持续追加评论，强烈建议优先处理。

### 2. [#5094](https://github.com/github/copilot-cli/issues/5094) — Windows 桌面版 1.1.27+ 捆绑 git 启动失败 [OPEN]
**area: platform-windows** | 评论: 1
从桌面应用 1.1.27 起，Windows 启动时无法 spawn 自带的 `git --version`，返回 `Access is denied (0x80070005)`，导致 **所有项目注册流程中断**。属于回归性严重故障，影响面覆盖所有 Windows 桌面用户。

### 3. [#5109](https://github.com/github/copilot-cli/issues/5109) — copilot-cli 在企业托管策略下不可用 [OPEN]
**area: enterprise** | 评论: 1
受管账户在启动时反复报错 "Managed account policy could not be refreshed…Retrying automatically"，CLI 几乎完全无法使用。这是企业级部署阻塞性问题，对采用 Managed Policy 的客户影响重大。

### 4. [#5118](https://github.com/github/copilot-cli/issues/5118) — Atlassian Rovo MCP 连接器鉴权失败 [OPEN]
**area: triage** | 评论: 0（今日新开）
内置的 Atlassian Rovo MCP 连接器在 auth probe 阶段返回 HTTP 400，后续 Jira/Confluence 工具调用均返回 401，**直接阻塞正在进行的 agent 会话**。

### 5. [#5082](https://github.com/github/copilot-cli/issues/5082) — MCP OAuth：Dataverse 服务器被 RFC 8414 检查拒绝 [OPEN]
**area: authentication, mcp** | 评论: 0
Microsoft Dataverse MCP 服务的 issuer（`login.windows.net`）与发现 URL（`login.microsoftonline.com`）不一致，触发 Copilot CLI 的 RFC 8414 §3.3 校验并拒绝连接，反映出**对现实企业 OAuth 元数据布局的兼容性不足**。

### 6. [#5049](https://github.com/github/copilot-cli/issues/5049) — ACP 模式下 Computer Use 插件不可用 [OPEN]
**area: non-interactive, plugins** | 评论: 1
CLI 端启用了 Computer Use，但 ACP 会话报告插件及其 MCP 服务器不可用（`/computer` 命令被识别但功能缺失）。影响通过 ACP 接入的 IDE/编辑器扩展体验。

### 7. [#5117](https://github.com/github/copilot-cli/issues/5117) — Mobile App 无法在远程 CLI 会话中附加文件/图片 [OPEN]
**area: triage** | 评论: 0（今日新开）
GitHub Mobile 驱动远程 CLI 会话时，composer 没有附件入口，而 desktop/web 会话支持附件。后端能力已存在，**纯属移动端 UI 缺失**。

### 8. [#5111](https://github.com/github/copilot-cli/issues/5111) — 图像上限忽略 `modelCapabilities.limits.vision.max_prompt_images` [OPEN]
**area: context-memory, models** | 评论: 0
运行时硬编码 50 张图片上限，忽略模型能力声明，且每次超过上限的 eviction 会重写 prompt-cache 前缀，影响缓存命中率与多模态工作流效率。

### 9. [#5112](https://github.com/github/copilot-cli/issues/5112) — 在交互式 CLI 中支持 OSC 7501 程序状态报告 [OPEN]
**area: terminal-rendering** | 评论: 0
特性请求：希望在 TUI 中通过 OSC 7501 向兼容终端上报 agent 状态（working/blocked/perms），便于终端侧做状态栏、通知等扩展集成。

### 10. [#5079](https://github.com/github/copilot-cli/issues/5079) — MCP 在新协议上发送 `ping` 且重用轮换的 refresh token [OPEN]
**area: mcp** | 👍: 1
与 `modelcontextprotocol/go-sdk` 协商新协议后仍发送旧协议 `ping`，且复用已轮换的 refresh token，存在 MCP 协议实现层面的合规问题。

---

## 🔧 重要 PR 进展

过去 24 小时无 PR 更新。

---

## 📈 功能需求趋势

从近期 Issue 分布提炼出社区最关注的五大方向：

| 方向 | 代表 Issue | 趋势说明 |
|------|-----------|----------|
| **🪟 Windows 平台兼容** | #5094, #5096, #5095, #5049 | winget 升级路径、捆绑二进制启动、长路径权限问题集中出现，**Windows 仍是质量短板** |
| **🔌 MCP / 企业连接器** | #5118, #5082, #5079, #5081 | MCP OAuth 与各类企业 SaaS（Dataverse、Atlassian）的鉴权/协议兼容性问题增多，反映**生态扩张速度 > 兼容性维护速度** |
| **🤖 ACP 协议体验** | #5115, #5049, #5117 | ACP 模式下的命令行为（`/rename`）、插件可见性（Computer Use）、移动端附件均与 desktop 体验不一致 |
| **📊 上下文与模型能力可视化** | #1953, #5111 | 上下文窗口、图像上限、prompt-cache 等"隐式资源"的可见性与可控性需求持续 |
| **⌨️ TUI 交互细节** | #4126, #5113, #5112, #5110, #5118 | 鼠标复制/粘贴、Home/End 行为、OSC 7501 状态上报——TUI 在功能丰富后,**输入与渲染细节成为新摩擦点** |

---

## 🛠️ 开发者关注点

**1. ACP 模式正在成为"主战场"**
`/rename` 不生效、Computer Use 插件不可用、Mobile 端无附件——开发者把 ACP 视作与 IDE/编辑器集成的官方路径，但当前体验与 CLI 直接运行存在功能落差。

**2. Windows 安装/升级链路是当下最大质量风险**
三条相关 Issue（git spawn、winget alias、long-path view）均直指安装与权限边界。开发者呼吁官方对齐 winget 升级语义，并尊重 Windows 长路径策略。

**3. MCP OAuth 严格性"过度"**
RFC 8414 issuer 校验让部分合法企业 IdP（如 Microsoft Dataverse）被拒；MCP `ping` 在新协议上仍发旧格式。开发者希望 Copilot CLI **在合规与可用性之间提供更细的兼容开关**，而不是硬性拒绝。

**4. 上下文与多模态资源亟需"仪表盘"**
#1953 长期高居点赞榜首，#5111 又暴露了图像上限的隐藏行为。开发者普遍希望**主动管理**上下文窗口、图像数量、prompt-cache 等隐性资源，而非被动踩坑。

**5. 企业托管策略（Managed Policy）路径脆弱**
#5109 表明在受管账户下 CLI 可能直接陷入重试循环，**离线/受限网络 + 严格策略**组合下缺乏降级方案，是企业推广的硬性阻碍。

---

*日报完。数据基于过去 24 小时窗口（2026-10-11 ~ 2026-10-12），由 github.com/github/copilot-cli 公开 Issue/PR 流生成。*

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

<think>
让我仔细分析这些 GitHub 数据，生成一份 2026-10-12 的 OpenCode 社区动态日报。

首先梳理关键信息：

**Releases**: 过去24小时无新版本发布

**Issues（30条精选）**:
1. #6111 [CLOSED] SSH 剪贴板问题 (Windows)
2. #54657 [OPEN] Go 订阅 API 问题
3. #34398 [CLOSED] workspace 文件夹多 repo snapshot
4. #50363 [OPEN] MCP 进程泄漏
5. #31463 [CLOSED] Plugin 导入挂起
6. #54665 [OPEN] ACP 错误
7. #31734 [CLOSED] Windows 包含 ripgrep
8. #54559 [OPEN] web v2 ctrl+backtick 终端切换
9. #54056 [CLOSED] ConnectionRefused
10. #40885 [CLOSED] GPT-5.x max_tokens
11. #32633 [CLOSED] CLI 机器可读信号
12. #54697 [OPEN] 压缩请求暴露工具
13. #54333 [CLOSED] Go 订阅支付被拒
14. #54690 [OPEN] 图像不计入上下文
15. #54683 [OPEN] 空输入工具调用挂起
16. #54645 [OPEN] 认证后空 key
17. #54679 [OPEN] V1到V2会话迁移
18. #42038 [CLOSED] 删除 Mintlify 模板
19. #42058 [CLOSED] 会话选择器无目录指示
20. #41719 [CLOSED] Regression deepseek
21. #54653 [OPEN] AnimatedNumber 无障碍
22. #54441 [CLOSED] 桌面渲染冻结
23. #54438 [CLOSED] 关闭按钮位置
24. #54671 [CLOSED] Go 订阅无 API key
25. #54673 [OPEN] 工作区不可用
26. #54429 [CLOSED] 支付方式选择
27. #41691 [CLOSED] TUI 图像预览
28. #42002 [CLOSED] 预览版 pin 插件版本
29. #41973 [CLOSED] serve v2 路径 401
30. #41959 [CLOSED] 无法使用 opencode

**Pull Requests（20条）**:
1. #54708 fix(app): dead keys via event.code (closes #54559)
2. #54689 fix(desktop): bundle arm64 for windows arm (closes #45875)
3. #54699 [CLOSED] test(core): match codemode error
4. #54707 feat(tui): plugin/MCP tool input readable
5. #54706 feat(tui): color SQL/Dockerfile
6. #54705 feat(tui): color heredocs
7. #54704 feat(tui): color bash commands
8. #54278 fix(config): frontmatter flow indicator
9. #54696 fix(desktop): allow renderer video fullscreen
10. #54695 fix(app): ignore collapsed side-panel tabs
11. #54499 feat: adjustable font size and line height
12. #54694 fix(core): send unknown v1 openai-compatible options
13. #54693 fix(session): keep thinking blocks
14. #54677 feat(tui): git working tree status
15. #54691 docs: add @mrscraper/opencode plugin
16. #53108 fix(core): recover after payload size rejection
17. #49865 [CLOSED] feat: add sysml-lsp builtin
18. #54687 fix(core): drop logged-out wellknown endpoints
19. #52678 [CLOSED] fix(task): report error to parent
20. #54463 feat(tui): open paste placeholder

**重要趋势分析**:
- V1 → V2 迁移相关问题增多
- Go 订阅/支付问题集中爆发
- 桌面应用相关 bug 多
- TUI 功能增强
- Provider 集成问题（OpenAI 兼容、Anthropic thinking）
- MCP/Plugin 相关
- 无障碍（a11y）问题
- 多语言/多平台支持

让我开始撰写日报：
</think>
# OpenCode 社区动态日报
**日期：2026-10-12**

---

## 📌 今日速览

今日 OpenCode 社区进入 V1 → V2 迁移的密集修复期，V2 桌面/Web 的多个回归问题集中曝光（如终端快捷键、认证后空 API key、桌面渲染冻结）。围绕 Go 订阅、ACP 协议与 Provider 兼容性的 issue 在 triaging 阶段明显增多，开发者生态的 TUI 增强（语法着色、可点击占位符）和桌面/平台兼容性（Windows ARM64、dead key、video fullscreen）成为 PR 主流。

---

## 🚀 版本发布

**无新版本发布。** 过去 24 小时内 OpenCode 未推送新的 release 标签。

---

## 🔥 社区热点 Issues

1. **#6111 [CLOSED] Windows SSH 下剪贴板失效** — 4 👍, 10 评论  
   OpenCode 在 Windows + MobaXterm/Windows Terminal 的 SSH 会话中，复制消息后无法粘贴。该问题让 OpenCode 对 Windows SSH 用户几乎不可用，社区影响面广，已关闭但值得跟踪修复。
   🔗 https://github.com/anomalyco/opencode/issues/6111

2. **#54657 [OPEN] Go 订阅无法使用（API invalid）** — 8 评论  
   登录 API 后即使选择 Go 免费模型仍提示 API 无效。属于新一轮 Go 订阅故障的代表性反馈。
   🔗 https://github.com/anomalyco/opencode/issues/54657

3. **#50363 [OPEN] MCP 进程泄漏** — 6 评论  
   本地 `npx` 类型 MCP server 在会话结束后不被终止，长期累积到 PID 1，资源泄漏严重。已在 v2.0.12 desktop 复现。
   🔗 https://github.com/anomalyco/opencode/issues/50363

4. **#34398 [CLOSED] 多 repo 工作区 `/undo` 静默失败** — 7 评论, 2 👍  
   提案 workspace folder 按 repo 跟踪 snapshot，关联 #30065，反映 V2 多仓库协作核心痛点。
   🔗 https://github.com/anomalyco/opencode/issues/34398

5. **#54665 [OPEN] ACP 错误（no such column: project_id）** — 5 评论  
   暴露 V2 SQLite schema 与 ACP 协议层的兼容性问题，属于回归类缺陷。
   🔗 https://github.com/anomalyco/opencode/issues/54665

6. **#31734 [CLOSED] Windows 二进制集成 ripgrep** — 5 👍, 5 评论  
   离线环境下 `Transport error` 失败，社区高呼声的功能请求，已关闭。
   🔗 https://github.com/anomalyco/opencode/issues/31734

7. **#54697 [OPEN] 压缩请求将 session tools 暴露给 summarizer** — 安全/语义关键  
   会话压缩时 summarizer 模型可能执行真实工具调用（写文件、运行命令），仅能靠 plugin hook 兜底，影响所有 V2 用户。
   🔗 https://github.com/anomalyco/opencode/issues/54697

8. **#54683 [OPEN] 空输入工具调用永久挂起 session**  
   模型偶发输出 `shell`/`write` 的空 input，provider 不拒绝直接执行，session 进入 "running" 死锁。
   🔗 https://github.com/anomalyco/opencode/issues/54683

9. **#54690 [OPEN] 图像/base64 不计入上下文导致 400 失败**  
   长会话下图片 payload 未被上下文统计，长会话不再 compact 而是直接 invalid_request_error 崩溃。
   🔗 https://github.com/anomalyco/opencode/issues/54690

10. **#54645 [OPEN] auth login/logout 后 wellknown 端点发送空 key**  
    V2 shared service 的 `{env:VAR}` 替换在 logout 后未更新，残留空 API key 直接发请求。
    🔗 https://github.com/anomalyco/opencode/issues/54645

**次重点关注**：#54679（V1→V2 会话迁移可见性）、#54653（V2 AnimatedNumber 无障碍）、#54441（桌面添加项目渲染冻结）、#54673（工作区不可用）、#54333（Go 订阅双卡被拒）、#40885（GPT-5.x max_tokens 兼容）、#32633（CLI 暴露可重试信号）。

---

## 🛠️ 重要 PR 进展

1. **#54708 [OPEN] fix(app): 通过 event.code 匹配 dead key 键位** — 关闭 #54559  
   修复 macOS US International 等 dead key 布局下 `Ctrl+`` 终端切换失效。
   🔗 https://github.com/anomalyco/opencode/pull/54708

2. **#54689 [OPEN] fix(desktop): Windows ARM64 打包正确二进制** — 关闭 #45875  
   CI 与 Electron builder 双重修复，解决 aarch64-pc-windows-msvc 平台误用 x64 二进制的问题。
   🔗 https://github.com/anomalyco/opencode/pull/54689

3. **#54707 [OPEN] feat(tui): 以可读块展示 plugin/MCP 工具输入** — 关闭 #54703  
   改善 TUI 中调用 plugin 与 MCP server 的可读性（v1 维护分支，作者会后续同步到 v2）。
   🔗 https://github.com/anomalyco/opencode/pull/54707

4. **#54704–#54706 [OPEN] feat(tui): bash / heredoc / SQL / Dockerfile 语法着色套件** — 关闭 #54700–#54702  
   `Nowaker` 连续提交 4 个 PR，给 TUI 工具输出加上分级语法高亮，显著提升开发可读性。
   🔗 https://github.com/anomalyco/opencode/pull/54704 | #54705 | #54706

5. **#54278 [OPEN] fix(config): 保留以非引号 flow indicator 开头的 frontmatter** — 关闭 #54200  
   修复 agent markdown 中 unquoted flow mapping 被错误丢弃的问题，是 v1 拒绝后 rebase 到 v2 的合规修复。
   🔗 https://github.com/anomalyco/opencode/pull/54278

6. **#54696 [OPEN] fix(desktop): 允许 renderer 视频全屏**  
   在 security.ts 的 allowlist 中补充 `media` 权限，解决 `<video controls>` 原生全屏按钮无效。
   🔗 https://github.com/anomalyco/opencode/pull/54696

7. **#54695 [OPEN] fix(app): 关闭 tab 时忽略已折叠的侧边栏 tab**  
   修复 `⌘W` 因侧栏折叠 tab 仍注册 file.close 而无法关闭主会话的回归。
   🔗 https://github.com/anomalyco/opencode/pull/54695

8. **#54499 [OPEN] feat: 桌面与 Web 可调字号/行高** — 关闭 #26269/#16145/#10423  
   将 V1 PR #27684 移植到 OpenCode 2，结束社区长达数年的字号可调需求讨论。
   🔗 https://github.com/anomalyco/opencode/pull/54499

9. **#54694 [OPEN] fix(core): 转发未识别的 v1 openai-compatible 选项** — 关闭 #53677  
   恢复 LiteLLM 用户的 `allowed_openai_params` 等扩展能力，修复 V2 options 迁移导致的回归。
   🔗 https://github.com/anomalyco/opencode/pull/54694

10. **#54693 [OPEN] fix(session): 错误回合重放保留 thinking block** — 关闭 #38620  
    修复 Anthropic extended thinking + 工具使用在中断/失败后重放请求被 400 拒绝。
    🔗 https://github.com/anomalyco/opencode/pull/54693

**次重要 PR**：#54687（wellknown logout 后丢弃空 key，关闭 #54645）、#54677（TUI 会话侧栏显示 Git 状态）、#53108（payload-too-large 触发压缩恢复）、#54463（TUI 可点击 paste placeholder 打开文本）。

---

## 📈 功能需求趋势

从今日活跃的 50 条 Issue 与 50 条 PR 中提炼：

| 方向 | 代表性诉求 | 状态 |
|------|----------|------|
| **V1 → V2 迁移兼容** | 会话可见性、provider options、frontmatter、plugin 版本 pin | 高强度爆发 |
| **桌面/Web 平台稳定性** | Windows ARM64 打包、video fullscreen、dead key、渲染冻结 | 多个修复已并入 |
| **Provider 互操作** | GPT-5.x 移除 max_tokens、Anthropic thinking block、OpenAI-compatible 透传 | 部分已修复 |
| **TUI 可读性** | 语法着色、paste 占位符、Git 状态、plugin/MCP 输入展示 | 集中合并中 |
| **可访问性 (a11y)** | AnimatedNumber 屏幕阅读器、阅读顺序 | 新晋关注点 |
| **离线/受限环境** | Windows 集成 ripgrep、内置 LSP（sysml-lsp） | 已落地 |
| **可观测性/自动化** | CLI 暴露可重试信号、payload 过大恢复 | 多个 PR 待合并 |
| **Go 订阅 / 支付** | API key 获取、Link 选卡、十月起拒付 | 服务侧 + UI 双向问题 |

---

## 🧑‍💻 开发者关注点

1. **V2 迁移引发的连锁回归成为最大焦点**：会话列表、provider 透传、plugin 解析、桌面打包等多处需要并行修复。

2. **Go 订阅问题集中暴露**（#54657、#54333、#54671、#41959）：从订阅无法激活、五小时额度为 0，到支付方式选择、找不到 API key，反映 10 月以来账单/账户体系出现新故障。

3. **MCP / Plugin 生命周期** 不完善：进程泄漏（#50363）、npm 冷缓存挂起（#31463）、工具空输入死锁（#54683）、压缩暴露工具（#54697），都是 AI 工作流中"无人值守"自动化的关键风险。

4. **离线与企业内网场景需求上升**：ripgrep 内置（#31734）、sysml-lsp 内置（#49865）、CLI 可重试信号（#32633），开发者希望 OpenCode 在 CI/离线/工业环境可被自动化集成。

5. **无障碍与桌面 UX 细节** 受到越来越多关注：V2 数字动画的可访问性、关闭按钮位置、侧栏折叠 tab 行为、video 全屏权限，提示社区向"专业 IDE 级 UX"标准看齐。

6. **多语言反馈显著增加**：今日 issues 中出现法文、中文、英文、葡文等多语种描述，OpenCode 用户基础正快速国际化。

---

*本日报基于 2026-10-12 过去 24 小时 GitHub 公开数据自动生成，仅供技术参考。*

</details>

<details>
<summary><strong>jcode</strong> — <a href="https://github.com/1jehuang/jcode">1jehuang/jcode</a></summary>

<think>让我仔细分析这些 GitHub 数据并生成一份 2026-10-12 的 jcode 社区动态日报。

首先，让我梳理关键信息：

**版本发布 (v0.95.0):**
- OpenCode Go 模型（包括 grok-4.7 和 gpt-6-luna）现在通过 Responses API 路由
- Hooks 暴露 turn-end token 使用情况，turn_start/turn_end 现在为一次性 jcode 运行触发
- /agents 支持每个会话的 worker 模型覆盖
- 改进：/resume 可以打开 sco（应该被截断）

**Issues 总览（25条，过去24小时更新）:**

OPEN状态的重要Issue:
1. #1176 - 高度紧急bug：项目级 .mcp.json 无信任提示执行任意命令
2. #1177 - CI 零警告预算仅Linux，2700+核心测试未运行
3. #1376 - Windows PowerShell7 光标跳动问题
4. #1146 - macOS stdin 检测误报
5. #1479 - Named-profile 无认证标志问题
6. #1796 - master 失败：Check formatting 失败
7. #1795 - 9个源文件未被任何模块引用（死代码）
8. #1804 - bash 工具描述未指向 agentgrep/rg
9. #1803 - master 失败：Windows E0596 和 macOS 警告预算超限
10. #1801 - 功能请求：可配置的额外 overlay 文件
11. #1799 - 文档：HOOKS.md 缺少数组 hook 语法
12. #1791 - tui-markdown: LaTeX 回退日志泛滥
13. #1790 - opencode-go: 大负载被拒绝
14. #1124 (CLOSED) - macOS 菜单栏图标黑色
15. #621 (CLOSED) - Mac OS 菜单栏显示异常

**PRs 总览（29条）:**

重要的PR:
1. #1802 - feat(prompt): 可配置的额外 overlay 文件
2. #1800 - docs(hooks): 记录数组 hook 值
3. #1493 - test: 在测试二进制中解析 jcode_dir()
4. #1362 - fix(swarm): 让 stop 静止队列和工作线程 turn
5. #1496 - fix(openrouter-runtime): 发送命名 provider profile headers
6. #1798 (CLOSED) - docs(hooks): 记录数组 hook 值
7. #1356 - fix(test): 限制共享测试环境锁等待
8. #1357 - fix(background): 原子发布任务状态文件
9. #1511 - fix(provider): 快速失败内容过滤块，限制共享池 429 重试，本地 PAN 预检查
10. #1512 - fix(tui-markdown): 仅记录一次 LaTeX 回退原因
11. #1513 - test(tui): 从父命名 provider profile 隔离选择器路由测试
12. #1794 - fix(stdin): 通过常驻线程和包装 shell 检测 macOS stdin 等待
13. #1793 (CLOSED) - fix(menubar): 稳定的 macOS 签名身份和 [menubar] 启用选择退出
14. #1609 (CLOSED) - fix(menubar): 重写 HOME 时保持一个菜单栏助手
15. #1789 (CLOSED) - feat: 路由 OpenCode Go Responses 模型
16. #1785 (CLOSED) - fix(menubar): 绘制流媒体图标为绿色
17. #1494 - fix(gateway): 5次失败猜测后撤销待处理的配对码
19. #1354 - fix(mcp,openrouter): 强制执行过滤的 MCP 子环境并准确报告内容过滤 403
20. #1538 - fix(tui): herdr-webui 面板内的 mermaid/math 窗格安全字形

让我开始构建日报：

**今日速览:**
- v0.95.0 发布：OpenCode Go 模型路由升级、hooks 系统增强、agent worker 模型覆盖
- master 分支持续红色：多个 CI 问题待解决（#1796, #1803）
- 安全相关高度关注：#1176 任意命令执行漏洞持续受到关注

**社区热点 Issues 分析:**

1. **#1176 - 安全漏洞：项目本地 .mcp.json 无信任提示执行任意命令** [HIGH]
   - 重要性：严重安全漏洞，克隆不受信任仓库运行 jcode 即可执行攻击者命令
   - 社区反应：4条评论，0👍，被标记为 high priority 和 needs-decision

2. **#1177 - CI 零警告预算仅 Linux，2700+ 核心测试未运行** [技术债]
   - 重要性：macOS 编译器警告绕过 CI，存在两类缺陷到达 master
   - 社区反应：4条评论

3. **#1796 - master 红色：Check formatting 失败** [紧急]
   - 重要性：CI 在 da09e225d 失败，Quality Guardrails 工作失败
   - 社区反应：2条评论

4. **#1803 - master 失败：Windows E0596 和 macOS 警告预算超限** [紧急]
   - 重要性：5/10 CI 作业失败
   - 社区反应：0条评论（新）

5. **#1795 - 9个源文件未被任何模块引用（死代码）** [技术债]
   - 重要性：9个 .rs 文件未被编译，crate 拆分遗留
   - 社区反应：0条评论（新）

6. **#1376 - Windows PowerShell7 光标跳动** [平台bug]
   - 重要性：影响 Windows 用户使用体验，初次启动卡顿无法输入
   - 社区反应：4条评论

8. **#1146 - macOS stdin 检测误报** [平台bug]
   - 重要性：影响 macOS 上的命令执行判断准确性

9. **#1790 - opencode-go: 大负载被拒绝** [性能]
   - 重要性：长会话（约18MB请求体）失败，重试耗尽
   - 影响 OpenCode Go 模型的稳定性

10. **#1801 - 功能请求：可配置的额外 overlay 文件**
    - 重要性：支持插件添加 prompt 引导文件

11. **#1804 - bash 工具描述未指向 agentgrep/rg**
    - 重要性：模型回退到慢速 grep -r

12. **#1791 - tui-markdown: LaTeX 回退日志泛滥**
    - 重要性：无 TeX 工具链环境下，每天13-18k行警告日志

13. **#1479 - Named-profile 无认证标志问题**
    - 重要性：auth 状态错误，测试在 jcode 启动的 shell 中失败

14. **#1799 / #1797 - HOOKS.md 文档与实现不同步**
    - 重要性：用户阅读文档会误以为只支持单命令 hook

**功能需求趋势:**
- 安全相关：MCP 配置、subprocess 环境隔离、配对码安全
- 平台兼容性：macOS 菜单栏、Windows TUI、PowerShell
- 文档维护：HOOKS.md 等与实现不同步
- 性能优化：bash 工具描述、大负载处理、provider 路由
- CI/测试基础设施：警告预算、跨平台测试、测试隔离
- 死代码清理：crate 拆分后的死代码
- 模型路由：OpenCode Go Responses API

**开发者关注点:**
- CI 红色问题：多个 master 失败，Quality Guardrails 持续告警
- 安全敏感度提升：MCP 任意命令执行、配对码限制、subprocess 环境
- macOS 特定问题：菜单栏、stdin 检测、签名身份
- 文档同步：HOOKS.md 等文档需要更新以反映代码实际行为
- 死代码清理：长期技术债需要处理
- 测试隔离：避免测试污染开发环境

现在开始写日报，注意中文输出，简洁专业。

让我再仔细看一下数据，确保不错过重要信息：

- #1176 [HIGH priority, autonomous: no] - 这是最严重的，因为是高优先级 bug
- #1177 - 技术债
- #1376 - TUI bug, Windows
- #621 [CLOSED] - 已关闭
- #1146 - macOS bug
- #1274 [CLOSED] - 已关闭
- #1778 [CLOSED] - 已关闭（Harness API）
- #1796 [OPEN] - master 红色
- #1797 [CLOSED] - 文档 HOOKS
- #1792 [CLOSED] - Quality Guardrails
- #769 [CLOSED] - master CI broken
- #1124 [CLOSED] - macOS 菜单栏图标
- #1154 [CLOSED] - 自开发版本存储
- #1479 [OPEN] - provider auth
- #1294 [CLOSED] - Clippy
- #1781 [CLOSED] - test failure
- #1348 [CLOSED] - Clippy CI
- #1804 [OPEN] - bash 工具描述
- #1803 [OPEN] - master red formatting
- #1801 [OPEN] - 功能请求 overlay files
- #1799 [OPEN] - HOOKS.md 漂移
- #1795 [OPEN] - 死代码
- #1606 [CLOSED] - macOS 菜单栏图标
- #1791 [OPEN] - LaTeX 日志泛滥
- #1790 [OPEN] - opencode-go 大负载

我应该选出10个最重要的 OPEN 状态的 Issue，因为这些是社区正在讨论和需要关注的：

OPEN Issues 优先选择:
1. #1176 [HIGH] - 安全漏洞
2. #1177 - CI 警告预算
3. #1376 - Windows PowerShell
4. #1146 - macOS stdin
5. #1479 - auth 标志问题
6. #1796 - master CI red
7. #1795 - 死代码
8. #1804 - bash 描述
9. #1803 - master red (新)
10. #1801 - 功能请求 overlay
11. #1799 - 文档漂移
12. #1791 - LaTeX 日志
13. #1790 - opencode-go 大负载

10个最重要的 OPEN Issue 选择：
1. #1176 (HIGH, 安全)
2. #1803 (新, master red)
3. #1796 (master red)
4. #1177 (技术债, CI)
5. #1795 (死代码, 新)
6. #1790 (性能, 模型)
7. #1801 (功能请求)
8. #1804 (性能)
9. #1791 (LaTeX日志)
10. #1376 (Windows)

加上 #1146, #1479, #1799 作为额外关注

10个最重要的 PR:
1. #1802 - prompt overlay files
2. #1800 - HOOKS.md docs
3. #1496 - openrouter headers
4. #1511 - provider 内容过滤快速失败
5. #1794 - macOS stdin
6. #1354 - MCP 安全
8. #1362 - swarm stop
9. #1493 - test isolation
10. #1357 - background atomic
11. #1513 - picker route test
12. #1356 - test env lock

选出10个:
1. #1802 (新功能)
2. #1800 (docs)
3. #1496 (provider headers)
4. #1511 (provider 内容过滤)
5. #1794 (macOS stdin)
6. #1354 (MCP 安全)
7. #1362 (swarm stop)
8. #1493 (test isolation)
9. #1357 (background atomic)
10. #1512 (LaTeX 日志)

让我开始写最终日报。

需要注意格式：
- 用中文
- 简洁专业
- 每个条目附 GitHub 链接
- 结构清晰
- 适合技术开发者阅读

我还需要注意日报的日期是 2026-10-12。</think>

# jcode 社区动态日报 · 2026-10-12

> 数据源：[github.com/1jehuang/jcode](https://github.com/1jehuang/jcode)

---

## 一、今日速览

**v0.95.0 正式发布**，核心变化是 OpenCode Go 模型（包括 `grok-4.7`、`gpt-6-luna`）统一走 Responses 路由、turn-end 钩子开始暴露 token 用量，`/agents` 引入 per-session worker 模型覆盖。**与此同时 `master` 分支处于红色状态**——过去 24 小时内连续爆出多个 Quality Guardrails / 编译 / 格式化失败（#1796、#1803、#1792），以及一起尚未修复的 **MCP 任意命令执行安全漏洞**（#1176）持续被社区推上议程。

---

## 二、版本发布：v0.95.0

🔗 https://github.com/1jehuang/jcode/releases/tag/v0.95.0

**Highlights**
- **OpenCode Go 模型路由升级**：`grok-4.7`、`gpt-6-luna` 等 Responses-only 模型走 Responses API（来自 #1789 的 cherry-pick，参见 PR #1789）
- **Hooks 完善**：`turn_end` 现在暴露 token usage；一次性 `jcode run` turn 也会触发 `turn_start` / `turn_end`
- **`/agents` 支持 per-session worker 模型覆盖**，多代理场景灵活性提升

**Improvements**
- `/resume` 可打开 sco（session continuity）会话

> 注：CHANGELOG 在截断点处不完整，macOS 菜单栏相关修复（#1793 已合并到 v0.95.0）值得升级验证。

---

## 三、社区热点 Issues（Top 10 OPEN）

| # | 标题 | 为什么重要 | 社区反应 |
|---|------|------------|----------|
| [#1176](https://github.com/1jehuang/jcode/issues/1176) | 项目级 `.mcp.json` 无信任提示执行任意命令 | **HIGH 安全漏洞**：克隆不信任 repo 并 `cd` 进去就能执行攻击者命令，且在无 provider 时也会触发。`autonomous: no` 表明需人决策 | 4 评论 · 0 👍 · 持续高位 |
| [#1803](https://github.com/1jehuang/jcode/issues/1803) | master 红色：Windows E0596 + macOS 警告预算超限 | `089947b02` 引入新故障，5/10 CI job 失败，且与 #1796 的格式化失败互相掩盖 | 新发 · 0 评论 |
| [#1796](https://github.com/1jehuang/jcode/issues/1796) | `master` 红色：Check formatting 失败 | `da09e225d` 起 `Quality Guardrails` step 6 失败，step 7-19 被跳过，可能掩盖更大的 ratchet 故障 | 2 评论 |
| [#1177](https://github.com/1jehuang/jcode/issues/1177) | CI 零警告预算仅 Linux，2700+ 核心测试未运行 | macOS-only 警告绕过 CI，master `ff6fb6359` 在 macOS 上已有 5 个 warning | 4 评论 |
| [#1795](https://github.com/1jehuang/jcode/issues/1795) | 9 个 tracked 源文件被任何模块不引用 | crate 拆分遗留死代码，`rustc` 永远不编译，仍计入 lint/ratchet | 新发 · 0 评论 |
| [#1790](https://github.com/1jehuang/jcode/issues/1790) | opencode-go: ~18MB 请求体被 500/503 拒绝 | 8 次重试耗尽后被误判为"provider overload"，无 payload 恢复路径 | 0 评论 · 新发 |
| [#1804](https://github.com/1jehuang/jcode/issues/1804) | bash 工具描述未指向 agentgrep/rg | 模型在大目录搜索时回退到慢速 `grep -r`，白送掉 jcode 自带的搜索工具 | 0 评论 · 新发 |
| [#1801](https://github.com/1jehuang/jcode/issues/1801) | 可配置的 prompt overlay 文件 (`[prompt] overlay_files`) | 插件/安装器无法独立注入 prompt 引导，只能改共享 `prompt-overlay.md`，有 PR #1802 对应 | 0 评论 · 新发 |
| [#1791](https://github.com/1jehuang/jcode/issues/1791) | tui-markdown: 无 TeX 工具链时日志每天 +1w 行 | LaTeX 回退路径在没有 LaTeX 的机器上刷日志 | 0 评论 · 新发 |
| [#1376](https://github.com/1jehuang/jcode/issues/1376) | Windows PowerShell 7 下 v0.86 光标跳动 + 启动卡死 | 启动后整个键盘失效，只能关终端重来，影响所有 Windows 用户 | 4 评论 |

**值得关注但未进 Top 10**：[#1146](https://github.com/1jehuang/jcode/issues/1146)（macOS stdin 检测误把每次 sleep 当作等待输入）、[#1479](https://github.com/1jehuang/jcode/issues/1479)（named-profile 认证状态串台）、[#1799](https://github.com/1jehuang/jcode/issues/1799)（HOOKS.md 文档漂移）。

---

## 四、重要 PR 进展（Top 10）

| PR | 类型 | 内容 |
|----|------|------|
| [#1802](https://github.com/1jehuang/jcode/pull/1802) | ✨ Feature | 新增 `[prompt] overlay_files` 配置，关闭 #1801，允许多 overlay 文件按优先级合并 |
| [#1800](https://github.com/1jehuang/jcode/pull/1800) | 📝 Docs | 补充 HOOKS.md 中数组 hook 语法与 `turn_start` 说明，关闭 #1797 |
| [#1496](https://github.com/1jehuang/jcode/pull/1496) | 🐛 Fix | OpenRouter runtime 正确发送命名 provider profile 的 `headers`（含 Luhn 不校验的 credit_card 触发内容过滤案例），关闭 #1495 |
| [#1511](https://github.com/1jehuang/jcode/pull/1511) | 🐛 Fix | 内容过滤块立即失败、共享池 429 重试上限、本地 PAN 预检查；解决 #1511 描述的 OpenRouter 内容过滤误报 |
| [#1794](https://github.com/1jehuang/jcode/pull/1794) | 🐛 Fix | 通过常驻线程 + 包装 shell 检测 macOS stdin 等待，关闭 #1146 |
| [#1354](https

</details>

<details>
<summary><strong>pi</strong> — <a href="https://github.com/earendil-works/pi">earendil-works/pi</a></summary>

<think>The user wants me to generate a daily report for the pi community based on GitHub data. Let me analyze the data carefully and structure it according to the requested format.

Key observations:
1. No releases in the past 24 hours
2. 40 issues updated (showing top 30 by comment count)
3. 6 PRs updated in past 24 hours

Let me identify the most important issues:
- #4945 (82 comments, 35 thumbs up) - openai-codex Connection Reliability Issues - INPROGRESS
- #10480 (18 comments) - openai usage limit reset
- #7553 (10 comments) - Compaction thinking level/model
- #10267 (9 comments) - P0 prompt text dropped
- #9602 (8 comments) - Compaction overflow
- #10645 (6 comments) - resizeImage null issue
- #9656 (6 comments) - Mouse wheel bug
- #10393 (CLOSED, 6 comments) - Copy text broken
- #8617 (4 comments) - Codex file references
- #7139 (CLOSED, 4 comments) - Boolean flag bug

PRs:
- #10813 - preserve Anthropic tool references
- #10774 - enable kitty images in herdr
- #10810 - fix CompactionStatusIndicator colorFn
- #10805 - extension session cwd
- #10751 - pi.dev configuration schemas
- #10795 - drop images from Anthropic error tool results

Let me structure this as a Chinese daily report.

Feature trend analysis:
- Anthropic integration (issues 10804, 10794/10795, 10813)
- Compaction improvements (#7553, #9602, #10781, #10809/10810)
- Local model support (Qwen, llama.cpp, MiMo) - issues 9602, 10578, 10791, 10818
- Windows compatibility - issues 9656, 10645, 10801
- MCP and tool systems - issues 10274, 10707, 10816
- Default model/catalog handling - issue 10812
- Bash/process management - issues 10797, 10800

Developer pain points:
- Connection reliability with openai-codex
- Compaction issues (thinking, overflow, transport)
- Local model provider issues
- Cross-platform compatibility (Windows)
- Configuration management

Now let me write the report in Chinese with the requested format.</think>

# Pi 社区动态日报 · 2026-10-12

> 数据来源：`github.com/earendil-works/pi` · 统计窗口：过去 24 小时

---

## 1. 今日速览

- **openai-codex 连接稳定性仍是焦点**：评论数最高的 #4945 持续在 in-progress 状态，加上 #10480（ChatGPT Pro 用量重置识别）一并暴露了在多账号、多连接场景下的可靠性短板。
- **Anthropic 集成加速收敛**：本日 PR #10813（保留 client-loaded 工具引用）与 #10795（从 Anthropic 错误工具结果中移除图片）双双更新，配套 issue #10804（thinking.display "updates"）表明 Anthropic 链路在快速补齐。
- **Qwen/本地模型与 Compaction 是第二大热点**：MiMo（#10818）、Qwen3.8 推理控制（#10578）、llama.cpp 分类器（#10791）三条线，加上 compaction 的 thinking 级别（#7553）、token 溢出（#9602）、transport（#10781）三个 issue，构成自托管与长会话用户的核心痛点。

---

## 2. 版本发布

过去 24 小时内 **无新 Release**。从 issue 引用推断，当前主线在 `v0.87.x → v1.0.x → v1.1.0` 之间迭代（#10781 已明确指向 1.1.0 行为变化）。

---

## 3. 社区热点 Issues（按评论数 × 相关性筛选）

| # | Issue | 状态 | 评论 | 👍 | 一句话总结 |
|---|---|---|---|---|---|
| [#4945](https://github.com/earendil-works/pi/issues/4945) | openai-codex Connection Reliability Issues | OPEN / inprogress | 82 | 35 | **最高优先级**：TUI 长时间卡在 `Working...`、无流式输出、无法恢复，被按 Esc 中止。一周内反复触发，几乎影响所有 gpt-5.5 用户。 |
| [#10480](https://github.com/earendil-works/pi/issues/10480) | Direct openai 连接不识别手动重置的用量限制 | OPEN | 18 | 0 | ChatGPT Pro 100 plan 的 banked reset 不生效，需靠 logout/login 临时绕过，**触发"账号配额"语义错误**。 |
| [#7553](https://github.com/earendil-works/pi/issues/7553) | 配置 compaction 的 thinking level/model | OPEN / to-discuss | 10 | 3 | 提议自动/手动 compaction 独立设置思考预算，避免与正常轮次共享推理 token 池。 |
| [#10267](https://github.com/earendil-works/pi/issues/10267) | `before_agent_start` 注入的 prompt 在无用户提示时被丢弃并**重复计费** | OPEN / prio:p0 | 9 | 4 | 后台通知、plan 继续、重试、resume 路径都会丢掉 extension 的 systemPrompt，导致**整段 prompt 重新计费**，账单型 bug。 |
| [#9602](https://github.com/earendil-works/pi/issues/9602) | Compaction 包含先前被省略的 thinking 消息导致溢出 | OPEN | 8 | 0 | 长会话 + 本地 Qwen3.8 + 16k 输出限制下，compaction 把被省略的思考一并纳入上下文，击穿 token 上限。 |
| [#10645](https://github.com/earendil-works/pi/issues/10645) | `resizeImage` 在 Bun 编译产物中返回 null（v0.87.x 起所有图片附件丢失） | OPEN / inprogress | 6 | 0 | 影响 RPC 模式 host 集成——所有图像类附件在 v0.87.1 / v1.0.4 的 standalone 二进制里都消失了。 |
| [#9656](https://github.com/earendil-works/pi/issues/9656) | 滚轮在 Windows + Zellij 全屏下滚动了 prompt history 而非对话 | OPEN | 6 | 4 | 多路复用器组合触发的输入路由错误，**Linux/tmux 不受影响**，定位偏本地化。 |
| [#10393](https://github.com/earendil-works/pi/issues/10393) | xterm 终端中选择/复制文本失效 | CLOSED / no-action | 6 | 0 | 已知是 xterm.js 行为，最终归类为 no-action，但仍是浏览器/WebPi 用户的高频反馈。 |
| [#8617](https://github.com/earendil-works/pi/issues/8617) | Codex：图片类工具结果改用 file references | OPEN | 4 | 0 | 提议把图像 base64 替换为 ChatGPT `file_id` 引用，作者已准备好原型，**显著降低重复请求体积**。 |
| [#10656](https://github.com/earendil-works/pi/issues/10656) | DashScope/Qwen 429 `insufficient_quota` 被错误归类为不可重试账单错误 | OPEN | 4 | 0 | 实际上阿里云用此码表示**瞬时 TPS/TPM 限流**，导致真实账单错误被混淆，影响退避策略。 |

> 备注：#4945 与 #10267 是 p0/inprogress 级别，建议每天跟进。

---

## 4. 重要 PR 进展

| # | PR | 类型 | 摘要 |
|---|---|---|---|
| [#10813](https://github.com/earendil-works/pi/pull/10813) | feat(ai) | Anthropic | 保留 client-loaded 工具引用，避免 Anthropic 往返间 tool_use/tool_result 关联断开。 |
| [#10774](https://github.com/earendil-works/pi/pull/10774) | fix(tui) | Herdr/kitty 图像 | 回滚 #10573 让 herdr 重新启用 kitty 图形协议（herdr 不读 `GHOSTTY_RESOURCES_DIR`，但能渲染 kitty）。 |
| [#10810](https://github.com/earendil-works/pi/pull/10810) | fix(tui) | CompactionStatusIndicator | 在未定义 borderColor 的主题下补齐 `colorFn` 覆盖，与 WorkingIndicator 对齐。修复 [#10809](https://github.com/earendil-works/pi/issues/10809)。 |
| [#10805](https://github.com/earendil-works/pi/pull/10805) | feat(coding-agent) | Extension cwd | `ctx.newSession()` / `ctx.switchSession()` 新增 `cwd`/`cwdOverride`，extension 可把命令会话搬进新 worktree。 |
| [#10751](https://github.com/earendil-works/pi/pull/10751) | feat(coding-agent) | 配置 Schema | 将 pi.dev schema 端点作为 `$id` 权威来源，内置主题使用已发布 schema，提升配置校验一致性。 |
| [#10795](https://github.com/earendil-works/pi/pull/10795) | fix(ai) | Anthropic 错误路径 | 从 Anthropic 错误的工具结果中剥离图片字段，修复 issue #10794 触发的循环 / 失败收敛问题。 |

> PR 数量仅 6 个，但覆盖了 **Anthropic、herdr、compaction UI、extension 工作流、schema 治理**五个独立方向，代表开发者分散的修复诉求。

---

## 5. 功能需求趋势

从当日 issue 池中归纳，社区诉求集中度（按话题聚合数排序）：

1. **Anthropic 集成完整性**（4 条相关）— `thinking.display="updates"`、错误路径图片处理、tool reference 持久化、compaction transport 透传 (#10804 / #10795 / #10813 / #10781)。
2. **Compaction 行为可配置**（3 条）— thinking 级别独立 (#7553)、溢出保护 (#9602)、transport 选择 (#10781)。
3. **本地/自托管模型体验**（4 条）— Qwen3.8 chat-template (#10578)、llama.cpp 分类器 (#10791)、MiMo thinking map (#10818)、Qwen 长上下文溢出 (#9602)。
4. **Windows 与跨平台一致性**（3 条）— 编译产物图片丢失 (#10645)、Zellij+Windows 滚轮 (#9656)、auth lock EPERM (#10801)。
5. **MCP / 工具系统扩展**（3 条）— elicitation 支持 (#10274)、codemode 约束丢失 (#10707)、中文工具搜索分词 (#10816)。
6. **配置与目录管理**（2 条）— 已下线模型 silent fallback (#10812)、/tree 记住过滤器 (#10814)。
7. **进程与无人值守 agent**（2 条）— bash timeout 残留 Playwright (#10797)、无头 agent 输出截断无续跑路径 (#10799)。

---

## 6. 开发者关注点

- **"为什么我的连接还在转圈？"** — #4945 已成为月度反复出现的稳定故障，社区期待一个明确的可见错误和自动恢复路径。
- **"账单别给我重复算"** — #10267 是 p0 级别计费 bug，影响所有使用 extension `before_agent_start` 的后台任务用户。
- **"本地模型要追上 provider"** — Qwen 系列在 thinking、分类器、chat-template 三处的行为差异是自托管用户最大的接入成本。
- **"Windows 别老掉链子"** — 编译产物图片丢失、Zellij 滚轮、auth lock EPERM 三类问题集中在 Windows 11。
- **"compaction 不该吞 context"** — 长会话用户希望 compaction 有独立预算、可配置 transport，并能避开先前的省略策略带来的溢出。
- **"工具搜索要懂中文"** — #10816 提示当前 tokenizer 用 `/[^a-z0-9]+/` 分词会清空中文字符，对国内开发者直接闭源。
- **"无头 agent 断了没人接"** — #10799 强调 `--mode rpc`/无人值守场景需要截断续跑或显式信号，避免静默完成。

---

**报告说明**：本日报基于 40 条 updated issues（含 6 条 closed/no-action/untriaged）与 6 条 updated PRs 整合，已剔除 `[last-read, no-action]` 等归档标签的内容语义。如需进一步聚焦在某个主题或 repo，请告诉我。

</details>

---
*本日报由 [Big Model Radar](https://github.com/96loveslife/big_model_radar) 自动生成。*
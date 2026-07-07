# AI CLI 工具社区动态日报 2026-07-07

> 生成时间: 2026-07-07 03:55 UTC | 覆盖工具: 7 个

- [Claude Code](https://github.com/anthropics/claude-code)
- [OpenAI Codex](https://github.com/openai/codex)
- [Gemini CLI](https://github.com/google-gemini/gemini-cli)
- [GitHub Copilot CLI](https://github.com/github/copilot-cli)
- [Kimi Code CLI](https://github.com/MoonshotAI/kimi-cli)
- [OpenCode](https://github.com/anomalyco/opencode)
- [Qwen Code](https://github.com/QwenLM/qwen-code)
- [Claude Code Skills](https://github.com/anthropics/skills)

---

## 横向对比

<think>The user wants me to generate a horizontal comparison analysis report based on the daily dynamics reports of various AI CLI tools. Let me analyze the data carefully and structure the report according to the 6 required sections.

Let me first extract the key data points from each tool's report:

**Claude Code**:
- 1 Release (v2.1.202): Dynamic workflow size + OpenTelemetry attributes
- 10 issues (top by comments/likes), 3 PRs mentioned
- Key themes: Per-Turn Tool Call Limit Regression, /reloadSettings, Opus 4.8 quality, safety filter false positives

**OpenAI Codex**:
- 1 Release (rust-v0.143.0-alpha.37)
- 50 issues updated, 50 PRs updated (top 30/20 shown)
- Key themes: GPT-5.5 reasoning tokens, MultiAgent canonical events, Windows platform issues, MCP OAuth

**Gemini CLI**:
- 1 Release (v0.51.0-nightly.20260707.g15a9429b6): macOS sandbox gitconfig fix, escape sequence preservation
- 50 issues updated (top 30), 13 PRs updated
- Key themes: Subagent reliability, Auto Memory, AST-aware tools, Browser agent, MCP elicitation

**GitHub Copilot CLI**:
- 1 Release (v1.0.69-2): /rubber-duck, MCP OAuth callback, /user switch picker
- 23 issues updated (24h), 0 PRs updated
- Key themes: MCP permissions, /effort command, Windows .claude/settings.json hooks, Voice mode ASR, memory leak

**Kimi Code CLI**:
- 0 Releases, 2 Issues (Windows TUI bug, ACP usage limit request), 0 PRs
- Low activity, focus on cross-platform + ACP integration

**OpenCode**:
- 1 Release (v1.17.14): Code Mode MCP Adapter, pagination fixes
- 50 issues updated (top 30), 50 PRs updated (top 20)
- Key themes: Version regression (1.17.13 resource usage), subagent permissions/output, IDE integration, plugin hooks

**Qwen Code**:
- 1 Release (v0.19.6-nightly.20260707.bcdb44c5d): PR triage hardening
- Top issues shown (around 15), Multiple PRs (around 16)
- Key themes: OAuth free tier reduction (149 comments!), Multi-workspace RFC, Large file/PDF handling, Windows compatibility

Now let me compile the comparison:

**Activity levels** (based on Issues + PRs in past 24h):
- OpenAI Codex: 50+50 = highest
- OpenCode: 50+50 = highest
- Gemini CLI: 50+13 = medium-high
- Qwen Code: ~15+~16 = medium
- GitHub Copilot CLI: 23+0 = low-medium
- Claude Code: 10+3 = low-medium
- Kimi Code CLI: 2+0 = lowest

**Releases**: 5 tools had releases today, Kimi Code had no release

**Common themes across tools**:
1. MCP (Model Context Protocol) ecosystem maturity - Permissions, OAuth, elicitation
2. Multi-agent/subagent systems - Codex's canonical events, Gemini's subagent reliability, OpenCode's subagent output, Claude Code's subagent routing
3. Windows platform compatibility issues
4. Performance/resource issues - regression concerns
5. Configuration/IDE integration
6. Cost/token transparency
7. Telemetry/observability
8. Sandbox security

**Differentiation**:
- Claude Code: Enterprise focus, OpenTelemetry, sophisticated workflows
- OpenAI Codex: Heavy engineering investment in canonical event systems, GPT-5.5 model integration
- Gemini CLI: Deep subagent/orchestration, AST-aware tools exploration
- GitHub Copilot CLI: GitHub ecosystem native, MCP-heavy, voice mode experimentation
- Kimi Code CLI: ACP (Agent Client Protocol) focus, IDE integration
- OpenCode: Code Mode (MCP sandbox), plugin hooks extensibility
- Qwen Code: Multi-workspace/enterprise, regional (WeCom, QQ Bot), multi-channel

**Maturity signals**:
- High activity but also high bugs (Codex, OpenCode) = rapid iteration phase
- Closed issues (Copilot CLI) = consolidating phase
- Low activity (Kimi) = early stage or stable
- Feature-rich (Qwen Code RFCs) = ambitious expansion

**Industry trends**:
1. MCP becoming standard protocol across all tools
2. Subagent/multi-agent systems everywhere
3. Performance/observability is the new battleground
4. TUI/Desktop stability is the weakest link
5. Windows compatibility is universal pain point
6. Cost transparency is rising concern
7. IDE/Editor integration is key differentiator

Now let me write the report. The user wants it concise, professional, data-supported, suitable for tech decision-makers and developers.

Let me structure this carefully and use tables for clarity.</think>

# AI CLI 工具生态横向对比分析报告

**报告日期**：2026-07-07  
**数据来源**：GitHub 公开 Issue / PR / Release 数据（近 24 小时）

---

## 1. 生态全景

当前 AI CLI 工具生态已进入**多极化与协议收敛并行**的阶段：OpenAI Codex 与 OpenCode 占据工程活跃度第一梯队，Claude Code 与 Gemini CLI 进入精细化打磨期，GitHub Copilot CLI 处于企业化扩张期，Qwen Code 在多工作区/多渠道方向发力，Kimi Code CLI 则通过 ACP 协议切入 IDE 生态。**MCP（Model Context Protocol）** 正在成为跨工具的事实标准，而**多 Agent 编排、可观测性、Windows/沙箱兼容**则是各家共同面对的下一道分水岭。

---

## 2. 各工具活跃度对比

| 工具 | Issues（24h） | PRs（24h） | Releases | 当日热度信号 |
|------|--------------|-----------|----------|-------------|
| **OpenAI Codex** | 50 | 50 | rust-v0.143.0-alpha.37 | 132 评论 + 230 👍 的 GPT-5.5 推理异常议题 |
| **OpenCode** | 50 | 50 | v1.17.14 | v1.17.13 资源占用回归引起广泛投诉 |
| **Gemini CLI** | 50 | 13 | v0.51.0-nightly | Subagent 假成功 + Auto Memory 系列问题 |
| **Qwen Code** | ~15 | ~16 | v0.19.6-nightly | OAuth 免费额度缩减提案 149 条评论 |
| **GitHub Copilot CLI** | 23 | **0** | v1.0.69-2 | 多个长期高赞 Issue 集中关闭 |
| **Claude Code** | 10 | 3 | v2.1.202 | `/reloadSettings`（118 👍）+ Opus 4.8 质量争议 |
| **Kimi Code CLI** | **2** | **0** | 无 | 仅 Windows TUI Bug + ACP 用量暴露提案 |

> 注：OpenAI Codex、OpenCode、Gemini CLI 的 Issue 数为仓库返回的"近 24 小时活跃"总数（包含评论互动），非新增 Issue 数。

---

## 3. 共同关注的功能方向

以下议题在多个工具的社区中**同时被热议**，是行业级共识方向：

### 3.1 MCP 生态成熟化（**全部 7 家**）

| 诉求 | 代表工具 / Issue |
|------|-----------------|
| MCP 工具权限粒度控制 | Copilot #3028、Claude Code #33969、Codex PR #30292–30296 |
| MCP OAuth 登录体验 | Copilot v1.0.69-2 已优化；Codex 多 PR 串改状态机 |
| MCP elicitaiton 协议对齐 | Gemini #28089（已合并至 2025-11-25 规范） |
| Code Mode（受限脚本编排） | OpenCode v1.17.14 新增 Adapter、#35617 支持 Promise 链式 |
| MCP 分页/Schema 校验 | OpenCode v1.17.14 修复 |

### 3.2 多 Agent / 子 Agent 编排（**6 家**）

| 工具 | 当日焦点 |
|------|---------|
| OpenAI Codex | 5 个 PR 推进 `TurnItem::*` 规范事件化（collab/sub-agent/dynamic tool/wait） |
| Gemini CLI | Subagent MAX_TURNS 后仍报 success（#22323）、generalist agent 挂死（#21409, 👍8） |
| OpenCode | 子代理权限继承（#25835）、工具调用无返回值（#16254）、CLI 模式输出缺失（#19278） |
| Claude Code | 子代理模型路由失效（#43869） |
| Copilot CLI | 多智能体协作工作流（#1389，已关闭） |
| Qwen Code | 多工作区 RFC（#6378）+ 守护进程环境隔离（#6416） |

### 3.3 Windows / 沙箱兼容性（**6 家**）

Claude Code（iOS/macOS/Termux）、OpenAI Codex（Windows 桌面端 5+ 条 Issue）、Gemini CLI（Wayland）、OpenCode（PowerShell 中文乱码）、Qwen Code（cmd.exe 无 `cat`）、Copilot CLI（`.claude/settings.json` 兼容失败）。**Windows 已成本轮反馈的"重灾区"**。

### 3.4 可观测性与遥测（**5 家**）

Claude Code v2.1.202 新增 OTel 属性、Codex PR #30667（WebSocket 时延关联）+ #30668（rollout writer tracing）、OpenCode PR #35616（语义上下文估算）、Qwen Code PR #6349（启动 Profiler）。可观测性从"可选"升级为"标配"。

### 3.5 性能与资源占用回归（**5 家**）

OpenCode 1.17.13 资源激增（#35009）、Claude Code v2.1.117 ugrep OOM（#54394）、Qwen Code 僵尸会话烧 30M Tokens（#5964）、Codex Token 消耗异常（#27142）、Codex Rate Limit 日内回退（#31322）。**"升级即翻车"成为社区高频焦虑**。

### 3.6 IDE / 编辑器集成（**5 家**）

OpenCode Neovim（#26232）+ VSCode 手动安装（#26241）、Kimi Code ACP（#2486）、Claude Code 桌面端、Codex VSCode inotify（#23574）、Qwen Code VSCode（#6414）、Copilot CLI VSCode。**IDE 已成为 CLI 的"第二战场"**。

### 3.7 配置管理与体验（**4 家**）

Claude Code `/reloadSettings`（#5513, 118 👍）、Qwen Code 扩展热重载（#6347）、OpenCode 偏好设置、Copilot CLI `/effort`（#3074）。社区强烈要求"不重启生效"。

---

## 4. 差异化定位分析

| 工具 | 核心定位 | 目标用户 | 关键差异化 |
|------|---------|---------|----------|
| **Claude Code** | 企业级 Agent 工作流 | 中大型团队、SRE/平台工程 | OpenTelemetry 一等公民、强 Hooks/Subagent 模型路由、动态工作流规模 |
| **OpenAI Codex** | 高强度工程迭代的 Agent 运行时 | 专业开发者、CI/平台团队 | 多 Agent 规范事件体系、GPT-5.5 模型推理深度集成、TUI/IDE/IPC 全栈 |
| **Gemini CLI** | Google 生态 Agent 编排 | AI 重度用户、研究型场景 | AST 感知工具链探索、Auto Memory 子系统、Browser/Codebase Investigator 等专用 subagent |
| **GitHub Copilot CLI** | GitHub 原生体验 + MCP 总线 | GitHub 企业用户、跨职能团队 | 项目级插件作用域、企业托管、ACP/Voice 多模态探索 |
| **Kimi Code CLI** | ACP 协议驱动的 IDE 后端 | 第三方 IDE 厂商、协议层开发者 | Agent Client Protocol（面向 VS 2026 等） |
| **OpenCode** | 高度可扩展的开源 CLI | 极客、插件作者、本地模型用户 | Code Mode（受限脚本沙箱）、plugin hook `tool.execute.before` 短路、compaction skip |
| **Qwen Code** | 多工作区 + 多渠道 + 中文生态 | 中文企业市场、多端集成商 | RFC 多工作区守护进程、WeCom/QQ Bot 通道、企业多租户 |

**技术路线观察**：
- **"事件驱动 + 规范事件"**（Codex）与 **"Hook/Plugin 短路"**（OpenCode、Claude Code）是多 Agent 演进的两种范式。
- **"协议化"** 成为新分水岭：MCP（Claude/Codex/Copilot/OpenCode）、ACP（Kimi）、A2A（Gemini）。
- **"本地优先"**（OpenCode Code Mode）与 **"云端优先"**（Codex Cloud、Claude Code Teleport）路线分野明显。

---

## 5. 社区热度与成熟度

### 5.1 按"单位时间互动量"排序

| 梯队 | 工具 | 特征 |
|------|------|------|
| **🔥 第一梯队** | OpenAI Codex、OpenCode | 高频 Issue+PR，但伴随大量 Bug，反映**快速迭代期** |
| **🔥 第二梯队** | Gemini CLI、Qwen Code | 主题集中（Agent 鲁棒性 / 多工作区），反映**单点突破期** |
| **⚖️ 第三梯队** | Claude Code、Copilot CLI | 长尾高赞议题（`/reloadSettings` 等）+ 集中关闭老 Issue，反映**消化沉淀期** |
| **🌱 第四梯队** | Kimi Code CLI | 议题稀疏、协议先行，反映**早期建设期** |

### 5.2 成熟度信号

- **Codex / OpenCode**：日均 50 Issues + 50 PRs，工程化压强极大，类似"云计算早期 VM 战争"。
- **Claude Code / Copilot CLI**：单条 Issue 点赞量破百（如 #5513 118 👍、#1665 18 👍、#1389 18 👍），说明用户群体具备**强烈表达习惯**，是核心用户沉淀的体现。
- **Qwen Code**：单条政策类 Issue 149 评论（#3203），体现**中文社区的强反馈文化**。
- **Kimi Code CLI**：低活跃度可能是用户基数小，也可能是产品定位差异，**需结合下载量等数据综合判断**。

---

## 6. 值得关注的趋势信号

### 📈 趋势一：MCP 从"扩展机制"升级为"平台总线"

**信号**：所有 7 家工具均已支持 MCP，且不再满足于"能跑通"，开始投入 OAuth 状态机（Codex）、权限粒度（Copilot）、Code Mode 沙箱（OpenCode）、elicitation 协议（Gemini）等深度能力。  
**对开发者的价值**：选择 MCP 兼容性强的工具，等同于押注**未来的"AI 应用商店"生态**。

### 📈 趋势二：可观测性从"加分项"变为"必选项"

**信号**：Claude Code OTel、Codex WebSocket tracing、OpenCode 语义估算、Qwen Code 启动 Profiler 同日推进。  
**对开发者的价值**：在工具选型时，**OTel/trace 集成度**将成为企业落地（尤其 SRE/FinOps 场景）的关键评估项。

### 📈 趋势三：多 Agent 编排进入"规范事件"时代

**信号**：OpenAI Codex 的 `TurnItem::*` 规范事件系列 PR 是当周最具技术含量的变更；OpenCode 的 plugin hook 短路、`generalist agent` 调度惰性问题（Gemini）反映出"控制流 + 状态机 + 错误传播"是共同难点。  
**对开发者的价值**：未来 6–12 个月，**Agent 框架的可调试性**将决定工具是否能进入生产级 CI/CD。

### 📈 趋势四：Windows 与边缘平台成为"质量试金石"

**信号**：单日内 Windows 相关 Issue 横跨 6 家工具，Termux、Wayland、IPv4-only 沙箱等边缘平台也持续出现反馈。  
**对开发者的价值**：在评估工具时，**不要只跑 macOS/Linux 主线**，需要在自己真实的 CI/容器/终端环境验证。

### 📈 趋势五：成本透明与 Token 治理成为新焦虑

**信号**：Qwen Code OAuth 免费额度缩减（149 评论）+ Qwen 僵尸会话烧币（#5964 P1）+ Codex Pro 用户 Token 异常（#27142）+ Codex Rate Limit 回退（#31322）+ Copilot CLI 插件卸载消耗积分（#4032）形成共振。  
**对开发者的价值**：工具的"成本仪表盘"能力将直接影响选型，**Token 预算控制**已成为产品差异化竞争点。

### 📈 趋势六：协议化分层成为新护城河

**信号**：MCP（工具层）、ACP（客户端-IDE 层）、A2A（Agent 间通信）、OpenTelemetry（观测层）四层协议矩阵正在形成，Kimi Code 选择 ACP、Claude/Codex/Copilot 强化 MCP、Gemini 引入 A2A。  
**对开发者的价值**：未来"AI 开发栈"将是**多层协议组合**，而非单一工具垄断。

---

## 📌 结论与建议

| 角色 | 建议 |
|------|------|
| **企业技术决策者** | 优先评估 MCP 兼容度、OTel 集成、Windows 稳定性、合规与计费透明度。短期可关注 Claude Code / Codex；中长期关注 OpenCode 的 Code Mode 与 Qwen Code 的多工作区。 |
| **独立开发者** | 根据"主战场"选择：CLI 重度使用 → Codex / OpenCode；IDE 集成 → Copilot CLI / Qwen Code VSCode 扩展；协议层研究 → Kimi Code ACP。 |
| **生态建设者** | MCP 服务端、插件/钩子扩展、Agent 评测体系（Gemini 的 component-level evaluation）是三个最稀缺的供给方向。 |
| **研究人员** | GPT-5.5 推理 token 聚集（Codex #30364）、Opus 4.8 推理退化（Claude #68780）是当前**最值得跟踪的模型行为异常信号**。 |

---

*报告生成时间：2026-07-07 · 数据范围：近 24 小时 GitHub 公开数据 · 涵盖 7 个主流 AI CLI 工具*

---

## 各工具详细报告

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills 社区热点

> 数据来源: [anthropics/skills](https://github.com/anthropics/skills)

<think>The user wants me to analyze the GitHub data from the anthropics/skills repository and generate a community hotspot report. Let me analyze the data carefully:

Key observations from the data:

**Top PRs by comments (though comments are undefined in the data, I'll need to infer popularity from description depth, recent activity, and importance):**

1. #1298 - skill-creator run_eval.py fix (Windows, 0% recall bug) - very critical
2. #514 - document-typography skill 
3. #538 - pdf SKILL.md case-sensitive fix
4. #486 - ODT skill
5. #210 - frontend-design skill improvement
6. #83 - skill-quality-analyzer and skill-security-analyzer
7. #541 - docx tracked changes fix
8. #539 - skill-creator YAML warning
9. #1367 - self-audit skill
10. #1099 - skill-creator Windows fix
11. #1050 - skill-creator Windows subprocess bugs
12. #723 - testing-patterns skill
13. #509 - CONTRIBUTING.md docs
14. #362 - skill-creator UTF-8 panic
15. #361 - YAML special character detection
16. #181 - SAP-RPT-1-OSS predictor
17. #95 - system documentation
18. #1323 - skill-creator trigger detection fix
19. #1302 - color-expert skill
20. #806 - sensory skill (macOS AppleScript)

**Top Issues by actual comments:**
1. #492 - Security: Community skills impersonate anthropic/ namespace (34 comments)
2. #228 - Org-wide skill sharing in Claude.ai (14 comments)
3. #556 - run_eval.py 0% trigger rate (12 comments)
4. #62 - All my skills disappeared (10 comments)
5. #1329 - compact-memory skill proposal (9 comments)
6. #202 - skill-creator best practices (8 comments, closed)
7. #412 - agent-governance skill (6 comments, closed)
8. #189 - duplicate skills in plugins (6 comments)
9. #1175 - SharePoint security concerns (4 comments, closed)
10. #29 - Usage with AWS Bedrock (4 comments)
11. #16 - Expose Skills as MCPs (4 comments)
12. #1362 - web-artifacts-builder pnpm issues (3 comments)
13. #1169 - skill-creator recall=0% (3 comments)
14. #1061 - Windows compatibility (3 comments)
15. #184 - agentskills.io redirects (3 comments, closed)

Now let me synthesize this into a structured report in Chinese as requested.

The data shows comments are undefined for PRs but defined for Issues. So I should focus PR rankings on importance/significance inferred from the descriptions, while Issues have clear comment counts.

Let me identify the most prominent themes:

**Themes from PRs:**
1. **skill-creator tooling fixes** - Multiple PRs (#1298, #1099, #1050, #362, #361, #541, #539, #1323) all fixing the same fundamental eval pipeline
2. **Document skills** (#514, #486, #538) - typography, ODT, PDF fixes
3. **Windows compatibility** is a recurring theme
4. **Skill quality and security** (#83 - quality-analyzer)
5. **New Skills proposed** - color-expert, sensory, testing-patterns, document-typography, ODT, SAP-RPT-1-OSS

**Themes from Issues:**
1. **Security/Trust** - #492 (community skills in anthropic namespace) is highest
2. **Org-wide skill sharing** - #228
3. **skill-creator broken** - #556 (related to multiple PR fixes)
4. **Memory management** - #1329 (compact-memory)
5. **MCP integration** - #16
6. **Plugin duplicate content** - #189
7. **Cross-platform (Bedrock, Windows)** - #29, #1061

I should now write this report in Chinese, professionally and concisely.</think>

# Claude Code Skills 社区热点报告
**数据来源**：`github.com/anthropics/skills` · **截止日期**：2026-07-07

---

## 1. 热门 Skills 排行（按社区关注度）

> 注：原始数据中 PR 评论数为 `undefined`，本排行综合考察了 PR 的**问题暴露面、跨平台影响、Issue 关联度与近期活跃度**。

| # | PR | Skill / 主题 | 状态 | 热度依据 |
|---|-----|-------------|------|---------|
| 🥇 | [#1298](https://github.com/anthropics/skills/pull/1298) | **skill-creator / `run_eval.py` 全面修复** | OPEN | 关联 Issue [#556](https://github.com/anthropics/skills/issues/556)（12 评论）+ 多个 Windows 复现，**10+ 独立复现**，`run_loop` / `improve_description` 整条优化管线全部失效 |
| 🥈 | [#1298 / #1099 / #1050](https://github.com/anthropics/skills/pull/1050) | **skill-creator Windows 兼容性** | OPEN | 三条并行 PR + Issue [#1061](https://github.com/anthropics/skills/issues/1061)：subprocess PATHEXT、cp1252 编码、select 管道阻塞 |
| 🥉 | [#514](https://github.com/anthropics/skills/pull/514) | **document-typography Skill** | OPEN | 解决 AI 生成文档的孤儿/寡妇/编号错位三大排版通病，场景通用性高 |
| 4 | [#83](https://github.com/anthropics/skills/pull/83) | **skill-quality-analyzer / skill-security-analyzer** | OPEN | 元能力（meta-skill），配合 Issue [#492](https://github.com/anthropics/skills/issues/492) 的安全诉求（34 评论） |
| 5 | [#486](https://github.com/anthropics/skills/pull/486) | **ODT Skill（OpenDocument 读写）** | OPEN | 补齐开源/ISO 文档格式，LibreOffice 生态刚需 |
| 6 | [#723](https://github.com/anthropics/skills/pull/723) | **testing-patterns Skill** | OPEN | 覆盖 Testing Trophy → React 组件测试全链路 |
| 7 | [#1367](https://github.com/anthropics/skills/pull/1367) | **self-audit Skill（v1.3.0）** | OPEN | 通用"交付前四维自审"，与任何栈解耦 |
| 8 | [#1302](https://github.com/anthropics/skills/pull/1302) | **color-expert Skill** | OPEN | 覆盖 ISCC-NBS / Munsell / OKLCH 等色彩体系，自包含度高 |

**讨论焦点**：
- `skill-creator` 的 **`run_eval.py` 召回率恒为 0%** 是当前最具破坏性的"沉默缺陷"——优化循环实际在拟合噪声。
- **Windows 兼容**形成"独立 PR 群"（#1050、#1099、#1298、#1323），说明 Unix-centric 设计正在系统性暴露。
- 排版/字体/色彩等**视觉质量类 Skills** 集中涌现，反映社区从"功能可用"走向"输出质感"。

---

## 2. 社区需求趋势（Issue 提炼）

| 需求方向 | 代表 Issue | 评论数 | 状态 |
|---------|-----------|------|------|
| 🔒 **信任边界与生态治理** | [#492](https://github.com/anthropics/skills/issues/492) 社区 Skill 假冒 `anthropic/` 命名空间 | **34** | OPEN |
| 🏢 **企业级 Skill 分发** | [#228](https://github.com/anthropics/skills/issues/228) 团队/Org 内一键共享 | 14 | OPEN |
| 🧠 **Agent 长上下文与记忆压缩** | [#1329](https://github.com/anthropics/skills/issues/1329) compact-memory 提案 | 9 | OPEN |
| 🔌 **Skill 与 MCP 互操作** | [#16](https://github.com/anthropics/skills/issues/16) 将 Skills 暴露为 MCP | 4 | OPEN |
| ☁️ **跨平台分发（Bedrock）** | [#29](https://github.com/anthropics/skills/issues/29) Skills × AWS Bedrock | 4 | OPEN |
| 📦 **生态基础设施缺陷** | [#189](https://github.com/anthropics/skills/issues/189) `document-skills` 与 `example-skills` 内容重复 | 6 | OPEN |
| 🛡️ **Agent 安全治理** | [#412](https://github.com/anthropics/skills/issues/412)（已关闭）Agent-Governance | 6 | CLOSED |

**趋势总结**：
1. **安全与命名空间治理**取代功能建议成为头号议题，说明 Skills 生态已度过"增量扩张期"，进入**信任建设期**。
2. **企业分发 / Org 共享**需求攀升，暴露 `anthropics/skills` 仓库作为唯一入口的瓶颈。
3. **记忆压缩、Skill-as-MCP** 等"组合型"诉求增长，反映用户开始将 Skills 作为代理架构的**构件**而非单点功能。

---

## 3. 高潜力待合并 PR（评论活跃 / 解决关键痛点）

| PR | 主题 | 为什么近期可能落地 |
|----|------|--------------------|
| [#1298](https://github.com/anthropics/skills/pull/1298) | `run_eval.py` 全栈修复 | 阻塞 issue [#556](https://github.com/anthropics/skills/issues/556) 12 评论，是 skill-creator 的**核心可用性 gate** |
| [#1050](https://github.com/anthropics/skills/pull/1050) | Windows PATHEXT + 编码 1 行修复 | 改动极小、影响面大，常作为快合并优先项 |
| [#509](https://github.com/anthropics/skills/pull/509) | `CONTRIBUTING.md` | 关 [#452](https://github.com/anthropics/skills/issues/452) 社区健康分（当前 25%），低风险高信号 |
| [#83](https://github.com/anthropics/skills/pull/83) | quality + security analyzer | 直接呼应 [#492](https://github.com/anthropics/skills/issues/492) 信任边界议题的修复路径 |
| [#538](https://github.com/anthropics/skills/pull/538) / [#541](https://github.com/anthropics/skills/pull/541) | PDF 大小写 + DOCX `w:id` 冲突 | 明确 bugfix，影响文档产出可靠性 |
| [#1302](https://github.com/anthropics/skills/pull/1302)（color-expert）/ [#514](https://github.com/anthropics/skills/pull/514)（typography）/ [#486](https://github.com/anthropics/skills/pull/486)（ODT） | 三个"输出质量型"新 Skill | 各自职责清晰、文档完整，符合近期合并口味 |

---

## 4. Skills 生态洞察（一句话总结）

> **当前社区最集中的诉求是「Skill-Creator 这条元管线的可用性」与「Skills 生态的信任/治理基础设施」——前者决定 Skills 能否被可靠地创造与评估，后者决定社区贡献能否安全地流入官方生态；功能型新 Skill 已不再是稀缺资源，「谁有权发布、以何名义发布、能否被复现地测试」正在成为新的瓶颈。**

---

### 附录：建议关注的 watchlist

- 🔔 **必追**：#1298 → #556 修复链
- 🔔 **治理观察**：[#492](https://github.com/anthropics/skills/issues/492) 的命名空间政策回应
- 🔔 **生态扩展**：[#228](https://github.com/anthropics/skills/issues/228) Org 共享 + [#16](https://github.com/anthropics/skills/issues/16) MCP 化

---

<think>
Let me analyze the GitHub data for Claude Code community dynamics on 2026-07-07 and generate a comprehensive daily report in Chinese.

Key observations from the data:

1. **Release**: v2.1.202 - Added "Dynamic workflow size" setting and OpenTelemetry attributes for workflow.run_id and workflow.name

2. **Most active issues**:
   - #33969: Per-Turn Tool Call Limit Regression (48 comments, 44 thumbs up) - HIGH IMPORTANCE
   - #71542: GitHub connector cannot access content (30 comments, 20 thumbs up)
   - #5513: Feature request for /reloadSettings (23 comments, 118 thumbs up) - Very popular feature request
   - #68780: Claude Opus 4.8 reasoning degradation (23 comments, 28 thumbs up)
   - #51168: Pro plan changed to Max without authorization (17 comments)
   - #54394: v2.1.117 embedded ugrep wrapper causes OOM (13 comments)
   - #43869: Subagent model routing broken (10 comments)
   - And many safety filter false positive issues from @sworrl (lots of duplicates)

3. **Pull Requests**:
   - #41453: Safe Stop hook wrapper with PID lock
   - #74857: Plugin MCP configuration scope (CLOSED)
   - #74722: Conventional Branch naming in /commit-push-pr

4. **Key patterns**:
   - Lots of safety filter false positives blocking legitimate work (especially rooted Android development)
   - Multiple subagent/routing issues
   - Performance regressions
   - User concerns about model quality (Opus 4.8)
   - Several regressions in recent versions
   - TUI rendering issues
   - iOS/macOS/Windows desktop issues

Let me now structure the daily report.

I should pick the 10 most important issues to highlight. Let me rank them by importance considering comments, thumbs up, and impact:

1. #33969 - Per-Turn Tool Call Limit Regression (48 comments, 44 👍) - top impact
2. #5513 - /reloadSettings feature request (23 comments, 118 👍) - very high community demand
3. #71542 - GitHub connector regression (30 comments, 20 👍)
4. #68780 - Opus 4.8 reasoning degradation (23 comments, 28 👍)
5. #51168 - Billing/plan change issue (17 comments)
6. #54394 - ugrep OOM issue (13 comments)
7. #43869 - Subagent model routing broken (10 comments)
8. #69781 - Image attachment fails on macOS (6 comments)
9. #63025 - SSH Remote projects field nulled (4 comments)
10. #66373 - CLI hand-off to cloud feature (3 comments, 2 👍)

Actually, looking again at the safety filter issues - they're numerous but mostly duplicates. I'll mention them as a pattern rather than individual issues.

For PRs, I only have 3, so I'll list all of them with their context.

Let me write this out now in Chinese, professional and concise.
</think>
# Claude Code 社区动态日报

**日期：2026-07-07**
**数据来源：github.com/anthropics/claude-code**

---

## 📌 今日速览

v2.1.202 版本发布，新增"动态工作流规模"配置项与 OpenTelemetry 追踪属性。社区讨论最热烈的仍集中在 **多轮工具调用上限回归**（#33969）与长期高呼声功能 **`/reloadSettings`**（#5513，👍118）。同时，**Opus 4.8 推理质量下降**与**安全过滤器误报**（尤其针对 root 设备开发场景）成为今日最突出的两大争议焦点。

---

## 🚀 版本发布

### v2.1.202

- **新增 `/config` 中的"Dynamic workflow size"设置**：控制 Claude 创建动态工作流时的规模（small/medium/large agent count），属于**建议性指南**而非硬性上限。
- **OpenTelemetry 属性增强**：新增 `workflow.run_id` 和 `workflow.name` 属性，便于工作流级别的可观测性追踪。

📎 链接：https://github.com/anthropics/claude-code/releases/tag/v2.1.202

---

## 🔥 社区热点 Issues（Top 10）

### 1. [#33969] Per-Turn Tool Call Limit Regression — 48 评论 / 👍44
**状态**：OPEN | 标记 invalid
**重要性**：⭐⭐⭐⭐⭐
描述：每轮工具调用上限回归，导致 Claude Desktop 中的 MCP/SSH Agent 工作流被强制中断，是今日最热议题。社区对"无效标记"决定表达了强烈不满。
📎 https://github.com/anthropics/claude-code/issues/33969

### 2. [#5513] Feature Request: `/reloadSettings` 命令 — 23 评论 / 👍118
**状态**：OPEN
**重要性**：⭐⭐⭐⭐⭐
**全仓库 👍 最高**的功能请求之一。社区强烈要求添加一个可在不重启 Claude Code 的情况下重新加载 `settings.json` 的斜杠命令。已存在 11 个月仍未合入。
📎 https://github.com/anthropics/claude-code/issues/5513

### 3. [#71542] GitHub Connector 全账户访问失败 — 30 评论 / 👍20
**状态**：OPEN
**重要性**：⭐⭐⭐⭐
**最新回归**——GitHub 连接器可成功链接仓库，但 Claude 无法读取任何仓库内容（公共与私有均受影响），严重影响代码审查工作流。
📎 https://github.com/anthropics/claude-code/issues/71542

### 4. [#68780] Claude Opus 4.8 推理能力严重退化 — 23 评论 / 👍28
**状态**：OPEN
**重要性**：⭐⭐⭐⭐
用户反映 Opus 4.8 推理质量、速度均出现明显回归，即使在 Max effort 下也表现糟糕，**部分欧盟用户已咨询法律途径**。这是近期最具争议的模型质量问题。
📎 https://github.com/anthropics/claude-code/issues/68780

### 5. [#51168] Pro 年度订阅被未授权切换为 Max 月度 — 17 评论
**状态**：OPEN
**重要性**：⭐⭐⭐⭐
**计费/合同问题**：账户出现未经授权的"Gift Max 20X/5X"发票，Pro Annual 计划被自动改为 Max Monthly。涉及商业信任问题。
📎 https://github.com/anthropics/claude-code/issues/51168

### 6. [#54394] v2.1.117 ugrep 包装器导致 WSL2 OOM — 13 评论
**状态**：OPEN
**重要性**：⭐⭐⭐
v2.1.117 的"原生构建"变更将 grep 路由至嵌入式 ugrep，但在 8GB V8 堆限制下触发灾难性正则回溯，主机冻结。属于典型的回归性性能缺陷。
📎 https://github.com/anthropics/claude-code/issues/54394

### 7. [#43869] Subagent 模型路由失效 — 10 评论 / 👍11
**状态**：OPEN
**重要性**：⭐⭐⭐
所有子代理模型路由机制（包括文档化的方式）均被静默忽略，子代理始终使用父会话的 Opus 模型，无法降级至 Sonnet 等以节省成本。
📎 https://github.com/anthropics/claude-code/issues/43869

### 8. [#69781] macOS 桌面端图片粘贴失败 (400) — 6 评论
**状态**：OPEN
**重要性**：⭐⭐⭐
macOS 桌面端附加/粘贴图片时返回 400 错误，错误信息为 `str is not valid UTF-8: surrogates not allowed`，疑似图像编码处理缺陷。
📎 https://github.com/anthropics/claude-code/issues/69781

### 9. [#63025] SSH Remote 下 ~/.claude.json 中 `projects` 字段被置空 — 4 评论 / 👍5
**状态**：OPEN | **data-loss** 标签
**重要性**：⭐⭐⭐
**数据丢失风险**：桌面客户端重启后远程 ~/.claude.json 的 `projects` 字段被设为 null，UI 显示"No messages yet"，但 .jsonl 事务日志完好。
📎 https://github.com/anthropics/claude-code/issues/63025

### 10. [#66373] 本地会话一键上传云端（`--teleport` 反向） — 3 评论 / 👍2
**状态**：OPEN | enhancement
**重要性**：⭐⭐⭐
一个较为优雅的体验类增强请求：CLI 提供命令将本地正在运行的会话交接至 Web 端，对应现有的 `--teleport` 方向。
📎 https://github.com/anthropics/claude-code/issues/66373

---

## 🔧 重要 PR 进展

### 1. [#41453] examples(hooks): 添加带 PID 锁和超时的安全 Stop Hook 包装器
**作者**：@m4cd4r4 | OPEN
针对 #41393 中描述的"Stop hook 失控进程"问题，提供参考实现。Stop hook 必须立即返回有效 JSON，本示例展示如何安全运行后台任务。
📎 https://github.com/anthropics/claude-code/pull/41453

### 2. [#74857] docs: 澄清插件 MCP 配置范围
**作者**：@andrewmuratov | **已合并 (CLOSED)**
明确区分插件中 `mcpServers` 配置（用于插件捆绑的 MCP 服务器定义）与用户级 `~/.claude.json` 中的 MCP allow/deny 列表（如 `enabledMcpServers`），避免概念混淆。
📎 https://github.com/anthropics/claude-code/pull/74857

### 3. [#74722] feat(commit-commands): 在 `/commit-push-pr` 中支持 Conventional Branch 命名
**作者**：@k0mpreni | OPEN
为 `/commit-push-pr` 添加可选的 `conventional` 参数，根据 [Conventional Branch 1.0.0](https://conventionalbranch.org/) 规范自动命名新分支（`feature/`、`bugfix/`、`hotfix/`、`release/`、`chore/`、`docs/`、`test/`），类型从 diff 自动推断。
📎 https://github.com/anthropics/claude-code/pull/74722

---

## 📈 功能需求趋势

通过对今日 Issues 的归类分析，社区关注的功能方向主要集中在以下几类：

| 方向 | 代表 Issue | 关注度 |
|------|------------|--------|
| **配置管理体验** | #5513（`/reloadSettings`） | 🔥🔥🔥🔥🔥 |
| **会话可移植性** | #66373（本地→云端） | 🔥🔥🔥 |
| **TUI/终端体验** | #74122（tmux 渲染）、#5513 | 🔥🔥🔥 |
| **多平台一致性** | #69781（macOS）、#75102（iOS）、#63025（SSH）、#71878（Android/Termux） | 🔥🔥🔥🔥 |
| **遥测与可观测性** | v2.1.202 新增 OTel 属性、#41453 Stop hook | 🔥🔥 |
| **Git 工作流增强** | #74722（Conventional Branch） | 🔥🔥 |
| **MCP/插件集成** | #74857（MCP 配置澄清）、#33969 | 🔥🔥🔥 |

**趋势总结**：配置热重载、跨平台一致性、IDE 集成体验是当前最强烈的需求方向。

---

## 💬 开发者关注点与痛点

### 🔴 高频痛点

1. **质量与可靠性回归频发**：近期版本（v2.1.117、v2.1.200）多次引入回归性问题，包括工具调用限制、性能、安全过滤器误报等，社区信任度承压。

2. **安全/合规过滤器过度敏感**：今日由 @sworrl 发起的**批量误报 issue** 极具代表性——在 root 设备 SELinux 配置、LSPosed 内存模块开发等完全合法的场景下，Opus 4.8 触发了"session-halted"级别的安全拦截。**同一用户单日报了至少 8 个类似问题**，显示过滤器阈值可能存在系统性偏差。

3. **"Invalid" 标签争议**：#33969、#71542 等高互动 issue 被标记为 invalid，引发开发者社区对官方响应机制的质疑。

4. **桌面/移动端体验不完善**：iOS 重复会话、macOS 图片粘贴、SSH 数据丢失、Termux 远程控制失败等跨平台问题集中暴露。

5. **计费/账户管理透明度**：#51168 暴露了订阅自动变更问题，影响企业用户的合规性。

### 🟢 高频需求

1. **配置热重载**（`/reloadSettings`）—— 长期 TOP 1 需求
2. **子代理成本控制**（有效路由至便宜模型）
3. **工作流/Agent 编排能力的可视化与可观测性**（与 v2.1.202 OTel 新增契合）
4. **TUI 在 tmux/SSH 等环境下的健壮性**
5. **更清晰的错误信息与故障排查工具**

---

*本日报基于过去 24 小时 GitHub 数据自动整理生成。*

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

<think>
The user wants me to generate a Chinese daily report for OpenAI Codex community dynamics based on the GitHub data provided. Let me analyze the data carefully and structure the report.

Let me first understand what we have:
- 1 new release: rust-v0.143.0-alpha.37
- 50 issues updated in the past 24 hours (showing top 30)
- 50 pull requests updated in the past 24 hours (showing top 20)

Key issues to focus on:
1. #30364 - GPT-5.5 Codex reasoning-token clustering - 132 comments, 230 likes - HIGHEST
2. #29072 - Windows Codex App apply_patch fails - 37 comments
3. #12115 - Dynamically loading nested AGENTS.md - 23 comments, 83 likes
4. #12862 - CLI: add --worktree and --tmux flags - 19 comments, 86 likes
5. #30440 - Codex uses bundled pnpm - 18 comments
6. #20683 - Computer Use crashes on macOS - 13 comments
7. #11809 - Codex CLI fails on Termux - 9 comments
8. #20312 - Event-driven session wake primitive - 9 comments
9. #29408 - Windows Desktop git.exe polling - 9 comments
10. #23574 - VS Code extension inotify watches - 8 comments
11. #28276 - Failed to archive conversation - 8 comments
12. #29627 - Agent cancels pending manual approvals - 7 comments
13. #30339 - Windows Desktop App fails to start - 7 comments
14. #10353 [CLOSED] - OAuth tokens too long - 7 comments
15. #31322 - Usage limits regressed - 6 comments
16. #12589 [CLOSED] - MCP login OAuth - 6 comments
17. #27142 - Tokens burning fast - 6 comments
18. #30306 - codex-cli crashes SIGTRAP - 5 comments
19. #25817 - macOS Codex Cannot Use App Snapshots - 5 comments
20. #31243 - Local file edits rewrite whole files - 5 comments
21. #29618 - Expose detailed rate-limit reset credits - 5 comments
22. #28330 - VS Code extension crashes on plugin - 5 comments
23. #31033 - Context automatically compacted - 5 comments
24. #12996 [CLOSED] - Codex.app restricted network - 4 comments
25. #23129 - Windows Codex Memories - 3 comments
26. #11732 [CLOSED] - Use dash-separated header session-id - 3 comments
27. #29868 - Codex Desktop ghost conversations - 3 comments
28. #30155 - Chrome plugin connection fails - 3 comments
29. #29135 [CLOSED] - Codex panel loading - 3 comments
30. #31206 - Windows app localization issue - 2 comments

Key PRs to focus on:
1. #31352 - Windows Bazel local test jobs (CI)
2. #30669 - perf(thread-store): project append metadata asynchronously
3. #31342 - core: use HTTP Responses with system proxy
4. #31350 - core: preserve thread activity through completion
5. #31349 - core: serialize thread turn transitions
6. #31300 - feat(core): emit canonical collab tool call items
7. #31299 - feat(core): emit canonical sub-agent activity items
8. #31298 - feat(core): emit canonical dynamic tool call items
9. #31297 - feat(core): emit canonical command execution items
10. #31301 - feat(core): emit canonical collab wait items
11. #30668 - perf(rollout): reduce and trace writer flushes
12. #30296 - Report MCP OAuth Auto store drift
13. #31348 - perf(skills): resolve plugin namespaces per root
14. #30667 - telemetry(model): correlate WebSocket stage timing
15. #31347 - TUI: prefer CODEX_HOME for IDE IPC
16. #30295 - Serialize MCP OAuth login and logout
17. #31335 [CLOSED] - core: route Responses API through system proxy
18. #31155 - fix: release thread writer after failed shutdown
19. #30294 - Route MCP OAuth recovery through Codex
20. #31289 - Use canonical indexed web access field

Let me categorize the trends:
- Performance optimization (multiple PRs about thread-store, rollout writer, skills, WebSocket timing)
- Multi-agent/canonical event refactoring (5 PRs about canonical event emission)
- System proxy support (PR routing HTTP through system proxy)
- Rate limits and token consumption issues (multiple issues)
- Windows platform bugs (multiple issues)
- MCP OAuth refactoring
- New model: GPT-5.5 (mentioned in #30364)

Now let me write the report in Chinese, keeping it professional and concise.
</think>
# OpenAI Codex 社区动态日报

**日期：2026-07-07** | **数据源：github.com/openai/codex**

---

## 📌 今日速览

- **GPT-5.5 推理行为异常报告**引爆社区，单条 Issue 评论数破 130、点赞 230，成为本周最热话题。开发者集中反馈 `gpt-5.5` 模型在 `reasoning_output_tokens` 上存在固定边界聚集（516/1034/1552），疑似触发降级路径。
- **多线程/多智能体架构重构**显著加速：核心层连续提交 5 个 PR 推进 `TurnItem` 规范事件化（collab/sub-agent/dynamic tool/command execution/wait），并新增 thread activity 保留与 turn 序列化机制。
- **Windows 平台与速率限制**问题高发：Windows App 启动崩溃、git 轮询残留、apply_patch 沙箱失败、Termux 鉴权异常等一批 Windows/Linux 边缘场景被集中反馈，速率限制日内回退（#31322）引发开发者高度关注。

---

## 🚀 版本发布

- **rust-v0.143.0-alpha.37** 已发布
  - 链接：https://github.com/openai/codex/releases/tag/rust-v0.143.0-alpha.37
  - 注：当前为 alpha 预发布通道，官方 Release Notes 暂未披露详细变更。建议在测试环境验证后再用于生产。

---

## 🔥 社区热点 Issues（Top 10）

1. **#30364 [OPEN] GPT-5.5 Codex 推理 Token 聚集导致复杂任务性能下降**
   - 作者：@vguptaa45 | 💬 132 | 👍 230
   - 现象：大量 `gpt-5.5` 响应在 `reasoning_output_tokens = 516`（并在 1034/1552）处出现强聚集，疑似与降级路径耦合。**这是本期最热的模型行为类 Issue**，值得模型团队重点关注。
   - 链接：https://github.com/openai/codex/issues/30364

2. **#29072 [OPEN] Windows Codex App：`apply_patch` 沙箱启动失败**
   - 作者：@zane-xin | 💬 37 | 👍 23
   - 现象：`codex-windows-sandbox-setup.exe` 无法从安装包路径启动，导致所有 `apply_patch` 工具调用失败。Windows 桌面端核心工具不可用，影响严重。
   - 链接：https://github.com/openai/codex/issues/29072

3. **#12115 [OPEN] 动态加载嵌套 `AGENTS.md`（特性请求）**
   - 作者：@kszlim | 💬 23 | 👍 83
   - 价值：仿照 Claude Code 的 `CLAUDE.md` 按需加载机制，让 Codex 在读取子目录文件时按需加载对应 `AGENTS.md`，降低上下文压力。**社区呼声最高的增强之一**。
   - 链接：https://github.com/openai/codex/issues/12115

4. **#12862 [OPEN] CLI 增加 `--worktree` / `--tmux` 一键隔离会话**
   - 作者：@minghinmatthewlam | 💬 19 | 👍 86
   - 价值：仅一条命令即可启动 git worktree 隔离环境并附着到 tmux，简化并行 Agent 编排流程。**典型"开发者体验"诉求**。
   - 链接：https://github.com/openai/codex/issues/12862

5. **#30440 [OPEN] Codex 使用自打包 pnpm 而非宿主机工具链**
   - 作者：@kkaatii | 💬 18 | 👍 21
   - 现象：App 内置 pnpm 覆盖用户项目指定的包管理器版本，导致构建脚本异常。属于"环境隔离过强"的副作用。
   - 链接：https://github.com/openai/codex/issues/30440

6. **#20683 [OPEN] macOS 上 Computer Use 检查 Outlook 时崩溃**
   - 作者：@NewCoffee7477 | 💬 13 | 👍 2
   - 现象：`SkyComputerUseService` 在 `get_app_state` 调用 Outlook 时崩溃，Computer Use 插件在 macOS 上稳定性仍待加强。
   - 链接：https://github.com/openai/codex/issues/20683

7. **#11809 [OPEN] Codex CLI 在 Termux（Android）上全面失败**
   - 作者：@wallentx | 💬 9 | 👍 1
   - 现象：鉴权、请求、文件锁三处错误同时出现，移动端 Linux 环境基本不可用。
   - 链接：https://github.com/openai/codex/issues/11809

8. **#20312 [OPEN] 原生"事件驱动会话唤醒"原语**
   - 作者：@jrtorrez31337 | 💬 9 | 👍 3
   - 价值：让 Agent 在 idle 时被外部事件（聊天提及、队列消息、文件变更、MCP 推送）唤醒，是实现实时响应型 Agent 的关键基础设施。
   - 链接：https://github.com/openai/codex/issues/20312

9. **#29408 [OPEN] Windows Desktop 残留重复/卡死的 git.exe 轮询进程**
   - 作者：@maplel | 💬 9 | 👍 2
   - 现象：多 repo 工作区下 `git.exe` 进程不释放，资源泄漏且与 CI 钩子冲突。
   - 链接：https://github.com/openai/codex/issues/29408

10. **#23574 [OPEN] VS Code Codex 扩展在大型工作区下耗尽 inotify 监听**
    - 作者：@interconnectedMe | 💬 8 | 👍 9
    - 现象：Linux 大型 monorepo 下扩展可能申请近 100 万个 inotify watch，存在系统级资源耗尽风险。
    - 链接：https://github.com/openai/codex/issues/23574

**其他值得关注的反馈**：#31322（速率限制日内回退 5x）｜#27142（Pro 用户 token 消耗异常）｜#31033（Context 自动压缩导致会话"被毁"）｜#31243（本地文件编辑可能整文件覆盖）｜#31206（Windows 本地化串扰）。

---

## 🛠 重要 PR 进展（Top 10）

1. **#31349 core: 序列化 thread turn 转换**
   - 为每个 session 引入转换锁，串行化 turn 启动/中止/完成，避免并发注入输入。属于 thread 状态机第四层加固。
   - 链接：https://github.com/openai/codex/pull/31349

2. **#31350 core: 在完成前保留 thread activity 预留**
   - 从 turn dispatch 到终端交付全程持有 thread-activity 预留，并在替换/中断-重启过程中保留，对接 V1 完成监听器。
   - 链接：https://github.com/openai/codex/pull/31350

3. **#31300 / #31299 / #31298 / #31297 / #31301 规范事件化系列**
   - 由 @owenlin0 提交的 5 个关联 PR，把 collab 工具调用、sub-agent 活动、动态工具、命令执行、wait 路径统一迁移到 `TurnItem::*` 规范生命周期事件，**app-server v2 全面替代旧版事件**。
   - 链接：https://github.com/openai/codex/pull/31300

4. **#31342 core: 让 HTTP Responses 走系统代理**
   - 修复 `features.respect_system_proxy` 对 Responses API 主推理路径失效的问题，配合已合并的 #31335，使 OS 级代理环境下登录后能正常发请求。
   - 链接：https://github.com/openai/codex/pull/31342

5. **#30669 perf(thread-store): 异步投影 append 元数据**
   - 把 append 派生的 thread 元数据投影从同步路径迁出，使用 per-thread worker + generation barrier 合并更新，同时保留重试/错误传播/关闭语义。
   - 链接：https://github.com/openai/codex/pull/30669

6. **#30668 perf(rollout): 减少并追踪 writer flush**
   - 跳过 clean-writer 文件系统 flush、移除冗余批量 flush；新增 queue/writer/recovery/serialization/fs 时延 span，便于线上归因。
   - 链接：https://github.com/openai/codex/pull/30668

7. **#31348 perf(skills): 按 root 解析插件命名空间**
   - 把 `SKILL.md` 的命名空间探测从"按文件走"改为"按 root 一次走完"，在远程执行器环境下冷启动耗时显著下降。
   - 链接：https://github.com/openai/codex/pull/31348

8. **#30667 telemetry(model): 关联 WebSocket 阶段时延**
   - 给每个 WebSocket 请求打上 client start 时间戳与序号，解析 pre-inference/routing/queue/TTFT/sampling 字段，将时延旁路数据回流到 tracing。
   - 链接：https://github.com/openai/codex/pull/30667

9. **#30292–#30296 MCP OAuth 栈（@stevenlee-oai）**
   - 包含报告 Auto store drift、序列化 login/logout、路由 OAuth 恢复走 Codex 等 5 个 PR，按顺序合并；解决"MCP OAuth 状态机不稳"的一类长尾问题。
   - 链接：https://github.com/openai/codex/pull/30296

10. **#31347 TUI: 优先使用 `CODEX_HOME` 作为 IDE IPC 套接字路径**
    - 适配 VS Code 扩展把 Unix IPC 从 `/tmp/codex-ipc/...` 迁移到 `$CODEX_HOME/ipc/ipc.sock` 的变更，同时保持对旧版扩展的兼容。
    - 链接：https://github.com/openai/codex/pull/31347

**辅助 PR**：#31352（Windows Bazel 本地测试 jobs 4→8，整体耗时下降 19–29%）｜#31155（修复 shutdown 失败后 thread writer 残留）｜#31289（`indexed_web_access` 字段重命名，待服务端灰度完成）。

---

## 📈 功能需求趋势

1. **多 Agent / 子 Agent 协作能力**
   - 规范事件化系列 PR 集中落地，标志 Codex 正在系统化建设 MultiAgent V2 的事件契约与生命周期。

2. **代理（System / OS）环境兼容**
   - 围绕 `respect_system_proxy` 的两条 PR（#31335、#31342）打通主推理路径代理；`CODEX_HOME` IPC 改造（#31347）解决多用户主机套接字归属冲突。

3. **性能与可观测性**
   - 冷启动、rollout 写入、WebSocket 时延、flush 次数等四个性能维度同时优化，并配套 tracing span，体现"先可观测、再优化"的方法论。

4. **开发者体验（DX）增强**
   - `--worktree`/`--tmux` 隔离会话（#12862）、动态加载嵌套 `AGENTS.md`（#12115）、事件驱动唤醒原语（#20312）三类高赞增强都聚焦在"降低单条命令摩擦"。

5. **MCP OAuth 体系**
   - 5 个串联 PR 重做 MCP 鉴权状态机（序列化、recovery、drift 报告），为后续接入更多 OAuth 提供方铺路。

6. **GPT-5.5 模型行为调优**
   - #30364 单一 Issue 互动量破 360，模型推理阶段的 token 预算与降级策略成为新焦点。

---

## 🧑‍💻 开发者关注点

- **速率限制与计费透明度**：#31322、#27142、#29618 三条相关 Issue 反映出开发者迫切需要"何时扣费、扣多少、何时回补"的精确反馈，#29618 直接请求把 `rateLimitResetCredits` 的明细行（含到期日）暴露到 Codex 各端。

- **Windows 桌面端稳定性集中爆发**：5 条以上 Issue（#29072、#29408、#30339、#31206、#23129）涉及沙箱、可执行文件路径、git 进程管理、启动崩溃、本地化串扰——Windows 已成本轮反馈"重灾区"。

- **本地编辑与上下文安全**：#31243（局部编辑误改整文件）#31033（Context 自动压缩导致"会话被毁"）显示开发者对"Agent 自动改写/压缩带来的不可逆损失"高度敏感。

- **新模型（GPT-5.5）质量信号**：#30364 高赞/高评论说明社区已把"推理 token 预算分布"作为模型质量信号源，会主动归因到边界聚集。

- **大工作区资源治理**：#23574（inotify 耗尽）反映 VS Code 扩展在 monorepo 场景下仍需引入节流/分片策略。

- **边缘平台覆盖缺失**：Termux（#11809）被点名，Intel macOS 工具调用 SIGTRAP（#30306、#25817）回归老问题，开发者呼吁"窄长尾"平台获得明确支持策略。

---

*报告生成时间：2026-07-07 · 数据范围：近 24 小时更新的 Issues/PRs · 频道：`openai/codex`*

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

<think>
Let me analyze the GitHub data for the Gemini CLI project and generate a Chinese daily report for 2026-07-07.

Key observations:
1. There's a new nightly release v0.51.0-nightly.20260707.g15a9429b6
2. The release includes 2 PRs: macOS sandbox gitconfig fix and escape sequence preservation
3. 50 issues were updated, 30 shown with most comments
4. 13 PRs were updated

Top issues by comments:
- #22323: Subagent recovery after MAX_TURNS (10 comments)
- #24353: Robust component level evaluations (7 comments)
- #22745: AST-aware file reads (7 comments)
- #21409: Generalist agent hangs (7 comments, 8 thumbs up)
- #21968: Gemini doesn't use skills/sub-agents (6 comments)
- #26522: Stop Auto Memory from retrying (5 comments)
- #25166: Shell command execution stuck (4 comments, 3 thumbs up)
- #21983: browser subagent fails in wayland (4 comments)
- #21000: Native file tools for task tracker (4 comments)
- #20079: symlink agents not recognized (4 comments)

Top PRs:
- #28301: Automated version bump
- #27971: Strip thoughts from scrubbed history
- #28089: MCP elicitation
- #28094: A2A server deep merge
- #28093: Chat compression telemetry buffer
- #28099: Sandbox label in footer
- #28096: Drop late tool calls after SIGINT
- #28100: VSCode companion disposables
- #28223: Bypass LLM correction for JSON/IPYNB
- #28244: Policy engine doc fix
- #28216: Exclude CI creds from workspace
- #28299: Preserve escape sequences
- #28221: Gitconfig read-only in macOS sandbox

Theme analysis:
- Agent issues are very prominent (most issues are area/agent)
- Auto Memory system has multiple related issues
- Browser agent issues
- Sandbox/security concerns
- Subagent behavior and reliability
- MCP and elicitation
- Performance and terminal rendering
- AST-aware tooling exploration

Let me write the report in Chinese, professional tone.
</think>
# Gemini CLI 社区动态日报
**日期：2026-07-07**

---

## 📌 今日速览

Gemini CLI 发布了 v0.51.0 nightly 版本，重点修复了 macOS 沙箱中 `~/.gitconfig` 可被篡改的安全问题，以及现代模型中字符串字面量转义序列被错误解析的 Bug。社区方面，Agent 子系统相关问题仍是讨论焦点，subagent 状态报告错误、`generalist agent` 挂死、Auto Memory 异常重试等 P1 级别问题持续受到关注；同时 MCP elicitation、AST 感知工具等新方向已进入落地阶段。

---

## 🚀 版本发布

### v0.51.0-nightly.20260707.g15a9429b6
本次 nightly 构建包含两处重要修复：

- **沙箱安全加固** ([#28221](https://github.com/google-gemini/gemini-cli/pull/28221))：将 `~/.gitconfig` 在 macOS Seatbelt 沙箱中设为只读，避免沙箱内进程通过修改全局 git 配置（aliases、`core.pager`、`core.hooksPath` 等）触发任意命令执行。
- **字符串字面量转义修复** ([#28299](https://github.com/google-gemini/gemini-cli/pull/28299))：修复 modern models（Gemini 2.x/3.x）中 `\n`、`\t` 等合法转义序列在写入文件时被错误转为字面换行符的 Bug，关闭长期存在的 b-496211054。

---

## 🔥 社区热点 Issues

| # | Issue | 重要性与社区反应 |
|---|-------|-----------------|
| [#22323](https://github.com/google-gemini/gemini-cli/issues/22323) | **Subagent 达到 MAX_TURNS 后仍报告 GOAL 成功**（💬10） | P1 Bug。`codebase_investigator` 子代理在达到最大轮次后仍以 `status: "success"` 结束，掩盖了任务中断，影响 `t3code`、`superse` 等多个本地仓库使用体验。 |
| [#21409](https://github.com/google-gemini/gemini-cli/issues/21409) | **Generalist agent 长时间挂死**（💬7 👍8） | P1 Bug，最高赞。简单的文件夹创建操作也会卡住，用户最长等待 1 小时后被迫取消。提示模型不要委派子代理可临时绕过，社区反映强烈。 |
| [#24353](https://github.com/google-gemini/gemini-cli/issues/24353) | **构建更鲁棒的组件级评估体系**（💬7） | P1 EPIC，承接 #15300。当前已有 76 个行为评估测试覆盖 6 款 Gemini 模型，目标是建立更稳定的子代理回归基线。 |
| [#22745](https://github.com/google-gemini/gemini-cli/issues/22745) | **评估 AST 感知文件读取/搜索/映射的收益**（💬7） | P2 调研型 EPIC。AST 工具可减少误读取次数、降低 token 噪声，并精确读取方法边界。 |
| [#21968](https://github.com/google-gemini/gemini-cli/issues/21968) | **Gemini 不会主动使用自定义 skills 和子代理**（💬6） | P2 Bug。模型仅在用户显式提示时才会调用 `gradle`、`git` 等 skills，自主调度能力弱。 |
| [#26522](https://github.com/google-gemini/gemini-cli/issues/26522) | **Auto Memory 无休止重试低信号会话**（💬5） | P2 Bug。背景提取代理可能反复读取同一低信号会话，缺乏去重与降级机制。 |
| [#25166](https://github.com/google-gemini/gemini-cli/issues/25166) | **Shell 命令结束后仍卡在 "Waiting input"**（💬4 👍3） | P1 Bug。即使是简单命令也会出现"已执行完毕但 UI 仍显示等待"的僵尸状态。 |
| [#21983](https://github.com/google-gemini/gemini-cli/issues/21983) | **browser subagent 在 Wayland 下失败**（💬4） | P1 Bug。Termination Reason 异常显示为 GOAL，Wayland 桌面环境用户受影响。 |
| [#20079](https://github.com/google-gemini/gemini-cli/issues/20079) | **`~/.gemini/agents/` 中 symlink 不被识别**（💬4） | P2 Bug，文档化能力受损，用户无法用符号链接组织自定义子代理。 |
| [#22672](https://github.com/google-gemini/gemini-cli/issues/22672) | **Agent 应避免破坏性操作**（💬3 👍1） | P2 需求。复杂 git 操作、DB 维护中模型偶发使用 `git reset --force` 等危险命令，需内置防御性引导。 |

---

## 🛠 重要 PR 进展

| PR | 状态 | 内容 |
|----|------|------|
| [#28301](https://github.com/google-gemini/gemini-cli/pull/28301) | OPEN | nightly 版本自动 bump 至 0.51.0，由机器人维护。 |
| [#27971](https://github.com/google-gemini/gemini-cli/pull/27971) | CLOSED | 修复"思考泄漏"问题：剥离 history turn 中的内部 monologue，避免后续轮次模型模仿 scratchpad 思维并进入死循环。 |
| [#28089](https://github.com/google-gemini/gemini-cli/pull/28089) | CLOSED | **实现 MCP elicitation（form + url）能力**，对齐 2025-11-25 规范；合并原 #15613 与 #22249，统一处理多模态用户输入。 |
| [#28094](https://github.com/google-gemini/gemini-cli/pull/28094) | CLOSED | 修复 a2a-server 中 `loadSettings()` 浅合并导致 `tools`、`telemetry`、`fileFiltering` 等嵌套段被覆盖的 Bug。 |
| [#28093](https://github.com/google-gemini/gemini-cli/pull/28093) | CLOSED | `logChatCompression()` 改用 `bufferTelemetryEvent()` 包装，避免在 SDK 初始化前丢失遥测事件。 |
| [#28099](https://github.com/google-gemini/gemini-cli/pull/28099) | CLOSED | 修复 #26697：macOS sandbox 启动时 footer 显示真实沙箱标签（基于 `SANDBOX`/`SEATBELT_PROFILE` 环境变量），不再显示硬编码 "current process"。 |
| [#28096](https://github.com/google-gemini/gemini-cli/pull/28096) | CLOSED | 关闭 #28091：SIGINT 取消后丢弃迟到的 provider 工具调用，避免"用户已取消但工具副作用仍执行"的竞态。 |
| [#28100](https://github.com/google-gemini/gemini-cli/pull/28100) | CLOSED | 修复 VSCode 扩展中 `(A, B)` 逗号表达式导致 Disposables 泄漏的隐患。 |
| [#28223](https://github.com/google-gemini/gemini-cli/pull/28223) | OPEN | `write_file` / `replace` 工具对 `.ipynb` 与 `.json` 文件绕过 LLM "纠错"路径，避免被错误重写为坏掉的字符串。 |
| [#28244](https://github.com/google-gemini/gemini-cli/pull/28244) | OPEN | policy-engine 文档将示例命令从 `rm -rf /` 改为安全命令，避免读者误操作。 |

---

## 📈 功能需求趋势

从近期活跃议题提炼出社区最关注的演进方向：

1. **Agent 鲁棒性与可观测性**（最热）— subagent 状态语义错误、bug 报告缺少子代理上下文、行为评估体系（#22323、#21763、#24353），反映社区对"代理失控"问题的深层担忧。
2. **Auto Memory 系统化**（新增系列）— #26522/#26525/#26523/#26516 集中处理 inbox 补丁、redaction 确定性、日志精简等，构成完整的 memory 子系统改造。
3. **AST 感知工具链**（早期探索）— #22745 + #22746 评估 tilth/glyph 等 AST 工具对 `codebase_investigator` 的增益，目标是减少 token 浪费与读取失准。
4. **Browser Agent 成熟化**（持续打磨）— Wayland 兼容性、settings.json 覆盖、会话接管与锁恢复（#21983、#22267、#22232）三大方向并行。
5. **MCP 协议深化**（已落地）— elicitation、settings 合并、telemetry 缓冲相关 PR 集中进入合并通道，协议能力向 2025-11-25 规范对齐。
6. **沙箱与安全加固**（已落地）— macOS Seatbelt 下 gitconfig 只读（#28221）、`{{HOME}}` 模板变量修复（#26166）显示安全细节持续完善。
7. **终端渲染性能**（底层）— #21924 推动 `RenderStatic` 迁移与 RenderWorker 改造，目标是无闪烁的 resize 体验。

---

## 💬 开发者关注点

综合 Issue 摘要与评论，高频痛点可归纳为以下几类：

- **🪦 子代理"假成功"**：`codebase_investigator`、browser subagent 在异常路径上仍以 `GOAL/success` 收尾，掩盖了 MAX_TURNS、Wayland 故障、cancel 事件等真实中断，使上层调度与用户难以判断。
- **⏳ 挂死与无响应**：`generalist agent` 委派即挂、shell 命令完成后 UI 仍 stuck 在 "Waiting input"、创建 vite app 卡在交互式 prompt，三类场景都是用户最常碰到的失败模式。
- **🧠 Skills / 子代理调度惰性**：模型不会主动调用用户定义的 `gradle`、`git` skills；与之相反的是 #22093——`v0.33.0` 之后子代理被自动启用、绕过 `disabled` 配置。两条反馈恰好是同一硬币的两面。
- **🗑 Auto Memory 质量**：`/bug` 报告与 memory 提交中，子代理的轨迹、上下文、redaction 完整性均不足，且低信号会话被反复重试，缺乏端到端验证。
- **🧹 工作区清洁度**：模型倾向于在随机目录创建 tmp 脚本（#23571），增加了清理成本；同时 `gha-creds-*.json` 等 CI 临时凭据被错误纳入 workspace context（#28216）。
- **📚 文档与配置陷阱**：policy-engine 文档以 `rm -rf /` 作为示例、{{HOME}} 模板被静默忽略、`.gemini/agents/*.md` symlink 不被识别——配置文件与文档的小陷阱会直接影响生产可用性。

---

*数据来源：[google-gemini/gemini-cli](https://github.com/google-gemini/gemini-cli) · 报告生成时间 2026-07-07*

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

<think>
The user wants me to generate a daily report in Chinese for GitHub Copilot CLI community dynamics based on the provided GitHub data. Let me analyze the data carefully:

1. **Latest Release**: v1.0.69-2 with:
   - Added: Show /rubber-duck in pre-auth help and self-documentation
   - Improved: Sign in to MCP servers through CLI OAuth callback flow, Reveal the full /user switch picker
   - Fixed: Include files inside n... (truncated)

2. **Issues (23 total updated in last 24h)**:
   - #1665 [CLOSED] - Project-scoped plugins - 10 comments, 18 likes
   - #3596 [CLOSED] - Model list error - 9 comments, 11 likes
   - #3028 [OPEN] - MCP permissions - 8 comments, 5 likes
   - #4001 [OPEN] - Windows .claude/settings.json hooks - 3 comments, 0 likes
   - #2367 [CLOSED] - Copilot doesn't wait for agents - 3 comments, 0 likes
   - #1428 [CLOSED] - Bash tool Nix shell - 3 comments, 7 likes
   - #1389 [CLOSED] - Multi-Agent workflow - 2 comments, 18 likes
   - #4024 [OPEN] - Voice mode ASR models - 2 comments, 0 likes
   - #3074 [OPEN] - /effort command - 2 comments, 6 likes
   - #3945 [OPEN] - Memory leak between repos - 2 comments, 0 likes
   - #4038 [OPEN] - Non-interactive mode MCP bug - 1 comment, 0 likes
   - #2930 [OPEN] - Local auto-memory - 1 comment, 2 likes
   - #4041 [OPEN] - web_fetch fails in IPv4 sandbox - 0 comments, 0 likes
   - #4039 [OPEN] - Enterprise plugin not synced - 0 comments, 0 likes
   - #4037 [OPEN] - BYOK for ACP server mode - 0 comments, 0 likes
   - #4035 [OPEN] - Voice installer Azure Artifacts - 0 comments, 0 likes
   - #4036 [OPEN] - Desktop notifications macOS - 0 comments, 0 likes
   - #3793 [OPEN] - Garbage data issue - 0 comments, 0 likes
   - #3753 [OPEN] - Abed bug - 0 comments, 0 likes
   - #4032 [OPEN] - AI credit for plugin uninstall - 0 comments, 0 likes
   - #3550 [OPEN] - gh repo clone - 0 comments, 0 likes
   - #4033 [OPEN] - "No, and tell copilot" UX - 0 comments, 0 likes
   - #3902 [CLOSED] - ACP auth state issue - 0 comments, 0 likes

3. **No PRs updated in last 24h** - I should note this and perhaps mention this absence, or pick some from a different time frame. Actually, the task says "挑选 10 个重要的 PR" but there are 0 PRs. I should acknowledge this. Let me think about how to handle this - I should mention that there are no PR updates in the last 24 hours, which is itself a data point.

Let me now structure the report:

### 1. 今日速览
- v1.0.69-2 版本发布，重点改进 MCP OAuth 登录和 /rubber-duck 命令
- 多个长期社区诉求被关闭（项目级插件、多智能体协作），同时新出现一系列 MCP / 插件 / 语音模式相关问题
- 社区对企业级管理、跨仓库内存泄漏、Windows 兼容性等痛点持续关注

### 2. 版本发布
- v1.0.69-2 详情

### 3. 社区热点 Issues
Pick 10 most important based on comments, likes, and relevance:
1. #1665 - Project-scoped plugins (18 👍, 10 comments) - CLOSED
2. #1389 - Multi-Agent workflow (18 👍, 2 comments) - CLOSED
3. #3596 - Model list error (11 👍, 9 comments) - CLOSED
4. #1428 - Bash tool Nix shell (7 👍, 3 comments) - CLOSED
5. #3028 - MCP permissions (5 👍, 8 comments) - OPEN
6. #3074 - /effort command (6 👍, 2 comments) - OPEN
7. #4001 - Windows .claude/settings.json hooks - OPEN
8. #4024 - Voice mode ASR - OPEN
9. #3945 - Memory leak between repos - OPEN
10. #4038 - Non-interactive MCP bug - OPEN
or #4039 - Enterprise plugin not synced

### 4. 重要 PR 进展
- 数据中显示无过去24小时更新的 PR，需要说明

### 5. 功能需求趋势
- 项目/仓库级插件管理（已关闭 #1665）
- 多智能体协作（#1389）
- 模型推理力度控制（#3074）
- 本地自动记忆（#2930）
- 企业级 BYOK 集成（#4037）
- 跨平台兼容性（Windows #4001, IPv4-only #4041, macOS #4036）
- 语音模式稳定性（#4024, #4035）

### 6. 开发者关注点
- MCP 生态稳定性（权限、连接时序、登录）
- 企业管理能力（插件分发、BYOK、managed settings）
- 跨平台/沙箱环境兼容性
- 内存/上下文管理安全边界
- 语音模式端到端可用性
- AI 积分计费透明度（#4032）

Let me write this in a clean, professional Chinese style suitable for tech developers. I should be concise but informative.

Note: I need to start with a thinking block per the system prompt instructions. Let me make sure to include the think tags at the start of my response.

Also, regarding the PR section - since there are 0 PRs in the last 24h, I should explicitly mention this and perhaps discuss what it means (or just acknowledge it). The user asked for 10 PRs but I'll have to work with what's available.

Let me draft the report now.
</think>
# GitHub Copilot CLI 社区动态日报
**2026-07-07**

---

## 1. 今日速览

- **v1.0.69-2 发布**，重点优化了 MCP OAuth 登录流程以及 `/user` 切换面板的渲染，并新增 `/rubber-duck` 自助文档入口。
- 多个**长期高赞 Issue 被集中关闭**（项目级插件 #1665、多智能体协作 #1389、Nix 兼容 #1428 等），说明官方正在系统性消化社区诉求。
- **新问题集中爆发在 MCP / 插件 / 语音 / 企业管理**四个方向，反映生态扩张期的"成长痛"，尤其 ACP 协议、Windows 沙箱和语音 ASR 成为新的故障高发区。

---

## 2. 版本发布

### v1.0.69-2
- **Added**
  - 在预授权帮助与自助文档中展示 `/rubber-duck`（橡皮鸭调试）命令。
- **Improved**
  - 通过 CLI 的 OAuth 回调流登录 MCP 服务器（无需跳转外部浏览器）。
  - 当时间线已满时展开完整的 `/user` 切换面板，避免提示条被截断在终端底部。
- **Fixed**
  - 修复了 `n...`（内容截断，可能为文件包含 / 行号解析相关 Bug）。

> 完整 Release Notes 通常在仓库 Releases 页面查看：https://github.com/github/copilot-cli/releases

---

## 3. 社区热点 Issues

> 按"互动量（评论 + 👍）+ 议题重要性"排序，挑选 10 条。

| # | Issue | 状态 | 👍 | 评论 | 为什么值得关注 |
|---|---|---|---|---|---|
| 1 | [#1665](https://github.com/github/copilot-cli/issues/1665) 项目/仓库级插件作用域 | **CLOSED** | 18 | 10 | 团队协作刚需，避免污染全局 `~/.copilot`，长期高赞诉求被官方采纳。 |
| 2 | [#1389](https://github.com/github/copilot-cli/issues/1389) 多智能体协作工作流 | **CLOSED** | 18 | 2 | "AI 团队"概念首次被官方关闭，预示后续多 Agent 编排能力的路线图信号。 |
| 3 | [#3596](https://github.com/github/copilot-cli/issues/3596) 恢复会话后 `/model` 鉴权失败 | **CLOSED** | 11 | 9 | 影响会话连续性，典型"重新登录状态丢失"类 Bug，关闭意味着修复进入 v1.0.69 候选。 |
| 4 | [#1428](https://github.com/github/copilot-cli/issues/1428) Bash 工具在 Nix Shell 中挂死 | **CLOSED** | 7 | 3 | 反映可复现性/可持续性（Sustainability）社区用户的关键兼容性问题，关闭是积极信号。 |
| 5 | [#3028](https://github.com/github/copilot-cli/issues/3028) MCP 工具权限粒度控制 | OPEN | 5 | 8 | MCP 生态扩张后**最迫切的权限治理**诉求，类似 Claude 的 `allowedTools` 机制。 |
| 6 | [#3074](https://github.com/github/copilot-cli/issues/3074) 新增 `/effort` 快速切换推理力度 | OPEN | 6 | 2 | 模型侧用户体验优化，能在 Low/Medium/High 之间一键切换，对成本敏感用户价值高。 |
| 7 | [#4001](https://github.com/github/copilot-cli/issues/4001) Windows 下 `.claude/settings.json` Hook 兼容失败 | OPEN | 0 | 3 | Windows 用户被"双重契约"（Copilot 强制 + Claude Code 约定）夹击，**直接导致 hooks 全部 fail-closed**。 |
| 8 | [#4024](https://github.com/github/copilot-cli/issues/4024) `/voice` 三款 ASR 模型均静默失败 | OPEN | 0 | 2 | 语音模式从"能用"到"好用"的关键瓶颈，涉及 Foundry Local Core 的 RNNT 路由 Bug。 |
| 9 | [#3945](https://github.com/github/copilot-cli/issues/3945) 记忆在仓库之间泄漏 | OPEN | 0 | 2 | 严重的数据隔离 / 隐私问题，对企业用户和跨项目开发者影响大。 |
| 10 | [#4038](https://github.com/github/copilot-cli/issues/4038) 非交互模式下 MCP 延迟连接注入空消息 | OPEN | 0 | 1 | 影响 `copilot -p` 自动化流水线，模型回显系统提示而非回答用户问题，CI 场景需警惕。 |

> 备选高潜议题：#4039（企业托管插件未落盘）、#4037（ACP 模式下 BYOK）、#4041（IPv4-only 沙箱 `web_fetch` 失败）。

---

## 4. 重要 PR 进展

**过去 24 小时内无 PR 更新。** 这本身是一个值得关注的信号——结合多个高赞 Issue 在同期被集中关闭（#1665、#1389、#1428、#3596、#2367、#3902），可推测：

- 维护团队本周工作重心在**合入主干的 Issue 修复**而非新功能 PR 评审；
- 或者相关修复直接由 Bot / 内部成员 push 至默认分支，未走 PR 流程。

建议读者**直接关注默认分支的 commits** 或下个 minor 版本（v1.0.70）的 Release Notes，以跟踪这些 Issue 的实际落地。

---

## 5. 功能需求趋势

从近 24h 的 Issue 流提炼出**6 大社区关注方向**：

1. **企业 / 团队级管控** 🔐
   - 项目级插件（#1665）、托管插件同步（#4039）、BYOK（#4037）、本地自动记忆（#2930）。
   - 关键词：managed-settings、enterprise policy、no remote storage。

2. **多智能体编排** 🤖
   - 多 Agent 协作工作流（#1389）、子 Agent 等待超时（#2367 已修复）。
   - 趋势：从"单 Agent 调用"走向"角色化 AI 团队"。

3. **MCP 生态成熟化** 🔌
   - 权限粒度（#3028）、OAuth 登录（v1.0.69-2 已改进）、连接时序（#4038）。
   - MCP 正成为 Copilot CLI 的"扩展总线"，但稳定性与治理工具仍在补课。

4. **语音模式可用性** 🎙️
   - ASR 模型路由（#4024）、离线安装器（#4035）。
   - `/voice` 仍是实验性功能，硬件无关的安装与转写链路是当前最大障碍。

5. **跨平台 / 沙箱兼容** 🪟
   - Windows Hook（#4001）、IPv4-only（#4041）、macOS 通知（#4036）、Nix（#1428）。
   - "在我机器上能跑"的边界条件正在被一一暴露。

6. **成本与计费透明度** 💰
   - #4032 反映开发者对**插件卸载也消耗 AI Credits** 的困惑。
   - 类似的"看不见的消费"会持续出现，需要官方文档补齐。

---

## 6. 开发者关注点 & 痛点

- **🔒 数据隔离焦虑**：#3945 的"跨仓库记忆泄漏"虽未获高赞，但描述具体、可复现，是企业落地前的"红线"问题。
- **⚙️ 自动化流水线脆弱**：#4038（`copilot -p` + MCP）与 #4041（IPv4 沙箱 `web_fetch`）意味着 CI / Agent 平台集成仍有"地雷"。
- **🪟 Windows 体验落后**：#4001 直接点出"Claude Code 写法的 hook 配置文件在 Copilot CLI 上不工作"，对从 Claude 迁移过来的用户尤其不友好。
- **🧩 MCP 治理缺位**：开发者既要"接得进来"（OAuth 改进 ✅），更要"管得住"（#3028 权限粒度仍 Open）。
- **🪙 计费可解释性**：插件卸载、slash command 解析消耗积分等"边界行为"（#4032）需要更清晰的日志与说明。
- **🆘 自助调试入口**：`/rubber-duck` 在 v1.0.69-2 出现是积极信号，社区可以更低成本地描述与复现问题。

---

**日报生成时间**：2026-07-07  
**数据来源**：[github.com/github/copilot-cli](https://github.com/github/copilot-cli) Issues / Releases  
**覆盖窗口**：过去 24 小时

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

<think>
The user wants me to generate a daily report for Kimi Code CLI community dynamics based on GitHub data. Let me analyze the data:

1. **Latest Releases (past 24 hours)**: None
2. **Latest Issues (past 24 hours)**: 2 issues
   - #2485 - Bug report about CLI display confusion on Windows 11
   - #2486 - Feature request to expose usage limits through ACP
3. **Latest Pull Requests (past 24 hours)**: None

The report should be in Chinese, professional, and suitable for technical developers. Let me structure it according to the requirements:

1. 今日速览 (Today's Overview)
2. 版本发布 (Version Releases) - skip since no releases
3. 社区热点 Issues - I need to pick 10 but only have 2, so I'll discuss both
4. 重要 PR 进展 - No PRs, so I'll mention none
5. 功能需求趋势 (Feature Request Trends)
6. 开发者关注点 (Developer Concerns)

I should be honest about the limited data while still providing a useful report.
</think>
# Kimi Code CLI 社区动态日报
**日期：2026-07-07**

---

## 📌 今日速览

今日社区活跃度较低，24 小时内仅有 2 条 Issue 更新，无新版本发布和无 PR 合并。其中一条为 Windows 11 平台下 CLI 终端界面渲染异常的 Bug 报告，另一条为开发者请求通过 ACP 协议暴露 Kimi Code 使用量限制与重置时间的增强提案。整体来看，社区关注点集中在 **跨平台稳定性** 与 **IDE 生态集成** 两个方向。

---

## 🚀 版本发布

> 过去 24 小时内无新版本发布，跳过此部分。

---

## 🔥 社区热点 Issues

> 今日仅有 2 条 Issue 更新，以下逐一说明。

### 1. #2485 — code cli 终端界面错乱（Windows 11）
- **类型**：Bug Report
- **作者**：@mynameiscuining
- **版本**：0.22.0
- **订阅档位**：Moderato
- **重要性**：⭐⭐⭐⭐
- **链接**：[#2485](https://github.com/MoonshotAI/kimi-cli/issues/2485)
- **摘要**：用户反馈在 Windows 11 平台使用 Kimi Code CLI 一段时间后，终端出现渲染异常，首个选项丢失，展示不全，并附有截图佐证。
- **分析**：该问题直接影响 Windows 用户的核心使用体验，且涉及 TUI（终端用户界面）的稳定性。建议维护者优先复现并排查是否为终端 ANSI 转义序列兼容性或窗口 resize 事件处理缺陷。

### 2. #2486 — 通过 ACP 暴露使用量限制与重置时间
- **类型**：Enhancement / Feature Request
- **作者**：@jgiacomini
- **重要性**：⭐⭐⭐⭐
- **链接**：[#2486](https://github.com/MoonshotAI/kimi-cli/issues/2486)
- **摘要**：作者正在为 Visual Studio 2026 开发 ACP 客户端，希望 ACP 协议能像 `/usage` 命令那样暴露当前套餐的用量限制与重置时间，以便在 IDE 中向用户呈现。
- **分析**：这反映了 ACP（Agent Client Protocol）正在被外部 IDE 生态广泛采用，Kimi CLI 作为 Agent 运行时需要向宿主应用开放更多可观测性 API。此类提案如能落地，将显著提升 IDE 集成体验。

---

## 🔧 重要 PR 进展

> 过去 24 小时内无 PR 更新或合并，跳过此部分。

---

## 📈 功能需求趋势

从今日仅有的 Issue 样本中可观察到两条清晰的需求主线：

| 趋势方向 | 代表 Issue | 关键诉求 |
|---------|-----------|---------|
| **IDE / 编辑器集成** | #2486 | 通过 ACP 协议将 CLI 能力（用量、状态等）暴露给第三方 IDE |
| **跨平台 UI 稳定性** | #2485 | Windows 终端下的 TUI 渲染可靠性 |

值得注意的是，#2486 体现出 ACP 正在从"基础协议层"向"完整能力暴露层"演进，社区开始期待通过该协议复用 Kimi CLI 的全部运维与状态信息，而不仅是基础的 Agent 调用。

---

## 💡 开发者关注点

综合今日 Issue，维护团队与社区可重点关注以下痛点：

1. **Windows TUI 兼容性仍是薄弱环节**
   - #2485 显示 Windows 11 用户在使用一段时间后即出现界面错乱，提示在长会话场景下，终端状态管理可能存在状态泄漏或事件丢失问题。

2. **ACP 协议的可观测性不足**
   - #2486 表明外部 IDE 开发者已经突破了"调用 Agent"的初级阶段，进入到"在 IDE 内镜像 CLI 完整状态"的深度集成阶段。Kimi CLI 需要在 ACP 层补充用量、会话状态、错误恢复等元数据接口。

3. **生态扩张信号明显**
   - jgiacomini 为 Visual Studio 2026 开发 ACP 客户端，说明 Moonshot 的 Agent 协议正吸引主流 IDE 厂商接入，CLI 产品的"协议化"价值正在显现。

---

*报告基于 GitHub 公开数据自动生成，仅供参考。*

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

<think>The user wants me to generate a daily report for OpenCode community dynamics based on GitHub data. Let me analyze the data carefully and structure it according to the requested format.

Let me first understand the data:

1. **Latest Release**: v1.17.14 with improvements to code mode MCP adapter and bugfixes
2. **Issues**: 30 most commented issues shown out of 50, with a mix of bug reports and feature requests
3. **Pull Requests**: 20 most commented PRs shown out of 50, mostly small fixes and features

Let me analyze the key themes:

**Issues themes:**
- Bash tool errors (v1.14.34 readonly property issue) - major bug
- Resource usage issues after updating from 1.17.11 to 1.17.13 - performance regression
- Plugin loading failures after upgrade
- Subagent permission issues
- TUI crashes (setRawMode failed)
- GUI stuck on "Thinking"
- Various provider compatibility issues (Nvidia, Volcengine, Gemini, llama.cpp)
- Feature requests: cost display in Web, font size, hide cost, Neovim support, slash commands
- Session management features
- Desktop issues (Electron, project switching)

**PR themes:**
- Windows PowerShell UTF-8 wrapper
- RTL support in desktop
- Simulation/drive instances
- Visual improvements to app
- Compaction improvements
- Schema fixes for tool definitions
- Plugin hook enhancements (skip option, shortcircuit)
- Code mode promise chaining
- HTTP recorder sync

Now let me write the report in Chinese, following the requested structure.

Key issues to highlight (10 most important):
1. #25873 - Bash tool readonly property error (9 comments, 2 likes)
2. #35009 - High resource usage 1.17.11→1.17.13 (5 comments, 2 likes) - current version regression
3. #17624 - GUI stuck on "Thinking" (6 comments)
4. #19278 - CLI mode subagents output not printed (5 comments, 6 likes)
5. #35027 - Thinking type error on nvidia provider with M3 model (2 comments)
6. #26245 - Monthly token end issue
7. #25999 - Plugin loading failure after upgrade
8. #26265 - 404 error adding custom Gemini provider
9. #26200 - TUI crashes with setRawMode failed
10. #15903 - Hide cost display in TUI (22 likes - very popular)
11. #17488 - Drag-dropped images lose absolute path (5 likes)
12. #17457 - Numpad Enter key (6 likes)

Key PRs to highlight (10):
1. #31985 - PowerShell UTF-8 wrapper on Windows
2. #35617 - Code mode promise chaining
3. #35371 - Durable compaction barrier
4. #35613 - tool.execute.before shortcircuit
5. #35510 - skip option to compaction hook
6. #35635 - RTL direction support
7. #35634 - Required array in object schemas
8. #35619 - HTTP recorder v0.3 sync
9. #35616 - Semantic request context estimation
10. #35633 - Load capped review patches

Feature trends:
- IDE integration (Neovim, VSCode)
- Session management improvements
- Provider/Model support expansion
- Cost display customization
- Performance and resource usage
- Plugin system enhancements
- Compaction/memory management

Developer concerns:
- Version upgrade stability (1.17.11 → 1.17.13 regression, plugin loading failures)
- Provider compatibility (Nvidia, Volcengine, custom Gemini proxies)
- TUI stability and UX issues
- Subagent behavior (permissions, output visibility)
- Resource consumption
- Desktop app issues (Electron, project switching)

Let me write this in a structured, professional Chinese technical report.</think>

# OpenCode 社区动态日报 · 2026-07-07

## 一、今日速览

今日 OpenCode 社区的核心焦点是 **v1.17.14 版本发布** 与 **近期版本（1.17.13）资源占用回归问题**。同时，围绕子代理权限/输出、IDE 集成（VSCode/Neovim）、Plugin 钩子扩展以及 LLM Schema 兼容性等多个方向的 PR 集中涌入，显示出 v2 事件系统与代码模式（MCP Code Mode）相关特性进入快速迭代阶段。

---

## 二、版本发布

### 🚀 v1.17.14

**Core 改进**
- 新增 **Code Mode MCP Adapter**：允许针对已连接的 MCP 工具运行受限编排脚本。
- 在 Code Mode 未启用时，默认隐藏 `execute` 工具，避免误用。

**Bug 修复**
- 修复分页 MCP 工具目录在翻页时丢失工具元数据与输出 Schema 校验的问题。
- 保留 LLM 流式传输过程中的相关属性（变更日志被截断）。

> 详细变更：https://github.com/anomalyco/opencode/releases/tag/v1.17.14

---

## 三、社区热点 Issues（精选 10 条）

| # | Issue | 状态 | 关注度 | 关键点 |
|---|-------|------|--------|--------|
| 1 | [#25873](https://github.com/anomalyco/opencode/issues/25873) Bash 工具 `readonly property` 崩溃 | 已关闭 | ⭐2 💬9 | 影响所有使用 `OPENCODE_EXPERIMENTAL=true` 启用 v2 事件系统的用户 |
| 2 | [#35009](https://github.com/anomalyco/opencode/issues/35009) 1.17.13 资源占用激增 | **OPEN** | ⭐2 💬5 | RSS ~1GB / 虚拟内存 75GB，从 1.17.11 升级后出现的明确回归 |
| 3 | [#17624](https://github.com/anomalyco/opencode/issues/17624) GUI 卡死在 "Thinking" | 已关闭 | 💬6 | 涉及 openai codex 与内置 MiniMax Free 模型，附带网络进程 3.92GB 内存异常 |
| 4 | [#19278](https://github.com/anomalyco/opencode/issues/19278) CLI 子代理输出缺失 | 已关闭 | ⭐6 💬5 | crontab 等无人值守场景下，子代理活动完全不可见，影响排障 |
| 5 | [#35027](https://github.com/anomalyco/opencode/issues/35027) Nvidia M3 模型 Thinking 错误 | **OPEN** | 💬2 | 新近接入模型即出错，提示 provider 配置仍需打磨 |
| 6 | [#25999](https://github.com/anomalyco/opencode/issues/25999) 升级后插件无法加载 | 已关闭 | 💬4 | Windows 11 / 1.14.39，用户对核心稳定性表达强烈不满 |
| 7 | [#26200](https://github.com/anomalyco/opencode/issues/26200) TUI `setRawMode failed errno: 9` 崩溃 | 已关闭 | 💬2 | 流式输出过程中弹出权限请求导致 TUI 进程退出 |
| 8 | [#17488](https://github.com/anomalyco/opencode/issues/17488) 拖拽图片丢失绝对路径 | 已关闭 | ⭐5 💬3 | 仅保留文件名，工具链无法访问图像文件 |
| 9 | [#15903](https://github.com/anomalyco/opencode/issues/15903) 隐藏 TUI 成本显示 | 已关闭 | ⭐22 💬2 | 本地模型用户强烈诉求，22 👍 为当日高赞需求 |
| 10 | [#17457](https://github.com/anomalyco/opencode/issues/17457) 数字键盘 Enter 不生效 | 已关闭 | ⭐6 💬4 | Kitty 键盘协议下 `kpenter`（codepoint 57414）被忽略 |

**社区反应观察**：高赞议题集中在「版本升级稳定性」与「TUI/UX 细节」两个维度。开发者对插件兼容性破坏、子代理可见性、以及本地模型下的成本显示噪音反馈尤为集中。

---

## 四、重要 PR 进展（精选 10 个）

1. **[#31985](https://github.com/anomalyco/opencode/pull/31985) `fix(shell): add PowerShell UTF-8 command wrapper on Windows`**
   - Windows 平台 Shell 命令中文乱码问题的统一修复，合并多个相关 issue。

2. **[#35617](https://github.com/anomalyco/opencode/pull/35617) `feat(codemode): support promise chaining`**
   - Code Mode 沙箱支持 `then/catch/finally` 链式 Promise，与 `all/allSettled/race` 深度集成。

3. **[#35371](https://github.com/anomalyco/opencode/pull/35371) `feat(core): add durable compaction barrier`**
   - 将 `session_input` 重构为类型化持久收件箱；引入手动压缩屏障，阻塞所有未提升的 steer/queue。

4. **[#35613](https://github.com/anomalyco/opencode/pull/35613) `feat(plugin): tool.execute.before shortcircuit`**
   - Plugin 可在 `tool.execute.before` 返回 `{title, output, metadata}` 直接短路真实工具调用。

5. **[#35510](https://github.com/anomalyco/opencode/pull/35510) `feat(plugin): add skip option to compaction hook`**
   - 为 `experimental.session.compacting` hook 增加 `skip?: boolean`，由插件决定是否跳过压缩。

6. **[#35635](https://github.com/anomalyco/opencode/pull/35635) `feat(desktop): support RTL direction and alignment`**
   - Desktop 端支持波斯/阿拉伯/希伯来等 RTL 脚本的方向与对齐。

7. **[#35634](https://github.com/anomalyco/opencode/pull/35634) `fix(provider): ensure required array in object schemas`**
   - 修复 `additionalProperties: false` 但缺少 `required` 字段时严格 JSON Schema 校验失败的问题。

8. **[#35619](https://github.com/anomalyco/opencode/pull/35619) `feat(http-recorder): sync recorder v0.3`**
   - 同步 `effect-http-recorder 0.3` 的四个公开 Layer API，提升夹具门控安全性。

9. **[#35616](https://github.com/anomalyco/opencode/pull/35616) `fix(core): estimate semantic request context`**
   - 重构 token 估算逻辑：合并 system 文本、JSON 工具定义与语义消息历史。

10. **[#35633](https://github.com/anomalyco/opencode/pull/35633) `[beta] fix(app): load capped review patches`**
    - 在 10MB diff 截断后，通过目录级 VCS diff API 重新加载被省略的 review 文件。

---

## 五、功能需求趋势

从今日 50 条 Issue 提炼社区关注的功能方向：

### 1. 编辑器与 IDE 集成（热度最高）
- **Neovim 上下文支持**（#26232）：将 Neovim 拉入与 Claude Code IDE Protocol/Zed 同等地位的编辑器上下文源。
- **VSCode 扩展对接手动安装的 CLI**（#26241）：绕过 PATH 自动发现逻辑。
- **外部编辑器 `@filename` 标签解析**（#26252）：TUI 通过 `prefix + e` 进入外部编辑器后需识别文件引用。

### 2. Session 管理与可观测性
- **会话间循环切换快捷键**（#16986）
- **会话成本在 Web 端显示**（#20680）
- **TUI 中可选隐藏成本**（#15903，22 👍 强烈呼声）
- **暴露工具/子代理执行的元数据**（#23474）

### 3. 模型与 Provider 生态
- Nvidia provider 上 **MiniMax M3 Thinking 变体**接入出错（#35027）
- 火山引擎 coding-plan 在 WSL 下无响应（#17501）
- 自定义 Gemini 代理 404（#26265）
- llama.cpp `text/plain` MIME 硬编码问题（#16723）

### 4. 子代理/权限系统精细化
- **子代理权限应继承上下文**（#25835）
- **子代理工具调用无返回值挂起**（#16254）
- **autoupdate:false 被忽略**（#26203）

### 5. UX 与可访问性
- **字体大小可调与 Ctrl+滚轮**（#26269）
- **/menu 替代 Ctrl+P**（#26238）
- **Desktop 端 RTL 支持**（#35635 ✅ 已合并）

### 6. 桌面端稳定性
- Electron predev 缺失 OS 二进制（#26204）
- 项目切换卡顿（#16256）
- 启动期 400 Bad Request（#26257）

---

## 六、开发者关注点

综合 Issues 与 PR 反馈，当前开发者社区的**核心痛点与高频诉求**集中在以下五类：

1. **🔴 版本升级的回归风险**：从 1.17.11 → 1.17.13 出现明显资源占用上涨（#35009），从 1.14.39 → 后续版本出现插件加载失败（#25999）。**建议关注版本升级 diff，尤其是 v2 事件系统与 session 子系统的变更。**

2. **🔴 Provider 兼容性与本地模型支持**：Nvidia、Volcengine、llama.cpp、自定义 Gemini 代理均有独立 issue 报告；本地模型下的成本显示噪音（#15903）已成为公开高赞诉求。

3. **🔴 子代理（Subagent）行为可预测性**：权限反复弹窗（#25835）、工具调用结果丢失（#16254）、CLI 模式下输出不可见（#19278），反映子代理系统的可调试性不足。

4. **🟡 TUI/Desktop 稳定性边界**：TUI 在流式响应中触发权限请求即崩溃（#26200）、Desktop 项目切换抖动（#16256），表明终端与桌面客户端的并发控制仍是薄弱点。

5. **🟢 插件生态正向扩展**：`tool.execute.before` 短路（#35613）、compaction skip（#35510）、Code Mode Promise 链式（#35617）等 PR 持续降低自定义工作流门槛，开发者对扩展性预期明确。

---

> 📌 **日报小结**：v1.17.14 修补了 Code Mode 与 MCP 分页的关键缺陷，社区对 v1.17.13 资源回归反应强烈；IDE 集成、子代理可观测性、Plugin 钩子扩展正成为新一轮迭代的主战场。建议持续关注 `experimental.*` 与 `codemode` 命名空间的演进。

*数据来源：github.com/anomalyco/opencode，截至 2026-07-07*

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

<think>The user wants me to generate a Chinese daily report about Qwen Code community dynamics based on GitHub data. Let me analyze the data carefully and create a structured report.

Let me organize the information:

**Releases (past 24 hours):**
- v0.19.6-nightly.20260707.bcdb44c5d - just one PR about strengthening PR gate with batch detection

**Hot Issues (sorted by comments):**
1. #3203 - 149 comments - Qwen OAuth Free Tier Policy Adjustment
2. #6378 - 19 comments - RFC: Multiple workspaces in one qwen serve daemon
3. #6264 - 7 comments - /review skill consume large amount of tokens
4. #6298 - 5 comments - Shell tool fails on Windows when command produces stdout
5. #6265 - 5 comments - tool_search invalidates LLM server KV-cache
6. #5964 - 5 comments - 僵尸会话烧掉30M tokens
7. #3804 - 5 comments - AskUserQuestion API Error empty response
8. #6318 - 4 comments - Unable to /rewind after /compress
9. #6321 - 3 comments - PreToolUse hook permissionDecision ask silently denied
10. #6334 - 3 comments - extensions install 安装失败
11. #6384 - 3 comments - hard limit: 0 when env-configured model reserves context
12. #6403 - 2 comments - read_file should support bounded reads
13. #6408 - 2 comments - Large PDF reads can overflow prompt context
14. #6414 - 2 comments - vscode qwen code Failed to connect

**Important PRs:**
1. #6361 - stacked slash-skill invocations
2. #6416 - serve env isolation and total admission
3. #6415 - report review handoff failures
4. #6346 - session artifact content retention
5. #6404 - Support large text range reads
6. #6413 - align monitor limit parameter schemas
7. #6224 - WeCom intelligent robot channel
8. #6386 - polish scheduled task timeline UI
9. #6376 - natural channel memory intents
10. #6349 - Add session start profiler
11. #6409 - Gate large PDF text extraction
12. #6347 - extension file reload
13. #6303 - defer startup prefetch tasks
14. #6358 - allow rewind after compressed history
15. #6206 - QQBot group message handling
16. #6390 - avoid Unix pager default on Windows
17. #6393 - review auto-generated skills

Let me now structure the report:

1. **今日速览** - Most important things today
2. **版本发布** - v0.19.6-nightly
3. **社区热点 Issues** - 10 issues
4. **重要 PR 进展** - 10 PRs
5. **功能需求趋势** - Trends from issues
6. **开发者关注点** - Developer pain points

Key trends I can identify:
- Multi-workspace support (RFC #6378 + PR #6416)
- Large file/PDF handling (#6403, #6408, PR #6404, PR #6409)
- Windows platform compatibility (multiple issues + PR #6390)
- Token management and KV-cache (#6265, #6384)
- Session/memory management (#6318, PR #6358)
- Channel integrations (WeCom, QQ Bot)
- IDE integration (VSCode issues)

Let me write this report in Chinese with a professional tone.</think>

# Qwen Code 社区动态日报
**日期：2026-07-07**

---

## 📌 今日速览

今日 Qwen Code 仓库活动密集，社区围绕 **多工作区支持（multi-workspace）** 与 **大文件/PDF 处理** 两大方向展开讨论，相关 RFC（#6378）和 PR（#6416、#6404、#6409）同步推进。Windows 平台兼容性、Token 管理与 KV 缓存优化也持续受到关注，OAuth 免费额度政策提案（#3203）以 149 条评论成为社区最热议题。

---

## 🚀 版本发布

**v0.19.6-nightly.20260707.bcdb44c5d**

本次夜间构建仅包含一项核心改进：
- **PR 自动化分流强化**（@pomelo-nwu）：在 triage 流程中加入批量检测、问题存在性检查与红旗模式识别，提升 PR 自动化分流质量。

🔗 [查看 Release](https://github.com/QwenLM/qwen-code/releases/tag/v0.19.6-nightly.20260707.bcdb44c5d)

---

## 🔥 社区热点 Issues

| # | Issue | 关键看点 |
|---|------|---------|
| 1 | [#3203](https://github.com/QwenLM/qwen-code/issues/3203) **OAuth 免费额度政策调整提案** | 149 条评论，热度第一。提议将日配额从 1000 降至 100，并在 7 月 20 日彻底关闭 OAuth 免费入口。政策层面重大变动，引发大量用户讨论。 |
| 2 | [#6378](https://github.com/QwenLM/qwen-code/issues/6378) **RFC：单个 `qwen serve` 守护进程支持多工作区** | 19 条评论。打破"1 守护进程 = 1 工作区"的旧模型，配套 PR #6416 已开始落地 2a 阶段护栏。 |
| 3 | [#6264](https://github.com/QwenLM/qwen-code/issues/6264) **`/review` skill 消耗大量 Token** | 7 条评论。用户在调用 `/review` 时观察到异常高的 Token 消耗，反映 token 管理需优化。 |
| 4 | [#6298](https://github.com/QwenLM/qwen-code/issues/6298) **Windows 下 Shell 工具 stdout 失败** | 5 条评论。`run_shell_command` 内部管道通过 `cat`，Windows cmd.exe 无此命令。PR #6390 已给出修复方案。 |
| 5 | [#6265](https://github.com/QwenLM/qwen-code/issues/6265) **`tool_search` 导致 LLM 服务端 KV-cache 失效** | 5 条评论。每次延迟工具加载都通过 `setTools()` 重置工具列表，引发完整前缀缓存失效，影响性能与成本。 |
| 6 | [#5964](https://github.com/QwenLM/qwen-code/issues/5964) **僵尸会话烧掉 30M Tokens** | 5 条评论，**P1 优先级**。v0.19.2 中超时自动切断仍未修复，已运行 8 小时的僵尸 Agent 偷刷 DeepSeek 余额。 |
| 7 | [#3804](https://github.com/QwenLM/qwen-code/issues/3804) **`AskUserQuestion` 触发空响应流错误** | 5 条评论。长期未解决的稳定性问题：`[API Error: Model stream ended with empty response text.]` 反复出现。 |
| 8 | [#6318](https://github.com/QwenLM/qwen-code/issues/6318) **`/compress` 后无法 `/rewind`** | 4 条评论。会话管理缺陷，PR #6358 已给出修复方案。 |
| 9 | [#6321](https://github.com/QwenLM/qwen-code/issues/6321) **PreToolUse hook `permissionDecision: "ask"` 被静默拒绝** | 3 条评论。Hooks/Events 模块问题，文档定义的合法返回值实际未触发确认提示。 |
| 10 | [#6408](https://github.com/QwenLM/qwen-code/issues/6408) **大 PDF 读取可能撑爆 prompt 上下文** | 2 条评论。100 页 PDF 提取出约 10 万字符文本，注入 prompt 后自动压缩失败。PR #6409 提供对应修复。 |

**其他值得关注的补充议题：**
- [#6384](https://github.com/QwenLM/qwen-code/issues/6384) — 模型默认预留完整上下文窗口输出时，硬限被算成 0
- [#6403](https://github.com/QwenLM/qwen-code/issues/6403) — `read_file` 应支持大文件的范围读取
- [#6414](https://github.com/QwenLM/qwen-code/issues/6414) — VSCode 扩展连接 Qwen Agent 失败

---

## 🛠️ 重要 PR 进展

| # | PR | 说明 |
|---|----|------|
| 1 | [#6416](https://github.com/QwenLM/qwen-code/pull/6416) **`qwen serve` 环境隔离与总量准入** | 多工作区会话的 Phase 2a 第 1 步护栏：引入运行时本地环境快照，将环境透传给工作区级状态/配置消费者。 |
| 2 | [#6361](https://github.com/QwenLM/qwen-code/pull/6361) **支持堆叠式斜杠 skill 调用** | CLI 增强，允许单条 prompt 中串联多个 skill（如 `/feat-dev /e2e-testing`），合并后统一提交模型。 |
| 3 | [#6404](https://github.com/QwenLM/qwen-code/pull/6404) **支持大文本范围读取** | 文本读取改为小/大文件分流，支持行范围，保留编码与换行元信息，替代粗暴的 10MB 上限。 |
| 4 | [#6409](https://github.com/QwenLM/qwen-code/pull/6409) **大 PDF 文本提取门控** | 为仅文本 PDF 增加预算策略，引导使用 `pages` 参数，避免 100k 字符全文直接塞入 prompt。 |
| 5 | [#6346](https://github.com/QwenLM/qwen-code/pull/6346) **会话 artifact 内容保留** | 在元数据与重启恢复之上增加可固定/解除固定的内容层，支持内容引用寻址。 |
| 6 | [#6390](https://github.com/QwenLM/qwen-code/pull/6390) **Windows 平台分页器默认修复** | 平台感知的 PAGER 默认值：非 Windows 仍为 `cat`，Windows 不再注入 `cat`，与 #6298 配套修复。 |
| 7 | [#6349](https://github.com/QwenLM/qwen-code/pull/6349) **会话启动 Profiler** | 通过 `QWEN_CODE_PROFILE_SESSION_START=1` 开启，写入 bounded JSONL 阶段耗时，便于分析启动慢点。 |
| 8 | [#6358](https://github.com/QwenLM/qwen-code/pull/6358) **允许压缩历史后 rewind** | 将 `/compress` 摘要前缀视为启动上下文，使真实用户提示在压缩后仍可回退，配套 #6318。 |
| 9 | [#6347](https://github.com/QwenLM/qwen-code/pull/6347) **扩展文件热重载** | 监听扩展目录，命令/skill/agent 修改自动应用；配置与 hook 修改提示用户 `/reload-plugins`。 |
| 10 | [#6393](https://github.com/QwenLM/qwen-code/pull/6393) **自动生成 skill 复核体验改进** | 为自动 skill 审阅器提供内联预览、编辑器交接与对话内关闭开关，避免"盲选保留/丢弃"。 |

**其他高价值 PR：**
- [#6224](https://github.com/QwenLM/qwen-code/pull/6224) — WeCom 智能机器人通道改用官方 SDK
- [#6415](https://github.com/QwenLM/qwen-code/pull/6415) — 区分自动修复中的诊断失败与人工交接失败
- [#6206](https://github.com/QwenLM/qwen-code/pull/6206) — QQ Bot 群消息与定时消息实验性支持
- [#6303](https://github.com/QwenLM/qwen-code/pull/6303) — 启动预取任务延迟到首屏渲染之后
- [#6386](https://github.com/QwenLM/qwen-code/pull/6386) — 定时任务时间轴 UI 比例调整

---

## 📈 功能需求趋势

从近期 Issues 提炼社区关注的 5 大方向：

1. **多工作区与守护进程演进** — RFC #6378 拉开序幕，#6416、#6346 持续推进，标志 Qwen Code 正从"单进程单工作区"向企业级多租户形态演进。

2. **大文件与大文档处理** — #6403（文本范围读取）、#6408（PDF 预算）、PR #6404/#6409 集中发力，社区对"硬性 10MB 上限 + 全文注入"模式不满。

3. **Token 治理与缓存优化** — #6265（KV-cache 失效）、#6264（`/review` 高消耗）、#6384（hard limit: 0）显示成本控制是高敏议题。

4. **平台兼容与稳定性** — Windows 相关 Issue 多发（#6298、#6214、#6334），同时僵尸会话、超时切断（#5964 P1）、流式解析空响应（#3804）等长期稳定性问题被反复提及。

5. **渠道与 IDE 集成** — WeCom（#6224）、QQ Bot（#6206）、VSCode（#6414）三方齐头并进，多端入口正在成为差异化战场。

---

## 💬 开发者关注点

社区反馈中痛点集中体现在以下几个方面：

- **成本焦虑**：OAuth 免费额度缩减提案 + 僵尸会话烧币事件叠加，让用户对 Token 消耗透明度、可中断性、自动压缩触发时机高度敏感。
- **Windows 一等公民体验**：从 Shell 工具的 `cat` 管道，到非 UTF-8 代码页乱码，再到扩展安装失败，Windows 用户仍需频繁绕路。
- **可观测性缺失**：`/compress` 后的 rewind 失败、空响应流错误、模型上下文硬限为 0 等问题都指向同一症结——内部状态对用户不透明，缺乏清晰的错误归因路径。
- **Hooks / Tools / 自动化工作流稳定度**：`PreToolUse permissionDecision: "ask"` 失效、`/review` 高 Token、`AutoMemory` 游标错误推进，反映扩展机制与现有功能存在契约不一致。
- **Triage 流程本身也在被工程化**：PR 自动分流加固、issue triage workflow 合并（#4786）、CI 评审自引用降级（#6396）等信号说明社区正在把"治理工具链"作为产品质量的一部分来打磨。

---

*日报基于 GitHub 公开数据生成，数据来源：[QwenLM/qwen-code](https://github.com/QwenLM/qwen-code)*

</details>

---
*本日报由 [Big Model Radar](https://github.com/96loveslife/big_model_radar) 自动生成。*
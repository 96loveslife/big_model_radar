# AI CLI 工具社区动态日报 2026-10-13

> 生成时间: 2026-10-13 06:19 UTC | 覆盖工具: 8 个

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

<think>The user wants me to generate a horizontal comparative analysis report based on the daily updates of 8 AI CLI tools (Claude Code, OpenAI Codex, Gemini CLI, GitHub Copilot CLI, Kimi Code CLI, OpenCode, jcode, pi). Let me carefully synthesize the information provided.

Let me extract key data points from each tool's report:

**Claude Code (anthropics/claude-code)**
- 50 issues updated, 0 PRs, 0 releases
- Hot topics: auto-compaction regressions, Desktop multi-account/session management, MCP resource consumption, security/permission granularity, model routing for cost control
- Top issues: #16550 (file write permissions), #98747 (idle compaction), #89812 (Linux Desktop forced relogin)

**OpenAI Codex (openai/codex)**
- 25 PRs (mostly copyberry bot), 0 releases
- Hot topics: Windows compatibility (CUA MXC, Computer Use), At Capacity errors, TUI enhancements (closed multiple), CLI/TUI customization
- Top issues: #52407 (Windows CUA), #52394 (At Capacity), #52839 (Sol Ultrafast missing)

**Gemini CLI (google-gemini/gemini-cli)**
- 1 release: v0.65.0-nightly
- 35 PRs, 50 issues
- Hot topics: Subagent reliability, AST-aware tools, OS sandbox, terminal rendering, Browser Agent robustness
- Top issues: #22323 (Subagent MAX_TURNS), #21409 (Generalist agent hang), #19873 (OS sandbox)

**GitHub Copilot CLI (github/copilot-cli)**
- 3 releases: v1.0.97-0/-1/-2
- 0 PRs
- Hot topics: BYOK model routing, Windows enterprise deployment, Session management, MCP enterprise auth
- Top issues: #970 (macOS Gatekeeper), #5068 (Windows MCP Entra), #3808 (Claude caching)

**Kimi Code CLI**
- No activity

**OpenCode (anomalyco/opencode)**
- 0 releases, multiple PRs
- Hot topics: V1→V2 migration, AI model layer (Gemini continuation, OpenAI cache breakpoints), Plugin API, localization
- Top issues: #7602 (model failover - CLOSED), #52184 (v2 changelog missing), #54109 (custom provider)

**jcode (1jehuang/jcode)**
- 0 releases
- 35 PRs (mostly @alecuba16, @yansigit)
- 9 issues
- Hot topics: Provider extensibility, MCP batch bugs, Windows ConPTY issues, TUI enhancements, build lifecycle
- Top issues: #1803 (master CI red), #1811 (batch MCP duplicate field), #1814 (mcp_call intent forwarding)

**pi (earendil-works/pi)**
- 1 release: v1.2.0 (Per-key OpenRouter model lists)
- 14 PRs
- Hot topics: OpenRouter key filtering, Codemode 1.2.0 breaking change, Windows stability, session/tool recovery
- Top issues: #6187 (WSL Copilot login), #4180 (link click regression), #9361 (Windows shellPath)

Now I need to write a comparative analysis in Chinese with the 6 required sections. Let me think about each section carefully:

1. **生态全景** - 3-5 sentences on overall development trends
2. **各工具活跃度对比** - Table format summarizing today's activity
3. **共同关注的功能方向** - Common themes across tools
4. **差异化定位分析** - Differentiation in positioning
5. **社区热度与成熟度** - Activity and maturity assessment
6. **值得关注的趋势信号** - Industry trends

Let me organize this carefully.

For the activity table, I'll need to summarize:
| Tool | Issues | PRs | Releases | Notable activity |
|------|--------|-----|----------|------------------|

Let me count:
- Claude Code: 50 issues, 0 PRs, 0 releases
- OpenAI Codex: 30+ issues (top 30 shown out of more), 25 PRs (top 20 shown), 0 releases
- Gemini CLI: 50 issues (top 30 shown), 35 PRs (top 20 shown), 1 release (v0.65.0-nightly)
- GitHub Copilot CLI: many issues, 0 PRs, 3 releases (v1.0.97-0/-1/-2, plus v1.0.96 yesterday)
- Kimi Code CLI: no activity
- OpenCode: 50 issues (top 30 shown), multiple PRs (top 20 shown), 0 releases
- jcode: 9 issues, 35 PRs (top 20 shown), 0 releases
- pi: 30+ issues (top 30 shown), 14 PRs, 1 release (v1.2.0)

Now for common themes, I can identify:
- **MCP ecosystem maturity**: All tools now have MCP-related issues (Claude Code #63251, Gemini CLI browser agent, GitHub Copilot CLI #5068, jcode #1811/#1814)
- **Windows platform stability**: Cross-cutting pain point (Claude Code Desktop, OpenAI Codex CUA, GitHub Copilot CLI WAM, pi shellPath, jcode ConPTY)
- **Session/context management**: Auto-compaction (Claude Code), Session persistence (OpenCode V1→V2), Session recovery (pi #10785)
- **BYOK / Multi-model routing**: GitHub Copilot CLI #5127/#5126/#5103, OpenCode #7602, pi v1.2.0
- **TUI/CLI UX enhancements**: Many tools
- **Subagent/multi-agent reliability**: Gemini CLI subagent issues, OpenAI Codex (computer use)
- **Provider/Plugin extensibility**: OpenCode V2 plugins, jcode provider protocol, GitHub Copilot BYOK
- **Browser agent capabilities**: Gemini CLI browser subagent, OpenAI Codex Computer Use
- **Enterprise/Authentication integration**: GitHub Copilot CLI Windows enterprise, Claude Code Desktop multi-account

For differentiation, I can see:
- **Claude Code**: Anthropic's flagship, focused on agentic capability with auto-compaction, MCP native integration
- **OpenAI Codex**: Strong on Computer Use / TUI / Windows enterprise
- **Gemini CLI**: Google's offering, focused on Gemini 3 capabilities, strong on subagent ecosystem and AST-aware tools
- **GitHub Copilot CLI**: GitHub-native, focuses on BYOK/multi-model, enterprise deployment, hook system
- **OpenCode**: Independent/open-source, focus on plugin extensibility, model-agnostic, V2 architecture
- **jcode**: Focus on small/local model support, provider protocol extensibility
- **pi**: Focus on OpenRouter integration, multi-provider routing
- **Kimi Code CLI**: Currently inactive

For trends, key signals:
1. **MCP is becoming the de facto integration standard**, but resource consumption and lifecycle management are still immature
2. **BYOK/multi-model is essential**, but model routing remains complex
3. **Long-running sessions expose deep stability issues**: auto-compaction, context loss, session recovery
4. **Subagent orchestration is the next frontier** but reliability issues are pervasive
5. **Windows platform is becoming a critical battleground** for enterprise
6. **Provider extensibility** is becoming a key differentiator (jcode's protocol approach, OpenCode's V2 API)

Let me draft the report now. I want it to be concise, professional, data-driven.

I'll use Chinese throughout as requested. The structure follows the 6 sections required.

Let me write it now.</think>

# AI CLI 工具生态横向对比分析报告
**日期：2026-10-13**

---

## 1. 生态全景

当前 AI CLI 工具市场已从"功能竞争"进入"生态成熟度竞争"阶段：MCP 协议成为事实标准但资源治理仍粗糙，多模型路由（BYOK）与 Failover 成为标配能力但语义一致性仍是痛点，长跑会话的上下文治理（auto-compaction、session 恢复、跨 release 兼容）暴露出明显短板。各工具社区的反馈表明：**Windows 平台稳定性、Subagent 调度可靠性、Provider 插件化扩展**是当前三大共性瓶颈，差异化更多体现在与上游生态（Anthropic / OpenAI / Google / GitHub / 独立开源）的绑定深度上。

---

## 2. 各工具活跃度对比

| 工具 | Issues（活跃/Top N） | PRs | Release | 整体节奏 | 备注 |
|------|---------------------|-----|---------|----------|------|
| **Claude Code** | 50 / 30 | 0 | 0 | 🔴 Issue-only | 长跑会话压缩回归主导当日讨论 |
| **OpenAI Codex** | 30+ / 30 | 25（多为 copyberry bot） | 0 | 🟡 维护型 | 集中于 Windows CUA + Computer Use 修复 |
| **Gemini CLI** | 50 / 30 | 35 | 1（nightly） | 🟢 高活跃 | Subagent / AST 工具探索密集 |
| **GitHub Copilot CLI** | 30+ / 30 | 0 | 3（v1.0.97 系列） | 🟡 Release 集中 | BYOK + 企业部署是焦点 |
| **Kimi Code CLI** | 0 | 0 | 0 | ⚫ 静默 | 当日无活动 |
| **OpenCode** | 50 / 30 | 20+ | 0 | 🟡 V2 打磨期 | V1→V2 迁移 + 模型层重构双线 |
| **jcode** | 9 | 35 | 0 | 🟢 高 PR/Issue 比 | Provider 协议化 + TUI 双轨 |
| **pi** | 30+ / 30 | 14 | 1（v1.2.0） | 🟢 高活跃 | OpenRouter 路由 + Windows 修复 |

> **关键观察**：Gemini CLI、jcode、pi 处于"高活跃迭代"状态；Claude Code、GitHub Copilot CLI 当日集中在 Release 与 Issue，PR 通道相对安静；OpenAI Codex 出现大量 bot 自动化 PR，反映其进入"基础设施硬化期"。

---

## 3. 共同关注的功能方向

| 方向 | 代表工具 | 具体诉求 |
|------|----------|----------|
| **🤖 Subagent / 多 Agent 调度可靠性** | Gemini CLI（#22323、#21409）、OpenAI Codex（Computer Use） | Subagent 在 MAX_TURNS、Generalist 调度、Browser 子代理下的失败处理与错误归因 |
| **🪟 Windows 平台稳定性** | Claude Code（Desktop 强制重登）、OpenAI Codex（CUA MXC 0x80070003）、GitHub Copilot CLI（WAM 崩溃、MCP Entra）、pi（shellPath、resizeImage）、jcode（ConPTY、pipe listener） | 五家工具同日都有 Windows 相关 issue，是当前最高频共性痛点 |
| **🔌 MCP 生态治理** | Claude Code（#63251 懒加载、#99831 内存）、Gemini CLI（browser MCP）、GitHub Copilot CLI（MCP 2026-07-28 协议）、jcode（#1811/#1814 batch/intent） | 资源占用（10 会话 ~10GB）、协议版本、企业认证适配（Entra、Atlassian、Dataverse） |
| **🔁 BYOK / 多模型路由** | GitHub Copilot CLI（#5127、#5126、#5103）、OpenCode（#7602 Failover）、pi（v1.2.0 按 key 过滤） | 短模型名解析、内置 Agent 默认模型、子 Agent wire API 隔离、按 key 的可用模型 + 区域端点 |
| **🧠 长会话上下文治理** | Claude Code（#98747、#101067 自动压缩）、OpenCode（V1→V2 迁移）、pi（#10785 工具激活丢失、#9391 thinking 重放） | auto-compaction 阈值不稳、跨 release 会话恢复、签名块重放、图像/附件不计 context |
| **🖥️ TUI / 终端体验** | OpenAI Codex（#17879、#26311、#21850 已合并）、Gemini CLI（#29725 同步输出、#29644 resize）、jcode（#1709/#1815） | 消息样式区分、输入框钉底、Vim 默认 Insert、同步输出协议、ask_user 内联选择器 |
| **🧩 Provider / Plugin 可扩展性** | OpenCode（V2 插件 API）、jcode（#1260 版本化 provider 协议、#1270 多账号池）、GitHub Copilot CLI（BYOK + scoped hooks） | 第三方 provider 升级安全、build 身份治理、Hook 上下文合并 |

---

## 4. 差异化定位分析

| 工具 | 功能侧重 | 目标用户 | 技术路线特征 |
|------|----------|----------|--------------|
| **Claude Code** | Agentic 自主能力、auto-compaction、MCP 深度集成 | 中重度开发者、企业 Anthropic 用户 | 强绑定 Anthropic 模型，长会话 + MCP 一等公民 |
| **OpenAI Codex** | Computer Use / Desktop / TUI | Windows 桌面用户、Azure DevOps 企业 | OpenAI Provider 强绑定 + Bazel/MSVC 构建基础设施 |
| **Gemini CLI** | Gemini 3 能力释放、Subagent 生态、AST 感知工具 | 喜欢 Gemini 模型、追求代码理解深度的开发者 | Gemini 3 原生 + 探索 OS sandbox / Intent Routing |
| **GitHub Copilot CLI** | BYOK / 多模型路由、Hook 系统、企业部署 | GitHub Enterprise 用户、Microsoft 生态集成方 | 围绕 Copilot 订阅 + 跨模型透传，依赖 WAM/Entra |
| **OpenCode** | 模型无关、插件化、V2 架构 | 独立/开源派、追求 provider 自由度的开发者 | 协议下沉、V2 状态机、prompt cache 显式控制 |
| **jcode** | 小模型/本地模型友好、Provider 协议化 | 本地 Ollama / qwen3.5 4B 类用户、追求扩展性的 hacker | 进程级 provider 协议 + ask_user 内联 + build manifest 治理 |
| **pi** | OpenRouter 路由、企业部署、durability | 多 provider 重度用户、追求 session 可恢复性 | Codemode SDK + Durable 执行 + per-key 模型目录 |

> **关键差异**：Claude Code、OpenAI Codex、Gemini CLI 仍**深度绑定上游模型/平台**；OpenCode、jcode、pi 则更接近**模型无关的开源/独立路线**；GitHub Copilot CLI 居于两者之间，以 BYOK 为桥梁。

---

## 5. 社区热度与成熟度

**第一梯队（高活跃 + 高质量迭代）**
- **Gemini CLI**：50 issues + 35 PRs + 1 nightly release，社区呈"探索+落地"双轮驱动。
- **pi**：1 个版本发布 + 14 个 PR + 30+ issues，节奏快且功能方向清晰。
- **jcode**：35 个 PR 远超 issue 数（9），体现**"维护者主导、快速修复"** 的成熟开源项目特征。

**第二梯队（活跃但偏向特定问题域）**
- **GitHub Copilot CLI**：3 个 release 集中发布（v1.0.97 系列），但 PR 通道当日空白，Issue 集中在 BYOK 与企业部署。
- **OpenAI Codex**：bot 主导的 25 个 PR 显示进入**基础设施硬化期**，主线 Issue 围绕 Windows CUA 与 At Capacity 误报。
- **OpenCode**：V2 架构落地中，PR 数量适中但议题尖锐（迁移 + 安全 + 资源）。

**第三梯队（静默或集中爆发）**
- **Claude Code**：当日 0 PR + 0 Release，但 Issue 数量最大（50），且多个 Bug 涉及 auto-compaction 回归，**属于"问题集中爆发 + 修复暂未公开"阶段**，需要关注后续修复节奏。
- **Kimi Code CLI**：当日完全无活动，需要进一步观察是否进入维护停滞期。

> **成熟度信号**：bot PR 比例高（OpenAI Codex）通常意味着工具进入"长尾维护"；issue/PR 比高（Claude Code）则可能是"问题集中暴露但尚未解决"的窗口。

---

## 6. 值得关注的趋势信号

### 🔥 趋势一：MCP 从"功能"走向"治理"
多家工具同期出现 MCP 资源占用、生命周期、企业认证相关 issue，**MCP 已成事实标准但运行时尚未成熟**。对开发者的启示：在选型时需关注 MCP server 的连接策略（懒加载）、内存占用、协议版本支持，以及对企业认证（Entra、Atlassian、Dataverse）的兼容性。

### 🔥 趋势二：BYOK 不再是"加分项"而是"入场券"
GitHub Copilot CLI 三连 BYOK bug、OpenCode #7602 Failover 关闭、pi v1.2.0 按 key 过滤——**多模型路由的语义一致性已超越"是否支持"阶段，进入"如何正确路由"阶段**。开发者应警惕"短模型名解析"、"内置 Agent 默认模型"、"子 Agent wire API"三处的隐式绑定。

### 🔥 趋势三：长会话可靠性是"代理能力"的天花板
Claude Code auto-compaction 回归、OpenCode V1→V2 迁移断层、pi session 工具激活丢失——**长跑代理任务的稳定性问题，已超过模型本身能力，成为新的瓶颈**。对重度自动化用户（CI/CD agent、cron agent、scheduled task）的选型应重点评估"会话恢复机制 + 跨 release 兼容性"。

### 🔥 趋势四：Subagent 编排进入"可靠性优先"阶段
Gemini CLI 三个 Subagent 高优 Bug（#22323、#21409、#21983）显示，**多 Agent 系统的下一步不是"更多 subagent"，而是"subagent 不再静默失败"**。开发者反馈集中于：失败归因、调度意愿、终止语义——这三个底层契约。

### 🔥 趋势五：Windows 平台成为企业落地的"关键战场"
当日 5 家工具（Claude Code Desktop、OpenAI Codex CUA、GitHub Copilot CLI WAM/Entra、pi shellPath、jcode ConPTY）都有 Windows 相关 issue 集中暴露。**Windows 已不再是"兼容平台"，而是"企业落地首选项"**，签名、公证、企业 MSI 安装器、Entra/SSO 集成正在成为新的硬门槛。

### 🔥 趋势六：Provider 协议化是开源工具的护城河
jcode 的版本化外部 provider 协议（#

---

## 各工具详细报告

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills 社区热点

> 数据来源: [anthropics/skills](https://github.com/anthropics/skills)

<think>
The user wants me to analyze the GitHub data from the anthropics/skills repository and produce a community hot topics report. Let me carefully review the data provided.

Looking at the PR data, I notice that all PRs show "评论: undefined | 👍: 0" - this means the comment and like data is not available in the dataset. The PRs are listed but I can't actually rank them by comments. I should note this limitation or work with the data I have.

Looking at the Issues, I have actual comment counts:
- #492: 46 comments, 2 likes - Security: Community skills under anthropic/ namespace
- #228: 16 comments, 8 likes - Enable org-wide skill sharing in Claude.ai
- #556: 12 comments, 7 likes - run_eval.py trigger rate bug
- #62: 10 comments, 2 likes - Skills disappeared
- #1329: 9 comments, 0 likes - compact-memory skill proposal
- #202: 8 comments, 1 like - skill-creator best practice (CLOSED)
- #412: 6 comments, 0 likes - agent-governance skill (CLOSED)
- #189: 6 comments, 9 likes - duplicate skills issue
- #1385: 5 comments, 1 like - Reasoning Quality Gate Pipeline
- #1487: 4 comments, 0 likes - claude-api context window
- #1394: 4 comments, 2 likes - skill-creator XSS
- #1390: 4 comments, 0 likes - mcp-builder evaluation bug
- #1383: 4 comments, 0 likes - skill-creator silent failures
- #1352: 4 comments, 2 likes - skill-creator parallel workers
- #1175: 4 comments, 0 likes - SharePoint security (CLOSED)

Now let me structure the report. I should be honest that the PR comment data is undefined, so I'll need to work primarily with the Issues data and infer PR significance from their content/nature.

Let me organize the report:

1. **热门 Skills 排行** - Since PR comments are all undefined, I should base this on Issues mentioned in the PRs and the nature/content of PRs. Or I should note the limitation. Actually, looking more carefully, the user is asking me to "list the top 5-8 Skills by comment/attention". Since the PR data shows undefined, I'll need to use the Issues data as a proxy for community attention, or base it on which PRs are referenced in popular issues.

Let me think about this more carefully. The PRs can be ranked by relevance to popular issues:
- #1742 (mcp-builder fix) - References issue #1668
- #1298 (skill-creator isolation) - addresses skill-creator issues
- #1771 (proofcore-contract-auditor) - new Web3 skill
- #1734 (orphan docx comments) - new feature
- #1703 (md2video-audio) - new media skill
- #1245 (notion + resume skills) - new skills
- #1961 (skill-creator hardening) - addresses security issues
- #1792 (docx LibreOffice) - bug fix
- #1730 (claude-api URLs) - bug fix
- #1681 (skill-creator package_skill) - bug fix
- #514 (document-typography) - new skill, old
- #1615 (scnet-hpc) - new HPC skill
- #822 (AWT E2E testing) - new testing skill
- #538 (pdf case-sensitive) - bug fix
- #486 (ODT skill) - new skill
- #210 (frontend-design) - improvement
- #83 (skill quality/security analyzers) - meta skills
- #1980 (webapp-testing shell=True) - security fix
- #1977 (algorithmic-art wrapAround) - bug fix
- #1976 (webapp-testing element_discovery) - bug fix

Since comment data is unavailable for PRs, I'll work with the available data and make it clear. Let me focus on the most important themes:

1. **skill-creator** related - heavily mentioned (PRs #1298, #1681, #1961; Issues #1394, #1383, #1352)
2. **docx** related - PRs #1734, #1792
3. **mcp-builder** related - PR #1742, Issue #1390
4. **webapp-testing** related - PRs #1980, #1976
5. **claude-api** related - PR #1730, Issue #1487
6. **New skills**: proofcore, md2video, notion-spec, document-typography, scnet-hpc, AWT, ODT

For "热门 Skills 排行" - since we don't have PR comment data, I'll identify the most prominent skills based on the issues they relate to. I should be transparent about this.

Actually, I think the best approach is:
- Note that PR comment data is unavailable
- Use Issue discussion as the primary proxy for community attention
- Group PRs by the skill they relate to and count related issues

Let me structure the report now:

### 1. 热门 Skills 排行

Based on cross-referencing PRs with related Issues (the Issues data shows actual comment counts):

**#1 skill-creator** - Most discussed skill
- Related PRs: #1298, #1681, #1961
- Related Issues: #1394 (XSS), #1383 (silent failures), #1352 (parallel workers), #556 (0% trigger rate)
- Total issue comments: 12 + 4 + 4 + 4 = 24+ comments

**#2 mcp-builder**
- Related PRs: #1742
- Related Issues: #1390 (evaluation 0/N)
- Comments: 4

**#3 claude-api**
- Related PRs: #1730
- Related Issues: #1487 (156k tokens), #1175
- Comments: 4

**#4 webapp-testing**
- Related PRs: #1980, #1976
- New security fixes

**#5 docx**
- Related PRs: #1734, #1792
- Active development

**#6 ProofCore (new Web3)**
- PR #1771
- Smart contract audit

**#7 md2video-audio**
- PR #1703
- Media generation

**#8 AWT E2E testing**
- PR #822
- Browser automation

### 2. 社区需求趋势

From the Issues:
- **Security & Trust**: #492 (46 comments!) - skill namespace impersonation
- **Org-wide sharing**: #228 (16 comments) - enterprise sharing
- **Reliability of eval infrastructure**: #556, #1390, #1383, #1352 - skill-creator/mcp-builder
- **Context window management**: #1487 - claude-api
- **Compact representations**: #1329 - compact-memory skill
- **Quality governance**: #1385 - Reasoning Quality Gate Pipeline
- **Test generation**: AWT (#822)
- **Document creation quality**: typography, ODT, orphan comments
- **Agent governance**: #412 - safety patterns

### 3. 高潜力待合并 Skills

PRs that are open and address active community pain points:
- #1961 - skill-creator hardening (addresses #1394)
- #1742 - mcp-builder fix (addresses #1668)
- #1298 - skill-creator isolation (addresses Windows issues)
- #1792 - docx LibreOffice timeout
- #1771 - ProofCore smart contract auditor
- #1703 - md2video-audio

### 4. 生态洞察

一句话: 社区最集中的诉求是 **skill-creator / eval 流水线的可靠性与安全性** —— 围绕"如何让 Skills 真正被触发、如何评估、如何安全发布"形成了当前最高密度的讨论带。

Now let me write the report in Chinese (the user wrote the request in Chinese). The format should be professional and concise with GitHub links.

Let me also make sure I provide all relevant links. The data shows the issue/PRs are all in 2025-2026 timeframe which seems future-dated (the cutoff is 2026-10-13), so I'll work with those dates.

Let me write this up now.
</think>
# Claude Code Skills 社区热点报告
**数据周期**：截至 2026-10-13 ｜ **样本**：50 PRs + 50 Issues

> ⚠️ **数据说明**：本批次 PR 的评论/点赞字段返回 `undefined`，无法按评论数对 PR 严格排序。报告以 **Issue 讨论热度**（真实评论数）作为"社区关注度"的主要代理指标，并交叉关联 PR 进行归因。

---

## 1️⃣ 热门 Skills 排行

按关联 Issue 总评论数与近期活跃度综合排名：

| 排名 | Skill | 关联 PR | 关联 Issue（评论数） | 状态 | 核心关注点 |
|---|---|---|---|---|---|
| 🥇 | **skill-creator**（元技能） | [#1298](https://github.com/anthropics/skills/pull/1298) [#1681](https://github.com/anthropics/skills/pull/1681) [#1961](https://github.com/anthropics/skills/pull/1961) | [#556 (12)](https://github.com/anthropics/skills/issues/556) · [#1394 (4)](https://github.com/anthropics/skills/issues/1394) · [#1383 (4)](https://github.com/anthropics/skills/issues/1383) · [#1352 (4)](https://github.com/anthropics/skills/issues/1352) | 全部 OPEN | **Skills 流水线的"心脏"**：触发率 0% bug、并行评测 UUID 串扰、eval viewer XSS 漏洞、Windows 兼容性、silent benchmark failures |
| 🥈 | **mcp-builder** | [#1742](https://github.com/anthropics/skills/pull/1742) | [#1390 (4)](https://github.com/anthropics/skills/issues/1390) | OPEN | 评测对真实 MCP 服务器打分 0/N（TextContent 序列化失败被吞），同步迁移 `mcp>=2.0` API 变更 |
| 🥉 | **claude-api** | [#1730](https://github.com/anthropics/skills/pull/1730) | [#1487 (4)](https://github.com/anthropics/skills/issues/1487) | OPEN | 一次性注入 156k token 撑爆上下文；文档死链清理 |
| 4 | **docx** | [#1734](https://github.com/anthropics/skills/pull/1734) [#1792](https://github.com/anthropics/skills/pull/1792) | — | OPEN | LibreOffice 超时被误报为成功；孤立批注检测 |
| 5 | **webapp-testing** | [#1980](https://github.com/anthropics/skills/pull/1980) [#1976](https://github.com/anthropics/skills/pull/1976) | — | OPEN | `shell=True` 命令注入风险（CWE-78）；textarea/select 元素识别错误 |
| 6 | **ProofCore-contract-auditor**（新增） | [#1771](https://github.com/anthropics/skills/pull/1771) | — | OPEN | Web3 智能合约静态分析 + TON 区块链存证 |
| 7 | **AWT（AI Watch Tester）**（新增） | [#822](https://github.com/anthropics/skills/pull/822) | — | OPEN | 零代码 E2E 测试 + 视觉浏览器控制 |
| 8 | **document-typography**（新增） | [#514](https://github.com/anthropics/skills/pull/514) | — | OPEN | AI 生成文档的孤行/寡行/编号错位修复 |

---

## 2️⃣ 社区需求趋势

按 Issue 讨论密度归纳的 5 大诉求方向：

### 🔐 A. 安全与信任（最高热度）
- **#492（46 评论 🔥）**：社区 Skill 冒用 `anthropic/` 命名空间，形成信任边界滥用——这是仓库**单 Issue 评论数最高的问题**
- **#1394（4）**：skill-creator eval viewer 存在 XSS（`escapeHtml` 不防 attribute 注入）
- **#1175（4）**：SharePoint 文档处理的权限/上下文安全担忧
- **#1980**：webapp-testing 命令注入

### 🏢 B. 企业级协作
- **#228（16 评论，👍8）**：Claude.ai 组织级 Skill 共享（目前需手动导出/上传 .skill 文件）
- **#189（6 评论，👍9 👍数最高）**：`document-skills` 与 `example-skills` 插件内容重复导致 Skill 重复加载

### 🧪 C. 评测与触发可靠性
- **#556（12 评论，👍7）**：`run_eval.py` 中 `claude -p` 触发率恒为 0%
- **#1390 / #1383 / #1352**：mcp-builder / skill-creator 的 silent failures
- **#412**：提出 `agent-governance` 治理类 Skill（已 CLOSED）

### 🧠 D. 上下文与记忆效率
- **#1329（9 评论）**：提议 `compact-memory`——用符号化记法压缩长程 Agent 状态
- **#1487**：`claude-api` 一次性灌入 156k token
- **#202（已 CLOSED）**：`skill-creator` 文档冗长，违反 token 效率指南

### 🎨 E. 垂直场景 Skill
- **#1385（5）**：Reasoning Quality Gate Pipeline（预校准 → 对抗评审 → 交付验证）
- **#1175**：SharePoint 集成场景
- **#1771 / #1703 / #1615 / #486**：Web3 合约审计、Markdown→视频、HPC 集群、ODT 文档

---

## 3️⃣ 高潜力待合并 Skills（即将落地）

按"修复活跃 Issue 痛点 + 改动范围可控"筛选：

| PR | Skill | 修复的 Issue | 合并价值 |
|---|---|---|---|
| [#1961](https://github.com/anthropics/skills/pull/1961) | skill-creator eval viewer 加固 | [#1394](https://github.com/anthropics/skills/issues/1394) | 一次性堵住脚本逃逸 / DNS rebinding / XSS / 跨站 POST 四类漏洞 |
| [#1298](https://github.com/anthropics/skills/pull/1298) | skill-creator 触发评估隔离 | [#1383](https://github.com/anthropics/skills/issues/1383) [#1352](https://github.com/anthropics/skills/issues/1352) | 解决 Windows 兼容性 + 并行评测串扰 |
| [#1681](https://github.com/anthropics/skills/pull/1681) | `package_skill.py` 直接执行 | skill-creator 用户体验 | 修复 `ModuleNotFoundError`，长期 OPEN 维护类 |
| [#1742](https://github.com/anthropics/skills/pull/1742) | mcp-builder 升级 `mcp>=2` | [#1668](https://github.com/anthropics/skills/issues/1668) | 跟进 SDK 主线版本，迟合并不兼容风险大 |
| [#1792](https://github.com/anthropics/skills/pull/1792) | docx LibreOffice 超时降级 | — | 提升 docx 评测可信度 |
| [#1980](https://github.com/anthropics/skills/pull/1980) | webapp-testing 去掉 `shell=True` | — | 安全必修项，合并门槛低 |
| [#1977](https://github.com/anthropics/skills/pull/1977) [#1976](https://github.com/anthropics/skills/pull/1976) | algorithmic-art / webapp-testing 小修 | [#1897](https://github.com/anthropics/skills/issues/1897) [#1891](https://github.com/anthropics/skills/issues/1891) | 临近 merge 的小修小补 |

**新增型高潜力（功能完整，等待 reviewer）**：
- [#1771](https://github.com/anthropics/skills/pull/1771) ProofCore Web3 合约审计
- [#1703](https://github.com/anthropics/skills/pull/1703) md2video-audio（零成本 Markdown→MP4）
- [#1245](https://github.com/anthropics/skills/pull/1245) notion-spec-to-implementation + quantitative-resume-auditor

---

## 4️⃣ Skills 生态洞察

> **社区最集中的诉求是"Skill 元层（meta-skills）的可靠性与可信发布"** ——围绕 **skill-creator 评测流水线**（#556、#1352、#1383、#1394）与 **命名空间/权限信任边界**（#492 46 条评论）形成了当前最高密度的讨论带；新增的垂直 Skills 数量虽多，但能否真正"被触发 + 被信任地发布"已经成为社区下一阶段的瓶颈。

---

<think>The user wants me to generate a Chinese-language community daily report based on GitHub data for Claude Code dated 2026-10-13. Let me analyze the data carefully.

Key observations:
1. No new releases in the past 24 hours
2. No new PRs in the past 24 hours
3. 50 issues updated in the past 24 hours, top 30 shown

Let me organize this into the requested sections:

1. **今日速览** - 2-3 sentences summarizing today's most important updates
2. **版本发布** - Skip since no new releases
3. **社区热点 Issues** - Top 10 most noteworthy issues
4. **重要 PR 进展** - Skip since no new PRs (will note this)
5. **功能需求趋势** - Extract common feature request themes
6. **开发者关注点** - Summary of developer pain points

Let me identify the top issues by importance (combination of comments and relevance):

Top issues by engagement:
1. #16550 - Allow Claude to Write/Update Project Files (40 comments, 78👍) - HIGH priority
2. #98747 - 2.1.286 idle compaction silently discards working context (22 comments, 30👍) - bug
3. #78160 - Hard block on typing passwords (15 comments, 23👍)
4. #89812 - Linux Desktop session_stale_relogin (14 comments)
5. #74662 - Claude Desktop multi-account support (12 comments)
6. #78263 - API fallback for auto-mode classifier (5 comments)
7. #63251 - Lazy/on-demand MCP server connections (4 comments)
8. #91103 - Ctrl+Shift+Tab intercepted (4 comments)
9. #69002 - Configure separate model for auto mode classifier (4 comments, 26👍)
10. #101067 - Auto-compaction fires at wrong token count (3 comments)
12. #98984 - Bedrock/Vertex thinking.display bug (3 comments)

For feature trends, I see:
- File/project write access
- IDE integration (VSCode keybindings)
- Desktop app features (multi-account, mascot slots)
- MCP server improvements (lazy loading, deduplication)
- Security/permissions (password handling, CVE checking)
- Model configuration (auto mode fallback, separate models)
- Auto-compaction behavior

For developer pain points:
- Idle compaction losing context
- Forced re-login daily
- Password input restrictions
- Auto-compaction regression at wrong token count
- MCP memory consumption
- Session disappearing after plan changes

Let me now write the report in Chinese.</think>

# Claude Code 社区动态日报 · 2026-10-13

---

## 📌 今日速览

过去 24 小时社区最显著的变化集中在 **自动压缩（auto-compaction）行为异常** 与 **桌面端多账户管理** 两个方向，前者已导致长跑会话出现上下文丢失的回归问题（#101067、#98747、#101577），后者则因 Linux 桌面用户被迫每日重新登录而持续升温（#89812、#95963）。与此同时，"允许 Claude 直接读写项目文件"这条长期高票 feature request（#16550）单日新增讨论，凸显出开发者对自主代理能力的强烈需求。

---

## 🚀 版本发布

今日 **无新版本发布**，过去 24 小时内仓库无 release 活动。

---

## 🔥 社区热点 Issues

| # | Issue | 热度 | 核心要点 |
|---|-------|------|---------|
| [#16550](https://github.com/anthropics/claude-code/issues/16550) | 允许 Claude 写/更新项目文件（增强） | 💬40 👍78 | 长期高赞 feature request，社区强烈呼吁开放更细粒度的文件写权限控制，单日评论活跃 |
| [#98747](https://github.com/anthropics/claude-code/issues/98747) | 2.1.286 idle compaction 静默丢弃工作上下文（已关闭） | 💬22 👍30 | 长会话在 idle 时被自动压缩，无 opt-out、无警告，标记为 "manual"，对长时间任务影响严重 |
| [#78160](https://github.com/anthropics/claude-code/issues/78160) | Windows 下硬阻止输入密码（增强） | 💬15 👍23 | 即使是本地测试环境，Claude 也拒绝输入账号密码，影响合法 dev/test 工作流 |
| [#89812](https://github.com/anthropics/claude-code/issues/89812) | Linux Desktop 每日强制重新登录 | 💬14 👍5 | `session_stale_relogin (elevated_auth)` 机制导致约每天需重新登录，Cowork 文件夹授权时需登录两次 |
| [#74662](https://github.com/anthropics/claude-code/issues/74662) | Claude Desktop 多账户本地会话管理（增强） | 💬12 👍9 | 多账户切换后，本地会话在另一账户下不可见/不可恢复，需多账户支持 |
| [#78263](https://github.com/anthropics/claude-code/issues/78263) | Auto-mode classifier 增加 API fallback（增强） | 💬5 👍4 | Sonnet 5 1m 故障会中断整个 auto 模式运行，建议加入降级到 Opus low 等机制 |
| [#63251](https://github.com/anthropics/claude-code/issues/63251) | MCP 服务器按需懒加载（增强） | 💬4 👍2 | 当前所有 MCP server 在会话启动即连接，导致大量内存浪费与启动慢 |
| [#69002](https://github.com/anthropics/claude-code/issues/69002) | 通过环境变量为 auto mode 配置独立模型（增强） | 💬4 👍26 | 希望可以单独配置 auto classifier 模型以降低成本或换用其他模型 |
| [#101067](https://github.com/anthropics/claude-code/issues/101067) | 2.1.296 Opus 5-5 自动压缩触发过早（Bug） | 💬3 👍0 | 在 281K–845K token 即触发自动压缩，远低于文档默认 967K，且触发点不稳定 |
| [#98984](https://github.com/anthropics/claude-code/issues/98984) | Bedrock/Vertex/Mantle thinking.display 未传递到请求体（Bug） | 💬3 👍1 | 客户端层在多个关卡丢弃该字段，影响第三方 provider 用户使用 thinking 功能

---

## 🔧 重要 PR 进展

今日 **无新 PR 活动**，过去 24 小时内仓库无 pull request 更新。

---

## 📈 功能需求趋势

从过去 24 小时更新的 50 条 Issue 中提炼出以下社区最关注的五大方向：

1. **🧠 上下文与压缩管理（高优先级）**
   多个高优 Bug（#98747、#101067、#101577、#101685）都指向自动压缩机制：触发时机不稳、压缩后未重载 MEMORY/协议文件、interactive 与 headless 模式写入不同 TTL 的 prompt cache（5 min vs 1 h）。这表明长会话上下文治理是当前最突出的稳定性痛点。

2. **🖥️ Desktop 体验与多账户/会话管理**
   桌面端用户集中反馈：每日强制重登（#89812、#95963）、多账户会话不可见（#74662）、从 Max 回退到 Pro 后会话消失（#101691）、`/agents` 命令被移除（#100477）。桌面端正快速成为体验短板。

3. **🔌 MCP 生态优化**
   集中在性能与可靠性：按需懒加载（#63251）、stdio MCP server 每会话重复约 1 GB 内存（#99831）、Chrome 扩展权限弹窗重复触发（#101654）。MCP 已成为事实标准，但运行时占用与配置 UX 仍待优化。

4. **🔐 安全 / 权限策略的两难**
   围绕"过严"与"过松"两极拉扯：硬阻止输入密码影响本地测试（#78160）、安装 EOL 依赖携带 37 个 CVE（#101683）、Worktree 隔离覆盖 PreToolUse allow（#100385）。社区呼吁更细粒度、可配置的权限模型。

5. **🤖 模型路由与成本控制**
   希望独立配置 auto-mode classifier 模型（#69002、#78263）、支持降级链路，反映出企业用户对成本/可用性细控的强烈需求。

---

## 💬 开发者关注点

**最集中痛点（按出现频次）：**

- **长跑会话上下文失控**：idle 与主动压缩行为并存，缺乏 opt-out 与可预测阈值，开发者担心"工作记忆被静默丢弃"。
- **桌面端登录稳定性**：自 9 月中下旬以来每日被迫重新登录，session_stale_relogin 机制被广泛吐槽，影响 Cowork、Scheduled Routines 等依赖长连接的体验。
- **权限策略"一刀切"**：密码输入、git-free Bash、CVE 依赖等场景中，Claude Code 的默认安全策略过严或缺乏上下文感知，导致合法工作流受阻。
- **MCP 资源占用与生命周期**：10 个会话即可消耗 ~10 GB MCP 进程内存，且无法中途启动新 server，严重制约多 server 用户的扩展能力。
- **第三方 API（Bedrock/Vertex/Mantle）兼容**：thinking.display 等字段在多个边界被丢弃，第三方部署用户长期缺能力（#67729、#79052、#98984 系列）。
- **Plugin/Mod 在 Desktop 的 UI 集成**：slash command 失效、缺乏 mascot slot 等问题（#99691、#99425）暴露了 desktop 与插件系统的整合尚不完善。

---

*日报基于 2026-10-13 当日 GitHub 数据生成，覆盖 50 条活跃 Issues、0 条 PR、0 条 Release。*

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

<think>The user wants me to generate a Chinese-language daily report about the GitHub activity for OpenAI Codex, dated 2026-10-13. Let me analyze the data carefully and structure the report according to the template.

Let me go through the data:

1. **Releases**: No releases in the past 24 hours - so I should skip this section or mention there are no releases.

2. **Issues (50 total, top 30 shown)**: I need to pick the 10 most noteworthy issues. The top ones are:
   - #52407 - Windows Dots CUA MXC launcher bug (67 comments, 10 likes) - HIGHEST
   - #52839 - Sol Ultrafast omitted from model catalog (17 comments)
   - #31383 - Plugin hooks fail after auto-upgrade (14 comments, 2 likes)
   - #52747 - Windows Desktop unknown injected code_mode_tool_description_first (14 comments)
   - #52394 - Codex long-running tasks hit server_overloaded (10 comments, 1 like)
   - #17879 - CLOSED - TUI styling for user/assistant messages (10 comments, 9 likes)
   - #49167 - CLOSED - fullscreen_transcript controls diffs (9 comments, 3 likes)
   - #50725 - Windows local commands hang (9 comments, 1 like)
   - #21850 - CLOSED - Vim mode start in Insert mode (9 comments, 29 likes)
   - #51434 - Cloud environment publish fails (6 comments)
   - #53321 - Windows 10 Computer Use WeChat/QQ capture timeout (5 comments)
   - #53042 - macOS Quick Chat no longer launches (5 comments, 7 likes)
   - #26311 - CLOSED - Pin prompt to bottom (5 comments, 36 likes - HIGHEST LIKES)
   - #20262 - CLOSED - Store /side chats in session logs (5 comments, 17 likes)
   - #32939 - CLOSED - unused_mut warning (5 comments)
   - #53569 - Capacity errors across platforms (2 comments, 0 likes)

For top 10 issues, I should consider:
- Mix of open bugs and closed enhancements
- High community engagement (comments/likes)
- Cross-platform issues
- Key themes

3. **PRs (25 total, top 20 shown)**: 
   - #53556 - Deduplicate TUI modifier handling
   - #53506 - Reject duplicate Host headers
   - #53496 - Preserve pending Effects toggles
   - #53485 - Update quinn-proto to 0.11.18
   - #53453 - Prefer Windows clipboard on WSL
   - #53452 - Close input admission while turn finishes
   - #53451 - Treat incomplete responses as terminal errors
   - #53444 - Suppress repeated turn diffs in codex exec
   - #53443 - Use local MSVC toolchains for Bazel tests
   - #53440 - Preserve status line accents on 16-color terminals
   - #53438 - Stop identifying Apple Terminal from TERM_SESSION_ID
   - #53436 - Route TUI request replies correctly
   - #53429 - Apply configuration toggles live
   - #53426 - Preserve Windows runtime registration diagnostics
   - #53424 - Regression coverage for network grants
   - #53419 - Restore saved thread permissions
   - #53412 - Isolate arg0 helper directories by OS
   - #53400 - Add explicit local board connections
   - #53393 - Distinguish Guardian parent-compaction failures
   - #53389 - Use cached login credentials for Guardian

These are all from a copyberry bot - so they're likely automated maintenance PRs. I should pick 10 that cover diverse areas.

4. **Feature request trends**:
   - TUI enhancements (styling, vim mode, status line, transcripts)
   - Windows-specific issues
   - Computer Use functionality
   - Rate limits/capacity issues
   - Permission/sandbox config
   - CLI improvements
   - Session management
   - Cloud environments

5. **Developer pain points**:
   - Windows compatibility (lots of issues)
   - Rate limiting "at capacity" errors
   - Computer Use screenshot timing
   - CLI hanging issues
   - TUI customization

Let me write this in Chinese, professional tone, suitable for technical developers.

Note: The report date is 2026-10-13, but I should be careful — the current date based on my knowledge is around January 2026, but the task is asking me to generate a report for that specific date based on the provided data. I should follow the user's instructions.

Let me draft the report:

---

# OpenAI Codex 社区动态日报 · 2026-10-13

## 今日速览
今日 Codex 仓库活跃度维持高位，Issue 区域继续以 Windows 平台兼容性、模型容量上限（"Selected model is at capacity"）以及 Computer Use 截图/可访问性异常为焦点，多个跨端容量错误 Bug 在过去 24 小时内同时被新报告（#53569）和持续讨论（#52394、#52397）。TUI 体验增强类需求持续升温，多个高赞 Enhancement（如 #26311 输入框底部固定、#21850 Vim 默认 Insert、#16921 自定义状态栏）已顺利进入 Closed 状态。PR 端则由 copyberry[bot] 集中提交了一批基础设施与跨平台一致性修复。

## 版本发布
过去 24 小时无新 Release。

## 社区热点 Issues

1. **#52407** [OPEN] Windows Dots: CUA MXC 启动器在直接 shell 恢复后失败 (HRESULT 0x80070003)
   - 链接：https://github.com/openai/codex/issues/52407
   - 评论 67 条、点赞 10，是今日最热的 Issue。Windows 25H2 上 Desktop 包 26.1002.7124.0 + Codex core 0.162.0-alpha.2 + Unified Computer Use 26.1002.52244 组合下，CUA MXC 启动器在直接 shell 恢复后报 0x80070003。涉及 sandbox/app/app-server/computer-use 多个子模块，社区正在协作定位根因。

2. **#52839** [OPEN] ChatGPT 鉴权下 Sol Ultrafast 模型目录缺失
   - 链接：https://github.com/openai/codex/issues/52839
   - 评论 17 条。Windows + npm CLI 0.162.1 + ChatGPT 鉴权用户即使启用 fast_mode / ultrafast_mode，首方模型目录仍然不展示 Sol Ultrafast，疑似后端目录灰度问题。

3. **#31383** [OPEN] Marketplace 自动升级替换缓存插件后，Hook 持续以 exit 1 失败
   - 链接：https://github.com/openai/codex/issues/31383
   - 评论 14 条、点赞 2。该 Bug 自 7 月起未关闭，影响 Windows 11 + CLI 0.142.5 升级流程后所有 Hook 调用。

4. **#52747** [OPEN] Windows Desktop 出现未知 `code_mode_tool_description_first` 注入
   - 链接：https://github.com/openai/codex/issues/52747
   - 评论 14 条。Desktop 包 26.1007.2314.0 中出现未文档化的工具描述注入字段及强制清理拒绝，与 sandbox/config 行为不符。

5. **#52394** [OPEN] Codex 长任务持续遭遇 server_overloaded/At Capacity
   - 链接：https://github.com/openai/codex/issues/52394
   - 评论 10 条。Windows Desktop 用户在使用量显示仍有约 70% 余量时仍被频繁中断，切换模型仅能短暂恢复。

6. **#17879** [CLOSED] TUI: 区分用户与助手消息的样式/颜色
   - 链接：https://github.com/openai/codex/issues/17879
   - 评论 10 条、点赞 9。呼声已久的可读性增强已完成合入。

7. **#49167** [CLOSED] `fullscreen_transcript` 同时控制 diff 截断的副作用修复
   - 链接：https://github.com/openai/codex/issues/49167
   - 评论 9 条、点赞 3。澄清了配置项的耦合行为，后续 diff 默认全色显示。

8. **#50725** [OPEN] Windows: Codex 本地命令在子进程生成前挂起
   - 链接：https://github.com/openai/codex/issues/50725
   - 评论 9 条。ChatGPT Windows Desktop 中 `cmd.exe /d /c echo CODEX_OK` 即无限挂起，影响所有本地命令调用。

9. **#21850** [CLOSED] TUI Vim 模式默认以 Insert 启动
   - 链接：https://github.com/openai/codex/issues/21850
   - 评论 9 条、点赞 29。高度受欢迎的编辑器体验改进。

10. **#53569** [OPEN] 跨 Desktop/Web/CLI 全平台容量误报
    - 链接：https://github.com/openai/codex/issues/53569
    - 评论 2 条。macOS Darwin 24.5.0 + Codex 26.1007.30912、Pro 订阅下持续出现"Selected model is at capacity"，与 #52394、#52397 一同构成容量报告聚集簇。

## 重要 PR 进展

1. **#53556** 去重 TUI Modifier 与终端颜色缓存
   - 链接：https://github.com/openai/codex/pull/53556
   - 在 Unix 与 Windows 间共享 `ModifierDiff` 与默认色探测/缓存，减少重复代码。

3. **#53506** 网络代理拒绝重复 Host 头
   - 链接：https://github.com/openai/codex/pull/53506
   - 在策略评估前返回 400，避免策略层与上游解析不一致。

4. **#53496** 保存刷新时保留 Effects 待处理切换
   - 链接：https://github.com/openai/codex/pull/53496
   - 修复用户连续勾选 Effects 后被旧选择覆盖的竞态。

5. **#53453** WSL 优先使用 Windows 剪贴板
   - 链接：https://github.com/openai/codex/pull/53453
   - 规避 WSLg 剪贴板初始化挂起及 PowerShell 写入卡顿。

6. **#53452** Turn 收尾阶段关闭输入接管
   - 链接：https://github.com/openai/codex/pull/53452
   - 在 drain 输入前先标记 turn 为 finishing，避免注入顺序错乱。

7. **#53451** 将不完整响应视为终态错误
   - 链接：https://github.com/openai/codex/pull/53451
   - 引入 `ResponseIncomplete` 错误，避免 `max_output_tokens` 后错误地触发 compaction fallback。

8. **#53444** `codex exec` 人性化输出抑制重复 turn diff
   - 链接：https://github.com/openai/codex/pull/53444
   - 通过记录上一次 diff，仅输出真正有变化的更新。

9. **#53443** 原生 Windows Bazel 测试使用本地 MSVC 工具链
   - 链接：https://github.com/openai/codex/pull/53443
   - 注册本地 x64/ARM64 C++ 工具链，修复 Windows MSVC 平台下的 hermetic ABI 不匹配。

10. **#53436** TUI 请求按连接/线程路由
    - 链接：https://github.com/openai/codex/pull/53436
    - 修复会话切换后请求 ID 复用导致响应错位。

11. **#53419** 配置加载阶段恢复已保存线程权限
    - 链接：https://github.com/openai/codex/pull/53419
    - 解决只读线程在默认权限升级后无法 resume 的问题。

12. **#53389** Guardian 决策使用缓存登录凭证
    - 链接：https://github.com/openai/codex/pull/53389
    - 改为读取 `AuthManager` 缓存，避免与 `OPENAI_API_KEY` 环境变量读取路径冲突。

## 功能需求趋势

从过去一周的 Issue 分布可以清晰看到以下几条主线：

- **TUI/CLI 交互体验升级** 是最大热点，"区分用户/助手消息样式"、"自定义状态栏"、"Vim 模式默认 Insert"、"输入框钉底"、"折叠 hook 注入上下文"、"quiet transcript 模式" 等被反复提出，#26311、#21850、#16921、#17879、#32745、#34073、#21003 等都已 Closed 进入实现阶段。
- **Windows 跨平台稳定性** 持续是痛点：sandbox、Computer Use 截图、Hook 升级、Cloud Environment 发布、Windows MSVC 工具链等均出现专门 Issue 或 PR。
- **Computer Use 完善**：WeChat/QQ 截图超时（#53209）、Windows 10 CUA MXC 启动失败（#52407）等表明 UA 体验仍在打磨。
- **模型容量与限流反馈**：#52394、#52397、#53569 三起同期报告，反映出 Pro/Plus 用户对使用量看板与实际配额不一致的强烈不满。
- **会话与权限持久化**：包括 `/resume` 列出全部历史会话（#30878）、只读线程跨默认权限恢复（#51434、#53419、#53424），代表多会话工作流需求增加。
- **配置/快捷键对齐竞品**：#34073 提议 Shift+Tab 切换权限模式，#37227 提出 Calm mode，体现出对 Claude Code 类工具的体验对标。

## 开发者关注点

- **Windows 桌面 + Computer Use 仍是高优先级**。从 0.162 alpha 系列到 26.1007 系列，App 与 Computer Use 插件的协同仍有较多 0x8007xxxx 类 HRESULT 错误、App-server 启动失败与可访问性/截图超时问题。
- **"At Capacity"误报**已成为跨平台最显眼的体验瓶颈，开发者呼吁区分后端真实限流与前端配额展示差异。
- **CLI/TUI 可配置化诉求强烈**：状态栏、快捷键、主题、权限模式、Transcript 模式都被视为"vs. Claude Code"的差距点。
- **构建/CI 体系正向 Bazel + MSVC 过渡**（#53443、#53485），但 Windows 与 WSL 共享 `CODEX_HOME` 导致的锁命名空间问题（#53412）仍是潜在风险。
- **生态对齐**：网络代理 Host 头处理（#53506）、Guardian 决策使用 `AuthManager` 缓存（#53389）等修复显示 OpenAI 正在持续硬化底层安全与一致性边界。

---

Let me clean this up and make sure the formatting is good. Also, I numbered PR #2 as "3" in the output - that was a numbering mistake. Let me fix it.

Actually, looking at the data more carefully:

For the top issues, I want to make sure I'm picking the 10 most noteworthy. The data shows:
- #52407: 67 comments, 10 likes - highest activity
- #52839: 17 comments
- #31383: 14 comments, 2 likes
- #52747: 14 comments
- #52394: 10 comments, 1 like
- #17879: 10 comments, 9 likes (CLOSED - enhancement)
- #49167: 9 comments, 3 likes (CLOSED)
- #50725: 9 comments, 1 like
- #21850: 9 comments, 29 likes (CLOSED - high engagement)
- #51434: 6 comments
- #53321: 5 comments
- #53042: 5 comments, 7 likes
- #26311: 5 comments, 36 likes (CLOSED - highest likes overall!)
- #20262: 5 comments, 17 likes (CLOSED)
- #32939: 5 comments (CLOSED)

I should include #26311 since it has the highest engagement (36 likes). Let me reconsider my list.

Actually, I think a good balance would be:
1. #52407 (highest comments)
2. #52839 (model catalog issue)
3. #31383 (long-standing hook bug)
4. #52747 (Windows Desktop injection)
5. #52394 (At capacity on Windows)
6. #17879 (CLOSED - user/assistant colors)
7. #26311 (CLOSED - pin to bottom, 36 likes!)
8. #21850 (CLOSED - Vim Insert, 29 likes)
9. #50725 (Windows command hang)
10. #53569 (cross-platform capacity)
   OR #53042 (macOS Quick Chat)

I'll include #53569 since it's the newest and cross-platform, and reflects the capacity issue cluster.

Actually let me revise to make sure I have a good mix. I'll keep my list but maybe swap one of the closed ones for #53042 to show macOS too.

Final selection for top 10 issues:
1. #52407 - Windows CUA MXC bug (highest comments 67)
2. #52839 - Sol Ultrafast missing
3. #31383 - Plugin hooks fail
4. #52747 - Windows Desktop injection
5. #52394 - At Capacity on Windows
6. #17879 (CLOSED) - User/assistant styling
7. #26311 (CLOSED) - Pin composer to bottom (36 likes)
8. #21850 (CLOSED) - Vim Insert default (29 likes)
9. #50725 - Windows local commands hang
10. #53569 - Cross-platform At Capacity (newest)

This gives a balanced mix of bugs, enhancements, and both open and closed. Good.

For PRs, I should also reconsider. The list is mostly bot PRs. Let me select 10 most impactful:
1. #53556 - TUI dedup (UI quality)
2. #53506 - Duplicate Host header (security)
3. #53496 - Effects toggles (UI)
4. #53453 - Windows clipboard on WSL
5. #53452 - Turn finishing (correctness)
6. #53451 - ResponseIncomplete (error handling)
7. #53444 - codex exec diff dedup (CLI UX)
8. #53443 - MSVC Bazel (build infra)
9. #53436 - TUI request routing (correctness)
10. #53419 - Saved thread permissions
11. #53389 - Guardian cached creds

I'll pick 10. Let me select the most diverse and impactful:
- #53556 (UI)
- #53506 (security)
- #53496 (UI)
- #53453 (WSL)
- #53452 (correctness)
- #53451 (error handling - very important)
- #53444 (CLI UX)
</think>

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

<think>The user wants me to generate a Chinese daily report for Gemini CLI community dynamics based on the GitHub data provided. Let me analyze the data carefully:

1. **Latest Release**: v0.65.0-nightly.20261013.g51617c1bc - includes a fix for extensions allowlist check
2. **Issues**: 50 issues updated, with the top 30 shown
3. **PRs**: 35 PRs updated, with top 20 shown

Let me identify key themes:

**Most discussed Issues** (by comment count):
- #22323 (13 comments): Subagent recovery after MAX_TURNS reports GOAL success - bug
- #19873 (9 comments): Zero-Dependency OS Sandboxing & Post-Execution Intent Routing - enhancement
- #21409 (8 comments): Generalist agent hangs - bug (highest thumbs up: 8)
- #22745 (7 comments): AST-aware file reads - feature
- #21968 (7 comments): Gemini doesn't use skills and sub-agents enough - bug
- #22267 (4 comments): Browser Agent ignores settings.json - bug
- #22232 (4 comments): Browser agent resilience - feature
- #21983 (4 comments): browser subagent fails in wayland - bug
- #21000 (4 comments): native file tools for task tracker - bug
- #20079 (4 comments): symlink agents not recognized - bug

**Important PRs**:
- #29536: Security fix for grep command-line option injection
- #29703: Atomic-write temp file within NAME_MAX
- #29728: Fix session poisoning on rapid Ctrl-C
- #29532: Fix quota error classification
- #29535: Auth fix for allowed onboarding tier
- #29644: Fix debounced static UI refresh
- #29638: Remove VS Code marketplace update check
- #29725: Synchronized output for terminal
- #29695: Debug console height calculation
- #29722: UTF-16/32 whitespace handling

**Trend Analysis**:
- Subagent issues are pervasive (multiple bugs about subagents)
- Browser agent issues
- UI/Terminal rendering issues (flickering, resize)
- Security concerns
- AST-aware tools exploration
- File operation issues

Let me write a comprehensive Chinese report.</think>

# Gemini CLI 社区动态日报
**2026 年 10 月 13 日**

---

## 📌 今日速览

今日 Gemini CLI 发布了 `v0.65.0-nightly` 版本，主要修复了扩展加载时白名单校验失败导致整个流程中断的问题。社区讨论焦点集中在**子代理（Subagent）行为的可靠性**上，多个高优先级 Bug 涉及代理在 `MAX_TURNS`、Wayland 浏览器、Generalist Agent 等场景下的异常；同时，围绕 **AST 感知工具、零依赖 OS 沙箱、终端渲染性能** 等方向的探索性 Issue 也持续活跃。

---

## 🚀 版本发布

**v0.65.0-nightly.20261013.g51617c1bc** 已发布，主要更新：

- 🛠️ **fix(cli)**: 在扩展加载过程中，当某个扩展未通过白名单（allowlist）校验时，继续加载其他可用扩展，避免单点失败阻断整体启动。([PR #29720](https://github.com/google-gemini/gemini-cli/pull/29720))

---

## 🔥 社区热点 Issues（Top 10）

| # | Issue | 主题 | 重要性 |
|---|-------|------|--------|
| 1 | [#22323](https://github.com/google-gemini/gemini-cli/issues/22323) | **Subagent 达到 MAX_TURNS 后错误报告为 GOAL success** | P1 Bug，`codebase_investigator` 在未完成分析前达到轮次上限，却报 `Termination Reason: "GOAL"`，掩盖了中断事实，13 条评论 |
| 2 | [#21409](https://github.com/google-gemini/gemini-cli/issues/21409) | **Generalist agent 无响应挂死** | P1 Bug（👍 8），用户报告 defer 到 generalist 后任务永久挂起，社区反响强烈 |
| 3 | [#19873](https://github.com/google-gemini/gemini-cli/issues/19873) | **Zero-Dependency OS 沙箱 + Post-Execution Intent Routing** | P2 Enhancement，试图充分发挥 Gemini 3 模型对 POSIX 工具链的原生亲和力，是模型驱动开发范式的关键探索 |
| 4 | [#22745](https://github.com/google-gemini/gemini-cli/issues/22745) | **AST 感知文件读取/搜索/映射 EPIC** | P2 Feature，通过引入 AST 工具精确读取方法边界、降低 token 消耗、提升代理效率 |
| 5 | [#21968](https://github.com/google-gemini/gemini-cli/issues/21968) | **Gemini 几乎不使用自定义 Skills 和子代理** | P2 Bug，模型在未明确指令时不主动调度 skills/subagents，限制了自动化潜力 |
| 6 | [#22267](https://github.com/google-gemini/gemini-cli/issues/22267) | **Browser Agent 忽略 settings.json 覆盖（如 maxTurns）** | P2 Bug，配置合并逻辑未生效，导致用户无法控制浏览器代理 |
| 7 | [#22232](https://github.com/google-gemini/gemini-cli/issues/22232) | **Browser Agent 会话接管与锁恢复** | P3 Feature，针对现有"快速失败"策略在 persistent 会话下易崩溃的改进建议 |
| 8 | [#21983](https://github.com/google-gemini/gemini-cli/issues/21983) | **browser subagent 在 Wayland 下失败** | P1 Bug（agent/browser），Wayland 桌面环境兼容性问题 |
| 9 | [#20079](https://github.com/google-gemini/gemini-cli/issues/20079) | **~/.gemini/agents/ 下的 symlink 文件未被识别为代理** | P2 Bug，影响 dotfiles 用户的常见用法 |
| 10 | [#24246](https://github.com/google-gemini/gemini-cli/issues/24246) | **工具数量 > 128 时返回 400 错误** | P2 Bug，工具总数达到 400+ 时触发 API 限制，需要更智能的作用域裁剪 |

---

## 🛠️ 重要 PR 进展（Top 10）

| PR | 标题 | 说明 |
|----|------|------|
| [#29536](https://github.com/google-gemini/gemini-cli/pull/29536) | **fix(grep): 防止命令行参数注入（使用 -e 显式分隔）** | 安全加固，针对 CWE-88，强制使用 `-e` 终止符防止 git grep/system grep 参数注入 🛡️ |
| [#29728](https://github.com/google-gemini/gemini-cli/pull/29728) | **fix(cli): 防止快速 Ctrl-C 中断引发的会话污染** | P1 修复，取消请求未被 await 时，连续两次 Ctrl-C 会先进入 quit 流程造成脏状态 |
| [#29703](https://github.com/google-gemini/gemini-cli/pull/29703) | **fix(core): 原子写临时文件名限制在 NAME_MAX 内** | 修复长文件名（215-255 字节 + .uuid.tmp 后缀）触发的 `ENAMETOOLONG` |
| [#29532](https://github.com/google-gemini/gemini-cli/pull/29532) | **fix(core): 识别 RetryInfo delay=0 的配额错误** | 修复服务端指示"立即重试"却被误判为终止性 quota 错误的中止逻辑 |
| [#29535](https://github.com/google-gemini/gemini-cli/pull/29535) | **fix(auth): 遵循允许的 onboard tier** | 修复 #29529，避免合法账号被错误提示"无有效 license"，#29529 |
| [#29644](https://github.com/google-gemini/gemini-cli/pull/29644) | **fix(cli): 恢复终端宽度变化时防抖静态 UI 刷新** | 修复终端水平 resize 时的渲染异常，使用 100ms debounce |
| [#29725](https://github.com/google-gemini/gemini-cli/pull/29725) | **fix(ui): 实现同步输出协议 + 隔离 Spinner 渲染** | P2 大型 PR，引入终端同步输出协议（CSI 2026），解决 tmux 等多路复用器下的屏幕闪烁 |
| [#29695](https://github.com/google-gemini/gemini-cli/pull/29695) | **fix(ui): 修复 Debug Console 高度计算与 terminalBuffer 闪烁** | 解决 F12 控制台布局异常，并启用增量渲染 + 静态 history 项记忆化 |
| [#29722](https://github.com/google-gemini/gemini-cli/pull/29722) | **fix(core): 将仅含空白字符的 UTF-16/UTF-32 文件视为空** | `isEmpty()` 误将空白 UTF-16/32 解码为 UTF-8 导致 NUL 残留，正确处理 BOM |
| [#29638](https://github.com/google-gemini/gemini-cli/pull/29638) | **fix(vscode): 移除启动时的 Marketplace 更新检查** | 消除 `vscode-ide-companion` 每次激活时的额外网络请求，启动更快 |

---

## 📈 功能需求趋势

通过分析全部 50 条更新 Issue，可以归纳出社区最关注的几个方向：

1. **🤖 子代理（Subagent）生态完善** ⬆️⬆️⬆️
   - 涉及并行协作（[#18287](https://github.com/google-gemini/gemini-cli/issues/18287)）、本地子代理 Sprint 1（[#20195](https://github.com/google-gemini/gemini-cli/issues/20195)）、设置发现机制（[#18285](https://github.com/google-gemini/gemini-cli/issues/18285)）、轨迹可见性（[#22598](https://github.com/google-gemini/gemini-cli/issues/22598)）等。
   - 是当前社区投入度最高的方向。

2. **🧠 AST 感知代码理解工具** ⬆️⬆️
   - 三个相关 Issue（[#22745](https://github.com/google-gemini/gemini-cli/issues/22745)、[#22746](https://github.com/google-gemini/gemini-cli/issues/22746)、[#22747](https://github.com/google-gemini/gemini-cli/issues/22747)）组成 EPIC，目标是引入 ast-grep、tilth、glyph 等工具优化文件读取与代码搜索精度。

3. **🔒 零依赖 OS 沙箱 + Intent Routing**
   - [#19873](https://github.com/google-gemini/gemini-cli/issues/19873) 提出的方向：通过 Bash 原生链路 + 后置意图判断，平衡 Gemini 3 的模型能力与安全 UX。

4. **💻 终端 UI 渲染质量**
   - 多个 PR/Issue 围绕 resize 闪烁（[#21924](https://github.com/google-gemini/gemini-cli/issues/21924)、[#29644](https://github.com/google-gemini/gemini-cli/pull/29644)）、tmux 闪烁（[#29725](https://github.com/google-gemini/gemini-cli/pull/29725)）、Debug Console 布局（[#29695](https://github.com/google-gemini/gemini-cli/pull/29695)）。

5. **📋 任务跟踪系统重构**
   - [#21000](https://github.com/google-gemini/gemini-cli/issues/21000)、[#18836](https://github.com/google-gemini/gemini-cli/issues/18836) 提议替换 WriteToDo 为持久化文件任务跟踪，缓解上下文腐化（context rot）。

6. **🌐 Browser Agent 鲁棒性**
   - Wayland 兼容（[#21983](https://github.com/google-gemini/gemini-cli/issues/21983)）、配置覆盖（[#22267](https://github.com/google-gemini/gemini-cli/issues/22267)）、会话恢复（[#22232](https://github.com/google-gemini/gemini-cli/issues/22232)）三位一体。

---

## 💬 开发者关注点

总结开发者反馈中的高频痛点：

- **🎯 Subagent 调度不可靠**：`Generalist agent hangs`（#21409，👍 8）与 `Subagent recovery hides interruption`（#22323）反映，**模型不愿自主调度子代理 + 错误地将中断标记为成功**，是代理系统最严重的可靠性问题。

- **⚙️ 配置覆盖失效**：Browser Agent 完全忽略 `settings.json`（#22267），Local Subagent 不支持 symlink（#20079），开发者期待"声明一次，全链路生效"。

- **🛡️ 安全细节**：grep 工具参数注入（PR #29536）、授权 tier 误判（#29535），反映社区对供应链级安全与小细节同样重视。

- **🖥️ 终端体验细节**：UTF-16 BOM 文件误判、Ctrl-R 中 Unicode 高亮偏移、tmux 闪烁、resize 卡顿，开发者对终端体验的边界场景极为敏感。

- **📉 Context 成本焦虑**：`Tactful Extraction`（#19561）、AST 工具（#22745）等 Issue 都围绕如何在不丢精度的前提下**降低每轮 token 消耗**，是长期经济性问题。

- **🪟 跨平台兼容性**：Wayland 浏览器失败、非 TTY 测试崩溃（PR #29635），说明 Gemini CLI 在非主流平台/CI 环境的覆盖度仍是短板。

---

*📅 数据来源：[google-gemini/gemini-cli](https://github.com/google-gemini/gemini-cli) · 报告生成时间：2026-10-13*

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

<think>The user is asking me to create a Chinese daily report for GitHub Copilot CLI community dynamics for 2026-10-13. Let me analyze the data carefully.

Wait, I need to note something - the date says 2026-10-13, but the issues have various dates from 2026-01 to 2026-10. The "past 24 hours" updates would be the ones updated most recently. Let me filter through.

Looking at the data:
- Issues updated 2026-10-13: #5129, #5128, #5127, #5126, #5125, #5124, #5123, #5122, #5121, #5120, #5119
- Issues updated 2026-10-12: most others

There are NO Pull Requests updated in the past 24 hours.

Releases in past 24 hours:
- v1.0.97-2 (Fixed: Discover all custom agents)
- v1.0.97-1 (Fixes and changes)
- v1.0.97-0 (Added: agent-scoped declarative hooks; Improved: inline images; Fixed: Autopilot denies preToolUse hook's "ask")
- v1.0.96 (2026-10-12)

Important to note - the dates in the data appear to be from 2026, which is in the future from my knowledge cutoff (January 2026). However, I should just process the data as given.

Let me craft the report:

1. **今日速览** - Focus on:
- v1.0.97 series released with agent hooks feature
- BYOK-related issues gaining traction
- Several Windows-specific issues
   
2. **版本发布** - v1.0.97 series and v1.0.96

3. **社区热点 Issues** - Pick 10 most important:
Looking at the issues, let me prioritize by importance:

Top picks:
- #970 - macOS Gatekeeper blocking, 22 👍, high reaction
- #5114 - Session limit continue issue
- #5068 - Windows MCP Entra sign-in fails, 12 👍
- #3808 - Claude Sonnet prompt caching, 8 👍
- #5127 - BYOK short model names issue
- #5126 - BYOK built-in agents not using default models
- #5103 - BYOK sub-agents wire API issue
- #5105 - macOS sandbox blocking Gradle
- #5088 - Windows CLI crashes on WAM sign-in
- #5100 - Session event delivery fails
- #5129 - Windows installer for enterprise
- #5128 - Session renaming feature
- #5124 - --agent race condition
- #5122 - Plugin context merging bug
- #5123 - Terminal safety denial recovery
- #5125 - Prompt execution time tracking
- #5120 - Terminal mouse tracking after crash

Let me pick the 10 most important:
1. #970 - macOS Gatekeeper (22 👍, long-standing)
2. #5068 - Windows MCP Entra (12 👍)
3. #3808 - Claude Sonnet caching (8 👍)
4. #5127 - SDK BYOK short names
5. #5126 - BYOK built-in agents
6. #5103 - BYOK sub-agents wire API
7. #5124 - --agent race condition bug
8. #5129 - Windows enterprise installer
9. #5100 - Session event delivery fails
11. #5128 - Session renaming

4. **重要 PR 进展** - NO PRs, so note this
Actually the user wants 10 PRs but there are 0. I should note this clearly.

5. **功能需求趋势** - 
- BYOK/模型配置改进 (multiple BYOK issues)
- 跨平台/Windows 支持 (installer, MCP Entra)
- Session 管理 (renaming, recovery)
- 性能/可观测性 (prompt timing)
- 终端体验 (mouse tracking, safety)
- 企业部署 (installer)

6. **开发者关注点** - 
- BYOK 模型路由的复杂性
- Windows 平台的稳定性
- 会话管理的可用性
- 终端安全策略与企业合规

Let me write the report now. The user wants Chinese, concise, professional, with links.

I should note that there are 0 PRs in the past 24 hours - I should be honest about this.

Let me write a thorough but concise report.</think>

# GitHub Copilot CLI 社区动态日报
**日期：2026-10-13**

---

## 1. 今日速览

v1.0.97 系列预发布版本集中上线，带来**声明式 Agent Hooks**与**默认内联图片渲染**两项重要功能，同时修复了 Agent 发现与 Autopilot 钩子判定等多项关键 Bug。社区焦点集中在 **BYOK（自定义模型路由）** 在 Agent、子 Agent、内置 Agent 之间的链路一致性问题上，相关 Issue 在 24 小时内集中涌现，暴露出模型配置语义与 SDK 行为之间的多重不匹配。

---

## 2. 版本发布

### v1.0.97-0 / 1.0.97-1 / 1.0.97-2（2026-10-13）

**Added**
- **Agent 作用域的声明式 Hooks**：自定义 Agent 现可声明 scoped hooks（`preToolUse` 等），Hook 决策（如 `ask`）可作用于 Agent 上下文。
- v1.0.97-2：修复在含 >100 个或深层嵌套 agent 文件的仓库中无法发现全部自定义 Agent 的问题。

**Improved**
- 支持的终端默认开启**内联图片渲染**，无需 experimental 模式；可通过 `/settings inlineImages false` 关闭。

**Fixed**
- 修复 Autopilot 不正确"放行" `preToolUse` Hook 的 `ask` 决策（应deny而非ask通过）。
- v1.0.96（2026-10-12）：交互式沙箱设置中可建议环境密钥并添加 masking 主机；`/model` 与 `/config model` 中的模型 ID 大小写不敏感并保存为规范化 ID；启动阶段保留 `/allow-all`；MCP 与多 Agent 路径的若干修复。

---

## 3. 社区热点 Issues（Top 10）

| # | 标题 | 状态 | 👍 | 为什么值得关注 |
|---|------|------|-----|--------------|
| [#970](https://github.com/github/copilot-cli/issues/970) | **macOS Gatekeeper 在公司安全策略下拦截 Copilot CLI** | OPEN | **22** | 高赞长尾 Issue：Homebrew 升级后每次都需手动放行，反映企业 macOS 部署中的签名/公证痛点，22 👍 表明社区影响面广。 |
| [#5068](https://github.com/github/copilot-cli/issues/5068) | **Windows：MCP Entra 登录失败（scope 校验报错）** | OPEN | **12** | 影响 Azure DevOps MCP 等关键企业服务，新鲜登录即触发，阻碍 Microsoft 系生态接入。 |
| [#3808](https://github.com/github/copilot-cli/issues/3808) | **Claude Sonnet 未启用 Prompt Caching** | OPEN | **8** | 大量用户使用 Sonnet 长上下文场景下延迟与 token 成本未被优化，是高 ROI 的请求。 |
| [#5127](https://github.com/github/copilot-cli/issues/5127) | **SDK + BYOK：短模型名无法匹配到 Provider** | OPEN | 0 | BYOK 体验阻断级 Bug：短名（如 `gpt-5.4-mini`）在 SDK 中被错误地报为 "No GitHub OAuth token"，自定义 Agent 直接失败。 |
| [#5126](https://github.com/github/copilot-cli/issues/5126) | **BYOK：explore / research / task 静默回退到 session 模型** | OPEN | 0 | 内置 Agent 声明的默认模型被忽略，悄悄消耗 session 模型配额，BYOK 用户难以预测成本。 |
| [#5103](https://github.com/github/copilot-cli/issues/5103) | **BYOK 子 Agent 共享 session wire API 导致 400** | OPEN | 0 | `completions`/`responses` 强制绑定，子 Agent 跨 family 调用即失败，影响多模型路由架构。 |
| [#5124](https://github.com/github/copilot-cli/issues/5124) | **`--agent <name>` 启动 ~1s 后被静默丢弃** | OPEN | 0 | 启动期与 sign-in / MCP reload 存在竞态，banner 显示选中但很快消失，影响自定义 Agent 用户预期。 |
| [#5100](https://github.com/github/copilot-cli/issues/5100) | **会话事件投递在 120s host-ack 超时后永久失败** | OPEN | 0 | 长会话中一次超时即"判死刑"，必须 resume，影响长时间交互式工作流。 |
| [#5129](https://github.com/github/copilot-cli/issues/5129) | **请求提供企业级 Windows 系统安装包** | OPEN | 0 | 企业部署的强需求：现版本写入 `%LOCALAPPDATA%` 触发安全策略拦截，需求从用户级走向 MSI/系统级安装器。 |
| [#5128](https://github.com/github/copilot-cli/issues/5128) | **会话视图/侧边栏支持重命名会话** | OPEN | 0 | 用户在多长任务并行场景下的高频小需求，体现 session 管理 UX 缺口。 |

**补充关注**：
- [#5088](https://github.com/github/copilot-cli/issues/5088) Windows WAM/Entra 首次登录 0xc0000005 崩溃（硬崩溃在 `msalruntime.dll`）
- [#5105](https://github.com/github/copilot-cli/issues/5105) macOS 沙箱阻断 Gradle daemon 本地连接
- [#5122](https://github.com/github/copilot-cli/issues/5122) `userPromptSubmitted` 多插件 `additionalContext` 仅最后一个生效（与 sessionStart 已修复的 #3589 对照）
- [#5123](https://github.com/github/copilot-cli/issues/5123) Windows 重启后终端安全拒绝导致恢复会话陷入死循环
- [#5120](https://github.com/github/copilot-cli/issues/5120) CLI 崩溃后未恢复终端 mouse-tracking / focus-reporting，标签页不可用

---

## 4. 重要 PR 进展

⚠️ **过去 24 小时内无 Pull Request 更新**。今日活跃度集中在 Issue 与 Release 上，PR 通道相对安静。建议关注 v1.0.97 系列内部对应的实现 PR（Hook 框架、内联图片、Autopilot 修复）是否在 review 中。

---

## 5. 功能需求趋势

按 Issue 聚合，社区关注的功能方向呈以下分布：

1. **BYOK / 多模型路由一致性**（最热）
   - 短名解析、内置 Agent 默认模型、子 Agent wire API 三处割裂；BYOK 用户难以获得统一心智模型。
2. **企业 / Windows 平台硬化**
   - 企业 MSI 安装器、WAM/Entra 账户中介、Dataverse/Atlassian MCP OAuth、MCP 2026-07-28 协议 MRTR，企业 IT 视角的硬需求。
3. **会话（Session）管理**
   - 重命名、恢复、跨重启持久化、120s ack 死锁修复；长任务工作流的关键支撑。
4. **Agent 体系增强**
   - scoped declarative hooks（已在 v1.0.97 落地）、自定义 Agent 发现可靠性、ACP mode 下 task tool 调用自定义 Agent 的回归。
5. **可观测性 / 终端体验**
   - prompt 执行计时、崩溃后终端状态恢复、菜单/鼠标 escape 序列清理。
6. **MCP 生态适配**
   - 新协议版本、Atlassian / Dataverse / Azure DevOps / Sentinel 等企业 MCP 服务器认证兼容性。

---

## 6. 开发者关注点（高频痛点）

| 痛点 | 体现 |
|------|------|
| **BYOK 行为不一致** | 短模型名不解析、内置 Agent 不读声明默认模型、子 Agent 强制共享 wire API——BYOK 仍是 Beta 感强烈的体验。 |
| **Windows 平台稳定度** | WAM 崩溃、Entra 登录失败、MSI 部署受限、Access Denied 卸载——Windows 路径仍是企业落地最大摩擦点。 |
| **会话可用性 / 恢复** | 120s 超时即永久失败、Windows 重启后恢复死循环、CLI 崩溃后终端状态污染——长会话可靠性仍是短板。 |
| **签名 / 公证 / 安装路径** | macOS Gatekeeper + Windows `%LOCALAPPDATA%` 写入两条线，跨平台企业部署均受阻。 |
| **多插件/多 Hook 上下文丢失** | `userPromptSubmitted` 多个 `additionalContext` 仅保留最后一个，扩展机制契约不明。 |
| **MCP 协议与企业认证适配滞后** | 2026-07-28 协议、Dataverse RFC 8414 issuer、Atlassian Rovo 400，企业 MCP 服务器接入零散易碎。 |

---

*日报基于 github.com/github/copilot-cli 公开数据生成，覆盖 2026-10-13 前后 24 小时的 Release、Issue 与 PR 动态。*

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

<think>Let me analyze the GitHub data for the OpenCode community on 2026-10-13 and generate a comprehensive daily report in Chinese.

**Data Analysis:**

1. **Releases**: No new releases in the past 24 hours - skip this section.

2. **Top Issues by comment count**:
   - #7602 (32 comments, 120 👍) - Native Model Fallback/Failover - CLOSED
   - #52184 (12 comments, 29 👍) - v2 changelog missing - OPEN
   - #54109 (9 comments) - Custom provider ignored - CLOSED
   - #50363 (8 comments) - Orphaned MCP processes - OPEN
   - #52281 (7 comments) - Windows cmd.exe flash - OPEN
   - #33704 (6 comments, 3 👍) - GUI to manage custom providers - OPEN
   - #51340 (6 comments) - RSS memory growth - OPEN
   - #47742 (6 comments, 2 👍) - Shared .agents/ directory - OPEN
   - #54697 (4 comments) - Compaction exposes session tools - CLOSED
   - #38528 (4 comments, 9 👍) - Port LSP/formatter to V2 - OPEN
   - #51209 (4 comments, 2 👍) - Expose V2 TUI composer to plugins - OPEN
   - #54690 (4 comments) - Image payload not counted - CLOSED
   - #54683 (4 comments) - Empty tool inputs hang - CLOSED
   - #54736 (4 comments) - V1 migration aborts - OPEN
   - #54679 (4 comments) - V1 to V2 migration hides sessions - CLOSED

3. **Important PRs** (top by significance):
   - #55045 - Test fixture fix
   - #54839 - Per-project auto-accept permissions - CLOSED
   - #54780 - Derive unread state from server watermarks
   - #55043 - Continue split Gemini responses - CLOSED
   - #54775 - Drop per-message model/agent from mobile - CLOSED
   - #55041 - OpenAI explicit prompt cache breakpoints
   - #55040 - Move cache format defaults
   - #54992 - Finalize partial stream parts before retry
   - #55042 - Continue split Gemini (first-prompt usage)
   - #55039 - Report capped file search indexes
   - #55038 - Return dialog focus from stack - CLOSED
   - #55032 - Raise default chunk timeout to 15min - CLOSED
   - #55034 - OpenAI explicit prompt cache breakpoints (earlier) - CLOSED
   - #55029 - Cat Jam Free model docs - CLOSED
   - #55003 - Preserve shared log objects
   - #55031 - Repeat shared objects in logs - CLOSED
   - #55030 - Same as 55031 - CLOSED
   - #54838 - Open local file links with OS handler
   - #54482 - Include attached images in btw questions

4. **Key themes from data**:
   - V1 to V2 migration issues (multiple)
   - AI provider support (Gemini, OpenAI caching)
   - Plugin API extensibility
   - Memory/resource management
   - Model fallback/failover
   - Localization (zh/zh-TW)
   - Windows platform issues
   - TUI improvements
   - Documentation gaps

Let me now write the report in Chinese, structured as requested.</think>

# OpenCode 社区动态日报
**2026-10-13**

---

## 📌 今日速览

今日 OpenCode 仓库热度集中在 **V1→V2 迁移的稳定性**与**AI 模型层的扩展**两大主线。Issues 端，多个高优先级 Bug 集中在 V2 数据迁移（会话隐藏、消息 ID 校验、远程 MCP OAuth 凭证丢失）；PR 端，`@rekram1-node` 连续提交多个 Gemini 续传与 OpenAI 显式 prompt cache 断点相关重构，而 MCP 孤儿进程、Windows 子控制台闪烁等老问题仍未关闭。值得关注的是长期 Feature Request #7602（**跨模型自动 Failover**）以 32 条评论、120 👍 正式被关闭，标志着社区在多模型兜底能力上的诉求已得到实质性回应。

---

## 🚀 版本发布

过去 24 小时无新版本发布。

---

## 🔥 社区热点 Issues

| # | 标题 | 状态 | 评论 / 👍 | 关注理由 |
|---|------|------|-----------|----------|
| [#7602](https://github.com/anomalyco/opencode/issues/7602) | **[FEATURE]** 原生模型 Fallback / Failover 支持 | ✅ CLOSED | 32 / 👍120 | 长期高赞特性请求，解决"模型 A 失败/限流自动切换模型 B"的真实痛点，已达成共识并落地。 |
| [#52184](https://github.com/anomalyco/opencode/issues/52184) | **[2.0]** v2 版本无任何发布说明 | 🟢 OPEN | 12 / 👍29 | 用户层面影响最大：v2.0.x 用户完全无法看到 changelog，且 release body 仅 `release: v2.0.20`。文档侧需要补齐。 |
| [#54109](https://github.com/anomalyco/opencode/issues/54109) | **Bug**：opencode.json 中自定义 Provider 被忽略（Ollama） | ✅ CLOSED | 9 | 本地推理用户高优痛点，1.18.35 上完全无法加载本地 provider 配置。 |
| [#50363](https://github.com/anomalyco/opencode/issues/50363) | **mcp**：会话结束后 npx MCP 子进程残留 | 🟢 OPEN | 8 | Linux/无后台维护环境下 MCP 进程持续累积，影响长跑工作流稳定性。 |
| [#52281](https://github.com/anomalyco/opencode/issues/52281) | **Windows**：git/MCP 子 cmd.exe 窗口闪烁并抢焦点 | 🟢 OPEN | 7 | 即便设置了 `windowsHide`，Windows 11 上 `cmd /d /s /c` 仍弹出，对桌面体验影响明显。 |
| [#51340](https://github.com/anomalyco/opencode/issues/51340) | **serve**：长时间运行内存泄漏（RSS 从 161MB 增至 1GB） | 🟢 OPEN | 6 | `opencode serve` 在重度使用 7 小时内 RSS 翻 6 倍，疑似空闲不释放。 |
| [#33704](https://github.com/anomalyco/opencode/issues/33704) | **[FEATURE]** GUI 管理自定义 Provider 与模型列表 | 🟢 OPEN | 6 / 👍3 | LM Studio、Jan AI 等本地推理引擎用户在 V2 缺乏可视化配置入口。 |
| [#47742](https://github.com/anomalyco/opencode/issues/47742) | **[FEATURE]** 支持共享 `.agents/` 目录与 Manifest 发现机制 | 🟢 OPEN | 6 / 👍2 | 仓库根目录被各类 agent 工具目录（.cursor、.claude、.windsurf）污染，呼吁统一目录规范。 |
| [#54697](https://github.com/anomalyco/opencode/issues/54697) | **[安全]** 压缩请求携带完整 session 工具暴露面 | ✅ CLOSED | 4 | **安全相关**：summarizer 请求中带 session 工具，理论上可执行写入/命令，存在权限越界风险。 |
| [#54736](https://github.com/anomalyco/opencode/issues/54736) | **[reproduced]** V1→V2 迁移因 message ID 校验失败中止 | 🟢 OPEN | 4 | 升级到 2.0.27 直接报错 `Schema validation failed`，阻断生产用户。 |

> 其他值得追踪的 OPEN 项：[#38528](https://github.com/anomalyco/opencode/issues/38528)（V2 LSP/formatter 移植）、[#51209](https://github.com/anomalyco/opencode/issues/51209)（V2 TUI composer 插件 API）、[#54879](https://github.com/anomalyco/opencode/issues/54879)（V1→V2 远程 MCP OAuth 凭证丢失）、[#54940](https://github.com/anomalyco/opencode/issues/54940)（非 Git 工作区文件搜索索引上限 10 万丢失条目）、[#53858](https://github.com/anomalyco/opencode/issues/53858)（zh/zht 字典缺 93 键）。

---

## 🛠️ 重要 PR 进展

| # | 标题 | 状态 | 意义 |
|---|------|------|------|
| [#55043](https://github.com/anomalyco/opencode/pull/55043) | **feat(ai)**: 续接拆分的 Gemini 响应（上下文感知 usage） | ✅ CLOSED | 处理 Gemini `finishReason: "CONTINUATION"` 的拆分响应，正确累计上下文 token。 |
| [#55042](https://github.com/anomalyco/opencode/pull/55042) | **feat(ai)**: 续接拆分的 Gemini 响应（首 prompt usage） | 🟢 OPEN | 与上一条配对：修复首 prompt 的 usage 统计口径。 |
| [#55041](https://github.com/anomalyco/opencode/pull/55041) | **feat(ai)**: 支持 OpenAI GPT-5.6+ 显式 prompt cache 断点 | 🟢 OPEN | 叠在 #55040 之上，新增 `cacheFormat: "openai"`，充分利用 GPT-5.6 显式缓存。 |
| [#55040](https://github.com/anomalyco/opencode/pull/55040) | **refactor(ai)**: 将 cache format 默认值下沉到 protocol/provider | 🟢 OPEN | 把缓存标记的默认值从集中策略文件移到 `Protocol/Route` 与各 provider 工厂，职责更清晰。 |
| [#55039](https://github.com/anomalyco/opencode/pull/55039) | **fix(server)**: 报告被截断的文件搜索索引 | 🟢 OPEN | 关闭 #54940，为 `/api/fs/find` 返回 `indexTruncated` 标志，前端可据此提示。 |
| [#54992](https://github.com/anomalyco/opencode/pull/54992) | **fix(opencode)**: 重试前结束残留流片段 | 🟢 OPEN | V2 收尾性修复，移植 #52440 测试覆盖至 V2。 |
| [#55038](https://github.com/anomalyco/opencode/pull/55038) | **fix(ui)**: 对话框焦点由栈统一管理 | ✅ CLOSED | 修 "Select model → Manage models" 等嵌套对话框焦点回退 bug。 |
| [#55032](https://github.com/anomalyco/opencode/pull/55032) | **fix(ai)**: 默认 chunkTimeout 提升至 15 分钟 | ✅ CLOSED | DeepSeek 等供应商要求至少 15 分钟流式等待，避免推理模型思考期被切断。 |
| [#54839](https://github.com/anomalyco/opencode/pull/54839) | **feat(app)**: 项目级 auto-accept 权限覆盖默认 | ✅ CLOSED | 在 #44608 的全局开关基础上新增"项目设置 → 自动接受权限"覆盖。 |
| [#54780](https://github.com/anomalyco/opencode/pull/54780) | **refactor(app)**: 未读状态改由服务器 viewed watermark 推导 | 🟢 OPEN | 桌面与 TUI 的未读判定统一到服务端字段，避免双端不一致。 |
| [#54482](https://github.com/anomalyco/opencode/pull/54482) | **fix**: `/btw` 旁问携带刚附加的图片 | 🟢 OPEN | 修复 `/btw` 只看历史图、看不上"刚上传图"的体验问题。 |

---

## 📈 功能需求趋势

通过盘点近 24 小时活跃议题，社区诉求呈现以下方向：

1. **🔁 多模型兜底与限流恢复** —— `#7602`、`#51410`（暴露 `ctx.integration` 上的 credential 列表/激活）凸显多 provider、多订阅场景下"自动 failover"已成核心需求。
2. **🧩 V2 插件与 API 完备性** —— `#51209`（TUI composer 暴露给插件）、`#38528`（LSP/formatter V2 化）、`#53954`（`ctx.reference.reload()` 不生效）共同指向"V2 插件生态功能面仍不及 V1"。
3. **🔄 V1→V2 迁移体验** —— 至少 5 个相关 Issue（#54736、#54679、#54879、#51107、#53074）集中在 schema 校验、会话可见性、OAuth 凭证、托管配置目录，迁移链路是当前最受挑战的工作流。
4. **🌏 本地化质量** —— `#53858` 指出 zh/zht 落后 en 共 93 个翻译键，中文用户体验混排问题突出。
5. **🖥️ 桌面/UI 体验** —— `#33704`（GUI 编辑 Provider）、`#54673`（workspace 可用性）、`#54908`（噪声 Issue）反映 Console/Web 用户对图形化配置入口的需求。
6. **🧠 上下文与缓存效率** —— Gemini 续传、OpenAI GPT-5.6 显式 cache 断点（#55041/55042/55043）显示用户在长会话与高频 agent 调用下对**缓存可控性**的强烈关注。
7. **🔌 SDK / 客户端** —— `#54300` 请求 Python 客户端面向 OpenCode 2.x server API，反映二次集成生态正在扩大。

---

## 💡 开发者关注点与痛点

**稳定性 / 资源**
- `opencode serve` 长跑内存只升不降（[#51340](https://github.com/anomalyco/opencode/issues/51340)）
- MCP 子进程在会话结束后不退出、累积至 PID 1（[#50363](https://github.com/anomalyco/opencode/issues/50363)）
- Windows `cmd.exe` 抢焦点闪烁（[#52281](https://github.com/anomalyco/opencode/issues/52281)）

**升级 / 数据一致性**
- V1→V2 迁移因 message ID 前缀校验失败中断（[#54736](https://github.com/anomalyco/opencode/issues/54736)）
- V1 global 项目会话迁移后在 cwd 范围下被隐藏（[#54679](https://github.com/anomalyco/opencode/issues/54679)）
- 远程 MCP OAuth 凭证不被迁移，需要重新授权（[#54879](https://github.com/anomalyco/opencode/issues/54879)）
- V2 不再读取 `%ProgramData%\opencode` / `/etc/opencode` 托管配置（[#51107](https://github.com/anomalyco/opencode/issues/51107)、[#53074](https://github.com/anomalyco/opencode/issues/53074)）

**AI 模型层**
- 同一 provider 内不同模型间无法 fallback（[#7602](https://github.com/anomalyco/opencode/issues/7602)，已 CLOSED）
- 长会话中图像/附件不计入 context，提前耗尽（[#54690](https://github.com/anomalyco/opencode/issues/54690)）
- 模型空输入 tool call 不拒绝反而挂起会话（[#54683](https://github.com/anomalyco/opencode/issues/54683)）
- summarizer 拿到完整 session 工具，存在越权面（[#54697](https://github.com/anomalyco/opencode/issues/54697)）

**文档与发布流程**
- v2 自发布以来**没有任何 changelog 条目**，release body 仅版本号（[#52184](https://github.com/anomalyco/opencode/issues/52184)）
- 桌面与 TUI 在未读状态上双轨判定（[#54780](https://github.com/anomalyco/opencode/pull/54780) 正在合并）

**生态与 SDK**
- 缺乏面向 OpenCode 2.x server 的官方 Python 客户端（[#54300](https://github.com/anomalyco/opencode/issues/54300)）
- 插件在 V2 下无法触达 TUI composer、reference reload 失效（[#51209](https://github.com/anomalyco/opencode/issues/51209)、[#53954](https://github.com/anomalyco/opencode/issues/53954)）

> **整体判断**：今天的动态显示 OpenCode 已经进入"**V2 功能补齐 + 迁移体验打磨**"的关键期。短期应优先收敛 V1→V2 数据迁移类 Issue 与 Windows/MCP 稳定性问题；中期则需补齐 v2 changelog、LSP/formatter、Python SDK 与中文本地化，以巩固开发者信心与生态扩展速度。

---

*报告数据截止 2026-10-13，仅基于 issue/PR 元信息汇总，不含 commit 与 discussion 数据。*

</details>

<details>
<summary><strong>jcode</strong> — <a href="https://github.com/1jehuang/jcode">1jehuang/jcode</a></summary>

<think>Let me analyze the GitHub data for jcode and generate a daily report for 2026-10-13.

Key observations:
1. No new releases in the past 24 hours
2. 9 Issues updated - covering providers (User-Agent config, OpenAI-compat fetch), MCP batch errors, CI build failures, TUI features, flaky tests, Windows ConPTY issues, MCP intent forwarding, UX scaling, OpenAI-compat model catalog
3. 35 PRs updated - many from @alecuba16 (TUI features), @yansigit (provider/auth/plugin system), @SiavZ (auth, build, selection), @akushonkamen (bug fixes)

Let me categorize the most important issues:
- #1520: Configurable User-Agent and HTTP headers - important for enterprise/gateway deployments
- #1811: Batch MCP calls failing with duplicate field - bug fix
- #1803: Master is red - CI breakage, critical
- #1633: Pin current-folder sessions in /resume - UX feature
- #1784: Flaky test in session_picker - test reliability
- #1812: Windows + herdr (ConPTY) inline input - Windows bug
- #1814: mcp_call forwards stray intent - small model bug
- #1813: Font size and UI scaling - UX feature
- #1808: OpenAI-compatible catalog fetch 400 - Anthropic API compat bug

PRs:
- #1709: overview folding widget, agents.memory_effort, runtime model rows
- #1706: Ctrl+S in /model picker for swarm model
- #1708: display.show_tps config
- #1346: /sessions <query> pre-filtered
- #1347: fix image blocks breaking turns on text-only models
- #1392: keep builds/manifest.json stable field in sync
- #1538: pane-safe glyphs for mermaid/math
- #1815: ask_user tool with inline TUI chooser
- #1817: fix batch duplicate-field error
- #1816: fix companion Windows pipe listener
- #1270: provider pool and multi-account
- #1263: upgrade-safe provider extensions
- #1271: Command Code native provider
- #1262: selfdev build identity
- #1260: versioned external provider protocol
- #1810: Fix Windows raw paste newline
- #1684: default Claude sign-in to CLI
- #1640: offer Claude Code CLI sign-in
- #1617: double-click/triple-click text selection
- #1722: prune old installed builds

Major themes:
1. TUI enhancements (sessions, model picker, selection, info panel)
2. Provider ecosystem expansion (Command Code, external provider protocol, auth)
3. Windows-specific bugs (ConPTY, paste handling, pipe listeners)
4. MCP integration improvements (batch errors, intent handling)
5. Build/installation lifecycle (manifest sync, pruning old builds)
6. UX (font scaling, font/UI controls)
7. Anthropic API compatibility (User-Agent, anthropic-version header)

Let me write a clean, professional Chinese tech report.</think>

# jcode 社区动态日报 · 2026-10-13

## 📌 今日速览

今天 jcode 仓库活跃度集中在 **MCP 集成缺陷修复** 与 **TUI/Provider 功能扩展** 两条主线：CI master 分支自 `089947b02` 起再次变红（#1803），同时 `mcp_call` 和 batch 调用接连曝出针对小模型的语义/序列化 bug（#1811、#1814）。PR 侧则以 `@alecuba16` 的 TUI 一系列增强（/sessions 预过滤、info-panel 折叠、ask_user 内联选择器）以及 `@yansigit` 的 provider 插件化体系（#1260/#1263/#1270/#1271）为主轴，整体节奏明显偏向"协议化 + 桌面体验"。

## 🚀 版本发布

无新 Release。

---

## 🔥 社区热点 Issues

| # | Issue | 重要性 | 链接 |
|---|---|---|---|
| **#1803** | master 自 `089947b02` 起 10 个 CI 任务中 5 个失败，包括 Windows E0596（`jcode-companion`）与 macOS 警告预算超限，与 #1796 的格式问题相互独立 | **🔥 阻塞** master 长期处于红色，新增提交叠加风险 | [#1803](https://github.com/1jehuang/jcode/issues/1803) |
| **#1811** | batch MCP 调用出现 `duplicate field tool`，wrapper 与子选择器冲突，错误在请求抵达 MCP server 之前就已抛出 | **🪲 影响范围广**，影响所有走 batch 工具的小模型工作流 | [#1811](https://github.com/1jehuang/jcode/issues/1811) |
| **#1814** | `mcp_call` 把 `intent` 字段透传到 `arguments` 中，小模型（如 qwen3.5 4B）经常把意图写到错误位置，导致 MCP 工具收到未定义字段 | **🪲 模型兼容** 直接决定小本地模型 MCP 工作流的可用性 | [#1814](https://github.com/1jehuang/jcode/issues/1814) |
| **#1520** | User-Agent 与全局 HTTP 头不可配置，企业网关/代理无法对 jcode 的 provider 流量做过滤或鉴权 | **🏢 部署侧阻塞**，评论 4 条属于高互动，是企业落地门槛议题 | [#1520](https://github.com/1jehuang/jcode/issues/1520) |
| **#1812** | Windows + herdr (ConPTY) 下 inline input 绘制行号错位、Enter 锚点错误，会"穿透"到 PowerShell | **🪲 平台阻塞**，影响 Windows 桌面 pane 用户核心交互 | [#1812](https://github.com/1jehuang/jcode/issues/1812) |
| **#1808** | `anthropic-api` 配置下用 OpenAI 兼容拉取 `/v1/models` 因缺少 `anthropic-version` 头导致 400 | **🪲 兼容性问题**，所有"假装 OpenAI"的 Anthropic 网关均会失败 | [#1808](https://github.com/1jehuang/jcode/issues/1808) |
| **#1784** | `session_picker::tests::cached_grouped_sessions_round_trip_from_disk` 并行负载下 ~1/50 flake | **🧪 测试可靠性**，长期 flake 影响回归判断 | [#1784](https://github.com/1jehuang/jcode/issues/1784) |
| **#1633** | `/resume` 中按当前文件夹置顶会话（多 repo 用户检索痛点） | **⭐ UX 增强**，社区认可的实用改进 | [#1633](https://github.com/1jehuang/jcode/issues/1633) |
| **#1813** | 桌面应用需要字体大小 + UI 缩放控件（聊天框、菜单、面板三档） | **⭐ UX 增强**，高分辨率屏/小屏用户普遍需求 | [#1813](https://github.com/1jehuang/jcode/issues/1813) |
| **#1520** | 已有标签 `needs-decision`，需 maintainer 决策后再实现 | **⏳ 待裁决**，未来若实现将影响所有 provider 流量 | [#1520](https://github.com/1jehuang/jcode/issues/1520) |

---

## 🛠️ 重要 PR 进展

| # | PR | 内容 | 链接 |
|---|---|---|---|
| **#1709** | 合并三项信息面板改造：overview 折叠 widget、`agents.memory_effort` 边车配置、运行时 model 行；一并关闭 #1639、#1634 | 信息密度可调 + 跨后端 memory 推理预算统一 | [#1709](https://github.com/1jehuang/jcode/pull/1709) |
| **#1706** | `/model` 弹窗内 `Ctrl+S` 直达 swarm 子模型选择器，协调者身份回退 config 默认（关闭 #981） | 群模型配置从"隐藏路径"升为主路径 | [#1706](https://github.com/1jehuang/jcode/pull/1706) |
| **#1708** | 新增 `[display] show_tps` 配置，可隐藏实时 tokens/sec 行（关闭 #1782），与 `show_thinking` 模式对称 | 给"安静模式"用户一个开关 | [#1708](https://github.com/1jehuang/jcode/pull/1708) |
| **#1346** | `/sessions` / `/session` / `/resume` 支持查询参数，启动即预过滤搜索（关闭 #1232） | 大 session 仓库检索效率明显提升 | [#1346](https://github.com/1jehuang/jcode/pull/1346) |
| **#1347** | 修复"图像块使纯文本模型 turn 中毒"：三层运行时模态恢复（关闭 #1302） | 解决 OpenAI 兼容端点误判模态的级联失败 | [#1347](https://github.com/1jehuang/jcode/pull/1347) |
| **#1392** | 安装流程同步 `builds/manifest.json` 的 `stable` 字段（关闭 #1413），三个安装路径全部覆盖 | 修复 selfdev 移除后的 manifest 漂移 | [#1392](https://github.com/1jehuang/jcode/pull/1392) |
| **#1538** | `herdr-webui` pane 内的 mermaid/math 改用 pane-safe glyph，关闭 #1529 | 浏览器终端中 Unicode 占位 U+10EEEE 泄露问题修复 | [#1538](https://github.com/1jehuang/jcode/pull/1538) |
| **#1815** | 新增 `ask_user` 工具：内联 TUI 选择器 + 数字快捷键 + 自由回退 + 超时自动选择（feature flag 控制） | 让 agent 在 turn 中结构化征询用户决策 | [#1815](https://github.com/1jehuang/jcode/pull/1815) |
| **#1817** | 修复 batch `duplicate field tool`（关闭 #1811）：当 `tool` 与别名 `name` 同时存在时丢弃 `name` | 直接对应当日热点 issue | [#1817](https://github.com/1jehuang/jcode/pull/1817) |
| **#1816** | 修复 companion 在 Windows 的 E0596（pipe listener 需 `mut`）与 macOS `unused_mut` 警告（关闭 #1803） | 修复当日 CI 红色根因之一 | [#1816](https://github.com/1jehuang/jcode/pull/1816) |

> 另值得关注：`#1260`/`#1263`/`#1270`/`#1271`/`#1262` 构成 @yansigit 的"provider 协议化 + 多账号池 + 插件化 + Command Code 一等公民 + build 身份"系列，`#1684`/`#1640` 把 Claude 登录默认走 Claude Code CLI，`#1722` 解决 selfdev 机器 56 版本/9.3 GiB 的存储膨胀。

---

## 📈 功能需求趋势

从今日 issue + PR 提炼，社区需求主要集中在以下方向：

1. **Provider 协议化与可扩展性**：版本化外部 provider 子进程协议（#1260）、upgrade-safe 插件（#1263）、多账号池（#1270）、Command Code 一等公民（#1271）、Anthropic-compatible `/v1/models` 修复（#1808）。**核心诉求：让 jcode 不被"新模型/新网关"绑架。**
2. **企业/代理友好化**：可配置 User-Agent 与全局 HTTP 头（#1520）已积累 4 条评论，是企业部署的硬门槛。
3. **桌面 / TUI 体验升级**：info-panel 折叠、tokens/sec 隐藏、/sessions 预过滤、ask_user 内联选择器、双/三击编辑选区、桌面字号 & UI 缩放控件（#1633/#1813/#1815/#1617/#1708/#1709/#1346）。**信号：社区把 jcode 当成日常 IDE/CLI 来打磨。**
4. **小模型 / 本地模型友好**：模态恢复（#1347）、`mcp_call` intent 误转发修复（#1814）、batch `tool/name` 别名修复（#1811/#1817）。**本地 Ollama / qwen3.5 4B 类用户比例在上升。**
5. **构建生命周期与磁盘治理**：manifest 同步（#1392）、自动清理历史版本（#1722）。**selfdev 用户的本地存储已经成为痛点。**
6. **Windows 平台一致性**：ConPTY 行号错位（#1812）、pipe listener mut（#1816）、raw paste 换行（#1810）。**Windows 仍是主要缺陷来源。**

---

## 🧑‍💻 开发者关注点

- **MCP 调用的边界要"严"**：两次"字段误序列化"类 bug（#1811/#1817、#1814）都暴露 jcode 对外部 payload 的宽容度过高，反而让小模型"正确地写错地方"。开发者反馈集中表达一个期望：**wrapper 与子 payload 之间应有更严格的 schema 校验**，而不是单纯 serde alias 透传。
- **CI 红色比单点 bug 更伤人**：#1803 + 之前的 #1796 显示维护者正与一个"格式与编译目标"螺旋缠斗，开发者呼吁 **CI 工作流与 rustfmt/clippy 预算**应作为"前置门禁"，避免坏窗口持续叠加。
- **provider 协议正在从"内部细节"走向"外部契约"**：#1260/#1263 明确把"用户自维护的 provider 可以跨 jcode 升级存活"作为设计目标。这意味着 jcode 的兼容性问题将越来越多出现在 **第三方 provider 与宿主版本错位** 这一层，维护者应提前给出协议版本协商的诊断命令。
- **本地小模型 + MCP 是真实使用路径**：qwen3.5 4B / Ollama 等条目反复出现，社区明确表示 "小模型能跑得通" 已经和"主模型效果"一样重要。
- **Windows + herdr 是体验洼地**：3 条 Windows 相关 issue 同日活跃（#1812/#1810/#1816），开发者普遍希望 **Windows 优先级不要总是低于 macOS/Linux**。

---

*日报基于 2026-10-13 当日更新的 9 条 Issue 与 35 条 PR 整理。*

</details>

<details>
<summary><strong>pi</strong> — <a href="https://github.com/earendil-works/pi">earendil-works/pi</a></summary>

<think>用户要求我根据 GitHub 数据生成 2026-10-13 的 pi 社区动态日报。我需要分析提供的 GitHub 数据，包括最新的 Releases、Issues 和 Pull Requests，然后生成一份结构清晰的中文日报。

让我仔细分析数据：

**Releases：**
- v1.2.0：Per-key OpenRouter model lists - 新增按 OpenRouter 密钥过滤可用模型的功能，包含 context size、max output 和价格

**Issues 分析（按评论数排序的前30条）：**
1. #6187 - Pi login hangs in WSL after browser-based GitHub Copilot device authorization（CLOSED，28评论）
2. #4180 - Links not clickable anymore（CLOSED，17评论）
3. #9361 - Windows: settings shellPath is non-deterministically ignored（OPEN，14评论）
4. #9688 - clipboard copy doesn't work anymore（CLOSED，10评论）
5. #10840 - openai-codex: GPT-6.1 Sol still uses 272K（CLOSED，8评论）
6. #9391 - After compaction, stale signed thinking blocks are replayed（CLOSED，7评论）
7. #10645 - resizeImage resolves null in compiled (Bun) executables（OPEN，7评论）
8. #10705 - abort() from agent_settled resolves but an already-deferred continuation still runs（OPEN，4评论）
9. #10844 - streamProxy rewrites an accepted done message to error（CLOSED，4评论）
10. #8877 - Read tool normalizes exact U+202F path and breaks macOS screenshot names（CLOSED，3评论）
11. #10846 - pi-env: accept an injected daemon process（OPEN，3评论）
13. #10864 - Session outliving its release loses not-yet-loaded providers（CLOSED，3评论）
14. #10147 - ENH: Fold /scoped-models into /model（CLOSED，3评论）
15. #10785 - Resuming a session drops dynamically activated tools（OPEN，3评论，prio:p0）
16. #10628 - OSC 52 copy in fullscreen TUI is swallowed by tmux（OPEN，3评论）
17. #10838 - --tools silently drops direct-exposure MCP tools（CLOSED，3评论）
18. #10870 - Radius changes /share behaviour（CLOSED，2评论）
19. #10868 - pi-ai: Invalid \u escapes cause tool-call arguments to lose fields（CLOSED，2评论）
20. #10867 - Prompt templates drop empty quoted arguments（CLOSED，2评论）
21. #10865 - fix: keep Pi 1.0.x/1.1.x compatible with Pi Codemode 1.2（CLOSED，2评论）
22. #9864 - Image resizing returns null under Node --watch（CLOSED，2评论）
23. #10750 - packages/durable README: document post-resume aborted salvage entries（CLOSED，2评论）
24. #10850 - Pi Web Code mode self-test: 10 s budget + sticky failure（CLOSED，2评论）
25. #10770 - Default permissions of `.pi/agent/sessions` should be `0700`（OPEN，2评论）
26. #10815 - subagent tool returns empty result（CLOSED，2评论）
27. #10798 - Concurrent pi processes race managed npm install（OPEN，2评论）
28. #10845 - pi-durable: identify the task behind each model request（OPEN，2评论）
29. #10869 - @earendil-works/pi-codemode 1.2.0 introduced a breaking change（CLOSED，1评论）
30. #10871 - Native MCP: publish connection status for custom footers（CLOSED，1评论）
31. #10866 - Add a modelDiscovery setting（CLOSED，1评论）

**Pull Requests（14条）：**
1. #10694 - fix(ai): adapt OAuth device polling margin after slow_down（OPEN）
2. #10528 - refactor nix part（OPEN）
3. #10855 - fix(ai): map minimal thinking to low on xiaomi MiMo models（CLOSED）
4. #1 - feat: add Windows Git Bash support to bash tool（CLOSED）
5. #10569 - feat(ai,coding-agent): filter OpenRouter models by key availability（CLOSED）
6. #10847 - fix: preserve legacy model catalog route on publish（OPEN）
7. #10718 - fix(coding-agent): include system prompt in --export HTML（OPEN）
8. #10672 - feat(ai,coding-agent): list only the OpenRouter models a key may use（CLOSED）
9. #10533 - fix(durable): reject waits that close a cycle（CLOSED）
10. #10834 - fix(coding-agent): fall back after Bun image worker null（CLOSED）
11. #10830 - fix(coding-agent): bound retries across successful tool turns（CLOSED）
12. #10829 - fix(coding-agent): demonstrate durable filtering of degenerate output（CLOSED）
13. #10739 - fix(coding-agent): emit before_agent_start for runs started by custom messages（CLOSED）
14. #10820 - fix(ai): send x-opencode-session by endpoint, not provider id（CLOSED）

我需要从这些数据中提炼出最值得关注的10个 Issues 和 10个 PR。

挑选标准：
- 评论数（热度）
- 严重程度（p0、breaking change 等）
- 影响范围（core API、provider、UI 等）
- 是否为功能需求 vs bug fix

**最值得关注的 Issues（按重要性）：**
1. #6187 - WSL Copilot 登录挂起（CLOSED，28评论）- 历史最高评论数
2. #10865 / #10869 - Codemode 1.2.0 破坏性变更（CLOSED）- 影响下游
3. #10785 - Resuming session drops dynamically activated tools（OPEN，p0）- 高优先级
4. #9361 - Windows shellPath 非确定性忽略（OPEN，14评论）- Windows 平台问题
5. #9688 - 剪贴板复制回归（CLOSED）- 影响所有用户
6. #4180 - Links not clickable（CLOSED）- 长期回归
7. #10840 - GPT-6.1 Sol 上下文窗口（CLOSED）- 新模型支持
8. #9391 - 压缩后签名 thinking blocks 重放（CLOSED）- Anthropic 集成
9. #10645 - Bun 编译后 resizeImage 返回 null（OPEN）- 影响 Windows 独立分发
10. #10628 - OSC 52 copy 在 tmux 中被吞掉（OPEN，3👍）

**最重要的 PR：**
1. #10672 - 列出 key 可用的 OpenRouter 模型（v1.2.0 主功能）
2. #10569 - 通过认证的 /api/v1/models/user 过滤（v1.2.0 主功能）
3. #10694 - OAuth 设备轮询余量（修复 WSL 时钟）
4. #10834 - Bun 图像 worker null 回退（修复 #10645）
5. #10830 - 跨成功工具轮次限制重试（重要稳定性）
6. #10739 - 自定义消息触发 before_agent_start（修复系统提示补丁问题）
8. #10847 - 保留旧模型目录路由（关键迁移）
9. #10820 - 按端点而非 provider id 发送 x-opencode-session（关键 bug 修复）
10. #10533 - 拒绝循环等待（修复 hang）
12. #10533 - reject waits that close a cycle（修复 hang）

**功能需求趋势：**
从 issues 和 PR 中可以提炼：
- **OpenRouter 模型治理**：按 key 过滤、regional endpoints（v1.2.0 主线）
- **Windows 兼容性**：WSL、Git Bash、shellPath、resizeImage
- **会话/状态恢复**：压缩、tools 激活、release 切换
- **MCP/Codemode 集成**：direct-exposure tools、状态发布
- **新模型适配**：GPT-6.1 Sol、xiaomi MiMo
- **可观测性/调试**：durable taskId 标注、aborted salvage 文档
- **隐私/安全**：.pi/agent/sessions 0700 权限
- **UX 简化**：/scoped-models 折叠到 /model、Radius/share 配置化
- **跨进程并发**：npm install 锁、pi-env 注入 daemon

**开发者关注点（痛点/高频需求）：**
- Windows 平台稳定性（shellPath、Bun、剪贴板、tmux）
- Session 恢复的完整性（动态工具、release 切换）
- Codemode/MCP 破坏性变更
- 第三方包兼容（pi-web 依赖 MCP_TYPESCRIPT_PREAMBLE）
- OpenRouter 按 key 隔离
- Durable 执行的可视化与调试
- 隐私安全（sessions 目录权限）
- Prompt 模板健壮性（空引号参数、转义字符）

现在我开始写日报。

注意：日期是 2026-10-13（用户要求生成该日期的日报）。

让我组织内容：

# Pi 社区动态日报 · 2026-10-13

## 今日速览
- v1.2.0 发布，核心特性是按 OpenRouter key 过滤模型列表（区分区域端点和价格）
- Codemode 1.2.0 移除 `MCP_TYPESCRIPT_PREAMBLE` 导出导致下游 pi-web 失效，社区紧急修复
- Windows 平台多个稳定性 issue 持续，包括 WSL Copilot 登录、shellPath 解析、Bun 编译后图像处理

## 版本发布
- v1.2.0：Per-key OpenRouter model lists

## 社区热点 Issues
（选10个）

## 重要 PR 进展
（选10个）

## 功能需求趋势

## 开发者关注点

我开始写。</think>

# Pi 社区动态日报 · 2026-10-13

## 今日速览

- **v1.2.0 正式发布**，核心特性是"按 OpenRouter key 过滤模型列表"：从认证的 `/api/v1/models/user` 获取当前 key 可用模型，连带上下文大小、最大输出、价格与区域端点。
- **Codemode 1.2.0 破坏性变更**引发连锁反应：移除 `MCP_TYPESCRIPT_PREAMBLE` 导出使下游 pi-web 直接瘫痪，社区连开 #10865/#10869 两条 issue 跟进兼容性回滚。
- **Windows 平台稳定性仍是主要矛盾**：WSL 下 GitHub Copilot OAuth 登录挂起（#6187）、`shellPath` 在扩展加载时被忽略（#9361）、Bun 编译产物 `resizeImage` 返回 null（#10645）三连击，相关 PR 在 24 小时内集中合并。

---

## 版本发布

### v1.2.0 — Per-key OpenRouter model lists

- **关键能力**：使用 OpenRouter key 后，Pi 只列出该 key 可用的模型，并自动取该 key 的 context size、max output、价格以及 `models.json` 中配置的 regional endpoints（如 `us.openrouter.com`）。
- **底层机制**：通过认证调用 `/api/v1/models/user` 与内置 catalog 合并，image 与 classifier 模型保留。([release 页面](https://github.com/earendil-works/pi/blob/v1.2.0/package))

---

## 社区热点 Issues（10 条）

1. **#6187 [CLOSED · 28 评论]** — *WSL 下 Pi 登录卡死*  
   WSL 中 GitHub Copilot 浏览器设备授权完成后，终端内 Pi 无法检测到授权完成而挂起。属于历史遗留长期 issue，热度最高。链接：https://github.com/earendil-works/pi/issues/6187

2. **#4180 [CLOSED · 17 评论]** — *超链接不可点击回归*  
   引入 alternate term mode 后，TUI 中 markdown 链接与裸 URL 均无法点击。属于影响面广的体验回归。链接：https://github.com/earendil-works/pi/issues/4180

3. **#9361 [OPEN · 14 评论]** — *Windows `shellPath` 被静默忽略*  
   加载任何扩展后，bash 工具的非确定性解析：`shellPath` 被忽略 → 回落 Git Bash → `PATH` 第一个 `bash.exe`（常命中 WSL System32）。链接：https://github.com/earendil-works/pi/issues/9361

4. **#9688 [CLOSED · 10 评论 · 👍2]** — *剪贴板复制回归*  
   为修复 #9618 调整 OSC 52 触发逻辑后，SSH/容器等无 xsel/wl-copy 环境的复制失效。链接：https://github.com/earendil-works/pi/issues/9688

5. **#10840 [CLOSED · 8 评论]** — *GPT-6.1 Sol 上下文仍显示 272K*  
   Codex 默认已升至 500K，但本地 catalog 仍声明 272000，Pi 沿用旧的 compaction 预算。涉及新模型适配滞后。链接：https://github.com/earendil-works/pi/issues/10840

6. **#10645 [OPEN · 7 评论]** — *Bun 编译后 `resizeImage` 返回 null*  
   Windows 11 上 Pi 单文件二进制（v0.87.1、v1.0.4）自 0.87.x 起所有图片附件被省略；问题定位到 Bun worker 成功返回 `null` 的语义被误判。链接：https://github.com/earendil-works/pi/issues/10645

7. **#9391 [CLOSED · 7 评论 · 👍1]** — *压缩后陈旧签名 thinking 块被反复重放*  
   每次新 turn 都触发 Anthropic `prefix_binding_mismatch`，且每次路径相同。链接：https://github.com/earendil-works/pi/issues/9391

8. **#10785 [OPEN · 3 评论 · P0]** — *恢复会话丢失动态激活的工具*  
   `defaultActive: false` 与 `exposure: "deferred"` 工具在 resume 后被视作删除。属核心功能回归，最高优先级。链接：https://github.com/earendil-works/pi/issues/10785

9. **#10705 [OPEN · 4 评论]** — *`session.abort()` 之后延迟的扩展回调仍触发新请求*  
   SDK 1.1.0 中 `agent_settled` 已决议中止，但扩展队列的 continuation 仍发起 HTTP 请求，违反 abort 语义。链接：https://github.com/earendil-works/pi/issues/10705

10. **#10628 [OPEN · 3 评论 · 👍3]** — *全屏 TUI 内 OSC 52 复制被 tmux 吞掉*  
    Copy-on-select 在 tmux 内只进入 tmux 的 paste buffer 不向外转发；headless SSH 场景无 DISPLAY/WAYLAND 时直接丢失。链接：https://github.com/earendil-works/pi/issues/10628

---

## 重要 PR 进展（10 条）

1. **#10672 [CLOSED] feat(ai,coding-agent): list only the OpenRouter models a key may use** — v1.2.0 主特性实现：将 catalog 与 `/models/user` 结果取交集，仅保留可用 chat 模型并吸收 key 维度的 context/output/价格。链接：https://github.com/earendil-works/pi/pull/10672

2. **#10569 [CLOSED] feat(ai,coding-agent): filter OpenRouter models by key availability** — 同主题姊妹 PR，使用 provider `baseUrl` 与有效 key 调用认证接口，支持区域隔离端点。链接：https://github.com/earendil-works/pi/pull/10569

3. **#10694 [OPEN] fix(ai): adapt OAuth device polling margin after slow_down** — 针对 WSL/Ubuntu 系统时钟偏快导致 Copilot OAuth 触发 `slow_down` 后永远轮询不到的问题，自适应放大轮询间隔。链接：https://github.com/earendil-works/pi/pull/10694

4. **#10834 [CLOSED] fix(coding-agent): fall back after Bun image worker null** — 修复 Bun worker 的 `null` 是合法结果但非成功 resize，导致后续 URL-worker 与进程内分支被旁路的问题。链接：https://github.com/earendil-works/pi/pull/10834

5. **#10830 [CLOSED] fix(coding-agent): bound retries across successful tool turns** — `maxRetries` 不再被 `toolUse` 成功重置，避免 `error → toolUse → error` 模式无止境地消耗预算。链接：https://github.com/earendil-works/pi/pull/10830

6. **#10739 [CLOSED] fix(coding-agent): emit before_agent_start for runs started by custom messages** — 修复 `sendMessage(..., { triggerTurn: true })` 跳过 `before_agent_start`，导致下一轮 refresh 把扩展追加的 system prompt 段给"打补丁"掉并破坏 provider prompt cache。链接：https://github.com/earendil-works/pi/pull/10739

7. **#10847 [OPEN] fix: preserve legacy model catalog route on publish** — 修复 0.80.8–0.84.4 经 pi.dev 拉取 OpenRouter catalog、而 0.85.0+ 才走 per-model 端点造成的兼容性断裂（关联 #9099）。链接：https://github.com/earendil-works/pi/pull/10847

8. **#10820 [CLOSED] fix(ai): send x-opencode-session by endpoint, not provider id** — OpenCode zen 端点要求按"对话"粒度的 `x-opencode-session`，原先只在 provider id 为 `opencode`/`opencode-go` 时注入，导致自定义 provider 报 `400 MissingSessionID`。链接：https://github.com/earendil-works/pi/pull/10820

9. **#10533 [CLOSED] fix(durable): reject waits that close a cycle** — 在循环等待的"闭合点"显式失败，避免 task 等待自身/owner 类型的任务永久 hang。链接：https://github.com/earendil-works/pi/pull/10533

10. **#10829 [CLOSED] fix(coding-agent): demonstrate durable filtering of degenerate output** — 演示扩展如何拦截压缩中反复重放的退化文本（如 1024 字符的 `"*\n"` 重复），以示例形式给出可复用解。链接：https://github.com/earendil-works/pi/pull/10829

> 附：#10718 [OPEN] `pi --export` 输出 HTML 补齐 system prompt；#10855 [CLOS

</details>

---
*本日报由 [Big Model Radar](https://github.com/96loveslife/big_model_radar) 自动生成。*
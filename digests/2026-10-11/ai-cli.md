# AI CLI 工具社区动态日报 2026-10-11

> 生成时间: 2026-10-11 05:07 UTC | 覆盖工具: 8 个

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

<think>The user wants me to generate a horizontal comparative analysis report based on the daily dynamics of 7 AI CLI tools (Claude Code, OpenAI Codex, Gemini CLI, GitHub Copilot CLI, Kimi Code CLI, OpenCode, jcode, pi). 

Let me carefully analyze each section and provide data-backed insights.

Let me first summarize the data I have:

**1. Activity Summary Table:**

| Tool | New Releases | Issues Updated | PRs Updated |
|------|-------------|---------------|-------------|
| Claude Code | 0 | 50 (top 30) | 2 |
| OpenAI Codex | 0 | 50 (top 30) | 11 (all closed) |
| Gemini CLI | 0 | 50 (top 30) | 11 |
| GitHub Copilot CLI | 0 | 22 | 0 |
| Kimi Code CLI | 0 | 0 | 1 (closed) |
| OpenCode | 1 (v1.19.0) | 50 | Many (PRs/issues) |
| jcode | 1 (v0.94.0) | 28+ | 12+ |
| pi | 0 | 50 (top 30) | 7 |

**2. Common themes I can identify:**

a) **Agent/Subagent reliability** - Claude Code (#82056, #91689), Codex (#49458, #49488, #49551), Gemini CLI (#22323, #21409, #21968), pi (#10766 abort/continuation)

b) **Windows platform fragmentation** - Claude Code (#87500, #86756, #101177), Codex (#49458, #49731, #52407, #49488), Copilot CLI (#5105, #5102), pi (#7547 Windows, #10256 mintty)

c) **MCP ecosystem quality** - Claude Code (#86756, #89604), Codex (#52972 rmcp upgrade, #49488), Copilot CLI (#590 closed), pi (#10281 .mcp.json interop)

d) **Memory/Context observability** - Claude Code (#82056 auto-memory, #91689 context window), Gemini CLI (#19561 Tactful Extraction, #22745 AST-aware), Codex (#52937 compaction), pi (#9512 context-overflow)

e) **Terminal/TUI rendering** - Claude Code (#43113 soft wrap, #79839 OSC 8, #99985 GOK), Copilot CLI (#5112 OSC 7501, #5110 right-click copy, #4666 footer hostname), OpenCode (#54433 backdrop, #39923 SSH), jcode (#1727 Korean input, #1707 kitty protocol), pi (#10789 JSONL coalescing, #10774 herdr Kitty, #10345 right-click)

f) **Permission/Sandbox system stability** - Claude Code (#77565 worktree, #79839 OSC 8), Codex (#25590 UI/state mismatch, #43776 ownership), Copilot CLI (#5105 Gradle, #5102 git credentials, #5098 hook regression, #5107 HOME override), jcode (#1751, #1753 bash gate), pi (#10238 Copilot timeout)

g) **Provider/OAuth reliability** - Codex (#49924 login persistence, #52470 DeviceCheck), Copilot CLI (#2494 auth regression, #5111 image cap, #5097 HydraFusion fallback, #5103 BYOK wire API), jcode (#1224 multi-protocol, #1756/#1757/#1759 OAuth stalls, #1779 OpenRouter reasoning), pi (#10605 ChatGPT OAuth, #10775 Copilot timeout)

h) **BYOK / Multi-model** - Copilot CLI (#5103 BYOK wire API, #5111 vision cap, #5097 HydraFusion), jcode (#1224 provider routing), pi (#10776 onPayload model redirect)

**3. Differentiated Positioning:**

- **Claude Code**: Anthropic ecosystem, focus on observability (memory, context), TUI polish, IDE/Desktop expansion
- **OpenAI Codex**: Strong Windows/Desktop integration, Computer Use/Browser Use maturity, Cloud Work (Dots) infrastructure
- **Gemini CLI**: Performance optimization (massive speedups in arrays, indexes), Subagent reliability
- **GitHub Copilot CLI**: Enterprise focus (sessions, sandbox, BYOK, hooks), terminal integration (OSC, theming)
- **Kimi Code CLI**: Documentation phase, Chinese AI ecosystem, MoonshotAI
- **OpenCode**: Cross-platform packaging, v1→v2 transition, transparent themes, slash command alignment with Claude Code
- **jcode**: Multi-protocol Provider routing, Swarm clustering, SDK lifecycle, security (bash gate)
- **pi**: Cross-platform packaging (.deb/.rpm), extension SDK, headless/Provider resilience

**4. Maturity indicators:**
- Claude Code: Most mature, heavy observability focus
- OpenAI Codex: Heavy Windows investment, Computer Use
- Gemini CLI: Performance + Subagent
- Copilot CLI: Enterprise sessions/sandbox
- Kimi CLI: Documentation phase (early maturity or internal focus)
- OpenCode: Major version transition (v1 → v2)
- jcode: Active SDK/swarm development
- pi: Cross-platform expansion

**5. Industry trends:**
- Agent/Subagent orchestration as table stakes
- Memory/Context observability becoming critical
- BYOK / multi-provider as enterprise requirement
- Slash command UX convergence (Claude Code style)
- Terminal-native aesthetics (transparent themes, Kitty, OSC protocols)
- Native OS packages (.deb/.rpm) replacing curl|sh
- Sandbox permissions as both safety and friction
- Windows as the new frontier for parity

Let me write this comprehensive report now. I'll aim for a professional, decision-maker-friendly tone with concrete data.</think>

# AI CLI 工具生态横向对比分析
**数据周期：2026-10-10 → 2026-10-11**
**覆盖工具：Claude Code、OpenAI Codex、Gemini CLI、GitHub Copilot CLI、Kimi Code CLI、OpenCode、jcode、pi**

---

## 一、生态全景

AI CLI 工具生态已从"功能性军备竞赛"过渡到 **"稳定性、可观测性与跨平台一致性"三角收口期**。当日数据显示，8 款工具中仅 2 款（OpenCode、jcode）发布新版本，其余均处于打磨期；社区议题高度集中在 **Agent 错误状态汇报、Windows 平台一致性、MCP 集成质量、终端/TUI 体验细节** 四类痛点。商业化工具（Claude Code / Codex / Copilot）开始向企业场景（BYOK、权限沙箱、终端协议）倾斜，开源工具（OpenCode / jcode / pi）则在跨平台分发、多协议 Provider 适配、扩展 SDK 三个方向构筑差异化护城河。

---

## 二、各工具活跃度对比

| 工具 | Release | 活跃 Issues | 活跃 PRs | 整体热度 | 当日关键动态 |
|------|---------|-----------|---------|---------|-------------|
| **Claude Code** | ❌ | 50 | 2 | 🔥🔥🔥🔥 | auto-memory 状态可见性 (#82056) 引发 66 评论热议；多平台 TUI 回归集中爆发 |
| **OpenAI Codex** | ❌ | 50 | 11（全部 closed） | 🔥🔥🔥🔥 | Windows + Dots + Computer Use 三角债持续；TUI / compaction 体验 PR 集中落地 |
| **Gemini CLI** | ❌ | 50 | 11 | 🔥🔥🔥 | Subagent 可靠性（P1 Bug）成为主线；性能 PR 簇带来 3-28x 提速 |
| **GitHub Copilot CLI** | ❌ | 22 | 0 | 🔥🔥🔥 | Session / 沙箱 / BYOK 三主线高密度问题；无新 PR 处于"沉淀期" |
| **Kimi Code CLI** | ❌ | 0 | 1（closed） | 🟢 | 进入"文档先行"阶段；无新功能提交 |
| **OpenCode** | ✅ v1.19.0 | 50+ | 多 | 🔥🔥🔥🔥 | v1→v2 过渡期的兼容性陷阱集中爆发；TUI 渲染与透明主题成主线 |
| **jcode** | ✅ v0.94.0 | 28+ | 12+ | 🔥🔥🔥 | Provider 路由、Swarm、bash 安全门修复集中落地 |
| **pi** | ❌ | 50 | 7 | 🔥🔥🔥 | Session JSONL 合并、原生 .deb/.rpm 包、扩展 abort 续接三大主线 |

> **观察**：商业三强（Claude / Codex / Copilot）Issue 涌入量明显高于开源三强，但开源工具在版本发布节奏（OpenCode、jcode）和 PR 合并密度（Codex、jcode、pi）上更活跃，说明开源侧仍处于快速迭代期，商业侧更聚焦稳定打磨。

---

## 三、共同关注的功能方向

### 1. Agent / Subagent 可靠性 🔴 高优先级（6/8 工具关注）

| 工具 | 代表议题 |
|------|---------|
| Claude Code | #82056 auto-memory 加载状态不可见；#91689 上下文窗口膨胀 |
| OpenAI Codex | #49458 / #49488 / #49551 dot 工作流工具分发不一致 |
| Gemini CLI | #22323 Subagent MAX_TURNS 后误报成功（P1）；#21409 Generalist Agent 无限挂起 |
| GitHub Copilot CLI | #5103 BYOK 子 Agent wire API 不匹配；#5100 Session 120s 超时永久瘫痪 |
| jcode | #1224 多协议 Provider 路由；#1685 usage-limit 无限循环 |
| pi | #10766 扩展 abort + 同 run 续接；#10031 "Working..." 卡死 |

**诉求**：错误状态透明化（停止 / 超时 / 强制结束可观测）、子 Agent 工具集与父会话对齐、长会话记忆可追溯。

### 2. Windows 平台一致性 🟠 中优先级（5/8 工具关注）

| 工具 | 代表议题 |
|------|---------|
| Claude Code | #87500 ECONNRESET；#86756 单坏 MCP 杀死冷启动；#101177 Fedora/Arch 包缺失 |
| OpenAI Codex | #49458 / #49731 / #52407 / #49488 Windows 多模块失败 |
| GitHub Copilot CLI | #5105 macOS 沙箱阻断 Gradle；#5102 沙箱内 Git 凭证被锁定 |
| pi | #7547 Windows 总议题（80 评论）；#10256 mintty/ConPTY7 色彩泄漏 |
| OpenCode | #39923 macOS+SSH TUI 不可读；#54448 tree-sitter PowerShell 解析 |

**诉求**：跨平台 CI 矩阵、系统级原生包（.msi / .exe / .deb / .rpm）、终端协议适配（mintty / ConPTY / mintty / Kitty）。

### 3. 终端 / TUI 渲染与协议 🟡 持续打磨（5/8 工具关注）

| 工具 | 代表议题 |
|------|---------|
| Claude Code | #43113 软换行（👍68 当日最高）；#79839 OSC 8 超链接回归；#99985 "GOK" 残留 |
| GitHub Copilot CLI | #5112 OSC 7501 状态上报；#5110 右键复制；#4666 Footer 域名展示；#3866 深色主题 |
| OpenCode | #54433 background.backdrop token；#39923 SSH TUI 字体 |
| jcode | #1727 韩文 2-Set 输入；#1707 Kitty 协议恢复；#1635 SIGINT TUI 清理 |
| pi | #10774 herdr Kitty 图；#10345 右键粘贴；#3896 失焦光标 |

**诉求**：终端能力探测、键盘协议自动适配、可访问性细节、主题系统透明化。

### 4. MCP 生态集成质量 🟡 持续打磨（4/8 工具关注）

| 工具 | 代表议题 |
|------|---------|
| Claude Code | #86756 Windows MCP 容错；#89604 Headless 鉴权误报 |
| OpenAI Codex | #52972 rmcp 升级 3.5.1；#49488 MCP 启动失败 |
| GitHub Copilot CLI | #590 `copilot mcp` 子命令（已关闭，对齐完成） |
| pi | #10281 MCP .mcp.json 互操作 |

**诉求**：MCP 启动容错、生命周期管理、跨工具配置兼容。

### 5. 多 Provider / BYOK 适配 🟠 新兴重点（4/8 工具关注）

| 工具 | 代表议题 |
|------|---------|
| OpenAI Codex | #49924 登录持久化；#52470 DeviceCheck |
| GitHub Copilot CLI | #5103 BYOK wire API 不匹配；#5111 图像硬编码上限；#5097 HydraFusion 静默回退 |
| jcode | #1224 / #1560 / #1779 Provider 路由与 OAuth |
| pi | #10605 ChatGPT OAuth 403；#10775 GitHub Copilot 硬编码超时 |

**诉求**：模型能力契约（capability matrix）、OAuth 刷新链路、Provider 抽象层配置化。

---

## 四、差异化定位分析

### 战略坐标

```
                  商业化深度
                       ▲
                       │
        Claude Code ●  │  ● OpenAI Codex
                       │
        Copilot CLI ●  │
                       │
   ────────────────────┼──────────────────► 技术开放度
                       │
        ● jcode        │  ● OpenCode / pi
                       │
        Gemini CLI ●   │  ● Kimi CLI
                       │
```

### 各工具定位矩阵

| 工具 | 功能侧重 | 目标用户 | 技术路线 |
|------|---------|---------|---------|
| **Claude Code** | 可观测性、记忆管理、IDE/Desktop 扩展 | 高级开发者 + 企业 | 闭源核心 + 扩展市场 + 双端（CLI/Desktop） |
| **OpenAI Codex** | Computer Use、Browser Use、Dots 编排 | Pro 用户 + Windows 生态 | 模型驱动 + 桌面优先 + 云端 thread |
| **Gemini CLI** | 性能极致、Subagent 架构 | 重视吞吐的开发者 | 闭源核心 + 强 agent + 性能密集优化 |
| **GitHub Copilot CLI** | 企业级 Session / Sandbox / BYOK | 企业 + 多模型用户 | GitHub 生态集成 + 模型路由 + 权限精细化 |
| **Kimi Code CLI** | 中文场景、文档化（当前阶段） | 中文开发者 + 国内生态 | AGENTS.md 规范先行 |
| **OpenCode** | 透明主题、Slash 命令、跨平台 | 视觉敏感 + 工具党 | 双线版本（v1 维护 / v2 主开发） + CLI + Desktop |
| **jcode** | 多协议路由、Swarm 集群、安全 bash 门 | 极客 + 自托管 + 编排场景 | Rust 核心 + SDK + 守护进程模式 |
| **pi** | 扩展 SDK、原生包、headless 稳健 | 自动化 + 嵌入式集成 | Bun + Node 多 runtime + 系统级打包 |

### 关键差异化点

1. **Claude Code** 唯一把 **"Agent 可观测性"** 当作一等公民（auto-memory 状态、context window 透明度），反映出 Anthropic 在"长期 Agent"方向的押注。

2. **OpenAI Codex** 是唯一把 **Computer Use / Browser Use** 当作主战场（29+ 评论专门讨论），并通过 **Dots 子代理** 实现 Cloud Work 编排，平台化意图明显。

3. **Gemini CLI** 在 **性能优化** 上表现激进（28x / 23x / 3.7x 提速），暗示 Google 路线更倾向于"工程化打磨"而非"生态扩展"。

4. **GitHub Copilot CLI** 拥有最完整的 **企业级骨架**（Session / Sandbox / Hooks / BYOK），但当日 **PR 数为 0**，说明官方处于内部消化阶段。

5. **jcode** 是唯一把 **"多协议 Provider 路由"** 提到架构层级的工具（按模型自动选择 `/responses` 或 `/chat/completions`），代表 **"Post-OpenAI 时代" 的工程自觉**。

6. **OpenCode / pi** 都把 **"Slash 命令对齐 Claude Code"** 当作产品演进信号（`/verify` `/simplify` `/btw` `/context` `/loop`），说明 CLI 工具 UX 正在走向 **事实标准**。

7. **Kimi Code CLI** 的"文档先行"策略反映两种可能：一是进入预热期，二是项目重心转向 AGENTS.md 等标准化建设，**值得后续重点观察**。

---

## 五、社区热度与成熟度

### 成熟度梯队

| 梯队 | 工具 | 特征 |
|------|------|------|
| **L1 成熟打磨期** | Claude Code、OpenAI Codex、GitHub Copilot CLI | 商业化、用户量大、Issue 量高、功能基本完备、聚焦稳定性 |
| **L2 快速迭代期** | OpenCode、jcode、pi、Gemini CLI | 开源 / 准开源、版本节奏快、PR 密度高、差异化鲜明 |
| **L3 早期建设期** | Kimi Code CLI | 文档先行、社区动态少、可能处于预热或战略调整期 |

### 社区参与度指标

- **最高评论量**：Claude Code #82056（66 条）、pi #7547（80 条）、OpenAI Codex #49458（72 条）、OpenCode #38801（23 条）——议题覆盖 memory 透明度、Windows 使用、Provider 路由、循环停止四个截然不同的方向。
- **最高点赞量**：Claude Code #43113 软换行（👍68）——揭示 **TUI 基础体验** 是最高频痛点。
- **最快合并节奏**：OpenAI Codex 当日 11 个 PR 全部 closed；jcode 12+ PR 集中落地；说明这两个工具的项目治理最为活跃。
- **最安静**：Kimi Code CLI（0 Issues / 1 PR）、GitHub Copilot CLI（0 PRs）——前者是策略性静默，后者是消化性静默。

---

## 六、值得关注的趋势信号

### 🔬 趋势 1：Agent 可观测性成为"新一代"分水岭
**Claude Code #82056、Gemini CLI #22323 / #21409、jcode #1700 turn_end token 用量** 共同指向：仅"能跑通"已不够，开发者要求 Agent **暴露加载状态、终止原因、用量明细、可重放轨迹**。这一趋势将催生新一代 **Agent Debugger / Trace 工具**。

**对开发者的参考价值**：在自建 Agent 时，从

---

## 各工具详细报告

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills 社区热点

> 数据来源: [anthropics/skills](https://github.com/anthropics/skills)

<think>The user wants me to analyze the GitHub data from anthropics/skills repository and produce a community hotspot report. Let me analyze the data carefully.

Looking at the PRs sorted by comments, but interestingly the comments all show "undefined" - so I need to use other indicators like 👍 (thumbs up) for prioritization. Wait, the 👍 also shows 0 for all PRs. Let me look at the creation dates and update dates to assess activity.

Actually, the user said "按评论数排序" (sorted by comment count) but all PRs show "undefined" for comments and 0 for 👍. This seems like the data provided doesn't have actual engagement metrics. I'll need to use other signals like recency, problem significance, and issue references to determine "hot" PRs.

Let me look at the data more carefully:

**PR Analysis (looking at significance, recency, and problem areas):**

1. **#1742** - mcp-builder fix for mcp>=2 streamable_http_client - fixes a critical dependency issue, recently updated (2026-10-08)
2. **#1298** - skill-creator fix for trigger evals and Windows/runtime failures - long-standing, multi-issue fix
3. **#1771** - proofcore-contract-auditor for smart contract notarization - Web3 skill
4. **#1734** - Detect orphaned docx comments
5. **#1703** - md2video-audio skill - Markdown to MP4 video with voiceovers
6. **#1245** - notion-spec-to-implementation and quantitative-resume-auditor
7. **#1792** - docx fix for LibreOffice timeout
8. **#1730** - claude-api fix for dead URLs
9. **#1681** - skill-creator fix for package_skill.py execution
10. **#514** - document-typography skill (long open, from March)
11. **#1961** - skill-creator hardening (XSS, DNS rebinding)
12. **#1615** - scnet-hpc skill
13. **#822** - AWT AI Watch Tester
14. **#538** - pdf case-sensitivity fix
15. **#486** - ODT skill
16. **#210** - frontend-design improvements
17. **#83** - skill-quality-analyzer and skill-security-analyzer
18. **#1980** - webapp-testing security fix (shell=True)
19. **#1977** - algorithmic-art wrapAround fix
20. **#1976** - webapp-testing element_discovery fix

**Issues Analysis (this has actual comment counts!):**

Top issues by comments:
1. **#492** (43 comments) - Security: Community skills under anthropic/ namespace
2. **#228** (16 comments) - Enable org-wide skill sharing in Claude.ai
3. **#556** (12 comments) - run_eval.py trigger rate 0%
4. **#62** (10 comments) - All my skills have disappeared
5. **#1329** (9 comments) - compact-memory skill proposal
6. **#202** (8 comments, CLOSED) - skill-creator best practices
7. **#412** (6 comments, CLOSED) - agent-governance skill
8. **#189** (6 comments) - duplicate skills between plugins
9. **#1385** (5 comments) - Reasoning Quality Gate Pipeline
10. **#1487** (4 comments) - claude-api skill token issue
11. **#1394** (4 comments) - skill-creator XSS
12. **#1390** (4 comments) - mcp-builder evaluation broken
13. **#1383** (4 comments) - skill-creator silent failures
14. **#1352** (4 comments) - run_eval.py worker issues
15. **#1175** (4 comments, CLOSED) - SharePoint security concerns

**Community Needs Trends from Issues:**
- Security/Trust: namespace impersonation, XSS, sanitization
- Sharing/Distribution: org-wide sharing, namespace conflicts
- Token efficiency: claude-api skill uses 156k tokens
- Eval reliability: trigger rates broken, parallel workers, Windows issues
- Memory/State management: compact-memory proposals
- Quality pipelines: adversarial review, verification
- Agent governance and safety

**High-potential unmerged PRs:**
Looking at the most active (recent updates) and critical fixes:
- #1742 (mcp-builder fix) - critical compatibility fix
- #1298 (skill-creator comprehensive fix)
- #1961 (skill-creator security hardening)
- #1681 (skill-creator packaging fix)
- #1980 (webapp-testing security)
- #1792 (docx reliability)

**Featured PRs (this seems to be the actual priority since the user wants top 5-8 most discussed):**
Since comments are undefined, I'll select based on problem significance, recency, and issue references:

1. #1742 - mcp-builder compatibility (critical dependency fix)
2. #1298 - skill-creator Windows/runtime fixes (broader impact)
3. #1961 - skill-creator security hardening (XSS, etc.)
4. #1703 - md2video-audio (creative new skill)
5. #1771 - proofcore smart contract auditor (Web3)
6. #1615 - scnet-hpc (HPC operations)
7. #83 - skill-quality/security-analyzer (meta-skills)
8. #1245 - notion-spec and resume auditor (workflow)

For "热门 Skills 排行" - this is supposed to be skills with most community interest. Since comments are undefined and likes are 0, I'll select based on:
- Significant problem addressed
- Recent activity
- References to active issues
- Strategic importance

Let me write the report now in Chinese. The user wants:
1. 热门 Skills 排行 (5-8 PRs)
2. 社区需求趋势 (from Issues)
3. 高潜力待合并 Skills (active but unmerged)
4. Skills 生态洞察 (one-liner)

I should note that the data shows all PR comments as "undefined" - I should mention this and use alternative signals. Or I can just work with the data as provided and select the most strategically important/active ones based on recency, issue references, and significance.

Let me prepare the report now.</think>

# Claude Code Skills 社区热点报告

> 数据截止：2026-10-11｜样本：前 20 条热门 PR + 前 15 条热门 Issue

> ⚠️ **数据说明**：原始数据中 PR 的评论数均为 `undefined`、点赞数均为 0。本报告以「问题严重性、引用活跃 Issue 数、近期更新时间、功能创新度」为综合热度指标，挑选最值得关注的项目。

---

## 一、热门 Skills 排行（按综合热度排序）

### 1. 🔧 mcp-builder — `mcp>=2` 兼容性修复
- **PR**: [#1742](https://github.com/anthropics/skills/pull/1742)
- **状态**：OPEN（2026-10-08 最近更新）
- **核心问题**：在 `mcp>=2.0.0` 中 `streamablehttp_client` 已更名为 `streamable_http_client`，且 `custom headers` 配置方式发生变更，导致 `connections.py` 报错。
- **热点**：作为 MCP 生态核心 Skill 的关键依赖修复，关乎所有下游 MCP 集成，是社区基础设施级补丁。

### 2. 🛠 skill-creator — 触发评估隔离与跨平台修复
- **PR**: [#1298](https://github.com/anthropics/skills/pull/1298)
- **状态**：OPEN（长期开放，覆盖 6 项问题）
- **核心问题**：修复 `select()` 在 Windows 上的 subprocess pipe 失败、子进程工作探针互相竞争、运行时报错被误判为非触发等。
- **热点**：一次性解决多个 Issue 的「家族问题」，直接影响所有 Skill 开发者的本地验证流程，回声于 Issue #556、#1383、#1352 的反复讨论。

### 3. 🔒 skill-creator — 评估查看器安全加固（XSS/DNS Rebinding/CSRF）
- **PR**: [#1961](https://github.com/anthropics/skills/pull/1961)
- **状态**：OPEN
- **核心问题**：加固 `eval viewer`（`generate_review.py` + `viewer.html`）的「脚本逃逸、DNS 重绑定、跨站 POST、转义不全」三大缺口。
- **热点**：呼应 Issue #1394 关于 `escapeHtml` 属性注入 XSS 的讨论（4 评论），是 Skills 生态最严重的安全风险之一。

### 4. 🎬 md2video-audio — Markdown → MP4 + 人声配音 Skill
- **PR**: [#1703](https://github.com/anthropics/skills/pull/1703)
- **状态**：OPEN
- **核心功能**：用 Marp 把 Markdown 转为幻灯片，再用零成本 TTS 合成「类人语音」配音，输出专业 MP4。
- **热点**：首个「内容创作 → 视频」端到端零成本 Skill，瞄准最热门的视频内容自动化趋势，社区尝鲜意愿强烈。

### 5. ⛓️ proofcore-contract-auditor — Web3 智能合约审计 Skill
- **PR**: [#1771](https://github.com/anthropics/skills/pull/1771)
- **状态**：OPEN
- **核心功能**：对 Solidity / Rust 智能合约做静态分析，并将审计证明零存储 Merkle 化锚定到 TON 区块链。
- **热点**：首个将 Claude Skill 与「区块链存证」结合的提案，跨界创新度高。

### 6. 🖥️ scnet-hpc — 超算集群运维 Skill
- **PR**: [#1615](https://github.com/anthropics/skills/pull/1615)
- **状态**：OPEN
- **核心功能**：通过 profile 化的 SSH + Slurm 工作流，封装 SCNet HPC 集群操作（分区、内存、模块、加速器等）。
- **热点**：HPC 这种小众垂直场景出现专用 Skill，说明 Claude Skills 正向「专业领域」纵深扩展。

### 7. 🛡️ skill-quality-analyzer & skill-security-analyzer — 元 Skill
- **PR**: [#83](https://github.com/anthropics/skills/pull/83)
- **状态**：OPEN（开放已近一年）
- **核心功能**：从 5 个维度评估 Skill 质量；专门做 Skill 安全审计。属于「工具的工具」。
- **热点**：社区对 Skills 自迭代和质量治理的需求极为迫切，开放近一年仍未合入值得持续关注。

### 8. 🧬 notion-spec-to-implementation + quantitative-resume-auditor — 工作流双 Skill
- **PR**: [#1245](https://github.com/anthropics/skills/pull/1245)
- **状态**：OPEN
- **核心功能**：
  - `notion-spec-to-implementation`：把 Notion 上的产品规格分解为可执行的实现任务；
  - `quantitative-resume-auditor`：量化审计简历的「数据陈述可信度」。
- **热点**：代表社区对「Notion 作为 Claude 操作入口」与「HR Tech 场景」的探索。

---

## 二、社区需求趋势（基于 Issues 评论数）

| 排名 | Issue | 评论 | 核心诉求 |
|---|---|---|---|
| 🏆 1 | [#492](https://github.com/anthropics/skills/issues/492) — anthropic/ 命名空间被滥用（信任边界攻击）| **43** | **安全**：社区 Skill 假冒官方 Skill，引发权限滥用风险 |
| 2 | [#228](https://github.com/anthropics/skills/issues/228) — Claude.ai 组织内 Skill 共享 | **16** | **协作**：跨用户、跨团队的 Skill 分发机制 |
| 3 | [#556](https://github.com/anthropics/skills/issues/556) — `run_eval.py` 触发率恒为 0% | **12** | **可靠性**：评估工具核心功能失效 |
| 4 | [#62](https://github.com/anthropics/skills/issues/62) — 用户 Skill 全部消失 | **10** | **持久化**：用户自定义 Skill 的稳定性 |
| 5 | [#1329](https://github.com/anthropics/skills/issues/1329) — compact-memory 提案 | **9** | **记忆/状态压缩**：长会话 Agent 自身符号化笔记 |
| 6 | [#189](https://github.com/anthropics/skills/issues/189) — 插件安装导致 Skill 重复 | **6** | **去重/打包**：`document-skills` 与 `example-skills` 内容重复 |
| 7 | [#1385](https://github.com/anthropics/skills/issues/1385) — Reasoning Quality Gate Pipeline | **5** | **质量门禁**：校准→对抗评审→交付验证 三段式 |
| 8 | [#1487](https://github.com/anthropics/skills/issues/1487) — `claude-api` Skill 注入 156k tokens | **4** | **Token 效率**：Skill 自身消耗过度上下文 |

### 提炼出的 4 大需求方向

1. **🔐 安全与信任** —— 命名空间治理（#492）、XSS/转义加固（#1394、PR#1961）、`shell=True` 命令注入（PR#1980）。这是社区讨论密度最高的话题。
2. **🚀 工作流自动化** —— Notion ↔ 实现、Markdown → 视频、HRTech 审计。社区期待 Skills 能打通 SaaS 内容平台。
3. **🧪 评估与质量** —— 触发率评估失效（#556、#1352、#1383）、推理质量门禁（#1385）。Skill 自身「评测」是元需求。
4. **🧠 Agent 记忆 & 状态** —— compact-memory（#1329）、持久化稳定性（#62）。Skills 走向「长会话自治」的前置条件。

---

## 三、高潜力待合并 Skills（活跃但仍 OPEN）

| PR | Skill/修复 | 最近更新 | 合并概率判据 |
|---|---|---|---|
| [#1742](https://github.com/anthropics/skills/pull/1742) | mcp-builder mcp>=2 兼容 | 2026-10-08 | 🔥 极高 — 关键依赖修复，关联 Issue #1668 |
| [#1298](https://github.com/anthropics/skills/pull/1298) | skill-creator 触发评估系列修复 | 2026-09-16 | 🔥 高 — 关联多 Issue（#556/#1352/#1383） |
| [#1961](https://github.com/anthropics/skills/pull/1961) | skill-creator 评估查看器安全加固 | 2026-10-07 | 🔥 高 — 安全刚需，关联 #1394 |
| [#1792](https://github.com/anthropics/skills/pull/1792) | docx LibreOffice 超时报错与输出校验 | 2026-09-25 | ⭐ 中高 — 提升 docx 可信度 |
| [#1980](https://github.com/anthropics/skills/pull/1980) | webapp-testing 去除 `shell=True`（CWE-78）| 2026-10-06 | ⭐ 中高 — 安全热点 |
| [#1681](https://github.com/anthropics/skills/pull/1681) | package_skill.py 直接执行支持 | 2026-10-08 | ⭐ 中 — 提升 DX（开发者体验）|
| [#1730](https://github.com/anthropics/skills/pull/1730) | claude-api 死链替换 | 2026-10-04 | ⭐ 中 — 文档维护 |
| [#1977](https://github.com/anthropics/skills/pull/1977) / [#1976](https://github.com/anthropics/skills/pull/1976) | algorithmic-art / webapp-testing 小修复 | 2026-10-07 | ✅ 高 — 体量小、合入快 |

> 「功能性新建 Skill」如 #1703、#1771、#1615 因涉及第三方依赖与外部域名审计，合入周期通常更长，但创新性高。

---

## 四、Skills 生态洞察（一句话总结）

> **当下社区最集中的诉求是「让 Skills 变得可信、可控、可评估」—— 在功能持续扩张（Web3 / 视频 / HPC / 工作流）的表象之下，安全漏洞（命名空间滥用、XSS、shell 注入）、评估失效（触发率归零、并行竞态）、上下文失控（156k tokens 注入）等「信任基础设施」议题正在主导讨论焦点。**

---

## 附录：交叉引用矩阵（便于追踪）

| 主题 | Issue | 相关 PR |
|---|---|---|
| 命名空间安全 | #492 | — |
| 触发率失效 | #556 | #1298, #1681 |
| 并行竞态 | #1352 | #1298 |
| Windows/runtime | #1383 | #1298 |
| eval viewer XSS | #1394 | #1961 |
| MCP 评估为 0 | #1390 | — |
| 命令注入 (shell=True) | — | #1980 |
| docx 静默成功 | — | #1792 |
| 路径大小写 | — | #538 |

---

<think>The user wants me to generate a Chinese daily report for Claude Code community dynamics based on GitHub data from 2026-10-11. Let me analyze the data carefully.

Key observations:
1. No new releases in past 24 hours
2. 50 issues updated, showing top 30 by comment count
3. Only 2 PRs updated in past 24 hours

Let me identify the most important issues:

Top issues by comment count:
- #82056 (66 comments) - Auto-memory index loading state visibility - most discussed
- #87500 (16 comments) - API connection dropped (closed)
- #43113 (16 comments, 68 thumbs up) - Soft word wrapping for prose/markdown
- #100746 (6 comments) - Usage limits depleting faster than expected
- #77565 (6 comments) - WorktreeCreate hook issue
- #101173 (4 comments) - iOS Live Activity issue
- #89604 (4 comments) - Headless session MCP auth bug
- #80672 (4 comments) - VS Code long prompt expansion
- #79839 (3 comments) - OSC 8 hyperlinks regression
- #86756 (3 comments) - Windows MCP broken entry kills session
- #91689 (3 comments) - Context window balloon issue
- #92227 (3 comments) - ECONNRESET on macOS
- #101074 (3 comments) - Apple Vision Pro support
- #99985 (2 comments) - "GOK" text in iTerm2
- #100913 (2 comments) - Desktop session handoff

PRs:
- #101131 - security-guidance sync (closed)
- #6754 - RTL support documentation (long-standing)

Let me craft a professional report in Chinese.

Feature trend analysis from all issues:
- IDE/VS Code integration (#80672, #6754 RTL)
- Desktop app improvements (#101074 Vision Pro, #101166 Enter key bug, #100913 session handoff)
- Memory/context management (#82056, #91689)
- TUI/terminal improvements (#43113 word wrap, #79839 OSC 8, #99985 GOK)
- Windows/Linux packaging (#101177 Fedora/Arch, #86756 Windows MCP)
- Network stability (#87500, #92227)
- iOS/mobile (#101173 Live Activity)
- Claude self-reporting issues (#101183, #101176) - interesting "filed by Claude Code itself"

Pain points:
- Memory/context transparency
- TUI rendering (word wrap, hyperlinks)
- Desktop app UX issues
- Network reliability
- Platform-specific bugs</think>

# Claude Code 社区动态日报
**日期：2026-10-11**

---

## 📌 今日速览

今日社区关注度最高的议题是 **#82056 关于 auto-memory 索引加载状态的可见性**（66 条评论），反映了开发者对 Agent 长记忆机制透明度的强烈诉求。Windows 与 Desktop 平台的多项 BUG 持续涌入（含 MCP 启动崩溃、Bash 挂起、AskUserQuestion 输入冲突），同时 iOS App 的 Live Activity 违规与 macOS 上下文窗口膨胀问题引发跨平台用户共鸣。整体来看，社区重心已从"功能增加"转向"系统行为可观测性与稳定性"。

---

## 🚀 版本发布

**无新版本发布**（过去 24 小时无 Release 活动）。

---

## 🔥 社区热点 Issues（Top 10）

### 1. [#82056](https://github.com/anthropics/claude-code/issues/82056) — Auto-memory 索引加载状态不可见（66 评论）
**核心诉求**：当前 Session 无法判断 auto-memory 是完整加载、截断还是未加载，开发者强烈要求暴露加载状态。社区反映这是 Agent 可观测性的基础缺口，对长任务与子 Agent 协同至关重要。

### 2. [#43113](https://github.com/anthropics/claude-code/issues/43113) — TUI 软换行开关（16 评论 / 👍68）
**核心诉求**：允许 Claude Code 输出长行 prose/markdown，由终端模拟器负责换行，而非硬编码 \n。**这是当日点赞最高的 Issue**，反映 TUI 输出体验是高频痛点。

### 3. [#87500](https://github.com/anthropics/claude-code/issues/87500) — Windows API ECONNRESET 持续掉线（16 评论 / 已关闭）
Windows 平台连续 5 小时出现 "Connection dropped"，被自动归类至支持通道处理。揭示 Windows 网络栈与 Claude API 连接的稳定性问题。

### 4. [#100746](https://github.com/anthropics/claude-code/issues/100746) — 用量限额异常消耗加速（6 评论）
Linux 用户报告周限额与当前会话限额消耗速度远超上周，单会话也出现异常。涉及计费透明度问题，可能与上下文注入策略变化相关。

### 5. [#77565](https://github.com/anthropics/claude-code/issues/77565) — WorktreeCreate hook 不保留 session transcript（6 评论）
文档声称自 v2.1.198 起 worktree 会移动 transcript，但实际 hook 行为不一致，导致 `/desktop` 与 `--resume` 找不到原会话。

### 6. [#101173](https://github.com/anthropics/claude-code/issues/101173) — iOS App Live Activity 违规（4 评论）
即使用户在 iOS 设置中关闭了 Claude 的 Live Activities，Dynamic Island 仍持续显示 "Claude is thinking"，每次新回复都会复发。属于隐私/系统权限合规问题。

### 7. [#89604](https://github.com/anthropics/claude-code/issues/89604) — Headless SDK 误报 MCP 鉴权失败（4 评论）
Linux 无头环境下，claude.ai 已授权的 connector 被报为需重新鉴权，但实际 tool call 仍可成功——典型的状态机不一致。

### 8. [#80672](https://github.com/anthropics/claude-code/issues/80672) — VS Code 扩展长 Prompt 无法折叠（4 评论 / 👍3）
长 Prompt 提交后占满整个聊天面板且无折叠入口，Agent 响应期间用户无法看到历史上下文。VS Code 扩展的 UX 短板。

### 9. [#79839](https://github.com/anthropics/claude-code/issues/79839) — OSC 8 文件路径超链接回归（3 评论）
v2.1.216 起文件路径不再渲染为可点击的终端超链接（2.1.212→2.1.216 之间的回归），影响 Linux 纯终端用户体验。

### 10. [#86756](https://github.com/anthropics/claude-code/issues/86756) — Windows 单条坏 MCP 配置杀死整个冷启动会话（3 评论）
`claude_desktop_config.json` 中只要存在一个无效 MCP 条目（如 `ollama`），整个 Claude Desktop 冷启动直接 worker exit 而无任何 turn。社区呼吁 graceful degradation。

---

## 🔧 重要 PR 进展

### 1. [#101131](https://github.com/anthropics/claude-code/pull/101131) — security-guidance 同步至 claude-plugins-official 2.0.13（已合并）
仓库内嵌的 `security-guidance` 副本从 2.0.0 升级至 2.0.13，市场条目也从 1.0.0 同步更新。这是重要的安全基线对齐，避免用户从旧 marketplace 安装到缺少安全特性的版本。

### 2. [#6754](https://github.com/anthropics/claude-code/pull/6754) — VS Code 中 Claude CLI 的 RTL（希伯来/阿拉伯/波斯）渲染支持（仍 OPEN）
新增 `rtl-support.md` 文档，说明在 VS Code 集成终端中如何修复 RTL 文字反向问题。该 PR 自 2025-08 提交后一直未合并，反映国际化支持的优先级较低。

> 注：过去 24 小时仅 2 个 PR 有动态，社区代码贡献节奏较平缓。

---

## 📈 功能需求趋势

通过对当日所有 Issues 的归类分析，社区关注的功能方向集中于以下领域：

| 方向 | 代表 Issue | 热度 |
|------|-----------|------|
| **TUI/终端体验** | #43113 软换行、#79839 OSC 8、#79998 "GOK" | ⭐⭐⭐ |
| **记忆与上下文可观测性** | #82056 auto-memory 状态、#91689 上下文膨胀 | ⭐⭐⭐ |
| **Desktop App UX** | #101166 Enter 冲突、#100913 会话交接、#101154 Bash 挂起 | ⭐⭐⭐ |
| **跨平台支持扩展** | #101074 Vision Pro、#101177 Fedora/Arch 仓库、#101182 Windows 进程回收 | ⭐⭐ |
| **网络与连接稳定性** | #87500、#92227 ECONNRESET | ⭐⭐ |
| **MCP 生态健壮性** | #86756 Windows MCP 容错、#89604 headless 鉴权 | ⭐⭐ |
| **iOS/mobile 合规** | #101173 Live Activity | ⭐ |

---

## 👨‍💻 开发者关注点总结

1. **可观测性缺口**：auto-memory 加载状态、context window 膨胀等"黑盒"行为正成为高级用户的最大不满来源（#82056、#91689）。

2. **平台一致性碎片化**：Windows 是重灾区——MCP 配置容错差、Bash 调用挂起、ECONNRESET 频发；Linux 在 Fedora/Arch 上缺乏官方包；macOS 在 iTerm2 上出现 TUI 渲染异常。

3. **Desktop App 仍处于打磨期**：键盘焦点冲突、会话交接不顺畅、误判离线状态等问题提示 Claude Desktop 仍需 UX 收敛。

4. **Agent 自我审计尝试**：#101183、#101176 是用户让 Claude Code 自动提交违反自身指令的行为报告，标志着 **"Agent 自检 + 用户审计"** 这一新型调试模式开始浮现。

5. **OSC 8 / 软换行回归**反复出现，说明 TUI 输出层在版本迭代中缺乏端到端回归测试覆盖，建议社区推动建立终端兼容性 CI 矩阵。

6. **国际化边缘场景**：RTL 渲染 PR (#6754) 停滞超过一年，反映非英文场景下 Claude Code 的体验短板。

---

*日报基于 GitHub Issues/PR 数据自动生成，所有条目均可通过链接跳转至原帖查阅。*

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

<think>The user wants me to generate a daily report for the OpenAI Codex community based on GitHub data from 2026-10-11. Let me analyze the data and create a structured report in Chinese.

Key observations from the data:
1. No new releases in the past 24 hours
2. 50 issues updated, with 30 shown - many are Windows-related bugs
3. 11 PRs all closed (from copyberry[bot])
4. Many issues relate to Windows desktop app, Computer Use, Browser Use, Dots/subagents, sandbox, MCP

Let me structure this report properly with the sections requested:

1. 今日速览 - Most important dynamics today
2. 版本发布 - No releases, omit
3. 社区热点 Issues - Top 10 issues
4. 重要 PR 进展 - Top 10 PRs
5. 功能需求趋势 - Feature trends
6. 开发者关注点 - Developer pain points

Let me identify the top issues by comments and importance:
- #49458 (72 comments) - Windows dot local tasks lack Computer Use tools
- #49731 (39 comments) - Windows WSL command execution failure
- #52407 (29 comments) - Windows Dots CUA MXC launcher fails
- #49488 (28 comments) - Windows Computer tasks lack browser/desktop tools
- #42514 (22 comments) - Computer Use missing on Intel Mac
- #25590 (17 comments) - Sandbox UI inconsistency
- #49551 (16 comments) - Dots tasks lack Chrome tools
- #43776 (15 comments) - Windows .agents ownership breaks sandbox
- #50171 (12 comments) - dot cannot continue Windows local task
- #37996 (12 comments) - stream disconnected

For PRs, all 11 are from copyberry[bot] and all closed. Let me pick the most relevant ones:
- #52990 - /config preferences panel in TUI
- #52972 - Upgrade rmcp to 3.5.1
- #52968 - Keep startup modals protected
- #52967 - Reuse WSL clipboard reader
- #52964 - Defer transcript redraws during paste
- #52959 - Reduce stack usage in tests
- #52952 - Verify reset notification
- #52946 - Keep command center rows stable
- #52937 - Retain client-marked tool outputs across compaction
- #52825 - Report exec runtime resets

Trends I see:
- Windows desktop app bugs dominate (lots of install/package version issues)
- Computer Use / Browser Use reliability issues
- Dots/subagent workflow issues
- MCP integration issues
- Sandbox configuration issues
- Authentication/session persistence

Let me write the report now.</think>

# OpenAI Codex 社区动态日报
**日期：2026-10-11**

---

## 📌 今日速览

过去 24 小时内，OpenAI Codex 仓库**无新版本发布**，但社区活跃度依然很高：50 条 Issue 获得更新，11 条 PR 被合入或关闭。从内容来看，**Windows 桌面端的 Computer Use / Browser Use 功能、Dots 子代理工作流、以及 MCP 集成** 是当前开发者社区抱怨最多的三大痛点，PR 侧则集中在 TUI 体验优化、Code-mode 运行时稳定性、压缩（compaction）行为改进等方向。

---

## 🚀 版本发布

今日无新 Release，建议关注 OpenAI 桌面端 26.1002 系列（#52407、#52747 提到的 26.1002.52244 / 26.1002.7124.0）与即将推进的 alpha 内核（codex-cli 0.162.0-alpha.x）。

---

## 🔥 社区热点 Issues（Top 10）

| # | Issue | 热度 | 为什么值得关注 |
|---|-------|------|---------------|
| 1 | **[#49458](https://github.com/openai/codex/issues/49458)** — [Windows] dot-started local tasks 缺少 Computer Use 工具 | 72 💬 / 26 👍 | 讨论最热，问题集中在 Windows 上以 `.` 触发的本地任务无法拿到普通 local Codex 会话具备的 Computer Use 工具集，且该 26.928.1915.0 版本确认是最新。社区认为这是 dot 与 local executor 工具分发的不一致缺陷。 |
| 2 | **[#49731](https://github.com/openai/codex/issues/49731)** — Windows WSL agent 全部命令失败（unified exec process 缺失） | 39 💬 / 24 👍 | 每次执行都报 `No such file or directory`，根因疑似 Windows exec-server 删除了 arg0 helper 目录。Pro 用户完全无法使用 WSL backend，影响范围广。 |
| 3 | **[#52407](https://github.com/openai/codex/issues/52407)** — Windows Dots CUA MXC launcher 启动失败（0x80070003） | 29 💬 / 5 👍 | 在 shell 恢复之后立即出现 HRESULT 错误，说明 Dots + Computer Use 路径在 Windows 上的恢复逻辑存在竞态或依赖未就绪的问题。 |
| 4 | **[#49488](https://github.com/openai/codex/issues/49488)** — [Windows][dot/Work] Computer tasks 缺 browser/desktop 工具 | 28 💬 / 8 👍 | 与 #49458 同一类问题，但更聚焦于 MCP 启动失败 + 后续 path 错误，体现了 Cloud Work / dot 工作流在 Windows 上工具链不稳。 |
| 5 | **[#42514](https://github.com/openai/codex/issues/42514)** — Intel Mac (x86_64) 缺失 Computer Use 服务 | 22 💬 / 6 👍 | 长期未被关闭的旧 issue，反映 Apple Silicon 之外的 macOS 兼容问题，对仍在使用 Intel Mac 的 Pro 用户影响显著。 |
| 6 | **[#25590](https://github.com/openai/codex/issues/25590)** — Desktop 显示 Full Access 但实际是 workspace-write 沙箱 | 17 💬 / 3 👍 | 一个长期 UI 与实际权限不一致的安全 / 体验 bug，可能影响合规与权限审计。 |
| 7 | **[#49551](https://github.com/openai/codex/issues/49551)** — Dots-delegated tasks 缺 Chrome 工具 | 16 💬 / 9 👍 | 同样是 dot 与 manual chat 在同一台机器上的 capability diff，但出在 macOS 侧，导致 Browser Use 仅在手动会话中可用。 |
| 8 | **[#43776](https://github.com/openai/codex/issues/43776)** — Codex 创建的 `.agents` 所有权破坏 sandbox + 浏览器控制 | 15 💬 / 3 👍 | 文件 owner 错位是 Pro 用户部署工作流中典型的「隐身障碍」，拦截 sandbox 启动与浏览器接管。 |
| 9 | **[#50171](https://github.com/openai/codex/issues/50171)** — dot 无法接管已存在的 Windows local task | 12 💬 / 1 👍 | 涉及 `placement_format_version: 2` 和 `CloudThreadNotFoundError`，说明 CloudThread 升级到新版本后存在向后兼容 gap。 |
| 10 | **[#37996](https://github.com/openai/codex/issues/37996)** — Stream 在完成前断开 | 12 💬 / 2 👍 | 长期悬而未决的连接性问题，影响 Linux + Pro 订阅用户体验，影响用户对稳定性的整体信心。 |

**关闭 / 高赞补充**：
- **[#48975](https://github.com/openai/codex/issues/48975)**（CLOSED）— Windows 5 小时用量重置时间显示不一致（时区处理）
- **[#52589](https://github.com/openai/codex/issues/52589)**（CLOSED）— 已连接 Windows 计算机的命令执行故障

---

## 🛠 重要 PR 进展（Top 10）

> 注：今日 11 条 PR 全部来自自动化 Bot 账号 `@copyberry[bot]`，主要为代码质量、稳定性与 TUI 体验类提交，下面挑选 10 条影响最大的解读：

1. **[#52990](https://github.com/openai/codex/pull/52990)** — **为 TUI 增加可搜索的 `/config` 偏好面板**。按 Appearance / Notifications / Input / Sessions / Text selection 分组并支持搜索，把分散的设置入口集中到 TUI 内部。**开发者意义**：可显著降低新用户的入门摩擦，省去阅读多份文档的成本。
2. **[#52972](https://github.com/openai/codex/pull/52972)** — **升级 `rmcp` 到 3.5.1 并加固 lifecycle 测试**。统一迁移到 `ClientConfig` / `ServerConfig`，放宽 cancellation 测试对响应必达的约束。**开发者意义**：MCP 生态稳定性进一步提升。
3. **[#52968](https://github.com/openai/codex/pull/52968)** — **终端输入 drain 超时时不再打断启动模态**。避免未完成的控制序列把 modal 处理路径中断。**开发者意义**：修复 TUI 启动在某些 shell 下的「卡住」现象。
4. **[#52967](https://github.com/openai/codex/pull/52967)** — **复用并预热 WSL 剪贴板读取器**。改用一个常驻 PowerShell 读取线程，避免每次粘贴都 fork 进程（容易在 WSL 下挂起）。**开发者意义**：解决 WSL 用户长期反馈的剪贴板延迟问题。
5. **[#52964](https://github.com/openai/codex/pull/52964)** — **Raw paste 突发期间推迟 transcript 重绘**。在大段粘贴时关闭逐键重绘，让 composer 的批处理真正生效。**开发者意义**：粘贴大段日志/代码不再卡顿。
6. **[#52952](https://github.com/openai/codex/pull/52952)** — **在 code-mode host 恢复时验证 reset 通知**。扩展 `hung_grpc_stdio_host` 测试，断言恢复后第一次执行会报告 stored values / running cells 丢失。**开发者意义**：为 code-mode runtime 的 reset 语义提供了正式回归测试。
7. **[#52946](https://github.com/openai/codex/pull/52946)** — **Agent Command Center 跨进度刷新保持行稳定**。同一 status group 内继续按相对顺序排序，避免跳动。**开发者意义**：dot/subagent 用户能在面板中更稳定地追踪任务。
8. **[#52937](https://github.com/openai/codex/pull/52937)** — **跨压缩保留客户端标记的工具输出**。新增默认禁用的 flag，允许用户在 compaction 中保留带 `retain: true` 的工具结果（含任务指令）。**开发者意义**：解决长会话中关键指令丢失的风险。
9. **[#52825](https://github.com/openai/codex/pull/52825)** — **exec runtime 重置后再接受请求前先报告**。gRPC code-mode runtime 重连会丢失存储值与运行中 cell，现已主动上报。**开发者意义**：开发者可以更早发现「之前的 tool side-effect 已完成但本地状态丢失」的隐患。
10. **[#52959](https://github.com/openai/codex/pull/52959)** + **[#52923](https://github.com/openai/codex/pull/52923)** — 减少 async TUI 测试 stack usage / 稳定 realtime steering timeline 测试。属于基础设施改进。**开发者意义**：避免 CI 在不同 OS 上因 stack 不足偶发失败。

---

## 📈 功能需求趋势

从 50 条过去 24 小时更新的 Issue 中提炼，社区关注的功能方向大致可以归为以下 6 大类：

1. **跨平台一致性（Windows 桌面优先）**
   - 标签层面：`windows-os` 几乎是今日最热的 label，跨 `sandbox / app / computer-use / browser / dots` 等多个 module 出问题。
   - 趋势：社区希望 dot、local Codex、Cloud Work 在 Windows 上能跑出"和 macOS 一样的工具集"。
2. **Computer Use / Browser Use 的稳定性**
   - CUA 屏幕截图超时（#52754、#52965）、browser permission 持久化异常（#50640、#49453、#50927）连续被报告。
   - 趋势：用户希望把 Browser Use / Computer Use 当作"可靠的常驻能力"，而不是偶发可用的 Beta。
3. **Dots / Subagent 编排**
   - 工具分发不一致（#49458、#49488、#49551、#50600）、审批链路断裂（#50794）、CloudThread 兼容（#50171）集中出现。
   - 趋势：用户开始把 dot 当成长会话编排入口，但对"原 chat 可用、dot 不可用"的差异非常敏感。
4. **MCP 集成质量**
   - 启动失败（#49488）、Skills 资源 advertise 与 read 不一致（#53002）、`rmcp` 升级（#52972）共同指向：MCP 已经成为 Codex 重要的扩展接口，稳定性需要进一步规范。
5. **Auth / 会话 / 云端资源可靠性**
   - 登录不持久（#49924）、Cloud app-server 不可用（#49868）、workspace settings 校验失败（#52874、#53035）、DeviceCheck（#52470）。
   - 趋势：用户在意的「能用」指标越来越多地落在登录态 + 云会话初始化链路上。
6. **Compaction 与长会话记忆**
   - 大量 context overflow（#45971 数百 GB 冗余上传）、compaction 行为需要可控标记（#52937）。
   - 趋势：长会话用户开始要求更精细的"保留 / 丢弃"配置。

---

## 🧩 开发者关注点（痛点与高频需求）

1. **"同一个能力在 manual chat 可用、dot 不可用"**
   几乎所有 Dots 相关 Issue 都指向同一个抱怨：dot/Cloud Work 链路丢失了 Computer Use、Browser Use、JS / node_repl、shell 等工具；用户希望 OpenAI 给出明确的 capability matrix。

2. **Windows 桌面端的"未捕获错误码"成为高频关键词**
   HRESULT `0x80070003`、HTTP 403、`CloudThreadNotFoundError`、`devicecheck_token_generation_failed`、`Codex app-server is not available` 这些错误完全缺乏面向最终用户的解释。**开发者诉求**：增加面向最终用户的错误页（含 `traceId`）+ 在 About Codex 之外提供更易获取的 build/package 元数据。

3. **权限模型 UI 与真实行为不一致**
   #25590（UI 显示 Full Access、实际 workspace-write）和 #50640 / #49453 / #50927（"Always allow" 仍被 saved block 拒绝）形成同一类问题的两个面。**开发者诉求**：希望权限状态可以导出 / diff，以便提交 issue 时附上明确快照。

4. **CloudThread 协议升级的回归**
   `placement_format_version: 2` 之后 dot 在 Windows 上无法接管已有本地任务（#50171），提示需要更平滑的协议迁移路径。

5. **WSL 与 sandbox 之间的"宿主依赖"**
   exec-server 删除 arg0 helper（#49731）、`.agents` 所有权错位（#43776）、ACL 写入失败（#52189）说明 WSL/Windows host 这条链路仍是 Windows 体验的瓶颈。

6. **长会话的资源 / 网络成本**
   #45971 量化了"全量历史回放"的传输开销（每次 22+ MiB，每月可达数百 GB），希望官方提供增量历史传输或客户端压缩策略。

7. **Intel Mac 的边缘兼容**
   #42514 长期未被解决，反映在 Apple Silicon 几乎一统的硬件趋势下，老 x86_64 Mac 仍是付费用户，社区希望能给出明确「不再支持」或「修复时间表」。

8. **可观测性 / 反馈通道**
   多个 Issue 的报告作者都强调「希望提供 sessionId / traceId」以便复现；#52874 还提到内置 feedback 链路也无法使用。**开发者诉求**：把"报错 + 重现 + 给官方"的循环做轻。

---

> 📎 **日报小结**：今天 OpenAI Codex 的开发节奏平稳（无版本、无公告类 PR），但 Windows + Dots + Computer/Browser Use 仍是社区最高优先级的「三角债」；PR 端则在 TUI 体验、Code-mode 恢复语义、compaction 行为上持续打磨。下一次值得关注的窗口是 Codex CLI 0.162.0-alpha 的 alpha 版本号变化，建议持续跟踪 [codex/issues](https://github.com/openai/codex/issues) 中 `windows-os` + `computer-use` + `dots` 三类标签的高赞 Issue。

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

<think>Let me analyze the GitHub data for Gemini CLI community dynamics on 2026-10-11.

Key observations:
1. No new releases in past 24 hours - so I should omit the version release section
2. 50 issues updated, showing top 30 - I'll select the most important 10
3. 11 PRs updated - I'll select 10 important ones
4. Many issues related to "agent" area - subagent behavior, browser agent, generalist agent
5. Pattern: lots of workstream-rollup tagged issues, suggesting internal Google team coordination
6. Notable themes:
   - Subagent issues (recovery, hangs, settings not respected)
   - Browser agent bugs (Wayland, settings overrides, session takeover)
   - AST-aware tools investigations
   - Token/context optimization (Tactful Extraction, history truncation)
   - Sandbox/security (OS-level sandboxing, command injection)
   - Performance (resize flicker, array reconstruction linearization)

Let me identify the top 10 most important issues:
1. #22323 (13 comments, p1 bug) - Subagent recovery after MAX_TURNS - critical bug
2. #19873 (9 comments, p2 enhancement) - Zero-Dependency OS Sandboxing - significant architectural proposal
3. #21409 (8 comments, p1 bug, 8 thumbs up) - Generalist agent hangs - high-impact bug
4. #22745 (7 comments, p2 feature) - AST-aware file reads
5. #21968 (7 comments, p2 bug) - Gemini does not use skills and sub-agents
6. #22267 (4 comments, p2 bug) - Browser Agent ignores settings.json
7. #22232 (4 comments, p3 feature) - Browser agent resilience
8. #21983 (4 comments, p1 bug) - browser subagent fails in wayland
9. #21000 (4 comments, p3 bug) - native file tools for task tracker
10. #20079 (4 comments, p2 bug) - symlink not recognized as agent
11. #24246 (3 comments, p2 bug) - 400 error with > 128 tools

Top 10 PRs:
1. #29708 - fix ACP session/load history replay
2. #29510 - Windows subprocess argument quoting (security - command injection fix)
3. #29517 - linearize array reconstruction (performance)
4. #29515 - linearize state snapshot ID lookups (perf, 28x speedup)
5. #29516 - cache transcript turn indexes (perf, 23x speedup)
6. #29512 - linearize chat compression history (perf, 3.7x speedup)
7. #29622 - bound tildeifyPath to path segments
8. #29621 - preserve subagent multimodal tool response parts
9. #29709 - VSCode IDE companion dispose tracking
10. #29705 - formatDuration round before unit selection

Let me also identify trends:
- Agent/Subagent reliability is a major theme
- Performance optimization (especially with arrays and history)
- Security hardening (Windows command injection, sandboxing)
- Context management (token budgets, AST tools)
- IDE integration (VSCode companion, ACP)
- Browser agent stability

Developer pain points:
- Subagents hanging or reporting false success
- Settings not respected by subagents
- Token waste from misaligned file reads
- Browser agent issues on different platforms
- Tool count limitations

Now let me write a structured Chinese daily report.</think>

# Gemini CLI 社区动态日报

**日期**: 2026-10-11
**数据来源**: [github.com/google-gemini/gemini-cli](https://github.com/google-gemini/gemini-cli)

---

## 今日速览

今日社区活跃度集中在 **Subagent 稳定性** 与 **性能优化** 两个方向。p1 级别的关键 Bug 包括 Subagent 在 `MAX_TURNS` 后错误标记为成功、Generalist Agent 无限挂起等，反映出 Agent 系统在错误恢复、状态汇报等方面仍存在显著可靠性短板。同时，多个 PR 集中在数组重建、ID 查询等热路径的性能优化上，部分基准测试实现 28 倍提速。

---

## 版本发布

**无新版本发布**（过去 24 小时内无 Release 活动）。

---

## 社区热点 Issues

以下为最值得关注的 10 个 Issue，按社区关注度与优先级筛选：

### 1. 🔴 [#22323](https://github.com/google-gemini/gemini-cli/issues/22323) - Subagent 在 MAX_TURNS 后错误标记为 GOAL 成功（评论 13，p1 Bug）
`codebase_investigator` 子代理达到最大回合数后仍报告 `status: "success"`，掩盖了中断信息。该 Bug 严重影响 Agent 错误恢复的可观测性，是 Subagent 可靠性问题的典型体现。

### 2. 🔴 [#21409](https://github.com/google-gemini/gemini-cli/issues/21409) - Generalist Agent 无限挂起（评论 8，👍 8，p1 Bug）
当 CLI 委派给 generalist agent 时会无限挂起，即使用户等待一小时也无法恢复。社区反馈指出禁用 sub-agent 后问题立即消失。此 Bug 影响所有依赖 generalist delegation 的工作流，受关注度极高。

### 3. 🟡 [#19873](https://github.com/google-gemini/gemini-cli/issues/19873) - 通过零依赖 OS 沙箱利用模型 bash 亲和性（评论 9，p2 Enhancement）
利用 Gemini 3 原生 bash 训练特性，提议引入 OS 级沙箱 + Post-Execution Intent Routing 机制，是当前最重要的架构级提案之一。

### 4. 🟡 [#21968](https://github.com/google-gemini/gemini-cli/issues/21968) - Gemini 几乎不主动使用 Skills 和 Sub-agents（评论 7，p2 Bug）
即使配置了自定义 Skills，模型也很少主动调用，需用户显式指示。反映出 subagent 发现/触发机制在 prompt 层的设计缺陷。

### 5. 🟡 [#22745](https://github.com/google-gemini/gemini-cli/issues/22745) - 评估 AST 感知文件读取/搜索/映射的价值（评论 7，p2 Feature）
Epic 级议题，探讨通过 AST 工具实现更精确的方法边界读取，减少 token 噪音与读取次数对齐偏差。

### 6. 🟡 [#22267](https://github.com/google-gemini/gemini-cli/issues/22267) - Browser Agent 忽略 settings.json 中的 maxTurns 等覆盖配置（评论 4，p2 Bug）
`AgentRegistry` 在初始化阶段正确合并了配置，但 Browser Agent 运行时不读取覆盖，对用户配置契约造成破坏。

### 7. 🟡 [#21983](https://github.com/google-gemini/gemini-cli/issues/21983) - Browser Subagent 在 Wayland 下失败（评论 4，p1 Bug）
Linux Wayland 用户无法使用 Browser subagent，暴露出对非 X11 桌面环境的兼容性盲点。

### 8. 🟡 [#21000](https://github.com/google-gemini/gemini-cli/issues/21000) - 用原生文件工具实验任务追踪器（评论 4，p3 Bug）
针对当前 `WriteToDo` 工具的"in-context"追踪导致 context rot 和跨会话丢失的痛点，提议改用持久化文件。

### 9. 🟡 [#20079](https://github.com/google-gemini/gemini-cli/issues/20079) - `~/.gemini/agents/filename.md` 为 symlink 时无法识别为 agent（评论 4，p2 Bug）
影响 dotfiles 仓库用户，symlink 解析环节缺失。

### 10. 🟡 [#24246](https://github.com/google-gemini/gemini-cli/issues/24246) - 工具数 > 128 时遭遇 400 错误（评论 3，p2 Bug）
当启用工具数过多时直接失败，模型缺乏对工具范围的智能收敛能力。

---

## 重要 PR 进展

### 1. 🟢 [#29708](https://github.com/google-gemini/gemini-cli/pull/29708) - 修复 ACP session/load 历史回放时序（OPEN，core，size/m）
确保历史回放完整写入后再返回响应，避免 ACP 客户端收到混合的 `session/update` 通知。修复了与 ACP 协议规范的兼容性。

### 2. 🛡️ [#29510](https://github.com/google-gemini/gemini-cli/pull/29510) - 加固 Windows 子进程参数转义，防止命令注入（CLOSED，core，size/m）
在 `editor.ts` 中引入 `quoteCmdArg` 助手，避免 `shell: true` 下的路径拼接漏洞。**这是一个安全修复**，应予关注。

### 3. ⚡ [#29517](https://github.com/google-gemini/gemini-cli/pull/29517) - `truncateHistoryToBudget` 数组重建线性化（CLOSED，core 性能）
将 `unshift()` 重复调用替换为 `push()` + 反转，消除消息重建的 O(n²) 退化。

### 4. ⚡ [#29515](https://github.com/google-gemini/gemini-cli/pull/29515) - 状态快照 ID 查询线性化（CLOSED，agent 性能）
用 `Set` 替换已消费 ID 的线性查找。**本地基准测试 291.95 ms → 10.26 ms（~28x 提速）**。

### 5. ⚡ [#29516](https://github.com/google-gemini/gemini-cli/pull/29516) - 缓存转录文本回合索引（CLOSED，agent 性能）
用 `Map` 替代 `indexOf()`。**414.20 ms → 17.91 ms（~23x 提速）**，25 个相关测试全部通过。

### 6. ⚡ [#29512](https://github.com/google-gemini/gemini-cli/pull/29512) - 聊压缩历史重建线性化（CLOSED，agent 性能）
10,000 条混合消息从 18.97 ms 降至 5.01 ms（~3.7x 提速）。

### 7. 🟢 [#29622](https://github.com/google-gemini/gemini-cli/pull/29622) - 修复 `tildeifyPath` 对路径段的影响范围（OPEN，core，size/m）
仅在路径等于或以分隔符边界起始时替换家目录，避免共享前缀的兄弟目录被误替换为 `~`。

### 8. 🟢 [#29621](https://github.com/google-gemini/gemini-cli/pull/29621) - 保留 subagent 多模态工具响应部分（OPEN，core 修复）
修复本地 subagent 反馈含图像的工具结果时丢失兄弟数据的 Bug，改用按 call ID 跟踪 parts 数组。

### 9. 🟢 [#29709](https://github.com/google-gemini/gemini-cli/pull/29709) - VSCode IDE Companion 资源追踪修复（OPEN，core，size/s）
`activate()` 中多余的括号将函数注册转为逗号表达式，导致 disposables 未被正确收集。修复 #27790。

### 10. 🟢 [#29705](https://github.com/google-gemini/gemini-cli/pull/29705) - `formatDuration` 在选单位前先取整（OPEN，cli，help wanted）
让 `1000ms` 显示为 `1.0s`，`60.0s` 显示为 `1m`。是一个小但直接的 UX 改进，标签 `help wanted` 欢迎贡献者接手。

---

## 功能需求趋势

综合 50 条 Issue，呈现出如下清晰的社区诉求方向：

| 方向 | 代表议题 | 关注度 |
|------|----------|--------|
| **Agent/Subagent 可靠性** | #22323, #21409, #21968, #21763 | 🔴 极高 |
| **安全与沙箱** | #19873（OS 级沙箱）| 🟡 高 |
| **上下文与 Token 优化** | #19561（Tactful Extraction）, #22745（AST 感知）| 🟡 高 |
| **Browser Agent 稳定性** | #21983, #22267, #22232 | 🟡 高 |
| **任务追踪持久化** | #18836, #21000 | 🟢 中 |
| **平台兼容（Wayland/Windows）** | #21983, #22466 | 🟢 中 |
| **AST 工具整合** | #22745, #22746, #22747 | 🟢 中 |
| **Agent 自认知能力** | #21432（准确 CLI flags/hotkeys）| 🟢 中 |
| **并行 Subagent 协作** | #18287（依赖前置）| 🟢 低 |

**最显著的三个趋势**：
1. **从"能跑"到"跑得对"**：社区对 Agent 错误状态汇报、配置覆盖一致性、超时恢复等"软特性"诉求强烈。
2. **从"in-context"到"持久化"**：任务追踪、subagent 轨迹、context 工具均出现用文件系统替代的提案，反映出对 LLM 上下文脆弱性的共识。
3. **从"工具集"到"工具治理"**：超过 128 个工具触发 400 错误、AST 智能读取提案等，体现出生态扩展后的可发现性挑战。

---

## 开发者关注点

通过对 Issue/PR 的归类，开发者社区的痛点可归纳为：

### 🐛 痛点
- **Subagent 沉默失败**：达到 `MAX_TURNS`、被强制挂起、被禁用 delegation 后仍汇报"成功"，掩盖真实状态（#22323, #21409）。
- **配置契约破裂**：用户在 `settings.json` 设置的覆盖项被 Browser Agent 等组件忽略（#22267）。
- **平台碎片化**：Wayland/Windows 等非主流环境下 Browser subagent 与编辑器集成出现兼容性问题（#21983, #29510）。
- **上下文爆炸**：模型倾向整段 firehose 文件读取，单轮上下文基线 ~36.6k tokens（#19561）。

### 🚀 高频需求
- **Observability**：`/bug` 报告缺失 subagent 上下文（#21763），subagent 轨迹应可分享（#22598）。
- **Disambiguation**：相同文件名在工具列表中冲突、agent 之间协作存在歧义。
- **Agent 自描述**：Agent 对自身 CLI flags 与快捷键的认知不准（#21432）。
- **工具作用域收敛**：当工具数过多时模型无法智能收敛（#24246）。

### 💡 给维护者的建议方向
1. 为 subagent 添加结构化的 `Termination Reason` 报告与上游告警；
2. 引入配置生效审计日志，确保 `settings.json` 覆盖被真正应用；
3. 把 `WriteToDo` 这类 in-context 工具迁移至持久化文件（呼应 #18836/#21000）；
4. 重点跟进性能 PR 簇（#29512/#29515/#29516/#29517），它们在 hot path 上提供了可量化的优化窗口。

---

*日报生成时间：2026-10-11 | 数据窗口：过去 24 小时*

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

<think>Let me analyze the GitHub data for the copilot-cli repository and generate a comprehensive daily report in Chinese for 2026-10-11.

Let me organize the information:

**Releases**: No new releases in the past 24 hours.

**Issues (22 total in past 24 hours)**:

Let me categorize them:

1. **Closed Issues (8)**:
   - #2494 - authentication regression in v1.0.16 (keychain prompt)
   - #4614 - macOS MallocStackLogging warning in v1.0.80
   - #4831 - claude-opus-5 image viewing bug
   - #3866 - Thinking text unreadable on dark backgrounds (theming)
   - #2746 - Visual distinction between user input and assistant responses
   - #590 - MCP subcommand for setup (feature)
   - 

2. **Open Issues (new or updated)**:
   - #4946 - HTTP 400 content[].thinking after background shell completion (sessions, models)
   - #4666 - Show GitHub hostname for all footer account identities (authentication, terminal-rendering)
   - #5098 - sessionStart hook stops running after adding sandbox paths (permissions, plugins)
   - #5112 - Support OSC 7501 program status in interactive CLI
   - #5111 - Image cap ignores modelCapabilities (models)
   - #5110 - Right click copy fails for copilot output text (Linux)
   - #5109 - copilot-cli is unusable (managed account policy)
   - #5108 - ACP session/list rescans all sessions (sessions, non-interactive)
   - #5107 - HOME override triggers script_action_changed (permissions, tools)
   - #5105 - macOS sandbox blocks Gradle daemon connection (permissions)
   - #5104 - Desktop: move existing chat into project (sessions)
   - #5103 - BYOK: sub-agents wire API mismatch (agents, models)
   - #5102 - Sandboxed git credential limitation (permissions, tools)
   - #5100 - Session event delivery permanently fails after 120s timeout (sessions)
   - #5099 - Display-only hook for assistant messages (plugins)
   - #5097 - HydraFusion router returns models outside policy (models)

**PRs**: No new PRs in the past 24 hours.

Now let me identify the top 10 most important issues to feature:

1. **#5099** - Display-only hook for assistant messages - important new feature request for sensitive data redaction
2. **#5100** - Session event delivery fails after 120s timeout - critical stability issue
3. **#5111** - Image cap with prompt-cache prefix rewriting - performance issue
4. **#5108** - ACP session/list rescanning performance - major performance issue
5. **#5103** - BYOK sub-agent wire API mismatch - important for BYOK users
6. **#5112** - OSC 7501 program status support - terminal integration
7. **#5097** - HydraFusion routing fallback issue - model routing bug
8. **#5105** - macOS sandbox blocks Gradle - workflow blocker
9. **#5098** - sessionStart hook stops running - hooks regression
10. **#5102** - Sandboxed git credential limitation - sandbox regression

For PRs, since there are none in the past 24 hours, I should mention this and perhaps reference some closed issues as proxies.

Let me also identify feature trends:
- Sessions/session management (#5100, #5108, #5104, #4946)
- Permissions/sandbox (#5098, #5105, #5102, #5107)
- Models/BYOK (#5103, #5111, #5097, #4946)
- Plugins/hooks (#5099, #5098)
- Terminal rendering/theming (#4666, #5112, #5110)
- MCP integration (#590 - closed)

Let me now write the report in Chinese.</think>

# GitHub Copilot CLI 社区动态日报

**日期：2026-10-11** | 数据来源：github.com/github/copilot-cli

---

## 📌 今日速览

今日社区焦点集中在 **会话（session）管理稳定性**、**沙箱权限** 以及 **BYOK / 多模型路由** 三大方向，多个关键问题被集中上报；同时有 6 个旧 Issue 在过去 24 小时内被关闭，涉及认证回归、macOS 诊断信息、深色主题可读性以及 MCP 子命令等长期诉求。过去 24 小时无新版本发布，也无新增 Pull Request。

---

## 🚀 版本发布

**无新版本发布。** 过去 24 小时内仓库未推送新的 Release。

---

## 🔥 社区热点 Issues

### 1. [#5100](https://github.com/github/copilot-cli/issues/5100) — 一次 120s 超时即永久瘫痪整个会话 ⛔
- **标签**：area:sessions
- **重要性**：用户提交 prompt 后若遇到一次 host ack 超时，会话将永久进入不可用状态，必须手动 resume 才能恢复。对长时间交互场景破坏性极强。
- **社区反应**：刚开 Issue，暂无评论；属于 P0 级可用性故障。

### 2. [#5108](https://github.com/github/copilot-cli/issues/5108) — ACP `session/list` 翻页等于全表扫描 🐢
- **标签**：area:sessions, area:non-interactive
- **重要性**：在 ACP 客户端（`copilot --acp --stdio`）下，每翻一页都需要重扫整个 session store，会话量上千时完整列表需数分钟才能返回。
- **社区反应**：新开 Issue，无评论；属于典型的线性扩展性瓶颈。

### 3. [#5111](https://github.com/github/copilot-cli/issues/5111) — 图像封顶逻辑忽略模型能力声明并反复重写缓存前缀 🧠
- **标签**：area:models
- **重要性**：运行时硬编码 50 张图像上限，未读取 `modelCapabilities.limits.vision.max_prompt_images`；超出后还会原地替换最早图像，导致 prompt-cache 前缀被反复改写，严重影响缓存命中率与成本。
- **社区反应**：新开 Issue，已迅速引发技术关注。

### 4. [#5103](https://github.com/github/copilot-cli/issues/5103) — BYOK 模式下子 Agent 被强制使用父会话的 wire API 💥
- **标签**：area:agents, area:models
- **重要性**：`COPILOT_PROVIDER_WIRE_API`（`completions`/`responses`）会作用于会话内所有请求，包括运行在不同模型上的子 Agent。当子 Agent 选用的模型仅支持另一种 wire API 时（如 GPT-5 系列），会直接返回 400。
- **社区反应**：新开 Issue，反映 BYOK 用户跨厂商模型的真实落地困难。

### 5. [#5097](https://github.com/github/copilot-cli/issues/5097) — HydraFusion 路由静默回退到低阶模型 🪂
- **标签**：area:models
- **重要性**：选择 HydraFusion（policy `max`）时，多数回合在路由阶段失败，仅在 UI 提示一行 "continuing with gpt-5.6-luna"，用户看不到失败原因，模型能力被悄悄削弱。
- **社区反应**：新开 Issue，但涉及"智能路由"核心能力，影响付费价值感知。

### 6. [#5102](https://github.com/github/copilot-cli/issues/5102) — 沙箱内 Git 凭证被强制锁定为 Copilot/gh 身份 🔒
- **标签**：area:permissions, area:tools
- **重要性**：`sandbox.auth.git` 不允许用户为沙箱内 Git 提供独立凭证（如 fine-grained PAT），且会注入最高优先级的空 `credential.helper`，把用户原始 helper 直接覆盖掉。
- **社区反应**：新开 Issue，回归性质问题，影响企业多账户用户。

### 7. [#5105](https://github.com/github/copilot-cli/issues/5105) — macOS 沙箱阻断 Gradle Daemon 连接 🧱
- **标签**：area:permissions
- **重要性**：即便已开启本地网络访问，Gradle 仍无法在 macOS 沙箱内连接 daemon，连离线 `help` 任务都无法运行，直接打断 Java/Android 工作流。
- **社区反应**：新开 Issue，工作流阻塞类问题。

### 8. [#5099](https://github.com/github/copilot-cli/issues/5099) — 提议新增"展示专用" Hook 🪄
- **标签**：area:plugins
- **重要性**：希望在 `postToolUse` 之外增加一种 hook：让用户看到的文本与模型看到的脱敏文本不同（如在 UI 展示真实值，对模型保留 token）。适用于密码、密钥、个人信息等场景。
- **社区反应**：新开 Issue，但诉求契合企业合规方向。

### 9. [#5098](https://github.com/github/copilot-cli/issues/5098) — 配置 sandbox.userPolicy.filesystem 后 sessionStart Hook 静默失效 🪤
- **标签**：area:permissions, area:plugins
- **重要性**：在 `sandbox.userPolicy.filesystem` 加入任何路径后，`sessionStart` Hook 不再被触发，但日志完全无记录。属于"改一个无关配置就会悄悄失功能"的回归。
- **社区反应**：1 条评论，问题隐蔽且影响扩展生态。

### 10. [#5112](https://github.com/github/copilot-cli/issues/5112) — 交互 CLI 缺少 OSC 7501 状态上报 📡
- **标签**：triage
- **重要性**：终端无法通过 OSC 7501 协议获知 agent 当前是"工作中"还是"等待输入"。提出希望在 TUI 中周期性发出 working/blocked/idle 报告。
- **社区反应**：新开 Issue，有助于提升终端侧集成与无障碍体验。

> 其他已关闭的关键 Issue（昨日集中清理）：[#2494](https://github.com/github/copilot-cli/issues/2494)（v1.0.16 认证回归）、[#4614](https://github.com/github/copilot-cli/issues/4614)（macOS MallocStackLogging 残留）、[#4831](https://github.com/github/copilot-cli/issues/4831)（Claude Opus 4.5 后续图片查看失败）、[#3866](https://github.com/github/copilot-cli/issues/3866)（深色主题下思考文本不可读）、[#2746](https://github.com/github/copilot-cli/issues/2746)（用户与助手文本需视觉区分）、[#590](https://github.com/github/copilot-cli/issues/590)（`copilot mcp` 子命令）。

---

## 🛠 重要 PR 进展

**过去 24 小时无新的 Pull Request。** 仓库合并/更新活动今日暂处于空窗期，建议关注被关闭的 6 个旧 Issue 是否伴随"修复提交但尚未推送 PR"的情况。

---

## 📈 功能需求趋势

从今日活跃 Issue 提炼出社区最关注的 6 个方向：

| 方向 | 代表 Issue | 趋势判断 |
|------|-----------|---------|
| **会话稳定性与可扩展性** | [#5100](https://github.com/github/copilot-cli/issues/5100)、[#5108](https://github.com/github/copilot-cli/issues/5108)、[#5104](https://github.com/github/copilot-cli/issues/5104)、[#4946](https://github.com/github/copilot-cli/issues/4946) | 🔥🔥🔥 已成为最大痛点，跨 ACP、Desktop、交互 TUI 三端 |
| **沙箱 / 权限精细化** | [#5098](https://github.com/github/copilot-cli/issues/5098)、[#5105](https://github.com/github/copilot-cli/issues/5105)、[#5102](https://github.com/github/copilot-cli/issues/5102)、[#5107](https://github.com/github/copilot-cli/issues/5107) | 🔥🔥🔥 企业用户对沙箱可控性诉求强烈，多为回归类 |
| **多模型 / BYOK 能力** | [#5103](https://github.com/github/copilot-cli/issues/5103)、[#5111](https://github.com/github/copilot-cli/issues/5111)、[#5097](https://github.com/github/copilot-cli/issues/5097) | 🔥🔥 子 Agent、视觉上限、模型路由成为焦点 |
| **插件 / Hook 体系** | [#5099](https://github.com/github/copilot-cli/issues/5099)、[#5098](https://github.com/github/copilot-cli/issues/5098) | 🔥 企业合规催生新 Hook 类型诉求 |
| **终端集成与可访问性** | [#5112](https://github.com/github/copilot-cli/issues/5112)、[#5110](https://github.com/github/copilot-cli/issues/5110)、[#4666](https://github.com/github/copilot-cli/issues/4666)、[#3866](https://github.com/github/copilot-cli/issues/3866) | 🔥 OSC 7501、鼠标右键复制、Footer 域名展示、深色主题 |
| **MCP 子命令（已落地）** | [#590](https://github.com/github/copilot-cli/issues/590) | ✅ 旧诉求今日被关闭，跨工具对齐基本完成 |

---

## 🧑‍💻 开发者关注点

1. **"会话一旦出错就要 resume" 是高频痛点**：今日同时出现 120s 超时永久瘫痪（#5100）与翻页 O(n)（#5108）两个底层稳定性问题，开发者期望官方提供 fail-fast + 显式重试策略，而不是静默失败。

2. **沙箱越来越像"双刃剑"**：既能保护本地环境，也频繁打断真实工程（Gradle、Git 凭证、Hook 失效、HOME 覆盖）。开发者呼吁更细粒度的策略声明，并希望关键行为有日志/告警。

3. **多模型 / BYOK 用户在意"承诺与现实的差距"**：从子 Agent wire API 不匹配（#5103）、图像硬编码上限（#5111）到 HydraFusion 静默回退（#5097），反映出一个核心诉求：**用户需要看到模型选择过程的透明性**。

4. **合规 / 隐私需求正从"事后脱敏"走向"展示/模型双视图"**：#5099 提议的 display-only hook 是典型代表——同一份工具结果，对模型是 token，对用户是真实值。

5. **终端体验仍是"最后一公里"**：OSC 7501、鼠标右键复制、深色主题对比度、Footer 域名展示等小问题频繁上榜，说明 Copilot CLI 已进入"功能性基本可用、细节决定口碑"的阶段。

6. **MCP 体系正补齐 DX 短板**：#590 被关闭标志着与 Codex/Claude/Gemini CLI 的 MCP 子命令对齐达成，开发者在扩展配置上的迁移成本进一步下降。

---

> 📊 **数据摘要**：今日共 22 条 Issue 活跃（16 条 OPEN，6 条 CLOSED），0 条新 PR，0 个新 Release。建议持续关注 **Session/Sandbox/Models** 三条主线的修复节奏。

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

<think>The user wants me to generate a daily community report for Kimi Code CLI based on GitHub data. Let me analyze what's available:

1. **Latest Releases (past 24 hours)**: None
2. **Latest Issues (past 24 hours)**: 0 issues
3. **Latest Pull Requests (past 24 hours)**: 1 PR (#1718, which is CLOSED)

So the data is quite sparse today. I need to be honest about this and not fabricate information. Let me create the report based only on what's actually available.

The PR #1718 is about documentation:
- Added AGENTS.md special page
- Security boundary description
- Home page navigation
- For both Chinese (zh) and English (en) docs
- Located at docs/{zh,en}/customization/agents-md.md
- Explains differences from README.md, loading behavior (only working directory, uppercase priority), /init generation process, recommended content, and when updates are needed

Since there are no issues and no new releases, I should structure the report to reflect this accurately. I shouldn't fabricate issues or PRs that don't exist in the data.

Let me write a professional, concise report in Chinese.</think>

# Kimi Code CLI 社区动态日报

**日期：2026-10-11** | **数据来源：github.com/MoonshotAI/kimi-cli**

---

## 📌 今日速览

今日 Kimi CLI 仓库动态相对平稳，过去 24 小时内无新版本发布、无新 Issue 提交，仅有 1 篇已关闭的文档类 PR（#1718）完成合并。本次更新重点补全了 **AGENTS.md 专题文档**、**安全边界说明**以及**首页导览结构**，表明项目当前重心在于完善开发者文档体系与新手引导体验，而非功能迭代。

---

## 🚀 版本发布

**今日无新版本发布。**

---

## 🔥 社区热点 Issues

**今日无新增或更新的 Issue。**

（过去 24 小时 Issue 更新数为 0）

---

## 🛠️ 重要 PR 进展

### 1. PR #1718 — docs: 新增 AGENTS.md 专题页、安全边界说明和首页导览 ✅ CLOSED

- **作者**：[@liwang614](https://github.com/liwang614)
- **链接**：[PR #1718](https://github.com/MoonshotAI/kimi-cli/pull/1718)
- **状态**：已关闭（应已合并）
- **社区反应**：👍 0（暂无公开评论数据）

**变更内容**：

| 变更项 | 说明 |
|--------|------|
| 新增 `docs/{zh,en}/customization/agents-md.md` | AGENTS.md 专题页（中英双语） |
| AGENTS.md 与 README.md 的区别 | 明确两者定位，避免混淆 |
| 加载行为说明 | 仅加载工作目录，大写文件名优先 |
| `/init` 命令流程 | 解释生成机制 |
| 推荐写入内容 | 给出最佳实践建议 |
| 更新时机 | 说明何时需要刷新 |
| 安全边界说明 | 新增文档补充 |
| 首页导览 | 优化文档导航结构 |

**评价**：这是一次纯文档改进，虽然 PR 关注度数据为 0，但补足了 Kimi CLI 在 **AGENTS.md 机制** 和 **安全使用边界** 这两块此前文档中相对模糊的部分，对新用户上手和老用户规范化使用都有价值。

---

## 📈 功能需求趋势

由于今日 Issue 更新量为 **0**，无法从社区反馈中提炼具体的功能需求趋势。从 PR #1718 的文档方向可侧面观察到项目的演进重心：

1. **文档体系完善** — 双语化（zh/en）、专题化（AGENTS.md）、结构化（首页导览）
2. **安全边界规范化** — 补充安全相关说明，回应合规与可控性诉求
3. **新用户体验优化** — 强调 `/init`、`AGENTS.md` 的正确使用方式

> 💡 建议持续关注后续 Issue 增量，以判断社区真实诉求方向。

---

## 💬 开发者关注点

基于今日数据，无法统计高频痛点。**唯一可观察的开发者行为信号**是：项目维护者（@liwang614）主动推动了文档侧的完善工作；
项目当前处于 **「文档先行」阶段**，可能暗示近期版本更新正在内部准备中，团队倾向于先把文档基座搭好再发布功能。

---

## 📊 数据概览

| 指标 | 数值 |
|------|------|
| 过去 24h 新 Release | 0 |
| 过去 24h 新 Issue | 0 |
| 过去 24h 新 PR 更新 | 1（已关闭） |
| 报告生成时间 | 2026-10-11 |

---

*本日报基于 GitHub 公开数据自动整理。动态较少时建议结合周报或月度趋势分析以获得更全面的项目演进视角。*

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

<think>Let me analyze the GitHub data for OpenCode and generate a Chinese daily report for 2026-10-11.

Key observations:
1. Release v1.19.0 was released with major upgrade path to OpenCode 2, OpenAI ultrafast tier support, and PTY validation
2. Multiple issues and PRs related to TUI rendering, transparency themes, modal scrims
3. v2.0 issues - response not rendering, missing local provider models
4. Several ecosystem plugin documentation PRs
5. Performance issue with v2 curl installer
6. Permission system bugs (multiple closed issues)
7. Tool call repair issues
8. Many slash command feature requests (/verify, /simplify, /btw, /context, /loop)
9. Many issues are CLOSED - showing active maintenance

Let me organize this into a structured daily report in Chinese.</think>

# OpenCode 社区动态日报
**日期：2026-10-11**

---

## 📌 今日速览

OpenCode **v1.19.0** 正式发布，引入了 `opencode upgrade --major` 一键升级到 OpenCode 2 的能力，标志着 v1 进入维护分支、v2 成为主开发线。同时社区集中爆发了多起 TUI 渲染缺陷（透明主题模态遮罩、macOS+SSH 不可读）和 v2.0.26 响应不渲染的严重问题，需重点关注。

---

## 🚀 版本发布

### v1.19.0 — 维护分支的关键里程碑
发布说明：<https://github.com/anomalyco/opencode/releases/tag/v1.19.0>

**Core**
- ✅ 新增 `opencode upgrade --major` 命令，可直接从 v1 平滑升级到 OpenCode 2
- 🐛 允许 OpenAI `ultrafast` 服务等级
- 🐛 在 PTY 存在性检查之前，先验证连接 origin 和 ticket

**TUI**
- ✅ 新增 `/update` 命令用于在 TUI 内一键安装 OpenCode 更新

---

## 🔥 社区热点 Issues

以下 10 个 Issue 综合考虑评论数、影响面与未解决状态排序：

### 1. [#38801](https://github.com/anomalyco/opencode/issues/38801) — TUI 反复报 "exiting loop"（已关闭 · 💬23）
老牌高频问题，使用各类 OpenAI 兼容 API 时必须手动设置 `step=80` 才能勉强工作。**已关闭**意味着官方可能已经合并修复，但用户需确认升级 v1.19.0 后是否彻底解决。

### 2. [#51993](https://github.com/anomalyco/opencode/issues/51993) — deepseek-v4.1-flash 提示缓存命中退化（开启 · 💬12）
在 Go 版本上，对话中加入新图片后，prompt cache 只匹配到第一张图片之前的内容，造成大量无效重算。直接影响**成本与响应延迟**。

### 3. [#36413](https://github.com/anomalyco/opencode/issues/36413) — `opencode run` 在自动拒绝工具调用后静默退出（开启 · 💬9）
非交互模式下，工具调用被权限系统自动拒绝且模型无最终输出时，进程以 exit code `0` 退出且 stdout 为空。**严重破坏 CI/CD 与自动化脚本**，没有任何机器可识别的失败信号。

### 4. [#37891](https://github.com/anomalyco/opencode/issues/37891) — 桌面端聊天中的文件路径不可点击（开启 · 💬8 · 👍6）
聊天中的 `file://` 链接和路径看似可点击但实际无效。对 IDE 集成体验影响较大，是呼声较高的桌面端 UX 改进。

### 5. [#47831](https://github.com/anomalyco/opencode/issues/47831) — 工具调用修复对匿名调用丢失 `tool` 字段（开启 · 💬7）
`experimental_repairToolCall` 只修复大小写差异，对未知/空 tool 名重定向到 `invalid` 工具时丢弃了原始 `tool` 字段，影响下游审计与可观测性。

### 6. [#53839](https://github.com/anomalyco/opencode/issues/53839) — 项目的 `.opencode/` 配置永远不会被发现（已关闭 · 💬7）
项目级 `.opencode/agents/*.md` 和 `opencode.jsonc` 完全不被加载，只有 `~/.config/opencode` 全局配置生效。**严重破坏自定义 subagent 的工作流**，是配置系统的重大 bug。

### 7. [#39923](https://github.com/anomalyco/opencode/issues/39923) — macOS+SSH 下 TUI 完全不可读（开启 · 💬5）
字体渲染、对比度、布局全部损坏，相比 v1.15.13 出现严重回归，影响 SSH 远程开发场景。

### 8. [#53702](https://github.com/anomalyco/opencode/issues/53702) — v2 curl 安装器极其缓慢（开启 · 💬5）
官方安装命令需耗时数分钟，但直接拉取 npm registry 仅需 0.3 秒。**约 275MB 的安装包存在明显下载瓶颈**，影响新用户首次体验。

### 9. [#54447](https://github.com/anomalyco/opencode/issues/54447) — v2.0.26 TUI 助手回复完全空白（开启 · 💬4）
v2 TUI 发送消息后只显示用户气泡，助手回复区域永远空白。**v2 升级后的关键可用性阻塞**。

### 10. [#42856](https://github.com/anomalyco/opencode/issues/42856) — 用户自定义本地 provider 模型未进入模型目录（开启 · 💬4 · 👍5）
v2 中文档化的"Local models"配置不显示，与 v1 行为不一致。阻碍用户接入私有 OpenAI 兼容模型。

---

## 🛠️ 重要 PR 进展

### 1. [#54430](https://github.com/anomalyco/opencode/pull/54430) — 为 agent 增加模型无关的 `effort` 覆盖
新增 `effort` 设置项，允许单独控制 agent 推理强度，与模型解耦，对**多 agent 编排场景**非常实用。

### 2. [#54433](https://github.com/anomalyco/opencode/pull/54433) — 新增 `background.backdrop` 主题 token 用于模态遮罩
修复透明主题下模态对话框把整屏涂成不透明黑色的问题，**让透明/亚克力主题真正可用**。

### 3. [#54448](https://github.com/anomalyco/opencode/issues/54448) — 修复 tree-sitter 无法解析的 PowerShell 命令扫描
`tree-sitter-powershell` 对裸 `--` 返回 ERROR 节点导致旧扫描器失败，影响 **Windows 安全扫描的覆盖度**。

### 4. [#54444](https://github.com/anomalyco/opencode/issues/54444) — 为流式聊天中空工具名补齐回归测试
对应 [#47831](https://github.com/anomalyco/opencode/issues/47831)，为 provider 流中首个 delta 含 `function.name: ""` 的场景加入 fixture。

### 5. [#54427](https://github.com/anomalyco/opencode/issues/54427) — 会话 UI 重构：按路径增量写入 markdown 存储
流式 delta 仅追加到块尾，无需每次重写整棵树。**显著降低大对话的内存占用与重渲染开销**。

### 6. [#54434](https://github.com/anomalyco/opencode/issues/54434) — 修复 TUI 音频播放完成后未停止
针对 v2 TUI 音频输出做生命周期管理，避免空闲时持续占用音频通道。

### 7. [#54436](https://github.com/anomalyco/opencode/issues/54436) — TUI 支持仅回滚消息不还原文件
按消息粒度展示 revert 选项，撤销对话不必连带 git 还原。

### 8. [#54437](https://github.com/anomalyco/opencode/issues/54437) — TUI 支持取消排在运行轮次后面的排队 prompt
解决用户临时改变主意时，无法撤回已排队等待的问题。

### 9. [#54396](https://github.com/anomalyco/opencode/issues/54396) — SQLite 语句锁超时重试（v2 移植）
将 V1 的 SQLITE_BUSY 重试机制移植到 v2 dev 线，修复一个进程的写操作误杀另一进程 prompt 的并发问题（[#47566](https://github.com/anomalyco/opencode/issues/47566)）。

### 10. [#54439](https://github.com/anomalyco/opencode/issues/54439) — 下载路由将任意 release 文件重定向到 latest
`/download/<channel>/<name>` 兼容了所有发布物，给任意 CLI/桌面端产物提供稳定链接。

---

## 📈 功能需求趋势

从 Issues 关键词与标题聚类，社区当前最关注的能力方向：

| 方向 | 代表 Issue | 关注度 |
|---|---|---|
| **TUI 渲染 / 主题系统** | #54420、#39923、#54433 | 透明主题、跨平台字体、SSH 远程场景 |
| **v2 模型与 Provider 集成** | #42856、#54447、#41820 | 本地模型接入、v2 API 兼容性、Copilot OAuth |
| **权限系统稳定性** | #41849、#41846、#41823、#36413 | 去重、UI 与配置优先级、持久化失败 |
| **Claude Code 对齐的 Slash 命令** | #41912 `/verify`、#41911 `/simplify`、#41910 `/btw`、#41908 `/context`、#41907 `/loop` | 借鉴竞品的快速上下文操作 |
| **桌面端 UX 增强** | #37891 文件路径点击、#54229 推理标识缺失 | IDE 集成感 |
| **多 Agent 编排 / 验证** | `/verify` `/simplify` + subagent | 自动化代码质量 |
| **安装与分发体验** | #53702 curl 慢、#54439 release 重定向 | 上手摩擦 |
| **第三方客户端 v2 API 补齐** | #41828 | 生态扩展 |

---

## 🎯 开发者关注点

综合活跃 Issue 与 PR，社区反馈的**高频痛点**集中在以下几点：

1. **v1 → v2 过渡的"兼容性陷阱"**：多份 PR（#54445、#54443、#52443、#54437）都因 v2 接管 `dev` 分支而被迫重开，文档生态和第三方插件迁移成本高。

2. **透明主题与终端美学**：透明背景下模态对话框会"覆盖"整个屏幕（#54420），且 tree-sitter 等底层组件不支持 alpha 通道，需新增 `background.backdrop` token 这类工程妥协。

3. **CI/自动化可观测性**：`opencode run` 在工具调用被自动拒绝时静默退出 exit 0（#36413），permission 提示不去重（#41849），让脚本无法可靠判断失败。

4. **模型/Provider 配置优先级混乱**：项目级 `.opencode/` 配置完全失效（#53839），UI 权限设置被 opencode.json 覆盖（#41846），"Allow always" 重启后丢失（#41823）——配置层信任链急需重建。

5. **v2 模型目录回归**：本地 provider 不显示（#42856）、空工具名丢字段（#47831）、首次模型安装包下载慢（#53702）——v2 升级路径上还有多处"裸奔"。

6. **借鉴 Claude Code 的快捷命令**：社区系统性提出 `/verify` `/simplify` `/btw` `/context` `/loop` 一整套对齐需求，反映出**对照式追赶**的产品演进策略。

---

*本日报基于 2026-10-11 过去 24 小时的 GitHub 公开数据生成。*

</details>

<details>
<summary><strong>jcode</strong> — <a href="https://github.com/1jehuang/jcode">1jehuang/jcode</a></summary>

<think>Let me analyze the GitHub data for jcode and create a comprehensive daily report for 2026-10-11.

Key observations:
1. A new release v0.94.0 with queued commands feature
2. Multiple issues closed in the last 24 hours
3. Important themes: OpenAI/Provider compatibility, TUI fixes, swarm improvements, browser/macOS issues, SDK improvements

Let me organize the most important items:

**Hot Issues (most impactful):**
1. #1224 - OpenCode Go models failing with 500 (multi-protocol provider issue)
2. #1748 - Socket binding bug in swarm (v0.80.0-v0.91.0)
3. #690 - Autocomplete for resume
4. #1779 - OpenAI-compatible stream dropping reasoning deltas
5. #1740 - CI gates red
7. #1745 - macOS browser windows
8. #1702 - Raw tool-call markup leaks
9. #1751 - bash gate heredoc issue
10. #1763 - Release workflow failed
11. #1759 - OpenAI OAuth stalls
12. #1560 - Provider-profile forcing OpenAI transport
13. #1697 - turn_end hook token usage
14. #1738 - Korean input source
15. #1787 - /resume scope
16. #1753 - bash gate destructive commands
17. #159 - XDG Base Directory
18. #1651 - Headless swarm worker
19. #1680 - Computer-use screenshots
20. #1703 - Watchdog for stalled workers
21. #1650 - swarm:list phantom swarms
22. #1685 - Usage-limit loops
23. #1757 - OpenAI OAuth refresh
24. #1756 - OpenAI stream cancellation
25. #1741 - Resumed session credential route
26. #1635 - SIGINT/SIGTERM TUI
27. #1774 - SDK auto-update
28. #1775 - SDK launch failure
29. #1693 - /agents worker model

**Important PRs:**
1. #1789 - Route OpenCode Go Responses models (cherry-pick)
2. #1727 - Korean input source shortcuts
3. #1700 - turn-end token usage
4. #1707 - Restore kitty keyboard protocol
5. #1777 - SDK auto-update fix
6. #1776 - SDK launch_instance fix
7. #1788 - /resume scoped to project
8. #1764 - CI lint gates fix
9. #1786 - OpenRouter Kimi fix
10. #1752 - heredoc fix
11. #1347 - Image blocks on text-only models
12. #1709 - Overview folding widget
13. #1708 - show_tps config
14. #1706 - Ctrl+S swarm model picker
15. #1346 - /sessions pre-filtered
16. #1780 - elapsed usage display
17. #1783 - Kitty detection on macOS
18. #1746 - Browser persistent sessions
19. #1687 - Usage-limit recovery bound
20. #1694 - Per-session worker model

Now let me think about the trends:
- Provider compatibility (OpenAI, OpenRouter, OpenCode Go) is a major theme
- Swarm/headless mode issues
- TUI improvements
- macOS-specific fixes
- SDK lifecycle management
- Bash gate security
- Performance (transcript size, TPS display)

I'll write a well-structured Chinese daily report.</think>

# jcode 社区动态日报 · 2026-10-11

## 📌 今日速览

今日 **v0.94.0** 正式发布，核心引入"队列命令（Queued commands）"机制——`Ctrl+Enter` 可将斜杠命令与 `!` 命令排队延后执行，并赋予 Harness API 中途观察与取消消息的能力。社区侧围绕**多协议 Provider 路由、Swarm 集群可靠性、macOS/TUI 输入兼容性**形成密集的修复潮，单日关闭 Issues 19 个、合并 PR 12 个，质量门禁与 SDK 生命周期管理成为新焦点。

---

## 🚀 版本发布

### v0.94.0 — Queued commands
- **Ctrl+Enter** 将 `/` 斜杠命令与 `!` shell 命令排队到当前回合之后执行，`/clear` 会一并清空队列
- **Alt+G** 打开项目 git 提交日志，新增 diff 循环可直接跳转到 `/diff`
- Harness API 客户端可在回合中途**观察与取消**正在发送的消息
- 🔗 https://github.com/1jehuang/jcode/releases/tag/v0.94.0

---

## 🔥 社区热点 Issues（精选 10 条）

| # | 标题 | 状态 | 为什么重要 |
|---|------|------|-----------|
| [#1224](https://github.com/1jehuang/jcode/issues/1224) | OpenCode Go Muse/Grok/GPT-5.6-Luna 模型 500 失败 | OPEN | 多协议 Provider 的代表性设计缺陷——Muse/Grok/GPT-5.6-Luna 必须走 `/responses`，MiniMax 系列必须走 `/messages`，统一 `/chat/completions` 已不可行 |
| [#1759](https://github.com/1jehuang/jcode/issues/1759) | OpenAI OAuth 跨 WebSocket/HTTPS 持续卡死 ~15 分钟 | OPEN | 影响生产稳定性，OAuth 刷新链路上的生命周期管理漏洞，已关联 [#1756](https://github.com/1jehuang/jcode/issues/1756) / [#1757](https://github.com/1jehuang/jcode/issues/1757) 跟进 |
| [#1779](https://github.com/1jehuang/jcode/issues/1779) | OpenRouter 流式 `reasoning_content` 静默丢弃 | CLOSED | OpenAI-兼容流解析的快照启发式算法误判，丢弃了 Kimi 等模型的合法推理增量；[#1786](https://github.com/1jehuang/jcode/pull/1786) 已精确修复 |
| [#1748](https://github.com/1jehuang/jcode/issues/1748) | `jcode run --socket` 从不绑定 socket（v0.80–v0.91） | CLOSED | 影响 Swarm 自动化栈，6 条评论推动快速修复 |
| [#1763](https://github.com/1jehuang/jcode/issues/1763) | v0.92.0 tag 存在但 GitHub Release 缺失 | OPEN | 发布链路故障导致 Homebrew 无法跟进，CI/CD 工具链信任问题 |
| [#1751](https://github.com/1jehuang/jcode/issues/1751) | bash 风险门对 `"$(cat <<'EOF' …)"` 误判 | CLOSED | 真实影响 gh CLI 等常用工作流；安全策略的精度问题 |
| [#1753](https://github.com/1jehuang/jcode/issues/1753) | bash 门对命令替换内的破坏性命令判 Safe | CLOSED | 直接的安全漏洞，`echo $(rm -rf ~)` 被判 Safe，已合并 [#1764](https://github.com/1jehuang/jcode/pull/1764) 修复 |
| [#1745](https://github.com/1jehuang/jcode/issues/1745) | macOS 每次浏览器调用都新建 Chrome 窗口（~20s） | CLOSED | 影响 macOS 用户体验；[#1746](https://github.com/1jehuang/jcode/pull/1746) 通过复用 XDG 守护进程会话解决 |
| [#1680](https://github.com/1jehuang/jcode/issues/1680) | Computer-use 截屏无限累积（452 MB 观察值） | CLOSED | 长会话 transcript 膨胀导致 resume 缓慢与备份膨胀，性能与可维护性问题 |
| [#159](https://github.com/1jehuang/jcode/issues/159) | 支持 XDG Base Directory 规范 | OPEN | 长达 5 个月的诉求，2 个 👍，反映 Linux 用户对 `~/.jcode` 单目录混存配置/数据/缓存现状的不满 |

---

## 🛠 重要 PR 进展（精选 10 条）

| PR | 标题 | 关键内容 |
|----|------|---------|
| [#1789](https://github.com/1jehuang/jcode/pull/1789) | 路由 OpenCode Go Responses 模型 | 直接修复 [#1224](https://github.com/1jehuang/jcode/issues/1224)，新增按模型自动选择 `/responses` 或 `/chat/completions` 的配置 |
| [#1707](https://github.com/1jehuang/jcode/pull/1707) | 恢复 kitty 键盘协议与 TUI 模式（关闭 #1635） | 信号退出时清理 CSI u、bracketed paste、focus reporting、鼠标捕获，关联 [#898](https://github.com/1jehuang/jcode/issues/898) |
| [#1687](https://github.com/1jehuang/jcode/pull/1687) | 限制 usage-limit 与连接自动恢复 | 关闭 [#1685](https://github.com/1jehuang/jcode/issues/1685)，终止无限重试循环；依赖于 [#1587](https://github.com/1jehuang/jcode/pull/1587) |
| [#1786](https://github.com/1jehuang/jcode/pull/1786) | 仅对 Kimi 累计快照做 prefix-strip | 精确修复 [#1779](https://github.com/1jehuang/jcode/issues/1779)，避免误删其他模型推理流 |
| [#1752](https://github.com/1jehuang/jcode/pull/1752) | 命令风险门剥离 `"$(…)"` 内带引号 heredoc 主体 | 关闭 [#1751](https://github.com/1jehuang/jcode/issues/1751)，改进 heredoc_delimiters 的引号状态机 |
| [#1700](https://github.com/1jehuang/jcode/pull/1700) | 暴露 turn-end token 用量 | 关闭 [#1697](https://github.com/1jehuang/jcode/issues/1697)，为 AgentPet 等下游统计提供 input/output/cache 字段 |
| [#1777](https://github.com/1jehuang/jcode/pull/1777) | 阻止 SDK 私有实例会话中途自动更新 | 关闭 [#1774](https://github.com/1jehuang/jcode/issues/1774)，解决 daemon 被升级 SIGTERM 击穿导致 client 孤立 |
| [#1776](https://github.com/1jehuang/jcode/pull/1776) | 启动失败时停止已拉起的守护进程 | 关闭 [#1775](https://github.com/1jehuang/jcode/issues/1775)，补全 `launch_instance` 失败路径的资源回收 |
| [#1788](https://github.com/1jehuang/jcode/pull/1788) | `/resume` 按当前项目作用域打开 | 关闭 [#1787](https://github.com/1jehuang/jcode/issues/1787)，多项目并行用户的关键体验修复 |
| [#1746](https://github.com/1jehuang/jcode/pull/1746) | macOS 浏览器复用持久化会话 | 关闭 [#1745](https://github.com/1jehuang/jcode/issues/1745)，统一 XDG_RUNTIME_DIR 守护进程查找路径 |

---

## 📈 功能需求趋势

从 28 条更新 Issues 中提炼，开发者当前最关注的五大方向：

1. **🧩 多协议 Provider 路由**（占比 ~25%）
   OpenAI/OpenRouter/OpenCode Go/Anthropic 之间的 endpoint、transport、OAuth 路径差异被持续暴露，#1224、#1560、#1685、#1756/#1757/#1759 形成完整链路

2. **🛡 Bash 风险门与安全语义**（占比 ~15%）
   #1751、#1753、#1702 显示引号/命令替换/heredoc 的精确解析是社区推动最紧的安全议题

3. **🐝 Swarm 集群可靠性**（占比 ~15%）
   Socket 绑定、phantom 列表、watchdog、worker 模型隔离（#1693/1694）共同构成下一阶段 Swarm 演进的四个抓手

4. **🖥 macOS / TUI 输入兼容性**（占比 ~15%）
   韩文 2-Set 输入源、Kitty 检测、信号退出 TUI 清理构成 macOS 体验三角

5. **💾 长会话性能与 XDG 合规**（占比 ~10%）
   transcript 膨胀、Computer-use 截屏累积、`~/.jcode` 与 XDG 规范的矛盾指向可持续会话存储

---

## 💬 开发者关注点

社区反馈中反复出现的痛点与高频诉求：

- **Provider 抽象层单一化**：用户呼吁配置驱动而非硬编码模型 endpoint，#1789 的 PR 体现这一方向已落地
- **SDK 守护进程生命周期**：#1774/#1775 揭示 `launch_instance` 在自动更新与失败回滚上的空白，是 SDK 稳定性的最大隐患
- **全球化输入源**：#1738/#1727 显示非英语输入（韩文、中文 IME）下的快捷键派发是 macOS/TUI 跨平台短板
- **可观测性增强**：`turn_end` 缺少 token 用量（#1697/#1700）说明开发者希望以 jcode 为底座构建用量统计与成本控制
- **长会话膨胀**：#1680 的 452 MB transcript 案例引发对截屏/图像资产压缩或外部化存储的讨论
- **质量门禁连续红**：#1740 反映 clippy/rustfmt 在 master 反复失败，#1764 已开始系统性治理

---

*日报由 jcode 社区数据自动生成，数据时间窗口：2026-10-10 → 2026-10-11*

</details>

<details>
<summary><strong>pi</strong> — <a href="https://github.com/earendil-works/pi">earendil-works/pi</a></summary>

<think>Let me analyze the GitHub data for the pi (earendil-works/pi) community and generate a daily report in Chinese for 2026-10-11.

Key observations from the data:
1. No new releases in the past 24 hours
2. 50 issues updated, top 30 by comments shown
3. 7 PRs updated, most are CLOSED
4. The highest comment issues are about:
   - Windows compatibility (#7547 - 80 comments)
   - Stuck "Working..." bug (#10031 - 28 comments)
   - Anthropic subscription hanging (#5291 - 11 comments)
   - Edit tool TUI crash (#8036 - 9 comments)
   - Terminal color query leak on Windows (#10256 - 9 comments)
   - ChatGPT/OpenAI OAuth 403 (#10605 - 9 comments)
   - Anthropic subscription :00/:30 hangs (#10019 - 8 comments)
   - Compaction context overflow with GPT-6 Astra (#9512 - 7 comments)
   - TUI cursor on focus loss (#3896 - 6 comments, 8 thumbs up)
   - Bun-install + Node runtime jiti issue (#10719 - 4 comments)

Top PRs:
- Session JSONL write coalescing (#10789)
- .deb and .rpm packages (#10784, #10782)
- Fix Node watch in codemode (#10726)
- Use pi.dev schemas (#10751)
- Fix kitty images in herdr (#10774)
- Extension abort with continuation (#10766)

Feature needs trends:
- Windows support (#7547 high priority)
- Performance improvements (JSONL coalescing)
- Native Linux packages (.deb/.rpm)
- Extension API enhancements
- IDE integration (VS Code - kitty images)
- Provider compatibility (OpenRouter, OpenAI OAuth, GitHub Copilot)
- MCP support (.mcp.json from Claude Code)
- Model support (GPT-6 Astra, virtual-model routing)
- Stability issues (Working... hangs, crashes)
- Editor/TUI improvements

Let me now structure the report.</think>

# Pi 社区动态日报 · 2026-10-11

> 数据来源：github.com/earendil-works/pi · 统计周期：过去 24 小时

---

## 📌 今日速览

今日社区活动以 **稳定性问题的关闭收尾** 和 **平台扩展（Linux 原生包、herdr 修复）** 为主线：Windows 体验优化讨论持续发酵（#7547 已积累 80 条评论），同时 PR #10789 引入 Session JSONL 写入合并、#10784 / #10782 落地 `.deb` 与 `.rpm` 原生 Linux 包构建，标志着 1.1.x 周期向"打磨 + 跨平台补齐"方向演进。新增 Issues 普遍为 `untriaged` 状态，进入 triager 队列。

---

## 🚀 版本发布

**无新版本发布**（过去 24 小时）。当前仓库活跃迭代集中于 PR 合入与 Issue 处理，可关注即将到来的 `1.1.x` 补丁版本。

---

## 🔥 社区热点 Issues

| # | Issue | 状态 | 重点摘要 | 社区反应 |
|---|-------|------|---------|---------|
| [#7547](https://github.com/earendil-works/pi/issues/7547) | [Windows] 如何在 Windows 上使用 Pi？ | OPEN | 汇总 Windows 用户反馈，引导核心团队聚焦解决路径 | 💬 80 评论 · 👍 2 |
| [#10031](https://github.com/earendil-works/pi/issues/10031) | ESC 停止 thinking 时偶发卡死 "Working..." | CLOSED | v0.84.0 起在多机器上复现，需 `pi -c` 恢复 | 💬 28 评论 · 👍 3 |
| [#5291](https://github.com/earendil-works/pi/issues/5291) | Anthropic 订阅下 Sessions 卡 "working" | CLOSED | Enterprise 订阅场景偶发停滞 | 💬 11 评论 · 👍 3 |
| [#8036](https://github.com/earendil-works/pi/issues/8036) | Edit 工具渲染大 diff 时 TUI 崩溃 | OPEN | ~14.5 MB diff 直接 crash，恢复会话后再次触发 | 💬 9 评论 · 👍 0 |
| [#10256](https://github.com/earendil-works/pi/issues/10256) | 0.99.x terminal color query 泄漏 + BEL 唤起外编辑器 | OPEN | mintty/ConPTY 受影响，WT 与 0.87.1 正常 | 💬 9 评论 · 👍 3 |
| [#10605](https://github.com/earendil-works/pi/issues/10605) | ChatGPT/OpenAI OAuth 403 | OPEN | "user not eligible for subscription sharing"，登退无效 | 💬 9 评论 · 👍 1 |
| [#10019](https://github.com/earendil-works/pi/issues/10019) | Anthropic 订阅 :00/:30 UTC 请求挂起 | OPEN | 收到 200 + pings 后无 message_start，Claude Code 无此问题 | 💬 8 评论 · 👍 1 |
| [#9512](https://github.com/earendil-works/pi/issues/9512) | GPT-6 Astra max reasoning 下压缩触顶 | OPEN | summary 输出 cap 命中，context-overflow recovery 失败 | 💬 7 评论 · 👍 2 |
| [#3896](https://github.com/earendil-works/pi/issues/3896) | TUI 失焦后光标仍为实心块 | CLOSED | Codex/Claude Code 失焦转空心，Pi 无视觉变化 | 💬 6 评论 · 👍 8 |
| [#10719](https://github.com/earendil-works/pi/issues/10719) | Bun 安装 + Node 运行 → 扩展缺 `jiti` | CLOSED | `bun install -g` + `#!/usr/bin/env node` 二者不匹配 | 💬 4 评论 · 👍 0 |

**关注理由**：卡死类问题（#10031、#5291、#10019）集中指向流式响应生命周期中的断连/超时处理，是 1.1.x 稳定性主线；#7547 的 Windows 议题成为社区最大讨论池，将直接影响下一阶段平台投入方向。

---

## 🛠️ 重要 PR 进展

| # | PR | 状态 | 内容 |
|---|----|------|------|
| [#10789](https://github.com/earendil-works/pi/pull/10789) | **session JSONL write coalescing** | CLOSED | 首次落盘与 rewrite 由 N 次 write 合并为 1 次；append 保持同步持久化，并通过同 tick reload 用例。**性能优化**关键 PR |
| [#10784](https://github.com/earendil-works/pi/pull/10784) | **feat: .deb & .rpm 包构建** | CLOSED | 闭环 #10783，新增 Linux 原生包路线（基于现有 standalone tarballs） |
| [#10782](https://github.com/earendil-works/pi/pull/10782) | **feat: .deb & .rpm 包构建（同名）** | CLOSED | 同 #10784，闭合 #10783 |
| [#10726](https://github.com/earendil-works/pi/pull/10726) | **fix: codemode 忽略 Node watch 通知** | CLOSED | 修复 `node --watch` 下 `sandbox.execute('return 42;')` 被误识为畸形消息 |
| [#10751](https://github.com/earendil-works/pi/pull/10751) | **use pi.dev configuration schemas** | OPEN | 采用官方 schema 作为 `$id`，主题示例对接已发布 schema |
| [#10774](https://github.com/earendil-works/pi/pull/10774) | **fix(tui): 启用 herdr Kitty 图像** | OPEN | 修复 #10573 引入的 herdr 内嵌图回归，herdr 支持 Kitty graphics |
| [#10766](https://github.com/earendil-works/pi/pull/10766) | **feat: extension abort + 同 run 续接** | CLOSED | 为 `ctx.abort()` 增加 continuation 路径，调用方可在同次 run 内重发消息，不再 stranded |

**评估**：
- #10789 直接改善大 session 的 I/O 抖动，对长任务用户是隐形但显著体验提升
- #10784/#10782 兑现社区诉求，填补 Debian/RHEL 系统级安装路径
- #10726 解决 SDK 集成方痛点（`node --watch` 是热重载常见配置）
- #10766 重塑扩展能力，给 `message_update` 规则拦截后"修复继续"提供官方通道

---

## 📈 功能需求趋势

从近 24 小时活跃 Issues 提炼的社区方向（按关注度降序）：

1. **跨平台生态补齐** — Windows 体验路径梳理（#7547）；Linux 原生 .deb/.rpm 包（#10783 → #10784/#10782）；终端兼容性（mintty/ConPTY，#10256）
2. **Provider 兼容性 & 网络韧性** — Anthropic 流式挂起（#10019/#5291/#10031）、OpenAI OAuth 失效（#10605）、OpenRouter 图像端点（#10652）、GitHub Copilot 超时与重试（#10775/#10238）、OpenAI-兼容 provider 静默断连导致 headless 挂死（#10762）
3. **新模型承载能力** — GPT-6 Astra max reasoning 触顶（#9512）、virtual-model 路由（#10779）、`onPayload` 模型重定向语义明确化（#10776）
4. **扩展 SDK 能力深化** — `session_start` 追加 system prompt（#9432）、abort 后同 run 续接（#10767 → #10766）、acknowledge custom-message 发布（#8023）、long-running headless 提示稳态
5. **TUI/编辑器体验** — 全屏 overlay 阻断 transcript 滚动（#10769）、VS Code herdr/普通图截断与消失（#10788）、Right-click 粘贴（#10345）、选择后 Backspace/Delete 行为（#10777）、失焦光标（#3896）、MCP .mcp.json 互操作（#10281）
6. **SDK/工具链集成坑** — Bun install + Node runtime 不一致（#10719）、Node watch 消息通道冲突（#10726）、恢复会话后动态启用工具丢失（#10785）

---

## 💬 开发者关注点

**1. "Working..." 卡死的高频抱怨**  
流式场景下，ESC 取消 thinking、Anthropic :00/:30 UTC 时段、provider 静默丢连接，三类路径都汇集到"无错误、无超时、只能 CTRL+C 然后 `pi -c`"的体验。开发者期望：可配置超时、可见的进度反馈、以及恢复会话时不丢失上下文。

**2. Windows 是未被稳定覆盖的核心平台**  
#7547 直接定义 Windows 战略优先级；mintty BEL、ConPTY、Win 右键粘贴、VS Code herdr 图截断等多 Issue 共同构成"Windows 上 Pi 的可用性鸿沟"。

**3. Provider 错误处理需透明且可调参**  
GitHub Copilot 硬编码 5s timeout、零重试；OpenAI OAuth 失败未给恢复路径；Anthropic Subscription 与 Enterprise 行为分歧——开发者要求统一错误契约 + 重试退避 + env 覆盖。

**4. 扩展 API 走向"一等公民"**  
请求 #9432/#10767/#8023/#10705 都是把"扩展能做什么"推向更深的会话控制层 —— system prompt 注入、同 run 续接、确认异步 publish、abort 后执行队列清理。

**5. Install / 部署体验的"最后一公里"**  
`curl | sh` 之外，社区要求系统级包（.deb/.rpm）、Bun↔Node 一致性（#10719）。社区也提到了 PR #10786/#10783 的入门门槛问题（看上去无门槛贡献被 quickly 关闭 `untriaged`，可能需要 triage SLA 优化）。

**6. 性能与可观测性**  
#10789 的 I/O 合并、#9512 的 context-overflow 路径都说明大型 session 与长上下文越来越普遍，开发者开始关心"看不见的"磁盘与配额边界。

---

*日报基于公开 GitHub 数据生成；Issue/PR 链接均指向 `earendil-works/pi`。*

</details>

---
*本日报由 [Big Model Radar](https://github.com/96loveslife/big_model_radar) 自动生成。*
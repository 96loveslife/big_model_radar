# AI CLI 工具社区动态日报 2026-09-18

> 生成时间: 2026-09-18 04:06 UTC | 覆盖工具: 8 个

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

<think>The user wants me to generate a comprehensive horizontal comparative analysis report based on the daily dynamics of 7 AI CLI tools (Claude Code, OpenAI Codex, Gemini CLI, GitHub Copilot CLI, Kimi Code CLI, OpenCode, jcode, pi). Let me organize the data carefully.

Let me extract the key data points from each tool:

**Claude Code:**
- Releases: v2.1.276 (hotfix for v2.1.275 ANTHROPIC_BASE_URL regression), v2.1.275 (Gateway login enhancement, Ctrl+Enter shortcut)
- Issues: 50 updated
- PRs: 3 updated
- Key focus: Mods extension framework (#91870), Desktop stability (Win/Mac/Linux), MCP integration, hooks/skills regressions

**OpenAI Codex:**
- Releases: rust-v0.155.0 (stable, /voice experimental, TUI real-time reasoning summary), rust-v0.156.0-alpha.1, 4 alpha patches
- Issues: 50 updated
- PRs: 49 (mostly merged)
- Key focus: Windows cua_node runtime, data loss/safety, MCP, quota/billing

**Gemini CLI:**
- Releases: v0.62.0-nightly.20260918 (OAuth refresh fix, UI border rendering)
- Issues: 50 updated
- PRs: 43 updated
- Key focus: Subagent behavior, Auto Memory, sandbox security, AST-aware code understanding

**GitHub Copilot CLI:**
- Releases: v1.0.86 (custom agents can load repo instructions, session resume preserves market)
- Issues: 50 updated
- PRs: 0 new
- Key focus: MCP compatibility, Windows file handles, multi-agent/provider workflow

**Kimi Code CLI:**
- Releases: None
- Issues: 13 updated (11 closed, 2 open)
- PRs: 1 (#2651 fix repeated tool-call loops)
- Key focus: Proxy/network config, MCP, desktop integration, auth stability

**OpenCode:**
- Releases: None (v2.0.7 mentioned but with macOS ARM64 + Bun startup issues)
- Issues: 50 updated (~21 closed)
- PRs: 50 updated
- Key focus: Layout controversy (#37012 with 68 likes), session management (TUI history rail), performance, provider compat
- Milestone: GitHub stars 195K → 208K

**jcode:**
- Releases: None
- Issues: 5 updated
- PRs: 8 updated
- Key focus: Platform compatibility (Windows shell, macOS strict lint), provider integration (Grok), extensibility hooks (pre-tool, pre-request, compaction)

**pi:**
- Releases: None
- Issues: 50 updated
- PRs: 11 updated
- Key focus: Provider robustness (429 retry, Retry-After), compaction mechanism, Windows/WSL compatibility

Now let me create the comparative report. I'll structure it according to the user's 6 requirements:

1. **生态全景** - 3-5 sentences overall situation
2. **各工具活跃度对比** - Table
3. **共同关注的功能方向** - Multiple tools, specific demands
4. **差异化定位分析** - Function focus, target users, tech routes
5. **社区热度与成熟度** - Active communities, fast iteration stages
6. **值得关注的趋势信号** - Industry trends, developer value

Let me think carefully about the common themes:

**Common themes across multiple tools:**

1. **MCP生态兼容性** - Claude Code (#86142, #94718), OpenAI Codex, GitHub Copilot CLI (#4870, #4606, #4753, #4892), Gemini CLI (#1296), Kimi Code CLI (#1296, #1459, #734)
   - MCP is clearly the universal battleground

2. **Windows平台稳定性** - Claude Code (#85891, #92099, #89771), OpenAI Codex (#41290, #42501, #41170, #41539, #26199), GitHub Copilot CLI (#4095), jcode (#1291), pi (#9361)
   - Windows is the pain point for almost every tool

3. **数据安全/破坏性操作防护** - OpenAI Codex (#33624, #46022), Gemini CLI (Windows git args, path traversal PRs)
   - Safety guards are being demanded after incidents

4. **会话压缩(Compaction)质量** - pi (#9602, #9391, #9647), jcode (#1282), potentially others
   - Compaction is a universal quality issue

5. **Provider/模型适配碎片化** - OpenCode (LiteLLM, GPT-5.5, Codex OAuth), pi (Azure Foundry, GMI Cloud, OpenRouter), Claude Code (Bedrock), GitHub Copilot CLI (#4703)
   - Multi-provider is the new normal

6. **会话管理与可恢复性** - Claude Code (#73638, #95262), OpenCode (session list/switcher), jcode (#1287 session labels)
   - Session reliability

7. **TUI/UX打磨** - OpenAI Codex (#17313, #46332), OpenCode (#49665 TUI history rail), pi (#9719, #9705)
   - TUI refinement matters

8. **OAuth/Auth稳定性** - Gemini CLI (OAuth refresh), Kimi Code CLI (#2650), Claude Code (#95262), GitHub Copilot CLI (#4606)
   - Auth is a common weak link

**Differentiation:**

- **Claude Code**: Enterprise-grade, Mods extension framework is the flagship
- **OpenAI Codex**: Voice/multi-modal frontier, dense architectural refactoring
- **Gemini CLI**: Security-first, AST-aware code understanding, subagent research
- **GitHub Copilot CLI**: GitHub-native workflow, MCP integration depth
- **Kimi Code CLI**: Mid-size, focus on agent reliability and proxy compat
- **OpenCode**: Open-source community driven, TUI/UX focus, 208K stars
- **jcode**: Lightweight, hooks/transformers programmability
- **pi**: Provider-agnostic, robustness focus, small/community

**Maturity assessment:**

- High maturity / large community: Claude Code (50 issues/day), OpenAI Codex (50 issues + 49 PRs), Gemini CLI (50 + 43), GitHub Copilot CLI (50), OpenCode (50 + 50, 208K stars), pi (50 + 11)
- Mid: Kimi Code CLI (13 + 1)
- Small but focused: jcode (5 + 8)

**Fast iteration phase**: OpenAI Codex (49 PRs in 24h!), OpenCode (50 PRs), Gemini CLI (43 PRs) - heavy development
**Stable/mature**: Claude Code, GitHub Copilot CLI
**Niche but evolving**: jcode, pi, Kimi

**Trend signals:**

1. MCP is becoming the universal tool protocol - but compatibility is still fragile
2. Windows is the persistent weakness - file handles, shell, startup
3. Compaction quality becomes critical as sessions grow
4. Multi-provider support is the new differentiator
5. Session reliability/recovery is gaining attention
6. Safety/destructive operation gates becoming standard
7. TUI/UX refinement matters even in CLI tools
8. AST-aware code tools emerging (Gemini)
9. Voice is being added (Codex)
10. Extension/hooks ecosystems maturing (Claude Code Mods, jcode hooks, Gemini skills)

Let me draft the final report now. I'll aim for high information density, professional tone, and developer/decision-maker oriented content.</think>

# AI CLI 工具生态横向对比分析报告
**采样日期：2026-09-18 ｜ 覆盖工具：8 款**

---

## 1. 生态全景

2026 年 9 月的 AI CLI 工具生态已从"模型能力比拼"进入 **"协议稳定性 + 跨平台工程化 + 安全护栏"** 三重深水区。头部工具（Claude Code、OpenAI Codex、Gemini CLI、GitHub Copilot CLI、OpenCode）日均 Issue 量均稳定在 50 条上下，PR 量从 0（Copilot CLI）到 50（OpenCode）不等，反映出**密集迭代期仍在持续**；同时 **MCP 生态、Windows 平台体验、会话压缩（compaction）可靠性** 成为几乎所有工具共同面对的三大核心战场。中小工具（jcode、pi、Kimi Code CLI）则凭借**垂直场景聚焦**（hooks 可编程性、Provider 鲁棒性、代理/网络兼容）形成差异化生存空间。

---

## 2. 各工具活跃度对比

| 工具 | Issues（24h） | PRs（24h） | Release | 状态分布 | 社区体量信号 |
|------|--------------:|-----------:|---------|---------|-------------|
| **Claude Code** | 50 | 3 | v2.1.276 热修 + v2.1.275 | 高优 + 紧急热修 | Max 订阅用户主导 |
| **OpenAI Codex** | 50 | **49** | rust-v0.155.0 stable + 0.156.0-alpha | **PR 几乎全部合并**，主干重构 | 密集架构收敛期 |
| **Gemini CLI** | 50 | 43 | v0.62.0-nightly | nightly 节奏 + 安全 PR 集中 | 官方安全治理加速 |
| **GitHub Copilot CLI** | 50 | **0** | v1.0.86 | 回归 + MCP 兼容集中 | 团队处于 triage 而非 feature 阶段 |
| **Kimi Code CLI** | 13 | 1 | 无 | 11/13 已关闭（清理期） | 中小规模、稳步收敛 |
| **OpenCode** | 50 | 50 | 无（v2.0.7 启动故障待修） | 多数已关闭 | **GitHub Stars 195K → 208K** 🎉 |
| **jcode** | 5 | 8 | 无 | 0 评论 0 赞早期 triage | 小而精，PR 主导 |
| **pi** | 50 | 11 | 无 | 修复型为主 | 自助贡献型社区 |

**关键观察：**
- **OpenAI Codex 与 OpenCode** 是当日 PR 最密集的两个仓库（49 / 50），代表**密集迭代期**。
- **GitHub Copilot CLI** 出现"0 PR 但 50 Issues 活跃"的反差，说明团队当前在集中处理回归和 triage，未发起新功能。
- **Kimi Code CLI** 11/13 Issue 关闭，呈典型的"清理积压"姿态。

---

## 3. 共同关注的功能方向

### 🔴 高频共识（≥5 个工具同时关注）

| 方向 | 涉及工具与代表 Issue | 共识诉求 |
|------|---------------------|---------|
| **MCP 协议兼容性** | Claude Code（#86142、#94718）、OpenAI Codex、GitHub Copilot CLI（#4870、#4753、#4606、#4892）、Gemini CLI（#1296、#29386）、Kimi Code CLI（#1296、#1459、#734） | 客户端校验过严、OAuth issuer 严格匹配、session 生命周期、stdio 超时、re-enumeration 副作用——MCP 已成"中心化战场" |
| **Windows 平台稳定性** | Claude Code（#85891、#92099、#89771）、OpenAI Codex（#41290、#42501、#41170、#41539、#26199）、GitHub Copilot CLI（#4095、#3264）、jcode（#1291）、pi（#9361） | 文件句柄竞争、cua_node 启动慢、shellPath 解析、首次启动体验、WSL 集成 |
| **会话压缩 / Compaction 质量** | pi（#9602、#9391、#9647、#9727）、jcode（#1282）、隐含在 Claude Code 的 session rename 损坏 | thinking block 残留、token 爆炸、签名 mismatch、event 顺序、扩展生命周期 |
| **Provider / 多模型适配碎片化** | OpenCode（LiteLLM、GPT-5.5、Codex OAuth、Muse Spark）、pi（Azure Foundry、GMI Cloud、OpenRouter、GLM-5.3）、Claude Code（Bedrock SSO）、GitHub Copilot CLI（#4703 per-agent provider） | 限流 header 解析、工具名长度限制、:free 模型 max_tokens 不一致、profile 命名遮盖 |
| **数据安全 / 破坏性操作护栏** | OpenAI Codex（#33624、#46022）、Gemini CLI（Windows git args 校验、路径穿越、LLM 注入） | Full Access 下仍需硬确认、git read-only 滥用、checkpoint 路径穿越、prompt 注入 |
| **OAuth / 认证链路稳定性** | Gemini CLI（#29339 refresh token）、Kimi Code CLI（#2650 子代理超时）、Claude Code（#95262 token 刷新后 401）、GitHub Copilot CLI（#4606 issuer 斜杠） | refresh token 丢失、OAuth 元数据严格匹配、单点超时影响整体可用性 |
| **会话管理与可恢复性** | Claude Code（#73638、#95262）、OpenCode（#41855、#49543、#43056、#41064、#49665）、jcode（#1287 标签丢失） | session list 缺失、可视化切换器、transcript 损坏无恢复路径、local session 路径漂移 |
| **TUI / 终端交互打磨** | OpenAI Codex（#17313、#46332）、OpenCode（#49665 历史侧栏、#49646 /btw）、pi（#9719、#9705） | 进度条样式争议、recap 淡化、tool shell padding、footer 渲染、session 历史栏 |

### 🟡 局部共识（2-4 个工具）

- **扩展性 / Hooks / Mods**：Claude Code（#91870 "10x extensibility"）、jcode（#1279、#1280、#1282）、Gemini CLI（#21968 skills 使用率）
- **AST 感知代码理解**：Gemini CLI（#22745 tilth/glyph 评估）、pi 隐含
- **浏览器代理**：Gemini CLI（#21983 Wayland、#22232）、OpenAI Codex（#45317、#44364、#45449）
- **国际化 / 可访问性**：Claude Code（#21382 韩文 IME）、OpenCode（#35831）、pi（#9640）

---

## 4. 差异化定位分析

| 工具 | 核心定位 | 目标用户 | 技术路线特征 |
|------|---------|---------|-------------|
| **Claude Code** | 企业级 AI 工作流中枢 | Max 团队订阅用户 + 大型企业 | **Mods 扩展框架**为核心路线，官方已承诺数周内交付 function hooks；Desktop 三端并重 |
| **OpenAI Codex** | 全栈 AI 编程平台 + 多模态前沿 | Pro/Plus 开发者 + 多 provider 集成方 | 实验性 `/voice` 语音、实时推理摘要；密集平台抽象层重构（Platform 身份共享、OAuth 网关） |
| **Gemini CLI** | 学术 / 安全优先 + AST 代码理解探索者 | 重度开发者 + 安全敏感用户 | **夜间版节奏** + AST-aware（tilth/glyph）、OS 原生沙箱探索、子代理行为治理 |
| **GitHub Copilot CLI** | GitHub 原生工作流入口 | GitHub 企业用户 + 多 IDE 用户 | MCP 深度集成、Plugin 1.0 规范协调；v1.0 系列在 triage 阶段 |
| **Kimi Code CLI** | 中文场景 + 桌面端 + 代理兼容 | 国内企业用户 + Kimi Desktop 用户 | **中文体验优先**，强调认证链路韧性、子代理稳定性 |
| **OpenCode** | 开源 TUI 旗舰 + 社区驱动 | 开源贡献者 + TUI 重度用户 | 208K Stars，社区 bot 自动化贡献流水线成熟；layout 争议反映**用户黏性** |
| **jcode** | 轻量 + 可编程扩展 | hooks/transformers 高级用户 | pre-tool / pre-request / compaction lifecycle 完整 hooks 链；provider 语义清晰化 |
| **pi** | Provider-agnostic 鲁棒性优先 | 多 provider 切换者 + 本地模型用户 | 重试/限流/compaction 健壮性 + 自助贡献式 PR（每个 provider 一个） |

**关键差异点：**
- **扩展能力**：Claude Code（Mods 即将发布）> Gemini CLI（skills 已有）> jcode（hooks 已成体系）> pi（事件系统建设中）
- **TUI 投入**：OpenCode > pi > OpenAI Codex > Gemini CLI
- **安全护栏**：Gemini CLI（同期合入 3 项安全 PR）> OpenAI Codex（事故驱动）> 其他
- **多模态**：OpenAI Codex（/voice）走在最前

---

## 5. 社区热度与成熟度

### 🟢 高活跃 + 大体量（头部）
- **Claude Code**、**OpenAI Codex**、**GitHub Copilot CLI**、**Gemini CLI**、**OpenCode**
- 特征：日均 50 条 Issue 流入；OpenAI Codex 与 OpenCode 单日 50 条 PR 体现**重型工程节奏**。
- Claude Code 与 GitHub Copilot CLI 因企业用户基数大，单 Issue 评论数常达 100-800 量级。

### 🟡 中等活跃 + 快速迭代
- **pi**（50 Issues + 11 PRs，自助贡献式社区，每个 provider 一 PR 一 Issue）
- 特征：社区扮演"质量守门员"角色，单 PR 闭环 issue 比例高。

### 🟠 小规模 + 专注收敛
- **Kimi Code CLI**（13 Issues, 11 已关闭，处于清理期）
- 特征：处于"集中修复 + 等待新版本"窗口。

### 🔵 小而美（早期阶段）
- **jcode**（5 Issues + 8 PRs，但 PR 含金量高：三块扩展性 PR 推动生态成形）
- 特征：**PR 主导、Issue 滞后**，反映项目仍以内部驱动为主。

**成熟度排序（综合社区体量 + 工程密度 + 用户反馈深度）：**
`Claude Code ≈ OpenAI Codex > Gemini CLI ≈ GitHub Copilot CLI > OpenCode > pi > Kimi Code CLI > jcode`

---

## 6. 值得关注的趋势信号

### 📡 信号 1：MCP 已成"中心化战场"，但成熟度不足
- **现状**：8 款工具中有 5 款在同一天出现 MCP 相关 Issue，且诉求高度同质（OAuth

---

## 各工具详细报告

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills 社区热点

> 数据来源: [anthropics/skills](https://github.com/anthropics/skills)

<think>The user wants me to analyze the GitHub data from the anthropics/skills repository and produce a community hotspot report. Let me carefully analyze the data provided.

Looking at the data:

**Pull Requests (showing top 20 of 50):**
Note that the comments count shows "undefined" for all PRs, but the prompt says they're sorted by comment count. Let me look at 👍 counts - they all show 0. So the comment count data appears to be missing/undefined in the data provided. I'll need to work with what I have - the ordering itself suggests these are the most discussed PRs.

Let me identify the key PRs:
1. #1298 - fix(skill-creator): isolate trigger evals and handle Windows failures - bug fix for skill-creator
2. #1771 - proofcore-contract-auditor - Web3 smart contract auditing skill
3. #1703 - md2video-audio - Markdown to video skill
4. #1742 - fix(mcp-builder): mcp>=2 compatibility - bug fix
5. #1734 - Detect orphaned docx comments - DOCX skill improvement
6. #525 - pyxel skill for retro game development
7. #514 - document-typography skill - typography QC
8. #1615 - scnet-hpc skill - HPC cluster skill
9. #538 - fix(pdf): case-sensitive file references - bug fix
10. #486 - ODT skill - OpenDocument support
11. #210 - frontend-design skill improvement
12. #83 - skill-quality-analyzer and skill-security-analyzer
13. #541 - fix(docx): tracked change w:id collision - bug fix
14. #539 - fix(skill-creator): warn on unquoted description - bug fix
15. #1769 - Fix skill-creator trigger detection 0% recall - bug fix
16. #1765 - fix(office): decode redlining diffs as UTF-8 - bug fix
17. #1724 - mcp-builder: update default model to claude-sonnet-5 - update
18. #1628 - Hivemind multi-agent orchestration skill
19. #1627 - buffer-api Agent Skill
20. #1607 - Update claude-api skill: mark retired models - update

**Issues (top 15 of 50):**
1. #492 - Security: Community skills under anthropic/ namespace (43 comments, 2 👍)
2. #228 - Enable org-wide skill sharing (16 comments, 8 👍)
3. #556 - run_eval.py: claude -p never triggers skills (12 comments, 7 👍)
4. #62 - Skills disappeared (10 comments, 2 👍)
5. #1329 - compact-memory skill proposal (9 comments)
6. #202 - skill-creator update best practice (8 comments, closed)
7. #412 - agent-governance skill proposal (6 comments, closed)
8. #189 - duplicate skills in plugins (6 comments, 9 👍)
9. #1487 - claude-api skill context window exhaustion (4 comments)
10. #1390 - mcp-builder evaluation scores 0/N (4 comments)
11. #1385 - Reasoning Quality Gate Pipeline proposal (4 comments)
12. #1175 - SharePoint security concerns (4 comments, closed)
13. #29 - Usage with bedrock (4 comments)
14. #16 - Expose Skills as MCPs (4 comments)
15. #1362 - web-artifacts-builder pnpm issues (3 comments)

Now let me structure the report:

1. **热门 Skills 排行** - Top 5-8 PRs
Looking at the trend and importance, the most notable skills (not bug fixes) seem to be:
- #1703 md2video-audio (recent, high visibility)
- #1771 proofcore-contract-auditor (Web3 niche)
- #525 pyxel (retro games)
- #514 document-typography
- #1615 scnet-hpc
- #486 ODT
- #210 frontend-design improvement
- #83 skill-quality-analyzer
- #1628 Hivemind
- #1627 buffer-api

I should focus on actual skills (not bug fixes) for the ranking, since those represent new functionality.

2. **社区需求趋势** - From issues:
- Trust/security (Issue #492 - 43 comments)
- Skill sharing/distribution (Issue #228 - 16 comments)
- Skill triggering reliability (Issue #556 - 12 comments)
- Token/context efficiency (Issue #1487)
- Memory management (Issue #1329)
- Agent governance (Issue #412)
- Cross-platform support (Issue #29 Bedrock)
- MCP integration (Issue #16)

3. **高潜力待合并** - Recent active PRs still open
4. **生态洞察** - One-line summary

Let me write a professional Chinese report. I'll keep it concise but informative.

Important note: All PRs in the data show "undefined" for comment count and 0 for likes. I should note this and base my ranking on the data structure (which says it's sorted by comment count) plus qualitative indicators like recency, the importance of fixes, and what they represent.

Actually, re-reading: "热门 Pull Requests（按评论数排序，共 50 条，展示前 20 条）" - so the user is telling me they're sorted by comment count but the comment field shows undefined. This is likely a data formatting issue where the actual count wasn't captured. I'll work with the data as presented - the ordering implies these are the most discussed PRs.

For the ranking, I should pick the most interesting/notable ones - ideally skills that add new functionality rather than bug fixes, as those represent what the community is excited about. But bug fixes that are high-impact (like skill-creator fixes) are also important.

Let me draft the report now.</think>

# Claude Code Skills 社区热点报告
*数据截止 2026-09-18*

---

## 1. 热门 Skills 排行

> 注：PR 评论数数据为 `undefined`，以下排行综合 PR 排序、近期活跃度、解决的问题深度及 Skill 本身的新颖性进行筛选。

### 🏆 Top Skills（按社区关注度）

| # | Skill / PR | 类型 | 状态 | 关注焦点 |
|---|---|---|---|---|
| 1 | **md2video-audio** ([#1703](https://github.com/anthropics/skills/pull/1703)) | 新功能 | OPEN | 零成本 Markdown → MP4 视频 + 人声配音 |
| 2 | **proofcore-contract-auditor** ([#1771](https://github.com/anthropics/skills/pull/1771)) | 新功能 | OPEN | Solidity/Rust 智能合约静态分析 + TON 区块链存证 |
| 3 | **pyxel** 复古游戏开发 ([#525](https://github.com/anthropics/skills/pull/525)) | 新功能 | OPEN | Python 复古游戏实现 + 无头确定性测试 |
| 4 | **document-typography** ([#514](https://github.com/anthropics/skills/pull/514)) | 新功能 | OPEN | 解决 AI 生成文档中的孤行/寡行/编号错位 |
| 5 | **Hivemind 多 Agent 编排** ([#1628](https://github.com/anthropics/skills/pull/1628)) | 新功能 | OPEN | 用开源模型 worker 接管机械任务，保护主上下文 |
| 6 | **ODT / OpenDocument** ([#486](https://github.com/anthropics/skills/pull/486)) | 新功能 | OPEN | 补齐开源文档格式创建/解析 |
| 7 | **buffer-api** Agent Skill ([#1627](https://github.com/anthropics/skills/pull/1627)) | 新功能 | OPEN | Buffer GraphQL 社交排程，多 Agent 通用 |
| 8 | **scnet-hpc** ([#1615](https://github.com/anthropics/skills/pull/1615)) | 新功能 | OPEN | SCNet 超算集群 SSH + Slurm 调度 |

### 🔥 讨论热度最高的 Bug Fix（影响面广）

- **#1298** [skill-creator trigger eval 修复](https://github.com/anthropics/skills/pull/1298) — 修复 Windows select() 报错和误判
- **#1769** [skill-creator 触发率报 0%](https://github.com/anthropics/skills/pull/1769) — 直接对应社区热门 Issue #556
- **#1742** [mcp-builder 兼容 mcp≥2](https://github.com/anthropics/skills/pull/1742) — 流式 HTTP 与自定义 header 支持

---

## 2. 社区需求趋势（来自 Issues）

### 🔒 安全与信任（最高优先级）
- **[#492](https://github.com/anthropics/skills/issues/492) - 43 评论** ⭐  
  社区 Skill 使用 `anthropic/` 命名空间冒充官方，存在权限提升风险。**这是当前社区第一大诉求**。

### 🤝 组织级 Skill 共享
- **[#228](https://github.com/anthropics/skills/issues/228) - 16 评论 / 8 👍**  
  用户希望 Claude.ai 支持组织内直接共享 Skill，避免手动导出分发。

### 🎯 Skill 触发可靠性
- **[#556](https://github.com/anthropics/skills/issues/556) - 12 评论 / 7 👍**  
  `run_eval.py` 中 `claude -p` 触发率 0%，评测框架形同虚设。

### 🧠 高级 Agent 能力提案
| 方向 | Issue | 状态 |
|---|---|---|
| 紧凑记忆/符号化状态 | [#1329 compact-memory](https://github.com/anthropics/skills/issues/1329) | OPEN |
| Agent 治理与安全模式 | [#412 agent-governance](https://github.com/anthropics/skills/issues/412) | CLOSED |
| 推理质量三道闸 | [#1385 Quality Gate Pipeline](https://github.com/anthropics/skills/issues/1385) | OPEN |

### 📦 生态集成诉求
- **[#29](https://github.com/anthropics/skills/issues/29)** — AWS Bedrock 适配（基础部署需求）
- **[#16](https://github.com/anthropics/skills/issues/16)** — Skill → MCP 暴露（标准化 API 信号）
- **[#1175](https://github.com/anthropics/skills/issues/1175)** — SharePoint 文档 + Skill 安全策略

### ⚙️ 性能/工程问题
- **[#1487](https://github.com/anthropics/skills/issues/1487)** — `claude-api` skill 单次注入 156k token 耗尽上下文
- **[#1390](https://github.com/anthropics/skills/issues/1390)** — `mcp-builder` 评测得分恒为 0/N（TextContent 序列化 bug）
- **[#189](https://github.com/anthropics/skills/issues/189)** — `document-skills` 与 `example-skills` 内容重复
- **[#1362](https://github.com/anthropics/skills/issues/1362)** — `web-artifacts-builder` 在 pnpm≥10 上失败

---

## 3. 高潜力待合并 Skills（近期活跃）

下列 PR 仍处 OPEN，但更新日期贴近 2026-09-15~17，存在短期内被合入的可能：

| PR | Skill | 最近更新 | 合并概率信号 |
|---|---|---|---|
| [#1771](https://github.com/anthropics/skills/pull/1771) | proofcore-contract-auditor | 09-16 | Web3 新垂直领域，补充能力空白 |
| [#1298](https://github.com/anthropics/skills/pull/1298) | skill-creator 修复 | 09-16 | 修复 #556/#1721 系列问题，阻塞评测基础设施 |
| [#1742](https://github.com/anthropics/skills/pull/1742) | mcp-builder 修复 | 09-17 | 解决 mcp≥2 兼容，社区刚需 |
| [#1703](https://github.com/anthropics/skills/pull/1703) | md2video-audio | 09-15 | 媒体生成类 Skill 增量空间大 |
| [#525](https://github.com/anthropics/skills/pull/525) | pyxel | 09-16 | 长期未合但持续被引用，作者持续维护 |
| [#486](https://github.com/anthropics/skills/pull/486) | ODT | 04-14 | 开源格式补齐，议题持续存在 |
| [#1769](https://github.com/anthropics/skills/pull/1769) | skill-creator 触发率 | 09-15 | 修复 PR #556 的核心 bug |

---

## 4. Skills 生态洞察（一句话）

> **社区当前最集中的诉求是「Skill 生态的信任边界与基础设施可靠性」**——既要解决冒充官方命名空间带来的安全风险（#492）、又要修复 skill-creator / mcp-builder 等核心工具链的触发率与评测为 0% 的基础缺陷，同时期待组织级共享、上下文效率优化和 Agent 治理类高级能力尽快落地。

### 📊 三大主线任务

1. **🛡️ 治理优先**：命名空间管控、权限审计、Skill 质量分析器（呼应 PR #83）
2. **🔧 工具链修复**：skill-creator、mcp-builder、run_eval.py 的可靠性
3. **🚀 能力扩展**：多 Agent 编排、媒体生成、Web3、内存压缩、企业集成

---

<think>Let me analyze the GitHub data provided for Claude Code community dynamics on 2026-09-18.

Key observations:
1. Two recent releases: v2.1.276 and v2.1.275
2. 50 issues updated in the last 24 hours (showing top 30)
3. 3 PRs updated in the last 24 hours
4. The most commented issue is #38335 with 857 comments about Max plan session limits

Let me organize the top issues by importance:

Top issues by comments:
1. #38335 - Max plan session limits exhausted abnormally fast (857 comments, 476 👍) - already marked invalid
2. #91870 - Mods - make Claude 10x more extensible (196 comments, 120 👍)
3. #85891 - Claude Desktop Windows always-on-top (107 comments, 263 👍)
4. #69238 - No response from API error when Advisor is triggered (65 comments, 109 👍)
5. #86142 - MCP servers draft-07 outputSchema unusable (53 comments) - CLOSED
6. #47180 - Cowork scheduled tasks ignore permissions (38 comments, 47 👍)
7. #15921 - VSCode Extension permissions not respected (31 comments, 32 👍)
8. #92099 - Claude Code Desktop Windows update error (15 comments, 18 👍)
9. #73638 - Session rename corrupts transcript (13 comments)
10. #28795 - AWS Bedrock + AWS SSO support (13 comments, 95 👍)

There are also some recent (2026-09-18) issues worth noting:
- #95262 - remote-control session 401s after token refresh
- #95281 - Relax safety constraints for scientific computing
- #95280 - once: true on skill-frontmatter hooks ignored
- #95279 - Subagent never revived by Monitor event
- #95278 - File attachment zip card no download button

PRs (only 3 in last 24h):
- #95198 - mods/diff type openPane as unknown
- #94847 - diff: first edit opens pane only when file exists
- #87077 - fix pr-review-toolkit YAML frontmatter

The data only shows 3 PRs but the user asked for 10. I should note this in the report.

Feature trends analysis:
- IDE/Desktop app bugs (Windows, Mac, Linux all affected)
- MCP integration issues
- Authentication/token management
- Hooks and skills system
- Bedrock/SSO support
- Mods/extension system
- Korean IME support
- Worktree configuration
- Scientific computing use cases

Let me now write the report in Chinese, professional tone, suitable for technical developers.

The user's prompt has some system-prompt-like elements claiming model identity and thinking mode. The system says to use thinking mode with detailed reasoning. I should follow the actual system prompt which enables thinking mode. The actual developer message is just "You are a helpful assistant." So I'll use thinking blocks as required by the system, then produce the report.

Note: The user asked for "最新 Pull Requests（过去24小时内更新）（共 3 条）" but also asked to "挑选 10 个重要的 PR". Since there are only 3 PRs, I'll cover all 3 and note that.

Let me draft the report now.</think>

# Claude Code 社区动态日报
**日期：2026-09-18**

---

## 📌 今日速览

今日最显著的动态是 **v2.1.276 紧急热修复发布**，针对 v2.1.275 中通过 `ANTHROPIC_BASE_URL` 代理网关时所有请求都因 `Input tag 'advisor_20260301'` 失败 400 的回归问题。社区层面，"Mods"扩展框架（issue #91870，196 条评论）持续成为最受关注的功能方向；同时 Desktop 端在 Windows / macOS / Linux 三平台的稳定性问题（窗口置顶、GPU 进程风暴、更新失败等）仍是开发者吐槽的集中区。

---

## 🚀 版本发布

### v2.1.276（今日发布）
- **修复**：通过代理/网关（`ANTHROPIC_BASE_URL` 指向 proxy）调用时，所有请求因 `Input tag 'advisor_20260301'` 报 400 的回归问题。这是 v2.1.275 引入的副作用，热修立即跟进。

### v2.1.275（昨日发布）
- **Gateway 登录增强**：Claude Apps 网关登录时显示已登录账户，保存凭据前需用户确认，`/status` 会展示当前账户。
- **新增"立即发送"快捷键**：`Ctrl+Enter`（或 `Ctrl+X Ctrl+S`）可中断当前回合并把所有排队的消息一起发送。
- 🔗 https://github.com/anthropics/claude-code/releases

---

## 🔥 社区热点 Issues（Top 10）

| # | Issue | 关注度 | 重要性 |
|---|-------|--------|--------|
| 1 | **[#38335](https://github.com/anthropics/claude-code/issues/38335)** Max plan 会话限额异常耗尽（自 2026-03-23 起） | 💬857 👍476 | 全年最高热度之一。Max 订阅用户反馈配额异常快速耗尽，虽被标 `invalid`，但评论数与点赞数显示这是订阅用户的核心痛点。 |
| 2 | **[#91870](https://github.com/anthropics/claude-code/issues/91870)** Mods — 让 Claude 可扩展性提升 10 倍 | 💬196 👍120 | Anthropic 官方回复承诺数周内交付 "function hooks"，是当前最重磅的扩展性路线图。 |
| 3 | **[#85891](https://github.com/anthropics/claude-code/issues/85891)** Claude Desktop (Win11) 窗口始终置顶且无法关闭 | 💬107 👍263 | 点赞数最高的 Windows Desktop 体验问题；与 macOS 的 #66516 形成同源问题，跨平台窗口管理缺陷。 |
| 4 | **[#69238](https://github.com/anthropics/claude-code/issues/69238)** Advisor 触发时出现 "No response from API" | 💬65 👍109 | 长寿命议题，反映 Sonnet + Advisor 组合的网络稳定性问题，影响基础工作流。 |
| 5 | **[#86142](https://github.com/anthropics/claude-code/issues/86142)** MCP 服务声明 draft-07 outputSchema 不可用 *(已关闭)* | 💬53 | MCP 生态兼容性问题；客户端在派发前就拒绝，导致整类 MCP server 无法使用。 |
| 6 | **[#47180](https://github.com/anthropics/claude-code/issues/47180)** Cowork 定时任务忽略 "Always allow" 权限 | 💬38 👍47 | macOS Cowork 权限持久化失效，每次运行都重新询问，自动化场景受阻。 |
| 7 | **[#15921](https://github.com/anthropics/claude-code/issues/15921)** VSCode 扩展不遵守 `.claude/settings.local.json` 权限 | 💬31 👍32 | 即使开启 `bypassPermissions`，Bash/Write/Edit 操作仍绕开本地配置；IDE 安全模型与 CLI 行为不一致。 |
| 8 | **[#92099](https://github.com/anthropics/claude-code/issues/92099)** Windows 版 Desktop 更新时报错 | 💬15 👍18 | Windows 安装链路问题，影响企业用户升级路径。 |
| 9 | **[#73638](https://github.com/anthropics/claude-code/issues/73638)** Server-tool 调用期间重命名 session 会永久损坏 transcript | 💬13 | 一旦触发，后续所有 prompt 全部 400；属于"无恢复路径"的严重缺陷。 |
| 10 | **[#28795](https://github.com/anthropics/claude-code/issues/28795)** `claude remote-control` 支持 AWS Bedrock + SSO | 💬13 👍95 | 点赞数远超评论数，企业 AWS 用户对脱离 Anthropic 直连、走 Bedrock 的需求持续强烈。 |

**今日新增值得关注的 issue：**
- [#95280](https://github.com/anthropics/claude-code/issues/95280) — `once: true` 在 skill frontmatter hook 上失效（v2.1.273 回归）
- [#95279](https://github.com/anthropics/claude-code/issues/95279) — `Monitor(persistent: true)` 事件无法复活已完成的子代理
- [#95262](https://github.com/anthropics/claude-code/issues/95262) — `remote-control` token 刷新失败后永久 401 且无法 `/login`

---

## 🔧 重要 PR 进展

> 过去 24 小时更新的 PR 共 **3 条**（远少于平时），全部围绕 **Mods / Diff / Agent Frontmatter**：

| PR | 内容 | 价值 |
|----|------|------|
| **[#95198](https://github.com/anthropics/claude-code/pull/95198)** `mods/diff`: 将 `openPane` 返回类型改为 `Promise<unknown>` | 为下一版引擎新增的 `$.ui.open` 富结果对象预留类型空间，向后兼容。无行为变化。 |
| **[#94847](https://github.com/anthropics/claude-code/pull/94847)** `diff`: 首次 Edit 仅在有文件可展示时才打开 diff pane | 修复空 diff pane 闪烁问题：仓库外写入、被忽略文件、跨 worktree 写入时不再自动打开空面板。 |
| **[#87077](https://github.com/anthropics/claude-code/pull/87077)** `fix(pr-review-toolkit)`: 修复所有 agent 的非法 YAML frontmatter | 现有 `pr-review-toolkit` 中每个 agent 的 description 是未加引号的标量，内部包含 `Daisy: "..."` 等冒号键，被解析为非法嵌套映射；修复后 agent 元信息可正常加载。 |

由于 Mods 是当前最受关注的扩展方向（参见 #91870），这三处改动都属于 Mods 框架"地基级"的渐进优化。

---

## 📈 功能需求趋势

按出现频次与点赞数归纳，社区最集中的诉求集中在以下方向：

| 方向 | 代表 Issue | 信号 |
|------|-----------|------|
| **扩展性 / Mods 系统** | #91870, #95198, #94847 | 官方已确认"数周内交付"，是当前投入最强的方向 |
| **Desktop 跨平台稳定性** | #85891, #88098, #83453, #90742, #89771 | Win/macOS/Linux 三端 UI bug 密集；窗口置顶、GPU 重启风暴、菜单回归等 |
| **企业身份 / 多云接入** | #28795 (Bedrock SSO), #56606 (1P/3P 推理切换) | 企业用户希望摆脱 Anthropic 直连 |
| **MCP 生态兼容** | #86142, #94718, #91311 | draft-07 schema、optional parameter、widget 导出等反复踩坑 |
| **Hooks / Skills 一致性** | #95280 (`once: true` 失效), #89771 (slash menu 回归) | 新机制与传统行为存在回归风险 |
| **a11y / 国际化** | #21382 (韩文 IME 失字符) | 输入法与无障碍仍是未覆盖角落 |
| **会话可恢复性** | #95262, #73638 | 凭据失效 / transcript 损坏后无恢复路径，开发者希望"可重启即可救活" |
| **CLI 可配置化** | #93308 (`worktree.branchPrefix`) | 硬编码值（worktree 命名等）成为高频小需求来源 |

---

## 🧑‍💻 开发者关注点

1. **回归比新功能更伤人** — 今日新增的 #95280、#95279 加上昨日的 v2.1.276 热修，提示 Mods / Hooks 新机制引入的回归面正在扩大，开发者更倾向"稳定优先于新功能"。
2. **Desktop 体验是当前最大短板** — 与 CLI 相比，Desktop 在三平台都出现窗口管理、菜单触发、附件卡片等"看似简单但反复复发"的问题 (#85891, #89771, #94732, #95278)。
3. **MCP 客户端校验过严** — #86142 和 #94718 表明客户端在 schema 校验阶段直接拒绝请求，导致"明明 server 正常却跑不起来"；社区呼吁把校验前移到 server 侧。
4. **长任务的状态可恢复性差** — #73638 / #95262 揭示：会话一旦出现 token 失败或 transcript 错位，没有任何 in-place 修复路径，只能废弃重建，对自动化与 remote-control 场景尤其不友好。
5. **官方与社区的高密度互动集中在 #91870 (Mods)** — 这是少有的官方主动置顶并给出路线图的 Issue，建议持续跟踪，是接下来数周 Claude Code 最重要的演进方向。

---

*日报基于 2026-09-18 当日更新的 Releases / Issues / PR 数据生成。*

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

<think>The user wants me to generate a Chinese daily report for OpenAI Codex community dynamics based on GitHub data for 2026-09-18. Let me analyze the data carefully and create a structured report.

Let me analyze the key points:

**Releases:**
- rust-v0.155.0-alpha.9.2
- rust-v0.155.0 (stable) - Added experimental `/voice` conversations with live transcripts and microphone controls, TUI shows live reasoning summaries and completion timestamps
- rust-v0.156.0-alpha.1
- rust-v0.155.0-alpha.18, .17, .16 (alpha iterations)

**Top Issues by comments:**
1. #41290 - Windows WSL project creation/removal fail (77 comments, 54 👍)
2. #42501 - Windows UI launch fail with cua_node staging (20 comments)
3. #17313 - Context progress bar downgrade (19 comments, 46 👍) - CLOSED
4. #41170 - Windows first launch 15 min extracting cua_node (14 comments)
5. #45835 - "Selected model is at capacity" error (13 comments)
6. #33624 - Safety confirmation for bulk deletion (11 comments)
7. #32188 - Event-driven wakeup for background exec (11 comments, 13 👍)
8. #41539 - Windows headless start ~12 min after update (11 comments)
9. #45317 - Chrome browser integration rejects API-key auth (9 comments)
10. #26199 - Ctrl+Shift+V double paste (8 comments, 6 👍)
11. #44364 - Chrome control fails without TUN (8 comments)
12. #46022 - CRITICAL DATA LOSS Windows mass deletion (5 comments)
13. #45184 - Android Remote voice fail (5 comments)
14. #30986 - Project-level topics/threads (5 comments, 4 👍)
15. #45835 - already listed
16. #46341 - "Error creating chat" after macOS update (4 comments) - CLOSED
17. #46254 - Pro $100 plan quota depletion (4 comments)
18. #46252 - app-server thread/start ignores default_permissions (3 comments)

**Key PRs (all CLOSED, meaning merged):**
1. #46335 - MCP policy evaluation consistency
2. #46334 - Share platform identity across path/network/sandbox
3. #46333 - Handle disabled Windows sandbox accounts
4. #46332 - Dim conversation recaps in TUI
5. #46331 - Defer environment network policy validation
6. #46330 - Move retry backoff into codex-async-utils
7. #46328 - Avoid persisting project trust for projectless dirs
8. #46324 - Broaden compaction fallback
9. #46323 - Record active plugin inventory in turn analytics
10. #46322 - Set Windows sandbox type in pending environment test
11. #46319 - Preserve web search actions in exec JSON
12. #46318 - Add OAuth credential management for gateways
13. #46310 - Defer environment selection changes until next turn
14. #46309 - Preserve plugin caches across metadata refreshes
15. #46306 - Preserve bio policy errors
16. #46305 - Avoid cloning turn items for app-server lookups
17. #46303 - Serialize release asset uploads
18. #46302 - Validate network socket policies using executor OS
19. #46300 - Centralize OAuth login and refresh
20. #46297 - Support catalog descriptions for multi-agent V2 tools

**Trends from Issues:**
- Windows platform issues (lots of bugs - WSL, cua_node runtime, app launch)
- Safety/data loss concerns (destructive operations)
- Browser/Chrome integration issues
- Voice and remote session issues
- Performance/quota issues
- Sandbox configuration
- TUI improvements
- Multi-agent features
- OAuth/authentication

Let me write a structured, professional Chinese daily report. I'll aim for high information density and developer-focused content.

Let me pick the top 10 issues for the "Community Hot Issues" section based on comments and importance:
1. #41290 - WSL project creation (77 comments, 54 👍)
2. #46022 - CRITICAL DATA LOSS (very serious)
3. #33624 - Safety bulk deletion (important safety issue)
4. #42501 - Windows UI launch fail
5. #17313 - Context progress bar downgrade (46 👍)
6. #45835 - Model capacity errors
7. #41170 - Windows first launch 15 min
8. #45317 - Chrome browser API-key auth
9. #32188 - Event-driven wakeup
10. #26199 - Ctrl+Shift+V double paste
11. #44364 - Chrome control without TUN
12. #30986 - Project-level topics

Let me select 10:
1. #41290 (77 comments)
2. #46022 (data loss, critical)
4. #33624 (safety)
3. #42501 (Windows)
6. #17313 (closed, 46 👍)
5. #45835 (model capacity)
7. #41170 (Windows first launch)
8. #45317 (Chrome auth)
9. #32188 (event-driven wakeup)
10. #26199 (double paste)
11. #44364 (Chrome without TUN)
12. #30986 (project topics)

Let me pick the most impactful 10.

For PRs, all are CLOSED (merged), so they're all important. Let me pick 10 most meaningful:
1. #46334 - Platform identity sharing (architectural)
2. #46335 - MCP policy consistency
3. #46318 - OAuth credential management for gateways
4. #46310 - Defer environment selection (UX fix)
5. #46303 - Replay backoff modularization
7. #46319 - Preserve web search in exec JSON
8. #46297 - Multi-agent V2 catalog descriptions
9. #46306 - Bio policy errors
10. #46300 - OAuth login centralization

Now let me draft the report. I'll use a clear, professional tone suitable for technical developers.

Let me also think about formatting:
- Use markdown headers
- Use bullet points and numbered lists
- Keep it concise but informative
- Include GitHub links
- Use emojis sparingly for visual scanning

Let me write it now.</think>

# OpenAI Codex 社区动态日报 · 2026-09-18

> 数据来源：[github.com/openai/codex](https://github.com/openai/codex) ｜ 采样窗口：过去 24 小时

---

## 📌 今日速览

今天最显著的信号是 **rust-v0.155.0 稳定版正式发布**，带来了实验性的 `/voice` 实时语音对话和 TUI 实时推理摘要；与此同时，**20+ 条 PR 几乎同时合入主干**（涵盖 MCP 策略、沙箱、OAuth、平台抽象层重构），显示 Codex 正在进行密集的底层架构收敛。社区层面，**Windows 桌面端的稳定性**（WSL 项目切换、cua_node 启动慢、headless 卡顿）以及**安全/数据丢失事件**（#46022 大规模误删 #33624 Full Access 删除确认）成为讨论最热烈的话题。

---

## 🚀 版本发布

### rust-v0.155.0（稳定版）⭐
[#43581](https://github.com/openai/codex/pull/43581) · [#43651](https://github.com/openai/codex/pull/43651) · [#44331](https://github.com/openai/codex/pull/44331)

**新特性：**
- 🎙️ **实验性 `/voice` 对话**：支持实时语音转写与麦克风控制，需通过 `/experimental` 开关启用
- 📊 **TUI 实时状态增强**：状态行显示实时推理摘要（reasoning summary），并在新一轮成功完成后打印完成时间戳

### rust-v0.156.0-alpha.1
首个 0.156 版本 alpha 通道已开启，预示下个迭代窗口开启。

### 0.155.0-alpha 增量（.16 / .17 / .18 / .9.2）
四个 alpha 补丁在同一窗口内发布，说明 0.155 周期持续滚动修复，目前趋势已切换到 0.156 通道。

---

## 🔥 社区热点 Issues（Top 10）

| # | 标题 | 评论 | 👍 | 状态 |
|---|---|---:|---:|---|
| [#41290](https://github.com/openai/codex/issues/41290) | [Windows][WSL] 切换 Agent Environment 到 WSL 后项目创建/删除失败 | 77 | 54 | OPEN |
| [#46022](https://github.com/openai/codex/issues/46022) | **[严重数据丢失] Windows 上 Codex 误删数百 GB 跨项目文件** | 5 | 0 | OPEN |
| [#42501](https://github.com/openai/codex/issues/42501) | Windows 26.901.1978.0 UI 无法启动（cua_node 复制失败） | 20 | 3 | OPEN |
| [#17313](https://github.com/openai/codex/issues/17313) | 新版 context 余量进度条属于降级 | 19 | 46 | CLOSED |
| [#41170](https://github.com/openai/codex/issues/41170) | Windows 首次启动约 15 分钟无窗口（cua_node 解压） | 14 | 1 | OPEN |
| [#45835](https://github.com/openai/codex/issues/45835) | 反复提示 "Selected model is at capacity" | 13 | 3 | OPEN |
| [#33624](https://github.com/openai/codex/issues/33624) | **安全：批量/主目录删除需硬确认与恢复门控**（参考 GPT-5.6 Sol 事故） | 11 | 0 | OPEN |
| [#32188](https://github.com/openai/codex/issues/32188) | 后台 exec 会话结束应事件驱动唤醒，避免轮询 | 11 | 13 | OPEN |
| [#45317](https://github.com/openai/codex/issues/45317) | Chrome 浏览器集成拒绝 API-key 认证 | 9 | 0 | OPEN |
| [#26199](https://github.com/openai/codex/issues/26199) | Ctrl+Shift+V 纯文本粘贴内容重复一次 | 8 | 6 | OPEN |

**为什么重要：**

- **#41290** 是本期讨论最热 issue（77 评论 / 54 👍），反映 Codex App 在 WSL 集成上的稳定性短板，影响 Pro 用户跨平台工作流。
- **#46022 + #33624** 形成一条"数据安全"主题：前者是真实发生的大规模误删事故，后者要求即便在 Full Access 下也强制二次确认，是呼声最高的工程化诉求。
- **#42501 / #41170 / #41539** 三连击聚焦 Windows cua_node runtime：解压慢、拷贝失败、headless 启动 12-15 分钟，本质上是首次启动性能与发布管道问题。
- **#17313** 虽已 CLOSED 但因 46 个 👍 显示社区对 TUI 信息密度的强烈偏好——开发者更接受旧版的简洁进度条而非新版的复杂样式。
- **#32188** 是少数兼具高评论与高赞的**功能请求**，反映开发者希望减少"长任务轮询"导致的额外模型回合成本。

---

## 🛠️ 重要 PR 进展（Top 10）

> 本窗口 49 个 PR 几乎全部为单日内**合并关闭（CLOSED）**，标志主干密集重构。

| PR | 标题 | 关键内容 |
|---|---|---|
| [#46334](https://github.com/openai/codex/pull/46334) | 平台身份在 path/network/sandbox 配置间共享 | 在 `codex-utils-path-uri` 中引入 `Platform` 类型，含 metadata 解析、原生平台识别与路径约定映射；替换 `NetworkProxyExecutorOs` 路径 |
| [#46335](https://github.com/openai/codex/pull/46335) | MCP 策略评估与回合环境保持一致 | 使用同一份环境快照进行 MCP 策略评估与运行时发布，避免下一回合配置改变当前回合工具可用性 |
| [#46318](https://github.com/openai/codex/pull/46318) | 为模型网关添加 OAuth 凭证管理 | 导出 `GatewayAuthConfig` / `GatewayAuthManager`，支持 PKCE 浏览器登录、loopback 回调、缓存刷新；凭证存入独立加密命名空间 |
| [#46300](https://github.com/openai/codex/pull/46300) | 集中化 OAuth 登录与刷新处理 | 抽出授权 URL 工具，去重错误处理路径，**避免 token endpoint 错误回显凭证**，防止诊断信息泄露 token |
| [#46310](https://github.com/openai/codex/pull/46310) | 环境选择变更延后到下一回合 | 将"未来环境选择"与"活跃环境"分开存储，避免回合中途切换导致工具重定向或挂起 |
| [#46303](https://github.com/openai/codex/pull/46303) | 串行化发布资产上传避免 GitHub 次级限流 | 升级 `softprops/action-gh-release` 至 v3.0.3 并启用 `preserve_order` |
| [#46319](https://github.com/openai/codex/pull/46319) | 保留 exec JSON 中的 web search 行为与结果 | 显式映射 `open_page` / `find_in_page` 等动作，修复 `{"type":"other"}` 静默丢失结果问题 |
| [#46330](https://github.com/openai/codex/pull/46330) | 将重试退避迁入 `codex-async-utils` | 解耦 cloud-config 与 core 的运行时依赖，保持现有退避延迟 |
| [#46297](https://github.com/openai/codex/pull/46297) | 多智能体 V2 工具全量支持目录描述 | `multi_agent` 描述覆盖从 `spawn_agent` 扩展到 `send_message` / `fol...` |
| [#46306](https://github.com/openai/codex/pull/46306) | 将 bio policy 错误保留为独立不可重试错误 | 新增 `BioPolicy` 错误，避免流式失败被归为通用 invalid request |

> **关联补丁**：#46331 / #46302 / #46324 / #46328 / #46305 / #46309 / #46333 / #46332 共同构成"环境策略 + 沙箱 + TUI 微调"一组基础设施收敛改动。

---

## 📈 功能需求趋势

按 issue 标签聚类（过去 24h 活跃）：

| 方向 | 代表 Issue | 信号 |
|---|---|---|
| **🪟 Windows 平台稳定性** | #41290, #42501, #41170, #41539, #26199, #29172, #43776, #46299, #46351 | 占比最高（约 35%），集中在 cua_node runtime、WSL、首次启动、headless 模式 |
| **🔐 安全性 / 数据保护** | #33624, #46022, #43776 | 与近期 GPT-5.6 Sol Full Access 误删事故直接相关，强烈诉求"硬确认门控" |
| **🌐 浏览器 / Computer-Use 集成** | #45317, #44364, #45449, #46351, #45184 | Chrome 扩展认证、代理 / TUN、内置浏览器连接稳定性 |
| **📊 配额与计费** | #45835, #43811, #46254 | 多用户报告周配额异常消耗，疑似计费/用量统计 bug |
| **🤖 多智能体 / 后台任务** | #32188, #30986, #46297 (PR) | 事件驱动唤醒、project-level topic、目录描述覆盖 |
| **🧭 TUI / IDE 体验** | #17313, #30986, #46332 (PR) | 进度条样式、侧边栏话题分组、recap 高亮 |
| **🧩 模型与 Provider 兼容** | #46358 (Muse Spark 1.3 工具名 >64 字符 400), #45317 | 自定义模型/网关场景下协议边界暴露 |

---

## 🧑‍💻 开发者关注点

**1. 跨平台首发体验持续劣化（Windows 重灾区）**
> "App 启动 12-15 分钟，MainWindowHandle 一直是 0，进程却都在响应。"

多条 issue 共同指向 **cua_node runtime / MSIX 自动更新 → 同步解压 → 主进程事件循环被卡住**。开发者普遍要求：
- 启动阶段异步解压 + 占位 UI
- Release pipeline 控制 cua_node 体积（bundled Node 24 完整运行时过大）

**2. 安全护栏被认为是底线需求**
- #33624（Full Access 下仍需硬确认）与 #46022（实际数据丢失事故）形成强对照，开发者明确呼吁 Codex 提供"破坏性操作的二次确认 + 撤销窗口"，即便在 Full Access 模式下也需保留兜底。

**3. TUI 信息密度争议**
- #17313 中 46 个 👍 反对"复杂化"的 context 进度条，提示维护者在 TUI 设计上需要克制；今天合并的 [#46332](https://github.com/openai/codex/pull/46332) "Dim conversation recaps in the TUI" 也反映了同向调整。

**4. 配额/计费透明度不足**
- 多个 Pro / Plus 用户报告"周配额莫名耗尽 / 购入积分快速清零"。这不仅是工程问题，也是**信任问题**，需要 Codex 在用量分析维度给出可审计的明细（[#46323](https://github.com/openai/codex/pull/46323) 已在 turn analytics 记录 active plugin 清单，是正向信号）。

**5. 自定义模型/Provider 的协议边界**
- #46358（Muse Spark 1.3 因工具名 >64 字符返回 400）暴露 Codex Apps 在第三方网关下的协议兼容性问题；同期合并的 [#46318](https://github.com/openai/codex/pull/46318) OAuth 网关凭证管理 + [#46300](https://github.com/openai/codex/pull/46300) OAuth 集中化处理，是平台走向"可嵌入网关"的关键一步。

**6. 背景任务的事件驱动呼声**
- #32188（11 评论 / 13 👍）指出当前长命令只能通过 `write_stdin` 轮询或委托子代理监控，**额外消耗模型回合**。开发者期望 Codex 在 tool-calls 层提供"会话完成事件"原生支持。

---

*报告生成时间：2026-09-18 · 数据范围：openai/codex 仓库近 24 小时动态*

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

<think>The user wants me to generate a Chinese daily report for Gemini CLI community dynamics based on the GitHub data provided. Let me analyze the data carefully and structure the report according to the 6 sections requested.

Let me analyze the data:

1. **Releases**: There's one nightly release v0.62.0-nightly.20260918.g9450ade79 with two key changes:
   - Fix OAuth refresh token retention
   - Fix UI negative layout dimensions in border rendering

2. **Issues**: There are 50 issues updated in the past 24 hours. I need to pick the 10 most important ones. Let me look at comment counts, priority, and relevance:
   - #22323 (p1, 13 comments) - Subagent recovery after MAX_TURNS reports GOAL success
   - #19873 (p2, 9 comments) - Zero-Dependency OS Sandboxing & Post-Execution Intent Routing
   - #21409 (p1, 8 comments, 8 👍) - Generalist agent hangs
   - #22745 (p2, 7 comments) - AST-aware file reads/search/mapping
   - #21968 (p2, 6 comments) - Gemini doesn't use skills and sub-agents enough
   - #26525 (p2, 5 comments) - Auto Memory redaction
   - #26522 (p2, 4 comments) - Auto Memory retry of low-signal sessions
   - #25166 (p1, 4 comments, 3 👍) - Shell command stuck "Waiting input"
   - #22232 (p3, 4 comments) - Browser agent session takeover
   - #21983 (p1, 4 comments) - Browser subagent fails in wayland
   - #20079 (p2, 4 comments) - Symlinks not recognized as agents
   - #26523 (p2, 3 comments) - Surface invalid Auto Memory patches
   - #24246 (p2, 3 comments) - 400 error with > 128 tools

3. **PRs**: 43 PRs updated. Key ones:
   - #29386 - Fix a2a-server express.json order
   - #29385 - Vitest dependency bump
   - #29137 - npm dependencies update (77 updates)
   - #29383 - Version bump (closed)
   - #29184 - Validate git args in Windows sandbox
   - #29180 - Avoid tildeifying sibling home paths
   - #29195 - Degrade non-array history
   - #29192 - Contain legacy raw tag path
   - #29190 - Track all activate() Disposables
   - #29188 - Match include patterns exactly
   - #29186 - Correct exitCode null check
   - #29187 - Use safeLiteralReplace
   - #29181 - File-only logger for interceptor
   - #29282 - Persist oauth credentials after login
   - #29278 - Choose collision-free env expansion keys
   - #29277 - Prevent env var collision

4. **Trends in feature requests**: 
   - AST-aware file reads/search
   - OS-level sandboxing
   - Auto Memory improvements
   - Browser agent resilience
   - Subagent skill utilization
   - Task tracker improvements
   - Persistent file-based tracking

5. **Developer pain points**:
   - Agent hanging issues
   - Browser subagent failures (especially Wayland)
   - OAuth credential persistence
   - Shell command hangs
   - Tool count limits
   - Auto Memory bugs
   - Path traversal vulnerabilities

Now let me write a professional Chinese report.</think>

# Gemini CLI 社区动态日报

**日期：2026-09-18**

---

## 📌 今日速览

今日发布了 nightly 版本 `v0.62.0-nightly.20260918.g9450ade79`，核心修复围绕 **OAuth 凭据刷新** 与 **UI 渲染边界保护** 两大稳定性问题展开。社区讨论热度集中在 **子代理（subagent）行为异常** 与 **Auto Memory 系统缺陷**，多个 P1 级别的 Agent 挂起、浏览器代理在 Wayland 下的崩溃等关键 Bug 仍在持续跟进。同时，仓库密集合入了多项 **沙箱逃逸防护** 与 **路径解析安全** 类 PR，安全治理动作明显加速。

---

## 🚀 版本发布

### v0.62.0-nightly.20260918.g9450ade79

| 类型 | 内容 |
|---|---|
| 🔐 **fix(core)** | 刷新 OAuth token 时保留 refresh token，并使凭据删除操作具备幂等性（[PR #29339](https://github.com/google-gemini/gemini-cli/pull/29339) by @villahernandez-coder） |
| 🎨 **fix(ui)** | 边框渲染时对负数布局尺寸做防御性保护，防止终端异常时渲染错乱（[PR](https://github.com/google-gemini/gemini-cli/pull/) by @diegogodinezr） |

> 💡 本次 nightly 以"安全与稳定性"为主线，未引入新功能，适合升级验证。

---

## 🔥 社区热点 Issues

| # | 标题 | 优先级 | 评论数 | 为何重要 |
|---|---|---|---|---|
| [#22323](https://github.com/google-gemini/gemini-cli/issues/22323) | Subagent 在 MAX_TURNS 后被错误报告为 GOAL 成功 | P1 | 13 | 涉及 `codebase_investigator` 状态机语义错误，会掩盖 agent 中断事实，影响所有长任务可靠性 |
| [#21409](https://github.com/google-gemini/gemini-cli/issues/21409) | Generalist agent 无限挂起 | P1 | 8 (👍8) | 简单的目录创建操作会卡死超过 1 小时，社区高赞表明普遍存在 |
| [#19873](https://github.com/google-gemini/gemini-cli/issues/19873) | 利用模型 bash 亲和性：零依赖 OS 沙箱 + 执行后意图路由 | P2 | 9 | 探索 Gemini 3 模型的原生 POSIX 工具链能力，是后续安全/效率路线的核心提案 |
| [#22745](https://github.com/google-gemini/gemini-cli/issues/22745) | 评估 AST 感知文件读取/搜索/映射的价值 | P2 | 7 | 跨多个子任务（#22746）的 EPIC，探索用 tilth/glyph 替代朴素 grep 降低 token 消耗 |
| [#21968](https://github.com/google-gemini/gemini-cli/issues/21968) | Gemini 几乎不主动使用 skills 与子代理 | P2 | 6 | 影响"开箱即用"体验，agent 自驱调度能力是差异化竞争点 |
| [#25166](https://github.com/google-gemini/gemini-cli/issues/25166) | Shell 命令完成后卡在 "Waiting input" | P1 | 4 (👍3) | 影响所有交互式 CLI 场景的可用性 |
| [#21983](https://github.com/google-gemini/gemini-cli/issues/21983) | 浏览器子代理在 Wayland 下失败 | P1 | 4 | Linux 桌面用户的关键阻塞，影响 Wayland 生态 |
| [#22232](https://github.com/google-gemini/gemini-cli/issues/22232) | 浏览器代理自动会话接管与锁恢复 | P3 | 4 | `BrowserManager` 当前 fail-fast 策略过严，需要持久化模式下的弹性 |
| [#20079](https://github.com/google-gemini/gemini-cli/issues/20079) | `~/.gemini/agents/filename.md` 为符号链接时无法识别 | P2 | 4 | dotfiles 用户（如 GNU Stow 用户）的常见工作流被破坏 |
| [#24246](https://github.com/google-gemini/gemini-cli/issues/24246) | 工具数 > 128 时触发 400 错误 | P2 | 3 | 影响重度自定义工具链的用户，社区期望 agent 能智能收敛工具作用域 |

---

## 🛠️ 重要 PR 进展

| PR | 标题 | 状态 | 意义 |
|---|---|---|---|
| [#29386](https://github.com/google-gemini/gemini-cli/pull/29386) | 修复 a2a-server 中 `express.json` 注册顺序导致 `req.body` 为 undefined | OPEN | 修复 [Issue #29315](https://github.com/google-gemini/gemini-cli/issues/29315)，补齐单测覆盖 |
| [#29184](https://github.com/google-gemini/gemini-cli/pull/29184) | Windows 沙箱校验 `git` 参数，阻止 `git diff --output=` 静默写文件 | CLOSED | **高优先级安全修复**：在 Windows 默认（非 YOLO）模式下，git 只读命令可被滥用覆盖任意文件 |
| [#29192](https://github.com/google-gemini/gemini-cli/pull/29192) | 修复 `/chat delete <tag>` 中 `../` 路径穿越 | CLOSED | **高优先级安全修复**：legacy raw-tag 兜底路径未校验，可逃逸到 checkpoints 目录之外 |
| [#29186](https://github.com/google-gemini/gemini-cli/pull/29186) | 修正 `ShellTool` 启发式沙箱拒绝检测中的 `exitCode` null 比较 | CLOSED | 修复 [Issue #29043](https://github.com/google-gemini/gemini-cli/issues/29043)，解决类型 `null` vs `undefined` 的逻辑漏洞 |
| [#29187](https://github.com/google-gemini/gemini-cli/pull/29187) | LLM 提示模板占位符改用 `safeLiteralReplace` | CLOSED | 修复 [Issue #29044](https://github.com/google-gemini/gemini-cli/issues/29044)，避免 `$&` 等特殊替换语义引发 prompt 注入 |
| [#29188](https://github.com/google-gemini/gemini-cli/pull/29188) | `read-many-files` include pattern 精确匹配文件名/扩展名 | CLOSED | 修复 `String.includes()` 误判导致的二进制文件隐式请求 |
| [#29195](https://github.com/google-gemini/gemini-cli/pull/29195) | checkpoint 中 `history` 非数组时优雅降级而非崩溃 | CLOSED | 提升 `/resume` 对历史异常文件的容错 |
| [#29190](https://github.com/google-gemini/gemini-cli/pull/29190) | VSCode 扩展 `activate()` 跟踪所有 Disposable | CLOSED | 修复逗号运算符 bug，避免 deactivation 时的命令残留 |
| [#29282](https://github.com/google-gemini/gemini-cli/pull/29282) | 登录后立即持久化 OAuth 凭据 | OPEN | 改善登录体验，避免下次启动重复 Google 登录流程 |
| [#29181](https://github.com/google-gemini/gemini-cli/pull/29181) | 为拦截器校验新增文件级 logger | CLOSED | 强化 GEMINI.md "Top-level Principle" 的执行可观测性 |

> 📦 **依赖升级**：[#29137](https://github.com/google-gemini/gemini-cli/pull/29137) 一次性更新 77 个 npm 依赖（含 `simple-git`、`@modelcontextprotocol/sdk` 等核心库）；[#29385](https://github.com/google-gemini/gemini-cli/pull/29385) 将 `vscode-ide-companion` 中 vitest 从 3.2.4 升至 4.1.11。

---

## 📈 功能需求趋势

从近 24 小时更新的 50 条 Issue 中可识别出以下社区最关注的方向：

1. **🧠 Agent 智能调度** — 增强对 skills / sub-agents 的自驱使用（[#21968](https://github.com/google-gemini/gemini-cli/issues/21968)）；抑制危险操作倾向（[#22672](https://github.com/google-gemini/gemini-cli/issues/22672)）。
2. **🌳 AST 感知代码理解** — 利用 AST 工具（tilth / glyph）降低 token 消耗、提升精确度（[#22745](https://github.com/google-gemini/gemini-cli/issues/22745)、[#22746](https://github.com/google-gemini/gemini-cli/issues/22746)、[#19561](https://github.com/google-gemini/gemini-cli/issues/19561)）。
3. **🔐 零依赖 OS 沙箱** — 用 OS 原生机制替代自定义沙箱，释放模型 bash 能力（[#19873](https://github.com/google-gemini/gemini-cli/issues/19873)）。
4. **🧠 Auto Memory 治理** — 围绕 redaction、低信号重试、inbox 隔离形成系列 issue（[#26516](https://github.com/google-gemini/gemini-cli/issues/26516)、[#26522](https://github.com/google-gemini/gemini-cli/issues/26522)、[#26523](https://github.com/google-gemini/gemini-cli/issues/26523)、[#26525](https://github.com/google-gemini/gemini-cli/issues/26525)）。
5. **🌐 浏览器代理韧性** — 自动接管、Wayland 兼容、`settings.json` 覆盖生效（[#22232](https://github.com/google-gemini/gemini-cli/issues/22232)、[#22267](https://github.com/google-gemini/gemini-cli/issues/22267)、[#21983](https://github.com/google-gemini/gemini-cli/issues/21983)）。
6. **📝 持久化任务追踪** — 用文件系统替代 `WriteToDo` 的 in-context 方案（[#18836](https://github.com/google-gemini/gemini-cli/issues/18836)、[#21000](https://github.com/google-gemini/gemini-cli/issues/21000)）。
7. **🖥️ 终端 UI 性能** — resize 时无闪烁渲染（[#21924](https://github.com/google-gemini/gemini-cli/issues/21924)）。

---

## 💬 开发者关注点（高频痛点）

- **🚨 Agent 无故挂起**：generalist agent 在简单任务上无限等待；shell 命令完成后仍显示 "Waiting input"。这损害了 CLI 最基本的"立即可用"承诺。
- **🧩 子代理状态失真**：`codebase_investigator` 触发 MAX_TURNS 后返回 `status: "success" / "GOAL"`，掩盖真实中断原因，影响上层调度决策（[#22323](https://github.com/google-gemini/gemini-cli/issues/22323)）。
- **🔒 安全热点集中爆发**：Windows git 参数校验、checkpoint 路径穿越、LLM prompt 注入三类漏洞同日合入 PR，说明团队正在系统性收紧攻击面。
- **🪟 Linux/Wayland 兼容性**：浏览器子代理在 Wayland 下彻底失败，与 VSCode IDE Companion 的多项修复（[#29190](https://github.com/google-gemini/gemini-cli/pull/29190)）共同反映 Linux 桌面用户的体验短板。
- **🧰 工具规模上限**：>128 工具即触发 400 错误，复杂自定义工作流受限。
- **🔁 OAuth 体验**：登录流程不持久化、refresh token 在刷新时被丢失等问题仍困扰日常使用。
- **📂 符号链接/配置覆盖**：dotfiles 用户与 `settings.json` 高级配置被静默忽略，降低高级用户的工作流可移植性。

---

*日报基于 GitHub 数据自动生成，覆盖周期：2026-09-17 ~ 2026-09-18（UTC）。*

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

<think>The user wants me to generate a Chinese daily report for GitHub Copilot CLI based on the provided data. Let me analyze the data carefully:

1. **Latest Release**: v1.0.86 (2026-09-17)
   - Custom agents can opt into repository instruction files
   - Session resume preserves market when no overrides

2. **Issues**: 50 updated, showing top 30 by comments. I need to pick 10 most noteworthy.

3. **PRs**: 0 new in past 24 hours - so I'll skip this section or note it.

Let me craft the report in Chinese with the required sections.

Key issues to highlight (most impactful):
- #4870: Figma MCP server failure (high engagement, 9 likes, 5 comments) - critical MCP integration issue
- #4095: Windows plugin update Access Denied (22 likes, 3 comments) - highly upvoted
- #4753: MCP server connections cancelled on session resume (regression)
- #4655: Custom agents not discovered under plugins (closed)
- #3304: HTTP/2 session destroyed errors
- #3380: Add --disable-repo-mcps flag
- #3264: Symlink behavior documentation
- #4606: Google Workspace MCP OAuth issue
- #4703: Per-agent provider selection
- #4892: MCP servers re-enumeration on hourly cycle

Let me write a professional, technical Chinese report.</think>

# GitHub Copilot CLI 社区动态日报

**日期：2026-09-18**

---

## 1. 今日速览

昨日（9-17）发布的 **v1.0.86** 带来两项实用改进：自定义 Agent 可通过 frontmatter 声明 `include-custom-instructions: true` 来加载仓库级指令文件，同时会话恢复时对 plugin / discovery / working-directory 的隐式 market 被正确保留。社区焦点依然集中在 **MCP 生态与多 Agent 工作流** —— Figma、GitHub MCP、Azure DevOps、Google Workspace 等远程服务器的兼容性问题集中暴露，而 Windows 平台插件更新失败（22 👍）仍是高优痛点。

---

## 2. 版本发布

### v1.0.86（2026-09-17）

| 改动 | 说明 |
|---|---|
| Custom agents 加载仓库指令文件 | 在 frontmatter 中设置 `include-custom-instructions: true`，Agent 即可读取 `AGENTS.md`、`copilot-instructions.md`、`CLAUDE.md` |
| 会话恢复保持 market 一致 | 在没有显式 `--plugin-dir` / discovery / working-directory 覆盖的情况下恢复活动会话，可保留原有的市场配置 |

> 关联 Issue：#4655（已在修复路径中）、#3264（符号链接文档化）

---

## 3. 社区热点 Issues（精选 10 条）

| # | Issue | 状态 | 👍 | 评论 | 关注理由 |
|---|---|---|---|---|---|
| **#4870** | [MCP: Figma 远程服务器启动失败，-32601 被当作致命错误](https://github.com/github/copilot-cli/issues/4870) | OPEN | 9 | 5 | Figma 官方 MCP 服务（mcp.figma.com）在 VS Code 中可工作，但在 CLI 中 `-32601 server/discover` 被当作致命错误，导致工具无法注册。**第三方 MCP 兼容性的代表性案例**。 |
| **#4095** | [Windows: 插件更新 "Access is denied (os error 5)"](https://github.com/github/copilot-cli/issues/4095) | OPEN | **22** | 3 | **昨日点赞最高**，VS Code 运行期间 Copilot 扩展持有 watcher 句柄，导致 CLI / 桌面端无法更新插件。影响范围广，长期未修复。 |
| **#4753** | [v1.0.83 会话恢复时取消 stdio MCP 连接，1s 超时（v1.0.82 为 16s）](https://github.com/github/copilot-cli/issues/4753) | CLOSED | 2 | 4 | **典型回归问题**：session resume 流程中的 MCP 握手超时被压缩 16 倍，导致静默丢失工具。提醒团队注意非交互路径上的超时配置。 |
| **#4655** | [Agent Plugins 1.0：`com.github.copilot/agents` 下自定义 agent 未被发现](https://github.com/github/copilot-cli/issues/4655) | CLOSED | 0 | 4 | 插件规范 1.0 中 GitHub Copilot 专属 agent 应被识别但未生效，规范与实现的协调问题，v1.0.86 的 `include-custom-instructions` 是同方向演进。 |
| **#3304** | [[ERR_HTTP2_INVALID_SESSION] 反复触发瞬态重试](https://github.com/github/copilot-cli/issues/3304) | OPEN | 0 | 4 | 长推理响应中途频繁出现 HTTP/2 会话被销毁，影响体验。属于**网络栈层的稳健性问题**。 |
| **#3380** | [请求新增 `--disable-repo-mcps` 标志以跳过 `.mcp.json`](https://github.com/github/copilot-cli/issues/3380) | OPEN | 1 | 3 | 当前只能按名字粒度禁用 MCP，无法整批跳过仓库自带的 MCP 定义。在 CI / 临时调试场景需求强烈。 |
| **#3264** | [文档化 Windows 等平台的 `.copilot` 符号链接行为](https://github.com/github/copilot-cli/issues/3264) | OPEN | 1 | 2 | 关注"配置即代码"的开发者希望用符号链接复用指令 / skills，但官方缺乏行为说明。 |
| **#4606** | [Google Workspace MCP OAuth 因 issuer 末尾斜杠不匹配失败](https://github.com/github/copilot-cli/issues/4606) | OPEN | 1 | 2 | Google 官方 MCP 端点在 `accounts.google.com` 末尾斜杠上的 OAuth 元数据匹配失败，浏览器授权流无法启动。**OIDC 严格解析的副作用**。 |
| **#4703** | [自定义 Agent 需要 per-agent provider 选型](https://github.com/github/copilot-cli/issues/4703) | OPEN | 0 | 1 | 现有 `COPILOT_PROVIDER_BASE_URL` 是进程级，同一会话中两个 Agent 无法指向不同端点，**多模型混部**需求凸显。 |
| **#4892** | [MCP 服务器每小时在会话内被重新枚举](https://github.com/github/copilot-cli/issues/4892) | OPEN | 0 | 1 | 报告者修正了初版数据（移除了进程泄漏 4.3GB 的不准确陈述），但 reload + MCP re-enumeration 行为经复测仍然存在，**会话内副作用值得社区持续关注**。 |

---

## 4. 重要 PR 进展

过去 24 小时 **无新 PR 更新**。这与上一阶段多个 MCP 回归（#4753）已被合入的现象吻合，说明团队当前可能在集中处理 Issue triage 与回归修复，未发起新的功能 PR。

---

## 5. 功能需求趋势

按 Issue 标签统计，社区关注度排序如下：

| 方向 | 代表 Issue | 趋势信号 |
|---|---|---|
| **MCP 兼容性与发现机制** | #4870、#4753、#4606、#4892、#4886、#3380 | **最热**：远程 MCP（HTTP/SSE）的握手错误码、OAuth 元数据、session 生命周期、re-enumeration 都暴露出 CLI 与 MCP 规范协调尚不充分。 |
| **多 Agent / 多 Provider 工作流** | #4703、#4655、#4839 | 单一 provider + 单一 agent 的范式已不够用，社区要求 per-agent provider、自定义 agent 跨插件复用。 |
| **平台差异（Windows / FreeBSD）** | #4095、#3264、#3382 | Windows 文件句柄、符号链接、FreeBSD 支持等 OS 级问题积压，跨平台一致性成为长期任务。 |
| **会话稳定性 & 可靠性** | #3304、#3553、#4319、#3647、#4500 | HTTP/2 重试、session 数据丢失、plan mode 行为不可预测 —— "**会话可靠性**" 是 v1.0 系列反复出现的关键词。 |
| **终端交互细节** | #4447、#3605、#4060、#4015、#2616 | Backspace 词删除、复制截断空格、主题不持久、原生通知等"小而重要"的 UX 问题。 |
| **模型调度与"auto"模式** | #4445、#4459、#3899、#4500 | "auto" 在 reasoning level 不可用时仍会被选用，导致崩溃；BYOK 下 autopilot 重序列化破坏 prompt cache。 |

---

## 6. 开发者关注点

1. **MCP 是核心战场**：半数高优 Issue 与 MCP 相关，远程 MCP（HTTP 传输）的握手协议、OAuth issuer 严格匹配、session 边界——任何一环失守都会让整个工具集静默失效。
2. **Windows 体验是最大单点**：#4095 22 赞说明该问题影响面远超单一用户，跨进程文件句柄竞争需要在 CLI 端做显式降级或重试。
3. **回归治理**：v1.0.83 → v1.0.86 之间出现了 #4753（MCP 超时）和 #3304（HTTP/2）等回归，建议团队在 release notes 中增加"行为变更"区块，方便下游识别。
4. **"auto" 模型选择缺乏兜底**：#4445、#4459 显示 reasoning level 不可用时 CLI 直接崩溃，**容错与回退策略**应优先于新增模型。
5. **配置 / 文档透明度**：符号链接行为（#3264）、Azure DevOps 下 GitHub MCP 静默禁用（#1505 已关闭）、plan mode 行为漂移（#3647 已关闭）—— 用户希望官方文档能同步表达这些"非显然默认"。

---

*日报基于 github.com/github/copilot-cli 过去 24 小时数据自动整理；如需进一步追溯某条 Issue / PR，可点击对应 GitHub 链接。*

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

<think>The user wants me to generate a daily report for the Kimi Code CLI community based on GitHub data from 2026-09-18. Let me analyze the data:

1. **Releases**: No new releases in the past 24 hours
2. **Issues**: 13 issues updated, mostly closed (11 closed, 2 open)
3. **Pull Requests**: 1 new PR (#2651 - fix: stop repeated tool-call loops)

Let me organize this into a structured Chinese daily report.

The most important dynamic is:
- All 13 issues were updated yesterday, with 11 closed and 2 still open
- The 2 open issues are #2649 (Kimi Desktop memory feature not writing config) and #2650 (OAuth token fetch timeout for subagent)
- PR #2651 addresses a bug about repeated tool-call loops
- No new releases

For the Issues section, I need to pick the 10 most noteworthy:
- #1234: proxy/aiohttp issue (closed, 14 comments, 2 likes) - most discussed
- #1107: install script bug (closed, 6 comments)
- #1301: ghostty theme issue (closed)
- #1296: MCP disconnected error (closed)
- #1291: Markdown crash (closed)
- #734: Google GenAI provider issue (closed)
- #2649: OPEN - Kimi Desktop memory config issue
- #1339: @ mention showing .git/objects (closed)
- #1459: Kimi can't configure itself (closed)
- #1342: OSC terminal notifications (closed)
- #1302: web UI overlap (closed)
- #1480: flow:skill interrupt (closed)
- #2650: OPEN - OAuth token timeout

I should pick 10 of these. Let me prioritize:
1. #1234 - most comments and likes (proxy issue)
2. #2649 - open, fresh, Kimi Desktop feature
3. #2650 - open, fresh, auth/subagent issue
4. #1107 - install script bug (affects onboarding)
5. #1296 - MCP intermittent error (platform-specific)
6. #1291 - Markdown crash in stdin
7. #734 - Google GenAI provider issue (cross-provider support)
8. #1459 - MCP auto-config issue (developer pain point)
9. #1342 - OSC terminal notifications (feature request)
10. #1480 - flow:skill interrupt (interaction mode UX)

For PRs, there's only 1 (#2651), but the user asks for 10 important PRs. Since there's only 1, I'll only mention that one.

For feature request trends:
- MCP integration/configuration (#1459, #734, #1296)
- Cross-platform compatibility (Windows, macOS, Linux)
- Terminal/UI experience (OSC notifications, theme, file mentions)
- Auth stability (#2650)
- Subagent reliability
- Desktop app configuration (#2649)

Developer pain points:
- Proxy/network configuration (#1234)
- Installation issues (#1107)
- MCP stability (#1296, #1459)
- Auth timing out (#2650)
- File reference leakage to .git internals (#1339)

Let me write this in Chinese now.</think>

# 📊 Kimi Code CLI 社区动态日报
**日期：2026-09-18**

---

## 🎯 今日速览

昨日仓库集中关闭了 11 个历史 Issue，涵盖代理配置、安装脚本、MCP 稳定性、Markdown 解析等多个长期遗留 Bug；同时仍有 2 个 9 月 17 日新开的 Issue（#2649、#2650）处于 Open 状态，分别指向 Kimi Desktop 记忆功能配置不写入和子代理 OAuth 超时两个新问题。此外，PR #2651 针对重复工具调用循环问题提交了硬停止修复，建议关注其合入进度。

---

## 🚀 版本发布

过去 24 小时内无新版本发布。

---

## 🔥 社区热点 Issues（Top 10）

| # | 标题 | 状态 | 关注度 | 链接 |
|---|------|------|--------|------|
| #1234 | 环境变量代理因 aiohttp 默认配置在 `kimi login` 时失效 | ✅ CLOSED | 💬14 👍2 | [链接](https://github.com/MoonshotAI/kimi-cli/issues/1234) |
| #1107 | 安装脚本在缺少 `uv` 时存在 Bug | ✅ CLOSED | 💬6 👍0 | [链接](https://github.com/MoonshotAI/kimi-cli/issues/1107) |
| #2649 | **[Bug][Kimi Desktop]** "梦境记忆"开关拨动后不写入配置 | 🟢 OPEN | 💬2 👍0 | [链接](https://github.com/MoonshotAI/kimi-cli/issues/2649) |
| #2650 | **[Bug]** 子代理启动间歇性失败：OAuth 获取 token 超时 | 🟢 OPEN | 💬0 👍0 | [链接](https://github.com/MoonshotAI/kimi-cli/issues/2650) |
| #1296 | MCP 断开时出现间歇性错误 | ✅ CLOSED | 💬2 👍0 | [链接](https://github.com/MoonshotAI/kimi-cli/issues/1296) |
| #1291 | stdin 中的非法 Markdown 格式导致 Kimi 崩溃 | ✅ CLOSED | 💬2 👍0 | [链接](https://github.com/MoonshotAI/kimi-cli/issues/1291) |
| #734 | Google GenAI 提供商因 `extra_forbidden` 失败（含 `$schema`） | ✅ CLOSED | 💬2 👍0 | [链接](https://github.com/MoonshotAI/kimi-cli/issues/734) |
| #1459 | Kimi 不会配置自己（无法正确写入 MCP 配置） | ✅ CLOSED | 💬1 👍0 | [链接](https://github.com/MoonshotAI/kimi-cli/issues/1459) |
| #1342 | 任务完成时缺少 OSC 9/777 终端通知 | ✅ CLOSED | 💬1 👍0 | [链接](https://github.com/MoonshotAI/kimi-cli/issues/1342) |
| #1480 | 交互模式下 `flow:skill` 流程无法中断/选择 | ✅ CLOSED | 💬0 👍1 | [链接](https://github.com/MoonshotAI/kimi-cli/issues/1480) |

**重点解读：**
- **#1234** 是昨日热度最高的 Issue（14 条评论 + 2 赞），反映出开发者在受限网络环境下使用 CLI 登录的真实困境，修复意义重大。
- **#2649** 涉及 Kimi Desktop 3.2.9 的「梦境记忆」功能，疑似服务端功能门控未开放，是目前唯一未解决的桌面端功能性问题。
- **#2650** 反映子代理启动链路对 auth.kimi.ai 的稳定性高度依赖，属于基础设施层面的隐患。
- **#1342** 提议增加 OSC 9/777 终端通知，便于 cmux/iTerm2/kitty 等多路复用器在任务完成时推送桌面提醒，是一条呼声较高的体验增强需求。

---

## 🛠️ 重要 PR 进展

| # | 标题 | 作者 | 状态 | 链接 |
|---|------|------|------|------|
| #2651 | **fix: stop repeated tool-call loops** — 将重复工具调用的「软提示」改为到达阈值后的「硬停止」，避免再执行一次重复调用 | @Oxygen56 | 🟢 OPEN | [链接](https://github.com/MoonshotAI/kimi-cli/pull/2651) |

> 注：过去 24 小时仅有 1 个新 PR 活跃，建议持续跟踪其 CI 与 Review 进度。

---

## 📈 功能需求趋势

从近 24 小时更新的 Issue 归纳，社区关注的功能方向集中在以下几类：

1. **MCP 生态完善**（#1459、#734、#1296）
   - 期望 Kimi 能自动正确写入 MCP 配置；
   - 跨提供商（Google GenAI、Exa MCP）的兼容性；
   - MCP 断开时的容错与重连。

2. **跨平台一致性体验**（#1301、#1302、#1339）
   - Ghostty 浅色主题下的视觉区分度；
   - Web UI 中项目路径与 diff 视图的重叠；
   - `@` 文件引用泄漏 `.git/objects/` 内部文件。

3. **桌面端与 CLI 的功能对齐**（#2649）
   - Kimi Desktop 的「梦境记忆」开关需要写回 `daimon/config.json`；
   - 推测存在服务端功能门控问题。

4. **终端通知与多路复用器协同**（#1342）
   - 希望 Kimi 在任务完成时发送 OSC 9/777 转义序列；
   - 适配 cmux、iTerm2、kitty、WezTerm 等。

5. **稳定性与基础设施韧性**（#2650、#1291）
   - auth.kimi.ai 连接超时导致子代理启动失败；
   - stdin 输入非法 Markdown 时崩溃。

---

## 💡 开发者关注点 / 痛点

综合所有 Issue 的反馈，开发者社区的**高频痛点**可以归纳为以下五条：

1. **网络与代理配置不稳定**：#1234 中 aiohttp 默认信任环境变量的问题，导致企业内网/代理用户无法登录，是呼声最高的痛点。

2. **安装与冷启动体验**：#1107 暴露的安装脚本缺陷，会让全新用户直接卡在第一步。

3. **MCP 配置与稳定性**：开发者希望 Kimi 能像 Claude Code 一样自动写入 MCP 配置，且连接断开时不要抛出难以理解的错误（#1459、#1296）。

4. **身份认证链路脆弱**：#2650 揭示子代理对 auth.kimi.ai 强依赖，单点抖动即影响整体可用性，开发者建议增加本地缓存与重试。

5. **交互模式可控性**：#1480 显示在 `flow:skill` 执行过程中无法中断或选择，意味着长任务下用户缺乏「逃生通道」，影响实操信心。

---

> 📌 **编辑建议**：建议维护者优先关注 #2649（Desktop 体验）、#2650（稳定性）和 PR #2651（重复调用循环），这三处代表了过去 24 小时内最值得交付给社区的信号。

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

<think>Let me analyze the GitHub data for anomalyco/opencode on 2026-09-18 and generate a comprehensive Chinese daily report.

Key observations:
1. No new releases in the past 24 hours
2. 50 issues updated, showing top 30 by comments
3. 50 PRs updated, showing top 20 by comments
4. The project shows a "v2.0.7" version reference in issue #49658, suggesting a major version
5. GitHub star count updated to 208K in PR #49654/#49656
6. Many closed issues and PRs from bot @opencode-agent[bot]

Top issues by comments:
1. #37012 - Keep legacy layout option (48 comments, 68 👍) - HIGHLY UPVOTED
2. #49580 - Free tier Muse Spark 1.3 Free fails (36 comments)
3. #35265 - ResourceExhausted error (10 comments)
4. #31972 - New Layout Plan/Build can't switch (10 comments, 8 👍)
5. #25487 - Stream parsing error with LiteLLM (8 comments)
6. #37101 - Stuck in Plan Mode (5 comments)
7. #31347 - Too much CPU usage (5 comments, 9 👍)
8. #31831 - 185% CPU/500MB RAM (5 comments, 4 👍)
9. #27647 - Paste with special chars (5 comments)
10. #35831 - i18n / Locale support (5 comments)
11. #33934 - gpt-5.5-fast xhigh fails (5 comments)
12. #37629 - File-specific skill auto-loading (4 comments)
13. #37774 - Improve pre-built musl packages (3 comments)
14. #37738 - Pause while thinking/building (3 comments)
15. #37111 - opencode web hangs (3 comments, 1 👍)
16. #33332 - Configurable worktree creation (3 comments, 4 👍)
17. #37609 - Plan/Build hangs after long reasoning (3 comments)
18. #36385 - Build process stops (3 comments)
19. #37597 - Node test subprocess memory exhaustion (3 comments)
20. #49543 - Project-scoped session switcher (3 comments)

Top PRs:
1. #49647 - Stream large attachments with progress
2. #49667 - Test codemode isolate OpenAPI fixtures
3. #49665 - TUI session history rail
4. #32370 - Linux clipboard selection config
5. #49668 - Create local sessions in project root
6. #49666 - Move provider policies into settings
7. #49657 - Support opencode://new deep links
8. #49662 - Update stale protocol fixtures
9. #49661 - Replace theme-file contexts with code-owned surfaces
10. #49655 - Rename surface tokens to raised
11. #48638 - Harden session diffs/snapshots/write paths
12. #49656 - Update GitHub star fallback (208K!)
13. #49654 - Update GitHub star fallback
14. #49651 - Keep unified rate-limit window utilization
15. #49650 - Preview Code Mode child calls
16. #48689 - Include reasoning tokens in throughput
17. #49632 - Add opencode-agent-memory plugin docs
18. #49646 - /btw side question command
19. #49643 - Add OpenCode to VS Code activity bar
20. #49642 - Show SSH auth prompt only when required

Important themes:
- Legacy layout vs new layout debate (#37012 with 68 👍 - the highest upvoted)
- Performance issues (CPU usage, RAM)
- Plan/Build mode issues (multiple related issues)
- Session management (session list, history rail)
- i18n support
- IDE integration (VS Code activity bar)
- Model provider compatibility (LiteLLM, gpt-5.5, Muse Spark)
- MCP server integration issues
- Resource exhaustion / rate limiting

The project reached 208K stars - this is a major milestone!

Now let me write a professional Chinese tech report.</think>

# OpenCode 社区动态日报
**日期：2026-09-18**

---

## 📌 今日速览

OpenCode 仓库今日完成了 GitHub Star 里程碑更新——**从 195K 跃升至 208K**，标志着项目进入新的增长阶段（[#49654](https://github.com/anomalyco/opencode/pull/49654)）。开发活动依旧密集，重点集中在 **TUI 会话导航改造**（左侧历史栏）、**Provider 设置重构**、**主题 Surface Token 重命名**以及 **v2.0.7 启动故障修复**。社区方面，关于"保留旧版布局"的争论持续发酵（[#37012](https://github.com/anomalyco/opencode/issues/37012) 累计 68 👍、48 评论，仍是呼声最高的诉求）。

---

## 🚀 版本发布

过去 24 小时无新版本发布。最近的活跃版本为 **v2.0.7**（Issue #49658 提及），但用户在 macOS ARM64 + Bun 安装时遇到 `Starting background server... UnknownError` 启动失败问题，亟待修复。

---

## 🔥 社区热点 Issues

| # | Issue | 热度 | 为何值得关注 |
|---|-------|------|-------------|
| 1 | [#37012](https://github.com/anomalyco/opencode/issues/37012) **保留旧版布局选项** | 48 评论 / 👍68 | **全仓呼声最高**的功能请求，社区强烈要求在新版布局之外保留旧布局的可访问性与 Workspace 支持 |
| 2 | [#49580](https://github.com/anomalyco/opencode/issues/49580) **Muse Spark 1.3 Free 模型报错** | 36 评论 | 跨前端（MonoCode）+ OpenCode 后端时免费模型 55 秒后失败，反映多客户端兼容性问题 |
| 3 | [#31972](https://github.com/anomalyco/opencode/issues/31972) **新布局下 Plan/Build 无法切换** | 10 评论 / 👍8 | UI 切换与 `Ctrl+.` 快捷键均失效，新布局引入的回归 Bug |
| 4 | [#37101](https://github.com/anomalyco/opencode/issues/37101) **卡在 Plan 模式无法切换 Build** | 5 评论 / 👍2 | 同一类问题的另一报告，mode toggle 缺失，聊天命令也无效 |
| 5 | [#31347](https://github.com/anomalyco/opencode/issues/31347) **CPU 占用过高** | 5 评论 / 👍9 | 多个用户报告的共性性能问题，反响正面（👍>评论数） |
| 6 | [#31831](https://github.com/anomalyco/opencode/issues/31831) **空闲时仍占 185% CPU / 500MB+ RAM** | 5 评论 / 👍4 | macOS 27 + Apple Silicon 平台上的硬性数据样本（10 分钟监控） |
| 7 | [#33934](https://github.com/anomalyco/opencode/issues/33934) **GPT-5.5-fast xhigh reasoning part 缺失** | 5 评论 | Windows Desktop + Codex OAuth 场景，影响最新旗舰模型体验 |
| 8 | [#25487](https://github.com/anomalyco/opencode/issues/25487) **LiteLLM 代理流式解析失败** | 8 评论 | 第二个 LLM round-trip 后报 `text part not found`，影响自部署用户 |
| 9 | [#35831](https://github.com/anomalyco/opencode/issues/35831) **i18n / 多语言支持** | 5 评论 | 项目已具备 i18n 基础设施，社区希望加速补齐葡萄牙语等翻译 |
| 10 | [#37738](https://github.com/anomalyco/opencode/issues/37738) **思考/构建过程中可暂停** | 3 评论 | 用户期望在模型生成中途插入微调指令，提升人机协作体验 |

**补充关注**：[#35265](https://github.com/anomalyco/opencode/issues/35265)（Worker 请求限流）、[#37111](https://github.com/anomalyco/opencode/issues/37111)（Linux 下 `opencode web` 主线程死锁）、[#37609](https://github.com/anomalyco/opencode/issues/37609)（长推理后 Plan/Build 挂起）—— 均为高严重度的稳定性问题。

---

## 🛠️ 重要 PR 进展

| # | PR | 说明 |
|---|----|----|
| 1 | [#49647](https://github.com/anomalyco/opencode/pull/49647) `feat(app): 大附件流式上传 + 进度提示` | 拖入大文件（zip/视频/数据集）不再卡死 Electron 窗口，已合并 |
| 2 | [#49665](https://github.com/anomalyco/opencode/pull/49665) `feat(tui): 添加 Session 历史侧栏` | TUI 左侧固定可见的会话历史栏，按 Today/Yesterday 分组，缓解会话过多难以管理的问题（回应 #41064） |
| 3 | [#49666](https://github.com/anomalyco/opencode/pull/49666) `refactor(core): 将 provider 策略移入 settings` | 把 compaction / transport 收纳进 provider/model settings，简化配置面 |
| 4 | [#49668](https://github.com/anomalyco/opencode/pull/49668) `fix(app): 在项目根目录创建本地会话` | 解决 Local 会话路径漂移到 worktree 的问题 |
| 5 | [#49661](https://github.com/anomalyco/opencode/pull/49661) `refactor(theme): 用代码内置 surface 替代 theme file context` | 主题文件不再支持 `@context:elevated/overlay`，统一改用 `theme.surface(name)` API |
| 6 | [#49643](https://github.com/anomalyco/opencode/pull/49643) `feat(vscode): 在 Activity Bar 添加 OpenCode` | VS Code 侧边栏新增 OpenCode 入口，可在外部编辑器中打开（关闭 #31997） |
| 7 | [#49646](https://github.com/anomalyco/opencode/pull/49646) `feat(tui): 添加 /btw 旁问命令` | 内置 `/btw <question>` TUI 命令，复用当前会话上下文进行侧问 |
| 8 | [#49651](https://github.com/anomalyco/opencode/pull/49651) `fix(llm): 保留统一限流窗口利用率` | 修正 Anthropic 订阅账户的 `anthropic-ratelimit-*-remaining` header 匹配逻辑 |
| 9 | [#48638](https://github.com/anomalyco/opencode/pull/48638) `fix: 加固 session diff/快照/write 路径` | 修复 `SessionSummary.summarize` 在并行 agent 下导致 worker-thread 阻塞的问题 |
| 10 | [#48689](https://github.com/anomalyco/opencode/pull/48689) `fix(tui): 吞吐指标包含 reasoning tokens` | tok/s 现包含推理 token，匹配会话的真实使用计量 |
| ★ | [#49654](https://github.com/anomalyco/opencode/pull/49654) / [#49656](https://github.com/anomalyco/opencode/pull/49656) `chore(stats): 更新 GitHub Star fallback` | 将官网 Star 数从 **195K → 208K** |

---

## 📈 功能需求趋势

按议题聚集方向提炼（基于过去 24 小时更新 + 关联 Issue）：

1. **🧭 会话导航与可视化（最高频）**
   - 会话列表与切换器缺失/不完整（#41855、#49543、#43056、#41064）
   - 长会话的可视化导航（#37699 滚动条消息标记）
   - 直接被 [#49665](https://github.com/anomalyco/opencode/pull/49665) 的 TUI 历史侧栏 PR 回应

2. **🎨 布局与 UI 体验**
   - 保留旧版布局选项（#37012，68 👍）
   - 新布局 Plan/Build 切换失效（#31972、#37101）
   - 主题 Surface 重构（#49655、#49661）

3. **⚡ 性能与稳定性**
   - CPU/内存占用过高（#31347、#31831、#37597）
   - 长推理挂起（#37609）
   - Worker 死锁与流式解析（#37111、#25487）

4. **🧩 IDE / 编辑器生态**
   - VS Code Activity Bar 集成（[#49643](https://github.com/anomalyco/opencode/pull/49643) 已落地）
   - SSH 远程工作流（#49642）
   - Desktop 多窗口隔离（#37078）

5. **🤖 模型与 Provider 兼容**
   - GPT-5.5 / Codex OAuth 集成（#33934）
   - LiteLLM / OpenAI 兼容代理（#25487）
   - 统一限流窗口处理（[#49651](https://github.com/anomalyco/opencode/pull/49651) 已修）
   - 跨前端后端鉴权（#49580）

6. **🌐 国际化与可访问性**
   - i18n 扩展（#35831）

---

## 👨‍💻 开发者关注点

综合社区反馈，开发者最迫切的诉求集中在以下五个维度：

- **🔁 旧版布局回归选项**：68 👍 的 #37012 显示，新版 UI 让大量用户失去快速触达常用功能的能力。团队需正视"渐进式迁移"而非"强制升级"的产品取舍。

- **📂 会话管理是头号 UX 痛点**：从 `opencode session list` 返回空（#41855）、到缺少可视化切换器（#49543/#43056），再到希望"像 Codex 一样左侧竖列"（#41064），会话列表已成为最被反复提及的体验瓶颈。TUI 历史栏 PR #49665 的提交说明直接承认了这一点。

- **⏸️ 人机协作的中断能力**：#37738（暂停思考/构建）和 #37699（滚动条消息标记）反映出用户希望在长任务流中保持更细颗粒度的控制权，而不是"等模型跑完才能介入"。

- **🪟 多窗口/多项目的隔离可靠性**：#37078（Desktop 多窗口输出串扰）和 #37111（`opencode web` 多项目 attach 死锁）说明在真实工作流中，多实例并发的状态隔离仍有缺陷。

- **🛠️ Provider 与模型适配的碎片化**：LiteLLM、Codex OAuth、Muse Spark、Anthropic 订阅账户的 rate-limit header——每一个新模型/新代理的接入都暴露了适配层的脆弱性。社区期望更稳健的兼容层与更清晰的错误信息。

---

> 📊 **数据观察**：今日 closed 状态的 Issues 占多数（30 条中 ~21 条已关闭），表明维护团队正在加速清理积压；`@opencode-agent[bot]` 提交的多项 contributor PR（协议测试 fixture、Code Mode 子调用预览、SSH 鉴权提示等）显示自动化贡献流水线已成为日常开发的重要一环。

</details>

<details>
<summary><strong>jcode</strong> — <a href="https://github.com/1jehuang/jcode">1jehuang/jcode</a></summary>

<think>The user wants me to generate a Chinese daily report for the jcode community based on GitHub data from 2026-09-18. Let me analyze the data carefully.

The data shows:
- No new releases in past 24 hours
- 5 issues updated
- 8 PRs updated

Let me organize this into the requested format:

1. 今日速览 - Summary
2. 版本发布 - None, skip
3. 社区热点 Issues - Top 10 (only 5 available, so list all 5)
4. 重要 PR 进展 - Top 10 (8 available, list all 8)
5. 功能需求趋势 - Analyze patterns
6. 开发者关注点 - Pain points

Let me analyze the issues:
- #1294: macOS terminal-launch Clippy fails on unnecessary tail return - small lint fix
- #1292: JCODE_WAKE_MODE missing from config-cache fingerprint - config bug
- #1291: Windows bash tool shell hardcoded - platform limitation
- #1289: Grok Build /model switch serialization error - provider bug
- #1287: Saved session label lost after resume - session management bug

PRs:
- #1295: Fix for #1294 - macOS tail expression
- #1293: Fix for #1292 - wake mode in fingerprint
- #1280: pre_request transform hook - new feature
- #1281: Recurring schedules - new feature
- #1282: Compaction lifecycle hooks - new feature
- #1288: Fix provider profile naming
- #1290: Fix Grok Build SetRoute serialization
- #1279: Pre-tool input transformers

Trends I can identify:
- Platform compatibility (macOS, Windows)
- Configuration management
- Provider/Model integration (Grok, OpenRouter)
- Session management
- Extensibility hooks (transformers, lifecycle, schedules)

Let me write a clean, professional Chinese report.</think>

# jcode 社区动态日报
**日期：2026-09-18**

---

## 📌 今日速览

今日社区活跃度集中在 **配置与缓存一致性**、**跨平台兼容性** 以及 **Provider 集成修复** 三个方向。@ianalitis 一次性提交了两个"一行级"精准修复 PR（#1293、#1295），分别解决了 config-cache fingerprint 遗漏 `JCODE_WAKE_MODE` 和 macOS Clippy 告警两个低风险但影响构建的小问题；同时 @SK-DEV-AI 推动的三项扩展性 PR（#1280、#1281、#1282）让 jcode 在 hooks / 调度 / 上下文压缩层面进一步"可编程化"。Grok Build 切换模型失败、Windows bash 工具硬编码 cmd.exe 等问题也都在 24 小时内给出了对应的修复方案。

---

## 🚀 版本发布

无新版本发布。

---

## 🔥 社区热点 Issues

| # | Issue | 关注理由 |
|---|-------|----------|
| [#1291](https://github.com/1jehuang/jcode/issues/1291) | Windows: bash tool shell 硬编码为 `cmd.exe /D /S /C` | 直接影响 Windows 用户的 POSIX 工具链工作流，是平台可用性的关键卡点；当前 shell 在编译期固化、且没有 config/env 兜底，是典型的"灵活性缺失"型痛点。 |
| [#1289](https://github.com/1jehuang/jcode/issues/1289) | Grok Build `/model` 切换失败：`RuntimeKey::Other` 无法序列化 | 直接阻断 Grok Build 用户切换模型；问题出在客户端序列化层而非服务端，说明 ACP provider 集成尚未完全覆盖 Grok Build 路径，社区对此类"能登录但不能用"的问题敏感度高。 |
| [#1287](https://github.com/1jehuang/jcode/issues/1287) | `/save` 标签在 resume + 新 prompt 后丢失 | 会话元数据索引（SQLite）与 JSON 状态文件存在数据源不一致，影响长期会话管理与审计；属于"用户能看见但实际不生效"的隐性 bug。 |
| [#1292](https://github.com/1jehuang/jcode/issues/1292) | `JCODE_WAKE_MODE` 缺失导致 config-cache 失效 | 用户改动环境变量却仍读到旧配置，是一类容易被误诊为"环境变量没生效"的麻烦问题；揭示了 env→fingerprint 映射需要持续维护的工程债。 |
| [#1294](https://github.com/1jehuang/jcode/issues/1294) | macOS terminal-launch 在 Clippy `-D warnings` 下失败 | 反映项目已开启更严格的 lint 策略，平台特定代码尾部 `return` 写法被识别为反模式；虽是"小问题"但会导致 `-D warnings` 构建直接失败。 |
| [#1286](https://github.com/1jehuang/jcode/issues/1286)（由 #1288 关闭） | Provider 日志中 `openrouter` slot 名遮盖实际 profile | 虽未列入今日更新列表，但 #1288 已针对其给出修复，反映社区对"可观测性语义"的要求：日志与 `/usage` 应该反映用户真实使用的 profile，而非底层聚合 slot。 |

> 全部 5 条新 Issue 均为 0 评论 / 0 👍，尚处早期 triage 阶段，但其中 #1291 与 #1289 的覆盖面（Windows 用户 / Grok Build 用户）较大，建议优先响应。

---

## 🛠 重要 PR 进展

| # | PR | 类型 / 影响 |
|---|----|-------------|
| [#1295](https://github.com/1jehuang/jcode/pull/1295) | fix(terminal): macOS 终端检测改用 tail expression | 关闭 [#1294](https://github.com/1jehuang/jcode/issues/1294)，最小化变更（仅去 `return`+`;`），保持 1692 行文件结构与所有别名/优先级不变，适合直接合入。 |
| [#1293](https://github.com/1jehuang/jcode/pull/1293) | fix(config): 把 `JCODE_WAKE_MODE` 加入 `CONFIG_ENV_KEYS` | 关闭 [#1292](https://github.com/1jehuang/jcode/issues/1292)，单行单文件改动，base 在 5cb7b3d；为 config-cache 失效逻辑补齐关键 env 变量。 |
| [#1290](https://github.com/1jehuang/jcode/pull/1290) | fix(provider): 序列化 Grok Build SetRoute 切换 | 关闭 [#1289](https://github.com/1jehuang/jcode/issues/1289)，针对 `RuntimeKey` 内部 tagged 枚举的 `Other(string)` 反序列化路径补齐，使 `/model` 切换请求真正可达服务端。 |
| [#1288](https://github.com/1jehuang/jcode/pull/1288) | fix(provider): 日志/History/`/usage` 显示真实 profile 而非 openrouter slot | 关闭 [#1286](https://github.com/1jehuang/jcode/issues/1286)，区分 `Provider::name()`（稳定机器 ID）与展示名，避免 deepseek / nvidia-nim / zai 等子 profile 被错误归并。 |
| [#1280](https://github.com/1jehuang/jcode/pull/1280) | pre_request transform hook：每次调用前重写 provider-bound 请求 | 新能力，外部命令通过 stdin 拿到完整请求 JSON，stdout 0 + JSON 即改写、空 stdout 透传、其他 fail-open；与静态 system prefix 的"只读上下文"边界保持清晰。 |
| [#1281](https://github.com/1jehuang/jcode/pull/1281) | 递归 schedule（chain-safe 重复 + 整系列取消） | 为 schedule 工具增加 `repeat_every_minutes` 与 `repeat_max_iterations`，每次触发前先 re-queue，崩溃/失败/漏醒都不会断链；ambient 周期被显式排除。 |
| [#1282](https://github.com/1jehuang/jcode/pull/1282) | 上下文压缩生命周期 hooks + 自定义 summarizer + 持久化 provenance | 在既有 fire-and-forget 总线上暴露 `compaction_started/completed/emergency`，并允许 `summary_command` 用 stdin（messages+trigger+mode）接管摘要，stdout 非空即采用、否则降级到原生链。 |
| [#1279](https://github.com/1jehuang/jcode/pull/1279) | feat: pre-tool input transformers | 关联 [#760](https://github.com/1jehuang/jcode/issues/760)，让用户可以为工具输入编写前置转换插件（PR 自带 RTK 适配示例），是工具链可扩展性的关键拼图。 |

---

## 📈 功能需求趋势

从今日 Issues + 近一周 PR 综合提炼，社区关注度集中在以下方向：

1. **跨平台一等公民化**：Windows shell 可配置化（#1291）与 macOS 严格 lint（#1294）说明 Windows / macOS 用户增长带来真实工作流摩擦，"在哪里都能跑"仍是高频诉求。
2. **Provider 多样性与可观测性**：Grok Build（#1289 / #1290）、OpenRouter slot 与子 profile 命名（#1288 / #1286）表明多 provider 路由已从"能跑通"进入"语义正确 + 日志清晰"阶段。
3. **会话与配置状态一致性**：会话标签丢失（#1287）、env→config-cache fingerprint（#1292）反映持久化层存在多个数据源/缓存需要持续对齐。
4. **可编程扩展面（hooks/transformers）**：#1279、#1280、#1282 形成完整的"前/中/后"扩展能力——pre-tool、pre-request、compaction lifecycle，是插件生态的雏形。
5. **调度与自动化**：#1281 的 chain-safe 重复 schedule 让 jcode 具备更可靠的定时/链式任务能力，向"agent runtime"进一步靠拢。

---

## 🧑‍💻 开发者关注点 / 痛点

- **"硬编码选择"是最被反感的形态**：无论是编译期写死的 Windows shell（#1291）还是把多 profile 笼统标成 `openrouter`（#1286），都让用户失去了"按需切换"的能力。社区期望通过 config / env 在运行时而非构建时决策。
- **状态/缓存一致性是隐性杀手**：`JCODE_WAKE_MODE` 未入 fingerprint 导致改了不生效（#1292），`/save` 标签写入 JSON 但被 SQLite 索引覆盖（#1287），都是"看起来成功、实际无效"类问题，排查成本高。
- **严格的 lint 与多平台交叉编译**：开启 `-D warnings` 后，平台特定代码里 `return` 这种"小冗余"直接阻塞构建（#1294 / #1295），提示项目对 CI 门禁的要求在抬升。
- **Provider 集成的"最后一公里"**：能登录但切不了模型（#1289）暴露出第三方 ACP provider 适配的边角问题，开发者期望尽快打通端到端体验而不是停留在连接层。
- **扩展性需求明确且具体**：pre-tool transformer（#1279）、pre-request hook（#1280）、compaction 自定义（#1282）的 PR 都自带示例与失败语义，说明社区已经有明确的插件使用场景（RTK、摘要器、外部调度），等待的只是稳定 API。

---

> 报告基于 2026-09-17 ~ 2026-09-18 期间更新的 5 条 Issue 与 8 条 PR 生成；如需查看历史趋势或聚焦某一方向（Provider / 扩展 hooks / Windows 兼容），可进一步按时间窗口或标签筛选。

</details>

<details>
<summary><strong>pi</strong> — <a href="https://github.com/earendil-works/pi">earendil-works/pi</a></summary>

<think>Let me analyze the GitHub data for the pi (earendil-works/pi) repository on 2026-09-18 and generate a comprehensive daily report in Chinese.

Key observations:
1. No new releases in past 24 hours
2. 50 issues updated, 11 PRs updated
3. Several important themes emerging:
   - Retry logic bugs (Retry-After header handling)
   - Compaction issues
   - Provider-specific bugs (OpenCode, OpenRouter, Anthropic thinking blocks)
   - Windows-specific issues
   - New model/provider support requests

Let me organize this into a structured report.

Top issues by community attention (comments + 👍):
1. #7836 - Fuzzy match whitespace bug (CLOSED, 12 comments, 1 👍)
2. #8684 - PI_OFFLINE undocumented behavior (10 comments)
3. #9361 - Windows shellPath ignored (7 comments)
4. #9571 - Retry-After NaN delay (6 comments)
5. #4854 - OpenAI tool replay (6 comments)
6. #9602 - Compaction overflow with thinking (5 comments)
7. #8760 - OpenRouter :free models (5 comments)
8. #9577 - Signal-killed bash tools (4 comments)
9. #9391 - Stale thinking blocks (4 comments, 1 👍)
10. #9647 - session_compact_end event (4 comments)

PRs to highlight:
1. #9714 - Azure Foundry Chat Completions (OPEN, notable feature)
2. #9724 - Retry-After fallback fix (CLOSED)
3. #9722 - Retry opaque 4xx errors (CLOSED)
4. #9720 - Mistral reasoning + GLM-5.3 (CLOSED)
5. #9719 - Tool shell padding (CLOSED)
6. #9717 - Bounded thinking-only in compaction (CLOSED)
7. #9630 - Event handler unsubscribe (CLOSED)
8. #9668 - Prompt cache warming (OPEN, WIP from mitsuhiko)
9. #9706 - Eval prompts validation (CLOSED)
10. #9705 - TUI context footer eval (CLOSED)

Functional trends:
- New provider/model support (Azure Foundry, GMI Cloud, LLM Gateway, GLM-5.3)
- Compaction reliability improvements
- Retry/resilience logic
- TUI/UX improvements (selection, mouse handling, padding)
- Windows compatibility

Developer pain points:
- Retry-After parsing bugs
- Compaction destroying data
- Provider-specific edge cases
- Session migration safety
- Time zone handling

Let me write the report now.</think>

# Pi 社区动态日报 · 2026-09-18

## 📌 今日速览

今日社区焦点集中在 **provider 通信健壮性** 与 **会话压缩（compaction）机制**：多个高评论 Issue 围绕 429 重试、`Retry-After` 解析、长会话中 thinking block 残留导致的 token 浪费/丢失等问题展开。同时 OpenRouter、Azure Foundry、GMI Cloud 等多个 provider 适配正在快速推进，Mistral 的推理派发重构与 `zai-glm-5-3` 新模型也已合入。

---

##  版本发布

过去 24 小时内无新版本发布。

---

##  社区热点 Issues

按评论数与实际影响力筛选，TOP 10：

| # | Issue | 状态 | 要点 |
|---|---|---|---|
| [#7836](https://github.com/earendil-works/pi/issues/7836) | Edit fuzzy match misses whitespace differences | **CLOSED** | `normalizeForFuzzyMatch` 未折叠空白，导致小型模型 edit 工具频繁失败，影响大量使用小模型的开发者 |
| [#8684](https://github.com/earendil-works/pi/issues/8684) | `PI_OFFLINE` 静默禁用全部 provider 模型发现 | OPEN | 文档说只关 housekeeping，实际把会话级模型目录拉取也禁掉了，与文档严重不符 |
| [#9361](https://github.com/earendil-works/pi/issues/9361) | Windows: `shellPath` 被非确定性忽略 | OPEN | 加载 extension 后 Windows 下 bash 解析结果不确定，频繁误用 WSL `System32\bash.exe`，存在安全隐患 |
| [#9571](https://github.com/earendil-works/pi/issues/9571) | `Retry-After` 畸形 HTTP-date → NaN 立即重试 | OPEN | 造成 429 紧密循环打上游，已催生两个修复 PR（[#9689](https://github.com/earendil-works/pi/pull/9689)、[#9724](https://github.com/earendil-works/pi/pull/9724)） |
| [#4854](https://github.com/earendil-works/pi/issues/4854) | OpenAI 兼容工具回放可能发空 `tool_call_id` | **CLOSED** | 触发上游 `Invalid 'input[3].call_id': empty string`，影响所有 OpenAI 兼容 provider |
| [#9602](https://github.com/earendil-works/pi/issues/9602) | Compaction 包含被请求省略的 thinking 导致溢出 | OPEN | 长会话下 llama.cpp/Qwen3.8 反复撞 16k 输出上限 |
| [#8760](https://github.com/earendil-works/pi/issues/8760) | OpenRouter `:free` 模型因 `max_tokens` 超限 400 | **CLOSED** | 影响多个 `:free` 模型，典型"目录值与上游硬限不一致"问题 |
| [#9577](https://github.com/earendil-works/pi/issues/9577) | 被 SIGKILL/SIGTERM 的 bash tool 仍 resolve 成功 | **CLOSED** | 调用方无法区分成功与被杀，#[#8994](https://github.com/earendil-works/pi/pull/8994) 同类问题的延伸 |
| [#9391](https://github.com/earendil-works/pi/issues/9391) | Compaction 后陈旧签名 thinking block 反复重放 | OPEN | Anthropic 每轮都返回 `prefix_binding_mismatch`，浪费 token 并产生噪声日志 |
| [#9647](https://github.com/earendil-works/pi/issues/9647) | `session_compact_end` 事件在清理状态前触发 | OPEN | 扩展无法在 compaction 后正确拿到 idle 状态，影响第三方扩展生命周期 |

**社区反应观察**：
- 几个同时涉及 **provider 健壮性 + compaction** 的问题（#9571、#9391、#9602）正在形成"信任危机"——开发者担心长会话下数据/请求被悄悄破坏。
- #8684 反映文档与实现脱节的反复模式，维护者亟需一份"实际行为 vs 文档"差异清单。

---

## ️ 重要 PR 进展

| # | PR | 状态 | 关键内容 |
|---|---|---|---|
| [#9714](https://github.com/earendil-works/pi/pull/9714) | feat(ai): Azure Foundry Chat Completions 支持 | **OPEN** | 补齐 Azure Responses 之外的 Chat Completions 部署（DeepSeek V4 Pro 等），是 Azure 生态扩展的关键拼图 |
| [#9724](https://github.com/earendil-works/pi/pull/9724) | fix(ai): 畸形 `Retry-After` 回退到指数退避 | **CLOSED** | 直接闭环 #9571，增加非有限值校验，杜绝 NaN 路径 |
| [#9722](https://github.com/earendil-works/pi/pull/9722) | fix(ai): 无 body 的 4xx 错误加入重试 | **CLOSED** | 解决 OpenAI SDK `"400 (no body)"` 被快速失败的问题，统一网关透传语义 |
| [#9720](https://github.com/earendil-works/pi/pull/9720) | Mistral 推理派发改用 `thinkingLevelMap` + `zai-glm-5-3` | **CLOSED** | 移除硬编码 model-id 白名单，新增 GLM-5.3 支持，配合 [#9701](https://github.com/earendil-works/pi/issues/9701) |
| [#9719](https://github.com/earendil-works/pi/pull/9719) | TUI: 默认 tool shell 垂直 padding 可配 | **CLOSED** | 新增 `toolShellPaddingY` 设置（0/1），统一流式/事件/恢复路径的渲染 |
| [#9717](https://github.com/earendil-works/pi/pull/9717) | fix: 压缩摘要中限定 thinking-only 消息 | **CLOSED** | 闭环 #9602，避免 thinking-only 回复让 compaction 请求膨胀 |
| [#9630](https://github.com/earendil-works/pi/pull/9630) | feat: event handler 支持 unsubscribe | **CLOSED** | 派发期间复制 handler 列表，使扩展生命周期管理更安全 |
| [#9668](https://github.com/earendil-works/pi/pull/9668) | feat: prompt cache warming | **OPEN** | `@mitsuhiko` 本人提交，WIP 实验性预热，关系到长会话成本与延迟 |
| [#9706](https://github.com/earendil-works/pi/pull/9706) | fix: eval prompts 从 transcript 校验 | **CLOSED** | 文档 eval 与 session 重载一致性提升，保留 usage/timing 现场 |
| [#9705](https://github.com/earendil-works/pi/pull/9705) | feat: TUI context footer eval | **CLOSED** | 注入式 terminal 渲染 + Docker 隔离的 10-cell 进度条 eval，配合 autoeval 报告 |

---

##  功能需求趋势

从近期 Issues/PR 中可识别出五条主要方向：

1. **新 Provider/模型接入** —— Azure Foundry（[#9714](https://github.com/earendil-works/pi/pull/9714)）、GMI Cloud（[#9685](https://github.com/earendil-works/pi/issues/9685)）、LLM Gateway（[#7610](https://github.com/earendil-works/pi/pull/7610)）、GLM-5.3（[#9701](https://github.com/earendil-works/pi/issues/9701)），社区呈"一 provider 一 issue"的自助贡献模式。
2. **会话压缩（Compaction）质量** —— 这是近期最高频的主题，集中在"thinking 残留导致重放错误 / token 爆炸 / 静默丢数据"。相关 #9391、#9602、#9647、#9727 形成完整生命周期讨论。
3. **网络层鲁棒性** —— `Retry-After` 解析、4xx/5xx 分类、空 body 处理（#9571、#9577、#9722、#9724）是另一条主线。
4. **Windows / WSL 兼容性** —— shellPath 解析、bash 工具路径（#9361）仍是阻碍 Windows 用户的关键体验问题。
5. **TUI/UX 打磨** —— 鼠标选择（#9696）、theme 化选区样式（#9715）、tool shell padding（#9719）、TUI footer（#9705）等显示层细节持续被提出。

---

## 💡 开发者关注点（高频痛点）

- **"静默坏掉"的失败模式**：`PI_OFFLINE` 超范围禁用（#8684）、empty-body 400 被误判为 context overflow（[#9482](https://github.com/earendil-works/pi/issues/9482) 损失 ~400k token）、signal-killed bash 仍 resolve（#9577）——失败信息缺失或语义错误是开发者最不信任的来源。
- **文档与实现脱节**：OpenRouter baseUrl 覆盖（[#9725](https://github.com/earendil-works/pi/issues/9725)）、`PI_OFFLINE` 行为说明不准确，反复出现"按文档配结果不行"。
- **本地时区 / 会话迁移数据安全**：时间戳带误导性 `Z` 后缀（[#9609](https://github.com/earendil-works/pi/issues/9609)）、迁移就地重写且无备份（[#9708](https://github.com/earendil-works/pi/issues/9708)），反映出对磁盘数据完整性的担忧。
- **小型/本地模型可用性**：#7836（fuzzy match）和 #9602（compaction 溢出）都直接源于"小模型+长会话"的真实使用场景，社区希望 pi 对这些场景更宽容。
- **扩展生命周期不完整**：session_compact_end 顺序（#9647）、event handler unsubscribe（#9630）说明扩展 API 仍在补齐，第三方扩展作者持续推动能力完善。

---

> 报告基于 2026-09-18 抓取的 GitHub 数据生成，覆盖过去 24 小时更新的 Issues 与 PRs。

</details>

---
*本日报由 [Big Model Radar](https://github.com/96loveslife/big_model_radar) 自动生成。*
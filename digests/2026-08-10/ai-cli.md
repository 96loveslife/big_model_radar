# AI CLI 工具社区动态日报 2026-08-10

> 生成时间: 2026-08-10 02:10 UTC | 覆盖工具: 8 个

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

<think>The user wants me to generate a horizontal comparison analysis report based on the daily dynamics of various AI CLI tools (Claude Code, OpenAI Codex, Gemini CLI, GitHub Copilot CLI, Kimi Code CLI, OpenCode, jcode, pi). Let me carefully analyze all the data and synthesize a comprehensive comparison.

Let me think through each section:

**1. 生态全景 (Ecosystem Overview)**
- All 8 tools are in active iteration
- Common themes: MCP integration, model provider support, TUI/IDE integration, stability, performance
- Different maturity levels - some are stabilizing (Claude Code, Codex), others still building core features (jcode, pi)
- Safety/classifier concerns emerging as major pain point (Claude Code)

**2. 各工具活跃度对比 (Activity Comparison)**
Let me compile the numbers:
- Claude Code: 50 issues, 5 PRs, 0 releases
- OpenAI Codex: 50 issues, 8 PRs, 0 releases
- Gemini CLI: 50 issues, 28 PRs (mostly dependabot), 1 nightly release
- GitHub Copilot CLI: 25 issues, 0 PRs, 0 releases
- Kimi Code CLI: 2 issues, 1 PR, 0 releases
- OpenCode: 50 issues, 50 PRs, 0 releases
- jcode: 44 issues, 3 PRs, 2 releases
- pi: 33 issues, 11 PRs, 0 releases

**3. 共同关注的功能方向**
Looking at all reports, common themes:
- MCP protocol stability (Codex, Copilot CLI, jcode, pi)
- Multi-model/provider support & fallback (Copilot CLI #7602, Codex #4003, Claude Code, jcode)
- TUI/UI improvements (OpenCode #4283, pi TUI bugs, Gemini CLI TUI issues)
- Subagent/multi-agent orchestration (Claude Code #85416, Gemini CLI, OpenCode, jcode burst swarms)
- Memory/persistence (Claude Code pinned sessions, Gemini Auto Memory, Kimi #1283, jcode memory, pi session start context)
- Session lifecycle management (multiple tools)
- Performance/optimization (Codex prompt cache, OpenCode memory, pi CPU usage)
- Cross-platform (Codex Windows issues, OpenCode Linux)
- Local/self-hosted model support (pi llama.cpp, jcode)

**4. 差异化定位分析 (Differentiation)**
- Claude Code: Mature enterprise tool, Anthropic ecosystem, heavy safety classifier concerns
- OpenAI Codex: Windows-focused issues dominating, GPT-family model support
- Gemini CLI: Most frequent release cadence (nightly), heavy multi-agent focus
- GitHub Copilot CLI: Enterprise/Business authentication focus, IDE integration
- Kimi Code CLI: Limited activity (2 issues), focused on Chinese AI ecosystem
- OpenCode: Most active in PRs (50), LSP/performance focused, large community
- jcode: Small but focused, ACP ecosystem pioneer, ACP/MCP integration
- pi: TUI quality focus, extension system pioneer, protocol layer development

**5. 社区热度与成熟度 (Community Activity & Maturity)**
Most active by PR/Issue count: OpenCode, Gemini CLI
Most mature/stable: Claude Code, OpenAI Codex (in terms of feature completeness but with bugs)
Mid-stage: GitHub Copilot CLI, Gemini CLI
Early-stage/niche: Kimi Code CLI, jcode, pi
ACP pioneers: jcode, pi

**6. 值得关注的趋势信号**
- MCP becoming core infrastructure but reliability issues everywhere
- ACP (Agent Client Protocol) emerging as multi-agent standard (jcode, pi)
- Safety classifier false positives emerging as major friction point (Claude Code)
- Memory/persistence becoming table stakes
- TUI quality becoming competitive differentiator
- Multi-agent orchestration shifting from single-agent to swarm/burst patterns
- Performance and observability increasingly important

Now let me write a polished report in Chinese, professional and concise.</think>

# AI CLI 工具横向对比分析报告
**报告日期：2026-08-10**

---

## 1. 生态全景

今日 8 款主流 AI CLI 工具均处于活跃迭代期，**MCP 协议稳定性**、**多模型故障转移**、**TUI/IDE 集成**、**会话/记忆管理** 已成为跨工具的共同命题。社区从「单一智能体能力」向「多代理协作 + 持久化记忆 + 跨端协同」的范式转移明显，**ACP（Agent Client Protocol）** 在 jcode、pi 等新兴工具中开始承担类似 MCP 的标准化角色。与此同时，**Anthropic Claude Code 的安全分类器误报**成为本日最具警示性的信号——它揭示了「模型即裁判」路线下用户体验与安全边界的张力，行业或将不得不引入可申诉、可覆盖的安全层设计。

---

## 2. 各工具活跃度对比

| 工具 | Issues（24h） | PRs（24h） | Release（24h） | 核心特征 |
|------|---------------|------------|----------------|----------|
| **OpenCode** | 50 | **50** | 0 | 仓库最活跃；PR 数量遥遥领先（含依赖更新），含大型实验性性能优化 |
| **Gemini CLI** | 50 | 28 | 1（nightly） | 依赖治理与子代理能力并重；唯一今日有版本产出的工具 |
| **Claude Code** | 50 | 5 | 0 | Issue 高质量，PR 偏文档/插件元数据 |
| **OpenAI Codex** | 50 | 8 | 0 | Windows 相关 Issue 占 60%；PR 含行为契约修正 |
| **GitHub Copilot CLI** | 25 | 0 | 0 | 仅有 Issue 更新，零 PR 进入流水线 |
| **jcode** | 44 | 3 | **2**（v0.73.0、v0.74.0）| 唯一双版本同发的工具，聚焦 ACP 协议深化 |
| **pi** | 33 | 11 | 0 | PR 含里程碑级远程会话协议 PR #7344 |
| **Kimi Code CLI** | **2** | 1 | 0 | 活跃度最低，但单 Issue 互动质量高（#1283 达 27 评论） |

> 📊 **活跃度解读**：OpenCode 与 Gemini CLI 的 PR 量大幅领先，反映二者正处于**快速迭代期**；Claude Code / Codex / Copilot CLI 的 PR 较少说明已进入**稳定性优化期**；jcode 双版本同发体现**小团队精耕节奏**；Kimi Code CLI 活跃度异常低，需进一步关注是否处于功能收敛或社区迁移阶段。

---

## 3. 共同关注的功能方向

| 方向 | 代表工具与诉求 | 共同痛点 |
|------|----------------|----------|
| **MCP 协议稳定性** | Codex（#4370/#4421/#4419）、Copilot CLI（#4370/#4421）、jcode（#829）、pi（#7865） | FastMCP 兼容、握手超时、OAuth 3LO、错误码归一化、协议特性协商 |
| **多模型/Provider 故障转移** | Copilot CLI（#7602，107 👍）、Codex（#4003）、jcode（#828）、pi（#6922） | 跨模型 Failover、订阅同步、旗舰模型目录滞后 |
| **TUI/编辑器渲染质量** | OpenCode（#4283，110 👍）、pi（#7616/#7861/#7495）、Gemini CLI（#21924） | 长会话滚动跳变、长行溢出崩溃、PageUp/Down 缺失、内存占用 |
| **子代理/多代理协作** | Claude Code（#85416）、Gemini CLI（#22323/#21409）、OpenCode（#13715）、jcode（#839 burst swarms） | 嵌套权限不可见、子任务冻结、终止状态报告失真 |
| **记忆与会话持久化** | Claude Code（#28745/#62104）、Gemini CLI（#26522 Auto Memory）、Kimi Code CLI（#1283）、jcode（#822/#823）、pi（#7872） | 跨会话恢复、固定会话防误删、记忆检索去噪、隐私脱敏时机 |
| **本地/自托管模型体验** | pi（llama.cpp #6922/#7072）、Codex（行尾符 #4003）、Gemini CLI（夜间构建） | 本地模型目录缓存、Provider 长尾易碎、跨平台同步 |
| **IDE 集成深耕** | Copilot CLI、Codex（Cursor #25928/VSCode #37458）、OpenCode（VSCode #39588） | 队列丢消息、扩展启动失败、跨端同步 |
| **会话生命周期管理** | Claude Code（#81100）、OpenCode（#39358 archival）、jcode（#25555 question undo） | 30 天清理、归档幂等、可撤销/分叉 |

> 🔍 **关键发现**：MCP 在 4 个工具中被同时列为头号痛点，已实质上成为**行业基础设施级瓶颈**——任何工具的 MCP 体验问题都会传染至整个生态。

---

## 4. 差异化定位分析

| 工具 | 核心定位 | 目标用户 | 技术路线特征 |
|------|----------|----------|--------------|
| **Claude Code** | 企业级一体化智能体工作站 | 中大型企业 / 专业开发者 | Anthropic 安全模型深度整合；Desktop/Cowork/IDE 全端覆盖；Plugin/Skill 生态 |
| **OpenAI Codex** | GPT 系模型统一 CLI 入口 | GPT 用户、Windows/.NET 开发者 | OpenAI Responses API + MCP；高度依赖服务端治理 |
| **Gemini CLI** | Google 多模型实验田 | Gemini 用户、AI 实验爱好者 | **Nightly 节奏 + 依赖常态化治理**；子代理体系最完整 |
| **GitHub Copilot CLI** | GitHub 生态终端入口 | GitHub Enterprise / Business 用户 | 紧贴 GitHub 组织策略；强鉴权链路；IDE 桥接 |
| **Kimi Code CLI** | 月之暗面中文 AI 工具 | 中文 AI 社区、长上下文用户 | 轻量、聚焦；ACP 与 Provider 适配起步阶段 |
| **OpenCode** | 性能/可扩展优先的通用 CLI | 高级用户、自部署运维 | **LSP + 数据库快照回归 + 渲染优化**；最活跃的开源社区 |
| **jcode** | ACP 协议先行者 | 小而美的精品工具用户 | **ACP host 深度适配**；多代理 MapReduce / burst swarms RFC |
| **pi** | TUI/扩展体系专家 | 终端原教旨主义者 | **`@earendil-works/pi-protocol` + TuiAltScreen 抽象层**；Extension API 走在前列 |

> 📌 **路线分化**：OpenAI 系（Codex/Copilot）走**平台绑定**路线；Anthropic（Claude Code）走**安全 + 桌面矩阵**路线；Google（Gemini）走**实验性 + 高频迭代**路线；新兴工具（jcode/pi/OpenCode）走**协议开放 + 性能极致**路线。

---

## 5. 社区热度与成熟度

### 5.1 社区热度（按互动量与活跃度综合）

| 工具 | 热度评级 | 关键指标 |
|------|----------|----------|
| **OpenCode** | 🔥🔥🔥🔥🔥 | 50 PRs、单 issue 高达 122 评论（#4283）、Memory Megathread 124 评论 |
| **Claude Code** | 🔥🔥🔥🔥 | 50 issues 高质量，#28745 长期累计 76 👍，安全分类器误报集中爆发 |
| **Gemini CLI** | 🔥🔥🔥🔥 | 50 issues + 28 PRs，依赖治理规模化推进 |
| **OpenAI Codex** | 🔥🔥🔥 | 50 issues 但 Windows 高度集中，#4003 长期 74 👍 |
| **GitHub Copilot CLI** | 🔥🔥🔥 | 25 issues 数量虽少但精准命中企业核心场景，#1857 26 👍 |
| **jcode** | 🔥🔥 | 44 issues + 双版本发行节奏紧凑，社区深度参与 ACP 协议演进 |
| **pi** | 🔥🔥 | 33 issues + 11 PRs，含里程碑级 PR #7344 |
| **Kimi Code CLI** | 🔥 | 2 issues 显著低于平均水平，需关注活跃度异常 |

### 5.2 成熟度分层

- **稳定优化期**：Claude Code、OpenAI Codex、GitHub Copilot CLI — 功能矩阵已较完整，社区重心在**稳定性、可观测性、安全边界**。
- **快速迭代期**：Gemini CLI、OpenCode — 依赖治理 + 性能优化 + 新能力同步推进，每日报出大量 PR。
- **能力建设期**：jcode、pi — 在 ACP、远程会话协议、扩展体系等前沿方向做**架构级投入**，单 PR 影响深远。
- **早期/潜在静默期**：Kimi Code CLI — 活跃度异常低，可能处于收敛或战略调整阶段。

---

## 6. 值得关注的趋势信号

### 6.1 🔐 安全分类器从「静默裁判」向「可申诉服务」演进
- **信号**：Claude Code 24 小时内出现 6 条 ClAudit/Fable 5 误报工单（#85375/#85392/#85414/#85415 等），集中请求模型强制切换的可观测性、可申诉、可覆盖能力。
- **行业含义**：「模型即裁判」路线若不提供用户控制接口，将在工程化场景中遭遇持续抵制。预计未来 6 个月内会出现 **policy-override 协议 / 分类器置信度透出 / 误报回退机制** 等行业级解决方案。
- **对开发者的参考**：依赖 AI CLI 做安全敏感工作（代码审查、合规审计、渗透测试）时，应在自动化脚本中预留**人工兜底环节**，避免被分类器阻塞后无路可走。

### 6.2 🌐 MCP 已成行业基础设施，但稳定性治理滞后
- **信号**：MCP 在 Codex、Copilot CLI、jcode、pi 4 个工具中同时成为头号痛点；OpenCode 也在 PR #7344 中推出自有协议（pi-protocol）。
- **行业含义**：MCP 正快速成为事实标准，但**错误码语义、超时策略、OAuth 握手、协议特性协商** 等基础问题尚未在 SDK 层形成共识。
- **对开发者的参考**：构建 MCP Server 时应**严格遵循 JSON Schema、显式声明 capabilities、设置合理超时**，并假设 Client 端会因不同实现而行为差异。

### 6.3 🧠 记忆与持久化成为「桌面级 AI」必备能力
- **信号**：跨会话恢复（Claude Code #28745 76 👍、Gemini CLI Auto Memory #26522）、持久化 Session daemon（OpenCode #41453）、ACP 任务里调用 memory（jcode #822）、session_start 上下文暴露（pi #7872）——5 个工具几乎同步推进记忆系统。
- **行业含义**：单纯「无状态 LLM」体验已进入产品瓶颈期，**「会话即资产」** 已成为用户对桌面级 AI 的硬性预期。
- **对开发者的参考**：在选型 CLI 工具时，**记忆系统的检索质量、脱敏策略、可清理粒度** 应纳入评估清单，而不只是看模型本身。

### 6.4 🖥️ TUI 质量成为差异化护城河
- **信号**：OpenCode 的 #4283（110 👍）、pi 的 #7616/#7861/#7495、Gemini CLI 的 TUI 性能议题均指向**长上下文下的渲染崩溃、滚动跳变、内存膨胀**。OpenCode PR #40427 直接将渲染内存降低 75.5%。
- **行业含义**：随着上下文窗口迈入 1M+，**「TUI 能否丝滑承载」** 已超越「模型能力」成为留存关键。
- **对开发者的参考**：在评估 AI CLI 时，应实测**8K / 64K / 200K 三档上下文下的滚动/搜索/复制体验**，而非仅看 benchmark。

### 6.5 🔌 ACP（Agent Client Protocol）成为新兴标准化候选
- **信号**：jcode（v0.74.0 全面 ACP 化）、pi（合并 PR #7344 定义远程会话协议）、Gemini CLI（PR #28744 修复 ACP 恢复会话）、Claude Code（VSCode 集成层支持 ACP-like）共同推进。
- **行业含义**：MCP 解决「工具调用」，ACP 解决「会话承载」，二者正形成**两层协议栈**：MCP 在底层做能力暴露，ACP 在上层做会话编排与跨端协同。
- **对开发者的参考**：若计划构建 IDE/桌面端 AI 客户端，应优先选择 ACP 兼容的服务端，而非重新实现会话协议。

### 6.6 🤝 多代理架构从「嵌套调用」向「MapReduce / Burst」演进
- **信号**：jcode #839 burst swarms RFC、Claude Code #85416 子代理 effort 不可观测、OpenCode #13715 嵌套子代理权限问题、Gemini CLI #28738 允许子代理调用子代理。
- **行业含义**：单 agent 在长任务上力不从心，社区正分层探索**persistent swarm（长协作 DAG）+ burst swarm（短并行 MapReduce）** 双层架构。
- **对开发者的参考**：复杂任务拆解时，应明确区分「长跑代理」与「短跑并行」的语义边界，避免把高频 burst 任务塞进 persistent swarm 导致状态污染。

---

## 📌 总结

2026-08-10 这份横向扫描揭示了一个清晰的行业坐标：

- **基础设施层**：MCP 成为共识，但稳定性治理是首要任务；ACP 正在补齐会话协议层短板。
- **应用能力层**：记忆持久化、多代理编排、TUI 渲染质量是三大差异化方向。
- **治理与边界层**：安全分类器的可控制性正成为下一阶段用户体验的关键变量。

对技术决策者而言，**选型不应再以「模型能力」为唯一标尺**，而应综合评估：协议成熟度（MCP/ACP）、记忆系统可治理性、TUI 长上下文表现、多代理可观测性、以及最重要的——**用户对安全边界的可控制权**。对开发者而言，则应将「**快速失败 + 显式错误 + 可观测 wire-level 日志**」作为评估 AI CLI 工程化能力的三条铁律。

---

## 各工具详细报告

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills 社区热点

> 数据来源: [anthropics/skills](https://github.com/anthropics/skills)

<think>The user wants me to analyze the Claude Code Skills community data and produce a report. Let me carefully parse the data provided.

Key observations:
1. The PR comment counts are all "undefined" - this is odd. The user wants me to rank by "comments" but that data is missing. However, I have other signals - I can see 👍 counts (but they're all 0 too), update dates, and PR numbers. Let me use the PR numbers and update recency as proxies for ranking.

Wait, looking again - the user says "按评论数排序，共 50 条，展示前 20 条" meaning the data was already sorted by comment count. But the actual comment count is "undefined". This might be a data scraping issue. Let me work with what I have - the order they're presented in, plus the issue data which has actual comment counts.

Looking at issues:
- #492: 43 comments - Security: namespace abuse (TOP issue)
- #228: 16 comments - org-wide skill sharing
- #556: 12 comments - run_eval.py 0% trigger
- #62: 10 comments - skills disappeared
- #1329: 9 comments - compact-memory proposal
- #202: 8 comments - skill-creator best practices
- #412: 6 comments - agent-governance proposal
- #189: 6 comments - duplicate skills
- #1487: 4 comments - claude-api 156k tokens
- #1385: 4 comments - Reasoning Quality Gate
- #1175: 4 comments - SharePoint security concerns
- #29: 4 comments - bedrock usage
- #16: 4 comments - expose skills as MCPs
- #12: 4 comments - docx whitespace
- #1169: 3 comments - run_loop recall=0%

For PRs, the data shows comments as "undefined" - so I need to use other signals. Looking at the list, these appear to be ordered by some popularity metric (the data says "按评论数排序"). The top PRs by the order shown are:

1. #1298 - skill-creator run_eval fixes
2. #514 - document-typography skill
3. #538 - pdf case-sensitivity fix
4. #486 - ODT skill
5. #210 - frontend-design skill improvement
6. #83 - skill-quality-analyzer and skill-security-analyzer
7. #541 - docx tracked changes
8. #539 - skill-creator YAML validation
9. #1367 - self-audit skill
10. #1099 - skill-creator Windows fixes
11. #1050 - skill-creator Windows fixes
12. #723 - testing-patterns skill
13. #525 - pyxel retro game
14. #509 - CONTRIBUTING.md
15. #181 - SAP-RPT-1-OSS
16. #95 - system documentation
17. #1479 - plan-file-hygiene
18. #1323 - skill-creator trigger detection
19. #1302 - color-expert
20. #1261 - skill-creator isolation

I'll need to acknowledge that exact comment counts aren't available in the PR data, but I can work with the order. Let me create a comprehensive analysis.

Actually, since the comment data for PRs is undefined, I should be transparent about this and use other indicators (PR number/recency as proxies, since the list was already sorted by popularity per the description).

Let me structure the report:

1. **热门 Skills 排行** - List top 5-8 PRs
2. **社区需求趋势** - Issues analysis
3. **高潜力待合并 Skills** - OPEN PRs with high engagement signals
4. **生态洞察** - Summary

Let me write this in Chinese (simplified) as requested.</think>

# Claude Code Skills 社区热点报告
*数据截止：2026-08-10 | 数据源：github.com/anthropics/skills*

---

## 一、热门 Skills 排行（按关注度排序）

> 注：PR 数据中评论数字段缺失，以下排行依据仓库返回的"按评论数排序"的原始顺序，并结合更新时间与 Issue 关联度综合判断。

### 1. 🔧 skill-creator 系列修复（核心基础设施）
**PR #1298** — `@MartinCajiao` | [链接](https://github.com/anthropics/skills/pull/1298)
- **功能**：修复 `run_eval.py` 始终报告 `recall=0%` 的致命缺陷（关联 10+ 独立复现的 #556），并修复 Windows 流读取、触发检测、并行 worker。
- **讨论热点**：`run_eval.py` 是 `run_loop.py` 与 `improve_description.py` 的信号源，一旦失效，所有 Skill 的 description 自动优化都在针对"噪声"做优化。属于基础设施级故障。
- **状态**：OPEN（2026-06-23 最新更新）

### 2. 🎨 document-typography Skill（新功能）
**PR #514** — `@PGTBoos` | [链接](https://github.com/anthropics/skills/pull/514)
- **功能**：自动防止 AI 生成文档中的排版问题——孤行（orphan）、寡头（widow）、编号错位。
- **讨论热点**：影响"Claude 生成的每一份文档"，用户极少主动要求排版，但缺失会显著影响专业性。
- **状态**：OPEN（2026-03-13 更新）

### 3. 📄 pdf / docx 文档处理修复（质量与健壮性）
**PR #538** — `@Lubrsy706` | [链接](https://github.com/anthropics/skills/pull/538)
- 修复 `pdf/SKILL.md` 8 处大小写不匹配（`REFERENCE.md` → `reference.md`），解决 Linux 等大小写敏感系统下文件引用失败问题。

**PR #541** — `@Lubrsy706` | [链接](https://github.com/anthropics/skills/pull/541)
- 修复 DOCX tracked-change `w:id` 与现有 bookmark 冲突导致文档损坏的严重 bug。OOXML 的 ID 空间被书签/批注/移动范围共用，社区此前普遍使用硬编码低 ID，存在系统性风险。
- **状态**：均 OPEN

### 4. � ODT Skill（生态扩张）
**PR #486** — `@GitHubNewbie0` | [链接](https://github.com/anthropics/skills/pull/486)
- **功能**：覆盖 OpenDocument 格式（.odt/.ods/ODF）的创建、模板填充、HTML 转换。
- **讨论热点**：补充开源/ISO 文档生态，回应非 Microsoft 办公套件用户诉求。
- **状态**：OPEN（2026-04-14 更新）

### 5. 🛠 frontend-design Skill 增强
**PR #210** — `@justinwetch` | [链接](https://github.com/anthropics/skills/pull/210)
- **功能**：修订 frontend-design skill，提升清晰度与可执行性，确保每条指令都是单次对话内可完成的具体动作。
- **状态**：OPEN（2026-03-07 更新）

### 6. 🔍 skill-quality-analyzer + skill-security-analyzer（元 Skill）
**PR #83** — `@eovidiu` | [链接](https://github.com/anthropics/skills/pull/83)
- **功能**：五维质量分析（结构/文档 20% + …）+ 安全维度审计，作为"Skills 的 Skill"上架 marketplace。
- **讨论热点**：呼应 #492 提出的 namespace 信任边界滥用问题，社区已开始自发构建元治理工具。
- **状态**：OPEN（2026-01-07 更新）

### 7. 🧪 skill-creator Windows 兼容性
**PR #1099** + **PR #1050** — `@joshuawowk` / `@gstreet-ops` | [链接1](https://github.com/anthropics/skills/pull/1099) [链接2](https://github.com/anthropics/skills/pull/1050)
- **功能**：两处 1 行修复，解决 Windows 下 `subprocess.Popen(["claude",...])` 的 `PATHEXT` 与管道读取崩溃问题。
- **讨论热点**：与 #1298 同属 "Windows 上 skill-creator 不可用" 的症状簇，5 月集中爆发，10+ 用户提交独立复现。
- **状态**：均 OPEN（2026-05-24 更新）

### 8. 🎮 pyxel 复古游戏开发 Skill
**PR #525** — `@kitao` | [链接](https://github.com/anthropics/skills/pull/525)
- **功能**：基于 pyxel-mcp MCP server 的像素风/8-bit 游戏创建 skill。
- **状态**：OPEN（2026-07-15 更新，停留时间较长）

---

## 二、社区需求趋势（基于 Issues）

| 优先级 | 诉求方向 | 代表 Issue | 评论数 | 趋势判断 |
|---|---|---|---|---|
| 🔴 **安全与信任** | 社区 Skills 滥用 `anthropic/` 命名空间，破坏信任边界 | [#492](https://github.com/anthropics/skills/issues/492) | **43** | **#1 热点**，社区强烈要求官方干预 |
| 🟠 **企业级分发** | Claude.ai 内实现组织级 Skill 共享 | [#228](https://github.com/anthropics/skills/issues/228) | **16** | 取代"手动 .skill 文件 + Slack 转发"流程，团队场景刚需 |
| 🟡 **工具可靠性** | `run_eval.py` 触发率 0%（影响 description 优化闭环） | [#556](https://github.com/anthropics/skills/issues/556) | **12** | 与 #1169 / #1298 / #1323 互为镜像 |
| 🟢 **状态持久化** | 长期 Agent 的紧凑记忆符号化（compact-memory） | [#1329](https://github.com/anthropics/skills/issues/1329) | **9** | 长任务场景下 context 优化诉求 |
| 🟣 **元能力治理** | skill-creator 自身需要按最佳实践重构 | [#202](https://github.com/anthropics/skills/issues/202) | 8 | 工具型 Skill 的"教学化"反模式需纠正 |
| 🔵 **AI Agent 治理** | 策略执行、威胁检测、信任评分、审计追踪 | [#412](https://github.com/anthropics/skills/issues/412) | 6 | 企业级合规场景的空白点 |
| ⚪ **去重/打包** | `document-skills` 与 `example-skills` 内容重复导致 context 污染 | [#189](https://github.com/anthropics/skills/issues/189) | 6 | 仓库组织结构问题，影响所有用户 |
| ⚪ **上下文控制** | `claude-api` Skill 一次性注入 ~156k tokens 撑爆 context | [#1487](https://github.com/anthropics/skills/issues/1487) | 4 | Skill 体积膨胀成为新瓶颈 |

**趋势画像**：社区需求已从"功能性 Skill 数量增长"迁移到 **Skill 生态健康度**——安全、信任、可靠性、context 经济性。

---

## 三、高潜力待合并 Skills（可能近期落地）

| Skill / PR | 作者 | 主题 | 落地概率评估 |
|---|---|---|---|
| **#1298 run_eval 综合修复** | @MartinCajiao | skill-creator 基础设施 | ⭐⭐⭐⭐⭐ 阻塞 10+ 用户工作流，关联最高评论 Issue |
| **#1261 trigger-eval 命令隔离** | @alvingarcia | 隔离合成命令文件污染用户 `.claude/commands/` | ⭐⭐⭐⭐⭐ 修复并发 eval 把垃圾命令注入用户项目目录的严重 bug |
| **#514 document-typography** | @PGTBoos | 文档排版质控 | ⭐⭐⭐⭐ 通用性强、零依赖、PR 简洁 |
| **#538 + #541 pdf/docx 修复** | @Lubrsy706 | 大小写 + w:id 冲突 | ⭐⭐⭐⭐ 明确 bug 修复，回归测试齐全 |
| **#539 YAML description 引号校验** | @Lubrsy706 | skill-creator 防御性校验 | ⭐⭐⭐⭐ 阻止静默 YAML 解析失败 |
| **#1479 plan-file-hygiene** | @tonydzi | 规划产物生命周期管理 | ⭐⭐⭐⭐ 回应 #1417 社区痛点，作者明确致谢多位贡献者 |
| **#1302 color-expert** | @meodai | 色彩命名/空间专家系统 | ⭐⭐⭐ 设计类 Skill 覆盖空白，独立性强 |
| **#1367 self-audit (v1.3.0)** | @YuhaoLin2005 | 机械校验 + 四维推理质量门 | ⭐⭐⭐⭐ 与 #1385 提案呼应，质量保障赛道先发 |
| **#723 testing-patterns** | @4444J99 | 全栈测试模式 | ⭐⭐⭐ 内容扎实但范围广，审稿周期可能较长 |
| **#509 CONTRIBUTING.md** | @narenkatakam | 仓库治理（社区健康分 25% → 提升） | ⭐⭐⭐⭐⭐ 单文件高 ROI，闭合 #452 |

---

## 四、Skills 生态洞察（一句话）

> **当前社区最集中的诉求是"Skill 生态自身的工程化与可信化"——既要修复基础设施（skill-creator 在 Windows/eval 链路上的系统性失效），又要建立治理边界（命名空间安全、组织级分发、context 预算控制），让 Skills 从"能用"走向"可被企业信任地大规模使用"。**

---

### 附：风险信号速览
- 🚨 `anthropic/` 命名空间冒充问题（#492）已积累 **43 条评论 + 2 👍**，是当前社区最尖锐未解议题
- 🚨 Windows 平台用户被系统性排除在 skill-creator 工作流之外（#556 / #1099 / #1050 / #1323 四个 PR 仍未合并）
- 🚨 多个 Skill 出现 context 膨胀（#1487 单次注入 156k tokens），需要"按需加载"标准
- ⚠️ `document-skills` 与 `example-skills` 内容重复（#189）导致 context 污染，但优先级偏低

---

<think>The user wants me to generate a daily report for the Claude Code community based on GitHub data. Let me analyze the data carefully:

**Date**: 2026-08-10

**Releases**: None in past 24 hours

**Issues**: 50 issues, 30 shown (top by comments)
- Top issues by comments:
  1. #31413 - UI language localization (13 comments, 8 👍) - opened 2026-03-06
  2. #67246 - Safety classifier model switch bug (12 comments, 3 👍) - opened 2026-06-10
  3. #28745 - Resume conversations from different directories (11 comments, 76 👍) - opened 2026-02-25
  4. #72248 - Workflow tool JSON args bug (10 comments, 1 👍) - opened 2026-06-29
  5. #83913 - Prompt cache invalidated (5 comments, 4 👍) - opened 2026-08-04
  6. #81306 - Windows Desktop crash MSIX (5 comments, 0 👍) - opened 2026-07-26
  7. #62104 - Prevent archiving pinned sessions (5 comments, 1 👍) - CLOSED stale
  8. #85240 - Remote Control browser response issue (5 comments, 0 👍) - opened 2026-08-09
  9. #85286 - Assistant fabricates conversation turns (4 comments, 0 👍) - opened 2026-08-09
  10. #80874 - GitHub Integration connector OAuth bug (4 comments, 0 👍) - opened 2026-07-24
  11. #66084 - tools/list_changed MCP bug (4 comments, 2 👍) - opened 2026-06-07
  12. #81658 - Cross-platform sync failure (4 comments, 3 👍) - opened 2026-07-27
  13. #84981 - Background tasks SIGTERMed 30-min timer (3 comments, 0 👍) - opened 2026-08-08
  14. #85008 - VSCode forking bug (2 comments, 0 👍) - opened 2026-08-08
  15. #81100 - Desktop 30-day retention deletes (2 comments, 0 👍) - opened 2026-07-25
  16. #83760 - Denied tool call executed anyway (2 comments, 0 👍) - opened 2026-08-04
  17. #84880 - Chrome file_upload bug Windows (2 comments, 1 👍) - opened 2026-08-07
  18. #82712 - Plugin version resolution (1 comment, 0 👍) - opened 2026-07-30
  19. #83957 - MessageDisplay hook bug (1 comment, 0 👍) - opened 2026-08-04
  20. #85401 - Destructive commands on shared resources (1 comment, 0 👍) - opened 2026-08-09
  21. #85398 - Stale persisted state (1 comment, 0 👍) - opened 2026-08-09
  22-27. Multiple ClAudit false-positive issues (all opened 2026-08-09, 0 👍, 1 comment each)
  28. #85416 - Subagent effort level unobservable (0 comments, 0 👍) - opened 2026-08-10
  29. #85415 - Session downgrading to Opus 4.8 (0 comments, 0 👍) - opened 2026-08-10
  30. #85414 - Fable 5 false positive (0 comments, 0 👍) - opened 2026-08-10

**Pull Requests**: 5 PRs
1. #9262 - docs: enforce task tool - CLOSED
2. #85409 - security-guidance model refs update - OPEN
3. #85323 - fix YAML block scalar parsing - OPEN
4. #17395 - agent-session-commit plugin - CLOSED
5. #85243 - fix skills name conformance - OPEN

Let me identify key themes:
1. **Safety classifier false positives (Fable 5 / ClAudit)** - Major theme. Multiple issues today all about cybersecurity safety-filter false positives blocking legitimate work. This is a hot issue.
2. **Desktop app stability issues** - Windows MSIX crash, 30-day retention data loss, ghost sessions
3. **Cross-platform sync** - Desktop/Web/Android sync failures
4. **Conversation management** - Resume from different directories, pinned sessions, fork bugs
5. **MCP / Tools** - tools/list_changed not refreshing, Workflow tool args bug, MessageDisplay hook
6. **Localization** - UI language localization request with 8 thumbs up
7. **Model selection issues** - Safety classifier forcing model switch to Opus 4.8
8. **Plugin/Skills ecosystem** - Plugin version resolution, YAML parsing, skill names

Now let me draft the report in Chinese, keeping it professional and concise.

For "社区热点 Issues" I should pick the 10 most important. Let me prioritize:
1. #67246 - Safety classifier model switch (high impact, recurring theme)
2. #28745 - Resume from different directories (76 👍 highest, oldest community demand)
3. #31413 - UI localization (8 👍, broad appeal)
4. #72248 - Workflow tool JSON args (10 comments)
5. #83913 - Prompt cache invalidated (5 comments, performance impact)
6. #81306 - Windows Desktop MSIX crash (data loss)
7. #81658 - Cross-platform sync failure
8. #85286 - Fabricated conversation turns (serious correctness bug)
9. #84981 - 30-min background task kill (undocumented behavior)
10. #85240 - Remote Control browser rendering
11. #81100 - 30-day retention data loss
12. #85414/85375/85392 - ClAudit false positives (very recent, signal volume)

I should pick 10 - let me focus on:
1. #67246 - Safety classifier switch (Opus 4.8)
2. #28745 - Resume from different directories (76 👍)
3. #31413 - UI localization (8 👍)
4. #72248 - Workflow tool JSON
5. #83913 - Prompt cache invalidation
6. #81306 - Windows MSIX crash data loss
7. #81658 - Cross-platform sync
8. #85286 - Fabricated conversation turns
9. #84981 - 30-min background SIGTERM
10. #85240 - Remote Control browser render

Or maybe pick one of the ClAudit false positives to highlight that trend. Let me pick #85414 since it's the freshest.

Actually, since there are 6 ClAudit false positive issues opened on 2026-08-09, this represents a clear surge. Let me include #85414 as representative.

Let me finalize:
1. #28745 - Resume from different dirs (76 👍, oldest, most popular)
2. #67246 - Safety classifier forced switch
3. #31413 - UI localization
4. #72248 - Workflow tool JSON
5. #83913 - Prompt cache invalidation
6. #81306 - Windows MSIX crash data loss
7. #85286 - Fabricated conversation turns
8. #84981 - 30-min SIGTERM background tasks
9. #81658 - Cross-platform sync failure
10. #85414 - Fable 5 false positive (representative of ClAudit trend)

For PRs, only 5 PRs so all should be mentioned.

Let me write the report now.</think>

# Claude Code 社区动态日报 · 2026-08-10

## 今日速览

过去 24 小时，仓库无新版本发布，但 **Claude Code 2.1.226** 上的 bug 反馈呈爆发态势：6 个全新 **ClAudit / Fable 5 网络安全分类器误报** 工单同日涌入，均指向「Opus 4.8 接管会话后拒绝合法任务」这一反复出现的问题；同时 Desktop 端数据丢失、跨平台同步故障、VSCode fork 空白等稳定性议题仍是核心关注点。PR 侧无功能性合并，主要为文档/插件元数据修正。

---

## 版本发布

*过去 24 小时无新 Release。*

社区中可观察到的最新 CLI 版本为 **2.1.226**（在 [#85008](https://github.com/anthropics/claude-code/issues/85008) VSCode fork bug 报告中被引用）。

---

## 社区热点 Issues（Top 10）

| # | Issue | 关注点 | 社区反应 |
|---|-------|--------|---------|
| 1 | [#28745](https://github.com/anthropics/claude-code/issues/28745) **允许跨目录恢复会话**（enhancement / cli） | 当原 git worktree / 目录被删除/移动后无法 `resume` 旧会话，是 CLI 长期痛点 | 👍 **76**（本期最高）、💬 11 |
| 2 | [#67246](https://github.com/anthropics/claude-code/issues/67246) **Fable 5 → Opus 4.8 静默切换**（bug / model） | 安全分类器误判良性工程讨论并强制切换模型，`/model` 无法覆盖 | 💬 12、👍 3 |
| 3 | [#31413](https://github.com/anthropics/claude-code/issues/31413) **UI 多语言本地化**（enhancement / ui） | 中文/日文/欧陆语言界面需求长期存在 | 💬 13、👍 8 |
| 4 | [#72248](https://github.com/anthropics/claude-code/issues/72248) **Workflow 工具 args 以 JSON 字符串传递**（bug / macos） | 与文档 "verbatim" 契约相矛盾，脚本需自行反序列化 | 💬 10、👍 1 |
| 5 | [#83913](https://github.com/anthropics/claude-code/issues/83913) **PreToolUse/PostToolUse 改写导致 prompt cache miss**（bug） | 每次历史重建都会让首轮请求重写缓存前缀，影响 token 成本与延迟 | 💬 5、👍 4 |
| 6 | [#81306](https://github.com/anthropics/claude-code/issues/81306) **Windows Desktop MSIX 崩溃导致本地数据全失**（bug） | 需手动卸载 MSIX 包，Code-tab 分组/崩溃 dump 不可恢复 | 💬 5、👍 0（高严重度） |
| 7 | [#85286](https://github.com/anthropics/claude-code/issues/85286) **Assistant 伪造后续对话轮次**（bug） | 模型越过 turn 边界自生成 user/system/tool 块，破坏对话完整性 | 💬 4、👍 0 |
| 8 | [#84981](https://github.com/anthropics/claude-code/issues/84981) **后台 Bash 任务精确 30 分钟 SIGTERM**（bug / macos） | 计时器未文档化、无 TaskStop 信号，exit 144，长期会话严重受影响 | 💬 3、👍 0 |
| 9 | [#81658](https://github.com/anthropics/claude-code/issues/81658) **跨平台同步失败，Cowork 对话消失**（bug） | Desktop/Web/Android 端会话莫名丢失，疑似服务端事件 | 💬 4、👍 3 |
| 10 | [#85414](https://github.com/anthropics/claude-code/issues/85414) **Fable 5 在防御性安全审计中持续误报**（bug / cyber） | 与今日同期新增的 5 个 [#85375](https://github.com/anthropics/claude-code/issues/85375) [#85392](https://github.com/anthropics/claude-code/issues/85392) 等 ClAudit 工单共同构成「安全分类器过激」信号洪流 | 🆕 8/9–10 集中新增 |

> ⚠️ **趋势警示**：6 条 ClAudit 误报工单在 24 小时内被同一用户（@sworrl）以结构化 triage 模板集中提交，请求 ID 全部落在 `req_011Cdo…` / `req_011Cdn…` 区间，建议关注是否为服务端策略回滚或模型路由异常。

---

## 重要 PR 进展

| # | PR | 状态 | 说明 |
|---|----|------|------|
| 1 | [#9262](https://github.com/anthropics/claude-code/pull/9262) | ✅ CLOSED | 文档：commit 命令强制使用 Task 工具与 `model` 参数元数据（仅文档改动） |
| 2 | [#85409](https://github.com/anthropics/claude-code/pull/85409) | 🟢 OPEN | `security-guidance` 插件默认模型引用从 Opus 4.7 / Sonnet 4.6 升级至 **Opus 5 / Sonnet 5**——印证最新模型命名已切换 |
| 3 | [#85323](https://github.com/anthropics/claude-code/pull/85323) | 🟢 OPEN | 修复 `validate-agent.sh` 对 YAML `description: \|` / `description: >` 块标量的解析缺陷（#83803 后续） |
| 4 | [#17395](https://github.com/anthropics/claude-code/pull/17395) | ✅ CLOSED | 新增 `agent-session-commit` 插件，将 `AGENTS.md` 设为权威项目指令文件，`CLAUDE.md` 改为入口指针 |
| 5 | [#85243](https://github.com/anthropics/claude-code/pull/85243) | 🟢 OPEN | 修正 8 个内置 skill 的 `name` 字段违反规范（带空格、首字母大写），对齐 spec |

---

## 功能需求趋势

从本期 50 条更新 Issue 中提炼出 6 大诉求方向：

1. **🔐 安全分类器可控性（最热）** — 11 条相关 Issue 集中要求：(a) 用户能 override `/model` 不被 Fable 5 / ClAudit 强制切换；(b) 误报需有申诉/回退路径；(c) 行为需在文档中披露。相关：[#67246](https://github.com/anthropics/claude-code/issues/67246)、[#85414](https://github.com/anthropics/claude-code/issues/85414)、[#85375](https://github.com/anthropics/claude-code/issues/85375)、[#85398](https://github.com/anthropics/claude-code/issues/85398)、[#85415](https://github.com/anthropics/claude-code/issues/85415)。
2. **🌍 本地化与全球化** — UI 多语言请求（[#31413](https://github.com/anthropics/claude-code/issues/31413) 👍8）持续滚雪球，反映非英语用户基数增长。
3. **💾 会话生命周期管理** — 跨目录恢复（[#28745](https://github.com/anthropics/claude-code/issues/28745) 👍76）、固定会话防误删（[#62104](https://github.com/anthropics/claude-code/issues/62104)）、30 天清理策略透明化（[#81100](https://github.com/anthropics/claude-code/issues/81100)）三个维度共同指向「会话即资产」的运维诉求。
4. **🖥️ Desktop 端稳定性** — Windows MSIX 包恢复路径、Desktop 30 天保留、跨平台同步三件事说明 Desktop / Cowork 产品线尚未进入稳态。
5. **🔌 MCP / Hook / Workflow 契约正确性** — `tools/list_changed` 不刷新、Workflow `args` 反序列化破坏契约、`MessageDisplay` hook 输出被忽略——生态契约的「文档 vs 实现」差距是高质量反馈源。
6. **⚡ 性能与缓存效率** — Prompt cache 在历史重建时被主动改写（[#83913](https://github.com/anthropics/claude-code/issues/83913)）直接影响 token 成本，对企业用户尤其敏感。

---

## 开发者关注点 & 痛点

**最集中的 3 类抱怨：**

- **「我的工作被安全模型静默阻断」** — 开发者无法理解为何一个普通 engineering / 防御性安全审计请求会触发整会话级 halt，且无任何 UI 反馈告诉他们「是哪个分类器、哪个规则、是否可申诉」。这是过去 24 小时反馈的**最强信号**。
- **「Desktop / VSCode 数据无回退机制」** — MSIX 损坏导致 Code-tab 永久丢失、30 天 sweep 后只剩不可点击的 ghost 会话、VSCode fork 创建出无主空 tab——开发者用 Claude Code 作为日常工作台，但对**本地持久层**的鲁棒性缺乏信心。
- **「生态契约 = 文档 ≠ 实际行为」** — Workflow `args`、`MessageDisplay` hook、MCP `tools/list_changed`、YAML block scalar 解析——多个「按文档应该这样工作」的边界条件全部失效，使 plugin/skill 作者难以稳定交付。

**高频隐性诉求：**可观测性（[#85416](https://github.com/anthropics/claude-code/issues/85416) 子代理 effort 不可观测、cache miss 不可见、SIGTERM 无信号）正在取代「更多功能」成为下一阶段社区的核心呼声。

---

*数据来源：[github.com/anthropics/claude-code](https://github.com/anthropics/claude-code) · 采样窗口：2026-08-09 ~ 2026-08-10 UTC*

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

<think>The user wants me to generate a Chinese daily report for OpenAI Codex community dynamics on 2026-08-10. Let me analyze the data carefully.

Key observations:
1. No new releases in the past 24 hours
2. 50 issues updated, but only 30 shown with most comments
3. 8 PRs updated in the past 24 hours - interestingly many are from `copyberry[bot]` which suggests automated bots or a specific contributor
4. Windows-related issues dominate significantly
5. Computer Use on Windows has multiple related bugs
6. Line ending issue (#4003) from 2025 is still being discussed with 33 comments and 74 thumbs up
7. Several PRs address line endings preservation

Let me structure the report:

**Today's Highlights:**
- No new releases
- Multiple Windows-related bugs dominating, especially Computer Use feature
- Active development on `apply_patch` line ending preservation
- Cursor extension queue issues persist

**Hot Issues (top 10):**
1. #4003 - Windows line endings bug (most upvoted: 74👍, 33 comments)
2. #25928 - Cursor extension prompts disappear (25 comments)
3. #37458 - VSCode extension fails to start (24 comments)
4. #11011 - Slow thread switching (22 comments)
5. #37043 - Computer Use EnumWindows error (18 comments)
6. #15299 - MCP notifications support (15 comments, enhancement)
7. #37180 - Computer Use approval prompt fails (11 comments)
8. #37383 - Computer Use EnumWindows another variant (11 comments)
9. #20802 - macOS thread switching slow (closed, 8 comments)
10. #33282 - Desktop create_thread auto-approval (7 comments)

Wait, the user said top 30 issues are shown. Let me pick 10 most noteworthy.

**Important PRs:**
1. #37758 - Add feature flag for apply_patch line endings
2. #37757 - Add line-ending preservation mode to apply_patch
3. #37747 - Bound Cursor project path resolution
4. #31817 - Update models.json (automated)
5. #37745 - Add gRPC TCP transport to code-mode host
6. #37723 - Report I/O subtypes for session config
7. #37709 - Keep wrapped composer whitespace
8. #37654 - Advertise environment config read support

That's only 8, all I have.

**Trends:**
- Windows compatibility (especially Computer Use)
- IDE integration (VSCode, Cursor)
- Performance issues
- MCP support expansion
- Multi-agent features
- Line endings handling

**Developer Pain Points:**
- Windows desktop app stability
- Computer Use on Windows failing
- Slow thread switching
- Cursor extension queue issues
- Skills directory disappearing

Let me write this in professional Chinese suitable for tech developers.</think>

# OpenAI Codex 社区动态日报
**日期：2026-08-10**

---

## 📌 今日速览

今日 Codex 仓库无新版本发布，但社区活跃度聚焦于 **Windows 平台兼容性** 和 **Computer Use 功能缺陷**。最值得关注的是，过去一周已累积多条针对 Windows Computer Use 模块的重复 Bug 报告（`EnumWindows 0x80070003`），构成明显的故障热点；同时，针对 #4003 长期遗留的 Windows 行尾符问题，开发团队集中提交了两个相关 PR（#37757、#37758），标志着该问题正式进入修复阶段。

---

## 🚀 版本发布

*过去 24 小时内无新版本发布。*

---

## 🔥 社区热点 Issues（Top 10）

### 1. [#4003 — Windows 平台下 patch 文件行尾符混乱](https://github.com/openai/codex/issues/4003)
- 标签：`bug` `windows-os` `tool-calls`
- 👍 **74** | 💬 33 | 状态：**已关闭**
- 创建于 2025-09，但因 #37757/#37758 合并今日再次被激活讨论
- **重要性**：这是仓库中 Windows 平台被点赞最多的 Issue，影响所有 Windows 用户的核心写文件能力，今日终于迎来对应的代码修复

### 2. [#25928 — Cursor 扩展提交 Prompt 随机消失](https://github.com/openai/codex/issues/25928)
- 标签：`bug` `windows-os` `extension`
- 👍 17 | 💬 25 | 状态：**开放**
- **重要性**：影响 Cursor 用户的关键交互流程，重复丢失 Prompt 会导致用户工作流中断

### 3. [#37458 — Codex VSCode 扩展启动失败](https://github.com/openai/codex/issues/37458)
- 标签：`bug` `windows-os` `extension`
- 👍 0 | 💬 24 | 状态：**开放**
- **重要性**：阻塞性 Bug，扩展直接无法加载资源，且刚刚创建 3 天就已积攒大量讨论

### 4. [#11011 — App 内线程切换缓慢](https://github.com/openai/codex/issues/11011)
- 标签：`bug` `app`
- 👍 19 | 💬 22 | 状态：**开放**
- **重要性**：跨平台性能回归，影响核心使用体验；同类问题 #20802（macOS）也在今日关闭

### 5. [#37043 — Windows Computer Use EnumWindows 0x80070003](https://github.com/openai/codex/issues/37043)
- 标签：`bug` `windows-os` `computer-use`
- 👍 4 | 💬 18 | 状态：**开放**
- **重要性**：Computer Use 功能在 Windows 上完全无法启动，与 #37383、#37595、#37734 构成同一根因的多个报告

### 6. [#15299 — 支持将入站 MCP 通知路由到活跃 CLI 会话](https://github.com/openai/codex/issues/15299)
- 标签：`enhancement` `mcp`
- 👍 14 | 💬 15 | 状态：**开放**
- **重要性**：当前 MCP 生态只支持 Codex 调用 MCP 工具，缺少反向通知通道；这是 MCP 集成的关键能力缺口

### 7. [#37180 — Windows Computer Use 审批弹窗缺失](https://github.com/openai/codex/issues/37180)
- 标签：`bug` `windows-os` `app` `computer-use`
- 👍 6 | 💬 11 | 状态：**开放**
- **重要性**：Computer Use 的安全机制（人工审批）在 Windows 下失效，存在体验与安全双重隐患

### 8. [#37383 — Computer Use 应用/窗口发现失败](https://github.com/openai/codex/issues/37383)
- 标签：`bug` `windows-os` `app` `computer-use`
- 👍 4 | 💬 11 | 状态：**开放**
- **重要性**：与 #37043 同源，建议合并处理

### 9. [#20802 — macOS 线程切换回归](https://github.com/openai/codex/issues/20802)
- 标签：`bug` `app` `session` `performance`
- 👍 5 | 💬 8 | 状态：**已关闭**
- **重要性**：与 #11011 共同反映线程切换性能问题，今天关闭说明官方已有修复方案

### 10. [#33282 — Desktop create_thread 未继承 worktree 自动审批模式](https://github.com/openai/codex/issues/33282)
- 标签：`bug` `windows-os` `sandbox` `app` `app-server`
- 👍 3 | 💬 7 | 状态：**开放**
- **重要性**：权限继承缺陷，影响自动化 worktree 工作流

---

## 🛠️ 重要 PR 进展

### 1. [#37758 — 为 apply_patch 行尾符保留添加 Feature Flag](https://github.com/openai/codex/pull/37758)
- 状态：**已关闭**
- 新增 `apply_patch_preserve_line_endings` 特性开关（默认关闭），对应修复 #4003 的 CRLF/CR/混合行尾符被强制规范化问题

### 2. [#37757 — apply_patch 新增行尾符保留模式](https://github.com/openai/codex/pull/37757)
- 状态：**已关闭**
- 引入 opt-in 的 `PreserveLineEndings` 更新模式，与 #37758 配套实现。**这是 #4003 长达近一年的等待后的正式修复**

### 3. [#37747 — 限定 Cursor 项目路径解析范围](https://github.com/openai/codex/pull/37747)
- 状态：**已关闭**
- 修复解析 Cursor 项目名时递归扫描大目录树的安全/性能隐患

### 4. [#31817 — 更新 models.json](https://github.com/openai/codex/pull/31817)
- 状态：**开放**
- GitHub Actions 自动化 PR，常规模型清单同步

### 5. [#37745 — 为 code-mode host 添加 gRPC TCP 传输](https://github.com/openai/codex/pull/37745)
- 状态：**已关闭**
- 支持 `--listen grpc://IP:PORT`，便于 code-mode gRPC 服务跨主机访问，并暴露端口用于端口 0 绑定发现

### 6. [#37723 — 会话配置导入失败上报 I/O 子类型](https://github.com/openai/codex/pull/37723)
- 状态：**已关闭**
- 为 `failed_to_load_session_config` 附加 `std::io::ErrorKind`，便于排查 invalid_data / not_found / permission_denied

### 7. [#37709 — TUI 组合器换行后空白保留](https://github.com/openai/codex/pull/37709)
- 状态：**已关闭**
- 修复 TUI 文本编辑器中换行空白独占一行的渲染问题

### 8. [#37654 — 通告 exec-server 支持环境配置读取](https://github.com/openai/codex/pull/37654)
- 状态：**已关闭**
- 新增 `environmentConfigRead` 能力位，本地执行器默认开启，旧版本默认 false，向后兼容

---

## 📈 功能需求趋势

| 方向 | 代表 Issue | 趋势 |
|------|-----------|------|
| **Windows 平台稳定性** | #4003, #37043, #37180, #37458, #37595 | 🔥 持续高位 |
| **IDE 集成（VSCode / Cursor）** | #25928, #37458, #5609 | 🔥 持续高位 |
| **MCP 协议扩展** | #15299 | 📈 稳步上升 |
| **Multi-Agent 子代理能力** | #33885, #32353 | 📈 新增关注 |
| **跨端会话/对话同步** | #5609（63 👍） | 📈 长期高赞待办 |
| **性能与回归** | #11011, #20802, #30928, #37104 | 🔥 多版本反复出现 |
| **Computer Use（Windows）** | #37043, #37180, #37383, #37595, #37752 | 🚨 新故障热点 |
| **企业网关/自定义模型** | #21594 | 📈 稳步上升 |

---

## 💡 开发者关注点

1. **Windows 仍是最大痛点**：50 条最新 Issue 中约 60% 与 Windows 相关，行尾符、Computer Use、扩展启动三大问题集中爆发，部分用户报告只能降级回 CLI 使用。

2. **Computer Use 在 Windows 上几乎不可用**：至少 4 条 Issue 报告同一根因（`EnumWindows 0x80070003`），亟需官方整合修复并提供统一说明。

3. **Cursor 扩展体验劣化**：队列吞消息、扩展加载失败等问题影响 Cursor 用户的核心工作流，需建立更系统的回归测试。

4. **跨端会话同步呼声强烈**：#5609 已有 **63 👍** 但至今未排期，社区普遍期待 ChatGPT 网站 ↔ VSCode/Cursor 之间的对话与上下文互通。

5. **MCP 与 MultiAgent 是新增长点**：开发者希望在 Codex 中构建更灵活的代理协作能力，包括入站通知、子代理可被修正/steering 等高级语义。

6. **长期遗留的"行尾符"问题终于修复**：#4003 自 2025 年 9 月起横跨近一年，今日通过 #37757/#37758 落地，是社区与官方协同的一个典型案例。

---

*日报基于 GitHub Issues 与 Pull Requests 数据自动生成，仅供参考。*

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

<think>The user wants me to generate a Chinese-language daily report for the Gemini CLI community based on GitHub data from 2026-08-10. Let me analyze the data carefully and structure it appropriately.

Let me break down what I see:

1. **Releases**: One nightly release v0.56.0-nightly.20260810.gcf22ac7e8
2. **Issues**: 50 total, top 30 shown. Many are agent-related bugs, memory system issues, browser agent issues, evaluation infrastructure, etc.
3. **PRs**: 28 total, top 20 shown. Mostly dependabot dependency bumps (closed), plus a few important code changes.

Key observations:
- Many issues are about subagent behavior (hanging, success reporting when it shouldn't, recovery after MAX_TURNS)
- Memory system bugs cluster (issues #26516, #26522, #26523, #26525 from SandyTao520)
- Browser agent issues (wayland failure, settings.json overrides ignored, session takeover)
- Several evaluation infrastructure issues
- AST-aware tools investigation
- Auto Memory system concerns (retry loops, redaction, invalid patches)
- Most PRs are dependabot dependency updates

Let me categorize and prioritize:

**Top 10 Issues to highlight:**
1. #22323 - Subagent recovery after MAX_TURNS reports GOAL success (12 comments, P1)
2. #21409 - Generalist agent hangs (8 comments, P1)
3. #19873 - Zero-Dependency OS Sandboxing (8 comments, P2, enhancement)
4. #24353 - Robust component level evaluations (7 comments, P1)
5. #22745 - AST-aware file reads (7 comments, P2)
6. #21968 - Gemini doesn't use skills and sub-agents enough (6 comments, P2)
7. #26522 - Stop Auto Memory retrying (5 comments, P2)
8. #25166 - Shell command execution stuck "Waiting input" (4 comments, P1, 3 likes)
9. #26525 - Auto Memory redaction and logging (4 comments, security)
10. #21983 - Browser subagent fails in wayland (4 comments, P1)

**Top 10 PRs to highlight:**
1. #28758 - Version bump (nightly)
2. #28757-#28746 - Dependency updates (group as one)
3. #28744 - ACP fix: don't start fresh chat before resuming
4. #28738 - Allow agents to call agents
5. #28743 - Preserve resolved model config systemInstruction
6. #28742 - Fix caretaker-agent skill names
7. #26540 - Resolve policy engine bugs
8. #28619 - .gitignore update
9. #28450 - Actions dependencies bump
10. #28749 - @google/genai major version bump (1.30.0 → 2.15.0)

**Feature Trends:**
- Agent/Multi-agent system improvements (largest cluster)
- Memory system (Auto Memory) improvements
- Browser agent resilience
- Evaluation infrastructure
- AST-aware tooling
- OS-level sandboxing
- Skills/subagents utilization

**Developer Pain Points:**
- Agent hangs and unreliable termination reporting
- Shell command execution hangs
- Tool count limits (>128/400 tools)
- Memory system bugs
- Permission/sandbox issues
- Symlink issues with agents
- Browser agent compatibility (wayland)

Let me write this in Chinese with a professional tone suitable for technical developers.

I need to be careful about dates - the data is from 2026-08-10 (future date), but I'll just treat it as the report date.

Let me draft the report now.</think>

# Gemini CLI 社区动态日报 · 2026-08-10

> 数据来源：[google-gemini/gemini-cli](https://github.com/google-gemini/gemini-cli)

---

## 📌 今日速览

今日 Gemini CLI 进入 0.56.0 nightly 迭代节奏，仓库同步推进了大规模依赖更新（74 个 npm 包批量升级）。社区讨论高度集中在 **子代理（subagent）行为可靠性** 与 **Auto Memory 系统质量** 上——多个 P1 级 bug 报告子代理在 `MAX_TURNS` 后错误返回 `GOAL_SUCCESS`、通用代理（generalist）频繁挂起，以及 Auto Memory 在低信号会话上反复重试。同时，针对浏览器子代理、骨架级评估基建和 AST 感知工具的 EPIC 也保持活跃推进。

---

## 🚀 版本发布

- **v0.56.0-nightly.20260810.gcf22ac7e8** 已发布
  - 由 `gemini-cli-robot` 自动发起（[#28758](https://github.com/google-gemini/gemini-cli/pull/28758)）
  - 完整对比：[Full Changelog](https://github.com/google-gemini/gemini-cli/compare/v0.56.0-nightly.20260809.gcf22ac7e8...v0.56.0-nightly.20260810.gcf22ac7e8)
  - 本次 nightly 主要包含底层依赖批量升级（详见下方 PR 进展）

---

## 🔥 社区热点 Issues

> 按评论数与重要性筛选，覆盖子代理稳定性、Auto Memory、评估基建等核心话题。

### 1. [#22323](https://github.com/google-gemini/gemini-cli/issues/22323) — 子代理在 MAX_TURNS 后错误报告 GOAL_SUCCESS（P1 · 12 评论）
`codebase_investigator` 子代理在达到最大轮次限制后，仍返回 `status: "success"` 与 `Termination Reason: "GOAL"`，掩盖了实际的中断状态。社区反馈强烈，因为这会导致上层决策基于错误信号。

### 2. [#21409](https://github.com/google-gemini/gemini-cli/issues/21409) — Generalist 子代理无限挂起（P1 · 8 评论 · 👍8）
通用代理（generalist）一旦被委派就无限挂起，连"创建文件夹"这种简单操作都要等待超过 1 小时。明确指示模型不使用子代理可绕过该问题，影响生产可用性。

### 3. [#19873](https://github.com/google-gemini/gemini-cli/issues/19873) — 利用模型的 bash 原生亲和力：零依赖 OS 沙箱与执行后意图路由（P2 · 8 评论）
针对 Gemini 3 模型原生 bash 训练特性，提出通过 OS 级沙箱（避免引入新依赖）与执行后意图路由来释放其能力，同时保障安全与 UX。是一项 large effort 的长期增强提案。

### 4. [#24353](https://github.com/google-gemini/gemini-cli/issues/24353) — 健壮的组件级评估（Component-level Evaluations）EPIC（P1 · 7 评论）
继 [#15300](https://github.com/google-gemini/gemini-cli/issues/15300) 后，已积累 76 个行为评估测试、覆盖 6 个模型，是评估基建的关键里程碑。

### 5. [#22745](https://github.com/google-gemini/gemini-cli/issues/22745) — AST 感知文件读取/搜索/映射的影响评估（P2 · 7 评论）
探索 AST 感知工具在减少读取噪声、精准定位方法边界、降低无效 turn 损耗方面的潜在收益，与 codebase 映射能力升级相关。

### 6. [#21968](https://github.com/google-gemini/gemini-cli/issues/21968) — Gemini 很少主动使用 Skills 与子代理（P2 · 6 评论）
开发者反映即使定义了 gradle、git 等高质量 Skills，模型也很少主动调用，除非显式提示。这是一个涉及"主动性"与"工具选择"模型行为的关键问题。

### 7. [#26522](https://github.com/google-gemini/gemini-cli/issues/26522) — Auto Memory 无止境重试低信号会话（P2 · 5 评论）
Auto Memory 仅在抽取代理成功 `read_file` 时才标为已处理；若代理判断会话低信号而跳过，索引中会持续出现，导致无限重试与计算浪费。

### 8. [#25166](https://github.com/google-gemini/gemini-cli/issues/25166) — Shell 命令完成后卡在 "Waiting input"（P1 · 4 评论 · 👍3）
执行简单 CLI 命令后界面卡在 "Awaiting user input"，shell 进程已结束但 UI 未同步状态，影响高频操作体验。

### 9. [#26525](https://github.com/google-gemini/gemini-cli/issues/26525) — Auto Memory 增加确定性脱敏并降低日志量（Security · 4 评论）
本地会话转写先进入模型上下文再由模型脱敏，存在暴露面；服务侧也会输出技能定义。该议题推动将脱敏前置并减少日志内容。

### 10. [#21983](https://github.com/google-gemini/gemini-cli/issues/21983) — 浏览器子代理在 Wayland 下失败（P1 · 4 评论）
浏览器子代理在 Wayland 环境下直接失败（`Termination Reason: GOAL` 但实际未完成），影响 Linux 非 X11 用户群。

---

## 🛠️ 重要 PR 进展

### 依赖治理（本日重点）
- **[#28746](https://github.com/google-gemini/gemini-cli/pull/28746)** — `npm-dependencies` 组合更新：**74 个包批量升级**（XL），涵盖 `simple-git`、`@modelcontextprotocol/sdk`、`@google/genai`（→2.15.0）等关键依赖。
- **[#28749](https://github.com/google-gemini/gemini-cli/pull/28749)** — `@google/genai` 跨大版本升级（1.30.0 → 2.15.0）。
- **[#28747](https://github.com/google-gemini/gemini-cli/pull/28747)** — `@a2a-js/sdk` 升级至 1.0.1。
- **[#28752](https://github.com/google-gemini/gemini-cli/pull/28752)** — `puppeteer-core` 升级至 25.4.0（与浏览器子代理相关）。
- **[#28751](https://github.com/google-gemini/gemini-cli/pull/28751)** — `google-auth-library` 升级至 11.0.0。
- **[#28750](https://github.com/google-gemini/gemini-cli/pull/28750)** — `dotenv-expand` 升级至 1000.0.0。
- **[#28753](https://github.com/google-gemini/gemini-cli/pull/28753)** — `execa` 升级至 10.0.1。
- **[#28757](https://github.com/google-gemini/gemini-cli/pull/28757)** — `js-yaml` 升级至 5.2.3。
- **[#28755](https://github.com/google-gemini/gemini-cli/pull/28755)** — `@types/node` 升级至 26.1.2。
- **[#28756](https://github.com/google-gemini/gemini-cli/pull/28756)** — `globals` 升级至 17.9.0。
- **[#28754](https://github.com/google-gemini/gemini-cli/pull/28754)** — `lint-staged` 升级至 17.3.0。
- **[#28748](https://github.com/google-gemini/gemini-cli/pull/28748)** — `npm-run-all2` 升级至 9.0.3。

> 上述依赖 PR 均已自动合并/关闭，体现项目对供应链安全的常态化治理。

### 功能与修复
- **[#28744](https://github.com/google-gemini/gemini-cli/pull/28744)** — **修复 ACP 恢复会话时新建空 chat 污染 session 文件**（P1）。`loadSession` 之前在 `resumeChat()` 前调用 `initialize()`，导致会话文件被无效数据覆盖。修复 [#28693](https://github.com/google-gemini/gemini-cli/issues/28693)。
- **[#28738](https://github.com/google-gemini/gemini-cli/pull/28738)** — **允许子代理调用子代理**（P2，Help Wanted）。通过 `tools:` frontmatter 让子代理可委托给其他子代理或递归自身，修复 [#22092](https://github.com/google-gemini/gemini-cli/issues/22092)。
- **[#28743](https://github.com/google-gemini/gemini-cli/pull/28743)** — **保留 `modelConfigService.getResolvedConfig()` 解析后的 `systemInstruction` 与 `tools`**。修复模型特定配置被 chat 级字段覆盖的回归。
- **[#28742](https://github.com/google-gemini/gemini-cli/pull/28742)** — **修复 caretaker-agent 两个 triage-worker skill 的非法命名**（含下划线），使其符合 Agent Skills 规范。
- **[#26540](https://github.com/google-gemini/gemini-cli/pull/26540)** — **修复 Policy Engine 影响工具审批的关键 bug**（P1）。修复 `buildParamArgsPattern` 的正则 NUL 字节问题，以及 YOLO/AUTO_EDIT 模式下的多余审批提示。
- **[#28619](https://github.com/google-gemini/gemini-cli/pull/28619)** — **`.gitignore` 忽略 `.env` 与 `.ai` 文件并补充单元测试**（已关闭 / pr-nudge-sent）。
- **[#28450](https://github.com/google-gemini/gemini-cli/pull/28450)** — **GitHub Actions 依赖更新**（lycheeverse/lychee-action、preactjs/compressed-size-action、google-github-actions/run-gemini-cli）。

---

## 📈 功能需求趋势

从近 24 小时活跃议题提炼，社区关注方向高度集中：

| 方向 | 代表 Issue | 热度 |
|---|---|---|
| **多智能体协作与可靠性** | [#22323](https://github.com/google-gemini/gemini-cli/issues/22323) [#21409](https://github.com/google-gemini/gemini-cli/issues/21409) [#28738](https://github.com/google-gemini/gemini-cli/pull/28738) | ⭐⭐⭐ |
| **Auto Memory 系统治理** | [#26516](https://github.com/google-gemini/gemini-cli/issues/26516) [#26522](https://github.com/google-gemini/gemini-cli/issues/26522) [#26523](https://github.com/google-gemini/gemini-cli/issues/26523) [#26525](https://github.com/google-gemini/gemini-cli/issues/26525) | ⭐⭐⭐ |
| **浏览器子代理能力** | [#22232](https://github.com/google-gemini/gemini-cli/issues/22232) [#22267](https://github.com/google-gemini/gemini-cli/issues/22267) [#21983](https://github.com/google-gemini/gemini-cli/issues/21983) | ⭐⭐ |
| **行为评估基建（Behavioral Evals）** | [#24353](https://github.com/google-gemini/gemini-cli/issues/24353) [#22745](https://github.com/google-gemini/gemini-cli/issues/22745) | ⭐⭐ |
| **OS 级沙箱与执行后意图路由** | [#19873](https://github.com/google-gemini/gemini-cli/issues/19873) | ⭐⭐ |
| **工具调用与权限管理** | [#24246](https://github.com/google-gemini/gemini-cli/issues/24246) [#22093](https://github.com/google-gemini/gemini-cli/issues/22093) [#26540](https://github.com/google-gemini/gemini-cli/pull/26540) | ⭐⭐ |
| **终端/UI 性能** | [#21924](https://github.com/google-gemini/gemini-cli/issues/21924) [#24935](https://github.com/google-gemini/gemini-cli/issues/24935) | ⭐ |

---

## 💬 开发者关注点

汇总今日高频痛点与诉求：

1. **子代理"静默失败"** — 终止状态报告与实际执行结果不一致（GOAL_SUCCESS 掩盖中断），开发者无法据此判断任务是否真正完成。
2. **挂起与卡顿问题频发** — 包括通用代理无限挂起、shell 命令 UI 状态不同步、create vite app 卡在交互式提示等（[#21409](https://github.com/google-gemini/gemini-cli/issues/21409) [#25166](https://github.com/google-gemini/gemini-cli/issues/25166) [#22465](https://github.com/google-gemini/gemini-cli/issues/22465)）。
3. **Skills/子代理主动性不足** — 模型即便在明显相关的场景下也不主动使用 Skills，需要显式指令（[#21968](https://github.com/google-gemini/gemini-cli/issues/21968)）。
4. **Auto Memory 隐私与稳健性** — 抽取代理在低信号会话上无限重试、日志中泄露技能定义、模型级脱敏时机过晚（[#26522](https://github.com/google-gemini/gemini-cli/issues/26522) [#26525](https://github.com/google-gemini/gemini-cli/issues/26525) [#26523](https://github.com/google-gemini/gemini-cli/issues/26523)）。
5. **工具规模受限** — 当工具数超过 ~128 / ~400 时返回 400 错误，开发者希望根据上下文智能裁剪可用工具集（[#24246](https://github.com/google-gemini/gemini-cli/issues/24246)，注：原文摘要同时提到 128 与 400 两个阈值，社区尚在厘清）。
6. **权限与子代理行为漂移** — 自 v0.33.0 起，部分子代理在配置禁用时仍被自动启用，破坏 MCP-only 工作流（[#22093](https://github.com/google-gemini/gemini-cli/issues/22093)）。
7. **文件读取与子代理边界** — 模型倾向在随机目录写入临时脚本，造成清理负担；子代理的 bug 报告上下文缺失（[#23571](https://github.com/google-gemini/gemini-cli/issues/23571) [#21763](https://github.com/google-gemini/gemini-cli/issues/21763)）。
8. **Symlink 兼容性** — `~/.gemini/agents/` 中的符号链接不被识别为合法子代理定义（[#20079](https://github.com/google-gemini/gemini-cli/issues/20079)）。

---

> 📅 报告生成时间：2026-08-10 · 数据窗口：过去 24 小时
> 共追踪：1 个 Release、50 个活跃

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

<think>The user wants me to generate a daily report for GitHub Copilot CLI community dynamics based on the data provided. Let me analyze the data carefully:

1. **Releases**: No new releases in the past 24 hours
2. **Issues**: 25 issues updated in the past 24 hours
3. **PRs**: 0 PRs updated in the past 24 hours

I need to generate a structured Chinese daily report with:
1. Today's overview (2-3 sentences)
2. Version releases (skip if none)
3. Hot community issues (top 10)
4. Important PR progress (top 10 - but there are 0, so I should note this)
5. Feature request trends
6. Developer concerns

Let me analyze the issues to identify the most important ones:

**Most discussed/engaging issues (by comments and likes):**
- #1857 - Allow users to cancel enqueued messages (9 comments, 26 likes) - HIGH engagement
- #2751 - Remote session disabled error (8 comments, 13 likes) - HIGH engagement
- #1730 - sessionStart hook not firing (7 comments, 3 likes)
- #4306 - Subtasks freeze (2 comments, 2 likes)
- #4256 - cache_control breakpoints (CLOSED, 2 comments, 3 likes)
- #4370 - MCP initialization fails with -32602 (2 comments, 1 like)
- #4390 - Organization models missing (1 comment, 1 like)
- #2922 - /remote for non-GitHub repos (1 comment, 2 likes)

**Newer issues from 2026-08-09 (0 comments but interesting):**
- #4423 - Kickoff prompt silently dropped
- #4422 - All Claude models disabled
- #4421 - MCP initialize 60s timeout
- #4420 - Parallel tool calling order issues
- #4419 - Managed-settings fail-closed
- #4418 - Configurable CLI HUD
- #4417 - CLI dialog enhancement
- #4416 - Parallel explore subagent 429s
- #4415 - High CPU usage
- #4414 - BYOK custom providers 403
- #4413 - session.resume reasoning metadata
- #4412 - Auto-mode range settings
- #4411 - (missing)
- #4410 - /agent pop-up bug with AGENTS.md

**Themes I'm seeing:**
1. MCP integration issues (multiple issues)
2. Authentication/OAuth issues (Enterprise, BYOK)
3. Claude model availability issues
4. Performance/resource issues (CPU, timeouts)
5. Subagent/orchestration issues
6. UX/UI enhancements (HUD, dialogs, theming)

Let me structure the report now. Since there are 0 PRs, I should explicitly note that.

For the top 10 issues, I should pick the most impactful ones. Let me categorize:

**Critical bugs with high engagement:**
1. #1857 - Cancel enqueued messages (most liked, 26)
2. #2751 - Remote session bug
3. #4306 - Subtasks freeze
4. #4370 - MCP initialization failure
5. #4390 - Organization models missing (Claude models)
6. #4422 - All Claude models disabled
7. #1730 - sessionStart hook not firing
8. #4421 - MCP 60s timeout
9. #4256 - cache_control (closed)
10. #4414 - BYOK custom providers 403

Or I could pick based on a mix of engagement, recency, and impact. Let me select 10 that cover diverse areas:

1. #1857 - Input/keyboard - cancel enqueued messages (highest engagement)
2. #2751 - Remote session bug for org repos
3. #4306 - Subtasks freeze
4. #1730 - sessionStart hook
5. #4390 - Claude models missing from catalogue
6. #4422 - All Claude models disabled (newest)
7. #4370 - MCP initialization failure
8. #4421 - MCP 60s timeout (newer, deep technical)
9. #4256 - cache_control breakpoints (CLOSED - this is interesting as it was addressed)
10. #4414 - BYOK custom providers 403

Now let me write the report in Chinese.

Feature trends I observe:
- MCP integration improvements (most prevalent)
- Claude model support and availability
- Enterprise/Business authentication
- Performance optimizations (CPU, caching, timeouts)
- UX improvements (HUD, dialogs, theming)
- Subagent orchestration
- BYOK (Bring Your Own Key) support

Developer pain points:
- MCP server reliability issues
- Model availability disappearing suddenly
- Authentication flows broken in Enterprise
- High resource consumption
- Session management issues
- Parallel execution reliability

Let me write the final report.</think>

# GitHub Copilot CLI 社区动态日报
**日期：2026-08-10**

---

## 📌 今日速览

过去 24 小时，Copilot CLI 仓库活跃度集中在 **Issue 端**，共 25 条 Issue 更新、PR 端零提交，多个高关注度 Bug 被重新激活讨论。社区焦点高度集中在 **MCP 集成稳定性、Claude 模型可用性**以及**企业/Enterprise 鉴权链路**三大方向，其中 Anthropic 模型在部分组织账户下"全部不可用"已成为高频复现问题。同期还出现一批关于并行子任务、CPU 占用、BYOK 鉴权等深度技术报告，预示着 CLI 即将进入一次较大规模的稳定化修复周期。

---

## 🚀 版本发布

**过去 24 小时无新版本发布**，跳过此节。

---

## 🔥 社区热点 Issues（Top 10）

### 1. [#1857 支持取消/移除已入队的消息](https://github.com/github/copilot-cli/issues/1857)
- **状态**：OPEN · **💬 9** · **👍 26**
- **领域**：`area:input-keyboard`
- **价值**：社区呼声最高的长期 Feature Request 之一。用户通过 `Ctrl+Q` / `Ctrl+Enter` 入队的消息在 Agent 忙碌或 `/compact` 期间无法撤回，强制按 FIFO 处理。本帖 26 颗星为本期 Issue 之最，反映这是用户对 CLI 输入体验最迫切的改进诉求。

### 2. [#2751 `/remote` 在组织仓库报 "could not resolve repository"](https://github.com/github/copilot-cli/issues/2751)
- **状态**：OPEN · **💬 8** · **👍 13**
- **领域**：`area:agents, area:enterprise`
- **价值**：影响 v1.0.28 在 GitHub 组织仓库下使用 Remote 能力的核心场景。8 条评论中已汇总多条复现路径与诊断信息，是企业用户迁移到 Remote 工作流的关键阻塞。

### 3. [#4390 组织级启用模型从模型目录中缺失（Claude Sonnet 5/Opus 5、Kimi K3）](https://github.com/github/copilot-cli/issues/4390)
- **状态**：OPEN · **💬 1** · **👍 1**
- **领域**：未打 label（疑似 `models`）
- **价值**：定位 Copilot Business 组织已显式启用的模型（特别是 Anthropic 系列）在 CLI 中不可见，伴随 `claude-sonnet-5` 报"This model is disabled by your organization"——与下方 #4422 同源问题，需要被并行修复。

### 4. [#4422 个人 Enterprise 账户下所有 Claude 模型不可用](https://github.com/github/copilot-cli/issues/4422)
- **状态**：OPEN · **💬 0** · **👍 0**（新提交）
- **领域**：`triage`
- **价值**：作者明确表示"昨天还能用，今天全部失效"，CLI 降级也未恢复。结合 #4390，Anthropic 模型可用性问题已经从"偶发"升级为"系统性"，需要官方尽快给出状态更新。

### 5. [#4370 FastMCP 构建的 MCP Server 在 `server/discover` 阶段返回 -32602 导致 CLI 1.0.79-1 初始化失败](https://github.com/github/copilot-cli/issues/4370)
- **状态**：OPEN · **💬 2** · **👍 1**
- **领域**：`area:mcp`
- **价值**：影响所有基于 FastMCP 框架构建的 MCP Server。错误码 `-32602 Invalid request parameters` 被 CLI 当作致命失败处理，而非兼容回退，会让大量社区 MCP 集成瞬间失效。

### 6. [#4421 MCP `initialize` 握手硬编码 60s 超时、无重试，npx 启动的 stdio 服务器 29% 会话失败且永不恢复](https://github.com/github/copilot-cli/issues/4421)
- **状态**：OPEN · **💬 0** · **👍 0**（新提交）
- **领域**：`triage`
- **价值**：附带统计数据的深度 Bug 报告，揭示 CLI 在 MCP 握手期采用 60s 硬超时且"失败即永不再尝试"的设计缺陷，是典型的稳定性问题，对 npx 等冷启动较慢的 server 极不友好。

### 7. [#4419 托管设置解析期间使用"全空允许列表"的 fail-closed 策略误杀用户 MCP Server](https://github.com/github/copilot-cli/issues/4419)
- **状态**：OPEN · **💬 0** · **👍 0**（新提交）
- **领域**：`triage`
- **价值**：在解析 `managedAllowedMcpServerLists` 期间使用 `[[]]`（一个空列表）作为临时拒绝策略，期间用户注册的 MCP Server 会被永久拒绝。问题在没有托管策略的账户上也能复现——是默认安全策略过度激进的典型样本。

### 8. [#1730 `.github/hooks/` 中 `sessionStart` Hook 在 CLI v0.0.420 不触发](https://github.com/github/copilot-cli/issues/1730)
- **状态**：OPEN · **💬 7** · **👍 3**
- **领域**：`area:plugins`
- **价值**：阻碍企业将现有 GitHub Hook 体系迁移到 CLI 的关键缺陷，开发者无法用 Hook 做会话启动审计、上下文注入等关键能力，开放评论中已沉淀多份 PowerShell/Windows 11 复现脚本。

### 9. [#4306 `/fleet use speckit-automate` 触发的子任务在 autopilot 模式下冻结/失联](https://github.com/github/copilot-cli/issues/4306)
- **状态**：OPEN · **💬 2** · **👍 2**
- **领域**：`area:agents, area:tools`
- **价值**：代表了一类正在涌现的"Agent-of-Agents"工作流稳定性问题。当 `speckit-implement ↔ speckit-converge` 在 autopilot 下循环时，子任务会进入"已派发但不再响应"的死锁态，缺乏恢复机制。

### 10. [#4256 为 Anthropic 请求添加 `cache_control` 断点以复用昂贵上下文（已关闭）](https://github.com/github/copilot-cli/issues/4256)
- **状态**：**CLOSED** · **💬 2** · **👍 3**
- **领域**：`area:models`
- **价值**：建议在 Anthropic 后端启用 prompt caching，可显著降低长上下文会话的 token 成本与首 token 延迟。**本 Issue 已关闭**，意味着团队大概率已采纳或转 PR 跟进，是本期少数有明确进展的条目。

---

## 📥 重要 PR 进展

**过去 24 小时无 PR 更新活动**，本期省略。建议社区关注 [#4256](https://github.com/github/copilot-cli/issues/4256) 关闭后可能衍生出的实现 PR。

---

## 📈 功能需求趋势

综合过去 24 小时更新的 25 条 Issue，社区关注的功能方向可归纳为以下几类（按热度排序）：

| 方向 | 代表性 Issue | 趋势信号 |
|---|---|---|
| **MCP 协议稳定性** | #4370, #4421, #4419, #4371, #4408 | 🔥🔥🔥 **本期最大热点**——5 条相关 Issue 同时暴露握手超时、错误码不兼容、OAuth 3LO URL elicitation、企业 OAuth 元数据发现失败、fast-fail 安全策略误杀等多维度问题 |
| **Anthropic 模型可用性** | #4390, #4422 | 🔥🔥 模型目录与企业启用状态脱钩，需修复组织策略同步链路 |
| **多 Agent / 子任务编排** | #4306, #4420, #4416 | 🔥🔥 并行工具调用响应顺序错乱、子任务冻结、429 限流下无可退避——`explore` 等子代理的工程化短板 |
| **性能与资源占用** | #4415, #4413, #4256 | 🔥 高 CPU、缓存缺失、warm `session.resume` 元数据串线 |
| **BYOK / 自定义 Provider** | #4414 | 🔥 自定义 OpenAI/Anthropic 兼容 Provider 在 App 中全部本地 403，未真正出网 |
| **UI/UX 增强** | #4417, #4418, #4407, #4412 | 浮动 Prompt 编辑器、可配置 HUD、中文本地化、Auto-mode 模型偏好 |
| **企业鉴权与远程控制** | #2751, #2922, #4409, #4408 | `/remote` 在企业账户/非 GitHub 仓库下的边界与提示 |
| **输入体验** | #1857, #4410 | 队列取消、AGENTS.md 误判为自定义 Agent |

---

## 🛠 开发者关注点

1. **MCP 已成为 CLI 的"半边天"，但稳定性是燃眉之急**
   - 多个 Issue 反映 CLI 对 MCP 协议实现的容错性不足（错误码 -32602 直接判死、60s 硬超时、临时 fail-closed 误杀等）。开发者呼吁增加**可配置的超时与重试**、**协议特性协商**、**服务端注册时机优化**。

2. **企业账户的鉴权链路是当前最薄弱的一环**
   - 涉及 BYOK 自定义 Provider、Enterprise OAuth 3LO、`/mcp authenticate`、远程控制 `cli_remote_control_enabled` 等多条 Issue 都存在"应用层无法给出明确错误提示"或"鉴权状态未真正透出"的问题，开发者建议**在 Settings/UI 上明确反馈策略生效情况**。

3. **Anthropic 模型突然不可用引发广泛焦虑**
   - 多名开发者独立报告 Claude Sonnet 5/Opus 5/4.8 在不同账户类型下从可用变为"全部 disabled"，降级 CLI 也无法解决，说明这是**服务端目录同步或组织策略变更**导致的问题，CLI 侧需要更友好的提示文案。

4. **多 Agent 与并行工具调用的可靠性亟需提升**
   - 并行工具响应顺序错乱、子代理死锁、`explore` 集中触发的 429 限流等问题，暴露出在 `eligibleForAutoSwitch` 已存在的情况下**未真正启用自动模型切换**——开发者建议至少在子代理侧暴露模型偏置配置。

5. **性能与资源消耗在长任务下成为痛点**
   - 包含 `sleep 550` 的简单 shell 命令也会让 copilot-cli 占用单核 100%，提示 CLI 在等待态的事件循环或轮询机制存在缺陷。

6. **本地化与可访问性需求开始浮现**
   - 中文 UI、Prompt 编辑器无障碍化、可配置 HUD 等 Feature Request 表明 CLI 正在从"内部工具"迈向"面向更广泛开发者的产品"。

---

*数据来源：[github.com/github/copilot-cli](https://github.com/github/copilot-cli) · 采样窗口：过去 24 小时（截至 2026-08-10）*

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

<think>The user wants me to generate a Chinese daily report for the Kimi Code CLI community based on GitHub data. Let me analyze the data carefully:

**Data Available:**
- No releases in the past 24 hours
- 2 issues updated in the past 24 hours:
  1. #1283 - Memory System feature request (27 comments, updated 2026-08-09)
  2. #2598 - ACP/print streaming hangs (new, 0 comments, updated 2026-08-09)
- 1 PR updated in the past 24 hours:
  1. #739 - Fix Google GenAI tool parameters (updated 2026-08-09)

I need to be honest that there are only 2 issues and 1 PR. The user asked for "10 most notable issues" and "10 important PRs" but there are only 2 and 1 respectively. I should be transparent about this rather than fabricate data.

Let me structure the report:

1. **今日速览** - Summary of today's activity
2. **版本发布** - Skip since no releases
3. **社区热点 Issues** - Only 2 available, present both
4. **重要 PR 进展** - Only 1 available, present it
5. **功能需求趋势** - Analyze based on available data
6. **开发者关注点** - Based on available data

I should be honest about the limited data while still providing valuable analysis. Let me write the report in Chinese with professional, concise language suitable for technical developers.

Let me think about each issue:

**Issue #1283 - Memory System**
- A long-running feature request (created Feb 2026, updated Aug 2026)
- 27 comments shows significant community interest
- About persistent context across sessions
- Both automatic (AI-managed) and manual memory
- This is a major feature that could transform the UX

**Issue #2598 - ACP streaming hang**
- Newly created (2026-08-09)
- A critical bug affecting ACP mode (kimi acp)
- Version 0.34.0 affected
- 0.31.1 only partially covered Esc scenario
- Streaming content arrives but terminal frames (DONE/finish) never come
- Wire.jsonl never written
- This is a production reliability issue

**PR #739 - Fix Google GenAI tool parameters**
- Resolves #734
- Compatibility fix for MCP tools with Google GenAI provider
- Strips JSON Schema metadata fields that cause validation errors
- Affects tools like Exa MCP

Now let me write the report. I need to be transparent that there are only 2 issues and 1 PR available, not fabricate 10 each. The user's template asks for 10 but I should explain the data limitation.

Let me draft this carefully:

---

# 2026-08-10 Kimi Code CLI 社区动态日报

## 1. 今日速览

过去24小时内 Kimi Code CLI 仓库活跃度较低，无新版本发布，但社区讨论聚焦于两个关键方向：一是关于**跨会话记忆系统**（#1283）的高热功能请求仍在持续演进（27条评论），表明用户对持久化上下文有强烈需求；二是新报告的 **ACP 模式流式响应挂死**问题（#2598），这是一个影响生产环境可靠性的严重缺陷。同步有一个针对 Google GenAI 与 MCP 工具兼容性的修复 PR（#739）等待审阅。

## 2. 版本发布

（过去24小时无新版本发布，省略本节）

## 3. 社区热点 Issues

> 📊 **数据说明**：过去24小时仅有 2 条 Issue 更新，以下为全部条目。

### 🔥 Issue #1283 — Memory System: 跨会话持久化上下文
- **链接**：https://github.com/MoonshotAI/kimi-cli/issues/1283
- **作者**：@CatKang | **状态**：OPEN | **评论数**：27 | **更新**：2026-08-09
- **重要性**：自 2026-02-27 创建至今持续活跃，27 条评论表明这是社区长期关注的核心需求
- **内容摘要**：提议实现完整的 Memory System，支持自动记忆（AI 管理的笔记）和手动记忆（用户通过配置定义的指令），让 Kimi CLI 能在多次会话间保留项目模式、用户偏好与上下文
- **社区反应**：高互动度，是迄今为止呼声最高的增强功能之一

### 🐛 Issue #2598 — ACP/print 流式响应静默挂死
- **链接**：https://github.com/MoonshotAI/kimi-cli/issues/2598
- **作者**：@ai-agent-workbench | **状态**：OPEN | **评论数**：0 | **更新**：2026-08-09
- **重要性**：影响 0.34.0 版本 ACP 模式（`kimi acp`）的生产可用性，属于阻塞级可靠性缺陷
- **内容摘要**：在 ACP 模式与 api.kimi.com 流式对话中，内容 delta 全部到达后连接挂死，终端帧（`[DONE]`/finish）始终不来；CLI 缺乏流式空闲超时配置；新消息到达时挂死轮被静默顶替，且已流式内容**从未写入 wire.jsonl**。0.31.1 仅覆盖了 Esc 场景
- **社区反应**：新提交尚未引发广泛讨论，但缺陷描述详细、复现路径清晰，值得关注

## 4. 重要 PR 进展

> 📊 **数据说明**：过去24小时仅有 1 条 PR 更新。

### 🔧 PR #739 — 修复 Google GenAI 与 MCP 工具的 JSON Schema 兼容性
- **链接**：https://github.com/MoonshotAI/kimi-cli/pull/739
- **作者**：@xiaoju111a | **状态**：OPEN | **创建**：2026-01-28 | **更新**：2026-08-09
- **解决 Issue**：#734
- **内容摘要**：修复 Google GenAI provider 与包含标准 JSON Schema 元数据字段的 MCP 工具（如 Exa MCP）之间的兼容性问题。原因为 GenAI provider 不接受 `additionalProperties: true` 等标准 JSON Schema 字段，导致校验失败
- **影响范围**：所有使用 Google GenAI provider + MCP 工具组合的用户

## 5. 功能需求趋势

从仅有的两条 Issue 中可提炼以下趋势：

1. **🧠 长期记忆 / 上下文持久化**：#1283 反映出用户希望 CLI 从"无状态工具"向"具备项目感知的协作伙伴"演进，这呼应了 AI Agent 领域对持久化记忆的主流趋势
2. **📡 流式协议可靠性**：#2598 暴露了 ACP 流式传输在边界场景下的健壮性不足，社区期待更完善的超时机制与协议兜底
3. **🔌 Provider 兼容性**：#739 显示多模型 provider（Google GenAI）+ 工具协议（MCP）的组合仍存在互操作盲区

> ⚠️ 受限于样本量（仅 2 条 Issue），以上趋势需更大数据样本验证。

## 6. 开发者关注点

基于现有数据，开发者反馈的痛点可归纳为：

- **🚨 静默挂死 vs 显式错误**：#2598 反映出社区更倾向"快速失败"而非"无限等待"，呼吁增加可配置的流式空闲超时
- **📝 数据可观测性**：#2598 中"内容已到达但未落 wire.jsonl"凸显了用户对调试可观测性的需求
- **⚙️ 配置可扩展性**：#1283 提议通过 config.toml 等方式由用户自定义记忆规则，开发者希望降低 CLI 的"黑盒感"
- **🔗 协议适配层质量**：#739 说明在快速接入新 provider 时，规范字段处理仍需打磨

---

> 📌 **报告说明**：本期日报基于过去24小时的有限数据生成（2 条 Issue + 1 条 PR），活跃度低于平均水平。建议在数据样本更充足的工作日进行趋势研判。

---

Let me review this and refine. I think this is a solid report. I should:
- Be transparent about limited data
- Provide quality analysis on what's available
- Use proper formatting
- Include all required sections
- Make the Chinese professional and developer-friendly

Let me check one more time... The user asked for 10 issues and 10 PRs but only 2 and 1 are available. I should be clear about this rather than fabricating. My approach of noting the data limitation is correct.

Let me finalize the response.</think>

# 2026-08-10 Kimi Code CLI 社区动态日报

## 1. 今日速览

过去 24 小时仓库活跃度较低，无新版本发布。社区讨论聚焦两条主线：一是长期高热的**跨会话记忆系统**功能请求（#1283，27 条评论）仍在持续演进；二是新报告的 **ACP 模式流式响应静默挂死**缺陷（#2598），影响 0.34.0 版本生产可用性，属可靠性阻塞问题。同时有一条针对 Google GenAI 与 MCP 工具兼容性的修复 PR（#739）等待审阅。

---

## 2. 版本发布

> 过去 24 小时无新版本发布，本节省略。

---

## 3. 社区热点 Issues

> 📊 **数据说明**：过去 24 小时仅有 2 条 Issue 更新，以下为全部条目（不凑数、不臆造）。

### 🔥 #1283 — Feature Request: Memory System（跨会话持久化上下文）
- **链接**：https://github.com/MoonshotAI/kimi-cli/issues/1283
- **作者**：@CatKang | **状态**：OPEN | **评论数**：27 | **更新**：2026-08-09
- **重要性**：自 2026-02-27 创建以来持续活跃，是社区讨论度最高的增强提案之一，反映出"持久化上下文"是用户对 CLI 形态演进的明确诉求
- **摘要**：提议实现完整的 Memory System，包含自动记忆（AI 自主管理的笔记）与手动记忆（用户通过 config 等方式定义的指令），让 Kimi CLI 在多次会话间保留项目模式、用户偏好与上下文
- **社区反应**：高互动量，27 条评论体现强烈共识；属于"大家都想要但尚未排期"的典型高质量需求

### 🐛 #2598 — ACP/print 流式响应静默挂死
- **链接**：https://github.com/MoonshotAI/kimi-cli/issues/2598
- **作者**：@ai-agent-workbench | **状态**：OPEN | **评论数**：0 | **更新**：2026-08-09
- **重要性**：影响 0.34.0 版本 ACP 模式（`kimi acp`）的生产可靠性，属阻塞级缺陷
- **摘要**：在 ACP 模式与 api.kimi.com 流式对话中，内容 delta 已全部到达但终端帧（`[DONE]`/finish）始终不来；CLI 缺乏流式空闲超时配置；新消息到达时挂死轮被静默顶替，已流式内容**从未写入 wire.jsonl**（无 `content.part`、无 `usage.record`）。0.31.1 仅覆盖了 Esc 场景
- **社区反应**：新提交尚未引发广泛讨论，但缺陷描述详尽、复现路径清晰，建议维护者优先响应

---

## 4. 重要 PR 进展

> 📊 **数据说明**：过去 24 小时仅有 1 条 PR 更新。

### 🔧 #739 — fix(kosong): strip JSON Schema metadata from Google GenAI tool parameters
- **链接**：https://github.com/MoonshotAI/kimi-cli/pull/739
- **作者**：@xiaoju111a | **状态**：OPEN | **创建**：2026-01-28 | **更新**：2026-08-09
- **解决 Issue**：#734
- **内容摘要**：修复 Google GenAI provider 与含标准 JSON Schema 元数据字段的 MCP 工具（如 Exa MCP）之间的兼容性问题。根因为 GenAI provider 不接受 `additionalProperties: true` 等标准 JSON Schema 字段导致校验失败
- **影响范围**：所有使用 `Google GenAI provider + MCP 工具` 组合的用户

---

## 5. 功能需求趋势

基于今日有限样本（2 条 Issue），可观察到的趋势方向：

| 方向 | 代表 Issue | 趋势解读 |
|------|-----------|---------|
| 🧠 **长期记忆 / 上下文持久化** | #1283 | 用户希望 CLI 从"无状态工具"演进为"具备项目感知的协作伙伴"，与 Agent 领域持久化记忆的主流趋势一致 |
| 📡 **流式协议可靠性** | #2598 | 暴露了 ACP 流式传输在边界场景下的健壮性不足，社区期待完善的超时与协议兜底机制 |
| 🔌 **多 Provider × 工具协议互操作** | #739 | 多模型 Provider（Google GenAI）+ 工具协议（MCP）的组合仍存在互操作盲区，需打磨适配层 |

> ⚠️ **注意**：受限于样本量（仅 2 条 Issue），以上趋势仅作初步信号参考，需后续更大样本验证。

---

## 6. 开发者关注点

从现有 Issue/PR 中可提炼开发者反馈的共性痛点：

- **🚨 静默挂死 vs 显式失败**：#2598 反映出开发者更倾向"快速失败并可观测"，呼吁增加可配置的流式空闲超时，而非"内容到了但永远不结束"
- **📝 调试可观测性**：#2598 中"内容已流式到达却未落 wire.jsonl"凸显对 wire-level 日志、错误码、断路机制的强烈需求
- **⚙️ 配置可扩展性**：#1283 提议通过配置文件由用户自定义记忆规则，开发者希望降低 CLI 的"黑盒感"
- **🔗 协议适配层鲁棒性**：#739 显示在快速接入新 Provider 时，规范字段处理、错误归因仍需更系统的回归覆盖

---

> 📌 **报告说明**：本期日报基于过去 24 小时有限数据生成（2 条 Issue + 1 条 PR），活跃度低于平均水平。为保证信息可靠性，未对不足 10 条的列表进行凑数填充；趋势研判部分已显式标注样本局限性。

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

<think>The user wants me to generate a Chinese daily report for OpenCode community dynamics based on GitHub data from 2026-08-10. Let me analyze the data carefully and create a structured report.

Let me first analyze the data:

**Releases (过去24小时): 无** - No new releases in the past 24 hours

**Issues (50 total, showing top 30 by comments):**
Top issues by comments:
1. #20695 - Memory Megathread (124 comments, 96 thumbs) - thdxr - collecting memory issues
2. #4283 - Copy To Clipboard not working (122 comments, 110 thumbs) - maheshmuttintidev - long-standing bug
3. #7602 - Native Model Fallback/Failover Support (29 comments, 107 thumbs) - feature request
4. #785 - Disable streaming mode (29 comments, 38 thumbs) - long-standing
5. #24649 - OpenCode Go clarify models (CLOSED, 18 comments, 32 thumbs) - documentation
6. #34743 - opencode ACP from Xcode 27 beta (15 comments) - ACP issue
7. #13715 - Permission asks from nested subagent (11 comments, 24 thumbs) - bug
8. #39838 - DeepSeek V4 Flash stopped working (CLOSED, 9 comments, 11 thumbs)
9. #30221 - "terminated" error (9 comments, 4 thumbs) - bug
10. #38830 - AutoScroller plugin error (CLOSED, 6 comments, 1 thumb)
11. #27361 - Model options not forwarded (CLOSED, 6 comments, 4 thumbs)
12. #41300 - Leading space in model name (CLOSED, 6 comments, 1 thumb)
13. #9789 - Chinese API concurrency (CLOSED, 5 comments)
14. #25555 - Reverting question answers (4 comments, 5 thumbs) - feature
15. #41306 - deepseek-v4-flash still broken (CLOSED, 4 comments)
16. #41453 - Persistent session daemon (3 comments) - feature request
17. #41322 - OpenCode Go rejects deepseek (CLOSED, 3 comments)
18. #41314 - Leading space bug (CLOSED, 3 comments)
19. #41430 - Billing/subscription issue (CLOSED, 3 comments)
20. #41284 - TUI freezes on blank screen (2 comments)
21. #41294 - reasoningEffort dropped (CLOSED, 2 comments)
22. #39588 - Copy/Paste not work in VS Code Extension (2 comments)
23. #32971 - Free Tier Limit Hit (2 comments)
24. #41448 - Hermes limits issue (2 comments)
25. #38392 - /clear instead of /new (2 comments)
26. #41423 - Can execute only one query (CLOSED, 2 comments)
27. #35093 - Default code concealment state (2 comments)
28. #41436 - Windows hang (CLOSED, 2 comments)
29. #39931 - bash permission escape (2 comments)
30. #41414 - OpenCode stopped responding (CLOSED, 2 comments)

**PRs (50 total, showing top 20 by comments):**
Most PRs have 0 comments. Let me look at the most relevant ones:
1. #41463 - fix(session): omit tool definitions for models that cannot call tools (IngTian)
2. #41460 - chore: merge dev into v2 (opencode-agent[bot])
3. #38067 - fix(session): edge-trigger build-switch reminder (Duo-Huang)
4. #35976 - fix(opencode): add --dir option to web/serve (CLOSED, automated-pr-cleanup)
5. #37584 - fix(session): bound consecutive overflow compaction cycles (a692570)
6. #40427 - experimental perf improvements (Hona) - significant performance work
7. #41350 - feat(app): add animated BusyWave loading indicator (Victozee26)
8. #39358 - feat(session): add durable session archival (kitlangton)
9. #41452 - fix(core): align Copilot response continuation (CLOSED, rekram1-node)
10. #40997 - refactor(core): replace integration prompts with forms (rekram1-node)
11. #41450 - fix(core): derive fallback message for empty AI SDK provider errors (rekram1-node)
12. #41455 - fix(tui): include attachment path in model context (cakeni)
13. #36139 - docs: expand LM Studio local provider guidance (CLOSED)
14. #36110 - fix(tui): highlight full repo:branch (CLOSED)
15. #36108 - fix(opencode): log account requests (CLOSED)
16. #36102 - fix: skip falsy plugin hook returns (CLOSED)
17. #36070 - fix: improve Gemini caching through OpenRouter (CLOSED)
18. #36068 - fix: accept Ollama reasoning field (CLOSED)
19. #36057 - fix(app): restore manage models spacing (CLOSED)
20. #36052 - feat(core): worktree-based workspace switching (CLOSED)

Now let me identify themes:

**Major themes from issues:**
1. **OpenCode Go / Console Go issues** - Multiple related issues about deepseek-v4-flash, billing, model clarity - many closed
2. **Memory issues** - The Memory Megathread (#20695) is ongoing
3. **Clipboard/copy-paste** - Long-standing bug #4283 with 122 comments
4. **Subagent/permisson issues** - #13715
5. **Streaming mode** - #785
6. **Model fallback/failover** - #7602 with 107 thumbs up
7. **Code-related features** - /clear command, code concealment, etc.
8. **IDE/Editor integration** - VS Code Extension, Xcode ACP
9. **Free tier limits** - Hermes/Zen issues
10. **TUI freezes** - Various platforms

**Major themes from PRs:**
1. **Performance improvements** - #40427 experimental perf improvements
2. **Session management** - archival, reminders, compaction
3. **Core fixes** - Copilot, provider errors, forms
4. **TUI fixes** - various
5. **Worktree-based workspace switching** - #36052
6. **Feature additions** - BusyWave, session archival

Let me write the report now in Chinese.</think>

# OpenCode 社区动态日报

**日期：** 2026-08-10
**数据来源：** github.com/anomalyco/opencode

---

## 1. 今日速览

今日 OpenCode 仓库活跃度集中在 **OpenCode Go 服务的稳定性问题** 与 **会话/会话状态管理** 的修复上，多个关于 `deepseek-v4-flash` 在 Go 端点的报错（#41300 / #41306 / #41314 / #41322 等）已陆续关闭。PR 端亮点来自 **大型实验性性能优化**（#40427）与 **V2 系列架构同步**（#41460），同时会话存档、提示压缩循环、附件路径修正等核心议题持续推进。

---

## 2. 版本发布

**过去 24 小时内无新 Release 发布。** 社区反馈集中在 1.18.x 系列（最新被频繁提及时为 1.18.14 / 1.18.15）与 1.17.11 等版本。

---

## 3. 社区热点 Issues

| # | Issue | 状态 | 热度 | 重要性 |
|---|-------|------|------|--------|
| 1 | [#20695](https://github.com/anomalyco/opencode/issues/20695) Memory Megathread | OPEN | 124 评论 / 96 👍 | **核心基础设施** —— 由 thdxr 主导的官方内存问题汇总帖，要求社区提交 heap snapshot，是判断 Next 阶段内存治理走向的关键 |
| 2 | [#4283](https://github.com/anomalyco/opencode/issues/4283) Copy To Clipboard not working | OPEN | 122 评论 / 110 👍 | **长期遗留** —— 自 2025-11 至今，影响响应复制的核心交互；👍 数极高反映用户挫败感 |
| 3 | [#7602](https://github.com/anomalyco/opencode/issues/7602) Native Model Fallback/Failover Support | OPEN | 29 评论 / 107 👍 | **企业级需求** —— 跨模型故障转移呼声强烈，👍 数过百，是当前最被渴望的"稳健性"特性 |
| 4 | [#785](https://github.com/anomalyco/opencode/issues/785) Disable streaming mode | OPEN | 29 评论 / 38 👍 | **兼容性刚需** —— 代理/代理网关不支持流式，需要非流式兜底 |
| 5 | [#13715](https://github.com/anomalyco/opencode/issues/13715) 子代理权限请求 hang 死 | OPEN | 11 评论 / 24 👍 | **子代理体系瓶颈** —— 嵌套 subagent 的权限弹窗未被 TUI 渲染，深层 agent 流被卡住 |
| 6 | [#34743](https://github.com/anomalyco/opencode/issues/34743) Xcode 27 beta 中 ACP 忽略 opencode.json | OPEN | 15 评论 | **IDE 生态** —— macOS 27 + Xcode 27 beta 集成路径仍存在 model 强制覆盖问题 |
| 7 | [#30221](https://github.com/anomalyco/opencode/issues/30221) Go 订阅下 "terminated" UnknownError | OPEN | 9 评论 | **OpenCode Go 稳定性** —— 多模型/多场景均复现，需要 Core 层修复 |
| 8 | [#25555](https://github.com/anomalyco/opencode/issues/25555) question 工具答案支持 /undo / fork | OPEN | 4 评论 / 5 👍 | **会话控制力** —— 增强 question 工具在撤销与分叉中的地位 |
| 9 | [#41453](https://github.com/anomalyco/opencode/issues/41453) Persistent session daemon + zero-tool-call memory recall | OPEN | 3 评论 | **长期记忆方向** —— 跨会话工作区持久化与零工具调用召回 |
| 10 | [#41284](https://github.com/anomalyco/opencode/issues/41284) TUI 启动黑屏冻死 | OPEN | 2 评论 | **macOS 入门体验** —— 多版本复现，强制 kill 才能退出 |

---

## 4. 重要 PR 进展

| # | PR | 类型 | 内容 |
|---|----|------|------|
| 1 | [#41463](https://github.com/anomalyco/opencode/pull/41463) fix(session): omit tool definitions for models that cannot call tools | Bug Fix | 修复 `capabilities.toolcall` 已声明但实际请求未消费的问题，避免给不支持工具调用的模型发送完整工具表，降低 token 消耗与错误率 |
| 2 | [#40427](https://github.com/anomalyco/opencode/pull/40427) [beta] experimental perf improvements | Performance | **本周最大性能 PR**：渲染器初始内存从 7.45 MB 降至 1.82 MB（-75.5%），基于 24 小时 immutable 数据库快照回归 |
| 3 | [#41460](https://github.com/anomalyco/opencode/pull/41460) chore: merge dev into v2 | Merge | 将 dev 分支变更同步至 V2 主线，保留 V2 专属的 App/Desktop/Core/TUI/SDK/Server 架构与本地化能力 |
| 4 | [#37584](https://github.com/anomalyco/opencode/pull/37584) fix(session): bound consecutive overflow compaction cycles | Bug Fix | 限制提示循环中上下文溢出压缩重试次数，避免无限压缩循环 |
| 5 | [#39358](https://github.com/anomalyco/opencode/pull/39358) feat(session): durable session archival | Feature | 新增 Session 一级归档操作，幂等且与删除语义分离，写入 `session.archived` 事实 |
| 6 | [#38067](https://github.com/anomalyco/opencode/pull/38067) fix(session): edge-trigger build-switch reminder | Bug Fix | 改为边沿触发判断 plan→build 模式变更提醒，而非遍历整段会话历史 |
| 7 | [#41450](https://github.com/anomalyco/opencode/pull/41450) fix(core): derive fallback message for empty AI SDK provider errors | Bug Fix | 为空 `message` 的 AI SDK 错误从 `statusCode` / `data.error.code` / `responseBody` 派生可读提示 |
| 8 | [#41452](https://github.com/anomalyco/opencode/pull/41452) fix(core): align Copilot response continuation (CLOSED) | Bug Fix | 同步 VS Code Copilot 客户端的无状态 Responses 续推行为，持久化最终推理项 ID |
| 9 | [#41455](https://github.com/anomalyco/opencode/pull/41455) fix(tui): include attachment path in model context | Bug Fix | 在模型上下文中保留本地附件的 `source.path`，为支持本地路径的 provider 提供更准确上下文 |
| 10 | [#40997](https://github.com/anomalyco/opencode/pull/40997) refactor(core): replace integration prompts with forms | Refactor | 将三方集成（GitHub Copilot / Azure / Cloudflare 等）从提示替换为统一 `Form.Fields` + `Form.Answer` 协议 |

---

## 5. 功能需求趋势

通过对过去 24 小时新增/更新的 Issue 梳理，社区关注的功能方向集中在以下几条主线：

1. **企业级可靠性 —— 模型故障转移与降级**
   - [#7602](https://github.com/anomalyco/opencode/issues/7602) 跨模型 Failover（107 👍）
   - [#27898 / 41430](https://github.com/anomalyco/opencode/issues/41430) 订阅与计费一致性
   - 反映出团队/付费用户对**长跑 Agent** 的失败恢复需求迫切。

2. **会话生命周期管理 —— 存档 / 撤销 / 分叉 / 持久化**
   - [#39358](https://github.com/anomalyco/opencode/pull/39358) Session 归档
   - [#25555](https://github.com/anomalyco/opencode/issues/25555) question 答案可撤销
   - [#41453](https://github.com/anomalyco/opencode/issues/41453) Persistent session daemon + 零工具调用记忆召回
   - 趋势是**让会话成为一个可被 Git 式管理的对象**，而非一次性脚本。

3. **IDE / 编辑器深度集成**
   - Xcode 27 beta ACP（[#34743](https://github.com/anomalyco/opencode/issues/34743)）
   - VS Code Extension 复制粘贴（[#39588](https://github.com/anomalyco/opencode/issues/39588)）
   - 反映 OpenCode 正在从 CLI/TUI 向**多端 IDE 入口**扩展。

4. **本地/自托管模型体验**
   - Ollama 推理字段（[#36068](https://github.com/anomalyco/opencode/pull/36068)）
   - LM Studio 文档（[#36139](https://github.com/anomalyco/opencode/pull/36139)）
   - 流式开关（[#785](https://github.com/anomalyco/opencode/issues/785)）
   - 暗示**本地推理市场的稳定性治理**是下一阶段重点。

5. **性能与编辑器体验（纯前端）**
   - #40427 渲染内存 -75.5%
   - [#41350](https://github.com/anomalyco/opencode/pull/41350) BusyWave 加载动画
   - TUI 启动冻死、多平台 hang 死等问题（[#41284](https://github.com/anomalyco/opencode/issues/41284) / [#41436](https://github.com/anomalyco/opencode/issues/41436)）
   - 即使工具能力强，**最终能否「秒开、丝滑」** 决定了留存。

---

## 6. 开发者关注点

根据 issue 反馈的高频痛点，开发者当前最迫切的诉求可归纳为：

| 痛点类别 | 代表 Issue | 核心诉求 |
|----------|-----------|----------|
| **内存与稳定性** | [#20695](https://github.com/anomalyco/opencode/issues/20695) / [#41284](https://github.com/anomalyco/opencode/issues/41284) / [#41436](https://github.com/anomalyco/opencode/issues/41436) | 长会话不爆内存、TUI 不黑屏、Windows 权限下不卡死 |
| **OpenCode Go 服务稳定性** | [#41300](https://github.com/anomalyco/opencode/issues/41300) / [#41306](https://github.com/anomalyco/opencode/issues/41306) / [#41314](https://github.com/anomalyco/opencode/issues/41314) / [#41322](https://github.com/anomalyco/opencode/issues/41322) / [#41430](https://github.com/anomalyco/opencode/issues/41430) | 网关透传模型名、订阅开通、Billing 一致性 |
| **子代理与权限模型** | [#13715](https://github.com/anomalyco/opencode/issues/13715) / [#39931](https://github.com/anomalyco/opencode/issues/39931) | 嵌套子代理权限可见，bash `--` 绕过风险 |
| **复制/粘贴 / TUI 交互细节** | [#4283](https://github.com/anomalyco/opencode/issues/4283) / [#39588](https://github.com/anomalyco/opencode/issues/39588) | 复制粘贴、命令行 UX 与 IDE 集成一致性 |
| **自定义 Provider 配置透传** | [#27361](https://github.com/anomalyco/opencode/issues/27361) / [#41294](https://github.com/anomalyco/opencode/issues/41294) | reasoning.effort 等 options 真正下发到 OpenAI-compatible / 自定义 provider |
| **免费额度 / 速率限制透明度** | [#32971](https://github.com/anomalyco/opencode/issues/32971) / [#41448](https://github.com/anomalyco/opencode/issues/41448) / [#41414](https://github.com/anomalyco/opencode/issues/41414) | 限额状态可观测、错误可解释 |
| **模型灵活性** | [#7602](https://github.com/anomalyco/opencode/issues/7602) / [#785](https://github.com/anomalyco/opencode/issues/785) | 跨模型 Failover、可关闭 Streaming |

**总结**：
开发者当前最在乎的，是一套能**在长会话/付费订阅/多模型/多 IDE 场景下"敢说它稳"** 的 OpenCode：会话内存

</details>

<details>
<summary><strong>jcode</strong> — <a href="https://github.com/1jehuang/jcode">1jehuang/jcode</a></summary>

<think>The user wants me to generate a Chinese daily report for jcode community dynamics on 2026-08-10. Let me analyze the data carefully and structure the report according to the requested sections.

Let me parse the data:

**Releases:**
1. v0.74.0 - Better ACP controls and focused session workflows
2. v0.73.0 - Focused desktop sessions and provider reliability

**Issues (30 shown out of 44):**
Let me identify the most important ones by comment count and topic:

1. #776 - Ambient email should use OAuth (7 comments) - Security concern about plaintext password
2. #815 - DeepSeek reasoning_content bug (6 comments) - CLOSED
3. #833 - Host-level shared state across sessions (6 comments)
4. #778 - Nix flake / dev shell (5 comments)
5. #828 - claude-opus-5 missing 1m catalog variant (5 comments)
6. #836 - /theme slash command and custom theme palettes (4 comments)
7. #816 - /clear leaks swarm Plan (3 comments) - CLOSED
8. #829 - ACP tool profile excludes MCP tools (3 comments)
9. #855 - Copilot swarm tool 400 error (3 comments) - CLOSED
10. #852 - jcode fails on Linux Homebrew (3 comments) - CLOSED
11. #696 - Rename session picker name (3 comments)
12. #795 - OpenAI-compatible as native OpenRouter (2 comments) - CLOSED
13. #807 - Shift+Tab reselects model (2 comments) - CLOSED
14. #799 - install_release.sh commit misreport (2 comments) - CLOSED
15. #835 - /mcp slash command (2 comments)
16. #837 - @file completion with frecency (2 comments)
17. #839 - Agentic MapReduce / burst swarms (2 comments)
18. #861 - Auto-route image turns to vision model (2 comments)
19. #849 - ACP model switcher OPENROUTER_API_KEY (2 comments) - CLOSED
20. #854 - swarm tool raw error (2 comments) - CLOSED
21. #847 - Custom openai-compatible models assume images (2 comments) - CLOSED
22. #853 - Headless run unbounded recursive listing OOM (2 comments)
23. #582 - Hide unconfigured providers (2 comments)
24. #745 - Package/extension system (2 comments)
25. #845 - Antigravity Gemini 3.6 Flash tool calls (2 comments)
26. #780 - Performance improvements (1 comment)
27. #821 - /commit conventional messages mandatory (1 comment)
28. #822 - Memory retrieval on ACP tasks (1 comment)
29. #823 - Memory candidate retrieval noisy context (1 comment)
30. #825 - Compress raster images, OCR (1 comment)

**Pull Requests (3):**
1. #863 - Fix five reproducible triage issues
2. #856 - fix: resolve safe issues from automated triage
3. #820 - fix: prevent session loss and repair launch lifecycle races

Let me now craft a comprehensive Chinese report. I need to be concise but professional.

For the Issues section, I need to pick 10 most important ones. The criteria should be:
- High comment count
- High priority
- Open status (still active discussion)
- Strategic importance to the project

Let me select:
1. #776 - OAuth for email (security, 7 comments, open)
2. #833 - Host-level shared state (6 comments, architectural)
3. #815 - DeepSeek reasoning bug (6 comments, recently closed)
4. #828 - claude-opus-5 1m variant (5 comments, model support)
5. #778 - Nix flake (5 comments, DX)
6. #836 - /theme command (4 comments, UX)
7. #829 - ACP MCP tools (3 comments, ACP ecosystem)
8. #853 - Headless OOM (2 comments, safety/stability)
9. #839 - Burst swarms RFC (2 comments, architecture)
10. #861 - Auto-route to vision model (2 comments, UX/smart routing)

For PRs, since there are only 3, I'll include all of them.

Let me think about feature trends:
- ACP ecosystem improvements (model switching, MCP integration, memory)
- TUI/UX improvements (themes, MCP toggle, file completion, session rename)
- Multi-agent orchestration (swarm, burst swarms, shared state)
- New model support (claude-opus-5 1m, DeepSeek, vision models)
- Performance & reliability (HTTP/2, OOM protection, install scripts)
- Security (OAuth for email, plaintext password removal)
- Developer experience (Nix flake, package system, commit conventions)
- Memory system improvements

Developer pain points:
- Security: plaintext credentials in binary
- Stability: OOM crashes, swarm errors
- Cross-platform: Homebrew on Linux issues
- Provider compatibility: DeepSeek, OpenAI-compatible quirks
- Multi-agent state coordination
- Memory retrieval accuracy

Now let me write the report in Chinese. I need to be thorough but concise. Let me draft each section:

**1. 今日速览**
v0.74.0 正式发布，主打 ACP 客户端控制和聚焦会话；维护者一天内合并两个批量修复 PR（#863, #856），一次性关闭了多个高优先级 provider 兼容性问题，社区对 OAuth 安全、TUI 体验与多代理编排的讨论最为活跃。

**2. 版本发布**
v0.74.0 - ACP 增强
v0.73.0 - 桌面会话聚焦

**3. 社区热点 Issues**
Pick 10

**4. 重要 PR 进展**
3 PRs

**5. 功能需求趋势**

**6. 开发者关注点**

Let me make sure the report is well-structured and professional. I'll add brief commentary to each issue explaining why it matters.

Let me write this now in Chinese.</think>

# jcode 社区动态日报 · 2026-08-10

> 数据来源：github.com/1jehuang/jcode（过去 24 小时更新：2 个 Release、44 条 Issue、3 个 PR）

---

## 1. 今日速览

**v0.74.0 正式发布**，将"聚焦会话（focused session）"概念下沉到 ACP 客户端层，模型切换、推理强度调节与 `/model` 控制流全部暴露给 ACP host。维护者 @1jehuang 在同一天内连发两个批量修复 PR（#863、#856），一次性关闭 8 个可复现的 provider / 安装路径问题。社区讨论最热的方向集中在 **OAuth 安全替代 SMTP 明文密码**（#776）、**跨会话共享状态**（#833）以及 **Claude Opus 5 的 1M 上下文目录变体缺失**（#828）。

---

## 2. 版本发布

### v0.74.0 — Better ACP controls and focused session workflows
- **ACP 客户端增强**：可在 ACP host 中调用模型列表、切换模型与推理强度，并新增 `/model` 风格 slash command。
- **版本匹配的本地文档搜索**：内置文档与安装的 build 绑定，避免线上文档与本地能力错配。
- **聚焦会话**：会话选择器可按项目、活跃度等条件过滤当前工作集。

### v0.73.0 — Focused desktop sessions and provider reliability
- 桌面端会话面板可"展开"聚焦会话以获得更大工作区。
- 模型切换会保留当前目录 profile（修复切换后丢失上下文的问题）。
- Tab 焦点切换减少冗余终端重绘，降低高刷屏设备的闪烁与 CPU 占用。
- 缺失 swarm 后台服务时给出可操作的错误提示而非裸 OS errno。

---

## 3. 社区热点 Issues（按讨论价值精选 10 条）

| # | 标题 | 状态 | 优先级 | 评论 | 价值点 |
|---|---|---|---|---|---|
| [#776](https://github.com/1jehuang/jcode/issues/776) | Ambient email 应改用 OAuth (Gmail API)，而非明文 SMTP/IMAP 密码 | OPEN | medium | 7 | **安全**：issue 中通过 `strings` 命令直接验证 jcode 二进制内含明文密码字段，是本周最受关注的安全债 |
| [#833](https://github.com/1jehuang/jcode/issues/833) | 同 host 的所有会话应能互相感知 digest（活跃会话、消息尾部、todos、调度任务、memory） | OPEN | — | 6 | **架构**：把"会话孤岛"打通，是后续 burst swarm 与多端协作的基础 |
| [#815](https://github.com/1jehuang/jcode/issues/815) | DeepSeek 系模型在直连 OpenAI 兼容端点上第二轮必报 400（`reasoning_content` 未回传） | CLOSED | — | 6 | **provider 兼容性**：本轮已被 #863 修复，影响 OpenCode Zen 等直连用户 |
| [#828](https://github.com/1jehuang/jcode/issues/828) | claude-opus-5 缺 `[1m]` 目录变体，导致自动压缩在 200k 触发而非 1M | OPEN | — | 5 | **旗舰模型能力**：直接关系 Opus 5 长会话可用性，是高频长任务用户的痛点 |
| [#778](https://github.com/1jehuang/jcode/issues/778) | 增加 Nix flake / dev shell 以支持源码构建 | OPEN | low | 5 | **开发者体验**：NixOS 用户构建需要手工 pin Rust toolchain，flake 化可一劳永逸 |
| [#836](https://github.com/1jehuang/jcode/issues/836) | 新增 `/theme` slash command 与自定义 TOML 主题色板 | OPEN | — | 4 | **个性化**：与 #837 `@file`、#835 `/mcp` 一起构成"TUI 命令化"系列 |
| [#829](https://github.com/1jehuang/jcode/issues/829) | ACP 工具 profile 默认排除 MCP 工具，ACP host 必须显式 `enabled = ["*"]` 才能用 | OPEN | — | 3 | **ACP 生态**：与 v0.74.0 的"ACP 增强"主题直接耦合，影响 Multica、hermes-family 等 ACP host |
| [#853](https://github.com/1jehuang/jcode/issues/853) | Headless `jcode run` 在 bash 被拒后回退到递归目录列表，可能 OOM 整台机器 | OPEN | high | 2 | **安全与稳定性**：明确的"自伤式"失败路径，与 #855 同属"工具被禁用时的回退爆炸"模式 |
| [#839](https://github.com/1jehuang/jcode/issues/839) | RFC：Agentic MapReduce / burst swarms 作为横向并行的补充原语 | OPEN | — | 2 | **架构 RFC**：Kimi-style burst 与现有 persistent swarm/DAG 的分层，明确"长协作 vs 短并行"的语义边界 |
| [#861](https://github.com/1jehuang/jcode/issues/861) | 含图像的回合自动路由到配置的廉价 vision 模型，完成后切回 | OPEN (duplicate) | — | 2 | **智能路由**：是对 #755 静默丢弃图像体验的升级方案，节省 token 成本 |

> 旁注：本期被关闭的 #816、#852、#855、#849、#847、#795、#807、#799、#854 均已合入 #863 / #856，属于"批量可复现 triage"，反映项目当前有自动化分诊流水线在持续运转。

---

## 4. 重要 PR 进展

### [#863](https://github.com/1jehuang/jcode/pull/863) — Fix five reproducible triage issues（已合并）
一次性修复 5 个被自动 triage 标记为 reproducible 的问题：
- `/clear` 创建新会话时重置 stale 的 `swarm_plan_*` 字段（对应 #816）
- DeepSeek 系模型 `reasoning_content` 仅在直连 OpenAI 兼容路由时回传（对应 #815）
- Shift+Tab 在占位 favorite 未匹配时不再误确认（对应 #807）
- `install_release.sh` 在 cargo build 期间嵌入并校验当前 git 元数据（对应 #799）

### [#856](https://github.com/1jehuang/jcode/pull/856) — fix: resolve safe issues from automated triage（已合并）
覆盖 5 个"安全 triage"问题：
- 规范化 Copilot chat-completions 的 tool schema，使内置 `swarm` 工具不再触发 400（对应 #855）
- swarm 后台缺失时给出 actionable 错误（对应 #854）
- 显式 model switch 保留当前命名目录 profile（对应 #849 的近亲）
- 自定义 openai-compatible 模型未声明 `input` 时默认按 text-only 处理（对应 #847）
- Homebrew 启动脚本在 formula 重建时保留参数（对应 #852）

### [#820](https://github.com/1jehuang/jcode/pull/820) — fix: prevent session loss and repair launch lifecycle races（已合并）
- 新 daemon 启动后等待其注册再让 SDK `close()` 放弃
- 增加 `servers.json` 延迟发布的回归测试
- Claude memory sidecar 模型 ID 修正为合法的 Haiku 4.5
- 拒绝空转录的破坏性 checkpoint，保留字节相同的会话

---

## 5. 功能需求趋势

将 30 条开放 Issue 去重归类后，社区当前最关注 5 大方向：

1. **TUI 命令化与个性化** — 短期内出现三连发：#835 `/mcp` 开关、#836 `/theme` 主题、#837 `@file` + frecency 补全。说明 TUI 已成为产品体验的主战场，社区希望把高频动作从"改 TOML + 重启"压缩成一行 slash。
2. **ACP 生态成熟化** — v0.74.0 + #829、#849、#822 一组讨论显示 jcode 正从"Zed 外部 agent"扩展为通用 ACP 适配器，模型/工具/MCP/记忆都需要在 ACP 语义下重新对齐。
3. **多代理与跨会话编排** — #833 共享状态、#839 burst swarms RFC、#854 swarm 可观测性，构成与 Anthropic / Kimi 风格看齐的"长期 swarm + 短期 burst"双层架构提案。
4. **记忆与上下文工程** — #822 / #823 / #825 一组改进（ACP 任务里也要拉 memory、检索去噪、图像压缩 + OCR）显示 memory pipeline 正在被认真打磨，不再是实验性功能。
5. **provider 长尾与旗舰能力补齐** — Claude Opus 5 1M 变体（#828）、DeepSeek 直连回传（#815）、Antigravity Gemini 3.6 Flash 工具调用（#845）、vision 自动路由（#861），体现"模型目录必须跟着上游跑"已成为常态运维。

---

## 6. 开发者关注点（高频痛点）

- **凭据明文落盘**：`strings` 即可挖出 SMTP/IMAP 密码（#776），影响 Ambient email 用户的整条供应链安全。
- **回退路径的安全爆炸**：`bash` 被保护路径拦截后，模型可能瞬间触发无限制的递归目录列表（#853）——失败回退的"代价上限"没有被卡住。
- **provider 长尾易碎**：同一个 OpenAI 兼容 API 在不同 provider 下行为不一致（DeepSeek `reasoning_content`、Antigravity Gemini 工具渲染、自定义模型的 `input` 推断），需要逐个回归。
- **安装链路脆弱**：`install_release.sh` 的 commit hash 漂移导致 AGENTS.md 校验失败（#799）、Homebrew on Linux 包装脚本空参数（#852）——分发渠道与构建脚本的契约尚不严谨。
- **多代理调试体感差**：`/clear` 后旧 swarm plan 残留（#816）、swarm daemon 缺失时只报 `os error 2`（#854），用户很难区分"我配错了"还是"工具坏了"。
- **旗舰模型能力"目录滞后"**：Claude Opus 5 已上线但 jcode 目录里没有 `[1m]` 变体（#828），自动压缩提前 5x 触发，社区对模型目录同步节奏有明确期待。

---

*日报生成时间：2026-08-10 · 数据窗口：过去 24 小时 · 仓库：1jehuang/jcode*

</details>

<details>
<summary><strong>pi</strong> — <a href="https://github.com/earendil-works/pi">earendil-works/pi</a></summary>

<think>The user wants me to generate a daily report for the Pi community based on GitHub data from 2026-08-10. Let me analyze the data and structure it according to the requested sections.

Let me review the data:
- No releases in the past 24 hours
- 33 issues updated (showing top 30 by comments)
- 11 PRs updated

Let me identify the most important issues and PRs:

**Top Issues (by importance, not just comments):**

1. #6922 - Default model cannot be a llama.cpp model - 14 thumbs up, 10 comments - CLOSED - High importance
2. #7730 - High CPU usage on Mac OS - 6 thumbs up, 6 comments - OPEN - Important performance issue
3. #6948 - llama.cpp provider race condition - CLOSED - Related to #6922
4. #3159 - edit tool timeout - CLOSED
5. #7323 - pi update --models fails - CLOSED
6. #7720 - Disable select to copy - OPEN - Feature request
7. #7616 - Chat scroll jumps - CLOSED - TUI bug
8. #7740 - TUI after /reload custom tool rendering - OPEN - Important
9. #7495 - Editor visible issue - CLOSED
10. #7869 - ai21 api broken - CLOSED
11. #7864 - ExtensionContext.exec timeout - CLOSED
12. #7863 - Piped stdin separator - CLOSED
13. #7862 - Concurrent RPC session race - CLOSED
14. #7849 - Package missing from gallery - CLOSED
15. #7871 - Per-model thinking-level persistence - Feature
16. #7870 - z-ai/glm-5.2 context window override - Bug
17. #7868 - Renderer hard-crashes on long lines - Bug
18. #7867 - OpenAI Codex request buffer exhaustion - Bug
19. #7861 - Scroll position jumping - Bug
20. #7860 - EPIPE crash - Bug
21. #7859 - Extension commands via sendUserMessage - Bug
22. #7855 - Response truncated - Bug
23. #6527 - Alt+symbol keybindings - Bug
24. #7854 - MutableModels.refresh() skipped - Bug
25. #7852 - Mouse clicks in textarea - Feature
26. #7850 - GitHub Copilot login 429 - Bug (related to PR #7851)
27. #7848 - Auto-compaction stops task - Bug
28. #7847 - Qwen Token Plan Individual CN - Feature
29. #7846 - Bun runtime crash - Bug
30. #7845 - Port oh-my-pi capabilities - Proposal

**Top PRs:**

1. #7872 - Expose context files at session start - New
2. #7072 - Cache llama.cpp model catalog - Fix for #6948
3. #7866 - Add copyOnSelect option to TuiAltScreen
4. #7865 - Handle pageUp/pageDown in SelectList
5. #7344 - Add remote session wire protocol - Important
6. #7858 - Route extension commands
7. #7857 - Expose expandPromptTemplates - OPEN
8. #7856 - Repair JSON-serialized structured tool arguments
9. #7853 - Fix typo in RPC example
10. #7851 - Enable GitHub Copilot policies sequentially
11. #7844 - Prevent bulk policy updates during login

Now let me identify themes:
- TUI rendering and scrolling bugs are common (#7616, #7495, #7861, #7868, #7740, #7720, #7852)
- llama.cpp integration issues (#6922, #6948, #7072)
- Provider/API issues (ai21, OpenRouter, GitHub Copilot)
- Extension system improvements
- RPC and remote session work
- Mouse/keyboard input handling in TUI

Let me write the report now in Chinese.</think>

# Pi 社区动态日报 · 2026-08-10

## 📌 今日速览

今日 Pi 仓库动态以 **TUI 渲染与交互缺陷** 为核心议题，多个与滚动定位、长行溢出、PageUp/Down 历史导航、文本选择复制相关的 Issue 进入社区视野并有对应 PR 修复。同时，**llama.cpp 内置提供方**与 **GitHub Copilot 登录 429** 两个长期悬而未决的 Bug 也在今日得到修复/合并。远程会话协议层（`@earendil-works/pi-protocol`）的 PR 合并，意味 Pi 向多端/浏览器场景迈出了关键一步。

---

## 🚀 版本发布

过去 24 小时无新版本发布。最近可参考版本为社区 Issue 中频繁提及的 **0.84.1**（存在 Bun 运行时崩溃、EPIPE 崩溃等问题，相关修复 PR 已陆续合并）。

---

## 🔥 社区热点 Issues（精选 10 条）

| # | Issue | 状态 | 评论/👍 | 关键看点 |
|---|---|---|---|---|
| [#6922](https://github.com/earendil-works/pi/issues/6922) | Default model cannot be a llama.cpp model | 🟢 CLOSED | 10 / 👍14 | 今日 👍 最高的 issue。`defaultProvider="llama.cpp"` 时启动报"No models available"。伴随 [#6948](https://github.com/earendil-works/pi/issues/6948) 同一根因（异步刷新竞态）一并关闭，由 [#7072](https://github.com/earendil-works/pi/pull/7072) 缓存目录修复。 |
| [#7730](https://github.com/earendil-works/pi/issues/7730) | High CPU usage on Mac OS with long session | 🟡 OPEN | 6 / 👍6 | macOS 长会话下 CPU 50–110% 抖动，与会话长度/上下文大小相关，尚未定位。性能类问题里关注度最高。 |
| [#7720](https://github.com/earendil-works/pi/issues/7720) | Allow disabling select-to-copy in fullscreen TUI | 🟡 OPEN | 4 | 全屏 TUI 选中即复制易误清剪贴板，已由 [#7866](https://github.com/earendil-works/pi/pull/7866) 提供 `copyOnSelect` 选项修复。 |
| [#7740](https://github.com/earendil-works/pi/issues/7740) | TUI after /reload does not follow custom tool's renderCall/renderResult | 🟡 OPEN | 3 | `/reload` 后 MCP 等基于事件注册的扩展工具渲染异常，涉及加载顺序。 |
| [#7323](https://github.com/earendil-works/pi/issues/7323) | `pi update --models` fails on transient catalog stall | 🟢 CLOSED | 4 | 15 秒超时即放弃整次刷新，无重试。社区提议加指数退避重试。 |
| [#7616](https://github.com/earendil-works/pi/issues/7616) | [TUI] Chat scroll jumps when tool blocks grow | 🟢 CLOSED | 3 | 工具块超出视口时差分渲染触发全屏清屏，缺失 Page Up/Down 历史滚动。已由 [#7865](https://github.com/earendil-works/pi/pull/7865) 在基础 SelectList 中补齐 PageUp/PageDown。 |
| [#7868](https://github.com/earendil-works/pi/issues/7868) | Renderer hard-crashes when a line exceeds terminal width | 🟢 CLOSED | 1 | 单行超宽直接 abort 整个 agent session，属 P0 级稳定性缺陷。 |
| [#7869](https://github.com/earendil-works/pi/issues/7869) | ai21 API broken (410 retired) | 🟢 CLOSED | 2 | AI21 老网关下线，需迁移至新版 Gateway。 |
| [#7850](https://github.com/earendil-works/pi/issues/7850) | GitHub Copilot login 429 for large orgs | 🟢 CLOSED | 1 | 模型多时并发启用策略触发 GitHub 限流，由 [#7851](https://github.com/earendil-works/pi/pull/7851) 顺序启用修复。 |
| [#7845](https://github.com/earendil-works/pi/issues/7845) | Proposal: port four A-level capabilities from oh-my-pi | 🟢 CLOSED | 1 | 提议移植流式规则、子 agent 工具、advisor、跨会话记忆四项能力（PR #7823 已被 gate 自动关闭）。 |

---

## 🛠 重要 PR 进展（精选 10 条）

| # | PR | 类型 | 要点 |
|---|---|---|---|
| [#7872](https://github.com/earendil-works/pi/pull/7872) | feat(coding-agent): expose context files at session start | 新增 | 在 `session_start` 事件中暴露 AGENTS/CLAUDE 上下文文件，补齐文档与单测。 |
| [#7072](https://github.com/earendil-works/pi/pull/7072) | fix(coding-agent): cache llama.cpp model catalog | 修复 | 关闭长期 race condition（#6948），缓存 llama.cpp 目录避免启动期请求竞态。 |
| [#7866](https://github.com/earendil-works/pi/pull/7866) | feat(tui): add `copyOnSelect` option to TuiAltScreen | 新增 | 全屏 TUI 下可关闭"选中即复制"，缓解误清剪贴板。 |
| [#7865](https://github.com/earendil-works/pi/pull/7865) | fix(tui): handle pageUp/pageDown in base SelectList & model-selector | 修复 | 基础 SelectList 与 model selector 缺失 PageUp/PageDown 处理，统一补齐。 |
| [#7344](https://github.com/earendil-works/pi/pull/7344) | feat(protocol): add remote session wire protocol | 新增 | 新增 `@earendil-works/pi-protocol` 包，定义 CBOR 编码 + 长度前缀分帧的远程会话命令/事件/快照。**里程碑级**：为 Pi 走向多端/浏览器铺路。 |
| [#7858](https://github.com/earendil-works/pi/pull/7858) | fix(coding-agent): route extension commands regardless of expandPromptTemplates | 修复 | 修正 `sendUserMessage()` 走 `expandPromptTemplates:false` 时无法触发扩展命令的 bug，恢复 `extensions.md` 文档模式。 |
| [#7857](https://github.com/earendil-works/pi/pull/7857) | feat(agent): expose `expandPromptTemplates` in `sendUserMessage` | 新增（OPEN） | 将模板展开暴露给扩展，由 `mrexodia` 为 toilet-pi 场景提交，仍在评审。 |
| [#7856](https://github.com/earendil-works/pi/pull/7856) | fix(ai): repair JSON-serialized structured tool arguments during validation | 修复 | 修复 `validation.ts` 中对象型参数硬报错与重复序列化工具参数问题。 |
| [#7851](https://github.com/earendil-works/pi/pull/7851) | fix(provider): enable GitHub Copilot model policies sequentially | 修复 | 将并发启用改为顺序启用，解决大组织 Copilot 登录 429。 |
| [#7853](https://github.com/earendil-works/pi/pull/7853) | fix(coding-agent): fix typo in RPC example | 文档 | 修正 RPC 示例中 `--no-extension` → `--no-extensions`。 |

---

## 📈 功能需求趋势

从过去 24 小时 Issues 提炼出五大方向：

1. **TUI 渲染稳定性**（最高频）
   - 长行溢出崩溃（#7868）、滚动跳变（#7616/#7861/#7495）、`/reload` 后渲染异常（#7740）。
   - 显示社区对 **大上下文/长会话下 TUI 健壮性** 需求迫切。

2. **本地/自托管模型支持**
   - llama.cpp 默认模型、catalog 缓存（#6922/#6948/#7072）显示 **内置 llama.cpp 提供方** 已进入可用期，后续重点在配置与启动行为一致性。

3. **扩展（Extension）API 完善**
   - `sendUserMessage` 触发扩展命令（#7859/#7858/#7857）、`session_start` 暴露上下文文件（#7872）、`ExtensionContext.exec` 超时控制（#7864）。扩展正逐步成为 Pi 的核心生态。

4. **多 Provider 与登录稳健性**
   - Copilot 429（#7850）、AI21 网关下线（#7869）、OpenAI Codex 上下文溢出识别（#7867）、Qwen Token Plan 中国区目录（#7847）。**多 provider 边缘场景治理** 持续成为热点。

5. **远程/跨端会话架构**
   - `@earendil-works/pi-protocol`（#7344）合并，标志着 Pi 向 **远程会话/桌面宿主/浏览器场景** 正式进军；同时 RPC 会话替换竞态（#7862）、EPIPE 崩溃（#7860）需要后续加固。

---

## 🧑‍💻 开发者关注点与高频痛点

1. **大上下文下的渲染/性能**
   - macOS 长会话高 CPU（#7730）+ 长行渲染崩溃（#7868）+ 滚动跳变（#7861/#7495）共同指向：**上下文增长后 TUI 渲染路径未充分测试**。

2. **Tool/编辑工具稳定性**
   - Qwen 27b 下 edit 工具超时（#3159）、结构化工具参数双重 JSON 序列化（#7856）。模型/工具组合的容错仍需加固。

3. **CLI 与子进程行为细节**
   - `ExtensionContext.exec` 对 SIGTERM-忽略子进程无强制 kill（#7864）、管道 stdin 缺少分隔符（#7863）。CLI 宿主集成场景的健壮性被持续打磨。

4. **模型目录/版本一致性**
   - z-ai/glm-5.2 远程 catalog 覆盖错误 contextWindow（#7870）、`pi-package` 关键词包 5 天仍未进入 gallery（#7849）、`pi update --models` 单次请求失败即放弃（#7323）。

5. **键盘/鼠标交互完整性**
   - 全屏 TUI 下点击定位光标（#7852）、Kitty 键盘协议缺失时 Alt+symbol 失效（#6527）、选中文本复制可关闭（#7720/#7866）。**"全屏 TUI 应是完整终端 IDE 体验"** 成为越来越多开发者的期望。

6. **自动压缩（auto-compaction）行为可预期性**
   - #7848：压缩可能中断进行中的工具任务而非恢复，社区期望"压缩即恢复任务"成为默认语义。

---

*报告基于 github.com/earendil-works/pi 仓库过去 24 小时更新的 Issues 与 Pull Requests 自动汇总。*

</details>

---
*本日报由 [Big Model Radar](https://github.com/96loveslife/big_model_radar) 自动生成。*
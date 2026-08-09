# AI CLI 工具社区动态日报 2026-08-09

> 生成时间: 2026-08-09 02:05 UTC | 覆盖工具: 8 个

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

<think>The user wants me to generate a horizontal comparative analysis report based on the daily dynamics of 7 AI CLI tools (Claude Code, OpenAI Codex, Gemini CLI, GitHub Copilot CLI, Kimi Code CLI, OpenCode, jcode, pi). Let me organize the data carefully and produce a structured report in Chinese.

Let me first summarize the data from each tool:

**Claude Code:**
- Releases: 1 (v2.1.226)
- Issues: 50 active, top 10 listed
- PRs: 1 (#77492)
- Hot topics: Max plan/Fable 5 billing, Dispatch remote control bugs, Windows/MSIX platform issues, TUI improvements (message queue), MCP integration

**OpenAI Codex:**
- Releases: 1 (rust-v0.148.0-alpha.5)
- Issues: 50 active
- PRs: 14 (mostly hook system)
- Hot topics: Windows Computer Use stability, TUI 0.147.x regressions, hook system refactor, workload identity

**Gemini CLI:**
- Releases: 1 nightly (v0.56.0-nightly.20260809)
- Issues: 50 active
- PRs: 12
- Hot topics: Agent reliability (subagent hangs, MAX_TURNS), Auto Memory quality, Agent-to-Agent nesting

**GitHub Copilot CLI:**
- Releases: 0
- Issues: 23 (8 closed, 15 open)
- PRs: 0
- Hot topics: Session state issues, Windows compat, auth issues, model control

**Kimi Code CLI:**
- Releases: 0
- Issues: 2
- PRs: 0
- Hot topics: Memory system request, runaway generation bug

**OpenCode:**
- Releases: 0
- Issues: 50+ active
- PRs: 12+
- Hot topics: SQLite bloat, deepseek-v4-flash model string bug, copy-paste, performance optimization (75.5% memory reduction)

**jcode:**
- Releases: 1 (v0.72.0)
- Issues: 21
- PRs: 0
- Hot topics: ACP integration (Zed), command-risk false positives, provider compatibility

**pi:**
- Releases: 0
- Issues: 35
- PRs: 12
- Hot topics: openai-codex reliability, auto-compaction, TUI polish, provider abstractions

Let me create the comparative analysis report. I'll be thorough and professional.

For the active comparison table, let me count more accurately:
- Claude Code: 50 issues updated, 1 PR, 1 release
- Codex: 50 issues, 14 PRs, 1 release
- Gemini CLI: 50 issues, 12 PRs, 1 release (nightly)
- Copilot CLI: 23 issues, 0 PRs, 0 releases
- Kimi: 2 issues, 0 PRs, 0 releases
- OpenCode: 50+ issues, 12 PRs, 0 releases
- jcode: 21 issues, 0 PRs, 1 release
- pi: 35 issues, 12 PRs, 0 releases

Cross-cutting concerns I can identify:
1. **Hook/Plugin system maturity** - Claude Code, Codex (heavy refactor), OpenCode (plugin SDK v2), pi (extension API)
2. **Auto-compaction / Context management** - pi (#6879, #7810), Claude Code (queue mode), Gemini (subagent MAX_TURNS), Kimi (memory system)
3. **Windows compatibility** - Claude Code (BSOD, MSIX GPU), Codex (Computer Use), Copilot (silent exit), jcode (PowerShell hooks)
4. **Provider/Model compatibility** - OpenCode (deepseek-v4-flash), pi (DeepSeek fields), jcode (Antigravity/Ollama), Copilot (Anthropic cache_control)
5. **Session state persistence** - Copilot (#4299, #4329, #4397, #4398), Claude Code (Dispatch sync)
6. **TUI/UX polish** - All tools (clipboard, mouse, scroll, paste)
7. **Memory/Persistent Context** - Kimi (#1283), Gemini (Auto Memory), Claude Code (#50246 message queue)
8. **Agent reliability** - Gemini (subagent hangs), Claude Code (Dispatch), pi (auto-compaction)
9. **ACP/MCP ecosystem** - jcode (ACP for Zed), Claude Code (#19054 MCP), Gemini (MCP), Codex (MCP startup)
10. **Auth/Identity** - Codex (workload identity token exchange), Copilot (Enterprise MCP auth, Codespaces), Claude Code (Max plan billing)

Differentiation analysis:
- **Claude Code**: Anthropic ecosystem, heavy IDE integration (VS Code + Desktop), Dispatch remote control, billing complexity
- **Codex**: OpenAI ecosystem, gRPC code-mode host, hook-centric architecture, workload identity
- **Gemini CLI**: Google ecosystem, Agent-first architecture (subagents, skills), Auto Memory
- **Copilot CLI**: GitHub ecosystem, Enterprise focus, ACP parity
- **Kimi CLI**: Moonshot AI ecosystem, focused on long context, basic maturity
- **OpenCode**: Multi-model / BYOK philosophy, performance-focused, plugin SDK v2
- **jcode**: ACP-first, multi-provider with strong custom model support, swarm/burst
- **pi**: Solo developer focus, TUI polish, provider abstraction

Maturity signals:
- Most mature: Claude Code (large user base, billing controversies = many users)
- Fast iteration: Codex (14 PRs in 24h), OpenCode (v2 CI stabilization)
- Quiet/stable: Kimi CLI (2 issues)
- Newer/smaller: jcode, pi (smaller community, but active)

Now let me write this in a structured Chinese report. I'll aim for "concise, professional, with data support".</think>

# AI CLI 工具横向对比分析报告
**数据采集日期：2026-08-09 ｜ 覆盖工具：8 款**

---

## 一、生态全景

2026 年 8 月，AI CLI 工具赛道已从"单一模型 + 单点功能"演化为**多模型路由 + Agent 编排 + 协议互通**的多维战场。各主流厂商的 CLI 不再仅是模型推理入口，而是演变为承担 **会话持久化、扩展生态、IDE/桌面端协同、计费/鉴权、合规与沙箱** 等复杂职责的开发平台。**OpenAI Codex 与 OpenCode 处于最密集的工程迭代期**（单日 12–14 个 PR），**Claude Code 面临用户量增长带来的计费链路信任危机**，**Gemini CLI 在 Agent 子代理可靠性上集中暴露问题**，而 **Kimi CLI 与 pi 等新兴工具**则尝试以差异化定位（长上下文记忆、TUI 极简）切入市场。

---

## 二、各工具活跃度对比

| 工具 | 版本发布 | Issues 更新 | PR 更新 | 24h 综合活跃度 |
|------|---------|------------|--------|--------------|
| **Claude Code** | ✅ v2.1.226（维护性） | ~50 | 1 | 🔥🔥🔥🔥 |
| **OpenAI Codex** | ✅ rust-v0.148.0-alpha.5 | 50 | **14** | 🔥🔥🔥🔥🔥 |
| **Gemini CLI** | ✅ v0.56.0-nightly | 50 | 12 | 🔥🔥🔥🔥 |
| **GitHub Copilot CLI** | ❌ 无 | 23（8 closed） | 0 | 🔥🔥 |
| **Kimi Code CLI** | ❌ 无 | 2 | 0 | 🔥 |
| **OpenCode** | ❌ 无（v1.18.15 桌面回归中） | 50+ | 12 | 🔥🔥🔥🔥 |
| **jcode** | ✅ v0.72.0（ACP 增强） | 21 | 0 | 🔥🔥 |
| **pi** | ❌ 无（仍为 0.84.1） | 35 | 12 | 🔥🔥🔥 |

**关键观察**：
- **PR 产出 Top 2**：OpenAI Codex（14）与 OpenCode、pi（各 12）——前者聚焦 hook 系统重构 + 凭据安全，后者专注 TUI 性能 + 插件生态。
- **Issues 关闭率**：GitHub Copilot CLI 关闭率最高（35%），表明维护响应较积极；Claude Code、Kimi、jcode 多条高优 Issue 已"开放超 3 个月"。
- **版本节奏**：Codex 持续 alpha 滚动、Claude Code 维护性小步快跑、Gemini CLI nightly 自动化，三者构成第一梯队发版节奏。

---

## 三、共同关注的功能方向

以下议题在 **3 个及以上工具** 的社区同步浮现，是当下开发者群体的共识痛点：

### 1. 自动压缩（Auto-Compaction）与上下文管理
| 工具 | 具体诉求 |
|------|---------|
| pi | #6879、#7821：compaction 在 100% 触发而非主动控制；并发 compaction 崩溃（#7810） |
| Claude Code | #50246：消息队列模式（👍 184），避免运行中任务被中断 |
| Gemini CLI | #22323：subagent MAX_TURNS 后误报成功 |
| Kimi Code CLI | #1283：跨会话 Memory System（25 条评论） |

**共识**：长上下文会话的"压缩时机 + 跨会话记忆"仍是未解难题，**没有任何工具提供端到端令人满意的方案**。

### 2. Provider / 模型兼容性碎片化
| 工具 | 具体诉求 |
|------|---------|
| OpenCode | #41300/#41306/#41314：deepseek-v4-flash 模型字符串前导空格 bug |
| pi | #7811 / #7817 / #7807：DeepSeek 字段语义、停止原因解析、推理档位映射 |
| jcode | #518 / #845 / #846 / #847：Antigravity、Ollama、OpenAI-compatible 自定义模型 |
| Copilot CLI | #4256 / #4397 / #4405：Anthropic 缓存、模型恢复、Codespaces 不可用 |
| Claude Code | #79337 / #60093：Fable 5 / Opus 静默切换 |

**共识**：**"多模型接入"≠"开箱即用"**——每个 provider 都有独立的协议怪癖（字段名、停止原因、thought_signature、缓存语义），缺乏统一抽象层。

### 3. Windows 平台稳定性
| 工具 | 具体诉求 |
|------|---------|
| Claude Code | #81698（GPU 崩溃）、#80912（BSOD 0x139）、MSIX 插件安装失败 |
| OpenAI Codex | #37013 / #37180 / #37383：Computer Use 0x8007xxxx 错误族 |
| Copilot CLI | #4285（静默退出）、#4399（PowerShell hooks） |
| jcode | #852：Linux Homebrew wrapper 脚本 |

**共识**：Windows 是 AI CLI 工具的**系统性短板**，从 GPU 驱动到 shell 兼容性到安装路径，覆盖面广泛。

### 4. TUI / 终端体验细节
| 工具 | 具体诉求 |
|------|---------|
| OpenCode | #13984（复制粘贴）、#20989/#29021（退出乱码）、#35649（OSC 8 链接） |
| Codex | #21653（多行状态行 👍 59）、#17103（Ctrl+V 图片粘贴）、#37635（resume 重绘） |
| pi | #7837（OSC 52 覆盖剪贴板）、#7830/#7839（滚动行为） |
| Claude Code | #50246（消息队列）、#84029（mouse-tracking 恢复） |
| Gemini CLI | #21924（resize 闪烁）、#24935（外部编辑器 buffer） |

**共识**：TUI 已成"差异化决胜点"，开发者对**剪贴板语义、滚动步长、粘贴行为、鼠标/键盘边界**的容忍度极低。

### 5. Hook / Plugin / 扩展生态成熟化
| 工具 | 具体诉求 |
|------|---------|
| OpenAI Codex | 14 个 PR 几乎全是 hook 重构（异步、超时、handler 泛化） |
| OpenCode | #41189（slot 区域结构）、#41309（重载 flush）、#12042（Plugin SDK v2） |
| pi | #7824 / #7831 / #7828：扩展 API 增强（RpcClient、markdown transformer） |
| Claude Code | #77492：hookify Write/Edit 规则回归 |

**共识**：**"扩展点"正在从 bonus 变为一等公民**，但每个工具都在用各自术语定义同一概念。

---

## 四、差异化定位分析

| 工具 | 核心定位 | 目标用户 | 技术路线特征 |
|------|---------|---------|-------------|
| **Claude Code** | **模型中心 + 桌面协同** | Anthropic 订阅用户、企业研发 | IDE (VS Code) + Desktop 双向同步、Dispatch 远程调度；计费链路复杂 |
| **OpenAI Codex** | **Hook 化企业平台** | 企业 / CI 集成 / SDK 嵌入 | gRPC code-mode host、workload identity、hook 作为核心抽象 |
| **Gemini CLI** | **Agent-first 编排** | 复杂工作流编排者 | subagent 嵌套、skills/Memory、AST-aware 工具、行为级 eval |
| **GitHub Copilot CLI** | **GitHub 生态入口** | GitHub Enterprise 用户 | ACP parity、Codespaces/Enterprise 深度集成、PR/Issue 工作流 |
| **Kimi Code CLI** | **长上下文 + 记忆** | 中国市场、长会话任务 | 长 context 窗口、Memory System 路线图、社区体量小 |
| **OpenCode** | **BYOK 多模型 + 性能** | 独立开发者 / 多模型尝鲜者 | 极致性能优化（-75.5% 内存）、plugin SDK v2、桌面端 |
| **jcode** | **多 provider + Agent 编排** | ACP / IDE 集成爱好者 | ACP 一等公民、burst swarms RFC、命令风险精细化 |
| **pi** | **极简 TUI + 质量优先** | TUI 爱好者、Solo dev | 不可变 DB 快照、provider 抽象、extension 一等公民化 |

**核心差异点**：
- **生态绑定**：Claude↔Anthropic、Codex↔OpenAI、Gemini↔Google、Copilot↔GitHub 是显性联盟；OpenCode/jcode/pi/Kimi 则主张中立。
- **Agent 哲学**：Gemini 强调"subagent 自治 + 嵌套"；Claude Code 走"Desktop ↔ Remote 调度"；pi/jcode 偏"Solo agent + 工具编排"。
- **扩展机制**：Codex 把 hook 做成核心；OpenCode 用区域化 plugin slot；pi 把扩展 API 当一等公民；Claude Code hookify 仍处早期。

---

## 五、社区热度与成熟度

### 热度梯队

**第一梯队（高活跃 + 高用户基数）**
- **Claude Code**：Issue 量级最大，👍 数极高（#50246 = 184，#29006 = 119），反映真实用户基础；但 PR 流出现"真空"，说明工程重点在内部闭环。
- **OpenAI Codex**：14 个 PR/日 + 50 issues，工程节奏最稳定；hook 重构反映平台化野心。

**第二梯队（高迭代 + 中等用户）**
- **OpenCode**：12 PR/日 + 50+ issues，v2 CI 集中修复，**处于"快速迭代 + 质量爬坡"阶段**。
- **pi**：12 PR/日 + 35 issues，issue 偏 TUI 细节，**反映成熟产品的小修小补**。

**第三梯队（产品形态定位期）**
- **Gemini CLI**：12 PR/日 + 50 issues，但热点集中在"Agent 可靠性"这一产品层而非代码层，**功能已铺开、稳定性待补课**。
- **GitHub Copilot CLI**：23 issues + 0 PR，**工程节奏放缓**，但社区反馈"实而不华"。

**第四梯队（早期 / 小众）**
- **jcode**：21 issues + 0 PR，但 1 个 release + ACP 战略级议题，**社区小但议题密度高**。
- **Kimi Code CLI**：2 issues + 0 PR，**社区体量与活跃度最低**，但单 issue 严重性极高（#2597 失控生成）。

### 成熟度信号

- **CI/CD 健康度**：OpenCode v2 CI 修复记录（#41310 等）说明自动化覆盖仍薄弱；Claude Code、Codex 未见 CI 相关 issue，**反映工程基础设施更成熟**。
- **安全响应**：Codex 的 #37610（workload identity token exchange）+ #37607（子进程凭据隔离）表明**身份安全已成平台级关注**。
- **文档与本地化**：Copilot CLI #4407（中文本地化）说明非英语市场开始被官方重视。

---

## 六、值得关注的趋势信号

### 📈 趋势 1：从"模型接入"到"Provider 协议统一层"的缺失
**信号**：OpenCode（deepseek 空格 bug）、pi（DeepSeek 字段）、jcode（Antigravity thought_signature）都在独立修补 provider 怪癖。
**对开发者的参考**：**短期内不要假设"换模型"是低成本操作**——需为每个 provider 预留调试窗口。中长期期待出现类似 LiteLLM 的统一抽象被原生集成。

### 📈 趋势 2：Hook / Plugin 作为"事实上的扩展标准"正在分化
**信号**：Codex 用"hook engine"统一一切；OpenCode 用"plugin slot + 区域结构"；pi 用"extension API"；Claude Code hookify 仍在修补字段映射。
**对开发者的参考**：**扩展生态的互操作性短期内不会统一**，编写跨 CLI 兼容的扩展仍需逐工具适配；选型时需权衡"hook 能力 vs 文档完整性"。

### 📈 趋势 3：上下文管理进入"分层压缩 + 跨会话记忆"双轨竞争
**信号**：pi 主动压缩时机的争论、Claude Code 队列模式、Kimi Memory System（25 评论）、Gemini Auto Memory。
**对开发者的参考**：**长任务的稳定性将取代"模型推理速度"成为新一代 CLI 的核心卖点**；评估工具时，应关注其 compaction 触发策略与跨会话检索能力，而非只看 TPS。

### 📈 趋势 4：Agent 可靠性（沉默失败）成为用户信任的最大杀手
**信号**：Gemini generalist agent 挂死（#21409，👍8）、subagent MAX_TURNS 误报（#22323）、Claude

---

## 各工具详细报告

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills 社区热点

> 数据来源: [anthropics/skills](https://github.com/anthropics/skills)

<think>The user wants me to analyze the Claude Code Skills community data and generate a report. Let me carefully analyze the data provided.

First, I notice that the PR comment counts are all "undefined" - this is a data issue. I'll need to work with what's available: creation dates, update dates, and the content/quality of the PRs themselves to infer community interest.

Looking at the Issues, I do have actual comment counts:
- #492: 43 comments (highest)
- #228: 16 comments
- #556: 12 comments
- #62: 10 comments
- #1329: 9 comments
- #202: 8 comments
- #412: 6 comments
- #189: 6 comments
- #1487: 4 comments
- #1385: 4 comments
- #1175: 4 comments
- #29: 4 comments
- #16: 4 comments
- #12: 4 comments
- #1169: 3 comments

Since the PR comments are all "undefined", I need to use other signals to rank them. Looking at:
- Number of related issues (cross-reference)
- Update activity (recently updated = active)
- Number of related PRs/Issues addressing similar concerns
- Substance of the PR

Let me identify the key themes:

1. **skill-creator Windows compatibility bugs** - Multiple PRs (#1298, #1099, #1050, #1323, #1261) all addressing run_eval.py issues, especially on Windows. This is clearly a hot topic. Issue #556 (12 comments) and #1169 (3 comments) reference these issues.

2. **Document skills improvements** - #514 (typography), #538 (PDF fix), #486 (ODT), #541 (DOCX fix), #539 (skill-creator validation), #12 (whitespace docx)

3. **New skill proposals** - #1302 (color-expert), #525 (pyxel), #723 (testing-patterns), #181 (SAP), #83 (skill-quality-analyzer/security-analyzer), #1479 (plan-file-hygiene), #1367 (self-audit)

4. **Security concerns** - #492 (43 comments, very high) about trust boundary abuse in anthropic/ namespace

5. **Org-wide sharing** - #228 (16 comments) about sharing skills within organizations

6. **Token/context efficiency** - #1487 (claude-api eagerly injects 156k tokens), #202 (skill-creator needs update for token efficiency)

7. **Reasoning Quality Gate** - #1367 (self-audit) and #1385 (Reasoning Quality Gate Pipeline) - related to AI output quality verification

Let me structure the report:

**热门 Skills 排行** (top PRs by community interest):

Since PR comments are undefined, I'll use signals like:
- Cross-referenced by high-comment issues
- Number of related fix attempts
- Recent activity
- Breadth of impact

The hottest PRs seem to be:
1. #1298 - skill-creator run_eval.py fix (most comprehensive, references 10+ reproductions)
2. #514 - document-typography (universal problem)
3. #210 - frontend-design improvement (popular existing skill)
4. #486 - ODT skill (new format support)
5. #83 - skill-quality-analyzer and skill-security-analyzer (meta skills)
6. #1302 - color-expert (popular contributor)
7. #1367 - self-audit (new quality concept)
8. #525 - pyxel (game dev niche but popular)

**社区需求趋势**:

From Issues:
- Security & trust boundaries (#492) - 43 comments, highest
- Org-wide sharing (#228) - 16 comments
- Cross-platform/Windows compatibility (#556, #1099, #1050) - bug cluster
- Token efficiency (#1487, #202) 
- MCP integration (#16)
- Quality/reasoning audit (#1385, #412)
- Bedrock compatibility (#29)
- Skill lifecycle management (#1329 compact-memory, #1479 plan-file-hygiene)
- Plugin deduplication (#189)

**高潜力待合并 Skills**:

These are OPEN PRs that have substance and may soon merge:
- #1298 (comprehensive skill-creator fix)
- #514 (typography)
- #486 (ODT)
- #210 (frontend-design)
- #83 (meta analyzers)
- #541, #538, #539 (small fixes by @Lubrsy706)
- #1302 (color-expert)
- #1367 (self-audit)
- #525 (pyxel)
- #1479 (plan-file-hygiene)
- #723 (testing-patterns)

**Skills 生态洞察**:

The most concentrated demand appears to be around:
- Skill infrastructure/developer tooling (skill-creator itself is broken on Windows)
- Trust and security boundaries
- Cross-platform compatibility
- Token efficiency in skill definitions
- Quality assurance mechanisms for AI outputs

Let me write this up in Chinese as requested. The user asked for concise and professional language.

I need to be careful: PR comments are all "undefined" - I should note this and use other signals. Actually, looking again, I should just use the data as given and make reasonable inferences based on what's available (issue comments, update dates, related issues, etc.).

Let me draft the report now in Chinese.</think>

# Claude Code Skills 社区热点报告

> 数据截止：2026-08-09 ｜ 数据源：anthropics/skills 仓库

---

## 1. 热门 Skills 排行（Top PRs）

> 注：原数据中 PR 评论数（comments）字段均为 undefined，下文排序综合**关联 Issue 热度、修复链长度、最近活跃度、功能普适性**等信号得出。

### 🥇 #1298 — skill-creator 综合修复（Windows + 评估信号失效）
- **功能**：修复 `run_eval.py` 永远报告 `recall=0%` 的核心 Bug，包括 Windows 流读取、触发检测、并行 worker
- **讨论热点**：关联 Issue #556（12 评论、10+ 独立复现），#1169（字面量 slash-command 也无法触发）；这是整个 skill-creator 优化循环失效的根因
- **状态**：OPEN ｜ 🔗 https://github.com/anthropics/skills/pull/1298

### 🥈 #514 — document-typography（生成文档排版质量控制）
- **功能**：防止孤词换行、寡妇段落、编号错位等 AI 生成文档常见排版缺陷
- **讨论热点**：覆盖"每个 Claude 生成文档都受影响"的普遍痛点；用户极少主动要求好排版，是隐形刚需
- **状态**：OPEN ｜ 🔗 https://github.com/anthropics/skills/pull/514

### 🥉 #210 — frontend-design 可操作性改进
- **功能**：重写 frontend-design skill，确保每条指令在单次对话内可执行、可观察
- **讨论热点**：作为官方最受欢迎的设计类 skill，"指令可落地性"成为社区关注的设计哲学议题
- **状态**：OPEN ｜ 🔗 https://github.com/anthropics/skills/pull/210

### #486 — ODT（OpenDocument 文本技能）
- **功能**：创建/填充/读取/转换 ODT 与 ODS 文件，触达开源 ISO 标准文档生态
- **讨论热点**：填补 LibreOffice 用户群体的能力空白；与 #538 / #541 等 docx/pdf 修复共同构成"文档格式全覆盖"趋势
- **状态**：OPEN ｜ 🔗 https://github.com/anthropics/skills/pull/486

### #83 — skill-quality-analyzer + skill-security-analyzer（元技能）
- **功能**：从 5 个维度评估 Skill 质量；提供安全分析能力
- **讨论热点**：与 #492（安全命名空间滥用、43 评论）直接呼应，是社区对"Skill 治理"诉求的工程化回应
- **状态**：OPEN ｜ 🔗 https://github.com/anthropics/skills/pull/83

### #1302 — color-expert（颜色专家）
- **功能**：覆盖 ISCC-NBS/Munsell/XKCD/RAL/OKLCH 等色彩命名系统与色彩空间选择指南
- **讨论热点**：自包含、强复用，可被任何涉及颜色任务的 Skill 调用；近期仍在迭代（最新更新 2026-07-21）
- **状态**：OPEN ｜ 🔗 https://github.com/anthropics/skills/pull/1302

### #1367 — self-audit（自审计：机械校验 + 四维推理质量门）
- **功能**：交付前审计 AI 输出——先机械校验文件存在性，再按"损坏严重度优先级"做四维推理审查
- **讨论热点**：与 Issue #1385（Quality Gate Pipeline 提案）形成体系化闭环；通用性强，可跨技术栈与模型使用
- **状态**：OPEN ｜ 🔗 https://github.com/anthropics/skills/pull/1367

### #525 — pyxel（复古游戏开发）
- **功能**：通过 pyxel-mcp 服务让 Claude 可编写、运行、捕获、迭代像素风游戏
- **讨论热点**：MCP + Skill 协作的典型范例；游戏开发是高频创意场景；最长讨论链之一（最新更新 2026-07-15）
- **状态**：OPEN ｜ 🔗 https://github.com/anthropics/skills/pull/525

---

## 2. 社区需求趋势

| 需求方向 | 代表 Issue | 热度 | 核心诉求 |
|---|---|---|---|
| **🔒 安全与信任边界** | #492（43 评论） | ⭐⭐⭐⭐⭐ | 社区 Skill 借 `anthropic/` 命名空间冒充官方，构成权限提升风险 |
| **🏢 组织级共享** | #228（16 评论、👍8） | ⭐⭐⭐⭐ | 摆脱"下载→Slack→手动上传"的低效分发，企微集成需求迫切 |
| **🪟 跨平台兼容（Windows）** | #556（12 评论）+ #1169 | ⭐⭐⭐⭐ | `run_eval.py` 在 Windows 完全不可用，开发者工作流断裂 |
| **💰 Token 效率** | #1487、#202 | ⭐⭐⭐ | `claude-api` 一次注入 156k token 撑爆上下文；skill-creator 自身过于啰嗦 |
| **🧠 推理质量保障** | #1385、#412 | ⭐⭐⭐ | 需要"预校准→对抗性审查→交付验证"三段式质量门 |
| **🔌 MCP 化暴露** | #16（4 评论） | ⭐⭐⭐ | 希望 Skill 能像 MCP 一样以函数化 API 暴露给其他 Agent |
| **📦 Skill 生命周期管理** | #1329、#1479 | ⭐⭐⭐ | 规划制品无生命周期、累积膨胀（plan-file-hygiene / compact-memory 提案） |
| **🧩 插件去重** | #189（6 评论、👍9） | ⭐⭐⭐ | document-skills 与 example-skills 安装内容重复，污染上下文 |
| **☁️ 多平台适配** | #29 | ⭐⭐ | AWS Bedrock 用户无明确接入路径 |
| **📄 文档格式鲁棒性** | #12（4 评论） | ⭐⭐ | docx 操作引入空白导致 Word/LibreOffice 无法读取 |

---

## 3. 高潜力待合并 Skills（OPEN 且活跃）

以下 PR 满足**近期更新 + 功能完整 + 关联高热度 Issue** 标准，最有可能近期落地：

| PR | Skill | 关键优势 | 链接 |
|---|---|---|---|
| **#1298** | skill-creator 综合修复 | 直接解锁 `run_loop.py` / `improve_description.py` 全链路 | [🔗](https://github.com/anthropics/skills/pull/1298) |
| **#514** | document-typography | 痛点普适、几乎无争议 | [🔗](https://github.com/anthropics/skills/pull/514) |
| **#486** | ODT | 补齐开源文档生态空白 | [🔗](https://github.com/anthropics/skills/pull/486) |
| **#83** | skill-quality/security-analyzer | 直接响应 #492 安全诉求 | [🔗](https://github.com/anthropics/skills/pull/83) |
| **#1302** | color-expert | 设计领域高频复用件 | [🔗](https://github.com/anthropics/skills/pull/1302) |
| **#1367** | self-audit | 与 #1385 提案互补，质量保障赛道标杆 | [🔗](https://github.com/anthropics/skills/pull/1367) |
| **#1479** | plan-file-hygiene | 直接解决 Issue #1417，规划制品治理 | [🔗](https://github.com/anthropics/skills/pull/1479) |
| **#525** | pyxel | MCP+Skill 协作样板，活跃维护中 | [🔗](https://github.com/anthropics/skills/pull/525) |
| **#541 / #538 / #539** | docx/pdf/skill-creator 小修 | @Lubrsy706 系列低风险修复，建议批量化合并 | [#541](https://github.com/anthropics/skills/pull/541) [#538](https://github.com/anthropics/skills/pull/538) [#539](https://github.com/anthropics/skills/pull/539) |
| **#723** | testing-patterns | 测试金字塔完整方法论，工程刚需 | [🔗](https://github.com/anthropics/skills/pull/723) |

---

## 4. Skills 生态洞察

> **社区最集中的诉求是"Skill 自身的可信赖生产化"**——即希望 Skills 既能被安全分发、可信署名、跨平台运行，又能自我审计输出质量、控制 token 消耗，而非继续堆叠更多功能孤岛。

换言之：基础设施类（治理/安全/兼容/质量门）的关注度已显著超过纯功能类（文档/游戏/设计）的扩展速度，Skills 生态正从"功能建设期"迈入"工程化运营期"。

---

<think>Let me analyze the GitHub data for Claude Code community dynamics on 2026-08-09.

Key observations:
1. Latest release: v2.1.226 - just bug fixes and reliability improvements
2. The data appears to be a hypothetical/fictional scenario from August 2026, mentioning models like "Fable 5", "Opus 5", "Opus 4.8", "Sonnet 5", etc.
3. Top issues by comments:
   - #79337: Fable 5 Max plan issue (70 comments, 23 likes) - very important
   - #50246: Message queue feature request (50 comments, 184 likes) - very popular enhancement
   - #29006: Remote control for desktop sessions (36 comments, 119 likes)
   - #19054: VS Code MCP servers not working (24 comments, 26 likes)
   - #81698: Windows desktop GPU crash (15 comments)
   - #84352: Cyber safeguard blocks on approved org (13 comments)
   - #83436: Cyber-safeguard false positives (11 comments)
   - #80058: Dispatch disabled on macOS (10 comments)
   - #60093: Model switched without consent, $1,050 overcharge (10 comments)
   - #67303: Dispatch can't reach desktop (8 comments)

4. PRs: Only 1 PR in the data - #77492 about hookify fix

5. Notable trends:
   - Fable 5 / Max plan issues (multiple related)
   - Dispatch feature (mobile-to-desktop) has many bugs
   - Windows/MSIX platform issues
   - Cyber-safeguard false positives
   - TUI issues (mouse tracking, terminal state)
   - MCP integration problems

Let me structure this as a Chinese daily report. The user asked for:
1. 今日速览
2. 版本发布
3. 社区热点 Issues (10个)
4. 重要 PR 进展 (10个 - but only 1 available, need to handle this)
5. 功能需求趋势
6. 开发者关注点

Since there's only 1 PR, I'll need to handle that gracefully - I can mention the available PR and note that PR volume was low, or pick from the broader PR landscape if I can infer any. Actually, the user said "挑选 10 个重要的 PR" but only 1 was provided. I should be honest about this and provide what's available, perhaps supplementing with mention that the PR activity was quiet.

Let me write this in clean Chinese, professional tone for technical developers.

Note: The data is clearly fictional/future-dated (2026). I should treat it as a realistic scenario for the report.</think>

# Claude Code 社区动态日报
**日期：2026-08-09**

---

## � 今日速览

今日 Claude Code 发布 v2.1.226 小版本（仅含 bug 修复与稳定性改进），社区焦点集中在 **Max 计划与 Fable 5 模型相关的成本/授权争议** 以及 **Dispatch（移动端远程调度桌面会话）功能的多平台缺陷**。Windows / MSIX 桌面端持续暴露 GPU 崩溃、插件安装与内核 BSOD 等稳定性问题，开发者对 TUI 体验优化（如消息队列、终端鼠标恢复）的呼声依然强烈。

---

## 🚀 版本发布

**v2.1.226**（2026-08-09）
- 本次为维护性更新，Changelog 仅列出 "Bug fixes and reliability improvements"，无新功能披露。
- 社区关注的 Opu5 上下文窗口错误（#81693）、MSIX GPU 崩溃（#81698、#83028）等高优先级 bug 暂未在 release notes 中明确点名修复，建议关注后续回归版本。
- 链接：https://github.com/anthropics/claude-code/releases/tag/v2.1.226

---

## 🔥 社区热点 Issues

| # | 标题 | 评论 | 👍 | 关注价值 |
|---|------|------|---|----------|
| [#79337](https://github.com/anthropics/claude-code/issues/79337) | Fable 5 在 Max 计划上误报 "usage credits required" 并静默降级到 Opus 4.8 | 70 | 23 | **本周最热**：涉及计费/授权/模型路由三重链路，影响所有 Max 订阅用户，多个相关 issue 串并联 |
| [#50246](https://github.com/anthropics/claude-code/issues/50246) | [Feature Request] 消息队列模式——排队而非中断正在运行的任务 | 50 | **184** | **👍 数最高**：开发者工作流痛点，已存在超 3 个月未合并 |
| [#29006](https://github.com/anthropics/claude-code/issues/29006) | 在 Claude Desktop 中开启 Claude Code 会话的远程控制 | 36 | 119 | Desktop App 与 Code 协同的战略级功能，互动热度稳定 |
| [#19054](https://github.com/anthropics/claude-code/issues/19054) | VS Code 扩展完全无法加载 MCP 服务器 | 24 | 26 | 阻碍 Claude Code 在 IDE 中使用外部工具的核心问题 |
| [#81698](https://github.com/anthropics/claude-code/issues/81698) | Windows 桌面端 GPU 进程崩溃（exit 101457950）连带杀光全部会话 | 15 | 0 | 高严重度 Windows 平台稳定性 bug，影响 RTX 50 系显卡 |
| [#84352](https://github.com/anthropics/claude-code/issues/84352) | 已通过 CVP 审批的组织在 Claude Code 中仍遭遇 cyber-safeguard 拦截 | 13 | 0 | 合规/企业客户关注，影响科研、防御类工作流 |
| [#83436](https://github.com/anthropics/claude-code/issues/83436) | 科学计算（IR 光谱仪标定）触发的 cyber-safeguard 误报，Opus 5 与 4.8 均被阻断 | 11 | 0 | 误报问题在累积上下文下高发，是 cyber-safeguard 系列 bug 的代表 |
| [#80058](https://github.com/anthropics/claude-code/issues/80058) | macOS 桌面端 Dispatch 功能失效（移动端正常） | 10 | 1 | 平台一致性 bug，与 #67303 / #84035 / #79410 共同构成 Dispatch 缺陷集群 |
| [#60093](https://github.com/anthropics/claude-code/issues/60093) | 模型被静默切换为 Opus，三天产生 $1,050 账单 | 10 | 0 | **CLOSE 但争议未平**：成本放大器与未经同意的模型切换问题，开发者强烈不满 |
| [#67303](https://github.com/anthropics/claude-code/issues/67303) | Dispatch 持续显示 "Can't reach your desktop"，需服务端配对重置 | 8 | 0 | Windows Cowork / Desktop 协同链路上的硬阻塞 |

**Honorable Mentions**：#80912（Windows 内核 BSOD 0x139，与 #30137 同签名）、#81693（Opus 5 上下文窗口被错报为 200k，导致 statusline 失真）、#85131（Android 应用切换会话时草稿丢失）、#84029（崩溃后终端陷入 mouse-tracking 模式，恢复 handler 注册路径错误）。

---

## 🛠 重要 PR 进展

> 过去 24 小时仓库活跃 PR 数量稀少，仅 1 条进入 Top 列表，整体处于功能待合入的"平台期"。

- **[#77492](https://github.com/anthropics/claude-code/pull/77492)** `fix(hookify): match Write and prompt rules`
  - 修复 hookify 插件中 Write/Edit 规则与 UserPromptSubmit 字段映射的回归，新增三类规则的覆盖测试。该 PR 自 7 月中旬提交后一直处于开放状态，反映 hook 子系统在新规则语法下仍存在隐式契约不稳定的问题。

> 建议关注：当前版本号已升至 v2.1.226，但本周可见的合入 PR 数量极少，说明工程团队可能将精力投入到 Dispatch / Fable 计费链路等高敏感修复上，公开 PR 流出现"真空"。

---

## 📈 功能需求趋势

从过去 24 小时活跃的 50 条 issue 中提炼，社区关注的功能方向按热度排序：

1. **IDE 与桌面端深度集成**（≈ 25%）
   - VS Code 中 MCP 不可用（#19054）
   - Desktop App 远程控制 Claude Code 会话（#29006，👍 119）
   - Desktop 端 GPU 崩溃与捆绑 CLI 的 ECONNRESET（#81698, #84818）

2. **多模型路由与成本透明度**（≈ 20%）
   - Max/Fable 计费链路 bug（#79337, #79410, #81693）
   - 模型静默切换与费用审计（#60093）
   - 上下文窗口大小错误报告（#81693）

3. **TUI/终端体验改进**（≈ 18%）
   - 消息队列模式（#50246，👍 184，本周最受欢迎 feature request）
   - 终端 mouse-tracking 模式崩溃后无法恢复（#84029）
   - 复制粘贴与滚动条冲突（#68602、#70688）

4. **Dispatch（移动↔桌面协同）**（≈ 15%）
   - macOS/Windows 平台差异、配对失效、UI 抖动（#80058, #67303, #84035, #79410）

5. **安全与合规（cyber-safeguard）**（≈ 12%）
   - 已审批组织仍被拦截（#84352）
   - 科学计算误报（#83436）

6. **MCP 生态**（≈ 10%）
   - OAuth 连接器下工具拉取失败但静态 Token 可用（#74210）

---

## 👨‍💻 开发者关注点

**核心痛点（按出现频次）：**

1. **计费与授权链路不可预测**：Fable 5 与 Max 计划之间的"使用额度 vs 订阅"边界模糊，是本周开发者愤怒的最大公约数。多条 issue 直指"模型被静默降级 / 静默切换 / 状态栏报错"导致成本失控。

2. **Windows 平台成为稳定性重灾区**：MSIX 安装路径上集中爆发 GPU 崩溃、内核 BSOD、Defender 实时扫描导致的 `EBUSY` 插件安装失败等问题，企业用户在受管环境（非管理员权限）下尤其困难。

3. **Dispatch 功能被快速推上线但跨平台质量参差**：iOS/Android 移动端 → Desktop 的"远程接管"愿景被开发者高度期待，但 macOS 与 Windows 实现差异、250ms UI 抖动、配对状态无法重置等问题说明功能尚未走完工程化闭环。

4. **TUI 中断模型需要重构**：开发者强烈希望 Claude 在执行任务时能"接收但不打断"后续消息（队列模式），#50246 的 184 票👍反映了这一需求的产品价值——它直接影响"思考-反馈"节奏与 token 浪费。

5. **Cyber-safeguard 误伤合法科研 / 安全研究工作流**：已通过 CVP 审批的组织仍被拦截（#84352），同时 IR 光谱仪标定等纯科学计算也会触发误报（#83436），反映上下文累积场景下的策略判定过于粗糙。

6. **小但尖锐的体验缺陷**：Android 草稿丢失（#85131）、Claude 忘记已 memorize 的命令（#81092）、崩溃后终端卡死（#84029）——这些"低级别但高频"的问题正在累积负面口碑，建议纳入下一轮 UX 专项。

---

*数据来源：[anthropics/claude-code](https://github.com/anthropics/claude-code) Issues / Pull Requests / Releases*
*覆盖窗口：2026-08-08 ~ 2026-08-09*

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

<think>The user wants me to generate a Chinese daily report for OpenAI Codex community dynamics based on GitHub data from 2026-08-09. Let me analyze the data carefully and structure the report according to the requirements.

Key observations from the data:
1. One new release: rust-v0.148.0-alpha.5
2. 50 issues updated, showing top 30 - many are Windows-related bugs, especially around Computer Use, TUI, and app issues
3. 14 PRs updated, most from copyberry[bot] - showing automated/AI-driven development patterns

Let me organize the content:

**Today's Highlights:**
- New alpha release 0.148.0-alpha.5
- Multiple Windows Computer Use issues showing platform pain points
- Many TUI/CLI bug reports for 0.147.0 release

**Hot Issues (top 10):**
1. #21653 - Multi-line status line (most popular with 59 likes)
2. #27284 - SSH remote project "No chats" bug
3. #37013 - Windows Computer Use stale exec context
4. #37458 - Codex extension fails to start on Windows
5. #37180 - Windows Computer Use approval prompt missing
6. #37383 - Computer Use 0x80070003 error
7. #15756 - Symlinked SKILL.md (CLOSED)
8. #34076 - Desktop loses local project registrations
9. #33074 - Windows mouse stutter
10. #17103 - Ctrl+V text paste issue

**Important PRs (top 10):**
1. #37645 - Plugin install failure analytics
2. #37644 - Generalize hook handler execution
3. #37641 - Use step context for command approval prefix rules
4. #31817 - Update models.json
5. #37622 - Include buffered turns when editing prompts
6. #37618 - Step environments for Guardian approval reviews
7. #37610 - Workload identity token exchange support
8. #37607 - Prevent launch context from reaching child processes
9. #37538 - Expose execution mode in hook listings
10. #37533 - Support asynchronous command hooks

**Functional Trend Analysis:**
- TUI/CLI improvements (status line, Ctrl+V handling)
- Windows Computer Use stability
- Hook system enhancements
- Remote/session management
- Auth/identity (workload identity token exchange)
- Multi-IDE support

**Developer Pain Points:**
- Windows platform reliability (Computer Use, extension loading)
- TUI usability issues
- Session/thread state management
- Performance issues on Windows

Let me write this in Chinese now with proper structure and links.</think>

# OpenAI Codex 社区动态日报 · 2026-08-09

## 📌 今日速览

今日 Codex 仓库发布了 `rust-v0.148.0-alpha.5` 新版本，Issues 活跃度聚焦在 **Windows 平台 Computer Use 稳定性** 与 **TUI/CLI 0.147.x 版本的交互缺陷**。PR 侧由 `@copyberry[bot]` 主导的"Hook 系统重构 + 凭据安全"主题几乎包揽所有合并，涉及异步命令钩子、gRPC code-mode 主机服务和工作负载身份令牌交换等关键能力。

---

## 🚀 版本发布

### [rust-v0.148.0-alpha.5](https://github.com/openai/codex/releases/tag/rust-v0.148.0-alpha.5)

新版 alpha 聚焦 TUI 与 CLI 内部优化。建议关注 [#37635](https://github.com/openai/codex/issues/37635)（TUI 在 resume 时反复重绘 scrollback）等回归问题，如有问题请及时反馈至 0.148 alpha 通道。

---

## 🔥 社区热点 Issues（Top 10）

| # | Issue | 👍 | 评论 | 重要性 |
|---|-------|---|------|--------|
| 1 | [#21653](https://github.com/openai/codex/issues/21653) Support multi-line status line | **59** | 13 | ⭐⭐⭐⭐⭐ 长期高需求 TUI 增强，社区呼声最高 |
| 2 | [#27284](https://github.com/openai/codex/issues/27284) SSH 远程项目"No chats"但 state DB 中存在 | 5 | 12 | ⭐⭐⭐⭐ 严重影响远程协作体验 |
| 3 | [#37013](https://github.com/openai/codex/issues/37013) Windows Computer Use 跨 JS 调用复用陈旧 exec context | 3 | 11 | ⭐⭐⭐⭐ Windows Computer Use 核心缺陷 |
| 4 | [#37458](https://github.com/openai/codex/issues/37458) Codex 扩展无法启动（Windows） | 0 | 11 | ⭐⭐⭐⭐ 全新安装即遇，影响用户首日体验 |
| 5 | [#37180](https://github.com/openai/codex/issues/37180) Windows Computer Use 审批弹窗缺失 | 2 | 8 | ⭐⭐⭐⭐ 安全流程断裂 |
| 6 | [#37383](https://github.com/openai/codex/issues/37383) Computer Use 0x80070003 枚举失败 | 4 | 8 | ⭐⭐⭐⭐ Windows 路径枚举兼容 |
| 7 | [#15756](https://github.com/openai/codex/issues/15756) Symlinked SKILL.md 未被发现（已 CLOSED） | 2 | 7 | ⭐⭐⭐ Skills loader 生态兼容修复 |
| 8 | [#34076](https://github.com/openai/codex/issues/34076) Desktop 丢失本地项目注册 | 0 | 6 | ⭐⭐⭐ 会话/项目元数据一致性 |
| 9 | [#33074](https://github.com/openai/codex/issues/33074) Windows 启动时鼠标卡顿 | 9 | 6 | ⭐⭐⭐ 影响整个系统级体验 |
| 10 | [#17103](https://github.com/openai/codex/issues/17103) Ctrl+V 仅作图片粘贴（缺文本粘贴） | 0 | 5 | ⭐⭐⭐ TUI 基础交互缺陷 |

> **趋势观察**：Windows + Computer Use 相关 issue 占今日活跃总量的近 40%，已成为当前最显著的稳定性瓶颈。

---

## 🛠️ 重要 PR 进展（Top 10）

| # | PR | 状态 | 说明 |
|---|----|----|------|
| 1 | [#37645](https://github.com/openai/codex/pull/37645) Improve plugin install failure analytics | CLOSED | 新增 HTTP 状态子类用于区分远程目录/包下载失败根因 |
| 2 | [#37644](https://github.com/openai/codex/pull/37644) Generalize hook handler execution | CLOSED | 统一 hook handler 类型路由到 hooks 引擎，保留 command hook 行为 |
| 3 | [#37641](https://github.com/openai/codex/pull/37641) Step context for command approval prefix rules | CLOSED | 从当前 step context 读取 `allow_prefix_rules`，避免陈旧 turn 快照 |
| 4 | [#31817](https://github.com/openai/codex/pull/31817) Update models.json | OPEN | GitHub Actions 自动同步模型清单 |
| 5 | [#37622](https://github.com/openai/codex/pull/37622) Include buffered turns when editing prompts | CLOSED | 编辑 prompt 时合并 replay buffer 中的 live turns |
| 6 | [#37618](https://github.com/openai/codex/pull/37618) Step environments for Guardian approval reviews | CLOSED | Guardian 审批使用当前 step 选择的环境，避免 stale snapshot |
| 7 | [#37610](https://github.com/openai/codex/pull/37610) Add workload identity token exchange support | CLOSED | 新增 `codex-workload-identity` crate，交换 JWT 断言为短期 ChatGPT 凭据 |
| 8 | [#37607](https://github.com/openai/codex/pull/37607) Prevent launch context from reaching child processes | CLOSED | 将 `OPENAI_FEDERATION_RULE_ID` 等变量标记为非可继承 |
| 9 | [#37538](https://github.com/openai/codex/pull/37538) Expose execution mode in hook listings | CLOSED | `HookMetadata` 暴露 `executionMode`（sync/async） |
| 10 | [#37533](https://github.com/openai/codex/pull/37533) Support asynchronous command hooks | CLOSED | 后台运行异步 command hook，受 per-session 并发限制约束 |

**附加亮点**：
- [#37530](https://github.com/openai/codex/pull/37530) **gRPC code-mode 主机服务**：导出 `GrpcCodeModeHost`，支持租约会话、工具订阅与通知
- [#37527](https://github.com/openai/codex/pull/37527) **超时 hook 进程树终止**：Unix 进程组 / Windows Job Object，超时回收全树
- [#37528](https://github.com/openai/codex/pull/37528) 外部 agent 检测解耦，避免阻塞配置请求

---

## 📈 功能需求趋势

从近 24h 活跃 Issues 提炼的社区关注方向：

| 方向 | 代表 Issue | 社区热度 |
|------|----------|---------|
| **TUI 体验增强** | #21653, #17103, #35292, #37635 | 🔥🔥🔥🔥🔥 状态行多行 / 文本粘贴 / Esc-Esc 行为 / resume 重绘 |
| **Windows Computer Use 稳定性** | #37013, #37180, #37383, #37281, #37509, #37595 | 🔥🔥🔥🔥🔥 node_repl exec context 与 0x8007xxxx 错误族 |
| **IDE 扩展跨平台兼容** | #37458, #35479, #35182, #37627 | 🔥🔥🔥🔥 VS Code / Antigravity 中加载失败 |
| **远程 / 会话管理** | #27284, #34076, #34767 | 🔥🔥🔥 SSH 项目丢失 / 重复 active turn |
| **Hook / Plugin 生态** | #37644, #37533, #37538, #37645 | 🔥🔥🔥 异步 hook、handler 类型泛化 |
| **凭据与身份安全** | #37610, #37607 | 🔥🔥🔥 workload identity token exchange |
| **gRPC code-mode 主机** | #37530 | 🔥🔥 新基础设施 |

---

## 🧑‍💻 开发者关注点（痛点 / 高频需求）

**1. Windows Computer Use 是当前最大痛点**
多个 issue 指向同一根因：`node_repl exec context` 在多次 JS 调用之间未被正确传递或重建，叠加 `0x80070003` / `0x80070424` 等 Windows 错误码，导致发现窗口、截图、审批全链路不可用。社区急需一次系统性重构。

**2. TUI 在 0.145 → 0.147 期间的回归**
- Esc-Esc 误改 reasoning effort（#35292）
- 分页历史回填时反复重绘 scrollback（#37635）
- Ctrl+V 仅识别为图片粘贴（#17103，跨越 4 个月仍未关闭）
- MCP "startup interrupted" 假阳性（#37418）

**3. 扩展加载与 Windows 资源**
多个 VS Code / ChatGPT Desktop 用户反馈 "couldn't load its resources"，疑似新版扩展运行时与 Windows 资源打包流程不兼容（#37458, #35182）。

**4. 会话 / 项目状态机的健壮性**
桌面端项目注册丢失（#34076）、远程 SSH 显示空 chats（#27284）、同一线程出现双活跃 turn（#34767），反映出会话状态机在多入口（CLI / App / Remote）协同下的脆弱性。

**5. 安全与可观测性诉求上升**
PR #37610、#37607、#37645 表明社区正在推动 **workload identity 标准化**、**子进程凭据隔离** 与 **插件失败分析可观测化** —— 这三项已并入主线。

**6. Hook 系统成为扩展主战场**
本周 PR 几乎全部围绕 hook：异步执行、超时回收、executionMode 暴露、handler 泛化 —— 表明 Codex 正在把 hook 作为第三方能力扩展的核心抽象。

---

*日报基于 openai/codex 在 2026-08-09 的公开 GitHub 数据自动生成，仅供参考。*

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

<think>Let me analyze the GitHub data for Gemini CLI and create a comprehensive Chinese daily report for 2026-08-09.

Key observations from the data:

1. **Releases**: There's a new nightly release v0.56.0-nightly.20260809.gcf22ac7e8
2. **Issues**: 50 issues updated in past 24 hours, with the top 30 shown. The most commented issue is #22323 about subagent recovery after MAX_TURNS
3. **PRs**: 12 PRs updated, including a major one about allowing agents to call agents (#28738), and various bug fixes

Let me organize the report:

**Top Issues by importance/comments:**
1. #22323 - Subagent recovery after MAX_TURNS reports GOAL success (12 comments)
2. #21409 - Generalist agent hangs (8 comments, 8 thumbs up)
3. #19873 - Zero-Dependency OS Sandboxing (8 comments)
4. #24353 - Robust component level evaluations (7 comments)
5. #22745 - AST-aware file reads (7 comments)
6. #21968 - Gemini doesn't use skills/sub-agents enough (6 comments)
7. #26522 - Stop Auto Memory from retrying low-signal sessions (5 comments)
8. #26525 - Auto Memory logging redaction (4 comments)
9. #25166 - Shell command execution gets stuck (4 comments, 3 thumbs up)
10. #22232 - Browser agent session takeover (4 comments)

**Top PRs:**
1. #28739 - Automated version bump (nightly release)
2. #28738 - Allow agents to call agents (large feature)
3. #28737 - OpenAI compatible auth (closed)
4. #28619 - Update .gitignore
5. #28735 - Fix formatTruncatedToolOutput
6. #28736 - OAuth callback timeout
7. #28679 - Vertex AI 401 error message
8. #28734 - EACCES in resolveToRealPath
9. #28526 - VSCode companion leaks (closed)
10. #28608 - Fall back to stable models on 404

Let me write the report in Chinese now.</think>

# Gemini CLI 社区动态日报

**日期**：2026-08-09
**数据来源**：github.com/google-gemini/gemini-cli

---

## 📌 今日速览

今日 Gemini CLI 发布了 v0.56.0 nightly 版本（基于 commit `gcf22ac7e8`），社区讨论热度集中在 **Agent 子代理执行可靠性** 与 **Auto Memory 安全/质量** 两个方向。最受关注的 PR 是开启 **Agent-to-Agent 嵌套调用** 能力（#28738），同时社区仍持续反馈 generalist agent 挂死、shell 卡在 "Waiting input" 等长期未解决的 P1 问题。

---

## 🚀 版本发布

### v0.56.0-nightly.20260809.gcf22ac7e8

nightly 自动构建版本，包含若干 agent 行为修复与核心稳定性改进。
🔗 [查看 Release](https://github.com/google-gemini/gemini-cli/compare/v0.56.0-nightly.20260808.gcf22ac7e8...v0.56.0-nightly.20260809.gcf22ac7e8)
🔗 [PR #28739](https://github.com/google-gemini/gemini-cli/pull/28739)

---

## 🔥 社区热点 Issues（Top 10）

### 1. [#22323](https://github.com/google-gemini/gemini-cli/issues/22323) — Subagent 达到 MAX_TURNS 后被误报为 GOAL success ⭐P1
`area/agent` | 💬12 | 👍2
子代理即使未完成任务仍返回 `status: "success"`，掩盖了真实的中断；严重影响 `codebase_investigator` 等核心子代理可靠性，是当前最活跃的 bug 讨论。

### 2. [#21409](https://github.com/google-gemini/gemini-cli/issues/21409) — Generalist agent 无响应挂死 ⭐P1
`area/agent` | 💬8 | 👍8（最高赞）
用户报告任何委派给 generalist agent 的任务（包括创建文件夹）都会无限挂起，关闭子代理可解决。社区情绪强烈。

### 3. [#19873](https://github.com/google-gemini/gemini-cli/issues/19873) — 利用 Gemini 3 的 bash 亲和性构建零依赖 OS 沙箱 ⭐P2 / Effort: Large
`area/agent` | 💬8 | 👍1
提出针对 Gemini 3 "原生 bash 用户" 特性的零依赖 OS 沙箱与执行后意图路由，是重要的架构演进议题。

### 4. [#24353](https://github.com/google-gemini/gemini-cli/issues/24353) — 构建稳健的组件级评估体系 ⭐P1
`area/agent` / `aiq/eval_infra` | 💬7
继 [#15300](https://github.com/google-gemini/gemini-cli/issues/15300) 引入行为级 eval 后，目前已有 76 个测试覆盖 6 个模型；推进评估基础设施成熟化。

### 5. [#22745](https://github.com/google-gemini/gemini-cli/issues/22745) — 评估 AST 感知的文件读取/搜索/映射的价值
`area/agent` | 💬7 | 👍1
探索通过 AST-aware 工具减少误读轮次与 token 噪声，可能提升 `codebase_investigator` 与全仓探索效率。

### 6. [#21968](https://github.com/google-gemini/gemini-cli/issues/21968) — Gemini 很少主动使用 skills 与 sub-agents ⭐P1
`area/agent` | 💬6
用户经验性反馈：明确指令才会调用自定义 subagent。涉及模型自主能力与提示工程调整。

### 7. [#26522](https://github.com/google-gemini/gemini-cli/issues/26522) — Auto Memory 不应无限重试低信号会话
`area/agent` | 💬5
当提取 agent 选择不读取低信号会话时，会话一直保持未处理并可能被反复拉出，造成后台噪音。

### 8. [#25166](https://github.com/google-gemini/gemini-cli/issues/25166) — Shell 命令完成后仍卡在 "Waiting input" ⭐P1
`area/core` | 💬4 | 👍3
即使是最简单的 shell 命令，Gemini CLI 也常在执行完后误判为仍在等待用户输入，需手动干预。

### 9. [#21983](https://github.com/google-gemini/gemini-cli/issues/21983) — Browser subagent 在 Wayland 下失败 ⭐P1
`area/agent` | 💬4 | 👍1
Linux Wayland 用户无法使用 browser subagent，影响跨平台稳定性。

### 10. [#22672](https://github.com/google-gemini/gemini-cli/issues/22672) — Agent 应避免破坏性命令（`git reset --force` 等）
`area/agent` | 💬3 | 👍1
希望 Agent 在复杂 git/DB 场景下自动选择更安全的替代方案，而非使用不可逆操作。

> 另外值得跟踪：[#26525](https://github.com/google-gemini/gemini-cli/issues/26525)（Auto Memory 确定性脱敏）、[#22232](https://github.com/google-gemini/gemini-cli/issues/22232)（Browser Agent 自动接管锁定的 profile）、[#21763](https://github.com/google-gemini/gemini-cli/issues/21763)（bug 报告缺少 subagent 上下文）。

---

## 🛠️ 重要 PR 进展（Top 10）

### 1. [#28738](https://github.com/google-gemini/gemini-cli/pull/28738) — **允许 Agent 调用 Agent（嵌套子代理）** `area/agent`, Size: L
修复 [#22092](https://github.com/google-gemini/gemini-cli/issues/22092)。通过 subagent 的 `tools:` frontmatter 让其委派给其它 subagent（甚至自我递归），是 Agent 体系的关键能力升级。

### 2. [#28739](https://github.com/google-gemini/gemini-cli/pull/28739) — 自动化版本升级到 v0.56.0-nightly
`gemini-cli-robot` 自动发起的常规版本变更。

### 3. [#28737](https://github.com/google-gemini/gemini-cli/pull/28737) — OpenAI 兼容鉴权（已 CLOSED）
Size: XL。新增 OpenAI 兼容认证路径，被作者关闭，可能将由其它 PR 接续。

### 4. [#28734](https://github.com/google-gemini/gemini-cli/pull/28734) — 修复 macOS Seatbelt 沙箱在 Git 仓库 CWD 中崩溃 ⭐P1
在 `resolveToRealPath` 中扩展对 `EACCES` 的处理，避免启用 Seatbelt 时启动崩溃。

### 5. [#28736](https://github.com/google-gemini/gemini-cli/pull/28736) — OAuth 回调超时清理 `area/security`
修复 [#28652](https://github.com/google-gemini/gemini-cli/issues/28652)。`startCallbackServer` 中 resolve/reject 包入清理逻辑，避免鉴权完成后遗留定时器。

### 6. [#28735](https://github.com/google-gemini/gemini-cli/pull/28735) — 修复 `formatTruncatedToolOutput` 输出膨胀 ⭐P1
修复 [#28620](https://github.com/google-gemini/gemini-cli/issues/28620)，添加保护逻辑防止非正 `maxChars` 时输出被异常放大。

### 7. [#28619](https://github.com/google-gemini/gemini-cli/pull/28619) — .gitignore 忽略 `.env` 与 `.ai` 文件并补单测 ⭐P1
降低敏感凭据泄露与 AI 临时产物污染仓库的风险。

### 8. [#28679](https://github.com/google-gemini/gemini-cli/pull/28679) — Vertex AI 鉴权 401 错误信息优化
仅传 Gemini API Key 而未配置 GCP 凭据时，给出更清晰、可操作的错误提示。

### 9. [#28608](https://github.com/google-gemini/gemini-cli/pull/28608) — Preview 模型 404 时回退到稳定模型 `area/agent`
修复 [#28600](https://github.com/google-gemini/gemini-cli/issues/28600)。`USE_GEMINI` 鉴权下，预览模型无权限时会优雅回退，避免单点 404 拖死会话。

### 10. [#28526](https://github.com/google-gemini/gemini-cli/pull/28526) — 修复 VSCode 伴生扩展 Disposable 泄漏（已 CLOSED）
修正 `activate()` 中括号错位造成的 `gemini.diff.accept` 与 workspace 监听器未被回收。

> 另可关注 [#28606](https://github.com/google-gemini/gemini-cli/pull/28606)（"Setapart" 大型重构 PR，p1）。

---

## 📈 功能需求趋势

通过对 Issues 的关键词聚类，社区当下关注的方向集中在以下几条主线：

| 方向 | 代表性 Issue |
|---|---|
| **Agent 体系成熟化（嵌套 / 自治 / 鲁棒性）** | #22323、#21409、#21968、#22093、#20195 |
| **Auto Memory 质量与隐私** | #26522、#26525、#26523、#26516 |
| **更智能的代码理解（AST aware）** | #22745、#22746 |
| **浏览器/Shell 子代理的稳定性** | #21983、#22232、#22267、#25166、#22465 |
| **安全沙箱与权限模型** | #19873、#22672、#25166 |
| **行为级 eval 与基础设施** | #24353、#22745、#22598 |
| **核心 IDE / 终端体验** | #21924、#24935、#22466 |

可以清晰看到 **"Agent 可靠性"已超越"新模型接入"成为社区第一痛点**。

---

## 💬 开发者关注点

1. **Agent 挂死 / 沉默失败是最致命痛点**
   - generalist agent 长时间无响应（[#21409](https://github.com/google-gemini/gemini-cli/issues/21409)，👍8）；
   - 子代理 MAX_TURNS 后仍宣称成功（[#22323](https://github.com/google-gemini/gemini-cli/issues/22323)）。
   这类问题让用户无法判断任务真实进度，严重打击对自动化的信任。

2. **Shell 交互与 terminal UI 的脆弱性反复出现**
   - 卡在 "Waiting input"（[#25166](https://github.com/google-gemini/gemini-cli/issues/25166)）；
   - 终端 resize 时高刷闪烁（[#21924](https://github.com/google-gemini/gemini-cli/issues/21924)）；
   - 退出外部编辑器导致 buffer 损坏（[#24935](https://github.com/google-gemini/gemini-cli/issues/24935)）。

3. **Auto Memory 新机制带来新问题**
   - 低信号会话反复重试、会话内容进入模型上下文后才"脱敏"、无效 patch 被静默丢弃——开发者要求更强的确定性、可观测性。

4. **Skills / Sub-agents 利用率不足**
   - 用户希望 Agent 更主动地触发已有自定义能力，而非每次都被显式提醒（[#21968](https://github.com/google-gemini/gemini-cli/issues/21968)）。

5. **跨平台 / 桌面环境兼容性**
   - Wayland 下 browser subagent 直接失败（[#21983](https://github.com/google-gemini/gemini-cli/issues/21983)）、macOS Seatbelt CWD 沙箱崩溃（[#28734](https://github.com/google-gemini/gemini-cli/pull/28734)）等问题提示：**Linux 桌面与 macOS 沙箱仍是非 happy-path 场景**。

6. **Agent 调用能力被社区期待**
   - #28738 PR 关注的"Agent 可调用 Agent"能力被视为构建复杂工作流的关键拼图，与本期 #22672（抑制破坏性行为）形成互补，共同推动 Agent 可控性与编排能力。

---

*日报生成基于 2026-08-09 当日数据。如需切换为周报或聚焦特定模块（如 security / agent），可继续告诉我。*

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

<think>The user wants me to generate a daily report for GitHub Copilot CLI community dynamics based on the provided data. Let me analyze the data carefully.

Looking at the data:
- No new releases in the past 24 hours
- 23 issues updated in the past 24 hours
- 0 PRs updated in the past 24 hours

Let me categorize the issues:

**CLOSED Issues:**
1. #4299 - Typing latency over long sessions (bug, 👍1, 2 comments)
2. #4129 - Banner "once" behaves like "always" (bug, 2 comments)
3. #4411 - Auto-mode feature idea (invalid/triage, 1 comment)
4. #4329 - Autopilot not enabled when resuming session (bug, 1 comment)
5. #4285 - Silent exit 1 at session startup with log levels (bug, 👍2, 1 comment)
6. #4256 - Add cache_control breakpoints to Anthropic requests (feature, 👍3, 1 comment)
7. #4406 - "Let" (invalid/spam)
8. #4404 - "عاب" (invalid/spam)

**OPEN Issues:**
1. #4410 - /agent pop-up treats AGENTS.md as custom agent (bug, 1 comment)
2. #4275 - ACP: expose contextTier as session config option (feature, 1 comment)
3. #4412 - Auto-mode range and settings feature idea (feature, 0 comments)
4. #4409 - No indication when cli_remote_control_enabled is false (bug, 0 comments)
5. #4408 - github-mcp-server /mcp authenticate fails on Copilot Enterprise (bug, 0 comments)
6. #4407 - Add Chinese (zh-CN) UI localization (feature, 0 comments)
7. #4394 - Allow disabling/remapping Ctrl+C twice to exit (feature, 0 comments)
8. #4395 - Restore quick delete action in sessions view (feature, 0 comments)
9. #4397 - Resume session switches back to default model (bug, 0 comments)
10. #4398 - allowed_directories in permissions.config never loaded (bug, 0 comments)
11. #4399 - Cross-tool Claude hooks with shell operators break on Windows (bug, 0 comments)
12. #4400 - Fix browser login URL wrapping and fallback (bug, 0 comments)
13. #4401 - Regression: skill tool cannot find valid skills (bug, 0 comments)
14. #4402 - npm bin/copilot is loader, not version pin (bug, 0 comments)
15. #4405 - Copilot Free in Codespaces "No model available" (bug, 0 comments)

Key themes I can identify:
1. **Model-related issues** - #4256 (cache_control), #4397 (default model on resume), #4405 (no model available), #4411/#4412 (auto-mode range)
2. **Windows platform issues** - #4285, #4399, #4401
3. **Session management** - #4299, #4329, #4395, #4397
4. **Authentication/Login** - #4400, #4405, #4408, #4409
5. **Permissions** - #4329, #4398
6. **Localization** - #4407 (Chinese)
7. **ACP (Agent Communication Protocol)** - #4275
8. **Skills/Agents** - #4410, #4401
9. **Installation/Versioning** - #4402

For the report:
1. **今日速览**: No releases, lots of bug reports, key themes around session management, authentication, and Windows compatibility
2. **版本发布**: Skip since no releases
3. **社区热点 Issues**: Pick top 10 most important
4. **重要 PR 进展**: Skip since no PRs
5. **功能需求趋势**: Model control, localization, ACP parity, session management
6. **开发者关注点**: Pain points and common needs

Let me select the 10 most important issues:
1. #4299 - Typing latency (HIGH 👍, critical UX issue)
2. #4256 - cache_control for Anthropic (HIGH 👍3, performance feature)
3. #4285 - Silent exit on Windows (HIGH 👍2, critical bug)
4. #4329 - Autopilot not resumed (session continuity bug)
5. #4402 - npm bin version not pinned (installation issue)
6. #4405 - Codespaces "No model available" (auth/policy bug)
7. #4408 - github-mcp-server auth fails on Enterprise (Enterprise bug)
8. #4397 - Resume session model reset (session bug)
9. #4398 - allowed_directories not loaded (permissions bug)
10. #4400 - Browser login URL wrapping (auth UX bug)

Or I could include more feature requests:
- #4275 - ACP contextTier parity (important for ACP ecosystem)
- #4407 - Chinese localization
- #4394 - Ctrl+C remapping
- #4395 - Quick delete sessions
- #4411/#4412 - Auto-mode range

Let me prepare the report now. I'll write it in Chinese with a professional, technical tone.</think>

# GitHub Copilot CLI 社区动态日报
**日期：2026-08-09**

---

## 📌 今日速览

过去 24 小时内 Copilot CLI 仓库**无新版本发布**，但社区活跃度依然较高，共 **23 条 Issue 更新**，其中 8 条被关闭、15 条仍处于开放状态。本日的焦点议题集中在**会话状态恢复异常**（autopilot/模型）、**Windows 平台兼容性问题**（静默退出、Claude hooks、skills 加载）以及**认证链路故障**（Codespaces、Enterprise MCP、浏览器登录）三大方向。社区反馈中性能优化（如 Anthropic 缓存复用）与功能可配置性（auto-mode 范围、ACP parity）受到较多关注。

---

## 🚀 版本发布

无（过去 24 小时无新 Release）

---

## 🔥 社区热点 Issues（Top 10）

### 1. [#4299](https://github.com/github/copilot-cli/issues/4299) — 长会话中输入延迟持续累积 [CLOSED]
- **类型**：Bug ｜ **👍 1** ｜ **💬 2**
- **影响版本**：1.0.76-5
- **要点**：运行后台代理的长时间会话，输入延迟严重恶化，导致系统几乎不可用。这是高频用户的核心痛点，直接影响生产环境可用性。

### 2. [#4256](https://github.com/github/copilot-cli/issues/4256) — 为 Anthropic 请求添加 cache_control 断点 [CLOSED]
- **类型**：Feature ｜ **👍 3** （当日最高点赞）｜ **💬 1**
- **要点**：Claude 后端未设置 `cache_control` 断点，系统提示、工具定义、长上下文每次都要全量重算。属高价值性能优化，社区呼声高。

### 3. [#4285](https://github.com/github/copilot-cli/issues/4285) — 1.0.76-1 在标准 log level 下静默退出码 1 [CLOSED]
- **类型**：Bug ｜ **👍 2** ｜ **💬 1**
- **影响平台**：Windows ｜ **影响版本**：1.0.76-1
- **要点**：当日志级别为 `none/error/warning/info/debug` 时，CLI 无任何输出直接退出，仅 `all`/`default` 正常。Windows 用户被广泛影响。

### 4. [#4329](https://github.com/github/copilot-cli/issues/4329) — 恢复会话时 Autopilot 实际未启用 [CLOSED]
- **类型**：Bug ｜ **💬 1**
- **影响版本**：1.0.77
- **要点**：状态栏显示 autopilot 已开启，但实际任何需审批的操作均失败——典型的"看似工作实则不工作"的状态不一致问题。

### 5. [#4402](https://github.com/github/copilot-cli/issues/4402) — `npm bin/copilot` 是 loader 而非版本锁定 [OPEN]
- **类型**：Bug ｜ **影响版本**：1.0.77 → 1.0.78
- **要点**：同一路径 101 秒内可加载不同版本，`--prefer-version` 虽可用但未文档化。对 CI/CD 与生产环境是严重隐患。

### 6. [#4405](https://github.com/github/copilot-cli/issues/4405) — Codespaces 中 Copilot Free 报 "No model available" [OPEN]
- **类型**：Bug ｜ **涉及**：authentication, models
- **要点**：即便 Copilot Free 文档声称支持 Codespaces，更新/重选模型/重登后仍立刻失败，提示权限问题。影响新用户体验。

### 7. [#4408](https://github.com/github/copilot-cli/issues/4408) — Enterprise 账户 `github-mcp-server` OAuth 必败 [OPEN]
- **类型**：Bug ｜ **涉及**：MCP, authentication
- **要点**：Enterprise 路由账户的 MCP 主机发布跨域资源标识符导致 OAuth 元数据发现失败，**`/mcp` 流程完全不可用**——对 Enterprise 用户是阻塞性问题。

### 8. [#4397](https://github.com/github/copilot-cli/issues/4397) — Resume 会话后自动切回默认模型 [OPEN]
- **类型**：Bug ｜ **影响版本**：1.0.78
- **要点**：使用 `--model=gpt-5.6-terr...` 启动的会话，恢复后被静默切回默认，违背用户显式选择。

### 9. [#4398](https://github.com/github/copilot-cli/issues/4398) — `allowed_directories` 配置从未被加载 [OPEN]
- **类型**：Bug ｜ **涉及**：permissions, configuration
- **要点**：`permissions.config` 中 `allowed_directories` 完全失效，`/list-dirs` 看不到任何配置项。配置驱动的权限模型存在破窗。

### 10. [#4399](https://github.com/github/copilot-cli/issues/4399) — Windows PowerShell 下 Claude hooks 跨平台命令失败 [OPEN]
- **类型**：Bug ｜ **涉及**：platform-windows
- **要点**：`.claude/settings.local.json` 中的 POSIX shell 操作符（`||`、`&&`）在 PowerShell 环境下执行失败，仓库复用性受损。

> **其他值得关注的 Issue**：[#4401](https://github.com/github/copilot-cli/issues/4401) (skills 加载回归)、[#4400](https://github.com/github/copilot-cli/issues/4400) (浏览器登录 URL 渲染)、[#4409](https://github.com/github/copilot-cli/issues/4409) (remote control 静默失效)、[#4410](https://github.com/github/copilot-cli/issues/4410) (`/agent` 误识别 AGENTS.md)

---

## 🔧 重要 PR 进展

无（过去 24 小时无 PR 更新）

---

## 📈 功能需求趋势

| 方向 | 代表 Issue | 社区关注度 |
|------|------------|------------|
| **模型控制精细化** | [#4411](https://github.com/github/copilot-cli/issues/4411)、[#4412](https://github.com/github/copilot-cli/issues/4412)、[#4256](https://github.com/github/copilot-cli/issues/4256) | ⭐⭐⭐ |
| **会话/状态管理** | [#4299](https://github.com/github/copilot-cli/issues/4299)、[#4329](https://github.com/github/copilot-cli/issues/4329)、[#4395](https://github.com/github/copilot-cli/issues/4395)、[#4397](https://github.com/github/copilot-cli/issues/4397) | ⭐⭐⭐ |
| **认证 & 远程控制** | [#4400](https://github.com/github/copilot-cli/issues/4400)、[#4405](https://github.com/github/copilot-cli/issues/4405)、[#4408](https://github.com/github/copilot-cli/issues/4408)、[#4409](https://github.com/github/copilot-cli/issues/4409) | ⭐⭐⭐ |
| **Windows 平台兼容** | [#4285](https://github.com/github/copilot-cli/issues/4285)、[#4399](https://github.com/github/copilot-cli/issues/4399)、[#4401](https://github.com/github/copilot-cli/issues/4401) | ⭐⭐⭐ |
| **权限/沙箱配置** | [#4329](https://github.com/github/copilot-cli/issues/4329)、[#4398](https://github.com/github/copilot-cli/issues/4398) | ⭐⭐ |
| **ACP/非交互式 parity** | [#4275](https://github.com/github/copilot-cli/issues/4275) | ⭐⭐ |
| **本地化（i18n）** | [#4407](https://github.com/github/copilot-cli/issues/4407) | ⭐ |
| **键位/快捷键可定制** | [#4394](https://github.com/github/copilot-cli/issues/4394) | ⭐ |
| **Skills/Agents 体系** | [#4401](https://github.com/github/copilot-cli/issues/4401)、[#4410](https://github.com/github/copilot-cli/issues/4410) | ⭐⭐ |

---

## 💡 开发者关注点

### 🚨 痛点 Top 5

1. **会话状态不可信**：Autopilot 状态显示、模型选择、权限目录——三类核心配置在 resume 后均出现"看似生效、实则失效"的问题（[#4329](https://github.com/github/copilot-cli/issues/4329)、[#4397](https://github.com/github/copilot-cli/issues/4397)、[#4398](https://github.com/github/copilot-cli/issues/4398)）。开发者无法信任 CLI 持久化层。

2. **Windows 一等公民诉求未满足**：静默退出、shell 操作符兼容、skills 加载回归——三个独立 Issue 说明 Windows 上的回归测试覆盖不足（[#4285](https://github.com/github/copilot-cli/issues/4285)、[#4399](https://github.com/github/copilot-cli/issues/4399)、[#4401](https://github.com/github/copilot-cli/issues/4401)）。

3. **认证与远程链路脆弱**：Codespaces 免费层、Enterprise MCP、浏览器登录 URL、Remote Control 静默失败——任何一环出错均无清晰排错路径（[#4400](https://github.com/github/copilot-cli/issues/4400)、[#4405](https://github.com/github/copilot-cli/issues/4405)、[#4408](https://github.com/github/copilot-cli/issues/4408)、[#4409](https://github.com/github/copilot-cli/issues/4409)）。

4. **版本管理混乱**：`npm bin/copilot` 作为 loader 而非 pin 严重影响 CI/CD 可重复性，官方文档未提及 `--prefer-version`（[#4402](https://github.com/github/copilot-cli/issues/4402)）。

5. **长会话性能劣化**：输入延迟随会话时长恶化，对依赖后台 agent 的工作流是阻塞性问题（[#4299](https://github.com/github/copilot-cli/issues/4299)）。

### 🌟 高频需求

- **模型路由可控性**：希望为 auto-mode 设置最小/最大模型强度及偏置（[#4411](https://github.com/github/copilot-cli/issues/4411)、[#4412](https://github.com/github/copilot-cli/issues/4412)）
- **Anthropic prompt caching**：通过 `cache_control` 断点降低长上下文成本（[#4256](https://github.com/github/copilot-cli/issues/4256)）
- **ACP 与交互模式 parity**：非交互/外部客户端需要 `contextTier` 等配置选项（[#4275](https://github.com/github/copilot-cli/issues/4275)）
- **UI 本地化**：呼声来自非英语用户群体，中文为首要诉求（[#4407](https://github.com/github/copilot-cli/issues/4407)）
- **键位可定制**：与终端习惯冲突的"Ctrl+C 二次退出"应可关闭（[#4394](https://github.com/github/copilot-cli/issues/4394)）

---

*报告生成时间：2026-08-09 ｜ 数据源：[github.com/github/copilot-cli](https://github.com/github/copilot-cli)*

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

<think>The user wants me to generate a daily community report for Kimi Code CLI based on GitHub data. Let me analyze the data:

- No new releases in past 24 hours
- Only 2 issues updated in past 24 hours:
  1. #1283 - Feature Request: Memory System (updated 2026-08-08)
  2. #2597 - Bug: Runaway garbled generation (created 2026-08-08)
- No new PRs

Since the data is very limited (only 2 issues, no releases, no PRs), I need to be honest about this. The user asked for:
1. 今日速览
2. 版本发布 - should be omitted if none
3. 社区热点 Issues - asked for 10, but only 2 exist. I should note this limitation
4. 重要 PR 进展 - asked for 10, but none exist. I should note this
5. 功能需求趋势
6. 开发者关注点

I need to be honest about the limited data while still providing a useful report. I should not fabricate issues or PRs that don't exist.

Let me structure this professionally and honestly. I'll note when there's insufficient data, but provide analysis based on what we have.

For the "社区热点 Issues" section - only 2 issues exist, so I'll cover both and note the limited activity.

For "重要 PR 进展" - no PRs exist, so I'll note this.

For "功能需求趋势" - I can analyze from the limited issues.

Let me write this in clear, professional Chinese.</think>

# Kimi Code CLI 社区动态日报

**日期**：2026-08-09
**数据来源**：github.com/MoonshotAI/kimi-cli

---

## 1. 今日速览

过去 24 小时社区活跃度较低，未有新版本发布或 PR 提交，Issues 仅有 2 条更新。其中一条为引起热议的长期功能请求——**Memory System（跨会话持久化记忆）**，另一条为今日新建的严重 Bug 报告——**单步 LLM 生成 88k token 乱码导致进程失控**。今日焦点集中在模型运行稳定性与长期上下文管理两大方向。

---

## 2. 版本发布

⏸ **过去 24 小时无新版本发布。**

---

## 3. 社区热点 Issues

> 📌 **说明**：过去 24 小时内更新的 Issues 仅 2 条，以下为全部条目。

### 🔥 #2597 - Bug: 单步 LLM 失控生成 88k token 乱码（耗时 53 分钟）
- **状态**：OPEN · 今日新建 · 评论 0 · 👍 0
- **链接**：https://github.com/MoonshotAI/kimi-cli/issues/2597
- **重要性**：⭐⭐⭐⭐⭐
- **要点**：在一次正常的交互式会话中，模型出现 runaway generation——单个 LLM step 持续运行 **3214 秒（约 53 分钟）**，输出了 **88,114 个 token** 的无意义重复内容（随机多语言碎片、损坏的 Markdown、无限循环重复）。这是典型的**推理失控 / 上下文崩溃**类问题。
- **社区反应**：尚未有讨论，但问题严重性极高，建议关注官方响应。

### 💡 #1283 - Feature Request: Memory System（跨会话持久化记忆系统）
- **状态**：OPEN · 创建于 2026-02-27 · 评论 25 · 👍 0
- **链接**：https://github.com/MoonshotAI/kimi-cli/issues/1283
- **重要性**：⭐⭐⭐⭐
- **要点**：提议实现一套完整的 Memory System，让 Kimi Code CLI 能跨会话记住有用的上下文、项目模式与用户偏好。包含两种机制：**自动记忆**（AI 管理的笔记）与**手动记忆**（用户通过命令定义的指令）。
- **社区反应**：评论数 25 条，是过去几个月来讨论度最高的 Issue 之一，反映出社区对长程任务记忆能力的强烈需求。该 Issue 近期再次被更新，表明仍处于活跃推动中。

---

## 4. 重要 PR 进展

⏸ **过去 24 小时无 PR 更新或合并。**

---

## 5. 功能需求趋势

由于今日 Issues 数据有限，仅可从已有内容中提炼以下方向：

| 趋势方向 | 证据 | 关注度 |
|---------|------|--------|
| **跨会话持久化记忆** | #1283（25 条评论，长期热门） | 🔥🔥🔥🔥 |
| **模型推理稳定性 / 失控防护** | #2597（严重 Bug，今日新建） | 🔥🔥🔥🔥🔥 |
| **长上下文管理** | 间接由 #1283 与 #2597 共同引出 | 🔥🔥🔥 |

**综合判断**：社区对 Kimi CLI 的期待已从"基础代码助手"向"具备长期记忆、可承担复杂项目的智能伙伴"演进。但与此同时，模型自身稳定性的短板（#2597 揭示的失控生成）可能成为制约这一愿景的关键瓶颈。

---

## 6. 开发者关注点

基于今日 2 条 Issue 的反馈，可总结出两个核心痛点：

1. **🔴 稳定性风险（高优先级）**
   - 失控生成不仅浪费大量 token 配额（88k tokens / 53 分钟），还可能造成 API 计费失控与开发流阻塞。开发者强烈期待引入**生成步长熔断、最大 token 硬上限、输出质量自检**等防护机制。

2. **🟡 长期记忆缺失（结构性需求）**
   - 25 条评论积累的 Memory System 请求表明，开发者在多轮迭代、跨日开发中长期被迫重复交代项目背景。**项目级 + 用户级双层记忆架构**是最受期待的实现形态。

---

**报告说明**：本期日报基于过去 24 小时的 GitHub 公开数据生成，因活跃数据量较低，部分章节（版本发布、重要 PR）内容较少。建议持续关注未来几日是否有官方对 #2597 的响应，以及 #1283 是否进入实施阶段。

📮 数据来源：[MoonshotAI/kimi-cli](https://github.com/MoonshotAI/kimi-cli)

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

<think>Let me analyze the GitHub data for OpenCode from 2026-08-09 and generate a comprehensive Chinese daily report.

Key observations from the data:

1. No releases in the past 24 hours
2. Many issues are being discussed - the most active are:
   - #27167 - Feature request for native session goals with /goal (69 comments, 128 thumbs up)
   - #13984 - Cannot copy and paste in CLI (55 comments)
   - #14965 - Slow startup issue (19 comments)
   - #33356 - SQLite database unbounded growth (15 comments)
   - Multiple deepseek-v4-flash related issues (gateway injecting leading space)
   - Moonshot/Kimi model issues
   - Plugin/MCP related issues

3. Important PRs:
   - #40997 - Major refactor of integration prompts with forms
   - #40427 - Experimental performance improvements (75.5% memory reduction!)
   - #41347 - Mermaid renderer fixes
   - #40861 - Stop storing full patch text in session summaries
   - #41344 - Fix /undo for pending prompts
   - #41342 - Session branches in vertical tabs
   - #41202 - Authorize file mutations before locking (security improvement)
   - #41189 - Region structure for plugin slot placement

Let me write the report in Chinese.</think>

# OpenCode 社区动态日报 · 2026-08-09

> 数据来源：github.com/anomalyco/opencode ｜ 统计周期：过去 24 小时

---

## 一、今日速览

OpenCode v2 分支进入密集合并期，多个 TUI / Core 修复 PR 被 @kitlangton 集中提交并关闭，CI 稳定性问题正在被系统性解决。社区侧出现明显的 **deepseek-v4-flash 模型异常** 集中反馈——至少 3 个独立 issue 报告 OpenCode Go 网关向模型字符串中注入了前导空格导致 HTTP 400。性能层面，@Hona 提交的实验性渲染优化 PR 实现了初始渲染内存占用降低 **75.5%**。

---

## 二、版本发布

⏸ 过去 24 小时无新 Release。建议关注桌面端 v1.18.15 已知回归（详见下文 issues）。

---

## 三、社区热点 Issues（Top 10）

| # | Issue | 关键点 | 社区反应 |
|---|-------|--------|----------|
| 1 | [#27167](https://github.com/anomalyco/opencode/issues/27167) **[FEATURE]** 原生 Session Goal（/goal 命令） | 当前仅有自定义 slash 命令，缺乏持久化的会话目标/生命周期管理；该提案被社区视为长期痛点 | 💬 69 · 👍 **128**（社区最高点赞之一） |
| 2 | [#13984](https://github.com/anomalyco/opencode/issues/13984) CLI 无法复制粘贴 | 顶部提示"copied to clipboard"但 Ctrl+V 无效，困扰近 6 个月仍未根治 | 💬 55 · 👍 27 |
| 3 | [#14965](https://github.com/anomalyco/opencode/issues/14965) 启动速度慢 | 自 v1.2.1 起启动明显变慢；奇怪的是仅在 Ghostty 中复现，Terminal/Alacritty/Kitty 均正常 | 💬 19 · 👍 13 |
| 4 | [#33356](https://github.com/anomalyco/opencode/issues/33356) **[2.0]** SQLite 数据库无界膨胀 | 长期运行实例的 `event` 表膨胀至 13GB+，填满 22GB 卷至 97–99%，无保留/压缩策略 | 💬 15 · 👍 4（高危生产问题） |
| 5 | [#41300](https://github.com/anomalyco/opencode/issues/41300) / [#41306](https://github.com/anomalyco/opencode/issues/41306) / [#41314](https://github.com/anomalyco/opencode/issues/41314) **deepseek-v4-flash 模型字符串前导空格 bug** | 多个用户独立验证 `opencode.ai/zen/go` 网关在请求体中给模型名加了空格，触发 upstream 400；#41211 曾关闭但 bug 复现 | 💬 9 · 👍 1（需立即修复） |
| 6 | [#27689](https://github.com/anomalyco/opencode/issues/27689) **[FEATURE]** 拖拽支持 Office 文件 | 当前 chat 界面不支持 .docx/.xlsx 拖拽上传 | 💬 6 · 👍 0 |
| 7 | [#30533](https://github.com/anomalyco/opencode/issues/30533) OpenAI 授权失败 | 桌面端按官方流程授权 OpenAI 失败，影响新用户入门体验 | 💬 6 · 👍 0 |
| 8 | [#30611](https://github.com/anomalyco/opencode/issues/30611) 瞬时网络错误导致会话中断 | 重试策略仅识别 `ECONNRESET`，其他传输错误直接 kill 会话 | 💬 6 · 👍 1 |
| 9 | [#32548](https://github.com/anomalyco/opencode/issues/32548) Step-cap 触发 Claude thinking 模型 400 | agent 达到 step 上限时附加的 assistant 消息被 Claude 视为 prefill 而拒绝 | 💬 5 · 👍 0 |
| 10 | [#38993](https://github.com/anomalyco/opencode/issues/38993) **[FEATURE]** TUI 中增删 MCP 服务器 | #37712 已开放 HTTP 运行时 MCP 控制，但 TUI 入口仍缺失 | 💬 5 · 👍 0 |

> 📌 **特别关注**：#33356 的数据库膨胀问题直接影响生产部署稳定性，建议 OpenCode 团队优先处理 event 表的 retention / compaction 机制。

---

## 四、重要 PR 进展（Top 10）

| # | PR | 内容 | 影响 |
|---|----|------|------|
| 1 | [#40427](https://github.com/anomalyco/opencode/pull/40427) 实验性渲染性能优化 | 初始渲染内存从 **7.45 MB → 1.82 MB**（-75.5%），基于不可变 DB 快照 + 24h corpus 测量 | ⭐ 性能关键 |
| 2 | [#40997](https://github.com/anomalyco/opencode/pull/40997) 用 Forms 替换集成 prompt | OAuth/Key 表单统一为 `Form.Fields` + `Form.Answer`，迁移 GitHub Copilot/Azure/Cloudflare 集成 | ⭐ 重大重构 |
| 3 | [#41202](https://github.com/anomalyco/opencode/pull/41202) 文件变更先鉴权后加锁 | `write`/`edit`/`patch` 拆分为"先 capability 鉴权 → 拿 path lock → 读校验"的原子流程 | 🔒 安全修复 |
| 4 | [#41347](https://github.com/anomalyco/opencode/pull/41347) TUI Mermaid 渲染器同步修复 | 修复分支/反馈状态图损坏、补齐真实模型输出中使用的连接器、解码 HTML 实体、引入空间路由 | TUI 体验 |
| 5 | [#40861](https://github.com/anomalyco/opencode/pull/40861) 会话摘要不再存完整 patch | 修复 #32005：`SessionSummary` 移除 `Snapshot.diffFull()` 中的完整 patch 文本，显著降低长会话存储 | 性能/存储 |
| 6 | [#41344](https://github.com/anomalyco/opencode/pull/41344) `/undo` 支持撤销待发送 prompt | 修复 #39736：队列/steering 中的待发 prompt 可一并回滚并恢复到编辑器 | UX 修复 |
| 7 | [#41342](https://github.com/anomalyco/opencode/pull/41342) 垂直 Tab 显示 VCS 分支 | 非默认分支以 `project:branch` 形式展示在项目详情行，长文本尾部 fade | 体验增强 |
| 8 | [#41189](https://github.com/anomalyco/opencode/pull/41189) Plugin slot 引入区域结构 | 插件槽位从位置编码名称升级为"区域+结构树"，声明式定位 | 插件生态 |
| 9 | [#41309](https://github.com/anomalyco/opencode/pull/41309) Plugin 重载 generation flush | `PluginSupervisor.flush` 等待当前 generation 完成，避免热重载死锁 | 稳定性 |
| 10 | [#41310](https://github.com/anomalyco/opencode/pull/41310) TUI lifecycle/theme 测试隔离 | 修复 v2 CI 在 Linux/Windows 上 7 个失败的 TUI 测试（4 个 lifecycle + 3 个 theme fallback） | CI 修复 |

> ✅ 大量已关闭 PR（#41308、#41309、#41310、#41343、#41340 等）说明 v2 分支正集中清理 v2 CI 回归。

---

## 五、功能需求趋势

从过去 24 小时 + 近期高赞议题汇总：

1. **🧠 会话管理与持久化** —— #27167（原生 goal）、#38993（TUI MCP 管理）、#41304（subagent 钩子）反映出对"长任务工作流"的强烈需求。
2. **🌐 多模型接入完善** —— deepseek-v4-flash（#41300/#41306/#41314/#41322）、Kimi/Moonshot（#41273）、OpenAI 授权（#30533）、中国厂商成本跟踪（#34877）显示模型生态扩张带来的兼容/计量/授权三大问题。
3. **🖥️ 桌面端体验** —— #27689（Office 拖拽）、#34776（Desktop 插件命令）、#41339（v1.18.15 回归）、#37876（窄屏布局）显示 Desktop 仍是质量短板。
4. **⚡ 性能与稳定性** —— #14965（启动慢）、#33356（DB 膨胀）、#31554（MCP 进程泄漏）、#41337（Bun 进程休眠后高 CPU）。
5. **🧩 插件生态** —— #12042（Plugin SDK v2）、#41189（slot 区域结构）指向更成熟的扩展点。

---

## 六、开发者关注点（高频痛点）

- **复制粘贴失效**（#13984）：长期未根治，建议官方主动排期。
- **CLI 退出后打印乱码**（#20989、#29021）：在 Ctrl+C 后或长会话关闭时频繁出现，与终端底层渲染有关。
- **网络抖动 = 会话死亡**（#30611）：retry policy 覆盖范围不足，需要扩展 transport error 分类。
- **多实例共享会话**（#31307）：同一项目下两个终端会通过 SQLite 共享状态，行为反直觉。
- **窗口终端链接不可点击**（#35649）：Kitty 终端下 OSC 8 hyperlink 跨行渲染失效。
- **细粒度控制缺失**：subagent 钩子、cost tracking、MCP TUI 管理——核心配置仍需绕道 JSON 文件。
- **CI 反复波动**：v2 CI 上一波失败的测试已通过 #41310 等修复，但贡献者门槛依然偏高（需多次迭代才能跑绿）。

---

*本日报由 OpenCode 社区动态自动汇总生成 · 关注 [github.com/anomalyco/opencode](https://github.com/anomalyco/opencode)*

</details>

<details>
<summary><strong>jcode</strong> — <a href="https://github.com/1jehuang/jcode">1jehuang/jcode</a></summary>

<think>The user wants me to generate a daily community digest for the jcode project based on GitHub data. Let me analyze the data carefully:

1. **Release**: v0.72.0 was released with ACP client improvements and desktop app UX improvements
2. **Issues**: 21 issues updated in past 24 hours, mix of bugs and enhancements
3. **PRs**: None in past 24 hours

Let me organize this into the requested format:

Key themes I see:
- ACP (Agent Client Protocol) related issues dominate - Zed integration, slash commands, tool profiles, MCP
- Model-specific bugs (Antigravity provider, Claude Opus 5, Gemini 3.6 Flash, Ollama GLM-5.2, deepseek-v4)
- Command-risk classifier over-firing on read-only commands (recurring theme)
- Vision capability detection issues
- New feature requests (memory retrieval, swarm/RFC, conventional commits)
- Headless/SDK issues (OOM, swarm tool errors)
- Platform issues (Linux Homebrew install)

Let me pick the 10 most important issues:
1. #518 - Antigravity provider tool calls fail (high priority, recurring)
2. #751 - command-risk gate over-fires (high priority, recurring, with fix)
3. #828 - Claude Opus 5 1m variant missing (1M context bug)
4. #834 - SDK session exits on OAuth 403 (fixed-pending-release)
5. #812 - ACP session/prompt missing token usage (CLOSED)
6. #821 - Make Conventional Commits mandatory
7. #829 - ACP tool profile excludes MCP tools
8. #738 - command-risk duplicate of #751 (CLOSED)
9. #823 - Memory candidate retrieval issues
10. #839 - RFC: Agentic MapReduce / burst swarms
11. #845 - Antigravity Gemini 3.6 Flash tool calls as plain text
12. #854 - swarm tool raw error
13. #853 - Headless run unbounded recursive listing OOM
14. #852 - jcode fails on Linux Homebrew
15. #851 - ACP hosts get no slash commands (Zed)
16. #850 - Full Bash command visibility
17. #849 - ACP model switcher fails
18. #848 - Vision-incapable model loops on 400
19. #847 - Named custom models assumed to support images
20. #846 - Ollama GLM-5.2:cloud wrong context
21. #844 - Custom aliases for account labels

Let me structure this nicely. The user wants Chinese output, so I'll write in Chinese with technical accuracy.

For PRs section - there are 0 PRs in the past 24 hours, so I'll note that.

Let me also note that the date in the prompt is 2026-08-09, which is in the future relative to my knowledge cutoff, but I'll just generate based on the data provided.</think>

# jcode 社区动态日报

**日期：2026-08-09** ｜ 数据来源：github.com/1jehuang/jcode

---

## 📌 今日速览

v0.72.0 正式发布，重点强化 ACP（Agent Client Protocol）客户端协议兼容性与桌面端会话交互体验。社区反馈高度集中在 **ACP 集成链路（Zed/IDE 适配）** 与 **命令风险分类器过度拦截** 两大议题，过去 24 小时共 21 个 Issue 被更新，其中 #518（Antigravity 工具调用 400 错误）与 #751（命令风险拦截器误杀只读命令）均为高优先级 recurring-theme 问题。

---

## 🚀 版本发布

### v0.72.0（2026-08-08 发布）

**Highlights**
- ACP 客户端协议支持更丰富，可使用完整的预期工具面
- 桌面应用新增可见的「新建会话」操作，悬停反馈更一致

**Improvements**
- Cloud relay 与 session 设置改用中性名称（向后兼容旧命名）
- 完整发布说明：[Release v0.72.0](https://github.com/1jehuang/jcode/releases/tag/v0.72.0)

> 📝 v0.72.0 的 ACP 改进与本日报中 #812、#829、#849、#851 等多个 ACP 相关 Issue 高度呼应，预计将在下个版本闭环大部分 Zed/ACP 链路问题。

---

## 🔥 社区热点 Issues（精选 10 条）

### 高优先级 / 已修复

**1. #751 — command-risk gate 误拦截常规只读命令（高优 + 已附修复）**
作者 @rameshbaskaran ｜ 评论 5
`jcode-command-risk` 把 `2>/dev/null`、`grep -r`、带引号的 heredoc 等只读命令判为高危，触发"反复 false positive → 用户肌肉记忆审批 → 风控失效"的恶性循环。Issue 中已附 PR 草案，问题根因是 redirect 解析器的 4 处级联缺陷。是 #738 的 superset。
→ [Issue #751](https://github.com/1jehuang/jcode/issues/751)

**2. #518 — Antigravity provider 工具调用 400 错误（高优）**
作者 @sigmaboysigmaboyyy ｜ 评论 7
普通对话正常，但任何触发工具调用（如 bash）的请求都会因 `thought_signature` 缺失而失败。Antigravity Gemini 通道的 functionCall 协议兼容性问题，需在 provider 层补齐 thought_signature。
→ [Issue #518](https://github.com/1jehuang/jcode/issues/518)

**3. #828 — Claude Opus 5 缺失 1M 上下文变体**
作者 @AnOffe ｜ 评论 5
catalog 中其他模型都有 `[1m]` 变体，唯独 Opus 5 没有，导致 auto-compact 在 200k 而非 1M 触发，**有效上下文被压缩约 5 倍**。属于 catalog 数据缺失，需在模型表中补齐。
→ [Issue #828](https://github.com/1jehuang/jcode/issues/828)

**4. #834 — SDK 在 OAuth token 403 时直接致命退出（fixed-pending-release）**
作者 @guyb1 ｜ 评论 4
使用 `sk-ant-oat01`（Claude 订阅 OAuth）启动 SDK 会话时，usage 预检返回 403 但 token 本身仍可推理，SDK 却视为致命错误，首条消息前即崩溃。triage 标记为 fixed-pending-release，预计随下个版本修复。
→ [Issue #834](https://github.com/1jehuang/jcode/issues/834)

### ACP / IDE 集成（本周最大议题簇）

**5. #829 — ACP tool profile 默认排除 MCP 工具**
作者 @maxivillus ｜ 评论 3
`jcode acp` 默认 profile 是硬编码的 10 个 base tool 白名单，**不含任何 MCP 工具**。ACP 主机（Zed 等）若不显式设 `[tools] enabled = ["*"]` 就完全无法使用 MCP。建议把 MCP 工具默认纳入 `acp` profile。
→ [Issue #829](https://github.com/1jehuang/jcode/issues/829)

**6. #851 — ACP 主机（Zed）无法使用任何 slash 命令**
作者 @sergiomeneses ｜ 评论 0
Zed 作为 ACP 主机时，输入 `/model` 等命令会被客户端侧直接拒绝：`/model is not a recognized command in jcode`。ACP 适配层尚未把 jcode 自身的 slash 命令透出到主机侧。
→ [Issue #851](https://github.com/1jehuang/jcode/issues/851)

**7. #849 — ACP 模型切换器误报 `OPENROUTER_API_KEY not found`**
作者 @sergiomeneses ｜ 评论 0
使用 catalog 中的 OpenAI 兼容 profile（如 `opencode-go`）作为当前 provider 时，通过 ACP 切换模型会因环境变量检查逻辑错误而失败，**明明走的是 OpenAI-compatible 通道却被要求 OpenRouter key**。
→ [Issue #849](https://github.com/1jehuang/jcode/issues/849)

**8. #812 — ACP `session/prompt` 响应缺少 token usage（已关闭）**
作者 @maxivillus ｜ 评论 3
daemon 已发出 `ServerEvent::TokenUsage`，但 ACP server 在 `src/cli/acp.rs` 中只回传 `stopReason`，导致 ACP 主机无法做 token 计费/计量。triage 标记 reproducible + likely autonomous，社区预期很快修复。
→ [Issue #812](https://github.com/1jehuang/jcode/issues/812)

### 性能 / 安全

**9. #853 — Headless `jcode run` 在 bash 被拒后递归列出导致 OOM**
作者 @Longfortv5 ｜ 评论 0
bash 工具被 protected-path gate 拒绝后，模型回退到内置的递归文件树工具，**该工具无深度/输出大小上限**，会把整个目录树缓冲进内存，存在本地 DoS 风险。需要给文件树工具加上限流。
→ [Issue #853](https://github.com/1jehuang/jcode/issues/853)

### 功能方向 / RFC

**10. #839 — RFC: Agentic MapReduce / burst swarms 横向任务并行**
作者 @robottwo ｜ 评论 1
提议借鉴 Kimi 的 burst 执行原语，与现有 persistent swarm/DAG 架构互补：swarm 适合长期协作者，burst 适合一次性、fan-out/fan-in 的并行任务切片。需要架构层决策。
→ [Issue #839](https://github.com/1jehuang/jcode/issues/839)

---

## 🛠 重要 PR 进展

> 过去 24 小时内 **无新增或更新的 Pull Request**。社区活跃以 Issue 反馈为主，多个高优 Issue（#751、#834）已附修复草案，等待维护者 review 与合并。下一个开发窗口预计会出现一波 ACP / 命令风险相关的合入潮。

---

## 📈 功能需求趋势

通过对 21 条 Issue 的归类分析，社区需求呈现以下五大方向：

| 方向 | 代表 Issue | 关注度 |
|---|---|---|
| **ACP / IDE 集成（Zed 等）** | #829、#851、#849、#812 | ⭐⭐⭐⭐⭐ 极高 |
| **模型协议兼容性**（Antigravity、OpenAI-compatible、Ollama） | #518、#845、#847、#846、#848 | ⭐⭐⭐⭐⭐ 极高 |
| **命令风险 / 沙箱安全** | #751、#738、#853 | ⭐⭐⭐⭐ 高 |
| **多 Agent / 并行编排** | #839、#854 | ⭐⭐⭐ 中高 |
| **账号 / 凭据管理** | #844、#834 | ⭐⭐ 中 |

**两个值得关注的新方向：**
- **Memory Agent 检索精度**（#823）：候选集检索用了完整会话上下文而非聚焦 query，导致相关事实落选 top-N。
- **Conventional Commits 强制化**（#821）：社区希望 `/commit` 从"建议式"升级为"强制式"。

---

## 💬 开发者关注点（社区痛点摘要）

1. **ACP 是当下体验的最大短板** —— 4 条近 24h Issue 都指向 Zed 等 ACP 主机的兼容性问题（slash 命令透出、模型切换、MCP 工具白名单、token 计量）。这是 jcode 从「本地工具」走向「IDE 内嵌代理」的关键缺口。

2. **Provider 兼容性碎片化严重** —— Antigravity（#518、#845）、OpenAI-compatible 自定义命名模型（#847、#849）、Ollama（#846）各自出现独立 bug。模型路由层缺乏统一的「能力探测 + 降级回退」机制，导致每个新模型上线都要修一波。

3. **风控与易用性的张力** —— `command-risk` crate 在"过度拦截只读命令"上反复出现（#738、#751），开发者明确指出：**频繁 false positive 会让用户养成盲目审批习惯，反而让风控形同虚设**。这与 #853 的 OOM 风险形成对照，说明沙箱边界需要更精细的语义理解，而不是粗暴的字符串/路径匹配。

4. **视觉/多模态能力声明缺失** —— #847（未声明 `input` 即默认支持图像）、#848（无视觉模型收到 400 后陷入循环重试）共同暴露：模型 catalog 中能力字段不完整或缺失。

5. **账户管理 UX 待提升** —— #844 提出 OAuth 账号只能用 `openai-1`、`openai-2` 这种顺序编号，缺乏自定义别名；多账号切换体验粗糙。

6. **平台支持** —— #852 报告 Linux + Homebrew 安装路径下 wrapper 脚本传空子命令导致启动失败，需要补齐安装器测试矩阵。

---

*日报基于 2026-08-08 ~ 2026-08-09 的 GitHub 数据自动生成。*

</details>

<details>
<summary><strong>pi</strong> — <a href="https://github.com/earendil-works/pi">earendil-works/pi</a></summary>

<think>The user wants me to generate a Chinese daily report for the pi community based on GitHub data. Let me analyze the data carefully.

Key observations:
1. No new releases in the past 24 hours
2. 35 issues updated, with 30 shown (sorted by comment count)
3. 12 PRs updated in the past 24 hours

Let me organize the most important issues:

Top issues by comments:
1. #4945 - openai-codex Connection Reliability Issues (76 comments, 31 thumbs up, in progress) - Most discussed
2. #6879 - auto-compaction never triggers after context grows past 100% (15 comments, 15 thumbs up)
3. #7821 - Auto-compaction waits for agent_end during long tool loops (3 comments, closed)
4. #7543 - Meta Model API (3 comments, 3 thumbs up, closed)
5. #7836 - Edit fuzzy match misses lines with whitespace differences (2 comments)
6. #7837 - Fullscreen TUI: mouse selection overwrites clipboard (2 comments)
7. #7734 - print mode with extensions hangs at exit (2 comments)
8. #7820 - openai-codex stream requests no retry wrapper (2 comments)
9. #7816 - Reload reports stale context (2 comments)
10. #7815 - glla goal management defect (2 comments)

Looking at all issues, there are several themes:
- Auto-compaction issues (#6879, #7821) - both closed
- openai-codex reliability (#4945, #7820) - both about connection reliability
- Edit tool issues (#7836, #7835) - both about edit tool fuzziness
- TUI/UI issues (#7837, #7839, #7830, #7827, #7765, #7832)
- Multi-provider support (#7543, #7838, #7814, #7610)
- Settings/configuration (#7813, #7829, #7819)
- Extension system (#7824, #7828, #7831)
- Session management (#7818, #7831)

PRs to highlight:
1. #7840 - Aliyun Model Studio CLI docs (closed)
2. #7610 - LLM Gateway providers (open)
3. #7713 - Stream assistant with telemetry (open, in progress)
4. #7834 - --version with runtime info (closed)
5. #7833 - notify extension fix (closed)
6. #7811 - fix max_tokens for DeepSeek (closed, in progress)
7. #7823 - A-level capabilities from oh-my-pi (closed)
8. #7817 - treat incomplete reason 'length' as length stop (closed)
9. #7801 - lazily load syntax grammars (open, by mitsuhiko)
10. #7721 - avoid newlines when copying in fullscreen (closed)
11. #7810 - reject concurrent compaction calls (closed)
12. #7807 - expose low reasoning effort for DeepSeek V4 Flash (open)

Let me write a professional Chinese daily report.</think>

# pi 社区动态日报 · 2026-08-09

## 📌 今日速览

今日社区热度集中在 **openai-codex 连接的可靠性**与**自动压缩（auto-compaction）触发机制**两条主线。多个 Issue 反映长上下文会话在工具循环中可能突破 compaction 阈值直到 provider 报错才触发；同时多个 DeepSeek / OpenAI 兼容 provider 的请求字段与停止原因解析问题被合并修复。TUI 全屏模式下的剪贴板行为与滚动体验也收到多项反馈。

---

## 🚀 版本发布

过去 24 小时内无新 Release。上一版本 **pi 0.84.1** 仍为当前主线。

---

## 🔥 社区热点 Issues

| # | 标题 | 链接 | 重要性 |
|---|------|------|--------|
| **#4945** | openai-codex 连接可靠性问题（TUI 卡在 Working...） | [#4945](https://github.com/earendil-works/pi/issues/4945) | ⭐ 76 评 / 👍 31，社区最关注；标记 inprogress，是连接层问题的核心痛点 |
| **#6879** | auto-compaction 在 context 突破 100% 后才触发，导致 provider 拒绝 | [#6879](https://github.com/earendil-works/pi/issues/6879) | ⭐ 15 评 / 👍 15，揭示自动压缩时机错误，影响长任务稳定性 |
| **#7821** | Auto-compaction 只在 agent_end 后才检查，长工具循环下不及时 | [#7821](https://github.com/earendil-works/pi/issues/7821) | 与 #6879 同源，已关闭，提议每次 agent turn 后检查阈值 |
| **#7820** | openai-codex 流式请求缺少 retryProviderRequest 包装 | [#7820](https://github.com/earendil-works/pi/issues/7820) | 报告 ~30% 长思考 turn 在 3–25 分钟时因传输层错误中断，已关闭 |
| **#7836** | Edit fuzzy match 无法容忍空白长度差异 | [#7836](https://github.com/earendil-works/pi/issues/7836) | 影响小模型应用 Edit 工具的稳定性，已定位到 `normalizeForFuzzyMatch` |
| **#7837** | 全屏 TUI 鼠标选择静默覆盖系统剪贴板（OSC 52 target c） | [#7837](https://github.com/earendil-works/pi/issues/7837) | 安全/UX 双重问题，无 opt-out 引起关注 |
| **#7734** | print 模式在加载扩展并启动 subagent 后挂起 | [#7734](https://github.com/earendil-works/pi/issues/7734) | 0.84.0 / 0.83.0 复现，影响 print 模式自动化 |
| **#7816** | 扩展命令运行中 reload Pi，恢复后报 stale-context | [#7816](https://github.com/earendil-works/pi/issues/7816) | 扩展生态常见操作流程，被标记 untriaged |
| **#7815** | glla `replace` 静默取消 `wait` goal 的计划恢复 | [#7815](https://github.com/earendil-works/pi/issues/7815) | Goal 管理 UX 缺陷，详细分析 |
| **#7782** | Bedrock 返回的非法 tool call（空键）污染 session | [#7782](https://github.com/earendil-works/pi/issues/7782) | 揭示缺乏 tool 参数校验，会"砖化"整个 session |

---

## 🛠 重要 PR 进展

| # | 标题 | 链接 | 说明 |
|---|------|------|------|
| **#7610** | feat(ai): 新增 LLM Gateway / LLM Gateway DevPass providers | [#7610](https://github.com/earendil-works/pi/pull/7610) | OPEN，将 LLM Gateway 作为 OpenRouter 风格的官方 provider |
| **#7713** | feat: 为 assistant 流和 config 增加 telemetry | [#7713](https://github.com/earendil-works/pi/pull/7713) | OPEN / inprogress，harness v2 遥测基础设施 |
| **#7801** | feat(coding-agent): 懒加载不常用语法高亮 grammar | [#7801](https://github.com/earendil-works/pi/pull/7801) | OPEN，@mitsuhiko 主理，启动性能优化 |
| **#7807** | fix(ai): 为原生 DeepSeek V4 Flash 暴露 low 推理档位 | [#7807](https://github.com/earendil-works/pi/pull/7807) | OPEN，修复 V4 Flash/V4 Pro 共享映射导致 low 被提升为 high |
| **#7823** | feat: 从 oh-my-pi 移植 A 级能力到核心 | [#7823](https://github.com/earendil-works/pi/pull/7823) | CLOSED，引入 stream rules、subagent tools、advisor、跨会话记忆，按 commit 拆分 |
| **#7834** | feat(coding-agent): `--version` 输出 runtime（bun/node/deno） | [#7834](https://github.com/earendil-works/pi/pull/7834) | CLOSED，便于区分运行时特定 bug，关闭 #7244 |
| **#7833** | fix(examples): notify 扩展从 `agent_end` 改为 `agent_settled` | [#7833](https://github.com/earendil-works/pi/pull/7833) | CLOSED，避免在重试/压缩/队列续接完成前误发通知 |
| **#7811** | fix(ai): 为原生 DeepSeek 发送 `max_tokens` 而非 `max_completion_tokens` | [#7811](https://github.com/earendil-works/pi/pull/7811) | CLOSED / inprogress，修复 DeepSeek 静默忽略 |
| **#7817** | fix(ai): 将 `incomplete_details.reason='length'` 视为正常长度停止 | [#7817](https://github.com/earendil-works/pi/pull/7817) | CLOSED，修复豆包/火山 Ark 等 OpenAI 兼容 provider 的停止原因解析 |
| **#7810** | fix(coding-agent): 拒绝并发 compaction 调用 | [#7810](https://github.com/earendil-works/pi/pull/7810) | CLOSED，修复 `/compact` 连按导致的 `Cannot read 'signal'` 崩溃 |
| **#7721** | fix(tui): 避免全屏复制时引入不必要换行 | [#7721](https://github.com/earendil-works/pi/pull/7721) | CLOSED，复制时区分视觉行与逻辑行 |

---

## 📈 功能需求趋势

通过对今日更新的 35 个 Issue 进行聚类，可以看出以下趋势：

1. **Provider/模型接入扩展**（高频）
   - 新模型：Meta Muse Spark（#7543）、Cloudflare Workers AI Gateway（#7838）、LLM Gateway（#7610）
   - 多账号支持：同一 provider 多 OAuth 登录（#7814）
   - 模型档位细分：DeepSeek V4 Flash 独立推理档（#7807）

2. **自动压缩与上下文管理**
   - 长工具循环下 compaction 不及时触发（#6879、#7821）
   - 并发 compaction 调用冲突（#7810）

3. **TUI 体验精细化**
   - 全屏模式：剪贴板覆盖（#7837）、滚动步长配置（#7765）、按行滚动（#7830）、复制换行（#7721）、正则模式行重复（#7839）
   - 斜杠补全长描述滚动（#7827）
   - Mermaid `:::className` 语法支持（#7832）

4. **编辑工具健壮性**
   - fuzzy match 容差（#7836）、单对象 edits 参数兼容（#7835）

5. **会话与设置管理**
   - 删除当前 active session（#7818）
   - 多 settings 配置文件（#7813）
   - Windows 上无效 settings.json 的诊断（#7829）
   - 立即显示用户消息（#7819）

6. **扩展 API 增强**
   - 工具结果触发回合终止、RpcClient timeout 控制（#7824）
   - RPC 会话替换重复绑定扩展（#7831）
   - markdown transformer 接收 message identity（#7828）

---

## 👨‍💻 开发者关注点

从 Issue 与 PR 内容综合，可观察到开发者当前的几个核心痛点与需求：

- **长任务可靠性**：超过 272k token 的会话常因 compaction 触发时机不当而被 provider 拒绝，需要"每次 agent turn 后检查阈值"的策略；并发 compaction 调用的竞态也暴露出 AbortController 状态管理不够严格。

- **openai-codex / 长思考 turn 的连接韧性**：基于 OAuth 的 ChatGPT 订阅流在 3–25 分钟长推理期间频繁出现 WebSocket 1006 / 中间件断连，社区强烈呼吁补齐 `retryProviderRequest` 包装并对流式错误进行分类重试（#4945、#7820）。

- **小模型与 provider 差异**：开发者反复反馈小模型在 Edit tool 的参数格式上不规范（单对象 vs 数组、空白差异），DeepSeek、Doubao、Volcengine Ark 等 provider 在 `max_tokens`、停止原因、推理档位的字段语义上与官方 OpenAI 不同，需要更精细的 provider 配置抽象。

- **TUI "细节坑"集中爆发**：全屏模式下的剪贴板、滚动、复制三类问题同步浮现，说明全屏 TUI 已成为越来越多用户的默认形态，需要更系统地打磨（光标、滚动、剪贴板三件套）。

- **扩展系统需要"一等公民"化**：RPC 会话替换导致重复绑定、工具结果无法结束回合、markdown transformer 缺少 message identity 等问题，反映扩展作者已经深入到 Pi 内部细节，扩展接口的设计正在追赶实际需求。

- **会话/配置管理的灵活性诉求**：删除当前 session、多配置 profile、设置即时生效、用户消息即时回显等，都是开发者对"日常流畅度"提出的可感但常被低估的改进点。

---

*日报由 GitHub Issue / PR 数据自动整理；如需订阅特定主题或调整粒度，欢迎反馈。*

</details>

---
*本日报由 [Big Model Radar](https://github.com/96loveslife/big_model_radar) 自动生成。*
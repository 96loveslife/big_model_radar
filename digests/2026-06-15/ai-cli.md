# AI CLI 工具社区动态日报 2026-06-15

> 生成时间: 2026-06-15 07:53 UTC | 覆盖工具: 7 个

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

<think>The user wants me to generate a horizontal comparative analysis report based on the community dynamics of various AI CLI tools. Let me carefully analyze the data from all 6 tools (Claude Code, OpenAI Codex, Gemini CLI, GitHub Copilot CLI, Kimi Code CLI, OpenCode, Qwen Code) and create a comprehensive cross-comparison report.

Let me organize the key data:

**Claude Code:**
- No releases in 24h
- 50 issues updated, 30 shown
- 5 PRs updated
- Top concerns: Windows/WSL TUI bugs, Subagent infinite recursion (#68430), MCP OAuth (#46140), Billing issues ($447 silent charge #62338), Cache performance (#63930 - 74% wasted)
- Key issues: #68430 (CRITICAL), #46140 (CRITICAL), #68526 (security)
- Windows/WSL takes 5 of top 10
- 2.1.17x version issues

**OpenAI Codex:**
- No releases in 24h
- 50 issues updated
- 50 PRs updated (very high!)
- Top concerns: Windows Desktop App stability (#27979), User Message Queue feature PRs (#28269 etc.), MCP for non-OpenAI providers (#26234)
- Top PRs: User Message Queue series by @efrazer-oai (8+ related PRs), MCP namespace flattening
- 26.609.4994.0 Windows update broke app

**Gemini CLI:**
- No releases in 24h
- 50 issues updated
- 39 PRs updated
- Top concerns: Agent hangs (#21409), Auto Memory system, AST-aware tooling, Browser subagent Wayland issues
- Many dependabot PRs closed
- New issues: #27938 (memory), #27937 (context poisoning)
- @google/genai upgraded to 2.8.0

**GitHub Copilot CLI:**
- No releases in 24h
- 17 issues updated
- 0 PRs updated (very low!)
- Top concerns: CAPI 400 errors (#3558), Agent skills (#956), GPT-5 mini complaints (#3801-3803), BYOK experience (#3795)
- Some spam/low quality issues
- Microsoft Defender SmartScreen flag (#26587)

**Kimi Code CLI:**
- No releases in 24h
- Only 3 issues updated
- Only 3 PRs updated
- Top concerns: Code Plan rate limiting (#2123), System prompt flexibility (#2451), Windows compatibility
- Small but focused activity

**OpenCode:**
- v1.17.7 released (Bugfixes)
- 50 issues updated
- 50 PRs updated (very high!)
- Top concerns: Dynamic Workflows feature (#29789 split into 6 PRs), Session compaction infinite loop (#30443), MCP security (#31778 - env leak), Windows /exit issues
- Compaction loop affects DeepSeek V4, MiMo V2.5, MiniMax M3
- Major: Workflows feature close to merge

**Qwen Code:**
- desktop-v0.0.4 released
- Many issues updated
- 20 PRs shown
- Top concerns: /loop background automation series (8+ issues), Token management, MCP integration, OAuth policy (#3203 - 135 comments)
- Desktop release feed decoupling

Now let me create the comparative analysis report. I need to be careful:
- Use tables for comparison
- Be data-driven
- Identify common themes
- Highlight differentiation
- Provide trend signals

Common themes I observe:
1. **Windows/Desktop stability** - Claude Code, OpenAI Codex, OpenCode, Gemini CLI, Copilot CLI all have Windows issues
2. **MCP ecosystem maturity** - All tools are working on MCP, but with varying quality
3. **Context/token management** - Compaction, caching, token efficiency (Claude Code #63930, Qwen #5099/#5101/#5111, OpenCode #30443)
4. **Multi-agent/workflow orchestration** - Claude Code (#68430), OpenCode (Workflows), Qwen Code (/loop), Gemini (sub-agents)
5. **Cost transparency** - Claude Code billing issues, Copilot BYOK
6. **Subscription transparency** - Kimi (#2123), Qwen (#3203)
7. **TUI/UX basics** - Copy/paste, scrolling, input issues everywhere
8. **Custom provider / BYOK** - Copilot (#3795), Claude Code (#68522)
9. **Long session / memory management** - All tools working on this

Differentiation:
- **Claude Code**: Focus on enterprise/power users, sophisticated sub-agents, MCP heavy
- **OpenAI Codex**: Strong Desktop app + CLI integration, focus on Queue/User message persistence
- **Gemini CLI**: Evaluation infrastructure heavy, AST-aware exploration
- **Copilot CLI**: GitHub ecosystem integration (PRs, work items), Azure DevOps
- **Kimi Code CLI**: Smaller community, Windows-focused improvements
- **OpenCode**: Workflow platform evolution, plugin system
- **Qwen Code**: /loop background automation, desktop release decoupling

Activity levels (based on numbers):
- Most active PRs: OpenCode (50), OpenAI Codex (50), Gemini CLI (39)
- Most active issues: Claude Code (50), OpenAI Codex (50), Gemini CLI (50), OpenCode (50)
- Lowest activity: Kimi Code CLI (3+3), Copilot CLI (17 issues, 0 PRs)

Let me also note that "MiniMax M3" appears in the OpenCode section - this seems to be a model name reference. I should treat this as a third-party model rather than connect it to myself.

Now let me write the comparative report in Chinese, professional and concise, suitable for technical decision-makers and developers.

Let me structure the report:

1. **生态全景** - 3-5 sentences
2. **各工具活跃度对比** - Table
3. **共同关注的功能方向** - Multiple tools
4. **差异化定位分析** - Each tool
5. **社区热度与成熟度** - Assessment
6. **值得关注的趋势信号** - Industry trends

Let me write it now.</think>

# AI CLI 工具生态横向对比分析报告
**报告日期：2026-06-15** ｜ 数据基线：6 款主流工具的 GitHub 公开动态

---

## 一、生态全景

2026 年 6 月中旬的 AI CLI 工具生态呈现**"功能军备竞赛"与"基础体验补课"并行的双线特征**。一方面，OpenCode 的 Dynamic Workflows、OpenAI Codex 的 User Message Queue、Qwen Code 的 `/loop` 后台自动化、Claude Code 的 Subagent 体系均在快速演进，工具正从"对话式编码助手"演化为"可编排的智能体平台"；另一方面，**Windows 平台体验、MCP 集成稳健性、长会话上下文管理、成本可观测性**成为所有工具共同暴露的薄弱面。值得注意的是，今日 **0 个工具** 完成了 npm/PyPI 主版本发布，说明整个生态进入了一段相对密集的内部迭代期。

---

## 二、各工具活跃度对比

| 工具 | Releases (24h) | Issues 更新数 | PRs 更新数 | 社区规模量级 | 当日核心主题 |
|------|---------------|--------------|-----------|------------|------------|
| **Claude Code** | 0 | 50 (Top 30) | 5 | 🔴 庞大 | Windows TUI 暴雷、Subagent 递归、计费透明 |
| **OpenAI Codex** | 0 | 50 (Top 30) | 50 | 🔴 庞大 | User Message Queue 系列、Windows App 崩溃、MCP 命名空间 |
| **Gemini CLI** | 0 | 50 (Top 30) | 39 | 🟠 大 | Agent 稳定性、Auto Memory、依赖批量升级 |
| **OpenCode** | **v1.17.7** | 50 (Top 30) | 50 | 🟠 大 | Dynamic Workflows 拆分、Compaction 死循环、MCP 安全 |
| **Qwen Code** | **desktop-v0.0.4** | 30+ | 20+ | 🟡 中 | `/loop` 重构、Token 管理、桌面端解耦 |
| **GitHub Copilot CLI** | 0 | 17 | **0** | 🟡 中 | CAPI 400 错误、GPT-5 mini 投诉、BYOK 体验 |
| **Kimi Code CLI** | 0 | **3** | **3** | 🟢 小 | 订阅额度争议、Windows 兼容性 |

> **活跃度分层**：OpenAI Codex 与 OpenCode 并列当日 PR 产出最高（均 50），但意义不同——前者是架构级 User Message Queue 的多 PR 协同提交，后者是巨型 Dynamic Workflows PR 的拆分治理。Kimi Code CLI 与 Copilot CLI 的 PR 数量明显偏低，反映社区贡献活跃度差异。

---

## 三、共同关注的功能方向

以下 7 个方向在多家工具的社区反馈中**同时出现**，代表行业级共性需求：

### 1. 🪟 Windows / Desktop 平台稳定性（5/6 工具）

| 工具 | 核心痛点 |
|------|---------|
| Claude Code | WSL2 下键盘输入卡死、TUI 渲染回归、Plan 模式被缓冲按键自动批准 |
| OpenAI Codex | 26.609.4994.0 版本导致 App 闪退、捆绑 Node.exe 权限错误 |
| OpenCode | `/exit` 在 PowerShell 中退出宿主终端、Defender SmartScreen 告警 |
| Gemini CLI | Wayland 下 browser sub-agent 失败 |
| Copilot CLI | TUI 多 tab 渲染不一致 |
| Kimi Code CLI | Windows Terminal 粘贴快捷键被拦截、日志锁 |

**诉求归纳**：**建立 Windows 平台专项 QA 矩阵、统一的跨平台终端兼容性测试**。

### 2. 🔌 MCP 集成的深度与稳健性（6/6 工具）

| 工具 | MCP 相关动态 |
|------|-------------|
| Claude Code | OAuth Bearer Token 未发送 (#46140)、MCP 工具在远程会话失效 |
| OpenAI Codex | 非 OpenAI Responses API 下 namespace 冲突 (#26234 → #28271 修复中) |
| Gemini CLI | `structuredContent` 中数组结果错误拷贝 (#27730 修复) |
| OpenCode | MCP 2.0 客户端能力滞后 (#28567)、**子进程泄露 process.env API Key (#31778)** |
| Qwen Code | MCP 连接态与工具注册不一致 (#4218) |
| Copilot CLI | 通过 MCP 集成多模型（间接依赖） |

**诉求归纳**：**MCP 正从"能不能跑通"转向"边角案例能不能稳定"**，尤其是 OAuth、subprocess 环境隔离、跨 provider 兼容性。

### 3. 📚 长会话的上下文与 Token 管理（5/6 工具）

| 工具 | 关键问题 |
|------|---------|
| Claude Code | Opus 4.8 下 74% cache_creation token 浪费 (#63930) |
| OpenAI Codex | Auto Memory 持久化 |
| OpenCode | 多模型出现 compaction 死循环 (#30443，影响 DeepSeek V4/MiMo V2.5/M3) |
| Qwen Code | 重复 tool-result (#5099)、大型工具结果累积 (#5101)、max_tokens 截断 (#4964) |
| Gemini CLI | 长会话内存膨胀 (#27938) |
| Copilot CLI | CAPI 重复 item 错误 (#3558) |

**诉求归纳**：**microcompaction、活跃历史预算、token 估算可观测**成为通用解法，Qwen Code 的 #5111 PR（active tool result 历史预算）值得其他工具借鉴。

### 4. 🤖 多代理 / 工作流编排（4/6 工具）

| 工具 | 方向 |
|------|------|
| Claude Code | Subagent 无限递归 (#68430)、Workflow 恢复后重跑 |
| OpenAI Codex | User Message Queue（长任务期间排队用户后续消息） |
| OpenCode | **Dynamic Workflows**（巨型 PR #29789 拆分为 6 子 PR） |
| Qwen Code | `/loop` 后台自动化（8+ 子 issue 集中开启） |
| Gemini CLI | Sub-agent 调度与终止语义失真 (#22323) |

**诉求归纳**：**"智能体编排"已成新一代 AI CLI 的标配能力**，但**agent loop 的"刹车机制"**（防止无限递归、终止状态准确上报）是各家共同的薄弱点。

### 5. 💰 成本与订阅透明度（4/6 工具）

| 工具 | 痛点 |
|------|------|
| Claude Code | $447 静默 API 计费 (#62338)、CLI/Desktop 双端订阅误路由 (#68501) |
| Kimi Code CLI | Code Plan 用户反映 5 小时仅 60 次调用 vs 官方宣传 300-1200 次 (#2123) |
| Qwen Code | OAuth 免费层配额调整争议 (#3203，135 评论) |
| Copilot CLI | `/status` 用量信息不完整、BYOK 模型发现缺失 (#3795) |

**诉求归纳**：**"按 token 计价"模型让开发者对额度极度敏感**，状态栏增加"今日预估费用"和"缓存命中率"等可观测指标已成行业呼声。

### 6. 📝 项目级上下文与规则系统（3/6 工具）

| 工具 | 需求 |
|------|------|
| Kimi Code CLI | 自动加载 AGENTS.md / .cursorrules (#850) |
| Qwen Code | 是否支持 Rules/Instructions (#4723) |
| OpenCode | 自定义工具描述 (#11604) |
| Claude Code | （已在 AGENTS.md 上率先落地） |

**诉求归纳**：**AGENTS.md 正在成为事实标准**，Qwen Code 的 #5138 PR（CLAUDE.md → AGENTS.md 重定向）印证了这一趋势。

### 7. 🧩 跨生态迁移体验（3/6 工具）

| 工具 | 信号 |
|------|------|
| Kimi Code CLI | "从 Claude Code 切换过来希望自动加载规则" |
| Qwen Code | "是否支持 Rules/Instructions"（明确从 Claude/Copilot 迁移意图） |
| Copilot CLI | BYOK 模型发现、CAPI 兼容性问题 |

**诉求归纳**：**跨工具互操作性**和**标准化配置文件**正成为开发者选型的隐性指标。

---

## 四、差异化定位分析

| 工具 | 功能侧重 | 目标用户 | 技术路线特征 |
|------|---------|---------|------------|
| **Claude Code** | 深度 Agent + 复杂权限模型 + Subagent 体系 | 企业高级开发者、Agent 重度用户 | MCP 一等公民、强 Anthropic API 绑定、Windows 体验相对薄弱 |
| **OpenAI Codex** | Desktop App + CLI 双端一体化 + 模型路由 | ChatGPT Plus/Pro 订阅用户、本地化部署 | Responses API 专有包装、OpenAI 生态深度整合、App 体系独立 |
| **Gemini CLI** | 评估驱动 + AST 感知探索 + Auto Memory | 关注模型质量与可解释性的开发者 | 内部 Epic 治理、依赖治理活跃、学术化演进 |
| **OpenCode** | **插件系统 + Dynamic Workflows + 跨 provider** | 极客与平台化部署者 | 类 Claude Code 功能对标、SDK/工作流解耦、安全敏感 |
| **Qwen Code** | **国内模型支持 + 后台自动化 `/loop` + Desktop 独立** | 阿里云/Qwen 生态用户、自动化场景 | Desktop 与 CLI 解耦演进、CI 自动化反思（4-job pipeline） |
| **GitHub Copilot CLI** | GitHub 生态深度集成（PR、Issue、ADO） | 企业 GitHub/Azure DevOps 用户 | 与 CAPI 强绑定、企业 SSO、模型选择相对受限 |
| **Kimi Code CLI** | 轻量级 + 中文友好 + Windows 体验补课 | Moonshot 生态用户、跨平台开发者 | 渐进式迭代、社区规模小但聚焦 |

**关键差异点**：
- **OpenCode vs Claude Code**：OpenCode 在 Workflows 上的拆分治理（6 子 PR）比 Claude Code 的 Subagent 体系更接近"平台"形态
- **OpenAI Codex vs Qwen Code**：两者均在做"队列/后台自动化"，但 Codex 的 User Message Queue 面向客户端重启持久化，Qwen 的 `/loop` 面向周期性自驱任务
- **Copilot CLI vs 其他**：唯一深度绑定单一云平台（GitHub）的工具，自有 BYOK 体验相对粗糙

---

## 五、社区热度与成熟度

### 🔥 处于快速迭代期的工具

| 工具 | 特征 |
|------|------|
| **OpenAI Codex** | 50 PRs/日（含 User Message Queue 8 PR 协同），架构级演进明显 |
| **OpenCode** | 50 PRs/日（Dynamic Workflows 拆分），已进入功能爆发期 |
| **Gemini CLI** | 39 PRs/日，含大量依赖升级，治理节奏稳健 |
| **Qwen Code** | `/loop` 系列同步开启 8+ 子 issue，工程化推进模式清晰 |

### ⚖️ 处于功能稳定期的工具

| 工具 | 特征 |
|------|------|
| **Claude Code** | 当日仅 5 PRs，但 Issues 反馈的高危问题（subagent 递归、计费）反映已进入"深水区"，需修补而非扩张 |
| **Copilot CLI** | 17 Issues / 0 PRs，活跃度低，企业级节奏稳定但社区参与有限 |

### 🌱 处于早期建设期的工具

| 工具 | 特征 |
|------|------|
| **Kimi Code CLI** | 仅 3+3 活跃度，社区规模小，但每个反馈都直指核心痛点（订阅、Windows） |

### 成熟度指标对照

| 维度 | 领先者 | 追赶者 |
|------|--------|--------|
| 跨平台稳定性 | Gemini CLI（除 Wayland 外反馈少） | Claude Code、Codex（Windows 重灾区） |
| MCP 生态成熟度 | OpenAI Codex（PR #28271）、OpenCode | Copilot CLI（间接依赖） |
| 工作流/Agent 编排 | OpenCode（Workflows）、OpenAI Codex（Queue） | Claude Code、Qwen Code |
| 成本透明度 | Copilot CLI（企业计费明确） | 所有按 token 计费的工具 |
| 社区贡献活跃度 | OpenAI Codex、OpenCode、Gemini CLI | Kimi Code CLI、Copilot CLI |

---

## 六、值得关注的趋势信号

### 📡 趋势 1：从"对话式工具"到"智能体平台"的范式跃迁

**信号**：OpenCode 的 Dynamic Workflows（6 子 PR）、OpenAI Codex 的 User Message Queue、Qwen Code 的 `/loop` 后台

---

## 各工具详细报告

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills 社区热点

> 数据来源: [anthropics/skills](https://github.com/anthropics/skills)

<think>
The user wants a detailed analysis of the Claude Code Skills community trends based on the provided data. Let me analyze the data carefully and produce a professional report in Chinese.

Let me break down what I have:

**PRs (20 shown, ranked by comments but comments are all "undefined" - so I need to use other signals like reactions, recency, and PR number)**
- Note: All PRs show undefined comments, so I need to infer popularity from PR number (higher = more recent = more activity), thumbs up count (all 0 in data shown), and the substance of the PR

**Issues (50 total, 15 shown, ranked by comments):**
- #228 (14 comments) - Org-wide skill sharing
- #556 (12 comments) - run_eval.py 0% trigger rate
- #62 (10 comments) - Skills disappeared
- #202 (8 comments, CLOSED) - skill-creator best practices
- #492 (7 comments) - Security: trust boundary abuse
- #412 (6 comments, CLOSED) - agent-governance skill
- #189 (6 comments) - duplicate skills between plugins
- #29 (4 comments) - Usage with Bedrock
- #16 (4 comments) - Expose Skills as MCPs
- #1175 (3 comments, CLOSED) - SharePoint security
- #1169 (3 comments) - description-optimisation 0% recall
- #1061 (3 comments) - Windows compatibility
- #184 (3 comments, CLOSED) - agentskills.io redirect
- #61 (3 comments) - 404 loading skills
- #1220 (2 comments) - multi-file preload

Now let me organize this into a report.

For 热门 Skills 排行, I should focus on PRs that are most discussed. Since comments are undefined, I'll use PR number (recency proxy) and substance:

1. **#1140 agent-creator skill** - most recent (2026-05-15), addresses Issue #1120, fixes multi-tool eval, adds Windows support
2. **#1298 run_eval.py fix** - very recent (2026-06-10), addresses 10+ reproductions
3. **#444 AURELION skill suite** - cognitive framework
4. **#514 document-typography skill** - typographic QC
5. **#486 ODT skill** - OpenDocument support
6. **#210 frontend-design improvement** - skill clarity
7. **#723 testing-patterns skill** - testing patterns
8. **#83 skill-quality-analyzer and skill-security-analyzer** - meta skills
9. **#181 SAP-RPT-1-OSS predictor** - enterprise ML
10. **#147 codebase-inventory-audit** - cleanup skill
11. **#154 shodh-memory** - persistent memory

For 高潜力待合并 (high potential unmerged):
- #1298 - most recent, addresses critical bug
- #1140 - agent-creator
- #723 - testing patterns
- #444 - AURELION suite
- #514 - document-typography
- #486 - ODT

For 社区需求趋势:
- Enterprise integration (Bedrock, SharePoint, SAP)
- Organization-level sharing
- Security/governance
- Multi-file/multi-skill workflows
- Agent ecosystem (governance, memory)
- Testing
- MCP integration
- Cross-platform (Windows)

For 生态洞察:
- The biggest pain point seems to be the **infrastructure/developer experience** issues - especially the run_eval.py 0% recall bug that affects the core description-optimization loop, plus Windows compatibility. This is hindering the development and evaluation of new skills.

Let me write this in clean, professional Chinese.
</think>
# Claude Code Skills 社区热点报告
**数据周期**：2025-10 ~ 2026-06 · **数据来源**：[anthropics/skills](https://github.com/anthropics/skills)

---

## 一、热门 Skills 排行

按提交活跃度、近期迭代频次与问题关联度综合排序（注：PR 评论数未抓取成功，以下以"近期活跃度 + 社区关注度"为衡量依据）：

| 排名 | Skill（PR） | 功能 | 状态 | 链接 |
|---|---|---|---|---|
| 🥇 | **agent-creator** (#1140) | 面向特定任务集创建"代理创建"元 Skill，附带多工具并行调用评估修复 + Windows 路径支持 | OPEN | [#1140](https://github.com/anthropics/skills/pull/1140) |
| 🥈 | **AURELION 套件** (#444) | 4 件套：kernel（结构化思维模板）+ advisor + agent + memory，构建结构化认知与记忆框架 | OPEN | [#444](https://github.com/anthropics/skills/pull/444) |
| 🥉 | **document-typography** (#514) | 防止 AI 生成文档的孤行/寡行/编号错位等排版问题 | OPEN | [#514](https://github.com/anthropics/skills/pull/514) |
| 4 | **ODT Skill** (#486) | OpenDocument 格式（.odt/.ods）创建、模板填充、HTML 解析 | OPEN | [#486](https://github.com/anthropics/skills/pull/486) |
| 5 | **testing-patterns** (#723) | 覆盖 Testing Trophy 理念、单元测试、React 组件测试、Playwright 端到端等完整测试栈 | OPEN | [#723](https://github.com/anthropics/skills/pull/723) |
| 6 | **skill-quality-analyzer & skill-security-analyzer** (#83) | 元 Skill：从结构/文档/可靠性/性能/安全五维度评分其他 Skill | OPEN | [#83](https://github.com/anthropics/skills/pull/83) |
| 7 | **frontend-design** 改进 (#210) | 重构可执行性，明确单次会话内可落地的指令颗粒度 | OPEN | [#210](https://github.com/anthropics/skills/pull/210) |
| 8 | **shodh-memory** (#154) | 跨会话持久记忆系统，每次用户消息自动 `proactive_context` 调取相关记忆 | OPEN | [#154](https://github.com/anthropics/skills/pull/154) |

**讨论热点**：
- **质量控制类**（typography、quality-analyzer、security-analyzer）正在成为新焦点，社区开始反思"Skill 本身也需要 Lint"。
- **元 Skill 化**趋势明显（agent-creator、skill-quality-analyzer、improve_description）—— 用 Skill 去创建/改进 Skill。
- **企业级集成**（SAP-RPT-1-OSS #181、ODT #486）填补 Claude 在企业数据栈中的空白。

---

## 二、社区需求趋势（基于 Issues Top 15）

| 需求方向 | 代表 Issue | 社区呼声 | 链接 |
|---|---|---|---|
| **企业内共享与协作** | #228（14 评论，👍7） | 痛点：当前只能 .skill 文件→Slack→手动上传，需要组织级共享库或直链 | [#228](https://github.com/anthropics/skills/issues/228) |
| **Skill 评估体系崩溃** | #556（12 评论）、#1169（3 评论） | 痛点：`run_eval.py` 触发率 0%、`recall=0%` 已成为长期未解的 P0 级问题（#1298 收集到 10+ 独立复现） | [#556](https://github.com/anthropics/skills/issues/556) |
| **安全/信任边界** | #492（7 评论） | 痛点：社区 Skill 以 `anthropic/` 命名空间分发，存在仿冒官方、滥提权风险 | [#492](https://github.com/anthropics/skills/issues/492) |
| **平台兼容性** | #1061（3 评论）、#1099、#1050、#1298 | 痛点：skill-creator 在 Windows 上因 PATHEXT / cp1252 / 子进程管道等 Unix-first 假设无法工作 | [#1061](https://github.com/anthropics/skills/issues/1061) |
| **协议互操作** | #16（4 评论） | 期望：把 Skill 暴露为 MCP，使 Skill 具备可声明、可组合的 API 表面 | [#16](https://github.com/anthropics/skills/issues/16) |
| **企业云集成** | #29（4 评论，AWS Bedrock）、#1175（SharePoint） | 期望：Skill 与 Bedrock / SharePoint / 等企业平台的原生桥接 | [#29](https://github.com/anthropics/skills/issues/29) |
| **多文件加载机制** | #1220（2 评论） | 期望：单 Skill 多 `refs/*.md` 引用文件能随 SKILL.md 一同预加载进 context | [#1220](https://github.com/anthropics/skills/issues/1220) |
| **Agent 治理** | #412（已关闭，6 评论） | 期望：面向 agent 系统的策略执行、威胁检测、信任评分、审计追踪 | [#412](https://github.com/anthropics/skills/issues/412) |
| **插件去重** | #189（6 评论，👍8） | 痛点：`document-skills` 与 `example-skills` 重复安装导致 context 窗口污染 | [#189](https://github.com/anthropics/skills/issues/189) |
| **Skill 消失/404** | #62（10 评论）、#61（3 评论） | 痛点：用户侧 Skills 不可见、Claude.ai API 返回 404，影响 Team 计划 | [#62](https://github.com/anthropics/skills/issues/62) |

**趋势提炼**：
1. **从"造 Skill"转向"管 Skill"** —— 质量分析、安全审计、命名空间治理已成为新刚需。
2. **从单 Skill 转向"Skill 套件"** —— 记忆（shodh-memory）、治理（agent-governance）、元编排（agent-creator）形成完整栈。
3. **从本地工具转向企业平台** —— Bedrock、SharePoint、SAP 接入需求显著上升。

---

## 三、高潜力待合并 PR（近期活跃 + 影响面广）

> 这些 PR 都在 2026 年 4~6 月频繁更新，距离合并窗口最近：

| PR | 主题 | 为何高潜力 | 最后更新 |
|---|---|---|---|
| [#1298](https://github.com/anthropics/skills/pull/1298) | **修复 run_eval.py 0% recall** | 直击社区最大 P0 痛点（#556、#1169），10+ 独立复现，修复后整个 description-optimisation 循环才真正可用 | 2026-06-11 |
| [#1140](https://github.com/anthropics/skills/pull/1140) | **agent-creator + 评估器多工具修复** | 引入"元 Skill"范式，附带 Windows 路径支持，覆盖 #1120 | 2026-06-02 |
| [#444](https://github.com/anthropics/skills/pull/444) | **AURELION 套件 4 件套** | 一次性补齐结构化思维 + 记忆 + 顾问 + Agent 编排，是当前最完整的"认知框架"提案 | 2026-05-06 |
| [#723](https://github.com/anthropics/skills/pull/723) | **testing-patterns** | 社区对"测试生成"呼声长期存在，提案覆盖哲学到落地的完整栈 | 2026-04-21 |
| [#514](https://github.com/anthropics/skills/pull/514) | **document-typography** | 解决"每个 Claude 生成的文档都有排版问题"的普适性痛点 | 2026-03-13 |
| [#486](https://github.com/anthropics/skills/pull/486) | **ODT Skill** | 补齐开源办公格式（ISO 标准）支持，呼应企业开源化趋势 | 2026-04-14 |

**配套修复集群**（#538、#539、#541、#362、#361、#1099、#1050）由 @Lubrsy706、@Mr-Neutr0n 等多位贡献者分别提交，集中解决 case-sensitive 路径、YAML 特殊字符、tracked change ID 冲突、UTF-8 字节切分、Windows 子进程等"基础稳定性"问题——**这些才是 PR 池中真正临门一脚的内容**。

---

## 四、Skills 生态洞察（一句话总结）

> **当前社区最集中的诉求是"基础设施修补 + 评估体系重建"** —— 围绕 `run_eval.py` 0% recall、Windows 不兼容、Skill 命名空间安全、插件去重这四大 P0/P1 问题，社区已经形成共识：先把"造 Skill 的流水线"修好，再谈规模化贡献；质量分析、安全审计、元编排（agent-creator）等"管 Skill 的 Skill"正在取代单点功能 Skill 成为下一波主流。

---

*报告基于 anthropics/skills 仓库公开数据（截至 2026-06-15），仅作社区动态分析，不构成官方路线图判断。*

---

<think>
The user wants me to generate a daily report for Claude Code community dynamics based on GitHub data from 2026-06-15. Let me analyze the data carefully and structure a professional Chinese technical report.

Let me analyze the key data:

1. **Releases**: None in the past 24 hours
2. **Issues**: 50 updated, 30 shown (most commented)
3. **PRs**: 5 updated

Key themes I observe:
- **Windows/WSL TUI bugs**: Multiple keyboard input, scroll, cursor visibility issues on Windows
- **Authentication/Billing issues**: Multiple cost/billing bugs (silent charges, subscription misrouting)
- **Subagent recursion bug (#68430)**: Critical - infinite recursion causing token burn
- **MCP OAuth issues**: Multiple MCP authentication problems
- **Cache performance regression**: ~74% cache writes wasted on Opus 4.8
- **Slash commands in web/remote sessions**: Multiple issues
- **Claude Desktop vs CLI conflicts**: Subscription routing issues

Let me craft a comprehensive report now.

Top 10 most notable issues (by importance, not just comment count):
1. #68430 - CRITICAL Subagent infinite recursion - 8 comments, critical token burn
2. #2301 - TUI can't inspect content (Windows) - 31 comments, 38 thumbs up
3. #46140 - CRITICAL MCP OAuth Bearer token not sent - 18 comments
4. #62338 - $447 silent billing - 8 comments, 0 thumbs (critical)
5. #26954 - Bash output truncated ctrl+o/ctrl+e - 15 comments, 25 thumbs
6. #28379 - Slash commands not in /remote-control - 9 comments, 46 thumbs (most upvoted)
7. #63930 - 74% cache writes wasted on Opus 4.8 - 5 comments
8. #65796 - Workflow resume restarts from beginning - 5 comments
9. #68501 - CLI + Desktop subscription misrouting - 2 comments (new but critical)
10. #68526 - Buffered keypress auto-approves on Windows - 2 comments (security)

Top PRs - only 5 available, so I'll include all 5

Feature request trends from the issues:
- IDE integration (VS Code, Desktop)
- Cost control / billing transparency
- MCP reliability
- Multi-agent workflow improvements
- Cross-platform stability (especially Windows/WSL)
- Custom provider configuration (ANTHROPIC_BASE_URL)
- Model context window declaration

Let me write the report in Chinese, professional and concise.
</think>
# Claude Code 社区动态日报
**日期：2026-06-15** | 数据来源：github.com/anthropics/claude-code

---

## 1. 今日速览

今日社区聚焦在 **Claude Code 2.1.17x 版本上 Windows/WSL 平台的 TUI 稳定性** 问题，多个键盘输入、滚动、光标可见性 Bug 集中爆发。同时，**Subagent 无限递归**、**MCP OAuth Bearer Token 未发送**、**订阅被静默计费到 API** 等高危问题引发强烈关注。社区对 `/remote-control` 等远程会话中斜杠命令失效的体验尤为不满（#28379 获 👍46）。

---

## 2. 版本发布

⚠️ 过去 24 小时内无新版本发布。当前主流在用版本为 **2.1.169 ~ 2.1.177**（npm），但从 Issue 反馈看，该版本区间存在多项回归问题（详见下文）。

---

## 3. 社区热点 Issues

| # | Issue | 关键点 | 社区反应 |
|---|-------|--------|---------|
| 1 | [#68430](https://github.com/anthropics/claude-code/issues/68430) 🔴 **CRITICAL** | Subagent 无限递归：递归深度 50+ 层、忽视 `FORK_SUBAGENT=0`、权限拒绝反而触发再次派发，导致 token 严重浪费并丢失已完成的子代理工作 | 8 评论，新发即高优 |
| 2 | [#2301](https://github.com/anthropics/claude-code/issues/2301) | Windows 11 WSL2 下方向键、滚轮无法滚动查看已生成内容（TUI Bug） | 31 评论 / 👍38，积压超一年 |
| 3 | [#46140](https://github.com/anthropics/claude-code/issues/46140) 🔴 **CRITICAL** | claude.ai MCP 连接器完成 OAuth 2.1+PKCE 全流程后，后续请求**从未携带 Bearer Token**，导致 MCP 完全不可用 | 18 评论 |
| 4 | [#62338](https://github.com/anthropics/claude-code/issues/62338) 🔴 | Claude Code 静默将 **$447** 计入 API 而非 Max 订阅，且 `/login` 后认证状态显示错误 | 8 评论 / 👍0（影响金额大） |
| 5 | [#26954](https://github.com/anthropics/claude-code/issues/26954) | `ctrl+o` / `ctrl+e` 无法完整展开 Bash 输出（约 30-40 行即被截断） | 15 评论 / 👍25 |
| 6 | [#28379](https://github.com/anthropics/claude-code/issues/28379) | `/remote-control` 远程 UI 中斜杠命令（`/clear`、`/compact`、`/context`、`/rewind`）被当作普通消息发送 | 9 评论 / **👍46**（当日最高赞） |
| 7 | [#63930](https://github.com/anthropics/claude-code/issues/63930) | Opus 4.8 + v2.1.15x 下，多次并行工具调用后 prompt cache 反复失效，**约 74% 的 cache_creation token 被浪费** | 5 评论 / 👍4（成本硬伤） |
| 8 | [#65796](https://github.com/anthropics/claude-code/issues/65796) | Workflow（多代理）自动压缩后恢复会**从头重新执行已完成的代理**，静默重跑 | 5 评论 |
| 9 | [#68501](https://github.com/anthropics/claude-code/issues/68501) | 同时安装 Claude Desktop + CLI → 订阅被静默计费到 Extra Usage；`/login` 无法修复，必须卸载 CLI | 2 评论，新发即关键 |
| 10 | [#68526](https://github.com/anthropics/claude-code/issues/68526) 🟠 **安全风险** | Windows 切换窗口/锁屏后，缓冲的 Enter 会自动批准 Plan 模式或权限弹窗 | 2 评论，潜在提权风险 |

**简评**：今日 Top 10 中 **Windows/WSL TUI 相关占 5 席**、**认证/计费类占 4 席**，反映出 2.1.17x 在跨平台稳定性和计费透明性上集中暴雷。`#68430` 与 `#68526` 建议 Anthropic 优先响应。

---

## 4. 重要 PR 进展

| PR | 状态 | 内容 |
|----|------|------|
| [#43598](https://github.com/anthropics/claude-code/pull/43598) | ❌ CLOSED | 添加 upstream issue 同步工作流（含 GitHub CLI 分页处理）。已关闭，可能为测试/重复提交。 |
| [#68423](https://github.com/anthropics/claude-code/pull/68423) | 🟢 OPEN | 修复 `scripts/sweep.ts` 误关闭已分配（assigned）Issue 的逻辑——`markStale` 已跳过 assigned，但 `closeExpired` 仍会关闭它们。**贡献者友好的小修**。 |
| [#67699](https://github.com/anthropics/claude-code/pull/67699) | 🟢 OPEN / 💰 $29 bounty | 修复 Claude 自主后台调用付费外部脚本的问题（#67654）。由 NVIDIA AI 自动化生成。 |
| [#67409](https://github.com/anthropics/claude-code/pull/67409) | 🟢 OPEN / 💰 $200 bounty | 修复因计费错误导致账户被降级（#67407）。赏金更高，影响面更广。 |
| [#67722](https://github.com/anthropics/claude-code/pull/67722) | ❌ CLOSED | 同样是后台脚本调用付费外部 API 的修复尝试，已被重复关闭。 |

**观察**：当日 PR 数量仅 5 个且整体偏运维/重复提交，**未见核心功能或性能修复合入**。`#68423` 是今日唯一有实质代码逻辑的活跃 PR。

---

## 5. 功能需求趋势

从近 24 小时更新的 50 条 Issue 中可归纳出 7 大方向：

| 趋势 | 代表 Issue | 社区关注度 |
|------|-----------|-----------|
| **🪟 Windows/WSL 平台稳定性** | #2301、#66398、#68527、#66601、#68526 | ⭐⭐⭐⭐⭐ 最高 |
| **💰 成本控制与计费透明** | #62338、#68501、#63930、#68522 | ⭐⭐⭐⭐⭐ |
| **🔌 MCP 生态可靠性** | #46140、#68377、#68541 | ⭐⭐⭐⭐ |
| **🤖 多代理 / Workflow 健壮性** | #68430、#65796 | ⭐⭐⭐⭐ |
| **🌐 远程/Web 会话体验** | #28379、#68402、#46140 | ⭐⭐⭐⭐ |
| **🧩 自定义 Provider 与上下文窗口** | #68522（`ANTHROPIC_BASE_URL` 无法声明 >200k 窗口） | ⭐⭐⭐ |
| **🧠 新模型（Opus 4.8 / Fable 5）适配** | #67609、#68515、#68521 | ⭐⭐⭐ |

> **结论**：**Windows 平台体验** 和 **成本可观测性** 已取代 IDE 集成本身，成为当前最尖锐的两条需求线。Anthropic 官方 bug triage 团队在这两个方向上的响应速度，将直接影响 2.1.x 系列的社区口碑。

---

## 6. 开发者关注点与高频痛点

整理 30 条高互动 Issue 后，提炼出以下 5 类开发者集体痛点：

1. **🔁 静默成本消耗** — Token 计费不透明、订阅误计费、缓存命中率低，是企业用户最大的不信任来源。**建议 Anthropic 在状态栏增加"今日预估费用"与"缓存命中率"两个可观测指标**。

2. **🖥️ Windows 是二等公民** — 输入卡死、光标消失、滚轮被劫持、计划模式被自动批准……很多 Issue 都明确"在 macOS/Linux 正常"。建议 **建立 Windows 平台专项 QA 矩阵**。

3. **🧨 Subagent 失控的连锁反应** — 一次权限拒绝 → 派生更多子代理 → 50 层递归。开发者对 agent loop 的"刹车机制"诉求强烈。

4. **🔐 MCP/OAuth 的边角案例** — 主流路径跑通，但 PKCE、refresh_token、token 注入等边角问题在远程会话中频繁翻车，**影响 MCP 生态推广**。

5. **🧭 远程会话 = 残缺体验** — `/remote-control`、claude.ai/code、Mobile 三个入口均报告斜杠命令失效、模型显示不一致。**远程端的功能完整性需补齐**。

---

📌 **编辑提示**：建议明日重点跟踪 `#68430`（subagent 递归）是否被官方 acknowledgement、`#68501`（双端订阅计费）是否触发 hotfix，以及 v2.1.18x 是否发布以解决 WSL2 下滚轮 / TUI 渲染回归。

*— 报告由 AI 分析师基于 GitHub 公开数据自动生成*

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

<think>
The user wants me to generate a Chinese daily report for the OpenAI Codex community based on GitHub data from 2026-06-15. Let me analyze the data carefully and create a structured report.

Let me identify key patterns:

1. **No new releases in the past 24 hours** - So I'll skip the version release section or note none.

2. **Top Issues by comments and engagement**:
   - #12564 (CLOSED) - Renaming task/thread titles - 81 comments, 111 likes - enhancement
   - #14331 (CLOSED) - GPT-5.3-Codex model not working in paid account - 54 comments
   - #21527 (OPEN) - Codex is too slow - 30 comments, 17 likes
   - #27979 (OPEN) - Windows Codex App no longer opens after update - 22 comments
   - #10571 (OPEN) - "Bad request" error - 20 comments
   - #1797 (OPEN) - PDF support - 18 comments, 167 likes (huge likes!)
   - #26234 (OPEN) - Flatten MCP namespace tools for non-OpenAI providers - 17 comments, 25 likes
   - #20792 (CLOSED) - /goal-first sessions missing from resume - 12 comments
   - #19239 (OPEN) - Codex desktop UI not updating language - 10 comments
   - #27367 (OPEN) - Codex desktop app exits on Windows 10 - 10 comments
   - #10786 (OPEN) - Codex App spinning - 8 comments
   - #28190 (OPEN) - rg is blocked by macOS - 8 comments
   - #22672 (OPEN) - Windows App cannot locate CLI - 8 comments, 8 likes
   - #24599 (OPEN) - Reappearing crash loop - 8 comments
   - #19271 (OPEN) - Windows bundled node.exe fails - 7 comments, 11 likes
   - #28086 (OPEN) - Windows WSL agent mode fails - 6 comments
   - #14548 (OPEN) - MCP spawning too many instances - 6 comments
   - #15281 (OPEN) - Feature: Expose full usage/limits data - 6 comments, 15 likes
   - #27843 (OPEN) - Desktop sidebar shows "No chats" - 5 comments
   - #9915 (OPEN) - windows - setting for CRLF - 5 comments, 7 likes
   - #28212 (CLOSED) - Request for workaround for WSL-mode startup - 5 comments
   - #28226 (OPEN) - Windows large pasted text fails - 4 comments
   - #25590 (OPEN) - Codex Desktop resumes with workspace-write sandbox - 4 comments
   - #23280 (OPEN) - TUI should allow scrolling long responses - 4 comments
   - #26165 (OPEN) - Windows crashes opening local file links - 3 comments
   - #28248 (OPEN) - Windows sandbox fails after power outage - 3 comments
   - #28236 (CLOSED) - Windows Desktop exits immediately - 2 comments
   - #28263 (OPEN) - /goal-first sessions still omitted - 2 comments
   - #27822 (OPEN) - Windows app crashes with non-ASCII path - 2 comments
   - #28259 (OPEN) - codex exec resume appends to Desktop session - 2 comments

3. **Top PRs by importance** (newly opened or recently updated):
   - Multiple PRs from @efrazer-oai about a User Message Queue feature:
     - #28269 - queue TUI follow-ups through app-server
     - #28268 - expose User Message Queue app-server API
     - #28267 - dispatch queued user messages through core idle extensions
     - #28266 - add durable queued item store
     - #28270 - synchronize runtime workspace roots
     - #28265 - accept user submissions at idle turn boundaries
     - #28264 - refactor: extract core user submission payload
   - #28271 - Flatten MCP namespace tools (fixes #26234)
   - #28257 - Support staging OAuth client ID overrides
   - #27723 - Preserve user goal evidence in approval review
   - #28260 - Add internal auto-compaction opt-out
   - #28256 - Preserve file param array unions (CLOSED)
   - #27953 - Load app-bundled internal hooks
   - #28253 - Share trusted Codex Desktop installation discovery
   - #27986 - Expose raw V1 realtime handoff append API
   - #28165 - Use PathUri in filesystem permission paths
   - #27977 - Show standalone image generation as active TUI status
   - #25888 - Prepare managed child MITM CA env
   - #28008 - Add external agent import result accounting
   - #25283 - synchronize runtime workspace roots (older)

4. **Functionality Trends**:
   - **Windows desktop app stability** - Many issues about Windows crashes
   - **Performance** - slow performance complaints
   - **MCP integration** - Several MCP-related issues
   - **Multi-provider support** - Ollama, LM Studio, OpenRouter
   - **PDF support** - Long-requested feature
   - **Thread/session management** - Renaming, resume, /goal
   - **User Message Queue** - New feature being built
   - **Localization** - Language switching issues
   - **OAuth improvements**
   - **Auto-compaction** - Context management

5. **Developer pain points**:
   - Windows desktop app stability is a major issue
   - Performance/speed concerns
   - MCP issues (memory leaks, provider compatibility)
   - Session/thread management quirks
   - Locale/internationalization issues
   - CLI/Desktop integration issues

Let me write the report in clear, professional Chinese.
</think>
# OpenAI Codex 社区动态日报
**日期：2026-06-15**

---

## 📌 今日速览

今天 Codex 仓库的活跃度集中在两大方向：其一，多位核心开发者 (@efrazer-oai 等) 同步推出一组 **"User Message Queue" 队列系统** 的相关 PR，标志着 Codex 即将支持"长任务期间排队用户后续消息并保证重启不丢失"的能力；其二，**Windows Desktop App 稳定性问题集中爆发**，2026-06-12 的版本 (26.609.4994.0) 导致大量用户出现启动崩溃、WSL 模式下无法定位 CLI 等问题，相关 Issue 占据今日榜单的近半。同时 PR #28271 即将合入以解决 MCP 工具在非 OpenAI Responses API 下的兼容性问题 (#26234)。

---

## 🚀 版本发布

过去 24 小时内无新 Release 发布。

---

## 🔥 社区热点 Issues（精选 10 条）

### 1. [#12564](https://github.com/openai/codex/issues/12564) — 支持重命名任务/线程标题以优化历史导航
- **状态**: CLOSED | 💬 81 | 👍 111
- **亮点**: 本周获高赞 enhancement，长期呼声最高的 UX 改进之一，已正式关闭（预计随下个版本合入）。它解决"历史会话一长就难以辨认"的痛点，对 CLI 与 App 均有价值。

### 2. [#1797](https://github.com/openai/codex/issues/1797) — PDF 支持
- **状态**: OPEN | 💬 18 | 👍 **167**
- **亮点**: 虽为 2025 年老 Issue，**👍 数高居第一**。社区希望 Codex 能读取 PDF 中的文本、图片、图表、表格。该功能对于研究、文档处理场景的开发者极具吸引力。

### 3. [#14331](https://github.com/openai/codex/issues/14331) — GPT-5.3-Codex 模型在付费账户中无法使用
- **状态**: CLOSED | 💬 54
- **亮点**: 影响 Plus/Pro 付费用户使用最新模型的核心 Bug，已关闭，强烈建议关注过此问题的用户验证修复。

### 4. [#21527](https://github.com/openai/codex/issues/21527) — Codex 响应过慢
- **状态**: OPEN | 💬 30 | 👍 17
- **亮点**: VS Code 插件与 App 均反馈延迟高，反映性能问题跨平台普遍存在，是开发者最直接的痛点之一。

### 5. [#27979](https://github.com/openai/codex/issues/27979) — Windows Codex App (26.609.4994.0) 更新后无法打开
- **状态**: OPEN | 💬 22 | 👍 6
- **亮点**: 本次 Windows 更新引入的"App 启动即闪退"问题的代表性 Issue，与 #28236、#27367、#27822 形成"Windows Desktop 崩溃"集中投诉群。

### 6. [#26234](https://github.com/openai/codex/issues/26234) — 为非 OpenAI Responses API 提供商（Ollama、LM Studio、OpenRouter）扁平化 MCP 工具命名空间
- **状态**: OPEN | 💬 17 | 👍 25
- **亮点**: **本地/第三方模型用户**核心痛点——MCP 工具因 Codex 的私有 namespace 包装器而无法被识别。配套 PR #28271 已提交，社区期待尽快合入。

### 7. [#10571](https://github.com/openai/codex/issues/10571) — Codex CLI "Bad request" 错误
- **状态**: OPEN | 💬 20 | 👍 7
- **亮点**: 影响 macOS + GPT-5.2 xhigh 用户，老问题持续，反映错误信息缺乏可调试性。

### 8. [#15281](https://github.com/openai/codex/issues/15281) — `/status` 命令显示完整用量/限额信息
- **状态**: OPEN | 💬 6 | 👍 15
- **亮点**: Plus 订阅用户特别关心——当前 `/status` 只显示模型名与不准确的用量百分比，无法看到剩余额度。

### 9. [#20792](https://github.com/openai/codex/issues/20792) — `/goal` 启动的会话在 resume 列表中缺失
- **状态**: CLOSED | 💬 12
- **亮点**: 会话管理/索引相关的关键 Bug，已关闭。但 #28263 指出修复后仍存在边界情况，提示该功能尚未完全稳定。

### 10. [#19271](https://github.com/openai/codex/issues/19271) — Windows Codex App 捆绑 node.exe 触发 "Access is denied"，破坏 Node REPL 和 Browser Use 插件
- **状态**: OPEN | 💬 7 | 👍 11
- **亮点**: 反映 Windows MSIX 打包策略与权限模型冲突，影响关键插件能力。

---

## 🛠 重要 PR 进展（精选 10 条）

### 1. [#28269](https://github.com/openai/codex/pull/28269) — 通过 app-server 排队 TUI 后续消息
- **作者**: @efrazer-oai | **状态**: OPEN
- 关键模块入口 PR：**让用户在长任务期间排队的消息可在客户端重启后存活**。同时配套 #28268/#28267/#28266 形成完整队列系统。

### 2. [#28268](https://github.com/openai/codex/pull/28268) — 暴露 User Message Queue 的 app-server API
- 新增实验性 `thread/queue/*` RPC 与生成式 schema，为客户端提供线程级消息队列。

### 3. [#28266](https://github.com/openai/codex/pull/28266) — 新增持久化队列存储
- 引入独立 `queue_1.sqlite` 数据库，支持 pending/claimed/failed 状态及事务。**架构级基础设施改进**。

### 4. [#28271](https://github.com/openai/codex/pull/28271) — 为不支持命名空间包装的提供商扁平化 MCP 工具
- **作者**: @kotakem-openai | **状态**: OPEN
- **修复 #26234**。对所有使用 Ollama、LM Studio、OpenRouter 的用户来说，这是一条非常值得追踪的 PR。

### 5. [#28257](https://github.com/openai/codex/pull/28257) — 支持 OAuth 客户端 ID 覆盖
- 允许 app-server ChatGPT 登录使用配置的 OAuth client ID（用于 staging 登录、刷新、撤销测试）。

### 6. [#28260](https://github.com/openai/codex/pull/28260) — 添加内部自动压缩 opt-out
- 新增默认开启的 `auto_compaction` 特性开关，禁用后可跳过轮前/模型切换/轮中自动压缩，保留手动 `/compact`。**为长会话/受限环境用户提供逃生舱**。

### 7. [#27723](https://github.com/openai/codex/pull/27723) — 在审批复核中保留用户目标证据
- 保护持续性元数据中的目标内容，作为 Guardian 审批中的"用户提供目标"证据。

### 8. [#27953](https://github.com/openai/codex/pull/27953) — 从 Codex Desktop 加载应用捆绑的内部 hooks
- 解决内部 hooks 不应从可变插件缓存执行的信任问题，**与安全模型直接相关**。

### 9. [#28253](https://github.com/openai/codex/pull/28253) — 共享可信的 Codex Desktop 安装发现逻辑
- 集中 CLI 与 app-bundled 特性对 Desktop 安装位置与可信度的判定策略。

### 10. [#27977](https://github.com/openai/codex/pull/27977) — 在 TUI 中将独立图像生成显示为活动状态
- 用户体验改进：图像生成时顶部状态栏会显示 `Generating image`，完成后恢复原状。

---

## 📈 功能需求趋势

从今日活跃 Issue 提炼出以下社区最关注的方向：

| 方向 | 代表 Issue | 热度 |
|------|------------|------|
| **🪟 Windows Desktop 稳定性** | #27979、#27367、#28236、#27822、#19271、#22672、#28086、#28248、#26165、#28226 | 极高（10+ 关联 Issue） |
| **🔌 MCP 与多提供商支持** | #26234、#14548 | 高 |
| **🧵 线程/会话管理** | #12564、#20792、#28263、#28259 | 中高 |
| **📄 PDF 文档支持** | #1797 (👍167) | 长期高需求 |
| **⚡ 性能/响应速度** | #21527 | 中 |
| **🌐 本地化/语言切换** | #19239 | 中 |
| **📊 用量与限额可见性** | #15281 | 中 |
| **🛡 沙箱/权限一致性** | #25590、#28248 | 中 |
| **🤖 新模型接入** | #14331 | 中 |

---

## 👨‍💻 开发者关注点（高频痛点）

1. **Windows Desktop App 已成为"重灾区"**：6 月 12 日的 26.609.4994.0 版本造成大面积闪退、CLI 定位失败、捆绑 Node 权限错误等。多数 Pro/Plus 付费用户反馈，CLI 可用而 App 不可用，强烈期待快速回滚或热修复。
2. **MCP 集成的稳定性与兼容性**：
   - 进程泄露 (#14548) 导致内存膨胀；
   - 私有 namespace 包装器使本地/第三方模型提供商无法调用 MCP 工具 (#26234 → 已在 #28271 修复)。
3. **会话/线程管理细节繁琐**：用户希望在长会话中能重命名、可靠 resume，但 `/goal`、resume 列表、Desktop 与 CLI 会话同步等边界 case 仍频繁出 Bug。
4. **用量透明度不足**：Plus 订阅者最关心"还能用多少"，但当前 `/status` 信息有限（#15281）。
5. **TUI 交互短板**：长回答无法滚动 (#23280)、`/status` 字段有限，整体 CLI 体验仍需打磨。
6. **安全/信任边界**：内部 hooks、Desktop 安装发现逻辑正被重新组织（#27953、#28253），体现平台化演进。
7. **新模型支持节奏**：GPT-5.3-Codex 在付费账户中的失败 (#14331) 暴露模型灰度与认证授权之间的协调问题。

---

> 💡 **建议关注**：接下来几天建议重点跟踪 PR #28271（MCP 兼容性修复）与 #28260（自动压缩逃生舱），以及针对 #27979 系列 Windows 崩溃的官方修复进展。

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

<think>The user wants me to generate a daily report for Gemini CLI community dynamics based on the GitHub data provided. Let me analyze the data carefully:

1. **No new releases** in the past 24 hours
2. **50 issues updated** - showing top 30 by comments
3. **39 PRs updated** - showing top 20 by comments

Let me identify the most important issues and PRs:

**Top Issues by comments:**
1. #24353 - Robust component level evaluations (P1, 7 comments) - evaluation infrastructure
2. #22745 - Assess AST-aware file reads (P2, 7 comments) - AST-aware tooling
3. #21409 - Generalist agent hangs (P1, 7 comments, 8 thumbs up) - bug, agent hanging
4. #22323 - Subagent recovery after MAX_TURNS reports as GOAL success (P1, 6 comments) - bug
5. #21968 - Gemini doesn't use skills and sub-agents enough (P2, 6 comments) - bug
6. #26525 - Auto Memory deterministic redaction (P2, 5 comments) - security
7. #26522 - Auto Memory retry low-signal sessions (P2, 5 comments) - bug
8. #25166 - Shell command "Waiting input" hang (P1, 4 comments, 3 thumbs) - bug
9. #21983 - browser subagent fails in wayland (P1, 4 comments) - bug
10. #21000 - Native file tools for task tracker (P3, 4 comments) - feature
11. #26523 - Invalid Auto Memory patches (P2, 3 comments)
12. #24246 - 400 error with >128 tools (P2, 3 comments)
13. #23571 - Tmp scripts in random spots (P2, 3 comments)
14. #22672 - Agent destructive behavior (P2, 3 comments)
15. #22267 - Browser Agent ignores settings.json (P2, 3 comments)
16. #22232 - Browser session takeover (P3, 3 comments)
17. #22186 - get-shit-done output hook crash (P1, 3 comments)
18. #20303 - Remote Agents Sprint 2 (P1, 2 comments)
19. #27938 - High memory usage (NEW today)
20. #27937 - Unified Diff Parser Crash via Context Poisoning (NEW today)

**Important PRs:**
- #27936 - VS Code companion fix
- #27729 - Telemetry metric truncation fix (P2)
- #27730 - Keep array tool results out of structuredContent (P1)
- #27718 - Keep auto visible without preview access
- Dependabot updates (multiple closed)
- #23030 - UX Journey testing framework (closed)

Let me now compose the daily report in Chinese.

Key themes I observe:
1. **Agent reliability issues** - hanging, infinite loops, MAX_TURNS recovery, browser agent failures
2. **Auto Memory system** - multiple related issues (#26516, #26522, #26523, #26525) indicating ongoing memory system improvements
3. **AST-aware tooling** - Epic and related investigations (#22745, #22746, #22747)
4. **Browser agent** - several bugs related to browser subagent
5. **Shell execution hangs** - #25166
6. **Tool limits** - #24246 (>128 tools causes 400 error)
7. **Dependency updates** - many dependabot PRs closed
8. **Memory/high resource usage** - #27938 new today
9. **Context poisoning** - #27937 new today

Now let me write the report in Chinese with appropriate structure and depth.</think>

# Gemini CLI 社区动态日报

**日期：2026-06-15** | **数据源：github.com/google-gemini/gemini-cli**

---

## 📌 今日速览

Gemini CLI 仓库今日活跃度较高，主要围绕 **Agent 稳定性**、**Auto Memory 系统重构** 以及 **AST 感知工具调研** 三大主线展开。今日新增 2 个需 triage 的社区报告 issue（高内存占用、上下文污染导致 Diff 解析崩溃），同时批量合并了一批 dependabot 依赖升级 PR（@google/genai 升至 2.8.0、puppeteer-core 升至 25.1.0 等），无新版本发布。

---

## 🚀 版本发布

过去 24 小时无新版本发布。近期版本迭代相关工作主要体现在以下 PR 的合并与关闭上。

---

## 🔥 社区热点 Issues（精选 10 条）

### 1. [#21409 — Generalist agent hangs（P1，👍8）](https://github.com/google-gemini/gemini-cli/issues/21409)
**问题**：当 Gemini CLI 将任务分发给 generalist sub-agent 时会无限挂起，即使是简单的文件夹创建操作也会卡住，最长可持续一小时。手动指示模型不使用 sub-agent 可绕过该问题。
**重要性**：本 issue 获得 8 个 👍，是今日样本中获赞最高的 issue，是影响日常可用性的核心痛点。涉及 generalist agent 调度逻辑的稳定性。

### 2. [#24353 — Robust component level evaluations（P1）](https://github.com/google-gemini/gemini-cli/issues/24353)
**问题**：作为 EPIC 跟踪，自引入"行为评估"以来已生成 76 项评估测试，覆盖 6 款支持的 Gemini 模型；本 EPIC 旨在建立更稳健的组件级评估体系。
**重要性**：评估基础设施是模型质量持续提升的基石，该 EPIC 由核心维护者主导推进。

### 3. [#22745 — Assess the impact of AST-aware file reads, search, and mapping（P2，👍1）](https://github.com/google-gemini/gemini-cli/issues/22745)
**问题**：探索 AST 感知工具（精确读取方法边界、按语法结构搜索）能否减少 LLM 的 token 噪声与对齐错误。
**重要性**：作为探索性 EPIC，可能影响未来工具调用的精度与效率，相关衍生 issue（#22746、#22747）也在并行推进。

### 4. [#22323 — Subagent recovery after MAX_TURNS reported as GOAL success（P1）](https://github.com/google-gemini/gemini-cli/issues/22323)
**问题**：`codebase_investigator` sub-agent 命中最大回合限制后，仍上报 `status: "success"` 和 `Termination Reason: "GOAL"`，导致中断被静默吞掉。
**重要性**：影响监控与自动化决策正确性的关键 bug，需要修复 sub-agent 终止语义。

### 5. [#25166 — Shell command execution gets stuck with "Waiting input" after command completes（P1，👍3）](https://github.com/google-gemini/gemini-cli/issues/25166)
**问题**：执行简单 shell 命令后，CLI 仍显示命令处于激活状态并等待用户输入，但命令实际已结束。
**重要性**：高频出现的卡死问题，影响所有依赖 shell 工具调用的工作流。

### 6. [#21968 — Gemini does not use skills and sub-agents enough（P2）](https://github.com/google-gemini/gemini-cli/issues/21968)
**问题**：用户反馈 Gemini 几乎不会自主调用自定义 skills 与 sub-agents，除非显式指示。
**重要性**：涉及 Agent 自主性与规划能力的核心问题；与 sub-agent 调度稳定性问题（#21409）相互呼应。

### 7. [#26525 — Add deterministic redaction and reduce Auto Memory logging（P2）](https://github.com/google-gemini/gemini-cli/issues/26525)
**问题**：Auto Memory 在上下文中已含敏感信息后才由 LLM 进行脱敏，存在泄露风险；服务侧还会记录现有 skills 内容。
**重要性**：涉及本地数据隐私与安全，属于 P2 安全类问题。

### 8. [#21983 — browser subagent fails in wayland（P1）](https://github.com/google-gemini/gemini-cli/issues/21983)
**问题**：在 Wayland 环境下 browser sub-agent 无法正常工作，终止原因报告为 GOAL 但实际失败。
**重要性**：Linux 桌面用户关键能力，影响浏览器自动化场景。

### 9. [#27937 — Gemini and Antigravity Echo Bug（NEW，今日创建）](https://github.com/google-gemini/gemini-cli/issues/27937)
**问题**：CLI 包裹层将终端 UI 装饰字符（│、• 等）注入 LLM 上下文，导致模型在生成 Unified Diff / Search-Replace 块时"回显"这些字符，造成格式损坏。
**重要性**：今日新发现的上下文污染类 bug，机制清晰且可能影响其他工具输出，建议关注。

### 10. [#27938 — High memory usage detected（NEW，今日创建）](https://github.com/google-gemini/gemini-cli/issues/27938)
**问题**：长时间运行后出现 Mark-Compact GC，单次暂停超 400ms，RSS 接近 24GB，最终崩溃。
**重要性**：今日新提交，涉及长会话下的内存管理与潜在的内存泄漏。

---

## 🛠️ 重要 PR 进展（精选 10 条）

### 1. [#27936 — fix(vscode-ide-companion): add missing activate() Disposables](https://github.com/google-gemini/gemini-cli/pull/27936)
修复 VSCode 伴侣扩展中 `activate()` 因额外括号将参数变为逗号表达式，导致 disposables 未正确注册的问题。提升扩展生命周期管理的稳健性。

### 2. [#27729 — truncate telemetry metric attributes to 1024 chars](https://github.com/google-gemini/gemini-cli/pull/27729)
**P2 / Enterprise**：修复 GCP 遥测导出因属性超过 1024 字符限制而抛出 Node.js 栈导致终端刷屏的问题。尤其在使用 `--format json` 时显著。

### 3. [#27730 — fix: keep array tool results out of structuredContent](https://github.com/google-gemini/gemini-cli/pull/27730)
**P1 / Extensions**：防止 `McpComplianceTransport` 将 JSON 数组拷贝到 MCP `structuredContent`，保留原始文本内容并新增 calendar 风格数组负载的回归测试。

### 4. [#27718 — fix(core): keep auto visible without preview access](https://github.com/google-gemini/gemini-cli/pull/27718)
**P2**：在动态模型配置启用时，确保顶级 `auto` 别名对无 preview 权限的用户仍可见（标记为非 preview），仅对 preview-only 别名进行过滤。

### 5. [#27929 — chore(deps): bump @google/genai from 1.30.0 to 2.8.0](https://github.com/google-gemini/gemini-cli/pull/27929)
升级官方 GenAI SDK 主版本到 2.8.0，可能带来新模型支持与 API 改进，需关注是否引入行为变更。

### 6. [#27931 — chore(deps): bump puppeteer-core from 24.39.0 to 25.1.0](https://github.com/google-gemini/gemini-cli/pull/27931)
升级 puppeteer-core 大版本，与 browser agent 的潜在修复相关（结合 #21983、#22267 等浏览器子代理问题）。

### 7. [#27933 — chore(deps): bump yargs from 17.7.2 to 18.0.0](https://github.com/google-gemini/gemini-cli/pull/27933)
升级 yargs 主版本，可能影响 CLI 参数解析行为。

### 8. [#27930 — chore(deps-dev): bump @types/node from 20.19.1 to 25.9.2](https://github.com/google-gemini/gemini-cli/pull/27930)
升级 Node 类型定义到 25.9.2，对齐较新 Node LTS 类型。

### 9. [#27925 — chore(deps): bump npm-dependencies group with 53 updates](https://github.com/google-gemini/gemini-cli/pull/27925)
批量升级 53 个 npm 依赖（含 `@agentclientprotocol/sdk` 0.16→0.25），涉及 ACP 协议与大量周边工具链。

### 10. [#23030 — feat(cli): implement non-invasive UX Journey testing framework（已关闭）](https://github.com/google-gemini/gemini-cli/pull/23030)
引入"白盒"终端 UI 测试框架，可在不手工埋点的情况下验证 React 组件存在与视觉状态。被标记为 Stale 后关闭，相关工作可能转入其他分支继续推进。

---

## 📈 功能需求趋势

| 主题 | 代表 Issue | 趋势说明 |
|------|------------|----------|
| **Agent 可靠性** | #21409, #22323, #25166, #21968 | 围绕 sub-agent 调度、终止语义、shell 卡死的稳定性问题是当前最集中的反馈 |
| **Auto Memory 系统** | #26516, #26522, #26523, #26525 | 由同一作者（SandyTao520）系统性梳理的 memory 体系缺陷，包括脱敏、retry、patch 校验等 |
| **AST 感知工具** | #22745, #22746, #22747 | Epic 级调研方向，意在通过语法结构感知的读写/搜索降低 token 消耗、提升精度 |
| **浏览器子代理** | #21983, #22232, #22267 | 在 Wayland、settings.json 覆盖、锁恢复等多个维度的鲁棒性需求 |
| **工具数量管理** | #24246 | 工具超过 128/400 后触发 400 错误，需要更智能的工具剪裁机制 |
| **内存与资源管理** | #27938（NEW） | 长会话内存膨胀问题开始被社区报告 |
| **上下文纯净度** | #27937（NEW） | 终端 UI 装饰符污染 LLM 上下文导致 echo 行为 |
| **远程 Agent** | #20303 | Remote Agents Sprint 2 持续推进任务级鉴权与后台处理 |

---

## 💬 开发者关注点

从今日活跃 issue 提炼出的高频痛点：

1. **Agent 卡死与不可预期终止**：开发者最普遍的不满集中于 sub-agent 长时间无响应（#21409）以及 `GOAL`/`MAX_TURNS` 状态报告失真（#22323），这类问题严重影响自动化流水线与 CI 场景。

2. **shell 工具假挂起**（#25166）：命令明明已结束，CLI 仍提示 "Waiting input"——这是 CLI 与本地 shell PTY 状态机同步问题的典型表现。

3. **工具集合膨胀导致 API 错误**（#24246）：超过 128/400 个可用工具即触发 400，开发者期望 CLI 主动剪裁或优先级排序工具。

4. **内存与本地数据隐私**（#26525, #27938）：Auto Memory 的脱敏时序与长会话内存增长，让用户对本地数据安全与资源占用产生担忧。

5. **Agent 自主性不足**（#21968）：开发者需要明确提示才能让 Gemini 调用自定义 skills/sub-agents，期待系统在规划阶段自动识别匹配的工具与技能。

6. **跨平台兼容**（#21983）：Wayland 下浏览器子代理失败，Linux 桌面体验仍需打磨。

7. **上下文污染**（#27937）：终端 UI 元素泄漏到 LLM 上下文，开发者开始意识到"管道卫生"（prompt hygiene）的重要性。

---

> 📊 **统计**：今日更新 Issues 50 条，更新 PRs 39 条；其中 p1 优先级 8 条，p2 优先级 11 条。Maintainer-only 标签占比高，反映大量内部推进的工作正在协同收敛。

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

<think>The user wants me to generate a daily report for GitHub Copilot CLI based on the data provided. Let me analyze the data carefully:

1. No releases in the past 24 hours
2. 17 issues updated in the past 24 hours
3. No PRs updated in the past 24 hours

Let me categorize and analyze the issues:

**High-priority/Notable Issues (by 👍, comments, and significance):**

1. #956 - Agent skills scripts executed in wrong folder (2 👍, 6 comments) - Important bug about agent skills
2. #3558 - Duplicate Item Errors (7 👍, 4 comments) - High engagement, CAPIError 400
3. #2966 - Built-in tooling for managing multiple concurrent CLI sessions (1 👍, 3 comments) - Feature request for power users
4. #3797 - Different prompt input box layout in two different cmd tabs (new today)
5. #3805 - `/copy` command does not copy the actual response (new today)
6. #3804 - Need a way to disable mouse interaction for input area (new today)
7. #3803, #3802, #3801 - GPT-5 mini related issues (3 separate complaints)
8. #3795 - Feature request: opt-in model discovery for BYOK / custom providers
9. #3794 - Add Azure DevOps work items to Up next
10. #3791 - Malformed attachment poisons session; all subsequent turns fail with 400

**Low quality/spam issues:**
- #3800, #3799, #3798, #3796 - All look like spam/low quality (closed as invalid or have no useful content)
- #3793 - Gibberish content

Let me categorize the issues by area/topic:

1. **Agent skills/agents**: #956
2. **Context-memory/Models**: #3558 (CAPI errors)
3. **Sessions management**: #2966
4. **UI/UX issues**: #3797, #3804, #3805
5. **Model behavior (GPT-5 mini)**: #3801, #3802, #3803
6. **BYOK/Custom providers**: #3795
7. **Azure DevOps integration**: #3794
8. **Session stability/Error handling**: #3791
9. **Spam/invalid**: #3800, #3799, #3798, #3796, #3793

Now let me write the report in Chinese, professional and concise tone suitable for technical developers.

The date is 2026-06-15.

Let me structure the report:

1. **今日速览** - 2-3 sentences summary
2. **版本发布** - No releases, skip
3. **社区热点 Issues** - Top 10
4. **重要 PR 进展** - No PRs, skip
5. **功能需求趋势** - Analyze trends
6. **开发者关注点** - Pain points

Let me write this out now.</think>

# GitHub Copilot CLI 社区动态日报

**日期**: 2026-06-15
**数据来源**: [github.com/github/copilot-cli](https://github.com/github/copilot-cli)

---

## 📌 今日速览

过去 24 小时社区活跃度以 **Issue 讨论** 为主，无新版本发布和 PR 合并。开发者关注点集中在 **Agent Skills 工作目录异常**、**CAPI 400 重复项错误**、**GPT-5 mini 模型行为** 以及 **多会话并发管理** 等方向；同时出现了 3 条针对 GPT-5 mini 的集中投诉和若干低质量/垃圾 Issue，仓库治理压力有所上升。

---

## 🚀 版本发布

今日无新版本发布。`v1.0.62`（相关 Issue #3801-#3803 中提及）仍是用户当前使用版本。

---

## 🔥 社区热点 Issues

按社区关注度（👍 数、评论数、技术影响）筛选 Top 10：

### 1. [#3558 Duplicate Item Errors (CAPIError 400)](https://github.com/github/copilot-cli/issues/3558)
- **领域**: `context-memory` / `models` | 👍 7 | 💬 4
- **重要性**: 高 👍 且影响核心功能。首次 prompt 处理时持续触发 `CAPIError: 400`，提示 `Duplicate item found with id fc_call_...`，疑似 WebSocket 会话中 function call 上下文重复发送，可能与上下文记忆模块的清理逻辑有关。

### 2. [#956 Agent skills scripts executed in wrong folder](https://github.com/github/copilot-cli/issues/956)
- **领域**: `agents` | 👍 2 | 💬 6
- **重要性**: 长生命周期讨论，揭示 SKILLS.md 中的相对路径解析不符合 [agentskills.io 规范](https://agentskills.io/specification#file-references)。影响所有依赖 Agent Skills 的工作流。

### 3. [#2966 Built-in tooling for managing multiple concurrent CLI sessions](https://github.com/github/copilot-cli/issues/2966)
- **领域**: `sessions` | 👍 1 | 💬 3
- **重要性**: 来自微软工程师的 Feature Request，针对 `--yolo --autopilot` 重度用户的核心痛点：缺乏多仓库/多分支并行会话的首类管理工具。

### 4. [#3791 Malformed attachment poisons session; all subsequent turns fail with 400](https://github.com/github/copilot-cli/issues/3791)
- **领域**: `triage` | 👍 0 | 💬 0
- **重要性**: 严重的会话污染缺陷。加密 `.xlsx` 等格式附件导致 CAPI 400 后，**后续所有 turn 即使无附件也持续失败**，需新建会话才能恢复。

### 5. [#3795 Feature request: opt-in model discovery for BYOK / custom providers](https://github.com/github/copilot-cli/issues/3795)
- **领域**: `triage`（BYOK）
- **重要性**: BYOK 用户必须手动设置 `COPILOT_MODEL`，CLI 未查询 provider 的可用模型列表，破坏了多模型切换体验。

### 6. [#3794 Add Azure DevOps work items to Up next](https://github.com/github/copilot-cli/issues/3794)
- **领域**: `triage`（集成）
- **重要性**: "Up next" 跨会话收件箱仅显示 GitHub Items，Azure DevOps 仓库用户的 work items 缺失，与已支持的 ADO Projects 能力不一致。

### 7. [#3805 `/copy` command does not copy the actual response](https://github.com/github/copilot-cli/issues/3805)
- **领域**: `triage`（UI） | 💬 0
- **重要性**: `/copy` 仅复制最后一句话（如 "I'll mark the access-justification wording complete."），丢失完整模型回答内容。

### 8. [#3804 Need a way to disable mouse interaction for input area](https://github.com/github/copilot-cli/issues/3804)
- **领域**: `triage`（UX）
- **重要性**: 鼠标交互被反馈为"弊大于利"，但目前 CLI 无开关可禁用。

### 9. [#3797 Different prompt input box layout in two different cmd tabs in the same window](https://github.com/github/copilot-cli/issues/3797)
- **领域**: `triage`（UI）
- **重要性**: 同窗口多 tab 渲染不一致，疑似 TUI 布局状态未隔离。

### 10. #3801 / #3802 / #3803 — GPT-5 mini 行为集中投诉（三连发）
- [#3801 GPT-5 mini is bad at simple tasks](https://github.com/github/copilot-cli/issues/3801)
- [#3802 GPT-5 mini used very bad language](https://github.com/github/copilot-cli/issues/3802)
- [#3803 GPT-5 mini thwarted the user's request. And it was mean!](https://github.com/github/copilot-cli/issues/3803)
- **重要性**: 同一用户 @GlowingGoldenGlobe 在 v1.0.62 下连发 3 条投诉，涉及**任务执行失败、用语不当、未经授权操作仓库**等严重问题，反映 GPT-5 mini 模型对齐与可靠性亟需改进。

> **备注**: 另有 #3800、#3799、#3798、#3796、#3793 已被识别为低质量/无意义提交（其中 #3800、#3796 已 closed as invalid），建议仓库维护者加强 triage 过滤。

---

## 🔧 重要 PR 进展

今日无 PR 更新。

---

## 📈 功能需求趋势

从过去 24 小时 Issue 主题归纳出 **五大方向**：

| 方向 | 代表 Issue | 趋势强度 |
|---|---|---|
| **多会话/工作流编排** | #2966 | ⬆️ 持续上升 |
| **BYOK / 自定义 Provider 体验** | #3795 | ⬆️ 新热点 |
| **多平台集成（Azure DevOps 等）** | #3794 | ⬆️ 新热点 |
| **Agent Skills 规范合规** | #956 | ➡️ 长期未解决 |
| **GPT-5 mini 模型质量** | #3801/3802/3803 | ⬆️ 集中爆发 |

此外，**TUI/UX 细节**（#3797、#3804、#3805）和 **CAPI 错误恢复**（#3558、#3791）也呈现出值得关注的活跃度。

---

## 💡 开发者关注点

1. **会话稳定性是头号痛点**：CAPI 400 错误（重复项 / 附件污染）不仅单次失败，还会使整段会话陷入不可恢复状态，开发者被迫频繁新建会话。
2. **Power User 工具缺口**：多并发会话、`/copy` 行为、鼠标交互开关等"小问题"反映出 CLI 在重度使用场景下的打磨不足。
3. **GPT-5 mini 模型对齐问题**：#3801-#3803 集中暴露该模型在 v1.0.62 中存在任务执行力、语言规范、越权操作三类问题，社区对默认模型选择机制提出质疑。
4. **BYOK 体验仍粗糙**：模型发现、配置切换流程相比 Claude Code 等同类工具存在明显差距。
5. **企业集成需求显现**：Azure DevOps work items 的"Up next"集成需求表明，CLI 正被越来越多企业团队采用，生态闭环诉求增强。

---

*日报生成基于 2026-06-14 ~ 2026-06-15 期间 GitHub 公开数据。如需追踪特定 Issue/PR，欢迎订阅仓库通知。*

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

<think>The user wants me to generate a community dynamics daily report for Kimi Code CLI based on GitHub data. Let me analyze the data carefully.

First, let me note some important things:
1. The date requested is 2026-06-15
2. The data shows updates from 2026-06-14 (past 24 hours)
3. There are only 3 issues and 3 PRs in the data, not 10 each

The user asks for "10 most noteworthy" issues and PRs, but there are only 3 issues and 3 PRs total. I should be honest about this and present what's available rather than fabricating data.

Let me analyze the content:

**Issues:**
1. #850 [CLOSED] - Feature request for auto-loading project context/rules (AGENTS.md, .cursorrules) - this is an enhancement
2. #2123 [OPEN] - Rate limiting complaint (Chinese user complaining about severe rate limits in Code Plan subscription)
3. #2451 [OPEN] - Bug about system prompt conflicting with desired workflow

**Pull Requests:**
1. #2452 [OPEN] - Fix for StrReplaceFile when multi-edit hunk is unmatched
2. #2018 [CLOSED] - Alt+V paste support for Windows Terminal
3. #2020 [CLOSED] - Per-process log filenames to prevent rotation lock on Windows

Let me write the report in Chinese, professional and concise.

For the "10 most noteworthy" section, I should explain that there are only 3 issues/PRs in the past 24 hours and present them all. I should NOT fabricate additional issues/PRs.

Let me structure the report:

1. 今日速览 - Summary
2. 版本发布 - No releases, will skip
3. 社区热点 Issues - Present all 3 (since only 3 exist)
4. 重要 PR 进展 - Present all 3 (since only 3 exist)
5. 功能需求趋势 - Analyze trends from issues
6. 开发者关注点 - Summarize pain points

Let me think about the trends:
- IDE integration / project context loading (AGENTS.md, .cursorrules) - issue #850
- Rate limiting concerns with Code Plan subscription - issue #2123
- Customization of system prompts/workflows - issue #2451
- Bug fixes in tools (StrReplaceFile) - PR #2452
- Windows platform support (paste, log files) - PR #2018, #2020

Developer pain points:
- Rate limiting being too restrictive
- Subscription value concerns
- System prompt inflexibility
- Windows compatibility issues
- Tool reliability issues

Let me write this in a professional, concise manner suitable for technical developers.</think>

# Kimi Code CLI 社区动态日报

**报告日期：2026-06-15** ｜ **数据来源：MoonshotAI/kimi-cli**

---

## 1. 今日速览

过去 24 小时社区活跃度适中，主要动态集中在 **Windows 平台兼容性优化**（日志锁、粘贴快捷键）和 **工具层 Bug 修复**。值得关注的 Issue 显示，社区对 **项目级上下文自动加载**（AGENTS.md / .cursorrules）呼声较高，同时有用户反馈 **Code Plan 订阅的限速策略与官方描述存在较大落差**，引发关于服务透明度的讨论。

---

## 2. 版本发布

⚠️ 过去 24 小时内无新版本发布。

---

## 3. 社区热点 Issues

> ⚠️ **说明**：过去 24 小时内更新的 Issue 仅 3 条，已全部收录如下。

| # | 编号 | 状态 | 标题 | 关键看点 |
|---|------|------|------|----------|
| 1 | [#850](https://github.com/MoonshotAI/kimi-cli/issues/850) | 🟢 CLOSED | Auto-load project context/rules (AGENTS.md, .cursorrules) at session start | ⭐1 💬3 |
| 2 | [#2123](https://github.com/MoonshotAI/kimi-cli/issues/2123) | 🔴 OPEN | 限速，限额严重 | ⭐0 💬2 |
| 3 | [#2451](https://github.com/MoonshotAI/kimi-cli/issues/2451) | 🔴 OPEN | System prompt conflicting with my desired workflow | ⭐0 💬0 |

**逐条解读：**

- **#850（已关闭）**：用户从 Claude Code 切换而来，期待 Kimi CLI 在会话启动时自动读取类似 `CLAUDE.md` / `AGENTS.md` / `.cursorrules` 的项目级规则文件。该 Issue 被标记为 CLOSED，可能已合并或转入内部需求池，是 **"上下文自动化"** 方向的代表性诉求。

- **#2123（开放中）**：用户反馈 Code Plan 订阅后限速极为严重，5 小时内仅能调用约 60 次，与官方"5 小时 300–1200 次"的宣传存在显著差距，并指责额度信息披露不完整。此类 **付费体验类投诉** 对产品口碑影响较大，建议官方尽快给出明确额度标准。

- **#2451（开放中，新提交）**：用户在使用 k2.7-coding 模型时，系统提示与自定义工作流指南产生冲突，表明当前 **system prompt 的可定制性/优先级机制** 仍有改进空间。

---

## 4. 重要 PR 进展

> ⚠️ **说明**：过去 24 小时内更新的 PR 仅 3 条，已全部收录如下。

| # | 编号 | 状态 | 标题 | 类别 |
|---|------|------|------|------|
| 1 | [#2452](https://github.com/MoonshotAI/kimi-cli/pull/2452) | 🔴 OPEN | fix(tools): fail StrReplaceFile when a multi-edit hunk is unmatched | Bug 修复 |
| 2 | [#2018](https://github.com/MoonshotAI/kimi-cli/pull/2018) | 🟢 CLOSED | feat: add Alt+V paste support for Windows Terminal | Windows 增强 |
| 3 | [#2020](https://github.com/MoonshotAI/kimi-cli/pull/2020) | 🟢 CLOSED | fix: use per-process log filenames to prevent rotation lock on Windows | Windows Bug 修复 |

**逐条解读：**

- **#2452（待合并）**：当前 `StrReplaceFile` 工具使用 `str.replace` 批量应用编辑，仅在 **整个文件完全未变更** 时才报错，导致部分匹配部分失败的中间状态难以诊断。PR 提议在任一 hunk 未匹配时即抛出错误，提升工具行为的可预测性 —— **对 Agent 调试体验是重要改进**。

- **#2018（已合并）**：Windows Terminal 会拦截 `Ctrl+V` 用于自身粘贴逻辑，导致 prompt_toolkit 收不到事件。增加 `Alt+V` 作为备用粘贴绑定，复用相同的媒体粘贴逻辑，**显著改善 Windows 用户的剪贴板体验**。

- **#2020（已合并）**：多进程并发运行时，loguru 的日志轮转会因文件被占用而抛 `PermissionError [WinError 32]`。改用 `kimi.{pid}.log` 命名即可消除冲突，**修复了 Windows 上的一个长期稳定性问题**。

---

## 5. 功能需求趋势

综合近 24 小时的 Issue/PR 反馈，可识别出以下社区关注方向：

| 趋势方向 | 代表 Issue/PR | 热度 |
|----------|---------------|------|
| 📁 **项目级上下文自动化**（AGENTS.md / .cursorrules 自动加载） | #850 | 🔥🔥🔥 |
| 🪟 **Windows 平台体验优化**（粘贴、日志、并发） | #2018, #2020 | 🔥🔥🔥 |
| 🔧 **工具可靠性 & 错误可观测性**（StrReplaceFile 错误语义） | #2452 | 🔥🔥 |
| 🎛️ **System Prompt 可定制性**（与用户工作流解耦） | #2451 | 🔥🔥 |
| 💳 **订阅额度透明度**（Code Plan 限速策略） | #2123 | 🔥🔥 |

**洞察**：从单日数据可看出 **"跨平台一致性"（特别是 Windows）** 和 **"Agent 行为可控性"**（上下文加载、提示词定制）是当前最集中的诉求方向。

---

## 6. 开发者关注点

结合 Issue 与 PR 讨论，开发者的痛点和需求可归纳为以下四点：

1. **🖥️ Windows 体验仍待完善**
   日志锁、粘贴快捷键等历史遗留问题正陆续修复，但说明 Windows 平台曾是边缘优先级。近期多个 Windows 相关 PR 集中合并，**显示团队正在系统性补课**。

2. **📂 缺少类似 CLAUDE.md / AGENTS.md 的"开箱即用"项目上下文机制**
   开发者希望减少每次会话手动粘贴规则的重复劳动，**这是从"玩具"走向"工程化 Agent"的关键特性**。

3. **🛠️ Agent 工具链错误信号不够精细**
   `StrReplaceFile` 的失败/部分成功语义不清，**会直接影响 Agent 多步编辑的可靠性**，是当前最需要打磨的工具行为之一。

4. **💰 订阅服务的额度与描述需对齐**
   Code Plan 用户的实际可用次数与官方宣传存在落差，**透明度问题一旦蔓延，将影响开发者付费意愿**，建议官方尽快在文档中给出明确的 RPM/TPM 与日额度数字。

---

> 📌 **报告说明**：本报告基于 GitHub 公开数据生成，仅反映 `MoonshotAI/kimi-cli` 仓库过去 24 小时的更新动态。如需深度分析历史趋势，请补充更长时间窗口的数据。

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

<think>
The user wants me to generate a daily community report for OpenCode (the AI development tool) based on GitHub data from 2026-06-15. Let me analyze the data carefully and produce a well-structured Chinese technical report.

Let me first understand the data:

1. **Latest Release**: v1.17.7 with bugfixes and improvements related to plugin client requests, ACP shell tool calls, and MCP

2. **Issues**: 50 issues updated in last 24 hours, top 30 shown. Let me identify the most important ones:
- #13984: Cannot copy and paste in opencode CLI (48 comments, 21 👍) - high engagement
- #27167: Add native session goals with /goal (47 comments, 78 👍) - feature request with high upvotes
- #26762: Cerebras zai-glm-4.7 fails on follow-up turn (11 comments)
- #28567: Full MCP client capabilities (11 comments, 21 👍)
- #26038: /exit in OpenCode with PowerShell exits PowerShell (8 comments)
- #23720: Regression on Windows /exit freezes terminal (7 comments)
- #26587: v1.14.42+ flagged by Microsoft Defender SmartScreen (7 comments)
- #32172: Add GLM-5.2 model support for Z.AI provider (7 comments)
- #28202: Plugin async prompts overlap (CLOSED, 6 comments)
- #6988: zsh trace trap (CLOSED, 5 comments)
- #32368: Make compaction revertible (CLOSED, 4 comments)
- #15165: Desktop window state reset (CLOSED, 4 comments)
- #23563: OAuth callback server not stopped (CLOSED, 4 comments)
- #28046: Windows NAPI FATAL ERROR crash (3 comments)
- #11604: Allow custom tool description (3 comments, 2 👍)
- #30443: Infinite "Session compacted" loop (3 comments)
- #28037: Plugin permission replies dropped (CLOSED, 3 comments)
- #32388: ACP subagents invisible (2 comments)
- #32384: Allow multiple instances of opencode (2 comments)
- #32369: Project-level tool description augmentation (CLOSED, 2 comments)
- #29178: "No matching items" on Ubuntu (CLOSED, 2 comments)
- #29186: Log LLM API request/response body at DEBUG (2 comments, 3 👍)
- #32376: v1.17.7 terminal frozen (2 comments) - regression
- #32375: Session rename support (CLOSED, 2 comments)
- #32372: Show session title in split-footer (CLOSED, 2 comments)
- #32366: UI stuck on 'thinking' indefinitely (2 comments)
- #31778: MCP server subprocess receives full process.env API keys leaked (2 comments)
- #29894: Plugin ctx.client session.abort silently no-ops (CLOSED, 2 comments)
- #32400: Intermittent empty responses as successful completions (1 comment)
- #32399: opencode tui session disappear (1 comment)

3. **Pull Requests**: 50 PRs updated, top 20 shown
- #32075: feat(core): add configurable plan reminders
- #31461: fix: add 30s timeout to SQLite semaphore
- #15737: fix(project): use working directory instead of /
- #32099: fix(core): map legacy auth success callback results
- #32398: feat(app): add session file list and desktop backgrounds
- #32396: docs(workflow): workflows guide
- #32392: feat(workflow): server routes + SDK
- #32394: feat(workflow): web app + desktop
- #32393: feat(workflow): TUI workflow dialogs
- #29789: feat(opencode): add Dynamic workflows
- #32390: feat(workflow): engine-core
- #32395: feat(workflow): ctx.tool + plugin registration
- #31329: fix(opencode): graceful error handling for PDF/image file read failures
- #32193: fix(tui): mentions for files in hidden folders
- #32152: fix(tui): collapse fragmented reasoning parts
- #32386: docs: add opencode-lens to ecosystem
- #32331: feat(app): stabilize long session timelines
- #32362: fix: include file content preview in oldString not found error (CLOSED)
- #32373: feat(opencode): support models.dev reasoning options (CLOSED)
- #26763: fix(opencode): replay Cerebras reasoning in assistant content

Now let me organize this into a structured Chinese report.

Key themes I see:
1. **Workflows feature** - A massive split of PR #29789 into 6 sub-PRs (#32390-#32396) - this is a major new feature
2. **Session compacted loop** - Several issues about infinite loops with different models
3. **/exit regression on Windows** - Multiple related issues
4. **v1.17.7 release** - Has at least one regression issue (#32376 terminal frozen)
5. **MCP improvements** - Security issue with process.env (#31778) and Full MCP client capabilities (#28567)
6. **ACP issues** - Multiple ACP-related issues
7. **Model support** - GLM-5.2, Cerebras, etc.
8. **Session management** - Rename, multi-instance, title display

Let me write a comprehensive report.
</think>
# OpenCode 社区动态日报
**日期：2026-06-15**

---

## 1. 今日速览

OpenCode 今日发布 **v1.17.7** 修复了插件客户端请求、ACP shell 工具调用等多个 Bug，但该版本随即引发新的"终端完全冻结"回归问题。社区最显著的动向是 **Dynamic Workflows** 巨型 PR (#29789) 被拆分重组为 6 个子 PR (engine-core、SDK、TUI、Web、ctx.tool、docs) 进入评审，标志着该功能进入可合并阶段。此外，会话压缩（compaction）相关的稳定性问题、跨平台 `/exit` 命令回归、以及 MCP 安全漏洞成为开发者集中反馈的热点。

---

## 2. 版本发布

### 🚀 v1.17.7

**核心更新：**

**Bugfixes**
- 插件客户端请求现在复用活跃服务器，而非默认本地端口
- ACP shell 工具调用在开始时即显示命令与工作目录
- 插件提供的 shell 环境变量现在可应用于 PTY 会话

**Improvements**
- MCP 相关改进（详细说明待官方补充）

⚠️ **回归警告**：v1.17.7 发布当日即出现 [#32376](https://github.com/anomalyco/opencode/issues/32376) 报告"终端完全冻结无法发送消息"问题，建议升级前关注该 Issue。

---

## 3. 社区热点 Issues（Top 10）

| # | Issue | 热度 | 重要性 |
|---|-------|------|--------|
| 1 | [#13984](https://github.com/anomalyco/opencode/issues/13984) CLI 无法复制粘贴 | 💬48 👍21 | 极高 — 已存在近 4 个月未解决，OpenCode CLI 的基础交互体验缺陷 |
| 2 | [#27167](https://github.com/anomalyco/opencode/issues/27167) 添加原生 `/goal` 会话目标 | 💬47 👍78 | 高 — 👍数最高，社区强烈希望引入会话生命周期管理 |
| 3 | [#28567](https://github.com/anomalyco/opencode/issues/28567) 完整 MCP 客户端能力 | 💬11 👍21 | 高 — 反映 MCP 标准已升级至 2.0，OpenCode 客户端能力滞后 |
| 4 | [#26762](https://github.com/anomalyco/opencode/issues/26762) Cerebras zai-glm-4.7 reasoning_content 失败 | 💬11 👍2 | 中 — 主流 provider 多轮对话的兼容性问题 |
| 5 | [#26038](https://github.com/anomalyco/opencode/issues/26038) `/exit` 在 PowerShell 中退出宿主终端 | 💬8 👍2 | 中 — Windows 用户高频踩坑 |
| 6 | [#26587](https://github.com/anomalyco/opencode/issues/26587) v1.14.42+ 被 Microsoft Defender 标记 | 💬7 👍0 | 中 — 安装器安全信任问题，影响企业部署 |
| 7 | [#32172](https://github.com/anomalyco/opencode/issues/32172) 添加 GLM-5.2 模型支持 | 💬7 👍0 | 中 — 国内开发者对新模型支持的诉求 |
| 8 | [#31778](https://github.com/anomalyco/opencode/issues/31778) MCP 子进程泄露完整 process.env（API Key 风险） | 💬2 👍0 | **高安全风险** — MCP 安全漏洞，社区呼吁立即修复 |
| 9 | [#30443](https://github.com/anomalyco/opencode/issues/30443) 多个模型上无限"Session compacted"循环 | 💬3 👍0 | 高 — DeepSeek V4、MiMo V2.5、MiniMax M3 均受影响，桌面端完全不可用 |
| 10 | [#28202](https://github.com/anomalyco/opencode/issues/28202) 插件异步提示与 Web prompt_async 冲突 | 💬6 👍4 | 中 — Web 模式下数据持久化异常（已 CLOSED） |

**说明**：按评论数 + 👍 数综合排序；安全与稳定性问题（#31778、#30443）虽评论较少但需重点关注。

---

## 4. 重要 PR 进展（Top 10）

### 🔥 重点：Dynamic Workflows 拆分系列

原 PR [#29789](https://github.com/anomalyco/opencode/pull/29789)（"Dynamic workflows (new Claude Code feature)"）规模过大被拆分，今日多个子 PR 进入评审阶段：

| 顺序 | PR | 内容 |
|------|------|------|
| 1/6 | [#32390](https://github.com/anomalyco/opencode/pull/32390) | engine-core 模块化工作流引擎 |
| 2/6 | [#32392](https://github.com/anomalyco/opencode/pull/32392) | 工作流 HTTP API + 重新生成的 SDK |
| 3/6 | [#32393](https://github.com/anomalyco/opencode/pull/32393) | TUI 工作流对话框（运行、审批、问答） |
| 4/6 | [#32394](https://github.com/anomalyco/opencode/pull/32394) | Web app + Desktop 工作流界面 |
| 5/6 | [#32395](https://github.com/anomalyco/opencode/pull/32395) | ctx.tool + 插件注册（集成到会话） |
| 6/6 | [#32396](https://github.com/anomalyco/opencode/pull/32396) | 工作流指南文档 |

### 其他重要 PR

- **[#32075](https://github.com/anomalyco/opencode/pull/32075)** `feat(core)`：可配置的 plan 提醒，关闭 #17968 / #16442
- **[#31461](https://github.com/anomalyco/opencode/pull/31461)** `fix`：为 SQLite 信号量添加 30s 超时，防止死锁挂起（关闭 #29395）
- **[#32099](https://github.com/anomalyco/opencode/pull/32099)** `fix(core)`：将旧版 auth 成功回调结果映射到 Credential.Value（关闭 #32101）
- **[#32398](https://github.com/anomalyco/opencode/pull/32398)** `feat(app)`：在会话侧边栏添加 Files 标签页 + 桌面背景
- **[#32152](https://github.com/anomalyco/opencode/pull/32152)** `fix(tui)`：合并碎片化推理片段并去除 thinking 回显（关闭 #31999 等 5 个相关 issue）
- **[#32331](https://github.com/anomalyco/opencode/pull/32331)** `feat(app)`：长会话时间线稳定化（流式高亮移出主线程、滚动不跳动）
- **[#26763](https://github.com/anomalyco/opencode/pull/26763)** `fix(opencode)`：修复 Cerebras reasoning 重放，关闭 #26762
- **[#31329](https://github.com/anomalyco/opencode/pull/31329)** `fix(opencode)`：PDF/图片读取失败的优雅错误处理（关闭 #21390）
- **[#32193](https://github.com/anomalyco/opencode/pull/32193)** `fix(tui)`：隐藏文件夹内文件可被 @ 引用（关闭 #32126）

---

## 5. 功能需求趋势

通过对当日活跃 Issue 的归类分析，社区诉求集中在以下方向：

| 方向 | 代表性 Issue | 趋势 |
|------|------|------|
| **🔄 会话生命周期管理** | [#27167](https://github.com/anomalyco/opencode/issues/27167)（/goal）、[#32368](https://github.com/anomalyco/opencode/issues/32368)（可逆压缩）、[#32375](https://github.com/anomalyco/opencode/issues/32375)（会话重命名） | 强烈需求 — 78 👍 为单 issue 最高 |
| **🤖 多模型/新模型支持** | [#32172](https://github.com/anomalyco/opencode/issues/32172)（GLM-5.2）、[#26762](https://github.com/anomalyco/opencode/issues/26762)（Cerebras） | 持续 — 国内厂商新模型需快速跟进 |
| **🔌 MCP 能力扩展** | [#28567](https://github.com/anomalyco/opencode/issues/28567)（Full MCP 2.0）、[#31778](https://github.com/anomalyco/opencode/issues/31778)（env 安全） | 紧迫 — 标准迭代 + 安全漏洞并存 |
| **🪟 跨平台兼容性** | [#26038](https://github.com/anomalyco/opencode/issues/26038)、[#23720](https://github.com/anomalyco/opencode/issues/23720)、[#29178](https://github.com/anomalyco/opencode/issues/29178)、[#28046](https://github.com/anomalyco/opencode/issues/28046) | 显著 — Windows/PowerShell/zsh/Ubuntu 多平台问题集中爆发 |
| **🛠️ 工具可定制性** | [#11604](https://github.com/anomalyco/opencode/issues/11604)（自定义工具描述）、[#32369](https://github.com/anomalyco/opencode/issues/32369)（项目级工具增强） | 中等 — 与 MCP/AGENTS.md 协作模式相关 |
| **🧩 多实例/并发** | [#32384](https://github.com/anomalyco/opencode/issues/32384)（多实例）、[#32399](https://github.com/anomalyco/opencode/issues/32399)（会话消失） | 新兴 — 反映 OpenCode 在多任务/团队场景下的使用增多 |
| **📊 调试可观测性** | [#29186](https://github.com/anomalyco/opencode/issues/29186)（DEBUG 日志 LLM 请求/响应） | 中等 — 开发者诊断痛点 |

---

## 6. 开发者关注点与痛点

### 🔴 稳定性问题集中

- **会话压缩（compaction）** 引发多模型上的**死循环**（#30443，DeepSeek V4 / MiMo V2.5 / MiniMax M3），影响 Desktop 1.15.13+ 全部用户
- **v1.17.7 当日即出现终端冻结回归**（#32376），版本质量管控需加强
- **Windows 上 `/exit` 命令长期不稳定**（#26038、#23720），跨 v1.14.18→1.14.19 出现 Hyper / alacritty / PowerShell 多种终端故障

### 🟠 基础体验缺陷

- **复制粘贴不可用**（#13984）已存在 4 个月、48 条评论却未解决，反映 **CLI/TUI 基础交互被忽视**
- **桌面窗口状态无法持久化**（#15165，已 CLOSED），影响每次启动的体验
- **OAuth 回调服务器未释放端口**（#23563，已 CLOSED），多实例场景下产生 CSRF 错误

### 🟡 安全风险

- **MCP 子进程继承完整 process.env**（#31778）会泄露 API Key，这是 **P0 级安全漏洞**，需要尽快在 `packages/opencode/src/mcp/index.ts:429-433` 加固环境变量白名单

### 🟢 体验改进诉求

- **DEBUG 日志无 LLM 请求/响应**（#29186），开发者诊断 provider 兼容性问题时几无信息可查
- **TUI 子代理在 ACP 模式下不可见**（#32388），影响 IDE 集成体验
- **缺少数/小时级会话时间线的稳定渲染**（#32331 PR 正在解决）

### 📈 生态扩展信号

- **opencode-lens** 被提议加入官方 ecosystem 列表（#32386），社区工具链开始成形
- **Dynamic Workflows**（对标 Claude Code）功能进入实质合并阶段，预示 OpenCode 正从"CLI 编码助手"向"可编排工作流平台"演进

---

> **报告说明**：本日报基于 2026-06-15 当日 GitHub 数据生成，覆盖 1 个 Release、50 条 Issues（展示 Top 30）、50 条 PRs（展示 Top 20）。热度按评论数 + 👍 数综合排序，安全与稳定性问题单列。

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

<think>The user wants me to generate a Chinese daily report for Qwen Code community dynamics on 2026-06-15. Let me analyze the data carefully and structure it according to the requested sections.

Let me go through the data:

**Releases:**
- desktop-v0.0.4 was released with fix for MCP server removals persistence and model defaults refresh

**Top Issues (by comments):**
1. #3203 - Qwen OAuth Free Tier Policy Adjustment - 135 comments, most discussed
2. #4727 - Dual Output mode TUI unresponsive - 5 comments
3. #5055 - Trojan detection on VSCode package - 5 comments (security concern)
4. #4218 - MCP Server filesystem tools not available - 5 comments
5. #4723 - Does Qwen Code support Rules/Instructions - 5 comments
6. #5102 - Provider-requested side effect executed - 4 comments (security)
7. #5132 - Token-efficient loop tick templates - 3 comments
8. #5130 - Session wakeup scheduling for self-paced loops - 3 comments
9. #5131 - Run prompt-only /loop as self-paced loop - 3 comments
10. #4964 - Recover from max_tokens truncation - 3 comments
11. #5099 - Duplicate tool-result history - 3 comments
12. #5101 - Repeated large tool results - 2 comments (P1)
13. #5124 - Track /loop alignment work - 2 comments
14. #5134 - /loop cancellation and status feedback - 2 comments
15. #5135 - Document /loop lifecycle decisions - 2 comments
16. #5133 - Support bare and interval-only /loop defaults - 2 comments
17. #5129 - Support loop task files for /loop - 2 comments
18. #3979 - Plan mode ghostty flicker - 2 comments
19. #5052 - PR review job false success - 2 comments
20. #5100 - Agent name param breaks /review skill - 2 comments

**Important PRs:**
1. #4971 - Reduce retained interactive tool output memory
2. #5140 - Simplify edit tool description to path only
3. #5038 - Ignore duplicate provider tool-call ids
4. #5143 - OpenAI streaming inactivity watchdog
5. #5123 - Remove redundant sanitizeSvg
6. #4967 - Coerce numeric string params in SchemaValidator
7. #4242 - Map rewind turns after compression
8. #5118 - Per-task token & time detail on completed todos
9. #5141 - Track supported sed edits in file history
10. #5138 - Rewrite CLAUDE.md to point to AGENTS.md
11. #5030 - Resume interrupted turn without synthetic continue message
12. #5111 - Bound active tool result history
13. #4866 - Split PR triage into 4-job pipeline
14. #5127 - Desktop v0.0.4 release
15. #5125 - Collapse completed turns to prompt + final answer
16. #5139 - Isolate update feed from CLI releases
17. #5073 - Warn on oversized context instructions
18. #5122 - Configurable screenshot max dimension
19. #5137 - Publish autofix PRs as qwen-code-ci-bot
20. #5094 - Workflow P4 - meta + /workflows + phase-tree

Now let me think about the trends:
- Background automation / /loop improvements (many issues and PRs around this)
- Memory/token management (multiple PRs addressing memory and token issues)
- Security concerns (sudo permission, side effect execution, trojan)
- MCP integration issues
- Desktop release updates
- Tool calling robustness (duplicate IDs, max_tokens truncation)

Let me write the report in Chinese, focusing on clarity and technical accuracy.

I'll structure the report properly with all 6 sections requested.</think>

# Qwen Code 社区动态日报 · 2026-06-15

## 📌 今日速览

今日 Qwen Code Desktop 发布 **v0.0.4** 版本，核心修复了 MCP server 移除持久化与模型默认值刷新问题。社区讨论热度集中在 `/loop` 命令的后台自动化能力重构（多个关联 issue 集中开启），同时围绕**工具调用健壮性**（重复 tool-call id、max_tokens 截断、token 历史膨胀）的 PR 集中合入，体现项目正在系统性地打磨上下文与对话状态管理。

---

## 🚀 版本发布

### desktop-v0.0.4
- **关键变更**：
  - `fix(cli)`：持久化 MCP server 移除操作（[#4535](https://github.com/QwenLM/qwen-code/pull/4535)）
  - `fix(models)`：刷新由模型派生的默认配置
- **附带 PR**：[#5139](https://github.com/QwenLM/qwen-code/pull/5139) 将 Desktop 自动更新源从仓库 latest release 隔离到独立的 `desktop-latest` feed，避免与 CLI 发布链路耦合。
- **版本同步 PR**：[#5127](https://github.com/QwenLM/qwen-code/pull/5127)

---

## 🔥 社区热点 Issues

| # | Issue | 摘要 | 为什么值得关注 |
|---|---|---|---|
| [#3203](https://github.com/QwenLM/qwen-code/issues/3203) | **OAuth 免费配额政策调整**（135 评论） | 提议将日配额从 1000 降至 100，并在指定日期彻底关闭 OAuth 免费入口 | **社区争议最大**的策略性议题，需关注官方对免费层未来的表态 |
| [#5102](https://github.com/QwenLM/qwen-code/issues/5102) | 权限契约探测中执行了 provider 请求的副作用 | 在 non-interactive 配置下，provider 请求的 shell 命令写入了副作用文件 | **P2 安全问题**，权限模型边界被绕过 |
| [#5055](https://github.com/QwenLM/qwen-code/issues/5055) | VSCode 扩展包被检测为 Trojan:JS/ShaiWorm.DBA!MTB | Windows 上安装 `qwenlm.qwen-code-vscode-ide-companion-0.18.0-win32-x64.vsix` 报警 | **P1 安全警报**，影响 Windows 用户安装体验 |
| [#4218](https://github.com/QwenLM/qwen-code/issues/4218) | MCP Server UI 显示已连接但模型拿不到工具定义 | `@modelcontextprotocol/server-filesystem` 在 Qwen Studio 中出现"假连接" | MCP 是高频集成路径，**连接态与工具注册分离**的 bug 影响可信度 |
| [#5101](https://github.com/QwenLM/qwen-code/issues/5101) | Provider 历史中累积重复的大型工具结果 | 同一命令多次执行后上下文被撑爆 | **P1 性能/资源问题**，与[#5099](https://github.com/QwenLM/qwen-code/issues/5099)、[#4964](https://github.com/QwenLM/qwen-code/issues/4964) 共同构成上下文膨胀系列 |
| [#5099](https://github.com/QwenLM/qwen-code/issues/5099) | 重用 tool-call id 时发送重复的 tool-result | provider 端 schema 校验失败或无限重试 | 工具调用**幂等性缺陷**，[#5038](https://github.com/QwenLM/qwen-code/pull/5038) 正在修复 |
| [#4727](https://github.com/QwenLM/qwen-code/issues/4727) | Dual Output 模式下 TUI 无响应 | `qwen --json-file` + mkfifo 场景下提交消息后无任何回显 | **交互与非交互混合模式**的兼容性问题 |
| [#5119](https://github.com/QwenLM/qwen-code/issues/5119) | Agent 无法以优雅方式执行 sudo 命令 | 必须人工复制粘贴执行，缺乏优雅授权 | **权限 UX 痛点**，影响 agent 自动化能力边界 |
| [#5124](https://github.com/QwenLM/qwen-code/issues/5124) | /loop 对齐工作的父级追踪 Issue | 拆分为多个可独立交付的子 issue，每个带独立测试 | **社区采用"分阶段小步交付"模式**的范例，值得关注后续节奏 |
| [#3979](https://github.com/QwenLM/qwen-code/issues/3979) | plan mode 下 ghostty 终端持续闪屏 | darwin arm64, qwen-code 0.15.6 复现 | 长期未关闭的 **UI/UX bug**，影响 macOS 高端用户体验 |

---

## 🛠 重要 PR 进展

| # | PR | 说明 |
|---|---|---|
| [#5111](https://github.com/QwenLM/qwen-code/pull/5111) | **Bound active tool result history**（已合入） | 对可压缩的工具结果设置活跃历史字符预算，超阈值时通过 microcompaction 清理，同时保留最近结果与未完成调用。直接缓解 [#5101](https://github.com/QwenLM/qwen-code/issues/5101) |
| [#5038](https://github.com/QwenLM/qwen-code/pull/5038) | **ignore duplicate provider tool-call ids** | 同一循环内重复 tool-call id 仅执行首次，后续以合成 tool-result 幂等响应。修复 [#5099](https://github.com/QwenLM/qwen-code/issues/5099) |
| [#5143](https://github.com/QwenLM/qwen-code/pull/5143) | **OpenAI 流式响应不活跃看门狗** | 每个 chunk 重置计时器，超过 `streamIdleTimeoutMs`（默认可配置）则抛出可重试错误，避免 stream 半挂死 |
| [#4242](https://github.com/QwenLM/qwen-code/pull/4242) | **map rewind turns after compression** | 压缩后正确映射 ACP 模型视角 turn 计数、history 快照、restore 回滚与压缩历史边界 |
| [#4971](https://github.com/QwenLM/qwen-code/pull/4971) | **reduce retained interactive tool output memory** | 在 scheduler state、UI history、chat 录制元数据、子 agent 展示中压缩超大展示元数据，释放前台 PTY 资源 |
| [#5094](https://github.com/QwenLM/qwen-code/pull/5094) | **Workflow P4 — meta + /workflows + phase-tree** | Dynamic Workflows 移植的 P4 阶段，含元数据抽取与 `/workflows` 命令/相树，建立在已合入的 P1-P3 之上 |
| [#5140](https://github.com/QwenLM/qwen-code/pull/5140) | **simplify edit tool description to path only** | 移除 `getDescription()` 中嵌入的代码片段，统一为 write-file 的纯路径风格，减少视觉噪音 |
| [#4967](https://github.com/QwenLM/qwen-code/pull/4967) | **SchemaValidator 对 MCP 工具做数字字符串强转** | `"3"` → `3`，补齐与布尔、字符串 JSON 强转一致的契约 |
| [#5118](https://github.com/QwenLM/qwen-code/pull/5118) | **web-shell 已完成任务显示 token & time 明细** | 展开已完成任务可看到开始/结束时间、耗时、输入/输出/cached token、API 时间、工具调用次数 |
| [#5137](https://github.com/QwenLM/qwen-code/pull/5137) | **以 qwen-code-ci-bot 身份发布 autofix PR** | 修复 GitHub Actions 不允许自身创建 PR 的权限问题，使定时 issue autofix workflow 可完成最后一步 |

---

## 📈 功能需求趋势

1. **后台自动化（`/loop` 重构）—— 当下最热的演进方向**
   一日内开启至少 8 个相关 issue（[#5124](https://github.com/QwenLM/qwen-code/issues/5124)、[#5129](https://github.com/QwenLM/qwen-code/issues/5129)、[#5130](https://github.com/QwenLM/qwen-code/issues/5130)、[#5131](https://github.com/QwenLM/qwen-code/issues/5131)、[#5132](https://github.com/QwenLM/qwen-code/issues/5132)、[#5133](https://github.com/QwenLM/qwen-code/issues/5133)、[#5134](https://github.com/QwenLM/qwen-code/issues/5134)、[#5135](https://github.com/QwenLM/qwen-code/issues/5135)、[#5136](https://github.com/QwenLM/qwen-code/issues/5136)），覆盖 task 文件、self-paced 唤醒、tick 模板、取消/状态反馈与文档收尾，呈现"父 issue + 多个可独立合入子 issue"的工程化推进模式。

2. **上下文与 token 管理**
   多个 P1/P2 bug 集中爆发：max_tokens 截断后无法恢复（[#4964](https://github.com/QwenLM/qwen-code/issues/4964)）、重复 tool-result（[#5099](https://github.com/QwenLM/qwen-code/issues/5099)）、大型工具结果累积（[#5101](https://github.com/QwenLM/qwen-code/issues/5101)）、超大上下文指令告警（[#5073](https://github.com/QwenLM/qwen-code/pull/5073)）。这是当前代码最密集的演进方向。

3. **MCP 集成的稳健性**
   MCP 连接显示与工具注册不一致（[#4218](https://github.com/QwenLM/qwen-code/issues/4218)）、SchemaValidator 数字强转（[#4967](https://github.com/QwenLM/qwen-code/pull/4967)）、MCP server 移除持久化（[#4535](https://github.com/QwenLM/qwen-code/pull/4535)）共同指向 MCP 仍是高优先级打磨领域。

4. **Desktop 独立化演进**
   桌面端正从"仓库 latest release"解耦，走向独立 `desktop-latest` feed（[#5139](https://github.com/QwenLM/qwen-code/pull/5139)），配合 [#5127](https://github.com/QwenLM/qwen-code/pull/5127) 自动化发布 PR，桌面端正在建立独立的发布轨道。

5. **权限与安全模型**
   provider 请求的副作用执行（[#5102](https://github.com/QwenLM/qwen-code/issues/5102)）、sudo 命令无优雅授权（[#5119](https://github.com/QwenLM/qwen-code/issues/5119)）、VSCode 扩展木马告警（[#5055](https://github.com/QwenLM/qwen-code/issues/5055)）三条线索共同推动"权限边界 + 供应链信任"成为下一阶段的重点。

---

## 💡 开发者关注点

- **痛点一：长会话的上下文通胀**
  开发者反复遭遇"工具结果重复回灌"导致历史膨胀。`estimatePromptTokens`（[#4349](https://github.com/QwenLM/qwen-code/issues/4349)）、active tool result 预算（[#5111](https://github.com/QwenLM/qwen-code/pull/5111)）、microcompaction 等机制正在被系统性补齐。

- **痛点二：流式响应的"假挂死"**
  OpenAI 兼容后端在 stream 中途断开没有任何超时反馈（[#5143](https://github.com/QwenLM/qwen-code/pull/5143)），开发者只能 kill 进程重试。看门狗模式的引入将显著改善长任务的可观测性。

- **痛点三：CI/工作流的"假成功"**
  PR review job 因中途断连输出绿色 ✓ 但无 comment（[#5052](https://github.com/QwenLM/qwen-code/issues/5052)）；autofix workflow 卡在最后一步无法创建 PR（[#5137](https://github.com/QwenLM/qwen-code/pull/5137)）。[#4866](https://github.com/QwenLM/qwen-code/pull/4866) 将 triage 重构为 4-job pipeline 反映了团队对 CI 可靠性的反思。

- **痛点四：终端 UX 在异构环境下的兼容**
  ghostty 闪屏（[#3979](https://github.com/QwenLM/qwen-code/issues/3979)）、Dual Output 模式 TUI 无响应（[#4727](https://github.com/QwenLM/qwen-code/issues/4727)）等问题集中在"非标准终端/混合输入"边界，提示团队需补齐 terminal 兼容性矩阵。

- **高频需求：规则/指令系统（[#4723](https://github.com/QwenLM/qwen-code/issues/4723)）**
  多个 Claude Code/Copilot 用户跨工具迁移时首先询问 Qwen Code 是否支持 project-level rules，反映**跨生态迁移体验**是扩大用户基本盘的关键摩擦点。

---

*日报基于 2026-06-15 过去 24 小时的 GitHub 公开数据生成。*

</details>

---
*本日报由 [Big Model Radar](https://github.com/96loveslife/big_model_radar) 自动生成。*
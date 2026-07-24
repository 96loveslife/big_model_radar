# AI CLI 工具社区动态日报 2026-07-24

> 生成时间: 2026-07-24 03:17 UTC | 覆盖工具: 7 个

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

<think>The user wants me to generate a comprehensive cross-comparison analysis report based on the daily dynamics of 6 AI CLI tools: Claude Code, OpenAI Codex, Gemini CLI, GitHub Copilot CLI, Kimi Code CLI, OpenCode, and Qwen Code. 

Let me carefully analyze each tool's data and synthesize meaningful comparative insights:

**Activity Summary:**

1. **Claude Code** (Anthropic): No release, 50 issues, 4 PRs
   - Focus: Fable 5 access issues, connection stability, MCP protocol
   - Community pain points: Network errors (long-standing), model routing/charging issues
   - Maturity: High (long-standing issues indicate mature product with established user base)

2. **OpenAI Codex** (OpenAI): 2 alpha releases, 50 issues, 50 PRs
   - Focus: Windows desktop performance issues, exec-server refactoring, tool system
   - Very high activity - 50 PRs shows massive internal development
   - Focus on proxy/WebSocket transport, deferred tool world state
   - Windows-related issues dominate

3. **Gemini CLI** (Google): No release, 50 issues, 33 PRs
   - Focus: Subagent reliability, Auto Memory system, security
   - XL-level PRs for SSR Pipeline (PR generation automation)
   - Active P1 bug fixing, security hardening

4. **GitHub Copilot CLI** (Microsoft/GitHub): 1 release (v1.0.74), 39 issues, only 2 PRs
   - Focus: MCP plugin spec, IDE reconnection reliability
   - PR activity notably low (2 only)
   - Strong focus on MCP integration boundaries

5. **Kimi Code CLI** (Moonshot AI): No release, 6 issues, 15 PRs
   - Smaller community (only 6 issues vs 50 for others)
   - Focus: Windows compatibility, MCP integration stability
   - Very active single contributor (@lihailong00)
   - Cross-device/remote control is top demand

6. **OpenCode** (anomalyco): No release, 50 issues (mostly closed), 50 PRs
   - V2 architecture migration in progress
   - Mobile app #1 request (48 👍)
   - Desktop stability issues persist

7. **Qwen Code** (Alibaba): 1 nightly release, 43 issues, 50 PRs
   - Channels multi-channel ecosystem (Telegram/WeChat/GitHub)
   - Performance optimization
   - Enterprise external memory/context proposals
   - Strong development activity (50 PRs)

**Key Insights to Develop:**

1. **Ecosystem Panorama**: 
   - Market is consolidating around MCP protocol
   - Windows platform support is the biggest pain point across all tools
   - Performance/resource efficiency becoming critical
   - Multi-platform/multi-device is the new battleground
   - AI CLI moving from "CLI tool" to "full platform"

2. **Activity Comparison**:
   - Most active in PRs: Codex, OpenCode, Qwen Code (50 each)
   - Most active in Issues: Claude Code, Codex, Gemini CLI, OpenCode (50 each)
   - Releases: Codex (2), Copilot CLI (1), Qwen Code (1), others (0)

3. **Common Focus Areas**:
   - **Windows compatibility**: Codex, Gemini CLI, Kimi Code, OpenCode, Copilot CLI all have Windows issues
   - **MCP protocol maturity**: Claude Code, Codex, Copilot CLI, Kimi Code
   - **Performance/Resource efficiency**: Claude Code (token costs), Codex (CPU), Qwen Code (cold start)
   - **Subagent/Agent reliability**: Gemini CLI (hanging), OpenAI Codex, Claude Code
   - **Cross-platform/Remote access**: Kimi Code, Claude Code (Desktop remote), OpenCode (mobile)
   - **Connection stability**: Claude Code (long-standing), Codex
   - **TUI/UX stability**: Codex, Kimi Code, Copilot CLI

4. **Differentiation**:
   - **Claude Code**: Premium product, enterprise/Max subscription focus, model-centric
   - **OpenAI Codex**: High development velocity, Windows desktop app focus, infrastructure-heavy
   - **Gemini CLI**: Security-conscious, Agent infrastructure (SSR Pipeline), Auto Memory focus
   - **GitHub Copilot CLI**: MCP ecosystem leader, IDE integration focus, ACP protocol
   - **Kimi Code CLI**: Mobile/cross-device vision, smaller but focused community
   - **OpenCode**: Provider-agnostic, desktop client focus, V2 architecture migration
   - **Qwen Code**: Multi-channel (Telegram/WeChat/GitHub), enterprise context provider specs

5. **Maturity & Activity Assessment**:
   - Most mature: Claude Code, GitHub Copilot CLI (long-standing enterprise use)
   - Fast iteration: OpenAI Codex, OpenCode (V2 migration), Qwen Code
   - Niche but active: Kimi Code CLI (smaller community, focused dev)
   - Balanced development: Gemini CLI (active security + features)

6. **Trend Signals**:
   - MCP protocol becoming the de facto standard for tool integration
   - Windows desktop is the weakest link across the industry
   - Performance/cost efficiency becoming decisive factor
   - Mobile/cross-device is the next frontier
   - Agent infrastructure (subagents, memory, trajectories) is a key battleground
   - Multi-channel integration (messaging platforms) emerging as differentiator
   - Security hardening (TOCTOU, auth loops, redaction) is now baseline
   - TUI reliability regressing across multiple tools (Ctrl+C, hooks, rendering)

Let me write this up in clean, professional Chinese suitable for technical decision makers and developers.

I'll structure it as follows:
1. 生态全景 - 3-5 sentences
2. 各工具活跃度对比 - Table
3. 共同关注的功能方向 - Detailed
4. 差异化定位分析 - Comparative
5. 社区热度与成熟度 - Assessment
6. 值得关注的趋势信号 - Industry trends

Let me make sure to:
- Use data support (numbers from each report)
- Be concise but comprehensive
- Target both technical decision makers and developers
- Use proper formatting
- Include GitHub links where relevant</think>

# AI CLI 工具生态横向对比分析
**报告日期：2026-07-24 ｜ 覆盖 7 款主流 AI CLI 工具**

---

## 一、生态全景

当前 AI CLI 工具市场已进入 **"MCP 协议统一 + 多端延伸"** 的关键阶段：所有主流工具都在围绕 Model Context Protocol 构建工具生态，同时向桌面端（VS Code、JetBrains）、移动端、Web 端、IM 通道（Telegram/微信/GitHub）四面延伸。**Windows 平台体验**成为全行业最大短板（Codex、Kimi、OpenCode、Copilot CLI 均有大量相关 Issue），**性能与 token 经济学**则因模型路由复杂化而升级为选型决策的核心变量。竞争重心正从"模型能力"转向"Agent 基础设施可靠性"——subagent 行为可控性、长会话压缩、上下文可观测性成为下一轮分水岭。

---

## 二、各工具活跃度对比

| 工具 | 今日 Release | Issues 更新 | PR 更新 | 核心动态特征 |
|------|:---:|:---:|:---:|---|
| **Claude Code** | — | 50 | 4 | 模型路由/计费问题集中爆发；PR 节奏偏慢 |
| **OpenAI Codex** | 2 alpha | 50 | **50** | 开发强度最高；exec-server 网络层重构 |
| **Gemini CLI** | — | 50 | 33 | P1 Agent 缺陷 + 安全加固 + XL 级自动化基建 |
| **GitHub Copilot CLI** | v1.0.74 | 39 | 2 | 版本有序发布；**PR 流量异常偏低** |
| **Kimi Code CLI** | — | 6 | 15 | 社区规模较小；单开发者高密度修复（14/15 PRs） |
| **OpenCode** | — | 50 | **50** | V2 架构冲刺；历史 Issue 集中消化 |
| **Qwen Code** | 1 nightly | 43 | **50** | Channels 多通道生态 + 性能优化双线推进 |

**数据洞察**：
- **PR 强度 Top 3**：OpenAI Codex、OpenCode、Qwen Code（均 50 条），均处于快速迭代期
- **Issue 量 Top 3**：Claude Code、OpenAI Codex、Gemini CLI、OpenCode（均 50 条），社区活跃度最高
- **Release 节奏**：Codex 每日 alpha、Copilot CLI 稳定版本、Qwen Code 每日 nightly，反映不同发布策略

---

## 三、共同关注的功能方向

### 🔴 1. Windows 平台稳定性（全行业共识痛点）

| 工具 | 代表性 Issue | 核心问题 |
|------|------------|----------|
| OpenAI Codex | [#20214](https://github.com/openai/codex/issues/20214) / [#34260](https://github.com/openai/codex/issues/34260) | App 冻结、taskkill.exe 风暴、WMI 耗尽 |
| Gemini CLI | [#21983](https://github.com/google-gemini/gemini-cli/issues/21983) | Wayland 下 browser subagent 失败 |
| Kimi Code CLI | [#2553](https://github.com/MoonshotAI/kimi-cli/issues/2553) | `/plugins` Windows 崩溃 |
| OpenCode | [#29859](https://github.com/anomalyco/opencode/issues/29859) | `@` 引用文件失败；文件树无法展开 |
| GitHub Copilot CLI | [#4165](https://github.com/github/copilot-cli/issues/4165) | Windows `--resume` 冷启动挂死 |

**共性信号**：Windows 是 AI CLI 工具系统性短板，**没有任何一款工具真正解决了 Windows 体验问题**。涉及进程管理、文件编码、终端兼容性、底层权限等多个维度。

---

### 🟠 2. MCP 协议生态成熟化

| 工具 | 关注点 |
|------|--------|
| Claude Code | 会话标识缺失（#41836）、256 工具聚合上限（#77704）、JSON Schema `$ref`（#76040） |
| OpenAI Codex | MCP 进程池按项目作用域复用（#20883）、自定义 provider 独立 web.run |
| GitHub Copilot CLI | OAuth 一致性（#4089）、BigInt 序列化（#4211）、`tools/list_changed`（#3125）、`resources/subscribe`（#3073） |
| Kimi Code CLI | MCP client 复用（#2548）、后台启动容错（#2541）、Moonshot API 标准化（#2539） |
| Qwen Code | MCP 工具列表获取失败（#7147，已关闭） |

**共性信号**：MCP 已成为事实标准，但**协议完整性**（通知机制、资源订阅、工具发现、序列化）和**企业级特性**（认证、聚合、配额）仍是各家补齐重点。

---

### 🟡 3. Agent 基础设施可靠性

| 工具 | 代表性 Issue/PR |
|------|----------------|
| Claude Code | TaskCreate 工具回归（#80015） |
| Gemini CLI | Subagent hanging（#21409）、错误终止状态（#22323）、越权执行（#22093）、Stagnation Circuit Breaker（#28331） |
| OpenAI Codex | 畸形 tool-call 推理泄漏（#34245） |
| OpenCode | todowrite 工具未注册（#29118） |
| Qwen Code | Subagent lifecycle 文档（#7624）、Goal v3 证据验证（#7639） |

**共性信号**：Agent loop 可靠性、终止语义、权限边界、可观测性（trajectory 分享）是新一轮基础设施竞赛焦点。

---

### 🟢 4. 性能与 Token 经济学

| 工具 | 代表性问题 |
|------|------------|
| Claude Code | Fable 5 误计费 + 静默降级（#79337）；Opus 用量 2-3 倍回归（#64961）；PDF 双渲染（#80449）；每次会话下载 265MB（#79942） |
| OpenAI Codex | Windows CPU 满载（#34879）；自动压缩残留 80%（#35032） |
| Qwen Code | 冷启动 17.24 MiB / 2420 模块急切加载（#7264）；编译缓存子进程传递（#7594） |

**共性信号**：模型路由变复杂后，**"我现在到底跑的是什么模型 + 花了多少 token"** 成为开发者核心焦虑。

---

### 🔵 5. 跨设备 / 远程会话

| 工具 | 代表性 Issue |
|------|-------------|
| Claude Code | Desktop 远程控制（#29006，**114 👍**） |
| Kimi Code CLI | Remote Control（#1282，**16 👍**）+ Web 排队同步（#2545） |
| OpenCode | Mobile App（#6536，**48 👍**）+ Android 版本（#28229） |

**共性信号**："CLI 不再只是 CLI"——开发者要求 **Web、Desktop、Mobile、IM 多端会话状态同步**。

---

### 🟣 6. 安全与合规加固

| 工具 | 代表性 PR/Issue |
|------|----------------|
| Gemini CLI | 信任对话框披露（#28346）、TOCTOU 窗口修复（#28330）、文件 keychain tag 校验（#28523）、Auto Memory 脱敏（#26525） |
| Claude Code | Managed settings 绕过（#22292） |
| OpenCode | `OPENCODE_PERMISSION` 环境变量绕过 Managed settings（#22292） |
| Qwen Code | Channel 路由权限（#7566/#7590/#7609） |

**共性信号**：从"个人开发者工具"走向"企业部署"的过程中，**TOCTOU、auth loop、权限沙箱、凭据存储**成为必须补齐的安全基线。

---

## 四、差异化定位分析

| 维度 | Claude Code | OpenAI Codex | Gemini CLI | Copilot CLI | Kimi Code | OpenCode | Qwen Code |
|------|-------------|--------------|------------|-------------|-----------|----------|-----------|
| **核心定位** | 旗舰模型优先 | 桌面端 + 协议重构 | Agent 基础设施 | MCP/ACP 协议生态 | 跨设备生产力 | Provider 无关 | 多通道 Agent 平台 |
| **目标用户** | 高级订阅者 | Windows/macOS 桌面用户 | 大型工程团队 | VS Code/GitHub 用户 | 移动办公用户 | 多模型开发者 | 阿里云/IM 集成方 |
| **技术路线** | 模型 + 工具深度集成 | Rust 重构 + WebSocket 传输 | Gemini 3 原生 + SSR Pipeline | IDE 互操作优先 | 端到端会话同步 | V2 状态模型迁移 | Channels + 编译缓存 |
| **差异化卖点** | Fable/Opus 顶级模型 | exec-server 远程代理 | Auto Memory + Stagnation Breaker | Open Plugin Spec | Mobile/Remote 体验 | 多 Provider 凭据管理 | Telegram/微信/GitHub 通道 |
| **当前阶段** | 模型版本动荡期 | 架构深度重构期 | 安全基线补齐期 | 协议标准化期 | 单点优化期 | V2 收敛期 | 生态扩张期 |

---

## 五、社区热度与成熟度评估

### 🟢 成熟期（用户基数大、生态稳固）

- **Claude Code**：长尾 Issue（#5674 已存数月）显示用户基数大，但 PR 节奏缓慢反映"内部驱动"模式
- **GitHub Copilot CLI**：版本号已至 v1.0.74，发布节奏稳健；Issue 收单→triage 流程高效（7/30 当日 triaged）

### 🟡 快速迭代期（功能爆发、内部高强度开发）

- **OpenAI Codex**：每日 2 个 alpha + 50 PR/日，反映 OpenAI 内部全速推进
- **OpenCode**：50 PR/日 + V2 架构迁移，单一开发者 (@Brendonovich) 主导关键模块
- **Qwen Code**：50 PR/日 + 每日 nightly，**阿里内部投入明显**

### 🔵 战略布局期（基线建设 + 安全加固）

- **Gemini CLI**：XL 级 PR（SSR Pipeline、Caretaker）+ 安全 P1/P2 PR 集中合并，反映 Google 在"自动化 + 安全"双线投入

### 🟠 细分耕耘期（社区规模小但路径清晰）

- **Kimi Code CLI**：Issue 量仅 6，但单开发者产出密度极高（14/15 PRs 来自 @lihailong00），体现"小而精"的精品策略

---

## 六、值得关注的趋势信号

### 📡 信号 1：MCP 成为基础设施，新协议（ACP）开始崛起

GitHub Copilot CLI 大力推动 **ACP（Agent Client Protocol）**——为 Zed、Xcode 等非 VS Code 编辑器提供标准化 Agent 接口。**ACP + MCP 组合**正在定义下一代 AI IDE 互操作协议。

**对开发者的价值**：评估 AI CLI 工具时，应重点考察其对 MCP/ACP 的**协议层支持深度**，而非仅看模型集成。

---

### 📡 信号 2：Windows 体验的系统性危机

5 款工具均存在严重 Windows 问题，且**没有任何一家在系统性解决**。这反映出 AI CLI 工具的**开发团队 macOS/Linux 优先**的组织惯性。

**对开发者的价值**：
- Windows 用户应**优先测试特定工作流**（如 resume、shell 集成、文件操作）
- 企业 Windows 部署需准备**降级方案**（如 WSL 容器化）

---

### 📡 信号 3：性能与成本透明化成为新刚需

Claude Code Fable 5 静默降级（#79337）暴露了**模型路由不透明**的信任危机。开发者正在主动要求：
- 当前模型指示器（Claude Code #28986、#79337）
- Token 用量面板（Qwen Code #6806）
- 编译缓存可见性（Qwen Code #7594）

**对开发者的价值**：选型时优先考察**模型/成本可观测性**工具链。

---

### 📡 信号 4：Agent 基础设施的"可靠性竞赛"

Gemini CLI 的 Stagnation Circuit Breaker（#28331）、Claude Code 的 Task 工具回归（#80015）、OpenAI Codex 的 tool-call 推理泄漏（#34245）共同指向：**Agent 不再是 demo，正在进入生产环境**。

**对开发者的价值**：关注 Agent loop 的**终止语义、权限边界、轨迹可追溯性**，这些将决定能否在生产环境规模化使用。

---

### 📡 信号 5：跨端延伸从"功能"变成"竞争壁垒"

- Kimi

---

## 各工具详细报告

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills 社区热点

> 数据来源: [anthropics/skills](https://github.com/anthropics/skills)

<think>The user wants me to analyze the GitHub data from anthropics/skills repository and generate a community hot spot report. Let me carefully analyze the data provided.

Let me organize what I have:

**Top 20 PRs by comment count (showing all listed):**
1. #1298 - fix(skill-creator): run_eval.py always reports 0% recall (MartinCajiao)
2. #514 - Add document-typography skill (PGTBoos)
3. #538 - fix(pdf): correct case-sensitive file references (Lubrsy706)
4. #486 - Add ODT skill (GitHubNewbie0)
5. #210 - Improve frontend-design skill (justinwetch)
6. #83 - Add skill-quality-analyzer and skill-security-analyzer (eovidiu)
7. #541 - fix(docx): prevent tracked change w:id collision (Lubrsy706)
8. #539 - fix(skill-creator): warn on unquoted description with YAML special characters (Lubrsy706)
9. #1367 - feat(skills): add self-audit (YuhaoLin2005)
10. #1099 - skill-creator: fix run_eval.py crash on Windows (joshuawowk)
11. #1050 - skill-creator: fix Windows subprocess + encoding bugs (gstreet-ops)
12. #723 - feat: add testing-patterns skill (4444J99)
13. #525 - Add pyxel skill for retro game development (kitao)
14. #509 - docs: add CONTRIBUTING.md (narenkatakam)
15. #362 - Fix skill-creator UTF-8 panic on multi-byte characters (Mr-Neutr0n)
16. #361 - Detect unquoted YAML special characters (Mr-Neutr0n)
17. #181 - Add SAP-RPT-1-OSS predictor skill (amitlals)
18. #95 - Add comprehensive system documentation and flowcharts (TylerALofall)
19. #1323 - fix(skill-creator): run_eval trigger detection (Polluelo978)
20. #1302 - Add color-expert skill (meodai)

Note: All PRs listed show "评论: undefined" - this is unusual. The comments appear to not be properly populated. But I should still analyze based on the available data.

**Issues (sorted by comment count):**
1. #492 - Security: Community skills distributed under anthropic/ namespace (43 comments)
2. #228 - Enable org-wide skill sharing in Claude.ai (14 comments)
3. #556 - run_eval.py: claude -p never triggers skills/commands (12 comments)
4. #62 - All my skills have disappeared (10 comments)
5. #1329 - Proposing compact-memory skill (9 comments)
6. #202 - skill-creator should be updated to best practice (8 comments) - CLOSED
7. #412 - Skill proposal: agent-governance (6 comments) - CLOSED
8. #189 - document-skills and example-skills plugins install identical content (6 comments)
9. #1175 - Concerns regarding Security and Context Window SharePoint (4 comments) - CLOSED
10. #29 - Usage with bedrock (4 comments)
11. #16 - Expose Skills as MCPs (4 comments)
12. #1385 - Reasoning Quality Gate Pipeline (3 comments)
13. #1169 - skill-creator description-optimisation loop recall=0% (3 comments)
14. #1061 - Windows compatibility: skill-creator scripts fail (3 comments)
15. #184 - agentskills.io page redirect error (3 comments) - CLOSED

Now let me write the report:

1. **热门 Skills 排行** - The PRs that have the most community interest. Since the comment data is undefined for all PRs, I need to use other signals - based on the variety, recency, and topic significance, I should focus on PRs that address key issues. The most prominent topics are:

- #1298 - skill-creator evaluation bug (most prominent fix)
- #514 - document-typography
- #486 - ODT skill
- #210 - frontend-design improvement
- #83 - skill-quality-analyzer/security-analyzer
- #1367 - self-audit skill
- #723 - testing-patterns skill
- #1302 - color-expert skill

2. **社区需求趋势** - From the issues:
- Security/trust boundaries (#492)
- Org-wide skill sharing (#228)
- Skill creator tooling improvements (#556, #1169, #1061, #202)
- Compact memory for agents (#1329)
- Quality gates / output verification (#1385)
- Bedrock compatibility (#29)
- MCP integration (#16)

3. **高潜力待合并 Skills** - All PRs are OPEN, so all are candidates. Most promising based on content:
- #1302 - color-expert
- #525 - pyxel
- #1367 - self-audit
- #514 - document-typography
- #486 - ODT
- #723 - testing-patterns

4. **Skills 生态洞察** - The community is most focused on:
- Self-improvement tooling (skill-creator, audit, quality gates)
- Cross-platform compatibility (Windows fixes)
- Trust/security (impersonation risks)
- Workflow automation and quality assurance

Let me write this report in Chinese as requested.</think>

# Claude Code Skills 社区热点报告

> 数据来源：github.com/anthropics/skills ｜ 截止 2026-07-24
> 报告生成：MiniMax 技术分析

---

## 一、热门 Skills 排行

以下 PRs 按社区关注度（PR 内容影响力、议题关联度、近期活跃度综合）排序：

### 1. [#1298 fix(skill-creator): run_eval.py 始终报告 0% 召回率](https://github.com/anthropics/skills/pull/1298)
- **作者**：@MartinCajiao ｜ **状态**：OPEN ｜ **更新**：2026-06-23
- **功能**：修复 `run_eval.py` 评估脚本永远返回 `recall=0%` 的核心缺陷，并修复 Windows 流读取、触发检测、并行 worker 等连锁问题。
- **社区热点**：这是当前最高优先级的技术债。Issue [#556](https://github.com/anthropics/skills/issues/556)（12 评论）已独立复现 10+ 次，被多个 PR（#1099、#1050、#1323、#1169）反复触及。**所有描述优化循环目前都在对抗噪声**，社区呼吁彻底解决。

### 2. [#1367 feat(skills): add self-audit — 机械验证 + 四维推理质量门](https://github.com/anthropics/skills/pull/1367)
- **作者**：@YuhaoLin2005 ｜ **状态**：OPEN ｜ **更新**：2026-07-02
- **功能**：交付前的 AI 输出审计技能——先机械验证文件存在性，再按损害严重度优先级进行四维推理审查。通用、无技术栈依赖。
- **社区热点**：与 Issue [#1385](https://github.com/anthropics/skills/issues/1385)（"推理质量门管道"提案）形成呼应，是质量保证赛道的代表性提案。

### 3. [#83 Add skill-quality-analyzer 与 skill-security-analyzer](https://github.com/anthropics/skills/pull/83)
- **作者**：@eovidiu ｜ **状态**：OPEN ｜ **创建**：2025-11-06
- **功能**：提供元级质量分析与安全审计技能，覆盖结构文档（20%）、示例、安全、测试等五维度。
- **社区热点**：直接回应社区对 Skills 质量参差、可信度不足的担忧，与 Issue [#492](https://github.com/anthropics/skills/issues/492)（信任边界滥用）的安全诉求高度对齐。

### 4. [#514 Add document-typography skill](https://github.com/anthropics/skills/pull/514)
- **作者**：@PGTBoos ｜ **状态**：OPEN ｜ **更新**：2026-03-13
- **功能**：防止 AI 生成文档中的常见排版问题——孤立词换行、寡头段落、编号错位等。
- **社区热点**：解决"每个 Claude 生成的文档都受影响"的普遍痛点，是文档质量赛道的明星提案。

### 5. [#486 Add ODT skill — OpenDocument 创建/填充/解析](https://github.com/anthropics/skills/pull/486)
- **作者**：@GitHubNewbie0 ｜ **状态**：OPEN ｜ **更新**：2026-04-14
- **功能**：覆盖 .odt/.ods 开放文档格式的创建、模板填充、HTML 转换。
- **社区热点**：补齐开源办公格式生态，与现有 PDF/DOCX skill 形成文档处理闭环，对欧洲/政府/合规场景意义重大。

### 6. [#210 Improve frontend-design skill clarity and actionability](https://github.com/anthropics/skills/pull/210)
- **作者**：@justinwetch ｜ **状态**：OPEN ｜ **更新**：2026-03-07
- **功能**：让前端设计 skill 的每条指令都可执行，提升行为指向性。
- **社区热点**：技能"可执行性 vs 教学性"的争论代表（呼应 Issue [#202](https://github.com/anthropics/skills/issues/202)），Claude Code 用户量最大的应用场景之一。

### 7. [#723 feat: add testing-patterns skill](https://github.com/anthropics/skills/pull/723)
- **作者**：@4444J99 ｜ **状态**：OPEN ｜ **更新**：2026-04-21
- **功能**：完整测试体系技能——Testing Trophy 模型、单元测试、React 组件测试、查询/契约/E2E 等。
- **社区热点**：覆盖"AI 写测试"这一高频需求，是工程生产力方向的核心增量。

### 8. [#1302 Add color-expert skill](https://github.com/anthropics/skills/pull/1302)
- **作者**：@meodai ｜ **状态**：OPEN ｜ **更新**：2026-07-21
- **功能**：自包含的色彩专业知识技能——ISCC-NBS、Munsell、OKLCH/OKLAB 等色彩空间及"何时该用哪个"指南。
- **社区热点**：面向设计与前端交叉领域，是 2026 年 7 月最新活跃提案之一。

---

## 二、社区需求趋势

基于 15 条热门 Issues 提炼出的方向：

| 方向 | 代表 Issue | 关注度 |
|------|----------|--------|
| 🛡️ **信任与安全治理** | [#492 社区 skill 冒充官方 namespace](https://github.com/anthropics/skills/issues/492)（43 评论，TOP 1） | 极高 |
| 🏢 **企业级共享与协作** | [#228 启用组织级 skill 共享](https://github.com/anthropics/skills/issues/228)（14 评论，7 👍） | 高 |
| 🔧 **Skill-Creator 工具链可靠性** | [#556 评估永远 0% 触发率](https://github.com/anthropics/skills/issues/556)（12 评论）、[#1169](https://github.com/anthropics/skills/issues/1169)（含字面斜杠命令查询也 0%）、[#1061 Windows 兼容性](https://github.com/anthropics/skills/issues/1061) | 极高 |
| 🧠 **Agent 状态压缩与持久记忆** | [#1329 compact-memory — 符号化压缩 agent 状态](https://github.com/anthropics/skills/issues/1329)（9 评论） | 中高 |
| ✅ **输出质量门禁体系** | [#1385 三阶段推理质量门](https://github.com/anthropics/skills/issues/1385)（Pre-task → 对抗审查 → 交付验证） | 中高 |
| 🔌 **跨平台/协议互操作** | [#29 与 Bedrock 集成](https://github.com/anthropics/skills/issues/29)、[#16 Skills 暴露为 MCP](https://github.com/anthropics/skills/issues/16) | 中 |
| 🗂️ **插件去重与命名规范** | [#189 document-skills 与 example-skills 内容重复](https://github.com/anthropics/skills/issues/189)（9 👍） | 中 |
| 📚 **贡献者文档与流程** | 已被 [#509 CONTRIBUTING.md](https://github.com/anthropics/skills/pull/509) 回应 | 中 |

**核心趋势归纳**：
1. **元能力诉求暴涨**：社区越来越关注"如何让 Claude 更好地构建/审计 Skill 本身"，而非单个领域技能。
2. **从单点工具到治理体系**：安全、共享、合规、版本管理正取代具体功能成为主要矛盾。
3. **跨平台与可移植性**：Windows 兼容性、AWS Bedrock 适配成为基础门槛。

---

## 三、高潜力待合并 Skills

以下 PRs 均处 OPEN 状态、议题关联度高、最有可能近期落地：

| PR | 主题 | 潜力理由 | 链接 |
|----|------|---------|------|
| **#1298** | 修复 run_eval 评估失效 | 阻塞整个 skill-creator 工作流，10+ 独立复现，社区共识强 | [PR](https://github.com/anthropics/skills/pull/1298) |
| **#1367** | self-audit 质量门 | 与 Issue #1385 提案协同，方法论已成型 | [PR](https://github.com/anthropics/skills/pull/1367) |
| **#1302** | color-expert | 最新活跃（7-21 更新），专业度高，无明显争议 | [PR](https://github.com/anthropics/skills/pull/1302) |
| **#525** | pyxel 复古游戏开发 | MCP 集成清晰，作者长期维护 pyxel 生态 | [PR](https://github.com/anthropics/skills/pull/525) |
| **#83** | skill-quality-analyzer | 元能力基础设施，对应 Issue #492 的安全治理诉求 | [PR](https://github.com/anthropics/skills/pull/83) |
| **#514** | document-typography | 通用痛点解决，覆盖所有文档生成场景 | [PR](https://github.com/anthropics/skills/pull/514) |
| **#486** | ODT skill | 文档生态补全，开源办公场景刚需 | [PR](https://github.com/anthropics/skills/pull/486) |
| **#723** | testing-patterns | 测试生成是高频工程场景，结构完整 | [PR](https://github.com/anthropics/skills/pull/723) |
| **#509** | CONTRIBUTING.md | 社区健康度（25%）最低门槛改进，零风险合并 | [PR](https://github.com/anthropics/skills/pull/509) |
| **#210** | frontend-design 改进 | 主流使用场景，行为可执行性是共识方向 | [PR](https://github.com/anthropics/skills/pull/210) |

> **观察**：所有 PRs 当前均为 OPEN 状态，仓库合并节奏显著慢于社区贡献速度，这是当前最值得关注的结构性信号。

---

## 四、Skills 生态洞察（一句话总结）

> **当前社区最集中的诉求是「让 Skills 本身可信、可审计、可协作」——从内容创作类单点工具转向质量门禁、安全治理与组织级共享的基础设施建设**，与此同时，skill-creator 的核心评估工具失灵（run_eval 永久 0% 召回）已成为横亘在整个生态之上的最大技术债。

---

*报告基于 anthropics/skills 仓库前 50 条 PR 与前 50 条 Issue 的静态快照，动态指标（评论数）部分字段缺失，本报告以议题关联度、近期活跃度、PR 内容质量作为综合判断维度。*

---

<think>The user wants me to generate a Chinese daily report for the Claude Code community based on GitHub data. Let me analyze the data carefully.

Looking at the data:
- No new releases in the past 24 hours
- 50 issues updated, top 30 shown
- 4 PRs updated in the past 24 hours

Key observations:
1. **Fable 5 on Max plan** is a major recurring issue - multiple issues (#79337, #79341, #80382, #80749) all related to Fable 5 incorrectly requiring usage credits on Max plans, starting from 2026-07-20
2. **Connection errors** are still ongoing - #5674 (ECONNRESET on macOS), #69415 (Connection closed mid-response), #69336 (similar Linux issue)
3. **MCP issues** - #41836 (no session identifier), #77704 (256 tool cap), #76040 (JSON Schema $ref)
4. **TUI issues** on Windows - #59408 (Ctrl+C clears input), #49985 (conversation duplicated), #80756 (TUI input dead on hook blocks)
5. **IDE/VS Code enhancement requests** - #29006 (Remote Control), #28986 (model indicators), #64968 (syntax highlighting)
6. **Auto-updater issue** - #79942 (each session downloads full 265MB)
7. **Task tools regression** - #80015 (TaskCreate/TaskUpdate no longer exposed)
8. **PDF token usage** - #80449 (PDFs cost too many tokens due to image rendering)

PRs:
- #41611 - add missing source (low relevance)
- #42604 - Remove retro-futuristic recommendation (closed)
- #80508 - paginate comments/reactions in auto-close-duplicates (script fix)
- #80495 - fix /ralph-loop prompt parsing as shell code

The user wants a clear structure:
1. 今日速览 (2-3 sentences)
2. 版本发布 (skip if none)
3. 社区热点 Issues (10 most important)
4. 重要 PR 进展 (10 important - but only 4 PRs available, so I'll list what's there)
5. 功能需求趋势
6. 开发者关注点

I need to be a technical analyst focused on AI dev tools. Language should be concise, professional, suitable for technical developers.

Let me note: The user only provided 4 PRs, but asked for 10. I should acknowledge this and present what's available.

Let me structure this properly:

**今日速览**: 
- Fable 5 在 Max 套餐上的访问问题成为今日最大热点，多个相关 issue 在 7 月 24 日集中更新
- 连接稳定性问题（macOS/Linux/WSL 上的 ECONNRESET 和 mid-response 中断）仍是长期未解的痛点
- 多个产品化功能请求持续累积（VS Code 远程控制、模型指示器、语法高亮等）

**版本发布**: 无新版本

**社区热点 Issues** (top 10 by importance/comment count):

1. #79337 (40 comments) - Fable 5 在 Max 套餐上的额度错误 [bug]
2. #5674 (50 comments, 47 likes) - macOS 上的 ECONNRESET 持续错误 [bug]
3. #29006 (35 comments, 114 likes) - Claude Desktop 中启用 Claude Code 远程控制 [enhancement]
4. #69415 (33 comments, 65 likes) - API 连接中断使 Claude Code 无法使用 [bug]
5. #41836 (14 comments, 24 likes) - MCP 服务器无法区分并发会话
6. #28986 (13 comments, 61 likes) - VS Code 扩展面板中显示模型和思考模式指示器 [enhancement]
7. #64961 (10 comments) - Opus 4.7/4.8 token 使用量回归 2-3 倍 [bug]
8. #69336 (9 comments) - 新上下文窗口中立即发生的 API 中断 [bug]
9. #59408 (8 comments) - Ctrl+C 在 Windows 上静默清除输入 [bug]
10. #49985 (8 comments, 22 likes) - 对话在终端中重复渲染 [bug]

Additional notable:
- #80015 - Task-list 工具不再暴露给模型（回归）
- #79341 - Fable 5 重复 bug
- #77704 - MCP 自定义连接器丢失工具（256 上限）
- #79942 - 自动更新每次下载 265MB

**重要 PR 进展**: Only 4 PRs available, all are listed.

**功能需求趋势**:
1. VS Code 扩展增强（远程控制、模型指示器、语法高亮）
2. 远程/桌面会话管理
3. IDE 集成的改进
4. 模型识别与状态可视化
5. 性能与 token 效率（PDF 渲染、MCP 工具聚合）

**开发者关注点**:
1. **新模型 Fable 5 的访问控制混乱** - Max 套餐用户无法正常使用
2. **网络稳定性** - 多平台上的连接中断问题长期未解决
3. **MCP 协议问题** - 会话标识、工具聚合上限、JSON Schema 兼容性
4. **TUI 输入可靠性** - Windows 上 Ctrl+C 误操作、hook 阻塞导致 TUI 卡死
5. **资源消耗** - 自动更新 265MB 重复下载、PDF 双倍渲染
6. **功能回归** - 任务工具突然消失

Let me write this up in Chinese, professionally.</think>

# Claude Code 社区动态日报
**2026-07-24 · 每日技术分析**

---

## 📌 今日速览

**Fable 5 访问权限问题集中爆发**——自 7 月 20 日 Fable 5 被纳入 Max 套餐标准权益后，至少出现 4 个相关 Issue（#79337、#79341、#80382、#80749），社区反馈该模型在 Max 套餐下被错误地要求"usage credits"并静默降级到 Opus 4.8，是当日最热的讨论焦点。

**网络连接类 Bug 持续未解**——macOS 上的 `ECONNRESET`（#5674，50 条评论）与跨平台的 "Connection closed mid-response"（#69415、#69336）仍是长期高赞问题，已严重影响 Claude Code 在部分环境下的可用性。

**VS Code / Desktop 集成需求保持高热度**——远程控制（#29006，114 👍）、模型指示器（#28986，61 👍）、语法高亮（#64968，21 👍）三大功能请求持续位于社区呼声前列。

---

## 🚀 版本发布

无新版本发布。过去 24 小时内无 Release 活动。

---

## 🔥 社区热点 Issues（Top 10）

| # | Issue | 评论 | 👍 | 标签 | 关注理由 |
|---|-------|----:|----:|------|----------|
| 1 | [#5674](https://github.com/anthropics/claude-code/issues/5674) Persistent ECONNRESET on macOS | 50 | 47 | bug, macos, api | **跨平台最稳定的复现 Bug**：同一网络下仅 macOS 出错，Windows/Linux 服务器正常，定位难度高 |
| 2 | [#79337](https://github.com/anthropics/claude-code/issues/79337) Fable 5 在 Max 套餐上误报 usage credits | 40 | 12 | bug, cost, model | **今日最热新议题**：Fable 5 纳入 Max 套餐首日即出现降级/拒用，影响所有 Max 订阅者 |
| 3 | [#29006](https://github.com/anthropics/claude-code/issues/29006) Claude Desktop 中启用远程控制 | 35 | 114 | enhancement, desktop | **本期 👍 最高**：跨设备接管会话是 Claude Desktop 的核心期待功能 |
| 4 | [#69415](https://github.com/anthropics/claude-code/issues/69415) "Connection closed mid-response" 频繁到不可用 | 33 | 65 | bug, vscode, wsl | 用户反馈"频繁到任何任务都无法完成"，影响工程团队协作 |
| 5 | [#41836](https://github.com/anthropics/claude-code/issues/41836) MCP 服务器缺少会话标识 | 14 | 24 | bug | 影响所有 HTTP MCP 部署方，无法维护多会话状态，社区方案需协议层改动 |
| 6 | [#28986](https://github.com/anthropics/claude-code/issues/28986) VS Code 面板显示模型与思考模式指示 | 13 | 61 | enhancement, vscode | 用户希望随时确认当前模型（避免被静默切换，例如 Fable 5 → Opus 4.8） |
| 7 | [#64961](https://github.com/anthropics/claude-code/issues/64961) Opus 4.7/4.8 token 使用回归 2-3 倍 | 10 | 5 | bug, cost, model | 与 Fable 5 Issue 共同反映出**近期模型路由/计费路径疑似不稳定** |
| 8 | [#69336](https://github.com/anthropics/claude-code/issues/69336) 新上下文窗口立即断连（Linux） | 9 | 11 | bug, api, agent-sdk | 与 #69415 互为补充，可能指向 SDK 层同样的流式响应处理缺陷 |
| 9 | [#59408](https://github.com/anthropics/claude-code/issues/59408) Windows TUI：Ctrl+C/Ctrl+Shift+C 静默清除输入 | 8 | 7 | bug, tui | 误触丢内容、无确认、无恢复；属于 TUI 基础可用性缺陷 |
| 10 | [#49985](https://github.com/anthropics/claude-code/issues/49985) 对话内容在终端被多次重复渲染（v2.1.112） | 8 | 22 | bug, tui | 视觉错乱，影响日志记录与剪贴板复制 |

**特别值得关注（更新热度高、影响面广）**：

- [#80015](https://github.com/anthropics/claude-code/issues/80015) **TaskCreate/TaskUpdate 等任务工具在最近更新后不再暴露给模型**——属于影响所有 Agent 工作流的功能回归。
- [#79942](https://github.com/anthropics/claude-code/issues/79942) **自动更新每次会话独立下载 265 MB**，无跨会话锁，对多 Worktree 工作流极不友好。
- [#77704](https://github.com/anthropics/claude-code/issues/77704) **自定义远程 MCP 连接器自 7 月中旬起间歇丢失工具，聚合上限硬卡 256 个**——直接影响企业 MCP 部署。

---

## 🛠 重要 PR 进展

> 过去 24 小时仅 4 个 PR 更新，按重要性排序：

| # | PR | 状态 | 内容摘要 |
|---|----|------|----------|
| 1 | [#80508](https://github.com/anthropics/claude-code/pull/80508) `fix(scripts): paginate comments and reactions in auto-close-duplicates` | OPEN | 修复重复 issue 自动关闭脚本中**评论与反应列表仅取 GitHub 默认 30 条/页**的问题（修复 #80506）。直接影响社区维护脚本的去重准确性。 |
| 2 | [#80495](https://github.com/anthropics/claude-code/pull/80495) `fix(ralph-wiggum): stop parsing /ralph-loop prompt text as shell code` | OPEN | `/ralph-loop` 把 `$ARGUMENTS` 直接拼到 shell 行中，用户的提示词被当成 shell 解析，常见 prompt 直接导致循环启动失败（修复 #16037）。 |
| 3 | [#41611](https://github.com/anthropics/claude-code/pull/41611) `add the missing source to claude code` | OPEN | 补充 Claude Code 的"缺失源码"——属于长期未审的争议性 PR。 |
| 4 | [#42604](https://github.com/anthropics/claude-code/pull/42604) `Remove "retro-futuristic" recommendation from Frontend Design Skill` | CLOSED | 已关闭，未合并。 |

> ⚠️ 今日无重大功能合并或新 PR 提交活跃，仓库整体更新节奏偏慢。

---

## 📈 功能需求趋势

从近 24 小时更新的 Issue 标签聚合来看，社区关注方向呈现以下格局：

1. **IDE 集成深化（占比最高）**
   - VS Code：远程控制、模型/思考模式指示、语法高亮、Symlinked Skill 自动索引
   - Claude Desktop：远程会话接管
   - 趋势：用户希望 Claude Code 从"CLI 工具"演化为"全平台开发伴侣"

2. **MCP 协议生态成熟化**
   - 会话标识缺失（#41836）、工具聚合上限（#77704）、JSON Schema `$ref` 兼容性（#76040）
   - 趋势：MCP 已进入企业落地阶段，**协议级一致性**成为瓶颈

3. **模型可观测性**
   - 模型指示器（#28986）、模型静默切换的应对需求（#79337、#79341）
   - 趋势：随着模型路由变复杂，用户对"当前到底跑的是什么"的透明度要求提升

4. **资源效率与成本控制**
   - PDF 双渲染浪费 token（#80449）、更新包重复下载（#79942）、Opus 计费回归（#64961）
   - 趋势：**Token 经济学**正在成为开发者选型的关键变量

5. **TUI/Windows 体验**
   - Ctrl+C 误操作（#59408）、Hook 阻塞导致 TUI 卡死（#80756）、对话重复渲染（#49985）
   - 趋势：Windows 平台体验短板持续被点名

---

## 💡 开发者关注点（痛点总结）

| 痛点类别 | 代表 Issue | 核心问题 |
|----------|------------|----------|
| **🚨 新模型访问混乱** | #79337 / #79341 / #80382 / #80749 | Fable 5 在 Max 套餐下被错误计费并静默降级到 Opus 4.8，错误信息矛盾 |
| **🌐 跨平台连接稳定性** | #5674 / #69415 / #69336 | macOS ECONNRESET、Linux/WSL mid-response 断连，已存在数月未根治 |
| **🧩 MCP 协议层缺陷** | #41836 / #77704 / #76040 | 会话标识缺失、工具聚合 256 上限、JSON Schema 兼容性 |
| **🪟 Windows TUI 体验** | #59408 / #49985 / #80756 | 输入丢失、渲染错乱、Hook 阻塞导致 TUI 完全卡死 |
| **📉 隐性回归** | #80015 / #64961 | Task 工具集消失、Opus token 用量突增 2-3 倍 |
| **💸 资源浪费** | #80449 / #79942 | PDF 双渲染、265 MB 更新包每个会话独立下载 |
| **🔐 权限沙箱误判** | #80736 / #73739 | `src/main/java` 路径无故被拒、AutoMode 授权绕过 |
| **🔌 IDE 集成的深度不足** | #29006 / #28986 / #64968 | VS Code 体验仍停留在"嵌入终端 + 基础面板"阶段 |

**整体观察**：本期社区情绪以**对近期模型路由与计费策略变化的不信任**为主线，叠加**长期未修复的网络稳定性问题**，反映出开发者对 Claude Code 在企业生产环境中"可预测性"的强烈诉求。建议重点关注 Fable 5 相关 Issue 的官方回复与修复时间窗。

---

*日报由 AI 技术分析师基于 GitHub 公开数据自动生成，数据时间窗口为 2026-07-23 ~ 2026-07-24。*

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

<think>The user wants me to generate a daily report for OpenAI Codex community dynamics based on GitHub data for 2026-07-24. Let me analyze the data carefully.

Key observations:

1. **Releases**: Two alpha releases - 0.146.0-alpha.5 and 0.146.0-alpha.3.1

2. **Issues**: 50 issues updated, mostly Windows-related bugs and some feature requests
   - Windows-related issues dominate (process spawning, WMI exhaustion, CPU saturation)
   - Top issues by comments:
     - #20214: Windows 11 freezing/stuttering (75 comments, 72 thumbs up)
     - #28969: Disable auto-resolve in 60 seconds (56 comments, 154 thumbs up - highest)
     - #3355: Error after MacBook sleeps (41 comments)
     - #4003: Mixed line endings on Windows (28 comments, 71 thumbs up)
     - #34260: Windows taskkill.exe cleanup storm (28 comments)
     - #25453: Windows powershell.exe CPU usage (15 comments)
     - #20883: Project-scoped MCP process pool (15 comments)
     - #26250: RTL/LTR rendering (13 comments)
     - #35032: Auto-compaction leaves 80% full (13 comments)
     - #30712: Windows split writable roots apply_patch fail (12 comments, 12 thumbs up)

3. **PRs**: 50 PRs, most by copyberry[bot] (auto-generated), some interesting ones:
   - #35078: WebSocket transport to code-mode host
   - #35067: Bazel test config fix
   - #35065: Avoid duplicating deferred sources
   - #35063: Track deferred tool namespaces
   - #35059: Decouple exec-server HTTP from reqwest
   - #35056: Route WebSockets through proxies
   - #35054: Allow disabling update_plan tool
   - #35049: Register Guardian V2 feature flag
   - #35036: Preserve Windows sandbox proxy settings
   - #35034: Route env registry through shared HTTP client
   - #35033: Expose Browser Use requirements
   - #35031: Enforce writer ownership for thread archive/delete
   - #35029: Preserve plugin attribution
   - #35028: Preserve refreshed Apps tools
   - #35024: Custom providers standalone web search (by @shijie-oai)
   - #35023: Route exec-server HTTP through proxy
   - #35017: Release 0.146.0-alpha.3

Themes:
- Windows desktop app has serious performance/resource issues
- Proxy/network transport refactoring
- Tool system improvements (deferred tools, update_plan)
- Guardian feature development
- Browser Use integration

Let me write a professional Chinese daily report.</think>

# OpenAI Codex 社区动态日报
**日期：2026-07-24**

---

## 一、今日速览

今日 Codex 仓库共合并大量基础设施类 PR，重点围绕 **exec-server 网络传输重构（HTTP/WebSocket 代理路由）** 与 **工具系统抽象（deferred tool world state、update_plan 可禁用）**。与此同时，**Windows 桌面端性能问题集中爆发**——多个 P0 级 bug 涉及 WMI 耗尽、taskkill.exe 进程风暴、Powershell 轮询导致 CPU 满载，已对 Windows 用户的工作流造成实质性影响，成为社区反馈最强烈的焦点。

---

## 二、版本发布

今日发布两个 Rust 端 alpha 预发布版本：

- **rust-v0.146.0-alpha.5** — 最新 alpha 迭代 ([#35017 系列](https://github.com/openai/codex/releases/tag/rust-v0.146.0-alpha.5))
- **rust-v0.146.0-alpha.3.1** — alpha.3 的补丁版本 ([链接](https://github.com/openai/codex/releases/tag/rust-v0.146.0-alpha.3.1))

版本号处于 0.146 系列的快速迭代阶段，伴随 `GuardianV2`、`deferred_tool_world_state` 等新特性开关的注册（见 PR 部分）。

---

## 三、社区热点 Issues（精选 10 条）

| # | Issue | 核心内容 | 热度信号 |
|---|-------|---------|---------|
| 1 | [#20214](https://github.com/openai/codex/issues/20214) | **Windows 11 Pro 上 Codex App 频繁卡顿/冻结** — 即便 32GB RAM + Ryzen 5 5600 也无法缓解 | 💬75 👍72 |
| 2 | [#28969](https://github.com/openai/codex/issues/28969) | **请求添加"禁用 60 秒自动解决"配置项** — 用户希望保留对询问流程的完全控制 | 💬56 👍154 ⭐全榜最高赞 |
| 3 | [#3355](https://github.com/openai/codex/issues/3355) | **MacBook 休眠后请求 chatgpt.com 后端失败** — 长任务断连后无法恢复 | 💬41 👍23 |
| 4 | [#4003](https://github.com/openai/codex/issues/4003) | **Windows 平台补丁后文件出现混合换行符（CRLF/LF）** | 💬28 👍71 |
| 5 | [#34260](https://github.com/openai/codex/issues/34260) | **Windows Desktop 进程清理风暴** — 数百 taskkill.exe/conhost.exe 残留，耗尽 WMI 配额 | 💬28（新增 P0） |
| 6 | [#25453](https://github.com/openai/codex/issues/25453) | **Windows 桌面端每秒钟 spawn 一个 powershell.exe** — 全进程轮询导致高 CPU | 💬15 |
| 7 | [#20883](https://github.com/openai/codex/issues/20883) | **MCP 进程池应按项目作用域复用，而非每次会话重启** | 💬15（功能增强） |
| 8 | [#35032](https://github.com/openai/codex/issues/35032) | **自动上下文压缩后仍残留 80% 占用** — 反复触发压缩、浪费配额 | 💬13（新增） |
| 9 | [#30712](https://github.com/openai/codex/issues/30712) | **Windows 沙箱注入分裂的可写根路径，导致 apply_patch 失败** — 迫使 agent 绕过沙箱 | 💬12 👍12 |
| 10 | [#34879](https://github.com/openai/codex/issues/34879) | **[P0 回归] Windows 启动时 32 核 CPU 全部跑满** — WmiPrvSE 不可用 | 💬5（严重等级 P0） |

> **趋势洞察**：今日 50 条活跃 Issues 中，**Windows 相关约占 60%**，且半数以上被标记 `windows-os + performance` 标签，呈现明显的平台性回归或长期未解的稳定性债务。

---

## 四、重要 PR 进展（精选 10 条）

1. **[#35078](https://github.com/openai/codex/pull/35078)** — 为 code-mode host 增加 **WebSocket 传输层**（支持 `--listen ws://IP:PORT`），扩展远程部署能力。
2. **[#35059](https://github.com/openai/codex/pull/35059)** — 将 exec-server HTTP 层与 `reqwest` 解耦，重命名为 `RouteAwareHttpClient`，统一走 Codex 路由感知传输。
3. **[#35056](https://github.com/openai/codex/pull/35056)** — **exec-server WebSocket 走配置代理**，远程环境（包括 rendezvous 重连场景）遵循 Codex 出站代理策略。
4. **[#35063](https://github.com/openai/codex/pull/35063)** — 引入 `deferred_tool_world_state` 特性，向模型暴露 **延迟工具命名空间** 及其描述。
5. **[#35065](https://github.com/openai/codex/pull/35065)** — 优化 `tool_search` 描述，避免重复列出已通过 `DeferredToolWorldState` 暴露的工具源。
6. **[#35054](https://github.com/openai/codex/pull/35054)** — 新增 **可禁用 `update_plan` 工具** 的配置项（默认开启），减少不需要规划流程的场景中的噪声。
7. **[#35049](https://github.com/openai/codex/pull/35049)** — 注册 **`GuardianV2` 特性开关**（用于自动审批审核），默认禁用。
8. **[#35036](https://github.com/openai/codex/pull/35036)** — 修复 **Guardian 会话丢失 Windows 沙箱代理设置** 的问题。
9. **[#35031](https://github.com/openai/codex/pull/35031)** — **强制分页线程的写者独占**（archive/delete 操作必须等写锁），避免多进程并发破坏线程与派生项。
10. **[#35024](https://github.com/openai/codex/pull/35024)** — 自定义 Responses provider 可选择启用 **独立 `web.run` 联网搜索工具**（`supports_standalone_web_search` 设置，默认关闭）。

> 此外，**`copyberry[bot]` 仍是当日 PR 主力贡献者**，表明 Codex 持续推进基于其自动化工作流的内部代码整理与重构。

---

## 五、功能需求趋势

从全部 Issues 与 PR 中提炼出的社区关注方向：

| 方向 | 代表性议题 | 趋势强度 |
|------|-----------|---------|
| **Windows 桌面稳定性** | 进程泄漏、WMI 耗尽、Powershell 轮询、CPU 满载 | 🔥🔥🔥🔥🔥 |
| **沙箱与文件可写根路径** | apply_patch 失败、split writable roots、bypass 风险 | 🔥🔥🔥🔥 |
| **UI/UX 配置可控性** | 禁用自动解决、关闭 update_plan、侧边栏行为、多会话并行 | 🔥🔥🔥🔥 |
| **代理/网络传输层** | exec-server WebSocket + HTTP 走代理、WebSocket 监听 | 🔥🔥🔥 |
| **工具系统抽象** | 延迟工具命名空间、deferred world state、MCP 进程池 | 🔥🔥🔥 |
| **自定义 Provider 扩展** | 独立 web.run、MCP 跨运行时更新 | 🔥🔥 |
| **国际化/i18n** | 阿拉伯语 RTL/LTR 混排、越南语拼写检查 | 🔥🔥 |
| **模型行为安全** | 畸形 tool-call 导致推理泄漏（[#34245](https://github.com/openai/codex/issues/34245)） | 🔥🔥 |

---

## 六、开发者关注点（高频痛点）

1. **🔴 Windows 桌面是当前最大痛点**：多条 P0/P1 报告指向**进程管理失控**（taskkill/conhost/powershell 风暴）和 **WMI 配额耗尽**，部分用户必须关闭 Codex 才能恢复机器。这一系列问题跨多版本持续存在，开发者期望获得**进程生命周期收敛**与 **WMI 调用节流** 的根治方案。
2. **🟠 沙箱与 apply_patch 冲突**：Windows 平台上沙箱注入的多可写根路径让 `apply_patch` 直接失效，迫使 agent 通过 powershell 绕过沙箱，存在 **安全隐患与正确性风险**。
3. **🟡 配置粒度不足**：用户希望对 **自动行为**（60 秒自动解决、update_plan、侧边栏自动展开等）拥有更细粒度的开关，而非"二选一"的体验。
4. **🟡 长会话上下文压缩异常**：自动压缩后上下文仍占 ~80%，导致频繁二次压缩，浪费 token 配额。
5. **🟢 多任务/多 agent 工作流受限**：当前 macOS App 单会话限制（[#13036](https://github.com/openai/codex/issues/13036)）已无法满足复杂并行场景。
6. **🟢 安全审计意识上升**：社区开始关注 **畸形 tool-call 导致模型推理泄漏** 的潜在提示词注入/子版本攻击向量。

---

*数据来源：[github.com/openai/codex](https://github.com/openai/codex) 过去 24 小时更新；本日报由 GitHub 数据自动汇总生成。*

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

<think>Let me analyze the GitHub data for Gemini CLI and generate a daily report for 2026-07-24.

Key observations:
1. No new releases in the past 24 hours
2. 50 issues updated, 33 PRs updated
3. Many issues are P1 priority bugs related to agent behavior
4. Notable themes:
   - Subagent issues (hanging, recovery, browser subagent)
   - Auto Memory system bugs
   - Shell command execution issues
   - Browser agent issues
   - Security fixes (TOCTOU, trust dialogs)
   - Authentication issues
   - SSR Pipeline (pr-generator) - large feature being built
   - Caretaker agent infrastructure

Let me organize this into a comprehensive Chinese daily report.

For Issues to highlight (top 10 by comments and importance):
1. #22323 - Subagent recovery after MAX_TURNS (12 comments) - P1 bug
2. #21409 - Generalist agent hangs (8 comments, 8 likes) - P1 bug
3. #19873 - Zero-Dependency OS Sandboxing (8 comments) - P2 enhancement
4. #24353 - Robust component level evaluations (7 comments) - P1
5. #22745 - AST-aware file reads (7 comments) - P2 feature
6. #21968 - Gemini doesn't use skills enough (6 comments) - P2 bug
7. #26522 - Auto Memory low-signal retry (5 comments) - P2 bug
8. #25166 - Shell command execution stuck (4 comments, 3 likes) - P1 bug
9. #21983 - browser subagent fails in wayland (4 comments) - P1 bug
10. #22093 - Subagents running without permission (3 comments) - P2 bug
Also worth mentioning: #26525 (security redaction), #22267 (browser agent settings)

For PRs to highlight (top 10):
1. #28346 - Fix trust dialog disclosure for runnable hooks (security P1)
2. #28330 - Fix TOCTOU window in token file (security P2)
3. #28331/#28333 - Stagnation detection for agentic loops (P2 agent)
4. #28328 - Fix 401 substring false positive (P2 core)
5. #28327 - Fix file:// URL decoding (P2 core)
6. #28519 - Fix infinite auth loop (P1 core)
7. #28523 - File keychain tag length validation (security)
8. #28433 - PR generator orchestrator state machine
9. #28524 - Caretaker triage prompt improvements
10. #28435 - PR generator core (SSR pipeline)
Also: #28509 - Filter thought parts (P2)
#28183 - VS Code terminal focus fix (P1 extensions)

Feature trends:
- AST-aware file/codebase tools
- Browser agent improvements
- Auto Memory system refinements
- Security hardening
- SSR pipeline / automated PR generation
- Sandbox/security for bash execution
- Tool count limits (>128 tools causes 400)
- Subagent visibility and trajectory sharing

Developer concerns:
- Subagent hangs and unexpected behavior
- Permission system issues (subagents bypassing permissions)
- Shell command hanging after completion
- Auto Memory quality issues
- Authentication loops
- Symlink detection in agent paths
- Tmp script cleanup</think>

# Gemini CLI 社区动态日报

**日期：2026-07-24** ｜ 数据来源：`google-gemini/gemini-cli`

---

## 📌 今日速览

过去 24 小时无新版本发布，社区活跃度集中在 **P1 级 Agent 缺陷修复** 与 **Auto Memory 系统健壮性** 上。多个长期存在的 subagent 异常退出（#22323、#21409）问题持续发酵；与此同时，自动化基础设施（PR 生成管线 SSR Pipeline、Caretaker Agent）的多个 XL 级 PR 进入待评审阶段，平台化方向逐渐清晰。安全类 PR 也迎来一波合并，包括文件夹信任对话框披露与 token 文件 TOCTOU 窗口修复。

---

## 🚀 版本发布

*今日无新版本发布，跳过此节。*

---

## 🔥 社区热点 Issues（按关注度精选 10 条）

| # | Issue | 优先级 | 评论 | 核心问题 |
|---|-------|--------|------|----------|
| [#22323](https://github.com/google-gemini/gemini-cli/issues/22323) | Subagent recovery after MAX_TURNS is reported as GOAL success | P1 | 12 | `codebase_investigator` 在达到最大轮次时仍报告 `status: "success"` 与 `Termination Reason: "GOAL"`，掩盖了真实中断状态 |
| [#21409](https://github.com/google-gemini/gemini-cli/issues/21409) | Generalist agent hangs | P1 | 8 (👍8) | 任何任务一旦委派给 generalist agent 即永久挂起，连简单的目录创建也无法完成；显式禁用 sub-agent 才能绕过 |
| [#19873](https://github.com/google-gemini/gemini-cli/issues/19873) | Leverage model's bash affinity via Zero-Dependency OS Sandboxing | P2 | 8 | 通过 OS 沙箱与执行后意图路由释放 Gemini 3 的原生 bash 能力，是 subagent 执行效率路线的关键提案 |
| [#24353](https://github.com/google-gemini/gemini-cli/issues/24353) | Robust component level evaluations | P1 | 7 | 跟进行为评估体系，已生成 76 个 behavioral eval 测试、覆盖 6 个模型；评估基础设施的里程碑式 EPIC |
| [#22745](https://github.com/google-gemini/gemini-cli/issues/22745) | Assess the impact of AST-aware file reads, search, and mapping | P2 | 7 | AST 感知的文件读取与搜索能否减少 token 浪费、提升精度？探索 `tilth`/`glyph` 工具落地 |
| [#21968](https://github.com/google-gemini/gemini-cli/issues/21968) | Gemini does not use skills and sub-agents enough | P2 | 6 | 即便配置了 gradle/git 等 skills，模型也不会主动调用，需显式指令；sub-agent 调用率极低 |
| [#26522](https://github.com/google-gemini/gemini-cli/issues/26522) | Stop Auto Memory from retrying low-signal sessions indefinitely | P2 | 5 | Auto Memory 仅当抽取 agent 成功 `read_file` 时才标记 session 为已处理，导致低信号 session 反复入索引 |
| [#25166](https://github.com/google-gemini/gemini-cli/issues/25166) | Shell command execution gets stuck with "Waiting input" after command completes | P1 | 4 (👍3) | 即便是极简的非交互命令，CLI 也常挂起在 "Awaiting user input"，核心 Shell 路径稳定性问题 |
| [#21983](https://github.com/google-gemini/gemini-cli/issues/21983) | browser subagent fails in wayland | P1 | 4 | Wayland 环境下 browser subagent 直接以 GOAL 失败；限制在 Wayland 桌面用户的可用性 |
| [#22093](https://github.com/google-gemini/gemini-cli/issues/22093) | (Sub)agents running without permission since v0.33.0 | P2 | 3 | v0.33.0 后 sub-agent 默认激活，绕过 `agents.mode` = disabled；权限系统回归风险显著 |

**社区反应**：当前最尖锐的抱怨集中在「subagent 行为不可预期」（hang/越权/错误终止状态），许多 P1 bug 自 3 月创建至今仍未合并，社区维护者以 🔒 标签保守管理；Auto Memory 系列问题（#26516、#26522、#26523、#26525）一次性集中出现，表明该子系统正经历一轮系统性重构。

---

## 🛠 重要 PR 进展（精选 10 条）

| # | PR | 优先级 | 关键内容 |
|---|----|--------|----------|
| [#28346](https://github.com/google-gemini/gemini-cli/pull/28346) | Fix trust dialog disclosure for runnable hooks（已关闭） | P1 / Security | 让文件夹信任发现检查 hook executor 真正运行的嵌套定义；停止将无效的 flat hook 误报为可执行命令，并补充回归测试 |
| [#28330](https://github.com/google-gemini/gemini-cli/pull/28330) | fix(ide-companion): set token file mode atomically（已关闭） | P2 / Security | 修复 IDE companion 写入 token 端口文件时的 TOCTOU 窗口（默认 umask 下文件会短暂可读） |
| [#28331](https://github.com/google-gemini/gemini-cli/pull/28331) / [#28333](https://github.com/google-gemini/gemini-cli/pull/28333) | feat(core): conscious stagnation detection（已关闭） | P2 / Agent | 引入 Guided Recovery + Stagnation Circuit Breaker，解决 `/rewind` 后及纯文本响应时 agentic loop 过早终止 |
| [#28328](https://github.com/google-gemini/gemini-cli/pull/28328) | fix(core): don't flag non-auth 401 substrings（已关闭） | P2 / Core | 修正 `isAuthenticationError` 误判 `localhost:4012`/`exit status 4010` 等子串，避免无意义的 OAuth 流程 |
| [#28327](https://github.com/google-gemini/gemini-cli/pull/28327) | fix(core): only percent-decode file:// URLs（已关闭） | P2 / Core | `resolveToRealPath` 不再对所有路径调用 `decodeURIComponent`，修复 `report%202026.txt` 等合法 `%` 路径被破坏的 bug |
| [#28519](https://github.com/google-gemini/gemini-cli/pull/28519) | fix(core): prevent infinite auth loop | P1 / Core | 修复 OAuth credentials 异步写未 await 导致的 #28430 无限认证循环，并强制 consent 流程 |
| [#28523](https://github.com/google-gemini/gemini-cli/pull/28523) | fix(core): enforce explicit tag length in file keychain | Security | 文件凭证存储严格强制 128-bit (16-byte) auth tag，并拒绝畸形标签，提升跨 Node.js 运行时兼容性 |
| [#28524](https://github.com/google-gemini/gemini-cli/pull/28524) | feat(caretaker-triage): prompt hill-climbing & orchestrator updates | 中型 | 3 周的 triage prompt 调优成果落地，新增 `code_explorer` skill 并更新 orchestrator，行为评估显著提升 |
| [#28433](https://github.com/google-gemini/gemini-cli/pull/28433) | feat(pr-generator-orchestrator): iterative bug-fixing state machine | XL | SSR Pipeline 核心：实现 Firestore 并发锁、AI agent 迭代编码/评估循环、ESLint 静态分析与 diff 限额校验 |
| [#28509](https://github.com/google-gemini/gemini-cli/pull/28509) | fix(core): filter thought parts when context management disabled | 中型 | 在 context management 关闭时彻底过滤 `thought: true` 历史片段，防止 Gemini 2.x 模型的内部独白泄漏 |

**额外值得关注的进展**：[#28183](https://github.com/google-gemini/gemini-cli/pull/28183)（VS Code 扩展关闭 diff tab 时保留终端焦点）持续挂"help wanted"，是少数外部贡献者可以入手的 P1 切入点；[#28435](https://github.com/google-gemini/gemini-cli/pull/28435) 与 [#28434](https://github.com/google-gemini/gemini-cli/pull/28434) 共同构成 SSR Pipeline 的「core + agent」骨架层。

---

## 📈 功能需求趋势

从近一周更新的 50 条 Issues 中提炼出以下社区聚焦方向：

1. **Subagent 行为稳定性** — 占比最高。Hanging（#21409）、错误终止状态（#22323）、越权执行（#22093）、Wayland 兼容（#21983）、browser subagent 配置失效（#22267、#21983）。Subagent 体系仍处于"可用但脆弱"阶段。
2. **Auto Memory 系统重构** — #26516（tracking EPIC）、#26522、#26523、#26525 一日内集体出现，涵盖低信号重试、补丁校验、安全脱敏等多维度；记忆子系统进入集中打磨期。
3. **AST-aware 代码理解** — #22745、#22746 推动基于 AST 的 read/search/mapping，目标是用更少的回合精确读取代方法边界，并降低 token 噪声。
4. **沙箱与安全强化** — #19873（零依赖 OS 沙箱）、#26525（Auto Memory 确定性脱敏）、#28346/#28330（hook 信任与 TOCTOU），构成"执行边界 + 数据边界"的双重加固。
5. **评估与可观测性** — #24353（component-level eval）、#22598（subagent trajectory 通过 `/chat share` 导出），开发者对"能看见 agent 在干什么"的诉求持续上升。
6. **工具数量边界** — #24246 报告 > 128 个 tools 时 400 错误，提示需要智能裁剪或分类机制。
7. **平台级自动化** — SSR Pipeline（Caretaker + PR Generator）相关 PR 集中放量，自动 issue → PR 链路成型。

---

## 💬 开发者关注点

- **🚨 Subagent 是当前最大痛点**：从用户反馈看，挂起、错误终止、绕过权限是高频抱怨；显式禁用 sub-agent 才能"凑合用"是普遍工作流。社区期望更具确定性、可观测的 agentic loop（与 #28331 的 Stagnation Circuit Breaker 同向）。
- **🧠 Auto Memory 的可靠性与隐私双重焦虑**：低信号 session 重复抽取、补丁静默丢弃、本地 transcript 上送模型——既是质量隐患也是合规问题。
- **🐚 Shell 体验细节**：简单命令完成仍被误判为"等待输入"（#25166）、外部编辑器退出导致终端 Buffer 损坏（#24935）——这些"小坑"显著影响日常使用体感。
- **🔐 权限回归风险**：v0.33.0 之后 sub-agent 默认激活（#22093），让注重安全的开发者面临选择：升级拿新特性，还是停留在旧版本保安全。
- **📊 想看到 agent 在做什么**：bug 报告缺失 subagent 上下文（#21763）、轨迹分享困难（#22598），反映出社区从"agent 准不准"转向"agent 透不透明"。
- **🤝 贡献窗口**：[#28183](https://github.com/google-gemini/gemini-cli/pull/28183)（VS Code terminal focus）持续标 `help wanted`，是难得的 P1 低门槛入口；[#22323](https://github.com/google-gemini/gemini-cli/issues/22323) 等 P1 bug 仍处于 `status/need-retesting`，欢迎复现验证。

---

*本日报基于 GitHub Issues/PRs 的标题、标签、评论数与摘要综合生成，所有链接均为 `google-gemini/gemini-cli` 仓库官方地址。*

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

<think>Let me analyze the GitHub data for copilot-cli and create a comprehensive daily report in Chinese.

Key observations:
1. v1.0.74 was released on 2026-07-23 with several improvements
2. 39 issues updated in the past 24 hours, with 30 shown
3. Only 2 PRs, one is closed/withdrawn
4. Major themes:
   - MCP-related issues (MCP tools, OAuth, BigInt serialization, deferred loading)
   - Session/context management issues (5MB CAPI limit, oversize attachments)
   - Platform-specific issues (Windows resume hang, Linux musl)
   - UI/UX issues (loading forever, render loops)
   - ACP (Agent Client Protocol) integration issues

Let me structure the report properly. Since there are only 2 PRs and one is withdrawn, I should be honest about that.

Let me identify the most important issues:
1. #3767 - Closed - Oversized attachment wedges session (12 comments)
2. #4097 - Open - apply_patch stores deleted binary (5 thumbs up)
3. #4089 - Open - Atlassian MCP server OAuth but zero tools
4. #4165 - Open - copilot --resume hangs on Windows
5. #4206 - Open - Environment footer stuck on Loading
6. #4143 - Open - Inherit MCP tools from VS Code (5 thumbs up)
7. #3125 - Open - MCP tools/list_changed notification
8. #3073 - Open - MCP resources/subscribe
9. #4214 - Open - eternally loading
10. #4135 - Open - Hook ask decisions show raw JSON
11. #4233 - Open - Emit usage_update in --acp mode
12. #3696 - Closed - Auto-update on Alpine/musl
13. #3161 - Open - Enterprise auth not supported by ACP
14. #4211 - Open - BigInt in MCP response
15. #4189 - Open - /context MCP Tools reporting issue
16. #4199 - Open - Stale sessions with old binary
17. #4235 - Open - Ctrl+C no longer cancels agent run (regression)

For PRs, only 2 exist:
- #3163 - ViewSonic monitor (oddly named)
- #4228 - Withdrawn

Since there are only 2 PRs and the section asks for 10, I'll need to be honest and note this scarcity.

Let me write the report now.</think>

# GitHub Copilot CLI 社区动态日报
**日期：2026-07-24**

---

## 📌 今日速览

v1.0.74 版本于昨日正式发布，聚焦 MCP 插件体系升级（Open Plugin Spec v1）、IDE 重连可靠性以及子代理可观测性。社区讨论仍高度集中在 **MCP 集成边界**（OAuth、BigInt、tool list_changed、Atlassian 服务器）与 **会话/上下文管理**（CAPI 5MB 上限、Windows 恢复挂死、永久 Loading）两大方向，且新提交的多条 triage Issue 显示 Ctrl+C 中断、$EDITOR 集成、ACP `usage_update` 等**交互细节回归**正成为新的关注焦点。

---

## 🚀 版本发布

### v1.0.74（2026-07-23）& v1.0.74-4

**新增**
- 支持 **Open Plugin Spec v1** 插件清单与 `mcp.json` 配置
- `/search` 弹层下输入 `?` 改为字面量字符而非触发 quick help

**改进**
- 子代理时间轴可标注提示词来源（主代理 / 其他子代理）
- 多轮子代理（multi-turn subagent）相关增强

**修复**
- IDE 集成在 CLI 重载 MCP 服务器或切换目录时**重连更稳定**

🔗 [Release 链接](https://github.com/github/copilot-cli/releases/tag/v1.0.74)

---

## 🔥 社区热点 Issues（Top 10）

| # | Issue | 关键看点 | 状态 / 反馈 |
|---|---|---|---|
| 1 | [#3767](https://github.com/github/copilot-cli/issues/3767) 超大附件让会话永久卡死（CAPI 5MB 上限无法恢复） | 12 条评论，社区最高讨论度。揭示 CAPI Responses 5MB 原生限制下的**会话级不可恢复**问题 | 已关闭 ｜ 👍1 |
| 2 | [#4097](https://github.com/github/copilot-cli/issues/4097) `apply_patch` 删除二进制后仍写入历史，导致 CAPI 5MB 超限 | 👍5，是今日**最受认可**的开放 Issue；与 #3767 形成"上下文膨胀"系列问题 | OPEN |
| 3 | [#4143](https://github.com/github/copilot-cli/issues/4143) CLI 应继承 VS Code 已连接的 MCP 工具 | 👍5，反映社区对**跨 IDE 工具复用**的强烈需求 | OPEN |
| 4 | [#4089](https://github.com/github/copilot-cli/issues/4089) Atlassian MCP：OAuth 成功但零工具暴露 | 4 条评论；其他 HTTP MCP（LeanIX、Lucid）正常，疑为服务端兼容性 | OPEN |
| 5 | [#4165](https://github.com/github/copilot-cli/issues/4165) Windows 上 `copilot --resume` 在冷启动时永久"Resuming session" | 3 条评论；冷启动路径下 PowerShell 直接调用必现，先启动 TUI 再恢复则正常 | OPEN |
| 6 | [#4206](https://github.com/github/copilot-cli/issues/4206) 企业 MCP 策略下 GitHub MCP 握手卡死，Footer 永久 Loading | 3 条评论 / 👍2；与 v1.0.73 企业场景紧密相关 | OPEN / triaged |
| 7 | [#3125](https://github.com/github/copilot-cli/issues/3125) MCP `tools/list_changed` 通知在本轮不可见 | 2 条评论；破坏 MCP 动态工具发现的**协议契约**，影响长会话 | OPEN / triaged |
| 8 | [#3073](https://github.com/github/copilot-cli/issues/3073) 支持 MCP `resources/subscribe` 与 `notifications/resources/updated` | 2 条评论；自主代理工作流的关键缺失原语 | OPEN / triaged |
| 9 | [#4214](https://github.com/github/copilot-cli/issues/4214) 新会话进入"eternally loading"（持续闪烁蓝圈） | 与 #4206 形成**会话初始化卡死**同族问题 | OPEN |
| 10 | [#4233](https://github.com/github/copilot-cli/issues/4233) ACP 模式下发出 `usage_update`（上下文窗口 + AI 额度） | 👍2；为 Zed 等 ACP 客户端补齐与 `/context`、`/usage` 等价的展示能力 | OPEN |

> **观察**：今天 7 条"今日新增"Issues（#4227–#4238）几乎全部进入 `triage` 队列，说明社区反馈**收单效率高但分诊压力也在上升**。

---

## 🛠 重要 PR 进展

⚠️ **过去 24 小时仅有 2 条 PR 更新，且均为边缘性提交**：

| # | PR | 备注 |
|---|---|---|
| 1 | [#3163](https://github.com/github/copilot-cli/pull/3163) ViewSonic monitor | 长期未更新的 runner/monitor 相关，与核心 CLI 功能无关 |
| 2 | [#4228](https://github.com/github/copilot-cli/pull/4228) Withdrawn | 作者主动撤回，原因为修改了文档而非私有剪贴板运行时实现 |

> **PR 流量异常偏低**：今天没有可纳入"重要"列表的核心 PR。建议关注昨日合并的 v1.0.74 对应改动（IDE 重连、子代理时间轴标注）。

---

## 📈 功能需求趋势

从过去 24 小时的 30+ 条 Issue 中提炼出**五大社区方向**：

1. **MCP 协议完整性**（最热）
   - OAuth 与工具暴露不一致（#4089）
   - `BigInt` 序列化崩溃（#4211）
   - `tools/list_changed` 不及时刷新（#3125）
   - `resources/subscribe` 缺失（#3073）
   - 插件 MCP 无法解析项目目录（#4234）
   - Playwright MCP localhost 失效（#4232）
   - `/context` 报告 MCP 工具"未去重"的真实占用（#4189）

2. **会话/上下文管理**
   - CAPI 5MB 上限导致 #3767 / #4097 永久卡死
   - 多终端会话更新后旧二进制残留、内存泄漏（#4199）
   - Windows `--resume` 冷启动挂死（#4165）
   - 永久 Loading（#4206、#4214）

3. **IDE/编辑器互操作**
   - CLI 继承 VS Code MCP 工具（#4143）
   - ACP `usage_update`（#4233）
   - ACP 企业认证（#3161）
   - Xcode ACP `session/prompt` 失败（#4227）

4. **交互细节回归与体验**
   - Ctrl+C 不再中断运行（#4235，regression）
   - Ctrl+G 在 `ask_user` 自由文本模式失效（#4230）
   - Hook `ask` 返回原始 JSON 而非 diff 视图（#4135）
   - GitHub MCP 失败详情逐字符换行（#4238）
   - `preToolUse` "ask" 拒绝路径中的引导消息被丢弃（#4237）

5. **Linux/平台边界**
   - Alpine/musl 自动更新选错包（#3696，已关闭）
   - `copyOnSelect` 暂不支持 X11/Wayland PRIMARY（#4236）

---

## 🧑‍💻 开发者关注点

- **痛点 #1：会话"不可恢复"语义缺失**
  开发者最关心的是**何时该自动 `/compact`、何时该优雅失败**。当前 CAPI 5MB 超限后无任何回退路径，#3767 / #4097 形成明显的"上下文炸弹"问题族。

- **痛点 #2：MCP 集成缺乏端到端验证**
  多个不同厂商（MCP Atlassian、Playwright、BigInt 返回方）出现互操作问题，社区期待更严格的 **MCP 兼容矩阵**与更清晰的错误提示。

- **痛点 #3：交互层回归风险**
  单日新增 3 条直接关系日常使用的回归 Issue（Ctrl+C、Ctrl+G、Hook ask 渲染），说明 **TUI/Ink 渲染层**在快速迭代中存在稳定性挑战。

- **高频需求**
  - ✅ 跨编辑器工具复用（VS Code → CLI MCP）
  - ✅ ACP 协议对等能力（usage_update、企业登录）
  - ✅ 平台安装稳健性（musl、PRIMARY 剪贴板）
  - ✅ Agent 指令的更细粒度作用域（`applyTo` + 标签，#4231）

---

*数据来源：[github.com/github/copilot-cli](https://github.com/github/copilot-cli)，采样窗口：2026-07-23 → 2026-07-24*

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

<think>Let me analyze the GitHub data for Kimi Code CLI (MoonshotAI/kimi-cli) for the date 2026-07-24 and create a comprehensive daily report in Chinese.

Key observations:
1. No releases in past 24 hours
2. 6 Issues updated/created
3. 15 Pull Requests updated/created

Issues breakdown:
- #1282: Remote Control feature request (16 👍, 6 comments) - high community interest
- #2555: Discussion about A-share quantification + AI Agent - new discussion
- #2553: Bug - /plugins crashes with TypeError on Windows
- #2552: Bug - Poor font kerning for Cyrillic text in Kimi Desktop
- #2545: Enhancement - Sync queued prompts to backend for phone users
- #2538: Bug - kimi-datasource plugin worker pool blocks all sessions

Pull Requests breakdown:
- 14 PRs from @lihailong00 (very active contributor)
- 1 PR from @ayaangazali
- Categories of fixes:
  - MCP fixes (3 PRs: #2548, #2541, #2539)
  - Shell fixes (3 PRs: #2551, #2549, #2537)
  - Windows fixes (2 PRs: #2547, #2542)
  - Media fix (#2540)
  - KAOS fix (#2544)
  - Print fix (#2546)
  - Hooks fix (#2543)
  - Kosong fix (#2550)
  - StrReplaceFile fix (#2554)

Let me structure the report:

1. 今日速览 - Most important: Multiple bug fixes being submitted by @lihailong00, focus on Windows compatibility and MCP issues
2. 版本发布 - None, skip
3. 社区热点 Issues - Need to pick 10, but only have 6, so I'll list all 6
4. 重要 PR 进展 - Pick 10 most important
5. 功能需求趋势 - Remote control, mobile/phone support, multi-language support
6. 开发者关注点 - Windows compatibility, MCP integration, plugin stability

Let me write this report now in Chinese.</think>

# Kimi Code CLI 社区动态日报
**日期：2026-07-24**

---

## 📌 今日速览

今日仓库以 **Bug 修复 PR 集中合并** 为主线，活跃贡献者 @lihailong00 一次性提交 14 个针对 Windows 兼容、MCP 集成、Shell 补全、媒体处理等模块的小型修复；Issues 端则聚焦于 **远程控制移动端、多设备会话同步** 等产品级需求，同时收到关于 `/plugins` 崩溃（v0.29.0 Windows）和字体渲染（Cyrillic）的两条新 Bug 报告。

---

## 🚀 版本发布

过去 24 小时无新版本发布，跳过此节。

---

## 🔥 社区热点 Issues

| # | 标题 | 状态 | 👍 | 重要性 |
|---|---|---|---:|---|
| [#1282](https://github.com/MoonshotAI/kimi-cli/issues/1282) | **Feature Request: Remote Control** — 从任意设备续接本地 CLI 会话 | OPEN | 16 | ⭐⭐⭐ 高 |
| [#2545](https://github.com/MoonshotAI/kimi-cli/issues/2545) | **手机端排队 Prompt 同步** — 切后台后丢失队列，Kimi Web 体验受损 | OPEN | 0 | ⭐⭐⭐ 高 |
| [#2553](https://github.com/MoonshotAI/kimi-cli/issues/2553) | **`/plugins` 在 Windows + v0.29.0 崩溃** — 安装 ≥2 插件触发 `TypeError` | OPEN | 0 | ⭐⭐ 中 |
| [#2552](https://github.com/MoonshotAI/kimi-cli/issues/2552) | **Cyrillic 字体字距异常** — Kimi Desktop (Windows) markdown 渲染问题 | OPEN | 0 | ⭐⭐ 中 |
| [#2538](https://github.com/MoonshotAI/kimi-cli/issues/2538) | **kimi-datasource 插件 worker 池阻塞全部会话** | OPEN | 0 | ⭐⭐ 中 |
| [#2555](https://github.com/MoonshotAI/kimi-cli/issues/2555) | **讨论：A 股量化 + AI Agent 实践** — 从 Kimi Agent 思路引申 Hermes 框架 | OPEN | 0 | ⭐ 讨论 |

**解读：**
- **#1282** 是当前社区呼声最高的需求（16 👍，6 评论），跨设备会话续接是 CLI 工具向"全场景生产力工具"演进的关键路径。
- **#2545** 与 #1282 形成互补：前者是 Kimi Web 端排队逻辑问题，后者是 CLI 端的远程化方向，呼应"移动办公"趋势。
- **#2553、#2552、#2538** 三条 Bug 均集中在 **Windows + 插件/多语言/并发稳定性**，说明 v0.29.0 在跨平台与插件生态上仍有打磨空间。
- **#2555** 是来自金融领域开发者的方法论分享，属生态讨论类，非功能请求但反映 Kimi Agent 思路在垂直行业的辐射力。

---

## 🛠 重要 PR 进展

> 今日共 15 个 PR 更新，**@lihailong00 贡献了 14 个**，均为小范围、可独立验证的"回归性 Bug 修复"，符合 "well under 100 LOC" 的策略。

| PR | 标题 | 模块 | 核心价值 |
|---|---|---|---|
| [#2548](https://github.com/MoonshotAI/kimi-cli/pull/2548) | reuse initialized MCP client sessions | MCP | 避免重复 `initialize`，让 stdio 严格服务器可正常工作 |
| [#2541](https://github.com/MoonshotAI/kimi-cli/pull/2541) | continue after deferred MCP startup failure | MCP | 后台 MCP 启动失败不再中断交互回合（仅吞 `MCPRuntimeError`） |
| [#2539](https://github.com/MoonshotAI/kimi-cli/pull/2539) | normalize MCP tools for Moonshot API | MCP | 为 Moonshot 兼容格式生成稳定别名，补齐 `object` root type |
| [#2551](https://github.com/MoonshotAI/kimi-cli/pull/2551) | search past 1000 filesystem entry limit | Shell `@` 补全 | 非 Git 场景下补全深度提升到 10000，结果集仍限 1000 |
| [#2549](https://github.com/MoonshotAI/kimi-cli/pull/2549) | index tracked vendor files | Shell `@` 补全 | 允许 `vendor/` 下被 Git 追踪的文件参与补全 |
| [#2537](https://github.com/MoonshotAI/kimi-cli/pull/2537) | numeric keypad input | Shell | Windows Terminal 小键盘 SS3 序列解析，修复数字输入 |
| [#2547](https://github.com/MoonshotAI/kimi-cli/pull/2547) | configure Windows stdio as UTF-8 | Windows | CLI 启动时给 stdout/stderr 设 UTF-8，GBK/cp936 终端不再乱码 |
| [#2542](https://github.com/MoonshotAI/kimi-cli/pull/2542) | isolate Windows process log files | Windows 日志 | `kimi.<pid>.log` 避免并发进程踩同一文件 |
| [#2544](https://github.com/MoonshotAI/kimi-cli/pull/2544) | terminate local process trees | KAOS | 命令独立进程组/会话，取消/超时回收整棵进程树 |
| [#2546](https://github.com/MoonshotAI/kimi-cli/pull/2546) | escape markup in echoed stdin prompts | 打印 | stdin 回显不再被 Rich 当作 markup 解析（修复 `[/login]` 类文本） |
| [#2554](https://github.com/MoonshotAI/kimi-cli/pull/2554) | `StrReplaceFile` 计数基于运行内容 | Tools | 替换成功后报数与磁盘一致（作者 @ayaangazali） |

> 还有 #2543（hooks 通知）、#2540（ICO→PNG 归一化）、#2550（kosong 序列化透传）、#2536（web banner 编码）均已就绪，等待 review/合并。

---

## 📈 功能需求趋势

从本周 Issues 关键词归纳，社区关注正从"能用"迈向"用得爽、跨场景"，可归为四个方向：

1. **🛰 跨设备 / 远程化**
   - #1282 Remote Control（16 👍）
   - #2545 Web 端排队同步
   - 诉求核心：让 CLI/Web/手机形成统一会话状态。

2. **🌍 多语言与本地化**
   - #2552 Cyrillic 字距
   - 反映非英语用户对排版质量开始有更高要求。

3. **🔌 插件生态可靠性**
   - #2553 `/plugins` 崩溃（Windows + 多插件）
   - #2538 datasource worker 池阻塞
   - 插件数量上升后，"安装即崩"和"资源耗尽"成为主要痛点。

4. **🧠 Agent 能力外溢 / 行业方法论**
   - #2555 量化金融 Agent 实践
   - Kimi Agent 思路开始被外部团队作为参考架构。

---

## 👨‍💻 开发者关注点

| 高频痛点 | 代表 Issue / PR | 关键信号 |
|---|---|---|
| **Windows 兼容性** | #2553、#2552、#2547、#2542、#2544、#2537 | 今日 PR 几乎一半与 Windows 强相关，编码/日志/进程组/键盘均需单独修 |
| **MCP 集成的稳定性** | #2538、#2548、#2541、#2539 | MCP 作为新协议边缘，握手/超时/序列化全链路都在补 |
| **Shell 补全边界** | #2551、#2549 | "1000 条限制"被首次披露，非 Git 大型仓库体验受限 |
| **插件并发隔离** | #2538、#2553 | 同一 worker 池被多会话共享是普遍反模式 |
| **小变更、合规审查** | 全部 PR 均 <100 LOC | 维护者倾向"小步快跑、独立验证"，避免大 PR review 阻塞 |

---

**总结一句话：** 今天的 Kimi Code CLI 仓库处在"修 bug 密度极高、产品功能集中酝酿"的阶段——一个开发者（@lihailong00）正在用一连串精准修复把 v0.29.x 推上稳定轨道，而用户社区已经把目光投向"手机-电脑无缝衔接"的下一代体验。

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

<think>The user wants me to generate a daily community report for OpenCode based on GitHub data. Let me analyze the data carefully and produce a well-structured Chinese report.

Let me first identify the key information:

**Date**: 2026-07-24

**Releases in past 24 hours**: None

**Issues (50 total, top 30 shown)** - Key observations:
- Most issues are CLOSED, suggesting active maintenance
- Top issues by comments:
  1. #21032 - oh-my-openagent plugin issue (26 comments, 7👍)
  2. #37716 - Internal Server Error (26 comments, 5👍)
  3. #6536 - Mobile App feature request (16 comments, 48👍) - HIGH likes
  4. #22292 - Managed settings bypass security issue (11 comments, 1👍)
  5. #38216 - Request blocked by upstream provider (9 comments, 5👍)
  6. #28035 - Sticky last prompt feature (8 comments, 0👍)
  7. #37326 - Math equations not rendered (7 comments, 1👍)
  8. #29118 - todowrite tool not registered (5 comments)
  9. #26371 - Double Ctrl+C to exit CLI (5 comments, 4👍)
  10. #23842 - Desktop popup notifications (5 comments, 4👍)
  11. #36285 - managed-service restart causes reconnect herd (5 comments)
  12. #38255 - Discrepancy in usage dashboard (5 comments)
  13. #25570 - Multiple Skills in single prompt (4 comments, 16👍) - HIGH likes
  14. #29859 - @ symbol file reference issue on Windows (4 comments)
  15. #29153 - External settings panels (3 comments)
  16. #29100 - Deepseek Desktop Beta error (3 comments)
  17. #28930 - Temperature&top_k config bug (3 comments)
  18. #22152 - Desktop client freezes (3 comments)
  19. #29078 - Desktop freezes on startup (3 comments, 3👍)
  20. #29098 - Document work-arounds for Claude Pro/Max (3 comments)
  21. #24404 - Unified task state color convention (3 comments)
  22. #29075 - MCP server marketplace (3 comments)
  23. #28229 - Android version (3 comments)
  24. #17750 - Tool call invalid JSON (3 comments)
  25. #29143 - Infinite retry loop (2 comments)
  26. #29128 - DeepSeek provider disappeared (2 comments)
  27. #28989 - Unknown tool name race condition (2 comments)
  28. #28854 - workspace delete deletes branch (2 comments, 2👍)
  29. #29088 - Bracket/brace mismatch (2 comments)
  30. #29085 - Multiple API keys round-robin (2 comments, 4👍)

**Pull Requests (50 total, top 20 shown)** - Key observations:
- #38602 - Refactor session runner loop (kitlangton)
- #38580 - Add opencode-flow-engine to ecosystem docs
- #38600 - Add Kimi Code OAuth (bot PR)
- #38596 - Share one tool snapshot per request
- #38433 - Add roll-call command
- #38463 - Support current pty transport
- #38460 - Support current review data
- #38465 - Migrate discovery workflows
- #38461 - Migrate session interactions
- #38466 - Render current session timeline
- #38459 - Project current server state
- #14043 - Subagents under parent session in web
- #33065 - Spinner verbs config
- #37607 - Fresh web sessions in server directory
- #38503 - Add Ling 3.0 Flash free model docs
- #38592 - Fix session changes panel empty
- #36743 - Expand file tree folders on Windows V2
- #35311 - Multiple clones of same repo fix
- #38594 - Reasoning and token limits for custom providers
- #32302 - Forward parent attachments to subagents

**Feature request trends from Issues**:
1. **Mobile App support** - #6536 (48👍), #28229 Android
2. **Multi-provider/credential management** - #29085 (API key rotation), #25570 (multiple skills)
3. **UI/UX improvements** - #28035 (sticky prompt), #23842 (desktop notifications), #24404 (color convention)
4. **Desktop stability** - #22152, #29078 (freezes), #29100 (Deepseek error), #29128 (provider disappeared)
5. **Performance/scaling** - #36285 (managed-service restart), #28989 (race condition)
6. **MCP ecosystem** - #29075 (MCP marketplace)
7. **Model integration** - Various model provider issues

**Developer pain points**:
1. Plugin compatibility issues (oh-my-openagent breaking on upgrade)
2. Desktop app stability (freezes on startup/multi-session)
3. Configuration complexity (env var overrides managed settings)
4. Race conditions and bug fixes
5. Tool registration issues
6. File reference issues on Windows
7. Provider connection issues

Now let me structure this as a Chinese daily report. I need to be analytical, concise, and professional.

Let me organize this:

## 1. 今日速览
- No new releases
- Major active development on V2 (visible from PR titles)
- Mobile app and multi-platform support remain top community asks
- Desktop app stability issues persist

## 2. 版本发布
- None - omit or note briefly

## 3. 社区热点 Issues
Pick top 10:
1. #6536 Mobile App (48👍) - Long-running high-demand
2. #21032 oh-my-openagent plugin regression
3. #37716 Internal Server Error - multi-model
4. #22292 Security: Managed settings bypass
5. #25570 Multiple skills in prompt (16👍)
6. #38216 Upstream provider blocked (Go plan)
7. #36285 managed-service restart reconnect herd (V2 perf)
8. #37326 Math equations not rendered
9. #29078 Desktop freezes on startup (3👍)
10. #23842 Desktop popup notifications (4👍)

## 4. 重要 PR 进展
1. #38602 - V2 session runner refactor
2. #38600 - Kimi Code OAuth
3. #38459-#38466 - V2 desktop migration series
4. #38596 - Share tool snapshot per request
5. #35311 - Multiple clones of same repo fix
6. #14043 - Subagents navigation in web
7. #38592 - Fix session changes panel empty
8. #38594 - Reasoning/token limits for custom providers
9. #36743 - Windows file tree folders V2
10. #38503 - Ling 3.0 Flash free model

## 5. 功能需求趋势
- Mobile/跨平台 (Mobile App, Android)
- 多模型与多凭据 (Multiple API keys, multiple skills)
- UI 体验 (Desktop notifications, sticky prompt, color convention)
- 桌面稳定性 (Desktop freezes)
- MCP 生态 (Marketplace)
- Claude Pro/Max 支持文档化

## 6. 开发者关注点
- 插件升级兼容性
- Desktop 稳定性
- V2 架构迁移
- Windows 平台兼容性
- Provider/Model 配置管理
- 性能与资源管理

Let me write this in Chinese now.</think>

# OpenCode 社区动态日报 · 2026-07-24

## 📌 今日速览

今日社区整体处于**集中消化历史 Issue**的状态——过去 24 小时内更新的 30 条热门 Issue 中绝大多数已被关闭，仓库进入 V2 架构稳定期。与此同时，**以 `@Brendonovich` 为代表的开发者密集提交 V2 Desktop 迁移系列 PR**（PTY、Review、Discovery、Session、Timeline），意味着下一代桌面客户端的核心模块正在最后冲刺。**Mobile App（#6536，48 👍）继续以最高赞稳居社区头号诉求**。

---

## 🚀 版本发布

**无新版本发布。** 上一活跃版本仍为 OpenCode Desktop v1.18.3（参考 #37716 用户报告）。

---

## 🔥 社区热点 Issues

| # | Issue | 状态 | 关注度 | 核心要点 |
|---|-------|------|--------|----------|
| [#6536](https://github.com/anomalyco/opencode/issues/6536) | **Mobile App** | CLOSED | ⭐ **48 👍** | 社区呼声最高的长期请求，呼吁推出原生移动客户端而非仅依赖浏览器 |
| [#21032](https://github.com/anomalyco/opencode/issues/21032) | oh-my-openagent 在 1.3.14 注册失败 | CLOSED | 26 评论 / 7 👍 | 升级后插件加载流程异常，回退 1.3.13 正常，提示版本兼容性回归 |
| [#37716](https://github.com/anomalyco/opencode/issues/37716) | **Internal Server Error**（多模型触发） | CLOSED | 26 评论 / 5 👍 | Desktop v1.18.3 + 多模型均出现 500，影响面较广 |
| [#25570](https://github.com/anomalyco/opencode/issues/25570) | **单 Prompt 多技能支持** | OPEN | 16 👍 | 多框架工作流刚需，但当前单 prompt 仅支持单一 skill，限制明显 |
| [#22292](https://github.com/anomalyco/opencode/issues/22292) | **Managed settings 被绕过（安全）** | CLOSED | 11 评论 | `OPENCODE_PERMISSION` 环境变量与合并策略可覆盖管理员配置，企业部署隐患 |
| [#38216](https://github.com/anomalyco/opencode/issues/38216) | Upstream provider 阻断（Go 套餐） | OPEN | 9 评论 / 5 👍 | Go 套餐所有 Go 档模型报错，免费档正常，疑似上游策略调整 |
| [#36285](https://github.com/anomalyco/opencode/issues/36285) | **V2 managed-service 重启风暴** | CLOSED | 5 评论 | 自动更新触发 service 替换，已有 TUI 全断连、SSE 延迟，需防 reconnect herd |
| [#37326](https://github.com/anomalyco/opencode/issues/37326) | 数学公式未渲染 | OPEN | 7 评论 | Desktop v1.18.2 模型输出 LaTeX 后无可视化，体验降级 |
| [#29078](https://github.com/anomalyco/opencode/issues/29078) | Desktop 启动卡死 | CLOSED | 3 👍 | macOS Apple Silicon v1.15.10 启动后白屏，需重启/重置 |
| [#23842](https://github.com/anomalyco/opencode/issues/23842) | Desktop 桌面通知 | CLOSED | 4 👍 | 任务完成后无系统通知，长任务易遗漏 |

> 趋势观察：过去 24 小时被关闭的 Issues 多为 **回归/兼容性**类问题（插件、Desktop 启动、Provider 列表消失等），说明社区正处于"修 bug 收尾期"。

---

## 🛠 重要 PR 进展

| # | PR | 作者 | 内容摘要 |
|---|----|------|----------|
| [#38602](https://github.com/anomalyco/opencode/pull/38602) | refactor(core): 简化 session runner | @kitlangton | V2 runner 重构为 `drain → runSteps → runStep → callModel`，pending 输入模块合并为 2 个组合子，**可读性大提升** |
| [#38600](https://github.com/anomalyco/opencode/pull/38600) | feat(core): Kimi Code OAuth | @opencode-agent[bot] | 新增 RFC 8628 Device Flow + 官方 `X-Msh-*` 头，Kimi 用户无需手动配 token |
| [#38459](https://github.com/anomalyco/opencode/pull/38459) | feat(app): 投影当前 server 状态 | @Brendonovich | 会话/消息/Provider/MCP 全部归一化到 V2 状态模型（已 CLOSED） |
| [#38460–#38466](https://github.com/anomalyco/opencode/pull/38466) | V2 Desktop 迁移系列（5 PR） | @Brendonovich | 覆盖 **PTY、Review 数据、Discovery、Session 交互、Timeline 渲染**——下一代桌面客户端的关键拼图 |
| [#38596](https://github.com/anomalyco/opencode/pull/38596) | fix(core): 共享单 tool snapshot | @kitlangton | 同一请求内 codemode、Provider、执行闭包共用一份 ToolRegistry，消除多源不一致 |
| [#35311](https://github.com/anomalyco/opencode/pull/35311) | fix(core): 同 repo 多克隆视为不同项目 | @belisoful | **一次性关闭 15 个相关 Issue**，修复 worktree 识别逻辑 |
| [#14043](https://github.com/anomalyco/opencode/pull/14043) | feat(web): Web 端父子会话导航 | @jmagder | 子代理以树形结构展示，长会话可点击跳转 |
| [#38592](https://github.com/anomalyco/opencode/pull/38592) | fix: Session Changes 面板空白 | @oguzeray | 修复 V2 重构导致的 `Session.diff()` stub + `SessionSummary.diff()` 缺失 |
| [#38594](https://github.com/anomalyco/opencode/pull/38594) | feat(app): 自定义 Provider 推理/上下文配置 | @cppcoffee | 关闭 #38593，补齐自定义 Provider 的 reasoning、context size 等高级字段 |
| [#38503](https://github.com/anomalyco/opencode/pull/38503) | docs(zen): Ling-3.0-flash Free | @MrMushrooooom | 新增免费模型 + **18 种语言本地化文档同步** |

---

## 📈 功能需求趋势

| 方向 | 代表 Issue | 信号强度 |
|------|------------|----------|
| **跨平台 / Mobile** | #6536（48 👍）、#28229 Android | ⭐⭐⭐ 长期 Top 1 |
| **多 Provider / 多凭据管理** | #29085 API Key 轮询、#25570 多技能 | ⭐⭐⭐ 企业用户刚需 |
| **桌面 UX 体验** | #23842 通知、#28035 Sticky 提示、#24404 颜色约定 | ⭐⭐ 多人协作场景 |
| **MCP 生态** | #29075 MCP 市场 | ⭐⭐ 长期生态布局 |
| **V2 桌面稳定性与迁移** | #36285、#29078、#22152 | ⭐⭐ 当前焦点 |
| **模型集成扩展** | Kimi OAuth、Ling-3.0-flash、Claude Pro/Max 文档（#29098） | ⭐⭐⭐ |

---

## 💡 开发者关注点

1. **升级兼容性是首要痛点**：#21032、#29118、#29859、#29128 共同指向 **版本升级 → 插件/工具/Provider 配置丢失或行为变更**。建议社区文档增加"破坏性变更清单"。

2. **Desktop 稳定性反复出现**：#22152、#29078、#37716、#29100、#29085 等覆盖启动、多会话、Provider 切换、模型响应等多个面，**macOS Apple Silicon 上尤其明显**，需系统化梳理崩溃链。

3. **Windows 平台被忽视**：#29859（@ 引用文件失败）、#36743（V2 文件树无法展开）—— Windows 仍是 issue 复现重灾区。

4. **企业/Managed 部署语义不清晰**：#22292 揭示了 Managed settings 与环境变量、对象合并策略间的**安全漏洞**，是开源 → 企业部署的必经关卡。

5. **V2 架构切换处于关键期**：`@Brendonovich` 单人连续提交 6 个 V2 迁移 PR，#38592、#38596、#36285 等密集 fix 表明 **V2 重构尚未完全收敛**，建议关注者暂缓在生产环境启用 V2 desktop。

6. **Provider / API Key 管理趋于复杂**：单 key → 多 key 轮询（#29085）、单 skill → 多 skill（#25570）、单 Provider → 高级参数（#38594），说明 OpenCode 正在从"开发者玩具"演化为"团队生产工具"。

---

> 📊 **日报小结**：今日 OpenCode 仓库呈现"V2 桌面冲刺 + 历史 Issue 收尾"的双线节奏。短期风险集中在 **Desktop 稳定性与升级兼容性**，中长期社区价值锚点仍是 **Mobile 原生客户端** 与 **多 Provider/凭据治理**。

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

<think>The user wants me to generate a Chinese daily report for Qwen Code community dynamics on 2026-07-24, based on GitHub data. Let me analyze the data carefully and create a structured report.

Let me parse through the data:

**Releases:**
- v0.20.1-nightly.20260724.7d17c44a3 - includes a test PR for telemetry (daemon metrics init ordering) and a perf change

**Issues (43 total, showing top 30 by comments):**
Top issues by comment count:
1. #5736 [CLOSED] - more full prompt reprocessing (7 comments, 1 like) - performance/caching
2. #7147 [CLOSED] - MCP server never gets tool/resource listing (6 comments) - tools/MCP
3. #7599 [CLOSED] - artifacts no managedId (5 comments) - core bug
4. #7449 [OPEN] - enterprise external-memory integration profile (5 comments) - feature request
5. #7585 [OPEN] - direct external context provider profile (4 comments) - feature request
6. #7485 [OPEN] - TUI blank area after resume (4 comments) - UI bug
7. #7264 [OPEN] - Cold-start lazy-loading candidates (4 comments) - performance
8. #6014 [OPEN] - no longer show file name agent read (4 comments) - UI bug
9. #6806 [OPEN] - status line context usage not refresh after compress (4 comments) - UI bug
10. #7167 [OPEN] - Fleet Shepherd Dashboard (3 comments) - CI/CD
11. #7543 [CLOSED] - getNpmCliPath returns mise bash wrapper (3 comments) - CLI bug
12. #5958 [CLOSED] - Web Shell input editor not working on mobile (3 comments) - UI bug
13. #7287 [CLOSED] - auto-memory MEMORY.md not registered in FileReadCache (3 comments) - core bug
14. #6137 [OPEN] - Flickering in Qwen Code (3 comments) - UI bug
15. #7578 [CLOSED] - using vscode terminal (3 comments) - feature request, duplicate
16. #7520 [CLOSED] - npm 12 compatibility issue (3 comments) - CLI bug
17. #7559 [CLOSED] - Main CI failed: E2E Tests (3 comments) - CI/CD
18. #6428 [CLOSED] - auth login URLs as OSC 8 hyperlinks (2 comments) - feature request
19. #7590 [CLOSED] - 微信频道无法使用 (2 comments) - integration bug
20. #7609 [CLOSED] - Telegram replies always go to #general (2 comments) - integration bug
21. #7605 [CLOSED] - Main CI failed: E2E Tests (2 comments) - CI/CD
22. #7616 [OPEN] - Do we really need this many E2E tests? (2 comments) - feature request
23. #7568 [OPEN] - 安装扩展失败 (2 comments) - extensions bug
24. #7430 [CLOSED] - WebShell workspaceId issue (2 comments) - UI bug
25. #7575 [OPEN] - user-level skills not loaded in channel/ACP mode (2 comments) - core bug
26. #7138 [CLOSED] - Restore prompt to input box on cancel (2 comments) - CLI bug
27. #7515 [CLOSED] - Failed to check for updates (2 comments) - CLI bug
28. #7566 [CLOSED] - Stopping a monitor triggers notification (2 comments) - core bug
29. #7638 [OPEN] - Improve takeover verification (1 comment) - dev/ci-cd
30. #7634 [OPEN] - WSL + Windows Terminal display issues (1 comment) - UI bug

**Pull Requests (50 total, showing top 20):**
1. #7641 - feat(channels): run loops in daemon workers
2. #5738 - fix(cli): default to virtualized terminal history
3. #7633 - fix(cli): align TUI icon columns
4. #7640 - revert: drop stale-base un-park recovery
5. #7471 - feat(web-shell): add git mode selector
6. #7497 - feat(cli): support native video input in /learn
7. #7594 - perf(cli): Propagate compile cache to ACP children
8. #7639 - feat(core): add bounded Goal evidence verification
9. #7624 - docs: refresh subagent lifecycle guidance
10. #7632 - feat(channels): GitHub polling adapter
11. #7302 - feat(cli): reference prior sessions via @
12. #7542 - feat(cli): add version upgrade notices
13. #7637 - feat(serve): expose workspace Channel management API
14. #7268 - feat(serve): Hot-reload workspace trust changes
15. #7630 - ci: label self-reported PRs
16. #7636 - docs(autofix): let agent escalate maintainer's decision
17. #7635 - feat(core): Align GenAI request telemetry with ARMS
18. #7539 - fix(cli): clean orphaned managed npm update artifacts
19. #7603 - fix(sdk-java): Harden daemon transport reliability
20. #7607 - feat(core): add configurable image generation models

Now let me categorize and prioritize:

**Today's Highlights:**
- Release v0.20.1-nightly.20260724
- Heavy activity in performance/cold-start area
- Multiple channels integrations (Telegram, WeChat, GitHub)
- Memory/context provider proposals being discussed
- E2E test failures and CI improvements
- Many UI/TUI bugs

**Community Hot Topics:**
- Performance issues (cold start, prompt reprocessing)
- Channels integrations (Telegram routing, WeChat issues, new GitHub adapter)
- MCP tool/resource listing issues
- Memory integration proposals
- UI/TUI rendering bugs

**Feature Request Trends:**
- IDE/VSCode terminal integration
- External memory/knowledge integration
- Performance/cold-start optimization
- Channels/messaging platform integrations
- Image generation models
- Native video input

**Developer Pain Points:**
- E2E test flakiness
- UI rendering issues
- npm update check failures
- CI/CD reliability
- Channel adapter inconsistencies

Let me write this report now in Chinese with proper structure.

I need to be careful about:
1. Using Chinese
2. Including GitHub links
3. Being concise and professional
4. Selecting the most important items
5. Properly categorizing and analyzing

Let me draft the report.</think>

# Qwen Code 社区动态日报

**日期：** 2026-07-24
**数据周期：** 过去 24 小时
**仓库：** [QwenLM/qwen-code](https://github.com/QwenLM/qwen-code)

---

## 📌 今日速览

Qwen Code 今日发布了 **v0.20.1-nightly.20260724** 预览版，重点加强了遥测指标的稳定性与编译缓存的 ACP 子进程共享。社区方面，**性能优化（冷启动/编译缓存/上下文缓存）**、**Channels 多通道适配器（Telegram/微信/GitHub）** 和 **MCP/扩展生态** 是三大讨论焦点；同时多条 CI E2E 失败告警和 TUI 渲染缺陷仍在持续曝光。

---

## 🚀 版本发布

### v0.20.1-nightly.20260724.7d17c44a3

夜间构建版本，包含两条核心变更：

- **#7456** `test(telemetry)` — 覆盖 daemon metrics 初始化顺序并文档化 `metricReader` 行为不对称（@doudouOUC）
- `perf` — 性能相关变更（具体内容待 Release Notes 补全）

🔗 [查看 Release](https://github.com/QwenLM/qwen-code/releases/tag/v0.20.1-nightly.20260724.7d17c44a3) ｜ [PR #7456](https://github.com/QwenLM/qwen-code/pull/7456)

---

## 🔥 社区热点 Issues（Top 10）

| # | Issue | 状态 | 评论数 | 重要性 |
|---|-------|------|--------|--------|
| 1 | **#5736** [Bug] 近期更新后本地 LLM 更频繁地全量重处理 prompt | ✅ Closed | 7 | 影响长会话缓存效率，关联 llama.cpp 用户体验 |
| 2 | **#7147** [Bug] MCP server 始终无法成功获取工具/资源列表 | ✅ Closed | 6 | 阻碍 MCP 生态接入，影响 Fastmail 等第三方服务 |
| 3 | **#7599** [Bug] workspace artifacts 缺少 `managedId` | ✅ Closed | 5 | 影响 artifact 生命周期管理与事件追踪 |
| 4 | **#7449** [Proposal] 企业级外部记忆集成规范（Open） | 🟢 Open | 5 | 为 Qwen Code 引入 provider-neutral 的外部记忆层奠定基础 |
| 5 | **#7585** [Proposal] 直接外部 Context Provider 规范（Open） | 🟢 Open | 4 | 与 #7449 形成配套，推动多源上下文接入 |
| 6 | **#7264** [Perf] 冷启动懒加载候选（ACP 急切闭包审计） | 🟢 Open | 4 | 17.24 MiB / 2420 模块急切加载，性能优化关键路径 |
| 7 | **#7485** [Bug] TUI：`qwen resume` 后消息与输入框出现大面积空白 | 🟢 Open | 4 | 影响恢复会话后的视觉一致性 |
| 8 | **#6806** [Bug] `/compress` 后状态栏上下文百分比未刷新 | 🟢 Open | 4 | Token 管理可视化反馈失效 |
| 9 | **#6014** [Bug] 新版不再展示 agent 读取的具体文件名 | 🟢 Open | 4 | UX 回归，工具结果可观测性下降 |
| 10 | **#7543 / #7520 / #7515** [Bug] npm 12 兼容性 / mise wrapper 导致更新检查失败 | ✅ Closed | 2-3 | 多用户受影响的发布/更新链路问题 |

**社区反应观察：**
- 性能相关 Issue 占据近 30%，反映冷启动与缓存仍是当前版本痛点
- 多条 Bug 已被 Bot 自动识别并由 maintainer 关闭，说明 triage 流程运转高效
- 关于"外部记忆/上下文"的两条 Proposal（#7449、#7585）由 @doudouOUC 推动，是面向企业场景的战略性讨论

🔗 [全部 Issues](https://github.com/QwenLM/qwen-code/issues)

---

## 🛠️ 重要 PR 进展（Top 10）

### 功能增强

| PR | 标题 | 作者 | 亮点 |
|----|------|------|------|
| **#7641** | feat(channels): 在 daemon workers 中运行 loops | @qqqys | 为 Channels 引入 workspace-scoped loop store 与调度器，支持 worker 重启后的持久化恢复 |
| **#7637** | feat(serve): 暴露 workspace Channel 管理 API | @qqqys | 提供类型发现/快照/CRUD/启动选择/审批的完整 Channel 契约 |
| **#7632** | feat(channels): GitHub 轮询适配器（notification-as-wakeup） | @OrbitZore | 重新设计的 GitHub 通道，notifications 触发 @mention 响应 |
| **#7497** | feat(cli): `/learn` 支持原生视频输入 | @LaZzyMan | 本地 MP4/WebM/MOV/M4V 与 HTTP(S) 视频文件 URL，按模型视频模态门控 |
| **#7302** | feat(cli): `@` 引用历史会话 + Tab 补全 | @LaZzyMan | 项目级历史会话作为可引用上下文注入 |
| **#7607** | feat(core): 可配置图像生成模型 | @qqqys | 新增 `/model --image` 路由与审批门控图像生成工具 |
| **#7471** | feat(web-shell): 新建会话的 Git 模式选择器 | @wenshao | 三种 Git 工作流（当前分支/新建分支/worktree）切换 |
| **#7639** | feat(core): Goal v3 有界证据验证 | @qqqys | 引入 bounded evidence 与独立验证层 |

### 性能与稳定性

| PR | 标题 | 作者 | 亮点 |
|----|------|------|------|
| **#7594** | perf(cli): 将编译缓存传递至 ACP 子进程 | @doudouOUC | 生产 `serve` 入口启用 compile cache，子进程可复用 Node 模块编译缓存 |
| **#5738** | fix(cli): 默认启用虚拟化终端历史 | @ZevGit | 交互式 CLI 默认开启应用内滚动视口，`ui.useTerminalBuffer=false` 可回退 |

### 工程化

| PR | 标题 | 作者 | 亮点 |
|----|------|------|------|
| **#7640** | revert: 撤销 stale-base un-park 恢复逻辑 | @wenshao | 回退 #7602，减少 245 行冗余表面，保留 #7595/#7554 |
| **#7268** | feat(serve): 热重载 workspace 信任变更 | @doudouOUC | 信任策略变化无需重启 daemon，引入语义化快照与代际隔离 |
| **#7542** | feat(cli): 版本升级通知 | @patrick-andstar | 启动时展示"新版本亮点"，遵循无障碍规范 |
| **#7635** | feat(core): GenAI 请求遥测对齐 ARMS | @doudouOUC | 指标规范化，便于接入阿里云 ARMS |
| **#7603** | fix(sdk-java): 加固 daemon transport 可靠性 | @doudouOUC | Java SDK 适配 restart-safe event cursor 契约 |

🔗 [全部 PR](https://github.com/QwenLM/qwen-code/pulls)

---

## 📈 功能需求趋势

从过去 24 小时的 Issues/PR 中提炼出五大方向：

### 1. **Channels 多通道生态扩展**（最热）
- Telegram 主题线程路由修复（#7609）
- 微信频道无法使用（#7590）
- GitHub 通知轮询适配器（#7632）
- Channel Management API（#7637）
- 反映出 Qwen Code 正从"CLI 工具"演化为"多通道 Agent 平台"

### 2. **企业级外部记忆/上下文接入**
- Provider-neutral memory profile（#7449）
- Direct External Context Provider（#7585）
- `~/.qwen/skills/` 在 channel/ACP 模式下未加载（#7575）
- 为企业部署铺路，但需要严谨的安全与版本治理

### 3. **冷启动与运行时性能**
- ACP 急切闭包审计（#7264）
- 编译缓存向子进程传递（#7594）
- Prompt 重处理频率上升（#5736）
- 性能仍是高频痛点，优先级 P2/P3 多项并进

### 4. **MCP / 扩展生态完善**
- MCP server 工具列表获取失败（#7147）
- 扩展 ID 归属校验（#7568）
- VSCode 终端集成请求（#7578，标记为 duplicate）
- 扩展安装/分发链路需要更稳健的元数据校验

### 5. **多模态与图像生成**
- `/learn` 原生视频输入（#7497）
- 可配置图像生成模型（#7607）
- 表明多模态能力正成为产品差异化重点

---

## 👨‍💻 开发者关注点

通过分析近期 Issue 与 PR，可以总结出以下高频痛点与诉求：

### ⚠️ 高频痛点

1. **CI/E2E 测试稳定性**
   - 多次出现 E2E 测试失败（#7559、#7605）
   - #7616 引发讨论：基于非确定性模型 API 测试确定性逻辑是否合理？
   - 测试用例的"伪阳性"维护成本上升

2. **CLI 发布/更新链路脆弱**
   - npm 12 + mise wrapper + registry 调用导致更新检查失败
   - 影响 #7520、#7543、#7515 三条 Issue，已全部关闭修复

3. **TUI 渲染与可观测性回归**
   - `qwen resume` 后大面积空白（#7485）
   - 工具结果不再显示文件名（#6014）
   - `/compress` 后状态栏不刷新（#6806）
   - WSL + Windows Terminal 字符重复渲染（#7634）
   - 移动端 Web Shell 编辑器不可用（#5958）

4. **Channels 路由与权限**
   - Telegram supergroup topic 路由错误（#7609）
   - 微信频道 AcpBridge 内部错误（#7590）
   - Stopping monitor 触发意外通知回合（#7566）

### 💡 高频需求

- **可复现的 bug 模板与 CI 自动化 triage**（Bot 已部分实现）
- **更好的进程内状态恢复**（daemon worker 重启、trust 热重载）
- **VSCode/IDE 原生集成**（虽然 #7578 被标记 duplicate，但需求持续）
- **外部 Provider 的安全/审计契约**（memory、context、tools）

---

## 📊 数据摘要

| 指标 | 数量 |
|------|------|
| 新版本发布 | 1 |
| Issue 更新（24h） | 43 |
| Issue 已关闭 | ~22 |
| PR 更新（24h） | 50 |
| 性能类 Issue | ~6 |
| UI/渲染类 Issue | ~9 |
| Channels/集成类 | ~5 |
| CI/CD 类 | ~4 |

---

*本日报由 AI 自动汇总，数据基于 GitHub 公开 API；如需进一步深入分析某个 Issue 或 PR，请点击对应链接查看完整讨论。*

</details>

---
*本日报由 [Big Model Radar](https://github.com/96loveslife/big_model_radar) 自动生成。*
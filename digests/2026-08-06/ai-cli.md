# AI CLI 工具社区动态日报 2026-08-06

> 生成时间: 2026-08-06 03:11 UTC | 覆盖工具: 8 个

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

<think>The user wants me to generate a horizontal comparative analysis report based on the daily reports of various AI CLI tools. Let me carefully analyze the data from each tool and create a structured comparison report.

Let me extract key data points from each tool's report:

**Claude Code:**
- v2.1.223 released (Marketplace wildcards, risk warnings)
- 30 hot issues (top 10 listed), 5 PRs (all listed since only 5)
- Key themes: Desktop stability crisis, MCP ecosystem silent data loss, Opus 5/Fable 5 model behavior

**OpenAI Codex:**
- v0.146.1 stable + 5 alpha versions for v0.147.0
- 10+ issues listed (with both closed and open)
- ~19 PRs listed
- Key themes: Windows compatibility, Multi-Agent V2 cross-provider issues, TUI polish

**Gemini CLI:**
- v0.54.0 stable + v0.55.0-preview.1 + nightly
- 10 issues listed (top by comments), 13+ PRs listed
- Key themes: Subagent reliability, Auto Memory, new model compatibility

**GitHub Copilot CLI:**
- v1.0.79-2 through -5 pre-releases
- 24 issues updated, 17 new issues
- 0 PRs in past 24 hours
- Key themes: MCP compatibility, BYOK/BYOM, terminal UI, Windows stability

**Kimi Code CLI:**
- No new releases
- Only 3 issues + 3 PRs (much smaller scale)
- Key themes: Memory system, MCP bugs, file integrity

**OpenCode:**
- v1.18.14 released
- 10 issues + 10 PRs listed
- Key themes: Layout preservation, V2 architecture transition, Windows compatibility

**jcode:**
- v0.68.0 released
- 10 issues + 4 PRs
- Key themes: ACP protocol gaps, multi-provider routing, swarm/multi-agent

**pi:**
- No new releases
- 10 issues + 10 PRs
- Key themes: Platform compatibility, model provider expansion, long-task reliability

Now let me synthesize this into a horizontal comparison report:

1. **Ecosystem Overview** - 3-5 sentences on overall trend
2. **Activity Comparison Table** - Issues, PRs, Releases
3. **Common Concerns** - Cross-tool shared pain points
4. **Differentiation Analysis** - Each tool's positioning
5. **Community Heat & Maturity** - Active communities, rapid iteration
6. **Trend Signals** - Industry trends

Let me think about what the common themes are across tools:
- **MCP ecosystem maturity** - Claude Code, Copilot CLI, Kimi all have MCP issues
- **Windows platform compatibility** - Claude Code, Codex, Copilot CLI, OpenCode all have Windows issues
- **Multi-agent/Subagent reliability** - Gemini CLI, jcode, Codex all have subagent issues
- **BYOK/BYOM model flexibility** - Copilot CLI, jcode, Gemini CLI all have this
- **Cross-provider compatibility** - Codex MultiAgent V2, jcode, Gemini
- **TUI/UX polish** - Most tools
- **Model provider expansion** - All tools adding new models
- **Security hardening** - All tools

Differentiation:
- Claude Code: Anthropic-ecosystem centric, heavy on Desktop app, hooks/safety
- Codex: OpenAI-centric, strong on IDE integration, multi-agent v2
- Gemini CLI: Google-centric, focused on Gemini family, agent reliability
- Copilot CLI: GitHub-native, BYOK heavy, terminal-first
- Kimi Code CLI: Moonshot AI-centric, smaller/simpler, multimodal emerging
- OpenCode: Independent/open, V1→V2 transition, broader provider support
- jcode: Independent, strong on ACP protocol, swarm/multi-agent focus
- pi: Independent, strong on extensibility, long-session reliability

Activity comparison:
- Most active: Claude Code (30 issues, 5 PRs)
- Codex (~19 PRs shown)
- Gemini CLI (50 issues, 39 PRs in past 24h)
- Copilot CLI (24 issues, 0 PRs)
- Kimi (3 issues, 3 PRs) - quietest
- OpenCode (top 30 issues, 20 PRs shown)
- jcode (43 issues, 4 PRs)
- pi (50 issues, 38 PRs)

Maturity assessment:
- Mature/production: Claude Code, Codex, Copilot CLI (with caveats)
- Rapid iteration: Gemini CLI (many releases), OpenCode (V2 transition)
- Niche/specialized: Kimi CLI, jcode, pi

Let me write this report now in clean, professional Chinese with data backing.

The user wants the report to be:
- Concise and professional
- Data-backed
- Suitable for technical decision-makers and developers
- In Chinese

I'll structure it carefully with clear sections and use tables where appropriate.</think>

# 主流 AI CLI 工具横向对比分析报告

**报告日期**：2026-08-06
**覆盖工具**：Claude Code、OpenAI Codex、Gemini CLI、GitHub Copilot CLI、Kimi Code CLI、OpenCode、jcode、pi

---

## 一、生态全景

当前 AI CLI 工具生态已进入 **"协议化 + 平台化"双轨竞争阶段**——头部工具（Claude Code、Codex、Gemini CLI）在 MCP（Model Context Protocol）与多代理架构上深度投入，独立工具（OpenCode、jcode、pi）则通过 ACP（Agent Client Protocol）与可扩展 Harness 寻求差异化。社区反馈显示，**Windows 兼容性、MCP 协议鲁棒性、跨 Provider 模型路由** 已成为全行业共性痛点；而 Anthropic、OpenAI、Google 三大厂的 CLI 工具在"自家模型 + 企业级 Marketplace"路径上加速收敛，独立工具则通过轻量化与开放性争取开发者注意力。整体节奏：8 家工具今日合计产出 **3 个稳定版、5 个预/预览版、2 个夜间版**，发布密度高于往常，提示各团队均在冲刺 Q3 路线图。

---

## 二、各工具活跃度对比

| 工具 | Issues 更新 | PR 更新 | 版本发布 | 整体热度 |
|------|-----------|---------|----------|---------|
| **Claude Code** | 30+ (Top 10) | 5 | v2.1.223 | 🔥🔥🔥🔥🔥 |
| **OpenAI Codex** | ~15 (Top 10) | 19 | v0.146.1 稳定 + 5 alpha | 🔥🔥🔥🔥🔥 |
| **Gemini CLI** | 50 | 39 | v0.54.0 稳定 + preview + nightly | 🔥🔥🔥🔥 |
| **GitHub Copilot CLI** | 24 | **0** | v1.0.79-2 至 -5 (4 预发布) | 🔥🔥🔥 |
| **OpenCode** | 30+ | 20 | v1.18.14 | 🔥🔥🔥🔥 |
| **pi** | 50 | 38 | 无 | 🔥🔥🔥🔥 |
| **jcode** | 43 | 4 | v0.68.0 | 🔥🔥🔥 |
| **Kimi Code CLI** | 3 | 3 | 无 | 🔥 |

**数据观察**：
- **PR 产出最高**：Gemini CLI（39）、pi（38）、OpenCode（20）、Codex（19）—— 这四个工具正处于功能密集迭代期。
- **PR 完全静默**：Copilot CLI（过去 24h 内 0 条 PR 更新），是当日唯一"内部推进 + 社区代码贡献空窗"的工具。
- **Issue 数量与 PR 数量不匹配**：Claude Code 与 Copilot CLI 出现 Issue 数远高于 PR 数（30+ vs 5、24 vs 0），提示社区反馈量与维护响应能力存在缺口；反观 Gemini CLI 与 pi 维持较高 PR/Issue 比，开发者贡献通道更活跃。
- **版本节奏最快**：Gemini CLI 24h 内连发 stable + preview + nightly 三类版本，迭代强度全行业第一。

---

## 三、共同关注的功能方向

跨工具出现 ≥3 次的需求方向：

| 共同方向 | 涉及工具 | 具体诉求 |
|---------|---------|---------|
| **🪟 Windows 平台稳定性** | Claude Code、Codex、Copilot CLI、OpenCode、jcode | GPU 进程崩溃、PowerShell 终端退出连带杀父 shell、原生运行时长期红、键位误触发送；Windows 已是事实上的"二等公民" |
| **🔌 MCP 协议生态成熟度** | Claude Code、Copilot CLI、jcode、OpenCode、pi | 参数静默丢失、标签语法吞字段、OAuth 3LO 缺失、跨进程凭据竞态、FastMCP 握手不兼容——MCP 仍是"信任边界脆弱"的状态 |
| **🤖 Subagent / Multi-Agent 可靠性** | Gemini CLI、Codex、jcode | Termination Reason 报告不可信、跨 Provider 加密任务传递失败、swarm 缺原生 tmux 面板 |
| **🔁 BYOK / BYOM 模型灵活性** | Copilot CLI、jcode、Gemini CLI、OpenCode | statusline 与实际请求不一致、模型切换必须重启 CLI、per-tool 模型路由缺失 |
| **📦 会话与项目可移植性** | Claude Code、OpenCode、Gemini CLI、jcode | 项目目录硬编码、会话 transcript 无法项目内存储、Workspace 识别混乱 |
| **🎯 长任务压缩与资源管理** | pi、Claude Code、Codex | 自动压缩阈值过晚触发、X11 连接泄漏、SSE 长会话内存膨胀、Provider 配额重试循环 |
| **🛡️ 安全姿态收紧** | Claude Code、Codex、Gemini CLI、OpenCode | hook fail-open 漏洞、cyber 模型自动审核回退、Mac 签名私钥保护、零依赖 OS 沙箱 |
| **🌐 新模型快速接入** | Gemini CLI、OpenCode、jcode、pi | Gemini 3.5 Flash 可见性、Qwen Token Plan、Bedrock Mantle、Claude Sonnet 5 |

---

## 四、差异化定位分析

| 工具 | 功能侧重 | 目标用户 | 技术路线特征 |
|------|---------|---------|------------|
| **Claude Code** | 企业级 Marketplace 治理、Desktop 客户端、Hook 安全体系 | Anthropic 企业客户 + 安全敏感团队 | 围绕 `strictKnownMarketplaces`/`blockedMarketplaces` 构建组织级策略；Desktop 进入"必须稳定可用"阶段 |
| **OpenAI Codex** | IDE 集成（VS Code 优先）、多代理 V2、Cyber 模型防护 | OpenAI 模型重度用户 + IDE 工作流开发者 | 在 GPT-5 系列上深度优化；引入 `tool_search` 命名空间与 Guardian 中断机制 |
| **Gemini CLI** | Google Cloud 生态、Auto Memory 体系、Subagent 可靠性 | GCP 用户 + 长会话/Agent 研究者 | 与 Vertex AI、Cloud Workstations 深度绑定；构建 `pr-generator-core` 等自动化基础设施 |
| **GitHub Copilot CLI** | GitHub 原生生态、BYOK/BYOM、企业策略 | GitHub Enterprise 客户 + 多云模型用户 | 强依赖 GitHub MCP Registry；BYOK statusline 等 UX 透明度仍欠 |
| **OpenCode** | 开放 Provider 矩阵、V2 Workspace 架构、本地发现 | 跨云模型用户 + 架构敏感开发者 | V1 → V2 大版本过渡；引入 `workspaceID` 概念与多克隆项目识别 |
| **jcode** | ACP 协议完善、Swarm/multi-agent、Claude Code 兼容层 | Zed/ACP 宿主用户 + 多 Agent 实践者 | 与 Claude Code 的 `~/.claude.json` 兼容视为核心卖点 |
| **pi** | 长会话可靠性、扩展 API、Linux 平台规范 | 重度 Agent 用户 + 扩展开发者 | 通过 Harness 工厂、事件总线作用域化等"内部架构演进"构建可生产扩展性 |
| **Kimi Code CLI** | 轻量 + 中文友好 + 多模态探索 | 中文开发者 + Moonshot 模型用户 | 围绕 ACP 多模态扩展（语音客户端 qwen-audio-agent）; 社区规模最小 |

**路线分化关键点**：
- **协议策略**：Claude Code、Copilot CLI 押注 **MCP**；jcode、pi 同时支持 **MCP + ACP**；OpenCode、Codex 自建扩展点。
- **多代理实现**：Codex 主推服务端 Multi-Agent V2；jcode 主推本地 Swarm + tmux；Gemini CLI 主推 Subagent + Auto Memory。
- **平台覆盖**：独立工具（pi、OpenCode、jcode）已默认支持 Linux/macOS/Windows 三平台；头部厂商 CLI 在 Windows 上普遍是短板。

---

## 五、社区热度与成熟度

### 🔥 高活跃 + 高产出（头部成熟 + 快速迭代）
- **Gemini CLI**：50 Issues + 39 PR + 三类版本同日发布，是当前生态中**开发节奏最猛**的工具。
- **pi**：50 Issues + 38 PR，但无版本发布，反映**架构重构期密集提交但暂未发版**的"蓄力"状态。
- **Claude Code**：30 Issues + 仅 5 PR + 1 稳定版，Issue/PR 比偏高，提示社区反馈已超过官方响应带宽。

### � 高活跃 + 节奏稳定
- **OpenAI Codex**：v0.147.0 仍在 alpha 阶段、v0.146.1 已稳定，呈现**"稳定版快速安全回退 + alpha 持续推进"**的双轨节奏。
- **OpenCode**：V1→V2 过渡期，但 PR 活跃度持续（20 条），工程投入稳健。

### �️ 高活跃 + 维护压力
- **GitHub Copilot CLI**：24 Issues / 0 PR / 4 个预发布版本，社区反馈密集但代码贡献通道静默；预发布版本迭代节奏暗示**主要依赖内部分支推进**。
- **jcode**：43 Issues / 4 PR / 1 稳定版，且 4 条 PR 全部由单人维护者 @1jehuang 合并，存在**单点维护风险**。

### 🌱 低活跃 + 稳定维护
- **Kimi Code CLI**：3 Issues / 3 PR / 0 版本发布，社区规模小但 PR/Issue 比健康（1:1），反映**轻量级小团队**的特征。

---

## 六、值得关注的趋势信号

### 🚨 趋势 1：**MCP 进入"协议鲁棒性"深水区**
- 现象：参数静默丢失（Claude Code #72228）、FastMCP 握手不兼容（Copilot CLI #4370）、OAuth 跨进程竞态（OpenCode #40768）。
- 信号解读：MCP 已度过"有没有"的阶段，进入**"能不能信赖"**的阶段。开发者从探索期转向生产部署期，对错误语义、安全失败模式、可观测性提出更严格要求。
- **开发者参考**：在 MCP server 自实现时，主动验证"调用成功 ≠ 字段完整"，并对参数边界、错误传播做对抗性测试。

### 🚨 趋势 2：**跨 Provider 代理架构尚不成熟**
- 现象：Codex Multi-Agent V2 对 DeepSeek/Ollama 等外部 provider 几乎完全失能；jcode per-tool 模型路由需求强烈。
- 信号解读：头部厂商仍以**自家电商生态**为主，独立工具的开放性反而成了卖点。**"模型无关"**正在成为独立工具的差异化核心价值。
- **开发者参考**：选择 CLI 工具时，明确"是否需要多 Provider 同时运行"是关键决策点。

### 🚨 趋势 3：**Agent 任务的可信度成为新瓶颈**
- 现象：Gemini CLI 的 Subagent 误报 `GOAL success`（#22323）、Generalist Agent 永久挂起（#21409）、Shell 卡死（#25166）。
- 信号解读：开发者最担心的不是"Agent 失败"，而是**"Agent 报告成功但实际失败"**——这是工具信任的真正杀手。
- **开发者参考**：在生产自动化链路中，对 Agent 输出增加外部断言（如退出码、文件 hash、断言脚本）比增加 prompt 更有效。

### 🚨 趋势 4：**Windows 平台已成行业性负债**
- 现象：5 家工具存在未根治的 Windows 问题（GPU 崩溃、终端退出行为、键位冲突）。
- 信号解读：尽管 Windows 开发者基数庞大，但 CLI 工具团队的 Windows 测试资源普遍不足，**这是潜在的竞争优势洼地**。
- **开发者参考**：若你维护 CLI 工具，建议把 Windows CI 矩阵纳入"必做清单"——这正在变成可被用户感知的差异化。

### 🚨 趋势 5：**会话与项目可移植性即将成为标配**
- 现象：多家工具正在引入项目级会话存储、跨会话记忆、可移植 transcript。
- 信号解读：AI CLI 正在从"一次性 CLI 工具"演变为"日常开发伙伴"，**持久化与跨上下文**已从加分项变为门槛项。
- **开发者参考**：开始考虑 Agent 工作流的"上下文生命周期管理"——这是 Cursor、Claude Code 等头部工具已布局的方向。

### 🚨 趋势 6：**安全姿态从"事后处置"转向"默认安全"**
- 现象：Claude Code hook fail-closed（#84364）、Codex Cyber 模型 Guardian 中断（#37190）、macOS 签名私钥保护（#37154）、Gemini CLI 零依赖 OS 沙箱（#19873）。
- 信号解读：行业正在从"安全团队事后发现漏洞"转向"默认 fail-closed"，**纵深防御成为产品默认**而非可选项。
- **开发者参考**：在企业级部署中，优先选择默认开启 hook fail-closed、明确权限边界、签名私钥隔离的工具。

---

## 七、给技术决策者的快速建议

| 决策场景 | 推荐工具 | 关键理由 |
|---------|---------|---------|
| **企业级合规 + Marketplace 治理** | Claude Code | v2.1.223 引入 `owner/*` 通配符策略，组织级管理能力最完善 |
| **VS Code IDE 工作流优先** | OpenAI Codex | VS Code 集成最深度；多根工作区支持已落地 |
| **Google Cloud / Vertex AI 用户** | Gemini CLI | 与 GCA、Cloud Workstations 原生集成 |
| **GitHub Enterprise + BYOM** | GitHub Copilot CLI | 依托 GitHub 原生生态，但需关注 Windows 稳定性 |
| **多 Provider 跨云实验** | OpenCode / jcode | V2 Workspace 架构 + 独立工具的开放性优势 |
| **重型长会话 + 扩展生态** | pi | Harness 工厂、事件总线作用域、长任务压缩机制 |
| **中文 + 多模态 + 轻量** |

---

## 各工具详细报告

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills 社区热点

> 数据来源: [anthropics/skills](https://github.com/anthropics/skills)

<think>The user wants me to analyze the Claude Code Skills community data from the anthropics/skills repository and generate a comprehensive report. Let me carefully analyze the data provided.

Let me organize the information:

**Top PRs (by comments/engagement):**
1. #1298 - fix(skill-creator): run_eval.py always reports 0% recall - 修复评估工具
2. #514 - Add document-typography skill - 文档排版质量控制
3. #538 - fix(pdf): correct case-sensitive file references
4. #486 - Add ODT skill - OpenDocument支持
5. #210 - Improve frontend-design skill
6. #83 - Add skill-quality-analyzer and skill-security-analyzer
7. #541 - fix(docx): prevent tracked change w:id collision
8. #539 - fix(skill-creator): warn on unquoted description
9. #1367 - feat(skills): add self-audit
10. #1099 - skill-creator: fix run_eval.py crash on Windows
11. #1050 - skill-creator: fix Windows subprocess + encoding bugs
12. #723 - feat: add testing-patterns skill
13. #525 - Add pyxel skill for retro game development
14. #509 - docs: add CONTRIBUTING.md
15. #181 - Add SAP-RPT-1-OSS predictor skill
16. #95 - Add comprehensive system documentation
17. #1479 - Add plan-file-hygiene skill
18. #1323 - fix(skill-creator): run_eval trigger detection
19. #1302 - Add color-expert skill
20. #1261 - fix(skill-creator): isolate trigger-eval command files

**Top Issues (by comments):**
1. #492 - Security: Community skills distributed under anthropic/ namespace (43 comments, 2 likes)
2. #228 - Enable org-wide skill sharing in Claude.ai (16 comments, 8 likes)
3. #556 - run_eval.py: claude -p never triggers skills/commands (12 comments, 7 likes)
4. #62 - All my skills have disappeared (10 comments, 2 likes)
5. #1329 - Proposing compact-memory skill (9 comments, 0 likes)
6. #202 - skill-creator should be updated to best practice (CLOSED, 8 comments)
7. #412 - Skill proposal: agent-governance (CLOSED, 6 comments)
8. #189 - document-skills and example-skills plugins install identical content (6 comments, 9 likes)
9. #1487 - claude-api skill eagerly injects ~156k tokens (4 comments, 0 likes)
10. #1385 - [Proposal] Reasoning Quality Gate Pipeline (4 comments, 0 likes)
11. #1175 - Concerns regarding Security and Context Window with SharePoint (CLOSED, 4 comments)
12. #29 - Usage with bedrock (4 comments, 0 likes)
13. #16 - Expose Skills as MCPs (4 comments, 0 likes)
14. #12 - Add guidance to avoid whitespace reformatting in docx/ooxml skill (4 comments, 1 like)
15. #1169 - skill-creator description-optimisation loop (3 comments, 1 like)

Now let me identify the most discussed PRs by looking at recency and engagement signals. The PR data shows "评论: undefined" but issues have actual counts. Let me note that the PR comment counts are undefined but I can infer from issue mentions and the recency/update patterns.

Key themes I'm noticing:

1. **skill-creator修复** - 这是最热的话题，多个PR (#1298, #1099, #1050, #1323, #1261, #539) 都在修复评估工具，关联issue #556 (12评论) 和 #1169。说明社区非常依赖skill-creator，但工具在Windows下完全不可用。

2. **文档处理类Skills** - PDF, DOCX, ODT, document-typography - 文档生成是核心应用场景

3. **元工具类Skills** - skill-quality-analyzer, skill-security-analyzer, self-audit, plan-file-hygiene - 关注Skills生态自身质量

4. **安全/信任** - Issue #492 (43评论!) 是最受关注的Issue，关于社区Skills冒充官方Skills

5. **企业协作** - Issue #228 (16评论, 8赞) 关于组织级Skill共享

6. **架构问题** - Issue #189 (6评论, 9赞) 关于插件重复内容，Issue #1487 (4评论) 关于context window耗尽

7. **领域应用** - color-expert, testing-patterns, pyxel(游戏开发), SAP-RPT-1-OSS(企业预测)

8. **AI代理治理** - Issue #412 (6评论) agent-governance，Issue #1385 (4评论) Reasoning Quality Gate Pipeline

Let me write a comprehensive report in Chinese.</think>

# Claude Code Skills 社区热点报告

**数据范围：** anthropics/skills 仓库 · 截止 2026-08-06 · PR 50 条 / Issues 50 条

---

## 一、热门 Skills 排行（PR Top）

| 排名 | PR | Skill 名称 | 状态 | 核心热度来源 |
|---|---|---|---|---|
| 🥇 | [#1298](https://github.com/anthropics/skills/pull/1298) | **skill-creator 评估修复** | OPEN | `run_eval.py` 持续 0% recall，被 10+ 用户复现；直接阻塞 `run_loop.py` / `improve_description.py` 优化闭环 |
| 🥈 | [#514](https://github.com/anthropics/skills/pull/514) | **document-typography** | OPEN | AI 生成文档普遍存在孤词/寡行/编号错位，社区希望从源头解决 |
| 🥉 | [#1367](https://github.com/anthropics/skills/pull/1367) | **self-audit（自审 v1.3.0）** | OPEN | "先机械验证、再四维推理审计"，通用质量门；与 #1385 提案强联动 |
| 4 | [#83](https://github.com/anthropics/skills/pull/83) | **skill-quality-analyzer / skill-security-analyzer** | OPEN | 元 Skills，反向治理 Skills 生态质量与安全 |
| 5 | [#486](https://github.com/anthropics/skills/pull/486) | **ODT Skill** | OPEN | 补齐 OpenDocument 开源格式链路，覆盖 .odt/.ods 的读写与转 HTML |
| 6 | [#1099](https://github.com/anthropics/skills/pull/1099) + [#1050](https://github.com/anthropics/skills/pull/1050) + [#1323](https://github.com/anthropics/skills/pull/1323) + [#1261](https://github.com/anthropics/skills/pull/1261) | **skill-creator Windows/触发检测修复集** | 全部 OPEN | Windows 用户几乎全员 0 触发，触发检测+文件隔离四件套正在合力修复 |
| 7 | [#1302](https://github.com/anthropics/skills/pull/1302) | **color-expert** | OPEN | 命名体系/色彩空间/插值/无障碍，全栈色彩知识库 |
| 8 | [#541](https://github.com/anthropics/skills/pull/541) + [#538](https://github.com/anthropics/skills/pull/538) + [#539](https://github.com/anthropics/skills/pull/539) | **DOCX/PDF/YAML 稳健性修复** | 全部 OPEN | `@Lubrsy706` 系列 PR，治理 OOXML ID 冲突、文件名大小写、YAML 解析陷阱 |

**关键观察：** 几乎所有"高关注度"都不来自点赞数本身（PR 数据中 👍 普遍为 0），而来自：①跨 PR/Issue 的反复提及、②关联 issue 评论数（如 #556=12、#1169=3）、③持续被多人复现。这反映了一个事实：**当前社区最大痛点不是"加新 Skill"，而是"让 skill-creator 自己能跑通"**。

---

## 二、社区需求趋势（Issues 信号）

### 1. 安全与信任边界 — 最强呼声 🛡️
- **[#492](https://github.com/anthropics/skills/issues/492) (43 评论 / 👍2)**：社区 Skills 假冒 `anthropic/` 命名空间，滥用信任边界。是 Issues 区**评论数断层第一**。
- **[#16](https://github.com/anthropics/skills/issues/16) (4 评论)**：呼吁把 Skills 暴露为标准 MCP，把 API 形态契约化，从结构上杜绝冒充。

### 2. 组织级协作与共享 🏢
- **[#228](https://github.com/anthropics/skills/issues/228) (16 评论 / 👍8)**：Claude.ai 内组织级 Skill 共享；点赞数全场最高。当前流程"下载→Slack→手动上传"被广泛吐槽。
- **[#1175](https://github.com/anthropics/skills/issues/1175) (CLOSED, 4 评论)**：SharePoint + Skills 在企业权限模型下的安全落地。

### 3. 评估与描述优化闭环 🔁
- **[#556](https://github.com/anthropics/skills/issues/556) (12 评论 / 👍7)**：`run_eval.py` 触发率 0%。
- **[#1169](https://github.com/anthropics/skills/issues/1169) (3 评论)**：description 优化循环 `precision=100%, recall=0%`。
- **[#202](https://github.com/anthropics/skills/issues/202) (CLOSED, 8 评论)**：skill-creator 写作风格应"指令化"而非"教学化"。

### 4. 上下文与资源治理 📦
- **[#1487](https://github.com/anthropics/skills/issues/1487) (4 评论)**：`claude-api` Skill 单次注入 ~156k tokens，单次工具调用即撑爆上下文。
- **[#189](https://github.com/anthropics/skills/issues/189) (6 评论 / 👍9)**：`document-skills` 与 `example-skills` 内容重复，污染上下文窗口。**点赞密度最高议题之一**。

### 5. AI 代理质量与治理 🤖
- **[#412](https://github.com/anthropics/skills/issues/412) (CLOSED, 6 评论)**：agent-governance —— 策略执行/威胁检测/信任评分/审计。
- **[#1385](https://github.com/anthropics/skills/issues/1385) (4 评论)**：Reasoning Quality Gate Pipeline（前置校准 → 对抗性评审 → 交付验证）。
- **[#1329](https://github.com/anthropics/skills/issues/1329) (9 评论)**：compact-memory —— 长时 Agent 状态用符号化表示压缩 context。

### 6. 工程域深度需求 ⚙️
- **[#723](https://github.com/anthropics/skills/pull/723)** testing-patterns：测试金字塔/单元/组件/E2E 全栈。
- **[#525](https://github.com/anthropics/skills/pull/525)** pyxel：复古像素游戏开发 MCP。
- **[#181](https://github.com/anthropics/skills/pull/181)** SAP-RPT-1-OSS：企业表格预测。
- **[#1479](https://github.com/anthropics/skills/pull/1479)** plan-file-hygiene：规划产物生命周期管理（关联 #1417）。

---

## 三、高潜力待合并 Skills

下列 PR 处于"评论/复现密度高 + 未合并"状态，存在近期落地的强信号：

| PR | Skill | 落地概率信号 |
|---|---|---|
| [#1298](https://github.com/anthropics/skills/pull/1298) | skill-creator 评估总修复 | ★★★★★ 已集结 6 个相关 PR/Issue 协同，#556 已被 10+ 用户复现 |
| [#1099](https://github.com/anthropics/skills/pull/1099) | Windows 子进程读取修复 | ★★★★☆ Windows 用户阻塞性 bug，单行修复成本极低 |
| [#1050](https://github.com/anthropics/skills/pull/1050) | Windows subprocess + 编码修复 | ★★★★☆ 同上，PATHEXT + 编码双修 |
| [#1261](https://github.com/anthropics/skills/pull/1261) | trigger-eval 与项目命令目录隔离 | ★★★★☆ 解决并行评估污染用户项目 #1260 |
| [#1323](https://github.com/anthropics/skills/pull/1323) | 触发检测误判 Skill 名修复 | ★★★★☆ 配合 #1298 的核心补丁 |
| [#539](https://github.com/anthropics/skills/pull/539) | YAML 未加引号 description 校验 | ★★★★☆ 静默解析失败的早期防线 |
| [#538](https://github.com/anthropics/skills/pull/538) | PDF 引用大小写修正 | ★★★☆☆ 即时收益高、风险低 |
| [#541](https://github.com/anthropics/skills/pull/541) | DOCX w:id 冲突修复 | ★★★☆☆ 直接避免文档损坏，重要性高于复杂度 |
| [#509](https://github.com/anthropics/skills/pull/509) | CONTRIBUTING.md | ★★★☆☆ 社区健康分 25% → 显著提升 |
| [#83](https://github.com/anthropics/skills/pull/83) | skill-quality/security-analyzer | ★★★☆☆ 直接回应 #492 安全诉求 |
| [#1367](https://github.com/anthropics/skills/pull/1367) | self-audit v1.3.0 | ★★★☆☆ 与 #1385 提案联动，定位差异化 |

> **结构性发现：** skill-creator 工具链的修复（#1298/#1099/#1050/#1323/#1261/#539）已经形成一个"修复集群"，单点修复已无法根治，需要 Anthropic 维护者统筹合并。

---

## 四、Skills 生态洞察（一句话总结）

> **当前社区最集中的诉求是"让 Skills 生态系统先变得可信、可治理、可复用"——具体表现为：skill-creator 评估闭环在 Windows 下全面失灵（#556, 43+ 评论级联）、社区 Skills 冒充 `anthropic/` 命名空间（#492 安全议题 43 评论断层第一）、单 Skill 注入过多 token 与插件内容重复（#1487/#189）正在掏空上下文；新 Skills 的丰富度反而退居次要位置。**

**3 个直接行动建议（给 Skills 作者/维护者）：**
1. **优先修复 skill-creator 的 trigger detection + Windows 兼容**——这是 1-2 周内能解锁最多用户的关键路径。
2. **建立命名空间与签名机制**——回应 #492，避免社区信任被持续侵蚀。
3. **推行 Skills 的"懒加载/分段引用"模式**——避免 #1487 类单次注入 156k tokens 的反模式。

---

<think>
The user wants me to generate a daily community report for Claude Code based on GitHub data. Let me analyze the data carefully and create a structured report in Chinese.

Let me organize the information:

1. **Today's overview** - Need to summarize the most important dynamics
2. **Version release** - v2.1.223 with new features
3. **Hot Issues** - Need to pick 10 most noteworthy from the 30 shown
4. **Important PRs** - Only 5 PRs in the past 24 hours, but user asks for 10
5. **Feature trends** - Analyze patterns
6. **Developer concerns** - Summary

Let me think about the most important issues:

Top issues by comments and significance:
1. #66504 - Session URL in commit messages (12 comments, 46 thumbs up) - High engagement enhancement
2. #76248 - Cloud/Cowork git proxy blocks pushes (11 comments) - Critical bug
3. #77136 - Opus 4.8/5.0 toxic language issue (8 comments) - Model quality
4. #83403 - Claude Desktop crashes at 5-hour limit (7 comments) - Desktop stability
5. #82536 - `--continue` cannot find -p sessions (7 comments) - CLI workflow bug
6. #72228 - MCP tool calls drop parameters (5 comments) - MCP integration bug
7. #83342 - ugrep balloons to 9-14GB RSS (4 comments) - Performance issue
8. #83744 - Claude Desktop GPU process crash (4 comments) - Desktop crash
9. #74715 - Chrome "Always allow" persistence bug (4 comments) - Browser extension
10. #77605 - Claude in Chrome cross-machine security (3 comments) - Security feature
11. #72875 - /login loop on macOS (3 comments) - Auth issue
12. #78915 - Phantom "Request interrupted" message (3 comments) - Agent bug
13. #81946 - Session transcripts project-portable (3 comments) - Enhancement
14. #83735 - Proxifier ECONNRESET regression (2 comments) - Windows regression
15. #84348 - Disable left-arrow detach gesture (1 comment) - UX
16. #84145 - No local time in context (1 comment) - Date/time bug
17. #76660 - Fable 5 refusal fallback (1 comment) - Model issue
18. #84340 - Security testing triggers rate limit downgrade (1 comment) - Rate limiting
19. #84371 - CLAUDE_CODE_LOCAL_BINARY dead code (0 comments, but new) - Desktop bug
20. #84370 - Change directory unreachable (0 comments, new) - Desktop UX
21. #84369 - Model fabricated user messages (0 comments, new) - Safety/correctness
22. #84368 - Pin sessions in sidebar (0 comments, new) - Enhancement
23. #84367 - GitHub plugin MCP auth header (0 comments, new) - Plugin bug
24. #84366 - Astro projects development (0 comments, new) - Development quality
25. #84053 - Opus 5 prompt override (0 comments, new) - Model behavior
26. #84363 - MCP stdio auto-reconnect (0 comments, new) - Desktop MCP
27. #84362 - Tag-grammar parser silent data loss (0 comments, new) - Critical bug
28. #84361 - False positive safety flags (0 comments, new) - Safety

For PRs - only 5 in past 24 hours, so I need to mention all of them and find more context. The user asks for 10, but I only have 5. I should be honest about that and include all 5.

Let me draft the report.

Feature trends I can identify:
- Desktop app stability (multiple crashes)
- MCP integration issues (parameter loss, stdio reconnect, auth headers)
- Security/safety false positives
- Session management (portability, pinning, change directory)
- Browser extension (Chrome) issues
- Model behavior (Opus 5, Fable 5, Opus 4.8 toxicity)
- Performance (ugrep memory)
- Time/locale handling
- Cross-machine/device features
- UX/keybinding customization

Developer concerns:
- Desktop app reliability (crashes, MCP reconnection, env var handling)
- Model quality regression (toxic language, incoherent output)
- MCP ecosystem maturity (parameter loss, parser bugs, auth)
- False-positive safety filtering affecting legitimate work
- Session/workspace management friction
- Performance/resource consumption
- Cross-platform regressions (Windows especially)
- Lack of local time/timezone awareness

Let me write the report now.
</think>
# Claude Code 社区动态日报
**日期：2026-08-06**

---

## 📌 今日速览

今日发布 **v2.1.223**，引入 `owner/*` 通配符用于企业级 Marketplace 管理策略，是面向组织级部署的实用增强。社区焦点集中在三类问题：**Claude Desktop 稳定性危机**（5 小时使用上限崩溃、GPU 进程崩溃、MCP 断连）、**MCP 生态系统的隐式数据丢失**（工具调用参数静默丢失、标签语法解析器吞字段），以及 **Opus 5 / Fable 5 新模型的行为异常**（toxic 表达、回退策略失效、误判安全过滤）。PR 端则出现多项针对 hookify 与 Cowork 的安全加固修复。

---

## 🚀 版本发布

### v2.1.223（2026-08-06）
主要变更：
- **`strictKnownMarketplaces` 与 `blockedMarketplaces` 支持 `owner/*` 通配符**：企业管理员可通过单条策略批量放行或屏蔽 GitHub 组织下所有 Marketplace 仓库，简化多团队环境下的市场合规治理。
- **针对 workflow agents、forked skills、slash command 与后台恢复任务新增风险警告**，提示用户注意潜在的可信度与执行边界问题。

> 完整 release notes 被截断，建议关注后续补丁说明。

---

## 🔥 社区热点 Issues（Top 10）

| # | Issue | 关注度 | 重要性 |
|---|-------|--------|--------|
| 1 | **[#66504](https://github.com/anthropics/claude-code/issues/66504)** Session URL 默认追加到 commit / PR —— 应改为 opt-in | 💬12 / 👍46 | ⭐⭐⭐ |
| 2 | **[#76248](https://github.com/anthropics/claude-code/issues/76248)** Cowork 云会话 git proxy 拒绝全部 push，PAT 透传失效（疑似 `CCR_TEST_GITPROXY` 灰度） | 💬11 | ⭐⭐⭐ |
| 3 | **[#77136](https://github.com/anthropics/claude-code/issues/77136)** Opus 4.8 表达 toxic、Opus 5.0 进一步失控至语无伦次 | 💬8 / 👍8 | ⭐⭐⭐ |
| 4 | **[#83403](https://github.com/anthropics/claude-code/issues/83403)** Claude Desktop 接近 5 小时使用上限时崩溃，无法重开，必须重装 | 💬7 | ⭐⭐⭐ |
| 5 | **[#82536](https://github.com/anthropics/claude-code/issues/82536)** `--continue` 找不到 `-p` 创建的会话（交互式恢复断链） | 💬7 | ⭐⭐ |
| 6 | **[#72228](https://github.com/anthropics/claude-code/issues/72228)** MCP 工具调用在长参数后会静默丢弃后续参数（v2.1.195 引入） | 💬5 | ⭐⭐⭐ |
| 7 | **[#83342](https://github.com/anthropics/claude-code/issues/83342)** 内置 `ugrep` 编译 BRE 时内存膨胀至 9–14 GB RSS | 💬4 | ⭐⭐ |
| 8 | **[#83744](https://github.com/anthropics/claude-code/issues/83744)** Claude Desktop 1.24012.11.0（Windows）GPU 进程崩溃导致整个应用退出 | 💬4 | ⭐⭐⭐ |
| 9 | **[#74715](https://github.com/anthropics/claude-code/issues/74715)** Claude-in-Chrome "Always allow" 始终以 `duration:"once"` 持久化，已批准列表始终为空 | 💬4 | ⭐⭐ |
| 10 | **[#84369](https://github.com/anthropics/claude-code/issues/84369)** 模型伪造用户消息与第三方客户端回复，并作为输入执行（#40629 升级） | 🆕 | ⭐⭐⭐ |

**为什么这些重要：**
- **#66504** 是点赞数最高的 enhancement，反映开发者对默认行为「侵入式写入 commit 信息」的普遍不满。
- **#76248 / #72228 / #84362** 共同指向 **MCP 协议栈信任边界与解析器的鲁棒性问题**——参数静默丢失、tag 语法吞字段是潜在的**正确性灾难**，影响所有依赖 MCP 的工作流。
- **#83403 / #83744 / #84363** 三个 Desktop 稳定性问题集中在 MCP 重连、GPU 进程、5 小时使用上限，反映 **Desktop 应用尚未达到生产级稳定**。
- **#77136 / #84361** 共同说明 **新模型在内容策略与安全过滤上存在误判**，已对合法安全研究场景产生负面影响。

---

## 🛠️ 重要 PR 进展

> 过去 24 小时更新的 PR 共 **5 条**（数量较少，全部列出）：

| PR | 标题 | 价值 |
|---|------|------|
| **[#84365](https://github.com/anthropics/claude-code/pull/84365)** | `fix(scripts)`: 允许任意用户通过点踩阻止自动关闭 | 修复 dedupe bot 承诺与实际行为不一致问题（修复 #79146） |
| **[#84364](https://github.com/anthropics/claude-code/pull/84364)** | `fix(hookify)`: pretooluse hook 异常时 fail-closed | **安全加固**：钩子异常不再放行未授权工具调用，避免 ImportError 等导致绕过 |
| **[#84138](https://github.com/anthropics/claude-code/pull/84138)** | Cowork 自签名证书错误绕过（关闭 #24470） | 解决 macOS 用户在 Bun runtime 下因未加载系统证书而误报自签名的问题 |
| **[#41661](https://github.com/anthropics/claude-code/pull/41661)** | 新增 14 个 Claude Code 插件（安全、性能、架构、Fullstack 自动化） | **生态扩张**：覆盖安全扫描、性能分析、架构治理等场景，marketplace 总数扩至 27 |
| **[#16929](https://github.com/anthropics/claude-code/pull/16929)** | `fix(code-review)`: 遵守 `--comment` 标志控制 GitHub 推送 | 修复 `/code-review` 默认行为与 README 不一致的回归 |

**亮点**：
- **#84364** 是本批最有价值的 PR——一个被忽视的 **fail-open 安全漏洞**，一旦合并将显著提升 hook 系统的纵深防御能力。
- **#84138** 针对 Bun runtime 的证书加载机制做了 workaround，值得关注后续是否升级为根因修复。

---

## 📈 功能需求趋势

从今日更新的 50 条 Issue 中提炼出**最受关注的功能方向**（按热度排序）：

1. **🖥️ Desktop 应用稳定性与可观测性**（占比最高）
   - GPU 进程崩溃、5 小时使用上限后无法启动、MCP stdio 断连不重连、`CLAUDE_CODE_LOCAL_BINARY` 环境变量被读取后丢弃
   - 反映 Desktop 已从"能用"进入"必须稳定可用"阶段

2. **🔌 MCP 生态成熟度**
   - 工具调用参数静默丢失（#72228）
   - 标签语法解析器吞字段（#84362）
   - stdio MCP 服务断连无自动重连（#84363）
   - GitHub 插件 Authorization 头模板替换错误（#84367）
   - 多个 issue 共同指向 **MCP 客户端/解析器的鲁棒性欠账**

3. **🧠 模型行为治理**
   - Opus 5 新增的 `heron_brook` 提示段覆盖用户委托策略（#84053）
   - Opus 4.8 toxic / Opus 5.0 失控（#77136）
   - Fable 5 静默回退 + `/feedback` 被 `CLAUDE_CODE_DISABLE_NONESSENTIAL_TRAFFIC` 阻断（#76660）
   - 安全过滤对合法安全研究场景的误判（#84340 / #84361）

4. **📂 会话与工作区管理**
   - 会话可移植性（#81946）
   - 会话侧边栏置顶与自定义排序（#84368）
   - 切换工作目录入口在非 git 目录不可达（#84370）
   - 左方向键 detach 手势无法禁用（#84348）

5. **🕒 上下文与时区感知**
   - 系统提示缺少本地时间与时区，模型基于 UTC 误判"今天晚上"（#84145）

6. **🌐 Claude-in-Chrome 跨设备能力**
   - 跨机驱动时缺乏可靠的设备标识（#77605）
   - "Always allow" 持久化失效（#74715）

---

## 👨‍💻 开发者关注点

通过今日 Issue 高频词与场景归纳，开发者社区的主要**痛点与诉求**如下：

### 🚨 痛点

- **数据丢失的隐形风险**：MCP 工具调用、tag 语法解析器都存在"调用成功但参数被吞"的静默失败模式，且没有错误提示。开发者最担心的不是 bug，而是**看起来正常工作但实际丢字段**的故障。
- **Desktop 应用仍处"早期"**：Windows 上的 GPU 崩溃、Linux 上的环境变量 dead code、`CLAUDE_CODE_LOCAL_BINARY` 不生效——开发者将 Desktop 当作"完整产品"对待，但当前表现更接近 beta。
- **模型行为不可预测**：Opus 4.8 toxic、Opus 5 推理降级、Fable 5 静默回退、安全过滤误判——开发者希望**模型行为有显式版本边界与变更说明**，而非灰度静默变更。
- **Cowork / 云会话的信任边界混乱**：git proxy 引入"授权仓库集"概念后，连合法 PAT 透传都失败，影响所有企业用户的提交流程（#76248）。

### 🛎️ 高频需求

1. **更严格的安全失败语义**：hook 异常需 fail-closed（#84364 已在路上）；MCP 解析器需 fail-loud。
2. **会话与项目目录解耦**：`~/.claude/projects/<sanitized-path>` 的绝对路径键控导致"项目可移植性"为零，开发者希望在项目内显式存储 transcript（#81946）。
3. **可定制的键位与手势**：左方向键 detach、Option+Backspace 在 Warp 失效等小问题累积，反映 **TUI 抽象层与终端实现的兼容性测试不足**。
4. **本地化上下文**：本地时间、时区、locale 信息应进入 system prompt，否则所有时间相关推理都会偏离用户实际场景。
5. **MCP 协议的官方测试与合约规范**：客户端解析器、stdio 重连、参数边界都需要一个明确的兼容性矩阵。

---

> 📊 **日报小结**：今日社区情绪偏负面，Desktop 稳定性、MCP 鲁棒性、新模型行为治理三条主线问题并行。官方通过 v2.1.223 的 Marketplace 通配符、hookify fail-closed、Cowork 证书绕过等修复展示了对企业场景的快速响应，但 Desktop 客户端与 MCP 客户端的**结构性质量问题**仍需系统性投入。

*数据来源：[anthropics/claude-code](https://github.com/anthropics/claude-code)，统计窗口：2026-08-05 → 2026-08-06*

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

<think>
The user wants me to generate a Chinese daily report about OpenAI Codex community dynamics for 2026-08-06. Let me analyze the data carefully.

**Releases (Past 24 hours):**
- rust-v0.147.0-alpha.13
- rust-v0.146.1 (Bug fix - safer automatic-review defaults for cyber-capable models, permission changes in terminal interface)
- rust-v0.147.0-alpha.6.5
- rust-v0.147.0-alpha.12
- rust-v0.147.0-alpha.11
- rust-v0.147.0-alpha.10

The most notable release is v0.146.1 with security-related bug fix for cyber-capable models.

**Top Issues by comments:**
1. #25203 - GitHub OAuth callback fails on Windows (38 comments, 21 likes, CLOSED)
2. #2880 - Copy/Export Message as Markdown (27 comments, 78 likes, CLOSED)
3. #2020 - Support for light-background terminals (24 comments, 60 likes, CLOSED)
4. #2909 - Support for multi-root workspaces (23 comments, 143 likes, CLOSED)
5. #25319 - Scope Codex VS Code chats to current workspace (22 comments, 54 likes, OPEN)
6. #27694 - Codex Desktop crashes on macOS Dock (17 comments, CLOSED)
7. #34833 - MultiAgentV2 cross-provider subagent cannot consume encrypted task (8 comments, OPEN)
8. #26112 - Allow caller-defined display names for subagents (7 comments, OPEN)
9. #33551 - Multi-Agent V2 sends OpenAI-specific items to external providers (7 comments, OPEN)
10. #25934 - TUI markdown hyperlinks not clickable (6 comments, OPEN)
11. #29242 - Chrome/Computer Use fail on Windows 10 (6 comments, CLOSED)
12. #36586 - Subagent task invisible to custom non-OpenAI providers (5 comments, OPEN)
13. #26452 - codex exec hooks dispatch bug (5 comments, CLOSED)

**Top PRs:**
- #37204 - Add durable user-message queue dispatch (OPEN)
- #37199 - Track thread archive analytics (CLOSED)
- #37198 - Prefer persisted cwd when reading local threads (CLOSED)
- #37191 - Preserve legacy semantics during rollout migration (CLOSED)
- #37190 - Interrupt cyber model turns after one Guardian denial (CLOSED)
- #37189 - Track multi-agent usage hints in world state (CLOSED)
- #37188 - Reserve the `tool_search` namespace (CLOSED)
- #37178 - Preserve image transparency metadata (CLOSED)
- #37177 - Move explicit skill selection into skills crate (CLOSED)
- #37175 - Add legacy rollout migration to paginated history (CLOSED)
- #37174 - Centralize skill invocation helpers (CLOSED)
- #37169 - Move plugin skill snapshot integration tests (CLOSED)
- #37168 - Bound remote MCP handshake HTTP requests (CLOSED)
- #37167 - Expose session sources to MCP contributors (CLOSED)
- #37166 - Keep textarea cursors inside viewport (CLOSED)
- #37162 - Load host skill roots through skills extension (CLOSED)
- #37157 - Harden named session lookup in TUI (CLOSED)
- #37156 - Test remote environments reported ready (CLOSED)
- #37154 - Use Azure Key Vault for macOS notarization (CLOSED)

**Trend Analysis:**

Looking at the issues, I can identify several themes:
1. **Windows OS compatibility issues** - Many bugs related to Windows (OAuth, Computer Use, Chrome, sandbox policy, sidebar transparency, Korean characters in path)
2. **Multi-agent/Subagent issues** - Several issues about subagent task delivery failing with custom providers
3. **TUI/UX improvements** - Markdown export, light backgrounds, clickable hyperlinks
4. **IDE integration** - Multi-root workspaces, scoped chat history
5. **Sandbox/Computer Use bugs** - Missing sandboxPolicy metadata
6. **CLI/Hooks** - codex exec hooks not dispatching correctly

Let me now structure the report. I need to write it in Chinese, professional and concise, suitable for technical developers.

I should:
- Use markdown formatting
- Be concise but informative
- Include links
- Identify trends

Let me draft the report:

## 今日速览
The most important things today:
- v0.146.1 stable release with security fix for cyber-capable models
- Many subagent/multi-agent issues with custom providers (DeepSeek, Ollama)
- Windows compatibility issues continue to be a major theme
- Active development on rollout migration, skills refactor, and security hardening

## 版本发布
- v0.146.1 - Safer auto-review for cyber models
- Multiple alpha releases for v0.147.0

## 社区热点 Issues
Pick 10 most important:
1. #25203 - Windows OAuth (CLOSED, 38 comments) - Important Windows issue
2. #2880 - Markdown export (CLOSED, 27 comments, 78 likes) - Popular enhancement
3. #2020 - Light background terminals (CLOSED, 24 comments, 60 likes) - Popular
4. #2909 - Multi-root workspaces (CLOSED, 23 comments, 143 likes) - Very popular
5. #25319 - VS Code chat scope (OPEN, 22 comments, 54 likes) - Active enhancement
6. #27694 - macOS Dock crash (CLOSED, 17 comments) - Critical bug
7. #34833 - MultiAgentV2 subagent encrypted (OPEN, 8 comments) - Cross-provider issue
8. #33551 - Multi-Agent V2 OpenAI-specific items (OPEN, 7 comments)
9. #26112 - Subagent display names (OPEN, 7 comments)
10. #36586 - Subagent task invisible to DeepSeek (OPEN, 5 comments)

Or include:
- #25934 - TUI hyperlinks not clickable
- #29242 - Chrome/Computer Use fail on Windows 10

## 重要 PR 进展
1. #37204 - Durable user-message queue dispatch (OPEN) - Major feature
2. #37190 - Interrupt cyber model turns after Guardian denial (CLOSED) - Security
3. #37191 - Preserve legacy semantics during rollout migration
4. #37189 - Track multi-agent usage hints in world state
5. #37188 - Reserve tool_search namespace
6. #37177 - Move explicit skill selection into skills crate
7. #37174 - Centralize skill invocation helpers
8. #37168 - Bound remote MCP handshake HTTP requests
9. #37167 - Expose session sources to MCP contributors
10. #37154 - Use Azure Key Vault for macOS notarization

## 功能需求趋势
1. IDE 集成增强 (多根工作区、聊天作用域)
2. TUI 体验优化 (浅色背景、Markdown 导出、可点击链接)
3. Windows 平台兼容性
4. 多智能体系统 (subagent) 跨 provider 兼容性
5. 沙箱/Computer Use 稳定性
6. 自定义模型支持

## 开发者关注点
- Windows 兼容性问题频发
- 自定义 provider (非 OpenAI) 的 subagent 任务传递问题
- TUI 体验细节
- 多智能体系统架构完善

Let me write this out in proper Chinese now. I'll use the standard YYYY-MM-DD format and make it look like a real Chinese tech newsletter.
</think>
# OpenAI Codex 社区动态日报

**日期：2026-08-06** · 数据来源：[github.com/openai/codex](https://github.com/openai/codex)

---

## 📌 今日速览

今日 Codex 主线发布 **v0.146.1** 稳定版，针对具有网络安全能力的模型回退了更安全的自动审核默认值，并在终端界面中增加了权限变更说明；与此同时 **v0.147.0** 仍在快速迭代（24 小时内连发 5 个 alpha 版本）。社区焦点集中在 **Windows 平台兼容性问题**、**Multi-Agent V2 跨 provider 任务传递失败**、以及 **TUI 体验细节打磨** 三大方向。

---

## 🚀 版本发布

### [rust-v0.146.1](https://github.com/openai/codex/releases/tag/rust-v0.146.1)（稳定版）
- 为 cyber-capable 模型设置更安全的自动审核默认值
- 终端界面中显式说明权限变更
- 提交记录：#37057 [0.146] Backport safer cyber-model auto-rev

### rust-v0.147.0-alpha 系列（24 小时内 5 个 alpha）
- **alpha.13 / alpha.12 / alpha.11 / alpha.10** 为常规迭代
- **[alpha.6.5](https://github.com/openai/codex/releases/tag/rust-v0.147.0-alpha.6.5)** 补充发布
- 0.147.0 仍在快速开发中，尚未进入稳定通道

---

## 🔥 社区热点 Issues

| # | 标题 | 状态 | 评论/点赞 | 为什么值得关注 |
|---|------|------|----------|--------------|
| [#2909](https://github.com/openai/codex/issues/2909) | VS Code 扩展支持多根工作区 | 🟢 CLOSED | 23 / 👍143 | 高赞 enhancement，长期高需求，今日关闭值得跟进是否落地 |
| [#2880](https://github.com/openai/codex/issues/2880) | TUI 消息复制/导出为 Markdown | 🟢 CLOSED | 27 / 👍78 | 长期高赞需求，关闭意味着功能可能已合并 |
| [#2020](https://github.com/openai/codex/issues/2020) | 支持浅色背景终端 | 🟢 CLOSED | 24 / 👍60 | 影响所有使用亮色主题的开发者，今日关闭 |
| [#25319](https://github.com/openai/codex/issues/25319) | VS Code 聊天按 workspace 隔离 | 🟡 OPEN | 22 / 👍54 | **当前最活跃**的多根工作区相关 enhancement |
| [#25203](https://github.com/openai/codex/issues/25203) | Windows GitHub OAuth 回调失败 | 🟢 CLOSED | 38 / 👍21 | 评论数最高，反映 Windows 用户 OAuth 流程长期卡点 |
| [#27694](https://github.com/openai/codex/issues/27694) | macOS Dock 递归崩溃 | 🟢 CLOSED | 17 / 👍8 | 严重崩溃 Bug，影响 Codex Desktop on macOS |
| [#34833](https://github.com/openai/codex/issues/34833) | MultiAgentV2 跨 provider 子代理无法消费加密任务 | 🟡 OPEN | 8 / 👍3 | **核心架构问题**：外部 provider 完全无法参与多代理 |
| [#33551](https://github.com/openai/codex/issues/33551) | Multi-Agent V2 向外部 Responses provider 发送 OpenAI 专有 item | 🟡 OPEN | 7 / 👍4 | Ollama 等外部 provider 的兼容性问题 |
| [#36586](https://github.com/openai/codex/issues/36586) | DeepSeek provider 下 subagent 任务载荷丢失 | 🟡 OPEN | 5 / 👍3 | 与上述两个为同类问题，社区多角度反馈 |
| [#25934](https://github.com/openai/codex/issues/25934) | TUI Markdown 超链接不可点击（OSC 8） | 🟡 OPEN | 6 / 👍1 | 0.136.0 引入的回归，影响 OSC 8 终端体验 |

---

## 🛠 重要 PR 进展

| # | 标题 | 状态 | 要点 |
|---|------|------|------|
| [#37204](https://github.com/openai/codex/pull/37204) | 持久化用户消息队列调度 | 🟡 OPEN | **重大功能**：引入 storage-neutral 队列扩展，支持列队/重排/显式启动，FIFO 在 turn 完成后调度 |
| [#37190](https://github.com/openai/codex/pull/37190) | Cyber 模型首次 Guardian 拒绝即中断 | 🟢 CLOSED | 安全加固：针对 catalog 中 specialty=cyber 的模型引入熔断策略 |
| [#37199](https://github.com/openai/codex/pull/37199) | 追踪线程归档分析事件 | 🟢 CLOSED | 发出 `codex_thread_archive_event`，归档行为可观测化 |
| [#37191](https://github.com/openai/codex/pull/37191) | Rollout 迁移保留旧语义 | 🟢 CLOSED | 防止历史 rollback/compaction/subagent 副本迁移后失真 |
| [#37189](https://github.com/openai/codex/pull/37189) | 在 world state 中追踪 multi-agent 使用提示 | 🟢 CLOSED | 解决 resume 时 usage hint 丢失问题 |
| [#37188](https://github.com/openai/codex/pull/37188) | 保留 `tool_search` 命名空间 | 🟢 CLOSED | 防止命名冲突，strict collision 处理 |
| [#37177](https://github.com/openai/codex/pull/37177) | 将显式技能选择移入 skills crate | 🟢 CLOSED | skills 模块持续重构：解耦 `ExplicitSkillLookup` |
| [#37174](https://github.com/openai/codex/pull/37174) | 集中化技能调用辅助函数 | 🟢 CLOSED | 工具提及解析、技能名计数、隐式调用检测统一进 `codex-skills` |
| [#37168](https://github.com/openai/codex/pull/37168) | 限制远程 MCP 握手 HTTP 请求 | 🟢 CLOSED | 修复 streamable HTTP MCP 握手超时后 executor 仍被阻塞的 bug |
| [#37154](https://github.com/openai/codex/pull/37154) | 使用 Azure Key Vault 进行 macOS 公证 | 🟢 CLOSED | **供应链安全改进**：App Store Connect 私钥不再外泄到 release runner |

---

## 📈 功能需求趋势

1. **IDE 集成深化** — 多根工作区支持（#2909 已闭，#25319 仍开放）、跨 surface 会话同步（#11907）
2. **TUI 体验打磨** — 浅色背景（#2020）、Markdown 导出（#2880）、OSC 8 可点击链接（#25934 回归待修）
3. **多代理（Multi-Agent V2）跨 provider 兼容** — 三个相关 Issue（#34833/#33551/#36586）反映外部 provider 几乎被完全排除在 v2 架构之外
4. **Windows 平台一致性** — OAuth、Computer Use、Chrome、sidebar 透明化、韩文用户路径崩溃等持续涌现
5. **沙箱/Computer Use 稳定性** — `sandboxPolicy` metadata 缺失问题在 6/20 集中爆发后已统一关闭
6. **自定义模型与新模型支持** — GPT-5.6 的 `prompt_cache_breakpoint` 尚未实现（#35300）

---

## 💬 开发者关注点

- **🔴 Windows 仍是痛点** — 24 小时内更新的 Windows 相关 Issue 占比极高，涵盖认证、Computer Use、Electron 应用、桌面 UI 等多个子模块
- **🔴 Multi-Agent V2 与自定义 provider 存在结构性冲突** — `agent_message` item 类型与 `encrypted_content` 加密对非 OpenAI provider 几乎不可用，社区用 DeepSeek/Ollama 复现一致
- **🟡 Skills 子系统持续重构** — 多个 PR 集中在 `codex-skills` crate 的边界划分与职责解耦
- **🟢 安全姿态明显收紧** — v0.146.1 + #37190 + #37154 共同显示团队对 cyber 模型自动审核、Guardian 拒绝处理、macOS 签名私钥保护三方面的优先级提升
- **🟢 线程/Rollout 模型逐步成熟** — 多 PR 围绕持久化 cwd、迁移兼容、归档事件，暗示 thread 数据结构进入稳定打磨期

---

*本日报基于 GitHub 公开数据自动生成，仅供技术参考。*

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

<think>Let me analyze the GitHub data provided and generate a comprehensive daily report for Gemini CLI community dynamics on 2026-08-06.

Key observations from the data:

1. **Releases**:
   - v0.55.0-preview.1 (preview release)
   - v0.55.0-nightly.20260806.g761f604c1 (nightly build)
   - v0.54.0 (stable release)

2. **Hot Issues** (by comment count):
   - #22323: Subagent recovery after MAX_TURNS (12 comments, P1 bug)
   - #21409: Generalist agent hangs (8 comments, P1 bug, 8 👍)
   - #19873: Zero-Dependency OS Sandboxing (8 comments, P2 enhancement)
   - #24353: Robust component level evaluations (7 comments, P1)
   - #22745: AST-aware file reads (7 comments, P2)
   - #21968: Gemini doesn't use skills/sub-agents (6 comments)
   - #26522: Auto Memory retry bug (5 comments)
   - #26525: Auto Memory redaction (4 comments)
   - #25166: Shell command hangs (4 comments, P1)
   - #22232: Browser agent resilience (4 comments)

3. **Important PRs**:
   - #28676: Forward termination signals (open, help wanted)
   - #28481: MCP OAuth token refresh (closed/merged likely)
   - #28505: Fix doc links (closed)
   - #28485: Add gemini-3.5-flash model selector (closed/merged)
   - #28488: Auto-compress chat history on overflow (closed)
   - #28494: VSCode companion fix (closed)
   - #28586: Preserve thoughtSignature fix (open)
   - #28581: Skip diff hunk markers (open)
   - #28587: Add embedded submodule (open)
   - #28580: VSCode Disposables fix (open)
   - Release-related PRs (#28705, #28707, #28708, #28706)
   - #28607: Preserve functionCall thoughtSignature (closed)
   - #28695: Don't abort sendStream on malformed args (closed)
   - #28689: Parse nested gaxios errors (closed)

4. **Trends from issues**:
   - Auto Memory system improvements (multiple issues #26522, #26525, #26523, #26516)
   - Subagent reliability (#22323, #21409, #21968, #20195)
   - Browser agent issues (#22232, #22267, #21983)
   - AST-aware tooling (#22745, #22746)
   - Shell command handling (#25166)
   - Symlink/agent file recognition (#20079)
   - Memory and security (#26522, #26525)
   - Tool limit issues (#24246)
   - Sandbox/OS (#19873)
   - Model selection (#28485 - gemini-3.5-flash)

Let me write a clean, professional Chinese report.</think>

# Gemini CLI 社区动态日报
**日期：2026-08-06**

---

## 📌 今日速览

Gemini CLI 今日同时发布了 **v0.54.0 稳定版**、**v0.55.0-preview.1 预览版** 和夜间构建版本 `v0.55.0-nightly.20260806`，发布节奏密集，社区聚焦于 **Subagent 可靠性、Auto Memory 系统安全、以及新模型（Gemini 3.5/3.6 Flash）兼容性** 三大方向。多个 P1 级 Bug（Subagent 假性成功、Generalist Agent 挂起、Shell 卡死）持续被关注，VSCode 扩展的 Disposables 泄漏问题也已合入修复。

---

## 🚀 版本发布

| 版本 | 类型 | 关键变更 |
|------|------|----------|
| [v0.54.0](https://github.com/google-gemini/gemini-cli/releases/tag/v0.54.0) | Stable | 整合 v0.52/v0.53 累积更新，含 MCP、Agent 与核心 CLI 改进 |
| [v0.55.0-preview.1](https://github.com/google-gemini/gemini-cli/releases/tag/v0.55.0-preview.1) | Preview | 基于 `0.55.0-nightly.20260728.gd29268d36`，面向下一轮特性预览 |
| [v0.55.0-nightly.20260806.g761f604c1](https://github.com/google-gemini/gemini-cli/releases/tag/v0.55.0-nightly.20260806.g761f604c1) | Nightly | 新增 macOS 嵌入式 seatbelt profile fallback；`pr-generator-core` 引入环境配置解析器、命令执行器与 GitHub 工具集（[@amelidev](https://github.com/google-gemini/gemini-cli/pull/28551), [@joneba-google](https://github.com/google-gemini/gemini-cli/pull)） |

---

## 🔥 社区热点 Issues

| # | Issue | 优先级 | 评论 | 为什么值得关注 |
|---|-------|--------|------|----------------|
| [#22323](https://github.com/google-gemini/gemini-cli/issues/22323) | Subagent 在 MAX_TURNS 后错误报告 `GOAL success` | P1 | 12 | **P1 Bug**：Agent 自我感知能力缺陷，会让用户误判任务已完成；高评论量显示这是被广泛复现的可靠性问题 |
| [#21409](https://github.com/google-gemini/gemini-cli/issues/21409) | Generalist agent 永久挂起 | P1 | 8（👍8） | 8 个 👍 是今日最高，**最高赞同比**——只要触发 defer 到 generalist agent 就会挂死，包括简单文件夹创建 |
| [#19873](https://github.com/google-gemini/gemini-cli/issues/19873) | 零依赖 OS 沙箱 + 后执行意图路由 | P2 | 8 | 战略性 Enhancement：利用 Gemini 3 模型的原生 bash 亲和力，配合沙箱做到既安全又发挥模型能力 |
| [#24353](https://github.com/google-gemini/gemini-cli/issues/24353) | 组件级评估体系（Robust component level evalutions）| P1 | 7 | **EPIC 级**议题——目前已生成 76 项 behavioral eval，覆盖 6 个 Gemini 模型，是后续质量基线的核心 |
| [#22745](https://github.com/google-gemini/gemini-cli/issues/22745) | AST 感知的文件读取/搜索/映射 | P2 | 7 | 若落地，可大幅减少误读取带来的轮次浪费与 token 噪声；与 #22746 联动探索具体工具选型 |
| [#21968](https://github.com/google-gemini/gemini-cli/issues/21968) | Gemini 不主动使用 skills 与 sub-agents | P2 | 6 | 用户体验痛点：自定义 skill/sub-agent 几乎不会被自动调用，除非明确指令 |
| [#25166](https://github.com/google-gemini/gemini-cli/issues/25166) | Shell 命令完成后卡在 "Waiting input" | P1 | 4（👍3） | 极简命令就会触发——日常使用频繁受影响，破坏"完成任务后继续推进"的闭环 |
| [#21983](https://github.com/google-gemini/gemini-cli/issues/21983) | Wayland 下 browser subagent 失败 | P1 | 4 | Linux Wayland 用户被排除在外，影响开源桌面用户的覆盖 |
| [#26522](https://github.com/google-gemini/gemini-cli/issues/26522) | Auto Memory 无限重试低信号会话 | P2 | 5 | 与 #26523、#26525、#26516 同属 **Auto Memory 系列**，暴露 inbox 状态管理缺陷 |
| [#22232](https://github.com/google-gemini/gemini-cli/issues/22232) | Browser agent 自动接管与锁恢复 | P3 | 4 | 失败快速策略导致浏览器被锁死后无法自愈，影响持久会话模式可用性 |

---

## 🛠️ 重要 PR 进展

| # | PR | 状态 | 要点 |
|---|----|------|------|
| [#28676](https://github.com/google-gemini/gemini-cli/pull/28676) | forward termination signals to relaunched child process | **OPEN**（help wanted）| `kill -TERM <bootstrap-pid>` 现在能正常终止子进程，解决被监管进程孤儿化问题 |
| [#28481](https://github.com/google-gemini/gemini-cli/pull/28481) | refresh MCP OAuth tokens with the stored client ID | CLOSED | 修复 OAuth 发现 + 动态客户端注册场景下 token 刷新失败并删除凭证的问题 |
| [#28586](https://github.com/google-gemini/gemini-cli/pull/28586) | preserve thoughtSignature in functionCall parts | OPEN | **修复 v0.53.0 回归**：并行工具调用时 400 错误（`functionCall is missing thought_signature`） |
| [#28607](https://github.com/google-gemini/gemini-cli/pull/28607) | preserve functionCall thoughtSignature when stripping thought parts | CLOSED | 同类回归的另一修复分支 |
| [#28485](https://github.com/google-gemini/gemini-cli/pull/28485) | add gemini-3.5-flash to model selector | CLOSED | 让 v0.51.0 用户在模型选择器中能看到 `gemini-3.5-flash` / `gemini-3.6-flash`，等待后端 `GEMINI_3` 标志生效 |
| [#28488](https://github.com/google-gemini/gemini-cli/pull/28488) | auto-compress chat history on context window overflow | CLOSED | 新增 `model.autoCompressOnOverflow` 设置，超出上下文时自动压缩而非硬中止 |
| [#28695](https://github.com/google-gemini/gemini-cli/pull/28695) | don't abort sendStream on malformed tool arguments | CLOSED | SDK 防御性 JSON.parse，防止模型输出导致整个 stream 终止 |
| [#28689](https://github.com/google-gemini/gemini-cli/pull/28689) | unwrap and parse nested gaxios streaming errors | CLOSED | 让 GCA 配额/限流错误能被正确分类与格式化 |
| [#28688](https://github.com/google-gemini/gemini-cli/pull/28688) | dynamically resolve Cloud Workstations OAuth redirect URI | OPEN | 解决 Cloud Workstations VM 中 OAuth 因硬编码 `localhost` 而失败的问题 |
| [#28581](https://github.com/google-gemini/gemini-cli/pull/28581) | skip diff hunk markers during @ processing | OPEN | 防止 unified/combined diff 的 `@@` 被当成 `@file`，避免大 diff 提示时 glob 扫描导致堆增长 |

> 还有多条机器人提交的发布自动化 PR（[#28705](https://github.com/google-gemini/gemini-cli/pull/28705)、[#28707](https://github.com/google-gemini/gemini-cli/pull/28707)、[#28708](https://github.com/google-gemini/gemini-cli/pull/28708)、[#28706](https://github.com/google-gemini/gemini-cli/pull/28706)）已完成 v0.54.0 与 v0.55.0-preview.1 的 changelog 与版本号 bump。

---

## 📈 功能需求趋势

通过分析 50 条 Issues 与 39 条 PR 的标签与主题，社区关注焦点可归纳为以下几条主线：

1. **🧠 Subagent 与 Agent 可靠性（最热门）**——Generalist agent 挂起、MAX_TURNS 误判成功、subagent context 缺失、`/bug` 不含子会话信息等，提示 Subagent 体系已从"功能实现"阶段进入"稳定性打磨"阶段。
2. **💾 Auto Memory 体系化改造**——#26522 / #26523 / #26525 / #26516 构成一个小型 EPIC 集群，焦点在 inbox 状态机、确定性 redact、避免低信号会话死循环。
3. **🌐 新模型与模型选择器兼容性**——Gemini 3.5 / 3.6 Flash 在 selector 中可见性问题（#28485），以及工具超过 128 / 400 时报 400（[#24246](https://github.com/google-gemini/gemini-cli/issues/24246)），反映模型与工具数量在同步扩张。
4. **🛡️ 沙箱与安全**——#19873（Zero-Dependency OS 沙箱 + 后执行意图路由）、#22672（破坏性行为抑制）、Cloud Workstations OAuth 重定向（#28688）形成"执行 → 网络 → 行为"的安全纵深。
5. **🌳 AST-aware 代码库理解**——#22745 与 #22746 是评估型 EPIC，意在用单次工具调用替代多轮试错读取，节省 token。
6. **🪟 终端 / IDE 体验**——Wayland 浏览器 agent、终端 resize 闪烁、退出外部编辑器后 corruption（#24935）、VSCode 扩展 Disposables 泄漏（#28494、#28580）。
7. **🤖 PR Generator Core**——nightly 版本中新增的 `pr-generator-core` 模块（环境配置解析、命令执行、GitHub 工具集）暗示官方正在搭建自动化 PR 工作流基础设施。

---

## 💬 开发者关注点

汇总高频出现的痛点与诉求：

- **"Agent 看起来完成了，但其实没完成"**——#22323 / #21409 / #25166 三连击都指向同一类体验：**Termination Reason 报告不可信**。开发者无法判断是否可以信任 `success / GOAL` 信号。
- **"自定义能力几乎不被自动调用"**——#21968：用户写了 gradle、git skills 与 sub-agent，但模型几乎从不主动使用，必须显式指令，挫败感强。
- **"Linux/Wayland 用户被忽略"**——#21983 反映 Browser agent 在 Wayland 下完全不可用，开源桌面覆盖度不足。
- **"模型选择器看不到新模型"**——#28485：v0.51.0 用户无法选择 Gemini 3.5/3.6 Flash，影响新模型采用速度。
- **"破坏性操作未拦截"**——#22672：`git reset --force`、数据库 DDL 等高风险命令应主动引导向更安全替代方案。
- **"工具数量超过阈值就 400"**——#24246：希望 Agent 能智能裁剪当前 scope 内的可用工具，而非全部塞进上下文。
- **"内存系统安全边界"**——#26525：Auto Memory 把本地 transcript 发往模型提取，依赖 prompt 阶段 redact 是薄弱防线；开发者期待确定性 redact + 减少日志记录。
- **"Symlink 不被识别"**——#20079：`~/.gemini/agents/` 下的符号链接不被当作 subagent，限制了 dotfiles 仓库式的可移植配置。
- **"v0.53.0 thoughtSignature 回归"**——#28586 / #28607 / #28586：并行工具调用后频繁 400，社区期待快速稳定的 fix branch。
- **"SDK stream 在工具参数非法时会整体崩"**——#28695 / #28660：非交互 SDK 用户希望 sendStream 对模型产出具有防御性，不应被单个 `JSON.parse` 失败拖垮。

---

> 💡 **一句话总结今日**：版本机器跑得勤快，但社区真正的"未完事项"是 Subagent 的可观测性、Auto Memory 的安全性、以及 v0.53.0 引入的 thoughtSignature 回归——这三条线决定 Gemini CLI 在企业场景的可信度。

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

<think>Let me analyze the GitHub data for GitHub Copilot CLI and generate a comprehensive Chinese daily report for 2026-08-06.

Key observations:
1. Recent releases: v1.0.79-5, v1.0.79-4, v1.0.79-3, v1.0.79-2 - pre-release versions with session management improvements and prompt pinning
2. 24 issues updated in past 24 hours, mostly new ones (numbers 4370-4382)
3. No PR activity in past 24 hours

Let me categorize the issues:
- Windows platform issues: #4026, #4381
- MCP related: #4370, #4371, #4374, #4378, #3934
- Model issues: #3135, #4345, #4376, #4377, #4380
- Terminal/UI issues: #1799, #3172
- Authentication: #1037
- Linux compatibility: #4382
- Browser canvas: #4379
- macOS issues: #4375 (closed)
- Web search hallucination: #4093 (closed)
- Session management: #4372, #4373
- Background agents security: #3013 (closed)
- Tool bugs: #4202
- CAIP errors: #2147 (closed)

Hot issues by engagement:
- #1799 (12 comments, 8 thumbs up) - alt-screen issues
- #4202 (5 comments, 1 thumb up) - view tool bug
- #3172 (2 comments, 7 thumbs up) - clipboard message bug
- #4345 (2 comments, 4 thumbs up) - reasoning effort error
- #4374 (4 thumbs up) - /mcp search fails
- #3934 (2 comments, 1 thumb up) - MCP blocked by policy
- #3135 (3 comments, 1 thumb up) - BYOK statusline
- #4026 (2 comments) - Windows crashes
- #2147 (4 comments, closed) - CAIP 400
- #3013 (3 comments, closed) - hooks not firing
- #4093 (closed) - web_search hallucination
- #4370 (2 comments, 1 thumb up) - MCP init fail
- #4375 (closed) - macOS malloc logging
- #4376 - BYOM model discovery
- #4377 - GPT-5.6 Terra delegates
- #4378 - Cloud agent MCP
- #4379 - Browser canvas
- #4380 - Rubber Duck
- #4381 - Windows notification badge
- #4382 - Linux execve
- #4371 - MCP OAuth
- #4372 - Steering message order
- #4373 - Queued messages stuck

Since there are no PRs in the past 24 hours, I should note that. But the instructions ask for "10 important PRs" - I'll need to handle this by either saying "无" or noting that recent PR activity was limited.

Let me structure the report now.</think>

# GitHub Copilot CLI 社区动态日报
**日期：2026-08-06**

---

## 一、今日速览

GitHub Copilot CLI 在过去 24 小时内发布了 **v1.0.79 系列预发布版本**（从 -2 到 -5），重点优化了多会话管理与提示词（prompt）固定功能；同时社区集中涌现了 **17 个新 Issue**，反映出用户在 MCP 协议集成、Windows 平台稳定性、BYOK/BYOM 模型管理以及终端 UI 等方面的活跃反馈与持续痛点。

---

## 二、版本发布

### v1.0.79-5（最新预发布）

**Added**
- Sessions 标签页与侧边栏支持多并发会话管理

**Improved**
- Prompt pinning 默认关闭，可通过 `pinnedPrompts: true` 开启

**Fixed**
- 沙箱化 wrapper 构建（`make` 等）能正确获取构建清单中声明的 dev tool 缓存

### v1.0.79-4
- 预发布版本，无具体变更说明

### v1.0.79-3
- **Improved**：新增 `/worktree new` 命令，可在新的 worktree 中开启会话

### v1.0.79-2
- **Improved**：将当前 prompt 固定到标签栏预留行，减少一行时间轴占用；终端行数 < 30 时默认关闭 pinned prompt，避免挤压输出

> 📌 整体来看，1.0.79 系列在朝着"多任务工作流 + 终端空间优化"的方向演进。

---

## 三、社区热点 Issues

> 以下按社区关注度（👍 与评论数）和问题严重程度排序。

### 1. [#1799](https://github.com/github/copilot-cli/issues/1799) — 如何关闭 alt-screen 视图？ ⭐8 👍
**区域**：configuration / terminal-rendering
用户反映新增的 alt-screen 模式引发诸多问题，希望切回原始模式。**8 个 👍、12 条评论**，是当前呼声最高的 UI 偏好诉求。

### 2. [#3172](https://github.com/github/copilot-cli/issues/3172) — "Somebody else is owning the clipboard" 异常提示 ⭐7 👍
**区域**：input-keyboard / terminal-rendering
在跨应用复制时，状态栏出现干扰提示并破坏终端布局。**7 个 👍**，影响跨 IDE 工作流体验。

### 3. [#4345](https://github.com/github/copilot-cli/issues/4345) — Claude Haiku 4.5 不支持 'medium' 推理强度 ⭐4 👍
**区域**：agents / models
当服务端启用 `copilot_cli_opus_medium_effort_default` 等特性开关后，子代理调用 Claude Haiku 4.5 时频繁报错，影响多模型混部策略。

### 4. [#4374](https://github.com/github/copilot-cli/issues/4374) — `/mcp search` 在 Azure DevOps 仓库下 400 报错 ⭐4 👍
**区域**：triage
信任目录的 git remote 指向 `dev.azure.com` 时，MCP registry 策略拉取持续失败，影响非 GitHub 仓库用户的 MCP 使用。

### 5. [#4202](https://github.com/github/copilot-cli/issues/4202) — 内置 view 工具自 1.0.72 起误报 Path 不存在 ⭐1 👍
**区域**：non-interactive / tools
回归型 Bug，1.0.71 工作正常；用户已提供对照实验，影响非交互式脚本链路。

### 6. [#3934](https://github.com/github/copilot-cli/issues/3934) — MCP server 'blocked by policy' 误报 ⭐1 👍
**区域**：enterprise / mcp
企业自定义 MCP 注册表与本地 MCP 配置正常，但在 CLI 中却报"被策略阻止"，与 VSCode/IntelliJ 行为不一致，**企业用户关注度高**。

### 7. [#3135](https://github.com/github/copilot-cli/issues/3135) — BYOK statusline 与实际推理强度不一致 ⭐1 👍
**区域**：models / configuration
`--effort high` 实际请求正确，但状态栏显示 `gpt-5.5 (medium)`，给 BYOK 用户造成误导。

### 8. [#4370](https://github.com/github/copilot-cli/issues/4370) — v1.0.79-1 MCP 初始化失败（FastMCP 不支持 `server/discover`）⭐1 👍
**区域**：triage
CLI 在 MCP 握手前主动发送 `server/discover`，FastMCP 返回 `-32602` 即被视作致命错误，**生态兼容性**问题。

### 9. [#4026](https://github.com/github/copilot-cli/issues/4026) — Windows 原生运行时反复崩溃
**区域**：sessions / platform-windows
自 2026-05 起在多个版本（v1.0.15/52/53/...）持续崩溃，长期未解决，**Windows 用户稳定性痛点**。

### 10. [#2147](https://github.com/github/copilot-cli/issues/2147) — CAIP 400: input item ID 错误 ✅ 已关闭
**区域**：（已修复）
WebSocket 偶发 400 错误，模型为 `gpt-5.4 (xhigh)`，验证已在最新版本解决。

---

### 其他值得追踪的 Issue

| Issue | 主题 | 状态 |
|---|---|---|
| [#4371](https://github.com/github/copilot-cli/issues/4371) | MCP OAuth 3LO 不支持 URL elicitation（-32042） | OPEN |
| [#4372](https://github.com/github/copilot-cli/issues/4372) | 多条 steering message 顺序错乱 | OPEN |
| [#4373](https://github.com/github/copilot-cli/issues/4373) | 队列消息永久卡住 | OPEN |
| [#4375](https://github.com/github/copilot-cli/issues/4375) | macOS MallocStackLogging 刷屏 stderr | ✅ 已关闭 |
| [#4376](https://github.com/github/copilot-cli/issues/4376) | BYOM 提供方动态模型发现与会话内切换 | OPEN |
| [#4377](https://github.com/github/copilot-cli/issues/4377) | GPT-5.6 Terra 莫名委派给 Opus 子代理 | OPEN |
| [#4378](https://github.com/github/copilot-cli/issues/4378) | GHEC 数据驻留下 cloud agent MCP 全被静默丢弃 | OPEN |
| [#4379](https://github.com/github/copilot-cli/issues/4379) | browser canvas 各自独立存储分区导致 GitHub 登录失效 | OPEN |
| [#4380](https://github.com/github/copilot-cli/issues/4380) | rubber-duck 审查未使用独立模型族 | OPEN |
| [#4381](https://github.com/github/copilot-cli/issues/4381) | Windows 通知角标清空后仍残留 | OPEN |
| [#4382](https://github.com/github/copilot-cli/issues/4382) | Oracle Linux 10 无法直接 execve，需经 ld.so | OPEN |
| [#4093](https://github.com/github/copilot-cli/issues/4093) | web_search 工具出现幻觉式答案 | ✅ 已关闭 |

---

## 四、重要 PR 进展

⚠️ **过去 24 小时内无 PR 更新**（数据集为空）。这意味着当前的版本迭代主要由内部分支推进，社区代码贡献暂时处于静默期。建议关注后续 `v1.0.79` 正式版发布时的合并记录。

---

## 五、功能需求趋势

通过对 24 条 Issue 的归类，可以提炼出以下社区最关注的方向：

### 1. **MCP 协议生态兼容性**（最热，5+ 条相关）
- 与 FastMCP、MCP Gateway、Azure DevOps 注册表的对接问题
- MCP OAuth 3LO 授权流（URL elicitation）缺失
- 静默丢弃策略（cloud agent / policy fetch）需更明确的报错机制

### 2. **多模型与 BYOK/BYOM 能力深化**
- BYOM 提供方（如 Vertex AI OpenAI 兼容端点）的**会话内模型动态切换**
- BYOK statusline 与实际推理强度的一致性
- 特性开关（feature flags）与子代理模型的兼容性矩阵

### 3. **终端 UI 体验打磨**
- alt-screen 模式的可关闭/可降级
- 提示词固定（pinned prompt）的默认策略与小屏适配
- 剪贴板通知、消息队列顺序、崩溃恢复等交互细节

### 4. **跨平台稳定性**
- **Windows** 长期未解决的原生运行时崩溃
- **Oracle Linux 10** 等非主流发行版的二进制加载
- **macOS** 工具调用时的 MallocStackLogging 噪声

### 5. **会话与协作工作流**
- 多并发 session、可视化切换（1.0.79-5 已落地）
- worktree 级别会话隔离（`/worktree new`）
- 队列消息、steering message 的可靠传递

### 6. **AI 安全与可信度**
- 后台子代理绕过 hook 限制（#3013，已修复）
- web_search 工具的幻觉问题（#4093，已修复）
- rubber-duck 是否真正使用对抗性独立模型

---

## 六、开发者关注点

综合社区反馈，开发者当前最集中的痛点与诉求可以归纳为四条：

1. **"MCP 是核心扩展点，但兼容性仍是碎片化"**
   - 多个第三方 MCP server / registry 出现握手失败、策略阻塞、OAuth 缺失等问题，迫切需要更稳健的协议层与明确报错。

2. **"BYOK/BYOM 想用，但 UX 不够透明"**
   - statusline 与实际请求不一致、模型切换必须重启 CLI、与 Vertex AI 等多云提供方的接入路径不顺畅，是高级用户的关键障碍。

3. **"终端 UI 是双刃剑"**
   - alt-screen、pinned prompt 等新特性被部分用户视为干扰而非增强，社区希望**提供更细粒度的配置开关**与**回退路径**。

4. **"Windows 是长期被忽视的平台"**
   - 自 5 月起的反复崩溃（#4026）与通知残留（#4381），叠加多版本仍未根治，反映出原生 Windows 运行时仍是稳定性短板。

> 💡 **建议**：若你正在评估 Copilot CLI 进行生产化集成，建议暂避 v1.0.79 预发布版本并关注 #4026（Windows 崩溃）、#3934（企业 MCP 策略）、#4345（子代理模型组合）的修复进展。

---

*日报数据来源：[github.com/github/copilot-cli](https://github.com/github/copilot-cli)*

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

<think>
The user wants me to generate a daily report for Kimi Code CLI community dynamics for 2026-08-06. Let me analyze the data:

1. **Releases**: None in the past 24 hours
2. **Issues**: 3 issues updated
   - #1283: Memory System feature request (19 comments, popular)
   - #2591: StrReplaceFile corruption bug
   - #2588: MCP tool image capability issue
3. **Pull Requests**: 3 PRs
   - #2592: Fix for #2588 (degrade unsupported media)
   - #2590: Fix for error message in #2588
   - #2589: Documentation update for voice ACP client

Note: The user asks for 10 issues and 10 PRs, but there are only 3 of each. I should mention all of them and note that there are fewer than 10.

Let me structure this report properly in Chinese, professional and concise.

The report date is 2026-08-06.

Key themes I can identify:
- Memory system feature request (long-standing popular issue)
- MCP/capability bug fixes (coordinated issue + 2 PRs)
- File encoding bug
- Voice/ACP integration

Let me write a professional, technical report.
</think>
# Kimi Code CLI 社区动态日报

**报告日期**: 2026-08-06
**数据来源**: [github.com/MoonshotAI/kimi-cli](https://github.com/MoonshotAI/kimi-cli)

---

## 1. 今日速览

今日社区动态呈现"**Bug 修复联动 + 长期需求跟进**"的双线特征。围绕 Issue #2588（MCP 工具返回图像导致任务中断）已有两笔 PR (#2590、#2592) 同步推进修复；长期高热度需求 Issue #1283（跨会话记忆系统）仍在持续讨论。此外，一笔关于 `StrReplaceFile` 损坏非 UTF-8 字节的严重 Bug 报告 (#2591) 引起关注。版本发布方面，今日无新 Release。

---

## 2. 版本发布

⚠️ 过去 24 小时内无新版本发布。

---

## 3. 社区热点 Issues

> 注：过去 24 小时内仅有 3 条 Issue 更新，远少于常规 10 条。以下为全部 3 条及其重要性分析。

### 🔥 #1283 — [Feature Request] Memory System: Persistent context across sessions
- **作者**: @CatKang | **状态**: OPEN
- **链接**: https://github.com/MoonshotAI/kimi-cli/issues/1283
- **热度**: 💬 19 条评论 | 👍 0
- **重要性**: ⭐⭐⭐⭐⭐ **本周最高热度 Issue**
- **核心内容**: 提议实现完整的 Memory System，使 Kimi CLI 能在跨会话场景中持久化上下文、项目模式与用户偏好，涵盖 AI 自动记忆与用户自定义指令（CLAUDE.md 风格）两种模式。
- **社区反应**: 创建于 2 月底，4 个多月持续活跃讨论至今（最近更新就在今天），说明这是社区**最核心的长期诉求之一**，与同类工具（Cursor、Claude Code）的能力差距正成为讨论焦点。

### ⚠️ #2591 — StrReplaceFile corrupts undecodable bytes outside the edited region
- **作者**: @shoemoney | **状态**: OPEN
- **链接**: https://github.com/MoonshotAI/kimi-cli/issues/2591
- **重要性**: ⭐⭐⭐⭐ **严重数据完整性 Bug**
- **核心内容**: `StrReplaceFile` 在解码整个文件时使用 `errors="replace"`，导致文件中任何非 UTF-8 字节（即使远离编辑区域）都被替换为 U+FFFD (`EF BF BD`)。这意味着**一次无害的编辑可能静默破坏文件的全部二进制/非 UTF-8 内容**。
- **风险等级**: 高 — 涉及用户数据不可逆损坏。

### 🐛 #2588 — Model declared without capabilities: image-returning MCP tool aborts mid-task
- **作者**: @tic-top | **状态**: OPEN
- **链接**: https://github.com/MoonshotAI/kimi-cli/issues/2588
- **重要性**: ⭐⭐⭐⭐
- **核心内容**: 当 `config.toml` 中声明模型但未声明 `capabilities` 时，若 MCP 工具返回图像，工具已执行产生副作用后任务才被中止，且错误信息不提示如何修复。这同时是**可用性 + 错误体验**两个层面的问题。
- **进展**: 已引发两笔修复 PR（#2590、#2592），说明维护者响应迅速。

---

## 4. 重要 PR 进展

> 注：过去 24 小时内仅有 3 条 PR 更新，全部 OPEN。

### 🛠️ #2592 — fix(soul): degrade unsupported tool media instead of aborting mid-task
- **作者**: @rainbowgore | **状态**: OPEN
- **链接**: https://github.com/MoonshotAI/kimi-cli/pull/2592
- **解决**: #2588 的主要修复
- **核心改动**: 修改 `_grow_context` 行为，当模型不支持某媒体类型时不再抛出 `LLMNotSupported` 中止整个回合，而是**降级处理**（degrade）该媒体，避免副作用与运行中断。属于"以静默降级换取任务延续"的设计权衡。

### 🛠️ #2590 — fix(soul): name the config fix in the unsupported-capability error
- **作者**: @ayaangazali | **状态**: OPEN
- **链接**: https://github.com/MoonshotAI/kimi-cli/pull/2590
- **解决**: #2588 的错误体验问题（"no hint at the fix"）
- **核心改动**: 错误信息原本只告知缺少的 capability，不告诉用户**具体改什么**。该 PR 让错误信息直接给出 `config.toml` 中需要添加的字段。
- **亮点**: 体现了"**可操作错误信息**"（actionable error messages）的工程文化 — 这种小改动对 UX 提升显著。

### 📚 #2589 — docs: mention qwen-audio-agent as a voice ACP client
- **作者**: @x-lixu | **状态**: OPEN
- **链接**: https://github.com/MoonshotAI/kimi-cli/pull/2589
- **核心内容**: 在 ACP（Agent Client Protocol）章节补充 [qwen-audio-agent](https://github.com/) 作为语音 ACP 客户端的说明 —— 它是一个开源全双工语音运行时，可启动 `kimi acp` 作为 agent，让用户以语音方式与 Kimi CLI 交互。
- **意义**: 扩展 Kimi CLI 的**多模态交互边界**（从文本 → 语音），且作者主动声明利益关系，体现健康的开源治理。

---

## 5. 功能需求趋势

基于今日可见的 Issue 数据（含 1 条长期高热度需求），可归纳出三大方向：

| 方向 | 代表 Issue | 趋势判断 |
|------|-----------|---------|
| **🧠 持久化与记忆** | #1283 | 🔥 长期头部需求，已 4+ 月持续讨论，被视为与竞品（Cursor/Claude Code）最大功能差距 |
| **🛠️ MCP 工具链稳定性** | #2588 | 📈 随 MCP 生态扩张快速浮现，问题集中在 capability 协商、错误信息可操作性 |
| **📁 文件操作健壮性** | #2591 | ⚠️ 涉及非 UTF-8/二进制文件场景，反映工具对**国际化与异构文件**的处理盲区 |

> **观察**: 今天没有出现"新模型支持""性能优化""IDE 集成"类新 Issue，说明这些方向要么已稳定要么开发者当前关注点转向**正确性与鲁棒性**。

---

## 6. 开发者关注点

综合 Issues 与 PR 内容，可提炼出以下高频痛点与诉求：

1. **🔴 数据安全 / 静默损坏** — #2591 揭示的"无害编辑破坏文件"是开发者最担忧的失败模式，信任一旦丢失极难重建。**建议优先修复。**

2. **🟡 错误的可操作性** — #2588 / #2590 共同反映：开发者希望错误信息**直接告诉怎么改**（给出 config key），而不是只说"哪里出错"。这是低成本高回报的工程改进。

3. **🟢 跨会话上下文** — #1283 的高讨论度表明，社区已经把 Kimi CLI 视作"日常开发伙伴"而非一次性 CLI，期待其具备**项目级记忆**能力。

4. **🟢 优雅降级 vs 硬中断** — #2592 的"degrade 而非 abort"是设计哲学的体现：当模型能力不足时，是直接拒绝还是降级返回（如忽略图片）？社区偏好**让任务继续跑下去**。

5. **🔵 多模态/多通道交互** — #2589 展示出开发者正自发探索语音入口，Kimi CLI 作为 Agent 协议后端的**可组合性**正在被外部生态验证。

---

> 📌 **编辑备注**: 今日 Issue/PR 数量较少（各 3 条），但**质量与关联度都很高**——#2588 派生两笔 PR 同步修复、#2591 揭示严重数据风险。建议明日跟进 #2591 的维护者响应速度，并观察 #1283 是否进入路线图。

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

<think>The user wants me to generate a daily report for the OpenCode community based on GitHub data from 2026-08-06. Let me analyze the data and create a structured Chinese report.

Let me organize the information:

**Release:**
- v1.18.14: Simplified xAI login to single device-code flow, preserved structured mid-stream provider errors, retried more transient errors

**Hot Issues (top 10 by comments):**
1. #37012 [OPEN] - keep legacy layout option (35 comments, 38 👍)
2. #14026 [CLOSED] - Some models does not generate code (9 comments)
3. #16226 [CLOSED] - Setting to send prompt only with send button (8 comments)
4. #27749 [CLOSED] - /exit or /quit kills terminal on Windows PowerShell (7 comments)
5. #31042 [CLOSED] - small_model ignored for title agent + retry loop (5 comments)
6. #31105 [CLOSED] - CLI 重复输出消息标记 (5 comments)
7. #31099 [CLOSED] - Renderer unresponsive with Solid.js infinite loop (5 comments)
8. #30057 [CLOSED] - add npx/bunx/uvx to bash arity dictionary (5 comments)
9. #29272 [CLOSED] - Add /simplify skill for code review (4 comments)
10. #21900 [CLOSED] - invalid internal tool exposed and can spam (4 comments)

**Important PRs (top 10):**
1. #40794 - fix(desktop): disable packaged console logging
2. #40784 - feat(core): hosted workspace execution with modal driver
3. #38790 - feat(app): add workspace flows to new layout
4. #35311 - fix (core): Multiple clones of same repo are different projects
5. #40787 - refactor: remove obsolete code
6. #40723 - feat(core): migrate v1 data to v2
7. #40783 - test(core): align event persistence expectations
8. #40781 - feat(app): export session as json from ui
9. #40717 - feat: add Swedish community translation
10. #40590 - feat: support GITHUB_TOKEN auth in install script
11. #39758 - fix(app): show directories in web project picker on open
12. #40765 - refactor(core): deduplicate Copilot endpoint routing

Let me analyze trends:

**Functional trends:**
- IDE integration: VSCode keybindings (CTRL+W conflict), `/simplify` skill
- Model support: z.ai/GLM 5.1, qwen models, Claude Code Desktop, Claude Sonnet 5
- Performance: SSE memory growth, retry loops, error handling
- Windows compatibility: Multiple terminal/PowerShell issues
- Workspace/Project management: workspace flows, project picker
- UX improvements: legacy layout, prompt editing, export session
- Network/Provider reliability: error retries, OAuth refresh races

**Developer pain points:**
- Windows terminal exit behavior (#27749, #28673, #30495, #26480)
- Provider network errors not being retried (#31133, SSE memory growth #31087)
- CLI rendering bugs (#31105, #29895)
- Legacy layout deprecation (#37012)
- small_model config ignored for title agent (#31042, #25344)

Let me write a professional Chinese report.</think>

# OpenCode 社区动态日报
**日期：2026-08-06**

---

## 📌 今日速览

今日 OpenCode 发布 **v1.18.14 版本**，核心改进了 xAI 登录流程和 provider 错误重试机制。社区方面，"**保留旧版布局选项**"呼声最高（35 条评论 / 38 👍），仍是未解决的开放 Issue；与此同时，PR #40784 推动的 **V2 托管 Workspace 执行架构** 与 PR #35311 修复的 **多克隆仓库项目识别**成为今日最受关注的技术进展，反映出社区对新版架构和工程稳定性的双重关注。

---

## 🚀 版本发布

### v1.18.14（Core）
- **xAI 登录优化**：简化为单步 device-code 流程，在无头和远程环境下体验更佳。
- **错误处理增强**：保留结构化中途流式 provider 错误，便于兼容 provider 重试失败响应。
- **重试覆盖扩展**：对更多瞬时 provider 和网络错误自动重试，提升稳定性。

> 🔗 https://github.com/anomalyco/opencode/releases/tag/v1.18.14

---

## 🔥 社区热点 Issues（Top 10）

| # | 标题 | 状态 | 评论 | 👍 | 为什么重要 |
|---|---|---|---|---|---|
| [#37012](https://github.com/anomalyco/opencode/issues/37012) | **[FEATURE]** 保留旧版布局选项 | OPEN | 35 | 38 | 新版布局将核心操作埋入多级菜单，工作区能力受限，社区反对声音强烈，是当前呼声最高的开放需求。 |
| [#14026](https://github.com/anomalyco/opencode/issues/14026) | 部分模型无法生成代码（qwen2.5-coder/ministral-3） | CLOSED | 9 | 1 | 揭示小模型在 tool-call 输出后未真正执行，影响 Ollama 等本地栈用户体验。 |
| [#16226](https://github.com/anomalyco/opencode/issues/16226) | **[FEATURE]** 仅通过发送按钮提交 prompt | CLOSED | 8 | 0 | 多段落 prompt 场景下回车误触严重，是高频 UX 痛点。 |
| [#27749](https://github.com/anomalyco/opencode/issues/27749) | Windows PowerShell 下 /exit 或 /quit 关闭整个终端 | CLOSED | 7 | 1 | 与 #28673、#30495、#26480 形成 Windows 退出行为系列问题集群。 |
| [#31042](https://github.com/anomalyco/opencode/issues/31042) | `small_model` 在 title agent 被忽略 + FreeUsageLimitError 重试循环 | CLOSED | 5 | 0 | 反映 provider 配额与 session 子代理模型调度的不一致。 |
| [#31105](https://github.com/anomalyco/opencode/issues/31105) | **[BUG]** CLI 终端重复输出消息标记数字 | CLOSED | 5 | 0 | Windows PowerShell/CMD 下渲染异常，社区曾出现 "238 238..." 刷屏现象。 |
| [#31099](https://github.com/anomalyco/opencode/issues/31099) | Solid.js `findDOMIndex` 无限循环导致渲染卡死 | CLOSED | 5 | 0 | OpenCode Desktop 1.16.2 macOS 上约 12 分钟必现，影响稳定性。 |
| [#30057](https://github.com/anomalyco/opencode/issues/30057) | **[FEATURE]** 将 npx/bunx/uvx 等加入 bash arity 字典 | CLOSED | 5 | 1 | 权限粒度的精细化诉求，反映 AI CLI 工具生态扩张对权限管理的挑战。 |
| [#29272](https://github.com/anomalyco/opencode/issues/29272) | **[FEATURE]** 添加 `/simplify` 自动代码评审技能 | CLOSED | 4 | 1 | 对标 Claude Code 的并发评审能力，体现社区对自动化代码质量保障的需求。 |
| [#21900](https://github.com/anomalyco/opencode/issues/21900) | **BUG**：内部 `invalid` 工具被暴露并可刷屏 | CLOSED | 4 | 0 | 一次畸形的 tool call 可级联刷屏，影响调试与 UI 可读性。 |

> 💡 **观察**：今日前 30 热门 Issue 中约 60% 已 CLOSED，且多涉及 v1.14–1.16 区间的 Windows 兼容性与 provider 错误处理——团队近期修复节奏明显加快。

---

## 🛠 重要 PR 进展（Top 10）

| # | 标题 | 状态 | 关键内容 |
|---|---|---|---|
| [#40784](https://github.com/anomalyco/opencode/pull/40784) | **feat(core)** 托管 Workspace 执行 + modal driver | OPEN | V2 架构核心：将 Workspace 定义为持久执行环境，Session 通过 `workspaceID` 在沙箱中运行，复用现有 runner 工具图。 |
| [#38790](https://github.com/anomalyco/opencode/pull/38790) | **feat(app)** 新布局增加 Workspace 流程 | OPEN | 新会话可选择 Local repo / 新建 workspace / 现有 workspace；composer pill 显示分支上下文并尊重位置选择。 |
| [#35311](https://github.com/anomalyco/opencode/pull/35311) | **fix(core)** 多克隆仓库应作为不同项目 | OPEN | 一次性关闭 15 个相关 Issue，重构项目识别逻辑，解决"同一仓库不同克隆被合并"的长期 bug。 |
| [#40787](https://github.com/anomalyco/opencode/pull/40787) | **refactor** 清理废弃与不可达代码 | OPEN | 删除 V2 包中 1500 行遗留代码和一个未使用的 workspace 包，保留兼容性与数据迁移路径。 |
| [#40723](https://github.com/anomalyco/opencode/pull/40723) | **feat(core)** V1 数据迁移至 V2 | CLOSED | 提供 REST 触发的可恢复 V1 会话历史迁移，导入 V2 会话数据与遗留 JSON 凭据，更新 TUI 迁移流。 |
| [#40781](https://github.com/anomalyco/opencode/pull/40781) | **feat(app)** UI 导出 session 为 JSON | CLOSED | 新增三点菜单"Export..."、Context 标签导出按钮与 `/export` 命令面板动作，方便会话归档与复现。 |
| [#40590](https://github.com/anomalyco/opencode/pull/40590) | **feat** 安装脚本支持 `GITHUB_TOKEN` 鉴权 | OPEN | 解决匿名请求限速问题，让 CI/企业用户在受限网络下也能可靠安装。 |
| [#40765](https://github.com/anomalyco/opencode/pull/40765) | **refactor(core)** 去重 Copilot 端点路由 | CLOSED | 复用 `@opencode-ai/ai` 中的 `shouldUseResponsesApi` 启发式，移除 Core 中的重复实现。 |
| [#40772](https://github.com/anomalyco/opencode/pull/40772) | **fix(opencode)** 缺失鉴权方法改为报告而非崩溃 | OPEN | 修复 `ProviderAuth.authorize` 索引 hook 表时未做守卫检查导致的硬崩溃。 |
| [#40768](https://github.com/anomalyco/opencode/pull/40768) | **fix(mcp)** 跨进程 OAuth 刷新竞态保护 | OPEN | 解决两个 opencode 进程共享同一 MCP 凭据行时，先到的刷新会让后到失败的竞态问题。 |

---

## 📈 功能需求趋势

通过对今日 50 条 Issue 的聚类分析，社区关注点集中在以下方向：

### 1. **IDE 与终端集成**（高频）
- 与 VSCode 键位冲突（如 `CTRL+W` 不可配置，#31100）
- 多 shell 终端退出行为（#27749、#28673、#30495、#26480）
- 自动化代码评审（`/simplify`，#29272）

### 2. **Provider / 模型兼容性**
- Ollama 小模型 tool-call 执行异常（#14026）
- z.ai GLM 5.1、qwen3.7-max、Claude Sonnet 5 等模型接入（#31133、#31178、#39291）
- 本地 LAN provider 自动发现（PR #27554）

### 3. **V2 架构与 Workspace**
- 新版布局工作流（PR #38790、#40784）
- 数据迁移与向后兼容（PR #40723）
- 项目/工作区识别（PR #35311）

### 4. **稳定性与可靠性**
- SSE 长会话内存增长（#31087）
- Provider/网络错误重试（#31133、#31042）
- MCP OAuth 跨进程竞态（PR #40768）

### 5. **国际化与可访问性**
- 新增瑞典语社区翻译（PR #40717）
- 导出 session 为 JSON（PR #40781）

---

## 🧑‍💻 开发者关注点与高频痛点

| 痛点 | 代表 Issue |
|---|---|
| **新版布局破坏原有工作流**，主窗口直达性变差 | #37012 |
| **Windows 终端兼容性差**：退出行为不可预测，常连带杀掉父 shell | #27749、#28673、#30495、#26480、#31155 |
| **Provider 错误处理不完善**：网络错误未重试、配额错误触发长循环、SSE 内存泄漏 | #31133、#31042、#31087 |
| **模型调度与配置不一致**：`small_model` 在 title agent 中被忽略、无小模型的 provider 不自动生成标题 | #31042、#25344 |
| **CLI/TUI 渲染异常**：消息标记重复输出、路径类型错误、Solid.js 无限循环 | #31105、#29895、#31099 |
| **权限粒度不足**：常用 AI CLI 工具未被 `permission/arity.ts` 覆盖 | #30057 |
| **鉴权与崩溃鲁棒性**：缺失鉴权方法直接崩溃、内部 `invalid` 工具被暴露 | #21900、PR #40772 |
| **本地与多账户配置**：Desktop 项目图标刷新丢失、GO 订阅体验差 | #24197、#40791 |

> 📊 **结论**：当前社区处于 **V1 → V2 架构过渡期**，开发者既关注新能力（Workspace、多模型、本地发现），也对 **Windows 兼容性、Provider 错误重试、布局回退** 这三类"老问题"高度敏感。团队近期在 refactor 与稳定性上持续投入，是积极信号。

---

*数据来源：github.com/anomalyco/opencode ｜ 统计窗口：过去 24 小时更新*

</details>

<details>
<summary><strong>jcode</strong> — <a href="https://github.com/1jehuang/jcode">1jehuang/jcode</a></summary>

<think>Let me analyze the GitHub data for jcode community daily report for 2026-08-06.

Key items to cover:
1. Quick overview
2. Version release (v0.68.0)
3. Hot issues (top 10)
4. Important PRs (there are only 4, so I'll cover all of them)
5. Feature request trends
6. Developer pain points

Let me organize the most important issues:

**Top issues by comment count and importance:**
1. #517 - 9router connection (16 comments) - feature request
2. #688 - /rewind bug (14 comments) - critical bug
3. #518 - Antigravity provider thought_signature error (12 comments) - provider compat
4. #809 - CLI flags --provider/--model ignored (11 comments) - bug
5. #769 - master CI broken (10 comments) - CI broken
6. #145 - How to get started (9 comments) - documentation
7. #765 - ACP mode missing features (8 comments) - protocol gap
8. #813 - ACP layer missing model catalog (8 comments) - protocol gap
9. #789 - MCP config interpolation (8 comments) - Claude compat
10. #790 - McpConfig::load() doesn't read project-local (7 comments) - bug
11. #760 - command-mutating before-tool hook (7 comments) - feature request
12. #807 - Shift+Tab model cycling bug (6 comments) - bug
13. #812 - ACP token usage missing (6 comments) - protocol gap
14. #810 - Per-tool model routing (5 comments) - feature request
15. #814 - Data-loss on session close (5 comments) - data loss bug

**PRs (4 total):**
1. #785 - CLI test fixtures migration (fixes #768)
2. #758 - multiple client-scoped commands
3. #746 - Provider-specific effort/service-tier UI
4. #702 - End-to-end test coverage

**Feature trends from issues:**
- ACP protocol gaps (model selection, token usage, session modes)
- Provider compatibility (DeepSeek, Antigravity, OpenAI)
- MCP config compatibility with Claude Code
- Multi-agent/swarm improvements
- Per-tool model routing
- Auto-retry/auto-continue
- Native tmux support for swarms
- CLI flag handling

**Pain points:**
- CI broken since v0.67.0
- Provider compatibility issues
- MCP config incompatibility with Claude Code
- Data loss bugs
- Silent flag ignoring
- Installation script behavior (issue #811)

Let me write this up in Chinese.</think>

# jcode 社区动态日报 · 2026-08-06

## 1. 今日速览

今日 jcode 发布了 **v0.68.0** 版本，重点强化了 Provider 兼容性与云端接入流程，主仓库也在密集收尾 v0.67.0 遗留的 CI 红线和 ACP 协议短板。社区讨论集中在三个方向：**Anthropic/Claude 兼容层（ACP + MCP）**、**多 Provider 路由与配额优化**、以及 **swarm/multi-agent 体验打磨**。需要警惕的是，#814 报告了一个可能导致**大型 transcript 数据丢失**的高危问题，开发者已在 fork 准备好修复。

---

## 2. 版本发布

### 🚀 v0.68.0 — *Smarter provider compatibility and cloud onboarding*

- **Tool schema 自适应**：工具 schema 现在会自动适配不同 Provider，遇到新增的不兼容项也能自动恢复。
- **Managed cloud 默认开启**：托管云端激活成为默认远程接入流程，降低新手配置门槛。
- **TypeScript SDK 平台化打包**：SDK 现在按平台打包，平台特定依赖不再泄漏到上层项目。

🔗 链接待补（GitHub Releases）

---

## 3. 社区热点 Issues（Top 10）

| # | Issue | 关注点 | 评论 |
|---|-------|--------|------|
| 1 | [#517](https://github.com/1jehuang/jcode/issues/517) | **连接 9router 路由** —— 最多讨论的需求，体现社区对多模型代理层的高度热情 | 16 |
| 2 | [#688](https://github.com/1jehuang/jcode/issues/688) | **`/rewind n` 偏移错误** —— 高优先级 bug，首会话回退一步而非指定位置 | 14 |
| 3 | [#518](https://github.com/1jehuang/jcode/issues/518) | **Antigravity provider 工具调用 400 错误** —— `thought_signature` 缺失，标记为 recurring-theme | 12 |
| 4 | [#809](https://github.com/1jehuang/jcode/issues/809) | **CLI `--provider` / `--model` 被服务端静默忽略** —— 用户体验痛点 | 11 |
| 5 | [#769](https://github.com/1jehuang/jcode/issues/769) | **v0.67.0 引入 master CI 编译失败** —— 阻塞所有 PR 合并 | 10 |
| 6 | [#145](https://github.com/1jehuang/jcode/issues/145) | **入门指南缺失** —— 老牌入门贴，今日再次被推到首页 | 9 |
| 7 | [#765](https://github.com/1jehuang/jcode/issues/765) | **ACP 模式缺少模型/会话/Token 能力** —— 已被关闭（修复中） | 8 |
| 8 | [#813](https://github.com/1jehuang/jcode/issues/813) | **ACP 层缺模型目录与 `set_model` 协议** —— 与 #765 配套 | 8 |
| 9 | [#789](https://github.com/1jehuang/jcode/issues/789) | **MCP 配置不做 `${VAR}` 变量展开** —— Claude Code 兼容性问题 | 8 |
| 10 | [#814](https://github.com/1jehuang/jcode/issues/814) | **⚠️ 关停会话时可能清空大型 transcript** —— 数据丢失高危，fork 已提供修复 | 5 |

**为什么重要**：Top 10 中有 3 条 (#765/#813/#789) 直接关联 **jcode ↔ Claude Code / Zed 的互操作性**，说明社区把 jcode 当作"Claude Code 之外的 Provider 终端"来用；#688/#814/#809 则是典型"用户输入被默默吃掉"类问题，对工具信任度伤害大。

---

## 4. 重要 PR 进展

| PR | 标题 | 影响 |
|----|------|------|
| [#785](https://github.com/1jehuang/jcode/pull/785) | **fix: migrate CLI test fixtures to semantic states** | 修复 #768，让 v0.67.0 遗留的 CI 编译错误彻底收敛；将遗留 numeric 置信度映射到 `ConfidenceState` |
| [#758](https://github.com/1jehuang/jcode/pull/758) | **feat(hooks): support multiple client-scoped commands** | jcode 生命周期 hook 支持数组形式，每个 hook 独立执行并透传终端环境 —— 直接解决 shared-server 下 hook 失效问题 |
| [#746](https://github.com/1jehuang/jcode/pull/746) | **Fix provider-specific effort and service-tier UI** | 关闭 #739/#742：命名 OpenAI 兼容模型只显示一行，`/effort` 选择；`[fast]` 徽章限定 OpenAI OAuth |
| [#702](https://github.com/1jehuang/jcode/pull/702) | **test: end-to-end coverage for #694/#695 triage fixes** | 为 #701 的三个 triage 修复补 e2e 回归，并顺手修了一个长期红的旧测试 |

> 📌 仅 4 条 PR 进入本期，全部由 maintainer `@1jehuang` 合并，节奏稳健但偏单人维护，建议关注贡献者多样性。

---

## 5. 功能需求趋势

通过对 43 条 Issues 的聚类，社区最关注的方向按热度排序：

1. **🐝 Swarm / 多 Agent 体验**（#76, #792, #816, #661）
   - 原生 tmux 全景面板、auto-continue、`/clear` 残留 Plan 修复 —— 纷纷对标 Claude Code 的多 agent 范式。

2. **🔌 ACP 协议能力补齐**（#765, #812, #813, #817）
   - 模型目录、`session/set_model`、token usage 计量、reasoning effort —— Ze d / ACP 宿主想要"完全体"。

3. **🔗 Claude Code 兼容层**（#789, #790, #791, #798, #423）
   - MCP 变量展开、项目级 `.mcp.json`、plugin skills 自动迁移、memory sidecar 模型名修正 —— 目标是把 `~/.claude.json` 的工作量"零成本"迁过来。

4. **🧠 Provider / 路由灵活度**（#517, #518, #810, #815, #798, #817）
   - 9router、Antigravity、DeepSeek、Muse、per-tool 模型路由 —— 多 Provider 同时使用的诉求强烈。

5. **🛠️ 工具扩展 / Hook 体系**（#760, #758）
   - before-tool 命令改写、多 client hook、rtk/hypa/ctx-wire 等 shell shrinker 接入。

6. **📥 入门与文档**（#145, #817 提供 PR-ready 分支）
   - 新人引导、Meta Model API 文档化。

---

## 6. 开发者关注点 & 痛点

- **🚨 数据可靠性焦虑**：#814 的 transcript 静默覆盖 + #799 系列 MCP 删改不同步，让一部分用户在生产环境不敢用 jcode 跑长任务。
- **😶 "静默失败"反模式**：#809（CLI flag 被忽略）、#807（Shift+Tab 死循环）、#567（Windows 换行误触发送）—— 三个问题都指向同一个 UX 缺陷：工具不告诉用户"我没按你说的做"。
- **🧱 v0.67.0 回归债**：#768/#769 反映一次发布就拖垮 master CI，说明发布前回归套件覆盖不够，需要 e2e（#702 正在补）。
- **🛡️ 安装脚本越权**：#811 指出 `curl | bash` 会改写 `~/.config/niri/config.kdl` 并向 Claude/Codex 注入 hook，安装器信任问题需要正式声明。
- **💸 配额与成本控制**：#810 提出的 per-tool 模型路由是本月新晋刚需 —— 大模型订阅用户希望"grep 用便宜模型，重构用贵的"。
- **🪟 平台兼容性**：Windows 误触发送、WSL2 + Zed 路径问题（#765）提示 Windows 仍是 jcode 的"二等公民"。

---

> 📊 **本期节奏判断**：v0.68.0 已经把 Provider 兼容性的"层"做扎实，下一步大概率是 **ACP 协议完善**（#812/#813 配套 PR 已在路上）和 **swarm 体验对齐 Claude Code**。社区贡献者集中在 @1jehuang 单人，hotfix 节奏快但需要警惕长尾债。

*日报基于 GitHub 数据自动化生成，如有遗漏欢迎在 issue 中补充。*

</details>

<details>
<summary><strong>pi</strong> — <a href="https://github.com/earendil-works/pi">earendil-works/pi</a></summary>

<think>The user wants me to generate a daily community report for the pi project on GitHub, dated 2026-08-06. Let me analyze the data and create a structured Chinese-language report.

Key observations:
1. No new releases in past 24 hours
2. 50 issues updated, top 30 shown - I'll pick 10 most important
3. 38 PRs updated, top 20 shown - I'll pick 10 most important
4. Need to identify trends from issues

Let me identify the top issues by importance (comments + engagement):
1. #7547 - Windows usage discussion (18 comments) - platform support
2. #534 - Linux config folder XDG compliance (14 comments, 23 likes) - CLOSED
3. #7399 - OSC 8 hyperlink bug (12 comments) - CLOSED
4. #6879 - Auto-compaction bug (11 comments, 13 likes) - important bug
5. #5263 - Ephemeral model changes (11 comments, 12 likes) - UX feature
6. #5291 - Anthropic subscription hang (8 comments) - bug
7. #6675 - Self-update transient failure (8 comments) - bug
8. #7128 - PI_* env var system prompt bias (7 comments) - 
9. #5064 - Context windows option (7 comments) - feature request
10. #3200 - Video/audio content support (7 comments, 4 likes) - multimodal
11. #7553 - Configurable thinking for compaction (7 comments) - related to #6879
12. #7465 - iTerm2 inline image size (7 comments) - CLOSED
13. #5323 - Vertex GCP metadata (6 comments)
14. #7642 - AGENTS.override.md (4 comments) - CLOSED
15. #7444 - WebSocket retry (4 comments)
16. #7673 - Line ranges in @file (3 comments) - CLOSED

Important PRs:
1. #7694 - Linux clipboard X11 leaks fix
2. #7679 - Line ranges in @file references
3. #6216 - Amazon Bedrock Mantle provider (long-standing PR)
4. #7692 - Natural sort model selectors
5. #7690 - Natural sort scoped model catalog
6. #7659 - Qwen Token Plan Individual provider
7. #7671 - Tool prompt contributions
8. #7597 - Extension selector scrollable
9. #7638 - thinking_token_budget on openai-completions
10. #7686 - Configurable Harness factory
11. #7656 - Fix event bus leak
12. #7663 - Comma after LGTM recognition
13. #7669 - Harness v2 r2
14. #7670 - Replace qwen3.8-max-preview with qwen3.8-max
15. #7672 - Restore Copilot models from account policy
16. #7685 - Disable bunfig autoload
17. #7665 - Skip OSC 8 scan for plain prefixes
18. #7681 - AGENTS.override.md support
19. #7680 - Selection page keybindings
20. #7664 - Support AGENTS.override.md

Let me pick top 10 PRs that are most representative:
1. #7694 - X11 clipboard leak fix (responds to serious bug #7600)
2. #7679 - Line ranges in @file (closes #7673)
3. #7692 - Natural sort model selectors (closes #7693)
4. #7659 - Qwen Token Plan Individual (new model provider)
5. #7671 - Tool prompt contributions (refactor)
6. #7686 - Configurable Harness factory (architecture)
7. #7656 - Fix event bus leak (fixes #7193)
8. #7638 - thinking_token_budget (OpenAI-completions)
9. #7672 - Restore Copilot models (fixes #7634)
10. #7664/#7681 - AGENTS.override.md support (closes #7642)

Trends I can identify:
1. Platform support (Windows, Linux)
2. Model provider additions (Qwen, Bedrock Mantle, Copilot fixes)
3. Context management (compaction, context windows)
4. Multimodal (video/audio)
5. TUI/UX improvements (sorting, keybindings, mouse events)
6. Extension API improvements (event bus, auth, harness)
7. Resource leaks (X11 connections, event bus)
8. Context file customization (AGENTS.override.md, line ranges)
9. Login flows (Anthropic SSH issue)

Let me write the report now.</think>

# Pi 社区动态日报 · 2026-08-06

> 数据来源：[earendil-works/pi](https://github.com/earendil-works/pi) ｜ 统计窗口：过去 24 小时

---

## 📌 今日速览

今日社区聚焦三大主题：**Linux/Windows 平台兼容性**（X11 连接泄漏、Win32 用法调研）、**会话恢复与压缩机制**（自动压缩阈值、失败 turn 恢复），以及**模型提供方生态扩展**（Qwen Token Plan Individual 上线、Bedrock Mantle 持续推进）。整体节奏平稳，无新版本发布，但有 38 个 PR 持续推进、50 个 Issue 保持活跃讨论。

---

## 🚀 版本发布

> 过去 24 小时内无新 Release。建议关注主干 `main` 分支最近的合并活动（#7679、#7692、#7656 等）。

---

## 🔥 社区热点 Issues（Top 10）

| # | Issue | 状态 | 评论 | 亮点 |
|---|------|------|------|------|
| [#7547](https://github.com/earendil-works/pi/issues/7547) | **Windows 使用调研**：收集用户在 Win32 上运行 Pi 的方式与痛点 | OPEN | 18 | 维护者 @petrroll 主导，覆盖"gazzilion Windows 开发者"潜在用户群，决定后续官方/扩展的边界 |
| [#534](https://github.com/earendil-works/pi/issues/534) | Linux 配置目录应遵循 XDG Base Directory 规范 | CLOSED | 14 👍23 | 历史高赞 issue，推进 `~/.config` 路径规范化，长期社区诉求落地 |
| [#7399](https://github.com/earendil-works/pi/issues/7399) | `truncateToWidth()` 截断 OSC 8 超链接残留 | CLOSED | 12 | 终端渲染层细节 bug，已合并 #7663、#7665 修复链 |
| [#6879](https://github.com/earendil-works/pi/issues/6879) | 自动压缩在越过 100% 后才触发 | OPEN | 11 👍13 | 长任务场景下的可靠性缺陷：一次 2 小时回合直到 API 373k token 拒绝才压缩，#7553 与之高度相关 |
| [#5263](https://github.com/earendil-works/pi/issues/5263) | 会话内模型/思考级别改动默认应 ephemeral | OPEN | 11 👍12 | UX 重要改进：避免临时切换污染全局默认设置，需 `/settings` 显式入口 |
| [#5291](https://github.com/earendil-works/pi/issues/5291) | Anthropic 订阅下会话卡在 "Working..." | CLOSED | 8 | 企业订阅场景下的稳定性问题，影响付费用户体验 |
| [#6675](https://github.com/earendil-works/pi/issues/6675) | `pi update --self` 一次瞬时网络失败即放弃 | CLOSED | 8 | 自更新流程鲁棒性问题，已通过重试逻辑修复 |
| [#3200](https://github.com/earendil-works/pi/issues/3200) | `prompt` RPC 命令支持视频/音频内容 | OPEN | 7 👍4 | 多模态扩展的关键缺口，呼应 Gemma 4、GPT-4o 等模型的真实能力 |
| [#7553](https://github.com/earendil-works/pi/issues/7553) | 可为压缩配置独立的思考级别/模型 | OPEN | 7 | 与 #6879 互补：将摘要过程的思考预算与正常回合解耦 |
| [#7128](https://github.com/earendil-works/pi/issues/7128) | 默认 PI_* 系统提示过度引导 bash 调用 | CLOSED | 7 | 揭示系统提示微调对模型行为偏差的隐性影响 |

---

## 🛠 重要 PR 进展（Top 10）

| # | PR | 状态 | 关键内容 |
|---|----|------|---------|
| [#7694](https://github.com/earendil-works/pi/pull/7694) | **修复 Linux 剪贴板 X11 连接泄漏** | OPEN | 响应 #7600 严重问题：弃用原生剪贴板 addon，改用 `wl-paste`/`xclip`/`xsel`，并补回归测试 |
| [#7679](https://github.com/earendil-works/pi/pull/7679) | 支持 `@file#L122-L145` 行范围引用 | CLOSED | 闭环 #7673：1-based 闭区间语法，与 `read` 工具 EOF 行为对齐，便于 Neovim 等编辑器集成 |
| [#7659](https://github.com/earendil-works/pi/pull/7659) | 新增 Qwen Token Plan Individual 提供方 | OPEN | 通过 `QWEN_TOKEN_PLAN_API_KEY` 接入国际版 Token Plan，暴露 8 个订阅模型 |
| [#7692](https://github.com/earendil-works/pi/pull/7692) | 自然排序 `/model` 与 `/scoped-models` | CLOSED | 闭环 #7693：共享大小写不敏感+数字感知的比较器，避免 `@1m` 排在 `@200k` 前 |
| [#7672](https://github.com/earendil-works/pi/pull/7672) | 恢复 Copilot 模型可见性 | CLOSED | 闭环 #7634：以 `model_picker_enabled` 为主信号，兼容新版 API 响应字段 |
| [#7656](https://github.com/earendil-works/pi/pull/7656) | 修复事件总线监听器泄漏 | CLOSED | 闭环 #7193：作用域限定 `pi.events.on()` 订阅，避免扩展重载后遗留回调 |
| [#7664](https://github.com/earendil-works/pi/pull/7664) | 支持 `AGENTS.override.md` 目录级覆盖 | CLOSED | 闭环 #7642：最高优先级上下文文件，保留祖先目录分层行为 |
| [#7680](https://github.com/earendil-works/pi/pull/7680) | 处理 `tui.select.pageUp/pageDown` 按键 | OPEN | 编辑器自动补全与全屏转录视图的翻页一致性修复 |
| [#7638](https://github.com/earendil-works/pi/pull/7638) | OpenAI 兼容端点支持 `thinking_token_budget` | CLOSED | 解决"推理吃光 max_tokens 后无文本无工具调用"的 silent failure |
| [#7686](https://github.com/earendil-works/pi/pull/7686) | 实验性 Harness 可配置工厂 | OPEN | 内部架构演进：构造 Harness 时保留调用方提供的工具、激活与提示策略 |

---

## 📈 功能需求趋势

从 50 条活跃 Issue 中归纳，社区关注度最高的方向：

1. **🤖 模型生态扩展** — Qwen Token Plan（#7659、#7670）、Amazon Bedrock Mantle（#6216 长期推进）、Copilot 兼容性（#7634、#7672）。多模型并存已是常态，提供方适配是高频需求。
2. **🪟 跨平台体验** — Windows 用法调研（#7547）、Linux XDG 规范（#534 已闭）、Linux Mint X11 资源泄漏（#7600 → #7694）。Windows 用户基数大但官方支持路径不清晰。
3. **📦 长任务可靠性** — 自动压缩阈值（#6879）、压缩模型/思考级别解耦（#7553）、失败 turn 恢复（#7609）。反映 Pi 已被用于 2 小时级深度代理任务。
4. **🎬 多模态输入** — 视频/音频进 `prompt`（#3200）、Mermaid 图表渲染（#7623）。社区希望 Pi 不只停留在文本/图像。
5. **🧩 扩展 API 增强** — 事件总线作用域（#7656、#7193）、API 密钥持久化（#7658）、Provider 重试回调（#7649）、Harness 工厂（#7686）。扩展生态正从"能用"走向"可生产"。
6. **🖥 TUI 交互细节** — 鼠标事件分发（#7683）、填充锚点（#7682）、bash 多行换行折叠（#7666）、超大 diff 滚动（#7597 已闭）。可读性与可达性持续打磨。
7. **📄 上下文文件协议** — `AGENTS.override.md` 覆盖（#7664、#7681）、`@file#L<start>-L<end>` 行范围（#7673 → #7679）。项目级 Agent 指令与编辑器集成双向推进。

---

## 💬 开发者关注点

汇总 Issue / PR 描述与社区反馈，开发者集中反馈的痛点：

- **🔌 长进程资源泄漏**：#7600 报告 Pi 在 8 天内累积 182 个 X11 连接导致 Xorg 客户端表耗尽，凸显后台守护式使用下的资源生命周期管理缺陷。#7193 的事件总线泄漏同源。
- **⏱ 压缩机制滞后**：#6879 用户在 GPT-5.6-Sol 上跑了 2 小时回合，footer 越过 100% 仍未压缩，直到 373k token 被 API 拒绝。开发者期望"阈值检查应在每个代理回合之后触发"。
- **🪟 Windows "一千种启动方式"**：#7547 维护者承认 Windows 上 Pi 运行方式过多，难以判断哪些该由核心团队修、哪些外包给扩展。
- **🔐 SSH / Headless 登录**：#7691 在 SSH 无图形环境下 `/login anthropic` 仍走 localhost 重定向而非显示复制码，跨设备登录体验断点。
- **📝 上下文/默认污染**：#5263 临时切换模型不应写入全局默认；#7128 默认系统提示中的 PI_* 引导会让模型过度触发 bash 检查，提示词的微小变化会带来显著行为偏差。
- **🧠 推理预算冲突**：#7638 指出 OpenAI 兼容端点上推理与回答共享 `max_tokens`，重度思考回合会"无声失败"，agent-loop 误判任务完成。
- **🆔 模型 ID 排序混乱**：#7693 多上下文窗口变体在 `/model` 与 `/scoped-models` 中顺序不一致，开发者难以稳定复现某次会话所用的模型。

---

> 📊 数据说明：以上日报基于 2026-08-06 滚动 24 小时内更新的 Issue / PR 排序整理，部分 Issue 因衍生讨论仍持续更新，建议结合 GitHub 时间线追踪。

</details>

---
*本日报由 [Big Model Radar](https://github.com/96loveslife/big_model_radar) 自动生成。*
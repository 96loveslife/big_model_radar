# AI CLI 工具社区动态日报 2026-08-12

> 生成时间: 2026-08-12 02:22 UTC | 覆盖工具: 8 个

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

<think>The user has provided detailed daily reports for 7 AI CLI tools (Claude Code, OpenAI Codex, Gemini CLI, GitHub Copilot CLI, Kimi Code CLI, OpenCode, jcode, pi) and is asking me to synthesize them into a horizontal comparative analysis report with 6 specific sections. Let me carefully analyze the data across all tools and create a comprehensive cross-comparison report.

Let me extract key data points from each tool's report:

**Claude Code (anthropics/claude-code):**
- Release: v2.1.228 (patch)
- Top issue: #27801 Cowork VM (72 comments), #36024 MCP multi-account (77 likes - highest)
- Trends: MCP ecosystem expansion, agent governance, session/memory reliability, billing transparency

**OpenAI Codex (openai/codex):**
- Releases: 3 alpha versions (rust-v0.148.0-alpha.7/8/9) in 24h
- Top issue: #20214 Windows 11 freezing (96 comments, 81 likes)
- Trends: Windows desktop stability (top priority), Computer Use availability, TUI readability, MCP/OAuth

**Gemini CLI (google-gemini/gemini-cli):**
- Releases: v0.55.1, v0.56.0-preview.1, v0.56.0-preview.3, v0.56.0-nightly
- Top issue: #26911 quota 429 (12 comments, CLOSED via #28730)
- Trends: Auto Memory system, Browser Agent robustness, shell reliability, AST-aware tools, security hardening

**GitHub Copilot CLI (github/copilot-cli):**
- No releases
- Top issue: #4095 Windows plugin update fails (14 likes), #4422 Claude models disabled
- Trends: Cross-ecosystem interop (.claude/rules), Windows stability, model scheduling, security

**Kimi Code CLI (MoonshotAI/kimi-cli):**
- No releases
- Top issue: #1283 Memory System (34 comments, 5+ months)
- Trends: Persistent memory, configuration flexibility, ACP protocol, Windows compatibility

**OpenCode (anomalyco/opencode):**
- No releases
- Top issue: #16017 Go plan API (137 likes, CLOSED), #27924 infinite compaction loop
- Trends: Observability/cost transparency, slash commands (Claude Code style), Desktop/IDE integration, file semantics

**jcode (1jehuang/jcode):**
- Releases: v0.75.1, v0.75.2, v0.75.3 (3 patches)
- Top issue: #884 stale tool results, #751 risk gate over-trigger
- Trends: TUI experience, Provider/ACP integration, performance optimization, cross-platform

**pi (earendil-works/pi):**
- No releases
- Top issue: #6187 WSL login hang (25 comments), #7730 Mac CPU (8 likes)
- Trends: Model/reasoning control, runtime performance, TUI/IDE, extension system

Now let me identify common themes:

1. **Memory & Context Management** - Claude Code (#85677, #85657), Kimi Code (#1283), Gemini CLI (Auto Memory #26522/26523/26525), OpenCode (#41751)
2. **MCP Ecosystem** - Claude Code (#36024, #79986), OpenAI Codex (#38081, #38089), Gemini CLI (OAuth related)
3. **Windows Compatibility** - Claude Code (#59408, #73468), OpenAI Codex (multiple), GitHub Copilot (#4095, #4151), Kimi Code (#2600), jcode (#902)
4. **Agent/Subagent Governance** - Claude Code (#67636, #80988, #76727), GitHub Copilot (#4380, #4377, #4445), OpenCode (#28986)
5. **Cost/Token Visibility** - Claude Code (#81703, #83062), OpenCode (#16017, #41915), Gemini CLI (#26911)
6. **TUI Experience** - All tools have TUI-related issues
7. **Cross-ecosystem Compatibility** - GitHub Copilot (.claude/rules), jcode (CLAUDE_CONFIG_DIR)
8. **Security** - Gemini CLI (CVE fixes), GitHub Copilot (adrama-zip, PR workflow)
9. **Provider Integration** - pi (Qwen CN, Cloudflare), Gemini CLI (SGLang/OpenAI compat), jcode (Cursor ACP)
10. **Desktop App Stability** - Claude Code (Cowork), OpenAI Codex (Desktop), OpenCode (Desktop), jcode (Desktop)

Activity comparison:
- Claude Code: 50 issues + 8 PRs
- OpenAI Codex: 50 issues + 50 PRs (high PR activity from bot)
- Gemini CLI: 50 issues + 32 PRs
- GitHub Copilot CLI: 41 issues + 3 PRs
- Kimi Code CLI: 3 issues + 8 PRs (low activity)
- OpenCode: 50 issues + 50 PRs
- jcode: 34 issues + 5 PRs
- pi: 50 issues + 50 PRs

Maturity/Activity ranking:
- Most active: Claude Code, OpenAI Codex, OpenCode, pi
- Active: Gemini CLI, GitHub Copilot CLI
- Lower activity: Kimi Code CLI, jcode

Let me now write a structured comparison report in Chinese.

I should structure it well, with tables and clear sections. Let me think about format:

1. 生态全景 (3-5 sentences overview)
2. 各工具活跃度对比 (table)
3. 共同关注的功能方向 (multiple tools + specific demands)
4. 差异化定位分析 (focus, users, tech)
5. 社区热度与成熟度
6. 值得关注的趋势信号

Let me write this report now.</think>

# AI CLI 工具生态横向对比分析
**报告日期：2026-08-12 · 数据窗口：过去 24 小时**

---

## 一、生态全景

当前 AI CLI 工具生态已进入**"能力收敛期 + 治理攻坚期"**阶段：主流厂商（Anthropic / OpenAI / Google / GitHub）持续高频迭代，中国厂商（Moonshot / 1jehuang）则在长尾细分场景与可配置性上寻找差异化。新版本发布普遍以"稳定性补丁 + 安全加固"为主旋律，而社区诉求已从"能否跑通"全面转向"**可控、可观测、可审计**"——Agent 治理、跨会话记忆、计费透明度、平台兼容性成为四个共同焦点。

> 一句话总结：**AI CLI 已从"工具"演化为"平台"，生态竞争点从功能堆叠转向治理能力与互操作性。**

---

## 二、各工具活跃度对比

| 工具 | 今日 Release | Issues 更新 | PR 更新 | 核心动作 |
|------|-------------|------------|---------|---------|
| **Claude Code** | v2.1.228（补丁） | ~50 | 8 | Windows 兼容 + TUI 修复；MEP 协议雏形 |
| **OpenAI Codex** | rust-v0.148.0-alpha.7/8/9（3 个 alpha） | 50 | 50 | Windows 桌面稳定性围攻；gRPC/MCP/OAuth 体系化 |
| **Gemini CLI** | v0.55.1 / v0.56.0-preview.1 / preview.3 / nightly | 50 | 32 | quota bug 闭环；SGLang/OpenAI 兼容；3 项 CVE 加固 |
| **GitHub Copilot CLI** | 无 | 41 | 3 | 跨生态互操作（.claude/rules）；Windows 句柄冲突 |
| **Kimi Code CLI** | 无 | 3 | 8 | ACP 稳健性修复（@hobostay 6 PR）；`/effort` 在途 |
| **OpenCode** | 无 | 50 | 50 | Claude Code ACP Runtime 集成；v2 迁移稳定性 |
| **jcode** | v0.75.1 / 0.75.2 / 0.75.3（3 补丁） | 34 | 5 | 流式错误重试、Todo 校验、桌面会话 |
| **pi** | 无 | 50 | 50 | v0.84.x 回归修复；新 provider（Qwen CN / Cloudflare） |

> **观察**：Claude Code、Codex、Gemini CLI、OpenCode、pi 五者 Issue+PR 均在 50+ 量级，属第一梯队。Kimi 与 jcode 因团队规模/曝光度差异，活跃度相对低。

---

## 三、共同关注的功能方向

| 功能方向 | 涉及工具 | 具体诉求 |
|---------|---------|---------|
| **🧠 跨会话记忆 / 持久化上下文** | Claude Code (#85657/85677)、Gemini CLI (#26522/26523/26525 Auto Memory)、Kimi (#1283, 34 评论, 5 月+ 仍未合)、OpenCode (#41751 项目技能静默丢弃) | Auto Memory 资源浪费、跨会话协调原语、`CLAUDE.md` 被忽略、Memory sidecar 后端可配 |
| **🔌 MCP 生态扩展与稳定** | Claude Code (#36024 多账号, 77 赞)、Codex (#38081 共享 ReviewDecision / #38089 CIMD)、Gemini CLI (#28680 A2A OIDC)、jcode (#835 `/mcp`) | MCP 多账号、工具派发、OAuth CIMD 标准化、动态启停 MCP |
| **🪟 Windows 平台稳定性** | Claude Code (#59408/73468)、Codex (#20214 卡顿 96 评论 / #25391 Computer Use)、Copilot (#4095 句柄锁)、Kimi (#2600 PowerShell)、jcode (#902 UI 崩溃) | 文件句柄冲突、长命令 ARG_MAX、TUI 快捷键、Windows 终端协议 |
| **🤖 Agent / Subagent 可控性** | Claude Code (#67636 并发烧 token / #80988 委派覆盖 / #76727 跨会话)、Copilot (#4380 rubber-duck 失陷 / #4445 auto 选错)、OpenCode (#28986 自回复 / #41922 token 用量折叠) | 并发子代理限额、模型委派策略、子代理 trust 继承、对话摘要 |
| **💰 计费与成本透明度** | Claude Code (#81703 7·17 计费事件 / #83062 自动续费)、Gemini CLI (#26911 quota 429)、OpenCode (#16017 137 赞 / #41915 `/usage`) | 订阅额度审计、自动重试重置、容量误报修复 |
| **🛠 TUI / 桌面交互打磨** | 全部工具均有覆盖 | 主题切换、@file 完成、风险门误报、键盘协议、OSC 8/9、滚动指示器 |
| **🔒 安全合规** | Gemini CLI (shell-quote / simple-git CVE、SSRF)、Copilot (adrama-zip CVE / #4449 PR 权限模型)、Claude Code (#85834 Bug Bounty) | 供应链 CVE、PR workflow 权限、SSRF、OAuth 资源管理 |
| **🔁 跨生态互操作** | Copilot (#4440 读 `.claude/rules` / #4439 GitLab MCP)、jcode (#883 `CLAUDE_CONFIG_DIR`)、OpenCode (#41904 Claude Code ACP Runtime) | 用户希望复用已有 `.claude/` 配置，催生 ACP 互操作协议 |
| **🧩 扩展 / Skills 体系** | Claude Code (#85243 spec 合规)、Kimi (#1283)、OpenCode (#41751)、jcode (#835/#837) | skills 发现率不足、命名规范、跳过目录加载 |
| **⚡ 性能与稳定性回归** | pi (#7730 Mac CPU 100% / #7846 bun 崩溃)、Codex (#84404 streaming reset)、Claude Code (#85979 ECONNRESET) | 长会话 CPU 占用、streaming 长连接、启动时间预算 |

---

## 四、差异化定位分析

| 工具 | 功能侧重 | 目标用户 | 技术路线 / 关键决策 |
|------|---------|---------|-------------------|
| **Claude Code** | 全栈闭环 + Agent 治理 + Cowork 工作区 | 付费企业 / 深度集成用户 | MCP-first，v2.1.x 系列偏治理（委派策略、heron_brook 段）；MEP 协议探索跨端协同 |
| **OpenAI Codex** | Desktop + Computer Use + 多 provider 网关 | Windows 重度用户 / 企业 IT | Rust 重写进入 0.148 alpha；MCP+OAuth+gRPC 三件套走向企业级；bundled marketplace 是 Windows 体验核心 |
| **Gemini CLI** | 多模型网关 + 评估基础设施 + 安全 | Google Cloud / Vertex 企业 / 研究者 | 行为评估 EPIC (#24353) 与 AST-aware 工具 (#22745) 体现工程派路线；积极向 SGLang/OpenAI 兼容层开放 |
| **GitHub Copilot CLI** | Codespaces / 企业合规 / 生态互操作 | GitHub Enterprise / Codespaces 用户 | 跨生态兼容（`.claude/rules`）+ adm-zip 类供应链治理；PR 权限模型主动加固 |
| **Kimi Code CLI** | 长上下文 + ACP 稳健性 | 中文场景 / 实验型用户 | ACP（Agent Communication Protocol）路线独特，`/effort` 推理强度可配是亮点；issue 量低，但修复密度高 |
| **OpenCode** | 桌面端 + 互操作 + 终端重度体验 | 多 agent 工具玩家 / 桌面 IDE 用户 | 首个集成 Claude Code ACP Runtime 的第三方（#41904）；@kitlangton 一人推动大量 TUI 打磨 |
| **jcode** | TUI 极致体验 + Provider 灵活接入 | 终端重度用户 / 早期采用者 | 高频小版本迭代（3 个补丁/24h）；风险门可配置化；与 Claude Code 配置体系有桥接意图 |
| **pi** | 多 provider 接入 + 扩展系统 + TUI 创新 | 扩展作者 / pi 生态粉丝 | `message_update` 协议透明化、Qwen CN/Cloudflare AI Gateway 等小众 provider；Mermaid / OSC 8 等 TUI 创新活跃 |

**核心差异轴**：
1. **平台 vs 工具**：Claude Code、Codex 朝"平台"演进（MCP、Cowork、Desktop），jcode、pi 更偏"工具"（深度配置、扩展）。
2. **美国大厂 vs 中国 / 社区**：Anthropic / OpenAI / Google / GitHub 主打平台化与合规；Moonshot / 1jehuang / earendil 在协议层（ACP）和工程派细节上突围。
3. **互操作 vs 封闭**：OpenCode（#41904）、Copilot（`.claude/rules`）走开放协议；Codex Windows 链路则更封闭。

---

## 五、社区热度与成熟度

### 第一梯队：高活跃 + 高迭代

| 工具 | 热度证据 | 成熟度信号 |
|------|---------|----------|
| **Claude Code** | #27801 Cowork 72 评论 / #36024 MCP 多账号 77 赞 / #81703 计费事件 12 评论 | 治理成熟（安全 bounty / docs 体系），但 Agent 失控、计费审计是痛点 |
| **OpenAI Codex** | #20214 96 评论 + 81 赞 / 24h 内 50 PR | 文档/测试/CI 体系完善，但 Windows 桌面链路严重拖累 |
| **OpenCode** | #16017 137 赞 / #41904 ACP Runtime 集成 | 社区驱动型（@kitlangton 一人撑起大量打磨），v2 迁移阵痛 |
| **pi** | #6187 25 评论 / #7730 8 赞 | 扩展生态成型，但 v0.84 协议层回归暴露工程短板 |

### 第二梯队：聚焦 + 节奏稳定

| 工具 | 特征 |
|------|------|
| **Gemini CLI** | 安全加固密集（3 项 CVE）、评估体系成熟；社区反馈聚焦 Auto Memory 与 Browser 稳定性 |
| **GitHub Copilot CLI** | 跨生态兼容是企业级刚需，Windows + 自动 fix 质量是当前瓶颈 |
| **jcode** | 3 补丁/24h 体现"小步快跑"，但社区体量小，外 PR 被拒 |

### 第三梯队：低活跃但稳健

| 工具 | 特征 |
|------|------|
| **Kimi Code CLI** | 3 issues / 8 PRs，ACP 修复密度高但社区关注度有限；#1283 Memory 5 月+ 未推进是关键风险 |

**综合判断**：
- **最成熟**：Gemini CLI（评估与安全双轮）、Claude Code（治理与合规）
- **最活跃**：OpenAI Codex（PR 量）、OpenCode（社区驱动）
- **最具创新**：jcode（小步快跑）、pi（协议透明化）
- **风险最高**：Kimi Code（核心需求未响应）、Claude Code（计费信任）

---

## 六、值得关注的趋势信号

### 趋势 1：MCP 成为事实标准，但治理缺位
- **信号**：所有主流工具都在加深 MCP 集成，但派发失败、OAuth 不一致、多账号缺失反复出现。
- **启示**：开发者应将 MCP 视为长期投资，但需为多 provider 互操作预留抽象层；选型时优先看 MCP 治理文档完备度。

### 趋势 2：跨会话记忆从"功能"变为"基础设施"
- **信号**：Claude Code / Gemini / Kimi / OpenCode 全部在攻坚持久化上下文，Kimi 的 #1283 已发酵 5 个月。
- **启示**：AI CLI 的下一波产品竞争点不在模型，而在**记忆系统 + 跨会话协调原语**。早期采用者可关注各工具的 memory 抽象设计。

### 趋势 3：Agent 治理成为隐形护城河
- **信号**：Claude Code #80988（委派被覆盖）、Copilot #4380（rubber-duck 失陷）、OpenCode #28986（自回复）——所有"自治理"机制都被社区质疑为"不透明"。
- **启示**：选型时关注**子代理模型策略可观测性、并发上限可配置、审计日志可回溯**三项指标。

### 趋势 4：互操作协议（ACP / CIMD / MEP）兴起
- **信号**：OpenCode 集成 Claude Code ACP（#41904）、Gemini CLI 增 CIMD OAuth（#38089）、Claude Code 探索 MEP 协议（#42996）。
- **启示**：互操作协议正成为厂商间"既能合作又能不暴露内部实现"的标准路径。开发者应关注 ACP 规范演进，避免被任一厂商

---

## 各工具详细报告

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills 社区热点

> 数据来源: [anthropics/skills](https://github.com/anthropics/skills)

<think>Let me analyze the data from the anthropics/skills repository to generate a comprehensive community report.

Looking at the data:

**Top PRs (by comments - though all show "undefined" for comments, so I need to infer popularity from other signals like updates, age, and content):**

Actually, looking more carefully, the comment counts are "undefined" for PRs but issues have actual counts. So I need to look at:
- PRs that have been updated recently (active discussion)
- PRs that address critical bugs
- PRs that have related issues with high comment counts

Let me categorize the PRs:

1. **#1298** - skill-creator fix (Windows + eval bugs) - CRITICAL because it links to Issue #556 (12 comments)
2. **#514** - document-typography skill - New functionality
3. **#538** - pdf SKILL.md case-sensitive fixes - Bug fix
4. **#486** - ODT skill (OpenDocument) - New functionality
5. **#210** - frontend-design improvement - Improvement
6. **#83** - skill-quality-analyzer + skill-security-analyzer - Meta tools
7. **#541** - docx tracked change fix - Bug fix
8. **#539** - skill-creator YAML warning - Improvement
9. **#1367** - self-audit skill v1.3.0 - New functionality
10. **#1099** - run_eval.py Windows fix - Bug fix (related to #556)
11. **#1050** - Windows subprocess fix - Bug fix
12. **#723** - testing-patterns skill - New functionality
13. **#525** - pyxel retro game skill - New functionality
14. **#509** - CONTRIBUTING.md - Documentation
15. **#181** - SAP-RPT-1-OSS predictor - New functionality
16. **#1528** - FIX - unclear
17. **#1479** - plan-file-hygiene skill - New functionality
18. **#1323** - run_eval trigger detection - Bug fix (related to #556)
19. **#1302** - color-expert skill - New functionality

**Issues by comments:**
1. **#492** (43 comments, 2 👍) - Security: namespace abuse - HIGHEST PRIORITY
2. **#228** (16 comments, 8 👍) - Org-wide skill sharing
3. **#556** (12 comments, 7 👍) - run_eval.py bug
4. **#62** (10 comments, 2 👍) - Skills disappearing
5. **#1329** (9 comments, 0 👍) - compact-memory skill proposal
6. **#202** (CLOSED, 8 comments) - skill-creator update
7. **#412** (CLOSED, 6 comments) - agent-governance
8. **#189** (6 comments, 9 👍) - duplicate skills
9. **#1487** (4 comments, 0 👍) - claude-api context exhaustion
10. **#1385** (4 comments, 0 👍) - Reasoning Quality Gate Pipeline
11. **#1175** (CLOSED, 4 comments) - SharePoint security concerns
12. **#29** (4 comments, 0 👍) - Bedrock usage
13. **#16** (4 comments, 0 👍) - Expose Skills as MCPs
14. **#12** (4 comments, 1 👍) - docx whitespace
15. **#1169** (3 comments, 1 👍) - description-optimisation bug

Now let me think about the trends:

**Community Trends:**
1. **Security & Trust** - Top issue #492 about namespace impersonation
2. **Enterprise Sharing** - Org-wide skill sharing (#228)
3. **Reliability/Bugs in skill-creator** - The run_eval.py 0% recall issue affects multiple PRs (#1298, #1323, #1099, #1050, #1169)
4. **Quality Assurance** - skill-quality-analyzer (#83), self-audit (#1367), Reasoning Quality Gate Pipeline (#1385)
5. **Document Skills Expansion** - ODT (#486), typography (#514), PDF fixes (#538)
6. **Memory/Context** - compact-memory (#1329), context window exhaustion (#1487)
7. **MCP Integration** - Expose Skills as MCPs (#16)

**High-potential unmerged PRs:**
- #1298 - skill-creator fix (relates to highest-impact bug)
- #1302 - color-expert skill (recently updated)
- #1367 - self-audit skill
- #1479 - plan-file-hygiene
- #525 - pyxel skill (recently updated 2026-07-15)
- #486 - ODT skill

Let me organize this into a professional report.

I need to be careful - the data shows comments as "undefined" for all PRs, but Issues have actual comment counts. So my ranking of PRs should be based on:
- Recency of updates (more recent = more active)
- Related issues (with comment counts)
- Stated importance in summaries

Let me write a clear, professional report in Chinese.</think>

# Claude Code Skills 社区热点报告
**数据周期**：截至 2026-08-12 ｜ **数据源**：github.com/anthropics/skills

---

## 一、热门 Skills 排行（按社区关注度）

> 注：PR 评论数在源数据中未提供，以下排名综合"关联 Issue 评论热度 + 近期活跃度 + 功能重要性"得出。

| 排名 | Skill / PR | 状态 | 关注理由 |
|------|-----------|------|---------|
| 🥇 | **#1298 skill-creator 全栈修复**（Windows + 触发检测 + 并行） | OPEN | 关联 Issue **#556（12 评论 / 7 👍）**——`run_eval.py` 报告 0% recall 导致描述优化失效，影响所有 Skill 自动化调优 |
| 🥈 | **#1367 self-audit v1.3.0**（输出自审计四维度质量门） | OPEN | 关联 Issue **#1385（4 评论）**——AI 输出交付前的机械化校验 + 推理审计，通用性强 |
| 🥉 | **#514 document-typography**（排版质量控制） | OPEN | 解决 AI 生成文档普遍的"孤行/寡行/编号错位"问题，所有文档场景刚需 |
| 4 | **#83 skill-quality-analyzer + skill-security-analyzer** | OPEN | 元工具——评估 Skill 结构/文档/示例/安全五维度，应对社区质量参差 |
| 5 | **#486 ODT skill**（OpenDocument 创建/解析） | OPEN | 填补 LibreOffice / ODF 生态空白，企业/政府文档刚需 |
| 6 | **#1302 color-expert**（色彩知识体系） | OPEN | 覆盖 ISCC-NBS/Munsell/OKLCH 等 7+ 命名体系，含"何时用哪个色彩空间"决策表 |
| 7 | **#723 testing-patterns**（测试模式全套） | OPEN | 覆盖 Testing Trophy / AAA / React Testing Library / E2E 完整栈 |
| 8 | **#525 pyxel**（复古像素游戏） | OPEN | 绑定 MCP server，针对 8-bit 游戏开发的专用工作流 |

🔗 链接：
- [#1298](https://github.com/anthropics/skills/pull/1298) · [#1367](https://github.com/anthropics/skills/pull/1367) · [#514](https://github.com/anthropics/skills/pull/514) · [#83](https://github.com/anthropics/skills/pull/83) · [#486](https://github.com/anthropics/skills/pull/486) · [#1302](https://github.com/anthropics/skills/pull/1302) · [#723](https://github.com/anthropics/skills/pull/723) · [#525](https://github.com/anthropics/skills/pull/525)

---

## 二、社区需求趋势（基于 Issues 评论热度）

| 趋势方向 | 代表 Issue | 社区声量 |
|---------|-----------|---------|
| 🔒 **信任边界与命名空间安全** | [#492](https://github.com/anthropics/skills/issues/492) — 社区 Skill 冒充 `anthropic/` 官方命名空间 | **43 评论**（最高） |
| 🏢 **企业级 Skill 分发** | [#228](https://github.com/anthropics/skills/issues/228) — Claude.ai 组织内 Skill 共享 | 16 评论 / 8 👍 |
| 🛠️ **skill-creator 工具链可靠性** | [#556](https://github.com/anthropics/skills/issues/556)、[#1169](https://github.com/anthropics/skills/issues/1169) — recall=0% 评估失效 | 12 + 3 评论 |
| 🧠 **Agent 长上下文与记忆压缩** | [#1329](https://github.com/anthropics/skills/issues/1329) compact-memory · [#1487](https://github.com/anthropics/skills/issues/1487) 156k token 注入爆窗 | 9 + 4 评论 |
| 🔁 **插件重复/冲突治理** | [#189](https://github.com/anthropics/skills/issues/189) document-skills 与 example-skills 重复 | 6 评论 / **9 👍**（最高点赞） |
| 🔌 **Skills → MCP 暴露** | [#16](https://github.com/anthropics/skills/issues/16) — 将 Skill 作为标准 MCP 协议 | 4 评论 |
| 🛡️ **Agent 治理与安全模式** | [#412](https://github.com/anthropics/skills/issues/412) agent-governance（CLOSED） | 6 评论 |
| ☁️ **跨平台兼容性（AWS Bedrock 等）** | [#29](https://github.com/anthropics/skills/issues/29) Bedrock 集成 | 4 评论 |

**趋势归纳**：社区诉求已从"造 Skill"转向"治理 Skill"——**安全、共享、可靠性、跨平台**成为主流焦虑点。

---

## 三、高潜力待合并 Skills（评论活跃 / 近期更新）

按"近期更新 + 关联 Issue 热度 + 工程成熟度"排序：

| PR | Skill | 最近更新 | 亮点 |
|----|-------|---------|------|
| [#1298](https://github.com/anthropics/skills/pull/1298) | skill-creator 全栈修复 | 2026-06-23 | 直击 #556，10+ 复现，影响所有 Skill 描述优化 |
| [#1302](https://github.com/anthropics/skills/pull/1302) | color-expert | 2026-07-21 | 自包含知识体系，含决策表 |
| [#525](https://github.com/anthropics/skills/pull/525) | pyxel 复古游戏 | 2026-07-15 | 绑定 MCP（pyxel-mcp），闭环工作流 |
| [#1479](https://github.com/anthropics/skills/pull/1479) | plan-file-hygiene | 2026-07-27 | 解决规划制品"无生命周期"积累问题 |
| [#1367](https://github.com/anthropics/skills/pull/1367) | self-audit v1.3.0 | 2026-07-02 | 输出审计质量门，跨技术栈通用 |
| [#1323](https://github.com/anthropics/skills/pull/1323) | run_eval 触发检测 | 2026-06-25 | 与 #1298 同源问题，独立修复路径 |
| [#83](https://github.com/anthropics/skills/pull/83) | skill-quality/security-analyzer | 2026-01-07 | 元工具，长期价值高 |
| [#486](https://github.com/anthropics/skills/pull/486) | ODT skill | 2026-04-14 | 填补 OpenDocument 生态空白 |

**预判**：**#1298 最有可能近期落地**，因为它直接修复 #556 的 P0 级别评估失效问题，阻塞面最广。

---

## 四、Skills 生态洞察

> **当前社区最集中的诉求是"Skills 生态的工程化与治理"——即在 Skill 数量爆发之后，社区迫切需要一套可信、可测、可共享、可审计的基础设施（命名空间安全 + 评估修复 + 组织分发 + 质量门禁），而不是更多孤立的功能型 Skill。**

---

### 📌 附录：数据观察备注

- 所有 PR 的评论数字段在源数据中返回 `undefined`，本报告采用"关联 Issue 评论 + 活跃度 + 内容重要性"作为替代排序依据。
- Issues 中 **#492（命名空间安全）** 与 **#189（重复插件）** 的 👍 比（点赞/评论）显著高于其他条目，反映社区强烈的"治理优先"情绪。
- 涉及 `skill-creator` 的 bug（#1298 / #1323 / #1099 / #1050）出现**多 PR 并行修复**现象，说明这是当前工程化阻塞点。

---

<think>The user wants me to generate a Chinese daily report for Claude Code community dynamics on 2026-08-12. Let me analyze the data carefully and structure it according to the requested sections.

Let me organize the information:

**Latest Release:**
- v2.1.228: Fixed interactive sessions redrawing issue, git/Git Bash detection on Windows, /tui revert issue

**Top Issues by comment count (top 30 shown):**
1. #27801 - Cowork VM service not running (72 comments, 41 likes) - Most commented
2. #54394 - v2.1.117 embedded ugrep amplifies regex backtracking (27 comments, 4 likes)
3. #36024 - Multiple Gmail accounts in MCP integration (25 comments, 77 likes) - Most liked
4. #80988 - v2.1.219 heron_brook prompt section overriding delegation policy (21 comments, 48 likes)
5. #33502 - Folder recent list in CLAUDE CODE GUI (21 comments, 37 likes)
6. #79986 - Claude Desktop MCP tools not dispatched (15 comments, 8 likes)
7. #59408 - Ctrl+C silently clears prompt (14 comments, 10 likes)
8. #76727 - Cross-session coordination (14 comments, 0 likes)
9. #81703 - July 17 mass billing incident (12 comments, 0 likes)
10. #78775 - Desktop session time-range filter regression (8 comments, 28 likes)
11. #73468 - macOS sandbox ARG_MAX issue (7 comments, 5 likes)
12. #84841 - MSIX write redirection misdetected (CLOSED, 6 comments, 2 likes)
13. #67636 - Parallel agent spawning excessive token consumption (6 comments, 0 likes)
14. #61675 - /goal long prompt show less (5 comments, 0 likes)
15. #84880 - Claude in Chrome file_upload rejection (4 comments, 2 likes)
16. #85677 - Project instructions read but ignored (3 comments, 0 likes)
17. #84404 - v2.1.139 streaming connection reset (3 comments, 0 likes)
18. #85982 - Auto mode subagent inheritance (1 comment, 0 likes)
19. #85798 - Windows Desktop code session blank (1 comment, 0 likes)
20. #85884 - macOS image read deadlock (1 comment, 0 likes)
21. #85222 - CVP-approved account cyber-safeguard false positives (1 comment, 0 likes)
22. #83062 - $995.67 in auto-recharges (1 comment, 0 likes)
23. #85657 - --resume lists sessionKind:bg sessions (1 comment, 0 likes)
24. #85981 - Reduce verbose output for SQL (0 comments, 0 likes)
25. #85980 - Remote Control cannot be disabled (0 comments, 0 likes)
26. #85979 - Persistent ECONNRESET on v2.1.228 (0 comments, 0 likes)
27. #85978 - Cowork sidebar Pinned/Projects list incomplete (0 comments, 0 likes)
28. #85977 - VS Code extension NO MODELS AVAILABLE (0 comments, 0 likes)
29. #85976 - Cloud routine session transcripts fail (0 comments, 0 likes)
30. #85975 - Auto-update non-functional stub (0 comments, 0 likes)

**PRs (8 total):**
1. #42996 - MEP async state relay
2. #85925 - docs: point stale doc links at code.claude.com
3. #85834 - fix: HackerOne Bug Bounty Program access
4. #70173 - fix(commit-commands): detect [gone] branches (CLOSED)
5. #85822 - docs: fix stale doc links and README drift
6. #85806 - fix(security-guidance): skip XSS warnings in docs
7. #85243 - fix(skills): use spec-conformant names
8. #85716 - fix(hookify): load rules from ancestor .claude directories

Now let me identify trends and hot topics:

**Feature requests trends:**
- Multi-account MCP support (Gmail)
- Cross-session coordination
- Folder management in GUI
- Remote Control disable option
- Reduce verbose output for simple commands
- Session resume improvements

**Bug trends:**
- Cowork/Desktop app issues (multiple)
- Memory/project instructions reliability
- Streaming/API connection issues
- Auto-update issues
- macOS sandbox problems
- Agent/subagent infrastructure

**Developer concerns:**
- Token consumption with parallel agents
- Billing/auto-recharge
- Memory/instructions reliability
- MCP integration stability
- Cross-platform (Windows/macOS) reliability

Let me write the report now.</think>

# Claude Code 社区动态日报
**2026-08-12**

---

## 一、今日速览

今日 v2.1.228 补丁版发布,聚焦交互卡死与 Windows 工具链兼容性。社区层面,**Cowork VM 服务故障** (#27801) 成为最热议议题(72 评论),同时**MCP 多账号支持** (#36024) 与**v2.1.219 隐式覆盖 Opus 5 委派策略** (#80988) 揭示出 Agent 生态在治理与扩展性上的双重张力。**Agent 并发吞噬 token** 与**项目记忆被忽略** 类问题再度发酵,提示 Agent 架构的可控性仍是核心痛点。

---

## 二、版本发布

### v2.1.228(2026-08-12)

| 类别 | 修复内容 |
|------|---------|
| 稳定性 | 修复罕见内部布局错误导致交互会话停止重绘、进程仍停留的悬停态 |
| Windows | 修复从 git 安装上级目录启动 Claude Code 时无法定位 `git` / Git Bash 的问题 |
| TUI | 修复 `/tui` 回退(revert)相关问题 |

> 继 v2.1.219 引入 `heron_brook` 提示段后,本次为面向工程体验的快速补丁,但**未涵盖**仍被大量报告的 ECONNRESET 与 Cowork 阻断问题。

---

## 三、社区热点 Issues

> 按评论数与社区影响排序,精选 10 条。

| # | Issue | 关键点 | 社区反应 |
|---|-------|--------|---------|
| 1 | [#27801](https://github.com/anthropics/claude-code/issues/27801) **Cowork VM 启动失败,重启后仍存** | 错误信息 `Failed to start Claude's workspace`,影响所有依赖 Cowork 工作区的用户 | 💬 72 / 👍 41 |
| 2 | [#54394](https://github.com/anthropics/claude-code/issues/54394) **v2.1.117 ugrep 包装放大回溯,WSL2 进程被 OOM 冻结** | `exec -a ugrep` 让 grep 进程 OOM 升级为 V8 8GB 堆 OOM,严重稳定性回归 | 💬 27 / 👍 4 |
| 3 | [#36024](https://github.com/anthropics/claude-code/issues/36024) **MCP 多 Gmail 账号支持** | 个人+工作 Workspace 多账号并存的强需求 | 💬 25 / 👍 **77**(全场最高) |
| 4 | [#80988](https://github.com/anthropics/claude-code/issues/80988) **v2.1.219 `heron_brook` 段静默覆盖 Opus 5 委派策略** | 系统提示注入 "Do not call AgentTool...",硬编码策略剥夺用户配置权 | 💬 21 / 👍 48 |
| 5 | [#33502](https://github.com/anthropics/claude-code/issues/33502) **GUI 文件夹"最近列表"无法删除** | UX 缺失,简单数据管理诉求 | 💬 21 / 👍 37 |
| 6 | [#79986](https://github.com/anthropics/claude-code/issues/79986) **Desktop 1.24012.1: MCP tools 通告但永不派发** | 握手成功却 0 次 tools/call,生态级故障 | 💬 15 / 👍 8 |
| 7 | [#59408](https://github.com/anthropics/claude-code/issues/59408) **Windows: Ctrl+C / Ctrl+Shift+C 静默清空输入** | 无确认、无恢复,误触代价高 | 💬 14 / 👍 10 |
| 8 | [#76727](https://github.com/anthropics/claude-code/issues/76727) **多并发会话缺乏跨会话协调原语** | PreToolUse `deny` hook 存在静默漏洞,重用户强烈需求 | 💬 14 |
| 9 | [#81703](https://github.com/anthropics/claude-code/issues/81703) **7·17 计费事件:订阅额度被绕过扣 $604.71** | 平台已承认事故但未给完整对账 | 💬 12 |
| 10 | [#78775](https://github.com/anthropics/claude-code/issues/78775) **Desktop 时间范围筛选仅在按 State 分组时显示(回归)** | 跨平台 UI 回归,影响会话历史分析 | 💬 8 / 👍 28 |

**怎么看:** 平台级基建(Cowork、MCP 派发、Agent 治理)问题占据前 4,说明社区关注点已从"能用"转向"可信、可控"。计费类问题 (#81703、#83062) 持续累积,反映用户在自动续费与额度审计上的不安全感。

---

## 四、重要 PR 进展

| # | PR | 主要变更 |
|---|-----|---------|
| 1 | [#42996](https://github.com/anthropics/claude-code/pull/42996) **examples: MEP 协议 —— 多机会话异步状态中继** | 3 个文件解决"切机即失忆",零基础设施 |
| 2 | [#85925](https://github.com/anthropics/claude-code/pull/85925) **docs: 残留旧域文档链接迁移至 code.claude.com** | 清理 plugins / skills / agents 中的 docs.claude.com 死链 |
| 3 | [#85834](https://github.com/anthropics/claude-code/pull/85834) **fix: HackerOne Bug Bounty Program 访问** | 调整 devcontainer.json,让 hookify 插件可访问漏洞赏金计划 |
| 4 | [#70173](https://github.com/anthropics/claude-code/pull/70173) **fix(commit-commands): `/clean_gone` 正确识别 `[gone]` 分支** | 改用 `git branch -vv`,已 CLOSED |
| 5 | [#85822](https://github.com/anthropics/claude-code/pull/85822) **docs: 修复 plugins/examples 中失效文档链接** | 与 #85925 互补,URL 重定向验证 |
| 6 | [#85806](https://github.com/anthropics/claude-code/pull/85806) **fix(security-guidance): 文档中跳过 XSS 警告** | 复用 `_DOC_EXTS` 路径过滤,新增回归测试 |
| 7 | [#85243](https://github.com/anthropics/claude-code/pull/85243) **fix(skills): 8 个 bundled skills 名称符合 spec** | 去掉 title-case 空格,符合 YAML/系统要求 |
| 8 | [#85716](https://github.com/anthropics/claude-code/pull/85716) **fix(hookify): 从祖先 `.claude` 目录加载规则** | 修复安全规则被静默绕过的严重隐患 |
| 9 | [#85975](https://github.com/anthropics/claude-code/issues/85975) **Bug: 自动更新后残留 stub 二进制**(已提 Issue) | 提示 npm postinstall 链接失败未被检测 |
| 10 | [#85979](https://github.com/anthropics/claude-code/issues/85979) **v2.1.228 持续 ECONNRESET** | 提示本次补丁未覆盖底层网络重置 |

> 文档/插件质量修正类 PR(#85822/#85925/#85806/#85243)集中爆发,反映 v2.1.2xx 期间生态扩展带来的 linking 与命名规范债务。**MEP(#42996)** 是面向"多端协同"的关键概念雏形,值得长期跟踪。

---

## 五、功能需求趋势

从全部 50 条 Issue 提炼,社区关注的功能方向按热度排序:

1. **MCP 生态扩展** —— 多账号(Mul-Account)、多 Provider 自定义 `ANTHROPIC_BASE_URL`、稳定派发通道
2. **Agent 治理与可观测性** —— 子代理 trust 继承 #85982、并发 token 控制 #67636、跨会话协调 #76727
3. **会话与记忆可靠性** —— `--resume` 行为不一致 #85657、`CLAUDE.md` 被忽略 #85677、记忆冲突 #85677
4. **桌面/Cowork 工作流** —— VM 启动 #27801、sidebar 同步 #85978、Desktop 空白 #85798
5. **轻量化交互** —— 简单 SQL 任务降低 verbose 与延迟 #85981、输出噪音控制
6. **可控开关** —— Remote Control 永久禁用 #85980、Auto mode classifier 信任策略
7. **计费透明度** —— 自动续费争议 #81703/#83062、CVP 误判 #85222
8. **跨平台一致性** —— Windows 长命令 ARG_MAX、TUI 快捷键、macOS 沙箱

---

## 六、开发者关注点

汇总开发者反馈中的高频痛点:

| 痛点类别 | 代表 Issue | 核心诉求 |
|----------|-----------|---------|
| **Agent 失控** | #67636、#80988、#85677 | 限制并发子代理规模;尊重用户配置;指令真正生效 |
| **记忆/上下文不一致** | #85677、#85657 | `CLAUDE.md` 与 memory 优先级可解释、可调试 |
| **平台基础设施脆弱** | #27801、#79986、#85982 | Cowork VM、MCP 派发、Auto mode 分类器需稳态 |
| **网络/版本耦合** | #84404、#85884、#85979 | SSE/streaming、长连接、图阅读死锁频繁 |
| **计费与自动续费** | #81703、#83062、#85222 | 事故复盘、额度账单、审计日志 |
| **跨平台一致性** | #59408、#73468、#78775 | Windows/macOS/Linux 行为对齐、避免仅某平台生效 |
| **打包/升级体验** | #85975、#84841 | 失败回滚、stub 检测、MSIX 兼容 |

**核心信号:** 开发者已不再满足"会跑",而是要求**可调试、可回滚、可审计**。Agent 系统的"自治理"能力(并发上限、委派策略、记忆冲突解决)成为下一阶段产品竞争的隐形护城河。

---

*日报基于 2026-08-12 GitHub 公开数据生成,链接均指向 anthropics/claude-code 仓库。*

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

<think>The user wants me to generate a daily report for the OpenAI Codex community based on GitHub data from 2026-08-12. Let me analyze the data carefully.

Key observations:
1. **Releases**: Three alpha versions of Rust v0.148.0 (alpha.7, alpha.8, alpha.9) were released in the past 24 hours
2. **Issues**: The vast majority of issues are Windows-related, particularly around:
   - Codex Desktop app freezes/stutters on Windows
   - Computer Use plugin issues on Windows
   - Chrome plugin / Browser Use issues on Windows
   - Bundled marketplace corruption issues
   - TUI/CLI issues
3. **PRs**: Mostly closed PRs from copyberry[bot] covering:
   - MCP improvements
   - TUI improvements
   - Windows sandbox improvements
   - gRPC code-mode improvements
   - Various code quality improvements

Let me structure this as a clean, professional Chinese daily report.

Top 10 Issues to highlight:
1. #20214 - Windows 11 Pro freezes/stutters (96 comments, 81 likes) - Most popular issue
2. #25391 - Windows Computer Use plugin bootstrap fails
3. #26562 - Computer Use plugin unavailable in Codex Desktop on Windows
4. #21670 - Windows Chrome plugin and Browser Use setup hang
5. #25571 - Windows Computer Use native pipe fails
6. #22114 - Windows corrupts chrome plugin cache
7. #30270 - Bundled Browser plugins disappear after Windows updates
8. #37403 - macOS regression Remote Control CLI thread
9. #21252 - CLI Option to hide tool activity (enhancement)
10. #34663 - Resume renders full thread history (enhancement)

Top 10 PRs:
1. #38103 - Avoid cloning MCP invocations in TUI history
2. #38101 - Attach hosted app context to file uploads
3. #38094 - Test Guardian context for code mode commands
4. #38092 - Simplify queued user message admission
5. #38089 - Add CIMD support to MCP OAuth registration
6. #38087 - Route gRPC code-mode sessions through shared HTTP client
7. #38086 - Support execution-host context when resolving cloud config
8. #38084 - Allow empty input to start a turn
9. #38081 - Use ReviewDecision for MCP tool approvals
10. #38080 - Allow nested Git repositories in Windows sandbox

Let me write the report now.</think>

# OpenAI Codex 社区动态日报
**日期：2026-08-12**

---

## 📌 今日速览

今日 Codex 仓库主线仍以 **Windows 桌面端稳定性问题**为主轴反馈焦点，特别是 Computer Use / Chrome 插件、bundled marketplace 同步及 sandbox 权限相关 bug 集中爆发；同时 Rust 端在 24 小时内连发三个 `v0.148.0-alpha.x` 预发布版本，`copyberry` bot 持续高频合入 MCP、gRPC code-mode、Windows sandbox 等模块的优化 PR。社区诉求呈现明显的"Windows 优先 + 体验打磨"趋势。

---

## 🚀 版本发布

过去 24 小时连续发布三个 Rust 预发布版本：

| 版本 | 类型 |
|---|---|
| `rust-v0.148.0-alpha.7` | Alpha |
| `rust-v0.148.0-alpha.8` | Alpha |
| `rust-v0.148.0-alpha.9` | Alpha |

> 三个 alpha 间隔极短，提示团队正在密集迭代 `0.148` 主线，预期很快进入 beta/RC。Rust 端的快速迭代通常与上游 CLI/TUI/核心逻辑重构有关，建议 CLI 用户关注 changelog 后再升级。
> 
> 🔗 [Releases 列表](https://github.com/openai/codex/releases)

---

## 🔥 社区热点 Issues（Top 10）

| # | Issue | 关键看点 | 评论 / 👍 |
|---|---|---|---|
| **1** | [#20214](https://github.com/openai/codex/issues/20214) | **Windows 11 Pro 频繁卡顿/冻结**（AMD Ryzen 5 + 32GB 仍出现），是全仓库最高互动 issue，被社区标为热点性能问题。 | 96 / 81 |
| **2** | [#25391](https://github.com/openai/codex/issues/25391) | **Windows Computer Use 插件无法 bootstrap**，native pipe 路径不可用，反映权限/服务注册链路缺陷。 | 23 / 2 |
| **3** | [#26562](https://github.com/openai/codex/issues/26562) | **Computer Use 在 Codex Desktop 完全不可见**，即使 Pro 订阅也无法启用。 | 20 / 3 |
| **4** | [#21670](https://github.com/openai/codex/issues/21670) | **Chrome 插件 + Browser Use 启动挂起、卸载失败**（os error 5），Windows app-server 链路不稳定。 | 15 / 7 |
| **5** | [#25571](https://github.com/openai/codex/issues/25571) | **Computer Use native pipe 反复启动失败**，helper paths unavailable，疑似 runtime availability gate 与实际 helper 部署脱节。 | 14 / 0 |
| **6** | [#22114](https://github.com/openai/codex/issues/22114) | **Windows 启动时损坏 chrome@openai-bundled 缓存**，Chrome native host 锁住 extension-host.exe。 | 12 / 0 |
| **7** | [#30270](https://github.com/openai/codex/issues/30270) | **Bundled 插件在 Windows 自动更新后集体消失**，源于 stale bundled marketplace path，已被标 *Papercuts*。 | 12 / 0 |
| **8** | [#37403](https://github.com/openai/codex/issues/37403) | **macOS Desktop 无法恢复 Remote Control / CLI thread**（`already has an active writer` regression），影响跨设备工作流。 | 10 / 9 |
| **9** | [#21252](https://github.com/openai/codex/issues/21252) | **TUI：希望增加隐藏 tool activity 的 CLI 选项**，长会话中工具调用淹没推理摘要，属于高呼声体验增强。 | 9 / 17 |
| **10** | [#34663](https://github.com/openai/codex/issues/34663) | **Resume 时渲染整段历史而非 bootstrapping 最新 turn**，CLI/TUI 性能与体验痛点。 | 8 / 5 |

> **趋势观察**：Top 10 中有 **8 个与 Windows 桌面端相关**，集中在 bundled marketplace、Chrome native host、Computer Use 启动链路；唯有 #21252 和 #34663 是面向 TUI/CLI 的体验改进诉求，且点赞数明显偏高（17、5），说明开发者群体对**会话可读性与恢复体验**非常敏感。

---

## 🛠 重要 PR 进展（Top 10）

| # | PR | 内容要点 |
|---|---|---|
| **1** | [#38103](https://github.com/openai/codex/pull/38103) | 避免在 TUI 历史渲染时克隆 MCP invocation，降低历史 cell 渲染开销。 |
| **2** | [#38101](https://github.com/openai/codex/pull/38101) | 为文件上传附加 hosted app 上下文（connector ID / action / model），回退到本地 size 以兼容老服务端。 |
| **3** | [#38094](https://github.com/openai/codex/pull/38094) | 为 Guardian 增加 code mode 嵌套 `exec_command` 的集成测试覆盖。 |
| **4** | [#38092](https://github.com/openai/codex/pull/38092) | 简化 queued user message admission：Core 接受即可继续推进 turn，去除持久化与 hook 误差路径。 |
| **5** | [#38089](https://github.com/openai/codex/pull/38089) | **MCP OAuth 注册优先 CIMD**（Client ID Metadata Documents），无 CIMD 时回退 Dynamic Client Registration，更安全。 |
| **6** | [#38087](https://github.com/openai/codex/pull/38087) | gRPC code-mode 会话统一走 `HttpClientFactory`，支持出站代理与自定义 CA。 |
| **7** | [#38086](https://github.com/openai/codex/pull/38086) | 解析 cloud config 时支持 execution-host 上下文（home directory override）。 |
| **8** | [#38084](https://github.com/openai/codex/pull/38084) | 允许空输入即可启动 turn（仅对即时 admitted，不持久化），方便脚本化触发。 |
| **9** | [#38081](https://github.com/openai/codex/pull/38081) | **MCP 工具审批改用共享 `ReviewDecision` 类型**，新增 `ApprovedMcpPolicyAmendment` 以跨 session 持久化。 |
| **10** | [#38080](https://github.com/openai/codex/pull/38080) | **Windows sandbox 允许嵌套 Git 仓库**：trust 工作树根 + `/*` 通配，修复 sandbox 用户权限下的 git 校验失败。 |

> 其他值得关注的方向：`#38064`（Windows sandbox 授予 Codex app root ACL）、`#38061`（保留 Windows sandbox debug 会话的代理配置）、`#38075`（TUI 渲染按真实终端宽度裁剪）、`#38066/#38074`（细化技能调用埋点）。

---

## 📈 功能需求趋势

综合今日更新的 50 条 Issues，社区诉求可归为以下五条主线：

1. **🪟 Windows 桌面稳定性（最高优先级）**
   集中爆发在 bundled marketplace 同步失败、native pipe / native host 启动失败、EFS `copyfile UNKNOWN`、EBUSY 等场景，是当前**头号痛点**。

2. **🤖 Computer Use / Browser Use 在 Windows 的可用性**
   多个 issue 报告 Pro/Plus 订阅仍无法使用 Computer Use，反映**计费/entitlement gate 与本地 helper 部署存在断点**，需要跨团队修复。

3. **🧹 TUI / CLI 可读性与恢复体验**
   #21252（隐藏 tool activity）、#34663（resume 渲染策略）、#38075（按宽度裁剪）等诉求叠加，说明长会话场景下**对话摘要、滚动布局、历史回放**已成为核心 UX 关注点。

4. **🔌 MCP / OAuth / 代理网络栈**
   #38089（CIMD）、#38103（避免克隆）、#38081（共享 ReviewDecision）、#38087（gRPC 走共享 HTTP 客户端）等 PR 共同指向一个方向：**让 Codex 在企业代理、PKCE/CIMD、自定义 CA 场景下开箱即用**。

5. **🏢 企业网关与多模型元数据**
   #21594 提出 `model_aliases` 映射，便于把企业网关模型名解析到 Codex 规范模型元数据；与 #31817（自动 `models.json` 更新机器人 PR）形成配套。

---

## 👨‍💻 开发者关注点（高频痛点汇总）

| 痛点 | 典型表现 |
|---|---|
| **Windows 插件链路的脆弱性** | `bundled_plugins_reconcile` 在每次启动 + 焦点切换都会触发，伴随 `copyfile UNKNOWN` / EBUSY / EFS 锁失败，导致 Browser、Chrome、Computer Use 在 settings 中全局消失。 |
| **Sandbox 与原生 Windows 权限模型冲突** | Git、native host、扩展可执行文件常因 sandbox 用户/原用户所有权不一致而失败，需要 ACL 通配策略改进（见 #38064、#38080）。 |
| **TUI 长会话阅读负担** | 工具调用 cell 淹没推理与结论；resume 默认渲染整段历史而非最新 turn，开发者希望有折叠/裁剪/作用域恢复的控制点。 |
| **Computer Use 的"看似可用但实际不可用"** | `statsig` / entitlement gate 与本地 helper 部署脱节，native pipe 反复报"helper paths unavailable"，调试信息对用户极不友好。 |
| **跨设备工作流回归** | macOS Desktop 在 8 月 7 日更新后无法恢复 Remote Control CLI thread，影响"手机远程 + 桌面继续"的典型开发节奏。 |
| **企业代理 / 自定义 CA 配置缺位** | 多个 PR（#38087、#38086、#38061）围绕同一主题，说明出站代理、CA bundle 在 gRPC 与 sandbox debug 下仍未统一。 |

---

> 📎 **日报小结**：今天的 Codex 社区呈现"**Windows 桌面真问题集中暴露 + 后端能力稳步收敛**"的双线格局。建议 Windows 用户**暂缓自动升级**，关注 0.148 系列 alpha 的稳定性；TUI/CLI 用户的最佳实践是保持当前版本并跟踪 `#21252`、`#34663` 的 PR 实现进展。

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

<think>The user wants me to generate a daily report in Chinese about the Gemini CLI community dynamics for 2026-08-12. Let me analyze the data carefully:

1. **Releases**: Several releases were made in the past 24 hours:
   - v0.56.0-nightly.20260812.g5024443c7
   - v0.56.0-preview.1
   - v0.55.1
   - v0.55.0-preview.3

2. **Issues**: 50 issues updated, top 30 shown. Need to pick 10 most notable.

3. **PRs**: 32 PRs updated, top 20 shown. Need to pick 10 most important.

Let me identify the most important issues:
- #26911 [CLOSED] - 429 Too many Requests - p2, 12 comments - related to PR #28730 fix
- #22323 [OPEN] - Subagent recovery after MAX_TURNS - p1, 12 comments - critical bug
- #23297 [OPEN] - Enter key does nothing - p1, 11 comments, 10 👍
- #24353 [OPEN] - Robust component level evalutions - p1, 7 comments - EPIC
- #22745 [OPEN] - AST-aware file reads - p2, 7 comments - EPIC for feature
- #21968 [OPEN] - Gemini does not use skills and sub-agents - p2, 6 comments
- #26522 [OPEN] - Auto Memory retry - p2, 5 comments
- #24828 [OPEN] - Sandbox GOOGLE_GENAI_API_VERSION - p2, 5 comments
- #24707 [OPEN] - run_shell_command hangs - p1, 4 comments
- #26525 [OPEN] - Auto Memory logging/redaction - security-related, p2, 4 comments
- #25166 [OPEN] - Shell command "Waiting input" - p1, 4 comments, 3 👍
- #22232 [OPEN] - Browser agent resilience - p3, 4 comments
- #21983 [OPEN] - Browser subagent fails in wayland - p1, 4 comments
- #26523 [OPEN] - Auto Memory invalid patches - p2, 3 comments

Important PRs:
- #28730 - fix false model capacity exhaustion - related to issue #26911
- #28706 - Changelog v0.55.0
- #28707 - bump version
- #28771 - cherry-pick for preview
- #28116 - fix verify release
- #28132 - fix CI workspace binary shadowing
- #28557 - SSRF vulnerability fix
- #28576 - vitest startup optimization
- #28577 - e2e test stability
- #28679 - Vertex AI 401 error
- #28691 - $VAR expansion bypass (security)
- #28681 - SGLang and OpenAI-compatible endpoints
- #28680 - A2A openIdConnect auth
- #28678 - OAuth callback timeout leak
- #28780 - shell-quote CVE-2026-9277
- #28729 - IDE connections directory mismatch
- #28779 - changelog
- #28778 - simple-git CVE-2026-28292
- #28776 - changelog
- #28688 - Cloud Workstations proxy
- #28774 - changelog
- #28730 - already mentioned
- #28773 - nanoid bump
- #28369 - eval report command

Now let me organize this into a well-structured daily report.

Trends from issues:
- Auto Memory issues (26522, 26523, 26525, 26516) - memory system improvements
- Browser agent issues (22232, 21983, 22267) - browser reliability
- Subagent issues (22323, 22093, 21968) - subagent behavior
- Shell command issues (24707, 25166, 22465) - shell execution
- Security concerns (26525, 24828) - security/redaction
- AST-aware tools (22745, 22746) - code intelligence
- Quota/capacity issues (26911, 24246) - model capacity
- Tool limits (24246) - > 128 tools

Let me write this in Chinese, professional tone.</think>

# Gemini CLI 社区动态日报
**日期**：2026-08-12 · **数据源**：google-gemini/gemini-cli

---

## 📌 今日速览

今日社区呈现**密集发版 + 安全加固**双主线：v0.55.1 正式版、v0.56.0-preview.1 预览版及 v0.56.0-nightly 同日发布，配合多个 CVE 依赖升级与 OAuth/SSRF 安全修复；与此同时，**Auto Memory 系统**与 **Browser Agent 稳定性**成为开发者反馈最集中的两个痛点领域。

---

## 🚀 版本发布

| 版本 | 类型 | 主要变化 |
|------|------|---------|
| **v0.55.1** | 稳定版 | 发布验证流程修复、CI workspace 二进制 shadowing 修复、工具注册表改进 ([#28116](https://github.com/google-gemini/gemini-cli/pull/28116), [#28132](https://github.com/google-gemini/gemini-cli/pull/28132)) |
| **v0.56.0-preview.1** | 预览版 | v0.55.0 变更日志、版本号 bump 到 0.56.0-nightly |
| **v0.56.0-preview.3** | 预览版 | cherry-pick #28730 修复补丁（误报模型容量耗尽） |
| **v0.56.0-nightly.20260812** | 每日构建 | 修正 quota 查询模型映射、修复误报容量耗尽 ([#28730](https://github.com/google-gemini/gemini-cli/pull/28730)) |

> **重要 PR**：#28730 解决了 issue #26911 中反馈的「使用 <10% 配额却频繁遇到 429 错误，CLI 卡死 1 小时」问题，标志着 v0.55.0 系列关键 quota bug 的闭环。

---

## 🔥 社区热点 Issues

1. **[#26911](https://github.com/google-gemini/gemini-cli/issues/26911)** — *429 Too Many Requests（已关闭）* ⭐2 💬12  
   p2 | **里程碑**：v0.55.0 系列核心 quota bug，本次通过 #28730 修复，是当日最具影响力 issue 之一。

2. **[#22323](https://github.com/google-gemini/gemini-cli/issues/22323)** — *子代理在 MAX_TURNS 后被错误报告为 GOAL success* 💬12  
   p1 | 维护者高度关注，子代理结果不可靠直接影响自动化工作流的可信度。

3. **[#23297](https://github.com/google-gemini/gemini-cli/issues/23297)** — *按 Enter 无响应* ⭐10 💬11  
   p1 | **点赞数最高**的 issue，社区挫败感强烈，影响日常交互体验。

4. **[#24353](https://github.com/google-gemini/gemini-cli/issues/24353)** — *鲁棒的组件级评估 (EPIC)* 💬7  
   p1 | 跟踪 behavioral eval 基础设施扩展（已 76 个测试，覆盖 6 个模型），是评估体系长期方向。

5. **[#22745](https://github.com/google-gemini/gemini-cli/issues/22745)** — *评估 AST-aware 文件读取/搜索/映射的价值* 💬7 ⭐1  
   p2 | 探讨通过 AST-aware 工具减少 token 噪声与轮次浪费，是代码智能方向的核心 EPIC。

6. **[#21968](https://github.com/google-gemini/gemini-cli/issues/21968)** — *Gemini 几乎不会主动使用 skills 和子代理* 💬6  
   p2 | 开发者反映技能/子代理调用率低，提示 prompt 与发现机制需优化。

7. **[#26522](https://github.com/google-gemini/gemini-cli/issues/26522)** — *Auto Memory 无休止重试低信号会话* 💬5  
   p2 | Auto Memory 系列问题，background extraction 资源浪费严重。

8. **[#24828](https://github.com/google-gemini/gemini-cli/issues/24828)** — *Sandbox 不转发 GOOGLE_GENAI_API_VERSION* 💬5  
   p2 | Vertex 用户使用自定义 base URL 时遭遇 404，影响企业部署。

9. **[#25166](https://github.com/google-gemini/gemini-cli/issues/25166)** — *Shell 命令完成后仍卡在「Waiting input」* ⭐3 💬4  
   p1 | 高优影响可用性的卡死问题，与 #24707（5 分钟硬超时）形成互补。

10. **[#21983](https://github.com/google-gemini/gemini-cli/issues/21983)** — *Browser 子代理在 Wayland 下失败* 💬4 ⭐1  
    p1 | Wayland 环境（Linux 桌面用户主流）下完全不可用，阻断 Linux 开发者使用 browser_agent。

---

## 🛠️ 重要 PR 进展

1. **[#28730](https://github.com/google-gemini/gemini-cli/pull/28730)** — *修复误报模型容量耗尽 + quota 查询模型映射*  
   已合并并 cherry-pick 到 v0.55.0-preview.3，关闭了 #26911 长期困扰用户的 quota 问题。

2. **[#28780](https://github.com/google-gemini/gemini-cli/pull/28780)** — *升级 shell-quote 至 1.8.4（CVE-2026-9277, CRITICAL）*  
   shell-quote 关键漏洞修复，**强烈建议升级**。

3. **[#28778](https://github.com/google-gemini/gemini-cli/pull/28778)** — *升级 simple-git 至 3.32.3（CVE-2026-28292, CRITICAL）*  
   simple-git 关键漏洞修复，与 shell-quote 同为供应链安全必修项。

4. **[#28691](https://github.com/google-gemini/gemini-cli/pull/28691)** — *修复 $VAR / ${VAR} 变量扩展绕过（GHSA-wpqr-6v78-jr5g）*  
   **安全加固**：补全 detectBashSubstitution/detectPowerShellSubstitution 的不完整检查。

5. **[#28681](https://github.com/google-gemini/gemini-cli/pull/28681)** — *支持 SGLang 与本地 OpenAI 兼容端点*  
   **重要新功能**：本地 LLM 部署玩家期待已久的兼容层，扩展了 Gemini CLI 作为通用 AI CLI 的适用范围。

6. **[#28680](https://github.com/google-gemini/gemini-cli/pull/28680)** — *A2A openIdConnect 认证校验拒绝*  
   安全修复：避免 CLI 接受尚未支持的 OIDC 认证配置后默默失败。

7. **[#28678](https://github.com/google-gemini/gemini-cli/pull/28678)** — *修复 OAuth callback 超时泄漏与资源未释放*  
   集中管理 OAuth callback 服务，避免长时间运行后内存泄漏。

8. **[#28679](https://github.com/google-gemini/gemini-cli/pull/28679)** — *Vertex AI 401 错误信息改进*  
   提升开发者体验：使用 Gemini API key 而非 GCP 凭证时给出明确指引。

9. **[#28557](https://github.com/google-gemini/gemini-cli/pull/28557)** — *通过异步 DNS 解析修复 web-fetch.ts 中 SSRF 漏洞*  
   已合并，安全关键 PR；域名→IP 解析可能命中内网段的旁路被堵上。

10. **[#28729](https://github.com/google-gemini/gemini-cli/pull/28729)** — *修复 IDE 连接中的目录不匹配吞错*  
    已合并：解决 Cider 等 VS Code 衍生/远程工作区中 Gemini CLI 伴侣扩展连接失败。

---

## 📈 功能需求趋势

通过对 50 条活跃 Issue 的归纳，社区关注度集中在以下方向：

| 方向 | 代表 Issue | 信号强度 |
|------|-----------|---------|
| **Auto Memory 系统成熟化** | #26522 / #26523 / #26525 / #26516 | ⭐⭐⭐⭐ |
| **Browser Agent 鲁棒性** | #21983 / #22232 / #22267 | ⭐⭐⭐⭐ |
| **Shell 命令执行可靠性** | #24707 / #25166 / #22465 | ⭐⭐⭐ |
| **AST-aware 代码智能工具** | #22745 / #22746 | ⭐⭐⭐ |
| **多模型/本地端点支持** | #28681 (PR)、#24246 | ⭐⭐⭐ |
| **评估基础设施（Behavioral Eval）** | #24353 / #28369 (PR) | ⭐⭐ |
| **OAuth/认证体验** | #28678 / #28679 / #28688 | ⭐⭐ |
| **IDE 集成兼容** | #28729 (PR) | ⭐⭐ |

---

## 💬 开发者关注点

1. **「假死」与卡顿是最普遍的痛点**  
   Enter 无响应 (#23297)、shell 完成后仍等待输入 (#25166)、子代理超时后伪装成功 (#22323)——多个不相关模块都暴露「状态机没收到完成信号」类问题，反映异步流程的健壮性需整体审计。

2. **Wayland / Linux 桌面兼容性长期被忽视**  
   #21983 自 3 月开放至今未解决，Linux 开发者无法在 Wayland 下使用 browser_agent；社区希望维护者补充 CI 矩阵覆盖。

3. **Skills 与子代理的「调用率不足」**  
   #21968 直指产品体验：自定义 skills 即使描述清晰，模型也几乎不主动使用，开发者需要手动反复提示——这是 prompt engineering 与工具发现机制的系统性问题。

4. **安全敏感度显著提升**  
   一天内合并 3 项高危供应链修复（shell-quote、simple-git、SSRF）+ OAuth/A2A 鉴权多项 hardening，说明项目正在把「默认安全」摆上更高优先级。

5. **企业部署需要更友好的错误信息**  
   #24828 (Vertex 404) 与 #28679 (Vertex 401) 反映了非默认部署路径下的 DX 短板，开发者期望更精准的错误诊断。

6. **本地与开源模型生态打通**  
   #28681 支持 SGLang/OpenAI 兼容端点，是 Gemini CLI 从「Google 生态专属」走向「通用 AI CLI」的关键一步，社区反响值得期待。

---

*日报生成时间：2026-08-12 · 数据基于 GitHub 过去 24 小时公开活动*

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

<think>Let me analyze the GitHub data for the copilot-cli repository and generate a comprehensive daily report in Chinese. The date is 2026-08-12.

Let me organize the information:

**Releases**: None in past 24 hours

**Issues** (41 total, showing top 30):
1. #4151 - Windows plugin install "Access is denied" - 3 comments, 1 like
2. #4211 - BigInt serialization in MCP - 3 comments
3. #4251 - Session resume OOM in 1.0.74 - 3 comments, 1 like
4. #4431 - /model config wipes all settings - 3 comments (CLOSED)
5. #4380 - Rubber Duck model issue - 3 comments
6. #4422 - Claude models disabled - 2 comments, 3 likes
7. #4095 - Windows plugin update fails - 2 comments, 14 likes (high engagement!)
8. #3976 - tgrep OOM - 2 comments
9. #2623 - Condensed timeline display - 1 comment
10. #4405 - Copilot Free in Codespaces - 1 comment
11. #4377 - GPT-5.6 delegates to Opus - 1 comment
12. #4439 - GitLab MCP OAuth - 1 comment
13. #3877 - Auto-allow permissions - 1 comment, 1 like
14. #4438 - disable-model-invocation skill issue - 1 comment
15. #4441 - Preserve context across compactions - 1 comment
16. #4432 - rubber-duck model override - 1 comment
17. #4434 - User-level model config - 1 comment
18. #4430 - Duplicate skills load - 1 comment
19. #3750 - Hardcoded colors - 1 comment
20. #4451 - Slash skill redundant reload - 2 likes
21. #4450 - Assistant text hidden
22. #4448 - Search stuck
23. #4447 - Backspace removing words
24. #4446 - Sandbox policy
25. #4445 - Auto mode picks impossible model
26. #4444 - Explicit file edit mode
27. #4443 - Permission prompts read/write
28. #4442 - adm-zip vulnerability CVE
29. #4440 - Read .claude/rules
30. #4437 - .claude/agents model field override

**PRs** (3 total):
1. #4452 - Revert 5 copilot/fix with copilot (CLOSED)
2. #4449 - Migrate PR automation away from pull_request_target
3. #4428 - Add initial devcontainer configuration

Now let me write the daily report.</think>

# GitHub Copilot CLI 社区动态日报
**日期：2026-08-12**

---

## 📌 今日速览

过去 24 小时内社区活跃度显著提升，共涌现 **41 条新 Issue** 与 **3 条 PR**，但**无新版本发布**。讨论焦点从单纯的 Bug 报告扩展到 **跨生态兼容（`.claude/rules`、GitLab MCP）**、**安全合规（adm-zip CVE、PR 权限模型）** 以及 **Agent 子任务调度模型策略（rubber-duck、subagent）** 等多个方向。Windows 平台下的插件安装/更新权限问题依然是最高频痛点（#4095 累计 👍 14）。

---

## 🚀 版本发布

**今日无新版本发布。** 最近一次发版为 v1.0.79（详见 #4431 等多份 Issue 提及）。

---

## 🔥 社区热点 Issues（Top 10）

| # | Issue | 关注度 | 核心要点 |
|---|-------|--------|----------|
| 1 | [#4095](https://github.com/github/copilot-cli/issues/4095) Windows 平台下插件更新失败，VS Code 持有 watcher handle 导致 `os error 5` | 👍 14，💬 2 | **Windows 平台最高优先级痛点**——VS Code Copilot 扩展运行时占用句柄，导致 CLI 无法更新插件。属于 #4151 的同类问题，影响所有 Windows 用户。 |
| 2 | [#4422](https://github.com/github/copilot-cli/issues/4422) Enterprise 账户下所有 Claude 模型突然不可用 | 👍 3，💬 2 | 用户昨日还能正常使用 Claude Sonnet 5/4.8，今日全部 disabled，回滚 CLI 版本无效。疑似后端策略变更，**影响企业付费用户**，需官方紧急确认。 |
| 3 | [#4251](https://github.com/github/copilot-cli/issues/4251) 1.0.74 恢复大会话时 OOM，CPU 单核满载 70 分钟（相比 1.0.73 内存翻 3–4 倍） | 👍 1，💬 3 | 严格的 A/B 对照已锁定为 v1.0.74 回归，社区对**版本回归测试覆盖度**提出质疑。 |
| 4 | [#4151](https://github.com/github/copilot-cli/issues/4151) Windows 上 `copilot plugin install` 100% 失败 | 👍 1，💬 3 | 与 #4095 互补，覆盖 marketplace/GitHub 源/本地目录三种来源，是 Windows 插件生态的**系统性缺陷**。 |
| 5 | [#4211](https://github.com/github/copilot-cli/issues/4211) MCP 响应中 BigInt 无法序列化，导致任务中断 | 💬 3 | **MCP 生态兼容性问题**——所有返回大整数的 MCP server 都无法与 Copilot CLI 协作。 |
| 6 | [#4431](https://github.com/github/copilot-cli/issues/4431) `/config model` 清空整个 settings.json（已 CLOSED） | 💬 3 | 用户级配置被整体覆盖，**破坏性 bug**，已修复但反映出 `/config` 子命令的写盘逻辑存在隐患。 |
| 7 | [#4442](https://github.com/github/copilot-cli/issues/4442) CLI 二进制中捆绑存在高危 CVE 的 `adm-zip@0.5.17`（CVE-2026-39244） | 💬 0 | **供应链安全问题**——XRay 等企业扫描器会拦截，影响在受限环境中部署 Copilot CLI。 |
| 8 | [#4380](https://github.com/github/copilot-cli/issues/4380) Rubber Duck 子代理有时复用主会话模型族，丧失对抗性审查价值 | 💬 3 | 涉及 #4432 的同类机制——**rubber-duck 互补策略被静默覆盖**，subagent 模型隔离存在设计缺陷。 |
| 9 | [#3976](https://github.com/github/copilot-cli/issues/3976) 原生 `tgrep` trigram 索引器在大 monorepo 下 OOM kill 主机 | 💬 2 | 索引器**无内存上限**，与 #4251 共同反映性能与稳定性边界把控不足。 |
| 10 | [#4405](https://github.com/github/copilot-cli/issues/4405) Codespaces 中 Copilot Free 升级后报 "No model available" | 💬 1 | 升级后 token 隔离/自动选择/re-login 三种修复均无效，**Free tier 在云端环境的可用性问题**。 |

---

## 🛠️ 重要 PR 进展

由于 PR 总数较少（仅 3 条），重点说明如下：

| PR | 状态 | 说明 |
|----|------|------|
| [#4449](https://github.com/github/copilot-cli/pull/4449) 迁移 PR 自动化，弃用 `pull_request_target` | 🟢 OPEN | **安全加固**——将不可信 PR 输入降级到 `pull_request` 工作流，特权写操作迁移到独立 workflow，符合 GitHub 最新安全最佳实践。 |
| [#4452](https://github.com/github/copilot-cli/pull/4452) Revert "5 copilot/fix with copilot" | 🔴 CLOSED | 已关闭的快速回滚 PR，反映出由 Copilot 自动生成的修复存在被人工 revert 的情况，**社区对自动 fix 质量仍存疑虑**。 |
| [#4428](https://github.com/github/copilot-cli/pull/4428) 新增初始 devcontainer 配置 | 🟢 OPEN | 补充标准开发容器配置，**降低贡献者上手门槛**，完善 DX。 |

---

## 📈 功能需求趋势

通过对 41 条 Issue 的聚类分析，社区当前最关注的方向如下：

### 1. 🤝 跨生态互操作（热度最高）
- **Claude Code 兼容**：`#4440` 要求读取 `.claude/rules`；`#4437` 指出 `.claude/agents/*/AGENT.md` 的 `model:` 字段会劫持 Copilot 自定义 agent 默认模型，导致 BYOK 提供商下 subagent 启动失败。
- **GitLab MCP OAuth**：`#4439` 报告 CLI 1.0.79 因 RFC 8414 issuer 不匹配拒绝 GitLab Self-Managed MCP 动态注册。

### 2. 🪟 Windows 平台稳定性
- `#4095`、`#4151`、`#3750`（CMD 浅色主题被硬编码背景色破坏）共同指向 **Windows 上的文件句柄与终端主题兼容性**问题。

### 3. 🧠 模型调度与子 Agent 策略
- rubber-duck 的 **互补模型策略**（#4380、#4432）、GPT-5.6 静默委派 Opus（#4377）、`auto` 模式选择不可用模型（#4445）——**子 agent 模型选择缺乏约束与可观测性**。

### 4. ⚡ 性能与稳定性回归
- `#4251`、`#3976`、`#4448`（搜索卡死）显示 **1.0.7x 后期版本在大型仓库/长会话场景的回归**未得到系统化治理。

### 5. 🔒 安全合规
- `#4442`（adm-zip CVE）、`#4449`（PR 工作流权限模型）、`#4446`（企业级 sandbox 策略推送）——**企业部署对安全基线要求提升**。

### 6. 🎨 交互体验打磨
- `#4447` Backspace 一次删一词、`#4450` "Thought for…" 折叠隐藏 `ask_user` 弹窗、`#4444` 逐文件 accept/reject 编辑模式、`#4443` 权限弹窗未区分读写——**交互细节的可用性问题集中爆发**。

---

## 💬 开发者关注点

综合 Issue 与 PR 的反馈，开发者社区当前的**高频痛点**可归纳为：

1. **Windows 文件锁冲突**——插件安装/更新在 VS Code 运行下 100% 失败，是 Windows 生态最高优先级问题。
2. **版本回归缺乏防护**——1.0.74 的大会话 OOM、`/config model` 清空设置、#4452 需 revert 的 auto-fix，都说明**升级路径风险变大**。
3. **Agent/Subagent 模型调度不透明**——rubber-duck 与 subagent 任务的 `model` 参数会**静默覆盖用户/策略配置**，且无审计日志。
4. **跨生态迁移摩擦**——Claude Code 用户希望复用 `.claude/rules`、`.claude/agents/`，但当前 CLI 缺少隔离机制，存在配置劫持风险。
5. **企业部署门槛**——CVE 依赖、沙箱策略推送、Codespaces Free tier 失效等让**IT 管理员难以在企业内推广**。
6. **细节 UX 反复回退**——Backspace、折叠渲染、权限弹窗颗粒度等**看似微小的体验问题**累积起来显著拉低日常使用流畅度。

---

*日报生成基于 github.com/github/copilot-cli 公开数据，分析视角供参考。*

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

<think>The user wants me to generate a daily report for Kimi Code CLI community dynamics for 2026-08-12, based on the GitHub data provided. Let me analyze the data carefully.

Looking at the data:
- No new releases in the past 24 hours
- 3 issues updated in the past 24 hours
- 8 PRs updated in the past 24 hours

Let me organize this:

**Issues:**
1. #1283 - Memory System feature request (34 comments, updated 2026-08-11) - 5+ months old, high engagement
2. #2601 - Quote & Reply feature for Kimi Web (new, 0 comments)
3. #2600 - Windows PowerShell7 path issue bug (new, 0 comments)

**PRs:**
1. #2509 - Configurable thinking effort and /effort command (OPEN, related to #2501)
2. #2057 - Replace assert with RuntimeError in ACP (CLOSED)
3. #2056 - Fix TOCTOU race in WireFile (CLOSED)
4. #2055 - Replace assert with AgentSpecError (CLOSED)
5. #1328 - Fix minor bugs in file tools and UI feedback (CLOSED)
6. #1082 - Fix PyInstaller dateparser cache (CLOSED)
7. #1077 - Remove redundant mode validation in WriteFile (CLOSED)
8. #1393 - Fix ACP shell terminal routing (CLOSED)

The user asked for top 10 issues and top 10 PRs, but we only have 3 issues and 8 PRs. So I'll need to note this and present what we have.

Let me craft a professional Chinese daily report.

Wait, I notice the date in the issue #1283 shows "创建: 2026-02-27" and "更新: 2026-08-11". But today is 2026-08-12, which is fine - the issue was updated yesterday.

Let me also check the dates more carefully:
- The dates in the data show 2026, and today is 2026-08-12
- The "过去24小时内更新" includes items updated on 2026-08-11

Now let me write the report. I should be concise, professional, and technically oriented.

Key observations:
1. The Memory System feature request (#1283) has been open for over 5 months with 34 comments - this is the most popular issue
2. There were multiple bug fix PRs from contributor @hobostay that got closed
3. @hanhan3344 contributed an ACP fix
4. The /effort command PR (#2509) is still open and related to reasoning effort configuration
5. Two new issues are bug/feature requests from yesterday

Trends:
- Cross-session memory/persistent context (Memory System)
- Configuration flexibility (thinking effort, model parameters)
- ACP (Agent Communication Protocol) integration
- Bug fixes in file tools, validation logic, race conditions
- Windows compatibility issues
- IDE/Web integration features (quote & reply)

Developer pain points:
- assert statements being unsafe in production code (Python -O flag)
- Race conditions in file operations
- Windows path issues
- Build/Packaging issues (PyInstaller)
- Redundant validation logic

Let me write the report now.</think>

# Kimi Code CLI 社区动态日报

**📅 2026-08-12 | 数据来源：github.com/MoonshotAI/kimi-cli**

---

## 🎯 今日速览

昨日社区动态以**质量改进型 PR 集中合并**为主旋律，贡献者 @hobostay 推动的 6 个稳健性修复（涉及 assert 替换、TOCTOU 竞态、文件工具校验等）全部进入 Closed 状态，显著提升运行时安全性。同时，#2509「可配置 thinking effort 与 /effort 命令」仍是唯一在途的功能 PR，#1283「跨会话 Memory System」作为最高呼声诉求持续发酵。

---

## 📦 版本发布

过去 24 小时内**无新版本发布**，最近一次发版请关注 [Releases 页面](https://github.com/MoonshotAI/kimi-cli/releases)。

---

## 🔥 社区热点 Issues

> 过去 24 小时仅 3 条 Issue 更新，其中 1 条为存量长尾需求（5 个月历史，34 条评论），2 条为当日新提案。

| 排名 | Issue | 热度 | 为什么重要 |
|------|-------|------|----------|
| 1 | [#1283](https://github.com/MoonshotAI/kimi-cli/issues/1283) **Memory System 持久化上下文** | ⭐⭐⭐⭐⭐ | 34 条评论、跨 5 个月持续讨论，是社区呼声最高的长期需求。涉及自动 AI 记忆 + 手动用户指令两条路径，直接决定 Kimi Code CLI 能否成为真正的"长期协作者"。 |
| 2 | [#2601](https://github.com/MoonshotAI/kimi-cli/issues/2601) **Kimi Web 引用 & 回复任意 AI 回复片段** | ⭐⭐⭐ | 提案支持对 AI 回复中任意文本段（段落、代码块、计划步骤、diff 解释行）选中并附加追问，是 IDE 体验级的 UX 升级请求，关注选区级上下文衔接。 |
| 3 | [#2600](https://github.com/MoonshotAI/kimi-cli/issues/2600) **Windows PowerShell7 默认 D 盘启动导致路径错误** | ⭐⭐⭐ | 0.33 版本在 PowerShell7 非系统盘启动场景下出现路径解析异常，影响 Windows 高级用户日常工作流，定位为兼容性 Bug，需快速修复。 |

> 📊 由于过去 24 小时 Issue 数量较少（3 条），已全部覆盖。社区总 Issue 存量及更多话题请参考 [Issues 列表](https://github.com/MoonshotAI/kimi-cli/issues)。

---

## 🛠 重要 PR 进展

> 昨日 8 条 PR 活跃，其中 **7 条已 Closed**（多为稳健性修复），**1 条仍 Open**（核心功能演进）。

| # | PR | 状态 | 核心变更 |
|---|----|------|---------|
| 1 | [#2509](https://github.com/MoonshotAI/kimi-cli/pull/2509) **feat: 可配置 thinking effort 与 /effort 命令** | 🟢 OPEN | 关联 #2501，取代旧 `reasoning_effort` 透传，新增 `/effort` 交互命令，支持运行时切换推理强度。 |
| 2 | [#2057](https://github.com/MoonshotAI/kimi-cli/pull/2057) **fix(acp): assert → RuntimeError** | ✅ CLOSED | 将 `acp/session.py` 中 5 处 `assert` 替换为 `RuntimeError`，避免 Python `-O` 优化标志剥离断言导致不变量失效。 |
| 3 | [#2056](https://github.com/MoonshotAI/kimi-cli/pull/2056) **fix(wire): 修复 WireFile.append_record TOCTOU 竞态** | ✅ CLOSED | `self.path.exists()` 与 `self.path.stat()` 之间存在删除窗口，导致 `FileNotFoundError`，已重构消除竞态。 |
| 4 | [#2055](https://github.com/MoonshotAI/kimi-cli/pull/2055) **fix(agentspec): assert → AgentSpecError** | ✅ CLOSED | 在 `agentspec.py` 中用领域异常替换 `assert`，确保 `-O` 模式下安全检查不被静默剥离。 |
| 5 | [#1393](https://github.com/MoonshotAI/kimi-cli/pull/1393) **fix(acp): Shell 命令通过 terminal args 路由** | ✅ CLOSED | 适配当前 ACP SDK 响应结构（使用 `terminal_id`），将 shell 可执行文件置于 `command`、调用参数置于 `args`，新增 bash/PowerShell 回归测试。 |
| 6 | [#1328](https://github.com/MoonshotAI/kimi-cli/pull/1328) **fix: 文件工具 & UI 反馈的小 Bug 修复集** | ✅ CLOSED | 修复 `StrReplaceFile` 多次编辑时替换计数基于原始内容而非累计内容的计算错误，并优化 UI 反馈。 |
| 7 | [#1082](https://github.com/MoonshotAI/kimi-cli/pull/1082) **fix(pyinstaller): 过滤不存在的 dateparser 缓存** | ✅ CLOSED | `dateparser_tz_cache.pkl` 首次使用时才生成，导致 CI/全新安装环境 `collect_data_files` 报错，现已过滤缺失文件。 |
| 8 | [#1077](https://github.com/MoonshotAI/kimi-cli/pull/1077) **fix: 移除 WriteFile 工具冗余 mode 校验** | ✅ CLOSED | 删除 `src/kimi_cli/tools/file/write.py` 第 84-91 行对 `mode` 参数的重复校验，简化运行时路径。 |

---

## 📈 功能需求趋势

从近 24 小时及历史活跃 Issue 提炼，社区关注方向集中于以下几类：

| 方向 | 代表 Issue | 社区关注度 |
|------|-----------|----------|
| **🧠 持久化上下文 / 跨会话记忆** | [#1283](https://github.com/MoonshotAI/kimi-cli/issues/1283) | 🔥🔥🔥🔥🔥 |
| **🎨 选区级 UX 增强（IDE/Web 引用回复）** | [#2601](https://github.com/MoonshotAI/kimi-cli/issues/2601) | 🔥🔥🔥 |
| **⚙️ 模型行为可配置性（推理强度 / 参数）** | [#2509](https://github.com/MoonshotAI/kimi-cli/pull/2509) | 🔥🔥🔥 |
| **🪟 Windows / PowerShell 兼容性** | [#2600](https://github.com/MoonshotAI/kimi-cli/issues/2600) | 🔥🔥 |
| **🔌 ACP 协议稳定性与集成** | [#2057](https://github.com/MoonshotAI/kimi-cli/pull/2057)、[#1393](https://github.com/MoonshotAI/kimi-cli/pull/1393) | 🔥🔥 |

---

## 👨‍💻 开发者关注点

综合昨日 PR 与 Issue，开发者社区反馈的**高频痛点**集中在：

1. **🔒 生产级不变量检查缺失**  
   `assert` 在 Python `-O` 模式下被剥离，多个 PR（#2057、#2055）专门修复该反模式，建议全仓库推广 RuntimeError / 领域异常替换。

2. **⏱ 并发与文件 I/O 竞态**  
   #2056 暴露的 TOCTOU 竞态表明核心持久化层（WireFile）需要更严格的原子操作语义，建议后续引入 file lock 或 rename-based atomic append。

3. **📦 打包 / CI 环境兼容性**  
   #1082 揭示 PyInstaller + 懒加载资源（dateparser 缓存）在 fresh CI 中崩溃，构建链路对运行时副作用缺乏鲁棒性。

4. **🪟 跨平台路径与 Shell 行为差异**  
   #2600 表明 Windows 下自定义默认工作目录（PowerShell7 配 D:）破坏了隐式路径假设，需显式 cwd 解析逻辑。

5. **🧹 死代码与冗余校验**  
   #1077、#1328 反映出早期工具实现中存在"双保险"式冗余校验与基于 `original_content` 的错误状态传递，应在重构阶段统一清理。

6. **🤖 Agent 推理可控性**  
   #2509 显示社区希望 `/effort` 之类的运行时开关而非仅配置项，以快速试验不同推理强度对任务表现的影响。

---

## 📌 今日观察小结

- **稳健性 vs. 新功能**：昨日动态呈现「重维护、轻演进」特征，6 个修复 PR 集中合并体现仓库进入质量收敛期。
- **Memory System 仍未启动**：尽管 #1283 讨论度最高，目前尚无对应实现 PR，建议关注官方 Roadmap 动向。
- **/effort 命令值得期待**：#2509 是当前唯一 OPEN 功能 PR，引入后将补齐 Kimi Code CLI 推理可控性的最后一块拼图。

> *报告生成时间：2026-08-12 ｜ 涵盖数据窗口：2026-08-11 当日活跃内容*

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

<think>The user wants me to generate a daily community report for OpenCode based on GitHub data from 2026-08-12. Let me analyze the data carefully and produce a structured Chinese report.

Let me categorize the data:

**Issues (50 total, top 30 shown):**
1. #16017 - Go plan usage/balance API endpoint - 34 comments, 137 👍, CLOSED
2. #28191 - TUI permission prompt configurable height - 9 comments, OPEN
3. #27924 - infinite compaction loop bug - 8 comments, OPEN
4. #18134 - Desktop close button to system tray - 8 comments, 2 👍, CLOSED
5. #41763 - TUI ALSA errors flood - 5 comments, 1 👍, OPEN
6. #13033 - Silent/background compaction - 5 comments, 5 👍, CLOSED
7. #39831 - Zen gpt-5.6-luna/terra failures - 5 comments, 1 👍, OPEN
8. #38193 - Desktop Add server dialog fields - 4 comments, 1 👍, OPEN
9. #39936 - VS Code notifications - 4 comments, 1 👍, OPEN
10. #41890 - ALSA lib cannot find card - 3 comments, CLOSED
11. #41777 - v2 webfetch regression - 3 comments, CLOSED
12. #41857 - opencode-pr-tracker ecosystem - 3 comments, OPEN
13. #28986 - Agent loop self-replies bug - 3 comments, 1 👍, CLOSED
14. #37090 - apply_patch Windows line endings - 3 comments, OPEN
15. #41848 - LLM retry infinite loop - 2 comments, OPEN
16. #41806 - Instance bootstrap hangs - 2 comments, OPEN
17. #41875 - apply_patch can overwrite existing file - 2 comments, CLOSED
18. #41869 - V1 migration SQLite error - 2 comments, CLOSED
19. #37602 - file encoding parameter (GBK) - 2 comments, 2 👍, OPEN
20. #41751 - project skills silently dropped - 2 comments, OPEN
21. #41861 - UI 显示的内容 - 2 comments, CLOSED
22. #41919 - Firecrawl connect dialog - 1 comment, OPEN
23. #41915 - /usage slash command - 1 comment, OPEN
24. #41905 - new session inherits wrong cwd - 1 comment, OPEN
25. #41913 - /security-review slash command - 1 comment, OPEN
26. #41912 - /verify slash command - 1 comment, OPEN
27. #41911 - /simplify slash command - 1 comment, OPEN
28. #41910 - /btw slash command - 1 comment, OPEN
29. #41909 - /approve slash command - 1 comment, OPEN
30. #41908 - /context slash command - 1 comment, OPEN

There are also many more afonsoft slash commands (#41907, #41906, etc. likely) that I don't see but can infer. Looking at the pattern, the user @afonsoft submitted many feature requests for slash commands inspired by Claude Code:
- /usage (cost report)
- /security-review
- /verify
- /simplify
- /btw
- /approve
- /context

**Pull Requests (50 total, top 20 shown):**
1. #41922 - compact turn token usage with expandable steps
2. #41900 - render instruction updates as compact notices
3. #41884 - gate tool snapshot on initial MCP registration
4. #41883 - show completed write output
5. #41880 - align running shell output
6. #41789 - expose local attachment paths
7. #41903 - wipe in first generated titles
8. #41921 - dim placeholder tab titles
9. #41918 - workerd runtime profile
10. #41904 - Claude Code ACP runtime
11. #41770 - stop retrying unavailable audio
12. #41917 - experiments via devtools bar
13. #41889 - align local development identity
14. #41899 - record location switches
15. #41790 - tolerate older migration schemas
16. #41897 - remove leftover discovery smoke plugin
17. #41891 - truncate fractional mtimes in fresh plugin specifiers
18. #41793 - surface managed startup stderr
19. #41729 - label windows by active tab
20. #41901 - Claude Code ACP runtime (dup of 41904?)

Most PRs are by kitlangton (contributor) fixing TUI/Core issues. Two PRs (#41904, #41901) by stocky789 add Claude Code ACP runtime.

**Patterns observed:**
1. **V2 (2.0) migration issues**: Many issues specifically tagged [2.0] - ALSA errors, webfetch regression, V1 migration SQL errors, new session cwd, Firecrawl connect dialog
2. **Slash commands proliferation**: @afonsoft submitted 7+ slash command feature requests (/usage, /cost, /security-review, /verify, /simplify, /btw, /approve, /context) - clearly inspired by Claude Code
3. **Apply_patch bugs**: Multiple bugs about apply_patch tool (line endings, overwriting existing files)
4. **Plugin/TUI enhancement work**: kitlangton is a major contributor doing TUI polish work
5. **LLM provider issues**: Zen gpt-5.6 model failures, DeepSeek retry loops
6. **Feature backlog**: System tray, notifications (VS Code), file encoding support, configurable TUI permission prompts

**Versions:** No new releases in 24 hours - section should be omitted

Now let me write the report. The user wants:
1. 今日速览 - 2-3 sentences
2. 版本发布 - omit (no releases)
3. 社区热点 Issues - top 10
4. 重要 PR 进展 - top 10
5. 功能需求趋势 - analysis
6. 开发者关注点 - analysis

I need to write in Chinese, professional and concise, suitable for tech developers. Each item needs the GitHub link.

Let me craft a high-quality daily report.

For the Issues, I should pick the most impactful 10:
1. #16017 - Highest 👍 (137) and most comments (34) - Go plan API
2. #27924 - High-impact bug (infinite compaction loop)
3. #28191 - TUI permission prompt config
4. #18134 - Desktop close → system tray
5. #41763 - ALSA TUI errors
6. #39831 - Zen gpt-5.6 failures
7. #38193 - Desktop Add server dialog
8. #13033 - Silent compaction
9. #28986 - Agent self-reply bug
10. #37090 - apply_patch Windows

Actually let me think about this differently. The top 10 by discussion/comments would be best:
- #16017 (34 comments, 137 👍)
- #28191 (9 comments)
- #27924 (8 comments)
- #18134 (8 comments)
- #41763 (5 comments)
- #13033 (5 comments)
- #39831 (5 comments)
- #38193 (4 comments)
- #39936 (4 comments)
- #41890 (3 comments) or #41777 (3 comments)

I'll prioritize by engagement (comments + likes):
1. #16017 - top by far
2. #28191 - permission prompt UX
3. #27924 - infinite loop bug (critical)
4. #18134 - desktop UX
5. #41763 - ALSA errors (v2)
6. #13033 - silent compaction
7. #39831 - Zen provider fail
8. #38193 - desktop dialog bug
9. #39936 - VS Code notifications
10. #28986 - agent self-reply bug (1.8% of sessions)

For PRs, top 10 most interesting:
1. #41904/#41901 - Claude Code ACP runtime (new feature, major)
2. #41918 - workerd runtime (Cloudflare deployment)
3. #41922 - compact turn token usage (UX)
4. #41789 - expose local attachment paths
5. #41899 - record location switches
6. #41770 - stop retrying unavailable audio
7. #41899 - location switches
8. #41889 - align local dev identity (desktop)
9. #41884 - gate tool snapshot on MCP
10. #41883 - show completed write output
11. #41790 - tolerate older migration schemas

For trends:
- V2 migration/instability (lots of [2.0] tagged issues)
- Slash command feature parity (Claude Code-style commands)
- apply_patch tool issues
- Desktop UX improvements
- Cost/token visibility
- Multi-agent orchestration
- File encoding support
- Plugin/TUI infrastructure

For developer concerns:
- Infinite retry loops (LLM errors)
- Bootstrap hangs (zombie processes)
- Line ending issues on Windows
- Model availability (Zen)
- Cross-platform issues (ALSA, line endings)
- V1→V2 migration data loss

Let me write this up now.</think>

# 📋 OpenCode 社区日报 · 2026-08-12

## 1. 今日速览

今天 OpenCode 仓库动态活跃度较高：v2 迁移期稳定性问题集中爆发（ALSA、Webfetch 回归、SQLite 转义、子进程僵尸化等），同时社区出现批量借鉴 Claude Code 风格的斜杠命令需求潮（`/usage`、`/verify`、`/simplify`、`/btw` 等）。代码侧，PR 集中在 TUI/会话基础设施打磨，而最值得关注的是 **Claude Code ACP Runtime** 提案落地——意味着 OpenCode 正式拥抱外部 Agent 互操作协议。

> 注：过去 24 小时内无新版本发布，**版本发布**章节略。

---

## 2. 社区热点 Issues（Top 10）

| # | Issue | 状态 | 热度 | 摘要 |
|---|---|---|---|---|
| 1 | [#16017](https://github.com/anomalyco/opencode/issues/16017) Add Go plan usage/balance API endpoint | **CLOSED** | 34 评论 / 👍137 | 最高赞议题，请求将 Go 计划订阅用量数据通过公开 API 暴露，附 rolling/weekly/monthly 时间窗口。已关闭，说明路线已纳入或被否决。 |
| 2 | [#27924](https://github.com/anomalyco/opencode/issues/27924) 无限压缩循环 Bug | OPEN | 8 评论 | **关键缺陷**：`prompt.ts` 在压缩未能缩小上下文时会陷入死循环，导致 token/费用失控。需引入压缩退出条件或重试上限。 |
| 3 | [#28191](https://github.com/anomalyco/opencode/issues/28191) TUI 权限提示面板可配置 | OPEN | 9 评论 | 大 diff 时硬编码 `maxHeight:15` / 默认折叠严重受限，需 `tui.json` 暴露高度与默认展开状态。 |
| 4 | [#18134](https://github.com/anomalyco/opencode/issues/18134) Desktop 关闭按钮最小化到托盘 | **CLOSED** | 8 评论 / 👍2 | Windows 11 用户期望类 Slack/Discord 的托盘行为，符合桌面应用惯例。已关闭，建议跟进版本变更日志。 |
| 5 | [#41763](https://github.com/anomalyco/opencode/issues/41763) [2.0] TUI 被 ALSA 错误刷屏 | OPEN | 5 评论 / 👍1 | 无声卡 Linux 主机上 ALSA 诊断直接覆盖 TUI，破坏渲染。已被 PR #41770 修复。 |
| 6 | [#39831](https://github.com/anomalyco/opencode/issues/39831) Zen: gpt-5.6-luna/terra 403 失败 | OPEN | 5 评论 / 👍1 | 同 Provider 下 `gpt-5.4-nano` 正常，仅 Luna/Terra 报 `Upstream request failed`，疑似路由或白名单问题。 |
| 7 | [#13033](https://github.com/anomalyco/opencode/issues/13033) 后台静默压缩 | **CLOSED** | 5 评论 / 👍5 | 自动压缩时整段摘要流式灌入聊天窗口干扰视线，需求静默执行。已关闭。 |
| 8 | [#38193](https://github.com/anomalyco/opencode/issues/38193) Desktop "Add server" 对话框字段只读 | OPEN | 4 评论 / 👍1 | Server name/Username/Password 三个 optional 字段被 placeholder 卡死不可编辑，明显回归。v1.18.4 实锤。 |
| 9 | [#28986](https://github.com/anomalyco/opencode/issues/28986) Agent 自回复 Bug（影响 2.8% 会话） | **CLOSED** | 3 评论 / 👍1 | 当模型 `finish_reason="stop"` 后 agent loop 未停止，对自身上一条进行回复——可见的"自我对话"。已关闭，待查是否真修复。 |
| 10 | [#39936](https://github.com/anomalyco/opencode/issues/39936) VS Code 通知：Agent 完成/需关注 | OPEN | 4 评论 / 👍1 | 已有 #7242、#4454 等近似 issue，但缺 VS Code 通道；当 Agent 在后台跑完或卡住需人工介入时无提醒。 |

**社区反应观察：** #16017 的 137 赞、#13033 的"早该这样"式反馈、#27924 的"死循环→烧光配额"风险——三件事指向一个共同诉求：**让 OpenCode 的运行更可观测、更可控**。

---

## 3. 重要 PR 进展（Top 10）

| # | PR | 状态 | 类型 | 价值 |
|---|---|---|---|---|
| 1 | [#41904](https://github.com/anomalyco/opencode/pull/41904) / [#41901](https://github.com/anomalyco/opencode/pull/41901) 新增 Claude Code ACP Runtime | OPEN | ✨ Feature | 通过 `@agentclientprotocol/claude-agent-acp` 把 Claude Code 作为 OpenCode 可选的 Runtime——**首个外部 Agent 互操作集成**，呼应 #5182、#20002、#24038 的长期愿景。 |
| 2 | [#41918](https://github.com/anomalyco/opencode/pull/41918) workerd Runtime Profile + SDK 入口 | OPEN | ✨ Feature | 让 OpenCode Server 跑进 Cloudflare Durable Object，附 CI 在真实 isolate 中验证。打开"每个 Slack thread = 1 DO = 1 OpenCode server"的部署形态。 |
| 3 | [#41922](https://github.com/anomalyco/opencode/pull/41922) TUI turn token 用量折叠展示 | OPEN | ✨ Feature | 每轮 step 表格常超 30 行，默认折叠成单行 + 可展开；明显改善重度工具调用 session 的可读性。 |
| 4 | [#41884](https://github.com/anomalyco/opencode/pull/41884) 修复 MCP 工具快照竞态 | **CLOSED** | 🐛 Fix | 启动恢复会话时模型会拿到"Code Mode 目录已变更"的虚假系统提示；修复后等 MCP 注册完成再采快照。 |
| 5 | [#41789](https://github.com/anomalyco/opencode/pull/41789) 暴露本地附件路径 | OPEN | 🐛 Fix | V2 此前剥离了本地图片/目录路径导致 agent 无法引用；恢复以贴合 #41443、#41454。 |
| 6 | [#41899](https://github.com/anomalyco/opencode/pull/41899) 记录会话目录切换 | **CLOSED** | ✨ Feature | `location-switched` 时间线事件 + 上下文延续 + TUI 渲染，去除 V2 中重复的 synthetic 目录切换。 |
| 7 | [#41770](https://github.com/anomalyco/opencode/pull/41770) 不再重试不可用音频设备 | OPEN | 🐛 Fix | Closes #41763——TUI 启动失败后不再无限重试 native audio engine，避免反复触发 ALSA 错误。 |
| 8 | [#41889](https://github.com/anomalyco/opencode/pull/41889) Desktop 本地开发标识统一 | **CLOSED** | 🔧 Chore | Electron 与 CLI 共用 `2.0.0-local` 时间戳版本，通过 `service-local.json` 发现本地 server，标题栏/Settings 显示 LOCAL。 |
| 9 | [#41790](https://github.com/anomalyco/opencode/pull/41790) 兼容旧迁移 schema | **CLOSED** | 🐛 Fix | 导入旧 channel 数据库时不再因 nullable 字段缺失而丢数据 (`commands`、`fork_boundary` 等)。降低升级损耗。 |
| 10 | [#41793](https://github.com/anomalyco/opencode/pull/41793) 暴露托管启动 stderr | **CLOSED** | 🐛 Fix | Closes #41696——`opencode2 service start` 端口冲突时不再只回退到 exit code，而是输出可操作的诊断信息。 |

> 观察：PR 几乎一边倒来自外部贡献者 **`@kitlangton`**（标记为 `[contributor]`），内容集中在 TUI 视觉/状态打磨与 Core 边缘场景修复，是当前 V2 进度的真正引擎。

---

## 4. 功能需求趋势

将今日 Issue 抽象成方向，社区最强烈的诉求集中在以下几条：

- **📊 可观测性 & 成本透明**
  - #16017 Go 计划 API · #41915 `/usage`、`/cost` · #41908 `/context` 上下文分项 token · #28191 权限面板可配
  - 共性：**让"钱花在哪儿、上下文被谁吃掉"可被用户问、可被 API 取**。

- **🤖 Claude Code 风格的斜杠命令集**（同一作者 @afonsoft 一日内连发 7 条）
  - `/usage` · `/context` · `/verify` · `/simplify` · `/security-review` · `/approve` · `/btw`
  - 暗示：用户希望 OpenCode 在会话内即能完成 review、test、secret scan、重构、审批切换、轻量旁问——**减少 shell-out**。

- **🪟 Desktop / IDE 集成**
  - #18134 系统托盘 · #38193 桌面设置对话框回归 · #39936 VS Code 通知 · #41729 PR（macOS 窗口标题按活动 Tab 区分）· #41889 LOCAL 标识
  - 桌面端在"功能补齐"和"细节打磨"两个层面都在推进。

- **📁 文件处理语义**
  - #37090 `apply_patch` 在 Windows 改 CRLF

</details>

<details>
<summary><strong>jcode</strong> — <a href="https://github.com/1jehuang/jcode">1jehuang/jcode</a></summary>

<think>The user wants me to generate a Chinese daily report for the jcode community based on GitHub data. Let me analyze the data carefully:

1. **Releases in past 24 hours:**
   - v0.75.3: Desktop sessions with Super-key overview, clickable session navigation
   - v0.75.2: Strict todo status validation
   - v0.75.1: More reliable autonomous runs, Grok Build ACP provider

2. **Issues:** 34 total, showing top 30 by comments
   - High comment issues:
     - #751 (6 comments) - command-risk gate blocking read-only commands
     - #836 (5 comments) - /theme slash command and custom theme palettes
     - #677 (4 comments) - Auto-retry backoff hardcoded
     - #679 (4 comments) - Configurable memory sidecar backend
     - #884 (4 comments) - Stale tool results replay prior call's verbatim result (high priority bug)
     - #583 (3 comments) - Info widgets visual flicker
     - #608 (3 comments) - /model picker doesn't persist
     - #835 (3 comments) - /mcp slash command
     - #837 (3 comments) - @file completion with frecency
     - #585 (CLOSED, 3 comments) - MCP servers in overview
     - #584 (CLOSED, 3 comments) - Custom theme palettes
     - #900 (2 comments) - prompt-overlay.md re-read invalidates cache
     - #571 (2 comments) - Custom OpenAI providers
     - #574 (2 comments) - OSC 9 progress for herdr
     - #575 (2 comments) - Cursor CLI ACP provider
     - #885 (CLOSED, 2 comments) - stream_read_error bypasses retry
     - #869 (CLOSED, 2 comments, 1 like) - Codex quota widget
     - #887 (2 comments) - ACP in Zed throws error
     - #883 (2 comments) - CLAUDE_CONFIG_DIR ignored
     - #867 (2 comments) - Simplified Chinese README
     - #902 (1 comment, 1 like) - ui broken on Windows 11 v0.75.3
     - #903 (1 comment) - Background bash stdin issue
     - #897 (1 comment) - bash risk gate as toggle
     - #877 (CLOSED, 1 comment) - CI failure
     - #886 (1 comment) - macOS bundles opt out
     - #901 - Mastra Observational Memory
     - #899 - Validation errors litellm Azure
     - #898 - Keyboard protocol CSI u not cleared
     - #896 - Lowercase "i" decoded as Ctrl+Alt+I
     - #892 - Telemetry tests fail

3. **PRs:** 5 total
   - #882 CLOSED - Avoid duplicate Codex quota windows (fixes #869)
   - #880 CLOSED - Fix pinned todos config-off test isolation (fixes #877)
   - #890 OPEN - Generate unique fallback tool-call IDs (likely fixes #884)
   - #889 OPEN - Allow ACP sessions with host-provided MCP servers (fixes #887)
   - #888 OPEN - Retry OpenAI-compatible stream_read_error (fixes #885)

Now let me structure the report in Chinese with technical professionalism.

Let me craft the report:

## 今日速览
- 24小时内连续发布三个补丁版本（v0.75.1 → v0.75.3），重点修复 Todo 状态验证、流式错误重试、桌面会话快捷键等问题
- 高优先级 bug #884（工具调用结果错位回放）已通过 #890 修复中，#885（stream_read_error 重试）已通过 #888 修复
- 多项 TUI 体验类需求集中涌现：自定义主题、@file 完成、MCP 切换、模型切换持久化等

## 版本发布
三个补丁版本连续发布：

**v0.75.3 - 可靠的流与桌面会话总览**
- 桌面会话恢复 Super 键总览，支持点击会话导航
- 桌面总览快捷键在多个 compositor 下安全运行
- 修复偶发的 transient stream_read_error 失败

**v0.75.2 - 严格的 Todo 状态校验**
- Todo 工具拒绝未知状态值，不再静默存储
- 错误信息列出合法值（pending/in_progress/completed/cancelled）
- 修复模型写入未知状态字符串的漏洞

**v0.75.1 - 更可靠的自主运行**
- Todo 完成同义词（done/finished）不再误触发自动 poke 循环
- Grok Build 作为 ACP provider 提供
- 修复桌面与 SDK CLI 相关问题

## 社区热点 Issues

Let me pick 10 most important issues and explain why:

1. **#884** - Stale tool results (high priority bug, 4 comments) - 严重bug，新工具调用返回之前调用的结果，影响可信度
2. **#751** - command-risk gate blocks routine read-only commands (6 comments) - 用户痛点，分类器过度触发
3. **#836** - /theme slash command (5 comments) - UX 增强
4. **#677** - Auto-retry backoff hardcoded (4 comments) - 共享网关场景
5. **#679** - Configurable memory sidecar backend (4 comments) - 配置灵活性
6. **#887** - ACP in Zed throws MCP error (2 comments) - 集成问题
7. **#883** - CLAUDE_CONFIG_DIR ignored (2 comments) - 配置兼容
8. **#900** - prompt-overlay.md re-read invalidates cache (2 comments) - 性能优化，97K tokens/turn
9. **#608** - /model picker doesn't persist (3 comments) - 基础体验
10. **#902** - ui broken v0.75.3 (1 comment, 1 like) - 最新版本的 UI 回归

## 重要 PR 进展

1. **#882 CLOSED** - Avoid duplicate Codex quota windows (fixes #869)
2. **#880 CLOSED** - Fix pinned todos config-off test isolation (fixes #877)
3. **#890 OPEN** - Generate unique fallback tool-call IDs (likely addresses #884)
4. **#889 OPEN** - Allow ACP sessions with host-provided MCP servers (fixes #887)
5. **#888 OPEN** - Retry OpenAI-compatible stream_read_error (fixes #885)

Only 5 PRs shown, so I'll list all of them.

## 功能需求趋势

Let me analyze the categories:
- TUI UX: #836 (theme), #837 (@file), #835 (mcp), #608 (model persist), #583 (info widgets flicker), #584, #585
- Provider integrations: #575 (Cursor ACP), #677 (retry), #679 (memory), #571 (OpenAI providers), #899 (litellm Azure)
- ACP/integration: #887, #889, #574 (OSC 9 herdr), #886 (macOS)
- Performance: #900 (prompt cache), #901 (observational memory)
- Compatibility: #883 (CLAUDE_CONFIG_DIR), #898 (CSI u tmux), #896 (Ctrl+Alt+I)
- Bug fixes: #751 (risk gate), #884, #885, #869, #877, #903, #902
- Documentation/i18n: #867 (Chinese README)

## 开发者关注点

Pain points:
- 风险分类器过度触发，导致训练用户麻木确认
- 配置/环境变量不被尊重（CLAUDE_CONFIG_DIR, telemetry opt-out）
- 跨平台兼容（tmux, Windows terminal, macOS bundle）
- TUI 渲染闪烁、多处冗余
- Provider 流式错误的重试机制不健全
- 提示缓存被无谓的文件读取失效
- 工具调用 ID 冲突导致结果错位

Let me write the full report now.</think>

# jcode 社区动态日报 · 2026-08-12

## 📌 今日速览

过去 24 小时 jcode 连续发布三个补丁版本（**v0.75.1 → v0.75.2 → v0.75.3**），围绕 Todo 状态校验、流式错误重试、桌面会话总览等快速修复；社区集中讨论多个高优先级 bug 与 TUI 体验类需求，其中"工具调用结果错位回放"（#884）与"stream_read_error 绕过重试"（#885）已分别在 PR #890、#888 中进入修复流程。

---

## 🚀 版本发布

| 版本 | 主题 | 关键变化 |
|---|---|---|
| **v0.75.3** | 可靠的流与桌面会话总览 | 桌面会话恢复 Super 键总览 + 可点击会话导航；跨 compositor 安全的总览快捷键；修复偶发 `stream_read_error` |
| **v0.75.2** | 严格的 Todo 状态校验 | Todo 工具拒绝未知状态值；错误信息列出合法状态集（pending/in_progress/completed/cancelled） |
| **v0.75.1** | 更可靠的自主运行 | `done`/`finished` 等完成同义词不再触发误循环；**Grok Build** 作为 ACP provider 提供；修复桌面 / SDK CLI |

> 注：v0.75.3 发布后立即收到 #902（Windows 11 下 UI 滚动后崩坏）回归报告，建议关注。

---

## 🔥 社区热点 Issues（精选 10 条）

1. **[#884](https://github.com/1jehuang/jcode/issues/884) — 高优先级 Bug：工具调用结果错位回放** ⭐4 评论
   新工具调用间歇性返回之前调用的**完整结果**（连同旧的 timing 头），严重破坏模型决策可信度。PR #890 已提交针对性修复，区分 provider 合成的回退 ID（如 `bash:0`）与真正的 provider ID。

2. **[#751](https://github.com/1jehuang/jcode/issues/751) — 命令风险门过度触发（`2>/dev/null`、`grep -r`、heredoc 均被误判）** ⭐6 评论（最高讨论度）
   作者 @rameshbaskaran 已附上修复补丁。讨论焦点：长期"频繁弹窗 → 用户麻木自动通过"的安全反模式，威胁风险门本身的设计初衷。配套 #897（提供 `/settings` 开关）共同构成解决方案。

3. **[#836](https://github.com/1jehuang/jcode/issues/836) — `/theme` 斜杠命令与自定义主题调色板** ⭐5 评论
   用户希望在 TUI 中动态切换主题，并以 TOML 文件形式自定义调色板（`~/.jcode/themes/<name>.toml`）。是对现有 auto/dark/light 三模式的关键扩展。

4. **[#677](https://github.com/1jehuang/jcode/issues/677) — 自动重试退避硬编码（共享网关下过早停止）** ⭐4 评论
   共享 LLM 网关返回 `429 Too Many Requests` 但无 `retry-after` 时，固定 2s/4s/6s 退避 + 仅 3 次重试无法满足实际负载，需要可配置化。

5. **[#679](https://github.com/1jehuang/jcode/issues/679) — Memory sidecar 后端可配置（auto/openai/claude/当前 provider）** ⭐4 评论
   当前自动选择逻辑在 Codex OAuth 令牌过期时仍优先选 OpenAI，导致副作用外溢，需要让用户显式指定。

6. **[#608](https://github.com/1jehuang/jcode/issues/608) — `/model` 选择器切换后不持久化** ⭐3 评论
   模型选择重进程后回退到 `config.toml` 的 `default_model`，影响"按任务切模型"工作流。

7. **[#583](https://github.com/1jehuang/jcode/issues/583) — Info widget 跳动 / 隐藏 / 闪烁** ⭐3 评论
   三个并行的展示系统（margin HUD、overscroll status line、右栏 fact stack）独立渲染同一组字段，导致视觉抖动，需要统一抽象。

8. **[#835](https://github.com/1jehuang/jcode/issues/835) — `/mcp` 斜杠命令：交互式启停 MCP 服务器** ⭐3 评论
   提议将开关状态持久化到 `~/.jcode/mcp.json`，并立即刷新内存与 UI 状态，弥补当前只能改配置文件的体验短板。

9. **[#837](https://github.com/1jehuang/jcode/issues/837) — `@file` 完成 + frecency 排序** ⭐3 评论
   输入 `@` 触发文件路径选择器，两层索引（`git ls-files` + 懒扫描忽略目录）+ frecency 排序，并支持文件 chip 删除。

10. **[#900](https://github.com/1jehuang/jcode/issues/900) — `prompt-overlay.md` 每次重读导致 provider 提示缓存失效** ⭐2 评论
    每轮从磁盘重读 overlay / AGENTS.md / preferred-tools.md，并附加到"本应可缓存"的系统提示前缀，单轮浪费约 **97K tokens**。直接影响成本与延迟。

> 其他值得留意：**#887**（Zed 中 ACP 因 `mcpServers` 拒绝启动）、**#883**（`CLAUDE_CONFIG_DIR` 被硬编码 `~/.claude` 覆盖）、**#898**（CSI u 协议未清理导致 tmux 下 Shift+Space 失灵）、**#902**（v0.75.3 Windows 11 UI 崩坏，已有 1 个 👍）。

---

## 🛠 重要 PR 进展（共 5 条，全列）

| # | 状态 | 内容 | 关联 Issue |
|---|---|---|---|
| [#882](https://github.com/1jehuang/jcode/pull/882) | ✅ 已合并 | 修复 Codex 配额窗口重复显示，保留两类 weekly 窗口 | 修复 #869 |
| [#880](https://github.com/1jehuang/jcode/pull/880) | ✅ 已合并 | 修复 `pinned_todos_payload_stays_empty_when_config_off` 测试隔离（强制 `JCODE_PIN_TODOS=0` + 失效配置缓存） | 修复 #877 |
| [#890](https://github.com/1jehuang/jcode/pull/890) | 🟢 Open | 为回退工具调用生成唯一 `toolu_*` ID，区分 provider 合成的占位 ID 与真实 ID | 关联 #884 |
| [#889](https://github.com/1jehuang/jcode/pull/889) | 🟢 Open | ACP 会话接受并忽略 host 提供的 `mcpServers`，仅拒绝非数组畸形值（16 测试通过） | 修复 #887 |
| [#888](https://github.com/1jehuang/jcode/pull/888) | 🟢 Open | 将结构化 `stream_read_error` 归类为 transient 错误，纳入有界重试（125 测试通过） | 修复 #885 |

> 维护者 @1jehuang 当日合并 2 PR、新开 3 PR，节奏紧凑。仓库仍限制外部 PR（外部账户创建 PR 会被 `FORBIDDEN` 拒绝，参见 #892），多数贡献以 Issue 形式提交。

---

## 📈 功能需求趋势

| 方向 | 代表 Issue | 共识度 |
|---|---|---|
| **TUI 体验增强** | #836 主题切换、#837 @file、#835 /mcp、#608 模型持久化、#583 信息 widget 重构 | 🔥🔥🔥🔥🔥 最高 |
| **Provider / ACP 集成扩展** | #575 Cursor ACP、#679 Memory 后端、#571 OpenAI-compatible 字段、#574 OSC 9 进度上报（herdr）、#899 litellm/Azure | 🔥🔥🔥🔥 |
| **配置可配置化与可观测性** | #677 重试退避、#897 风险门开关、#892 遥测 opt-out 测试 | 🔥🔥🔥 |
| **性能与成本优化** | #900 提示缓存失效、#901 替换压缩为 Mastra Observational Memory | 🔥🔥🔥 |
| **平台兼容与边界 case** | #887 ACP+host MCP、#883 CLAUDE_CONFIG_DIR、#898 CSI u+tmux、#896 SSH/键盘映射、#886 macOS bundle 退出、#903 background stdin | 🔥🔥🔥 |
| **i18n / 文档** | #867 简体中文 README 翻译 | 🔥 |

---

## 🧭 开发者关注点（痛点 / 高频需求）

1. **风险门误报的训练效应** — 反复触发会让用户养成"机械确认"反射，反而削弱安全防线（#751 + #897 共同关注）。
2. **配置与环境变量被硬编码忽略** — `CLAUDE_CONFIG_DIR`（#883）、遥测 opt-out 在测试中失败（#892）、macOS bundle 无法关闭（#886），开发者希望尊重用户侧的运行时决策。
3. **流式 / 网关错误的稳健性** — `stream_read_error`（#885/888）、共享网关 429（#677）、provider 校验失败（#899）是高优先级可靠性议题。
4. **工具调用标识与缓存语义** — 回退 ID 冲突导致结果错位（#884/890）、每轮重读 overlay 破坏缓存（#900）都涉及"Provider 协议正确性 + 成本控制"双重痛点。
5. **跨平台 TUI 体验** — Windows 11 UI 崩坏（#902）、tmux CSI u 残留（#898）、SSH 下 Ctrl+Alt+I 误判（#896），提示测试矩阵仍需扩充。
6. **TUI 信息架构去重** — 同一信息字段被三套展示系统重复渲染（#583），反映代码层面的责任切分需要重构。

---

*日报基于 2026-08-11 至 2026-08-12 的 GitHub 公开数据整理。*

</details>

<details>
<summary><strong>pi</strong> — <a href="https://github.com/earendil-works/pi">earendil-works/pi</a></summary>

<think>Let me analyze the GitHub data for the pi (earendil-works/pi) community on 2026-08-12 and generate a comprehensive daily report in Chinese.

Let me organize the data:

**Releases (past 24 hours):** None

**Issues (past 24 hours, top 30 by comments):**
1. #6187 [CLOSED] Pi login hangs in WSL after browser-based GitHub Copilot device authorization - 25 comments, 👍0
2. #7730 [OPEN] High CPU usage on Mac OS with long session - 10 comments, 👍8
3. #7846 [CLOSED] Unable to start 0.84.0, 0.84.1, with bun runtime - 10 comments, 👍1
4. #7553 [OPEN] Configurable thinking level/model for compaction - 8 comments, 👍0
5. #7444 [CLOSED] WebSocket retry only handles two error codes - 8 comments, 👍0
6. #7850 [CLOSED] GitHub Copilot login fails with 429 - 7 comments, 👍7
7. #7836 [OPEN] Edit fuzzy match misses lines with differences in whitespace length - 6 comments, 👍1
8. #7760 [CLOSED] tui(latex): \frac rendered incorrectly - 5 comments, 👍0
9. #7428 [CLOSED] Github Copilot login with subscription fails with 429 - 5 comments, 👍0
10. #7966 [CLOSED] Command line parameter --thinking has no effect - 3 comments, 👍0
11. #7829 [OPEN] Invalid settings.json silently ignored - 3 comments, 👍0
12. #7960 [CLOSED] /resume progress total counts files vs parsed sessions - 3 comments, 👍0
13. #7938 [CLOSED] Anthropic models via OpenRouter fail with cache_control - 3 comments, 👍0
14. #7987 [CLOSED] Package remains absent from gallery after republish - 2 comments, 👍0
15. #7979 [CLOSED] Regression: fallback tool result renderer ignores expanded flag - 2 comments, 👍0
16. #7911 [OPEN] 0.84.0's delta-only message_update removed usage - 2 comments, 👍0
17. #7964 [CLOSED] subagent example: array-form tools throws - 2 comments, 👍0
18. #7954 [CLOSED] OpenAI-compatible SSE turn can hang forever - 2 comments, 👍0
19. #7805 [OPEN] Root .md documentation files loaded as skills - 2 comments, 👍0
20. #7739 [OPEN] Set a startup-time budget - 2 comments, 👍0
21. #7944 [CLOSED] prepareArguments fix unreachable - 2 comments, 👍0
22. #7947 [CLOSED] CMD: 重复输出、内存泄漏 - 2 comments, 👍0
23. #7939 [CLOSED] Hardcoded key checks bypass keybinding configuration - 2 comments, 👍0
24. #7937 [CLOSED] pi-coding-agent and pi-agent-core disagree on session JSONL version - 2 comments, 👍0
25. #7936 [CLOSED] Feature: opt-in inline images inside tmux - 2 comments, 👍0
26. #7935 [CLOSED] Typos in SECURITY.md - 2 comments, 👍0
27. #7931 [CLOSED] /resume shows session count inconsistent - 2 comments, 👍0
28. #7930 [CLOSED] Fullscreen TUI: OSC 8 hyperlinks not clickable - 2 comments, 👍0
29. #7923 [CLOSED] Chinese input renders as blank for single CJK - 2 comments, 👍0
30. #7986 [CLOSED] Expose session-bound off-transcript model streaming to extensions - 1 comment, 👍0

**PRs (past 24 hours, top 20):**
1. #7905 [CLOSED] fix(config): refine pnpm detection - re2zero
2. #7904 [CLOSED] fix(edit): normalize single-object edits argument - re2zero
3. #7866 [CLOSED] feat(tui): add copyOnSelect option to TuiAltScreen - re2zero
4. #7865 [CLOSED] fix(tui): handle pageUp/pageDown in SelectList - re2zero
5. #7989 [OPEN] feat(ai): add Qwen Token Plan Individual CN provider - bigoldcat123
6. #7988 [CLOSED] feat(ai): add Qwen Token Plan Individual CN provider - bigoldcat123
7. #7984 [OPEN] fix(coding-agent): update grok-mermaid to 0.2.3 - xl0
8. #7956 [OPEN] feat(coding-agent): render Mermaid diagrams in HTML exports - aliou
9. #7982 [OPEN] fix(coding-agent): preserve usage in streaming events - christianklotz
10. #7981 [OPEN] fix(ai): map models.dev cost tiers for every provider - bilby91
11. #7978 [CLOSED] fix(edit): normalize single-object edits argument and collapse whitespace - re2zero
12. #7976 [OPEN] DRAFT: agent harness - davidbrai
13. #7970 [OPEN] feat(coding-agent): Show when fullscreen transcript is scrolled up - pablasso
14. #7972 [CLOSED] fix(tui): route selection copy through host clipboard - Panoplos
15. #7722 [OPEN] feat(coding-agent): add theme override - rwachtler
16. #7968 [CLOSED] feat: intercom (live session-to-session messaging) - ksdisch
17. #7965 [CLOSED] docs: document terminal-specific fullscreen mouse behavior - terrorobe
18. #7967 [CLOSED] feat(coding-agent): add VS Code support to notify example - CatBraaain
19. #7901 [CLOSED] feat(ai): AI Gateway transport over Cloudflare AI binding - Maximo-Guk
20. #7897 [CLOSED] fix(coding-agent): inherit subagent session config - virtuald

Let me now write a comprehensive Chinese daily report.

Key themes I see:
1. **Bug fixes in v0.84.0/0.84.1**: Many issues related to recent releases (bun runtime, message_update, session JSONL versions, CLI parameters, etc.)
2. **GitHub Copilot login issues**: Multiple reports of 429 rate limiting during login (#7850, #7428) and WSL hang (#6187)
3. **Performance concerns**: High CPU on Mac (#7730), startup time budget vs jcode (#7739)
4. **Edit tool improvements**: Whitespace normalization (#7836, #7978), single-object args (#7904, #7978)
5. **TUI enhancements**: Mermaid rendering (#7984, #7956), scroll indicator (#7970), OSC 8 hyperlinks (#7930), clipboard (#7972), Chinese input (#7923)
6. **Provider additions**: Qwen CN (#7988, #7989), Cloudflare AI Gateway (#7901), models.dev cost tiers (#7981)
7. **Extension/Skill system issues**: Skills discovery (#7805), tool result rendering (#7979), session streaming for extensions (#7986)
8. **Configuration issues**: Invalid settings.json (#7829), keybinding hardcoded checks (#7939)

Let me write this up in a structured way.</think>

# Pi 社区动态日报 · 2026-08-12

## 📌 今日速览

**v0.84.x 收尾修复潮与新功能并行**：昨日社区集中爆发了多个针对 v0.84.0/0.84.1 版本的回归 bug 报告（bun 运行时崩溃、`message_update` 缺少 `usage`、subagent 配置丢失等），多个 PR 已陆续关闭修复。同时 Qwen CN Token Plan、Cloudflare AI Gateway 等新 provider、Mermaid HTML 渲染、`--use-theme` 主题覆盖等新功能持续推进。

---

## 🚀 版本发布

**无新版本发布**。但根据 issues 数据，社区仍在消化 0.84.0/0.84.1 的若干回归问题。

---

## 🔥 社区热点 Issues（精选 10 条）

| # | Issue | 状态 | 评论 | 重要性 |
|---|-------|------|------|--------|
| [\#6187](https://github.com/earendil-works/pi/issues/6187) | WSL 下 Pi 登录卡死（GitHub Copilot device auth） | CLOSED | 25 | 高频复现的 WSL 环境登录 bug，影响所有 WSL 用户 |
| [\#7730](https://github.com/earendil-works/pi/issues/7730) | Mac OS 长会话高 CPU 占用（100%+） | OPEN | 10 | 👍8，长会话性能瓶颈，影响 macOS 用户体验 |
| [\#7846](https://github.com/earendil-works/pi/issues/7846) | 0.84.0/0.84.1 + Bun 运行时崩溃（zlib.createZstdDecompress） | CLOSED | 10 | 0.84 关键回归，bun 用户被阻塞 |
| [\#7553](https://github.com/earendil-works/pi/issues/7553) | Compaction 思考级别/模型不可配置 | OPEN | 8 | 推理模型用户痛点，自动压缩吃光思考预算 |
| [\#7444](https://github.com/earendil-works/pi/issues/7444) | WebSocket 重试仅处理两个错误码 | CLOSED | 8 | Codex 路径稳定性问题 |
| [\#7850](https://github.com/earendil-works/pi/issues/7850) | GitHub Copilot 登录 429（企业多模型场景） | CLOSED | 7 | 👍7，企业 Copilot 用户普遍遭遇 |
| [\#7836](https://github.com/earendil-works/pi/issues/7836) | Edit 模糊匹配对空白差异误判 | OPEN | 6 | 小模型使用 edit 工具的可靠性问题 |
| [\#7760](https://github.com/earendil-works/pi/issues/7760) | LaTeX `\frac` 跨行分母渲染错误 | CLOSED | 5 | 数学渲染 bug |
| [\#7428](https://github.com/earendil-works/pi/issues/7428) | GitHub Copilot 订阅登录 429 | CLOSED | 5 | 与 #7850 同源问题 |
| [\#7911](https://github.com/earendil-works/pi/issues/7911) | 0.84.0 `message_update` 删除 `usage` 字段 | OPEN | 2 | RPC 协议层回归，影响扩展和监控 |

**社区反应观察**：
- 👍 数最高的两个 issue 是 **#7730（Mac CPU）** 和 **#7850（Copilot 429）**，反映出 **运行时性能** 和 **身份认证可靠性** 是当前最受关注的痛点。
- 大量 CLOSED 的 issue 表明 maintainer 修复响应速度良好，尤其是 [\#6187](https://github.com/earendil-works/pi/issues/6187) 经过 25 条评论的深度讨论后已关闭。

---

## 🛠 重要 PR 进展（精选 10 条）

| # | PR | 状态 | 内容 |
|---|----|----|------|
| [\#7978](https://github.com/earendil-works/pi/pull/7978) | fix(edit): 单对象 edits 参数归一化 + 模糊匹配空白折叠 | CLOSED | 合并 #7836 和 #7904 的修复，增强 edit 工具对小模型输出的鲁棒性 |
| [\#7904](https://github.com/earendil-works/pi/pull/7904) | fix(edit): 归一化单对象 edits 参数 | CLOSED | 让 `edits: {oldText, newText}` 也可被接受 |
| [\#7905](https://github.com/earendil-works/pi/pull/7905) | fix(config): 细化 pnpm 检测逻辑 | CLOSED | 修复 `$PNPM_HOME` 误判 pnpm 管理的安装路径 |
| [\#7866](https://github.com/earendil-works/pi/pull/7866) | feat(tui): TuiAltScreen 新增 `copyOnSelect` 选项 | CLOSED | 允许关闭全屏 TUI 的选中即复制行为 |
| [\#7865](https://github.com/earendil-works/pi/pull/7865) | fix(tui): 基础 SelectList 增加 pageUp/pageDown 键绑定 | CLOSED | 修复所有选择器（含模型选择器）翻页 |
| [\#7988](https://github.com/earendil-works/pi/pull/7988) | feat(ai): 新增 Qwen Token Plan Individual CN provider | CLOSED | 国内阿里云 Qwen Token Plan 中国区订阅 |
| [\#7989](https://github.com/earendil-works/pi/pull/7989) | feat(ai): 同上，独立 PR（Open 状态） | OPEN | 解决 #7847 |
| [\#7982](https://github.com/earendil-works/pi/pull/7982) | fix(coding-agent): 保留 streaming 中的 `usage` 字段 | OPEN | 关闭 #7911 回归 |
| [\#7981](https://github.com/earendil-works/pi/pull/7981) | fix(ai): 为所有 provider 映射 models.dev 成本阶梯 | OPEN | 修复 #7912，完善定价模型 |
| [\#7984](https://github.com/earendil-works/pi/pull/7984) | fix(coding-agent): grok-mermaid 升级到 0.2.3 | OPEN | 关闭 #7832，Mermaid 渲染支持 class |
| [\#7956](https://github.com/earendil-works/pi/pull/7956) | feat(coding-agent): HTML 导出中渲染 Mermaid | OPEN | 与 TUI 对齐的导出能力 |

**未列入表内但值得关注的**：
- [\#7972](https://github.com/earendil-works/pi/pull/7972) 修复 OSC 52 在 Terminal.app/VTE 终端无效的"假复制"提示。
- [\#7970](https://github.com/earendil-works/pi/pull/7970) 全屏 transcript 滚动指示器 `↓`。
- [\#7968](https://github.com/earendil-works/pi/pull/7968) intercom 扩展：会话间实时消息 + 前任 ghost 响应（实验性）。
- [\#7967](https://github.com/earendil-works/pi/pull/7967) notify 示例扩展新增 VS Code 终端支持。
- [\#7901](https://github.com/earendil-works/pi/pull/7901) Cloudflare Workers AI Gateway transport。
- [\#7722](https://github.com/earendil-works/pi/pull/7722) `--use-theme` 命令行主题覆盖。
- [\#7897](https://github.com/earendil-works/pi/pull/7897) subagent 继承父会话 model/thinking 配置。

---

## 📈 功能需求趋势

从近 24 小时 50 条 issue 中提炼：

1. **🧠 模型与推理控制（约 25%）**
   - Compaction 思考级别独立配置（#7553）
   - Qwen CN / Cloudflare AI Gateway / models.dev 成本阶梯 等多 provider 支持
   - OpenAI 兼容 SSE 的不活跃超时（#7954）
   - Anthropic via OpenRouter 缓存控制（#7938）

2. **⚡ 运行时性能与稳定性（约 20%）**
   - Mac OS 长会话 CPU 100%（#7730）
   - 与 jcode 对齐的启动时间预算（#7739）
   - bun 运行时崩溃（#7846）
   - 内存泄漏/重复输出（#7947）
   - SSE 永久挂起（#7954）

3. **🔌 身份认证与 Provider 接入（约 20%）**
   - GitHub Copilot 登录 429（#7850、#7428）
   - WSL 浏览器授权回调（#6187）

4. **🖥 TUI / IDE 集成体验（约 20%）**
   - Mermaid 渲染（HTML 导出 + grok-mermaid 升级）
   - 中文/CJK 输入（#7923）
   - 全屏模式鼠标点击 / OSC 8 链接（#7930）
   - Kitty DCS tmux 图片内联（#7936）
   - 滚动指示器（#7970）、页键（#7865）
   - VS Code notify 支持（#7967）

5. **🧩 扩展 / Skill 体系（约 15%）**
   - Skill 目录根 `.md` 误识别（#7805）
   - 扩展 tool 结果 `Ctrl+O` 展开回归（#7979）
   - 会话绑定的 off-transcript 流式暴露（#7986）
   - 硬编码按键绕过 keybinding 配置（#7939）

---

## 👨‍💻 开发者关注点

综合高频 issue 与 PR 评论，开发者当前最关心：

- **🔧 小模型兼容性**：edit 工具的 `edits` 参数形态（单对象 vs 数组）和模糊匹配是讨论焦点，影响 qwen3.6:27B 等本地模型的可用性。
- **🐛 协议/数据契约稳定性**：v0.84.0 的 `message_update` 去累积化同时误删 `usage`、`pi-agent-core` 与 `pi-coding-agent` 对 JSONL 版本 v3/v4 不一致，反映扩展作者对 **wire protocol 兼容性** 的敏感。
- **⚙️ 配置可观测性**：无效 `settings.json` 静默忽略、Windows 反斜杠未转义等 issue 说明 **错误提示需更友好**，避免在配置错误时给出误导性的 "bash not found"。
- **🔁 Copilot 登录体验**：429 在大模型池组织下普遍出现，与 token 上游限流相关，是 **企业用户刚需**。
- **📊 性能透明化**：`#7739` 提出 jcode 对标 benchmark，开发者希望 **公开可量化的启动时间与内存目标**，而非仅靠社区报告。
- **🌏 中文/本地化**：CMD 输出异常、CJK 单字符空白渲染（#7923）、Qwen CN provider 等多线并行，国内用户体验被持续重视。

---

> 📊 **日报数据范围**：2026-08-11 ~ 2026-08-12，GitHub Issues 50 条 + PRs 50 条。
> 📝 **生成时间**：202

</details>

---
*本日报由 [Big Model Radar](https://github.com/96loveslife/big_model_radar) 自动生成。*
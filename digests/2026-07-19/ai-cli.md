# AI CLI 工具社区动态日报 2026-07-19

> 生成时间: 2026-07-19 03:24 UTC | 覆盖工具: 7 个

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

<think>The user wants me to generate a cross-comparison analysis report based on the daily reports from 6 AI CLI tools (Claude Code, OpenAI Codex, Gemini CLI, GitHub Copilot CLI, Kimi Code CLI, OpenCode, Qwen Code). Let me carefully analyze each tool's data and find common threads, differences, and trends.

Let me extract key data points:

**Claude Code:**
- Releases: 1 (v2.1.215)
- Issues: 50 total, top 30 shown
- PRs: 4
- Hot topics: Windows path handling, macOS TUI clipboard, Remote Control stability, Subagent control

**OpenAI Codex:**
- Releases: 2 (rust-v0.144.6, rust-v0.145.0-alpha.24)
- Issues: 50 total
- PRs: 15
- Hot topics: Windows app stability, SQLite WAL writes, 5-hour usage limit (65 likes), audio support, Multi-Agent V2

**Gemini CLI:**
- Releases: 1 (v0.52.0-nightly)
- Issues: 50 total
- PRs: 5
- Hot topics: Agent stability, Auto Memory system, security vulnerabilities, AST-aware tools

**GitHub Copilot CLI:**
- Releases: 0
- Issues: 27
- PRs: 0
- Hot topics: Claude Opus 1M context (62 likes), Remote sessions (53 likes), Token indicator (19 likes), platform compatibility

**Kimi Code CLI:**
- Releases: 0
- Issues: 2
- PRs: 2
- Hot topics: Reasoning level switching, permission rules

**OpenCode:**
- Releases: 0
- Issues: 50
- PRs: 50
- Hot topics: Opus 4.6 1M tokens (40 comments, 25 likes), subagent limits (20 likes), Windows compatibility, plugins

**Qwen Code:**
- Releases: 3 (v0.19.12, v0.19.12-preview.0, v0.19.12-nightly)
- Issues: 30
- PRs: 50
- Hot topics: MCP integration, subagent isolation, daemon SDK, channels/IM

Common themes:
1. **Windows compatibility issues** - All tools face this
2. **Subagent/Agent control** - Multiple tools
3. **Model/context management** - Claude Opus 1M, caching
4. **MCP integration** - Qwen Code heavily, others less so
5. **IDE/Editor integration** - VSCode, webview issues
6. **Remote/Cloud session support** - Claude Code, Copilot CLI
7. **Performance/Resource issues** - SQLite WAL, log growth
8. **Token/Cost transparency** - Multiple tools
9. **Security concerns** - All tools
10. **Permission systems** - Multiple tools

Differentiation:
- Claude Code: Anthropic ecosystem focus, sophisticated skills/subagents
- OpenAI Codex: Heavy on GPT-5.6 adaptation, audio capabilities, multi-agent
- Gemini CLI: Google ecosystem, AST-aware tools, security focus
- Copilot CLI: GitHub integration, catching up to Claude Code features
- Kimi Code CLI: Reasoning effort focus, smaller scale
- OpenCode: Plugin ecosystem, multi-provider (Kimi, Anthropic, Aperture)
- Qwen Code: Strong focus on MCP, daemon SDK, Chinese IM integration

Activity levels:
- Most active: OpenCode (50+50), Qwen Code (30+50), Claude Code (50+4), OpenAI Codex (50+15)
- Moderate: Gemini CLI (50+5), Copilot CLI (27+0)
- Lower: Kimi Code CLI (2+2)

Let me now write a comprehensive cross-comparison report in Chinese. The user wants:
1. 生态全景 (3-5 sentences)
2. 各工具活跃度对比 (table)
3. 共同关注的功能方向
4. 差异化定位分析
5. 社区热度与成熟度
6. 值得关注的趋势信号

I should be concise, professional, data-supported, and suitable for technical decision-makers and developers. Let me structure this carefully.

The thinking_mode is enabled, so I need to provide detailed thinking and then a comprehensive output.

Let me make the comparison data more accurate:

**Activity Summary:**
| Tool | Releases | Issues | PRs | Top Issue Comments | Top Issue Likes |
|------|----------|--------|-----|---------------------|-----------------|
| Claude Code | 1 | 50 | 4 | 28 (#32870) | 45 (#67609) |
| OpenAI Codex | 2 | 50 | 15 | 28 (#33780) | 65 (#34035) |
| Gemini CLI | 1 | 50 | 5 | 11 (#22323) | 8 (#21409) |
| Copilot CLI | 0 | 27 | 0 | 11 (#3767) | 62 (#2785) |
| Kimi Code CLI | 0 | 2 | 2 | 1 | 0 |
| OpenCode | 0 | 50 | 50 | 40 (#12338) | 25 (#12338) |
| Qwen Code | 3 | 30 | 50 | 10 (#7156) | N/A |

Now let me draft the full report.

Common themes identification:
1. **1M token context for Claude Opus** - Copilot CLI (#2785 62 likes, #1610 18 likes), OpenCode (#12338 40 comments/25 likes)
2. **Subagent control** - Claude Code (#77582 session limits), OpenCode (#27110 parallel limit 20 likes), Qwen Code (#7156 subagent mutates model)
3. **MCP integration** - Qwen Code (multiple), OpenAI Codex (#33946), others light
4. **Windows compatibility** - Claude Code (BSOD, drive letter case), OpenAI Codex (HID, WMI, MCP), OpenCode (AVX2, conhost), Gemini CLI (Wayland)
5. **Remote session** - Claude Code (ccRemoteControl), Copilot CLI (#1979 53 likes)
6. **Token/Usage transparency** - Copilot CLI (#2052 19 likes), OpenCode (#23111), OpenAI Codex (#34035 65 likes)
7. **TUI performance** - Claude Code (clipboard), OpenAI Codex (TUI redraws), Gemini CLI (terminal resize)
8. **Audio/Multi-modal** - OpenAI Codex (multiple), others light
9. **Auto Memory/Session persistence** - Gemini CLI (4 issues), Qwen Code (#7164)
10. **Permission/Security** - All tools

Differentiation analysis:
- Anthropic ecosystem (Claude Code): Skills, subagents, plans
- OpenAI ecosystem (Codex): Heavy GPT-5.6, audio, multi-agent
- Google ecosystem (Gemini CLI): Gemini 3, AST-aware, security
- Microsoft/GitHub (Copilot CLI): Catching up, IDE-first
- Chinese AI (Kimi, Qwen): Reasoning levels, IM integration, MCP
- Open-source provider-agnostic (OpenCode): Plugin ecosystem

Trends:
1. Multi-modal expansion (audio)
2. Multi-agent maturation (V2, subagents)
3. MCP standardization
4. Cloud/Remote sessions
5. Cost transparency
6. Platform parity (Windows in particular)
7. Plugin ecosystem maturation
8. IDE integration depth

Now let me write the final report.</think>

# AI CLI 工具生态横向对比分析报告
**日期：2026-07-19 · 数据范围：7 款主流工具**

---

## 1. 生态全景

当前 AI CLI 工具生态已进入**"双轨竞速"阶段**：一方面 Claude Code、OpenAI Codex 凭借官方模型与协议优势在功能深度上持续领跑（日均 PR/Issue 量级在 50 条左右）；另一方面 OpenCode、Qwen Code 等以**Provider-agnostic + 插件生态**为路线的工具通过工程密度形成差异化护城河。Windows 平台兼容性、子代理治理、1M 长上下文、MCP 协议标准化是当下全行业的四大共性瓶颈；与此同时，**远程/云端会话、多模态（音频）、用量透明化**正成为下一阶段能力分水岭。

---

## 2. 各工具活跃度对比

| 工具 | Release | Issues (24h) | PRs (24h) | 最热 Issue 评论 | 最热 Issue 👍 | 社区阶段判断 |
|------|---------|--------------|-----------|----------------|----------------|--------------|
| **Claude Code** | 1 (v2.1.215) | 50 | 4 | 28 | 45 (#67609) | 成熟期，密集迭代 |
| **OpenAI Codex** | 2 (v0.144.6 + v0.145.0-alpha.24) | 50 | 15 | 28 | 65 (#34035) | 高速扩张期 |
| **Gemini CLI** | 1 (nightly) | 50 | 5 | 11 | 8 (#21409) | 稳定打磨期 |
| **GitHub Copilot CLI** | 0 | 27 | 0 | 11 | 62 (#2785) | "清算日"，集中关单 |
| **Kimi Code CLI** | 0 | 2 | 2 | 1 | 0 | 小规模快迭代 |
| **OpenCode** | 0 | 50 | 50 | 40 | 25 (#12338) | 高密度工程化 |
| **Qwen Code** | 3 (v0.19.12 全套) | 30 | 50 | 10 | — | 激进冲刺期 |

**关键观察：**
- **PR/Issue 比值**反映工程化深度：Qwen Code (1.67)、OpenCode (1.00) 远超其余工具，是社区共建最活跃的项目；Copilot CLI 与 Kimi Code CLI 比值为 0，几乎纯需求驱动。
- **最热 Issue 形态分化**：Copilot CLI 顶部是**已关闭诉求**（社区期待的功能集中落地），而 Claude Code / Codex / OpenCode 顶部仍是**未解痛点**，反映阶段差异。
- **Release 节奏**：Anthropic 与 OpenAI 维持"稳定版 + alpha/nightly"双通道；Gemini CLI 仅出 nightly；Qwen Code 一次发三套版本。

---

## 3. 共同关注的功能方向

以下方向在多个工具社区独立出现，说明是行业级共识：

| 方向 | 涉及工具 | 代表性诉求 |
|------|---------|-----------|
| **🔴 Claude Opus 4.6/4.7 1M 上下文** | Copilot CLI (#2785 62 👍, #1610 18 👍)、OpenCode (#12338 40💬/25👍) | 跨工具最强共识，标志"长上下文"成为标配 |
| **🪟 Windows 平台兼容性** | Claude Code (BSOD #32870、盘符大小写 #75855/#62288)、Codex (HID #33780、WMI #29499、SecureLink)、OpenCode (AVX2 #12553、conhost #28324)、Gemini CLI (Wayland #21983) | 几乎"无工具幸免"，系统级集成短板 |
| **🤖 子代理治理与可观测性** | Claude Code (限额不告警 #77582、模式配置 #78874)、OpenCode (并发上限 #27110 20👍)、Qwen Code (模型污染 #7156)、Gemini CLI (MAX_TURNS 误报 #22323) | 子代理从"能用"走向"可控" |
| **📊 用量与成本透明化** | Codex (#34035 65👍 永久取消 5h 上限)、Copilot CLI (#2052 19👍 状态栏用量)、OpenCode (#23111 缓存 token 内联) | 开发者对"明明白白花钱"的诉求强烈 |
| **🔌 MCP 协议稳定性** | Qwen Code (4+ Issues：#7147/#6970/#6992/#7195)、Codex (#33946 MCP 进程膨胀)、OpenCode (MCP 协议层) | MCP 已成事实标准，但实现质量参差 |
| **🌐 远程/云端会话** | Claude Code (ccRemoteControl 系列)、Copilot CLI (#1979 53👍)、Codex (Mobile/Remote) | "云端接力"成为 IDE 之外的新战场 |
| **🛡️ 权限与安全模型** | Kimi Code (#2508 deny/allow 矛盾)、Gemini CLI (GHSA-wpqr-6v78-jr5g 修复)、Qwen Code (#6606 daemon secret 净化) | 权限语义一致性与安全防护成体系化建设 |
| **📎 TUI/编辑器基础体验** | Claude Code (macOS 剪贴板 6 周未修 #66192 29👍)、Codex (TUI 重绘 #34049/#34045)、Gemini CLI (终端 resize 闪烁 #21924)、OpenCode (Zed SQLite 锁 #28123) | 终端交互仍是"补丁式"打磨 |
| **🎙️ 多模态（音频）扩展** | Codex (3 个相关 PR：#34080/#33982/#34067) | Codex 单点突破，其余工具尚未跟进 |

---

## 4. 差异化定位分析

| 工具 | 核心定位 | 目标用户 | 技术路线特征 |
|------|---------|---------|-------------|
| **Claude Code** | Anthropic 模型原生旗舰 | 重度 Agent 用户、追求可控性 | Skills/Subagents/Plan 体系；行为变更保守（v2.1.215 取消自动触发） |
| **OpenAI Codex** | OpenAI 全栈能力外溢 | GPT-5.6 用户、企业工程团队 | 强多模态（音频）、多 Agent V2、强 TUI 性能工程 |
| **Gemini CLI** | Google Gemini 3 适配入口 | 长上下文与安全敏感场景 | AST 感知工具调研、安全公告驱动（GHSA）、评估体系化 |
| **GitHub Copilot CLI** | GitHub 生态默认入口 | 已订阅 Copilot 的开发者 | "追平 Claude Code"策略，集中补齐 1M 上下文/远程会话/状态栏 |
| **Kimi Code CLI** | 国产推理档位调节 | 关注 reasoning effort 的精英文档用户 | 小而美，单点突破（reasoning level 切换） |
| **OpenCode** | Provider-agnostic 开源中枢 | 多模型切换需求、插件开发者 | 极强工程密度（50 PRs/day）、Kimi/Aperture/Tailscale 等多 provider 适配 |
| **Qwen Code** | 中国市场 + IM 后台自动化 | 企业 IM 集成场景、daemon SDK 用户 | 强 MCP、强 daemon/channel、亚文化特征鲜明 |

**关键差异点：**
- **官方 vs 社区驱动**：Claude Code/Codex/Gemini 由官方主导节奏；OpenCode 与 Qwen Code 走"高 PR 量+社区共建"路线。
- **单模型 vs 多模型**：Claude Code/Codex 深度绑定自家模型；OpenCode/Qwen Code/Copilot CLI 强调多 provider 适配。
- **CLI-only vs IDE-first**：Claude Code/Codex 重心仍在 CLI；Copilot CLI 已将 VSCode 体验视为标配；OpenCode/Qwen Code 拓展至 daemon/IM 后台。

---

## 5. 社区热度与成熟度

### 🔥 高活跃度（高 Issue/PR 量 + 强诉求未解）
- **Claude Code**、**OpenAI Codex**：典型"成熟期阵痛"——功能丰富但稳定性挑战集中爆发，Windows/远程/TUI 等基础设施类问题反复出现。
- **OpenCode**：双 50 的体量代表**强工程化社区**，但 PR 合并节奏快、质量参差（部分 PR 由 bot 接力修复同一问题）。

### 🟡 中等活跃度
- **Gemini CLI**：50 Issues + 5 PRs 表明"以 Issue 收集需求为主"，工程推进由官方小团队主导，节奏稳健。
- **Qwen Code**：30 Issues + 50 PRs + 3 个 Release，是**当前最激进的迭代节奏**，但需关注快速扩张带来的兼容性债。
- **Copilot CLI**：27 Issues 几乎全部为"高赞诉求集中关闭"，呈现明显的**"清算日"特征**，预示 v1.0.7x 系列即将集中落地一批关键功能。

### 🟢 低活跃度（聚焦细分）
- **Kimi Code CLI**：2+2 体量小但 Issue/PR 强关联（#2501 ↔ #2509），属于"小而美"形态。

---

## 6. 值得关注的趋势信号

### 📈 趋势 ①：长上下文成为新基准
Copilot CLI 与 OpenCode 合计 **125+ 👍** 投向"Opus 1M 上下文"。这意味着开发者已不满足于"够用"，而是将 1M token 视为现代 Agent 的入门门槛。对**需要处理大型代码库/长文档的团队**——这是评估工具能力的新硬指标。

### 📈 趋势 ②：子代理从"功能"走向"治理"
多个工具同时出现"子代理并发上限"、"限额告警"、"模型污染"、"MAX_TURNS 误报"等议题，反映**Subagent 已从尝鲜期进入生产可用期**，随之而来的是配额治理、错误恢复、可观测性等"运维化"需求。**建议**：选型时重点考察工具对子代理生命周期与成本的可控性。

### 📈 趋势 ③：MCP 协议成为事实标准，但实现质量分化
Qwen Code 单日 4+ MCP 相关 Issue 揭示：**协议已统一，体验未统一**。OpenAI Codex、Windows、OpenCode 均有 MCP 相关 Bug。这意味着短期内"MCP 兼容度"将成为工具成熟度的新刻度线。

### 📈 趋势 ④：远程/云端会话重塑工作流
Claude Code (ccRemoteControl)、Copilot CLI (#1979 53👍)、Codex Mobile 等共同指向**"在 IDE 之外继续工作"的范式**。对分布式团队和移动场景这是核心卖点。

### 📈 趋势 ⑤：多模态（音频）悄然进入 CLI
Codex 单日 3 个音频相关 PR（#34080/#33982/#34067）显示，下一代 CLI 将不再只是"文本+代码"，而是包含音频输入输出。这对**会议记录、播客剪辑、语音备忘录**类场景有直接影响。

### 📈 趋势 ⑥：Windows 平台成为系统性短板
跨 6 款工具均出现 Windows 相关问题（BSOD、HID、WMI、AVX2、conhost、MCP 权限 UI）。这反映**CLI 工具普遍诞生于 macOS/Linux 优先的团队**，

---

## 各工具详细报告

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills 社区热点

> 数据来源: [anthropics/skills](https://github.com/anthropics/skills)

<think>The user wants me to analyze the GitHub data from anthropics/skills repository and generate a community hot topic report. Let me carefully analyze the data provided.

Looking at the PRs and Issues, I need to identify:
1. Top Skills (PRs) by community attention
2. Community demand trends from Issues
3. High-potential unmerged PRs
4. Ecosystem insights

Let me organize this analysis:

**Top PRs by attention (based on recency, comments, and significance):**

1. PR #1298 - fix(skill-creator): run_eval.py always reports 0% recall - Critical bug fix, related to multiple issues
2. PR #514 - Add document-typography skill - Document quality control
3. PR #538 - fix(pdf): case-sensitive file references - Bug fix
4. PR #486 - Add ODT skill - OpenDocument format support
5. PR #210 - Improve frontend-design skill - Quality improvement
6. PR #83 - Add skill-quality-analyzer and skill-security-analyzer - Meta skills
7. PR #541 - fix(docx): prevent tracked change w:id collision - Bug fix
8. PR #1367 - feat(skills): add self-audit - Quality gate
9. PR #1099 - skill-creator: fix Windows subprocess pipe
10. PR #1050 - skill-creator: fix Windows compatibility
11. PR #723 - testing-patterns skill
12. PR #525 - pyxel retro game skill
13. PR #509 - CONTRIBUTING.md
14. PR #362 - UTF-8 panic fix
15. PR #361 - YAML special character detection
16. PR #181 - SAP-RPT-1-OSS predictor
17. PR #1323 - fix run_eval trigger detection
18. PR #1302 - color-expert skill

**Top Issues:**

1. Issue #492 - Security: Community skills under anthropic/ namespace (34 comments) - HOT
2. Issue #228 - Enable org-wide skill sharing (14 comments)
3. Issue #556 - run_eval.py 0% trigger rate (12 comments)
4. Issue #62 - Skills disappeared bug (10 comments)
5. Issue #1329 - compact-memory skill proposal (9 comments)
6. Issue #202 - skill-creator best practices (8 comments) - CLOSED
7. Issue #412 - agent-governance skill proposal (6 comments) - CLOSED
8. Issue #189 - duplicate skills in plugins (6 comments)
9. Issue #1175 - SharePoint security concerns (4 comments) - CLOSED
10. Issue #29 - Usage with bedrock (4 comments)
11. Issue #16 - Expose Skills as MCPs (4 comments)
12. Issue #1385 - Reasoning Quality Gate Pipeline (3 comments)
13. Issue #1169 - recall=0% (3 comments)
14. Issue #1061 - Windows compatibility (3 comments)

Now let me write the report in Chinese (since the user wrote in Chinese), with proper structure and links.

Note: The user said the report should contain these sections, and the language requirement is "简洁专业" (concise and professional). I should respond in Chinese.

Let me think about categorization:

**热门 Skills 排行** - I'll rank by engagement signals (comments, likes, recency, importance):
- Most discussed: skill-creator fixes (high engagement, multiple PRs and issues)
- New skill proposals with high attention
- Bug fixes that affect many users

**Community Demand Trends**:
1. Meta-skills (skill quality, security, audit) - very high demand
2. Skill sharing/distribution mechanisms
3. Cross-platform compatibility (Windows)
4. Document handling (ODT, PDF, typography)
5. Testing patterns
6. Color/design expertise
7. Agent governance
8. Compact memory / context efficiency
9. MCP integration

**High-potential Unmerged PRs**:
- PR #1298 (skill-creator fix)
- PR #1367 (self-audit)
- PR #1302 (color-expert)
- PR #514 (document-typography)
- PR #486 (ODT)
- PR #723 (testing-patterns)
- PR #525 (pyxel)
- PR #210 (frontend-design improvements)

**Insights**:
The community is most focused on:
1. Fixing the foundation (skill-creator) - many issues
2. Quality & security tooling for skills themselves
3. Cross-platform support (Windows)
4. New domain-specific skills (testing, color, docs)

The single-sentence insight: 社区最集中的诉求是"Skills 的工业化"——包括对 skill-creator 本身的稳定性修复、对 Skills 质量与安全审计工具的需求、以及跨平台（Windows）兼容性的保障，标志着生态从"提交 Skill"向"运营 Skill 平台"演进。

Let me write this up professionally.</think>

# Claude Code Skills 社区热点报告

**数据截止**: 2026-07-19 | **样本**: Top 20 PRs + Top 15 Issues

---

## 一、热门 Skills 排行

按综合关注度（评论数 / 关联 Issue 数 / 修复必要性）排序：

| 排名 | Skill / PR | 功能 | 状态 | 社区热点 | 链接 |
|---|---|---|---|---|---|
| 1 | **skill-creator 评测修复链** (#1298, #1323, #1099, #1050, #362, #361) | 修复 `run_eval.py` 始终返回 recall=0%、Windows 子进程崩溃、UTF-8 Panic、YAML 特殊字符未引号告警 | 多 PR OPEN | Issue #556 (12 评论) 和 #1169 描述同一个 bug 在 10+ 用户复现 —— 这是**阻塞 description 优化循环的核心缺陷** | [#1298](https://github.com/anthropics/skills/pull/1298) · [#1323](https://github.com/anthropics/skills/pull/1323) · [#556](https://github.com/anthropics/skills/issues/556) |
| 2 | **document-typography** (#514) | 自动修复 AI 生成文档中的 orphan / widow / 编号错位等排版问题 | OPEN | 触及"每个 Claude 生成的文档"这一高频痛点 | [#514](https://github.com/anthropics/skills/pull/514) |
| 3 | **ODT (OpenDocument)** (#486) | 创建/读取/转换 .odt / .ods，覆盖 ISO 标准的开源办公格式 | OPEN | 补齐与 docx/pdf 的格式矩阵 | [#486](https://github.com/anthropics/skills/pull/486) |
| 4 | **skill-quality-analyzer + skill-security-analyzer** (#83) | 五维度质量评分 + 静态安全扫描，作为元 Skill 入驻 marketplace | OPEN | 与 Issue #492（安全命名空间滥用，34 评论）形成直接呼应 | [#83](https://github.com/anthropics/skills/pull/83) · [#492](https://github.com/anthropics/skills/issues/492) |
| 5 | **self-audit** (#1367) | 交付前机械验证文件存在 + 四维推理审计（按破坏严重度排序） | OPEN | Issue #1385 同作者的"三道质量门"管线下游配套 | [#1367](https://github.com/anthropics/skills/pull/1367) |
| 6 | **color-expert** (#1302) | ISCC-NBS / Munsell / OKLCH 等色彩命名与空间选择表 | OPEN | 设计与前端社区的专业知识封装 | [#1302](https://github.com/anthropics/skills/pull/1302) |
| 7 | **testing-patterns** (#723) | 完整测试方法论：Testing Trophy + React + Mock + 覆盖率 | OPEN | 填补"代码质量保障"领域的 Skill 空白 | [#723](https://github.com/anthropics/skills/pull/723) |
| 8 | **frontend-design v2** (#210) | 重写 frontend-design 的指令，使其在单轮会话内可执行 | OPEN | 解决现有 Skill "指令过于抽象"的老问题 | [#210](https://github.com/anthropics/skills/pull/210) |

---

## 二、社区需求趋势

从 Issues 的高频方向提炼：

| 趋势 | 代表 Issue | 关注度 | 解读 |
|---|---|---|---|
| **🔒 Skills 安全与信任边界** | [#492](https://github.com/anthropics/skills/issues/492)（34 评论 / 👍2） | 🔥🔥🔥🔥🔥 | **全榜第一**。社区 Skill 以 `anthropic/` 命名空间分发，造成官方冒充。需尽快建立命名/签名/审计机制。 |
| **🏢 组织级 Skill 分发** | [#228](https://github.com/anthropics/skills/issues/228)（14 评论 / 👍7） | 🔥🔥🔥🔥 | 现状：手动下载 .skill → Slack → 手动上传。期望组织内共享库或直链。 |
| **🪟 Windows 兼容性** | [#1061](https://github.com/anthropics/skills/issues/1061)（3 评论）+ #1050、#1099 | 🔥🔥🔥 | PATHEXT、cp1252、subprocess.Pipe、select() 等 Unix 假设导致 skill-creator 在 Windows 直接崩溃。 |
| **🧠 上下文与记忆压缩** | [#1329](https://github.com/anthropics/skills/issues/1329)（9 评论） | 🔥🔥🔥 | 长会话中 agent 自身笔记占大量 context，需求"符号化紧凑记忆"Skill。 |
| **🛡️ Agent Governance / 安全模式** | [#412](https://github.com/anthropics/skills/issues/412)（6 评论，已 CLOSED） | 🔥🔥🔥 | 提案被关闭但讨论热度高 —— 策略执行、信任评分、审计日志。 |
| **🧩 Skills-as-MCP** | [#16](https://github.com/anthropics/skills/issues/16)（4 评论） | 🔥🔥 | 将 Skill 暴露为 MCP API，统一软件封装协议。 |
| **☁️ 平台集成** | [#29](https://github.com/anthropics/skills/issues/29)（AWS Bedrock）、[#1175](https://github.com/anthropics/skills/issues/1175)（SharePoint，已 CLOSED） | 🔥🔥 | 企业落地需求：Bedrock、SPO 等。 |
| **📦 安装去重** | [#189](https://github.com/anthropics/skills/issues/189)（6 评论 / 👍9） | 🔥🔥 | `document-skills` 与 `example-skills` 插件含相同 Skill 致上下文重复。 |

---

## 三、高潜力待合并 Skills（关注度高 + 仍 OPEN）

这些 PR 已积累显著的修复价值或社区呼声，**最有可能近期落地**：

| PR | Skill | 关键价值 | 链接 |
|---|---|---|---|
| **#1298** | skill-creator 综合修复 | 阻塞所有 description 优化流程；与 #556 联动 | [链接](https://github.com/anthropics/skills/pull/1298) |
| **#1323** | run_eval 触发检测修复 | 与 #1298 互补，必须同步合并 | [链接](https://github.com/anthropics/skills/pull/1323) |
| **#1050 / #1099** | skill-creator Windows 兼容 | 修复后 Windows 用户才可使用 skill-creator | [#1050](https://github.com/anthropics/skills/pull/1050) · [#1099](https://github.com/anthropics/skills/pull/1099) |
| **#83** | skill-quality-analyzer + skill-security-analyzer | 直接回应 #492 安全议题 | [链接](https://github.com/anthropics/skills/pull/83) |
| **#1367** | self-audit 质量门 | 通用、与 #1385 提案形成完整管线 | [链接](https://github.com/anthropics/skills/pull/1367) |
| **#514** | document-typography | 跨所有文档生成场景的即时收益 | [链接](https://github.com/anthropics/skills/pull/514) |
| **#486** | ODT Skill | 补全 docx/pdf/odt 三大格式 | [链接](https://github.com/anthropics/skills/pull/486) |
| **#362 / #361** | UTF-8 + YAML 校验 | 极小改动（1-2 行）但消除 Panic/静默错 | [#362](https://github.com/anthropics/skills/pull/362) · [#361](https://github.com/anthropics/skills/pull/361) |
| **#541 / #538** | docx / pdf 案例敏感 + w:id 冲突 | 修复真实文档损坏 | [#541](https://github.com/anthropics/skills/pull/541) · [#538](https://github.com/anthropics/skills/pull/538) |

---

## 四、Skills 生态洞察

> **社区最集中的诉求是"Skills 的工业化"——围绕 skill-creator 的稳定性修复（recall=0% / Windows 崩溃 / UTF-8）、对 Skills 自身的质量与安全审计工具需求、以及跨平台兼容保障，生态正从"提交单个 Skill"快速演进为"运营可信赖的 Skill 平台"。**

具体而言，三股力量在并行：

1. **地基修补**（skill-creator 的 6 个相关 PR/Issue）—— 表明官方工具链尚未与社区贡献节奏匹配；
2. **元 Skills 涌现**（quality / security / self-audit）—— 社区自发建立"Skill 的 Skill"，是生态成熟的关键标志；
3. **信任与分发机制缺失**（Issue #492 / #228）—— 命名空间混淆与缺乏组织级共享，是阻碍规模化的最大瓶颈，**也是官方最值得优先介入的方向**。

---

<think>The user wants me to generate a Chinese daily report for Claude Code community dynamics based on GitHub data. Let me analyze the data carefully and produce a structured report.

Let me organize the information:

**Release:**
- v2.1.215: Claude no longer runs `/verify` and `/code-review` skills automatically; users must invoke them manually.

**Top Issues by comments (top 10):**
1. #32870 - Windows BSOD via Wof.sys during directory listing (28 comments)
2. #66192 - Copy-paste not working on macOS (27 comments, 29 thumbs)
3. #67609 - Advisor tool returns "unavailable" on claude-fable-5 with transcripts >100K tokens (25 comments, 45 thumbs)
4. #52121 - Grep and Glob tools missing when ENABLE_TOOL_SEARCH=true (16 comments, 18 thumbs)
5. #62288 - VS Code extension hides sessions due to drive-letter case (10 comments)
6. #68250 - ccRemoteControlDefaultEnabled: true not honored on restart (5 comments)
7. #70733 - Cowork tab missing, rootfs.vhdx issue on Windows 11 (4 comments)
8. #77582 - Session limit warning not surfaced to agent (3 comments)
9. #75855 - Windows drive-letter case not canonicalized in project keys (3 comments)
10. #78607 - Remote control connection failures (2 comments)

**PRs:**
1. #50293 - fix: use -exist flag in ipset add
2. #72451 - fix: remove statsig.anthropic.com from init-firewall.sh
3. #41611 - add the missing source to claude code
4. #78963 - fix(hookify): hook scripts break when plugin installed under version-numbered directory

Note: Only 4 PRs in the data, but the user asked for 10. I should note that there are only 4 PRs available.

Let me now write the report in Chinese, following the requested structure.</think>

# Claude Code 社区动态日报
**日期：2026-07-19**

---

## 1. 今日速览

今日 Claude Code 发布 v2.1.215，**移除了 `/verify` 和 `/code-review` 技能的自动触发机制**，需用户手动调用，这一变更也同步带来了文档更新需求（#78993）。社区热点集中在三个方向：Windows 平台路径处理缺陷引发的多类问题（BSOD、驱动盘符大小写、项目键冲突）、macOS 上 TUI 剪贴板长期失效（持续近 6 周、29 个 👍），以及 Remote Control 功能在多端的稳定性问题。

---

## 2. 版本发布

### v2.1.215

**变更内容：**
- Claude 不再自动运行 `/verify` 和 `/code-review` 技能；当用户希望执行时，需显式通过 `/verify` 或 `/code-review` 手动调用。

**影响：**
- 行为更加可控、可预测，避免误触发消耗额外 token。
- 已有相关 issue 跟进文档同步问题，详见 [#78993](https://github.com/anthropics/claude-code/issues/78993)。

---

## 3. 社区热点 Issues

### 🔴 严重/高影响 Bug

| # | 标题 | 平台 | 评论 | 👍 | 重要原因 |
|---|------|------|------|----|---------|
| [#32870](https://github.com/anthropics/claude-code/issues/32870) | `claude.exe` 通过 Wof.sys 触发 Windows BSOD | Windows | 28 | 0 | **致命级故障**：执行目录列表时直接蓝屏，且报告者提供完整复现路径 |
| [#67609](https://github.com/anthropics/claude-code/issues/67609) | Advisor tool 在 claude-fable-5 上 transcript 超 100K token 后返回 "unavailable" | macOS / Model | 25 | **45** | 高赞问题，**纯服务端缺陷**，直接影响长上下文场景的核心功能；低于该阈值则正常 |
| [#66192](https://github.com/anthropics/claude-code/issues/66192) | 复制粘贴功能不可用 | macOS / TUI | 27 | **29** | TUI 基础交互长期失效（自 6 月 8 日起开放 6 周未修复），影响所有 macOS 用户 |
| [#52121](https://github.com/anthropics/claude-code/issues/52121) | 开启 `ENABLE_TOOL_SEARCH=true` 后 Grep / Glob 工具从注册表中消失 | macOS / Tools | 16 | 18 | 启用工具搜索功能后核心工具静默丢失，与文档行为不符 |
| [#62288](https://github.com/anthropics/claude-code/issues/62288) | VS Code 扩展因驱动盘符大小写差异隐藏会话 | Windows / VSCode | 10 | 2 | VSCode 用户在切换盘符大小写时丢失会话可见性 |

### 🟡 中等影响

| # | 标题 | 平台 | 评论 | 👍 | 重要原因 |
|---|------|------|------|----|---------|
| [#68250](https://github.com/anthropics/claude-code/issues/68250) | `ccRemoteControlDefaultEnabled: true` 在重启后被重置为 OFF | macOS / Desktop | 5 | 3 | 配置项不生效，每次重启都要手动开启 Remote Control |
| [#70733](https://github.com/anthropics/claude-code/issues/70733) | Windows 11 重装后 Cowork Tab 缺失，rootfs.vhdx 未下载 | Windows / Desktop | 4 | 0 | 干净重装后核心功能缺失 |
| [#77582](https://github.com/anthropics/claude-code/issues/77582) | Session 限额警告未通知 Agent，后台工作流持续消耗配额 | macOS / Cost / Agents | 3 | 0 | 在 `/effort ultracode` 模式下 14 个子代理持续烧配额，缺乏可控性 |

### 🟢 值得关注

| # | 标题 | 平台 | 评论 | 👍 | 重要原因 |
|---|------|------|------|----|---------|
| [#75855](https://github.com/anthropics/claude-code/issues/75855) | Windows 驱动盘符大小写在项目键中未规范化，导致 `.claude.json` / `installed_plugins.json` 重复、VSCode trust 静默失效 | Windows | 3 | 0 | 与 #62288 互为印证：**Windows 路径处理存在系统性缺陷** |
| [#78607](https://github.com/anthropics/claude-code/issues/78607) | Remote Control 频繁连接失败 | macOS | 2 | 0 | 与 #68250、#78987 共同指向 Remote Control 在多端的稳定性短板 |

---

## 4. 重要 PR 进展

> 过去 24 小时仅有 **4 条** PR 更新，数量较少但全部聚焦在 devcontainer 与插件基础设施的修复上：

| # | 标题 | 关键变更 |
|---|------|---------|
| [#78963](https://github.com/anthropics/claude-code/pull/78963) | `fix(hookify)`: 插件安装在带版本号目录下时钩子脚本失效 | 修复 `pretooluse.py` 等脚本通过 `CLAUDE_PLUGIN_ROOT` 解析 `hookify.core` 的方式，使其在版本化目录命名（如 `hookify@1.2.3/`）下也能正确启动 |
| [#72451](https://github.com/anthropics/claude-code/pull/72451) | `fix`: 从 `init-firewall.sh` 移除 `statsig.anthropic.com` | 该域名已无法解析，会导致 devcontainer 启动时 `init-firewall.sh` 校验失败 |
| [#50293](https://github.com/anthropics/claude-code/pull/50293) | `fix`: 在 ipset add 中使用 `-exist` 标志 | 防止 `init-firewall.sh` 重复运行时因 IP 重复而报错失败 |
| [#41611](https://github.com/anthropics/claude-code/pull/41611) | `add the missing source to claude code` | 补充缺失的源码文件（描述较为简略，需关注后续澄清） |

**小结：** 本批次 PR 主要围绕 devcontainer 启动鲁棒性（#72451、#50293）和插件路径兼容性（#78963），反映出社区开发者正主动为 Linux/容器化部署体验"打补丁"。

---

## 5. 功能需求趋势

从今日 Issues（含新增未展示的 20 条）中可提炼出以下社区关注方向：

### 🔥 头号主题：Windows 路径与盘符处理
- [#32870](https://github.com/anthropics/claude-code/issues/32870) BSOD
- [#62288](https://github.com/anthropics/claude-code/issues/62288) VSCode 会话隐藏
- [#75855](https://github.com/anthropics/claude-code/issues/75855) 项目键重复
- [#78989](https://github.com/anthropics/claude-code/issues/78989) Esc 中断后注入伪造消息

**结论：** Windows 平台在路径规范化、驱动盘符大小写、中断信号处理上存在系统性短板，是当前最高优先级方向。

### 🔥 模型相关
- 长上下文（100K+）下 Advisor 工具不可用 [#67609](https://github.com/anthropics/claude-code/issues/67609)
- 内容安全策略过严误判 [#78992](https://github.com/anthropics/claude-code/issues/78992)、[#78990](https://github.com/anthropics/claude-code/issues/78990)、[#78983](https://github.com/anthropics/claude-code/issues/78983)
- 捆绑工作流（`/code-review`、`deep-research`）无法指定模型 [#78994](https://github.com/anthropics/claude-code/issues/78994)

### 🔥 成本与配额控制
- 后台工作流在限额警告后继续烧配额 [#77582](https://github.com/anthropics/claude-code/issues/77582)
- 安全策略文本重复注入消耗 token [#78935](https://github.com/anthropics/claude-code/issues/78935)

### 🔥 IDE 与编辑器集成
- VSCode 扩展会话/信任机制（[#62288](https://github.com/anthropics/claude-code/issues/62288)、[#75855](https://github.com/anthropics/claude-code/issues/75855)、[#78989](https://github.com/anthropics/claude-code/issues/78989)）
- 状态栏显示模型 [#78984](https://github.com/anthropics/claude-code/issues/78984)

### 🔥 远程控制 / 桌面应用
- 配置不持久化 [#68250](https://github.com/anthropics/claude-code/issues/68250)
- 连接频繁失败 [#78607](https://github.com/anthropics/claude-code/issues/78607)
- 移动端显示 Disconnected 但本地进程仍在 [#78987](https://github.com/anthropics/claude-code/issues/78987)

### 🔥 工作流 / 子代理 / 沙箱
- 多 worktree 下 `CLAUDE_CODE_TASK_LIST_ID` 全局共享且无 per-worktree 隔离 [#78874](https://github.com/anthropics/claude-code/issues/78874)
- 禁止操作规则阻碍沙箱环境登录测试 [#78985](https://github.com/anthropics/claude-code/issues/78985)
- 捆绑工作流缺乏模型覆盖 [#78994](https://github.com/anthropics/claude-code/issues/78994)

---

## 6. 开发者关注点

### ⚠️ 主要痛点

1. **Windows 平台的"看不见的伤害"** —— 多个相互独立报告指向同一根因：**驱动盘符大小写与路径规范化未统一**。同一台机器只需切换工作目录的盘符大小写，就可能引发 BSOD、项目键重复、VSCode 信任丢失三重问题。开发者反映这种"静默失败"在生产环境难以诊断。

2. **macOS TUI 的剪贴板长期失效** —— [#66192](https://github.com/anthropics/claude-code/issues/66192) 自 6 月 8 日开放至今 6 周未修复，29 个 👍，影响所有 macOS CLI 用户的基础工作流。社区期待是基础能力的修复而非增强。

3. **可控性与配额治理** —— Agent/Workflow 在执行复杂任务（`/effort ultracode`）时会拉起 10-15 个子代理，但**无法指定模型、无法中止限额后的执行**。结合安全策略文本被重复注入的问题（[#78935](https://github.com/anthropics/claude-code/issues/78935)），用户在成本上承担了过多不可控因素。

4. **Remote Control 的多端不一致** —— 桌面端配置不持久、移动端状态显示与本地进程脱节、连接频繁失败，呈现"功能已发布、稳定性未达标"的状态。

5. **文档与行为漂移** —— v2.1.215 主动移除了 `/verify` / `/code-review` 的自动触发，但官方 skills 文档（[code.claude.com/docs/en/skills](https://code.claude.com/docs/en/skills)）仍暗示可自动运行（[#78993](https://github.com/anthropics/claude-code/issues/78993)）。开发者呼吁版本变更与文档同步。

### 💡 高频需求

- **基础稳定性 > 新功能**：剪贴板、路径处理、连接稳定性等"小问题"长期被积压。
- **Windows 一等公民**：希望官方在路径规范化、VSCode 集成上投入更多精力。
- **子代理的精细化控制**：模型覆盖、per-worktree 隔离、配额阈值可配置。
- **内容安全策略的"白名单沙箱"机制**：开发者希望在开发/QA 环境中测试登录注册类功能时不被误伤（[#78985](https://github.com/anthropics/claude-code/issues/78985)）。
- **`/insights` 等长期运行命令的鲁棒性**：在大会话下被自身的 500 token 限制反噬，输出错误结论（[#78991](https://github.com/anthropics/claude-code/issues/78991)）。

---

> 📊 **数据口径**：基于 2026-07-19 当日 GitHub `anthropics/claude-code` 仓库的 releases、issues、PRs 更新流。Issues 总数 50 条，本文展示评论数 Top 30；PRs 共 4 条已全部列出。

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

<think>Let me analyze the GitHub data for OpenAI Codex and generate a comprehensive Chinese daily report for 2026-07-19.

Key observations from the data:

1. **Releases**:
   - `rust-v0.144.6`: Bug fix - refreshed bundled instructions for GPT-5.6 Sol, Terra, and Luna models, corrected context windows to 272,000 tokens (#33972, #34009)
   - `rust-v0.145.0-alpha.24`: Alpha release

2. **Top Issues by comment count** (out of 50 total):
   - #33780: Windows app hangs due to HID device enumeration (28 comments, 👍6)
   - #17320: Excessive SQLite WAL writes during streaming due to TRACE logs (18 comments, 👍38) - very high upvotes
   - #24948: Codex session logs grow to 700MB-2GB (13 comments)
   - #21839: Previously-existing sessions with full access require approvals (13 comments)
   - #11735: Stream disconnected before completion (11 comments)
   - #34035: Make temporary removal of 5-hour usage limit permanent (9 comments, 👍65) - very popular
   - #32530: VS Code Codex panel stuck loading on Linux (8 comments, 👍12)
   - #29499: Codex triggers high CPU usage in WMI Provider Host on Windows (6 comments)
   - #33314: Multi-Agent V2 needs verifiable full-profile application (5 comments, 👍8)
   - #26825: Codex mobile remote visibly reconnects (4 comments)
   - #31957: Codex desktop falsely reports "GitHub CLI not authenticated" on macOS (4 comments)
   - #30816: Weekly usage reset date changed unexpectedly (4 comments)

3. **Notable PRs**:
   - #34085: Support legacy views for paginated thread history
   - #34080: Add audio output support to dynamic tools and code mode
   - #34067: Seed realtime V3 sessions with initial text items
   - #34049: Avoid redundant TUI redraws while streaming
   - #34047: Avoid resending the model for reasoning shortcuts
   - #34045: Render streamed Markdown incrementally
   - #31781: Bound executor-controlled HTTP response buffering
   - #34009: Narrow 0.144 hotfix to GPT-5.6 prompts and context
   - #33972: Backport refreshed bundled model metadata to 0.144
   - #33982: Gate audio history by model input modalities
   - #33950: Let users remember the working directory for resumed sessions

4. **Feature request trends**:
   - Rate limits (5-hour usage removal permanent, weekly usage)
   - Windows-specific issues (multiple, very prominent)
   - Linux VS Code extension issues
   - Multi-Agent V2 features
   - MCP integration
   - Audio support
   - Session management

5. **Developer pain points**:
   - Windows platform stability (HID enumeration, WMI high CPU, SecureLink crashes)
   - Performance issues (large session logs, streaming TUI redraws, MCP process duplication)
   - IDE extension reliability
   - Rate limit policy changes
   - Pasting code formatting issues

Let me now construct a well-structured Chinese daily report.</think>

# OpenAI Codex 社区动态日报
**2026-07-19 · GitHub Daily Digest**

---

## 📌 今日速览

今日 Codex 项目主线聚焦 **GPT-5.6 系列模型元数据回溯**——rust-v0.144.6 将 Sol/Terra/Luna 三个变体的 context window 统一修正为 272k tokens，#34009 进一步收窄热修复范围以避免引入 #33972 的无关目录改动。社区层面，**Windows 应用稳定性**议题持续高企（首条 Issue 评论达 28 条），同时 **#34035 提案将临时移除的 5 小时使用上限永久化** 获得 65 个 👍，成为当日最高赞讨论；多条 PR 已合并至主分支，涵盖 **音频能力、增量 Markdown 渲染、TUI 性能** 等方向。

---

## 🚢 版本发布

### rust-v0.144.6 (稳定版)
- **关键变更**：刷新 GPT-5.6 Sol / Terra / Luna 的内置指令；将 context window 修正为 **272,000 tokens**（#33972 → #34009 二次回溯）
- **附注**：#34009 主动 revert 了 #33972 中的无关模型目录元数据改动，保证热修复聚焦

### rust-v0.145.0-alpha.24
- 进入 0.145 alpha 通道的滚动更新

---

## 🔥 社区热点 Issues（Top 10）

| # | Issue | 核心议题 | 社区热度 |
|---|-------|---------|---------|
| 1 | [#33780](https://github.com/openai/codex/issues/33780) | **Windows 应用启动挂死**：HID 设备枚举阻塞主进程，遇到无响应设备即触发"Not Responding" | 💬28 / 👍6 |
| 2 | [#17320](https://github.com/openai/codex/issues/17320) | **流式响应期间 SQLite WAL 写入暴增**：`RUST_LOG` 未过滤 TRACE 日志导致严重 I/O 抖动 | 💬18 / 👍38 |
| 3 | [#24948](https://github.com/openai/codex/issues/24948) | **会话日志膨胀至 700MB–2GB**：compaction 历史与原始工具输出未及时清理 | 💬13 / 👍0 |
| 4 | [#21839](https://github.com/openai/codex/issues/21839) | **历史 full-access 会话强制要求重新授权**：权限回归影响既有用例 | 💬13 / 👍0 |
| 5 | [#11735](https://github.com/openai/codex/issues/11735) | **流式连接提前断开**：影响 ChatGPT 后端 `codex/responses` 路径 | 💬11 / 👍2 |
| 6 | [#34035](https://github.com/openai/codex/issues/34035) | **永久移除 5 小时用量上限**：聚焦 Plus/Pro/Business 套餐 | 💬9 / 👍65 ⭐ 最高赞 |
| 7 | [#32530](https://github.com/openai/codex/issues/32530) | **Linux VS Code 扩展加载卡死**：本地 webview 资源加载 `net::ERR_FAILED` | 💬8 / 👍12 |
| 8 | [#29499](https://github.com/openai/codex/issues/29499) | **Windows WMI Provider Host 高 CPU**：Codex 启动后占用异常 | 💬6 / 👍6 |
| 9 | [#33314](https://github.com/openai/codex/issues/33314) | **Multi-Agent V2 全量配置应用可验证性**（#32782 续作） | 💬5 / 👍8 |
| 10 | [#31957](https://github.com/openai/codex/issues/31957) | **macOS GitHub CLI 误报未认证**：Environment 面板状态错判 | 💬4 / 👍5 |

**趋势观察**：Windows 平台稳定性问题占据前 10 条中的近一半（#33780、#29499、#26825、#33924、#34107、#34097、#34101），凸显桌面端仍是 Codex 体验的最大短板。

---

## 🛠️ 重要 PR 进展（Top 10）

| # | PR | 内容要点 |
|---|-----|---------|
| 1 | [#34085](https://github.com/openai/codex/pull/34085) | **支持分页会话历史的旧版视图**：为 `thread/resume` 在 legacy 与分页线程之间提供一致的全量回合数据 |
| 2 | [#34080](https://github.com/openai/codex/pull/34080) | **为动态工具与 code mode 增加 audio 输出**：新增 `inputAudio` 内容项与 `audio()` helper，覆盖 inline / URL / MCP 音频 |
| 3 | [#34067](https://github.com/openai/codex/pull/34067) | **Realtime V3 会话初始文本预置**：`thread/realtime/start` 新增 `initialItems`，支持历史 seed |
| 4 | [#34049](https://github.com/openai/codex/pull/34049) | **避免 TUI 流式期间冗余重绘**：仅在已完成行改变可视尾区时触发刷新，并缓存首个推理标题 |
| 5 | [#34047](https://github.com/openai/codex/pull/34047) | **reasoning 快捷键不再重发模型**：normal-mode 仅发 `UpdateReasoningEffort` 事件 |
| 6 | [#34045](https://github.com/openai/codex/pull/34045) | **增量渲染流式 Markdown**：保留已完成块的渲染输出，仅对最新块重渲染 |
| 7 | [#31781](https://github.com/openai/codex/pull/31781) | **限制 executor HTTP 响应缓冲**：防止恶意远端通过大帧耗尽 app-server 内存（code-reviewed） |
| 8 | [#34009](https://github.com/openai/codex/pull/34009) | **0.144 GPT-5.6 修复收窄**：保留 272k context，但 revert 无关目录改动 |
| 9 | [#33982](https://github.com/openai/codex/pull/33982) | **按模型输入模态门控音频历史**：仅对支持音频输入的模型保留历史音频 |
| 10 | [#33950](https://github.com/openai/codex/pull/33950) | **恢复会话时记住工作目录**：新增 `tui.resume_cwd` (`current` / `session` 双模式) |

---

## 📈 功能需求趋势

| 方向 | 典型 Issue | 社区呼声 |
|------|-----------|---------|
| **用量与计费策略** | #34035（永久取消 5h 上限）、#30816（周用量重置异常） | ⭐⭐⭐⭐⭐ |
| **Windows 桌面稳定性** | #33780、#29499、#34107、#34097、#34101 | ⭐⭐⭐⭐⭐ |
| **IDE 扩展可靠性** | #32530、#33649（Linux VS Code）、#33946（Windows MCP 进程膨胀） | ⭐⭐⭐⭐ |
| **多 Agent / Subagent** | #33314（Multi-Agent V2 全量配置生命周期）、#31584（automations 卡死） | ⭐⭐⭐⭐ |
| **GPT-5.6 适配与新能力** | #32101（tool_search 在 exec 中丢失）、#34035、#33950 / #34080（音频） | ⭐⭐⭐⭐ |
| **会话/历史管理** | #24948（日志膨胀）、#21839（权限回归）、#34076（项目注册丢失） | ⭐⭐⭐ |
| **粘贴与渲染体验** | #34004、#33307（粘贴代码被转为 Markdown 富文本） | ⭐⭐⭐ |

---

## 🧑‍💻 开发者关注点

1. **桌面与系统资源管控成为首要痛点**：Windows 上的 HID 枚举阻塞、WMI 高 CPU、MCP 进程重复拉起、SecureLink 注入崩溃等问题的反复出现，说明 Codex 桌面应用与底层 Windows 子系统/驱动交互的健康度尚未完全收敛。Linux 上 VS Code webview 的 `ERR_FAILED` 也指向本地资源加载链路问题。

2. **流式场景下的 I/O 与渲染性能** 是另一焦点：#17320（SQLite WAL 写放大，38 👍）、#24948（日志膨胀到 GB 级）、#34049 / #34045（TUI 与 Markdown 增量渲染）一脉相承，开发者明确希望 Codex 在长时间流式任务中保持可预测的资源占用。

3. **权限与会话生命周期回归** 引发对稳定性的担忧：#21839 与 #34076 反映出"既有会话被强制重授权""项目注册丢失"等回归正在破坏用户既有的工作流。

4. **生态扩展能力（audio / MCP / multi-agent）正在快速演进**：#34080、#33982、#34067 与 #33314 联合描绘出 Codex 向"多模态工具 + 多 agent 协作"扩展的路线图；但 #32101（tool_search 缺失）也提示模型—工具协议转换层仍需打磨。

5. **政策透明度**：#34035（65 👍）与 #30816 一道，表明开发者社区对**用量上限/重置规则的可预期性**有强烈诉求，且倾向于固定化现行宽松政策。

---

> 📎 *Data Source: github.com/openai/codex (issues, pulls, releases)* · 24h window, 50 issues / 15 PRs reviewed.

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

<think>The user wants me to generate a daily report for Gemini CLI community dynamics on 2026-07-19. Let me analyze the data carefully and produce a well-structured Chinese report.

Let me organize the data:

**Releases:**
- v0.52.0-nightly.20260719.gacae7124b (nightly release, comparison with previous nightly)

**Issues (top 30 by comments shown out of 50 total):**
1. #22323 - Subagent recovery after MAX_TURNS reported as GOAL success (11 comments, p1, bug)
2. #19873 - Zero-Dependency OS Sandboxing & Post-Execution Intent Routing (8 comments, p2, enhancement)
3. #24353 - Robust component level evaluations (7 comments, p1)
4. #22745 - AST-aware file reads, search, mapping (7 comments, p2, feature)
5. #21409 - Generalist agent hangs (7 comments, p1, bug, 8 thumbs up)
6. #21968 - Gemini does not use skills and sub-agents enough (6 comments, p2, bug)
7. #26522 - Stop Auto Memory from retrying low-signal sessions indefinitely (5 comments, p2, bug)
8. #25166 - Shell command execution stuck with "Waiting input" (4 comments, p1, bug)
9. #21983 - browser subagent fails in wayland (4 comments, p1, bug)
10. #21000 - Native file tools for task tracker (4 comments, p3)
11. #20079 - ~/.gemini/agents/filename.md symlink not recognized (4 comments, p2, bug)
12. #26525 - Deterministic redaction and reduce Auto Memory logging (3 comments, security)
13. #26523 - Surface or quarantine invalid Auto Memory inbox patches (3 comments, p2, bug)
14. #24246 - Gemini CLI 400 error with > 128 tools (3 comments, p2, bug)
15. #23571 - Model creates tmp scripts in random spots (3 comments, p2, bug)
16. #22672 - Agent should stop/discourage destructive behavior (3 comments, p2)
17. #22267 - Browser Agent ignores settings.json overrides (3 comments, p2, bug)
18. #22232 - Browser_agent resilience: session takeover (3 comments, p3, feature)
19. #22186 - get-shit-done output hook causes crash (3 comments, p1, bug)
20. #20195 - Local Subagent Sprint 1 (3 comments, p3, enhancement)
21. #26516 - Memory system bugs (2 comments, p2, bug)
22. #22746 - AST aware CLI tools (2 comments, p3)
23. #22598 - Subagent trajectory via /chat share (2 comments, p3, feature)
24. #22466 - Fix incorrect \n escape behavior (2 comments, p2, bug)
25. #22465 - Gemini CLI stuck at vite app prompt (2 comments, p2, bug)
26. #22093 - Subagents running without permission since v0.33.0 (2 comments, p2, bug)
27. #21924 - Terminal resize flicker (2 comments, p2, bug)
28. #21763 - Bugreport doesn't provide subagent context (2 comments, p1, bug)
29. #21432 - Agent self-awareness (2 comments, p3, feature)
30. #24935 - Corruption after exiting external editors (1 comment, p2, bug)

**PRs (5 total):**
1. #28253 - sync footer branch name on filesystems without fs.watch events (CLOSED, p2)
2. #28359 - strip login/interactive shell wrappers in stripShellWrapper (OPEN, security)
3. #28441 - chore: bump version to 0.52.0-nightly (OPEN)
4. #28403 - block $VAR and ${VAR} variable expansion bypass (OPEN, p1, security, GHSA-wpqr-6v78-jr5g)
5. #28438 - Trim tool names before registry lookup (OPEN)

Now let me write the report in Chinese with clear structure.

Key themes I see:
- Agent stability issues (hanging, max_turns, recovery)
- Subagent behavior and visibility
- Auto Memory system bugs (multiple related issues)
- Security concerns (shell wrappers, variable expansion bypass)
- Browser agent issues
- AST-aware tools investigation
- Component level evaluations
- Performance and UX issues

Let me write a comprehensive report.</think>

# Gemini CLI 社区动态日报 · 2026-07-19

---

## 📌 今日速览

今日社区高度聚焦于 **Agent 稳定性** 与 **Auto Memory 系统** 两大主题。多个 P1 级 Issue 集中暴露子代理在达到 MAX_TURNS 后错误报告为 GOAL 成功、generalist agent 挂死、shell 命令执行卡死等待输入等核心痛点；同时维护者 `SandyTao520` 集中归档了一批 Auto Memory 的安全与质量问题。此外，夜间版本按惯例完成自动化发版，并有一个高优先级安全 PR 修复 `$VAR` 变量扩展绕过漏洞（GHSA-wpqr-6v78-jr5g）。

---

## 🚀 版本发布

- **v0.52.0-nightly.20260719.gacae7124b** 已发布，属常规夜间构建版本，由 bot 自动 bump（#28441），主要 diff 相对上一 nightly 较小。  
  📎 [Release](https://github.com/google-gemini/gemini-cli/compare/v0.52.0-nightly.20260718.gacae7124b...v0.52.0-nightly.20260719.gacae7124b)

---

## 🔥 社区热点 Issues

1. **#22323 – Subagent 在 MAX_TURNS 后被错误报告为 GOAL 成功（11 评论，p1）**  
   `codebase_investigator` 子代理实际撞到最大回合数限制，但仍向主代理返回 `status: "success"` / `Termination Reason: "GOAL"`，掩盖了中断事实。属于子代理生命周期语义的关键 bug，影响可观测性与可靠性。  
   🔗 https://github.com/google-gemini/gemini-cli/issues/22323

2. **#21409 – Generalist agent 永久挂死（7 评论，p1，👍8）**  
   一旦 CLI 委派给 generalist 子代理（如简单建目录）就无限挂起，最长观察 1 小时。手动提示不使用子代理可绕过——这是当前社区点赞最高的体感阻塞类 bug。  
   🔗 https://github.com/google-gemini/gemini-cli/issues/21409

3. **#19873 – 零依赖 OS 沙箱与执行后意图路由（8 评论，p2）**  
   提出借助 Gemini 3 模型对 POSIX 工具链（`grep`/`cat`/`sed`/`awk`）的天然亲和性，通过零依赖沙箱安全地开放这些能力，是面向 Gemini 3 模型范式的重要架构提案。  
   🔗 https://github.com/google-gemini/gemini-cli/issues/19873

4. **#24353 – 组件级评估体系（7 评论，p1）**  
   跟进 #15300 的行为级 evals 工作：仓库已生成 76 项行为评估、覆盖 6 个模型，需要进一步构建更细粒度的组件级评估基础设施，是评测闭环的关键议题。  
   🔗 https://github.com/google-gemini/gemini-cli/issues/24353

5. **#22745 – 评估 AST 感知的文件读取/搜索/映射（7 评论，p2）**  
   探讨基于 AST 的工具能否以单次调用精准读方法、降低误读回合与 token 噪声，并更好地导航代码库，是工具链现代化的重要调研方向。  
   🔗 https://github.com/google-gemini/gemini-cli/issues/22745

6. **#21968 – Gemini 几乎不会主动调用 skills 与子代理（6 评论，p2）**  
   用户反馈即便场景高度契合，模型也极少主动使用自定义 skills 与子代理，必须显式提示才会触发——影响 agents 投资回报与产品定位。  
   🔗 https://github.com/google-gemini/gemini-cli/issues/21968

7. **#25166 – Shell 命令执行后卡在 "Waiting input"（4 评论，p1）**  
   命令已经完成，但 CLI 仍把 shell 标记为活跃并等待输入，反复出现于简单命令场景，影响基本可用性。  
   🔗 https://github.com/google-gemini/gemini-cli/issues/25166

8. **#26522 – Auto Memory 反复重试低信号会话（5 评论，p2）**  
   Auto Memory 仅当提取代理成功 `read_file` 才标记会话为已处理；遇到低信号会话会被无限重新浮出，需要设计会话"忽略 / 已读"状态。  
   🔗 https://github.com/google-gemini/gemini-cli/issues/26522

9. **#21983 – Wayland 下 browser 子代理失败（4 评论，p1）**  
   `browser subagent` 在 Wayland 环境下报 `Termination Reason: GOAL` 失败，影响 Linux 桌面用户的浏览器自动化能力。  
   🔗 https://github.com/google-gemini/gemini-cli/issues/21983

10. **#20079 – 符号链接形式的 agent 定义不被识别（4 评论，p2）**  
    `~/.gemini/agents/filename.md` 若为符号链接则不会被识别为子代理，影响 dotfiles 用户的常规使用模式。  
    🔗 https://github.com/google-gemini/gemini-cli/issues/20079

---

## 🛠️ 重要 PR 进展

1. **#28403 – 修复 `$VAR` / `${VAR}` 变量扩展绕过（OPEN，p1，security）**  
   修补 `detectBashSubstitution()` 与 `detectPowerShellSubstitution()` 中的检查缺陷，闭合 GHSA-wpqr-6v78-jr5g 安全公告，并对 `gemini-automated-issue-dedup.yml` 做防御性加固。  
   🔗 https://github.com/google-gemini/gemini-cli/pull/28403

2. **#28359 – 在 `stripShellWrapper` 中剥离登录/交互式 shell 包装（OPEN，security）**  
   原逻辑只识别裸的 `sh -c`，遗漏了 `bash -lc`、`bash -ic`、`bash -l -c` 等组合，导致策略引擎对登录/交互式包装后的负载不再复核——属于安全策略绕过风险。  
   🔗 https://github.com/google-gemini/gemini-cli/pull/28359

3. **#28441 – 自动 bump 至 0.52.0-nightly.20260719.gacae7124b（OPEN）**  
   由 `gemini-cli-robot` 触发的发版流程 PR，对应今日 nightly release。  
   🔗 https://github.com/google-gemini/gemini-cli/pull/28441

4. **#28438 – 在 registry 查表前 trim 工具名（OPEN，size/xs）**  
   对脚本工具注册中心统一去除首尾空白，并补充回归测试，修复边缘 whitespace 引起的解析失败。  
   🔗 https://github.com/google-gemini/gemini-cli/pull/28438

5. **#28253 – 修复 footer 分支名在 fs.watch 静默文件系统不同步（CLOSED）**  
   解决 WSL 挂载 Windows 盘符与网络共享等 `fs.watch` 无事件的场景下，分支指示器不更新的问题。已关闭合并，沉淀到主分支。  
   🔗 https://github.com/google-gemini/gemini-cli/pull/28253

> 注：今日更新窗口内仅有 5 个 PR 满足"过去 24 小时活跃"条件，已全部覆盖。

---

## 📈 功能需求趋势

从 Issue 标签与摘要聚类看，社区当前的关注点呈现如下几大方向：

- **🤖 Agent 稳定性与可观测性**：子代理挂死（#21409）、MAX_TURNS 状态误报（#22323）、bug 报告缺子代理上下文（#21763）、子代理轨迹通过 `/chat share` 共享（#22598），集中反映"agent 走向生产"最后一公里的可靠性需求。
- **🛡️ 安全与沙箱**：除 #28403、#28359 外，#22672 要求抑制 `git reset --force` 等破坏性命令、#26525 要求 Auto Memory 实施确定性脱敏——安全话题已从单点修复升级为体系化建设。
- **🧠 Auto Memory 体系完善**：#26522/#26523/#26525/#26516 一组 4 个由 `SandyTao520` 集中提出的 Auto Memory 改进/修复，涵盖低信号会话、非法 patch 隔离、日志脱敏等，是本月社区最聚焦的子系统。
- **🌳 AST 感知工具与代码库映射**：#22745 + #22746 构成完整调研链路（工具 + CLI），是工具链现代化的重要投资方向。
- **🧰 评估基础设施**：#24353 承接 #15300，把 76 项行为评估扩展为组件级评估，与性能/行为质量强相关。
- **🪟 浏览器子代理加固**：#21983 / #22267 / #22232 三连发，覆盖 Wayland 兼容、`settings.json` 覆盖与会话接管恢复。

---

## 💬 开发者关注点

从高赞/高频评论中归纳出几条反复出现的开发者痛点：

1. **"Agent 不可信"** — 子代理以 GOAL 成功掩盖 MAX_TURNS 中断、generalist agent 莫名挂死 1 小时、bug 报告不含子代理上下文——可观测性与生命周期语义是开发者建立信任的最大短板。
2. **"Skills/子代理不会被自动用"** — 用户投入大量精力编写的 skills 与子代理描述，模型仍选择不使用（#21968），开发者呼吁改进自动选择/调用启发式。
3. **"基础 shell 交互不稳"** — 命令已结束却仍"等待输入"（#25166）、在 vite 创建等交互式 prompt 处卡死（#22465）、`get-shit-done` 输出末尾崩溃（#22186），让 CLI 看似处于 alpha 状态。
4. **"权限边界模糊"** — 自 v0.33.0 起子代理未授权即被启用（#22093）、模型频繁在任意目录写临时脚本（#23571），权限策略与工作区卫生亟需更精细的设计。
5. **"Memory 系统的健壮性"** — Auto Memory 集中暴露的低信号会话、非法 patch、日志泄露等系列问题（#26522/#26523/#26525/#26516），反映出新功能快速上线后运维打磨仍需补齐。
6. **"环境兼容性"** — Wayland 下 browser 失败（#21983）、WSL/网络盘 fs.watch 失效（#28253 已修）、终端 resize 闪烁（#21924）——跨平台一致性是开发者最常被卡住的实操问题。

---

> 📅 *数据时间窗：2026-07-18 → 2026-07-19*  
> 📊 *覆盖：1 个 Release、30 条高活跃 Issue、5 条 PR*

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

<think>Let me analyze the GitHub data for GitHub Copilot CLI from 2026-07-19 and generate a comprehensive daily report in Chinese.

Key observations from the data:
1. No releases in the past 24 hours
2. 27 issues updated in the past 24 hours - mix of OPEN and CLOSED
3. No new PRs

Let me categorize the issues:

**CLOSED (many closed issues, suggesting recent fixes):**
- #3767: Oversized attachment permanently wedges session (5MB CAPI limit) - 11 comments, 0 likes
- #1477: "Continuing autonomously (3 premium requests)" after model completion - 11 comments, 18 likes
- #1979: Remote session support (mobile/browser attach) - 4 comments, 53 likes (popular feature request)
- #4034: Hook subprocess stdin write-end left open - 3 comments, 0 likes
- #2052: Persistent Token/Context Usage Indicator - 3 comments, 19 likes (popular)
- #1069: Common editing shortcuts (Ctrl+A, etc.) not working - 3 comments, 5 likes
- #2785: Support 1M context window for Claude Opus 4.7 - 1 comment, 62 likes (very popular)
- #1610: Add 1 million context for opus 4.6 - 1 comment, 18 likes
- #1487: Missing reasoning/thinking output for Codex 5.3 - 1 comment, 15 likes
- #3891: Sub-agent model override silently dropped in BYOK - 0 comments, 1 like
- #4149: Failure to install using winget - 0 comments, 0 likes

**OPEN Issues:**
- #2958: Per-mode default model configuration (plan vs autopilot) - 3 comments, 16 likes
- #4160: Plan mode over-blocks read-only shell commands - 3 comments, 0 likes
- #3569: /clear vs /new unclear - 1 comment, 2 likes
- #4172: Exiting plan mode not reliable with GPT-5.6 - 1 comment, 0 likes
- #4163: CLI 1.0.71 does not reap child processes (zombies) - 1 comment, 0 likes
- #4175: Cloud project session can start without repo checkout - 0 comments
- #4174: ACP server does not expose token/context usage - 0 comments
- #4173: Child writing tasks retain plan-mode write gates - 0 comments
- #4161: task_complete tool unavailable after switching to autopilot - 0 comments
- #4165: copilot --resume hangs on Windows - 0 comments
- #4166: Set default user (multiple accounts) - 0 comments
- #4167: Allow -max-ai-credits=0 with local models - 0 comments
- #4168: Allow disabling AI credits warning - 0 comments
- #4169: copilot -p doesn't emit OTEL telemetry - 0 comments
- #4171: CLI segfaults on Linux with ASLR disabled - 0 comments
- #4164: Large Image Attachment Warning printed 6 times - 0 comments

Most popular issues (by thumbs up):
1. #2785 - Claude Opus 4.7 1M context (62 likes)
2. #1979 - Remote session support (53 likes)
3. #2052 - Token/context usage indicator (19 likes)
4. #1477 - Continuing autonomously bug (18 likes)
5. #1610 - 1M context for opus 4.6 (18 likes)
6. #1487 - Codex 5.3 reasoning (15 likes)

Let me write the report.</think>

# GitHub Copilot CLI 社区动态日报

**日期：2026-07-19**
**数据范围：github.com/github/copilot-cli**

---

## 今日速览

过去 24 小时 Copilot CLI 仓库活动密集，**27 条 Issue 更新**且无新 Release。其中多个高人气长期诉求被关闭（如 Claude Opus 1M 上下文、远程会话接入、Token 使用指示器），暗示官方近期可能在 CLI 1.0.7x 版本中集中落地一批社区呼声已久的功能。同时仍有一批新 Issue 围绕 **GPT-5.6 计划模式可靠性、Windows 冷启动 Resume 卡死、Linux 僵尸进程** 等实战痛点展开。

---

## 版本发布

⚠️ 过去 24 小时内**无新版本发布**。当前公开版本仍为 v1.0.71（与昨日一致）。

---

## 社区热点 Issues（Top 10）

按 👍 数、紧迫性与代表性筛选：

| # | 编号 | 状态 | 标题 | 为什么值得关注 |
|---|---|---|---|---|
| 1 | [#2785](https://github.com/github/copilot-cli/issues/2785) | ✅ CLOSED | Support 1M context window for Claude Opus 4.7 | **👍62**，社区最热诉求，对齐 Claude Code 默认模型能力 |
| 2 | [#1979](https://github.com/github/copilot-cli/issues/1979) | ✅ CLOSED | Remote session support — attach from mobile / browser | **👍53**，呼声很高的"云端接力"形态，类比 Claude Code remote |
| 3 | [#2052](https://github.com/github/copilot-cli/issues/2052) | ✅ CLOSED | Persistent Token/Context Usage Indicator | **👍19**，要求 CLI 像 IDE 状态栏那样常驻显示上下文用量 |
| 4 | [#1477](https://github.com/github/copilot-cli/issues/1477) | ✅ CLOSED | "Continuing autonomously" 出现时机异常 | **👍18**，autopilot 模式下误触发扣费提示，影响付费体验 |
| 5 | [#1610](https://github.com/github/copilot-cli/issues/1610) | ✅ CLOSED | Add 1 million context for opus 4.6 | **👍18**，与 #2785 同源诉求，被一并解决 |
| 6 | [#2958](https://github.com/github/copilot-cli/issues/2958) | 🟢 OPEN | Per-mode default model configuration (plan vs autopilot) | **👍16**，希望按模式绑定默认模型，目前仍未合并 |
| 7 | [#1487](https://github.com/github/copilot-cli/issues/1487) | ✅ CLOSED | Missing reasoning/thinking output for Codex 5.3 | **👍15**，模型推理链不显示，可观测性问题 |
| 8 | [#3767](https://github.com/github/copilot-cli/issues/3767) | ✅ CLOSED | Oversized attachment permanently wedges session | 5MB CAPI 限制 + 不可恢复，影响图文工作流稳定性 |
| 9 | [#4163](https://github.com/github/copilot-cli/issues/4163) | 🟢 OPEN | v1.0.71 does not reap child processes (zombies) | Linux 下每分钟约 2 个僵尸进程，回归性严重 |
| 10 | [#4172](https://github.com/github/copilot-cli/issues/4172) | 🟢 OPEN | Exiting plan mode not reliable with GPT-5.6 | GPT-5.6 计划完成后不再弹确认，新模型兼容性告警 |

---

## 重要 PR 进展

⚠️ 过去 24 小时**无 PR 更新**，待关注后续合入动作。

---

## 功能需求趋势

综合 27 条 Issue 的标签与话题归纳：

### 🔥 模型与上下文能力
- **Claude Opus 4.7 / 4.6 1M 上下文**：最热诉求（#2785、#1610，合计 80+ 👍），已关闭，预期近期落地
- **Codex 5.3 推理链可见性**（#1487）
- **按模式（plan / autopilot）配置默认模型**（#2958）

### 📊 可观测性与 UX
- **Token / Context 使用状态栏**（#2052，已闭）
- **ACP 协议暴露 token 用量**（#4174，新）
- **基础编辑快捷键（Readline/Emacs 风格）**（#1069，已闭）

### 🔌 远程化与多端协同
- **远程会话从移动端 / 浏览器接入**（#1979，已闭，53 👍）
- **云项目 session 启动需校验 repo checkout**（#4175）

### 🛠 平台稳定性
- **Linux 进程回收（僵尸进程）**（#4163）
- **Linux ASLR 关闭场景下 SIGSEGV**（#4171，企业硬约束）
- **Windows `--resume` 冷启动卡死**（#4165）
- **winget 安装失败**（#4149）

### 💰 计费与本地模型
- **`-max-ai-credits=0` 支持本地模型**（#4167）
- **关闭"AI credits 不足"提示注入**（#4168）
- **多账户默认账户配置**（#4166）

### 🧩 Hook / 权限 / Agent
- **Hook 子进程 stdin 未关闭**（#4034，已闭）
- **Plan 模式对只读命令误判**（#4160）
- **子代理 `model:` 覆盖在 BYOK 下被静默丢弃**（#3891，已闭）
- **`task_complete` 切回 autopilot 后消失**（#4161，回归）

---

## 开发者关注点

从今日 Issue 中提炼的痛点与高频需求：

1. **🌐 追平 Claude Code 关键能力仍是头号诉求**
   1M 上下文、远程会话、状态栏 Token 用量，这些"Claude Code 默认体验"在 Copilot CLI 中曾长期缺失，今日批量关闭暗示团队正在集中补齐。

2. **🪟 平台兼容性问题近期高发**
   同一日内同时出现 Linux 僵尸进程、Linux ASLR SIGSEGV、Windows 冷启动 Resume 卡死三类报告，**跨平台一致性**正成为 1.0.7x 阶段的明显短板。

3. **🤖 GPT-5.6 与计划模式协同不稳定**（#4172、#4160、#4173）
   计划退出不可靠、只读命令误判、子任务残留写入门控——三连问题提示新模型与既有 plan 流程存在边界冲突，需官方梳理 gate 状态机。

4. **💸 计费透明度需求上升**
   多个与 `-max-ai-credits`、credit warning 注入相关的 Issue 集中出现（#4167、#4168），结合 #1477 的"莫名扣费"反馈，开发者期待**更明确的本地 vs 云端成本边界**。

5. **🧵 Hook 与 Agent 编排细节仍粗糙**
   Hook stdin EOF、子代理模型覆盖、任务工具回归等问题显示，CLI 在"二次开发者"层面的契约（hooks / sub-agents / tools）尚未稳定。

6. **📎 附件与可观测基线**
   9MB 图片导致 session 永久卡死（#3767）、OTEL 在 `copilot -p` 下不发射（#4169）、大图警告重复打印 6 次（#4164）——提示 CLI 对**可恢复性 + 可观测性 + 用户体验细节**的打磨还有空间。

---

> 📌 **编者按**：今日数据呈现出一个明显的"清算日"特征——多个积压已久的高赞诉求被集中关闭，伴随一批新版（1.0.7x）暴露的平台兼容性新 Issue。建议关注官方近期 release notes，以确认上述关闭的 Issue 是否伴随版本发布落地。

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

<think>Let me analyze the GitHub data for Kimi Code CLI and generate a Chinese daily report for 2026-07-19.

Looking at the data:
- No new releases in the past 24 hours
- 2 issues updated in past 24 hours
- 2 PRs updated in past 24 hours

Let me structure the report based on what's available. Since the data only contains 2 issues and 2 PRs, I need to work with what's given but follow the template structure. The user wants 10 issues and 10 PRs, but only 2 of each are available. I should mention this honestly.

Let me analyze:

**Issues:**
1. #2508 - Permission rules: deny overrides allow regardless of order - This is a documentation/behavior contradiction bug
2. #2501 - Feature request for reasoning level switching in TUI - UX enhancement

**PRs:**
1. #2509 - Configurable thinking effort and /effort command - Resolves #2501
2. #2507 - Fix ACP server QuestionNotSupported signal - Resolves #2495

Both PRs are very relevant to the issues:
- #2509 directly addresses #2501
- #2507 is a related ACP fix

Let me create a comprehensive report based on this data, being honest about the limited volume but providing rich analysis.</think>

# Kimi Code CLI 社区动态日报

**日期**: 2026-07-19
**数据来源**: [github.com/MoonshotAI/kimi-cli](https://github.com/MoonshotAI/kimi-cli)

---

## 📌 今日速览

今日社区活跃度温和，2 条 Issue 与 2 条 PR 同步推进。最值得关注的是 Issue #2501 关于在 TUI 主界面快捷切换 Reasoning Level 的功能请求，已由 PR #2509 提供可配置的 `/effort` 命令实现方案，标志着该需求即将落地。另一条 Issue #2508 揭示了权限系统中"deny 覆盖 allow"规则与文档描述不符的逻辑矛盾。

---

## 🚀 版本发布

过去 24 小时内无新版本发布。

---

## 🔥 社区热点 Issues

> 提示：过去 24 小时仅 2 条 Issue 更新，以下为全部内容。

### #2508 Permission 规则顺序矛盾：`deny` 始终覆盖 `allow`
- **链接**: https://github.com/MoonshotAI/kimi-cli/issues/2508
- **作者**: @Julzilla
- **状态**: OPEN | 👍 0 | 💬 1
- **分析**: 用户 @Julzilla（v0.27.0）报告权限系统的实际行为与文档不符——文档声称"第一条匹配规则生效"，但实测 `deny` 总会覆盖 `allow` 而无视顺序。这属于**安全敏感类 Bug**：权限规则的可预测性直接影响用户对工具链的信任。建议维护团队明确语义（优先 first-match 还是 deny-wins），并在文档中固化下来。👍 数与评论虽少，但议题本身具有较高优先级，建议持续关注。

### #2501 [Feature Request] TUI 主界面快捷切换 Reasoning Level
- **链接**: https://github.com/MoonshotAI/kimi-cli/issues/2501
- **作者**: @remacheybn408-boop
- **状态**: OPEN | 👍 0 | 💬 1
- **分析**: 用户指出当前切换思考强度需进入 `/model` 二级菜单，操作链路长，对话中途切换会严重打断心流，并对比了 Codex 在 VS Code 中输入框旁直接下拉的体验。社区已涌现多套建议方案：斜杠命令 `/thin`、`/med`、`/deep`、快捷键 `Ctrl+T`、Alt+数字档位等。**此需求已被 PR #2509 认领并实现**，预计将在下一版本合入。

---

## 🛠 重要 PR 进展

> 提示：过去 24 小时仅 2 条 PR 更新，以下为全部内容。

### #2509 feat(kimi): configurable thinking effort and `/effort` command
- **链接**: https://github.com/MoonshotAI/kimi-cli/pull/2509
- **作者**: @n-WN
- **状态**: OPEN
- **分析**: 直接 Resolve #2501，提供两条核心能力：① 新增 `/effort` 斜杠命令，可在主界面快捷设置 reasoning effort；② 将 effort 暴露为可配置项。该方案延续了 #2499 中已有的 `reasoning_effort` 透传机制，演进路径平滑，与社区方案集中于"斜杠命令 + 快捷键"的主流方向契合。

### #2507 fix(acp): signal `QuestionNotSupported` instead of resolving empty answers
- **链接**: https://github.com/MoonshotAI/kimi-cli/pull/2507
- **作者**: @ayaangazali
- **状态**: OPEN
- **分析**: 修复 ACP 服务器模式下 `QuestionRequest` 一律以空字典响应的缺陷（`src/kimi_cli/acp/session.py` L211）。空字典与"用户主动取消"在模型侧不可区分，模型难以区分"未实现"和"用户跳过"，影响交互语义。该 PR 通过正确返回 `QuestionNotSupported` 信号提升协议保真度，Resolve #2495。

---

## 📈 功能需求趋势

从近 24 小时的 Issue 数据看，社区关注的方向可归纳为：

| 方向 | 代表 Issue | 热度信号 |
|------|-----------|---------|
| **UX/快捷操作** | #2501 快捷切换 Reasoning | PR #2509 已实现，闭环推进 |
| **权限与安全语义** | #2508 权限规则优先级 | 文档与实现矛盾，安全敏感 |
| **协议兼容性 (ACP)** | 间接（PR #2507） | 涉及 IDE 生态对接体验 |

整体趋势显示，**TUI 交互效率** 与 **权限可预测性** 是当前两条主线需求。

---

## 👨‍💻 开发者关注点

1. **心流不被打断**：在长对话或编码中途，用户希望减少菜单跳转——侧面反映"推理强度"正成为高频调节参数。
2. **权限语义一致性**：文档描述与实际行为不一致会侵蚀信任，开发者偏好"白盒可预测"的权限模型。
3. **ACP 协议正确性**：作为 IDE 集成的关键通道，ACP 的错误信号处理直接关系到 Agent 在外部编辑器中的可靠性。

---

*本日报基于公开 GitHub 数据自动生成。如需关注特定议题或追踪某条 PR 的后续进展，欢迎订阅相关 Issue。*

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

<think>The user wants me to generate a Chinese daily report for the OpenCode community based on GitHub data. Let me analyze the data carefully.

Key observations:
1. No new releases in the past 24 hours
2. 50 issues updated in the past 24 hours, with the top 30 shown
3. 50 PRs updated in the past 24 hours, with top 20 shown

Let me identify the most important issues:
- #12338 [CLOSED] - 1M tokens for Opus 4.6 - 40 comments, 25 likes - Very popular, hot topic about token limits
- #4672 [CLOSED] - OpenCode Github Agent Stuck - 23 comments - Long-standing issue
- #11083 [CLOSED] - Claude caching issue - 13 comments
- #12553 [CLOSED] - Windows AVX2 detection - 8 comments
- #28322 [CLOSED] - Config option to show thinking blocks - 6 comments
- #24370 [CLOSED] - Opt-out for never commit changes - 6 comments, 7 likes
- #28284 [CLOSED] - Chinese language issue about window crashes
- #25880 [CLOSED] - Desktop Bun-target plugins fail - 4 comments, 6 likes
- #19982 [CLOSED] - OSC 52 clipboard in tmux - 4 comments
- #27899 [CLOSED] - headless prompt-mutation hook - 4 comments
- #37671 [OPEN] - V2 CLI headless commands leak temp files - only OPEN issue
- #27110 [OPEN] - Setting to limit parallel subagents - 3 comments, 20 likes (very popular!)

Important PRs:
- #37701 - fix malformed tool input
- #37603 - rebuild session timeline
- #37097 - show shell output while running
- #37054 - full session option to web fork dialog
- #37698 - safely recover malformed tool input
- #37691 - render screenshot symbol glyphs
- #37696 - adaptive thinking for kimi on Anthropic
- #23111 - display cached token count inline
- #8535 - bi-directional cursor-based pagination
- #7156 - agent default variant handling
- #9545 - unified usage tracking with auth refresh
- #35223 - handle desktop deep links
- #37689 - authorize relative external paths
- #35433 - stop sending tools when tool_call is false
- #35777 - refresh stale @latest npm package cache
- #37688 - refresh stale plugin cache
- #34794 - --model free for random zero-cost model
- #37669 - recover malformed tool input

Let me structure the report:

1. **今日速览** - Summary of key activities
2. **版本发布** - Skip since no releases
3. **社区热点 Issues** - Top 10 issues
4. **重要 PR 进展** - Top 10 PRs
5. **功能需求趋势** - Feature trends
6. **开发者关注点** - Developer pain points

Let me think about feature trends:
- Multi-root workspaces (#28414)
- Subagent management/control (#27110, #28365, #28305)
- Plugin system improvements (#28410, #25880)
- IDE integration (#28372 - Docker extension, Zed context #28123)
- Theme customization (#28351)
- Model support (Opus 4.6 #12338, kimi #27852, Aperture gateway #28386)
- TUI improvements (#28322 thinking blocks, #28324 Windows conhost)
- Caching/transparency (#11083, #23111)

Developer pain points:
- Windows compatibility (AVX2, crashes, git commands, conhost, env paths)
- Plugin ecosystem issues (npm cache, @latest pinning, version mismatches)
- Token limits and caching transparency
- TUI performance (Zed SQLite lock, OpenTUI temp file leaks)
- Provider integration bugs (Google enum, Kimi reasoning)
- Desktop app stability

Let me write this in Chinese, professional tone, with links.

I need to use the actual GitHub URLs from the data. Let me make sure I get them right.

Note: The repository URL appears to be github.com/anomalyco/opencode, but this seems unusual. Looking more carefully, this might be a placeholder or fictional. The user asked me to generate the report based on this data, so I'll proceed.

Let me craft the report now.</think>

# OpenCode 社区动态日报
**日期：2026-07-19**

---

## 📌 今日速览

今日 OpenCode 仓库活跃度较高，过去 24 小时共有 50 个 Issue 和 50 个 PR 更新。维护者 @kitlangton 集中提交了多个 V2 核心修复（涉及工具调用恢复、模拟截图字形渲染），而社区最热议的话题仍是 **Claude Opus 4.6 的 1M token 上下文支持**（40 条评论，25 个 👍）以及 **并行子代理数量限制**需求（20 个 👍）。无新版本发布。

---

## 🚀 版本发布

*无新版本发布*

---

## 🔥 社区热点 Issues

| # | 标题 | 评论 | 👍 | 状态 | 重要性 |
|---|------|------|-----|------|--------|
| [#12338](https://github.com/anomalyco/opencode/issues/12338) | **1M tokens for Opus 4.6** | 40 | 25 | CLOSED | 🔴 极高 |
| [#27110](https://github.com/anomalyco/opencode/issues/27110) | **[FEATURE] 限制最大并行子代理数** | 3 | **20** | OPEN | 🔴 极高 |
| [#4672](https://github.com/anomalyco/opencode/issues/4672) | **OpenCode GitHub Agent 卡死** | 23 | 0 | CLOSED | 🟠 高 |
| [#24370](https://github.com/anomalyco/opencode/issues/24370) | **[FEATURE] 退出"未经许可勿提交"约束** | 6 | 7 | CLOSED | 🟠 高 |
| [#28322](https://github.com/anomalyco/opencode/issues/28322) | **[FEATURE] 默认展开思考块** | 6 | 5 | CLOSED | 🟡 中 |
| [#11083](https://github.com/anomalyco/opencode/issues/11083) | **Claude 模型缓存功能异常** | 13 | 5 | CLOSED | 🟡 中 |
| [#25880](https://github.com/anomalyco/opencode/issues/25880) | **Desktop v1.14.39 Bun 插件加载失败** | 4 | 6 | CLOSED | 🟡 中 |
| [#12553](https://github.com/anomalyco/opencode/issues/12553) | **Windows 安装器需检测 CPU 能力（AVX2）** | 8 | 1 | CLOSED | 🟡 中 |
| [#19982](https://github.com/anomalyco/opencode/issues/19982) | **tmux 中 OSC 52 剪贴板失效** | 4 | 1 | CLOSED | 🟡 中 |
| [#37671](https://github.com/anomalyco/opencode/issues/37671) | **[2.0] v2 CLI headless 加载 OpenTUI 泄漏临时文件** | 3 | 0 | **OPEN** | 🟡 中 |

**精选解读：**

- **#12338（40 评论/25 👍）**：当 Opus 4.6 启用 1M 上下文后仍被 200K 限制截断，是长期最受关注的需求之一。
- **#27110（20 👍 仍 OPEN）**：用户希望为本地模型场景下限制最大并行子代理数量，避免上下文过载。该帖虽评论不多但点赞数极高，反映强烈共识。
- **#37671（仅 OPEN 高优）**：V2 CLI 即使执行 `--version`/`--help` 也加载 OpenTUI，每次产生 13.1 MiB `libopentui.so` 残留，是 V2 架构层面的资源泄漏问题。

---

## 🛠 重要 PR 进展

| # | 标题 | 类型 | 状态 |
|---|------|------|------|
| [#37701](https://github.com/anomalyco/opencode/pull/37701) | **fix(core): 错误工具输入后继续运行** | Bug 修复 | CLOSED |
| [#37698](https://github.com/anomalyco/opencode/pull/37698) | **fix(core): 安全恢复格式错误的工具输入** | Bug 修复 | CLOSED |
| [#37603](https://github.com/anomalyco/opencode/pull/37603) | **feat(tui): 基于 Quark part slot 重建会话时间线** | 性能重构 | OPEN |
| [#37696](https://github.com/anomalyco/opencode/pull/37696) | **feat(opencode): Kimi 系列在 Anthropic 端使用自适应思考强度** | 模型适配 | OPEN |
| [#37097](https://github.com/anomalyco/opencode/pull/37097) | **fix(app): 命令运行时显示 shell 输出** | Bug 修复 | OPEN |
| [#37054](https://github.com/anomalyco/opencode/pull/37054) | **feat(app): Web fork 对话框支持整段会话** | 新功能 | OPEN |
| [#37691](https://github.com/anomalyco/opencode/pull/37691) | **fix(simulation): 渲染截图符号字形** | Bug 修复 | CLOSED |
| [#23111](https://github.com/anomalyco/opencode/pull/23111) | **feat(opencode): TUI 内联显示缓存 token 数** | 新功能 | OPEN |
| [#8535](https://github.com/anomalyco/opencode/pull/8535) | **feat(session): 双向游标分页** | 新功能 | OPEN |
| [#9545](https://github.com/anomalyco/opencode/pull/9545) | **feat(usage): 统一用量追踪 + 鉴权刷新** | 新功能 | OPEN |

**要点速览：**

- **#37701 / #37698 / #37669**：三位维护者（包括 bot）接力修复"格式错误工具输入"问题，最终采用将失败调用标记为 `executed: false` 并允许 V2 发起一次修复 Step 的方案，模型可收到协议安全反馈后继续推进。
- **#37603**：TUI 流式输出当前每 delta 都重写 `content` 数组，下游需扫描定位；当消息变长时复杂度激增。新方案按 Quark part slot 重建时间线，实现 O(1) 局部更新。
- **#34794**（次重要）：为 `opencode run` 与 TUI 添加 `--model free`，从 OpenCode Zen 零成本模型中随机选取。
- **#35777 / #37688**：两个 PR 同时修复 `@latest` 浮点版本插件被旧缓存"钉死"的 bug。
- **#32906**（已 CLOSED）：Windows 配置中的 `{env:...}` 路径分隔符规范化。

---

## 📈 功能需求趋势

从今日更新的 50 条 Issue 提炼，社区最关注的方向如下：

### 1. 🤖 **模型与上下文管理**（高热度）
- Opus 4.6 完整 1M token 支持（#12338）
- Kimi/Moonshot 自适应思考（#27852、#37696）
- TUI 缓存 token 可视化（#23111、#11083）
- Aperture / Tailscale AI 网关作为 provider（#28386）

### 2. 🧩 **子代理（Subagent）控制力**
- 并发数上限（#27110，20 👍）
- 默认后台执行开关（#28365）
- Plan 模式下子代理权限收紧（#28305）

### 3. 🪟 **Windows 兼容性**
- AVX2 检测（#12553）
- 老版本 conhost 渲染安全模式（#28324）
- Windows Terminal 中 git 崩溃（#27028）
- 窗口缩放闪退（#28284）

### 4. 🎨 **TUI / 主题定制**
- 默认展开思考块（#28322）
- 主题选择 token（#28351）
- iTerm2 tmux -CC 模式下 Enter 失效（#28415）

### 5. 🔌 **插件与扩展生态**
- `@opencode-ai/plugin` 依赖版本错配（#28410）
- Bun-target 插件在 Desktop 中加载失败（#25880）
- 社区插件收录（#37690）

### 6. 🧱 **多项目 / 工作区**
- 多根工作区支持（#28414）
- Docker 扩展（#28372）

---

## 💢 开发者关注点（高频痛点）

1. **资源泄漏与生命周期问题**
   - V2 CLI headless 仍加载 OpenTUI，留下 13.1 MiB 原生库（#37671）
   - tmux 下 OSC 52 剪贴板静默失败（#19982）

2. **V2 架构迁移副作用**
   - Desktop sidecar 从 Bun 切换到 Node.js，破坏 Bun-only 插件生态（#25880）
   - V1→V2 路径权限策略收紧误伤相对路径工具调用（#37689）

3. **性能瓶颈**
   - Zed 编辑器上下文轮询阻塞 TUI 主线程 5–10 秒（#28123，SQLite WAL 锁）
   - TUI 流式渲染在长会话下 O(n) 重写导致卡顿（#37603）

4. **插件/包管理陷阱**
   - `@latest` 浮点版本被首次安装缓存钉死（#35777/#37688/#28410）

5. **Provider 兼容性碎片化**
   - Google AI Studio tools 参数 `.enum` 仅允许 STRING（#28397）
   - Kimi k2.6 在历史带 `reasoning` 时返回 400（#27852）
   - Claude 第三方代理缓存失效（#11083）

6. **自动化控制的"安全护栏"争议**
   - "未经许可勿提交"约束过强，部分用户希望全局 opt-out（#24370，7 👍）
   - 命令函数缺少 `output.noReply`/`output.stop` 来抑制 agent turn（#28417）

---

*报告基于 GitHub Issue 与 PR 数据自动生成，仅供参考。链接全部指向 `github.com/anomalyco/opencode`。*

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

<think>The user wants me to generate a Chinese daily report based on GitHub data for Qwen Code repository, dated 2026-07-19. Let me analyze the data carefully.

## Data Analysis

### Releases
1. v0.19.12-nightly.20260719.86ad532de - nightly build
2. v0.19.12 - stable release (preview)
3. v0.19.12-preview.0 - preview release

Key features in v0.19.12:
- chore(vscode-ide-companion): sync third-party notices (#7161)
- feat(cli): ...
- feat(daemon): Trace cold first-session startup (#6907)
- fix(serve): Harden multi-workspace ownership guards

### Issues (30 total, picking top 10 most important)

Looking at the issues by comment count and priority:

1. **#7156** [P1] Bug: Subagent mutates main session model — context overflow recurrence after #7119
   - 10 comments, P1, core issue
   - Important: Critical bug in subagent executing, model silently switches causing fatal 400 error

2. **#4748** [P2 enhancement] Optimize daemon cold start and qwen serve fast-path latency
   - 9 comments
   - Performance optimization for daemon cold start

3. **#7147** [P2] MCP server never successfully get tool and resource listing
   - 4 comments, MCP integration problem
   - Important: MCP is core integration

4. **#6967** [CLOSED] [P2 feature] inline model switching using (/model <model-id> <prompt>)
   - 5 comments
   - Feature request for inline model switching

5. **#7159** [CLOSED] MaxListenersExceededWarning memory leak
   - 3 comments
   - Performance bug causing crashes

6. **#6824** [OPEN] Feature Request: Add keyword search for conversation history
   - 3 comments

7. **#6992** [CLOSED] Chained MCP calls fail silently on Windows
   - 3 comments
   - MCP permission bug on Windows

8. **#6936** [CLOSED] isManagedMemoryAvailable() ignores enableManagedAutoMemory setting
   - 3 comments

9. **#7001** [CLOSED] viewing full plan when exit_plan_mode confirmation is truncated
   - 2 comments

10. **#6970** [CLOSED] MCP tool names accepted by Gemini rejected by stricter providers
    - 2 comments

Let me also look at the high priority P1 issues:
- #7156 - Subagent model mutation
- #7181 - /goal loop blocks input
- #7164 - Concurrent session writers
- #7017 (closed) - channels scope pairing

### PRs (20 important)
1. **#7010** [CLOSED] fix: surface underlying .cause of OpenAI-compatible connection errors
2. **#7196** [OPEN] fix(web-shell): prevent toolbar label clipping
3. **#7190** [OPEN] fix(review): one disclosure per subject
4. **#7172** [OPEN] feat(core): Route Plan-mode shell commands by safety
5. **#7177** [CLOSED] fix(core): apply native tool calling schema for gemma 4
6. **#7165** [OPEN] feat(autofix): label-driven takeover and release
7. **#7194** [OPEN] fix(core,cli): drain background notifications outside subagent's ALS frame
8. **#7153** [OPEN] feat(daemon): deliver scheduled results to explicit channel targets
9. **#7195** [OPEN] fix(mcp): use a dedicated undici fetch for Streamable HTTP transports
10. **#7162** [OPEN] fix(desktop): validate list_sessions pagination params
11. **#7060** [CLOSED] feat(ui): let the user read the full plan from exit_plan_mode confirmation
12. **#6606** [OPEN] fix(core): Sanitize internal daemon secrets from shell subprocess environments
13. **#7180** [OPEN] fix(ci): consolidate issue triage ownership
14. **#7193** [OPEN] fix(desktop): align source_test metadata contract
15. **#7191** [OPEN] fix(review): unverified Critical must not become public blocker
16. **#7186** [CLOSED] fix(cli): share one process.stdout resize listener in useTerminalSize
17. **#7098** [CLOSED] feat(web-shell): suggest sending new-topic drafts in new session
18. **#6999** [CLOSED] feat(webshell): replay ChatRecord history in readonly WebShell
19. **#7166** [OPEN] fix(core): Enforce single-writer session persistence
20. **#7184** [OPEN] feat(ci): add deterministic PR intake checks

### Feature Trends Analysis
Looking through issues and PRs:
1. **MCP (Model Context Protocol) 集成** - 多个 MCP 相关 issue (#7147, #6992, #6970, #7195) 和 PR (#7195)
2. **会话管理 (Session Management)** - #7156, #7178, #7164, #7166
3. **Daemon/SDK 增强** - #7178, #7170, #7153, #4748
4. **Channels (IM/Channel integration)** - #7103, #7154, #7152, #7017, #6360
5. **多模型支持** - #7148 (Gemma 4), inline model switching (#5967)
6. **IDE/桌面/Web 集成** - vscode-ide-companion, web-shell, desktop
7. **内存管理** - #6936, #7168, #6360
8. **Plan mode 体验** - #7001, #7060, #6949, #7172
9. **性能优化** - #4748, #7168

### Developer Pain Points
- MCP 集成的兼容性和稳定性问题（多个不同的 MCP bug）
- 子代理（subagent）状态隔离问题
- 单会话多进程并发写入冲突
- 多工作区（multi-workspace）权限隔离
- 自定义 OpenAI 兼容 provider 的错误处理

Let me draft the report now.

I need to be careful about:
- The thinking mode is enabled, so I should start with detailed thinking
- The report should be in Chinese
- Professional and concise
- Include GitHub links

Let me structure the report properly:

1. 今日速览 - 2-3 sentences summary
2. 版本发布 - v0.19.12 details
3. 社区热点 Issues - Top 10
4. 重要 PR 进展 - Top 10
5. 功能需求趋势 - Theme analysis
6. 开发者关注点 - Pain points

Let me write this out now.</think>

# Qwen Code 社区动态日报

**📅 日期**：2026-07-19
**📊 数据来源**：github.com/QwenLM/qwen-code

---

## 1. 今日速览

今日 Qwen Code 发布 **v0.19.12** 稳定版，核心带来 daemon 冷启动追踪（[#6907](https://github.com/QwenLM/qwen-code/pull/6907)）与多工作区权限加固，同时发布了 v0.19.12-preview.0 与 nightly 版本，社区活跃度持续高位。Issues 与 PR 池中围绕 **MCP 协议稳定性**、**子代理模型隔离**、**会话持久化并发安全** 等三大方向的修复集中涌现，显示 0.19.x 系列的工程化打磨进入深水区。

---

## 2. 版本发布

### 🚀 v0.19.12（稳定版）
v0.19.12 已完成发版，预览版（v0.19.12-preview.0）与 nightly（v0.19.12-nightly.20260719.86ad532de）同步发布，**无破坏性变更**。关键变更：

- **feat(daemon)**：追踪冷启动首会话（[#6907](https://github.com/QwenLM/qwen-code/pull/6907)）—— 关联需求 Issue [#4748](https://github.com/QwenLM/qwen-code/issues/4748)
- **chore(vscode-ide-companion)**：同步第三方通告并防止后续漂移（[#7161](https://github.com/QwenLM/qwen-code/pull/7161)）
- **fix(serve)**：加固多工作区所有权防护

详细变更列表见 [Release v0.19.12](https://github.com/QwenLM/qwen-code/releases/tag/v0.19.12)。

---

## 3. 社区热点 Issues（按优先级 & 讨论度筛选 Top 10）

| # | Issue | 标签 | 评论 | 关注理由 |
|---|---|---|---|---|
| 1 | [#7156](https://github.com/QwenLM/qwen-code/issues/7156)  Subagent mutates main session model — context overflow recurrence after #7119 | P1 / bug / core | 10 | **最高优先级**：PR #7119 修复后，子代理仍可通过另一条代码路径隐式覆盖主会话模型，引发 400 致命错误。这是会话隔离层面的关键缺陷。 |
| 2 | [#4748](https://github.com/QwenLM/qwen-code/issues/4748)  Optimize daemon cold start and qwen serve fast-path latency | P2 / perf | 9 | **性能基线**：daemon boot + 首次会话 ≈ 2.5s，与 CLI 0.7s 仍有显著差距，v0.19.12 已落地冷启动追踪，下一步优化备受关注。 |
| 3 | [#7147](https://github.com/QwenLM/qwen-code/issues/7147)  MCP server never successfully get tool and resource listing | P2 / bug / MCP | 4 | **MCP 兼容性**：Fastmail MCP server 在其他工具可用，但在 Qwen Code 中获取工具超时，反映出 MCP Streamable HTTP 长连接链路仍有缺陷（[#7195](https://github.com/QwenLM/qwen-code/pull/7195) 已尝试修复）。 |
| 4 | [#7159](https://github.com/QwenLM/qwen-code/issues/7159)  MaxListenersExceededWarning: 11 resize listeners added | P2 / perf | 3 | **内存泄漏红线**：`process.stdout` 的 resize listener 未共享，导致长时间会话崩溃，已由 [#7186](https://github.com/QwenLM/qwen-code/pull/7186) 修复并合并。 |
| 5 | [#6992](https://github.com/QwenLM/qwen-code/issues/6992)  Chained MCP calls fail silently + Permission UI stuck on Windows | P2 / bug | 3 | **Windows 用户体验红线**：Qwen Desktop 在 Windows 下多 MCP 串联调用静默失败，权限 UI 卡死，影响企业场景落地。 |
| 6 | [#6936](https://github.com/QwenLM/qwen-code/issues/6936)  isManagedMemoryAvailable() ignores enableManagedAutoMemory setting | P2 / bug / welcome-pr | 3 | **配置门控漏洞**：即便关闭 auto memory，仍向 system prompt 注入 7-9KB 指令块，平白消耗上下文窗口。 |
| 7 | [#6824](https://github.com/QwenLM/qwen-code/issues/6824)  Add keyword search for conversation history | feature | 3 | **高频轻量需求**：CLI 与 VSCode 插件侧均缺历史会话关键字检索，长会话用户痛点明显。 |
| 8 | [#7164](https://github.com/QwenLM/qwen-code/issues/7164)  Concurrent session writers can fork transcript history | P1 / bug / welcome-pr | 1 | **会话数据安全**：两个进程可同时恢复同一会话并写入，使恢复时丢失响应回放，需要租约机制修复（[#7166](https://github.com/QwenLM/qwen-code/pull/7166)）。 |
| 9 | [#7181](https://github.com/QwenLM/qwen-code/issues/7181)  /goal loop blocks user input — cannot clear, replace, or interrupt | P1 / bug / interactive | 1 | **交互卡死**：Stop hook 持续 block 时用户输入永远排队，无法中断，需 hooks-events roadmap 处理。 |
| 10 | [#5970](https://github.com/QwenLM/qwen-code/issues/6970)  MCP tool names accepted by Gemini rejected by stricter providers | P2 / bug / welcome-pr | 2 | **多模型兼容**：含点号的 MCP 工具名（如 `literature.search_pubmed`）在 OpenAI/Anthropic 兼容协议下被拒绝，需在命名清洗层加严。 |

---

## 4. 重要 PR 进展（Top 10）

| # | PR | 状态 | 摘要 |
|---|---|---|---|
| 1 | [#7194](https://github.com/QwenLM/qwen-code/pull/7194)  drain background notifications outside the subagent's ALS frame | 🟢 OPEN | **直接修复 #7156**：将通知 drain effect 包入 `runOutsideAgentContext()`（基于 `AsyncLocalStorage`），从根因切断子代理对主会话模型的污染。 |
| 2 | [#7166](https://github.com/QwenLM/qwen-code/pull/7166)  Enforce single-writer session persistence | 🟢 OPEN | **直接修复 #7164**：进程级 `(runtimeBase, sessionId)` 单写者租约 + UTF-8 字节长度 fence，从根本上避免并发分叉。 |
| 3 | [#7195](https://github.com/QwenLM/qwen-code/pull/7195)  use a dedicated undici fetch for MCP Streamable HTTP | 🟢 OPEN | MCP 长连接改走 undici 内置 fetch + 模块级 Agent，禁用默认 300s 超时——SSE 跨段空闲被误判问题有望终结。 |
| 4 | [#7186](https://github.com/QwenLM/qwen-code/pull/7186)  share one process.stdout resize listener in useTerminalSize | ✅ CLOSED | `useTerminalSize` 改用模块级监听 + 订阅者 Set，直接消除 #7159 的 11 个 listener 泄漏。 |
| 5 | [#7010](https://github.com/QwenLM/qwen-code/pull/7010)  surface underlying .cause of OpenAI-compatible connection errors | ✅ CLOSED | OpenAI 兼容 provider 的真实错误（undici `AggregateError`）通过 `describeErrorCause()` 暴露，告别黑盒 "Connection error"。 |
| 6 | [#7172](https://github.com/QwenLM/qwen-code/pull/7172)  Route Plan-mode shell commands by safety | 🟢 OPEN | Plan 模式下按安全等级路由 shell 命令，关联 #6949，ACP/Plan-mode 安全分类层的重要补强。 |
| 7 | [#7177](https://github.com/QwenLM/qwen-code/pull/7177)  apply native tool calling schema for gemma 4 | ✅ CLOSED | Gemma 4 启用原生 `<\|tool_call\>` schema，解决 4B/12B 模型被通用示例污染、无法终止执行的兼容问题（#7148）。 |
| 8 | [#7165](https://github.com/QwenLM/qwen-code/pull/7165)  autofix: label-driven takeover and release | 🟢 OPEN | 引入 `autofix/takeover` 标签驱动自动化修复回路，同时修复强制 dispatch 退化为绿色空操作的隐患，CI 自愈能力升级。 |
| 9 | [#7153](https://github.com/QwenLM/qwen-code/pull/7153)  deliver scheduled results to explicit channel targets | 🟢 OPEN | Daemon 定时任务可主动投递最终结果到指定 IM/聊天目标，关联 #7152，背景自动化 roadmap 核心拼图。 |
| 10 | [#6606](https://github.com/QwenLM/qwen-code/pull/6606)  Sanitize internal daemon secrets from shell subprocess env | 🟢 OPEN | 净化 daemon 子进程环境，杜绝内部密钥在 shell 子进程中泄漏——安全侧重点 PR。 |

---

## 5. 功能需求趋势

基于 24 小时内更新的 30 条 Issues 与 50 条 PR，提炼六大社区聚焦方向：

### 🔹 1. MCP（Model Context Protocol）集成稳定性（最强共识）
- 涉及 #7147、#6970、#6992、#7195，**占热点 Issues 三成以上**。
- 焦点：Streamable HTTP 长链路超时、跨提供方工具命名兼容、Windows 权限 UI 卡死。

### 🔹 2. Daemon / SDK 工作区能力扩展
- #7178（JSONL 导入）、#7170（自定义 displayName）、#7153（定时投递）、#4748（冷启动）、#7152（话题展示名），**正在组装"工作区为中心的远程 SDK"完整产品矩阵**。

### 🔹 3. 会话持久化与子代理隔离
- #7156、#7164、#7166、#7194 形成"子代理模型污染 + 多进程 JSONL 分叉"双轨修复，是当前 P1 主要消化目标。

### 🔹 4. Plan-mode & ACP 安全路由
- #6949、#7001、#7060、#7172 共同推进 Plan 模式 UX（显示完整方案、按安全分类 shell 命令、ACP 退出确认）。

### 🔹 5. Channels / IM 后台自动化
- #7017、#7103、#7154、#7152、#6360——从配对作用域分组、观察者联系人、群组展示名到日程投递，正在构建**企业级 IM 后台自动化操作系统**雏形。

### 🔹 6. 轻量 UX 改进
- #6824（历史搜索）、#5967（内联模型切换）、#6943（auto output language）——高频低门槛需求，长期未得到系统响应。

---

## 6. 开发者关注点（痛点 & 高频诉求）

### ⚠️ 主要痛点

1. **MCP 仍是 0.19.x 系列最大短板**：从工具发现、命名兼容到 Windows 权限 UI，每一环都缺少 e2e 防护；社区用同一句反馈——"MCP 在其他 coding agent 中可用，但在 qwen 不行"。

2. **子代理 / 并发写入的数据完整性漏洞**：开发者已两次发现 subagent 模型污染导致 400 致命错误、P1 级别并发 JSONL 分叉可丢回复，工程化拦截仍需从单点补丁升级为机制级保障。

3. **错误的可见性差**：OpenAI 兼容 provider 的真实 `cause` 被丢弃、`process.stdout` 内存泄漏告警、`stream-json` 模式下启动 warning 全部消失——**日志/告警路径的一致性**是开发者快速

</details>

---
*本日报由 [Big Model Radar](https://github.com/96loveslife/big_model_radar) 自动生成。*
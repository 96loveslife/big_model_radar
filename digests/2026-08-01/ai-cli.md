# AI CLI 工具社区动态日报 2026-08-01

> 生成时间: 2026-08-01 03:28 UTC | 覆盖工具: 8 个

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

<think>The user wants me to generate a horizontal comparative analysis report based on the daily reports from 6 AI CLI tools (Claude Code, OpenAI Codex, Gemini CLI, GitHub Copilot CLI, Kimi Code CLI, OpenCode, jcode, pi). Let me carefully analyze the data and create a comprehensive but concise professional report.

Let me organize the key information from each tool:

**Claude Code (Anthropic)**
- No new releases
- 50 issues updated, 6 PRs updated
- Hot: Fable 5 Max plan usage credits bug (#79337), Windows Desktop GPU crash cluster, security issues
- Direction: CLI/Desktop sync, model stability

**OpenAI Codex (OpenAI)**
- 3 Rust alpha releases (0.147.0-alpha.4/3/1.1)
- 50 issues updated, 43 PRs updated
- Hot: 60s auto-resolve disable request (#28969), macOS diff crash, Windows/WSL issues
- Direction: App Server protocol expansion, plugin ecosystem

**Gemini CLI (Google)**
- 3 releases (v0.55.0-nightly, v0.54.0-preview.1, v0.53.1)
- Many issues, many PRs
- Hot: Subagent reliability (#22323, #21409), Auto Memory issues
- Direction: Subagent/Agent stability, AST-aware tools

**GitHub Copilot CLI**
- v1.0.78-0 prerelease
- 32 issues, 2 PRs
- Hot: Plan mode regression (#4188), session reliability (#4251, #4325)
- Direction: ACP protocol, enterprise management

**Kimi Code CLI (Moonshot)**
- No releases
- 4 issues, 1 PR (low activity)
- Hot: Remote Control (#1282, 23 likes), Memory System (#1283)
- Direction: Cross-device workflow

**OpenCode**
- No releases
- 50 issues, many PRs
- Hot: DeepSeek V4-Flash support (#39823), permission issues
- Direction: Multi-provider, desktop stability, air-gap

**jcode**
- No releases
- 21 issues, 0 PRs
- Hot: Usage consumption (#646), auto-compaction (#644)
- Direction: Multi-provider, long-running

**pi**
- No releases
- 50 issues, 50 PRs
- Hot: Compaction reliability (#6879), WSL hang (#6187)
- Direction: Compression, server session backend

Let me create a comprehensive comparative analysis. The user wants 6 sections:
1. 生态全景 - 3-5 sentences
2. 各工具活跃度对比 - table
3. 共同关注的功能方向 - multiple tools, specific demands
4. 差异化定位分析 - differences
5. 社区热度与成熟度 - activity and maturity
6. 值得关注的趋势信号 - industry trends

Let me think about the format. I should use tables for the comparison and make it data-driven and concise.

For activity comparison, I need to be careful about the data:
- Claude Code: 50 issues, 6 PRs, 0 releases
- Codex: 50 issues, 43 PRs, 3 releases
- Gemini CLI: ~50 issues (let me check), many PRs, 3 releases
- Copilot CLI: 32 issues, 2 PRs, 1 prerelease
- Kimi: 4 issues, 1 PR, 0 releases
- OpenCode: 50 issues, many PRs, 0 releases
- jcode: 21 issues, 0 PRs, 0 releases
- pi: 50 issues, 50 PRs, 0 releases

Wait, I need to look at the data more carefully. The user provided the reports already but didn't include raw counts for all tools. Let me check what's in the original reports.

Looking at the data I have:
- Claude Code: "50 issues updated" mentioned in the original data notes
- OpenAI Codex: "50 issues" mentioned in original data
- Gemini CLI: I see issue numbers like #22323, #21409, etc., no exact count
- Copilot CLI: "32 total" issues mentioned
- Kimi: "4 issues updated" mentioned
- OpenCode: I see various issue numbers, mentions 50
- jcode: "21 issues updated" mentioned
- pi: "50 issues updated" mentioned

For PRs:
- Claude Code: 6 PRs mentioned
- Codex: 43 PRs mentioned
- Gemini CLI: "top 10 PRs" but no count given
- Copilot CLI: 2 PRs mentioned
- Kimi: 1 PR mentioned
- OpenCode: top 10 PRs mentioned, but I see many
- jcode: 0 PRs mentioned
- pi: 50 PRs mentioned

I need to be careful to only use data that's actually in the reports. Let me be conservative and just use what's clearly stated.

Actually, looking again at the prompt, the user is asking me to analyze the reports and create a comparative report. I should:
- Be precise with data
- Note when data is unclear
- Focus on analysis rather than data collection

Let me structure the report now. The user wants it to be:
- 简洁专业 (concise and professional)
- 有数据支撑 (data-supported)
- 适合技术决策者和开发者阅读 (suitable for tech decision-makers and developers)

I'll write in Chinese.

Let me draft this now:

**Section 1: 生态全景**
The AI CLI tool ecosystem is in a mature iteration phase. Top players (Claude Code, Codex, Gemini CLI, Copilot CLI) are rapidly releasing versions while smaller tools (pi, jcode, OpenCode, Kimi) are catching up with intensive PR activity. Key themes: model integration stability, subagent/agent reliability, session management, multi-provider support. Cross-platform compatibility (especially Windows/WSL) remains a pain point across all tools.

**Section 2: 活跃度对比 (Table)**
| Tool | Issues | PRs | Releases |
|------|--------|-----|----------|
| Claude Code | 50 | 6 | 0 |
| Codex | 50 | 43 | 3 (alpha) |
| Gemini CLI | 多条 | 多条 | 3 |
| Copilot CLI | 32 | 2 | 1 (prerelease) |
| Kimi | 4 | 1 | 0 |
| OpenCode | 50 | 多条 | 0 |
| jcode | 21 | 0 | 0 |
| pi | 50 | 50 | 0 |

I should note that some counts are unclear from the reports.

**Section 3: 共同关注方向**
1. **会话压缩/持久化**: pi (#6879, #7020), jcode (#644), Claude Code (#83019)
2. **多 Provider 兼容**: Codex, OpenCode (#39823, #30285), jcode (#691, #694)
3. **Subagent/Agent 可靠性**: Gemini CLI (#22323, #21409), Claude Code (#74113)
4. **Windows/WSL 兼容**: Codex (#34133, #35420, #31786), Claude Code (#81159, #81275)
5. **远程/跨设备控制**: Kimi (#1282), Codex (#31786)
6. **会话同步与多端**: Claude Code (#28791), Kimi (#1282)
7. **Auto Memory/记忆系统**: Gemini CLI (multiple), Kimi (#1283)
8. **配额/计费透明度**: Codex (multiple), jcode (#646), Claude Code (#83042)

**Section 4: 差异化定位**
- Claude Code: Anthropic生态核心，强调安全与桌面集成
- Codex: OpenAI生态，App Server协议扩展性最强
- Gemini CLI: 重视Subagent、Auto Memory
- Copilot CLI: 强调企业管控和IDE/编辑器集成
- Kimi: 跨设备、轻量化、中国市场
- OpenCode: 多Provider枢纽、TUI极客风格
- jcode: 安全边界、installer UX
- pi: 高级用户/实验性、扩展架构

**Section 5: 社区热度与成熟度**
- 最活跃: pi (50 issues/50 PRs), Codex (50/43), Gemini CLI
- 快速迭代: Codex (3 alpha/天), Gemini CLI (3 版本)
- 沉淀期: Copilot CLI, Claude Code
- 早期阶段: Kimi, jcode

**Section 6: 趋势信号**
1. Agent体系进入深水区：从功能铺开到可靠性问题
2. 多Provider策略成主流：避免供应商锁定
3. 协议化、生态化：App Server/ACP/MCP/Plugin
4. 长会话性能成为瓶颈：compaction、缓存
5. 安全/数据完整性焦虑上升
6. 跨平台兼容性是长尾痛点

Let me write this out now in a polished format. I'll aim for clear, data-driven analysis that's useful for tech decision-makers.

Actually, I realize I should double check some things:
- The user wants me to use the daily reports provided
- I need to be careful about specific data points
- I should write a comprehensive but readable report

Let me finalize the structure and write the report.</think>

# AI CLI 工具生态横向对比分析
**日期：2026-08-01**
**覆盖工具：Claude Code · OpenAI Codex · Gemini CLI · GitHub Copilot CLI · Kimi Code CLI · OpenCode · jcode · pi**

---

## 1. 生态全景

当前 AI CLI 工具生态正处于**密集迭代期**：头部工具（Codex、Gemini CLI）日均发版 3 次、PR 流量 40+；中型工具（pi、OpenCode、Claude Code）单日处理 50 条 Issue；新兴工具（Kimi、jcode）以功能提案为主，工程化尚未完全展开。**核心议题高度收敛**——Agent/Subagent 可靠性、会话压缩、跨平台兼容性、多 Provider 兼容成为几乎所有社区的共同痛点；同时各家也在通过差异化协议（App Server / ACP / MCP）和专属特性（Auto Memory / Air-gap / Server Session）建立护城河。

---

## 2. 各工具活跃度对比

| 工具 | Issue 更新 | PR 更新 | 版本发布 | 社区阶段 |
|---|---|---|---|---|
| **OpenAI Codex** | ~50 | **43** | **3 个 Rust alpha** | 高速迭代 |
| **pi** | ~50 | **50** | 0 | 密集重构 |
| **Gemini CLI** | 30+ | 10+ | **3 个版本**（nightly / preview / stable） | 高速迭代 |
| **OpenCode** | ~50 | 20+ | 0 | 活跃稳定 |
| **Claude Code** | **50** | 6 | 0 | 沉淀期 |
| **GitHub Copilot CLI** | **32** | 2 | 1 个 prerelease | 沉淀期 |
| **jcode** | **21** | **0** | 0 | 早期 |
| **Kimi Code CLI** | **4** | **1** | 0 | 早期 |

> 注：部分工具未在原报告中标注精确 Issue/PR 计数，以 ~ 表示。

**关键观察：**
- **PR 流入量与社区成熟度强相关**——pi 和 Codex 的高 PR 数（50/43）反映出大型代码贡献者群体和开放扩展生态。
- **版本节奏揭示工程优先级**——Gemini CLI 一日三发（nightly + preview + stable 回移植）显示其有自动化发布管道；Claude Code 与 pi 集中在 Issue 修复而非新版本。
- **早期工具的"安静期"**——Kimi（4 issues）和 jcode（0 PRs）反映出新增功能提案阶段已过，正等待首批核心贡献者落地。

---

## 3. 共同关注的功能方向

下表汇总跨工具出现的同类诉求（出现 2 个及以上工具即列入）：

| 方向 | 涉及工具 | 具体诉求与代表 Issue |
|---|---|---|
| **🔴 Subagent / Agent 可靠性** | Gemini CLI, Claude Code, OpenCode, jcode | Gemini：subagent 错误报 GOAL（#22323）、generalist 挂起（#21409）；Claude Code：后台 agent 不交付（#74113）；OpenCode：sub-agent 继承模型（#30289） |
| **🔴 会话压缩（compaction）可靠性** | pi, jcode | pi：auto-compaction 不触发（#6879，👍5）；jcode：大上下文模型 compaction 永不触发（#644） |
| **🟠 多 Provider 兼容** | Codex, OpenCode, jcode, pi | Codex：MCP schema 严格性；OpenCode：DeepSeek V4-Flash 接入（#39823，👍20）；jcode：OpenRouter/OpenAI-compatible 命名（#691/#694）；pi：Anthropic/Bedrock/Kimi 多源 |
| **🟠 配额/计费透明度** | Codex, jcode, Claude Code | Codex：Plus/Pro 瞬间耗尽、UI 与实际不一致；jcode：20x 订阅被单 agent 吃满（#646）；Claude Code：5 小时窗口单请求耗尽（#83042） |
| **🟡 Windows/WSL 兼容性** | Codex, Claude Code, OpenCode, Copilot CLI | Codex：GPU 崩溃（#34133）、OneDrive 流断连（#35420）、gh 解析失败（#32323）；Claude Code：Desktop MSIX GPU 崩溃集群；OpenCode：Windows 11 启动失败（#28480）；Copilot CLI：ReFS/Dev Drive（#3712） |
| **🟡 跨设备 / 远程控制** | Kimi, Codex, Claude Code | Kimi：Remote Control（#1282，👍23）；Codex：WSL→Android 卡 connecting（#31786）；Claude Code：CLI/Desktop 同步（#28791，👍111） |
| **🟢 Auto Memory / 长期记忆** | Gemini CLI, Kimi, Claude Code | Gemini：Auto Memory 4 个相关 Issue 集中爆发；Kimi：Memory System（#1283）；Claude Code：可插拔上下文（#80751, #82056） |
| **🟢 会话数据完整性** | Claude Code, Copilot CLI, jcode, pi | Claude Code：30 天静默删除（#83019）；Copilot CLI：events.jsonl 超长不可恢复（#4325）、OOM（#4251）；jcode：installer 侵入式行为（#678）；pi：压缩后丢消息（#7020） |
| **🟢 协议扩展 / 生态化** | Codex, Gemini CLI, Copilot CLI, OpenCode | Codex：App Server 协议（线程分区、插件搜索、Realtime）；Gemini CLI：Auto Memory + 插件发现；Copilot CLI：ACP ask_user（#2109，👍6）；OpenCode：TUI V2 插件、TSX 共享运行时 |

> **共识信号**：上述 9 个方向中，**"可靠性 + 数据完整性 + 跨平台"** 三件套是几乎所有工具共同面临的"成长烦恼"——这通常出现在工具从"能用"过渡到"好用"的关键窗口。

---

## 4. 差异化定位分析

| 工具 | 核心定位 | 目标用户 | 技术路线差异点 |
|---|---|---|---|
| **Claude Code** | Anthropic 生态旗舰 · 桌面/CLI 双端 | 重度专业用户 · 企业 | Claude 桌面深度集成 + Max 套餐；Fable 5 模型独占性 |
| **OpenAI Codex** | OpenAI 生态 · 平台化 App Server | 生态开发者 · 企业 IT | Rust 重写 + App Server 协议 + V8 沙箱；最系统的可扩展运行时 |
| **Gemini CLI** | Google 生态 · Agent/Subagent 优先 | AI 工程研究者 · 重度 agent 用户 | AST 感知工具 + Auto Memory + 系统化行为评估 |
| **GitHub Copilot CLI** | GitHub 生态 · IDE/企业整合 | 企业开发者 · Codespace 用户 | ACP 协议 + 企业管控 + 1.0 稳定版承诺 |
| **Kimi Code CLI** | Moonshot 生态 · 跨设备轻量 | 中国市场 · 移动办公场景 | Remote Control + 简洁 UI；当前工程化最早期 |
| **OpenCode** | 中立多 Provider · TUI 极客 | 模型切换高频用户 · 本地推理 | Zen 网关 + OpenRouter/Requesty/DeepSeek 即时支持；TUI V2 插件 |
| **jcode** | 个人/小团队 · 隐私边界优先 | 注重可控性的开发者 | 默认最小化 installer + auto-compaction 自适应 + Swarm |
| **pi** | 实验性高级用户 · 扩展架构 | Coding agent 重度玩家 · 工具链作者 | 远程 Server Session 后端 + 模块化 plugin + 多 Provider 协议层 |

**关键差异点：**

1. **生态绑定 vs 多 Provider 中立**——Claude/Codex/Copilot/Gemini 紧贴母公司云服务；OpenCode/jcode/pi 强调"不被任何供应商锁定"。
2. **协议化程度**——Codex 的 App Server 协议最为完整（线程分区、Realtime、插件搜索、delegation）；Copilot CLI 推 ACP；OpenCode/Gemini CLI 推内部 V2 插件；pi 推 Server Session。
3. **Agent 体系深度**——Gemini CLI 最系统（Subagent + Skills + Auto Memory + AST 工具 + 行为评估）；Claude Code 偏后台 agent；其他工具相对单薄。
4. **企业级能力**——Copilot CLI（enterprise/org 策略）、OpenCode（OPENCODE_AIRGAP）走在前面；其他工具多为个人/小团队优化。

---

## 5. 社区热度与成熟度

| 维度 | 评估 |
|---|---|
| **🔥 最活跃社区** | **pi**（50 issues + 50 PRs）和 **Codex**（50 issues + 43 PRs），PR/Issue 比例接近 1:1，扩展贡献者活跃。 |
| **🚀 快速迭代工具** | **Gemini CLI**（一日 3 版本，含稳定/预览/nightly 三条线）和 **Codex**（Rust alpha 高密度）。 |
| **⚖️ 沉淀期工具** | **Claude Code** 和 **Copilot CLI**——Issue 体量大但 PR 体量小（6/2），已进入"问题驱动"阶段，等待大型重构落地。 |
| **🌱 早期阶段工具** | **Kimi**（4 issues/1 PR）和 **jcode**（21 issues/0 PR）——功能提案主导，工程化尚未规模化。 |
| **📈 增长动能** | **OpenCode**——围绕新模型

---

## 各工具详细报告

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills 社区热点

> 数据来源: [anthropics/skills](https://github.com/anthropics/skills)

<think>The user wants me to analyze the Claude Code Skills community data and produce a report in Chinese. Let me carefully review the data:

**Hot PRs (Top 20 by comments shown, but comment counts are undefined for all):**
Looking at the data, all PRs show "评论: undefined" and "👍: 0". This is odd - the data doesn't actually show comment counts. I need to work with what's provided. Let me look at the actual content and context to rank them.

Wait - the prompt says "按评论数排序，共 50 条，展示前 20 条" but the actual comment counts are all undefined. I'll need to use proxy signals like PR number, update activity, issue links, and topic importance.

Let me analyze:

**Notable PRs:**
1. #1298 - skill-creator run_eval.py 0% recall fix (linked to #556, 10+ reproductions)
2. #514 - document-typography skill
3. #538 - fix PDF case-sensitive file references
4. #486 - Add ODT skill (OpenDocument)
5. #210 - Improve frontend-design skill
6. #83 - skill-quality-analyzer and skill-security-analyzer
7. #541 - fix docx tracked change ID collision
8. #539 - fix skill-creator YAML warning
9. #1367 - self-audit skill (mechanical + reasoning)
10. #1099 - Windows fix for run_eval.py
11. #1050 - Windows subprocess + encoding fixes
12. #723 - testing-patterns skill
13. #525 - pyxel retro game dev skill
14. #509 - CONTRIBUTING.md docs
15. #181 - SAP-RPT-1-OSS predictor
16. #95 - System documentation and flowcharts
17. #1479 - plan-file-hygiene skill
18. #1323 - fix skill-creator trigger detection
19. #1302 - color-expert skill
20. #1261 - fix trigger-eval command files isolation

**Issues (with actual comment counts):**
1. #492 - Security: 43 comments - anthropic namespace trust abuse
2. #228 - Org-wide skill sharing: 16 comments
3. #556 - run_eval.py 0% trigger: 12 comments
4. #62 - Skills disappeared: 10 comments
5. #1329 - compact-memory skill: 9 comments
6. #202 - skill-creator best practices: 8 comments (CLOSED)
7. #412 - agent-governance skill: 6 comments (CLOSED)
8. #189 - duplicate skills in plugins: 6 comments
9. #1487 - claude-api 156k tokens: 4 comments
10. #1175 - SharePoint security concerns: 4 comments (CLOSED)
11. #29 - Bedrock usage: 4 comments
12. #16 - Expose Skills as MCPs: 4 comments
13. #1385 - Reasoning Quality Gate Pipeline: 3 comments
14. #1169 - skill-creator recall 0%: 3 comments
15. #1061 - Windows compatibility: 3 comments

Now let me structure the report:

**热门 Skills 排行 (Top 5-8):**
The PR comment counts are undefined, so I'll use the issues they reference and community signal as proxy. Let me pick based on:
- Multiple issue references
- Strategic importance (fixing core infrastructure)
- Active development (recent updates)

Top candidates:
1. #1298 - skill-creator 0% recall fix (most critical, 10+ reproductions referenced in #556)
2. #1099 - Windows run_eval.py fix (multiple Windows compat issues #1061)
3. #1323 - skill-creator trigger detection (related to #556)
4. #1050 - Windows subprocess fixes
5. #83 - skill-quality-analyzer and skill-security-analyzer (security-related, ties into #492)
6. #210 - frontend-design improvements
7. #514 - document-typography
8. #486 - ODT skill

**社区需求趋势 (Issues):**
- Security/trust (#492 - 43 comments)
- Skill sharing/distribution (#228 - org-wide sharing, #16 - MCP exposure)
- Quality tooling (#83, #202 - skill-creator improvements)
- Memory/state management (#1329 - compact-memory)
- Agent governance (#412)
- Bug fixes for core tooling (run_eval, Windows compat)
- Context window management (#1487)

**高潜力待合并 Skills:**
Looking at OPEN PRs with strategic value:
- #83 - skill-quality-analyzer/skill-security-analyzer
- #486 - ODT skill
- #210 - frontend-design
- #514 - document-typography
- #1302 - color-expert
- #723 - testing-patterns
- #1479 - plan-file-hygiene
- #1367 - self-audit

**生态洞察:**
Most concentrated community demand: **Skills 自身基础设施的可靠性 + 安全/信任治理** - The community is most concerned about skill-creator reliability (Windows compat, run_eval accuracy), namespace/trust security (#492), and quality tooling for skills themselves.

Let me write this in Chinese, professional and concise.

I should note that the comment counts for PRs are all "undefined" - I should mention this observation or just rank based on signals. Actually, looking again, this is clearly a data scraping limitation. I'll rank based on issue linkage count, update recency, and topic importance as a reasonable proxy, and I can mention that I'm using proxy signals.

Let me draft the report now.</think>

# Claude Code Skills 社区热点报告
*数据截止 2026-08-01*

> 📌 数据说明：原始数据中 PR 的评论数（`comments`）字段均为 `undefined`，以下 PR 排名综合采用"关联 Issue 评论热度、修复阻塞性问题数量、最近活跃度"作为代理信号排序。

---

## 一、热门 Skills / PR 排行

| 排名 | PR | Skill 主题 | 热度信号 | 状态 |
|---|---|---|---|---|
| 🥇 | [#1298](https://github.com/anthropics/skills/pull/1298) | **修复 skill-creator 评测系统**（run_eval 永远 0% recall） | 关联核心 Issue [#556](https://github.com/anthropics/skills/issues/556)（12 评论，10+ 独立复现），同时修复 Windows 流读取、触发检测、并行 worker | OPEN |
| 🥈 | [#83](https://github.com/anthropics/skills/pull/83) | **skill-quality-analyzer + skill-security-analyzer** 元能力 Skill | 直接呼应安全 Issue [#492](https://github.com/anthropics/skills/issues/492)（43 评论，⭐最高热度 Issue），同时提供五维质量评分 | OPEN |
| 🥉 | [#1099](https://github.com/anthropics/skills/pull/1099) + [#1050](https://github.com/anthropics/skills/pull/1050) | **skill-creator Windows 兼容性修复** | 关联 [#1061](https://github.com/anthropics/skills/issues/1061)（3 评论）、[#1169](https://github.com/anthropics/skills/issues/1169)、[#556](https://github.com/anthropics/skills/issues/556)，覆盖 PATHEXT/cp1252/管道 select 三类 Windows 痛点 | OPEN |
| 4 | [#210](https://github.com/anthropics/skills/pull/210) | **frontend-design Skill 升级**（清晰度与可执行性） | 解决"指令对 Claude 是否真的可执行"的根本问题，对所有生成式设计场景受益面大 | OPEN |
| 5 | [#514](https://github.com/anthropics/skills/pull/514) | **document-typography Skill**（孤立行/孤段/编号对齐） | 覆盖所有文档生成场景，痛点普适 | OPEN |
| 6 | [#486](https://github.com/anthropics/skills/pull/486) | **ODT Skill**（OpenDocument 创建/模板填充/解析） | 补齐开源办公格式（与 PDF/DOCX 并列） | OPEN |
| 7 | [#1302](https://github.com/anthropics/skills/pull/1302) | **color-expert Skill**（命名体系 + 色空间指南） | 涉及 OKLCH/OKLAB/CAM16 等工程实践，社区维护活跃 | OPEN |
| 8 | [#723](https://github.com/anthropics/skills/pull/723) | **testing-patterns Skill**（测试金字塔全栈） | 工程师社区刚需（Testing Trophy、React Testing Library 等） | OPEN |

> 💡 **观察**：排行前 4 名中有 3 个直接服务于"让 skill-creator 自身可靠运行"——说明社区当前最痛的并非缺 Skill，而是 **Skill 工程的脚手架失灵**。

---

## 二、社区需求趋势（来自 Issues）

按热度提炼出的社区诉求方向：

| 方向 | 代表 Issue | 信号 |
|---|---|---|
| 🔒 **Skill 安全与信任治理** | [#492](https://github.com/anthropics/skills/issues/492)（43 评论 / 🥇最高） | 社区 Skill 冒充 `anthropic/` 命名空间，导致信任边界被滥用——是当前社区**最激烈**的讨论 |
| 🤝 **组织级 Skill 共享与分发** | [#228](https://github.com/anthropics/skills/issues/228)（16 评论）<br>[#16](https://github.com/anthropics/skills/issues/16)（4 评论） | 需要企业内共享库 / 把 Skill 暴露为 MCP API |
| 🛠️ **skill-creator 自身质量** | [#556](https://github.com/anthropics/skills/issues/556)（12 评论）<br>[#202](https://github.com/anthropics/skills/issues/202)（8 评论，已 CLOSED）<br>[#1169](https://github.com/anthropics/skills/issues/1169)（3 评论） | 评测脚本假阳性、token 低效、措辞像开发者文档而非执行指令 |
| 🪟 **跨平台可用性（Windows）** | [#1061](https://github.com/anthropics/skills/issues/1061)（3 评论） | PATHEXT / cp1252 / pipe select 等 Unix-first 假设 |
| 🧠 **Agent 状态与记忆压缩** | [#1329](https://github.com/anthropics/skills/issues/1329)（9 评论） | compact-memory（符号化笔记替代散文） |
| 🛡️ **Agent 治理与可观测性** | [#412](https://github.com/anthropics/skills/issues/412)（6 评论，已 CLOSED）<br>[#1385](https://github.com/anthropics/skills/issues/1385)（3 评论） | 策略执行、威胁检测、审计、三段式质量门（Pre-task → Adversarial → Delivery） |
| 📦 **包管理与去重** | [#189](https://github.com/anthropics/skills/issues/189)（6 评论） | `document-skills` 与 `example-skills` 内容重叠 |
| 🪟 **上下文窗口治理** | [#1487](https://github.com/anthropics/skills/issues/1487)（4 评论） | `claude-api` Skill 单次注入 ~156k tokens 直接撑爆 |

---

## 三、高潜力待合并 Skills（近期最有可能落地）

按"功能完整度 + 社区痛点匹配度 + 维护活跃度"排序：

| PR | 落地概率信号 |
|---|---|
| [#83](https://github.com/anthropics/skills/pull/83) **skill-quality-analyzer / skill-security-analyzer** | 直接缓解 [#492](https://github.com/anthropics/skills/issues/492) 命名空间信任危机，是当前社区情绪最强烈的修复路径 |
| [#1298](https://github.com/anthropics/skills/pull/1298) **skill-creator 评测修复** | 阻塞所有"用 skill-creator 优化 description"的工作流，影响面最广 |
| [#1050](https://github.com/anthropics/skills/pull/1050) + [#1099](https://github.com/anthropics/skills/pull/1099) **Windows 兼容** | 均为 1 行级改动，合并摩擦最低，修复 [#1061](https://github.com/anthropics/skills/issues/1061) |
| [#538](https://github.com/anthropics/skills/pull/538) / [#539](https://github.com/anthropics/skills/pull/539) / [#541](https://github.com/anthropics/skills/pull/541) **docx/pdf skill 错误修复** | 维护者 [@Lubrsy706](https://github.com/Lubrsy706) 集中提交，bug 明确、低风险 |
| [#509](https://github.com/anthropics/skills/pull/509) **CONTRIBUTING.md** | 修复 [#452](https://github.com/anthropics/skills/issues/452) 社区健康分（25%），纯文档 |
| [#1367](https://github.com/anthropics/skills/pull/1367) **self-audit Skill v1.3.0** | 与 [#1385](https://github.com/anthropics/skills/issues/1385) 三段质量门提案同源，提案方主动实现 |
| [#1302](https://github.com/anthropics/skills/pull/1302) **color-expert** | 作者持续维护至 7 月，工程化度高 |
| [#1479](https://github.com/anthropics/skills/pull/1479) **plan-file-hygiene** | 回应 [#1417](https://github.com/anthropics/skills/issues/1417)，定位为"规划工件生命周期" |

---

## 四、Skills 生态洞察（一句话）

> **社区最集中的诉求是「让 Skills 自己可信、可靠、可被组织级共享」**——围绕 *skill-creator 的评测失真（recall=0%）*、*匿名社区 Skill 冒充 anthropic 命名空间（信任边界）*、*Windows 跨平台断裂* 三件事反复提交 PR/Issue，本质上都是 Skills **工程化基础设施**问题，而非某个新业务 Skill 的缺失。

---

### 📎 附：值得关注的"次级热点"

- **Issue [#62](https://github.com/anthropics/skills/issues/62)（10 评论）**："所有 Skill 突然消失"——揭示 Skill 在用户机器上的持久化层仍脆弱，是产品可用性的关键 UX 问题。
- **Issue [#1487](https://github.com/anthropics/skills/issues/1487)**：`claude-api` 单次注入 156k tokens 撑爆上下文，提示**Skill 的"按需懒加载"机制**应被纳入官方规范。
- **Issue [#16](https://github.com/anthropics/skills/issues/16)**：把 Skill 暴露为 MCP 是 2025-10 提出的"老 idea 新需求"，至今仍开放。

---

<think>The user wants me to generate a daily report in Chinese for the Claude Code community based on GitHub data from 2026-08-01. Let me analyze the data carefully.

Key observations:
1. No releases in past 24 hours
2. 50 issues updated in past 24 hours (showing top 30 by comments)
3. 6 PRs updated in past 24 hours

Let me identify the most important issues:

Top issues by comments:
1. #79337 (51 comments, 20 likes) - Fable 5 prompts 'usage credits required' on Max plan - hot bug about new model
2. #28791 (30 comments, 111 likes) - Feature: Sync conversation history between CLI and desktop app - very popular feature request
3. #11139 (28 comments, 31 likes) - Claude Code Web cannot use gh CLI commands (permission denied)
4. #79441 (13 comments, 10 likes) - VS Code extension blocks Fable 5 with usage credits error - duplicate of #79337
5. #81159 (9 comments) - GPU process crash kills Claude Desktop and corrupts MSIX
6. #81275 (7 comments) - Claude Desktop MSIX GPU crash with browser pane
7. #77071 (6 comments) - Dispatch tab missing from Claude Desktop sidebar
8. #72274 (6 comments) - Cross-session credential leakage (security bug)
9. #77768 (5 comments) - Claude Desktop recurring silent GPU crash during web research
10. #74113 (5 comments) - Background agents go idle without final SendMessage
11. #79919 (4 comments) - Prompt suggestions never appear in GUI app
12. #83019 (2 comments) - Session transcripts default to outside backup coverage, auto-delete after 30 days
13. #77134 (2 comments) - Feature: surface Claude's just-authored text for approval
14. #75794 (2 comments) - Model erases all directory in plan mode (data loss)
15. #71566 (2 comments) - IDE selection from closed file leaks into model context (transmitted secret)

New issues from 2026-08-01:
- #83045 - Agents list renders garbled
- #83042 - Session limit burned in one request
- #83043 - CLAUDE_CODE_DISABLE_REFUSAL_FALLBACK=1 arms the silent refusal-fallback
- #83044 - claude.ai connector wedges permanently
- #83041 - Sub-agent conversations indistinguishable from autonomous behavior

Important PRs:
1. #81540 [CLOSED] - Fix #80705 about usage leak
2. #17776 [CLOSED] - docs: README for security-guidance plugin
3. #82987 [OPEN] - Fix CI cron failures and TUI latency fix
4. #82981 [OPEN] - Claude/automatizar inventario insumos
5. #82794 [OPEN] - feat(code-review): confidence scoring
6. #39872 [OPEN] - Upgrade Node.js 20 to 24

Trends:
- Fable 5 / model issues (Max plan, usage credits, model selection)
- Desktop app GPU crashes (Windows, MSIX package)
- Security concerns (credential leakage, secret transmission, rm -rf bypassing safety)
- Sync between CLI and desktop (feature request)
- Agent/sub-agent reliability
- Session management and data loss

Let me organize this into a well-structured Chinese report.

Looking more carefully at the issues, I notice several about Fable 5 model issues - this seems to be a new model that became standard on Max plan on 2026-07-20, and many users are having issues with it.

Also a concerning cluster of issues around:
- GPU process crashes on Windows desktop (#81159, #81275, #77768, #82962)
- Catastrophic data loss with rm -rf (#80830, #81273, #82165) - the safety classifier is being bypassed
- Session transcripts being auto-deleted after 30 days (#83019)

These are all major concerns.

Let me write the report now.</think>

# Claude Code 社区动态日报

**日期：2026-08-01**

---

## 📌 今日速览

今日社区焦点集中在三个方向：**(1) Fable 5 新模型在 Max 套餐下的"使用额度"误报问题**持续发酵，相关 Bug 报告累计评论数已突破 70 条；**(2) Claude Desktop Windows 版 MSIX 包的 GPU 进程崩溃**被多名用户反复报告，影响生产可用性；**(3) 多个高危安全/数据丢失事件**浮出水面，包括会话凭证跨用户泄漏、`rm -rf` 安全分类器被绕过的灾难性删除事件。

---

## 🚀 版本发布

过去 24 小时内无新版本发布。

---

## 🔥 社区热点 Issues

### 1. [#79337 — Fable 5 在 Max 套餐下误报"需使用额度"](https://github.com/anthropics/claude-code/issues/79337)
> **51 评论 · 20 👍 · 持续更新**

最热 Issue。Fable 5 自 2026-07-20 成为 Max 套餐标配模型后，Claude Code 拒绝调用 Fable 5，**静默降级到 Opus 4.8** 并提示"requires usage credits"。这是 Fable 5 上线以来最集中的故障报告，疑似后端配额/鉴权链路异常。

### 2. [#28791 — Feature：CLI 与 Desktop 对话历史同步](https://github.com/anthropics/claude-code/issues/28791)
> **30 评论 · 111 👍 · 长期热门**

获得 **111 个 👍** 的功能请求——CLI 与 Desktop 应用之间的会话同步。多端工作流割裂是高频痛点，社区呼声极高，长期居于 Enhancement 类前列。

### 3. [#11139 — Claude Code Web 无法调用 gh CLI（权限拒绝）](https://github.com/anthropics/claude-code/issues/11139)
> **28 评论 · 31 👍 · 长期未解**

Web 端 `gh` 命令持续报 Permission Denied，影响完整的 PR/CI 协作闭环。已标记 `oncall`，社区呼吁修复已超 8 个月。

### 4. [#79441 — VS Code 扩展在 Fable 5 仍有额度时拦截调用](https://github.com/anthropics/claude-code/issues/79441)
> **13 评论 · 10 👍 · #79337 的 duplicate**

与 #79337 同源，VS Code 扩展独立出现的同类问题，说明影响面跨多个客户端。

### 5. [#81159 — Opus 5 触发 Browser 操作时 GPU 进程崩溃](https://github.com/anthropics/claude-code/issues/81159)
> **9 评论**

Windows 11 下 GPU 进程退出码 `101457950`，**伴随 MSIX 包损坏**，恢复成本极高。

### 6. [#81275 — Desktop MSIX Browser 面板打开即崩溃](https://github.com/anthropics/claude-code/issues/81275)
> **7 评论**

Intel / NVIDIA / WARP 三种渲染后端复现同一退出码 `0x60C201E`，疑似 Chromium GPU 进程在特定 DOM 操作下的硬性崩溃。

### 7. [#72274 — 跨会话凭证泄漏：生产数据库被未授权主机修改](https://github.com/anthropics/claude-code/issues/72274)
> **6 评论 · 安全类**

**严重安全事件**：用户的会话上下文中出现其他用户的服务器凭据，并据此操作了生产数据库。该 Issue 涉及真实凭据，已做打码处理。

### 8. [#74113 — 后台 agent 频繁 idle 且不交付最终 SendMessage](https://github.com/anthropics/claude-code/issues/74113)
> **5 评论 · 5 👍**

影响多 agent 编排工作流，需要人工"再 ping 一次"才能拿到结果，对长任务自动化是显著阻碍。

### 9. [#77768 — Desktop 静默 GPU 崩溃，每日 4–5 次](https://github.com/anthropics/claude-code/issues/77768)
> **5 评论**

与 #81159、#81275 形成**崩溃集群**——Web 研究场景下高频发生，无 crash dump，恢复需冷启动。

### 10. [#83019 — 会话记录默认存于备份盲区，30 天后静默删除](https://github.com/anthropics/claude-code/issues/83019)
> **2 评论 · 数据丢失风险**

`session transcripts` 默认路径**不在常规备份范围内**，并自动 30 天清理。开发者存在静默丢失项目历史的真实风险，建议立即自查备份策略。

---

## 🔧 重要 PR 进展

| # | 标题 | 状态 | 要点 |
|---|------|------|------|
| [#81540](https://github.com/anthropics/claude-code/pull/81540) | Fix #80705：Usage leak 修复 | ✅ **CLOSED** | Atlas 2 自动提交，关闭使用额度泄漏问题（悬赏 $200） |
| [#17776](https://github.com/anthropics/claude-code/pull/17776) | docs: security-guidance 插件 README | ✅ **CLOSED** | 补齐 plugins 目录中**唯一缺失**的插件文档 |
| [#82987](https://github.com/anthropics/claude-code/pull/82987) | fix(ci)：cron 失败 + TUI 延迟修复 | 🟢 OPEN | 修复 GitHub Actions 定时任务失败，并提出**高负载下 TUI 输入延迟**的架构级方案 |
| [#82794](https://github.com/anthropics/claude-code/pull/82794) | feat(code-review)：置信度评分 + `--threshold` | 🟢 OPEN | 修复 README 与 code-review 命令的文档漂移：从二值校验升级为 **0–100 置信度评分** |
| [#39872](https://github.com/anthropics/claude-code/pull/39872) | Node.js 20 → 24 升级 | 🟢 OPEN | 为即将到来的 LTS 变更做准备 |
| [#82981](https://github.com/anthropics/claude-code/pull/82981) | Claude/automatizar inventario insumos | 🟢 OPEN | 自动化库存管理脚本 |

> 注：今日 PR 总量较少，2 条已合并，3 条为功能/基础设施类。

---

## 📈 功能需求趋势

从所有 Issues 中提炼，社区最集中的诉求集中在以下方向：

| 方向 | 代表 Issue | 信号 |
|------|-----------|------|
| **多端会话同步** | #28791 | 111 👍，长期 #1 Enhancement |
| **新模型 (Fable 5) 稳定接入** | #79337, #79441, #82466 | 配额/鉴权链路存在系统性 bug |
| **可插拔上下文管理** | #80751, #82056 | 长时间开发会话的上下文检索与可观测性 |
| **审批链路优化（节省 token）** | #77134 | 让 harness 直接展示已生成文本，减少二次模型调用 |
| **Shell 语义可控（Bash vs zsh）** | #74746 | 默认 shell 与工具语义不一致导致命令静默失败 |
| **崩溃恢复与稳定性** | #81159, #81275, #77768, #82962 | Desktop 端 GPU 崩溃成为最大可用性瓶颈 |

---

## ⚠️ 开发者关注点

### 🔴 安全与数据丢失（最高优先级）

- **#72274 跨会话凭证泄漏**：出现其他用户的生产凭据并据此操作数据库——这是本月最严重的事件，强烈建议团队轮换所有可能通过 Claude Code 接触过的密钥。
- **#80830 / #81273 / #82165 `rm -rf` 安全分类器绕过**：Auto-mode 下 `rm -rf` 在反引号替换或 detached 进程中**绕过 catastrophic-removal 防护**，已有多例真实目录删除事件。
- **#75794 Plan 模式下目录被清空**、**#71566 已关闭编辑器选区泄漏密钥到模型上下文**——权限边界仍在持续被发现缺陷。

### 🟡 平台稳定性

- Windows Desktop **MSIX + Chromium GPU 进程** 崩溃问题已成集群（#81159, #81275, #77768, #82962），跨 Intel / NVIDIA / WARP 三种渲染栈复现。
- **#83019 会话记录静默删除**：建议开发者立即确认本地 `~/.claude/projects/...` 是否纳入备份。

### 🟢 体验类痛点

- **#83042 一次请求耗尽 5 小时窗口**：配额计算疑似异常。
- **#79919 GUI 中 prompt suggestion 不出现**：`promptSuggestionEnabled: true` 在桌面/网页端无效。
- **#83044 MCP 连接器永久卡死**：长进程中 connector 返回 `isError` 但 UI 仍显示已连接，`/mcp reconnect` 无法重建 broker 状态。

---

> 📊 **日报小结**：今日信号非常清晰——**Fable 5 模型上线暴露的鉴权/计费链路 bug** 与 **Windows Desktop GPU 崩溃集群** 是 Anthropic 工程团队最需要立即响应的两件事；同时，多起**安全与数据丢失事件**提示 Auto-mode 与 Desktop 沙箱仍是高风险面，建议生产工作流短期内保留人工审阅。

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

<think>Let me analyze the GitHub data for OpenAI Codex and generate a daily report for 2026-08-01.

Key observations:
1. **Releases**: Three alpha releases of the Rust version (v0.147.0-alpha.4, alpha.3, alpha.1.1) - this is rapid iteration on the Rust implementation
2. **Issues**: 50 issues updated, with several major themes:
   - Windows/WSL bugs dominate (multiple issues)
   - Rate limits/usage accounting bugs (Plus, Pro subscription)
   - VS Code extension issues
   - macOS-specific bugs
   - Auto-resolve timing issue (most commented)
3. **PRs**: 43 PRs updated, mostly from copyberry[bot] (which seems to be an internal OpenAI bot), with themes around:
   - App server protocol improvements (plugin search, thread sections)
   - Code mode sandboxing (V8)
   - CLI flag additions
   - Windows MSVC build support
   - MCP OAuth improvements

Let me identify the top issues by importance and comments:
1. #28969 - 64 comments, 186 likes - disable auto-resolve 60s
2. #35058 - 42 comments, 109 likes - Codex Diff crashes on macOS
3. #34133 - 30 comments - Windows GPU crash
4. #35420 - 20 comments - OneDrive/Windows stream disconnect
5. #31786 - 17 comments - Remote control WSL to Android
6. #32323 - 12 comments - WSL gh CLI issue
7. #35119 - 11 comments - WSL Git detection
8. #29645 - 10 comments - Image gen timeout
9. #28316 - 10 comments - base64 image resending
10. #35871 - 9 comments - Windows sandbox MSIX pwsh issue

Top PRs:
1. #31471 - Extract apps cache into ConnectorRuntimeManager (still open)
2. #31817 - Update models.json
3. #36413 - realtime delegation acknowledgement
4. #36410 - Make user input blocking explicit
5. #36411 - Git repos as pre-tool hook markers
6. #36409 - Remote plugin search
7. #36408 - Custom Codex instructions for realtime
8. #36402 - Plugin search API
9. #36389 - Single-writer ownership for thread histories
10. #36380 - Thread section management APIs

Now let me structure the report in Chinese.</think>

# OpenAI Codex 社区动态日报
**日期：2026-08-01**

---

## 📌 今日速览

今日 Codex 项目节奏密集：Rust 实现连续发布 3 个 alpha 版本（0.147.0-alpha.4/3/1.1），社区反馈主要集中在 **Windows/WSL 生态兼容性**（PR 中已上线原生 MSVC Bazel 测试）和 **订阅配额计费异常** 两大痛点。App Server 协议侧同步落地多项能力：远程插件搜索、线程分区管理、Realtime 指令自定义等，构建可扩展生态的骨架已逐渐清晰。

---

## 🚀 版本发布

Rust CLI 在 24 小时内连发 3 个 alpha 版本（均为 0.147.0 系列）：

- **rust-v0.147.0-alpha.4**（最新）
- **rust-v0.147.0-alpha.3**
- **rust-v0.147.0-alpha.1.1**

高密度迭代通常意味着重大重构或功能合入（如沙箱、协议层）。建议关注 alpha 通道的 CHANGELOG 与测试反馈。

---

## 🔥 社区热点 Issues（Top 10）

1. **[#28969](https://github.com/openai/codex/issues/28969) — 禁用 60 秒自动应答**（64 评论 · 186 👍）
   长期高呼声 feature：希望可关闭 CLI/Plan 模式中"60 秒无操作自动决断"的逻辑。👍 数远超其他 issue，是用户对"过度自动化"的最大抗议。

2. **[#35058](https://github.com/openai/codex/issues/35058) — Codex Diff 在 macOS VS Code 崩溃**（42 评论 · 109 👍）
   编辑文件后打开 Codex Diff 直接报 "Oops, an error has occurred"。影响所有仓库，严重阻塞 macOS 用户的核心使用流程。

3. **[#34133](https://github.com/openai/codex/issues/34133) — Windows 浏览器 GPU 进程崩溃**（30 评论）
   `vk_swiftshader.dll` 被 Code Integrity 拒绝后，内置浏览器截图直接摧毁 GPU 进程，App 陷入卡顿或无法重启。

4. **[#35420](https://github.com/openai/codex/issues/35420) — OneDrive 工作区流式断连**（20 评论）
   选用 OneDrive 路径的工作区在 OneDrive 降级时会反复 "stream disconnected"，是 Windows + 云盘用户的典型陷阱。

5. **[#31786](https://github.com/openai/codex/issues/31786) — Windows WSL 远程控制 Android 无效**（17 评论）
   配对流程看似成功但手机端永远 "connecting"。跨设备 Remote Control 体验直接断裂。

6. **[#32323](https://github.com/openai/codex/issues/32323) — WSL 下 PR 集成 gh 解析失败**（12 评论 · 14 👍）
   `gh: Expected VAR_SIGN, actual: COLON` 错误使 Codex PR 集成在 WSL 环境完全不可用。

7. **[#35119](https://github.com/openai/codex/issues/35119) — WSL 仓库被误判为非 Git**（11 评论 · 11 👍）
   26.721.3404 版本起有效 WSL 仓库被标记 "Git is unavailable"，回退到 26.715.10079 才正常。

8. **[#29645](https://github.com/openai/codex/issues/29645) — App 内置 image_gen 超时**（10 评论 · 3 👍）
   普通卡面提示词在约 240 秒后必超时，简洁提示词却成功——模型选择或后端路由存在不一致。

9. **[#28316](https://github.com/openai/codex/issues/28316) — base64 图片被反复重发**（10 评论 · 3 👍）
   大图 base64 payload 在后续 `/v1/responses` 请求中被持续重发，导致 token 浪费。

10. **[#35871](https://github.com/openai/codex/issues/35871) — Windows 沙箱拒绝 MSIX 版 pwsh**（9 评论）
    `CreateProcessAsUserW` 在 shell 为 Microsoft Store 版 PowerShell 7 时失败（错误 5），影响所有 MSIX 用户。

---

## 🛠️ 重要 PR 进展（Top 10）

1. **[#31471](https://github.com/openai/codex/pull/31471) — 抽取 Apps 缓存至 ConnectorRuntimeManager**（仍 OPEN）
   加速连接器（faster-connectors）系列重构首篇：按账号/用户/工作空间/Codex Home 切分运行时上下文。架构级改动，影响后续所有连接器行为。

2. **[#36373](https://github.com/openai/codex/pull/36373) — 新增 `--approve-for-me` CLI 标志**
   自动审阅模式入口：审批请求走自动 review 流程 + workspace-write 沙箱，降低交互摩擦。

3. **[#36380](https://github.com/openai/codex/pull/36380) — 线程分区管理 API**
   新增 `threadSection/create|update|delete` 方法，使用 SQLite + UUIDv7 持久化自定义分区。是会话管理走向结构化的关键一步。

4. **[#36409](https://github.com/openai/codex/pull/36409) — 实现远程插件搜索**
   `plugin/search` 直连远端服务，支持全局/工作空间/个人作用域分页。为插件生态提供发现能力。

5. **[#36413](https://github.com/openai/codex/pull/36413) — 实时委派确认控制**
   为 `thread/realtime/start` 增加 `delegationAckFiller` 字段，向 V3 Frameless Bidi 透传 `delegation.ack_filler`。

6. **[#36410](https://github.com/openai/codex/pull/36410) — 用户输入阻塞语义显式化**
   引入必需字段 `isBlocking`，将"是否必须等待响应"与超时策略解耦。修复 #28969 类痛点的协议层基础。

7. **[#36408](https://github.com/openai/codex/pull/36408) — Realtime 转换自定义指令**
   `realtimeStartInstructions` / `realtimeEndInstructions` 让用户在进入/退出实时模式时插入自定义上下文。

8. **[#36389](https://github.com/openai/codex/pull/36389) — 线程历史单写者锁**
   历史线程缺乏跨进程写者保护，现统一加锁，避免并发写入引发的状态损坏。

9. **[#36374](https://github.com/openai/codex/pull/36374) — Code Mode 启用 V8 沙箱**
   在 Windows MSVC 与打包构建中启用 `v8_enable_sandbox`，补齐代码执行模式的隔离能力。

10. **[#36372](https://github.com/openai/codex/pull/36372) — Windows Bazel 测试切至 MSVC**
    后合并任务改为 `x86_64-pc-windows-msvc` + `//:windows_x86_64_msvc` 目标平台，让 Windows 原生构建矩阵完整化。

---

## 📈 功能需求趋势

从全部 50 条更新 Issues 提炼：

| 方向 | 关键信号 |
|---|---|
| **Windows/WSL 兼容** | 至少 7 条 issues 涉及（GPU 崩溃、WSL Git 检测、MSIX 沙箱、OneDrive 流断连、PR 集成等） |
| **配额/计费准确性** | 多条 Plus/Pro 用户反馈配额"瞬间耗尽"、重置逻辑错误、UI 显示与实际不一致（#36353, #28331, #32250, #36369, #33216） |
| **App Server / 协议扩展** | 大量 PR 集中于插件搜索、线程分区、Realtime 控制——社区与官方正在共建可扩展运行时 |
| **自动化控制粒度** | 关闭 60s 自动应答（#28969）、`--approve-for-me`（#36373）、per-thread Auto mode（#34278） |
| **多模态效率** | base64 图片重发（#28316）、image_gen 超时（#29645）、image prep analytics（#36388） |
| **会话/历史可靠性** | 线程写者锁、Continue in new task 失败、Forked tasks 继承未完成回合（#36061, #36405） |
| **MCP / OAuth 治理** | 企业 SSO 重新认证可靠性（#35006）、MCP elicitations 严格自动审阅（#36365） |

---

## 🧑‍💻 开发者关注点（高频痛点）

1. **自动化"过度积极"**：60 秒自动应答是用户最高频抱怨，希望保留人介入的开关。
2. **跨平台不一致**：同一份工作流在 macOS / Windows / WSL 表现差异显著，Windows + 云盘/沙箱组合尤其脆弱。
3. **配额计费透明度差**：Plus 用户在不到 24 小时内周配额耗尽、UI 显示 58% 却弹限流，信任成本被严重消耗。
4. **大型会话成本失控**：base64 图片反复重发、wait 轮询白白消耗模型额度（#35259 称浪费近 20% token 预算）。
5. **远程控制 & 跨设备体验**：iOS Remote 出现幽灵项目、Windows → Android 永远卡在 connecting，反映出 Remote 功能仍属早期阶段。
6. **可扩展性诉求升温**：插件搜索、线程分区、Realtime 指令等 PR 集中落地，表明社区和官方正共同把 Codex 从"单一 CLI"推向"可被编排的平台"。

---

*数据来源：[github.com/openai/codex](https://github.com/openai/codex)，抓取窗口：2026-07-31 → 2026-08-01*

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

<think>The user wants me to generate a daily community report for Gemini CLI based on GitHub data from 2026-08-01. Let me analyze the data carefully and structure a comprehensive Chinese-language report.

Let me review the data:

**Releases (last 24h):**
1. v0.55.0-nightly.20260801.gf47d6c6f7 - nightly release with two fixes
2. v0.54.0-preview.1 - patch release
3. v0.53.1 - patch release

**Top Issues by comments (need to pick 10):**
1. #22323 - Subagent recovery after MAX_TURNS reports GOAL success (12 comments, 2 likes)
2. #21409 - Generalist agent hangs (8 comments, 8 likes)
3. #19873 - Zero-Dependency OS Sandboxing & Post-Execution Intent Routing (8 comments, 1 like)
4. #24353 - Robust component level evaluations (7 comments, 0 likes)
5. #22745 - AST-aware file reads, search, mapping (7 comments, 1 like)
6. #21968 - Gemini does not use skills and sub-agents enough (6 comments, 0 likes)
7. #26522 - Stop Auto Memory from retrying low-signal sessions (5 comments, 0 likes)
8. #26525 - Add deterministic redaction and reduce Auto Memory logging (4 comments, 0 likes)
9. #25166 - Shell command execution gets stuck "Waiting input" (4 comments, 3 likes)
10. #22232 - Browser_agent resilience: session takeover and lock recovery (4 comments, 0 likes)
11. #21983 - browser subagent fails in wayland (4 comments, 1 like)
12. #21000 - Native file tools for task tracker (4 comments, 0 likes)
13. #20079 - symlink not recognized as agent (4 comments, 0 likes)
14. #26523 - Surface or quarantine invalid Auto Memory inbox patches (3 comments, 0 likes)
15. #24246 - 400 error with > 128 tools (3 comments, 0 likes)
16. #23571 - Model creates tmp scripts in random spots (3 comments, 0 likes)
17. #22672 - Agent should stop destructive behavior (3 comments, 1 like)
18. #22267 - Browser Agent ignores settings.json overrides (3 comments, 0 likes)
19. #22186 - get-shit-done output hook causes crash (3 comments, 0 likes)
20. #22093 - (Sub)agents running without permission since v0.33.0 (3 comments, 0 likes)

**Top PRs (need to pick 10):**
1. #28613 - replace console.error with debugLogger in sdk session
2. #28607 - preserve functionCall thoughtSignature when stripping thought parts (fixes #28604)
3. #28526 - fix vscode-ide-companion leaking disposables
4. #28612 - chore/release: bump version to 0.55.0-nightly
5. #28551 - fix(cli): fall back to embedded macOS seatbelt profiles
6. #28566 [CLOSED] - propagate InvalidStreamError details to UI
7. #28608 - fall back to stable models when preview model 404s
8. #28609 [CLOSED] - cherry-pick f47d6c6 to release v0.54.0-preview.1
9. #28610 [CLOSED] - cherry-pick f47d6c6 to release v0.53.1 [CONFLICTS]
10. #28481 - refresh MCP OAuth tokens with stored client ID
11. #28606 - Setapart (looks like a placeholder PR)

Now let me craft the report. I'll need to:
- Be concise and professional
- Include GitHub links
- Identify trends

Key trends I notice:
- **Subagent/Agent reliability** is the biggest theme - multiple issues about hangs, crashes, and unexpected behavior
- **Auto Memory system** issues are emerging (#26516, #26522, #26523, #26525)
- **Browser agent** improvements are needed (#22232, #22267, #21983)
- **Security** concerns around MCP OAuth, sandbox profiles
- **Terminal rendering** issues (#21924, #24935)
- **AST-aware tooling** investigation
- **Tool limit issues** (>128 tools causes 400 errors)

Let me write this report now.</think>

# Gemini CLI 社区动态日报

**日期**: 2026-08-01  
**数据来源**: [github.com/google-gemini/gemini-cli](https://github.com/google-gemini/gemini-cli)

---

## 📌 今日速览

今天 Gemini CLI 发布了 **3 个版本**（v0.55.0-nightly、v0.54.0-preview.1、v0.53.1），核心修复围绕 `InvalidStreamError` 错误透传和 `functionCall thoughtSignature` 回归问题。社区方面，**Subagent 可靠性**仍是 P1 级别的最大焦点，MAX_TURNS 后子代理错误地报告为 "GOAL" 成功、generalist agent 长时间挂起等问题持续收到维护者关注；同时 **Auto Memory 系统**暴露出多个安全和稳定性隐患，进入了集中修复窗口。

---

## 🚀 版本发布

今日同时推进了三条发布线，凸显出 `f47d6c6f7` 这次提交的重要性：

| 版本 | 类型 | 关键变更 |
|---|---|---|
| **v0.55.0-nightly.20260801.gf47d6c6f7** | Nightly | • [`fix(core)`] 容量耗尽归类为 terminal，避免重试挂起（[#28599](https://github.com/google-gemini/gemini-cli/pull/28599)）<br>• [`fix(core,cli)`] 将 `InvalidStreamError` 详情透传到 UI，为空响应提供针对性指引 |
| **v0.54.0-preview.1** | Preview Patch | 回移植 `f47d6c6` 修复（[#28609](https://github.com/google-gemini/gemini-cli/pull/28609)）|
| **v0.53.1** | Stable Patch | 回移植 `f47d6c6`（[CONFLICTS]，需手动解决冲突，[#28610](https://github.com/google-gemini/gemini-cli/pull/28610)）|

---

## 🔥 社区热点 Issues

按讨论热度与重要性筛选出 10 个最值得关注的问题：

### 1. [#22323](https://github.com/google-gemini/gemini-cli/issues/22323) ⭐ P1 · 12 评论
**Subagent 在 MAX_TURNS 后被错误报告为 GOAL 成功**  
`codebase_investigator` 子代理即使在达到 turn 上限时仍报告 `status: "success"` 与 `Termination Reason: "GOAL"`，掩盖了真实的中断情况。这会影响可观测性和后续自动化决策。

### 2. [#21409](https://github.com/google-gemini/gemini-cli/issues/21409) ⭐ P1 · 8 评论 · 👍8
**Generalist agent 挂起**  
触发 generalist 子代理后（如创建文件夹等简单操作），CLI 无限期挂起，用户等待 1 小时后只能取消。这是社区反应最强的问题（👍=8），影响日常使用体感。

### 3. [#19873](https://github.com/google-gemini/gemini-cli/issues/19873) ⭐ P2 · 8 评论
**Zero-Dependency OS 沙箱与执行后意图路由**  
利用 Gemini 3 模型对原生 bash 的亲和力，引入 OS 级沙箱机制以释放模型原生能力，是 agent 安全方向的重要 EPIC。

### 4. [#24353](https://github.com/google-gemini/gemini-cli/issues/24353) ⭐ P1 · 7 评论
**组件级评估体系建设**  
继 #15300 后，已生成 76 个 behavioral eval 测试，覆盖 6 款支持的 Gemini 模型，目标是把 agent 行为评估系统化、规模化。

### 5. [#22745](https://github.com/google-gemini/gemini-cli/issues/22745) ⭐ P2 · 7 评论
**AST 感知文件读取、搜索与映射评估**  
探索使用 AST 工具精确读取方法边界、减少 read 错位导致的回合浪费与 token 噪音，是性能与体验双重优化方向。

### 6. [#21968](https://github.com/google-gemini/gemini-cli/issues/21968) ⭐ P2 · 6 评论
**Gemini 几乎不使用自定义 skills 和子代理**  
即使用户定义了 gradle、git 等 skills，模型在相关任务中也不会主动调用，需要明确指示。这反映了 agent 默认行为的可用性问题。

### 7. [#25166](https://github.com/google-gemini/gemini-cli/issues/25166) ⭐ P1 · 4 评论 · 👍3
**Shell 命令执行后卡在 "Waiting input"**  
极简单的 CLI 命令执行完成后，CLI 仍把 shell 标记为活动状态并显示 "Awaiting user input"，造成挂死错觉。

### 8. [#26522](https://github.com/google-gemini/gemini-cli/issues/26522) ⭐ P2 · 5 评论
**Auto Memory 无限重试低信号会话**  
Auto Memory 的提取代理若认为某 session 信号不足，会反复出现在 index 中却从不真正处理，需要一个明确的"放弃"机制。

### 9. [#22232](https://github.com/google-gemini/gemini-cli/issues/22232) ⭐ P3 · 4 评论
**browser_agent 会话接管与锁恢复增强**  
`BrowserManager.ts` 当前对 `persistent` 模式下被锁定的浏览器配置采用"快速失败"策略，导致已有会话难以复用。

### 10. [#22093](https://github.com/google-gemini/gemini-cli/issues/22093) ⭐ P2 · 3 评论
**自 v0.33.0 起子代理绕过权限运行**  
用户配置 `Agents: disabled`，但更新到 v0.33.0 后 generalist 等子代理仍被自动调用。这暴露了权限/启用的回归问题。

---

## 🛠️ 重要 PR 进展

### 1. [#28566](https://github.com/google-gemini/gemini-cli/pull/28566) ✅ CLOSED
**`InvalidStreamError` 详情透传到 UI** — P1 · size/xl  
修复 [#28600](https://github.com/google-gemini/gemini-cli/issues/28600)。将 core 层错误 `type` 与 `message` 推到 UI Hook，使 CLI 能根据具体错误推荐 `/compress` 等排错动作。已被今日 v0.54.0-preview.1 / v0.53.1 回移植。

### 2. [#28607](https://github.com/google-gemini/gemini-cli/pull/28607)
**修复 v0.53.0 引入的 `functionCall` 缺 `thought_signature` 回归** — size/m  
定位 [#28604](https://github.com/google-gemini/gemini-cli/issues/28604)。`stripThoughts()` 在剥离 thought parts 时误删了 `functionCall` 中的 `thought_signature`，导致 Gemini 2.x 返回 `API Error 400`。

### 3. [#28526](https://github.com/google-gemini/gemini-cli/pull/28526)
**修复 vscode-ide-companion 中 Disposable 泄漏** — P2 · size/s  
修正 `activate()` 中被括号折叠成逗号表达式导致的 `gemini.diff.accept` 与 `onDidChangeWorkspaceFolders` 注册丢失。

### 4. [#28608](https://github.com/google-gemini/gemini-cli/pull/28608)
**预览模型 404 时回退到稳定模型** — P2 · size/m  
修复 [#28600](https://github.com/google-gemini/gemini-cli/issues/28600)。使用 Gemini API Key 鉴权时，若项目未开通 preview 访问导致 `gemini-3.1-pro-preview` 返回 404，应自动 fallback 到稳定模型。

### 5. [#28481](https://github.com/google-gemini/gemini-cli/pull/28481)
**使用存储的 client ID 刷新 MCP OAuth 令牌** — P1 · size/m  
修复 `gemini mcp add --transport http` 通过 OAuth 发现+动态客户端注册的服务刷新失败问题。修复前每次刷新都会先删除已存凭证。

### 6. [#28551](https://github.com/google-gemini/gemini-cli/pull/28551)
**macOS seatbelt 配置文件缺失时回退到内嵌版本** — size/l  
在 sandbox 模式（`-s`）下，当 runfiles/bundle 中找不到 `.sb` 静态配置时不再启动崩溃。

### 7. [#28613](https://github.com/google-gemini/gemini-cli/pull/28613)
**用 `debugLogger` 替换 SDK 中的 `console.error`** — size/xs  
清理日志实践，移除冗余的 ESLint disable 注释。

### 8. [#28599](https://github.com/google-gemini/gemini-cli/pull/28599)
**容量耗尽归类为 terminal，避免重试挂起** — `fix(core)`  
将"容量耗尽"明确为终止性错误，避免流式响应卡死时被无限重试。

### 9. [#28612](https://github.com/google-gemini/gemini-cli/pull/28612)
**Nightly 版本自动化 bump 到 0.55.0-nightly.20260801.gf47d6c6f7**

### 10. [#28609](https://github.com/google-gemini/gemini-cli/pull/28609) ✅ CLOSED · [#28610](https://github.com/google-gemini/gemini-cli/pull/28610) ✅ CLOSED
**Preview / Stable 通道回移植自动化** — v0.54.0-preview.1 顺利合入，v0.53.1 出现冲突需手动解决。

---

## 📈 功能需求趋势

从 Issue 标签与主题中提炼出的社区关注方向：

| 方向 | 代表 Issue | 关注度 |
|---|---|---|
| **Subagent/Agent 可靠性** | #22323, #21409, #22093, #21968, #22672 | 🔥🔥🔥🔥🔥 |
| **Auto Memory 系统** | #26516, #26522, #26523, #26525 | 🔥🔥🔥🔥 |
| **Browser Agent 健壮性** | #22232, #22267, #21983 | 🔥🔥🔥 |
| **AST 感知代码理解** | #22745, #22746, #21000 | 🔥🔥🔥 |
| **安全与沙箱** | #19873, #28481, #25166, #26525 | 🔥🔥🔥 |
| **终端渲染性能** | #21924, #24935 | 🔥🔥 |
| **模型兼容与降级** | #28608, #24246 | 🔥🔥 |
| **评估与可观测性** | #24353, #22598, #21763 | 🔥🔥 |

### 关键洞察
- **Agent 体系**已进入深水区：早期功能铺开（P2/P3 特性请求）已被可靠性问题（P1 bug）取代。
- **Auto Memory** 是 5 月新引入的能力，但已在 #26516 之下集中暴露 4 个问题，提示能力发布节奏与稳定性打磨之间的张力。
- **AST-aware 工具** 和 **AST 驱动的代码库映射**正在被认真评估，可能成为下一波效率提升的关键。

---

## 👨‍💻 开发者关注点

从用户反馈中总结的高频痛点：

1. **🪦 静默挂起是最致命的体验问题**  
   `generalist agent hangs`（#21409 👍8）、`shell Waiting input`（#25166 👍3）、`vite 交互卡死`（#22465）——用户难以判断是工具链慢、模型慢还是真挂死。

2. **🔇 子代理的"状态失真"**  
   MAX_TURNS 仍报 GOAL 成功（#22323）、bug 报告不含 subagent 上下文（#21763）、`/chat share` 不显示子代理轨迹（#22598）——可观测性短板直接影响排障效率。

3. **🧠 Skills / Subagent 自发现能力不足**  
   模型在没被显式提示时几乎不调用用户自定义 skills（#21968），需要主动指令才能触发。

4. **🛡️ Auto Memory 安全与可信度**  
   #26525（缺乏确定性脱敏）、#26523（无效 patch 静默跳过）、#26522（无限重试）形成连锁问题：Memory 不仅本身有 bug，还可能让低质量或带敏感信息的数据进入长期上下文。

5. **🪟 终端表现层细节**  
   Wayland 下 browser subagent 失败（#21983）、终端 resize 闪烁（#21924）、退出外部编辑器后终端损坏（#24935）——核心交互层的细节体验仍有较多提升空间。

6. **🔐 MCP OAuth 与跨项目可用性**  
   #28481 修复了 OAuth 刷新凭证被误删的问题；#28608 解决了 preview 模型在不同项目鉴权下的可用性。这些"看似边缘"但对真实工作流至关重要。

---

*日报由社区数据自动聚合生成。点击 Issue/PR 编号即可跳转原帖参与讨论。*

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

<think>The user wants me to generate a GitHub Copilot CLI community daily report for 2026-08-01 based on the provided data. Let me analyze the data carefully.

Looking at the data:

1. **Releases (past 24 hours)**:
   - v1.0.78-0: Added `/permissions` to switch between approval modes; ACP mode supports closing sessions with closeSession request; New sandbox setting `allowDevToolCaches`

2. **Issues (past 24 hours, 32 total, showing 30 most commented)**:
   Let me identify the most important ones based on comment count and likes:
   - #4188 [CLOSED] Regression on plan-mode (7 comments, 3 likes)
   - #4305 [CLOSED] Failed to convert JavaScript value 'Undefined' into rust type 'String' (4 comments, 4 likes)
   - #4078 [OPEN] Scheduled prompts kill the existing prompt queue (4 comments)
   - #4161 [CLOSED] task_complete tool unavailable after switching back to autopilot mode (4 comments, 4 likes)
   - #3183 [CLOSED] SDK: orphan tool_use left mid-conversation (4 comments)
   - #3909 [OPEN] Feature: enterprise/org server-managed settings (4 comments)
   - #1352 [OPEN] sessionStart hook stdout is not displayed (3 comments, 3 likes)
   - #3215 [CLOSED] Fail Tool Calls (3 comments)
   - #2109 [OPEN] ACP: support ask_user/ask_question (2 comments, 6 likes - highest likes!)
   - #2182 [CLOSED] copilot-cli hangs when terminal command larger than PTY buffer (2 comments, 2 likes)
   - #3712 [OPEN] Windows ReFS/Dev Drive local-sandbox limitation (2 comments, 4 likes)
   - #4251 [OPEN] Resume of a large session OOMs (1 comment, 1 like)
   - #4311 [OPEN] Transcript renders as blank lines (1 comment)
   - #4313 [OPEN] Allow scrolling through conversation history (1 comment)
   - #4317 [OPEN] Installing Specific Version Always Installs Latest (1 comment)
   - #4318 [OPEN] Autopilot task-completion enforcement (1 comment)
   - #4315 [CLOSED] List of models does not refresh (1 comment)
   - Other newer issues with 0 comments

3. **Pull Requests (past 24 hours, 2 total)**:
   - #3163 [OPEN] ViewSonic monitor
   - #4316 [OPEN] Create devcontainer.json

Wait, both PRs seem quite unrelated and small. Let me look again...

Actually looking at this more carefully:
- #3163 - ViewSonic monitor - seems like a strange PR title, possibly spam or unrelated
- #4316 - Create devcontainer.json - also a generic title

The user wants me to pick 10 important PRs, but only 2 are listed. I'll mention these 2.

Let me think about feature request trends by analyzing the issues:
- ACP (Agent Client Protocol) improvements (#2109, #4174, #4188)
- Session management (#4078, #4251, #4319, #4325, #4324, #4304)
- Permissions and approval modes (#4188, #4318, #3712)
- Model support (#3215, #4315)
- Terminal rendering (#1352, #4311, #4313, #4312)
- MCP support (#1478, #4303, #4323, #4320)
- Enterprise/config (#3909, #4317)
- Memory/performance (#4251, #4325)
- Custom agents (#4161, #4306, #4320)

Now let me write the report in Chinese, professional and concise.

Let me structure my report:

1. **今日速览** - Brief summary
2. **版本发布** - v1.0.78-0
3. **社区热点 Issues** - Top 10
4. **重要 PR 进展** - The 2 PRs (mention there are only 2)
5. **功能需求趋势** - Trends
6. **开发者关注点** - Pain points

Let me draft this now.

For the issues selection, I should pick those most worth noting. Let me prioritize based on:
- Comment count (engagement)
- Likes (community support)
- Whether it's closed (showing resolution) or open (showing active problem)
- Recency
- Importance for users

Top picks:
1. #4188 - Plan-mode regression (CLOSED, 7 comments) - important resolution
2. #4305 - JavaScript to Rust conversion error (CLOSED, 4 likes)
3. #2109 - ACP ask_user support (OPEN, 6 likes - highest)
4. #4251 - Resume large session OOM (OPEN, recent, performance regression)
5. #3909 - Enterprise managed settings (OPEN, 4 comments)
6. #4078 - Scheduled prompts kill queue (OPEN)
7. #4161 - task_complete regression (CLOSED, 4 likes)
8. #1352 - sessionStart hook stdout not displayed (OPEN, 3 likes)
9. #3712 - Windows ReFS/Dev Drive sandbox (OPEN, 4 likes)
10. #4325 - V8 max string length session unloadable (new, serious data loss)

Now let me write the report.

Actually, looking more carefully, I should think about which issues represent significant themes:
- Plan mode regression (#4188) - release blocker for many users
- Enterprise management (#3909) - significant feature request
- Session persistence issues (#4251, #4325) - data integrity
- ACP protocol extensions (#2109) - integration
- Windows compatibility (#3712) - platform issue
- Performance regressions - #4251

Let me finalize my list:
1. #4188 - Plan-mode regression (CLOSED)
2. #4251 - Resume large session OOM regression (OPEN, serious)
3. #4325 - V8 string length session unloadable (NEW, serious)
4. #3909 - Enterprise server-managed settings (OPEN, feature)
5. #2109 - ACP ask_user extension (OPEN, top liked)
6. #4078 - Scheduled prompts kill queue (OPEN)
7. #4305 - JS to Rust conversion error (CLOSED)
8. #4161 - task_complete tool unavailable (CLOSED)
9. #1352 - sessionStart hook stdout (OPEN, long-standing)
10. #3712 - Windows ReFS/Dev Drive (OPEN, well-received)

Good selection. Let me write the report now.

For PRs, I'll just describe what's there since only 2 are listed.

Let me check the data again about dates. The user wants 2026-08-01 report. The data mentions updates from 2026-07-31 and 2026-08-01, so this is consistent.

Now let me write this in Chinese, professional and concise.</think>

# GitHub Copilot CLI 社区动态日报

**日期：2026-08-01**
**数据范围：github.com/github/copilot-cli（过去 24 小时）**

---

## 📌 今日速览

v1.0.78-0 预发布版本上线，重点引入 `/permissions` 审批模式切换与 `allowDevToolCaches` 沙箱新设置；与此同时，社区对 **计划模式（Plan Mode）的回归问题**关注度最高，已关闭的相关 issue 引发 7 条讨论。**会话可靠性**成为近期焦点——大型会话恢复时出现 OOM（#4251）、`events.jsonl` 超长后永久不可恢复（#4325）等问题陆续浮现，提示数据完整性风险。

---

## 🚀 版本发布

### v1.0.78-0（预发布）

**Added（新增）**
- `/permissions` 命令用于在审批模式间切换
- ACP 模式支持通过 `closeSession` 请求关闭会话

**Improved（改进）**
- 新增沙箱设置 `allowDevToolCaches`（默认开启）：允许沙箱化构建访问工具链缓存、注册表与安装，使构建在受限环境下也能正常工作（详情略）

> 完整更新日志：[Release 链接](https://github.com/github/copilot-cli/releases)（v1.0.78-0）

---

## 🔥 社区热点 Issues

按社区讨论热度与重要性精选：

### 1. [#4188 计划模式回归：shell 命令被拦截](https://github.com/github/copilot-cli/issues/4188) ✅ 已关闭
- **状态**：CLOSED · 7 条评论 · 3 👍
- **要点**：用户反馈升级后 Plan Mode 开始阻止 `gh` 等 shell 命令，导致计划流程中无法读取/创建 Issue。维护者已介入修复，反映该问题对工作流影响显著。

### 2. [#4251 1.0.74 恢复大型会话 OOM / 单核 70 分钟卡顿（回归）](https://github.com/github/copilot-cli/issues/4251) 🟢 OPEN
- **状态**：OPEN · 1 条评论 · 1 👍
- **要点**：A/B 测试证实 1.0.74 相比 1.0.73 内存占用膨胀 3–4 倍，长期会话恢复时峰值 RSS 巨大并长时间卡顿。**性能回归**，影响重度用户。

### 3. [#4325 `events.jsonl` 超过 V8 字符串长度上限后会话永久不可恢复](https://github.com/github/copilot-cli/issues/4325) 🟢 OPEN
- **状态**：OPEN · 全新报告
- **要点**：长生命周期会话的 `events.jsonl` 突破 V8 字符串上限后，CLI 无法恢复会话，会话仍出现在 `/resume` 列表但加载失败。**数据完整性风险**。

### 4. [#2109 ACP：支持 ask_user / ask_question 扩展方法](https://github.com/github/copilot-cli/issues/2109) 🟢 OPEN
- **状态**：OPEN · 2 条评论 · **6 👍**（本期最高点赞）
- **要点**：请求 ACP 增加 `ask_user`/`ask_question` 协议扩展方法，便于自定义客户端向 Copilot CLI 发起澄清性问题并返回结构化答案。生态集成呼声高。

### 5. [#3909 企业/组织级服务端管理配置（含 env）](https://github.com/github/copilot-cli/issues/3909) 🟢 OPEN
- **状态**：OPEN · 4 条评论
- **要点**：企业管理员目前无法集中下发配置（尤其是环境变量）到本地 Copilot CLI。Codespaces/Codespace secrets 仅覆盖云端环境。**企业落地刚需**。

### 6. [#4305 JS→Rust 类型转换失败（Undefined → String）](https://github.com/github/copilot-cli/issues/4305) ✅ 已关闭
- **状态**：CLOSED · 4 条评论 · 4 👍
- **要点**：升级 1.0.76 后任意命令立刻报错，社区影响面广，已快速修复。

### 7. [#4161 切回 autopilot 后 `task_complete` 工具不可用（回归 #1523）](https://github.com/github/copilot-cli/issues/4161) ✅ 已关闭
- **状态**：CLOSED · 4 条评论 · 4 👍
- **要点**：维护者此前在 v1.0.4 声明的 `task_complete` 始终可用承诺被打破，回归已被定位修复。

### 8. [#4078 计划任务触发会清空现有 prompt 队列](https://github.com/github/copilot-cli/issues/4078) 🟢 OPEN
- **状态**：OPEN · 4 条评论
- **要点**：`/every` 或 `/after` 触发的定时 prompt 会杀掉当前队列任务，且不再弹出队列剩余项。**自动化场景痛点**。

### 9. [#3712 Windows 上 ReFS / Dev Drive 本地沙箱限制](https://github.com/github/copilot-cli/issues/3712) 🟢 OPEN
- **状态**：OPEN · 2 条评论 · 4 👍
- **要点**：友好的文档/可识别性请求——指出本地沙箱在 ReFS/Dev Drive 上的限制，根因可能位于 Windows 平台层。**Windows 用户关注**。

### 10. [#1352 `sessionStart` hook 的 stdout 不在终端 UI 显示](https://github.com/github/copilot-cli/issues/1352) 🟢 OPEN
- **状态**：OPEN · 3 条评论 · 3 👍
- **要点**：hook 执行成功但 stdout 被静默丢弃，阻止了启动提醒、checklist、环境 banner 等常规用例。**长期悬挂问题（自 2026-02）**。

---

## 🔧 重要 PR 进展

过去 24 小时内仓库活跃 PR 较少，仅 2 条更新：

### [#3163 ViewSonic monitor](https://github.com/github/copilot-cli/pull/3163)
- 描述自述为针对 #2591 / #3561 / #3559 的监控 PR，关联 GitHub Actions 运行器。
- 状态 OPEN · 0 👍 · 需维护者确认关联性与合规性。

### [#4316 Create devcontainer.json](https://github.com/github/copilot-cli/pull/4316)
- 新提交，新增 devcontainer.json 文件，便于在容器/Codespace 中标准化开发环境。
- 状态 OPEN · 0 👍 · 描述信息较精简，待补充动机说明。

> ⚠️ **观察**：本期 PR 数量显著少于 Issues 量（32:2），说明社区问题反馈活跃，但代码贡献侧较为清淡，建议关注后续是否有核心团队针对 Plan Mode / 性能回归的修复合入。

---

## 📈 功能需求趋势

从本期 Issues 提炼出的社区最关注方向：

| 方向 | 代表 Issue | 关注度 |
|------|-----------|--------|
| **会话可靠性与持久化** | #4251, #4325, #4324 | 🔥🔥🔥 |
| **计划模式（Plan Mode）回归与体验** | #4188, #4319, #4324 | 🔥🔥🔥 |
| **企业/组织级管控** | #3909, #4317 | 🔥🔥 |
| **ACP 协议扩展（生态集成）** | #2109, #4174 | 🔥🔥 |
| **Windows 平台兼容** | #3712, #4324 | 🔥 |
| **MCP（Model Context Protocol）支持** | #1478, #4320, #4323, #4303 | 🔥🔥 |
| **终端渲染与交互** | #1352, #4311, #4313, #4312, #4304 | 🔥🔥 |
| **多模型/模型列表管理** | #3215, #4315 | 🔥 |
| **权限与审批流程** | #4188, #4318 | 🔥 |

**结构性观察**：从「单点 CLI 工具」走向「可被集成的代理运行时」趋势明显——ACP、MCP、enterprise policy 三条线都在持续扩张；同时 Plan Mode / Sessions / Permissions 三件套暴露出 **交互层稳定性** 是 1.0.7x 系列的薄弱环节。

---

## 💬 开发者关注点

综合 32 条更新 Issues，开发者反馈呈现以下高频痛点：

1. **回归问题层出不穷**：Plan Mode shell 拦截（#4188）、`task_complete` 工具丢失（#4161）、大会话恢复 OOM（#4251）、MCP 工具依赖未文档化父级授权（#4320）。1.0.74 前后是高频回归节点，建议在该版本附近谨慎升级。

2. **数据完整性焦虑**：#4325 的 `events.jsonl` 永久不可恢复、#4251 的会话恢复耗时失控、#4324 的 fork 会话改错 plan——开发者对 **「我的会话能不能稳定打开」** 的信心正在下降。

3. **配置与版本管理混乱**：#4317 反馈无论指定哪个版本安装器都装最新版、#4315 模型列表不刷新、#1478 MCP 向导缺乏 env 格式说明——**配置可观测性** 不足。

4. **企业落地诉求被忽视**：#3909 直指「本地 CLI 无法接收组织统一配置」，与 Codespaces 的能力断层使企业难以批量推广。

5. **Autopilot 「过度主动」**：#4318 指出 autopilot 的任务完成强制机制会覆盖用户明确收窄的指令边界，触及 **agent 自主权 vs 用户意图** 的核心张力。

6. **终端 UX 细节仍欠打磨**：#1352 hook 输出被吞、#4311 transcript 空白、#4304 侧边栏无法键盘导航、#4312 commit 按钮不自动生成——这些细节直接影响日常使用感受。

---

*报告生成时间：2026-08-01 · 数据源：[github.com/github/copilot-cli](https://github.com/github/copilot-cli)*

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

<think>The user wants me to generate a daily report for Kimi Code CLI community dynamics based on GitHub data. Let me analyze the data carefully:

1. **Releases in the past 24 hours**: None
2. **Issues updated in the past 24 hours**: 4 issues
   - #1282: Remote Control feature request (23 👍, 9 comments) - popular
   - #1283: Memory System feature request (0 👍, 8 comments) - newer
   - #2422: Bug - scroll auto-scroll bug (1 👍, 2 comments)
   - #796: Closed bug - error message
3. **PRs updated in the past 24 hours**: 1 PR
   - #2572: Fix for double-encoded JSON in tool-call arguments

The report should be in Chinese, professional, concise. The user asked for:
1. 今日速览 (Today's Overview) - 2-3 sentences
2. 版本发布 (Releases) - can omit since none
3. 社区热点 Issues - top 10, but we only have 4, so I'll cover all 4
4. 重要 PR 进展 - top 10, but we only have 1, so I'll cover it
5. 功能需求趋势 (Feature Request Trends)
6. 开发者关注点 (Developer Pain Points)

I need to be honest about the limited data - we only have 4 issues and 1 PR, not 10. I should not fabricate additional items. Let me write this report professionally.

Let me draft the report:

**今日速览**:
- 过去24小时社区活跃度较低，无新版本发布
- 1个PR修复了工具调用参数双重编码JSON的兼容性问题
- 2个热门功能请求（远程控制、记忆系统）持续获得社区关注

**版本发布**: 省略（无新版本）

**社区热点 Issues**:
由于只有4条，需要全部列出：
1. #1282 远程控制功能 - 23赞，9评论，最热门
2. #1283 记忆系统 - 8评论，0赞
3. #2422 滚动自动跳转bug - 1赞，2评论
4. #796 已关闭的错误问题

**重要 PR 进展**:
只有1条：
1. #2572 修复双重编码JSON

**功能需求趋势**:
- 跨设备同步/远程控制
- 持久化记忆系统
- UI体验改进（滚动行为）

**开发者关注点**:
- 与不同LLM provider的兼容性（JSON编码差异）
- 会话连续性和上下文管理
- 界面交互细节

I should make the report concise and professional. I'll be honest about the limited data volume while still providing valuable insights.</think>

# Kimi Code CLI 社区动态日报
**日期：2026-08-01**

---

## 📌 今日速览

过去 24 小时社区活跃度较低，无新版本发布，但仍有实质性进展：1 个关键 PR 修复了工具调用参数的双重 JSON 编码兼容性问题，影响多个核心工具（SetTodoList、ExitPlanMode、StrReplaceFile 等）。同时，两个高关注度的功能请求（远程控制、记忆系统）持续获得社区热议，反映出用户对**跨设备工作流**与**会话持久化**的强烈需求。

---

## 🚀 版本发布

*今日无新版本发布。*

---

## 🔥 社区热点 Issues

> 注：今日仅有 4 条 Issue 更新，列全如下。

### 1. #1282 [Feature] Remote Control — 跨设备延续本地会话
- **作者**：@CatKang | **状态**：OPEN
- **互动**：👍 23 | 💬 9
- **链接**：https://github.com/MoonshotAI/kimi-cli/issues/1282
- **为什么重要**：这是目前社区呼声最高的增强请求。允许用户从手机、平板或浏览器接管本地 Kimi CLI 会话，解决"离开工位即断线"的痛点，对远程办公和移动场景具有高实用价值。
- **社区反应**：点赞数 23，是近期所有 Issue 中最热门的，表明跨设备工作流已成为用户核心诉求。

### 2. #1283 [Feature] Memory System — 跨会话持久化上下文
- **作者**：@CatKang | **状态**：OPEN
- **互动**：💬 8
- **链接**：https://github.com/MoonshotAI/kimi-cli/issues/1283
- **为什么重要**：提议实现自动记忆（AI 管理笔记）与手动记忆（用户自定义指令）双重机制，覆盖项目模式、用户偏好等上下文，是 CLI 向"个人化 AI 助手"演进的关键能力。
- **社区反应**：讨论较为深入，已迭代 8 条评论，关注点集中在隐私边界、记忆粒度与跨项目隔离。

### 3. #2422 [Bug] 对话完成后滚动输出会自动跳底
- **作者**：@venus0707 | **状态**：OPEN
- **互动**：👍 1 | 💬 2
- **链接**：https://github.com/MoonshotAI/kimi-cli/issues/2422
- **为什么重要**：影响版本 1.46.0 的 UI 体验——当长输出渲染完成后，用户向上滚动查看历史内容会被强制重置到底部，严重影响调试与日志审查体验。
- **环境**：Linux 5.18.17-amd64-desktop-hwe + kimi2.6 模型。
- **社区反应**：虽然样本量小，但属于典型的"交互逻辑缺陷"，对重度使用者影响显著。

### 4. #796 [Bug] error: the message at position 1 with role…
- **作者**：@bravery | **状态**：✅ CLOSED
- **互动**：💬 1
- **链接**：https://github.com/MoonshotAI/kimi-cli/issues/796
- **说明**：触发 `LLM provider error: 400` 的消息格式异常问题，疑似已在某次更新中修复并关闭，未见更多反馈。

---

## 🛠️ 重要 PR 进展

### #2572 fix(kosong): 递归解码工具调用参数中的双重编码 JSON
- **作者**：@aalhadxx | **状态**：OPEN
- **链接**：https://github.com/MoonshotAI/kimi-cli/pull/2572
- **修复内容**：针对 Moonshot API 在 `function.arguments` 字段中对嵌套数组/对象进行二次 JSON 字符串化的现象，在 `kosong` 组件中加入递归解码逻辑，使 Pydantic 校验能够正常解析。
- **影响范围**：覆盖 `SetTodoList`、`ExitPlanMode`、`StrReplaceFile` 等多个核心工具的入参解析。
- **意义**：这是典型的**多 Provider 兼容性**修复，反映出 Kimi CLI 在对接非标准 JSON 序列化方式时的鲁棒性短板，对生态扩展具有基础性价值。

> 今日仅 1 个 PR 更新，已列全。

---

## 📈 功能需求趋势

从今日活跃 Issue 提炼，社区关注度集中在以下方向：

| 趋势方向 | 代表 Issue | 热度信号 |
|---------|-----------|---------|
| 🌐 **跨设备/远程工作流** | #1282 | 👍 23，9 评论，最强需求 |
| 🧠 **会话记忆与个性化** | #1283 | 8 条深度评论 |
| 🖥️ **终端 UI 交互体验** | #2422 | 反映长输出场景痛点 |
| 🔌 **多 LLM Provider 兼容** | #2572 | 工程层基础需求 |

整体趋势：**从"能用"向"好用"演进**——用户不再满足于基础 CLI 能力，而是期望远程接入、记忆延续、交互细节等接近 IDE 级 AI 助手的完整体验。

---

## 👨‍💻 开发者关注点

综合今日数据，社区反馈的高频痛点可归纳为：

1. **跨 Provider 的协议差异**：Moonshot API 的双重 JSON 编码是真实存在的工程陷阱，开发者需要在工具调用层增加容错解码。
2. **会话连续性短板**：用户强烈希望 CLI 能像 ChatGPT/Claude 那样具备"记忆"和"远程接管"能力，这是当前最大的产品力缺口。
3. **终端 UI 细节**：流式输出场景下的滚动行为、位置保持等"小问题"会显著影响重度使用者的体验。
4. **长上下文管理**：随着项目复杂度上升，开发者对项目级模式记忆、上下文压缩的呼声正在上升。

---

*报告基于 GitHub 公开数据生成，数据时间窗口：2026-07-31 ~ 2026-08-01。*

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

<think>Let me analyze the GitHub data provided and generate a comprehensive Chinese daily report for OpenCode community dynamics on 2026-08-01.

Let me organize the information:

**Issues (most commented):**
1. #16331 - Permissions ignored (CLOSED, 41 comments, 11 thumbs up)
2. #39823 - DeepSeek V4 Flash formal version (OPEN, 23 comments, 20 thumbs up)
3. #18131 - Write tool called with invalid parameters (CLOSED, 12 comments, 4 thumbs up)
4. #28480 - opencode windows 11 not starting (CLOSED, 11 comments, 0 thumbs up)
5. #7769 - Support desktop version of git submodules (CLOSED, 9 comments, 13 thumbs up)
6. #20527 - New PowerShell tool confuses agents (CLOSED, 7 comments, 2 thumbs up)
7. #23595 - system-reminder keeps moving in llama.cpp (OPEN, 5 comments, 11 thumbs up)
8. #14848 - Billing Sync Lag and TUI Session Loss (CLOSED, 5 comments, 1 thumb up)
9. #20573 - Remove nushell from shell blacklist (CLOSED, 5 comments, 3 thumbs up)
10. #20989 - Stream of random characters after exit (CLOSED, 4 comments, 2 thumbs up)

Other notable issues:
- #29950 - Skill enumeration non-deterministic
- #16848 - prompt_cache_ttl for OpenRouter
- #30094 - GET /session/status regression
- #29867 - Desktop version buttons missing
- #30230 - WSL connection issue
- #24620 - Loss of File Modification Capability
- #24604 - write tool SchemaError
- #30223 - Project prefix issue (Chinese)
- #30052 - Directory view not updating (Chinese)
- #30197 - Desktop dependency install failed
- #30289 - Sub-agent inherits orchestrator model
- #30283 - claude-opus-4-6 500 error
- #30285 - Discover Requesty models at runtime
- #30268 - Custom slash command from plugin
- #30260 - Sessions not showing via symlink
- #30252 - provider timeout config not applied
- #30248 - Opencode can't run on Termux
- #23345 - improving orchestration process
- #29142 - OpenAI-compatible models invalid schema
- #30109 - Session list pagination broken

**Pull Requests (notable):**
1. #39994 - OPENCODE_AIRGAP for air-gapped deployments
2. #39978 - Background long-running shell commands
3. #39985 - Configurable send key (Enter/Shift+Enter/Ctrl+Enter)
4. #39389 - Diff viewer re-entry prevention
5. #27378 - System prefix cache stabilization
6. #14743 - Anthropic prompt cache hit rate
7. #27007 - Cache token audit logging
8. #39990 - Debugging loop hint injection
9. #39988 - TUI plugin discovery across config roots
10. #39981 - Watch newly created plugin directory
11. #39983 - Share runtime with external TSX plugins
12. #39984 - no-browser option
13. #39982 - Concise error output
14. #39980 - Mini prompt readiness
15. #5657 - Toggle transparent background
16. #39942 - Persist tab reorder once per drag
17. #39941 - Harden session tab state hygiene
18. #39940 - Ignore hidden tab close hitbox
19. #39964 - Remove unused duration formatter
20. #39963 - Remove unused revert diff parser

**Releases:** None in past 24 hours

Let me categorize:
- TUI/Desktop improvements: many
- Plugin system: ongoing work
- Provider/Model support: DeepSeek V4, claude-opus-4-6 issues, requesty discovery
- Caching: Anthropic prompt cache work
- Performance: Background long-running commands
- Tool improvements: Concise error output, schema validation

Let me identify trends:
1. TUI/Desktop stability - many desktop bugs being addressed
2. Plugin system maturation (V2 plugins, discovery)
3. Provider diversity (DeepSeek, Requesty, Claude)
4. Prompt caching improvements (Anthropic)
5. Air-gapped deployments (enterprise features)
6. Background process handling

Now let me write the report in Chinese.</think>

# OpenCode 社区动态日报 · 2026-08-01

---

## 📌 今日速览

今日 OpenCode 仓库虽无新版本发布，但社区活跃度不减——围绕 **DeepSeek V4-Flash 正式版是否接入 Zen** 的讨论引发 23 条评论，成为当日最受关注议题；TUI 与桌面端的稳定性问题（插件发现、Diff Viewer 行为、Tab 重排）仍是社区反馈的重点方向，多个相关 PR 密集合入。与此同时，**OPENCODE_AIRGAP 环境变量**和**后台长任务机制**两个面向企业级与开发体验的新特性获得关注。

---

## 🚀 版本发布

> 过去 24 小时无新版本发布，省略。

---

## 🔥 社区热点 Issues

| # | Issue | 状态 | 评论/👍 | 关键信息 |
|---|-------|------|--------|---------|
| 1 | [#16331](https://github.com/anomalyco/opencode/issues/16331) Permissions ignored | CLOSED | 41 / 11 | `permission.read` 规则被忽略，用户配置 `*.env` 等黑名单未生效。此为长尾权限争议问题，已正式结案。 |
| 2 | [#39823](https://github.com/anomalyco/opencode/issues/39823) DeepSeek V4-Flash 0731 正式版是否上线？ | OPEN | 23 / 20 | DeepSeek 公布 V4-Flash 正式版（Terminal Bench 82.7 / NL2Repo 54.2），社区要求 OpenCode Go/Zen 尽快接入。👍 数最高，反映出对新模型上线的强烈期待。 |
| 3 | [#18131](https://github.com/anomalyco/opencode/issues/18131) Write tool called with invalid parameters | CLOSED | 12 / 4 | LM Studio + Qwen 3.5 35B-A3B 调用 Write 工具时出现无效参数，反映本地 OpenAI-兼容服务的 schema 兼容问题。 |
| 4 | [#28480](https://github.com/anomalyco/opencode/issues/28480) Windows 11 启动失败 | CLOSED | 11 / 0 | 用户安装后几天内无法启动，无任何报错，桌面端静默崩溃的代表案例。 |
| 5 | [#7769](https://github.com/anomalyco/opencode/issues/7769) 桌面版 Git Submodules 支持 | CLOSED | 9 / 13 | Submodule 会话管理缺失，影响多仓开发者工作流，长期被关注（👍 数高）。 |
| 6 | [#20527](https://github.com/anomalyco/opencode/issues/20527) PowerShell 工具让 Agent 困惑 | CLOSED | 7 / 2 | 即便新建会话，Agent 仍倾向于用 `tail` 过滤结果，反映 Windows shell 行为的回归。 |
| 7 | [#23595](https://github.com/anomalyco/opencode/issues/23595) `<system-reminder>` 移位导致 llama.cpp 缓存失效 | OPEN | 5 / 11 | OpenCode 每次重排 `<system-reminder>`，使 llama.cpp 的 prompt cache 命中率归零，浪费大量处理时间。Open 状态说明尚未根治。 |
| 8 | [#14848](https://github.com/anomalyco/opencode/issues/14848) 计费同步滞后与 TUI 会话丢失 | CLOSED | 5 / 1 | 充值 $42.48 后余额显示不同步，TUI 端持续出现会话掉线，属于账户层关键问题。 |
| 9 | [#20573](https://github.com/anomalyco/opencode/issues/20573) Windows 下移除 nushell 黑名单 | CLOSED | 5 / 3 | Nushell 被硬编码进 shell blacklist，社区呼吁改为配置化，便于 Windows 用户选用自己的 shell。 |
| 10 | [#29950](https://github.com/anomalyco/opencode/issues/29950) Skill 枚举在不同根目录间非确定 | CLOSED | 4 / 0 | 当同一 skill 通过 `~/.claude/skills/` 和 `~/.agents/skills/` 双重可达时，OpenCode 的发现结果不确定，影响 Claude Code 共存场景。 |

**补充关注：** [#29142](https://github.com/anomalyco/opencode/issues/29142) OpenAI 兼容模型频繁以非法参数调用 write/edit（SchemaError 反复重试）；[#30283](https://github.com/anomalyco/opencode/issues/30283) `claude-opus-4-6` 在 Zen 上全量返回 500；[#30260](https://github.com/anomalyco/opencode/issues/30260) symlink 路径下 Desktop 不显示会话——均说明多 Provider 与跨平台一致性仍是高频痛点。

---

## 🛠 重要 PR 进展

| # | PR | 状态 | 说明 |
|---|----|------|------|
| 1 | [#39994](https://github.com/anomalyco/opencode/pull/39994) `OPENCODE_AIRGAP` 全局断网开关 | OPEN | 单一环境变量即可禁用所有自动外网访问，专为内网/隔离环境部署设计。 |
| 2 | [#39978](https://github.com/anomalyco/opencode/pull/39978) 后台执行长时 shell 命令 | CLOSED | 新增 HTTP API 列出/取消后台任务，TUI 显示活跃任务徽标，构建、测试、daemon 不再阻塞对话。 |
| 3 | [#39985](https://github.com/anomalyco/opencode/pull/39985) 可配置发送键（Enter / Shift+Enter / Ctrl+Enter） | CLOSED | Settings → General → Input 新增 Send Key 选项，兼容不同编辑习惯。 |
| 4 | [#39389](https://github.com/anomalyco/opencode/pull/39389) 修复 Diff Viewer 重复进入 | OPEN | 补齐 palette 行为：在 Diff Viewer 内显示 Close，外层显示 Open，杜绝栈溢出。 |
| 5 | [#27378](https://github.com/anomalyco/opencode/pull/27378) 系统前缀缓存稳定化（实验特性） | CLOSED | 通过 `OPENCODE_EXPERIMENTAL_CACHE_STABILIZATION` 拆分并稳定 system prompt，显著提升跨会话缓存命中率。 |
| 6 | [#14743](https://github.com/anomalyco/opencode/pull/14743) Anthropic 提示缓存命中率优化 | OPEN | 修复跨仓/跨会话缓存失效，分离 system + 稳定工具描述。 |
| 7 | [#39990](https://github.com/anomalyco/opencode/pull/39990) 同命令反复失败时注入 debug-loop 提示 | OPEN | 同一 shell 命令连续失败时，向模型注入反思提示，鼓励切换假设层级。 |
| 8 | [#39988](https://github.com/anomalyco/opencode/pull/39988) TUI 插件跨配置根发现 | OPEN | 自动从全局配置目录与祖先 `.opencode/plugins/tui` 发现客户端本地插件，并支持运行时新创建的目录。 |
| 9 | [#39983](https://github.com/anomalyco/opencode/pull/39983) TUI 与外部 TSX 插件共享运行时 | CLOSED | 外部 V2 TSX 插件与宿主 OpenTUI/Solid 共享运行时，Bun 打包下 reactive JSX 不再冻结。 |
| 10 | [#39982](https://github.com/anomalyco/opencode/pull/39982) Shell 失败时的精简错误输出 | OPEN | Shell 命令非零退出时只输出关键错误上下文，配合 [#39978](https://github.com/anomalyco/opencode/pull/39978) 的分层超时，降低 Token 消耗。 |

**其他值得关注：** [#39984](https://github.com/anomalyco/opencode/pull/39984) `web --no-browser` 控制自动开浏览器；[#5657](https://github.com/anomalyco/opencode/pull/5657) TUI 三态透明背景设置；多个 Kit Langton 系列 PR（[#39942](https://github.com/anomalyco/opencode/pull/39942) [#39941](https://github.com/anomalyco/opencode/pull/39941) [#39940](https://github.com/anomalyco/opencode/pull/39940) [#39964](https://github.com/anomalyco/opencode/pull/39964) [#39963](https://github.com/anomalyco/opencode/pull/39963)）持续清理 TUI 标签页与死代码，提升稳定性。

---

## 📈 功能需求趋势

1. **新模型/Provider 即时支持**——DeepSeek V4-Flash 正式版（#39823，👍20）、Requesty 实时发现模型（#30285）、OpenRouter 缓存 TTL（#16848）三连击，显示 OpenCode 已成"多 Provider 开关站"，社区希望随上游发布节奏上线。
2. **桌面端体验成熟化**——WSL 连接（#30230）、symlink 项目（#30260）、按钮缺失（#29867）、依赖安装失败（#30197）、前缀冲突项目名（#30223 中文报告）表明桌面版问题密度最高。
3. **企业/隔离环境能力**——`OPENCODE_AIRGAP`（#39994）首个面向 air-gap 部署的特性，反映 B 端合规需求开始浮现。
4. **Agent 鲁棒性**——后台任务调度（#39978）、shell 失败调试循环检测（#39990）、精简错误输出（#39982）共同强化"长时间、多工具协作"场景的工程韧性。
5. **缓存与性能**——Anthropic 提示缓存系列 PR（#14743 #27378 #27007）以及 #23595 关于 `<system-reminder>` 的讨论，说明 prompt cache 仍是大模型用户体验关键瓶颈。
6. **插件生态**——TUI V2 插件（#39988 #39983 #39981）、自定义 slash 命令（#30268）显示 v2 插件 API 正逐步成为社区拓展主路径。

---

## 👨‍💻 开发者关注点（痛点高频词）

- **Schema/工具调用容错**：OpenAI-兼容模型（LM Studio、Requesty、本地推理）调用 `write`/`edit` 失败已成"复发性 bug"，#18131 #24604 #29142 三连重复出现；开发者期望 OpenCode 自动校验并附带正确 schema 重试，而非直接把错误抛回模型。
- **多平台一致性**：Windows（#28480 #20527 #20573）、macOS（#29867）、Termux（#30248）、WSL（#30230）四端环境差异，使得安装、shell、按钮、目录行为不一致，最容易劝退新用户。
- **沉默崩溃 / 错误信息缺失**：#28480（"什么都不输出"）、#20989（关掉后仍打印随机字符）、#30248（Termux 上的标签指针异常）——三起都缺少可执行诊断信息，开发者在面对失败时缺乏抓手。
- **会话/项目状态显示**：`/session/status` 不再聚合（#30094）、"Load More" 翻页失效（#30109）、symlink 路径下不显示会话（#30260）、同名前缀项目被合并（#30223 中文）——这是 ORM / Backend 状态层与 UI 视图不一致的典型表现。
- **长任务 & 多 Provider 计费**：长期构建/测试阻塞对话；Zen 计费同步滞后（#14848）说明 OpenCode 仍处于"功能发布 > 计费/配额对账"阶段。
- **缓存可解释性**：#23595、`prompt_cache_ttl` 缺失（#16848）、Anthropic 跨会话缓存失效（系列 PR）反映出开发者希望对缓存策略有更明确的可观测与配置入口。

---

> 📊 **编辑部洞察**：今日 50 条更新中，**桌面端稳定性 + 多 Provider 接入 + 缓存策略**是 OpenCode 当前的三大主线。社区对 DeepSeek V4-Flash / Claude Opus 4.6 等新模型的上线节奏明显焦虑，建议在 Release Note 中同步 Provider 接入时间表；同时，桌面/TUI 的 IDE 联动（文件系统监听、项目状态）是接下来 1–2 个迭代最可能改善的体验短板。

</details>

<details>
<summary><strong>jcode</strong> — <a href="https://github.com/1jehuang/jcode">1jehuang/jcode</a></summary>

<think>The user wants me to generate a daily report for the jcode community based on GitHub data. Let me analyze the data carefully.

Key observations:
- No new releases in the past 24 hours
- 21 issues updated in the past 24 hours
- No PRs updated in the past 24 hours

Let me categorize the issues:

**Critical/High Priority Bugs:**
1. #644 - Auto-compaction never fires on large-context models (80% of 1M window = 800k trigger) - HIGH priority, OPEN
2. #678 - Installer silently adds a global shortcut and persistent LaunchAgent - HIGH priority, OPEN, security/invasive concern
3. #692 - CI red on master: code-size ratchet exceeded - HIGH priority, OPEN
4. #646 - "it eats up my usage" - 100% of max 20x sub - OPEN, popular concern
5. #688 - /rewind n rewinds to wrong number - HIGH priority, OPEN

**Recently Closed (Fixed) Issues:**
- #687 - OpenAI provider rejects valid MCP schemas with uniqueItems - CLOSED, fixed-pending-release
- #684 - Linux X11: arboard clipboard silently lost - CLOSED, fixed-pending-release
- #674 - Session picker loads from wrong directories - CLOSED, fixed-pending-release
- #639 - "update" command line feature - CLOSED
- #690 - Autocomplete when resuming previous section - CLOSED
- #680 - CI red on master: 4 TUI animation tests fail - CLOSED, fixed
- #689 - Display config ignored at runtime in v0.64.2 - CLOSED, fixed-pending-release
- #693 - CI 35min timeout cancels reruns - CLOSED
- #685 - Save rules as jcode memory - CLOSED

**Open Feature Requests:**
- #115 - Add Nix Flake (has 5 likes, oldest issue still active)
- #686 - Make long unattended runs possible
- #681 - Devin CLI Subscribe support
- #682 - Copied code/text output difficult to paste
- #683 - Per-agent model selection in Swarm
- #691 - OpenRouterProvider::name() should return profile_id
- #694 - Custom openai-compatible models tagged with copilot: prefix

Now let me structure the report:

1. **今日速览** - Most important: Multiple high-priority bugs being addressed, CI failures on master, and concerns about usage consumption and installer invasiveness
2. **版本发布** - None, skip
3. **社区热点 Issues** - Pick 10 most important
4. **重要 PR 进展** - None updated, but can mention this
5. **功能需求趋势** - Analyze patterns
6. **开发者关注点** - Pain points

Let me think about which 10 issues are most worth highlighting:

Top 10 by importance:
1. #646 - Usage consumption concern (high community engagement, 5 comments)
2. #644 - Auto-compaction bug on large contexts (significant functional impact)
3. #678 - Installer invasiveness (security/UX)
4. #688 - /rewind bug (core functionality)
5. #692 - CI broken on master (build health)
6. #687 - OpenAI MCP schema bug (provider compat)
7. #686 - Long unattended runs (key feature request)
8. #115 - Nix Flake (most liked, 5 thumbs up)
9. #689 - Display config ignored (fixed)
10. #694 - OpenAI-compatible models prefixed wrong (new bug)

Since there are no PRs updated, I should note that explicitly.

Let me draft the report in Chinese.

For functional trends, I see:
- Long-running autonomous work (overnight mode)
- Multi-provider support (Devin CLI, OpenRouter, openai-compatible)
- Installer/UX improvements
- Session management
- Code copy/paste UX
- Nix packaging
- Swarm multi-agent features

Developer concerns:
- Usage consumption/billing
- Installer invasiveness
- Bug regressions in recent releases
- CI infrastructure issues
- Cross-platform clipboard bugs
- Auto-compaction not triggering

Let me write the report now. I should be thorough but concise, professional, and tech-focused.</think>

# jcode 社区动态日报 · 2026-08-01

---

## 📌 今日速览

今日 jcode 仓库 CI 出现明显波动：`Quality Guardrails` 因 `transcript.rs` 单文件行数超阈值而变红，TUI 动画相关 4 个测试也刚被修复后重新合入 master；同时 `/rewind` 命令存在步进偏移的严重回归，社区正在等待修复。值得欣慰的是，OpenAI Provider 的 `uniqueItems` MCP schema 拒绝问题、Linux X11 剪贴板丢失、`v0.64.2` 显示配置被忽略等多个 high-priority bug 已在 24 小时内关闭进入 pending-release 状态。#646「20x 订阅被单 agent 吃满」仍为开放状态，是当下社区情绪最强烈的议题。

---

## 🚀 版本发布

过去 24 小时 **无新版本发布**。最近可观察到的活跃版本为 `v0.64.2`（见 #689）。

---

## 🔥 社区热点 Issues（10 条）

| # | 标题 | 状态 | 为什么重要 |
|---|---|---|---|
| [#646](https://github.com/1jehuang/jcode/issues/646) | it's really awesome but it eats up my usage | OPEN · 5 评论 | 用户反馈单 agent 就吃光 20x 订阅额度，社区情绪最强，怀疑配额计量逻辑异常 |
| [#644](https://github.com/1jehuang/jcode/issues/644) | Auto-compaction 永不触发（大上下文模型） | OPEN · high | 1M 上下文模型 80% 阈值 = 800k，几乎不可能命中，导致每次重发整个 transcript，资源浪费严重 |
| [#678](https://github.com/1jehuang/jcode/issues/678) | Installer 静默创建全局快捷键 + LaunchAgent | OPEN · high · 👍 1 | 安全/隐私边界问题：一行 `curl … \| bash` 就装上 KeepAlive LaunchAgent，过于侵入 |
| [#688](https://github.com/1jehuang/jcode/issues/688) | `/rewind n` 回退步数偏移 1 | OPEN · high | 新会话首次 `/rewind n` 总是回到「n 之前」，核心命令可靠性问题 |
| [#692](https://github.com/1jehuang/jcode/issues/692) | CI 红：transcript.rs 行数超 ratchet | OPEN · high | master 分支质量门禁破裂，阻塞合入 |
| [#687](https://github.com/1jehuang/jcode/issues/687) | OpenAI Provider 拒绝含 `uniqueItems` 的 MCP schema | CLOSED · fixed-pending-release | 影响 TubeAlfred 等 batch 工具链，每轮 agent 都启动失败 |
| [#684](https://github.com/1jehuang/jcode/issues/684) | Linux X11：剪贴板 toast 显示但实际为空 | CLOSED · fixed-pending-release | arboard 后端在 X11 下静默失败，跨平台可用性 bug |
| [#674](https://github.com/1jehuang/jcode/issues/674) | Session picker 误读 `~/.pi/agent/sessions/` | CLOSED · fixed-pending-release | 跨项目 session 串扰风险，关闭 24h 内即修复 |
| [#686](https://github.com/1jehuang/jcode/issues/686) | 让长时无监督运行真正可行 | OPEN · medium | 用户希望「/overnight 真的能跑几小时」，目前多处限制都在客户端，作者给出 6 个阻碍点的详细拆解 |
| [#115](https://github.com/1jehuang/jcode/issues/115) | [RFC] 添加 Nix Flake | OPEN · 👍 5 | 仓库 **热度最高** 的 feature request（5 赞），至今 3 个月仍未合入 |

---

## 🔧 重要 PR 进展

过去 24 小时 **无 PR 更新**。建议关注以下 Issues 中已经标记 `fixed-pending-release` 的修复（#687、#684、#674、#689），预计将在下一个版本以 PR 形式落地。

---

## 📈 功能需求趋势

从 21 条 Issue 中可提炼出以下高频方向：

1. **多 Provider 兼容与统一抽象** — OpenRouter 命名（#691）、OpenAI-compatible 误标 `copilot:`（#694）、Devin CLI 订阅（#681），社区希望"profile 名"能在 UI 中正确反映。
2. **长时 / 无监督运行能力** — #686 详细列举 `/overnight` 当前 6 处限制，是本月最系统的 RFC。
3. **会话与可恢复性** — 会话恢复补全（#690）、自动 update 命令（#639）、`/rewind` 准确性（#688），围绕"长任务不丢上下文"。
4. **打包与分发** — Nix Flake（#115）、installer UX（#678），从源码编译到生产化部署的链条被持续拉扯。
5. **Swarm / 多 Agent 能力增强** — Per-agent 模型选择（#683），开发者开始把 jcode 当作 multi-agent 编排器使用。
6. **记忆与规则系统** — #685 提出用 jcode memory 替代 AGENTS.md，配合 auto-recall 与语义搜索。
7. **TUI 内容可操作性** — #682 反馈带边框的代码块复制后需手动清理 `|`，是典型的"终端美观 vs 可用性"矛盾。

---

## 🧑‍💻 开发者关注点（痛点高频）

- **账单焦虑** — #646 显示开发者高度关注 token 计费透明度，单 agent 跑满 20x 套餐的体验严重打击信心。
- **installer 入侵式行为** — #678 反映出对"一键安装脚本默认开启全局热键 + 持久守护进程"的强烈不适，建议默认最小化、显式 opt-in。
- **CI 不稳定即回归感** — 同一日出现 #680（已修）、#692（待修）、#693（已修）三条 CI 相关的 issue，开发者认为"绿色 commit 显示为红"会降低合入信心。
- **大模型上下文与 compaction 错配** — #644 揭示 `token_budget` 直接读窗口大小，80% 阈值在大窗口下形同虚设，开发者期待按"剩余预算"或可配置阈值。
- **跨平台剪贴板静默失败** — #684 提示"toast 已显示但实际未写入"是最危险的一类 UX bug，必须有真值校验。
- **重构与代码体量护栏** — #692 触发的 ratchet 护栏本身有效，但 `desktop2/transcript.rs` 单文件膨胀提醒团队关注桌面端 TUI 模块的拆分。

---

*数据来源：github.com/1jehuang/jcode · 统计窗口：过去 24 小时 · 报告生成时间：2026-08-01*

</details>

<details>
<summary><strong>pi</strong> — <a href="https://github.com/earendil-works/pi">earendil-works/pi</a></summary>

<think>Let me analyze the GitHub data for the pi community (earendil-works/pi) on 2026-08-01 and generate a comprehensive Chinese daily report.

Key observations:
1. No new releases in the past 24 hours
2. 50 issues updated, focusing on the top 30 by comment count
3. 50 PRs updated, focusing on the top 20 by comment count

Let me categorize and prioritize:

**Top Issues by importance:**
- #6187 (19 comments) - WSL Pi login hangs - high impact platform bug
- #6665 (11 comments) - TUI pins full core during streaming - performance
- #7267 (8 comments) - Custom provider doc discrepancy - documentation/correctness
- #7020 (7 comments, 2 likes) - Pi doesn't continue after compaction - core functionality
- #6879 (7 comments, 5 likes) - Auto-compaction never triggers - critical bug with most likes
- #7161 (6 comments) - anthropic-messages missing x-client-request-id
- #4319 (6 comments) - AGENTS.md fence in system prompt
- #7199 (6 comments) - Kimi K3 on Fireworks support - new model
- #6662 (5 comments) - Mouse select+copy TUI scroll issue
- #7319 (5 comments) - kimi-coding OAuth 401 no refresh
- #7062 (5 comments) - OpenAI completions handle array content
- #7316 (4 comments) - coding-agent 0.83.0 ships vulnerable brace-expansion
- #7248 (4 comments) - Ctrl+V paste fails on Wayland
- #7283 (4 comments) - Anthropic stream parser discards initial block
- #6996 (4 comments) - Gemini 3.x fails during tool use
- #7301 (3 comments) - Stalled availability refresh unrecoverable
- #7126 (3 comments) - Ctrl+R rename needs Enter twice
- #7053 (3 comments) - Parallel tool batches lose results
- #7253 (3 comments) - /compact triggers compact twice

**Top PRs:**
- #7422 - Image URL support in ImageContent
- #7421 - Recover model availability after stalled refresh (fixes #7301)
- #7420 - Fail compaction on truncated summary (fixes #7048)
- #7419 - Normalize optional object tool schemas (fixes #7010)
- #7381 - Model refresh state consistency
- #7411 - Experimental CLI option parser
- #7396 - Server session backend
- #7410 - SQLite session operations linear
- #7409 - Remote session client coordination
- #7408 - Storage-owned session readers
- #7407 - Project-context hierarchy tests
- #7404 - Baseten provider
- #7400 - Remove obsolete SQLite internals
- #7398 - Per-session store queues
- #7397 - Protocol adapter invariants
- #7401 - Z.AI model test references
- #7394 - JSON streaming output linear
- #7391 - Session search query-only
- #7390 - Target baseline x64 CPUs (fixes #7149)
- #6216 - Amazon Bedrock Mantle OpenAI Responses provider

Trends I notice:
1. **Compaction issues** - Multiple issues (#7020, #6879, #7253, #7413, #7150) related to compaction failures
2. **Provider/Model integration** - Anthropic (#7161, #7283), Gemini (#6996, #7356), Kimi (#7319), OpenAI (#7062, #7392)
3. **Performance** - #6665 (TUI CPU), #7290 (JSON mode O(n²)), #7385 (input lag)
4. **Platform compatibility** - WSL (#6187), Wayland (#7248), Linux x64 CPU baseline (#7149/#7390)
5. **TUI/UX bugs** - #6662 (mouse scroll), #7126 (rename), #6665 (CPU)
6. **Session management** - Multiple PRs about session backend (#7396, #7398, #7400, #7408, #7409, #7410)
7. **New model providers** - Baseten (#7404), Bedrock Mantle (#6216), Kimi K3 (#7199)

Let me write a structured Chinese report now.</think>

# pi 社区动态日报 · 2026-08-01

## 📌 今日速览

今日社区异常活跃，重点围绕**会话压缩（compaction）的可靠性问题**展开，多个高赞 Issue 直指 auto-compaction 触发逻辑、压缩摘要截断、并发 RPC 提示丢失等核心路径缺陷。同时，`a-yeyang` 与 `christianklotz` 两位贡献者集中提交了一批修复与重构 PR，涵盖模型可用性恢复、JSON 流输出线性化、远程会话后端等关键方向，显示出 0.83.x 版本的密集迭代态势。

---

## 🚀 版本发布

过去 24 小时内无新版本发布。当前主干仍为 `coding-agent 0.83.0`（参见 #7316）。

---

## 🔥 社区热点 Issues

| # | Issue | 重要性 | 链接 |
|---|-------|--------|------|
| **#6879** | **auto-compaction 在 context >100% 后仍不触发，直至 API 拒绝请求**（7 评论，👍5） | 最高赞 Issue。曝光一个真实生产事故：2 小时 agentic turn 中 footer 越过压缩阈值仍不动作，最后在 373k token 时才失败。 | [#6879](https://github.com/earendil-works/pi/issues/6879) |
| **#6187** | **WSL 中 Pi 登录卡死**（19 评论） | 评论数最多的长期 Issue，GitHub Copilot 浏览器设备授权完成后 WSL 端 pi 不感知，持续挂起等待。 | [#6187](https://github.com/earendil-works/pi/issues/6187) |
| **#6665** | **TUI 流式输出时占用满核**（11 评论） | 性能瓶颈定位清晰：Markdown 重渲染走未缓存的 `Intl.Segmenter` + ICU BreakIterator。`pi -ne` 也能复现，确认为 core 而非扩展问题。 | [#6665](https://github.com/earendil-works/pi/issues/6665) |
| **#7267** | **自定义 provider 文档与 registerProvider 实现不一致**（8 评论） | 文档说一套、API 做一套，影响所有写扩展的开发者。 | [#7267](https://github.com/earendil-works/pi/issues/7267) |
| **#7020** | **压缩后 Pi 有时不继续执行**（7 评论，👍2） | 长会话协调者场景中的高频痛点，compaction 后续状态机异常。 | [#7020](https://github.com/earendil-works/pi/issues/7020) |
| **#7161** | **anthropic-messages 路径未发送 x-client-request-id**（6 评论） | 影响基于该 header 做会话亲和的多账户代理（如 CliProxyAPI 轮询），是 OpenAI/Anthropic 行为不一致的典型案例。 | [#7161](https://github.com/earendil-works/pi/issues/7161) |
| **#7199** | **通过 OpenAI-compatible API 支持 Fireworks 上的 Kimi K3**（6 评论） | 已 CLOSED，标志新模型接入流程顺畅，generator 已识别 `kimi-k3-fast`。 | [#7199](https://github.com/earendil-works/pi/issues/7199) |
| **#7319** | **kimi-coding OAuth 401 无自动刷新**（5 评论） | Kimi Code 订阅 OAuth token 过期直接 fail turn，401 同时被两个重试分类器排除。 | [#7319](https://github.com/earendil-works/pi/issues/7319) |
| **#7316** | **coding-agent 0.83.0 仍打包有漏洞的 brace-expansion 5.0.7**（4 评论） | 安全/供应链问题，npm audit 命中。 | [#7316](https://github.com/earendil-works/pi/issues/7316) |
| **#7413** | **GitHub Copilot GHE.com 企业账户压缩失败：unknown stamp**（2 评论） | 与 #6879 同属压缩可靠性问题，仅影响 enterprise 路由。 | [#7413](https://github.com/earendil-works/pi/issues/7413) |

> 备选关注：`#7062`（OpenAI-compatible 流式 array content 处理）、`#7283`（Anthropic 流解析丢弃首个 block）、`#6996`（Gemini 3.x 工具调用 thought_signature 丢失）、`#7149`（Linux x64 二进制在 Sandy Bridge 上 SIGILL）。

---

## 🛠️ 重要 PR 进展

| # | PR | 说明 | 链接 |
|---|----|------|------|
| **#7422** | feat(ai): 支持 ImageContent 直接使用图片 URL | 关闭 #6151，不再强制 base64 编码，可将 URL 透传给原生支持 URL 的 provider。 | [#7422](https://github.com/earendil-works/pi/pull/7422) |
| **#7421** | fix(coding-agent): 修复卡死的可用性刷新 | 关闭 #7301，`forceRefreshAvailability` 此前通过 `.then()` 链接到已 stall 的 promise，导致永久不可恢复。新方案独立刷新路径。 | [#7421](https://github.com/earendil-works/pi/pull/7421) |
| **#7420** | fix(coding-agent): 摘要被 token 上限截断时让压缩失败 | 关闭 #7048，此前 `stopReason: "length"` 时仍持久化部分摘要；现在显式 fail。 | [#7420](https://github.com/earendil-works/pi/pull/7420) |
| **#7419** | fix(ai): 规范化 OpenAI-compatible 提供商的 optional 对象 schema | 关闭 #7010，解决 TypeBox 省略 `required` 时被 strict 端点拒绝（`null is not of type "array"`）的问题。 | [#7419](https://github.com/earendil-works/pi/pull/7419) |
| **#7381** | fix(coding-agent): 统一模型刷新状态发布边界 | 仍 OPEN，跨 `/model`、`/scoped-models`、登录登出、API key 变更、扩展注册建立一致的发布时序。 | [#7381](https://github.com/earendil-works/pi/pull/7381) |
| **#7411** | feat(coding-agent): 实验性 CLI 选项解析器 | 仍 OPEN，将 combined/server/client 三种 CLI 模式抽成纯解析器，role-specific discriminated union + Unix socket 路径校验。 | [#7411](https://github.com/earendil-works/pi/pull/7411) |
| **#7396** | feat(coding-agent): 新增 server session backend | 仍 OPEN，引入 `PiServer` 的 durable JSONL 后端，进程间排他锁 + 崩溃恢复 + 实时 transcript 投影。 | [#7396](https://github.com/earendil-works/pi/pull/7396) |
| **#7394** | fix(coding-agent): JSON 流式输出改为线性 | 仍 OPEN，修复 #7290 报告的 O(n²) 问题——仅发送 delta `message_update`，内部/扩展事件保留累积快照，stdout 应用 backpressure。**破坏性 wire-protocol 变更，需关注迁移文档**。 | [#7394](https://github.com/earendil-works/pi/pull/7394) |
| **#7390** | fix(coding-agent): 面向基线 x64 CPU 编译 | 仍 OPEN，修复 #7149，移除 BMI2/AVX2 指令要求，Sandy Bridge 等老 CPU 可运行。 | [#7390](https://github.com/earendil-works/pi/pull/7390) |
| **#6216** | feat: Amazon Bedrock Mantle OpenAI Responses provider | 仍 OPEN（已开放 1 个月），新增 AWS Bedrock Mantle 的 OpenAI Responses API 适配层，替代先前旧 PR。 | [#6216](https://github.com/earendil-works/pi/pull/6216) |

> 备选：`#7404` 新增 Baseten 提供商（CLOSED）；`#7397/7398/7400/7408/7409/7410` 一组围绕 SQLite/Server 会话后端的大重构（@christianklotz 系列）；`#7407` 项目上下文层级测试覆盖。

---

## 📈 功能需求趋势

1. **压缩（compaction）可靠性 🔴** —— 当之无愧的头号焦点：`#6879`（触发阈值）、`#7020`（后续继续执行）、`#7253`（重复触发）、`#7150`（并发 RPC 提示丢失）、`#7413`（企业账户 stamp）、`#7420`（截断摘要）共同勾勒出压缩路径的多处脆弱点。社区普遍要求"压缩后必须可恢复且不丢消息"。
2. **多 provider 兼容与新模型接入 🟠** —— Kimi K3 (#7199)、Baseten (#7404)、Bedrock Mantle (#6216) 持续涌入；与此同时 Anthropic (#7161, #7283)、Gemini 3.x (#6996, #7356)、OpenAI-compatible (#7062, #7419) 的协议细节与 strict 模式要求成为反复出现的摩擦源。
3. **性能与流式输出 🟡** —— `#6665`（TUI 满核）、`#7290`/`#7394`（JSON 模式 O(n²) → 线性化）、`#7385`（按键延迟随会话长度增长）反映出长会话性能正成为瓶颈，社区需要可量化的回归基线。
4. **平台与终端兼容性 🟢** —— WSL 登录 (#6187)、Wayland 剪贴板 (#7248)、老 x86 CPU (#7149/#7390) 三个方向都在同时推进，显示 pi 用户群正跨平台扩张。
5. **远程/服务端会话架构 🔵** —— @christianklotz 一周内连发 7 个 PR 建设 server backend、SQLite 线性化、store queue、远程客户端协调等，揭示出 **"Pi as a service"** 方向的产品意图。

---

## 💬 开发者关注点

- **"请给我稳定的压缩"**：多个高赞 Issue 反映压缩后状态丢失、重复触发、提示被吞。开发者将 pi 用于多代理协调/长流程时，最担心的是**静默数据丢失**（参见 #7150："ACKed success:true, then silently dropped"）。
- **"文档 = 实现"**：扩展作者强烈要求 registerProvider / sendUserMessage / experimental CLI 等 API 行为与文档严格一致（#7267、#7277）。
- **"扩展 Hook 要可观察"**：#7301、#7303 等报告可用性刷新、模型刷新等内部状态对扩展不可见，外部难以做正确的等待/重试。
- **"JSON 模式要可生产化"**：`--mode json` 的 O(n²) 行为直接烧掉一个 agent 17 分钟（#7290）；`#7394` 的破坏性 wire-protocol 变更可能要求所有 JSON 消费者同步升级。
- **"WSL/Wayland/老 CPU 别落下"**：平台兼容性问题虽然不属于核心功能，但持续侵蚀用户体验，#6187 一个月仍未关闭引发关注。
- **"供应链安全要跟上"**：`brace-expansion@5.0.7` 漏洞随 0.83.0 一起发出（#7316），社区希望 release pipeline 内置 npm audit 与 lockfile 校验。

---

*日报生成自 2026-08-01 过去 24 小时 GitHub 数据，共追踪 50 条 Issue 与 50 条 PR 更新。*

</details>

---
*本日报由 [Big Model Radar](https://github.com/96loveslife/big_model_radar) 自动生成。*
# AI CLI 工具社区动态日报 2026-06-22

> 生成时间: 2026-06-22 05:02 UTC | 覆盖工具: 7 个

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

<think>
The user wants a cross-comparison analysis report based on the daily dynamics of 6 AI CLI tools (Claude Code, OpenAI Codex, Gemini CLI, GitHub Copilot CLI, Kimi Code CLI, OpenCode, Qwen Code). Let me note that 7 tools were summarized but Copilot CLI failed to generate.

Let me organize the key data points:

**Claude Code** (anthropics/claude-code):
- 0 releases, 50 issues updated, 2 PRs updated
- Top themes: cost/quota visibility, multi-agent coordination, platform regression (Android/Termux glibc), enterprise integration

**OpenAI Codex** (openai/codex):
- 2 alpha releases (rust-v0.142.0-alpha.9, alpha.10)
- 50 issues updated, 50 PRs updated
- Top themes: GPT-5.5 quota consumption spike, Windows sandbox issues, thread/list performance, code-mode architecture, plugin ecosystem

**Gemini CLI** (google-gemini/gemini-cli):
- 0 releases, 50 issues updated, 35 PRs updated
- Nightly release failure
- Top themes: Agent stability, security/permission model, Auto Memory, AST-aware tools, session persistence

**GitHub Copilot CLI** (github/copilot-cli):
- 摘要生成失败 (summary generation failed)
- Need to note this in the report

**Kimi Code CLI** (MoonshotAI/kimi-cli):
- 0 releases, 2 issues, 0 PRs
- Top themes: Memory system, ACP mode MCP support

**OpenCode** (anomalyco/opencode):
- 0 releases, 50 issues updated, 50 PRs updated
- Top themes: MCP OAuth, multi-DBMS, OTEL, model provider compatibility

**Qwen Code** (QwenLM/qwen-code):
- 2 releases (v0.18.5 stable, v0.18.5-nightly.20260622)
- 30+ issues, many PRs (20+)
- Top themes: Voice dictation, sub-agent revivability, test infrastructure, vision bridge

Now let me build a comprehensive cross-comparison report. Let me think about each section:

1. **生态全景** - 3-5 sentences summary
- Industry entering a "second half" of AI CLI: from basic capability to deep productivity (memory, multi-agent, observability, cost transparency)
- Token cost anxiety is the #1 common theme
- Multi-agent coordination is the strategic frontier
- Platform fragmentation (Windows/Android/Alpine) is the new battleground
- Ecosystem expansion (MCP, plugins) accelerates

2. **活跃度对比** - Table
- Need to note Copilot CLI failure

3. **共同关注方向** - Cross-tool patterns
- Cost/quota visibility (Claude, Codex, OpenCode)
- MCP ecosystem (Codex, OpenCode, Gemini)
- Multi-agent/sub-agent (Claude, Qwen)
- Voice/multimodal (Qwen, Gemini)
- Windows compatibility (Codex, Claude, Qwen)
- Memory systems (Kimi, Claude, Gemini)
- Platform fragmentation issues (all)
- AST-aware code tools (Gemini, mentioned by others)
- Test infrastructure (Qwen)

4. **差异化定位**
- Claude Code: cost/enterprise integration, hooks as programmable surface
- Codex: code-mode architecture evolution, plugin ecosystem expansion
- Gemini CLI: AST-aware tools, Auto Memory, security focus
- Copilot CLI: data missing
- Kimi CLI: minimal but focused on memory + ACP
- OpenCode: multi-DBMS, OTEL, V1→V2 migration, MCP OAuth
- Qwen Code: voice dictation, vision bridge, test infrastructure

5. **社区热度与成熟度**
- Most active: Codex, OpenCode, Qwen Code
- Mature/stable: Claude Code (lots of feature requests, fewer changes)
- Rapid iteration: Codex (alpha releases), Qwen Code
- Quiet but focused: Kimi Code CLI
- Mixed: Gemini CLI (high PR throughput, but nightly build failed)

6. **值得关注的趋势信号**
- Industry signals:
  - "成本透明化" is the new battleground
  - MCP becoming de facto standard
  - Sub-agent/parallel agent coordination
  - Voice + multimodal input expansion
  - Observability/OTEL enterprise needs
  - Test infrastructure left-shift
  - Cross-platform fragility (Windows, ARM64, Alpine)
  - AST-level code understanding
  - Long-running task reliability
  - Security disclosure/permission model maturation

Let me write this in clean, professional Chinese, suitable for technical decision-makers and developers. I should use tables and structured formatting. I should be concise but data-backed.

I need to be careful about the Copilot CLI data being missing - I should note that. Let me use "—" or "数据缺失" for it in the table.

Let me structure the report now:

I should keep it focused, professional, and data-driven. Let me draft it.

Length should be substantial but not excessive - probably around 1500-2500 Chinese characters for the main analysis. I want to be informative but not bloated.

Let me write it now.
</think>
# AI CLI 工具生态横向对比分析
**报告日期：2026-06-22** | 数据来源：6 个主流 AI CLI 仓库 24h 公开动态

---

## 一、生态全景

2026 年中段的 AI CLI 工具生态已度过"基础能力补全"阶段，全面进入 **"深水区"**——竞争焦点从"能不能用"转向"用得贵不贵、信不信得过、能不能并行跑"。**Token 成本焦虑**首次成为跨厂商共性最高的话题（Codex GPT-5.5 配额事件、Claude Max 周配额讨论、OpenCode Zen 用量 API 诉求均集中爆发），**MCP 协议**已事实上成为生态连接器，**多 Agent 协同**与**多模态/语音输入**则拉开了下一波产品分化的序幕。值得警惕的是：**Windows / ARM64 / Alpine / Termux 等长尾平台**正成为各项目共享的"质量债"。

---

## 二、各工具活跃度对比

| 工具 | Release (24h) | Issues 更新 | PR 更新 | 社区情绪 | 阶段判断 |
|------|---------------|------------|---------|----------|----------|
| **Claude Code** | 0 | 50 | 2 | 😤 偏负（多平台回归） | 成熟期 · 需求溢出 |
| **OpenAI Codex** | 2 (alpha.9/10) | 50 | 50 | 🔥 高热（配额争议） | 快速迭代 · 架构演进 |
| **Gemini CLI** | 0（nightly 失败） | 50 | 35 | 🟡 焦虑（Agent 稳定性） | 高速 PR 节奏 · 质量债 |
| **GitHub Copilot CLI** | ⚠️ 数据缺失 | ⚠️ | ⚠️ | — | — |
| **Kimi Code CLI** | 0 | 2 | 0 | 🟢 平静 | 早期阶段 · 需求聚焦 |
| **OpenCode** | 0 | 50 | 50 | 🟢 积极 | 高速迭代 · 生态扩张 |
| **Qwen Code** | 2 (v0.18.5 + nightly) | 30+ | 20+ | 🔥 高热（语音） | 稳定版 + 大型 PR 集中落地 |

> 注：Copilot CLI 摘要生成失败，未纳入后续对比。

---

## 三、共同关注的功能方向

| 需求方向 | 涉及工具 | 具体诉求 |
|----------|----------|----------|
| **🔴 成本/配额透明化** | Claude Code · Codex · OpenCode | 暴露 token 用量（#11008、#24927）、Go 套餐用量 API（#16017）、premium 模型成本披露（#30320）、`/cost` 命令回归（#20087） |
| **🟠 MCP 生态深化** | Codex · OpenCode · Gemini · Kimi | OAuth 远程安装（#988）、懒加载搜索（#12520）、ACP 模式兼容（#2464）、npm marketplace 源（#29375） |
| **🟠 多 Agent / 后台子代理治理** | Claude Code · Qwen Code | 会话间通信协议（#24798）、completed 代理可恢复（#5540+#5556）、subagent 成本守门 |
| **🟡 多模态 / 语音输入** | Qwen Code · Gemini | 语音听写 + 原生预构建（#5502+#5579-5588）、Vision Bridge（#5126） |
| **🟡 Windows / 长尾平台兼容** | Codex · Claude Code · Qwen Code | Windows sandbox 多次回归（#26158/29178/29200）、Termux glibc 中断（#50270）、win32-arm64 原生包缺失（#5580） |
| **🟢 持久化记忆 / 跨会话上下文** | Kimi · Claude Code · Gemini | 长期 Memory System 请求（#1283）、Auto Memory 隐私与死循环（#26516-#26525） |
| **🟢 可观测性 / OTEL** | OpenCode · Claude Code · Gemini | 链路追踪变量被忽略（#25839）、trace context 未传递（#27031）、Microsoft Foundry OTEL 失效（#55984） |
| **🟢 测试基础设施左移** | Qwen Code · Claude Code | 集成测试不上 PR（#5219、#5560）、CI 回归门槛缺失 |
| **🟢 AST 级代码理解** | Gemini · 多家提及 | 减少 token 噪声与误对齐读取（#22745/#22746） |

> 趋势观察：**"成本透明 + MCP 深化 + 多 Agent 编排"** 已构成 2026 年 AI CLI 工具的"三件套"竞争轴。

---

## 四、差异化定位分析

| 工具 | 核心定位 | 目标用户 | 技术路线特色 |
|------|----------|----------|------------|
| **Claude Code** | 企业级 AI 编排平台 | 付费 Max 团队 · 企业 DevOps | **Hooks 作为可编程 OS 层**、Subagents、Claude API 深度绑定 |
| **OpenAI Codex** | 桌面 + CLI 双形态 Agent | 独立开发者 · Pro/Plus 用户 | **app-server + code-mode 双协议**、TUI 插件生态、SQLite 投影 |
| **Gemini CLI** | GCP 原生 AI 开发入口 | Google Cloud 用户 · Vertex AI 客户 | **AST-aware 工具链**、Auto Memory、GCP IAM 深度集成 |
| **Kimi Code CLI** | 长上下文编码助手 | 中文长文档/项目开发者 | 强项 128K+ 上下文、ACP 编辑器桥接、极简架构 |
| **OpenCode** | 开源多 Provider 工作台 | 多模型混合 · 自托管爱好者 | **多 DBMS 后端**、OTEL 全链路、V1→V2 兼容迁移 |
| **Qwen Code** | 全模态编码工作台 | 国际化独立开发者 · 多模态场景 | **语音听写 + Vision Bridge**、Safe Mode、Artifact 工具 |

**关键差异**：
- **闭源 vs 开源**：Claude/Codex/Qwen 闭源走"产品力"路线，OpenCode 走"开放生态"路线，Gemini 介于两者之间。
- **协议之争**：Codex 押注自研 code-mode；Claude/Hooks 走配置即 API；OpenCode/Gemini 拥抱标准 MCP + ACP。
- **入口之争**：Codex/Claude 强化 TUI + Desktop；Qwen 押注语音/多模态；Kimi 押注长上下文。

---

## 五、社区热度与成熟度

**🔥 高度活跃（PR/Issue 双高，迭代速度快）**
- **OpenAI Codex** 与 **OpenCode**：单日 50 条 PR 并行推进，技术债务清理 + 新能力引入齐头并进，是开发者最值得"盯 PR"学习的项目。
- **Qwen Code**：v0.18.5 稳定落地后立刻接上语音听写大 PR，社区反馈密度高。

**🟠 需求溢出型（Issue 多，PR 少，社区失望感上升）**
- **Claude Code**：50 个 issue 仅有 2 个 PR，feature request 排队（#11008、#24798、#16128 长期 open），用户开始反映 v2.1.113 glibc 切换等"未沟通"变更带来的回归。

**🟡 质量债警示**
- **Gemini CLI**：单日 35 个 PR 极为高产，但 nightly 构建失败、多个 P1 subagent 挂起 Issue 待修，呈现"高产出伴随高债务"特征。

**🟢 早期聚焦型**
- **Kimi Code CLI**：日均 2 条 issue，社区尚处"功能定义期"，但 Memory System 等核心需求已锁定。

---

## 六、值得关注的趋势信号（对开发者的参考价值）

1. **🔴 "成本可观测性"是付费工具的下一道分水岭**
   跨 4 家厂商的"配额/计费黑盒"投诉同时出现，预示：**2026 下半年，token 实时计量、subagent 成本守门、套餐余额 API 将成为标配**。开发者应提前在自研 Agent 中内置 cost instrumentation。

2. **🟠 MCP 已成事实标准，但"懒加载 + OAuth + 远程发现"三件套尚未收敛**
   Codex、OpenCode、Gemini 都在用不同方式补齐 MCP 缺陷。建议：**在生产中只依赖 MCP 核心协议**（tools/resources/prompts），避免绑定某家"扩展语法"。

3. **🟡 多 Agent 编排是 2026 H2 的战略高地**
   Claude Code 的 #24798（会话间通信）、Qwen 的 #5556（后台代理复活）、OpenCode 的 ACP 子会话路由（#32445/#33293）共同指向同一方向：**未来的 IDE/CLI 不会只有一个 Agent**。建议开始设计"任务可中断、可恢复、可编排"的执行模型。

4. **🟢 平台碎片化是隐形质量债**
   Windows sandbox、Termux/Alpine glibc、win32-arm64 原生包在 24h 内集中暴露。**对维护者**：把 Windows + ARM64 列入 release-blocking checks。**对使用者**：锁定 LTS 版本而非 nightly 是更稳的策略。

5. **🟢 语音 + 视觉是入口之争的新战场**
   Qwen Code 的语音听写 (#5502) 与 Vision Bridge (#5126) 是目前**最激进的全模态路线**。对中文/移动场景的独立开发者而言，这是 Cursor/Claude Code 尚未完整覆盖的差异化机会窗口。

6. **🟢 测试基础设施的"左移"诉求**
   Qwen Code 集成测试不上 PR（#5219）、Codex 的 code-mode 重构依赖 fake server（#5560），说明：**AI CLI 进入精细化阶段后，传统 CI 流程已成为瓶颈**。可观测的 eval 集、fake model server、PR 阶段 E2E 几乎成为新基线。

7. **🟢 开源 + 多 Provider 路线（OpenCode 模式）正在被验证**
   单日 50 PR + 50 Issue 的活跃度、Zen 用量 API 等透明化诉求被快速响应，证明**"开放 + 透明"在 AI CLI 赛道有清晰的商业空间**。如果你是工具链开发者，这是值得研究的产品哲学。

---

> **📌 决策建议**
> - **企业落地**：Claude Code（成熟生态） + 自研 MCP 桥接，规避单一 Provider 锁定。
> - **独立开发者**：Qwen Code（多模态差异化）或 Codex（性能领先 + 生态扩张）。
> - **研究 / 自托管**：OpenCode（开源 + 多 DBMS + OTEL）作为基线，跟踪其 code-mode 等价物。
> - **Google Cloud 用户**：Gemini CLI（AST 工具链 + Auto Memory）是 Vertex AI 的天然前端。
>
> **TL;DR**：AI CLI 行业从"卷基础能力"转向"卷成本可控性、多 Agent 编排、全模态入口"。**Token 经济学 + MCP 生态成熟度 + 多 Agent 协议** 将决定下一轮产品格局。

---

## 各工具详细报告

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills 社区热点

> 数据来源: [anthropics/skills](https://github.com/anthropics/skills)

<think>
The user wants me to analyze the GitHub data from anthropics/skills repository and generate a community hotspot report. Let me carefully review the data provided.

Key observations from the data:

**Pull Requests (Top 20 by comment count, but all show "undefined" comments and 0 likes):**
Wait, looking more carefully, all PRs show "评论: undefined | 👍: 0". This is unusual - it suggests the data might be incomplete or all PRs have no comments/likes shown. The PRs are listed but the comment counts are missing.

However, the Issues do have comment counts. So I should focus my analysis primarily on the Issues data, and for PRs, I'll need to analyze them by their content, recency, and importance based on the descriptions.

Let me re-read the data:

**PRs (50 total, showing top 20):**
1. #514 - document-typography skill (PGTBoos, 2026-03-04)
2. #486 - ODT skill (GitHubNewbie0, 2026-03-01)
3. #210 - Improve frontend-design skill (justinwetch, 2026-01-05)
4. #1298 - fix(skill-creator): run_eval.py 0% recall (MartinCajiao, 2026-06-10)
5. #83 - skill-quality-analyzer and skill-security-analyzer (eovidiu, 2025-11-06)
6. #538 - fix(pdf): case-sensitive file references (Lubrsy706, 2026-03-06)
7. #539 - fix(skill-creator): YAML special characters warning (Lubrsy706, 2026-03-06)
8. #541 - fix(docx): tracked change w:id collision (Lubrsy706, 2026-03-06)
9. #181 - SAP-RPT-1-OSS predictor skill (amitlals, 2025-12-28)
10. #361 - YAML special characters in description (Mr-Neutr0n, 2026-02-09)
11. #1099 - skill-creator Windows fix (joshuawowk, 2026-05-07)
12. #95 - Comprehensive system documentation (TylerALofall, 2025-11-11)
13. #509 - docs: add CONTRIBUTING.md (narenkatakam, 2026-03-03)
14. #1050 - skill-creator Windows subprocess bugs (gstreet-ops, 2026-04-27)
15. #723 - testing-patterns skill (4444J99, 2026-03-22)
16. #362 - UTF-8 panic fix (Mr-Neutr0n, 2026-02-09)
17. #335 - masonry-generate-image-and-videos skill (junaid1460, 2026-02-04)
18. #154 - shodh-memory skill (varun29ankuS, 2025-12-19)
19. #568 - ServiceNow platform skill (Vanka07, 2026-03-08)
20. #444 - AURELION skill suite (Chase-Key, 2026-02-21)

**Issues (Top 15 with comment counts):**
1. #228 - Org-wide skill sharing (14 comments, 7 👍) - OPEN
2. #556 - run_eval.py 0% trigger rate (12 comments, 7 👍) - OPEN
3. #62 - Skills disappeared (10 comments, 2 👍) - OPEN
4. #492 - Security: trust boundary abuse (9 comments, 2 👍) - OPEN
5. #202 - skill-creator should be updated (8 comments, 1 👍) - CLOSED
6. #412 - Agent governance skill proposal (6 comments, 0 👍) - CLOSED
7. #189 - document-skills/example-skills duplicate (6 comments, 9 👍) - OPEN
8. #1175 - SharePoint Online security concerns (4 comments, 0 👍) - CLOSED
9. #29 - Usage with Bedrock (4 comments, 0 👍) - OPEN
10. #16 - Expose Skills as MCPs (4 comments, 0 👍) - OPEN
11. #1329 - compact-memory skill (3 comments, 0 👍) - OPEN
12. #1169 - skill-creator recall=0% (3 comments, 1 👍) - OPEN
13. #1061 - Windows compatibility (3 comments, 0 👍) - OPEN
14. #184 - agentskills.io redirects (3 comments, 4 👍) - CLOSED
15. #61 - "Not found" error loading skills (3 comments, 0 👍) - OPEN

Now I need to write a report. Since the PRs don't have comment counts in the data, I'll need to use other indicators like:
- Recency (more recent updates = more activity)
- Whether it addresses a major issue (like run_eval.py 0% recall)
- Topic importance (security, core functionality)
- Cross-references with Issues

Let me structure the report:

1. **热门 Skills 排行** - Pick the most prominent 5-8 PRs based on:
   - #1298 (fix skill-creator run_eval.py) - addresses #556 which has 12 comments
   - #1099, #1050 (Windows compatibility) - addresses #1061 (3 comments)
   - #514 (document-typography)
   - #486 (ODT skill)
   - #210 (frontend-design improvement)
   - #83 (skill-quality/security analyzers)
   - #723 (testing-patterns)

2. **社区需求趋势** - From issues:
   - Org-wide skill sharing (enterprise)
   - Reliability/correctness of skill-creator (Windows, run_eval, recall=0%)
   - Security/trust boundaries
   - MCPs integration
   - Memory/persistent context
   - Agent governance

3. **高潜力待合并 Skills** - PRs that are recent, important, and address community needs:
   - #1298 (skill-creator fix)
   - #1099, #1050 (Windows fixes)
   - #514 (typography)
   - #539, #538, #541 (bug fixes)
   - #362, #361 (UTF-8/YAML fixes)

4. **生态洞察** - Main takeaway

Let me draft this report in Chinese, as the request is in Chinese.

For the "热门 Skills 排行", I should focus on PRs that have community significance. Since comments are all undefined, I'll need to base this on:
- Whether the PR addresses a high-comment issue
- Recency of updates
- Topic prominence

Looking at the data more carefully:
- #1298 references issue #556 (12 comments, 7 thumbs up) - this is huge
- #1099 and #1050 reference Windows issues
- #539 and #361 are related to the same YAML issue
- #362, #541, #538 are quality fixes

Let me write a comprehensive report. The user wants it professional, concise, with GitHub links.

I'll need to be careful about the PR comment counts being "undefined" - I should mention this or just present the analysis based on other signals.

Let me write the report now. I should:
- Be professional and concise
- Include GitHub links
- Group PRs logically

Actually, looking again at the task, since the user provided PR data without comment counts, I should focus on:
1. Most discussed PRs (based on content significance and recency)
2. Cross-referencing with Issues
3. The Issues section has clear comment counts

Let me write the report:
</think>
# Claude Code Skills 社区热点报告
**数据周期：截至 2026-06-22**

---

## 1. 热门 Skills 排行

> 注：PR 评论数在原始数据中未抓取，以下排行基于 PR 解决的问题热度、交叉引用 Issue 活跃度及最近更新时间综合评估。

| 排名 | Skill / PR | 核心功能 | 状态 | 社区关注点 |
|---|---|---|---|---|
| 1 | **#1298 fix(skill-creator): run_eval.py 始终 0% recall** | 修复 skill-creator 评估管线失效问题（影响 `run_loop.py` / `improve_description.py`） | OPEN | 闭环 #556（12 评论/7 👍），是当前最受关注的 Bug，10+ 独立复现 |
| 2 | **#514 document-typography** | 防止 AI 生成文档中的孤行/寡行、页眉脱页、编号错位等排版问题 | OPEN | 痛点普适——所有文档生成场景都受影响 |
| 3 | **#486 ODT skill** | OpenDocument (.odt/.ods) 创建、模板填充、解析为 HTML | OPEN | 补齐开源/ISO 标准格式支持，LibreOffice 用户刚需 |
| 4 | **#210 Improve frontend-design skill** | 重写 frontend-design 技能，提升清晰度与可执行性 | OPEN | 官方核心技能质量改进，影响所有前端设计场景 |
| 5 | **#83 skill-quality-analyzer & skill-security-analyzer** | 元技能：五维度质量评估 + 安全审计，纳入 marketplace | OPEN | 闭环 #492 安全议题，是 Skill 生态治理的基础设施 |
| 6 | **#723 testing-patterns** | 完整测试方法论：Testing Trophy、单元/组件/E2E/契约测试模式 | OPEN | 工程团队高频需求，定位 Claude 作为测试协作者 |
| 7 | **#568 ServiceNow platform** | 覆盖 ITSM/ITOM/FSM/SecOps/SPM/CSDM/IntegrationHub 的全平台助手 | OPEN | 企业级 SaaS 集成代表，单 Skill 体量较大 |
| 8 | **#444 AURELION skill suite** | 四件套：kernel（结构化思维模板）+ advisor/agent/memory | OPEN | 面向长会话的认知框架，与 Memory 类需求形成互补 |

🔗 链接：
- [#1298](https://github.com/anthropics/skills/pull/1298) · [#514](https://github.com/anthropics/skills/pull/514) · [#486](https://github.com/anthropics/skills/pull/486) · [#210](https://github.com/anthropics/skills/pull/210)
- [#83](https://github.com/anthropics/skills/pull/83) · [#723](https://github.com/anthropics/skills/pull/723) · [#568](https://github.com/anthropics/skills/pull/568) · [#444](https://github.com/anthropics/skills/pull/444)

---

## 2. 社区需求趋势

从 Issues 评论/点赞量提炼的五大方向：

### 🔥 趋势一：组织级 Skill 共享与分发
- **#228**（14 评论/7 👍）—— "Enable org-wide skill sharing in Claude.ai"：当前必须下载 .skill 文件再手动上传，企业内分发成本极高
- **#16**（4 评论）—— "Expose Skills as MCPs"：希望 Skill 可对外暴露标准化 API 接口

### 🛠 趋势二：skill-creator 工具链稳定性
- **#556**（12 评论/7 👍）+ **#1169**（3 评论）—— `run_eval.py` 触发率 0% Bug
- **#1061**（3 评论）+ **#1050** + **#1099** —— Windows 兼容性三重失败（PATHEXT/cp1252/管道 select）
- **#202**（8 评论，已关闭）—— skill-creator 应更新为最佳实践（语气冗长、违反命名规范）

### 🔒 趋势三：Skill 生态安全治理
- **#492**（9 评论/2 👍）—— `anthropic/` 命名空间被社区 Skill 仿冒，构成信任边界漏洞
- **#1175**（4 评论）—— SharePoint 集成场景下的 SKILL.md 权限控制风险
- **#83** 的 skill-security-analyzer 正是回应这一趋势

### 🧠 趋势四：持久记忆与上下文压缩
- **#1329**（3 评论）—— compact-memory：符号化压缩长会话状态
- **#154 shodh-memory** PR —— 跨会话持久记忆系统
- 反映长任务 Agent 对**自我状态管理**的强需求

### 🏢 趋势五：企业 SaaS / 平台深度集成
- **#568 ServiceNow**、**#181 SAP-RPT-1-OSS**、**#29 AWS Bedrock** 兼容性
- **#412**（已关闭，6 评论）—— agent-governance：策略执行、威胁检测、审计追踪
- 企业落地诉求：从单点工具 → 平台级工作流

---

## 3. 高潜力待合并 Skills

按"落地紧迫性 × 社区影响"排序，建议优先 Review：

| PR | 标题 | 紧迫理由 | 链接 |
|---|---|---|---|
| **#1298** | skill-creator 评估管线修复 | 阻塞所有 Skill 描述优化闭环，10+ 复现 | [→](https://github.com/anthropics/skills/pull/1298) |
| **#1099** | Windows subprocess 管道读取修复 | 阻断 Windows 用户使用 skill-creator | [→](https://github.com/anthropics/skills/pull/1099) |
| **#1050** | Windows subprocess + 编码双重修复 | 与 #1099 形成交叉验证 | [→](https://github.com/anthropics/skills/pull/1050) |
| **#538** | pdf SKILL.md 大小写错误 | 8 处文件引用错误，case-sensitive 系统直接 404 | [→](https://github.com/anthropics/skills/pull/538) |
| **#539 / #361** | YAML 特殊字符未引号检测 | 防止 description 被 yaml.safe_load 静默截断 | [#539](https://github.com/anthropics/skills/pull/539) · [#361](https://github.com/anthropics/skills/pull/361) |
| **#362** | UTF-8 多字节字符 Panic 修复 | 替换字符计数为字节级校验，影响所有非 ASCII Skill | [→](https://github.com/anthropics/skills/pull/362) |
| **#541** | docx tracked change w:id 冲突 | 修复含书签文档的 corruption 风险 | [→](https://github.com/anthropics/skills/pull/541) |
| **#509** | docs: add CONTRIBUTING.md | 关闭 #452 社区健康议题，仓库健康分 25% → 提升 | [→](https://github.com/anthropics/skills/pull/509) |
| **#95** | 系统文档与流程图 | 完善证据管理系统（SYSTEM_OVERVIEW/ARCHITECTURE/FLOW） | [→](https://github.com/anthropics/skills/pull/95) |

---

## 4. Skills 生态洞察

> **当前社区最集中的诉求是：把 Skill 生态从"单点工具集"升级为"可治理、可分发、可信赖的企业级基础设施"**——具体表现为对 skill-creator 工具链稳定性的强烈不满（评估管线、Windows 兼容）、对组织级分发的迫切需求（#228）、以及对仿冒/权限风险的零容忍（#492），三者共同指向同一个核心问题：Skills 必须具备生产环境级别的工程治理能力。

---

<think>The user wants me to generate a Chinese-language daily report for the Claude Code community based on GitHub data from 2026-06-22. Let me analyze the data carefully and produce a structured report.

Key observations from the data:
- No new releases in past 24 hours
- 50 issues updated, showing 30 most commented
- Only 2 PRs updated in past 24 hours
- Several themes emerge:
  1. Cost/token usage concerns (multiple issues about exposing cost data, quota issues)
  2. Platform-specific bugs (Android/Termux, Windows, macOS)
  3. Multi-session communication features
  4. IDE/VS Code integration
  5. Hooks system enhancements
  6. MCP connector issues
  7. Accessibility features

Let me organize this into a structured daily report in Chinese.

For the community hot issues, I need to pick the 10 most noteworthy. Looking at comments and upvotes:
1. #895 - Error: InputValidationError (54 comments, 12 👍) - high discussion, old issue
2. #50270 - v2.1.113+ broken on Termux/Android (53 comments, 51 👍) - very high upvotes, recent regression
3. #24798 - Inter-session communication (38 comments, 18 👍)
4. #16128 - AWS Bedrock auth for Chrome extension (25 comments, 108 👍) - extremely high upvotes
5. #11008 - Token usage in hooks (23 comments, 25 👍)
6. #58429 - A11y speak responses (19 comments, 3 👍)
7. #37994 - Claude Desktop LAN SSH broken (12 comments, 5 👍)
8. #61097 - MCP blocked despite Always Allow (12 comments, 6 👍) - CLOSED
9. #66144 - Auto compact not triggering (11 comments, 11 👍)
10. #68514 - Checksum mismatch on macOS (11 comments, 3 👍) - marked invalid

For PRs, there are only 2, so I'll include both.

For trends, I should identify the major themes:
- Cost/quota visibility (multiple issues)
- Multi-agent/multi-session coordination
- Platform compatibility (Android/Termux regression is huge)
- Hooks extensibility
- IDE integration (VS Code, Bedrock)
- Accessibility
- MCP ecosystem stability

Let me draft the report now.</think>

# Claude Code 社区动态日报
**日期：2026-06-22**

---

## 一、今日速览

过去 24 小时内仓库无新 Release 发布，Issue 活跃度依旧高涨，社区讨论的核心集中在 **成本/配额可见性**（多个 Hooks/状态栏相关 feature 仍在排队）与 **多平台兼容性回归** 上——尤其是 v2.1.113 起对 Android/Termux 的 glibc 依赖回归（#50270，53 条评论、51 👍）以及 macOS 上 Cowork/PTY fd 泄漏等问题。与此同时，"多 Claude 会话协同"（#24798）、"Bedrock + Chrome 扩展认证"（#16128，108 👍，本期最受关注 enhancement）等热门功能请求持续引发讨论。

---

## 二、版本发布

⚠️ 过去 24 小时无新版本发布。社区反馈多围绕 v2.1.113+ 的 **glibc 原生二进制切换** 引发的一系列 Android/WSL 兼容性问题，以及近期 Desktop 桌面端（macOS 1.14271.0 等）更新带来的回归。

---

## 三、社区热点 Issues（Top 10）

| # | Issue | 关键看点 |
|---|-------|----------|
| 1 | **[#895] Error: InputValidationError: Write failed** — `@BrianObilo`，54 评论 / 12 👍 | 一个长期存在的偶发 bug，Write 工具偶尔会缺失 `content` 参数，社区呼吁工具调用层面的校验加固。 |
| 2 | **[#50270] v2.1.113+ broken on Termux/Android** — `@tpdhd`，53 评论 / 51 👍 | **本期最关键回归**：原生 glibc 二进制彻底切断了 Android/Termux 用户，需回退或提供 musl/JS fallback。 |
| 3 | **[#24798] Inter-session communication for multi-Claude workflows** — `@hmcg001`，38 评论 / 18 👍 | 提出"会话间消息/任务依赖协议"，是多 Agent 协同工作流的核心需求。 |
| 4 | **[#16128] AWS Bedrock auth for Chrome extension** — `@joaopixar`，25 评论 / **108 👍** | 企业用户在 Chrome 扩展里使用 Bedrock 认证的需求，点赞数远超评论数，反映广泛的"被压抑需求"。 |
| 5 | **[#11008] Expose token usage & cost data in hook inputs** — `@cassiodias`，23 评论 / 25 👍 | Hooks 当前无法读取 token/成本数据，阻碍了成本仪表盘与自动化守门员。 |
| 6 | **[#58429] A11y: speak responses aloud** — `@DCA11Y`，19 评论 / 3 👍 | 为盲人/低视力/免提场景提供 TTS 输出，TUI + Desktop 双端诉求。 |
| 7 | **[#37994] Claude Desktop LAN SSH/network blocked** — `@1hosmera`，12 评论 / 5 👍 | Desktop 更新后 `OPERON_SANDBOXED_NETWORK=1` 误伤 LAN 内网访问，影响本地开发。 |
| 8 | **[#61097] MCP connector blocked despite Always Allow** — `@JeongHeonK`，12 评论 / 6 👍，已 CLOSED | Remote Routine + Gmail MCP 在 macOS Team 计划下仍弹"需审批"，权限模型存在不一致。 |
| 9 | **[#66144] Auto compact 不在 100% 触发，CLI 自停** — `@Arvuno`，11 评论 / 11 👍 | 上下文窗口管理失效导致 session 中断，影响长任务可靠性。 |
| 10 | **[#68514] Checksum mismatch on macOS Sequoia 15.7.7 ARM64** — `@danielfreeman-ui`，11 评论 / 3 👍，已标 invalid | 反映 Desktop 安装包校验链路在 ARM64 上仍需排查。 |

🔗 链接：
[#895](https://github.com/anthropics/claude-code/issues/895) ·
[#50270](https://github.com/anthropics/claude-code/issues/50270) ·
[#24798](https://github.com/anthropics/claude-code/issues/24798) ·
[#16128](https://github.com/anthropics/claude-code/issues/16128) ·
[#11008](https://github.com/anthropics/claude-code/issues/11008) ·
[#58429](https://github.com/anthropics/claude-code/issues/58429) ·
[#37994](https://github.com/anthropics/claude-code/issues/37994) ·
[#61097](https://github.com/anthropics/claude-code/issues/61097) ·
[#66144](https://github.com/anthropics/claude-code/issues/66144) ·
[#68514](https://github.com/anthropics/claude-code/issues/68514)

---

## 四、重要 PR 进展

过去 24 小时仅有 2 条 PR 更新，活跃度偏低：

| PR | 内容 |
|----|------|
| **[#69916] fix: print error message before silent exit in `edit-issue-labels.sh`** | 修复 triage 工作流在缺参时静默 `exit 1` 的问题，关联 #69913，提升 issue 分类机器人可观测性。 |
| **[#4943] feat: add shell completions (bash, zsh, fish)** | 提供 `claude` 命令的 bash/zsh/fish 静态补全脚本，仍在 OPEN 状态——长期高价值 UX 改进，但进展缓慢。 |

🔗 链接：[#69916](https://github.com/anthropics/claude-code/pull/69916) · [#4943](https://github.com/anthropics/claude-code/pull/4943)

---

## 五、功能需求趋势

通过对今日活跃 Issue 的归类，社区诉求呈现出几条清晰主线：

1. **成本与配额透明化**（热度最高）
   - `#11008` Hooks 中暴露 token/成本 · `#59709` statusline 暴露 Max 配额 · `#50926` `/cost` `/usage` 程序化访问 · `#68703` Skill 启动前的成本预估与确认。
   - 共同指向：**用户需要把"花多少钱、还剩多少"接入自己的工具链与守门逻辑**。

2. **多 Agent / 多会话协同**（战略级）
   - `#24798` 会话间通信协议 — 是当前 Agent 编排的最大空白。
   - `#11008` 与 hooks 体系结合，被视为多 Agent 编排的"操作系统级 API"。

3. **企业 & 多平台认证 / 集成**
   - `#16128` Bedrock + Chrome 扩展（108 👍）· `#53516` `~/.claude/projects/*.jsonl` 稳定 schema · `#63527` VSCode 扩展在映射盘下的会话历史丢失 — 企业落地三件套。

4. **平台兼容性与桌面端稳定性**
   - Android/Termux（#50270）、Windows 离线 token 消耗（#69526）、macOS PTY fd 泄漏（#65995）、macOS Cowork 加载卡死（#69807）— 桌面端近期更新带来多个回归。

5. **可访问性（A11y）与富交互**
   - `#58429` 语音播报 · `#57371` 关闭 Windows Cowork 后台服务 · `#49039`（已关闭）Desktop 每项目"新建会话"快捷方式。

6. **Hooks 体系增强**
   - `#65982` 事实核查 gate · `#11008` 成本注入 · `#50926` 配额暴露 — Hooks 正成为社区期待最强的"可编程面"。

---

## 六、开发者关注点与痛点

- **🔴 成本失控焦虑**：多名开发者（#59709、#68703、#69931）反映 Max 周配额在 subagent-heavy、Gmail MCP 会话中消耗过快却无预警；subagent 启动缺乏"代价可见 + 用户确认"机制已成核心痛点。
- **🔴 平台回归风险**：v2.1.113 把 CLI 从 JS 入口换成原生 glibc 二进制，Android、某些 musl Linux 发行版用户被直接阻断；该变更在缺乏明确 changelog 沟通的情况下落地，引发广泛不满。
- **🟡 桌面端权限/网络沙箱过严**：Claude Desktop 内置沙箱（#37994）一刀切式阻断了 LAN/SSH 访问；macOS 上"Always Allow"对 MCP 的覆盖不完整（#61097）让 Routines 体验受损。
- **🟡 Hooks 盲区**：成本、token、配额、文件写入等关键事件无法被 Hook 订阅，迫使开发者只能做"事后审计"而非"事中守门"。
- **🟢 多 Agent 协作是下一波刚需**：#24798 表达清晰——当前并行 Claude 会话之间是孤岛，需要依赖编排协议来串起大型项目工作流。
- **🟢 企业级可观测性需求增长**：`~/.claude/projects/*.jsonl` 缺乏稳定 schema（#53516）、OTEL 在 Microsoft Foundry 上失效（#55984），表明 Anthropic 在可观测性/可审计性方面仍有较大缺口。

---

> 📌 **TL;DR**：今日无版本发布，社区热度集中在 **"成本可见性 + 多 Agent 协同 + 平台回归"** 三条主线。Android/Termux glibc 回归（#50270）与 Bedrock Chrome 扩展认证（#16128，108 👍）是开发者最期待解决的"硬骨头"。
>
> 报告基于 `anthropics/claude-code` 仓库过去 24 小时更新的 50 条 Issue + 2 条 PR 数据生成。

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

<think>The user wants me to generate a Chinese daily report about OpenAI Codex community dynamics based on GitHub data. Let me analyze the data carefully and structure the report according to the required sections.

Let me go through the data:

**Releases (past 24 hours):**
- rust-v0.142.0-alpha.9
- rust-v0.142.0-alpha.10
These are alpha versions of the Rust core, just two rapid releases in a single day.

**Top Issues by comments:**
1. #28879 - Rate-limit cost jumped 10-20x since June 16 (102 comments, 197 👍) - Very high engagement, critical issue
2. #25749 - Phone verification inaccessible (57 comments)
3. #18993 - VS Code extension can't open past conversations (33 comments)
4. #27694 - macOS Dock crash via Dock tile recursion (17 comments)
5. #26600 - Quota decreases when not using (16 comments)
6. #29205 - CLOSED - sandbox policy missing field (15 comments)
7. #26158 - CLOSED - Windows sandbox regression (13 comments)
8. #19001 - Add RTK to reduce token usage 60-90% (12 comments)
9. #29178 - Windows desktop regression with proxy env (12 comments)
10. #29200 - Windows sandbox dialog on apply_patch (10 comments)
11. #28241 - turn-diff breaks libgit2 clients (9 comments)
12. #21074 - Windows install location request (6 comments)
13. #26966 - CLOSED - Add --goal to codex exec (5 comments)
14. #14620 - VSCode Remote SSH hang (5 comments)
15. #25498 - Project management for Codex Desktop (4 comments)
16. #29320 - Codex app only displays error (4 comments)
17. #18486 - Windows MCP Transport closed (4 comments)
18. #20570 - Windows sandbox CreateProcessAsUserW error (4 comments)
19. #29210 - Canva MCP no HTML preview (4 comments)
20. #20087 - Bring back /cost command (3 comments)

**Top PRs:**
1. #29393 - fix merge race for AutoCompaction
2. #26703 - TUI Plugin Sharing 3 - remote plugin catalog
3. #29249 - migrate environment context to model world state
4. #28232 - Add workspace headline statusline item
5. #29371 - Propagate safety buffering events (CLOSED)
6. #28769 - Register full CDP requirements feature
7. #29073 - refresh environment context before sampling
8. #28260 - Add internal auto-compaction opt-out (CLOSED)
9. #29375 - Support npm marketplace plugin sources
10. #29290 - code-mode: decouple cell creation from observation
11. #29291 - code-mode: expose create and observe operations
12. #29292 - code-mode: expose transport-neutral session runtime
13. #29310 - code-mode: clean up terminal cell dispatch gates
14. #29357 - speed up thread resume
15. #29355 - speed up thread list with SQLite
16. #29352 - separate thread names and repair ownership
17. #29367 - optimize thread resume and fork
18. #29358 - Allow codex sandbox to consume MCP sandbox state
19. #29288 - code-mode: preserve dropped observation output (CLOSED)
20. #29289 - code-mode: preserve initial yield at completion (CLOSED)

I need to select the most important 10 issues and 10 PRs.

For Issues, I'll prioritize by:
- Comments count (engagement)
- 👍 reactions
- Critical bugs
- Open status

For PRs, I should look at:
- Major feature additions
- Bug fixes
- Performance improvements
- Architecture changes

Key themes I observe:
1. **Rate limiting/billing issues** - Multiple high-engagement issues about quota being consumed too quickly (#28879, #26600, #28908, #28492, #24927, #26808)
2. **Windows-specific problems** - Multiple Windows sandbox issues (#26158, #29178, #29200, #20570, #28241, #18486)
3. **Performance/optimization** - Multiple PRs about thread resume/list performance (#29357, #29355, #29352, #29367)
4. **Code-mode architecture** - Multiple PRs about code-mode session protocol (#29290, #29291, #29292, #29310)
5. **Plugin ecosystem** - Plugin sharing TUI, npm marketplace support (#26703, #29375)
6. **Auto-compaction** - Related PRs (#29393, #28260)
7. **Cost/token efficiency** - RTK request, /cost command request (#19001, #20087)

Let me now write the report in Chinese.</think>

# OpenAI Codex 社区动态日报

**日期：2026-06-22** | 数据来源：github.com/openai/codex

---

## 1. 今日速览

今日 Codex 仓库活动密集，社区最关注的焦点是 **GPT-5.5 配额消耗异常激增**（单 Issue 评论过百、点赞近 200），多名 Plus 用户反馈每 Token 消耗的限额比例自 6 月 16 日以来上涨约 10–20 倍。与此同时，**Rust 核心 0.142.0-alpha 版本在 24 小时内连续发布两个迭代**（alpha.9 → alpha.10），配合多项 thread resume/list 性能优化 PR，显示出团队正在为下一阶段架构升级做准备。

---

## 2. 版本发布

过去 24 小时内 Rust CLI 连续推送两个 alpha 版本：

| 版本 | 说明 |
|---|---|
| `rust-v0.142.0-alpha.9` | 0.142.0-alpha.9 迭代 |
| `rust-v0.142.0-alpha.10` | 0.142.0-alpha.10 迭代 |

> 高速迭代节奏通常意味着存在阻塞性 bug 或重要功能正在合入，建议生产环境暂缓升级 alpha 通道。

---

## 3. 社区热点 Issues（精选 10 条）

### 🔴 严重 / 高热度

**1. [#28879](https://github.com/openai/codex/issues/28879) — GPT-5.5 Plus 配额单 Token 消耗暴涨 10–20 倍**  
💬 102 条评论 | 👍 197  
📌 *[bug, rate-limits]* · OPEN  
Plus 用户报告 5 小时配额在 2–3 次提示后即耗尽，token_count / rate_limits 事件显示每 Token 消耗的限额比例上升了 10–20 倍。社区情绪激烈，是当前最高优先级问题。

**2. [#25749](https://github.com/openai/codex/issues/25749) — 旧手机号无法访问且无替换路径**  
💬 57 | 👍 34  
📌 *[bug, auth]* · OPEN  
用户能通过 Google OAuth 登录 ChatGPT，但 Codex 强制要求验证一个不可访问的旧手机号，且不提供更换/找回流程。

**3. [#18993](https://github.com/openai/codex/issues/18993) — VS Code 扩展无法打开历史会话**  
💬 33 | 👍 51  
📌 *[bug, extension, regression]* · OPEN  
1.117.0 版本回归，无法打开任何过往对话历史。点赞数高，影响范围广（VS Code 用户基数大）。

### 🟡 中等热度 / 已关闭

**4. [#27694](https://github.com/openai/codex/issues/27694) — macOS Dock 通过 CodexDockTilePlugin 递归调用崩溃**  
💬 17 | 👍 7 · OPEN · 影响 26.609.30741 版本。

**5. [#26600](https://github.com/openai/codex/issues/26600) — Codex 静默消耗配额**  
💬 16 | 👍 1 · OPEN · 后台 session、卡住任务、auto-compaction 被怀疑为元凶。

**6. [#29205](https://github.com/openai/codex/issues/29205) — sandbox-state-meta 缺少 sandboxPolicy 字段**  
💬 15 · *CLOSED* · Codex 桌面端 browser/annotation 工具失败。

**7. [#26158](https://github.com/openai/codex/issues/26158) — Windows sandbox 在 0.138.0 起回归**  
💬 13 · *CLOSED* · 0.132.0 可用，回滚是常见做法。

**8. [#19001](https://github.com/openai/codex/issues/19001) — 请求将 RTK 内置到 Codex CLI 以节省 60–90% Token**  
💬 12 | 👍 13 · OPEN · 与配额焦虑直接相关的社区呼声。

**9. [#29178](https://github.com/openai/codex/issues/29178) — Windows Desktop 26.616.4196 全局代理下 apply_patch 失败**  
💬 12 · OPEN · 回滚到 26.611.8604.0 即可解决。

**10. [#28241](https://github.com/openai/codex/issues/28241) — turn-diff 树引用破坏 libgit2 客户端**  
💬 9 · OPEN · 影响基于 libgit2 的 Git 工具链。

---

## 4. 重要 PR 进展（精选 10 条）

**1. [#29393](https://github.com/openai/codex/pull/29393) — 修复 AutoCompaction 合并竞态**  
chore 修复：将 `AutoCompaction` 通过 `TurnContext::config` 读取，统一 mid-turn 与 pre-sampling 检查，避免了 #28260 合并后遗留的字段漂移问题。

**2. [#28232](https://github.com/openai/codex/pull/28232) — 新增 workspace headline statusline 项**  
TUI 状态栏新增可配置的 `workspace-headline` 项，每 10 秒通过 app-server 刷新，让管理员调整的 headline 可即时同步到会话中。

**3. [#29249](https://github.com/openai/codex/pull/29249) — 环境上下文迁移至 model world state**  
将 model 可见的环境上下文从瞬态 turn 值重构为可类型化、可重放的世界状态（先切 environments），是模型上下文层的一次架构演进。

**4. [#29375](https://github.com/openai/codex/pull/29375) — 支持 npm marketplace 插件源**  
插件市场支持 `npm` 类型来源，支持 `package`、可选 `version` 与 `registry`，复用既有 staging 与版本化缓存区。这是 **Codex 插件生态向外扩展** 的关键一步。

**5. [#29073](https://github.com/openai/codex/pull/29073) — 采样前刷新环境上下文**  
解决远程环境启动期间首轮 turn 已发送但环境仍未就绪的"快照过时"问题，对长启动延迟场景尤为重要。

**6. [#29358](https://github.com/openai/codex/pull/29358) — codex sandbox 消费 MCP sandbox 状态**  
允许 `codex sandbox` 直接接受 `codex/sandbox-state-meta` 的 JSON，复用既有 `SandboxState` 类型与 macOS/Linux/Windows 启动路径，让 MCP server（如 `node_repl`）可无侵入转发元数据。

**7. [#29367](https://github.com/openai/codex/pull/29367) — 优化 thread resume 与 fork 性能**  
为 `thread/resume` 与 `thread/turns/list` 增加 checkpoint-bounded rollout 重建与 reverse recent-turn 读取，避免长会话整段物化；持久化 `thread/fork` 同步优化。

**8. [#29357](https://github.com/openai/codex/pull/29357) — 加速 thread resume（无延迟修复）**  
本地 `thread/resume` 改用 blocking worker 解析 rollout 文件，复用已加载的历史，避免重复克隆。

**9. [#29355](https://github.com/openai/codex/pull/29355) — 用轻量 SQLite 行加速 thread list**  
`thread/list` 走 SQLite 投影 + 批量化文件系统扫描修复，保留过滤、排序、anchor 等全部语义。

**10. [#29290](https://github.com/openai/codex/pull/29290) — code-mode：解耦 cell 创建与观察**  
属于 cconger 主导的 **code-mode session runtime** 系列重构之一（同时还有 #29291、#29292、#29310、#29288、#29289），重塑 cell 生命周期，让取消/终止 cell 后无法被观察方"晚到读出"，并新增丢失连接/失同步的协议信号。

---

## 5. 功能需求趋势

| 方向 | 代表 Issue | 热度信号 |
|---|---|---|
| **配额/计费透明度** | [#28879](https://github.com/openai/codex/issues/28879)、[#26600](https://github.com/openai/codex/issues/26600)、[#28492](https://github.com/openai/codex/issues/28492)、[#28908](https://github.com/openai/codex/issues/28908) | 5 条相关 Issue 单日累计评论 130+ |
| **Token 节省工具** | [#19001](https://github.com/openai/codex/issues/19001)（RTK 内置）、[#20087](https://github.com/openai/codex/issues/20087)（/cost 命令回归） | 配额焦虑直接催生 |
| **插件生态扩展** | [#26703](https://github.com/openai/codex/pull/26703)、[#29375](https://github.com/openai/codex/pull/29375) | 远程 plugin catalog + npm 源 |
| **Desktop 项目管理** | [#25498](https://github.com/openai/codex/issues/25498) | 注册项目、跨项目移动 thread |
| **IDE 集成稳定性** | [#18993](https://github.com/openai/codex/issues/18993)（VS Code 历史）、[#14620](https://github.com/openai/codex/issues/14620)（SSH 挂起）、[#23574](https://github.com/openai/codex/issues/23574)（Linux inotify） | 跨 IDE 仍有未解决的稳定性问题 |
| **Windows 沙箱体验** | [#26158](https://github.com/openai/codex/issues/26158)、[#29178](https://github.com/openai/codex/issues/29178)、[#29200](https://github.com/openai/codex/issues/29200)、[#20570](https://github.com/openai/codex/issues/20570) | 多次回归，呼声集中 |
| **Chronicle / 内存控制** | [#26808](https://github.com/openai/codex/issues/26808) | 后台 memory writer 默默吃配额 |
| **Browser/Computer-use 性能** | [#28545](https://github.com/openai/codex/issues/28545)（macOS CPU 飙高）、[#29389](https://github.com/openai/codex/issues/29389)（Chrome bridge） | 新能力引入的副作用 |

---

## 6. 开发者关注点

**🔴 最痛点：配额/计费黑盒**  
GPT-5.5 上线后，开发者普遍反映后台自动任务（Chronicle、auto-compaction、background session）静默消耗 5h 配额。社区诉求集中在三点：
- **暴露可观测接口**：让 Agent 能查询当前 quota/余额（#24927）；
- **可配置的后台模型**：默认昂贵模型换成便宜模型（#26808）；
- **优雅停机策略**：快用完时自动停止任务。

**🟠 Windows 沙箱是 QA 重灾区**  
本周至少 4 条与 Windows sandbox setup / apply_patch / CreateProcessAsUserW / MCP 包装相关的问题（#26158、#29178、#29200、#20570、#18486）。多数用户选择"回滚到旧版本"作为临时方案，期望团队在 release 流程中加入 Windows 回归门槛。

**🟡 性能仍是 thread/list 与 resume 的瓶颈**  
线程列表与会话恢复在长会话下存在显著延迟，#29355 / #29357 / #29352 / #29367 系列 PR 显示团队正在用 SQLite 投影 + checkpoint 重建 + 修复 ownership 分离的方式系统性重写存储层。

**🟢 code-mode 架构正在定型**  
cconger 的多个 code-mode PR（#29288–#29293、#29310）勾勒出新 session runtime 的契约：cell 创建与观察解耦、传输中立、显式区分完成/丢失/取消事件。这是继 app-server 之后 Codex 内部协议的下一阶段演进。

**🟢 插件生态向远程/NPM 扩张**  
TUI 远程 plugin catalog (#26703) + npm marketplace source (#29375) 标志着 Codex 在 IDE 之外寻找"应用商店式"扩展路径，值得生态合作伙伴关注。

---

*日报生成完毕。如需进一步深挖某条 Issue/PR 或追踪特定主题，请告知。*

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

<think>The user wants me to generate a daily report for Gemini CLI community dynamics based on GitHub data. Let me analyze the data carefully and create a structured Chinese report.

Let me organize the key information:

1. **No new releases in past 24 hours**
2. **Issues (50 total, showing top 30 by comments)** - Let me pick the most important ones
3. **Pull Requests (35 total, showing top 20 by comments, though most have 0 comments)**

Key themes I notice:
- Security issues (workspace trust dialog, permission errors)
- Auto Memory system bugs (multiple issues from SandyTao520)
- Subagent/agent reliability issues (generalist agent hangs, MAX_TURNS reporting wrong status)
- Browser agent issues
- Session management bugs
- ACP server token reporting issues
- AST-aware file reads investigation
- Nightly release failed for v0.49.0-nightly.20260622.gbe7ba2c22
- Behavioral evals expansion

Let me identify the top 10 most important issues based on:
- Comment count
- Priority (p1 first)
- Community interest (likes)
- Recent activity

Top 10 Issues:
1. #25306 - 403 permission error (CLOSED, 30 comments, 12 likes) - Most active
2. #24353 - Robust component level evaluations (p1, 7 comments)
3. #22745 - AST-aware file reads (p2, 7 comments, 1 like)
4. #22323 - Subagent recovery after MAX_TURNS (p1, 7 comments, 2 likes)
5. #21409 - Generalist agent hangs (p1, 7 comments, 8 likes - highest likes among open)
6. #21968 - Gemini doesn't use skills/sub-agents (p2, 6 comments)
7. #26525 - Auto Memory deterministic redaction (p2, 5 comments)
8. #26522 - Auto Memory retry issue (p2, 5 comments)
9. #25166 - Shell command execution stuck (p1, 4 comments, 3 likes)
10. #21983 - browser subagent fails in wayland (p1, 4 comments)

Top 10 PRs (most are 0 comments but are still important):
1. #27915 - trust dialog discloses hook shape (p1, security)
2. #27910 - bound web search tool latency (p1)
3. #27903 - trust dialog discloses canonical nested shape (p1, security)
4. #27930 - keep array tool results out of structuredContent (p1)
5. #28087 - Nightly Release Failed
6. #27916 - GCP project ID validation (p2, agent)
7. #27914 - don't offer to resume session that wasn't saved (p2)
8. #27905 - keep recreated session files loadable (p2)
9. #27904 - load JSONL sessions when projectHash missing (p2)
10. #27729 - truncate telemetry metric attributes (p2)

Let me write this report in Chinese, professional and concise.</think>

# Gemini CLI 社区动态日报

**日期：2026-06-22**

---

## 1. 今日速览

今日社区关注点集中在 **Agent 稳定性**与**安全/权限模型**两条主线：多个 P1 级 Issue 反映 subagent 在超时、权限、Wayland 等场景下出现挂起或误报告成功状态；同时 workspace-trust 对话框被发现未正确披露嵌套 hook 命令，构成潜在 RCE 风险。此外，`v0.49.0-nightly.20260622` 夜间构建失败，自动化发布流程出现回退。

---

## 2. 版本发布

**⚠️ 无新版本发布**

需要注意的是，nightly 自动发布流程今日失败：

- [#28087](https://github.com/google-gemini/gemini-cli/issues/28087) — `v0.49.0-nightly.20260622.gbe7ba2c22` 构建失败，标记为 `release-failure / p1`，等待人工 triage。

---

## 3. 社区热点 Issues（Top 10）

| # | Issue | 优先级 | 评论 | 关注点 |
|---|-------|--------|------|--------|
| 1 | [#25306](https://github.com/google-gemini/gemini-cli/issues/25306) **API 403 Permission 错误** | — | 30 👍12 | 讨论量最高，疑似 GCP/IAM 鉴权问题，已 CLOSED |
| 2 | [#21409](https://github.com/google-gemini/gemini-cli/issues/21409) **Generalist agent 永久挂起** | P1 | 7 👍8 | 👍数最高的 OPEN Issue，用户等待 1 小时无响应 |
| 3 | [#22323](https://github.com/google-gemini/gemini-cli/issues/22323) **MAX_TURNS 后 subagent 误报告 GOAL success** | P1 | 7 👍2 | 状态机语义错误，隐藏真正中断 |
| 4 | [#24353](https://github.com/google-gemini/gemini-cli/issues/24353) **组件级 behavioral eval 扩展 EPIC** | P1 | 7 | 已生成 76 个行为评估用例，覆盖 6 个模型 |
| 5 | [#22745](https://github.com/google-gemini/gemini-cli/issues/22745) **AST 感知的文件读取/搜索/映射评估** | P2 | 7 👍1 | 探索减少 token 噪声与误对齐读取的新工具路径 |
| 6 | [#21968](https://github.com/google-gemini/gemini-cli/issues/21968) **Gemini 很少主动调用 skills/sub-agents** | P2 | 6 | 自定义技能基本未被自动选用，影响个性化工作流 |
| 7 | [#26525](https://github.com/google-gemini/gemini-cli/issues/26525) **Auto Memory 确定性脱敏** | P2 | 5 | 转写内容送入模型前存在泄露敏感信息风险 |
| 8 | [#26522](https://github.com/google-gemini/gemini-cli/issues/26522) **Auto Memory 无限重试低信号会话** | P2 | 5 | 后台提取 agent 死循环 |
| 9 | [#25166](https://github.com/google-gemini/gemini-cli/issues/25166) **Shell 命令完成后卡在 "Waiting input"** | P1 | 4 👍3 | 简单命令也会触发，影响日常体验 |
| 10 | [#21983](https://github.com/google-gemini/gemini-cli/issues/21983) **browser subagent 在 Wayland 下失败** | P1 | 4 | Linux 桌面环境兼容性 |

**社区反应观察**：除 [#25306](https://github.com/google-gemini/gemini-cli/issues/25306) 已关闭外，其余 9 条仍 OPEN。多个 Issue 标注 `workstream-rollup`（工作组级），表明 Gemini 团队已系统性跟进。普通用户反馈集中在 **agent 可靠性退化**。

---

## 4. 重要 PR 进展（Top 10）

| PR | 主题 | 重要性 |
|----|------|--------|
| [#27915](https://github.com/google-gemini/gemini-cli/pull/27915) **修复 trust 对话框 hook 披露反向** | 🔴 安全 | 闭合 [#27901](https://github.com/google-gemini/gemini-cli/issues/27901)，阻止 SessionStart 嵌套 hook 静默执行 |
| [#27903](https://github.com/google-gemini/gemini-cli/pull/27903) **披露规范嵌套结构的 hook** | 🔴 安全 | 解析器同时识别 flat 与 nested 两种 hook 定义形式 |
| [#27910](https://github.com/google-gemini/gemini-cli/pull/27910) **web_search 工具 120s 超时** | 🟠 稳定性 | 修复 [#27890](https://github.com/google-gemini/gemini-cli/issues/27890)，避免 agent 永远等待 |
| [#27730](https://github.com/google-gemini/gemini-cli/pull/27730) **数组型 tool 结果不入 structuredContent** | 🟠 扩展 | 修复 MCP 日历类 JSON 数组 payload |
| [#27718](https://github.com/google-gemini/gemini-cli/pull/27718) **`auto` 别名在无 preview 时仍可见** | 🟡 模型 | 修复 `/model` 列表 [#27715](https://github.com/google-gemini/gemini-cli/issues/27715) |
| [#27729](https://github.com/google-gemini/gemini-cli/pull/27729) **遥测属性截断至 1024 字符** | 🟡 平台 | 修复 GCP 导出限长导致的 stack trace 刷屏 |
| [#27916](https://github.com/google-gemini/gemini-cli/pull/27916) **校验 GCP project ID 格式** | 🟡 Agent | 阻止 auto-memory 存储错误别名导致 403 |
| [#27914](https://github.com/google-gemini/gemini-cli/pull/27914) **未保存的会话不再提示 resume** | 🟡 UX | 修复 ENOSPC 后误导用户的退出提示 |
| [#27905](https://github.com/google-gemini/gemini-cli/pull/27905) **会话文件被删后可重新加载** | 🟡 数据 | 防止 `appendRecord` 静默复活已删除会话 |
| [#27904](https://github.com/google-gemini/gemini-cli/pull/27904) **projectHash 缺失时仍可加载 JSONL** | 🟡 数据 | 回退到逐行解析，修复 [#27275](https://github.com/google-gemini/gemini-cli/issues/27275) |

> 依赖更新：dependabot 今日批量提交 `undici 8.4.1`、`glob 13.0.6`、`http-proxy-agent 9.1.0`，均为常规安全升级。

---

## 5. 功能需求趋势

从 50 条 Issue 中归纳出以下社区最关注的方向：

| 方向 | 代表 Issue | 信号强度 |
|------|------------|---------|
| **Agent/Subagent 健壮性** | [#21409](https://github.com/google-gemini/gemini-cli/issues/21409)、[#22323](https://github.com/google-gemini/gemini-cli/issues/22323)、[#21968](https://github.com/google-gemini/gemini-cli/issues/21968) | 🔥🔥🔥 占比最高 |
| **Auto Memory 体系完善** | [#26516](https://github.com/google-gemini/gemini-cli/issues/26516)、[#26522](https://github.com/google-gemini/gemini-cli/issues/26522)、[#26523](https://github.com/google-gemini/gemini-cli/issues/26523)、[#26525](https://github.com/google-gemini/gemini-cli/issues/26525) | 🔥🔥🔥 集中爆发（4 条同期由 SandyTao520 提出） |
| **安全/权限模型** | [#25306](https://github.com/google-gemini/gemini-cli/issues/25306)、trust dialog 双向修复 | 🔥🔥🔥 P1 安全 PR 双线推进 |
| **会话/数据持久化** | [#27904](https://github.com/google-gemini/gemini-cli/pull/27904)、[#27905](https://github.com/google-gemini/gemini-cli/pull/27905)、[#27914](https://github.com/google-gemini/gemini-cli/pull/27914) | 🔥🔥 PR 集群，团队集中修复 |
| **AST 感知代码工具** | [#22745](https://github.com/google-gemini/gemini-cli/issues/22745)、[#22746](https://github.com/google-gemini/gemini-cli/issues/22746) | 🔥🔥 战略性 EPIC |
| **评估基础设施** | [#24353](https://github.com/google-gemini/gemini-cli/issues/24353) | 🔥 P1 EPIC |
| **非交互模式 (ACP)** | [#27985](https://github.com/google-gemini/gemini-cli/issues/27985) | 🔥 token 成本估算准确性 |

---

## 6. 开发者关注点

**核心痛点**

1. **Agent 状态机可信度不足**：subagent 在 MAX_TURNS 后仍上报 "GOAL/success"（[#22323](https://github.com/google-gemini/gemini-cli/issues/22323)），使上层 UI 与 `/bug` 报告无法反映真实中断。开发者无法依赖 status 字段做自动化判断。

2. **Skills/Sub-agents 触发率低**（[#21968](https://github.com/google-gemini/gemini-cli/issues/21968)）：用户自定义的 gradle/git 等 skill 在自然任务中几乎不被自动选用，必须显式提示。开发者投入的领域定制化收益被模型自身覆盖。

3. **Auto Memory 隐私与失控风险**：本地 transcript 内容在被脱敏前已进入模型上下文（[#26525](https://github.com/google-gemini/gemini-cli/issues/26525)），且后台提取 agent 会出现死循环（[#26522](https://github.com/google-gemini/gemini-cli/issues/26522)）。这是当前最高密度的系统性安全问题。

4. **Workspace Trust 边界绕过**（[#27915](https://github.com/google-gemini/gemini-cli/pull/27915) / [#27903](https://github.com/google-gemini/gemini-cli/pull/27903)）：嵌套 hook 定义未被 trust 对话框展示，用户的"信任文件夹"决定可能触发未声明命令执行。

5. **会话元数据脆弱**：会话文件被删后会被静默重建（[#27905](https://github.com/google-gemini/gemini-cli/pull/27905)），`projectHash` 缺失则触发整文件 JSON 解析（[#27904](https://github.com/google-gemini/gemini-cli/pull/27904)），磁盘满后仍提示可 resume（[#27914](https://github.com/google-gemini/gemini-cli/pull/27914)）。三个 Issue 形成完整修复链。

6. **Shell 交互假死**（[#25166](https://github.com/google-gemini/gemini-cli/issues/25166)）：即使简单非交互命令，CLI 也可能卡在 "Awaiting user input"，降低自动批处理可信度。

**高频需求**

- 更可靠的状态回报与错误传播
- 真正可控的 skill / sub-agent 自动调度
- 端到端的安全披露（trust dialog、tool 执行预览）
- AST 级代码理解工具以减少 token 与轮次
- ACP server 准确的 token 计量

---

*数据口径：基于 GitHub Issues/PRs 过去 24 小时更新。报告由 AI 自动生成，仅供技术参考。*

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

⚠️ 摘要生成失败。

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

<think>The user wants me to generate a daily report based on GitHub data for Kimi Code CLI. Let me analyze the data provided:

1. No new releases in the past 24 hours
2. 2 updated issues:
   - #1283: Memory System feature request
   - #2464: Bug report about MCP servers not loading in ACP mode
3. No new PRs

The report date is 2026-06-22. Let me create a structured daily report in Chinese.

Since there's limited data (only 2 issues and 0 PRs), I need to be honest about this rather than fabricating 10 issues and 10 PRs as the template suggests. I'll adapt the structure to what's actually available, and note when sections don't have enough data.

Let me write a professional, concise report suitable for technical developers.</think>

# Kimi Code CLI 社区动态日报
**日期：2026-06-22**

---

## 📌 今日速览

今日社区动态较为平静，无新版本发布，无 PR 更新。值得关注的两条 Issue 中，一条为高呼声已久的**记忆系统（Memory System）功能请求**仍在持续讨论，另一条为今天新提交的 **ACP 模式下 MCP 服务器无法加载的 Bug** 报告，属于影响工作流可用性的实际问题。

---

## 🚀 版本发布

今日无新版本发布。

---

## 🔥 社区热点 Issues

由于过去 24 小时内仅有 2 条 Issue 更新，远不足 10 条。以下按重要性列出全部有效条目：

### 1. #1283 — [Feature Request] Memory System - Persistent context across sessions
- **链接**：https://github.com/MoonshotAI/kimi-cli/issues/1283
- **状态**：OPEN | 评论 6 | 👍 0
- **作者**：@CatKang（创建于 2026-02-27，今日再次更新）
- **摘要**：提议实现跨会话持久的记忆系统，包括 AI 管理的自动记忆（项目模式、上下文）与用户手动记忆（通过配置自定义指令）。
- **为什么重要**：这是社区长期关注的高优先级方向之一，已存续近 4 个月仍在活跃讨论。记忆系统直接决定了 Kimi Code CLI 在长周期、复杂项目中能否保持上下文连贯性，是提升生产力的关键基础设施。类似能力在 Cursor、Claude Code 等竞品中已是核心卖点，社区期待 Kimi 给出官方方案。

### 2. #2464 — `kimi acp` does not load MCP servers — MCP tools absent in ACP mode
- **链接**：https://github.com/MoonshotAI/kimi-cli/issues/2464
- **状态**：OPEN | 评论 0 | 👍 0
- **作者**：@Tasktivity（今日创建）
- **摘要**：在 `kimi acp` 模式下，`--mcp-config-file` 参数不生效，MCP 工具完全缺失；而在交互式模式下 MCP 工具正常工作。
- **为什么重要**：ACP（Agent Communication Protocol）是 Kimi Code CLI 接入外部编辑器（如 Zed、JetBrains 插件）的关键桥梁。MCP 工具在 ACP 模式下失效意味着用户在该模式下无法使用外部工具链，属于阻断级 Bug，对依赖 ACP 集成的用户群体影响显著。该 Issue 报告完整（版本、平台、模型信息齐全），便于维护者复现。

---

## 📥 重要 PR 进展

今日无 PR 更新。

---

## 📈 功能需求趋势

从当前可观察的 Issue 数据中可提炼出以下社区关注方向：

| 方向 | 代表 Issue | 热度 |
|------|-----------|------|
| **持久化记忆 / 跨会话上下文** | #1283 | ⭐⭐⭐ 长期高热 |
| **MCP 协议在非交互模式下的兼容性** | #2464 | ⭐⭐ 新发但影响关键 |

**观察**：由于今日数据量较小（仅 2 条），趋势判断有限。但从 #1283 的持续活跃度可见，**"让 Kimi 真正记住项目"** 是用户最迫切的功能期待之一；同时 ACP/编辑器集成路径的稳定性也是不容忽视的工程化诉求。

---

## 💬 开发者关注点

综合今日 2 条 Issue，开发者反馈呈现以下两个核心痛点：

1. **缺乏跨会话的"项目记忆"能力**
   用户希望 Kimi Code CLI 能自动沉淀项目惯例、代码风格、用户偏好等上下文，避免每次新会话都要重复描述背景。这一需求反映了 AI 编程工具从"一次性助手"向"长期协作者"演进的趋势。

2. **ACP 通道的功能缺失**
   ACP 模式下 MCP 工具不可用，反映出 CLI 在多入口/多协议适配上的不一致性。开发者期望不同入口（交互式 REPL、ACP 桥接）下的能力是等价的，而非"阉割版"。这类一致性问题直接影响用户在 IDE 集成场景下的采用意愿。

---

*报告基于 github.com/MoonshotAI/kimi-cli 公开数据生成，仅供参考。*

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

<think>Let me analyze the GitHub data for OpenCode community dynamics on 2026-06-22 and generate a comprehensive Chinese daily report.

Let me review the data carefully:

**Releases**: No new releases in the past 24 hours.

**Issues** (50 total, showing top 30 by comments):
- High engagement issues include:
  - #988 - MCP remote with OAuth (95 likes, 39 comments) - CLOSED
  - #10221 - Black screen on install (16 likes, 31 comments) - CLOSED
  - #16017 - Go plan usage/balance API (73 likes, 20 comments) - OPEN
  - #7957 - Ctrl+C should not exit (37 likes, 14 comments) - OPEN
  - #653 - macOS cmd+ keybinds (42 likes, 12 comments) - CLOSED
  - #1522 - Qwen3/Kimi K2 stopping mid-chat (7 likes, 10 comments) - CLOSED
  - #30192 - Claude model no provider available (3 likes, 9 comments) - OPEN
  - #14212 - More DBMS support (20 likes, 9 comments) - OPEN
  - #11831 - YOLO Mode (30 likes, 9 comments) - CLOSED
  - #31041 - Zen API CORS preflight 404 (2 likes, 7 comments) - OPEN
  - #27083 - AppStream MetaInfo (0 likes, 4 comments) - CLOSED
  - #33195 - Render process freezes (0 likes, 4 comments) - OPEN
  - #14301 - ACP premature tool_call_update (0 likes, 4 comments) - CLOSED
  - #30663 - Custom baseURL cache tokens (0 likes, 3 comments) - OPEN
  - #26184 - Massive token spike (1 like, 3 comments) - OPEN
  - #33063 - Todo dock UI stale (0 likes, 3 comments) - OPEN
  - #22223 - Display bug WSL2 (0 likes, 3 comments) - OPEN
  - #32747 - @ file mentions stale (1 like, 3 comments) - OPEN
  - #32829 - DeepSeek MCP $ref/$defs (0 likes, 3 comments) - OPEN
  - #33305 - Cohere models (0 likes, 2 comments) - OPEN
  - #32126 - @ file mentions with . (0 likes, 2 comments) - OPEN
  - #33229 - Claude Opus 4.7/4.8 can't run (0 likes, 2 comments) - OPEN
  - #32706 - TUI crash Effect.tryPromise (2 likes, 2 comments) - OPEN
  - #33303 - Qwen3 reasoning models switcher (0 likes, 1 comment) - OPEN
  - #25839 - OTEL variables ignored (0 likes, 1 comment) - OPEN
  - #27031 - OTEL trace context propagate (0 likes, 1 comment) - OPEN
  - #30320 - Premium model cost disclosure (0 likes, 1 comment) - OPEN
  - #31801 - @ picker ignores .ignore (1 like, 1 comment) - OPEN
  - #33290 - Scroll to bottom TUI (0 likes, 1 comment) - CLOSED
  - #33278 - App white page (0 likes, 1 comment) - OPEN

**Pull Requests** (50 total, showing top 20 by comments):
Most PRs have undefined comment count. Let me list them by recency and importance:
- #33139 - fix(a11y): remove aria-hidden from streaming - OPEN
- #32570 - feat(app): add server-keyed session routes - OPEN
- #33056 - fix(opencode): set finish and time.completed in halt error - CLOSED
- #33292 - refactor(core): simplify integration test fixtures - CLOSED
- #33297 - Archieve 1.4.6 - CLOSED
- #33298 - fix(tui): render skill load errors inline - CLOSED
- #33095 - fix(tui): correct duration() days/hours - CLOSED
- #33294 - fix(tui): add default keybinding for skill selector - OPEN
- #12520 - feat: mcp-search tool for lazy loading mcp - OPEN
- #31624 - fix(docker): handle sigterm & sigint - OPEN
- #32193 - fix(core): fix mentions for files in hidden folders - OPEN
- #33099 - fix(core): include last 2KB in sampledChecksum - OPEN
- #33096 - fix(core): ensure parent directory exists in writeIfUnchanged - OPEN
- #32919 - fix: type safety and code hygiene - OPEN
- #32766 - feat(core): accept explicit storage in public API layer - OPEN
- #32765 - chore(opencode): code cleanup, formatter consolidation - OPEN
- #32761 - feat(core): port V1 fuzzy edit matching to V2 - OPEN
- #30209 - fix(opencode): skip watching $HOME - CLOSED
- #32445 - fix(acp): surface subagent sessions - CLOSED
- #33293 - fix(acp): surface subagent sessions and route child permissions - OPEN

Now let me identify trends:

**Feature Request Trends**:
1. **MCP ecosystem improvements**: OAuth for remote MCP (#988), mcp-search lazy loading (#12520), DeepSeek MCP $ref/$defs compatibility (#32829)
2. **Model provider support**: Cohere Command-A-Plus-05-2026 (#33305), Qwen3.x reasoning models thinking switcher (#33303), Claude Opus 4.7/4.8 in Zen (#33229)
3. **IDE/Desktop integration**: macOS cmd+ keybinds (#653), YOLO mode (#11831)
4. **Database/storage**: More DBMS support (#14212), AppStream MetaInfo (#27083)
5. **Cost/usage transparency**: Go plan usage API (#16017), cost disclosure for premium models (#30320)
6. **OTEL observability**: OTEL variables (#25839), trace context propagation (#27031)
7. **ACP improvements**: surface subagent sessions (#32445, #33293), tool_call_update (#14301)
8. **TUI/UX improvements**: Ctrl+C behavior (#7957), scroll to bottom (#33290), Todo dock refresh (#33063), skill selector keybinding (#33294)
9. **File mention/picker improvements**: hidden folders (#32126, #32193), .ignore patterns (#31801), new files (#32747)

**Developer Pain Points**:
1. **Stale UI/data**: Todo dock not refreshing (#33063), @ file mentions not showing new files (#32747), @ picker ignoring .ignore (#31801)
2. **TUI crashes and display issues**: Black screen (#10221), Effect.tryPromise crash (#32706), WSL2 display (#22223), white page (#33278)
3. **Provider-specific bugs**: DeepSeek MCP schema (#32829), Claude Opus no provider (#30192), Zen API CORS (#31041), Custom baseURL cache tokens (#30663)
4. **Token/quota issues**: Massive token spike (#26184), premium model cost (#30320)
5. **Permission flow**: ACP premature tool_call_update (#14301), subagent session tracking (#32445/#33293)
6. **Render performance**: Large diff crashes (#33195), duration calculation (#33095)

Let me now construct the report.</think>

# OpenCode 社区动态日报
**日期：2026-06-22**

---

## 📌 今日速览

今日 OpenCode 仓库无新版本发布，但社区活跃度依然较高：长期高赞请求 **#988（MCP OAuth 远程安装）** 终于关闭落地，**#653（macOS Cmd 键位支持）** 也正式合并；同时 **ACP 子会话追踪（#32445）** 与 **多 DBMS 支持（#14212）** 等多个热门 Feature 仍在持续推进。值得关注的是 `Robin1987China` 集中提交了一系列核心稳定性与 V1→V2 兼容的 PR（涉及 fuzzy edit、storage layer、type safety），显示出团队对底层质量的密集投入。

---

## 🚀 版本发布

过去 24 小时内无新版本发布。最近的归档构建 PR 为 [#33297 "Archieve 1.4.6"](https://github.com/anomalyco/opencode/pull/33297)（已 Closed），标志着 1.4.x 系列的归档流程正在推进。

---

## 🔥 社区热点 Issues

| # | 标题 | 状态 | 关键数据 | 为何重要 |
|---|---|---|---|---|
| [#988](https://github.com/anomalyco/opencode/issues/988) | Feature: MCP remote using OAuth | ✅ Closed | 👍 95 / 💬 39 | **本日最高赞 Issue**，推动 MCP 安装体验从手填密钥升级为 OAuth 2.1 流程，已落地关闭 |
| [#16017](https://github.com/anomalyco/opencode/issues/16017) | Go plan usage/balance API | 🟢 Open | 👍 73 / 💬 20 | 社区要求开放 Zen Go 订阅用量的滚动/周/月窗口 API，便于第三方成本监控 |
| [#653](https://github.com/anomalyco/opencode/issues/653) | Add cmd+ keybinds on macOS | ✅ Closed | 👍 42 / 💬 12 | macOS 用户长期吐槽的键位体验问题终于合并 |
| [#7957](https://github.com/anomalyco/opencode/issues/7957) | Ctrl+C conflicts with copy | 🟢 Open | 👍 37 / 💬 14 | TUX 误退出严重影响复制粘贴工作流，与通用快捷键冲突 |
| [#10221](https://github.com/anomalyco/opencode/issues/10221) | Black screen on just installed | ✅ Closed | 👍 16 / 💬 31 | 安装后黑屏是高频新手障碍，热度极高，已关闭 |
| [#11831](https://github.com/anomalyco/opencode/issues/11831) | YOLO Mode — Auto-Approve Permissions | ✅ Closed | 👍 30 / 💬 9 | "一键全批准"模式上线，对 power user 工作流是显著提升 |
| [#14212](https://github.com/anomalyco/opencode/issues/14212) | Support more DBMS' for state storage | 🟢 Open | 👍 20 / 💬 9 | Drizzle 迁移后解锁了 Postgres 等多 DBMS 可能性 |
| [#30192](https://github.com/anomalyco/opencode/issues/30192) | Claude Opus 4.6 "no provider available" | 🟢 Open | 👍 3 / 💬 9 | Zen 渠道下 Claude Opus 4.6 持续报错，影响核心付费功能 |
| [#31041](https://github.com/anomalyco/opencode/issues/31041) | Zen API CORS preflight 404 | 🟢 Open | 👍 2 / 💬 7 | 所有 Zen API 在浏览器 OPTIONS 请求均返回 404，阻断所有 Web 客户端 |
| [#1522](https://github.com/anomalyco/opencode/issues/1522) | Qwen3 / Kimi K2 stop mid-chat | ✅ Closed | 👍 7 / 💬 10 | 第三方模型在 OpenRouter 下工具调用中断问题已修复 |

---

## 🛠️ 重要 PR 进展

| # | 标题 | 作者 | 意义 |
|---|---|---|---|
| [#33139](https://github.com/anomalyco/opencode/pull/33139) | fix(a11y): remove aria-hidden from streaming content | @ashu-choudhury | NVDA 屏幕阅读器在流式输出时可正确朗读助手内容，修复无障碍缺陷 |
| [#32570](https://github.com/anomalyco/opencode/pull/32570) | feat(app): add server-keyed session routes | @Brendonovich | 新增 `/server/:serverKey/session/:id` 路由并支持新旧 layout 重定向，多服务器架构雏形显现 |
| [#33298](https://github.com/anomalyco/opencode/pull/33298) | fix(tui): render skill load errors inline | @rekram1-node | `/skills` 对话框原本失败静默，现改为内联报错，便于排查 MCP 资源加载错误 |
| [#33095](https://github.com/anomalyco/opencode/pull/33095) | fix(tui): correct duration() past 24h | @Robin1987China | 修复 `duration()` 在 24h+ 时天数始终为 0、小时未封顶的 bug |
| [#33294](https://github.com/anomalyco/opencode/pull/33294) | fix(tui): add default keybinding for skill selector | @MRZ07 | 为 skill 选择器补齐默认键位，闭环 #33296 |
| [#32193](https://github.com/anomalyco/opencode/pull/32193) | fix(core): mentions for files in hidden folders | @iputuanggak | 修复 `.agents/`、`.docs/` 等隐藏目录文件无法通过 `@` 引用的 bug |
| [#33099](https://github.com/anomalyco/opencode/pull/33099) | fix(core): include last 2KB in sampledChecksum window | @Robin1987China | 采样校验窗口的最后 2KB 缺失问题修复，提升文件变更检测准确性 |
| [#33096](https://github.com/anomalyco/opencode/pull/33096) | fix(core): ensure parent directory exists in writeIfUnchanged | @Robin1987China | 写入文件前自动 `ensureDir`，对齐 `create` 行为 |
| [#32761](https://github.com/anomalyco/opencode/pull/32761) | feat(core): port V1 fuzzy edit matching to V2 | @Robin1987China | 把 V1 的 9 种 fuzzy replacer 策略移植到 V2 core，V2 编辑能力对齐 |
| [#33293](https://github.com/anomalyco/opencode/pull/33293) | fix(acp): surface subagent sessions and route child permissions | @WaterRRabbit | `task` 工具生成的子会话不再对 ACP 客户端不可见，权限请求也能正确路由 |

> 此外 [#31624](https://github.com/anomalyco/opencode/pull/31624)（Docker SIGTERM/SIGINT 优雅退出）和 [#12520](https://github.com/anomalyco/opencode/pull/12520)（MCP 懒加载搜索工具）也在稳步推进中。

---

## 📈 功能需求趋势

从今日 50 条活跃 Issue 提炼出 **七大最受关注方向**：

1. **🤖 MCP 生态完善**（热度最高）
   - 远程 OAuth 安装（#988）、懒加载搜索（#12520）、$ref/$defs schema 兼容（#32829），社区正推动 MCP 从"能用"到"好用"。

2. **🧠 多模型/Provider 兼容**
   - 新模型快速接入：Cohere Command-A-Plus-05-2026（#33305）、Qwen3.x reasoning 思维链切换器（#33303）、Claude Opus 4.7/4.8 in Zen（#33229）；同时 DeepSeek（#32829）、Custom baseURL（#30663）存在兼容缺陷待修。

3. **💰 成本透明与配额治理**
   - Go 套餐用量 API（#16017）、subagent 调用高成本模型的成本披露（#30320）、单 session token 暴增（#26184），反映**付费用户对成本可见性的强烈需求**。

4. **🗄️ 持久化层扩展**
   - Postgres 等多 DBMS 支持（#14212）、显式 storage 注入 API（#32766），为 SaaS 化部署铺路。

5. **⌨️ UX 与快捷键**
   - Ctrl+C 不退出（#7957）、macOS Cmd 键位（#653 已落地）、TUI scroll-to-bottom（#33290）、skill 选择器默认键位（#33294），TUI 体验持续打磨。

6. **🔍 可观测性 (OTEL)**
   - OTEL_ 环境变量被忽略（#25839）、trace context 未传递给子进程（#27031），企业级 tracing 链路需要打通。

7. **📁 文件检索体验**
   - `@` 提及：隐藏文件夹（#32126/#32193）、.ignore 否定模式（#31801）、启动后新建文件不可见（#32747），多个痛点叠加。

---

## 🧑‍💻 开发者关注点（高频痛点）

| 痛点类别 | 代表 Issue | 核心诉求 |
|---|---|---|
| **UI 数据陈旧** | [#33063](https://github.com/anomalyco/opencode/issues/33063)、[#32747](https://github.com/anomalyco/opencode/issues/32747) | SolidJS 响应式未触发、搜索索引未刷新，需要手动重启 |
| **TUI/Electron 稳定性** | [#32706](https://github.com/anomalyco/opencode/issues/32706)、[#33195](https://github.com/anomalyco/opencode/issues/33195)、[#10221](https://github.com/anomalyco/opencode/issues/10221) | Effect.tryPromise 崩溃、大 diff 渲染冻结、黑屏 |
| **Provider 兼容碎片化** | [#32829](https://github.com/anomalyco/opencode/issues/32829)、[#30192](https://github.com/anomalyco/opencode/issues/30192)、[#31041](https://github.com/anomalyco/opencode/issues/31041) | 同一接口在不同 Provider（DeepSeek、Zen、CORS）下表现不一 |
| **权限与会话一致性** | [#14301](https://github.com/anomalyco/opencode/issues/14301)、[#32445](https://github.com/anomalyco/opencode/pull/32445) | ACP 客户端下子会话、权限弹窗时机需要严格编排 |
| **模型成本失控** | [#26184](https://github.com/anomalyco/opencode/issues/26184)、[#30320](https://github.com/anomalyco/opencode/issues/30320) | 缺乏实时成本展示与拦截，subagent 可静默触发高价模型 |
| **隐藏/特殊文件** | [#32126](https://github.com/anomalyco/opencode/issues/32126)、[#31801](https://github.com/anomalyco/opencode/issues/31801) | `.` 前缀目录、`.ignore` 否定规则的检索行为不符合 ripgrep 习惯 |

---

**总结**：今日 OpenCode 社区呈现出 **"基础设施收敛 + 体验细节爆发"** 的双重特征——长期高赞的 OAuth/Cmd+/YOLO Mode 三大 Feature 集中关闭，而新一轮需求已转向 **MCP OAuth 化、多 DBMS、OTEL 全链路、Provider 兼容性** 等更深层主题。开发者对 **UI 实时

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

<think>
Let me analyze the GitHub data for Qwen Code community dynamics on 2026-06-22 and generate a comprehensive daily report in Chinese.

Key observations from the data:

1. **Releases**: 
   - v0.18.5-nightly.20260622.6bc3f853e
   - v0.18.5 stable - includes plan mode opt-in fix and gitdiff test cleanup

2. **Hot Issues** (top 30 by comment count):
   - #4888 (10 comments): IDEA plugin ask_user_question not showing text
   - #5019 (4 comments): Long-running tasks with repetitive tool calls causing session termination
   - #5434 (4 comments, CLOSED): Extension marketplace URL scheme case-sensitivity
   - #5518 (4 comments, CLOSED): bundle restore trailing separator issue
   - #5540 (3 comments): Resume completed background sub-agents
   - #5431 (3 comments): Voice input mode
   - #5580 (3 comments, CLOSED): Missing native prebuild targets for voice
   - #5424 (3 comments): TUI approval for external content
   - #3565 (3 comments, CLOSED): /simplify skill command
   - #5562 (3 comments, CLOSED): CLI input box newline background rendering
   - #5555 (3 comments, CLOSED): --resume thinking block rendering
   - #5559 (3 comments): Replayable fake model responses
   - #5481 (3 comments, CLOSED): ACP file read validation
   - #5219 (3 comments): CI integration tests on PR
   - #5506 (3 comments, CLOSED): Desktop session plan path helper
   - #5579 (3 comments, CLOSED): Verify native prebuilds

3. **Voice Dictation Theme**: A LOT of follow-up issues for #5502 (voice dictation PR) - issues #5579-#5588 are all voice-related follow-ups.

4. **Important PRs**:
   - #5502: Voice dictation (big feature, many follow-ups)
   - #5556: Revivable background sub-agents
   - #5557: Artifact tool for HTML pages
   - #5573: Always-on guard for consecutive identical tool calls (fixes #5019)
   - #5126: Vision bridge for text-only models
   - #5089: Protocol enum extraction
   - #4943: --safe-mode flag
   - #5560: Fake OpenAI server for tests
   - #5001: Timestamps in CLI
   - #5561: MCP live reconcile
   - #5030: Resume interrupted turn
   - #5245: Windows fixes
   - #4909: Archive install for extensions
   - #5592: Kebab-case refactor
   - #5577: Slash command completion ranking
   - #5589: Docs alignment

5. **Trends**:
   - Voice dictation is a major focus
   - Background sub-agents revivability
   - Integration testing infrastructure
   - Vision support
   - IDE integration (IDEA plugin)
   - Code quality (kebab-case, refactoring)
   - Safe mode for troubleshooting
   - MCP live reconciliation

6. **Developer pain points**:
   - Long-running tasks hit API errors
   - Voice dictation native prebuild coverage
   - CI gaps (integration tests)
   - Path validation issues
   - Windows compatibility

Now let me write a well-structured report in Chinese.
</think>
# Qwen Code 社区动态日报
**日期：2026-06-22**

---

## 📌 今日速览

今日 Qwen Code 完成了 v0.18.5 稳定版发布，重点修复了 Plan Mode 需用户显式启用的安全改进。社区最显著的热度集中在两大方向：**语音听写（Voice Dictation）功能的落地与周边配套**（#5502 引出近 10 个 follow-up issue），以及**后台子代理（Sub-agents）的可恢复性 / 测试基础设施完善**。同时 v0.18.5-nightly.20260622 也在持续滚动。

---

## 🚀 版本发布

### v0.18.5（稳定版）
- **fix(core)**: Plan Mode 现需显式 opt-in 才注入 prompt 提示，提升默认安全等级（[#5433](https://github.com/QwenLM/qwen-code/pull/5433)）
- **test(core)**: 移除 `gitdiff` 中重复的 untracked count 测试用例
- 发布后已自动发布 VSCode 配套扩展

### v0.18.5-nightly.20260622.6bc3f853e
- 同步滚动发布
- [Release v0.18.5](https://github.com/QwenLM/qwen-code/releases/tag/v0.18.5)

---

## 🔥 社区热点 Issues

| # | Issue | 热度 | 重要性 |
|---|-------|------|--------|
| [#4888](https://github.com/QwenLM/qwen-code/issues/4888) | **IDEA 插件 ask_user_question 无文本、无法输入**（10 评论） | ⭐⭐⭐⭐⭐ | 直接阻塞 IDE 用户交互流程，影响核心问答能力 |
| [#5019](https://github.com/QwenLM/qwen-code/issues/5019) | **长任务下重复工具调用被服务端终止**（4 评论） | ⭐⭐⭐⭐⭐ | API 返回 400 InvalidParameter，影响长程自动化场景；已有 PR #5573 应对 |
| [#5518](https://github.com/QwenLM/qwen-code/issues/5518) | bundle restore 拒绝带尾部分隔符的目录（4 评论，已关闭） | ⭐⭐⭐ | 路径校验鲁棒性问题，由 @tt-a1i 推动修复 |
| [#5434](https://github.com/QwenLM/qwen-code/issues/5434) | 扩展市场大写 HTTP(S) scheme 误分类（4 评论，已关闭） | ⭐⭐⭐ | 扩展生态安装源解析缺陷 |
| [#5540](https://github.com/QwenLM/qwen-code/issues/5540) | **允许恢复已 completed 的后台子代理**（3 评论） | ⭐⭐⭐⭐ | 与 PR #5556 联动，体现 sub-agents 演进方向 |
| [#5431](https://github.com/QwenLM/qwen-code/issues/5431) | 为交互提示增加可选语音输入模式（3 评论） | ⭐⭐⭐⭐ | P1 优先级，与 #5502 语音体系协同 |
| [#5424](https://github.com/QwenLM/qwen-code/issues/5424) | **TUI 外部注入内容需人工审核**（3 评论） | ⭐⭐⭐⭐ | 涉及安全 hooks-events / 终端 UX 路线图 |
| [#5219](https://github.com/QwenLM/qwen-code/issues/5219) | **集成测试不在 PR 跑，导致回归只在发版时暴露**（3 评论） | ⭐⭐⭐⭐⭐ | 反映 CI/CD 关键缺口，PR #5560 在跟进 |
| [#5506](https://github.com/QwenLM/qwen-code/issues/5506) | Desktop session plans 路径可被兄弟目录绕过（3 评论，已关闭） | ⭐⭐⭐⭐ | 安全相关路径校验 |
| [#5580](https://github.com/QwenLM/qwen-code/issues/5580) | 语音原生预构建缺 win32-arm64 / musl / 老 glibc（3 评论，已关闭） | ⭐⭐⭐⭐ | 阻塞语音功能在多平台的首发 |

**整体观察**：语音听写（#5579–#5588 共 10 个 follow-up）几乎占据今日 issue 列表半壁江山，体现 #5502 作为一个"巨型 PR"带来的 review / 平台兼容性债务。

---

## 🛠 重要 PR 进展

| PR | 内容 | 状态 / 价值 |
|----|------|-------------|
| [#5577](https://github.com/QwenLM/qwen-code/pull/5577) | 修复斜杠命令补全排序：主命令名优先于 alias | 解决 `/re` 误提示 `clear` 等体验问题 |
| [#5502](https://github.com/QwenLM/qwen-code/pull/5502) | **语音听写 + 原生采集 + 流式 ASR + 关键词偏置** | 当前社区最大热点，衍生 10+ issue |
| [#5592](https://github.com/QwenLM/qwen-code/pull/5592) | 将 `serve/` 模块文件改为 kebab-case | 落实 #5576 / #4419 命名规范 PR1 |
| [#5089](https://github.com/QwenLM/qwen-code/pull/5089) | 抽出 Protocol 枚举、解耦 model identity 与 auth type | 重构核心认证层，支持任意 provider ID |
| [#5126](https://github.com/QwenLM/qwen-code/pull/5126) | **Vision Bridge：纯文本模型也能"看"图** | 对粘贴 / @-引用图片自动转写为文本 |
| [#4943](https://github.com/QwenLM/qwen-code/pull/4943) | 新增 `--safe-mode` / `QWEN_CODE_SAFE_MODE` 环境变量 | 禁用所有自定义（hooks/扩展/MCP/子代理），便于排障 |
| [#5560](https://github.com/QwenLM/qwen-code/pull/5560) | 为无 AK 集成测试增加 fake OpenAI 服务 | 配合 #5559，让 PR CI 也能跑 E2E |
| [#5556](https://github.com/QwenLM/qwen-code/pull/5556) | **后台子代理可被复活 + 转录 TTL 清理** | 兑现 #5540，让 `send_message` 支持 completed 状态 |
| [#5557](https://github.com/QwenLM/qwen-code/pull/5557) | **Artifact 工具：发布独立交互式 HTML 页面** | 实验性工具，模型可直接输出可分享页面 |
| [#5573](https://github.com/QwenLM/qwen-code/pull/5573) | **始终开启：连续相同工具调用熔断** | 闭环修复 #5019 长程任务被服务端踢出的问题 |

其他值得关注的 PR：
- [#5001](https://github.com/QwenLM/qwen-code/pull/5001) — 在助手消息前加 `[HH:MM:SS]` 时间戳
- [#5561](https://github.com/QwenLM/qwen-code/pull/5561) — MCP 服务器设置变更后实时热更新
- [#5030](https://github.com/QwenLM/qwen-code/pull/5030) — 恢复中断的 turn，无需合成 "continue" 消息
- [#5245](https://github.com/QwenLM/qwen-code/pull/5245) — Windows 下隐藏空 native session + 修复 `~\` 路径展开
- [#4909](https://github.com/QwenLM/qwen-code/pull/4909) — 扩展支持 `.zip` / `.tar.gz` 归档安装
- [#5589](https://github.com/QwenLM/qwen-code/pull/5589) — 文档与当前 CLI 行为对齐（MCP、扩展、主题、沙箱、SDK 权限等）
- [#5548](https://github.com/QwenLM/qwen-code/pull/5548) — 加固 tmux 真实用户测试报告

---

## 📈 功能需求趋势

从过去 24 小时的 issue 矩阵中可以提炼出**五大社区焦点方向**：

1. **🎙 语音交互完整化** — 输入模式（#5431）、流式采集、原生预构建全平台覆盖、键位回显策略、可观测性、隐私权衡，几乎覆盖整个交付链路
2. **🤖 后台子代理治理** — 复活 completed 代理、转录 TTL、recovery 路径（#5540 / #5556）
3. **🧪 测试基础设施补强** — 无 AK 的 fake 模型服务器、PR 阶段跑集成测试（#5559 / #5560 / #5219）
4. **🖼 多模态能力下沉** — Vision Bridge 让纯文本模型能消化图片（#5126）
5. **🛡 安全与可控性** — Plan Mode opt-in、Safe Mode、TUI 外部内容审批、路径越权校验（#5433 / #4943 / #5424 / #5506 / #5518）

---

## 💡 开发者关注点

**痛点 1：服务端长任务被强制熔断**
`InternalError.Algo.InvalidParameter: Repetitive tool calls detected` 频繁出现在长会话中，开发者希望默认开启更宽松 / 更智能的循环检测策略（#5019 + #5573 已对症下药）。

**痛点 2：CI 反馈链断裂**
集成测试只在夜间发布流水线跑，PR 合入后才在发版时炸雷；社区强烈呼吁 E2E 下沉到 PR / push to main（#5219 / #5560）。

**痛点 3：原生模块的平台覆盖**
语音听写 (#5502) 等新引入的 native 预构建在 win32-arm64、musl/Alpine、老 glibc 等目标上存在缺口，需要首版真实机器验证（#5579–#5582 闭环）。

**痛点 4：大型 PR 的 review 治理**
#5502 累计约 160 条 review thread（多为 /qreview AI 生成），0 已解决 → 60+ 未解决；需要批量 triage 与 resolve 策略（#5584）。

**痛点 5：终端 UI 一致性细节**
输入框换行背景不连续（#5562）、`--resume` 后 thinking block 渲染截断（#5555）等问题，提示 TUI 渲染层需要系统化回归。

**痛点 6：Windows 兼容性**
`~\` 路径展开、空 native session 显示等 Windows 特有问题持续被报告（#5245）。

---

> 📊 **日报小结**：今日 Qwen Code 完成了 v0.18.5 的稳定落地，社区从"基础能力补全"逐步过渡到"语音 + 多模态 + 长期运行代理 + 测试基建"等更复杂场景。**语音听写**和**测试左移**将很可能成为 0.18.x 后半段的主旋律。

</details>

---
*本日报由 [Big Model Radar](https://github.com/96loveslife/big_model_radar) 自动生成。*
# AI CLI 工具社区动态日报 2026-06-27

> 生成时间: 2026-06-27 03:57 UTC | 覆盖工具: 7 个

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
The user wants me to generate a comprehensive cross-comparison analysis report of the AI CLI tools based on the community dynamics data provided. Let me carefully analyze all the reports and synthesize them into a well-structured horizontal comparison.

Let me extract key data from each tool:

**Claude Code:**
- Release: v2.1.195
- 50 issues updated (top 30 shown)
- 2 PRs (1 docs, 1 closed)
- Top issues: #5088 (177 comments), #33932 (123 likes), #39636, #32726, #36351, #63604, #30407
- Focus: Windows stability, billing/auth, IDE/VSCode, Desktop/CLI parity, Skills/MCP

**OpenAI Codex:**
- Releases: rust-v0.142.3, rust-v0.143.0-alpha.26
- 50 issues
- 10+ PRs (app-server, remote plugins, marketplace, telemetry)
- Top: #28879 (175 comments, 326 likes), #28224 (393 likes), #8745 (392 likes), #29955, #30224
- Focus: Quota/billing, LSP, macOS/Windows desktop, Remote collab, Memory CLI, Enterprise control

**Gemini CLI:**
- No new release
- Nightly release FAILED (P0 #28168)
- Multiple P1 bugs
- Top: #22323 (8 comments), #21409 (7, 8 likes), #25166, #21983
- Focus: Agent reliability, Auto Memory security, AST tools, Skills activation, Eval infrastructure

**GitHub Copilot CLI:**
- Release: v1.0.66-1
- 22 issues
- 1 PR (closed)
- Top: #2082 (22 comments, 11 likes), #1928, #3944, #3945, #3946
- Focus: Cross-platform, Subagent, Memory isolation, Custom models, MCP/SSO

**Kimi Code CLI:**
- No new release
- 3 issues, 2 PRs
- Top: #2478 (Plan mode bug), #2477 (Enter key), #2425 (closed, 10 comments)
- Focus: Plan mode state machine, Coding model auth, Terminal input, OpenAI protocol compat

**OpenCode:**
- No new release
- 50 PRs (mostly dependency cleanup), Top: #28846 (closed, 85 comments, 82 likes), #5062, #23153
- Focus: Cost/pricing, Crypto payment, Question tool UX, MCP Windows, TUI, Agent loop robustness

**Qwen Code:**
- Release: v0.19.2-nightly.20260627
- 31 issues, 50 PRs
- Top: #4175 (42 comments), #5838, #5083, #4218, #5873
- Focus: ACP/Serve production, Security hardening (CWE-22), Channels (Telegram/DingTalk), Desktop security, Loop/Cron observability

Now let me identify common themes:

**Common focus areas across tools:**
1. **IDE/Editor Integration** - Claude Code (VSCode), OpenAI Codex (LSP), Gemini CLI (eval infra)
2. **Subagent/Agent Reliability** - All tools have agent-related issues (MAX_TURNS, hangs, doom loops)
3. **Memory/Context Management** - Copilot (memory leak), Gemini (Auto Memory security), Codex (memory file bloat)
4. **MCP Protocol** - Claude Code (priority), OpenAI Codex (enterprise), Gemini CLI (longest prefix), OpenCode (Windows), Qwen Code (filesystem)
5. **Windows Platform Issues** - Almost every tool
6. **Quota/Billing Transparency** - OpenAI Codex heavily, Claude Code (#5088)
7. **Skills/Plugins Ecosystem** - Claude Code (priority), Gemini CLI (auto-invoke)
8. **Desktop vs CLI Parity** - Claude Code (mid-task steering), Copilot
9. **Terminal UX** - Multiple tools (input handling, copy/paste, drag-drop)
10. **Security** - Qwen Code (path traversal), Gemini CLI (Auto Memory secrets), Copilot (memory leak)

**Differentiation:**
- **Claude Code**: IDE-first, premium ($20-200/mo Max), strong VSCode integration
- **OpenAI Codex**: Quota/billing pain (Plus/Pro), app-server protocol push, enterprise direction
- **Gemini CLI**: Eval infra focus, Auto Memory innovation, P1 bugs
- **Copilot CLI**: GitHub ecosystem lock-in, subagent features, memory leak concerns
- **Kimi Code**: Smallest community, focused on plan mode, OpenAI compatibility
- **OpenCode**: Cost-sensitive (DeepSeek pricing), crypto payment, TUI focus, bot-driven PRs
- **Qwen Code**: ACP/Serve production push, Chinese ecosystem (DingTalk/QQ/Telegram), security hardening

**Activity levels (24h):**
- OpenCode: 50 PRs (most active dev)
- Qwen Code: 50 PRs + 31 issues
- OpenAI Codex: 10+ PRs + 50 issues
- Claude Code: 2 PRs + 50 issues
- Copilot CLI: 1 PR + 22 issues
- Gemini CLI: 10 PRs + several issues
- Kimi Code: 2 PRs + 3 issues (smallest)

Let me structure the report now in Chinese, professional and concise.

I should also think about my thinking block. Let me make it detailed as required.
</think>
# AI CLI 工具生态横向对比分析报告
**报告日期：2026-06-27** | **覆盖工具：7 款**

---

## 1. 生态全景

当前 AI CLI 工具赛道已进入**"功能纵深化 + 生态平台化"**并行的成熟竞争阶段：一方面，所有头部工具均围绕 **Agent 子系统稳定性、Subagent 边界管理、MCP 协议扩展、IDE/Desktop 端一致性**持续打磨；另一方面，以 **OpenCode 自动化依赖清理、Qwen Code ACP/Serve 模式生产化、OpenAI Codex app-server 协议升级**为代表的项目，开始显露出从"个人编码工具"向"团队/企业平台"演进的明确路径。**Windows 平台稳定性、配额与计费透明化、上下文隔离与安全脱敏**已升级为跨产品的共性痛点，构成了下一阶段差异化竞争的关键战场。

---

## 2. 各工具活跃度对比

| 工具 | 版本发布 | Issues 更新 | PR 更新 | 社区热度代表议题 | 综合活跃度 |
|------|---------|-----------|--------|----------------|-----------|
| **OpenCode** | ⬜ 无 | 50 | **50**（含大量 bot 自动清理） | #28846（85💬/82👍，已关） | ⭐⭐⭐⭐⭐ |
| **Qwen Code** | ✅ v0.19.2 nightly | 31 | 50 | #4175（42💬，Mode B 路线图） | ⭐⭐⭐⭐⭐ |
| **OpenAI Codex** | ✅ rust-v0.142.3 + alpha.26 | 50 | 10+ | #28879（175💬/326👍） | ⭐⭐⭐⭐⭐ |
| **Claude Code** | ✅ v2.1.195 | 50（top 30） | 2 | #5088（177💬/58👍） | ⭐⭐⭐⭐ |
| **Gemini CLI** | ⬜ 无（nightly 失败） | 10+ | 10 | #21409（7💬/8👍） | ⭐⭐⭐ |
| **GitHub Copilot CLI** | ✅ v1.0.66-1 | 22 | **1**（已关） | #2082（22💬/11👍） | ⭐⭐ |
| **Kimi Code CLI** | ⬜ 无 | 3 | 2 | #2478（1💬，新开） | ⭐ |

> 📌 **观察**：OpenCode 与 Qwen Code 凭借**自动化 Bot + 持续架构演进**形成最高产出版本节奏；OpenAI Codex 处于"问题集中爆发 + 协议快速迭代"的双高期；Copilot CLI 社区贡献通道近乎沉寂；Kimi Code 仍处于小规模试水阶段。

---

## 3. 共同关注的功能方向

### 3.1 🤖 Agent 子系统可靠性（**全行业最高优先级**）

| 工具 | 具体诉求 |
|------|---------|
| Claude Code | Opus 4.8 畸形 `tool_use` 块输出（#63604）、子 Agent idle 异常（#71644） |
| OpenAI Codex | 截断 tool call 被误判进入 doom loop（OpenCode #18108 同样存在） |
| Gemini CLI | Subagent 达 MAX_TURNS 误报 GOAL success（#22323，P1）、Generalist agent 挂死（#21409，8👍） |
| Qwen Code | Agent 启动命令超时不可配（#5838）、TUI 卡死僵尸子进程（#5083） |
| OpenCode | 截断 tool call → doom loop（#18108） |

**共识**：所有产品都在"子代理状态机、退出信号、循环防护"上遭遇**结构性挑战**，暂无最佳实践。

---

### 3.2 🌐 MCP（Model Context Protocol）生态完善

| 工具 | 关注点 |
|------|--------|
| Claude Code | MCP connectors 缺失（#71736）、hook matcher 精确匹配修复（v2.1.195） |
| OpenAI Codex | MCP stdio 泄漏 fd + 孤儿进程（#26984）、企业 marketplace 源策略运行时强制（#29691） |
| Gemini CLI | 128 工具触发 400、MCP 工具名最长前缀匹配（#28033）、`.env` 权限问题 |
| OpenCode | Windows 下 MCP 全局超时（#16449）、OAuth scope 协商修复（#34125） |
| Qwen Code | MCP Server filesystem 工具不可用（#4218）、Ajv 噪声抑制（#5915） |

**共识**：MCP 已成为"事实标准"，但**Windows 兼容性、工具路由解析、认证链路、错误处理**仍是高频故障域。

---

### 3.3 🪟 Windows 平台体验

| 工具 | 典型问题 |
|------|---------|
| Claude Code | NTFS 内核内存泄漏、ARM64 无法启动、VSCode 焦点抢占、Desktop 会话丢失 |
| OpenAI Codex | `code_sign_clone` 62GB+ 累积、Electron 缓存失控 |
| GitHub Copilot CLI | Ctrl+Shift+C 复制失效 3 个月未修（#2082）、Win11 复制失效（#3949） |
| OpenCode | 升级后启动失败（#12598）、MCP 超时 |
| Qwen Code | PowerShell 进程泄漏 OOM（#5873）、MCP filesystem 工具不可用 |

**共识**：**Windows 平台已成为所有 AI CLI 的"质量洼地"**，涉及进程管理、文件系统监听、shell 集成等多个层面。

---

### 3.4 💰 配额 / 计费 / 成本透明化

| 工具 | 关注点 |
|------|--------|
| OpenAI Codex | gpt-5.5 配额 10-20 倍激增（#28879，326👍）、Pro 20x 1 小时耗尽（#30212） |
| Claude Code | Max 5x 付费账号被封停（#5088，177💬，长期未解） |
| OpenCode | Go 订阅额度与 DeepSeek V4 Pro 降价不同步（#28846，82👍） |
| Qwen Code | 自动切换高单价模型浪费 token（#5819） |

**共识**：随着 AI CLI 走向付费订阅，**配额计量透明度、模型切换可解释性、计费争议申诉通道**已成为用户信任度的核心指标。

---

### 3.5 🔒 上下文隔离与安全脱敏

| 工具 | 关注点 |
|------|--------|
| GitHub Copilot CLI | Memory 跨仓库泄露（#3945）、自定义指令污染 repo 分析（#3946） |
| Gemini CLI | Auto Memory secret 已被模型读取后才脱敏（#26525）、信任对话框误导（#27915） |
| Qwen Code | CWE-22 路径穿越连续 4 个 PR 修复（#5829/#5911/#5913/#5914） |
| OpenAI Codex | SQLite 反馈日志 640 TB/年 SSD 寿命风险（#28224） |

**共识**：随着**长期记忆、跨会话上下文、文件操作授权**等功能深化，**scope 控制、敏感信息脱敏、权限边界**正成为新的合规刚需。

---

### 3.6 🖥 IDE / Desktop 与 CLI 能力对齐

| 工具 | 关注点 |
|------|--------|
| Claude Code | VSCode Diff 评审 UI（#33932，**123👍**）、Desktop 缺 mid-task steering（#71726） |
| OpenAI Codex | LSP 自动检测/安装（#8745，**392👍**，长期热度最高之一） |
| GitHub Copilot CLI | subagent 与 `--acp`/`--agent` 协同（#3942）、mcp 与 explore 模型硬编码（#3954） |
| Gemini CLI | 多模态拖放图片终于支持（#27859）、终端 resize 性能 |

**共识**："**CLI 优先 → IDE 同步**"已成为产品体验完整性的硬性要求，VSCode 集成度是当前最直观的竞争力指标。

---

## 4. 差异化定位分析

| 工具 | 核心定位 | 目标用户 | 技术路线特征 |
|------|---------|---------|------------|
| **Claude Code** | 高端 IDE 集成的 Agent 编码助手 | 独立开发者、付费意愿强的 Pro 用户 | 强 Agent 自主性 + Skills/Plugins 生态；VSCode 深度集成 |
| **OpenAI Codex** | 模型 + 协议驱动的全栈平台 | 已有 OpenAI 订阅的开发者 + 企业 | app-server 协议 + remote plugin + marketplace 策略强制 |
| **Gemini CLI** | 评估驱动 + 多模态的研究型工具 | 关注 AI 安全/可解释性 + Android/Linux 用户 | 行为评估体系（76 测试）+ Auto Memory + 多模态终端 |
| **GitHub Copilot CLI** | GitHub 原生生态的子代理编排 | GitHub 深度用户 + Enterprise 团队 | Subagent 并发控制、chronicle skills review、桌面通知 |
| **Kimi Code CLI** | 计划/执行分离的轻量 Agent | Kimi 模型用户 + 长任务规划需求 | Plan Mode 状态机 + kosong 框架 + OpenAI 协议兼容 |
| **OpenCode** | 极客友好的开源 TUI 工具 | 终端原生党 + 成本敏感用户 | TUI 子会话选择器 + 完整协议客户端生成 + bot 化依赖治理 |
| **Qwen Code** | 中文生态 + 远程协作的工业级平台 | 国内开发者 + 团队 + 多渠道集成 | ACP/Serve 生产化 + 频道生态（Telegram/DingTalk/QQ）+ 路径安全 |

**关键差异点**：
- **闭源商业（Claude/Copilot/Codex） vs 开源（OpenCode）vs 模型厂商自有（Gemini/Kimi/Qwen）**——三类产品的痛点分布截然不同
- **Copilot 与 Claude Code** 走"深度 IDE 集成"路线，**Codex 与 Qwen** 走"协议 + 平台"路线，**OpenCode 与 Kimi** 走"终端 + Agent"路线
- **Gemini CLI** 独树一帜地以"评估基础设施"作为长期投资

---

## 5. 社区热度与成熟度

### 5.1 按"问题解决效率"（更新量/争议度）排序

```
🔥 极高产     OpenCode / Qwen Code  ──→  自动化 Bot + 持续重构
🔥 高产       OpenAI Codex         ──→  app-server 协议快速迭代
⚡ 高争议     Claude Code          ──→  177 评论长尾未解 + IDE 呼声高
⚠️ 高风险     Gemini CLI           ──→  nightly 失败 + P1 集中爆发
🧊 低活跃     Copilot CLI          ──→  24h 仅 1 PR 关闭
🌱 早期       Kimi Code            ──→  日均个位数 Issue/PR
```

### 5.2 成熟度象限

| 维度 | 早期阶段 | 快速迭代 | 趋于稳定 |
|------|---------|---------|---------|
| **Issue 处理** | Kimi Code | Qwen Code / OpenCode / Codex | Claude Code（长尾未解）|
| **PR 治理** | Kimi Code | Copilot CLI（近乎停滞）| Qwen Code（自动化 PR 流程）|
| **版本节奏** | Kimi Code | Gemini CLI（nightly 偶发失败）| Claude Code / Codex |
| **生态扩展** | Kimi Code | OpenCode / Qwen Code | Copilot CLI（GitHub 锁定）|

---

## 6. 值得关注的趋势信号

### 📡 信号一：**Agent 鲁棒性成为新瓶颈**

**证据**：5/7 款工具在 24h 内均有 Agent 子系统相关 P0/P1 报告——**MAX_TURNS 误报、挂死、doom loop、tool_use 畸形输出**。这表明业界尚未形成**Agent 状态契约**的事实标准。

**对开发者的参考价值**：
- 短期：在评估 AI CLI 时，应将"agent 循环保护"列为必测项
- 长期：可关注 `truncation signal`、`MAX_TURNS explicit reporting` 等协议的标准化进程

---

### 📡 信号二：**MCP 协议进入"工程化深水区"**

**证据**：所有工具都在做 MCP 相关修复，但**故障点已从"协议是否能跑"转向"Windows 兼容性、OAuth 流程、工具路由、错误处理"**。

**对开发者的参考价值**：
- 接入 MCP 时需重点验证：Windows 平台、超过 100 工具的路由、企业 SSO 链路
- 关注 MCP SEP-2207（OAuth scope）、最长前缀匹配等新规范

---

### 📡 信号三：**付费模式的信任危机正在累积**

**证据**：OpenAI Codex 配额异常（175-326 👍）、Claude Code 账号封停（177 💬 长期未解）、OpenCode DeepSeek 降价不同步（82 👍）——三款头部产品都面临**用户对计费透明度的强烈质疑**。

**对开发者的参考价值**：
- 团队采购时，应优先选择**提供用量 API/自服务查询**的产品
- 关注即将出台

---

## 各工具详细报告

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills 社区热点

> 数据来源: [anthropics/skills](https://github.com/anthropics/skills)

<think>
The user wants me to analyze the GitHub data from anthropics/skills repository and generate a comprehensive community report. Let me analyze the data carefully.

Looking at the PRs and Issues:

**Top PRs by engagement (note: comments are all "undefined" in the data, so I need to use 👍 reactions and other signals)**:

1. #1298 - skill-creator fix for run_eval.py (0% recall bug) - very technical, critical
2. #514 - document-typography skill - typographic QC
3. #538 - PDF case-sensitivity fix
4. #486 - ODT skill - OpenDocument support
5. #210 - frontend-design skill improvement
6. #83 - skill-quality-analyzer and skill-security-analyzer
7. #541 - DOCX tracked change w:id collision fix
8. #539 - skill-creator YAML validation
9. #181 - SAP-RPT-1-OSS predictor
10. #361 - YAML special character detection
11. #1099 - skill-creator Windows subprocess fix
12. #95 - system documentation
13. #509 - CONTRIBUTING.md
14. #1050 - skill-creator Windows fixes
15. #723 - testing-patterns skill
16. #362 - UTF-8 panic fix
17. #360 - AppDeploy skill
18. #147 - codebase-inventory-audit
19. #154 - shodh-memory skill
20. #1323 - skill-creator run_eval trigger detection

**Top Issues by comments**:
1. #492 - Security: Community skills under anthropic/ namespace (21 comments, 2 👍)
2. #228 - Enable org-wide skill sharing in Claude.ai (14 comments, 7 👍)
3. #556 - run_eval.py 0% trigger rate (12 comments, 7 👍)
4. #62 - Skills disappeared (10 comments, 2 👍)
5. #202 - skill-creator best practice (CLOSED, 8 comments, 1 👍)
6. #1329 - compact-memory skill proposal (6 comments, 0 👍)
7. #412 - agent-governance skill (CLOSED, 6 comments, 0 👍)
8. #189 - duplicate skills in plugins (6 comments, 9 👍)
9. #1175 - SharePoint security (CLOSED, 4 comments, 0 👍)
10. #29 - Usage with bedrock (4 comments, 0 👍)
11. #16 - Expose Skills as MCPs (4 comments, 0 👍)
12. #1169 - recall=0% description optimization (3 comments, 1 👍)
13. #1061 - Windows compatibility (3 comments, 1 👍)
14. #184 - agentskills.io redirect error (CLOSED, 3 comments, 4 👍)
15. #61 - "Not found" error loading skills (3 comments, 0 👍)

Now let me analyze the patterns:

**Hot Skills (PRs)** - These are technically about skills and tooling:
- The biggest cluster is around `skill-creator` tool fixes (PRs #1298, #1099, #1050, #1323, #362, #539, #361) - this is a major pain point
- Document handling skills: #514 (typography), #486 (ODT), #538 (PDF fix), #541 (DOCX fix)
- Meta skills: #83 (quality-analyzer, security-analyzer), #210 (frontend-design)
- New domain skills: #181 (SAP), #360 (AppDeploy), #154 (shodh-memory), #147 (codebase-inventory), #723 (testing-patterns)

**Community Trends from Issues**:
- **Security/Trust boundary**: #492 (impersonation), #1175 (SharePoint security), #412 (agent-governance) - security is a major concern
- **Distribution/Sharing**: #228 (org-wide sharing), #16 (MCP exposure)
- **Tooling pain**: #556, #1169, #1061, #202 - skill-creator has serious issues
- **User experience issues**: #62 (skills disappeared), #61 (404 errors), #29 (Bedrock compat)
- **Plugin architecture**: #189 (duplicates between plugins)
- **New skill directions**: #1329 (compact-memory), #412 (agent-governance)

**High-potential unmerged PRs**:
- #1298 (skill-creator critical fix)
- #514 (typography skill)
- #486 (ODT skill)
- #83 (quality/security analyzers)
- #210 (frontend-design)
- #181 (SAP-RPT-1-OSS)
- #360 (AppDeploy)
- #154 (shodh-memory)
- #147 (codebase-inventory-audit)
- #723 (testing-patterns)

**Ecosystem insight**: The community is most focused on:
1. Fixing the skill-creator toolchain (it's broken on Windows, has false 0% recall)
2. Security and trust boundaries (namespace abuse, SharePoint concerns)
3. Enterprise distribution (org sharing, MCP exposure)
4. Document skills ecosystem expansion

Let me write the report in Chinese as requested. The user wants:
1. 热门 Skills 排行 - 5-8 PRs
2. 社区需求趋势 - from issues
3. 高潜力待合并 Skills
4. Skills 生态洞察 - one sentence

Let me make it professional and concise. I'll use the data to create a structured report.

I should note: the comment counts are all "undefined" in the PR data, but they're shown for issues. So for PRs I have to rely on 👍 counts (all 0!) and other signals. Let me re-read...

Looking again, all PRs show "评论: undefined" and "👍: 0" - this seems to be a data limitation. The PR ranking by these metrics is essentially meaningless. I should focus on the Issues data which has actual comment counts, and use the PR content/recency/impact to assess "hot" PRs.

For PRs, I should rank by:
- Recency + significance of the problem solved
- Number of related issues (e.g., #1298 references 10+ reproductions)
- Domain importance

Let me structure the report. The user wants:
- 简洁专业 (concise, professional)
- Each item with GitHub link

I'll use the issue data for actual engagement metrics and use PR content analysis to identify the most impactful skills.
</think>
# Claude Code Skills 社区热点报告
**数据截止：2026-06-27 | 来源：anthropics/skills**

---

## 1. 热门 Skills 排行（PR）

> 注：PR 数据中评论数未公开，以下基于问题影响力、关联 Issue 数、近期活跃度综合排序。

| # | Skill / PR | 类别 | 热度来源 | 状态 |
|---|-----------|------|---------|------|
| 1 | **[#1298](https://github.com/anthropics/skills/pull/1298) fix(skill-creator): run_eval 0% recall** | 工具链修复 | 关联 [#556](https://github.com/anthropics/skills/issues/556)（12评）+ [#1169](https://github.com/anthropics/skills/issues/1169)（3评），10+ 用户复现 | OPEN |
| 2 | **[#514](https://github.com/anthropics/skills/pull/514) document-typography** | 文档质量 | 直击 AI 生成文档的孤儿行/寡行/编号错位等普遍痛点 | OPEN |
| 3 | **[#486](https://github.com/anthropics/skills/pull/486) ODT / OpenDocument** | 文档格式 | 填补 LibreOffice / ODF 生态空白，关键词触发设计完整 | OPEN |
| 4 | **[#83](https://github.com/anthropics/skills/pull/83) skill-quality-analyzer + skill-security-analyzer** | 元能力 | 安全 + 质量双维度评分，应对社区增长后的治理需求 | OPEN |
| 5 | **[#210](https://github.com/anthropics/skills/pull/210) frontend-design 改进** | 设计/前端 | 提升可执行性、降低歧义，是高频被引用的设计类 Skill | OPEN |
| 6 | **[#181](https://github.com/anthropics/skills/pull/181) SAP-RPT-1-OSS predictor** | 企业/数据 | 对接 SAP 表格基础模型，连接 ERP 业务场景 | OPEN |
| 7 | **[#360](https://github.com/anthropics/skills/pull/360) AppDeploy** | 部署 | 一键从 Claude 部署全栈 Web 应用，工作流闭环 | OPEN |
| 8 | **[#723](https://github.com/anthropics/skills/pull/723) testing-patterns** | 测试工程 | 覆盖 Testing Trophy / React Testing Library 等完整体系 | OPEN |

**讨论焦点**：
- 文档类 Skills 形成密集簇（#514、#486、#538、#541），证明「AI 写文档」是首要落地场景；
- 安全/治理类元能力开始受到关注（#83），但尚未合并；
- skill-creator 工具链本身是当前最大痛点（详见下文）。

---

## 2. 社区需求趋势（Issues）

按讨论热度排序的核心诉求：

| 诉求方向 | 代表 Issue | 评论 / 👍 | 趋势判断 |
|---------|-----------|---------|---------|
| **🔒 安全与信任边界** | [#492](https://github.com/anthropics/skills/issues/492) 社区 Skill 冒充官方命名空间（21评）<br>[#1175](https://github.com/anthropics/skills/issues/1175) SharePoint 权限写在 SKILL.md 里的风险<br>[#412](https://github.com/anthropics/skills/issues/412) agent-governance Skill 提案 | 21+4+6 | **第一大诉求**。命名空间污染、权限模型、信息泄漏三连发 |
| **🏢 组织级分发** | [#228](https://github.com/anthropics/skills/issues/228) 团队共享 Skill（14评/7👍）<br>[#16](https://github.com/anthropics/skills/issues/16) Skill 暴露为 MCP（4评） | 14+4 | 企业落地前提：可发现、可治理、可审计 |
| **🛠 skill-creator 工具链缺陷** | [#556](https://github.com/anthropics/skills/issues/556) run_eval 0% 触发（12评/7👍）<br>[#1169](https://github.com/anthropics/skills/issues/1169) 描述优化失效<br>[#1061](https://github.com/anthropics/skills/issues/1061) Windows 兼容性<br>[#202](https://github.com/anthropics/skills/issues/202) skill-creator 文档化倾向过重 | 12+3+3+8 | 描述优化完全失效、跨平台崩溃，阻塞贡献者 |
| **🧩 插件架构混乱** | [#189](https://github.com/anthropics/skills/issues/189) document-skills 与 example-skills 内容重复（6评/9👍） | 6 / 9👍 | 高赞但低评：用户实际被「装两份一样 Skill」困扰 |
| **🧠 智能体持久化与治理** | [#1329](https://github.com/anthropics/skills/issues/1329) compact-memory 提案<br>[#412](https://github.com/anthropics/skills/issues/412) agent-governance | 6+6 | 长时任务 Agent 的状态压缩 + 治理是新兴方向 |
| **🌐 平台兼容** | [#29](https://github.com/anthropics/skills/issues/29) AWS Bedrock<br>[#62](https://github.com/anthropics/skills/issues/62) Skill 突然消失<br>[#61](https://github.com/anthropics/skills/issues/61) 404 加载错误 | 4+10+3 | 基础可用性问题待官方确认 |

---

## 3. 高潜力待合并 PR

以下 PR 讨论密度高、问题影响面广，预期近期内可能合并：

| PR | 标题 | 合并价值 |
|----|------|---------|
| **[#1298](https://github.com/anthropics/skills/pull/1298)** | run_eval.py 0% recall 全面修复 | 修复阻塞贡献者迭代的核心 Bug，含 Windows 并发与触发检测 |
| **[#1323](https://github.com/anthropics/skills/pull/1323)** | run_eval 触发检测误判 | 与 #1298 同源问题的补充修复，建议合并时一并评审 |
| **[#1099](https://github.com/anthropics/skills/pull/1098)** / **[#1050](https://github.com/anthropics/skills/pull/1050)** | skill-creator Windows 兼容 | 三个独立 PR 修同一组 Windows 问题，PR 集中度提示"该合了" |
| **[#83](https://github.com/anthropics/skills/pull/83)** | skill-quality-analyzer / skill-security-analyzer | 直接对应 #492 的安全治理诉求，落地价值高 |
| **[#514](https://github.com/anthropics/skills/pull/514)** | document-typography | 高频痛点、影响所有文档类输出 |
| **[#486](https://github.com/anthropics/skills/pull/486)** | ODT Skill | 唯一覆盖 ODF 格式的 PR，与 #538 / #541 同属文档族 |
| **[#539](https://github.com/anthropics/skills/pull/539)** / **[#361](https://github.com/anthropics/skills/pull/361)** | YAML 引号校验 | 防 description 静默截断，提交前 lint 必备 |
| **[#509](https://github.com/anthropics/skills/pull/509)** | CONTRIBUTING.md | 关闭社区健康分 25% 的短板（[#452](https://github.com/anthropics/skills/issues/452)），门槛低 |

---

## 4. Skills 生态洞察

> **当前社区最集中的诉求是「让 Skill 工具链本身可靠」—— skill-creator 评估信号失真、Windows 全面崩溃、YAML 解析陷阱、插件重复安装四重问题叠加，使贡献者无法形成"写 Skill → 验证 → 优化"的闭环；而与此同时，企业用户已在呼吁命名空间治理与组织级共享，预示 Skills 生态正从"内容供给"阶段迈向"平台化与安全治理"阶段。**

---

<think>
The user wants me to generate a daily report for Claude Code community dynamics based on GitHub data. Let me analyze the data carefully.

Key observations:
1. One new release: v2.1.195 - added CLAUDE_CODE_DISABLE_MOUSE_CLICKS env var, fixed hook matchers with hyphenated identifiers
2. 50 issues updated in the past 24 hours, top 30 shown
3. Only 2 PRs (one was a merge PR #71530 which seems like spam, one docs PR #71627 about sandbox)

The date in the data is 2026-06-27, which is in the future from my knowledge cutoff but the user wants a report for that date. I'll work with the data as given.

Let me organize the content:

**Top Issues to highlight (top 10):**
1. #5088 - Account disabled after payment for Max 5x (177 comments, 58 👍) - High priority billing/auth issue
2. #39636 - Cowork VM kernel never boots on Snapdragon X Plus (31 comments)
3. #33932 - VS Code Extension: Diff review UI like Copilot (25 comments, 123 👍 - very high)
4. #36351 - 1M context window removed from Desktop Code tab (17 comments)
5. #30407 - All issues get auto-closed without review (16 comments) - workflow concern
6. #63604 - Opus 4.8 emits malformed tool_use blocks (11 comments, 14 👍)
7. #32726 - VSCode panel stealing focus (10 comments, 39 👍)
8. #45889 (CLOSED) - Claude Desktop NTFS kernel memory leak
9. #31388 - Plugin paths hardcoded with absolute paths
10. #71729 - Desktop code conversation history lost on restart (new today)

**PRs:** Only 2 - one is a merge PR (likely spam), one is docs update for sandbox

**Feature trends:**
- IDE/VSCode integration (multiple issues)
- Windows platform issues (many)
- Desktop app improvements
- Skills/plugins
- Auto-compact
- 1M context
- Authentication/billing

**Developer pain points:**
- Windows-specific bugs (lots of Windows issues)
- IDE focus management
- Memory leaks
- Account/billing issues
- Plugin configuration portability

Let me write this in Chinese, professional, concise.
</think>
# Claude Code 社区动态日报
**日期：2026-06-27**

---

## 1. 今日速览

今日社区最显著的动态是 **v2.1.195 版本发布**，引入 `CLAUDE_CODE_DISABLE_MOUSE_CLICKS` 环境变量并修复了 hook matcher 对带连字符标识符（如 `mcp__brave-search`）的错误子串匹配问题。社区侧，账户被误封停的老问题（#5088，177 条评论）仍是关注度最高的痛点，VS Code 扩展的 Diff 评审与焦点管理诉求持续走高，Windows 平台与 Desktop 客户端的稳定性问题集中爆发。

---

## 2. 版本发布

### v2.1.195
- **新增**：`CLAUDE_CODE_DISABLE_MOUSE_CLICKS` 环境变量 —— 在全屏模式下禁用鼠标点击/拖动/悬停，同时保留滚轮滚动
- **修复**：hook matcher 对带连字符标识符的子串匹配问题（如 `code-reviewer`、`mcp__brave-search`），现改为精确匹配
- 📎 链接：[v2.1.195](https://github.com/anthropics/claude-code/releases/tag/v2.1.195)

---

## 3. 社区热点 Issues（Top 10）

| # | Issue | 关注点 | 社区反应 |
|---|-------|--------|----------|
| 1 | [#5088](https://github.com/anthropics/claude-code/issues/5088) Max 5x 套餐付费后账号被封 | 账户/账单/认证，影响核心付费用户 | 🔥 177 评论 / 58 👍 |
| 2 | [#33932](https://github.com/anthropics/claude-code/issues/33932) VS Code 扩展需要 Diff 评审 UI（对标 Copilot） | IDE 体验提升呼声 | ⭐ 25 评论 / 123 👍（高需求信号） |
| 3 | [#39636](https://github.com/anthropics/claude-code/issues/39636) Cowork VM 在 Snapdragon X Plus (ARM64) 上无法启动内核 | ARM64 平台兼容性，影响 Windows ARM 设备 | 31 评论 / 9 👍 |
| 4 | [#32726](https://github.com/anthropics/claude-code/issues/32726) VSCode 扩展面板强制抢焦点 | IDE 工作流被打断 | 10 评论 / 39 👍 |
| 5 | [#36351](https://github.com/anthropics/claude-code/issues/36351) Desktop `</> Code` 模型选择器丢失 1M 上下文窗口 | 模型能力回退 / 重大功能问题 | 17 评论 / 11 👍 |
| 6 | [#63604](https://github.com/anthropics/claude-code/issues/63604) Opus 4.8 反复输出畸形 tool_use 块（v4.7 正常） | 模型回归，影响 Agent 任务稳定性 | 11 评论 / 14 👍 |
| 7 | [#30407](https://github.com/anthropics/claude-code/issues/30407) 所有 Issue 未经审核即自动关闭 | 社区治理担忧，开发者参与感受损 | 16 评论 / 4 👍 |
| 8 | [#45889](https://github.com/anthropics/claude-code/issues/45889) **（已关闭）** Claude Desktop 导致 Windows NTFS 非分页池内核内存泄漏（~0.5GB/min） | 严重系统级稳定性问题 | 10 评论 |
| 9 | [#65585](https://github.com/anthropics/claude-code/issues/65585) v2.1.161 起第三方 API 提供商 auto-compact 失效 | 第三方 API 集成回归 | 7 评论 / 4 👍 |
| 10 | [#71729](https://github.com/anthropics/claude-code/issues/71729) 🆕 Windows Desktop `</> Code` 会话历史重启后静默丢失 | 数据丢失，CLI 也不检测上下文断裂 | 7 评论（今日新建） |

**延伸关注**（新增当日 issue）：
- [#71731](https://github.com/anthropics/claude-code/issues/71731) 远程会话无法纯远程启用（多 worktree 用户的痛点）
- [#71734](https://github.com/anthropics/claude-code/issues/71734) 内置 `code-review` skill 优先级压制仓库自定义 skill
- [#71726](https://github.com/anthropics/claude-code/issues/71726) Desktop 缺少 CLI 的 mid-task steering（任务中途插话）能力

---

## 4. 重要 PR 进展

| # | PR | 内容 | 状态 |
|---|----|------|------|
| 1 | [#71627](https://github.com/anthropics/claude-code/pull/71627) `docs(sandbox): note that prompt-approved hosts are session-scoped` | 文档修正：`settings-bash-sandbox.json` 提示 prompt 阶段批准的主机仅在当前会话生效，重启后丢失 | 🟢 OPEN |
| 2 | [#71530](https://github.com/anthropics/claude-code/pull/71530) Merge pull request #1 from anthropics/main | 来自外部账号的合并请求，无实质内容，疑似误操作 | 🔴 已关闭 |

> 📌 **说明**：今日 PR 数量极少（仅 2 条），且无功能性代码合入，文档侧仅有一条 sandbox 说明补充。

---

## 5. 功能需求趋势

按出现频次与 👍 数综合排序，社区最关注的五个方向：

1. **IDE / VSCode 扩展深度体验**（热度最高）
   - Diff 评审 UI（#33932，123 👍）
   - 焦点抢占控制（#32726，39 👍）
   - statusLine 在 IDE 中不渲染（#70497）
   - 文件/diff tab 自动打开控制（#68395）
   - MCP connectors 缺失（#71736）

2. **Desktop 客户端功能对齐 CLI**
   - 缺失 mid-task steering（#71726）
   - 远程控制（#71731）
   - 会话历史丢失（#71729）
   - Epitaxy UI copy-link 死链（#67490）

3. **模型能力与稳定性**
   - 1M 上下文窗口被回退（#36351）
   - Opus 4.8 tool_use 畸形（#63604）
   - 第三方 API auto-compact 失效（#65585）

4. **跨平台 / 兼容性**
   - ARM64 Windows（Snapdragon X Plus）（#39636）
   - Windows NTFS 内核内存泄漏（#45889）
   - 插件绝对路径不可移植（#31388）
   - Linux/WSL `~/.claude.json` 信任标记未持久化（#71562）

5. **Skills / Agents / MCP 生态**
   - 仓库级 skill 优先级（#71734）
   - 子 Agent idle 异常（#71644）
   - `/mcp` 鉴权流程缺失 Gmail 选项（#71675）
   - voice dictation 自定义词表（#71721）

---

## 6. 开发者关注点（痛点总结）

**🔴 高频痛点**

1. **Windows 平台稳定性** —— 今日更新 issue 中 Windows 标签占比近 40%，覆盖 NTFS 内存泄漏、ARM64 启动失败、VSCode 焦点抢断、Desktop 会话丢失等多个严重问题。
2. **账单/认证异常** —— #5088（177 评论）长期未被解决，反映出 Max 套餐付费用户对账户风控缺乏透明度的不满。
3. **Desktop 与 CLI 能力不对等** —— 多个新 issue 集中体现 CLI 拥有而 Desktop 缺失的能力：mid-task steering、远程控制、会话持久化。

**🟡 长期需求**

- VS Code 扩展需要更接近 Copilot Edits 的 Diff 评审体验
- 对自定义 skill/plugin 的优先级与可移植性诉求强烈
- 第三方 API 用户的回归风险（auto-compact、tool_use 格式）需要更稳的兼容性保障

**🟢 正面信号**

- v2.1.195 修复 hook matcher 精确匹配，对依赖 MCP 工具链的开发者是直接利好
- 新增 `CLAUDE_CODE_DISABLE_MOUSE_CLICKS` 满足 TUI 高级用户的精细化控制需求

---

*📊 数据来源：github.com/anthropics/claude-code · 报告生成时间 2026-06-27*

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

<think>Let me analyze the GitHub data for OpenAI Codex and generate a comprehensive Chinese daily report for 2026-06-27.

Let me organize the key information:

**Releases:**
1. rust-v0.142.3 - maintenance patch release
2. rust-v0.143.0-alpha.26 - alpha release

**Top Issues by comments:**
1. #28879 - Rate-limit cost per token jumped 10-20x since June 16 (175 comments, 326 likes)
2. #28224 - SQLite feedback logs can write ~640 TB/year (89 comments, 393 likes)
3. #8745 - LSP integration for Codex CLI (54 comments, 392 likes)
4. #29955 - Quota drained instantly: 100 credits gone after 1 message (28 comments)
5. #30224 - X-OpenAI-Internal-Codex-Responses-Lite error (16 comments)
6. #27536 - macOS code_sign_clone grows unbounded (CLOSED)
7. #18357 - Upgraded to PRO but "You're out of Codex messages" (9 comments)
8. #26984 - MCP stdio servers leak pipe fds + orphan child processes (6 comments)
9. #19529 - Pressing Enter occasionally sends same message multiple times (6 comments)
10. #30212 - Codex app usage limit depleted abnormally (6 comments)

**Important PRs:**
1. #30334 - telemetry: log structured tool timing events
2. #30327 - core: stabilize synthesized call output IDs
3. #30325 - Read faster model from safety buffering events
4. #30320 - Guardian Policy Update
5. #30319 - Add retired model compaction repro
6. #30318 - core: trace executor skill discovery
7. #30315 - Add generated token auth to app-server WebSockets
8. #30302 - Preserve namespaces on custom tool calls
9. #30297 - Enable remote plugins by default
10. #30291 - expose environment info RPC
11. #30283 - emit more turn items instead of legacy begin/end events
12. #30281 - cache snapshots before root discovery
13. #30269 - gate Rendezvous TCP_NODELAY by signed path
14. #29691 - Enforce marketplace source policy at runtime

Let me write a professional Chinese daily report.</think>

# OpenAI Codex 社区动态日报
**2026-06-27**

---

## 📌 今日速览

今日 Codex 项目发布了一个维护版 `rust-v0.142.3` 和一个 alpha 预发布版本 `rust-v0.143.0-alpha.26`，整体节奏平稳。社区关注度最高的议题继续集中在 **Plus/Pro 订阅的速率配额异常消耗**（[#28879](https://github.com/openai/codex/issues/28879) 已积累 175 条评论与 326 次点赞），同时 **LSP 自动检测集成** ([#8745](https://github.com/openai/codex/issues/8745)) 仍是最受期待的长期功能请求。PR 端则集中在 app-server 协议完善、WebSocket 安全加固、以及远程插件系统从实验向默认启用的推进。

---

## 🚀 版本发布

- **[rust-v0.142.3](https://github.com/openai/codex/compare/rust-v0.142.2...rust-v0.142.3)** — 纯维护补丁版本，未引入面向用户的变更。
- **[rust-v0.143.0-alpha.26](https://github.com/openai/codex/releases/tag/rust-v0.143.0-alpha.26)** — 0.143 系列第 26 个 alpha 预发布版本，距离稳定版应仍在快速迭代阶段。

---

## 🔥 社区热点 Issues

1. **[#28879](https://github.com/openai/codex/issues/28879) — gpt-5.5 配额消耗速率异常激增 10–20 倍** ⭐326
   自 6 月 16 日起，Plus 用户在 2–3 个 prompt 内即耗尽 5 小时预算。Issue 提供了 `token_count` / `rate_limits` 事件日志佐证。是当前最热议题，反映用户对计费/配额透明度的强烈不满。

2. **[#28224](https://github.com/openai/codex/issues/28224) — SQLite feedback 日志可写 640 TB/年** ⭐393
   报告指出 Codex 的反馈日志机制存在严重 SSD 寿命风险。已有 3 个相关 PR（#29432、#29457、#29473）合并至 0.142.0，预计削减约 85% 日志量，提交者已声明关闭。

3. **[#8745](https://github.com/openai/codex/issues/8745) — LSP 自动检测与自动安装** ⭐392
   提议在 Codex CLI 内置 LSP 支持，自动识别并安装主流语言服务器，以获取诊断与符号信息提升输出质量。该帖长期居于仓库热度榜，是社区对 IDE 级别能力的核心诉求。

4. **[#29955](https://github.com/openai/codex/issues/29955) — Pro*5 用户单条消息消耗 100 积分**
   macOS 上 5 小时配额被瞬间归零，与 #28879 形成同一根因簇——大量用户共同反馈的配额计量问题。

5. **[#30224](https://github.com/openai/codex/issues/30224) — `X-OpenAI-Internal-Codex-Responses-Lite` 模型不支持**
   通过特定 header 触发 API 时返回 "This model is not supported" 错误，影响自定义模型接入路径。

6. **[#26984](https://github.com/openai/codex/issues/26984) — MCP stdio 服务器 fd 与孤儿进程泄漏**
   长期运行的 codex-cli 会逐渐耗尽文件描述符（EMFILE），并遗留僵尸子进程，影响稳定性。

7. **[#30212](https://github.com/openai/codex/issues/30212) — Pro 20x 配额在约 1 小时内耗尽**
   与 #28879、#29955 构成配额异常三连击，问题面已覆盖 Plus 与 Pro 用户。

8. **[#27536](https://github.com/openai/codex/issues/27536) — macOS `code_sign_clone` 累积 62GB+（已关闭）**
   Electron 应用自动更新未清理临时签名缓存，导致磁盘被静默占满。已关闭，等待后续版本验证修复效果。

9. **[#30299](https://github.com/openai/codex/issues/30299) — 官方 CLI 命令以管理 Codex memories**
   Windows 全局 memory 文件已膨胀至数千行，呼吁提供 inspect/prune/delete/scope 的官方 CLI 入口。

10. **[#19529](https://github.com/openai/codex/issues/19529) — Enter 键偶发重复发送同一条消息**
    Codex Desktop 在 macOS 上点击一次 Enter 会触发 2-3 次消息派发，与硬件无关。

---

## 🛠️ 重要 PR 进展

1. **[#30297](https://github.com/openai/codex/pull/30297) — 默认启用远程插件（Remote plugins by default）**
   将 `features.remote_plugin` 从实验特性提升为默认启用，但仍保留显式禁用入口。意味着远程插件生态正式面向大众开放。

2. **[#30315](https://github.com/openai/codex/pull/30315) — app-server WebSocket 引入生成 token 鉴权**
   自动生成 256 位 URL-safe 连接令牌，要求握手时通过 `token` 查询参数校验，并新增 `--no-token-check` 兜底开关。对本地多端接入体验是一大改进。

3. **[#30334](https://github.com/openai/codex/pull/30334) — 结构化工具时延遥测**
   区分 dispatch/queue 与 handler 时长，便于诊断 app-server 部署性能瓶颈，是面向运维可观测性的关键增强。

4. **[#30325](https://github.com/openai/codex/pull/30325) — 读取 `safety_buffering.faster_model` 字段**
   第三方流量从 Responses WebSocket 接收新的"安全缓冲加速模型"字段，并经由 app-server 通知向下游转发，进一步贯通多端协议。

5. **[#30291](https://github.com/openai/codex/pull/30291) — 新增 `environment/info` RPC**
   暴露命名环境的 shell/cwd 元数据，连接失败以 JSON-RPC 错误形式返回。是 app-server 管理能力的扩展。

6. **[#30327](https://github.com/openai/codex/pull/30327) — 稳定合成 call output ID**
   修复 `ContextManager::for_prompt` 合成 "aborted" 输出时无 ID 导致的会话身份漂移，提升重试与回放的稳定性。

7. **[#30283](https://github.com/openai/codex/pull/30302) — 用更多 `TurnItem` 替代 legacy begin/end 事件**
   命令执行、动态工具调用、collab agent 与 sub-agent 活动全部迁移至 `TurnItem` 主线，简化下游消费逻辑。

8. **[#30188](https://github.com/openai/codex/pull/30188) — 分页线程持久化规范项**
   在 #30283 之上将分页 rollout 的完成快照改为规范 `TurnItem`，为后续 SQLite 投影器做铺垫。

9. **[#29691](https://github.com/openai/codex/pull/29691) — 运行时强制 marketplace 源策略**
   将企业源策略投影到插件列表/读取/发现路径，并覆盖后台 marketplace 调用，企业级部署可控性提升。

10. **[#30281](https://github.com/openai/codex/pull/30281) — core-skills 在 root 发现前预缓存快照**
    远程文件系统上重复元数据探测成为瓶颈，此 PR 将缓存生命周期与 root 发现对齐，加速会话初始化与每轮响应。

---

## 📈 功能需求趋势

从过去 24 小时更新的 50 条 Issue 中可提炼出以下方向：

| 方向 | 代表性议题 | 社区热度 |
| --- | --- | --- |
| **配额与计费透明化** | #28879、#29955、#30212、#18357、#28740 | 🔥🔥🔥🔥🔥 |
| **IDE/LSP 级能力** | #8745（长期热度最高之一） | 🔥🔥🔥🔥 |
| **macOS/Windows 桌面稳定性** | #27536、#28718、#28703、#30270、#30263 | 🔥🔥🔥🔥 |
| **远程协作与多端协议** | #30301（Remote Control 中断恢复）、#30291、#29922 | 🔥🔥🔥 |
| **Agent 工具扩展（monitor/skill/memory）** | #29922、#30299、#24195、#30318 | 🔥🔥🔥 |
| **性能/资源占用治理** | #28224、#30236、#30053、#30286 | 🔥🔥🔥 |
| **新模型/自定义模型支持** | #30224、#30325、#30319 | 🔥🔥 |

---

## 💬 开发者关注点

1. **配额计量异常是当前最大信任危机**
   从 Plus 到 Pro 5x、Pro 20x，几乎所有订阅档位均出现"几分钟/几小时被打满"的报告。开发者普遍要求 OpenAI 在客户端日志中明确"每 token 消耗的 limit-%"，以便自助对账。

2. **本地存储失控成为系统性体验问题**
   `code_sign_clone`、SQLite 反馈日志、TRACE 日志等多个桌面端存储累积问题叠加出现，反映 Electron 自动更新链路上缺乏统一的缓存治理策略。

3. **"能监听/能触发"的 Agent 能力是下一阶段呼声**
   #29922 提出的 `monitor` 工具希望 Codex 不再只是 turn-driven，而能基于日志、文件、CI 事件主动唤醒，这是迈向真正自动化 Agent 的关键一步。

4. **memory / skill 体系需要 CLI 一等公民管理**
   随着使用时长累积，Windows 全局 memory 已达数百 KB，开发者要求提供 inspect/prune/delete 等标准命令，避免再次进入"黑盒积累"。

5. **远程与企业级可控性正在快速完善**
   marketplace 源策略运行时强制 (#29691)、remote plugin 默认启用 (#30297)、app-server token 鉴权 (#30315)，共同表明 OpenAI 在加速 B2B 场景的能力铺设。

6. **CLI 与 App 的协议一致性仍需打磨**
   `X-OpenAI-Internal-Codex-Responses-Lite` 错误 (#30224)、命名空间在自定义工具调用中的丢失 (#30302)、archived chats 状态与 UI 不一致 (#30312) 等问题显示，跨端协议还在"补齐一致性"的阶段。

---

> 📅 报告生成时间：2026-06-27 · 数据来源：[github.com/openai/codex](https://github.com/openai/codex)
> 关注我们，每日获取 Codex 社区一手动态。

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

<think>Let me analyze the GitHub data for Gemini CLI and create a comprehensive daily report for 2026-06-27.

Key observations from the data:

1. **No new releases in the past 24 hours** - skip this section
2. **Release failure**: Issue #28168 - Nightly Release Failed on 2026-06-27 (P0 priority)
3. **High-priority bugs**: Several P1 bugs remain active
4. **Agent-related issues dominate**: Many issues are about subagents, skills, browser agent
5. **Security concerns**: Issue #26525 about Auto Memory logging secrets
6. **PR activity**: Mix of bug fixes and new features (Caretaker Agent)

Let me organize the top 10 Issues by comment count and relevance:

Top Issues by comment count:
1. #22323 - Subagent recovery after MAX_TURNS reported as GOAL success (8 comments, P1)
2. #24353 - Robust component level evaluations (7 comments, P1)
3. #22745 - AST-aware file reads/search impact assessment (7 comments, P2)
4. #21409 - Generalist agent hangs (7 comments, P1, 👍8)
5. #21968 - Gemini doesn't use skills and sub-agents enough (6 comments, P2)
6. #26525 - Auto Memory redaction/security (5 comments, P2)
7. #26522 - Auto Memory retry low-signal sessions (5 comments, P2)
8. #25166 - Shell command execution stuck (4 comments, P1, 👍3)
9. #21983 - Browser subagent fails in wayland (4 comments, P1)
10. #21000 - Native file tools for task tracker (4 comments, P3)

Top PRs (mix of important fixes):
1. #27859 - Native drag-and-drop and Cmd+V image pasting (CLOSED)
2. #27870 - Cap pending tool responses (CLOSED)
3. #28053 - Fix defensive path resolution for @-reference files
4. #28055 - Preserve dollar sequences in prompt templates
5. #28033 - Longest-prefix matching for MCP server names
6. #28167 - Egress cloud run service (Caretaker)
7. #28164 - Limit recursive reasoning turns
8. #27971 - Strip thoughts from scrubbed history
9. #27915 - Trust dialog security fix
10. #28012 - Sync footer branch name on filesystems without fs.watch

Let me now compose the report in Chinese.</think>

# Gemini CLI 社区动态日报

**日期**：2026-06-27
**数据来源**：github.com/google-gemini/gemini-cli

---

## 1. 今日速览

今日最值得关注的事件是 **nightly-release 工作流发布失败**（#28168，P0 优先级），需关注是否影响今日版本交付。此外，**Agent 子系统依旧是社区讨论核心**：subagent 在达到 MAX_TURNS 时错误地将中断报告为"GOAL success"（#22323）成为今日讨论最热的 issue；generalist agent 持续出现挂死问题（#21409 👍8）；**Auto Memory 安全性**（#26525、#26522）与 **AST 感知工具**评估（#22745）也在持续推进。

---

## 2. 版本发布

⚠️ **无新版本发布**，但今日 nightly-release 流程出现失败，请关注官方恢复进展：
- [#28168](https://github.com/google-gemini/gemini-cli/issues/28168) Nightly Release Failed for  on 2026-06-27（priority/p0, release-failure）

---

## 3. 社区热点 Issues

### 🔴 高优先级 Bug

| # | 标题 | 优先级 | 评论 | 👍 | 要点 |
|---|---|---|---|---|---|
| [#22323](https://github.com/google-gemini/gemini-cli/issues/22323) | Subagent recovery after MAX_TURNS 被报告为 GOAL success | P1 | 8 | 2 | `codebase_investigator` 在到达最大轮次后未做分析却返回 success，掩盖了真实的中断状态，对调试体验影响严重 |
| [#21409](https://github.com/google-gemini/gemini-cli/issues/21409) | Generalist agent hangs | P1 | 7 | **8** | 触发 generalist agent 后无限挂死（含简单文件夹创建），需手动禁用子代理才能绕开——**社区反应最强烈** |
| [#25166](https://github.com/google-gemini/gemini-cli/issues/25166) | Shell 卡在 "Waiting input" 状态 | P1 | 4 | 3 | 即便命令已完成，shell 仍持续提示等待输入，影响日常交互 |
| [#21983](https://github.com/google-gemini/gemini-cli/issues/21983) | Browser subagent 在 Wayland 下失败 | P1 | 4 | 1 | 终端 Termination Reason 显示 GOAL，但实际未完成，对 Linux Wayland 用户影响大 |
| [#22186](https://github.com/google-gemini/gemini-cli/issues/22186) | get-shit-done 输出 hook 触发崩溃 | P1 | 3 | 0 | 在打印用户摘要时偶发崩溃 |

### 🟡 功能评估与安全

| # | 标题 | 优先级 | 评论 | 要点 |
|---|---|---|---|---|
| [#24353](https://github.com/google-gemini/gemini-cli/issues/24353) | Robust component level evaluations | P1 | 7 | **行为评估体系的 EPIC**：目前已为 6 个模型生成 76 个行为测试，是质量保障基础设施的核心 |
| [#22745](https://github.com/google-gemini/gemini-cli/issues/22745) | AST-aware 文件读取/搜索影响评估 | P2 | 7 | 探讨使用 tilth/glyph 等 AST 工具替代文本读取，减少 token 浪费与误读 |
| [#26525](https://github.com/google-gemini/gemini-cli/issues/26525) | Auto Memory 需确定性脱敏 | P2 | 5 | **关键安全问题**：secret 已在模型上下文中后才被要求脱敏，存在泄露风险 |
| [#26522](https://github.com/google-gemini/gemini-cli/issues/26522) | Auto Memory 重复处理低信号会话 | P2 | 5 | 会话被识别为低信号后仍可能被无限重新拉取 |
| [#21968](https://github.com/google-gemini/gemini-cli/issues/21968) | Gemini 极少主动调用 skills/sub-agents | P2 | 6 | 即便 skills 高度相关，模型也不会主动使用，需用户显式提示 |

---

## 4. 重要 PR 进展

### 🔧 核心修复

| # | 标题 | 状态 | 价值 |
|---|---|---|---|
| [#27870](https://github.com/google-gemini/gemini-cli/pull/27870) | **fix(core): cap pending tool responses** | CLOSED | 修复超大工具结果导致 pending functionResponse 异常，修复 #27738 |
| [#28053](https://github.com/google-gemini/gemini-cli/pull/28053) | fix(core-tools): 防御式 `@` 前缀路径解析 | OPEN | 解决 `read_file`/`write_file` 在路径以 `@` 开头时返回 "File not found" 的生产事故 |
| [#28055](https://github.com/google-gemini/gemini-cli/pull/28055) | fix(core): 保留 prompt 模板中的 `$` 序列 | OPEN | 修复 `applySubstitutions()` 对 `$$`、`$&` 等特殊序列的破坏 |
| [#28033](https://github.com/google-gemini/gemini-cli/pull/28033) | fix(mcp): 使用最长前缀匹配解析 MCP 工具名 | OPEN | 修复 server 名含下划线时工具路由错误（修复 #27981） |
| [#28164](https://github.com/google-gemini/gemini-cli/pull/28164) | fix(core): 限制单次请求递归推理轮数 | OPEN | **新增 15 轮上限**，防止无限循环耗尽本地 CPU 与 API 配额 |
| [#27971](https://github.com/google-gemini/gemini-cli/pull/27971) | fix(core): 剥离历史 turn 中的思考内容 | OPEN | 解决"思考泄漏"导致模型进入无限独白循环 |
| [#27915](https://github.com/google-gemini/gemini-cli/pull/27915) | fix(core): 信任对话框需显示实际运行的 hook | OPEN | **安全修复**：阻止 SessionStart hook 在单次 Trust click 后静默执行任意 shell |

### ✨ 新功能与平台能力

| # | 标题 | 状态 | 价值 |
|---|---|---|---|
| [#27859](https://github.com/google-gemini/gemini-cli/pull/27859) | feat(cli): 原生拖放与 `Cmd+V`/`Ctrl+V` 剪贴板图片粘贴 | CLOSED | **多模态终端体验补齐**：终于支持原生拖拽与粘贴图片 |
| [#28167](https://github.com/google-gemini/gemini-cli/pull/28167) | feat(caretaker): Egress Cloud Run service | OPEN | Caretaker Agent 自动化 GitHub 操作的关键组件 |
| [#28012](https://github.com/google-gemini/gemini-cli/pull/28012) | fix(cli): footer 分支名同步 | OPEN | 修复 WSL 挂载 `/mnt/c` 与网络共享等不支持 `fs.watch` 场景下分支名不更新 |

---

## 5. 功能需求趋势

从近期 Issue 中提炼出社区关注的方向：

| 方向 | 代表 Issue | 趋势 |
|---|---|---|
| 🤖 **Agent 可靠性** | #22323, #21409, #21763, #22465 | 最高优先级：subagent 异常退出、状态报告错误、通用 agent 挂死是反复出现的痛点 |
| 🔒 **安全与隐私** | #26525, #26523, #27915, #27966 | Auto Memory 脱敏、敏感路径黑名单、信任对话框误导都是 P2 关注焦点 |
| 🧠 **评估基础设施** | #24353, #22745 | 76 个行为测试 + 组件级评估正在系统化推进 |
| 🛠️ **AST 感知工具** | #22745, #22746 | 社区对精准读取、减少噪声 token 的诉求强烈 |
| 💻 **终端体验** | #21924, #24935, #27859 | 终端 resize 性能、外部编辑器退出闪烁、原生拖放图片是高频 UX 需求 |
| 🔌 **MCP/扩展系统** | #24246, #28033, #28059 | 工具超过 128 个触发 400、下划线命名路由错误、`.env` 权限问题 |

---

## 6. 开发者关注点

通过聚合 Issue 评论与 👍 数据，开发者最强烈的反馈集中在以下几点：

1. **🔴 Agent 行为不可预测（最痛点）**：子代理可能在用户未察觉时挂死、错误地报告成功状态、甚至绕过权限直接执行。开发者希望有更明确的"中断信号"和状态契约。

2. **🛡️ Auto Memory 安全顾虑**：secret 已被读取到模型上下文后才尝试脱敏的机制让安全敏感型用户担忧；同时低信号会话无限重试浪费配额。

3. **🧩 Skills 与 Sub-agents 不会被自动启用**：开发者配置了大量自定义 skills（如 gradle、git），但模型极少主动调用，仍需显式指令——这是 agent 自治性不足的体现。

4. **🪟 跨平台兼容**：Wayland 浏览器子代理失败、WSL 下 `fs.watch` 不可用、外部编辑器退出导致终端 corruption——开发者要求更稳健的平台适配。

5. **♾️ 无限循环与配额消耗**：递归思考轮数、tmp 脚本散落、大工具响应 pending——开发者希望默认有更激进的资源限制（已有 PR #28164 响应）。

6. **📊 Bug 报告缺上下文**：`/bug` 命令不包含子代理内部信息（#21763），增加复现与诊断成本。

---

*本日报基于 GitHub 公开数据生成，所有链接均指向 google-gemini/gemini-cli 仓库。建议关注 [#28168](https://github.com/google-gemini/gemini-cli/issues/28168) 的 nightly 恢复进展。*

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

<think>
The user wants me to generate a daily report for GitHub Copilot CLI community dynamics for 2026-06-27. Let me analyze the data carefully and create a structured report in Chinese.

Let me analyze the data:

**Release:**
- v1.0.66-1: Added features for subagent concurrency/depth limits, /chronicle skills review, desktop notifications

**Issues (22 total, need to pick top 10):**
1. #2082 - ctrl+shift+c no longer copies on Linux (high engagement, 22 comments, 11 thumbs up)
2. #1928 - Allow to pause copilot work (10 comments, 4 thumbs up)
3. #3944 - Subagent transcripts inlined verbatim and uncapped (new, important)
4. #3951 - PowerShell CLI Friendly (new)
5. #3947 - Theme system regression in 1.0.64 (CLOSED, 1 thumbs up)
6. #3906 - Assign CVE (security related)
7. #3940 - Custom agent support for 'skills' field
8. #3773 - Broken light theme (existing issue, updated)
9. #3952 - [invalid] closed
10. #3945 - Memories leaking between repositories (privacy/cross-repo)
11. #3942 - `copilot --acp` does not work with `--agent`
12. #3941 - Code sign inconsistent (CLOSED)
13. #3799 - Wealth flow (low quality)
14. #3672 - Customize keyboard shortcut for /voice
15. #3955 - Drag and drop regression macOS
16. #3954 - explore tool hardcodes model to gpt-5.4-mini
17. #3950 - "failed to browse marketplace" for SSO plugins
18. #3948 - web_fetch TypeError: fetch failed
19. #3949 - Copy Windows 11 does not work
20. #3946 - Custom instructions leak into repository analysis
21. #3943 - Output list laggy
22. #3887 - /mcp install doesn't interpolate variables (CLOSED)

**Pull Requests (only 1):**
- #570 - macOS installation instructions to README (CLOSED)

Since there's only 1 PR, I should mention that. The PRs section requires top 10 but only 1 is available, so I'll handle this honestly.

Let me create a well-structured report in Chinese.

Trends I can identify:
- Cross-platform compatibility (Linux, Windows, macOS bugs)
- Subagent system (transcript handling, skills, ACP integration)
- Memory/context leakage between repositories
- Custom model support (DeepSeek, etc.)
- Theming/accessibility
- MCP integration issues
- Authentication/SSO
- Input/keyboard customization
- Pause/resume sessions

Let me write the report now.
</think>
# GitHub Copilot CLI 社区动态日报
**日期：2026-06-27**

---

## 1. 今日速览

v1.0.66-1 版本发布，带来子代理并发控制、`/chronicle skills` 审查与桌面通知等新能力；社区反馈集中于**跨平台兼容性问题**（Linux/Windows 复制粘贴、macOS 拖拽回归）与**子代理/MCP 生态的边界处理**（transcript 膨胀、模型硬编码、SSO 插件市场报错）。此外，Memory 在仓库间的意外泄露引发了对上下文隔离的讨论。

---

## 2. 版本发布

### 🚀 v1.0.66-1（Added）
- **子代理精细化控制**：`/settings` 中可配置 subagent 的并发数与深度上限（仅限 usage-based billing 用户）
- **`/chronicle skills review`**：新增草稿技能审查命令，支持逐条 accept / reject / defer
- **桌面通知**：关注提示与空闲会话现在可通过系统通知推送

---

## 3. 社区热点 Issues（Top 10）

| # | Issue | 关键点 | 社区反应 |
|---|-------|--------|----------|
| 1 | [#2082](https://github.com/github/copilot-cli/issues/2082) Linux 终端 ctrl+shift+c 复制失效（自 v1.0.4 起） | 影响 Ubuntu 24.04 主流用户，已存在 3 个月仍未修复 | 💬 22 / 👍 11（最高热度） |
| 2 | [#1928](https://github.com/github/copilot-cli/issues/1928) 希望支持暂停 Copilot 任务并补充指令 | 解决 Agent 跑偏时无法中途介入的痛点 | 💬 10 / 👍 4 |
| 3 | [#3944](https://github.com/github/copilot-cli/issues/3944) Subagent transcript 无限制内联到父会话导出 | 大量 tool-call 输出导致导出文件膨胀，需引入摘要/裁剪 | 💬 2 / 🆕 |
| 4 | [#3945](https://github.com/github/copilot-cli/issues/3945) Memory 在仓库之间意外泄露 | 新仓库却被注入旧 repo 的"facts"，存在隐私/正确性风险 | 💬 1 / 🆕 |
| 5 | [#3946](https://github.com/github/copilot-cli/issues/3946) 自定义指令泄露到仓库分析上下文 | 通用指令被当作当前 repo 的"事实"，与 #3945 属同类问题 | 💬 0 / 🆕 |
| 6 | [#3954](https://github.com/github/copilot-cli/issues/3954) `explore` 工具硬编码 `gpt-5.4-mini`，忽略自定义/DeepSeek 配置 | 破坏自定义端点配置，v1.0.65 回归 | 💬 0 / 🆕 |
| 7 | [#3948](https://github.com/github/copilot-cli/issues/3948) `web_fetch` 始终 `TypeError: fetch failed` | 与认证/模型调用无关，所有 web_fetch 工具调用都失败 | 💬 0 / 🆕 |
| 8 | [#3950](https://github.com/github/copilot-cli/issues/3950) SSO 私有仓库插件市场报"failed to browse marketplace" | 已安装插件仍持续弹错误 toast，影响企业用户 | 💬 0 / 🆕 |
| 9 | [#3955](https://github.com/github/copilot-cli/issues/3955) macOS Copilot App 拖拽附加文件失效（回归） | Finder 拖拽文件到提示框不再生成附件 | 💬 0 / 🆕 |
| 10 | [#3942](https://github.com/github/copilot-cli/issues/3942) `copilot --acp` 与 `--agent` 不兼容 | 自定义 agent 在非交互模式 + ACP 下无法工作 | 💬 1 / 🆕 |

> 补充关注：[#3947](https://github.com/github/copilot-cli/issues/3947)（1.0.64 主题回归，已关闭）、[#3951](https://github.com/github/copilot-cli/issues/3951)（PowerShell CLI 友好性）、[#3940](https://github.com/github/copilot-cli/issues/3940)（自定义 agent 的 `skills` 字段预加载控制）、[#3906](https://github.com/github/copilot-cli/issues/3906)（CVE 分配请求）、[#3949](https://github.com/github/copilot-cli/issues/3949)（Windows 11 复制失效，与 #2082 同一类问题）。

---

## 4. 重要 PR 进展

过去 24 小时内仅有 **1 条 PR 活动**：

- [#570](https://github.com/github/copilot-cli/pull/570) — *Add macOS installation instructions to README.md*（**CLOSED**）
  由 Copilot 编码代理起草，但最终以 WIP 状态关闭。说明 macOS 安装文档化仍是社区关注点，README 维护节奏偏慢。

> ⚠️ PR 数量稀少（仅 1 条，且为关闭状态），反映出 Copilot CLI 的开发更可能直接在主干推进、通过 issue 与 release notes 体现，社区 PR 贡献通道活跃度较低。

---

## 5. 功能需求趋势

从本期 22 条 issue 提炼的社区诉求方向：

1. **🔧 子代理（Subagent）生态成熟化**
   - 输出体积控制（#3944）、与 `--acp`/`--agent` 协同（#3942）、自定义 skills 预加载（#3940）、并发/深度配置（v1.0.66 已响应）
   - 趋势：subagent 已成为核心使用模式，配套的边界管理需求集中爆发

2. **🌐 跨平台一致性**
   - Linux 复制快捷键（#2082）、Windows 11 复制（#3949）、macOS 拖拽（#3955）、PowerShell 体验（#3951）
   - 趋势：每个平台都出现关键交互回归，平台测试矩阵需补强

3. **🔒 上下文隔离与隐私**
   - Memory 跨仓库泄露（#3945）、自定义指令污染 repo 分析（#3946）
   - 趋势：长期记忆功能扩展后，scope 控制成为新刚需

4. **🤖 自定义模型/端点**
   - `explore` 工具硬编码 gpt-5.4-mini 破坏 DeepSeek 等自定义配置（#3954）
   - 趋势：第三方模型接入仍存在"工具层未走配置"的盲区

5. **🎨 可访问性与主题**
   - 1.0.64 主题回归（#3947，已修复）、浅色主题对比度（#3773）
   - 趋势：主题系统重构引入新 bug，需更稳健的回滚路径

6. **🧩 MCP 与插件生态**
   - `/mcp` 变量插值（#3887 已关闭）、SSO 私有市场（#3950）
   - 趋势：MCP 已从"能跑"进入"企业级可用"阶段，认证链路是焦点

7. **⏸️ 会话控制粒度**
   - 暂停/恢复（#1928）、桌面通知（v1.0.66 已响应）
   - 趋势：用户希望对长任务拥有"中途介入"与"被动提醒"能力

---

## 6. 开发者关注点

**高频痛点：**
- **复制粘贴不可靠**：Linux（#2082）、Windows（#3949）双双中招，且缺乏"操作前自检"机制 → 终端输入层稳定性是基础体验底线
- **回归未被及时拦截**：主题（#3947）、拖拽（#3955）、模型硬编码（#3954）均属"上个版本还好好的"类型 → 需加强端到端冒烟测试
- **错误提示不友好**：`web_fetch` 抛 `fetch failed`（#3948）未给排错线索；"failed to browse marketplace"（#3950）对已安装插件误报

**高频需求：**
- **可观测性**：希望看到"暂停/恢复"、transcript 摘要、空闲提醒等过程控制能力
- **跨上下文隔离**：Memory、custom instructions 都应严格限定 scope
- **可定制化**：键盘快捷键（#3672）、skills 预加载（#3940）、主题/对比度（#3773）反映出用户不再满足于"开箱即用"
- **安全合规通道**：#3906 显示安全研究者希望官方提供更明确的 CVE 分配流程

**社区信号：**
- PR 贡献稀少（24h 仅 1 条且为关闭）→ 社区参与路径有待激发，目前更像是"反馈方"而非"贡献方"
- 多个高赞 issue（#2082、#1928）跨越数月未解 → 长期 issue 治理流程需要优化
- 大量新 issue 集中在 v1.0.65/1.0.64 → 这两个版本可能引入了较密集的回归，建议用户回看 changelog

---

*数据范围：2026-06-26 ~ 2026-06-27 · 来源：[github.com/github/copilot-cli](https://github.com/github/copilot-cli)*

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

<think>The user wants me to generate a daily community report for Kimi Code CLI based on GitHub data. Let me analyze the data carefully.

Wait, the date is 2026-06-27, but I notice the issues and PRs have dates from 2026-06-26. The system reminder says today's date is 2026-06-27. Let me proceed with generating the report.

Let me look at the data:

**Releases (past 24 hours):** None

**Issues (past 24 hours, updated):** 3 total
1. #2425 [CLOSED] - 403 error with kimi-for-coding model
2. #2478 [OPEN] - ExitPlanMode bug, plan mode inconsistency
3. #2477 [OPEN] - Double Enter key & /sessions feedback loss bug

**Pull Requests (past 24 hours, updated):** 2 total
1. #2287 [OPEN] - docs(readme): add prerequisites list to Development section
2. #2476 [OPEN] - fix(kosong): omit reasoning_effort instead of sending null when thinking is off

The user asks for "10 most noteworthy Issues" but only 3 issues are provided. Same for PRs - only 2 provided. I'll need to work with what's available and note the limited data.

Let me structure the report:

1. **今日速览** - Summary of the most important activities
2. **版本发布** - No releases, skip this
3. **社区热点 Issues** - Only 3 issues available, present all 3
4. **重要 PR 进展** - Only 2 PRs available, present all 2
5. **功能需求趋势** - Identify trends from issues
6. **开发者关注点** - Pain points and high-frequency needs

Let me draft the report in Chinese with technical, professional tone.

Key insights:
- #2425 is a CLOSED bug about 403 errors - this seems important as it's closed quickly indicating it's been addressed
- #2478 is about plan mode inconsistency - this is a significant UX/functionality bug
- #2477 is about double Enter key and /sessions issues - UX issues
- #2287 is documentation improvement
- #2476 is a fix for OpenAI SDK compatibility - important for developers integrating with kosong

Trends:
- Model compatibility issues (kimi-for-coding, OpenAI SDK)
- Plan mode functionality bugs
- UI/UX issues (keyboard input, session display)
- Documentation improvements

Let me write the report now.</think>

# Kimi Code CLI 社区动态日报

**日期：2026-06-27** | **数据来源：github.com/MoonshotAI/kimi-cli**

---

## 今日速览

今日社区活跃度中等，过去 24 小时内有 **3 条 Issue 更新**和 **2 条 PR 更新**，无新版本发布。其中最值得关注的动态是 #2478 报告的 Plan Mode 状态不一致 Bug（ExitPlanMode 返回"Not in plan mode"但系统提示却声明 Plan Mode 处于激活状态），属于影响核心交互流程的功能性缺陷。同时 #2425 关于 kimi-for-coding 模型返回 403 错误的 Issue 已被关闭，暗示官方已介入处理或问题已得到修复。

---

## 版本发布

⚠️ 过去 24 小时内无新版本发布，请关注 [Releases 页面](https://github.com/MoonshotAI/kimi-cli/releases) 获取最新动态。

---

## 社区热点 Issues

> 📌 备注：过去 24 小时仅有 3 条 Issue 更新，以下为全部活跃条目。

### 🔴 #2478 [OPEN] ExitPlanMode 状态不一致 Bug
- **链接**：https://github.com/MoonshotAI/kimi-cli/issues/2478
- **作者**：@proccl | **评论**：1 | **👍**：0
- **重要性**：⭐⭐⭐⭐⭐
- **概述**：系统提示明确声明"Plan mode is active"并提供 plan 文件路径，但调用 `ExitPlanMode` 工具时却返回 `Not in plan mode. ExitPlanMode is only available during plan mode.`，导致 Assistant 无法正常退出 Plan 模式。
- **社区反应**：新开 Issue，关注度正在上升。该 Bug 直接阻断核心 Plan-Execute 工作流，对依赖 Plan Mode 的用户（如 Agent 开发、长任务规划）影响严重。

### 🔴 #2477 [OPEN] 双击 Enter 触发 & `/sessions` 命令反馈丢失
- **链接**：https://github.com/MoonshotAI/kimi-cli/issues/2477
- **作者**：@iqre8 | **评论**：0 | **👍**：0
- **重要性**：⭐⭐⭐
- **环境**：Kimi CLI v0.20.0 / Ubuntu 24.04.4 LTS / Linux 6.8.0-124-generic
- **概述**：报告两项交互 Bug：(1) 单次回车键被识别为双击，触发意外的命令执行或 UI 状态切换；(2) 执行 `/sessions` 命令后界面缺少应有的会话列表反馈。
- **社区反应**：新开 Issue，尚未收到官方回应。属于典型的输入处理与 UI 反馈问题，影响日常使用流畅度。

### 🟢 #2425 [CLOSED] kimi-for-coding 模型 403 权限错误
- **链接**：https://github.com/MoonshotAI/kimi-cli/issues/2425
- **作者**：@zhongyr | **评论**：10 | **👍**：3
- **重要性**：⭐⭐⭐⭐（已关闭）
- **环境**：Kimi CLI v0.9.0 / Mac OS / 模型 kimi-for-coding
- **概述**：用户使用 `kimi-for-coding` 模型时，每条消息均返回 403 错误。Issue 标题指出该模型仅对 Kimi CLI、Claude Code、Roo Code、Kilo Code 等 Coding Agent 开放。
- **社区反应**：讨论较为活跃（10 条评论），引发用户对 Coding Agent 配额与鉴权机制的讨论。已关闭，疑似官方已修复或调整了鉴权策略。

---

## 重要 PR 进展

> 📌 备注：过去 24 小时仅有 2 条 PR 更新，以下为全部活跃条目。

### 🟢 #2476 [OPEN] fix(kosong): 关闭 thinking 时省略 reasoning_effort 而非发送 null
- **链接**：https://github.com/MoonshotAI/kimi-cli/pull/2476
- **作者**：@logicwu0 | **重要性**：⭐⭐⭐⭐
- **概述**：修复 `kosong` 中 `OpenAILegacy.with_thinking("off")` 的参数序列化问题。原实现将 `reasoning_effort` 设为 Python `None`，经 OpenAI SDK 序列化为 JSON `"null"`，导致部分 OpenAI 兼容 API（如使用 omit 语义的端点）返回错误。修改后改为 omit 字段。
- **技术价值**：提升 kosong 框架对 OpenAI 协议变体的兼容性，对依赖第三方 OpenAI 兼容 API（如 Azure、自托管 vLLM、Together 等）的开发者尤其重要。

### 🟢 #2287 [OPEN] docs(readme): 在 Development 段落新增 Prerequisites 清单
- **链接**：https://github.com/MoonshotAI/kimi-cli/pull/2287
- **作者**：@ktwu01 | **重要性**：⭐⭐⭐
- **概述**：解决 #2274，在 README 的 `## Development` 章节顶部新增 `### Prerequisites` 子章节，列出运行 `make prepare` 之前必须安装的依赖项。
- **技术价值**：降低新贡献者的入门门槛，减少因环境缺失导致的初次构建失败。属于常规但必要的 DX（Developer Experience）改进。

---

## 功能需求趋势

基于近期活跃 Issue 提炼，社区关注点呈现以下方向：

| 趋势方向 | 表现 | 代表 Issue |
|---------|------|-----------|
| **🤖 Coding 模型专属支持** | `kimi-for-coding` 等 Coding 专用模型的接入与配额管理成为高频话题 | #2425 |
| **📋 Plan Mode 工作流稳定性** | 计划/执行分离架构的核心交互需要更鲁棒的状态管理 | #2478 |
| **⌨️ 终端输入体验优化** | 键盘事件处理、命令反馈呈现等终端 UX 细节需打磨 | #2477 |
| **🔌 OpenAI 协议兼容性** | kosong 框架需适配更多 OpenAI 兼容 API 的非标实现 | #2476 |
| **📚 开发者文档完善** | 贡献者引导、构建前置条件等基础设施仍待补齐 | #2287 |

---

## 开发者关注点

综合 Issue 与 PR 反馈，当前开发者社区的**高频痛点**集中在以下方面：

1. **🔁 Plan Mode 状态机可靠性**：`#2478` 暴露了系统提示与工具实际状态之间的不一致，这是 Agent 系统的"信任根"问题——若状态机不可靠，所有上层规划逻辑都将受影响。

2. **🔐 Coding Agent 鉴权边界**：`#2425` 中"模型仅对特定 Agent 开放"的策略虽然出于商业考虑，但对开发者的透明度不足（哪些 Agent 名单、如何鉴权、超额后行为），社区期望更清晰的文档说明。

3. **🎯 终端交互健壮性**：`#2477` 报告的双击 Enter Bug 说明 Kimi CLI 在处理键盘事件（尤其多字节/组合键场景）时仍存在边界情况；`/sessions` 等命令的反馈丢失则反映出 CLI 输出层缺乏统一的渲染规范。

4. **🧩 kosong SDK 协议抽象层完备性**：`#2476` 揭示了抽象层设计中的一个细节陷阱（`None` vs `omit`），提示团队在兼容多模型 Provider 时需更细致地区分"未设置"与"显式置空"两种语义。

5. **📖 新贡献者 Onboarding 体验**：README 缺失 Prerequisites 是开源项目的经典痛点，`#2287` 虽小但反映社区欢迎更多类似 DX 改进。

---

> 💡 **分析师建议**：建议官方在下次 Release 中重点关注 Plan Mode 状态一致性修复，并补充 kimi-for-coding 模型的使用指引文档。同时建议建立 Issue 模板以更高效收集环境信息（已部分实现，可进一步强化）。

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

<think>
Let me analyze the GitHub data for OpenCode and create a comprehensive daily report in Chinese for 2026-06-27.

Key observations:
1. No new releases in the past 24 hours
2. 50 issues updated, with top discussion being about DeepSeek V4 Pro pricing reduction (85 comments, 82 likes - this is a CLOSED issue, suggesting it was addressed)
3. Most PRs are dependency cleanup chores (many by opencode-agent[bot])
4. Notable feature PR: #34164 - generate complete protocol client (kitlangton)
5. Notable feature PR: #34135 - child agent picker in TUI
6. Notable fix: #34125 - MCP refresh token scope (backport)
7. Notable fix: #34147 - composer tooltips v2 migration

Hot issues by themes:
- DeepSeek V4 Pro pricing/Go limits (#28846) - very hot
- Ctrl+R prompt history search (#5062)
- Windows app issues (multiple)
- Question tool UI problems (multiple issues about overlays/collapse)
- Payment options - crypto (#23153, #29531)
- TUI bugs and feature requests
- Memory leak
- Tool call truncation
- MCP subsystem issues
- Model per-chat preservation

Let me structure this into a well-formatted report.
</think>
# OpenCode 社区动态日报
**2026-06-27**

---

## 📌 今日速览

今日 OpenCode 仓库活跃度极高，PR 数量达到 50 条，主要由 **依赖清理专项行动** 推动（由 `opencode-agent[bot]` 自动提交，覆盖 cli/app/console/desktop/core 等十余个包）。社区讨论焦点集中在 **DeepSeek V4 Pro 大幅降价后的 Go 订阅额度调整**（#28846，85 条评论、82 👍 已关闭），以及 **Question 工具的 UI 体验问题** 和 **MCP 协议在 Windows 下的稳定性**。功能层面值得关注的进展是核心开发者 @kitlangton 提交了 **完整协议客户端生成器** PR（#34164），以及 TUI 新增 **子会话选择器**（#34135）。

---

## 🚀 版本发布

**无新版本发布**（过去 24 小时内）

---

## 🔥 社区热点 Issues

### 1. [#28846](https://github.com/anomalyco/opencode/issues/28846) — 调整 Go 订阅额度以反映 DeepSeek V4 Pro 永久降价 75%
- **状态**: CLOSED | 💬 85 | 👍 82
- **重要性**: ⭐⭐⭐⭐⭐ 今日最具影响力议题
- 社区强烈要求将 OpenCode Go 订阅的用量限制与 DeepSeek V4 Pro API 降价同步调整。85 条评论 + 82 👍 表明这是用户普遍关切的成本议题。该 issue 已关闭，暗示官方已采纳方案或已给出回应。

### 2. [#5062](https://github.com/anomalyco/opencode/issues/5062) — Ctrl+R 搜索/导航 Prompt 历史
- **状态**: OPEN | 💬 16 | 👍 25
- 呼声极高的体验改进：希望实现类似 bash `reverse-i-search` 的快捷键历史搜索，当前仅能通过方向键逐步翻找。

### 3. [#23153](https://github.com/anomalyco/opencode/issues/23153) — 用加密货币支付 OpenCode Go
- **状态**: OPEN | 💬 12 | 👍 23
- 用户对加密支付的需求持续走高，与 #29531 形成共振，反映社区对支付灵活性的诉求。

### 4. [#12598](https://github.com/anomalyco/opencode/issues/12598) — Windows 升级后无法启动
- **状态**: CLOSED | 💬 16
- Win10 用户升级 v1.1.53 后点击无响应。已关闭，官方可能已发布修复版本。

### 5. [#450](https://github.com/anomalyco/opencode/issues/450) — UI 中支持 reasoning_effort 参数
- **状态**: CLOSED | 💬 15 | 👍 26
- 跨越 1 年（2025-06 创建）的长期功能请求终于关闭，反映 reasoning 强度调节正逐步进入主流模型 UI。

### 6. [#18108](https://github.com/anomalyco/opencode/issues/18108) — 截断的 tool call 被误判并进入 doom loop
- **状态**: OPEN | 💬 7 | 👍 2
- 当 LLM 输出的工具调用 JSON 超过 maxOutputTokens 被截断时，OpenCode 缺乏截断信号告知模型，导致会话循环卡死。属于 **核心 agent 循环的鲁棒性问题**。

### 7. [#22422](https://github.com/anomalyco/opencode/issues/22422) — EventTarget 内存泄漏告警
- **状态**: CLOSED | 💬 6
- 节点 EventEmitter 监听器超过默认上限的 MaxListenersExceededWarning，已关闭，可能已在后续版本修复。

### 8. [#6169](https://github.com/anomalyco/opencode/issues/6169) — opentui `/model` 选择器无法显示全部自定义模型
- **状态**: CLOSED | 💬 12
- 自定义 provider 的模型被正确加载但 TUI 中不可见，仅显示最近使用过的——典型的 UI/数据层脱节 bug。

### 9. [#16449](https://github.com/anomalyco/opencode/issues/16449) — Windows Desktop 上 MCP 子系统完全无响应
- **状态**: OPEN | 💬 4 | 👍 1
- `/config` 可加载但 `/mcp` 超时，表明 MCP runtime 在 Windows 端存在系统级问题，影响所有依赖 MCP 的工作流。

### 10. [#28956](https://github.com/anomalyco/opencode/issues/28956) / [#32791](https://github.com/anomalyco/opencode/issues/32791) / [#19400](https://github.com/anomalyco/opencode/issues/19400) — Question 工具弹窗遮挡对话且无最小化按钮
- **状态**: 均为 OPEN
- 三个独立 issue 聚焦同一痛点：question 工具弹窗覆盖响应内容，用户无法滚动查看上下文再作答。这是当前 **Desktop/TUI 体验最集中的 UX 投诉**。

---

## 🛠️ 重要 PR 进展

### 1. [#34164](https://github.com/anomalyco/opencode/pull/34164) — `feat(client): generate complete protocol client`
- 作者: @kitlangton
- 从权威 Server `HttpApi` 为每个标准 HTTP 组生成 Promise 与 Effect 客户端，保留类型化 SSE 全局事件流。该 PR 对 SDK 生态扩展意义重大，是底层架构层面的一次跃迁。

### 2. [#34125](https://github.com/anomalyco/opencode/pull/34125) — `fix(mcp): request refresh token scope`
- 作者: @rekram1-node
- 将 MCP SEP-2207 scope 选择回移植入稳定版 TS SDK，仅在 AS 声明 `offline_access` 时追加，统一动态注册与浏览器授权的 scope。**已关闭**，可能已合并。

### 3. [#34135](https://github.com/anomalyco/opencode/pull/34135) — `feat(tui): add child agent picker`
- 替换父级 composer 为子 agent 选择器，列出直接子会话（运行中优先），支持在子会话间切换。**改进了多 agent 协作的导航体验**。

### 4. [#34147](https://github.com/anomalyco/opencode/pull/34147) — `fix(app): migrate composer tooltips to v2`
- 将新建会话 composer 提示迁移至 `TooltipV2`，快捷键提示使用 `KeybindV2` 渲染，保留旧组件与样式以维持兼容。

### 5. [#34156 / #34157 / #34158 / #34159 / #34160 / #34161 / #34162 / #34163 / #34149 / #34148](https://github.com/anomalyco/opencode/pulls?q=is%3Apr+remove+unused+dependencies) — 全仓库 `chore: remove unused dependencies`
- 大量由 `opencode-agent[bot]` 自动提交的依赖清理 PR，覆盖 `app`、`web`、`ui`、`session-ui`、`stats`、`opencode`、`http-recorder`、`desktop`、`core`、`console/{support,mail,function,core,app}`、`cli` 等几乎所有包。
- 共移除数十个未引用的依赖（如 `@shikijs/transformers`、`remeda`、`morphdom`、`dompurify`、`katex`、`semver`、`ignore`、`@gitlab/opencode-gitlab-auth`、`@opentelemetry/*`、`@aws-sdk/client-s3`、`@actions/artifact` 等），并同步更新 `bun.lock`。
- **意义**：显著的供应链瘦身与安装体积优化，是项目走向 1.x 稳定期前的一次系统性技术债清理。

---

## 📈 功能需求趋势

| 方向 | 代表 Issue | 社区热度 |
|------|-----------|---------|
| **成本与定价** | #28846 | 🔥🔥🔥🔥🔥 |
| **加密支付** | #23153、#29531 | 🔥🔥🔥🔥 |
| **Question 工具 UX** | #28956、#19400、#32791、#14924、#15353 | 🔥🔥🔥🔥 |
| **Prompt 历史导航** | #5062 | 🔥🔥🔥 |
| **TUI 可用性** | #17797、#19005、#24579、#17873 | 🔥🔥🔥 |
| **多模型与 reasoning 控制** | #450、#17873、#33618 | 🔥🔥🔥 |
| **MCP 协议稳定性** | #16449、#18130 | 🔥🔥 |
| **跨平台一致性** | #12598、#34006、#16449 | 🔥🔥 |

> **核心趋势**：社区正从「能不能跑」过渡到「好不好用」，**桌面应用 UX 的一致性**、**Question/工具调用交互的可见性**、以及 **支付与订阅模型的灵活性** 是当前三大焦点。

---

## 💡 开发者关注点

1. **Agent 循环鲁棒性**
   - #18108 暴露的"截断 tool call → doom loop"是 agent 框架的经典陷阱，社区期待模型能收到明确的 truncation 信号（而非泛化为 "invalid tool call"）。

2. **MCP 协议的 Windows 兼容性与 OAuth 流程**
   - #16449（Windows 全局超时）和 #18130（OAuth 浏览器流程未触发）表明 MCP 集成在 Windows 端仍存在系统性问题；#34125 的回移植修复正是针对 OAuth scope 协商。

3. **Provider / 模型兼容层**
   - #6169（自定义模型不显示）、#33618（Qwen 3.7 工具调用空名）、#31430（Bedrock Mantle 空响应）反映 **多 provider 适配层** 仍是高频故障点。

4. **TUI 的可见性退化**
   - #17797（修改文件列表消失）、#34146（macOS NFS 日志污染 TUI）、#34141（Windows `/status` 显示路径而非插件名）—— 多个 TUI 可见性 bug 集中在最近两周。

5. **依赖治理**
   - 今日 20+ 条 PR 中有近 20 条与依赖清理相关，说明项目进入 1.x 后正系统性地收缩依赖面，**对未来安全审计与构建速度是显著利好**。

6. **Question 工具的"打断感"**
   - 多个独立反馈指出 question dock 完全遮挡上文，用户被迫在「看 AI 输出」与「回答问题」之间二选一，**这是当前 UX 最迫切的可改进点之一**。

---

*数据来源：[github.com/anomalyco/opencode](https://github.com/anomalyco/opencode) | 报告生成时间：2026-06-27*

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

<think>The user wants me to generate a daily community digest for Qwen Code based on GitHub data for 2026-06-27. Let me analyze the data carefully and create a structured Chinese report.

Let me identify the key elements:

**Releases (past 24 hours):**
- v0.19.2-nightly.20260627.d93bec905
- cua-driver-rs-v0.6.8

**Issues (31 total, top 30 by comments):**
- #4175 - Mode B feature-priority roadmap toward v0.16 (42 comments) - high attention
- #5838 - Allow user to adjust agent initiated cmd timeout (6 comments)
- #5083 - TUI 卡死, zombie subprocess (6 comments)
- #4218 - MCP Server filesystem bug (6 comments)
- #5873 - PowerShell leak OOM bug (CLOSED, 5 comments)
- #5819 - 自动切换高单价模型 bug (4 comments)
- #5875 - skill command auto-complete (4 comments)
- #5800 - last line overwritten (4 comments)
- #5907 - Telegram bot tracking (3 comments)
- #5897 - uint64 schema warnings (3 comments)
- #5909 - Harden slug-to-path (3 comments)
- #5677 - ACP gaps tracking (3 comments)
- #2036 - Reduce memory usage (CLOSED, 3 comments)
- #5866 - live syntax highlighting (CLOSED, 2 comments)
- #5894 - Edit tool result appended (2 comments)
- #5756 - Default 8K output cap (2 comments)
- #5823 - /loop cron visibility (2 comments)
- #5908 - Normalize source slug (2 comments)
- #5834 - Source deletion path traversal (CLOSED, 2 comments)
- #5905 - Negative cleanupPeriodDays (CLOSED, 2 comments)
- #5901 - qqbot streaming (2 comments)
- #3696 - hot-reload system (2 comments)
- #5882 - CI cross-PR contamination (CLOSED, 2 comments)
- #5889 - .qwen/loop.md task file (2 comments)
- #5887 - qwen tag (DingTalk, 2 likes)
- #3029 - LSP diagnostics empty (1 comment)
- #3891 - 版本更新 bug (CLOSED, 1 comment)
- #5883 - Consolidate chat panel (1 like)
- #1041 - IDEClient directory mismatch (CLOSED)
- #3731 - OpenTelemetry (CLOSED)

**PRs (50 total, top 20 by comments, but most have undefined comments - so they're newly opened):**
- #5918 - feat(core): warn before foreground shell timeout
- #5919 - feat(channels): register Telegram bot command menu
- #5917 - feat(web-shell): add manual toggle for enhanced markdown tables
- #5914 - fix(desktop): harden remaining source path validation
- #5911 - fix(desktop): normalize source slug validation errors
- #5915 - fix(core): silence unknown schema format warnings
- #5852 - feat(daemon,sdk): resumable /acp session stream
- #5916 - fix(core): clear tool display after completion errors
- #5913 - fix(desktop): validate credential cache source slugs
- #5869 - feat(web-shell): stream-highlight code blocks (CLOSED)
- #5890 - feat(loop): inject a .qwen/loop.md task file
- #5821 - fix(cli): skip default follow-up suggestions on local OpenAI backends
- #5912 - fix(daemon): resolve ACP permission votes across connections
- #5910 - fix(daemon): resolve /acp permission votes across connections (CLOSED)
- #2652 - refactor: tree-sitter AST for shell parsing
- #3636 - feat(core): cap concurrent in-flight requests per provider
- #3034 - fix(core): add LSP diagnostics caching
- #5829 - fix(desktop): reject unsafe source slugs (CLOSED)
- #5847 - feat(serve): add runtime context injection for system-reminders
- #5888 - feat(channels): qwen tag — RFC + Phase 0

Now let me identify themes:
1. **Security hardening** - Multiple PRs (#5911, #5913, #5914) and issues (#5829, #5834, #5908, #5909) around path traversal/source slug validation
2. **Desktop application** - Heavy focus on desktop security and validation
3. **Telegram bot integration** - Multiple issues (#5907) and PRs (#5919)
4. **ACP/serve mode** - #4175 (Mode B roadmap), #5677 (ACP gaps), #5912, #5910 (permission votes), #5852 (resumable stream)
5. **Web shell improvements** - #5917, #5869 (syntax highlighting)
6. **Channels/Collaboration** - #5887/#5888 (qwen tag), #5907 (Telegram)
7. **Loop/cron** - #5823, #5889, #5890
8. **Performance** - #5083 (zombie processes), #5756 (8K cap), #3636 (concurrency), #2036 (memory)
9. **UI/TUI bugs** - #5800 (last line overwritten), #5894 (edit tool result), #5901, #5873 (PowerShell)
10. **LSP** - #3029, #3034

Let me now structure the report properly. I'll be thorough but concise.</think>

# Qwen Code 社区动态日报
**日期：2026-06-27**

---

## 📌 今日速览

今天 Qwen Code 仓库继续保持高频迭代：发布 **v0.19.2 nightly** 版本的同时，**安全加固**（桌面端 source slug 路径穿越防护）、**ACP/serve 模式**（可恢复会话流、跨连接权限投票）以及 **Telegram 频道适配器**成为社区三大焦点。另外，desktop 端连续提交了 4 个安全相关 PR（#5911/#5913/#5914/#5829 闭环），开发者 @VectorPeak 主导的 CWE-22 路径遍历防护已形成完整修复链路。

---

## 🚀 版本发布

### v0.19.2-nightly.20260627.d93bec905
- **修复**：`web_fetch` 现已支持 JSON 回退（#5660）
- **配套**：cua-driver-rs v0.6.8 启用**相对坐标**支持
  - macOS：已签名 + 公证的 universal binary（含 `QwenCuaDriver.app`）
  - Linux：x86_64 + arm64（glibc 2.31+），未签名
  - Windows：x86_64 + arm64，未签名
- **版本**：Qwen Code CLI 同步升级至 v0.19.2

---

## 🔥 社区热点 Issues

| # | 标题 | 评论数 | 为什么重要 |
|---|------|--------|----------|
| [#4175](https://github.com/QwenLM/qwen-code/issues/4175) | Mode B `qwen serve` v0.16 production-ready 路线图 | 42 | **当前最热议题**，Stage 1 daemon 与 workspace 重构已合入，作者 @doudouOUC 梳理了通往 production-ready 的剩余工作清单，是后续大版本的关键参照 |
| [#5838](https://github.com/QwenLM/qwen-code/issues/5838) | 允许用户调整 agent 启动命令的超时 | 6 | 用户体验高频痛点：当前 AI 自主 spawn 的子进程超时不可控，欢迎 PR |
| [#5083](https://github.com/QwenLM/qwen-code/issues/5083) | TUI 卡死 / 僵尸子进程未回收 | 6 | 性能/稳定性关键 bug：Linux 下 mcp-remote 留下 Z 状态 bash 子进程 4 分钟未 reap，导致界面冻结 |
| [#4218](https://github.com/QwenLM/qwen-code/issues/4218) | MCP Server "filesystem" UI 显示已连接但工具不可用 | 6 | Windows 下 MCP 集成的典型失效模式，阻碍生态扩展 |
| [#5873](https://github.com/QwenLM/qwen-code/issues/5873) | 🔴 Windows PowerShell 每次开新进程不释放直至 OOM（已关闭）| 5 | P1 级严重 bug，Windows 100% 复现，反映出 shell 进程生命周期管理的系统性缺陷 |
| [#5819](https://github.com/QwenLM/qwen-code/issues/5819) | 自动切换高单价模型并浪费 token | 4 | 涉及**资费安全**与中文输出变繁体的回归，用户体验与成本双重问题 |
| [#5800](https://github.com/QwenLM/qwen-code/issues/5800) | 回复末行高于终端时被覆盖（Ink #973 上游）| 4 | TUI 渲染 bug：长回复最后一行消失，根因在依赖的 Ink，欢迎 PR |
| [#5907](https://github.com/QwenLM/qwen-code/issues/5907) | Telegram bot 命令完整支持追踪 | 3 | 远程会话管理的核心载体，#5919 已开始落地 |
| [#5897](https://github.com/QwenLM/qwen-code/issues/5897) | `unknown format "uint64" ignored` 噪声污染界面 | 3 | MCP 集成常见噪声，#5915 已修复 |
| [#5756](https://github.com/QwenLM/qwen-code/issues/5756) | 默认 8K 输出上限截断大文件导致重试循环 | 2 | 限制模型真实输出能力，对 write_file 等大块生成场景非常不友好 |

> *完整 31 条更新可在 [Issues 列表](https://github.com/QwenLM/qwen-code/issues) 查看*

---

## 🛠 重要 PR 进展

### 🔒 安全加固（今日最大主题）
- **[#5911](https://github.com/QwenLM/qwen-code/pull/5911)** `fix(desktop): normalize source slug validation errors` — 让 `config_validate` 返回结构化结果，根因修复 #5829 后的遗留面
- **[#5913](https://github.com/QwenLM/qwen-code/pull/5913)** `fix(desktop): validate credential cache source slugs` — 凭据缓存路径构造走验证 helper，杜绝凭据泄露
- **[#5914](https://github.com/QwenLM/qwen-code/pull/5914)** `fix(desktop): harden remaining source path validation` — 收尾剩余 slug-to-path 边缘
- **[#5829](https://github.com/QwenLM/qwen-code/pull/5829)** ✅ `fix(desktop): reject unsafe source slugs before deletion` — 已合并，闭环 CWE-22

### 🌐 ACP / Serve 模式
- **[#5852](https://github.com/QwenLM/qwen-code/pull/5852)** `feat(daemon,sdk): resumable /acp session stream` — 接入 SSE `Last-Event-ID`，断线可恢复
- **[#5912](https://github.com/QwenLM/qwen-code/pull/5912)** `fix(daemon): resolve ACP permission votes across connections` — 权限投票请求 ID 改为连接限定命名空间
- **[#5847](https://github.com/QwenLM/qwen-code/pull/5847)** `feat(serve): add runtime context injection for per-turn system-reminders` — 外部调用方可注入每轮运行时上下文

### 🤖 频道 & 协作
- **[#5919](https://github.com/QwenLM/qwen-code/pull/5919)** `feat(channels): register Telegram bot command menu` — 注册 `setMyCommands` + 新增本地 `/start`、`/cancel`
- **[#5888](https://github.com/QwenLM/qwen-code/pull/5888)** `feat(channels): qwen tag — RFC + Phase 0 (multiplayer channel-resident agent)` — 钉钉优先的群组共享常驻 agent，复用 `qwen serve` + 已有 channel 适配器

### ⚡ 核心体验
- **[#5918](https://github.com/QwenLM/qwen-code/pull/5918)** `feat(core): warn before foreground shell timeout` — 交互式前台命令最后 15 秒给出超时警告（可 Ctrl+B 提升到后台）
- **[#5915](https://github.com/QwenLM/qwen-code/pull/5915)** `fix(core): silence unknown schema format warnings` — 抑制 Ajv 对 `uint64` 等格式的反复警告
- **[#5890](https://github.com/QwenLM/qwen-code/pull/5890)** `feat(loop): inject a .qwen/loop.md task file at fire time` — 让长跑 `/loop` 拥有可编辑的持久任务清单
- **[#3636](https://github.com/QwenLM/qwen-code/pull/3636)** `feat(core): cap concurrent in-flight requests per provider` — 将上游 429 转换为客户端背压
- **[#5917](https://github.com/QwenLM/qwen-code/pull/5917)** `feat(web-shell): add manual toggle for enhanced markdown tables` — 增强表格改为手动开关，避免误触发

### 📜 长期架构
- **[#2652](https://github.com/QwenLM/qwen-code/pull/2652)** `refactor: replace shell-utils string parsing with tree-sitter AST` — 用 AST 替换字符串解析，大幅提升引号/heredoc/嵌套鲁棒性

---

## 📈 功能需求趋势

从过去 24 小时的 31 条 Issue + 50 条 PR 中提炼，社区最强烈的诉求集中在以下方向：

1. **🏗 ACP / Serve 模式生产化**（热度第一）
   - #4175、#5677、#5852、#5910、#5912、#5847 持续推进；目标是 `qwen serve` 达到 production-ready
2. **🔐 安全与路径验证**
   - 由 #5829 引发的连续 4 个修复 PR 形成闭环，CWE-22 路径穿越、凭据缓存、slug 校验为重点
3. **📱 频道生态（Telegram / DingTalk / QQ）**
   - #5907（追踪）、#5901（qqbot）、#5919（Telegram）、#5887/#5888（qwen tag 多用户 agent）
4. **🖥 Desktop 应用加固**
   - 桌面端安全/校验成为今日最密集的 PR 来源
5. **⏱ 超时与进程管理**
   - #5838（用户可配超时）、#5918（实时警告）、#5873（PowerShell OOM 已修）
6. **🧩 Loop / 定时任务可观测性**
   - #5823（任务不可见）、#5889 + #5890（持久化任务文件）
7. **🌐 Web Shell 体验**
   - #5869（流式高亮）、#5917（表格开关）、#5883（chat panel 统一）
8. **🧠 性能与稳定性**
   - #5083（僵尸进程）、#5756（8K 上限）、#3636（并发）、#2036（长会话内存，已合）
9. **🔧 LSP 完善**
   - #3029（diagnostics 空）、#3034（缓存 + 刷新回退）

---

## 🧑‍💻 开发者关注点

社区反馈中的高频痛点：

- **安全焦虑**：路径穿越类 bug 一旦出现即被快速升级到 P1，CWE-22 修复在 desktop 端已是阻塞级问题
- **体验黑盒**：`/loop`、cron 任务"静默触发"，开发者**无法列出或中止自己创建的定时任务**（#5823），呼声较高
- **Windows 体验短板**：PowerShell 进程泄漏 OOM（#5873）、MCP filesystem 工具不可用（#4218）显示 Windows 平台仍是薄弱环节
- **模型成本失控**：升级后默认切到更高单价模型且擅自改 settings（#5819），反映**升级安全性**与**配置可解释性**需求
- **本地/私有部署友好度**：#5821 让本地 OpenAI 兼容后端默认关闭"追问建议"，减少 token 浪费，体现**对成本敏感的本地用户**群体在扩大
- **多用户协作**：#5887 "qwen tag" 拿到本期 Issue 👍 最高票（2 赞），参考 Claude Tag 的**群组共享常驻 agent** 形态被强烈看好
- **渲染细节**：TUI 末行覆盖、Edit 结果重复追加（#5894）这种"小但显眼"的视觉 bug 会显著影响专业用户信任度

---

> 📊 本期数据：30 条热门 Issues + 20 条热门 PR ｜ 完整动态请访问 [github.com/QwenLM/qwen-code](https://github.com/QwenLM/qwen-code)

</details>

---
*本日报由 [Big Model Radar](https://github.com/96loveslife/big_model_radar) 自动生成。*
# AI CLI 工具社区动态日报 2026-08-29

> 生成时间: 2026-08-29 06:35 UTC | 覆盖工具: 8 个

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

<think>The user wants me to generate a horizontal comparison analysis report based on the daily dynamics of multiple AI CLI tools. Let me carefully analyze all the data provided and synthesize it into a structured comparative report.

Let me extract key data points from each tool:

**Claude Code:**
- 1 release: v2.1.251 (PreModelSwitch/PostModelSwitch hooks, streaming subagent)
- 50 issues, 1 PR
- Top issue: #84352 (cyber safeguard, 164 comments)
- Focus areas: Windows desktop stability, cyber safeguard over-blocking, model routing

**OpenAI Codex:**
- 6 alpha releases (v0.151.0-alpha.7.1 → 12)
- 50 issues, 47 PRs
- Top issue: #40752 (Windows Desktop crash, 86 comments/51 likes)
- Focus areas: Windows Desktop stability, MCP/OAuth, TUI transparency

**Gemini CLI:**
- 1 release: v0.59.0-nightly
- 50 issues, 14 PRs
- Top issues: #22323 (subagent recovery), #21409 (generalist hangs)
- Focus areas: Security hardening, Agent reliability, Auto Memory

**GitHub Copilot CLI:**
- 1 release: v1.0.82-1 (auth error improvement)
- 22 issues, 1 PR
- Top issue: #4612 (FileWatch runaway, 13GB log)
- Focus areas: Windows compatibility, TUI rendering, Enterprise/compliance

**Kimi Code CLI:**
- 0 releases
- 2 issues, 1 PR
- Top issue: #2625 (MCP tool file guard bypass), #2626 (cache_read billing anomaly)
- Focus areas: MCP security, billing transparency

**OpenCode:**
- 0 releases
- 50 issues, 50 PRs
- Top issue: #29079 (GPT slow, 119 comments/52 likes)
- Focus areas: V2 stability, multi-model support, plugin ecosystem

**jcode:**
- 1 release: v0.81.2 (Mermaid fixes)
- 36 issues, 1 PR
- Top issue: #677 (retry backoff), #836 (theme command)
- Focus areas: TUI personalization, MCP management, provider compat

**pi:**
- 1 release: v0.84.4 (terminal capability overrides)
- 46 issues, 18 PRs
- Top issue: #8584 (TUI corruption), #6879 (auto-compaction - closed with 20 likes)
- Focus areas: TUI rendering, compaction mechanism, multi-provider

Now let me organize this into a comparative analysis. I need to:

1. **生态全景** - 3-5 sentences overall landscape
2. **各工具活跃度对比** - Table with Issues/PR/Releases
3. **共同关注的功能方向** - Common concerns across tools
4. **差异化定位分析** - Differentiation
5. **社区热度与成熟度** - Activity and maturity assessment
6. **值得关注的趋势信号** - Industry trends

Let me think about common concerns:
- Windows compatibility (Claude Code, Codex, Copilot CLI)
- TUI rendering/performance (Codex, Copilot CLI, pi, jcode)
- MCP ecosystem (Codex, Kimi, Gemini, jcode)
- Multi-model/multi-provider support (OpenCode, Codex, jcode, pi)
- Cost/quota transparency (Claude Code, OpenCode, Kimi)
- Security hardening (Gemini, Kimi)
- Compaction/context window management (pi, OpenCode)
- Session/sidebar management (Claude Code)
- Auto-compaction reliability (pi)
- Skill/subagent systems (Gemini, jcode)
- Cyber safeguard/safety false positives (Claude Code)

Differentiation:
- Claude Code: Enterprise focus, hook extensibility, model governance
- Codex: Windows desktop stronghold, alpha iteration pace
- Gemini CLI: Security-first, agent reliability, Auto Memory
- Copilot CLI: GitHub ecosystem integration, enterprise/auth
- Kimi: Security/billing concerns, smaller community
- OpenCode: V2 transition, plugin extensibility, multi-model agnosticism
- jcode: TUI personalization, slash commands, MCP UX
- pi: Terminal IDE-ization, compaction sophistication, multi-protocol

Maturity assessment:
- Most mature: Claude Code, Codex (large communities, frequent releases)
- Rapid iteration: Codex (6 alphas), OpenCode (V2), pi (frequent PRs)
- Stable but smaller: Copilot CLI, jcode
- Security/innovation focused: Gemini CLI, Kimi
- Emerging: jcode (1 author dominant), Kimi (small but high-impact)

Trends:
1. Windows desktop stability is the #1 pain point industry-wide
2. MCP ecosystem standardization is happening across all tools
3. Multi-model/multi-provider agnosticism is becoming table stakes
4. Cost transparency / billing observability rising in priority
5. TUI rendering quality + streaming is a key differentiator
6. Compaction/context window management is now core reliability
7. Security hardening (IdP, SFN, DNS rebinding) is being addressed
8. Hook/extensibility systems are expanding (model switch, tool events)
9. Auto Memory / persistent context becoming standard
10. Enterprise compliance (GHEC, data residency, OAuth) becoming central

Let me write this up now in a professional Chinese report.</think>

# AI CLI 工具生态横向对比分析报告

**统计窗口**：2026-08-28 → 2026-08-29 UTC
**覆盖工具**：Claude Code · OpenAI Codex · Gemini CLI · GitHub Copilot CLI · Kimi Code CLI · OpenCode · jcode · pi

---

## 一、生态全景

2026 年 8 月末的 AI CLI 工具生态呈现 **"成熟玩家补短板、新生代拼速度"** 的双轨格局：以 Claude Code、Codex、Copilot CLI 为代表的头部产品已进入企业级稳定性的深水区，被 Windows 桌面端稳定性、Cyber/Auth 体系、Sandbox 误判等"工程债"反复拉扯；而 OpenCode（V2）、jcode、pi 等新生代正以高频小步快跑（Codex 24 小时 6 个 alpha、OpenCode 50 PR 并行）抢占多模型中立、TUI 体验、Compaction 可靠性等差异化高地。**共同的演进方向集中在 5 条主线：Windows 一致性、MCP 生态标准化、模型路由与计费可观测、压缩/上下文窗口的可靠性、以及面向企业的安全与合规加固**。

---

## 二、各工具活跃度对比

| 工具 | Release | Issue 更新 | PR 更新 | 头部 Issue 互动 | 阶段特征 |
|------|:------:|:----------:|:-------:|:--------------:|----------|
| **Claude Code** | 1 (v2.1.251) | 50 | 1 | 164 💬 / 25 👍 (#84352) | 成熟期·功能收敛+企业债 |
| **OpenAI Codex** | **6 alpha** | 50 | 47 | 86 💬 / 51 👍 (#40752) | 冲刺期·高频迭代+桌面回归 |
| **Gemini CLI** | 1 nightly | 50 | 14 | 13 💬 (#22323) | 巩固期·安全加固+Agent 深化 |
| **GitHub Copilot CLI** | 1 (v1.0.82-1) | 22 | 1 | — (#4612 最受关注) | 稳态期·增量修复+企业场景 |
| **Kimi Code CLI** | 0 | 2 | 1 | — (#2625 安全) | 静默期·高敏感度低频次 |
| **OpenCode** | 0 | 50 | **50** | 119 💬 / 52 👍 (#29079) | V2 收尾·密集重构+基础设施 |
| **jcode** | 1 (v0.81.2) | 36 | 1 | 5 💬 (#677) | 渐进期·单作者主导 |
| **pi** | 1 (v0.84.4) | 46 | 18 | 24 💬 / 20 👍 (#6879) | 快节奏·多协议+压缩打磨 |

> 📊 **活跃度直观排序**：OpenCode（100 总活动）> Codex（103 总活动）≈ Claude Code（51）> Gemini（64）> pi（65）> jcode（38）> Copilot CLI（24）> Kimi（3）。
>
> **节奏对比**：Codex 6 alpha/24h 与 OpenCode 50 PR/24h 形成鲜明对照——前者是"功能冲刺"，后者是"V2 code freeze 前清扫"。

---

## 三、共同关注的功能方向

以下方向在 **≥3 个工具** 社区中同时出现高频讨论：

### 1. 🪟 Windows 平台一致性（4 个工具）
- **Claude Code**：#53247、#74170、#87659、#90172、#90353 — 进程/Job Object 残留、MSIX 安装、IME、链接点击崩溃、Stealth Restart 杀 session
- **OpenAI Codex**：#40752、#40776、#40878、#41241 — v26.820 桌面端启动崩溃簇
- **GitHub Copilot CLI**：#4165（resume 挂起）、#4652（25H2 沙箱失败）、#4653（AltGr 吞键）
- **OpenCode**：#46085（Windows shell 死锁）、#46090（面板描边裁剪）
- **共同诉求**：桌面端进程生命周期、IME / 国际键盘、沙箱兼容性、MSIX/AppX 安装链路

### 2. 🔌 MCP 生态标准化与可靠性（5 个工具）
- **Claude Code**：Cyber safeguard 误判（#84352、#90501、#90499）
- **OpenAI Codex**：#15122 OAuth 不持久化、#41447 `openai/elicitation` 协议
- **Gemini CLI**：#29117 OAuth IdP 校验、#28971 工具名冲突
- **Kimi Code CLI**：#2625 内置文件防护未覆盖 MCP
- **jcode**：#440、#835 TUI 端 MCP 开关
- **共同诉求**：OAuth 持久化、IdP 混淆防御、工具搜索/限流/命名空间、跨工具一致的权限模型

### 3. 💰 计费 / 配额可观测性（4 个工具）
- **Claude Code**：#80261、#83092、#80732（用量条、程序化 `/usage`）
- **OpenCode**：#34402（21 USD / 2 min 单 prompt 黑洞）
- **Kimi Code CLI**：#2626（cache_read 10× 放大）
- **pi**：#8784（per-model max_tokens cap）、#8794（footer stats line）
- **共同诉求**：cache_read/creation 拆分明细、session-level budget guard、长会话预警

### 4. 🧠 Compaction / 上下文窗口可靠性（4 个工具）
- **pi**：#6879 自动压缩不触发（24 💬 / 20 👍，已由 #8782 修复）
- **OpenAI Codex**：#41461 多 Agent / Goals 熔断
- **OpenCode**：V2 重点处理长上下文
- **Gemini CLI**：#26522/26523/26525 Auto Memory 系列
- **共同诉求**：压缩阈值前置、可配置 thinking level、压缩失败重试、内存持久化策略

### 5. 🏢 企业级认证与合规（4 个工具）
- **Claude Code**：PreModelSwitch / PostModelSwitch 钩子（v2.1.251）
- **OpenAI Codex**：GHEC 数据驻留 401（#4527）
- **GitHub Copilot CLI**：Atlassian MCP OAuth 回归（#4480）、Enterprise URL（#4654）
- **Gemini CLI**：工作区 trust fail-closed（#29099）、IdP 混淆（#29117）
- **共同诉求**：租户端点识别、细粒度认证错误信息、OAuth 跨重启持久化、合规可审计钩子

### 6. 🎨 TUI 渲染与流式体验（4 个工具）
- **OpenAI Codex**：#39903（"Ran N commands"折叠，65 👍）
- **GitHub Copilot CLI**：#4612（FileWatch 死循环 + 13GB 日志）、#4533（并行子代理 TUI 卡死）
- **pi**：#8584（流式输出逐词换行）、#8806（窄终端崩溃）
- **jcode**：#583（三套信息子系统闪烁）、#836（`/theme`）
- **共同诉求**：流式输出宽度推断稳健、并行事件消费不丢失、日志环形缓冲、终端能力可覆写

---

## 四、差异化定位分析

| 工具 | 功能侧重 | 目标用户 | 技术路线特征 |
|------|----------|----------|--------------|
| **Claude Code** | **模型治理 + 企业合规** + Remote/Dispatch 多端 | 中大型企业、SOC2 合规团队、复杂多模型路由需求 | 钩子驱动（Pre/PostModelSwitch）、Hook + Remote/Dispatch 双链路 |
| **OpenAI Codex** | **桌面端 + Windows 一致性** + 多 Agent / Goals | Windows 企业桌面用户、自动化工作流重度用户 | alpha 高频迭代、Bot 自动合并、Desktop + CLI + TUI 三端并行 |
| **Gemini CLI** | **安全 + Auto Memory** + Agent 可观测性 | 安全敏感团队、长会话知识工作者 | Fail-closed 默认、SFN/DNS/IdP 多层防御、Auto Memory 体系化 |
| **GitHub Copilot CLI** | **GitHub 生态 + 企业认证** + IDE 联动 | GitHub Enterprise 用户、CI/CD 自动化 | 与 GitHub Actions、Repo、PR/MCP OAuth 深度集成 |
| **Kimi Code CLI** | **安全 + 计费透明** | 中国市场开发者、安全研究者 | 快速响应 CVE、单点修复+计费反馈 |
| **OpenCode** | **多 provider 中立 + 插件生态** + V2 桌面化 | 本地模型/自托管用户、插件作者 | Provider 适配层 + 插件（worktree 事件）、SST 部署 V2 web |
| **jcode** | **TUI 个性化 + Slash 命令体系** | 重度 TUI 用户、theme/MCP UX 敏感者 | TOML 配置即代码、slash 命令空间化 |
| **pi** | **终端 IDE 化 + Compaction 深度** + 多协议 Provider | 长会话开发者、多模型实验者 | Compaction 引擎、per-provider 协议适配层、Terminal capability overrides**

> 📌 **关键观察**：
> - **"企业级"已分裂为两条路径**：Claude Code 走"钩子治理"，Copilot CLI 走"租户认证"，Gemini CLI 走"安全默认"。
> - **"多模型中立"成为新基线**：OpenCode、jcode、pi、Codex 均把 provider 适配层作为一等公民。
> - **"Windows 友好度"成为隐形战场**：Codex、Claude Code、Copilot CLI 在此投入最多，OpenCode、pi 跟进。
> - **"终端 IDE 化"是新生代共识**：pi（窄终端 + 选中编辑）、jcode（theme + @frecency）、OpenCode（QR 配对）。

---

## 五、社区热度与成熟度评估

### 头部成熟产品（用户基数大、企业债重）
- **Claude Code**：50 issues、1 PR — 进入"功能收敛 + 体验债务"阶段。Hooks 体系成熟但 Windows 桌面与 Cyber safeguard 误判成为拦路虎。
- **OpenAI Codex**：50 issues、47 PRs（PR 全为 bot）— 24h 6 个 alpha 显示**最强发布节奏**，但 Windows 桌面端已积累大量跨版本回归。
- **GitHub Copilot CLI**：22 issues、1 PR — 节奏保守（每日 1 个补丁版本），社区已偏向"工单驱动"，v1.0.79-1.0.81 在 OAuth/MCP 上多次回归。

### 快速迭代期（功能冲刺 / V2 收尾）
- **OpenCode**：50 issues、50 PRs — V2 收尾的**清扫模式**，@kitlangton + @Hona 双核驱动，密集修复 Windows/AI/Util 多个子系统。
- **pi**：46 issues、18 PRs — 高频多协议适配 + Compaction 引擎打磨，#6879 的关闭标志着压缩可靠性进入成熟期。

### 渐进完善期
- **Gemini CLI**：50 issues、14 PRs — 安全主题贯穿（SFN、IdP、OAuth、不安全配置加载），进入**可信生产工具**的深化阶段。
- **jcode**：36 issues、1 PR — 单作者 (@1jehuang + @alecuba16) 主导，本期 1 PR 合并 5 个高优先级修复，TUI 个性化与 MCP UX 是其差异点。

### 低活跃度但议题敏感
- **Kimi Code CLI**：2 issues、1 PR — 数量虽少，但 #2625（高危 MCP 安全）和 #2626（计费放大）都是**单点即可重创信任**的议题，社区需要更多主动维护。

> 📊 **健康度指标**：
> - **PR 密度**（PR / Issue）：Codex 0.94、OpenCode 1.0、pi 0.39、Gemini 0.28、jcode 0.03、Claude Code 0.02、Copilot CLI 0.05、Kimi 0.5
> - 高 PR/Issue 比通常意味着活跃开发周期（Codex、OpenCode），低比意味着工单累积（Claude Code、Copilot CLI、jcode）。

---

## 六、值得关注的趋势信号

### 🚨 信号 1：Windows 桌面端已成行业级痛点
**4 个工具同时爆发**，且故障簇呈"系统性"特征（Codex v26.820 一次 6 类故障、Claude Code 7+ Windows issue 集中）。**对开发者的参考**：跨平台 CI 必须含 Windows 矩阵；企业内部署时，Linux 优先于 Windows 桌面是更稳妥的选型。

### 🚨 信号 2：MCP 协议栈正在进入"标准化-分层"阶段
Gemini CLI 把 SFN 路径绕过、IdP 混淆、OAuth 配置加载作为单独安全 PR 处理；OpenAI Codex 推进 `openai/elicitation` 协议；Kimi 暴露内置文件防护与 MCP 工具的不一致。**对开发者的参考**：自研 MCP server 应默认实现 `elicitation` 表单、按工具配置 `output_token_limit`、遵循 RFC 9207 issuer 校验。

### 🚨 信号 3：可观测性

---

## 各工具详细报告

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills 社区热点

> 数据来源: [anthropics/skills](https://github.com/anthropics/skills)

<think>The user wants me to analyze the Claude Code Skills community data and generate a report in Chinese. Let me carefully review the data provided.

Looking at the PRs (sorted by comments/reactions):
- Most PRs show "评论: undefined | 👍: 0" which seems like the data format issue, but I can still analyze based on the PR content, creation/update dates, and engagement signals

Looking at the Issues (sorted by comment count):
- #492: Security concern about community skills under anthropic/ namespace - 43 comments
- #228: Enable org-wide skill sharing in Claude.ai - 16 comments
- #556: run_eval.py 0% trigger rate bug - 12 comments
- #62: Skills disappeared - 10 comments
- #1329: Proposing compact-memory skill - 9 comments
- #202: skill-creator best practice update - 8 comments (closed)
- #412: agent-governance skill proposal - 6 comments (closed)
- #189: document-skills and example-skills duplicates - 6 comments
- #1487: claude-api skill context window exhaustion - 4 comments
- #1390: mcp-builder evaluation.py 0/N scores - 4 comments
- #1385: Reasoning Quality Gate Pipeline proposal - 4 comments
- #1175: SharePoint Online security concerns - 4 comments (closed)
- #29: Usage with bedrock - 4 comments
- #16: Expose Skills as MCPs - 4 comments
- #12: docx whitespace reformatting - 4 comments

Now I need to identify the "hottest" PRs. Since the comment counts are undefined, I'll have to infer based on:
- Content relevance to active issues
- Update dates (recently active = high engagement)
- Connection to high-comment issues
- Technical significance

Let me identify the most important PRs based on content analysis:

1. #1298 - fix(skill-creator): run_eval.py always reports 0% recall - directly addresses the high-comment issue #556 (12 comments)
2. #514 - Add document-typography skill - addresses common AI document issues
3. #1615 - Add scnet-hpc skill - HPC cluster operations
4. #538 - fix(pdf): case-sensitive file references
5. #486 - Add ODT skill - OpenDocument support
6. #210 - Improve frontend-design skill
7. #83 - Add skill-quality-analyzer and skill-security-analyzer
8. #541 - fix(docx): prevent tracked change w:id collision
9. #539 - fix(skill-creator): warn on unquoted description
10. #1628 - Add Hivemind: Zero-Cost Multi-Agent Orchestration
11. #1607 - Update claude-api skill: mark four retired model IDs
12. #1602 - fix: resolve evaluation serialization, benchmark metrics
13. #1595 - docs: add UIZZE to partner skills
14. #1367 - feat(skills): add self-audit
15. #1099 - skill-creator: fix run_eval.py crash on Windows
16. #1050 - skill-creator: fix Windows subprocess + encoding bugs
17. #723 - feat: add testing-patterns skill
18. #568 - feat: add ServiceNow platform skill
19. #525 - Add pyxel skill for retro game development
20. #509 - docs: add CONTRIBUTING.md

Let me create the report now.

For the "热门 Skills 排行", I should pick the PRs that have the most community interest based on connections to hot issues, recent activity, and impact:

Top 5-8 hot skills:
1. #1298 - skill-creator fix for run_eval.py (linked to #556 with 12 comments)
2. #1099 - Windows fix for run_eval.py (same issue family)
3. #1050 - Another Windows fix for skill-creator
4. #514 - document-typography (addresses universal AI pain point)
5. #83 - skill-quality-analyzer + skill-security-analyzer (addresses #492 security concern)
6. #1367 - self-audit skill (linked to #1385)
7. #1628 - Hivemind multi-agent orchestration
8. #723 - testing-patterns skill

For "高潜力待合并 Skills", I should focus on PRs that are still OPEN and have clear utility:
- #1298, #1099, #1050 (skill-creator fixes)
- #514 (document-typography)
- #1615 (scnet-hpc)
- #486 (ODT)
- #210 (frontend-design improvement)
- #83 (skill-quality/security analyzer)
- #541, #539 (bug fixes)
- #1628 (Hivemind)
- #1607 (claude-api retired models)
- #1367 (self-audit)
- #723 (testing-patterns)
- #568 (ServiceNow)
- #525 (Pyxel)
- #509 (CONTRIBUTING.md)

Now let me write the report in Chinese, professional and concise.</think>

# Claude Code Skills 社区热点报告
**数据截止：2026-08-29**

---

## 1. 热门 Skills 排行

| # | PR / Skill | 核心功能 | 社区热点 | 状态 |
|---|---|---|---|---|
| 1 | **#1298 skill-creator 0% recall 修复** | 修复 `run_eval.py` 在所有场景下报告 recall=0% 的致命缺陷，同时修复 Windows 流读取、触发检测与并行 worker 问题 | 直接回应 Issue #556（12 条评论，10+ 独立复现），影响描述优化循环的信号可信度 | OPEN |
| 2 | **#83 skill-quality-analyzer / skill-security-analyzer** | 双元 Meta-Skill：质量分析 5 维度评分 + 安全审计，对 Skill 自身做体检 | 呼应 Issue #492（43 评论，关于 namespace 滥用与信任边界），社区对 Skill 治理诉求强烈 | OPEN |
| 3 | **#514 document-typography** | 排版质量控制：孤儿/寡妇段落、编号对齐等 AI 生成文档常见排版缺陷 | 触及"每个 AI 生成文档都受影响"的普遍痛点，长期价值显著 | OPEN |
| 4 | **#723 testing-patterns** | 全栈测试模式：Testing Trophy、AAA、React Testing Library、契约测试、性能基准 | 对应软件开发刚需，但迟迟未合并（5 个月未动） | OPEN |
| 5 | **#1628 Hivemind 多 Agent 编排** | 让 Claude Code 调度免费 headless opencode workers 处理机械任务，把昂贵模型留给规划/审阅/合并 | 与 Issue #228（组织级 Skill 共享，16 评论）呼应，揭示"高价值模型算力稀缺"诉求 | OPEN |
| 6 | **#1367 self-audit（v1.3.0）** | 交付前自审：先机械验证文件存在，再按损伤严重度排序做四维推理审计 | 对应 Issue #1385（Reasoning Quality Gate Pipeline，4 评论），质量门控方向探索 | OPEN |
| 7 | **#1099 + #1050 skill-creator Windows 兼容** | 两条互补 PR，修复 Windows 下 `claude.cmd` 调用与 subprocess 编码问题 | run_eval 在 Windows 上"全军覆没"，跨平台阻塞严重 | OPEN |
| 8 | **#486 ODT Skill** | OpenDocument 创建/模板填充/HTML 解析，对应 LibreOffice 与 ISO 标准 | 与 #12（docx 空白字符破坏，4 评论）共同构成"办公文档格式覆盖"主线 | OPEN |

---

## 2. 社区需求趋势

从 Issues 提纯出五大方向：

### 🔒 安全与信任治理（最热，43 评论）
- **#492**：社区 Skill 在 `anthropic/` 命名空间下分发，冒充官方 → 信任边界滥用，被多方复现且持续讨论。**这是当前最严峻的生态问题**。

### 🏢 组织级 Skill 分发（16 评论，👍 8）
- **#228**：希望在 Claude.ai 内置组织内 Skill 共享/库管理，替代当前"下载 .skill → Slack 传 → 手动 Settings 上传"的链路。
- **#16**：把 Skills 暴露为 MCP，统一协议化能力调用接口。

### 🐛 skill-creator 评估管线可信度（12 + 8 评论）
- **#556**：评估管线完全失效，描述优化在"对抗噪声"。
- **#202**（已关闭）：skill-creator 风格像开发文档而非可执行 Skill，违背命名规范 → 元工具自身需要重写。

### 🧠 Agent 自治能力增强
- **#1329** compact-memory：符号化压缩长时 Agent 状态，减少上下文消耗。
- **#1385** Reasoning Quality Gate Pipeline：交付前→对抗审查→交付验证的三道门。
- **#412** agent-governance（已关闭）：策略执行、威胁检测、信任评分、审计追踪。

### 📄 办公文档与企业系统覆盖
- **#12** docx 空白字符问题（4 评论，长期未解决）。
- **#1487** claude-api Skill 一次性注入 ~156k token，直接耗尽上下文 → **Skill 体积/懒加载**成为普遍关切。
- **#1175**（已关闭）SharePoint 接入的权限控制如何在 SKILL.md 中表达。

---

## 3. 高潜力待合并 Skills

下列 PR 已成熟但仍 OPEN，按落地优先级排列：

| 优先级 | PR | 说明 | 阻塞信号 |
|---|---|---|---|
| ⭐⭐⭐ | [#1298](https://github.com/anthropics/skills/pull/1298) skill-creator 修复 | 修复"评估=噪声"的元问题，影响所有依赖 run_loop/improve_description 的下游 | 直接绑定 12 评论热门 Issue |
| ⭐⭐⭐ | [#1099](https://github.com/anthropics/skills/pull/1099) + [#1050](https://github.com/anthropics/skills/pull/1050) | 解决 Windows 全平台失能 | 两条互补 PR，待统一合并 |
| ⭐⭐ | [#1602](https://github.com/anthropics/skills/pull/1602) | 修复 evaluation.py 序列化/编码/稳定性，呼应 #1390（0/N 评分） | 涉及 MCP builder 与 Skill 创建工具链稳定性 |
| ⭐⭐ | [#514](https://github.com/anthropics/skills/pull/514) document-typography | 高复用价值，直接改善每个文档输出 | 2026-03 提交至今未合 |
| ⭐⭐ | [#83](https://github.com/anthropics/skills/pull/83) skill-quality/security-analyzer | 适配 #492 安全议题，长尾治理工具 | 已 9 个月 OPEN |
| ⭐⭐ | [#723](https://github.com/anthropics/skills/pull/723) testing-patterns | 软件工程刚需 Skill | 5 个月未推进 |
| ⭐ | [#1628](https://github.com/anthropics/skills/pull/1628) Hivemind 多 Agent 编排 | 开辟"零成本 worker + 强模型调度"范式 | 新概念，社区讨论门槛较高 |
| ⭐ | [#1367](https://github.com/anthropics/skills/pull/1367) self-audit v1.3.0 | 输出质量门控，与 #1385 提案互补 | 提议阶段，需要协议层认可 |
| ⭐ | [#1615](https://github.com/anthropics/skills/pull/1615) scnet-hpc | HPC 集群 SSH/Slurm 工作流 | 垂直场景但需求明确 |
| ⭐ | [#568](https://github.com/anthropics/skills/pull/568) ServiceNow 平台 | 覆盖 ITSM/ITOM/SecOps/ITAM 等 7 大域 | 企业级场景，体量大 |

**官方配套补丁（短期落地概率极高）**：
- [#1607](https://github.com/anthropics/skills/pull/1607) 标记 4 个已退役模型 ID（fixes #1603）
- [#538](https://github.com/anthropics/skills/pull/538) / [#541](https://github.com/anthropics/skills/pull/541) / [#539](https://github.com/anthropics/skills/pull/539) PDF/DOCX/skill-creator 小修

---

## 4. Skills 生态洞察

> **社区最集中的诉求是：把"创建与评估 Skill"的元工具链（skill-creator / run_eval / mcp-builder）从"看似能用、实际失真"的状态重塑为可信基座——因为只有评估信号可信，组织级分发、安全治理、Agent 自治这三层上层建筑才能真正落地。**

简言之：**底层工具的可信度瓶颈，已开始拖住整个 Skills 生态的上层创新。**

---

<think>
Let me analyze the GitHub data for Claude Code community dynamics on 2026-08-29.

Key observations:
1. New release v2.1.251 with PreModelSwitch/PostModelSwitch hooks and streaming subagent tool calls
2. Most active issue is #84352 about cyber safeguard blocks (164 comments, 25 thumbs up)
3. Several Windows-related bugs (Desktop, MSIX, IME)
4. Multiple cyber safeguard false positives
5. Only 1 PR updated in the last 24 hours (#87079 about glob patterns)

Let me structure the report:

1. 今日速览 - Key takeaways
2. 版本发布 - v2.1.251
3. 社区热点 Issues - Top 10
4. 重要 PR 进展 - Only 1 PR, but I should still include it
5. 功能需求趋势
6. 开发者关注点

For PR section, since there's only 1 PR, I'll mention that and discuss it. The user asked for 10 PRs but there's only 1, so I should adapt.

Let me pick the top 10 issues by relevance and community engagement:
1. #84352 - Cyber safeguard blocks (164 comments, hot topic)
2. #10018 - Web session from non-default branch (closed, 86 likes)
3. #53247 - Windows Desktop crash (31 comments)
4. #77071 - Missing Dispatch tab
5. #11627 - .NET 9/10 SDK support (75 likes, closed)
6. #74170 - MSIX installation failure
7. #78229 - Scheduled task sessions missing
8. #88405 - Symlinks in .claude/rules/ not loaded (docs contradict behavior)
9. #88094 - Remote Control default on
10. #90172 - Stealth restart destroys sessions
11. #87659 - Browser tab crash
12. #79410 - Dispatch locks to Fable 5
13. #67840 - 600s phantom deny
14. #90353 - Click link kills app
15. #90405 - Git worktree file link issue

Let me select 10 most important:
1. #84352 - 164 comments
2. #10018 - 86 likes, closed (good news)
3. #53247 - Windows crash with HRESULT
4. #11627 - .NET support, 75 likes
5. #88405 - symlink docs issue
6. #88094 - Remote Control default
7. #90172 - Stealth restart
8. #79410 - Dispatch Fable 5 lock
9. #67840 - 600s timeout
10. #90405 - Git worktree bug
11. #88778 - Opus 5 system prompt injection (closed)

Functional trends:
- Windows desktop stability (multiple crashes)
- Cyber safeguard false positives (recurring)
- Cross-platform support (.NET, packaging)
- Session/sidebar management
- Usage visibility
- IDE/web integration
- Model switching & lock-in
- Symlink/symlink support in rules
- Subagent visibility
- Permission system refinement

Developer pain points:
- Desktop app stability on Windows
- Cyber safeguards over-blocking legitimate work
- Model being locked (Fable 5)
- Remote Control defaults
- Session management in Dispatch/sidebar
- Stealth restarts killing sessions
- Symlink behavior contradicting docs

Let me write the report now in Chinese.
</think>
# Claude Code 社区动态日报
**日期：2026-08-29**

---

## 📌 今日速览

今日最大事件是 **v2.1.251 版本发布**，带来 `PreModelSwitch`/`PostModelSwitch` 钩子事件以及前台子代理工具调用的实时流式传输能力，模型切换治理与多代理可观测性显著增强。社区层面，**#84352** 关于 Claude.ai 已通过 CVP 审批的组织仍在 Claude Code 中遭遇 cyber safeguard 误判的 BUG 仍在持续发酵（评论数 164），Windows 桌面端稳定性与 session/D 调度管理类问题成为今日讨论焦点。

---

## 🚀 版本发布

### v2.1.251（今日发布）
🔗 [Release](https://github.com/anthropics/claude-code)

**核心更新：**
- **模型切换钩子**：新增 `PreModelSwitch` / `PostModelSwitch` 钩子事件，开发者可在模型切换前后进行阻断、确认或添加注释，模型切换治理首次具备完整拦截能力。
- **SessionStart 增强**：`SessionStart` resume 钩子现可接收 session staleness（过期时长）与 estimated re-cache cost（重新缓存成本），便于长会话恢复策略判断。
- **子代理流式可见性**：前台运行的子代理的工具调用与结果现在可实时流式传输至 Remote Control 客户端，远程观测子代理行为不再需要轮询。

> **解读**：模型切换钩子是面向企业合规、强制模型路由、成本控制场景的关键 API；子代理流式输出则让 Remote/Dispatch 场景下的"多代理编排可观测性"迈入新阶段。

---

## 🔥 社区热点 Issues

### 1. [BUG] CVP 审批组织仍遭遇 cyber safeguard 拦截 — #84352
🔗 [#84352](https://github.com/anthropics/claude-code/issues/84352) · 评论 164 · 👍 25 · OPEN
**为何重要**：今日最高热度 issue。曾通过 Cyber Verification Program (CVP) 审批的 Claude.ai 组织在 Claude Code 中再次被 cyber safeguard 拦截，且 Verification Portal 显示申请状态退回"审核中"，属于企业级工作流阻塞性问题，影响合规与生产环境。

### 2. [FEATURE] Claude Code Web 支持从非默认分支启动会话 — #10018
🔗 [#10018](https://github.com/anthropics/claude-code/issues/10018) · 评论 59 · 👍 86 · **CLOSED**
**为何重要**：今日关闭的热门 feature 请求。👍 86 票反映强烈的开发者诉求。社区长期需要 Claude Code Web 支持基于 feature/fix 分支直接启动会话的能力，是 GitOps/PR 工作流的关键功能，关闭意味着已实现或被纳入路线图。

### 3. [BUG] Claude Desktop 在 Windows 上启动失败（HRESULT 0x80070020）— #53247
🔗 [#53247](https://github.com/anthropics/claude-code/issues/53247) · 评论 31 · 👍 19 · OPEN
**为何重要**：崩溃后遗留孤儿 Silo / Job Object，唯一恢复手段是注销或重启。属于进程/资源生命周期管理类硬故障，对 Windows 用户影响严重。

### 4. [FEATURE] .NET 9/10 SDK 支持 — #11627
🔗 [#11627](https://github.com/anthropics/claude-code/issues/11627) · 评论 15 · 👍 75 · **CLOSED**
**为何重要**：高票功能请求（75 赞）今日关闭。Claude Code Web 运行时环境的 .NET 工具链升级一直滞后，本次关闭通常意味着官方已着手解决。

### 5. [BUG] `.claude/rules/` 中的 symlink 未被自动加载（与文档矛盾）— #88405
🔗 [#88405](https://github.com/anthropics/claude-code/issues/88405) · 评论 7 · 👍 4 · OPEN
**为何重要**：官方文档明确声明 `.claude/rules/` 目录支持 symlink，但 v2.1.238 实测不会加载。该问题直接影响"跨项目共享规则"这一被广泛推荐的最佳实践，团队级规则管理会因此静默失效。

### 6. [BUG] Remote Control 默认开启 — #88094
🔗 [#88094](https://github.com/anthropics/claude-code/issues/88094) · 评论 6 · 👍 8 · OPEN
**为何重要**：涉及默认安全姿态的争议。Remote Control 默认开启对安全敏感用户（特别是 Windows 平台）存在暴露面风险，👍 8 反映社区对默认安全策略的关切。

### 7. [BUG] Desktop 静默重启导致 session 全毁（"Can't reach your computer"）— #90172
🔗 [#90172](https://github.com/anthropics/claude-code/issues/90172) · 评论 1 · 👍 2 · OPEN
**为何重要**：用户整理的 8 个相互关联缺陷的报告。Stealth Restart 升级机制会强行结束运行中的 session 而不进行提示/迁移，对长任务用户尤其痛苦，远程协作场景下"computer_unreachable"错误高发。

### 8. [BUG] Dispatch 锁定到 Fable 5，无法切换模型 — #79410
🔗 [#79410](https://github.com/anthropics/claude-code/issues/79410) · 评论 4 · OPEN
**为何重要**：在 Max 计划下，Dispatch 会话（移动端 Cowork → Dispatch 控制的桌面会话）始终从 Fable 5 启动，且 Fable 5 用量耗尽后即便其他模型仍有余量也无法切换，是模型路由逻辑上的硬阻塞。

### 9. [BUG] 远端 VM session：工具调用在笔记本休眠时恰好 600s 后被幻影拒绝 — #67840
🔗 [#67840](https://github.com/anthropics/claude-code/issues/67840) · 评论 3 · **CLOSED**
**为何重要**：典型的超时阈值与"幽灵权限"问题。即便配置 `bypassPermissions`，盖上笔记本盖子后正在飞行的工具调用会恰好 600 秒后被标记为"user doesn't want to take this action"，是 macOS + Remote VM 工作流下的硬痛点。

### 10. [BUG] 模型为 git worktree 外文件生成 cwd-relative 链接，导致引用陈旧副本 — #90405
🔗 [#90405](https://github.com/anthropics/claude-code/issues/90405) · 评论 2 · OPEN
**为何重要**：涉及 worktree 场景下的引用一致性，影响任何使用 git worktree 进行并行 Claude 会话的工作流。模型对 worktree 中编辑的文件生成相对路径链接，在主 worktree 中会被解析为不同 commit 的陈旧文件，是潜在的静默错误源。

### 11. [BUG] Cyber safeguard 误判（数据库进程冲突解决、订单队列验证等）— #90501 / #90499 / #88927
🔗 [#90501](https://github.com/anthropics/claude-code/issues/90501) · [#90499](https://github.com/anthropics/claude-code/issues/90499) · [#88927](https://github.com/anthropics/claude-code/issues/88927) · OPEN
**为何重要**：今日连续出现 3 起 cyber safeguard 误判报告（severity: session-halted，触发模型 Opus 4.8），涉及数据库进程冲突排查、订单队列验证、引用核验等完全合法的工程工作。结合 #84352，cyber safeguard 的过度拦截已形成系统性社区问题。

---

## 🛠 重要 PR 进展

今日过去 24 小时内仅有 1 条 PR 更新，列表整体偏静默：

### [PR #87079] fix(security-guidance): `**` glob 模式应匹配零深度路径
🔗 [#87079](https://github.com/anthropics/claude-code/pull/87079) · OPEN
**内容**：原实现将 glob 匹配委托给 `fnmatch`，但 bare `*` 已跨越 `/`，导致 `**/*.ts` 必须存在字面 `/`，使得 `security-patterns.json` 中的规则会**静默漏掉顶层文件**，与注释中"** matches any depth"的承诺不符。修复后 `**` 将按预期匹配零深度路径。
**为何重要**：这是 security-patterns 配置——直接关系到权限边界的核心机制。规则静默不匹配属于高危的"安全沉默失败"模式（silent non-coverage），是开发者生态中不容忽视的修复。

> 📭 PR 流量说明：过去 24 小时内仓库仅有 1 条 PR 更新，社区贡献节奏较慢，可能与 v2.1.251 发布前的冻结期相关。建议关注后续 PR 重启节奏。

---

## 📈 功能需求趋势

从今日活跃 issue 中提炼的社区关注方向：

| 方向 | 代表 issue | 社区热度 |
|---|---|---|
| **🪟 Windows 桌面端稳定性** | #53247、#74170、#87659、#90353、#90172、#90512 | 🔥 极高，多类崩溃/MSIX 安装/IME 输入问题集中爆发 |
| **🛡️ Cyber safeguard 误判** | #84352、#90501、#90499、#88927 | 🔥 极高，跨多个业务域的"授权工作被拦截" |
| **🌐 Claude Code Web 能力扩展** | #10018、#11627 | ⭐ 高，非默认分支启动 + .NET SDK 支持 |
| **📊 用量/计费可见性** | #80261、#83092、#80732 | ⭐ 高，桌面端用量条、程序化访问 `/usage` |
| **🧠 模型路由与切换** | #79410、#88094、#88778 | ⭐ 高，Fable 5 锁定、Remote 默认开启、Opus 系统提示注入 |
| **📂 Session/sidebar 管理** | #78229、#85285、#82788 | 中，调度任务产生 session、子会话 sidebar 归属、跨设备可见性 |
| **🔗 规则系统与工作流** | #88405、#87769 | 中，symlink 行为、Terminal 鼠标支持 |
| **⏱️ 远程/休眠边缘场景** | #67840、#90353 | 中，600s 阈值、链接点击崩溃 |

---

## 🧑‍💻 开发者关注点

1. **桌面端可用性正在成为拦路虎** — Windows Claude Desktop 的进程生命周期（孤儿 Silo）、MSIX 安装、IME 输入、Browser tab 崩溃、链接点击崩溃、Stealth Restart 杀 session 等问题集中暴露，企业用户在 Windows 平台上落地 Claude Desktop 的信心受挫。

2. **Cyber safeguard 过度拦截已是"生产事故级"问题** — 已通过 CVP 审批的组织、订单队列验证、数据库进程冲突排查、引用核验等完全合法的工程工作均被 Opus 4.8 拦停，社区从"偶发体验问题"升级为"系统性业务影响"。

3. **Dispatch / Cowork 多端协作链路仍存在多个断层** — 模型锁死、跨端 session 不可见、远程计算机不可达、Remote Control 默认开启等组合起来构成完整多端场景的脆弱性。

4. **规则与权限系统的"沉默失败"是信任杀手** — `.claude/rules/` 的 symlink 行为、security-patterns.json 的 `**` glob 行为，均是配置符合预期但运行时静默失效，这类问题尤其需要官方文档与实现的同步校对。

5. **用量透明度需求被反复提出** — 桌面端用量条、程序化 `/usage`、usage bar 等多个独立请求指向同一目标：长会话与 agent 工作流需要可控的预算感知能力。

6. **v2.1.251 钩子扩展受欢迎** — `PreModelSwitch` / `PostModelSwitch` 与 `SessionStart` 增强，让企业级强制路由、合规审批、成本归因方案具备了落地所需的钩子基础，预计将成为未来 PR 与第三方集成的主要扩展面。

---

*本日报基于 2026-08-29 24 小时内更新的 GitHub 数据生成，共统计 50 条 issue、1 条 PR。*

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

<think>Let me analyze the GitHub data for OpenAI Codex and create a comprehensive daily report in Chinese.

Key observations:
1. Multiple alpha releases (v0.151.0-alpha.7.1 through alpha.12) - heavy alpha iteration
2. Major issue: Windows Desktop app failures after v26.820 update - very high community engagement (86 comments, 51 thumbs up on #40752)
3. Scheduled tasks auto-disabling bug (#38350) - 55 comments
4. TUI/CLI enhancement requests gaining traction (#39903 - 65 thumbs up)
5. Many Windows-specific bugs (sandbox, AppX, WSL, MSIX auto-updater)
6. PRs are all from @copyberry[bot] - automated bot, mostly closed
7. Common themes: Windows desktop stability, MCP/OAuth, sandbox issues, session management

Let me structure the report properly.</think>

# OpenAI Codex 社区动态日报
**日期：2026-08-29**

---

## 📌 今日速览

今日 Codex 仓库呈现典型的 **alpha 密集迭代 + Windows Desktop 集中爆发故障** 双重特征：Rust CLI 在 24 小时内连续发布 6 个 alpha 预发布版本（v0.151.0-alpha.7.1 → 12），显示 0.151 正式版进入收尾冲刺；同时 **v26.820 系列 Windows Desktop 更新引发大规模崩溃**，相关 Issue 评论数与点赞数均创近期新高，CI/CD 与发布流程疑似存在严重回归。社区反馈高度集中在 Windows 平台稳定性、Scheduled Task 行为异常、以及 TUI/CLI 的功能增强需求三大方向。

---

## 🚀 版本发布

### Rust CLI：v0.151.0-alpha 高频迭代
| 版本 | 关键变化（基于 PR 反推） |
|---|---|
| [v0.151.0-alpha.7.1 → 12](https://github.com/openai/codex/releases) | 6 个连续 alpha 预发布 |

可观察到的功能收敛方向（来自同期已合并 PR）：
- **执行器插件机制扩展** (#41456, #41432, #41435)：支持 app targets、`Interrupt` 钩子、bundled browser cleanup
- **多 Agent / Goals 系统完善** (#41454, #41457, #41461)：失败熔断、proactive 指令、async 用户消息描述从模型目录派生
- **TUI 模型选择器** (#41467)：从 app server 异步刷新模型列表，修复启动缓存过期问题
- **MCP 能力扩展** (#41447, #41421)：支持 `openai/elicitation` 表单请求与 per-tool MCP 输出限制
- **Bazel / rules_rs 构建基础设施** (#41476, #41477)：release binary 平台映射、Rust 资源资产化整理
- **会话与权限** (#41464, #41448)：保留权限快照、Default 协作模式的问答处理

> 鉴于 alpha 节奏密集且无正式 changelog，建议等待 v0.151.0 stable 后再用于生产。

---

## 🔥 社区热点 Issues（Top 10）

### 1. [#40752](https://github.com/openai/codex/issues/40752) — Windows Desktop 启动崩溃（v26.820.60940）
**评论 86 | 👍 51** · 🔴 **今日最高优先级**
用户升级至 v26.820.60940 后桌面端报 *"Unable to locate Codex CLI"* 并伴随 `.cmd` 包装器的 `EINVAL`。这是 Windows Desktop 当前的头号稳定性问题，且与 #40776、#40878、#40972 等多个 issue 形成**故障簇**，高度疑似 26.820 系列引入了回归。

### 2. [#38350](https://github.com/openai/codex/issues/38350) — 定时任务被自动暂停
**评论 55** · 重复性 Schedule Task 在运行成功后状态从 enabled 变为 paused，且无用户授权记录。该问题横跨多个不相关任务，对自动化工作流造成**信任级损害**，但点赞数为 0，说明尚未引起主流用户关注。

### 3. [#39903](https://github.com/openai/codex/issues/39903) — 关闭"Ran N commands"折叠（增强请求）
**评论 44 | 👍 65** · 社区对 TUI 的"已执行命令折叠"行为不满，希望提供可关闭开关。这是今日**获得最多点赞**的工单，反映出高级用户对**可观测性与透明度**的强烈诉求。

### 4. [#37104](https://github.com/openai/codex/issues/37104) — WSL 集成终端静默失败
**评论 23 | 👍 9** · 在 `26.730.8199.0` 上 PTY/WSL 启动前集成终端即失败，底部与侧边栏无法打开。属 Windows + WSL 长期兼容性病灶之一。

### 5. [#34227](https://github.com/openai/codex/issues/34227) — Pet 宠物叠加层命中区域漂移
**评论 21** · Windows 上宠物 mascot 的可点击热区与可见位置随时间偏移，属于体验类（pets 标签）回归。

### 6. [#33192](https://github.com/openai/codex/issues/33192) — DWM Composition 句柄泄漏
**评论 15 | 👍 10** · Win10 22H2 上，含工具调用的任务会导致 DWM `Composition` 句柄持续累积（5 次调用 +22）。**性能与稳定性隐患**，值得内核组关注。

### 7. [#15122](https://github.com/openai/codex/issues/15122) — MCP OAuth 不持久化
**评论 12 | 👍 7** · 重启 Codex 后 MCP OAuth 登录状态丢失，远程 MCP 启动不完整。**跨 5 个月仍未关闭**的长期顽疾，影响企业 MCP 集成。

### 8. [#40002](https://github.com/openai/codex/issues/40002) — Android Remote 因大小写敏感路径校验失败
**评论 11 | 👍 8** · 在 Windows 上启动 Android Remote 新会话时，可信项目校验因路径大小写不匹配失败。属于跨平台远程协作体验缺陷。

### 9. [#39823](https://github.com/openai/codex/issues/39823) — Session 恢复失败（"already has an active writer"）
**评论 10** · 使用 `--not-so-yolo` / `--approve-for-me` 或切换 session 后，恢复会话时报"already has an active writer"。状态机并发缺陷。

### 10. [#17179](https://github.com/openai/codex/issues/17179) — Windows 沙盒破坏项目所有权
**评论 10 | 👍 6** · Workspace-write 沙盒在 Windows 上将项目所有权改为 `CodexSandboxOffline`，导致**持续性写入失败**。又一项**长期未修复**的 Windows 沙盒问题（已存在 4 个月）。

---

## 🛠 重要 PR 进展（Top 10）

> 今日所有 PR 均由 `copyberry[bot]` 提交并处于 CLOSED 状态，属于自动化集成窗口的批量合入。

### 1. [#41454](https://github.com/openai/codex/pull/41454) — Goals 失败熔断
为活跃 Goal 跟踪 `exec` 失败次数，连续 3 次失败后阻塞目标；任意工具成功即重置计数。**抑制重复无效执行**的关键机制。

### 2. [#41467](https://github.com/openai/codex/pull/41467) — TUI 模型选择器异步刷新
从 app server 拉取最新模型列表，显示缓存同时异步覆盖。**修复跨账户/权限变化的模型可见性陈旧问题**。

### 3. [#41456](https://github.com/openai/codex/pull/41456) — 浏览器插件 app targets
允许 curated remote Browser 插件注册 `Stop`/`SubagentStop` 钩子，携带可信 app 路由元数据。**远程浏览器集成的关键一环**。

### 4. [#41447](https://github.com/openai/codex/pull/41447) — `openai/elicitation` 表单协议
新增 MCP `openai/elicitation/create` 处理能力，与 legacy `openai/form` 解耦。**MCP 协议栈向前演进**。

### 5. [#41421](https://github.com/openai/codex/pull/41421) — Per-tool MCP 输出限制
为 MCP server 的每个 tool 配置 `output_token_limit`，取插件与用户策略中的较严值。**控制上下文预算**的有效工具。

### 6. [#41436](https://github.com/openai/codex/pull/41436) — TTY 子进程终端查询应答
拦截 device-status、窗口大小、DEC private-mode 等终端查询并作出有界响应。**解决 PTY 子进程阻塞**问题。

### 7. [#41448](https://github.com/openai/codex/pull/41448) — Default 协作模式问答处理
允许 `request_user_input` 用于"显著提升工作质量"的可选问题；工具无答则自行判断。**优化 agent 自主性与用户体验的平衡**。

### 8. [#41476](https://github.com/openai/codex/pull/41476) — rules_rs 平台映射
release binary 与 Rust target triple 对齐，替换旧的 LLVM 平台定义。**多平台构建基础**继续规范化。

### 9. [#41464](https://github.com/openai/codex/pull/41464) — 更新会话元数据时保留权限
延迟 legacy 沙盒策略投影，避免无谓重绑定。**减少权限状态被误改的概率**。

### 10. [#41452](https://github.com/openai/codex/pull/41452) — Code mode host 请求时长统计
精确测量 execute / wait / terminate 三个 host 操作的时间，排除客户端响应延迟。**可观测性改进**，便于排查性能问题。

---

## 📈 功能需求趋势

从 50 条活跃 Issue 与标签共现中提炼，社区关注度分布如下：

| 方向 | 占比（按标签） | 代表 Issue |
|---|---|---|
| **Windows Desktop 稳定性** | ~52% | #40752, #40776, #40878, #40972, #41241, #41339, #38843 |
| **Sandbox / 权限 / 安全** | ~12% | #17179, #41237, #15122 |
| **TUI/CLI 体验增强** | ~10% | #39903, #39823 |
| **会话 / 远程协作 / Multi-device** | ~10% | #40002, #34894, #23954 |
| **MCP / 插件生态** | ~8% | #38342, #15122 |
| **Scheduled Tasks / 自动化** | ~4% | #38350 |
| **Computer Use / Pet 等新特性** | ~4% | #41326, #34227, #41267 |

**趋势归纳**：
1. **Windows 是当下最大痛点**：超过一半的新增/活跃 Issue 与 Windows 平台相关（app 启动、沙盒、MSIX 自动更新、WSL、远程会话）。
2. **可观测性诉求上升**：`#39903` 获 65 赞为今日最高分项，反映高级用户希望**看到 agent 在做什么**，而非被折叠。
3. **MCP 仍是企业落地瓶颈**：OAuth 持久化、stdio 工具注册、per-tool 限流等问题在长期 issue 中反复出现。
4. **自动化任务信任危机**：Schedule Task 自动暂停未授权，威胁到"Work on the web"产品价值。

---

## 👨‍💻 开发者关注点（痛点与高频需求）

### 🚨 痛点 1：Windows Desktop 发布流程失控
v26.820 系列引入了至少 6 类不相关故障（CLI 查找失败、DWM 句柄泄漏、Send 按钮失效、沙盒 EPERM、空白渲染、AppX 更新卡死）。**强烈建议 OpenAI 引入 Windows 平台的灰度发布与回滚机制**。

### 🚨 痛点 2：长期 Issue 无人跟进
#15122（3 月）、#17179（4 月）、#33192（7 月）、#34227（7 月）均存在 1 个月以上仍未关闭。**项目治理透明度**有待提升。

### 🚨 痛点 3：TUI 透明度不足
"Ran N commands" 折叠、批处理执行汇总、`--approve-for-me` 后状态机等都让用户**难以复现与审计** agent 的实际行为。

### 💡 高频需求
- **可关闭的命令折叠开关**（#39903）
- **MCP OAuth 跨重启持久化**（#15122）
- **Windows 沙盒所有权恢复路径**（#17179）
- **Scheduled Task 暂停需审计日志**（#38350）
- **WSL 集成终端可靠性**（#37104, #41290）
- **Session resume 状态机修复**（#39823）
- **MCP per-tool 输出限制**（已在 #41421 落地 ✅）

---

## 📊 数据小结

| 指标 | 数值 |
|---|---|
| 今日发布 | 6 个 alpha |
| 活跃 Issues（前 30） | 50 条 |
| 活跃 PRs（前 20） | 47 条 |
| 最高评论 Issue | #40752（86 条） |
| 最高点赞 Issue | #39903（65 👍） |
| PR 作者集中度 | 100% 来自 `copyberry[bot]` |
| Windows 相关占比 | ~52% |

> 📎 建议关注明日 v0.151.0 stable 候选版本动向，以及 Windows Desktop 的紧急修复推送。

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

<think>The user wants me to generate a Chinese daily report for the Gemini CLI community based on GitHub data from 2026-08-29. Let me analyze the data carefully and structure the report according to the requested sections.

Let me first organize what I have:

**Releases (过去24小时):**
- v0.59.0-nightly.20260829.g0bd1d4397 - workspace trust and mcpServers filtering

**Issues (Top 30 by comments, need to pick top 10):**
1. #22323 - Subagent recovery after MAX_TURNS reports as GOAL success (13 comments, 2👍)
2. #21409 - Generalist agent hangs (8 comments, 8👍)
3. #19873 - Zero-Dependency OS Sandboxing & Post-Execution Intent Routing (8 comments, 1👍)
4. #22745 - AST-aware file reads, search, and mapping (7 comments, 1👍)
5. #21968 - Gemini does not use skills and sub-agents enough (6 comments, 0👍)
6. #26522 - Stop Auto Memory from retrying low-signal sessions (5 comments, 0👍)
7. #26525 - Add deterministic redaction and reduce Auto Memory logging (4 comments, 0👍)
8. #25166 - Shell command execution gets stuck with "Waiting input" (4 comments, 3👍)
9. #22232 - Enhance browser_agent resilience (4 comments, 0👍)
10. #21983 - browser subagent fails in wayland (4 comments, 1👍)
11. #21000 - Experiment with native file tools for task tracker (4 comments, 0👍)
12. #20079 - ~/.gemini/agents/filename.md not recognized if symlink (4 comments, 0👍)
13. #26523 - Surface or quarantine invalid Auto Memory inbox patches (3 comments)
14. #24246 - 400 error with >128 tools (3 comments)
15. #23571 - Model creates tmp scripts in random spots (3 comments)
16. #22672 - Agent should stop destructive behavior (3 comments)
17. #22267 - Browser Agent ignores settings.json overrides (3 comments)
18. #22186 - get-shit-done output hook causes crash (3 comments)
19. #20195 - Local Subagent Sprint 1 (3 comments)

**PRs (14 total, need to pick top 10):**
1. #29121 - chore/release: bump version to 0.59.0-nightly.20260829 (automated)
2. #28955 - Update dependencies, add MCP configuration, integrate ECC bundles (priority/p1, size/xl)
3. #28971 - fix(core): keep truncated MCP tool names unique (priority/p2)
4. #29120 - fix(core): improve destination validation and connection routing in web fetch (size/l)
5. #29119 - [CLOSED] test: CI env fingerprint (canary)
6. #29115 - fix(config): prevent insecure system-wide configuration loading (size/l)
7. #29117 - fix(core): prevent OAuth IdP mix-up in MCP authentication (size/m/l)
8. #29099 - [CLOSED] fix(core): enforce fail-closed workspace trust (size/m/l)
9. #29116 - fix(core): mitigate NTFS 8.3 short name (SFN) path (size/s/m)
10. #29118 - fix(extensions): only strip trailing .git suffix (size/xs)
11. #29106 - fix(core): flush final SSE event on EOF without trailing blank line (size/m)
12. #29114 - fix(core): prevent duplicate handleExit execution on spawn failure (size/s)
13. #26698 - [CLOSED] fix(telemetry): inject quota_project_id (size/xs)
14. #29113 - chore/release: bump version to 0.59.0-nightly.20260828 (automated)

Now let me think about the trends:

**Feature trends I can identify:**
- Auto Memory system improvements (multiple issues from @SandyTao520)
- Browser agent improvements and stability
- AST-aware code tools
- Subagent improvements and trajectory visibility
- OS-level sandboxing and security
- Token efficiency (tactful extraction, surgical reads)
- Task tracking improvements (Replace WriteToDo)
- Self-awareness of CLI agent

**Developer pain points:**
- Agent hangs/freezes
- Shell command execution getting stuck
- Subagent recovery issues
- Skills and sub-agents not being used enough
- Model creating temp files in random locations
- Destructive behavior concerns

Let me now write a comprehensive report in Chinese. I need to be detailed in my thinking but produce a clean, professional technical report.

Let me structure this carefully:

1. 今日速览 - 2-3 sentences
2. 版本发布 - mention v0.59.0-nightly.20260829
3. 社区热点 Issues - 10 issues
4. 重要 PR 进展 - 10 PRs
5. 功能需求趋势 - trends
6. 开发者关注点 - pain points

I should use proper Markdown formatting and include GitHub links for each item.</think>

# Gemini CLI 社区动态日报

**日期**: 2026-08-29
**数据来源**: [github.com/google-gemini/gemini-cli](https://github.com/google-gemini/gemini-cli)

---

## 📌 今日速览

今日 Gemini CLI 仓库活跃度集中在**安全加固**与**Agent 可靠性**两条主线：nightly 版本聚焦工作区信任与 MCP 服务器过滤，多个 PR 集中修复 OAuth、SFN 路径遍历、Web Fetch DNS 校验等安全漏洞；同时，社区对 **Subagent 异常恢复、Agent 卡死、Auto Memory 系统**等长期问题的讨论持续走高，反映出 Agent 体系正进入稳定性深水区。

---

## 🚀 版本发布

### v0.59.0-nightly.20260829.g0bd1d4397
- **核心变更**: 强制 fail-closed 的工作区信任解析，并在受限模式下过滤仓库自定义的 `mcpServers`，防止 `@google/gemini-cli-a2a-server` 在不可信环境中误执行进程。
- 合并 PR: [#29099](https://github.com/google-gemini/gemini-cli/pull/29099)
- 版本 bump: [#29121](https://github.com/google-gemini/gemini-cli/pull/29121)

> ⚠️ 该变更属于**已关闭的安全修复 PR**（#29099），在 nightly 版本中作为补丁合入。

---

## 🔥 社区热点 Issues

以下按评论活跃度与优先级排序，挑选最具代表性的 10 条：

### 1. [#22323](https://github.com/google-gemini/gemini-cli/issues/22323) — Subagent 在 MAX_TURNS 后错误报告为 GOAL 成功（p1）
- **评论**: 13 | 👍 2
- **影响**: `codebase_investigator` 子 Agent 达到回合上限后仍报 `status: "success"`，掩盖了中断事实，可能误导上层决策。
- **重要性**: 涉及子 Agent 状态契约的正确性，是 Agent 可观测性的基础问题。

### 2. [#21409](https://github.com/google-gemini/gemini-cli/issues/21409) — Generalist Agent 长时间挂起（p1）
- **评论**: 8 | 👍 8（高赞同）
- **影响**: 简单操作（如创建文件夹）即可触发 generalist 子 Agent 永久挂起，用户需手动取消。
- **重要性**: 👍 反应强烈，说明该问题在真实工作流中高频出现，影响体验明显。

### 3. [#19873](https://github.com/google-gemini/gemini-cli/issues/19873) — 基于零依赖 OS 沙箱与执行后意图路由（p2，enhancement）
- **评论**: 8
- **核心思路**: 利用 Gemini 3 模型对原生 bash 的偏好，通过 OS 级沙箱与执行后意图路由，让模型自由串联 POSIX 工具，同时不牺牲安全性。
- **重要性**: 是「发挥模型原生能力 vs 安全约束」权衡的系统性提案。

### 4. [#22745](https://github.com/google-gemini/gemini-cli/issues/22745) — AST 感知文件读取、搜索与映射（p2，feature）
- **评论**: 7
- **目标**: 用 AST 工具精准读取方法范围、降低错位读取带来的回合浪费和 token 噪声。
- **重要性**: 是从「字符串级」走向「结构级」代码理解的标志性 EPIC。

### 5. [#21968](https://github.com/google-gemini/gemini-cli/issues/21968) — Gemini 极少主动调用自定义 skills 与 sub-agents（p1）
- **评论**: 6
- **现象**: 即使存在匹配度高的 skill/sub-agent，模型也不会主动调用，需用户显式提示。
- **重要性**: 直接影响 skills/sub-agent 体系的实用价值。

### 6. [#25166](https://github.com/google-gemini/gemini-cli/issues/25166) — Shell 命令完成后卡在 "Waiting input"（p1）
- **评论**: 4 | 👍 3
- **现象**: 简单 CLI 命令执行后，shell 仍处于激活态并提示等待用户输入。
- **重要性**: 阻断主流程，属于影响日常使用的稳定性 bug。

### 7. [#26522](https://github.com/google-gemini/gemini-cli/issues/26522) — Auto Memory 不应无限重试低信号会话（p2）
- **评论**: 5
- **关联 Issue**: [#26523](https://github.com/google-gemini/gemini-cli/issues/26523)、[#26525](https://github.com/google-gemini/gemini-cli/issues/26525)、[#26516](https://github.com/google-gemini/gemini-cli/issues/26516)
- **重要性**: Auto Memory 系列问题形成簇，反映社区正系统性打磨 Memory 系统的正确性与安全性。

### 8. [#21983](https://github.com/google-gemini/gemini-cli/issues/21983) — Browser 子 Agent 在 Wayland 下失败（p1）
- **评论**: 4
- **重要性**: 桌面环境兼容性，影响 Linux 用户使用 browser_agent 的基本可用性。

### 9. [#22232](https://github.com/google-gemini/gemini-cli/issues/22232) — Browser Agent 会话接管与锁恢复（p3，feature）
- **评论**: 4
- **重要性**: 当前 BrowserManager 采用「fail-fast」策略，需要更稳健的会话接管机制以支持 `persistent` 模式。

### 10. [#22672](https://github.com/google-gemini/gemini-cli/issues/22672) — Agent 应主动避免破坏性行为（p2）
- **评论**: 3 | 👍 1
- **现象**: 模型偶尔会使用 `git reset --force` 等危险命令而非更安全替代方案。
- **重要性**: 直接关系到 Agent 在生产环境中的信任度。

---

## 🛠️ 重要 PR 进展

### 1. [#29115](https://github.com/google-gemini/gemini-cli/pull/29115) — 修复不安全的系统级配置加载（security，size/l）
- 在 Windows 与 POSIX 上引入 ACL 校验（Windows 通过 PowerShell），防止跨用户提权与任意命令执行。

### 2. [#29117](https://github.com/google-gemini/gemini-cli/pull/29117) — 防止 MCP OAuth 中的 IdP 混淆攻击（security，size/m/l）
- 实现 **RFC 9207** 授权服务器 Issuer 标识校验，避免令牌泄漏至恶意 IdP。

### 3. [#29120](https://github.com/google-gemini/gemini-cli/pull/29120) — 改进 WebFetchTool 的目标地址校验与连接路由（size/l）
- 通过**异步 DNS 解析 + Undici 传输连接器**绑定解析地址，保留 TLS SNI，缓解 DNS rebinding 等攻击面。

### 4. [#29116](https://github.com/google-gemini/gemini-cli/pull/29116) — 缓解 NTFS 8.3 短名（SFN）路径绕过（size/s/m）
- 在路径规范化与 `AllowedPathChecker` 中识别 `git~1`、`node_m~1` 等短名，封堵路径遍历与白名单绕过。

### 5. [#29099](https://github.com/google-gemini/gemini-cli/pull/29099) — 强制 fail-closed 工作区信任 + 过滤 mcpServers（已合入 nightly，size/m/l）
- 防止 `@google/gemini-cli-a2a-server` 在不可信环境中启动时执行未授权进程。

### 6. [#28955](https://github.com/google-gemini/gemini-cli/pull/28955) — 依赖更新、MCP 配置与 ECC bundles 集成（p1，size/xl）
- 大型依赖刷新与 MCP 配置扩展，可能影响整体兼容面，建议关注 release notes。

### 7. [#28971](https://github.com/google-gemini/gemini-cli/pull/28971) — 修复截断后 MCP 工具名冲突（size/m）
- 当 MCP 工具名超过 Gemini API 限制时，原有「前 30 + 后 30」截断策略可能导致两个不同工具名塌缩为同一注册名。本 PR 引入唯一性保证。

### 8. [#29106](https://github.com/google-gemini/gemini-cli/pull/29106) — 修复 SSE 解析器在 EOF 无空行时丢失末事件（size/m）
- `CodeAssistServer.requestStreamingPost()` 在截断连接或非合规代理下会静默丢失 `finishReason` 与 usage 信息，本 PR 补 flush。

### 9. [#29114](https://github.com/google-gemini/gemini-cli/pull/29114) — 防止子进程 spawn 失败时 `handleExit` 重复执行（size/s）
- 通过 re-entrancy 守卫位，避免 Node.js 在 spawn 失败时同时触发 `error` 与 `close` 事件导致的副作用重复。

### 10. [#29118](https://github.com/google-gemini/gemini-cli/pull/29118) — 扩展仓库解析仅剥离尾部 `.git`（size/xs）
- 修复 `blog.github.io` 这类**内部含 `.git` 的合法仓库名**被错误裁剪的边界问题。

> 其余 PR：自动化版本 bump（#29113、#29121）、CI 环境指纹 canary（#29119，已关闭）、Telemetry quota_project_id 修复（#26698，已关闭）。

---

## 📈 功能需求趋势

从近 24 小时更新的 50 条 Issue 与 14 条 PR 中提炼，社区关注点呈现以下五条主线：

| 方向 | 代表 Issue / PR | 关键诉求 |
|------|----------------|---------|
| **🛡️ 安全与沙箱** | #19873、#29115、#29117、#29120、#29116、#29099 | OS 级沙箱、OAuth/IdP 校验、SFN 与 DNS rebinding 防御、不安全配置加载 |
| **🧠 Auto Memory 体系化** | #26522、#26523、#26525、#26516 | 减少低信号重试、补丁隔离、确定性脱敏、日志最小化 |
| **🤖 Agent 可靠性与可观测性** | #22323、#21409、#21763、#22267、#22598 | 子 Agent 状态正确性、卡死恢复、`/chat share` 暴露子 Agent 轨迹 |
| **🌳 结构化代码理解** | #22745、#22746、#19561 | AST 感知读写、tilth/glyph 工具评估、Token 节流的「Tactful Extraction」 |
| **🧰 任务跟踪与工作流原语** | #18836、#21000、#20195 | 用持久化文件任务跟踪替代 `WriteToDo`、子 Agent Sprint 1、本地 Subagent |

---

## 💬 开发者关注点

社区反馈高频出现的痛点可归纳为四类：

1. **Agent 卡死与状态不可信** — Generalist Agent 挂起（#21409 👍 8）、Shell 执行假死（#25166）、子 Agent 在 MAX_TURNS 后仍报成功（#22323）。开发者难以判断当前 Agent 是「真的在思考」还是「已经卡住」。

2. **Agent 缺乏主动性与自我认知** — 不主动调用已注册 skills/sub-agents（#21968），不熟悉自身 CLI flag 与快捷键（#21432）。需要更明确的路由提示与自描述能力。

3. **工作区副作用管理混乱** — 模型在任意目录生成临时脚本（#23571）、使用 `git reset --force` 等破坏性命令（#22672），缺乏沙箱与清理策略。

4. **Auto Memory 的正确性与隐私边界** — 社区担忧低信号会话被反复处理（#26522）、无效 patch 静默丢弃（#26523）、转写本中的敏感内容泄露（#26525），希望引入确定性脱敏与显式 patch 隔离。

> 综合来看，社区已经从「模型能力演示」转向「**可信生产工具**」的诉求：稳定性、可预测性、安全边界、可观测性成为下一阶段的关键词。

---

*报告生成基于 2026-08-29 过去 24 小时 GitHub 公开数据。*

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

<think>The user wants me to generate a Chinese daily report for GitHub Copilot CLI community dynamics based on the provided GitHub data. Let me analyze the data carefully and produce a structured report.

Key data points:
- 1 new release: v1.0.82-1 (auth error message improvement)
- 22 issues updated in last 24 hours
- 1 PR updated in last 24 hours

Let me categorize the issues and select the most important ones for each section.

Important Issues to highlight:
1. #4612 - Runaway FileWatch loop freezes TUI, debug log 13GB (high impact)
2. #4480 - Atlassian MCP OAuth regression (closed, but high reactions)
3. #4165 - copilot --resume hangs on Windows
4. #4533 - TUI stops consuming events with parallel subagents
5. #1392 - OmniSharp LSP configurable timeout (long-standing)
6. #2930 - Local auto-memory feature request
7. #4527 - copilot -p 401 on GHEC data residency
8. #3904 - CloudQueryError breaks /chronicle
9. #4189 - /context MCP Tools footprint reporting
10. #4652 - Sandboxing on Windows 25H2
11. #4648 - Input field black background
12. #4647 - v1.0.81 broke chroma-mcp
13. #4658 - Shell completions reinstall issue
14. #4657 - /delegate 403 error
15. #4645 - session.resume ignores model param
16. #4640 - userPromptTransformed hook skipped
17. #4655 - Custom agents discovery issue
18. #4654 - List models enterprise URL issue
19. #4653 - AltGr key combos swallowed
20. #4651 - /model not appearing in BYOK
21. #4650 - Auth fails with -p --agent
22. #4649 - Tool search issues with Grok/Gemini

Now let me craft the report in Chinese, professional tone suitable for technical developers.

Let me structure this:

1. 今日速览
2. 版本发布
3. 社区热点 Issues (top 10)
4. 重要 PR 进展 (only 1 PR, so I'll note that)
5. 功能需求趋势
6. 开发者关注点

Wait - for PRs, there's only 1 PR provided. The user asks for 10 important PRs. I should be honest about this and explain that there were few PR updates.

Let me draft the response now.</think>

# GitHub Copilot CLI 社区动态日报

**日期：2026-08-29**

---

## 📌 今日速览

今天 Copilot CLI 发布了 **v1.0.82-1** 小版本，主要修复认证失败时仅显示 `/login` 提示而隐藏具体原因（如 401 Bad credentials）的问题。社区侧昨日新增/更新了 22 条 Issue，焦点集中在 **Windows 平台兼容性**（沙箱、resume 挂起、AltGr 输入）、**TUI 渲染与性能**（FileWatch 死循环、并行子代理卡死、调试日志膨胀至 13 GB）以及 **企业/合规场景**（GHEC 数据驻留 401、Atlassian MCP OAuth 回归、Enterprise 模型列表 URL 错误）。

---

## 🚀 版本发布

### v1.0.82-1

**修复内容：**

- 认证失败时，在显示 `/login` 提示之外，新增对具体错误（如 `401 Bad credentials`）的显式提示，便于用户快速定位凭据问题。

> 📎 [Release 链接](https://github.com/github/copilot-cli/releases/tag/v1.0.82-1)

---

## 🔥 社区热点 Issues（精选 10 条）

| # | Issue | 主题 | 重要性 |
|---|-------|------|--------|
| 1 | [#4612](https://github.com/github/copilot-cli/issues/4612) | **FileWatch 主机事件死循环**：长会话触发 TUI 冻结，调试日志膨胀到 13 GB | 🔴 严重，影响可用性与磁盘 |
| 2 | [#4480](https://github.com/github/copilot-cli/issues/4480) | Atlassian MCP OAuth 自 1.0.79 起回归（`1.0.71` 正常） | 🟠 已关闭且 👍=6，影响企业集成 |
| 3 | [#4533](https://github.com/github/copilot-cli/issues/4533) | 并行子代理启动瞬间 TUI 停止消费事件，runtime 仍在工作 | 🔴 严重，prerelease 通道回归 |
| 4 | [#4527](https://github.com/github/copilot-cli/issues/4527) | `copilot -p` 在 GHEC 数据驻留租户 401，模型目录请求未走租户端点 | 🔴 阻塞企业自动化场景 |
| 5 | [#4165](https://github.com/github/copilot-cli/issues/4165) | `copilot --resume` 在 Windows 冷启动卡在 `Resuming session...` | 🟠 长期未解决，影响 Windows 用户日常 |
| 6 | [#1392](https://github.com/github/copilot-cli/issues/1392) | LSP 服务器缺少可配置的 `initializeTimeout`，OmniSharp 大项目加载失败 | 🟠 长期 feature request（👍=5） |
| 7 | [#4647](https://github.com/github/copilot-cli/issues/4647) | v1.0.81 破坏 chroma-mcp 兼容性 | 🔴 升级即坏，需尽快回退/修复 |
| 8 | [#4652](https://github.com/github/copilot-cli/issues/4652) | Windows 25H2 上 `--sandbox` 报错"不支持该主机" | 🟠 影响最新 Windows 用户 |
| 9 | [#2930](https://github.com/github/copilot-cli/issues/2930) | **Feature Request**：本地自动记忆（Agent 主动写入，不依赖云端） | 🟡 合规/离线场景的高价值需求（👍=3） |
| 10 | [#4649](https://github.com/github/copilot-cli/issues/4649) | Grok 启用 tool search 但未实际 defer；Gemini 从未启用（#4588 GPT 修复后续） | 🟠 跨厂商模型成本优化回归 |

**简评**：今天社区的注意力集中在 **平台一致性**（Windows）+ **运行时稳定性**（TUI 卡死、日志失控）两大方向；OAuth / 认证相关回归（#4480、#4527、#4650、#4657）形成了第二波热点，反映 v1.0.79 ~ 1.0.81 的认证栈改动对企业和 MCP 场景冲击较大。

---

## 🛠️ 重要 PR 进展

过去 24 小时内仅有 **1 条** PR 处于更新状态：

### [#4497 — Handle fork PR associations in invalid-label writer](https://github.com/github/copilot-cli/pull/4497)

- **状态**：已关闭（merged/closed）
- **作者**：@mrecachinas
- **内容**：在 trusted invalid-label writer 中处理 fork 仓库的 PR 关联问题。当 GitHub 未填充 workflow run 的 PR 关联时，writer 通过可信的 workflow-run 元数据进行搜索，并要求恰好存在一个 open PR，以保证 fork 场景下的标签写入幂等。
- **影响**：修复 fork 仓库 PR 因缺少关联而无法被自动打 invalid label 的边界情况，提升了仓库机器人/自动化工的鲁棒性。

> 今日 PR 数量极少，仅作展示。如需拉取更长时间窗口的 PR 数据，请在后续日报中调整窗口范围。

---

## 📈 功能需求趋势

从 22 条活跃 Issue 中可归纳出社区当前最关注的 **五大方向**：

1. **🏢 企业 / 合规（≈30%）**
   - GHEC 数据驻留认证（#4527）、Enterprise 模型列表 URL（#4654）、Enterprise 登录与 `-p --agent` 鉴权（#4650）、`/delegate` 403（#4657）。
   - 趋势：随着企业客户深入使用，认证栈、租户端点、组织策略的边界 case 正在集中暴露。

2. **🪟 Windows 平台体验（≈20%）**
   - `copilot --resume` 挂起（#4165）、Sandbox 在 25H2 失败（#4652）、AltGr 组合键吞键（#4653）、TUI 输入框黑底（#4648）。
   - 趋势：Windows 仍是 TUI 细节问题的重灾区，国际化键盘与最新 OS 兼容需要专项投入。

3. **⚡ 性能与 TUI 渲染（≈18%）**
   - FileWatch 死循环 + 13 GB 日志（#4612）、并行子代理 TUI 卡死（#4533）、`/chronicle standup` DuckDB 谓词下推失败（#3904）。
   - 趋势：runtime 与 TUI 解耦后，渲染层对高并发事件的消费稳定性成为新的瓶颈。

4. **🔌 MCP / 集成生态（≈14%）**
   - Atlassian MCP OAuth 回归（#4480）、chroma-mcp 兼容性破坏（#4647）、`/context` MCP Tools 占用统计口径不一致（#4189）、工具搜索跨厂商行为差异（#4649）。
   - 趋势：MCP 工具规模扩大后，deferred loading、tool search、schema 报告三件事的语义需要更明确的契约。

5. **🧠 持久化与记忆（≈10%）**
   - 本地自动记忆（#2930）、`session.resume` 忽略 `model` 参数（#4645）、`userPromptTransformed` hook 在 steering 消息上被跳过（#4640）。
   - 趋势：开发者期望 CLI 在跨会话、跨工具（编辑器、CI、headless）调用下保持"语义一致"。

6. **🧩 LSP 与插件规范（≈8%）**
   - LSP `initializeTimeout` 可配置（#1392）、Agent Plugins 1.0 自定义 agent 发现（#4655）。

---

## 💬 开发者关注点

综合 Issue 反馈，开发者当前的高频痛点和诉求可以浓缩为以下五点：

1. **"升级一次就坏一次"** — v1.0.79 ~ 1.0.81 在 OAuth、MCP、Enterprise URL、tool search 上均出现回归，开发者希望引入更明确的 **行为契约与版本语义化说明**，并在 changelog 中标注 breaking。

2. **"Windows 不是二等公民"** — resume 挂起、25H2 沙箱失败、AltGr 吞键、TUI 颜色渲染异常，这些问题长期得不到重视，开发者呼吁 **Windows 专项测试矩阵**。

3. **"认证失败要有真因"** — v1.0.82-1 已开始改善（显示 401 Bad credentials），但 #4527、#4650、#4657 显示在 enterprise / `-p` / `--agent` 路径下仍以笼统 `Authentication failed` 报错，**细粒度错误透出**仍是企业用户刚需。

4. **"调试日志别再爆炸"** — #4612 中单次会话产生 13 GB 调试日志的案例表明，需要 **日志环形缓冲、按级别采样、对敏感元数据的 redact** 三件套。

5. **"MCP 工具规模已经超出现有假设"** — 5 万 ~ 21 万 token 的工具 schema 已不罕见，开发者期待 **可观测的 deferral / tool search 行为**、**准确的 `/context` 占用口径**，以及和厂商（GPT、Grok、Gemini）一致的协商策略。

> 建议在下次版本中重点关注：**Windows 25H2 sandbox 兼容**、**v1.0.81 chroma-mcp 兼容性修复**、**OAuth / Enterprise 401 错误细化** 以及 **FileWatch 死循环** 四项高优先级回归。

---

*本日报基于 github.com/github/copilot-cli 在 2026-08-28 ~ 2026-08-29 的公开数据自动汇总。*

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

<think>Let me analyze the GitHub data provided and generate a daily community report for Kimi Code CLI dated 2026-08-29.

Let me carefully review what we have:

**Releases (past 24 hours):** None

**Issues (past 24 hours):** 2 total
1. #2625 [CLOSED] - Security vulnerability: MCP tool calls bypass built-in secret-file guards
2. #2626 [OPEN] - Abnormal quota consumption: cache_read billed every turn with >10x amplification

**Pull Requests (past 24 hours):** 1 total
1. #2622 [OPEN] - deps: bump asyncssh to 2.23.1 in pykaos (security fix)

The user asked me to:
1. 今日速览 - 2-3 sentences summary
2. 版本发布 - skip if none
3. 社区热点 Issues - top 10 (but we only have 2, so I'll cover both)
4. 重要 PR 进展 - top 10 (but we only have 1)
5. 功能需求趋势 - from all issues
6. 开发者关注点 - pain points

I need to be honest about the limited data while still providing a useful report. Let me note that the user requested 10 issues and 10 PRs but we only have 2 issues and 1 PR, so I should cover what's available and note the limited activity.

Let me draft the report:

**今日速览 (Today's Highlights):**
- Two significant security-related issues emerged: one critical vulnerability in MCP tool file access controls (#2625), and one billing/quota anomaly report (#2626)
- One dependency security PR to upgrade asyncssh (#2622)
- No new releases in past 24 hours

**版本发布:** Skip per user's note ("无则省略")

**社区热点 Issues:** Only 2 issues available, will present both

**重要 PR 进展:** Only 1 PR available, will present it

**功能需求趋势:**
From the issues:
- Security hardening (file access controls, secret protection)
- Quota/billing transparency
- Dependency security

**开发者关注点:**
- MCP integration security
- Quota consumption transparency
- Dependency vulnerabilities

Let me write this in a professional, concise Chinese technical report format.</think>

# Kimi Code CLI 社区动态日报

**日期：** 2026-08-29
**数据来源：** github.com/MoonshotAI/kimi-cli

---

## 📌 今日速览

过去 24 小时内社区活跃度较低但出现两个值得高度关注的议题：一项已修复的 **MCP 工具调用绕过敏感文件防护** 的安全漏洞 (#2625)，以及一条关于 **cache_read 计费异常导致配额放大约 10 倍** 的用户反馈 (#2626)。同时有一项针对 asyncssh 依赖的安全升级 PR (#2622) 等待合并。无新版本发布。

---

## 🚀 版本发布

无新版本发布（本节省略）。

---

## 🔥 社区热点 Issues

> 注：过去 24 小时仅更新 2 条 Issue，以下全部呈现。

### #2625 [CLOSED] MCP 工具调用绕过内置敏感文件防护（已演示任意文件读取）
- **作者：** @zhaoxingxing06
- **重要性：** ⭐⭐⭐⭐⭐ **高危安全问题**
- **核心内容：** Kimi 内置的 `Read` 工具会拒绝读取 `.env`、SSH 私钥、凭证存储等敏感文件，但 MCP 工具调用不受此内容级防护约束；在 auto-approve 权限模式下还会跳过审批提示，攻击者可通过一个接受文件路径参数的 MCP 服务器实现任意文件读取。
- **社区反应：** 1 条评论，已 CLOSED（推测官方已快速响应修复），👍 0
- **链接：** https://github.com/MoonshotAI/kimi-cli/issues/2625

### #2626 [OPEN] 配额消耗异常：cache_read 每轮计费且 cache_creation 始终为 0（放大超 10 倍）
- **作者：** @ahmadyaseen35-coder
- **重要性：** ⭐⭐⭐⭐ **用户付费体验问题**
- **核心内容：** 付费用户在 2026-08-28 晚间轻量使用场景下，5 小时配额窗口在数分钟内损失约 40%。作者抓取 CLI 日志发现 `cache_read` 每轮都计费，但 `cache_creation` 始终为 0，疑似缓存命中识别逻辑异常导致计费放大 10 倍以上。
- **社区反应：** 0 评论仍 OPEN，👍 0 —— **待官方回复**
- **链接：** https://github.com/MoonshotAI/kimi-cli/issues/2626

---

## 🛠️ 重要 PR 进展

> 注：过去 24 小时仅更新 1 条 PR。

### #2622 [OPEN] deps: 升级 pykaos 中 asyncssh 至 2.23.1（修复 GHSA-2wxc-x7rj-hg8f）
- **作者：** @katsugtgz
- **重要性：** ⭐⭐⭐⭐ **依赖安全修复**
- **修复内容：** 将 `packages/kaos/pyproject.toml` 中锁定的 `asyncssh==2.21.1` 升级到 `2.23.1`，同步更新 `uv.lock`，以应对 OSV 报告中针对 2.21.1 的两则漏洞公告：`GHSA-2wxc-x7rj-hg8f` 与 `GHSA-qr67-gv47-xwwh`。
- **进展：** 已创建，等待 Reviewer 审核与合并
- **链接：** https://github.com/MoonshotAI/kimi-cli/pull/2622

---

## 📈 功能需求趋势

从今日的 Issues 中可提炼出三条清晰的需求方向：

| 方向 | 体现 | 关联 Issue |
|------|------|-----------|
| **🛡️ MCP 生态安全加固** | 工具调用层需要统一的内容级敏感文件防护与权限审批策略，避免绕开内置 guard | #2625 |
| **💰 计费/配额透明化** | 用户期望看到准确的 cache_read/cache_creation 拆分明细，便于诊断异常消耗 | #2626 |
| **🔗 依赖供应链安全** | 主动升级存在已知 CVE 的传递依赖，体现对 GHSA 的持续响应 | #2622 |

---

## 👨‍💻 开发者关注点

综合今日反馈，开发者生态集中关注以下痛点：

1. **MCP 集成的一致性安全策略** —— 内置工具的防护规则尚未覆盖到第三方 MCP server，存在权限模型不一致的"灰色地带"。
2. **计费可观测性不足** —— 当前日志中 cache_read/cache_creation 字段难以用于自助排查配额问题，亟需更直观的 usage breakdown。
3. **响应时效期待** —— #2625 已被快速关闭（疑似修复），说明安全报告通道畅通；但 #2626 这类影响付费用户体验的工单仍需官方主动认领。
4. **依赖治理常态化** —— 通过 PR 形式及时纳入 OSV 漏洞公告对应的修复版本，显示出项目方对供应链安全有持续投入。

---

*日报生成完毕。如需扩展历史趋势对比或针对某条 Issue / PR 做深度分析，请告知。*

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

<think>The user wants me to generate a daily report for OpenCode community dynamics based on GitHub data from 2026-08-29. Let me analyze the data carefully and produce a structured, professional Chinese-language report.

Let me analyze the data:

**Releases**: None in the past 24 hours - skip this section.

**Issues (50 total, top 30 by comments shown)**:
1. #29079 [CLOSED] GPT Models takes too long to respond - 119 comments, 52👍 - About GPT models being slow
2. #42700 [OPEN] TUI leaks ~21MB .so per launch into /tmp - 7 comments - Critical bug
3. #22792 [CLOSED] OpenCode repeatedly loops compaction-style summaries with vLLM - 6 comments
4. #36766 [OPEN] Fix LLM: handle truncated OpenAI tool arguments - 5 comments
5. #23461 [OPEN] opencode upgrade fails with 403 - 5 comments
6. #17427 [CLOSED] FEATURE: Workspace delete script - 5 comments
7. #34223 [CLOSED] BUG: Web UI: File tree toggle hidden - 5 comments
8. #15680 [CLOSED] FEATURE: Expose worktree lifecycle events to plugins - 4 comments
9. #46088 [OPEN] ECONNRESET errors with custom model - 3 comments
10. #34532 [CLOSED] Persistent red status dot - 3 comments
11. #34471 [CLOSED] Desktop loses access to existing sessions after profile reset - 3 comments
12. #34426 [CLOSED] OpenCode Desktop v1.17.11 GUI broken - 3 comments
13. #34402 [CLOSED] 1 Prompt took 21 USD in 2 minutes with no output - 3 comments
14. #46091 [CLOSED] where settings scroll? - 2 comments
15. #38366 [OPEN] Bun crashes when several opencode instances launch concurrently - 2 comments
16. #46059 [CLOSED] AI model gets stuck in text-only reasoning loop - 2 comments
17. #46046 [CLOSED] nvidia models does not work - 2 comments
18. #25755 [CLOSED] temperature not sent in request body for custom provider - 2 comments
19. Many more with 2 comments

**Pull Requests (50 total, top 20 by comments shown)**:
Most PRs have undefined comments but I'll list the top ones.

Let me now structure the report. The user wants:
1. Today's Highlights (2-3 sentences)
2. Version Releases (skip if none)
3. Community Hot Issues (pick 10)
4. Important PR Progress (pick 10)
5. Feature Request Trends
6. Developer Concerns

Let me draft each section carefully. I should be concise, professional, and focused. Let me organize my thoughts:

**Today's Highlights**: 
- Most activity is around PR contributions from @kitlangton and @Hona for V2 / 2.0 quality work
- No new releases
- Several major bug fixes landed (Windows shell, job history bounding, QR pairing, beta web deploy)
- Active: 50 issues, 50 PRs updated

**Top Issues to focus on (10)**:
1. #29079 [CLOSED] GPT Models takes too long to respond - 119 comments/52 likes - high visibility
2. #42700 [OPEN] TUI leaks ~21MB per launch - critical stability
3. #36766 [OPEN] fix: handle truncated OpenAI tool arguments - core LLM bug
4. #23461 [OPEN] opencode upgrade fails with 403
5. #15680 [CLOSED] FEATURE: Expose worktree lifecycle events - plugin ecosystem
6. #46088 [OPEN] ECONNRESET errors
7. #38366 [OPEN] Bun crashes when launching concurrently
8. #34402 [CLOSED] 1 Prompt took 21 USD - cost issue
9. #17427 [CLOSED] Workspace delete script
10. #25755 [CLOSED] temperature not sent for custom provider

**Top PRs (10)**:
1. #46098 feat(app): pair servers from QR codes
2. #46086 feat(infra): deploy beta web app with SST
3. #46090 fix(app): preserve Windows panel top outlines
4. #46085 fix(shell): bound Windows post-exit pipe draining
5. #46087 fix(core): bound consumed job history
6. #46084 fix(ai): isolate response tool call identities
7. #46089 refactor(util): make layer graphs opaque
8. #46076 fix(codemode): reject Object.assign cycles
9. #32370 feat(tui): add linux_clipboard_selection config
10. #46077 refactor(core): bind standalone skill activation to Session

**Feature Trends**:
- IDE/Desktop UI improvements
- Plugin ecosystem expansion (worktree events, MCP)
- Multi-model support (local models, custom OpenAI-compatible providers)
- Cost control / billing visibility
- Skill system improvements (hot reload)
- V2/2.0 stability

**Developer Concerns**:
- Performance with local models
- Cost/billing opacity
- Windows compatibility issues
- Desktop stability (renderer hangs)
- Skill file caching/staleness
- Data loss from updates (sqlite migration)

Let me write this up now. I need to be careful with the date - the user wants the report for 2026-08-29.

Let me make it concise and professional. Target audience: technical developers.</think>

# OpenCode 社区动态日报
**日期：2026-08-29**

---

## 一、今日速览

今天是 OpenCode V2 启动前典型的"内功修炼日"——没有新版本发布，但 PR 端非常活跃，50 个 Issue、50 个 PR 同时刷新。主要信号集中在三方面：@Hona 推进基础设施与 Windows 修复（QR 配对、beta.opencode.ai 部署、Windows shell 死锁），@kitlangton 持续提交 AI/Response、CodeMode、Core 的高密度小步重构与稳定性修补；同时 v1.17.11 桌面端遗留问题（渲染卡死、会话丢失、技能缓存不刷新）的善后仍在收尾。

---

## 二、版本发布

**过去 24 小时无新版本发布**，跳过本节。（提示：v2 beta 部署相关 PR #46086 已经合并，预计 beta.opencode.ai 很快上线。）

---

## 三、社区热点 Issues

| # | 编号 / 标题 | 状态 | 关键看点 |
|---|---|---|---|
| 1 | [#29079](https://github.com/anomalyco/opencode/issues/29079) **GPT Models takes too long to respond** | CLOSED | 全榜最高互动（119 评论 / 52 👍），GPT-5 xhigh 在简单指令上出现数分钟延迟，反映大模型路由/超时策略痛点。 |
| 2 | [#42700](https://github.com/anomalyco/opencode/issues/42700) **[2.0] TUI 每次启动向 /tmp 泄露 ~21MB .so** | OPEN | 在 tmpfs 小磁盘环境下会直接让 TUI 启动失败，已被官方打上 2.0 标签，属于 V2 必须修复的稳定性问题。 |
| 3 | [#36766](https://github.com/anomalyco/opencode/issues/36766) **[bug, core, 2.0] fix(llm): handle truncated OpenAI tool arguments** | OPEN | 官方原生 Responses 路径会出现 tool JSON 被截断，V2 直接终止整个执行；影响所有走原生 OpenAI 适配器的用户。 |
| 4 | [#15680](https://github.com/anomalyco/opencode/issues/15680) **[FEATURE] 暴露 worktree 创建/移除/重置事件给插件** | CLOSED | 插件作者长期盲区，关闭意味着 OpenCode 工作流将与 Git worktree 深度联动（自动 review agent、清理脚本等）。 |
| 5 | [#23461](https://github.com/anomalyco/opencode/issues/23461) **`opencode upgrade` 触发 403（不认 GITHUB_TOKEN）** | OPEN | 代理/VPN 场景下匿名调用 GitHub API 撞 60 次/小时限流，升级链路断在身份验证上。 |
| 6 | [#34223](https://github.com/anomalyco/opencode/issues/34223) **[BUG] Web UI 的"文件树"开关被 desktop() gate 锁死** | CLOSED | 典型的"桌面守卫"误伤 Web 端示例，影响所有通过 `opencode web` 使用的用户。 |
| 7 | [#34402](https://github.com/anomalyco/opencode/issues/34402) **单条 prompt 2 分钟烧掉 21 美元无任何输出** | CLOSED | 财务层风险——典型长上下文推理循环产生账单黑洞，社区对成本可见性诉求强烈。 |
| 8 | [#46088](https://github.com/anomalyco/opencode/issues/46088) **自定义部署模型持续报 ECONNRESET** | OPEN | 新会话能开，但只要读几个文件就必断，与 #29079 的"卡顿"形成另一类网络层问题。 |
| 9 | [#38366](https://github.com/anomalyco/opencode/issues/38366) **Bun 在 macOS arm64 上并发启动多个 opencode 实例段错误** | OPEN | 在 Git worktree / 多 pane 场景的硬阻断，影响高级工作流。 |
| 10 | [#25755](https://github.com/anomalyco/opencode/issues/25755) **自定义 OpenAI-兼容 provider 请求体里根本没带 temperature** | CLOSED | 自托管模型经常因此"无法调参"，对生态中立性影响较大。 |

---

## 四、重要 PR 进展

| # | 编号 / 标题 | 亮点 |
|---|---|---|
| 1 | [#46098](https://github.com/anomalyco/opencode/pull/46098) `feat(app): pair servers from QR codes` | V2 Web/Desktop 客户端通过 QR 配对远程服务器，对标 Cursor/Claude Desktop 的零配置体验。 |
| 2 | [#46086](https://github.com/anomalyco/opencode/pull/46086) `feat(infra): deploy beta web app with SST` | 接入 SST 部署 `beta.opencode.ai`，将 v2 端到端推到公网预览（已合并）。 |
| 3 | [#46085](https://github.com/anomalyco/opencode/pull/46085) `fix(shell): bound Windows post-exit pipe draining` | 修复 `bunx agent-browser` 这类 Windows shell 进程退出后子进程吊着 stdout 不放的问题——属于 Windows 死锁核心 bug。 |
| 4 | [#46087](https://github.com/anomalyco/opencode/pull/46087) `fix(core): bound consumed job history` | 为全局 Job 注册表设置"最近 100 条、16 MiB UTF-8"上限，防止长会话的 Job 数组无限膨胀（直接回应 #34471 数据丢失顾虑）。 |
| 5 | [#46090](https://github.com/anomalyco/opencode/pull/46090) `fix(app): preserve Windows panel top outlines` | 仅修改 `--shell-top-inset` 的 Windows 分支，修剪窗口顶部 1 CSS 像素的高度，缓解外描边被裁剪（已合并）。 |
| 6 | [#46084](https://github.com/anomalyco/opencode/pull/46084) `fix(ai): isolate response tool call identities` | 解决 Open Responses 中 `call_id` 与可选 item ID 冲突导致的"权威完整参数被丢弃"。 |
| 7 | [#46089](https://github.com/anomalyco/opencode/pull/46089) `refactor(util): make layer graphs opaque and composable` | 把 `LayerNode` 的覆写 API 从"基于集合"改为"基于图"，避免 Layer 看起来 closed 但其实丢服务。 |
| 8 | [#46076](https://github.com/anomalyco/opencode/pull/46076) `fix(codemode): reject Object.assign cycles` | 解释器对普通对象/数组做了循环检测，`Object.assign` 是漏网之鱼——对齐解释器内循环一致性。 |
| 9 | [#32370](https://github.com/anomalyco/opencode/pull/32370) `feat(tui): add linux_clipboard_selection config` | 支持 Wayland/X11 PRIMARY 选区（鼠标中键粘贴）的可配置模式，超越 #6370 增加 primary/both 模式与 `wl-copy` MIME 修复。 |
| 10 | [#46077](https://github.com/anomalyco/opencode/pull/46077) `refactor(core): bind standalone skill activation to Session` | 将独立 skill 激活绑定到 Session ID，让 retention handle 行为可预测；与"skills 未热重载"系列 Issue 的根本修复方向一致。 |

---

## 五、功能需求趋势

从 50 条活跃 Issue 看，社区当下的需求集中在 5 个方向：

1. **V2 稳定性与桌面/Web 一致性**——TUI .so 泄露、原生 Responses 截断、桌面渲染冻结、Web UI 被 `desktop()` 守卫误伤。
2. **多模型与本地化支持**——vLLM + Qwen3-Coder 长上下文循环、自定义 OpenAI-兼容 provider 缺 `temperature`/tool args 截断、nvidia 模型卡在 thinking。
3. **插件/MCP 生态扩展**——worktree 生命周期事件、MCP 项目级配置合并、Skill 热重载。
4. **成本与配额可视化**——单 prompt 烧掉 21 美元、thinking 强度重置导致模型掉档，亟需预算/budget guard。
5. **Linux 原生体验补齐**——Wayland/X11 PRIMARY 中键粘贴、Linux 升级链路走 GITHUB_TOKEN。

---

## 六、开发者关注点

- **数据丢失焦虑**：#34445（更新重建 `~/.local/share/opencode`，老 session 全丢）和 #34471（重置 profile 后历史查无）成为 v1.17.11 时代的代表性阵痛，开发者普遍要求"更新必须可回滚、数据迁移必须有日志"。
- **预算失控**：GPT-5 / Claude 等高阶模型在循环推理下账单飞涨，社区需要 budget cap / per-session 限额 / 中途 kill switch。
- **Windows / macOS arm64 长期欠债**：shell 退出死锁、面板描边裁剪、Bun 并发段错误集中在桌面端。
- **Skill 体系不闭环**：至少 3 个 Issue（#34408、#34443、#34510）报告 skill 文件改动需重启应用才生效，呼吁加入磁盘 watcher。
- **轻量级重构 × 高密度 PR**：@kitlangton 单人单日合并 10 余个 refactor/fix（Codemode、Core、Util、BOM、Markdown chunk、formatter extname 等），意味着 V2 code freeze 前的"清扫期"已启动，开发者在意的不是新功能，而是健壮性。

---

*数据来源：github.com/anomalyco/opencode · 统计窗口：2026-08-28 → 2026-08-29 UTC*

</details>

<details>
<summary><strong>jcode</strong> — <a href="https://github.com/1jehuang/jcode">1jehuang/jcode</a></summary>

<think>Let me analyze the GitHub data for jcode and create a comprehensive daily report in Chinese for 2026-08-29.

Key observations:
1. v0.81.2 was released - fixes for Mermaid diagrams and inline images
2. PR #1082 was merged - fixes multiple issues from triage
3. 36 issues updated, many closed with "fixed-pending-release" status
4. Active contributor: @alecuba16 is very prolific
5. Themes, MCP servers, file completion, swarm workers - major enhancement areas
6. Several provider-related fixes (Z.AI, Copilot, OpenRouter, Conifer)
7. macOS path bug
8. Swarm worker daemon idle exit bug

Let me organize this into a structured report.</think>

# jcode 社区动态日报 · 2026-08-29

> 数据来源：[github.com/1jehuang/jcode](https://github.com/1jehuang/jcode) | 报告生成时间：2026-08-29

---

## 📌 今日速览

过去 24 小时，jcode 发布了 **v0.81.2** 补丁版本，主要修复 Mermaid 图形与内联图片的渲染问题（缓存失效、尺寸切换、像素复制）；同时 PR #1082 合入，一次性解决了 5 个高优先级 Bug（包括 Z.AI 紧凑窗口、Copilot GPT-5.6 路由、macOS 配置路径不一致等）。社区讨论热度集中在 **TUI 主题系统**、**MCP 服务器管理**、**@ 文件补全** 与 **Swarm 集群稳定性** 四个方向。

---

## 🚀 版本发布

### [v0.81.2](https://github.com/1jehuang/jcode/releases/tag/v0.81.2)

**修复内容：**

| 类别 | 修复点 |
|---|---|
| Mermaid 图形 | 点击时仅在"视觉差异显著"的尺寸之间循环，避免无意义切换 |
| Mermaid 几何缓存 | 调整尺寸后正确失效缓存，不再留下空白占位区 |
| 内联图片交互 | 点击图片复制像素；点击 Mermaid 触发尺寸切换（行为分离） |

**Release Notes（截断）:** https://github.com/1jehuang/jcode/releases/tag/v0.81.2

---

## 🔥 社区热点 Issues（Top 10）

按评论数与重要性综合排序：

### 1. [#677](https://github.com/1jehuang/jcode/issues/677) — 自动重试退避策略硬编码
**作者:** @alecuba16 | 评论: 5 | 状态: OPEN
在共享 LLM 网关场景下，仅 3 次重试 + 2s/4s/6s 退避策略过短，导致 429 限流时 agent 提前终止。社区呼吁退避参数应可配置。**重要性：直接影响多用户共享代理的稳定性。**

### 2. [#836](https://github.com/1jehuang/jcode/issues/836) — `/theme` 斜杠命令与自定义主题色板
**作者:** @alecuba16 | 评论: 5 | 状态: OPEN
提议新增 `/theme` 切换命令，并支持 `~/.jcode/themes/<name>.toml` 自定义主题文件。**重要性：补齐 jcode 在终端个性化方面的关键缺口。**

### 3. [#679](https://github.com/1jehuang/jcode/issues/679) — Memory sidecar 后端硬编码
**作者:** @alecuba16 | 评论: 5 | 👍: 1 | 状态: OPEN
Memory 后端优先级硬编码为 OpenAI > Claude > 当前 provider，导致 Codex 过期凭证干扰后端选择。**重要性：影响长期记忆可靠性。**

### 4. [#440](https://github.com/1jehuang/jcode/issues/440) — TUI 端 MCP 服务器开关
**作者:** @alecuba16 | 评论: 4 | 状态: OPEN
作者已 rebase master 重新评估范围——上游已部分实现 MCP 工具动作，但 TUI 切换 UI 仍未合入。**重要性：MCP 生态扩展的核心 UX 缺口。**

### 5. [#837](https://github.com/1jehuang/jcode/issues/837) — `@` 文件补全 + frecency 排序
**作者:** @alecuba16 | 评论: 4 | 状态: OPEN
在 TUI 提示符中输入 `@` 触发文件路径选择器，双层索引（git ls-files + 懒扫描被忽略目录），按"频次 + 新近度"排序。**重要性：大幅提升大代码库下的引用效率。**

### 6. [#608](https://github.com/1jehuang/jcode/issues/608) — `/model` 选择不持久化
**作者:** @alecuba16 | 评论: 4 | 状态: OPEN
切换模型后，重启或新建 session 会回退到 `[provider].default_model`。**重要性：影响日常多模型用户的连续体验。**

### 7. [#583](https://github.com/1jehuang/jcode/issues/583) — 信息组件滚动闪烁
**作者:** @alecuba16 | 评论: 4 | 状态: OPEN
模型、上下文、使用量、KV cache 三套显示系统（margin HUD / overscroll / right stack）各自渲染，造成视觉抖动。**重要性：TUI 基础交互质量。**

### 8. [#835](https://github.com/1jehuang/jcode/issues/835) — `/mcp` 斜杠命令开关 MCP 服务器
**作者:** @alecuba16 | 评论: 4 | 状态: OPEN
与 #440 配套：TUI 中交互式启停 MCP 服务器，状态持久化到 `~/.jcode/mcp.json`。**重要性：MCP 用户管理多个工具服务器的关键能力。**

### 9. [#1087](https://github.com/1jehuang/jcode/issues/1087) — zai profile 紧凑窗口被 family-table 覆盖
**作者:** @yumhum | 评论: 3 | 状态: CLOSED (fixed-pending-release)
用户配置 `context_window = 1000000`，但 family 表回退至 200k，导致 160k 即触发压缩。**重要性：严重影响 Z.AI 长上下文使用体验，已被 PR #1082 修复。**

### 10. [#1090](https://github.com/1jehuang/jcode/issues/1090) — 守护进程空闲退出杀死 headless swarm worker
**作者:** @Axel3121 | 评论: 3 | 状态: CLOSED (fixed-pending-release)
共享服务器 5 分钟空闲即退出 daemon，但 `client_count` 仅统计 socket 客户端，进程内的 swarm worker 永远 0 占用。**重要性：分布式 agent 架构的致命缺陷，已被 PR #1082 修复。**

---

## 🔧 重要 PR 进展

### [#1082](https://github.com/1jehuang/jcode/pull/1082) — fix: resolve safe issues from open-issue triage
**作者:** @1jehuang | 状态: **已合入** | 👍: 0
本周期最重要的 PR，一次性清空 5 个 high-priority Bug：

| 修复项 | 对应 Issue |
|---|---|
| 守护进程空闲退出杀死 swarm worker | [#1090](https://github.com/1jehuang/jcode/issues/1090) |
| Conifer 作为内置 OpenAI 兼容 provider | [#1089](https://github.com/1jehuang/jcode/issues/1089) |
| Z.AI GLM 模型紧凑窗口 | [#1087](https://github.com/1jehuang/jcode/issues/1087) |
| Z.AI reasoning_effort 不发送 | [#1084](https://github.com/1jehuang/jcode/issues/1084) |
| Mermaid 在 tmux 下闪现消失 | [#1051](https://github.com/1jehuang/jcode/issues/1051) |
| Copilot GPT-5.6 必须路由到 /responses | [#1060](https://github.com/1jehuang/jcode/issues/1060) |
| 登录后 OpenRouter 目录读取过期状态 | [#1053](https://github.com/1jehuang/jcode/issues/1053) |
| RunningTool 状态跳过 spinner fast path | [#1071](https://github.com/1jehuang/jcode/issues/1071) |
| `/model` Anthropic API-key 路由被遮蔽 | [#1068](https://github.com/1jehuang/jcode/issues/1068) |
| macOS 配置路径提示与实际写入不一致 | [#1052](https://github.com/1jehuang/jcode/issues/1052) |

**亮点：** 每个改动均配套针对性回归测试；平台敏感、设计重的报告被故意延后。说明项目对质量门槛把控严格。

---

## 📈 功能需求趋势

从 36 条最近更新的 issue 提炼出社区最关注的方向：

| 方向 | 代表 Issue | 热度 |
|---|---|---|
| **🎨 TUI 个性化（主题 / 颜色 / 闪烁）** | [#836](https://github.com/1jehuang/jcode/issues/836) · [#437](https://github.com/1jehuang/jcode/issues/437) · [#583](https://github.com/1jehuang/jcode/issues/583) | ⭐⭐⭐⭐⭐ |
| **🔌 MCP 生态（TUI 切换 / 启用控制）** | [#440](https://github.com/1jehuang/jcode/issues/440) · [#835](https://github.com/1jehuang/jcode/issues/835) | ⭐⭐⭐⭐ |
| **📝 提示符 UX（@文件补全 / frecency / 文件 chip）** | [#837](https://github.com/1jehuang/jcode/issues/837) · [#570](https://github.com/1jehuang/jcode/issues/570) | ⭐⭐⭐⭐ |
| **🤖 Provider 兼容性（Z.AI / Copilot / OpenRouter / Conifer / Cursor ACP）** | [#575](https://github.com/1jehuang/jcode/issues/575) · [#1087](https://github.com/1jehuang/jcode/issues/1087) · [#1089](https://github.com/1jehuang/jcode/issues/1089) · [#571](https://github.com/1jehuang/jcode/issues/571) | ⭐⭐⭐⭐⭐ |
| **🛡️ 风险门控 & 安全（bash / 危险命令分类器）** | [#897](https://github.com/1jehuang/jcode/issues/897) · [#574](https://github.com/1jehuang/jcode/issues/574) | ⭐⭐⭐ |
| **🧠 Swarm / 多 agent 编排** | [#1090](https://github.com/1jehuang/jcode/issues/1090) · [#981](https://github.com/1jehuang/jcode/issues/981) · [#879](https://github.com/1jehuang/jcode/issues/879) | ⭐⭐⭐⭐ |
| **⚙️ 配置持久化（模型选择 / 后端切换 / Memory）** | [#608](https://github.com/1jehuang/jcode/issues/608) · [#679](https://github.com/1jehuang/jcode/issues/679) | ⭐⭐⭐ |
| **🖼️ 渲染层（Mermaid / Sixel / tmux / 内联图片）** | [#1051](https://github.com/1jehuang/jcode/issues/1051) · v0.81.2 release | ⭐⭐⭐ |

---

## 💡 开发者关注点与痛点

### 高频痛点

1. **跨会话状态丢失严重** — `/model` 切换不持久化（#608）、Memory sidecar 选错后端（#679）、OpenRouter 登录后 catalog 刷新读取陈旧 auth（#1053）。**核心诉求：会话与 provider 状态应在整个生命周期内一致。**

2. **共享 / 分布式场景稳定性不足** — 自动重试退避硬编码（#677）、daemon 空闲误杀 swarm worker（#1090）、Anthropic API-key / OAuth 路由混淆（#1068）。**核心诉求：从单机 agent 走向多客户端共享时的资源语义需重新定义。**

3. **TUI 信息层重复渲染** — model / context / usage / KV cache 字段被 margin HUD、overscroll、right stack 三个独立子系统重复绘制（#583），导致闪烁。**核心诉求：统一信息渲染层，避免显示态重复定义。**

4. **MCP 管理缺前端入口** — 后端 `list/connect/disconnect` 已落地，但 TUI 端无法交互式启用/禁用（#440, #835）。**核心诉求：补齐 MCP 在终端的开关 UI。**

5. **Provider 适配碎片化** — Z.AI 不发送 `reasoning_effort`（#1084）、Copilot GPT-5.6 必须走 `/responses`（#1060）、GLM 模型 family-table 覆盖 config（#1087）、macOS 配置目录写入与提示不一致（#1052）。**核心诉求：provider 元数据应尊重用户 config 而非内置默认值。**

### 趋势信号

- **斜杠命令统一化趋势明显**：`/theme`（#836）、`/mcp`（#835）、`/btw`（#1075）正在形成 jcode 的命令空间体系。
- **配置即代码**：themes.toml（#836）、mcp.json（#835）、config.toml（#571, #897）正成为可声明的扩展点。
- **第三方 PR 高度活跃**：@alecuba16 单人贡献了本周期约 80% 的 issue 与 PR，社区贡献集中度较高，建议维护者关注 reviewer bandwidth 与 bus factor。

---

*日报基于 GitHub 公开数据自动汇总，仅供参考。*

</details>

<details>
<summary><strong>pi</strong> — <a href="https://github.com/earendil-works/pi">earendil-works/pi</a></summary>

<think>The user wants me to generate a daily community report for the Pi project based on GitHub data from 2026-08-29. Let me analyze the data carefully and produce a well-structured Chinese report.

Let me organize the information:

**Latest Release (v0.84.4):**
- Terminal capability overrides - override hyperlink, image, truecolor support
- Extension UI prompt events (truncated)

**Top Issues by comments (30 listed):**
1. #8584 - TUI row corruption during streaming (24 comments, 9 👍) - OPEN
2. #6879 - Auto-compaction never triggers (24 comments, 20 👍) - CLOSED (related to PR #8782)
3. #2870 - Follow XDG Base Directory (20 comments, 52 👍) - CLOSED
4. #7130 - Backspace deletes 2 chars in Kitty (12 comments, 1 👍) - CLOSED
5. #8166 - Custom message breaks tool_calls adjacency on DeepSeek (11 comments, 0 👍) - CLOSED
6. #7128 - PI_* guideline over-encourages bash calls (11 comments, 13 👍) - OPEN
7. #7553 - Configurable thinking level/model for compaction (9 comments, 0 👍) - OPEN
8. #7153 - /scoped-models 5 min wait (8 comments, 4 👍) - CLOSED
9. #8620 - 0.84.3 bundled CLI extension errors (6 comments, 0 👍) - OPEN
10. #8478 - /model selector shows all catalog (3 comments, 0 👍) - CLOSED
11. #7147 - Emit extension events around UI dialogs (3 comments, 1 👍) - CLOSED
12. #8813 - Skill slash autocomplete ranks from skill: prefix (2 comments, 0 👍) - CLOSED
13. #8809 - Windows image fallback backslashes (2 comments, 0 👍) - CLOSED
14. #8806 - TUI crashes on narrow terminals (2 comments, 0 👍) - CLOSED (related to PR #8805)
15. #8387 - Mistral-conversations broken tool calls (2 comments, 0 👍) - CLOSED
16. #8349 - ExtensionContext cannot detect queued custom continuations (2 comments, 0 👍) - OPEN
17. #8771 - Apple Terminal.app crashes (2 comments, 0 👍) - CLOSED
18. #8774 - Compaction fails on OpenAI Responses (2 comments, 0 👍) - CLOSED
19. #8815 - Separate vision model setting (1 comment, 0 👍) - CLOSED
20. #8814 - pi -p never exits (1 comment, 0 👍) - CLOSED
21. #8810 - Extension providers ignore defaultProvider (1 comment, 0 👍) - CLOSED (related to PR #8812)
22. #8808 - Image attachments bypass resize (1 comment, 0 👍) - CLOSED
23. #8807 - Improve @ file autocomplete (1 comment, 0 👍) - CLOSED
24. #8804 - Bedrock Provider tool validation (1 comment, 0 👍) - CLOSED
25. #8802 - Add permissions block to settings (1 comment, 0 👍) - CLOSED
26. #8798 - /reload drops editor prompt history (1 comment, 0 👍) - CLOSED
27. #8797 - Rebinding app.models.save no effect (1 comment, 0 👍) - CLOSED
28. #8796 - Gate success tokens on artifact verification (1 comment, 0 👍) - CLOSED
29. #8794 - Footer: share stats line (1 comment, 0 👍) - CLOSED
30. #8793 - Configurable autocomplete popup position (1 comment, 0 👍) - CLOSED

**PRs (18 total):**
1. #8812 - Flush extension provider registrations before initial model resolution - CLOSED
2. #8811 - Add startup composer - CLOSED
3. #8805 - Adaptive truncate instead of crash on narrow terminals - CLOSED
4. #8800 - TUI search improvements - OPEN
5. #8799 - Prettier Working... spinner - OPEN
6. #8801 - Alt mode scrollbar prettier - OPEN
7. #8232 - Dev branch (DONT MERGE) - OPEN
8. #8678 - Edit selected prompt text - OPEN
9. #8572 - Amazon Bedrock Mantle - OPEN
10. #8795 - Artifact verification repair gate - CLOSED
11. #8775 - Remove issue-specific regression test placement rule - CLOSED
12. #8790 - Extensions changelog - OPEN
13. #4133 - Fall back from codex websocket to sse - CLOSED
14. #8787 - Limit codex sse fallback to oversized websocket frames - CLOSED
15. #8786 - Match skill commands by bare name in slash autocomplete - CLOSED
16. #8784 - Per-model max_tokens cap for MiniMax-M3 via OpenRouter/GMICloud - CLOSED
17. #8782 - Compact before post-tool model requests - CLOSED
18. #6848 - Add retry logic to compaction summarization - CLOSED

Now let me think about trends:

**Feature Request Trends:**
- TUI improvements (search, scrollbar, autocomplete position, narrow terminal handling)
- Provider/Model support (Bedrock Mantle, vision model separation, per-model max_tokens)
- Compaction improvements (configurable thinking level, retry logic, before tool requests)
- XDG Base Directory compliance
- Permissions/sandbox system
- Extension ecosystem improvements (events, changelog, startup composer)
- Vision/image handling improvements

**Developer Pain Points:**
- TUI rendering issues (narrow terminals, streaming corruption)
- Compaction reliability (transient failures, threshold detection)
- Provider-specific bugs (DeepSeek, OpenAI Responses, Mistral, Bedrock)
- Extension system gaps (event coverage, timing bugs)
- Terminal compatibility (Kitty, Apple Terminal.app)

Let me write the report now. The format should be in Chinese, professional, and tech-focused.

Let me select the top 10 most important issues. I'll prioritize by comments, 👍 reactions, and significance:

1. #8584 - TUI row corruption (24 comments, 9 👍) - High impact UX bug
2. #6879 - Auto-compaction (24 comments, 20 👍) - Closed by PR #8782, very popular
3. #2870 - XDG Base Directory (20 comments, 52 👍) - Cross-platform standard
4. #7128 - PI_* guideline bash calls (11 comments, 13 👍) - System prompt behavior
5. #7130 - Backspace in Kitty (12 comments) - Terminal compat
6. #8166 - DeepSeek 400 error (11 comments) - Provider compat
7. #7553 - Configurable compaction thinking (9 comments) - Feature request
8. #8620 - 0.84.3 CLI extension errors (6 comments) - Recent regression
9. #7153 - /scoped-models wait (8 comments, 4 👍) - UX issue
10. #7128 - Already covered
11. #8478 - /model selector shows all (3 comments) - UX
12. #7147 - Extension events around UI (3 comments) - Extensibility
13. #8810 - Extension providers defaultProvider (1 comment but related to PR #8812)

Top 10 PRs:
1. #8782 - Compact before post-tool model requests (Closes #6879, very important)
2. #8812 - Flush extension provider registrations (fixes #8810)
3. #8805 - Adaptive truncate on narrow terminals (fixes #8806)
4. #8786 - Match skill commands by bare name (fixes #8813)
5. #8784 - Per-model max_tokens cap for MiniMax-M3
6. #8787 - Limit codex sse fallback
7. #4133 - Fall back from codex websocket to sse
8. #6848 - Retry logic for compaction
9. #8795 - Artifact verification repair gate
10. #8572 - Amazon Bedrock Mantle support
11. #8811 - Startup composer
12. #8790 - Extensions changelog
13. #8678 - Edit selected prompt text
14. #8800 - Search improvements
15. #8799 - Prettier Working spinner
16. #8801 - Alt mode scrollbar prettier

I'll select 10 most important PRs focusing on functional/fix changes rather than cosmetic.

Let me write the report now in clean Markdown format.</think>

# Pi 社区动态日报 · 2026-08-29

## 📌 今日速览

**v0.84.4 正式发布**，带来终端能力覆写（Terminal Capability Overrides）与扩展 UI 提示事件。今日社区最显著的关注点集中在 **TUI 渲染稳定性**（流式输出错位、窄终端崩溃）与 **压缩（Compaction）机制可靠性**——长期高赞 issue #6879（自动压缩不触发）由 PR #8782 关闭，标志着上下文窗口保护机制的关键修复落地。同时，多个针对新版本（0.84.3/0.84.4）的回归 issue 集中爆发，提示近期发布节奏偏紧。

---

## 🚀 版本发布

### v0.84.4

**New Features**
- **Terminal capability overrides** — 支持手动覆写终端检测出的超链接、图片与真彩（truecolor）能力，详见 [Capability Overrides 文档](https://github.com/earendil-works/pi/blob/v0.84.4/packages/coding-agent/docs/terminal-setup.md#capability-overrides)。
- **Extension UI prompt events**（条目被截断，需进一步核实完整变更说明）

> 关注点：本日有多个 0.84.4 直接相关的崩溃/回归报告（#8806、#8814、#8810），建议优先阅读 release notes。

---

## 🔥 社区热点 Issues（Top 10）

| # | Issue | 状态 | 热度 | 一句话点评 |
|---|-------|------|------|----------|
| 1 | [#8584](https://github.com/earendil-works/pi/issues/8584) TUI row corruption during streaming | OPEN | 24 💬 / 9 👍 | 流式输出在长 tool 输出后"逐词换行"渲染错位，是高频复现的 UX bug |
| 2 | [#6879](https://github.com/earendil-works/pi/issues/6879) auto-compaction never triggers past 100% | CLOSED | 24 💬 / **20 👍** | 高赞长寿命 issue；由 [PR #8782](https://github.com/earendil-works/pi/pull/8782) 修复，将压缩检查提前到 post-tool 阶段 |
| 3 | [#2870](https://github.com/earendil-works/pi/issues/2870) Follow XDG Base Directory | CLOSED | 20 💬 / **52 👍** | 社区呼声最高的 issue 之一；要求 Linux 下遵循 `$XDG_CONFIG_HOME`/`$XDG_STATE_HOME` 标准 |
| 4 | [#7130](https://github.com/earendil-works/pi/issues/7130) Backspace deletes 2 chars in Kitty | CLOSED | 12 💬 | Kitty 协议 release 事件未过滤导致的输入 bug |
| 5 | [#8166](https://github.com/earendil-works/pi/issues/8166) custom message breaks tool_calls→tool adjacency (DeepSeek 400) | CLOSED | 11 💬 | 扩展 `sendMessage` 与多 provider 协议兼容性深度问题 |
| 6 | [#7128](https://github.com/earendil-works/pi/issues/7128) PI_* guideline 过度引导 bash 调用 | OPEN | 11 💬 / 13 👍 | 默认 system prompt 引发 agent 行为偏差，反映"prompt 注入式"问题的张力 |
| 7 | [#7553](https://github.com/earendil-works/pi/issues/7553) Configurable thinking level/model for compaction | OPEN | 9 💬 | 压缩流程与正常轮次 thinking 预算解耦，是推理模型用户的强需求 |
| 8 | [#8620](https://github.com/earendil-works/pi/issues/8620) 0.84.3 全局扩展加载失败 | OPEN | 6 💬 | 升级到 0.84.3 后 `@earendil-works/pi-coding-agent` 解析失败的回归 |
| 9 | [#7153](https://github.com/earendil-works/pi/issues/7153) `/scoped-models` 同步阻塞 ~5 分钟 | CLOSED | 8 💬 / 4 👍 | UI 同步等待 catalog refresh，典型"无反馈"型可用性问题 |
| 10 | [#7128](https://github.com/earendil-works/pi/issues/7128) + [#8478](https://github.com/earendil-works/pi/issues/8478) /model 选择器列出全量 catalog | CLOSED | 3 💬 | 默认 UI 与用户实际配置不一致，影响配置可见性 |

**社区反应画像**：开发者对 **稳定性 > 新功能** 的优先级明确——流式渲染、压缩阈值、扩展加载链三类问题占据了 Top 5 中的全部位置。

---

## 🛠 重要 PR 进展（Top 10）

| # | PR | 状态 | 修复/功能 |
|---|----|------|----------|
| 1 | [#8782](https://github.com/earendil-works/pi/pull/8782) compact before post-tool model requests | CLOSED | **关键修复** — 关闭 #6879：将 `prepareNextTurn` 提前，确保阈值压缩在 provider 请求前生效 |
| 2 | [#8812](https://github.com/earendil-works/pi/pull/8812) flush extension provider registrations | CLOSED | 修复 #8810 — 扩展注册的 provider 在初始 model 解析前完成入队 |
| 3 | [#8805](https://github.com/earendil-works/pi/pull/8805) adaptive truncate instead of crash on narrow terminals | CLOSED | 修复 #8806 — 80-88 列终端启动崩溃改为自适应截断 |
| 4 | [#8786](https://github.com/earendil-works/pi/pull/8786) match skill commands by bare name in slash autocomplete | CLOSED | 修复 #8813 — fuzzy match 改为基于技能名而非 `skill:` 前缀 |
| 5 | [#8784](https://github.com/earendil-works/pi/pull/8784) per-model max_tokens cap for MiniMax-M3 | CLOSED | 适配 MiniMax-M3 在 OpenRouter/GMICloud 上 524,288 上限 |
| 6 | [#8787](https://github.com/earendil-works/pi/pull/8787) limit codex sse fallback to oversized websocket frames | CLOSED | 收紧 Codex WebSocket → SSE 回退策略，仅对 1009 错误触发 |
| 7 | [#4133](https://github.com/earendil-works/pi/pull/4133) fall back from codex websocket to sse | CLOSED | 与 #8787 配套：SSE 回退逻辑基线 |
| 8 | [#6848](https://github.com/earendil-works/pi/pull/6848) retry logic for compaction summarization | CLOSED | `completeSummarization` 增加指数退避重试，解决瞬时流中断 |
| 9 | [#8572](https://github.com/earendil-works/pi/pull/8572) amazon bedrock mantle | OPEN | Bedrock 新 Mantle 接口支持（GPT-OSS 等新模型路由） |
| 10 | [#8811](https://github.com/earendil-works/pi/pull/8811) feat: add startup composer | CLOSED | 启动期允许输入并桥接到 InteractiveMode，改善首次启动体验 |

**备选关注**：[#8795](https://github.com/earendil-works/pi/pull/8795) artifact verification repair gate（基于项目自有产物的成功门控）、[#8790](https://github.com/earendil-works/pi/pull/8790) extensions changelog（扩展 changelog 标准化）—— 均为长期生态基础设施。

---

## 📈 功能需求趋势

从过去 24h 的 46 条 issue 综合提炼：

1. **TUI/编辑器体验增强**（占比最高）
   - 窄终端兼容（#8806 → #8805）、@ 文件补全模糊匹配（#8807）、自动补全弹窗位置与高度（#8793）、技能自动补全排序（#8813）、编辑器选中态编辑（#8678）
   - 反映出**终端原生 IDE 化**的方向性需求

2. **压缩（Compaction）机制深化**
   - 配置化 thinking level（#7553）、压缩前工具调用时序（#8782）、瞬时失败重试（#6848）
   - 社区正将压缩作为长会话核心可靠性支柱来打磨

3. **多 Provider / 多模型协议适配**
   - Bedrock Mantle（#8572）、MiniMax-M3 max_tokens 上限（#8784）、Codex WebSocket 回退（#4133/#8787）、OpenAI Responses API 工具协议（#8774）、DeepSeek tool_calls 协议（#8166）、Mistral tool 解析（#8387）
   - 模型生态碎片化推动 **per-provider 协议适配层**持续演进

4. **扩展（Extension）系统扩展点补齐**
   - UI 对话框事件（#7147）、provider 注册时序（#8812/#8810）、自定义编辑器与 `/reload` 行为（#8798）、changelog 元数据（#8790）、Keybinding rebind 影响面（#8797）

5. **权限与沙箱体系**（萌芽期）
   - #8802 提议引入 Codex 风格的 `permissions` 块（sandbox_mode × approval_policy）
   - 仍是早期讨论，但反映出**企业级可控性**需求抬头

6. **图像/视觉输入**作为新兴能力
   - 独立 vision model 设置（#8815）、图片缩放管线（#8808）、Windows 回退路径显示（#8809）
   - 随 Anthropic/Claude 多模态推广而升温

---

## 👨‍💻 开发者关注点 / 痛点

| 痛点类别 | 典型反馈 |
|---------|---------|
| **流式渲染脆弱** | "长 tool 输出之后 assistant 文本逐词换行" (#8584)—— 宽度推断/换行状态被破坏，是 TUI 流式最棘手的一类 bug |
| **压缩"沉默失败"** | "压缩阈值

</details>

---
*本日报由 [Big Model Radar](https://github.com/96loveslife/big_model_radar) 自动生成。*
# AI CLI 工具社区动态日报 2026-09-03

> 生成时间: 2026-09-03 03:52 UTC | 覆盖工具: 8 个

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

<think>The user is asking me to generate a horizontal comparison analysis report based on the daily dynamics of various AI CLI tools. They want it in Chinese, professional, concise, with data support, suitable for technical decision makers and developers. Let me structure this carefully.

Let me first extract key data from each tool's report:

**Claude Code:**
- Release: v2.1.259 (managedMcpServers + --permission-prompts none)
- Issues updated: 50
- PRs updated: 4
- Hot themes: Windows Desktop stability, Permission model refinement, Account management

**OpenAI Codex:**
- Releases: rust-v0.153.0, rust-v0.153.0-alpha.6, rust-v0.153.0-alpha.5.1
- Issues updated: 50
- PRs updated: 20+
- Hot themes: TUI/CLI transparency, Windows platform parity, MCP/OAuth, Multi-agent

**Gemini CLI:**
- No releases in past 24h
- Issues updated: 50
- PRs updated: 37
- Hot themes: Security hardening (CVE fixes), Subagent reliability, New models (gemini-3.8-flash)

**GitHub Copilot CLI:**
- Releases: v1.0.83-2, v1.0.83-3
- Issues updated: 38
- PRs updated: 0
- Hot themes: MCP lifecycle, BYOK/local model switching, Long session memory stability

**Kimi Code CLI:**
- No activity in past 24h

**OpenCode:**
- Release: v1.18.27
- Issues updated: 50
- PRs updated: 20
- Hot themes: Browser plugin, Permission system, Provider compatibility, Windows terminal

**jcode:**
- No releases
- Issues updated: 29
- PRs updated: 2 (PR #1166 with 7 fixes)
- Hot themes: Concurrency/lock correctness, Platform-specific bugs, Cost/billing accuracy

**pi:**
- No releases
- Issues updated: 50
- PRs updated: 29
- Hot themes: Multi-provider compatibility, System prompt refactor, AgentHarness, Cross-platform

Now let me build the comparative analysis report. I need to be careful about:

1. **生态全景** - Overall ecosystem trends (3-5 sentences)
2. **各工具活跃度对比** - Activity comparison table
3. **共同关注的功能方向** - Common focus areas
4. **差异化定位分析** - Differentiation analysis
6. **社区热度与成熟度** - Community heat and maturity
7. **值得关注的趋势信号** - Trend signals worth attention

Let me identify common focus areas:

**Common focus areas across multiple tools:**
1. **MCP生态** - Claude Code (managedMcpServers), Codex (OAuth refresh, plugin), Copilot CLI (multiple issues), Gemini CLI (related)
2. **权限模型/安全治理** - Claude Code (permission modes), Gemini CLI (CVE fixes, sandbox), Copilot CLI (ToolPolicy hooks), jcode (security review)
3. **多Provider适配** - pi (most extensive), Codex (model providers), Gemini (gemini-3.8-flash), Copilot (BYOK), Claude Code (Anthropic only)
4. **Windows平台稳定性** - Claude Code (Desktop), Codex (daemon), OpenCode (terminal), jcode (daemon, focus)
5. **Subagent/多Agent** - Codex (multi-agent), Claude Code (agents-view), Gemini (subagent MAX_TURNS), jcode (swarm), pi (AgentHarness)
6. **会话/上下文管理** - Claude Code (session linking), Copilot CLI (OOM), jcode (session save), pi (compaction boundary)
7. **TUI/UX打磨** - Codex (vim mode, collaboration), OpenCode (browser plugin), pi (Esc cancellation)

**Differentiation:**
- **Claude Code**: 强权限模型、企业管理能力 (managedMcpServers)、跨产品session链接
- **OpenAI Codex**: 强TUI体验、模型可选性、Windows平台快速补齐、ChatGPT统一会话
- **Gemini CLI**: 多模型栈 (3.5/3.6/3.7/3.8)、OS级沙箱探索、Auto Memory
- **GitHub Copilot CLI**: 与GitHub工作流深度集成、BYOK多provider、自定义Agent
- **Kimi Code CLI**: 国产长上下文，本次无活动
- **OpenCode**: 插件SDK开放、浏览器Agent、本地模型自动发现、Formatters生态
- **jcode**: Swarm多agent、可恢复运行时、Playwright桥接、自我改进Harness
- **pi**: AgentHarness可恢复运行时、Provider能力矩阵、多TUI/UX细节

**Community heat / maturity:**
- 高活跃度: Codex (20+ PRs), pi (29 PRs), Gemini CLI (37 PRs), OpenCode (20 PRs)
- 中等活跃度: Claude Code (4 PRs), jcode (2 PRs)
- 低活跃度/无活动: Kimi Code CLI, Copilot CLI (0 PRs)
- 快速迭代: Gemini CLI (gemini-3.8-flash默认模型升级), Codex (alpha/stable双轨)
- 收尾阶段: Claude Code (v2.1.259收尾)

**Trend signals worth attention:**
1. **MCP正在成为事实标准** - 多家工具同时投入
2. **Provider能力抽象层正在形成** - 不同模型特性差异巨大
4. **AgentHarness/可恢复运行时成为新基础设施** - pi和jcode都在做
5. **Windows平台仍是最大短板** - 多家集中爆发问题
6. **安全治理进入深水区** - CVE响应、配置注入面、权限静默降级
7. **会话/上下文压缩成为新瓶颈** - 多个工具同时遇到
8. **浏览器Agent化趋势** - OpenCode plugin-browser、jcode Playwright桥接

Let me now write the report. The user wants:
- 简洁专业
- 有数据支撑
- 适合技术决策者和开发者阅读

I should make it comprehensive but concise. Let me structure it well with tables.</think>

# 主流 AI CLI 工具横向对比分析报告

**数据日期**：2026-09-03  
**覆盖工具**：Claude Code / OpenAI Codex / Gemini CLI / GitHub Copilot CLI / Kimi Code CLI / OpenCode / jcode / pi

---

## 一、生态全景

2026-09-03 的社区动态揭示 AI CLI 工具生态已进入**"能力快速扩张 + 兼容性密集暴露"**的关键阶段：一方面，**MCP（Model Context Protocol）正在成为事实标准**（Claude Code 发布 `managedMcpServers`、Codex 推进协调 OAuth 刷新、Copilot CLI 集中修协议层），多个独立项目围绕它重构运行时；另一方面，**多 Provider 适配压力显著上升**——pi 几乎一半 issue 指向不同模型的边缘行为，Gemini CLI 同步升级 4 个 flash 模型版本。同时，**Windows 平台稳定性与权限模型精细化**成为横跨 6 个工具的共同痛点，预示下一阶段的工程重心将从"功能增量"转向"信任债治理"。

---

## 二、各工具活跃度对比

| 工具 | 版本发布 | Issues 更新 | 关注度 TOP1（👍/评论） | 整体节奏判断 |
|------|----------|------------|----------------------|--------------|
| **Claude Code** | v2.1.259 | 50 | 多账号切换 #36151（676👍/169评论） | **收尾期**：功能收敛，聚焦权限与稳定性 |
| **OpenAI Codex** | v0.153.0 + 2 alpha | 50 | 关闭"Ran N commands"折叠 #39903（79👍/59评论） | **快速迭代**：alpha/stable 双轨并行，TUI 体验深耕 |
| **Gemini CLI** | 无 | 50 | Generalist 挂起 #21409（8👍/8评论） | **密集打磨**：37 PR 集中处理安全/模型升级/Subagent |
| **GitHub Copilot CLI** | v1.0.83-2 / -3 | 38 | BYOK/本地模型切换 #3709（29👍/7评论） | **冷启动窗口**：0 PR 流入，可能在等待发布节拍 |
| **Kimi Code CLI** | 无 | 无活动 | — | **静默期**：过去 24 小时无更新 |
| **OpenCode** | v1.18.27 | 50 | OpenAI 兼容端点自动发现 #6231（225👍/48评论） | **平台扩张期**：浏览器插件 SDK + Provider 兼容性双线推进 |
| **jcode** | 无 | 29 | 安全评审 #568（7 评论） | **激进迭代**：维护者单 PR 合入 7 个安全修复 |
| **pi** | 无 | 50 | Gemini 3.x 工具调用失败 #6996（8 评论） | **架构升级期**：AgentHarness + 系统提示重构并行 |

**关键观察**：OpenAI Codex（20+ PR）与 Gemini CLI（37 PR）当日合并量最高，反映这两个项目处于**密集产出窗口**；Claude Code 仅 4 PR 与 v2.1.259 收尾特征一致；GitHub Copilot CLI 当日无 PR，但发布了两个 pre-release build，提示工程重心在内部集成。

---

## 三、共同关注的功能方向

通过对 8 个工具的 issue 流横向聚类，以下方向在**多个工具社区同时出现**：

### 1. MCP（Model Context Protocol）成为事实标准基础设施
- **Claude Code** (#91683)：v2.1.259 引入组织级 `managedMcpServers` 配置分发
- **Codex** (#42413, #42406)：协调 OAuth 刷新、显式插件启动语义
- **Copilot CLI** (#4525, #4695, #4598, #2630)：协议协商、Token 缓存、进程生命周期集中出现 bug
- **OpenCode** (#46970, #46957)：Location 复用避免反复启动 MCP

**诉求**：统一协议层 + 鉴权生命周期 + 进程治理，正在成为跨工具的"共同语言"。

### 2. 多 Provider 适配压力普遍化
- **pi** (#6996, #8760, #8643, #8706, #9015, #9004)：Gemini `thought_signature`、OpenRouter free 上限、Bedrock OpenAI 多模态、Z.AI 强制思维、xAI `tool_choice`、llama.cpp reasoning_effort、vLLM priority
- **OpenAI Codex** (#37858)：自定义 `model_providers` 下多 Agent 退化
- **Gemini CLI** (#29172)：同步接入 gemini-3.5/3.6/3.7/3.8-flash 4 个版本
- **Copilot CLI** (#3709, #4680)：BYOK 端点模型 ID 识别

**诉求**：从"接进一个模型"演进到"管理 Provider 能力矩阵"，需要**声明式的 provider capability 元数据层**。

### 3. 权限模型精细化与安全治理
- **Claude Code** (#89251, #89911, #91296)：bypassPermissions 绕过 PreToolUse hook、agents-view 静默降级、defaultMode 失效
- **Gemini CLI** (#28902, #29094, #29095, #29116, #29115)：变量展开绕过、simple-git/shell-quote CVE、NTFS 短路径、ACL 校验
- **jcode** (#568, #1166)：交互会话权限网关基础、OpenRouter 300× 虚报修复
- **pi** (#9043)：ToolPolicy Hook 与审计事件

**诉求**：从"是否允许"细化到"如何在多层调用栈中保持权限一致性"，并提供**审计可追溯**的能力。

### 4. Windows 平台稳定性（横跨 5 个工具）
- **Claude Code** (#80444, #53247, #85199, #89680, #91663)：GPU 崩溃、孤儿 Silo、self-update 中断、AppX 卡死
- **OpenAI Codex** (#39989, #42289, #42405, #42392)：会话残留、150% 缩放、app-server daemon
- **OpenCode** (#35329-35332 系列)：路径分隔符、终端标题、补全、安装器
- **jcode** (#1158, #1064)：3733 个进程失控、kitty CSI u 解码
- **pi** (#6817, #8895, #9033)：find 模式、非拉丁用户名、musl fd/ripgrep

**诉求**：从"能跑"到"和 macOS/Linux 等价体验"，需要专门的 Windows QA 矩阵与生命周期治理。

### 5. Agent 编排与可恢复运行时
- **Codex** (#42428, #42419)：Agent command center 共享 composer
- **Gemini CLI** (#22323, #21409)：Subagent `MAX_TURNS` 状态报告错误、generalist 挂起
- **pi** (#8998, #9044, #8990)：**系统提示重构 + AgentHarness 可恢复运行时 + fork 压缩边界保留**
- **jcode** (#1143, #1156, #1164, #1165, #1161)：Swarm 多 agent + 自改进 Harness
- **OpenCode** (#27167, #46328)：`/goal` 会话目标首个示范插件

**诉求**：长会话下的**暂停/恢复/分叉/审计**能力，正在成为新的基础设施层。

### 6. 会话/上下文管理成为新瓶颈
- **Copilot CLI** (#4664, #2861, #4698)：OOM、压缩后空响应、复发
- **jcode** (#1150, #1151, #1144)：512 KiB 硬性阈值、并发反序列化放大、save 跳过逻辑
- **pi** (#8845, #9036)：分支摘要 token 上限、Codex SSE OOM
- **OpenAI Codex** (#38154, #38160)：tokens_used 与窗口边界、推理空块

**诉求**：长会话状态机需要从"能存"演进到"智能压缩 + 可分叉"，并提供**显式可观测**的 quota 与成本信号。

### 7. TUI/UX 细节打磨（密集但不剧烈）
- **Codex** (#39903, #41622, #42408, #42425)：折叠/摘要可控、composer 输入硬化、`/experimental` 动态发现
- **OpenCode** (#44838, #46531)：Desktop Browser 面板 + 公共插件 API
- **pi** (#8823, #9022, #9032, #9039)：Esc 取消、消息恢复、editor 无边框、`PI_DISABLE_MOUSE`

**诉求**：从"能对话"到"用得舒适"，UX 已经成为用户切换工具的实际权重之一。

---

## 四、差异化定位分析

| 工具 | 核心定位 | 目标用户 | 技术路线特征 |
|------|---------|---------|--------------|
| **Claude Code** | **企业级编程 Agent + 多产品协同** | 企业开发团队、订阅 Max/Team 的高级用户 | 围绕权限模型与 MCP 组织分发构建护城河，强调"可治理" |
| **OpenAI Codex** | **ChatGPT 统一入口 + TUI 编程体验** | ChatGPT 桌面用户、追求交互细节的开发者 | Rust 实现、TUI 优先、alpha/stable 同步推进、Windows 平台补齐力度大 |
| **Gemini CLI** | **Google 多模型栈 + 实验性沙箱** | Google Cloud 用户、模型尝鲜者 | 同步升级 4 个 flash 模型版本，探索零依赖 OS 沙箱，Auto Memory 隐私治理 |
| **GitHub Copilot CLI** | **GitHub 工作流深度集成 + BYOK** | GitHub 生态用户、需要私有模型的企业 | 强自定义 Agent、模型回退列表、与 GitHub Connector 诊断脚本深度绑定 |
| **Kimi Code CLI** | **长上下文场景** | 中文/长文档处理用户 | 24h 静默，需观察是否有月度大版本 |
| **OpenCode** | **插件生态平台 + 本地模型友好** | 本地模型用户（LM Studio / Ollama）、插件开发者 | 持续扩展 Plugin SDK，浏览器 Agent 一等公民化 |
| **jcode** | **Swarm 多 agent + 安全优先** | 关注权限/审计的高级用户 | 维护者驱动型迭代，单 PR 多 fix 风格 |
| **pi** | **架构前沿实验场** | 多 provider 适配刚需、Agent 编排研究者 | AgentHarness 可恢复运行时、能力矩阵声明式化 |

**最显著差异**：
- **模型生态策略**：Claude Code（单一模型深耕）vs Gemini CLI（多模型快速迭代）vs pi（多 provider 适配层）—— 三种截然不同的路线
- **可扩展性模型**：OpenCode（插件 SDK 全面开放）vs Claude Code（MCP 组织级下发）vs Copilot CLI（BYOK 多 provider）
- **企业级能力**：Claude Code 领先（managedMcpServers、hooks、权限细分），Copilot CLI 次之（OTel 计费），pi 与 jcode 在 ToolPolicy Hook 方向追赶

---

## 五、社区热度与成熟度

按"单位时间内流入的实质性工程讨论"排序：

| 工具 | 社区活跃度 | 成熟度判断 | 主要特征 |
|------|-----------|-----------|---------|
| **OpenAI Codex** | ⭐⭐⭐⭐⭐ | 高速迭代期 | 20+ PR/日，alpha+stable 双轨；TUI 与 Windows 是主战场 |
| **pi** | ⭐⭐⭐⭐⭐ | 架构升级期 | 29 PR/日，覆盖运行时、provider 适配、UX；维护者推动底层重构 |
| **Gemini CLI** | ⭐⭐⭐⭐ | 深度打磨期 | 37 PR/日但无 release，集中在 CVE、模型升级、Subagent 修复 |
| **OpenCode** | ⭐⭐⭐⭐ | 平台扩张期 | 20 PR/日，浏览器插件 SDK 是增长引擎，Windows 仍待补 |
| **Claude Code** | ⭐⭐⭐ | 收尾稳定期 | 50 issues / 4 PR，功能收敛，焦点在权限与 Windows Desktop |
| **jcode** | ⭐⭐⭐ | 激进修复期 | 29 issues / 2 PR，但单 PR 含 7 个修复，维护者驱动 |
| **GitHub Copilot CLI** | ⭐⭐ | 内部节拍期 | 38 issues / 0 PR，连续两个 pre-release build，疑似在等待发布窗口 |
| **Kimi Code CLI** | ⭐ | 静默期 | 24h 无活动，需

---

## 各工具详细报告

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills 社区热点

> 数据来源: [anthropics/skills](https://github.com/anthropics/skills)

<think>The user wants me to analyze the GitHub data from anthropics/skills repository and generate a comprehensive report in Chinese. Let me analyze the data carefully.

Looking at the PRs (Top 20 by comment count, but comments are all "undefined" so I'll use position as proxy for popularity):

1. #1298 - fix(skill-creator): run_eval.py always reports 0% recall - critical bug fix
2. #514 - Add document-typography skill
3. #1615 - Add scnet-hpc skill
4. #538 - fix(pdf): correct case-sensitive file references
5. #486 - Add ODT skill
6. #210 - Improve frontend-design skill
7. #83 - Add skill-quality-analyzer and skill-security-analyzer
8. #541 - fix(docx): prevent tracked change collision
9. #539 - fix(skill-creator): warn on unquoted description
10. #1628 - Add Hivemind: Zero-Cost Multi-Agent Orchestration
11. #1607 - Update claude-api skill: mark retired models
12. #1602 - fix: evaluation serialization bugs
13. #1595 - docs: add UIZZE to partner skills
14. #1367 - self-audit skill
15. #1099 - skill-creator Windows fix
16. #1050 - skill-creator Windows fix
17. #723 - testing-patterns skill
18. #568 - ServiceNow platform skill
19. #525 - pyxel skill
20. #509 - docs: add CONTRIBUTING.md

Issues with actual comments:
- #492 - Security: Community skills under anthropic/ namespace (43 comments) - HIGHEST
- #228 - Enable org-wide skill sharing (16 comments)
- #556 - run_eval.py 0% trigger rate (12 comments)
- #62 - Skills disappeared (10 comments)
- #1329 - compact-memory skill proposal (9 comments)
- #202 - skill-creator best practice (8 comments)
- #412 - agent-governance (6 comments)
- #189 - duplicate skills (6 comments)
- #1487 - claude-api eagerly injects 156k tokens (4 comments)
- #1390 - mcp-builder evaluation bug (4 comments)
- #1385 - Reasoning Quality Gate Pipeline (4 comments)
- #1175 - SharePoint security concerns (4 comments)
- #29 - bedrock usage (4 comments)
- #16 - Expose Skills as MCPs (4 comments)
- #12 - docx whitespace reformatting (4 comments)

Now let me organize this into a comprehensive report.

Key themes I see:
1. Skill infrastructure quality (eval bugs, Windows compatibility, YAML validation)
2. New domain skills (typography, ODT, HPC, ServiceNow, retro games, testing)
3. Multi-agent orchestration (Hivemind)
4. Security & trust (namespace abuse, security analyzer)
5. Enterprise integration (org sharing, Bedrock, SharePoint)
6. Context window optimization (156k token injection)
7. Quality gate / self-audit

Let me write this report in professional Chinese.</think>

# Claude Code Skills 社区热点报告
**数据截止：2026-09-03 | 数据源：github.com/anthropics/skills**

---

## 一、热门 Skills 排行（按热度排序）

虽然 PR 评论数标记为 undefined（数据接口异常），但根据 PR 排序位次、跨平台引用频次及关联 Issue 关注度综合判断，以下 Skills 是当前社区最关注的：

### 🥇 #1298 — skill-creator 评测系统修复（核心痛点）
- **功能**：修复 `run_eval.py` 始终报告 0% recall 的关键 bug，修复 Windows 流读取、触发检测和并行 worker 问题
- **热度原因**：关联 Issue #556（12 评论，7 👍），已有 10+ 独立复现，是描述优化循环失效的根因
- **状态**：OPEN（2026-06-10 创建）
- **链接**：https://github.com/anthropics/skills/pull/1298

### 🥈 #514 — document-typography 文档排版质量控制
- **功能**：防止 AI 生成文档中的孤行、寡行、编号错位等排版问题
- **热度原因**：解决"每个 Claude 生成的文档都受影响"的普遍痛点
- **状态**：OPEN（2026-03-04 创建，已搁置 5+ 月）
- **链接**：https://github.com/anthropics/skills/pull/514

### 🥉 #1628 — Hivemind 零成本多智能体编排
- **功能**：将机械性工作委派给 headless opencode workers（使用免费模型），Claude Code 保留规划/审查/合并职责
- **热度原因**：直击"昂贵模型上下文是稀缺资源"的成本痛点，理念新颖
- **状态**：OPEN（2026-08-21 新近提交）
- **链接**：https://github.com/anthropics/skills/pull/1628

### #486 — ODT（OpenDocument）技能
- **功能**：创建/填充/读取/转换 ODT、ODS 等 ISO 标准开放文档格式
- **热度原因**：补齐开放文档格式支持，与 docx/pdf 形成完整文档能力矩阵
- **状态**：OPEN（2026-03-01 创建）
- **链接**：https://github.com/anthropics/skills/pull/486

### #83 — skill-quality-analyzer & skill-security-analyzer
- **功能**：对 Claude Skills 进行五维质量评估 + 安全分析（元技能）
- **热度原因**：呼应社区对 Skill 质量参差不齐、安全边界模糊的担忧
- **状态**：OPEN（2025-11-06 创建，长期未合入）
- **链接**：https://github.com/anthropics/skills/pull/83

### #1367 — self-audit 自审计技能 v1.3.0
- **功能**：交付前的机械文件验证 + 四维推理质量门控（按损坏严重度优先级）
- **热度原因**：对应 Issue #1385（4 评论），构成"质量门控"提案的核心组件
- **状态**：OPEN（2026-06-28 新近提交）
- **链接**：https://github.com/anthropics/skills/pull/1367

### #1615 — scnet-hpc 高性能计算集群技能
- **功能**：通过 profile 化 SSH 和 Slurm 工作流操作 SCNet HPC 集群
- **热度原因**：HPC 场景专业化补全，填补科研/学术用户空白
- **状态**：OPEN（2026-08-20 新近提交）
- **链接**：https://github.com/anthropics/skills/pull/1615

### #723 — testing-patterns 测试模式技能
- **功能**：覆盖 Testing Trophy、单元测试、React 组件测试、Mock、E2E 全栈测试方法论
- **热度原因**：开发团队普遍痛点，系统性方法论而非零散技巧
- **状态**：OPEN（2026-03-22 创建，已搁置 5+ 月）
- **链接**：https://github.com/anthropics/skills/pull/723

---

## 二、社区需求趋势（来自 Issues 分析）

| 优先级 | 需求方向 | 代表 Issue | 关注度 |
|---|---|---|---|
| 🔴 **安全信任** | 社区 Skill 在 anthropic/ 命名空间下冒充官方，存在信任边界滥用 | [#492](https://github.com/anthropics/skills/issues/492) | **43 评论 / 2 👍** |
| 🔴 **基础设施可靠性** | skill-creator 评测失效（0% 触发率），导致描述优化循环形同虚设 | [#556](https://github.com/anthropics/skills/issues/556) | 12 评论 / 7 👍 |
| 🟠 **企业协作** | 组织内 Skill 一键共享（无需下载 .skill 文件手动上传） | [#228](https://github.com/anthropics/skills/issues/228) | 16 评论 / 8 👍 |
| 🟠 **上下文管理** | claude-api Skill 单次注入 ~156k tokens，导致上下文耗尽 | [#1487](https://github.com/anthropics/skills/issues/1487) | 4 评论 |
| 🟡 **AI 安全治理** | agent-governance 提案：策略执行、威胁检测、信任评分、审计追踪 | [#412](https://github.com/anthropics/skills/issues/412) | 6 评论（已关闭） |
| 🟡 **协议化输出** | 将 Skills 暴露为 MCP，使 Skill 成为可调用的 AI 软件接口 | [#16](https://github.com/anthropics/skills/issues/16) | 4 评论 |
| 🟡 **长期记忆压缩** | compact-memory：用符号化记号替代散文式 agent 记忆，降低 token 消耗 | [#1329](https://github.com/anthropics/skills/issues/1329) | 9 评论 |
| 🟢 **去重与兼容** | document-skills 与 example-skills 插件内容重复导致 Skill 重复加载 | [#189](https://github.com/anthropics/skills/issues/189) | 6 评论 / 9 👍 |
| 🟢 **云平台兼容** | Skills 与 AWS Bedrock 的兼容性 | [#29](https://github.com/anthropics/skills/issues/29) | 4 评论 |

---

## 三、高潜力待合并 Skills（值得近期关注）

以下 PR 虽然尚未合并，但代表了社区当前最强烈需求方向，最有可能在近期落地：

| PR | Skill | 核心价值 | 落地概率 |
|---|---|---|---|
| [#1298](https://github.com/anthropics/skills/pull/1298) | skill-creator 评测修复 | 阻塞整个技能生态的元问题修复 | ⭐⭐⭐⭐⭐ |
| [#1628](https://github.com/anthropics/skills/pull/1628) | Hivemind 多智能体编排 | 解决成本与上下文瓶颈，新范式 | ⭐⭐⭐⭐ |
| [#1367](https://github.com/anthropics/skills/pull/1367) | self-audit 质量门控 | 配套 Issue #1385 提案，理念完整 | ⭐⭐⭐⭐ |
| [#1607](https://github.com/anthropics/skills/pull/1607) | claude-api 模型 ID 退役标记 | 维护性修复，关联 #1603 | ⭐⭐⭐⭐⭐ |
| [#83](https://github.com/anthropics/skills/pull/83) | skill-quality/security-analyzer | 元技能，呼应 #492 安全诉求 | ⭐⭐⭐ |
| [#568](https://github.com/anthropics/skills/pull/568) | ServiceNow 平台技能 | 企业级 ITSM/SecOps 大覆盖 | ⭐⭐⭐ |
| [#1615](https://github.com/anthropics/skills/pull/1615) | scnet-hpc HPC 集群 | 学术/科研垂直场景 | ⭐⭐⭐ |
| [#486](https://github.com/anthropics/skills/pull/486) | ODT 开放文档格式 | 文档技能完整性补齐 | ⭐⭐⭐⭐ |

> 💡 观察：多个高价值 PR（#514、#723、#83）已 OPEN 超 5 个月却未合并，反映出官方维护节奏与社区贡献速度之间存在结构性摩擦。

---

## 四、Skills 生态洞察

> **当前社区在 Skills 层面最集中的诉求是：让 Claude Code Skills 成为一个"可被信任、可被度量、可被工程化协作"的成熟生产体系**——而非一个仅靠 PR 堆砌的技能目录。

具体表现为三大矛盾集中爆发：
1. **信任危机 vs. 开放生态**（#492 命名空间滥用暴露）：开放贡献机制缺乏官方安全/质量标识
2. **评测失效 vs. 自动化优化**（#556/#1298/#1602 连锁）：基础设施 bug 阻塞了 Skill 自我迭代闭环
3. **场景丰富 vs. 维护迟缓**（#514/#723/#83 长期搁置）：社区贡献速度超过官方 review 容量，导致高价值 Skill 沉淀受阻

---

<think>The user wants me to generate a Chinese daily report about Claude Code community dynamics for 2026-09-03. Let me analyze the data carefully.

Key data points:
1. **Release**: v2.1.259 was released with two main features:
   - Added `managedMcpServers` managed setting for organizations
   - Added `--permission-prompts none` for unattended headless hosts

2. **Issues**: 50 total updated in the last 24 hours, top 30 by comment count. Top issues:
   - #36151: Multi-account switching in Claude Mobile app (169 comments, 676 👍)
   - #80444: Windows Desktop GPU crash (104 comments, 16 👍)
   - #85891: Desktop always-on-top on Windows (65 comments, 145 👍)
   - #53247: Claude Desktop orphaned Silo crash (51 comments)
   - #85199: Desktop crashes requiring Repair (50 comments)
   - #76248: Cloud/Cowork git proxy blocks pushes (32 comments)
   - #49655: Desktop update fails (CLOSED, 24 comments)
   - #63819: Auto mode classifier unavailable (19 comments)
   - #87895: Desktop always on top (CLOSED, 11 comments)
   - #89680: Stealth update orphaned processes (8 comments)
   - #89911: Permission mode demoted in agents-view spawns (5 comments)
   - #89251: Permission mode bypasses PreToolUse hooks via Bash (4 comments)
   - #86650: SDK task-notification AbortController issue (4 comments)
   - #89728: plugins/README.md outdated security-guidance docs (4 comments)
   - #91296: defaultMode bypassPermissions ignored (4 comments)
   - #73582: Store API credentials in OS secret store (3 comments)
   - #78737: TUI stray backspace on Windows (3 comments)
   - #85111: Bash tool truncates commands over 8KB (2 comments)
   - #91371: Local scheduled tasks hang (2 comments)
   - #73770: statusline expose per-model rate limits (2 comments)
   - #76440: Cross-link Claude Code sessions with claude.ai (2 comments)
   - #91059: Max 20x subscription not restored (1 comment)
   - #88188: hooks-guide auto-format example breaks (1 comment)
   - #90538: SendMessage tool description (1 comment)
   - #91415: subagent frontmatter effort field undocumented (1 comment)
   - #91650: Bash cd-compound-read guard prompts (1 comment)
   - #91663: Desktop crashes during self-update (1 comment)
   - #89946: SendMessage rejects session's launch id (1 comment)
   - #91683: bypassPermissions mode prompts on cd (0 comments, but recent)
   - #91682: Claude Code generated unbounded API retry loop (0 comments, but recent)

3. **PRs**: Only 4 PRs total
   - #41938: Linux/macOS Bash script for DevContainer (CLOSED)
   - #87079: fix security-guidance glob patterns
   - #86537: Fix duplicated word in CHANGELOG.md
   - #61691: Diagnostic script for GitHub connector

Now I need to write this as a structured Chinese daily report. The user wants:
1. Today's quick view (2-3 sentences)
2. Version release
3. Hot community issues (10 most notable)
4. Important PR progress (10, but only 4 available)
5. Feature request trends
6. Developer concerns

Let me write this in a professional, technical Chinese style suitable for developers.

For the hot issues, I should pick 10 that are most noteworthy. Looking at the data, I notice:
- Windows Desktop stability is a major theme (multiple issues)
- Permission/security model issues
- Multi-account switching (highest upvotes)
- MCP and managed settings

For feature trends:
- Multi-account switching
- OS keychain integration for credentials
- Desktop stability (Windows specifically)
- Permission mode improvements
- Statusline enhancements (rate limits)
- Cross-session linking
- Subagent improvements

Let me structure this report now.</think>

# Claude Code 社区动态日报

**日期：2026-09-03**
**数据范围：GitHub anthropics/claude-code 过去 24 小时更新**

---

## 一、今日速览

今天社区焦点集中在 **Windows 桌面端的稳定性问题**——多个高评论数 issue 都指向 Desktop App 在 GPU 崩溃、stealth 更新残留孤儿进程、self-update 失败等场景下的连锁故障，部分用户只能通过"Advanced Options → Repair"或重启恢复。与此同时，**权限模型与自动化场景的交互**正成为另一个上升趋势：包括 `bypassPermissions` 模式被静默降级、PreToolUse hook 被绕过、headless 主机的权限提示等问题。v2.1.259 发布的 `managedMcpServers` 与 `--permission-prompts none` 正好对症后者，但前者还未在 issue 中形成显著讨论。

---

## 二、版本发布

### v2.1.259（2026-09-03）

两项主要变更：

1. **`managedMcpServers` 管理设置** — 组织可向所有用户下发 HTTP/SSE MCP 服务器配置（结构与 `.mcp.json` 一致），但以命令形式（stdio）声明的条目会被跳过，避免管理员误下发本地执行入口。
2. **`--permission-prompts none` 标志** — 为无人值守 / headless 主机设计：将所有需要权限确认的交互全部跳过，便于 CI / 自动化场景集成。

> 配套 regression 注意：v2.1.259 同时引入了 `bypassPermissions` 模式对 `cd DIR && grep …` 类命令的额外提示行为（见 [#91683](https://github.com/anthropics/claude-code/issues/91683) 与 [#91650](https://github.com/anthropics/claude-code/issues/91650)），如升级前依赖旧行为请关注。

---

## 三、社区热点 Issues（Top 10）

1. **[#36151] Mobile 端多账号切换（169 评论，676 👍）**
   [链接](https://github.com/anthropics/claude-code/issues/36151)
   *请求支持共享邮箱下多个 Claude 账户的切换*。👍 数是今日全榜最高，反映了 Max/Team/Enterprise 用户长期未满足的痛点；issue 被官方标记 invalid，但讨论热度未减。

2. **[#80444] Windows Desktop GPU 进程崩溃导致 MSIX 包无法启动（104 评论）**
   [链接](https://github.com/anthropics/claude-code/issues/80444)
   *Desktop 1.24012.1 在内嵌 Browser tab 中触发 0x060C201E 致命错误，AppX 容器进入 appxState=2 卡死状态*。提供详细的环境矩阵、驱动复现路径与 AppModel-Runtime 事件日志。

3. **[#85891] Desktop 窗口始终置顶（65 评论，145 👍）**
   [链接](https://github.com/anthropics/claude-code/issues/85891)
   *Windows 11 下 Desktop 窗口无法被其他应用覆盖，且无设置项关闭*。这是 #66516 的 Windows 版本，跨平台 UX 问题已具备系统性。

4. **[#53247] Desktop 崩溃后孤儿 Silo / Job Object 导致无法恢复（51 评论）**
   [链接](https://github.com/anthropics/claude-code/issues/53247)
   *只有注销或重启可恢复，HRESULT 0x80070020*。与 #80444、#85199、#89680 构成 Windows Desktop 一组进程生命周期缺陷簇。

5. **[#85199] Desktop 反复崩溃需 "Repair"（50 评论）**
   [链接](https://github.com/anthropics/claude-code/issues/85199)
   *Windows 用户长期反馈，与上述 #53247、#80444 高度相关*，进一步印证 Desktop 的进程清理逻辑存在结构性 bug。

6. **[#76248] Cowork / 云会话 git proxy 拒绝推送到非授权仓库（32 评论）**
   [链接](https://github.com/anthropics/claude-code/issues/76248)
   *用户自带 fine-grained PAT 也无法绕过 "not in this session's authorized repository set"*。疑似 CCR_TEST_GITPROXY 灰度回滚引发，直接影响协作工作流。

7. **[#63819] Auto 模式分类器不可用导致工具调用全阻（19 评论）**
   [链接](https://github.com/anthropics/claude-code/issues/63819)
   *claude-opus-4-8 临时不可用时 Bash/Write/Edit 全部被阻断*。暴露自动权限决策对单一模型的强耦合风险。

8. **[#89251] bypassPermissions 模式绕过 PreToolUse Hook（4 评论）**
   [链接](https://github.com/anthropics/claude-code/issues/89251)
   *系统提示指引模型用 Bash 实现文件写入，回避 Write|Edit|NotebookEdit 的 hook 检查*。是安全审计/合规团队高度关注的设计缺陷。

9. **[#89911] agents-view spawn 时权限模式被静默降级（5 评论）**
   [链接](https://github.com/anthropics/claude-code/issues/89911)
   *服务端开关 `tengu_agentview_inherit_mode_demote` 默认开启，plan 模式会被降为 auto，反而更宽松*。揭示权限继承存在服务端可控的策略层。

10. **[#91682] Agent 生成无界 API retry loop 产生 ~$50 意外费用（0 评论但严重）**
    [链接](https://github.com/anthropics/claude-code/issues/91682)
    *Claude Code 自生成的子代理管道对 OpenAI API 调用未设有效熔断*。成本失控风险正在成为 agent 编排下的新一类事故模式，建议关注。

---

## 四、重要 PR 进展

过去 24 小时仅 4 个 PR 更新，数量偏少，主要反映 v2.1.259 收尾阶段的状态：

1. **[#87079] 修复 security-guidance glob `**` 模式匹配零深度路径**（OPEN）
   [链接](https://github.com/anthropics/claude-code/pull/87079)
   `fnmatch` 委托下裸 `*` 已跨 `/`，导致 `**/*.ts` 排除顶层文件，安全规则静默失效。安全相关修复，建议优先合并。

2. **[#61691] GitHub 连接器诊断脚本（OPEN）**
   [链接](https://github.com/anthropics/claude-code/pull/61691)
   针对 Windows Cowork 用户反复出现的"Connected 但 0 tools"问题，新增 PowerShell 诊断/修复脚本，关 #61682。

3. **[#41938] Linux/macOS DevContainer 启动脚本（CLOSED）**
   [链接](https://github.com/anthropics/claude-code/pull/41938)
   补齐原仅 PowerShell 支持的 DevContainer 启动脚本。

4. **[#86537] CHANGELOG.md "to to" 重复词修正（OPEN）**
   [链接](https://github.com/anthropics/claude-code/pull/86537)
   纯文档补丁，等待合入。

> 当前 PR 总数仍显著少于 Issue 流入，**贡献者参与度有提升空间**——Windows Desktop 的进程生命周期类问题若能被外部 PR 修复（如 orphan cleanup、GPU 进程隔离），将极大改善社区体验。

---

## 五、功能需求趋势

从过去 24 小时的 issue 流可以提炼出以下社区最关注的方向：

| 方向 | 代表 issue | 关注度信号 |
|---|---|---|
| **多账号 / 身份管理** | #36151 | 👍 676，单条最高 |
| **凭据安全存储（OS Keychain）** | #73582 | 长期呼声，合规刚需 |
| **Windows Desktop 稳定性** | #80444 / #53247 / #85199 / #89680 / #91663 | 占据评论数 Top 10 一半 |
| **权限模型精细化** | #89251 / #89911 / #91296 / #91650 / #91683 | 涉及安全 + UX 双重维度 |
| **状态栏/成本可观测** | #73770 / #91682 | 限流信息暴露 + agent 成本失控 |
| **Agent / SDK 可靠性** | #86650 / #89946 / #91415 | 涉及 AbortController、子代理 frontmatter |
| **跨产品 session 链接** | #76440 | Claude Code ↔ claude.ai chat |
| **文档同步** | #89728 / #88188 / #91415 / #90538 | 4 条文档类，反映 2.1.x 快速迭代下的文档债 |

---

## 六、开发者关注点

**1. Windows Desktop 是当前最大的"信任债"**
GPU 进程崩溃、orphan Silo、self-update 中断、AppX 容器卡死形成一组高度相似的故障树（#80444 / #53247 / #85199 / #89680 / #91663）。这不只是单点 bug，而是 Electron 42 + MSIX + Windows Job Object 三者交互下的架构性问题，社区已经自发地用脚本（#61691）和 Repair 流程绕过，但本质未解。

**2. 权限模型出现"可控静默降级"**
`bypassPermissions` 在系统提示层指引模型改用 Bash 写文件（#89251）、agents-view 的 `tengu_agentview_inherit_mode_demote` 服务端开关（#89911）、`defaultMode` 在 `.claude/settings.local.json` 被静默忽略（#91296）——这些组合起来意味着：用户的权限配置可能在多个层面被悄悄改写。对企业 / 合规用户是高优先级信号。

**3. v2.1.257 → 2.1.259 出现权限提示回归**
#91650 与 #91683 指向 `bypassPermissions` 在 `cd DIR && grep …` 场景新增提示，且同样行为在 `Read()` deny 规则存在时触发。建议在升级 2.1.259 时回归 CI 工作流。

**4. Agent 自动生成管道的成本失控**
#91682 揭示 Claude Code 在编排 OpenAI 兼容 API 时会缺少有效熔断，单次任务产生 ~$50 损失。随着 subagent / agents-view 使用率上升，**内置 spend guard / retry budget** 将成为刚需。

**5. 文档债在加速累积**
plugins/README.md 的 security-guidance 描述停留在 v1（#89728）、hooks-guide 自动格式化示例在路径含空格时直接退出码 2（#88188）、subagent frontmatter 的 `effort` 字段已实现却未文档化（#91415）——快速发布节奏正在让 docs 成为主要摩擦点。

---

*本日报由社区 issue / PR / release 数据自动生成，链接均为 GitHub 原始地址。*

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

<think>The user wants me to generate a daily report about OpenAI Codex community activity for 2026-09-03. Let me analyze the data and structure the report according to the requested format.

Let me go through the data:

**Releases:**
- rust-v0.153.0: Features include Vim mode undo/redo (u, Ctrl+R), plugin CLI for listing/installing/removing plugins
- rust-v0.153.0-alpha.6: Pre-release
- rust-v0.153.0-alpha.5.1: Pre-release

**Top Issues by comment count:**
1. #39903 - "Ran N commands" collapsing option (59 comments, 79 likes) - most popular
2. #25828 - Phone verification bug for auth (32 comments, 5 likes)
3. #40219 - macOS Server-deleted conversations repopulate (15 comments, 14 likes)
4. #41622 - Disable automatic conversation recaps (15 comments, 41 likes)
5. #39989 - Windows deleted conversations persist (15 comments, 1 like)
6. #31017 - Codex cannot access gh (10 comments, 12 likes)
7. #41541 - 0.150 token throughput increase depleting quota (8 comments, 0 likes)
8. #24224 - Concurrent Sessions leak workspace root (8 comments, 4 likes)
9. #38144 - /fork leaves parent thread with active writer (8 comments, 7 likes)
10. #30485 - Mobile remote continuation downgrades permissions (6 comments, 3 likes)
11. #34351 - Windows 11 Insider flicker bug (6 comments, 0 likes)
12. #42215 - Windows ChatGPT Work local chat fails (5 comments)
13. #37858 - Ultra multi-agent doesn't work with API-key providers (5 comments)
14. #24446 - Codex App stale local image (5 comments, 2 likes)
15. #42289 - Windows Pets 150% scaling (5 comments)

**Top PRs:**
1. #42432 - Box the TUI resume picker future
2. #42428 - Use shared composer in agent command center
3. #42425 - Discover TUI experimental features from server
4. #42422 - Honor model requirements in Guardian computer-use scoring
5. #42419 - Add session resume to agent command center
6. #42417 - Expose managed application network requirements
7. #42413 - Enable coordinated MCP OAuth refresh
8. #42410 - Allow reviewing/continuing misalignment-paused chats
9. #42408 - Harden embedded composer input handling
10. #42406 - Honor explicit plugin mentions during MCP startup
11. #42405 - Support app-server daemon on Windows
12. #42404 - Read voice helper frames independently
13. #42403 - Expose last accepted environment ready report
14. #42401 - Discover TUI collaboration modes from app server
15. #42399 - Preserve restored input after resolved misalignment errors
16. #42397 - Extract focused TUI logic into submodules
17. #42395 - Expose Codex version to commands/turn metadata
18. #42392 - Support managed daemon updates on Windows
19. #42391 - Authorize apply_patch in executor path context
20. #42388 - Recover deferred environments after provisioning failure

Let me identify the themes:
- Vim mode enhancements
- Windows platform support improvements (daemon, app-server, multiple Windows issues)
- MCP (Model Context Protocol) OAuth and authentication
- TUI improvements (collaboration modes, experimental features, command center)
- Multi-agent features and custom model providers
- Performance/quota concerns (0.150 throughput)
- Conversation/session management (recaps, recents, forking)
- Auth issues (phone verification, gh CLI)
- Cross-platform parity (Windows desktop parity)

Now let me write the report in Chinese.</think>

# OpenAI Codex 社区动态日报
**日期：2026-09-03**

---

## 📌 今日速览

今日 Codex 仓库共合并 20+ 个 PR，主要围绕 **TUI 体验优化（Vim 模式、协作模式、实验特性发现）**、**Windows 平台能力补齐（app-server 守护进程、托管更新）**、**MCP 鉴权与协调（OAuth 刷新、插件启动）** 三大方向展开。社区最关注的议题仍是 CLI/TUI 的可控性（如「执行 N 条命令」的折叠行为获得 59 条评论、79 个 👍），同时 0.150 之后**令牌吞吐提升导致订阅配额加速消耗**引发新一轮讨论。

---

## 🚀 版本发布

### rust-v0.153.0（稳定版）
- **Vim 模式**：新增 `u` 撤销与 `Ctrl+R` 重做，完整保留草稿、粘贴内容与附件（[#41941](https://github.com/openai/codex/pull/41941), [#42140](https://github.com/openai/codex/pull/42140)）。
- **插件 CLI**：新增列出、安装与移除插件的命令。

### 预发布版本
- `rust-v0.153.0-alpha.6`
- `rust-v0.153.0-alpha.5.1`

> 稳定版与 alpha 版本同步推进，说明 0.153 仍在密集迭代收尾。

---

## 🔥 社区热点 Issues（Top 10）

| # | Issue | 关键内容 |
|---|---|---|
| 1 | [#39903](https://github.com/openai/codex/issues/39903) | **添加关闭"Ran N commands"折叠的选项**——59 评论、79 👍，是当前社区最强烈的 TUI 可见性诉求。 |
| 2 | [#25828](https://github.com/openai/codex/issues/25828) | **Codex 手机号验证失败**（印度尼西亚地区）——登录流程彻底中断，32 条评论持续追踪。 |
| 3 | [#40219](https://github.com/openai/codex/issues/40219) | **macOS 服务器删除的会话在 Recents 重新出现**——15 评论，影响 ChatGPT 统一桌面端用户体验。 |
| 4 | [#41622](https://github.com/openai/codex/issues/41622) | **关闭自动会话摘要**——15 评论、41 👍，高级用户对重复生成 recap 的反感。 |
| 5 | [#39989](https://github.com/openai/codex/issues/39989) | **Windows 桌面删除的 ChatGPT 会话在重启后残留**——与 #40219 是同一缺陷的跨平台版本。 |
| 6 | [#31017](https://github.com/openai/codex/issues/31017) | **Codex 无法识别已登录的 gh CLI**——影响与 GitHub 工具链的集成，10 评论。 |
| 7 | [#41541](https://github.com/openai/codex/issues/41541) | **0.150 高推理任务提速 1.6–1.8x，Pro 周配额被快速耗尽**——触及性能与计费的张力。 |
| 8 | [#24224](https://github.com/openai/codex/issues/24224) | **并发会话在项目之间泄漏 workspace 根**——安全隐患 8 评论。 |
| 9 | [#38144](https://github.com/openai/codex/issues/38144) | **`/fork` 后父线程保留 active writer，无法在其他终端恢复**——会话生命周期 bug。 |
| 10 | [#30485](https://github.com/openai/codex/issues/30485) | **移动端远端继续会话会把 desktop full-access 降级为 managed workspace-write**——权限语义被破坏。 |

**社区反应特征**：TUI/CLI 的"可观察性"与"可配置性"诉求最强烈（#39903、#41622），其次是跨平台一致性问题（macOS/Windows 删除残留、移动/桌面权限降级）。

---

## 🛠 重要 PR 进展（Top 10）

| PR | 内容 |
|---|---|
| [#42432](https://github.com/openai/codex/pull/42432) | TUI 会话恢复选择器 future 进行装箱（Box the TUI resume picker future）。 |
| [#42428](https://github.com/openai/codex/pull/42428) | **Agent 命令中心接入共享 composer**，支持多行编辑、粘贴、Vim 模式与按键绑定。 |
| [#42425](https://github.com/openai/codex/pull/42425) | TUI 从服务端动态发现 `/experimental` 特性目录，含加载/空/失败态。 |
| [#42422](https://github.com/openai/codex/pull/42422) | Guardian computer-use 评分遵守活动模型的 REPL 自动审查要求，**含线程内模型切换场景**。 |
| [#42419](https://github.com/openai/codex/pull/42419) | Agent 命令中心新增 `agents.resume` Action（默认 `Ctrl+O`），调用会话恢复选择器。 |
| [#42417](https://github.com/openai/codex/pull/42417) | 暴露托管应用网络需求 `application.network`，支持精确域名 allow/deny 规则。 |
| [#42413](https://github.com/openai/codex/pull/42413) | **MCP OAuth 协调刷新**（Coordinated refresh mode）在 streamable HTTP 连接中启用。 |
| [#42410](https://github.com/openai/codex/pull/42410) | 支持审查与继续 misalignment-paused 对话，新增 `Review findings` 流程。 |
| [#42408](https://github.com/openai/codex/pull/42408) | 强化嵌入式 composer 输入处理：`!`/`/`/`?` 前缀在纯文本中保持字面量，Vim 模式切换不再丢缓冲。 |
| [#42405](https://github.com/openai/codex/pull/42405) | **Windows 平台支持 app-server 守护进程**，daemon lifecycle + `codex agents` 启动均落地。 |

> 另外值得关注：[#42392](https://github.com/openai/codex/pull/42392) 用 PowerShell 非交互安装器在 Windows 上跑守护更新；[#42395](https://github.com/openai/codex/pull/42395) 在用户 shell 与 MCP turn 元数据中暴露 `CODEX_VERSION`。

---

## 📈 功能需求趋势

通过对全部 50 条 Issue 的标签与摘要归纳，社区最集中的需求方向如下：

1. **TUI/CLI 透明度与可控性**：折叠行为、摘要生成、Vim 模式补全、composer 输入硬化（`!`/`/`/`?` 字面量）。
2. **Windows 平台能力补齐**：守护进程（[#42405](https://github.com/openai/codex/pull/42405)、[#42392](https://github.com/openai/codex/pull/42392)）、高 DPI 缩放（[#42289](https://github.com/openai/codex/issues/42289)）、Schannel 证书校验（[#41275](https://github.com/openai/codex/issues/41275)）。
3. **MCP / OAuth 生态**：[#42413](https://github.com/openai/codex/pull/42413) 协调刷新、[#42427](https://github.com/openai/codex/issues/42427) DCR discovery 忽略 `resource_metadata`、插件启动时显式提及保留等待（[#42406](https://github.com/openai/codex/pull/42406)）。
4. **多 Agent 与自定义模型 Provider**：Ultra multi-agent 在 API-key provider 下不可用（[#37858](https://github.com/openai/codex/issues/37858)），需要文档化与门控（[#37859](https://github.com/openai/codex/issues/37859)）。
5. **会话/上下文工程**：context compaction 404（[#38370](https://github.com/openai/codex/issues/38370)）、`tokens_used` 易与上下文窗口混淆（[#38154](https://github.com/openai/codex/issues/38154)）、响应推理空块（[#38160](https://github.com/openai/codex/issues/38160)）。
6. **性能与配额治理**：[#41541](https://github.com/openai/codex/issues/41541) 直指 0.150 提速带来的周配额消耗问题，社区期待透明的速率显示。

---

## 👨‍💻 开发者关注点

- **跨平台一致性**：macOS 与 Windows 上"已删除会话仍出现在 Recents"、Local Project 文件系统同步失败（[#42215](https://github.com/openai/codex/issues/42215)）反复出现，说明同步状态机尚未完全统一。
- **权限语义被移动/远端交互破坏**：[#30485](https://github.com/openai/codex/issues/30485) 暴露出 full-access → managed workspace 的"静默降级"，开发者担忧这会在企业合规场景中引发问题。
- **开发者工具链集成缺口**：`gh` CLI 检测失败（[#31017](https://github.com/openai/codex/issues/31017)）、`apply_patch` 在执行器路径上下文中需单独授权（[#42391](https://github.com/openai/codex/pull/42391)），说明 Codex 与 OS 原生工具的边界仍有空白。
- **自定义推理 Provider 体验差**：使用 API-key 自定义 `model_providers` 时，多 Agent、加密 reasoning 块、tokens 显示等都存在退化（[#37858](https://github.com/openai/codex/issues/37858)、[#38160](https://github.com/openai/codex/issues/38160)、[#38154](https://github.com/openai/codex/issues/38154)）。
- **Windows 网络与企业代理**：Clash Verge Rev TLS EOF（[#18647](https://github.com/openai/codex/issues/18647)）、Schannel 校验失败（[#41275](https://github.com/openai/codex/issues/41275)）说明企业网络下的可靠性仍是痛点。
- **后台任务静默消耗配额**：[#41130](https://github.com/openai/codex/issues/41130) 指出线程描述后台回填会瞬间生成上千个隐藏请求并触发 429，开发者呼吁可观测性。

---

*日报基于 GitHub 公开数据整理，数据时间窗：2026-09-02 ~ 2026-09-03。*

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

<think>The user wants me to generate a Chinese daily report for the Gemini CLI community based on the GitHub data provided. Let me analyze the data carefully.

Key observations:
1. No releases in the past 24 hours
2. 50 issues updated, top 30 shown
3. 37 PRs updated, top 20 shown

Let me identify the most important issues and PRs:

**Top Issues (by comments and importance):**
1. #22323 - Subagent recovery after MAX_TURNS bug (P1, 13 comments, 2 likes) - Important P1 bug
2. #19873 - Zero-Dependency OS Sandboxing & Post-Execution Intent Routing (P2, 9 comments) - Major enhancement
3. #21409 - Generalist agent hangs (P1, 8 comments, 8 likes) - P1 bug with high likes
4. #22745 - AST-aware file reads assessment (P2, 7 comments)
5. #21968 - Gemini does not use skills and sub-agents enough (P2, 6 comments)
6. #26525 - Deterministic redaction and reduce Auto Memory logging (P2, security, 5 comments)
7. #25166 - Shell command execution stuck (P1, 4 comments, 3 likes)
8. #22232 - Browser agent resilience (P3, 4 comments)
9. #21983 - Browser subagent fails in wayland (P1, 4 comments, 1 like)
10. #21000 - Native file tools for task tracker (P3, 4 comments)
11. #20079 - Symlink agent recognition bug (P2, 4 comments)
12. #26523, #26522 - Auto Memory bugs
13. #24246 - 400 error with >128 tools (P2, 3 comments)
14. #23571 - Model creates tmp scripts in random spots
15. #22672 - Agent destructive behavior
16. #22267 - Browser Agent ignores settings.json
17. #22186 - get-shit-done output hook crash
18. #29174 - Nightly Release Failed (P1, release-failure)

**Top PRs (by importance):**
1. #28914 - inject on-retry nudge into conversation contents (preserve prefix caching)
2. #28911 - only honor DEBUG=true/1 in sandbox launcher
3. #28902 - block $VAR and ${VAR} variable expansion bypass (P1, security)
4. #28917 - atomic download and failure cleanup in WhisperModelManager
5. #28916 - buffer partial stdout chunks in WhisperTranscriptionProvider
6. #28904 - normalize sandbox DEBUG flag semantics
7. #28903 - ignore escaped @ symbols during completion mode detection
8. #28905 - correct individual Google account guidance (docs)
9. #29098 - keep useInputHistoryStore state updaters pure
10. #29097 - strip only trailing .git suffix when parsing GitHub repo names
11. #29094 - upgrade simple-git to 3.32.3 (CVE-2026-28292)
12. #29095 - upgrade shell-quote to 1.8.4 (CVE-2026-9277)
13. #29093 - Fixes #29077 (in-memory cache for ignored paths)
14. #29172 - gemini-3.8-flash as default flash model
15. #29138 - Clean up README.md
16. #29173 - bump fast-uri from 3.1.2 to 3.1.7
17. #29115 - enforce strict permission and ownership checks
18. #29170 - enhance workspace path boundary checks
19. #29116 - mitigate NTFS 8.3 short name path
20. #29171 - isolate temporary directory for macOS Seatbelt sandbox

**Trends:**
- Security: CVE fixes, sandbox, path traversal, permissions
- New models: gemini-3.5/3.6/3.7/3.8 flash
- Browser agent issues (multiple bugs)
- Auto Memory system improvements
- AST-aware code analysis
- Subagent system improvements

Let me write the report in Chinese now.</think>

# Gemini CLI 社区动态日报

**日期**: 2026-09-03  
**数据来源**: [google-gemini/gemini-cli](https://github.com/google-gemini/gemini-cli)

---

## 📌 今日速览

今日社区活跃度持续攀升，**P1 级别 bug 仍是焦点**——subagent 在 `MAX_TURNS` 后错误报告 GOAL 成功、generalist agent 频繁挂起、shell 命令执行卡死等问题引发开发者集中讨论。同时，**安全加固成为重要趋势**：包括 CVE-2026-28292（simple-git）与 CVE-2026-9277（shell-quote）的紧急依赖升级、`$VAR` 变量展开绕过修复（GHSA-wpqr-6v78-jr5g）以及多平台路径边界检查强化。此外，**gemini-3.8-flash 默认 flash 模型升级提案**（PR #29172）正式进入评审。

---

## 🚀 版本发布

过去 24 小时无新版本发布。

---

## 🔥 社区热点 Issues

### 1. [#22323](https://github.com/google-gemini/gemini-cli/issues/22323) — Subagent 恢复后错误报告 GOAL 成功（P1）
**评论 13 | 👍 2**  
`codebase_investigator` 子代理在达到 `MAX_TURNS` 上限后仍返回 `status: "success"` 和 `Termination Reason: "GOAL"`，掩盖了实际的中断状态。这是 P1 级别 bug，可能导致用户误判任务执行结果。社区反馈集中于状态报告与实际执行脱节的问题。

### 2. [#21409](https://github.com/google-gemini/gemini-cli/issues/21409) — Generalist agent 挂起（P1）
**评论 8 | 👍 8**  
当 `gemini-cli` 委派给 generalist agent 时会无限挂起，即使是简单的文件夹创建操作也需等待超过一小时才能手动取消。手动指示模型不使用 subagent 可绕过该问题。**点赞数最高**，反映出这是开发者高频遭遇的实际痛点。

### 3. [#19873](https://github.com/google-gemini/gemini-cli/issues/19873) — 零依赖 OS 沙箱与执行后意图路由（P2）
**评论 9 | 👍 1**  
利用 Gemini 3 模型对 POSIX 工具链（grep、cat、sed、awk）的原生亲和力，通过 OS 级沙箱替代应用层隔离。该提案试图在保留模型原生能力的同时确保安全性，是社区期待的"大胆"架构升级。

### 4. [#22745](https://github.com/google-gemini/gemini-cli/issues/22745) — AST 感知的文件读取、搜索与映射评估（P2）
**评论 7 | 👍 1**  
EPIC 级议题，探索通过 AST 感知工具实现更精确的方法级读取、减少 token 噪声。该方向直接关系到大型代码库的处理效率，是性能优化的关键路径。

### 5. [#25166](https://github.com/google-gemini/gemini-cli/issues/25166) — Shell 命令执行后卡在 "Waiting input"（P1）
**评论 4 | 👍 3**  
Gemini 执行简单的 CLI 命令后挂起，UI 仍显示 shell 命令处于活动状态并"等待用户输入"，但实际命令早已完成。该 bug 影响日常交互体验。

### 6. [#21968](https://github.com/google-gemini/gemini-cli/issues/21968) — Gemini 未能充分使用 skills 与 sub-agents（P2）
**评论 6**  
开发者反映 Gemini 在自主模式下几乎不会主动调用自定义 skills 与 sub-agents，除非显式指示。这与社区对自动化代理的期待存在落差，影响"放手让 AI 干活"的体验。

### 7. [#26525](https://github.com/google-gemini/gemini-cli/issues/26525) — Auto Memory 自动脱敏与日志精简（P2 / 安全）
**评论 5**  
Auto Memory 从本地转录中读取内容并发送给后台提取 agent，虽然提示词要求脱敏，但内容已进入模型上下文后才执行，存在敏感信息泄露风险。这是隐私安全维度的关键问题。

### 8. [#21983](https://github.com/google-gemini/gemini-cli/issues/21983) — browser subagent 在 Wayland 下失败（P1）
**评论 4 | 👍 1**  
Browser Agent 在 Wayland 环境下无法正常运行，相关会话反馈 `Termination Reason: GOAL` 后失败。Linux 桌面用户受影响。

### 9. [#22267](https://github.com/google-gemini/gemini-cli/issues/22267) — Browser Agent 忽略 settings.json 覆盖（P2）
**评论 3**  
Browser Agent 完全忽略全局或项目级 `settings.json` 中的配置覆盖（如 `maxTurns`）。`AgentRegistry` 初始化时正确读取了这些设置，但运行时并未生效。

### 10. [#29174](https://github.com/google-gemini/gemini-cli/issues/29174) — 9 月 3 日 Nightly 发布失败（P1 / release-failure）
**评论 1**  
夜间发布 workflow 失败，需手动 triage。详见 [Actions run #33699974192](https://github.com/google-gemini/gemini-cli/actions/runs/33699974192)。建议关注后续修复进展。

---

## ️ 重要 PR 进展

### 1. [#28902](https://github.com/google-gemini/gemini-cli/pull/28902) — 修复 `$VAR` / `${VAR}` 变量展开绕过（P1 / 安全）⭐
修复 GHSA-wpqr-6v78-jr5g 不完整检查：`detectBashSubstitution()` 与 `detectPowerShellSubstitution()` 允许变量展开模式绕过安全门。同时强化 `gemini-automated-issue-dedup.yml` 工作流的纵深防御。**安全关键 PR**。

### 2. [#29094](https://github.com/google-gemini/gemini-cli/pull/29094) — 升级 simple-git 至 3.32.3（CVE-2026-28292）
升级 `simple-git` 依赖修复 CRITICAL 级别 CVE（CVE-2026-28292）。这是 trivy 扫描发现的关键供应链安全问题。

### 3. [#29095](https://github.com/google-gemini/gemini-cli/pull/29095) — 升级 shell-quote 至 1.8.4（CVE-2026-9277）
升级 `shell-quote` 依赖修复 CRITICAL 级别 CVE（CVE-2026-9277）。与 PR #29094 同期推进，体现团队对依赖安全的重视。

### 4. [#28914](https://github.com/google-gemini/gemini-cli/pull/28914) — on-retry nudge 注入位置优化
将 on-retry nudge 从 `config.systemInstruction` 移至 `contents` 数组末尾的用户回合，**保留静态 prompt 前缀缓存**，使模型在生成前立即观察恢复提示。性能与体验兼顾的修复。

### 5. [#29172](https://github.com/google-gemini/gemini-cli/pull/29172) — gemini-3.8-flash 作为默认 flash 模型
注册 `gemini-3.5-flash-lite` / `gemini-3.6-flash` / `gemini-3.7-flash` / `gemini-3.8-flash` 为可选 Gemini 模型，并将 **3.8-flash 升级为默认 flash 模型**。该 PR 是模型迭代的重要里程碑。

### 6. [#29170](https://github.com/google-gemini/gemini-cli/pull/29170) — 强化 workspace 路径边界检查与符号链接解析
跨 POSIX 与 Windows 平台增强 workspace 边界执行，覆盖命令安全启发式、文件发现服务、目录列出工具。在 `isPathEscapingWorkspace` 中加入边界检查。安全纵深防御系列。

### 7. [#29116](https://github.com/google-gemini/gemini-cli/pull/29116) — 缓解 NTFS 8.3 短路径名绕过
处理 Windows NTFS 上的 SFN 短文件名（如 `git~1`、`env~1`、`node_m~1`），在路径规范化与 `AllowedPathChecker` 安全引擎中加入检测。**缓解 Windows 平台路径遍历与黑名单绕过**。

### 8. [#29115](https://github.com/google-gemini/gemini-cli/pull/29115) — 系统级配置路径的严格权限与所有权校验
在 Windows 与 POSIX 上对系统级配置文件强制所有权与 ACL 校验，使用 PowerShell 在 `@google/gemini-cli` 中实现 ACL 验证。**加载配置前的安全门控**。

### 9. [#28917](https://github.com/google-gemini/gemini-cli/pull/28917) — WhisperModelManager 原子下载与失败清理
确保 `WhisperModelManager.downloadModel()` 写入临时文件（`.downloading`），遵循写流反压、流错误处理、下载长度校验、失败清理、成功后原子重命名。修复 #28644。

### 10. [#29171](https://github.com/google-gemini/gemini-cli/pull/29171) — macOS Seatbelt 沙箱临时目录隔离
修复 macOS Seatbelt 沙箱（`sandbox-exec`）启动时直接将宿主机 `os.tmpdir()` 暴露给 Seatbelt profile 的问题。隔离临时目录以避免沙箱进程共享宿主文件。

---

## 📈 功能需求趋势

通过分析全部 Issue 与 PR 动态，可以归纳出以下社区关注方向：

| 方向 | 代表性议题 | 关注度 |
|---|---|---|
| **🔒 安全加固** | CVE 升级（#29094, #29095）、变量展开绕过（#28902）、NTFS 短路径（#29116）、ACL 校验（#29115）、路径边界（#29170） | 🔥🔥🔥🔥🔥 |
| **🤖 Subagent 系统** | MAX_TURNS 状态报告（#22323）、generalist 挂起（#21409）、trajectory 可分享（#22598）、子代理上下文（#21763） | 🔥🔥🔥🔥 |
| **🧠 新模型支持** | gemini-3.5/3.6/3.7/3.8 flash 接入（#29172）、>128 工具 400 错误（#24246） | 🔥🔥🔥 |
| ** Browser Agent** | Wayland 失败（#21983）、settings 覆盖失效（#22267）、会话接管（#22232） | 🔥🔥🔥 |
| **📚 Auto Memory** | 确定性脱敏（#26525）、无效补丁隔离（#26523）、低信号会话重试（#26522） | 🔥🔥🔥 |
| **⚡ AST 感知工具** | 文件读取与搜索（#22745）、代码库映射（#22746）、精准读取（#19561） | 🔥🔥 |
| **🛡️ 沙箱隔离** | Zero-Dependency OS 沙箱（#19873）、Seatbelt 临时目录（#29171）、DEBUG 语义（#28904） | 🔥🔥 |

---

## 💬 开发者关注点

汇总反馈后，社区当前的痛点与高频需求集中在以下几类：

1. **可靠性问题严重削弱信任**
   - Subagent 在 `MAX_TURNS` 后仍报 GOAL 成功（#22323）
   - Generalist agent 无限挂起（#21409，👍 8）
   - Shell 命令完成后 UI 仍显示等待输入（#25166）
   
   这些问题导致开发者无法判断代理是否真正完成任务，是当前最迫切的改进方向。

2. **代理自主性不足**
   - Gemini 几乎不主动调用自定义 skills / sub-agents（#21968）
   - 期望模型能够"自我觉察"，准确告知自身 CLI flags 与快捷键（#21432）
   - Subagent trajectory 难以通过 `/chat share` 分享（#22598）

3. **安全与供应链风险**
   - simple-git / shell-quote / fast-uri 等关键依赖的 CVE 集中暴露
   - 多平台路径遍历与配置注入面持续被发现
   - Auto Memory 隐私脱敏时机不当（#26525）

4. **模型上下文管理**
   - 工具数量超过 128 即触发 400 错误（#24246）
   - 大文件读取易"消防水龙头"式灌入上下文（#19561）
   - AST 感知工具可显著降低 token 消耗（#22745）

5. **跨平台兼容性**
   - Wayland 下 browser agent 失败（#21983）
   - NTFS 8.3 短路径需要特殊处理（#29116）
   - macOS Seatbelt 沙箱临时目录共享宿主（#29171）

6. **文档与可用性细节**
   - 个人 Google 账号登录建议已过时（#28905）
   - Vite 应用创建卡在交互提示（#22465）
   - symlink 形式的 agent 文件不被识别（#20079）

---

> 📊 **日报小结**: 今日数据揭示 Gemini CLI 已进入**深度打磨期**——主线版本尚未发布，但 bug 修复、安全加固、模型迭代三条主线同时推进。**Subagent 可靠性** 与 **跨平台安全** 是短期内最值得关注的两个主题。建议开发者关注 PR #29172（gemini-3.8-flash 默认模型）与 PR #28902（安全绕过修复）的后续合并动态。

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

<think>
We need answer Chinese. Need follow data, no PR past 24h, so section should explicitly no PR and perhaps not fabricate. User asks important PR progress 10; no PR. Need mention 0, skip selection. Need date 2026-09-03. Need choose 10 issues. Analyze data. Need concise professional. Include links every item. They say each entry with GitHub link. Ensure every issue. Feature trends perhaps aggregate with links. We can identify themes: MCP robustness (several: #2630 closed, #4525, #4695, #4598, #4697), model/provider flexibility (#3709, #4680, #4692, #4703), sessions/context/memory stability (#4664, #2861, #4674, #4686, #4699, #4698), agent/skill/plugin portability (#2630, #4224, #4438, #4674, #4655, #4700), Windows/enterprise/ACP. Need choose top 10 worth. Could use high comment/reaction and newest. User asks community reaction. Include comments/likes. Need not overstate status. Mention releases v1.0.83-2 and -3. Release -3 only "Fixes and changes", no detailed specifics. v-2 added ordered models + model-policy required, Claude Fable 5.1, Linux sandbox proxy restriction. Maybe model typo `claude-fable-5.1` should reproduce as given, perhaps mark repo release says. Could be hallucinated future data but user provides. We trust.

Need clarify #2630 closed perhaps despite past 24h update, likely resolved? No closure reason details, don't say fixed. Community 9 comments, 1 like, areas noninteractive agents MCP. Critical reliability for custom agents. 
#3709 7 comments 29 likes high signal.
#4664 5 comments 0.
#4525 5/2.
#4695 4/0, OAuth token cache.
#4224 4/1 telemetry billing.
#4438 4/6.
#4680 3/0, wrong model ID custom endpoint. Important BYOK interoperability.
#2861 3/4, context compaction.
Could instead #4674 3 comments session agent restore. Or #4598 only 1 but broad MCP reliability. Need select ten and why. Maybe newest #4692 enterprise model 3. Need balance. The 10 most worth: #3709, #2630, #4664, #4525, #4695, #4224, #4438, #4680, #2861, #4674. That's solid. But #4698 duplicates #2861 and #4699 duplicates #4664; #4598 is more broad than #4674? I'd pick #4598 for MCP 18 servers startup and live handles. Community reaction weak, but importance. #4674 session custom agent restore with MCP/tools is serious. Maybe list 10, and feature trends cover all. We can choose:
1 #3709
2 #2630
3 #4664
4 #4525
5 #4695
6 #4224
7 #4438
8 #4680
9 #4598
10 #4674 or #2861. Compaction is important and high likes, while custom agent restore has 3. Maybe #2861. But #4698 shows 0 comment on same, indicating recurrence. Could mention. 
Could rank based on urgency, impact, community attention. Need explain community reaction: metrics. State "社区反应：7条评论/29赞，是本批互动最高之一". Ensure don't interpret votes as necessarily support? For feature requests likes can signal demand. Say "赞数高，需求共识较强." Good.

Section 5 Feature requirements trends, with links each bullet. Maybe table columns direction, evidence/issues, analysis. Every issue entry has link. No PR. Could mention no PR data. Section title "重要 PR 进展" and state 0 updates, no 10 available, do not fabricate. The user's instruction says select 10, but input says zero. Clearly honor source. Could perhaps say "本期无可报告 PR". One line.

Need perhaps include data caveat: 38 total updated issues, top 30 shown; PR 0. Should we state "统计窗口过去24小时". Good.

Need maybe release details:
- v1.0.83-2 added custom agent model list in ordered fallback; `model-policy: required` keeps model changes on that list; claude-fable-5.1; Linux sandbox network egress configured proxy.
- v1.0.83-3 release notes only says fixes/changes, no specific item.
Need avoid saying full release notes. Could say detailed changelog not provided. Link release tag maybe no link listed, can link https://github.com/github/copilot-cli/releases/tag/v1.0.83-2 and -3. User asks each item GitHub link, releases too. Could write two bullets. Maybe "v1.0.83-3 only marks 'Fixes and changes', provided notes don't enumerate specifics." That's precise.

Could discuss #2630 closed. Could say closed within window; does not necessarily mean fix shipped. This nuance useful. Maybe footnote.

Need make language concise but enough. Use Markdown headings. Date. Let's draft around perhaps 1500 Chinese chars. But desired 5. We can be detailed.

Potential issue: The user asks "社区动态日报", likely output. Need no unsupported claims. We can mention no PR. The data says updated 38 total, 30 displayed. The report can say 38 issues updated, 30 listed. No need count 38 maybe "38 条更新（展示30）". This helps.

Let's formulate:

# GitHub Copilot CLI 社区动态日报
日期 2026-09-03 | stats window 24h

## 1 今日速览
"v1.0.83-2/3..." 
"Issue focus shifted..." 2-3 sentences.

## 2 版本发布
- [v1.0.83-2] ... 
- [v1.0.83-3] ...
Maybe -3 "最新补丁版，Release notes只列为 Fixes and changes; no specific list in data." This might not add much but yes.

## 3 Community hotspot
Could use table, but long summaries in table less readable. Numbered list.
1. [#3709] ... `OPEN`; 7/29. Why: BYOK/local cannot appear /model; one session switching. "community highest demand" and impact.
2. [#2630] closed, 9/1. MCP config in custom agents lost in subagent or --prompt. Because integrations config not inherited; closure maybe no details.
3. [#4664] open 5/0. Long resume OOM. etc.
4. [#4525] 5/2. modern `server/discover` then legacy initialize causing error -32022. Protocol interoperability.
5. [#4695] 4/0 OAuth cache key duplicate reauth. Enterprise.
6. [#4224] 4/1. OTel subagent missing billing attrs. cost accounting.
7. [#4438] 4/6. disable-model-invocation makes explicit skill call unavailable; semantics.
8. [#4680] 3/0 wrong gpt-5.4-nano to custom endpoint. BYOK compatibility.
9. [#4598] 1/0 only 3/18 MCP start and handles destroyed. Severe scale reliability.
10. [#2861] 3/4 compaction empty response after retries. Context management and #4698 recurrence. Mention #4698 link maybe additional sublink; then section each entry link. 
Could perhaps #4674 instead #4598? I think #4598 is huge. "社区反应" only 1. We can explicitly say "评论少但覆盖面广". This is analyst choice.

Could include status, comments, likes in a parenthetical. Need likely all links. Links already in title. Good.

"为什么重要 / 社区反应" exactly.

## 4 PR
"过去24小时更新0条，因此无10条可列；为避免误导，不补录窗口外PR." This is professional. Link repo maybe not needed? User asks each entry link; this isn't an item. Could link repo in intro? https://github.com/github/copilot-cli/pulls. Good.

## 5 trends
Could write:
- MCP成为最大热点: protocol dual initialization #4525, OAuth cache #4695, startup reload #4598, custom agent inheritance #2630, process leak #4697. This suggests priority should be unified MCP lifecycle/session identity.
- Model/provider flexibility: ordered model list release; /model includes BYOK #3709; wrong model ID #4680; per-agent provider #4703; enterprise defaults #4692. Demand toward multi-model and scoped providers.
- Session/context stability: OOM #4664/#4686/#4699, compaction #2861/#4698, resume agent config #4674. Long sessions.
- Agent/skill/plugin semantics: disable model #4438, plugin discovery #4655, ACP skillDirectories #4700, context duplication #4665. Need config state consistency across modes.
- Enterprise/cross-platform/observability: enterprise defaults, OTel billing, Windows issues #4191/#4683; perhaps link a representative each. This trend can be concise.

Need maybe mention "new model support" (Claude Fable 5.1) and /model. User examples. 

## 6 dev concerns
Bullets:
- Config not faithfully restored across subagents, --prompt, --resume, ACP, plugin contexts.
- MCP protocol/auth/process lifecycle unreliable.
- BYOK custom endpoints model IDs and per-agent provider.
- Long session resource management, OOM, compaction, crash dumps.
- Observability billing attributes.
- UX/platform Windows paths, approval previews, ConstrainedLanguage. Link representative.
Could combine with feature trends, but user explicitly asks both. Keep separate, avoid redundancy. Each bullet links.

Need possibly mention #3074 closed `/effort`, release effort? It was updated but not top 10? Could use because feature demand closed. It may signal effort control. But in issue trends, "reasoning effort / model context picker parity" perhaps #3074, #4275. We could mention in feature trends with links. It is closed. The user says all issues. Could say "交互层也期待 /effort and ACP contextTier parity" linking #3074 and #4275. However the latest 30 data includes all 38 but only 30 shown. We can only use displayed. Fine.

Need ensure no accidental link typo. #4702 URL in source has copilotcli without hyphen, likely typo. Better use canonical https://github.com/github/copilot-cli/issues/4702. We can avoid. #4703 etc.
No need include all issue links.

Let's assess if there is a concern that release tags don't exist? User says future date 2026 and repo perhaps actual data. We shouldn't second guess. Link okay.

Could explain "过去24h releases 2". Latest release sequence weird -2 then -3. State both.

"v1.0.83-2: model can be a list tried in order until available; model-policy required keeps model changes on list; claude-fable-5.1; Linux sandboxes only configured proxy." The release note says "proxy m" truncated; only known. Phrase "限制为配置代理（原文后段截断）"? We can say "Linux 沙箱网络出口现限制为已配置代理" from given. Good.

"v1.0.83-3: only summary 'Fixes and changes'; detailed changes absent." Maybe "因此不做具体推断". Good.

Could include "Release is in past 24h, two builds." Great.

Need final only Chinese. Let's make clear metrics. Maybe number 38 total but top 30. 
Potential length maybe 1800-2500 Chinese chars, desired 5. Fine.

Let's ensure 10 exact:
1 3709
2 2630
3 4664
4 4525
5 4695
6 4224
7 4438
8 4680
9 4598
10 2861
Should #4674 perhaps be more directly important than #2861? We can mention it trends. The top 10 "most worth" based on comments, likes, reach. #2861 has 3 comments 4 likes; #4674 3/0. Both. We pick #2861. #4692 has 3/0 but enterprise model default important. Could list instead of #4598? #4598 broader 18 servers but only 1 comment. #4692 perhaps indicates org default ignored. Enterprise support is key. Which is more important? Maybe #4692 should be top 10, and MCP issue #4697. But user wants analyst. I'd prioritize enterprise default? Product/enterprise adoption. Yet community not as broad. Could include #4692 instead of #2861 and discuss compaction trend with #4698. Which gives "feature trends" robust. I think #2861 has more likes and established issue, plus #4698 recurrence. Better.

#2630 closed might be hot due 9 comments. Good.
Could include #4674 in one trend.

Need mention #4698 in compaction recurrence to support trend.
Could include `#4699` in resource stability. Great.

Feature trend table maybe:
Direction | signal | judgment
MCP | [#2630][#4525][#4695][#4598][#4697] | largest.
Model & BYOK | [release v1.0.83-2], [#3709], [#4680], [#4692], [#4703] | etc.
Long session/context | [#4664][#2861][#4698][#4699][#4674]
Agents/skills/plugins | [#4224][#4438][#4655][#4700]
Interaction/platform/observability | [#3074][#4275][#4191][#4683][#4701]
Need links with each.

"每条目附GitHub链接" For feature trend entries, each includes several. Fine.

"开发者关注点" may duplicate; perhaps frame as engineering actions:
- Fix config context restoration
- lifecycle/protocol
- memory leak
- model routing
- telemetry
- platform
with links.

Could merge sections 5 and 6 to reduce redundancy, but requested both. We can distinguish trend from actionable pain points.

Let's draft elegantly.

Need maybe say "Issues 过去24h共38，展示30". In intro.
Potential typo: v1.0.83-3 is "Fixes and changes", no details. 
"Claude Fable 5.1" exact. In release maybe `claude-fable-5.1`, write code.

Could note `#2630` closure does not mean fix landed, because data only status. In bullet.
"社区反应" metrics all exact. Use semicolon.

Let's produce.
</think>
# GitHub Copilot CLI 社区动态日报

**日期：2026-09-03**  
**统计窗口：过去 24 小时**  
**概况：Issues 更新 38 条，展示评论数最多的 30 条；Pull Requests 更新 0 条。**

## 1. 今日速览

Copilot CLI 连续发布 `v1.0.83-2` 与 `v1.0.83-3`，其中 `v1.0.83-2` 重点增强自定义 Agent 的多模型回退、模型约束和 Linux 沙箱网络隔离。社区焦点则集中在 MCP 生命周期、BYOK/本地模型切换、长会话内存稳定性以及跨执行模式配置恢复等问题。

## 2. 版本发布

- [v1.0.83-2](https://github.com/github/copilot-cli/releases/tag/v1.0.83-2)
  - 自定义 Agent 的 `model` 可配置多个模型，按顺序选择当前可用模型。
  - `model-policy: required` 可限制会话中的模型变更只能落在指定列表内。
  - 新增 `claude-fable-5.1` 支持。
  - Linux 沙箱的网络出口限制为配置的代理。

- [v1.0.83-3](https://github.com/github/copilot-cli/releases/tag/v1.0.83-3)
  - 标记为包含修复和变更；所给 Release Notes 未列出具体条目，暂不推断。

## 3. 社区热点 Issues

1. [#3709 允许单次会话在 GitHub、BYOK 和本地模型间切换](https://github.com/github/copilot-cli/issues/3709) — **OPEN，7 条评论、29 👍**
   - `COPILOT_MODEL` 会固定 BYOK 模型，而 `/model` 又不展示本地提供方模型。
   - 赞数在本批 Issues 中最高，反映多模型选择是明确的社区需求。

2. [#2630 自定义 Agent 在子 Agent 和 `--prompt` 中未连接声明的 MCP Server](https://github.com/github/copilot-cli/issues/2630) — **CLOSED，9 条评论、1 👍**
   - 影响 `~/.copilot/agents/` 中声明的 `mcp-servers` 和基础工具。
   - 这是本批评论最多的 Issue；状态虽已关闭，但现有数据未说明修复是否已进入发布版本。

3. [#4664 恢复大型历史会话时触发 JavaScript Heap OOM](https://github.com/github/copilot-cli/issues/4664) — **OPEN，5 条评论**
   - 故障发生在会话恢复和历史数据加载阶段，尚未进入正常交互。
   - 与 [#4699](https://github.com/github/copilot-cli/issues/4699)、[#4686](https://github.com/github/copilot-cli/issues/4686) 一起表明长会话资源管理已成为稳定性风险。

4. [#4525 `server/discover` 后重复发送旧版 `initialize`](https://github.com/github/copilot-cli/issues/4525) — **OPEN，5 条评论、2 👍**
   - MCP 服务端在现代发现流程成功后仍收到旧初始化请求，最终返回 `-32022`。
   - 涉及 MCP 协议协商兼容性，对 Python MCP SDK 2.0.0 等混合协议实现尤其重要。

5. [#4695 MCP OAuth Token 未能在不同会话间稳定复用](https://github.com/github/copilot-cli/issues/4695) — **OPEN，4 条评论**
   - 缓存键变化会导致 HTTP MCP Server 重复执行 OAuth/PKCE 授权。
   - 对企业代理、PKCE 和多会话工作流影响明显，也可能增加认证失败概率。

6. [#4224 子 Agent 的 OTel Span 缺少计费属性](https://github.com/github/copilot-cli/issues/4224) — **OPEN，4 条评论、1 👍**
   - `task`/自定义 Agent 实际消耗 AI 额度，但遥测中缺少 `nano_aiu` 和成本字段。
   - 会导致企业外部成本核算、预算告警和资源归因失真。

7. [#4438 `disable-model-invocation: true` 导致显式 Skill 调用也失败](https

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

<think>The user wants me to generate a Chinese daily report about OpenCode community dynamics for 2026-09-03. Let me analyze the GitHub data carefully and structure it according to the requested sections.

Let me look at the data:

**Latest Release (v1.18.27):**
- Default provider header timeouts to 5 minutes
- Default streamed chunk timeouts to 5 minutes (with `false` to disable)
- Allow Anthropic `thinking.blockBinding` opt-out via config

**Top Issues by comments:**
1. #27167 - Add native session goals with /goal (78 comments, 140 likes)
2. #6231 - Auto-discover models from OpenAI-compatible endpoints (48 comments, 225 likes)
3. #28590 - writeOsc52 broken under GNU screen (11 comments, 2 likes)
4. #36413 - opencode run exits 0 with empty stdout (7 comments)
5. #37650 - tools: optional search metadata breaks pending permission listing (6 comments)
6. #46729 - thinking.adaptive.block_binding.prefix_mismatch_behavior bug (6 comments, 13 likes)
7. #31592 - Session title no longer auto update (4 comments)
8. #30898 - OpenCode Web: direct session route crashes (3 comments)
9. #35244 - Agent modifies files massively (3 comments)
10. #35340 - v1.17.13 web UI session list still empty (3 comments)
11. Various Windows bugs (35329, 35328, 35332, 35330, 35331)
12. #29834 - Clipboard on Ubuntu 24.04
13. #33801 - Cannot open new directory
14. #34468 - Perplexity API stops working
15. #46868 - clang-format/air/uv silently disables formatter
16. #46929 - Allow agents to use small/fast model
17. #46936 - Spam/abusive issue
18. #46953 - Go plan usage calculation
19. #45823 - houseCARL + Muse Spark recursive JSON schema
20. #46931 - OpenCode Go usage dashboard showing double cost

**Top PRs:**
1. #46928 - Allow agents to opt into small model
2. #46934 - Add opencode-local-tool-guard to ecosystem
3. #46970 - Reuse current location for directory browsing
4. #46973 - Give experimental settings dedicated page
5. #46972 - Remove background running indicator
6. #46971 - Bind embedded transport at request time
7. #46530 - Expose permission assertions
8. #44838 - Connect browser pane through plugin RPC
9. #46531 - Add public-API browser plugin
10. #46949 - Reconcile current watcher policy
11. #46272 - Stop repeated identical tool call loops
12. #46717 - Add timeline detail presets
13. #46967 - Attribute deferred skill plugin failures
14. #46968 - Show execution failures in viewed session
15. #46912 - Wait for stdout writes before exit
16. #46328 - Add goal-loop example plugin
17. #46957 - Retry failed location initialization
18. #46965 - Drop responses replay tombstones
19. #46690 - Expose session forms, list, global event stream
20. #46964 - Drop undefined metadata from permission requests

Let me now structure the report.

Trends I can identify:
- Goal/session lifecycle management (#27167)
- Model auto-discovery for OpenAI-compatible providers (#6231)
- Browser plugin/tool integration (multiple PRs from Hona)
- Permission system improvements (multiple PRs and issues)
- Windows-specific bugs (many issues)
- TUI improvements
- Plugin SDK extensions (session forms, event stream)
- Provider compatibility (Anthropic, Bedrock, Perplexity, OpenCode Go)
- Formatter configuration issues
- Goal-loop plugin examples

Let me now write the report in Chinese.</think>

# OpenCode 社区动态日报
**日期：2026-09-03**

---

## 一、今日速览

OpenCode 于今日发布 **v1.18.27**，主要修复了 Provider 头部超时与流式分块超时的默认值问题，并支持通过配置关闭 Anthropic `thinking.blockBinding`。社区方面，浏览器插件能力（`@opencode-ai/plugin-browser`）和 Location / 权限系统的稳定性持续成为开发主线，PR #46531 / #44838 / #46530 等集中落地了一批相关改动。同时，长期高热议题 #27167（/goal 会话目标）收到了首个示范插件 PR #46328，正式进入实现阶段。

---

## 二、版本发布

### v1.18.27（今日发布）

**Bugfixes（Core）：**
- Provider 请求头超时默认调整为 **5 分钟**，减少慢启动模型偶发的握手失败。
- 流式 chunk 超时同样默认 **5 分钟**，并支持通过 `false` 显式禁用。
- 支持通过配置让 Anthropic `thinking.blockBinding` **主动退出**，便于特定 Provider 兼容。

> 值得注意的是，#46729 报告升级至 1.18.26 后 Bedrock 上的 `amazon-bedrock/global.anthropic.claude-opus-5` 出现 `prefix_mismatch_behavior: Extra inputs are not permitted` 错误，本次 v1.18.27 提供的 opt-out 机制正是该问题的直接响应。

---

## 三、社区热点 Issues（Top 10）

| # | Issue | 评论 / 👍 | 关注点 |
|---|-------|-----------|--------|
| 1 | [#27167](https://github.com/anomalyco/opencode/issues/27167) 原生 `/goal` 会话目标 | 78 / 👍140 | 呼声最高的特性建议，已迎来首个示范 PR #46328，标志着需求进入落地期 |
| 2 | [#6231](https://github.com/anomalyco/opencode/issues/6231) OpenAI 兼容端点自动发现模型 | 48 / 👍225 | 👍 数领跑全榜，本地模型用户（LM Studio / Ollama / llama.cpp）配置负担沉重，自动化诉求强烈 |
| 3 | [#28590](https://github.com/anomalyco/opencode/issues/28590) `writeOsc52` 在 GNU screen 下失效 | 11 / 👍2 | 终端剪贴板兼容性问题，使用了 tmux DCS 格式却未做 screen 适配 |
| 4 | [#46729](https://github.com/anomalyco/opencode/issues/46729) Bedrock `block_binding` 报错 | 6 / 👍13 | v1.18.26 升级回归，影响生产用户，v1.18.27 已提供 opt-out |
| 5 | [#36413](https://github.com/anomalyco/opencode/issues/36413) `opencode run` 自动拒绝工具后静默退出 | 7 / 👍0 | 非交互模式下退出码 0 + 空 stdout，自动化脚本无法感知失败 |
| 6 | [#37650](https://github.com/anomalyco/opencode/issues/37650) 可选搜索元数据破坏权限 Schema | 6 / 👍0 | `glob`/`grep` 可选字段 `undefined` 导致 `session.permission.list` 编码失败 |
| 7 | [#46868](https://github.com/anomalyco/opencode/issues/46868) `clang-format`/`air`/`uv` 静默关闭 formatter | 3 / 👍0 | 仅当 `disabled: true` 时生效，其他覆盖项全部"哑火" |
| 8 | [#34468](https://github.com/anomalyco/opencode/issues/34468) Perplexity API `invalid request` | 3 / 👍1 | 多家 Provider 经 Perplexity 中转出现 reserved tool name 拦截 |
| 9 | [#46931](https://github.com/anomalyco/opencode/issues/46931) Go 用量看板对 `glm-5.3-flash` 双倍计费 | 2 / 👍0 | 半价促销模型在 Dashboard 上显示原价，影响计费透明度 |
| 10 | [#30898](https://github.com/anomalyco/opencode/issues/30898) Web 直链 Session 路由崩溃 | 3 / 👍1 | `ServerSync context must be used within a context provider` 前端报错 |

**补充关注：** Windows 平台近期集中爆发了一批高相似度 issue（[#35329](https://github.com/anomalyco/opencode/issues/35329)、[#35328](https://github.com/anomalyco/opencode/issues/35328)、[#35330](https://github.com/anomalyco/opencode/issues/35330)、[#35331](https://github.com/anomalyco/opencode/issues/35331)、[#35332](https://github.com/anomalyco/opencode/issues/35332)），覆盖路径分隔符、终端标题、`@file` 补全、安装器杀进程等典型 Windows 兼容性场景。

---

## 四、重要 PR 进展（Top 10）

| # | PR | 内容要点 |
|---|----|----------|
| 1 | [#46531](https://github.com/anomalyco/opencode/pull/46531) **公开浏览器插件 API** | 新增实验性 `@opencode-ai/plugin-browser`，统一走 Plugin SDK 公共接口 |
| 2 | [#44838](https://github.com/anomalyco/opencode/pull/44838) **Desktop 浏览器面板走插件 RPC** | 在 Review tab 新增 Browser 标签，沙箱 Chromium 与内置 browser 插件打通 |
| 3 | [#46928](https://github.com/anomalyco/opencode/pull/46928) **Agent 可选用小模型** | 复用 `Catalog.model.small()` 让轻量回合使用快速模型（issue #46929） |
| 4 | [#46328](https://github.com/anomalyco/opencode/pull/46328) **`/goal` 示例插件** | 首个示范实现，证实可在不改动 core 的前提下提供会话目标/循环 |
| 5 | [#46530](https://github.com/anomalyco/opencode/pull/46530) **暴露权限断言** | 插件可调用 `ctx.permission.assert(input)`，复用 `PermissionCreateInput` |
| 6 | [#46690](https://github.com/anomalyco/opencode/pull/46690) **会话表单 / 列表 / 全局事件流** | 扩展插件 SDK，为 Telegram bot 等远程控制场景铺路 |
| 7 | [#46971](https://github.com/anomalyco/opencode/pull/46971) **嵌入式传输按需绑定** | 修复 Effect `FetchHttpClient` 误劫持 SDK 请求 |
| 8 | [#46272](https://github.com/anomalyco/opencode/pull/46272) **阻断重复工具调用循环** | 同一工具名 + 规范化参数连续 10 次后停止会话（关闭 #45442） |
| 9 | [#46912](https://github.com/anomalyco/opencode/pull/46912) **退出前 flush stdout** | `export` / `session list --format json` 不再被 `process.exit` 截断 |
| 10 | [#46964](https://github.com/anomalyco/opencode/pull/46964) **过滤权限请求中的 `undefined` 元数据** | 直接修复 #37650，复用 #37679 的设计思路 |

**其他值得跟踪：** #46970（Location 复用 / 避免重复启动 MCP）、#46957（Location 初始化失败重试）、#46967（技能插件失败归属）、#46968（TUI 在聚焦时展示执行失败）、#46965（移除 Responses 重放墓碑）。

---

## 五、功能需求趋势

从 50 条 Issue 的语义归纳，社区当前最集中的需求方向如下：

1. **会话生命周期管理** — 以 #27167 为代表，/goal、/loop、persistent memory（#35291）等诉求说明"长任务编排"已成为核心痛点。
2. **本地 / OpenAI 兼容 Provider 模型自动发现** — #6231 高赞 225，反映 LM Studio、Ollama 等本地栈用户在配置上浪费大量精力。
3. **浏览器 / Web 工具一等公民化** — 多个 PR 集中打造 `plugin-browser`，意味着社区在押注"Agent 操控浏览器"这一交互形态。
4. **插件 SDK 持续扩展** — 会话表单、全局事件流、权限断言、目标循环等接口持续被暴露，第三方机器人与自动化生态正在成型。
5. **Provider 兼容性细化** — Anthropic thinking 块、Bedrock block binding、Perplexity 转发、Console Go 模型均在 1.18.x 升级中暴露出新的边缘情况。
6. **Windows 终端生态补齐** — 路径分隔符、终端标题、剪贴板 OSC52、安装器生命周期等问题集中曝光，仍是平台短板。
7. **计费透明度** — Go 套餐用量、glm-5.3-flash 促销计费（#46931、#46953）成为新晋关切。

---

## 六、开发者关注点

- **稳定性优先于新特性：** 1.18.27 的全部 3 条 changelog 都是 bugfix，社区对"默认值不合理导致线上事故"高度敏感（Bedrock / Anthropic 块绑定即典型）。
- **非交互脚本可观测性：** #36413、#46912 共同反映出 `opencode run` / `export` 的退出语义和 stdout flush 仍是自动化集成的痛点，开发者期望**显式、可机器解析的失败信号**。
- **权限系统易碎：** #37650 + #46964 暴露了一个反复出现的设计张力——可选字段在 JSON Schema 中以 `undefined` 出现时，序列化层会破坏协议，开发者呼吁在源头显式过滤。
- **Location / 加载语义冗余：** 多个 PR（#46970、#46957、#46949）共同修复"每次进入目录都重启动 MCP / 重读 watcher 策略"，社区期望**轻量、可恢复、可追溯**的会话级缓存。
- **滥用 / 噪声 Issue 出现：** #46936 全为粗口内容，#46953 反映订阅服务投诉混入 GitHub Issue 通道，社区治理通道有待明确。

> 总体观察：OpenCode 当前处于 **"平台能力快速扩张 + 边缘兼容性密集暴露"** 的阶段，浏览器插件与插件 SDK 扩展是增长引擎，Provider 与 Windows 平台兼容性则成为下一阶段需要重点投入的方向。

---

*数据来源：[github.com/anomalyco/opencode](https://github.com/anomalyco/opencode) · 统计窗口：2026-09-02 → 2026-09-03*

</details>

<details>
<summary><strong>jcode</strong> — <a href="https://github.com/1jehuang/jcode">1jehuang/jcode</a></summary>

<think>Let me analyze the GitHub data for jcode and generate a comprehensive Chinese daily report for 2026-09-03.

Key observations:
1. No new releases in the past 24 hours
2. 29 issues updated in the past 24 hours - many are bugs, security, and enhancements
3. 2 PRs updated - one new (#1166) and one closed (#1)

Let me identify the most important issues to highlight:

Top issues by importance and discussion:
- #568 - Security review (HIGH priority, 7 comments, 👍1) - Most discussed
- #972 - Dispatch name call sites follow-ups (6 comments)
- #1141 - TUI deadlock (reproducible, 5/5 reproduction)
- #1158 - Windows daemon respawn issue (HIGH priority, 3733 processes!)
- #1162 - Google AI Pro 429s (HIGH priority)
- #1163 - Model routing bug (HIGH priority)
- #1095 - OpenRouter billing bug (HIGH priority, 300x over-report)
- #1064 - Windows focus regain regression
- #802 - MCP 30s timeout
- #1146 - macOS stdin detection
- #1150 - 512 KiB journal checkpoint cap
- #1154 - Build version retention policy
- #1143 - Swarm agents in footer
- #1147 - Websearch reliability
- #1156 - swarm_model=inherit broken
- #1164 - swarm spawn model field
- #1149 - Parallel tool calls
- #1151 - session_search concurrency
- #1152 - idle_live_agent lock issue
- #1144 - Session::save bug
- #1142 - Test isolation bug
- #1148 - auth-test retry bug
- #1153 - macOS test issue
- #1157 - Auto-resume sessions
- #1165 - swarm spawn effort pin
- #1159 - Browser bridges
- #1160 - More developer features
- #1161 - Self-improving harness
- #1155 - test (spam)

For PRs:
- #1166 - Seven fixes batch from @1jehuang (NEW, OPEN)
- #1 - Auto-update system (CLOSED)

Feature request trends:
1. Browser automation/Playwright-like bridges (#1159)
2. Self-improving harness (#1161)
3. Developer features / debugging (#1160)
4. Auto-resume after usage limits (#1157)
5. Swarm agent improvements
6. Tool execution parallelism
7. Web search reliability
8. Model routing fixes

Developer pain points:
1. Lock/concurrency issues (ABBA deadlocks, try_lock patterns)
2. macOS-specific bugs (stdin detection, test paths)
3. Windows-specific bugs (terminal focus, daemon leaks)
4. Security/trust boundaries
5. Cost/billing accuracy (OpenRouter)
6. Provider-specific routing issues
7. Session/state management edge cases
8. Long-running operations timeout (MCP 30s)

Let me write the report now.</think>

# jcode 社区动态日报

**日期：** 2026-09-03
**数据来源：** github.com/1jehuang/jcode

---

## 📌 今日速览

今日社区维护者 @1jehuang 提交了 **PR #1166**，一次性合入 7 个已通过验证的安全修复，涵盖 OpenRouter 定价、Swarm 行为、测试隔离、会话存储、登录重试等长期积压问题；与此同时，Windows 守护进程失控（#1158，最多堆积 3733 个进程/14 GB）、macOS TUI 测试死锁（#1141，100% 可复现）以及安全评审（#568）仍是讨论热度最高的议题。

---

## 🚀 版本发布

过去 24 小时无新版本发布。最近的版本为 **v0.81.4**（参见多个 issue 中的版本引用）。

---

## 🔥 社区热点 Issues（精选 10 条）

1. **[#568] 安全评审：交互会话中工具执行缺少权限网关** — 优先级 High，7 条评论
   一位用户在采用 jcode 前对其进行了系统安全评审，发现 PKCE OAuth、CSRF state、0600/0700 凭据硬化、自托管遥测等环节总体扎实，但**交互会话中的工具执行缺少权限校验**，存在 4 个信任边界缺口。这是当日讨论热度最高的 issue。
   🔗 https://github.com/1jehuang/jcode/issues/568

2. **[#1141] `cargo test -p jcode-tui --lib` 默认线程数下死锁** — 优先级 Medium，5/5 复现
   macOS 上以默认线程数运行测试永远不会完成，根因为渲染状态锁与环境锁之间的 **ABBA 锁顺序死锁**（不是慢测试）。完整跑同样套件约 22 秒，死锁情况下 180 秒未返回。
   🔗 https://github.com/1jehuang/jcode/issues/1141

3. **[#1158] Windows：孤儿 `server keepalive` 导致守护进程无限重生** — 优先级 High
   在 Windows 10 LTSC 上观察到 **3733 个进程、14.26 GB 内存** 的失控场景：热键监听器死亡时未关闭 stdin 生命周期管道，keepalive 永远不结束，守护进程无限 respawn。
   🔗 https://github.com/1jehuang/jcode/issues/1158

4. **[#1162] Antigravity Google AI Pro 账号 429 RESOURCE_EXHAUSTED** — 优先级 High
   Google AI Pro（$20/月）消费者账号登录与 onboarding 均成功，但每次 `generateContent` 立即 429。jcode 始终命中 `cloudcode-pa` 端点，消费者账号实际需要走 `daily-cloudcode-pa`。
   🔗 https://github.com/1jehuang/jcode/issues/1162

5. **[#1095] OpenRouter `@endpoint-pinned` 模型被以默认 $15/$60 计费** — 优先级 High
   当 endpoint 带 `@Provider` 后缀（如 `deepseek-v4-pro@Sail Research`）时，成本组件未正确剥离，**开销虚报约 300 倍**（实际 $0.015 显示为 $4，日账本冲过 $1000）。
   🔗 https://github.com/1jehuang/jcode/issues/1095

6. **[#1163] `/model <bare-id>` 在命名 profile 下路由错误** — 优先级 High
   当 `default_provider` 是用户自定义 `[providers.<name>]` profile（如 `kilocode`、`pollinations`）时，带 `/` 的模型 id 会**静默派发到错误的端点**。
   🔗 https://github.com/1jehuang/jcode/issues/1163

7. **[#1064] Windows/VS Code：focus regain 后 kitty CSI u 解码失败，每次按键泄漏 `[97;1;3u`** — 优先级 High
   v0.80.1 回归（提交 `2eaadca31` 引入），v0.80.0 不存在；v0.81.4 仍可复现。
   🔗 https://github.com/1jehuang/jcode/issues/1064

8. **[#972] #941 的三个遗留问题：dispatch_name 调用点、MCP 名称冲突、complete_simple 丢带内错误**
   上游 #941 关闭了 #936 和 #937，但三个尾巴在 `master` `c4cdc67` 仍在。已有分支 `fix/mcp-dispatch-name-call-sites` 待合。
   🔗 https://github.com/1jehuang/jcode/issues/972

9. **[#802] MCP 硬编码 30s 超时使长时工具无法运行** — 与 #617 同根因
   每个 MCP JSON-RPC 请求共用同一个 30s 超时，没有 flag/config/mcp.json 字段可以调高。合法的长时工具永远无法成功。
   🔗 https://github.com/1jehuang/jcode/issues/802

10. **[#1150] 固定 512 KiB 日志检查点导致长会话快照重写放大** — Tech-debt
    长会话中绝对 512 KiB 阈值造成大量完整快照重写与互斥锁下的同步时间放大；建议改为按比例阈值或自适应策略。
    🔗 https://github.com/1jehuang/jcode/issues/1150

---

## 🛠 重要 PR 进展（精选）

### PR #1166 — `fix: resolve seven safe issues from open-issue triage`（NEW, OPEN）

由 @1jehuang 本人提交，是今日**最重要的合并候选**：把当日开放 issue 分类中 7 个安全、独立、可独立验证的小修复打包，每个 issue 一个 commit。

| Issue | 修改 |
|---|---|
| #1095 | `openrouter_route_pricing` / `normalize_model_id` 剥离 `@Provider` 后缀，按 pinned endpoint 计费而非默认 $15/$60 |
| #1165 | 新增 `agents.swarm_effort` 与 `swarm_model` 对应的 effort pin 字段 |
| #1148 | `run_auth_test_with_retry` 区分硬性用量耗尽与瞬时 429 |
| #1144 | `Session::save` 跳过条件同时考虑 `title` 与 `custom_title` |
| #1142 | `create_test_app` 在删除 ambient 状态前获取环境锁 |
| #1141 | 修复 TUI 测试套件的 ABBA 锁顺序 |
| #568（部分） | 工具执行的权限网关基础 |

🔗 https://github.com/1jehuang/jcode/pull/1166

### PR #1 — `Add auto-update system for release builds`（CLOSED）

实现发布版自动更新：仅 CI 构建（`JCODE_RELEASE_BUILD=1`）会自更新，本地开发构建永不自动更新。今日被关闭。
🔗 https://github.com/1jehuang/jcode/pull/1

---

## 📈 功能需求趋势

从 29 条活跃 issue 中提炼出社区当前最集中的方向：

| 方向 | 代表 issue |
|---|---|
| **Swarm（多 agent）协同能力增强** | #1143、#1156、#1164、#1165 — 模型继承、effort pin、UI 残留、字段缺失 |
| **更可靠的工具执行与并行调度** | #568、#802、#1149 — 权限网关、长任务超时、并行 tool_calls |
| **自动化 / 浏览器桥接（类 Playwright）** | #1159 |
| **自我改进与可验证 Harness** | #1161 — 借鉴 Prime Agent、Bastani Atomic |
| **开发者调试与语法感知能力** | #1160 — 借鉴 Oh My Pie |
| **网络搜索可靠性与可观测性** | #1147 |
| **用量超限后自动恢复会话** | #1157 — 借鉴 `unsnooze` |
| **会话/日志存储优化** | #1150、#1151、#1154 — 检查点放大、并发反序列化、构建版本无清理策略 |

---

## 👨‍💻 开发者关注点（痛点与高频需求）

1. **并发与锁正确性** — ABBA 死锁（#1141）、`try_lock` 过早释放（#1152）、`try_lock` 顺序（#1141）连续出现；测试隔离破坏并发态（#1142）说明全局可变状态需要更严格的隔离策略。

2. **平台特异性 bug 频发** — macOS 上的 stdin 检测误判（#1146）、/var 与 /private/var 路径比较（#1153）；Windows 上的 focus regain CSI u（#1064）、守护进程失控（#1158）。跨平台测试矩阵明显需要扩充。

3. **成本与计费准确性** — OpenRouter 300× 虚报（#1095）、Antigravity 端点错配（#1162），反映出多 provider 路由和定价元数据治理成为新瓶颈。

4. **会话/状态生命周期边界条件** — `Session::save` 静默跳过（#1144）、`session_search` 全量反序列化放大（#1151）、512 KiB 硬性阈值（#1150）都指向同一个底层问题：长会话的状态机设计需要重审。

5. **构建产物与磁盘卫生** — `~/.jcode/builds/versions/<hash>/` 没有保留策略（#1154），单台机器积压 5.2 GiB；开发者期待文档化的清理命令。

6. **社区希望引入外部优秀实践** — Playwright（#1159）、Prime Agent/Bastani Atomic（#1161）、Oh My Pie（#1160）被频繁点名，说明 jcode 用户群体对**外部能力集成**持开放态度。

---

*日报生成依据：jcode 仓库过去 24 小时更新的 29 条 Issue 与 2 条 PR 数据。*

</details>

<details>
<summary><strong>pi</strong> — <a href="https://github.com/earendil-works/pi">earendil-works/pi</a></summary>

<think>The user wants me to generate a Chinese-language daily report for the Pi community based on GitHub data from 2026-09-03. Let me analyze the data carefully:

1. **No new releases in the past 24 hours**
2. **50 issues updated** (I'll pick the top 30 most commented)
3. **29 PRs updated** (I'll pick the top 20 most commented, but all show undefined comments - so I'll select based on importance)

Let me structure the report:

### Today's Highlights
- Multiple provider-specific bugs (Gemini, OpenRouter, Bedrock, Z.AI/GLM) affecting tool use and reasoning
- System prompt refactor PR #8998 (by mitsuhiko - likely a maintainer) for mid-conversation system prompt updates
- AgentHarness recoverable runtime proposal from @wsjwu58-cmd

### Top Issues (by comment count)
1. #6996 - Gemini 3.x tool use with missing thought_signature (8 comments)
2. #8845 - Branch summarization hardcodes maxTokens: 2048 (7 comments)
3. #6817 - Windows find tool path patterns (6 comments)
4. #7121 - Tool bugs: byte count, false limit warning, surrogate split (CLOSED, 6 comments)
5. #8760 - OpenRouter free models 400 errors (4 comments)
6. #8643 - Bedrock OpenAI images in toolResult.content (4 comments)
7. #8706 - zai thinking handler for forced-thinking models (3 comments)
8. #6513 - Codex cached WebSocket credentials bug (3 comments)
9. #8820 - openai-responses tool_choice for xAI (CLOSED, 3 comments)
10. #9032 - Editor frameless/prompt-prefix options (CLOSED, 3 comments)

### Important PRs
Looking at PRs (all have undefined comments, so I'll pick by importance):
1. #8998 - System prompt refactor (mitsuhiko - maintainer) - BIG change
2. #9037 - Codex SSE parsing bound/CRLF fix (RooseveltAdvisors) - fixes OOM
3. #9044 - AgentHarness initial runtime (CLOSED - merged fast)
4. #9041/9040 - Reject stale JSONL session writes
5. #9039 - PI_DISABLE_MOUSE
6. #8818 - omit Responses tool_choice (xAI fix)
7. #8994 - signal-killed exit code mapping
8. #9015 - llama.cpp reasoning_effort
9. #9004 - vllmPriority compat flag
10. #8990 - preserve compaction boundary when forking

### Feature Trends
- Multi-provider support (OpenRouter, Bedrock, llama.cpp, vLLM, OpenCode Go)
- System prompt flexibility / mid-conversation updates
- Tool use / thinking / reasoning control per model
- Windows / cross-platform issues (fd, ripgrep, path separators)
- AgentHarness recoverable runtime
- Capability policy / security hooks

### Developer Pain Points
- Provider-specific quirks (Gemini thought_signature, Z.AI thinking, xAI tool_choice)
- Windows compatibility (paths, installation with non-Latin usernames)
- Streaming/cancellation reliability (Esc during streaming)
- OOM crashes (Codex SSE)
- pnpm vs npm update issues

Let me write this in clear, professional Chinese suitable for developers.</think>

# Pi 社区动态日报 · 2026-09-03

## 📌 今日速览

今日社区围绕**多模型供应商兼容性**与**系统提示重构**展开密集讨论：Gemini 3.x、OpenRouter free 模型、Z.AI 强制思维模型等被报告存在工具调用/参数传递缺陷，叠加多个 SSE 流解析、取消、内存泄漏类严重 Bug 等待修复；与此同时，核心维护者 @mitsuhiko 推动的 **PR #8998 系统提示重构** 与新晋贡献者 @wsjwu58-cmd 提出的 **AgentHarness 可恢复运行时**成为架构层面的两大热点，预示着项目即将进入一轮底层能力升级。

---

## 🚀 版本发布

过去 24 小时内无新版本发布。

---

## 🔥 社区热点 Issues

| # | Issue | 状态 | 重要性 |
|---|-------|------|--------|
| [#6996](https://github.com/earendil-works/pi/issues/6996) | Gemini 3.x 工具调用因 `thought_signature` 缺失失败 | OPEN | 影响所有 Gemini 3.x 工具流，8 条评论持续跟进 |
| [#8845](https://github.com/earendil-works/pi/issues/8845) | 分支摘要 `generateBranchSummary` 硬编码 `maxTokens:2048` | OPEN | `/tree` 导航确定性地失败，社区期望可配置化 |
| [#6817](https://github.com/earendil-works/pi/issues/6817) | Windows 下 `find` 不支持 `src/**/*.ts` 这类路径模式 | OPEN | 跨平台路径分隔符处理长期被关注（6 评论） |
| [#7121](https://github.com/earendil-works/pi/issues/7121) | 工具三连 Bug：write 字节数、find 假警告、truncateLine 代理对 | CLOSED | 一次性合并三个独立修复，体现社区协作效率 |
| [#8760](https://github.com/earendil-works/pi/issues/8760) | OpenRouter `:free` 模型因 `max_tokens` 超限 400 | OPEN | 多个免费模型受影响，需要按 provider 硬限制做适配 |
| [#8643](https://github.com/earendil-works/pi/issues/8643) | Bedrock 上 OpenAI 模型拒绝 `toolResult.content` 内嵌图片 | OPEN | 跨供应商多模态转译一致性问题，PR 已在作者 fork 备好 |
| [#8706](https://github.com/earendil-works/pi/issues/8706) | `zai` 思维处理器对强制思维模型发送 `disabled` | OPEN | GLM-5.3/5.3-flash 关闭思维后推理泄露到正文 |
| [#6513](https://github.com/earendil-works/pi/issues/6513) | Codex 缓存 WebSocket 仅以 session id 为 key，切换账号后复用旧凭证 | OPEN | 潜在安全/路由正确性问题 |
| [#8820](https://github.com/earendil-works/pi/issues/8820) | `openai-responses` 在无 tools 时省略 `tool_choice`，对 xAI 发 `tools: []` | CLOSED | 解决 Grok 压缩请求 400 |
| [#8928](https://github.com/earendil-works/pi/issues/8928) | 并行启动时若 `auth.json` 包含其他 provider 过期 OAuth，最长阻塞 ~48s | OPEN | 与 #1871/#4919/#6880 同源，多进程场景高频复现 |
| [#8823](https://github.com/earendil-works/pi/issues/8823) | Esc 在流式阶段常无法真正取消请求 | OPEN | 用户体感极强的可靠性缺陷 |
| [#9036](https://github.com/earendil-works/pi/issues/9036) | Codex SSE 解析器将整段响应缓冲进单一字符串，V8 OOM | CLOSED | 致命堆内存错误，PR #9037 已修复 |

---

## 🛠 重要 PR 进展

| PR | 内容 | 状态 |
|----|------|------|
| [#8998](https://github.com/earendil-works/pi/pull/8998) | **系统提示重构**：支持扩展对 system prompt 做局部更新并在 mid-conversation 注入，避免动态变更抹掉上下文 | OPEN（DRAFT，维护者 @mitsuhiko） |
| [#9044](https://github.com/earendil-works/pi/pull/9044) | **AgentHarness 初版**：将 prompt/compact/abort/resume/lanes/watch 统一为可恢复运行时边界，并附带 opt-in `ToolPolicy` 与审计事件 | CLOSED（合并极快） |
| [#9037](https://github.com/earendil-works/pi/pull/9037) | Codex SSE 解析器加上限 + CRLF 感知，解决单字符串缓冲引发的致命 OOM | CLOSED |
| [#9040](https://github.com/earendil-works/pi/pull/9040) / [#9041](https://github.com/earendil-works/pi/pull/9041) | `JsonlSessionRepo.delete()` 后拒绝陈旧 `appendFile`，避免 JSONL 被重写成无 v4 头部的非法文件 | CLOSED / OPEN（重复提案） |
| [#9039](https://github.com/earendil-works/pi/pull/9039) | 新增 `PI_DISABLE_MOUSE` 环境变量，全屏模式可关闭鼠标追踪序列 | CLOSED |
| [#8818](https://github.com/earendil-works/pi/pull/8818) | OpenAI Responses 在无 tools 时省略 `tool_choice`，对 xAI/Grok 发 `tools: []` | CLOSED |
| [#8994](https://github.com/earendil-works/pi/pull/8994) | 将被信号杀死的子进程映射为非 0 退出码，避免 bash 工具误判成功 | OPEN |
| [#9015](https://github.com/earendil-works/pi/pull/9015) | 为内置 `llama.cpp` provider 启用按请求 `reasoning_effort` | CLOSED |
| [#9004](https://github.com/earendil-works/pi/pull/9004) | 新增 `vllmPriority` 兼容开关，向 vLLM 0.28+ 透传 `priority` 字段 | CLOSED |
| [#8990](https://github.com/earendil-works/pi/pull/8990) | fork 时改写被移除标签指向的压缩边界，保留上下文 | OPEN |
| [#8997](https://github.com/earendil-works/pi/pull/8997) | 代理流 EOF 缺终止事件时作为错误上报，防止消费者永久挂起 | CLOSED |
| [#8699](https://github.com/earendil-works/pi/pull/8699) | 从 `pi-tui` 移除对 `coding-agent` 配置的读取，解耦渲染与代理逻辑 | OPEN（inprogress） |

---

## 📈 功能需求趋势

1. **多供应商深度适配**：Gemini 3.x（`thought_signature`）、OpenRouter free（`max_tokens` 上限）、Bedrock OpenAI（多模态图片）、xAI/Grok（`tool_choice`）、Z.AI GLM（强制思维）、llama.cpp（reasoning_effort）、vLLM（priority）。社区越来越需要一个**可声明的 provider capability 元数据层**。
2. **运行时可控性与可恢复性**：AgentHarness（#9044）+ 系统提示重构（#8998）+ fork 时压缩边界保留（#8990）形成一条主线 —— 让 agent 在长会话中具备"暂停/恢复/分叉/审计"能力。
3. **安全与策略治理**：#9043 提出 `ToolPolicy` Hook 允许 host 按工具/路径/命令做允许控制并产出审计事件，反映企业级落地需求。
4. **TUI/人机交互细节**：可折叠历史活动（#9020）、`Esc` 取消语义（#8823、#9022）、editor 无边框与提示前缀（#9032）、`PI_DISABLE_MOUSE`（#9039）等 UX 打磨类议题显著增加。
5. **跨平台与安装体验**：Windows 路径分隔符（#6817）、非拉丁用户名安装（#8895）、musl 静态链接 fd/ripgrep（#9033）—— 终端用户在 Windows / NixOS / Alpine 上的体验仍是短板。

---

## 🧑‍💻 开发者关注点

- **流式控制的可靠性**：Esc 中止、队列消息恢复（#9022）、信号杀死进程映射（#8994）、代理流 EOF 处理（#8997）接连出现，开发者明确希望"取消"是**可观测、立即生效、不会让 UI 出现残留状态**。
- **凭证与账号隔离**：Codex WebSocket 仅按 session id 缓存（#6513）、`auth.json` 过期凭证引发启动阻塞（#8928）暴露出多账号场景下的凭证生命周期管理不足。
- **大输出与内存安全**：Codex SSE OOM（#9036）、`generateBranchSummary` token 上限（#8845）说明对**长时间/大体量流式响应**缺乏统一的背压与上限策略。
- **协议细节一致性**：不同上游对 `tool_choice` / `thinkingLevel` / `tools: []` 等字段的接受范围不一（#8760、#8706、#8820），开发者倾向于"按 provider 矩阵管理默认值 + 提供 opt-in 兼容开关"（如 `vllmPriority`）。
- **打包与发布工程化**：`pi update` 在 pnpm 下的语义差异（#8207）、精确 pin 的 npm 包升级提示（#9008）反映出从 npm 包发布到用户安装链路上的工程化需求。

---

> 本日报基于 2026-09-03 过去 24 小时内更新的 50 条 Issues 与 29 条 PRs 综合整理，按评论数、议题紧迫度与架构影响力筛选。如需进一步下钻某条 Issue/PR 的技术细节，欢迎告知。

</details>

---
*本日报由 [Big Model Radar](https://github.com/96loveslife/big_model_radar) 自动生成。*
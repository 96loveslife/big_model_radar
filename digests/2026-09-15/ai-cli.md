# AI CLI 工具社区动态日报 2026-09-15

> 生成时间: 2026-09-15 04:20 UTC | 覆盖工具: 8 个

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

<think>The user wants me to generate a horizontal comparative analysis report based on the community dynamics of the 7 AI CLI tools (Claude Code, OpenAI Codex, Gemini CLI, GitHub Copilot CLI, Kimi Code CLI, OpenCode, jcode, pi). Let me carefully analyze the data provided in each tool's daily report and synthesize a cross-cutting analysis.

Let me extract the key data points from each tool:

**Claude Code:**
- Releases: v2.1.272, v2.1.271 (2 releases)
- Issues: ~50 (top 30 shown)
- PRs: 3
- Top themes: Mods/Function Hooks extensibility (175 comments), model quality (rhetorical tics, 426 thumbs), Windows Cowork compatibility, sandbox reliability

**OpenAI Codex:**
- Releases: 4 alpha versions (rust-v0.155.0-alpha.6/5/4/2.4)
- Issues: ~50 (top 30 shown)
- PRs: 10+ shown (all closed, daemon/sandbox work)
- Top themes: "Selected model is at capacity" (53 comments), Windows platform issues, custom provider compatibility (DeepSeek), session/queued follow-up reliability

**Gemini CLI:**
- Releases: v0.61.0-nightly (1)
- Issues: 50
- PRs: 22
- Top themes: Subagent reliability (MAX_TURNS misreport, hangs), Auto Memory bugs, AST-aware tools, security hardening (policy directories, log credentials)

**GitHub Copilot CLI:**
- Releases: v1.0.84-6, -7, -8 (3 releases)
- Issues: 24
- PRs: 0
- Top themes: Subagent workflow latency, MCP protocol evolution (2026-07-28 MRTR), model provider boundary validation (Grok, Gemini, DeepSeek), sandbox/yolo policy

**Kimi Code CLI:**
- Releases: 0
- Issues: 4
- PRs: 0
- Top themes: macOS clipboard, third-party framework integration, IME (Chinese/Japanese/Korean), Agent review UI

**OpenCode:**
- Releases: v1.18.31 (1)
- Issues: 50
- PRs: ~20
- Top themes: UI/layout regression (legacy sidebar removal, multi-worktree support), provider compatibility (Ollama, Copilot), session reliability, Code Mode evolution, macOS experience

**jcode:**
- Releases: 0
- Issues: 16
- PRs: 8
- Top themes: Cursor provider integration (MCP, native transport), Gemini stability fixes, plugin/extension ecosystem, MCP robustness, Windows PowerShell

**pi:**
- Releases: 0
- Issues: 50 (top 30)
- PRs: 26
- Top themes: Multi-provider billing/cache consistency (Bedrock, Vercel Gateway), cross-model thinking/reasoning, session compaction correctness, new provider adapters, extension API deepening

Now I need to generate a comprehensive cross-tool comparison report with the 6 required sections:

1. 生态全景 - 3-5 sentences overall trend
2. 各工具活跃度对比 - Table with Issues/PRs/Releases
3. 共同关注的功能方向 - Identify cross-tool themes
4. 差异化定位分析 - Different positioning
5. 社区热度与成熟度 - Activity and maturity
6. 值得关注的趋势信号 - Industry trends for developers

Let me identify cross-cutting themes:

**Common themes across multiple tools:**

1. **Subagent/Agent workflow reliability** - Claude Code (MAX_TURNS, agent isolation hooks broken), Gemini CLI (subagent hangs, MAX_TURNS misreport), Copilot CLI (subagent latency, background stuck)

2. **MCP (Model Context Protocol) evolution and compatibility** - Claude Code (local MCP servers fail, hook events), OpenAI Codex (subagent MCP duplicates), Copilot CLI (legacy initialize, 2026-07-28 MRTR support), jcode (MCP dispatch_name, 30s timeout, normalization collisions)

3. **Windows platform compatibility** - Claude Code (Cowork Plan9, MSIX, IME), OpenAI Codex (Browser control, Chrome integration, sandbox accounts), Copilot CLI (PowerShell flashing), jcode (PowerShell agent tool)

4. **Provider/Model boundary validation** - OpenAI Codex (custom providers DeepSeek), Copilot CLI (Grok 4.5 351 tools, BYOK Deepseek, Gemini Flash), jcode (Cursor provider, Gemini), pi (Bedrock billing, Vercel Gateway)

5. **Session lifecycle and recovery** - Claude Code (stuck "Can't reach", 400 error), OpenAI Codex (queued follow-up missing), Copilot CLI (stale IDs, "In use" stuck), pi (compaction correctness)

6. **Extensibility/Plugin/Mods systems** - Claude Code (Mods, Function Hooks), Copilot CLI (enabledPlugins bug, marketplace silent), jcode (package system, versioned provider protocol), pi (extension API deepening)

7. **Sandbox and security hardening** - Claude Code (sandbox seccomp failures, memory reaper), Gemini CLI (policy directories, log credentials, OAuth), Copilot CLI (yolo policy, --yolo swallowed, allow dev tool access)

8. **Cross-model thinking/reasoning transmission** - pi (Gemini thoughtSignature, compaction thinking replay, DeepSeek reasoning_content), jcode (Gemini thought_signature), OpenAI Codex (custom providers schema)

9. **UI/UX regressions and layout changes** - OpenCode (legacy sidebar removal, multi-worktree lost), Claude Code (slash-command picker), Gemini CLI (skills not auto-used, settings.json ignored)

10. **IME (Input Method Editor) and internationalization** - Kimi Code CLI (Chinese IME), Claude Code (Japanese ATOK)

**Differentiation analysis:**

- Claude Code: Enterprise + ecosystem focus (Mods, Cowork). Strongest voice in extensibility (Mods/Function Hooks)
- OpenAI Codex: Speed of iteration (multiple alpha releases), infrastructure work (daemon, sandbox)
- Gemini CLI: Agent-first design (Auto Memory, AST-aware), security focus
- Copilot CLI: Multi-model gateway (Claude, Grok, Gemini, DeepSeek), IDE-first
- Kimi Code CLI: Smaller scale, focused on UX issues (Chinese users, review UI)
- OpenCode: Local-first with code mode evolution, UX-heavy
- jcode: Cursor-centric, plugin-first, versioned provider protocol
- pi: Multi-provider heavy (Bedrock, Vercel, Antigravity, GMI), extension API

**Activity/Maturity:**

- Most active: Claude Code (huge thumbs-ups), Codex (high comment count), pi (50 issues + 26 PRs), OpenCode (50 issues)
- Moderate: Copilot CLI (24 issues, 0 PR), Gemini CLI (50 issues, 22 PRs)
- Low: jcode (16 issues, 8 PRs), Kimi Code CLI (4 issues, 0 PRs)

**Industry trend signals:**

1. **"Platform-ization"** - Tools evolving from CLI to platform (Mods, Plugins, Extensions, Function Hooks)
2. **MCP becoming standard** - Every tool is integrating MCP, but doing so unevenly
3. **Multi-provider strategy** - No longer single-vendor lock-in; clients route between Bedrock, Vercel, Antigravity, custom endpoints
4. **Subagent as core abstraction** - Subagent reliability is now the #1 concern across the board
5. **Billing accuracy emerging as battleground** - Cache writes (1h vs 5m), usage normalization
7. **"Silent success" UX failure** - Marketplace silent, enabledPlugins silent, prompt template drop, model quota drain
8. **Cross-model thinking transmission** - Hardest unsolved problem

Let me write the report now in a professional Chinese style.

I should keep it concise but with substantive data. The format should be:
- Section 1: 生态全景 (3-5 sentences)
- Section 2: 活跃度对比 (table)
- Section 3: 共同关注方向 (multiple cross-cutting themes with tools cited)
- Section 4: 差异化定位 (per-tool differentiation)
- Section 5: 社区热度与成熟度
- Section 6: 行业趋势信号

I'll aim for a balanced, analytical tone suitable for technical decision-makers.</think>

# AI CLI 工具生态横向对比分析
**日期：2026-09-15 ｜ 覆盖 7 款主流工具**

---

## 一、生态全景

2026 年 9 月中旬，AI CLI 工具生态已进入**"代理化深水区"**——主流厂商同时面临"Subagent 可靠性、MCP 协议适配、多 Provider 计费正确性"三大共性挑战。社区讨论焦点从"功能是否齐全"转向"长会话/多代理工作流的稳定性与可观测性"，头部工具（Claude Code、Codex、Copilot CLI）保持高密度每日迭代，垂直项目（OpenCode、pi、jcode）在协议治理与扩展性设计上加速追赶，平台化（Mods/Plugins/Extensions）已成下一阶段不可逆的演进方向。

---

## 二、各工具活跃度对比

| 工具 | 版本发布 | 活跃 Issue | 活跃 PR | 综合活跃度 | 阶段判断 |
|------|---------|-----------|--------|-----------|---------|
| **Claude Code** | 2 个 (v2.1.271/272) | ~50 (Top 评论 175) | 3 | 🔴 高 | 成熟期 · 框架前夜 |
| **OpenAI Codex** | 4 个 (rust-v0.155.0-alpha) | ~50 (Top 评论 53) | 10+ 关闭 | 🔴 高 | 快速迭代 · 基础设施重建 |
| **Gemini CLI** | 1 个 nightly | 50 | 22 | 🟡 中高 | 快速迭代 · 安全加固期 |
| **GitHub Copilot CLI** | 3 个 (v1.0.84-6/7/8) | 24 | 0 | 🟡 中 | 稳定打磨 · 多模型网关化 |
| **OpenCode** | 1 个 (v1.18.31) | 50 | ~20 | 🔴 高 | 争议期 · UI/架构双线调整 |
| **pi** | 0 | 50 | 26 | 🔴 高 | 快速演进 · 多 Provider 适配 |
| **jcode** | 0 | 16 | 8 | 🟢 中低 | 平台化建设期 |
| **Kimi Code CLI** | 0 | 4 | 0 | 🟢 低 | 轻量维护期 |

> **数据观察**：pi 以 26 条 PR 居首（仅次于 Gemini），但 0 个 Release——属于"密集重构期"；Copilot CLI 在 24 条 Issue 中 0 条 PR，说明团队走"就地 patch + 预发布版本"路径；Kimi Code CLI 数据样本太小，建议作为补充观察对象。

---

## 三、共同关注的功能方向

### 1. 🤖 Subagent/Agent 工作流可靠性（6/8 工具涉及）
**共识痛点**：父会话与子代理之间的状态交接、生命周期管理、可观测性不足。
- **Claude Code** [#92533](https://github.com/anthropics/claude-code/issues/92533)：Function-hook tool.call 破坏 Agent 隔离
- **Gemini CLI** [#22323](https://github.com/google-gemini/gemini-cli/issues/22323)：MAX_TURNS 后误报 GOAL 成功；[#21409](https://github.com/google-gemini/gemini-cli/issues/21409) Generalist agent 挂死（8 👍）
- **Copilot CLI** [#4849](https://github.com/github/copilot-cli/issues/4849) Subagent 延迟与 review 循环；[#4850](https://github.com/github/copilot-cli/issues/4850) 后台 subagent 卡死
- **OpenAI Codex** [#37453](https://github.com/openai/codex/issues/37453)：Windows subagent 重复拉起 MCP 进程
- **OpenCode** [#49095](https://github.com/anomalyco/opencode/issues/49095)：多会话下单进程瓶颈
- **jcode** [#1249](https://github.com/1jehuang/jcode/issues/1249)：visible swarm spawn 版本匹配失败

### 2. 🔌 MCP（Model Context Protocol）兼容与演进（5/8 工具涉及）
**共识诉求**：协议版本对齐、超时配置、命名归一化、OAuth 刷新。
- **Claude Code** [#92758](https://github.com/anthropics/claude-code/issues/92758)：本地 MCP 60s readiness bug
- **OpenAI Codex** [#37453](https://github.com/openai/codex/issues/37453)：subagent 拉起重复 MCP 进程
- **Copilot CLI** [#4525](https://github.com/github/copilot-cli/issues/4525)（已闭环）、[#4834](https://github.com/github/copilot-cli/issues/4834) MRTR 协议支持、[#4842](https://github.com/github/copilot-cli/issues/4842) OAuth 刷新竞态
- **jcode** [#972](https://github.com/1jehuang/jcode/issues/972) dispatch_name 三处遗留；[#802](https://github.com/1jehuang/jcode/issues/802) 30s 硬超时；[#1259](https://github.com/1jehuang/jcode/pull/1259) 归一化冲突修复
- **OpenCode** [#46628](https://github.com/anomalyco/opencode/issues/46628) MCP schema 未为 Anthropic 清洗

### 3. 🪟 Windows / 桌面平台兼容性（5/8 工具涉及）
- **Claude Code** [#92984](https://github.com/anthropics/claude-code/issues/92984)：Cowork Plan9 KB 更新崩溃；[#89392](https://github.com/anthropics/claude-code/issues/89392) Git Bash 反斜杠
- **OpenAI Codex** [#43410](https://github.com/openai/codex/issues/43410) 浏览器控制失败；[#42520](https://github.com/openai/codex/issues/42520) Chrome manifest 缺失
- **Copilot CLI** [#4549](https://github.com/github/copilot-cli/issues/4549) PowerShell 窗口闪烁；[#4725](https://github.com/github/copilot-cli/issues/4725) Linux 堆 OOM
- **jcode** [#1254](https://github.com/1jehuang/jcode/issues/1254) Windows 专属 PowerShell agent tool
- **OpenCode** [#48811](https://github.com/anomalyco/opencode/issues/48811) macOS 启动崩溃；[#49082](https://github.com/anomalyco/opencode/issues/49082) iCloud 同步后失效

### 4. 🌐 自定义 Provider / 多模型适配（5/8 工具涉及）
**共识诉求**：BYOK、自部署、第三方网关的 schema 与限额前置校验。
- **OpenAI Codex** [#44723](https://github.com/openai/codex/issues/44723)、[#37786](https://github.com/openai/codex/issues/37786)：DeepSeek 等严格 provider 拒绝内置 schema
- **Copilot CLI** [#4840](https://github.com/github/copilot-cli/issues/4840) BYOK DeepSeek；[#4836](https://github.com/github/copilot-cli/issues/4836) Grok 4.5 351 tool 上限；[#4835](https://github.com/github/copilot-cli/issues/4835) Gemini Flash MCP enum
- **jcode** [#1226](https://github.com/1jehuang/jcode/issues/1226)、[#1258](https://github.com/1jehuang/jcode/issues/1258) Cursor Provider
- **pi** [#8752](https://github.com/earendil-works/pi/issues/8752) Bedrock usage.input 未归一化；[#9210](https://github.com/earendil-works/pi/issues/9210) Vercel Gateway 1h cache；新增 GMI Cloud (#9605)、Antigravity (#9594)
- **OpenCode** [#22132](https://github.com/anomalyco/opencode/issues/22132) Ollama 挂起；[#48330](https://github.com/anomalyco/opencode/issues/48330) Copilot 配额异常消耗

### 5. 🧩 平台化扩展（Mods/Plugins/Extensions）（5/8 工具涉及）
- **Claude Code** [#91870](https://github.com/anthropics/claude-code/issues/91870) **Mods + Function Hooks**（175 评论 / 106 👍，当前最强信号）
- **Copilot CLI** [#4556](https://github.com/github/copilot-cli/issues/4556) Marketplace 静默丢弃；[#4837](https://github.com/github/copilot-cli/issues/4837) enabledPlugins 不激活
- **jcode** [#745](https://github.com/1jehuang/jcode/issues/745) 插件/扩展包系统；[#1260](https://github.com/1jehuang/jcode/pull/1260) 版本化外部 Provider 协议
- **pi** [#7824](https://github.com/earendil-works/pi/issues/7824) Extension-side turn termination；[#9434](https://github.com/earendil-works/pi/pull/9434) extension 追加 system prompt
- **Kimi Code CLI** [#1435](https://github.com/MoonshotAI/kimi-cli/issues/1435) PicoClaw 集成（已关闭）

### 6. 🔒 沙箱、安全与企业策略（4/8 工具涉及）
- **Claude Code** [#86928](https://github.com/anthropics/claude-code/issues/86928) Sandboxed Bash seccomp 间歇失败
- **Gemini CLI** [#29328](https://github.com/google-gemini/gemini-cli/pull/29328) LOG_LEVEL 凭据脱敏；[#29336](https://github.com/google-gemini/gemini-cli/pull/29336) 策略目录权限校验
- **Copilot CLI** [#4783](https://github.com/github/copilot-cli/issues/4783) Enterprise yolo policy；[#4846](https://github.com/github/copilot-cli/issues/4846) sandbox 绕过
- **OpenAI Codex** [#45548](https://github.com/openai/codex/pull/45548) Seatbelt 沙箱 Unix Socket 权限；[#45550](https://github.com/openai/codex/pull/45550) Windows 沙箱账户化

### 7. 🧠 跨模型 Thinking /

---

## 各工具详细报告

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills 社区热点

> 数据来源: [anthropics/skills](https://github.com/anthropics/skills)

<think>The user wants me to analyze the Claude Code Skills community data and generate a comprehensive report. Let me carefully parse through the data and identify the key trends.

Let me analyze:

**Hot PRs (top 20 by comment count, but interestingly comments are all "undefined" in the data - this seems to be a data issue. I'll need to work with what's available and look at other signals like recency, upvotes, and content quality)**

Wait, looking more carefully - all PRs show comments: undefined and 👍: 0. This is unusual. The data may be incomplete. I'll need to work with the available information and make reasonable inferences based on:
- Recency of updates
- Content of the PR
- Cross-references with issues
- Activity patterns

**Top PRs to analyze:**

1. **#1298 - fix(skill-creator)**: Trigger evaluation fixes, Windows compatibility
2. **#1742 - fix(mcp-builder)**: MCP v2 compatibility, custom headers
3. **#1734 - Detect orphaned docx comments**: Docx tooling
4. **#514 - document-typography skill**: Typographic quality control
5. **#1615 - scnet-hpc skill**: HPC cluster operations
6. **#538 - fix(pdf)**: Case-sensitive file references
7. **#486 - ODT skill**: OpenDocument support
8. **#210 - frontend-design skill**: Design skill clarity
9. **#83 - skill-quality-analyzer and skill-security-analyzer**: Meta skills
10. **#1703 - md2video-audio skill**: Markdown to video
11. **#541 - fix(docx)**: Tracked change ID collision
12. **#539 - fix(skill-creator)**: YAML validation
13. **#525 - pyxel skill**: Retro game development
14. **#1765 - fix(office)**: UTF-8 decoding
15. **#1724 - mcp-builder**: Update to claude-sonnet-5
16. **#1628 - Hivemind**: Multi-agent orchestration
17. **#1627 - buffer-api**: Social media scheduling
18. **#1607 - Update claude-api skill**: Model retirement
19. **#1602 - fix evaluation**: Multiple reliability fixes
20. **#1595 - docs: UIZZE**: Partner skill

**Top Issues to analyze:**

1. **#492 [43 comments]** - Security: Community skills impersonating official Anthropic
2. **#228 [16 comments]** - Org-wide skill sharing in Claude.ai
3. **#556 [12 comments]** - run_eval.py: 0% trigger rate for skills
4. **#62 [10 comments]** - Skills disappeared
5. **#1329 [9 comments]** - compact-memory skill proposal
6. **#202 [CLOSED, 8 comments]** - skill-creator needs best practices update
7. **#412 [CLOSED, 6 comments]** - agent-governance skill
8. **#189 [6 comments]** - Duplicate skills in plugins
9. **#1487 [4 comments]** - claude-api skill injects 156k tokens
10. **#1390 [4 comments]** - mcp-builder evaluation scores 0/N
11. **#1385 [4 comments]** - Reasoning Quality Gate Pipeline
12. **#1175 [CLOSED, 4 comments]** - SharePoint security concerns
13. **#29 [4 comments]** - AWS Bedrock usage
14. **#16 [4 comments]** - Skills as MCPs
15. **#1362 [3 comments]** - web-artifacts-builder pnpm issues

**Key themes I'm seeing:**

1. **Security & Trust**: Issue #492 (43 comments!) about community skills impersonating official ones - this is the biggest concern
2. **Skill evaluation & reliability**: Multiple issues about eval scoring 0%, skills not triggering
3. **Token efficiency**: Issue #1487 about claude-api skill injecting 156k tokens
4. **Enterprise integration**: AWS Bedrock, SharePoint, org-wide sharing
5. **MCP integration**: Skills as MCPs, mcp-builder fixes
6. **Document skills**: Many PRs around docx, pdf, odt
8. **Multi-agent orchestration**: Hivemind, agent governance

Let me now structure the report.

The data quality issue (undefined comments on PRs) means I should focus more on issue data which has clear comment counts, and use PRs as illustrative examples of community activity.

Let me write a concise, professional report in Chinese as requested.</think>

# Claude Code Skills 社区热点报告
**数据截止：2026-09-15 | 仓库：anthropics/skills**

---

## 1. 热门 Skills 排行

> 说明：本次数据中 PR 评论数显示为 undefined，以下排行综合 PR 内容影响力、关联 Issue 热度、近期活跃度与社区反馈综合排序。

### 🥇 #1298 — fix(skill-creator): 触发评估隔离与 Windows 兼容性
- **功能**：修复 skill-creator 的触发评估（trigger eval）逻辑——解决子进程管道在 Windows 上的 `select()` 失败、worker 间命令探测竞争、误判"未触发"导致负样本通过等问题
- **讨论热点**：与 Issue #556（run_eval.py 触发率 0%）直接相关，是 Skills 评测体系的根基性修复
- **状态**：OPEN | 最近更新 2026-09-15 | [链接](https://github.com/anthropics/skills/pull/1298)

### 🥈 #1742 — fix(mcp-builder): 适配 mcp>=2 与自定义 HTTP 头
- **功能**：适配 MCP v2 重命名 `streamablehttp_client` → `streamable_http_client`，并支持通过 `create_mcp_http_client` 配置自定义头
- **讨论热点**：解决 Issue #1668；MCP 是 Skills 生态的核心协议层，版本兼容影响所有 mcp-builder 用户
- **状态**：OPEN | 最近更新 2026-09-13 | [链接](https://github.com/anthropics/skills/pull/1742)

### 🥉 #1602 — fix: 评估序列化、基准指标、编码与脚本稳定性
- **功能**：一次性修复 mcp-builder 中 MCP 结果块非 JSON 可序列化、响应文本截断、平台兼容性、指标计算等多项可靠性问题
- **讨论热点**：对应 Issue #1390（evaluation 0/N 评分）；这是 mcp-builder 评测链路的"系统性失灵"修复
- **状态**：OPEN | 最近更新 2026-08-24 | [链接](https://github.com/anthropics/skills/pull/1602)

### 4️⃣ #1628 — Hivemind: 零成本多智能体编排 Skill
- **功能**：让 Claude Code 把机械性任务下放给运行在免费模型上的 headless opencode worker，Claude Code 自身保持规划/审查/合并角色
- **讨论热点**：开源模型做执行、旗舰模型做推理的成本范式——契合社区对 token 经济性的焦虑（参见 Issue #1487）
- **状态**：OPEN | [链接](https://github.com/anthropics/skills/pull/1628)

### 5️⃣ #83 — skill-quality-analyzer & skill-security-analyzer（Meta Skills）
- **功能**：新增两个元 Skill，从结构/文档（20%）等五个维度评估 Skill 质量；提供安全分析维度
- **讨论热点**：与 Issue #492（社区冒充官方）形成呼应，社区对"Skill 自身治理工具"的呼声强烈
- **状态**：OPEN（已挂起数月） | [链接](https://github.com/anthropics/skills/pull/83)

### 6️⃣ #514 — document-typography Skill
- **功能**：防止 AI 生成文档的孤行（orphan）、寡行（widow）、编号错位等排版缺陷
- **讨论热点**：触及"AI 生成文档最后 10% 质量"这一普遍痛点
- **状态**：OPEN | [链接](https://github.com/anthropics/skills/pull/514)

### 7️⃣ #1703 — md2video-audio Skill
- **功能**：通过 Marp + TTS 将 Markdown 一键转成带人声旁白的 MP4 视频
- **讨论热点**：零成本内容生产链路，社区对"Markdown 全模态输出"的兴趣明显
- **状态**：OPEN | 最近更新 2026-09-14 | [链接](https://github.com/anthropics/skills/pull/1703)

### 8️⃣ #486 — ODT Skill（OpenDocument 文本创建与解析）
- **功能**：创建、填充、读取、转换 .odt/.ods 文件，覆盖 ODF/LibreOffice 文档场景
- **讨论热点**：补充官方对开源 ISO 标准格式的支持，是企业/政府用户的关键缺口
- **状态**：OPEN | [链接](https://github.com/anthropics/skills/pull/486)

---

## 2. 社区需求趋势

| 趋势方向 | 代表 Issue | 核心诉求 |
|---------|-----------|---------|
| **🔒 信任与命名空间安全** | [#492](https://github.com/anthropics/skills/issues/492)（43 评论） | 社区 Skill 在 `anthropic/` 命名空间下冒充官方，存在提权风险——**最热门 Issue** |
| **🏢 企业级协作与共享** | [#228](https://github.com/anthropics/skills/issues/228)（16 评论） | Claude.ai 缺少组织级 Skill 共享机制，仍依赖手动下载/上传 |
| **⚙️ 评测可靠性（Eval Reliability）** | [#556](https://github.com/anthropics/skills/issues/556)（12 评论）/ [#1390](https://github.com/anthropics/skills/issues/1390)（4 评论） | `run_eval.py` 触发率 0%；evaluation.py 对真实 MCP 评分 0/N——评测体系本身需要治理 |
| **🧠 Token 经济性与上下文治理** | [#1487](https://github.com/anthropics/skills/issues/1487)（4 评论）/ [#1329](https://github.com/anthropics/skills/issues/1329)（9 评论） | `claude-api` skill 一次性注入 ~156k tokens；提议 compact-memory（符号化压缩代理状态） |
| **🛡️ Agent 治理与质量门控** | [#412](https://github.com/anthropics/skills/issues/412)（已关闭，6 评论）/ [#1385](https://github.com/anthropics/skills/issues/1385)（4 评论） | 提议 agent-governance（策略/审计/信任评分）、Reasoning Quality Gate 三门管线 |
| **🔌 协议与集成** | [#16](https://github.com/anthropics/skills/issues/16)（4 评论）/ [#29](https://github.com/anthropics/skills/issues/29)（4 评论） | 将 Skill 暴露为 MCP；AWS Bedrock 上的 Skill 运行支持 |
| **📦 元工具与自治理** | [#202](https://github.com/anthropics/skills/issues/202)（已关闭，8 评论）/ [#83](https://github.com/anthropics/skills/pull/83) | skill-creator 应改写为"操作手册"而非"开发者文档"；需引入 skill-quality-analyzer |
| **📑 文档/企业集成安全** | [#1175](https://github.com/anthropics/skills/issues/1175)（已关闭，4 评论） | SharePoint Online 经 Skill 处理时的 ACL/权限设计边界 |

---

## 3. 高潜力待合并 Skills

> 评论活跃或长期被社区引用、但尚未合并的 PR，按落地优先级排序：

| PR | Skill | 关键信号 | 链接 |
|----|-------|---------|------|
| **#1298** | skill-creator 触发评估修复 | 关联 Issue #556（0% 触发率），是评测链路根基 | [#1298](https://github.com/anthropics/skills/pull/1298) |
| **#1742** | mcp-builder mcp v2 适配 | 关联 Issue #1668；MCP 协议升级必跟 | [#1742](https://github.com/anthropics/skills/pull/1742) |
| **#1602** | evaluation 序列化与稳定性 | 关联 Issue #1390；系统性修复 0 分评测 | [#1602](https://github.com/anthropics/skills/pull/1602) |
| **#538 / #539 / #541 / #1765** | 文档系列（PDF/DOCX/Office）零散修复 | Lubrsy706 与 00200200 系列提交，覆盖 case-sensitivity、tracked-change ID 冲突、UTF-8 diff 解码 | [#538](https://github.com/anthropics/skills/pull/538) · [#539](https://github.com/anthropics/skills/pull/539) · [#541](https://github.com/anthropics/skills/pull/541) · [#1765](https://github.com/anthropics/skills/pull/1765) |
| **#1628** | Hivemind 多智能体编排 | "免费模型执行 + 旗舰模型规划"范式，与 token 经济诉求共振 | [#1628](https://github.com/anthropics/skills/pull/1628) |
| **#1703** | md2video-audio | Markdown → 视频链路，社区新流量场景 | [#1703](https://github.com/anthropics/skills/pull/1703) |
| **#83** | skill-quality-analyzer / skill-security-analyzer | 直接呼应 Issue #492 命名空间安全议题；挂起 10 个月但价值上升 | [#83](https://github.com/anthropics/skills/pull/83) |
| **#1724** | mcp-builder 默认模型升级到 claude-sonnet-5 | 模型迭代常规维护，但与 #1607 一并体现 claude-api 文档同步压力 | [#1724](https://github.com/anthropics/skills/pull/1724) |

---

## 4. Skills 生态洞察（一句话总结）

> **社区最集中的诉求是"治理"——为迅速膨胀的 Skill 生态补齐信任命名空间、评测可靠性、Token 经济性与企业级共享四块基础设施，让 Skills 从"功能演示"走向"可被企业生产环境放心消费的基础组件"。**

支撑这一判断的证据链：
- 🔴 **信任层**：Issue #492 单条 43 评论，是全仓最热；
- 🟠 **评测层**：#556、#1390、#1487 共同指向"评测 0 分 / 注入 156k tokens"等系统性失灵；
- 🟡 **协议层**：#16 + #1742 + #1628 显示社区希望 Skill 与 MCP 双向打通、并能跨模型/跨平台部署；
- 🟢 **场景层**：#1703（视频）、#514（排版）、#486（ODT）、#525（pyxel）说明长尾创意/工程 Skill 持续涌现，需要上层治理工具来兜底质量与安全。

---

<think>The user wants me to generate a daily community report for Claude Code based on GitHub data from 2026-09-15. Let me analyze the data carefully:

1. **Releases (past 24h)**:
   - v2.1.272: Bug fixes and reliability improvements
   - v2.1.271: Added fast mode in Claude Code Remote sessions, mouse support in /config panel fullscreen mode

2. **Issues (top 30 by comments)**:
   - #91870 [OPEN] [enhancement] Mods - make Claude 10x more extensible - 175 comments, 106 👍
   - #77136 [OPEN] [bug] Repetitive rhetorical tics - 122 comments, 426 👍
   - #92984 [OPEN] [bug] Cowork (Windows): Plan9 mount failed - 113 comments, 58 👍
   - #86928 [OPEN] [bug] Sandboxed Bash intermittently fails - 17 comments
   - #88405 [OPEN] [bug] Symlinked files in .claude/rules/ not auto-loaded - 12 comments
   - #89398 [OPEN] [bug] Slash-command picker - 12 comments
   - #48078 [CLOSED] [bug] "Run on Startup" toggle cannot be turned off - 10 comments
   - #44933 [OPEN] [enhancement] Cowork: Set default project folder - 9 comments
   - #93782 [OPEN] [bug] Regression in 2.1.269 dictation - 7 comments
   - #92758 [OPEN] [bug] Local MCP servers fail - 7 comments
   - #82624 [OPEN] Web/CCR git stop hook - 7 comments
   - #89392 [OPEN] [bug] Bash tool strips backslashes on Windows/Git Bash - 6 comments
   - #92773 [OPEN] [bug] Routines list empty - 5 comments
   - #78674 [OPEN] [bug] Background tasks mass-killed by memory-pressure reaper - 5 comments
   - #70955 [OPEN] [bug] IME (ATOK) candidate window - 5 comments
   - #78461 [OPEN] [bug] Local sessions list empty for network drives - 3 comments
   - #85021 [OPEN] Permission-mode indicators use U+23F5 - 3 comments
   - #79220 [OPEN] [invalid] Claude Desktop flickering on NVIDIA RTX 50 - 3 comments
   - #94393 [OPEN] [bug] Monitor tool timeout - 2 comments
   - #91589 [OPEN] [bug] Desktop Code tab dropped connector tool schemas - 2 comments
   - #82610 [OPEN] [bug] Claude Desktop local sessions marketplace plugin tools - 2 comments
   - #93835 [OPEN] [enhancement] VSCode extension: no delete session - 2 comments
   - #94229 [OPEN] [bug] Session stuck "Can't reach your computer" - 2 comments
   - #94367 [OPEN] [bug] Model ignores existing handover documentation - 1 comment
   - #94424 [OPEN] [enhancement] Function hooks: usage rate-limit event - 1 comment
   - #94418 [OPEN] [bug] Scheduled tasks cannot close own session - 1 comment
   - #92533 [OPEN] [bug] Function-hook tool.call on Bash breaks Agent isolation - 1 comment
   - #85077 [OPEN] [bug] VS Code extension permissionMode stuck - 1 comment
   - #84542 [OPEN] [bug] VS Code extension diff tab auto-opens - 1 comment
   - #94408 [OPEN] [duplicate] Session permanently broken 400 error - 1 comment

3. **Pull Requests (3 total)**:
   - #83890 [CLOSED] Create pylint.yml
   - #94184 [CLOSED] mods/diff improvements
   - #71627 [OPEN] docs(sandbox): note that prompt-approved hosts are session-scoped

Now let me organize this into a structured Chinese report.

For the issues section, I need to pick the 10 most noteworthy. I'll prioritize by:
- Comment count
- Thumbs up count
- Importance/type (enhancements vs bugs)
- Recency

The top issues by importance:
1. #91870 - Mods extensible - most engagement (175 comments, 106 👍)
2. #77136 - Model quality issue - 426 👍 (highest thumbs)
3. #92984 - Windows Cowork bug - 113 comments
4. #86928 - Sandboxed Bash issue - 17 comments, important
5. #88405 - Symlink rules issue - documented feature broken
6. #89398 - Slash-command picker - regression
7. #93782 - Regression in 2.1.269 - regression
8. #92758 - Local MCP servers readiness
9. #89392 - Bash tool backslash on Windows
10. #94393 - Monitor tool timeout schema

For PRs, only 3 in past 24h, so I'll include all 3.

Let me now structure the report properly.

I need to remember to use thinking tags as requested and start with the think tag.</think>

# Claude Code 社区动态日报

**日期**: 2026-09-15
**数据源**: [github.com/anthropics/claude-code](https://github.com/anthropics/claude-code)

---

## 📌 今日速览

今日 Claude Code 发布 **v2.1.272**（稳定性修复）和 **v2.1.271**（为 Remote 会话引入 Fast Mode、`/config` 面板全屏下支持鼠标滚轮）。社区方面，**Mods 可扩展性框架**（#91870）讨论最为热烈，官方承诺数周内上线 Function Hooks；模型在 4.7/4.8/5.0 系列上的"修辞口癖"问题（#77136）持续受到 426 次点赞关注；Windows Cowork 因 KB5124008 更新导致 Plan9 共享全面失效（#92984）引发大量排查讨论。

---

## 🚀 版本发布

### v2.1.272 — 2026-09-15
- 通用 Bug 修复与可靠性改进
- 🔗 [Release](https://github.com/anthropics/claude-code/releases/tag/v2.1.272)

### v2.1.271 — 2026-09-14
- **Remote 会话新增 Fast Mode**：云端与自托管 Runner 中，主机设置或会话内 `/fast` 命令可在组织允许范围内生效
- **`/config` 面板（全屏模式）支持鼠标**：滚轮可滚动设置列表
- 🔗 [Release](https://github.com/anthropics/claude-code/releases/tag/v2.1.271)

> ⚠️ 社区提示：v2.1.269 引入 VS Code 集成终端（WSL2）下语音听写粘贴失效的回归问题（#93782），建议该工作流用户暂时留在 2.1.268。

---

## 🔥 社区热点 Issues

| # | Issue | 类型 | 关键信号 |
|---|-------|------|---------|
| 1 | [#91870](https://github.com/anthropics/claude-code/issues/91870) Mods — 让 Claude 扩展性提升 10 倍 | enhancement | 💬175 👍106 — **今日最热**。官方 9/9 更新承诺"数周内"上线 Function Hooks，社区参与设计反馈极高 |
| 2 | [#77136](https://github.com/anthropics/claude-code/issues/77136) Claude 4.7/4.8/5.0 默认出现重复修辞口癖，无法产出连贯散文 | bug | 👍426 (点赞最高) — 模型行为质量问题，影响创作类工作流 |
| 3 | [#92984](https://github.com/anthropics/claude-code/issues/92984) Windows Cowork：KB5124008 (26200.9445) 更新后 Plan9 共享全面失效 | bug | 💬113 👍58 — 卸载 KB 即可解决，团队需协调 Win 更新策略 |
| 4 | [#86928](https://github.com/anthropics/claude-code/issues/86928) Sandboxed Bash 间歇性失败（`apply-seccomp: unshare(CLONE_NEWUSER)`） | bug | 💬17 — 约 1/10 沙箱化 Bash 调用立即失败，影响 Linux 沙箱可靠性 |
| 5 | [#88405](https://github.com/anthropics/claude-code/issues/88405) `.claude/rules/` 中的符号链接未被自动加载（与文档冲突） | bug | 💬12 — 文档明确承诺支持 symlink，实际行为不一致 |
| 6 | [#89398](https://github.com/anthropics/claude-code/issues/89398) 斜杠命令选择器需 `/` 在行首才打开，但提交时命令仍执行 | bug | 💬12 — Windows 桌面应用 UI 一致性问题 |
| 7 | [#93782](https://github.com/anthropics/claude-code/issues/93782) v2.1.269 回归：WSL2 下语音听写无法粘贴到 VS Code 终端 | bug (regression) | 💬7 — Wispr Flow 用户受影响；2.1.268 正常 |
| 8 | [#92758](https://github.com/anthropics/claude-code/issues/92758) 本地 MCP 服务器报 "Not ready after 60 seconds"（共享池 readiness bug） | bug | 💬7 — Windows Cowork 构建，MCP 集成受影响 |
| 9 | [#89392](https://github.com/anthropics/claude-code/issues/89392) Windows/Git Bash 下 Bash 工具静默剥离反斜杠 | bug | 💬6 — `\\` 被悄悄变成 `\` 命令参数错误 |
| 10 | [#94393](https://github.com/anthropics/claude-code/issues/94393) Monitor 工具：不遵守 persistent 标志；timeout_ms 实际 ~30 分钟 | bug | 💬2 👍4 — 工具生命周期与文档不符 |

**关注度趋势**：今日最活跃的三大议题——**Mods/Function Hooks（可扩展性）**、**模型输出质量**、**Windows Cowork 兼容性**——分别代表生态、模型质量、平台兼容性三条主线。

---

## 🛠 重要 PR 进展

> 过去 24 小时仅 3 条 PR 更新，说明项目活跃度集中在 Issue 端讨论。

| # | PR | 状态 | 内容 |
|---|----|------|------|
| 1 | [#94184](https://github.com/anthropics/claude-code/pull/94184) mods/diff：固定头 + 仅正文滚动、内置列表与基础和弦、滚轮路由、DiffDialog 退出全屏 | CLOSED | 与 Mods 框架配套的 diff 面板 UX 改进（来自 #91870 设计主线） |
| 2 | [#71627](https://github.com/anthropics/claude-code/pull/71627) docs(sandbox)：注明"prompt 审批的主机"是会话级作用域 | OPEN | 补全 `examples/settings/README.md` 中关于 `sandbox.network.allowedDomains` 文档说明 |
| 3 | [#83890](https://github.com/anthropics/claude-code/pull/83890) Create pylint.yml | CLOSED | 仓库 CI 集成 pylint 配置 |

> 由于昨日 PR 数量较少，建议读者同时关注 **#91870（Mods 主线）** 中 poteat 提交的相关原型 PR，该方向是本周最确定的工程进展。

---

## 📈 功能需求趋势

从 50 条更新 Issue 提炼出社区最关注的 **6 大方向**：

### 1. 🧩 **可扩展性框架（Mods / Function Hooks / Plugins）**
- 核心议题 #91870 累计 175 评论
- 衍生：#94424（usage/rate-limit 事件钩子）、#92533（Function hook 破坏 Agent 隔离）、#82624（git stop hook 误报）
- **判断**：这是当前社区**第一优先级**，官方已承诺数周内落地

### 2. 🪟 **Windows / Cowork 兼容性**
- Plan9 挂载 (#92984)、MCP 60s 超时 (#92758)、MSIX 包装限制 (#79220)、Run on Startup (#48078)、TUI 斜杠命令 (#89398)、Git Bash 反斜杠 (#89392)
- **判断**：Cowork 作为新产品形态，Windows 集成问题集中爆发，建议官方设立 Cowork/Windows 专项

### 3. 🤖 **模型输出质量**
- #77136（修辞口癖，426 👍）是**全仓库点赞最高的 Issue**
- #94367（忽略已有 handover 文档、重复失败调用）
- **判断**：模型"礼貌/重复措辞"问题在 4.7→5.0 演进中持续，未见系统回应

### 4. 🖥 **IDE 集成（VS Code / code-server）**
- #93835（无 delete session）、#85077（initialPermissionMode 失效）、#84542（diff 双开）、#78461（网络盘 realpath）
- **判断**：VSCode 扩展会话管理与权限生命周期 bug 较多

### 5. ⚙️ **沙箱与后台进程**
- #86928（沙箱 seccomp 间歇失败）、#78674（内存压力误杀后台任务）、#92758（MCP 共享池）
- **判断**：Linux 沙箱与后台任务生命周期为生产化部署的主要障碍

### 6. 🔄 **会话恢复 / 数据完整性**
- #94408（400 'unexpected end of data'）、#94229（"Can't reach your computer" 卡死）、#91589（恢复后 connector schema 丢失）
- **判断**：会话恢复路径上 schema、连接状态、JSON 序列化均存在脆弱点

---

## 👨‍💻 开发者关注点

基于高频 Issue 与讨论归纳，开发者当前最关心的 **5 类痛点**：

1. **生态可扩展性不足** — Mods / Hooks / Plugins 是压倒性呼声，社区希望 Claude Code 从"工具"进化为"平台"
2. **模型冗余措辞与上下文遗忘** — 创作与长会话场景中，模型反复强调"好的！"、忽略已有 handover 文档，影响信任感
3. **Windows + Cowork 体验粗糙** — KB 更新兼容、MSIX 限制、MCP 连接、Plan9 共享四大类问题相互纠缠，企业部署风险高
4. **会话/工具生命周期不一致** — resume 后 schema 丢失、Monitor 工具超时与文档不符、agent 隔离被 hook 破坏——开发者难以稳定编排长流程
5. **文档与实际行为漂移** — `.claude/rules/` symlink、sandbox 网络作用域、`initialPermissionMode`、`/config` 行为等"文档承诺 vs 实际不符"问题反复出现，建议官方建立 **Docs-as-Test** 机制

> 📊 **总体观察**：今日 Issue 端活跃度显著高于 PR 端，社区已进入"框架成熟前夜"——Mods 主线若如期交付，将开启新一轮生态共建；而 Windows/Cowork 与模型行为两条战线需要更多官方主动沟通。

---

*本日报基于 GitHub 公开数据自动整理，仅供参考。如需深度分析某个议题或 PR，请告知。*

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

<think>The user wants me to generate a daily report for OpenAI Codex community dynamics based on GitHub data for 2026-09-15. Let me analyze the data carefully and create a structured Chinese report.

Let me organize the information:

**Releases:**
- rust-v0.155.0-alpha.6
- rust-v0.155.0-alpha.5
- rust-v0.155.0-alpha.4
- rust-v0.155.0-alpha.2.4

All alpha versions of 0.155.0 series. No detailed changelog provided.

**Top Issues (sorted by comments):**
1. #28507 - "Selected model is at capacity" - 53 comments, 50 thumbs up - Most discussed
2. #43410 - Windows Browser control fails with API-key auth - 30 comments
3. #43237 - GPT-6 Astra rejects `hi` - 15 comments
4. #37453 - Windows subagent duplicate MCP processes - 13 comments
5. #42765 - Weekly Codex limit dropped 45% to 0% - 13 comments
6. #44458 - macOS CLI 0.154.0 experimental capability breaks MCP - 12 comments
7. #44395 - Model at capacity - 11 comments
8. #42520 - Windows Chrome integration - 10 comments
9. #44736 - Windows ChatGPT project prewarming locks - 8 comments
10. #44723 - Automations inject function_call_output without call_id - 8 comments

Also notable closed/feature:
- #17332 - Feature: pasted-text placeholder collapse - 6 comments, CLOSED
- #45307 - Windows Send button disabled after first turn - 6 comments
- #45019 - App-server queued follow-up no longer exists - 6 comments, 26 thumbs up
- #29915 - Permission mode selection doesn't persist - 6 comments
- #45592 - Code-server queued follow-up - CLOSED
- #45590 - gpt-5.3-codex-spark unavailable - CLOSED
- #45593 - Windows EPERM during executable rename - 2 comments
- #45585 - tool_search breaks threads on DeepSeek - 2 comments
- #45589 - Cannot install Chrome connection extension - 2 comments
- #45586 - Custom permissions display mismatch - 2 comments

**Top PRs:**
All are CLOSED status from copyberry[bot]:
1. #45580 - Add daemon package replacement from CLI
2. #45579 - Copy current thread attachments into forks
3. #45559 - Resume Windows sandbox registration refresh
4. #45558 - Seed missing daemon installs from local CLI
5. #45556 - Add attachment upload and resolution APIs
6. #45554 - Use shared Bazel cache in SDK CI
7. #45550 - Add opt-in registered package execution Windows sandbox
8. #45549 - Preserve streamed answers/plans when turns terminate
9. #45548 - Honor Unix socket permissions in Seatbelt
10. #45546 - Move daemon packages out of CLI installation

**Trends to identify:**
1. Rate limits / capacity issues - Multiple issues (#28507, #44395, #42765, #44531, #43566)
2. Windows-specific bugs - Many (#43410, #37453, #42520, #44736, #45307, #40357, #44504, #42257, #37602, #45593, #45589)
3. Custom model/DeepSeek compatibility - (#44723, #37786, #45585)
4. Model issues (#43237 - GPT-6 Astra, #45590 - gpt-5.3-codex-spark)
5. macOS issues (#44458, #45222)
6. Sandbox/sandbox accounts (#45580, #45550, #45559, #45548, #45546, #45534)
7. Daemon improvements (#45580, #45558, #45546)
8. Browser integration issues (Chrome)

Let me write this in a professional Chinese tone suitable for technical developers.</think>

# OpenAI Codex 社区动态日报
**日期：2026-09-15**

---

## 📌 今日速览

今日 Codex 仓库发布了 4 个 `rust-v0.155.0-alpha` 系列预发布版本，显示核心 CLI 仍在快速迭代。与此同时，社区讨论热度最高的话题依然是 **模型容量错误（"Selected model is at capacity"）** 与 **Windows 平台相关的稳定性问题**；已关闭的 PR 集中在 **Windows Sandbox 账户管理、Daemon 包拆分、附件与图片内容重构** 等基础设施层面工作。

---

## 🚀 版本发布

| 版本 | 说明 |
|------|------|
| `rust-v0.155.0-alpha.6` | 最新 alpha 预发布 |
| `rust-v0.155.0-alpha.5` | alpha 预发布 |
| `rust-v0.155.0-alpha.4` | alpha 预发布 |
| `rust-v0.155.0-alpha.2.4` | 早期 alpha 补丁版本 |

> 0.155.0 系列 alpha 集中更新于今日，release notes 暂未披露详细变更，建议关注后续正式版或 nightly changelog。

---

## 🔥 社区热点 Issues（Top 10）

1. **#28507 — [bug] "Selected model is at capacity" 反复出现**（53 评论 / 50 👍）
   持续三个月的高赞 issue，Pro 用户在 Windows 桌面端频繁遇到所有模型容量耗尽。社区反应强烈，反映该错误与 Pro 订阅的容量调度逻辑紧密相关。[链接](https://github.com/openai/codex/issues/28507)

2. **#43410 — [Windows] API Key 鉴权下浏览器控制失败**（30 评论 / 17 👍）
   Edge 浏览器插件可建立连接，但首次操作时抛 `unsupported Codex auth method: apikey`。影响使用自定义 API Key 而非 ChatGPT 登录的 Windows 用户。[链接](https://github.com/openai/codex/issues/43410)

3. **#43237 — GPT-6 Astra 拒绝极简输入（`hi`）**（15 评论）
   在 Linux/macOS 上 CLI 0.153.4 复现：仅发送 `hi` 即返回 `invalid_prompt`。问题疑似与新模型 prompt 校验有关。[链接](https://github.com/openai/codex/issues/43237)

4. **#37453 — Windows 子代理线程重复拉起 MCP 进程**（13 评论）
   打开历史 subagent 会话时产生重复 MCP/node_repl 进程栈，涉及 MCP 生命周期与子代理会话恢复逻辑。[链接](https://github.com/openai/codex/issues/37453)

5. **#42765 — Pro 桌面端周额度从 45% 突降至 0%**（13 评论）
   无任务运行时长内额度被扣空，疑似后台统计或回滚逻辑异常。[链接](https://github.com/openai/codex/issues/42765)

6. **#44458 — macOS CLI 0.154.0 实验能力导致内置 MCP 启动失败**（12 评论 / 5 👍）
   `experimental_capabilities` 字段破坏 Messages 与 Computer History MCP 服务初始化，影响 gpt-6-astra。[链接](https://github.com/openai/codex/issues/44458)

7. **#44395 — "Selected model is at capacity"（Pro X20）**（11 评论）
   与 #28507 同类问题，体现该错误在 Pro 高阶订阅层级同样普遍。[链接](https://github.com/openai/codex/issues/44395)

8. **#42520 — Windows Chrome 集成：`chrome-native-hosts-v2.json` 不生成**（10 评论）
   更新后 junction 残留、缺失 manifest，浏览器控制整体失效。[链接](https://github.com/openai/codex/issues/42520)

9. **#44723 — 自动化（heartbeat/cron）破坏目标 session**（8 评论）
   注入的 `function_call_output` 缺少 `call_id`，触发 `400 missing field call_id`，整条会话永久不可用。[链接](https://github.com/openai/codex/issues/44723)

10. **#45019 — App-server queued follow-up 不存在**（6 评论 / 26 👍）
    macOS 26.6 上排队追问反复失败 "App-server queued follow-up no longer exists"，与 #45592 类似问题已被快速关闭。[链接](https://github.com/openai/codex/issues/45019)

> 其他高频报错如 #43566（额度静默消耗）、#44531（容量错误间歇）、#45593（Windows EPERM 启动失败）、#45589（Chrome 扩展无法下载）、#45586（自定义权限显示与运行不一致）等也值得关注。

---

## 🛠️ 重要 PR 进展（Top 10，全部已关闭）

1. **#45580 — `codex app-server daemon update --from-cli` 显式替换守护进程包**
   支持降级与本地构建，要求交互确认或 `--yes`，避免与运行中的守护进程冲突。[链接](https://github.com/openai/codex/pull/45580)

2. **#45579 — 将当前线程附件复制到非临时分支**
   分支（含早期 turn）继承附件元数据，分配新 ID 与时间戳，保留资源标识与 payload。[链接](https://github.com/openai/codex/pull/45579)

3. **#45559 — Windows 沙箱注册刷新在服务重启后恢复**
   解决服务重启打断 readiness 撤销后刷新中断的问题。[链接](https://github.com/openai/codex/pull/45559)

4. **#45558 — 用本地完整 CLI 包播种缺失的守护进程安装**
   允许 `codex app-server` 直接复用 CLI 完整包中的守护进程可执行文件，减少独立安装步骤。[链接](https://github.com/openai/codex/pull/45558)

5. **#45556 — 附件上传与解析 API（替换 `AttachmentStore::persist`）**
   引入 `upload`/`resolve` 接口，返回内联字节或 file_id，并按需返回下载 URL。[链接](https://github.com/openai/codex/pull/45556)

6. **#45554 — SDK CI 切换至共享 Bazel 缓存 `prepare-bazel-ci`**
   独立 `sdk` 命名空间提升缓存命中率并确保仅构建成功后才保存。[链接](https://github.com/openai/codex/pull/45554)

7. **#45550 — Windows 沙箱启用可选已注册包执行**
   引入 `CODEX_WINDOWS_REGISTERED_CORE=1` 开关，通过服务别名启动执行器并校验所有权。[链接](https://github.com/openai/codex/pull/45550)

8. **#45549 — 中断或失败 turn 时保留已流式输出的回答与计划**
   在终止前 flush 并合并 answer/plan 流，避免数学内容缺失或回流失败。[链接](https://github.com/openai/codex/pull/45549)

9. **#45548 — Seatbelt 沙箱尊重 Unix Socket 权限**
   使用 `ManagedNetworkSandboxContext` 中的 `allow_unix_sockets` / `dangerously_allow_all_unix_sockets`，避免继承代理的更宽权限。[链接](https://github.com/openai/codex/pull/45548)

10. **#45546 — 将守护进程包从独立 CLI 安装中拆出**
    守护进程升级不再耦合 CLI 主包，保留 CLI 选择与 shell profile。[链接](https://github.com/openai/codex/pull/45546)

> 其他值得关注的 PR：#45537（Guardian 审查者生命周期下放至扩展）、#45543（`ImageReference` 共享类型重构）、#45542（Windows 沙箱账户的服务化管理包注册）、#45529（暴露 workspace 路由元数据）。

---

## 📈 功能需求趋势

从 Issues 标签分布提炼的社区关注方向：

| 方向 | 典型 Issue | 关注度 |
|------|------------|--------|
| **速率限制与容量调度** | #28507, #44395, #42765, #44531, #43566 | 🔴🔥🔥🔥🔥 |
| **Windows 平台兼容性** | #43410, #37453, #42520, #44736, #45307, #45593, #45589 | 🔴🔥🔥🔥🔥 |
| **自定义模型 / OpenAI 兼容 provider（DeepSeek 等）** | #44723, #37786, #45585 | 🔴🔥🔥🔥 |
| **新模型接入与稳定性（GPT-6 Astra、gpt-5.3-codex-spark）** | #43237, #45590 | 🔴🔥🔥 |
| **浏览器 / Chrome 集成** | #43410, #42520, #40357, #45589 | 🔴🔥🔥 |
| **会话与权限持久化** | #29915, #45019, #45586 | 🔴🔥 |
| **TUI / CLI 体验增强** | #17332（已关闭，已实现） | 🟢 闭环 |
| **macOS 稳定性** | #44458, #45222 | 🔴🔥 |

---

## 💡 开发者关注点

1. **Pro / Pro X20 用户容量调度不透明**
   多个高赞 issue 反映额度在空闲时段被扣空或模型长时间处于 "at capacity" 状态，开发者要求后台任务的资源核算可观测、可申诉。

2. **Windows 是当前体验最差的平台**
   从 Store 安装（#37602）、Chrome 集成（#42520/#45589）、沙箱账户（#45593/#44736）到子代理进程泄漏（#37453），Windows 几乎覆盖了所有高频回归类别。

3. **自定义 Responses provider 的 schema 严格性被低估**
   DeepSeek 等严格校验端持续拒绝 `automation_update`/`tool_search` 等内置工具的 schema（#37786/#45585），呼吁在生成端提供严格模式开关或自动兼容层。

4. **会话恢复与"queued follow-up"状态机不可靠**
   #45019、#45222、#45592 都指向 App-server 在 turn 边界处的状态丢失，开发者期待更稳定的 session resume 语义。

5. **MCP 与扩展（subagent / computer-use）边界**
   多个 issue 涉及 MCP 进程生命周期与子代理线程复用，开发者希望 Codex 在该层面给出"恢复幂等"的明确保证。

6. **基础设施级改进正在加速**
   关闭的 PR 集中在守护进程拆分、Windows 沙箱账户管理、附件/图片内容重构、Unix socket 权限处理——这些不直接面向用户，但会显著影响后续版本的稳定性。

---

> 📊 数据范围：2026-09-15 24 小时内 Releases、Issues、Pull Requests。Issue 选取按评论数排序并补充少量当日新增关键条目。

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

<think>The user wants me to generate a Chinese-language daily digest for the Gemini CLI community based on GitHub data dated 2026-09-15. Let me analyze the data carefully and produce a structured report.

Key observations from the data:

**Releases:**
- One nightly release: v0.61.0-nightly.20260915.g9c1b0a610

**Issues (50 total, showing top 30):**
- #22323: Subagent recovery after MAX_TURNS reports as GOAL success (P1, bug, 13 comments, 2 thumbs up)
- #19873: Zero-Dependency OS Sandboxing & Post-Execution Intent Routing (P2, enhancement, 9 comments)
- #21409: Generalist agent hangs (P1, bug, 8 comments, 8 thumbs up - very high engagement)
- #22745: AST-aware file reads assessment (P2, feature, 7 comments)
- #21968: Gemini doesn't use skills and sub-agents enough (P2, bug, 6 comments)
- #26525: Auto Memory redaction (P2, bug, 5 comments)
- #26522: Auto Memory retry issues (P2, bug, 4 comments)
- #25166: Shell command stuck on "Waiting input" (P1, bug, 4 comments, 3 thumbs up)
- #22232: Browser agent resilience (P3, feature, 4 comments)
- #21983: browser subagent fails in wayland (P1, bug, 4 comments)

**Pull Requests (22 total, showing top 20):**
- #29242: Fix 401 substring matching in isAuthenticationError
- #29237: Fix (Exit Code: null) for signal-killed processes
- #29337: Version bump to 0.61.0-nightly
- #29336: Secure non-system policy directories
- #29335: Ensure AgentLoopContext properties preserved across object spread
- #29334: A2A server early return on unsupported store
- #29333: Vet permissions of policy directories
- #29332: Bound sandbox expansion recursion
- #29329: Pause stdin after truncation
- #29328: Honour LOG_LEVEL and keep credentials out of logs (security)

**Trends I can identify:**
1. Subagent behavior and reliability issues (multiple issues)
2. Auto Memory system bugs (multiple issues #26516, #26522, #26523, #26525)
3. Browser agent issues
4. Security hardening (policy directories, log credentials, OAuth)
5. Performance issues (terminal resize, tools count limit)
6. AST-aware tools exploration
7. Sandbox improvements

Let me structure the report now. I need to be in Chinese, professional, concise, and suitable for technical developers.

Let me identify the top 10 issues and 10 PRs:

Top 10 Issues (by importance - combining comments, thumbs up, priority, and impact):
1. #22323 (P1, 13 comments) - Subagent MAX_TURNS bug
2. #21409 (P1, 8 comments, 8 thumbs) - Generalist agent hangs - HIGH engagement
3. #19873 (P2, 9 comments) - Bash sandboxing enhancement
4. #22745 (P2, 7 comments) - AST-aware tools
5. #21968 (P2, 6 comments) - Skills/sub-agents usage
6. #25166 (P1, 4 comments, 3 thumbs) - Shell command stuck
7. #21983 (P1, 4 comments) - browser subagent wayland
8. #26525 (P2, 5 comments) - Auto Memory redaction (security)
9. #22267 (P2, 3 comments) - Browser Agent ignores settings.json
10. #22672 (P2, 3 comments) - Destructive behavior prevention

Top 10 PRs (by impact, security focus, and area):
1. #29335 (P1, core) - AgentLoopContext preservation
2. #29328 (P1, security) - LOG_LEVEL and credentials in logs
3. #29336 (P2, enterprise) - Secure policy directories
4. #29333 (P2, enterprise) - Vet policy directory permissions
5. #29332 (P2, core) - Bound sandbox expansion
6. #29329 (P2, cli) - Pause stdin after truncation
7. #29330 (P2, cli) - Purity violation fix
8. #29327 (P2, sdk) - Honour AgentShellOptions env/timeout
9. #29242 (P2, core) - 401 substring fix
10. #29337 - Version bump (release)

Let me write the report now.</think>

# Gemini CLI 社区动态日报
**日期：2026-09-15**

---

## 📌 今日速览

今日 Gemini CLI 发布了夜间构建版 v0.61.0-nightly.20260915.g9c1b0a610，社区讨论焦点集中在 **Subagent 可靠性问题**（如 Generalist agent 挂死、MAX_TURNS 后状态误报）和 **Auto Memory 系统的多项缺陷**（重试循环、日志泄露、补丁校验）。多个安全加固类 PR 进入评审，涉及策略目录权限校验、A2A 服务器凭据保护与 OAuth 流程强化，整体呈现"agent 体验打磨 + 安全纵深防御"的双线推进态势。

---

## 🚀 版本发布

- **[v0.61.0-nightly.20260915.g9c1b0a610](https://github.com/google-gemini/gemini-cli/compare/v0.61.0-nightly.20260914.g9c1b0a610...v0.61.0-nightly.20260915.g9c1b0a610)** — 日常 nightly 版本号 bump，无显式功能变更日志（[自动化版本 PR #29337](https://github.com/google-gemini/gemini-cli/pull/29337)）。

---

## 🔥 社区热点 Issues（Top 10）

| # | Issue | 优先级 / 领域 | 为什么值得关注 | 社区反应 |
|---|-------|--------------|----------------|---------|
| 1 | [#22323](https://github.com/google-gemini/gemini-cli/issues/22323) Subagent 在 MAX_TURNS 后仍记为 GOAL 成功 | P1 / Agent | 隐藏了真实中断原因，影响调试与可靠性追踪 | 13 评论 |
| 2 | [#21409](https://github.com/google-gemini/gemini-cli/issues/21409) Generalist agent 调用即挂死 | P1 / Agent | 阻塞级故障，连"创建文件夹"等简单任务都受影响；显式禁用 sub-agent 才可绕过 | 8 评论 / 👍 8（互动最强） |
| 3 | [#19873](https://github.com/google-gemini/gemini-cli/issues/19873) Zero-Dependency OS 沙箱与执行后意图路由 | P2 / Agent | 利用 Gemini 3 的 native bash 能力，避免引入额外依赖同时保障安全 | 9 评论 |
| 4 | [#22745](https://github.com/google-gemini/gemini-cli/issues/22745) AST 感知文件读取/搜索/映射评估 | P2 / Agent | 有望大幅压缩上下文噪声与读取轮次 | 7 评论 |
| 5 | [#21968](https://github.com/google-gemini/gemini-cli/issues/21968) Gemini 几乎不主动调用 skills / sub-agents | P2 / Agent | 影响扩展生态被有效利用，用户必须显式指令才能触发 | 6 评论 |
| 6 | [#25166](https://github.com/google-gemini/gemini-cli/issues/25166) Shell 命令完成后卡在 "Waiting input" | P1 / Core | 简单命令也会出现，破坏 CLI 可用性体感 | 4 评论 / 👍 3 |
| 7 | [#21983](https://github.com/google-gemini/gemini-cli/issues/21983) Browser subagent 在 Wayland 下失败 | P1 / Agent | Linux 桌面环境覆盖率问题 | 4 评论 |
| 8 | [#26525](https://github.com/google-gemini/gemini-cli/issues/26525) Auto Memory 确定性脱敏与日志降级 | P2 / Security | 提取 agent 会先把原文送入模型再脱敏，存在敏感信息泄露风险 | 5 评论 |
| 9 | [#22267](https://github.com/google-gemini/gemini-cli/issues/22267) Browser Agent 忽略 settings.json（maxTurns 等） | P2 / Agent | 配置失效等于"开关形同虚设"，调试困难 | 3 评论 |
| 10 | [#22672](https://github.com/google-gemini/gemini-cli/issues/22672) 阻止/劝阻 Agent 破坏性行为 | P2 / Agent | 涉及 `git reset --force` 等危险操作的策略引导 | 3 评论 |

---

## 🛠 重要 PR 进展（Top 10）

| # | PR | 优先级 / 领域 | 修复/功能要点 |
|---|-----|--------------|---------------|
| 1 | [#29335](https://github.com/google-gemini/gemini-cli/pull/29335) **P1 / Core** | 修复 `Config` 通过 prototype getter 实现 `AgentLoopContext` 时在对象 spread 过程中丢失属性的问题，保障 agent loop 上下文完整性 |
| 2 | [#29328](https://github.com/google-gemini/gemini-cli/pull/29328) **P1 / Security** | A2A 服务器真正遵守 `LOG_LEVEL`，并对日志中的凭据字段进行脱敏 |
| 3 | [#29336](https://github.com/google-gemini/gemini-cli/pull/29336) **P2 / Enterprise** | 将 `isDirectorySecure` 校验扩展到全部策略目录层级，并启用当前用户所有权校验（修复 #29311） |
| 4 | [#29332](https://github.com/google-gemini/gemini-cli/pull/29332) **P2 / Core** | 限制单次工具调用递归触发 `sandbox_expansion_required` 的次数，避免栈/堆耗尽崩溃 |
| 5 | [#29329](https://github.com/google-gemini/gemini-cli/pull/29329) **P2 / CLI** | 截断后正确暂停 stdin 并在放弃时提示，避免后续 reader 拿到空流 |
| 6 | [#29330](https://github.com/google-gemini/gemini-cli/pull/29330) **P2 / CLI** | 修复 React StrictMode 下的"在 updater 内调用 setter"纯净性违规，并补齐回归用例 |
| 7 | [#29327](https://github.com/google-gemini/gemini-cli/pull/29327) **P2 / SDK** | `SdkAgentShell.exec` 真正生效 `env` 与 `timeoutSeconds` 选项 |
| 8 | [#29242](https://github.com/google-gemini/gemini-cli/pull/29242) **P2 / Core** | 修复 `isAuthenticationError` 将任意含 "401" 子串的端口/ID 误判为认证错误，导致错误地触发重新登录 |
| 9 | [#29237](https://github.com/google-gemini/gemini-cli/pull/29237) **P3 / Agent** | `list_background_processes` 不再对 signal 杀死的进程打印 `(Exit Code: null)` |
| 10 | [#29229](https://github.com/google-gemini/gemini-cli/pull/29229) **P2 / Core** | 设置编辑器拒绝 `Infinity`/`NaN` 等非有限数，避免值被静默存为 `null` 损坏配置（修复 #29226） |

> 注：[#29337](https://github.com/google-gemini/gemini-cli/pull/29337) 为今日 nightly 自动化版本 bump。

---

## 📈 功能需求趋势

从今日活跃 Issues 提炼，社区关注的功能方向集中在以下几类：

1. **Subagent/Agent 可靠性与自治能力**
   - 状态机正确性（MAX_TURNS 误报 #22323）
   - 调度策略（Generalist 挂死 #21409、被动调用 #21968）
   - 行为安全护栏（防止 `git reset --force` 等破坏性操作 #22672）

2. **代码理解能力升级**
   - AST 感知的文件读取 / 搜索 / codebase 映射（#22745、#22746、#19561 "Tactful Extraction"）
   - 目标：降低每轮约 36.6k token 的上下文基线

3. **Auto Memory 与上下文治理**
   - 整套围绕 #26516 的修复集：重试停止 #26522、补丁校验 #26523、确定性脱敏 #26525
   - 持久化任务追踪取代 WriteToDo（#18836、#21000）

4. **浏览器/桌面集成**
   - Browser Agent 的会话接管与锁恢复（#22232）、Wayland 兼容（#21983）、settings.json 覆盖生效（#22267）

5. **安全与企业级加固**
   - 策略目录权限校验（#29333、#29336）
   - 日志凭据保护 / LOG_LEVEL 生效（#29328）
   - RFC 9207 OAuth 颁发者校验（#29117，已合并）

6. **CLI 体验**
   - 终端 resize 高性能渲染（#21924）
   - Bash 模型亲和力与零依赖沙箱（#19873）

---

## 💬 开发者关注点

- **Agent "卡死/挂起" 仍是头号痛点**：#21409（8 👍）、#25166（"Waiting input" 卡死）、#21983（Wayland 失败）等都指向"在不该等待的地方等待"，普遍要求增加更明确的超时提示与可见的状态指示。
- **Subagent 的可观测性不足**：#21763（Bug report 不含 subagent 上下文）、#22598（`/chat share` 看不到 subagent trajectory）反映出开发者在调试多 agent 协作时严重缺乏内省工具。
- **配置/扩展机制不生效**：用户反映自定义 skills 不会被自动选用（#21968）、symlink agent 不被识别（#20079）、Browser Agent 忽略 settings.json（#22267），说明配置层与注册层之间存在"信任断裂"。
- **安全与隐私焦虑升温**：Auto Memory 将本地 transcript 发送至提取 agent 后再脱敏（#26525），社区呼吁改为发送前确定性脱敏；多个 PR 同步收紧日志与目录权限，体现企业对上线敏感度的提升。
- **上下文与 token 经济性**：开发者普遍希望从"全文灌入"转向"手术刀式提取"（AST 感知、grep-first），将每轮 ~36.6k token 的开销持续压低。
- **Wayland / Linux 桌面体验**：相比 macOS/Windows，Linux（尤其是 Wayland）的 Browser Agent 兼容性仍是高频抱怨点。

---

*日报基于 2026-09-15 过去 24 小时内 GitHub 仓库 `google-gemini/gemini-cli` 的 Releases、Issues 与 PR 数据自动生成。*

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

<think>The user wants me to generate a daily community report for GitHub Copilot CLI based on the provided data. Let me analyze the data carefully:

1. **Releases**: Three versions released in the past 24 hours:
   - v1.0.84-8: Added transcriptView "concise" mode, improved Agent Factory pause/resume, fixed model list refresh
   - v1.0.84-7: Fixed Claude adaptive thinking shape, fixed sessionEnd hooks
   - v1.0.84-6: Added /config sidebar, added /sandbox network allow/deny rules, improved managed Edit/Write rules

2. **Issues**: 24 issues updated in the past 24 hours. I need to pick 10 most noteworthy.

3. **Pull Requests**: 0 PRs updated in the past 24 hours. I should note this.

Let me categorize the issues:

**High engagement / notable issues:**
- #4525 [CLOSED] MCP legacy initialize bug - 7 comments, 3 likes
- #4849 [OPEN] Subagent workflow latency - 5 comments, 0 likes (new today)
- #4725 [OPEN] JavaScript heap OOM on Linux - 5 comments, 1 like
- #4505 [OPEN] Stale connection item IDs - 4 comments, 3 likes
- #4843 [OPEN] Terminal theme colors in Warp - 2 comments
- #4549 [OPEN] Windows PowerShell window flashing - 2 comments, 1 like
- #4556 [OPEN] Plugin marketplace silent auth fail - 2 comments, 2 likes
- #3572 [OPEN] Org-level custom agents visibility - 2 comments, 3 likes
- #4850 [OPEN] Background subagent stuck running - 1 comment (new today)
- #4783 [OPEN] Enterprise yolo policy - 1 comment
- #4841 [OPEN] Plan panel blank - 1 comment
- #4837 [OPEN] enabledPlugins never activates - 1 comment
- #4848 [OPEN] Feedback UX confusion - 0 comments (new today)
- #4847 [OPEN] Managed-settings refresh breaks MCP - 0 comments (new today)
- #4846 [OPEN] Sandbox policy ignored - 0 comments
- #4845 [OPEN] Sessions stuck "In use" - 0 comments
- #4844 [OPEN] --yolo flag swallowed - 0 comments
- #4842 [OPEN] MCP OAuth token refresh race - 0 comments
- #4840 [OPEN] BYOK Deepseek broken - 0 comments
- #4839 [OPEN] Taskbar icon disable option - 0 comments
- #4838 [OPEN] Skill tool fails in headless mode - 0 comments
- #4836 [OPEN] Grok 4.5 351 tools HTTP 400 - 0 comments
- #4835 [OPEN] Gemini Flash MCP enum breaks - 0 comments
- #4834 [OPEN] MCP 2026-07-28 MRTR support - 0 comments

For "important PRs" - there are 0 PRs updated, so I'll note that.

Let me identify the top 10 issues worth highlighting:
1. #4525 - Recently closed MCP bug - high engagement
2. #4849 - Subagent latency (new, important feature request)
3. #4725 - JavaScript heap OOM (recurring crash)
4. #4505 - Resumed session stale IDs (high likes)
5. #4843 - Warp terminal color theme
6. #4556 - Plugin marketplace silent fail (high likes)
7. #3572 - Org-level custom agents (high likes, longstanding)
8. #4850 - Background subagent stuck
9. #4841 - Plan panel blank for custom agents
10. #4836 - Grok 4.5 351 tools limit
11. #4840 - BYOK Deepseek broken
12. #4834 - MCP 2026-07-28 MRTR support (protocol evolution)

Let me pick the 10 most noteworthy. I'll prioritize:
- New issues today (4849, 4850, 4847, 4848)
- High engagement (4525, 4505, 4556, 3572)
- Cross-cutting/broader impact (4725 OOM, 4836 model tool limits, 4834 MCP protocol)

Let me build the report now.

For feature trends, I can categorize:
- **MCP protocol evolution**: #4525, #4842, #4834 (legacy init, OAuth race, MRTR support)
- **Model/provider compatibility**: #4840 (BYOK Deepseek), #4836 (Grok 4.5 tools), #4835 (Gemini Flash), #4841 (custom agents plan mode)
- **Sandbox & security/enterprise**: #4783 (yolo policy), #4846 (sandbox ignored), #4549 (Windows PS flashing), #4844 (--yolo swallowed)
- **Subagent/agent workflow**: #4849 (latency), #4850 (background stuck), #4725 (heap OOM)
- **Plugin system**: #4556 (marketplace silent), #4837 (enabledPlugins bug)
- **Session management**: #4505 (stale IDs), #4845 (stuck "In use"), #4847 (managed-settings refresh)
- **UX/UI**: #4843 (Warp colors), #4848 (feedback UX), #4841 (plan panel), #4839 (taskbar icon)
- **Headless/CI mode**: #4838 (skill tool fails)

Developer pain points:
- Subagent reliability and latency
- Cross-platform quirks (Windows, Warp terminal, Linux heap)
- Model provider edge cases (BYOK, tool limits, schema quirks)
- Plugin lifecycle bugs (silent failures)
- MCP protocol version compatibility

Let me write the report now.</think>

# GitHub Copilot CLI 社区动态日报

**📅 2026-09-15** ｜ 数据来源：`github.com/github/copilot-cli`

---

## 一、今日速览

过去 24 小时内，`copilot-cli` 连续发布三个预发布版本（`v1.0.84-6` / `7` / `8`），集中在沙箱网络策略、Claude 适配思考（adaptive thinking）形态修正以及 Agent Factory 体验打磨上。社区侧同时涌入大量围绕 **subagent 工作流稳定性、MCP 协议演进（2026-07-28 / MRTR）、模型适配边界** 的问题，单日 issue 更新量达 24 条，闭环 1 条，问题密度显著高于近期均值。

---

## 二、版本发布

> 24 小时内连续发布 `v1.0.84-6` → `v1.0.84-8` 三个预发布版本，仍属于 1.0.84 小版本的迭代窗口。

### 🔹 v1.0.84-8
- **Added**：`transcriptView` 支持 `"concise"` 模式，将工具活动按可展开的工作摘要分组，便于长会话阅读。
- **Improved**：可在 `/factories` 对话框中**暂停 / 恢复** Agent Factory 运行。
- **Fixed**：登入、切换账号、登出后模型列表不再失效，需手动刷新。

### 🔹 v1.0.84-7
- **Fixed**：对标记为 *adaptive-only* 的 Claude 模型，正确发送思考（thinking）形态：保持 adaptive 模式而非失败；关闭 thinking 时降级为低推理强度，开启时推理强度上限被封顶为 `high`。
- **Fixed**：`/clear` 关闭会话时正确触发 `sessionEnd` 钩子。

### 🔹 v1.0.84-6
- **Added**：`/config` 命令，在 CLI 内打开侧边栏配置面板（无需外部编辑器）。
- **Added**：`/sandbox` 支持网络主机 **allow / deny 规则**，可叠加在既有上游代理配置之上，不替换。
- **Improved**：托管的 `Edit` 与 `Write` 规则现在覆盖原生 shell 重定向以及受支持的 `sed -i` 原地编辑。

---

## 三、社区热点 Issues（精选 10 条）

| # | Issue | 状态 | 亮点 |
|---|---|---|---|
| 1 | **#4525** [CLOSED] MCP 双重 `initialize` 导致 `-32022` | ✅ 已关闭 | 作者 [@dmbutko](https://github.com/dmbutko)，7 评 👍3。`1.0.81-1` 在 stdio MCP 服务器上先以 `server/discover` 探测成功后又发送了 legacy `initialize`，本周期已闭环，是近期 MCP 兼容性工作的代表案例。 |
| 2 | **#4849** 🆕 Reduce latency & review-loop overhead in subagent workflows | OPEN | 作者 [@tjgreen42](https://github.com/tjgreen42)，5 评。subagent 启动、任务交接、review/fix/re-review 反复轮询动辄分钟级，社区诉求是端到端可感知的性能预算与可见的进度反馈。 |
| 3 | **#4725** Frequent JavaScript heap out of memory（Linux） | OPEN | 作者 [@jbulow](https://github.com/jbulow)，5 评 👍1。每数分钟一次 Mark-Compact 失败 ~3.9 GB，是长期高负载场景下的稳定性顽疾。 |
| 4 | **#4505** Resumed session retains stale connection item IDs | OPEN | 作者 [@Adamkadaban](https://github.com/Adamkadaban)，4 评 👍3。恢复历史会话后所有 prompt 报 `CAPIError: 400 input item ID does not belong to this connection`，`/fork` 也无法修复，关联到 CAPI 会话生命周期。 |
| 5 | **#4556** `extraKnownMarketplaces` 被取回但永不注册 | OPEN | 作者 [@loganvolkers](https://github.com/loganvolkers)，2 评 👍2。服务端下发的 marketplace 配置被静默丢弃，`plugin marketplace list` 只剩两个默认值——典型的"成功却无副作用"故障。 |
| 6 | **#3572** Org-level custom agents 在 CLI 中不可见 | OPEN | 作者 [@cmpl-giedriusk](https://github.com/cmpl-giedriusk)，2 评 👍3。当工作目录无 GitHub 远端时，企业级 `.github-private` 仓库中的自定义 agent 完全无法被 `/agent` 列出，是企业部署的关键阻碍。 |
| 7 | **#4850** 🆕 Background subagent 在工具停止后仍驻留运行 | OPEN | 作者 [@tjgreen42](https://github.com/tjgreen42)，1 评。状态卡在 100 个 tool calls / 0 turns、挂起超过 15 分钟且父会话拿不到结果——subagent 生命周期管理缺陷。 |
| 8 | **#4836** Grok 4.5: 351 tools 触发 HTTP 400 | OPEN | 作者 [@kondv](https://github.com/kondv)。CLI 没有在客户端拦截并报告模型的 350 tool 上限，而是把请求直接打到 API 返回 400——典型的"边界值应由客户端提前校验"问题。 |
| 9 | **#4840** BYOK Copilot CLI 不再支持 Deepseek | OPEN | 作者 [@Bude2408](https://github.com/Bude2408)。`tools[4].type: unknownvariant 'custom'` 反序列化失败，影响自部署 / 第三方模型接入。 |
| 10 | **#4834** Support MCP 2026-07-28 Multi Round-Trip Requests | OPEN | 作者 [@kgolbang](https://github.com/kgolbang)。新版协议 MRTR（input_required）下，URL elicitation 缺少回退，CLI 协议栈升级诉求明确。 |

> 其余值得关注：[**#4847** 自动 managed-settings 刷新打断 IDE MCP](https://github.com/github/copilot-cli/issues/4847)、[**#4846** 沙箱"allow dev tool access"绕过文件系统策略](https://github.com/github/copilot-cli/issues/4846)、[**#4845** Session 卡死 "In use"](https://github.com/github/copilot-cli/issues/4845)、[**#4549** Windows 每次执行 shell 都闪现 PowerShell 窗口](https://github.com/github/copilot-cli/issues/4549)。

---

## 四、重要 PR 进展

> **过去 24 小时内仓库无新 PR 更新**（数据源返回 0 条）。
> 建议关注点：当前 bug 修复主要在 1.0.84-x 预发布分支就地发布，PR 层的可见性偏低；如需追溯设计变更，可直接比对 `v1.0.84-6 → 7 → 8` 的 diff。

---

## 五、功能需求趋势

将 24 条 issue 聚类后，社区最关注的方向呈以下分布：

1. **🧠 Subagent / Agent 工作流**（占比最高）
   - 延迟与 review 循环开销（#4849）、后台 subagent 卡死（#4850）、`exit_plan_mode` 自定义 agent 面板空白（#4841）。这是本周期最强的需求信号，指向"多代理协作的可观测性与可靠性"。

2. **🔌 MCP 协议演进**
   - legacy 兼容（#4525 已闭环）、2026-07-28 MRTR 支持（#4834）、OAuth 并发刷新竞态（#4842）、managed-settings 刷新打断 MCP 重载（#4847）。CLI 正从"能用 MCP"走向"协议版本完整对齐"。

3. **🤖 模型与 Provider 边界**
   - Claude adaptive thinking 形态修正（已随 #4847 修复）、Grok 4.5 / Gemini Flash 的 schema 与 tool 上限问题（#4836、#4835）、BYOK Deepseek 反序列化失败（#4840）。每接入一个模型都需要客户端侧的"防御性校验"。

4. **🔐 沙箱 / 企业策略**
   - `yolo` 策略粒度（#4783）、`allow dev tool access` 绕过文件系统策略（#4846）、`--yolo` 在 pre-auth fail-closed 窗口被吞（#4844）。企业管控诉求与 CLI 默认安全姿态存在张力。

5. **🖥️ 平台兼容 / 终端 UX**
   - Linux 堆内存（#4725）、Windows 闪现控制台（#4549）、Warp 颜色主题（#4843）、任务栏图标（#4839）、`/feedback` 文案歧义（#4848）。多终端体验仍是细节密集区。

6. **🔌 插件 / Marketplace**
   - 服务端 marketplace 静默丢弃（#4556）、policy-driven `enabledPlugins` 持久化为 `false`（#4837）。插件生命周期在"装机—启用—运行"三段均有断裂。

7. **🧩 会话状态管理**
   - 恢复后 stale IDs（#4505）、永久 "In use"（#4845）。`sessionEnd` 钩子已在 v1.0.84-7 修复，是该方向首个闭环。

---

## 六、开发者关注点

- **"subagent 又慢又卡还不报错"**：延迟、卡死、状态不一致三类问题集中爆发，开发者迫切需要**明确的超时、降级与进度反馈**机制，而当前 CLI 更倾向"父会话静默等待"。
- **"协议在演进，CLI 没跟上"**：MCP `2026-07-28`、Claude adaptive thinking、Gemini Flash MCP schema、Grok tool 上限——每一条都指向客户端**未在本地前置校验协议/模型边界**，把 400 错误透传到用户面前。
- **"企业策略与 CLI 默认行为打架"**：yolo 模式、`allow dev tool access`、policy-driven `enabledPlugins` 在不同生命周期阶段相互覆盖，开发者希望**策略优先级与生效时机可被显式声明**，而不是依赖隐式 fail-closed。
- **"静默成功比显式失败更可怕"**：marketplace 拉取成功但不注册、enabledPlugins 安装但不激活、`/feedback` "Save" 看起来像提交——失败 vs 成功语义混淆是本周期 UX 反馈的核心。
- **"多终端细节持续消耗信任"**：Warp 颜色、Windows 闪现、Linux OOM、任务栏图标堆积——单独看都是小问题，但叠加起来明显影响日常使用体感。

---

> 📌 **小结**：1.0.84 小版本正在密集打磨沙箱、Claude 适配与 Agent Factory 三条线；社区议程则被 **subagent 可靠性、MCP 协议对齐、模型边界校验** 三件事主导。短期看，PR 通道的可见性偏低，建议关注 patch diff 与 RFC 讨论以跟踪设计走向。

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

<think>The user wants me to generate a Chinese daily report for Kimi Code CLI community dynamics based on GitHub data. Let me analyze the data:

1. **No releases in the past 24 hours** - I'll omit the release section or note that there are no new releases
2. **4 Issues** - All I have are 4 issues, but the user wants 10. I'll need to be honest about the limited data.
3. **0 Pull Requests** - I'll need to handle this gracefully

Let me analyze the issues:

- #1433 [CLOSED] - Bug about clipboard image handling only supporting Ctrl+V not Cmd+V on Mac
- #1435 [CLOSED] - Feature request for PicoClaw support for Kimi For Coding API
- #2643 [OPEN] - Bug about IME composition Enter key being treated as send message in kimi web
- #2642 [OPEN] - Feature request for visual annotations and review feedback in Kimi Work

The issue numbering is interesting - #1433 and #1435 were created in March 2026 but updated today (2026-09-15), while #2642 and #2643 were created and updated on 2026-09-14. This suggests these are old issues that got updated.

Wait, looking again - the user says "过去24小时内更新" meaning updated in the past 24 hours. So all 4 are updated in the past 24 hours. The creation dates vary.

Let me structure the report:

1. **今日速览** - Summary of key activities
2. **版本发布** - Note no releases
3. **社区热点 Issues** - I have 4 issues, but user asks for 10. I should be honest that only 4 issues were active in the past 24 hours. I'll cover all 4 with detailed analysis.
4. **重要 PR 进展** - No PRs, I'll note this
5. **功能需求趋势** - Analyze themes
6. **开发者关注点** - Summarize pain points

Let me write this professionally in Chinese.</think>

# Kimi Code CLI 社区动态日报

**日期：** 2026-09-15
**数据周期：** 过去 24 小时
**仓库：** [MoonshotAI/kimi-cli](https://github.com/MoonshotAI/kimi-cli)

---

## 一、今日速览

过去 24 小时内，仓库无新版本发布，无新增 Pull Request；社区活跃度主要体现在 4 条 Issue 的更新上。其中 2 条旧 Issue（#1433、#1435）已关闭，2 条新 Issue（#2642、#2643）聚焦于 Kimi Web/Work 的中文输入法（IME）兼容与会话批注能力，反映出社区对**多语言输入体验**与**人机协作审阅流程**的关注度持续升温。

---

## 二、版本发布

⚠️ 过去 24 小时内**无新版本发布**。

---

## 三、社区热点 Issues

由于过去 24 小时内活跃的 Issue 仅 4 条，以下完整覆盖全部更新条目；其中涉及平台兼容、跨工具集成与协作体验三个方向，具有较高参考价值。

### 1. [#1433 [CLOSED] clipboard 图片粘贴仅支持 Ctrl+V，忽略 Cmd+V](https://github.com/MoonshotAI/kimi-cli/issues/1433)
- **类型：** Bug | **平台：** Darwin/macOS | **关联版本：** v1.22.0
- **重要性：** macOS 用户在终端粘贴图片时，习惯使用 `Cmd+V`，但 CLI 仅监听 `Ctrl+V`，导致核心功能在 Apple 生态下完全不可用。该问题直接影响 macOS 开发者的工作流。
- **社区反应：** 1 次点赞，2 条评论，Issue 已被关闭，**预计已在修复分支或后续版本中处理**。
- **关键信号：** Mac 端体验完善是 CLI 走向全球开发者的必备门槛。

### 2. [#1435 [CLOSED] Feature Request: Add PicoClaw support for Kimi For Coding API](https://github.com/MoonshotAI/kimi-cli/issues/1435)
- **类型：** Enhancement | **集成方：** [PicoClaw](https://github.com/sipeed/picoclaw)
- **重要性：** 用户希望将 Kimi For Coding 订阅复用到第三方开源 AI Agent 框架 PicoClaw，涉及**API Key 鉴权限制**问题，反映出用户对"一次订阅、多端使用"的强烈诉求。
- **社区反应：** 0 评论、0 点赞，但已被官方直接关闭，可能已转入内部评估或通过其他渠道回复。
- **关键信号：** 生态开放与订阅策略的灵活性，是开发者选择 CLI 的重要考量。

### 3. [#2643 [OPEN] kimi web 输入框在 IME 组词状态下按回车误判为发送消息](https://github.com/MoonshotAI/kimi-cli/issues/2643)
- **类型：** Bug | **影响范围：** 中/日/韩（CJK）输入法用户
- **重要性：** 在 IME 组词未完成时按回车本应"上屏候选词"，但当前 kimi web 直接发送，导致用户**未完成输入被误发送**，严重影响中文、日文、韩文用户的日常使用。
- **社区反应：** 刚开 Issue，尚未收到社区互动。
- **关键信号：** 这是典型的前端"IME compositionend"事件处理缺失，属于 P0 级体验缺陷。

### 4. [#2642 [OPEN] Kimi Work 会话内支持对 Agent 回复的可视化批注与审阅反馈](https://github.com/MoonshotAI/kimi-cli/issues/2642)
- **类型：** Feature Request | **影响模块：** Kimi Work
- **重要性：** 用户希望对 Agent 的长回复（计划/报告/方案）进行**逐段批注**，并以结构化形式回传给 Agent 修订，实现类似"代码 PR Review"的工作流。这是将 Agent 从"对话工具"升级为"协作伙伴"的关键能力。
- **社区反应：** 刚开 Issue，描述详尽、场景完整，作者显然做过深度思考。
- **关键信号：** **Human-in-the-loop + 结构化反馈** 是 Agent 产品下一阶段的核心战场。

---

## 四、重要 PR 进展

⚠️ 过去 24 小时内**无新增或更新的 Pull Request**。

> 建议关注：可定期回顾仓库近期合入的 PR，了解 v1.22.0 之后代码侧的实际改动。

---

## 五、功能需求趋势

从活跃 Issue 提炼出三大社区关注方向：

| 方向 | 代表 Issue | 趋势解读 |
|------|-----------|---------|
| **跨平台体验完善** | #1433 | macOS 的快捷键、剪贴板、终端交互需要系统性对齐，避免 Windows/Linux 之外的体验割裂。 |
| **生态开放与互操作** | #1435 | 用户期望 Kimi For Coding 订阅能在第三方 Agent 框架中使用，订阅模式不应成为能力天花板。 |
| **人机协作审阅（Agent Review UI）** | #2642 | 对 Agent 输出做"逐段批注 + 结构化反馈"是当前呼声最高的下一代交互范式，类似 Copilot Chat 的行内评论。 |
| **多语言输入兼容（IME）** | #2643 | CJK 输入法的 composition 事件处理是基础前端能力，缺失会被视为"产品不成熟"。 |

**隐藏趋势：** 两条 Open Issue（#2642、#2643）都聚焦在 **Kimi Web/Work 而非纯 CLI**，提示 Moonshot AI 的产品矩阵正在从终端 CLI 向 Web/Work 一体化工作台演进，CLI 仓库已成为前端问题的汇总入口之一。

---

## 六、开发者关注点

综合活跃 Issue，社区反馈的痛点与高频需求可归纳为以下五点：

1. **macOS 原生体验短板**：剪贴板、快捷键等仍以 Linux/Windows 习惯为主，Mac 开发者"装上却用不顺"。
2. **订阅使用的边界不清晰**：第三方 Agent 框架接入时遇到鉴权阻碍，开发者希望官方给出明确的"开放层级"说明。
3. **Web/Work 端的 IME 兼容是基础项**：未处理 `compositionstart` / `compositionend` 即视为未上线，对 CJK 用户极不友好。
4. **缺乏结构化的 Agent 输出审阅机制**：当前只能"用文字描述修改意见"，效率低且易遗漏，开发者期待 **Review-style UI**。
5. **官方响应速度影响社区信心**：#1433 与 #1435 均在创建约 6 个月后才更新关闭，开发者希望缩短 Issue 生命周期。

---

## 七、附注

- **Issue 编号跳跃提示：** 仓库出现 #14xx 与 #26xx 共存的编号体系，可能涉及多个子项目或导入历史，关注时建议以标题而非编号检索。
- **数据局限：** 本日报仅覆盖过去 24 小时的更新，全量趋势建议结合近 30 天数据综合判断。

---

*本日报由技术分析师基于 GitHub 公开数据自动生成，所有链接指向对应 Issue/PR 页面，欢迎社区补充与勘误。*

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

<think>
The user wants me to generate a daily report for OpenCode community dynamics based on GitHub data. Let me analyze the data carefully and structure the report.

Key observations from the data:

1. **Release v1.18.31**: 
   - Core bugfix: Restored ACP session model, effort, mode, and reasoning chunk boundaries (@JacobNWolf)
   - TUI bugfix: Show remote config authentication errors during startup
   - Extensions improvements (cut off)

2. **Hot Issues** (top by comments):
   - #37012 - Legacy layout option (45 comments, 63 thumbs) - Very hot, UI/UX feature request
   - #22132 - OpenCode 1.4.3 hangs with Ollama (closed)
   - #48882 - Restore legacy UI with persistent left sidebar (16 comments, 21 thumbs)
   - #26602 - Desktop 5-minute headers timeout (14 comments)
   - #28175 - Live session status panel (closed)
   - #30611 - Sessions fail on transient network errors
   - #48330 - Copilot Legacy Plan consumed in single prompt
   - #36893 - session.time_updated goes stale
   - #48835 - New layout doesn't support multiple worktrees
   - #48811 - macOS prompt failure (7 comments, 29 thumbs - high reaction)

3. **Important PRs**:
   - #49107 - TUI test for variant filter focus
   - #49105 - Fix session time_updated on step lifecycle (closes #36893)
   - #49089 - TUI terminal mode reset
   - #49099 - Classify content policy errors by provider codes
   - #49104 - Refactor codemode built-ins
   - #49076 - Add Uint8Array, TextEncoder, TextDecoder
   - #48423 - Replace websocket flags with single transport preference
   - #48905 - Support mise-managed upgrades
   - #49106 - Preserve inbox events during snapshot reads
   - #48724 - Migrate mac beta to stable installer
   - #48978 - Guard model parse
   - #49100 - Drop Program prefix rename
   - #49103 - Standard Mac tab shortcuts
   - #49097 - Serve bundled SDK to loose plugin files on Bun
   - #47637 - Replace stale antigravity plugins docs
   - #48867 - Make worktree APIs project-based
   - #47913 - Indonesian translation README
   - #43460 - Decode plugin tool input
   - #42491 - Avoid zero message refresh limit

4. **Trend Analysis**:
   - **UI/Layout concerns**: Multiple issues about legacy layout removal, sidebar redesign, multi-worktree support (#37012, #48882, #48835, #48224) - this is a HUGE theme
   - **Provider support**: xAI not showing, Ollama hangs, Copilot quota, GPT-5.6 caching
   - **Performance**: Multi-session bottlenecks (#49095), session time_updated stale (#36893)
   - **Reliability**: Network errors, headers timeout, retry policy (#30611, #26602)
   - **MCP/Skill tools**: Schema sanitization, Skill context ignored
   - **Code Mode**: Multiple PRs about codemode refactor and binary support
   - **Plugin system**: SDK resolution, plugin tool input decoding

5. **Developer pain points**:
   - macOS crashes
   - Network reliability
   - UI redesign removing useful features
   - Multi-worktree support lost
   - macOS tab shortcuts missing
   - iCloud sync issues
   - Provider compatibility
   - Time updates during active sessions

Let me now write this report in Chinese, structured according to the requirements.

I need to be careful about the date - it says 2026-09-15. This is a future date (as of my knowledge cutoff), but I should treat the data as the user has provided it.

Let me draft the report now. I'll keep it concise, professional, and suitable for technical developers. Each item needs a GitHub link.

Let me organize:

## 1. 今日速览
- v1.18.31 发布：修复 ACP 会话模型恢复与 TUI 启动认证提示
- UI/UX 争议：移除经典侧边栏布局引发大量社区反弹，多个相关 Issue 持续走热
- Code Mode 持续演进：二进制支持、内置重构、命名整理相关 PR 集中合并

## 2. 版本发布
v1.18.31
- Core: 恢复 ACP 会话加载/恢复/分支时的 model、effort、mode、reasoning chunk 边界
- TUI: 启动阶段展示远程配置认证错误并以失败状态退出
- Extensions: 改进 (摘要截断)

## 3. 社区热点 Issues
Top 10 to pick:
1. #37012 - 保留旧版布局选项 (45评, 63赞) - 最热
2. #48882 - 恢复旧版UI持久化左侧栏 (16评, 21赞)
3. #48835 - 旧布局被移除但新布局不支持多工作树 (7评, 9赞)
4. #48811 - macOS 每次提示失败 "undefined is not an object" (7评, 29赞)
5. #26602 - Desktop 5分钟 Headers 超时 (14评)
6. #22132 - Ollama 本地提供者挂起 (已关闭, 17评)
7. #30611 - 会话在瞬态网络错误时不重试
8. #48330 - Copilot Legacy 配额一次消耗完
9. #36893 - session.time_updated 失效
10. #49095 - 多会话下 CLI 服务无响应 (新)
11. #49092 - 输出中断 (新)
12. #48224 - code mode desktop browser 工具在 web 会话暴露

I'll pick the top 10.

## 4. 重要 PR 进展
1. #49105 - 修复 session.time_updated 在步骤生命周期事件中更新 (closes #36893)
2. #49106 - 修复客户端在快照读取期间保留 inbox 事件
3. #49103 - 为 Mac 添加标准 tab 快捷键
4. #49099 - 按提供者错误代码分类内容策略错误
5. #49097 - 为 Bun 上的松散插件文件提供 bundle SDK
6. #49089 - TUI 退出时重置终端模式
7. #49076 - Code Mode 添加 Uint8Array、TextEncoder、TextDecoder
8. #49104 - Code Mode 重构，统一 interpreter context
9. #49100 - Code Mode 重命名：去掉 Program 前缀
10. #48905 - 支持 mise 管理的升级和卸载
11. #48978 - TUI 守护 model 解析
12. #48867 - 工作树 API 改为基于项目
13. #48423 - 替换 websocket 标志为单一传输偏好
14. #43460 - 修复插件工具输入解码
15. #48724 - macOS Beta 迁移到 Stable 安装器

## 5. 功能需求趋势
- **UI/UX 与布局回归**：经典侧边栏布局的呼声最高，新布局对多 worktree 支持缺失
- **Provider 兼容性与可靠性**：本地 Ollama、xAI、Copilot、Gemini 等多 Provider 接入问题
- **会话可靠性与重试**：网络瞬态错误、超时重试
- **Code Mode 增强**：二进制数据支持、解释器重构
- **国际化与文档**：印尼语 README、Antigravity 文档更新
- **macOS 桌面体验**：Tab 快捷键、目录同步、installer 流程

## 6. 开发者关注点
- 旧版 UI 不可逆迁移引发核心用户不满
- macOS 上的稳定性（启动崩溃、iCloud 同步、快捷键）
- Provider 配额与超时配置被忽略
- 多会话与多 worktree 并发下的性能
- Code Mode 作为新架构的稳定性与可扩展性

Let me write this out in proper Chinese now.
</think>
# OpenCode 社区动态日报 · 2026-09-15

> 数据来源：github.com/anomalyco/opencode  
> 统计窗口：过去 24 小时

---

## 📌 今日速览

- **v1.18.31 发布**：修复 ACP 会话恢复时的模型/effort/mode/reasoning 边界丢失，以及 TUI 启动阶段未上报远程配置认证错误的问题。
- **UI/UX 争议持续发酵**：强制移除经典侧边栏布局后，社区多个相关 Issue 冲上热榜，新版对多 worktree 支持的缺失成为最大痛点。
- **Code Mode 架构迭代密集**：二进制支持（Uint8Array/TextEncoder）、解释器上下文统一、命名规整等相关 PR 集中合并，Code Mode 正快速走向稳定。

---

## 🚀 版本发布

### v1.18.31（@JacobNWolf 等）

- **Core · Bugfix**
  - 恢复 ACP 会话在加载、恢复、分支（fork）时丢失的 model、effort、mode 与 reasoning chunk 边界。
- **TUI · Bugfix**
  - 启动阶段正确展示远程配置认证错误并以失败状态退出。
- **Extensions · Improvements**
  - （摘要被截断，建议查阅完整 changelog）

> 完整变更：https://github.com/anomalyco/opencode/releases/tag/v1.18.31

---

## 🔥 社区热点 Issues（Top 10）

| # | Issue | 关键点 | 反应 |
|---|-------|--------|------|
| 1 | [#37012](https://github.com/anomalyco/opencode/issues/37012) 保留旧版布局选项 | **今日最热**，主张恢复 legacy 布局（侧边栏直达、workspace 支持）。新版本需要在多个子页面跳转，效率明显下降。 | 💬 45 / 👍 63 |
| 2 | [#48882](https://github.com/anomalyco/opencode/issues/48882) 恢复带持久化左栏的 legacy UI | 针对 #20242 侧边栏改版的反弹，要求把旧双栏布局作为可选项。 | 💬 16 / 👍 21 |
| 3 | [#48835](https://github.com/anomalyco/opencode/issues/48835) 旧布局强制移除 + 新布局不支持多 worktree | 中英文双语反馈：迁移后无法管理多个 git worktree，影响核心开发流。 | 💬 7 / 👍 9 |
| 4 | [#48811](https://github.com/anomalyco/opencode/issues/48811) macOS 每次 prompt 抛 `undefined is not an object` | 错误来自 `SystemPrompt.environment`，影响所有 macOS 用户。 | 💬 7 / 👍 29 |
| 5 | [#26602](https://github.com/anomalyco/opencode/issues/26602) Desktop 5 分钟 Headers Timeout | 即便 provider 配置 `timeout: false` 或更大值，Desktop 仍 5 分钟硬切，OpenCode 1 旧版可正常完成。 | 💬 14 / 👍 2 |
| 6 | [#22132](https://github.com/anomalyco/opencode/issues/22132) 本地 Ollama 一直挂起（已关闭） | `@ai-sdk/openai-compatible` 配置下，OpenCode 1.4.3 对 Ollama 简单 prompt 即卡死。 | 💬 17 / 👍 5 |
| 7 | [#30611](https://github.com/anomalyco/opencode/issues/30611) 瞬态网络错误直接杀死 session | 重试策略只识别 `ECONNRESET`，其他 transient 错误（如 `ETIMEDOUT`、`EAI_AGAIN`）都被当硬错误。 | 💬 9 / 👍 1 |
| 8 | [#48330](https://github.com/anomalyco/opencode/issues/48330) Copilot Legacy 配额一次耗尽 | opencode 2 中单次 session 把 1500/月请求量跑光，1.x 正常。 | 💬 7 / 👍 0 |
| 9 | [#36893](https://github.com/anomalyco/opencode/issues/36893) `session.time_updated` 停滞导致排序错乱 | 流式生成期间时间戳不更新，最活跃 session 排到列表底部。已有对应修复 PR。 | 💬 7 / 👍 0 |
| 10 | [#49095](https://github.com/anomalyco/opencode/issues/49095) 多会话下 CLI 单进程瓶颈 | 5+ 并发 session 时单核 Node 进程饱和，建会/切会显著卡顿。 | 💬 2 / 👍 0 |

> 其他值得跟踪：  
> [#48882](https://github.com/anomalyco/opencode/issues/48882) · [#49092](https://github.com/anomalyco/opencode/issues/49092)（输出中断） · [#49093](https://github.com/anomalyco/opencode/issues/49093)（Win11 + 网络盘会话不显示） · [#49082](https://github.com/anomalyco/opencode/issues/49082)（iCloud 同步后 OpenCode 不可用） · [#46628](https://github.com/anomalyco/opencode/issues/46628)（MCP 工具 schema 未为 Anthropic 清洗）

---

## 🛠 重要 PR 进展（Top 10）

| # | PR | 说明 |
|---|----|------|
| 1 | [#49105](https://github.com/anomalyco/opencode/pull/49105) **fix(core)** 在步骤生命周期事件上 bump `session.time_updated` | 关闭 [#36893](https://github.com/anomalyco/opencode/issues/36893)，解决活跃 session 排到列表底部的 bug。 |
| 2 | [#49106](https://github.com/anomalyco/opencode/pull/49106) **fix(client)** 快照读取期间保留 inbox 事件 | 修复远程客户端重连时延后的 inbox 响应覆盖新事件、导致已答问题被标 pending 的问题。 |
| 3 | [#49103](https://github.com/anomalyco/opencode/pull/49103) **fix(desktop)** Mac 标准 Tab 快捷键 | 新增 ⌘⇧[ / ⌘⇧] 切换 Tab，并把命令暴露在 Shortcuts 设置中。 |
| 4 | [#49099](https://github.com/anomalyco/opencode/pull/49099) **fix(ai)** 按 provider 错误码分类 Content Policy | 统一 Azure / OpenRouter 的内容策略错误结构化判定，避免误判。 |
| 5 | [#49097](https://github.com/anomalyco/opencode/pull/49097) **fix(plugin)** 给 Bun 上的松散插件文件提供 bundle SDK | 修复 `.opencode/plugins/*.ts` 在打包后 Bun 可执行中无法解析 `@opencode/plugin` 的问题。 |
| 6 | [#49089](https://github.com/anomalyco/opencode/pull/49089) **fix(tui)** 退出时干净重置终端模式与 epilogue | 修复 TUI 退出后终端模式污染、session epilogue 覆盖已恢复 shell 内容。 |
| 7 | [#49076](https://github.com/anomalyco/opencode/pull/49076) **feat(codemode)** 新增 `Uint8Array` / `TextEncoder` / `TextDecoder` | Code Mode 首个二进制类型；在扩展边界以 hint 拒绝，要求先编码为文本。 |
| 8 | [#49104](https://github.com/anomalyco/opencode/pull/49104) **refactor(codemode)** 内置对象统一 `ctx` 解释器上下文 | 行为不变，消除三个重叠视角，清理内部结构。 |
| 9 | [#49100](https://github.com/anomalyco/opencode/pull/49100) **refactor(codemode)** 去掉 `Program` 前缀，命名规整化 | 纯机械重命名；与 host global 冲突的取 `Obj` 后缀。 |
| 10 | [#48905](https://github.com/anomalyco/opencode/pull/48905) **fix(cli)** 支持 mise 管理的升级与卸载 | 关闭 [#36572](https://github.com/anomalyco/opencode/issues/36572)，mise 安装的 OpenCode 现在能自升级。 |

> 其他值得跟踪：  
> [#48978](https://github.com/anomalyco/opencode/pull/48978) 守护 `util/model.ts` 解析逻辑 · [#48867](https://github.com/anomalyco/opencode/pull/48867) 工作树 API 改为基于 projectID · [#48423](https://github.com/anomalyco/opencode/pull/48423) 用单一 transport 偏好取代 websocket 标志位 · [#43460](https://github.com/anomalyco/opencode/pull/43460) 用 schema 自有 instance 解码插件工具输入 · [#48724](https://github.com/anomalyco/opencode/pull/48724) macOS Beta 迁移到 Stable DMG · [#47637](https://github.com/anomalyco/opencode/pull/47637) 文档替换过时的 antigravity 插件推荐 · [#47913](https://github.com/anomalyco/opencode/pull/47913) 新增印尼语 README

---

## 📈 功能需求趋势

从近 24 小时活跃的 50 个 Issue 中可归纳出以下方向：

1. **UI/布局回归（热度最高）**  
   经典双栏布局被强制移除后，用户对"易访问性 + workspace + 多 worktree"的依赖集中爆发。`#37012`、`#48882`、`#48835` 形成连锁反馈，建议官方至少提供 "legacy layout" 开关。

2. **多 Provider 兼容与配额**  
   Ollama 挂起、xAI 列表缺失、Copilot 配额异常消耗、Gemini 错误分类。开发者期待更鲁棒的 provider 适配层与统一的超时/重试默认值。

3. **会话可靠性与重试策略**  
   `ECONNRESET` 之外的网络错误被吞、Desktop 5 分钟 Headers Timeout、流式生成期间 `time_updated` 停滞——三条线索都指向"会话生命周期状态机"需要更细的事件投影。

4. **Code Mode 能力扩展**  
   二进制类型、解释器统一、命名规整三连击，标志 Code Mode 进入"补齐基础语义"阶段；未来重点是 binary-at-extension-boundary 的安全语义。

5. **macOS 桌面体验集中爆发**  
   启动崩溃、iCloud 同步后目录失效、Tab 快捷键缺失、Beta→Stable 迁移流程——围绕 macOS 的 UX/QA 是 9 月的明显热点。

6. **国际化与文档治理**  
   印尼语 README 翻译、Antigravity 插件推荐替换为 `opencode-agy-auth`——社区对官方文档的本地化与及时性开始有主动贡献意愿。

---

## 🧑‍💻 开发者关注点

- **新版本破坏性 UX 决策缺乏回退机制**

</details>

<details>
<summary><strong>jcode</strong> — <a href="https://github.com/1jehuang/jcode">1jehuang/jcode</a></summary>

<think>The user wants me to generate a Chinese daily report for the jcode community based on GitHub data. Let me analyze the data carefully.

Key observations:
- No releases in past 24 hours
- 16 issues updated in past 24 hours (some closed, some open)
- 8 PRs updated in past 24 hours (all open)
- Date: 2026-09-15

Let me categorize:

**Closed Issues (resolved):**
- #1221 - Built-in deepseek route drops images
- #1223 - Agents treat timeout as seconds (Anthropic OAuth)
- #1234 - api-bridge panics on empty sessions directory

**Open Issues - Important ones:**
- #972 - Follow-ups from #941: MCP dispatch_name issues (8 comments, oldest active)
- #1226 - Cursor provider model failures (7 comments)
- #802 - MCP 30s timeout hardcoded (6 comments)
- #745 - Package/extension system feature request (4 comments)
- #1239 - Cursor account quota/usage semantics (3 comments)
- #1258 - Cursor AgentService native transport
- #1257 - Self-dev build identity

**Newer open issues (less activity):**
- #1255 - symlink skills instead of copying
- #1254 - Dedicated PowerShell agent tool
- #1252 - Daemon startup fails on missing runtime dir
- #1250 - Shift+Enter in tmux
- #1249 - Visible swarm spawn fails
- #1248 - Deferred model switch issues

**PRs:**
- #1256 - Gemini fixes (thought_signature, 429 retry, compaction)
- #1261 - Cursor AgentService tools and MCP
- #1263 - Plugin system upgrade-safe
- #1262 - Self-dev build identity
- #1260 - Versioned external provider protocol
- #1259 - MCP normalized tool collisions fix
- #1253 - Runtime directory fix
- #1251 - Tmux extended keys fix

Key trends:
1. MCP (Model Context Protocol) issues are prominent
2. Cursor provider integration
3. Plugin/extension system
4. Windows compatibility (PowerShell)
5. Provider protocol versioning

Let me draft the report now. I need to be detailed and professional.

For the Issues section, I should pick 10. Let me pick the most important:
1. #972 - MCP dispatch_name (highest comments, oldest)
2. #1226 - Cursor provider models failing
3. #802 - MCP 30s timeout
4. #745 - Package/extension system
5. #1239 - Cursor quota/usage
6. #1258 - Cursor AgentService transport
7. #1257 - Self-dev build identity
8. #1255 - Skills symlinking
9. #1254 - PowerShell tool
10. #1252 - Daemon runtime dir (has matching PR #1253)
Plus maybe #1249 - swarm spawn, #1250 - tmux extended keys, #1248 - model switch

For 10 PRs, all 8 are listed but I should pick 10... wait, there are only 8. Let me re-read - "共 8 条" - yes 8 PRs. I'll cover all 8.

Actually the request says "挑选 10 个重要的 PR" but there are only 8. I'll list all 8.

Let me write this out in Chinese, professional tone.</think>

# jcode 社区动态日报
**日期：** 2026-09-15 ｜ **数据周期：** 过去 24 小时

---

## 📌 今日速览

过去 24 小时内 jcode 仓库无新版本发布，但社区活跃度显著上升——共 **16 个 Issue** 与 **8 个 PR** 处于更新状态。当日主题高度集中在三块：**Cursor 提供商的 MCP 与原生传输能力建设**（#1258 / #1261 / #1239）、**Gemini 多回合工具调用稳定性修复**（#1256）以及**插件化与外部 Provider 协议设计**（#1260 / #1263）。一批"小而实"的体验类 Bug 也快速获得修复（tmux 扩展键、daemon 启动路径、Skills 符号链接），反映社区对生产可用性的关注持续升温。

---

## 🚀 版本发布

**无新版本发布。** 仓库主线仍为 `v0.84.0`（57d5878）。今日 #1256 等 PR 均基于该基线，未触发新版本 tag。

---

## 🔥 社区热点 Issues（Top 10）

1. **#972 — MCP dispatch_name 三处遗留问题**（OPEN）｜[链接](https://github.com/1jehuang/jcode/issues/972)
   - 跟 #941 闭环后仍未消化的"尾巴"：两处 `dispatch_name` 调用点、MCP 工具名静默冲突、`complete_simple` 仍在丢弃带内错误。**评论 8 条**，是 24h 内评论量最高的现存议题，体现社区对 MCP 命名一致性的关切。

2. **#1226 — Cursor provider 大批模型 `ERROR_BAD_MODEL_NAME`**（OPEN）｜[链接](https://github.com/1jehuang/jcode/issues/1226)
   - 除 `composer-*` 与裸 gemini id 外，几乎所有 Cursor 实时目录中的模型都立即报错 `Unknown model ID`。Cursor 集成是近期主线方向，问题影响面广，**评论 7 条**。

3. **#802 — MCP 全局硬编码 30s 超时**（OPEN）｜[链接](https://github.com/1jehuang/jcode/issues/802)
   - 所有 `tools/call` 共用一个 30 秒超时，无任何配置入口。问题自 #617 起已被识别但仍未根治，是 MCP 生态落地的关键瓶颈，**评论 6 条**。

4. **#745 — 插件/扩展包系统（类 Pi packages）**（OPEN）｜[链接](https://github.com/1jehuang/jcode/issues/745)
   - 提议一等的 skill / tool / provider / command 打包与安装体系，社区已有 4 条实质讨论，是平台化方向的代表性 Feature Request。

5. **#1239 — 暴露 Cursor 账号配额与用量语义**（OPEN）｜[链接](https://github.com/1jehuang/jcode/issues/1239)
   - 针对 Cursor 账户池，强调"只通过公开 API 报告"的边界，反对通过 cookie / undocumented endpoint 推断个人 OAuth 配额——一次对**合规与可观测性**边界的重要提议。

6. **#1258 — Cursor AgentService 原生传输需 MCP 桥接**（OPEN）｜[链接](https://github.com/1jehuang/jcode/issues/1258)
   - 与 PR #1261 配套：jcode 现有 Cursor 传输无法稳定执行 MCP 工具，需补齐原生 HTTP/2 流处理与工具 round-trip。

7. **#1257 — Self-dev 升级需跨通道暴露稳定 build identity**（OPEN）｜[链接](https://github.com/1jehuang/jcode/issues/1257)
   - 关联 #917、#799 的更窄范围提案：客户端、shared-server 升级通道、诊断三端需共享一致的构建身份以便回滚。

8. **#1255 — `~/.jcode/skills` 应支持符号链接而非拷贝**（OPEN）｜[链接](https://github.com/1jehuang/jcode/issues/1255)
   - 首启动将 64 个 skill 全量复制，浪费磁盘且割裂更新。提议允许 symlink，UX 改进明显。

9. **#1254 — Windows 专属 PowerShell agent tool**（OPEN）｜[链接](https://github.com/1jehuang/jcode/issues/1254)
   - 当前 `bash` 工具在 Windows 下走 `cmd.exe /C`，丢失 pipe/grep/MSYS 路径等能力。提议编译期分发独立 PowerShell 分支，是 Windows 体验的代表性呼声。

10. **#1252 — Daemon 在 `JCODE_RUNTIME_DIR` 不存在时启动失败**（OPEN）｜[链接](https://github.com/1jehuang/jcode/issues/1252)
    - spawn lock 在父目录创建之前获取，导致 ACP 启动同样失败。已有对应修复 PR #1253，是典型的"小修复、高杠杆"问题。

**其他值得关注：** [#1250 tmux Shift+Enter](https://github.com/1jehuang/jcode/issues/1250)、[#1249 visible swarm spawn 版本匹配失败](https://github.com/1jehuang/jcode/issues/1249)、[#1248 `/model` 延迟切换导致路由竞态](https://github.com/1jehuang/jcode/issues/1248)。

**已闭环：**
- [#1221](https://github.com/1jehuang/jcode/issues/1221) DeepSeek flash 图片输入被丢弃
- [#1223](https://github.com/1jehuang/jcode/issues/1223) Agent 把 bash `timeout` 误当作秒（Anthropic OAuth）
- [#1234](https://github.com/1jehuang/jcode/issues/1234) `api-bridge` 在空 `sessions/` 目录 panic

---

## 🛠️ 重要 PR 进展（8 个，全量）

1. **#1256 — Gemini：保留 `thought_signature`、突发 429 重试、启用 compaction**｜[链接](https://github.com/1jehuang/jcode/pull/1256)
   - 三处修复直指"第 1 轮 OK、第 2 轮崩"的典型 Gemini 故障模式：持久化工具调用时丢失签名、突发限流未退避、未启用上下文压缩。

2. **#1261 — Cursor 原生 AgentService 工具与 MCP 桥接**｜[链接](https://github.com/1jehuang/jcode/pull/1261)
   - 配套 #1258：解码 Connect gzip/KV/context 帧，路由原生 tool calls，让 Cursor 能稳定执行 jcode MCP 工具。

3. **#1263 — 升级安全的 Provider 扩展与 GitHub 插件生命周期**｜[链接](https://github.com/1jehuang/jcode/pull/1263)
   - 引入"外部 provider 子进程 + metadata-only GitHub 安装"的双层扩展体系，定义版本化协议与兼容性边界。

4. **#1262 — Self-dev 暴露升级安全的 build identity**｜[链接](https://github.com/1jehuang/jcode/pull/1262)
   - 报告源码 revision / build channel / protocol identity，固化不可变二进制通道与 promote 流程，便于诊断与回滚。

5. **#1260 — 版本化的外部 Provider 子进程协议**｜[链接](https://github.com/1jehuang/jcode/pull/1260)
   - 让用户维护的外部 provider 能跨 jcode 升级存活，不被绑死嵌入主二进制——是生态扩展性的奠基性变更。

6. **#1259 — 防止 MCP 工具归一化名冲突**｜[链接](https://github.com/1jehuang/jcode/pull/1259)
   - 归一化产生重复时生成确定性唯一别名，同步覆盖 eager / cached / live 注册表，保留服务端限定的 dispatch identity。呼应 #972 中"silent MCP name collisions"。

7. **#1253 — Daemon 启动前先创建 runtime 目录**｜[链接](https://github.com/1jehuang/jcode/pull/1253)
   - 修复 #1252：在打开 spawn lock 前创建父目录，含回归测试覆盖创建、互斥与清理。

8. **#1251 — TUI 向 tmux 主动请求扩展键**｜[链接](https://github.com/1jehuang/jcode/pull/1251)
   - 关闭 #1250：让 `extended-keys on` 下 Shift+Enter 正确插入换行，不再依赖 `extended-keys always` 强制启用。

---

## 📈 功能需求趋势

综合 16 条 Issue 的主题，可归纳出以下五个最受关注的演进方向：

| 方向 | 代表 Issue | 趋势判断 |
|---|---|---|
| **插件/扩展生态** | #745、#1257、#1260、#1263 | 🔥 **最强信号**：版本化 provider 协议 + 包管理器已被主线 PR 落地，社区进入"扩展化"阶段 |
| **Cursor 提供商深度集成** | #1226、#1239、#1258 / #1261 | 🔥 **强信号**：模型可用性、配额可见性、原生传输三轮并进，是当前最活跃的提供商工作线 |
| **MCP 健壮性** | #972、#802、#1259 | 命名冲突、超时、归一化三处老问题继续被推动，与 #617/#941 形成长期治理线 |
| **跨平台 / 终端体验** | #1250 / #1251、#1254、#1255 | Windows PowerShell、tmux 扩展键、skills 符号链接——"边缘平台体验"成为新焦点 |
| **自升级 / 多通道一致性** | #1249、#1257、#1262 | swarm、shared-server、客户端三端的版本/构建身份对齐，是大规模部署的前置条件 |

> IDE 集成、性能、新模型支持并非本周热点——社区当前的兴奋点明显在 **provider 协议可扩展性** 与 **MCP 工程化**。

---

## 💡 开发者关注点

1. **MCP 是"必答题"，但仍是脆弱点。**
   - 30s 硬超时（#802）、dispatch_name 散落（#972）、归一化冲突（#1259）三件事反复出现，表明 MCP 在 jcode 中已不再是实验特性，而是被实际生产负载依赖——任何一处边界缺失都会暴露。

2. **Cursor 集成的"最后一公里"被聚焦。**
   - 从模型名硬编码（#1226）、配额/用量语义（#1239）到原生 HTTP/2 传输（#1258/#1261），社区希望把 Cursor 从"能用"推进到"敢用在生产"。

3. **平台化诉求强烈但克制。**
   - #745 提出完整包系统，#1260/#1263 给出"版本化子进程协议 + metadata-only 安装"的最小可行方案——既不绑死进主二进制，也不放任第三方随意接入，体现成熟的工程取舍。

4. **小体验问题获得高优先级修复。**
   - tmux Shift+Enter（#1251）、daemon runtime 目录（#1253）、skills 复制 vs symlink（#1255）——维护者对"日常使用摩擦"的响应速度快，社区对此反馈正向。

5. **合规边界被显式提出。**
   - #1239 明确反对"通过 cookie 抓取推断个人 OAuth 配额"，标志着社区开始把"可观测性 = 合规可观测性"当作底线，而非技术细节。

---

*日报基于 GitHub 公开数据自动生成。统计区间：2026-09-14 → 2026-09-15。*

</details>

<details>
<summary><strong>pi</strong> — <a href="https://github.com/earendil-works/pi">earendil-works/pi</a></summary>

<think>
Let me analyze the GitHub data for the pi project (earendil-works/pi) and create a comprehensive daily report for September 15, 2026.

Let me organize the data:

**Releases (past 24 hours):** None

**Issues (50 total, showing top 30 by comments):**
1. #9298 [CLOSED] Grok 403 mislabeled as "OpenAI API error" - 7 comments
2. #8752 [OPEN] bedrock-converse: usage.input not normalized - 6 comments, 5 👍
3. #9210 [OPEN] Anthropic Messages via gateway: cacheWrite1h never set - 5 comments
4. #9211 [OPEN] vercelGatewayRouting is inert - 5 comments
5. #9391 [OPEN] After compaction, stale signed thinking blocks replayed - 4 comments
6. #7824 [CLOSED] Extension-side turn termination - 4 comments
7. #9306 [OPEN] Aborted turn leaves unmatched toolCall blocks - 4 comments
8. #9051 [OPEN] session_compact custom message misses overflow retry - 3 comments
9. #6995 [CLOSED] pi-tui: overlays render behind kitty inline images - 3 comments
10. #4423 [CLOSED] Add command API to switch cwd - 3 comments
11. #9457 [OPEN] bedrock-converse: 1h cache writes bill at 5m rate - 3 comments, 4 👍
12. #9440 [OPEN] --session-id with fresh id scans all transcripts - 3 comments
13. #9354 [OPEN] Prompt templates with invalid frontmatter silently dropped - 3 comments
14. #9610 [CLOSED] confirm/select dialog body clipped on short terminals - 2 comments
15. #9596 [CLOSED] Two concurrent -c runs append to single session - 2 comments
16. #9602 [CLOSED] Compaction can overflow by including thinking messages - 2 comments
17. #7920 [CLOSED] Interrupted Thinking included in Summary - 2 comments
18. #9599 [CLOSED] Completed tool result missing when listener throws - 2 comments
19. #9453 [CLOSED] macOS Local Network Privacy blocks pi - 2 comments
20. #9447 [CLOSED] Mouse wheel scrolls 1 line per notch - 2 comments
21. #9437 [CLOSED] opencode-go requires x-opencode-session header - 2 comments
22. #9444 [OPEN] openai-completions drops Gemini thoughtSignature - 2 comments
23. #9590 [CLOSED] openai-completions: image base64 corrupted - 2 comments
24. #9588 [CLOSED] Preserve literal arguments in agent prompt templates - 2 comments
25. #9585 [CLOSED] "fail to touch upstream" not retryable - 2 comments
26. #9609 [CLOSED] Session timestamps local time with Z suffix - 1 comment
27. #9608 [CLOSED] Export detectSupportedImageMimeType - 1 comment
28. #9606 [CLOSED] TUI crash: wordWrapLine infinite recursion - 1 comment
29. #9603 [CLOSED] /thinking autocomplete missing - 1 comment
30. #9433 [CLOSED] transformMessages inlines unbounded cross-model thinking - 1 comment

**PRs (26 total, showing top 20):**
1. #9548 [OPEN] Mid conversation system messages - by mitsuhiko
2. #9601 [OPEN] fix: avoid transcript scans for exact session IDs
3. #9607 [CLOSED] fix: apply provider hooks to summarization streams
4. #9605 [CLOSED] feat: add GMI Cloud provider
5. #9604 [CLOSED] feat: report the shell's pid
6. #8732 [CLOSED] fix: preserve reasoning_content on cross-model replay into DeepSeek
7. #9594 [CLOSED] feat: add Gemini-only Antigravity provider
8. #9274 [OPEN] fix: preserve indentation in rendered diffs
9. #9591 [CLOSED] feat: export image bytes MIME detector
10. #8474 [CLOSED] feat: bundle Node runtime
11. #9589 [CLOSED] fix: type user input items in Responses API
12. #9351 [OPEN] Fix the edit preview flicker on remote edits
13. #4318 [CLOSED] Moves changelog ack state out of settings.json
14. #6534 [OPEN] feat: add developer message role
15. #9329 [OPEN] fix: detect Orca terminals as Kitty-image capable
16. #9584 [CLOSED] fix: select the sole scoped model when cycling
17. #9434 [OPEN] feat: allow extensions to append to session system prompt
18. #9582 [CLOSED] duplicate of #9584
19. #9501 [OPEN] fix: resolve Windows shells from installation directories
20. #9504 [OPEN] fix: accept Windows Store shell aliases

Now let me identify key themes:

1. **Provider/Billing bugs**: Multiple issues about cache writes being mis-billed (1h vs 5m), especially with Bedrock (#8752, #9457, #9210). This is a major theme.

2. **Cross-model thinking/reasoning**: Multiple issues about thinking blocks being mishandled across models (#9391, #9444, #9433, #8732)

3. **Compaction/Session management**: Issues around compaction breaking context (#9602, #9306, #9051, #9391)

4. **TUI/UX issues**: Several TUI issues (#6995, #9610, #9447, #9606, #9603)

5. **New providers**: Antigravity (#9594), GMI Cloud (#9605)

6. **Extension system improvements**: #7824, #9434, #9354

7. **Windows compatibility**: #9501, #9504

Let me structure the report well. I'll write in Chinese as requested.

The most important issues by impact:
- #8752 (5 👍) - bedrock billing bug, very impactful
- #9457 (4 👍) - similar bedrock billing
- #9210 - gateway 1h cache write billing
- #9211 - Vercel gateway routing config
- #9391 - thinking blocks after compaction (Anthropic)
- #9306 - aborted turn leaves unmatched toolCalls
- #9298 - Grok error mislabeling (CLOSED)
- #9444 - Gemini thoughtSignature drop
- #9602 - compaction overflow with thinking
- #9440 - --session-id performance

Important PRs:
- #9548 (by mitsuhiko) - mid conversation system messages - architectural change
- #9601 - performance fix for session ID lookup
- #9605 - new GMI Cloud provider
- #9594 - new Antigravity provider
- #8474 (mitsuhiko) - bundle Node runtime - startup performance
- #6534 (mitsuhiko) - developer message role
- #9434 - extension system prompt append
- #9501, #9504 - Windows compatibility
- #9351 - edit preview flicker fix
- #9274 - preserve indentation in diffs

Let me write this out now.
</think>
# pi 社区动态日报 · 2026-09-15

> 数据来源：[github.com/earendil-works/pi](https://github.com/earendil-works/pi)
> 统计周期：过去 24 小时更新

---

## 📌 今日速览

今日 pi 仓库的活跃焦点集中在**多 provider 计费与缓存一致性**问题，AWS Bedrock、Vercel AI Gateway、Anthropic Messages 等适配器在 1h/5m 缓存写入、usage 归一化上暴露出多处账单/上下文偏差；与此同时，由 `@mitsuhiko` 主推的 #9548（Mid conversation system messages）与 #6534（developer role）正在推动会话状态模型的架构演进，多个新 provider（GMI Cloud、Google Antigravity）合并入仓，Windows 兼容性的两批 PR（#9501、#9504）也接近可合入状态。

---

## 🚀 版本发布

**过去 24 小时无新 Release。** 最新可参考版本仍为此前 0.85.1 系列（按 issue 中提及的版本号推断）。

---

## 🔥 社区热点 Issues

| # | 标题 | 状态 | 关键意义 |
|---|------|------|----------|
| [#8752](https://github.com/earendil-works/pi/issues/8752) | bedrock-converse: `usage.input` 未按模型族归一化，导致误报 cache miss、input 成本翻倍 | OPEN · 👍5 | Bedrock 上 `input` 在 Anthropic 系是 cache 净额、OpenAI 系是 cache 总额，但 `bedrock-converse` 直接透传 `inputTokens`，造成**真实账单翻倍**。社区反应强烈（5 赞），是当前计费类最高赞 issue。 |
| [#9457](https://github.com/earendil-works/pi/issues/9457) | bedrock-converse: 1h cache writes 按 5m 费率计费 | OPEN · 👍4 | 同 #8752 同一根因的另一面：`cacheDetails` 中存在的 1h TTL 写入被忽略，全部按 1.25× 较低价计算，**用户实际支付低于预期**——既影响成本透明度也影响预算告警。 |
| [#9210](https://github.com/earendil-works/pi/issues/9210) | Anthropic Messages via Vercel Gateway：`cacheWrite1h` 永远为 0，1h 写入按 5m 计费 | OPEN | `message_delta` 才到达的 1h 计数在流式路径中丢失，与 #9457 互为表里。 |
| [#9211](https://github.com/earendil-works/pi/issues/9211) | `vercelGatewayRouting` 在 `vercel-ai-gateway` provider 上是"死开关" | OPEN | 文档承诺的 only/order 路由只挂在 `openai-completions` 适配器，而网关目录全是 `anthropic-messages`——文档与实现脱节。 |
| [#9391](https://github.com/earendil-works/pi/issues/9391) | 压缩后过期签名 thinking block 每轮重放，Anthropic 持续返回 `prefix_binding_mismatch` | OPEN · 👍1 | 每次请求都被打掉 15 个 thinking 块、污染日志，长期会话可观测性受损。 |
| [#9306](https://github.com/earendil-works/pi/issues/9306) | `stopReason: error/aborted` 留下未配对 `toolCall`，后续 `runAgentLoopContinue` 被 provider 拒 | OPEN · inprogress | 影响任何在中途失败的工具调用链，重试语义不完整。 |
| [#9298](https://github.com/earendil-works/pi/issues/9298) | Grok 403 被错标为 "OpenAI API error"（`openai-responses` 格式化器） | CLOSED · 7 评论 | 错误归因误导排障，已关闭但讨论密集，提示 formatter 层需要 provider 标签透出。 |
| [#9444](https://github.com/earendil-works/pi/issues/9444) | `openai-completions` 丢弃 Gemini `thoughtSignature`，多轮工具调用第二轮 400 | OPEN | 跨模型 thinking 元数据丢失是当前最难解的"全链路"问题之一。 |
| [#9602](https://github.com/earendil-works/pi/issues/9602) | 压缩包含此前被省略的 thinking 消息，触发溢出 | CLOSED | 与 #9391 同一类问题，揭示 **thinking 在压缩路径上的边界条件** 尚未统一处理。 |
| [#9440](https://github.com/earendil-works/pi/issues/9440) | `--session-id` 用新 ID 时全量扫描 4K+ transcript，启动 ~16s | OPEN | 4K session 规模下性能可感知，#9601 PR 已尝试修复。 |

**社区反应观察：** 计费/缓存正确性（Bedrock、Vercel Gateway、Anthropic）和跨模型 thinking 透传是当前**两大争议焦点**；TUI/UX 类问题数量多但讨论较短。

---

## 🛠 重要 PR 进展

| # | 标题 | 状态 | 说明 |
|---|------|------|------|
| [#9548](https://github.com/earendil-works/pi/pull/9548) | Mid conversation system messages | OPEN · by @mitsuhiko | **架构级改动**：把 system 提示词和工具变更写进 transcript，恢复/分支跳转时能重建环境，并保留缓存前缀。直接缓解 #9391、#9602 这类"中途状态漂移"问题。 |
| [#6534](https://github.com/earendil-works/pi/pull/6534) | feat(ai): add developer message role | OPEN · by @mitsuhiko | 引入 `developer` 角色，对应 RFC 0054。是 Anthropic/OpenAI 越来越强调的"system vs developer"分层需要的底层支持。 |
| [#8474](https://github.com/earendil-works/pi/pull/8474) | feat(coding-agent): bundle Node runtime | CLOSED · by @mitsuhiko | 改打包策略以**大幅减少启动期文件 IO**，特别缓解 Windows Defender 下的卡顿。 |
| [#9601](https://github.com/earendil-works/pi/pull/9601) | fix: 精确 session ID 不再扫描整段 transcript | OPEN | 直接修复 #9440，用同步精确查找替掉全量扫描；同 PR 内做 micro-bench。 |
| [#9594](https://github.com/earendil-works/pi/pull/9594) | feat(ai): add Gemini-only Antigravity provider | CLOSED | 恢复 Antigravity 的 Gemini 订阅入口（first-class OAuth）。 |
| [#9605](https://github.com/earendil-works/pi/pull/9605) | feat(ai): add GMI Cloud provider | CLOSED | 新增 GMI Cloud（OpenAI-Chat-Completions 聚合网关）作为内建 provider，零新增 API 实现。 |
| [#9434](https://github.com/earendil-works/pi/pull/9434) | feat: 允许 extension 向 session system prompt 追加内容 | OPEN | 关闭 #9432，让 `session_start` 钩子返回 `systemPromptAppend`，解决扩展想"加注脚"但只能覆写的痛点。 |
| [#9501](https://github.com/earendil-works/pi/pull/9501) | fix: 在 Windows 上从安装目录解析 shell | OPEN | 统一并文档化 Windows 二进制查找路径，整体体验改善。 |
| [#9504](https://github.com/earendil-works/pi/pull/9504) | fix: 接受 Windows Store 的 shell 别名 | OPEN | 用 `accessSync(F_OK)` 替代 `existsSync`，绕过 nodejs/node#36790 的 EACCES。 |
| [#9274](https://github.com/earendil-works/pi/pull/9274) | fix: 在渲染 diff 中保留缩进 | OPEN | 编辑工具行内渲染器在删除行内容时丢失缩进，影响 diff 可读性。 |
| [#9351](https://github.com/earendil-works/pi/pull/9351) | Fix the edit preview flicker on remote edits | OPEN | 远程 edit 注入时本地"编辑失败"红色提示先闪一下再被覆盖，附有视频复现。 |
| [#9329](https://github.com/earendil-works/pi/pull/9329) | fix(tui): 把 Orca 识别为支持 Kitty 图像的终端 | OPEN | 让 Orca 内嵌图片能正常渲染。 |

---

## 📈 功能需求趋势

从过去 24 小时的 issue 标签与摘要中可归纳出 6 条主线：

1. **多 provider 计费与缓存一致性**（热度最高）
   Bedrock / Vercel Gateway / Anthropic Messages 在 `usage.input` 归一化、`cacheWrite1h` 计数、网关路由配置上同时出现问题（#8752、#9457、#9210、#9211）。这反映社区对**生产账单准确性**的强诉求。

2. **跨模型 thinking/reasoning 透传**
   跨模型切换时签名 / reasoning_content / thoughtSignature 的保留成为反复出现的问题（#9391、#9444、#9433、#8732），是当前架构上最难闭环的方向。

3. **Session / Compaction 正确性**
   压缩后 thinking 块重放、压缩内容溢出、中断 turn 留下未配对 toolCall（#9602、#9306、#9051、#9440）——长会话稳定性进入深水区。

4. **新 provider / 新传输适配**
   GMI Cloud (#9605)、Antigravity Gemini (#9594)、opencode-go (#9437)、DeepSeek-family (#8732)——社区在主动拓宽 pi 的多模型覆盖面。

5. **Extension API 深化**
   结束 turn 的扩展钩子、cwd 切换、system prompt 追加（#7824、#4423、#9434）——扩展机制从"可观察"走向"可控制"。

6. **TUI / 终端兼容性**
   Orca 终端图像、短终端对话框裁剪、鼠标滚轮行数、CJK grapheme 递归（#9329、#9610、#9447、#9606）——TUI 体验打磨持续进行。

---

## 🧑‍💻 开发者关注点（高频痛点）

- **错误归因可信度**：#9298 显示，把 Grok 403 错标为 "OpenAI API error" 直接误导排障；社区希望 formatter 层透出真实 provider 名。
- **静默失败**：#9354 指出 prompt template 的非法 frontmatter 被默默丢弃（skills 路径会告警），要求**对称的诊断信息**。
- **多端并发安全**：#9596（两个 `pi -c` 同时跑写一个 session）、#9453（macOS 本地网络权限）说明 pi 在"无 UI 守护"场景下的健壮性需要补强。
- **Windows 体验**：从性能（#8474）、shell 解析（#9501/#9504）到 Store 别名（#9504），Windows 兼容性是结构性投入。
- **时间戳语义**：#9609 指出 `.jsonl` 用本地时间却带 `Z` 后缀，看似小但会影响跨时区调试。

</details>

---
*本日报由 [Big Model Radar](https://github.com/96loveslife/big_model_radar) 自动生成。*
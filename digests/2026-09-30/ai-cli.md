# AI CLI 工具社区动态日报 2026-09-30

> 生成时间: 2026-09-30 04:58 UTC | 覆盖工具: 8 个

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

<think>The user wants me to generate a horizontal comparison analysis report based on the daily dynamics of various AI CLI tools. Let me organize the information from all the tools and create a comprehensive comparison report.

Let me extract key data points from each tool:

**Claude Code:**
- Release: v2.1.285 (CLAUDE_CODE_DISABLE_WEB_FETCH, claude --desktop, claude plugin configure)
- Top issue engagement: #67609 (26 comments, 45 likes), #42700 (24 comments, 34 likes)
- 8 PRs (security-focused sec-default series)
- Focus: Long-context advisor issues, TTS/voice mode, MCP robustness, security hardening

**OpenAI Codex:**
- Releases: 0.159.0/0.159.1/0.159.2 + alpha lines
- Default model: GPT-6.1 Sol
- 50 issues, ~50 PRs (mostly app-server protocol)
- Focus: Usage metering anomalies, Windows compatibility, MCP enterprise ID-JAG

**Gemini CLI:**
- Releases: v0.62.0, v0.63.0-preview.0, v0.64.0-nightly
- 50 issues, ~20 PRs
- Focus: Agent/subagent orchestration reliability, AST-aware code reading

**GitHub Copilot CLI:**
- Releases: v1.0.90-2 to v1.0.90-5 (4 patches)
- 50 issues, 1 PR
- Focus: MCP ecosystem, Windows/WSL/ARM64, session management

**Kimi Code CLI:**
- No activity

**OpenCode:**
- No releases
- 50 issues, many PRs (~20)
- Focus: AI Provider error classification (Together/DeepInfra/Nova/xAI/Z.ai/Workers AI/Novita), TUI memory issues, Windows compatibility

**jcode:**
- Releases: v0.89.1/0.89.2/0.89.3 (3 versions)
- 35 issues, 20 PRs
- Focus: iOS stability, Cursor integration, Provider failover

**pi:**
- Releases: v0.99.0 (Codemode/MCP), v0.99.1 (GPT-6.1 Sol default)
- 50 issues, ~30 PRs
- Focus: MCP ecosystem maturation, OAuth/Login, llama.cpp local models

Now let me structure the comparison report:

1. 生态全景
2. 各工具活跃度对比 - table
3. 共同关注的功能方向
4. 差异化定位分析
5. 社区热度与成熟度
6. 值得关注的趋势信号

Let me also note:
- Both Claude Code and OpenAI Codex are integrating GPT-6.1 Sol / claude-fable-5 (interesting model naming convergence)
- Multiple tools (Claude Code, OpenAI Codex, Gemini CLI, Copilot CLI, pi) all have MCP-related work
- Windows compatibility is a common pain point
- Voice mode / TTS is emerging as a major theme
- Provider error classification / resilience is a key theme in OpenCode

Let me write a comprehensive comparison report.</think>

# AI CLI 工具生态横向对比报告
**2026-09-30**

---

## 一、生态全景

当前主流 AI CLI 工具已全面进入 **Agent 编排深化期**：Claude Code 加速企业级安全（sec-default）落地、OpenAI Codex 推进服务端权威权限与企业 ID-JAG 协议、Copilot CLI 密集发布 v1.0.90 五个补丁修复 MCP 链路，Gemini CLI 与 pi 则以 Agent/Subagent 与本地模型为差异化突破口。**MCP（Model Context Protocol）已成为跨工具的事实标准基础设施**，跨平台兼容（尤其是 Windows）、用量/费用可视化、Provider 容错是当前社区共识的三大痛点。新一代旗舰模型（GPT-6.1 Sol、claude-fable-5、Opus 5.5）正同步在各 CLI 中铺开，而 **长上下文下的稳定性** 与 **语音/无障碍** 成为新一波集中诉求。

---

## 二、各工具活跃度对比

| 工具 | Releases (24h) | Issues | PRs | 关键变化 | 社区热度信号 |
|------|---------------|--------|-----|----------|-------------|
| **Claude Code** | 1（v2.1.285） | ~30 高活跃 | 8（sec-default 安全加固系列） | WebFetch 关闭、桌面入口、插件配置 | 极高（#67609 单 issue 26 评论 45 👍） |
| **OpenAI Codex** | 6（0.159.x 稳定线 + 0.160/0.161 alpha） | 50 | ~50（机器人提交为主） | GPT-6.1 Sol 默认、instant_interrupt、app-server 协议层重构 | 高（Windows 兼容与用量计量是焦点） |
| **Gemini CLI** | 3（v0.62.0/v0.63.0-preview/v0.64.0-nightly） | 50 | ~20 | 连接恢复重试指示器、a2a-server metadata 优化 | 中高（Agent 编排问题集中） |
| **Copilot CLI** | 4（v1.0.90-2/-3/-4/-5） | 50 | 1（OIDC trusted publishing） | MCP 修复 + 安全作用域细化 | 高（#1274 31 评论未关） |
| **Kimi Code CLI** | 0 | — | — | 无活动 | — |
| **OpenCode** | 0 | 50 | ~20 | 7+ Provider 错误分类、tool registry 同步 | 中高（Provider 集成是核心） |
| **jcode** | 3（v0.89.1/-2/-3） | 35 | 20 | Herdr 集成、Cursor MCP 修复、iOS 端 4 阻塞性 bug 一次性关闭 | 中（移动端发力） |
| **pi** | 2（v0.99.0/-1） | 50 | ~30 | Codemode+MCP、GPT-6.1 Sol 默认、llama.cpp managed 模式 | 中高（#7547 Windows 单 issue 69 评论） |

**活跃度梯队**：
- **第一梯队**（高频发布 + 高议题密度）：OpenAI Codex、Copilot CLI、Claude Code
- **第二梯队**（稳定节奏 + 议题活跃）：Gemini CLI、pi、jcode
- **第三梯队**（议题多但 PR/发布节奏放缓）：OpenCode

---

## 三、共同关注的功能方向

| 方向 | 涉及工具 | 具体诉求 |
|------|----------|----------|
| **MCP 协议鲁棒性** | Claude Code、OpenAI Codex、Copilot CLI、pi、jcode | MCP 工具命名规范、会话恢复、elicitation、protocol 边角 case（Claude Code #41973/#96733/#98256；Codex #49478/#49473；pi v0.99.0 后 #10188/#10192） |
| **Windows / 跨平台兼容性** | Claude Code、OpenAI Codex、Copilot CLI、OpenCode、pi | 反斜杠编码、PowerShell 路径继承、WSL2 ARM64、终端关闭残留进程、TLS ClientHello 等系统性短板（Codex #27117 开放近 4 月、OpenCode #52203、Claude Code #85856） |
| **用量/费用可视化与控制** | Claude Code、OpenAI Codex、OpenCode | 状态栏配额显示、agent 启动确认、周配额 hook 限制（Claude Code #98230/#95313；Codex #41220/#40067/#38157） |
| **Provider 容错与多源路由** | OpenAI Codex、OpenCode、jcode | 402 余额切换、529/5xx 重试、错误分类统一化（OpenCode 单日 8 个 PR 集中处理；jcode #1597/#1599） |
| **Anthropic / Claude 协议一致性** | jcode、pi、OpenCode | tool_use/tool_result 顺序错位、非 ASCII 损坏、自动压缩失败（jcode #1571/#1565；pi #10074/#10045） |
| **语音 / TTS / 无障碍** | Claude Code、OpenAI Codex | Remote Control 语音模式、Cowork 语音与 MCP 冲突（Claude Code #42700/#97954；Codex #49437） |
| **企业级安全治理** | Claude Code、OpenAI Codex | 组织 deny 规则、managed settings 插件白名单、MCP 授权作用域细化（Claude Code #98080/#98083；Copilot CLI `--mcp-github-auth`） |

---

## 四、差异化定位分析

| 工具 | 功能侧重 | 目标用户 | 技术路线 |
|------|----------|----------|----------|
| **Claude Code** | 企业级安全、长任务编排、桌面/IDE 集成 | 企业开发团队 + 重度 Claude 用户 | 插件/Mod 体系、sec-default 分层、单一旗舰模型深耕 |
| **OpenAI Codex** | 多模型目录、跨平台 desktop/IDE、移动端配对 | OpenAI 生态 + 多模型 + 移动用户 | app-server 协议驱动、MCP 企业 ID-JAG、instant_interrupt 即时中断 |
| **Gemini CLI** | Agent 编排、AST 感知代码理解、a2a-server | 重度 Agent 用户 + Google Cloud 生态 | Google 内部生态（a2a/mcp-server）、Gemini 3 原生 POSIX 工具链 |
| **Copilot CLI** | IDE 深度集成、GitHub 工作流、企业 Agent | GitHub Enterprise + Copilot 订阅用户 | Skills + MCP 双生态、npm tarball 自动发布、Session-scoped 审批 |
| **OpenCode** | 多 Provider 抽象、开源可扩展性、Desktop + TUI 双形态 | 自托管 / 多模型混用 / 隐私敏感用户 | TypeScript 全栈、Provider plugin 体系、UI 高度可定制 |
| **jcode** | iOS 端可用性、Cursor IDE 深度集成、Herdr 集群 | 移动端 + Cursor 重度用户 + 集群运维 | Herdr 集成、Commits widget、iOS ATS 适配 |
| **pi** | Codemode 本地脚本化、本地模型（llama.cpp）、UI 极简 | 本地优先 + 隐私优先 + 自部署用户 | 内置 JS 沙箱调用工具、Orca/Wezterm 终端适配、Atelier 云代理 |

**关键差异化信号**：

- **Claude Code 与 OpenAI Codex** 正在头部收敛：都建立了"模型层 + 协议层 + 企业治理"的完整栈，区别在 Claude 走"插件/Mod"路线，Codex 走"app-server 协议驱动"路线。
- **pi 与 OpenCode** 代表"本地优先 / Provider 中立"的极简派，适合不想绑定单一生态的开发者。
- **jcode 与 Gemini CLI** 分别从"移动端"和"Agent 编排"切入长尾场景，避免在头部正面对决。
- **Copilot CLI** 是 GitHub 生态的"守门员"，节奏明显受 GitHub 平台策略影响（如 OIDC trusted publishing、session-scoped 审批）。

---

## 五、社区热度与成熟度

### 热度指标
- **峰值 Issue 评论数**：pi #7547 (69) > Copilot CLI #1274 (31) > OpenAI Codex #37458 (56) > Claude Code #67609 (26)
- **高赞存量 Issue**：Claude Code #42700 (34 👍)、OpenAI Codex #27117 (29 👍)、jcode #1571
- **PR 提交密度**：OpenAI Codex ≈ OpenCode ≈ pi > Gemini CLI > jcode > Claude Code > Copilot CLI

### 成熟度判断

| 成熟度阶段 | 工具 | 信号 |
|------------|------|------|
| **平台化阶段** | Claude Code、OpenAI Codex、Copilot CLI | 已形成"协议 + 安全治理 + 多模型目录"完整栈；社区反馈多围绕**协议细节与安全边界** |
| **工程化深水区** | Gemini CLI、pi | 集中处理 Agent/Subagent 编排可靠性、provider 协议一致性；正从"能用"进入"好用" |
| **功能扩展期** | jcode、OpenCode | 快速叠加特性（iOS、Herdr、新 Provider），但稳定性与跨平台仍是核心痛点 |
| **沉寂期** | Kimi Code CLI | 24 小时无活动 |

**社区情绪特征**：
- Claude Code、OpenAI Codex 的开放 issue 多为**协议边界/安全治理**类高质量讨论
- Gemini CLI、pi 的开放 issue 多为**功能落地不完整 / 状态语义错误**类工程问题
- Copilot CLI、OpenCode 的开放 issue 多为**跨平台 / 端点兼容性**类碎片化报告
- jcode 的开放 issue 多为**iOS 端连接生命周期 / Provider 容错**类生产可用性问题

---

## 六、值得关注的趋势信号

### 趋势 1：MCP 从"可选协议"演变为"基础设施"
- 现象：Claude Code / Codex / Copilot CLI / pi 全部在过去一周涉及 MCP 协议层改动
- 信号：MCP 已成跨工具生态层；新工具接入 MCP 的边际成本正在迅速降低
- 建议：开发者应将 MCP server 视为"一等公民"扩展点

### 趋势 2：服务端权威权限模型（server-authoritative permissions）崛起
- 现象：OpenAI Codex PR #49472 明确将 TUI 权限让位于 app server；Claude Code sec-default 强调组织 deny 规则凌驾个人 mod
- 信号：单一客户端不再能完全控制权限边界，企业部署正强制"服务端权威"模式
- 建议：自托管工具需同步建立"客户端声明 → 服务端验证 → 审计回流"链路

### 趋势 3：用量透明度成为付费用户的新刚需
- 现象：OpenAI Codex 用量计量元 issue #41220 汇集 50+ 案例；Claude Code #98230、#95313 共同呼吁周配额可见
- 信号：订阅模型已普及，但**配额消耗不透明**正在成为头号信任危机
- 建议：工具方应主动暴露"模型 × token × 时间"三维用量面板

### 趋势 4：Provider 中立层（AI Gateway 抽象）成为新竞争点
- 现象：OpenCode 单日 8+ PR 集中处理 Provider 错误分类；pi 把 llama.cpp 做成 managed server；jcode 实现 402 自动切换
- 信号：单一 provider 风险（限流、欠费、上游故障）正在被工具层系统性吸收
- 建议：自研 Agent 系统应优先选 Provider 中立层，避免锁定

### 趋势 5：长上下文稳定性成为下一代模型分水岭
- 现象：Claude Code #67609（claude-fable-5 100K+ advisor 失效）、pi #10045（Opus 5.5 自动压缩失败）、OpenCode #35863（200K 硬编码）
- 信号：200K+ 上下文的"最后一公里"仍不稳定，工具层需补齐 fallback 策略
- 建议：在长任务场景，工具应实现"压缩失败 → 切片 → 总结"的多级回退

### 趋势 6：语音 / TTS 成为下一波功能爆发点
- 现象：Claude Code #42700（34 👍）长期呼声 + #97954 回归；OpenAI Codex PR #49437 本地音频设备选择
- 信号：CLI 正从"纯键盘终端"扩展到"语音 + 远程键控"，无障碍与移动场景驱动
- 建议：可关注 Codex Desktop 与 Cowork 的语音/MCP 兼容进展，作为领先指标

### 趋势 7：Windows 仍是"二等公民"高地
- 现象：5 个工具同时报告 Windows 兼容性问题，#27117 开放近 4 月未根治
- 信号：Windows 平台开发者被工具方系统性低估；WSL2 + ARM64 是新增长点
- 建议：跨平台工具应建立 Windows 专项 QA 矩阵，将"控制台闪烁"、"PATH 污染"、"pty 复用"列为常规回归项

---

## 七、给开发者的行动建议

| 角色 | 建议 |
|------|------|
| **个人开发者** | 优先关注 **pi / OpenCode**（Provider 中立 + 本地模型），避免单一生态锁定；MCP 工具可作为扩展"乐高"组合 |
| **团队 / 企业 Lead** | 优先评估 **Claude Code** 与 **OpenAI Codex** 的服务端权限模型（sec-default、app-server authoritative），关注 MCP 授权作用域精细化 |
| **AI 工具开发者** | 重点学习 **MCP 协议鲁棒性**（Codex #49478、Claude Code #41973）、**Provider 错误分类**（OpenCode 系列 PR）、**Windows 平台 QA 矩阵** |
| **产品 / 投资观察** | 关注三个信号：(1) 用量透明度面板普及度；(2) 服务端权威权限模型落地；(3) 语音/TLS 一体化是否能跨越"MCP 冲突"瓶颈 |

---

*报告基于 Claude Code / OpenAI Codex / Gemini CLI / GitHub Copilot CLI / OpenCode / jcode / pi 仓库 2026-09-29 至 2026-09-30 的公开数据生成。Kimi Code CLI 当日无活动。*

---

## 各工具详细报告

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills 社区热点

> 数据来源: [anthropics/skills](https://github.com/anthropics/skills)

<think>The user wants me to analyze the Claude Code Skills community data and generate a report. Let me carefully go through the data and structure my analysis.

Looking at the data:

**Pull Requests (top 20 shown, all OPEN status):**
1. #1298 - fix(skill-creator): isolate trigger evals and handle Windows - MartinCajiao
2. #1742 - fix(mcp-builder): support mcp>=2 streamable_http_client - Kuldeeep18
4. #1771 - proofcore-contract-auditor for smart contract notarization - ProofCore-Protocol
5. #1734 - Detect orphaned docx comments - rohitjain25
6. #1703 - Add md2video-audio skill - 70v-Yoyo
7. #1245 - Add notion-spec-to-implementation and quantitative-resume-auditor - mrdesouzaphd-cmyk
8. #1792 - fix(docx): report LibreOffice timeout - TINGyu123644
9. #525 - Add pyxel skill for retro game development - kitao
10. #514 - Add document-typography skill - PGTBoos
11. #1681 - fix(skill-creator): support direct execution - Kuldeeep18
12. #1615 - Add scnet-hpc skill - lql341
13. #1607 - Update claude-api skill: mark four retired model IDs - adi-IL
14. #822 - feat: add AWT (AI Watch Tester) - ksgisang
15. #538 - fix(pdf): correct case-sensitive file references - Lubrsy706
16. #486 - Add ODT skill — OpenDocument - GitHubNewbie0
17. #210 - Improve frontend-design skill - justinwetch
18. #83 - Add skill-quality-analyzer and skill-security-analyzer - eovidiu
19. #1776 - Add blast-radius skill - kishormorol
20. #723 - feat: add testing-patterns skill - 4444J99
21. #541 - fix(docx): prevent tracked change w:id collision - Lubrsy706

Note: All comment counts and thumbs up are "undefined" in the data provided. This is strange - the user says "按评论数排序" but the comment counts are all undefined/0. I should note this limitation.

Wait, looking more carefully - the comment counts are all "undefined" and 👍 are all 0. This seems like the data itself didn't include actual comment counts. The user said "按评论数排序" but the data shows them as undefined. I should work with what's available and note this.

**Issues (sorted by comments, showing top 15):**
1. #492 - Security: Community skills distributed under anthropic/ namespace (43 comments, 👍2) - OPEN
2. #228 - Enable org-wide skill sharing in Claude.ai (16 comments, 👍8) - OPEN
3. #556 - run_eval.py: claude -p never triggers skills (12 comments, 👍7) - OPEN
4. #62 - All my skills have disappeared (10 comments, 👍2) - OPEN
5. #1329 - Proposing compact-memory skill (9 comments, 👍0) - OPEN
6. #202 - skill-creator should be updated to best practice (8 comments, 👍1) - CLOSED
7. #412 - Skill proposal: agent-governance (6 comments, 👍0) - CLOSED
8. #189 - document-skills and example-skills install identical content (6 comments, 👍9) - OPEN
9. #1487 - claude-api skill eagerly injects ~156k tokens (4 comments, 👍0) - OPEN
10. #1394 - skill-creator: eval-viewer escapeHtml XSS (4 comments, 👍2) - OPEN
11. #1390 - mcp-builder: evaluation.py scores 0/N (4 comments, 👍0) - OPEN
12. #1385 - [Proposal] Reasoning Quality Gate Pipeline (4 comments, 👍1) - OPEN
13. #1383 - skill-creator silent benchmark failures (4 comments, 👍0) - OPEN
14. #1175 - Concerns regarding Security and Context Window (4 comments, 👍0) - CLOSED
15. #29 - Usage with bedrock (4 comments, 👍0) - OPEN

Now let me think about the actual most discussed items based on real data:
- For PRs: All show "undefined" comments and 0 thumbs up. So I cannot truly rank by comments. I'll need to either note this limitation or fall back to other signals (recency, topic importance).
- For Issues: Real data is available.

The user wants:
1. **热门 Skills 排行** - 5-8 PRs with highest comments/attention
2. **社区需求趋势** - Trends from Issues
3. **高潜力待合并 Skills** - Active PRs not yet merged
4. **Skills 生态洞察** - One sentence summary

Since PR comment data is missing, I should:
- Be transparent about this data limitation
- Use other signals like creation/update recency, topic relevance, and issue linkage
- Highlight the PRs that have the most substantive technical content

Let me organize my analysis:

**热门 PRs (based on substantive content and recency rather than missing comment data):**

Top candidates that stand out:
1. #1298 - skill-creator trigger eval fixes (sophisticated, recent updates)
2. #1742 - mcp-builder compatibility fix (linked to issue #1668)
3. #1771 - proofcore Web3 smart contract auditing (new domain)
4. #1703 - md2video-audio (creative workflow automation)
5. #525 - Pyxel retro game development (creative/niche)
6. #514 - document-typography (high utility, addresses common AI problem)
7. #1681 - skill-creator package_skill.py fix
8. #822 - AWT E2E testing
9. #1776 - blast-radius (destructive operation checklist)
10. #723 - testing-patterns (comprehensive testing coverage)
11. #83 - skill-quality-analyzer & skill-security-analyzer (meta skills)

Let me pick the most substantive ones (5-8):
1. #1298 - skill-creator fixes (most technical depth)
2. #1703 - md2video-audio (creative productivity)
3. #514 - document-typography (universal utility)
4. #1771 - proofcore (Web3 expansion)
5. #525 - Pyxel (creative niche)
6. #822 - AWT (testing automation)
7. #723 - testing-patterns (testing methodology)
8. #1776 - blast-radius (safety checklist)

**社区需求趋势 from Issues:**
1. Trust/Authentication concerns: #492 (43 comments) - impersonation of official skills
2. Enterprise distribution: #228 (16 comments) - org-wide sharing
3. Core skill-creator issues: #556, #202, #1383, #1394, #1298 - skill creation/evaluation is buggy
4. Context window bloat: #1487 - claude-api skill too large
5. MCP integration: #1742, #1390 - MCP server compatibility issues
6. Document security: #1175 - SharePoint access control
7. Memory/state management: #1329 - compact-memory
8. Governance/safety: #412 - agent-governance
9. Quality assurance: #1385 - Reasoning Quality Gate
10. Platform compatibility: #29 - Bedrock integration, #1298 - Windows compatibility
11. Skill deprecation: #189 - duplicate skills

**高潜力待合并 PRs:**
- #1298 (skill-creator fix, addresses multiple bugs)
- #1742 (mcp-builder fix, addresses real compatibility issue)
- #1703 (md2video-audio, zero-cost creative tool)
- #525 (Pyxel, niche but complete)
- #822 (AWT, E2E testing)
- #1776 (blast-radius, fills safety gap)

**生态洞察:**
The community is most focused on:
- Fixing the foundation (skill-creator's broken eval system)
- Expanding into specialized domains (Web3, creative tools, testing)
- Addressing safety and trust issues (skill impersonation, namespace abuse)
- Improving discoverability and quality of skills

Let me now draft the report in Chinese (since the user wrote in Chinese).

I should make sure to be honest about the data limitations (PR comments showing as undefined) but still provide a substantive analysis based on available signals.

Let me write this out properly.</think>

# Claude Code Skills 社区热点报告（2026-09-30 截止）

> 📌 **数据说明**：本次抓取的 PR 数据中**评论数与点赞数均为未定义/0**，因此"热门 PR"排序依据调整为：内容深度、问题关联度（是否修复热门 Issue）、近期活跃度、以及与社区核心痛点的相关性。

---

## 一、热门 Skills 排行（PR）

### 1. 🥇 #1298 — skill-creator: 触发评估隔离与 Windows / 运行时兼容
- **作者**：@MartinCajiao｜**创建**：2026-06-10｜**最近更新**：2026-09-16
- **状态**：OPEN
- **内容**：修复 `skill-creator` 触发评估模块三大顽疾——多 worker 命令探测相互竞争；Windows 下 `select()` 调用子进程管道失败；非相关工具意外终止扫描；运行时失败被错误归类为 "non-trigger"。
- **社区热度点**：直接对应 Issue #1383（6 项 silent failure）与 #556（0% 触发率），是 skill-creator 体系最底层、最受诟病的可靠性问题。
- **链接**：https://github.com/anthropics/skills/pull/1298

### 2. 🥈 #1703 — md2video-audio：Markdown → MP4 自动配音
- **作者**：@70v-Yoyo｜**创建**：2026-09-01｜**最近更新**：2026-09-15
- **状态**：OPEN
- **内容**：零成本 Skill，通过 Marp 把 Markdown 转幻灯片，再叠加拟真人声配音生成 MP4，覆盖文档讲解/技术分享/营销视频场景。
- **社区热度点**：属于"内容生产自动化"领域的爆款级用例，定位非常清晰（零成本 + 一键式），与 Claude Code 当前偏向"工程类 Skill"的生态形成互补。
- **链接**：https://github.com/anthropics/skills/pull/1703

### 3. 🥉 #1771 — proofcore-contract-auditor：Web3 智能合约审计与公证
- **作者**：@ProofCore-Protocol｜**创建**：2026-09-15｜**最近更新**：2026-09-16
- **状态**：OPEN
- **内容**：对 Solidity / Rust 智能合约做静态分析，并将证明哈希锚定到 TON 区块链，使用零存储 Merkle 协议。
- **社区热度点**：首个**面向 Web3 / 链上场景**的 Skill，扩展了 Skills 生态的边界到加密领域；也展示了"专业垂类 + 外部协议集成"的新模式。
- **链接**：https://github.com/anthropics/skills/pull/1771

### 4. #525 — Pyxel：复古游戏开发
- **作者**：@kitao（Pyxel 作者本人）｜**创建**：2026-03-05｜**最近更新**：2026-09-22
- **状态**：OPEN（已搁置 6 个月，近期重新活跃）
- **内容**：面向 Python 复古游戏开发，提供无头输入驱动运行、帧直接检查、任务特定状态校验等能力。
- **社区热度点**：作者本人是 Pyxel 维护者，质量有保障；属于"创意/教育"垂类，展示了 Skills 在游戏开发场景的可行性。
- **链接**：https://github.com/anthropics/skills/pull/525

### 5. #514 — document-typography：AI 生成文档的排版质量控制
- **作者**：@PGTBoos｜**创建**：2026-03-04｜**最近更新**：2026-03-13
- **状态**：OPEN
- **内容**：防止孤词换行（1–6 词溢出到下一行）、寡头段落、编号错位等典型排版问题——"用户很少主动要求好的排版，但每个人都深受其害"。
- **社区热度点**：解决的是**所有 Claude 文档输出都会遇到**的痛点，覆盖面极广。
- **链接**：https://github.com/anthropics/skills/pull/514

### 6. #822 — AWT（AI Watch Tester）：AI 驱动的 E2E 测试
- **作者**：@ksgisang｜**创建**：2026-03-31｜**最近更新**：2026-09-19
- **状态**：OPEN
- **内容**：开源工具，给 Claude 提供视觉与浏览器控制能力，实现零代码 E2E 测试自动生成。
- **社区热度点**：测试自动化是开发者最关注的场景之一，"零代码 + 视觉驱动"差异化明显；与 Issue #1385（Reasoning Quality Gate）方向互补。
- **链接**：https://github.com/anthropics/skills/pull/822

### 7. #723 — testing-patterns：全面测试方法论 Skill
- **作者**：@4444J99｜**创建**：2026-03-22｜**最近更新**：2026-09-21
- **状态**：OPEN
- **内容**：覆盖 Testing Trophy 模型、AAA 模式、React 组件测试、Service mocking 等完整测试栈。
- **社区热度点**：与 #822（自动化执行）形成"方法论 + 工具"的测试双件套。
- **链接**：https://github.com/anthropics/skills/pull/723

### 8. #1776 — blast-radius：批量/破坏性操作前的检查清单
- **作者**：@kishormorol｜**创建**：2026-09-17｜**最近更新**：2026-09-18
- **状态**：OPEN
- **内容**：覆盖"归档用户、撤销权限、删除行、批量发邮件"等关键时刻的 checklist，填补"查询对 ≠ 操作对"的认知盲区。
- **社区热度点**：与 Issue #412（agent-governance）思路高度契合，是 Safety 类 Skill 的新代表。
- **链接**：https://github.com/anthropics/skills/pull/1776

---

## 二、社区需求趋势（Issues 提炼）

| 趋势方向 | 代表 Issue | 关注度 | 核心诉求 |
|---------|-----------|-------|---------|
| 🔒 **Skills 信任与命名空间安全** | #492（43 评论） | ⭐⭐⭐⭐⭐ | 社区 Skill 借 `anthropic/` 命名空间冒充官方，存在信任边界滥用；需要明确的官方/社区分级标识机制 |
| 🏢 **企业级分发与协作** | #228（16 评论，👍8） | ⭐⭐⭐⭐ | Skills 需要支持组织内一键共享，而非下载 → Slack → 手动上传的土法流程 |
| 🛠 **skill-creator 体系可靠性** | #556（12）、#1383、#1394、#202 | ⭐⭐⭐⭐ | 触发评估 0% 触发、benchmark silent failure、XSS 等——元工具本身不稳，阻碍整个生态扩张 |
| 📚 **上下文窗口治理** | #1487（~156k tokens 单调用耗尽） | ⭐⭐⭐ | `claude-api` Skill 一次性注入过多内容，需要按需/分页加载机制 |
| 🔌 **MCP 协议兼容性** | #1390、#1742（PR） | ⭐⭐⭐ | mcp>=2.0 API 改名、`TextContent` 不可 JSON 序列化——MCP 集成栈仍粗糙 |
| 🧠 **代理状态与记忆压缩** | #1329（compact-memory） | ⭐⭐⭐ | 长任务代理的"自我笔记"占大量上下文，需要符号化压缩 |
| 🛡 **Agent 治理与质量门** | #412、#1385 | ⭐⭐⭐ | 政策执行、威胁检测、推理质量门——Safety & QA 类 Skill 大量缺位 |
| 🌐 **平台兼容性** | #29（Bedrock）、#1298（Windows） | ⭐⭐ | 非 Claude Code 原生平台、Windows、跨平台脚本兼容性问题频出 |
| 🧹 **Skill 元数据治理** | #189（重复 Skill）、#1603（已退役模型） | ⭐⭐ | `document-skills` 与 `example-skills` 内容重复，模型退役标识未及时同步 |

---

## 三、高潜力待合并 Skills

按"问题真实度 + 技术完整度 + 落地可预期性"排序：

| 优先级 | PR | Skill | 预期落地理由 |
|-------|-----|------|--------------|
| 🟢 高 | #1298 | skill-creator 评估修复 | 修复的是 #556、#1383 的核心问题，社区痛点已饱和，Anthropic 内部团队也在关注 |
| 🟢 高 | #1742 | mcp-builder 兼容性 | 紧跟 MCP 2.0 协议演化，是 Skills ↔ MCP 生态的咽喉；关联 Issue #1668 |
| 🟢 高 | #1703 | md2video-audio | 场景明确、实现完整、零成本，营销/教程场景天然适配 |
| 🟡 中 | #1776 | blast-radius | 填补 Safety 类空白，与 agent-governance 提案方向一致 |
| 🟡 中 | #514 | document-typography | 解决"所有文档都会遇到"的通病，合并后立即惠及全部用户 |
| 🟡 中 | #822 | AWT | 测试自动化赛道空白，与 #723 互补 |
| 🟠 观察 | #525 | Pyxel | 垂类精准但用户基数较小，需观察是否破圈 |
| 🟠 观察 | #1771 | proofcore | 跨生态整合，技术新颖但商业合规复杂度高 |

---

## 四、Skills 生态洞察（一句话总结）

> **当前社区在 Skills 层面最集中的诉求，是"基础设施与安全"的双重补位——一方面要求 `skill-creator`、MCP 集成、上下文治理等底层机制尽快稳定可靠，另一方面强烈呼吁建立 Skills 的**信任边界**（命名空间防伪）与**安全护栏**（批量操作的 blast-radius、agent-governance），创意/垂类 Skill 的扩展反而是这一诉求被满足后的自然外溢。**

---

*报告基于 50 条热门 PR + 50 条热门 Issue 样本；如需补充按真实评论数排序的版本，建议先校对 PR 评论字段的抓取口径。*

---

<think>The user wants me to generate a Chinese-language daily report for the Claude Code community based on the GitHub data provided. The date is 2026-09-30. Let me analyze the data carefully.

Let me first understand the structure:
1. Today's overview - 2-3 sentences summarizing the most important news
2. Version releases - summarize v2.1.285 if there are new versions
3. Community hot issues - pick 10 most noteworthy issues
4. Important PRs - pick 10 important PRs
5. Feature request trends - extract the most focused feature directions
6. Developer concerns - summarize pain points and high-frequency needs

Let me analyze the data:

**Releases:**
- v2.1.285 with CLAUDE_CODE_DISABLE_WEB_FETCH env var, `claude --desktop` command, `claude plugin configure <plugin>` command

**Top Issues by comments (most discussed):**
1. #67609 - Advisor tool unavailable on claude-fable-5 with transcripts >100K tokens (26 comments, 45 likes) - HIGH ENGAGEMENT
2. #42700 - TTS readback of responses + voice mode (24 comments, 34 likes) - HIGH ENGAGEMENT
3. #98145 - Korean language not respected in intermediate prompts (22 comments, 0 likes) - dup
4. #41973 - MCP Agent tool empty agent list in mcp serve mode (18 comments, 13 likes) - HIGH IMPACT
5. #95313 - Require user confirmation before spawning expensive agents (7 comments, 0 likes)
6. #85856 - Windows/Git Bash backslash issue (6 comments, 4 likes)
7. #78162 - Atomic write to settings.json symlink fails (5 comments, 2 likes)
8. #82916 - JetBrains/IntelliJ plugin terminal output truncated (3 comments, 1 like)
9. #97954 - Cowork Windows voice mode breaks tools/MCP (2 comments, 0 likes)
10. #78136 - /cost Command Resets on Session Resume [VS Code] (CLOSED, 2 comments)
11. #89126 - Setting to hide permission-mode footer indicator (2 comments, 4 likes)
12. #98256 - MCP elicitation auto-declined in VSCode (2 comments, 0 likes)
13. #94000 - Cross-session send cap not configurable (2 comments, 3 likes)
14. #96546 - Workflow agent() returns content from concurrent session (2 comments, 0 likes)
15. #84789 - CLAUDE_CODE_DISABLE_TERMINAL_TITLE ignored for background sessions (2 comments, 1 like)
16. #93699 - Desktop app no way to restore git/branch bar (2 comments, 0 likes)
17. #98230 - Per-model weekly rate limits in status line (1 comment, 1 like) - HIGH ENGAGEMENT
18. #91110 - Expose advisor tool's caching parameter (1 comment, 2 likes)
19. #88715 - Windows running claude returns bun's help menu (1 comment, 0 likes)
20. #96733 - HTTP MCP session recovery double initialize (1 comment, 0 likes)
21. #95233 - managed-settings.json sandbox.network.deniedDomains (CLOSED)
22. #97297 - Bash tool children inherit TUI's real pty (regression in 2.1.281) (1 comment)
23. #98302 - Scheduled task chats always get "⚡" title prefix (CLOSED, invalid)
24. #89835 - Plan mode subagent reminder broken (1 comment)
25. #90494 - MCP server started after Claude Code never connected (1 comment)
26. #98320 - GitHub integration (0 comments, today)
27. #98319 - Desktop app PR merged/closed events (0 comments, today)
28. #98318 - timeFormat 12-hour setting not passed to model (0 comments, today)
29. #98317 - Plugin directory resubmit notes (0 comments, today)
30. #98316 - Dark mode visual distinction for user messages (0 comments, today)

**Top PRs:**
1. #98275 - agents-md send loaded line to debug log (CLOSED)
2. #97241 - sec-default system prompt sections (CLOSED)
3. #97334 - sec-default rows continue past user tier (OPEN)
4. #97293 - mods carry process.run truncation flags (OPEN)
5. #98080 - sec-default settings deny over plugin allow (CLOSED)
6. #98083 - sec-default allowManagedModsOnly (CLOSED)
7. #96434 - security-guidance denied/secret files (OPEN)
8. #97952 - ci security hardening for GitHub Actions (OPEN)

Now let me identify the most important issues. I need to consider:
- Engagement (comments + likes)
- Impact (security, major features)
- Recency
- Diversity of topics

For 10 most noteworthy issues, I'll select:

1. **#67609** - Most discussed (26 comments, 45 likes) - advisor tool broken on claude-fable-5 with long transcripts
2. **#42700** - High engagement (24 comments, 34 likes) - TTS/voice mode feature request
3. **#41973** - MCP Agent tool issue (18 comments, 13 likes) - core functionality
4. **#98145** - Internationalization issue (22 comments) - significant localization problem
5. **#95313** - Cost/agent confirmation feature (7 comments) - cost control theme
6. **#85856** - Windows backslash bug (6 comments, 4 likes) - cross-platform
7. **#78162** - settings.json symlink issue (5 comments, 2 likes) - file system
8. **#98230** - Per-model rate limits exposure (1 comment, 1 like but high impact)
9. **#97954** - Cowork Windows voice mode MCP break (2 comments) - new feature regression
10. **#94000** - Cross-session send cap (2 comments, 3 likes) - workflow control

For PRs, only 8 were listed (not 10+), so I'll include all of them with notes.

For feature trends, I see:
- Voice mode / TTS (a big theme: #42700, #97954, #84789 indirectly)
- Cost control & rate limits (#95313, #98230, #91110)
- MCP improvements (#41973, #96733, #98256, #90494)
- Desktop app UX (#93699, #98319, #98318)
- Cross-platform issues (Windows, Linux, macOS specific)
- Internationalization / Language (#98145, #98318)
- Security/permissions (#96434, #97334, #98080, #98083, #97241)

For developer concerns:
- Model instability on long contexts
- Cross-platform compatibility (especially Windows)
- MCP protocol edge cases
- Voice mode regressions
- Cost/usage visibility

Let me write a comprehensive, professional report. I'll keep it concise but informative.

Let me think about the version section. v2.1.285 is mentioned but appears to be a future date scenario (2026-09-30). The release notes are partial. I'll note what's visible.

Actually, looking more carefully, the date in the user's prompt is 2026-09-30, and the data references that date too. So this is a future scenario - but I should treat it as the actual data and write the report as if reporting on this day.

Let me now draft the report in Chinese:

---

# Claude Code 社区日报 — 2026-09-30

## 今日速览
今日 Claude Code 发布 v2.1.285，带来 WebFetch 关闭开关和桌面应用入口。社区热点集中在长上下文下 `claude-fable-5` 模型 advisor 工具的稳定性、语音模式与 MCP 工具的兼容性回归，以及权限/费用控制的细化需求。多项 sec-default 系列安全加固 PR 在 24 小时内集中合并。

## 版本发布
**v2.1.285**
- 新增 `CLAUDE_CODE_DISABLE_WEB_FETCH` 环境变量，可关闭 WebFetch 工具
- 新增 `claude --desktop` 命令，直接打开桌面应用到当前目录，或配合 `--continue` / `--resume <id>`
- 新增 `claude plugin configure <plugin>` 命令，用于插件配置展示
- 更多变更请参见 Release Notes

## 社区热点 Issues

1. **#67609** — advisor tool 在 `claude-fable-5` 长上下文下不可用 ⭐26 评论 / 45 👍
   当 transcript 超过约 100K tokens 时，advisor 工具返回 `unavailable`，100K 以下正常。是今日热度最高的 issue，影响 Fable 模型在长任务中的可用性。

2. **#42700** — TTS 语音播报 + Remote Control 语音模式 ⭐24 评论 / 34 👍
   长期呼声较高的无障碍与多模态需求，希望 Remote Control 会话支持语音输入和 TTS 响应播报。

3. **#98145** — 模型在工具调用间隙忽略用户的语言指令 ⭐22 评论
   即使 memory 与 settings 中明确指定韩文输出，VS Code 扩展（Opus 5.5）在工具调用之间的中间提示仍频繁回到英文。反映上下文/指令遵循的长程稳定性问题。

4. **#41973** — `claude mcp serve` 模式下 MCP Agent 工具返回空 agent 列表 ⭐18 评论 / 13 👍
   影响以 MCP server 形式部署 Claude Code 的工作流，Agent 工具功能受限。

5. **#95313** — 高成本 Agent 启动前需要用户确认 ⭐7 评论
   围绕"费用与权限双重保险"的诉求，避免静默 fan-out 出昂贵的子 agent。

6. **#85856** — Windows/Git Bash 反斜杠被静默减半 ⭐6 评论 / 4 👍
   Bash 工具在 MSYS2/MSVCRT 编码差异下把成对反斜杠折半，引号也无法避免，影响 Windows 用户日常使用。

7. **#78162** — `~/.claude/settings.json` 为 symlink-to-symlink 时原子写入失败 ⭐5 评论 / 2 👍
   dotfile 管理场景常见配置（`stow` / `chezmoi` 等）踩坑，触发 EROFS/EACCES。

8. **#98230** — 在状态栏暴露模型周配额 + 无人值守会话用量控制 ⭐1 评论 / 1 👍
   用户描述一个未看管 session 在 24 小时内消耗了 39% 个人周配额和 54% Fable 周配额，希望状态栏可见且支持 hook 限制。

9. **#97954** — Windows Cowork：开启语音模式后 MCP/工具立即不可用 ⭐2 评论
   语音模式新功能的明显回归，影响 Windows 用户的核心工作流。

10. **#94000** — 跨 session 发送上限（每条人类输入 10 条）不可配置 ⭐2 评论 / 3 👍
    Claude Desktop Code tab 里的 `ccd_session_mgmt` 限制过于严苛，且忽略入站的人类消息，限制了多 session 编排。

## 重要 PR 进展

1. **#98275** — `agents-md` 把已加载行写入 debug log（已合并关闭）
   让 AGENTS.md 加载信息在调试日志可见（无 CLAUDE.md 时），与 2.1.286 一致。

2. **#97241** — sec-default：系统 prompt 分段不越过 user tier（已合并）
   组织级 sec-default 下，个人插件不再影响系统 prompt 的分段顺序。

3. **#97334** — sec-default：会话保留行不越过 user tier（开放中）
   紧随 #97241 的姊妹 PR，需等待引擎侧 `session.append` 事件上线。

4. **#97293** — mods 携带 `process.run` 截断标志与 `fs.list` 的 mtimeMs（开放中）
   引擎先发能力声明，CLI 后对齐，避免 installed CLI 与声明字段不一致。

5. **#98080** — sec-default：settings deny 规则凌驾插件 allow/ask（已合并）
   关键安全加固：组织 deny 规则不再被个人插件覆盖；可在 managed settings 中选择 opt-out。

6. **#98083** — sec-default：`allowManagedModsOnly` 受管选项（已合并）
   组织可只允许自家 mods，拒绝个人安装的 mods。

7. **#96434** — security-guidance：把 deny/secret 文件挡在 reviewer 之外（开放中）
   修复 #96276：commit/push 审查 prompt 由 `git diff`/`git show` 拼装，可能把被 deny 的 secrets 文件送入模型上下文。

8. **#97952** — CI：调用 Claude 的 GitHub Actions 加固（开放中）
   为 `claude-issue-triage.yml`、`claude-dedupe-issues.yml`、`claude.yml` 增加出站防火墙 runner，防止凭据外泄。

## 功能需求趋势

- **语音模式 / TTS**：成为本月最显眼的功能方向（#42700、#97954、#84789 间接相关），社区期望 Remote Control、Cowork 与桌面 app 三端打通。
- **费用与用量可视化**：#95313、#98230、#91110 共同呼吁暴露 advisor caching 参数、周配额状态栏、昂贵 agent 启动确认。
- **MCP 协议鲁棒性**：会话恢复（#96733）、启动后连接（#90494）、MCP serve 模式（#41973）、elicitation（#98256）四类边界场景密集反馈。
- **桌面 / IDE 集成**：#93699、#98319、#98318 等集中在桌面 app 的 PR 事件流、状态栏、`timeFormat` 透传等细节。
- **权限与安全**：#95313、#96434、#97334、#98080、#98083、#95233 显示企业级安全默认（sec-default）与可见的费用/权限控制成为主线。
- **跨平台兼容性**：Windows 仍是痛点高发区（#85856、#88715、#97954、#97297）。

## 开发者关注点

- **长上下文稳定性**：在 100K+ transcript 上出现 advisor 工具不可用（#67609）、语言指令丢失（#98145），提示需要更稳健的"长程行为契约"。
- **新功能的回归风险**：v2.1.281 之后 Bash 子进程复用真实 pty 导致 ssh passphrase 提示卡住会话（#97297），Cowork + 语音模式让 MCP 工具集体下线（#97954）——发布节奏加快后回归测试覆盖被反复提及。
- **企业部署的"硬边界"**：开发者普遍希望 deny 规则、managed settings 的"插件白名单"（#98080/#98083/#95233）以及 reviewer 文件访问控制（#96434）能被稳定强制，而不是被个人 mod 绕过。
- **可见的成本信息**：从隐藏到可见（#98230、#95313）是新一波明确诉求，开发者希望"看得到、限得住"。
- **Windows 体验**：`MSYS2/MSVCRT` 编码、反斜杠、Bash 子进程 pty、bun 帮助菜单……Windows 仍是被反馈最多的平台。

---

让我再检查一下格式和细节，确认无误。

报告应该简洁专业，每条带链接。让我调整一下，确保链接都正确。

我看到 PR 总数只有 8 个而非 10 个以上，所以我需要挑选最重要的 8 个并注明总数。让我重新看一下用户要求："挑选 10 个重要的 PR"——但实际只有 8 个，所以我应该说明这点并挑选所有 8 个，或挑选最关键的 7-8 个。

我的初稿已经选了 8 个，合适。

格式上，我会用清晰的标题层级和列表。每条 issue 要附上链接。

让我最终确认一下链接的格式。链接在数据里已经给出，可以直接复用。

好的，让我整理最终版本。</think>

# Claude Code 社区日报 — 2026-09-30

## 今日速览

今日 Claude Code 发布 **v2.1.285**，带来 WebFetch 关闭开关、桌面应用入口 `claude --desktop` 与 `claude plugin configure` 命令。社区讨论热度最高的两件事是 **`claude-fable-5` 在 100K+ transcript 下 advisor 工具失效**（#67609）与 **TTS / 语音模式** 长期呼声（#42700）。同时一批 **sec-default 系列安全加固 PR 在 24h 内集中合并**，组织级权限/插件治理进入新阶段。

---

## 版本发布

**v2.1.285**
- 新增 `CLAUDE_CODE_DISABLE_WEB_FETCH` 环境变量，可全局关闭 WebFetch 工具
- 新增 `claude --desktop`，直接打开桌面应用到当前目录；可配合 `--continue` / `--resume <id>` 打开指定会话
- 新增 `claude plugin configure <plugin>` 用于展示插件配置
- 完整变更见 [Release Notes](https://github.com/anthropics/claude-code/releases/tag/v2.1.285)

---

## 社区热点 Issues

1. **[#67609](https://github.com/anthropics/claude-code/issues/67609)** — advisor tool 在 `claude-fable-5` 长上下文下不可用（26 评论 / 45 👍）
   当 transcript 超过 ~100K tokens 时 advisor 返回 `unavailable`；100K 以下正常。今日热度榜首，直接影响 Fable 模型长任务可用性。

2. **[#42700](https://github.com/anthropics/claude-code/issues/42700)** — TTS 响应播报 + Remote Control 语音模式（24 评论 / 34 👍）
   长期高赞需求，希望 Remote Control 会话支持语音输入与 TTS 回复，覆盖无障碍和移动场景。

3. **[#98145](https://github.com/anthropics/claude-code/issues/98145)** — 工具调用之间的中间提示忽视用户语言指令（22 评论）
   即便 memory + settings 都指定韩文输出，VS Code 扩展（Opus 5.5）在工具调用间隙仍反复回到英文，反映长程指令遵循的稳定性问题。

4. **[#41973](https://github.com/anthropics/claude-code/issues/41973)** — `claude mcp serve` 模式下 MCP Agent 工具返回空 agent 列表（18 评论 / 13 👍）
   影响把 Claude Code 部署为 MCP server 的工作流；Agent 工具功能不完整。

5. **[#95313](https://github.com/anthropics/claude-code/issues/95313)** — 高成本 agent 启动前需要用户确认（7 评论）
   围绕"费用 + 权限"双重保险，避免无人值守时静默 fan-out 昂贵子 agent。

6. **[#85856](https://github.com/anthropics/claude-code/issues/85856)** — Windows/Git Bash：反斜杠被

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

<think>Let me analyze the GitHub data for OpenAI Codex and create a structured daily report in Chinese for 2026-09-30.

Key observations:
1. New releases: rust-v0.161.0-alpha.3, rust-v0.160.0-alpha.6.1, rust-v0.159.2, rust-v0.159.1, rust-v0.159.0, plus more alpha versions
2. Notable new feature: GPT-6.1 Sol as default model in 0.159.1
3. Bug fix in 0.159.2: Windows console suppression
4. Major features in 0.159.0: instant_interrupt, new welcome screen

Issues analysis:
- Top issues are around rate limits/usage accounting inconsistencies (multiple high-comment issues)
- Windows-specific bugs are very prominent
- Authentication issues with Android pairing
- Sol 6.1 not appearing in Codex (timely with the new release)

PRs - all closed, mostly by copyberry[bot], covering:
- Thread prediction protocol
- MCP authorization
- Turn abort callbacks
- rmcp SDK for enterprise token exchange
- Server-authoritative permissions in TUI
- Login shell PATH restoration
- memrchr for JSONL scans
- Server retry advice
- Local audio device selection in TUI
- Bootstrap discovery preservation
- Analytics for daemon-launched app servers
- Log pruning
- Windows UNC paths
- ANSI warning log trimming
- Input text truncation
- Graceful shutdown trace filtering
- App-server time provider
- Tool call metadata comparison
- Exec-server session recovery
- Cyber access programs

Let me structure this as a professional daily report.</think>

# OpenAI Codex 社区动态日报
**日期：2026-09-30**

---

## 一、今日速览

今日 Codex 仓库迎来密集的版本迭代，**0.159 稳定版系列正式落地**：0.159.0 引入了 `instant_interrupt` 即时中断能力与全新欢迎界面，0.159.1 将 **GPT-6.1 Sol** 设为默认模型，0.159.2 则修复了 Windows 后台进程控制台闪烁问题。与此同时，**0.160 / 0.161 alpha 线持续滚动**，app-server 协议层迎来大量增强（包括 MCP 企业身份交换、线程预测协议、服务端权威权限模型等）。社区方面，**用量计量异常**与 **Windows 平台兼容性**仍是两大焦点话题。

---

## 二、版本发布

### 稳定线：rust-v0.159.x

**rust-v0.159.2** — Bug 修复
- 修复 Windows 平台 Codex 启动后台进程与沙箱命令时控制台窗口闪烁问题（[#49385](https://github.com/openai/codex/pull/49385)）

**rust-v0.159.1** — 新特性
- **GPT-6.1 Sol 正式成为默认模型**，同步接入 Bundled、AWS Bedrock Mantle、AWS Bedrock Runtime 三个模型目录（[#49323](https://github.com/openai/codex/pull/49323), [#49342](https://github.com/openai/codex/pull/49342)）

**rust-v0.159.0** — 新特性
- `instant_interrupt`（opt-in）：允许在模型响应或长时 code-mode 调用期间用新输入即时引导 Codex（[#48135](https://github.com/openai/codex/pull/48135), [#48141](https://github.com/openai/codex/pull/48141)）
- 新会话欢迎屏更紧凑，并新增轮次中/轮次后提示（[#48513](https://github.com/openai/codex/pull/48513), [#48562](https://github.com/openai/codex/pull/48562), [#48352](https://github.com/openai/codex/pull/48352)）
- 警告面板与提示系统优化（摘要截断）

### Alpha 线：rust-v0.160.x / v0.161.x

- **rust-v0.161.0-alpha.3** / **alpha.2** / **alpha.1**
- **rust-v0.160.0-alpha.6.1** / **alpha.6**

> Alpha 线集中围绕 app-server 协议、SDK 升级、auth 与 sso 等模块迭代，未给出具体用户侧 changelog。

---

## 三、社区热点 Issues（Top 10）

| # | Issue | 关注理由 | 评论 / 👍 |
|---|---|---|---|
| 1 | [#37458](https://github.com/openai/codex/issues/37458) **Windows 扩展启动失败** | 已关闭但热度最高（56 评论 / 13 👍），反映 Codex VSCode 扩展在 Windows 上的资源加载兼容性问题具有普遍性 | 56 / 13 |
| 2 | [#41220](https://github.com/openai/codex/issues/41220) **用量计量异常追踪元 Issue** | 由社区维护者建立的跨报告汇总贴（54 评论 / 18 👍），追踪 Codex 订阅配额异常消耗问题，影响范围广 | 54 / 18 |
| 3 | [#27117](https://github.com/openai/codex/issues/27117) **Windows 更新时 PSModulePath 污染** | 老牌高赞 issue（40 评论 / 29 👍），暴露 Windows 平台 PowerShell 进程继承与哈希校验失败的根因 | 40 / 29 |
| 4 | [#48324](https://github.com/openai/codex/issues/48324) **ChatGPT Windows 桌面端"无法加载组织设置"** | 桌面端完全无法进入 composer，严重阻塞 Plus/Pro 用户（27 评论） | 27 / 4 |
| 5 | [#48333](https://github.com/openai/codex/issues/48333) **Windows Codex Desktop 卡死在启动 spinner** | app-server 的 `codex.exe` 进程不退出导致 UI 永久阻塞（24 评论 / 8 👍） | 24 / 8 |
| 6 | [#36268](https://github.com/openai/codex/issues/36268) **Android "Authorize this phone" 死循环** | 移动端 auth 链路问题：浏览器侧授权完成但 host 收不到 pairing claim（17 评论） | 17 / 1 |
| 7 | [#48774](https://github.com/openai/codex/issues/48774) **Android 远程配对失败** | 与 #36268 类似但更新版本（1.2026.265）上的回归（15 评论 / 3 👍） | 15 / 3 |
| 8 | [#40067](https://github.com/openai/codex/issues/40067) **Plus 周配额在数小时内从 99% 跌至 0%** | 用量计费异常又一案例，且明确为"回归"（11 评论 / 4 👍） | 11 / 4 |
| 9 | [#38157](https://github.com/openai/codex/issues/38157) **Pro 20x 实际只获得 Pro 5x 配额** | 订阅权益不匹配，影响付费用户信任（11 评论 / 5 👍） | 11 / 5 |
| 10 | [#49362](https://github.com/openai/codex/issues/49362) **Sol 6.1 未在 Codex 中显示** | 与 0.159.1 模型上新同步出现，Pro 200 用户无法选到刚发布的旗舰模型（5 评论 / 8 👍） | 5 / 8 |

**社区情绪总结**：Windows 兼容性、跨平台 auth、以及用量计量透明度是当前最尖锐的三类投诉，部分老 issue（如 #27117）已开放近 4 个月仍未根治。

---

## 四、重要 PR 进展（Top 10）

> 当日 PR 多由自动化机器人 [@copyberry](https://github.com/copyberry) 提交并合并，集中在 app-server 协议层与服务端化方向。

| PR | 主题 | 要点 |
|---|---|---|
| [#49480](https://github.com/openai/codex/pull/49480) | **实验性线程预测协议** | 新增 `thread/prediction/request` 与 `thread/prediction/updated` 协议类型，同步生成 JSON Schema、TS 与 Python 类型 |
| [#49478](https://github.com/openai/codex/pull/49478) | **MCP 授权服务器预校验** | 在 ID-JAG 交换前发现并验证 MCP 资源的授权服务器，提升企业身份认证安全性 |
| [#49475](https://github.com/openai/codex/pull/49475) | **回合中止回调顺序修正** | 修复 `TurnAborted` 在扩展 abort 回调完成前提前发出的竞态，避免消费者观察到"终端事件 + 清理未完"的中间态 |
| [#49473](https://github.com/openai/codex/pull/49473) | **升级到 rmcp SDK 3.3.0** | 用官方 SDK 接管企业 ID-JAG 两阶段交换与令牌校验，本地实现退役 |
| [#49472](https://github.com/openai/codex/pull/69472) | **TUI 切换为服务端权威权限** | 客户端权限定义与约束可能与 app server 不一致，改为发现 server 端为准，跨任务边界保留权限变更 |
| [#49441](https://github.com/openai/codex/pull/49441) | **响应重试遵循服务端建议** | `ServerOverloaded` / `RequestExhausted` 现在遵守服务端 retry 提示；WS→HTTP 回退也尊重 deadline |
| [#49437](https://github.com/openai/codex/pull/49437) | **TUI 语音设置支持本地设备选择** | 新增麦克风/扬声器选择器，覆盖远程 app server 场景 |
| [#49426](https://github.com/openai/codex/pull/49426) | **守护进程启动的 app server 默认开启分析** | 与一客户端一致，但尊重用户显式 opt-out |
| [#49425](https://github.com/openai/codex/pull/49425) | **诊断日志按时间与体积双维度定期清理** | 启动后立即后台清理一次，之后每 30 分钟一次 |
| [#49406](https://github.com/openai/codex/pull/49406) | **支持显式 cyber access program + OpenAI API key** | 在 `api_key_cyber_access_programs` 与 `api_key_model_discovery` 启用时前向传递 `cyberAccessProgram` |

> 其他值得关注的修复：登录 shell PATH 恢复（[#49467](https://github.com/openai/codex/pull/49467)）、Windows UNC 路径推断（[#49424](https://github.com/openai/codex/pull/49424)）、多行 ANSI 警告剥离 payload（[#49416](https://github.com/openai/codex/pull/49416)）、输入文本调试输出截断至 512 字节（[#49415](https://github.com/openai/codex/pull/49415)）。

---

## 五、功能需求趋势

通过对 50 条 Issue 的主题聚类，可以提炼出以下社区关注方向：

| 方向 | 占比 / 代表 Issue | 备注 |
|---|---|---|
| **用量计量透明度** | 占比最高，~30% | 配额异常消耗、新旧视图双计费、Pro 20x/5x 权益错配、Sol 6.1 不显示等 |
| **Windows 平台兼容** | ~25% | 扩展加载、Desktop 启动卡死、PowerShell 路径继承、apply_patch ACL 等 |
| **跨端认证与远程配对** | ~15% | Android "Authorize this phone" 循环、Desktop "无法加载组织设置"、Slack @Codex 任务静默失败 |
| **新模型可见性 / 上线同步** | ~10% | Sol 6.1 未出现在目录中（#49362），GPT-6.1 Sol 上线后端目录覆盖 |
| **沙箱 / 安全模型** | ~10% | Chromebook Linux 沙箱挂载失败、macOS Workspace diff SIGKILL 残留、Browser Use 安全检查 |
| **开发者体验 (DX)** | ~10% | TUI 体验、instant_interrupt（已落地）、Voice 热键失效、连续性兜底模式提案（#41224） |
| **企业 / 协议层** | 出现在 PR 而非 Issue | MCP 企业 ID-JAG、线程预测协议、rmcp SDK、服务端权威权限 |

---

## 六、开发者关注点

综合 Issues 与 PR 描述，开发者社区反馈的痛点与高频需求可归纳为：

1. **用量计费是头号信任危机**
   用户反复报告配额在小时级内被消耗殆尽（#40067、#40895、#46901、#49363），且新旧 usage 视图数据不一致（#49322）。建议 OpenAI 提供：
   - 按 token / 模型细粒度的实时用量明细
   - 异常消耗预警机制
   - 公开的配额计算公式

2. **Windows 仍是"二等公民"**
   从扩展启动（#37458）、Desktop 启动卡死（#48333）到 PSModulePath 污染（#27117）、ACL 拒绝（#32121），Windows 上的路径、子进程、权限模型问题频出。今日 0.159.2 与 PR #49424 的 UNC 修复虽然向前一步，但与 macOS/Linux 的成熟度差距仍显著。

3. **新模型发布需配套前端目录同步**
   GPT-6.1 Sol 已在 0.159.1 后端上线，但客户端目录未及时更新（#49362），开发者希望建立"模型上线 → 客户端目录同步 → 用户通知"的闭环。

4. **企业级协议层迭代加速**
   PR #49478 / #49473 / #49472 / #49480 表明 Codex 正在从"个人工具"向"平台"演化：MCP 企业 ID-JAG、线程预测协议、服务端权威权限模型等都是为多租户与 agent 生态铺路。开发者需要关注 SDK 兼容性升级窗口。

5. **沙箱与远程执行鲁棒性**
   Chromebook Linux 沙箱（#48523）、macOS Workspace diff 残留（#43158）、exec-server 环境信息超时（#49407）共同说明：跨平台沙箱抽象仍需打磨，特别是异构环境（Crostini、WSL、Android）下的边界条件。

6. **社区期待但尚未满足的能力**
   - 配额耗尽后的"连续性兜底模式"提案（#41224，CLOSED 但讨论未结束）
   - IDE 端"即时中断"对外部 IDE 扩展（VS Code）的兼容（[#48141](https://github.com/openai/codex/pull/48141) 起步）
   - 远程控制模式下设备选择的用户控制（PR #49437 已开始落地）

---

> 报告基于 GitHub 公开数据生成，覆盖 openai/codex 仓库 2026-09-29 至 2026-09-30 的 Release、Issue、PR 动态。

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

<think>The user wants me to generate a daily report for Gemini CLI community dynamics on 2026-09-30, based on the GitHub data provided. Let me analyze the data carefully and create a structured Chinese report.

Key observations from the data:

**Releases:**
- v0.64.0-nightly.20260930.g38700b4b3 (nightly)
- v0.63.0-preview.0 (preview)
- v0.62.0 (stable)

**Top Issues by comments:**
1. #22323 - Subagent recovery after MAX_TURNS (P1, bug) - 13 comments
2. #19873 - Zero-Dependency OS Sandboxing (P2, enhancement) - 9 comments
3. #21409 - Generalist agent hangs (P1, bug) - 8 comments
4. #22745 - AST-aware file reads (P2, feature) - 7 comments
5. #21968 - Gemini doesn't use skills/sub-agents enough (P2, bug) - 6 comments
6. #22267 - Browser Agent ignores settings.json (P2, bug) - 4 comments
7. #22232 - Browser Agent resilience (P3, feature) - 4 comments
8. #21983 - Browser subagent fails in wayland (P1, bug) - 4 comments
9. #21000 - Native file tools for task tracker (P3) - 4 comments
10. #20079 - Symlink not recognized as agent (P2, bug) - 4 comments
11. #24246 - 400 error with >128 tools (P2, bug) - 3 comments
12. #23571 - Model creates tmp scripts randomly (P2, bug) - 3 comments
13. #22672 - Agent destructive behavior (P2) - 3 comments
14. #22186 - get-shit-done hook crash (P1, bug) - 3 comments
15. #20195 - Local Subagent Sprint 1 (P3) - 3 comments

**Top PRs:**
1. #29535 - fix(auth): respect allowed onboarding tier
2. #29573 - fix(cli): handle registry port in sandbox image parsing
3. #29342 - fix(cli): avoid nested input history state updates
4. #29445 - fix(cli): distinguish unreadable MCP enablement config
5. #29449 - feat(skills): add pkgdiet dependency guardrail
6. #29444 - fix(cli): gemini mcp enable/disable never matched
7. #29447 - fix(sdk): plumb env, timeoutSeconds, external signal
8. #26844 - fix(cli): add missing CustomTheme properties
9. #29568 - fix(core): append-only delta patching in ChatRecordingService
10. #29508 - chore(deps): bump npm-dependencies (76 updates)

Let me organize this into a structured report.</think>

# Gemini CLI 社区动态日报
**日期：2026-09-30**

---

## 📌 今日速览

今日 Gemini CLI 社区完成了 **v0.62.0 稳定版** 与 **v0.63.0-preview.0 预览版** 的同步发布，并启动 **v0.64.0-nightly** 滚动构建。Issues 与 PR 的活跃焦点高度集中在 **Agent/Subagent 可靠性** 上，特别是子代理的终止状态误报、Generalist Agent 挂死、Browser Agent 忽略配置等问题，暴露出新版本在 Agent 编排层面仍存在较多边缘场景缺陷。

---

## 🚀 版本发布

| 版本 | 类型 | 主要内容 |
|------|------|----------|
| **v0.62.0** | Stable | a2a-server 在 tasks metadata endpoint 上对不支持的 store 提前返回；整合 v0.61.0-preview 系列变更日志 |
| **v0.63.0-preview.0** | Preview | CLI 在连接恢复期间显示重试进度指示器（#28340）；自动生成 v0.61.0-preview.1 变更日志 |
| **v0.64.0-nightly.20260930.g38700b4b3** | Nightly | 修复非交互模式下自主计划执行的启用问题；修复 `formatTruncatedToolOutput` 在 `maxChars <= 0` 时禁用截断的逻辑 |

📦 三个版本同步流转，表明团队在主线稳定版的发布节奏上保持稳定，同时 nightly 与 preview 双轨并行收集反馈。

---

## 🔥 社区热点 Issues（Top 10）

| # | 标题 | 优先级 | 评论 | 关键看点 |
|---|------|--------|------|----------|
| [#22323](https://github.com/google-gemini/gemini-cli/issues/22323) | Subagent 在 MAX_TURNS 后被误报为 GOAL 成功 | P1 Bug | 13 | **Agent 状态语义错误**，导致用户看到"成功"但实际任务中断，影响可信度 |
| [#21409](https://github.com/google-gemini/gemini-cli/issues/21409) | Generalist Agent 频繁挂死 | P1 Bug | 8 | 👍8 | 简单操作如新建文件夹都可能无限挂起，需手动禁止 defer 才能缓解 |
| [#19873](https://github.com/google-gemini/gemini-cli/issues/19873) | 利用模型 bash 亲和性 + 零依赖 OS 沙箱 + 意图路由 | P2 Enhancement | 9 | 与 Gemini 3 原生 POSIX 工具能力深度结合的安全沙箱架构提案 |
| [#22745](https://github.com/google-gemini/gemini-cli/issues/22745) | AST 感知的文件读取/搜索/映射评估 | P2 Feature | 7 | Epic 级探索，意在显著降低 token 消耗与读偏导致的无效回合 |
| [#21968](https://github.com/google-gemini/gemini-cli/issues/21968) | Gemini 自发调用 skills/sub-agents 频率过低 | P2 Bug | 6 | 用户必须显式指令才会触发，削弱了 skills 系统的实用价值 |
| [#22267](https://github.com/google-gemini/gemini-cli/issues/22267) | Browser Agent 忽略 settings.json 中的 maxTurns | P2 Bug | 4 | AgentRegistry 注册时未正确合并用户配置，配置层失效 |
| [#21983](https://github.com/google-gemini/gemini-cli/issues/21983) | Wayland 下 Browser subagent 失败 | P1 Bug | 4 | 浏览器子代理在 Linux Wayland 环境直接报错退出，平台兼容性问题 |
| [#20079](https://github.com/google-gemini/gemini-cli/issues/20079) | `~/.gemini/agents/*.md` 为 symlink 时不被识别 | P2 Bug | 4 | 阻碍用户通过 dotfiles/symlink 共享 Agent 定义 |
| [#24246](https://github.com/google-gemini/gemini-cli/issues/24246) | 工具数 > 128 时触发 400 错误 | P2 Bug | 3 | 暴露 API 限制未在前端做工具剪裁/分桶，agent 工具治理能力欠缺 |
| [#22232](https://github.com/google-gemini/gemini-cli/issues/22232) | Browser Agent 自动会话接管与锁恢复 | P3 Feature | 4 | 当前 `fail-fast` 策略在 `persistent` 模式下遇到锁文件直接放弃，影响稳定性 |

---

## 🛠 重要 PR 进展（Top 10）

| # | 标题 | 说明 |
|---|------|------|
| [#29535](https://github.com/google-gemini/gemini-cli/pull/29535) | fix(auth): 尊重 Code Assist 返回的 allowed onboarding tier | 修复合法账号被错误提示"You do not have a valid license"的问题（修复 #29529） |
| [#29573](https://github.com/google-gemini/gemini-cli/pull/29573) | fix(cli): 解析沙箱镜像名时正确处理 registry 端口 | `parseImageName()` 在 registry 带端口时被误切为 tag，避免 `/` 注入容器 runtime |
| [#29445](https://github.com/google-gemini/gemini-cli/pull/29445) | fix(cli): 区分"不可读"与"缺失"的 MCP enablement 配置 | 关键安全修复 —— 损坏的 `mcp-server-enablement.json` 不再 fail-open 暴露所有服务器 |
| [#29444](https://github.com/google-gemini/gemini-cli/pull/29444) | fix(cli): `gemini mcp enable/disable <name>` 修复 | 该命令此前对任何服务器都返回"not found"，`getMcpServersFromConfig` 未合并被屏蔽的服务器 |
| [#29449](https://github.com/google-gemini/gemini-cli/pull/29449) | feat(skills): 增加 PkgDiet 依赖守门人 | 拦截 `npm install`，先通过 PkgDiet MCP 校验健康度、bundle 大小与废弃状态 |
| [#29447](https://github.com/google-gemini/gemini-cli/pull/29447) | fix(sdk): SdkAgentShell 透传 env / timeoutSeconds / 外部 AbortSignal | SDK 的 `exec` 此前静默丢弃 `env` 与超时配置，调用方无外部终止手段 |
| [#29568](https://github.com/google-gemini/gemini-cli/pull/29568) | fix(core): ChatRecordingService 改为 append-only delta 修补 + 有界历史窗口 | 替换整段 `{ $set: messages }` 重写，缓解大对话下的内存与 IO 压力（XL） |
| [#29557](https://github.com/google-gemini/gemini-cli/pull/29557) | fix(cli): 修复非交互模式下 `@scope/pkg` 引发的 CPU 100% 死锁 | Headless 模式下 scoped 包后接引号时的灾难性引号吞咽/brace-expansion ReDoS 修复 |
| [#29528](https://github.com/google-gemini/gemini-cli/pull/29528) | fix(cli): headless 模式下正确传播文件夹信任状态 | `useFolderTrust` 此前无条件 `onTrustChange(true)`，造成与 history log 的 split-brain |
| [#26844](https://github.com/google-gemini/gemini-cli/pull/26844) | fix(cli): CustomTheme 校验 schema 补齐缺失字段 | `ui.active` 等运行期字段缺失导致启动时报 "Unrecognized key" |

---

## 📈 功能需求趋势

从 Issues 标签与讨论聚类提炼，社区最关注的五大方向：

1. **Agent 编排可靠性与可观测性** — Subagent 状态语义错误、bug report 缺少子代理上下文、`/chat share` 需要包含子代理轨迹（#22323、#21763、#22598）
2. **AST 感知的代码理解** — 用 tilth / glyph / ast-grep 替代大块文件读取，减少 token 浪费与"读偏"（#22745、#22746、#22747）
3. **零依赖沙箱 + Bash 亲和性** — 充分利用 Gemini 3 原生 POSIX 工具链，避免重型 sidecar 沙箱（#19873）
4. **Token 与上下文经济性** — Tactful Extraction 层级读取、任务跟踪迁移到持久化文件以避开 context rot（#19561、#18836、#21000）
5. **平台与配置可治理性** — 工具数量超限的剪裁、文件夹信任的 per-workspace policy、settings.json 中 agent 发现（#24246、#18397、#18285）

---

## 💬 开发者关注点

高频痛点：
- **Subagent "假成功"** 是当前最严重信任问题，用户无法判断任务是否真的完成（#22323、#21763）
- **配置层未生效**：Browser Agent 完全忽略 `settings.json` 覆盖、`gemini mcp enable/disable` 实际不工作（#22267、#29444）
- **默认 Agent 行为不主动**：Skills 与 sub-agents 需要显式指令才能调用，违背了"开箱即用"的设计目标（#21968）
- **模型生成的临时脚本散落各处**：清理工作流被打断，需要限制写盘行为（#23571、#22672）
- **平台兼容性盲区**：Wayland 等非主流但有大量用户的桌面环境直接阻断 Browser Agent（#21983）

高频需求：
- 子代理共享内存 / 并行协作（#18287）
- 持久化、跨会话的任务跟踪取代 in-context WriteToDo（#18836）
- 通过 `/chat share` 暴露 subagent 轨迹以便评测与回溯（#22598）
- 工具数量治理与按需剪裁（#24246）

---

**总结**：本日数据反映出 Gemini CLI 已经从"模型能力展示"阶段进入"Agent 工程化深水区"，社区讨论重心从新模型特性转移到 **编排可靠性、可观测性与上下文经济性** 上。多个 P1 Bug 集中在 Subagent/Browser Agent 链路，建议团队在下一个稳定版（v0.63 GA）前优先攻克配置未生效与状态语义误报两条主线。

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

<think>The user wants me to generate a daily report for GitHub Copilot CLI community activity based on the data provided. Let me analyze the data carefully.

Key observations:
1. **Releases**: v1.0.90-5, v1.0.90-4, v1.0.90-3, v1.0.90-2 - rapid patch releases in the 1.0.90 line
   - Fix: "No supported model available" error
   - Fix: MCP tool calls completion with progress updates
   - Fix: "Failed to read model provider attribution" error
   - Add: --mcp-github-auth flag
   - Add: session-scoped read-only directory approvals

2. **Issues**: 50 issues total, 30 shown with comment counts. Several notable issues:
   - #1274 (31 comments, OPEN): CLI getting 400 errors - HIGH discussion
   - #1285 (11 comments, OPEN): Organization-level Agent not showing
   - #4870 (8 comments, CLOSED): Figma MCP server fails - was just closed
   - #3534 (7 comments, OPEN): WSL2 ARM64 /copy issue - updated today
   - #3281 (7 comments, CLOSED): v1.0.46 MCP server crash
   - #2861 (7 comments, CLOSED): Compaction failed
   - #3589 (4 comments, CLOSED): Hook additionalContext issue
   - #4919 (4 comments, CLOSED): /ask with auto models
   - #2581 (3 comments, CLOSED): MCP tools with dots in names
   - #4515 (2 comments, OPEN): MCP content vs structuredContent

3. **PRs**: Only 1 PR (#5000) - publishing npm tarballs from Copilot CLI releases

Let me write a comprehensive but concise report in Chinese.

For the "重要 PR 进展" section, the user asks for 10 important PRs but only 1 PR was updated in the past 24 hours. I need to be honest about this - I cannot fabricate PRs. I'll note that there is limited PR activity in this period.

Let me structure this report properly.</think>

# GitHub Copilot CLI 社区动态日报

**日期：2026-09-30**

---

## 📌 今日速览

过去 24 小时，Copilot CLI 团队密集发布了 v1.0.90 系列的 4 个补丁版本（-2 至 -5），重点修复了 **MCP（Model Context Protocol）相关缺陷**——包括模型可用性误报、MCP 服务器进度回调卡死、以及 GitHub OAuth 授权作用域扩展等。同时，#1274（400 错误频发）和 #1285（组织级 Agent 无法显示）两个长期未关闭 Issue 仍是社区讨论焦点。

---

## 🚀 版本发布

### v1.0.90-5（最新）
- ✅ 修复：配置了外部 provider 时，启动界面不再误报 "No supported model available"
- ✅ 修复：MCP 服务器在响应后继续发送进度更新时，工具调用可正常完成

### v1.0.90-4
- ✅ 修复：登录过程中不再打印 "Failed to read model provider attribution" 错误日志

### v1.0.90-3
- ✨ 新增：`--mcp-github-auth` 参数，可将 GitHub 账号授权范围限定于已批准的 MCP 服务器来源（缓解 Token 过度授权风险）
- ✨ 新增：会话级只读目录审批机制（path access prompt 支持 session-scoped read-only 模式）

### v1.0.90-2
- 综合修复与改进

> 📦 此次版本迭代体现了团队对 **MCP 生态稳定性** 和 **安全模型细化** 的持续投入。

---

## 🔥 社区热点 Issues（精选 10 条）

| # | Issue | 状态 | 评论 | 为什么值得关注 |
|---|-------|------|------|---------------|
| [#1274](https://github.com/github/copilot-cli/issues/1274) | CLI 持续返回 400 错误（code review 场景） | OPEN | 31 | 评论数最高，多位用户反馈过去数小时内 95% 请求失败，影响核心 diff 审阅工作流 |
| [#1285](https://github.com/github/copilot-cli/issues/1285) | 组织级 Agent 在 CLI/VS Code 中不可见 | OPEN | 11 | 影响企业级 `.github-private` 仓库 Agent 的发现机制，企业用户部署阻塞 |
| [#4870](https://github.com/github/copilot-cli/issues/4870) | Figma MCP 服务器 `server/discover` 失败 | CLOSED | 8 | VS Code 可用但 CLI 报错，已关闭说明已修复，揭示 MCP 服务器发现逻辑的兼容性问题 |
| [#3534](https://github.com/github/copilot-cli/issues/3534) | WSL2 ARM64 `/copy` 因 cmd.exe 引号失败 | OPEN | 7 | **今日更新**，影响 WSL + ARM64 开发者群体的剪贴板工作流 |
| [#3281](https://github.com/github/copilot-cli/issues/3281) | v1.0.46 MCP 原生绑定加载失败 | CLOSED | 7 | npm optional dependencies 经典坑，已修复但揭示发布校验流程盲点 |
| [#2861](https://github.com/github/copilot-cli/issues/2861) | `/compact` 在 Opus 4.6 上 3 次重试均空响应 | CLOSED | 7 | 上下文压缩是长会话核心功能，空响应问题严重影响长任务 |
| [#3589](https://github.com/github/copilot-cli/issues/3589) | 多 `sessionStart` hook 仅最后一个生效 | CLOSED | 4 | hook 上下文覆盖机制缺陷，影响插件生态可组合性 |
| [#4919](https://github.com/github/copilot-cli/issues/4919) | `/ask` 在 auto 模式下报模型不支持 | CLOSED | 4 | auto 模型路由与子命令的兼容性问题，影响新用户体验 |
| [#2581](https://github.com/github/copilot-cli/issues/2581) | MCP 工具名含 `.` 时触发 400 | CLOSED | 3 | 违反 MCP 规范的实际使用场景，已修复表明正逐步贴合标准 |
| [#4515](https://github.com/github/copilot-cli/issues/4515) | CLI 同时暴露 `content` 与 `structuredContent` | OPEN | 2 | MCP 2025 规范合规性问题，影响结构化工具结果的语义保真 |

---

## 🛠 重要 PR 进展

过去 24 小时仅有 **1 条 PR** 更新：

| # | PR | 内容 |
|---|----|------|
| [#5000](https://github.com/github/copilot-cli/pull/5000) | **Publish npm tarballs from published Copilot CLI releases** | 将 npm 发布流程从手动触发改为由 GitHub Release 自动触发，采用 OIDC trusted publishing（不再使用 npm token）；同时保留 manual recovery 路径与独立的内部 feed。**这是 1.0.90 系列快速迭代背后的发布基础设施升级**，为更频繁的补丁发布提供了工程保障。 |

> ℹ️ PR 数量偏低与当前处于版本发布密集期一致，多数代码变更可能通过 hotfix 分支直接合入而未单独开 PR。

---

## 📈 功能需求趋势

从 50 条 Issue 中提炼社区诉求方向：

1. **🔌 MCP 生态完善（约 35%）**
   - MCP 工具名规则合规（[#2581](https://github.com/github/copilot-cli/issues/2581)）
   - MCP 服务器发现兼容性（[#4870](https://github.com/github/copilot-cli/issues/4870)）
   - MCP toggle UX 对齐 skills（[#2805](https://github.com/github/copilot-cli/issues/2805)）
   - OAuth 授权流程（[#3393](https://github.com/github/copilot-cli/issues/3393)、`--mcp-github-auth` 新增）
   - Secret 注入子进程（[#4985](https://github.com/github/copilot-cli/issues/4985)）

2. **🪟 跨平台兼容（Windows/WSL/ARM64）**
   - WSL2 ARM64 剪贴板（[#3534](https://github.com/github/copilot-cli/issues/3534)）
   - macOS 输入异常（[#3533](https://github.com/github/copilot-cli/issues/3533)）
   - Win32 ARM64 prebuild（[#3309](https://github.com/github/copilot-cli/issues/3309)）

3. **🧠 模型与 Provider 体验**
   - BYOK 在 ACP server 模式的支持（[#4037](https://github.com/github/copilot-cli/issues/4037)、[#2651](https://github.com/github/copilot-cli/issues/2651)）
   - auto 模式与子命令路由（[#4919](https://github.com/github/copilot-cli/issues/4919)）

4. **📂 会话与上下文管理**
   - `/compact` 稳定性（[#2861](https://github.com/github/copilot-cli/issues/2861)）
   - 会话锁定文件回收（[#4805](https://github.com/github/copilot-cli/issues/4805)）
   - 长会话滚动（[#4894](https://github.com/github/copilot-cli/issues/4894)）
   - 会话自动重命名失效（[#3365](https://github.com/github/copilot-cli/issues/3365)）

5. **📄 文档/文件类型支持**
   - PDF 上传分析（[#4583](https://github.com/github/copilot-cli/issues/4583)，已关闭但需求真实）

6. **🏢 企业与多 Agent 架构**
   - 组织级 Agent 发现（[#1285](https://github.com/github/copilot-cli/issues/1285)）
   - 跨模型家族 sub-agent 工具校验（[#4457](https://github.com/github/copilot-cli/issues/4457)）

---

## 💬 开发者关注点

通过评论热度与 Issue 描述，开发者社区的高频痛点归纳如下：

- **🩺 错误信息不透明**：多个 400/空响应 bug（#1274、#2861、#4919）反映出 CLI 在错误传播上的**用户可观测性不足**——缺乏对失败原因的解释，使开发者难以自助排查。
- **🔁 升级即破坏**：v1.0.46（#3281）、v1.0.48（#3309）等多次出现"升级后 CLI 不可用"的回归，表明**版本间的兼容性测试覆盖面**（尤其 Windows ARM64、原生 binding）是社区高度敏感点。
- **⌨️ 输入交互断层**：macOS 输入失焦（#3533）、CTRL+Z 退出会话（#3693）等问题显示**终端 TUI 层的鲁棒性**仍是体验短板。
- **🔐 安全/作用域精细化**：v1.0.90-3 新增的 `--mcp-github-auth` 与只读目录审批，呼应了社区对 MCP 授权过宽的担忧（#4985、#3393）。
- **🧩 MCP 一等公民化**：开发者期望 MCP 享有与 skills 同等的 UX（toggle、enable/disable 快捷键），并要求严格遵循 MCP 规范（`structuredContent` 语义、工具名字符集）。

---

*📊 数据基于 github.com/github/copilot-cli 过去 24 小时公开活动整理。*

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

<think>Let me analyze the GitHub data for OpenCode and generate a comprehensive daily report in Chinese for 2026-09-30.

Let me first organize the key information:

**Releases**: No new releases in the past 24 hours.

**Top Issues (by comments)**:
1. #26412 - Custom OpenAI-compatible provider streaming tool call error (11 comments, 5 thumbs up, CLOSED)
2. #51761 - TUI OOM memory exhaustion (8 comments, 2 thumbs up, OPEN)
3. #25262 - Toggleable top-bar status header (5 comments, 3 thumbs up, CLOSED)
4. #51330 - Desktop custom providers rejected (4 comments, 2 thumbs up, OPEN)
5. #31237 - Plugin client fallback (4 comments, CLOSED)
6. #51764 - Anthropic system updates reject tool history (3 comments, OPEN)
7. #41399 - Cross-session file change leak (3 comments, OPEN)
8. #52197 - v2 windows desktop wsl2 remote env config (3 comments, CLOSED)
9. #36399 - Billing abnormal deduction qwen3.7-max (3 comments, CLOSED)
10. #39910 - Tool invocation UI leaks markup (3 comments, CLOSED)
11. #33333 - /injected-messages command (3 comments, CLOSED)
12. #24990 - TUI inspect session system messages (3 comments, 3 thumbs up, CLOSED)
13. #35863 - Context window hardcoded (3 comments, 3 thumbs up, CLOSED)
14. #47911 - Review panel diffs wrong directory (2 comments, OPEN)
15. #52201 - Session moved mid-turn stale entry (2 comments, CLOSED)
16. #52202 - Bash tool Windows ChildProcess.kill error (2 comments, CLOSED)
17. #51089 - mcp.add resolves before tool registry (2 comments, OPEN)
18. #51202 - Gpt-6 luna compaction error (2 comments, CLOSED)
19. #52194 - Go subscription orphaned (2 comments, CLOSED)
20. #50257 - desktop model picker shows No reasoning (2 comments, 2 thumbs up, OPEN)
21. #52203 - Windows TUI process survives terminal close (2 comments, OPEN)
22. #39977 - Windows TLS ClientHello never sent (2 comments, CLOSED)
23. #39968 - Silent SSE terminations (2 comments, CLOSED)
24. #39934 - Incomplete model name display (2 comments, CLOSED)
25. #39933 - Reasoning toggle not emitted (2 comments, CLOSED)
26. #39928 - Typescript lsp not recognized with ts7 (2 comments, CLOSED)
27. #39908 - MCP memory server JSON Schema draft-07 (2 comments, CLOSED)
28. #39878 - File manager upload/download/delete (2 comments, CLOSED)
29. #39874 - Console Go hy3-preview 404 (2 comments, CLOSED)
30. #39801 - OpenCode Go Cursor model name conflict (2 comments, CLOSED)

**Top PRs (by recency and importance)**:
1. #51559 - fix(ai): support prompt caching for DigitalOcean inference
2. #52091 - fix(ai): flatten namespaced choices for flat protocols
3. #52133 - fix(ai): classify Together input token rejections
4. #52132 - fix(ai): classify DeepInfra input length rejections
5. #52131 - fix(ai): classify Amazon Nova input token rejections
6. #52112 - fix(ai): classify xAI invalid API keys
7. #52135 - fix(ai): stop retrying Z.ai Responses rejections
8. #52134 - fix(ai): classify Novita context length rejections
9. #52219 - feat(ai): select OpenRouter APIs by model family
10. #52128 - fix(ai): classify Workers AI context window rejections [CLOSED]
11. #52222 - fix(ai): route Cloudflare AI Gateway Claude/OpenAI
12. #52200 - refactor(ai): keep declared tool names across protocols
13. #52217 - feat(desktop): comment on page elements
14. #52204 - fix(app): alert only for open session tabs [CLOSED]
15. #52210 - feat(session-ui): sticky Used group header [CLOSED]
16. #52214 - fix(mcp): settle tool registry
17. #52209 - feat(app): user-authored widget panels
18. #52211 - fix(core): recover pending question replies
19. #52208 - fix(opencode): report missing grep search path
20. #52207 - feat(session-ui): group adjacent reads [CLOSED]

Now let me identify trends:

**功能需求趋势**:
- TUI/Desktop UI 改进：状态栏、系统消息查看、sticky headers
- 模型与 Provider 集成：DigitalOcean prompt caching、Z.ai、Cloudflare AI Gateway、Novita、Workers AI、Together、DeepInfra、xAI、Amazon Nova、OpenRouter 模型族路由
- MCP 集成稳定性：tool registry 同步、JSON Schema 版本兼容
- 会话管理：worktree 支持、session 移动、跨会话隔离
- 调试可见性：/injected-messages 命令、系统消息查看
- 文件管理：上传下载删除

**开发者关注点**:
- Provider 错误分类：很多 PR 集中在正确识别不同 provider 的错误（context overflow、auth failure、invalid request）
- Memory 资源管理：TUI OOM、内存泄漏
- Windows 兼容性：WSL2 env、TLS、child process、terminal close
- MCP 协议一致性：tool registry 同步、schema 版本
- Provider/Model 名称冲突：Cursor 与 OpenCode Go
- 跨会话隔离：file change 显示、session state
- 提示缓存：DigitalOcean、Claude

Let me now write the report in Chinese, formatted properly.

For the "今日速览" section:
- No new releases today
- AI provider error classification is a major theme (multiple PRs)
- TUI memory issues and Windows compatibility concerns continue
- Desktop v2 issues persist (custom providers, WSL2 env, model picker)

Let me draft the report now. I should keep it concise and professional, suitable for tech developers.</think>

# OpenCode 社区动态日报
**2026-09-30**

---

## 📌 今日速览

今日 OpenCode 仓库无新版本发布，社区焦点集中在 AI Provider 错误分类体系的精细化重构——包括 Together、DeepInfra、Amazon Nova、xAI、Novita、Workers AI、Z.ai 等多家服务商的 context overflow / auth failure / 错误重试策略均得到集中修复。同时，TUI 内存泄漏（24-28GB OOM）与 Windows 平台兼容性问题（WSL2 环境变量、终端关闭残留进程、Bash 子进程超时清理）仍是开发者关注的高优先级痛点。

---

## 🚀 版本发布

*过去 24 小时内无新版本发布。*

---

## 🔥 社区热点 Issues

以下挑选了 10 个最具代表性的 Issue，反映当前 OpenCode 社区最关心的核心问题：

### 1. [#26412] Custom OpenAI-compatible Provider 流式工具调用失败
- **状态**: CLOSED | **评论**: 11 | 👍 5
- **重要性**: 自定义 OpenAI 兼容 provider（vLLM 后端）在流式 tool call 时报 `Expected 'function.name' to be a string`，影响所有 Read/Edit/Bash 工具调用；评论数与点赞数均最高，是 v1 时代遗留的最热门兼容性问题之一。
- **链接**: https://github.com/anomalyco/opencode/issues/26412

### 2. [#51761] TUI OOM：间歇性 24-28GB 内存耗尽
- **状态**: OPEN | **评论**: 8 | 👍 2
- **重要性**: 内存增长呈线性 500MB/s-1GB/s，无 GC 锯齿，进程被 OOM killer 终结；触发条件不明，间歇性发生，是当前最严重的稳定性问题之一。
- **链接**: https://github.com/anomalyco/opencode/issues/51761

### 3. [#25262] 可切换的顶部状态栏（标题/上下文/成本/MCP/LSP/Git）
- **状态**: CLOSED | **评论**: 5 | 👍 3
- **重要性**: 高赞 UI 改进需求，反映用户对会话可观测性（cost、context 占比）的强诉求。
- **链接**: https://github.com/anomalyco/opencode/issues/25262

### 4. [#51330] Desktop 自定义 Provider 始终被拒绝为 "unavailable"
- **状态**: OPEN | **评论**: 4 | 👍 2
- **重要性**: OpenCode Desktop 2.0.16 (Windows) 通过 GUI 保存自定义 OpenAI-compatible provider 必失败，阻塞所有自定义 API 接入。
- **链接**: https://github.com/anomalyco/opencode/issues/51330

### 5. [#51764] Anthropic 系统更新拒绝本可恢复的工具历史
- **状态**: OPEN | **评论**: 3
- **重要性**: Anthropic 拒绝本地工具调用与结果之间的有序系统更新，影响 Claude 模型下的会话恢复能力。
- **链接**: https://github.com/anomalyco/opencode/issues/51764

### 6. [#41399] 跨会话文件变更泄漏
- **状态**: OPEN | **评论**: 3
- **重要性**: Desktop/Web 应用的 "Files Changed" 面板显示了同一目录下其他会话的修改，TUI 不受影响；典型的会话隔离缺陷。
- **链接**: https://github.com/anomalyco/opencode/issues/41399

### 7. [#50257] Desktop 模型选择器对所有 V2 模型显示 "No reasoning"
- **状态**: OPEN | **评论**: 2 | 👍 2
- **重要性**: `capabilities.reasoning` 永远未被设置，导致 reasoning 模型在 tooltip 中显示错误信息，影响模型选择体验。
- **链接**: https://github.com/anomalyco/opencode/issues/50257

### 8. [#52203] Windows: TUI 进程在终端关闭后仍存活
- **状态**: OPEN | **评论**: 2
- **重要性**: 未处理 `CTRL_CLOSE_EVENT`，导致 `opencode.exe` 在终端关闭后持续在后台耗资源；Windows 平台特有的进程生命周期缺陷。
- **链接**: https://github.com/anomalyco/opencode/issues/52203

### 9. [#35863] 上下文窗口硬编码 200k，未动态解析
- **状态**: CLOSED | **评论**: 3 | 👍 3
- **重要性**: 依赖 `models.generated.js` 静态快照而非 provider 实时元数据，导致 auto-compaction 过早触发；高赞反映模型元数据治理需求。
- **链接**: https://github.com/anomalyco/opencode/issues/35863

### 10. [#24990] TUI 查看会话系统消息
- **状态**: CLOSED | **评论**: 3 | 👍 3
- **重要性**: 调试 system prompt 与初始注入信息的强需求，与 #33333 /injected-messages 命令互相呼应。
- **链接**: https://github.com/anomalyco/opencode/issues/24990

---

## 🛠️ 重要 PR 进展

### AI Provider 错误分类（系列修复）
本日最显著的工程动作是对各家 Provider 错误响应的精细化分类：

| PR | 内容 | 链接 |
|---|---|---|
| **#52133** | 将 Together（HuggingFace TGI）的输入 token 拒绝归类为 context overflow | https://github.com/anomalyco/opencode/pull/52133 |
| **#52132** | 分类 DeepInfra 输入长度拒绝为 context overflow | https://github.com/anomalyco/opencode/pull/52132 |
| **#52131** | 分类 Amazon Nova Bedrock `validationException` 为 context overflow | https://github.com/anomalyco/opencode/pull/52131 |
| **#52112** | 分类 xAI 无效 API key 为认证错误（修复后不再误判） | https://github.com/anomalyco/opencode/pull/52112 |
| **#52135** | 停止重试 Z.ai Responses 模型的 model/permission 拒绝 | https://github.com/anomalyco/opencode/pull/52135 |
| **#52134** | 分类 Novita 上下文长度拒绝（不再要求 token count） | https://github.com/anomalyco/opencode/pull/52134 |
| **#52128** | 分类 Cloudflare Workers AI 的 413 响应为 context overflow | https://github.com/anomalyco/opencode/pull/52128 |

### AI 协议与路由
- **#52200** `refactor(ai)`: 跨协议保留声明的工具名称，统一命名空间为 `{ namespace, name }` 结构 — 大幅简化 tool dispatch 路径 ([PR](https://github.com/anomalyco/opencode/pull/52200))
- **#52219** `feat(ai)`: 按模型族选择 OpenRouter 协议（`openai/*`、`x-ai/*`、`meta/*` 共享通用 Responses 路径） ([PR](https://github.com/anomalyco/opencode/pull/52219))
- **#52222** `fix(ai)`: Cloudflare AI Gateway 的 Claude/OpenAI 模型走原生 passthrough，修复 system 块与 message id 不兼容 ([PR](https://github.com/anomalyco/opencode/pull/52222))
- **#51559** `fix(ai)`: DigitalOcean 推理支持 prompt caching（v2 此前回退到 openai-compatible 导致无法缓存） ([PR](https://github.com/anomalyco/opencode/pull/51559))
- **#52091** `fix(ai)`: 扁平化 namespaced choices，使其在扁平协议下可正确解析 ([PR](https://github.com/anomalyco/opencode/pull/52091))

### 核心与 UI 修复
- **#52214** `fix(mcp)`: 在 MCP server 集合变更时同步 tool registry，修复 `mcp.add` 返回 204 后立即 prompt 缺失新工具的问题 ([PR](https://github.com/anomalyco/opencode/pull/52214))
- **#52211** `fix(core)`: 重启后恢复挂起中的 QuestionV2 回复 ([PR](https://github.com/anomalyco/opencode/pull/52211))
- **#52208** `fix(opencode)`: `grep` 工具在路径不存在时报告错误而非返回空结果，避免掩盖拼写错误 ([PR](https://github.com/anomalyco/opencode/pull/52208))

### Desktop & Session UI 新特性
- **#52217** `feat(desktop)`: 内置浏览器支持元素选择器，可在页面上任意元素添加注释并发送给 agent ([PR](https://github.com/anomalyco/opencode/pull/52217))
- **#52209** `feat(app)`: 用户自定义 widget 面板（通过 `index.html` 文件夹发现），含 capability grants ([PR](https://github.com/anomalyco/opencode/pull/52209))
- **#52210** `feat(session-ui)`: `Used` 组标题滚动时粘附在会话标题下方（已合并） ([PR](https://github.com/anomalyco/opencode/pull/52210))
- **#52207** `feat(session-ui)`: 相邻 Read 渲染为单行（逗号分隔），Thoughts/Shells 等仍拆分（已合并） ([PR](https://github.com/anomalyco/opencode/pull/52207))
- **#52204** `fix(app)`: 仅对打开的会话标签触发完成/错误系统提醒（已合并） ([PR](https://github.com/anomalyco/opencode/pull/52204))

---

## 📈 功能需求趋势

从今日 50 条 Issues 中提炼出的社区最关注方向：

1. **AI Provider 协议完整性** 🔥
   - 数字海洋 (DigitalOcean) prompt caching、Z.ai Responses、Novita、Cloudflare Workers AI/AI Gateway、OpenRouter 模型族路由 — 各家服务商的细节差异正在被系统化覆盖。

2. **UI 可观测性增强**
   - 顶部状态栏（#25262）、会话系统消息查看（#24990、#33333）、/injected-messages 调试命令（#33333）— 用户希望看到"模型实际收到了什么"。

3. **多 Provider 错误处理一致性**
   - 上下文溢出 vs. 认证失败 vs. 不可重试错误 — 是当前 PR 集中修复的核心方向，决定了自动重试与 fallback 的可靠性。

4. **会话与 Worktree 集成**
   - Review panel 错误 diff 原始目录（#47911）、会话中途移动留下 stale entry（#52201）— git worktree 作为 Agent 工作区的实践正趋于成熟。

5. **Desktop v2 稳定性**
   - 自定义 Provider 失败（#51330）、WSL2 环境变量丢失（#52197）、模型 picker reasoning 显示（#50257）— Desktop v2 上线后持续暴露边界问题。

6. **MCP 协议一致性**
   - tool registry 同步（#51089/52214）、JSON Schema draft-07 vs. 2020-12（#39908）— MCP 生态规范化需求显著。

7. **调试/审计可见性**
   - /injected-messages、system message inspector、tool invocation 序列化泄漏（#39910）— 开发者希望有更透明的执行链路追踪。

---

## 💡 开发者关注点

> 以下痛点在 Issues 与 PR 中高频出现：

- **Provider 错误分类的"最后一公里"** — 同一类问题（context overflow、auth failure）在不同 provider 表现差异巨大（HTTP 400/413/200+event 等），手工分类成本高，开发者期望系统能自动归类与合理重试。
- **TUI 资源管理** — 24-28GB OOM（#51761）、Windows 终端关闭后进程泄漏（#52203），反映长会话与多 agent 场景下的内存治理仍未完全到位。
- **Windows 兼容性短板** — WSL2 环境变量（#52197）、Bash 工具 `ChildProcess.kill`（#52202）、TLS ClientHello 死锁（#39977）— Windows 仍是最多 bug 报告的平台。
- **跨会话隔离** — Files Changed 面板串台（#41399）、review panel diff 错误目录（#47911）— 多会话并发需求增长，session 边界管理亟待加强。
- **第三方工具兼容** — Cursor 因模型名称冲突拒绝 OpenCode Go 路由（#39801）、TypeScript v7 移除 `tsserver` 路径（#39928）— 外部生态演进对 OpenCode 集成的冲击频繁。
- **调试可见性缺口** — system message、agent 切换注入、tool serialization 泄漏等反复出现，反映"可调试性"是开发者评估成熟度的关键指标。

---

*日报由 GitHub 公开数据自动整理，涵盖 2026-

</details>

<details>
<summary><strong>jcode</strong> — <a href="https://github.com/1jehuang/jcode">1jehuang/jcode</a></summary>

<think>Let me analyze the GitHub data for jcode community and generate a daily report for 2026-09-30.

Key observations:
1. Three new releases in past 24 hours: v0.89.3, v0.89.2, v0.89.1
   - v0.89.3: Herdr support and /cloud session moves
   - v0.89.2: Cursor MCP tool calls complete on every model
   - v0.89.1: Cursor provider fixes, Commits widget

2. Issues (35 total, 30 shown):
   - Most commented: #294 (5 comments) - File uploading @ feature missing
   - Many iOS-related issues (#1580, #1592, #1594, #1590, #1588, #1582, #1583, #1579, #1581)
   - Provider-related issues (#1598, #1596, #1586, #1573, #1571, #1569, #1568)
   - Anthropic-related (#1571, #1572)
   - TUI-related (#1577, #1574, #1475)
   - Maintenance issues from @Kenmege

3. PRs (39 total, 20 shown):
   - Provider fixes: #1597 (529/5xx), #1599 (402 failover), #1505 (max_context_window)
   - iOS fixes: #1595, #1593, #1591, #1585, #1589
   - Anthropic: #1572, #1565
   - Auth: #1587
   - TUI: #1578, #1576, #1567, #1456
   - Other: #1550 (Bedrock), #1564 (restart), #1575 (openrouter), #1570 (nix)

Let me write the report in Chinese.</think>

# jcode 社区动态日报 · 2026-09-30

---

## 📌 今日速览

今日 jcode 社区呈现 **三连发版本 + iOS 全栈修复 + Provider 容错升级** 的密集更新节奏。v0.89.1–v0.89.3 接连聚焦 Cursor 兼容性、Herdr 集成与 MCP 桥接；与此同时，iOS 端通过 PR #1585 一次性解决 4 个阻塞性问题（缺 `working_dir`、无限重连、中断丢消息、连接卡死），社区重心已从桌面端扩展到移动端稳定性。

---

## 🚀 版本发布

### v0.89.3 — Herdr 支持与 /cloud 会话迁移
- **Herdr 集成**：jcode 成为 Herdr 一等代理，侧边栏与代理列表展示名称与工作/空闲状态，支持 `herdr agent wait`；Herdr 重启后自动恢复原 jcode 会话窗格。
- **会话路由**：`/cloud` 与 `/local` 命令可显式迁移会话。

### v0.89.2 — Cursor MCP 工具调用跨模型修复
- Composer、Grok 4.7/4.6、Claude 模型下 Cursor MCP 工具调用不再挂起。
- `/model` 切换到 Cursor 时遗留的 MCP 卡死问题一并修复。

### v0.89.1 — Cursor Provider 全面回血 + 新小组件
- Cursor 工具通过原生 MCP 桥接恢复工作；fast/high/thinking 模型 ID 解析正确，`/fast` 重新可用。
- 新增 **Commits 小组件** 与独立**图表窗格快捷键**。
- [Release 列表](https://github.com/1jehuang/jcode/releases)

---

## 🔥 社区热点 Issues

| # | Issue | 重要性 | 链接 |
|---|-------|--------|------|
| 1 | **#294** File uploading @ 自动补全缺失（5 评论） | 高频功能呼声最高的体验改进之一，5 条评论反映用户对 IDE-like 文件引用行为的强烈期待 | [#294](https://github.com/1jehuang/jcode/issues/294) |
| 2 | **#1580** iOS ATS 阻断 tailnet 网关 | iOS 跨设备协作基础障碍，ATS 是 Apple 平台强约束，修复涉及网络栈配置 | [#1580](https://github.com/1jehuang/jcode/issues/1580) |
| 3 | **#1598** 402 余额耗尽时同模型多 Provider 失败 | 影响多网关 OpenAI 兼容用户的可用性，与 PR #1599 直接绑定 | [#1598](https://github.com/1jehuang/jcode/issues/1598) |
| 4 | **#1596** OpenAI 兼容 Provider 529/5xx 不重试 | 高峰期稳定性问题，触发 PR #1597 修复 | [#1596](https://github.com/1jehuang/jcode/issues/1596) |
| 5 | **#1586** 中途换 Claude/OpenAI 账号导致旧会话卡死 | 鉴权一致性问题，PR #1587 提供方案 | [#1586](https://github.com/1jehuang/jcode/issues/1586) |
| 6 | **#1571** Anthropic 400: tool_use 缺少紧随的 tool_result | 状态机 bug 导致整个会话永久卡死，PR #1572 与 #1565 双管齐下 | [#1571](https://github.com/1jehuang/jcode/issues/1571) |
| 7 | **#1577** 默认 effort 循环跳到 swarm-deep 且不回绕 | UX 误导风险，触发 PR #1578 修复 | [#1577](https://github.com/1jehuang/jcode/issues/1577) |
| 8 | **#1574** conversation_search 在多字节字符附近 panic | i18n 健壮性缺陷，PR #1576 已修 | [#1574](https://github.com/1jehuang/jcode/issues/1574) |
| 9 | **#1582** iOS 中途断网导致回复丢失 | 移动端最致命的体验断点之一 | [#1582](https://github.com/1jehuang/jcode/issues/1582) |
| 10 | **#1568** GLM-5.3 上下文窗口误判为 200K（应为 1M） | 国产模型上下文配置错误直接影响可用上下文预算 | [#1568](https://github.com/1jehuang/jcode/issues/1568) |

---

## 🛠 重要 PR 进展

| # | PR | 内容 | 链接 |
|---|----|----|------|
| 1 | **#1585** iOS: 发送 `working_dir`、跨断连保活、停止无效重连 | 一次性关闭 #1579/#1581/#1582/#1583 四个 iOS 阻塞性 bug，是今日最关键的合并候选 | [#1585](https://github.com/1jehuang/jcode/pull/1585) |
| 2 | **#1599** OpenAI 兼容 Provider 402 余额耗尽自动切换 | 实现多 Provider 信用容灾，提升混合网关工作流的鲁棒性 | [#1599](https://github.com/1jehuang/jcode/pull/1599) |
| 3 | **#1597** OpenAI 兼容 Provider 529/5xx 自动重试 | 直接降低高峰期错误率 | [#1597](https://github.com/1jehuang/jcode/pull/1597) |
| 4 | **#1572** Anthropic: 将晚到的 tool_result 提升至 tool_use 之后 | 解决会话永久卡死，状态机纠错 | [#1572](https://github.com/1jehuang/jcode/pull/1572) |
| 5 | **#1565** Anthropic: 孤儿 tool_result 改写为文本而非 400 | 兜底策略，避免会话完全无法恢复 | [#1565](https://github.com/1jehuang/jcode/pull/1565) |
| 6 | **#1587** 中途换账号时运行中会话跟随新账户 | 鉴权热切换，对多账号用户是刚需 | [#1587](https://github.com/1jehuang/jcode/pull/1587) |
| 7 | **#1567** `/model` + Enter 打开可搜索的模型浏览器 | TUX 体验升级，支持模糊搜索与 Provider 过滤 | [#1567](https://github.com/1jehuang/jcode/pull/1567) |
| 8 | **#1578** effort 循环回绕并隔离 swarm 模式 | 防止用户误入高级模式 | [#1578](https://github.com/1jehuang/jcode/pull/1578) |
| 9 | **#1570** Nix Flake（package、dev shell、modules） | 填补 Nix 用户分发与开发环境的空白 | [#1570](https://github.com/1jehuang/jcode/pull/1570) |
| 10 | **#1550** Bedrock Claude 5 系列声明工具支持 | 修正 AWS Bedrock Claude 5 路由 ID 的能力声明 | [#1550](https://github.com/1jehuang/jcode/pull/1550) |

---

## 📈 功能需求趋势

从 35 条 Issue 提炼，社区当前最强烈的诉求集中在六大方向：

1. **iOS / 移动端稳定性**（占比最高，~30%）
   涵盖 ATS 网络策略、订阅协议、断连恢复、UI 状态闪烁、tool call 丢失等全链路问题，标志 jcode 已进入跨端成熟期。

2. **Provider 容错与多源路由**
   402 计费失败切换（#1598）、529/5xx 重试（#1596）、同模型多 Provider 故障转移——用户在生产环境中已普遍混用多个网关，对**自动容灾**的需求强烈。

3. **Anthropic 协议一致性**
   tool_use/tool_result 顺序错位导致整会话 400（#1571、孤儿 #1565）成为高频痛点，反映 Anthropic 工具语义对会话状态机的强约束。

4. **Cursor IDE 集成深化**
   v0.89.1–v0.89.3 三连击均围绕 Cursor MCP 桥接，社区正把 Cursor 作为第一类 IDE 适配目标。

5. **国产/长上下文模型支持**
   GLM-5.3 误判 200K（#1568）、Openference 配额窗口（#1426）凸显 Z.AI 系模型的上下文与限流策略亟待硬化。

6. **TUI / 桌面交互改进**
   effort 循环（#1577）、模型浏览器（#1567）、Overview 布局（#1456）、sixel 检测（#1475）——TUI 仍是核心体验打磨区。

---

## 💡 开发者关注点

通过分析 Issue 评论、维护者 @Kenmege 一系列 maintenance 合并、@SiavZ / @0x7067 的高频提交，可总结出以下开发者痛点：

- **多 Provider 真实使用场景**：用户早已不满足单一 Claude/OpenAI，多 OpenAI 兼容网关 + Anthropic + Bedrock + Codex 共存，需要**账户级热切换、计费容灾、配额感知**的统一抽象。
- **Anthropic 工具调用协议脆弱**：tool_result 顺序敏感是结构性难点，开发者更期望本地重写而非服务端兼容。
- **iOS 端连接生命周期**：短暂断连是移动设备常态，开发者反复要求**幂等 UI 状态 + 服务端续传**，而非让客户端无限重连。
- **测试基础设施稳定性**：@Kenmege 连续合并 7+ 条 maintenance 修复（mock listener deadline、telemetry lease、kill_on_drop 子进程、Scratch 目录竞争等），说明项目正在从快速迭代期进入**测试可重复性硬化期**。
- **国际化与字节边界**：conversation_search 在多字节字符 panic 提醒社区——所有字符串切片必须走 `char_indices`/`floor_char_boundary`，未来中文/日韩/土耳其语用户比例上升时是关键防线。
- **包管理与分发**：Nix Flake（#1570）首次合并，反映社区对 **可复现构建 + 声明式模块** 的诉求，与主流 Rust CLI 趋势一致。

---

*日报基于过去 24 小时 GitHub 数据生成。下次日报时间：2026-10-01。*

</details>

<details>
<summary><strong>pi</strong> — <a href="https://github.com/earendil-works/pi">earendil-works/pi</a></summary>

<think>Let me analyze the GitHub data for the pi community (earendil-works/pi) and create a comprehensive daily report for 2026-09-30.

Key observations:
1. Two releases in past 24 hours: v0.99.1 and v0.99.0
2. v0.99.0 introduces "Codemode and MCP" - significant feature
3. v0.99.1 makes GPT-6.1 Sol the default OpenAI Codex model
4. Many issues are from last 24 hours with high activity
5. Issue #7547 (Windows usage) has 69 comments - most discussed
6. Several MCP-related issues since the v0.99.0 codemode/MCP launch
7. Lots of package/installation related issues
8. Login/OAuth issues are prevalent

Let me structure the report now.

Key issues to highlight (top 10):
1. #7547 - Windows usage discussion (69 comments)
2. #8643 - Bedrock OpenAI image handling
3. #10011 - Hide tool rows in transcript
4. #9566 - Context size defaults to 128k
5. #9962 - Native provider race condition (CLOSED)
6. #10144 - Queued prompts not batching
7. #10074 - Anthropic tool calls corrupted non-ASCII
8. #10045 - Auto compaction on Opus 5.5 blocked
9. #10184 - ChatGPT sign-in invalid_client (CLOSED, 6 likes)
10. #10182 - ChatGPT login fails (CLOSED, 4 likes)

Key PRs to highlight (top 10):
1. #10200 - reasoning summary separation test
2. #10199 - MCP server guide improvement
3. #10197 - unify package artifact validation
4. #10194 - copy code login for Anthropic OAuth
5. #10193 - preserve renderer example prompt guidance
6. #10190 - mark native providers configured on registration
7. #8635 - preserve aborted stop reason during lazy setup
8. #10174 - warn when replaceable builtin replaced
9. #9329 - detect Orca terminals as Kitty-image capable
10. #10122 - managed llama.cpp server mode
11. #10165 - track discarded user bash output
12. #10159 - built-in extensions as builtin:<name> paths

Trends:
- MCP ecosystem support (new in v0.99.0, multiple issues already)
- Login/OAuth issues (ChatGPT, Anthropic)
- Cross-platform support (Windows, Orca terminal)
- Performance (prompt latency, idle CPU)
- Package/install issues
- Local model support (llama.cpp)
- Anthropic Claude model quirks
- Bedrock integration

Let me write this in Chinese, professional and concise.</think>

# Pi 社区动态日报 · 2026-09-30

## 📌 今日速览

v0.99 双版本同日发布，**Codemode 与 MCP 集成**成为里程碑特性，让模型可通过 JavaScript 并行调用工具；GPT-6.1 Sol 已晋升为 OpenAI Codex 默认模型。社区讨论高度集中在 Windows 兼容性（69 条评论）、MCP 相关稳定性问题以及 Login/OAuth 流程的回归。

---

## 🚀 版本发布

### v0.99.0 — Codemode & MCP 正式登场
- 新增 **Codemode 模式**：连接 MCP 服务器，让模型用 JavaScript 并行调用工具
- 详见 [MCP Servers 文档](https://github.com/earendil-works/pi/blob/v0.99.0/packages/coding-agent/docs/mcp.md)
- 🔗 https://github.com/earendil-works/pi/releases/tag/v0.99.0

### v0.99.1 — GPT-6.1 Sol 上线
- **GPT-6.1 Sol** 已可在 OpenAI、Azure OpenAI、OpenAI Codex 使用，并成为 Codex 默认模型
- 🔗 https://github.com/earendil-works/pi/releases/tag/v0.99.1

---

## 🔥 社区热点 Issues

| # | Issue | 关注点 | 链接 |
|---|-------|--------|------|
| **#7547** | Windows 下使用 Pi 的方式与问题盘点 | 社区围绕"Windows 路径优先级"展开讨论，呼吁整理出官方支持矩阵，是近 30 天讨论最热的 issue | [🔗](https://github.com/earendil-works/pi/issues/7547) |
| **#8643** | Bedrock 上 OpenAI 模型拒绝 toolResult 内的图片 | 贡献者已备好补丁和回归测试，影响多模态 agent 流程 | [🔗](https://github.com/earendil-works/pi/issues/8643) |
| **#10011** | 提议：在交互式 transcript 中隐藏工具行 | 已关闭（no-action），但 7 条评论反映 UI 信息噪音问题集中 | [🔗](https://github.com/earendil-works/pi/issues/10011) |
| **#9566** | context 默认 128k，忽略真实可用值 | 影响自建 `models.json` 的开发者，4 👍，model catalog 优先级问题 | [🔗](https://github.com/earendil-works/pi/issues/9566) |
| **#10144** | 队列中的 prompt 被逐条发送而非批处理 | 之前 AI 自动生成的报告被关闭，作者重新手动提交 | [🔗](https://github.com/earendil-works/pi/issues/10144) |
| **#10074** | Anthropic 工具调用中非 ASCII 参数静默损坏 | 韩文文件编辑失败、出现 `\b`/`\f` 控制字符，对本地化工作流影响严重 | [🔗](https://github.com/earendil-works/pi/issues/10074) |
| **#10045** | Opus 5.5 在 Bedrock 自动压缩被 Anthropic 政策拦截 | 长会话到 98% 触发失败，社区请求替代压缩策略 | [🔗](https://github.com/earendil-works/pi/issues/10045) |
| **#10184** | Sign in with ChatGPT 报 `invalid_client` | 关闭前获 6 👍，OpenAI 端 OAuth 客户端配置疑似失效 | [🔗](https://github.com/earendil-works/pi/issues/10184) |
| **#10182** | 0.99.0 ChatGPT 登录失败：bundle 缺少 `openai-chatgpt.js` | 4 👍，确认是 npm tarball 打包回归，与 v0.99.0 发布直接相关 | [🔗](https://github.com/earendil-works/pi/issues/10182) |
| **#10202** | `pi remove` 改写 lockfile 并翻转 `autoInstallPeers` | 安装/卸载路径 pnpm flag 不一致，受管项目出现 ~2.5k 行 lockfile diff | [🔗](https://github.com/earendil-works/pi/issues/10202) |

---

## 🛠️ 重要 PR 进展

| PR | 内容 | 链接 |
|----|------|------|
| **#10197** | `feat`: 统一包产物校验（OPEN） | 引入 manifest 驱动的 content-addressed 产物，让本地验证更接近发布版本 | [🔗](https://github.com/earendil-works/pi/pull/10197) |
| **#10194** | `feat(ai)`: 给 Anthropic OAuth 增加 copy-code 登录（OPEN） | 远程机器无法 localhost 回调的痛点，作者已在 Atelier 云代理生产环境验证 | [🔗](https://github.com/earendil-works/pi/pull/10194) |
| **#10193** | `fix(coding-agent)`: 保留 renderer 示例的 prompt 指引（OPEN） | 修复最小模式 edit renderer 与系统提示示例回归 | [🔗](https://github.com/earendil-works/pi/pull/10193) |
| **#10190** | `fix`: 注册时将已存凭据的原生 provider 标记为 configured（CLOSED） | 解决 #9962 启动竞态导致的"No models available"问题 | [🔗](https://github.com/earendil-works/pi/pull/10190) |
| **#8635** | `fix(ai)`: 惰性 setup 期间保留 aborted 停止原因（OPEN） | 修复工具执行中中断信号丢失，影响长 agentic run 的可中断性 | [🔗](https://github.com/earendil-works/pi/pull/8635) |
| **#10174** | `fix(extensions)`: 内建扩展被替换时给出警告（CLOSED） | `/mcp` 等内建扩展加入 `replaceable` 后的可见性提醒 | [🔗](https://github.com/earendil-works/pi/pull/10174) |
| **#9329** | `fix(tui)`: 将 Orca 终端识别为 Kitty-image 能力（OPEN） | 让 Orca 终端正常显示内嵌图片与 OSC 8 链接 | [🔗](https://github.com/earendil-works/pi/pull/9329) |
| **#10122** | `feat`: 受管 llama.cpp 服务模式（OPEN） | `/login llama.cpp` 现在可自启 llama-server，进程退出自动停止 | [🔗](https://github.com/earendil-works/pi/pull/10122) |
| **#10165** | `fix`: 追踪被丢弃的用户 bash 输出（OPEN） | `!` 命令截断时给模型补回 truncation 提示与全量日志路径 | [🔗](https://github.com/earendil-works/pi/pull/10165) |
| **#10159** | `refactor`: 内建扩展解析为 `builtin:<name>`（CLOSED） | 允许在 `pi config` 中按项目或全局禁用 `mcp`/`codemode`/`tool-search` 等 | [🔗](https://github.com/earendil-works/pi/pull/10159) |

---

## 📈 功能需求趋势

1. **🧩 MCP 生态成熟化** — v0.99.0 落地后立刻涌现多个跟进 issue：`codemode.mode: "only"` 系统提示与隐藏工具不一致（#10192）、Cloudflare Workers StreamableHttpTransport 失败（#10188）、TUI 缺少 OSC-8 可点击授权链接（#10186）。生态已从"能跑"进入"可用"阶段。
2. **🔐 多平台 OAuth/Login 体验** — ChatGPT 登录在 v0.99.0 直接坏掉（#10182），加上 Anthropic 远程机器的 copy-code 流程（#10194），显示身份认证仍是最大 UX 障碍。
3. **💻 本地模型优先** — `llama.cpp` 一日内连续获得 managed server mode（#10122）、context 缓存保留（#10158）、文档更新（#10179），是当前投入最密集的方向。
4. **🪟 跨平台与终端适配** — Windows（#7547）、Orca 终端（#9329）、Workers（#10188）三处覆盖说明 Pi 正在从 macOS 优先走向全平台。
5. **⚡ 性能回归治理** — 0.99.0 起 prompt submit 延迟随 session 增长（#10198）、idle CPU 占用 1.5 核（#10191）、cache warmer 对长 TTL 不刷新（#10180），多个 issue 集中在响应式优化。

---

## 💬 开发者关注点

- **发布流程回归**：`#10182` 的 bundle 缺文件、`#10197` 的统一产物校验，表明 v0.99.0 上线时打包/CI 链路需要加强把关。
- **错误信息与可观测性**：Anthropic 工具调用非 ASCII 静默损坏（#10074）、Opus 自动压缩失败（#10045）、SessionManager 失败后状态不一致（#10166）—— 开发者希望工具调用失败、压缩触发、长会话恢复时能更早暴露问题。
- **npm 生态与包管理**：`pi remove` 改写 lockfile（#10202）、`pi-maestro-flow` 编译二进制加载失败（#10203）、npm install 拉全平台 esbuild（#9979），三大类问题集中在包管理与扩展解析。
- **TUI 渲染细节**：多行语法高亮丢失（#10143）、隐藏 tool 行（#10011）、可配置鼠标滚轮（#10156）、Orca 图像支持（#9329）—— 终端交互细节开始进入快速迭代期。
- **模型目录与定价数据**：128k context 误用（#9566）、Bedrock 图片嵌套（#8643）、Z.AI CN 端 1261 错误码（#10208）暴露了多模型/多端点兼容是长期维护负担。

---

*日报数据基于 `earendil-works/pi` 仓库过去 24 小时内更新的 Releases、Issues 与 Pull Requests。*

</details>

---
*本日报由 [Big Model Radar](https://github.com/96loveslife/big_model_radar) 自动生成。*
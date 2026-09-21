# AI CLI 工具社区动态日报 2026-09-21

> 生成时间: 2026-09-21 04:19 UTC | 覆盖工具: 8 个

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

<think>The user wants a comprehensive cross-comparison analysis report of multiple AI CLI tools based on the daily summaries provided. Let me synthesize the information from all 7 tools (Claude Code, OpenAI Codex, Gemini CLI, GitHub Copilot CLI, Kimi Code CLI, OpenCode, jcode, pi) into a structured analysis.

Let me extract key metrics from each:

**Claude Code:**
- Issues updated: 50
- PRs updated: 5
- Releases: 0
- Key themes: Mods/Hooks extensibility, model behavior drift, IDE/Desktop stability

**OpenAI Codex:**
- Issues updated: 50
- PRs updated: 39
- Releases: 5 alpha versions (0.156.0-alpha.10 to alpha.14)
- Key themes: Windows desktop stability, quota transparency, Computer/Browser Use

**Gemini CLI:**
- Issues updated: many (implied 50)
- PRs updated: many (implied 30+)
- Releases: 1 nightly (v0.62.0-nightly.20260921)
- Key themes: Agent/Subagent reliability, Auto Memory, AST-aware reads

**GitHub Copilot CLI:**
- Issues updated: 31
- PRs updated: 0
- Releases: 0
- Key themes: MCP ecosystem, session reliability, Auto model selection

**Kimi Code CLI:**
- Issues updated: 3
- PRs updated: 3
- Releases: 0
- Key themes: Client stability, CJK/encoding, OAuth retry

**OpenCode:**
- Issues updated: 50
- PRs updated: 50 (20 shown)
- Releases: 0
- Key themes: Multi-provider compatibility, TUI optimization, V1→V2 migration

**jcode:**
- Issues updated: many
- PRs updated: many (20+)
- Releases: 1 (v0.86.0)
- Key themes: Provider compatibility (Grok Build, OpenAI compat), Swarm coordination

**pi:**
- Issues updated: 44
- PRs updated: 7
- Releases: 1 (v0.86.1)
- Key themes: 0.86.x regressions, Windows experience, provider adaptation

Now let me structure the analysis:

1. **生态全景** - Overall landscape
2. **活跃度对比** - Activity comparison table
3. **共同关注方向** - Common focus areas
4. **差异化定位** - Differentiation
5. **社区热度与成熟度** - Community activity and maturity
6. **趋势信号** - Trend signals

Let me write a professional, data-driven report in Chinese.</think>

# AI CLI 工具生态横向对比分析报告
**数据周期：2026-09-20 ~ 2026-09-21**

---

## 一、生态全景

当前 AI CLI 工具市场已进入"扩张 + 分化"并行阶段：一方面 Anthropic（Claude Code）与 OpenAI（Codex）持续以官方旗舰姿态加速迭代，Google（Gemini CLI）保持 nightly 高频更新，GitHub（Copilot CLI）依托平台优势补齐 MCP 与企业 OAuth 能力；另一方面，jcode、OpenCode、pi 等开源/社区驱动项目迅速崛起，围绕 **Provider 兼容性、扩展性、可观测性** 建立了差异化竞争力。社区诉求呈现高度趋同——**MCP 协议成熟化、配额透明度、跨平台稳定性、Agent/Subagent 可靠性** 已成为全行业共同命题，而 Windows 体验、本地化（CJK/编码）、工具调度智能度等"长尾痛点"则尚未被任一工具系统性解决。

---

## 二、各工具活跃度对比

| 工具 | 今日 Issues | 今日 PRs | 今日 Releases | 关键信号 |
|------|-----------|---------|--------------|----------|
| **Claude Code** | 50 | 5 | 0 | 官方对 #91870 "Mods" 扩展性做出正式承诺，是当日最重要正面信号 |
| **OpenAI Codex** | 50 | 39 | 5 个 alpha（0.156.0-alpha.10~14）| Rust 端高频回归，PR 全部由自动化代理提交，开发节奏最快 |
| **Gemini CLI** | 活跃（多 P1 agent bug）| ~30 | 1 nightly（v0.62.0-nightly.20260921）| v0.62 nightly 持续打磨，nightly 节奏稳定 |
| **GitHub Copilot CLI** | 31 | 0 | 0 | 仓库 PR 维度静默，18 条 Issue 已关闭，依赖内部快速修复 |
| **Kimi Code CLI** | 3 | 3 | 0 | 社区活动量明显偏低（仅 3/3），处于维护期信号 |
| **OpenCode** | 50 | 50（20 显示）| 0 | Issue/PR 均高活跃，22/30 已被关闭，处理效率高 |
| **jcode** | 活跃（critical bug 多）| 20+ | 1（v0.86.0）| 发布 v0.86.0，Jev handoff 与记忆重写 |
| **pi** | 44 | 7 | 1（v0.86.1）| 发布 v0.86.1 引入 Meta Muse，多项 0.86 升级回归 |

**活跃度排名（综合 Issue + PR + Release）**：
`OpenAI Codex ≈ OpenCode > Claude Code > pi > Gemini CLI > GitHub Copilot CLI > jcode > Kimi Code CLI`

---

## 三、共同关注的功能方向

以下 7 个方向在多个工具社区同步出现，是行业级共识：

### 1. **MCP 协议生态成熟化** 🔥🔥🔥🔥🔥
- **Claude Code**：Claude Design MCP 403（#92215）、Google Drive connector 不可更新（#95292）
- **GitHub Copilot CLI**：Figma 远程服务器加载失败（#4870，👍11）、Google Workspace OAuth 严格 issuer 校验失败（#4606）、Windows stdio 启动问题、tool refresh 超时
- **OpenAI Codex**：MCP OAuth 缺 scopes（#20503）、MCP-only 工具沙箱诉求（#6049，👍46）、subagent 发起 MCP elicitation（#46877）
- **Gemini CLI**：浏览器 agent session takeover（#22232）

→ **结论**：MCP 已成为 CLI 工具的核心扩展协议，但**远程服务器发现、OAuth 鉴权、Windows stdio 兼容性**三大环节在所有工具中都存在边界 case，尚未形成统一最佳实践。

### 2. **Agent / Subagent 可靠性** 🔥🔥🔥🔥🔥
- **Gemini CLI**：subagent MAX_TURNS 后误报 success（#22323，P1）、generalist agent 挂死（#21409）
- **Claude Code**：SubagentStart hook 缺 updatedInput、Agent effort 不可 per-call 覆盖（#77298）
- **jcode**：daemon 重放 detached 命令致系统挂起（#940，critical）、swarm 不可见 session 写 git 14 小时（#1321）
- **OpenAI Codex**：subagent 完成时抢先 flush 父级流（#46867）

→ **结论**：多代理架构是所有工具的演进方向，但**子代理状态机、可见性、错误传播、用户取消**是反复出现的破坏面。

### 3. **配额透明度与计费可观测性** 🔥🔥🔥🔥
- **OpenAI Codex**：打开桌面即耗 6% 周配额（#37445，👍13）、配额交叉汇总（#41220）、数小时耗尽（#46901）→ TUI 已开始常驻告警（#46912）
- **OpenCode**：Zen 免费模型跨模型重试计时器累加（#50093）
- **jcode**：Cost 估算偏离真实账单（#1331），PR #1353 提出 config-authoritative 方案
- **GitHub Copilot CLI**：OTel spans 缺子代理计费属性（#4224）

→ **结论**：付费用户对"被谁吃了配额"的不满在多个工具中同步出现，**可见的后台活动列表 + 可解释的扣费粒度** 是下一阶段必争之地。

### 4. **跨平台稳定性（尤其 Windows）** 🔥🔥🔥🔥
- **OpenAI Codex**：Windows 桌面端"首轮后无法发消息"集群（#44102、#45797、#46299、#46590）、Win10 22H2 截图失败（#25178）
- **pi**：Windows 调研贴 67 评论（#7547）、CJK IME 候选窗不显示（#9497）、剪贴板回归（#9688）、0.86 升级模块导入失败（#9794）
- **Gemini CLI**：浏览器 subagent 在 Wayland 下失败（#21983）
- **OpenCode**：Windows 项目选择器路径错位（PR #50271）
- **GitHub Copilot CLI**：Linux ARM64 64KiB 页 ripgrep 崩溃（#4918）

→ **结论**：Windows 已是 Bug 报告"重灾区"，pi 的调研贴反映出 Windows 潜在用户规模可能远大于 Linux，但任一工具都尚未提供企业级 Windows 体验保障。

### 5. **Provider / 多模型兼容** 🔥🔥🔥🔥
- **OpenCode**：Bedrock GPT-6 Astra 图片问题（#48069）、DeepSeek V4 Flash、QwenCloud International、Together AI 用量
- **jcode**：Grok Build 系列 4 个独立 issue、OpenAI 兼容代理 finish_reason 误触发（#1326）、OpenCode Go 多协议 500（#1224）
- **pi**：Mistral 忽略 Retry-After（#9815）、OpenAI 专有字段透传至兼容 provider（#9508）、Cerebras strict mode 400（PR #9804）
- **Claude Code**：British English 渗入美区项目（#90603、#91679）
- **OpenAI Codex**：Antigravity 配额（#1329）、NInfer strict_tools 400

→ **结论**："接入新模型 0 改动"是社区最强烈诉求，**provider 元数据 + 容错层**成为各工具架构层的关键差异点。

### 6. **扩展性与"Mods / Hooks / 插件"体系** 🔥🔥🔥
- **Claude Code**：Mods 扩展性提案（#91870，官方承诺数周内交付）、插件粒度太粗（#14920）、hook systemMessage 不渲染（#95774）
- **GitHub Copilot CLI**：sessionStart hook 只注入最后一个（#3589）、preToolUse hook 拒绝逻辑失效（#3874）
- **Gemini CLI**：skill 调度不主动（#21968）、symlink agent 不识别（#20079）

→ **结论**：扩展体系是 Claude Code 当前最明确的差异化方向，且获得官方积极回应。

### 7. **本地化与编码兼容** 🔥🔥
- **Kimi Code CLI**：Windows GBK stdout 编码崩溃（PR #2657）、CJK Web IME 误提交（PR #2658）
- **pi**：Windows CJK IME（#9497）
- **Claude Code**：Write/Edit 工具解码 `\uXXXX` 破坏字面文本（#72957）
- **Gemini CLI**：UTF-16 代理对截断 emoji（PR #29303、#29304）

→ **结论**：CJK 用户在每个工具中都遭遇"看不见但致命"的体验问题，属于典型"长尾但高频"痛点。

---

## 四、差异化定位分析

| 工具 | 核心定位 | 目标用户 | 技术路线亮点 |
|------|---------|---------|------------|
| **Claude Code** | 官方旗舰，扩展性先行 | 重度开发者、追求可定制生态 | Mods / function hooks / plugins 体系；plugins 是当前最强护城河 |
| **OpenAI Codex** | OpenAI 生态核心入口 | 订阅用户、Windows + Mac 桌面端用户 | Rust 实现 + TUI 高频迭代；GPT-5.6 系列 + Computer/Browser Use |
| **Gemini CLI** | Gemini 3 模型的最佳载体 | 工具链偏好 bash/POSIX 的开发者 | 原生 bash 工具亲和 + Auto Memory + AST-aware 读取规划 |
| **GitHub Copilot CLI** | 平台型企业级入口 | 企业用户、GitHub 生态深度用户 | 与 VS Code / GitHub Actions 深度集成；MCP + OTel 可观测性 |
| **Kimi Code CLI** | 中文场景优化 | 中文开发者、Kimi 订阅用户 | Web 端 CJK IME 处理、print 模式编码兼容 |
| **OpenCode** | 开源 Provider 路由中心 | 多模型用户、桌面/CLI 混合使用者 | 多供应商（Bedrock/DeepSeek/QwenCloud/Together）兼容；Effect V4 RC 跟进 |
| **jcode** | Swarm / 多代理协调探索者 | 研究型开发者、需要 swarm 编排的用户 | Swarm 协调、Jev 浏览器 handoff、citation-backed memory |
| **pi** | 终端体验打磨者 | 终端原生用户、扩展作者 | Meta Muse 接入、system message delta、扩展 API 稳定性 |

**关键差异化洞察**：

- **Claude Code vs Codex**：Claude Code 押注"插件生态飞轮"，Codex 押注"桌面端 + 多模态"——这是两条截然不同的护城河策略。
- **Gemini CLI 的"bash 亲和"**：#19873 提出"利用 Gemini 3 的 bash 亲和性做零依赖 OS 沙箱"是极具想象力的差异化方向，但目前尚未落地。
- **OpenCode / jcode / pi 的开源三角**：三者都把"Provider 兼容性 + 终端体验"作为核心，但 OpenCode 偏供应商路由、jcode 偏 swarm 协调、pi 偏 terminal-native UX。

---

## 五、社区热度与成熟度

| 维度 | 第一梯队 | 第二梯队 | 观察 |
|------|---------|---------|------|
| **社区活跃度** | Claude Code, OpenAI Codex, OpenCode | pi, Gemini CLI, GitHub Copilot CLI, jcode | Kimi Code CLI 显著偏低（仅 3/3），可能是发布节奏或规模所致 |
| **迭代速度** | OpenAI Codex（5 alpha/天）, Gemini CLI（nightly） | pi（v0.86.1）, jcode（v0.86.0） | Claude Code 当日 0 release 是反常信号 |
| **Bug 修复效率** | OpenCode（22/30 已关闭）, GitHub Copilot CLI（18/31 已关闭） | OpenAI Codex（PR 全自动提交）, pi | Kimi Code CLI 长期悬挂 Issue（#1534 历经半年关闭）反映 backlog 压力 |
| **问题严重度** | jcode 多 critical（#940、#1224、#1321），Gemini CLI 多 P1 | pi 多 regression（#9822、#9794） | 各工具均存在"看不见的活动"型高危问题（#1321、#95773） |
| **官方响应度** | Claude Code（#91870 正式承诺）, OpenAI Codex（alpha 密集） | GitHub Copilot CLI（大量 Issue 关闭但 PR 不公开） | Kimi Code CLI、jcode 维护者本人深度参与修复 |

**成熟度评估**：

- **成熟稳定**：OpenAI Codex、Claude Code ——功能丰富但开始出现"功能膨胀"反思（如 #44546 移除桌面宠物、#41622 关闭自动 recap）
- **快速迭代**：Gemini CLI、pi、jcode ——版本号推进快，nightly/小版本高频，但伴随较多回归
- **规模化中**：OpenCode ——Issue/PR 量与一线工具持平，开源治理模式日趋成熟
- **维护期**：Kimi Code CLI ——活跃度显著低于其他工具，可能是战略聚焦其他产品线

---

## 六、值得关注的趋势信号

### 趋势 1：从"功能竞赛"转向"功能可裁剪性"
- Codex #41622（关闭 recap, 👍83）、#44546（移除宠物, 👍13）、#6049（MCP-only, 👍46）
- Claude Code #14920（细粒度禁用 skill）

**信号**：用户从"希望工具更聪明"转向"希望工具更克制"，**"显式优于隐式"成为重度用户共识**。对开发者的参考：在选择 AI CLI 时，"可关闭的能力清单"比"炫酷功能演示"更值得评估。

### 趋势 2：Provider 兼容性从"加分项"变为"生死线"
- OpenCode / jcode / pi 三家开源工具全部把多 provider 作为核心卖点
- 官方工具（Claude Code、Codex）虽然在自有模型上深度优化，但开发者对"切模型"的需求仍在升温

**信号**：**单一模型供应商绑定正在成为产品风险**。即便是官方旗舰，也需要考虑"如果用户想换模型"的兼容路径。

### 趋势 3：可观测性从"运维诉求"升级为"用户主权"
- 配额透明度（Codex #37445、#41220）
- Token 用量拆分（OpenCode #22103、pi #9807）
- 后台活动可见性（jcode #1321）

**信号**：当 AI 工具开始消耗真实资源（钱、电、时间），用户对**每一单位消耗的去向、可解释性、可中断性**的要求会指数级上升。开发者应将"可观测性"作为产品早期必须项而非后期补丁。

### 趋势 4：MCP 协议正在成为行业事实标准
- 8 个工具中有 4 个明确报告 MCP 相关 issue，且都集中在认证、远程发现、stdio 兼容性三大共性问题上

**信号**：MCP 已基本统一了工具调用层的协议，但**认证、发现、治理**三大配套标准尚未成熟，是未来 6-12 个月的最大变数。对于要构建 MCP server 的开发者，建议优先关注"issuer 严格匹配、Windows stdio 启动、tool refresh"三个高频踩坑点。

### 趋势 5：Agent 编排从"能用"走向"可控"
- jcode 的 swarm 协调 bug 集中爆发、Claude Code 的 SubagentStart hook 诉求、Gemini CLI 的 subagent 状态误报

**信号**：多代理架构的下一阶段重点不是"让 agent 跑起来"，而是**"让 agent 失败时优雅、可观测、可中断"**。开发者构建多代理系统时，应优先设计状态机、降级路径、取消信号。

### 趋势 6：Windows 体验成为最大"未开发金矿"
- pi 的 Windows 调研贴 67 评论、OpenAI Codex 的 Windows 桌面端 Bug 集群、Claude Code 的 VSCode 扩展回归

**信号**：开发者群体中 Windows 占比仍极高，但**没有任一工具在 Windows 上提供企业级体验保障**。这是当前最显著的"产品机会 vs 产品质量"错配。

---

## 七、对开发者的决策建议

---

## 各工具详细报告

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills 社区热点

> 数据来源: [anthropics/skills](https://github.com/anthropics/skills)

<think>The user wants me to analyze data from the anthropics/skills repository and generate a community hotspot report. Let me carefully analyze the data provided:

**Pull Requests (Top 20 shown, sorted by comments - but comments show as undefined)**

Looking at the PRs:
1. #1298 - fix(skill-creator): isolate trigger evals and handle Windows and runtime failures
2. #1771 - feat(skills): add proofcore-contract-auditor for smart contract notarization
3. #1742 - fix(mcp-builder): support mcp>=2 streamable_http_client import and custom headers
4. #1703 - Add md2video-audio skill
5. #1734 - Detect orphaned docx comments
6. #525 - Add pyxel skill for retro game development
7. #514 - Add document-typography skill
8. #1615 - Add scnet-hpc skill
9. #822 - feat: add AWT (AI Watch Tester)
10. #538 - fix(pdf): correct case-sensitive file references
11. #486 - Add ODT skill
12. #210 - Improve frontend-design skill clarity
13. #83 - Add skill-quality-analyzer and skill-security-analyzer
14. #1776 - Add blast-radius skill
15. #541 - fix(docx): prevent tracked change w:id collision
16. #539 - fix(skill-creator): warn on unquoted description
17. #1790 - fix(docx): create document.xml.rels
18. #1769 - Fix skill-creator trigger detection reporting 0% recall
19. #1765 - fix(office): decode redlining diffs as UTF-8
20. #1724 - mcp-builder: update evaluation.py default model to claude-sonnet-5

**Issues (Top 15 shown, sorted by comments)**

Top issues by comments:
1. #492 - Security: Community skills distributed under anthropic/ namespace - 43 comments
2. #228 - Enable org-wide skill sharing in Claude.ai - 16 comments
3. #556 - run_eval.py: claude -p never triggers skills/commands - 12 comments
4. #62 - All my skills have disappeared - 10 comments
5. #1329 - Proposing compact-memory skill - 9 comments
6. #202 - skill-creator should be updated to best practice - 8 comments (CLOSED)
7. #412 - Skill proposal: agent-governance - 6 comments (CLOSED)
8. #189 - document-skills and example-skills plugins install identical content - 6 comments
9. #1487 - claude-api skill eagerly injects ~156k tokens - 4 comments
10. #1390 - mcp-builder: evaluation.py scores 0/N - 4 comments
11. #1385 - Reasoning Quality Gate Pipeline - 4 comments
12. #1175 - Security and Context Window concerns with SharePoint - 4 comments (CLOSED)
13. #29 - Usage with bedrock - 4 comments
14. #16 - Expose Skills as MCPs - 4 comments
15. #1362 - web-artifacts-builder bundle failures - 3 comments

Note: The PR comments are all showing as "undefined" but the data is sorted by comments. This means I need to infer popularity from the sorting position itself, and supplement with other signals like 👍 count, update dates, etc.

Wait, looking more carefully - the comment counts are "undefined" which is unusual. The data is sorted by comments, so the top ones should have the most comments. But the actual count isn't shown. Let me assume the data is sorted by some popularity metric (likely comments since that's what the user said).

Let me identify the most "popular" PRs by position and content relevance:

1. #1298 - skill-creator fixes (top position, very recent updates)
2. #1771 - proofcore-contract-auditor (Web3 smart contract auditing)
3. #1742 - mcp-builder fixes (MCP integration)
4. #1703 - md2video-audio (Markdown to video)
5. #1734 - Detect orphaned docx comments
6. #525 - Pyxel retro game development (long-running PR, still open)
7. #514 - document-typography
8. #1615 - scnet-hpc (HPC cluster operations)
9. #822 - AWT E2E testing
10. #538 - pdf fixes
11. #486 - ODT skill
12. #210 - frontend-design improvements
13. #83 - skill-quality-analyzer and skill-security-analyzer
14. #1776 - blast-radius (destructive operations safety)
15. #541 - docx fixes
16. #539 - skill-creator YAML fixes
17. #1790 - docx fixes
18. #1769 - skill-creator trigger detection
19. #1765 - office redlining UTF-8
20. #1724 - mcp-builder model update

Now let me organize my report:

**1. Hot Skills Ranking** - Top 5-8 PRs
Looking at the most commented and substantive PRs, I'll select:
- #1298 - skill-creator improvements (most discussed, top of list)
- #1771 - proofcore-contract-auditor (Web3 trend)
- #1742 - mcp-builder MCP 2.0 support
- #1703 - md2video-audio (creative content)
- #525 - Pyxel game dev (long-running, retro game niche)
- #822 - AWT E2E testing (test automation trend)
- #514 - document-typography (quality of AI-generated docs)
- #1776 - blast-radius (safety/security for destructive ops)

**2. Community Needs Trends** - From Issues
- Security/Trust: #492 (namespace abuse), #1175 (SPO permissions)
- Org-wide sharing: #228
- Evaluation/testing reliability: #556, #1390, #1487
- Skill creator best practices: #202, #1769, #1298
- New skill proposals: #1329 (compact-memory), #1385 (reasoning quality gates), #412 (agent-governance)
- MCP integration: #16, #1742
- Plugin deduplication: #189
- Bedrock compatibility: #29

**3. High-Potential Pending Skills** - Not merged yet
- #1771 - proofcore-contract-auditor (Web3, blockchain)
- #525 - Pyxel (long-running, niche but committed)
- #514 - document-typography
- #1703 - md2video-audio
- #1615 - scnet-hpc
- #822 - AWT
- #486 - ODT
- #83 - skill-quality/security-analyzer
- #1776 - blast-radius

**4. Ecological Insights** - One sentence
The community is focused on three convergent themes: (1) trust and safety boundaries for community-contributed skills, (2) reliability and evaluation infrastructure for skill creators, and (3) extending skills into specialized domains (Web3, HPC, E2E testing, creative content).

Let me write this up in a clean, professional Chinese report.</think>

# Claude Code Skills 社区热点报告
**数据截止**：2026-09-21 | **数据源**：[anthropics/skills](https://github.com/anthropics/skills)

---

## 一、热门 Skills 排行（Top 8 PR）

| # | PR | Skill 名称 | 状态 | 核心功能 | 社区关注点 |
|---|---|---|---|---|---|
| 1 | [#1298](https://github.com/anthropics/skills/pull/1298) | **skill-creator 修复** | OPEN | 隔离 trigger 评估、修复 Windows 下 subprocess 管道 select() 失败 | skill-creator 是生态基础设施；该 PR 同时修 trigger 假阴性、Windows 兼容性、运行时失败被误判为非触发器三类顽疾 |
| 2 | [#1771](https://github.com/anthropics/skills/pull/1771) | **proofcore-contract-auditor** | OPEN | Solidity/Rust 智能合约静态分析 + TON 链上审计存证 | Web3 审计刚需 + 零存储 Merkle 协议存证，是 Skills 走向垂直行业的典型样本 |
| 3 | [#1742](https://github.com/anthropics/skills/pull/1742) | **mcp-builder 修复** | OPEN | 适配 `mcp>=2.0` 的 `streamable_http_client` 与自定义 HTTP headers | MCP 2.0 是 Claude Code 生态主线，配套修复直接影响所有 MCP 用户 |
| 4 | [#822](https://github.com/anthropics/skills/pull/822) | **AWT (AI Watch Tester)** | OPEN | 零代码 E2E 测试生成：让 Claude 获得视觉与浏览器控制能力 | 自动化测试是 Agent 最大落地场景之一，长达近半年仍未合并引发关注 |
| 5 | [#525](https://github.com/anthropics/skills/pull/525) | **Pyxel（复古游戏开发）** | OPEN | Python 复古游戏全流程：实现 / 无头调试 / 帧检视 / 状态校验 | 已 OPEN 超 6 个月，反映"垂直兴趣型 Skill"长期缺位的供需差 |
| 6 | [#1703](https://github.com/anthropics/skills/pull/1703) | **md2video-audio** | OPEN | Markdown → Marp 幻灯片 → MP4 + AI 配音，零成本文档视频化 | AIGC 内容生产链路补全，社区对"零成本内容创作"路径持续关注 |
| 7 | [#514](https://github.com/anthropics/skills/pull/514) | **document-typography** | OPEN | 排印质量控制：孤儿词 / 寡妇段 / 编号错位 | 直击"AI 生成文档普遍排版粗糙"这一日常痛点 |
| 8 | [#1776](https://github.com/anthropics/skills/pull/1776) | **blast-radius** | OPEN | 批量/破坏性写操作前的检查清单（归档、撤销、批量邮件等） | 呼应社区对 Agent 安全边界的强烈呼声（见 Issue #492） |

> 备注：所有热门 PR 当前均为 **OPEN** 状态，反映维护者审稿节奏较慢，社区积压明显。

---

## 二、社区需求趋势（按 Issue 评论数排序）

| 关注度 | 主题 | 代表 Issue | 趋势信号 |
|---|---|---|---|
| 🔴 **第一梯队** | **安全/信任边界** | [#492](https://github.com/anthropics/skills/issues/492)（43 评论） | 社区 Skill 借 `anthropic/` 命名空间冒充官方，构成信任滥用——这是当下最尖锐的治理问题 |
| 🟠 **第二梯队** | **企业级协作与评估** | [#228](https://github.com/anthropics/skills/issues/228)（16 评论）、[#556](https://github.com/anthropics/skills/issues/556)（12 评论） | 组织内 Skill 共享仍靠 Slack 手动传文件；`run_eval.py` 对所有 query 触发率为 0%，评估体系失灵 |
| 🟡 **第三梯队** | **Skill 创作工程化** | [#202](https://github.com/anthropics/skills/issues/202)（8 评论）、[#1769](https://github.com/anthropics/skills/pull/1769)（PR 同步修复） | skill-creator 自身需要"被改造"：触发器检测 0% recall、YAML 静默解析失败、token 效率差 |
| 🟢 **第四梯队** | **新 Skill 提案方向** | [#1329](https://github.com/anthropics/skills/issues/1329)（compact-memory，符号化状态）、[#1385](https://github.com/anthropics/skills/issues/1385)（Reasoning Quality Gate 三段管线）、[#412](https://github.com/anthropics/skills/issues/412)（agent-governance 安全模式） | **Agent 自身能力增强类**成为新热门：上下文压缩、推理质量门禁、Agent 治理 |
| ⚪ **长尾需求** | 集成与兼容性 | [#1390](https://github.com/anthropics/skills/issues/1390)（mcp-builder 0/N 评分）、[#1487](https://github.com/anthropics/skills/issues/1487)（claude-api 注入 156k token）、[#29](https://github.com/anthropics/skills/issues/29)（Bedrock 兼容）、[#16](https://github.com/anthropics/skills/issues/16)（Skill ↔ MCP 双向暴露） | 上下文污染、跨平台兼容、Skill/MCP 协议互通 |

**趋势总结**：社区需求正从"补全功能型 Skill"向 **"质量、安全、治理、协议互通"** 演进——即 Skills 2.0 的基建诉求。

---

## 三、高潜力待合并 Skills

下列 PR 关注度高但仍未合并，最有可能在近期落地：

| PR | Skill | 关注维度 | 推荐合并理由 |
|---|---|---|---|
| [#1298](https://github.com/anthropics/skills/pull/1298) | skill-creator trigger 评估修复 | 全生态基础设施 | 修评估管线 → 改善所有 Skill 的发布质量 |
| [#1742](https://github.com/anthropics/skills/pull/1742) | mcp-builder MCP 2.0 适配 | 协议主线 | 不合并则新 MCP 用户全部受阻 |
| [#1769](https://github.com/anthropics/skills/pull/1769) | skill-creator 0% recall 修复 | 全生态基础设施 | 与 #1298 协同，构成 skill-creator 修复套件 |
| [#1771](https://github.com/anthropics/skills/pull/1771) | proofcore-contract-auditor | 行业垂直（Web3） | 首批 Web3 Skill 样本，具备示范效应 |
| [#822](https://github.com/anthropics/skills/pull/822) | AWT E2E Tester | 测试自动化高频场景 | 长期搁置，社区呼声高 |
| [#1703](https://github.com/anthropics/skills/pull/1703) | md2video-audio | 内容创作链路 | 零成本、易传播、低争议 |
| [#1776](https://github.com/anthropics/skills/pull/1776) | blast-radius | Agent 安全 | 直接呼应 #492 安全议题，缓解社区焦虑 |

---

## 四、Skills 生态洞察（一句话）

> **当前社区最集中的诉求是"Skills 2.0 基础设施"——社区已不再满足于提交单个垂直 Skill，而是强烈呼吁建立 Skill 的信任边界（命名空间治理）、质量评估管线（trigger / eval 修复）、上下文约束（避免 156k token 注入）以及与 MCP/Claude.ai 的协议互通，把 Skills 从"散装工具集"升级为"可治理的企业级能力层"。**

---

### 📌 附录：数据观察
- **维护瓶颈**：Top 20 PR 全部为 OPEN 状态，最老的（#83）已开 10 个月未合并，反映 review 能力跟不上社区提交速度。
- **重复主题**：skill-creator 相关的 Bug/改进占据 PR 榜 4 席（#1298/#1769/#539/#1769），说明"造 Skill 的工具"本身已成为生态最大瓶颈。
- **Skill 题材分布**：文档类（PDF/DOCX/ODT/PPTX/typography）占据 Top 20 中 7 席，是社区最密集的贡献赛道。

---

<think>The user wants me to generate a daily community report for Claude Code based on GitHub data from 2026-09-21. Let me analyze the data carefully and produce a structured Chinese report.

Let me analyze the data:

**Key observations:**
1. No new releases in the past 24 hours
2. 50 issues updated, showing 30 most commented
3. 5 PRs updated

**Top issues by engagement:**
- #91870 "Mods - make Claude 10x more extensible" - 204 comments, 124 👍 - MAJOR enhancement about function hooks
- #77136 "Claude 4.7, 4.8, 5.0, and Fable increasingly default to repetitive rhetorical tics" - 124 comments, 436 👍 - HIGHEST LIKES, bug about model behavior
- #76694 "Cowork: new projects lost 'Choose a folder'" - 30 comments
- #14920 "Add ability to disable individual Claude plugin skills" - 17 comments, 93 👍
- #45534 "VSCode extension not streaming since 2.1.37" - 10 comments
- #95326 "Claude in Chrome blocked on reddit.com" - 7 comments
- #77298 "Add per-call effort parameter to Agent tool" - 6 comments, 18 👍
- #69545 [CLOSED] "SubagentStart hook should support updatedInput" - 6 comments
- #92215 "Claude Design MCP always 403s" - 6 comments
- #84698 "Desktop: unrequested background git fetch" - 6 comments
- #72957 "Write/Edit tools decode \uXXXX" - 4 comments
- #81425 "VS Code/Cursor extension session hangs" - 3 comments
- #86566 [CLOSED] "--channels inbound notifications silently dropped" - 2 comments
- #92860 "Files viewed in Claude Desktop don't update" - 2 comments
- #90603 "Claude uses British English in code" - 2 comments
- #95292 "Google Drive connector no way to update file content" - 1 comment
- #91679 "Default to American English for US-locale" - 1 comment
- #95389 "EnterWorktree path edge case" - 1 comment
- #95480 "Model treated platform artifact as bug symptom" - 1 comment
- #95425 "/login reports success but token never saved" - 1 comment
- #95466 "iOS Simulator touch/tap no-ops after Xcode 27" - 1 comment
- #95782 "reasoning_extraction misreads user-defined analysis" - 0 comments
- #95781 "Usage limit incorrectly reported exceeded" - 0 comments
- #95779 "Safety policy exceptions for fictional/game contexts" - 0 comments
- #95777 "Auto mode classifier blocks after user approval" - 0 comments
- #95670 "Safeguard blocks firing on all requests" - 0 comments
- #95776 "Worktree isolation denies Edit under base repo" - 0 comments
- #95775 "Discord channel plugin inbound dropped" - 0 comments
- #95774 "PreToolUse hook systemMessage never renders" - 0 comments
- #95773 "Memory leak 30GB on 16GB Macbook" - 0 comments

**PRs:**
- #95423 "diff: a shell command the tool held read-only fetches nothing" - OPEN
- #95698 "fix(plugins): run ralph-wiggum and output-style .sh hooks through bash" - OPEN
- #95587 "diff: resumed session opens pane, /clear leaves it" - CLOSED
- #94847 "diff: first edit opens pane only when it has a file" - OPEN
- #95618 "telemetry: complete rows gathered through $, sent in batches" - CLOSED

Now let me write the report in Chinese, following the structure requested.</think>

# Claude Code 社区日报
**2026-09-21**

---

## 📌 今日速览

今日社区最大的看点是 **"Mods" 扩展性提案（#91870）持续发酵**，官方已正式承诺将在数周内交付 function hooks；同时，**关于模型生成"重复修辞口癖"的高赞 Bug 报告（#77136）** 累计 436 👍、124 评论，仍是开发者关注的焦点。今日 Issues 更新活跃，但**无新版本发布**，多个高优 Bug 集中涌现于身份认证、子代理调用、MCP 连接器与 Hook 渲染等核心路径。

---

## 🚀 版本发布

**无新版本发布。** 过去 24 小时仓库未推送新 Release。

---

## 🔥 社区热点 Issues

### 1. [#91870 Mods — 让 Claude 扩展性提升 10 倍](https://github.com/anthropics/claude-code/issues/91870) ⭐124 👍
- **更新日期**: 2026-09-21 | **评论**: 204 | **状态**: OPEN
- **标签**: enhancement, area:hooks, area:plugins
- **为什么重要**：这是当前社区呼声最高的扩展性议题，官方明确表态将在数周内发布 function hooks。社区反馈已被官方采纳并实质性影响了产品设计方向。

### 2. [#77136 Claude 4.7/4.8/5.0/Fable 反复使用修辞口癖，难以产出连贯散文](https://github.com/anthropics/claude-code/issues/77136) 👍 436
- **更新日期**: 2026-09-21 | **评论**: 124 | **状态**: OPEN
- **标签**: bug, area:model
- **为什么重要**：本仓库**点赞最高的 Issue**，反映跨多个版本均存在的写作风格退化问题。即使明确指令也无法稳定控制风格，严重影响长文档与代码注释质量。

### 3. [#76694 Cowork 新建项目丢失"Choose a folder"，被上传菜单替换](https://github.com/anthropics/claude-code/issues/76694)
- **更新日期**: 2026-09-21 | **评论**: 30 | **状态**: OPEN
- **为什么重要**：影响 Chat/Cowork 合并后的关键工作流，新建项目无法选定目录而是只能上传文件，对桌面端用户使用体验是显著回退。

### 4. [#14920 支持单独禁用插件中的某个 skill](https://github.com/anthropics/claude-code/issues/14920) 👍 93
- **更新日期**: 2026-09-21 | **评论**: 17 | **状态**: OPEN
- **为什么重要**：插件粒度过粗是普遍痛点，例如 `commit-commands` 中用户只想保留 `:commit` 而禁用其他命令，长期未解决。

### 5. [#45534 VSCode 扩展自 2.1.37 起不再流式输出](https://github.com/anthropics/claude-code/issues/45534)
- **更新日期**: 2026-09-21 | **评论**: 10 | **状态**: OPEN
- **标签**: regression, platform:vscode, platform:wsl
- **为什么重要**：影响 VSCode 与 WSL 用户核心交互体验，且属于回归问题（regression），需要尽快回滚或修复。

### 6. [#95326 Claude in Chrome 在 reddit.com / redd.it 所有工具被"安全限制"拦截](https://github.com/anthropics/claude-code/issues/95326)
- **更新日期**: 2026-09-21 | **评论**: 7 | **状态**: OPEN
- **标签**: area:browser-extension, area:chrome
- **为什么重要**：自 2026-09-18 起 Reddit 站点所有工具被误判拦截，使用前一日尚能正常工作，疑似权限规则上线引入的过严问题。

### 7. [#77298 为 Agent (Task) 工具添加 per-call effort 参数](https://github.com/anthropics/claude-code/issues/77298) 👍 18
- **更新日期**: 2026-09-21 | **评论**: 6 | **状态**: OPEN
- **为什么重要**：当前 sub-agent 无法在调用时覆盖 `effort`，只能预写 agent 定义文件，限制了 orchestrator 精细控制能力。

### 8. [#92215 Claude Design 一方 MCP 始终 403，OAuth 登录流程失效](https://github.com/anthropics/claude-code/issues/92215)
- **更新日期**: 2026-09-21 | **评论**: 6 | **状态**: OPEN
- **标签**: area:auth, area:mcp
- **为什么重要**：错误信息甚至指向一个不存在的 `/design-login` 命令，提示存在明显的协议层缺陷。

### 9. [#84698 Desktop 应用在 diff/commit 刷新时执行未经请求的后台 git fetch](https://github.com/anthropics/claude-code/issues/84698)
- **更新日期**: 2026-09-21 | **评论**: 6 | **状态**: OPEN
- **为什么重要**：用户无法关闭此行为，触发逻辑也无法追踪，暴露出 Desktop 客户端行为透明度缺失。

### 10. [#95773 Claude 在 16GB MacBook M4 Air 上消耗 30GB 内存](https://github.com/anthropics/claude-code/issues/95773)
- **更新日期**: 2026-09-21 | **评论**: 0 | **状态**: OPEN
- **标签**: area:mcp
- **为什么重要**：尽管评论数为 0，但**内存泄漏导致越界使用**是严重稳定性问题，值得高度关注。

---

## 🛠️ 重要 PR 进展

### 1. [#95423 diff: read-only 的 shell 命令不再触发 diff 面板重取](https://github.com/anthropics/claude-code/pull/95423)
- **状态**: OPEN | **更新**: 2026-09-20
- 与内置面板行为对齐：`diff` mod 在只读 shell 命令（`ls`/`git status`/`cat`/`grep`）后不再无意义重取 diff，提升性能与体验。

### 2. [#95698 fix(plugins): 通过 bash + 引号执行 ralph-wiggum / output-style .sh 钩子](https://github.com/anthropics/claude-code/pull/95698)
- **状态**: OPEN | **更新**: 2026-09-20
- 由 `claude[bot]` 提交，修复捆绑插件 hook 路径未加引号导致的执行失败（Refs #95673，#78490）。

### 3. [#95587 diff: 恢复的会话、/clear 后的面板行为与内置一致](https://github.com/anthropics/claude-code/pull/95587)
- **状态**: CLOSED | **更新**: 2026-09-20
- 修复恢复会话时 diff 面板的打开时机、/clear 后残留、以及会话行跟随引擎启动等三处与内置面板不一致的问题。

### 4. [#94847 diff: 首次编辑只在面板有文件可列时才打开](https://github.com/anthropics/claude-code/pull/94847)
- **状态**: OPEN | **更新**: 2026-09-20
- 由 `bcherny` 提交。避免了对仓库外、被忽略文件、其他 worktree 的写入导致空面板，提升 diff 面板语义正确性。

### 5. [#95618 telemetry: 完整行通过 $ 收集后批量上报，仅服务内置插件](https://github.com/anthropics/claude-code/pull/95618)
- **状态**: CLOSED | **更新**: 2026-09-20
- 遥测 mod 现在接入 CLI 自有分析管道，仅作用于内置插件，社区/管理员安装的插件被显式拒绝，附带原因说明，透明度与权限边界更清晰。

### 6. [#69545 SubagentStart hook 应支持 updatedInput 以实现确定性模型路由（已关闭）](https://github.com/anthropics/claude-code/issues/69545)
- **状态**: CLOSED | **更新**: 2026-09-21
- 这是今日少数进入"已关闭"状态的议题，意味着该需求已通过其他途径满足或被合并到 #91870 的 Mods 路线图中。

> **备注**：今日仅有 5 个 PR 活跃，远少于 Issues 更新量，说明近期开发聚焦在**功能探索与 Bug 修复**而非新功能合并。

---

## 📈 功能需求趋势

综合所有 50 条 Issues，可以提炼出以下社区最关注的功能方向：

| 方向 | 代表 Issue | 热度信号 |
|---|---|---|
| **插件与 Hook 扩展性** | #91870, #14920, #69545, #77298, #95774 | 🔥🔥🔥🔥🔥 |
| **模型行为与可控性（风格、effort、locale）** | #77136, #90603, #91679, #95480, #95670, #95779, #95782 | 🔥🔥🔥🔥 |
| **IDE / VSCode / Desktop 集成稳定性** | #45534, #81425, #84698, #92860, #92860 | 🔥🔥🔥🔥 |
| **MCP 连接器与认证** | #92215, #95292, #95775 | 🔥🔥🔥 |
| **Worktree / 沙箱 / 文件写入安全** | #72957, #95389, #95776 | 🔥🔥🔥 |
| **跨平台兼容（Windows / WSL / iOS Simulator / Chrome）** | #95326, #95425, #95466, #86566 | 🔥🔥🔥 |

**核心趋势**：**"Mods / Hooks 扩展体系"是社区第一共识**，官方已正式回应并锁定交付时间窗；其次是**模型行为的可控性与一致性**——尤其是写作风格、locale 推断、auto-mode 权限分类器过度保守等长期诟病。

---

## 💬 开发者关注点

从今天的反馈中可以归纳出以下高频痛点：

1. **🔌 扩展性不足、粒度太粗**
   - 无法细粒度禁用某个 plugin skill (#14920)
   - Sub-agent 调用时无法覆盖 effort (#77298)
   - hook 行为不透明（#95774 的 systemMessage 不渲染）

2. **🤖 模型行为回归与"风格漂移"**
   - 反复出现修辞口癖、British English 渗入美区项目 (#77136, #90603, #91679)
   - auto-mode classifier 在用户已显式授权后仍拦截动作 (#95777)
   - reasoning_extraction 把用户自定义分析章节误判为内部推理 (#95782)

3. **🔐 认证与权限链断裂**
   - `/login` 报成功但 token 未保存 (#95425)
   - Claude Design MCP 永远 403，OAuth 死链 (#92215)
   - Discord channel 插件通知静默丢失 (#95775，复现 #86566)

4. **🖥️ 桌面/IDE 体验回退**
   - VSCode 扩展不流式输出 (#45534)
   - Desktop 后台不可关闭的 `git fetch` (#84698)
   - Claude Desktop 文件视图不刷新 (#92860)
   - VSCode/Cursor extension 会话挂起 (#81425)

5. **⚠️ 稳定性与资源问题**
   - 16GB MacBook 上吃掉 30GB 内存 (#95773)
   - Write/Edit 工具将 `\uXXXX` 静默转义破坏字面文本 (#72957)
   - iOS Simulator 工具在 Xcode 27 升级后失效 (#95466)

6. **🔧 工作流痛点**
   - Google Drive connector 只能创建不能更新内容 (#95292)
   - Cowork 新建项目无法选目录 (#76694)
   - Safari/Chrome 上 Reddit 站点全面封锁 (#95326)

---

> 📊 **整体观察**：今日社区活跃度集中在 **Bug 报告**（约 75% 为 bug 标签），feature request 中"Mods 扩展性"独大。官方对 #91870 的明确回应是过去 24 小时社区最重要的"积极信号"。

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

<think>The user wants me to generate a daily report for OpenAI Codex community dynamics based on GitHub data. Let me analyze the data carefully:

1. **Releases**: There are 5 alpha releases in 24 hours (rust-v0.156.0-alpha.10 through alpha.14), indicating very active development on the 0.156.0 alpha branch.

2. **Issues**: 50 issues updated, top ones by comments:
   - #25178: Windows Computer Use screenshot fails (73 comments, 28 likes)
   - #38350: Recurring scheduled tasks auto-disable (69 comments)
   - #41220: Abnormal quota depletion cross-tracker (48 comments, 17 likes)
   - #29343: Chrome plugin/browser refuses certain sites (31 comments, 12 likes)
   - #44102: Windows Desktop follow-up messages fail (27 comments)
   - #37445: Opening ChatGPT desktop consumes weekly limit (19 comments, 13 likes)
   - #41019: Cannot locate Codex CLI binary [CLOSED] (17 comments)
   - #41622: Disable automatic conversation recaps (16 comments, 83 likes - high likes!)
   - #44458: macOS CLI 0.154.0 MCP startup broken (13 comments, 6 likes)
   - #43347: Windows Browser Use tab crash (11 comments)
   - #46853: Codex false repository/deployment report (8 comments)
   - #45449: macOS 27 Chrome extension missing (8 comments)
   - #39011: macOS assistant message disappears (8 comments)
   - #45797: Windows first prompt then can't send (7 comments)
   - #35308: SQLite TRACE churn (7 comments)
   - #40433: Linux bubblewrap bootstrap fails (6 comments)
   - #44309: helper_unknown_error setup refresh (6 comments)
   - #46590: Windows second message stuck (6 comments)
   - #42017: Authored commentary preserved (6 comments, 1 like)
   - #20503: MCP OAuth missing scopes (5 comments, 11 likes)
   - #44546: Remove desktop pet feature (5 comments, 13 likes)
   - #6049: Disable built-in tools for MCP-only (5 comments, 46 likes!)
   - #40226: Locked keychain permanently (4 comments)
   - #40903: Code-review false warning (4 comments)
   - #46299: Windows follow-up messages hang (3 comments, 1 like)
   - #45341: Chrome browser control auth method (3 comments, 1 like)
   - #31991: Mobile SSH/Tailscale control (3 comments, 6 likes)
   - #43633: Windows execpolicy blocked (3 comments)
   - #46901: Weekly quota exhausted in hours (2 comments)
   - #38016: Codex disconnects macOS (2 comments)

3. **PRs**: 39 PRs, mostly TUI-related improvements, all CLOSED with 0 comments. These are mostly automated (copyberry[bot] is the author of all).

Let me identify themes:
- **Windows desktop issues**: Multiple bugs (screenshot, follow-up messages, browser use crash, app startup)
- **Rate limits/Quota**: Multiple issues about abnormal usage/depletion
- **TUI improvements**: Lots of PRs about TUI rendering, scrollback, fullscreen
- **Browser/Computer Use**: Many issues about Chrome extension, browser automation
- **MCP**: OAuth issues, MCP-only execution desire
- **macOS issues**: Several bugs in macOS desktop app

Let me write the report in Chinese now.</think>

# OpenAI Codex 社区动态日报
**2026-09-21**

---

## 今日速览

今日 Codex 仓库节奏极快:Rust 端在 24 小时内连发 5 个 0.156.0-alpha 预发布版本,主干 PR 高度集中在 TUI(终端 UI)渲染、subagent 流式处理与配额提示等打磨项。社区侧,Bug 焦点继续落在 **Windows 桌面端稳定性**、**订阅配额异常消耗** 与 **Computer/Browser Use 在受限站点上的行为** 上;而呼声最高的"功能开关类"需求则集中在自动会话摘要开关与 MCP-only 工具沙箱。

---

## 版本发布

过去 24 小时内 Rust 端密集推送 5 个 alpha 版本,版本号集中在 `0.156.0-alpha.10 → 0.156.0-alpha.14`,显示团队正围绕 0.156.0 进行高频回归与功能收口。当前未见 0.156.0 的正式 stable 发布说明,建议关注上游 release note 与 changelog 摘要。

- [rust-v0.156.0-alpha.10](https://github.com/openai/codex/releases)
- [rust-v0.156.0-alpha.11](https://github.com/openai/codex/releases)
- [rust-v0.156.0-alpha.12](https://github.com/openai/codex/releases)
- [rust-v0.156.0-alpha.13](https://github.com/openai/codex/releases)
- [rust-v0.156.0-alpha.14](https://github.com/openai/codex/releases)

> 说明:本日报未获取到上述 alpha 版本的逐项 changelog 文本,请以上游 release 页面为准。

---

## 社区热点 Issues(精选 10)

1. **#25178 Windows Computer Use 截图失败(73 评论 / 👍28)**
   在 Windows 10 22H2 上调用 `SetIsBorderRequired` 返回 `0x80004002`,导致 Computer Use 的窗口截图在采集阶段直接中断,而键盘、激活窗口、可访问性读取等功能仍可工作。是 Windows Computer Use 上"能读不能看"的核心阻塞点。
   → https://github.com/openai/codex/issues/25178

2. **#38350 定时任务在成功后自动暂停(69 评论)**
   ChatGPT 网页版"重复执行的定时任务"在成功跑完一轮后会从 enabled 切到 paused,且无任何用户操作触发,已在生产环境造成多次任务静默中断。属可靠性类高优问题。
   → https://github.com/openai/codex/issues/38350

3. **#41220 配额/用量计费异常交叉汇总(48 评论 / 👍17)**
   Meta issue,集中追踪 Codex 订阅额度/积分被异常耗尽、用量计量与本地/Token 证据不一致的报告,涉及 CLI、Desktop、Work on the web 等多端,是当前配额争议的事实中心。
   → https://github.com/openai/codex/issues/41220

4. **#29343 Chrome 插件 / Computer Use 拒绝访问部分站点(31 评论 / 👍12)**
   用户报告 Codex 在 Chrome 插件、内嵌浏览器、Computer Use 三种入口下,对部分网站静默拒绝加载,且未给出明确原因。直接影响 Computer Use 的实际可用面。
   → https://github.com/openai/codex/issues/29343

5. **#44102 Windows 桌面端首轮后无法再发消息(27 评论)**
   Windows Desktop `26.903.61454` 出现"第一条消息成功 → 第一轮完成后无法发送后续消息"。与 #45797、#46299、#46590 形成一个明显的 Windows Desktop 集群 Bug。
   → https://github.com/openai/codex/issues/44102

6. **#37445 仅打开桌面应用即消耗 6% 周配额(19 评论 / 👍13)**
   控制变量实验显示,仅启动 ChatGPT 桌面应用(未提交任何 prompt)就会触发固定约 6% 的周窗口消耗,疑似后台 suggestion/pre-turn 任务在静默计费。订阅付费用户关注度极高。
   → https://github.com/openai/codex/issues/37445

7. **#41622 增加关闭自动会话摘要的配置项(16 评论 / 👍83)**
   功能请求:在 `config.toml` 增加文档化的开关来禁用自动 conversation recap。👍 数是本期 Issues 里最高的,说明社区大量用户认为该"自动总结"是干扰而非增益。
   → https://github.com/openai/codex/issues/41622

8. **#44458 macOS CLI 0.154.0 experimental 能力破坏内置 MCP 启动(13 评论 / 👍6)**
   `codex-cli 0.154.0`(Homebrew 安装)在开启 experimental 能力后,内置的 Messages 与 Computer History MCP server 启动失败,直接阻断这两类常用工具。
   → https://github.com/openai/codex/issues/44444

9. **#43347 Windows 关闭最后一个 Browser Use 标签页导致应用崩溃(11 评论)**
   在 26.901.5280 / 26.901.6511 两个 Windows 构建上稳定复现:关闭最后一个 in-app Browser Use 标签页会直接退出整个 Codex Desktop。
   → https://github.com/openai/codex/issues/43347

10. **#46853 Codex 误报仓库/部署状态并起草不安全公开事故报告(8 评论)**
    一个相对新的、且安全语义更重的 issue:Codex 在没拿到真实信息前就错误地判定仓库与部署状态,并尝试起草公开事故披露。模型行为/工具调用边界的代表性案例。
    → https://github.com/openai/codex/issues/46853

(其余高 👍 候补:#6049 限制 Codex 仅使用 MCP 工具 👍46、#44546 彻底移除桌面宠物功能 👍13、#20503 MCP OAuth 缺 scopes 👍11。)

---

## 重要 PR 进展(精选 10)

> 今日更新的 39 个 PR 几乎全部由自动化代理 `copyberry[bot]` 提交且已 CLOSED,主题明显集中在 **TUI 打磨** 与 **app-server / subagent 行为修正**。

1. **#46938 为 Mermaid、数学公式、表格新增独立 TUI 渲染开关**
   新增 `tui.rendering.mermaid/math/tables` 配置,默认全开,可单独关闭以显示源码。给对终端性能/可读性敏感的高级用户更多控制。
   → https://github.com/openai/codex/pull/46938

2. **#46931 全屏编辑器改为使用 keymap-aware 共享提示**
   解决"全屏 composer 用固定小轮播,目录快捷键硬编码默认绑定"的不一致问题,提示内容现在会反映用户实际配置的快捷键,并暴露共享目录与可用链接。
   → https://github.com/openai/codex/pull/46931

3. **#46922 修复 realtime V3 transcript 在 handoff 时的对账问题**
   处理交错说话人转写导致的 handoff 上下文碎片化,以及延迟到达的 final transcript 覆盖更新的语音内容。
   → https://github.com/openai/codex/pull/46922

4. **#46917 模型目录强制应用当前 provider 要求**
   即使模型已缓存,app-server 的目录读取与后台刷新也会校验 managed provider 要求,避免 provider 运行时变更后模型目录失效。
   → https://github.com/openai/codex/pull/46917

5. **#46912 TUI 中持续显示配额告警**
   把"最紧张的配额窗口"放到 composer 提示行,沿用现有 plan-specific 文案,确保用户在输入时能看到剩余用量。
   → https://github.com/openai/codex/pull/46912

6. **#46910 打开设置选择器时保留 transcript 阅读位置**
   `/model`、`/theme` 等不再把阅读位置重置回底部,设置错误与确认消息仍正常显示。
   → https://github.com/openai/codex/pull/46910

7. **#46883 新增 `/tui` 命令切换 Scrollback / Fullscreen 模式**
   加入显式确认的 picker,写入 `tui.fullscreen_transcript`,提示用户重启生效,运行中的渲染器保持不变。
   → https://github.com/openai/codex/pull/46883

8. **#46877 允许 subagent 发起 MCP elicitation 输入**
   移除"只有 root agent 能发起 MCP 用户输入"的限制,让子线程也能跑需要浏览器登录、表单填写、交互审批的工具调用。
   → https://github.com/openai/codex/pull/46877

9. **#46867 subagent 完成时保留父级流式回答**
   修复"父级回答仍在流式输出时,子线程活动抢先渲染并 flush 掉父级流"的体验问题。
   → https://github.com/openai/codex/pull/46867

10. **#46866 TUI 用量视图启用鼠标导航**
    用量 overlay 支持鼠标点击 tab/导出控件,滚轮按三行步进滚动报告/dashboard/help。
    → https://github.com/openai/codex/pull/46866

---

## 功能需求趋势

从今日活跃的 issues 中可以提炼出几条社区反复呼吁的方向:

- **更精细的"功能开关/退出"配置**
  - 关闭自动 conversation recap(#41622,👍83)
  - 关闭桌面宠物/装饰功能(#44546,👍13)
  - 关闭内置工具、强制 MCP-only(#6049,👍46)
  - 反映用户对"Codex 越来越像一个什么都替我决定的产品"的抵触。

- **订阅/配额透明度**
  - 后台静默消耗配额(#37445)
  - 配额计量与本地 Token 证据不一致(#41220)
  - 数小时内耗尽周配额(#46901)
  - 诉求集中在:可见的后台任务列表、可解释的扣费粒度、以及 quota 触达前的明确预警(TUI 已开始落地,#46912)。

- **Computer/Browser Use 边界与可控性**
  - 站点访问被静默拒绝(#29343)
  - Chrome 扩展与桌面 app native messaging 失联(#45449)
  - API key 模式下浏览器控制报"unsupported auth method"(#45341)
  - 社区期待更明确的能力/认证矩阵与失败原因。

- **桌面 App 稳定性(尤其 Windows)**
  - "第一条消息之后无法继续"集群(#44102、#45797、#46299、#46590)
  - Browser Use 关闭即崩溃(#43347)
  - Computer Use 在 Win10 22H2 截图失败(#25178)
  - Windows 已经成为 Bug 报告的"重灾区",社区希望看到平台分层回归。

- **CLI / 沙箱 / Linux**
  - Linux bubblewrap 自定义权限路径启动失败(#40433)
  - CLI 0.154.0 experimental 破坏内置 MCP(#44458)
  - MCP OAuth dynamic client registration 缺 scopes(#20503,👍11)

- **远控 / 远程化**
  - 用自有 Tailscale + SSH 替代 hosted Remote Control(#31991,👍6)

---

## 开发者关注点

综合 issue 反馈与 PR 走向,今天的开发者画像可以归纳为三点:

1. **"桌面 App 在 Windows 上不可靠,我需要一个稳定的回退路径"**
   围绕"首轮之后无法发送"的复现报告在 4 个独立 issue 中集中出现,且用户反馈"重装只能临时缓解",说明问题大概率在 app-server 状态机或会话恢复流程,而非单机环境。配套的 SQLite TRACE churn(#35308)也指向 app-server 长生命周期下的状态/日志问题。

2. **"我的订阅配额到底被谁吃了?"**
   这是付费用户在当前周期里表达最强烈的不满,且与 #41220 的 Meta 追踪、#37445 的"零输入也扣 6%"、#46901 的"数小时耗尽周配额"形成一致叙事。开发者视角下,大家实际想要的不仅是修复 bug,而是:可观测的后台活动、可见的配额剩余、清晰的计费维度。TUI 配额告警常驻(#46912)是产品侧的正确回应,但 CLI / Desktop 也应尽快跟进。

3. **"我希望 Codex 是个工具,而不是个有自己审美的助手"**
   从 #41622(关闭自动 recap)、#44546(移除宠物)、#6049(MCP-only 执行)、#31991(自托管远控)能看出,重度用户更在意"可裁剪、可关闭、可替换组件"的能力,而非"越来越聪明的默认值"。这一诉求与今天 PR 在 TUI 渲染开关、subagent 流式、provider 要求校验上的精细化方向契合,值得作为后续 Roadmap 的一个明确主线。

---

*数据来源:github.com/openai/codex(2026-09-21 当日更新)。issue/PR 排序以评论数为主、辅以 👍 数与功能代表性。*

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

<think>The user wants me to generate a Chinese daily report for the Gemini CLI community based on GitHub data from 2026-09-21. Let me analyze the data carefully.

Key observations:
1. There's a nightly release v0.62.0-nightly.20260921.gcfbcaa8df
2. Issues are dominated by agent-related bugs and features
3. Key themes: agent reliability, memory system, browser agent, terminal handling, subagent behavior
4. PRs include: nightly version bump, dependency updates, security fixes, OAuth persistence, TOML policy fixes, UTF-16 surrogate pair handling, scheduler disposal fixes

Let me organize this into a structured report. I'll need to:
1. 速览 - 2-3 sentences
2. 版本发布
3. 社区热点 Issues (top 10 by comments and importance)
4. 重要 PR 进展 (top 10)
5. 功能需求趋势
6. 开发者关注点

Let me select the most important issues:
- #22323 (13 comments) - Subagent recovery bug after MAX_TURNS
- #19873 (9 comments) - Zero-Dependency OS Sandboxing
- #21409 (8 comments) - Generalist agent hangs
- #22745 (7 comments) - AST-aware file reads
- #21968 (6 comments) - Skills and sub-agents not used enough
- #26525 (5 comments) - Auto Memory logging redaction
- #26522 (4 comments) - Auto Memory retry issue
- #22232 (4 comments) - Browser agent session takeover
- #21983 (4 comments) - browser subagent wayland failure
- #21000 (4 comments) - task tracker using native file tools
- #20079 (4 comments) - symlink agent not recognized

For PRs, the most notable:
- #29433 - Nightly version bump
- #29432 - Scheduler disposal fix
- #29431 - Invalid TOML policy rules
- #29342 - Nested input history state updates
- #29282 - OAuth credentials persistence
- #29304 - Surrogate pairs truncation
- #29303 - ExpandableText surrogate pairs
- #29319 - JSON.parse guard in sendStream
- #29320 - express.json before A2A routes
- #26686 - Git submodules in extension installs
- #28183 - VS Code terminal focus

Let me write this in Chinese.</think>

# Gemini CLI 社区动态日报 · 2026-09-21

## 📌 今日速览

今日 Gemini CLI 持续推进 v0.62.0 nightly 迭代主线，社区焦点高度集中在 **Agent / Subagent 稳定性** 与 **Memory/Auto Memory 系统** 上。P1 级阻塞性 Bug 多围绕 subagent 异常状态误报、子代理挂起、浏览器子代理在 Wayland 下的崩溃等核心场景，开发者对"agent 自我可靠性"的要求正显著上升。同时，依赖批量升级、UTF-16 代理对截断、OAuth 凭据持久化等"看不见但关键"的基础设施 PR 也陆续合入或进入审阅。

---

## 🚀 版本发布

- **v0.62.0-nightly.20260921.gcfbcaa8df** 已发布（自动化的 nightly 流程 [#29433](https://github.com/google-gemini/gemini-cli/pull/29433)），相对前一 nightly 增量小、节奏稳定，仍在 0.62 系列内持续打磨。
  - 完整变更：[compare 链接](https://github.com/google-gemini/gemini-cli/compare/v0.62.0-nightly.20260920.gcfbcaa8df...v0.62.0-nightly.20260921.gcfbcaa8df)

---

## 🔥 社区热点 Issues（按关注度精选 10 条）

1. **#22323 — Subagent 在 MAX_TURNS 后被错误报告为 GOAL success**（P1 / bug，13 评论，2 👍）
   - `codebase_investigator` 子代理触达最大轮次限制后仍报 `success` + `GOAL`，掩盖了真实中断。用户期望即便超时也应有显式的失败/中断上报。该问题是当下最受讨论的 agent 行为正确性问题。[链接](https://github.com/google-gemini/gemini-cli/issues/22323)

2. **#19873 — 利用 Gemini 3 的 bash 亲和性：零依赖 OS 沙箱 + 后置意图路由**（P2 / enhancement，9 评论）
   - 提出让模型原生使用 POSIX 工具链（grep/cat/sed/awk），通过零依赖 OS 沙箱 + 执行后意图路由，既不牺牲安全性又释放模型真实能力。[链接](https://github.com/google-gemini/gemini-cli/issues/19873)

3. **#21409 — Generalist agent 挂死**（P1 / bug，8 评论，8 👍 👍比高）
   - defer 到 generalist agent 后即使像新建文件夹这种小操作也会无限挂起。通过"明确指示不使用子代理"可绕过。是验证最多的用户痛感之一。[链接](https://github.com/google-gemini/gemini-cli/issues/21409)

4. **#22745 — 评估 AST 感知文件读取/搜索/映射的价值**（P2 / feature，7 评论）
   - EPIC 级议题：借助 AST-aware 工具实现"精准读方法边界、token 噪声更少、导航更稳"，目标减少因误对齐读取带来的回合浪费。[链接](https://github.com/google-gemini/gemini-cli/issues/22745)

5. **#21968 — Gemini 默认不主动使用 skills 与 sub-agents**（P2 / bug，6 评论）
   - 即便 skill 描述精准，模型也常常"忽略"自定义 skill/sub-agent，只有显式提示才走。社区期待更主动的调度策略。[链接](https://github.com/google-gemini/gemini-cli/issues/21968)

6. **#26525 — Auto Memory 需要确定性脱敏并降低日志量**（P2 / security，5 评论）
   - 当前依赖提取模型事后 redact，且 skill 内容可能被服务侧日志记录，存在敏感数据暴露隐患。需要前置确定性脱敏 + 日志收紧。[链接](https://github.com/google-gemini/gemini-cli/issues/26525)

7. **#21983 — 浏览器 subagent 在 Wayland 下失败**（P1 / bug，4 评论）
   - Wayland 环境下 `browser` sub-agent 直接以 `GOAL` 终止，渲染失败。Linux 桌面用户长期受影响。[链接](https://github.com/google-gemini/gemini-cli/issues/21983)

8. **#22232 — browser_agent 应支持自动接管与锁恢复**（P3 / feature，4 评论）
   - 当前 `BrowserManager` 是 fail-fast 的，遇到 profile 被占就抛错。希望增加 session takeover / lock recovery 机制。[链接](https://github.com/google-gemini/gemini-cli/issues/22232)

9. **#20079 — `~/.gemini/agents/*.md` 为符号链接时不被识别**（P2 / bug，4 评论）
   - 用 symlink 维护 agent 目录的开发者无法被 CLI 识别，影响 dotfiles/共享配置工作流。[链接](https://github.com/google-gemini/gemini-cli/issues/20079)

10. **#22186 — `get-shit-done` 输出 hook 触发崩溃**（P1 / bug，3 评论）
    - 在用户总结即将打印完成时整个进程崩溃，属于高优先级稳定性问题。[链接](https://github.com/google-gemini/gemini-cli/issues/22186)

> 备选高热度议题：#24246（>128 tools 触发 400 错误）、#23571（模型在随机位置写临时脚本）、#21335（`/compress` 不能跨会话恢复）、#18836（用文件式 CRUD 任务跟踪替换 WriteToDo）等均在持续讨论中。

---

## 🛠 重要 PR 进展（精选 10 条）

1. **[#29433](https://github.com/google-gemini/gemini-cli/pull/29433) — chore/release: 升级到 0.62.0-nightly.20260921**
   - 机器人触发的 nightly 版本号更新，配合今日 release 一并发布。[链接](https://github.com/google-gemini/gemini-cli/pull/29433)

2. **[#29432](https://github.com/google-gemini/gemini-cli/pull/29432) — fix(core): scheduler 销毁时丢弃队列中的工具调用**
   - 解决 disposal 后旧批次完成时仍然执行已排队任务导致的"幽灵执行"问题，是 agent 稳定性修复链中的关键一环。[链接](https://github.com/google-gemini/gemini-cli/pull/29432)

3. **[#29431](https://github.com/google-gemini/gemini-cli/pull/29431) — fix(core): 跳过非法 TOML policy 规则**
   - 修复空 tool name 直接抵达 PolicyEngine 触发启动崩溃，以及冲突字段被标错却仍生效的隐患。[链接](https://github.com/google-gemini/gemini-cli/pull/29431)

4. **[#29282](https://github.com/google-gemini/gemini-cli/pull/29282) — fix(auth): 登录成功后立即持久化 OAuth 凭据**
   - 避免 CLI 重复要求 Google 登录；统一通过 OAuth client 的 tokens 路径持久化，长期被用户诟病的"反复弹登录"问题有望收敛。[链接](https://github.com/google-gemini/gemini-cli/pull/29282)

5. **[#29342](https://github.com/google-gemini/gemini-cli/pull/29342) — fix(cli): 修复输入历史 store 的嵌套状态更新**
   - 重构 `useInputHistoryStore`，消除 React StrictMode 双调用下历史记录异常。[链接](https://github.com/google-gemini/gemini-cli/pull/29342)

6. **[#29304](https://github.com/google-gemini/gemini-cli/pull/29304) 与 [#29303](https://github.com/google-gemini/gemini-cli/pull/29303) — sanitizeForDisplay / ExpandableText 不再截断 UTF-16 代理对**
   - 同一根因的两条修复（独立贡献者提交），保证 emoji 在终端截断处不会被吞掉。属于"小但高频"的体验问题。[#29304](https://github.com/google-gemini/gemini-cli/pull/29304) · [#29303](https://github.com/google-gemini/gemini-cli/pull/29303)

7. **[#29319](https://github.com/google-gemini/gemini-cli/pull/29319) — fix(sdk): sendStream 中为 tool-call args 的 JSON.parse 加保护**
   - 修复畸形 JSON 在 for-await 内抛出导致整条流中断；新增回归测试。[链接](https://github.com/google-gemini/gemini-cli/pull/29319)

8. **[#29320](https://github.com/google-gemini/gemini-cli/pull/29320) — fix(a2a-server): 在 A2A 路由前注册 express.json**
   - 此前 JSON-RPC 处理器拿不到 `req.body`，现在补上 middleware 顺序，并附带回归测试。[链接](https://github.com/google-gemini/gemini-cli/pull/29320)

9. **[#28183](https://github.com/google-gemini/gemini-cli/pull/28183) — fix(vscode-ide-companion): 关闭 diff tab 时保留终端焦点**
   - 在 VS Code 插件里审阅编辑后，焦点会自动跑出终端，体验"每次都要再点回去"的痛点有望被根治。[链接](https://github.com/google-gemini/gemini-cli/pull/28183)

10. **[#26686](https://github.com/google-gemini/gemini-cli/pull/26686) — feat(cli): extension 安装支持 git 子模块**
    - 之前 `gemini extensions install <git-url>` 拉取仓库但不会初始化 submodule，导致扩展不完整。该 PR 补齐这一步。[链接](https://github.com/google-gemini/gemini-cli/pull/26686)

---

## 📈 功能需求趋势

从过去 24 小时活跃议题可以提炼出以下几条主线：

- **Agent / Subagent 行为可靠性**：错误状态上报、子代理挂起、终止原因（#22323、#21409、#21983、#22186）已成最紧迫的方向。
- **Auto Memory 体系完善**：脱敏、低信号会话重试、无效 patch 隔离等 (#26525、#26522、#26523) 表明 memory 子系统在快速演进。
- **AST 感知与"手术式"读取**：#22745、#22746、#19561 共同指向"上下文保鲜"，把 token 开销从"水龙头"压到"针管"。
- **终端/TUI 体验打磨**：UTF-16 代理对截断 (#29303/#29304)、终端 resize 闪烁 (#21924)、输入历史 (#29342) 等"边角"体验被持续修缮。
- **OS 级沙箱与原生 bash**：#19873 反映社区想把 Gemini 3 的 bash 能力真正落到生产级安全保障上。
- **VS Code / IDE 集成**：#28183 焦点处理、#22232 浏览器 session 接管等表明 IDE 方向仍是高频需求。
- **OAuth / 凭据持久化**：#29282 代表"少弹一次登录"依然是日常体验关键点。

---

## 💬 开发者关注点

- **🔁 反复登录与凭据丢失**：长期头号痛点之一，本次 [#29282](https://github.com/google-gemini/gemini-cli/pull/29282) 命中。
- **🪦 子代理"假成功 / 假失败"**：模型实际状态与上报状态不一致是排查噩梦（#22323、#21983）。
- **🧊 进程挂死**：generalist agent、interactive prompt（vite create）、长时间无响应等场景让用户对"取消"按钮的需求愈发强烈（#21409、#22465）。
- **🧹 工作区整洁度**：模型频繁散落临时脚本污染工程目录，#23571 提示清理成本高。
- **🛡 数据隐私与日志可见性**：Auto Memory 会"看见"本地 transcript + skill 内容，#26525 要求前置脱敏。
- **🧰 工具数膨胀**：>128/400 tools 触发 400（#24246），反映出"工具上下文管理"亟需自动化收敛策略。
- **📁 dotfiles / 符号链接不工作**（#20079）：高级用户的配置工作流被切断，社区呼声稳定。

---

> 本日报由 GitHub Issues / Pull Requests 公开数据汇总生成；数据快照截止 2026-09-21。

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

<think>The user is asking me to generate a Chinese daily report about GitHub Copilot CLI community dynamics based on GitHub data. Let me analyze the data carefully.

Key observations from the data:

1. **No new releases in the past 24 hours** - I should skip or note the version release section.

2. **No new PRs in the past 24 hours** - The important PR section will need to draw from issues or note this.

3. **31 issues updated in the past 24 hours**, with 30 shown. Let me analyze the top ones:

**Most commented issues (top picks for "community hotspots"):**
- #4870 (CLOSED, 8 comments, 11 👍) - MCP: Figma remote server fails to load
- #3762 (CLOSED, 7 comments, 0 👍) - config option contextTier does nothing
- #1675 (CLOSED, 5 comments, 0 👍) - Checkpoint restore permanently deletes untracked files
- #4224 (CLOSED, 5 comments, 1 👍) - OTel spans for subagent calls omit billing attributes
- #4839 (OPEN, 4 comments, 3 👍) - Make option to disable taskbar icon
- #3874 (CLOSED, 4 comments, 0 👍) - preToolUse agent hook denial does not work
- #1886 (CLOSED, 4 comments, 4 👍) - .github/lsp.json and .github/mcp.json do not work
- #4606 (OPEN, 3 comments, 1 👍) - Google Workspace MCP OAuth fails
- #3589 (OPEN, 3 comments, 2 👍) - multiple sessionStart hooks only last one injected
- #4448 (CLOSED, 3 comments, 0 👍) - Search stuck and never finishes

**Newly opened issues (2026-09-20):**
- #4919 - /ask does not work in auto mode
- #4918 - ARM64 ripgrep crashes on Linux 64KiB pages
- #4917 - Auto model too weak for Linux kernel work

**Open (still active) issues:**
- #4839 - Disable taskbar icon
- #4606 - Google Workspace MCP OAuth
- #3589 - Hook additionalContext only last one
- #4807 - FileWatch event storm, 33GB log
- #4731 - tools/list refresh timeout strips server's tools
- #4673 - Session restore auto-continues aborted work
- #4919 - /ask does not work in auto mode
- #4918 - ARM64 ripgrep crash
- #4917 - Auto model too weak

**Feature request themes I can identify:**
1. **MCP (Model Context Protocol) issues** - Multiple issues with MCP integration (Figma, Google Workspace, Windows stdio, tool refresh)
2. **Configuration/context management** - contextTier, skills token limits
3. **Session management** - resume, restore, events.jsonl corruption
4. **Platform-specific issues** - Windows .bat/.cmd, Linux ARM64 ripgrep, macOS iTerm2
5. **Model selection/Auto mode** - Auto mode picks weak models, /ask in auto mode, BYOK premium
6. **UX improvements** - Disable taskbar icon, escape behavior, stash prompt
7. **Performance** - FileWatch event storm, search stuck
8. **Remote sessions** - non-GitHub git repos
9. **Hooks/plugins** - preToolUse hook, extensions_reload deadlock
10. **Cost/billing** - OTel spans missing billing attributes

Let me structure the report properly. Since there are no new PRs and no new releases, I'll note those briefly.

For the "重要 PR 进展" section, since there are no PRs from the past 24 hours, I should note this. But the user asked for 10 PRs... I need to handle this gracefully. Let me check the instructions again - "挑选 10 个重要的 PR" - if there are none, I should explain why and perhaps reference some closed issues that effectively represent fixes.

Actually, looking more carefully - since there are 0 PRs in the past 24 hours, I should mention this and perhaps look at the closed issues as proxies for fixes (since closed issues often get closed when a fix PR is merged). But that's not quite the same thing. Let me be honest and say there are no new PRs but mention which closed issues likely correspond to recent fixes.

Let me write the report now. I'll aim for a concise, professional tone suitable for technical developers.

Date: 2026-09-21

Let me draft:

## 今日速览
- 过去 24 小时无新版本发布，仓库更新以 Issues 为主，共 31 条 Issue 更新。
- 社区讨论热度集中在 MCP 协议集成缺陷（远程服务器加载、OAuth 认证、Windows stdio 兼容性）和会话/上下文管理可靠性。
- 新开 3 条 Issue 反映 Auto 模式模型选择、Linux ARM64 平台兼容性和 /ask 命令可用性问题。

## 版本发布
无新版本发布。

## 社区热点 Issues
I'll pick the top 10 by importance (comment count + 👍 + recency).

1. #4870 - MCP Figma
2. #3762 - contextTier config
3. #1675 - git clean -fd deletion
4. #4224 - OTel billing
5. #4839 - Disable taskbar icon
6. #3874 - preToolUse hook
7. #1886 - lsp.json/mcp.json
8. #4606 - Google Workspace OAuth
9. #3589 - additionalContext hooks
10. #4448 - Search stuck

## 重要 PR 进展
过去 24 小时无 PR 更新。Closed 的多个 Issues 表明有合并修复但未在数据中体现具体变更。

## 功能需求趋势
Looking at the issues, I can identify:
- MCP 生态完善
- 跨平台稳定性
- Auto/模型智能选择
- 上下文与 Skills 管理
- 远程会话/多平台 Git 仓库
- 可观测性与成本计量
- 用户体验（UI/键盘交互）

## 开发者关注点
Pain points:
- MCP 服务器发现/认证
- 会话文件损坏
- Hook 注入逻辑
- Auto 模式可靠性
- 性能问题（FileWatch、搜索）

Let me write this out properly in Chinese now.</think>

# GitHub Copilot CLI 社区动态日报
**日期：2026-09-21**

---

## 📌 今日速览

- 过去 24 小时**无新版本发布**，仓库更新以 Issues 为主，共 31 条 Issue 更新，其中 18 条已关闭。
- 社区讨论热度集中在 **MCP 协议集成缺陷**（远程服务器加载、OAuth 认证、Windows stdio 兼容性）和 **会话/上下文可靠性**（事件流损坏、Checkpoint 误删文件）。
- 当日新开 3 条 Issue，分别指向 **Auto 模式模型选择偏弱**、**Linux ARM64 ripgrep 崩溃** 和 **`/ask` 命令在自动模式下不可用** 三类问题。

---

## 🚀 版本发布

过去 24 小时内无新 Release。

---

## 🔥 社区热点 Issues（Top 10）

| # | 编号 | 状态 | 评论 / 👍 | 主题 | 重要性 |
|---|------|------|----------|------|--------|
| 1 | [#4870](https://github.com/github/copilot-cli/issues/4870) | CLOSED | 8 / 11 | MCP: Figma 远程服务器 (`mcp.figma.com`) 加载失败 | VS Code 可用但 CLI 将 `-32601` 视为致命错误，11 个 👍 是本期最高，影响远程 MCP 生态互通 |
| 2 | [#3762](https://github.com/github/copilot-cli/issues/3762) | CLOSED | 7 / 0 | `contextTier` 配置项未生效 | 配置层与运行时解耦的经典案例，反映上下文管理可控性不足 |
| 3 | [#1675](https://github.com/github/copilot-cli/issues/1675) | CLOSED | 5 / 0 | Checkpoint 恢复 (`git clean -fd`) 永久删除未跟踪文件 | **数据安全红线**，影响所有使用 checkpoint 功能的用户 |
| 4 | [#4224](https://github.com/github/copilot-cli/issues/4224) | CLOSED | 5 / 1 | OTel spans 缺少子代理计费属性 | 企业成本核算偏差，与 #4207 联动，关系到 FinOps 落地 |
| 5 | [#4839](https://github.com/github/copilot-cli/issues/4839) | OPEN | 4 / 3 | 允许禁用任务栏图标 | 仍开放，反映终端 UI 对重度用户不够克制 |
| 6 | [#3874](https://github.com/github/copilot-cli/issues/3874) | CLOSED | 4 / 0 | `preToolUse` agent hook 拒绝逻辑失效 | 安全审计相关，影响所有依赖 hook 做权限管控的企业 |
| 7 | [#1886](https://github.com/github/copilot-cli/issues/1886) | CLOSED | 4 / 4 | `.github/lsp.json` / `.github/mcp.json` 不生效 | 仓库级配置优先级的长期争议 |
| 8 | [#4606](https://github.com/github/copilot-cli/issues/4606) | OPEN | 3 / 1 | Google Workspace MCP OAuth 因 `accounts.google.com/` 尾斜杠不匹配失败 | 仍开放，企业 SaaS 集成阻塞 |
| 9 | [#3589](https://github.com/github/copilot-cli/issues/3589) | OPEN | 3 / 2 | 多个 `sessionStart` hook 的 `additionalContext` 只注入最后一个 | 仍开放，限制多插件协作能力 |
| 10 | [#4448](https://github.com/github/copilot-cli/issues/4448) | CLOSED | 3 / 0 | 搜索工具卡死 | 内置 `grep` 在某些环境下无法收敛的稳定性问题 |

---

## 🛠 重要 PR 进展

过去 24 小时**无 PR 更新**（数据窗口内合并/打开均为 0）。不过从同窗口内 CLOSED 的 Issue 来看，仓库底层应有相关修复合入，仅未在 PR 维度暴露；建议关注上游 `main` 分支的最近提交以补充背景。

---

## 📈 功能需求趋势

综合过去 24 小时与近期 Issue 标签，社区诉求可归纳为以下几条主线：

1. **MCP 生态成熟化**（占比最高）——远程服务器发现、OAuth issuer 严格匹配、Windows `.bat/.cmd` 启动、stdio 工具调用超时恢复。`area:mcp` 标签密集出现，是当前最迫切的兼容性问题集。
2. **会话与上下文可靠性**——`events.jsonl` 损坏（#2012、#4098）、Checkpoint 误删（#1675）、`/resume` 失败、Hook 上下文覆盖（#3589），涉及数据完整性与多组件协作。
3. **跨平台稳定性**——Windows stdio MCP 启动、Linux ARM64 64KiB 页 ripgrep 崩溃（#4918）、macOS iTerm2 PTY 创建失败（#2726）。
4. **Auto / 模型选择智能化**——Auto 模式选弱模型（#4917）、Auto 模式 `/ask` 不可用（#4919）、BYOK 模型被误计为 premium 请求（#2670）。
5. **可观测性与成本计量**——OTel spans 缺失计费属性（#4224）、空闲进程 33GB 日志风暴（#4807）。
6. **远程会话 / 多平台 Git 仓库**——`/remote` 强制 GitHub 限制（#2922）。
7. **UI/UX 微调**——禁用任务栏图标（#4839）、Escape 应聚焦队列提示（#3692）、stash prompt（#3034）。

---

## 💬 开发者关注点

社区反馈的高频痛点可归为四类：

- **🔒 安全与数据完整性**：`preToolUse` Hook 失效、Checkpoint 误删未跟踪文件、企业 OAuth 流程在严格 issuer 校验下失败——任何一类都可能让生产环境拒绝接入。
- **⚙️ MCP 作为一等公民仍不成熟**：从发现到 OAuth 到 stdio 启动到工具刷新的全链路都存在边界 case，VS Code 与 CLI 行为不一致让迁移成本居高不下。
- **🤖 "Auto" 标签下的不确定性**：模型自动选择结果不稳定，既可能在 Linux 内核补丁这种硬核场景下选错弱模型，也可能让 `/ask` 这种基础命令不可用，开发者难以形成稳定心智模型。
- **📉 性能与日志治理**：内置 `rg` 卡死、空闲进程 FileWatch 风暴写 33GB 日志，提示文件监听与内置工具的鲁棒性需要专门一轮治理。

> 建议关注仍在 OPEN 状态的 #4839、#4606、#3589、#4807、#4731、#4673，以及新开的 #4917/#4918/#4919，它们更可能进入下一轮迭代讨论。

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

<think>Let me analyze the GitHub data for Kimi Code CLI and generate a daily report for 2026-09-21.

Key observations from the data:
1. No new releases in the past 24 hours
2. 3 updated issues in past 24 hours:
   - #2650: OAuth timeout for subagent launch (open bug)
   - #1534: Terminal UI confusion/repetition (closed - old issue from March)
   - #2655: Client crashes on large prompts due to stack overflow in path regex (open bug)
3. 3 updated PRs in past 24 hours:
   - #2658: Fix IME composition on Enter (CJK input fix)
   - #2657: Handle unsupported stdout encodings (Windows GBK fix)
   - #2656: Send x-opencode-session header for OpenCode Go hosts

The data is quite limited - only 3 issues and 3 PRs. The user asks for "10 most important" issues and PRs but there are only 3 of each. I should note this constraint and provide what's available, perhaps expanding context where reasonable.

Let me structure the report:

1. Today's snapshot - brief summary
2. Version releases - skip (none)
3. Community hot issues - only 3 available, but user wants 10. I'll present what's available and note the limited activity.
4. Important PRs - only 3 available, same situation
5. Feature request trends - extract from issues
6. Developer pain points

Since the data is sparse, I need to be honest about it while still providing a useful report. Let me draft this in Chinese, professional and concise.

Actually, looking again - the user wants 10 issues and 10 PRs, but there are only 3 of each in past 24 hours. I should present all 3 of each (since they're all worth covering) and be transparent about the limited volume. Maybe I can mention this is a relatively quiet day.

Let me write the report now.</think>

# Kimi Code CLI 社区动态日报
**日期：2026-09-21**

---

## 📌 今日速览

今日社区活跃度较低，过去 24 小时内无新版本发布，Issues 和 PRs 更新量均为 3 条。技术焦点集中在 **客户端稳定性修复**（大输入栈溢出、stdout 编码兼容）以及 **Web 端 CJK 输入体验** 改进上，同时出现 1 条关于子智能体 OAuth 超时的新 Bug 报告。整体呈现"修复驱动"节奏，社区暂无大规模讨论。

---

## 🚀 版本发布

*过去 24 小时内无新版本发布，本节省略。*

建议关注最新稳定版本（Issue #2655 报告版本为 **v2.0.2**）。

---

## 🔥 社区热点 Issues

> 注：过去 24 小时仅有 3 条 Issue 更新，远低于常规 10 条量级，以下为全部活跃 Issue。

### 1. [#2655](https://github.com/MoonshotAI/kimi-cli/issues/2655) — 大输入导致客户端栈溢出（高优先级 ⚠️）
- **状态**：OPEN | 👍 0 | 评论 0
- **作者**：@asgorskii-dot | 更新于 2026-09-20
- **关键信息**：当输入 prompt 接近 ~900KB 时，客户端在**任何网络请求发起之前**就因路径正则匹配导致栈溢出（stack overflow）而崩溃。版本 v2.0.2。
- **为什么重要**：这是**客户端鲁棒性**问题，而非后端问题——意味着任何超大输入都会让 CLI 直接挂掉，影响脚本批处理、日志回放等自动化场景。是近期最严重的稳定性 Bug。
- **社区反应**：尚无评论，需关注官方响应速度。

### 2. [#2650](https://github.com/MoonshotAI/kimi-cli/issues/2650) — 子智能体启动间歇性 OAuth 超时
- **状态**：OPEN | 👍 0 | 评论 1
- **作者**：@genhoi | 更新于 2026-09-20
- **关键信息**：主会话认证正常，但启动 subagent 时连接 `auth.kimi.ai` 间歇性超时，重试后可成功。问题被描述为"瞬时 auth 端点抖动会杀死整个子代理生成"。
- **为什么重要**：subagent 是多智能体工作流的核心能力，其可靠性直接决定复杂任务能否顺利完成。当前实现**缺乏重试/熔断机制**。
- **社区反应**：1 条评论，可能已有维护者介入。

### 3. [#1534](https://github.com/MoonshotAI/kimi-cli/issues/1534) — 终端界面乱序且自动重复（已关闭 ✅）
- **状态**：CLOSED | 👍 0 | 评论 0
- **作者**：@YeemingJeen | 创建于 2026-03-20，更新于 2026-09-21
- **关键信息**：启动后手动调整终端窗口大小（resize）导致 UI 错乱和自动重复渲染。
- **社区反应**：0 评论，长期 issue，最终被关闭。建议关注是否在 changelog 中有对应修复说明。
- **意义**：长期遗留的 UI 问题终于得到处理，反映出 TUI 在终端 resize 事件处理上的历史不足。

---

## 🛠 重要 PR 进展

> 注：过去 24 小时仅有 3 条 PR 更新，以下为全部活跃 PR。

### 1. [#2658](https://github.com/MoonshotAI/kimi-cli/pull/2658) — fix(web): 保留 IME 输入法组合状态下的 Enter 提交
- **作者**：@dvd233 | OPEN | 修复 [#2643](https://github.com/MoonshotAI/kimi-cli/issues/2643)
- **关键修复**：`kimi web` 在 macOS/WKWebView 上，按 Enter 时光标仍处于 CJK IME 组合状态会**直接提交 prompt** 而非确认输入。这是因为 WebKit 会在 keydown 处理器运行前清空 `isComposing` 标志。
- **价值**：对中日韩用户至关重要，是 Web 端可用性的核心改进。WebKit 行为细节说明清晰，属于高质量修复。

### 2. [#2657](https://github.com/MoonshotAI/kimi-cli/pull/2657) — fix(print): 兼容不支持的 stdout 编码
- **作者**：@dvd233 | OPEN | 修复 [#2629](https://github.com/MoonshotAI/kimi-cli/issues/2629)
- **关键修复**：Print 模式直接将流式消息写入 stdout。在 Windows 控制台使用 GBK 等遗留编码时，非编码内字符会触发 `UnicodeEncodeError` 并终止命令。
- **方案**：在写入前按 stdout 编码对输出做 sanitize 处理。
- **价值**：显著提升 Windows / 中文环境下的稳定性，扩展 CLI 在企业内网、旧版终端中的适用范围。

### 3. [#2656](https://github.com/MoonshotAI/kimi-cli/pull/2656) — fix(llm): 为 OpenCode Go 主机发送 x-opencode-session
- **作者**：@FOWEPJF255 | OPEN | 解决 [#2653](https://github.com/MoonshotAI/kimi-cli/issues/2653)
- **关键修复**：OpenCode Go 在编程 agent 缺少稳定的 `x-opencode-session` 头时会返回 HTTP 400。
- **方案**：
  - 识别官方 OpenCode 主机（`opencode.ai` / `*.opencode.ai`）
  - 为 `openai_legacy` 兼容路径设置 `x-opencode-session` 为当前 Kimi 会话 ID
- **价值**：补齐第三方 LLM 代理兼容性，完善开放生态集成能力。

---

## 📈 功能需求趋势

从过去 24 小时的 Issue 样本（仅 3 条）来看，社区关注方向较为分散，但可提炼出以下趋势：

| 趋势方向 | 证据 | 强度 |
|---------|------|------|
| **大输入/长上下文的客户端鲁棒性** | #2655（栈溢出） | ⭐⭐⭐ 强 |
| **多智能体工作流稳定性** | #2650（subagent OAuth 超时） | ⭐⭐⭐ 强 |
| **CJK / 本地化输入体验** | PR #2658（IME 组合） | ⭐⭐ 中 |
| **跨平台编码兼容（Windows）** | PR #2657（GBK 编码） | ⭐⭐ 中 |
| **第三方 LLM 网关兼容** | PR #2656（OpenCode Go） | ⭐⭐ 中 |
| **TUI resize 事件处理** | #1534（已关闭） | ⭐ 弱（已解决） |

> 💡 **趋势解读**：本期样本量小（仅 3 条），但反映出一个明确信号——**客户端稳定性和兼容性修复**优先级高于新功能。这通常出现在版本成熟期。

---

## 👨‍💻 开发者关注点

基于本期 Issues + PRs 综合分析：

### 🔴 高频痛点
1. **大 prompt 输入崩溃**（#2655）—— 影响自动化脚本、CI/CD 集成、日志批量分析等场景。建议：路径正则应改为非递归或限制输入大小。
2. **Subagent 启动脆弱性**（#2650）—— OAuth 瞬时故障无重试，破坏多代理编排。
3. **CJK 用户在 Web 端的"幽灵提交"**（PR #2658）—— IME 误触发送，对中文/日文/韩文用户是日常阻塞问题。

### 🟡 兼容性短板
- Windows + 非 UTF-8 编码环境的 stdout 处理（PR #2657）
- 第三方 LLM 主机 header 约定（PR #2656）

### 🟢 积极信号
- 长期悬挂 Issue #1534（2026-03 提出）终于关闭，说明 backlog 在持续清理。
- PR #2658 对 WebKit 行为给出了详尽说明，体现贡献者对浏览器底层行为的深入理解，代码质量较高。
- 三条 PR 均**精确关联具体 Issue**，并提供根因分析 + 修复方案，符合高质量开源协作模式。

### 📌 建议关注的开发者
- **@dvd233**：连续提交 2 条高质量修复 PR（#2657、#2658），覆盖 Web 与 print 两个方向，是近期最活跃贡献者。
- **@FOWEPJF255**：关注 LLM 协议兼容性领域。

---

*报告生成时间：2026-09-21 | 数据来源：GitHub API | 样本周期：过去 24 小时*
*注：今日社区活动量低于平均水平（仅 3 Issues / 3 PRs），数据代表性有限，趋势分析仅供参考。*

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

<think>The user wants me to generate a daily report for the OpenCode community based on GitHub data from 2026-09-21. Let me analyze the data carefully and create a structured Chinese-language report.

Key observations:
1. No releases in the past 24 hours
2. 50 issues updated, 30 shown (sorted by comment count)
3. 50 PRs updated, 20 shown

Let me organize the content:

**Top Issues by comments:**
- #48069 (13 comments): Bedrock GPT-6 Astra image issue - CLOSED
- #27018 (13 comments): v1.14.48 localserver issue - CLOSED
- #9955 (10 comments): TUI padding issues - CLOSED, 21 thumbs up
- #50093 (8 comments): Free usage exceeded - OPEN
- #22260 (8 comments): Read tool audio/video support - CLOSED
- #22103 (7 comments): Subagent token usage in TUI - CLOSED
- #14791 (5 comments): Bash over grep tools - CLOSED
- #49108 (4 comments): Skill sources - OPEN
- #49982 (4 comments): Server plugin reload failure - OPEN
- #38295 (4 comments): Tab to extend question option - CLOSED

**Top PRs (none have comments, but they're all new or recently updated):**
- #50276: Background long-running shell commands
- #50267: Browser sign-in for OpenCode Go/Console
- #50272: Bedrock tool images fix (fixes #48069)
- #50275: Whole-word path matching in search
- #50274: Suppress internal compaction output in ACP
- #50271: Server directory in project picker on Windows
- #50270: Delete legacy V1 session rows
- #50264: Together AI stream usage
- #50265: Empty review state without VCS
- #50231: Effect upgrade to rc.115

Let me write the report now. I should be thorough but concise, professional, in Chinese.</think>

# OpenCode 社区动态日报 · 2026-09-21

## 今日速览

今日 OpenCode 仓库活跃度集中在 **Bug 修复与稳定性优化** 上，过去 24 小时合并/关闭了多项关键 PR（Bedrock 图片兼容、Together AI 用量上报、Windows 项目选择器等）。社区讨论焦点仍围绕 **模型供应商兼容性**（Bedrock/DeepSeek/Go）、**TUI 体验优化**、**多媒体工具扩展**（音频/视频读取）以及 **OpenCode Go/Console 计费与配额机制**。同时，浏览器端 SSO 登录、后台长时 Shell 命令等多项面向 v2 的核心改造已进入 PR 阶段。

---

## 版本发布

过去 24 小时无新版本发布。

---

## 社区热点 Issues

| # | Issue | 状态 | 关注点 |
|---|-------|------|--------|
| [#48069](https://github.com/anomalyco/opencode/issues/48069) | Bedrock GPT-6 Astra 读取图片后下一次请求 400 | CLOSED | 多模型供应商兼容性问题，影响多个 Bedrock 模型；社区 13 条讨论、3 👍；今日已被 PR [#50272](https://github.com/anomalyco/opencode/pull/50272) 修复 |
| [#27018](https://github.com/anomalyco/opencode/issues/27018) | v1.14.48 Desktop localserver 中断 | CLOSED | 老版本回归问题，13 条讨论，涉及 Desktop 桌面端核心稳定性 |
| [#9955](https://github.com/anomalyco/opencode/issues/9955) | TUI 存在过多 padding / 高度浪费 | CLOSED | 高赞同（21 👍）+ 10 条讨论，反映出 TUI 空间利用率是长期痛点 |
| [#50093](https://github.com/anomalyco/opencode/issues/50093) | Free 用量超限后跨多个免费模型重试计时器持续累加 | OPEN | Zen 免费模型配额机制存在设计缺陷，影响用户体验；5 👍 |
| [#22260](https://github.com/anomalyco/opencode/issues/22260) | read 工具需支持音视频附件 | CLOSED | 多媒体能力扩展呼声较高（8 👍），是 read 工具下一阶段重要能力 |
| [#22103](https://github.com/anomalyco/opencode/issues/22103) | TUI token 计数器需展示子代理用量 | CLOSED | 9 👍，与子代理可观测性相关 |
| [#14791](https://github.com/anomalyco/opencode/issues/14791) | Agent 倾向 bash 而忽略 grep/glob 工具 | CLOSED | 7 👍，涉及工具调度策略，影响代理执行效率 |
| [#49108](https://github.com/anomalyco/opencode/issues/49108) | 显式 skill 源与来源限定的去重 | OPEN | 高级用户痛点，4 条讨论 |
| [#49982](https://github.com/anomalyco/opencode/issues/49982) | 配置变更后插件重载失败导致自定义 agent/命令静默丢失 | OPEN | 服务端高危问题，影响 `opencode serve` / Desktop 后台模式 |
| [#38295](https://github.com/anomalyco/opencode/issues/38295) | Tab 键可将问题选项展开为自定义回答 | CLOSED | 交互体验增强类需求 |

**趋势小结**：CLOSE 比例较高（30 条中 22 条已关闭），说明维护团队对存量 Bug 处理积极；OPEN 状态的几个 Issue 集中在 **配额机制、Skill 体系、服务端稳定性**。

---

## 重要 PR 进展

| # | PR | 关键内容 |
|---|----|---------|
| [#50272](https://github.com/anomalyco/opencode/pull/50272) | **Bedrock 工具图片提升**：仅 Claude / Nova / Llama 4 保留 tool-result 图片，其他模型 hoist 出来 | 直接修复 [#48069](https://github.com/anomalyco/opencode/issues/48069) 和 [#49443](https://github.com/anomalyco/opencode/issues/49443)，解决 session 卡死问题 |
| [#50276](https://github.com/anomalyco/opencode/pull/50276) | **后台长时 Shell 命令**：超过 5s 自动转入后台，保留输出、完成通知和超时 | 改善大型项目中的命令执行体验 |
| [#50267](https://github.com/anomalyco/opencode/pull/50267) | **Desktop 端浏览器登录 OpenCode Go / Console**：默认走浏览器 OAuth，API Key 移至 Advanced | 简化桌面端 onboarding 流程 |
| [#50264](https://github.com/anomalyco/opencode/pull/50264) | **Together AI 上报 usage**：升级 `@ai-sdk/togetherai` 至 2.0.68 | 修复 V1 Together 模型 token 始终为 0 的统计缺陷 |
| [#50275](https://github.com/anomalyco/opencode/pull/50275) | **Code Mode 搜索排序优化**：全词匹配权重高于子串匹配 | 提升 `cloudflare.get_zones` vs `get_timezones` 这类路径的检索准确性 |
| [#50274](https://github.com/anomalyco/opencode/pull/50274) | **ACP 抑制内部 compaction 输出** | 自动压缩阶段不再向 ACP 用户展示内部噪音 |
| [#50271](https://github.com/anomalyco/opencode/pull/50271) | **Windows 项目选择器使用 server 目录** | 修复 `opencode web` 在 Windows 下打开路径错位 |
| [#50270](https://github.com/anomalyco/opencode/pull/50270) | **删除会话时清理 V1 遗留行** | 解决 V1→V2 迁移后 `session/message/part/todo` 表的孤儿数据 |
| [#50265](https://github.com/anomalyco/opencode/pull/50265) | **无 VCS 项目显示空 Review 状态** | 修复 Review 页面在非 Git 项目下无限 Loading |
| [#50231](https://github.com/anomalyco/opencode/pull/50231) | **Effect 依赖升级到 rc.115** | 跟进 Effect V4 RC 节奏，处理 socket / schema / CLI / 网络地址破坏性变更 |

---

## 功能需求趋势

从 50 条 Issue 中可归纳出以下社区高度关注的方向：

1. **多模态工具扩展** – read 工具支持音/视频附件（[#22260](https://github.com/anomalyco/opencode/issues/22260)），打开本地媒体主动检索能力。
2. **新模型供应商接入** – QwenCloud International（[#43067](https://github.com/anomalyco/opencode/issues/43067)）、DeepSeek V4 Flash Global region 支持（[#50155](https://github.com/anomalyco/opencode/issues/50155)）。
3. **TUI / IDE 体验优化** – 减少 padding / 高度浪费（[#9955](https://github.com/anomalyco/opencode/issues/9955)）、plan/build 模式切换按钮（[#38277](https://github.com/anomalyco/opencode/issues/38277)）、Tab 键扩展选项（[#38295](https://github.com/anomalyco/opencode/issues/38295)）。
4. **可观测性增强** – 子代理 token 用量（[#22103](https://github.com/anomalyco/opencode/issues/22103)）、TUI 用量拆分。
5. **规则 / Skill / Context 治理** – 路径作用域规则（[#37463](https://github.com/anomalyco/opencode/issues/37463)）、显式 skill 源（[#49108](https://github.com/anomalyco/opencode/issues/49108)）、refresh file index（[#40392](https://github.com/anomalyco/opencode/issues/40392)）。
6. **服务端 / 后台稳定性** – plugin reload 失败（[#49982](https://github.com/anomalyco/opencode/issues/49982)）、V1/V2 会话迁移（[#50270](https://github.com/anomalyco/opencode/pull/50270)）。

---

## 开发者关注点

- **多供应商兼容性是首要痛点**：Bedrock（Taurus/Nova/Llama）、DeepSeek Go、Together AI、QwenCloud、Zen 免费模型等均出现独立 Issue，跨供应商适配仍是高优先级工作。
- **TUI 空间利用率差**：[#9955](https://github.com/anomalyco/opencode/issues/9955) 拿到 21 👍，反映出桌面 / 笔记本用户对 TUI 信息密度的普遍不满。
- **Agent 工具调度不够智能**：频繁回退到 bash 而不使用 grep/glob（[#14791](https://github.com/anomalyco/opencode/issues/14791)），影响代理效率与可预测性。
- **权限与 skill 一致性缺陷**：glob 模式相对路径不生效（[#38351](https://github.com/anomalyco/opencode/issues/38351)）、被 deny 的 skill 仍被广告（[#38337](https://github.com/anomalyco/opencode/issues/38337)），安全与一致性需要进一步收紧。
- **V1 → V2 数据迁移遗留**：会话语义变更（`/sessions` cwd 优先级、providerState 字段重命名等）引发一系列需要后续清理的问题。
- **本地化覆盖不足**：乌克兰语文档 404（[#38297](https://github.com/anomalyco/opencode/issues/38297)）等小问题也出现在前端 UI 改造中。

---

>  **编辑建议**：建议社区在 Issue 中标注对应的 PR 链接，以减少重复讨论；同时关注 [OpenCode Zen 免费配额机制](https://github.com/anomalyco/opencode/issues/50093) 的演进，该问题直接影响新用户体验。

*数据范围：2026-09-21 当日更新的 Issue / PR。如需更早的趋势对比，可回溯过去 7/30 天的数据。*

</details>

<details>
<summary><strong>jcode</strong> — <a href="https://github.com/1jehuang/jcode">1jehuang/jcode</a></summary>

<think>The user wants me to generate a daily report for the jcode community based on GitHub data from 2026-09-21. Let me analyze the data carefully and produce a well-structured Chinese-language report.

Let me categorize the key items:

**Releases:**
- v0.86.0 with smarter task handling and clearer session feedback

**Top Issues by engagement:**
1. #940 - daemon keeps replaying detached commands (11 comments, critical)
2. #1224 - OpenCode Go models fail with 500 (10 comments)
3. #678 - Installer silently adds global shortcut/LaunchAgent (5 comments, 6 likes)
4. #1249 - Visible swarm spawn fails (3 comments)
5. #1331 - Cost estimates diverge from real bills (3 comments)
6. #1321 - Active session invisible while writing to git (2 comments)
7. #1330 - Adaptive scheduler rate-limit data missing (2 comments)
8. #1252 - Daemon startup fails on missing runtime dir (2 comments)
9. #1264 - swarm await_members redundant fetch (2 comments)
10. #1266 - swarm list omits model identity for busy worker (2 comments)

Other notable:
- #1329 - Antigravity 429 quota issue
- #1284 - CLOSED get_history blocks
- #1289 - CLOSED Grok /model switch
- #1336 - OpenAI /responses stream loses tool calls
- #1326 - OpenAI-compatible tools with empty arguments
- #1327 - MCP servers enabled=false lost
- #1277 - embedded slash commands
- #1287 - Saved session label lost
- #1291 - Windows bash tool shell configurable
- #1292 - JCODE_WAKE_MODE missing from fingerprint
- #1294 - macOS terminal-launch Clippy
- #1296 - Grok Build file edits no diffs
- #1297 - grok-4.6 context window
- #1298 - Grok Build ACP FS_NOT_FOUND
- #1300 - Grok Build harness loops last task
- #1302 - Text-only models image blocks
- #1323 - GPT-5.6 Luna context 272K vs 1.05M
- #1332 - TUI drag-to-copy autoscroll

**Top PRs:**
1. #1357 - atomic task status files
2. #1356 - bound test-env lock wait
3. #1354 - clippy/rustfmt fix
4. #1355 - jev mock socket blocking mode
5. #1353 - pricing layer
6. #1268 - @file mention picker
7. #1346 - /sessions <query> picker
8. #1347 - text-only models modality recovery
9. #1345 - usage display elapsed
10. #1320 - structural repo map provider
11. #1344 - copy-selection tests fix
12. #1315 - citation-backed memories
13. #1314 - tunable storage dedup
14. #1265 - swarm skip redundant backfill
15. #1267 - swarm retain model identity
16. #1253 - runtime dir before spawn lock
17. #1338 - correlate Responses tool events
18. #1337 - preserve proxy tool arguments
19. #1334 - README typos

**Trends:**
- Provider compatibility (Grok Build, OpenAI-compatible, Antigravity)
- Swarm coordination bugs
- Tool call streaming/parsing issues
- TUI improvements (sessions, @file picker, drag-to-copy)
- Cost/pricing accuracy
- MCP server integration
- Memory system enhancements
- Cross-platform (Windows shell, macOS clippy)

Let me write this in clear technical Chinese.</think>

# jcode 社区动态日报 · 2026-09-21

## 📌 今日速览

jcode 今日发布 **v0.86.0**，核心改进聚焦在"任务执行更聪明、会话反馈更清晰"，尤其是 Jev 浏览器跨多步任务的交接能力以及基于 Jev 的记忆召回机制迎来重写。Issues/PR 方面，社区关注点高度集中在 **Provider 兼容性**（Grok Build、OpenAI 兼容网关、Antigravity）与 **Swarm/Tool 调用的流式解析** 两大方向，多个影响生产可用性的 critical/high bug 仍处于 needs-decision 状态。

---

## 🚀 版本发布

### [v0.86.0](https://github.com/1jehuang/jcode/releases) — Smarter task handling and clearer session feedback

主要变更：
- **Jev 浏览器 handoff 升级**：现在可承接整段多步任务，能在不确定页面持续推进，仅在完成或阻塞时才回退给父会话
- **Memory recall 重写**：改由 Jev 自身选择相关的项目级 / 全局记忆，提升召回质量
- 更清晰的会话状态反馈（标题截断提示）

> 注：摘要数据仅展示到第二段，完整 release notes 建议直接查阅 release 页。

---

## 🔥 社区热点 Issues

按讨论热度与严重程度精选 10 条：

1. **[#940](https://github.com/1jehuang/jcode/issues/940)** · Critical · 11 评论
   停止 swarm workers 后，daemon 仍持续重放 detached 命令，进程无法 kill，系统挂起。属于 regression，标记 `needs-decision` 与 `autonomous: no`，长时间未收敛。

2. **[#1224](https://github.com/1jehuang/jcode/issues/1224)** · 10 评论
   OpenCode Go 多协议 Provider 下的 Muse / Grok / GPT-5.6-Luna 等模型 500 失败。原因是这些模型要求 `/responses` 与 `/messages` 端点，而非当前实现的 `/chat/completions` 单一路径。

3. **[#678](https://github.com/1jehuang/jcode/issues/678)** · High · 6 点赞 / 5 评论
   `curl … | bash` 安装脚本静默创建全局快捷键与带 `KeepAlive` 的 macOS LaunchAgent，被认为默认行为过于侵入。用户关注度高（6 赞），但仍未关闭。

4. **[#1331](https://github.com/1jehuang/jcode/issues/1331)** · 3 评论
   Cost 估算偏离真实账单：当模型存在时段定价、用量过期或按路由差异定价时，jcode 单一扁平价完全失效。已有人在 PR #1353 中提出 config-authoritative 方案。

5. **[#1249](https://github.com/1jehuang/jcode/issues/1249)** · High · 3 评论
   `swarm_spawn_mode = "visible"` 在 Linux 下导致 worker 启动即死，coordinator 永久卡在 "startup queued"。快照未持久化是根因。

6. **[#1321](https://github.com/1jehuang/jcode/issues/1321)** · High · 2 评论
   活跃 session 可在 session picker 中"消失"但仍在后台改文件 / 写 git。复现者报告持续约 14 小时无法察觉也无法停止。

7. **[#1330](https://github.com/1jehuang/jcode/issues/1330)** · 2 评论
   `docs/AMBIENT_MODE.md` 描述的 adaptive scheduler 实际从未接收到 rate-limit 数据，`calculate_interval` 永远回退到 `max_interval_minutes`。文档与实现脱节。

8. **[#1336](https://github.com/1jehuang/jcode/issues/1336)** · High · Regression · v0.85.0
   OpenAI `/responses` 流在 `item_id` 每事件变化时（Copilot gpt-5.6-luna）丢失工具调用。1jehuang 已在 PR #1338 中修复。

9. **[#1326](https://github.com/1jehuang/jcode/issues/1326)** · Reproducible
   OpenAI 兼容代理（OpenWebUI+vLLM）在每段流后追加 `finish_reason: stop`，导致工具调用以空参数 `{}` 提前 flush。PR #1337 已修。

10. **[#1327](https://github.com/1jehuang/jcode/issues/1327)** · Reproducible
    从 `~/.codex/config.toml` 导入 MCP server 时丢失 `enabled = false`，导致用户明确禁用的服务被启动（安全风险）。

> 其它值得留意：[#1300](https://github.com/1jehuang/jcode/issues/1300)（Grok Build harness 重复执行同一任务 25-30s）、[#1302](https://github.com/1jehuang/jcode/issues/1302)（文本模型图像块污染会话，已有 PR #1347 修复）、[#1323](https://github.com/1jehuang/jcode/issues/1323)（GPT-5.6 Luna 上下文被报为 272K 而非 1.05M）。

---

## 🛠️ 重要 PR 进展

按重要性 / 修复覆盖面精选：

1. **[#1338](https://github.com/1jehuang/jcode/pull/1338)** · 维护者本人提交 · 修 [#1336](https://github.com/1jehuang/jcode/issues/1336)
   用稳定的 `output_index` 关联 Responses 工具事件，item-ID 与非空 call-ID 作为兜底别名，修复 Copilot gpt-5.6-luna 工具调用丢失问题。

2. **[#1337](https://github.com/1jehuang/jcode/pull/1337)** · 维护者本人提交 · 修 [#1326](https://github.com/1jehuang/jcode/issues/1326)
   推迟 OpenRouter / OpenAI 兼容代理的工具调用 flush 到 `[DONE]` 或 EOF，规避中间 `finish_reason` 误触发。

3. **[#1347](https://github.com/1jehuang/jcode/pull/1347)** · 修 [#1302](https://github.com/1jehuang/jcode/issues/1302)
   文本模型在收到图像块时进入"运行时模态恢复"：丢弃图像、降级处理、并对历史污染做会话级隔离。

4. **[#1354](https://github.com/1jehuang/jcode/pull/1354)** · 修 [#1348](https://github.com/1jehuang/jcode/issues/1348) / [#1294](https://github.com/1jehuang/jcode/issues/1294)
   在 `rustc 1.98.1` 上清掉 clippy 与 rustfmt 漂移，修复 dev-bins bench 构建。CI 恢复绿色。

5. **[#1357](https://github.com/1jehuang/jcode/pull/1357)** · 修 [#1350](https://github.com/1jehuang/jcode/issues/1350)
   背景任务状态文件改为原子发布（write-temp + rename），避免 `wait` 看到半写文件。

6. **[#1355](https://github.com/1jehuang/jcode/pull/1355)** · 修 [#1351](https://github.com/1jehuang/jcode/issues/1351)
   将 jev mock socket 切回阻塞模式，根除 BSD/macOS 上的连接继承导致的测试 flake。

7. **[#1356](https://github.com/1jehuang/jcode/pull/1356)** · 修 [#1349](https://github.com/1jehuang/jcode/issues/1349)
   给共享测试环境锁加上超时与 holder 命名，让死锁可观测。

8. **[#1267](https://github.com/1jehuang/jcode/pull/1267)** · 修 [#1266](https://github.com/1jehuang/jcode/issues/1266)
   `swarm list/status` 在 worker 忙碌时仍可显示其模型身份，改为使用快照路径 + 互斥保护。

9. **[#1265](https://github.com/1jehuang/jcode/pull/1265)** · 修 [#1264](https://github.com/1jehuang/jcode/issues/1264)
   跳过冗余的 `CommReadContext` 回填，仅在缺少 completion report 时回退到 history。

10. **[#1353](https://github.com/1jehuang/jcode/pull/1353)** · 跟踪 [#1331](https://github.com/1jehuang/jcode/issues/1331)
    引入 config-authoritative 定价层，支持用户自定义费率、关税与货币（Draft，求反馈）。

> 值得一提的 Feature PR：[#1268](https://github.com/1jehuang/jcode/pull/1268)（TUI `@file` mention picker，frecency 排序，关 [#570](https://github.com/1jehuang/jcode/issues/570)）、[#1346](https://github.com/1jehuang/jcode/pull/1346)（`/sessions <query>` 预过滤）、[#1345](https://github.com/1jehuang/jcode/pull/1345)（usage widget 显示 elapsed %）、[#1320](https://github.com/1jehuang/jcode/pull/1320)（opt-in 结构化 repo map provider）。

---

## 📈 功能需求趋势

1. **Provider 兼容性是头号痛点**
   Grok Build 系列（4 条 issue：#1296 / #1297 / #1298 / #1300）、OpenAI 兼容代理（#1326、#1329、#1336）、OpenCode Go 多协议（#1224）、Antigravity 配额（#1329）几乎占据了所有 high/critical 报告。社区迫切希望"接入新模型 0 改动"。

2. **Swarm 协调与可见性**
   多个 swarm 相关 bug（#940 / #1249 / #1264 / #1266）显示多 agent 协同的状态机仍脆弱，session 可见性、worker 身份保持、completion report 传递都是反复出现的破坏面。

3. **工具调用流式解析**
   Responses API、OpenAI 兼容代理、vLLM 等后端的非标准 chunk 顺序普遍踩坑，社区需要更鲁棒的关联与 flush 策略（PR #1338 / #1337 是当下回应）。

4. **TUI / DX 改进**
   `@file` mention（#570 / #1299）、`/sessions` 预过滤（#1232）、drag-copy autoscroll（#1332）、保存标签丢失（#1287）、斜杠命令嵌入（#1277）等小但高频的体验项持续被提。

5. **成本与定价可观测**
   #1331 反映出对真实账单、时段定价、过期额度的强烈诉求，PR #1353 已在路径上。

6. **记忆系统深化**
   引用校验（#1229 / PR #1315）、去重与 RRF 参数化（#1231 / PR #1314）、repo map（#1230 / PR #1320）表明社区希望记忆层从"能存能取"走向"可解释、可调参"。

7. **跨平台与安装行为**
   Windows shell 不可配置（#1291）、macOS 安装器 LaunchAgent（#678）继续是用户摩擦点。

---

## 👨‍💻 开发者关注点

- **"看不见的活动 session"是最大的生产风险**：#1321 描述的场景（session 隐藏 14 小时仍写 git）直接破坏用户对工具的信任，回复中已经看到 "refuses to use as default" 的措辞。
- **Provider 差异被低估**：许多 high 严重度 bug 实际是单一模型 / 网关的"乐观响应"，提示 jcode 在容错层仍有缺口（例如对 429、500、未知 chunk 顺序）。
- **并发原语滥用**：`try_lock` 探测后再 `lock().await`（#1284 已修）、runtime dir 与 spawn lock 顺序（#1252 已修）、test-env 锁死锁（#1349）三连击，暴露出异步资源获取顺序的脆弱性。
- **文档漂移**：`docs/AMBIENT_MODE.md` 描述的 adaptive scheduler 根本没人喂数据（#1330），提示 README / 文档与实现需要更紧密的同步机制。
- **可移植性细节被忽视**：socket 的 `O_NONBLOCK` 继承、macOS clippy return 警告、跨平台 shell 差异等"小坑"在 CI 与测试覆盖率不足时反复泄漏。
- **透明与可控**：开发者明确偏好"显式优于隐式"——opt-in 仓库图（#1320）、config 覆盖定价（#1353）、可关闭的 LaunchAgent（#678）都是同一类呼声。

---

*日报基于 github.com/1jehuang/jcode 在 2026-09-21 的公开数据生成。链接均指向原始 Issue / PR 详情页，欢迎在评论区补充当日未覆盖的重要动态。*

</details>

<details>
<summary><strong>pi</strong> — <a href="https://github.com/earendil-works/pi">earendil-works/pi</a></summary>

<think>Let me analyze the GitHub data for the pi (earendil-works/pi) community on 2026-09-21 and generate a comprehensive daily report in Chinese.

Key observations from the data:

1. **Release**: v0.86.1 was released with Meta Muse provider integration
2. **Issues**: 44 issues updated in 24 hours, 30 shown (most commented)
3. **PRs**: 7 PRs updated, all closed
4. **Hot topics**: Windows compatibility, provider API issues (Mistral, OpenAI compat), Codex issues, performance/TUI issues, IME issues

Let me organize this into a structured daily report:

**Top Issues by comments:**
1. #7547 - Windows usage/issues (67 comments)
2. #9815 - mistral-conversations Retry-After (5)
3. #9508 - OpenAI-specific fields sent to compatible providers (5)
4. #6226 - finish_reason error (5)
5. #9062 - Quadratic tool-call argument parsing (5)
6. #9822 - Codex tool calls leak as raw harmony text (4)
7. #9631 - Images autoResize limits (4)
8. #9794 - Import error in 0.86.0 (4)
9. #9688 - Clipboard copy regression (4)
10. #9448 - pi auth check extension providers (3)
11. #9785 - Bash timeout confusion (3)
12. #9497 - Windows CJK IME (3)
13. #9810 - Codex CacheWarmer disabled (3)
14. #9770 - find/grep timeout (3)
15. #9748 - Hardware cursor option (3)

**PRs:**
1. #9804 - Exclude Cerebras from supportsStrictMode
2. #9117 - System message deltas for prompt/tool changes
3. #9116 - Mid-conversation system messages
4. #9096 - Meta provider with Muse subscription
5. #9800 - Bash output temp file WriteStream errors
6. #9799 - Terminate agentLoop streams on failure
7. #8743 - Ignore stale tool image conversions

**Trends I can identify:**
- Windows compatibility (CJK IME, Windows issues, cursor display)
- Provider integration (Meta Muse, Mistral, OpenAI compatible, Codex, Z.AI, Kimi)
- Performance (TUI rendering, tool-call parsing, session listing)
- Extensions API stability (auth check, ModelRegistry binding, npm resolution)
- 0.86.0 regressions (Codex harmony, import error, NInfer, RPC steer)

Let me write this up now.</think>

# pi 社区动态日报 · 2026-09-21

## 📌 今日速览

v0.86.1 版本今日发布，正式引入 **Meta Muse 订阅** provider（`/login meta`），访问 Spark 系列模型。社区焦点集中在 **0.86.x 系列的多项回归与兼容性 bug**（Codex harmony 文本泄漏、模块导入错误、NInfer 兼容性、RPC steer 关联丢失），同时 **Windows 体验**（CJK IME、剪贴板、硬件光标）与 **provider 适配**（Mistral、Z.AI、Kimi、OpenAI 兼容协议）持续成为高优讨论方向。性能层面，TUI 渲染、tool-call 参数解析、会话列表读取等多项 O(N²) 或全量重读问题被集中曝光。

---

## 🚀 版本发布

### v0.86.1 — 2026-09-20

**新功能**
- **Meta Muse Provider**：通过 `/login meta` 或 `META_API_KEY` 登录，访问 Muse Spark 系列模型。详见 [providers 文档](https://github.com/earendil-works/pi/blob/v0.86.1/packages/coding-agent/docs/providers.md#meta-muse-subscription)。

（完整变更日志详见 [Release v0.86.1](https://github.com/earendil-works/pi/releases/tag/v0.86.1)）

---

## 🔥 社区热点 Issues（Top 10）

1. **[#7547](https://github.com/earendil-works/pi/issues/7547) Windows 体验调研（67 评论 · 👍 2）**  
   官方主动发起的"Windows 使用调查贴"，梳理 pi 在 Windows 上多种运行方式及现存问题。**最高优先级**：决定后续 bug 修复、文档与开箱即用体验的资源投入方向。社区反馈集中于 IME、剪贴板、终端渲染。

2. **[#9815](https://github.com/earendil-works/pi/issues/9815) Mistral 忽略 `Retry-After` 头导致 429（5 评论）**  
   `provider-retry.ts` 未按 Mistral 文档解析 429 响应中的 `Retry-After`，造成短间隔重试雪崩。**典型 provider 协议差异问题**，所有自托管/三方用户都会受影响。

3. **[#9508](https://github.com/earendil-works/pi/issues/9508) pi-ai 向 OpenAI 兼容 provider 发送 OpenAI 专有字段（5 评论）**  
   通用 provider 在 `models.json` 中配置后，pi-ai 仍透传 OpenAI 专有 fields/roles/auth，引发 400/422。**影响面大**：所有 OpenAI 兼容厂商（vLLM、LM Studio、Together、NIM 等）。

4. **[#6226](https://github.com/earendil-works/pi/issues/6226) 流式响应缺少 `finish_reason` 报错（5 评论 · 👍 1）**  
   GLM 5.1 on NVIDIA NIM 等 provider 在工具调用时不发送 `finish_reason`，导致流中断。建议在 `openai-completions.ts` 中做兼容性检查。**典型三方 provider 边界 case**。

5. **[#9062](https://github.com/earendil-works/pi/issues/9062) Tool-call 参数解析呈 O(N²)（5 评论）**  
   `processResponsesStream` 中每个 delta 都对整段 `partialJson` 重新调用 `parseStreamingJson`，碎片化流下退化为二次方。**性能热点**，长工具调用用户感知明显。

6. **[#9822](https://github.com/earendil-works/pi/issues/9822) Codex 工具调用泄漏为 harmony 原文（4 评论）**  
   0.86.0/0.86.1 上 `openai-codex` + `gpt-5.6-luna`，compaction 后工具调用变成纯文本（`to=functions.*`），不执行、不返回结果。**新版本首发回归**，影响使用 Codex 的核心用户。

7. **[#9794](https://github.com/earendil-works/pi/issues/9794) 0.86.0 导入错误（4 评论）**  
   Windows 全局 npm 安装下加载 `openai-responses-TFDINO6W.js` 失败，破坏升级路径。**0.86 升级高发问题**，需快速打补丁。

8. **[#9688](https://github.com/earendil-works/pi/issues/9688) 剪贴板复制回归（4 评论 · 👍 2）**  
   修复 #9618 期间改动 OSC 52 触发条件，导致 SSH 容器/无 `xsel/wl-copy` 环境剪贴板复制失效。**精细化触发的兼容性代价**。

9. **[#9448](https://github.com/earendil-works/pi/issues/9448) `pi auth check` 无法识别扩展 provider（3 评论 · 👍 1）**  
   扩展注册的 provider 被 `auth check` 误判为 `invalid_state`，破坏非交互式审核流水线。**扩展生态关键诊断能力缺失**。

10. **[#9497](https://github.com/earendil-works/pi/issues/9497) Windows CJK IME 卡顿/候选窗不显示（3 评论）**  
    中文输入法在 pi 中基本不可用，启用 `showHardwareCursor` 可缓解。**Windows 中文开发者群体核心痛点**。

---

## ️ 重要 PR 进展（Top 10）

1. **[#9096](https://github.com/earendil-works/pi/pull/9096) Meta provider + Muse OAuth（已合并至 v0.86.1）**  
   新增 Meta Muse 订阅 OAuth，注意其 refresh token 机制特殊（每日由 identity token 重铸），且流式响应目前为"伪流"（整体 burst）。**新模型接入**。

2. **[#9116](https://github.com/earendil-works/pi/pull/9116) pi-ai 中途插入 system messages**  
   #8998 拆分第一层，允许 mid-conversation 通过 system role 增量变更，为扩展/工具中途切换提供统一协议。

3. **[#9117](https://github.com/earendil-works/pi/pull/9117) coding-agent 以 system delta 投递 prompt/tool 变更**  
   第二层，coding agent 改为用 system 消息增量推送 prompt 与 tool loadout 变更，替代重写顶层 system。**减少 prompt 哈希漂移、降低缓存命中率损失**。

4. **[#9804](https://github.com/earendil-works/pi/pull/9804) Cerebras 排除出 `supportsStrictMode`**  
   Cerebras API 不支持混合 strict/非 strict 工具，本 PR 强制关闭 strict mode，修复 0.86.0 上含扩展工具时全部 400 的问题。

5. **[#9800](https://github.com/earendil-works/pi/pull/9800) 修复 bash 输出 temp file WriteStream 错误**  
   `OutputAccumulator` 与 `executeBashWithOperations` 创建写入流后未处理立即失败，可能导致静默丢失日志。**可靠性补丁**。

6. **[#9799](https://github.com/earendil-works/pi/pull/9799) agentLoop 流终止处理**  
   `agentLoop`/`agentLoopContinue` 未挂 rejection handler，`streamFn` 提前抛出（provider/网络/认证失败）会导致句柄泄漏。**底层鲁棒性**。

7. **[#8743](https://github.com/earendil-works/pi/pull/8743) 忽略过期的 tool image 转换**  
   Kitty 图片转换缓存条目绑定源图，过期/竞态的转换不再渲染。**修复多模态粘贴竞态**。

8. **[#9810](https://github.com/earendil-works/pi/issues/9810) Codex CacheWarmer 失效导致大额重复计费（issue）**  
   0.86.1 上 `gpt-5.6-sol` 长会话约 7 分钟空闲后冷触发，re-bill 106k / 162k tokens。**provider 元数据回归**，急需修补。

9. **[#9785](https://github.com/earendil-works/pi/issues/9785) Bash timeout 秒/毫秒混淆 + 上限为 2³¹（issue）**  
   `resolveTimeoutMs` 单位混乱使上限达 24.8 天，建议加合理默认值与 max。**安全/可用性边界**。

10. **[#9820](https://github.com/earendil-works/pi/issues/9820) 会话列表读取 O(文件大小)（issue）**  
    `buildSessionInfo` 全文件解析，建议改为"读首行 + 从文件尾回溯"读取 header/footer JSON。**会话规模增长后的关键性能瓶颈**。

---

##  功能需求趋势

| 方向 | 代表 Issue | 关注度 |
|---|---|---|
| **多 Provider 兼容（OpenAI/Mistral/Z.AI/Kimi/Codex）** | #9815, #9508, #6226, #9805, #9818, #9816 | 🔥🔥🔥🔥 |
| **Windows 体验打磨** | #7547, #9497, #9794, #9688, #9748 | 🔥🔥🔥🔥 |
| **大会话/长上下文性能** | #9062, #9807, #9820, #9810 | 🔥🔥🔥🔥 |
| **扩展生态 & API 稳定性** | #9448, #9821, #9817, #9803 | 🔥🔥🔥 |
| **新模型接入（Meta Muse、Cerebras 修正、Codex）** | #9096, #9804, #9810 | 🔥🔥🔥 |
| **工具能力增强（超时、auto-resize、粘贴、IME）** | #9785, #9770, #9631, #9809, #9497 | 🔥 |
| **TUI 渲染与光标** | #9807, #9748 | 🔥🔥 |
| **Skill/补全 UX** | #7282, #9808, #9806, #9795 | 🔥🔥 |

---

## 💬 开发者关注点总结

1. **0.86 升级阵痛集中爆发**：Codex harmony 文本泄漏（#9822）、模块导入失败（#9794）、NInfer strict_tools 400（#9816）、RPC steer 无法关联（#9803）四项核心回归使升级用户首日即遇阻，**版本发布前的回归测试覆盖度**受到质疑。

2. **Provider 适配是"长尾痛点"**：社区使用大量 OpenAI 兼容 / 自托管模型，每个 provider 都有边界 case（缺 `finish_reason`、专有 auth、context overflow 错误码差异等）。**统一的 provider 元数据 + 容错层**是呼声最高的架构诉求。

3. **Windows 用户被"卡在表面"**：CJK IME、剪贴板、光标样式、安装升级路径，每一项都阻断生产可用性。Windows 调研贴（#7547）67 评论表明这是数量级最大的潜在用户群。

4. **性能 O(N²) 被系统性发现**：tool-call 解析（#9062）、TUI 全量重绘（#9807）、会话列表全文件读取（#9820）——三项独立报告指向同一类问题：**架构层缺乏增量/diff 处理**。800+ 消息会话已成为实际用户场景。

5. **扩展 API 的"隐藏契约"成为隐患**：`this` 绑定丢失（#9821）、npm `exports` 解析失败（#9817）、`auth check` 不可见（#9448）暴露扩展系统在 `ctx` 暴露方法、模块解析、诊断命令三处的隐性约定。**官方需提供明确的扩展 API 稳定性承诺**。

6. **会话管理成本被低估**：大粘贴丢失（#9809）、autocomplete 在单行粘贴后被禁用（#9795）、skill 过滤 `!`/`-` 语义未文档化（#9806/#9808）等"小问题"叠加，**日常交互摩擦感上升**。

---

>  数据周期：2026-09-20 ~ 2026-09-21（UTC） · 数据来源：[earendil-works/pi](https://github.com/earendil-works/pi)

</details>

---
*本日报由 [Big Model Radar](https://github.com/96loveslife/big_model_radar) 自动生成。*
# AI CLI 工具社区动态日报 2026-06-28

> 生成时间: 2026-06-28 04:20 UTC | 覆盖工具: 7 个

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
The user wants me to generate a horizontal comparison analysis report based on the community dynamics of various AI CLI tools from 2026-06-28. Let me analyze the data from all the tools and create a comprehensive comparison.

Let me extract the key metrics from each tool:

1. **Claude Code**: 
   - Releases: 0
   - Issues mentioned: ~10 (focused on Opus 4.7 thinking summaries, Cowork ARM64)
   - PRs: 2 (both minor)
   - Notable: Bug clusters, no release

2. **OpenAI Codex**:
   - Releases: 3 (rust-v0.143.0-alpha.27/28/29)
   - Issues mentioned: 10 (rate limit, SQLite logs, MCP issues)
   - PRs: 10 (MCP OAuth refactor stack)
   - Notable: High alpha iteration, MCP OAuth refactor

3. **Gemini CLI**:
   - Releases: 1 (v0.51.0-nightly)
   - Issues mentioned: 10 (subagent stability, security)
   - PRs: 10 (security focused)
   - Notable: Security focus, subagent issues

4. **GitHub Copilot CLI**:
   - Releases: 0
   - Issues mentioned: 10 (Windows regression, TUI rendering)
   - PRs: 3 (low)
   - Notable: v1.0.65/66 stability issues

5. **Kimi Code CLI**:
   - No activity in past 24 hours

6. **OpenCode**:
   - Releases: 0
   - Issues: 50 updated
   - PRs: 50 updated
   - Notable: High activity, memory leaks, WSL issues

7. **Qwen Code**:
   - Releases: 1 (v0.19.2-nightly)
   - Issues: 26
   - PRs: 50
   - Notable: Chrome extension revival, /loop automation

Let me now structure the comparison analysis:

1. 生态全景 - Overall landscape
2. 各工具活跃度对比 - Activity comparison table
3. 共同关注的功能方向 - Common focus areas
4. 差异化定位分析 - Differentiation analysis
5. 社区热度与成熟度 - Community heat and maturity
6. 值得关注的趋势信号 - Trend signals

Let me write this in Chinese, professional and data-driven, suitable for tech decision makers and developers.
</think>
# AI CLI 工具生态横向对比分析报告
**报告日期：2026-06-28**

---

## 一、生态全景

当前 AI CLI 工具赛道已进入"**快速迭代 + 质量回归并存**"的阶段：头部工具（Codex、Qwen Code、OpenCode）保持高频发版与高 PR 吞吐，Gemini CLI 集中投入安全加固，而 Claude Code 与 Copilot CLI 则暴露出版本稳定性焦虑。**共同痛点从"能不能用"转向"用得稳不稳、用得安不安全"**——MCP 生态、跨平台兼容性、Token 成本可观测性成为各家攻坚的三大主战场。

---

## 二、各工具活跃度对比

| 工具 | Releases | Issues 更新 | PR 更新 | 整体活跃度 | 关键信号 |
|------|----------|-------------|---------|------------|----------|
| **OpenAI Codex** | 3（rust-v0.143.0-alpha.27/28/29）| 10+（含 186 评论热帖 #28879）| 10（MCP OAuth 5 层重构栈）| 🔴 **极高** | 高频 alpha 迭代 + MCP 生态治理 |
| **OpenCode** | 0 | **50** | **50** | 🔴 **极高** | 仓库吞吐量全榜第一，桌面端问题集中爆发 |
| **Qwen Code** | 1（v0.19.2-nightly）| 26 | **50** | 🟠 **高** | Chrome 扩展复兴 + `/loop` 自动化双线推进 |
| **Gemini CLI** | 1（v0.51.0-nightly）| ~10 | ~19 | 🟠 **高** | 安全 PR 占比超 30%，subagent 稳定性主导 |
| **Claude Code** | 0 | 10+（4 条 Opus 4.7 思维摘要）| 2（实质空窗）| 🟡 **中等** | 模型升级致 harness 回归，无新版本 |
| **GitHub Copilot CLI** | 0 | 15 | 3 | 🟡 **中等偏低** | v1.0.65/66 集中爆发 Windows 回归 |
| **Kimi Code CLI** | 0 | 0 | 0 | ⚪ **静默** | 24 小时无活动 |

> **总量观察**：OpenCode 与 Qwen Code 在 PR 吞吐上并列领先（50 条/日），反映社区贡献活跃度；Codex 的 MCP OAuth 5 层 PR 栈（#30292-#30296）显示其内部工程节奏密集；Claude Code 与 Copilot CLI 的低 PR 量则提示可能正处于内部消化周期。

---

## 三、共同关注的功能方向

以下需求在多个工具社区同时被强烈呼吁：

| 方向 | 涉及工具 | 共同诉求 |
|------|----------|----------|
| **MCP 生态稳定性** | Codex / Gemini / Copilot CLI | OAuth 刷新并发、stdio fd 泄漏、schema 规范化、进程回收（Codex #26984/#30408，Gemini #27878/#27889，Copilot #3958）|
| **跨平台 / ARM64 支持** | Claude Code / OpenCode / Copilot CLI | Snapdragon X / Windows ARM64 / WSL↔Desktop 路径互转（Claude #39636/#50674，OpenCode #19130/#19473，Copilot #3815/#3958）|
| **TUI/终端渲染质量** | Copilot CLI / Claude Code / OpenCode | alt-screen 切换、幽灵字符、软换行复制、触控板/键盘冲突 |
| **Token 成本与速率限制透明化** | Codex / Qwen Code | Codex #28879（gpt-5.5 10-20x 暴增）、Qwen #5819（自动改 setting.json 致费用激增）、#5942（Anthropic cache 命中率低）|
| **后台任务可观测性** | Qwen Code / Claude Code / Gemini CLI | `/loop` cron 静默触发（Qwen #5823）、Cowork 手动 compact（Claude #65114）、subagent 状态错报（Gemini #22323）|
| **文档 / LLM 友好化** | OpenCode / Claude Code | OpenCode #8816（llms.txt + docs markdown，👍34 长期最高赞），Claude 长期用户的 IDE 通知需求 |
| **会话/记忆/可恢复性** | Qwen Code / Claude Code | todo 跨设备同步（Qwen #5836）、memory 系统写入易执行难（Claude #71935/#71938）|

---

## 四、差异化定位分析

| 工具 | 核心定位 | 目标用户 | 技术路线亮点 |
|------|----------|----------|--------------|
| **Claude Code** | 深度 IDE 集成 + 模型原生能力 | 企业研发 / 重度 Claude 用户 | Cowork 模式（VM 级协作）、thinking summaries 可观测性、Anthropic SDK 深度绑定 |
| **OpenAI Codex** | 通用 Agent + Desktop 全场景 | 全栈开发者 / Pro/Plus 用户 | 极速 alpha 节奏、Server Mode、MCP OAuth 端到端重构、多端桌面（macOS/Win/Linux）|
| **Gemini CLI** | Agent 体系 + 安全闭环 | 对数据/路径安全敏感的企业 | Subagent 矩阵、Auto Memory 安全纵深、零依赖 OS 沙箱探索（#19873）|
| **GitHub Copilot CLI** | GitHub 生态原生 + 企业合规 | 已有 GitHub 订阅的团队 | 强 hook 审计体系、PR/CI 原生集成、与 VS Code agent 互通 |
| **OpenCode** | Provider 无关 + LLM 友好生态 | 极客 / 多模型用户 / Agent 工具作者 | 支持 20+ provider（GLM/Nemotron/Kimi/Copilot/Cloudflare）、llms.txt 文档化、BM25 记忆 |
| **Qwen Code** | 多端扩展 + 自动化 / 协作 | 钉钉/QQ 生态企业 / 团队 | Chrome 扩展复兴、`/loop` 任务持久化、qwen tag 多 Agent 群聊、tree-sitter AST shell 解析 |
| **Kimi Code CLI** | 长上下文 / 文档场景 | 中文长文档处理用户 | （24h 静默，定位暂难评估）|

**关键差异化判断**：
- **MCP 重度玩家**：Codex 与 Gemini 投入最多工程资源（OAuth 栈、schema 规范化、image MIME 嗅探）
- **安全纵深优先**：Gemini CLI 当日 5+ 安全 PR（SSRF/DNS rebinding/路径遍历/env 注入）
- **商业化探索**：OpenCode（crypto 支付 #23153）、Codex（`/usage` 邀请返佣 #30313）率先尝试多元化变现
- **生态外延最广**：Qwen Code 与 OpenCode 凭借钉钉/QQ/Chrome 扩展和多 provider 接入形成"工具之外"的渗透力

---

## 五、社区热度与成熟度

### 🔴 高活跃 + 高速迭代
- **OpenAI Codex**：3 个 alpha/日 + 5 层 PR 栈 + 186 评论热帖，节奏感最强
- **OpenCode**：100+ 条 issue/PR 日吞吐，社区贡献极其活跃
- **Qwen Code**：nightly 节奏稳定 + Chrome 扩展战略推进

### 🟠 高活跃 + 战略聚焦
- **Gemini CLI**：security 与 subagent 双主线，PR 质量高

### 🟡 中等活跃 + 质量阵痛
- **Claude Code**：PR 几乎停滞，issue 集中暴露 harness 与模型协同问题
- **Copilot CLI**：3 个 PR/日明显偏低，v1.0.65/66 质量信号动摇版本信心

### ⚪ 静默
- **Kimi Code CLI**：24h 无公开活动

### 成熟度信号
- **工程纪律**：Codex（拆 PR 栈 + 显式 supersede）> Gemini（每日安全 PR 矩阵）> Qwen（夜间构建稳定）
- **社区响应速度**：OpenCode（50 PR 吞吐 + 闭/开 cycle 流畅）> Qwen（nightly 节奏）
- **文档完整度**：OpenCode 呼声最高（#8816 长期 34 👍），提示该维度仍是行业普遍短板

---

## 六、值得关注的趋势信号

### 📈 趋势 1：MCP 从"协议层"走向"工程治理层"
- Codex 5 层 OAuth 重构、Gemini 多 PR 修复、Copilot 启动回归——**MCP 接入已成各工具必修课，但工程成熟度远未到位**
- **对开发者的启示**：选择 CLI 工具时，需重点评估其 MCP 进程管理、OAuth 状态机、stdio fd 回收的稳定性

### 📈 趋势 2：成本可观测性从"加分项"变为"刚需"
- Codex gpt-5.5 速率限制暴涨（334 👍）、Qwen 自动改写 setting.json（#5819）——**token 预算管理正在取代"功能多寡"成为新的竞争维度**
- **对开发者的启示**：关注工具是否提供 reset 时长、cache 命中率、后台任务用量等"透明面板"

### 📈 趋势 3：ARM64 / Windows 生态进入"补课期"
- Claude Code、OpenCode、Copilot CLI 同时爆发 ARM64 / WSL 集成问题
- Snapdragon X 与 Copilot+ PC 已成新硬件主力，**任何不支持 ARM64 Windows 的工具将快速边缘化**

### 📈 趋势 4：后台自动化（loop/cron/agent）需要"可观测契约"
- Qwen `/loop`、Claude Cowork、Gemini subagent 共同暴露：**长跑/后台任务必须有可检视的中间状态**
- **对开发者的启示**：构建 agent 应用时，状态可追溯、轨迹可分享、失败可解释应作为基础要求

### 📈 趋势 5：LLM 友好文档（llms.txt）成为生态外延新标准
- OpenCode #8816 长期高赞表明：**让 LLM 读懂工具自身文档** = 让 Agent 自我进化的能力
- 预计 2026 下半年将出现更多工具主动发布 `llms-full.txt`、`docs/*.md` 拆分版本

### 📈 趋势 6：安全模型从"功能补全"升级为"威胁面纵深防御"
- Gemini CLI 单日 5 类攻击面补丁（SSRF / 路径遍历 / DNS rebinding / env 注入 / bot patch 审批）
- 提示行业从"漏洞响应"转向"**威胁建模驱动**"的开发范式

---

## 七、给技术决策者的建议

| 场景 | 优先选择 | 理由 |
|------|----------|------|
| **Anthropic 模型原生体验 + IDE 集成** | Claude Code | thinking summaries 与 VS Code 深度集成是护城河 |
| **多端 Desktop + 快速 alpha 尝鲜** | OpenAI Codex | 迭代节奏最快、Desktop 全平台覆盖最完整 |
| **安全敏感 + Agent 编排** | Gemini CLI | 安全工程投入最系统、subagent 矩阵最完整 |
| **多模型/Provider 灵活接入** | OpenCode | 20+ provider 支持 + llms.txt 生态最开放 |
| **国内协同 / 钉钉 QQ 集成** | Qwen Code | 多 Agent 群聊 + 桌面语音 + Chrome 扩展 |
| **企业 GitHub 生态 + 合规审计** | Copilot CLI | hook 体系原生、PR/CI 集成最深 |
| **纯中文长文档处理** | 观望 Kimi Code CLI | 24h 静默，需观察后续动向 |

---

> 📊 **数据来源**：各工具 GitHub 仓库 2026-06-28 公开数据
> 📝 **报告说明**：本报告基于社区反馈而非官方路线图，仅供技术决策参考。最终选型应结合团队实际负载、合规要求与模型偏好综合评估。

---

## 各工具详细报告

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills 社区热点

> 数据来源: [anthropics/skills](https://github.com/anthropics/skills)

<think>The user wants me to analyze the Claude Code Skills community data from the anthropics/skills repository and generate a report. Let me carefully analyze the data provided.

Let me organize the information:

## Hot PRs (sorted by comment count, though all show "undefined" - I'll need to infer popularity from other factors like dates, updates, and content)

Looking at the PRs:
1. #1298 - fix(skill-creator): run_eval.py 0% recall bug (multiple reproductions)
2. #514 - Add document-typography skill
3. #538 - fix(pdf): case-sensitive file references
4. #486 - Add ODT skill (OpenDocument)
5. #210 - Improve frontend-design skill
6. #83 - Add skill-quality-analyzer and skill-security-analyzer
7. #541 - fix(docx): prevent tracked change w:id collision
8. #539 - fix(skill-creator): warn on unquoted YAML special characters
9. #181 - Add SAP-RPT-1-OSS predictor skill
10. #361 - Detect unquoted YAML special characters
11. #1099 - skill-creator Windows pipe bug
12. #95 - Add comprehensive system documentation
13. #509 - docs: add CONTRIBUTING.md
14. #1050 - skill-creator Windows subprocess bugs
15. #723 - feat: add testing-patterns skill
16. #362 - Fix skill-creator UTF-8 panic
17. #360 - Added AppDeploy skill
18. #147 - Add codebase-inventory-audit skill
19. #154 - Add shodh-memory skill
20. #1323 - fix(skill-creator): run_eval trigger detection

## Issues (sorted by comment count - these have actual numbers):
1. #492 (23 comments) - Security: Community skills under anthropic/ namespace - trust boundary abuse
2. #228 (14 comments) - Enable org-wide skill sharing in Claude.ai
3. #556 (12 comments) - run_eval.py 0% trigger rate
4. #62 (10 comments) - All skills disappeared
5. #202 (8 comments, CLOSED) - skill-creator should be best practice
6. #1329 (6 comments) - Proposing compact-memory skill
7. #412 (6 comments, CLOSED) - agent-governance skill proposal
8. #189 (6 comments) - duplicate skills in plugins
9. #1175 (4 comments, CLOSED) - SharePoint security concerns
10. #29 (4 comments) - Usage with bedrock
11. #16 (4 comments) - Expose Skills as MCPs
12. #1169 (3 comments) - skill-creator recall=0%
13. #1061 (3 comments) - Windows compatibility
14. #184 (3 comments, CLOSED) - agentskills.io redirects
15. #61 (3 comments) - "Not found" error loading Skills

Note: All PRs show "评论: undefined" but Issues have real numbers. The instruction says to analyze by comment count - so I should use issue comments as the primary metric. But for PRs, I can infer hotness from other factors.

Let me think about this more carefully. The data shows that all PR comments are "undefined" - this might be a data issue. Looking at the issues, those have real numbers. I should:
- For top PRs, use other signals (recent activity, multiple linked issues, etc.)
- For top issues, use the actual comment counts

Now let me categorize themes:

### Major Themes:

**1. skill-creator critical bugs (highest priority)**
- #1298, #1099, #1050, #539, #361, #362, #1323 (PRs all about skill-creator)
- #556 (12 comments), #1169 (3 comments), #1061 (3 comments) (Issues)
- The skill-creator's run_eval.py has 0% recall, breaking description optimization loop
- Windows compatibility is broken
- This is blocking many users from contributing quality skills

**2. Security concerns**
- #492 (23 comments) - top issue! Community skills impersonating official Anthropic skills
- #83 - skill-security-analyzer proposal
- This is the most discussed issue

**3. Organization/Sharing**
- #228 (14 comments) - org-wide skill sharing
- #16 - Expose Skills as MCPs

**4. Document/Output Quality Skills**
- #514 - document-typography skill
- #486 - ODT skill
- #538 - PDF fixes
- #541 - DOCX fixes
- Theme: making Claude better at generating/editing documents

**5. Memory/Persistence**
- #154 - shodh-memory skill
- #1329 - compact-memory skill proposal
- Theme: persistent context for agents

**6. Meta/Quality Skills**
- #83 - skill-quality-analyzer, skill-security-analyzer
- #147 - codebase-inventory-audit
- #723 - testing-patterns
- Theme: skills that build better software

**7. Frontend/Design**
- #210 - Improve frontend-design skill

**8. Enterprise Integration**
- #181 - SAP-RPT-1-OSS
- #29 - Bedrock integration
- #1175 - SharePoint integration

**9. Deployment**
- #360 - AppDeploy skill

**10. Contributing/Documentation**
- #509 - CONTRIBUTING.md
- #95 - System documentation

Let me now structure the report:

### Section 1: 热门 Skills 排行 (Top 5-8 by discussion)

Since PR comments are all undefined, I should rank by:
- Recent activity (updates)
- Issue linkages
- Cross-references
- Themes

Top candidates:
1. #1298 - Most critical skill-creator fix, references #556 (12 comments)
2. #514 - document-typography (relevant to many users)
3. #210 - frontend-design improvement
4. #83 - skill-quality/security analyzers
5. #486 - ODT skill (new format support)
6. #360 - AppDeploy
7. #723 - testing-patterns
8. #154 - shodh-memory

Or I could organize differently. Let me think...

Actually, I should present the most discussed/disputed PRs. The skill-creator fix PRs are extremely hot because they reference the high-comment issue #556. Let me focus on PRs that are most likely to land or most discussed:

1. **#1298 skill-creator run_eval fix** - references issue #556 (12 comments), most comprehensive fix
2. **#1099 Windows run_eval fix** - related skill-creator issues
3. **#1050 Windows compatibility** - related skill-creator issues
4. **#1323 skill-creator trigger detection** - related
5. **#362 UTF-8 panic fix** - related
6. **#539/#361 YAML special chars** - related

Plus the high-interest content skills:
- #514 document-typography
- #210 frontend-design
- #486 ODT
- #83 quality/security analyzers
- #723 testing-patterns
- #154 shodh-memory
- #360 AppDeploy

### Section 2: 社区需求趋势 (Community Demand Trends)

From the Issues:
1. **Security & Trust** (#492, 23 comments) - distinguishing official vs community skills
2. **Org-wide sharing** (#228, 14 comments) - team collaboration
3. **Better skill-creation tools** (#556, #202, #1169) - skill-creator quality
4. **MCP Integration** (#16) - skills as MCPs
5. **Agent governance** (#412) - safety patterns
6. **Memory/Persistence** (#1329 - compact-memory)
7. **Cross-platform support** (#1061, Windows compatibility)
8. **Enterprise integration** (#29 Bedrock, #1175 SharePoint)

### Section 3: 高潜力待合并 Skills (High-potential unmerged)

PRs that are OPEN but have high potential:
- #1298 - critical bug fix
- #514 - document-typography
- #486 - ODT skill
- #210 - frontend-design improvement
- #83 - quality/security analyzers
- #181 - SAP-RPT-1-OSS
- #723 - testing-patterns
- #360 - AppDeploy
- #147 - codebase-inventory-audit
- #154 - shodh-memory

### Section 4: Skills 生态洞察

The most concentrated demand is for:
- Robust skill-creation tooling (skill-creator is broken)
- Security/trust mechanisms for community skills
- Better document handling
- Memory/persistence for agents
- Cross-platform (Windows) support

Now let me write the report in Chinese (since the user wrote in Chinese), keeping it concise and professional.

Actually, let me re-read the user's request. They asked for Chinese analysis. Let me write it well-organized and detailed.

Let me also note: the user said 评论/关注度最高 - so for PRs I'll use other metrics since comments are undefined. I'll be transparent about this.

Let me draft the report:

---

# Claude Code Skills 社区热点报告
**数据截止：2026-06-28**

## 一、热门 Skills 排行（PR）

注：原数据 PR 评论数均为 undefined，以下按关联 Issue 热度、近期活跃度与社区讨论交叉度综合排序。

### 1. skill-creator 一系列修复 PR（核心痛点）
- **#1298** - 修复 run_eval.py 0% recall 问题，全链路优化
- **#1323** - 修复 run_eval 触发检测逻辑缺陷
- **#1099** / **#1050** - Windows 兼容性修复（subprocess、UTF-8、流读取）
- **#362** - 修复多字节字符 UTF-8 panic
- **#539** / **#361** - YAML 特殊字符检测

**热度依据**：关联 Issue #556（12 评论、7 👍）已确认有 10+ 独立复现，#1169（3 评论）、#1061（3 评论）同样聚焦此问题。

**状态**：全部 OPEN

### 2. document-typography - 文档排版质量控制
- PR #514：防止孤立词换行、寡妇段落、编号错位
- 影响：Claude 生成的所有文档
- 状态：OPEN（2026-03-04 创建）

### 3. frontend-design 改进
- PR #210：提升可执行性与内部一致性
- 状态：OPEN（2026-01-05 创建，2026-03-07 更新）

### 4. skill-quality-analyzer & skill-security-analyzer
- PR #83：meta-skills，对应社区最强诉求（trust boundary）
- 状态：OPEN（2025-11-06 创建）

### 5. ODT Skill
- PR #486：OpenDocument 格式创建/解析/模板填充
- 状态：OPEN

### 6. testing-patterns
- PR #723：覆盖测试金字塔、单元/组件/E2E
- 状态：OPEN

### 7. shodh-memory
- PR #154：跨会话持久记忆系统
- 状态：OPEN

### 8. AppDeploy
- PR #360：全栈 Web 应用部署
- 状态：OPEN

## 二、社区需求趋势

按 Issue 评论数排序：

### 1. 🛡️ 安全与信任（最热）
- **#492（23 评论、2 👍）**：Community skills 在 anthropic/ 命名空间下分发，构成 trust boundary 漏洞
- **#412（CLOSED, 6 评论）**：agent-governance 安全模式
- 关联 PR #83（skill-security-analyzer）

### 2. 🏢 组织级共享
- **#228（14 评论、7 👍）**：组织内 Skill 共享工作流

### 3. 🔧 skill-creator 质量
- **#556（12 评论、7 👍）**：run_eval 失效
- **#202（CLOSED, 8 评论）**：skill-creator 应遵循最佳实践
- 关联 PR #1298/#1323/#1099 等

### 4. 🧠 Agent 记忆与治理
- **#1329（6 评论）**：compact-memory（符号化压缩 Agent 状态）
- **#412（CLOSED, 6 评论）**：agent-governance

### 5. 🔌 协议与互操作
- **#16（4 评论）**：Skills 暴露为 MCP
- **#29（4 评论）**：与 AWS Bedrock 集成
- **#1175（CLOSED, 4 评论）**：SharePoint 安全

### 6. 🪟 跨平台
- **#1061（3 评论）**：Windows 兼容性问题

## 三、高潜力待合并 Skills

按综合热度与落地可能性：

| PR | Skill | 关键价值 | 状态 |
|---|---|---|---|
| #1298 | skill-creator 全套修复 | 修复核心工具链 | OPEN |
| #514 | document-typography | 通用文档质量提升 | OPEN |
| #83 | quality/security analyzer | 直接回应 #492 信任诉求 | OPEN |
| #486 | ODT skill | ISO 开放格式支持 | OPEN |
| #210 | frontend-design 改进 | 现有 skill 优化 | OPEN |
| #723 | testing-patterns | 测试方法论系统化 | OPEN |
| #154 | shodh-memory | 长期 Agent 记忆 | OPEN |
| #181 | SAP-RPT-1-OSS | 企业 SAP 预测分析 | OPEN |
| #147 | codebase-inventory-audit | 代码库清理审计 | OPEN |
| #360 | AppDeploy | 一键 Web 部署 | OPEN |

## 四、Skills 生态洞察

**一句话总结**：社区当前最集中的诉求是「Skill 元工具的可信度」——既要 skill-creator 不再因 0% recall bug 让贡献者优化 against noise，又要在 anthropic/ 命名空间下建立清晰的官方/社区 Skill 信任边界。

---

Let me refine this a bit. I want to make it really professional and insightful. Let me also consider:
- The "#189 duplicate skills in plugins" issue (6 comments, 9 👍) - high upvotes suggests strong agreement
- The security issue #492 is clearly the #1 concern
- skill-creator bugs are the #1 operational blocker

Let me also add more value in the analysis. I should be a real "技术分析师" providing insight, not just listing.

Let me also think about which PRs to highlight as "hot PRs" vs which to mention in passing. The most "hot" PRs by association with issues are:

For PRs that are highly discussed:
- The skill-creator fix PRs (referenced by multiple high-comment issues)
- #83 (directly addresses #492)
- #514 (highly relevant to most users)

Let me write a cleaner, more insightful report. I'll structure it like a real analyst report.

Actually, I realize I should present this more carefully. The PR comments being "undefined" is unusual - this is likely a data extraction issue. But the data we have for Issues is solid.

Let me also note that the report should be data-driven, so let me explicitly cite numbers.

Final structure:
1. 热门 Skills 排行 - 8 skills with clear analysis
2. 社区需求趋势 - 6 themes with issue references
3. 高潜力待合并 Skills - table format
4. 生态洞察 - one sentence but with sub-themes

Let me write this now in a polished, professional Chinese style.</think>

# Claude Code Skills 社区热点报告
**数据截止：2026-06-28 | 数据源：github.com/anthropics/skills**

> **数据说明**：原数据集中所有 PR 的 `评论数` 字段均为 `undefined`，故本报告对 PR 的热度排序综合参考 **关联 Issue 评论数、近期更新活跃度、问题严重程度（复现数）**；Issue 排序则直接依据实际评论数。

---

## 一、热门 Skills 排行（Top 8 PR）

### 🥇 #1298 — skill-creator 全套修复（修复描述优化闭环）
- **链接**：https://github.com/anthropics/skills/pull/1298
- **核心问题**：`run_eval.py` 对所有 Skill 描述一律报告 `recall=0%`，导致 `run_loop.py` / `improve_description.py` 在「噪声」上优化，描述优化功能彻底失效
- **热度来源**：关联 Issue **#556（12 评论、7 👍）** 已确认 10+ 独立复现；#1169、#1061 均指向同类根因
- **状态**：OPEN（2026-06-10 创建，2026-06-23 最新更新）
- **讨论焦点**：是否要重写 trigger detection 逻辑、Windows 流读取兼容、eval artifact 安装路径

### 🥈 #514 — document-typography（文档排版质量控制）
- **链接**：https://github.com/anthropics/skills/pull/514
- **功能**：防止 AI 生成文档中的孤儿词换行、寡妇段落、编号错位等常见排版缺陷
- **讨论焦点**：影响所有文档生成场景，参数化阈值 vs 全自动修复的取舍
- **状态**：OPEN（2026-03-04）

### 🥉 #210 — Improve frontend-design skill
- **链接**：https://github.com/anthropics/skills/pull/210
- **功能**：改写 frontend-design 指令，使其在单次对话内可执行、行为可预期
- **讨论焦点**：从「概念性教学」转向「操作性指令」的 Skill 设计哲学
- **状态**：OPEN（2026-01-05，2026-03-07 最新更新）

### 4️⃣ #83 — skill-quality-analyzer & skill-security-analyzer
- **链接**：https://github.com/anthropics/skills/pull/83
- **功能**：对 Skill 做 5 维度质量评估 + 安全分析，直接回应最热门 Issue **#492（23 评论）**
- **讨论焦点**：能否真正解决社区 Skill 在 `anthropic/` 命名空间下的信任滥用问题
- **状态**：OPEN（2025-11-06 提出至今未合并，是最久的「高潜力」PR 之一）

### 5️⃣ #486 — ODT Skill（OpenDocument 支持）
- **链接**：https://github.com/anthropics/skills/pull/486
- **功能**：.odt/.ods 创建、解析、HTML 转换、模板填充
- **讨论焦点**：LibreOffice 生态、ISO 开放格式、与现有 docx/pdf skill 的边界
- **状态**：OPEN

### 6️⃣ #723 — testing-patterns（测试方法论体系化）
- **链接**：https://github.com/anthropics/skills/pull/723
- **功能**：覆盖测试金字塔、AAA 模式、React 组件测试、契约测试、覆盖率基线
- **讨论焦点**：方法论型 Skill 是否过度泛化、与具体语言/框架的耦合度
- **状态**：OPEN

### 7️⃣ #154 — shodh-memory（跨

---

<think>Let me analyze the GitHub data for the Claude Code community daily report for 2026-06-28.

Key observations from the data:

1. **No releases in the past 24 hours** - so the Releases section should be omitted or noted as none.

2. **Most active Issues theme**: There are multiple issues around "Opus 4.7 thinking summaries not rendered" - this seems to be a major theme today. Issues #49322, #49268, #49902, #59844 all relate to this same problem.

3. **Cowork on ARM64/Snapdragon X issues** - #39636, #50674 - this is another cluster.

4. **VS Code extension notification requests** - #57230, #65241, #67220 - feature requests for notification systems.

5. **TUI rendering issues** - #71949, #62623 - related to terminal UI rendering.

6. **Mobile/cross-platform features** - #62458 (mobile push for permission prompts).

7. **Bug clusters**:
   - Thinking summaries on Opus 4.7 (multiple issues)
   - Cowork VM on ARM64/Snapdragon X
   - Clickable Yes/No prompts in terminal (#70622)
   - MCP server instructions truncation (#43474)
   - Language bug - responding in Japanese to Chinese (#64261)
   - Auto-update revoking FDA on macOS (#71942)

8. **PRs**: Only 2 PRs in the past 24 hours, one was a "." commit (likely a test or accidental), and the other (#68787) is a small script fix for edit-issue-labels.sh.

Let me structure the report:

**今日速览**: 
- Opus 4.7 thinking summaries rendering bug is the hottest issue today (multiple related issues with high comment counts)
- Cowork on ARM64/Snapdragon X remains a major pain point
- No new releases today

**版本发布**: None to report

**社区热点 Issues** (top 10):
1. #49322 - Opus 4.7 thinking summaries in VS Code (47 comments, 41 thumbs up)
2. #49268 - Thinking summaries missing on Opus 4.7 - harness issue (46 comments, 75 thumbs up - very high engagement)
3. #39636 - Cowork VM fails on Snapdragon X Plus ARM64 (32 comments, 9 thumbs up)
4. #50674 - Cowork fails on ARM64 despite readiness check (31 comments)
5. #12294 - No way to delete Claude Code environments (18 comments, 22 thumbs up)
6. #49902 - Opus 4.7 thinking summaries VSCode 2.1.112 (14 comments)
7. #59844 - showThinkingSummaries silently no-ops on Opus 4.7 (10 comments)
8. #70622 - Disable clickable Yes/No prompts (8 comments, 24 thumbs up - high engagement)
9. #23808 - MCP server instructions not passed to model (closed, 9 comments)
10. #41250 - VSCode extension loading issue on Firefox (closed, 6 comments)

**重要 PR 进展**: Only 2 PRs, neither is significant. I should note this is a quiet day for PRs.

**功能需求趋势**:
- IDE/VS Code extension improvements (notifications, thinking summaries)
- Cross-platform support (Windows ARM64, native Windows notifications)
- Mobile integration (push notifications for permissions)
- User control over UI behaviors (configurable prompts)
- Cowork mode enhancements (manual compaction)

**开发者关注点**:
- Opus 4.7 thinking summaries not working across surfaces
- ARM64/Snapdragon X compatibility issues
- TUI rendering bugs
- MCP server instructions handling
- Language detection issues
- Auto-update affecting running sessions

Let me write the report now in Chinese, following the requested structure.</think>

# Claude Code 社区动态日报
**日期：2026-06-28**

---

## 📌 今日速览

今日社区最显著的话题是 **Opus 4.7 "thinking summaries"（思维摘要）在 VS Code 扩展等多端环境中无法正常渲染** —— 至少有 4 个相关 Issue 同时高活跃度讨论，跨平台影响明显。另一大热点是 **Cowork 在 Snapdragon X / ARM64 平台上的可用性问题**，与 Windows on ARM 的兼容性仍待解决。**今日无新版本发布**，PR 提交量极低（仅 2 条且无实质功能变更）。

---

## 🚀 版本发布

**无新版本发布。**

---

## 🔥 社区热点 Issues（精选 10 条）

### 1. [#49322 — Opus 4.7 thinking summaries 未在 VS Code 扩展中渲染](https://github.com/anthropics/claude-code/issues/49322)
- 💬 47 评论 ｜ 👍 41 ｜ 标签：`bug`, `platform:macos`, `platform:vscode`
- **为何重要**：这是 Opus 4.7 thinking summaries 系列 bug 中评论数最高的一条，反映了大量用户在 VS Code 扩展升级后无法查看思维摘要。

### 2. [#49268 — Harness 未设置 `display: "summarized"`，Opus 4.7 思维摘要丢失](https://github.com/anthropics/claude-code/issues/49268)
- 💬 46 评论 ｜ 👍 75 ｜ 标签：`bug`, `area:core`
- **为何重要**：👍 高达 75，是今日所有 issue 中点赞最高的，定位到根因 —— 4.7 模型升级后 API 默认行为变更，但 harness 端未跟上。

### 3. [#39636 — Cowork VM guest kernel 在 Snapdragon X Plus (ARM64) 上无法启动](https://github.com/anthropics/claude-code/issues/39636)
- 💬 32 评论 ｜ 👍 9 ｜ 标签：`bug`, `platform:windows`, `area:cowork`
- **为何重要**：每尝试都连接超时，是 ARM64 Windows 设备用户使用 Cowork 的核心阻塞问题。

### 4. [#50674 — Cowork 在 ARM64 (Snapdragon X) 上即便通过 readiness check 也失败](https://github.com/anthropics/claude-code/issues/50674)
- 💬 31 评论 ｜ 标签：`bug`, `duplicate`
- **为何重要**：与 #39636 同源问题，但指出 readiness 检查存在 false positive，揭示校验机制有缺陷。

### 5. [#12294 — Claude Desktop 中无法删除 Claude Code 环境](https://github.com/anthropics/claude-code/issues/12294)
- 💬 18 评论 ｜ 👍 22 ｜ 标签：`bug`
- **为何重要**：自 2025-11-24 创建以来长期未解决，积压近 7 个月，是典型的"孤儿"功能缺口 issue。

### 6. [#49902 — VSCode 扩展 2.1.112 不渲染 Opus 4.7 思维摘要（WSL）](https://github.com/anthropics/claude-code/issues/49902)
- 💬 14 评论 ｜ 👍 41 ｜ 标签：`duplicate`, `platform:vscode`, `platform:wsl`
- **为何重要**：确认该 bug 在 Linux (WSL2) 用户中也复现，扩展了影响范围。

### 7. [#59844 — `showThinkingSummaries: true` 在 Opus 4.7 非交互界面静默失效](https://github.com/anthropics/claude-code/issues/59844)
- 💬 10 评论 ｜ 👍 6 ｜ 标签：`bug`, `area:core`, `area:ide`
- **为何重要**：明确指出 SDK 与 `--print` 模式同样受影响，并建议仅需"一行修复"，可作为 Anthropic 工程的参考方案。

### 8. [#70622 — 终端中可点击的 Yes/No 提示需要可关闭](https://github.com/anthropics/claude-code/issues/70622)
- 💬 8 评论 ｜ 👍 24 ｜ 标签：`enhancement`, `area:tui`, `area:permissions`
- **为何重要**：👍 24 远超评论数，反应热烈 —— 大量用户因误点而意外取消甚至误批准操作，存在安全隐患。

### 9. [#23808 — MCP server initialize 返回的 instructions 未传递给模型（已关闭）](https://github.com/anthropics/claude-code/issues/23808)
- 💬 9 评论 ｜ 👍 2 ｜ 标签：`CLOSED`, `area:mcp`
- **为何重要**：虽已关闭，但反映 MCP 配置一致性是开发者关注点；与 #43474（多 MCP 截断）形成对照。

### 10. [#39636 系列 / #71942 — macOS 自动更新删除运行中的 app bundle，撤销 Full Disk Access](https://github.com/anthropics/claude-code/issues/71942)
- 💬 1 评论（新发） ｜ 标签：`bug`, `area:packaging`
- **为何重要**：今日新发但揭示了 macOS 自动更新流程中的安全/权限隐患，影响所有 macOS 用户的会话连续性。

---

## 🔧 重要 PR 进展

> ⚠️ **今日 PR 极少**，仅 2 条且均非核心功能/修复性变更，社区贡献近乎停滞。

| PR | 状态 | 说明 |
|---|---|---|
| [#71798](https://github.com/anthropics/claude-code/pull/71798) | CLOSED | 仅提交了一个 "."，疑似误提交 |
| [#68787](https://github.com/anthropics/claude-code/pull/68787) | OPEN | 小幅脚本修复 —— `edit-issue-labels.sh` 在无 label 参数时输出错误信息，便于 CI 调试 |

---

## 📈 功能需求趋势

从今日活跃 issue 中可提炼出社区最关注的五大方向：

1. **🧠 模型行为可观测性 / Thinking Summaries**
   - 4+ 条 issue 集中讨论 Opus 4.7 思维摘要丢失。开发者对"能看到模型推理过程"高度依赖，这关系到调试和信任度。

2. **💻 跨平台 & ARM64 支持**
   - Snapdragon X / Windows ARM 上的 Cowork 不可用、macOS 自动更新副作用。生态外溢明显，ARM Mac / Copilot+ PC 用户群无法使用核心功能。

3. **🔔 通知体系完善**
   - 多条 enhancement 集中请求：VS Code 通知 (#57230, #65241)、Windows Toast (#67220)、移动端推送审批 (#62458)、多 Agent 审批中心 (#70591)。

4. **🖱️ TUI/终端交互体验**
   - 可点击 Yes/No 误操作 (#70622)、TUI 消息顺序错乱 (#71949)、slash command 与自定义按键冲突 (#62623)。

5. **🤖 Cowork 模式功能增强**
   - 用户手动触发 `/compact` (#65114)、dispatch 配对重置 (#67303) 等。反映 Cowork 作为新模式正在快速迭代。

---

## 🛠️ 开发者关注点（痛点 & 高频需求）

- **🔴 静默行为降级**：多个 issue 指出设置项/功能"静默失效"（如 #59844 `showThinkingSummaries` no-op），而不是抛错或警告 —— 排查成本高，是开发者最反感的体验。
- **🔴 模型升级带来的兼容性回归**：Opus 4.7 上线后引发多条"原本可用，现已失效"的报告 (#49268, #49322, #49902, #59844)，社区要求 Anthropic 在模型 GA 前对 harness 端做完整回归测试。
- **🔴 ARM64/Windows 生态缺位**：Snapdragon X 系列 PC 已是大量新硬件，但 Cowork 与 ARM64 兼容性问题高居评论榜前 4 (#39636, #50674)。
- **🟡 MCP 指令传递的一致性**：当配置多个 MCP server 时，instructions 被静默截断 (#43474)，影响 Agent 行为可预期性。
- **🟡 自动更新副作用**：macOS 自动更新可能撤销 FDA 权限 (#71942)、中断运行中会话 —— 开发者偏好更可控的更新机制（如 VS Code 式的"稍后更新"）。
- **🟡 语言/本地化**：#64261 报告中文输入触发日文回复，疑似 prompt 路由/语言检测 bug，影响非英文用户体验。
- **🟢 记忆与行为一致性**：#71935 / #71938 指出 Claude 写入 memory 的规则在下一轮就被违反 —— 反映出 memory 系统的"写入易、执行难"现状。

---

*报告基于 github.com/anthropics/claude-code 截至 2026-06-28 的公开数据生成。*

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

<think>The user wants me to generate a daily report for the OpenAI Codex community based on GitHub data. Let me analyze the data carefully and produce a structured Chinese report.

Let me organize the information:

**Releases (past 24 hours):**
- rust-v0.143.0-alpha.29
- rust-v0.143.0-alpha.28
- rust-v0.143.0-alpha.27

Three alpha releases for the rust version, rapid iteration.

**Top Issues by comment count:**
1. #28879 (186 comments, 334 👍) - Rate-limit cost per token jumped 10-20x on gpt-5.5 since June 16
2. #28224 (93 comments, 400 👍) - SQLite feedback logs writing ~640 TB/year, partially fixed
3. #30224 (52 comments, 18 👍) - X-OpenAI-Internal-Codex-Responses-Lite doesn't support some models
4. #9203 (51 comments, 302 👍) - Please make /undo command back (very old issue, January)
5. #29532 (22 comments, 7 👍) - macOS SQLite TRACE log churn after rust-v0.142.0
6. #21863 (14 comments, 1 👍) - VS Code Windows blank editor panel bug
7. #25744 (8 comments, 3 👍) - macOS resource leak from Computer Use/MCP helpers
8. #21653 (7 comments, 29 👍) - Multi-line status line support
9. #26984 (7 comments, 1 👍) - MCP stdio servers leak pipe fds
10. #20570 (7 comments, 7 👍) - Windows sandbox error 1920

**Important PRs:**
1. #30369 - Durable external thread goals
2. #30313 - Referral invites to /usage
3. #30395 - Show usage-limit reset expiry details
4. #30334 - Telemetry: log structured tool and inference timing events
5. #30269 - Disable Nagle on Rendezvous WebSockets
6. #30294 - Route MCP OAuth recovery through Codex (part of stack)
7. #30295 - Serialize MCP OAuth login and logout
8. #30296 - Report MCP OAuth Auto store drift
9. #30293 - Serialize MCP OAuth refresh transactions
10. #30292 - Serialize shared MCP OAuth credential stores (the base of the stack)

**Trends/Themes from issues:**
- gpt-5.5 model issues (rate limits, model support)
- MCP (Model Context Protocol) problems - OAuth, fd leaks, process leaks
- Performance/resource issues - SQLite logs, file descriptors, zombie processes
- Windows-specific bugs (multiple)
- Desktop app stability
- TUI features (multi-line status, /undo)
- Rate limit transparency

**Developer pain points:**
- Resource leaks (MCP processes, file descriptors)
- Windows compatibility
- Rate limit transparency and unpredictability
- Auth/OAuth issues with MCP servers
- Desktop app stability crashes
- Excessive logging/SQLite churn

Now let me write this in Chinese, professional and concise.</think>

# OpenAI Codex 社区动态日报
**日期：2026-06-28**

---

## 📌 今日速览

Codex 今日发布 3 个 rust alpha 版本（v0.143.0-alpha.27/28/29），高频迭代仍在进行。社区关注度最高的议题集中在 **gpt-5.5 速率限制异常**（Issue #28879，186 条评论）与 **SQLite 日志写入风暴**（#28224），同时 Desktop 应用在 Windows/macOS 平台持续暴露 MCP 进程泄漏、OAuth 鉴权失败等稳定性问题。MCP OAuth 重构栈（PR #30292 等 5 个连续 PR）成为本周代码评审焦点。

---

## 🚀 版本发布

今日连续发布 3 个 Rust 核心 alpha 版本：

| 版本 | 链接 |
|------|------|
| rust-v0.143.0-alpha.29 | [Release](https://github.com/openai/codex/releases/tag/rust-v0.143.0-alpha.29) |
| rust-v0.143.0-alpha.28 | [Release](https://github.com/openai/codex/releases/tag/rust-v0.143.0-alpha.28) |
| rust-v0.143.0-alpha.27 | [Release](https://github.com/openai/codex/releases/tag/rust-v0.143.0-alpha.27) |

> 三个 alpha 在 24 小时内接连发布，反映团队正密集迭代核心 Rust 运行时。建议生产用户继续观望 stable 通道。

---

## 🔥 社区热点 Issues

### 1. [#28879](https://github.com/openai/codex/issues/28879) ⭐ 334 · 💬 186
**gpt-5.5 速率限制成本暴增 10-20 倍**
Plus 用户自 6 月 16 日起发现 5 小时预算在 2-3 次 prompt 内耗尽，token 级消耗显著上升。社区强烈要求 OpenAI 公开速率限制计算口径，是本周讨论度最高、点赞数最多的议题。

### 2. [#28224](https://github.com/openai/codex/issues/28224) ⭐ 400 · 💬 93
**SQLite 反馈日志年写入量高达 640 TB**
已通过 PR #29432、#29457（随 v0.142.0 发布）修复约 85% 的写入量，但剩余痕迹日志仍需进一步清理。👍 400 票为本次榜单最高，反映社区对 SSD 寿命问题高度关注。

### 3. [#30224](https://github.com/openai/codex/issues/30224) ⭐ 18 · 💬 52
**X-OpenAI-Internal-Codex-Responses-Lite 不支持当前模型**
Plus 用户在 Windows Desktop 26.623.31921 调用 gpt-5.5 时遭遇 `This model is not supported`。结合 #30406 显示该问题同时影响 macOS。

### 4. [#9203](https://github.com/openai/codex/issues/9203) ⭐ 302 · 💬 51
**请恢复 /undo 命令**
持续 5 个月的长尾 enhancement 请求，302 票支持。用户在 Codex 误删未跟踪文件或破坏未提交修改时极其依赖此功能。

### 5. [#29532](https://github.com/openai/codex/issues/29532) ⭐ 7 · 💬 22
**rust-v0.142.0 之后 macOS 仍存在 SQLite TRACE 日志抖动**
显示 #29432 部分生效但 #29457 在 macOS 路径未彻底修复。

### 6. [#25744](https://github.com/openai/codex/issues/25744) ⭐ 3 · 💬 8
**macOS Computer Use / MCP 子进程泄漏导致 HID 延迟**
长会话累积僵尸进程，引发 WindowServer 与 TCC 卡顿。

### 7. [#26984](https://github.com/openai/codex/issues/26984) ⭐ 1 · 💬 7
**MCP stdio 服务端管道 fd 泄漏，触发 EMFILE**
长时间运行的 CLI 会耗尽文件描述符（errno 24）。与 #30408 MCP 进程泄漏问题同源。

### 8. [#21653](https://github.com/openai/codex/issues/21653) ⭐ 29 · 💬 7
**多行 statusline 支持**
配置项较多时当前 TUI 状态行会被截断。

### 9. [#30408](https://github.com/openai/codex/issues/30408) ⭐ 0 · 💬 1
**MCP 服务端进程永不回收，RSS 累积达 9 GB**
Desktop 0.142.3 每个新 thread 启动全局 MCP，关闭后不释放，与 #26984、#25744 共同构成 MCP 资源管理三大问题。

### 10. [#30390](https://github.com/openai/codex/issues/30390) ⭐ 0 · 💬 3
**Windows Desktop ambient_suggestions 后台耗用 70k tokens**
与 #28879 共同指向 Desktop 后台智能体用量不可见的问题。

---

## 🛠️ 重要 PR 进展

### 1. [#30369](https://github.com/openai/codex/pull/30369) — 支持持久化外部 thread goals
引入 goal store 边界，保留 goal 用量/状态在 restore 时的一致性，为嵌入器提供 rollout 之外的目标管理能力。叠加于 #28462。

### 2. [#30313](https://github.com/openai/codex/pull/30313) — `/usage` 新增邀请返佣
复用现有 ChatGPT referral HTTP 端点，避免新增 app-server RPC，体现"客户端自有流程"的设计原则。

### 3. [#30395](https://github.com/openai/codex/pull/30395) — 暴露速率限制 reset 过期时间
配套 Issue #29618，让客户端在不再访问私有后端的前提下展示 reset 信用到期日。

### 4. [#30334](https://github.com/openai/codex/pull/30334) — 结构化工具与推理时延遥测
区分 dispatch/queue 与 handler 时长，便于运维定位瓶颈。

### 5. [#30292](https://github.com/openai/codex/pull/30292) — MCP OAuth 凭据存储序列化（栈底）
替代被 supersede 的 #30091/#30090/#29020，是 MCP OAuth 重构 5 层 PR 栈的基础。

### 6. [#30293](https://github.com/openai/codex/pull/30293) — MCP OAuth refresh 事务序列化
解决并发刷新导致的凭据丢失。

### 7. [#30294](https://github.com/openai/codex/pull/30294) — 将 MCP OAuth 恢复路径统一路由至 Codex
统一恢复入口，避免分支散落在各 rmcp 客户端实现。

### 8. [#30295](https://github.com/openai/codex/pull/30295) — MCP OAuth 登录登出序列化
防止重复并发触发刷新流程。

### 9. [#30296](https://github.com/openai/codex/pull/30296) — 报告 MCP OAuth Auto 存储漂移
主动上报本地存储与远端实际状态的偏差。

### 10. [#30269](https://github.com/openai/codex/pull/30269) — 禁用 Rendezvous WebSocket 上的 Nagle
减少 executor 与 harness 连接的小包延迟，不引入功能开关或路径变体。

---

## 📈 功能需求趋势

| 方向 | 代表 Issue |
|------|------------|
| **速率限制透明化** | #28879、#29618、#30390 |
| **MCP 稳定性** | #26984、#30408、#25744、#27165 |
| **TUI/CLI 体验** | #9203（/undo）、#21653（多行状态）、#27052（hook 错误诊断） |
| **Windows 兼容性** | #20570、#21863、#26478、#29408 |
| **Desktop 会话管理** | #20732（归档会话可见）、#30233（thread 管理工具）、#30385（侧边栏会话缺失） |
| **上下文与忽略机制** | #24993（.codexignore） |
| **gpt-5.5 模型兼容性** | #30224、#30406 |
| **异步与多机编排** | #30399 |

---

## 👨‍💻 开发者关注点

1. **资源泄漏是头号痛点** — MCP 子进程、文件描述符、SQLite 日志三线并发，反映长会话场景下的内存/SSD/FD 管理尚未成熟。
2. **速率限制黑盒** — gpt-5.5 计费"暴涨"暴露计费引擎透明度不足，开发者无法基于本地日志预测 budget 消耗。
3. **Windows 平台欠债** — 沙箱、子进程轮询、URI 路由、拼写检查等多个 issue 集中在 Windows，生态完整性仍是短板。
4. **OAuth 状态机复杂** — MCP 接入 OAuth 后带来的并发恢复、过期刷新、存储漂移问题需要端到端重构（#30292 栈是直接回应）。
5. **Desktop 后台行为可见性** — `ambient_suggestions`、Computer Use、子 agent 等后台任务缺乏用量与状态披露，开发者需要可观测性 hooks（呼应 #30334 遥测 PR）。
6. **高频 alpha 节奏** — 24 小时内 3 个 alpha 暗示团队正集中修复核心稳定性问题，stable 用户建议等待 v0.143.0 正式版。

---

*日报基于 GitHub openai/codex 仓库公开数据整理。观点仅代表社区反馈，不构成 OpenAI 官方立场。*

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

<think>
The user wants me to generate a daily community report for the Gemini CLI project based on GitHub data. Let me analyze the data carefully and produce a well-structured Chinese report.

Let me identify the key information:

1. **Releases**: One nightly release v0.51.0-nightly.20260628.gae0a3aa7b with a security fix for case-insensitive sensitive path blocklist and vscode hitl.

2. **Top Issues (sorted by comments)**:
   - #22323 - Subagent recovery after MAX_TURNS (8 comments, 2 likes) - P1 bug
   - #19873 - Zero-Dependency OS Sandboxing & Post-Execution Intent Routing (8 comments, 1 like) - P2 enhancement
   - #24353 - Robust component level evaluations (7 comments) - P1
   - #22745 - AST-aware file reads, search, and mapping (7 comments, 1 like) - P2 feature
   - #21409 - Generalist agent hangs (7 comments, 8 likes) - P1 bug, very popular
   - #21968 - Gemini doesn't use skills and sub-agents enough (6 comments) - P2 bug
   - #26525 - Deterministic redaction and reduce Auto Memory logging (5 comments) - P2 security
   - #26522 - Stop Auto Memory from retrying low-signal sessions (5 comments) - P2 bug
   - #25166 - Shell command execution gets stuck (4 comments, 3 likes) - P1 core bug
   - #21983 - browser subagent fails in wayland (4 comments, 1 like) - P1 bug
   - #21000 - Native file tools for task tracker (4 comments) - P3
   - #20079 - symlink in agents folder not recognized (4 comments) - P2 bug
   - #26523 - Surface invalid Auto Memory patches (3 comments) - P2
   - #24246 - 400 error with > 128 tools (3 comments) - P2 bug
   - #23571 - Model creates tmp scripts randomly (3 comments) - P2 bug
   - #22672 - Agent should stop destructive behavior (3 comments, 1 like) - P2
   - #22267 - Browser Agent ignores settings.json (3 comments) - P2 bug
   - #22232 - Browser agent resilience: session takeover (3 comments) - P3 feature
   - #22186 - get-shit-done output hook causes crash (3 comments) - P1 bug
   - #20195 - Local Subagent Sprint 1 (3 comments) - P3 enhancement

3. **PRs**:
   - #28167 - feat(caretaker): egress cloud run service - XL
   - #28181 - fix(security): prevent DNS rebinding bypass of SSRF protection
   - #28182 - chore/release: bump version to 0.51.0-nightly
   - #27878 - fix(core): sniff MCP image MIME types (CLOSED)
   - #27889 - fix(core): refresh MCP OAuth with stored client ID (CLOSED)
   - #27887 - fix(cli): honor custom theme border.default (CLOSED)
   - #27885 - fix(vscode-ide-companion): register all activate() disposables (CLOSED)
   - #27888 - fix(core): normalize MCP tool schemas to root type object (CLOSED)
   - #27886 - fix(core): respect .gitignore and .geminiignore (CLOSED)
   - #28059 - fix(cli): don't let unreadable .env break extension loading
   - #28065 - feat(core): Bump node google-auth-library version
   - #28064 - docs(hooks): document ask decision for BeforeTool
   - #28179 - fix(security): remove ISSUE_BODY and ISSUE_TITLE from ALWAYS_ALLOWED
   - #28180 - fix(security): restore defensive path resolution
   - #28178 - fix(security): require approved bot patch artifacts
   - #28169 - feat(evals): add eval coverage report command
   - #28175 - fix(policy): require confirmation for shell parameter expansion
   - #28172 - fix(agent): prevent silent scope expansion on task failure
   - #28171 - fix(agent): prevent silent scope expansion when initial approach fails

Let me categorize the key themes:

**Security/Privacy Focus**: Multiple security PRs around path traversal, SSRF/DNS rebinding, env var sanitization, MCP OAuth - clearly a major push
**Auto Memory System**: Multiple issues (#26525, #26522, #26523, #26516) around auto memory
**Subagents/Agents**: Many issues about subagent behavior, hangs, scope expansion, browser subagent
**MCP**: Multiple MCP-related issues and PRs
**AST-aware tools**: Two issues exploring AST-aware file reading

Now let me write the report in Chinese. The user wants:
1. 今日速览
2. 版本发布
3. 社区热点 Issues (10 items)
4. 重要 PR 进展 (10 items)
5. 功能需求趋势
6. 开发者关注点

Let me start writing. I should be professional, concise, and technical. Let me also ensure I use the thinking block as required.
</think>
# Gemini CLI 社区动态日报
**日期：2026-06-28**

---

## 1. 今日速览

今日 Gemini CLI 仓库的核心动态高度集中在**安全加固**与**Subagent 行为稳定性**两条主线：nightly 版本带来敏感路径黑名单的大小写不敏感修复与 VSCode HITL 强制执行，PR 侧则集中提交了针对 SSRF/DNS rebinding、路径遍历、环境变量泄露等多类安全补丁。社区高优先级讨论中，P1 级别的 subagent 状态报告失真、`generalist` agent 长时间挂死等稳定性问题持续发酵，凸显了 agent 系统的鲁棒性仍是当前最大痛点。

---

## 2. 版本发布

**v0.51.0-nightly.20260628.gae0a3aa7b**（夜间构建版）

本版本唯一变更：

- **fix(security)**：强制敏感路径黑名单执行时**大小写不敏感**，并对 VSCode HITL 流程进行加固。([#27966](https://github.com/google-gemini/gemini-cli/pull/27966))

> 完整变更：[Compare v0.51.0-nightly.20260626 → v0.51.0-nightly.20260628](https://github.com/google-gemini/gemini-cli/compare/v0.51.0-nightly.20260626.gb14416447...v0.51.0-nightly.20260628)

---

## 3. 社区热点 Issues

按评论数与社区影响挑选的 10 个高优先级问题：

| # | Issue | 标签 | 核心内容 | 链接 |
|---|---|---|---|---|
| 1 | **#22323** [P1] | bug, agent | Subagent 在命中 `MAX_TURNS` 后仍以 `status: "success"` 和 `GOAL` 终止原因上报，**遮蔽了真正的中断信号**，影响对子代理行为的可信评估。评论 8 | [#22323](https://github.com/google-gemini/gemini-cli/issues/22323) |
| 2 | **#19873** [P2] | enhancement, agent | 建议通过**零依赖 OS 沙箱 + 执行后意图路由**释放 Gemini 3 模型对 POSIX 工具链的天然亲和力。评论 8 | [#19873](https://github.com/google-gemini/gemini-cli/issues/19873) |
| 3 | **#21409** [P1] | bug, agent | `generalist` subagent 频繁**永久挂起**，连"创建文件夹"等简单操作都无法完成，需等待 1 小时以上才能取消。👍 8，是今日**点赞数最高**的 issue。 | [#21409](https://github.com/google-gemini/gemini-cli/issues/21409) |
| 4 | **#24353** [P1] | customer-issue, agent | 推动"组件级评估"基线建设，目前已有 76 个行为评估测试覆盖 6 个模型，是评估基础设施的核心 EPIC。评论 7 | [#24353](https://github.com/google-gemini/gemini-cli/issues/24353) |
| 5 | **#22745** [P2] | feature, agent | 评估 **AST 感知的文件读取/搜索/映射**价值：精确读取方法边界、降低对齐错位的 read 次数、减少 token 噪声。评论 7 | [#22745](https://github.com/google-gemini/gemini-cli/issues/22745) |
| 6 | **#21968** [P2] | bug, agent | 模型在**默认情况下几乎不主动调用**自定义 skills 与 subagents，需要用户显式提示才使用，影响自动化能力。评论 6 | [#21968](https://github.com/google-gemini/gemini-cli/issues/21968) |
| 7 | **#26525** [P2] | security, bug | Auto Memory 在已读取 transcript 后才进行脱敏，**敏感内容已先进入模型上下文**；需要确定性脱敏并减少日志量。评论 5 | [#26525](https://github.com/google-gemini/gemini-cli/issues/26525) |
| 8 | **#26522** [P2] | bug, agent | Auto Memory 对**低信号会话无限重试**，从未成功 `read_file` 的会话始终留在索引中。评论 5 | [#26522](https://github.com/google-gemini/gemini-cli/issues/26522) |
| 9 | **#25166** [P1] | bug, core | shell 命令实际已执行完毕，但 CLI 仍卡在 `Awaiting user input`，**命令结束状态未正确传播**。👍 3 | [#25166](https://github.com/google-gemini/gemini-cli/issues/25166) |
| 10 | **#21983** [P1] | bug, agent/browser | `browser` subagent 在 **Wayland 环境**下失败，以 `GOAL` 终止原因掩盖错误。 | [#21983](https://github.com/google-gemini/gemini-cli/issues/21983) |

> 补充值得关注：**#20079**（symlink agent 不被识别，4 评论）、**#24246**（> 128 个工具时触发 400 错误，3 评论）。

---

## 4. 重要 PR 进展

按安全/影响优先级挑选的 10 个 PR：

| # | PR | 状态 | 内容 | 链接 |
|---|---|---|---|---|
| 1 | **#28180** | OPEN | **重新应用** #27943 的安全修复：`read_file` / `write_file` / `edit` 工具恢复 `resolveDefensiveToolPath`，**堵住 symlink 路径遍历漏洞**（曾被 #27992 误回滚）。 | [#28180](https://github.com/google-gemini/gemini-cli/pull/28180) |
| 2 | **#28181** | OPEN | **修复 web_fetch 工具的 DNS rebinding 绕过 SSRF 防护**问题：旧实现只做 hostname 字符串检查，缺真实 DNS 解析。 | [#28181](https://github.com/google-gemini/gemini-cli/pull/28181) |
| 3 | **#28179** | OPEN | 将 `ISSUE_BODY` / `ISSUE_TITLE` 从 `ALWAYS_ALLOWED_ENVIRONMENT_VARIABLES` 移除，**关闭 CI 严格模式下 GitHub Issue 注入向量**。 | [#28179](https://github.com/google-gemini/gemini-cli/pull/28179) |
| 4 | **#28178** | OPEN | Bot 发布任务必须携带**显式批准标记**才能消费 `bot-changes.patch`，让 reasoning→publish 边界保持 fail-closed。 | [#28178](https://github.com/google-gemini/gemini-cli/pull/28178) |
| 5 | **#28175** | OPEN | 含 shell 参数展开的 allowlist 命令**降级为需确认**；YOLO/非交互模式下直接 deny，防止 `$VAR` 注入绕过。 | [#28175](https://github.com/google-gemini/gemini-cli/pull/28175) |
| 6 | **#28171 / #28172** | OPEN | **修复 agent 静默扩大执行范围**问题：当用户限定了审查行数而初次方案失败时，agent 未经允许运行脚本/读取全文件。两条 PR 分别从 large/xs 粒度切入同一根因 `mandateConfirm`。 | [#28171](https://github.com/google-gemini/gemini-cli/pull/28171) / [#28172](https://github.com/google-gemini/gemini-cli/pull/28172) |
| 7 | **#28169** | OPEN | 新增 `npm run eval:coverage` 命令，**报告内置工具的评估覆盖率**，交叉评估清单与工具注册表。 | [#28169](https://github.com/google-gemini/gemini-cli/pull/28169) |
| 8 | **#28167** | OPEN | 新增 caretaker 的 **Egress Cloud Run 服务**，订阅 Pub/Sub `egress-actions` topic，自动执行 GitHub 操作（XL 工程量）。 | [#28167](https://github.com/google-gemini/gemini-cli/pull/28167) |
| 9 | **#28059** | OPEN | 修复 **sandbox 下 `.env` EACCES** 导致扩展加载失败，并加固 Cloud Shell 路径。 | [#28059](https://github.com/google-gemini/gemini-cli/pull/28059) |
| 10 | **#28064** | OPEN | 文档补全：明确 `BeforeTool` hook 的 `decision: "ask"` 行为，**强制走 HITL** 流程对齐实现。 | [#28064](https://github.com/google-gemini/gemini-cli/pull/28064) |

> 同期合并/关闭的 MCP 相关修复：#27878（MCP 图片 MIME 嗅探）、#27889（MCP OAuth 刷新使用持久化 clientId）、#27888（规范化 MCP 工具 schema 根 type）、#27886（session_context 遵守 .gitignore）、#27885/27887（VSCode 资源泄漏 + 自定义主题 border 颜色）。

---

## 5. 功能需求趋势

从近 30 个高活跃 issue 中提炼，社区最强烈的需求集中在五个方向：

1. **Subagent 体系化能力**（最热）
   - 状态报告真实性（#22323）、自动调用意识（#21968）、失败回退不越界（#28171/#28172）、local subagent 路线图（#20195）、轨迹可分享（#22598）。
   - 表明社区希望 subagent 从"能用"走向"可观测、可控制、可信赖"。

2. **AST 感知的代码理解**
   - #22745（评估价值）、#22746（CLI 工具选型 tilth/glyph）形成 EPIC 系列。
   - 反映开发者对"减少 token 噪声 + 精确方法定位"的长期期待。

3. **Auto Memory 安全与可控性**
   - #26516/26522/26523/26525 形成安全 EPIC，覆盖脱敏、重试、补丁校验、日志。
   - 趋势：从"功能上线"转向"安全闭环"。

4. **浏览器/Browser Subagent 健壮性**
   - #21983（Wayland 失败）、#22267（忽略 settings.json）、#22232（会话接管/锁恢复）。
   - 浏览器 agent 已成为继 generalist 之后第二个高失败率子代理。

5. **工具规模与选择智能化**
   - #24246（> 128 工具触发 400）、#21000（task tracker 原生化）、#23571（tmp 脚本乱扔）。
   - 工具规模逼近模型上下文约束边界，智能筛选与作用域收敛成为刚需。

---

## 6. 开发者关注点

综合 50 条 issue 与 19 条 PR，可归纳出开发者社区当前最集中的痛点：

🔴 **稳定性 > 功能新增**
P1 级别的核心痛点几乎全部是"卡死/挂起/状态错报"类（#21409、#22323、#25166、#22186），开发者对模型能否**可靠完成简单任务**的信任度正在承压。

🟠 **Agent 行为边界与可预测性**
agent 在未授权时扩大执行范围（#28155 → #28171/#28172）、模型倾向使用破坏性命令（#22672 `git reset --force`）、tmp 脚本散落（#23571）——社区呼吁建立更严格的"任务契约"机制。

🟡 **安全模型持续加固**
单日 5+ 安全相关 PR 涉及路径遍历、SSRF、DNS rebinding、env 注入、bot patch 审批，体现团队对 AI 执行环境威胁面的**纵深防御**投入。开发者更关心"哪些信息会进模型上下文"以及"哪些路径可被访问"。

🟢 **可观测性诉求**
bug 报告不含 subagent 上下文（#21763）、subagent 轨迹不可分享（#22598）、shell 完成事件未传播（#25166）——**调试体验**是阻碍开发者采用 agent 模式的关键短板。

🔵 **MCP 生态兼容**
MCP 仍处于"边用边修"阶段：OAuth 刷新、schema 规范化、image MIME 嗅探、ignore 规则——每个修复点都反映真实使用中的边缘场景，建议开发者关注后续 0.51 正式版的相关整合。

---

*日报基于 2026-06-28 GitHub 数据生成，数据源：[google-gemini/gemini-cli](https://github.com/google-gemini/gemini-cli)*

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

<think>The user wants me to generate a Chinese daily report for GitHub Copilot CLI community dynamics based on the provided GitHub data. Let me analyze the data and create a structured report.

Let me organize the information:

**Latest Releases**: None in the past 24 hours

**Latest Issues (15 total, updated in past 24 hours)**:
1. #1799 - Alt-screen views toggle request (updated 2026-06-27, 10 comments, 7 likes)
2. #2165 - Ubuntu keychain support broken (updated 2026-06-27, 2 comments, 20 likes)
3. #2778 - /btw from claude code (updated 2026-06-27, 2 comments, 1 like)
4. #3949 - Windows 11 copy not working (updated 2026-06-27, 2 comments, 0 likes)
5. #3964 - CLOSED - Copying soft-wrapped output drops space (updated 2026-06-28)
6. #3958 - Windows v1.0.66 fails to start stdio MCP servers with .bat/.cmd (updated 2026-06-27)
7. #3962 - Latest copilot (1.0.65) not working (updated 2026-06-27)
8. #3874 - VS Code agent preToolUse hook denial not working (updated 2026-06-27)
9. #2824 - Add chat function to generate iPhone app (updated 2026-06-27)
10. #3815 - Debug logs path missing \ on Windows (updated 2026-06-28)
11. #3963 - Feature request: show session retention/expiration date (updated 2026-06-27)
12. #3961 - Duplicate of #3949 (updated 2026-06-27)
13. #3960 - CLOSED - Custom model provider consuming AI quota (updated 2026-06-27)
14. #3959 - Visual artifacts/ghost characters in TUI (updated 2026-06-27)
15. #3957 - Unable to scroll with trackpad on MBP (updated 2026-06-27)

**Latest PRs (3 total)**:
1. #3928 - Add .gitignore and settings configuration (OPEN)
2. #570 - macOS installation instructions to README.md (CLOSED)
3. #3737 - Jigg empire ai (OPEN)

Now let me select the 10 most noteworthy issues and PRs and create the report.

For issues, I'll pick the most impactful ones based on likes, comments, and relevance:
1. #2165 - Ubuntu keychain (20 likes - highest)
2. #1799 - Alt-screen views (10 comments, 7 likes)
3. #3949 - Windows copy bug
4. #3964 - Copy soft-wrap bug (closed)
5. #3958 - Windows MCP servers regression
6. #3962 - v1.0.65 not working
7. #3874 - preToolUse hook denial
8. #2778 - /btw from claude code
9. #3815 - Debug logs path missing \
10. #3959 - TUI ghost characters
11. #3957 - Trackpad scrolling
12. #3963 - Session retention date
13. #2824 - iPhone app generation
14. #3960 - Custom model provider quota (closed)
15. #3961 - Duplicate issue

Let me select 10 most important:
1. #2165 - Ubuntu keychain (20 likes - highest engagement)
2. #1799 - Alt-screen toggle (high comments and likes)
3. #3958 - Windows MCP regression (new v1.0.66 critical issue)
4. #3962 - v1.0.65 not working (regression report)
5. #3874 - preToolUse hook denial
6. #2778 - /btw feature request
7. #3949 - Windows 11 copy
8. #3964 - Soft-wrap copy (closed - showing fix progress)
9. #3959 - TUI ghost characters
10. #3957 - Trackpad scrolling

For PRs, only 3 are available, so I'll list all of them and note there are few.

Let me also analyze trends:
- Windows platform issues seem prominent
- TUI/terminal rendering bugs
- Authentication/keychain issues on Linux
- Feature parity with Claude Code
- Model provider customization
- Session management

Let me write the report now.</think>

# GitHub Copilot CLI 社区动态日报

**日期**: 2026-06-28
**数据来源**: [github.com/github/copilot-cli](https://github.com/github/copilot-cli)

---

## 📌 今日速览

今日 Copilot CLI 社区动态围绕 **v1.0.65/v1.0.66 版本稳定性** 集中爆发：Windows 平台出现多项回归 Bug（MCP 服务器启动失败、TUI 渲染异常、复制失效），同时 Linux 密钥链认证与 alt-screen 渲染问题持续高热讨论。值得欣慰的是，软换行复制的边界空格丢失问题（[#3964](https://github.com/github/copilot-cli/issues/3964)）当日已关闭，标志着 #3666 的遗留 Bug 修复路径推进。

---

## 🚀 版本发布

过去 24 小时内 **无新版本发布**。当前最新稳定版为 v1.0.65，v1.0.66 似乎处于早期分发阶段（[#3958](https://github.com/github/copilot-cli/issues/3958) 反馈中已提及）。

---

## 🔥 社区热点 Issues（Top 10）

### 1. [#2165 Ubuntu 密钥链支持失效](https://github.com/github/copilot-cli/issues/2165) ⭐ 20
- **重要性**: 截至目前最高点赞数的活跃 Issue
- **核心问题**: Ubuntu 环境下 `secret-tool` 缺失时密钥链访问失败，且官方文档（troubleshoot-auth 页面）描述与实际行为不符
- **社区反应**: 20 👍 / 2 评论，长达 3 个月未根治，Linux 用户影响面广

### 2. [#1799 如何关闭 alt-screen 视图](https://github.com/github/copilot-cli/issues/1799) 💬 10
- **重要性**: 近期 alt-screen 渲染改动引发大量兼容性问题
- **核心问题**: 用户希望保留旧版非全屏渲染模式（疑似引发 TUI 闪烁、复制丢失等问题）
- **社区反应**: 10 评论 / 7 👍，是 #3959、#3957、#3949 等终端渲染问题的"上游根源"

### 3. [#3958 Windows v1.0.66 启动 .bat/.cmd MCP 服务器失败（回归）](https://github.com/github/copilot-cli/issues/3958)
- **重要性**: v1.0.66 新引入的严重回归
- **核心问题**: Windows 下 stdio MCP server 若 command 为 `.bat`/`.cmd` 且带参数，子进程立即被 cmd.exe 终止（`The syntax of the command is incorrect.`）
- **社区反应**: 1 评论 / 0 👍，刚发布即被识别为 P0 级回归，阻塞企业用户工作流

### 4. [#3962 v1.0.65 完全无法使用](https://github.com/github/copilot-cli/issues/3962)
- **重要性**: 直接阻断用户入门
- **核心问题**: 用户启动后停留在欢迎界面，输入 `review last commit` 后无响应，"Working" 状态卡死
- **社区反应**: 刚开 Issue，需关注是否为共性故障

### 5. [#3874 VS Code 扩展 `preToolUse` agent hook 拒绝不生效](https://github.com/github/copilot-cli/issues/3874)
- **重要性**: 涉及安全策略落地
- **核心问题**: 在 CLI 中运行 chat 会话时，`hooks.json` 中配置的 `preToolUse` 拒绝钩子未触发
- **社区反应**: 企业安全/合规用户最关心——hook 是审计和权限控制的关键机制

### 6. [#2778 何时引入 Claude Code 的 `/btw` 中途提问功能？](https://github.com/github/copilot-cli/issues/2778)
- **重要性**: 反映竞品功能差距
- **核心问题**: 用户希望在 agent 任意状态（运行/休眠/空闲）下，用累积上下文即时提问而不污染 session
- **社区反应**: 体现对**上下文管理**能力的强烈需求

### 7. [#3949 Windows 11 复制失效](https://github.com/github/copilot-cli/issues/3949) 🆕
- **重要性**: Windows 平台高频故障
- **核心问题**: 复制操作后剪贴板为空，但 CLI 提示已复制（缺少实际写入校验）
- **社区反应**: 已衍生出重复 Issue #3961，反映问题普遍性

### 8. [#3964 软换行复制仍丢失边界空格（#3666 不完整修复）](https://github.com/github/copilot-cli/issues/3964) ✅ CLOSED
- **重要性**: 追踪长期未根治的文本处理 Bug
- **核心问题**: v1.0.65 中复制软换行输出仍会在换行边界拼接两词；#3666 在 v1.0.49 曾标记为已修复
- **社区反应**: 1 评论 / 当日即关闭，修复路径回归正常轨道

### 9. [#3959 TUI 删除文本后残留"幽灵字符"](https://github.com/github/copilot-cli/issues/3959) 🆕
- **重要性**: 终端渲染质量
- **核心问题**: backspace 后部分终端单元未清除/重绘，出现"幽灵"残留字符
- **社区反应**: 与 alt-screen 改动强相关（#1799）

### 10. [#3957 MBP 触控板无法滚动历史消息](https://github.com/github/copilot-cli/issues/3957) 🆕
- **重要性**: macOS 用户核心交互体验
- **核心问题**: 触控板两指滑动被劫持为"选择上一条 prompt"，而非滚动窗口
- **社区反应**: 由 doggy8088（社区活跃用户）报告，影响所有 MacBook 用户

---

## 🔧 重要 PR 进展

> 过去 24 小时仅 3 个 PR 更新，活跃度较低。

| PR | 状态 | 内容 | 链接 |
|---|---|---|---|
| [#3928](https://github.com/github/copilot-cli/pull/3928) | 🟢 OPEN | 添加 `.gitignore` 和 settings 配置（社区提交） | [@tpsaint](https://github.com/tpsaint) |
| [#570](https://github.com/github/copilot-cli/pull/570) | 🔴 CLOSED | 向 README.md 添加 macOS 安装说明（WIP，由 Copilot Coding Agent 驱动） | [@Copilot](https://github.com/Copilot) |
| [#3737](https://github.com/github/copilot-cli/pull/3737) | 🟢 OPEN | "Jigg empire ai" 实验性 PR（标题模糊，待澄清意图） | [@j2030aiNotez](https://github.com/j2030aiNotez) |

**观察**: PR 流量偏低，可能与近期 Issue 集中处理 Bug 而非新功能开发有关。#570 长期未推进后被关闭，建议关注官方文档侧的 macOS 安装指南后续单独提交。

---

## 📈 功能需求趋势

从今日活跃 Issue 中提炼出社区最关注的方向：

1. **🖥️ 跨平台稳定性**（热度最高）
   - Windows 复制 (#3949)、MCP 服务器 (#3958)、调试日志路径 (#3815)
   - Linux 密钥链认证 (#2165)
   - macOS 触控板 (#3957)

2. **🎨 TUI/终端渲染重构**
   - alt-screen 开关 (#1799)、幽灵字符 (#3959)、软换行复制 (#3964)
   - 形成一个**渲染质量**专题簇

3. **🤖 上下文与会话管理**
   - `/btw` 中途提问 (#2778)、session 保留期可见 (#3963)

4. **🔌 自定义模型提供商**
   - 自定义模型配额扣减问题 (#3960) —— 虽已关闭，反映 BYOK/BYOM 需求

5. **🔒 安全/审计能力**
   - agent hook 强制执行 (#3874)

6. **📱 多端能力扩展**
   - iPhone App 生成 (#2824) —— 移动端能力愿景

---

## 👨‍💻 开发者关注点与痛点

### 高频痛点
- **"v1.0.65/66 不能用"**：复制失效、启动卡死、MCP 启动失败，三个看似独立的问题集中在最近两版本，**版本质量信心动摇**。
- **文档与实现脱节**：#2165 指出官方 troubleshoot 文档在 Ubuntu 上描述错误，开发者对官方引导文档的可信度产生质疑。
- **Windows .bat/.cmd 边界**：微软生态特有的脚本处理（参数引号转义）长期是 CLI 工具的痛点，#3958 是该痛点在 MCP 协议层的复现。

### 高频需求
- **可关闭的 alt-screen**：开发者希望保留对自己终端模拟器的控制权（屏幕锁定、tmux 兼容性）。
- **Claude Code 功能对标**：`/btw`、`session` 元信息可见性，说明竞争产品已在 UX 层形成事实标准。
- **hook 系统可靠性**：企业用户将 hook 视为不可绕过的安全围栏，任何"拒绝不生效"的 Bug 都是合规红线。
- **真实反馈而非假成功**：#3949 用户特别指出"CLI 告诉用户已复制但实际未复制"是最差体验——**应当先校验再提示**。

### 社区情绪信号
- 长期 Issue（#1799 持续 3 个月、#2165 持续 3 个月、#2778 持续 2.5 个月）积累了一定焦虑感，**维护方需主动给出 roadmap 沟通**。

---

> 📊 **日报小结**: 今日社区以"质量回归"为主轴，建议关注 v1.0.66 是否在 Windows MCP 场景下需要紧急 patch，以及 alt-screen 相关渲染问题的合并修复窗口。

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

<think>Let me analyze the GitHub data for OpenCode community activity on 2026-06-28 and create a comprehensive daily report in Chinese.

Key observations:
1. No new releases in the past 24 hours
2. Issues: 50 total updated, top 30 shown
3. PRs: 50 total updated, top 20 shown
4. The community appears to be very active with various bugs, features, and platform-specific issues

Let me categorize:

**Major themes:**
- Memory leaks (#22422, #33213, #28492)
- Desktop app issues (Windows, WSL, macOS)
- Model support issues (GLM, Kimi, Copilot, NVIDIA NIM)
- TUI issues (Wayland, NFS, ARM64)
- Crypto payment feature request
- Various tool/feature enhancements

**Top Issues by importance:**
1. #8816 - llms.txt and docs as markdown (15 comments, 34 likes) - documentation feature
2. #23153 - Pay with crypto (13 comments, 24 likes) - payment feature
3. #22422 - Memory leak warning (closed) - core fix
4. #19473 - Desktop UNC paths to WSL (7 comments) - Windows/WSL integration
5. #12219 - OpenRouter credits issue (7 comments)
6. #19130 - Windows ARM64 TUI fail (6 comments)
7. #33890 - Bun 1.3.14 segfault on Linux (6 comments)
8. #30895 - Desktop WSL path conversion (6 comments)
9. #33213 - Server mode memory accumulation (5 comments)
10. #32473 - Desktop renderer crash (4 comments)

**Top PRs:**
1. #34273 - Agent tools (git, format, diagnostics, etc.)
2. #18306 - Open WebUI provider
3. #34270 - MiMo tools port
4. #33202 - Skip parseModel for inherit
5. #34272 - Empty-content guard
6. #34164 - Complete protocol client (closed)
7. #34227 - Partial Zen refunds
8. #34233 - V2 WSL UI
9. #34234 - Preserve attachment paths
10. #34242 - Prevent piped stdin breaking UI

Let me write this report in Chinese.</think>

# OpenCode 社区动态日报
**日期：2026-06-28**

---

## 📌 今日速览

OpenCode 社区今日无新版本发布，但代码仓库活跃度依然高涨：**50 个 Issue** 与 **50 个 PR** 在 24 小时内有更新。**核心趋势集中在三大方向**：① 桌面端（Desktop App）在 Windows / WSL / ARM64 多场景下的稳定性问题集中爆发；② 长时运行的 `opencode serve` 出现严重的内存泄漏（cgroup 峰值达 26.8 GiB）；③ 多个新模型接入出现兼容性问题（GLM-5.1/5.2、Nemotron、Kimi、Copilot Enterprise 三方模型等）。与此同时，社区对 **crypto 支付** 和 **LLM 友好文档（llms.txt）** 的功能呼声依然较高。

---

## 🚀 版本发布

> 过去 24 小时内**无新 Release**。当前主线版本仍为 `1.17.10 / 1.17.11`，桌面端停留在 `v1.16.x`。

---

## 🔥 社区热点 Issues

| # | 标题 | 状态 | 关注度 | 为什么重要 |
|---|------|------|--------|------------|
| [#8816](https://github.com/anomalyco/opencode/issues/8816) | **Feature**: 提供 llms.txt 与 markdown 格式文档 | OPEN | 👍34 · 💬15 | 呼声最高的文档改进请求，方便 LLM/Agent 直接解析 OpenCode 全部文档，被视为生态扩展关键 |
| [#23153](https://github.com/anomalyco/opencode/issues/23153) | **Feature**: opencode-go 支持加密货币支付 | OPEN | 👍24 · 💬13 | 商业化路线重要补充，受社区强烈关注 |
| [#22422](https://github.com/anomalyco/opencode/issues/22422) | **Bug**: MaxListenersExceededWarning 内存泄漏警告 | CLOSED | 💬7 | 核心 EventEmitter 内存泄漏问题已修复，但同类问题仍在多场景复现 |
| [#19473](https://github.com/anomalyco/opencode/issues/19473) | Desktop 端向 WSL Server 发送 UNC 路径致 bash 工具全失效 | OPEN | 💬7 | Windows + WSL 跨平台集成路径处理的核心痛点，已提供 workaround |
| [#12219](https://github.com/anomalyco/opencode/issues/12219) | OpenRouter 免费模型额度提示错误 | OPEN | 👍6 · 💬7 | 影响使用 Kimi 2.5 Free 等免费模型的用户，错误信息易误导 |
| [#19130](https://github.com/anomalyco/opencode/issues/19130) | Windows ARM64 原生二进制 TUI 初始化失败（bun:ffi/TinyCC） | OPEN | 👍5 · 💬6 | 阻塞 ARM64 Windows 用户的 TUI 使用，仅 CLI 命令可用 |
| [#33890](https://github.com/anomalyco/opencode/issues/33890) | Bun 1.3.14 在 Linux x86_64 上 SIGILL 段错误 | OPEN | 👍5 · 💬6 | 影响所有升级到 Bun 1.3.14 的 Linux 用户，TUI 运行短时间后崩溃 |
| [#30895](https://github.com/anomalyco/opencode/issues/30895) | Desktop v1.16.0 将 WSL `/mnt/c/` 工作区转为 Windows 路径 | OPEN | 💬6 | 与 #19473 同源的 WSL 路径转换 bug，影响文件与会话列表 |
| [#33213](https://github.com/anomalyco/opencode/issues/33213) | 长跑 `opencode serve` 累积 26.8 GiB 匿名 JS 堆/交换 | OPEN | 💬5 | 生产环境 P0 级内存问题，重启后立即降至正常，亟需根因修复 |
| [#32473](https://github.com/anomalyco/opencode/issues/32473) | Desktop renderer 因 dangling `lastProjectSession` 致致命崩溃 | OPEN | 💬4 | 持久化会话指针悬空导致整个窗口崩溃，应优雅降级而非 fatal |

---

## 🛠️ 重要 PR 进展

| # | 标题 | 状态 | 关键内容 |
|---|------|------|----------|
| [#34273](https://github.com/anomalyco/opencode/pull/34273) | feat(tools): 新增 agent 工具集（git/format/diagnostics/memory/LSP rename） | OPEN | 大型特性 PR，新增 git、format、diagnostics、memory、history、LSP rename 等 agent 工具，并修复 TUI spinner |
| [#34270](https://github.com/anomalyco/opencode/pull/34270) | feat(tools): 移植 MiMo 工具集到 opencode | CLOSED | 新增 multiedit、notebook_edit、codesearch、memory（BM25 over markdown）、history 等工具及子会话 cwd 接线 |
| [#18306](https://github.com/anomalyco/opencode/pull/18306) | feat: 添加 Open WebUI provider | CLOSED | 新增 Open WebUI 作为 provider，扩展 LLM 后端选择 |
| [#33202](https://github.com/anomalyco/opencode/pull/33202) | fix(agent): 当 model 为 `inherit` 时跳过 parseModel，修空白字符 | OPEN | 修复 5 个相关 issue（#17890/#31141/#5623/#8896/#23908），解决自定义 .md subagent 默认继承模型失败的问题 |
| [#34272](https://github.com/anomalyco/opencode/pull/34272) | fix: 在 message() 流水线末端添加空内容守卫 | OPEN | 提供商无关的空内容兜底，修复 #23260 / #26320 |
| [#34164](https://github.com/anomalyco/opencode/pull/34164) | feat(client): 生成完整协议客户端 | CLOSED | 从 Server `HttpApi` 自动生成 Promise + Effect 客户端，保留类型化全局 SSE 事件流 |
| [#34227](https://github.com/anomalyco/opencode/pull/34227) | fix(console): 处理 Stripe 部分 Zen 退款 | OPEN | 修复 webhook 重试导致的双重扣减，区分订阅/lite 充值 |
| [#34233](https://github.com/anomalyco/opencode/pull/34233) | feat(app): v2 WSL UI | OPEN | 新版 WSL 界面 + 加载状态组件，与 #19473/#30895 生态对齐 |
| [#34234](https://github.com/anomalyco/opencode/pull/34234) | fix: 保留附件文件路径 | OPEN | 修复粘贴/拖拽附件后 agent 仅获得嵌入数据而无法访问源文件的问题 |
| [#34242](https://github.com/anomalyco/opencode/pull/34242) | fix(tui): 防止 piped stdin 破坏 UI 与键盘输入 | OPEN | 关闭 4 个相关 issue，修复 TUI 在 stdin 被重定向时无法交互的长期痛点 |

---

## 📈 功能需求趋势

从近 24 小时的 Issue 分布看，社区最关注的功能方向按热度排序如下：

1. **🚀 新模型 / Provider 接入**
   - GLM-5.1/5.2、NVIDIA Nemotron 3 Ultra、Kimi 2.5/2.6、GitHub Copilot Enterprise 三方模型、minimax-m3 在 NIM 的接入
   - Cloudflare Workers AI 缺少 Account ID 字段
   - Open WebUI 已在 PR #18306 落地

2. **💸 商业化与支付**
   - crypto 支付（#23153）呼声最高
   - Stripe 部分退款处理（PR #34227）

3. **🖥️ 桌面端 / 跨平台稳定性**
   - Windows ARM64、WSL↔Desktop 路径互转、macOS NFS 信息污染 TUI、Linux ARM64 SIGTRAP
   - 桌面 CPU 占用过高（#34236）

4. **🤖 Agent 能力扩展**
   - 工具集扩充（git/format/diagnostics/memory/history/LSP rename）
   - BM25 记忆与历史检索系统
   - V2 session undo/redo/revert（PR #34263）

5. **📚 文档与 LLM 友好化**
   - llms.txt + docs markdown 导出（#8816，长期最高赞）

6. **📊 性能与稳定性**
   - 长跑 serve 模式内存泄漏（#33213 P0）
   - EventEmitter MaxListeners 警告（#22422 / #28492）

---

## 🧑‍💻 开发者关注点（高频痛点）

汇总开发者反馈中的高频痛点：

- **🔁 跨平台路径处理混乱** — Windows UNC、WSL `/mnt/c/`、macOS NFS、Linux ARM64 多场景下路径转换 bug 集中爆发（#19473/#30895/#31632/#34146/#34054），WSL 集成尤其突出。
- **💾 服务端内存失控** — `opencode serve` 长跑场景下的 JS 堆/交换累积已出现 26.8 GiB 量级报告，是当前最严重的稳定性风险。
- **🧩 模型兼容性碎片化** — 不同 provider 间的 prompt cache、schema（Google Gemini nullable union）、function call fallback chain（minimax-m3 → 加 `opencode/` 前缀致无限重试）、image input 不支持等问题频发。
- **🖼️ 桌面端资源占用异常** — Desktop 进程偶发占用 30%-50% CPU，与 CLI 表现差异明显（#34236）。
- **🪟 TUI 兼容性问题** — Wayland 缺少 wl-paste、piped stdin、VS Code Python venv 激活竞态、Bun 1.3.14 SIGILL 等多场景异常。
- **🔐 商业化能力缺口** — crypto 支付、Cloudflare Account ID 字段等商业集成诉求持续累积。
- **📖 文档与 Agent 自服务** — 缺少 llms.txt 等结构化文档，限制了第三方 Agent 对 OpenCode 文档的自动消费。

---

> 📊 **数据来源**：GitHub `anomalyco/opencode`，统计窗口：过去 24 小时（截至 2026-06-28）。
> 报告由 AI 分析师自动生成，仅供参考。

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

<think>
The user wants me to generate a daily report for the Qwen Code community based on GitHub data. Let me analyze the data carefully and create a structured Chinese report.

Let me first understand the key data:

1. **Latest Release**: v0.19.2-nightly.20260628.714513df2
   - fix(core): allow web_fetch JSON fallback by @tt-a1i
   - chore(release): v0.19.2 by @qwen-code-ci-bot

2. **Issues (26 total)**: I need to pick 10 most notable
3. **PRs (50 total)**: I need to pick 10 most important

Let me identify the most important issues based on:
- High comment count
- Active discussion
- Strategic importance
- Recent updates
- Open vs Closed status

Key issues to highlight:
- #4175 (CLOSED) - Mode B feature-priority roadmap (43 comments!) - very high engagement
- #5819 (CLOSED) - Bug about model auto-switching and high costs (Chinese, 4 comments)
- #5836 (OPEN) - Todo persistence for cross-device sync
- #5823 (OPEN) - /loop cron tasks fire silently
- #5949 (OPEN) - /new command sometimes doesn't work
- #5942 (OPEN) - Anthropic provider prompt cache misses
- #5867 (CLOSED) - Add team tier to auto-memory
- #5889 (OPEN) - .qwen/loop.md task file
- #5626 (OPEN) - Chrome Extension via Daemon
- #5936 (OPEN) - Chrome extension research
- #5597 (CLOSED) - /model --vision
- #5939 (OPEN) - Skip no-op max_tokens escalation
- #5932 (OPEN) - Tool-use loop fix
- #5941 (OPEN) - UI bug: scroll jumps to top
- #5922 (CLOSED) - cua-driver.exe high CPU
- #5677 (CLOSED) - Track ACP gaps

Key PRs:
- #5777 - Chrome extension revival
- #5888 - qwen tag (multiplayer channel)
- #5911 - Normalize source slug validation
- #5944 - Halt repeated shell inspection
- #5890 - .qwen/loop.md task file
- #5856 - Voice dictation in desktop
- #5902 - QQ Bot streaming improvements
- #2652 - tree-sitter AST for shell parsing
- #5868 - Configurable auto-compact threshold
- #5848 - collapsePreviewCount setting
- #5795 - Subagent crash notifications
- #5928 - todosDirectory setting
- #5912 - ACP permission votes
- #5945 - Reject non-positive sessionRecapAwayThresholdMinutes
- #5946 - Anthropic SDK abort listener leak

Now let me identify the key trends:
1. **Todo/Session management** - Cross-device sync, persistence
2. **Performance/Cost** - Token management, prompt cache
3. **Browser/Desktop integration** - Chrome extension revival
4. **Multi-channel/Agent** - QQ Bot, qwen tag, multiplayer
5. **Security** - Slug validation, path traversal
6. **UI/UX** - Voice dictation, scroll bugs, MCP dialog
7. **Memory system** - Team tier memory
8. **Loop automation** - .qwen/loop.md

Let me write the report in Chinese, structured and professional.
</think>
# Qwen Code 社区动态日报
**日期：2026-06-28**

---

## 📌 今日速览

Qwen Code 今日发布 **v0.19.2-nightly**，社区活跃度持续走高，Issues 与 PR 合计 76 条更新。**最大看点**是 **Chrome 扩展复兴计划**（#5626 → #5777）和 **`/loop` 自动化机制完善**（#5889 → #5890）双双进入实施阶段；同时 **Anthropic provider 缓存命中问题**（#5942）和 **自动改写 settings.json 致费用激增**（#5819）反映出 Token 成本控制正在成为新的核心痛点。

---

## 🚀 版本发布

### v0.19.2-nightly.20260628.714513df2

- **fix(core)**: 允许 `web_fetch` 在解析失败时回退到 JSON 处理（[PR #5660](https://github.com/QwenLM/qwen-code/pull/5660)，by @tt-a1i）
- 自动化发布流程由 `@qwen-code-ci-bot` 完成

> 💡 建议关注 0.19.x 后续 release notes，因 #5934 涉及的默认 `max_tokens` 行为变更已经在跟进（#5939）。

---

## 🔥 社区热点 Issues（Top 10）

| # | Issue | 状态 | 亮点 |
|---|-------|------|------|
| 1 | **[#4175](https://github.com/QwenLM/qwen-code/issues/4175)** Mode B (`qwen serve`) v0.16 production-ready 路线图 | CLOSED | **43 条评论**，是 v0.16 阶段最系统的 Roadmap，已成功推动多个子模块 |
| 2 | **[#5819](https://github.com/QwenLM/qwen-code/issues/5819)** 升级后默认改用高价模型、setting.json 被自动改写 | CLOSED | 中文用户反馈，触及**计费安全**这一敏感话题，触发开发者警觉 |
| 3 | **[#5942](https://github.com/QwenLM/qwen-code/issues/5942)** Anthropic provider 端 prompt-cache 命中率低 | OPEN | 与 Claude Code 同后端却偏离 ~100%，是**成本优化**的高价值议题 |
| 4 | **[#5836](https://github.com/QwenLM/qwen-code/issues/5836)** Todo 持久化到项目内以便跨设备/多人同步 | OPEN | 直击当前「单设备单用户」体验短板，已被 PR #5928 落地 |
| 5 | **[#5823](https://github.com/QwenLM/qwen-code/issues/5823)** `/loop` 定时任务静默触发，模型无法自检/停止 | OPEN | 后台自动化**可观测性**的经典诉求，与 #5889 联动 |
| 6 | **[#5626](https://github.com/QwenLM/qwen-code/issues/5626)** 通过 Daemon + WebUI 架构复兴 Chrome 扩展 | OPEN | 战略级提案，连接 PR #5777 实施 |
| 7 | **[#5889](https://github.com/QwenLM/qwen-code/issues/5889)** `/loop` 引入 `.qwen/loop.md` 任务文件 | OPEN | 解决长跑循环的「持久化任务清单」需求，已被 PR #5890 实现 |
| 8 | **[#5867](https://github.com/QwenLM/qwen-code/issues/5867)** 内存系统新增 git 共享的 "team" 层 | CLOSED | 补齐 Auto-memory 的**多人协作**维度 |
| 9 | **[#5756](https://github.com/QwenLM/qwen-code/issues/5756)** 默认 8K 输出上限截断大文件、引发失败重试循环 | CLOSED | 暴露了 `CAPPED_DEFAULT_MAX_TOKENS` 的设计缺陷，推动 #5934/#5939 修复 |
| 10 | **[#5941](https://github.com/QwenLM/qwen-code/issues/5941)** 滚动条在大模型输出时一翻就跳到顶 | OPEN | Windows 客户端的 UI 体验问题，简单但影响面广 |

---

## 🛠 重要 PR 进展（Top 10）

| # | PR | 状态 | 关键内容 |
|---|----|------|----------|
| 1 | **[#5777](https://github.com/QwenLM/qwen-code/pull/5777)** 复兴 Chrome 扩展（daemon-direct 架构） | OPEN | 不再依赖 Native Messaging，直接以 `qwen serve` 为后端，是浏览器侧集成的关键一步 |
| 2 | **[#5888](https://github.com/QwenLM/qwen-code/pull/5888)** `qwen tag` — 多 Agent 群聊驻留 | OPEN | 在钉钉群组中部署 multiplayer 通道常驻 Agent，扩展 Agent 形态 |
| 3 | **[#5944](https://github.com/QwenLM/qwen-code/pull/5944)** 阻止 `git status/diff/ls-files` 重复变体循环 | OPEN | 始终启用的循环守卫，避免模型空转读取型 shell 命令 |
| 4 | **[#5856](https://github.com/QwenLM/qwen-code/pull/5856)** 桌面端引入语音听写 | OPEN | 桌面版 `/voice` 与 CLI / Web Shell 拉齐，附录音波形 UI |
| 5 | **[#5902](https://github.com/QwenLM/qwen-code/pull/5902)** QQ Bot 流式输出优化 | OPEN | 2 秒空闲 flush、移除 2K 字符限制、增加 replyMsgId TTL、修复 Markdown 表格 |
| 6 | **[#2652](https://github.com/QwenLM/qwen-code/pull/2652)** 用 tree-sitter AST 替换 shell 字符串解析 | OPEN | 提升引号/heredoc/嵌套等复杂 shell 解析鲁棒性，基础设施级重构 |
| 7 | **[#5868](https://github.com/QwenLM/qwen-code/pull/5868)** 可配置 auto-compact 阈值 + Stop hook 上下文用量 | OPEN | 用户首次能调节自动压缩策略，配合 #4025 设计 |
| 8 | **[#5928](https://github.com/QwenLM/qwen-code/pull/5928)** 新增 `todosDirectory` 设置（项目内持久化） | OPEN | 配合 #5836，让 todo/plan/memory 真正可 Git 共享 |
| 9 | **[#5912](https://github.com/QwenLM/qwen-code/pull/5912)** ACP 权限投票跨连接解析 | OPEN | 修复 daemon 权限请求 id 仅绑定到首发连接的问题 |
| 10 | **[#5946](https://github.com/QwenLM/qwen-code/pull/5946)** 修复 Anthropic SDK abort listener 泄漏 | CLOSED | 用 per-request child controller 隔离中止信号，避免资源/事件泄漏 |

---

## 📈 功能需求趋势

从 26 条 Issue 提炼出 6 大社区关注方向：

1. **🤖 后台自动化与 `/loop` 治理**（#5823 / #5889 / #5890）— 模型要能"看见"自己创建的定时任务，任务本身需要可持久化、可编辑
2. **🌐 浏览器 / 多端扩展**（#5626 / #5777 / #5936）— Chrome 扩展、桌面端语音听写都在向「多端对齐」演进
3. **💸 成本与 Token 管理**（#5819 / #5942 / #5756 / #5939）— cache 命中率、模型自动切换、输出截断三件套暴露出成本控制的薄弱
4. **📂 跨设备 / 团队协作**（#5836 / #5867 / #5928）— todo / memory / plan 都需要"团队层"和"项目本地"两种持久化选项
5. **🧠 模型路由与降级**（#5597 / #5819）— `/model --vision`、自动降级策略是基础能力补全
6. **🛡 安全与输入校验**（#5909 / #5911 / #5680）— slug-to-path、session 阈值校验、shell 检查守卫持续加码

---

## 🧑‍💻 开发者关注点

社区反馈中最强烈的痛点，按出现频次排序：

- **「我看不到模型在后台做了什么」** — `/loop` cron 不报告、subagent 崩溃无现场（#5823、#5795、#5894）。可观测性已是**第一优先级**。
- **「升级后行为变了，钱花光了」** — #5819 直接触发了"自动改 setting.json"的信任问题，开发者期望**升级不能默认改写用户配置**。
- **「我和队友的 todo / memory 不同步」** — 多人协作场景下，globally isolated 状态被视为缺陷（#5836、#5867）。
- **「shell / 大文件场景下 token 不够用」** — 8K 截断 → 模型重试 → 浪费 token 的死循环被 #5756 完整记录，推动默认行为变更。
- **「UI 在 Windows 上细节打磨不足」** — 滚动跳顶、cua-driver.exe 残留 CPU、MCP 对话框边框裁剪（#5941、#5922、#5933），暗示 Windows 端的 QA 投入需要加强。
- **「拒绝默默接受非合理输入」** — #5680、#5929、#5909 形成一致声音：**默认值与解析器必须显式拒绝非法值**，而不是 silently 持久化或执行。

---

> 📎 **数据来源**：[github.com/QwenLM/qwen-code](https://github.com/QwenLM/qwen-code) | **报告生成时间**：2026-06-28
> 
> 若需追踪某条 Issue/PR 的后续进展，可在 GitHub 中 Watch 该仓库以接收更新通知。

</details>

---
*本日报由 [Big Model Radar](https://github.com/96loveslife/big_model_radar) 自动生成。*
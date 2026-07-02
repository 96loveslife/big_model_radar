# AI CLI 工具社区动态日报 2026-07-02

> 生成时间: 2026-07-02 04:01 UTC | 覆盖工具: 7 个

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

<think>The user wants me to synthesize the six individual tool reports into a horizontal comparative analysis. Let me think carefully about what insights to draw from the data presented.

Key data points to remember:
- Claude Code: v2.1.198 release, 50 issues, 2 PRs, hot issues around AskUserQuestion timeout, safety filter false positives, VS Code diff review
- Codex: rust-v0.143.0-alpha.33, 50 issues, 20 PRs, focus on Windows stability + PSEC-4394 security hardening (7 PRs by @bookholt-oai)
- Gemini CLI: v0.51.0-nightly, 50 issues, 16 PRs, security (symlink escape, OAuth CVE, supply chain RCE), subagent reliability
- Copilot CLI: v1.0.69-0 + v1.0.68, 50 issues, 0 PRs, plugins/BYOK/themes
- Kimi Code CLI: 0 releases, 4 issues, 2 PRs (smallest), focus on #640 stuck loop bug + branding migration
- OpenCode: v1.17.13, ~10 issues shown, 10 PRs, V2 architecture migration
- Qwen Code: v0.19.4 + nightly, 50 issues, ~20 PRs, daemon optimization, CI fixes, local model support

Let me calculate the metrics properly:
- Issues: Claude Code 50, Codex 50, Gemini 50, Copilot 50, Kimi 4, OpenCode (only top shown 10, but mentions 50 total updated = 50), Qwen 50
- PRs: Claude Code 2, Codex 20, Gemini 16, Copilot 0, Kimi 2, OpenCode 10, Qwen 20

Let me build a comprehensive comparison.

I need to think about:
1. Eco-overview - what's the overall state? Multi-tool coexistence, security hardening wave, V2 architecture migration, agent reliability
2. Activity comparison - clear table
3. Common focus areas - security, agent/subagent reliability, IDE integration, MCP ecosystem, multi-model/BYOK, local model support, Windows compatibility, observability
4. Differentiation - Claude (Claude ecosystem integration), Codex (security hardening + Windows), Gemini (subagent + auto memory + security), Copilot (IDE/GitHub native), Kimi (smaller, focused), OpenCode (V2 migration), Qwen (Chinese market + local model)
5. Maturity assessment - clearly differentiated
6. Trend signals - security wave, V2 architecture, subagent maturity, multi-model, local/on-prem

Let me also think about what makes this report valuable for technical decision-makers and developers. They want to know:
- Which tool to use for what
- Where to contribute
- What's the industry direction
- What patterns are emerging

I should use the thinking block and then deliver the report. The user specified Chinese language and the same professional/technical style.

Let me also think about whether there are nuances I'm missing. One thing I notice: Kimi has very low activity but #640 has 15 comments which is high - this could indicate either a smaller community or a community that's more focused. Copilot has 0 PRs which is unusual - this is worth noting.

The data also shows:
- Security hardening is a universal theme: Codex PSEC-4394, Gemini OAuth CVE + supply chain RCE + symlink escape, Claude Code safety filter false positives
- Subagent/agent reliability: Gemini has the most focus here (multiple P1 issues)
- V2 architecture: OpenCode explicitly migrating
- Local model support: Qwen (Ollama), Codex (Bedrock)
- IDE integration: Claude (VS Code), Copilot (multi-IDE), Qwen (IDEA, VS Code)

I should structure this clearly and professionally. Let me also use the formatting consistent with the previous reports (tables, emojis for emphasis, sections).

Let me draft this report now.</think>

# AI CLI 工具生态横向对比分析报告
**📅 数据日期：2026-07-02 ｜ 覆盖工具：Claude Code、Codex、Gemini CLI、Copilot CLI、Kimi Code CLI、OpenCode、Qwen Code**

---

## 一、生态全景

当前 AI CLI 工具生态呈现 **"七强并立、安全先行、架构迭代"** 三大特征。一方面，各主流工具已基本完成从「玩具式终端聊天」到「生产级代理框架」的能力跨越，正密集展开 V2 架构迁移（OpenCode）、后台代理治理（Claude Code）、子代理可信度攻坚（Gemini CLI）等深层能力建设；另一方面，**安全加固形成行业共识**——Codex 的 PSEC-4394 修复栈、Gemini CLI 的符号链接漏洞与 CI 供应链 RCE、Claude Code 的安全过滤器误判讨论，本周内集中爆发，反映出"代理执行越深入，安全债越显性"。与此同时，Windows 兼容性、子代理可靠性、本地/私有化部署、IDE 集成广度成为跨工具的共同痛点，社区已从"谁能用"转向"谁更稳、更可治理"。

---

## 二、各工具活跃度对比

> 📊 数据维度：统计窗口 2026-07-01 ~ 2026-07-02，Issue / PR 数为仓库公开数据。

| 工具 | Issues | PRs | 今日 Release | 综合活跃度 | 迭代阶段 |
|------|:---:|:---:|------|:---:|------|
| **Claude Code** | 50 | 2 | v2.1.198（GA 浏览器 + 后台通知） | ⭐⭐⭐⭐ | 功能扩展期 |
| **OpenAI Codex** | 50 | 20 | rust-v0.143.0-alpha.33 | ⭐⭐⭐⭐⭐ | 安全加固 + 多线并行 |
| **Gemini CLI** | 50 | 16 | v0.51.0-nightly（含 CVE 修复） | ⭐⭐⭐⭐⭐ | 质量打磨期 |
| **GitHub Copilot CLI** | 50 | **0** | v1.0.69-0 + v1.0.68 | ⭐⭐ | 稳定迭代（PR 流转偏慢）|
| **Kimi Code CLI** | **4** | 2 | 无 | ⭐ | 小型社区 |
| **OpenCode** | 50 | 10 | v1.17.13 | ⭐⭐⭐⭐ | V2 架构迁移期 |
| **Qwen Code** | 50 | 20 | v0.19.4 + v0.19.4-nightly | ⭐⭐⭐⭐⭐ | 性能与生态并行 |

**关键观察**：
- **Codex、Gemini、Qwen** 形成第一梯队活跃度（PR 均 ≥16）；
- **Copilot CLI** 在 0 PR 的情况下仍维持双版本发布，说明发布流程与代码评审出现一定脱节；
- **Kimi Code** 数据样本极小（4 Issue），但单条 Issue 评论密度（#640，15 条）反映核心用户的强参与度；
- 所有工具今日均触及"安全"或"稳定性"主题，但切入角度截然不同（详见第四节）。

---

## 三、共同关注的功能方向

以下为 ≥3 个工具社区同时聚焦的需求方向，反映行业级共识：

| 共同方向 | 涉及工具 | 具体诉求 |
|---------|---------|---------|
| **🔒 安全加固与执行可信** | Codex、Gemini、Claude Code | • Codex：PSEC-4394 修复栈（7 个 PR，路径/过滤器/合并驱动多 sink 拦截）<br>• Gemini：符号链接逃逸修复、OAuth CVE-2026-48931、CI 供应链 RCE<br>• Claude Code：安全过滤器误判（无人机 / RE / 安全研究等场景）|
| **🤖 子代理/Agent 可靠性** | Claude Code、Gemini、OpenCode | • Claude Code：后台代理通知钩子、状态恢复（v2.1.198）<br>• Gemini：挂死、误报 GOAL success、假成功（#22323、#21409、#25166）<br>• OpenCode：sub-agent 会话在侧栏消失、AGENTS.md 渐进式加载 |
| **🪟 Windows 平台兼容性** | Claude Code、Codex、OpenCode、Kimi | • Codex：app 崩溃、sandbox 拒绝、Defender 误报、安装路径不可选<br>• Claude Code：多行粘贴回归（已修）、PDF 沙箱限制<br>• OpenCode：路径分隔符导致会话丢失（#21340 家族集中关闭）<br>• Kimi：Windows Terminal 剪贴板图片粘贴 |
| **🔌 MCP 生态成熟化** | Codex、Gemini、Qwen、Claude Code | • Codex：rmcp 升级、Meta Ads OAuth、Azure 端点兼容<br>• Gemini：`read_mcp_resource` wrapUntrusted 包裹<br>• Qwen：MCP 能力发现重试与指数退避（#6158）<br>• Claude Code：MCP 配置加载与重载优化（v1.0.68） |
| **🌐 IDE 集成广度** | Claude Code、Copilot、Qwen | • Claude Code：VS Code Diff Review UI（#33932，👍133，全场最高）<br>• Copilot CLI：IntelliJ、VS Code Server、剪贴板兼容<br>• Qwen Code：IDEA ask_user_question、VS Code Accept/Close Diff Editor |
| **🧠 多模型与 BYOK 灵活性** | Copilot、Codex、Qwen、OpenCode | • Copilot：多 BYOK 模型（#3282）、按模式默认模型（#2958）<br>• Codex：Bedrock Mantle 端点更新<br>• Qwen：fallback model chain（#6116）<br>• OpenCode：`--model free` 随机零成本模型、ChatGPT OAuth 路由 |
| **📊 可观测性与遥测** | Codex、Claude Code、Qwen | • Codex：per-request TTFT 遥测、多智能体通信日志<br>• Claude Code：后台代理 hook 通知（v2.1.198）<br>• Qwen：worker stderr 凭据脱敏 + 多模态 payload 瘦身 |

---

## 四、差异化定位分析

| 工具 | 核心定位 | 目标用户 | 关键技术路线 | 当下聚焦 |
|------|---------|---------|------------|---------|
| **Claude Code** | 深度集成 Claude 生态的全栈代理 | 专业开发者、企业工程团队、垂直科学用例 | MCP 优先 + 多端统一（Web/Chrome/IDE/TUI） | 后台代理治理、VS Code 体验、垂直科学场景 |
| **OpenAI Codex** | 通用代码生成 + 企业级安全治理 | 中大型工程团队、企业 Azure/AWS 用户 | 安全优先（PSEC 系列）+ 多后端（OpenAI/Azure/Bedrock） | 安全加固 + Windows 体验系统性回应 |
| **Gemini CLI** | 强大的多模态 + 子代理编排 | Google Cloud 用户、复杂 Agent 编排需求者 | Subagent 体系 + Auto Memory + Egress Cloud Run | 子代理可信度、AST 感知工具、Auto Memory 重塑 |
| **GitHub Copilot CLI** | GitHub 原生体验 + 多 IDE 集成 | GitHub 重度用户、企业 DevOps | 强绑定 GitHub 生态（PR/Issue/Actions）| 插件作用域、自定义主题、企业 OAuth |
| **Kimi Code CLI** | 长上下文 + 中文场景优化 | 国内开发者、长任务场景 | Subagent 并发 + 长 Goal 管理 + Web/CLI 双端 | 稳定性债 + 品牌统一 + Windows 体验 |
| **OpenCode** | 高度可扩展的开源代理框架 | 工具爱好者、开源贡献者、自托管需求 | V2 架构（client/sdk/server/plugins）+ Provider 中立 | V2 迁移、插件化、上下文工程 |
| **Qwen Code** | 本地/私有化部署 + 中文社区 | 阿里云百炼用户、私有化部署场景 | Daemon 架构 + LSP 热重载 + 多通道（qqbot/web）| daemon 冷启动、本地 Ollama 适配、CI 治理 |

**关键差异点**：

1. **生态绑定深度** —— Copilot CLI 与 GitHub 生态强绑定（PR、Actions 闭环），Claude Code 与 Claude 生态闭环（Web + Chrome + VS Code），Codex 走"多云中立"（OpenAI/Azure/Bedrock），OpenCode/Qwen 强调**可自托管**。

2. **安全姿态** —— Codex 是**主动加固**（PSEC-4394 修复栈），Gemini 是**漏洞响应**（连续多个高危修复），Claude Code 是**策略争议**（安全过滤器误判社区反弹）—— 三种姿态代表三种安全成熟度曲线。

3. **架构演进路径** —— OpenCode 处于**显式 V2 迁移**，Gemini 在**子代理层面迭代**，Claude Code 在**后台代理层扩展**，Kimi 在**多端整合 + 品牌统一**，分化明显。

4. **中文市场渗透** —— Qwen Code 围绕阿里云百炼 + qqbot 形成生态闭环；Kimi Code 主打 Web/CLI 双端；Claude Code、Codex 在中文社区以"海外工具"身份被使用，社区反馈多以英文为主。

---

## 五、社区热度与成熟度

### 🏆 社区热度梯度

**第一梯队（万人级参与、企业级落地）**
- **OpenAI Codex**：评论密度与 PR 频次最高，企业安全事件驱动，开发者参与深度强
- **Claude Code**：单 Issue 点赞数全场最高（#33932，👍133），社区"投票式共识"显著
- **Gemini CLI**：内部"maintainer only + workstream-rollup"标签占比高，反映 Google 内部工程化运作

**第二梯队（中型活跃社区、垂直优势）**
- **Qwen Code**：PR 数量与 Codex 持平（20 条），但问题域更集中（daemon + 本地化 + CI）
- **OpenCode**：V2 架构转型形成强话题性，开发者关注架构演进
- **GitHub Copilot CLI**：50 Issue 但 0 PR 的反差表明流程管理待优化

**第三梯队（小型但聚焦）**
- **Kimi Code CLI**：4 Issue 但 #640 高评论密度说明核心用户粘性强

### 🌱 成熟度阶段判断

| 阶段 | 工具特征 | 代表工具 |
|------|---------|---------|
| **架构迁移期** | 重大版本切换、模块级重构 | OpenCode（V2 迁移）、Qwen Code（daemon 重构）|
| **能力扩展期** | 新功能密集上线、用户体验打磨 | Claude Code（Chrome GA、/dataviz）、Copilot CLI（多 BYOK、kimi-k2.7）|
| **质量打磨期** | 子代理稳定、安全加固、边缘场景修复 | Gemini CLI、OpenAI Codex |
| **生态整合期** | 品牌统一、多端协同、SDK 一致性 | Kimi Code CLI |

---

## 六、值得关注的趋势信号

### 📡 信号 1：安全债集中爆发，"代理安全"成为头号工程议题

- **数据支撑**：Codex 7 个 PR 集中在 Git filter/merge driver 拦截，Gemini 4 条安全 PR（symlink escape、OAuth CVE、supply chain RCE、mcp_resource wrap），Claude Code 大量误判 issue。
- **趋势解读**：随着 Agent 拥有 shell、patch、Git 操作等高权限能力，"仓库配置即代码"的攻击面被全面打开——`.gitattributes` 中的 clean/smudge filter、`git config` 中的合并驱动、symlink 仓库布局都成为新型攻击向量。**预计 2026 下半年，所有头部 CLI 都将进入"安全加固竞赛"**。
- **开发者参考**：使用 Agent 操作仓库时，应主动审查 `.git/config`、`.gitattributes`；企业落地应建立 Agent 操作的审计与回滚机制。

### 📡 信号 2：V2 架构迁移潮，"插件化 + 上下文工程"成主线

- **数据支撑**：OpenCode 9 个高评论 issue 围绕 V2 client/sdk/plugins/MCP 迁移；Gemini 的 AST 感知工具调研（#22745）、Component 级评估体系（#24353）持续推进。
- **趋势解读**：V2 不再是版本号，而是**架构哲学的代际切换**——从"工具调用"走向"插件编排 + 渐进式上下文管理"。`AGENTS.md` 渐进加载（#34341）、Auto Memory 重塑（Gemini #26516–#26525）都是该趋势的具体体现。
- **开发者参考**：如果是为 AI 编程工具编写插件/扩展，应优先关注 OpenCode Plugin API 与 Gemini 的 Subagent 契约——它们正在成为事实标准候选。

### 📡 信号 3：Windows 平台从"二等公民"走向"系统性差距"

- **数据支撑**：Codex 5 个高评论 Issue 与 Windows 直接相关，OpenCode 一整族路径分隔符 Bug 集中关闭，Claude Code 多行粘贴回归 + PDF 沙箱问题，Kimi Code 剪贴板粘贴修复。
- **趋势解读**：当 macOS/Linux 用户占比下降、企业 Windows 工作站回归，**Windows 平台的边缘 Bug 已不再是"个别报告"而是"系统性差距"**。头部工具的 Windows 体验将很快成为市场份额的决定性因素。
- **开发者参考**：Windows + WSL + PowerShell + Windows Terminal 组合的兼容测试矩阵值得自建；建议企业用户在选型时优先关注目标工具的 Windows CI 状态。

### 📡 信号 4：本地/私有化部署成为"第二战场"

- **数据支撑**：Qwen Code 围绕 Ollama/qwen3-coder 的多个 issue（#1280、#1281、#6144）、OpenCode 的 `--model free`（#34794）、Codex 对 Bedrock 的更新（#23650）、Copilot 的 BYOK 灵活性（#3282）。
- **趋势解读**：随着数据合规要求趋严与开源模型能力提升，**"云端主力 + 本地兜底"** 的双轨部署模式正在成为企业标配。这要求 CLI 工具在 provider 中立性、BYOK 灵活性、本地模型适配上同步发力。
- **开发者参考**：评估 CLI 工具时，"是否支持 OpenAI 兼容协议"、"是否能跑 Ollama/vLLM"、"BYOK 是否支持热切换"应成为硬性指标。

### 📡 信号 5：可观测性从"加分项"变为"基础设施"

- **数据支撑**：Claude Code 后台代理 hook（v2.1.198）、Codex per-request TTFT 遥测、多智能体通信日志、Qwen worker stderr 脱敏、Gemini ACP 模式下 cached/thought tokens 报告。
- **趋势解读**：当 Agent 后台执行 30 分钟以上的任务成为常态，**没有可观测性 =

---

## 各工具详细报告

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills 社区热点

> 数据来源: [anthropics/skills](https://github.com/anthropics/skills)

<think>
The user wants me to analyze the GitHub data from anthropics/skills repository and generate a community hot report. Let me carefully analyze the data provided.

Let me look at the PRs and Issues:

**Top PRs (by some popularity metric - though comments are undefined, the order seems to be by significance or activity):**

1. #1298 - fix(skill-creator): run_eval.py always reports 0% recall — Windows stream reading, trigger detection, parallel workers
2. #514 - Add document-typography skill: typographic quality control for generated documents
3. #538 - fix(pdf): correct case-sensitive file references in SKILL.md
4. #486 - Add ODT skill — OpenDocument text creation
5. #210 - Improve frontend-design skill clarity and actionability
6. #83 - Add skill-quality-analyzer and skill-security-analyzer to marketplace
7. #541 - fix(docx): prevent tracked change w:id collision with existing bookmarks
8. #539 - fix(skill-creator): warn on unquoted description with YAML special characters
9. #1367 - feat(skills): add self-audit — mechanical verification + four-dimension reasoning quality gate (v1.3.0)
10. #1099 - skill-creator: fix run_eval.py crash on Windows
11. #1050 - skill-creator: fix Windows subprocess + encoding bugs
12. #723 - feat: add testing-patterns skill
13. #509 - docs: add CONTRIBUTING.md
14. #362 - Fix skill-creator UTF-8 panic on multi-byte characters
15. #361 - Detect unquoted YAML special characters in description fields
16. #181 - Add SAP-RPT-1-OSS predictor skill
17. #95 - Add comprehensive system documentation and flowcharts
18. #1323 - fix(skill-creator): run_eval trigger detection misses real skill name
19. #1302 - Add color-expert skill
20. #806 - feat: add sensory skill — native macOS automation via AppleScript

**Top Issues (by comment count):**

1. #492 - Security: Community skills distributed under anthropic/ namespace enable trust boundary abuse (34 comments, 2 👍)
2. #228 - Enable org-wide skill sharing in Claude.ai (14 comments, 7 👍)
3. #556 - run_eval.py: claude -p never triggers skills/commands (0% trigger rate) (12 comments, 7 👍)
4. #62 - All my skills have disappeared and now i get errors (10 comments, 2 👍)
5. #202 [CLOSED] - skill-creator should be updated to best practice (8 comments, 1 👍)
6. #1329 - Proposing a second skill: compact-memory (7 comments, 0 👍)
7. #412 [CLOSED] - Skill proposal: agent-governance (6 comments)
8. #189 - document-skills and example-skills plugins install identical content (6 comments, 9 👍)
9. #1175 [CLOSED] - Concerns regarding Security and Context Window when handling SharePoint Online (4 comments)
10. #29 - Usage with bedrock (4 comments)
11. #16 - Expose Skills as MCPs (4 comments)
12. #1362 - web-artifacts-builder: bundle/init scripts fail on pnpm ≥10.1 (3 comments)
13. #1169 - skill-creator description-optimisation loop: recall=0% on every iteration (3 comments, 1 👍)
14. #1061 - Windows compatibility: skill-creator scripts fail (3 comments, 1 👍)
15. #184 [CLOSED] - agentskills.io page is giving "too many redirects" error (3 comments, 4 👍)

Now let me analyze and create the report in Chinese (the user asked in Chinese).

Key observations:

1. **Top Skills by PR activity (notable themes):**
   - **Skill-creator fixes dominate** - Multiple PRs (#1298, #1099, #1050, #1323, #362, #361, #539) all focus on fixing the skill-creator's `run_eval.py` - this is a major pain point
   - **Windows compatibility** is a recurring theme (#1099, #1050, #1061)
   - **Document skills** are being added/improved: typography (#514), ODT (#486), PDF (#538), DOCX (#541)
   - **Quality and security analyzers** (#83) - meta skills
   - **New domain skills**: color-expert (#1302), testing-patterns (#723), sensory/macOS automation (#806), SAP-RPT-1-OSS (#181)
   - **Self-audit skill** (#1367) - v1.3.0 with four-dimension reasoning

2. **Top Issues themes:**
   - **Security/trust boundary** (#492) - 34 comments, biggest concern
   - **Org-wide sharing** (#228) - 14 comments, 7 likes
   - **run_eval.py trigger detection** (#556) - 12 comments, 7 likes - widespread bug
   - **Skill creator best practices** (#202) - needs updating
   - **Agent governance** (#412) - new proposal
   - **Compact memory** (#1329) - new proposal
   - **Duplicate plugin content** (#189) - 6 comments, 9 likes
   - **MCP integration** (#16) - expose skills as MCPs

3. **High potential PRs to be merged soon:**
   - #1298 (most recent, fixes fundamental run_eval.py issue)
   - #1367 (self-audit v1.3.0 - very recent)
   - #1302 (color-expert)
   - #806 (sensory skill)
   - #723 (testing-patterns)
   - #514 (document-typography)
   - #486 (ODT skill)
   - #1323 (run_eval fix)
   - #210 (frontend-design improvement)

4. **Ecosystem insights:**
   The most concentrated demand is: **infrastructure quality and trust** - specifically fixing the skill-creator evaluation pipeline (run_eval.py) that is fundamentally broken, addressing Windows compatibility, and resolving the trust/security boundary issue with community skills impersonating official ones.

Let me structure this as a professional Chinese report.

I need to be careful - the user said "评论/关注度最高" (highest comments/attention) for top skills. Since comments are "undefined" in the PR data, I should use the ordering provided and other signals (date, themes, related issues) to identify the most discussed skills.

Let me write a comprehensive but concise report.
</think>
# Claude Code Skills 社区热点报告
**数据截止：2026-07-02 | 数据源：anthropics/skills**

---

## 1. 热门 Skills 排行（Top PRs）

### 🥇 #1298 — 修复 skill-creator 评估流水线（核心基建）
- **功能**：修复 `run_eval.py` 始终报告 `recall=0%` 的严重 Bug（关联 10+ 独立复现），同时修复 Windows 流读取、触发检测、并行 Worker
- **讨论热点**：这是 #556 报告问题的"权威修复"，被 issue #556（12 评论，7 👍）和 #1169（3 评论）反复提及。整个描述优化循环目前都在"对着噪声优化"
- **状态**：OPEN | https://github.com/anthropics/skills/pull/1298

### 🥈 #1367 — self-audit 技能 v1.3.0（四维推理质量门）
- **功能**：交付前的"自审"技能——先做机械文件校验，再按损害严重度做四维推理审计，跨项目/技术栈/模型通用
- **讨论热点**：最活跃的近期 PR（06-28 创建、07-02 仍在更新），把"AI 自我纠错"做成可复用的工程实践
- **状态**：OPEN | https://github.com/anthropics/skills/pull/1367

### 🥉 #514 — document-typography 技能
- **功能**：解决 AI 生成文档的排版质量问题（孤儿词、寡妇段落、编号错位等）
- **讨论热点**：用户"几乎从不主动要求好排版"，但每个文档都受影响——典型的"普适型痛点"技能
- **状态**：OPEN | https://github.com/anthropics/skills/pull/514

### #486 — ODT 技能（OpenDocument 读写）
- **功能**：覆盖 `.odt`/`.ods` 的创建、模板填充、HTML 转换，对应 ISO 标准的开源办公格式
- **讨论热点**：补齐 PDF/DOCX 之外的文档生态，与 #538（PDF 大小写）、#541（DOCX 书签冲突）共同构成"文档技能三件套"
- **状态**：OPEN | https://github.com/anthropics/skills/pull/486

### #83 — skill-quality-analyzer + skill-security-analyzer
- **功能**：元技能——对任意 Claude Skill 做 5 维质量分析与安全审计，输出 0-100 分
- **讨论热点**：与 #492（社区技能冒充官方，安全 34 评论）形成强呼应，是生态自我治理的关键工具
- **状态**：OPEN | https://github.com/anthropics/skills/pull/83

### #723 — testing-patterns 技能
- **功能**：完整测试栈（Testing Trophy、AAA、React Testing Library、契约测试、E2E）
- **讨论热点**：补齐"代码质量三件套"（编码规范→测试模式→CI）中的测试一环
- **状态**：OPEN | https://github.com/anthropics/skills/pull/723

### #1302 — color-expert 技能
- **功能**：颜色知识全谱（ISCC-NBS / Munsell / OKLCH / OKLAB / CAM16 等），含"何时用什么"决策表
- **讨论热点**：垂直专业知识型技能的代表作，与 frontend-design 形成色彩×前端组合
- **状态**：OPEN | https://github.com/anthropics/skills/pull/1302

### #806 — sensory 技能（macOS 原生自动化）
- **功能**：用 `osascript` 替代基于截图的 Computer Use，分两级权限（开箱即用 vs. 需要辅助功能授权）
- **讨论热点**：为 macOS 用户提供"系统级操作"的安全路径，是 Computer Use 替代方案的典型尝试
- **状态**：OPEN | https://github.com/anthropics/skills/pull/806

---

## 2. 社区需求趋势（Issues 提炼）

| 需求方向 | 代表 Issue | 关注度 | 状态 |
|---|---|---|---|
| **🔒 安全/信任边界** | #492 社区技能冒充 `anthropic/` 命名空间 | **34 评论 / 2 👍** | OPEN（最热门） |
| **🏢 组织级共享** | #228 在 Claude.ai 启用 org-wide 技能共享 | 14 评论 / **7 👍** | OPEN |
| **🛠️ 评估引擎稳定性** | #556 run_eval.py 触发率 0% | 12 评论 / **7 👍** | OPEN |
| **🤖 智能体治理** | #412 agent-governance 安全模式 | 6 评论 | CLOSED |
| **🧠 压缩记忆** | #1329 compact-memory（符号化代理状态） | 7 评论 | OPEN |
| **🔌 Skills → MCP** | #16 把 Skills 暴露为 MCP 接口 | 4 评论 | OPEN（架构级） |
| **🧩 去重/打包** | #189 document-skills 与 example-skills 重复内容 | 6 评论 / **9 👍** | OPEN（高赞） |
| **☁️ 跨平台支持** | #29 在 AWS Bedrock 中使用 Skills | 4 评论 | OPEN |
| **🪟 Windows 兼容** | #1061 skill-creator 在 Win Python 3.14 全面崩溃 | 3 评论 | OPEN |

**趋势归纳**：
1. **基础设施类诉求最强烈**——评估引擎、Windows 兼容、UTF-8 处理成为"卡脖子"问题
2. **安全与治理**正从"加分项"变为"必选项"
3. **企业级能力**（org 共享、跨平台、SharePoint 集成）需求上升
4. **架构演进**——Skills → MCP 暴露、压缩记忆、智能体治理，指向"标准化与互操作"

---

## 3. 高潜力待合并 PR（即将落地）

| PR | 主题 | 潜力信号 |
|---|---|---|
| **#1298** | run_eval.py 全面修复 | 关联最热门 issue #556（12 评论），3 个同类修复（#1099/#1050/#1323）并联提交，是"必合"级 |
| **#1367** | self-audit v1.3.0 | 2 天内仍在更新，机制完备，覆盖"通用"场景 |
| **#1323** | run_eval 触发检测修复 | 与 #1298 互为补丁，作者明确指出"首次非 Skill 工具就放弃"的根因 |
| **#541** | DOCX 书签 w:id 冲突修复 | 解决真实文件损坏 Bug，影响所有使用 tracked changes 的用户 |
| **#538** | PDF 大小写修复 | 极简单行修复，跨平台用户痛点明确 |
| **#362 / #361** | UTF-8 / YAML 特殊字符 | 与 #539 互补，是 skill-creator 鲁棒性的最后拼图 |
| **#210** | frontend-design 改进 | 头部 PR 之一（1 月创建），长期打磨中 |
| **#509** | CONTRIBUTING.md | 关闭社区健康度（25%）最关键缺口，门槛低 |

---

## 4. Skills 生态洞察（一句话总结）

> **社区最集中的诉求是"把基础设施补齐"**——`skill-creator` 的评估循环、跨平台兼容性、命名空间安全这三个底层问题，已经从"开发者抱怨"升级为"阻碍整个生态扩张的瓶颈"；解决它们比新增任何炫酷的领域技能都更紧迫。

---

### 📌 给 Skill 开发者的建议
1. **优先参与基建修复**（skill-creator、Windows、UTF-8）——Review 密度低、影响面最大
2. **避开 `anthropic/` 命名空间**（#492）以免触发安全审计
3. **新技能聚焦"跨领域可复用"**（如 self-audit、testing-patterns、typography）而非垂直行业技能
4. **以 PR 形式提交比 Issue 提案更易推进**——多数新技能提案卡在设计阶段，PR 化后明显加速

---

<think>Let me analyze the GitHub data for Claude Code community dynamics on 2026-07-02 and generate a comprehensive daily report in Chinese.

Key observations from the data:

1. **Latest Release (v2.1.198)**: 
   - Claude in Chrome now generally available
   - Background agent notifications via `Notification` hook
   - New `/dataviz` skill for chart/dashboard design

2. **Hot Issues**:
   - #34820 - claude.ai visualize feature broken (93 comments, 39 likes) - very high engagement
   - #33932 - VS Code Extension diff review UI feature request (27 comments, 133 likes) - very popular
   - #47658 - Multiline paste broken on Windows (closed)
   - #62657 - Make AskUserQuestion tool timeout configurable
   - #68534 - Inherited stale CLAUDE_CODE_SESSION_ID causes silent transcript loss
   - #73105 - Make AskUserQuestion timeout configurable
   - #73125 - AskUserQuestion: No response after 60s bug
   - Many "false positive" safety filter bugs from @sworrl about drone/RE work

3. **Trends**:
   - Safety filter false positives (many duplicate issues)
   - AskUserQuestion timeout issues
   - VS Code extension improvements
   - Background agent hooks
   - Windows-specific bugs

4. **PRs**:
   - #72866 - docs typo fix
   - #72543 - Create Cha (incomplete)

Let me structure the report professionally.</think>

# Claude Code 社区动态日报

**日期：2026-07-02**

---

## 📌 今日速览

今日 Claude Code 发布 **v2.1.198**，三大更新聚焦浏览器集成与代理能力：Chrome 版 Claude 正式 GA、`claude agents` 后台通知钩子上线、新增 `/dataviz` 数据可视化技能。社区层面，**AskUserQuestion 工具的 60 秒超时问题**集中爆发，多位开发者反馈该机制导致工作流被迫中断；安全过滤器误判（尤其针对无人机/RE 场景）的重复 issue 大量涌入仓库。

---

## 🚀 版本发布

### v2.1.198

| 类别 | 更新内容 |
|------|---------|
| 🌐 浏览器集成 | **Claude in Chrome 正式 GA**，可在浏览器内直接调用 Claude |
| 🤖 代理通知 | `claude agents` 新增后台代理通知，会话需输入或完成时触发 `Notification` 钩子（`agent_needs_input` / `agent_completed`） |
| 📊 技能扩展 | 新增 `/dataviz` 技能，提供图表与仪表板设计指南 |

> 背景代理的可观测性得到显著增强，开发者可通过 hook 机制接入自定义通知流。

---

## 🔥 社区热点 Issues（Top 10）

| # | Issue | 关注度 | 要点 |
|---|-------|--------|------|
| 1 | [#34820](https://github.com/anthropics/claude-code/issues/34820) claude.ai 可视化功能失效 | 💬93 👍39 | `claudemcpcontent.com` DNS 解析失败（NXDOMAIN），被标记 invalid 但社区持续关注 |
| 2 | [#33932](https://github.com/anthropics/claude-code/issues/33932) VS Code 扩展：Diff Review UI | 💬27 👍133 | **获赞最高**，要求提供类似 GitHub Copilot Edits 的差异审查界面 |
| 3 | [#73125](https://github.com/anthropics/claude-code/issues/73125) AskUserQuestion 60s 超时"极度危险" | 💬2 | Bedrock 平台下超时后自动跳过回答，用户称之为"EXTREME DANGER" |
| 4 | [#62657](https://github.com/anthropics/claude-code/issues/62657) AskUserQuestion 超时可配置 | 💬4 👍6 | 要求恢复或可设置超时时长，影响日常交互节奏 |
| 5 | [#73105](https://github.com/anthropics/claude-code/issues/73105) AskUserQuestion 超时配置 | 💬2 👍3 | 与 #62657 重复但新增用户呼声——旧版本无限等待更受期待 |
| 6 | [#68534](https://github.com/anthropics/claude-code/issues/68534) 继承陈旧 SESSION_ID 导致转录丢失 | 💬3 | 标记为 **data-loss**，从 Claude Code shell 启动的子进程会继承错误的会话 ID |
| 7 | [#47658](https://github.com/anthropics/claude-code/issues/47658) Windows 多行粘贴失效 | 💬8 ✅CLOSED | v2.1.105 回归问题，已修复 |
| 8 | [#65089](https://github.com/anthropics/claude-code/issues/65089) Windows PDF Read 工具失效 | 💬1 👍3 | 沙箱拒绝 `pdftoppm`，影响 Windows 上的 PDF 阅读能力 |
| 9 | [#73149](https://github.com/anthropics/claude-code/issues/73149) Sonnet 5 误报"上下文超限" | 💬1 | `/context` 显示低占用却仍触发限制，可能与 skill 加载相关 |
| 10 | [#73159](https://github.com/anthropics/claude-code/issues/73159) 从 Agent Panel 恢复会话丢失主代理状态 | 💬0 | macOS 2.1.198 上首次出现，可能与新版 Chrome GA 改动相关 |

---

## 🔧 重要 PR 进展

| # | PR | 内容 |
|---|----|----|
| 1 | [#72866](https://github.com/anthropics/claude-code/pull/72866) 修复 README 大小写 | 将 "Github" 更正为 "GitHub" |
| 2 | [#72543](https://github.com/anthropics/claude-code/pull/72543) Create Cha | 新增内容（描述不完整，待 review） |

> 📉 过去 24 小时 PR 活跃度较低，仅 2 条更新；社区贡献以 issue 反馈为主。

---

## 📈 功能需求趋势

通过对 50 条 issue 聚类分析，社区诉求集中在以下方向：

### 1. **IDE 集成体验优化**（最热）
- VS Code 扩展的 Diff Review UI（#33932，133 👍）
- TUI/VS Code 跨平台一致性
- 代理面板的状态持久化

### 2. **后台代理（Background Agents）治理**
- 通知机制（已在 v2.1.198 部分解决）
- 会话状态隔离与恢复
- 子代理的安全策略误判

### 3. **可配置性与可控性**
- AskUserQuestion 超时时长（#62657、#73105）
- 环境变量与会话 ID 的作用域管理
- 沙箱策略的白名单机制

### 4. **平台兼容性**
- Windows 平台专项修复（多行粘贴、PDF 阅读、沙箱）
- Bedrock / Anthropic API 多后端一致性

### 5. **数据可视化与新兴场景**
- `/dataviz` 技能上线（v2.1.198）
- 基因组学等垂直领域用例探索（#73160）

---

## 🧑‍💻 开发者关注点

### ⚠️ 高频痛点

1. **AskUserQuestion 超时强制跳过** —— 从"无限等待"到"60 秒自动跳过"的变更被多位开发者视为**回归性问题**，影响需要思考时间的复杂决策场景。

2. **安全过滤器过度拦截** —— 单一用户（@sworrl）在 24 小时内提交近 **10 条**重复 issue，涉及无人机固件分析、协议 RE、Web 安全加固等"合理但敏感"场景，全部被标记为 duplicate。这反映出 **GlassFalcon / ClAudit 安全策略对安全研究和 FOSS 项目的误判** 是当前最大体验障碍。

3. **会话状态丢失风险** —— `CLAUDE_CODE_SESSION_ID` 环境变量在父子进程间错误继承（#68534），可能导致历史转录静默丢失，无任何告警，对长期项目危害极大。

4. **Windows 平台边缘问题** —— 多行粘贴回归（已修复但仅 8 评论）、PDF 读取沙箱限制，反映 Windows 在 Claude Code 生态中仍属"二等公民"。

### 💡 隐性需求

- **可观测性**：后台代理的 hook 通知（v2.1.198）正契合开发者将 Claude Code 接入 CI/CD 与自动化管道的诉求。
- **可视化能力**：`/dataviz` 技能预示官方将"图表/仪表板"从生成式输出升级为受控技能，开发者期待后续能与 IDE 渲染层联动。
- **垂直科学用例**：基因组学（#73160）、机器人/无人机调试等领域开始试探 Claude Code 的能力边界，安全策略需更细粒度。

---

> 📊 **数据周期**：2026-07-01 ~ 2026-07-02 | 数据源：[github.com/anthropics/claude-code](https://github.com/anthropics/claude-code)

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

<think>The user wants me to generate a Chinese daily report for the OpenAI Codex community based on GitHub data from 2026-07-02. Let me analyze the data carefully and structure the report.

Let me first review the data:

**Releases (past 24 hours):**
- rust-v0.143.0-alpha.33

**Issues (50 total, showing top 30 by comments):**
1. #29320 - Codex app only displays (Something went wrong…) - 28 comments, Windows
2. #26104 - Desktop Codex cannot open older chat sessions - 23 comments, Windows
3. #4003 - Patched files have mixed line endings on Windows - 22 comments, 66 likes
4. #29000 - Codex CLI 0.141.0 crashes with SIGTRAP - 20 comments, CLOSED
5. #16335 - TUI/CLI performance regression from 116 to 117 - 15 comments
6. #14345 - Directories not trusted by default - 15 comments
7. #30009 - apply_patch fails with windows sandbox error - 14 comments
8. #30132 - automation_update tool json causing error for azure - 13 comments
9. #20880 - App silently creates empty ~/Documents/Codex folder - 10 comments, 31 likes
10. #24103 - Official Meta Ads MCP fails OAuth login - 10 comments
11. #26869 - Codex Desktop app-server leaks child processes - 10 comments
12. #28078 - Xcode 27 beta Codex sign-in fails for ChatGPT Pro - 8 comments
13. #21074 - Feature request: allow choosing install location on Windows - 8 comments
14. #23650 - amazon-bedrock provider uses outdated Mantle endpoint - 7 comments
15. #13673 - Windows Codex APP installation error - 5 comments
16. #17529 - Upgrade rmcp dependency to fix MCP HTTP/Cloudflare - 4 comments
17. #30527 - Windows 10: Codex app triggers Microsoft Defender - 4 comments
18. #30875 - GPT-5.5 context window oscillates - 4 comments
19. #30015 - Codex native installation on Windows fails to update - 4 comments
20. #29311 - Unable to send messages in Codex App - 3 comments, CLOSED
21. #30726 - Codex account never received bankable reset credits - 3 comments
22. #30686 - Why doesn't my codex have a reset limit - 3 comments
23. #30884 - Desktop app crashes with websocket closed - 3 comments
24. #29087 - stream disconnected before completion - 3 comments
25. #30800 - /fast command goes through to chat - 3 comments
26. #29413 - Windows Desktop + WSL workspace node_repl rejects - 3 comments
27. #30824 - Codex Desktop crashes with EXC_BREAKPOINT/SIGTRAP - 2 comments
28. #23083 - Support workspace profiles - 2 comments
29. #30889 - Codex Desktop Chrome bridge unavailable - 2 comments
30. #30550 - Codex Desktop fails creating worktree for branch - 2 comments

**Pull Requests (20 shown):**
1. #30883 - Emit per-request TTFT completion telemetry
2. #30887 - Speed up reverse history search
3. #30850 - Block selected Git filters before staging patch paths
4. #30872 - Log multi-agent communication lifecycle (CLOSED)
5. #30627 - Elicitations: Move to shared ElicitationService
6. #30863 - Report structured Git status refusals
7. #30854 - Block selected merge drivers before three-way patch application
8. #30848 - Block selected executable Git filters before patch application
9. #30882 - Preserve line endings when applying patches
10. #30880 - Detect Codex installs managed by Vite+
11. #30879 - Handle mixed-case URLs in Windows command safety
12. #30516 - Add explicit agent communication logging (CLOSED)
13. #30867 - Consolidate multi-agent v2 communication sends (CLOSED)
14. #30833 - Bind Git worktree helpers to a trusted executable
15. #30844 - Confine staged patch paths to the parent worktree
16. #30837 - Derive effective patch paths through Git
17. #30876 - Support interleaved response items
18. #30752 - Wire reasoning summary delivery configuration
19. #30315 - Add generated token auth to app-server WebSockets
20. #30871 - Collapse remote installed plugin requests

Now let me organize this into the requested structure.

**Today's Highlights (Today Overview):**
- New rust alpha release 0.143.0-alpha.33
- Multiple Windows-specific bugs continue to plague users
- A cluster of security-related PRs around Git filter/merge driver execution (#30833, #30837, #30844, #30848, #30850, #30854, #30863) by @bookholt-oai
- Line endings bug #4003 (66 likes) and related fix #30882
- New telemetry PR #30883 for per-request TTFT (NVIDIA requirement)

**Key themes:**
1. Windows compatibility issues dominate
2. Git/patch security hardening (multiple PRs)
3. Performance regressions being addressed
4. Multi-agent v2 communications consolidation
5. Reasoning summary delivery config
6. MCP integration issues (rmcp upgrade, OAuth)

Let me write the report now in Chinese.</think>

# OpenAI Codex 社区动态日报
**📅 2026-07-02**

---

## ⚡ 今日速览

今日 Codex 仓库活跃度聚焦于两大主线:其一,**Windows 平台的稳定性问题持续发酵**,多个高评论数 Issue 集中在 app 崩溃、sandbox 异常与安装/更新失败,显示该平台仍是用户主要痛点;其二,**围绕 Git 操作的安全加固形成 PR 集群**,@bookholt-oai 连续提交了 6 个相关 PR,从路径校验、可执行过滤器拦截、合并驱动阻断到结构化状态拒绝,体现了 PSEC-4394 的整体修复栈。同期 rust 二进制线发布了 0.143.0-alpha.33 预发布版本。

---

## 🚀 版本发布

**rust-v0.143.0-alpha.33** 已发布([查看](https://github.com/openai/codex/releases))
- 属于 0.143.0 系列的第 33 个 alpha 预发布,面向早期测试者
- 官方 Release Notes 内容较简略,建议配合 CHANGELOG 跟踪具体变更

---

## 🔥 社区热点 Issues

| # | Issue | 热度 | 重要性 |
|---|-------|------|--------|
| 1 | [#4003](https://github.com/openai/codex/issues/4003) **Windows 文件补丁后出现混合换行符** | 💬22 👍66 | 长期高赞 Issue,涉及 Windows LF/CRLF 兼容,直接影响所有 Windows 用户的文件输出正确性,今晨已由 PR #30882 进行修复 |
| 2 | [#20880](https://github.com/openai/codex/issues/20880) **App 每次启动静默创建空的 ~/Documents/Codex 文件夹** | 💬10 👍31 | 用户体验类问题,👍 量远高于评论数,反映社区对默认行为"侵犯文件系统的零容忍态度",亟需添加退出/配置项 |
| 3 | [#29320](https://github.com/openai/codex/issues/29320) **Codex App 仅显示 "Something went wrong…"** | 💬28 👍2 | 评论数最高,Windows 11 25H2 上的关键性崩溃,波及 Plus 用户,需排查 Store/MSIX 包更新后兼容问题 |
| 4 | [#14345](https://github.com/openai/codex/issues/14345) **--dangerously-bypass-approvals-and-sandbox 不再默认信任目录** | 💬15 👍21 | 涉及 CLI 安全策略的退化行为,影响工作流自动化,具有破坏性变更性质,值得运维/SRE 关注 |
| 5 | [#26104](https://github.com/openai/codex/issues/26104) **Desktop 升级后无法打开旧 chat session** | 💬23 👍0 | 数据兼容性问题,可能造成用户历史会话丢失,需官方明确数据迁移策略 |
| 6 | [#29000](https://github.com/openai/codex/issues/29000) **Codex CLI 0.141.0 在 Intel macOS 上 SIGTRAP 崩溃** | 💬20 👍16 | ✅ 已 CLOSED,但 macOS x86_64 用户受影响面广,建议升级前先确认兼容性矩阵 |
| 7 | [#30132](https://github.com/openai/codex/issues/30132) **automation_update 工具 JSON 以 "oneOf" 开头,Azure OpenAI 端点报错** | 💬13 👍15 | Azure 集成回归,影响企业 Azure 用户使用 Code Mode/自动化,需在序列化层修复 |
| 8 | [#30009](https://github.com/openai/codex/issues/30009) **Windows 上 apply_patch 在 sandbox 下失败** | 💬14 👍2 | Windows sandbox 关键路径错误,影响补丁应用,Pro 用户反馈,影响范围明确 |
| 9 | [#26869](https://github.com/openai/codex/issues/26869) **Codex Desktop app-server 崩溃后泄漏子进程并写入海量日志** | 💬10 👍3 | 资源/可靠性问题,涉及进程生命周期管理,可能掩盖更深的稳定性 bug |
| 10 | [#28078](https://github.com/openai/codex/issues/28078) **Xcode 27 beta 中 ChatGPT Pro 账号因 Email OTP 登录失败** | 💬8 👍9 | IDE 集成认证分支问题,涉及 ChatGPT 账号类型差异,Xcode 扩展团队需关注 |

> 备选关注:#30527(Win10 Defender 高 CPU)、#24103(Meta Ads MCP OAuth)、#23650(Bedrock Mantle 端点过期)

---

## 🛠 重要 PR 进展

### 安全加固(由 @bookholt-oai 主导的 PSEC-4394 修复栈)
1. **[#30833](https://github.com/openai/codex/pull/30833)** **将 Git worktree helper 绑定到可信可执行文件** — 防止 `PATH` 中的仓库可控二进制冒充 host Git,是修复栈的基础层
2. **[#30837](https://github.com/openai/codex/pull/30837)** **通过 Git 推导有效补丁路径** — 用 Git 自身解析 diff header,避免重命名/复制/无 header 场景下的路径误判
3. **[#30844](https://github.com/openai/codex/pull/30844)** **将暂存补丁路径限制在父 worktree 内** — 文件系统层级的隔离,防止别名逃逸到 worktree 外
4. **[#30848](https://github.com/openai/codex/pull/30848)** **补丁应用前拦截选定的可执行 Git 过滤器** — 阻断 clean/smudge/process filter 命令执行
5. **[#30850](https://github.com/openai/codex/pull/30850)** **补丁暂存前拦截选定的 Git 过滤器** — 覆盖 stage 路径这一独立 sink
6. **[#30854](https://github.com/openai/codex/pull/30854)** **三路补丁应用前拦截选定的合并驱动** — 处理 `git apply --3way` 调用合并驱动的攻击面
7. **[#30863](https://github.com/openai/codex/pull/30863)** **报告结构化 Git status 拒绝** — 为工作区状态检测提供结构化错误,避免布尔塌缩

### 功能与修复
8. **[#30882](https://github.com/openai/codex/pull/30882)** **应用补丁时保留换行符** — 直接修复 #4003,保留 LF/CRLF,新插入行沿用首个源行终止符,默认 LF
9. **[#30887](https://github.com/openai/codex/pull/30887)** **加速反向历史搜索** — 解决 history.jsonl 逐条读取并加锁的性能问题,缓存友好
10. **[#30883](https://github.com/openai/codex/pull/30883)** **按请求粒度发出 TTFT 完成遥测** — 面向 NVIDIA 遥测管道,弥补 `codex.turn_ttft` 仅每 turn 一次的不足
11. **[#30880](https://github.com/openai/codex/pull/30880)** **检测由 Vite+ 管理的 Codex 安装** — 新增 `vp install -g @openai/codex` 修复路径,doctor/update 全链路感知
12. **[#30879](https://github.com/openai/codex/pull/30879)** **Windows 命令安全检测支持 URL 大小写不敏感** — 修复 PowerShell 大小写解析差异,补齐 `Start-Process` 测试
13. **[#30627](https://github.com/openai/codex/pull/30627)** **Elicitations 迁移到共享服务** — 修复 code-mode 工具结果在 MCP elicitation 等待时返回模型的竞态
14. **[#30876](https://github.com/openai/codex/pull/30876)** **支持交错响应项** — reasoning 与最终回答事件交错时,TUI 保持完整且去重
15. **[#30752](https://github.com/openai/codex/pull/30752)** **接入 reasoning_summary_delivery 配置** — 新增 sequential/concurrent/concurrent_cutoff 三档,HTTP 与 WebSocket 双通路生效
16. **[#30315](https://github.com/openai/codex/pull/30315)** **为 app-server WebSocket 增加生成式 token 认证** — 默认 256-bit URL-safe token,可 `--no-token-check` 关闭

> ✅ 已合并/关闭:#30867(多智能体通信出口统一)、#30872(通信生命周期日志)、#30516(agent communication logging)

---

## 📈 功能需求趋势

从 Issues 与 PR 标题中归纳,社区当前最关注的六大方向:

1. **🪟 Windows 平台稳定性** — 占据今日热度一半以上:app 崩溃、sandbox 拒绝、WSL 互通、Microsoft Defender 误报、安装路径不可选。**强烈建议官方设立 Windows 专项跟踪 epic**
2. **🔒 Git/补丁执行安全** — 由 PSEC-4394 驱动,体现 OpenAI 对"仓库配置即代码"的攻击面越来越重视,开发者应关注后续 sink 阻断策略
3. **🤖 多智能体 (Multi-agent v2) 通信** — 三个相关 PR(#30867/#30872/#30516)集中于通信出口、日志、遥测的统一,显示该能力进入稳定化阶段
4. **⚡ 性能与可观测性** — 反向历史搜索加速、TTFT per-request 遥测、context window 抖动报告,关注响应延迟与可调试性
5. **🔌 MCP 与第三方集成** — rmcp 升级、Meta Ads OAuth、Azure 端点兼容,生态扩展仍是主线
6. **🧠 推理摘要交付** — `reasoning_summary_delivery` 配置项正式落地,顺序/并发/并发截断三种策略

---

## 💬 开发者关注点与痛点

| 痛点 | 证据 | 建议 |
|------|------|------|
| **Windows 上"静默失败"** | #29320、#30009、#30527、#30884 | 需更明确错误码与 crash dump 上报入口 |
| **sandbox 与信任策略不一致** | #14345(目录不再默认信任)、#30009 | 文档需同步策略变更,避免升级即破坏 CI |
| **数据/会话兼容性问题** | #26104(旧 session 打不开)、#29311(发送失败) | 应在每次发版声明 session schema 兼容性 |
| **遥测/速率限制策略不透明** | #30726、#30686(bankable reset credits) | 用户对额度差异感知强烈,建议公开配额模型 |
| **第三方依赖老化** | #17529(rmcp 0.15 → 1.4)、#23650(Bedrock Mantle 端点) | 增加依赖巡检,避免长期停留在废弃 SDK |
| **补丁产生副作用** | #4003/#20880/#30550 | 补丁/Worktree 行为应"最小惊讶",文件元数据保留需写入 e2e 测试 |
| **崩溃后资源回收** | #26869(子进程泄漏)、#30824(SIGTRAP)、#29000(SIGTRAP) | macOS FSEvents、Intel Mac、Win11 都出现崩溃,需统一崩溃恢复策略 |

---

> 📌 **日报小结**:今天 OpenAI Codex 的主线非常清晰 —— **安全加固在批量推进,Windows 体验在等待官方系统性回应**。社区对 PSEC-4394 修复栈的认可度较高,但对 Windows 11 25H2 与 Win10 的兼容性问题已经形成"长期悬挂"的情绪。建议关注下一阶段 Windows 相关 PR 与 #14345 的策略收敛。

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

<think>The user wants me to generate a Chinese daily report for Gemini CLI community dynamics based on GitHub data. Let me analyze the data carefully.

Key observations:
1. **Release**: v0.51.0-nightly.20260702.gff00dacd9 - a nightly release with a security fix for symbolic link directory escape
2. **Issues**: 50 issues, with 30 shown (top 30 by comment count). Most are tagged "maintainer only" and "workstream-rollup" which means these are internal tracking issues
3. **PRs**: 16 PRs, mix of open and closed

Important themes I see:
- **Security**: Multiple security-related issues (symbolic link escape, OAuth CVE, MCP resource wrapping, supply chain RCE)
- **Subagent reliability**: Many issues around subagents hanging, returning false success, etc.
- **Auto Memory system**: Several issues from @SandyTao520 about the auto memory system
- **Browser agent**: Multiple issues about browser agent failures
- **AST-aware tools**: Investigation into AST-aware file reading
- **Tool limits**: 400+ tools causing 400 errors
- **Shell hangs**: Commands hanging after completion

Let me look at the top issues by comments:
1. #22323 - Subagent recovery after MAX_TURNS (9 comments, p1)
2. #19873 - Zero-Dependency OS Sandboxing (8 comments, p2, large effort)
3. #24353 - Component level evaluations (7 comments, p1)
4. #22745 - AST-aware file reads (7 comments, p2)
5. #21409 - Generalist agent hangs (7 comments, p1, 8 likes)
6. #21968 - Skills and sub-agents usage (6 comments, p2)
7. #26525 - Auto Memory redaction (5 comments, p2)
8. #26522 - Auto Memory retry (5 comments, p2)
9. #25166 - Shell command hang (4 comments, p1, 3 likes)
10. #21983 - Browser subagent Wayland fail (4 comments, p1)
11. #21000 - Native file tools for task tracker (4 comments)
12. #20079 - Symlink not recognized as agent (4 comments)
13. #26523 - Auto Memory invalid patches (3 comments)
14. #24246 - 400 error with >128 tools (3 comments)
15. #23571 - Tmp scripts in random spots (3 comments)
16. #22672 - Destructive behavior prevention (3 comments)
17. #22267 - Browser agent ignores settings.json (3 comments)
18. #22232 - Browser agent session recovery (3 comments)
19. #22186 - get-shit-done output hook crash (3 comments)
20. #20195 - Local Subagent Sprint 1 (3 comments)

Top PRs:
1. #27971 - Strip thoughts from scrubbed history (CLOSED)
2. #27979 - Wrap read_mcp_resource with wrapUntrusted (CLOSED)
3. #27975 - Linux native dependency FAQ (CLOSED)
4. #27996 - Decode response body charset (CLOSED)
5. #27990 - macOS symlink path mismatches (CLOSED)
6. #27997 - Remove deprecated tier references (CLOSED)
7. #27994 - Insert skill/agent content literally (CLOSED)
8. #27986 - Report cached/thought tokens in ACP (CLOSED)
9. #28126 - Ellipsis on multi-line edit snippets (OPEN)
10. #28235 - Bump version to 0.51.0-nightly (OPEN)
11. #28167 - Egress cloud run service skeleton (CLOSED)
12. #28103 - Avoid keep-alive socket reuse OAuth (OPEN)
13. #28233 - Symbolic link directory escape (CLOSED, security fix in the release)
14. #28223 - Bypass LLM for JSON/IPYNB (OPEN)
15. #28163 - Triage worker core modules (OPEN)
16. #28232 - Fix supply chain RCE (OPEN)

I notice an interesting pattern: many of the issues have "maintainer only" labels, which means they're internal tracking issues. The data says 50 issues updated, 30 shown by comment count. The "workstream-rollup" tag indicates these are aggregated/rollup issues.

Let me now structure the report:

1. 今日速览 - Summarize today's most important: nightly release with security fix, ongoing subagent reliability issues, security hardening
2. 版本发布 - v0.51.0-nightly with security fix
3. 社区热点 Issues - Top 10
4. 重要 PR 进展 - Top 10
5. 功能需求趋势 - Subagent reliability, AST-aware tools, sandboxing, auto memory, browser agent, eval infra
6. 开发者关注点 - Hangs, false success reports, tool limits, destructive commands

Let me write the report in Chinese, professional and concise.

I should use thinking mode as enabled, with detailed thinking.</think>

# Gemini CLI 社区动态日报
**日期**: 2026-07-02 | **数据源**: google-gemini/gemini-cli

---

## 📌 今日速览

今日主线围绕 **v0.51.0 nightly 发布** 与 **多线程安全加固**：夜间版本合入了一个高危符号链接目录逃逸漏洞修复 (#28233)，同时多条 OAuth 与 CI 供应链相关的安全 PR 正在推进。社区层面，**Subagent 可靠性**仍是最大痛点——多个 P1 级 issue 反映子代理误报成功、挂死、忽略配置等问题，叠加 **Auto Memory 系统**与 **Browser Agent** 的稳定性讨论，整体进入「质量打磨期」。

---

## 🚀 版本发布

### v0.51.0-nightly.20260702.gff00dacd9
- **变更**: 合入 [#28233](https://github.com/google-gemini/gemini-cli/pull/28233) — 修复 Memory Import Processor 中的**符号链接目录逃逸漏洞**（攻击者可构造恶意仓库通过 `src/` 软链跳出 workspace）
- 由 [@luisfelipe-alt](https://github.com/luisfelipe-alt) 提交，归类为高严重性安全问题
- 📦 [Release 链接](https://github.com/google-gemini/gemini-cli/releases/tag/v0.51.0-nightly.20260702.gff00dacd9)

---

## 🔥 社区热点 Issues（按社区关注度排序）

| # | Issue | 优先级 | 关注理由 |
|---|-------|--------|----------|
| [#21409](https://github.com/google-gemini/gemini-cli/issues/21409) | **Generalist agent 挂死**（任何文件夹创建等简单操作都卡一小时）| P1 | 👍 8 / 💬 7，最受欢迎——用户需手动 prompt「不要使用子代理」绕过 |
| [#22323](https://github.com/google-gemini/gemini-cli/issues/22323) | Subagent 在 MAX_TURNS 后**仍报告 GOAL success**，掩盖中断 | P1 | 💬 9，子代理可观测性问题，影响可信度 |
| [#19873](https://github.com/google-gemini/gemini-cli/issues/19873) | **零依赖 OS 沙箱 + 后置意图路由** | P2 | 💬 8，战略性 feature：让 Gemini 3 模型原生发挥 bash 能力的同时保证安全 |
| [#25166](https://github.com/google-gemini/gemini-cli/issues/25166) | Shell 命令执行完成后**仍卡在 "Waiting input"** | P1 | 👍 3 / 💬 4，最常见的日常体验 bug |
| [#21983](https://github.com/google-gemini/gemini-cli/issues/21983) | **Browser subagent 在 Wayland 下失败** | P1 | 💬 4，Linux 桌面环境兼容性问题 |
| [#21968](https://github.com/google-gemini/gemini-cli/issues/21968) | Gemini **不会主动调用自定义 skills / sub-agents** | P2 | 💬 6，模型能力利用率问题 |
| [#26525](https://github.com/google-gemini/gemini-cli/issues/26525) | Auto Memory: **确定性脱敏 + 减少日志** | P2 | 💬 5，secret 泄露风险 |
| [#26522](https://github.com/google-gemini/gemini-cli/issues/26522) | Auto Memory 对低信号 session **无限重试** | P2 | 💬 5，资源浪费 |
| [#24353](https://github.com/google-gemini/gemini-cli/issues/24353) | **组件级评估体系 EPIC**（已累积 76 项行为评估）| P1 | 💬 7，质量基础设施投入 |
| [#22745](https://github.com/google-gemini/gemini-cli/issues/22745) | **AST 感知的文件读取/搜索/映射**调研 | P2 | 💬 7，长期性能优化方向 |

---

## 🛠️ 重要 PR 进展

### 🟢 安全与稳定性（本周重点）

- **[#28233](https://github.com/google-gemini/gemini-cli/pull/28233)** `fix(core): resolve symbolic link directory escape in memory import processor` — 已合并并随 nightly 发布，**高危安全修复**
- **[#28232](https://github.com/google-gemini/gemini-cli/pull/28232)** `ci: fix supply chain RCE by splitting eval workflow` — 修复 `pull_request_target` 触发器导致的供应链 RCE，PR 中包含 `GEMINI_API_KEY` 风险
- **[#28103](https://github.com/google-gemini/gemini-cli/pull/28103)** `fix(core): avoid keep-alive socket reuse during OAuth token exchange` — 绕过 Node.js 24.17.0 / 22.23.0 / 26.3 中 **CVE-2026-48931** 的 `Premature close` 问题
- **[#27979](https://github.com/google-gemini/gemini-cli/pull/27979)** `Wrap read_mcp_resource output with wrapUntrusted()` — 与 mcp-tool 保持一致的不可信内容包裹

### 🔧 工具与体验优化

- **[#27971](https://github.com/google-gemini/gemini-cli/pull/27971)** `fix(core): strip thoughts from scrubbed history turns` — 修复模型思维链泄漏到历史回合引发的「无限 monologue」循环
- **[#28223](https://github.com/google-gemini/gemini-cli/pull/28223)** `fix(core-tools): bypass LLM correction for JSON and IPYNB` — 修复 `.json`/`.ipynb` 文件被错误改写/损坏问题
- **[#27996](https://github.com/google-gemini/gemini-cli/pull/27996)** `fix(core): decode response body using charset from Content-Type` — 支持 gbk/iso-8859-1 等非 UTF-8 编码（中文/日文/遗留站点）
- **[#28126](https://github.com/google-gemini/gemini-cli/pull/28126)** `fix(core-tools): show ellipsis on multi-line edit snippets` — 多行 edit 显示省略号，避免误判为单行变更
- **[#27994](https://github.com/google-gemini/gemini-cli/pull/27994)** `fix(core): insert skill/agent content literally in system prompt` — 修复 `${AgentSkills}` 等占位符的字符串替换漏洞（避免 `$&` 等特殊字符注入）
- **[#27986](https://github.com/google-gemini/gemini-cli/pull/27986)** `feat(acp): report cached and thought tokens in PromptResponse.usage` — ACP 模式下补齐 token 用量统计（ACP 客户端成本估算可减少 ~3× 误差）

### 📚 文档与基础设施

- **[#27997](https://github.com/google-gemini/gemini-cli/pull/27997)** `docs: remove references to deprecated consumer and free tiers` — 清理已废弃的 Code Assist / AI Pro / Free Tier 引用（6 月 16 日停止服务）
- **[#27975](https://github.com/google-gemini/gemini-cli/pull/27975)** `docs: add Linux native dependency FAQ` — 新增 Debian/Ubuntu/Fedora/RHEL 原生依赖说明
- **[#28167](https://github.com/google-gemini/gemini-cli/pull/28167)** `feat(caretaker): egress cloud run service skeleton` — Caretaker Agent 的 Egress Cloud Run 服务骨架

---

## 📈 功能需求趋势

基于今日活跃 issue 提炼出 5 大社区关注方向：

1. **🔒 安全与可信执行** 🔥🔥🔥
   - 沙箱（OS-level sandbox，#19873）、符号链接逃逸（#28233）、Secret 脱敏（#26525）、供应链 RCE（#28232）、OAuth CVE（#28103）
   - 占今日高优先级 issue 的近 1/3

2. **🤖 Subagent 体系成熟化** 🔥🔥🔥
   - 可观测性（#22323、#22598 子代理轨迹 `/chat share`）、稳定性（#21409、#21983）、能力调度（#21968、#22672 防破坏性行为）、配置覆盖（#22267）、本地子代理 Sprint 1（#20195）

3. **🧠 Auto Memory 系统重塑**
   - @SandyTao520 一口气开启 [#26516](https://github.com/google-gemini/gemini-cli/issues/26516) / #26522 / #26523 / #26525 四个 tracking issue，涵盖脱敏、重试控制、异常 patch 隔离、整体质量

4. **🌳 代码库理解深度化**
   - AST 感知工具调研（#22745、#22746）、component-level eval（#24353）、tool 数量上限（#24246 >128 触发 400）

5. **🌐 Browser Agent 韧性**
   - Wayland 兼容（#21983）、settings.json 覆盖（#22267）、session 接管与锁恢复（#22232）

---

## 💬 开发者关注点（高频痛点）

| 痛点 | 代表 issue | 影响面 |
|------|-----------|--------|
| **挂死 / 假成功** —— 子代理卡死、Shell 假 "Waiting input"、vite 创建卡交互 | #21409、#25166、#22465、#22323 | 体验与可信度双重打击 |
| **工具规模瓶颈** —— >128 个工具直接 400 | #24246 | 大型 MCP 用户无法扩展 |
| **脚本污染工作区** —— 模型在随机位置写 tmp 脚本 | #23571 | 影响 git 提交卫生 |
| **配置不生效** —— Browser Agent 忽略 `settings.json` 的 `maxTurns` 等 | #22267、#22093（v0.33.0 后子代理绕过权限）| 用户对控制权丧失信任 |
| **破坏性操作风险** —— `git reset --force` 等被无脑使用 | #22672 | 安全 + 数据丢失 |
| **Symlink 不兼容** —— `~/.gemini/agents/*.md` 软链、macOS `/var` 测试 | #20079、#27990 | 高级用户的常规用法被拒 |
| **Auto Memory 资源泄漏** —— 低信号 session 永久循环 | #26522 | 后台开销不可控 |

---

## 🎯 一句话总结

> **安全补丁密度上升 + 子代理可信度攻坚** 是本周 Gemini CLI 的双主线；nightly 版本合入首个公开的高危符号链接漏洞修复，叠加 OAuth/CI 供应链两条潜在 RCE 链的 PR 推进，体现团队对生产可信度投入明显加大；与此同时，社区对 Generalist Agent 挂死、Browser 子代理配置失效、Auto Memory 资源泄漏等稳定性的呼声最为集中。

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

<think>Let me analyze the GitHub data for the GitHub Copilot CLI repository and generate a comprehensive daily report for 2026-07-02.

Let me organize the information:

**Releases:**
1. v1.0.69-0 - Added file/folder completion to /sandbox; Fixed session branch labels, MCP reloads, tgrep indexer
2. v1.0.68 (2026-07-01) - Added kimi-k2.7-code model support; visual chevron for MCP config; IDE tools resilience

**Issues (Top 30 by comments, picking top 10):**
1. #1665 - Copilot CLI Plugins Scoped to Project/Repository - 10 comments, 18 👍 - High community interest
2. #3596 - Error loading model list: Not authenticated - 8 comments, 11 👍
3. #3220 - Spam/low-quality issue
4. #1504 - Custom theme support - 6 comments, 20 👍
5. #3948 - web_fetch: TypeError: fetch failed - 4 comments
6. #3282 - Multiple BYOK model capability - 4 comments, 12 👍
7. #3997 - Model "gpt-5.3-codex" not available - 3 comments
8. #3331 - Auto-update plugins via marketplace - 3 comments, 4 👍
9. #2507 - Terminal cursor style - 3 comments (closed)
10. #3653 - Local sandbox mode on Linux - 2 comments (closed)
11. #3158 - Plan→Compact→Re-Plan infinite loop - 2 comments (high severity)
12. #3982 - OAuth/MCP grant_types bug - 2 comments

**PRs:** 0 new PRs in past 24 hours

**Trends to identify:**
- Plugin ecosystem (scoped plugins, auto-updates)
- Model support (multiple BYOK, new models like kimi-k2.7, gpt-5.3)
- Sandbox/security (sandbox on Linux, deny-rules)
- IDE integration (IntelliJ, VSCode Server)
- Windows-specific bugs (hooks, clipboard, plugin cache)
- Accessibility (screen reader, custom themes)
- MCP/OAuth
- Performance (infinite loops, fetch failure)

Let me draft a concise, professional Chinese daily report.</think>

# GitHub Copilot CLI 社区动态日报

**日期：2026-07-02**
**数据来源：github.com/github/copilot-cli**

---

## 1. 今日速览

过去 24 小时，Copilot CLI 发布了预发布版 **v1.0.69-0**，重点完善 `/sandbox` 路径补全、会话分支标签同步及 MCP 加载优化。社区方面讨论最热烈的仍集中在 **插件作用域模型、BYOK 多模型支持、自定义主题** 等长期功能诉求上；同时 Windows 平台相关 Bug（剪贴板、Hook 执行、插件缓存）出现集中上报。值得注意的是，PR 提交数在统计窗口内为 0，迭代节奏以版本发布和 Issue 收口为主。

---

## 2. 版本发布

### 🔹 v1.0.69-0（预发布）

**Added**
- 为 `/sandbox` 命令路径新增文件和文件夹补全

**Fixed**
- 会话工作目录变更时，Sessions 视图中的分支标签同步更新
- 恢复已加载会话时跳过冗余的 MCP 重载
- 优化 tgrep 索引器行为（变更描述截断，详见 Release Notes）

### 🔹 v1.0.68（2026-07-01 正式版）

**Added**
- 支持 **kimi-k2.7-code** 模型
- `/mcp` 配置表单中的焦点字段使用「❯」雪佛龙符号标识（不仅依赖颜色）
- IDE 短暂断连时，IDE 工具保持可用；断连期间返回清晰错误，恢复后自动重连

> 💡 两个版本合计重点：沙箱交互体验、模型生态扩展、MCP/IDE 鲁棒性。

---

## 3. 社区热点 Issues（按评论数与影响力筛选）

| # | Issue | 标签 | 热度 | 重要性 |
|---|---|---|---|---|
| **#1665** | [Support Plugins Scoped to Project or Repository](https://github.com/github/copilot-cli/issues/1665) | plugins, configuration | 💬10 · 👍18 | ⭐⭐⭐ 插件当前只能 per-user 全局安装，团队/项目级共享诉求强烈 |
| **#3596** | [Error loading model list: Not authenticated](https://github.com/github/copilot-cli/issues/3596) | auth, sessions, models | 💬8 · 👍11 | ⭐⭐⭐ 恢复旧会话后 `/model` 无法列出模型，影响核心工作流 |
| **#1504** | [Add custom theme support](https://github.com/github/copilot-cli/issues/1504) | theming, accessibility | 💬6 · 👍20 | ⭐⭐⭐ 赞数最高之一，社区强烈期待 JSON 可分享主题 |
| **#3948** | [web_fetch: TypeError: fetch failed](https://github.com/github/copilot-cli/issues/3948) | networking, tools | 💬4 · 👍0 | ⭐⭐ web_fetch 工具在所有调用上必失败，排除网络配置后仍复现 |
| **#3282** | [Multiple BYOK model capability](https://github.com/github/copilot-cli/issues/3282) | models, configuration | 💬4 · 👍12 | ⭐⭐⭐ 当前单一 BYOK 模型限制，体验差，用户需重启切换 |
| **#3997** | [Model "gpt-5.3-codex" is not available](https://github.com/github/copilot-cli/issues/3997) | triage | 💬3 | ⭐⭐ Agent 模式下特定模型缺失导致不可用 |
| **#3331** | [Auto-update plugins via marketplace flag](https://github.com/github/copilot-cli/issues/3331) | plugins | 💬3 · 👍4 | ⭐⭐ 插件分发方缺乏强约束升级机制 |
| **#3158** | [Plan→Compact→Re-Plan infinite loop (217 cycles)](https://github.com/github/copilot-cli/issues/3158) | agents, context-memory | 💬2 | ⭐⭐⭐ 高严重性 Agent 死循环，零产出耗尽上下文 |
| **#3982** | [MCP OAuth: wrong grant flow](https://github.com/github/copilot-cli/issues/3982) | auth, mcp | 💬2 | ⭐⭐ 企业 MCP server 仅支持 client_credentials，CLI 强制使用 authorization_code |
| **#3653** | [Local sandbox mode doesn't work on Linux](https://github.com/github/copilot-cli/issues/3653) | platform-linux, permissions | 💬2 · 🟢 CLOSED | ⭐⭐ Linux 本地沙箱启用无效，已关闭（建议跟进修复版本） |

> 备注：多条「Leave a comment」「Scam company」「1000」类无实质内容的 Issue 集中出现（#3210、#3220、#3221、#3991、#3992、#3997 等），建议仓库使用 Issue 模板强制结构化字段，降低噪音。

---

## 4. 重要 PR 进展

⚠️ **过去 24 小时无新 Pull Request 更新**。这是值得团队关注的信号：尽管 Release 在持续输出，但 PR 流转可能积压，建议关注以下行将进入评审窗口的方向（基于 Issue 反推）：

- BYOK 多模型实现（#3282）
- 项目级插件作用域（#1665）
- 自定义主题与配色（#1504）
- Linux 本地沙箱修复（#3653 关闭后需回归）
- `permissions-config.json` deny-rules（#3995）

---

## 5. 功能需求趋势

按 Issue 聚类提炼，社区关注度排序如下：

| 主题 | 关键 Issue | 趋势关键词 |
|---|---|---|
| **插件生态深化** | #1665、#3331、#3627 | 项目级作用域、自动升级、缓存一致性 |
| **模型与 BYOK 灵活性** | #3282、#2958、#3997、#3998 | 多 BYOK、按模式默认模型、模型可用性、计费准确性 |
| **IDE 集成广度** | #2891、#3996、#3981 | IntelliJ、VSCode Server、剪贴板兼容性 |
| **沙箱与权限治理** | #3653、#3995 | Linux 沙箱修复、deny-rules |
| **可访问性与主题** | #1504、#3993 | 自定义主题、屏幕阅读器回显 |
| **会话与可观测性** | #3158、#3994、#3980 | Agent 死循环、metrics 写入、Esc 取消语义 |
| **MCP / OAuth 互操作** | #3982、#3596 | 企业 OAuth、session 鉴权状态 |

---

## 6. 开发者关注点

**痛点高频词：**
- **Windows 兼容性问题集中爆发**：插件缓存（#3627）、Hook 在 PowerShell 下执行不兼容 Claude Code 契约（#4001）、CLI 运行时剪贴板失效（#3981）、VSCode Server 剪贴板失败（#3996）。建议团队建立 Windows 专项回归矩阵。
- **会话恢复后的鉴权/模型状态丢失**：#3596 反映 `/model` 在恢复会话后未携带认证态，类似模式还出现在 #3994（`/new` 丢弃 metrics）。
- **Agent 行为可靠性**：#3158 的 217 次空转循环、#3980 的 Esc 误杀后台 Agent，暴露 Agent 控制流与状态机设计的脆弱性。
- **工具与平台差异**：`web_fetch` 必失败（#3948）、Linux 沙箱失效（#3653）、IntelliJ `/ide` 无法连接（#2891）—— 跨平台/IDE 保证仍不足。
- **企业级能力缺口**：MCP OAuth grant_types 协商（#3982）、deny-rules 持久化（#3995）—— 企业落地仍需补足能力。

**社区呼声最高的 3 个功能：**
1. 自定义/可分享主题（#1504，👍20）
2. 项目级或仓库级插件作用域（#1665，👍18）
3. 按模式（plan / autopilot）配置默认模型（#2958，👍15）

---

**报告生成说明**：基于 GitHub 公开数据汇总，PR 数据为 0 时已明确提示；Issue 排序综合评论数与 👍 点赞数，欢迎社区在评论区补充你关心的方向。

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

<think>The user wants me to generate a community daily report for Kimi Code CLI dated 2026-07-02 based on GitHub data. Let me analyze the data:

**Issues (4 total):**
1. #640 [OPEN] [bug] Kimi CLI stuck reading files in a loop - 15 comments, 1 like - High community engagement
2. #1938 [CLOSED] [enhancement] Push notification for Kimi-CLI-Web - 1 comment
3. #2483 [OPEN] [branding] Kimi CLI → Kimi Code migration incomplete - 0 comments
4. #2482 [OPEN] [enhancement] Auto-save long goals as goal.md - 0 comments

**Pull Requests (2 total):**
1. #2369 [CLOSED] feat(subagent): API key pool for parallel subagent execution
2. #2481 [OPEN] fix(shell): clipboard media on Windows BracketedPaste

Now I need to note that the user asked for "10 most worth-following Issues" and "10 important PRs" but there are only 4 issues and 2 PRs. I need to be honest about this and not fabricate content. Let me adjust the report accordingly - I should mention that there are only 4 issues and 2 PRs today, and highlight what's actually there.

Wait, the user said "挑选 10 个最值得关注的 Issue" - "Pick 10 most worth-following Issues". But there are only 4 issues. I should pick all 4 and explain that there are only 4 today, not fabricate 10. Similarly for PRs, there are only 2.

Let me write this report honestly. I should explain in the relevant sections that today's update volume is limited.

Let me structure the report:

1. **今日速览** - Summary of today's main developments
2. **版本发布** - Skip since no releases
3. **社区热点 Issues** - All 4 issues, with explanations (note limited count)
4. **重要 PR 进展** - All 2 PRs (note limited count)
5. **功能需求趋势** - Analyze themes from issues
6. **开发者关注点** - Pain points and high-frequency needs

Let me craft this report now.</think>

# Kimi Code CLI 社区动态日报

**📅 2026-07-02 ｜ 数据来源：github.com/MoonshotAI/kimi-cli**

---

## 1. 今日速览

今日社区活跃度适中，4 条 Issue 与 2 条 PR 更新。最受关注的是长期未关闭的 **#640「读取文件循环卡死」**（累计 15 条评论），仍是开发者最迫切的痛点之一；新开的 **#2483 品牌迁移一致性追踪** 与 **#2482 超长 goal 文件化** 反映出生态正在从"Kimi CLI"向"Kimi Code CLI"过渡，并暴露出产品在大任务/长上下文处理上的能力短板。代码侧有一条面向 Windows 终端的剪贴板粘贴修复进入评审。

---

## 2. 版本发布

⏸ **无新版本发布**。过去 24 小时内未观察到新的 Release 标签。

---

## 3. 社区热点 Issues

> 今日仅 4 条 Issue 更新，全量呈现并按热度排序：

### 🔥 #640 [OPEN] [bug] Kimi CLI 卡在循环读取同一文件
- 🔗 https://github.com/MoonshotAI/kimi-cli/issues/640
- **热度**：💬 15 条评论 ｜ 👍 1
- **重要性**：⚠️ 高 —— 这是仓库里近期评论数最高的 bug 之一，社区反复反馈 Agent 在 `mimo-v2-flash` + 自定义 anthropic endpoint 环境下陷入死循环，直接影响工具稳定性与可用性。
- **社区反应**：多个用户回帖描述相似症状，疑似与 read tool 的去重/退出条件有关，已持续讨论半年未见官方修复进展。

### #2483 [OPEN] [branding] 「Kimi CLI → Kimi Code」品牌迁移只做了一半
- 🔗 https://github.com/MoonshotAI/kimi-cli/issues/2483
- **热度**：💬 0 ｜ 👍 0（今日新建）
- **重要性**：🧭 战略级 —— 该 issue 作为 tracking 用，集中暴露仓库描述、README、Zed/VS Code 扩展、SDK、二进制路径、PyPI 包名等"至少四套名字并存"的问题。配合 #2381 的战略讨论，标志着项目正式进入品牌统一阶段。

### #2482 [OPEN] [enhancement] 超长 goal 自动落盘为 `goal.md` 并支持 CLI 内编辑/暂停
- 🔗 https://github.com/MoonshotAI/kimi-cli/issues/2482
- **热度**：💬 0 ｜ 👍 0（今日新建）
- **重要性**：✨ 中高 —— 当前 `/goal` slash 命令 4000 字节上限成为长任务瓶颈，作者借鉴 Codex 的做法提议自动落盘 + 唤醒时重新读取，对长期任务的连续性体验提升明显。

### #1938 [CLOSED] [enhancement] 是否可以为 Kimi-CLI-Web 增加推送功能？
- 🔗 https://github.com/MoonshotAI/kimi-cli/issues/1938
- **热度**：💬 1 ｜ 👍 0
- **重要性**：📱 中 —— 用户希望在 Web 端完成任务时收到通知，并扩展到 CLI 端，关联移动端/远程使用场景。该 Issue 已被关闭（可能被合并到更大的通知/推送路线图中或被暂缓）。

---

## 4. 重要 PR 进展

> 今日仅 2 条 PR 更新，全量呈现：

### ✅ #2369 [CLOSED] feat(subagent): 为并行子 Agent 执行增加 API Key 池
- 🔗 https://github.com/MoonshotAI/kimi-cli/pull/2369
- **作者**：@Liewzheng ｜ 关闭时间：今日
- **内容**：新增 `APIKeyPool`（`src/kimi_cli/llm_key_pool.py`），为 subagent 并行执行提供轮询（round-robin）式的 API key 分配器，关联 #2368。
- **意义**：解决并行 subagent 触发上游 rate limit / 单 key 配额耗尽的问题，是 Agent 并发能力扩展的关键基础设施。

### 🔄 #2481 [OPEN] fix(shell): 在 Windows 终端的 BracketedPaste 中读取剪贴板媒体
- 🔗 https://github.com/MoonshotAI/kimi-cli/pull/2481
- **作者**：@redjade75723 ｜ 创建时间：今日
- **内容**：Windows Terminal 与 VS Code 集成终端中，`Ctrl+V` 由终端自身处理并以 BracketedPaste 事件发出；二进制图片无法以文本形式传输，导致粘贴静默失败。PR 修改 `_handle_bracketed_paste()`，先尝试读取剪贴板中的媒体内容。
- **意义**：修复 Windows 平台图片粘贴这一长期遗留体验问题，对多模态交互流畅度有直接提升。

---

## 5. 功能需求趋势

从今日 Issues 与历史上下文提炼，社区最关注的方向集中于以下几条主线：

| 方向 | 代表 Issue | 趋势判断 |
|---|---|---|
| 🏷️ **品牌与生态一致性** | #2483 | 项目从 "Kimi CLI" 切换到 "Kimi Code CLI" 进入实操阶段，下游 IDE 扩展/SDK/PyPI 同步命名统一是接下来数周的攻坚重点 |
| 📁 **长任务/上下文管理** | #2482 | 4000 字节 goal 限制、goal 落盘、唤醒恢复 —— 反映用户越来越多在 Kimi Code 上跑跨小时级别任务 |
| 🪟 **Windows / 多平台体验** | #2481 (PR) | 剪贴板图片粘贴、Windows Terminal 兼容性等细节持续补齐，桌面端可用性提升仍是高频需求 |
| 🔔 **远程/异步通知** | #1938 | Kimi-CLI-Web 完成后推送、CLI 端通知，揭示"非交互式使用"场景正在扩大 |
| 🐛 **Agent 鲁棒性** | #640 | 工具循环卡死仍是最被诟病的稳定性缺陷，是维护者需要优先处理的"信誉债" |

---

## 6. 开发者关注点

综合开发者反馈，当前社区的痛点与高频需求可归纳为三层：

**🔴 P0 — 稳定性债**
- Agent 在读取/操作工具时陷入死循环（#640）反复出现，且无明确退出策略，是用户流失的最大风险点。维护者需要：(1) 增加 read 工具的去重与最大重试上限；(2) 在自定义 endpoint 上提供更明确的错误反馈。

**🟡 P1 — 平台与生态对齐**
- Windows 终端图片粘贴失败（#2481）、品牌命名分裂（#2483）都属于"最后一公里"问题。前者影响企业 Windows 开发者入门门槛，后者影响 SDK 与第三方扩展作者的接入体验。
- 建议维护者建立**品牌迁移追踪看板**和**Windows 兼容专项**，避免 issue 长尾堆积。

**🟢 P2 — 长任务与异步体验**
- 超长 goal 落盘（#2482）与 Web/CLI 端通知（#1938）指向同一个趋势：用户希望 Kimi Code 承担"长时间后台任务"的载体，而不是仅限实时交互。
- 这与 subagent 并发能力（#2369）形成互补 —— **并行执行 + 长任务持久化 + 异步通知** 将构成下一阶段产品力的三驾马车。

---

> 📌 **日报小结**：今日数据规模较小（4 Issue + 2 PR），但议题质量高，恰好覆盖了**稳定性、品牌、平台兼容、长任务管理**四个未来一段时间的核心议题。建议关注 #640 的修复动向与 #2483 的迁移执行进度。

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

<think>Let me analyze the GitHub data for OpenCode community dynamics on 2026-07-02 and create a comprehensive Chinese daily report.

Key observations:
1. Version 1.17.13 was released with bugfixes for OpenAI-compatible reasoning models and GitHub Copilot, plus desktop question prompt minimization
2. Many V2 (2.0) related issues indicate active development of V2 architecture
3. Several Windows path separator issues have been closed (good sign of resolution)
4. ChatGPT OAuth routing issue (codex backend) is being addressed
5. Lots of feature requests around V2: file attachments, @-tagged files, MCP, plugins, AGENTS.md
6. Notable PR: --model free for random zero-cost models
7. Notable PR: sidebar width configuration
8. Session disappearing on Windows bug is being fixed

Let me organize this into a clean report.</think>

# OpenCode 社区动态日报 · 2026-07-02

---

## 📌 今日速览

OpenCode v1.17.13 今日发布，重点修复 OpenAI 兼容推理模型的 reasoning 模式与 GitHub Copilot 响应回放问题。V2 架构迁移进入密集阶段，多个核心模块（TUI 客户端迁移、插件钩子、文件附件、@-标签提示）并行推进；与此同时，多个长期困扰 Windows 用户的路径分隔符导致会话丢失的 Bug 集中关闭，社区迎来一波稳定性修复浪潮。

---

## 🚀 版本发布

### v1.17.13

**Core - Bugfixes**
- 强制为 OpenAI 兼容的 reasoning 模型启用推理模式，确保自定义部署上的推理设置可靠生效
- 停止回放过期的 GitHub Copilot 响应 item ID，避免后续请求失败

**Desktop - Bugfixes**
- 允许问题提示窗口最小化

---

## 🔥 社区热点 Issues

1. **[#26762] Cerebras zai-glm-4.7 推理内容在多轮对话中失败**  
   11 评论 / 👍3 ｜ [链接](https://github.com/anomalyco/opencode/issues/26762)  
   重要性：长存 Bug，已被 PR #34826 修复。多轮推理 + 工具调用场景下因 `reasoning_content` 不被支持而中断，影响 Cerebras 用户核心体验。

2. **[#34359] V2 TUI 迁移至 @opencode-ai/client**  
   8 评论 ｜ [链接](https://github.com/anomalyco/opencode/issues/34359)  
   重要性：V2 战略级工作。@kitlangton 主导，列出完整的迁移矩阵，是 V2 客户端层的路线图，众多后续 Issue 都依赖此项。

3. **[#21340] Windows Web UI 不显示会话 - 路径分隔符不匹配**  
   8 评论 / 👍2 ｜ [链接](https://github.com/anomalyco/opencode/issues/21340)  
   重要性：Windows 路径分隔符 Bug 家族最早、最完整的技术分析报告，附根因表格，是该系列问题的"奠基性 Issue"。

4. **[#26929] 内联 JSON schema 格式导致 message 接口 400 错误**  
   4 评论 / 👍7 ｜ [链接](https://github.com/anomalyco/opencode/issues/26929)  
   重要性：👍 最高的开放 Issue，API 关键路径 Bug，影响结构化输出能力，多个 SDK 用户受阻。

5. **[#19946] 自定义 provider 的 apiKey 不支持 `{env:...}` 替换**  
   6 评论 / 👍2 ｜ [链接](https://github.com/anomalyco/opencode/issues/19946)  
   重要性：暴露了 provider 配置解析的健壮性问题——`{file:...}` 可用而 `{env:...}` 失败，对企业部署是阻塞性问题。

6. **[#34341] 通过 read-tool 插件渐进式加载 AGENTS.md**  
   5 评论 ｜ [链接](https://github.com/anomalyco/opencode/issues/34341)  
   重要性：V2 上下文管理核心设计议题，决定 AGENTS.md 的发现/注入机制，对性能与可扩展性影响深远。

7. **[#34765] ChatGPT 订阅 OAuth 未路由至 codex 后端 - HTTP 401**  
   3 评论 ｜ [链接](https://github.com/anomalyco/opencode/issues/34765)  
   重要性：影响 V2 上 ChatGPT Pro/Plus 订阅用户；已被 PR #34843 修复，体现快速响应能力。

8. **[#23864] Windows 子代理会话在侧栏消失**  
   5 评论 ｜ [链接](https://github.com/anomalyco/opencode/issues/23864)  
   重要性：与 #21340 同源，是路径分隔符 Bug 在多客户端场景下的体现，对 OpenChamber 等第三方客户端尤为关键。

9. **[#34820] 应用告警错误始终无法消除**  
   4 评论 ｜ [链接](https://github.com/anomalyco/opencode/issues/34820)  
   重要性：合规标记的桌面端告警残留问题，重装/更新均无效，反映桌面版错误恢复机制的缺陷。

10. **[#34813] Homebrew 发布停滞**  
    3 评论 ｜ [链接](https://github.com/anomalyco/opencode/issues/34813)  
    重要性：包分发渠道问题，Homebrew 卡在 1.17.10，影响 macOS 用户升级路径，需要 release 流程改进。

---

## 🛠️ 重要 PR 进展

1. **[#34826] 更新 Cerebras SDK reasoning replay（已关闭待合并）**  
   [链接](https://github.com/anomalyco/opencode/pull/34826)  
   升级 `@ai-sdk/cerebras` 至 2.0.60，同步修复 #33413、#26762 等多个 reasoning_content 相关 Issue。

2. **[#34843] 将 ChatGPT OAuth 路由至 codex 后端**  
   [链接](https://github.com/anomalyco/opencode/pull/34843)  
   修复 V2 下 ChatGPT Pro/Plus 订阅调用 OpenAI 模型时的 401 缺失 scope 错误，正确识别 OAuth 凭据并路由到内部 codex 端点。

3. **[#34842] 会话列表按规范化 instance 目录过滤**  
   [链接](https://github.com/anomalyco/opencode/pull/34842)  
   通过让 session list 与 session create 使用相同的目录规范化路径，**无数据库/schema 变更**地修复 Windows 侧栏会话丢失问题（#34723）。

4. **[#34841] 移除主代理的字母序排序**  
   [链接](https://github.com/anomalyco/opencode/pull/34841)  
   修复 Agent.list() 中导致用户自定义主代理被字母序错排的问题（#7372），恢复插入顺序。

5. **[#34830] TUI 侧栏宽度可配置**  
   [链接](https://github.com/anomalyco/opencode/pull/34830)  
   新增 `sidebar.width` 配置项，回应长期社区诉求（#6087）。

6. **[#34838] 在 router 转换外解析目标会话 lineage**  
   [链接](https://github.com/anomalyco/opencode/pull/34838)  
   修复点击 sub-agent 卡片时 URL 不更新、titlebar 重复累积状态按钮的导航 Bug。

7. **[#34844] 扩展 V2 目录附件**  
   [链接](https://github.com/anomalyco/opencode/pull/34844)  
   在 prompt admission 阶段把 V2 文件/目录附件展开为文本，并附带回归测试。

8. **[#34726] 派生 models.dev reasoning 变体**  
   [链接](https://github.com/anomalyco/opencode/pull/34726)  
   将 models.dev 的 reasoning_options 映射为 providerOptions 支持的变体，保留实验性模式。

9. **[#34834] TUI 显示 content-filter 完成提示**  
   [链接](https://github.com/anomalyco/opencode/pull/34834)  
   在 Web/会话 UI 与 TUI footer 中显示 provider 内容过滤中止的可视提示。

10. **[#34794] 新增 `--model free` 随机选取零成本模型**  
    [链接](https://github.com/anomalyco/opencode/pull/34794)  
    在 `opencode run` 与 TUI 中支持 `--model free`，每次调用从 OpenCode Zen 零成本模型中随机选取，提升开发/调试便利性。

---

## 📈 功能需求趋势

通过分析近期 Issues 与 PR，V2 时代的社区关注焦点可归纳为：

| 方向 | 典型议题 | 社区热度 |
|------|---------|---------|
| **V2 架构迁移** | TUI 客户端、命令端口、MCP 生命周期、session.fork、shell 后台化 | ⭐⭐⭐⭐⭐ |
| **插件体系** | 工具插件架构、请求钩子、AGENTS.md 插件发现 | ⭐⭐⭐⭐⭐ |
| **提示与附件** | @-标签、文件附件、目录附件、reasoning 选项 | ⭐⭐⭐⭐ |
| **MCP 生态** | 异步 prompt 更新、大目录工具延迟加载 | ⭐⭐⭐⭐ |
| **桌面/UX 改进** | 侧栏宽度、文件树切换、tooltip 图层、复制路径、内容过滤提示 | ⭐⭐⭐⭐ |
| **Provider/模型** | models.dev reasoning 变体、ChatGPT OAuth 路由、`--model free` | ⭐⭐⭐ |
| **多端协同** | Windows 路径规范化、桌面/Web/移动端会话一致性 | ⭐⭐⭐ |

> 趋势总结：**V2 不仅是版本号升级，而是对核心架构（client/sdk/server/plugins/MCP/prompt）的全面重塑。** "插件化"与"上下文工程"是两大主线，几乎所有高评论 Issue 都围绕这两点展开。

---

## 💡 开发者关注点（痛点与高频需求）

### 🔴 持续痛点

1. **Windows 路径分隔符家族 Bug**  
   `#21340`、`#23864`、`#31597`、`#30374`、`#17183` 同源问题集中关闭——说明修复已进入收尾，但短期内对 Windows 桌面用户体验伤害很大。建议上游统一规范化处理后再落库。

2. **Provider 配置解析的健壮性**  
   `{env:...}` 在自定义 provider 的 `apiKey` 中失效（#19946），暴露了字符串插值器的覆盖盲区，影响企业级密钥管理。

3. **分发渠道同步**  
   Homebrew 卡在 v1.17.10（#34813），多渠道版本对齐需要自动化 release 流程。

4. **V2 Beta 体验打磨**  
   #34765（ChatGPT OAuth）、#34833（V2 TUI 反复重启闪烁 logo）、#34835（content-filter UX）显示 V2 仍有可见的"beta 痕迹"。

### 🟢 高频需求

- **可配置 UI**（侧栏宽度、文件树开关、tooltip 图层）
- **更智能的上下文**（AGENTS.md 渐进式加载、@-标签解析、文件附件）
- **更灵活的 Provider 接入**（OAuth、多后端、reasoning 变体）
- **更强扩展性**（V2 插件架构、请求钩子、shell 后台任务）
- **更轻量的入口**（`opencode --mini` 加 `/compact`，`--model free` 零成本试用）

---

> 📅 报告时间：2026-07-02 ｜ 数据源：github.com/anomalyco/opencode  
> 涵盖范围：过去 24 小时活跃的 Releases / Issues / Pull Requests

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

<think>The user wants me to generate a Chinese daily report for Qwen Code community dynamics based on GitHub data from 2026-07-02. Let me analyze the data carefully and create a structured report.

Let me organize the information:

**Releases (past 24 hours):**
1. v0.19.4-nightly.20260702.46814e4f1 - feat(cli) Harden daemon-managed channel worker, fix(web-shell) defer session creation
2. v0.19.4 - docs(daemon) refresh daemon docs for recent PRs (wave 2), feat(core) add configurable auto-compact threshold and Stop

**Top Issues by comment count:**
1. #61 [CLOSED] Qwen Code FAQ - 30 comments, 4 likes - Documentation FAQ
2. #4888 [CLOSED] ask_user_question in IDEA plugin not showing - 11 comments
3. #1281 [CLOSED] Qwen Code model via Ollama returns JSON-format responses - 7 comments
4. #1093 [OPEN] gitignore - 6 comments
5. #5080 [CLOSED] 阿里云 Standard API Key 与 Token Plan 接入点混用导致 401 - 6 comments
6. #6094 [OPEN] qqbot Cron/blockStreaming interaction issues - 5 comments
7. #4748 [OPEN] Optimize daemon cold start latency (2.5s → ~1.5s) - 5 comments
8. #1105 [CLOSED] 在vs code中没有Accept Diff和Close Diff Editor命令 - 5 comments
9. #1316 [CLOSED] After modifying the initialization file, the conversation history is cleared - 5 comments
10. #1280 [CLOSED] qwen-code不能使用本地ollama部署的qwen3-coder - 5 comments

**Top PRs by comment count:**
Looking at the data, most PRs have undefined comments. Let me list them by importance:

1. #6152 refactor(core): centralize extension runtime refresh
2. #6125 feat(schedule): local always-on /schedule daemon
3. #6156 fix(ci): create precheck comments via REST
4. #6162 fix(ci): diagnose autofix publish credentials
5. #5895 feat(daemon): add session artifact APIs
6. #6161 fix(cli): Avoid blocking WebUI sessions on MCP readiness
7. #5953 Feat: LSP Server support hot reload
8. #6158 feat(core): add retry with backoff for MCP capability discovery
9. #6160 fix(ci): allow prechecked fork PR automation
10. #6150 fix(web-shell): only show scroll-to-bottom button when content overflows
11. #6153 fix(web-shell): show skill slash commands before first prompt
12. #6159 fix(ci): fall back to latest autofix sandbox image
13. #6114 feat(channels): show lifecycle status in adapters
14. #5902 fix(qqbot): streaming improvements
15. #6146 feat(cli): add credential redaction for worker stderr forwarding
16. #6155 perf: memoize skill scans, debounce sleep-inhibitor log
17. #6045 fix(core): Reduce multimodal history payload size
18. #6105 feat(channels): add identity and task lifecycle metadata
19. #6151 [CLOSED] fix(ci): use CI_BOT_PAT for precheck comment on fork PRs
20. #6133 ci(release): optimize validation steps

Now let me identify trends in feature requests:
- Local model support (Ollama integration issues: #1280, #1281, #6144)
- IDE integration (#4888 IDEA plugin, #1105 VS Code commands)
- API Key/Authentication issues (#5080, #5979)
- Performance optimization (#4748 daemon cold start, #3696 hot-reload)
- Fallback model chains (#6116)
- Multi-modal context window handling (#6144, #6045)
- Chat history portability (#2373)
- Hot-reload system (#3696, #5953)

Let me write the report now.</think>

# Qwen Code 社区动态日报 · 2026-07-02

---

## 📌 今日速览

今日 Qwen Code 社区活动密集，发布了 **v0.19.4 稳定版**及一个夜间版本，重点加固了 daemon 通道工作线程与 session 创建时机；CI 自动化流程成为 PR 关注焦点（多笔 PR 集中修复 fork PR 凭据、precheck 评论路径），社区则在 IDE 插件交互、本地 Ollama 模型适配、API Key 401 错误、daemon 冷启动延迟等议题上持续反馈。

---

## 🚀 版本发布

### v0.19.4（稳定版）
- 📝 **docs(daemon)**：刷新 daemon 文档，合并近期 PR 变更（wave 2）—— [#5954](https://github.com/QwenLM/qwen-code/pull/5954)
- ✨ **feat(core)**：新增可配置的 auto-compact 阈值与 Stop 相关行为
- 🔗 [Release v0.19.4](https://github.com/QwenLM/qwen-code/releases/tag/v0.19.4)

### v0.19.4-nightly.20260702.46814e4f1
- 🛡️ **feat(cli)**：加固 daemon-managed channel worker —— [#6098](https://github.com/QwenLM/qwen-code/pull/6098)
- 🐛 **fix(web-shell)**：延迟 session 创建时机
- 🔗 [Release v0.19.4-nightly](https://github.com/QwenLM/qwen-code/releases/tag/v0.19.4-nightly.20260702.46814e4f1)

---

## 🔥 社区热点 Issues

| # | 标题 | 状态 | 评论 | 关注理由 |
|---|---|---|---|---|
| [#61](https://github.com/QwenLM/qwen-code/issues/61) | **Qwen Code FAQ**（30 条评论、👍4） | CLOSED | 30 | 社区"百科全书"，覆盖 API Key 申请、一行命令启动、常见报错等高频疑问，是新人必读 |
| [#4888](https://github.com/QwenLM/qwen-code/issues/4888) | **IDEA 插件 ask_user_question 不显示问题文本** | CLOSED | 11 | IDEA 集成体验直接阻塞用户交互，影响 IDE 用户面 |
| [#1281](https://github.com/QwenLM/qwen-code/issues/1281) | **Ollama 部署的 Qwen 模型返回 JSON 格式响应** | CLOSED | 7 | 本地模型落地刚需问题，反映 Ollama 接入稳定性 |
| [#5080](https://github.com/QwenLM/qwen-code/issues/5080) | **阿里云 Standard API Key 与 Token Plan 接入点混用导致 401** | CLOSED | 6 | 国内用户最常踩的坑，涉及认证与会话隔离 |
| [#1093](https://github.com/QwenLM/qwen-code/issues/1093) | **gitignore 与 qwenignore 配置冲突** | OPEN | 6 | 工具读取行为不符合用户预期，长期 reopen |
| [#4748](https://github.com/QwenLM/qwen-code/issues/4748) | **daemon 冷启动优化 2.5s → 1.5s** | OPEN | 5 | 性能议题，由核心维护者 doudouOUC 发起，体现官方对 daemon 体验的持续打磨 |
| [#6094](https://github.com/QwenLM/qwen-code/issues/6094) | **qqbot cron + blockStreaming 交互异常** | OPEN | 5 | PR #5902 评审衍生问题，反映 qqbot 流式输出仍不稳定 |
| [#1105](https://github.com/QwenLM/qwen-code/issues/1105) | **VS Code 中缺少 Accept/Close Diff Editor 命令** | CLOSED | 5 | VS Code 扩展能力缺位，影响日常 diff 工作流 |
| [#1316](https://github.com/QwenLM/qwen-code/issues/1316) | **修改初始化文件后历史与记忆不同步** | CLOSED | 5 | 上下文刷新机制缺陷，长期被诟病 |
| [#1280](https://github.com/QwenLM/qwen-code/issues/1280) | **qwen-code 无法使用本地 Ollama 部署的 qwen3-coder** | CLOSED | 5 | 与 #1281 同源，社区对离线/私有化部署有强烈诉求 |

---

## 🛠️ 重要 PR 进展

| # | 类型 | 内容 | 链接 |
|---|---|---|---|
| [#6152](https://github.com/QwenLM/qwen-code/pull/6152) | refactor | **集中化 extension runtime refresh**：将 `ExtensionManager.refreshMemory()` 拆为独立 `refreshExtensionRuntime()`，为热重铺路 | [查看](https://github.com/QwenLM/qwen-code/pull/6152) |
| [#6125](https://github.com/QwenLM/qwen-code/pull/6125) | feat | **`/schedule` 本地常驻调度 daemon**：无需打开会话即可按 cron 触发任务，覆盖 MVP/UI/Progress/Web 四个阶段 | [查看](https://github.com/QwenLM/qwen-code/pull/6125) |
| [#5895](https://github.com/QwenLM/qwen-code/pull/5895) | feat | **daemon session artifact API**：agent 可向工具结果附加结构化元数据，hooks 可后置补充，client 可增删查 | [查看](https://github.com/QwenLM/qwen-code/pull/5895) |
| [#6161](https://github.com/QwenLM/qwen-code/pull/6161) | fix | **WebUI 会话不再阻塞等待 MCP 发现完成**：配置初始化后立即返回，MCP 后台继续 | [查看](https://github.com/QwenLM/qwen-code/pull/6161) |
| [#5953](https://github.com/QwenLM/qwen-code/pull/5953) | feat | **LSP Server 热重载**：`.lsp.json` 变更时自动检测并重载 LSP 配置（[#3696](https://github.com/QwenLM/qwen-code/issues/3696)） | [查看](https://github.com/QwenLM/qwen-code/pull/5953) |
| [#6158](https://github.com/QwenLM/qwen-code/pull/6158) | feat | **MCP 能力发现重试与指数退避**：新增 `mcp-retry` 模块，针对瞬时错误自动重试 | [查看](https://github.com/QwenLM/qwen-code/pull/6158) |
| [#5902](https://github.com/QwenLM/qwen-code/pull/5902) | fix | **qqbot 流式改进**：2s 空闲 flush、移除 2000 字限制、加 replyMsgId TTL、修复 markdown 表格识别 | [查看](https://github.com/QwenLM/qwen-code/pull/5902) |
| [#6146](https://github.com/QwenLM/qwen-code/pull/6146) | feat | **worker stderr 凭据脱敏**：新增 `redactLogCredentials`，ACP 子进程日志不再泄漏 key | [查看](https://github.com/QwenLM/qwen-code/pull/6146) |
| [#6045](https://github.com/QwenLM/qwen-code/pull/6045) | fix | **多模态历史 payload 瘦身**：将历史图片替换为稳定文本引用，仅最近图片按需重附，显著降低请求体积 | [查看](https://github.com/QwenLM/qwen-code/pull/6045) |
| [#6105](https://github.com/QwenLM/qwen-code/pull/6105) | feat | **通道适配器身份与任务生命周期元数据**：常驻通道代理的 P0 基础，引入 metadata-only 记忆范围 | [查看](https://github.com/QwenLM/qwen-code/pull/6105) |

> CI 自动化方面，#6151、#6156、#6159、#6160、#6162、#6133 形成"小步快跑"集群，集中修复 fork PR 凭据、precheck 评论路径与发布校验流程，建议关注 PR 模板与 bot 行为的开发者一并 review。

---

## 📈 功能需求趋势

从近 24 小时 50 条 Issue 中可归纳出五个最显著的需求方向：

1. **本地 / 私有化模型接入** 🔥
   典型代表：#1280、#1281、#6144。围绕 Ollama 部署 qwen3-coder 的 JSON 响应、ctx-size 计算异常等反复出现，是离线场景用户的最大痛点。

2. **IDE 集成体验** 🔥
   典型代表：#4888（IDEA）、#1105（VS Code）。用户期望 IDE 插件能完整承担 diff、问答、表单交互等核心能力。

3. **认证 / API Key 会话隔离** 🔥
   典型代表：#5080、#5979。`/auth` 与 `/model` 修改后新会话仍 401、Standard Key 与 Token Plan 混用冲突，是国内阿里云百炼用户的高频痛点。

4. **性能 / 启动速度**
   典型代表：#4748（daemon 冷启动 2.5s → 1.5s）、#3696（综合热重载系统）。官方已立项，多个 PR（#5953、#6155、#6045）并行推进。

5. **模型容灾与多模型路由**
   典型代表：#6116（fallback model chain）。当主模型 429/503/529 时希望自动切换到 1–3 个备用模型，提升生产可用性。

6. **可移植性与导出能力**
   典型代表：#2373（项目本地 chat history + 单会话导出）。

---

## 💡 开发者关注点

整理自社区反馈与新提交的 PR，可以提炼出当前开发者最关注的四个痛点：

| 痛点 | 体现 |
|---|---|
| **🔁 热重载与"无重启"工作流** | #3696 跟踪 issue 热度不减；#5953 实现 LSP 热重载、#6152 重构 extension refresh 函数，皆为该方向铺路 |
| **🛡️ 凭据安全与日志净化** | #6146 在 worker stderr 上做凭据脱敏；多个 CI PR 也在收紧 fork PR 的 token 权限边界 |
| **⚡ 启动与请求体积性能** | #6155 memoize 技能扫描、debounce sleep-inhibitor 日志；#6045 削减多模态历史 payload |
| **🤖 Bot 通道的稳定性** | qqbot 流式问题被拆分为 #6094 + #5902 两线推进；#6114/#6105 推动通道适配器的生命周期标准化 |

> **建议**：本地模型接入（Ollama/vLLM）与 IDE 插件体验仍是社区"声量高、闭环慢"的领域，如希望贡献可优先关注这两个方向的 open issue。

---

*报告基于 github.com/QwenLM/qwen-code 公开数据生成 · 统计窗口：2026-07-01 ~ 2026-07-02*

</details>

---
*本日报由 [Big Model Radar](https://github.com/96loveslife/big_model_radar) 自动生成。*
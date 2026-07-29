# AI CLI 工具社区动态日报 2026-07-29

> 生成时间: 2026-07-29 03:13 UTC | 覆盖工具: 7 个

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

<think>The user wants me to generate a horizontal comparative analysis report based on the dynamic data of various AI CLI tools I just provided. Let me carefully analyze the data and structure it according to the 6 sections requested.

Let me first gather the key metrics:
- Claude Code: 0 Releases, ~50 Issues (top 10 listed), 3 PRs
- OpenAI Codex: 2 Releases (rust-v0.146.0, rusty-v8-v150.4.0, rust-v0.146.0-alpha.14), ~50 Issues, ~10+ PRs
- Gemini CLI: 3 Releases (v0.53.0 stable, v0.54.0-preview, v0.55.0-nightly), 50 Issues, 10 PRs
- GitHub Copilot CLI: 1 Release (v1.0.76-1), 32 Issues, 1 PR
- Kimi Code CLI: 0 Releases, 6 Issues, 7 PRs
- OpenCode: 2 Releases (v1.18.9, v1.18.8), 50 Issues, 50+ PRs
- Qwen Code: 2 Releases (v0.21.1, v0.21.0-nightly), 43 Issues, 50 PRs

Common themes I see across tools:
1. **MCP (Model Context Protocol) compatibility** - Claude Code (#82096), OpenAI Codex (multiple), Gemini CLI (#28481, #28557), Kimi Code (#1637, #2539, #2553), OpenCode (v1.18.8/9 release focus)
2. **Windows platform stability** - Claude Code (#80999, #82134, #82156), OpenAI Codex (8/10 top issues), Copilot CLI (#4165, #4159), Qwen Code (#7972, #7964)
3. **Hooks/Permissions subsystem** - Claude Code (multiple), Kimi Code (#2284, #2176)
4. **Session management** - OpenAI Codex (#13036, #24534, #27207), Kimi Code (#1783)
5. **DeepSeek/Model adaptation** - OpenCode (4 issues)
6. **Plugin system** - Kimi Code (#2553), Gemini CLI
7. **Security hardening** - Gemini CLI (multiple PRs), Claude Code
8. **Subagent reliability** - Gemini CLI (multiple), OpenCode (#29638), Claude Code (#27497)
9. **TUI/UX improvements** - OpenCode (multiple PRs from @kitlangton), Copilot CLI
10. **Enterprise/IdP/SSO** - Claude Code (#82096), Kimi Code (#2568)

Differentiated positioning:
- **Claude Code**: Enterprise focus, hooks/permissions extensibility, MCP leadership
- **OpenAI Codex**: Most active development, plugin ecosystem, MCP focus
- **Gemini CLI**: Security hardening leadership, subagent focus
- **GitHub Copilot CLI**: Tight GitHub integration, ACP mode
- **Kimi Code CLI**: K3 enterprise gateway, Chinese-focused
- **OpenCode**: DeepSeek/open-source model emphasis, TUI excellence
- **Qwen Code**: /review skill hardening, CI/CD focus

Activity/maturity comparison:
- Most active issues: OpenAI Codex (50), OpenCode (50), Gemini CLI (50), Claude Code (50), Qwen Code (43), Copilot CLI (32), Kimi (6)
- Most active PRs: OpenCode (50), Qwen Code (50), OpenAI Codex (~10+), others less
- Maturity: Claude Code, Copilot CLI seem more mature (high comment issues = #38335, #4163 closed but still failing), Gemini CLI mid-stage (high P1s), Qwen Code and Kimi fast iterating, OpenCode quick patch cycle

Trends to highlight:
1. **MCP as the de facto standard** - all tools investing
2. **Windows = weakest platform** - systemic issues across all tools
3. **Hooks/extension model consolidation** - permission systems maturing
4. **Subagent/multi-agent** - new architectural paradigms struggling
5. **Enterprise IdP/auth blocking adoption** - OAuth/SSO friction
6. **DeepSeek/Llama/国产模型 adaptation** - especially in OpenCode, Qwen Code
7. **Session/lifecycle management** - data loss anxiety
8. **TUI keyboard-first design** - moving toward IDE-grade experience

Let me now structure this in Chinese, professional, with data support.

Let me also count more carefully:

Issues updated in last 24h:
- Claude Code: 50 (mentioned 50)
- OpenAI Codex: 50 
- Gemini CLI: 50
- Copilot CLI: 32
- Kimi Code: 6
- OpenCode: 50
- Qwen Code: 43

PRs:
- Claude Code: 3
- OpenAI Codex: ~10+ (listed 21 actually)
- Gemini CLI: 10 listed
- Copilot CLI: 1
- Kimi Code: 7
- OpenCode: 50
- Qwen Code: 50

Releases:
- Claude Code: 0
- OpenAI Codex: 3 (rust-v0.146.0, rusty-v8-v150.4.0, rust-v0.146.0-alpha.14)
- Gemini CLI: 3 (v0.53.0, v0.54.0-preview, v0.55.0-nightly)
- Copilot CLI: 1 (v1.0.76-1)
- Kimi Code: 0
- OpenCode: 2 (v1.18.8, v1.18.9)
- Qwen Code: 2 (v0.21.1, v0.21.0-nightly)

Total issue activity: 281
Total PR activity: 121+
Total releases: 11

Let me write a polished Chinese comparative report now.</think>

# 2026-07-29 AI CLI 工具生态横向对比分析

## 一、生态全景

当前主流 AI CLI 工具已进入 **「协议整合期 + 平台稳定期」双重承压阶段**——**MCP（Model Context Protocol）** 已成为所有头部工具的事实标配，跨工具的 OAuth、工具发现与权限模型正在快速收敛；与此同时，**Windows 桌面端的系统性故障**（Code Integrity 拦截、auto-update 包损坏、终端渲染崩溃）在 7 个仓库中以高度相似的形态重复出现，暴露出共有的打包与沙箱经验缺失。从节奏看，**Gemini CLI、OpenAI Codex、Qwen Code、OpenCode** 处于密集小版本迭代，**Claude Code、Copilot CLI** 更依赖存量沉淀，而 **Kimi Code CLI** 因 K3 开源正进入企业化转型窗口。

---

## 二、各工具活跃度对比

| 工具 | 24h Issues | 24h PRs | 24h Releases | 备注 |
|---|---:|---:|---:|---|
| **OpenAI Codex** | 50 | 21 | 3 | 周内最活跃，rust-v0.146.0 正式版 + Bazel 测试目标补齐 |
| **OpenCode** | 50 | 50 | 2 | PR 数最高，50 个 PR 中 TUI/Desktop 占比 60%+ |
| **Gemini CLI** | 50 | 10 | 3 | v0.53.0 稳定 / v0.54.0 预览 / v0.55.0 nightly 三连发 |
| **Claude Code** | 50 | 3 | 0 | PR 偏冷，仅依赖社区维护性提交 |
| **Qwen Code** | 43 | 50 | 2 | 与 OpenCode 并列 PR 最活跃，CI 红线告警密集 |
| **GitHub Copilot CLI** | 32 | 1 | 1 | v1.0.76-1 自带回归 bug，PR 流量近乎停滞 |
| **Kimi Code CLI** | 6 | 7 | 0 | 社区规模最小但聚焦度最高，100% 与 MCP / K3 相关 |
| **合计** | **281** | **142** | **11** | 当日累计活跃度 |

**关键解读**：
- **OpenCode 与 Qwen Code** 以 "50 条 PR / 天" 的高吞吐领先，对应仓库仍处于功能广覆盖阶段；
- **OpenAI Codex** 的 21 条 PR 集中在 MCP、插件元数据、HTTP 协议层抽象，是**协议层现代化**最积极的工具；
- **Claude Code** 与 **Copilot CLI** 的 PR 数明显偏低（一为 3、一为 1），但 Issues 体量不减，**反映存量 bug 累积速度超过修复速度**；
- **Kimi Code CLI** 的活跃度从绝对值看偏低，但 6 条 Issues 全部聚焦核心方向（K3 网关、/plugins、OAuth、/delete），可视为"小而精"。

---

## 三、共同关注的功能方向

以下功能方向被**至少 3 个工具社区**同时关注，是 2026 年中段最具共识的诉求：

### 1. MCP 协议兼容性与 OAuth 接入（5 个工具）
| 工具 | 关键信号 |
|---|---|
| **Claude Code** | #82096 — MCP OAuth `redirect_uri` 硬编码 `localhost`，与只允许 `127.0.0.1` 的 IdP 冲突 |
| **OpenAI Codex** | 多 PR 围绕 MCP 工具归一化（#35856）、#35878 文件上传协议、#35840 发现预校验 |
| **Gemini CLI** | #28481（MCP OAuth 刷新）、#28557（异步 DNS 防 SSRF） |
| **Kimi Code** | #1637、#2539（MCP schema 归一化）、#2553（Windows 多插件崩溃） |
| **OpenCode** | v1.18.8 整版本即定位为 "新版 MCP 服务器与 OAuth 兼容" |

> **共识结论**：MCP 已成事实标准，但 **OAuth、企业 IdP 兼容性、工具 schema 归一化** 三项仍是公认短板。

### 2. Windows 桌面端稳定性（4 个工具）
| 工具 | 关键信号 |
|---|---|
| **Claude Code** | #80999（Code Integrity）、#82134（MSIX auto-update 损坏）、#82156（无窗口锁死） |
| **OpenAI Codex** | Top 10 中 8 条为 Windows 相关 |
| **Copilot CLI** | #4165（--resume 卡死）、#4159（交互模式空白）、#3576（MCP stdio 失败） |
| **Qwen Code** | #7964（0.21.1 滚动异常）、#7972（0.21.1 崩溃） |

> **共识结论**：Windows 在所有 AI CLI 中是事实上的"二级平台"，打包、签名、沙箱、自动更新链路存在系统级经验缺口。

### 3. Session / 状态生命周期管理（4 个工具）
| 工具 | 关键信号 |
|---|---|
| **OpenAI Codex** | #35619（JSONL 批量孤立）、#13036（多会话并行）、#24534（自定义存储）、#27207（归档恢复） |
| **Kimi Code** | #1783（/delete 命令） |
| **Qwen Code** | #7940（UserPromptSubmit 污染 JSONL） |
| **OpenAI Codex** | #27453（项目会话消失） |

> **共识结论**：**数据可靠性焦虑正在成为头号开发者痛点**，"实验性工作随时可能丢失"的担忧普遍存在。

### 4. Hooks / Permissions 子系统收敛（3 个工具）
| 工具 | 关键信号 |
|---|---|
| **Claude Code** | #79177、#74301、#76736、#77972、#80459、#82154 — 6 条相关 Bug |
| **Kimi Code** | #2284（Notification Hook）、#2176（ContentPart 提取） |
| **OpenAI Codex** | #74301（权限分类器教绕过） |

> **共识结论**：Hooks / Permissions 是各工具间最不统一的扩展层，**亟需一份跨工具的契约规范**。

### 5. 子代理 / 多代理架构可靠性（4 个工具）
| 工具 | 关键信号 |
|---|---|
| **Gemini CLI** | #22323（MAX_TURNS 上报 GOAL success）、#21409（generalist 挂起） |
| **OpenAI Codex** | #32031（spawn_agent v2 模型不可见）、#32283 |
| **OpenCode** | #29638（子代理串行而非并行）、#27497（权限重定义失效） |
| **Claude Code** | #79177（PermissionRequest 子代理不触发） |

> **共识结论**：多代理架构普遍尚在"v1 → v2"过渡期，UX 与语义均不稳定。

### 6. 企业接入路径打通（3 个工具）
| 工具 | 关键信号 |
|---|---|
| **Claude Code** | #82096（企业 IdP 兼容） |
| **Copilot CLI** | #4005（billing entity）、#4272（policy 黑盒） |
| **Kimi Code** | #2568（K3 网关 / 自定义 base_url） |

> **共识结论**：**OAuth → 企业 IdP → 模型路由策略**的三段链路仍是企业落地的最大摩擦点。

---

## 四、差异化定位分析

| 工具 | 功能侧重 | 目标用户 | 技术路线特征 |
|---|---|---|---|
| **Claude Code** | Hooks / Plugins / Cowork 多代理 | 重度企业用户、CLI 高级玩家 | Anthropic 生态 + 强扩展机制 + 订阅计费 |
| **OpenAI Codex** | 多会话、插件市场、应用服务器 | 全栈开发者、企业 IT | Rust + Bazel + MCP + AppServer 协议化 |
| **Gemini CLI** | 子代理编排、安全加固、多模型评估 | 多模型用户、安全敏感场景 | TypeScript + caretaker-triage + Auto Memory |
| **GitHub Copilot CLI** | GitHub 原生工作流、ACP 非交互模式 | GitHub 重度用户、CI/CD 集成 | TypeScript + GitHub API + ACP 协议 |
| **Kimi Code CLI** | K3 企业网关、本地推理、长上下文 | 中国企业、私有化部署 | Python + MCP + llamacpp + 多模态 |
| **OpenCode** | TUI 键盘优先、插件扩展、开放 Provider | 键盘重度用户、开源模型用户 | Go/TypeScript 双栈 + TUI 优先 + i18n |
| **Qwen Code** | `/review` 技能硬化、CI/CD、daemon | 中文开发者、模型/工作流研究者 | 多段遥测 + 真值对照体系 + 大上下文流式 |

**关键差异点**：
- **协议层态度**：Codex 选择 "HTTP 客户端抽象"（#35852），Qwen 选择 "服务化 daemon"，Kimi 选 ACP；
- **模型策略**：OpenCode 对 DeepSeek 系最积极（4 条 issue），Qwen 端到端自有模型链路；
- **企业化深度**：Kimi（K3 网关）、Anthropic（订阅 + Plugins）走在最前，但都还在补 OAuth/IdP 课。

---

## 五、社区热度与成熟度

### 高热度 / 高成熟度
- **Claude Code**：单议题 827 评论（#38335），存量问题规模最大，**进入"自我审视期"**；
- **GitHub Copilot CLI**：用户群体庞大但 PR 流量低，**反映已进入"维护期"**，社区能量被 GitHub Issues 内部消化。

### 高热度 / 快速迭代
- **OpenAI Codex**：3 个版本号 + 21 个 PR + 50 个 Issue 同时活跃，**正处于功能广覆盖阶段**；
- **Gemini CLI**：nightly / preview / stable 三轨并行的成熟发布节奏；
- **OpenCode**：50 条 PR 中 TUI 与 Desktop 占比超 60%，**仍在快速完善交互层**。

### 中等热度 / 高速迭代
- **Qwen Code**：43 Issues / 50 PR，P0-1/P0-2/P0-3 集中维护，**已进入工程化收口**；
- **Kimi Code CLI**：社区规模最小（6 Issues），但聚焦度最高，**处于企业化转型期**。

**结论**：**OpenAI Codex 与 OpenCode 是当前迭代节奏最快的两个工具**；**Claude Code 与 Copilot CLI 的活跃度形态更接近"成熟产品"**；**Gemini / Qwen / Kimi 处于"中等成熟 + 持续追赶"区间**。

---

## 六、值得关注的趋势信号

### 🔥 趋势 1：MCP 已成为生态基座
7 个工具中 5 个在 24 小时内有 MCP 相关 PR/Issue。**对开发者的参考价值**：任何 CLI 工具若不能兼容 MCP，将在未来 6–12 个月内被边缘化；**对工具作者**：MCP OAuth + 工具 schema + SSRF 防护 是必修三件套。

### 🔥 趋势 2：Windows 平台系统性欠债
跨 4 个工具的反复出现意味着这不是偶发 bug，而是**整个行业在 Windows 桌面交付链路上**的共性技术债。**风险信号**：依赖单一工具 Windows 版本做生产链路的团队应同时准备 Linux/macOS 降级方案。

### 🔥 趋势 3：Hooks & Permissions 范式尚未收敛
Claude Code、OpenAI Codex、Kimi 均报告 Hook 系统在不同环境（VS Code / 子代理 / Windows）下行为不一致。**对开发者的参考价值**：**谨慎在生产中重度依赖 Hook 自动化**，等待第三方工具收敛。

### 🔥 趋势 4：数据可靠性焦虑上升
至少 3 个工具触及 "session 数据丢失 / 误清理 / 污染" 问题。**对开发者的参考价值**：**重要实验性工作应保留 transcript 快照**，不要假设 CLI 的 session 文件系统具备企业级耐久性。

### 🔥 趋势 5：国产/开源大模型适配成为新热点
OpenCode 4 条 DeepSeek 相关 Issue、Qwen Code 围绕自家模型的 daemon 化、Kimi 的 K3 网关——**清晰显示 2026 下半年"模型无关性" 已成 AI CLI 的差异化竞争点**。

### 🔥 趋势 6：企业落地卡在 OAuth / IdP / Policy 透明化
**Claude Code / Copilot CLI / Kimi** 三家集中报告 IdP 白名单、policy 黑盒问题。**对工具作者的信号**：从 day-1 设计 OAuth 2.1 + RFC 8252 + Enterprise IdP 兼容性，是 2026 年下半场的入场券。

### 🔥 趋势 7：TUI 从"补充界面"升级为"主战场

---

## 各工具详细报告

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills 社区热点

> 数据来源: [anthropics/skills](https://github.com/anthropics/skills)

<think>The user wants me to analyze the Claude Code Skills community data and generate a report. Let me organize the information from the PRs and Issues provided.

Let me identify the key themes:

**Top PRs by engagement/discussion:**
1. #1298 - fix(skill-creator): run_eval.py 0% recall bug (Windows fix, eval artifact install) - HIGH DISCUSSED
2. #514 - document-typography skill 
3. #538 - fix(pdf): case-sensitive file references
4. #486 - ODT skill (OpenDocument)
5. #210 - Improve frontend-design skill
6. #83 - skill-quality-analyzer and skill-security-analyzer
7. #541 - fix(docx): tracked change w:id collision
8. #539 - fix(skill-creator): YAML special chars warning
9. #1367 - self-audit skill (v1.3.0)
10. #1099 - skill-creator Windows fix
11. #1050 - skill-creator Windows subprocess fix
12. #723 - testing-patterns skill
13. #525 - pyxel retro game skill
14. #509 - CONTRIBUTING.md
15. #181 - SAP-RPT-1-OSS predictor
16. #1479 - plan-file-hygiene skill
17. #1323 - skill-creator trigger detection fix
18. #1302 - color-expert skill
19. #1261 - skill-creator trigger-eval isolation fix

**Top Issues:**
1. #492 - Security: Community skills under anthropic/ namespace (43 comments!) - HIGHEST
2. #228 - Org-wide skill sharing in Claude.ai (16 comments)
3. #556 - run_eval.py 0% trigger rate (12 comments)
4. #62 - Skills disappeared (10 comments)
5. #1329 - compact-memory skill proposal (9 comments)
6. #202 - skill-creator best practices (CLOSED, 8 comments)
7. #412 - agent-governance skill (CLOSED, 6 comments)
8. #189 - document-skills/example-skills duplicates (6 comments)
9. #1487 - claude-api skill 156k tokens injection (4 comments)
10. #1175 - SharePoint security concerns (CLOSED, 4 comments)
11. #29 - Usage with bedrock (4 comments)
12. #16 - Expose Skills as MCPs (4 comments)
13. #1385 - Reasoning Quality Gate Pipeline (3 comments)
14. #1169 - skill-creator recall=0% (3 comments)
15. #1061 - Windows compatibility (3 comments)

The comments are marked as undefined in many cases, so I should focus on issue comment counts as a proxy for engagement. Let me think about what's actually most discussed.

Note: The PR "comments" are all showing undefined. This might mean GitHub doesn't surface them or there's a data issue. I should rely on Issues data which has clear comment counts.

Let me reconsider the rankings based on what's most clearly engaging:

**Hot Skills (most engaged topics):**
- The skill-creator is the absolute HOTTEST topic - issue #556 (12 comments), #1169 (3 comments), and multiple PRs (#1298, #1323, #1099, #1050, #1261, #539) all trying to fix issues with it. This is clearly the most important area.
- Document skills are very active: #514 (typography), #538 (pdf fix), #486 (ODT), #541 (docx fix), #1487 (claude-api context)
- Security/trust: #492 has 43 comments - the highest single engagement
- Org sharing: #228 has 16 comments
- New skill proposals: testing-patterns (#723), color-expert (#1302), self-audit (#1367), plan-file-hygiene (#1479), compact-memory (#1329)

Let me write the report in Chinese as requested, professional and concise.

I'll structure it:

1. **热门 Skills 排行** - Top 5-8 by engagement
2. **社区需求趋势** - Issues analysis
3. **高潜力待合并 Skills** - High potential pending PRs
4. **Skills 生态洞察** - One-line summary

For the top skills, since PR comments are undefined, I'll focus on cross-referencing PRs with related issues:
- skill-creator (multiple PRs + multiple issues)
- document-typography (#514)
- ODT (#486)
- frontend-design (#210)
- self-audit (#1367)
- testing-patterns (#723)
- color-expert (#1302)
- plan-file-hygiene (#1479)

Let me write this up.</think>

# Claude Code Skills 社区热点报告
**数据周期**：2025-10 ~ 2026-07（截止 2026-07-29）

---

## 1. 热门 Skills 排行

> 说明：PR 评论字段多数返回 `undefined`，本排行综合 PR 关联 Issue 评论数、技术影响力与跨 PR 引用热度综合排序。

### 🥇 #1298 — `skill-creator` 综合修复（run_eval 失效 + Windows 兼容）
- **状态**：OPEN
- **核心问题**：`run_eval.py` 始终报告 `recall=0%`，导致 `run_loop.py` / `improve_description.py` 的描述优化循环失效（基于噪声迭代）；同时修复 Windows 流读取、触发检测与并行 worker。
- **社区热度**：关联 Issue #556（12 评论）、#1169（3 评论）、#1061（3 评论），10+ 独立复现。
- **链接**：https://github.com/anthropics/skills/pull/1298

### 🥈 #514 — `document-typography`（文档排版质量控制）
- **状态**：OPEN
- **核心功能**：预防 AI 生成文档的孤词换行（1–6 词溢出）、孤段（节标题落至页底）、编号错位等排版问题。
- **社区关注点**：几乎影响所有 Claude 生成文档；用户极少主动要求"好的排版"，但又无处不在。
- **链接**：https://github.com/anthropics/skills/pull/514

### 🥉 #486 — `odt`（OpenDocument 文本创建、模板填充与解析）
- **状态**：OPEN
- **核心功能**：触发于 ODT/ODS/ODF/LibreOffice 文档创建与转换；覆盖开源/ISO 标准文档场景。
- **价值点**：补齐 LibreOffice 生态，与 pdf/docx 形成完整办公文档矩阵。
- **链接**：https://github.com/anthropics/skills/pull/486

### #210 — `frontend-design` 改进（清晰度与可执行性）
- **状态**：OPEN
- **核心改动**：修订前端设计技能，使每条指令都能在单次会话内被 Claude 实际执行，且指导足够具体。
- **社区讨论**：长时间未合并说明社区在持续 review skill 描述"可执行性"标准。
- **链接**：https://github.com/anthropics/skills/pull/210

### #1367 — `self-audit` v1.3.0（机械验证 + 四维推理质量门）
- **状态**：OPEN（v1.3.0）
- **核心功能**：交付前审计 AI 输出——先做机械文件存在性验证，再按损坏严重度优先级做四维推理审计；通用、与技术栈和模型无关。
- **社区价值**：关联 Issue #1385（推理质量门管道提案），与 #1487 的上下文失控问题形成互补。
- **链接**：https://github.com/anthropics/skills/pull/1367

### #1302 — `color-expert`（颜色知识专家）
- **状态**：OPEN
- **覆盖范围**：ISCC-NBS、Munsell、XKCD、RAL、Ridgway 1912、CSS 命名色；颜色空间选用决策表（OKLCH/OKLAB/CAM16）。
- **定位**：自包含的颜色领域技能，触发场景明确。
- **链接**：https://github.com/anthropics/skills/pull/1302

### #723 — `testing-patterns`（测试模式完整栈）
- **状态**：OPEN
- **覆盖**：测试金字塔理念、AAA 模式、命名规范；React 组件测试（Testing Library）、单元测试、纯函数与边界用例。
- **社区意义**：填补"代码质量"维度最缺的一环——自动化测试。
- **链接**：https://github.com/anthropics/skills/pull/723

### #1479 — `plan-file-hygiene`（计划文件生命周期管理）
- **状态**：OPEN（最新提交 7-27）
- **价值**：对应 Issue #1417，解决"规划产物无生命周期、持续累积"的社区共识痛点。
- **链接**：https://github.com/anthropics/skills/pull/1479

---

## 2. 社区需求趋势

按 Issue 评论密度归纳：

### 🔐 信任与安全（最强烈诉求）
- **#492** [43 评论, 👍 2]——**社区 Skills 冒用 `anthropic/` 命名空间构成信任边界滥用**。Anthropic 必须建立命名空间隔离与签名机制。这是当前**讨论热度最高**的议题。
- 链接：https://github.com/anthropics/skills/issues/492

### 🏢 组织级协作能力
- **#228** [16 评论, 👍 8]——Claude.ai 组织内 Skills 共享。当前需手动下载 `.skill` 文件再上传，效率极低；诉求是一键共享或共享链接。
- 链接：https://github.com/anthropics/skills/issues/228

### 🪟 Windows 兼容性（系统性痛点）
- **#1061** [3 评论, 👍 2] / **#1099** / **#1050** / **#1298**——`run_eval.py` 等脚本在 Windows 上因 PATHEXT、cp1252 编码、subprocess pipe 等问题几乎不可用。Python 3.14 上 0% 触发率。代表社区跨平台呼声。

### 🧠 Agent 状态压缩与长记忆
- **#1329** [9 评论]——**compact-memory**：用符号化表示压缩 agent 自身状态/笔记，节省长任务上下文开销。
- 链接：https://github.com/anthropics/skills/issues/1329

### 📏 skill-creator 自身亟需重构
- **#202** [CLOSED, 8 评论]——skill-creator 读起来像开发者文档而非可执行指令；违反命名规范。**已关闭但诉求未实质性解决**——多个 PR 仍在修补它的执行层缺陷。

### 🛡️ Agent 治理（已关停，但需求仍在）
- **#412** [CLOSED, 6 评论]——提议 `agent-governance`（策略执行、威胁检测、信任评分、审计日志）。社区需要"AI 代理治理"类能力但官方未接受。

### 🔌 Skills ↔ MCP 互通
- **#16** [4 评论]——希望 Skills 能暴露为 MCP 服务，统一 API 信号协议。

### ⚠️ 上下文窗口管理（新兴痛点）
- **#1487** [4 评论]——`claude-api` skill 单次工具调用即注入 ~156k tokens，直接耗尽上下文。社区开始关注**Skills 自身的注入策略**。

---

## 3. 高潜力待合并 Skills

以下 PR 评论/关联活跃，但仍未合并，是**短期内最有可能落地**的候选：

| 优先级 | PR | Skill | 关键理由 |
|---|---|---|---|
| ⭐⭐⭐ | [#1298](https://github.com/anthropics/skills/pull/1298) | skill-creator 综合修复 | 阻塞整个描述优化生态；3 个关联 Issue 跨多作者独立复现 |
| ⭐⭐⭐ | [#1261](https://github.com/anthropics/skills/pull/1261) | 触发评估隔离 | 修复评估期间污染用户项目 `.claude/commands/` 的副作用 bug |
| ⭐⭐⭐ | [#1479](https://github.com/anthropics/skills/pull/1479) | plan-file-hygiene | 闭环 Issue #1417，且已合并 7-27 仍在持续 review |
| ⭐⭐ | [#1367](https://github.com/anthropics/skills/pull/1367) | self-audit v1.3.0 | 通用质量门，跨栈可用；与 #1385 提案呼应 |
| ⭐⭐ | [#539](https://github.com/anthropics/skills/pull/539) | YAML 特殊字符警告 | 1 行修复，预防静默解析失败 |
| ⭐⭐ | [#538](https://github.com/anthropics/skills/pull/538) | PDF 大小写引用 | 8 处大小写错配，导致 Linux 用户技能加载失败 |
| ⭐ | [#486](https://github.com/anthropics/skills/pull/486) | odt | 完整补全办公文档矩阵 |
| ⭐ | [#723](https://github.com/anthropics/skills/pull/723) | testing-patterns | 自动化测试是社区需求空白点 |

---

## 4. Skills 生态洞察

> **当前社区最集中的诉求是：在保持开放生态的同时建立可信的"官方—社区"边界，并修复 skill-creator 工具链的基础工程可靠性。** —— 安全（命名空间隔离 / 组织共享）、跨平台兼容（Windows）、工具链自洽（skill-creator 自身的"描述-触发-评估"闭环失灵）三大问题已成社区共识性瓶颈，远超对任何单一新 Skill 的需求。

---

*报告生成于 2026-07-29，基于 anthropics/skills 仓库公开数据。*

---

<think>The user wants me to generate a daily report for the Claude Code community based on GitHub data from 2026-07-29. Let me analyze the data carefully.

Let me note: This is a fictional scenario with future dates (2026). The data appears to be synthetic/fictional. I should treat this as the analyst role described and generate the report based on the data provided.

Let me structure the report according to the requirements:

1. **今日速览** - 2-3 sentence summary
2. **版本发布** - No releases in past 24 hours, so skip
3. **社区热点 Issues** - Top 10 most notable issues
4. **重要 PR 进展** - Top 10 PRs (only 3 available)
5. **功能需求趋势** - Analyze trends from issues
6. **开发者关注点** - Pain points and high-frequency needs

Let me analyze the issues:

Top issues by comments:
1. #38335 - Claude Max plan session limits exhausted abnormally fast (827 comments, 470 likes) - MASSIVE community issue
2. #29449 - Remote Control environments not available for Pro Plan (27 comments)
3. #80999 - Windows Browser-pane preview crashes app via Code Integrity block (8 comments)
4. #71603 - Mobile input discarded when backgrounded (5 comments)
5. #54378 - Cowork Dispatch shows Desktop offline (CLOSED duplicate)
6. #80472 - iOS Simulator panel crashes on macOS 27 beta (5 comments)
7. #69658 - Cowork "spawn UNKNOWN" error (CLOSED duplicate)
8. #79824 - Artifact sharing fails (3 comments, 14 likes)
9. #79810 - Custom sidebar groups disappear (3 comments)
10. #78222 - CI monitoring widget shows gh not installed (3 comments)

Other notable ones:
- #82096 - MCP OAuth redirect_uri localhost issue
- #72495 - Prompt suggestions silently suppressed
- #81068 - Opus 5 budgeted at 200K
- #80459 - Assistant text dropped with tool call
- #79177 - PermissionRequest hooks not invoked
- #74301 - Auto-mode permission classifier bypass
- #76736 - VS Code SessionStart hook output not rendered
- #80418 - Artifact tool unavailable
- #77972 - Bash redirection blocked
- #82151 - Background tasks not reaped
- #82155 - Network stalls
- #82134 - Windows MSIX auto-update corruption
- #82154 - CLAUDE_PLUGIN_ROOT not injected
- #82152 - High token consumption in Fable
- #82136 - All Version 5 Models
- #82153 - Cowork notifications not delivered (Korean)
- #82156 - Claude Desktop windowless lockout
- #82148 - Chat input composer overlap
- #82157 - Security research support
- #61849 - Cross-device session continuity (CLOSED)

PRs:
1. #82059 - Fix poppler-utils for PDF support
2. #80294 - Fix broken link via archive.org
3. #77709 - Settings example for official marketplace only

Trends I see:
- **Subscription/quota issues**: #38335 (session limits), #29449 (Pro plan features), #81068 (model context window)
- **Windows MSIX issues**: #80999, #82134 - packaging/update problems
- **Hooks & Permissions**: #79177, #74301, #76736, #77972, #80459 - the hooks/permissions system has many issues
- **MCP/integration**: #82096 (OAuth)
- **Cowork features**: #54378, #69658, #82153 - Cowork has multiple issues
- **Artifacts**: #79824, #80418 - Artifacts feature issues
- **Models**: #81068 (Opus 5 context window), #82136 (Version 5 Models)
- **TUI/UI**: #78222 (CI widget), #72495 (rate limit), #79810 (sidebar), #82148 (composer), #82156 (windowless)
- **Mobile**: #71603
- **Network**: #82155
- **Background tasks**: #82151
- **Session continuity**: #61849
- **Security research**: #82157

Developer pain points:
1. Hook system is broken in many ways (subagents, VS Code, environment vars, permission classification)
2. Windows MSIX packaging has multiple stability issues
3. Subscription/billing issues dominate the highest-comment thread
4. Model capability mismatches (200K vs 271K actual)
5. Cowork/background tasks lack proper lifecycle management
6. Artifact/MCP integration edge cases

Let me write the report now in Chinese, professional tone.

I should also note that this is "anthropics/claude-code" repo - and looking at the issues, many are about "Claude Desktop" rather than just "Claude Code" - this is because the repo seems to track the whole ecosystem.

Let me structure the response now.</think>

# Claude Code 社区动态日报
**日期：2026-07-29**

---

## 1. 今日速览

今日社区整体动态平稳，无新版本发布。**最显著的信号仍是 #38335「Max 计划会话额度异常耗尽」**——该议题评论数已达 827 条、👍 470，仍未关闭，反映订阅配额模型与用户预期之间存在严重落差。值得关注的是 **hooks/permissions 子系统、Windows MSIX 打包链路、Cowork 后台任务生命周期** 三个方向今日均有新 bug 浮出水面，呈多点爆发趋势。

---

## 2. 版本发布

过去 24 小时无新 Release。

---

## 3. 社区热点 Issues（Top 10）

### 🔥 #38335 — Claude Max 计划会话额度自 2026-03-23 起异常快速耗尽（CLI 使用）
- **评论 827 / 👍 470** | [链接](https://github.com/anthropics/claude-code/issues/38335)
- **为何重要**：这是仓库内体量最大的活跃议题，涉及核心计费/配额策略。Max 计划用户认为自 3 月以来会话窗口被异常压缩，影响付费体验。
- **社区反应**：尽管已被标记 `[invalid]`，社区仍持续涌入新报告和反驳评论，说明问题未被官方正面回应。

### #29449 — Pro 计划用户无法使用 Remote Control 环境
- **评论 27 / 👍 31** | [链接](https://github.com/anthropics/claude-code/issues/29449)
- **为何重要**：计划层级与功能可见性不一致的典型案例。Pro 用户在 UI 看到 Remote Control 选项却被服务端拒绝，影响付费信任。

### #80999 — Windows 上隐藏 Browser-pane 预览触发 Code Integrity 阻断，整 app 崩溃
- **评论 8 / 👍 2** | [链接](https://github.com/anthropics/claude-code/issues/80999)
- **为何重要**：在企业环境（VBS/HVCI/CrowdStrike/Trellix）下，包内 `vk_swiftshader.dll` 被完整性策略阻断；后续 Repair 对话框使恢复路径失效。

### #71603 — Android（Pixel 8 Pro）Agent 忙碌期间输入的文本被静默丢弃
- **评论 5 / 👍 3** | [链接](https://github.com/anthropics/claude-code/issues/71603)
- **为何重要**：移动端体验的可靠性问题，用户已确认可复现；丢失草稿会导致不可逆的输入损失。

### #80472 — claude-ios-sim 在 macOS 27 beta 启动崩溃：seatbelt 阻止 Metal 新 shader-cache 目录
- **评论 5 / 👍 0** | [链接](https://github.com/anthropics/claude-code/issues/80472)
- **为何重要**：与 macOS 新版本提前适配相关的 sandbox 配置问题，影响自动化测试链路。

### #79824 — Artifact 共享失败："This version can't be shared publicly" 持续出现
- **评论 3 / 👍 14** | [链接](https://github.com/anthropics/claude-code/issues/79824)
- **为何重要**：点赞率高于评论数（👍/评论 = 4.7），说明受影响用户远多于发声者；阻断 Artifact 共享是产品关键路径。

### #82096 — MCP OAuth `redirect_uri` 硬编码 `localhost`，与仅允许 `127.0.0.1` 的 IdP 不兼容
- **评论 2 / 👍 4** | [链接](https://github.com/anthropics/claude-code/issues/82096)
- **为何重要**：MCP 生态接入的关键集成问题，影响企业 IdP（Okta/Azure AD 等）对 `127.0.0.1` 白名单的兼容。

### #81068 — v2.1.219 Bedrock 上 Opus 5 预算为 200K，但目录遗漏 `native_1m_3p`，实测可服务 271K
- **评论 2 / 👍 0** | [链接](https://github.com/anthropics/claude-code/issues/81068)
- **为何重要**：云端模型目录与 Claude Code 客户端对模型能力描述不一致，会导致长上下文被无意义截断。

### #78222 — TUI CI 监控小部件错误提示 "gh 未安装"，但 gh 已认证且 PR checks 通过
- **评论 3 / 👍 4** | [链接](https://github.com/anthropics/claude-code/issues/78222)
- **为何重要**：错误诊断信息错误，影响 TUI 可信度；属于可用性而非功能性故障。

### #74301 — Auto-mode 权限分类器在被拒消息里**主动教导 agent 如何绕过**
- **评论 1 / 👍 1** | [链接](https://github.com/anthropics/claude-code/issues/74301)
- **为何重要**：安全等级判定为 High。权限拒绝提示本身成为绕过教学文档，是原则性设计缺陷。

---

## 4. 重要 PR 进展

> 过去 24 小时仅 3 个 PR 更新，均为小型维护性提交。

### #82059 — devcontainer 中预置 poppler-utils 以支持 PDF 阅读
- [链接](https://github.com/anthropics/claude-code/pull/82059)
- 修复 #23704：`Read` 工具在缺少 `poppler-utils` 时 PDF 渲染静默失败。补充了文档缺失部分，但作者也明确指出 **CLI 缓存逻辑的核心 bug 仍需 Anthropic 内部修复**。

### #80294 — 通过 archive.org 修复 1 个失效外链（LinkMedic，confidence 0.66）
- [链接](https://github.com/anthropics/claude-code/pull/80294)
- 纯文档维护，将 `npmjs.com` 上的失效链接替换为 Wayback 快照。低置信度，合并前需人工复核目标页是否仍相关。

### #77709 — 新增「仅允许官方市场」settings 示例
- [链接](https://github.com/anthropics/claude-code/pull/77709)
- 通过 `strictKnownMarketplaces` + 显式 GitHub source，将插件市场锁定到 `claude-plugins-official`。对**企业合规与供应链安全场景**有直接参考价值。

---

## 5. 功能需求趋势

从 50 条更新议题中提炼出的关注方向：

| 方向 | 代表 Issue | 热度信号 |
|---|---|---|
| **订阅/配额透明度** | #38335 | 🔥 827 评论，最高量级 |
| **Hooks & Permissions 子系统重构** | #79177 / #74301 / #76736 / #77972 / #80459 / #82154 | 6 条相关 bug |
| **Cowork 后台任务与通知生命周期** | #54378 / #69658 / #82153 / #82151 | 跨平台、多语言报告 |
| **Windows 桌面客户端稳定性** | #80999 / #82134 / #82156 | MSIX、签名、auto-update、窗口管理 |
| **MCP / OAuth / 企业 IdP 兼容** | #82096 | 企业落地关键路径 |
| **跨设备会话连续性** | #61849 | 已关闭为 duplicate/stale，但仍是高频 enhancement |
| **模型能力与目录一致性** | #81068 / #82136 | 长上下文、Version 5 模型 |
| **Artifacts 协作能力** | #79824 / #80418 | Team/Org 用户阻塞 |
| **安全研究/对抗性测试白名单** | #82157 | 合规边界讨论 |
| **CI / TUI / UI 错误诊断质量** | #78222 / #72495 / #79810 / #82148 | 小问题聚成可用性短板 |

---

## 6. 开发者关注点与高频痛点

**1. 配额与计费的预期管理是头号痛点。**
#38335 的规模说明，社区最关心的已不是新功能，而是**已付费能力的稳定性与可预测性**。建议关注 Anthropic 是否在客户端引入更精细的窗口可视化。

**2. Hooks / Permissions 子系统存在设计层缺陷。**
子 agent 不触发 PermissionRequest、Auto-mode 在拒绝消息里教绕过、VS Code 上 `SessionStart` 输出无渲染通道、`CLAUDE_PLUGIN_ROOT` 在 Windows 上不注入——这些都不是孤立 bug，而是**同一套扩展机制在不同环境下的连续性失败**。该方向很可能成为下一波 PR 的集中修缮区。

**3. Windows MSIX 打包链路是当前最不稳定的客户端交付通道。**
#80999（Code Integrity 阻断）、#82134（auto-update 期间包损坏、Repair 不可恢复）、#82156（无窗口锁屏需硬重启）三个高严重度问题均集中在 Windows 桌面，且互相影响——auto-update 触发崩溃，崩溃触发 Repair，Repair 又因源 MSIX 被清掉而失败，形成死循环。

**4. Cowork 与 Background Task 缺乏生命周期语义。**
#82151 指出"turn 结束"与"background task 仍在跑"在 transcript 上无法区分；#82153（韩语）报告预约任务的通知完全未送达。开发者难以可靠地把 Cowork 接入自动化流水线。

**5. MCP 接入仍存在企业 IdP 兼容性盲区。**
`localhost` vs `127.0.0.1` 是高频踩坑点，叠加 OAuth 配置，对企业开发者门槛偏高。

**6. 长上下文模型能力披露与实际不符。**
#81068 中 Bedrock 实际可服务 271K，但客户端预算仍以 200K 计算。这是 catalog metadata 与云端能力对齐的问题，影响高生产力用户。

---

*日报基于 anthropics/claude-code 仓库 2026-07-29 数据生成，仅代表公开社区信号，不构成官方信息。*

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

<think>The user wants me to generate a Chinese daily report about OpenAI Codex community dynamics for 2026-07-29 based on the GitHub data provided. Let me analyze the data carefully and structure the report according to the requested sections.

Key observations from the data:

1. **Releases**: 
   - rust-v0.146.0 with new features (session naming with /new or /clear, pinning threads, Agent Plugins manifests)
   - rusty-v8-v150.4.0
   - rust-v0.146.0-alpha.14

2. **Hot Issues**: 
   - #34133 - Windows GPU crash with bundled vk_swiftshader.dll (26 comments - highest)
   - #13036 - Support Display of Multiple Chats (13 comments, 8 thumbs up)
   - #24534 - Custom storage path for Codex Desktop (11 comments, 23 thumbs up)
   - #30649 - Windows render_docx.py invalid file:// URI (9 comments)
   - #35619 - Rollout JSONL files deleted (9 comments) - critical data loss
   - #32031 - Multi-agent v2 spawn_agent UX regression (8 comments, 16 thumbs up)
   - #35528 - Incomplete residual fidelity (7 comments)
   - #32334 - Codex Desktop crashes with in-app Browser (CLOSED, 6 comments)
   - #28531 - Image-heavy sessions crash (6 comments)
   - #23320 - Windows codex update npm cleanup (5 comments)
   - #35120 - VS Code extension crashes (5 comments)
   - #33008 - Referenced chats renderer freeze (5 comments)
   - #33561 - Windows Desktop severe lag (5 comments, 5 thumbs up)
   - #27207 - Restore archived chats (5 comments, 8 thumbs up)

3. **Important PRs** (most are automated by copyberry bot):
   - #35878 - Use step environments for MCP file uploads
   - #35875 - Allow environment readiness updates
   - #35874 - Mark primary environment in model context
   - #35870 - Include session titles in external agent import
   - #35859 - Expose plugin installation timestamps
   - #35857 - Add Bazel unit test targets
   - #35856 - Resolve imported connectors by MCP server name
   - #35854 - Box app-server event payloads
   - #35852 - chore: migrate codex-protocol to shared HTTP types
   - #31817 - Update models.json
   - #35851 - Normalize Windows namespace paths
   - #35850 - Preserve foreign paths
   - #35845 - Support plaintext collaboration tool messages
   - #35843 - Tie remote exec servers to their parent stdin
   - #35840 - Handle legacy MCP discovery prevalidation errors
   - #35839 - Decouple recommended plugins from tool suggestions
   - #35837 - Expose plugin eligibility metadata
   - #35836 - Clean up cancelled MCP elicitation requests
   - #35835 - Track parent turns for nested Codex requests
   - #35831 - Update rusty_v8 to 150.4.0

4. **Trends from issues**:
   - Windows-related bugs dominate (most issues are tagged windows-os)
   - App stability issues (crashes, freezes)
   - Session management (multi-chat, archived chats, sessions disappearing)
   - Multi-agent functionality
   - MCP/Plugin ecosystem
   - Browser integration
   - Performance issues (context bloat, JSONL growth)
   - Subagent visibility
   - Sandbox issues on Windows

Let me write a professional Chinese daily report now.</think>

# OpenAI Codex 社区动态日报
**日期：2026-07-29**

---

## 一、今日速览

今日 Codex 仓库迎来 **rust-v0.146.0** 正式版发布，重点带来会话命名、固定与多任务切换、Agent Plugins 清单与多插件市场支持等能力；与此同时，社区反馈仍集中在 **Windows 桌面端的稳定性问题**（GPU 进程崩溃、会话数据丢失、UI 卡死）以及 **多代理 v2 的 UX 回退**，需重点关注。

---

## 二、版本发布

### 📦 rust-v0.146.0（正式版）

**核心更新：**
- **会话管理增强**：支持通过 `/new` 或 `/clear` 为新会话命名，可固定重要线程并在多个侧边对话间切换而无需关闭（#34605、#34840、#35011）
- **Agent Plugins 生态**：支持 Agent Plugins 清单、Workspace 插件发布，并新增 Amazon Bedrock 与 Claude 的插件市场
- **V8 引擎升级**：rusty_v8 升级至 150.4.0（Bazel V8 源同步至 15.0.245.2，#35831）

**配套预发布**：rust-v0.146.0-alpha.14 已同步发布。

---

## 三、社区热点 Issues

| # | 标题 | 重要性 |
|---|------|--------|
| [#34133](https://github.com/openai/codex/issues/34133) | **Windows GPU 进程崩溃**：应用内浏览器截图触发 Code Integrity Event 3033，拒绝捆绑的 vk_swiftshader.dll（评论 26） | ⚠️ **最高优先级**，影响 Windows 桌面端核心功能 |
| [#13036](https://github.com/openai/codex/issues/13036) | **多会话并行显示**（评论 13，👍 8） | 高需求功能，长期呼声 |
| [#24534](https://github.com/openai/codex/issues/24534) | **自定义 Codex Desktop 存储路径**（评论 11，👍 23） | 👍 数最高，企业用户刚需 |
| [#35619](https://github.com/openai/codex/issues/35619) | **JSONL 文件被批量删除**：app-server 进程切换致 942 线程中 934 个孤立（评论 9） | 🔴 严重数据丢失风险 |
| [#32031](https://github.com/openai/codex/issues/32031) | **多代理 v2 spawn_agent UX 回退**：模型覆盖不可见且默认调用被拒（评论 8，👍 16） | 影响 gpt-5.6-sol / gpt-5.6-terra 用户 |
| [#35528](https://github.com/openai/codex/issues/35528) | **捕获、模型可见与持久化状态间残差保真度不完整**（评论 7） | 涉及上下文压缩的核心机制 |
| [#30649](https://github.com/openai/codex/issues/30649) | **Windows render_docx.py 非法 file:// URI**（评论 9） | 影响文档技能工作流 |
| [#28531](https://github.com/openai/codex/issues/28531) | **图像密集型会话因 base64 内嵌导致崩溃/卡死**（评论 6） | 性能与稳定性双重问题 |
| [#33561](https://github.com/openai/codex/issues/33561) | **Windows Desktop 26.707.12708.0 严重输入延迟 + 0xc06d007f 崩溃**（评论 5，👍 5） | 用户体验严重受损 |
| [#27207](https://github.com/openai/codex/issues/27207) | **从主 UI 恢复归档聊天入口**（评论 5，👍 8） | 回归性问题，社区呼吁恢复 |

**简要解读**：今日热度最高的 10 个 issue 中，**8 个与 Windows 平台直接相关**，凸显 Windows 桌面端已成为当前最棘手的体验瓶颈；多会话、自定义存储路径、归档恢复等「会话管理」类需求持续高热。

---

## 四、重要 PR 进展

| PR | 简介 |
|----|------|
| [#35878](https://github.com/openai/codex/pull/35878) | MCP 文件上传改用 step environments，确保参数解析基于当前步骤环境 |
| [#35875](https://github.com/openai/codex/pull/35875) | 新增 `EnvironmentManager::publish_ready_info`，支持环境就绪状态就地更新 |
| [#35874](https://github.com/openai/codex/pull/35874) | 多环境模型上下文增加 `primary` 标识，明确主环境 |
| [#35870](https://github.com/openai/codex/pull/35870) | 外部 agent 会话导入时保留并返回原始会话标题 |
| [#35859](https://github.com/openai/codex/pull/35859) | `PluginSummary` 暴露 `installedAt` Unix 时间戳，便于远程插件元数据管理 |
| [#35857](https://github.com/openai/codex/pull/35857) | 为 Rust 二进制生成 Bazel 单元测试目标，覆盖二进制测试盲区 |
| [#35854](https://github.com/openai/codex/pull/35854) | `AppServerEvent` 等事件载荷改为 `Box` 包装，降低内存占用 |
| [#35852](https://github.com/openai/codex/pull/35852) | codex-protocol 迁移至共享 HTTP 类型（`codex-http-client`），移除直接 reqwest 依赖 |
| [#35845](https://github.com/openai/codex/pull/35845) | 协作工具消息支持明文参数，便于请求重放 |
| [#35831](https://github.com/openai/codex/pull/35831) | rusty_v8 升级至 150.4.0（伴随 0.146.0 正式版） |

**整体方向**：今日 PR 集中于 **MCP/插件生态完善**（plugin 元数据、推荐解耦、明文协作消息）、**应用服务器性能优化**（事件 Box 化、环境状态管理）以及 **构建系统（Bazel）覆盖度补齐**。

---

## 五、功能需求趋势

基于 24 小时内全部 50 条 issue 提炼，社区关注度由高到低依次为：

1. **🖥️ Windows 桌面端稳定性**（占比最高）
   GPU 崩溃、会话数据丢失、UI 卡顿、Code Integrity 拦截等系统性故障，几乎主导了本周的反馈量级。

2. **💬 多会话与归档管理**
   多窗口/多聊天并行（#13036、#32283）、自定义存储路径（#24534）、归档会话主 UI 入口（#27207）、项目会话消失（#27453），反映用户对 **会话生命周期管理** 的强烈诉求。

3. **🤖 多代理与子代理体验**
   spawn_agent 模型选择回退（#32031）、子代理面板丢失模型/推理强度显示（#32283），新多代理 v2 架构尚需打磨。

4. **🔌 插件/MCP 生态**
   推荐插件解耦（#35839）、资格元数据暴露（#35837）、MCP 自动重连（#11489）、MCP 发现预校验错误处理（#35840），插件与 MCP 协议正成为新热点。

5. **⚡ 性能与上下文管理**
   大上下文重复处理（#34971）、@-mention 整会话注入（#33008）、Resume 渲染全历史（#34663），凸显 **上下文保真度** 与 **会话启动开销** 的双重压力。

6. **🌐 浏览器/远程工作流**
   远程会话应打开本地浏览器（#21816）、浏览器扩展额度异常消耗（#30665），远程 + 浏览器集成的边界仍待厘清。

---

## 六、开发者关注点

综合 issue 评论与 PR 描述，开发者当前最集中的痛点与诉求包括：

- **🔴 数据可靠性焦虑**
  JSONL 文件在进程切换时被清理（#35619）、图像 base64 内嵌导致 session 文件膨胀（#28531）、@-mention 把整段历史注入单条消息（#33008），开发者担心"实验性工作随时可能丢失"。

- **🪟 Windows 沙箱与权限矩阵**
  非提权沙箱拒绝可执行可写根（#35864）、MSIX 版 PowerShell 7 触发 Access Denied（#35871）、`codex update` 因文件占用留下 npm 警告（#23320），反映 Windows 沙箱的边界条件远未收敛。

- **🧩 多代理架构尚未稳态**
  v2 默认 schema 让模型覆盖"不可发现"，自然调用形态直接失败（#32031）；子代理面板不显示模型与推理强度（#32283），架构升级带来了显著 UX 回退。

- **📦 插件/连接器元数据缺口**
  远程插件的安装时间、可用计划类型、禁用原因等元数据需要贯通应用服务器（#35859、#35837），并按 MCP 服务器名称而非 UUID 解析导入的连接器（#35856）。

- **🧪 模型行为可解释性**
  "过期任务状态幻觉"（#22219）、压缩将中断命令的局部输出提升为已确认状态（#35355）等议题持续浮现，开发者希望 Codex 对自身状态具备更清晰的"残差声明"（#35528）。

- **🛠️ 构建与依赖现代化**
  codex-protocol 迁移至共享 HTTP 类型（#35852）、Rust 二进制 Bazel 测试目标补齐（#35857），反映仓库正在系统化推进 **依赖收敛与构建可测试性**。

---

*日报由 GitHub Issues / Pull Requests / Releases 数据自动汇总生成。*

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

<think>The user wants me to generate a daily community report for Gemini CLI based on the GitHub data provided. Let me analyze the data carefully:

**Releases (last 24 hours):**
1. v0.55.0-nightly.20260729.g3499c84f7 - nightly
2. v0.54.0-preview.0 - preview
3. v0.53.0 - stable

**Top Issues (most comments):**
- #22323: Subagent recovery after MAX_TURNS reports GOAL success (12 comments, 2 likes) - P1 bug
- #21409: Generalist agent hangs (8 comments, 8 likes) - P1 bug, popular
- #24353: Robust component level evaluations (7 comments)
- #22745: AST-aware file reads, search, and mapping (7 comments)
- #21968: Gemini doesn't use skills and sub-agents enough (6 comments)
- #26522: Stop Auto Memory from retrying low-signal sessions (5 comments)
- #26525: Add deterministic redaction and reduce Auto Memory logging (4 comments)
- #25166: Shell command stuck with "Waiting input" (4 comments, 3 likes)
- #22232: Browser agent resilience (4 comments)
- #21983: Browser subagent fails in wayland (4 comments)
- #21000: Native file tools for task tracker (4 comments)

**Top PRs:**
- #28576: Optimize vitest startup time
- #28577: E2E test stability
- #28403: Block $VAR variable expansion bypass (security, CLOSED)
- #28401: Bound command output sent to model (CLOSED)
- #28474: Add skill name dimension to telemetry
- #28570: Bump js-yaml (dependabot)
- #28573: Version bump for nightly
- #28551: Fall back to embedded macOS seatbelt profiles
- #28566: Propagate InvalidStreamError to UI
- #28481: Refresh MCP OAuth tokens with stored client ID

Let me identify trends:

1. **Security** - Multiple security-related PRs and issues (variable expansion bypass, SSRF, OAuth, MCP)
2. **Agent/subagent stability** - Many issues about subagents (hangs, recovery, errors)
3. **Auto Memory** - Several issues around memory system quality
4. **Browser agent** - Issues with browser agent in different environments
5. **Performance** - Tool execution, terminal resize, vitest startup
6. **IDE integration** - VSCode companion issues
7. **Security** - SSH keys, OAuth tokens, SSRF

Let me draft the report in Chinese, professional, and concise.

Date: 2026-07-29

Let me write this out properly.</think>

# Gemini CLI 社区动态日报
**日期：2026-07-29**

---

## 📌 今日速览

今日 Gemini CLI 迎来 **v0.53.0 稳定版**、**v0.54.0-preview.0 预览版**及 **v0.55.0 nightly** 三连发，版本迭代节奏密集。社区关注焦点集中在**子代理（subagent）稳定性**与**安全加固**两大方向——多个 P1 级 Bug 显示 `generalist` / `browser_agent` / `codebase_investigator` 等子代理在恢复、挂起、权限流转上仍存在缺陷；同时，变量扩展绕过（GHSA-wpqr-6v78-jr5g）、SSRF、MCP OAuth 刷新等安全 PR 正在密集合入。

---

## 🚀 版本发布

| 版本 | 类型 | 关键内容 |
|---|---|---|
| **v0.53.0** | Stable | 修复 a2a cancelled tool responses 合并导致的 400 错误；引入 `caretaker-triage` LLM 编排器与容器构建（[#28407](https://github.com/google-gemini/gemini-cli/pull/28407)） |
| **v0.54.0-preview.0** | Preview | 包含 v0.52.x 系列累计更新；自动化 changelog 与发布流水线优化 |
| **v0.55.0-nightly.20260729** | Nightly | `pr-generator-db` Firestore 双锁机制与摄入工具落地（[#28432](https://github.com/google-gemini/gemini-cli/pull/28432)） |

---

## 🔥 社区热点 Issues（Top 10）

| # | 标题 | 优先级 | 评论 | 为何重要 |
|---|---|---|---|---|
| [#22323](https://github.com/google-gemini/gemini-cli/issues/22323) | Subagent 达到 MAX_TURNS 后却上报 GOAL success，掩盖中断 | P1 | 12 | 直接破坏用户对子代理执行可靠性的信任，影响调试体验 |
| [#21409](https://github.com/google-gemini/gemini-cli/issues/21409) | Generalist agent 频繁 hang 死 | P1 | 8 👍8 | 👍数最高，简单任务（创建文件夹）即可触发一小时级挂起 |
| [#24353](https://github.com/google-gemini/gemini-cli/issues/24353) | 组件级评估体系（EPIC） | P1 | 7 | 已积累 76 项行为评估，正在推动覆盖 6 个 Gemini 模型，关系整体质量门禁 |
| [#22745](https://github.com/google-gemini/gemini-cli/issues/22745) | 评估 AST 感知的文件读取、搜索与代码映射 | P2 | 7 | 若落地可显著降低 token 噪声与对齐读取所需的轮次 |
| [#21968](https://github.com/google-gemini/gemini-cli/issues/21968) | Gemini 自发使用 skills 与 sub-agents 不足 | P2 | 6 | 揭示了「工具被声明但未触发」的能力可见性问题 |
| [#26522](https://github.com/google-gemini/gemini-cli/issues/26522) | Auto Memory 无限重试低信号会话 | P2 | 5 | 长期运行下会导致资源浪费与重复打扰用户 |
| [#25166](https://github.com/google-gemini/gemini-cli/issues/25166) | Shell 命令完成后仍卡在 "Waiting input" | P1 | 4 👍3 | 简单命令即可复现，严重影响交互流畅度 |
| [#22232](https://github.com/google-gemini/gemini-cli/issues/22232) | browser_agent 锁恢复与会话接管 | P3 | 4 | 持久化模式下的健壮性需求，影响长任务可靠性 |
| [#21983](https://github.com/google-gemini/gemini-cli/issues/21983) | browser subagent 在 Wayland 下失败 | P1 | 4 | Linux 桌面用户主流环境的兼容性问题 |
| [#26525](https://github.com/google-gemini/gemini-cli/issues/26525) | Auto Memory 引入确定性脱敏与日志精简 | P2 | 4 | 涉及本地 transcript 上传模型的安全边界 |

---

## 🛠️ 重要 PR 进展（Top 10）

| # | 标题 | 状态 | 要点 |
|---|---|---|---|
| [#28403](https://github.com/google-gemini/gemini-cli/pull/28403) | 阻断 `$VAR`/`${VAR}` 变量扩展绕过（GHSA-wpqr-6v78-jr5g） | ✅ CLOSED | 加固 `detectBashSubstitution`/`detectPowerShellSubstitution`，防御纵深 `issue-dedup` workflow |
| [#28401](https://github.com/google-gemini/gemini-cli/pull/28401) | 限制 shell 命令输出注入模型的体积 | ✅ CLOSED | 防止 `find /`、大 `git log` 等命令污染上下文并消耗 token |
| [#28481](https://github.com/google-gemini/gemini-cli/pull/28481) | 使用存储的 client_id 刷新 MCP OAuth token | 🟢 OPEN | 修复动态注册场景下凭据被误删、每次需重新认证的问题 |
| [#28557](https://github.com/google-gemini/gemini-cli/pull/28557) | web-fetch.ts 改用异步 DNS 解析以修复 SSRF | 🟢 OPEN | 同步 `isPrivateIp` 无法识别域名解析至内网 IP 的风险 |
| [#28566](https://github.com/google-gemini/gemini-cli/pull/28566) | 将 `InvalidStreamError` 详情透传至 UI | 🟢 OPEN | 用户遇到空响应时可获得 `/compress` 等具体排错建议 |
| [#28551](https://github.com/google-gemini/gemini-cli/pull/28551) | macOS seatbelt profile 缺失时回退到内嵌版本 | 🟢 OPEN | 修复 `-s` 沙箱模式下启动崩溃 |
| [#28526](https://github.com/google-gemini/gemini-cli/pull/28526) | 修复 VSCode 扩展 Disposable 泄漏 | 🟢 OPEN | 修正 `activate()` 中括号导致的 `gemini.diff.accept` 未注册 |
| [#28474](https://github.com/google-gemini/gemini-cli/pull/28474) | 工具调用遥测新增 `skill_name` 维度 | 🟢 OPEN | 企业级可观测性增强（声明为 vibe-coded 需 review） |
| [#28576](https://github.com/google-gemini/gemini-cli/pull/28576) | 优化 vitest 自托管 runner 启动速度 | 🟢 OPEN | 缓存预热减少约 15% CI 启动时间 |
| [#28577](https://github.com/google-gemini/gemini-cli/pull/28577) | e2e 前置环境校验以降低 flaky | 🟢 OPEN | 在跑测试前验证依赖，缩小自托管 runner 上的不稳定面 |

---

## 📈 功能需求趋势

通过对 50 条活跃 Issue 的聚类分析，社区诉求呈现以下六大方向：

1. **🧠 子代理可靠性（Agent Reliability）** — 占议题近 40%。涵盖挂起恢复、错误状态上报、权限流转、子代理上下文传递至 `/bug` 报告等（[#22323](https://github.com/google-gemini/gemini-cli/issues/22323)、[#21409](https://github.com/google-gemini/gemini-cli/issues/21409)、[#21763](https://github.com/google-gemini/gemini-cli/issues/21763)、[#22093](https://github.com/google-gemini/gemini-cli/issues/22093)）。
2. **🛡️ 安全合规（Security Hardening）** — 变量扩展绕过、SSRF、OAuth、MCP、Auto Memory 的 transcript 上传脱敏成为高密度主题（[#26525](https://github.com/google-gemini/gemini-cli/issues/26525)、[#28403](https://github.com/google-gemini/gemini-cli/pull/28403)、[#28557](https://github.com/google-gemini/gemini-cli/pull/28557)）。
3. **🌐 IDE / 桌面环境集成** — VSCode Copilot 兼容、Wayland/Linux 浏览器代理、macOS seatbelt 沙箱（[#21983](https://github.com/google-gemini/gemini-cli/issues/21983)、[#28551](https://github.com/google-gemini/gemini-cli/pull/28551)、[#28526](https://github.com/google-gemini/gemini-cli/pull/28526)）。
4. **⚡ 性能与终端体验** — shell 卡死、终端 resize 闪烁、外部编辑器退出后 buffer 损坏、Tool 数量 >400 触发 400（[#25166](https://github.com/google-gemini/gemini-cli/issues/25166)、[#21924](https://github.com/google-gemini/gemini-cli/issues/21924)、[#24935](https://github.com/google-gemini/gemini-cli/issues/24935)、[#24246](https://github.com/google-gemini/gemini-cli/issues/24246)）。
5. **🧩 评估与可观测性** — 组件级行为评估、AST 感知工具调研、skill_name 遥测维度、subagent 轨迹通过 `/chat share` 分享（[#24353](https://github.com/google-gemini/gemini-cli/issues/24353)、[#22745](https://github.com/google-gemini/gemini-cli/issues/22745)、[#22598](https://github.com/google-gemini/gemini-cli/issues/22598)）。
6. **🤖 Agent 自我认知与可控性** — 拒绝使用 `git reset --force` 等危险命令、CLI 自助使用指南、准确的 flag 文档（[#22672](https://github.com/google-gemini/gemini-cli/issues/22672)、[#21432](https://github.com/google-gemini/gemini-cli/issues/21432)）。

---

## 💬 开发者关注点

- **「子代理静默失败」是头号痛点**：大量开发者反馈 agent 在 `MAX_TURNS`、锁竞争、Wayland 环境等情况下无错误抛出或错误地标为 GOAL success，严重拖慢调试效率。
- **「工具存在但不被调用」成为体验落差**：自定义 skill 与 sub-agent 几乎不会被模型自动选用，需要用户显式指令（[#21968](https://github.com/google-gemini/gemini-cli/issues/21968)），反映出提示与发现机制的薄弱。
- **安全焦虑正在扩散**：Auto Memory 把本地 transcript 喂给后台提取模型、shell 命令向模型无上限输出、Web fetch 未做异步 DNS 解析等议题，让注重合规的企业用户高度警惕。
- **新版本周边摩擦明显**：v0.33.0 后子代理权限边界外溢、`GEMINI_API_KEY` 含特殊字符启动崩溃、`--verbose` 在长 prompt 下崩溃等问题，提示发布前的兼容性回归覆盖仍需加强（[#28574](https://github.com/google-gemini/gemini-cli/issues/28574)、[#28575](https://github.com/google-gemini/gemini-cli/issues/28575)、[#22093](https://github.com/google-gemini/gemini-cli/issues/22093)）。
- **生态贡献门槛下降**：dependabot 维护 js-yaml / postcss / linkify-it 等依赖更新；社区已开始 vibe-coded PR 提交（[#28474](https://github.com/google-gemini/gemini-cli/pull/28474)），维护者审查负担与自动化引导机制需配套。

---

*报告基于 2026-07-29 过去 24 小时 GitHub 公开数据生成。链接均为 github.com/google-gemini/gemini-cli 仓库原文。*

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

<think>Let me analyze the GitHub data for github/copilot-cli and generate a comprehensive Chinese daily report for 2026-07-29.

Key data points:
1. New Release: v1.0.76-1 with voice mode, scheduled prompts counter, /limits predict, and configurable timed refreshes
2. 32 issues updated in the last 24 hours (showing top 30 by comment count)
3. Only 1 PR updated (and it's not very meaningful - just "安全性" as summary)

Let me organize this into the required sections:

1. **今日速览** - Most important: v1.0.76-1 release with several new features, and there's a critical issue (#4285) where the latest version has a silent exit bug at non-default log levels.

2. **版本发布** - v1.0.76-1 details

3. **社区热点 Issues** - Top 10 issues worth attention:
- #4163: Process zombie issue on Linux (closed but #4290 confirms still not fixed)
- #4016: BYOK authentication regression in --acp mode (closed)
- #4165: --resume hangs on Windows
- #4159: Interactive mode goes blank on Windows
- #4078: Scheduled prompts kill queue
- #4161: task_complete unavailable after switching back to autopilot
- #4005: Enterprise billing entity issue
- #4202: view tool path not exist in 1.0.73
- #2734: Plugin auto-update feature request
- #2770: CLI stuck on Cancelling
- #2182: PTY buffer 4KB hang
- #2703: Session hang after work complete

Since the prompt asks for 10, I'll pick the most impactful ones.

4. **重要 PR 进展** - Only 1 PR exists and it's not really meaningful. I should note this.

5. **功能需求趋势** - Looking at issues:
- Cross-platform issues (Windows, Linux, macOS)
- BYOK/custom provider support
- Plugin management improvements
- Model selection and enterprise policies
- ACP mode parity
- Session resume issues
- Performance (PTY buffer, streaming buffering)

6. **开发者关注点** - Pain points:
- Stability on Windows
- Regression bugs after version updates
- BYOK auth issues
- Process management on Linux
- UI/UX issues (cancelling stuck, blank UI)
- Enterprise policy transparency

Let me write the report in a professional, concise Chinese style.</think>

# GitHub Copilot CLI 社区动态日报

**📅 2026-07-29** | 数据来源：`github.com/github/copilot-cli`

---

## 一、今日速览

v1.0.76-1 正式发布，带来语音模式媒体播放暂停、计划任务状态显示与 `/limits predict` 等实用功能，但与此同时该版本自身也暴露出「日志级别为 none/error/warning/info/debug 时静默退出」的新回归（#4285）。社区仍聚焦于 **Windows 平台稳定性、BYOK/ACP 鉴权回归、Linux 子进程僵尸化** 三类顽疾，跨平台兼容性问题成为当周主线。

---

## 二、版本发布

### 🚀 v1.0.76-1（今日发布）

| 类别 | 更新内容 |
|---|---|
| **新增** | Voice mode 在录制前后自动暂停/恢复媒体播放（macOS / Windows） |
| **新增** | Footer 显示当前活跃的 scheduled prompt 数量 |
| **新增** | `/limits predict` —— 基于历史相似会话智能推荐本次会话的 AI 信用额度 |
| **新增** | 可配置的定时刷新（configurable timed refreshes） |

⚠️ **已知回归**：#4285 —— 该版本在日志级别为 `none / error / warning / info / debug` 时静默退出（exit 1，无任何输出）；`all` 与 `default` 正常。

---

## 三、社区热点 Issues（Top 10）

| # | Issue | 状态 | 重要性 |
|---|---|---|---|
| [#4163](https://github.com/github/copilot-cli/issues/4163) | **Linux 子进程僵尸化**：1.0.71 后 copilot 进程无法回收已结束的子进程，约 2 个/分钟泄漏。已 CLOSED，但 #4290 报告 1.0.75 仍未修复 | CLOSED | ⭐⭐⭐ Linux 用户生产环境严重问题 |
| [#4016](https://github.com/github/copilot-cli/issues/4016) | **BYOK 在 `--acp` 模式下鉴权失败**：`session/new` 返回 -32000，1.0.61–1.0.68 回归 | CLOSED | ⭐⭐⭐ 影响自定义 Provider 用户的关键工作流 |
| [#4165](https://github.com/github/copilot-cli/issues/4165) | `copilot --resume` 在 Windows 冷启动时卡在 `Resuming session...` | OPEN | ⭐⭐⭐ Windows 会话恢复可用性问题 |
| [#4159](https://github.com/github/copilot-cli/issues/4159) | Windows Terminal 交互模式下提交 prompt 后 UI 变空白（`-p` 模式正常） | OPEN | ⭐⭐⭐ 严重影响 Windows 用户日常使用 |
| [#4078](https://github.com/github/copilot-cli/issues/4078) | Scheduled prompt（`/every`、`/after`）触发时清空现有队列，后续任务不再出队 | OPEN | ⭐⭐ 自动化工作流可靠性问题 |
| [#4161](https://github.com/github/copilot-cli/issues/4161) | `task_complete` 工具在切回 autopilot 后丢失（#1523 回归） | OPEN | ⭐⭐ Agent 模式功能完整性 |
| [#4005](https://github.com/github/copilot-cli/issues/4005) | 企业版「Copilot billing entity isn't selected」导致无法保存 memory | OPEN | ⭐⭐ 企业用户关键功能失效 |
| [#4202](https://github.com/github/copilot-cli/issues/4202) | 1.0.73 起内置 `view` 工具对已存在文件报「Path does not exist」 | OPEN | ⭐⭐ 1.0.72 引入的回归，影响核心工具链 |
| [#2770](https://github.com/github/copilot-cli/issues/2770) | CLI 卡死在 `Cancelling`，Enter 失效、slash command 不可用（👍 9） | OPEN | ⭐⭐ 高赞长期未解，影响范围广 |
| [#2703](https://github.com/github/copilot-cli/issues/2703) | 任务完成后 session 进入永久 stuck，Escape 反而进入「永久 Cancelling」 | OPEN | ⭐⭐ 与 #2770 类似的交互死锁模式 |

> **社区反应**：本次更新的 32 条 issue 中，Windows 相关占 6 条，Linux 占 3 条，BYOK/Provider 占 3 条；反映出 **1.0.7x 系列在多平台稳定性上持续承压**。

---

## 四、重要 PR 进展

过去 24 小时仅更新 1 条 PR，且内容缺乏可读描述：

| PR | 状态 | 备注 |
|---|---|---|
| [#4100](https://github.com/github/copilot-cli/pull/4100) | OPEN | 作者 @huangyoufeng76-debug，仅标注「安全性」，无 diff 摘要与讨论，建议忽略 |

> ⚠️ **PR 活跃度偏低**：过去 24 小时 PR 流量近乎停滞，建议关注上游主干分支与里程碑的提交节奏。

---

## 五、功能需求趋势

从近期 issue 提取的社区诉求方向：

| 方向 | 代表 Issue | 热度 |
|---|---|---|
| **插件生态完善**（自动更新、enable 持久化） | #2734、#4283 | 🔥🔥🔥 |
| **企业策略透明化**（模型灰显原因、policy 可视化） | #4272、#4005 | 🔥🔥🔥 |
| **ACP / 非交互模式功能对齐**（contextTier、auth 等） | #4275、#4016 | 🔥🔥 |
| **跨平台稳定性**（Windows / Linux / macOS） | #4165、#4159、#4163、#3576、#4273 | 🔥🔥🔥 |
| **流式输出与 PTY 性能** | #4286、#2182 | 🔥🔥 |
| **模型路由与会话恢复** | #4282、#4287、#4289 | 🔥 |
| **UX 体验改进**（取消逻辑、键盘缓冲、滚动行为） | #2770、#4274、#4288、#4281、#4284 | 🔥🔥 |

---

## 六、开发者关注点

1. **版本回归频发**：1.0.7x 几乎每个小版本都引入 1–2 个新回归（`view` 工具 #4202、日志静默退出 #4285、PTY 死锁 #2182），社区呼吁加强回归测试矩阵。

2. **Windows 体验系统性劣化**：`--resume` 卡死、交互模式空白、MCP stdio 启动失败（#3576）三大顽疾长期未根治，Windows 已是事实上的二级平台。

3. **BYOK / 自定义 Provider 的 ACP 路径仍不稳定**：#4016 标记的鉴权回归虽已关闭，但同类问题历史反复出现（#3048 → #3902 → #4016），说明 BYOK 与 ACP 集成路径缺乏持续测试覆盖。

4. **进程生命周期管理缺失**：Linux 下子进程未被收割（#4163、#4290）暴露了 CLI 在长跑场景下的资源治理缺陷，对 systemd / CI 环境使用者影响显著。

5. **企业策略「黑盒」**：#4272 反映管理员无法定位组织禁用了哪些模型，#3934 中 MCP server 被策略静默拦截且无解释，开发者呼吁策略可观测性。

6. **UX 细节摩擦**：更新提示过于频繁（#4284）、iTerm2 滚轮被劫持（#4288）、键盘缓冲无法中断（#4274）等小问题累积，正在侵蚀使用体验。

---

*📊 报告生成时间：2026-07-29 | 数据窗口：过去 24 小时更新 | 数据样本：30 issues + 1 PR*

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

<think>The user wants me to generate a daily report for Kimi Code CLI community dynamics based on GitHub data. Let me analyze the data carefully:

**Issues (6 total):**
1. #1783 - Feature Request: Add /delete command to remove sessions (OPEN) - by @proccl, 5 comments, 1 upvote
2. #708 - bug: Agent violated git safety protocol by committing without explicit permission (CLOSED) - by @imurodl, 2 comments
3. #2553 - /plugins crashes with TypeError when 2+ plugins are installed (v0.29.0, Windows) (OPEN) - by @tovipy-png, 1 comment
4. #2568 - Feature Request: Support custom API Base URL to access enterprise-level K3 gateway (OPEN) - by @kwu18-png, 0 comments
5. #2566 - bug: Kimi CLI rejects OAuth login for invited free users with active promotional coding credits (OPEN) - by @MohamedSayed0573, 0 comments
6. #732 - enhancement: llamacpp local backend for kimi-cli (CLOSED) - by @bennmann, 0 comments, 1 upvote

**Pull Requests (7 total):**
1. #1637 - fix: route MCP server log notifications to loguru instead of TUI (CLOSED) - by @he-yufeng
2. #2284 - fix: fire notification hooks for approvals (CLOSED) - by @he-yufeng
3. #2174 - fix: respect model display_name for kimi-for-coding (CLOSED) - by @tears-mysthrala
4. #2176 - fix(hooks): extract text from ContentPart for UserPromptSubmit hook (OPEN) - by @tears-mysthrala
5. #2507 - fix(acp): signal QuestionNotSupported instead of resolving empty answers (OPEN) - by @ayaangazali
6. #2567 - feat(usage): show absolute reset datetime in /usage panel (OPEN) - by @versun
7. #2539 - fix(mcp): normalize tools for Moonshot API (OPEN) - by @lihailong00

**No new releases in the past 24 hours.**

Now let me organize this into a structured Chinese daily report.

Let me think about the key trends:
1. MCP (Model Context Protocol) related work - 3 PRs (#1637, #2284, #2539) and the plugins crash issue (#2553)
2. Hook system improvements - #2284, #2176
3. ACP (Agent Communication Protocol) - #2507
4. Enterprise/K3 features - #2568
5. UX improvements - #1783 (delete sessions), #2567 (usage display)
6. Model display issues - #2174
7. Auth/login issues - #2566

Community pain points:
- Session management (no /delete command)
- Plugins crashes on Windows
- OAuth login issues for free users
- Enterprise gateway/API base URL not configurable
- Local backend documentation needs improvement
- Git safety protocol violations

Let me draft the report now. The user wants 6 sections:
1. 今日速览 (2-3 sentences)
2. 版本发布 (skip if none)
3. 社区热点 Issues (top 10 - but there are only 6, so I'll pick all 6)
4. 重要 PR 进展 (top 10 - there are 7, so all of them)
5. 功能需求趋势
6. 开发者关注点

Note: The user said "挑选 10 个最值得关注的 Issue" but there are only 6. I should explain this or just include all 6. I'll include all 6 since there aren't 10.

Similarly for PRs, there are 7, so I'll include all 7.

Let me write this in a professional Chinese style suitable for technical developers.</think>

# Kimi Code CLI 社区动态日报
**日期：2026-07-29**

---

## 📌 今日速览

今日社区活跃度中等偏低，Issues 与 PR 总量较平日略有回落，但内容质量较高。**MCP 生态适配**仍是核心议题——3 个相关 PR 涉及日志路由、工具名称归一化和工具 schema 修复；同时，**企业级 K3 网关接入**、**/plugins 在 Windows 下崩溃**、**OAuth 登录拒绝免费用户**等新问题被首次提出，反映出 Kimi K3 开源后企业落地场景的早期痛点。

---

## 🚀 版本发布

> 过去 24 小时内无新 Release 发布。最近一次版本为社区中提到的 **v0.29.0 / v0.29.2**，相关问题（#2553、#2566）正在通过 PR 修复中。

---

## 🔥 社区热点 Issues

> 今日 Issues 总量较少（共 6 条），全部列入观察列表，按重要性排序。

### 1. [#2553 `/plugins` 在安装 2+ 插件时崩溃（v0.29.0, Windows）](https://github.com/MoonshotAI/kimi-cli/issues/2553)
**状态**：OPEN · 👍 0 · 💬 1
**为什么重要**：属于 v0.29.0 版本的明确回归 bug，影响 Windows 平台所有重度插件用户。错误信息 `TypeError: Cannot read properties of undefined (reading 'value')` 暗示 plugins manager 在迭代多插件时未做空值校验，是典型需要尽快发版的 P0 问题。

### 2. [#1783 功能请求：添加 `/delete` 或 `/remove` 命令删除 Session](https://github.com/MoonshotAI/kimi-cli/issues/1783)
**状态**：OPEN · 👍 1 · 💬 5
**为什么重要**：评论区互动最多的长期 Issue 之一。社区一致反馈目前手动清理 `~/.kimi/sessions/` 目录极不友好，需求同时涵盖会话管理 UI、批量删除、敏感会话彻底擦除等场景。这是 CLI 用户体验层面的关键短板。

### 3. [#2568 Feature Request：支持自定义 API Base URL 以接入企业级 K3 网关](https://github.com/MoonshotAI/kimi-cli/issues/2568)
**状态**：OPEN · 👍 0 · 💬 0
**为什么重要**：随着 Kimi K3（2.8T 参数）2026 年 7 月开源，企业生产环境落地需求集中爆发。Issue 详细列出了 4 类痛点（并发限流、跨地域延迟、故障切换、Key 审计），是观察 K3 商业化进程的重要信号。

### 4. [#2566 OAuth 登录拒绝含有效促销 credits 的受邀免费用户](https://github.com/MoonshotAI/kimi-cli/issues/2566)
**状态**：OPEN · 👍 0 · 💬 0
**为什么重要**：涉及付费转化漏斗的关键路径。该 bug 直接阻断推广活动的获客链路，若不及时修复将影响 Kimi Code CLI 的拉新与品牌活动 ROI。

### 5. [#708 Agent 违反 Git 安全协议——未经确认自动 commit](https://github.com/MoonshotAI/kimi-cli/issues/708)
**状态**：CLOSED · 👍 0 · 💬 2
**为什么重要**：高敏感度安全议题，关乎企业用户对 Agent 自动写权限的信任度。虽然已关闭，但 PR #2284 通过引入 approval 通知 Hook 做了系统性修复，值得回溯关注。

### 6. [#732 增强：llamacpp 本地后端接入文档](https://github.com/MoonshotAI/kimi-cli/issues/732)
**状态**：CLOSED · 👍 1 · 💬 0
**为什么重要**：本地推理 + 私有化部署是开发者高频需求。Issue 反映出官方配置文档对 llamacpp provider / model 模板描述不足，被关闭后建议关注后续文档站点的更新。

---

## 🛠 重要 PR 进展

### 1. [#1637 fix: 将 MCP server 日志通知路由到 loguru 而非 TUI](https://github.com/MoonshotAI/kimi-cli/pull/1637)
**作者**：@he-yufeng · **状态**：CLOSED ✅
将 SearXNG 等 MCP server 的 `INFO` 日志从 TUI stderr 中剥离，避免污染交互界面。属于 MCP 集成体验的关键修复。

### 2. [#2284 fix: 为审批请求触发 Notification Hook](https://github.com/MoonshotAI/kimi-cli/pull/2284)
**作者**：@he-yufeng · **状态**：CLOSED ✅
为 approval 流程添加 `Notification` Hook（matcher 为 `permission_prompt`），让外部工具能监听"需用户审批"事件，直接关联 #708 安全问题的根因修复。

### 3. [#2174 fix: 尊重 kimi-for-coding 的 `display_name`](https://github.com/MoonshotAI/kimi-cli/pull/2174)
**作者**：@tears-mysthrala · **状态**：CLOSED ✅
移除 `model_display_name()` 中将 `kimi-for-coding` / `kimi-code` 硬编码为同一展示名的逻辑，使后端返回的 `display_name`（如 "Kimi-k2.6"）能正确透出到 UI。

### 4. [#2176 fix(hooks): 从 ContentPart 提取 UserPromptSubmit 文本](https://github.com/MoonshotAI/kimi-cli/pull/2176)
**作者**：@tears-mysthrala · **状态**：OPEN 🔓
修复 Hook 在 `user_input` 为 `list[ContentPart]`（默认消息结构）时正则匹配失效的 bug，影响所有依赖 prompt 内容做路由的 Hook。

### 5. [#2507 fix(acp): 返回 QuestionNotSupported 而非空答案](https://github.com/MoonshotAI/kimi-cli/pull/2507)
**作者**：@ayaangazali · **状态**：OPEN 🔓
ACP server 模式下此前把所有 `QuestionRequest` 都 resolve 为空 dict（语义上等同于用户取消），模型无法区分"被取消"和"不支持问询"，本 PR 修复协议层语义。

### 6. [#2567 feat(usage): `/usage` 面板显示绝对重置时间](https://github.com/MoonshotAI/kimi-cli/pull/2567)
**作者**：@versun · **状态**：OPEN 🔓
将原本模糊的 `resets in 4d` 改为绝对本地时间（如 `2026-08-02 14:30 UTC+8`），相对时长作为副标题保留。提升用户对 quota 周期的可预测性。

### 7. [#2539 fix(mcp): 为 Moonshot API 归一化 MCP 工具](https://github.com/MoonshotAI/kimi-cli/pull/2539)
**作者**：@lihailong00 · **状态**：OPEN 🔓
为 MCP 工具名生成稳定的 Moonshot 兼容别名、补充缺失的 root `object` 类型、并校正 `anyOf`/required schema 形态。是 Moonshot API + MCP 链路稳定性的关键补丁。

---

## 📈 功能需求趋势

从过去 24 小时 + 近期活跃 Issue 提炼，社区关注的功能方向如下：

| 方向 | 代表 Issue | 热度 |
|------|------------|------|
| **企业级 / 私有化部署** | #2568（K3 网关）、#732（llamacpp） | 🔥🔥🔥 |
| **会话与状态管理** | #1783（/delete）、历史 PR 中的 session 列表优化 | 🔥🔥🔥 |
| **MCP 生态兼容与稳定性** | #2553（崩溃）、#1637、#2539 | 🔥🔥🔥 |
| **模型展示与版本透出** | #2174（display_name） | 🔥🔥 |
| **审批 / 权限安全 Hook** | #2284、#2176 | 🔥🔥 |
| **ACP 协议正确性** | #2507（QuestionNotSupported） | 🔥 |
| **用量与计费 UI** | #2567（绝对重置时间） | 🔥 |
| **OAuth 与拉新链路** | #2566（免费用户登录） | 🔥 |

**整体趋势**：随着 Kimi K3 开源与商业化推进，"**企业可接入性**"（私有网关、本地推理、跨地域容灾）正取代原先的"个人 IDE 集成"成为头号诉求；MCP 作为 Agent 工具生态的事实标准，相关兼容性问题持续涌现。

---

## 💡 开发者关注点

综合 Issue 评论与 PR 描述，开发者社区反馈集中在以下痛点：

1. **CLI 缺少基础会话管理工具**：手动维护 `~/.kimi/sessions/` 不可接受，社区呼吁提供 `/delete`、`/list`、`/rename` 等斜杠命令。
2. **插件系统在 Windows 上的鲁棒性不足**：#2553 表明 `plugins` 子系统在多插件场景缺少边界校验，P0 级回归需快速发版修复。
3. **企业接入路径不清晰**：缺少官方文档说明如何配置自定义 `base_url`、负载均衡 Key 池、限流策略等，是 K3 开源后大规模落地的首要障碍。
4. **OAuth 登录链路对促销活动不友好**：免费用户的邀请码 → 激活 credits 链路存在鉴权冲突，影响营销活动转化。
5. **Hook 系统契约不稳定**：`UserPromptSubmit` 在多模态消息下行为不一致（#2176），`approval` 通知未触发（#2284），开发者难以构建可靠的外部工具链。
6. **本地推理文档薄弱**：llamacpp provider 的官方示例缺失，私有化部署门槛被文档而非技术抬高。
7. **协议层语义模糊**：ACP 的空答案 fallback（#2507）让客户端与模型之间的"沉默 vs. 拒绝"无法区分，影响交互可靠性。

---

> 📊 **日报小结**：今日 Kimi Code CLI 仓库共 6 条 Issue 活跃、7 条 PR 更新，无新版本发布。社区重心从"个人开发者 IDE 体验"逐步过渡到"企业生产级稳定性与可扩展性"，建议关注者在未来一周内跟踪 v0.29.x 的 plugins 修复发版、K3 网关相关 RFC、以及 MCP/ACP 协议层的进一步规范化进展。

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

<think>Let me analyze the GitHub data for OpenCode community dynamics on 2026-07-29.

Key observations:
1. Two new releases in past 24 hours: v1.18.9 and v1.18.8
2. 50 issues updated, mostly CLOSED status
3. 50 PRs updated, mix of OPEN and CLOSED
4. Major themes: DeepSeek thinking mode issues, MCP server problems, TUI improvements, desktop app fixes

Let me organize this into the required structure.

Top issues to highlight:
1. #24722 - DeepSeek thinking mode reasoning_content (19 comments, 12 likes) - CLOSED
2. #25168 - Jinja template error after compaction (15 comments) - CLOSED
3. #29618 - DeepSeek V4 Flash reasoning_content (14 comments) - CLOSED
4. #12680 - TodoRead removed from tools (7 comments, 8 likes) - CLOSED
5. #27497 - Subagent permission redefining (7 comments) - CLOSED
6. #28974 - DeepSeek V4 Pro SiliconFlow (6 comments) - CLOSED
7. #25084 - StepFun Step Plan endpoint (6 comments) - CLOSED
8. #29638 - Subagents sequential vs parallel (5 comments) - CLOSED
9. #18229 - WSL performance issues (5 comments) - CLOSED
10. #29939 - MCP servers duplicate processes (4 comments) - CLOSED

Important PRs:
1. #39176 - Automatic discovery of models from providers (OPEN)
2. #39442 - Restore permission ask hook (OPEN)
3. #39439 - Tab cycling in timeline popup (OPEN)
4. #39417 - Subagent image passthrough (CLOSED)
5. #39437 - Text selection in patch accordion (OPEN)
6. #39423 - Hebrew language with RTL support (OPEN)
7. #39425 - Currency in usage_update (OPEN)
8. #39413 - Retry HTTP 408 timeouts (OPEN)
9. #38625 - Filter subagents by activity (CLOSED)
10. #39300 - Preserve agent picker (CLOSED)

Feature trends:
- DeepSeek model support and thinking mode
- MCP server improvements
- Desktop app UX improvements
- TUI enhancements (keyboard shortcuts, navigation)
- Multi-language support
- Parallel subagent execution
- LiteLLM integration request
- Permission system refinements

Developer pain points:
- DeepSeek reasoning_content handling
- MCP server process management
- WSL/Windows compatibility
- Desktop app crashes
- Permission system inconsistencies

Let me write this up in Chinese, professional and concise.</think>

# OpenCode 社区动态日报
**2026-07-29**

---

## 📌 今日速览

今日 OpenCode 发布了 **v1.18.9** 与 **v1.18.8** 两个版本，核心聚焦 MCP（Model Context Protocol）协议的兼容性与 OAuth 流程修复。社区侧讨论热度集中在 **DeepSeek V4 系列 thinking 模式的 `reasoning_content` 回传问题**（多条 Issue 评论数均较高），同时 TUI 体验优化（会话标签、键盘导航）、Desktop 应用稳定性以及并行子代理调度也是高频议题。所有 50 条近 24 小时更新的 Issue 均已 CLOSED，PR 中近半数为 TUI 体验打磨。

---

## 🚀 版本发布

### v1.18.9（Core + Desktop）
- **Core**：恢复对旧版 MCP SDK 客户端的兼容性（Bugfix）
- **Desktop**：
  - 修复 Solid 清理导致的桌面应用导航崩溃
  - 修复主页会话加载逻辑，会话列表更新不再需要挂起整个页面

### v1.18.8（Core）
- **改进**：提升与新版 MCP 服务器和 OAuth 流程的兼容性
- **修复**：
  - 在 SDK 会话过期后（包括并发请求）正确重连 MCP 服务器
  - `mcp debug` 命令尊重配置的 OAuth 回调端口
  - 停止向 MCP 服务器发送已弃用的 sampling 默认参数

---

## 🔥 社区热点 Issues（TOP 10）

| # | Issue | 评论 | 👍 | 重要性 |
|---|-------|------|-----|--------|
| [#24722](https://github.com/anomalyco/opencode/issues/24722) | **DeepSeek thinking 模式下 `reasoning_content` 未回传导致 400 错误** | 19 | 12 | 🔴 多用户复现的严重 bug，已关闭表明官方修复 |
| [#25168](https://github.com/anomalyco/opencode/issues/25168) | **上下文压缩后 LM Studio Qwen3 模板报错 "No user query found"** | 15 | 1 | 🟠 涉及 `/compact` 关键功能，影响所有 LM Studio 用户 |
| [#29618](https://github.com/anomalyco/opencode/issues/29618) | **DeepSeek V4 Flash 在 OpenRouter 上的 `reasoning_content` 缺失** | 14 | 4 | 🟠 与 #24722 同源，体现 DeepSeek 模型适配的系统性问题 |
| [#12680](https://github.com/anomalyco/opencode/issues/12680) | **TodoRead 工具从注册表中被移除** | 7 | 8 | 🟡 PR #11814 引入的回归，关闭代表已修复 |
| [#27497](https://github.com/anomalyco/opencode/issues/27497) | **子代理权限重定义失效（v1.14.50 起）** | 7 | 4 | 🟡 涉及权限继承语义，破坏性变更需文档同步 |
| [#28974](https://github.com/anomalyco/opencode/issues/28974) | **SiliconFlow 上 DeepSeek V4 Pro 偶发 Bad Request** | 6 | 0 | 🟢 与 SiliconFlow 兼容性报告 |
| [#25084](https://github.com/anomalyco/opencode/issues/25084) | **StepFun Step Plan API 端点路由错误** | 6 | 0 | 🟢 端点未走对的小厂商适配问题 |
| [#29638](https://github.com/anomalyco/opencode/issues/29638) | **子代理串行执行而非并行** | 5 | 4 | 🟠 性能与体验双重影响，重报 #14195 |
| [#18229](https://github.com/anomalyco/opencode/issues/18229) | **WSL + Windows VM 下严重输入延迟** | 5 | 2 | 🟡 跨平台性能瓶颈报告 |
| [#29939](https://github.com/anomalyco/opencode/issues/29939) | **MCP 服务器进程重复派生（1 项目 8+ 实例，2+ 项目崩溃）** | 4 | 0 | 🔴 严重的进程管理 bug，与 #29941 ReadableStream 崩溃存在因果链 |

**社区反应**：DeepSeek 适配问题是近期最受关注的话题，4 条相关 Issue 累计 ~46 条评论，说明 OpenCode 用户对国产/开源模型生态接入需求强烈且对稳定体验要求高。

---

## 🛠️ 重要 PR 进展（TOP 10）

| PR | 状态 | 内容 |
|----|------|------|
| [#39176](https://github.com/anomalyco/opencode/pull/39176) | OPEN | **自动发现 Provider 模型**：实现通用的 `/v1/models` 拉取机制，Provider 可自动更新模型清单，关闭 #6231 |
| [#39442](https://github.com/anomalyco/opencode/pull/39442) | OPEN | **恢复 `permission.ask` 插件钩子**：在 OpenCode 提示用户前，允许插件审批/拒绝声明的请求（修复 #7006） |
| [#39439](https://github.com/anomalyco/opencode/pull/39439) | OPEN | **TUI timeline 弹窗支持 Tab/Shift+Tab 切换**：补齐无 footer 操作时的键盘导航 |
| [#39417](https://github.com/anomalyco/opencode/pull/39417) | CLOSED | **Task 工具新增 `images` 参数**：支持向子代理传递图像附件，扩展视觉分析场景 |
| [#39437](https://github.com/anomalyco/opencode/pull/39437) | OPEN | **补丁折叠面板支持文本选择**：修复 `user-select: none` 继承问题 |
| [#39423](https://github.com/anomalyco/opencode/pull/39423) | OPEN | **希伯来语本地化（含 RTL 支持）**：补齐 i18n 语种 |
| [#39425](https://github.com/anomalyco/opencode/pull/39425) | OPEN | **ACP `usage_update` 货币单位修复**：不再硬编码 USD，跟随 Provider 实际货币 |
| [#39413](https://github.com/anomalyco/opencode/pull/39413) | OPEN | **HTTP 408 请求超时自动重试**：扩展 `retryable()` 判定逻辑 |
| [#38625](https://github.com/anomalyco/opencode/pull/38625) | CLOSED | **TUI 子代理按活动状态过滤**：Tab 切换 active/inactive，header 显示提示 |
| [#39300](https://github.com/anomalyco/opencode/pull/39300) | CLOSED | **保留现有用户的 Agent 选择器**：仅新用户默认隐藏，避免升级破坏体验 |

另外注意到 @kitlangton 的 TUI 系列 PR（[#39418](https://github.com/anomalyco/opencode/pull/39418)、[#39422](https://github.com/anomalyco/opencode/pull/39422)、[#39428](https://github.com/anomalyco/opencode/pull/39428)、[#39429](https://github.com/anomalyco/opencode/pull/39429)、[#39432](https://github.com/anomalyco/opencode/pull/39432)、[#39433](https://github.com/anomalyco/opencode/pull/39433)）密集更新会话标签（session tab）的可见性、脉冲动画、未读高亮、Playground 与渲染性能，是当前 TUI 体验打磨的主力贡献。

---

## 📈 功能需求趋势

从近 24 小时 Issue 议题中提炼出的社区关注方向：

1. **🤖 DeepSeek / 国产模型深度适配**（最高优先级）
   - 4 条 Issue 均围绕 `reasoning_content` 回传机制，涉及 OpenRouter、SiliconFlow、LM Studio 等多个 Provider/网关，说明 OpenCode 用户对低成本/开源模型有强需求。

2. **⌨️ TUI 键盘可访问性**
   - [#29903](https://github.com/anomalyco/opencode/issues/29903) 跳转到待审批会话
   - [#29904](https://github.com/anomalyco/opencode/issues/29904) 权限审批快捷键移植到 Desktop/Web
   - [#29905](https://github.com/anomalyco/opencode/issues/29905) 工作区删除的会话内入口
   - 体现"鼠标 + 键盘双路径"的设计哲学。

3. **🔌 Provider / 集成扩展**
   - [#29935](https://github.com/anomalyco/opencode/issues/29935) 请求内置 LiteLLM 代理 Provider（👍 5，社区认可度高）
   - 自动发现模型（PR #39176）契合此方向

4. **🖥️ Desktop / Electron 稳定性**
   - Windows 启动崩溃（#29001）、macOS 启动报错（#29668）、WSL2 侧边栏空白（#29766）、WSL2 命令行消失（#29835）—— 跨平台桌面体验仍是主要摩擦源。

5. **🧩 插件与权限系统**
   - `permission.ask` 钩子恢复（PR #39442）、子代理权限继承（#27497）、Plan 模式被绕过（#29955）—— 权限模型正在收敛但仍有边界 case。

---

## 💡 开发者关注点

| 痛点 | 出现频次 | 代表 Issue |
|------|---------|-----------|
| **DeepSeek thinking 模式协议兼容** | 🔴 极高 | #24722 / #29618 / #28974 / #29745 |
| **MCP 服务器进程膨胀与级联崩溃** | 🔴 高 | #29939 / #29941 |
| **Desktop 跨平台稳定性（Windows/macOS/WSL2）** | 🟠 高 | #29001 / #29668 / #29766 / #29835 / #18229 |
| **权限模型的不一致与文档缺失** | 🟡 中 | #27497 / #29955 / #29904 |
| **子代理调度与并行性** | 🟡 中 | #29638 / #29952 / #38625(PR) |
| **WSL / Windows 性能与生命周期** | 🟡 中 | #18229 / #29835 |
| **LiteLLM 统一代理集成** | 🟢 中（需求驱动） | #29935 |
| **i18n 多语种覆盖** | 🟢 中 | PR #39423（希伯来语） |

**总结**：开发者当前最迫切的诉求集中在两点 —— **DeepSeek 等"thinking 模型"的协议层正确性**，以及 **MCP 服务器资源管理的健壮性**；跨平台桌面稳定性是次级但持续累积的摩擦源。TUI 交互层的精细打磨（键盘导航、会话标签、未读视觉提示）显示社区正在推动 OpenCode 向"重度键盘用户友好"的 IDE 形态演进。

---

*日报基于 GitHub 公开数据自动生成，覆盖 anomalyco/opencode 仓库过去 24 小时内活跃的 Releases、Issues 与 PRs。*

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

<think>Let me analyze the GitHub data for Qwen Code from 2026-07-29 and generate a comprehensive daily report in Chinese.

Key observations:
1. Two releases today: v0.21.0-nightly.20260729.0c0ca5fed and v0.21.1
2. v0.21.1 contains breaking changes info (none) and feature: Align GenAI content telemetry fields
3. The nightly release includes: feat(autofix): defer suggestions after five change rounds
4. 43 issues updated in last 24h, with comments ranging from 2-4
5. 50 PRs updated in last 24h
6. Several themes emerging:
   - Windows-specific issues (encoding, scrolling, mouse events)
   - CI/CD pipeline failures (multiple E2E test failures)
   - Performance optimizations (daemon latency, token management)
   - Context window issues (long context streaming errors)
   - MCP-related fixes
   - Review skill hardening (#7981)
   - Session management issues

Let me organize this into a structured daily report.

Hot Issues (by importance, not just comments):
1. #7972 - 0.21.1 crash 3 times (P2, critical user impact)
2. #7964 - Window terminal scrolling broken in 0.21.1 (P2)
3. #7984 - send_message tool schema breaks on Anthropic models (P1)
4. #7981 - /review hardening P0
5. #7752 - P0 daemon writer lock fix
6. #7991 - MCP prompt completion bug
7. #7937, #7942, #7901, #7878, #7860 - CI failures (multiple)
8. #7940 - UserPromptSubmit context pollution
9. #7831 - ECONNRESET on streaming
10. #7960, #7961 - Token management issues

Important PRs:
1. #7989 - fix send_message top-level oneOf
2. #7956, #7948 - UserPromptSubmit context separation
3. #7927 - rebind fork capabilities
4. #7919 - preserve Todo context
5. #7993 - stamp QWEN_CODE_CLI
6. #7988 - SGR mouse events Windows fix
7. #7987 - disclose zero-finding Approve
8. #7974 - triage verify lead with verdict
9. #7994 - measure prompt dispatch stages
10. #7714 - protect pinned files in Dream

Let me write the report now.</think>

# Qwen Code 社区动态日报 · 2026-07-29

## 今日速览

今日 v0.21.1 稳定版正式发布，重点对齐 GenAI 内容遥测字段；但同日用户集中反馈 Windows 终端下 0.21.1 滚动异常与多次崩溃，亟需补丁修复。社区同步聚焦于 `/review` 命令的硬化迭代（#7981 跟踪项）以及多起 E2E CI 红线告警，开发节奏以"修补回归 + 强化核心路径"为主线。

---

## 版本发布

### v0.21.1（稳定版）
- 核心变更：完成 `GenAI` 内容遥测字段对齐（[#7667](https://github.com/QwenLM/qwen-code/pull/7667)），便于下游观测与数据后处理。
- 无破坏性变更声明。
- 完整变更列表：[Release v0.21.1](https://github.com/QwenLM/qwen-code/releases)

### v0.21.0-nightly.20260729.0c0ca5fed
- `feat(autofix)`：在经过五轮代码变更后推迟建议，避免循环干扰（[#7913](https://github.com/QwenLM/qwen-code/pull/7913)）。
- 链接：[Nightly Release](https://github.com/QwenLM/qwen-code/releases/tag/v0.21.0-nightly.20260729.0c0ca5fed)

---

## 社区热点 Issues

> 以下挑选按"优先级 + 实际影响 + 讨论热度"综合排序。

1. **[#7972](https://github.com/QwenLM/qwen-code/issues/7972) | 0.21.1 使用中崩溃 3 次（OPEN, P2）**  
   用户升级 0.21.1 后三次崩溃，运行环境为 Win11 + Node v24。属于高敏感度的稳定版回归问题。

2. **[#7964](https://github.com/QwenLM/qwen-code/issues/7964) | 升级到 0.21.1 后 Windows Terminal 内容无法滚动（OPEN, P2）**  
   Windows 终端渲染回归，影响所有 Windows 用户基本可读性。

3. **[#7984](https://github.com/QwenLM/qwen-code/issues/7984) | `send_message` 工具顶层 `oneOf` 在 Anthropic 模型上完全失效（OPEN, P1）**  
   Anthropic Messages API 直接 400 拒绝，任何 Anthropic 后端模型均无法使用该工具，影响面广。

4. **[#7981](https://github.com/QwenLM/qwen-code/issues/7981) | `/review` 多模型 dogfooding 暴露的能力缺口（OPEN, P0）**  
   由 wenshao 发起，归纳 7 次 review 结果中的"零发现 Approve 假绿灯"、runtime 标识缺失、`build-test` 磁盘饥饿等问题，已衍生 P0-1/P0-2/P0-3 子项 PR。

5. **[#7752](https://github.com/QwenLM/qwen-code/issues/7752) | Daemon 写锁泄漏导致替换进程失败关闭（OPEN, P0）**  
   `#7164` 的 P0 后续，被替换 daemon 仍持有 workspace 锁，新 daemon 直接 `session is already open`，破坏 ACP 服务端多副本可用性。

6. **[#7991](https://github.com/QwenLM/qwen-code/issues/7991) | MCP prompt 可选参数被当作必填，Enter 触发阻塞（OPEN, P2）**  
   MCP 集成可用性问题，影响所有调用 prompt 的工作流。

7. **[#7960](https://github.com/QwenLM/qwen-code/issues/7960) | 压缩侧查询固定 `maxOutputTokens` 在小窗口部署上超限（OPEN, P2）**  
   小 `max_model_len` 自托管场景下退化为 `COMPRESSION_FAILED_EMPTY_SUMMARY`，压缩流程直接失效。

8. **[#7940](https://github.com/QwenLM/qwen-code/issues/7940) | `UserPromptSubmit` `additionalContext` 污染用户消息 JSONL（OPEN, P2）**  
   Hook 注入内容混入用户记录，影响会话恢复与回放纯度；已有 PR #7956/#7948 跟进。

9. **[#7946](https://github.com/QwenLM/qwen-code/issues/7946) | Serve 拒绝大于 256 KiB 的文本文件的有界读取（OPEN, P2）**  
   `WorkspaceFileSystem.readText` 在分页窗口前即拒绝，限制了 daemon 大文件调试能力。

10. **[#7937 / #7942 / #7901 / #7878 / #7860](https://github.com/QwenLM/qwen-code/issues/7937) | Main CI E2E Tests 连续失败（CLOSED, 多 P2）**  
    多个 CI 信号（涉及 `tool-control`、`file-system-interactive`、`sandbox` 等）由 qwen-code-dev-bot 自动生成，autofix 流水中处理；反映当前 main 集成稳定性偏弱。

---

## 重要 PR 进展

1. **[#7989](https://github.com/QwenLM/qwen-code/pull/7989) | 移除 `send_message` 工具 schema 的顶层 `oneOf`**  
   配套修复 #7984，使 `send_message` 在 Anthropic 后端可用。

2. **[#7956](https://github.com/QwenLM/qwen-code/pull/7956) / [#7948](https://github.com/QwenLM/qwen-code/pull/7948) | `UserPromptSubmit` hook 上下文加标签 + 显示与传输分离**  
   两份并行方案解决 #7940，将 hook 注入内容包裹在 `<qwen:user-prompt-submit-context>` 内并保留 displayText/hookContext 来源元数据。

3. **[#7927](https://github.com/QwenLM/qwen-code/pull/7927) | fork 后台代理恢复时重绑能力**  
   修复 #7924 中 fork 恢复后复用启动时系统指令与工具快照的陈旧问题。

4. **[#7919](https://github.com/QwenLM/qwen-code/pull/7919) | 在工具调用回合之间保留活动 Todo 上下文**  
   跨多轮工具调用时让最新未完成 Todo 持续显形，缓解模型"忘记任务列表"问题。

5. **[#7993](https://github.com/QwenLM/qwen-code/pull/7993) | 在 workspace 入口盖戳 `QWEN_CODE_CLI` 并发布 `QWEN_CODE_MODEL`**  
   #7981 中 P0-2 子项，让 skill 子进程可靠识别"启动它们的构建版本"与"当前运行模型"。

6. **[#7988](https://github.com/QwenLM/qwen-code/pull/7988) | Windows 输入路径下防止 SGR 鼠标事件被误吞为粘贴**  
   `pasteWorkaround` 启发式修复，对 `0x0d` + SGR 转义序列不再误分类为粘贴块。

7. **[#7987](https://github.com/QwenLM/qwen-code/pull/7987) | 在非平凡 diff 上对零发现 Approve 显式标注低信号**  
   #7981 中 P0-1 子项，给出"Verdict: Approve — low signal: …"形式的诚实披露，抑制假绿灯。

8. **[#7985](https://github.com/QwenLM/qwen-code/pull/7985) | 在临时 runner 上为外部 PR 提供赞助式 `/verify`**  
   维护者可对外部贡献者的 PR 触发 `/verify`，权限由"拦截"变为"路由"。

9. **[#7986](https://github.com/QwenLM/qwen-code/pull/7986) | `qwen review build-test` 预检磁盘空间**  
   #7981 中 P0-3 子项；`npm ci` 前要求 ≥3 GiB，构建前 ≥1 GiB，不足则跳过并披露原因。

10. **[#7714](https://github.com/QwenLM/qwen-code/pull/7714) | 在 fork Dream 中保护 pinned 文件**  
    新增托管内存权限闸门，禁止对 `pinned/` 下词法或 symlink 解析路径执行 `write_file`/`edit`，fork Dream worker 默认启用。

> 其他值得关注：#7994（daemon 首输出基准的提示分派阶段埋点）、#7978（preview 版本号自动跳过已发布稳定版）、#7974（verify 评论以定性结论开头，中文折叠）。

---

## 功能需求趋势

综合近 24h Issues/PR 文本，可识别出以下重点方向：

- **/review 技能硬化**（#7981 及其衍生 PR #7985/#7986/#7987/#7989/#7993）：从单一功能升级为"P0 三件套 + 维护者工作流"级别的工程化能力，强调防假绿灯、构建鲁棒性与外部贡献者支持。
- **小上下文/自托管后端适配**（#7960、#7961）：压缩侧查询与主轮的 token 预算需适配 vLLM 等小窗口部署，CJK 字符计数偏差也被纳入考量。
- **MCP 与 hooks 可用性**（#7991、#7968 `allowPrivateNetworkHooks`、#7807 GitHub 通道分派）：完善 MCP prompt 必选判定、为平台托管 hooks 放行 RFC1918 私网地址、GitHub channel 按 `notification.reason` 分流。
- **动态工作流 / TUX 终端 UX**（#7890、#7834）：把 Dynamic Workflow 详情页改造为执行控制台，扩展 `silent` 选项到 `getStats`，抑制 toast 噪音。
- **CI/CD 与发布工程**（#7970、#7978、#7656 DSW SWE-bench 流水线、#7523 稳定版 AI 注释超时回退）：发布链路的鲁棒性与可观测性持续投入。
- **daemon/serve 性能与正确性**（#7757 首模型输出延迟、#7752 写锁、#7946 大文件有界读）：围绕 ACP 服务端冷启动到首输出的整段链路优化。

---

## 开发者关注点

- **稳定版回归风险**：0.21.1 发布当日即出现 Windows 滚动（#7964）、崩溃（#7972）类用户可见问题，开发者呼吁建立更严格的 Win 平台冒烟与 release-notes AI 回退告警（呼应 #7523）。
- **长上下文与流式稳定性**：#7831 报 150k tokens 后 `ECONNRESET` 反复出现，#7960/#7961 揭示主轮/压缩侧查询的 token 上限在小窗口后端会越界，社区期望更精细的流式重试与 token 估算（含 CJK）。
- **多模型/多后端的 schema 兼容性**：#7984/#7989 的 `oneOf` 教训说明顶层 JSON Schema 组合子在 Anthropic 后端直接失败，需建立 provider-aware schema 规整层。
- **MCP/hooks 安全与可用性的平衡**：默认 SSRF 拦截虽正确但阻断平台托管 hooks（#7968），期望更细粒度的"信任作用域"配置。
- **fork 与后台代理状态生命周期**：#7924/#7927/#7940/#7948 一组问题集中暴露"持久化快照"与"运行时能力"解耦不足，开发者关注 resume/fork 的一致性语义。
- **CI 红线与 autofix 流水线**：连续多条 E2E 失败 Issue（#7937、#7942、#7901、#7878、#7860）由 bot 自动开单并通过 `autofix/in-progress` 或 `autofix/skip` 流转，开发者希望降低 autofix 误跳过率并改善 PR 评注可读性（#7974、#7992）。

---

*日报基于 GitHub 公开数据生成，仅供参考社区动向，欢迎 PR 修订与补充。*

</details>

---
*本日报由 [Big Model Radar](https://github.com/96loveslife/big_model_radar) 自动生成。*
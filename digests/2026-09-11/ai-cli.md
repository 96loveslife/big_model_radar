# AI CLI 工具社区动态日报 2026-09-11

> 生成时间: 2026-09-11 03:59 UTC | 覆盖工具: 8 个

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

<think>The user wants me to generate a horizontal comparison analysis report based on the daily dynamics of various AI CLI tools provided. Let me carefully analyze the data from each tool and create a comprehensive comparative report.

Let me organize the key data points from each tool:

**Claude Code:**
- 1 release (v2.1.268)
- 15+ issues discussed
- 2 PRs (only)
- Hot topics: Cowork network/mount regressions, Function Hooks coming, Desktop tool registry issues

**OpenAI Codex:**
- 6+ releases (python-v0.154.0 + rust 4 alphas + voice-ci build)
- 50+ issues (20 mentioned)
- 20+ PRs (cherry-picks)
- Hot topics: GPT-5/6 capacity, Windows browser control, scoped memory

**Gemini CLI:**
- 1 nightly release (v0.61.0-nightly)
- 30 issues shown
- 20 PRs shown
- Hot topics: Subagent issues, Auto Memory security, sandbox hardening

**GitHub Copilot CLI:**
- 1 release (v1.0.84-4)
- ~15 issues shown
- 2 PRs (only)
- Hot topics: Node.js OOM, MCP lifecycle, platform-specific clipboard

**Kimi Code CLI:**
- 0 releases
- 2 issues only
- 0 PRs
- Hot topics: /login HTTP 500 (only critical issue)

**OpenCode:**
- 0 releases
- 30 issues shown
- 20 PRs shown
- Hot topics: TUI O(n²), local model auto-discovery, shell tool, 2.0 migration

**jcode:**
- 0 releases
- 42 issues
- 1 PR (batch fix of 10 issues)
- Hot topics: CI broken, Swarm, provider routing, Windows memory

**pi:**
- 0 releases
- Multiple issues (10 mentioned)
- 10+ PRs
- Hot topics: TUI bugs, provider compatibility, O(n²) parsing, OOM

Now I need to identify common themes across these tools:

1. **Performance issues (O(n²), OOM, memory leaks)**: 
   - OpenCode: #48431, #48432 (TUI O(n²))
   - Copilot CLI: #4686 (Node.js OOM)
   - pi: #9265 (O(n²) tool-call re-parsing), #9276 (grep OOM)
   - jcode: #1192 (Windows 8-12GB RSS)

2. **MCP integration issues**:
   - Copilot CLI: #4809 (lifecycle violation), #4731, #4795
   - Codex: #43410, #44135 (browser control via MCP)
   - Kimi: #1388 (MCP connection failure)

3. **Provider compatibility/routing**:
   - jcode: #1173 (OpenCode Go routing)
   - pi: #8752 (Bedrock usage), #9323 (Fireworks config), #9294 (Fable 5 fallback)
   - Codex: #17541 (Azure model switching)

4. **TUI/terminal rendering issues**:
   - pi: #9257, #9268, #9332
   - jcode: #1184 (Ghostty focus loop)
   - Copilot CLI: #13 (vim mode), #3260 (tmux copy/paste)

5. **Authentication/login issues**:
   - Kimi: #2638 (/login HTTP 500)
   - Copilot CLI: #4796 (Entra/EMU MCP login)

6. **Multi-agent/subagent issues**:
   - Gemini: #22323, #21409
   - jcode: #1175 (swarm)
   - Claude Code: #92016 (SendMessage regression)

7. **Windows compatibility**:
   - Claude Code: #92984 (KB regression)
   - Codex: #34499, #38878, #43410
   - jcode: #1192 (memory), #1201 (test deadlock)
   - Copilot CLI: #4095, #3534

8. **Security/sandbox**:
   - Gemini: #29184, #29192, #29250, #29283, #29214
   - Codex: #44670 (token leak)
   - Claude Code: #30112, #34690 (egress)
   - jcode: #678 (installer)

9. **Auto Memory / Context persistence**:
   - Gemini: #26525, #26522, #26523
   - Codex: #18343 (scoped memory), #44701 (PR)

10. **Model capacity**:
   - Codex: #43375 (at capacity)

Differentiation analysis:
- **Enterprise/managed**: Claude Code (managed settings), Codex (Azure), Copilot CLI (GitHub integration)
- **OSS-focused**: OpenCode, jcode, pi, Kimi
- **IDE/TUI focus**: OpenCode, jcode, pi (terminal-first)
- **Model-centric**: Gemini (Google ecosystem), Kimi (Moonshot)
- **Plugin/extensible**: Claude Code (Function Hooks), pi (extension API)

Now let me structure the report. The user asked for:
1. 生态全景 (3-5 sentences overview)
2. 各工具活跃度对比 (table with Issues, PRs, Release)
3. 共同关注的功能方向
4. 差异化定位分析
5. 社区热度与成熟度
6. 值得关注的趋势信号

Let me draft this carefully in professional Chinese, suitable for technical decision makers and developers.</think>

# AI CLI 工具生态横向对比分析报告
**日期：2026-09-11**

---

## 一、生态全景

今日八款主流 AI CLI 工具的社区数据共同勾勒出一个**"性能回归集中暴露 + MCP/扩展生态进入规范期 + 多 Provider 适配成为标配"** 的成熟阶段图景。Claude Code 与 Codex 仍维持高频发版节奏（前者迭代到 v2.1.268，后者同日 4 个 Rust alpha + 1 个 Python 稳定版），而 OpenCode、pi、jcode 等新兴工具则在 TUI 性能、扩展 API、跨平台稳定性等"硬骨头"领域快速迭代。Kimi CLI 今日仅 2 条 Issue，显著落后于其他社区活跃度。

---

## 二、各工具活跃度对比

| 工具 | Issues（24h） | PRs（24h） | Releases（24h） | 主要交付内容 |
|---|---|---|---|---|
| **Claude Code** | 15+ | 2 | **1**（v2.1.268） | Gateway 定价透出、访问控制告警 |
| **OpenAI Codex** | 20+ | 20+ | **6+**（含 python v0.154.0 稳定版 + 4 个 Rust alpha） | 推理强度 max/ultra、Windows sandbox service、ThreadInstructionsProvider |
| **Gemini CLI** | 30 | 20 | **1**（v0.61.0-nightly） | Windows 沙箱校验、OAuth 持久化、间接 Prompt 注入防御 |
| **GitHub Copilot CLI** | ~15 | 2 | **1**（v1.0.84-4） | 插件管理命令重构、`--json` 输出 |
| **Kimi Code CLI** | **2** | **0** | **0** | 仅 `/login` HTTP 500 Bug 报告 |
| **OpenCode** | 30 | 20 | 0 | TUI O(n²) 双 PR 修复、Anthropic advisor 工具、Shell 进程管理 |
| **jcode** | **42** | 1 | 0 | 维护者一次性修复 10 个 triage issue |
| **pi** | 20+ | 10+ | 0 | O(n²) 重解析修复、3 分钟默认超时、cursor marker 修复 |

**关键观察**：
- **发版节奏**：Codex > Claude Code > Copilot CLI > Gemini CLI；其余工具近期无 release，依靠 PR/nightly 推进。
- **PR/Issue 比**：Codex、OpenCode、pi 处于 **PR 密度 ≈ Issue 密度** 的健康迭代态；Claude Code、Copilot CLI、Kimi CLI 的 PR 投入明显不足。
- **Issue 总量**：jcode 42 > Gemini 30 ≈ OpenCode 30 > Codex ≈ pi > Claude Code > Copilot CLI > Kimi CLI 2。

---

## 三、共同关注的功能方向

下表整理了**至少 3 个工具社区同时关注**的需求方向：

| 方向 | 涉及工具 | 具体诉求 |
|---|---|---|
| **🧠 TUI/终端渲染稳定性** | pi、OpenCode、jcode、Copilot CLI | 光标标记泄漏（pi #9257/#9332）、TUI O(n²) 冻结（OpenCode #48431/#48432）、Ghostty focus loop 写风暴（jcode #1184）、tmux copy/paste 失效（Copilot #3260） |
| **⚡ 长会话性能与资源治理** | OpenCode、Copilot CLI、pi、jcode | Node.js SEA OOM 与 libuv 句柄泄漏（Copilot #4686）、grep OOM（pi #9276）、流式工具调用 O(n²)（pi #9265）、Windows 8–12 GB RSS 失控（jcode #1192） |
| **🔌 MCP 协议合规性** | Copilot CLI、Codex、Kimi CLI | MCP 生命周期顺序违规（Copilot #4809）、Chrome/Edge 浏览器控制 auth path（Codex #43410/#44135）、CentOS MCP 连接失败（Kimi #1388） |
| **🤖 多 Agent / Subagent 调度** | Claude Code、Gemini CLI、jcode | Subagent SendMessage 工具缺失（Claude #92016）、MAX_TURNS 后误报 GOAL 成功（Gemini #22323）、swarm_model 失效（jcode #1175） |
| **🪟 Windows 跨平台一致性** | Claude Code、Codex、jcode、Copilot CLI | KB 更新后 Plan9 挂载失败（Claude #92984）、浏览器控制崩溃（Codex #38878）、TUI 测试死锁（jcode #1201）、ARM64 WSL2 剪贴板（Copilot #3534） |
| **🛡 安全沙箱与权限边界** | Gemini CLI、Claude Code、Codex、jcode | Windows 沙箱 `git --output` 绕过（Gemini #29184）、Cowork 出口允许列表崩溃（Claude #30112/#93507）、OAuth token 重定向泄漏（Codex #44670）、安装器全局快捷键（jcode #678） |
| **📦 Provider 多协议适配** | pi、jcode、Codex、OpenCode | Bedrock reasoning effort 未发送（pi #9331）、OpenCode Go 协议感知路由（jcode #1173）、Azure 模型切换解密失败（Codex #17541）、OpenAI 兼容端点自动发现（OpenCode #6231） |
| **🧾 上下文/记忆作用域化** | Codex、Claude Code、Gemini CLI | 作用域化记忆管理（Codex #18343 → PR #44701）、CLAUDE.md 缓存（Claude #93499）、Auto Memory 脱敏/重试（Gemini #26525/#26522） |

---

## 四、差异化定位分析

| 工具 | 功能侧重 | 目标用户 | 技术路线 |
|---|---|---|---|
| **Claude Code** | **企业级托管 + 安全合规** | 中大型企业、需计费审计的团队 | Gateway/managed settings 体系、定价透出、access_control |
| **OpenAI Codex** | **多端覆盖 + 模型广度** | 跨 IDE/CLI/App 全场景用户、Azure 企业 | Python + Rust 双实现、语音离线构建、ChatGPT 平台深度集成 |
| **Gemini CLI** | **沙箱与权限治理** | 安全敏感型团队、需细致权限边界的企业 | Docker/Podman/runsc/LXC/macOS Seatbelt 多沙箱后端 |
| **GitHub Copilot CLI** | **GitHub 生态深度绑定** | GitHub 用户、CI/CD 工程师 | Plugin/LSP/MCP、SEA 单二进制、`--json` 友好 |
| **Kimi Code CLI** | **轻量 + 国内生态** | 中文场景、对 Moonshot 模型偏好的用户 | OAuth Device Flow、MCP、CLI + VS Code 扩展 |
| **OpenCode** | **本地 LLM 优先 + TUI 极致** | 本地模型爱好者（LM Studio/Ollama）、终端重度用户 | Bun 运行时、WebKit/macOS 桌面、provider 抽象 |
| **jcode** | **Swarm 多 Agent + 可控性** | 复杂任务编排、需要细粒度 Agent 控制的研究者 | `pre_request`/observer-hook、`swarm spawn`、协议感知路由 |
| **pi** | **SDK/扩展生态 + TUI 美学** | 扩展开发者、TUI 工具链深度用户 | 完善的扩展 API（`session_start`、`ui.notify`）、provider 适配矩阵 |

**关键差异化信号**：
- **Claude Code / Codex** 走"企业托管 + 多端"路线，强调计费与权限；
- **Gemini CLI / Copilot CLI** 走"安全沙箱 + 平台绑定"路线；
- **OpenCode / jcode / pi** 走"开源 + 极致 TUI + 扩展生态"路线；
- **Kimi CLI** 当前差异化信号较弱，社区活跃度有待提升。

---

## 五、社区热度与成熟度

按"Issues/PR 总量 × 互动量 × 发版节奏"综合评估：

| 梯队 | 工具 | 评估依据 |
|---|---|---|
| 🥇 **头部（成熟且高活跃）** | **Claude Code、OpenAI Codex** | 频繁发版、Issue/PR 数量大且结构化、官方社区更新机制完善 |
| 🥈 **快速迭代（活跃但波动大）** | **Gemini CLI、OpenCode、pi** | PR 密度高、夜间构建频繁、Issue 反馈直接驱动开发 |
| 🥉 **稳健维护（节奏平缓）** | **GitHub Copilot CLI、jcode** | Issue 多但 PR 少；jcode 依赖维护者个人批量修复（PR #1218） |
| ⚠️ **活跃度待提升** | **Kimi Code CLI** | 单日仅 2 条 Issue、无 PR、无 Release，与其他工具存在显著差距 |

**成熟度信号**：
- **Claude Code** 的 Sep 9 社区更新（#91870）+ 159 条评论显示已进入"产品化运营期"；
- **Codex** 的 `copyberry[bot]` 自动 cherry-pick 流水线说明已有工业化开发流程；
- **OpenCode / pi** 的 PR 标题与 Issue 描述均带详细技术背景（O(n²)、libuv 句柄数、heap profile），反映开发者深度参与；
- **Kimi CLI** 缺乏明确的维护者发声节奏，长期挂账 6 个月的 #1388 暴露 triage 机制待加强。

---

## 六、值得关注的趋势信号

### 🔥 信号 1：性能回归成为跨工具通病
**4/8 个工具**在同一天报告了 OOM、O(n²)、CPU 飙升或内存失控问题（Copilot #4686、pi #9265/#9276、OpenCode #30086/#48434、jcode #1192）。这反映了**长会话场景**（context 接近上限、stream 持续 delta、压缩触发）下的系统级挑战。**参考价值**：评估 AI CLI 时，应将"长会话稳定性"作为关键 SLA 指标，关注 heap/句柄/线程的可观测性。

### 🔥 信号 2：MCP 协议从"集成期"进入"合规期"
**Copilot CLI #4809** 直接按 MCP spec 报错 `server/discover` 协议违规；**Codex #43410/#44135** 反映 browser tool 未同步 auth path；**Kimi #1388** 反映终端兼容性。**参考价值**：MCP 生态正在成熟，自定义 pre-handshake 行为将越来越难被接受；同时，**认证路径同步**与**跨平台握手可靠性**是下一阶段的工程重点。

### 🔥 信号 3：Provider 矩阵化驱动扩展 API 演进
**pi 的 `ThreadInstructionsProvider`、`compat.supportsPromptCacheKey`、`session_start` 追加系统提示** 等 PR 表明：当一个工具支持 5+ 模型 Provider（Anthropic、OpenAI、Gemini、DeepSeek、Bedrock、Mistral、ZAI、Fireworks），单纯的配置开关已不够，**需要 Provider 级别的协议抽象 + 扩展点**。**参考价值**：在为多模型场景设计 CLI 时，应预留 Provider 适配层与扩展 API，而非硬编码到核心路径。

### 🔥 信号 4：多 Agent 体系的"可控性"诉求压过"自主性"
**Claude Code #92016**（subagent SendMessage 缺失）、**Gemini #22323**（MAX_TURNS 误报 GOAL）、**jcode #1175**（swarm_model 失效）均反映：开发者**不再追求 Agent 完全自主**，而是要求**显式的状态可见、模型绑定、超时控制与失败恢复**。**参考价值**：Agent 框架的设计重点应从"能力堆叠"转向"调度可观测性"。

### 🔥 信号 5：Windows 平台从"次要支持"走向"一等公民"
**Claude Code #92984**（KB 回归）、**Codex #43410**（浏览器控制）、**jcode #1192**（8 GB RSS）、**Copilot #3534**（WSL2 ARM64）四连击表明：Windows 已无法被忽视。**参考价值**：开发 AI CLI 时，CI 必须覆盖 Windows（含 WSL2、ARM64、PowerShell 5.1/7），并对 KB 更新与 PowerShell 集成做回归保护。

### 🔥 信号 6：安全沙箱成为 Gemini CLI 投入重心
**单日内 6+ 个 P1 Security PR**（#29184、#29192、#29186、#29188、#29250、#29283、#29214）显示：团队正在系统化收紧 Windows 沙箱、checkpoint 路径穿越、间接 Prompt 注入等攻击面。**参考价值**：在企业部署场景下，**沙箱可观测性（路径检查、参数校验、外部命令注入）** 已成为关键采购指标。

### 🔥 信号 7：本地 LLM 自动发现是用户共识级需求
**OpenCode #6231** 以 232 👍 长期占据仓库热门第一，反映 LM Studio / Ollama / llama.cpp 用户对"手动维护模型清单"的强烈不满。**参考价值**：为本地 LLM 工具设计 UI 时，**models.dev

---

## 各工具详细报告

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills 社区热点

> 数据来源: [anthropics/skills](https://github.com/anthropics/skills)

<think>The user wants me to analyze the Claude Code Skills community data and generate a report. Let me analyze the data carefully.

Looking at the data:

**Pull Requests (showing top 20 by comments, but comments are undefined for all of them, so I'll analyze by content/importance)**:

1. #1298 - fix(skill-creator): run_eval.py 0% recall bug - Windows issues, eval artifact, parallel workers
2. #514 - Add document-typography skill
3. #1734 - Detect orphaned docx comments
4. #1615 - Add scnet-hpc skill
5. #538 - fix(pdf): case-sensitive file references
6. #486 - Add ODT skill
7. #210 - Improve frontend-design skill
8. #83 - Add skill-quality-analyzer and skill-security-analyzer
9. #541 - fix(docx): tracked change w:id collision
10. #539 - fix(skill-creator): YAML validation
11. #1742 - fix(mcp-builder): streamable_http_client
12. #1724 - mcp-builder: update model to claude-sonnet-5
13. #1628 - Add Hivemind: Multi-Agent Orchestration
14. #1627 - Add buffer-api Agent Skill
15. #1607 - Update claude-api skill: mark retired models
16. #1602 - fix: evaluation serialization issues
17. #1595 - docs: add UIZZE partner skills
18. #1367 - self-audit skill
19. #1099 - skill-creator: Windows fix
20. #1050 - skill-creator: Windows fix

**Issues (showing top 15 by comments)**:

1. #492 (43 comments) - Security: Community skills distributed under anthropic/ namespace
2. #228 (16 comments) - Enable org-wide skill sharing in Claude.ai
3. #556 (12 comments) - run_eval.py: 0% trigger rate
4. #62 (10 comments) - Skills disappeared
5. #1329 (9 comments) - compact-memory skill proposal
6. #202 (CLOSED, 8 comments) - skill-creator best practices
7. #412 (CLOSED, 6 comments) - agent-governance skill
8. #189 (6 comments) - duplicate skills in plugins
9. #1487 (4 comments) - claude-api skill injects 156k tokens
10. #1390 (4 comments) - mcp-builder evaluation issues
11. #1385 (4 comments) - Reasoning Quality Gate Pipeline proposal
12. #1175 (CLOSED, 4 comments) - SharePoint security concerns
13. #29 (4 comments) - Usage with bedrock
14. #16 (4 comments) - Expose Skills as MCPs
15. #1362 (3 comments) - web-artifacts-builder issues

The PRs don't have comment counts, but the issues do. The user wants me to identify top skills by "comment/focus" which I'll interpret by looking at PRs that address widely-discussed issues, and Issues by comment count.

Let me identify the key themes:

1. **Security/Trust boundary** - Issue #492 (43 comments) is the highest engagement issue about community skills impersonating official Anthropic skills
2. **Org-wide sharing** - Issue #228 (16 comments) about enterprise skill distribution
3. **Skill-creator tooling bugs** - Multiple PRs (#1298, #1099, #1050, #539) and Issue #556 all about run_eval.py / Windows compatibility
4. **Document/typography skills** - #514 (document-typography), #1734 (orphaned docx comments), #486 (ODT)
5. **Multi-agent orchestration** - #1628 (Hivemind)
6. **Quality/Security analyzer** - #83 (skill-quality-analyzer, skill-security-analyzer)
7. **Self-audit/quality gates** - #1367, #1385
8. **Compact memory** - #1329
9. **Agent governance** - #412 (closed)

For top Skills by community attention, I should focus on:
- Skills that address high-comment issues
- Skills with broad applicability
- Skills still in PR form (high potential)

Let me now structure the report.

**热门 Skills 排行** (按社区关注度):
1. skill-creator 修复 (#1298) - 解决 run_eval.py 0% recall 问题，影响描述优化循环
2. document-typography (#514) - 通用文档排版质量控制
3. ODT skill (#486) - OpenDocument 格式支持
4. Hivemind (#1628) - 多代理编排
5. skill-quality-analyzer / skill-security-analyzer (#83) - 元技能质量分析
6. self-audit (#1367) - AI 输出质量审计
7. scnet-hpc (#1615) - HPC 集群操作
8. buffer-api (#1627) - Buffer GraphQL API

**社区需求趋势** (从 Issues 看):
- 安全/可信边界 (信任命名空间)
- 企业级共享 (org-wide)
- 自我审计/质量门控
- 多代理协作
- 记忆压缩
- 代理治理
- 跨平台兼容 (Windows)

**高潜力待合并**:
- #1298 (skill-creator 关键 bugfix)
- #514 (document-typography)
- #1628 (Hivemind)
- #83 (quality/security analyzer)
- #1367 (self-audit)
- #1615 (scnet-hpc)
- #1627 (buffer-api)

**生态洞察**:
最集中的诉求是"可信、可治理的 Skill 工程化" — 包括命名空间信任、自动化质量评估、企业级共享分发。

Let me write this up in Chinese, professional and concise, with GitHub links.</think>

# Claude Code Skills 社区热点报告
**数据截止：2026-09-11 · 数据源：anthropics/skills**

---

## 一、热门 Skills 排行（按社区关注度）

注：PR 评论数接口未返回数据（均显示 undefined），以下排序综合 **关联 Issue 评论量、PR 涉及面、复用场景** 综合评定。

### 1. skill-creator 关键 bugfix — run_eval.py 0% Recall
- **PR**：[#1298](https://github.com/anthropics/skills/pull/1298)
- **状态**：OPEN ｜ 更新于 2026-09-11
- **功能**：修复 `run_eval.py` 永远返回 0% 召回率的问题、Windows 流读取、并发 worker；同时将 eval artifact 安装为正式 skill。
- **讨论热点**：直接对应 [Issue #556](https://github.com/anthropics/skills/issues/556)（12 评论）——描述优化循环当前在针对噪声做优化，影响所有用 skill-creator 做自动化迭代的开发者。这是**基础设施级** bug。

### 2. document-typography — AI 文档排版质量控制
- **PR**：[#514](https://github.com/anthropics/skills/pull/514)
- **状态**：OPEN
- **功能**：检测并修复孤词换行、widow 段标题、序号错位等排版问题。
- **讨论热点**：触及"AI 生成文档排版普遍糟糕"这一普遍痛点，"Users rarely ask for good typography, but notice when it's bad"是核心叙事。

### 3. Hivemind — 零成本多 Agent 编排
- **PR**：[#1628](https://github.com/anthropics/skills/pull/1628)
- **状态**：OPEN
- **功能**：让 Claude Code 把机械工作委派给 headless opencode worker（免费模型），自身保留为 planner/reviewer/merger。
- **讨论热点**：核心论点是"昂贵模型的 context 是稀缺资源，不是智力"——呼应社区对**成本控制和并行化**的强烈需求。

### 4. skill-quality-analyzer + skill-security-analyzer — 元 Skill 治理
- **PR**：[#83](https://github.com/anthropics/skills/pull/83)
- **状态**：OPEN
- **功能**：从 5 个维度（结构、文档、行为、安全、可靠性）评估 Skill 质量；安全分析器扫描注入/越权风险。
- **讨论热点**：直接呼应 [Issue #492](https://github.com/anthropics/skills/issues/492)（**43 评论，热度榜首**）——社区对 Skill 安全审计与质量基线呼声极高。

### 5. ODT Skill — OpenDocument 全栈支持
- **PR**：[#486](https://github.com/anthropics/skills/pull/486)
- **状态**：OPEN
- **功能**：创建/填充/读取/转换 .odt、.ods，覆盖 LibreOffice 与 ODF 生态。
- **讨论热点**：补齐 docx/pdf 之外的开放文档格式，企业级用户（尤其是欧洲政府/合规场景）长期诉求。

### 6. self-audit v1.3.0 — AI 输出质量门控
- **PR**：[#1367](https://github.com/anthropics/skills/pull/1367)
- **状态**：OPEN
- **功能**：先机械验证产物文件，再按 4 维推理审计（损害严重度排序），交付前自动拦截。
- **讨论热点**：与 [Issue #1385](https://github.com/anthropics/skills/issues/1385)（Reasoning Quality Gate Pipeline）形成完整提案闭环。

### 7. scnet-hpc — HPC 集群操作
- **PR**：[#1615](https://github.com/anthropics/skills/pull/1615)
- **状态**：OPEN
- **功能**：通过 profile 化的 SSH/Slurm 工作流操作 SCNet HPC 集群。
- **讨论热点**：代表社区向**垂直领域专业 Skill**（科研/HPC）扩展的趋势。

### 8. buffer-api — 社交媒体 GraphQL 调度
- **PR**：[#1627](https://github.com/anthropics/skills/pull/1627)
- **状态**：OPEN
- **功能**：跨代理（Claude/Cursor/Codex/n8n）的 Buffer API 集成。
- **讨论热点**：代表第三方 SaaS 集成的 Agent Skill 标准化趋势。

---

## 二、社区需求趋势（基于 Issues）

| 需求方向 | 代表 Issue | 关注度 |
|---|---|---|
| **Skill 信任与命名空间安全** | [#492](https://github.com/anthropics/skills/issues/492) | 🔥 43 评论（榜首） |
| **企业级 Skill 共享** | [#228](https://github.com/anthropics/skills/issues/228) | 16 评论 |
| **Skill 描述优化基础工具** | [#556](https://github.com/anthropics/skills/issues/556) | 12 评论 |
| **Skill 持久化与防丢失** | [#62](https://github.com/anthropics/skills/issues/62) | 10 评论 |
| **符号化压缩记忆** | [#1329](https://github.com/anthropics/skills/issues/1329) | 9 评论 |
| **Agent 治理（policy/threat/trust/audit）** | [#412](https://github.com/anthropics/skills/issues/412) | 6 评论 |
| **插件去重 / 安装一致性** | [#189](https://github.com/anthropics/skills/issues/189) | 6 评论 |
| **Context Window 控制（claude-api 注入 156k tokens）** | [#1487](https://github.com/anthropics/skills/issues/1487) | 4 评论 |
| **Reasoning Quality Gate** | [#1385](https://github.com/anthropics/skills/issues/1385) | 4 评论 |
| **Skill 协议化（MCP 化）** | [#16](https://github.com/anthropics/skills/issues/16) | 4 评论 |

**趋势提炼**：
- **工程化诉求占主导**：超过 60% 的高热度 Issue 关注的是 Skill **生命周期管理**（评估、共享、去重、安全、可靠性），而非单一垂直功能。
- **企业落地三件套**：共享、治理、审计，是 B 端用户最缺的能力。
- **从"做 Skill"到"治 Skill"**：社区重心正从编写新 Skill 转向治理现有 Skill 生态。

---

## 三、高潜力待合并 Skills（PR 活跃 + 影响面广）

| Skill | PR | 核心价值 | 落地面 |
|---|---|---|---|
| skill-creator Windows/eval 全套修复 | [#1298](https://github.com/anthropics/skills/pull/1298) | 解锁非 macOS 用户的描述优化闭环 | 即时（关键 bug） |
| document-typography | [#514](https://github.com/anthropics/skills/pull/514) | 普适文档质量提升 | 1~2 周 |
| skill-quality/security-analyzer | [#83](https://github.com/anthropics/skills/pull/83) | 回应 #492 安全危机 | 1~2 周 |
| self-audit | [#1367](https://github.com/anthropics/skills/pull/1367) | 输出质量门控 | 2~4 周 |
| Hivemind | [#1628](https://github.com/anthropics/skills/pull/1628) | 多代理并行编排范式 | 实验性合并 |
| ODT Skill | [#486](https://github.com/anthropics/skills/pull/486) | 补齐 ODF 生态 | 中期 |
| buffer-api | [#1627](https://github.com/anthropics/skills/pull/1627) | 第三方 API 集成范式 | 中期 |

> **重点关注 #1298**：三个 PR（#1298 / #1099 / #1050）和一个 Issue（#556）共同指向 Windows 下 skill-creator 完全不可用，修复落地后将打开大批非 macOS 开发者。

---

## 四、Skills 生态洞察（一句话总结）

> **当前社区最集中的诉求是"可信、可治理的 Skill 工程化"** —— 围绕 namespace 信任（#492）、描述评估基础设施（#556）、企业共享（#228）、质量/安全分析器（#83, #1367, #1385）形成的需求网络表明，Claude Code Skills 已从"创意扩展"阶段进入"生产基础设施"阶段，**SkillOps**（Skill 的 CI/CD、评估、签名、分发、审计）成为下一阶段的核心命题。

---

<think>Let me analyze the GitHub data provided for the Claude Code community dynamic report for 2026-09-11.

Key observations:
1. **Release**: v2.1.268 - Added pricing gateway configuration for managed settings
2. **Top Issues** (by comments):
   - #91870: Function Hooks enhancement (159 comments, 92 👍) - Major upcoming feature
   - #92984: Cowork Windows Plan9 bug after KB5124008 (84 comments, 42 👍) - Critical regression
   - #30112: Cowork network egress allowlist bug (59 comments, 54 👍)
   - #65961: Claude verbose code comments by default (33 comments, 217 👍) - High approval
   - #27561: Modern text input feature request (CLOSED, 26 comments, 47 👍)
   - #92016: Claude Desktop auto-denies CLI-native SendMessage (22 comments)
   - #92249: ListAgents/SendMessage missing from tool registry (9 comments)
   - #34690: Network egress setting not reflected (7 comments)
   - #90708: Desktop app context-usage indicator (6 comments)
   - #91745: Dispatch second session issue (CLOSED, 6 comments)
   - #93221: Connected folders never mount (4 comments)
   - #91884: Desktop scheduled tasks model selection (4 comments)
   - #92276: Remote Control not auto-enabled (4 comments)
   - #93525: Cowork egress allowlist collapse (2 comments)
   - #93507: Cowork macOS network route regression (2 comments)

3. **PRs**: Only 2 PRs in last 24 hours, both by @poteat about the /diff panel

4. **Trends**:
   - Cowork (Windows/macOS) networking regressions - Multiple related issues
   - Function Hooks feature coming
   - Desktop app stability issues
   - LSP plugins issues
   - TUI/UI improvements

Let me write a structured Chinese report.

Note: The user asked for "10 most worth-watching issues" but only 2 PRs were active in the past 24 hours. I'll need to be honest about the limited PR data while still providing 10 items if possible. Let me reconsider - the prompt says "挑选 10 个重要的 PR" - but only 2 PRs exist. I should note this and present what's available.

Let me craft the report now.</think>

# Claude Code 社区动态日报
**日期：2026-09-11**

---

## 1. 今日速览

今日社区焦点集中在两大方向：**Cowork 沙箱网络功能出现集中性回归**（macOS/Windows 多端受影响，多个 Issues 在 24 小时内接连报告），以及 **Function Hooks 插件机制即将落地**——官方在 #91870 发布 Sep 9 社区更新，确认将在数周内正式发布。同时 v2.1.268 版本带来了 Gateway 定价透出与访问控制告警两项重要功能。

---

## 2. 版本发布

### v2.1.268（今日发布）

- **Gateway 定价透出**：在 `gateway.yaml` 中配置 `pricing` 后，已登录的 Claude Code 客户端可通过 managed settings 获得一致的费率，使 `/cost` 命令与遥测数据与计费计量保持一致。
- **访问控制启动告警**：当网关的 `access_control.allow_cidrs` 为空时启动时给出告警提示，帮助运维人员更早发现潜在的安全配置缺失。

---

## 3. 社区热点 Issues（精选 10 条）

| # | Issue | 评论 | 👍 | 为什么值得关注 |
|---|-------|------|-----|---------------|
| 1 | [#91870](https://github.com/anthropics/claude-code/issues/91870) Function Hooks — 让插件能力提升 10 倍 | 159 | 92 | **官方社区更新**：Anthropic 团队亲自下场，承诺数周内发布，是当前最受关注的插件生态扩展功能 |
| 2 | [#92984](https://github.com/anthropics/claude-code/issues/92984) Windows Cowork Plan9 挂载失败（KB5124008 后） | 84 | 42 | **高优先级回归**：Windows 更新后导致所有 Plan9 共享失效，卸载 KB 即修复，影响企业级部署 |
| 3 | [#30112](https://github.com/anthropics/claude-code/issues/30112) Cowork 网络出口允许列表失效 | 59 | 54 | 自 3 月起长期未解决，今日再被更新；自定义域名持续返回 403，挫伤大量开发者的扩展能力 |
| 4 | [#65961](https://github.com/anthropics/claude-code/issues/65961) 模型默认生成冗长注释 | 33 | 217 | 👍 数远超评论数，反映**广泛共鸣**：社区普遍希望 Claude 默认更简洁、尊重用户的指令 |
| 5 | [#92016](https://github.com/anthropics/claude-code/issues/92016) Desktop 自动拒绝 CLI 原生 SendMessage | 22 | 11 | 阻断子 agent 恢复流程；macOS Desktop 1.46388.1 引入的回归，影响多 agent 协作工作流 |
| 6 | [#92249](https://github.com/anthropics/claude-code/issues/92249) Desktop 定时任务中 ListAgents/SendMessage 缺失 | 9 | 0 | 已 bisect 到 1.44121.4 → 1.46388.1 回归版本，工具注册表丢失影响定时任务与远程控制会话 |
| 7 | [#34690](https://github.com/anthropics/claude-code/issues/34690) 会话代理 JWT 不反映"全部域名"出口设置 | 7 | 17 | 网关/代理层与 UI 设置长期不一致，安全边界控制存疑 |
| 8 | [#90708](https://github.com/anthropics/claude-code/issues/90708) Desktop 底部希望恢复上下文用量指示 | 6 | 7 | 长会话场景下，context 占用比 5 小时限额更实用，UI 信息层级值得优化 |
| 9 | [#93221](https://github.com/anthropics/claude-code/issues/93221) Cowork VM 中连接文件夹永不挂载 | 4 | 0 | 与 #92984 同属 Cowork 沙箱挂载链路缺陷，主机端显示成功而 guest 端实际无共享 |
| 10 | [#93507](https://github.com/anthropics/claude-code/issues/93507) macOS Cowork 沙箱完全失去网络路由（9 月 10 日起回归） | 2 | 0 | **今日新报告**：与 #30112、#93525 形成"出口限制崩溃"集群，建议社区合并跟进 |

> **趋势提示**：今日新增的 #93507、#93524、#93525 等 Issue 显示，Cowork 的网络/出口逻辑在近期版本中同时出现多次回归，需引起高度关注。

---

## 4. 重要 PR 进展

> ⚠️ **说明**：过去 24 小时内仅有 2 条 PR 更新，以下全部列出。

| # | PR | 状态 | 内容 |
|---|----|------|------|
| 1 | [#93452](https://github.com/anthropics/claude-code/pull/93452) mods/diff: 匹配内置 /diff 面板 | OPEN | 由 @poteat 提交，让 `/diff` mod 面板与内置面板保持一致——使用引擎 code element 渲染 hunks、统一关闭 ✕、间距与空态位置、窄终端换行处理，并限制同时只进行一次仓库探测 |
| 2 | [#93244](https://github.com/anthropics/claude-code/pull/93244) mods: API 重命名、遥测修复、diff 后端抽象 | CLOSED | 跟随插件 API 命名规则调整（`isFocused`、`tool`），收紧遥测行数据流（每行单独上报、第三方 provider 不发送），并为 diff mod 引入"后端"抽象层，git 作为内建后端 |

**注**：当前 PR 数量稀少，建议关注 #91870 Function Hooks 设计文档后续可能带来的官方 PR 集群。

---

## 5. 功能需求趋势

从近 24 小时 Issue 标签与主题聚合，社区需求方向可归为以下几类：

| 趋势方向 | 代表 Issue | 热度 |
|---------|-----------|------|
| **插件 / Hook 扩展能力** | #91870、#93474、#93531 | ⭐⭐⭐⭐⭐ |
| **Cowork 沙箱稳定性（网络/挂载）** | #92984、#93221、#93507、#93525、#93494 | ⭐⭐⭐⭐⭐ |
| **Desktop 体验与跨会话协同** | #92016、#92249、#91884、#92276、#93528 | ⭐⭐⭐⭐ |
| **TUI / 终端交互改进** | #90609、#93530、#27561（已关闭） | ⭐⭐⭐ |
| **成本与缓存优化** | #93499（缓存 CLAUDE.md） | ⭐⭐⭐ |
| **模型行为可调控性** | #65961、#93524 | ⭐⭐⭐ |

---

## 6. 开发者关注点

综合 Issue 反馈与主题分布，开发者当前最集中的痛点如下：

1. **🔴 Cowork 网络/出口层严重不稳**：今日至少 4 条相关 Issue 集中在 Windows KB 更新后、macOS 9 月 10 日 23:15 UTC 起的两轮回归，自定义域名、Plan9 挂载、JWT 代理设置三层都出现问题。这对依赖 Cowork 进行跨云协作的企业用户是阻塞性问题。

2. **🟠 Desktop ↔ CLI 工具注册不一致**：#92016、#92249 揭示了 Desktop 在更新中破坏 CLI 原生工具注册（SendMessage、ListAgents），影响定时任务、远程控制与子 agent 恢复——这是 Desktop 1.44121 → 1.46388 之间的多个回归。

3. **🟡 Hooks/Plugins 体系呼唤标准化**：#91870 获得 159 条评论与 92 个 👍，是当下最受期待的扩展能力。社区对"插件能力放大 10 倍"的诉求强烈，配套的官方 LSP 插件（#93474）甚至缺失 `lspServers` 配置而无法加载。

4. **🟡 模型输出风格与安全过滤边界**：#65961（👍217，远超评论数）和 #93524 显示开发者既希望模型更克制地输出冗长注释，又对误报式安全过滤（如 SIGBREAK 被识别为 cyber）感到困扰。

5. **🟢 提示工程与提示缓存成本**：#93499 提出跨会话缓存 CLAUDE.md/rules 的设想，#65961 关注默认行为，这些都指向"减少噪声与降低 token 成本"的开发者核心诉求。

---

**日报小结**：今日是 Claude Code 社区的"插件期待日 + Cowork 故障日"——Function Hooks 进入官方交付倒计时，而 Cowork 网络层的连续回归需要团队在下一个补丁版本中优先处理。建议密切关注 v2.1.269 是否针对 Cowork 出口/挂载链路发布修复。

📌 *数据来源：[github.com/anthropics/claude-code](https://github.com/anthropics/claude-code)*

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

<think>Let me organize the GitHub data for OpenAI Codex community daily report dated 2026-09-11.

Key observations:
1. Multiple alpha releases for Rust v0.155.0 series and a stable Python SDK v0.154.0
2. Most issues are Windows-related bugs (browser control, auth, PowerShell crashes)
3. Many "Selected model is at capacity" issues with GPT-5/GPT-6
4. PRs are all from copyberry[bot] and all CLOSED, indicating automated cherry-picks
5. Key feature trends: scoped memory management, transparent background controls, TUI customization

Let me craft the report.</think>

# OpenAI Codex 社区动态日报
**日期：2026-09-11**

---

## 📌 今日速览

今日 Codex 仓库进入密集发布节奏：Rust 端连发 `0.155.0-alpha.1/2/2.3/3` 四个 alpha 预发布版本，Python SDK 同步推出稳定版 `0.154.0`，并新增 `max` / `ultra` 两档推理强度（reasoning-effort）配置。社区反馈高度集中于两大痛点——**GPT-5/GPT-6 持续报 "Selected model is at capacity"** 与 **Windows 桌面端浏览器控制（Chrome/Edge）大面积失效**，二者均与近期的服务端扩容和 Windows 浏览器插件认证路径变更相关，建议短期内切换模型或回退 CLI。

---

## 🚀 版本发布

| 版本 | 类型 | 重点变化 |
|---|---|---|
| **python-v0.154.0** | 稳定版 | Python SDK 升级；同步发布 `openai-codex-cli-bin==0.154.0` 运行时；新增 `max` / `ultra` reasoning-effort 值（[PR #39662](https://github.com/openai/codex/pull/39662)）；同步 API 暴露 `ExternalMessage` |
| **rust-v0.155.0-alpha.3** | 预发布 | 0.155.0 系列最新 alpha |
| **rust-v0.155.0-alpha.2.3** | 预发布 | alpha.2 补丁 |
| **rust-v0.155.0-alpha.2** | 预发布 | alpha 主线 |
| **rust-v0.155.0-alpha.1** | 预发布 | alpha 首发 |
| **voice-cygwin-108b38cf67cbb731** | CI 构建产物 | Windows 语音功能的离线 Cygwin 构建源/二进制；**不会**进入 Codex 用户安装包 |

> 提示：`pip install --upgrade openai-codex==0.154.0` 即可获取 Python 端最新稳定版（Python ≥ 3.10）。

---

## 🔥 社区热点 Issues（Top 10）

1. **[#43375](https://github.com/openai/codex/issues/43375) – GPT-5 / GPT-6 多模型持续返回 "at capacity"**  
   21 条评论，11 👍。影响范围最广，从 9/7 至今仍未收敛，跨多个 GPT-5 与 GPT-6 模型复现。**社区共识是后端容量问题，而非配额限制**，建议短期内切换至非热门模型或使用自托管替代。

2. **[#34499](https://github.com/openai/codex/issues/34499) – Windows 桌面 App 无法在 ChatGPT Project 内创建本地 Work Chat**  
   26 条评论，16 👍，为今日评论最高。Plus 用户在 Windows 端 26.715.61943 版本上复现，是影响日常使用的关键功能缺失。

3. **[#43410](https://github.com/openai/codex/issues/43410) – Windows + 浏览器控制：API Key 认证下浏览器扩展报错 `unsupported Codex auth method: apikey`**  
   16 条评论，10 👍。Edge 插件与 native host 握手成功，但首次操作即崩，**说明 auth 路径变更未覆盖 Browser 工具**。

4. **[#33968](https://github.com/openai/codex/issues/33968) – VS Code 侧栏在 Linux/Wayland 间歇卡死/空白**  
   14 条评论。Wayland 渲染路径在 Linux x64 stable 通道（`openai.chatgpt` 26.715.31925）持续触发，影响 Linux 开发者主战场。

5. **[#18343](https://github.com/openai/codex/issues/18343) – 作用域化记忆管理（global / project / hybrid / per-thread）**  
   13 条评论，11 👍。**社区呼声最高的增强请求**。当前 `CODEX_HOME` 下的全局存储粒度过粗，开发者期望引入显式作用域控制。

6. **[#38878](https://github.com/openai/codex/issues/38878) – Windows 10 上 Codex App 触发 pwsh.exe "Unknown Hard Error"**  
   12 条评论。App 26.813.12317 致命错误，但 CLI 正常工作——**典型 App 沙箱与 PowerShell 集成回归**。

7. **[#44135](https://github.com/openai/codex/issues/44135) – Windows Chrome 控制失败 `nodeRepl.fetch request failed`**  
   12 条评论，3 👍。与 #43410 同源；Edge 同样复现，扩展和 native-host 自检通过但首次操作失败。

8. **[#42027](https://github.com/openai/codex/issues/42027) – Side chat fork 后出现 duplicate rollout ordinal，破坏 thread history 投影**  
   12 条评论，2 👍。Plus 用户在 26.825.6671.0 上遇到，**中断后恢复的 turn 会让序列号错位**，与 #43640（macOS 26.901.51231 截断）属同类问题。

9. **[#17541](https://github.com/openai/codex/issues/17541) – Azure 后端中途切换模型报 "encrypted content could not be decrypted"**  
   10 条评论，8 👍。已存在 5 个月仍未解决，**影响企业级 Azure 用户的多模型工作流**，问题大概率出在加密会话密钥与模型路由的耦合。

10. **[#41338](https://github.com/openai/codex/issues/41338) – 内联图像仅消耗 ~230 token 却占 4.2 MB，token 上下文管理看不见"毒丸"载荷**  
    9 条评论。开发者提供了与 #18629 假设相悖的实测数据，**指出现有自动压缩策略存在盲区**，可能让线程永久卡死。

> 其他高频 Windows 浏览器/认证问题：#44687（macOS route prefetch `r is not a function`）、#44565（Windows 10 at-capacity 配 WS 10054）、#44364（Chrome 控制需要 TUN 旁路）、#44064（Windows Personal Plus 误判为"联系管理员"）。

---

## 🛠 重要 PR 进展（Top 10）

> 注：今日 20 条热 PR 均由 `copyberry[bot]` 自动提交并已合并（CLOSED），属内部 cherry-pick 流水线。

1. **[#44714](https://github.com/openai/codex/pull/44714) – Linux 语音运行时打包与音频可靠性**  
   内置 ALSA 插件、扩大 PipeWire 缓冲；语音启动失败现在给出**可操作的诊断信息**而非裸原生错误。

2. **[#44711](https://github.com/openai/codex/pull/44711) – 会话取消/删除后返回 Command Center**  
   修复 TUI 在删除会话、取消归档恢复、跨 app `Esc` 退出时的 UX 硬退；本地守护进程与远端连接均统一回流到 Command Center。

3. **[#44701](https://github.com/openai/codex/pull/44701) – 新增 thread-scoped instructions provider**  
   `StartThreadOptions` 暴露 `ThreadInstructionsProvider`，指令组合顺序：全局 → **线程** → 仓库，空内容仅清除线程级指令。

4. **[#44694](https://github.com/openai/codex/pull/44694) – Windows 发布产物纳入 sandbox service**  
   把 `codex-windows-sandbox-service` 同时打进 x86_64 与 ARM64，DotSlash 配置同步压缩产物解析。

5. **[#44693](https://github.com/openai/codex/pull/44693) – 托管 new-thread 默认不再覆盖 profile 设置**  
   修复 model / reasoning effort / service tier 被 managed defaults 悄悄改写的回归。

6. **[#44691](https://github.com/openai/codex/pull/44691) – 未识别配置项发出警告**  
   配置拼写错误与已废弃字段不再"静默失败"，effective config 与 requirements 层都会输出告警。

7. **[#44675](https://github.com/openai/codex/pull/44675) – 在模型请求边界刷新全局指令**  
   修复 root 线程在会话期间编辑全局 `AGENTS.md` 不生效的问题，每次取 model context 时重新加载。

8. **[#44671](https://github.com/openai/codex/pull/44671) – 语音会话抗 mute / 音频积压**  
   丢弃陈旧/超量队列样本，muted 会话仍持续发送保持活跃音频，避免对端超时断开。

9. **[#44670](https://github.com/openai/codex/pull/44670) – 登录跳转限制为已知平台 origin**  
   修复登录成功页使用 query string `platform_url` 拼接组织重定向时携带 ID token 的安全风险，强制精确匹配白名单。

10. **[#44661](https://github.com/openai/codex/pull/44661) – 工具调用回执/结果就绪/code-mode 派发追踪**  
    新增独立 trace 里程碑，将"结果先于采样循环就绪"与"code-mode cell 跨 turn 存活"的时序显式化，便于排障。

---

## 📈 功能需求趋势

从近 24h 活跃 Issue 与 PR 提炼，社区最强烈的诉求集中在以下方向：

- **🪟 Windows 桌面端稳定性** —— Browser 控制（Chrome/Edge）、PowerShell 集成、API Key 认证路径是绝对热点，4 个高优 Issue 直指同一类回归。
- **🧠 模型容量与服务稳定性** —— GPT-5 / GPT-6 "at capacity" 横跨 CLI、App、IDE 三个变体，且 #43201 报告 GPT-6 Astra 配额消耗过快，说明运营侧扩容压力已显式外溢。
- **📦 作用域化记忆与指令系统** —— #18343 长期高赞，今日 PR #44701 引入 `ThreadInstructionsProvider` 是首个落地步骤，预示后续会出现更细粒度的 memory scope API。
- **🎨 TUI / 视觉细节** —— #44561 请求关闭默认 Astra 星空动画、PR #44666 接入系统级 reduce-motion，体现社区对"开发者审美"与"无障碍"的重视。
- **🖼 多模态工具完整度** —— #40572 要求订阅版 image 工具开放 `transparent` / `png` 参数，与 GPT Image 2 能力对齐。
- **🔒 安全与配置可靠性** —— PR #44670 修复 token 通过重定向泄漏，PR #44691 让拼错的配置项暴露出来，反映平台正向"安全 + 可观测"双线投入。

---

## 💬 开发者关注点

- **服务端容量焦虑是头号痛点**：#43375、#43663、#44565、#43201 串联起一条主线，开发者希望官方明确这是配额还是 `server_overloaded`，并提供降级建议。
- **Windows 浏览器控制是回归重灾区**：API Key + Chrome/Edge + App + 桌面扩展四元组合下，多份报告均指向同一根因——auth path 未同步更新到 browser 工具栈。
- **CLI 与 App 用量/计费不一致**：#44459 反映 Pro 订阅下 App 用量"天量"远超 CLI，开发者希望补齐按 surface 的用量拆解与限速。
- **会话/线程元数据可靠性**：duplicate rollout ordinal、压缩后 stale prompt 复活（#27731）、`/fork` 改变 `prompt_cache_key`（#44716）等问题说明**会话存储层仍存在一致性边界**。
- **模型行为可信度下滑**：#43329、#43614 指出 GPT-6 Astra / 5.6 Sol 出现"口述而不执行"、"提前收尾"、"CoT 泄漏"，对代理场景可靠性影响显著。
- **企业/自托管路径**：#17541（Azure 模型切换解密失败）至今未根治，是企业用户最迫切的痛点之一。

---

*日报基于 2026-09-11 过去 24 小时 GitHub 数据生成。数据来源：[openai/codex](https://github.com/openai/codex)*

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

<think>The user wants me to generate a daily community report for Gemini CLI based on the GitHub data provided. Let me analyze the data carefully and produce a comprehensive Chinese-language report.

Let me look at what's in the data:

1. **Releases**: One new nightly release v0.61.0-nightly.20260911.ged2ac40df
2. **Issues**: 50 issues updated in the last 24 hours, with 30 shown (sorted by comments)
3. **Pull Requests**: 29 PRs updated in the last 24 hours, with 20 shown (sorted by comments - though all show undefined comments)

Let me analyze the issues by priority:
- P1 issues: #22323, #21409, #25166, #21983, #22186, #21763
- P2 issues: many (most)
- P3 issues: several

Key themes I can identify:
1. **Subagent issues** - Multiple bugs related to subagents (#22323, #21968, #21763)
2. **Security issues** - Auto Memory, sandbox, OAuth (#26525, #26522, #26523, #26516, #29184, #29186, #29192, #29282)
3. **Browser Agent** - #21983, #22267, #22232
4. **AST/Codebase tools** - #22745, #22746, #19561
5. **Shell execution** - #25166
6. **Memory system** - #26525, #26522, #26523, #26516

Top Issues by comments:
1. #22323 (13 comments, P1) - Subagent recovery after MAX_TURNS
2. #19873 (9 comments, P2) - Zero-Dependency OS Sandboxing
3. #21409 (8 comments, P1) - Generalist agent hangs
4. #22745 (7 comments, P2) - AST-aware file reads
5. #21968 (6 comments, P2) - Skills and sub-agents usage
6. #26525 (5 comments, P2) - Auto Memory redaction
7. #26522 (4 comments, P2) - Auto Memory retry
8. #25166 (4 comments, P1) - Shell command stuck
9. #22232 (4 comments, P3) - Browser agent resilience
10. #21983 (4 comments, P1) - browser subagent fails in wayland
11. #21000 (4 comments, P3) - Native file tools for task tracker
12. #20079 (4 comments, P2) - Symlink issue
13. #26523 (3 comments, P2) - Auto Memory inbox
14. #24246 (3 comments, P2) - 400 error with >128 tools
15. #23571 (3 comments, P2) - tmp scripts
16. #22672 (3 comments, P2) - Destructive behavior
17. #22267 (3 comments, P2) - Browser agent ignores settings
18. #22186 (3 comments, P1) - get-shit-done output hook crash
19. #20195 (3 comments, P3) - Local Subagent Sprint 1
20. #18836 (3 comments, P3) - WriteToDo replacement
21. #26516 (2 comments) - Memory system bugs
22. #22746 (2 comments) - AST aware CLI tools
23. #22598 (2 comments) - Subagent trajectory
24. #22466 (2 comments) - \n escape behavior
25. #22465 (2 comments) - vite app stuck
26. #21924 (2 comments) - terminal resize
27. #21763 (2 comments, P1) - Bugreport context
28. #21432 (2 comments) - Agent self-awareness
29. #21335 (2 comments) - /compress persistence
30. #19561 (2 comments) - Tactful Extraction

For PRs, the top ones:
1. #29184 - git args Windows sandbox validation
2. #29110 - FileSystemService for read_file
3. #29285 - version bump
4. #29180 - tildeifying paths
5. #29195 - checkpoint history degradation
6. #29192 - legacy raw tag path
7. #29190 - VSCode activate() Disposables
8. #29188 - read-many-files include patterns
9. #29186 - exitCode null check
10. #29187 - safeLiteralReplace
11. #29181 - file-only logger
12. #28384 - version bump
13. #29283 - sandbox filesystem isolation
14. #29282 - OAuth credentials persist
15. #29214 - sandbox filesystem boundaries
16. #29116 - NTFS 8.3 short name
17. #29250 - prevent indirect prompt injection
18. #29134 - protect current session
19. #29280 - vitest bump

Now let me compose the daily report in Chinese.

Looking at the data, I notice all PRs have undefined comments which is unusual. This suggests most PRs haven't received active discussion recently. The ones with highest priority (P1 security) are most noteworthy.

Let me organize the report now.

I should make this professional and well-structured. The report should follow the structure requested:
1. Today's Overview
2. Version Release
3. Hot Community Issues (top 10)
4. Important PR Progress (top 10)
5. Feature Demand Trends
6. Developer Concerns

Let me write it now in clear, technical Chinese suitable for developers.</think>

# Gemini CLI 社区动态日报
**日期：2026-09-11**

---

## 📌 今日速览

Gemini CLI 今日发布了 0.61.0 夜间版本（`v0.61.0-nightly.20260911.ged2ac40df`），社区焦点集中在 **Subagent 行为稳定性** 与 **Auto Memory / 安全沙箱** 两条主线：一方面，P1 级 Bug 涉及 Subagent 在 `MAX_TURNS` 后被误判为 `GOAL` 成功、Generalist Agent 卡死等阻塞性问题；另一方面，针对 Windows 沙箱校验、OAuth 凭据持久化、间接 Prompt 注入等的安全 PR 集中涌入修复队列。多个 P1 安全 PR 显示团队正在系统性收紧沙箱与权限边界。

---

## 🚀 版本发布

- **v0.61.0-nightly.20260911.ged2ac40df** 已发布（[Compare](https://github.com/google-gemini/gemini-cli/compare/v0.61.0-nightly.20260910.ged2ac40df...v0.61.0-nightly.20260911.ged2ac40df)）
  - 由自动化机器人提交的常规夜间版本号 bump（[PR #29285](https://github.com/google-gemini/gemini-cli/pull/29285)），变更详情见 Compare 链接。

---

## 🔥 社区热点 Issues（Top 10）

| # | Issue | 优先级 | 评论数 | 概要 |
|---|-------|--------|--------|------|
| [#22323](https://github.com/google-gemini/gemini-cli/issues/22323) | Subagent 在 MAX_TURNS 后被报告为 GOAL 成功 | **P1** | 13 | `codebase_investigator` 子代理在触达最大轮次限制后，仍返回 `status: "success"` 和 `Termination Reason: "GOAL"`，掩盖了中断事实。维护者已经标记 `need-retesting`，是当前最高热度的稳定性问题。 |
| [#19873](https://github.com/google-gemini/gemini-cli/issues/19873) | 利用零依赖 OS 沙箱 + 后期执行意图路由 | **P2** | 9 | 提议借助 Gemini 3 模型对原生 Bash 的亲和力，配合零依赖 OS 沙箱与后置意图路由，在不牺牲安全/UX 的前提下释放模型 Bash 工具调用能力。规模被评估为 `effort/large`。 |
| [#21409](https://github.com/google-gemini/gemini-cli/issues/21409) | Generalist Agent 卡死 | **P1** | 8 | `gemini-cli` 一旦委派给 generalist agent 就永久挂起，连最简单的建文件夹任务都会卡住；显式禁止委派子代理即可绕过。👍 数 8，是 P1 中获赞最高的 Bug。 |
| [#22745](https://github.com/google-gemini/gemini-cli/issues/22745) | AST 感知文件读取/搜索/映射的影响评估 | **P2** | 7 | Epic 级 Issue，评估 AST 感知工具（精确方法级读取、减少噪声 token、辅助 codebase_investigator）的价值，是当前 "代码理解更聪明" 路线的核心议题。 |
| [#21968](https://github.com/google-gemini/gemini-cli/issues/21968) | Gemini 几乎不自发调用 skills 与 sub-agents | **P2** | 6 | 用户实测反馈：除非显式指令，否则 Gemini 几乎不会主动调用自定义 skills 与 sub-agents，引发对默认调度策略的讨论。 |
| [#26525](https://github.com/google-gemini/gemini-cli/issues/26525) | Auto Memory 增加确定性脱敏并减少日志 | **P2** | 5 | Auto Memory 会将本地会话内容发给后台抽取模型，且提示词要求脱敏发生在内容已经进入上下文之后，存在凭据泄漏风险。 |
| [#26522](https://github.com/google-gemini/gemini-cli/issues/26522) | Auto Memory 无限重试低信号会话 | **P2** | 4 | 抽取 Agent 决定不读某次低信号会话时，该会话会在索引中循环被反复推荐，导致 Auto Memory 反复空转。 |
| [#25166](https://github.com/google-gemini/gemini-cli/issues/25166) | Shell 命令执行后卡在 "Waiting input" | **P1** | 4 | 简单的 shell 命令执行完毕后，界面仍显示 Awaiting user input，必须手动取消。影响所有日常 CLI 调用。 |
| [#22232](https://github.com/google-gemini/gemini-cli/issues/22232) | browser_agent 会话接管与锁恢复 | **P3** | 4 | `BrowserManager` 在持久模式下遇到已锁定 profile 时 "fail-fast"，建议加入自动接管和锁恢复策略。 |
| [#21983](https://github.com/google-gemini/gemini-cli/issues/21983) | browser 子代理在 Wayland 下失败 | **P1** | 4 | Wayland 环境下 browser subagent 异常终止并返回 `Termination Reason: GOAL`，未真正完成。 |

> **社区反应观察**：P1 议题集中在 "Subagent / Generalist 调度逻辑 + Shell / Browser 卡死"，维护者对 [#22323](https://github.com/google-gemini/gemini-cli/issues/22323) 和 [#21409](https://github.com/google-gemini/gemini-cli/issues/21409) 已加 `need-retesting` 标签，预计进入下一 nightly 修复。

---

## 🛠️ 重要 PR 进展（Top 10）

| # | PR | 类型 | 说明 |
|---|----|------|------|
| [#29184](https://github.com/google-gemini/gemini-cli/pull/29184) | 🔒 **P1 Security** | 修复 | 在 Windows 沙箱里校验 `git status/log/diff/show/branch` 参数，阻止 `git diff --output=<path>` 等静默写入类参数绕过 read-only 限制。 |
| [#29110](https://github.com/google-gemini/gemini-cli/pull/29110) | ⚙️ Agent Core | 修复 | `read_file` 改走 `FileSystemService`，与 `write_file`/`replace` 对齐；这样 ACP 客户端可注入自定义 `fs:readTextFile`。已 CLOSED。 |
| [#29285](https://github.com/google-gemini/gemini-cli/pull/29285) | 🚀 Release | chore | 自动化版本 bump 到 `0.61.0-nightly.20260911.ged2ac40df`。 |
| [#29192](https://github.com/google-gemini/gemini-cli/pull/29192) | 🔒 **P1 Security** | 修复 | `/chat delete <tag>` 在 legacy raw tag 路径上可通过 `../` 跳出 checkpoints 目录，PR 修复了 `_getCheckpointPath` 与 `deleteCheckpoint` 的未校验拼接。 |
| [#29188](https://github.com/google-gemini/gemini-cli/pull/29188) | 🛡 **P1 Core** | 修复 | `read-many-files` 之前用 `String.prototype.includes` 判断"是否显式请求"，导致目录名片段命中二进制后缀的误匹配，改用文件 stem/扩展精确匹配。 |
| [#29186](https://github.com/google-gemini/gemini-cli/pull/29186) | 🔒 **P1 Security** | 修复 | 修复 [#29043](https://github.com/google-gemini/gemini-cli/issues/29043)：Shell 沙箱拒绝启发式里 `exitCode` 的 `null` 检查错位，补充正确分支。 |
| [#29282](https://github.com/google-gemini/gemini-cli/pull/29282) | 🔐 P2 Auth | 修复 | 登录成功后立即持久化 OAuth 凭据，避免再次进入 CLI 时再次走 Google 登录流程。 |
| [#29250](https://github.com/google-gemini/gemini-cli/pull/29250) | 🛡 Security (XL) | 修复 | 在受限 workspace 模式下重写 `shell`/`edit`/`write_file` 的内建执行路径，校验构建配置文件与外部命令参数，防御间接 Prompt 注入。规模 XL。 |
| [#29283](https://github.com/google-gemini/gemini-cli/pull/29283) / [#29214](https://github.com/google-gemini/gemini-cli/pull/29214) | 🏗 Sandbox (L/XL) | 修复 | 加固 Docker/Podman/runsc/LXC/macOS Seatbelt 沙箱文件系统边界：宿主目录改为只读挂载、配置做敏感字段脱敏、用 realpath 做路径检查。 |
| [#29190](https://github.com/google-gemini/gemini-cli/pull/29190) | 🧩 VSCode Companion | 修复 | 修正 `activate()` 中逗号操作符 Bug，避免 `gemini.diff.accept` 与 `onDidChangeWorkspaceFolders` 的 Disposables 被丢弃导致的 "command already registered"。 |

---

## 📈 功能需求趋势

从今日活跃的 30 条 Issue 中可以提炼出以下 5 大方向：

1. **Subagent / Agent 调度体系完善**（热度最高）
   - 关键词：subagent、generalist agent、local subagent、subagent trajectory。
   - 代表：#22323、#21409、#21968、#21763、#20195、#22598。社区期待子代理既"可用"也"可见"，同时希望 `/chat share` 能携带子代理轨迹。

2. **AST-aware 代码理解**（新兴方向）
   - 代表：#22745（Epic）、#22746、#19561（Tactful Extraction）。目标是用 AST 工具替代"消防水管式"读取，压缩每轮 ~36.6k token 的上下文基线。

3. **Auto Memory 与会话上下文持久化**
   - 代表：#26525、#26522、#26523、#26516。围绕"低信号会话无限重试""凭据泄漏""inbox patch 静默丢弃"等质量问题集中发力，呈现明确收敛节奏。

5. **Browser Agent 鲁棒性**
   - 代表：#21983、#22232、#22267。Wayland 兼容、settings.json 优先级、persistent profile 锁恢复是三个最具体痛点。

6. **安全沙箱与跨平台路径处理**
   - 安全 PR 大量涌入 Windows NTFS 8.3 短名、间接 Prompt 注入、Windows 沙箱 `git --output` 绕过、checkpoint 路径穿越等方向，团队正在系统化收紧安全边界。

---

## 💬 开发者关注点

**高频痛点：**
- **Agent "看似成功实则失败"**：Subagent 在达到 `MAX_TURNS` 后仍报 `GOAL` 成功，开发者无法可靠判断任务是否真正完成，需要在结果里强制暴露中断信息（[#22323](https://github.com/google-gemini/gemini-cli/issues/22323)）。
- **Generalist Agent 委派卡死**：模型一旦决定调用子代理就永久挂起，开发者只能通过 prompt 显式禁止子代理，UX 体验极差（[#21409](https://github.com/google-gemini/gemini-cli/issues/21414)）。
- **Shell / Browser 卡在 "Waiting input"**：常见命令结束后不退出，UI 状态错乱，开发者被迫频繁手动中断（[#25166](https://github.com/google-gemini/gemini-cli/issues/25166)、[#21983](https://github.com/google-gemini/gemini-cli/issues/21983)）。
- **自定义 skills/sub-agents 不会自动触发**：默认调度过于保守，需要显式 prompt 才能调用，违背"零提示可用"的设计目标（[#21968](https://github.com/google-gemini/gemini-cli/issues/21968)）。
- **工具数量超限**：启用工具 >128 时直接 400 报错，希望自动限定上下文工具范围（[#24246](https://github.com/google-gemini/gemini-cli/issues/24246)）。
- **Auto Memory 安全隐患**：本地 transcript 在脱敏前已进入模型上下文，且无效 patch 被静默丢弃（[#26525](https://github.com/google-gemini/gemini-cli/issues/26525)、[#26523](https://github.com/google-gemini/gemini-cli/issues/26523)）。
- **持久化缺陷**：`/compress`、`/chat delete`、OAuth 凭据在跨会话场景下丢失或路径穿越（[#21335](https://github.com/google-gemini/gemini-cli/issues/21335)、[#29192](https://github.com/google-gemini/gemini-cli/pull/29192)、[#29282](https://github.com/google-gemini/gemini-cli/pull/29282)）。

**高频需求：**
- Agent "自我认知"：能准确回答自身的 CLI flags、快捷键与运行方式（[#21432](https://github.com/google-gemini/gemini-cli/issues/21432)）。
- Subagent trajectory 可视化与可分享（[#22598](https://github.com/google-gemini/gemini-cli/issues/22598)）。
-

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

<think>Let me analyze the GitHub data for GitHub Copilot CLI and generate a daily report for 2026-09-11.

Key observations:
1. New release v1.0.84-4 with plugin management improvements
2. Many issues around OOM/memory problems (Node.js heap exhaustion)
3. Several MCP-related issues
4. Platform-specific issues (Windows, WSL2, macOS)
5. Session management issues (wedging, unrevivable sessions)
6. Some feature requests still popular (vim mode, multi-account switching)
7. Desktop app integration issues
8. Only 2 PRs in the past 24 hours, so I'll need to note the limited PR activity

Let me structure the report in Chinese as requested.

For community hot issues, I'll pick 10 most important ones based on comment count, thumbs up, and significance:
1. #13 - vi/vim input mode (closed, 12 comments, 76 likes - very popular)
2. #4742 - Desktop app session conflict (11 comments)
3. #1285 - Org level Agent not showing (9 comments)
4. #3260 - Copy/Paste broken in tmux (7 comments)
5. #3534 - WSL2 copy failure (6 comments)
6. #367 - Multi-Account Switching (closed, 5 comments)
7. #2199 - Ctrl+Backspace (4 comments, 7 likes)
8. #4095 - Windows plugin update failure (3 comments, 21 likes)
9. #4686 - Node.js OOM after 37 min (3 comments)
10. #4764 - Auto approval stops working (3 comments)

For PRs, only 2 available, so I'll cover both.

For functional trends, I see:
- Memory/OOM issues (very prominent)
- MCP integration problems
- Cross-platform compatibility (Windows, WSL2, SSH/tmux)
- Session lifecycle management
- Plugin management
- Vim/keyboard input improvements
- Account management

Let me write the report.</think>

# GitHub Copilot CLI 社区动态日报
**日期：2026-09-11**

---

## 1. 今日速览

今日 Copilot CLI 发布 **v1.0.84-4**，重点重构插件管理命令（`copilot instruction list`、`copilot lsp list` 等），并补齐 `--json` 机器可读输出。社区讨论焦点集中在 **Node.js SEA 运行时 OOM 崩溃**（多个独立 issue 复现 4 GB 堆上限）、**MCP 集成的生命周期与 OAuth 问题**，以及 **跨平台（WSL2 / SSH-tmux / Windows Server）剪贴板与会话锁死**等稳定性议题。整体氛围偏运维与稳定性反馈，PR 流量较低。

---

## 2. 版本发布

### v1.0.84-4（2026-09-10）

**Added**
- 新增 `copilot instruction list` 与 `copilot lsp list` 命令，取代原 `copilot plugins list --kind instruction` / `--kind lsp` 的写法，命令语义更清晰。
- 为 `copilot plugin list`、`copilot plugin marketplace list`、`copilot plugin marketplace browse` 增加 `--json` 输出，便于脚本化与 CI 使用。
- `copilot plugin` 命令支持 `enable` / `disable` 子命令，可独立启停插件。

> 备注：完整变更日志与 bug 修复条目待官方补充；从命名看，本次属于面向 1.0.84 的小幅迭代。

---

## 3. 社区热点 Issues（Top 10）

| # | Issue | 状态 | 评论 / 👍 | 摘要 |
|---|---|---|---|---|
| 1 | [#13](https://github.com/github/copilot-cli/issues/13) CLI input should have a vi/vim input mode | **CLOSED** | 12 / 76 | 呼声最高的长期需求之一（👍76），要求 CLI 交互式输入支持模态编辑。已关闭，社区关注后续实现路径。 |
| 2 | [#4742](https://github.com/github/copilot-cli/issues/4742) Desktop app 1.1.15: cannot create a second Local session | OPEN | 11 / 5 | 桌面端 1.1.15 自动更新后，同一项目无法并行开启第二个 Local（branch）会话，影响多分支并行工作流。 |
| 3 | [#1285](https://github.com/github/copilot-cli/issues/1285) Organisation level Agent not showing up | OPEN | 9 / 11 | 组织级 `.github-private` 中创建的 Agent 在 CLI / VS Code 中不可见，企业用户关注的可发现性问题。 |
| 4 | [#3260](https://github.com/github/copilot-cli/issues/3260) Copy/Paste broken via SSH in tmux → Windows Server 2025 | OPEN | 7 / 1 | 自 1.0.47 起，macOS/Linux 通过 SSH+t mux 连入 Windows Server 2025 后，CLI 内复制粘贴失效，影响远程开发体验。 |
| 5 | [#3534](https://github.com/github/copilot-cli/issues/3534) WSL2 (ARM64): `/copy` fails with `clip.exe exited with code 1` | OPEN | 6 / 5 | 1.0.55 中 `cmd.exe` 包装层引号处理错误，导致 WSL2 (ARM64) 下 `/copy` 写入剪贴板失败。 |
| 6 | [#367](https://github.com/github/copilot-cli/issues/367) Multi-Account Switching for GitHub CLI | **CLOSED** | 5 / 2 | 多 GitHub 账号快速切换需求（个人/工作/外包），因需更多信息被关闭，仍是高频需求。 |
| 7 | [#2199](https://github.com/github/copilot-cli/issues/2199) Add Ctrl+Backspace to delete whole word | OPEN | 4 / 7 | 与 #13 同属键盘编辑体验诉求，期望对齐主流编辑器的"整词删除"行为。 |
| 8 | [#4095](https://github.com/github/copilot-cli/issues/4095) Windows: plugin update fails with "Access is denied" while VS Code is running | OPEN | 3 / 21 | Windows 下 `copilot plugin update` 与 VS Code 同时运行时，因文件句柄被占用导致升级失败，👍21 反映了升级阻塞的痛点。 |
| 9 | [#4686](https://github.com/github/copilot-cli/issues/4686) Node.js OOM after ~37 min — 31,965 leaked libuv handles (SEA ignores NODE_OPTIONS) | OPEN | 3 / 0 | 在 Linux SEA 二进制下，约 37 分钟累计泄漏近 32k libuv 句柄后 OOM；且 SEA 不读取 `NODE_OPTIONS`，调优受限。 |
| 10 | [#4764](https://github.com/github/copilot-cli/issues/4764) Auto approval stops working after ~1 hour | OPEN | 3 / 0 | 1.0.83 的 `/permissions assisted` 约一小时后失效，必须重启会话才能恢复，影响自动化流程。 |

**其他值得注意的 Issues**：
- [#4809](https://github.com/github/copilot-cli/issues/4809)（CLOSED）：原生 MCP 连接器在 `initialize` 之前发送非标准的 `server/discover`，违反 MCP 生命周期规范，已关闭。
- [#4755](https://github.com/github/copilot-cli/issues/4755)：队列消息落在 turn 末尾导致会话永久卡死（既非 idle 也非 running），只能 kill 进程恢复。
- [#4807](https://github.com/github/copilot-cli/issues/4807)：空闲 CLI 进程陷入 `FileWatch` 风暴，CPU 占 221%、35 小时写出 33 GB 日志。
- [#4805](https://github.com/github/copilot-cli/issues/4805)：崩溃主机遗留的 `inuse.<pid>.lock` 在打开会话时不被回收，导致会话"不可复活"。
- [#4802](https://github.com/github/copilot-cli/issues/4802)：开启 Assisted Permissions 后疑似消耗大量 PRU 配额（Pro Legacy 计划受影响）。

---

## 4. 重要 PR 进展

> 过去 24 小时内仅有 2 条 PR 更新，活跃度偏低。

| # | PR | 状态 | 摘要 |
|---|---|---|---|
| 1 | [#4808](https://github.com/github/copilot-cli/pull/4808) Pin GitHub Actions to commit SHAs | OPEN | 由 `github-security-bot` 提交，将工作流中的 GitHub Actions `uses:` 引用固定到 commit SHA（3 处引用全部完成 pin），降低供应链投毒面。 |
| 2 | [#4786](https://github.com/github/copilot-cli/pull/4786) Revise notice regarding third-party services | **CLOSED** | 修订 Copilot CLI 关于第三方服务的说明，明确访问要求与条款。 |

---

## 5. 功能需求趋势

按出现频次与互动量排序，社区关注的功能方向如下：

1. **键盘 / 编辑体验升级**：vim 模式（#13，👍76）、Ctrl+Backspace 整词删除（#2199，👍7）—— 长尾但声量最高的"手感"诉求。
2. **多账号与认证管理**：多 GitHub 账号切换（#367）、Local sandbox 内 `gh` 凭据选择不透明（#4804）、Entra/EMU 听众配置导致 MCP 登录失败（#4796）—— 企业 + 个人双账号场景是高频痛点。
3. **插件（Plugin）生态**：`copilot plugin` 的 list/enable/disable/update 命令正逐步完善，但 Windows 文件锁（#4095）、Marketplace OAuth（#4795）等集成摩擦仍在。
4. **MCP 协议合规与稳定性**：#4809（生命周期顺序违规）、#4731（取消后 `tools/list` 刷新误打）、#4795（OAuth 回调端口随机 vs 注册）—— 反映 MCP 正在从"能用"走向"稳用"的阶段。
5. **稳定性与资源治理**：SEA 运行时 OOM 与 libuv 句柄泄漏（#4686 / #4725 / #4699 / #4780）—— 长会话/上下文压缩触顶的崩溃问题是本周最强技术信号。
6. **会话生命周期与会话锁**：#4755（队列 wedging）、#4805（`inuse.<pid>.lock` 僵尸）、#4780（压缩失败导致无法 resume）—— 会话"卡死/不可恢复"已成系统性风险。
7. **桌面端与 CLI 协同**：#4742 / #4796 表明桌面 App 在多会话、Entra、CLI 版本绑定上仍有差距。

---

## 6. 开发者关注点

- **长会话稳定性是最大痛点**：多个独立 issue 指向 V8 4 GB 默认堆上限在 SEA 中不可配置（`NODE_OPTIONS` 被忽略），libuv 句柄持续泄漏，长会话与 `--resume` 高概率 OOM。需要：可配置的堆上限 + 真正的句柄回收。
- **跨平台"最后一公里"细节**：WSL2 ARM64、SSH+t mux→Windows Server、Windows 上 VS Code 与插件升级的文件锁冲突——这些不是核心功能缺陷，但严重影响日常可用性。
- **MCP 集成走向"规范合规"**：开发者开始按 MCP spec 对照客户端行为，非标准的 `server/discover` 预握手、取消后错误刷新、OAuth 回调 URL 不一致等被陆续曝光。
- **自助权限（Assisted Permissions）与配额**：#4764 / #4802 提示自动审批模式存在超时失效与 PRU 异常消耗问题，企业用户尤其敏感。
- **可观测性不足**：#4807（FileWatch 风暴 33 GB 日志）、#4804（凭证选择不可见）反映出诊断与可观测性工具仍偏弱，开发者更希望看到"为什么这样做"而非"出错了"。
- **快捷键/编辑器习惯**：vim/Emacs 用户对 CLI 输入模式持续不满，与 IDE 用户的键盘预期存在落差。

---

*日报基于 github.com/github/copilot-cli 在 2026-09-10 → 2026-09-11 的公开数据整理；Issue/PR 计数与排序依据评论数、👍 数及与近期版本的相关性综合判断。*

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

<think>The user wants me to generate a Chinese daily report for Kimi Code CLI community dynamics based on GitHub data. Let me analyze the data provided:

1. **Releases**: No new releases in the past 24 hours
2. **Issues**: Only 2 issues in the past 24 hours
   - #2638 [OPEN] - /login device auth fails with HTTP 500 after successful browser approval (CLI v0.42.0, macOS)
   - #1388 [CLOSED] - kimicode MCP connect failed on CentOS 7.9
3. **Pull Requests**: No new PRs in the past 24 hours

The user asked me to:
1. 今日速览 - 2-3 sentences
2. 版本发布 - skip if no releases
3. 社区热点 Issues - pick 10 (but only 2 available)
4. 重要 PR 进展 - pick 10 (but 0 available)
5. 功能需求趋势 - extract from all issues
6. 开发者关注点 - summarize

Since there's only 2 issues and 0 PRs, I need to be honest about this in the report. I cannot fabricate 10 issues or 10 PRs. I should note this clearly.

Let me think about this carefully - the data clearly shows only 2 issues and 0 PRs. The user asked for 10 of each, but I should not fabricate data. I'll need to explain that the actual data is limited and work with what's available.

Let me structure the report:

1. **今日速览**: Note the limited activity today, mention the login bug being the main concern
2. **版本发布**: Skip since no releases
3. **社区热点 Issues**: Only 2 available, I'll cover both with detailed analysis
4. **重要 PR 进展**: Note no PR activity
5. **功能需求趋势**: Based on the limited data
6. **开发者关注点**: Based on the limited data

I should be transparent about the limited data while still providing a useful analysis. Let me draft this now.

For the thinking section, I need to be very detailed about my reasoning.</think>

# Kimi Code CLI 社区动态日报

**日期：2026-09-11**

---

## 📌 今日速览

今日仓库整体活跃度较低，过去 24 小时内仅有 **2 条 Issue 更新**，无新 Release、无新 PR 提交。其中值得关注的是 **#2638** —— CLI v0.42.0 在 macOS 上执行 `/login` 设备授权时，浏览器侧成功审批后回调接口返回 HTTP 500，属阻塞性登录故障；另一条 **#1388** 为旧 Bug 结案，涉及 CentOS 7.9 环境下 MCP 服务连接失败。整体来看，今日属于社区"维护间歇日"，无重大功能迭代或合并动向。

---

## 🚀 版本发布

**无新版本发布**（过去 24 小时内）。当前主线版本仍为 **v0.42.0**（基于 Issue #2638 报告的环境信息推断）。

---

## 🔥 社区热点 Issues

> 📊 说明：过去 24 小时仅 **2 条** Issue 更新，数据量较少，以下全部列出并深度解读。

### 1. [#2638] `/login` 设备授权在 macOS 上返回 HTTP 500 [OPEN]
- **链接**：https://github.com/MoonshotAI/kimi-cli/issues/2638
- **状态**：OPEN · 👍 0 · 💬 1
- **作者**：@milesbuckton
- **重要性**：⭐⭐⭐⭐⭐
  - **核心痛点**：用户完成浏览器端设备码审批后，CLI 端仍报 HTTP 500，**直接导致 CLI 无法登录**，对免费档（Adagio tier）用户尤其影响面广。
  - **跨平台关联**：作者明确指出 **VS Code 扩展也受影响**，说明问题不在 CLI 本地逻辑，而在后端回调服务或共享认证模块，影响所有依赖 `/login` 的客户端。
  - **升级诱因**：作为 v0.42.0 版本回归 Bug，建议在下个小版本（v0.42.1 或 v0.43.0）优先修复。
  - **社区反应**：虽然点赞数为 0，但评论 1 条且涉及完整复现路径（设备码示例：`WGBT-C3BW`、`QLE2-MYVL`），属于高质量 bug report，应被维护者优先 triage。

### 2. [#1388] CentOS 7.9 终端下 MCP 连接失败 [CLOSED]
- **链接**：https://github.com/MoonshotAI/kimi-cli/issues/1388
- **状态**：CLOSED · 👍 0 · 💬 0
- **作者**：@supsmile
- **重要性**：⭐⭐⭐
  - **历史背景**：该 Issue 创建于 2026-03-10，时隔约 6 个月后于今日（09-11）关闭，属典型的"长期挂账"Issue。
  - **技术细节**：在 kimi **v1.17.0** + `kimi-for-coding` 模型 + CentOS 7.9 环境下，触发 `Failed to connect MCP servers` 错误。
  - **结案推断**：官方未在数据中给出结案原因，结合 6 个月跨度与 Kimi Code CLI 后续多个版本演进，**很可能因版本升级或 CentOS 7.9 兼容性调整自然失效而关闭**。
  - **遗留思考**：CentOS 7.9 已于 2024 年 6 月 30 日 EOL，企业内仍有存量用户；建议官方在 README/文档中明确 **最低支持的系统版本**，避免类似报告反复出现。

---

## 🔧 重要 PR 进展

**无新 PR 活动**（过去 24 小时内提交/更新 0 条）。建议关注维护者后续是否会针对 #2638 提交修复 PR。

---

## 📈 功能需求趋势

由于今日活跃 Issue 仅有 2 条，全量样本不足以做严谨趋势分析，但仍可提炼出两个清晰诉求方向：

| 方向 | 证据 | 趋势判断 |
|------|------|----------|
| **🔐 认证流程稳定性** | #2638 反映 `/login` 设备授权（OAuth Device Flow）存在回归 | **高优先级**，影响所有新用户首启体验 |
| **🐧 旧系统/长尾环境兼容** | #1388 反映 CentOS 7.9（已 EOL）环境 MCP 连接问题 | **中等优先级**，企业内仍有存量，建议在文档中明确支持矩阵 |
| **🔌 MCP（Model Context Protocol）生态** | #1388 涉及 MCP servers 连接 | MCP 作为 CLI 扩展能力核心，长期看仍是社区关注焦点，但今日无新增讨论 |

---

## 💡 开发者关注点

综合今日仅有的 2 条 Issue，开发者社区的反馈呈现以下特征：

1. **🚨 阻塞性 Bug 优先于功能迭代**
   - 当 `/login` 这种"入门级"流程出现 500 错误时，对新用户 onboarding 杀伤力远超功能性缺陷。建议维护团队建立 **auth-related issue 的 fast-track 通道**。

2. **🧪 跨客户端一致性需回归测试**
   - #2638 同时影响 CLI 与 VS Code 扩展，说明二者共享认证后端。**任何对 `/login`、OAuth 回调服务的改动都应触发全客户端回归测试**。

3. **📜 旧 Issue 清理机制待加强**
   - #1388 挂了 6 个月才关闭，反映出 Issue 生命周期管理可能缺乏主动跟进机制（如 stale-bot、定期 triage 会议）。建议引入自动化机制标记 **>90 天无活动 + 无复现** 的 Issue。

4. **🌐 环境兼容性边界需对外明确**
   - 开发者遇到"无法使用"类问题时，第一反应是提 Issue。建议在 README 中增加 **Support Matrix**（OS / Python 版本 / Node 版本等），降低无效 Issue 量。

---

## 📋 报告备注

- ⚠️ 今日数据样本极小（仅 2 条 Issue、0 条 PR、0 个 Release），上述趋势判断仅供方向性参考，**不建议据此做产品决策**。
- 🔔 重点关注：**#2638** 是当前唯一 OPEN 且阻塞核心流程的 Issue，建议 Kimi 维护团队优先处理。

---

*报告生成时间：2026-09-11 · 数据来源：GitHub Public API (MoonshotAI/kimi-cli)*

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

<think>用户希望我根据GitHub数据生成一份2026-09-11的OpenCode社区动态日报。让我仔细分析这些数据：

1. **Releases**: 过去24小时无新版本
2. **Issues**: 50条更新，按评论数筛选了30条
3. **PRs**: 50条更新，按评论数筛选了20条

我需要：
1. 今日速览 - 概括最重要动态
2. 版本发布 - 无则省略
3. 社区热点Issues - 选10个
4. 重要PR进展 - 选10个
5. 功能需求趋势 - 提炼方向
6. 开发者关注点 - 痛点

让我挑选最重要的Issue：
1. #6231 [OPEN] Auto-discover models - 232👍, 55评论 - 最热门
2. #30086 [OPEN] High CPU usage - 52评论, 28👍 - 性能问题严重
3. #3743 [CLOSED] Loop in certain models - 27评论
4. #26772 [OPEN] Integrated browser for desktop - 16评论
5. #29748 [OPEN] Unexpected server error - 11评论
6. #9311 [CLOSED] models.dev data - 9评论
7. #23327 [CLOSED] LM Studio auto-detect - 7评论
8. #28618 [CLOSED] runLoop fails - 5评论
9. #48410 [OPEN] WebKit StringImpl - 4评论 - 新bug
10. #48330 [OPEN] Copilot Legacy Plan - 4评论
11. #27553 [OPEN] Auto-discover models - 4评论
12. #47350 [OPEN] Shell tool never returns - 4评论
13. #38828 [OPEN] Markdown syntax raw - 3评论
14. #46651 [OPEN] TypeError: Failed to fetch - 3评论
15. #36250 [CLOSED] agent.model ignored - 3评论
16. #48434 [OPEN] Timeline row reconciliation - 2评论 - 性能
17. #48416 [OPEN] Failed to execute statement - 2评论

重要的PR：
1. #48435 - 修复timeline row deep equality
2. #48438 - Native Anthropic advisor tool - 新功能
3. #48324 - Two-tier progressive skill disclosure
4. #46574 - GPT-5.6 1M context variants
5. #48433 - Azure provider error fix
6. #48339 - Answer queued prompts after stopped turn
7. #48428 - macOS CLI re-sign
8. #48431 - Coalesce message.part.delta store writes - O(n²)性能修复
9. #48427 - Win32 shell tool fix
10. #48432 - Markdown live tail fix
11. #48429 - Flat catalog settings
12. #32302 - Forward parent attachments
13. #48421 - Avoid invalid dummy session id
14. #48015 - Backoff event stream reconnects
15. #48423 - Replace websocket flags
16. #24691 - Agent order field

功能需求趋势分析：
- 自动发现本地LLM模型（LM Studio, Ollama等）- #6231, #27553, #23327
- 性能优化 - #30086 CPU, #48434 timeline, #48431 O(n²), #48432 markdown
- Shell tool改进 - #47350, #48414, #48427, #28618
- 桌面应用功能 - #26772 integrated browser, #36564 archived sessions
- 模型支持 - #48330 Copilot, #46574 GPT-5.6
- TUI/UX改进 - #38828 markdown, #36562 project icon

开发者关注点：
- 性能问题（CPU占用、O(n²)、timeline reconciliation）
- 本地模型自动发现
- Shell tool的进程管理（僵尸进程、pipe leak）
- TUI渲染问题（markdown、freeze）
- 桌面应用启动慢（sidecar）

让我开始写日报。</think>

# OpenCode 社区动态日报
**日期：2026-09-11**

---

## 📌 今日速览

今日 OpenCode 社区异常活跃，**性能优化成为主线话题** —— 多个 PR 集中修复 TUI 流式渲染中的 O(n²) 性能瓶颈（#48431、#48432），同时社区对 **OpenAI 兼容提供商的模型自动发现** 呼声持续高涨（#6231 累计 232 👍，仍是仓库热门第一）。此外，多个 Windows/macOS 平台的 Shell 工具、子进程管理 Bug 在同一天被集中修复和跟进。

---

## 🚀 版本发布

**过去 24 小时内无新版本发布。**

---

## 🔥 社区热点 Issues（Top 10）

### 1. [#6231](https://github.com/anomalyco/opencode/issues/6231) ⭐ 232 — 自动发现 OpenAI 兼容端点的模型
**作者**: @ochsec | 评论: 55 | 状态: OPEN
针对 LM Studio、Ollama、llama.cpp 等本地提供商的 `/v1/models` 端点，希望自动发现可用模型而非手动维护 `opencode.json` 列表。这是社区长期诉求，已与 #27553、#23327 形成明显的话题集群。

### 2. [#30086](https://github.com/anomalyco/opencode/issues/30086) — 新版本 CPU 占用飙升
**作者**: @DenisSilent | 评论: 52 | 👍: 28 | 状态: OPEN
用户反映约一周前开始，OpenCode CPU 占用大幅上升，以前能并发 10 个会话，现在 3 个就卡顿，鼠标延迟明显。**性能回归问题**，影响大量重度用户。

### 3. [#3743](https://github.com/anomalyco/opencode/issues/3743) — 特定模型陷入循环
**作者**: @salavatkhafizov | 评论: 27 | 👍: 13 | 状态: **CLOSED**
KIMI K2、GLM 4.6 等模型在 OC 1.0.10 上持续重复同一工具调用，需 `/compact` 或手动停止。已被关闭，说明已有解决方案或合并。

### 4. [#26772](https://github.com/anomalyco/opencode/issues/26772) — 桌面端集成浏览器工作区
**作者**: @AlexDelgado20 | 评论: 16 | 👍: 9 | 状态: OPEN
请求在 OpenCode Desktop 内嵌入浏览器，方便用户在编码时检查和交互网页内容。属于高频功能扩展请求。

### 5. [#29748](https://github.com/anomalyco/opencode/issues/29748) — "Unexpected server error"
**作者**: @Uons200176 | 评论: 11 | 👍: 2 | 状态: OPEN
添加 OpenRouter API 后切换项目触发，重启仍存在。**服务端连接稳定性**问题的典型代表。

### 6. [#9311](https://github.com/anomalyco/opencode/issues/9311) — 使用 models.dev 数据支持自定义提供商
**作者**: @mcowger | 评论: 9 | 👍: 3 | 状态: **CLOSED**
希望在白名单配置下，自动从 models.dev 拉取预配置提供商的模型数据。

### 7. [#28618](https://github.com/anomalyco/opencode/issues/28618) — runLoop 因客户端时钟偏移无限循环
**作者**: @clansty | 评论: 5 | 状态: **CLOSED**
当 webui/desktop 客户端机器时钟快于服务器时，每次 prompt 都会触发额外的 LLM 往返，UI 出现伪"思考中"指示器。已关闭，说明已修复。

### 8. [#48410](https://github.com/anomalyco/opencode/issues/48410) — WebKit StringImpl 断言失败导致 SIGTRAP 崩溃
**作者**: @wusai2333 | 评论: 4 | 状态: OPEN | **🆕 今日新增**
macOS 26.0 (M3 Pro) + Bun 运行时，opencode 1.18.30 在数据库增长后崩溃，根因是 WebKit 的 StringImpl 断言失败。属于**高严重度稳定性问题**。

### 9. [#48330](https://github.com/anomalyco/opencode/issues/48330) — Copilot Legacy 套餐单次 prompt 全部消耗
**作者**: @mrbarletta | 评论: 4 | 状态: OPEN | 🆕 近期
1500 次/月的 Copilot Legacy 订阅，在 OpenCode 2.0 单次会话中即耗尽（429），但 OpenCode 1 无此问题。**2.0 计费/请求逻辑可能存在回归**。

### 10. [#47350](https://github.com/anomalyco/opencode/issues/47350) — Shell 工具在后台进程持有 stdio 时永不返回
**作者**: @boxabirds | 评论: 4 | 状态: OPEN
Shell 工具以 stdout/stderr EOF 而非子进程退出作为完成标志，导致遗留进程时永远挂起。该问题今日还衍生出 #48414、#48427 等 PR 跟进。

---

## 🛠️ 重要 PR 进展（Top 10）

### 1. [#48431](https://github.com/anomalyco/opencode/pull/48431) — TUI 合并 message.part.delta 写入
**作者**: @dcerisano | 状态: OPEN
与 #48432 联合解决 #36043 的 O(n²) 流式冻结问题，从客户端 stream path 两层移除 O(n²) 开销。**关键性能修复**。

### 2. [#48432](https://github.com/anomalyco/opencode/pull/48432) — Markdown live tail 原地扩展
**作者**: @dcerisano | 状态: OPEN
同上，与 #48431 配合从另一层（markdown 实时增量解析）消除 O(n²)，完全关闭 TUI 冻结窗口。

### 3. [#48435](https://github.com/anomalyco/opencode/pull/48435) — 避免 timeline row 协调时的深度相等
**作者**: @Priyansh4444 | 状态: OPEN | 修复 #48434
将 `TimelineRow.equals` 从 Effect 的 `Equal.equals`（遍历整个 PartGroup 结构）改为字段级比较器。320 turn / 1.28M delta 场景下显著降低开销。

### 4. [#48438](https://github.com/anomalyco/opencode/pull/48438) — 原生 Anthropic advisor 工具
**作者**: @alohaninja | 状态: OPEN | 关闭 #23058 | 🚧 Draft
利用 Anthropic `server_tool_use` → `advisor_tool_result`，在执行器自身响应流内进行咨询。无法以插件形式实现（必须接入 executor 内部），是**重大新功能方向**。

### 5. [#48324](https://github.com/anomalyco/opencode/pull/48324) — 两层渐进式 Skill 公开
**作者**: @seonghobae | 状态: OPEN
实现 Skill 的两层渐进披露，同时修复自定义网关下 GPT-5.* Responses API 模型被无条件注入 `textVerbosity = "low"` 的问题。

### 6. [#46574](https://github.com/anomalyco/opencode/pull/46574) — GPT-5.6 OAuth 1M 上下文变体
**作者**: @rhan637 | 状态: OPEN | 关闭 #46527
为 GPT-5.6 Codex OAuth 模型新增可选 1M 上下文变体（`gpt-5.6-sol-1m` 等）。**扩展 OAuth 模型能力**。

### 7. [#48433](https://github.com/anomalyco/opencode/pull/48433) — 上报 Provider 初始化失败
**作者**: @rekram1-node | 状态: OPEN
修复选择 `azure/gpt-5.4-nano` 但未配置 Azure `resourceName`/`baseURL` 时的错误提示，从模糊的 "Unsupported package" 改为清晰的资源缺失说明。

### 8. [#48339](https://github.com/anomalyco/opencode/pull/48339) — 停止回合后回答队列中的 prompt
**作者**: @wulart | 状态: OPEN | 关闭 #48347
修复在前一回合运行期间提交的 prompt 会永远等待被 stop 的 run 的 `done` 延迟，从而导致用户操作卡死。

### 9. [#48428](https://github.com/anomalyco/opencode/pull/48428) — 重新签名 macOS CLI 交叉编译产物
**作者**: @benrfairless | 状态: OPEN | 关闭 #46313
修复在 Linux runner 上通过 Bun.build 交叉编译的 darwin CLI 二进制未签名问题，恢复 macOS 上的 Gatekeeper 信任。

### 10. [#48427](https://github.com/anomalyco/opencode/pull/48427) — Win32 Shell 工具采用 exit-first + 有界 drain
**作者**: @2061969365 | 状态: **CLOSED** | 修复 #37838
Windows 下 shell 工具改用进程退出 + 有界 drain 替代 pipe EOF 等待，避免子进程继承 pipe 后阻塞 120s+。配合 #48414、#22012 形成完整的 shell 进程管理修复链。

---

## 📈 功能需求趋势

从过去 24 小时活跃的 Issues 来看，社区关注焦点集中在以下方向：

| 趋势方向 | 代表 Issues | 热度 |
|---------|------------|------|
| **本地 LLM 自动发现** | #6231, #27553, #23327 | 🔥🔥🔥 |
| **Shell 工具/子进程管理** | #47350, #48414, #28618, #36590 | 🔥🔥 |
| **TUI 性能与渲染** | #38828, #48434, #30086, #35514 | 🔥🔥 |
| **桌面端功能扩展** | #26772（集成浏览器）, #36564（归档会话访问） | 🔥 |
| **新模型/Provider 支持** | #48330（Copilot 2.0）, #46574（GPT-5.6 1M） | 🔥 |
| **数据库/启动性能** | #48410（WebKit 崩溃）, #48416（SQLite busy） | 🔥 |
| **UX 改进** | #36590（错误信息可操作化）, #36562（项目图标） | 🔥 |

---

## 💡 开发者关注点

基于今日 Issue/PR 互动，开发者社区反馈中**最高频的痛点**包括：

1. **性能回归焦虑**：#30086（CPU 飙升）+ #48434（timeline 深比较）+ #35514（sidecar 启动 2 分钟）反映出 1.17~1.18 版本在性能和启动时间上存在可感知的退化。

2. **本地模型接入繁琐**：手动维护模型清单是几乎所有 LM Studio/Ollama 用户的共同痛点，#6231 232 👍 的高赞印证了这一功能优先级。

3. **Shell 工具进程生命周期**：#47350、#48414、#48427、#28618 揭示一个长期未根治的问题 —— shell 工具在 child exit 与 pipe EOF 之间的判断边界模糊，且 Windows 上尤其严重。

4. **TUI 冻结/O(n²)**：长会话场景下 stream delta 与 markdown 实时解析的复杂度叠加导致 UI 卡顿，今日 #48431 + #48432 的双 PR 联合修复被开发者高度期待。

5. **错误信息可操作性不足**：从 #36590（证书错误直接抛出原始字符串）到 #48433（Azure 错误含糊），开发者呼吁更人性化的错误文案与修复建议。

6. **2.0 升级隐患**：#48330（Copilot 计费回归）+ #36527（Windows 自动更新创建重复安装）显示用户从 1.x 迁移到 2.0 时仍存在兼容性陷阱。

---

*日报数据来源：[GitHub - anomalyco/opencode](https://github.com/anomalyco/opencode)，统计窗口：过去 24 小时（2026-09-10 → 2026-09-11）*

</details>

<details>
<summary><strong>jcode</strong> — <a href="https://github.com/1jehuang/jcode">1jehuang/jcode</a></summary>

<think>The user wants me to generate a daily report for the jcode community based on GitHub data from 2026-09-11. Let me analyze the data carefully:

1. **Releases**: None in the past 24 hours
2. **Issues**: 42 total, but only 30 shown (comment-count sorted)
3. **PRs**: Only 1 in the past 24 hours (#1218)

Let me organize this into a Chinese daily report.

Key observations:
- No releases today
- Issue #1191 (CI broken) has 6 comments - top issue
- Issue #1173 (OpenCode Go routing) has 5 comments, 5 likes - highly supported
- Issue #678 (Installer invasiveness) has 5 likes - old but important
- Most issues are bugs (28) and some enhancements (14)
- The single PR #1218 addresses 10 reproducible issues
- Many issues relate to: swarm/multi-agent, MCP tool calls, image handling, CI/build, desktop notifications, terminal/Ghostty performance

Let me categorize issues by topic:
- **Build/CI**: #1191, #1201 (Windows test deadlock), #1204 (cargo shim)
- **Multi-agent/Swarm**: #1175, #1156, #1222, #1209, #1210, #1211
- **MCP/Tool calls**: #1214, #1149
- **Provider/Model**: #1173, #1215, #1202, #772, #1151, #1157
- **TUI/UX**: #1184 (Ghostty), #1187, #1189, #1206, #1186, #1188, #1194, #1185, #1196, #1207
- **Platform-specific (Windows)**: #1192, #1201, #1186
- **macOS**: #1219
- **Security/UX**: #678
- **Notifications**: #1187, #1219

Let me pick the top 10 issues based on importance:

1. #1191 - CI broken (6 comments, blocks all development)
2. #1173 - OpenCode Go protocol routing (5 comments, 5 likes - high impact)
3. #678 - Installer invasiveness (5 likes, old but critical)
4. #1184 - Ghostty focus loop (4 comments, performance)
5. #1215 - Qwen3.8-Max support (4 comments, new model)
6. #1175 - Swarm spawn model ignored (3 comments)
7. #1185 - pre_request hook (3 comments)
8. #1187 - Zombie processes (3 comments)
9. #1207 - Pasted images not rendered (2 comments)
10. #1192 - Windows memory runaway (high priority)

For PRs, there's only #1218, which I'll highlight.

Let me write the report now.</think>

# jcode 社区动态日报 · 2026-09-11

## 📌 今日速览

今日 jcode 仓库无新版本发布，但社区活跃度依然旺盛：过去 24 小时共有 **42 条 Issue** 更新，覆盖 CI 故障、多 Agent（Swarm）调度、终端性能、Provider 路由等核心痛点。维护者 @1jehuang 提交了一项综合性修复 PR #1218，一次性解决 10 个已可复现的 Bug，是今日最实质的代码侧进展。

---

## 🚀 版本发布

今日无新版本发布。建议关注上游 `master` 分支即将合并的 PR #1218 修复合集。

---

## 🔥 社区热点 Issues（Top 10）

| # | Issue | 标题 | 评论 | 👍 | 重要性 |
|---|-------|------|------|----|--------|
| 1 | [#1191](https://github.com/1jehuang/jcode/issues/1191) | **CI 全线崩溃**：`ci.yml` / `ios-testflight.yml` / `windows-smoke.yml` 顶层 `env` 重复定义 | 6 | 0 | 🔴 **最高优先级** — 自 8 月 20 日起所有 PR 与 master 的 Actions 任务瞬间失败，严重阻塞发布流程 |
| 2 | [#1173](https://github.com/1jehuang/jcode/issues/1173) | OpenCode Go 模型需要协议感知路由，而非一律走 Chat Completions | 5 | 5 | 🟡 **社区高赞** — 直接影响 `muse-spark-1.3-contributor` 等多协议模型可用性 |
| 3 | [#678](https://github.com/1jehuang/jcode/issues/678) | 安装器静默注册全局快捷键 + 持久 LaunchAgent | 3 | 5 | 🟠 **老问题，新焦点** — 用户安全/信任类 issue，2 个月仍未关闭，社区反应强烈 |
| 4 | [#1184](https://github.com/1jehuang/jcode/issues/1184) | Ghostty 窗口聚焦时 `mode 1004` 被反复触发，造成空闲会话每秒 ~42k 次 `write()` | 4 | 0 | 🟡 性能型 Bug：客户端 66% CPU、Ghostty 渲染线程 90–106% CPU，单点高负载 |
| 5 | [#1215](https://github.com/1jehuang/jcode/issues/1215) | 为 Qwen3.8-Max 增加 Alibaba Token Plan 原生支持 | 4 | 0 | 🟢 新模型接入诉求，关系到国产旗舰 Coding 模型生态 |
| 6 | [#1187](https://github.com/1jehuang/jcode/issues/1187) | #935 observer-hook 修复后，桌面通知子进程仍遗留僵尸 | 3 | 0 | 🟠 资源泄漏：直接影响 Linux/macOS 长会话稳定性 |
| 7 | [#1175](https://github.com/1jehuang/jcode/issues/1175) | `swarm spawn` 的 `model` 参数被忽略，子 Agent 强制继承协调器模型 | 3 | 0 | 🔴 Swarm 体系关键缺陷：导致自审失败，已被多人复现 |
| 8 | [#1185](https://github.com/1jehuang/jcode/issues/1185) | 新增 `pre_request` 转换 Hook：允许在调用 Provider 前改写请求 | 3 | 0 | 🟢 重要扩展点提案：覆盖上下文标记、记忆塑形等场景 |
| 9 | [#1192](https://github.com/1jehuang/jcode/issues/1192) | Windows：交互式会话启动时服务进程 RSS 飙至 8–12 GB | 1 | 0 | 🔴 **High Priority** — Windows 平台不可用级问题，与 MCP/Provider/配置无关 |
| 10 | [#1207](https://github.com/1jehuang/jcode/issues/1207) | 粘贴图片在 transcript 仅显示 `[image N]` 占位符，无实际渲染 | 2 | 0 | 🟡 UX 痛点：无法核验实际提交的图片内容 |

**社区反应摘要**：
- **Bug 类 Issue 占绝对主导**（约 67%），且大量带 `triage: reproducible` 标签，说明问题可被工程团队直接定位。
- **点赞数最高的两条**（#1173、#678）均涉及「Provider 路由」与「安装行为透明度」，体现用户对**可控性与协议准确性**的重视。

---

## 🛠 重要 PR 进展

| # | PR | 标题 | 状态 | 说明 |
|---|----|------|------|------|
| 1 | [#1218](https://github.com/1jehuang/jcode/pull/1218) | **fix: 一次性处理 9 月 triage 中 10 个可复现 Issue** | OPEN | 由 @1jehuang 本人提交，每个修复一个 commit，6 项新增 + 4 项本地分支已存在但重新校验发布。涵盖 terminal、bg、配置写入、调度等已可定位的回归问题。今日唯一活跃 PR，质量与覆盖面均较高 |

> 今日仅 1 个 PR 更新。如需了解更多合并中的 PR，请参阅仓库 [Pull requests 列表](https://github.com/1jehuang/jcode/pulls)。

---

## 📈 功能需求趋势

通过对 42 条 Issue 的归类，当前社区关注的方向集中在以下几条主线：

| 方向 | 代表 Issue | 趋势解读 |
|------|-----------|---------|
| **🤖 多 Agent / Swarm 能力完善** | #1175、#1156、#1209、#1210、#1211、#1222 | 占比约 15%，是当前最热议题。核心诉求：`model` 参数可控、Worker 调度/重绑定、信令可靠性 |
| **🧠 Provider 路由 & 模型接入** | #1173、#1215、#1202、#772 | 占比约 12%。反映多供应商、协议感知（Chat Completions / Anthropic / 原生）逐渐成为标配 |
| **⚡ 性能与资源治理** | #1184（Ghostty 写循环）、#1192（Windows 内存爆炸）、#1151（session_search 反序列化）、#1149（并行 tool call） | 多个高优 Issue 集中在「运行时资源控制」与「并行性」 |
| **🪟 跨平台一致性（Windows/macOS）** | #1192、#1201、#1186、#1219 | Windows TUI 死锁、内存失控、技能自动补全缺失仍是痛点 |
| **🧩 扩展性 / Hook 体系** | #1185（pre_request）、#1196（循环调度）、#1215（Token Plan 集成） | 社区正在推动更细粒度的「请求前/会话内」扩展点 |
| **🖼 UX 与输入输出保真** | #1207（图片占位符）、#1206（拖拽路径转义）、#1187（通知僵尸） | TUI 与桌面集成的细节体验仍是高频反馈点 |

---

## 💬 开发者关注点

综合今日 Issue 评论与痛点描述，开发者社区反馈的**高频需求与共鸣点**可归纳为：

1. **🔧 修复优先于新功能**  
   #1191 CI 故障已经阻塞近一个月；#1192 Windows 内存问题被标记 `priority: high`。开发者普遍希望先稳定构建与平台兼容层，再扩展特性。

2. **🧭 Swarm 调度的「可控性」诉求**  
   多个 Issue 都直指同一类问题：`swarm_model=inherit` 失效、`model` 参数被吞、Worker 死亡后无人接替。开发者期望 Swarm 体系提供**显式的 worker 模型绑定**与**弹性 worker 拉起**能力（参见 #1175、#1156、#1222、#1210）。

3. **🔌 Provider 协议层面的"诚实"**  
   #1173、#1149、#1214 反映出开发者对「模型说支持但运行时不支持」的情况容忍度极低。期望路由层能**按模型能力声明**而非默认走 Chat Completions，并能正确处理并行 tool call、schema-guided tool decoding。

4. **🛡 安装与系统集成的透明性**  
   #678（安装器创建全局快捷键 + LaunchAgent）虽然老，但持续得到点赞（👍5）。开发者对**默认安装行为的"最小特权"原则**有强烈共识。

5. **🪟 Windows 体验仍是短板**  
   #1192、#1201、#1186 三连发揭示出 TUI 在 Windows 上的稳定性问题（内存失控、测试死锁、技能自动补全丢失）。这与 #1184 在 macOS 端的高占用形成对比，**跨平台资源治理是下一个版本需重点投入的方向**。

6. **📦 渐进式修复文化**  
   #1218 一次性打包 10 个修复的做法受到社区欢迎（每个 Issue 一个 commit、可独立 revert），有望成为后续 triage 的范式。

---

### 📎 数据说明
- 报告数据基于 2026-09-10 至 2026-09-11 期间 GitHub 仓库 `1jehuang/jcode` 的 Issues / Pull Requests 公开活动。
- Issue 总数 42 条，本文展示评论数 Top 30；其余多为 `needs-info` / 低评论条目，未列入热点。
- 报告生成时间：2026-09-11（北京时间）。

</details>

<details>
<summary><strong>pi</strong> — <a href="https://github.com/earendil-works/pi">earendil-works/pi</a></summary>

<think>Let me analyze the GitHub data for the pi project (earendil-works/pi) and create a daily report for 2026-09-11.

Let me organize the information:

**No releases in the past 24 hours** - so I can skip the version release section or briefly note it.

**Issues to highlight (top 10 most noteworthy):**

1. #9323 [CLOSED] Improve fireworks-specific config - 14 comments, most discussed - bug about fireworks provider config
2. #8061 [OPEN] Context budget ignores maxTokens output reservation - 8 comments, 2 thumbs up - important bug about context overflow
3. #8133 [CLOSED] Per-model compaction settings - 6 comments, 5 thumbs up - feature request for per-model compaction
4. #8810 [OPEN] Extension-registered providers intermittent ignore defaultProvider - 5 comments
5. #9294 [OPEN] claude-fable-5 fallback lists invalid model - 5 comments
6. #9257 [OPEN] extractCursorPosition leaves duplicate CURSOR_MARKER - 5 comments
7. #9268 [OPEN] TUI remote Markdown image with empty alt hides URL - 5 comments
8. #9265 [OPEN] O(n²) tool-call argument re-parsing freezes event loop - 4 comments - performance issue
9. #9331 [OPEN] Bedrock OpenAI reasoning effort never sent - 4 comments
10. #9361 [OPEN] Windows settings shellPath non-deterministically ignored - 4 comments
11. #8752 [OPEN] bedrock-converse usage.input not normalized - 4 comments, 5 thumbs up - cost/billing issue
12. #8463 [CLOSED] openai-codex GPT 5.6 cache misses before TTL - 4 comments
13. #9394 [CLOSED] Remove gpt-5.4 from openai-codex catalog - 4 comments - model catalog issue
14. #9276 [OPEN] grep tool with context lines causes OOM - 4 comments - OOM issue
15. #2374 [CLOSED] Kitty inline images not rendered inside tmux - 3 comments, older but recently updated
16. #5366 [CLOSED] Support delete branches in session tree - 3 comments, 2 thumbs up
17. #9332 [OPEN] Fullscreen drag-select corrupts display - 3 comments
18. #9231 [CLOSED] how could it cost such a long time? - 3 comments
19. #9045 [OPEN] Invalid --mode values silently ignored - 3 comments
20. #9210 [CLOSED] Anthropic Messages via gateway cacheWrite1h never set - 3 comments - cost/billing

**PRs to highlight (top 10):**

1. #9442 fix(ai): allow prompt cache keys for compatible proxies
2. #9459 fix(coding-agent): prefer recorded model changes on resume
3. #9301 feat(coding-agent): confirm device-code browser and clipboard actions
4. #1598 fix: guard against non-iterable assistant.content in estimateTokens
5. #8744 feat(tui): add opt-in overlay selection exclusion
6. #9461 fix(ai): defer streamed tool argument parsing until read (fixes #9265)
7. #9297 fix(ai): remove invalid Fable 5 fallback target
8. #9441 fix(tui): prevent cursor marker leaks
9. #9443 fix(ai): capture and replay Gemini thoughtSignature
10. #9438 fix(tui): let overlays cover terminal images
11. #9435 Add value resolution to model provider baseUrl
12. #8799 feat(tui): prettier Working... spinner
13. #9431 feat(agent): default 3 minute timeout for every tool call
14. #9430 fix(coding-agent): remove unreachable tool_result_end listener in subagent example
15. #8612 fix(coding-agent): clear delivered image-only queue entries
16. #8743 fix(coding-agent): ignore stale tool image conversions
17. #9425 feat(ai): add DeepSeek V4.1 Flash
18. #9416 fix(coding-agent): accept dots and underscores in skill names

Now let me write the daily report in Chinese.

Key themes I observe:
- TUI/display bugs (cursor leaks, overlays, images)
- AI provider/model issues (Bedrock, OpenAI, Anthropic, Gemini, Fable, DeepSeek)
- Cost/billing accuracy (cache misses, billing rates)
- Performance (OOM, O(n²) parsing)
- Extension API limitations
- Tool timeout defaults
- Windows compatibility
- Session management
- Skills naming conventions

Let me draft the report now.</think>

# Pi 社区动态日报 · 2026-09-11

> 数据来源：[github.com/earendil-works/pi](https://github.com/earendil-works/pi) ｜ 统计窗口：过去 24 小时

---

## 📌 今日速览

过去 24 小时 Pi 仓库进入集中修复期：**TUI 显示层**的多项光标与图像渲染 Bug 集中曝光，**AI 层**的多个 Provider（Bedrock、Anthropic gateway、Fable、DeepSeek）出现模型降级与计费准确性问题。多个高优先级修复 PR 已落地，包括流式工具参数解析性能优化（O(n²)→O(n)）、光标标记泄漏修复、以及默认 3 分钟工具超时机制。

---

## 🚀 版本发布

过去 24 小时 **无新版本发布**。当前最新版本仍为此前发布的 `0.85.1`。

---

## 🔥 社区热点 Issues

以下按讨论热度与实际影响力综合排序：

### 1. [#9323](https://github.com/earendil-works/pi/issues/9323) — Improve fireworks-specific config ⭐14 评论
Fireworks provider 的特定配置存在缺陷，已被关闭但讨论充分。属于长期反复出现的 Provider 适配质量问题，社区希望建立统一的 provider 配置抽象。

### 2. [#8061](https://github.com/earendil-works/pi/issues/8061) — Context budget ignores maxTokens output reservation（OPEN）
**关键 Bug**：在 Gemini 1M 上下文场景下，input 仅占 78% 时仍被拒，且 compact-and-retry 恢复失败。属于上下文预算算法的核心缺陷，影响大上下文模型的可靠性。

### 3. [#8133](https://github.com/earendil-works/pi/issues/8133) — Per-model compaction settings 👍5
**高赞同功能请求**：提议 `compaction.profiles` 按模型 ID 覆盖压缩参数。说明不同模型（长上下文 vs 短上下文）对 reserveTokens 的需求差异显著。

### 4. [#8810](https://github.com/earendil-works/pi/issues/8810) — Extension-registered providers ignore defaultProvider/defaultModel
Extension 通过 `pi.registerProvider()` 注册的 provider 在新会话中**间歇性**忽略默认配置，是隐蔽但严重的 session 启动缺陷。

### 5. [#9294](https://github.com/earendil-works/pi/issues/9294) — claude-fable-5 allowedFallbackModels 包含 API 已拒绝的模型
`claude-fable-5` 的内置 fallback 列表仍包含 `claude-opus-4-8`，每次请求都立即返回 400。模型目录与上游同步滞后问题。

### 6. [#9265](https://github.com/earendil-works/pi/issues/9265) — O(n²) tool-call argument re-parsing freezes event loop
`openai-completions` 流式 handler 每个 delta 都重新解析累积 JSON，**导致单线程守护进程中多个 agent 会话卡死**。性能缺陷 + 多 PR 跟进。

### 7. [#8752](https://github.com/earendil-works/pi/issues/8752) — bedrock-converse usage.input 未跨模型族归一化 👍5
Anthropic 报告 cache 净量、OpenAI 报告总量，bedrock-converse 直接复制 `inputTokens`，导致**误报 cache miss + 输入费用翻倍**。计费准确性关键 Bug。

### 8. [#9276](https://github.com/earendil-works/pi/issues/9276) — grep 工具带 context 行导致 OOM
**JavaScript heap out of memory**：grep 在 context>0 时读取每个匹配文件全部内容，最终被日志文件灌爆。headless SDK 使用者尤其受影响。

### 9. [#9460](https://github.com/earendil-works/pi/issues/9460) — bash 工具无默认超时，子进程忽略 SIGTERM 会死锁
无 timeout 的 bash 调用遇 SIGTERM-忽略的后代会**永久挂起整个 agent 会话**。安全性与可靠性问题，已被 [#9431](https://github.com/earendil-works/pi/pull/9431) 修复。

### 10. [#9462](https://github.com/earendil-works/pi/issues/9462) — ctx.ui.notify 竞态，扩展 API 缺乏替代
`ctx.ui.notify` 为 last-wins 语义，多个扩展无法并行展示信息。反映扩展 API 设计仍有缺口。

---

## 🛠 重要 PR 进展

### 1. [#9461](https://github.com/earendil-works/pi/pull/9461) — defer streamed tool argument parsing until read
**修复 [#9265](https://github.com/earendil-works/pi/issues/9265)**：将累积 JSON 重解析延后到 `.arguments` 首次访问（带缓存），把流式工具调用从 O(n²) 降为 O(n)，解决事件循环冻结。

### 2. [#9431](https://github.com/earendil-works/pi/pull/9431) — 默认 3 分钟超时应用于所有工具调用
修复 [#9460](https://github.com/earendil-works/pi/issues/9460)：为所有工具（不仅是 bash/powershell）设置默认 3 分钟超时，避免挂死会话。

### 3. [#9441](https://github.com/earendil-works/pi/pull/9441) — 防止光标标记泄漏到终端
**修复 [#9332](https://github.com/earendil-works/pi/issues/9332)、[#9257](https://github.com/earendil-works/pi/issues/9257)**：将 APC 光标标记视为位置元数据而非持久样式，避免 `CURSOR_MARKER` 泄漏到终端输出。

### 4. [#9297](https://github.com/earendil-works/pi/pull/9297) — 移除 Fable 5 的无效 fallback 目标
**修复 [#9294](https://github.com/earendil-works/pi/issues/9294)**：保留 Opus 5 为唯一内置 fallback，覆盖 Fable 5/5.1 的所有 fallback 元数据。

### 5. [#9443](https://github.com/earendil-works/pi/pull/9443) — 捕获并重放 Gemini thoughtSignature
修复 openai-completions 流式处理中 `thoughtSignature` 丢失问题——这是 Gemini 通过 OpenAI 兼容网关时的关键签名。

### 6. [#9442](https://github.com/earendil-works/pi/pull/9442) — 兼容代理可启用 prompt cache key
新增 `compat.supportsPromptCacheKey` 配置项，允许兼容代理在默认短保留下接收 session key，提升缓存命中率。

### 7. [#9425](https://github.com/earendil-works/pi/pull/9425) — 新增 DeepSeek V4.1 Flash
按 `deepseek-flash` 官方 ID 与 `deepseek-v4.1-flash` models.dev ID 双向暴露，应用 Flash 思维级别。

### 8. [#9434](https://github.com/earendil-works/pi/pull/9434) — 允许扩展向 session 系统提示追加内容
**修复 [#9432](https://github.com/earendil-works/pi/issues/9432)**：`session_start` 处理器可返回 append-only `systemPromptAppend`，多扩展叠加并折叠到会话快照。

### 9. [#9459](https://github.com/earendil-works/pi/pull/9459) — resume 时优先采用记录的 model_change
基于 @pwguler 诊断：恢复会话时优先使用 `model_change` 事件而非 assistant 消息中的模型字段，避免模型切换错乱。

### 10. [#9438](https://github.com/earendil-works/pi/pull/9438) — 让 overlay 覆盖终端图像
修复 Ghostty 中发送截图后再开 `/agents` 时图像仍浮在 overlay 之上的问题：图像行不再原样返回。

---

## 📈 功能需求趋势

| 方向 | 典型 Issue | 关注度 |
|------|-----------|-------|
| **Provider / 模型适配** | #9323, #9294, #8752, #9331, #9086, #9394, #9425(PR) | 🔥🔥🔥🔥🔥 |
| **TUI / 终端渲染** | #9257, #9268, #9332, #2374, #8799(PR), #8744(PR) | 🔥🔥🔥🔥 |
| **性能与稳定性** | #9265(O(n²)), #9276(OOM), #8061(上下文预算) | 🔥🔥🔥🔥 |
| **扩展 API 能力** | #8810, #9462, #9434(PR) | 🔥🔥🔥 |
| **会话 / 模型切换** | #9459(PR), #9463, #5366 | 🔥🔥 |
| **计费 / 缓存准确性** | #8752, #8463, #9210 | 🔥🔥🔥 |
| **平台兼容性 (Windows)** | #9361, #9464 | 🔥🔥 |
| **新模型支持** | #9425(DeepSeek V4.1 Flash) | 🔥🔥 |

**总结**：当前社区最关注的是**多 Provider 适配质量**与**TUI 渲染正确性**两大主线，**性能与计费准确性**是紧随其后的高优先级方向，**扩展 API 设计**开始显现结构性缺口。

---

## 💡 开发者关注点

### 🔴 高频痛点
1. **Provider 行为差异**：Anthropic、OpenAI、Gemini、DeepSeek、ZAI、Mistral 在 cache、reasoning、function call 上的语义差异让 pi 必须为每个 provider 单独打补丁——`#8752`（usage 归一化）、`#9331`（Bedrock reasoning effort 未发送）、`#9086`（Mistral GLM 不推理）都源于此。
2. **TUI 边界条件**：光标标记泄漏（#9257, #9332）、overlay 与图像叠加（#9268, #9438）、空 alt 隐藏 URL（#9268）——终端输出层仍存在大量细节边界 case。
3. **超时/资源保护缺失**：bash 工具无默认超时（#9460）已通过 #9431 修复，但 grep OOM（#9276）、流式 O(n²) 重解析（#9265）表明 SDK 缺乏通用的资源保护机制。
4. **Windows 兼容性**：#9361（shellPath 非确定性忽略 + WSL 兜底）、#9464（TUI 行重复渲染）暴露 Windows 路径下的稳定性问题。
5. **扩展 API 不完善**：`ctx.ui.notify` 竞态（#9462）、`defaultProvider` 间歇忽略（#8810）、会话系统提示追加（#9432/9434）反映生态扩张过程中 API 设计滞后于需求。

### 🟢 社区积极信号
- **自我修复文化强**：多个 Bug 报告附带了详细复现 trace、cor dump 分析（#8061、#9276、#9460），社区正从"报告"转向"诊断+修复提案"。
- **Provider 同步节奏快**：DeepSeek V4.1 Flash、Claude Fable 5、GPT 5.6 等新模型的支持在 PR 中持续更新。
- **TUI 体验持续打磨**：#8799（更美观的 Working spinner）、#9438（overlay 正确性）显示开发者对交互细节的重视。

---

*报告生成时间：2026-09-11 ｜ 数据窗口：过去 24 小时*

</details>

---
*本日报由 [Big Model Radar](https://github.com/96loveslife/big_model_radar) 自动生成。*
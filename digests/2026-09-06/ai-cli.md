# AI CLI 工具社区动态日报 2026-09-06

> 生成时间: 2026-09-06 03:56 UTC | 覆盖工具: 8 个

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

<think>The user wants me to create a comprehensive comparative analysis report based on the daily dynamics of 7 AI CLI tools (Claude Code, OpenAI Codex, Gemini CLI, GitHub Copilot CLI, Kimi Code CLI, OpenCode, jcode, pi). Let me carefully analyze the data and create a well-structured, professional report in Chinese.

Let me extract the key data points:

**Activity Summary:**
- Claude Code: v2.1.263 release, 50+ issues, 3 PRs
- OpenAI Codex: No release, 50 issues, 34 PRs
- Gemini CLI: v0.60.0-nightly release, 50 issues, 22 PRs
- GitHub Copilot CLI: No release, 21 issues, 0 PRs
- Kimi Code CLI: No release, 5 issues, 1 PR
- OpenCode: No release, 50 issues, 50 PRs
- jcode: No release, 16 issues, 1 PR
- pi: v0.85.1 release, 50 issues, 20 PRs

**Common themes across tools:**
1. Windows compatibility issues (Claude Code, Codex, Copilot, Kimi, pi)
2. GPT-6 Astra integration (Codex, pi, Copilot mentions)
3. MCP/Agent tooling issues (Claude Code, Copilot, OpenCode)
4. Session/history management bugs (Codex #35746, OpenCode #35690)
5. Subagent reliability (Gemini, Claude Code, OpenCode)
6. Plugin/extensibility (Claude Code Function Hooks, OpenCode optimize.ts)
7. Memory systems (jcode, Gemini Auto Memory)
8. Voice/realtime (Codex voice/WebRTC PRs)
9. TUI rendering issues (multiple)
10. Cross-platform/desktop stability

Let me write a comprehensive comparative report now.</think>

# 2026-09-06 AI CLI 工具横向对比分析报告

---

## 1. 生态全景

当前 AI CLI 工具生态已进入**多极并立、快速分化**的成熟阶段：主流厂商（Anthropic、OpenAI、Google、GitHub、Moonshot）持续投入主线迭代，独立/新兴项目（OpenCode、jcode、pi）则以高频 PR 和差异化能力抢占细分市场。今日最显著的行业信号有三：**一是 GPT-6 Astra 作为"模型路由器"的灰度上线触发了多客户端的兼容性连锁问题**；**二是"Windows 平台体验洼地"已成跨工具共性痛点**；**三是 Subagent / Plugin 体系从"亮点功能"变为"可靠性重灾区"**，反映行业正在从"功能覆盖"转向"工程成熟度"的竞争。

---

## 2. 各工具活跃度对比

| 工具 | 版本发布 | Issues 更新 | PR 更新 | 综合活跃度 | 备注 |
|------|---------|------------|---------|----------|------|
| **Claude Code** | ✅ v2.1.263 | ~50 | 3 | ⭐⭐⭐⭐ | 社区议题集中，PR 数偏少 |
| **OpenAI Codex** | ❌ 无 | ~50 | 34 | ⭐⭐⭐⭐⭐ | 语音/WebRTC 基础设施密集合并 |
| **Gemini CLI** | ✅ v0.60.0-nightly | ~50 | 22 | ⭐⭐⭐⭐ | 自动化版本机器人同步活跃 |
| **GitHub Copilot CLI** | ❌ 无 | 21 | 0 | ⭐⭐ | 活跃度显著低于其他工具 |
| **Kimi Code CLI** |  无 | 5 | 1 | ⭐ | 社区体量小，问题密度低 |
| **OpenCode** | ❌ 无 | ~50 | 50 | ⭐⭐⭐⭐⭐ | Issue 与 PR 并列高水位 |
| **jcode** | ❌ 无 | 16 | 1 | ⭐⭐ | 维护者精力集中，PR 节奏放缓 |
| **pi** | ✅ v0.85.1（紧急修复） | ~50 | 20 | ⭐⭐⭐⭐⭐ | 0.85.0 漏依赖引发连锁修复 |

---

## 3. 共同关注的功能方向

### 3.1 🪟 Windows 平台兼容性（7/8 工具覆盖）

这是本次对比中**最广泛的共性痛点**：

| 工具 | 核心问题 |
|------|---------|
| Claude Code | 启动崩溃（Silo/Job Object 泄漏）、冻结消失、OAuth 失效、桌面端 always-on-top 误判 |
| OpenAI Codex | Desktop 启动失败（cua_node 拷贝）、Remote + Android 崩溃风暴、Computer Use 21-42s 延迟 |
| Gemini CLI | Browser subagent 在 Wayland 下失败、Shell 命令"Waiting input"卡住 |
| Copilot CLI | Linux JS 堆 OOM、Windows 25H2 沙箱不支持、远程会话 Android 不渲染 |
| Kimi CLI | Zed ACP 在 Windows 启动失败 |
| pi | Windows Terminal 输入行重绘、IME 候选框错位、全屏图像渲染异常 |
| jcode | Windows Terminal 多行粘贴自动提交、右键粘贴无响应 |

**诉求汇总**：跨平台一致的 TUI 体验、终端能力探测层、进程生命周期管理、OAuth 跨进程持久化。

---

### 3.2 🤖 Subagent / Agent 体系可靠性（5/8 工具覆盖）

| 工具 | 核心问题 |
|------|---------|
| Claude Code | Agent 工具忽略 subagent 定义、system prompt 透传错误、ListAgents 引用不存在工具 |
| Gemini CLI | Subagent 卡死、MAX_TURNS 误报 GOAL success、模型默认不调用 skills/sub-agents |
| Copilot CLI | `agentStop` 在子 agent 触发致 `/review` 卡死、内置 research agent 调用不存在 MCP 工具 |
| OpenCode | WebChat Agent 模式 LLM 自问自答、prompt 与工具发现不一致 |
| jcode | 记忆检索三大缺口（近字面/陈旧/中文） |

**核心诉求**：Subagent 终止状态语义标准化、调度可视化、prompt 与工具发现的一致性、长上下文记忆系统。

---

### 3.3 🔌 插件可编程性 / MCP 工具链（4/8 工具覆盖）

| 工具 | 核心议题 |
|------|---------|
| Claude Code | **#91870 Function Hooks 提案**（112 评论，72 👍，旗舰议题） |
| OpenAI Codex | MCP OAuth scope 缺失（#20503 ⭐11）、HTTP-transport MCP 工具"假连接" |
| Copilot CLI | MCP `tools/list` 刷新超时致工具永久失效（#4731）、JSON-RPC 序列化破坏 canvas 参数（#4721） |
| OpenCode | Session 生命周期 hooks（#28695）、`optimize.ts` 模型工具剪裁（#47559） |

**核心诉求**：可中断/可恢复的工具调用、显式的失败信号、声明式的工具配置、模型×工具的最优匹配。

---

### 3.4  会话历史与状态管理（4/8 工具覆盖）

| 工具 | 核心问题 |
|------|---------|
| OpenAI Codex | `RolloutLine` 分页 ordinal 复用 bug（#35746，39 评论，**最高热度**） |
| Copilot CLI | Worktree 丢失（#4734）、OTel 重连后 span 缺输入消息（#4726） |
| OpenCode | 升级后会话历史消失（#35690）、v1.17.x 多版本数据兼容性问题 |
| Gemini CLI | checkpoint history 非数组导致崩溃（已 PR #29195 修复） |

**核心诉求**：版本升级时的事务保护机制、回滚路径、跨设备同步（Claude Code #66303 虽被合并为 duplicate 但需求未被官方回应）。

---

### 3.5 🌐 GPT-6 Astra 新模型接入（3/8 工具覆盖）

| 工具 | 核心问题 |
|------|---------|
| OpenAI Codex | 模型选择器缺失、WebSocket 重连消耗额度、安全策略过度触发 |
| pi | Copilot 路由错误走 `/chat/completions`（#9209）、Sonnet-5 经 Vercel Gateway 13% edit 截断（#9212）、1h 缓存按 5m 计费（#9210） |
| Copilot CLI | 新模型被企业策略灰显（#4272，已关）、GPT-5 mini 切换后中途停摆（#4732） |

**核心诉求**：模型路由按 provider×model 维度细化、可控的降级策略、计费透明度。

---

## 4. 差异化定位分析

### 4.1 功能侧重对比

| 工具 | 核心定位 | 差异化能力 |
|------|---------|----------|
| **Claude Code** | 深度编程工作流 | Function Hooks / Plugin 体系最完善，Fable 模型路由 |
| **OpenAI Codex** | 全栈桌面 + 多模态 | Computer Use、语音/WebRTC（密集投入）、GPT-6 Astra 原生 |
| **Gemini CLI** | 多 Agent + 工具链生态 | AST 感知文件读取、Auto Memory、a2a-server |
| **Copilot CLI** | GitHub 工作流深度集成 | OTel 可观测性、IDE/桌面联动、会话持久化 |
| **Kimi CLI** | 第三方 Agent 接入 | K2 Thinking 模型在 Claude Code 中的切换体验 |
| **OpenCode** | 多 Provider 抽象 + 桌面端 | TUI/Desktop 统一、SQLite 本地存储、optimize.ts 插件化 |
| **jcode** | 单作者精品 TUI | 浏览器桥接（Playwright 风格）、跨终端协议适配 |
| **pi** | 轻量实验性 Coding Agent | OpenAI Responses API 深度集成、NixOS 支持、in-line skill 调用 |

### 4.2 目标用户差异

- **企业团队**：Claude Code、Copilot CLI（流程规范、权限隔离）
- **独立开发者 / 极客**：OpenCode、jcode、pi（灵活、可定制、轻量）
- **多模型研究者**：pi（Responses API 深度集成）、Codex（GPT-6 Astra）
- **Agent 重度用户**：Gemini CLI（Subagent + 工具链最丰富）、OpenCode（plugin hooks）
- **中文用户**：Kimi CLI（虽然今日活跃度最低，但 K2 Thinking 在第三方场景有差异化价值）

### 4.3 技术路线对比

| 维度 | 主流厂商路线 | 独立项目路线 |
|------|------------|------------|
| **模型抽象** | 自家模型为主，开放第三方（如 Claude Code 接入 GPT） | 完全中立，强调 provider 适配（OpenCode optimize.ts） |
| **存储** | 云端会话优先（Codex、Copilot） | 本地优先（OpenCode SQLite、jcode 本地 embedding） |
| **可观测性** | 内置 OTel/Telemetry（Copilot） | 社区 DIY（OpenCode 自建 catalog refetch 合并） |
| **构建系统** | Bazel 改造（Codex native voice） | 简化打包（pi Nix flake、jcode 单文件） |

---

## 5. 社区热度与成熟度

### 5.1 成熟度梯队

**第一梯队（高活跃度 + 高 Issue/PR 比 + 快速响应）**
- **OpenAI Codex**：34 条 PR 中相当数量已合并，反映活跃的内部开发节奏
- **OpenCode**：50 Issue + 50 PR 完美对仗，社区与维护者互动最密集
- **pi**：紧急修复响应速度极快（0.85.0 漏依赖 → 0.85.1 当日修复）

**第二梯队（高 Issue + 中等 PR，部分需求积压）**
- **Claude Code**：50 Issue 但仅 3 PR，社区议题影响力大（#91870 单议题 184 关注）但官方响应慢
- **Gemini CLI**：22 PR 集中修复模型 pin、hooks 迁移，节奏稳健

**第三梯队（小社区 + 精品路线）**
- **jcode**：单作者模式，PR 节奏放缓但质量高（#1181 完整复现验证流程）
- **Kimi CLI**：5 Issue 体量小但反映出 IDE 集成和跨平台是下一阶段重点

**特殊梯队（活跃度结构性偏低）**
- **GitHub Copilot CLI**：21 Issue 0 PR，可能是策略性"低公开度"运营

### 5.2 社区健康度信号

- ✅ **正面**：OpenCode、pi 的"Issue 闭环率"高；Claude Code 单议题讨论深度领先
- ⚠️ **警示**：Claude Code v2.1.263 changelog 简略 + PR 数偏低，可能存在官方维护节奏放缓迹象；Codex 历史分页 bug（#35746）从 7 月延续到 9 月
- 🚨 **风险**：Gemini CLI Subagent 卡死高赞（#21409 👍8）反映主线流程可靠性未达标

---

## 6. 值得关注的趋势信号

### 趋势 1：🚨 "静默失败"成为最危险的反模式

多工具同时出现"不报错但行为错误"的 case：
- Claude Code：Bash 截断伪装成引号错误（#85111）
- Codex：MCP HTTP 显示已连接但工具不可达（#86875）
- OpenCode：Go 订阅用量百分比求和误算 100%（#47547）
- jcode：Retry-After 被静默截断至 60s（#1183）

**行业影响**：未来 6-12 个月，**可观测性 + 显式失败信号**将从"加分项"变为"基本盘"。

---

### 趋势 2：🔌 Plugin / Hook 体系从"功能"升级为"竞争壁垒"

- Claude Code Function Hooks 提案（#91870）184 关注 = 用户对**可编程性**的强烈诉求
- OpenCode `optimize.ts`（#47559）= 按模型族剪裁工具集，是**性能 + 准确性**的双重优化
- pi 中句 skill 调用（#9214）= **prompt engineering 工作流**的范式转变

**对开发者的启示**：下一个差异化点不在"模型能不能用"，而在"**能不能以低成本接入我的工作流**"。

---

### 趋势 3：🌐 GPT-6 Astra 正在成为"模型路由器"标准

- Codex / pi / Copilot 均出现 GPT-6 Astra 灰度问题
- pi 的 #9210（1h 缓存按 5m 计费）和 #9211（Vercel Gateway routing 失效）揭示出**多 provider 路由的计费语义不一致**是行业级难题

**对开发者的启示**：关注**模型路由抽象层**（如 pi 的 `vercelGatewayRouting`、OpenCode 的 `optimize.ts`），选择能精细控制成本与缓存的工具。

---

### 趋势 4：🪟 "Windows 是体验洼地"已成行业共识

7/8 工具均报告了 Windows 特定问题，且**没有任何一家提供了官方系统化的解决方案**。

**对开发者的启示**：
- 短期：在 Windows 上**避免使用重度 TUI 功能**（依赖 Ghostty 焦点事件、Windows Terminal bracketed paste 等）
- 中期：评估工具时优先考虑**是否有专门的 Windows 工程师 + 公开 issue tracker**
- 长期：可关注 **OpenCode 桌面端 / jcode 终端能力探测层**等渐进式方案

---

### 趋势 5：📊 "跨设备同步"和"会话持久化"是下一代标准功能缺失

- Claude Code #66303 同步 `~/.claude/` 需求被合并为 duplicate 但未回应
- Copilot #3498 远程会话 Android 不渲染
- OpenCode #35690 升级后历史消失、#29071 Desktop 与 TUI 会话互不可见

**对开发者的启示**：评估工具时，**会话层的数据生命周期管理**应作为核心 KPI（升级兼容性、跨设备可访问性、失败可恢复性），而非仅看模型能力。

---

### 趋势 6：🤖 Subagent 可靠性是 Agent 编排的"隐形天花板"

- Gemini CLI：卡死 + 状态误报 + 默认不调用（三连击）
- Claude Code：subagent 定义被忽略、prompt 透传错误
- OpenCode：WebChat LLM 自问自答

**对开发者的启示**：当前阶段的 Subagent **不能作为生产关键路径的依赖**。建议在工具链中：
- 加一层**超时/重试包装**
- **记录每次 Subagent 终止的真实原因**（不要相信 GOAL/MAX_TURNS 报告值）
- 关键决策路径**仍由主 Agent 单步执行**

---

## 总结：给技术决策者的建议

| 场景 | 推荐工具 | 关键理由 |
|------|---------|---------|
| **企业生产环境** | Claude Code / Copilot CLI | 流程规范、权限隔离、可观测性 |
| **多模型实验 / 研究** | pi / OpenCode | Provider 抽象清晰，路由可控 |
| **Agent 重度工作流** | Gemini CLI / OpenCode | Subagent 体系相对成熟 |
| **中文生态 / K2 Thinking** | Kimi CLI | 唯一原生支持的国产模型 CLI |
| **精品 TUI 体验** | jcode / pi | 轻量、可定制、社区响应快 |
| **全栈桌面 + 多模态** | OpenAI Codex | 语音/WebRTC/Computer Use 投入最重 |

**核心建议**：
1. 短期**避免将任何 Subagent 投入关键路径**——可靠性尚未跨过工程化阈值
2. 优先选择**Issue 闭环率高、PR 响应快**的工具（OpenCode、pi > Claude Code）
3. 在 Windows 平台**准备降级方案**，不要押注任何工具的 Windows 体验
4. 关注 GPT-6 Astra 的**灰度演进**，未来 4-8 周会成为模型路由新标准

---

*报告基于 2026-09-06 八个主流 AI CLI 工具的 GitHub 公开数据生成*
*数据快照时间：2026-09-06 UTC*

---

## 各工具详细报告

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills 社区热点

> 数据来源: [anthropics/skills](https://github.com/anthropics/skills)

<think>Let me analyze the data from the anthropics/skills repository and generate a comprehensive report. I need to:

1. Look at the top PRs by engagement and identify the most discussed skills
2. Analyze community issues for trends
3. Identify high-potential unmerged PRs
4. Summarize ecosystem insights

Let me note something important: the PR data shows "评论: undefined" for all PRs - meaning comment counts aren't available. However, the issues DO have comment data. So for PR ranking, I'll need to use other signals like recency, technical significance, and whether they're addressing known issues.

Wait, looking again - the instructions say "热门 Pull Requests（按评论数排序，共 50 条，展示前 20 条）" but all show undefined comments. This appears to be a data limitation. I should work with what's meaningful:
- PRs that fix known issues (linked to issues with high comments)
- Recent high-impact PRs
- PRs with specific technical significance

Let me identify the key signals:

**PRs addressing high-comment issues:**
- #1298 fixes #556 (12 comments) - skill-creator run_eval.py 0% recall bug
- #1099 also fixes Windows run_eval.py crash
- #1050 also Windows subprocess bugs
- #1607 fixes #1603 (claude-api model retirement)
- #1602 fixes multiple issues including mcp-builder (#1390 has 4 comments)

**High-signal PRs by content significance:**
- #514 document-typography - quality of life for all users
- #1615 scnet-hpc - HPC cluster management
- #486 ODT skill - document format support
- #1628 Hivemind - zero-cost multi-agent orchestration
- #1627 Buffer API - social media scheduling
- #1367 self-audit - quality gate
- #723 testing-patterns - testing methodology
- #568 ServiceNow - enterprise platform
- #525 pyxel - retro game dev

**Top Issues by comments:**
- #492 (43 comments) - Security: namespace impersonation
- #228 (16 comments) - org-wide skill sharing
- #556 (12 comments) - run_eval.py 0% trigger rate
- #62 (10 comments) - skills disappearing
- #1329 (9 comments) - compact-memory proposal
- #202 (8 comments, closed) - skill-creator best practice
- #412 (6 comments, closed) - agent-governance proposal
- #189 (6 comments) - duplicate skills issue

Let me organize this into the requested report format. I'll write in Chinese as the user wrote in Chinese.

For the Skills ranking, since PR comment counts are undefined, I'll rank by:
1. PRs that fix high-comment issues (most discussed)
2. Strategic importance (new categories)
3. Recency and engagement signals

Let me build the report now.</think>

# Claude Code Skills 社区热点报告
**数据截止：2026-09-06 · 数据源：github.com/anthropics/skills**

> ⚠️ **数据说明**：本次 PR 列表的评论数均显示为 undefined，下文 PR 排序综合参考"是否修复高评论 Issue、技术影响面、提交活跃度与新近度"等信号综合判断。

---

## 1. 热门 Skills 排行

| # | Skill / PR | 关注度信号 | 状态 |
|---|---|---|---|
| 1 | **skill-creator 修复套件** — [#1298](https://github.com/anthropics/skills/pull/1298)、[#1099](https://github.com/anthropics/skills/pull/1099)、[#1050](https://github.com/anthropics/skills/pull/1050) | 三条 PR 共同修复 Issue [#556](https://github.com/anthropics/skills/issues/556)（12 评论）的 `run_eval.py` 0% 召回率/Win 崩溃 Bug，影响整个描述优化闭环。社区出现 10+ 次独立复现，是当前最被诟病的"地基级"缺陷 | OPEN |
| 2 | **document-typography** — [#514](https://github.com/anthropics/skills/pull/514) | 解决 AI 生成文档中的孤行/寡行/编号错位等排版痛点，覆盖每个文档场景，长达 9 天活跃迭代 | OPEN |
| 3 | **scnet-hpc** — [#1615](https://github.com/anthropics/skills/pull/1615) | HPC 集群（SCNet）专属 Skill，涵盖 SSH/Slurm/profile 工作流，填补科研计算场景空白 | OPEN |
| 4 | **ODT（OpenDocument）** — [#486](https://github.com/anthropics/skills/pull/486) | 补齐开放文档格式（.odt/.ods）创建与转换能力，回应开源/ISO 标准用户长期诉求 | OPEN |
| 5 | **Hivemind：零成本多 Agent 编排** — [#1628](https://github.com/anthropics/skills/pull/1628) | 把机械性工作下放给免费模型，主模型只做规划/审核；提出"上下文才是稀缺资源"的新范式 | OPEN |
| 6 | **self-audit 质量门** — [#1367](https://github.com/anthropics/skills/pull/1367) | 交付前自动审计机制，文件级机械校验 + 4 维推理审计，对应 Issue [#1385](https://github.com/anthropics/skills/issues/1385)（4 评论）三道质量门提案 | OPEN |
| 7 | **frontend-design 改进** — [#210](https://github.com/anthropics/skills/pull/210) | 重写前端设计 Skill，提升可执行性与一致性 | OPEN（已 2 个月+ 仍 open） |
| 8 | **Buffer API Skill** — [#1627](https://github.com/anthropics/skills/pull/1627) | 跨 Agent 可移植的社交媒体发布技能，覆盖 GraphQL 全流程，9 月初仍在迭代 | OPEN |

**讨论热点**：
- **Skill-Creator 自指缺陷**：跑 eval 的工具自己不能用，被指"在噪声上做优化"（[#1298](https://github.com/anthropics/skills/pull/1298)）
- **跨平台兼容性**：Windows 子进程读取、编码、PATHEXT 等成为高频修复对象（[#1050](https://github.com/anthropics/skills/pull/1050)、[#1099](https://github.com/anthropics/skills/pull/1099)）
- **细节 Bug 影响整体**：PDF 大小写引用、YAML 引号、Word `w:id` 冲突——"小修小补"类 PR 占比明显上升

---

## 2. 社区需求趋势

按 Issue 评论数与议题密度归纳，2026 上半年社区最集中的需求方向如下：

### 🔴 安全与信任（最热）
- **Issue [#492](https://github.com/anthropics/skills/issues/492)（43 评论）**：社区 Skill 冒用 `anthropic/` 命名空间造成信任边界漏洞。这是整个仓库**评论数最高的 Issue**，反映"Skills 分发模型的可信度"已成头号议题。

### 🟠 组织级协作能力
- **Issue [#228](https://github.com/anthropics/skills/issues/228)（16 评论，👍8）**：呼吁在 Claude.ai 内支持组织内 Skill 一键共享，替代当前"下载→Slack 发送→手动上传"的低效链路。

### 🟡 评测/触发机制可靠性
- **Issue [#556](https://github.com/anthropics/skills/issues/556)（12 评论，👍7）** + **Issue [#1487](https://github.com/anthropics/skills/issues/1487)（4 评论）** + **Issue [#1390](https://github.com/anthropics/skills/issues/1390)（4 评论）**：三条 Issue 共同指向 Skill 注入过载（~156k tokens 单次注入撑爆上下文）、eval 触发率 0%、MCP 评测返 0/N——社区已意识到"Skill 自身的可观测性/可评测性"是核心瓶颈。

### 🟢 新兴 Skill 提案
- **compact-memory（[#1329](https://github.com/anthropics/skills/issues/1329)，9 评论）**：长时 Agent 状态压缩的符号化记法
- **agent-governance（[#412](https://github.com/anthropics/skills/issues/412)，6 评论，已关闭）**：策略执行、威胁检测、信任评分、审计
- **Reasoning Quality Gate（[#1385](https://github.com/anthropics/skills/issues/1385)，4 评论）**：前置校准 → 对抗审查 → 交付验证三道闸
- **Skills 暴露为 MCP（[#16](https://github.com/anthropics/skills/issues/16)，4 评论）**：长期呼声
- **企业平台集成**：ServiceNow（[#568](https://github.com/anthropics/skills/pull/568)）、SharePoint（[#1175](https://github.com/anthropics/skills/issues/1175)）

### 📦 体验类
- **Issue [#62](https://github.com/anthropics/skills/issues/62)（10 评论）**：用户 Skills 莫名消失
- **Issue [#189](https://github.com/anthropics/skills/issues/189)（6 评论，👍9）**：`document-skills` 与 `example-skills` 内容重复污染上下文
- **Issue [#1362](https://github.com/anthropics/skills/issues/1362)（3 评论）**：web-artifacts-builder 在 pnpm ≥10 下构建失败

---

## 3. 高潜力待合并 Skills

以下 PR 仍处于 OPEN，但因解决高评论 Issue 或开启新场景，具备较高近期合并概率：

| Skill | PR | 合并催化剂 |
|---|---|---|
| **run_eval.py 全套修复** | [#1298](https://github.com/anthropics/skills/pull/1298) | 修复 [#556](https://github.com/anthropics/skills/issues/556)（12 评论）+ 10+ 独立复现，是阻塞 skill-creator 使用的硬卡口 |
| **mcp-builder 评测/序列化/编码修复** | [#1602](https://github.com/anthropics/skills/pull/1602) | 一并修复 [#1390](https://github.com/anthropics/skills/issues/1390)，涉及 MCP 评测可信度 |
| **claude-api 退役模型清理** | [#1607](https://github.com/anthropics/skills/pull/1607) | 修复 [#1603](https://github.com/anthropics/skills/issues/1603)，影响所有调用 Claude API 的用户 |
| **Hivemind 多 Agent 编排** | [#1628](https://github.com/anthropics/skills/pull/1628) | "零成本"叙事契合降本需求，8 月底高活跃 |
| **self-audit v1.3.0** | [#1367](https://github.com/anthropics/skills/pull/1367) | 对应 [#1385](https://github.com/anthropics/skills/issues/1385) 三道质量门提案，思路完整 |
| **docx tracked-change `w:id` 冲突修复** | [#541](https://github.com/anthropics/skills/pull/541) | 直接修复文档损坏类 Bug，几乎无争议 |
| **PDF / skill-creator YAML 引号修复** | [#538](https://github.com/anthropics/skills/pull/538)、[#539](https://github.com/anthropics/skills/pull/539) | 一行修复类 Bug，等待 review |
| **skill-quality-analyzer / skill-security-analyzer** | [#83](https://github.com/anthropics/skills/pull/83) | 自 2025-11 起开放至今，与当前安全/质量诉求高度契合 |
| **testing-patterns** | [#723](https://github.com/anthropics/skills/pull/723) | 全栈测试方法论补全，已迭代 1 个月 |
| **ServiceNow 平台** | [#568](https://github.com/anthropics/skills/pull/568) | 企业级大覆盖面，2026-03 提出后持续维护 |

---

## 4. Skills 生态洞察

> **当前社区最集中的诉求是：让 Skill 自己变得"可信、可评测、可共享"——即 Skills 元能力（meta-skills）优先于新功能 Skills 的扩张。**

具体看，三股力量交织在一起：
1. **安全信任危机**（[#492](https://github.com/anthropics/skills/issues/492) 43 评论）要求官方建立命名空间与权限边界；
2. **评测基础设施崩塌**（[#556](https://github.com/anthropics/skills/issues/556)、[#1390](https://github.com/anthropics/skills/issues/1390)、[#1487](https://github.com/anthropics/skills/issues/1487)）让 Skill 描述优化与质量门失去依据；
3. **组织分发缺位**（[#228](https://github.com/anthropics/skills/issues/228)）让好 Skill 难以规模化复用。

这意味着下一阶段生态竞争点不在"谁的 Skill 更多"，而在"谁的 Skill 体系更可信、更可治理、更可协作"。

---

<think>The user wants me to generate a daily report based on GitHub data for Claude Code. Let me analyze the data carefully and structure it according to the requested format.

Let me organize the key information:

**Release:**
- v2.1.263 released with "Bug fixes and reliability improvements"

**Top Issues by comments:**
1. #91870 - Function Hooks enhancement (112 comments, 72 👍) - Major enhancement proposal
2. #53247 - Windows Claude Desktop launch failure (66 comments, 29 👍)
3. #66516 - macOS window always on top (CLOSED as invalid, 31 comments)
4. #87895 - Windows window always on top (CLOSED as invalid, 72 👍)
5. #72123 - Read Out Loud voice degradation (8 comments)
6. #86647 - Cowork session folder bug (7 comments)
7. #89679 - Windows Claude Desktop crash (5 comments)
8. #85111 - Bash tool truncates commands (5 comments)
9. #86875 - HTTP MCP server tools unreachable (4 comments)
10. #74311 - Fable 5 classifier fallback config (3 comments, 6 👍)
11. #66303 - Sync ~/.claude/ across machines (CLOSED as duplicate)
12. #91898 - Claude Desktop MCP timeout
13. #91750 - Claude Desktop registers as handler for docx/pdf/csv
14. #91991 - Remote Control new session bug
15. #91488 - Fable 5.1 unreachable
16. #75944 - Personal Pro/Max subscription blocked
17. #91477 - Fable 5.1 defaults to Bash on Windows
18. #90688 - OAuth refresh token rejected on Windows/VS Code
19. #92337 - Windows WS_EX_TOPMOST issue
20. #91860 - VS Code extension copy regression (CLOSED)
21. #87066 - VS Code skill invocation blocking
22. #92134 - ListAgents SendMessage tool not present
23. #92407 - Auto mode Bash on Windows
24. #92431 - Invalid bug (telework config - not related)
25. #92430 - Cowork unread dot feature request
26. #92411 - Auto-mode classifier denials
27. #92429 - Scheduled task completion bug
28. #92428 - Auto-fix bugs in Fable
29. #92427 - CLI/desktop plugin identity mismatch
30. #92426 - Agent tool ignores subagent definition

**PRs (only 3):**
1. #87077 - Fix invalid YAML frontmatter in agents
2. #87079 - Fix ** glob patterns in security-guidance
3. #89404 - Fix validate-agent.sh script

**Trends:**
- Windows desktop app stability issues (multiple bugs)
- Function hooks / plugin extensibility
- Fable 5 model configuration
- Cross-machine sync of Claude setup
- VS Code extension bugs
- MCP server issues
- Subagent / agent system issues
- Always-on-top window issues (mostly invalid - user error with system settings)
- Scheduled tasks reliability

**Developer pain points:**
- Windows desktop app crashes and process management
- Bash tool truncation
- OAuth token refresh on Windows/VS Code
- Plugin identity consistency between CLI and desktop
- Agent/Subagent tool definitions
- Fable 5 model routing issues
- MCP server reachability

Let me write a professional, concise Chinese daily report now. I need to be detailed but not overly verbose. I'll use proper markdown formatting.

Note: Issue #92431 is about "Telework Configuration" which seems unrelated to Claude Code (probably French HR/payroll context) - it was likely filed in the wrong repo. I should note this or skip it.

Let me write the report now.</think>

# Claude Code 社区动态日报

**日期：2026-09-06**

---

## 今日速览

v2.1.263 小版本发布，以 Bug 修复和稳定性改进为主。今日社区焦点集中在三大方向：**Function Hooks 插件扩展提案**（#91870，112 评论位居榜首）引爆可编程性讨论；**Windows 桌面端的稳定性问题**持续发酵，多个高优崩溃/挂起 Bug 被追踪；**Fable 5 / 5.1 模型路由与降级策略**暴露出分类器回退、平台识别（Windows 下默认 Bash）、订阅计费等多处痛点。

---

## 版本发布

### v2.1.263
- **更新内容**：Bug fixes and reliability improvements（官方未公开详细 changelog）
-  [Release 链接](https://github.com/anthropics/claude-code/releases/tag/v2.1.263)

> 备注：本次版本说明较为简略，建议结合同期关闭的回归类 Issue（如 #91860 VS Code 复制失效）判断实际修复范围。

---

## 社区热点 Issues

| # | Issue | 主题 | 评论 | 👍 | 状态 |
|---|---|---|---|---|---|
| 1 | [#91870](https://github.com/anthropics/claude-code/issues/91870) | **Function Hooks** —— 让插件能力提升 10x | 112 | 72 | OPEN |
| 2 | [#53247](https://github.com/anthropics/claude-code/issues/53247) | Windows 桌面端启动失败（孤儿 Silo / Job Object） | 66 | 29 | OPEN |
| 3 | [#87895](https://github.com/anthropics/claude-code/issues/87895) | Windows 窗口 always-on-top | 17 | 72 | CLOSED-invalid |
| 4 | [#66516](https://github.com/anthropics/claude-code/issues/66516) | macOS 窗口 always-on-top | 31 | 5 | CLOSED-invalid |
| 5 | [#72123](https://github.com/anthropics/claude-code/issues/72123) | Read Out Loud 播放中途音调/速率劣化 | 8 | 1 | OPEN |
| 6 | [#86647](https://github.com/anthropics/claude-code/issues/86647) | Cowork 会话"零连接文件夹"状态错乱 | 7 | 2 | OPEN |
| 7 | [#89679](https://github.com/anthropics/claude-code/issues/89679) | Windows 桌面端"冻结-消失"型崩溃，零日志 | 5 | 0 | OPEN |
| 8 | [#85111](https://github.com/anthropics/claude-code/issues/85111) | Bash 工具静默截断 ~8KB 以上命令 | 5 | 0 | OPEN |
| 9 | [#86875](https://github.com/anthropics/claude-code/issues/86875) | HTTP-transport MCP 工具"不可达"但状态显示已连接 | 4 | 0 | OPEN |
| 10 | [#74311](https://github.com/anthropics/claude-code/issues/74311) | Fable 5 分类器回退的目标模型/effort 不可配 | 3 | 6 | OPEN |

### 重点解读

**#91870 Function Hooks（⭐ 184 关注）**
这是本期最具影响力的提案。作者提出借鉴 Express/Koa 的中间件 `next()` 模型，在插件中暴露对 Claude Code 内部 `$` 对象（含副作用追踪）的钩子能力，允许在不破坏安全模型的前提下深度改造 CLI 行为。社区反响热烈，72 个 👍 表明插件可编程性是普遍诉求。

**#53247 / #89679 Windows 桌面端稳定性双星**
两条 Issue 都聚焦于 Windows 下的进程生命周期管理：前者是崩溃后遗留 Silo/Job Object 导致 0x80070020、必须重启/注销恢复；后者是"冻结后消失"且无任何取证日志。66 + 5 条评论指向 Windows 桌面端仍是当前最薄弱平台。

**#87895 / #66516 always-on-top（已被关闭）**
两个 Issue 累计近 90 👍，但均被标记为 invalid（实为系统层"置顶窗口"开关误触）。说明部分用户对窗口行为的预期与实际产品定位存在沟通缺口，建议官方在首次启动时增加更明显的窗口行为说明。

**#85111 Bash 静默截断**
当命令超过 ~8KB 时，工具不会报错或提示，而是将其伪装成"引号错误"返回。这对 CI 自动化、复杂 shell 管道场景影响极大，且难以排查。

**#86875 MCP HTTP 不可达**
`/mcp` 显示已连接且能列出工具，但实际调用返回 "No such tool available"，且重启后仍存在 —— 是 MCP 集成中的隐性陷阱。

---

## 重要 PR 进展

| # | PR | 内容 | 状态 |
|---|---|---|---|
| 1 | [#87077](https://github.com/anthropics/claude-code/pull/87077) | 修复 pr-review-toolkit 中所有 agent 的非法 YAML frontmatter | OPEN |
| 2 | [#87079](https://github.com/anthropics/claude-code/pull/87079) | 修复 security-guidance 中 `**` glob 不匹配零深度路径 | OPEN |
| 3 | [#89404](https://github.com/anthropics/claude-code/pull/89404) | 修复 validate-agent.sh 在首个 warning 即中止的 bug | OPEN |

### PR 解读

**#87077 修复 agent YAML frontmatter**
因 `description` 字段内的对话文本（如 `Daisy: "..."`）被 YAML 解析器视为嵌套 mapping，导致所有 agent 以空 frontmatter 加载。属于**配置文件正确性问题**，修复后可恢复插件生态的稳定性。

**#87079 修复 security-guidance 中的 glob 语义**
裸 `*` 在 fnmatch 中已可跨 `/`，故 `**/*.ts` 在 security-patterns.json 中**静默排除顶层文件**。这是**安全规则的失败模式**，可能导致权限规则意外放行，需要尽快合并。

**#89404 validate-agent.sh 的 set -e 缺陷**
`((warning_count++))` 在初始 0 时返回 1，触发 `set -e` 中止；导致插件开发自身的 agent 文件被误报为非法。该 PR 修复后能避免"自检器误检自己"的尴尬。

> 注：本期 PR 总数仅 3 条且均为社区贡献的修复型 PR，**无新增功能**。建议关注核心仓库是否有官方维护节奏放缓迹象。

---

## 功能需求趋势

通过对 50 条 Issue 的归纳，社区当前最关注的方向如下：

### 1. 🔌 插件可编程性（Hooks / Plugins）
- #91870 Function Hooks（旗舰议题）
- #92427 CLI 与 Desktop 解析出不同 plugin identity

### 2. ️ Windows 桌面端质量
- 启动崩溃 #53247、运行期崩溃 #89679、OAuth 失效 #90688、Alt+Tab 异常 #92337、Read Out Loud 劣化 #72123

### 3. 🤖 Fable 5 / 5.1 模型路由
- 回退模型不可配 #74311、Windows 默认走 Bash #91477 / #92407、计费文案错乱 #91488、模型自动修 bug 诉求 #92428

### 4. ☁️ 多设备同步
- #66303 同步 `~/.claude/` 配置（skills、plugins、MCP、statusline）—— 被标记为 duplicate，但需求面广

### 5. 🛠️ Agent / Subagent 体系
- #92134 ListAgents 引用不存在的 SendMessage
- #92426 Agent 工具忽略 subagent 定义，dispatcher 的 system prompt 透传给子 agent

### 6.  Scheduled Tasks 可靠性
- #92429 任务标记完成但未实际执行

### 7. 🌐 Web/Cowork UX
- #92430 关闭 Recents 未读小圆点
- #91750 Desktop 抢占 .docx/.pdf/.csv 默认打开方式（用户痛点）
- #91898 MCP 4 分钟超时提示误导

---

## 开发者关注点

### 高频痛点（按严重度排序）

1. **静默失败是最危险的失败模式**
   - Bash 截断伪装成引号错误（#85111）
   - MCP HTTP 显示已连接但工具不可达（#86875）
   - Security glob `**/*.ts` 静默放行顶层文件（#87079）
   - Scheduled task 标记完成却未执行（#92429）
   
   → 社区普遍呼吁：**让失败可见、可调试**。

2. **Windows 是体验洼地**
   - 进程管理（Job Object 泄漏）、OAuth refresh token 在 sleep/wake 后失效、VS Code 插件与桌面端的 OAuth 行为差异、桌面端独占文件关联等，集中体现跨平台工程的复杂性。

3. **插件/Agent 系统的"配置正确性"是隐形基建**
   - YAML frontmatter 解析、agent 定义注册、subagent prompt 透传 —— 这些都不是核心功能，但任何一处出错都会让上层用户脚本整体失效。**PR 87077 / 87079 / 89404 的存在本身就说明官方工具链在自检环节仍有缺口**。

4. **Fable 5/5.1 上线后的"二等公民"体验**
   - Windows 上系统提示仍让模型用 Bash（#92407 / #91477）、回退模型不可配（#74311）、计费文案错乱（#91488）。开发者普遍希望：**新模型应在所有平台上获得一致的系统级支持**，而非附加补丁式落地。

5. **跨设备体验**
   - `~/.claude/` 缺乏云端同步，开发者每换一台机器都要重新配置 skills / plugins / MCP。Issue 虽被合并为 duplicate，但本质需求未被官方回应。

### 给开发者的建议

- **使用 v2.1.262 及以下版本**前请重点检查：VS Code 复制（#91860，已在 2.1.258 修复但 2.1.259 回退）、Bash 命令长度、HTTP-transport MCP 健康状态。
- **依赖插件系统的项目**建议加 lint 流程校验 agent frontmatter（参考 PR 89404）。
- **Fable 5 用户**目前仍可能遭遇 Windows-only 的 tool 选择偏差，复杂任务建议显式 prompt 指定工具。

---

*数据来源：GitHub `anthropics/claude-code` 仓库 24 小时窗口*
*报告生成时间：2026-09-06*

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

<think>Let me analyze the GitHub data for OpenAI Codex and generate a comprehensive Chinese daily report for 2026-09-06.

Key observations:
1. No releases in past 24 hours
2. Issues: 50 issues updated, focusing on:
   - GPT-6 Astra model availability issues
   - Windows desktop app bugs
   - Session/history pagination bugs
   - Rate limit issues
   - Computer Use / CDP bridge issues
   - Voice feature development
   
3. Pull Requests: 34 PRs updated, many CLOSED status
   - Voice/WebRTC infrastructure (many PRs about voice host, Opus, GStreamer, native builds)
   - Bazel build system for native voice dependencies
   - Windows MSVC native builds
   - TUI improvements (worktree, subagents)
   - Configuration changes (Guardian v2)

4. Notable patterns:
   - Major focus on voice infrastructure (realtime WebRTC, Opus RTP, GStreamer bindings)
   - Windows desktop app stability issues
   - GPT-6 Astra new model integration issues
   - History/session pagination bugs appear frequently
   - Rate limit / quota concerns

Let me structure the report now.</think>

# OpenAI Codex 社区动态日报
**日期：2026-09-06**

---

##  今日速览

今日 Codex 社区的核心动态聚焦于 **GPT-6 Astra 新模型的灰度上线问题**（多个 Pro/Plus 用户反馈模型选择器缺失、WebSocket 重连消耗额度、安全检查过度触发），以及 **Windows 桌面应用稳定性缺陷**（Computer Use 启动失败、远程控制崩溃、上下文压缩后聊天不可用）。后端层面，仓库正在密集合并 **语音 / WebRTC 基础设施的 Bazel 构建改造**，约 14 个相关 PR 集中在 native voice runtime、Opus RTP、GLib/GStreamer 绑定上，显示出语音实时通信能力是当前的重大技术投资方向。

---

##  版本发布

过去 24 小时内 **无新版本发布**。

---

## 🔥 社区热点 Issues

### 1. [#35746](https://github.com/openai/codex/issues/35746) — 分页历史丢弃有效 rollout 记录并复用 ordinal（39 条评论，⭐ 3）
- **重要性**：这是当前讨论度最高的 bug，CLI `0.146.0-alpha.10.1` 起就存在 `RolloutLine` 解码不一致问题，影响所有依赖历史分页的用户
- **社区反应**：多人复现，已从 7 月延续到 9 月仍未完全修复，多个相关 issue（#43124、#43142）均指向同一根因

### 2. [#42853](https://github.com/openai/codex/issues/42853) — Windows Desktop 缺少 GPT-6 Astra 模型选项（10 条评论）
- **重要性**：反映 GPT-6 Astra 在 Windows 客户端的灰度发布存在目录刷新问题，Pro 账号用户无法在前端选择
- **社区反应**：与 #43143 几乎相同问题被独立报告，表明影响范围较广

### 3. [#42501](https://github.com/openai/codex/issues/42501) — Windows 26.901.1978.0 因 cua_node 拷贝失败无法启动 UI（9 条评论）
- **重要性**：严重回归，Microsoft Store 更新后 Codex 完全无法打开窗口，影响所有 Windows 用户
- **社区反应**：开发者提供了详细的 `cua_node` 启动失败排查结果

### 4. [#16579](https://github.com/openai/codex/issues/16579) — 允许在 Windows 上配置默认 session shell（7 条评论，⭐ 45）
- **重要性**：⭐ 数高（45）说明这是 Windows 用户长期痛点，已有社区 PR 草案
- **社区反应**：PowerShell 强制默认让 Git Bash 用户体验割裂

### 5. [#16759](https://github.com/openai/codex/issues/16759) — Full Access 仍弹权限提示（已关闭，12 条评论）
- **重要性**：权限沙箱用户体验长期争议，Business 用户尤其敏感

### 6. [#41922](https://github.com/openai/codex/issues/41922) — 上下文压缩后聊天不可用且打印内部校验错误（7 条评论）
- **重要性**：严重影响长会话场景，错误暴露内部验证细节

### 7. [#41849](https://github.com/openai/codex/issues/41849) — VS Code Remote-SSH 重连后 app-server 残留（6 条评论，⭐ 4）
- **重要性**：导致 "This is open in another app" 阻塞，影响远程开发工作流

### 8. [#41661](https://github.com/openai/codex/issues/41661) — 已删除对话卡在 macOS Recents（6 条评论）
- **重要性**：客户端状态同步缺陷，服务器已删除的对话持续占用 UI

### 9. [#20503](https://github.com/openai/codex/issues/20503) — MCP OAuth 动态注册未携带 scope（4 条评论，⭐ 11）
- **重要性**：影响第三方 MCP（如 Fastmail）集成，已存在两个多月

### 10. [#41982](https://github.com/openai/codex/issues/41982) — Windows Remote 从 Android 打开任务触发 git.exe 崩溃风暴（4 条评论）
- **重要性**：标记为 Critical，触发系统级 OOM，是 Windows + Remote 组合下的极端问题

---

## ️ 重要 PR 进展

### 1. [PR #43147](https://github.com/openai/codex/pull/43147) — 在会话启动时按模型能力门控实验性 context
- 根据模型能力而非仅账户资格决定是否启用实验性 context，子会话不再继承父会话的 token 预算激活

### 2. [PR #43144](https://github.com/openai/codex/pull/43144) — 为 native voice 库添加 Windows MSVC Bazel targets
- 补齐 x64 / ARM64 MSVC 原生构建 target，完整声明编译器、SDK、库依赖

### 3. [PR #43126](https://github.com/openai/codex/pull/43126) — 通过 Bazel targets 暴露 Windows 原生构建工具
- 修复 `windows_support` 在 setup 时丢弃 MSVC tool 二进制的问题，让 Bazel 消费者可调用

### 4. [PR #43125](https://github.com/openai/codex/pull/43125) — 为 native voice 构建添加显式 Windows 工具选择
- 新增 `--windows-build-inputs <json>`，避免 Cygwin 与 MSVC 的 `link.exe` 冲突

### 5. [PR #43120](https://github.com/openai/codex/pull/43120) — 在 TUI session 命令中添加托管 worktree 创建
- 新增 `/worktree` 命令，并扩展 `/new`、`/fork`，支持在工作树选择间切换

### 6. [PR #43113](https://github.com/openai/codex/pull/43113) — 通过 app server 保存 subagent 与 memory 启用项
- TUI 中的 subagent / memory 启用提示走服务端配置写入，并返回结果或失败原因

### 7. [PR #43110](https://github.com/openai/codex/pull/43110) — 在对话历史中记录 reasoning effort 变更（feature flag）
- 新增 `reasoning_effort_override` 默认关闭的 flag，对 Responses Lite 模型追加 `configuration_update` 事件

### 8. [PR #43104](https://github.com/openai/codex/pull/43104) — 将 Guardian 线程上下文迁移至 `guardianv2` 配置
- 用 `features.guardianv2.thread_context` 取代 `features.guardian_thread_context`

### 9. [PR #43100](https://github.com/openai/codex/pull/43100) — 为 voice host 添加有界的入向 Opus RTP 处理
- 拦截入向 Opus RTP，限制 64 包 / 2 MiB 队列上限，避免内存失控

### 10. [PR #43097](https://github.com/openai/codex/pull/43097) — 提供 helper-backed 实时 WebRTC 会话 API
- 新增 `RealtimeWebrtcSession` 及可克隆句柄，覆盖启动、应答协商、音频控制、电平表与错误上报

---

## 📈 功能需求趋势

从近 50 条活跃 Issue 中提炼出以下社区关注焦点：

| 方向 | 代表 Issue | 关注度 |
|------|------------|--------|
| **GPT-6 Astra 新模型适配** | #42853, #43042, #43045, #43131, #43143 | ⭐⭐⭐⭐ |
| **Windows 桌面应用稳定性** | #42501, #41922, #41982, #42790, #42259, #43142 | ⭐⭐⭐⭐⭐ |
| **会话 / 历史分页一致性** | #35746, #43124, #43142, #41661, #43129 | ⭐⭐⭐ |
| **远程控制 / Remote-SSH** | #41849, #40167, #32614, #31110, #41982 | ⭐⭐⭐ |
| **限速与配额体验** | #42765, #43045, #43135 | ⭐⭐⭐ |
| **Windows Shell / IDE 配置自由度** | #16579(⭐45), #42760 | ⭐⭐⭐ |
| **Computer Use / 浏览器桥接** | #42501, #42790, #41090 | ⭐⭐⭐ |
| **MCP 协议与第三方集成** | #20503(⭐11) | ⭐⭐ |
| **TUI 子代理可见性** | #43148, #32614 | ⭐⭐ |

---

## 💡 开发者关注点

1. **GPT-6 Astra 灰度发布的兼容性问题最集中**：模型选择器不显示、WebSocket 重连循环消耗积分（[#43045](https://github.com/openai/codex/issues/43045)）、安全策略在普通代码任务中过度触发（[#43042](https://github.com/openai/codex/issues/43042)、[#43131](https://github.com/openai/codex/issues/43131)）。开发者明确希望 TAC 账号下能跳过 cyber_policy 误判。

2. **历史与会话状态机的 ordinal 复用 bug 是高频痛点**：至少 4 个相关 issue（#35746 / #43124 / #43129 / #43142）描述同一个分页语义缺陷——`projection expected ordinal X, got X-1`——长期对话恢复后历史冻结。**这是 Codex 当前最稳定的复现 bug**。

3. **Windows 仍是用户体验短板**：启动失败、Computer Use 桥接 21–42 秒延迟、远程控制 Cloudflare 挑战失败、git.exe 崩溃风暴——多个严重问题集中爆发。开发者呼吁 Microsoft Store 发布前加强端到端验证。

4. **限额策略缺乏灵活性**：[#43135](https://github.com/openai/codex/issues/43135) 提出希望允许"周配额连续消耗"模式，避免 5 小时滚动窗口中断长时间工程任务。Pro 用户在 #42765 报告配额无故从 45% 跳到 0%。

5. **语音 / WebRTC 是重大投入方向**：本周 14+ PR 围绕 native voice Bazel 构建、GLib/GStreamer 绑定、Opus RTP、Realtime WebRTC session 展开，意味着 Codex 即将（或正在）推出完整的语音交互能力，是继 Computer Use 之后的下一个产品级特性。

6. **长期未解决的功能请求**：[#16579](https://github.com/openai/codex/issues/16579)（⭐ 45）Windows 默认 shell 可配置化，以及 [#20503](https://github.com/openai/codex/issues/20503)（⭐ 11）MCP OAuth scope 支持，反映社区对**平台灵活性**与**第三方集成规范**的强烈呼声。

---

*报告基于 GitHub 公开数据生成，数据快照时间：2026-09-06 UTC*

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

<think>The user wants me to generate a Chinese daily report based on GitHub data for the Gemini CLI project. Let me analyze the data carefully and structure it according to the 6 sections requested.

Let me analyze the data:

1. **Releases**: There's one nightly release v0.60.0-nightly.20260906.g85aca163f

2. **Issues**: 50 issues updated, I need to pick the most notable 10. Looking at them:
   - #22323: Subagent recovery after MAX_TURNS reported as GOAL success (p1, 13 comments, 2 likes)
   - #19873: Zero-Dependency OS Sandboxing & Post-Execution Intent Routing (p2, 9 comments)
   - #21409: Generalist agent hangs (p1, 8 comments, 8 likes - high engagement!)
   - #22745: AST-aware file reads (p2, 7 comments)
   - #21968: Gemini doesn't use skills and sub-agents enough (p2, 6 comments)
   - #26525: Add deterministic redaction and reduce Auto Memory logging (p2, security)
   - #25166: Shell command stuck on "Waiting input" (p1, 4 comments, 3 likes)
   - #22232: browser_agent resilience (p3, 4 comments)
   - #21983: browser subagent fails in wayland (p1, 4 comments)
   - #21000: native file tools for task tracker (p3, 4 comments)
   - #20079: ~/.gemini/agents/ symlink issue (p2, 4 comments)
   - Multiple Auto Memory related issues (#26525, #26523, #26522, #26516)
   - #24246: 400 error with > 128 tools (p2)
   - #23571: Model creates tmp scripts in random spots (p2)
   - #22672: Agent should stop destructive behavior (p2)
   - #22267: Browser Agent ignores settings.json overrides (p2)

3. **PRs**: 22 PRs updated
   - #29125: fix hook timeout seconds vs milliseconds
   - #29163: prevent crash during authentication in git repositories (p1, security)
   - #29223: chore/release bump version 0.60.0-nightly
   - #29217: fix config don't rewrite explicit gemini-2.5-flash model selection (p1, p2)
   - #29222: fix config prevent rewriting explicitly pinned flash models
   - #29211: fix cli stop scheduling state updates from inside state updater
   - #29195: fix checkpoint degrade non-array history
   - #29126: fix a2a-server mount express.json before a2a sdk routes
   - #29124: fix SubagentStop event key in hooks migration
   - Several closed PRs

4. **Trends**: 
   - Subagent reliability issues (hanging, MAX_TURNS reporting wrong status)
   - Auto Memory system bugs (multiple issues)
   - Browser agent improvements
   - AST-aware tools exploration
   - Hooks migration issues (Claude Code compatibility)
   - Model pinning/config issues (gemini-2.5-flash being rewritten)
   - Security concerns (redaction, git repo crashes)

Let me write the report in Chinese, professional tone for developers.</think>

# Gemini CLI 社区动态日报
**2026-09-06**

---

## 📌 今日速览

今日 Gemini CLI 发布了 `v0.60.0-nightly` 新版本，自动化版本机器人同步发起对应 PR。社区关注焦点集中在 **Subagent 可靠性** 与 **Auto Memory 系统** 两个方向——前者多个高优 Bug 导致任务卡死或误报成功，后者暴露了若干安全与质量隐患。同时，**Hooks 迁移兼容性问题**（从 Claude Code 迁移配置时的时间单位与事件名差异）成为修复重点。

---

## 🚀 版本发布

- **v0.60.0-nightly.20260906.g85aca163f** 已发布
  - 由 [`gemini-cli-robot`](https://github.com/gemini-cli-robot) 自动发起的版本号升级 PR：[#29223](https://github.com/google-gemini/gemini-cli/pull/29223)
  - 对比前一 nightly 版本：[Full Changelog](https://github.com/google-gemini/gemini-cli/compare/v0.60.0-nightly.20260905.g85aca163f...v0.60.0-nightly.20260906.g85aca163f)

---

##  社区热点 Issues

| # | 标题 | 优先级 | 评论 | 👍 |
|---|------|--------|------|-----|
| [#22323](https://github.com/google-gemini/gemini-cli/issues/22323) | Subagent 在达到 MAX_TURNS 后仍被报告为 GOAL success，掩盖了中断事实 | **p1** | 13 | 2 |
| [#21409](https://github.com/google-gemini/gemini-cli/issues/21409) | Generalist agent 频繁卡死 | **p1** | 8 | 8 |
| [#19873](https://github.com/google-gemini/gemini-cli/issues/19873) | 利用模型 bash 亲和性：零依赖 OS 沙箱 & 执行后意图路由 | p2 | 9 | 1 |
| [#22745](https://github.com/google-gemini/gemini-cli/issues/22745) | 评估 AST 感知的文件读取、搜索与代码库映射 | p2 | 7 | 1 |
| [#21968](https://github.com/google-gemini/gemini-cli/issues/21968) | Gemini 几乎不会主动使用 skills 和 sub-agents | p2 | 6 | 0 |
| [#25166](https://github.com/google-gemini/gemini-cli/issues/25166) | Shell 命令执行完成后卡在"Waiting input" | **p1** | 4 | 3 |
| [#26525](https://github.com/google-gemini/gemini-cli/issues/26525) | Auto Memory 增加确定性脱敏 & 减少日志记录 | p2 / 安全 | 5 | 0 |
| [#21983](https://github.com/google-gemini/gemini-cli/issues/21983) | Browser subagent 在 Wayland 下失败 | **p1** | 4 | 1 |
| [#24246](https://github.com/google-gemini/gemini-cli/issues/24246) | 工具数 > 128 时触发 400 错误 | p2 | 3 | 0 |
| [#22267](https://github.com/google-gemini/gemini-cli/issues/22267) | Browser Agent 忽略 settings.json 中的 maxTurns 等覆盖 | p2 | 3 | 0 |

**点评**：
- **#21409** 赞数高达 8，是今日热度最高的 Bug，反映开发者普遍遇到的"generalist agent 卡死"问题，急需可重现的缓解方案。
- **#22323** 讨论最深入（13 条评论），触及 Subagent 终止状态语义——`Termination Reason: GOAL` 的错误报告会让上层编排误判任务成功，影响下游决策。
- **#26525** 作为 Auto Memory 安全增强提案，涉及"secret 在进入模型上下文后才脱敏"的根本性风险，值得关注。

---

## 🛠️ 重要 PR 进展

| # | 标题 | 优先级 | 说明 |
|---|------|--------|------|
| [#29125](https://github.com/google-gemini/gemini-cli/pull/29125) | 修复 hooks 迁移中 timeout 单位秒→毫秒的转换 | p2 | Claude Code 默认 60 **秒** 而 Gemini CLI 解释为毫秒（60000），迁移时需除以 1000，避免用户钩子超时被放大了 1000 倍 |
| [#29124](https://github.com/google-gemini/gemini-cli/pull/29124) | 修正 hooks 迁移中 SubagentStop 事件名 | p2 | 修复 `SubAgentStop` → `SubagentStop`（小写 a），避免 Claude 钩子在迁移后被静默丢弃 |
| [#29163](https://github.com/google-gemini/gemini-cli/pull/29163) | 防止 git 仓库内鉴权阶段崩溃 | **p1** | 在 macOS Seatbelt 等受限权限环境下，启动时读取 git 分支导致崩溃的修复 |
| [#29217](https://github.com/google-gemini/gemini-cli/pull/29217) | 修复 `--model gemini-2.5-flash` 被悄悄改写为 `gemini-3.5-flash` | p1/p2 | `isFlashModel()` 使用了过宽的 `endsWith('flash')` 匹配，导致显式 pin 的旧模型被无感升级 |
| [#29222](https://github.com/google-gemini/gemini-cli/pull/29222) | 防止显式 pin 的 flash 模型被改写（重复修复） | p1/p2 | 与 #29217 同一问题由不同贡献者提出 |
| [#29211](https://github.com/google-gemini/gemini-cli/pull/29211) | 禁止在 state updater 内调度 state 更新 | p2 | 修复 React 中 `setState` 嵌套调用引发的潜在崩溃 |
| [#29195](https://github.com/google-gemini/gemini-cli/pull/29195) | `/resume` 时对非数组 history 进行降级而非崩溃 | p2 | checkpoint 中 history 字段为合法 JSON 但非数组时，改为空 checkpoint |
| [#29126](https://github.com/google-gemini/gemini-cli/pull/29126) | a2a-server 中 `express.json()` 挂载顺序修复 | — | 此前 body 未解析，导致 JSON-RPC 失败 |
| [#28960](https://github.com/google-gemini/gemini-cli/pull/28960) *(已关闭)* | 移除 Antigravity 显示 URL 末尾的句号 | p1 | 小但影响 UI 体验 |
| [#28967](https://github.com/google-gemini/gemini-cli/pull/28967) *(已关闭)* | 静态刷新时禁止清空终端 scrollback | p2 | 在标准终端模式下，`refreshStatic()` 调用 `clearTerminal` 会清除 Linux 终端的滚动历史 |

---

## 📈 功能需求趋势

通过对今日活跃 Issue 的梳理，社区诉求呈现以下几条主线：

1. **AST 感知工具链** — [#22745](https://github.com/google-gemini/gemini-cli/issues/22745)、[#22746](https://github.com/google-gemini/gemini-cli/issues/22746) 共同推动"按方法边界读取、AST 搜索、代码库地图"系列能力，目标减少大文件读取的 token 浪费。
2. **Subagent 调度与可观测性** — Subagent 的"过度卡死 / 状态误报 / 不被主动调用"三大问题成为焦点。相关 issue 涉及 MAX_TURNS 状态修正 ([#22323](https://github.com/google-gemini/gemini-cli/issues/22323))、generalist 卡死 ([#21409](https://github.com/google-gemini/gemini-cli/issues/21409))、trajectory 分享 ([#22598](https://github.com/google-gemini/gemini-cli/issues/22598))。
3. **Auto Memory 系统完善** — 由 [`@SandyTao520`](https://github.com/SandyTao520) 提出的 [#26525](https://github.com/google-gemini/gemini-cli/issues/26525) / [#26523](https://github.com/google-gemini/gemini-cli/issues/26523) / [#26522](https://github.com/google-gemini/gemini-cli/issues/26522) / [#26516](https://github.com/google-gemini/gemini-cli/issues/26516) 系列，集中讨论记忆管道的脱敏、无效补丁处理、低信号会话重试等问题。
4. **原生 Bash / 安全沙箱** — [#19873](https://github.com/google-gemini/gemini-cli/issues/19873) 提出"利用 Gemini 3 模型的 bash 亲和性 + 零依赖 OS 沙箱"路线，意在减少外部依赖同时保证 UX。
5. **持久化任务跟踪** — [#21000](https://github.com/google-gemini/gemini-cli/issues/21000) 与 [#18836](https://github.com/google-gemini/gemini-cli/issues/18836) 共同推进用原生文件工具替代上下文内 WriteToDo，缓解"context rot"。
6. **终端性能与渲染** — [#21924](https://github.com/google-gemini/gemini-cli/issues/21924) 推进 Ink 的 `RenderStatic` 迁移，解决 resize 时的闪烁与卡顿。

---

## 💬 开发者关注点

- **🔧 Subagent 体验最令人沮丧**：卡死、状态误报、默认不调用——这三条反馈高度重复，说明 Subagent 在主线流程中的可靠性尚未达标，是当前最重要的体验痛点。
- **🔐 Auto Memory 安全审计窗口**：开发者注意到"内容先进入模型上下文再脱敏"的中间状态存在泄露窗口，呼吁确定性脱敏并减少后台日志。
- ** Claude Code → Gemini CLI 迁移粗糙**：hooks 迁移出现单位（秒 vs 毫秒）与事件名大小写（`SubagentStop`）两处易错点，影响迁移落地体验。
- **️ 模型显式 pin 被覆盖**：当用户主动指定 `--model gemini-2.5-flash` 时，被自动改写为 `gemini-3.5-flash` 引发可用性问题，违背用户意图。
- **️ Wayland / 浏览器子代理兼容性**：在 Wayland 环境下 Browser Agent 直接失败；普通 shell 也可能在完成后挂在前端——表明终端/浏览器层集成仍有稳定性缺口。
- ** 工作区"tmp 脚本散落"**：模型在缺乏专用脚本目录时倾向于在仓库各位置创建临时脚本，污染版本控制——开发者希望提供专门的临时工作区。

---

*数据来源：[google-gemini/gemini-cli](https://github.com/google-gemini/gemini-cli) · 报告时间：2026-09-06*

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

<think>The user wants me to generate a daily report for GitHub Copilot CLI community dynamics based on the provided GitHub data. Let me analyze the data carefully.

Key observations:
1. No new releases in past 24 hours
2. 21 issues updated in past 24 hours, with 2 CLOSED and 19 OPEN
3. No new PRs

Let me categorize the issues by area:
- area:input-keyboard: #1857, #4736, #4722
- area:enterprise, area:models: #4272 (CLOSED)
- area:platform-linux, area:windows: #4652, #4725
- area:agents, area:plugins: #3894, #4723
- area:sessions: #3498, #4726, #4728, #4677 (CLOSED)
- area:triage (various): #4551, #4733, #4732, #4735, #4734
- area:agents, area:mcp: #4729
- area:mcp, area:tools: #4731, #4721
- area:context-memory, area:models: #4724
- area:non-interactive, area:agents, area:plugins: #4723

Let me pick the 10 most notable issues to highlight:

1. **#1857** - Allow users to cancel or remove enqueued messages before they are executed (28 likes, 11 comments, very high engagement)
2. **#4272** - new models greyed out and can't be selected (CLOSED)
3. **#4725** - Frequent JavaScript heap out of memory on Linux
4. **#3894** - agentStop triggering on subagent turns causing /review to never finish
5. **#3498** - Remote session UI does not render on GitHub Mobile app (Android)
6. **#4728** - Auto-update rewrites the copilot.exe it was launched from, breaking GitHub Copilot app's bundled CLI
7. **#4729** - Built-in research agent tells subagents to call unavailable github/get_me tool
8. **#4731** - A tools/list refresh dispatched into a server still blocked by a just-cancelled tool call times out
9. **#4724** - Auto-compact on idle, aligned to the model's prompt cache TTL
10. **#4721** - Canvas open_canvas arguments corrupted by CLI — JSON-RPC serialization bug

Other notable ones:
- **#4736** - Make Ctrl+E accept inline autocomplete suggestions (new feature)
- **#4735** - Assistant text preceding a tool call is reclassified as reasoning
- **#4734** - Bug: "Worktree missing" on all project sessions after upgrade
- **#4733** - When hit max_output_tokens, some events are not emitted
- **#4732** - GH Copilot switched to GPT-5 mini which stops mid-task
- **#4726** - OTel: post-reload resumed turn emits invoke_agent root without input messages
- **#4723** - --interactive startup prompt silently dropped with local plugin custom agent
- **#4722** - Leading underscores vanish in Copilot Chat bubbles due to Markdown parsing
- **#4551** - Clipboard issue with remote SSH session on macOS
- **#4652** - Sandboxing not supported on Windows 25H2

Let me organize this into the required structure.</think>

# GitHub Copilot CLI 社区动态日报
**日期：2026-09-06**

---

## 📌 今日速览

过去 24 小时内，Copilot CLI 社区共更新 **21 条 Issue**（无新增 PR 与 Release），整体活跃度维持在高水位。讨论焦点集中在 **会话/订阅模式稳定性**（远程会话渲染、自动更新破坏桌面端）、**Agent 与 MCP 工具链的鲁棒性**（子 agent 行为异常、JSON-RPC 序列化）以及 **上下文/性能优化**（自动压缩、JS 堆内存溢出）。值得关注的是高赞 Issue #1857（取消已排队消息）持续获得社区关注（👍28），反映出用户对交互可控性的强烈诉求。

---

##  版本发布

**无新版本发布**（过去 24 小时）。

---

## 🔥 社区热点 Issues

| # | Issue | 状态 | 热度 | 关注理由 |
|---|-------|------|------|----------|
| 1 | **#1857** 允许取消/移除已排队消息 | OPEN | 👍28 💬11 | **今日最高赞**。社区对消息队列管理需求强烈，用户希望代理繁忙或 `/compact` 期间可取消 `Ctrl+Q`/`Ctrl+Enter` 排队的指令，提升交互可控性。 |
| 2 | **#4272** 新模型灰显无法选择 | CLOSED | 👍3 💬2 | Enterprise 策略导致模型选项被禁用，反映企业用户对最新模型可获得性的关切，已关闭。 |
| 3 | **#4725** Linux 平台 JS 堆内存频繁 OOM | OPEN | 👍0 💬1 | Mark-Compact 后内存逼近 4 GB 上限崩溃，影响长时间会话稳定性。 |
| 4 | **#3894** `agentStop` 在子 agent 触发致 `/review` 卡死 | OPEN | 👍1 💬1 | 自定义 hook 与子 agent 交互缺陷，导致关键命令（如 `/review`）无法返回。 |
| 5 | **#3498** 远程会话在 GitHub Mobile Android 不渲染 | OPEN | 👍3 💬1 | WebSocket 数据可达但 UI 不呈现，移动端远程会话功能基本不可用。 |
| 6 | **#4728** 自动更新重写 `copilot.exe` 致桌面端会话全挂 | OPEN | 👍0 💬0 | 影响范围广——所有现有会话无法恢复，桌面应用与 CLI 更新路径冲突问题严重。 |
| 7 | **#4729** 内置 research agent 调用不存在的 `github/get_me` | OPEN | 👍0 💬0 | Agent prompt 与可用 MCP 工具不一致，揭示 prompt 工程与工具发现的协调问题。 |
| 8 | **#4731** 已取消工具调用阻塞 `tools/list` 刷新致 MCP 工具永久失效 | OPEN | 👍0 💬0 | 进程生命周期内的 MCP 工具不可逆丢失，影响整个会话的可用性。 |
| 9 | **#4724** 基于 prompt cache TTL 的空闲自动压缩 | OPEN | 👍0 💬0 | 围绕 #1688/#2333 的延伸，提议 5 分钟空闲窗口对齐缓存以降低成本与延迟。 |
| 10 | **#4721** Canvas `open_canvas` 参数被 JSON-RPC 序列化破坏 | OPEN | 👍0 💬0 | CLI 在派发工具调用时拼接尾随 `}{}`，canvas 扩展被错切，工具调用层基础缺陷。 |

 [查看全部 21 条 Issue](https://github.com/github/copilot-cli/issues)

---

## 🛠️ 重要 PR 进展

**过去 24 小时内无更新的 Pull Request。**

---

## 📈 功能需求趋势

综合今日 Issue 文本与标签分析，社区需求集中在以下方向：

1. **🔌 Agent / MCP 工具链鲁棒性** — 占比最高
   - 子 agent 行为异常（#3894、#4723、#4729）
   - JSON-RPC 序列化与工具刷新时序（#4731、#4721）
   - 工具列表在错误状态下的恢复机制缺失

2. ** 上下文与缓存优化**
   - 自动压缩策略改进（#4724）
   - 推理块与用户文本的边界划分（#4735）
   - `max_output_tokens` 截断后事件丢失（#4733）

3. **️ 输入与终端交互体验**
   - Ctrl+E 接受内联补全（#4736）
   - 取消已排队消息（#1857）
   - Markdown 解析吞掉前导下划线（#4722）

4. **🖥️ 跨平台与远程会话稳定性**
   - Windows 25H2 沙箱不支持（#4652）
   - Linux 内存溢出（#4725）
   - Android 远程会话渲染（#3498）
   - SSH 会话剪贴板同步（#4551）
   - CLI 自动更新破坏桌面端（#4728）

5. **🤖 模型治理与降级体验**
   - GPT-5 mini 自动切换后中途停摆（#4732）
   - 新模型被组织策略禁用（#4272）

6. **📊 可观测性（OpenTelemetry）**
   - 重连后 invoke_agent span 缺输入消息（#4726）

---

## ‍💻 开发者关注点

1. **交互可控性不足**：用户希望对 agent 行为拥有更细粒度的控制权（取消排队、查看隐藏推理），而非"黑盒执行"。

2. **MCP / 工具调用层稳定性差**：多个 Issue 表明工具调用在异常分支（超时、取消、序列化）下容易陷入"半死状态"，需要更明确的隔离与恢复语义。

3. **CLI 与桌面应用更新路径冲突**：#4728 揭示自动更新机制覆盖了 GitHub Copilot 桌面应用捆绑的二进制，引发连锁故障，建议引入 side-by-side 或托管式更新。

4. **BYOK / 自定义模型体验仍粗糙**：max_output_tokens 截断（#4733）后事件丢失、模型被静默切换（#4732），开发者对可控性、可预测性诉求强烈。

5. **会话持久化与跨设备可用性**：Worktree 丢失（#4734）、移动端远程会话不渲染（#3498）暴露了会话层在多终端、多形态下的脆弱性。

6. **Markdown / 终端渲染细节**：前导下划线被吞（#4722）、Ctrl+E 行为不一致（#4736）等"小毛病"频发，影响日常使用体感。

---

> 📊 **数据范围**：GitHub Issues 21 条（更新于 2026-09-05 ~ 09-06）；PR 与 Release 均为 0。
>  **仓库地址**：[github.com/github/copilot-cli](https://github.com/github/copilot-cli)

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

<think>The user wants me to generate a daily report for the Kimi Code CLI community based on GitHub data from 2026-09-06. Let me analyze the data carefully.

Looking at the data:
- No new releases in the past 24 hours
- 5 Issues updated (4 CLOSED, 1 OPEN)
- 1 Pull Request updated (still OPEN)

The user is asking for:
1. 今日速览 - Summary of today's most important updates
2. 版本发布 - Release info (none, so skip)
3. 社区热点 Issues - Top 10 most noteworthy issues
4. 重要 PR 进展 - Top 10 important PRs
5. 功能需求趋势 - Feature trends
6. 开发者关注点 - Developer pain points

But there are only 5 issues and 1 PR in total. I need to handle this gracefully - I can't pick 10 if there are only 5 issues and 1 PR. I should be honest about the limited data while still providing useful analysis.

Let me analyze each issue:

1. #1284 [CLOSED] - bug: Does not launch in Zed IDE ACP panel in Windows - Zed IDE integration issue on Windows
2. #1210 [CLOSED] - enhancement: Improve documentation for using in third-party Coding Agents - Documentation improvement request
3. #1350 [CLOSED] - bug: Frequent "Authorization failed" errors on debian12 v1.17.0 - Auth issue
4. #1349 [CLOSED] - shell prompt no longer shows cwd/git branch; request configurable display - UI/UX feature request
5. #2635 [OPEN] - VS Code extension: streamed chat text drops individual characters - VS Code extension rendering bug

PR:
1. #2513 [OPEN] - fix(kosong): recursively decode double-encoded tool-call arguments - Fix for double-encoded JSON in tool calls

Let me write the report in Chinese, professional and concise, suitable for technical developers.

Since there are only 5 issues and 1 PR, I should mention this and cover all of them, rather than trying to fabricate 10 of each. I need to be honest about the limited volume of activity.

Let me draft the report:

# 2026-09-06 Kimi Code CLI 社区动态日报

## 1. 今日速览
- 今日社区活动整体偏轻量，无新版本发布
- Issues 方面有 4 条历史 issue 被关闭（涵盖 Windows IDE 兼容性、第三方 Coding Agent 文档、授权失败、Shell 提示符显示），同时新增 1 条 VS Code 扩展渲染层丢字的 OPEN issue
- PR 方面 #2513 仍在评审中，针对工具调用参数双重编码的 Pydantic 校验失败问题

## 2. 版本发布
（今日无新版本发布，跳过此章节）

## 3. 社区热点 Issues
说明：今日共有 5 条 issue 更新，其中 4 条已关闭、1 条仍开放。下面按关注度/影响面逐一列出（数据量不足以凑满 10 条）

1. #2635 [OPEN] - VS Code 扩展聊天面板丢字 - 最新 issue，反映流式输出在渲染/复制层存在字符丢失问题，对日常编码体验影响明显，需关注 https://github.com/MoonshotAI/kimi-cli/issues/2635
2. #1284 [CLOSED] - Zed IDE ACP 面板在 Windows 下无法启动 - 反映 IDE 集成的跨平台兼容性 bug，已关闭 https://github.com/MoonshotAI/kimi-cli/issues/1284
3. #1350 [CLOSED] - debian12 v1.17.0 频繁 Authorization failed - 鉴权稳定性问题，关闭代表已修复或已有解决方案 https://github.com/MoonshotAI/kimi-cli/issues/1350
4. #1349 [CLOSED] - Shell prompt 不再显示 cwd/git branch，希望可配置 - UX 改进需求，已关闭 https://github.com/MoonshotAI/kimi-cli/issues/1349
5. #1210 [CLOSED] - 第三方 Coding Agent 使用文档完善建议 - 文档增强请求，已关闭 https://github.com/MoonshotAI/kimi-cli/issues/1210

## 4. 重要 PR 进展
今日仅有 1 条 PR 更新：

1. #2513 [OPEN] - fix(kosong): recursively decode double-encoded tool-call arguments - 修复 Moonshot API 返回的 function.arguments 中嵌套数组/对象被双重 JSON 编码的问题，引入共享的 decode_tool_arguments 工具方法以兼容多层编码，避免 Pydantic 校验失败。仍在评审中，建议关注测试用例覆盖。https://github.com/MoonshotAI/kimi-cli/pull/2513

## 5. 功能需求趋势
从今日更新的 issues 提炼：

- **IDE/编辑器集成**：#1284（Zed ACP）、#2635（VS Code 扩展）显示社区对多 IDE 集成场景的稳定性越来越敏感，尤其是 Windows 平台与渲染层细节
- **跨平台兼容性**：Windows 与 Debian Linux 都有问题报告（#1284、#1350），跨平台一致性是关键需求
- **可配置 UI**：#1349 反映出对 prompt 信息密度可定制化的诉求
- **第三方生态文档**：#1210 显示希望降低在 Claude Code 等第三方 Coding Agent 中接入 Kimi K2 Thinking 的门槛

## 6. 开发者关注点
- **稳定性**：授权失败（#1350）、启动失败（#1284）、渲染丢字（#2635）这类"打断工作流"的问题是开发者最敏感的痛点
- **跨平台一致性**：Windows 与 Linux 下行为差异需统一
- **可配置性**：shell prompt 信息（cwd/branch）希望用户可控
- **接入便利性**：第三方 Coding Agent 的文档与变量配置流程希望更顺畅
- **数据正确性**：#2513 关注的工具调用参数编码问题是底层数据可靠性问题，对 Agent 功能正确性影响重大

Let me refine this report and make it cleaner.</think>

# 2026-09-06 Kimi Code CLI 社区动态日报

> 数据范围：GitHub `MoonshotAI/kimi-cli` 过去 24 小时更新

---

## 1. 今日速览

- **今日社区活跃度偏低**：无新版本发布，仅 5 条 Issue 更新（4 关闭 + 1 新开 OPEN）和 1 条 PR 进入评审。
- **Issue 侧亮点**：历史 Issue 集中关闭，覆盖 Windows/Zed IDE 兼容性、Debian 鉴权稳定性、Shell prompt 可配置性、第三方 Coding Agent 文档；同时新增一条 VS Code 扩展**流式输出丢字**的 OPEN Issue（#2635），是当前唯一待处理问题。
- **PR 侧亮点**：`#2513` 针对 Moonshot API 工具调用参数双重 JSON 编码的 Pydantic 校验失败问题，仍在 OPEN 评审中。

---

## 2. 版本发布

⚠️ 今日**无新版本发布**，本节略过。可关注最近一次稳定版本（Issue #1350 提及 `v1.17.0` 为当前线上版本）。

---

## 3. 社区热点 Issues

> 说明：今日仅有 5 条 Issue 更新（远少于常规 10 条量级），以下全部列出，并按"OPEN 优先级 + 影响力"排序。

| # | 编号 | 状态 | 标题 | 关注理由 |
|---|------|------|------|----------|
| 1 | [#2635](https://github.com/MoonshotAI/kimi-cli/issues/2635) | 🟢 OPEN | VS Code extension: streamed chat text drops individual characters at render/copy layer | **今日唯一新开 Issue**。流式输出在渲染/复制层丢字符，但底层 wire log 完整——典型的渲染层 Bug，对编码体验影响明显 |
| 2 | [#1284](https://github.com/MoonshotAI/kimi-cli/issues/1284) | 🔴 CLOSED | Does not launch in Zed IDE ACP panel in Windows | 反映 **Zed ACP 集成在 Windows 平台的兼容性问题**，跨平台 IDE 集成的代表性 Bug |
| 3 | [#1350](https://github.com/MoonshotAI/kimi-cli/issues/1350) | 🔴 CLOSED | 频繁出现 Authorization failed, please check your login status | **Debian12 + v1.17.0** 下鉴权频繁失败的稳定性问题，影响 Linux 用户日常工作流 |
| 4 | [#1349](https://github.com/MoonshotAI/kimi-cli/issues/1349) | 🔴 CLOSED | shell prompt no longer shows cwd/git branch; request configurable display | UX 改进请求：prompt 不再显示 cwd/git 分支，希望提供**可配置的展示方案** |
| 5 | [#1210](https://github.com/MoonshotAI/kimi-cli/issues/1210) | 🔴 CLOSED | [在第三方 Coding Agent 中使用] 文档部分进行完善 | 关于 **Claude Code 中切换 K2 Thinking 模型**的文档与变量配置体验改进建议 |

**社区反应**：除 #2635 外其余 4 条均已关闭（👍 均为 0），说明这些历史 Issue 大概率通过版本迭代或文档更新已修复/吸收；#2635 因刚提交尚无互动，是接下来需要重点关注的 Issue。

---

## 4. 重要 PR 进展

> 今日仅有 1 条 PR 更新，以下为全部内容。

| # | 编号 | 状态 | 标题 | 内容要点 |
|---|------|------|------|----------|
| 1 | [#2513](https://github.com/MoonshotAI/kimi-cli/pull/2513) | 🟢 OPEN | fix(kosong): recursively decode double-encoded tool-call arguments | **Moonshot API 返回的 `function.arguments` 中嵌套数组/对象存在双重 JSON 编码**，单次 `json.loads` 后仍为字符串，Pydantic 校验失败。新增共享 `decode_tool_arguments` 工具方法，支持递归解码。改动虽小但对 Agent 工具调用可靠性至关重要。 |

> ⚠️ 数据量不足以列满 10 条；建议持续关注 `MoonshotAI/kimi-cli/pulls` 的活跃 PR。

---

## 5. 功能需求趋势

从今日更新的 Issue 中提炼出的社区关注方向：

1. **🧩 IDE / 编辑器生态集成**
   - #1284（Zed ACP）、#2635（VS Code 扩展）显示 Kimi Code 正快速渗透进主流编辑器生态，**多 IDE 兼容性**成为核心诉求。

2. **🪟 跨平台一致性**
   - Windows 启动失败 + Debian 鉴权失败同时出现，跨平台体验的统一性亟需加强。

3. **⚙️ 可配置化 UI**
   - #1349 反映出 prompt 信息密度（cwd/branch）希望**用户可控**，是 Terminal 工具的常见诉求。

4. **🤝 第三方 Coding Agent 接入门槛**
   - #1210 关注 Claude Code 等场景下切换 K2 Thinking 模型的体验（快捷键、环境变量、文档完整度），社区希望**对标智谱等同类产品的文档结构**。

5. **🧪 数据可靠性（隐藏需求）**
   - #2513 反映 Moonshot API 在序列化协议层面的细节（双重 JSON 编码）会直接破坏 Agent 工具调用链，是上层稳定性的隐性瓶颈。

---

## 6. 开发者关注点

综合 Issue 与 PR，开发者反馈中的高频痛点：

| 痛点类别 | 具体表现 | 代表 Issue/PR |
|----------|----------|---------------|
| **工作流中断** | 启动失败、鉴权频繁失效、聊天丢字 | #1284 / #1350 / #2635 |
| **跨平台行为不一致** | Windows vs Linux 在 IDE 集成、鉴权上表现差异 | #1284 / #1350 |
| **可配置性不足** | prompt 信息不可控、CLI 变量配置繁琐 | #1349 / #1210 |
| **底层数据可靠性** | API 返回参数格式与 Pydantic 模型不匹配 | #2513 |
| **文档与生态** | 第三方 Coding Agent 接入文档不够完整 | #1210 |

**关键洞察**：
- 当前阶段开发者的诉求已经从"能不能用"转向"**好不好用、稳定不稳定、跨平台一致不一致**"。
- IDE 生态（Zed ACP、VS Code 扩展）是**下一个版本迭代的潜在重点方向**。
- 像 #2513 这种底层协议适配类 PR 虽低调，但对 Agent 功能正确性至关重要，建议社区在 Code Review 时给予重视。

---

*日报生成时间：2026-09-06 | 数据源：[MoonshotAI/kimi-cli](https://github.com/MoonshotAI/kimi-cli)*

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

<think>The user wants me to generate a Chinese daily report for the OpenCode community based on GitHub data from 2026-09-06. Let me analyze the data carefully:

1. No releases in the past 24 hours
2. 50 issues updated in past 24 hours, showing top 30 by comment count
3. 50 PRs updated in past 24 hours, showing top 20 by comment count

Let me identify the most important items:

**Top Issues (by comments):**
1. #32747 - @ file mentions don't include files created after startup (15 comments, 13 likes) - OPEN - stale search state bug
2. #35009 - High resource usage after updating from 1.17.11 to 1.17.13 (10 comments, 2 likes) - CLOSED - RAM/CPU issues
3. #34030 - OpenCode unable to invoke third-party models in GitHub Copilot (9 comments, 2 likes) - CLOSED
4. #15315 - Copilot Gemini models fail to produce structured tool calls (8 comments, 1 like) - CLOSED
5. #25430 - format.json_schema.retryCount is ignored (7 comments, 0 likes) - CLOSED
6. #16678 - "Failed to run the query 'CREATE TABLE`" and logging issues (6 comments, 1 like) - CLOSED
7. #28695 - Session lifecycle context hooks for persistent plugin state (6 comments, 2 likes) - CLOSED - FEATURE
8. #35690 - Session history disappear after updating (6 comments, 0 likes) - CLOSED
9. #31916 - TUI hangs on 'Preparing to write...' with large file content (5 comments, 1 like) - CLOSED
10. #35741 - WebChat: LLM hallucinates user response (5 comments, 1 like) - CLOSED

**Important open issues (new today):**
- #47547 - Go subscription blocked — Monthly Usage shows 100% via sum of per-model percentages
- #47566 - Concurrent opencode processes on one database fail prompts with SQLITE_BUSY

**Top PRs:**
1. #47574 - feat(app): pulse the status dot while the event stream reconnects
2. #47570 - feat(app): manage recently closed projects
3. #47573 - fix(app): refresh queued inputs when the connection returns
4. #47572 - fix(app): time out requests the server never answers
5. #47571 - fix(client): detect stalled event streams and resync on foreground
6. #47394 - fix(ui): lighten dark contrast icon buttons
7. #47561 - fix(client): coalesce catalog refetches from event bursts (CLOSED)
8. #47444 - fix(app): scroll overflowing composer controls (CLOSED)
9. #47567 - fix(core): retry sqlite statements on lock timeout
10. #47565 - fix(app): pace directory re-sync after reconnect
11. #47564 - fix(app): keep slow git reads from filling the request queue
12. #47559 - feat(core): curate tools with model optimization plugins
13. #47560 - fix(desktop): keep server CORS headers so preflights cache (CLOSED)
14. #47378 - feat(app): add subtle new-session logo shimmer (CLOSED)
15. #47548 - feat(core): discover Bedrock credentials in the provider plugin (CLOSED)
16. #47555 - fix(tui): stop fetching placeholder session id on --continue
17. #47211 - fix(app): move project icon setting to experimental (CLOSED)
18. #47375 - fix(app): widen new-session prompt beyond logo (CLOSED)
19. #47387 - fix(tui): list OpenCode Go before Zen (CLOSED)
20. #47210 - fix(app): simplify vertical tabs footer (CLOSED)

Now let me look at patterns/themes:

**Feature trends:**
- Session lifecycle hooks (#28695, #35728)
- Desktop/TUI unification (#35703)
- Browser preview sidebar (#35751)
- Claude thinking/reasoning support on provider-compatible backends (#35733)
- GPT-5.5 tool calling on custom OpenAI providers (#35732)
- Bedrock IMDS support (#35798)
- Background message injection (#35728)

**Bug themes:**
- Performance/resource usage (multiple issues)
- Session history/data loss after update (#35690, #35750)
- Large diff rendering freezing (#31916, #32046)
- SQLite contention (#47566)
- Model-specific issues (DeepSeek, GLM, etc.)
- Tool call structured output issues (#15315, #25430, #34676)

**Today's focus areas in PRs:**
- Connection/reconnect handling (#47571, #47573, #47574)
- SQLite write contention (#47566, #47567)
- Request queue / network throttling (#47564, #47572)
- CORS / preflight caching (#47560)
- Catalog refetch coalescing (#47561)
- Directory re-sync pacing (#47565)
- Bedrock credential discovery (#47548)

Let me now write the report in Chinese, structured as requested.

I'll aim for a clean professional tone suitable for developers.

Let me select 10 most important issues to highlight:

Top 10 Issues:
1. #32747 - @ file mentions stale state (15 comments, OPEN, most engaged)
2. #35009 - High resource usage regression (10 comments)
3. #34030 - Copilot third-party models (9 comments)
4. #15315 - Copilot Gemini structured tool calls (8 comments)
5. #25430 - format.json_schema.retryCount ignored (7 comments)
6. #28695 - Session lifecycle hooks FEATURE (6 comments)
7. #35690 - Session history loss after update (6 comments)
8. #31916 - TUI hangs on large file content (5 comments)
9. #35741 - WebChat LLM hallucination (5 comments)
10. #47547 - Go subscription usage calculation (NEW today, 3 comments)

Top 10 PRs:
1. #47571 - Detect stalled event streams and resync
2. #47572 - Time out server requests
3. #47573 - Refresh queued inputs on reconnect
4. #47574 - Pulse status dot during reconnect
5. #47567 - Retry sqlite statements on lock timeout (closes #47566)
6. #47559 - Curate tools with model optimization plugins
7. #47565 - Pace directory re-sync after reconnect
8. #47564 - Keep slow git reads from filling request queue
9. #47570 - Manage recently closed projects
10. #47555 - Stop fetching placeholder session id on --continue

Now let me write the report.</think>

# OpenCode 社区动态日报 · 2026-09-06

## 📌 今日速览

今日社区活跃度聚焦于**网络重连与 SQLite 并发**两大类底层问题，Hona、woodsonl 等核心贡献者集中提交了一批修复 PR，重点解决移动端断网恢复慢、Desktop 端请求队列被卡死、多进程共享数据库写锁失败等场景。Issues 方面，社区讨论热度最高的仍是 v1.17.x 升级后的若干回归问题（资源占用、会话历史丢失、大 diff 渲染冻结等），但目前均已标记为 CLOSED。

---

## 🚀 版本发布

过去 24 小时内**无新版本发布**。当前主线版本仍为 v1.17.14 / v1.17.15，社区等待下一个补丁版本合并今日 PR 后发布。

---

## 🔥 社区热点 Issues

| # | Issue | 关键点 | 状态 | 链接 |
|---|------|--------|------|------|
| **#32747** | `@` 文件提及不包含启动后新建的文件 | 社区热度最高（15 评论，13 👍），仍是 OPEN。`tui @` 文件选择器索引陈旧，需重启才能看到新文件。 | 🟢 OPEN | [#32747](https://github.com/anomalyco/opencode/issues/32747) |
| **#35009** | 1.17.11 → 1.17.13 升级后资源占用激增 | 对话时 RAM ~1GB、CPU 22%，10 条评论讨论是否是 OpenCode 自身泄漏还是模型推理引起。 | ⚫ CLOSED | [#35009](https://github.com/anomalyco/opencode/issues/35009) |
| **#34030** | 无法调用 Copilot Enterprise 添加的第三方模型 | 企业用户痛点，9 条评论，影响 Copilot 接入价值。 | ⚫ CLOSED | [#34030](https://github.com/anomalyco/opencode/issues/34030) |
| **#15315** | Copilot Gemini 模型无法产出结构化 tool_calls | 根因指向 `sanitizeGemini`，输出退化为 `[tool_call: ...]` 文本。 | ⚫ CLOSED | [#15315](https://github.com/anomalyco/opencode/issues/15315) |
| **#25430** | `format.json_schema.retryCount` 被忽略 | 暴露了 API 但后端未使用，导致结构化输出失败即报错。 | ⚫ CLOSED | [#25430](https://github.com/anomalyco/opencode/issues/25430) |
| **#28695** | Session 生命周期 context hooks（插件状态持久化）| 构建在 #5409 之上，6 评论、2 👍，是插件生态关键需求。 | ⚫ CLOSED | [#28695](https://github.com/anomalyco/opencode/issues/28695) |
| **#35690** | 升级后会话历史消失 | 升级 v1.17.13 → v1.17.14 后大量历史会话不再可见，迁移路径数据兼容性问题。 | ⚫ CLOSED | [#35690](https://github.com/anomalyco/opencode/issues/35690) |
| **#31916** | TUI 处理大文件内容时 "Preparing to write..." 冻结 | 150+ 行内容必现，Windows 11 + npm 全局安装场景，已识别为非受控 diff 渲染。 | ⚫ CLOSED | [#31916](https://github.com/anomalyco/opencode/issues/31916) |
| **#35741** | WebChat Agent 模式 LLM 自问自答 | agent 模式下 LLM 自己伪造用户回答并继续执行，5 评论。 | ⚫ CLOSED | [#35741](https://github.com/anomalyco/opencode/issues/35741) |
| **#47547** | Go 订阅月度用量按"百分比之和"误算 100% | 🆕 今日新增 OPEN。`DeepSeek V4 Flash 47.8% + Pro 34.7% = 82.5%` 但被显示为 100%，被强制限制使用，计费逻辑明显缺陷。 | 🟢 OPEN | [#47547](https://github.com/anomalyco/opencode/issues/47547) |

> 其他仍开放的新议题：#47566（多进程 SQLite 写锁 `SQLITE_BUSY`）。

---

## 🛠 重要 PR 进展

| # | PR | 内容 | 链接 |
|---|----|----|------|
| **#47571** | 检测停滞的事件流并在回到前台时 resync | 修复手机锁屏后 `beta.opencode.ai` 会话冻结在锁屏前状态的问题，识别 socket 静默死亡并主动 resync。 | [#47571](https://github.com/anomalyco/opencode/pull/47571) |
| **#47572** | 服务端无响应时为请求加超时 | 修复手机休眠期间 socket 死亡后 `fetch` 阻塞数分钟（Android/Linux TCP 重传超时）的根因，避免 4 槽请求队列被死请求占满。 | [#47572](https://github.com/anomalyco/opencode/pull/47572) |
| **#47573** | 重连后刷新排队中的输入（session.pending）| 修复时间线 `createResource` 仅以 sessionID 为 key、未随 `connected` 转换重跑的缺陷。 | [#47573](https://github.com/anomalyco/opencode/pull/47573) |
| **#47574** | 事件流重连期间状态指示灯脉动 | 配合 #47571 提供可见反馈，避免页面看起来"冻结在绿色圆点"。 | [#47574](https://github.com/anomalyco/opencode/pull/47574) |
| **#47567** | SQLite 语句锁超时后自动重试（closes #47566）| 把 `Effect.orDie` 改成可重试链路，解决多 opencode 进程共享数据目录时的 `database is locked` 报错。 | [#47567](https://github.com/anomalyco/opencode/pull/47567) |
| **#47559** | 引入 `optimize.ts` + 模型工具剪裁 | 用 `opencode.optimize.<lab>` 插件 ID 取代旧的 system-prompt 插件模块；按模型族（GPT、Claude 等）省略 `grep`/`glob`，按 catalog / API / 家族元数据大小写不敏感匹配。 | [#47559](https://github.com/anomalyco/opencode/pull/47559) |
| **#47565** | 重连后对目录 re-sync 进行节流 | 修复 `sync.tsx` 同时执行 `queue.push` + 立即 `data.location.sync` 绕过 pacing，导致 ~20 个目录同时触发刷新风暴。 | [#47565](https://github.com/anomalyco/opencode/pull/47565) |
| **#47564** | 防止慢速 git 读取占满请求队列 | 实测 `GET /api/vcs` p50 **1789ms**、最大 2468ms，是请求队列被卡死的关键来源；引入请求优先级策略。 | [#47564](https://github.com/anomalyco/opencode/pull/47564) |
| **#47570** | 桌面端"最近关闭的项目"管理（closes #47569）| 主页侧边栏从仅显示 5 项 reopen 升级为可管理的列表。 | [#47570](https://github.com/anomalyco/opencode/pull/47570) |
| **#47555** | `--continue` 不再请求占位 session id | 关闭 #47556。`sessionID: "dummy"` 导致服务端以"必须以 `ses_` 开头"400 失败。 | [#47555](https://github.com/anomalyco/opencode/pull/47555) |

> 已合并的体验优化 PR（已 CLOSED）：#47560（保留 CORS 头让预检可缓存，节省 20% 网络时间）、#47561（事件突发合并 catalog 拉取）、#47548（Bedrock provider 通过 IMDS 自动发现凭证，跟进 #47436）、#47387（TUI / CLI 把 OpenCode Go 排在 Zen 之前）。

---

## 📈 功能需求趋势

从今日活跃 Issue 中可提炼出 5 条社区最关注的方向：

1. **会话与插件生命周期扩展** — #28695（session hooks）、#35728（`background.extend()` 注入消息）、#35703（Desktop/TUI 目录统一），核心诉求是让插件能管理持久状态、跨会话通信。
2. **模型兼容性补齐**
   - Copilot Gemini 结构化 tool call（#15315）
   - 自定义 OpenAI-compatible 后端的 GPT-5.5 reasoning + tools 通路（#35732）
   - 兼容后端的 Claude thinking/reasoning 显式支持（#35733）
   - DeepSeek V4 Flash 的 DSML/XML 风格 tool call（#34676）
   - Bedrock IMDS 自动凭证（#35798 → 已并入 #47548）
3. **结构化输出鲁棒性** — #25430（`retryCount` 未生效）说明 schema validation 失败时缺乏重试路径，是 agent 可靠性短板。
4. **Desktop/TUI 协同与 GUI 体验** — #35751（GUI 侧边栏浏览器预览，对标 Codex）、#29071（Desktop 创建的会话在 TUI 不可见）。
5. **计费/订阅透明度** — #47547 揭示 Go 订阅用量按"百分比之和"展示导致被错误锁定，#35792 反映模型计费异常，社区对账单可解释性需求强烈。

---

## 💬 开发者关注点

整理 Issue 评论与 PR 描述后，开发者反馈集中在以下痛点：

- **升级回归频繁**：v1.17.11 → v1.17.13/14 引入资源占用上涨（#35009）、会话丢失（#35690、#35750）、Go 模型卡死（#35611）。每个小版本都存在数据兼容性问题，迁移路径缺少事务/回滚保护（#16678）。
- **大文件/大 diff 性能差**：TUI "Preparing to write..." 与 Renderer 大 diff 渲染均出现"app not responding"（#31916、#32046），缺少分块/虚拟化方案。
- **请求链路脆弱**：移动端断网恢复（#47571–#47574 系列）、Desktop CORS 预检每请求一次（#47560）、慢 git 调用阻塞后续所有 API（#47564）、多进程 SQLite 写锁（#47566）共同构成网络/IO 层一致性问题。
- **Provider 抽象泄漏**：tool call 标准化在多家模型之间行为不一致（DeepSeek XML、Gemini 文本降级），#47559 引入的 `optimize.ts` 模型工具剪裁是正面回应。
- **插件生命周期不足**：开发者希望拥有会话级 hook、消息注入能力，使插件能真正参与 agent 编排，而不是只能静态注入 system prompt。

---

> 📊 **数据范围**：github.com/anomalyco/opencode，过去 24 小时（2026-09-06）。Issue 50 条 / PR 50 条，本报筛选评论数 Top 30 / Top 20 进行分析。

</details>

<details>
<summary><strong>jcode</strong> — <a href="https://github.com/1jehuang/jcode">1jehuang/jcode</a></summary>

<think>The user wants me to generate a daily community report for the jcode project based on GitHub data from 2026-09-06. Let me analyze the data carefully.

**Data Analysis:**

1. **Releases (past 24 hours):** None - I should skip this section.

2. **Issues (past 24 hours updates, 16 total):**
   - #1159 - Browser Bridges (Playwright-like automation)
   - #928 - TUI multi-line paste bug (Windows)
   - #1160 - More Developer Features
   - #960 - Memory retrieval gaps
   - #393 - Pin overscroll status bar
   - #794 - Download progress shown twice (CLOSED)
   - #582 - Hide unconfigured providers (CLOSED)
   - #1092 - Prompt overlay injected twice
   - #463 - macOS notification opens Script Editor (CLOSED)
   - #471 - Real-time code-feedback tooling (CLOSED)
   - #521 - Notifications over SSH + tmux (CLOSED)
   - #987 - Terminal OPOST/ONLCR cleared (CLOSED)
   - #858 - Hide /login heading (CLOSED)
   - #1184 - Ghostty focus-gained feedback loop (NEW)
   - #1183 - Retry-After capped at 60s (NEW)
   - #1182 - opencode:muse-spark-1.3 fails with 500 (NEW)

3. **Pull Requests (past 24 hours updates, 1 total):**
   - #1181 - fix: repair relative documentation links

**For "社区热点 Issues" - pick 10 most notable:**

I'll prioritize based on:
- High priority bugs
- Recent updates
- High comment counts
- High thumbs up
- New issues
- Open issues needing attention

Top 10 issues to feature:
1. #1184 - NEW Ghostty feedback loop, very critical performance issue
2. #1183 - NEW Retry-After 60s cap, critical for OAuth users
3. #1182 - NEW opencode model fails with 500, important provider compat
4. #928 - TUI paste bug on Windows, high priority, recently updated
5. #960 - Memory retrieval gaps, high priority, fundamental functionality
6. #1092 - Prompt overlay duplication bug, good first issue
7. #1159 - Browser Bridges feature request
8. #1160 - More Developer Features request
9. #393 - Status bar always visible
10. #987 - Terminal OPOST cleared (CLOSED but important)

Actually let me reconsider - the user asked for 10 most worthy issues. Let me pick based on impact and recency.

**For "重要 PR 进展" - pick 10:**
There's only 1 PR in the data! I need to be honest about this. I can't fabricate 10 PRs. I should mention only the 1 PR that's there and note that PR activity was limited.

Let me adjust my approach - I'll be transparent about this.

**Feature trends from issues:**
- Browser/Web automation (Playwright)
- Developer tooling (debugging, syntax awareness)
- Memory system improvements
- TUI polish and fixes
- Terminal compatibility (Ghostty, Windows Terminal, macOS)
- Provider compatibility (Anthropic OAuth, OpenCode)
- UI/UX improvements (status bar, header)

**Developer pain points:**
- Cross-platform terminal compatibility (Windows Terminal, macOS, Ghostty)
- Notification delivery (SSH + tmux, macOS click behavior)
- Provider integration (OAuth rate limits, OpenCode compatibility)
- Memory/retrieval reliability
- TUI paste handling

Let me write the report now in Chinese, professional and concise tone.

Format structure:
1. 今日速览
2. 版本发布 (skip - no releases)
3. 社区热点 Issues (10 items)
4. 重要 PR 进展 (only 1 PR available, will be honest)
5. 功能需求趋势
6. 开发者关注点

Let me draft it.</think>

# jcode 社区动态日报
**日期：2026-09-06**

---

## 📌 今日速览

过去 24 小时，jcode 仓库无新版本发布，但社区活跃度依然较高——共 16 条 Issue 更新，其中 3 条为当天新增。**关注焦点集中在三个方向**：性能类紧急 Bug（Ghostty 反馈循环导致 CPU 占满）、可靠性缺陷（OAuth 速率限制提前放弃请求、OpenCode 新模型 500 错误），以及跨平台 TUI 体验问题。维护者 @1jehuang 提交了 #1181 PR，修复了 16 处文档相对路径失效问题。

---

## 🚀 版本发布

*过去 24 小时无新版本发布。*

---

## 🔥 社区热点 Issues

按关注度与紧迫性排序，精选 10 条：

### 1. [Bug] #1184 Ghostty 窗口聚焦时反馈循环，CPU 飙至 90%+ ✨NEW
**优先级：紧急** | 👍 0 | 评论 0
在 Ghostty 中，空闲 jcode 会话每秒执行约 4.2 万次 `write()` 系统调用（每次 61 字节），客户端占用 66% CPU，Ghostty 渲染线程 90-106%。根因是 `focus-gained` 处理器反复重新触发 mode 1004。
🔗 https://github.com/1jehuang/jcode/issues/1184

### 2. [Bug] #1183 Retry-After 被截断至 60 秒，OAuth 用量限制直接失败 ✨NEW
**优先级：紧急** | 👍 0 | 评论 0
Anthropic API 返回的 `Retry-After` 被静默截断到 60 秒，配合 3 次重试预算，jcode 在 ~2 分钟后即放弃真实的用量限制 429 响应，浪费了 OAuth 账户本就稀缺的额度。
🔗 https://github.com/1jehuang/jcode/issues/1183

### 3. [Bug] #1182 opencode:muse-spark-1.3-contributor-free 500 错误 ✨NEW
**优先级：高** | 👍 1 | 评论 0
jcode 强制使用 `/chat/completions` 端点，而该 OpenCode Zen 模型要求 `/responses` 端点，导致每次请求 3 次重试后失败。新模型兼容性问题值得架构层关注。
🔗 https://github.com/1jehuang/jcode/issues/1182

### 4. [Bug] #928 TUI 多行粘贴自动提交，Windows Terminal 体验受损
**优先级：高** | 👍 1 | 评论 5 | 创建于 2026-08-13
Windows Terminal / conhost 下，jcode 未识别 bracketed paste，多行粘贴会在第一个换行处自动提交；右键粘贴则完全无响应。两类粘贴行为同时失效，对 Windows 用户影响显著。
🔗 https://github.com/1jehuang/jcode/issues/928

### 5. [Bug] #960 记忆检索存在三大缺口
**优先级：高** | 👍 0 | 评论 4 | 标记为 recurring-theme
本地 `all-MiniLM-L6-v2` 后端下：(1) 近字面匹配查询返回零结果；(2) 陈旧记忆持续作为活跃上下文；(3) 中文嵌入向量召回率下降。记忆系统是 jcode 长期上下文能力的基石。
🔗 https://github.com/1jehuang/jcode/issues/960

### 6. [Feature] #1159 内置浏览器自动化桥接（Playwright 风格）
**优先级：增强** | 👍 0 | 评论 6 | 24h 内更新
希望增加 Playwright 风格的浏览器自动化桥接，让 agent 能直接驱动浏览器完成端到端测试与网页交互，扩大 jcode 的能力边界。
🔗 https://github.com/1jehuang/jcode/issues/1159

### 7. [Feature] #1160 借鉴 Oh My Pie 的开发者体验特性
**优先级：增强** | 👍 0 | 评论 5 | 24h 内更新
社区提议引入调试器、语法感知等深度开发者特性，对标同类产品 Oh My Pie，反映出用户对"专业级 IDE 体验"在 TUI 内的诉求。
🔗 https://github.com/1jehuang/jcode/issues/1160

### 8. [Bug] #987 终端退出后 OPOST/ONLCR 被清除，输出呈"楼梯状" [已关闭]
**优先级：高（回归）** | 👍 0 | 评论 1 | 2026-09-05 关闭
exec handoff 让 crossterm 将原始 tty 视为还原目标，导致退出后终端进入 raw 输出模式，所有换行只下移不归位。已关闭，说明修复方案已落地。
🔗 https://github.com/1jehuang/jcode/issues/987

### 9. [Bug] #1092 工作目录为 `$HOME` 时 prompt-overlay 被加载两次
**优先级：中** | 👍 0 | 评论 2 | good first issue
`./.jcode/prompt-overlay.md` 与 `~/.jcode/prompt-overlay.md` 解析为同一文件，`load_prompt_overlay_files_from_dir` 未去重，导致 system prompt 内容翻倍。问题边界清晰，适合首次贡献者。
🔗 https://github.com/1jehuang/jcode/issues/1092

### 10. [Feature] #393 配置选项：始终固定底部状态栏
**优先级：低** | 👍 1 | 评论 3 | 创建于 2026-06-22
默认行为下状态栏仅在 overscroll 时出现 1.5 秒，部分用户希望常驻以观察模型/上下文/工作目录。属于 TUI 可用性微优化。
🔗 https://github.com/1jehuang/jcode/issues/393

---

## 🔧 重要 PR 进展

> **说明**：过去 24 小时仓库仅合并了 1 个 PR，反映维护者当前精力集中在高优先级 Bug 上，PR 节奏放缓。

### #1181 fix: repair relative documentation links ✨NEW
**作者**：@1jehuang | 👍 0
修复 #1179：修正了 6 份架构/审计/规划文档中 16 处失效的相对链接，纯链接路径修复，不涉及正文与结构调整。提交声明独立于任何贡献者分支完成，验证流程完整（修复前已复现全部失效目标）。
🔗 https://github.com/1jehuang/jcode/pull/1181

---

## 📈 功能需求趋势

从 16 条活跃 Issue 中可提炼出以下社区最关注的方向：

| 趋势方向 | 代表 Issue | 社区共识 |
|---------|-----------|---------|
| **🌐 浏览器/Web 自动化** | #1159 | 希望内建 Playwright 风格能力，将 jcode 从 CLI 工具扩展为完整自动化平台 |
| **🛠 深度开发者工具链** | #1160、#471 | 调试器、语法感知、LSP、结构化替换、读前守卫——形成"IDE 能力下沉到 TUI"的强需求 |
| **🧠 记忆系统可靠性** | #960 | 检索精度、多语言支持、去重——记忆是 jcode 长期价值的关键基础设施 |
| **🪟 跨平台 TUI 兼容** | #928、#1092、#1184 | Windows Terminal、Ghostty、macOS conhost 三端的差异需系统化处理 |
| **🔌 提供商兼容性** | #1182、#1183、#471（已关）| 端点路由、Retry-After 处理、订阅账户的限流策略是模型适配核心 |
| **🎨 UI 信息密度优化** | #393、#582（已关）、#858（已关）| 头部信息、状态栏常驻化、按需隐藏冗余项——属于渐进式打磨 |

---

## 💬 开发者关注点

综合本次数据，开发者反馈集中在以下**高频痛点**：

1. **终端协议碎片化**：Windows Terminal、conhost、Ghostty、SSH+tmux 各有各的边界行为（bracketed paste、focus event、OSC 通知），同一份代码难以兼顾。社区呼唤**统一的终端能力探测层**。

2. **通知机制不可靠**：macOS 点击唤起 Script Editor 而非 jcode（#463 已关）、SSH+tmux 下通知不可达（#521 已关）——表明当前的 `osascript` 方案缺乏鲁棒性，**OSC 终端内通知**成为共识方向。

3. **速率限制策略过于"急躁"**：#1183 揭示出 60 秒截断 + 3 次重试的组合对 OAuth 订阅账户极不友好——**对真实用量限制应让位而非死磕**。

4. **内存检索失效后果严重**：#960 的三类缺陷均会直接影响 agent 的上下文连贯性，是除性能外**最影响"jcode 是否真的有用"的体验维度**。

5. **新模型集成滞后**：#1182 反映出 jcode 在适配 OpenAI Responses API 等新一代接口时存在端点硬编码问题，**模型兼容矩阵需要更灵活的声明式配置**。

---

*报告基于 2026-09-05 至 2026-09-06 期间 GitHub 数据自动生成。*

</details>

<details>
<summary><strong>pi</strong> — <a href="https://github.com/earendil-works/pi">earendil-works/pi</a></summary>

<think>Let me analyze this GitHub data for the pi project (earendil-works/pi) and generate a comprehensive daily report in Chinese for 2026-09-06.

Key observations:
1. **Release**: v0.85.1 was released with GPT-6 Astra support
2. **Top issues** by comments:
   - #7547: Windows usage issues (52 comments, OPEN)
   - #5023: Terminal scrolling bug (19 comments, CLOSED)
   - #8896: /export HTML drops context (8 comments, OPEN)
   - #6300: Windows input line redrawn (8 comments, OPEN)
   - #8834: Package namespace for skills (5 comments, CLOSED)
   - #8684: PI_OFFLINE undocumented behavior (5 comments, OPEN)
   - #9132: dist/cli.js static import bug (5 comments, CLOSED) - Important packaging issue
   - #7317: OpenAI Responses stateful (4 comments, CLOSED)
   - #6676: Codex/OpenAI responses/compact (4 comments, CLOSED)
   - #9212: Sonnet-5 truncated edit calls (3 comments, CLOSED)
   - #5200: IME candidate window (3 comments, CLOSED)
   - #9209: GitHub Copilot GPT-6 Astra routing (3 comments, CLOSED)

3. **Notable PRs**:
   - #9222: Reject reload during active session operations (OPEN)
   - #9096: Meta provider with Muse OAuth (OPEN)
   - #9219: Preserve UI prototype methods (CLOSED)
   - #9137: Nix flake (OPEN, WIP)
   - #9163: Simplify clipboard handling (CLOSED)
   - #9214: Invoke skills mid-sentence (CLOSED)
   - #9172: Prevent broken package root publication (CLOSED)
   - #9170: Declare pi-server runtime dependency (CLOSED) - Fix for #9132
   - #9117: Prompt and tool changes as system message deltas (OPEN)
   - #9116: Mid-conversation system messages (OPEN)

4. **Themes**:
   - Windows compatibility issues (multiple)
   - GPT-6 Astra integration issues (Copilot routing, Sonnet-5 truncation)
   - Packaging/dependency issues in 0.85.0
   - Vercel AI Gateway quirks
   - Skill/template mid-sentence invocation
   - Session projection/compaction refactoring
   - New providers (Meta, LLM Gateway)
   - OpenAI Responses API features (async tools, server-side compaction)
   - TUI improvements (clipboard, scroll indicators, Mermaid rendering)

Let me draft a comprehensive Chinese daily report.</think>

# Pi 社区动态日报 · 2026-09-06

## 📌 今日速览

**0.85.1 紧急修复版上线**，重点补回 0.85.0 中遗漏的 `@earendil-works/pi-server` 与 `@earendil-works/pi-client` 依赖声明，修复 npm 安装后无法启动子会话的问题；同日社区集中反馈 GPT-6 Astra 在 GitHub Copilot / Vercel Gateway 上的路由与缓存计费问题，以及多项 Windows TUI 兼容性问题，维护者已开始密集回合并提交修复 PR。

---

## 🚀 版本发布

### v0.85.1 — 紧急修复版

**发布时间**：2026-09-05 / 06

**核心变更**：
- **GPT-6 Astra 接入**：通过 OpenAI API Key 与 OpenAI Codex 订阅即可使用（详见 [API Keys](https://github.com/earendil-works/pi/blob/v0.85.1/packages/coding-agent/docs/providers.md#api-keys) 与 [OpenAI Codex](https://github.com/earendil-works/pi/blob/v0.85.1/packages/coding-agent/docs/providers.md) 文档）
- **依赖修复**：修复 0.85.0 中 `dist/cli.js` 静态导入 `@earendil-works/pi-server` 但未在 `package.json` 声明的问题（[#9132](https://github.com/earendil-works/pi/issues/9132) / [#9170](https://github.com/earendil-works/pi/pull/9170) / [#9172](https://github.com/earendil-works/pi/pull/9172)）
- **PR 合并**：`#9182` 跳过失效 runner 的 session 事件、`#9208` 修正 `--no-extension` → `--no-extensions` 等多项修复

> ⚠️ 仍存留问题：用户反馈通过 `npm install -g @earendil-works/pi-coding-agent@0.85.1` 后 `pi-subagents` 子会话仍失败（[#9218](https://github.com/earendil-works/pi/issues/9218)），建议关注 0.85.2 进展。

---

## 🔥 社区热点 Issues（Top 10）

| # | Issue | 评论 | 状态 | 重要性 |
|---|-------|-----|------|--------|
| 1 | [**#7547** Windows 使用 Pi 的方式与痛点汇总](https://github.com/earendil-works/pi/issues/7547) | 52 | OPEN | ⭐⭐⭐ 维护者主动收集 Windows 兼容性反馈，是判断 Windows 支持投入度的核心帖 |
| 2 | [**#9132** 0.85.0 发布包缺少 `pi-server` 依赖声明](https://github.com/earendil-works/pi/issues/9132) | 5 👍5 | CLOSED | ⭐⭐ 引发 v0.85.1 紧急修复的根本问题 |
| 3 | [**#5023** 终端无故滚动到开头](https://github.com/earendil-works/pi/issues/5023) | 19 | CLOSED | ⭐⭐ 长期存在但难以复现的 TUI 渲染 bug |
| 4 | [**#8684** `PI_OFFLINE` 静默禁用所有 provider 模型发现](https://github.com/earendil-works/pi/issues/8684) | 5 | OPEN | ⭐ 文档与实际行为不符，离线环境用户极易踩坑 |
| 5 | [**#8896** `/export` HTML 静默丢弃 `display:false` 上下文](https://github.com/earendil-works/pi/issues/8896) | 8 | OPEN | ⭐⭐ 导出完整性与 `display` 字段语义争议 |
| 6 | [**#6300** Windows TUI 输入行每次按键重绘（换行显示）](https://github.com/earendil-works/pi/issues/6300) | 8 | OPEN | ⭐ Windows 用户高频反馈的核心可用性问题 |
| 7 | [**#8834** `pi.namespace` 包命名空间提案](https://github.com/earendil-works/pi/issues/8834) | 5 | CLOSED | ⭐ skills/prompt 模板的统一命名空间设计讨论 |
| 8 | [**#9212** Sonnet-5 经 Vercel Gateway：13% edit 调用被截断](https://github.com/earendil-works/pi/issues/9212) | 3 | CLOSED | ⭐ 揭示 Sonnet-5 adaptive thinking 在 gateway 下的稳定性问题 |
| 9 | [**#9209** Copilot GPT-6 Astra 被路由到 `/chat/completions`（被拒绝）](https://github.com/earendil-works/pi/issues/9209) | 3 | CLOSED | ⭐⭐ 0.85.1 新模型上线即暴露的路由错误 |
| 10 | [**#6451** `packages/agent` 会话投影与压缩重构](https://github.com/earendil-works/pi/issues/6451) | 2 | OPEN | ⭐⭐ 由 `@badlogic`（核心维护者）发起，影响未来架构 |

> **社区反应观察**：`#7547`（Windows 痛点汇总帖）评论数遥遥领先，远超其他议题，表明 Windows 兼容性是当前最广泛的社区痛点。

---

## ️ 重要 PR 进展（Top 10）

### 已合并 / 已关闭（修复类）

| PR | 说明 | 链接 |
|----|------|------|
| **#9170** | 声明 `pi-server` 运行时依赖，修复 0.85.0 安装后无法导入根包 | [→](https://github.com/earendil-works/pi/pull/9170) |
| **#9172** | 防止同类 packaging 缺陷再次发布的预防性 CI 改动（依赖 #9170） | [→](https://github.com/earendil-works/pi/pull/9172) |
| **#9182** | 修复 session 替换竞态下向已失效 runner 发送事件的问题 | [→](https://github.com/earendil-works/pi/pull/9182) |
| **#9208** | RPC 扩展 UI 示例使用正确的 `--no-extensions` 标志 | [→](https://github.com/earendil-works/pi/pull/9208) |
| **#9215** | TUI 允许零行自定义 footer，去除 fullscreen 模式下多余空行 | [→](https://github.com/earendil-works/pi/pull/9215) |
| **#9214** | 实现 skills / prompt templates 中句调用（行内 `/skill:name` 展开） | [→](https://github.com/earendil-works/pi/pull/9214) |
| **#9163** | 简化 TUI 剪贴板处理，便于在 NixOS 等环境编译 | [→](https://github.com/earendil-works/pi/pull/9163) |
| **#9219** | 修复 `wrapUIPromptContext` 丢失原型方法与 Proxy 陷阱 | [→](https://github.com/earendil-works/pi/pull/9219) |

### 仍开放（功能类）

| PR | 说明 | 链接 |
|----|------|------|
| **#9222** | RPC 模式下拒绝在 session 操作活跃时 reload，避免向模型发送错误结果 | [→](https://github.com/earendil-works/pi/pull/9222) |
| **#9096** | 新增 Meta provider + Muse 订阅 OAuth 流（解决 #7543） | [→](https://github.com/earendil-works/pi/pull/9096) |
| **#9116** | `pi-ai` 增加「会话中途系统消息」能力（#8998 拆分第一层） | [→](https://github.com/earendil-works/pi/pull/9116) |
| **#9117** | coding-agent 将 prompt 与工具变更作为系统消息 delta 投递（#8998 第二层） | [→](https://github.com/earendil-works/pi/pull/9117) |
| **#9137** | 新增 Nix flake 支持（**WIP**，由核心维护者 `mitsuhiko` 提交） | [→](https://github.com/earendil-works/pi/pull/9137) |

---

## 📈 功能需求趋势

从近 24 小时高活跃议题提炼：

1. **新模型/Provider 接入**
   - Meta + Muse OAuth（#9096）
   - LLM Gateway / LLM Gateway DevPass（#7610）
   - GPT-6 Astra 完善（Copilot 路由修复 #9209、async tool calling #9113）
   - Requesty 接入（#5473）

2. **OpenAI Responses API 深度集成**
   - 服务端 `previous_response_id` 状态延续（#7317）
   - `/responses/compact` 服务端压缩（#6676）
   - top-level `instructions` 支持（#8734）

3. **Skill / Template 系统增强**
   - `pi.namespace` 命名空间（#8834）
   - 中句调用支持（#8457 / #9214）
   - 把 `display:false` 消息纳入 `/export`（#8896）

4. **跨平台与打包**
   - Windows TUI 兼容性整体优化（#7547 / #6300 / #9169 / #5200）
   - NixOS 构建（#9137 / #9163）
   - 发布包依赖完整性（#9132 / #9170 / #9172 / #9218）

5. **会话架构演进**
   - `packages/agent` 会话投影与压缩重构（#6451）
   - 中途系统消息 delta 投递（#8998 系列）

6. **可观测性与成本**
   - Vercel Gateway 路由配置 `vercelGatewayRouting` 实际失效（#9211）
   - 1h 缓存写入计费归类为 5m 费率（#9210）

---

## 👨‍💻 开发者关注点与高频痛点

###  严重痛点
- **打包发布质量**：0.85.0 漏声明依赖 → 0.85.1 仍有遗漏（`pi-subagents` 不可用），社区呼吁加强 npm 发布前自检与 peer dependency 校验
- **Windows 一等公民支持缺失**：CMD / PowerShell / Windows Terminal 下输入行重绘、IME 候选框位置错乱（#5200）、全屏模式图像渲染（#9169）等，多个高频 bug 长期开放

### 🟡 中等痛点
- **模型/Provider 路由配置错误**：GPT-6 Astra 错误走 `/chat/completions`、Vercel Gateway 路由字段对 Anthropic 目录无效——需要按 provider×model 维度细化默认配置
- **离线环境变量语义模糊**：`PI_OFFLINE` 实际影响远超文档描述，导致用户错误预期
- **TUI 体验细节**：菜单键位不一致（`/` 与 `@` 行为不同，#9199）、slash 命令异步竞态（#9220）、`bun run eval` 无限递归（#9223）

### 🟢 高频需求
- **更强的 session 恢复与重载安全性**：在 RPC 模式下防止向失效 runner / 已变更上下文投递结果（#9222、#9182）
- **OpenAI Responses 高级特性**：async tool calling、server-side compaction，让长会话摆脱 history replay 开销
- **可观测性**：成本与缓存统计应准确反映 provider 实际行为（1h vs 5m 计费、模型截断检测 #9212）

---

## 📊 数据总览

- **Release**：1 个（v0.85.1）
- **Issues 更新**：50 条（其中 30 条核心议题已展示）
- **PR 更新**：20 条
- **最热议题**：Windows 使用调研（#7547，52 评论）
- **当日集中问题**：GPT-6 Astra 上线 → Copilot 路由 / Sonnet-5 截断 / 1h 缓存计费 三连发；0.85.0 打包缺陷连锁修复

---

*数据来源：[earendil-works/pi](https://github.com/earendil-works/pi) · 截止时间 2026-09-06*

</details>

---
*本日报由 [Big Model Radar](https://github.com/96loveslife/big_model_radar) 自动生成。*
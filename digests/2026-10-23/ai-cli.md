# AI CLI 工具社区动态日报 2026-10-23

> 生成时间: 2026-10-23 08:00 UTC | 覆盖工具: 8 个

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

# AI CLI 生态横向对比分析报告

**数据日期：2026-10-23**  
**范围：Claude Code、OpenAI Codex、Gemini CLI、GitHub Copilot CLI、Kimi Code CLI、OpenCode、jcode、pi**  
**说明：Issue/PR 数量按所提供的过去 24 小时摘要口径统计；“—”表示未提供明确数量。**

---

## 1. 生态全景

1. **竞争重点已从模型能力转向 CLI 的执行可靠性和治理能力。** Claude Code、Codex 和 Copilot CLI 都集中暴露了权限、沙箱、Hooks、MCP 认证及后台 Agent 安全问题。
2. **多端一致性成为普遍痛点。** CLI、IDE、Desktop、Cloud 和移动端之间普遍存在模型目录、配置、会话恢复、认证及 UI 行为不一致。
3. **Agent 生命周期管理仍未完全成熟。** 子代理超时、误报成功、无法取消、事件归因不清和任务恢复等问题，在多个项目中重复出现。
4. **MCP、OAuth 与插件生态快速扩张，但基础设施适配滞后。** 工具数量上限、发现超时、启动竞态、Token 刷新和远程回调成为高频集成风险。
5. **生态进入“快速扩张后的稳定化阶段”。** OpenCode V2、jcode 和 pi 都在补齐会话迁移、长任务性能、跨平台兼容和可观测性，而不仅是增加模型或功能。

---

## 2. 各工具活跃度对比

| 工具 | Issues | PR | Release | 活跃度判断 |
|---|---:|---:|---|---|
| **Claude Code** | 至少 10 个重点 Issue | 7 个更新，均已关闭 | **v2.1.309** | 社区热度最高，安全与插件治理议题突出 |
| **OpenAI Codex** | 至少 10 个重点 Issue | 至少 10 个重点 PR | **rust-v0.164.0**，另有 alpha 版本 | 工程迭代强，功能和基础设施并进 |
| **Gemini CLI** | 至少 10 个重点 Issue | 至少 10 个重点 PR | **v0.67.0-nightly.20261023** | 迭代非常快，Agent/MCP 可靠性问题密集 |
| **GitHub Copilot CLI** | 至少 10 个重点 Issue | 0 个更新 | **v1.0.103** | 安全与 MCP 认证是主要风险，用户反馈较集中 |
| **Kimi Code CLI** | 0 | 0 | 无 | 过去 24 小时无活动，暂不具备可比活跃度 |
| **OpenCode** | 至少 10 个重点 Issue | 至少 10 个重点 PR | **v1.19.4** | V2 迁移驱动高活跃，功能扩展和治理并行 |
| **jcode** | 8 个 Issue | 34 个 PR | **v0.99.1** | 工程开发速度极高，Provider 和 TUI 迭代密集 |
| **pi** | 至少 10 个重点 Issue | 27 个更新 PR | 无 | 性能和扩展生态活跃，维护节奏较高 |

### 数据解读

- **jcode 的 PR 数量最高（34 个）**，但这同时意味着高并发开发带来的测试隔离、死锁和回归压力。
- **pi 的 27 个 PR**主要集中在会话存储、HTML 导出、终端输入和扩展 API，说明项目正从基础 Agent CLI 向可扩展开发平台演进。
- **Claude Code、Codex、Gemini CLI、OpenCode**均有明确版本发布，且 Issue/PR 同时保持高位，属于当前生态的高强度竞争项目。
- **Kimi Code CLI**今日无活动，不能据此判断项目长期成熟度，只能说明当日缺乏公开社区活动。

---

## 3. 共同关注的功能方向

### 3.1 Agent 生命周期与任务可靠性

这是多个工具共同面对的核心问题。

| 工具 | 主要诉求 |
|---|---|
| **Gemini CLI** | 子代理达到 `MAX_TURNS` 却报告 `GOAL/success`；Generalist Agent 无限挂起；Browser Agent 配置不生效 |
| **OpenCode** | V2 后台子代理无法取消；Agent 切换后委派工具残留；后台 Shell 任务缺少可靠完成通知 |
| **pi** | 扩展异步消息未正确等待；MCP OAuth 登录后仍可能长时间 Connecting |
| **Claude Code** | Subagent 压缩期间 Hooks 缺少 Agent 字段，审计归因不准确 |
| **jcode** | Windows Swarm 长时间运行导致内存和磁盘 I/O 失控 |

**共性结论：** Agent 是否真正完成、能否取消、超时后状态如何表达，已成为自动化系统能否可靠编排的关键。

---

### 3.2 权限、沙箱与执行安全

多个项目都暴露出“提示词约束不等于执行层约束”的问题。

- **Claude Code**：`CLAUDE.md`/`AGENTS.md` 缺乏架构级强制；本次版本修复 shell 启动文件、符号链接和 `denyWrite` 问题。
- **Copilot CLI**：可信目录可能自动放行高风险 Shell 命令；后台 Agent 可能绕过 Hooks。
- **Gemini CLI**：持续修复 shell wrapper、命令替换保护和危险命令治理。
- **jcode**：Skill 的 `disable-model-invocation` 未生效，可能导致模型越权调用。

**共性结论：** AI CLI 的权限系统需要从“路径信任/模型服从”升级为基于**实际命令、工具调用图、运行进程和策略优先级**的运行时治理。

---

### 3.3 MCP、OAuth 和外部工具连接

MCP 已成为各工具连接外部系统的主要入口，但稳定性问题高度一致。

- **Copilot CLI**：远程 MCP access token 不刷新；Windows Entra Broker Token 缓存为空；ACP refresh token 使用异常。
- **OpenCode**：MCP Server 启动竞态、OAuth 缺少 `scope` 时重复认证、远程 OAuth 回调困难。
- **Gemini CLI**：MCP `tools/list` 发现超时曾继承过长工具调用超时；大量工具导致 400。
- **Codex**：GitHub Connector 权限记忆、浏览器 Computer Use 权限和站点策略存在争议。
- **pi**：MCP OAuth 登录成功但连接状态不收敛。

**共性结论：** MCP 的问题已经不只是“能否安装”，而是**认证生命周期、启动时序、工具数量、超时、重连和多端一致性**的系统性工程问题。

---

### 3.4 模型目录、模型切换与成本可解释性

- **Codex**：多个模型出现容量不足；不同客户端模型列表不一致；用户希望按任务、模型和 effort 查看配额。
- **jcode**：Grok 4.7 未进入 TUI 模型选择器；OpenAI 持久 WebSocket 工具调用续接异常。
- **Claude Code**：上下文窗口用量显示回归；额度重置和模型权限不透明。
- **OpenCode**：DeepSeek V4.1 Flash 在约 256k 上下文后缓存失效，成本明显上升。
- **pi**：`modelOverrides` 对分类器模型静默失效；辅助模型缺少 Token 归属信息。
- **Gemini CLI**：用户希望更容易发现和调用新模型、Skills 与 Subagents。

**共性结论：** 模型选择已不只是“下拉框问题”，而是如何向用户解释**当前模型、实际推理配置、上下文容量、缓存状态、配额消耗和失败原因**。

---

### 3.5 会话恢复、迁移和可观测性

- **OpenCode**：V1→V2 后非 Git 会话消失；会话标题不再生成；后台服务状态可能跨 Profile 污染。
- **Copilot CLI**：`copilot --resume` 可能进入空会话；Automode 会隐藏完整模型输出。
- **Claude Code**：Remote Control 会话归档和恢复、上下文显示、Subagent Hook 事件存在异常。
- **pi**：大型会话 HTML 导出、复制和 TUI 渲染性能下降。
- **Codex**：goals/subagent 路由发现超时，远程和长任务恢复能力不足。

**共性结论：** 用户希望会话成为可靠的执行资产：可以恢复、追踪、回放、导出，并明确区分主会话、子代理、内部摘要器和后台任务。

---

### 3.6 跨平台兼容性与终端体验

高频平台包括 **Windows、WSL2、macOS、Wayland、Git Bash、SSH 和 Linux Sandbox**。

典型问题包括：

- Windows 反斜杠和 shell 转义异常；
- WSL2 语音服务崩溃；
- macOS 进程组中止竞态；
- Wayland Browser Agent 失败；
- Linux Sandbox DNS 兼容性问题；
- SSH 下终端键位和鼠标转义序列异常；
- RTL/CJK Markdown 渲染问题。

**共性结论：** CLI 生态正在从 Unix 优先工具转向跨平台开发入口，终端协议、shell 编码和桌面环境差异需要统一测试矩阵。

---

## 4. 差异化定位分析

| 工具 | 功能侧重 | 目标用户 | 技术路线与生态位置 |
|---|---|---|---|
| **Claude Code** | 终端 Agent、插件、Hooks、多账号、组织策略治理 | 个人开发者、团队和企业安全团队 | 强调 Claude 模型能力与插件策略层级，正在向企业可治理 Agent 平台发展 |
| **OpenAI Codex** | CLI、Desktop、Cloud、IDE、Computer Use、多 Agent 编排 | OpenAI 生态开发者、远程自动化和企业用户 | 产品面最广，工程重点覆盖 app-server、线程 fork、环境 Hooks、模型目录和多端一致性 |
| **Gemini CLI** | 多 Agent、浏览器自动化、MCP、Skills、AST 代码库理解 | Google 生态用户、Agent/MCP 实验者 | 功能迭代激进，重视 A2A、工具调度、代码库导航和扩展能力，但稳定性成本较高 |
| **GitHub Copilot CLI** | GitHub 生态、Shell、MCP、企业身份和 IDE/ACP 集成 | GitHub 用户、企业开发者和远程开发者 | 依托 GitHub 平台优势，重点在权限、Hooks、OAuth、MCP 和跨终端一致性 |
| **OpenCode** | 多 Provider、插件、图像/决策模型、后台任务、桌面端 | 多模型用户、开放生态开发者和重度定制用户 | Provider 和插件扩展最积极，V2 后正在处理迁移、会话和服务生命周期问题 |
| **jcode** | 多模型 Provider、Swarm、TUI、远程开发、Claude Code 兼容 | 追求速度、模型自由度和终端体验的开发者 | 迭代速度极快，强调 Swarm 与模型切换，但资源控制和 Provider 适配稳定性仍需观察 |
| **pi** | 可扩展 Agent runtime、会话导出、终端交互、模型缓存和工具展示 | 高级 Agent 开发者、SDK/扩展作者和性能敏感用户 | 更接近可编程 Agent harness，扩展 API 和性能优化是主要卖点 |
| **Kimi Code CLI** | 今日无公开动态，暂无法判断当前重点 | 暂无足够当日数据 | 当前缺少可观察的社区和发布活动 |

### 定位差异总结

- **Claude Code**：企业插件治理和安全边界最突出。
- **Codex**：产品覆盖面最广，CLI、桌面端、云端和浏览器 Agent 都在快速演进。
- **Gemini CLI**：多 Agent、MCP 和浏览器自动化方向最激进。
- **Copilot CLI**：最贴近 GitHub 企业开发环境，身份与权限生态是其核心。
- **OpenCode**：模型和 Provider 覆盖最积极，适合开放生态，但 V2 迁移风险较高。
- **jcode**：最快迭代、模型自由度高，适合尝鲜，但稳定性成熟度仍需验证。
- **pi**：更偏底层 Agent 平台和扩展运行时，适合开发者构建定制工具链。

---

## 5. 社区热度与成熟度

### 5.1 社区热度较高的项目

#### 第一梯队：Claude Code、Codex、Gemini CLI

- Issue 反馈量大且主题持续；
- 每天都有版本或大量工程变更；
- 用户、插件开发者和企业安全团队共同参与；
- 已形成较完整的反馈闭环。

#### 第二梯队：OpenCode、pi、jcode

- **OpenCode**：V2 迁移和 Provider 扩展带来高关注；
- **pi**：性能、扩展 API 和会话管理议题集中；
- **jcode**：PR 数量极高，但 Issue 数量相对少，说明项目仍处于快速建设期。

#### 观察组：GitHub Copilot CLI

虽然提供的数据中 PR 更新为 0，但安全问题较多且单个 Issue 影响面大。GitHub 生态和企业用户基础使其潜在影响力较高，不过从公开仓库当日活跃度看，暂时低于前述高强度项目。

#### 低活跃或数据不足：Kimi Code CLI

过去 24 小时无活动，无法评估其当前社区活跃度、产品迭代节奏或长期成熟度。

---

### 5.2 成熟度判断

| 项目 | 当前成熟度判断 | 主要依据 |
|---|---|---|
| **Claude Code** | 产品成熟度高，治理能力仍在补齐 | 版本稳定、用户量大，但安全策略和跨端体验仍持续变化 |
| **Codex** | 功能成熟度高，工程复杂度快速上升 | 多端产品齐全，但容量、配额、模型同步和远程稳定性问题明显 |
| **Gemini CLI** | 快速迭代期 | Agent/MCP 功能丰富，但挂起、误报成功、配置未生效问题较多 |
| **Copilot CLI** | 基础能力较成熟，安全和 MCP 生态仍需加强 | 已正式发布，但 OAuth、Token 缓存和后台 Agent 权限存在风险 |
| **OpenCode** | 扩展能力成熟，V2 兼容治理阶段 | 多 Provider 生态强，但迁移和会话管理产生明显回归 |
| **jcode** | 高速发展期 | PR 数量极高，Provider、TUI、Swarm 活跃，但性能和稳定性风险较突出 |
| **pi** | 基础 runtime 逐渐成熟，扩展生态发展期 | 会话、导出和终端稳定性持续修复，性能预算意识增强 |
| **Kimi Code CLI** | 数据不足 | 当日无活动，无法做可靠判断 |

---

## 6. 值得关注的趋势信号

### 6.1 Agent CLI 将从“模型客户端”变成“运行时安全平台”

未来的竞争重点不再只是回答质量，而是：

- 工具权限如何判定；
- 插件能否扩大权限；
- 后台 Agent 是否经过同样的 Hooks；
- Shell、浏览器、MCP 和 Connector 是否拥有统一审计；
- 组织策略能否覆盖个人配置。

**参考价值：** 企业选型不应只看模型效果，还应评估权限模型、审计完整性、策略优先级和失败时的默认行为。

---

### 6.2 MCP 认证和工具发现会成为基础设施级瓶颈

大量项目同时暴露 OAuth 刷新、Token 缓存、工具发现超时、Server 启动竞态和工具数量过多问题。

**参考价值：** 集成 MCP 时应重点测试：

1. Token 过期和 refresh token 场景；
2. Server 重启与首个请求竞态；
3. 工具数量较大时的请求大小和上下文成本；
4. SSH、容器和远程 TUI 的 OAuth 回调；
5. 多 Profile、多 Agent 并发连接。

---

### 6.3 多端一致性需要从“功能对齐”升级为“状态协议对齐”

CLI、IDE、Desktop、Cloud 和 ACP 之间的差异，已经影响：

- 模型列表；
- 推理强度；
- 配额显示；
- 会话恢复；
- 沙箱设置；
- Hooks；
- MCP 认证；
- Agent 配置。

**参考价值：** 企业部署应优先选择具备统一配置源、统一会话协议和统一权限策略的产品，而不是仅比较终端功能数量。

---

### 6.4 长上下文正在暴露新的成本和缓存问题

Codex 的容量错误、OpenCode 的 DeepSeek 缓存失效、pi 的缓存预热需求，以及 Claude Code 的上下文显示回归，说明长上下文已成为核心矛盾：

- 上下文容量增大不等于可用；
- 缓存失效会显著推高成本；
- token 用量、缓存读写和配额消耗缺乏统一解释；
- 客户端可能无法准确展示剩余上下文。

**参考价值：** 长上下文场景应要求产品提供按模型、缓存和任务拆分的 usage 明细，并具备压缩、续接和失败恢复能力。

---

### 6.5 子代理和多 Agent 编排需要“可验证的生命周期”

多个项目都出现以下问题：

- 超时却报告成功；
- 无法取消；
- 主代理和子代理事件混淆；
- Agent 切换后工具仍残留；
- 后台任务没有完成通知；
- 任务恢复状态不完整。

**参考价值：** 多 Agent 系统必须至少具备：

- 稳定的 agent/task ID；
- 可区分的终止原因；
- 可取消、可恢复状态机；
- 完整事件和 transcript；
- 工具调用与执行主体的一一关联；
- 超时、重试和人工接管机制。

---

### 6.6 性能治理将逐渐产品化

jcode 的 Windows Swarm 内存异常、pi 的大型会话卡顿、Codex 的多线程/图片队列问题，以及 OpenCode 的插件事件循环阻塞，共同表明：

- Agent 并发不等于性能提升；
- 长会话重渲染会成为明显瓶颈；
- 插件、MCP 和搜索工具都可能成为资源消耗源；
- 用户开始要求 benchmark 和性能预算。

**参考价值：** 选型时应增加以下指标：启动时间、峰值内存、长会话响应、并发任务稳定性、上下文加载时间及缓存成本。

---

### 6.7 安全边界需要从“提示词合规”转向“执行层控制”

`CLAUDE.md`、`AGENTS.md`、Skill 配置和模型指令都不能单独构成可靠安全边界。社区反馈反复表明：

- 指令可能被模型忽略；
- 插件可能修改或绕过规则；
- 后台 Agent 可能绕过前台 Hook；
- 可信路径不等于命令安全；
- 组织策略需要具备不可降级属性。

**参考价值：** 评估产品时，应验证安全策略是否在 Shell、MCP、浏览器、插件、后台任务和子代理等所有执行路径上统一生效。

---

## 结论与建议

### 对技术决策者

- **优先关注治理能力**：Claude Code、Codex 和 Copilot CLI 的企业策略、MCP 权限和多端一致性值得优先验证。
- **优先关注稳定性**：OpenCode V2、Gemini CLI、jcode 和 pi 当前都存在迁移、Agent 生命周期或性能风险。
- **不要仅依据模型能力选型**：配额解释、缓存、会话恢复和后台任务可靠性已经直接影响生产使用成本。

### 对开发者

- 集成 MCP 时重点测试 OAuth 刷新、启动竞态和工具规模。
- 使用多 Agent 时建立明确的任务状态机和终止原因。
- 长时间运行前验证 Shell 输出消费、进程回收、内存上限和会话存储性能。
- 对模型切换和上下文压缩记录完整 usage：模型、缓存、压缩、工具调用和重试。
- 跨平台开发应建立 Windows、WSL2、macOS、Wayland、SSH 和 Linux Sandbox 的统一测试矩阵。

**总体判断：** 2026-10-23 的 AI CLI 生态主线不是继续堆叠模型或命令，而是围绕**安全执行、可靠编排、MCP 连接、多端一致性、长上下文成本和可观测性**建立下一轮竞争壁垒。

---

## 各工具详细报告

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills 社区热点

> 数据来源: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills 社区热点报告

**数据范围：**截至 2026-10-23。  
**口径说明：**PR 列表的评论数均为 `undefined`，无法据此准确计算“评论最高”；以下排行结合 PR 可见性、问题关联度、持续更新时间和社区影响进行判断。所有列出的 PR 截止数据日期均为 **Open**。

## 1. 热门 Skills 排行

| 排名 | Skill / PR | 功能与社区热点 | 当前状态 |
|---|---|---|---|
| 1 | [mcp-builder 兼容修复 #1742](https://github.com/anthropics/skills/pull/1742) | 适配 MCP Python SDK 2.x 的客户端重命名，并支持自定义 HTTP Header，直接影响真实 MCP Server 的连接与鉴权。相关评测另有 [MCP 评测全部失败 #1390](https://github.com/anthropics/skills/issues/1390)，说明 MCP 集成仍是高频痛点。 | Open |
| 2 | [skill-creator 触发评测修复 #1298](https://github.com/anthropics/skills/pull/1298) | 隔离触发评测、修复 Windows 子进程管道选择错误，并区分“未触发”和“运行失败”。对应 [run_eval.py 触发率为 0% #556](https://github.com/anthropics/skills/issues/556) 和 [多项评测失效 #1383](https://github.com/anthropics/skills/issues/1383)。这是当前生态的基础设施级议题。 | Open |
| 3 | [skill-creator YAML 解析修复 #1997](https://github.com/anthropics/skills/pull/1997) | 正确解析 SKILL.md YAML frontmatter，避免描述、引号和续行在评测阶段被错误改写。直接影响 Skill 触发准确率和描述优化结果。 | Open |
| 4 | [webapp-testing 安全与准确性修复 #1980](https://github.com/anthropics/skills/pull/1980) | 移除 `shell=True`，降低 Web 测试工具中的命令注入风险。另有 [textarea/select 识别错误 #1976](https://github.com/anthropics/skills/pull/1976)，显示 Web 测试 Skill 正同时补安全与行为正确性。 | Open |
| 5 | [DOCX 修订接受验证 #1792](https://github.com/anthropics/skills/pull/1792) | LibreOffice 超时时不再误报成功，并在输出 DOCX 中检查修订标记。最近又出现 [merge_runs.py 生成非法 XML #2018](https://github.com/anthropics/skills/issues/2018)，DOCX 的可靠生成与验证需求持续升温。 | Open |
| 6 | [document-typography #514](https://github.com/anthropics/skills/pull/514) | 自动检查孤行、寡行和编号错位，提升 AI 文档排版质量。其价值不依赖额外用户明确提出“排版”，适合嵌入通用文档工作流。 | Open |
| 7 | [Notion Spec → Implementation #1245](https://github.com/anthropics/skills/pull/1245) | 将产品或技术规格拆解为可执行任务、验收标准和进度跟踪，体现“规格到实施”的端到端工作流需求。同 PR 还包含简历量化审计方向。 | Open |
| 8 | [Skill 质量与安全分析器 #83](https://github.com/anthropics/skills/pull/83) | 提供质量评分和安全分析两类元 Skill，可用于发布前审查。与 [官方命名空间信任边界 #492](https://github.com/anthropics/skills/issues/492) 共同构成社区对 Skill 供应链安全的关注。 | Open |

> 注：PR 列表未提供有效评论数，因此上述并非严格按评论数排序。#1742 等 PR 的 `undefined` 不代表无人关注，可结合关联 Issue、更新活跃度和问题严重性判断。

## 2. 社区需求趋势

### 1. 企业级共享与分发

[组织级 Skill 共享 #228](https://github.com/anthropics/skills/issues/228) 是最突出的产品需求之一。社区期待：

- 企业统一 Skill 库和权限管理；
- 团队内直接共享，而非传递 `.skill` 文件；
- 版本、启用和回收机制；
- 与组织知识库、开发规范及审批流程集成。

### 2. 可复用的 Agent 工作流，而非单点工具

社区提案正从“生成一个文件”转向完整闭环：

- [Reasoning Quality Gate Pipeline #1385](https://github.com/anthropics/skills/issues/1385)：任务前校准、对抗式审查、交付前验证；
- [Notion Spec → Implementation #1245](https://github.com/anthropics/skills/pull/1245)：读取规格、拆分任务、生成验收条件并跟踪进度；
- 未来重点将是跨工具、持久状态和可验证交付，而不只是生成文本。

### 3. Agent 记忆与上下文压缩

[compact-memory #1329](https://github.com/anthropics/skills/issues/1329) 获得较高关注，代表社区希望以结构化、紧凑符号记录：

- 长期任务状态；
- 决策依据和约束；
- 未完成事项；
- 可跨会话检索的持久记忆。

这与降低上下文成本、提高长任务连续性直接相关。

### 4. 安全、治理与供应链可信度

相关需求集中于：

- 官方与社区 Skill 的可信区分：[命名空间信任边界 #492](https://github.com/anthropics/skills/issues/492)；
- Agent 政策、威胁检测和审计：[agent-governance #412](https://github.com/anthropics/skills/issues/412)；
- Skill 发布前质量评估：[质量与安全分析器 #83](https://github.com/anthropics/skills/pull/83)；
- 评测器 XSS：[eval-viewer display-path XSS #1394](https://github.com/anthropics/skills/issues/1394)；
- 工具执行中的命令注入：[webapp-testing `shell=True` #1980](https://github.com/anthropics/skills/pull/1980)。

社区正在从“功能是否可用”转向“能否安全地安装、执行和共享”。

### 5. Skill 自身的可靠性与可验证性

多个高影响问题都指向同一矛盾：工具表面上成功，实际没有正确工作。

- [MCP evaluation 对真实 Server 全部报错 #1390](https://github.com/anthropics/skills/issues/1390)；
- [Skill 触发评测 0% #556](https://github.com/anthropics/skills/issues/556)；
- [DOCX 输出损坏 #2018](https://github.com/anthropics/skills/issues/2018)；
- [DOCX 渐变背景算法错误 #1868](https://github.com/anthropics/skills/issues/1868)。

因此，独立测试、输出验证、明确失败和可重复评测正在成为刚需。

### 6. 专业领域垂直化

社区开始向传统专业流程扩展：

- Web3 智能合约审计：[proofcore-contract-auditor #1771](https://github.com/anthropics/skills/pull/1771)；
- HPC 集群操作：[scnet-hpc #1615](https://github.com/anthropics/skills/pull/1615)；
- 复古游戏开发：[Pyxel #525](https://github.com/anthropics/skills/pull/525)；
- ODT/ODS 文档处理：[ODT Skill #486](https://github.com/anthropics/skills/pull/486)。

这些方向表明 Skills 正从通用生产力扩展到“行业专家流程库”。

## 3. 高潜力待合并 Skills

“近期落地潜力”按社区相关性、问题严重度、适用范围和成熟度综合判断；没有有效评论数，不能简单视为热度排名。

1. **[skill-creator YAML frontmatter 解析 #1997](https://github.com/anthropics/skills/pull/1998)**  
   实际链接应为：[#1997](https://github.com/anthropics/skills/pull/1997)。影响所有 Skill 的触发评测和描述优化，修复范围集中、价值高，具备较高合并优先级。

2. **[skill-creator 触发评测隔离与运行时错误处理 #1298](https://github.com/anthropics/skills/pull/1298)**  
   直接解决 0% 触发率、Windows 兼容性和假阴性评测，是影响 Skill 开发质量的关键修复。

3. **[webapp-testing 移除 `shell=True` #1980](https://github.com/anthropics/skills/pull/1980)**  
   属于安全修复，且修改目标明确；同类行为正确性修复可参见 [#1976](https://github.com/anthropics/skills/pull/1976)。

4. **[mcp-builder 支持 MCP SDK 2.x 和自定义 Header #1742](https://github.com/anthropics/skills/pull/1742)**  
   对当前 MCP 2.x 环境具有直接兼容性价值；若与 [#1390](https://github.com/anthropics/skills/issues/1390) 的评测问题一并验证，落地价值更高。

5. **[DOCX 接受修订：超时报错与输出验证 #1792](https://github.com/anthropics/skills/pull/1792)**  
   能防止“处理失败却宣称成功”，与近期 [非法 XML #2018](https://github.com/anthropics/skills/issues/2018) 共同构成文档 Skill 可靠性修复链。

6. **[skill-creator 直接执行打包脚本 #1681](https://github.com/anthropics/skills/pull/1681)**  
   修复模块导入和过时使用路径，降低 Skill 打包流程的本地使用门槛。

7. **[claude-api 死链修复 #1730](https://github.com/anthropics/skills/pull/1730)**  
   技术改动小，但能避免官方 Skill 因外部链接失效而失去可用性，适合快速合并。

8. **[document-typography #514](https://github.com/anthropics/skills/pull/514)**  
   适用面广、用户价值明确；若能进一步提供可执行排版检查、修复和渲染验证闭环，落地潜力会进一步提高。

## 4. Skills 生态洞察

**当前社区最集中的诉求，是让 Skills 从“能生成内容的提示词集合”升级为可触发、可验证、可治理、可共享且安全可信的工程化 Agent 工作流平台。**

最值得关注的四个抓手是：**可靠评测、端到端交付验证、企业分发与治理、上下文与记忆管理**。

---

# Claude Code 社区动态日报  
**日期：2026-10-23**  
**数据范围：GitHub `anthropics/claude-code` 过去 24 小时更新**

## 1. 今日速览

- Claude Code 发布 **v2.1.309**，重点修复 macOS/Linux 沙箱中的 Bash 启动文件执行、符号链接路径匹配及权限控制问题，安全边界进一步收紧。
- 社区讨论仍集中在**多账号管理、桌面端稳定性、Windows/Git Bash 兼容性、Remote Control 和 Hooks 事件语义**等问题；其中多账号功能请求获得了最高社区热度。
- 过去 24 小时共有 **7 个 PR 更新且全部关闭**，主要围绕插件策略隔离、Diff 面板和类型声明展开；其中多项安全策略 PR 已结束讨论，后续是否合入需关注官方后续提交。

---

## 2. 版本发布

### v2.1.309

本次发布聚焦沙箱安全和命令执行可靠性：

- 修复 macOS 和 Linux 上沙箱 Bash 命令在执行前运行 shell 启动文件的问题。
  - 启动文件此前可能在沙箱之外执行，带来潜在的配置注入和环境绕过风险。
  - 这对使用 Bash 工具执行不可信命令、同时依赖 `.bashrc`、`.zshrc` 等配置的团队尤其重要。
- 修复 macOS 沙箱 `denyWrite` glob 模式在通过符号链接访问路径时未按真实路径生效的问题。
- 进一步改进沙箱行为，降低路径解析和权限控制不一致带来的安全风险。

**版本信息**：[v2.1.309](https://github.com/anthropics/claude-code/releases/tag/v2.1.309)

---

## 3. 社区热点 Issues

以下按社区关注度、问题影响范围和反馈强度挑选 10 个值得关注的 Issue。

### 1. 多 Connector 账号支持

[#27302](https://github.com/anthropics/claude-code/issues/27302)  
**标题：** Support multiple Connector accounts

- 请求在 Claude 和 Claude Code Web 中同时配置同一 Connector 的多个账号。
- 评论 **279**，点赞 **425**，是本期最热门的身份与连接器管理需求。
- 重要原因是个人、工作和团队项目往往使用不同账号；目前切换成本可能影响自动化工作流和多环境使用。
- 该需求仍处于开放状态，说明账号隔离和快速切换是社区长期关注的核心方向。

### 2. Claude Desktop 多账号与快速切换

[#18435](https://github.com/anthropics/claude-code/issues/18435)  
**标题：** Manage multiple Claude accounts within Claude Desktop

- 请求在 Claude Desktop 内管理多个 Claude 账号，并提供便捷的 profile 切换。
- 评论 **214**，点赞 **941**，点赞数在全部展示 Issue 中最高。
- 需求覆盖个人账号、组织账号和不同订阅计划之间的切换。
- 与 Connector 多账号需求相互关联，表明“身份、订阅和连接器配置分离”已成为强烈的平台级需求。

### 3. Windows 桌面端无法重新启动

[#42776](https://github.com/anthropics/claude-code/issues/42776)  
**标题：** Claude Code Desktop fails to relaunch on Windows due to orphaned process file lock

- Windows 上桌面端退出后可能遗留进程和文件锁，导致后续重启失败。
- 评论 **208**，点赞 **98**。
- Issue 已关闭，说明问题可能已获得修复或被判定为可处理状态。
- 该问题直接影响开发工具的日常可靠性，尤其是频繁自动更新、重启和远程会话用户。

### 4. Windows 11 窗口始终置顶

[#85891](https://github.com/anthropics/claude-code/issues/85891)  
**标题：** Claude Desktop main window stays always-on-top

- Windows 11 下 Claude Desktop 主窗口持续位于其他应用之上，且没有关闭置顶行为的设置。
- 评论 **123**，点赞 **291**。
- Issue 已关闭，表明该问题对桌面端用户体验影响明显。
- 对多窗口协作尤其不利：用户无法正常切换到其他应用进行并行操作。

### 5. CLAUDE.md / AGENTS.md 指令无法形成架构级约束

[#53223](https://github.com/anthropics/claude-code/issues/53223)  
**标题：** CLAUDE.md/AGENTS.md instruction compliance is architecturally unenforced

- 用户认为 `CLAUDE.md` 和 `AGENTS.md` 中的安全指令主要依赖模型遵守，缺乏运行时或架构层强制机制。
- 评论 **30**，点赞 **5**。
- Issue 仍开放，并关联多个安全类报告。
- 这是从“提示词约束”走向“权限策略与执行层控制”的代表性问题，对企业安全审查尤其重要。

### 6. Windows Git Bash 反斜杠被静默减半

[#85856](https://github.com/anthropics/claude-code/issues/85856)  
**标题：** Windows/Git Bash backslashes silently halved

- Git Bash/MSYS2 环境下，Bash 命令中的连续反斜杠会在传递过程中被静默处理，导致路径、命令参数或正则表达式被改变。
- 评论 **15**，点赞 **11**。
- 问题具有较强的隐蔽性，可能造成命令执行结果错误，且不一定会立即抛出异常。
- 对跨平台开发、脚本自动化和 Windows 路径处理影响明显。

### 7. Desktop 上下文窗口用量显示回归

[#102094](https://github.com/anthropics/claude-code/issues/102094)  
**标题：** Desktop context-window usage no longer shown

- 桌面端上下文窗口使用量从底部环形指示和用量弹窗中消失，仅保留套餐窗口信息。
- 评论 **11**，点赞 **19**。
- Issue 已关闭，可能已通过更新或回滚处理。
- 上下文窗口可见性直接关系到用户对 token 消耗、长上下文任务和剩余容量的判断。

### 8. Subagent 压缩期间 Hook 事件缺少 Agent 字段

[#91910](https://github.com/anthropics/claude-code/issues/91910)  
**标题：** PreCompact/PostCompact/SessionStart hooks fire for subagent compaction without agent fields

- 子代理压缩触发 `PreCompact`、`PostCompact` 和 `SessionStart(compact)`，但事件缺少 Agent 相关信息。
- `SubagentStop` 还可能对内部 summarizer 调用触发，并携带未创建的 `agent_transcript_path`。
- 评论 **10**，点赞 **3**。
- 这会影响企业 Hook 审计、日志归因、上下文管理和自动化策略的准确性。

### 9. VS Code 会话列表无法删除或关闭

[#91945](https://github.com/anthropics/claude-code/issues/91945)  
**标题：** Session list has no way to delete/close a session

- VS Code 扩展原先的会话“X”关闭按钮被 Archive 图标替代，目前只能归档，无法从列表中彻底删除或关闭。
- 评论 **7**，点赞 **23**。
- 会话管理是 IDE 集成的关键体验，归档与删除语义变化容易造成用户困惑。

### 10. macOS Desktop 登录失败

[#103788](https://github.com/anthropics/claude-code/issues/103788)  
**标题：** macOS sign-in fails with browser verification error

- macOS 上 Google 和邮箱登录均可能出现 `We couldn't verify your browser`，邮箱路径在出口 IP 变化后才暂时恢复。
- 评论 **4**，点赞 **1**。
- Issue 仍开放，登录故障会直接阻断 Claude Code Desktop 的使用。
- 与另一个 macOS/Linux `verify_magic_link` 权限错误问题同时出现，表明认证链路和本地权限处理需要进一步排查。

---

## 4. 重要 PR 进展

过去 24 小时更新的 7 个 PR 均为 **已关闭**。这些 PR 主要来自同一作者，围绕插件安全策略、Diff 面板行为和运行时类型声明展开。

### 1. 为进程输出补充截断标记和文件修改时间

[#97293](https://github.com/anthropics/claude-code/pull/97293)

- 为 `$.process.run` 声明 `isStdoutTruncated` 和 `isStderrTruncated`。
- 为 `$.fs.list` 增加 `mtimeMs`。
- 设计上会在底层 CLI 真正提供这些字段后启用，避免类型声明提前承诺尚未发布的行为。
- 对插件和工具作者而言，有助于更可靠地判断命令输出是否被截断，以及文件是否发生更新。

### 2. 组织级默认安全策略延伸到用户层

[#97334](https://github.com/anthropics/claude-code/pull/97334)

- 组织启用的 `sec-default` 策略不再只覆盖组织层数据。
- 用户层对话保留记录也会继续遵循组织策略。
- 其核心目标是防止个人插件通过修改、删除或重写 collector 记录来绕过组织级安全要求。

### 3. Collector 记录不再止于用户层

[#97688](https://github.com/anthropics/claude-code/pull/97688)

- 当组织启用 `sec-default` 时，collector 的遥测记录会持续经过用户层。
- 与 `classic.*`、`settings.read` 等既有策略保持一致。
- 重点在于强化组织对插件遥测、记录完整性和数据流向的控制。

### 4. Diff 面板打开时允许其他 Toast 显示

[#99118](https://github.com/anthropics/claude-code/pull/99118)

- 调整 `/diff` 面板和对话框的 Toast 行为。
- 其他插件的 Toast 不再因为 Diff 面板处于打开状态而被长期挂起。
- 主要改善插件 UI 的异步反馈和通知可见性。

### 5. 组织安全策略只能收紧、不能放宽插件规则

[#99137](https://github.com/anthropics/claude-code/pull/99137)

- 在 `sec-default` 生效时，个人插件不能解除组织设置的 deny 或 ask 规则。
- 个人插件也不能修改组织策略锁定的变量。
- 该 PR 体现了“组织策略覆盖个人插件”的权限层级设计。

### 6. Diff 面板在可绘制内容出现后再显示

[#99141](https://github.com/anthropics/claude-code/pull/99141)

- 在 `/diff` 打开但当前没有可绘制组件时，保留面板状态。
- 一旦宿主页面附加可绘制内容，再显示面板。
- 可减少面板过早出现、空白或状态丢失的问题。

### 7. 组织工具权限上限覆盖个人插件

[#99540](https://github.com/anthropics/claude-code/pull/99540)

- 组织层面对某个工具设置的权限上限会覆盖用户安装的所有插件。
- 组织可以要求连接器工具必须获得审批，个人插件无法绕过。
- 相关策略 Hook 增加错误捕获，避免策略判断失败时静默放行。

> 整体来看，PR 方向集中于**插件安全边界、组织策略优先级、遥测完整性和 UI 生命周期管理**。这些 PR 均已关闭，是否已合并、拆分或被替代，需要继续关注仓库后续提交记录。

---

## 5. 功能需求趋势

### 账号、订阅与连接器管理

最明显的趋势是用户希望获得更细粒度的身份管理能力：

- 同一 Connector 支持多个账号。
- Desktop 内支持多个 Claude profile。
- 账号、订阅、连接器和工作区之间清晰隔离。
- 在个人与组织账号之间快速切换。

相关 Issue：

- [#27302](https://github.com/anthropics/claude-code/issues/27302)
- [#18435](https://github.com/anthropics/claude-code/issues/18435)

### 企业安全与策略治理

社区越来越关注安全规则是否能在执行层真正生效：

- `CLAUDE.md` / `AGENTS.md` 的指令是否只是提示词建议。
- 组织策略能否覆盖个人插件。
- deny、ask 和审批规则是否可被插件绕过。
- 遥测、会话和审计记录是否完整保留。

相关 Issue 与 PR：

- [#53223](https://github.com/anthropics/claude-code/issues/53223)
- [#97334](https://github.com/anthropics/claude-code/pull/97334)
- [#99137](https://github.com/anthropics/claude-code/pull/99137)
- [#99540](https://github.com/anthropics/claude-code/pull/99540)

### IDE 与桌面端体验

用户对 Desktop、VS Code 和 Remote Control 的稳定性要求较高，关注点包括：

- 会话删除、关闭和归档语义。
- 上下文窗口用量显示。
- 远程设备可达性和远程会话恢复。
- 自动更新后会话是否保留。
- 桌面端窗口置顶、浏览器面板和 UI 闪烁问题。

相关 Issue：

- [#91945](https://github.com/anthropics/claude-code/issues/91945)
- [#102094](https://github.com/anthropics/claude-code/issues/102094)
- [#103005](https://github.com/anthropics/claude-code/issues/103005)
- [#103335](https://github.com/anthropics/claude-code/issues/103335)
- [#104032](https://github.com/anthropics/claude-code/issues/104032)
- [#104516](https://github.com/anthropics/claude-code/issues/104516)
- [#104512](https://github.com/anthropics/claude-code/issues/104512)

### 跨平台 Bash 与命令执行兼容性

Windows 用户持续反馈：

- Git Bash 反斜杠转义异常。
- PowerShell 多会话后台任务串线。
- Windows 与 macOS/Linux 的 shell 行为差异。
- 沙箱路径、符号链接和权限控制的边界问题。

相关 Issue：

- [#85856](https://github.com/anthropics/claude-code/issues/85856)
- [#104519](https://github.com/anthropics/claude-code/pull/104519)

### Agent、Hooks 与结构化输出

Agent 开发者关注自动化基础设施的可靠性：

- 子代理压缩时 Hook 事件应提供完整上下文。
- 需要可靠区分主代理、子代理和内部摘要器。
- Workflow Agent 的 StructuredOutput 工具希望支持严格模式或约束解码。
- 中途发送的用户消息不能只在 thinking 中处理而没有可见回复。

相关 Issue：

- [#91910](https://github.com/anthropics/claude-code/issues/91910)
- [#104520](https://github.com/anthropics/claude-code/issues/104520)
- [#104513](https://anthropics/claude-code/issues/104513)

### 模型选择与安全分类器

- 单次 Prompt 临时指定模型，而不改变整个会话模型。
- 安全分类器对正常技术内容的误报仍是用户痛点。
- 模型升级后模型选择、套餐权限和会话行为可能不一致。

相关 Issue：

- [#104515](https://github.com/anthropics/claude-code/issues/104515)
- [#104490](https://github.com/anthropics/claude-code/issues/104490)
- [#104470](https://github.com/anthropics/claude-code/issues/104470)
- [#104518](https://github.com/anthropics/claude-code/issues/104518)

---

## 6. 开发者关注点

### 沙箱与命令安全是当前最高优先级

v2.1.309 直接修复 shell 启动文件绕过沙箱、符号链接路径匹配等问题。对于生产环境或处理不可信代码的团队，应重点验证：

- Bash 工具是否在预期沙箱中执行。
- shell 初始化文件是否仍可能在沙箱外运行。
- `denyWrite` 是否能正确覆盖符号链接和真实路径。
- CI、本地环境和远程执行环境的行为是否一致。

### Windows 是兼容性问题的集中区域

社区反馈反复出现：

- Git Bash 路径转义问题。
- PowerShell 并发会话任务串线。
- Desktop 重启和文件锁问题。
- Windows 窗口置顶和 VS Code 会话管理问题。

这表明 Windows 用户在 shell 编码、进程隔离、后台任务归属和桌面生命周期方面仍面临较多边缘问题。

### Desktop 和 Remote Control 的会话连续性不足

多个新 Issue 指向同一体验风险：

- 自动更新重启后 Remote Control 会话被归档且未恢复。
- Remote Control 在 Desktop 端显示无法连接设备，但 CLI 侧仍可工作。
- Desktop 登录和浏览器验证失败。
- Desktop 端出现无响应、队列消息未送达或模型安全拦截。

对于依赖手机端或远程控制持续运行会话的团队，更新前后的会话恢复能力值得重点监控。

### Hooks 和 Agent 事件需要更强的可观测性

子代理压缩、内部 summarizer 和主会话之间的事件边界不够清晰，会导致：

- 审计日志无法准确归因。
- Agent transcript 路径与实际执行对象不一致。
- 企业 Hook 策略无法可靠应用到子代理流程。

开发者需要明确主代理、子代理、压缩流程和内部摘要器的事件语义，最好提供稳定的 agent 标识和结构化上下文。

### 额度、上下文和模型切换的可解释性仍不足

社区持续关注：

- 上下文窗口使用量重新消失。
- 周限额切换套餐后未按预期重置。
- 使用量重置时间缺少具体时区和时间。
- 升级 Pro 后模型选择仍不可用。
- 单次 Prompt 无法使用不同模型。

这些问题共同指向一个需求：用户希望更清晰地知道**当前套餐、额度、上下文容量和模型能力之间的关系**。

### 插件生态开始进入“策略治理”阶段

本期 PR 不再局限于插件功能本身，而是集中在：

- 组织策略覆盖个人插件。
- 插件不得降低安全限制。
- 组织级遥测和审计记录不可被插件删除。
- 工具审批规则必须保留组织上限。

这表明 Claude Code 插件体系正在从单纯的扩展机制，向企业可治理的插件运行时发展。

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex 社区动态日报

**日期：2026-10-23**  
**数据范围：过去 24 小时 GitHub 仓库动态**

## 1. 今日速览

- 今日发布 `rust-v0.164.0`，重点加入 `/presets` 提示词与斜杠命令预设，并支持通过 `/model`、`/permissions` 参数快速配置模型、推理强度、速度和权限。
- 社区讨论集中在**模型容量不足、配额消耗异常、Desktop/CLI/Cloud 多端故障、Windows Computer Use 与远程工作流稳定性**等问题。
- 工程侧持续推进 **managed configuration、environment hooks、线程 fork/sample、模型目录覆盖和 app-server 可靠性**，但今日重点 PR 多已关闭或合并状态未在数据中明确体现。

---

## 2. 版本发布

### [rust-v0.164.0](https://github.com/openai/codex/releases/tag/rust-v0.164.0)

主要更新：

- 新增 10 个编号为 `/presets` 的可复用提示词和斜杠命令槽位，并提供键盘菜单快速访问。
- `/model` 支持以内联参数设置模型及相关配置。
- `/permissions` 支持以内联参数设置权限配置。
- 发布说明还涉及预览功能及其他未完整展示的更新。

### 其他预发布版本

- [rust-v0.164.0-alpha.12](https://github.com/openai/codex/releases/tag/rust-v0.164.0-alpha.12)
- [rust-v0.164.0-alpha.11.1](https://github.com/openai/codex/releases/tag/rust-v0.164.0-alpha.11.1)

---

## 3. 社区热点 Issues

### 1. [ #41220：Codex 用量、配额消耗及账户计费异常 ](https://github.com/openai/codex/issues/41220)

用户报告订阅额度或购买额度消耗速度明显超出历史基线，并伴随使用量与本地/token 记录不一致。Issue 作为跨报告汇总问题，已有 **71 条评论、21 个赞**，是今日最受关注的 Issue 之一。

**重要性：** 直接影响成本、额度可控性和用户信任，需要区分真实使用量、统计口径与系统计费问题。

### 2. [ #29343：Chrome 插件、浏览器及 Computer Use 无法访问部分网站 ](https://github.com/openai/codex/issues/29343)

部分网站会被 Codex 的 Chrome/浏览器能力直接拒绝访问或无法加载。Issue 涉及插件、浏览器、Computer Use 和安全检查，已有 **55 条评论、19 个赞**。

**重要性：** 暴露网站兼容性、安全策略和自动化能力之间的冲突，尤其影响浏览器代理和桌面自动化场景。

### 3. [ #43375：多个 GPT-5/GPT-6 模型返回 “Selected model is at capacity” ](https://github.com/openai/codex/issues/43375)

用户称多个 GPT-5、GPT-6 模型持续出现容量不足提示，并非单一模型故障，已有 **32 条评论、21 个赞**。

**重要性：** 模型容量问题可能是跨平台、跨模型的系统性限制；单纯切换模型不一定能解决问题。

### 4. [ #26250：阿拉伯语与英语混排时 RTL/LTR 渲染错误 ](https://github.com/openai/codex/issues/26250)

阿拉伯语和英语混合内容出现双向文本渲染问题，已有 **16 条评论**。

**重要性：** 国际化文本方向、代码片段和用户输入混排是桌面端基础可用性问题，也会影响阿拉伯语、希伯来语用户使用。

### 5. [ #49464：VS Code 扩展中缺少 GPT-6.1 Sol 模型 ](https://github.com/openai/codex/issues/49464)

CLI 和 Codex App 已可使用 GPT-6.1 Sol，但 VS Code 扩展的模型选择器未显示该模型。该 Issue 已关闭，并获得 **28 个赞**。

**重要性：** 反映模型目录、客户端 UI 和实际可用模型之间可能不同步，影响 IDE 集成体验。

### 6. [ #37531：CJK 标点边界处显示原始 `**`，粗体 Markdown 渲染异常 ](https://github.com/openai/codex/issues/37531)

助手生成的粗体 Markdown 在中文、日文等 CJK 标点边界处解析失败，最终回复出现原始 `**`，已有 **11 条评论**。

**重要性：** 中文开发者日常使用频率高，属于直接影响可读性的渲染缺陷。

### 7. [ #55260：Desktop、CLI、Cloud Web 均持续提示模型容量不足 ](https://github.com/openai/codex/issues/55260)

该 Issue 报告 Windows Desktop、CLI 和 Cloud Web 均返回 “Selected model is at capacity”，已有 **9 条评论**。

**重要性：** 进一步证明容量问题可能影响完整 Codex 产品面，而不是某个客户端的局部故障。

### 8. [ #54540：Windows 上 goals/subagent 工作流反复出现 workspace routing discovery timeout ](https://github.com/openai/codex/issues/54540)

Windows Desktop 在目标和子代理工作流中反复无法完成工作区路由发现，已有 **8 条评论、3 个赞**。

**重要性：** goals 和 subagent 是 Codex 自动化能力的关键组成部分，该问题会影响长任务、任务编排和多代理执行。

### 9. [ #52754：Windows 10 Computer Use 无法截取 Notepad 和 Electron 窗口 ](https://github.com/openai/codex/issues/52754)

应用发现和无障碍文本提取正常，但窗口截图持续超时，已有 **7 条评论**。

**重要性：** 说明 Computer Use 的窗口枚举、截图和 Electron 兼容性仍存在平台差异，可能导致本地自动化无法完成。

### 10. [ #56201：macOS Desktop 持续发生 V8 SIGTRAP ](https://github.com/openai/codex/issues/56201)

macOS build 21421 仍反复出现 V8 SIGTRAP，且完整历史记录可能触发崩溃警告，已有 **6 条评论**。

**重要性：** 属于高影响稳定性问题，可能造成会话丢失或工作流中断。

---

## 4. 重要 PR 进展

> 数据中这些 PR 均显示为 **CLOSED**；以下按其变更内容总结，具体是否已合并、关闭或以其他方式落地需进一步查阅仓库记录。

### 1. [ #56371：使 Guardian review timeout 可配置 ](https://github.com/openai/codex/pull/56371)

新增 `auto_review.timeout_ms`，可配置 Guardian review 的整体超时时间，并覆盖初始化和重试阶段。默认保持 90 秒，设置为 `0` 时可关闭 review deadline，但保留取消能力。

### 2. [ #56364：允许调用方设置 sampling 的 thread source ](https://github.com/openai/codex/pull/56364)

为 `thread/sample` 增加可选 `threadSource`，并将设置传递到临时 fork；未指定时仍默认使用 `thread_sample`。

### 3. [ #56351：增加实验性 attached thread forks ](https://github.com/openai/codex/pull/56351)

为 `thread/fork` 增加 `attachToSource`，允许创建并持久化与源线程关联的 fork。相关 fork 需要本地存储，并限制使用 ephemeral 或 `deferGoalContinuation`。

### 4. [ #56343：在所属 executor 上运行环境 hooks ](https://github.com/openai/codex/pull/56343)

将已准备环境配置的 hooks 纳入生命周期事件，并使用环境自身的 shell、工作目录、环境策略和网络策略执行命令 hooks。

### 5. [ #56342：让 rollout trace 在不同请求快照间匹配图片内容 ](https://github.com/openai/codex/pull/56342)

对非文本内容进行 canonical JSON 哈希，并在请求快照间比较图片内容，避免重复图片因 call ID 复用导致回放失败。

### 6. [ #56330：让 agent-message wake 遵循 interrupt 和 Plan mode ](https://github.com/openai/codex/pull/56330)

在模型发现等待期间，agent-message wake 会在启动前重新检查是否被中断或是否已进入 Plan mode，避免处理已经失效的唤醒任务。

### 7. [ #56314：增加自定义配置服务器的 managed configuration loader ](https://github.com/openai/codex/pull/56314)

新增 `config_server` 配置源；未配置时使用既有 ChatGPT bundle source。自定义 bundle 从 `<base_url>/codex/config/bundle` 获取，并避免重定向和请求日志泄露。

### 8. [ #56313：将模型目录覆盖应用于 history、notes 和 context 工具 ](https://github.com/openai/codex/pull/56313)

从当前模型的 catalog message 读取 `history`、`notes`、`new_context` 和 `get_context_remaining` 的工具描述及参数 schema。

### 9. [ #56309：支持模型特定的 writable-root 权限文案 ](https://github.com/openai/codex/pull/56309)

在模型目录权限消息中增加可选的 `writable_root` 和 `writable_roots` 模板，并依据展示根目录数量选择文案。

### 10. [ #56308：在 TUI 中区分 directory 和 repository scope ](https://github.com/openai/codex/pull/56308)

优化会话选择器和项目分组逻辑，区分当前工作目录与仓库范围，避免 linked worktree 会话混合显示。

---

## 5. 功能需求趋势

### 模型与模型可用性

- 模型容量不足成为高频问题，用户希望跨模型自动切换、排队和重试。
- GPT-6.1 Sol 等新模型在不同客户端中的目录同步受到关注。
- 用户希望更清晰地显示当前模型、推理强度、运行模式和配额。

相关 Issue：  
[#43375](https://github.com/openai/codex/issues/43375)、[#55260](https://github.com/openai/codex/issues/55260)、[#49464](https://github.com/openai/codex/issues/49464)

### IDE、Desktop 与多端一致性

- VS Code、Desktop、CLI 和 Cloud Web 之间的模型列表、认证、配置和会话行为存在不一致。
- 远程 Codex、Windows Remote 和项目外新会话工作流仍有明显故障。

相关 Issue：  
[#49464](https://github.com/openai/codex/issues/49464)、[#53264](https://github.com/openai/codex/issues/53264)、[#53515](https://github.com/openai/codex/issues/53515)

### 性能与长任务可靠性

- 大型附件、批量图片和高并发线程会导致 Desktop 卡顿、队列饱和甚至启动崩溃。
- goals、subagent 和长时间运行任务对工作区路由、超时和恢复能力提出更高要求。

相关 Issue：  
[#48917](https://github.com/openai/codex/issues/48917)、[#54540](https://github.com/openai/codex/issues/54540)、[#52912](https://github.com/openai/codex/issues/52912)

### Computer Use 与浏览器自动化

- Windows 窗口发现、截图和 Electron 兼容性仍不稳定。
- 部分网站被浏览器插件或安全检查直接拒绝访问。
- 用户希望自动化失败时提供更明确的站点兼容性和安全策略提示。

相关 Issue：  
[#52754](https://github.com/openai/codex/issues/52754)、[#27874](https://github.com/openai/codex/issues/27874)、[#29343](https://github.com/openai/codex/issues/29343)

### 国际化与文本渲染

- RTL/LTR 混排、阿拉伯语与英语混排、CJK 标点边界 Markdown 渲染是持续问题。
- 社区希望改进双向文本布局、Unicode 处理和本地化输出质量。

相关 Issue：  
[#26250](https://github.com/openai/codex/issues/26250)、[#35303](https://github.com/openai/codex/issues/35303)、[#33328](https://github.com/openai/codex/issues/33328)、[#37531](https://github.com/openai/codex/issues/37531)

### 可观测性与用量透明度

- 用户希望查看每次任务的实际运行模式、模型、effort 和配额消耗。
- Scheduled task 尤其需要明确区分 Chat 与 Work 执行方式，以及最终采用的模型配置。

相关 Issue：  
[#41220](https://github.com/openai/codex/issues/41220)、[#53022](https://github.com/openai/codex/issues/53022)

---

## 6. 开发者关注点

1. **容量错误必须有可恢复机制**  
   当前 “Selected model is at capacity” 频繁出现。开发者希望具备自动切换、持久排队、可取消重试和清晰的等待状态，避免长任务被直接中断。参考 [#50238](https://github.com/openai/codex/issues/50238)。

2. **配额消耗必须可解释、可对账**  
   用户希望获得按任务、模型、effort 和运行模式拆分的 usage 信息，解决“本地 token 记录与账户扣费不一致”的问题。参考 [#41220](https://github.com/openai/codex/issues/41220) 和 [#53022](https://github.com/openai/codex/issues/53022)。

3. **多端体验需要保持一致**  
   模型选择器、认证状态、配置加载、Remote 连接和会话创建行为应在 CLI、IDE、Desktop、Cloud 之间统一。参考 [#49464](https://github.com/openai/codex/issues/49464)、[#53264](https://github.com/openai/codex/issues/53264)。

4. **自动化权限与安全策略需要更细粒度**  
   GitHub connector 的 “Always allow” 未被遵守，以及浏览器/Computer Use 拒绝部分站点，均说明权限记忆和安全策略存在一致性问题。参考 [#37184](https://github.com/openai/codex/issues/37184)、[#29343](https://github.com/openai/codex/issues/29343)。

5. **大型附件和高并发场景需要性能保护**  
   大量图片附件、100 线程请求和 queued follow-ups 会触发 WebSocket 限制、UI 卡顿、队列堆积甚至 Chromium 崩溃。参考 [#55730](https://github.com/openai/codex/issues/55730)、[#48917](https://github.com/openai/codex/issues/48917)、[#52912](https://github.com/openai/codex/issues/52912)。

6. **远程和子代理工作流需要更强的可恢复性**  
   workspace routing timeout、远程 Linux app-server 启动失败、Windows Remote 新会话失败等问题，表明复杂任务环境中的错误恢复和状态同步仍是重点。

7. **文本渲染质量是基础体验问题**  
   RTL、LTR 和 CJK Markdown 渲染问题会直接影响阅读、复制和二次编辑，不能仅视为边缘兼容性缺陷。

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI 社区动态日报

**日期：2026-10-23**  
**项目：google-gemini/gemini-cli**

## 1. 今日速览

过去 24 小时项目发布了 `v0.67.0-nightly.20261023.ga713410ab`，主要改进集中在 A2A/core 的 token usage 元数据保留与每轮报告一致性，并为 function call 模型轮次补充 thought signatures。  
社区讨论高度集中在 Agent 可靠性：子代理超时/误报成功、Generalist Agent 挂起、Browser Agent 配置与 Wayland 兼容，以及工具过多导致的 400 错误仍是主要痛点。与此同时，安全、凭据写入、MCP 工具发现超时和 CLI 可观测性相关修复持续推进。

---

## 2. 版本发布

### v0.67.0-nightly.20261023.ga713410ab

主要更新：

- **A2A/Core token usage 修复**：保留 extended token usage metadata，并统一 per-turn reporting。
- **Thought signatures 修复**：确保所有包含 function calls 的模型轮次都能获得 thought signatures。
- 相关 PR：
  - [PR #29834](https://github.com/google-gemini/gemini-cli/pull/29834)
  - [Nightly version bump #29887](https://github.com/google-gemini/gemini-cli/pull/29887)

---

## 3. 社区热点 Issues

### 1. 子代理达到 MAX_TURNS 后仍报告 GOAL success

- **Issue**：[ #22323 ](https://github.com/google-gemini/gemini-cli/issues/22323)
- 子代理实际已达到最大轮次、未完成分析，但返回 `status: success` 和 `Termination Reason: GOAL`，掩盖了真正的中断原因。
- 这会直接影响自动化工作流的可靠性、错误监控和结果可信度。
- 截至数据更新时已有 **13 条评论**，是本时段讨论最活跃的问题之一。

### 2. Generalist Agent 可能无限挂起

- **Issue**：[ #21409 ](https://github.com/google-gemini/gemini-cli/issues/21409)
- 使用 generalist agent 执行简单操作（如创建文件夹）时可能一直等待，用户曾等待最长约一小时。
- 禁用子代理后问题消失，疑似与子代理调度、状态同步或工具调用等待机制有关。
- **8 条评论、8 个赞**，用户关注度较高。

### 3. 工具数量过多时出现 400 错误

- **Issue**：[ #24246 ](https://github.com/google-gemini/gemini-cli/issues/24246)
- 当环境暴露超过约 400 个工具时，Gemini CLI 可能遭遇 400 错误。
- 社区希望 Agent 能根据当前任务动态缩小工具范围，而不是将所有启用工具一次性发送给模型。
- 这对 MCP、扩展和多 Agent 环境尤其重要。

### 4. Browser Agent 忽略 `settings.json` 覆盖配置

- **Issue**：[ #22267 ](https://github.com/google-gemini/gemini-cli/issues/22267)
- Browser Agent 据称忽略全局或项目级 `settings.json` 中的覆盖配置，例如 `maxTurns`。
- `AgentRegistry` 初始化阶段能够读取配置，但实际执行时配置可能没有正确传递。
- 配置失效会导致 Agent 超出预期预算、无法停止或行为不可预测。

### 5. Browser Agent 在 Wayland 环境下失败

- **Issue**：[ #21983 ](https://github.com/google-gemini/gemini-cli/issues/21983)
- Browser subagent 在 Wayland 环境下无法正常运行，却可能显示 `GOAL` 等正常终止信息。
- 该问题涉及浏览器自动化、无头/有头环境差异以及终止状态准确性。
- **P1 优先级**，且状态已标记为需要重新测试。

### 6. 社区希望利用 OS 沙箱和 Bash 能力

- **Issue**：[ #19873 ](https://github.com/google-gemini/gemini-cli/issues/19873)
- 提案建议通过零依赖 OS 沙箱和 post-execution intent routing，更安全地发挥 Gemini 对 POSIX shell、grep、sed、awk 等工具的偏好。
- 核心目标是在提升代码探索效率的同时，降低直接执行危险命令的风险。
- **P2、大工作量提案**，已有 **9 条评论**。

### 7. Agent 不会主动使用 Skills 和 Subagents

- **Issue**：[ #21968 ](https://github.com/google-gemini/gemini-cli/issues/21968)
- 用户反馈 Gemini CLI 通常不会主动调用自定义 skills 或 subagents，即使任务明显适合这些能力。
- 当前往往需要用户显式提示“使用某个 skill”或“不要使用 subagent”，说明 Agent 的能力发现和调度策略仍偏保守。
- 这关系到扩展生态能否真正被利用。

### 8. AST-aware 文件读取、搜索和代码库映射

- **Issue**：[ #22745 ](https://github.com/google-gemini/gemini-cli/issues/22745)
- 社区正在评估 AST-aware 工具是否能更准确地读取方法边界、减少无效上下文并提升代码库导航效率。
- 相关子议题包括：
  - [ #22746：AST CLI 代码库映射 ](https://github.com/google-gemini/gemini-cli/issues/22746)
  - [ #22747：AST-aware 搜索和文件读取 ](https://github.com/google-gemini/gemini-cli/issues/22747)
- 目前仍处于调查和效果评估阶段。

### 9. Agent 在创建 Vite 应用时卡在交互提示

- **Issue**：[ #22465 ](https://github.com/google-gemini/gemini-cli/issues/22465)
- Agent 创建新 Vite 应用时停在交互式 prompt，无法继续自动执行。
- 这类问题反映出 CLI/终端交互与非交互式自动化之间的兼容不足。
- 社区建议通过行为评测固化该场景，避免回归。

### 10. Agent 频繁在随机位置创建临时脚本

- **Issue**：[ #23571 ](https://github.com/google-gemini/gemini-cli/issues/23571)
- 在限制模型使用 shell 后，模型反而会在多个目录中生成编辑脚本，增加清理和提交成本。
- 用户希望将临时文件限制在统一、可管理的临时目录中。
- 这反映出工具权限收紧后，Agent 的替代工作流仍不够规范。

---

## 4. 重要 PR 进展

### 1. 恢复聊天失败时不污染当前工作区目录

- **PR**：[ #29890 ](https://github.com/google-gemini/gemini-cli/pull/29890)
- `loadHistoryForResume` 原先在恢复聊天前就注入历史目录；若恢复失败，目录仍会残留。
- 新逻辑仅在聊天恢复成功后恢复工作区目录，降低失败状态下的工作区污染。

### 2. 在任务树中显示正在执行的子代理工具调用

- **PR**：[ #29859 ](https://github.com/google-gemini/gemini-cli/pull/29859)
- 修复非根 scheduler 更新时丢失 `executing` 工具调用的问题。
- CLI UI 现在可以持续展示活跃的子代理任务，避免工具列表暂时为空。

### 3. 防止 shell wrapper flag 绕过 command-substitution guard

- **PR**：[ #29688 ](https://github.com/google-gemini/gemini-cli/pull/29688)（已关闭）
- 修复 POSIX shell wrapper 在 `-c` 前包含中间或链式 flag 时未被识别的问题。
- 属于安全修复，重点防止命令替换保护逻辑被绕过。

### 4. 认证设置保存时保留磁盘上的其他修改

- **PR**：[ #29762 ](https://github.com/google-gemini/gemini-cli/pull/29762)
- Gemini CLI 启动后对设置文件的外部修改，不应因用户切换认证方式而被覆盖。
- 新实现基于当前磁盘内容，仅更新目标属性，降低设置丢失风险。

### 5. 原子化并串行化文件凭据存储写入

- **PR**：[ #29765 ](https://github.com/google-gemini/gemini-cli/pull/29765)
- 修复文件型 keychain 并发写入导致凭据丢失，以及写入中断导致全部凭据不可用的问题。
- 这是凭据可靠性和数据完整性方面的重要改进。

### 6. 为 MCP `tools/list`  discovery 设置较短默认超时

- **PR**：[ #29767 ](https://github.com/google-gemini/gemini-cli/pull/29767)
- MCP 工具发现此前可能继承 10 分钟工具调用超时，导致无响应服务器长时间静默阻塞。
- 新默认超时为 60 秒，并可通过 `MCP_DISCOVERY_TIMEOUT_MSEC` 配置。
- **P1**，对 MCP 生态稳定性影响较大。

### 7. 修复 A2A `scheduleToolCalls` 的 unhandled rejection

- **PR**：[ #29763 ](https://github.com/google-gemini/gemini-cli/pull/29763)
- 处理任务取消或中止时 `CoreToolScheduler` 合法 reject 所触发的未处理 Promise rejection。
- 可降低进程崩溃和错误日志噪音。

### 8. 防止 `$` 模式破坏 prompt template 和 `{{args}}`

- **PR**：[ #29761 ](https://github.com/google-gemini/gemini-cli/pull/29761)
- 修复使用字符串替换 API 时，`$&`、`` $` ``、`$'`、`$$` 被误解释为 replacement pattern 的问题。
- 修复模型、工具和用户文本中的特殊字符被静默篡改的潜在 bug。

### 9. Android/Termux 支持可信系统路径中的 ripgrep

- **PR**：[ #29884 ](https://github.com/google-gemini/gemini-cli/pull/29884)
- 允许 Android/Termux 环境中的可信系统目录参与 `ripgrep` 路径解析。
- 目标是让 `grep_search` 正常使用 Termux 安装的原生 ripgrep 二进制文件。

### 10. 增加模型发现命令和 `--list-models`

- **PR**：[ #29880 ](https://github.com/google-gemini/gemini-cli/pull/29880)
- 新增 `gemini models` 子命令及 `--list-models` 参数。
- 支持人类可读的终端输出，也支持 `-o json` 机器可读输出，便于脚本和工具链发现可用模型。

---

## 5. 功能需求趋势

### Agent 可靠性与状态管理

当前最突出的方向是让子代理和 Browser Agent：

- 准确报告 `MAX_TURNS`、中止、异常和真正完成状态；
- 避免无限等待；
- 正确继承 `maxTurns` 等配置；
- 在任务树、日志和 bug report 中保留完整上下文。

代表 Issues：  
[#22323](https://github.com/google-gemini/gemini-cli/issues/22323)、[#21409](https://github.com/google-gemini/gemini-cli/issues/21409)、[#22267](https://github.com/google-gemini/gemini-cli/issues/22267)、[#21763](https://github.com/google-gemini/gemini-cli/issues/21763)

### 安全执行与命令治理

社区希望结合：

- OS 级沙箱；
- 更严格的 shell command guard；
- 破坏性命令抑制；
- post-execution intent routing；
- 临时文件统一管理。

目标是让 Agent 更积极地使用 Bash，同时避免 `git reset --force`、危险数据库操作或无约束脚本生成造成损失。

代表 Issues：  
[#19873](https://github.com/google-gemini/gemini-cli/issues/19873)、[#22672](https://github.com/google-gemini/gemini-cli/issues/22672)、[#23571](https://github.com/google-gemini/gemini-cli/issues/23571)

### 更高效的代码库理解

高频需求包括：

- AST-aware 文件读取；
- AST 搜索；
- 代码库结构映射；
- 更少 token 的精确方法级读取；
- 持久化任务追踪，替代完全依赖上下文的 Todo 工具。

代表 Issues：  
[#22745](https://github.com/google-gemini/gemini-cli/issues/22745)、[#22746](https://github.com/google-gemini/gemini-cli/issues/22746)、[#22747](https://github.com/google-gemini/gemini-cli/issues/22747)、[#19561](https://github.com/google-gemini/gemini-cli/issues/19561)、[#18836](https://github.com/google-gemini/gemini-cli/issues/18836)

### MCP、扩展和多 Agent 生态

工具数量、扩展安装和 MCP 稳定性成为重要基础设施方向：

- 工具过多时自动按任务筛选；
- MCP discovery 超时控制；
- 支持 Git submodule 扩展安装；
- 更完善的 Agent/扩展发现机制；
- 支持并行子 Agent 和共享记忆。

代表 Issues/PRs：  
[#24246](https://github.com/google-gemini/gemini-cli/issues/24246)、[#29767](https://github.com/google-gemini/gemini-cli/pull/29767)、[#26686](https://github.com/google-gemini/gemini-cli/pull/26686)、[#18287](https://github.com/google-gemini/gemini-cli/issues/18287)、[#18285](https://github.com/google-gemini/gemini-cli/issues/18285)

### IDE 与多工作区支持

社区继续推动：

- 根据活动 IDE workspace root 解析相对文件路径；
- 嵌套 Git 仓库支持；
- workspace 级策略而非全局策略；
- 更准确的 CLI flags、快捷键和自身行为说明。

代表 Issues/PRs：  
[#29838](https://github.com/google-gemini/gemini-cli/pull/29838)、[#18397](https://github.com/google-gemini/gemini-cli/issues/18397)、[#21432](https://github.com/google-gemini/gemini-cli/issues/21432)

---

## 6. 开发者关注点

开发者反馈的高频痛点可以概括为：

1. **终止状态不可信**：Agent 可能在未完成任务时报告 `GOAL` 或 `success`，自动化系统难以据此判断是否应重试。
2. **挂起与无响应**：Generalist Agent、Browser Agent、MCP server 和交互式 CLI prompt 都可能造成长时间阻塞。
3. **配置未真正生效**：`settings.json`、workspace root、Agent-specific settings 的传递链路仍存在不一致。
4. **工具规模影响请求稳定性**：MCP、扩展和自定义工具过多时，可能触发 400 或显著增加上下文和调度复杂度。
5. **执行安全仍需加强**：社区希望在保留 Bash 高效性的同时，防止危险 Git 操作、命令替换绕过和随机临时文件污染。
6. **可观测性不足**：子代理轨迹、bug report 和 `/chat share` 尚未充分展示子 Agent 的完整运行过程。
7. **上下文效率要求提高**：大文件读取和代码库探索容易造成 token 膨胀，AST 工具、持久化任务文件和更精准的读取策略受到关注。
8. **非交互式自动化不足**：CLI 在 Vite 等工具的交互式 prompt 前可能卡住，限制了 Agent 在 CI、脚本和批量任务中的使用。
9. **凭据与设置文件可靠性**：并发写入、进程中断和外部修改都可能造成凭据或配置丢失。
10. **扩展生态兼容性**：Git submodule、MCP server、Agent 配置迁移和 CLI hooks 兼容性仍需持续完善。

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI 社区动态日报

**日期：2026-10-23**  
**项目：github/copilot-cli**

## 1. 今日速览

过去 24 小时发布 **v1.0.103**，重点改进了代码块复制、ACP 沙箱设置继承以及断线重连后的云端回复完整性。社区问题主要集中在 **MCP 认证与配置、权限安全、会话恢复和模型/Agent 行为一致性**；其中可信目录自动放行 shell 执行以及后台 Agent 未触发 Hooks，值得优先关注。

## 2. 版本发布

### v1.0.103

本次发布于 **2026-10-22**，主要更新包括：

- 启用相关设置后，点击已完成的代码块可复制其原始代码。
- ACP 会话现在会正确继承已保存的沙箱设置，并支持 `--sandbox` / `--no-sandbox` 参数，恢复会话时同样生效。
- CLI 在网络连接中断并重连后，可保留云端回复的完整文本，减少输出截断或丢失。

**Release：**  
https://github.com/github/copilot-cli/releases/tag/v1.0.103

## 3. 社区热点 Issues

### 1. Trusted folders 在手动权限模式下静默自动批准高风险 Shell 命令

在 `manual` 权限模式下，只要命令引用的文件路径位于可信目录内，CLI 就可能不显示权限确认并直接执行。对于脚本、`sqlcmd`、`curl` 等具有不可预测副作用的命令，这种基于路径的放行策略存在明显安全风险。

- **重要性：** 直接涉及命令执行边界和供应链安全。
- **社区反应：** 新近创建，已有 2 条评论。
- https://github.com/github/copilot-cli/issues/5232

### 2. 后台 Agent 不触发 Hooks，可能绕过安全限制

用户报告，安全 Hook 无法拦截后台或 task agent 执行的危险命令，Agent 仍可能直接运行这些命令。该问题已被关闭，但其原始描述涉及潜在的安全绕过，因此仍值得社区持续关注修复范围。

- **重要性：** 关系到 Agent 权限隔离与自动化执行安全。
- **社区反应：** 已关闭；4 条评论。
- https://github.com/github/copilot-cli/issues/3013

### 3. WSL2 上语音服务崩溃，`/voice` 卡在获取模型

升级至 1.0.100 后，WSL2 环境中的语音服务出现 signal 11，`/voice` 会持续停在 “Fetching voice models”，无法下载或使用语音模型。

- **重要性：** 影响 WSL2/Linux 用户语音输入，并暴露语音运行时崩溃问题。
- **社区反应：** 2 个赞，4 条评论。
- https://github.com/github/copilot-cli/issues/5197

### 4. 远程 MCP OAuth 令牌过期后不刷新，持续重试失效 Token

连接远程 OAuth MCP 服务时，如果 access token 过期，CLI 会持续发送旧令牌，却不调用 token endpoint，也没有重新提示登录，导致请求反复返回 401。ACP 模式下还可能直接打开浏览器授权页，而不是使用 refresh token。

- **重要性：** MCP 认证失败会直接中断 Agent 的工具调用。
- **相关反馈：** ACP 模式下也存在类似 refresh token 未使用的问题。
- https://github.com/github/copilot-cli/issues/5233  
- https://github.com/github/copilot-cli/issues/5229

### 5. Windows Entra Broker 的 MCP Token 缓存保持为空

Windows 上通过 Microsoft Entra Broker 为 HTTP MCP 登录后，Token 缓存文件仍为 0 字节，导致每次启动新进程都会再次弹出账户选择界面；同一进程内执行 `/restart` 则可能不再提示。

- **重要性：** 影响 Windows 企业身份认证和 MCP 登录体验。
- **社区反应：** 新问题，尚无评论。
- https://github.com/github/copilot-cli/issues/5236

### 6. `copilot --resume` 无会话 ID 时无法正常进入会话选择界面

统一 Sessions 浏览器成为默认行为后，执行不带 ID 的 `copilot --resume` 会创建新的空会话。会话列表仅短暂显示，随后被新会话界面替换，且信任确认可能意外获得首次回车输入。

- **重要性：** 影响会话恢复、交互式操作和误触发信任授权的风险。
- **社区反应：** 新近更新，暂无评论。
- https://github.com/github/copilot-cli/issues/5228

### 7. 自定义 Agent 在 Copilot App 中未应用其模型和 reasoning effort

在 Copilot App 的 Agent Picker 中选择自定义 Agent 后，Agent 配置中的 `model` 与 `reasoning-effort` 没有生效，实际使用的是用户此前选择的默认模型和推理强度。

- **重要性：** 反映 Agent 配置在 UI、CLI 和不同运行模式之间的一致性不足。
- **社区反应：** 新近创建，暂无评论。
- https://github.com/github/copilot-cli/issues/5241

### 8. Automode 的 Task complete 功能会隐藏模型完整输出

启用 Automode 后，任务完成提示会替换模型输出，只显示 Resume 入口，导致用户无法直接查看完整的模型结果。

- **重要性：** 影响长任务结果审阅、调试和上下文可追溯性。
- **社区反应：** 已有 1 条评论。
- https://github.com/github/copilot-cli/issues/5190

### 9. 每张第 51 张及之后的图片都会触发完整缓存重载

CLI 每个会话最多缓存 50 张图片。第 51 张图片加入后会移除第一张，但这一变化可能触发完整缓存重建，在图片较多时造成明显成本和性能问题。

- **重要性：** 与长会话、多模态任务的成本和性能直接相关。
- **社区反应：** 新问题，尚无评论。
- https://github.com/github/copilot-cli/issues/5238

### 10. Linux Sandbox 在 `systemd-resolved` stub resolver 下 DNS 失效

当 Linux Sandbox 与宿主机共享 `/etc/resolv.conf`，且宿主机使用指向 `127.0.0.53` 的 systemd-resolved stub resolver 时，Sandbox 无法访问 DNS。该问题已关闭。

- **重要性：** 影响 Linux Sandbox 的网络可靠性和容器化部署。
- **社区反应：** 已关闭；1 条评论。
- https://github.com/github/copilot-cli/issues/5027

## 4. 重要 PR 进展

过去 24 小时内**没有新的 Pull Request 更新**，因此暂无可供汇总的重要 PR。

- GitHub Pull Requests：  
  https://github.com/github/copilot-cli/pulls

## 5. 功能需求趋势

从本次更新的 Issues 看，社区需求主要集中在以下方向：

1. **MCP 认证与会话可靠性**
   - OAuth token 自动刷新与 refresh token 使用。
   - Windows Entra 身份缓存。
   - MCP 认证失败时的用户提示和恢复流程。
   - MCP 配置变更、文件监听和 Agent 工具发现稳定性。

2. **权限与安全控制**
   - 可信目录内的 Shell 命令仍应进行风险判断。
   - 后台 Agent 必须执行与前台 Agent 一致的 Hook 和权限策略。
   - 避免危险脚本、网络命令和数据库命令被路径信任机制误放行。

3. **会话恢复与历史管理**
   - 修复 `copilot --resume` 的交互流程。
   - 保留任务完整输出，避免 Automode/Task complete 截断历史。
   - 改善 ACP 恢复会话时的沙箱和配置继承。

4. **Agent 配置一致性**
   - 自定义 Agent 的模型、推理强度应在 CLI、桌面 App 和 ACP 模式中一致生效。
   - 自定义 Agent 与插件内置 MCP 工具应保持相同连接行为。

5. **多模态与语音能力**
   - 语音服务在 WSL2 等 Linux 环境中的稳定性。
   - 语音识别语言可配置，避免固定使用自动检测。
   - 图片上下文超过 50 张后的缓存淘汰和成本控制。

6. **网络与企业环境兼容性**
   - 支持仅通过 HTTP/CONNECT 代理访问公网的 `web_fetch`。
   - 改善代理环境下的 DNS 校验。
   - 提升 Linux Sandbox 在不同 resolver 配置下的兼容性。

7. **模型选择与开发体验**
   - 允许用户从 Auto 模式中排除不稳定模型。
   - 持续发布 Stable 等更稳定的发布渠道，降低快速迭代带来的回归风险。
   - 改善终端滚动、输入框位置等无鼠标或长会话场景的可用性。

## 6. 开发者关注点

### 安全与权限是最突出的风险点

开发者集中反馈了可信目录自动批准命令、后台 Agent 绕过 Hooks 等问题。当前权限模型似乎部分依赖文件路径，但 Shell 命令的真实副作用往往无法仅通过引用路径判断。对于 AI Agent 工具而言，权限确认必须覆盖实际命令、脚本执行、网络访问和后台任务路径。

### MCP 已成为最主要的功能稳定性瓶颈

多个 Issues 同时指向 MCP 身份认证、OAuth 刷新、插件内 HTTP MCP、Agent 配置发现和 Windows 登录缓存。MCP 正逐渐成为 CLI 连接外部工具和数据的核心入口，但其认证、会话恢复和配置监听仍存在跨平台不一致。

### 会话行为需要更强的可预测性

`--resume` 自动创建空会话、Automode 输出被隐藏、ACP 沙箱配置继承等问题，都会增加自动化和调试成本。开发者期待“恢复即恢复”“完成任务即可查看完整输出”，而不是被新的空会话或摘要界面覆盖。

### 多模态功能的成本与稳定性仍需优化

WSL2 语音崩溃，以及超过 50 张图片后可能触发完整缓存重载，说明语音和多模态场景仍是高风险区域。特别是缓存重建可能直接影响费用、延迟和长会话体验。

### 跨平台兼容性问题突出

Windows、WSL2、macOS 和 Linux Sandbox 均有独立报告，涉及终端渲染、身份认证、DNS、语音运行时和 TTY 行为。CLI 作为开发者日常工具，需要在平台、终端和代理环境之间建立更一致的行为契约。

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode 社区动态日报

**日期：2026-10-23**  
**项目：** [anomalyco/opencode](https://github.com/anomalyco/opencode)

## 1. 今日速览

OpenCode 今日发布 **v1.19.4**，升级内置 Bun 至 1.4.4，集中修复 Brotli、TLS、HTTP、WebSocket、`fetch` 与根证书安全问题。社区焦点集中在 **V2 会话迁移、后台任务与子代理、模型配置失效、MCP/OAuth 稳定性及免费额度异常**；与此同时，多项 AI SDK 扩展正在补齐图像生成与 Evaluation API 路由。

## 2. 版本发布

### [v1.19.4](https://github.com/anomalyco/opencode/releases/tag/v1.19.4)

- 将内置 Bun Runtime 升级至 **1.4.4**。
- 引入 Brotli、TLS、HTTP/1.1、HTTP/2、HTTP/3、WebSocket 与 `fetch` 的安全修复。
- 根证书更新至 **NSS 3.131.1**。
- 对依赖内置网络栈、TLS 或远程模型服务的用户，建议尽快升级。

## 3. 社区热点 Issues

1. **[V1→V2 后非 Git 项目的历史会话在 TUI 中消失](https://github.com/anomalyco/opencode/issues/49827)**  
   V2 按目录创建项目，并让会话选择器仅展示当前项目，导致原先存放在 `global` 下的非 Git 会话不可见。问题获得 **17 条评论、3 个赞**，是会话迁移方向最受关注的问题之一。

2. **[V2 后台子代理缺少取消能力](https://github.com/anomalyco/opencode/issues/36423)**  
   `subagent` 已能返回会话 ID、支持恢复，但运行中的后台子代理仍无法取消。该问题获得 **13 条评论、8 个赞**，直接关系到多代理工作流的可控性和资源管理。

3. **[DeepSeek V4.1 Flash 在约 256k 上下文后提示缓存失效](https://github.com/anomalyco/opencode/issues/58175)**  
   请求超过约 256k token 后，可复用缓存前缀缩至约 16,640 token，后续内容每轮按未缓存价格计费。该问题直接关联长上下文成本与性能，已有 **5 条评论**。

4. **[CLI 保存偏好时会替换符号链接的 `cli.json`](https://github.com/anomalyco/opencode/issues/45067)**  
   保存配置偏好后，符号链接被普通文件覆盖，破坏 GNU Stow 等 dotfile 管理方式。该问题获得 **4 条评论、8 个赞**，对配置可复现性和开发者工作流影响明显。

5. **[Linux Desktop 的 New Session 与 Open Project 永久置灰](https://github.com/anomalyco/opencode/issues/58188)**  
   OpenCode Desktop 2.1.3 的相关菜单无法使用，已有对应修复 PR 提交。该问题影响 Desktop 版的核心入口，属于近期高优先级回归。

6. **[V2 从不生成会话标题](https://github.com/anomalyco/opencode/issues/58176)**  
   新会话持续显示 `Untitled session`，而 V1.18.x 能自动生成标题。问题在 macOS 与 OpenCode 2.1.3 上复现，已有 **3 条评论**。

7. **[MCP OAuth 缺少 `scope` 时反复触发浏览器重新认证](https://github.com/anomalyco/opencode/issues/58319)**  
   OAuth 提供方省略可选 `scope` 字段后，OpenCode 不会继续使用已保存的 refresh token，导致访问令牌过期后反复要求浏览器认证。该问题已有复现报告和 **2 条评论**。

8. **[插件初始化与销毁阻塞共享事件循环](https://github.com/anomalyco/opencode/issues/55272)**  
   CPU 密集型插件 setup/finalizer 会拖慢 V2 Server 的 HTTP 响应及其他 location 的事件流；销毁路径的让出机制也不完整。它是影响多 location、多插件并发性能的核心问题。

9. **[切换回原生 Agent 后仍暴露插件委派工具](https://github.com/anomalyco/opencode/issues/57185)**  
   从 OMO Agent 切回 `general` 后，持久化 Agent 和后续消息虽然显示原生 Agent，但 `task`、`call_omo_agent` 仍对模型可见，而原生 `subagent` 缺失，反映 Agent 切换与工具可见性同步存在问题。

10. **[免费模型限制疑似可通过切换 VPN 重置](https://github.com/anomalyco/opencode/issues/34344)**  
    报告称免费模型额度按 IP 限流，连接 VPN 后可重置限制并持续使用。该 Issue 获得 **18 条评论**，虽已关闭，但暴露了免费模型风控、代理网络与滥用防护机制之间的矛盾。

## 4. 重要 PR 进展

1. **[新增 OpenAI Decisions Evaluation 路由](https://github.com/anomalyco/opencode/pull/58382)**  
   为 `gpt-6-luna` 的 `POST /v1/decisions` 增加支持，使 `@opencode/ai` 可直接使用 OpenAI 实验性 Evaluation API。

2. **[为 Baseten 与 DigitalOcean 接入 System One Evaluation](https://github.com/anomalyco/opencode/pull/58379)**  
   将现有 `SystemOne.model` 接入两家提供商，允许直接调用其 Decision 模型，不再必须绕行 OpenRouter 或 Vercel。

3. **[Cloudflare Workers AI 支持 Run API 图像生成](https://github.com/anomalyco/opencode/pull/58387)**  
   新增基于 `POST /accounts/{id}/ai/run/{model}` 的图像生成能力，使 Workers AI 文生图模型可接入统一的 `Image.generate`。

4. **[Vercel AI Gateway 支持图像生成](https://github.com/anomalyco/opencode/pull/58385)**  
   为 Gateway 接入约 37 个图像模型，包括 OpenAI、BFL Flux、xAI Grok Imagine、Recraft、Seedream 和 Muse Image。

5. **[新增 Alibaba 图像生成支持](https://github.com/anomalyco/opencode/pull/58383)**  
   接入 Alibaba Model Studio 的 Qwen-Image 与 Wan 系列模型，同时覆盖 Alibaba、中国区及 Token Plan 主机。

6. **[Cloudflare Run Evaluation 支持 Clef 与 Jev](https://github.com/anomalyco/opencode/pull/58381)**  
   为 Cloudflare `/ai/run` 端点增加 Evaluation 路由，使 Clef、Clef Flash、Clef Omni 和 TypeSafe Jev 可被直接调用。

7. **[首次请求前等待 MCP Server 完成启动](https://github.com/anomalyco/opencode/pull/58374)**  
   修复 MCP 在后台连接、首个请求过早快照工具列表的问题，避免刚启动时遗漏 MCP 工具，并关闭 #58373、#51812。

8. **[MCP OAuth 支持粘贴重定向 URL](https://github.com/anomalyco/opencode/pull/58370)**  
   在 SSH、容器或远程 TUI 场景中，允许用户粘贴 OAuth 回调 URL 完成授权，不再强依赖浏览器访问本机 `127.0.0.1` 回调服务。

9. **[按配置 Profile 隔离后台服务](https://github.com/anomalyco/opencode/pull/58300)**  
   不同配置 profile 不再共享单一 `~/.local/state/opencode/service.json`，减少配置切换时后台服务实例和状态互相污染的问题。

10. **[修复 Shell 工具与 AI 请求中的 NUL 字节](https://github.com/anomalyco/opencode/pull/58361)**  
    在发送至模型提供商前清理历史中的 NUL 字节，避免 Venice 等兼容接口因非法字符串返回 400；相关 Shell 捕获与回放修复见 [#58384](https://github.com/anomalyco/opencode/pull/58384)。

## 5. 功能需求趋势

- **V2 会话兼容与迁移**：旧会话可见性、项目组织、会话标题生成是当前 V2 最突出的回归点。
- **后台任务生命周期管理**：社区同时要求子代理取消、后台 Shell 完成通知、后台任务与 Agent 切换后的状态一致性。
- **模型与 Provider 接入扩展**：新增 OpenAI Decisions、System One、Cloudflare Run、Vercel Gateway、Alibaba、Cloudflare Workers AI 等多模态与决策模型支持。
- **MCP 与 OAuth 远程可用性**：重点覆盖 Server 启动竞态、OAuth 手动回调、scope 缺失以及重复浏览器认证。
- **长上下文和成本控制**：DeepSeek 提示缓存失效及免费额度异常，直接影响大上下文任务的费用和可用性。
- **配置与多 Profile 管理**：包括配置 Profile 隔离、符号链接保护、无效配置提示以及目录配置搜索范围。
- **Desktop 与 TUI 稳定性**：Linux Desktop 菜单不可用、TUI 崩溃、文件监听器耗尽等仍是高频反馈。
- **插件生命周期与并发性能**：插件初始化、销毁、委派工具残留和 provider catalog 刷新可能影响共享 Server 的性能与稳定性。

## 6. 开发者关注点

开发者反馈最集中在以下痛点：

1. **升级后行为不一致**：V1→V2 迁移可能导致历史会话不可见、标题不再生成、Agent 配置中的 `model` 被全局默认模型覆盖。
2. **后台执行不可控**：后台子代理无法取消，Shell 被 location 回收后静默终止且没有完成通知，工作流可能一直等待。
3. **额度与计费不可预测**：免费模型限额可能因 IP 切换被重置；长上下文缓存失效后成本显著上升。
4. **MCP 登录及初始化脆弱**：远程 OAuth 回调困难、`scope` 缺失会反复认证、首个请求可能早于 MCP Server 就绪。
5. **配置和状态文件容易被破坏**：CLI 偏好会覆盖符号链接，多个 Profile 可能共享后台服务状态，非 Git 目录还可能意外继承上层配置。
6. **V2 Server 的资源与并发风险**：插件 setup/teardown、文件监听及 provider catalog 高频刷新可能阻塞事件循环或耗尽系统资源。

**总体判断：** 今天的社区主线不是单一新功能，而是 OpenCode V2 从“功能扩张”进入“兼容性与生命周期治理”阶段：会话迁移、Agent/模型解析、后台任务、MCP OAuth 和 Server 并发是最需要优先稳定的基础能力。

</details>

<details>
<summary><strong>jcode</strong> — <a href="https://github.com/1jehuang/jcode">1jehuang/jcode</a></summary>

# jcode 社区动态日报｜2026-10-23

## 今日速览

- **v0.99.1 发布**，重点修复 OpenAI 工具调用导致的持续报错，并增强 TUI 在服务失联时的恢复能力；同时加入 Muse 原生订阅登录和 Venice AI Provider 支持。
- 社区问题集中在**稳定性、性能、模型兼容性、远程使用体验与 Claude Code 兼容**。尤其是 OpenAI 工具调用后续响应、Windows Swarm 高内存占用，以及远程 SSH 键位问题值得优先跟进。
- 过去 24 小时共更新 **8 个 Issue、34 个 PR**，开发重点明显偏向测试隔离、TUI 交互、模型配置持久化、Provider 兼容性和自动重试能力。

---

## 版本发布

### v0.99.1：OpenAI 请求修复与稳定性提升

[Release v0.99.1](https://github.com/1jehuang/jcode/releases/tag/v0.99.1)

主要更新：

- 修复 OpenAI 模型因工具 Schema 被拒绝而在每轮请求中触发 `invalid_request_error` 的问题。
- 当服务消失或无响应时，TUI 不再无限重试，而是进入恢复流程。
- 新增 **Muse 原生订阅登录**。
- 新增 **Venice AI Provider** 支持。

该版本直接回应了 OpenAI 工具调用链中最影响可用性的两个问题，建议优先升级验证。

---

## 社区热点 Issues

### 1. OpenAI 持久 WebSocket 在工具调用后无法继续对话

[#1647：OpenAI persistent websocket continuation fails after tool calls](https://github.com/1jehuang/jcode/issues/1647)

- **问题**：上一轮响应触发工具调用后，后续请求可能复用旧 `response id`，只发送增量内容，却没有补充对应的 `function_call_output`，导致 `No tool output found for function call`。
- **重要性**：会直接破坏多轮工具调用和 Agent 工作流，属于影响核心任务执行链路的高优先级问题。
- **社区状态**：已有 2 条评论，仍保持开放；虽然 v0.99.1 修复了另一类 OpenAI 请求问题，但仍需关注该 WebSocket 场景是否已覆盖。

### 2. Windows Swarm 运行中出现严重内存和磁盘 I/O 异常

[#1932：10 GB of RAM usage](https://github.com/1jehuang/jcode/issues/1932)

- **问题**：Windows 下 Swarm 共享服务运行约 2 小时后，私有字节达到 14.9 GB，峰值工作集约 17 GB，并持续以约 90 MB/s 读取磁盘。
- **潜在原因**：`agentgrep` 对超大目录执行 `rg --follow --json`，输入流可能未被正确消费。
- **重要性**：属于可能导致系统卡死或磁盘损耗的资源失控问题，影响大型仓库和多 Agent 并行场景。
- **社区状态**：已有 1 条评论，仍需通过复现、输入量限制和进程回收进一步确认。

### 3. 用户反馈近期版本速度和效率下降

[#1928：Jcode used to be better](https://github.com/1jehuang/jcode/issues/1928)

- **问题**：用户认为早期版本在记忆召回、请求处理速度和整体效率方面优于当前版本，并曾明显快于 Claude Code 与 Codex。
- **重要性**：反映社区对产品核心体验的回归感知，尤其是响应延迟和 Agent 执行效率。
- **社区状态**：已有 3 条评论，为当前数据中评论最多的 Issue 之一；问题偏主观，但可能指向近期架构或默认配置变化，需要结合基准测试进一步分析。

### 4. Grok Build 模型选择器缺少 Grok 4.7

[#1942：Grok Build picker missing grok-4.7](https://github.com/1jehuang/jcode/issues/1942)

- **问题**：CLI 已默认使用 `grok-4.7`，但 TUI 的 Grok Build `/model` 选择器仍只显示 `grok-4.6`、`grok-4.5` 和 `grok-code-fast-1`。
- **重要性**：新模型目录更新不及时，用户无法通过交互界面选择当前旗舰模型。
- **社区状态**：刚创建，尚无评论；属于明确的模型目录同步缺口，修复成本较低。

### 5. Skill Frontmatter 缺少 `disable-model-invocation`

[#1941：Support skill frontmatter field disable-model-invocation](https://github.com/1jehuang/jcode/issues/1941)

- **问题**：当前只识别 `name`、`description` 和 `allowed-tools`。即使 Skill 设置了 `disable-model-invocation: true`，仍可能出现在模型可用 Skill 列表中。
- **重要性**：这会破坏 Claude Code Skill 的权限和调用边界，可能导致本应禁止模型自动调用的 Skill 被自动执行。
- **社区状态**：刚创建，尚无评论；属于兼容性修复，且具有潜在安全含义。

### 6. HTTP 模型端点被强制要求使用 HTTPS

[#1939：Make HTTPS Optional for Remote Model Connections](https://github.com/1jehuang/jcode/issues/1939)

- **问题**：连接可信局域网内的 LiteLLM 或自托管模型时，JCode 强制要求 HTTPS，导致本地 HTTP 服务无法使用。
- **重要性**：影响私有网络、本地模型网关和实验环境的接入灵活性。
- **社区状态**：尚无评论；建议实现可配置的协议策略，并保留明确的 HTTPS 安全提示。

### 7. 远程 SSH 会话应遵循本地键位

[#1938：Respect Local Keybindings in Remote SSH Sessions](https://github.com/1jehuang/jcode/issues/1938)

- **问题**：Windows 本地客户端通过 SSH 使用远程 Mac 上的 JCode 时，快捷键按远端环境解析，而不是本地客户端习惯，导致误操作。
- **重要性**：远程开发是重要使用场景，键位不一致会显著降低 TUI 可用性。
- **社区状态**：尚无评论；需要明确远程协议中客户端按键和服务端命令映射的责任边界。

### 8. Pinned TODO 卡片折叠交互范围过小

[#1936：Pinned TODO card should expand and collapse from anywhere](https://github.com/1jehuang/jcode/issues/1936)

- **问题**：只有点击 `+N more` 或 `collapse` 控制行才能折叠，无法从卡片整体展开或收起；折叠标签的位置也不够符合预期。
- **重要性**：虽然属于小型 UI 问题，但长 TODO 列表在高频 Agent 工作流中常见，交互一致性会影响效率。
- **社区状态**：尚无评论；属于易实现、低风险的 TUI 体验优化。

> 本期共更新 8 个 Issue，以上列出全部值得优先关注的条目。

---

## 重要 PR 进展

### 1. 修复测试环境变量污染与并行测试不稳定

[#1880：隔离测试环境并稳定并行运行](https://github.com/1jehuang/jcode/pull/1880)

- 清理外部 `JCODE_*` 环境变量对测试的影响。
- 对会修改 `JCODE_HOME` 的测试增加环境锁。
- 为易波动测试提供隔离的 Home 和安全边界。
- **价值**：提高 CI 可重复性，降低“本地通过、CI 失败”或并行死锁概率。

### 2. 支持带查询参数的 `/sessions`

[#1346：`/sessions <query>` 直接打开预筛选会话列表](https://github.com/1jehuang/jcode/pull/1346)

- `/sessions`、`/session` 和 `/resume` 支持可选搜索词。
- 打开会话选择器时自动聚焦搜索框并应用筛选。
- 覆盖本地与远程行为。
- **价值**：减少历史会话查找成本，改善高频恢复工作流。

### 3. 增加 `@file` 文件选择器与访问频率排序

[#1889：@file mention picker with frecency ranking](https://github.com/1jehuang/jcode/pull/1889)

- 在 TUI 提示词输入中加入文件提及选择器。
- 基于 frecency 排序常用和近期使用的文件。
- 解决用户手动输入完整路径低效的问题。
- **价值**：适合大代码库中的 Prompt 编写，可显著减少路径输入负担。

### 4. 为 herdr Agent 状态输出 OSC 9 进度序列

[#1883：Emit OSC 9 progress](https://github.com/1jehuang/jcode/pull/1883)

- 向终端输出 Agent 的运行、等待和完成状态。
- 错误采用 fire-and-forget 方式处理，不影响主流程。
- 配置中提供默认会话字段，可关闭该行为。
- **价值**：增强终端和外部 Agent 工具的状态可观测性。

### 5. 修复 herdr-webui 中 Mermaid/数学公式字形泄漏

[#1538：Pane-safe glyphs for Mermaid/math](https://github.com/1jehuang/jcode/pull/1538)

- 避免浏览器终端错误使用 Kitty 图形协议。
- 修复 Unicode 私有占位符和组合字符直接显示为乱码的问题。
- **价值**：提升 Web UI、嵌入式终端和复杂内容渲染的兼容性。

### 6. 修复 TUI 测试锁死与重入死锁

[#1896：Break test-env lock deadlock](https://github.com/1jehuang/jcode/pull/1896)

- 针对渲染状态锁与环境锁互相等待造成的并行测试挂起。
- 通过可重入 guard 和调整环境初始化顺序解决死锁。
- **价值**：直接提升测试套件稳定性，避免 CI 长时间卡死。

### 7. 模型选择器支持直接选择 Swarm Model

[#1706：Ctrl+S 选择 Swarm Model](https://github.com/1jehuang/jcode/pull/1706)

- 在 `/model` 选择器中使用 `Ctrl+S` 打开 Swarm 模型子选择器。
- 未设置覆盖值时，Agent 继承当前会话模型。
- 同时修正协调器身份回退逻辑。
- **价值**：降低多 Agent 模型配置门槛，使 Swarm 能力更容易被发现和使用。

### 8. 隔离命名 Profile 认证测试

[#1882：隔离命名 Profile 认证测试](https://github.com/1jehuang/jcode/pull/1882)

- 清除外部 `JCODE_PROVIDER_PROFILE_*` 环境变量对测试的干扰。
- 调整 Provider Catalog 测试的体积预算。
- **价值**：与 #1880 配合，进一步降低 Provider 测试受开发环境影响导致的随机失败。

### 9. 修复纯文本模型遇到图片后整个会话失效

[#1347：Stop image blocks breaking turns on text-only models](https://github.com/1jehuang/jcode/pull/1347)

- 处理 OpenAI 兼容端点返回图片但模型实际只支持文本的情况。
- 当模型拒绝图片时，增加运行时模态恢复，并清理污染后续历史记录的图像块。
- **价值**：避免一次图片工具结果导致当前会话后续所有请求持续失败。

### 10. 模型切换持久化到 `config.toml`

[#1881：Persist user model switch](https://github.com/1jehuang/jcode/pull/1881)

- 模型选择器中的切换从“仅当前会话”改为写入配置。
- 本地和远程模式均支持。
- 覆盖重启后仍保留选择的测试。
- **价值**：减少重复配置成本，解决重启后模型恢复为旧值的问题。

---

## 功能需求趋势

### 1. Provider 与新模型目录同步

- Grok 4.7 尚未进入 TUI 模型选择器：[Issue #1942](https://github.com/1jehuang/jcode/issues/1942)。
- OpenAI 工具调用后的持久 WebSocket 链路仍存在问题：[Issue #1647](https://github.com/1jehuang/jcode/issues/1647)。
- 自定义 OpenAI 兼容 Provider 的模型名称、推理强度和 effort 配置持续受到关注：[PR #1879](https://github.com/1jehuang/jcode/pull/1879)。

**趋势**：用户不仅要求“接入更多 Provider”，还希望模型目录、工具协议和自定义网关行为能够快速跟进。

### 2. 性能、资源消耗与大型仓库稳定性

- 用户反馈整体速度可能相较早期版本下降：[Issue #1928](https://github.com/1jehuang/jcode/issues/1928)。
- Windows Swarm 出现 14.9 GB 私有内存和持续磁盘读取：[Issue #1932](https://github.com/1jehuang/jcode/issues/1932)。
- macOS 侧也在完善私有内存报告：[PR #1898](https://github.com/1jehuang/jcode/pull/1898)。

**趋势**：社区重点关注的不只是功能数量，还包括 Agent 并行、搜索工具和长时间运行时的资源效率。

### 3. Claude Code 兼容性

- Skill 的 `disable-model-invocation` Frontmatter 尚未支持：[Issue #1941](https://github.com/1jehuang/jcode/issues/1941)。
- 记忆提取模型、推理 effort、主题、风险开关等配置也在补齐：[PR #1875](https://github.com/1jehuang/jcode/pull/1875)、[PR #1876](https://github.com/1jehuang/jcode/pull/1876)、[PR #1877](https://github.com/1jehuang/jcode/pull/1877)。

**趋势**：jcode 正在强化对 Claude Code 工作流、Skill 规则和配置约定的兼容。

### 4. TUI 操作效率与可发现性

- 文件引用选择器：[PR #1889](https://github.com/1jehuang/jcode/pull/1889)。
- 会话搜索预筛选：[PR #1346](https://github.com/1jehuang/jcode/pull/1346)。
- Swarm 模型选择入口：[PR #1706](https://github.com/1jehuang/jcode/pull/1706)。
- MCP 工具管理命令：[PR #1874](https://github.com/1jehuang/jcode/pull/1874)。
- TODO 卡片交互改进：[Issue #1936](https://github.com/1jehuang/jcode/issues/1936)。

**趋势**：减少手输路径、命令和配置，让常用能力通过选择器、快捷键和 `/` 命令快速访问。

### 5. 远程开发与本地模型接入

- HTTP 模型端点支持：[Issue #1939](https://github.com/1jehuang/jcode/issues/1939)。
- SSH 远程会话中的本地键位兼容：[Issue #1938](https://github.com/1jehuang/jcode/issues/1938)。

**趋势**：社区希望 JCode 能无缝适配 LiteLLM、自托管模型和跨设备 SSH 开发场景。

---

## 开发者关注点

1. **多轮工具调用必须可靠**  
   工具调用后的响应 ID、输出项和历史记录必须严格匹配，否则一次失败会污染后续所有轮次。相关问题见 [#1647](https://github.com/1jehuang/jcode/issues/1647)。

2. **长时间运行不能失控**  
   大型目录搜索、Swarm 并行和子进程输出处理容易引发内存、磁盘 I/O 和卡顿问题。建议重点检查 `rg` 输出消费、进程回收和缓存上限。相关问题见 [#1932](https://github.com/1jehuang/jcode/issues/1932)。

3. **测试环境必须与开发环境隔离**  
   `JCODE_HOME`、Provider Profile 和认证环境变量会污染测试结果。当前多个 PR 正在通过环境清理、锁和固定 Home 修复这一问题。参见 [#1880](https://github.com/1jehuang/jcode/pull/1880) 和 [#1882](https://github.com/1jehuang/jcode/pull/1882)。

4. **配置应既可持久化，也支持会话级临时覆盖**  
   用户希望模型、记忆模型、自动重试和安全开关能够写入配置，同时保留仅当前会话生效的覆盖方式，避免临时操作永久改写环境。参见 [#1881](https://github.com/1jehuang/jcode/pull/1881)、[#1875](https://github.com/1jehuang/jcode/pull/1875) 和 [#1878](https://github.com/1jehuang/jcode/pull/1878)。

5. **安全与兼容性不能脱节**  
   `disable-model-invocation` 被忽略可能影响 Skill 调用边界；允许 HTTP 端点则需要明确安全提示和配置策略。参见 [#1941](https://github.com/1jehuang/jcode/issues/1941) 与 [#1939](https://github.com/1jehuang/jcode/issues/1939)。

6. **远程 TUI 的输入语义需要统一**  
   SSH 场景下应明确由本地还是远端解析键位，并避免键盘布局、终端协议和远程命令映射之间的差异。参见 [#1938](https://github.com/1jehuang/jcode/issues/1938)。

</details>

<details>
<summary><strong>pi</strong> — <a href="https://github.com/earendil-works/pi">earendil-works/pi</a></summary>

# pi 社区动态日报｜2026-10-23

## 今日速览

过去 24 小时没有新版本发布，但社区提交了 27 个更新 PR，主要集中在 **会话存储与 HTML 导出可靠性、终端输入稳定性、模糊搜索及扩展 API**。讨论最活跃的问题则是大型会话性能与工具展示体验；今日新增问题还包括 `pi.exec()` UTF-8 流式解码损坏、MCP OAuth 假死，以及 macOS 中止 Bash 后命令串行执行等。

## 社区热点 Issues

1. **为启动延迟与内存设定明确预算**  
   [#7739](https://github.com/earendil-works/pi/issues/7739)  
   提议以 jcode benchmark 为基准，为 Pi 的启动延迟和内存占用设定可追踪的预算。该 Issue 获得 **11 条评论**，是今日讨论最热门的条目，反映性能回归和可量化基线已成为社区核心诉求。

2. **向扩展开放统一的工具展示 API**  
   [#10259](https://github.com/earendil-works/pi/issues/10259)  
   希望扩展能够统一控制内置工具、MCP、codemode 及自定义工具的展示，或提供内置的单行工具模式。已有 **5 条评论、2 个赞**，说明工具调用视图的信息密度与扩展可控性需求突出。

3. **分类器模型忽略 `modelOverrides`**  
   [#11223](https://github.com/earendil-works/pi/issues/11223)  
   `~/.pi/agent/models.json` 中的模型覆盖配置对 classifier models 静默失效，既无报错也无警告。该问题会造成模型元数据与预期不一致，**5 条评论**显示其对路由和定制模型用户影响较大。

4. **800+ 消息会话下 TUI 滚动和输入卡顿**  
   [#9807](https://github.com/earendil-works/pi/issues/9807)  
   Pi 当前在交互时会对整个滚动历史进行完整重渲染；Issue 复现了 814 条消息、1.7 MB JSON 下的明显延迟。该问题获得 **5 条评论、3 个赞**，社区期待引入增量渲染或单元格级 diff。

5. **Windows 高负载下终端符号串入输入框**  
   [#11086](https://github.com/earendil-works/pi/issues/11086)  
   在 Windows 客户端 CPU 压力较高、通过 SSH 运行 Pi 时，部分符号可能泄漏到用户输入中。问题被标记为 **P0**，直接涉及输入正确性和远程终端可用性，已有 **4 条评论**。

6. **保留辅助 Token 用量的模型归属信息**  
   [#11090](https://github.com/earendil-works/pi/issues/11090)  
   建议为 model-tool calls、compaction 和 branch summaries 等辅助调用保留 provider/model 身份，以便扩展准确导出分模型 Token 统计。问题有 **3 条评论**，对多模型代理、成本核算和可观测性扩展很重要。

7. **支持配置空闲缓存预热时间窗口**  
   [#11127](https://github.com/earendil-works/pi/issues/11127)  
   当前 `cacheWarming: "idle"` 的最长空闲时间硬编码为 30 分钟，社区希望可配置为 60 或 120 分钟，以匹配不同 Prompt Cache TTL。已有 **3 条评论**，核心诉求是让缓存策略能够适应实际供应商计费和有效期。

8. **分离鼠标转义序列时，尾部字符被输入编辑器**  
   [#11172](https://github.com/earendil-works/pi/issues/11172)  
   当鼠标报告被拆包读取时，转义超时逻辑可能只输出序列前半段，剩余字符随后被当作普通输入。该问题直接影响终端编辑体验，目前仍在开放，已有 **2 条评论**。

9. **`pi.exec()` 逐块解码导致 UTF-8 字符损坏**  
   [#11312](https://github.com/earendil-works/pi/issues/11312)  
   若一个 UTF-8 字符跨 stdout chunk 边界，当前逐块 `toString()` 会将正常中文解码为乱码。该问题于今日创建并关闭，显示缺陷已被快速处理，但提醒调用方应使用流式解码器或跨块缓冲。

10. **MCP OAuth 登录成功后仍长时间停在 Connecting**  
    [#11311](https://github.com/earendil-works/pi/issues/11311)  
    浏览器已完成认证后，Pi 仍可能保持 2–3 分钟 “Connecting…” 状态，且 `Ctrl+C` 无法取消。该问题直接影响 MCP 服务接入与故障恢复，目前已被关闭，已有 **2 条评论**。

## 重要 PR 进展

1. **修复 faux provider 的缓存 Token 重复计数**  
   [#11318](https://github.com/earendil-works/pi/pull/11318)  
   `fix(ai): do not count faux cache writes as input tokens`  
   当 faux provider 开启缓存保留后，模拟缓存写入曾同时计入 `input`，导致 `input + cacheRead + cacheWrite` 超过估算 Prompt。PR 将修正本地测试与开发环境的 Token 统计。

2. **通过单一文件描述符写入 fork 会话**  
   [#11288](https://github.com/earendil-works/pi/pull/11288)  
   `fix(coding-agent): write forked session through one fd`  
   旧实现对每个会话条目调用一次 `appendFileSync`，复制约 3,000 条记录时会反复开关文件。PR 将连续打开和关闭文件，直接改善大型会话 fork 延迟及 Host 握手超时。

3. **正确等待扩展生成的 user message**  
   [#11309](https://github.com/earendil-works/pi/pull/11309)  
   `fix(coding-agent): await extension user messages`  
   让命令处理器等待扩展 `sendUserMessage` 返回的 Promise，同时保持现有错误报告行为。这可避免扩展触发下一轮对话时出现未处理异步或竞态问题。

4. **单个扩展包安装失败不再阻断启动**  
   [#11304](https://github.com/earendil-works/pi/pull/11304)  
   `fix(coding-agent): start when a configured package fails to install`  
   配置中的某个包安装失败时，Pi 将跳过该来源、保留可正常加载的包，并通过扩展 warning channel 报错。提升了 SDK/Harness 场景下的容错能力。

5. **Deep Session HTML 导出改为迭代遍历**  
   [#6843](https://github.com/earendil-works/pi/pull/6843)  
   `fix(coding-agent): render deep session exports iteratively`  
   使用显式栈替代递归遍历，保留子节点顺序、活动子树和最新叶节点导航，并加入 20,000 条父链回归测试。直接修复长会话导出时的栈溢出与空白页面。

6. **模糊搜索优先连续匹配**  
   [#11296](https://github.com/earendil-works/pi/pull/11296)  
   `fix(tui,coding-agent): rank contiguous fuzzy matches and search session fields separately`  
   改进 `/model`、`/resume` 等搜索入口的排序：优先连续匹配，并分别搜索会话字段，解决输入 `opus` 时其他 Sonnet 模型反而排在 Opus 前面的问题。

7. **保留模型选择器中的配置顺序**  
   [#11145](https://github.com/earendil-works/pi/pull/11145)  
   `fix: preserve scoped model order and prefer substring matches`  
   对 scoped model picker 关闭位置惩罚，使同等质量的匹配保持原有配置顺序，同时提升子字符串匹配准确度。该变更强调“最佳匹配”与“用户预设顺序”之间的平衡。

8. **`pi.exec()` 保留子进程启动错误**  
   [#11257](https://github.com/earendil-works/pi/pull/11257)  
   `fix(coding-agent): preserve pi.exec spawn errors`  
   当 executable 不存在且进程未产生 stderr 时，将 spawn error 返回到 `stderr`，避免 Host 只看到空结果；同时不改变正常静默非零退出的行为。

9. **避免长会话 HTML 导出树递归溢出**  
   [#11275](https://github.com/earendil-works/pi/pull/11275)  
   `fix(coding-agent): avoid deep export tree stack overflow`  
   将 HTML 导出中的树构建、活动分支标记等递归替换为显式栈，并增加 20,000 层回归测试。与 #6843 目标一致，但形成了两条相互印证的数据。

10. **macOS 上先停止 Shell，再终止其进程组**  
    [#11289](https://github.com/earendil-works/pi/pull/11289)  
    `fix(coding-agent): stop macOS shell groups before killing them`  
    修复中止 Bash 调用后，前台子进程退出唤醒 Shell、Shell 又继续执行下一条命令的竞态。Linux 和 Windows 终止逻辑保持不变，并保留 kill fallback。

## 功能需求趋势

- **性能与可扩展性**
  - 为启动延迟、内存、fork 和大型会话操作建立 benchmark 与预算。
  - TUI 从全量重渲染转向增量渲染或 diff。
  - 优化大体积 JSONL 会话加载、复制和导出。

- **扩展与定制能力**
  - 统一控制内置、MCP 与扩展工具的呈现方式。
  - Markdown transformer 需要 `messageId`、时间戳等上下文，以便按消息定制。
  - SDK 用户希望在保留 Pi 默认工具说明和规则的同时，自定义系统提示词前导内容。

- **模型与缓存管理**
  - `modelOverrides` 应统一作用于分类器等辅助模型。
  - 支持更细粒度的 provider/model 归属和 Token 用量统计。
  - 可配置 Prompt Cache 预热窗口、auto-compaction 阈值及 provider 级策略。

- **终端编辑与跨平台稳定性**
  - 修复 Windows/SSH 输入污染、鼠标转义拆包问题。
  - 改善 WSL 剪贴板图片粘贴。
  - 修复 macOS 命令中止竞态及执行输出编码。

- **会话管理与可移植性**
  - 大型会话应支持异步打开。
  - HTML 导出需要稳定呈现深层会话树和 system messages。
  - 完善 Windows/macOS 安装入口及 npm、Nix 打包支持。

- **交互体验**
  - 改善模型与会话搜索排序。
  - 支持 skill 的行内 slash autocomplete。
  - 工具调用提供更紧凑、可配置的单行视图。

## 开发者关注点

1. **可测量的性能基线**：开发者不只是要求“更快”，而是希望有 benchmark、预算和防止回归的门槛。
2. **大型会话的 I/O 路径**：会话复制逐条开关文件、启动加载及导出递归栈溢出，是近期最集中的工程问题。
3. **终端协议健壮性**：PTY、SSH、Windows Terminal 和 WSL 组合下，拆包输入、剪贴板及进程中止行为仍需更系统地测试。
4. **异步语义一致性**：扩展消息、SessionManager、MCP OAuth 均涉及 Promise/取消机制，Host 集成方尤其关注是否会阻塞握手或无法中断。
5. **模型配置的可解释性**：静默忽略配置比显式报错更难排查；辅助模型尤其需要统一的 override 与统计口径。
6. **扩展 API 的控制粒度**：社区希望工具渲染、Markdown 转换和系统提示词既能统一定制，又不破坏 Pi 默认行为。
7. **发布安装与可移植性**：Homebrew/Windows 安装文档、Nix 打包和不同运行时兼容性仍是新用户进入 Pi 的主要摩擦点。

</details>

---
*本日报由 [Big Model Radar](https://github.com/96loveslife/big_model_radar) 自动生成。*
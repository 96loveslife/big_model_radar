# AI CLI 工具社区动态日报 2026-11-21

> 生成时间: 2026-11-21 06:31 UTC | 覆盖工具: 8 个

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

# AI CLI 工具生态横向对比分析报告

**数据日期：2026-11-21**  
**统计口径：各项目过去 24 小时内更新的 Issues、PRs 与 Releases；不同项目的数据披露粒度存在差异。**

---

## 1. 生态全景

AI CLI 竞争已从“能否生成代码”全面转向**能否可靠地完成长时间、跨项目、跨设备的代理任务**，会话持久化、上下文压缩、权限治理与成本可观测性成为共同主线。  
今日最突出的共性问题不是缺少功能，而是**配置、界面显示与实际执行行为不一致**：包括权限降级、模型推理档位失效、Hooks/Skills 未生效、项目上下文串线等。  
与此同时，Claude Code、OpenAI Codex、Gemini CLI、Pi 均在加速多智能体、MCP 和 Computer Use，但工程重心明显转向**状态语义、失败恢复、安全边界与跨平台稳定性**。  
整体来看，成熟产品开始补齐企业治理和桌面端可靠性，新兴项目则快速扩张 Provider、插件和远程执行能力，但部分“配置已支持、运行时未落地”的问题仍较突出。

---

## 2. 各工具活跃度对比

> “未披露”表示原始日报未提供准确总量，不代表没有更新；活动度以已披露数据和社区反馈为依据。

| 工具 | 今日 Issues | 今日 PRs | Release 情况 | 活跃度判断 |
|---|---:|---:|---|---|
| **Claude Code** | 10 个热点 Issue | 3 | **v2.1.330**：企业组织登录、内置 easel 图表工具 | 活跃度高，讨论聚焦平台化能力 |
| **OpenAI Codex** | 50 | 50 | 3 个 Rust Alpha：`0.173.0-alpha.2`～`.4` | **最高**，迭代速度突出 |
| **Gemini CLI** | 10 个热点 Issue | 28 | `v0.71.0-nightly...`：Windows 路径、会话恢复优化 | 很高，修复和可靠性建设密集 |
| **GitHub Copilot CLI** | 26 | 0 | 4 个版本：`v1.0.115-2`～`-5` | 高频发布，PR 数据当日为空 |
| **OpenCode** | 10 个热点 Issue | 10 | 无新版本 | 高活跃，平台扩展与稳定性并进 |
| **jcode** | 7 | 10 | 无新版本 | 中高活跃，Provider/Windows 修复集中 |
| **pi** | 50 | 22 | **v1.6.0**：GPT-6.2 Astra/Sol | **最高梯队**，新模型接入与兼容性并行 |
| **Kimi Code CLI** | 0 | 0 | 无 | 当日无活动，暂无法判断趋势 |

### 活跃度结论

- **OpenAI Codex** 和 **pi** 的日更新规模最大，均有 50 个 Issue 更新；Codex 另有 50 个 PR，属于当日最明显的开发冲刺。
- **Gemini CLI** 28 个 PR，热点高度集中在 Subagent 状态、沙箱、密钥保护和跨平台兼容性。
- **GitHub Copilot CLI** 在 24 小时内连续发布 4 个版本，发布节奏最快，但当日没有 PR 更新。
- **Claude Code** 的绝对更新量不是最高，但议题影响范围最广，已延伸至企业策略、开源、分布式 Agent 和会话连续性。
- **Kimi Code CLI** 缺少当日数据，不能据此判断项目整体活跃度。

---

## 3. 共同关注的功能方向

### 3.1 多智能体编排与生命周期

多个工具都在从“并行调用多个模型”转向“可管理、可恢复的多代理系统”：

- **Claude Code**：社区最关注跨机器 Agent-to-Agent 协议，要求智能体能够发现、委派、回传任务，并明确权限、费用和重试状态。
- **Gemini CLI**：聚焦 Subagent 终止语义、自动发现与主动路由；`MAX_TURNS` 后仍报告成功、Generalist Agent 无限挂起是当前核心问题。
- **OpenCode**：希望恢复前台子代理执行，改进父子代理状态同步。
- **jcode**：明确区分“取消当前父 turn”和“终止全部子代理”，避免 Esc 误杀已派生子任务。
- **pi**：通过模型目录中的 `collaboration_modes.initial` 完善首次 Plan 回合的协作策略。

**判断：** 多代理已从“有没有子 Agent”进入“能否准确控制生命周期、状态与成本”的阶段。

### 3.2 会话恢复与跨设备连续性

- **Claude Code**：暴露 Desktop 本地 transcript、Web 保留项目决策、`--resume`/`--continue` 行为统一、排队消息和子 Agent 状态恢复。
- **Codex**：恢复聊天时必须绑定正确的工作区、`cwd` 和 `AGENTS.md`，避免上下文串线。
- **Gemini CLI**：按“最近活跃”而非“最近启动”恢复会话，并修复恢复后 tool-call ID 重复问题。
- **Copilot CLI**：崩溃遗留的 `inuse.<pid>.lock` 仍会阻止有效会话恢复。
- **OpenCode**：睡眠或服务重启后 TUI 返回启动页，虽然任务可能仍在运行。
- **pi**：修复超大会话加载时的调用栈溢出，并校正上下文编辑后的 Token 估算。

**判断：** 用户期待恢复的不只是聊天记录，而是**任务、队列、权限、模型、项目知识、子代理状态及执行结果**的完整延续。

### 3.3 权限模型与沙箱安全

- **Copilot CLI** 的 WSL `rsync --delete` 清空磁盘事件，是今日最高风险案例；社区要求展开后的命令预览、作用域确认和默认阻断。
- **Gemini CLI** 扩展危险删除命令识别，并修复粘贴 `@` 路径导致 SSH 私钥被意外附加的问题，同时推进零依赖 OS 沙箱。
- **Codex** 出现“Full access”静默降级为 `workspace-write`、权限控件消失等 UI 与实际权限不一致问题。
- **OpenCode** 的 `external_directory: ask` 规则被报告未触发，存在工作区外访问绕过风险。
- **jcode** 暴露追加指令可能覆盖原任务并触发破坏性操作的问题。

**判断：** 权限系统必须做到**可解释、不可静默降级、默认最小化，并能够识别跨 Shell 展开后的真实命令**。

### 3.4 MCP 从“能连接”走向“协议一致、启动更快”

- **Codex**：改善 HTTP MCP 启动错误、敏感 URL 脱敏、旧协议兼容，并在云端目录刷新期间预热 MCP Server。
- **Copilot CLI**：MCP Tasks 虽被声明支持，实际调用却未发送增强字段；OAuth 状态探测也缺少 `Mcp-Session-Id`。
- **OpenCode**：`notifications/tools/list_changed` 后客户端虽刷新列表，模型却无法调用新增工具。
- **Claude Code**：easel 能在 MCP 指标出现时自动提供可视化；社区同时关注 MCP 指标与成本归因。

**判断：** MCP 的下一阶段重点是**能力声明与真实行为一致、动态工具同步、错误可诊断、凭据不泄漏以及首回合延迟优化**。

### 3.5 上下文、Token 与成本可观测性

- **Claude Code**：社区要求统一 `claude usage`，按 Session、模型、缓存、子 Agent 和压缩事件拆分成本；自动压缩口径不一致也受到关注。
- **Copilot CLI**：请求一小时 Prompt Cache TTL，并在会话列表显示 AI Credits 消耗。
- **pi**：服务层级成本计算错误、缓存 Token 元数据和 `compaction.modelOverrides` 路由问题受到关注。
- **Gemini CLI**：工具过多触发 API 400，AST 感知读取、搜索和代码库映射成为降低 Token 消耗的重要方向。
- **Codex**：推理摘要级别、并发摘要以及 Web Search 的 cached/indexed/live 分层持续完善。

**判断：** 成本、上下文占用、缓存命中率和压缩行为正在成为 Agent 的基础运行时指标，而不是附加统计功能。

### 3.6 跨平台与桌面端稳定性

- **Codex**：Windows 截图权限未释放、macOS 启动崩溃、Computer Use 锁定界面无法退出等问题突出。
- **Gemini CLI**：Windows 路径、Wayland 浏览器、Node 26、IME 输入和受限沙箱均有修复。
- **Copilot CLI**：Windows 沙箱、Cortex XDR、WinGet 升级、WSL 回调、子进程清理均受关注。
- **jcode**：Windows 命名管道、俄语键盘布局、OSC 11、单元测试跨平台编译问题集中。
- **pi**：Windows Git Bash 静默截断长命令却返回成功，以及 console close 清理缺失属于高优先级问题。
- **OpenCode**：Windows Shell 引号、路径参数、项目恢复和权限规则问题较多。

**判断：** Windows、Wayland、非英语键盘布局和受限企业环境已成为实际采用障碍，而非边缘兼容性事项。

---

## 4. 差异化定位分析

| 工具 | 功能侧重 | 目标用户 | 技术路线与生态定位 |
|---|---|---|---|
| **Claude Code** | 企业治理、多 Agent、会话连续性、Hooks/Skills、Desktop/Remote Control | 大型工程团队、企业用户、高级开发者和重度 Agent 用户 | 以 Claude 模型为核心，强化组织策略、扩展体系和分布式协作；开源 PR 表明希望扩大可审计与可扩展性 |
| **OpenAI Codex** | 桌面 Computer Use、权限模型、推理摘要、Web Search、MCP | 跨平台 AI 开发者、桌面自动化用户、OpenAI 生态用户 | Rust 核心、CLI/TUI/Desktop/App Server 多端协同；快速迭代能力强，但权限与生命周期一致性问题较多 |
| **Gemini CLI** | Subagent、Skills、Browser Agent、AST 工具、沙箱 | Google/Gemini 生态用户、Agent 编排实验者、大型代码库用户 | 强调 Agent 可扩展性与开放集成，同时快速补齐安全和跨平台基础；当前重点是让 Agent 行为可信 |
| **Copilot CLI** | GitHub 工作流、插件、ACP、Remote Control、Windows 沙箱 | GitHub 平台用户、企业终端用户、插件与 MCP 开发者 | 深度绑定 GitHub 服务生态，版本发布频繁；强项是集成与远程能力，短板是跨 Shell 安全和协议实现一致性 |
| **OpenCode** | 多 Provider、Desktop、MCP、Machine/远程执行、自定义 Agent | 重视模型自由、桌面体验和自托管扩展的用户 | 开放 Provider 与机器连接能力突出，适合多模型和远程工作流；权限、配置生效和跨平台一致性仍需加强 |
| **jcode** | 多模型 Provider、Claude 兼容、TUI/ACP、多代理、Windows 支持 | 追求轻量、多 Provider 和可定制 CLI 的开发者 | Provider 抽象和 OAuth 扩展灵活，强调原生终端体验；当前规模较小，但对 Windows 和推理连续性投入明显 |
| **pi** | 新模型快速接入、Provider 抽象、Codemode、长会话、扩展系统 | 高频模型尝鲜者、自动化工程师、插件开发者 | 模型目录和兼容适配推进最快，适合多 Provider；新模型发布后能力声明与实际请求不一致的问题较突出 |
| **Kimi Code CLI** | 当日无足够动态 | 暂无法判断 | 需要结合后续多日数据判断定位与成熟度 |

### 定位差异总结

- **平台治理型**：Claude Code——企业策略、开源、可扩展、多 Agent 平台化。
- **桌面自动化型**：Codex——Computer Use、权限、TUI、Desktop、App Server 一体化。
- **Agent 编排型**：Gemini CLI——Subagent、Skills、Browser Agent 与沙箱并行建设。
- **GitHub 生态型**：Copilot CLI——插件、ACP、Remote Control 与 GitHub 工作流。
- **开放模型型**：OpenCode、pi、jcode——多 Provider、自定义模型接入和远程/扩展能力更突出。

---

## 5. 社区热度与成熟度

### 社区热度

**第一梯队：**

1. **OpenAI Codex**
   - 50 个 Issue、50 个 PR 同时更新；
   - Windows Computer Use、VS Code 项目隔离、macOS 权限等问题具有广泛影响。

2. **pi**
   - 50 个 Issue、22 个 PR；
   - GPT-6.2 发布后迅速出现多个 P0，表明模型发布速度与兼容修复压力同步上升。

3. **GitHub Copilot CLI**
   - 26 个 Issue、24 小时内 4 个版本；
   - WSL 磁盘清空事件虽评论较少，但风险和传播价值最高。

**第二梯队：**

4. **Gemini CLI**
   - 28 个 PR，Subagent 可靠性和安全修复形成明确主线，工程成熟度快速提升。

5. **Claude Code**
   - 数据披露量低于上述项目，但议题覆盖企业、多 Agent、开源、会话和桌面端，社区影响范围广。

6. **OpenCode**
   - 10 个热点 Issue、10 个 PR，免费额度问题达 400 条评论，实际社区关注度很高。

**第三梯队：**

7. **jcode**
   - 7 个 Issue、10 个 PR，活跃但体量较小，主要围绕 Provider、Windows 和多代理修复。

8. **Kimi Code CLI**
   - 当日无活动，不能据此评价成熟度。

### 成熟度判断

| 阶段 | 工具 | 判断依据 |
|---|---|---|
| **成熟平台化阶段** | Claude Code、Codex、Copilot CLI | 多端产品形态、企业治理、MCP、桌面端和权限体系已成形；主要矛盾转为回归与跨端一致性 |
| **高速工程化阶段** | Gemini CLI、pi | 功能扩张快，Provider/Agent 能力快速增加，同时大量 P0/P1 暴露契约与边界问题 |
| **快速演进阶段** | OpenCode、jcode | 多 Provider、桌面、Machine、Agent 生命周期等能力扩张明显，但配置一致性和平台适配尚未完全收敛 |
| **数据不足** | Kimi Code CLI | 当日无活动，需结合更长窗口观察 |

---

## 6. 值得关注的趋势信号

### 6.1 “代理成功率”正在成为新的产品质量指标

Gemini CLI 的 `MAX_TURNS` 假成功、Codex 定时任务只唤醒不执行、Copilot CLI 命令截断却返回成功，都说明**系统状态必须与真实执行结果一致**。  
未来评估 CLI，不能只测“能否回答”，还要测失败可诊断性、退出码、任务续跑和异常恢复。

### 6.2 权限治理将从提示层下沉到执行层

多起事故表明，仅靠 UI 确认或模型自律不够。关键控制点将包括：

- 展开后的真实命令预览；
- 工作区外访问拦截；
- 跨 Shell/PowerShell/WSL 的语义安全检查；
- 权限降级显式提示；
- 凭据通过 broker 或系统钥匙串提供，而非直接进入上下文。

### 6.3 MCP 将成为 Agent 工具生态的事实标准，但协议一致性仍不足

Tasks、OAuth、Session Header、Blob、动态工具发现均出现实现偏差。插件和 MCP 服务开发者应重点关注：

- 初始化能力声明是否与实际请求一致；
- 动态新增工具何时进入模型可见集合；
- 错误信息是否脱敏；
- 旧协议回退及首回合启动延迟。

### 6.4 会话正在从聊天记录升级为可迁移的执行状态

未来竞争焦点将从“支持 `/resume`”转向：

- 排队消息是否保留；
- 子 Agent 是否仍在运行；
- 模型路由、effort、权限是否恢复；
- 项目规则和 `AGENTS.md` 是否绑定正确；
- 上下文压缩后的项目知识是否保留。

这将直接推动 Agent 运行时向数据库化、事件溯源和跨设备任务控制发展。

### 6.5 多模型生态繁荣，但兼容成本快速上升

GPT-6.2、Gemini 4、Claude 新路由及大量 OpenAI-compatible 服务正在扩大选择空间，也带来：

- 推理参数语义不一致；
- signed thinking/reasoning item 回放差异；
- 上下文窗口估算不一致；
- 错误结构、流式事件和工具调用协议差异；
- 成本 tier 与缓存计费不准确。

Provider 适配层的价值将显著上升，简单的模型名称映射已不足以支撑生产使用。

### 6.6 Windows 与企业受管环境成为落地试金石

多个项目同时暴露 Windows 命名管道、Shell 引号、Git Bash 长度限制、企业杀毒软件、WinGet、OSC 和键盘布局问题。企业选型时应增加：

- PowerShell/WSL/Bash 混合命令测试；
- 企业安全软件兼容测试；
- 非英语键盘布局测试；
- 沙箱与受管目录访问测试；
- 崩溃恢复和后台任务生命周期测试。

### 6.7 成本可观测性将从附加功能变成路由依据

统一 usage、缓存 TTL、推理档位、服务 tier、Credits 和压缩原因被同时关注，说明成本数据将不再仅用于账单，而可能参与：

- 自动选择模型和 effort；
- 决定是否继续长任务；
- 判断是否需要压缩或切换 Provider；
- 评估子 Agent 委派是否经济。

---

## 决策建议

- **大型企业团队**：优先评估 Claude Code 与 Codex，重点审查企业策略、权限一致性、桌面稳定性和会话迁移。
- **GitHub 深度用户**：Copilot CLI 集成价值高，但在启用 WSL、跨 Shell 命令或高权限 Agent 前应实施额外沙箱与命令审计。
- **Gemini/多 Agent 探索团队**：Gemini CLI 的 Subagent、Skills 和 AST 工具方向值得关注，但当前需规避状态误报与配置未生效问题。
- **多模型与自托管用户**：OpenCode、pi、jcode 提供更高 Provider 自由度；选型时应使用真实第三方端点验证推理参数、流式协议、错误结构和成本统计。
- **所有工具的统一验收项**：建议至少测试权限实际值、任务取消语义、异常退出恢复、上下文溢出、MCP 动态更新、Windows 行为以及费用统计准确性。

---

## 各工具详细报告

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills 社区热点

> 数据来源: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills 社区热点报告

> 数据范围：截至 2026-11-21。  
> 说明：所给 PR 数据中的评论数均为 `undefined`，因此以下“热度”主要依据 PR 排名、Issue 关联、更新活跃度与社区反馈综合判断；状态以清单中的 `[OPEN]` 为准。

## 1. 热门 Skills 排行

| 排名 | Skill / PR | 功能与热点 | 当前状态 |
|---|---|---|---|
| 1 | [mcp-builder：适配 MCP 2.x 与自定义请求头](https://github.com/anthropics/skills/pull/1742) | 修复 MCP 2.0 后客户端重命名及自定义 HTTP Header 配置方式，解决新版 SDK 兼容问题。热点集中在协议升级、连接稳定性和自定义鉴权。 | Open |
| 2 | [skill-creator：隔离触发评估并处理 Windows/运行时异常](https://github.com/anthropics/skills/pull/1298) | 修复并行评估串扰、Windows 管道兼容及运行时异常被误判为“非触发”等问题，直接提升 Skill 描述优化和评测可信度。 | Open |
| 3 | [Notion 规格到实现 + 量化简历审计](https://github.com/anthropics/skills/pull/1245) | 将产品或技术规格拆成可执行的 Notion 任务、验收标准与进度跟踪，并加入简历量化审计能力。体现“从规格直接进入执行工作流”的需求。 | Open |
| 4 | [webapp-testing：移除 `shell=True`](https://github.com/anthropics/skills/pull/1980) | 在启动测试服务器时避免通过系统 Shell 执行用户或 Agent 提供的命令，修复命令注入风险。安全加固是主要讨论点。 | Open |
| 5 | [docx：LibreOffice 超时及修订标记校验](https://github.com/anthropics/skills/pull/1792) | 不再把 LibreOffice 超时误报为成功，并在输出 DOCX 中检查 `w:ins`、`w:del` 等修订标记。热点是文档自动化结果是否真正可信。 | Open |
| 6 | [md2video-audio：Markdown 转视频与配音](https://github.com/anthropics/skills/pull/1703) | 使用 Marp 等工具将 Markdown 转成演示幻灯片、MP4 视频，并生成拟真人声旁白。代表低成本多媒体内容生产方向。 | Open |
| 7 | [Pyxel：Python 复古游戏开发](https://github.com/anthropics/skills/pull/525) | 覆盖复古游戏实现、无头输入驱动运行、逐帧检查及状态验证，强调可测试、可验证的游戏开发流程。 | Open |
| 8 | [claude-api：更新 `pause_turn` 恢复指南](https://github.com/anthropics/skills/pull/1950) | 修正 Python SDK 的暂停/恢复建议；新版 SDK 已自动恢复暂停轮次，旧文档中的外层重试方案已过时。 | Open |

### 热门主题解读

- **Skill 自身质量工具最受关注**：`skill-creator`、MCP Builder 和 Claude API 文档相关修复占据高位，说明社区不只关心“新增 Skill”，更关心触发准确率、评测有效性与 SDK 兼容性。
- **文档 Skills 正从“能生成”转向“可验证”**：DOCX、XLSX、PPTX 等 PR 大量围绕超时、引用、命名空间、渲染错误和输出校验展开。
- **安全成为显性议题**：社区 Skill 冒充官方命名空间、`webapp-testing` 命令注入、文档 XML 破坏等问题表明，Skills 正在进入权限与供应链治理阶段。
- **内容生成继续扩展**：Markdown 转视频、Notion 规格落地等 PR 表明工作流型、多模态型 Skill 仍有较强供给。

---

## 2. 社区需求趋势

### 2.1 企业级共享与治理

最突出的需求是组织级 Skill 分发和权限管理。

- [Claude.ai 缺少组织级 Skill 共享](https://github.com/anthropics/skills/issues/228)：用户目前仍需下载 `.skill` 文件并通过 Slack、Teams 人工分发，团队希望获得共享库或直接分享链接。
- [社区 Skill 使用 `anthropic/` 命名空间造成信任边界滥用](https://github.com/anthropics/skills/issues/492)：官方标识、发布者身份、审核状态和权限边界需要清晰区分。
- [Reasoning Quality Gate Pipeline 提案](https://github.com/anthropics/skills/issues/1385)：社区希望将任务前校准、对抗式审查和交付前验证组合成统一质量门禁。

**趋势判断**：未来需求不只是“做 Skill”，而是让 Skill 能在团队内安全分发、审计和治理。

### 2.2 Agent 记忆与上下文效率

- [compact-memory：压缩型符号记忆](https://github.com/anthropics/skills/issues/1329)：用结构化符号表示替代冗长散文，降低长期 Agent 的上下文消耗。
- [`claude-api` 单次注入约 156k tokens](https://github.com/anthropics/skills/issues/1487)：大型 Skill 的按需加载、渐进式披露和上下文预算成为现实痛点。

**趋势判断**：社区正在关注 Agent 的长期状态表达、记忆压缩，以及如何避免 Skill 本身成为上下文负担。

### 2.3 触发准确率与评测可信度

- [`run_eval.py` 触发率为 0%](https://github.com/anthropics/skills/issues/556)：并行 worker 可能串扰 Skill UUID，导致应触发的查询也被计为未触发。
- [`skill-creator` 应升级为最佳实践](https://github.com/anthropics/skills/issues/202)：用户认为当前内容偏向开发者教材，而不是可直接指导 Claude 执行的精简操作规范。
- [`theme-factory` 描述缺少使用时机](https://github.com/anthropics/skills/issues/2064)：描述只说明“能做什么”，没有充分说明“何时应使用”，会直接影响路由和触发。
- [XLSX 外部链接误报修复](https://github.com/anthropics/skills/pull/2019)：识别工作表级定义名称和别名，修复漏报风险。

**趋势判断**：描述工程、触发评测、并发隔离和结果校准，正在成为 Skill 研发的核心工程能力。

### 2.4 文档与办公自动化

- [DOCX 合并 Run 后丢失命名空间](https://github.com/anthropics/skills/issues/2018)：输出可能成为无效 XML，属于文档自动化的可靠性问题。
- [Slack GIF 渐变背景颜色计算错误](https://github.com/anthropics/skills/issues/1868)：反映视觉生成 Skill 仍缺少精确、可验证的参数语义。
- [文档排版质量控制 Skill 提案](https://github.com/anthropics/skills/pull/514)：关注孤行寡行、标题孤行和编号错位等 AI 文档常见问题。
- [文档 Skills 快照与同步关系说明](https://github.com/anthropics/skills/pull/2108)：反映用户不清楚仓库版本、插件版本与本地同步副本之间的关系。

**趋势判断**：用户已经不满足于“生成一个文件”，而是要求输出在格式、语义、排版和可打开性上都经过验证。

### 2.5 垂直领域与专业执行能力

- [智能合约静态审计与存证 Skill](https://github.com/anthropics/skills/pull/1771)：面向 Solidity/Rust 审计，并将审计证明锚定到 TON。
- [SCNet HPC 集群操作 Skill](https://github.com/anthropics/skills/pull/1615)：覆盖 SSH、Slurm、模块、加速器和作业提交。
- [Notion 规格到实现](https://github.com/anthropics/skills/pull/1245)：面向产品经理和工程团队的规格拆解与执行追踪。

**趋势判断**：社区正从通用生产力扩展到研发基础设施、合规审计、HPC 和规格驱动交付等高专业度场景。

---

## 3. 高潜力待合并 Skills

这里的“活跃”按创建时间、近期更新、Issue 关联、问题覆盖面及实际落地价值判断；这些 PR 当前均为 **Open**。

| PR | 潜力判断 | 潜在价值 / 合并看点 | 状态 |
|---|---|---|---|
| [mcp-builder MCP 2.x 兼容修复](https://github.com/anthropics/skills/pull/1742) | 高 | 属于依赖升级型修复，直接影响现有 MCP Skill 与新版 SDK 的连接能力；合并门槛主要是回归测试。 | Open |
| [skill-creator 触发评估与 Windows 修复](https://github.com/anthropics/skills/pull/1298) | 高 | 同时解决并发串扰、跨平台兼容和异常分类，可显著提高 Skill 描述优化的可信度。 | Open |
| [webapp-testing 移除 `shell=True`](https://github.com/anthropics/skills/pull/1980) | 高 | 明确修复命令注入，安全收益高，适合快速进入主线；需要验证 `cd && command` 等旧行为兼容性。 | Open |
| [docx 超时与修订标记校验](https://github.com/anthropics/skills/pull/1792) | 高 | 将“执行结束”升级为“验证输出”，直接解决假成功问题。 | Open |
| [xlsx 外部链接与作用域定义名称修复](https://github.com/anthropics/skills/pull/2019) | 高 | 修复审计脚本漏报，覆盖直接引用、作用域名称和别名等复杂公式，风险控制价值明显。 | Open |
| [Notion 规格到实现](https://github.com/anthropics/skills/pull/1245) | 中高 | 把规格、任务、验收标准和进度管理串成完整闭环，具备较强企业工作流价值；需进一步明确 Notion API 权限与失败恢复。 | Open |
| [md2video-audio](https://github.com/anthropics/skills/pull/1703) | 中高 | 多模态内容生产需求明确，但需验证字体、音频依赖、跨平台复现性和生成成本。 | Open |
| [文档排版质量控制](https://github.com/anthropics/skills/pull/514) | 中高 | 面向几乎所有 AI 文档生成场景，需求普遍；合并前需明确检测引擎与可验证指标。 | Open |
| [SCNet HPC](https://github.com/anthropins/skills/pull/1615) | 中 | 专业场景价值明确，适合作为领域 Skill 落地；主要门槛是环境配置、集群差异和凭证安全。 | Open |

### 合并优先级建议

1. **第一梯队：mcp-builder、skill-creator、webapp-testing**  
   兼具兼容性、评测可信度和安全价值，直接影响整个 Skills 生态。

2. **第二梯队：docx、xlsx、PPTX 相关修复**  
   单点范围较小，但能快速减少生成文档中的假成功和损坏文件。

3. **第三梯队：Notion、md2video-audio、HPC、文档排版**  
   场景价值较高，但需要更多依赖、权限和跨环境验证。

---

## 4. Skills 生态洞察

**社区最集中的诉求，是让 Skills 从“能生成结果的提示词集合”升级为“可触发、可验证、可治理、可在团队规模化复用的可靠执行单元”。**

具体表现为四条主线：

1. **可靠触发**：改进描述、隔离评测并发并校准触发率；
2. **真实交付**：对 DOCX、XLSX、PPTX、网页和多媒体输出进行自动验证；
3. **安全治理**：隔离官方与社区身份、限制命令执行、审计供应链；
4. **组织协作**：提供企业共享、权限控制、审计追踪和上下文友好的记忆机制。

**一句话结论：**当前社区已从“Skill 数量与能力覆盖”的竞争，转向“质量、验证、安全和规模化运营”的竞争。

---

# Claude Code 社区动态日报

**日期：2026-11-21**  
**数据范围：GitHub `anthropics/claude-code` 过去 24 小时更新**

---

## 1. 今日速览

- Claude Code 发布 **v2.1.330**：新增由 Anthropic Enterprise Admin Console 管理的组织登录支持，并加入可通过 MCP 指标触发的内置图表绘制工具 **easel**。
- 社区讨论主要围绕**多智能体协作、会话连续性、上下文压缩、认证稳定性与成本可视化**展开；其中跨机器 Agent-to-Agent 协议提案获得最多关注。
- macOS Desktop 的自动更新与 OAuth 刷新问题影响突出，部分高热度 Issue 指向用户会话被强制中断或退出。

---

## 2. 版本发布

### [v2.1.330](https://github.com/anthropics/claude-code/releases/tag/v2.1.330)

主要变化：

- **企业组织登录**
  - 支持登录由 Anthropic Enterprise Admin Console 管理的组织。
  - 执行 `claude auth login` 后，Claude Code 会自动应用组织策略。
  - 自动使用组织指定的云提供商或网关配置。

- **内置图表工具 easel**
  - 新增名为 **easel** 的内置 mod。
  - 支持在用户要求时绘制图表。
  - 可在出现 MCP 指标时自动提供可视化结果。

> Release 原始说明在提供的数据中被截断，因此不排除还有其他变更。

---

## 3. 社区热点 Issues

### 1. [跨机器多智能体协作与 Agent-to-Agent 协议](https://github.com/anthropics/claude-code/issues/28300)

- **类型**：功能增强 / Agents
- **热度**：60 条评论，为本日讨论最多的 Issue。
- **重要性**：目标是让不同机器上的 Claude Code 智能体相互发现、传递任务并协作，是从单会话代理迈向分布式智能体基础设施的关键一步。
- **社区反应**：讨论热度最高，反映跨设备、跨项目、跨运行时 Agent 协同是社区长期关注的缺口。

### 2. [Desktop 自动更新会中断所有 Remote Control 会话](https://github.com/anthropics/claude-code/issues/95364)

- **类型**：Bug / macOS Desktop / Remote Control
- **热度**：23 条评论、24 个赞。
- **重要性**：应用在后台执行“静默更新”时会退出并重启，直接导致远程控制会话断开。
- **社区反应**：获赞数较高。问题直接影响无人值守和长任务场景，用户期待更新机制至少能够保留或平滑恢复连接。

### 3. [`modelPicker` 会跳过 `opusplan` 模型项](https://github.com/anthropics/claude-code/issues/89690)

- **类型**：Bug / 模型选择器
- **热度**：23 条评论。
- **重要性**：Claude Code 将 `opusplan` 视为已被内置模型列表覆盖，导致 `/model` 选择器中不显示对应的 Opus Plan Mode。
- **社区反应**：关注度较高，反映模型路由、套餐模式和模型选择器的一致性是高频使用路径中的重要体验问题。

### 4. [内置 `claude usage` 用量分析命令](https://github.com/anthropics/claude-code/issues/33978)

- **类型**：功能增强 / CLI / 成本
- **热度**：22 条评论、12 个赞。
- **重要性**：整合了 10 余个相关需求，为 Token、费用、限额和缓存使用情况提供统一 CLI 入口。
- **社区反应**：获赞较高，表明开发者希望减少对外部统计脚本和多个分散命令的依赖。

### 5. [Desktop OAuth 刷新失败后强制退出活跃会话](https://github.com/anthropics/claude-code/issues/93014)

- **类型**：Bug / macOS / OAuth / Desktop
- **热度**：16 条评论、8 个赞。
- **重要性**：刷新令牌出现 `invalid_grant` 后，重新授权仍被拒绝，最终导致活跃会话被强制登出。
- **社区反应**：用户高度关注会话连续性。对长任务和 Remote Control 而言，认证状态异常会放大中断风险。

### 6. [Classic renderer 在窗口高度变化时丢失或覆盖输出](https://github.com/anthropics/claude-code/issues/98019)

- **类型**：Bug / macOS / TUI
- **热度**：12 条评论、11 个赞。
- **重要性**：当窗口上方的内容改变高度时，终端渲染器可能错误处理可见区域；verbose 模式会显著提高触发频率。
- **社区反应**：赞数接近评论数，属于高认可度问题。直接影响日志诊断、长时间 CLI 会话和输出可读性。

### 7. [Windows Hook 环境变量无限增长并导致 Bash 工具失效](https://github.com/anthropics/claude-code/issues/78146)

- **类型**：Bug / Windows / VS Code / Hooks
- **热度**：7 条评论、2 个赞。
- **重要性**：`CLAUDE_ENV_FILE` 在每次 compact 后持续累积，并被无校验地注入 Bash 命令，最终导致命令解析失败并返回 exit 127。
- **社区反应**：Windows、VS Code 与 Hooks 场景重叠，影响范围较广；长会话中会逐步恶化。

### 8. [Desktop 暴露磁盘会话记录以实现跨机器连续性](https://github.com/anthropics/claude-code/issues/81835)

- **类型**：功能增强 / Desktop
- **热度**：7 条评论。
- **重要性**：用户希望在 Desktop 中访问本地 transcript，使会话能够跨机器延续。
- **社区反应**：与会话恢复、后台任务和 Remote Control 需求形成交叉，说明“会话可迁移”正成为重要平台能力。

### 9. [自动压缩依据上一轮 Token 数，可能无法处理重新注入的指令文件](https://github.com/anthropics/claude-code/issues/92434)

- **类型**：Bug / Core / 上下文管理
- **热度**：7 条评论。
- **重要性**：若自动压缩基于上一轮统计，而本轮又注入额外 instruction 文件，真实上下文可能先溢出而不会触发压缩。
- **社区反应**：关注度集中于高级用户。该问题与 CLAUDE.md、Hooks、Skills 和长会话稳定性直接相关。

### 10. [Web 会话无法跨 Session 保留项目决策](https://github.com/anthropics/claude-code/issues/102045)

- **类型**：Bug / Memory / Web
- **热度**：6 条评论。
- **重要性**：即使保持同一 session link，Claude Code Web 仍无法保留项目中的既有决策，用户需要反复解释背景。
- **社区反应**：反映“会话链接相同是否应等同于持久上下文”存在认知和产品语义差异，也是企业长期协作场景的重要痛点。

---

## 4. 重要 PR 进展

> 本日仅有 **3 个 PR** 更新，低于日报要求的 10 个；以下按实际数据完整列出，未以旧 PR 补足。

### 1. [feat: open source claude code](https://github.com/anthropics/claude-code/pull/41447)

- **状态**：开放
- **方向**：开源 Claude Code。
- **关联范围**：关闭多个既有需求与问题，包括 #59、#456、#2846、#22002、#41434。
- **意义**：直接关联源码可审计性、扩展开发、企业私有化以及社区二次开发能力，是本日影响范围最大的 PR 议题。

### 2. [Don't run @claude mentions on pull requests from forks](https://github.com/anthropics/claude-code/pull/111198)

- **状态**：已关闭
- **方向**：阻止 Claude 自动处理来自 Fork 的 Pull Request 中的 `@claude` 提及。
- **意义**：可降低外部贡献者借自动触发机制消耗额度、干扰维护流程或形成提示注入风险的可能性，体现 GitHub 集成在信任边界上的收敛。

### 3. [Create SECURITY.md](https://github.com/anthropics/claude-code/pull/1)

- **状态**：已关闭
- **方向**：增加安全策略文件。
- **意义**：为漏洞报告、安全边界和披露流程提供基础规范，也是开源化和企业采用时的重要治理基础设施。

---

## 5. 功能需求趋势

### 多智能体与分布式协作

- [跨机器 Agent-to-Agent 协议](https://github.com/anthropics/claude-code/issues/28300)是本日最突出需求。
- 相关生态还关注子 Agent 的模型和 effort 参数文档、委托任务的成本，以及重试等待期间的子 Agent 状态反馈。
- 社区期待 Claude Code 从“单个主 Agent 调用多个子 Agent”演进为可跨进程、跨机器协作的 Agent 平台。

### 会话持久化、恢复与跨设备连续性

- [Desktop 读取磁盘 transcript](https://github.com/anthropics/claude-code/issues/81835)
- [Web 保留项目决策](https://github.com/anthropics/claude-code/issues/102045)
- [`--resume` 与 `--continue` 对后台会话处理不一致](https://github.com/anthropics/claude-code/issues/85657)
- [运行中排队的消息在退出并恢复后丢失](https://github.com/anthropics/claude-code/issues/100003)
- [用量限制重试期间恢复会话会生成虚假的“No response requested”](https://github.com/anthropics/claude-code/issues/100004)

这一组需求表明，开发者关注的不只是“能否保存聊天记录”，而是任务、消息、状态、模型路由和项目知识能否可靠地跨 Session 与跨设备延续。

### 成本与用量可观测性

- [`claude usage` 统一统计命令](https://github.com/anthropics/claude-code/issues/33978)
- [委托子 Agent 后 Token 消耗异常](https://github.com/anthropics/claude-code/issues/94310)
- [Auto Compact 与实际上下文窗口不一致](https://github.com/anthropics/claude-code/issues/93901)

社区希望获得按 Session、模型、缓存、子 Agent 和压缩事件拆分的成本视图，避免“高消耗但原因不透明”。

### 认证、企业策略与凭据安全

- v2.1.330 已加入 Enterprise Admin Console 组织登录和组织网关应用。
- [`CLAUDE_SECURESTORAGE_CONFIG_DIR` 文档缺失](https://github.com/anthropics/claude-code/issues/79223)仍是生态工具的重要集成问题。
- [Secrets locker / credential broker](https://github.com/anthropics/claude-code/issues/88165)与[允许 Claude 代填密码](https://github.com/anthropics/claude-code/issues/109110)反映了安全性和可用性的冲突：用户希望自动化登录，又不希望模型直接看到密钥。

### 上下文管理、Hooks 与 Skills

- [重新注入 instruction 文件导致自动压缩失效](https://github.com/anthropics/claude-code/issues/92434)
- [Windows Hook 环境变量污染 Bash 命令](https://github.com/anthropics/claude-code/issues/78146)
- [不同账户共享 Skills 同步桶并污染回收目录](https://github.com/anthropics/claude-code/issues/98526)
- [自定义 Slash Command 展开为内置命令](https://github.com/anthropics/claude-code/issues/91146)

社区正在推动 Claude Code 的扩展机制从“简单叠加文件与环境变量”转向具备作用域、隔离、生命周期和可预测性管理的平台能力。

### IDE、桌面端与远程控制

- [VS Code 上下文环忽略 `autoCompactWindow`](https://github.com/anthropics/claude-code/issues/93901)
- [Desktop Activity 面板无法在分屏时保持固定](https://github.com/anthropics/claude-code/issues/111239)
- [macOS 语音按住说话提前中断](https://github.com/anthropics/claude-code/issues/99548)
- [Android Remote Control 缺少常驻上下文使用率](https://github.com/anthropics/claude-code/issues/99564)

这些反馈表明，IDE 和 Desktop 已从 CLI 的附属界面转向重要工作入口，稳定性与状态可见性成为核心体验指标。

---

## 6. 开发者关注点

1. **长任务不能被意外中断**
   - 自动更新重启、OAuth 强制登出和 Remote Control 断连都可能破坏正在执行的代理任务。
   - 用户期望更新与认证恢复具备会话保护、重连和状态恢复机制。

2. **上下文窗口必须“所见即所得”**
   - 自动压缩、上下文环、模型窗口与注入文件之间存在口径不一致。
   - 开发者需要准确掌握剩余上下文，并确保压缩阈值按实际 Token 使用量触发。

3. **成本与 Token 消耗必须可解释**
   - 子 Agent、缓存、重试、compact 和多轮重复修复都可能造成费用快速增长。
   - 统一 `claude usage` 及细粒度成本归因是高频诉求。

4. **Session 恢复必须保持任务语义**
   - 仅恢复消息列表并不足够；还需要保留排队消息、重试状态、Agent 状态、模型选择和项目决策。
   - 当前 `--resume`、`--continue`、Web 链接与 Desktop transcript 之间存在明显割裂。

5. **扩展环境需要真正的隔离**
   - Hooks、Skills、指令文件和凭据存储可能因累积、重复注入或跨账户共享而污染运行环境。
   - 社区期待作用域控制、清理机制、去重和清晰的文档契约。

6. **多 Agent 需要协议化，而不只是并行调用**
   - 社区关注跨机器发现、任务委派、结果回传、失败恢复、权限边界和统一状态。
   - 子 Agent 的模型、effort、费用和重试状态也必须对主会话透明。

7. **安全自动化仍需“凭据不可见”**
   - 浏览器自动填写与密码管理器集成有现实需求，但直接让模型接触密码并不理想。
   - 凭据代理、系统钥匙串和显式授权流程更符合社区诉求。

8. **桌面与 IDE 回归问题开始影响生产使用**
   - TUI 渲染、Desktop 分屏、VS Code 上下文显示和 Windows Bash/Hook 故障说明，Claude Code 已进入复杂工具链阶段。
   - 开发者需要更严格的跨平台回归测试，以及版本升级前的变更说明和兼容性提示。

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex 社区动态日报

**日期：2026-11-21**  
**数据来源：GitHub `openai/codex`（过去 24 小时）**

## 1. 今日速览

- 今日社区焦点集中在桌面端的稳定性与权限模型：Windows Computer Use 截屏状态未释放、macOS 壁纸着色回退导致启动崩溃，以及“Full access”权限显示与实际行为不一致等问题持续获得高热度讨论。
- 工程侧快速推进 MCP 启动可观测性、推理摘要配置、网络搜索模式、OAuth 与 App Server 能力完善；过去 24 小时有 50 个 Issue 和 50 个 PR 获得更新，发布节奏明显加快。
- 今日发布了 3 个 Rust 预览版本（`0.173.0-alpha.2` 至 `alpha.4`），但公开 Release 说明较简略，未披露具体变更内容。

---

## 2. 版本发布

过去 24 小时发布以下 Rust Alpha 版本：

- [`rust-v0.173.0-alpha.2`](https://github.com/openai/codex/releases/tag/rust-v0.173.0-alpha.2) — `0.173.0-alpha.2`
- [`rust-v0.173.0-alpha.3`](https://github.com/openai/codex/releases/tag/rust-v0.173.0-alpha.3) — `0.173.0-alpha.3`
- [`rust-v0.173.0-alpha.4`](https://github.com/openai/codex/releases/tag/rust-v0.173.0-alpha.4) — `0.173.0-alpha.4`

> 公开 Release 备注仅包含版本号，未提供详细变更日志；具体功能需结合对应 PR 与后续正式版发布说明判断。

---

## 3. 社区热点 Issues

### 1. Windows Computer Use 截图结束后未释放捕获权限
- **Issue：** [#57101](https://github.com/openai/codex/issues/57101)
- Windows 截图型操作完成后，屏幕捕获访问及金色/黄色显示边框仍然保持。
- 这是当日评论最多的 Issue（76 条评论、13 个赞），直接影响 Computer Use 的连续操作体验，也可能造成用户对隐私状态的误解。
- 报告基于 `OpenAI.Codex 26.1021.3705.0` 与 unified-computer-use 插件，问题范围已获得社区高度关注。

### 2. VS Code 聊天希望按当前工作区或项目隔离
- **Issue：** [#25319](https://github.com/openai/codex/issues/25319)
- 用户希望 Codex VS Code 扩展中的聊天和线程历史按 workspace/project 隔离，避免不同项目的上下文混在一起。
- 该功能需求获得 140 个赞和 64 条评论，是当日社区支持度最高的功能请求之一。
- 反映出多项目开发中会话组织、项目级上下文与隐私边界的重要性。

### 3. macOS Codex App 在壁纸着色回退时启动崩溃
- **Issue：** [#62650](https://github.com/openai/codex/issues/62650)
- macOS 构建 `26.1117.31558` 在壁纸着色 fallback 路径中退出，属于启动阻断型回归。
- 用户可能在普通 macOS 壁纸配置和 Apple 官方壁纸下触发，临时方案往往要求放弃壁纸、动画或多显示器设置。
- 54 条评论和 17 个赞显示该问题影响面较大。

### 4. macOS 新建聊天后权限控件消失，实际仍受限
- **Issue：** [#58677](https://github.com/openai/codex/issues/58677)
- 新建聊天时显示“Full access”，但进入已有会话并执行命令后，权限控件消失，底层会话仍处于受限状态。
- 问题涉及权限 UI、状态持久化和会话恢复的一致性，可能导致用户误判实际执行范围。
- 26 条评论、4 个赞，表明其不仅是显示问题，也存在权限语义风险。

### 5. macOS 锁定“Use”界面无法退出，需强制重启
- **Issue：** [#58565](https://github.com/openai/codex/issues/58565)
- 无人值守任务结束后，Codex 显示“ChatGPT is Using Your Mac”锁定界面，手动解锁系统后仍无法退出。
- 用户被强制要求重启，属于 Computer Use 生命周期的严重可用性问题。
- 虽只有 7 条评论，但故障对无人值守场景影响严重。

### 6. Windows “Full access”被错误降级为 workspace-write
- **Issue：** [#56663](https://github.com/openai/codex/issues/56663)
- Windows Desktop 选择“Full access”后会发送本地未定义的 `permission_profile: "managed"`，随后静默回退到 `workspace-write`。
- 这是权限请求与执行行为之间的关键偏差，可能造成自动化任务无法获得预期能力。
- 涉及 Windows Desktop、CLI、App Server 和 sandbox 配置链路，具备较高工程价值。

### 7. 桌面端恢复聊天时加载了错误的工作区和 `AGENTS.md`
- **Issue：** [#24855](https://github.com/openai/codex/issues/24855)
- 已有项目会话被恢复后，`cwd` 和 `AGENTS.md` 可能来自无关的个人目录。
- 这不只是会话路由问题，还涉及项目规则注入和提示词污染，可能导致模型在错误上下文中执行操作。
- 6 条评论、0 个赞，但问题的潜在风险高于表面热度。

### 8. Windows 定时任务唤醒后未执行工作
- **Issue：** [#44963](https://github.com/openai/codex/issues/44963)
- 定时任务会唤醒、确认或返回状态，但随后直接停止，未完成分配的工作。
- 问题影响自动化的可靠性，也可能造成用户误判任务已经成功执行。
- 它将 App 的定时任务能力与 Agent 执行生命周期直接联系起来，是自动化场景的重要阻塞项。

### 9. macOS 27 下 Computer Use 服务周期性唤醒锁屏
- **Issue：** [#47993](https://github.com/openai/codex/issues/47993)
- `SkyComputerUseService` 约每 32 秒使锁屏显示器短暂熄灭再点亮。
- 这会干扰 macOS 电源管理、锁屏体验和后台运行稳定性，并可能增加不必要的能耗。
- 4 条评论，问题规模尚不明确，但具有明显的系统级影响。

### 10. PR 状态栏无法显示已打开的 PR
- **Issue：** [#23473](https://github.com/openai/codex/issues/23473)
- `gh pr view` 可以正常访问私有仓库 PR，但 Codex 状态栏未显示对应开放 PR。
- 问题可能来自 GitHub CLI 输出解析、仓库识别或状态栏配置。
- 6 个赞表明该问题直接影响开发者对合并状态的实时感知。

---

## 4. 重要 PR 进展

> 下列 PR 均已关闭，且主要由自动化分支提交；其状态可能代表相关工作已合入、关闭或以其他形式完成。

### 1. 改善 `codex exec` 中 HTTP MCP 启动错误报告
- **PR：** [#62906](https://github.com/openai/codex/pull/62906)
- 对低层传输错误进行更清晰的提示，同时避免在 stderr 中暴露带凭据的 endpoint URL。
- 对每个 Streamable HTTP MCP server 只警告一次，降低噪声并改善排障体验。

### 2. 为 `/config` 增加推理摘要选择器
- **PR：** [#62905](https://github.com/openai/codex/pull/62905)
- 用户可在 Auto、Concise、Detailed、None 之间选择推理摘要级别。
- 配置通过连接的 App Server 保存，并展示最终生效值及可能的启动参数覆盖情况。

### 3. TUI 默认使用自动推理摘要
- **PR：** [#62904](https://github.com/openai/codex/pull/62904)
- 修复 TUI 未明确设置摘要选项时，请求可能被服务端按 `concise` 处理的问题。
- 同时统一嵌入式 WebSocket 预热与首个对话回合的摘要行为。

### 4. 默认启用并发推理摘要
- **PR：** [#62903](https://github.com/openai/codex/pull/62903)
- 将 `concurrent_reasoning_summaries` 标记为稳定能力并默认开启。
- OpenAI 推理摘要请求默认使用 `stream_options.reasoning_summary_delivery = sequential_cutoff`。

### 5. 在 Trace 中区分对话项 ID 与 Responses ID
- **PR：** [#62898](https://github.com/openai/codex/pull/62898)
- 为两类 ID 建立更明确的类型边界，防止 trace reducer 将对话节点序号与 Responses item ID 混用。
- 有助于提升回放、日志分析与问题定位的准确性。

### 6. 允许模型目录设置初始协作指导
- **PR：** [#62896](https://github.com/openai/codex/pull/62896)
- 新增可选的 `collaboration_modes.initial` 指导字段。
- 模型目录可定义第一次 Plan 回合之前的 Default 模式行为，使多 Agent 协作策略更完整。

### 7. 增加可选的 indexed Web Search 默认模式
- **PR：** [#62894](https://github.com/openai/codex/pull/62894)
- 新增 `features.web_search_indexed_default`，在 provider 和托管策略允许时，可将受限回合的默认搜索从 `cached` 切换为 `indexed`。
- 完整权限回合仍优先使用 `live`，体现权限与搜索新鲜度之间的分层设计。

### 8. 扩展 HTTP MCP 发现机制的 legacy fallback
- **PR：** [#62893](https://github.com/openai/codex/pull/62893)
- 针对旧 MCP server 在 `server/discover` 前要求 session ID，或拒绝指定协议版本的情况增加兼容路径。
- 针对空 HTTP 400 响应或缺少 JSON-RPC request ID 的情况，避免发现流程直接失效。

### 9. 显式跟踪 Web Search 模式并向 SDK 暴露 `indexed`
- **PR：** [#62884](https://github.com/openai/codex/pull/62884)
- 记录显式 `web_search` 配置是否与配置要求应用后的最终模式一致。
- TypeScript SDK 现可接受 `indexed` 模式，使开发者能明确选择搜索策略。

### 10. 在云端目录刷新期间预热 MCP Server
- **PR：** [#62876](https://github.com/openai/codex/pull/62876)
- 将 MCP 预热与云端 skill/catalog 刷新流程结合，减少首个回合启动 MCP 时的等待。
- 即使刷新在等待 skill 时被取消，也会尽量提前安排服务器预热，缩短首次调用延迟。

---

## 5. 功能需求趋势

### IDE 与工作区集成
- [#25319](https://github.com/openai/codex/issues/25319) 的项目级会话隔离需求获得最高赞。
- 开发者希望 Codex 在 VS Code 中自动识别当前仓库，并让聊天历史、项目配置、`AGENTS.md` 与工作区保持一致。
- 关联问题 [#24855](https://github.com/openai/codex/issues/24855) 表明，项目上下文串线已是实质性体验风险。

### 权限模型与安全边界
- [#58677](https://github.com/openai/codex/issues/58677) 和 [#56663](https://github.com/openai/codex/issues/56663) 共同指向同一核心需求：**UI 显示、请求参数、服务端策略和实际执行权限必须一致**。
- 社区不仅需要“Full access”，还需要明确知道当前会话真实采用的权限 profile，以及降级、托管策略和 sandbox 限制的原因。

### Computer Use 生命周期与桌面稳定性
- Windows 截屏状态未释放、macOS 锁定界面无法退出、macOS 27 周期性唤醒锁屏，集中暴露了 Computer Use 的会话结束、资源回收和后台唤醒问题。
- 对无人值守和长时间自动化而言，这些问题的优先级高于一般 UI 瑕疵。

### MCP 可靠性与可观测性
- [#62906](https://github.com/openai/codex/pull/62906)、[#62893](https://github.com/openai/codex/pull/62893) 和 [#62876](https://github.com/openai/codex/pull/62876) 表明 MCP 已成为重点基础设施。
- 开发者关注的不只是“能否连接”，还包括启动失败提示、凭据安全、旧服务兼容以及首回合延迟。

### 推理摘要与模型可配置性
- [#62905](https://github.com/openai/codex/pull/62905)、[#62904](https://github.com/openai/codex/pull/62904)、[#62903](https://github.com/openai/codex/pull/62903) 连续完善推理摘要配置。
- 用户希望控制成本、信息密度和输出风格，同时确保 CLI、TUI 与 App Server 的实际行为一致。

### Web Search 策略
- [#62894](https://github.com/openai/codex/pull/62894) 与 [#62884](https://github.com/openai/codex/pull/62884) 显示 indexed、cached、live 三类搜索模式正在成为显式配置能力。
- 开发者需要在搜索新鲜度、权限限制、延迟和合规之间进行细粒度选择。

### 自动化任务可靠性
- [#44963](https://github.com/openai/codex/issues/44963) 表明定时任务不能只完成“唤醒与应答”，还必须确保实际工作被执行、失败可追踪且状态准确。

---

## 6. 开发者关注点

1. **权限必须可信且可解释**  
   用户最担心的是界面显示一种权限、实际执行却是另一种权限。权限控件不应消失，策略降级也不应静默发生；最好能显示当前 profile、最终模式和具体限制原因。

2. **项目上下文不可串线**  
   会话恢复后必须绑定正确的 `cwd`、仓库和 `AGENTS.md`。多项目并行时，上下文路由错误可能直接转化为错误代码修改或命令执行。

3. **Computer Use 必须可靠释放系统资源**  
   截图权限、显示边框、锁定界面和后台唤醒都需要跟随会话状态正确清理，尤其要覆盖异常退出、长时间运行和锁屏场景。

4. **MCP 启动需要更快、更清晰、更安全**  
   社区同时要求低首回合延迟、准确错误提示、旧协议兼容和敏感 URL 脱敏。仅提供笼统的 MCP 启动失败信息不足以支持生产排障。

5. **TUI 与终端兼容性仍是高频痛点**  
   [#22761](https://github.com/openai/codex/issues/22761)、[#28167](https://github.com/openai/codex/pull/28167)、[#30309](https://github.com/openai/codex/pull/30309) 和 [#62773](https://github.com/openai/codex/pull/62773) 涉及 tmux、macOS 快捷键重映射、Windows 历史翻页、粘贴与终端转义序列。开发者希望 Codex 在非默认终端配置下保持稳定。

6. **会话、命令与状态展示需要一致**  
   PR 状态栏遗漏、恢复线程加载错误配置、旧上下文残留等问题说明，开发者期待 CLI、Desktop、App Server 对同一会话给出一致且可追踪的状态。

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI 社区动态日报

**日期：2026-11-21**  
**项目：** [`google-gemini/gemini-cli`](https://github.com/google-gemini/gemini-cli)

## 1. 今日速览

今日社区讨论高度集中在 **Agent/Subagent 的可靠性与可观测性**：子代理超限却报告成功、通用代理卡死、配置未生效以及浏览器代理异常成为核心议题。与此同时，安全与稳定性修复持续推进，涵盖危险命令识别、密钥误附加、长请求超时重放、IME 输入丢字及沙箱兼容性等问题。

过去 24 小时共有 **28 个 PR 更新**，其中大量修复已进入关闭或等待合并状态；最新 Nightly 版本也已发布。

---

## 2. 版本发布

### `v0.71.0-nightly.20261121.geecccfcd5`

本批次公开信息显示的主要更新包括：

- **Windows 路径处理**：支持通过 `~` 和反斜杠展开用户主目录相对路径，减少 Windows 环境下路径解析异常。[PR #30376](https://github.com/google-gemini/gemini-cli/pull/30376)
- **会话恢复优化**：恢复“最近活跃会话”，而不再仅按最近启动时间选择会话，改善多会话并行使用体验。

> Release 页面：  
> https://github.com/google-gemini/gemini-cli/releases/tag/v0.71.0-nightly.20261121.geecccfcd5

---

## 3. 社区热点 Issues

### 1. Subagent 达到 `MAX_TURNS` 后仍被报告为成功

[#22323](https://github.com/google-gemini/gemini-cli/issues/22323)

子代理已经触发最大轮次限制、没有完成分析，但状态却显示 `success`，终止原因甚至为 `GOAL`。这会让上层 Agent 或用户误判任务完成，属于直接影响工作流正确性的 P1 缺陷。该 Issue 有 **14 条评论**，是今日讨论最集中的问题。

### 2. Generalist Agent 在委派任务时可能无限挂起

[#21409](https://github.com/google-gemini/gemini-cli/issues/21409)

普通任务一旦转交给 generalist agent，CLI 可能长时间无响应；创建目录等简单操作也受影响。用户只能通过明确要求模型“不使用子代理”规避。该问题获得 **8 个赞和 8 条评论**，反映代理委派机制在真实工作流中的可用性风险。

### 3. 建议引入零依赖 OS 沙箱与执行后意图路由

[#19873](https://github.com/google-gemini/gemini-cli/issues/19873)

提案建议保留模型擅长的 Bash、POSIX 工具链能力，同时通过轻量 OS 沙箱控制执行边界，并在命令执行后根据意图决定下一步操作。其价值在于兼顾代码探索效率、权限安全和自动化体验；已有 **9 条评论**。

### 4. Browser Agent 忽略 `settings.json` 中的配置覆盖

[#22267](https://github.com/google-gemini/gemini-cli/issues/22267)

Browser Agent 被报告不会正确应用全局或项目级 `settings.json` 覆盖项，例如 `maxTurns`。AgentRegistry 虽能读取配置，但执行阶段未完整继承，造成行为不可预测。该问题有 **5 条评论**，体现“配置是否真正生效”是用户对 Agent 系统的重要期待。

### 5. 浏览器子代理在 Wayland 环境下失败

[#21983](https://github.com/google-gemini/gemini-cli/issues/21983)

Browser subagent 在 Wayland 环境中可能以 `GOAL` 终止，但实际浏览器任务并未成功完成。Wayland 对浏览器自动化沙箱、显示服务和进程权限的要求与 X11 不同，是 Linux 桌面环境下较突出的兼容性缺陷。

### 6. 工具数量过多时触发 API 400 错误

[#24246](https://github.com/google-gemini/gemini-cli/issues/24246)

当环境中启用超过约 400 个工具时，Gemini CLI 会收到 HTTP 400。用户希望系统能根据当前任务智能缩小工具范围，而不是将所有可用工具一次性发送给模型。该问题还反映出大型项目、插件和扩展生态中的工具治理需求。

### 7. Subagent 对 skills 和子代理的使用不足

[#21968](https://github.com/google-gemini/gemini-cli/issues/21968)

部分用户认为 Gemini CLI 不会主动调用自定义 skills 或 subagents，只有明确提示时才会使用。这反映出模型虽有相应能力，但缺少可靠的自动发现和任务路由机制。该问题获 **7 条评论**，与 Agent 编排策略直接相关。

### 8. AST 感知的文件读取、搜索与代码库映射评估

[#22745](https://github.com/google-gemini/gemini-cli/issues/22745)

社区正在评估 AST 感知工具能否提高代码阅读精度、减少无效轮次并控制 token 消耗。配套议题还覆盖 AST 搜索和代码库映射工具。相关讨论表明，**更精准的代码理解能力**正成为 Agent 质量优化的核心方向。

### 9. 模型会在随机位置创建临时脚本

[#23571](https://github.com/google-gemini/gemini-cli/issues/23571)

在限制模型直接编辑、鼓励使用 Shell 的情况下，模型可能生成多个临时编辑脚本并散落在不同目录，增加工作区清理和提交维护成本。用户期待更受控的临时文件策略，或由原生文件工具统一完成修改。

### 10. Agent 应阻止或劝阻破坏性 Git 与资源操作

[#22672](https://github.com/google-gemini/gemini-cli/issues/22672)

复杂 Git 操作中，Agent 偶尔可能执行 `git reset`、`--force` 等高风险命令；数据库维护场景也可能发生破坏性修改。该提案希望 Agent 识别破坏性意图并优先采用更安全的替代方案，兼顾自动化效率与用户资产安全。

### 其他值得关注

- [`/bug` 报告缺少 Subagent 上下文](https://github.com/google-gemini/gemini-cli/issues/21763)：主会话日志无法完整反映子代理内部状态，增加问题定位难度。
- [创建 Vite 应用时卡在交互提示](https://github.com/google-gemini/gemini-cli/issues/22465)：自动化任务中的交互阻塞值得关注。
- [Symlink 指向的 Agent 配置文件无法识别](https://github.com/google-gemini/gemini-cli/issues/20079)：影响用户通过软链接管理自定义 Agent。
- [Browser Agent 缺少会话接管与锁恢复](https://github.com/google-gemini/gemini-cli/issues/22232)：持久化浏览器模式在锁残留时采用 fail-fast，恢复能力不足。

---

## 4. 重要 PR 进展

### 1. 修复长模型轮次因 body timeout 被杀死并重放

[#30174](https://github.com/google-gemini/gemini-cli/pull/30174) · **已关闭**

当高思考模式下模型长时间生成大型 `write_file` 参数，Undici 的 body timeout 可能中断请求，随后 `GeminiChat` 最多重放多次，造成重复执行。该修复直接针对长请求稳定性与潜在副作用。

### 2. 修复 IME 提交与 Enter 同 tick 时丢失末尾韩文字符

[#30178](https://github.com/google-gemini/gemini-cli/pull/30178) · **已关闭**

修复输入提交时引用过期文本的问题，避免例如 `테스트` 被提交为 `테스`。这是影响国际化和非英文输入体验的基础性修复。

### 3. 无论参数位置如何，都能识别递归和强制删除命令

[#30171](https://github.com/google-gemini/gemini-cli/pull/30171) · **已关闭**

扩展 `rm` 危险命令识别范围，覆盖 `rm -r -f`、`rm -Rf`、`rm -vrf`、长选项以及删除目标后追加 `-rf` 等写法，防止 PolicyEngine 漏判。

### 4. 防止粘贴文本和模糊 `@` 匹配意外附加密钥

[#30169](https://github.com/google-gemini/gemini-cli/pull/30169) · **已关闭**

修复潜在的数据泄露路径：粘贴的终端记录可能让 CLI 将 SSH 私钥等文件自动附加到模型请求。新逻辑默认将粘贴内容中的 `@` 视为惰性文本，并收紧模糊匹配行为。

### 5. 本地 Subagent 的生成配置应对所有模型生效

[#30175](https://github.com/google-gemini/gemini-cli/pull/30175) · **已关闭**

此前只有 `auto` 模型会读取 `modelConfig.generateContentConfig`；修复后，`flash`、`pro` 等别名和具体模型名也会继承 temperature、topP、topK、thinkingConfig 等设置。

### 6. 避免本地 Subagent 在模型调用停滞时耗尽全部截止时间

[#30170](https://github.com/google-gemini/gemini-cli/pull/30170) · **已关闭**

为单轮模型响应增加可配置限制，防止一次卡死调用先等待完整 `maxTimeMinutes`，再额外等待恢复轮次，从而更快失败并输出诊断信息。

### 7. 保证会话记录中每个 tool-call ID 只有一个结果

[#30172](https://github.com/google-gemini/gemini-cli/pull/30172) · **已关闭**

修复保存会话和发送给模型的历史中，同一工具调用 ID 可能关联多个结果的问题，降低 `--resume` 后的上下文污染和异常行为。

### 8. 在 YOLO 模式下正确处理 taint 与构建文件检查

[#30268](https://github.com/google-gemini/gemini-cli/pull/30268) · **开放中**

计划让受信任的 `--approval-mode=yolo` / `-y` 模式贯穿 shell taint、构建文件风险检查及 PolicyEngine，避免无人值守运行被额外确认打断或被错误判定为策略违规。

### 9. Node 26 下正确应用自定义 fetch timeout

[#30281](https://github.com/google-gemini/gemini-cli/pull/30281) · **开放中**

升级 Undici 并兼容 Node 26 内置 fetch 使用的 dispatcher 符号，使配置的网络超时在 Node 26 和旧版本环境中均能生效。

### 10. 改善沙箱权限拒绝与不支持环境的识别

[#30277](https://github.com/google-gemini/gemini-cli/pull/30277) · **开放中**

针对容器化和受限执行环境，修复 POSIX 沙箱权限拒绝识别，并改进对不支持环境的错误处理。对 Docker、CI 和企业受限环境尤其重要。

### 其他值得跟踪

- [网络错误时补充 Gemini API 故障排查说明](https://github.com/google-gemini/gemini-cli/pull/30278)：区分传输层失败与 HTTP 503 等服务响应。
- [统一退出码和 fatal error 层级](https://github.com/google/gemini/gemini-cli/pull/30273)：提升 CLI 自动化集成和脚本处理的稳定性。
- [从 CLI 可执行文件路径识别本地 Git clone 安装](https://github.com/google-gemini/gemini-cli/pull/30267)：避免源码检出场景被误判为 npm 全局安装并触发意外自动更新。
- [保留历史记录中 function-call 名称的原始空白](https://github.com/google-gemini/gemini-cli/pull/30279)：避免因名称 trim 不一致触发 API `400 INVALID_ARGUMENT`。

---

## 5. 功能需求趋势

### Agent 可靠性与状态语义

社区最迫切的需求是让 Agent 的状态、终止原因和实际结果保持一致。尤其是 `MAX_TURNS`、模型停滞、交互阻塞等异常场景，需要准确区分成功、失败、超时与可恢复状态。[#22323](https://github.com/google-gemini/gemini-cli/issues/22323) [#21409](https://github.com/google-gemini/gemini-cli/issues/21409)

### Subagent 编排与 Skills 自动发现

用户希望 CLI 能主动识别何时应调用 skills、Browser Agent 或专业子代理，而不是依赖人工提示；同时需要支持配置发现、并行协作和共享内存。[#21968](https://github.com/google-gemini/gemini-cli/issues/21968) [#18285](https://github.com/google-gemini/gemini-cli/issues/18285) [#18287](https://github.com/google-gemini/gemini-cli/issues/18287)

### AST 感知代码理解

AST 工具被寄予厚望，可能用于精准读取方法边界、按语法结构搜索以及构建代码库映射，以减少 token 消耗并提高大型仓库导航效率。[#22745](https://github.com/google-gemini/gemini-cli/issues/22745) [#22746](https://github.com/google-gemini/gemini-cli/issues/22746) [#22747](https://github.com/google-gemini/gemini-cli/issues/22747)

### 上下文与 Token 效率

社区持续关注大型文件读取导致的上下文膨胀，希望引入“外科式读取”、持久化文件任务清单和更精细的工具选择机制。[#19561](https://github.com/google-gemini/gemini-cli/issues/19561) [#18836](https://github.com/google-gemini/gemini-cli/issues/18836) [#24246](https://github.com/google-gemini/gemini-cli/issues/24246)

### 沙箱、权限与安全治理

需求从单纯拦截危险命令，扩展到 OS 级沙箱、执行后意图路由、破坏性操作预防、秘密信息保护及可审计的权限策略。[#19873](https://github.com/google-gemini/gemini-cli/issues/19873) [#22672](https://github.com/google-gemini/gemini-cli/issues/22672)

### 可观测性与评测

Subagent 轨迹、错误上下文和 `/chat share` 分享能力仍不完整；内部项目评测也存在结果不稳定、难以追踪质量趋势的问题。[#22598](https://github.com/google-gemini/gemini-cli/issues/22598) [#21763](https://github.com/google-gemini/gemini-cli/issues/21763) [#23166](https://github.com/google-gemini/gemini-cli/issues/23166)

### 工作区级策略与持久化配置

社区希望把 Agent、策略和任务状态从全局目录扩展到工作区级别，并探索持久化、基于文件的 CRUD 任务跟踪，以减少上下文腐化和跨会话信息丢失。[#18397](https://github.com/google-gemini/gemini-cli/issues/18397) [#18836](https://github.com/google-gemini/gemini-cli/issues/18836)

---

## 6. 开发者关注点

1. **Agent 不应以假成功掩盖失败**  
   最大轮次、模型停滞和浏览器异常都必须产生准确、可诊断的终止状态，避免自动化流程误判任务完成。

2. **委派机制需要更稳定、更主动**  
   Generalist Agent 挂起、skills 与子代理调用不足，说明“具备能力”并不等于“可靠路由”。开发者期待可预测的委派策略和失败恢复。

3. **安全修复必须覆盖绕过路径**  
   危险命令参数位置、`@` 文本粘贴和密钥自动附加等案例表明，安全测试不能只覆盖标准命令形式，还要覆盖组合参数、模糊匹配和粘贴文本。

4. **长时间模型调用的幂等性与超时处理**  
   请求被底层客户端中断后自动重放，可能重复写入或执行操作。开发者需要明确超时边界、幂等保障和更详细的网络错误信息。

5. **配置必须在全链路一致生效**  
   `settings.json`、Agent 模型配置、Node fetch timeout、YOLO 模式和子代理截止时间都存在“已读取但未完整应用”的现象。

6. **大型仓库中的工具和上下文治理**  
   工具数量过多可能触发 API 400；大文件读取会迅速放大 token 消耗。AST 搜索、按需工具加载和精准读取将成为重要工程方向。

7. **跨环境兼容仍是采用障碍**  
   Windows 路径、Wayland 浏览器、Docker/受限沙箱、Node 26、IME 输入等边缘环境问题，会直接影响 CLI 在企业开发环境中的可靠性。

8. **需要可复现、可追踪的评测体系**  
   Subagent 内部轨迹缺失、bug 报告上下文不足，以及内部 eval 结果波动，使开发者难以判断质量变化来自模型、提示词、工具还是运行环境。

---

**整体判断：** 今日主线不是新增大型功能，而是 Gemini CLI 从“功能可用”走向“Agent 行为可信”的关键阶段：真实终止状态、可靠委派、安全边界、配置一致性和跨平台稳定性，将是近期社区最集中的工程诉求。

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI 社区动态日报

**日期：2026-11-21**  
**数据范围：github.com/github/copilot-cli 最近 24 小时更新**

## 1. 今日速览

过去 24 小时内，Copilot CLI 连续发布 `v1.0.115-2` 至 `v1.0.115-5` 四个版本，重点改进 Windows 沙箱、MCP/ACP 兼容性、会话恢复和模型切换体验。  
社区焦点集中在**权限安全、MCP 协议实现、会话生命周期及 Windows 兼容性**；其中一项 Agent 在 WSL 中执行错误 `rsync --delete` 导致用户磁盘被清空的高危报告，成为今日最值得警惕的安全事件。过去 24 小时无 Pull Request 更新。

---

## 2. 版本发布

### v1.0.115-5

- 长时间运行的本地会话占用磁盘更少，恢复速度更快。
- 修复从指定模型切换到 **Copilot Fusion** 后，CLI 仍显示旧路由配置的问题。
- [Release v1.0.115-5](https://github.com/github/copilot-cli/releases/tag/v1.0.115-5)

### v1.0.115-4

- 支持在提供表单控件的 **ACP 编辑器**中使用结构化澄清问题。
- 修复插件初始化竞态，避免其阻塞新会话或导致已有会话无法恢复。
- 修复 Windows 下 Git 命令、Hooks 和语言服务器检查遗留子进程的问题。
- [Release v1.0.115-4](https://github.com/github/copilot-cli/releases/tag/v1.0.115-4)

### v1.0.115-3

- 修复 `@` 提及选择器问题：空搜索完成前选择器不再提前消失，确保 `Ctrl+Y` 和 `Tab` 在关闭后可正常执行。
- [Release v1.0.115-3](https://github.com/github/copilot-cli/releases/tag/v1.0.115-3)

### v1.0.115-2

- Windows 沙箱默认启用软件包查询；如需退出，可设置：
  `sandbox.userPolicy.capabilities = []`
- macOS 沙箱命令支持通过 `sandbox.userPolicy.seatbelt.extraMachLookups` 精确放行指定 Mach 服务，无需开放整个 Keychain。
- `/model` 新增 `Ctrl+X` 后按 `A` 的快捷操作。
- [Release v1.0.115-2](https://github.com/github/copilot-cli/releases/tag/v1.0.115-2)

---

## 3. 社区热点 Issues

> 今日共更新 26 条 Issue，以下按安全性、协议兼容性、稳定性和用户需求排序。

### 1. Agent 在 WSL 中执行 `rsync --delete` 清空用户磁盘

Copilot CLI 通过 PowerShell 向 WSL 传递多行 Bash 脚本时，引用或变量展开异常，最终执行了目标目录为 `/` 的 `rsync -a --delete`，造成不可恢复的数据损失。该问题直接暴露了 Agent 在跨 Shell、跨环境执行高破坏性命令时的防护不足，也暴露了权限确认机制可能未充分校验动态生成的命令。  
**社区反应：** 今日新报告，尚无评论，但严重性高，建议相关用户立即暂停在 WSL 中运行复杂 Agent 命令，并检查命令预览与沙箱策略。  
[#5541](https://github.com/github/copilot-cli/issues/5541)

### 2. Cortex XDR 因 `parent_process_spoofing` 杀死启动 CLI 的 Shell

在 Windows 环境中，Copilot CLI 启动 Git 子进程时触发 Cortex XDR 检测，进而终止 `cmd` 或 PowerShell。问题涉及企业终端安全软件、Git 子进程与 CLI 进程树之间的兼容性，可能影响大量受管设备上的开发体验。  
**社区反应：** 8 条评论、1 个赞，问题仍在开放，开发者与安全团队可能需要共同确认进程启动方式。  
[#5478](https://github.com/github/copilot-cli/issues/5478)

### 3. 远程控制在 GitHub Mobile 和 github.com 上无法连接

会话已同步且可读取，但从 GitHub Mobile 或网页端无法取得控制权，错误为连接挑战值绑定失败。这表明远程控制链路中的连接握手、会话同步与控制授权之间可能存在状态不一致。  
**社区反应：** 2 条评论、1 个赞；移动端和 Web 端同时失败，影响范围较大。  
[#5468](https://github.com/github/copilot-cli/issues/5468)

### 4. 崩溃遗留的 `inuse.<pid>.lock` 导致会话无法恢复

会话事件日志本身可正常回放，引擎也记录了成功恢复，但运行时遗留的锁文件会阻止会话重新打开。这暴露出会话锁缺少对失效 PID、陈旧进程及异常退出场景的可靠回收机制。  
**社区反应：** 4 条评论，问题仍开放；与近期发布中的“插件初始化竞态”和会话恢复优化高度相关。  
[#4805](https://github.com/github/copilot-cli/issues/4805)

### 5. `statusLine.command` 配置有效但未执行或渲染

用户设置 `footer.showCustom=true` 和有效的 `statusLine.command` 后，CLI 仍只显示内置 footer，既不运行自定义命令，也不渲染输出。该问题影响自定义状态栏、上下文用量显示及第三方开发工具集成。  
**社区反应：** 4 条评论、2 个赞；由于复现条件明确，已有较高关注度。  
[#3192](https://github.com/github/copilot-cli/issues/3192)

### 6. Claude 模型缺少一小时 Prompt Cache TTL 选项

Copilot CLI 当前似乎采用 Anthropic 默认的 5 分钟缓存 TTL，而正常交互中思考和编写下一条提示经常超过 5 分钟，导致缓存失效和额外成本、延迟。该 Issue 获得了 **17 个赞、4 条评论**，是今日社区热度最高的功能诉求之一。  
**社区反应：** 需求明确，主要关注长会话中的缓存命中率与费用稳定性。  
[#5220](https://github.com/github/copilot-cli/issues/5220)

### 7. MCP Tasks 声明支持，但未发送任务增强数据

CLI 在初始化时宣称支持 MCP Tasks，但调用声明 `taskSupport: "required"` 的工具时没有发送任务增强字段，导致服务端拒绝请求。该问题可能造成“能力已宣告但实际不可用”，影响支持 MCP Tasks 的工具集成。  
**社区反应：** 今日新报告，暂无评论，属于明确的协议实现缺口。  
[#5540](https://github.com/github/copilot-cli/issues/5540)

### 8. Supabase MCP OAuth 状态探测缺少 `Mcp-Session-Id`

Supabase MCP 的独立 OAuth/授权状态检查因缺少 `Mcp-Session-Id` 返回 HTTP 400，但正常 App 工具调用可以通过同一连接成功执行。这表明状态探测路径和实际会话路径对 MCP Session Header 的处理不一致。  
**社区反应：** 今日新报告，暂无评论，对 MCP 连接健康检查和状态展示有直接影响。  
[#5542](https://github.com/github/copilot-cli/issues/5542)

### 9. Agent Plugins 1.0 的 `.instructions.md` 与 `applyTo` 被静默忽略

Copilot CLI 能加载插件中的 Skills、MCP Servers、自定义 Agent 和 Hooks，但 Agent Plugins 1.0 格式中的 `.instructions.md` 及 `applyTo` frontmatter 未被应用。插件作者可能误以为规则已加载，形成“配置成功但行为未生效”的隐蔽问题。  
**社区反应：** 今日更新 1 条评论；由于插件生态正在扩展，该兼容性问题值得插件开发者重点关注。  
[#5440](https://github.com/github/copilot-cli/issues/5440)

### 10. Windows `/upgrade` 绕过 WinGet，导致安装记录和版本不一致

通过 WinGet 安装后使用 CLI 内置 `/upgrade`，更新程序会覆盖 WinGet 的命令别名，而不会更新 WinGet 包本身，导致 `winget list` 和“应用和功能”仍显示旧版本。  
**社区反应：** 暂无新增评论；问题直接影响企业镜像、卸载和版本治理。  
[#5071](https://github.com/github/copilot-cli/issues/5071)

---

## 4. 重要 PR 进展

**过去 24 小时内没有更新的 Pull Request。** 因此今日不列出虚构或过期 PR；建议关注以下已关闭 Issue 对应的后续修复是否进入 PR：

- ACP 结构化澄清问题的实现细节： [#2109](https://github.com/github/copilot-cli/issues/2109)
- MCP OAuth 协议版本回退： [#5039](https://github.com/github/copilot-cli/issues/5039)
- MCP `text/plain` Blob 内容处理： [#4916](https://github.com/github/copilot-cli/issues/4916)
- MCP 密钥占位符注入： [#4985](https://github.com/github/copilot-cli/issues/4985)
- WSL OAuth 回调问题： [#4632](https://github.com/github/copilot-cli/issues/4632)
- Windows 插件卸载权限问题： [#5119](https://github.com/github/copilot-cli/issues/5119)

---

## 5. 功能需求趋势

### 权限与安全策略

社区希望权限系统既安全又易配置：

- 支持用户级、跨仓库持久化的目录只读授权，减少重复确认。
- 在权限弹窗与 Agent 问答框并发时，不应重置或丢失原有问题。
- 浏览器扩展需要为 Vivaldi 等非原生工具栏浏览器提供可用的授权流程。
- 高风险命令尤其是 `rsync --delete`、跨 Shell 拼接和目录删除，应提供更严格的预览、作用域确认与默认阻断。
- [#5539](https://github.com/github/copilot-cli/issues/5539)
- [#5536](https://github.com/github/copilot-cli/issues/5536)
- [#5538](https://github.com/github/copilot-cli/issues/5538)
- [#5541](https://github.com/github/copilot-cli/issues/5541)

### MCP 协议完整性与扩展能力

MCP 相关问题覆盖 Tasks、OAuth、Session Header、Blob 内容、资源返回和协议版本：

- `taskSupport: "required"` 应真正发送 Tasks 增强数据。
- OAuth 探测应兼容缺少 Session Header 的服务端。
- `resource.blob` 中的 `text/plain` 内容应正确传给模型。
- stdio MCP 的 Secret 占位符应可靠注入子进程。
- 远程 MCP 应支持协议版本协商与回退。
- [#5540](https://github.com/github/copilot-cli/issues/5540)
- [#5542](https://github.com/github/copilot-cli/issues/5542)
- [#4916](https://github.com/github/copilot-cli/issues/4916)
- [#4985](https://github.com/github/copilot-cli/issues/4985)
- [#5039](https://github.com/github/copilot-cli/issues/5039)

### 会话管理与可观测性

用户希望会话系统更透明、更易诊断：

- 在会话列表中直接显示 AI Credits 消耗，方便比较不同会话成本。
- 可靠清理崩溃遗留的锁文件。
- 修复远程控制的连接挑战和授权状态。
- 自定义 `statusLine.command` 应真正执行，以支持上下文、费用和状态展示。
- [#5537](https://github.com/github/copilot-cli/issues/5537)
- [#4805](https://github.com/github/copilot-cli/issues/4805)
- [#5468](https://github.com/github/copilot-cli/issues/5468)
- [#3192](https://github.com/github/copilot-cli/issues/3192)

### 插件生态与规则兼容性

Agent Plugins 1.0 的规则文件未被加载，可能影响插件的可组合性和上下文注入：

- `.instructions.md` 应被识别。
- `applyTo` frontmatter 应控制规则适用范围。
- 加载失败时应明确提示，而不是静默忽略。
- [#5440](https://github.com/github/copilot-cli/issues/5440)

### 模型与成本优化

- 支持 Claude 一小时 Prompt Cache TTL，降低长会话重新计算成本。
- 持续改进模型切换和 Fusion 路由状态展示。
- [#5220](https://github.com/github/copilot-cli/issues/5220)

### Windows 平台可靠性

Windows 社区关注集中于：

- 企业安全软件与 Git 子进程的兼容性。
- WinGet 安装后的内置升级一致性。
- WSL 中 OAuth 回调。
- 子进程清理及插件卸载权限。
- [#5478](https://github.com/github/copilot-cli/issues/5478)
- [#5071](https://github.com/github/copilot-cli/issues/5071)
- [#4632](https://github.com/github/copilot-cli/issues/4632)
- [#5119](https://github.com/github/copilot-cli/issues/5119)

---

## 6. 开发者关注点

1. **执行安全是当前最高优先级**  
   Agent 命令破坏力大，而跨 PowerShell/WSL/Bash 的引号处理会显著放大风险。开发者需要默认沙箱、危险命令拦截、清晰展开后的命令预览，以及针对删除和同步操作的二次确认。

2. **“声明支持但实际不可用”是 MCP 集成的主要痛点**  
   多个 MCP Issue 都指向协议状态不一致：初始化能力声明、OAuth 探测、实际工具调用、Session Header 和协议版本处理可能走了不同路径。插件和 MCP 开发者需要更稳定、可追踪的协议契约。

3. **会话可靠性不能只依赖可回放数据**  
   即使 `events.jsonl` 未损坏，陈旧锁文件仍可让会话不可用。运行时状态、进程存活检测和锁回收需要形成统一机制。

4. **企业 Windows 环境兼容仍是采用障碍**  
   Cortex XDR、WinGet、WSL、Hooks 和语言服务器进程清理都可能影响受管设备。团队更关注稳定升级、可预测退出、子进程回收和与安全软件的共存。

5. **插件加载必须提供可观测性**  
   `.instructions.md` 被静默忽略会让规则看似生效、实际无效。插件作者需要明确的加载日志、校验结果和版本兼容提示。

6. **成本与上下文可观测性需求上升**  
   Prompt Cache TTL、状态栏、会话列表 Credits 消耗都指向同一诉求：让用户更容易理解长会话中的上下文、缓存和费用变化。

7. **自定义终端与键盘交互仍有细节缺陷**  
   状态栏、自定义 footer、`@` 提及选择器、`/ask` 回答消失及模型命令快捷键等问题表明，终端渲染层仍需加强跨编辑器兼容性测试。

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode 社区动态日报｜2026-11-21

## 今日速览

过去 24 小时无新版本发布，研发重点集中在稳定性与跨平台兼容：Windows、macOS、睡眠重连、自定义 Provider、MCP 工具动态更新及权限控制是主要议题。社区同时推动会话管理、前台子代理执行和执行权限沙箱等能力建设；免费额度异常仍是讨论度最高的问题。

## 社区热点 Issues

1. **免费额度故障统一反馈入口**  
   该 Issue 汇总“免费额度超限、重置时间未生效、Desktop 版本异常”等典型症状，是排查 OpenCode Go 免费层问题的首要入口。400 条评论和 30 个点赞显示其关注度显著高于其他议题。  
   [#59387](https://github.com/anomalyco/opencode/issues/59387)

2. **恢复前台子代理执行**  
   社区希望后台子代理运行期间，用户仍能保留前台执行、观察状态或进行交互。该需求直接关系到多代理工作流的可用性，已有 24 条评论和 7 个点赞。  
   [#64073](https://github.com/anomalyco/opencode/issues/64073)

3. **改进执行权限与沙箱机制**  
   Issue 提出让权限模式更易访问，并加强命令执行、目录访问和敏感操作的控制。虽然评论量不高，但与近期 `external_directory` 规则失效问题相互呼应，属于高优先级安全诉求。  
   [#48411](https://github.com/anomalyco/opencode/issues/48411)

4. **TUI 睡眠唤醒后返回启动页**  
   电脑休眠或服务重启后，TUI 可能丢失当前会话视图并返回启动页，但实际会话仍在运行。该问题容易造成长任务“丢失”的错觉，已有对应修复 PR 推进。  
   [#60839](https://github.com/anomalyco/opencode/issues/60839)

5. **MCP 新增工具无法通知模型**  
   MCP 服务通过 `notifications/tools/list_changed` 宣告新工具时，客户端虽重新拉取列表，模型仍无法调用新工具。这暴露出动态工具发现与模型能力同步之间的协议缺口。  
   [#64117](https://github.com/anomalyco/opencode/issues/64117)

6. **项目级自定义 Agent 无法在桌面端选择**  
   `.opencode/agents/<name>.md` 中定义的 `primary` Agent 没有出现在桌面端 Agent 选择器中，`/agent` 也无法切换。项目配置与 UI 能力发现之间存在缺口。  
   [#50269](https://github.com/anomalyco/opencode/issues/50269)

7. **自定义 Provider 在 v2 中缺少凭据路径**  
   v2 集成 API 对自定义 Provider ID 没有提供可用的凭据解析路径，导致 GUI 客户端无法完成自定义 Provider 配置。该问题影响第三方模型接入和桌面端生态扩展。  
   [#51527](https://github.com/anomalyco/opencode/issues/51527)

8. **Windows 权限规则未触发外部目录询问**  
   已配置的 `external_directory: ask` 规则虽然出现在有效配置中，但读取工作目录外文件时不会弹出授权请求，被标记为高严重度问题。权限配置存在“显示生效、实际绕过”的安全风险。  
   [#65290](https://github.com/anomalyco/opencode/issues/65290)

9. **OpenAI 兼容流式接口不接受字符串错误字段**  
   Provider 返回 `{"error":"message"}` 时会触发 SchemaError 并中断整个会话。兼容性需求非常现实：大量第三方服务并未完全遵循对象形式的 OpenAI 错误结构。  
   [#65315](https://github.com/anomalyco/opencode/issues/65315)

10. **会话管理能力不足**  
    社区希望加入归档、置顶、隐藏、排序和树状视图，以改善大量会话下的组织效率。该 Issue 评论较少，但与项目、会话及桌面端导航体验直接相关。  
    [#61746](https://github.com/anomalyco/opencode/issues/61746)

## 重要 PR 进展

1. **兼容 OpenAI 流式响应中的字符串错误字段**  
   将字符串型 `error` 接入现有 Provider 错误处理流程，避免 SchemaError 直接终止会话，对应 #65315。  
   [#65335](https://github.com/anomalyco/opencode/pull/65335)

2. **TUI 重连后重试读取会话**  
   在睡眠或共享服务重启后重新读取当前会话，避免界面错误返回启动页，对应 #60839。  
   [#65311](https://github.com/anomalyco/opencode/pull/65311)

3. **修复 Undo 与提示投递竞态**  
   Undo 操作会检查提示是否已进入会话历史，避免误删已成功投递的队列任务，同时清理失效队列行。  
   [#65314](https://github.com/anomalyco/opencode/pull/65314)

4. **恢复自定义 OpenAI-compatible Provider 保存功能**  
   修复当前集成选择器无法保存自定义 Provider 的问题，对应 #50650，有助于扩展模型服务来源。  
   [#57997](https://github.com/anomalyco/opencode/pull/57997)

5. **通过 Iroh 接受 Machine Link**  
   为跨网络 Machine 连接增加基于公钥拨号和 QUIC 的传输路径，使无公网地址的设备也能被访问。PR 已关闭，但其能力可能被合并或以其他形式继续推进。  
   [#65341](https://github.com/anomalyco/opencode/pull/65341)

6. **Machine 命令支持 `--server`**  
   `opencode machine add|list|remove` 可连接用户自行运行的服务器，不再局限于后台托管服务。PR 已关闭。  
   [#65340](https://github.com/anomalyco/opencode/pull/65340)

7. **远程浏览器登录复制不再阻塞应用**  
   修复“向远程服务器共享登录状态”时应用可能长时间冻结、反复连接及退出等待的问题。PR 已关闭。  
   [#65339](https://github.com/anomalyco/opencode/pull/65339)

8. **缺失 Claude 会话目录时给出明确错误**  
   启动 Claude Agent SDK 前检查 worktree 会话目录，目录已删除时报告具体路径并建议使用 `/cd`，避免 SDK 错误诊断。  
   [#61620](https://github.com/anomalyco/opencode/pull/61620)

9. **开发分支提升至生产环境**  
   汇总 dev 分支中的核心、App、CLI 改动，并包含 Tidepool Alpha Free 与 Gemini 4 Neon 的文档更新，是近期版本交付的重要候选 PR。  
   [#64784](https://github.com/anomalyco/opencode/pull/64784)

10. **桌面端时间线折叠大型文件差异**  
    对过长 diff 进行折叠展示，避免一次数百行写入将时间线扩展到数千像素，改善长会话阅读体验。  
    [#65329](https://github.com/anomalyco/opencode/pull/65329)

## 功能需求趋势

- **多代理与前台协作**：恢复前台子代理执行、改善父子代理状态同步，是多代理工作流的核心诉求。  
  [#64073](https://github.com/anomalyco/opencode/issues/64073) · [#65277](https://github.com/anomalyco/opencode/issues/65277)

- **会话与项目管理**：归档、置顶、隐藏、排序、树状视图，以及项目入口和项目切换体验受到关注。  
  [#61746](https://github.com/anomalyco/opencode/issues/61746) · [#65297](https://github.com/anomalyco/opencode/issues/65297)

- **权限与沙箱**：权限模式易用性、工作区外访问控制、工具执行隔离是安全侧核心方向。  
  [#48411](https://github.com/anomalyco/opencode/issues/48411) · [#65290](https://github.com/anomalyco/opencode/issues/65290)

- **模型与 Provider 扩展**：社区持续关注新模型、加密支付、自定义 Provider、凭据路径及第三方协议兼容性。  
  [#23153](https://github.com/anomalyco/opencode/issues/23153) · [#51527](https://github.com/anomalyco/opencode/issues/51527) · [#65315](https://github.com/anomalyco/opencode/issues/65315)

- **MCP 动态能力**：MCP 工具列表变化后，工具应立即可被模型调用是当前重要的协议能力需求。  
  [#64117](https://github.com/anomalyco/opencode/issues/64117)

- **桌面端体验与可访问性**：消息颜色定制、思考状态显示、项目入口、任务栏进度和大型 diff 折叠持续改善桌面体验。  
  [#60169](https://github.com/anomalyco/opencode/issues/60169) · [#65331](https://github.com/anomalyco/opencode/issues/65331) · [#65329](https://github.com/anomalyco/opencode/pull/65329)

## 开发者关注点

- **跨平台一致性不足**：Windows 问题最为集中，涉及 Shell 引号、路径参数、升级失败、项目目录恢复、权限规则和拼写检查；macOS 则主要涉及渲染和状态展示。  
  [#64573](https://github.com/anomalyco/opencode/issues/64573) · [#65253](https://github.com/anomalyco/opencode/issues/65253) · [#65309](https://github.com/anomalyco/opencode/issues/65309)

- **长任务和后台状态不可靠**：休眠、服务重启或子代理运行时，界面可能无法正确恢复状态，用户难以判断任务是否仍在执行。  
  [#60839](https://github.com/anomalyco/opencode/issues/60839) · [#65277](https://github.com/anomalyco/opencode/issues/65277)

- **第三方 Provider 兼容成本高**：自定义 Provider 在凭据保存、流式事件结构、工具调用事件顺序和模型区域限制方面仍有兼容问题。  
  [#51527](https://github.com/anomalyco/opencode/issues/51527) · [#65092](https://github.com/anomalyco/opencode/issues/65092) · [#65315](https://github.com/anomalyco/opencode/issues/65315)

- **文件编辑工具稳定性**：已有 Issue 报告 `edit` 偶发无法定位明明存在的 `oldString`，并可能错误比较仅缩进不同的文本，直接影响自动化编码可靠性。  
  [#52067](https://github.com/anomalyco/opencode/issues/52067)

- **配置与实际行为不一致**：权限规则、快捷键及项目级 Agent 等配置可能被解析或声明，但运行时没有真正生效，容易造成错误的安全预期。  
  [#65290](https://github.com/anomalyco/opencode/issues/65290) · [#55676](https://github.com/anomalyco/opencode/issues/55676) · [#50269](https://github.com/anomalyco/opencode/issues/50269)

- **免费层与区域可用性**：免费额度重置失效、区域模型 403 以及免费版 Desktop 异常仍是用户体验最突出的集中问题。  
  [#59387](https://github.com/anomalyco/opencode/issues/59387) · [#41518](https://github.com/anomalyco/opencode/issues/41518)

</details>

<details>
<summary><strong>jcode</strong> — <a href="https://github.com/1jehuang/jcode">1jehuang/jcode</a></summary>

# jcode 社区动态日报｜2026-11-21

## 今日速览

过去 24 小时无新版本发布，但社区集中处理了 **Windows 兼容性、Claude/Anthropic 路由、任务中断语义与多代理协作** 等问题。多个 Bug 已进入修复阶段，包括 Anthropic 临时 403 导致会话卡死、Claude 签名思考未回放、Windows 命名管道权限失败，以及 Esc 误杀子代理等。

## 社区热点 Issues

> 过去 24 小时共更新 7 个 Issue；以下按安全性、稳定性、模型兼容性与跨平台支持的价值排序。

1. **任务追加指令可覆盖原任务并触发破坏性操作**  
   用户消息末尾追加的 “Ignore previous instructions” 可能覆盖既有任务，导致完整性数据被改写、项目数据库被删除甚至触发网络下载，属于高风险指令边界与执行安全问题。Issue 创建时间较早但仍持续更新，值得安全方向的开发者重点关注。  
   [Issue #1562](https://github.com/1jehuang/jcode/issues/1562)

2. **Anthropic 临时 403 会使绑定账户会话持续不可用**  
   一次短暂的 `403 Forbidden` 会触发 5 分钟运行时冷却，且后续请求无法真正到达 API，实际表现可能需要重启 daemon 才能恢复，影响账号绑定、故障转移和长时间运行稳定性。  
   [Issue #2268](https://github.com/1jehuang/jcode/issues/2268)

3. **Claude 路由未回放 signed thinking**  
   默认 Claude 路由中，后续工具调用步骤没有将上一阶段的签名思考内容重新发送给 Anthropic，模型被迫重复规划，既增加思考与 token 消耗，也削弱多步工具执行效率。  
   [Issue #2265](https://github.com/1jehuang/jcode/issues/2265)

4. **Windows 命名管道在权限级别不匹配时绑定失败**  
   Windows Terminal 长期以管理员权限运行时，jcode 的命名管道仍可能返回 `Access is denied (os error 5)`；该问题覆盖常见使用路径，严重影响 Windows 环境的启动与服务通信。  
   [Issue #2263](https://github.com/1jehuang/jcode/issues/2263)

5. **Esc 中断父任务时连带终止已生成的子代理**  
   当前 Esc 同时承担“停止当前 turn”和“强制终止所有工作”的效果，不符合层级式代理系统的常见预期。用户希望普通中断只停止父 turn、保留子代理并继续接收完成报告。  
   [Issue #2261](https://github.com/1jehuang/jcode/issues/2261)

6. **恢复会话时，自定义 OpenAI 兼容服务显示静态模型列表**  
   恢复已有会话时，模型选择器读取 `config.toml` 中的静态模型，而不是端点 `/v1/models` 返回的实时目录；新建会话正常。这会直接影响 LiteLLM 等动态模型服务的可用性与配置一致性。  
   [Issue #2180](https://github.com/1jehuang/jcode/issues/2180)

7. **Windows 平台 jcode-tui 单元测试无法编译**  
   `cargo test -p jcode-tui --lib` 在 Windows 上因 Unix-only Stream 方法及 `parse_niri` 等内容产生 14 个编译错误，说明部分测试和后端实现仍存在较明显的平台耦合。  
   [Issue #2256](https://github.com/1jehuang/jcode/issues/2256)

8. **Responses 流中的 `response.failed` 原因未透出**  
   关联 PR 指出，流解析器忽略 `response.error.{message,code}`，导致用户只能看到固定兜底文案，难以判断真实失败原因；这是稳定错误反馈与可诊断性的基础问题。  
   [Issue #2216（关联 PR #2217）](https://github.com/1jehuang/jcode/issues/2216)

9. **Windows 俄语键盘布局下 Ctrl+C 无法正确中断**  
   在俄语布局中，crossterm 将 Ctrl+C 映射为西里尔字符 `с`，导致基于 `Char('c')` 的快捷键无法命中，流式任务无法通过 Ctrl+C 中断。  
   [Issue #2212](https://github.com/1jehuang/jcode/issues/2212)

10. **Windows 运行时 OSC 11 查询无法正常处理**  
    Windows 控制台不会以 crossterm 预期的方式返回主题查询结果，终止符还可能被识别为普通反斜杠按键，可能造成异常按键输入和终端行为不稳定。  
    [Issue #2221](https://github.com/1jehuang/jcode/issues/2221)

### 社区反应概览

- 7 个 Issue 当前均保持开放，评论数普遍较低，最新问题多数尚无公开讨论。
- 社区参与更多体现在快速提交对应修复 PR：Anthropic 403、Claude thinking、Windows 管道和 Esc 中断均已有明确修复分支。
- 安全问题 #1562 的评论和点赞仍较少，但潜在破坏性使其成为优先级最高的长期风险之一。

## 重要 PR 进展

1. **为绑定账户增加临时 403/auth 冷却后的重试机制**  
   针对 Anthropic 一次性 403 直接把账户置于不可用状态的问题，修复绑账户预检逻辑，使短暂认证或授权失败后可以重新尝试，而不是必须重启 daemon。关联 #2268。  
   [PR #2267](https://github.com/1jehuang/jcode/pull/2267)

2. **Claude/MultiProvider 路由回放 signed thinking**  
   修正 provider 名称判断（`Claude` 与 `anthropic` 不一致导致分支未命中），确保 Anthropic 扩展思考在后续 turn 或工具循环中被正确回放，减少重复推理。关联 #2265。  
   [PR #2266](https://github.com/1jehuang/jcode/pull/2266)

3. **Windows 管道按完整性级别拆分，并在拒绝访问时回退**  
   修复 Windows 命名管道在不同权限级别下发生冲突的问题，并针对 `Access is denied` 增加回退逻辑，提升管理员终端和普通终端之间的互操作能力。关联 #2263。  
   [PR #2264](https://github.com/1jehuang/jcode/pull/2264)

4. **将 Esc 中断限定在父 turn**  
   调整取消链路，使普通 Esc 不再遍历并终止所有派生子代理；子会话可继续运行并回传结果，同时保留更强硬停止操作用于彻底终止。关联 #2261。  
   [PR #2260](https://github.com/1jehuang/jcode/pull/2260)

5. **让 `jcode serve` 能识别陈旧 socket，并增加 `--replace`**  
   服务启动不再只给出“拒绝替换活动 socket”的一行错误，而是区分存活进程和崩溃后遗留节点，显示 live PID，并提供显式替换选项，改善 daemon 恢复体验。  
   [PR #2269](https://github.com/1jehuang/jcode/pull/2269)

6. **透出 Responses API 失败事件中的真实错误**  
   解析 `response.failed` 事件中的 `response.error.message` 与 `code`，避免所有供应商都被统一显示为固定兜底错误，提升第三方 OpenAI Responses 兼容服务的可诊断性。关联 #2216。  
   [PR #2217](https://github.com/1jehuang/jcode/pull/2217)

7. **TUI 改为仅 Ctrl+Click 打开链接**  
   避免普通鼠标点击链接时意外启动浏览器，同时保留终端中选中复制文本的惯例。关联 #2211。  
   [PR #2204](https://github.com/1jehuang/jcode/pull/2204)

8. **新增原生 ZCode OAuth、请求签名 v4、Provider 与用量支持**  
   实现 `/oauth/cli/init`、`/oauth/cli/poll/{flow_id}`，保存 OAuth 凭据，并加入基于 HKDF-SHA256、HMAC-SHA256 的客户端请求签名流程及用量能力。该 PR 体现新模型服务接入仍是社区高频方向。  
   [PR #2257](https://github.com/1jehuang/jcode/pull/2257)

9. **保留服务端上报的真实上下文窗口**  
   防止客户端刷新时用模型家族估算值覆盖服务端实际 context window，例如将 196,608 token 的 Qwen 端点错误显示为 262,144 token。  
   [PR #2128](https://github.com/1jehuang/jcode/pull/2128)

10. **ACP 客户端现在可收到工具生成的图片**  
    将工具结果中的图片从 `SidePaneImages` 映射为原生 ACP image content，同时保留原工具结果文本，补齐 ACP 客户端的多模态展示链路。  
    [PR #2113](https://github.com/1jehuang/jcode/pull/2113)

## 功能需求趋势

1. **多代理生命周期与精细化控制**  
   社区希望区分普通取消、硬停止、父子代理依赖和完成回传，避免一次 Esc 造成跨层级误杀。  
   [Issue #2261](https://github.com/1jehuang/jcode/issues/2261) · [PR #2260](https://github.com/1jehuang/jcode/pull/2260)

2. **Windows 优先的跨平台稳定性**  
   热点集中在命名管道、权限级别、键盘布局、OSC 终端查询和测试可移植性，Windows 已从边缘平台变成主要兼容性场景。  
   [Issue #2263](https://github.com/1jehuang/jcode/issues/2263) · [Issue #2256](https://github.com/1jehuang/jcode/issues/2256)

3. **多模型 Provider 与认证兼容**  
   Anthropic 403 恢复、Claude 思考回放、自定义 OpenAI 兼容服务动态模型目录，以及 ZCode OAuth/签名接入，表明 Provider 抽象仍是核心扩展方向。  
   [Issue #2268](https://github.com/1jehuang/jcode/issues/2268) · [Issue #2180](https://github.com/1jehuang/jcode/issues/2180) · [PR #2257](https://github.com/1jehuang/jcode/pull/2257)

4. **多模态工具结果与终端交互完善**  
   ACP 图片透传、Ctrl+Click 链接、代码块高亮与 tab 展开等需求表明，TUI/ACP 的细节体验仍在快速完善。  
   [PR #2113](https://github.com/1jehuang/jcode/pull/2113) · [PR #2204](https://github.com/1jehuang/jcode/pull/2204) · [PR #2238](https://github.com/1jehuang/jcode/pull/2238)

5. **可观测性与错误恢复**  
   用户需要真实 API 错误信息、服务端模型上下文窗口、可恢复的陈旧 socket，以及更清晰的运行时状态，而不是固定错误文案或本地估算。  
   [PR #2217](https://github.com/1jehuang/jcode/pull/2217) · [PR #2128](https://github.com/1jehuang/jcode/pull/2128) · [PR #2269](https://github.com/1jehuang/jcode/pull/2269)

## 开发者关注点

- **任务安全边界**：用户追加指令可能覆盖原任务并触发破坏性操作；执行层需要更严格地区分可信任务内容、附加上下文和不可执行的越权指令。  
  [Issue #1562](https://github.com/1jehuang/jcode/issues/1562)

- **故障不应演变为会话级死锁**：临时 403、认证冷却或 daemon 状态残留后，应能自动恢复，而不是要求用户重启整个进程。  
  [Issue #2268](https://github.com/1jehuang/jcode/issues/2268) · [PR #2269](https://github.com/1jehuang/jcode/pull/2269)

- **多步工具调用中的推理连续性**：signed thinking 能否可靠回放直接影响 token 消耗、延迟和工具任务的一致性。  
  [Issue #2265](https://github.com/1jehuang/jcode/issues/2265)

- **跨平台行为必须一致**：Windows 权限、键盘布局、终端协议与 Unix 行为之间的差异，已经成为实际阻断问题，而非边缘兼容性建议。  
  [Issue #2263](https://github.com/1jehuang/jcode/issues/2263) · [Issue #2212](https://github.com/1jehuang/jcode/issues/2212)

- **子代理应具有独立生命周期**：父任务取消不应默认等同于递归终止所有子任务；开发者需要明确、可预期的取消语义。  
  [Issue #2261](https://github.com/1jehuang/jcode/issues/2261)

- **配置应反映服务端真实能力**：模型目录、上下文窗口和失败原因应来自实际服务端，而不是静态配置或客户端估算。  
  [Issue #2180](https://github.com/1jehuang/jcode/issues/2180) · [PR #2128](https://github.com/1jehuang/jcode/pull/2128) · [PR #2217](https://github.com/1jehuang/jcode/pull/2217)

</details>

<details>
<summary><strong>pi</strong> — <a href="https://github.com/earendil-works/pi">earendil-works/pi</a></summary>

# pi 社区动态日报｜2026-11-21

## 今日速览

- Pi 发布 **v1.6.0**，正式接入 **GPT-6.2 Astra / Sol**，并将 **GPT-6.2 Sol** 设为 OpenAI、Azure、OpenAI Codex 三类 Provider 的默认模型。
- 今日社区重点集中在 **模型兼容性、推理参数、Provider 稳定性、Windows 环境及长会话可靠性**；其中 GPT-6 推理强度失效、OpenAI reasoning item 丢失被标记为 P0。
- 过去 24 小时共更新 **50 个 Issues、22 个 PRs**，大量修复已关闭，显示团队正集中处理 Provider 接入、请求重试、会话加载和跨平台兼容问题。

---

## 版本发布

### [v1.6.0](https://github.com/earendil-works/pi/releases/tag/v1.6.0)

新增 GPT-6.2 系列模型：

- **GPT-6.2 Astra**
- **GPT-6.2 Sol**
- 两者均可通过 `openai`、`azure`、`openai-codex` Provider 使用。
- **GPT-6.2 Sol** 成为上述三个 Provider 的默认模型。

> 注意：新版本发布后，社区立即发现部分 GPT-6 模型的 `--thinking high/xhigh` 被统一映射为 `medium`，相关回归问题仍在处理中。

---

## 社区热点 Issues

### 1. [GPT-6 的 high/xhigh 推理档位实际始终变成 medium](https://github.com/earendil-works/pi/issues/12361)

**状态：OPEN · P0**

v1.6.0 为 GPT-6 系列启用 `supportsMidConvoEffort` 后，请求中的 `reasoning.effort` 始终为 `medium`，导致用户选择的 `high` 或 `xhigh` 无法生效。这是新版本最直接的回归问题，也影响高成本、高延迟任务的实际表现。

### 2. [OpenAI 间歇性丢弃 reasoning items](https://github.com/earendil-works/pi/issues/12367)

**状态：OPEN · P0**

升级至 1.6.0 后，Pi 偶发报告 `OpenAI dropped ... reasoning items: prefix_mismatch`。问题会破坏推理上下文连续性，并与 Agent 的上下文质量、长会话稳定性直接相关。

### 3. [Anthropic Team/Enterprise 账号登录失败：Unknown scope](https://github.com/earendil-works/pi/issues/12318)

**状态：OPEN · P0 · 处理中**

Claude Team/Enterprise 席位在执行 `/login` 时被 Anthropic OAuth 拒绝：`Unknown scope: user:...`。由于请求在用户同意页之前就失败，团队用户无法正常接入相应模型。

### 4. [Gemini 4 Hydrogen 宣称支持 xhigh，但 Google Adapter 拒绝](https://github.com/earendil-works/pi/issues/12177)

**状态：OPEN · P0**

模型页面已展示 `xhigh`，但 Google Generative AI 与 Vertex AI Adapter 均无法接受该思考等级。Issue 获得 **2 个点赞**，反映出模型能力声明、Pi 配置与 Adapter 实际行为之间存在明显不一致。

### 5. [OpenAI 服务层级定价未正确反映费用](https://github.com/earendil-works/pi/issues/12308)

**状态：OPEN · P0 · 处理中**

`ultrafast` 等服务层级仍按标准价格计算 `usage.cost`，Codex 请求也遗漏 `fast` 等 tier 设置。错误成本数据会影响预算监控、Agent 自动决策以及后续按成本路由的实现。

### 6. [Windows Git Bash 静默截断长 RPC Bash 命令](https://github.com/earendil-works/pi/issues/12340)

**状态：OPEN · P0 · 处理中**

Windows Git Bash 下，约 8,336 字符的 RPC 命令只执行首段，却返回 `exitCode: 0` 和 `truncated: false`。更危险的是，Pi 不知道命令已被截断，可能基于不完整执行结果继续行动。

### 7. [Headless 模式因 stdio MCP 服务保持连接而无法退出](https://github.com/earendil-works/pi/issues/12238)

**状态：OPEN**

`pi -p` 已输出结果，但只要一个 stdio MCP 服务成功连接，进程就不会退出。失败启动的 MCP 服务反而不阻塞，因此表现不一致，直接影响 CI、脚本编排与自动化调用。

### 8. [允许配置 idle cache-warming 的时间范围](https://github.com/earendil-works/pi/issues/11127)

**状态：OPEN**

社区希望将空闲缓存预热的最长等待时间配置为 60 或 120 分钟，而非固定 30 分钟。该 Issue 自 10 月中旬持续活跃，体现用户对长上下文、缓存命中率和推理成本优化的持续投入。

### 9. [Codemode 的 schemaToType 忽略数组元素约束](https://github.com/earendil-works/pi/issues/12156)

**状态：OPEN**

`schemaToType` 渲染数组类型时只保留数组级限制，丢失 `items` 中的限制。生成声明与真实 JSON Schema 不一致，可能降低模型调用工具时的结构化约束可靠性。

### 10. [路由到虚拟模型时忽略 compaction.modelOverrides](https://github.com/earendil-works/pi/issues/12265)

**状态：OPEN**

扩展注册虚拟模型并在多个后端模型间路由时，`compaction.modelOverrides` 没有按实际路由模型生效。上下文压缩窗口与压缩策略可能配置错误，进而造成超限、额外压缩或成本上升。

---

## 重要 PR 进展

### 1. [通过环境变量传递 Windows Bash 命令](https://github.com/earendil-works/pi/pull/12369)

**状态：OPEN**

关闭 #12340，避免 Git Bash、MSYS2、Cygwin 对超长命令行和换行参数进行破坏性解析。改动直接针对 Windows Agent 执行 Bash 时的可靠性问题。

### 2. [区分 Google prompt block 与不完整流](https://github.com/earendil-works/pi/pull/12357)

**状态：OPEN**

让 Google Adapter 能识别因内容策略而被拒绝的 prompt，并输出可操作的失败诊断，而不是与网络中断、流不完整等情况混淆。

### 3. [JSON 模式在最终响应失败时返回非零退出码](https://github.com/earendil-works/pi/pull/12356)

**状态：OPEN**

`pi --mode json` 原先在最终消息为 `error` 或 `aborted` 时仍退出 0；修复后与文本模式保持一致。CI 和自动化调用可以可靠地根据进程状态判断任务是否成功。

### 4. [上下文编辑后保留基于 usage 的 token 估算](https://github.com/earendil-works/pi/pull/12378)

**状态：CLOSED**

`estimateProjectedContextTokens` 不再因为较新的 `context_edit` 或 compaction 就丢弃 Provider 实测 usage，从而提升上下文估算和压缩决策的准确性。

### 5. [Windows 控制台关闭时执行 shutdown cleanup](https://github.com/earendil-works/pi/pull/11889)

**状态：CLOSED · 处理中**

在 Windows console close 场景补充清理流程，处理原先只监听 POSIX `SIGHUP` 导致的资源、扩展状态及子进程清理缺口。

### 6. [兼容带前缀的 Gemini 3+ 模型 ID](https://github.com/earendil-works/pi/pull/12371)

**状态：CLOSED**

扩展 Gemini 版本识别逻辑，支持 `google/gemini-...` 及带任意前缀的模型 ID，并补充 `compat.supportsStrictMode`，使 strict tool use 等新版能力正确启用。

### 7. [Bedrock SSO 凭证支持通过 HTTPS_PROXY 获取](https://github.com/earendil-works/pi/pull/12365)

**状态：CLOSED**

Bedrock Runtime 使用代理感知 HTTP handler 的同时，AWS SSO/OIDC 凭证链也使用相同代理配置，解决设置 `HTTPS_PROXY` 后请求长期挂起的问题。

### 8. [会话树导航不再重复加入历史提示词](https://github.com/earendil-works/pi/pull/12280)

**状态：CLOSED**

修复 `/tree` 与扩展 `navigateTree` 重新渲染时重复填充 Up-arrow 历史的问题，避免历史记录膨胀和提示词反复执行。

### 9. [模型目录改为每次发布只合并一次](https://github.com/earendil-works/pi/pull/12366)

**状态：CLOSED**

修复 `createProvider` 在每次 `getModels()` 调用时重新合并模型目录造成的二次复杂度。目录规模越大，重复查询的额外开销越明显。

### 10. [支持加载最后一次压缩后拥有大量条目的会话](https://github.com/earendil-works/pi/pull/12360)

**状态：CLOSED**

避免 `contextEntries.push(...path.slice(...))` 将海量条目展开为函数参数，从根源上规避约 12 万条以上会话触发 `Maximum call stack size exceeded`。

---

## 功能需求趋势

1. **新模型与推理能力同步**
   - GPT-6.2 已快速接入，但推理档位、thinking level 和 reasoning item 的行为仍需跟进。
   - Gemini 用户持续要求原生 `xhigh`、strict tool use，以及更可靠的模型家族识别。

2. **Provider 稳定性与错误恢复**
   - 社区重点关注 SSE 错误分类、部分响应、网关暂时不可用和自动重试。
   - 费用统计、服务 tier、缓存 token 等计费元数据也是高频诉求。

3. **跨平台可靠性**
   - Windows Git Bash、console close、installer 命令冲突和 ANSI 粘贴问题持续出现。
   - 社区希望跨平台行为与 Linux/macOS 对齐，并提供更准确的失败状态。

4. **长会话和上下文管理**
   - 大型会话无法加载、compaction 路由覆盖失效、缓存预热周期不可配置，反映出 Agent 运行时间增长后的上下文管理需求。

5. **Codemode 与工具可观测性**
   - 工具声明准确性、batch 调用中的 skill 可见性、tool preview 主题适配都在加强。
   - 开发者需要工具执行过程既可批处理，又能在 UI 中保持透明可追踪。

6. **自动化与扩展接口可靠性**
   - Headless 退出码、MCP 生命周期、扩展动态写入编辑器及 `beforeRequest` 拦截能力，都是构建生产级 Agent 的基础能力。

---

## 开发者关注点

- **“配置声明正确”不等于“请求实际生效”**：GPT-6 reasoning effort、Gemini xhigh、compaction override 都暴露了类似问题。
- **静默失败比直接报错更危险**：Windows Bash 命令截断却报告成功，会让 Agent 基于错误状态继续执行。
- **自动化必须依赖可靠退出语义**：JSON 模式错误退出码、headless MCP 进程残留会直接影响 CI 和调度系统。
- **Provider 边界条件是高频故障区**：SSE 错误、OAuth scope、代理下凭证刷新、Gemini 模型识别均需要更强的契约测试。
- **超长会话成为现实问题**：会话条目可能达到十万级，后续应继续关注内存、加载时间、压缩准确性与上下文估算。
- **成本数据可信度受到重视**：缓存读写 token、service tier 和 routing compaction 配置都需要准确，否则会影响预算与模型选择策略。

</details>

---
*本日报由 [Big Model Radar](https://github.com/96loveslife/big_model_radar) 自动生成。*
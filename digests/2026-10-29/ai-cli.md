# AI CLI 工具社区动态日报 2026-10-29

> 生成时间: 2026-10-29 05:12 UTC | 覆盖工具: 8 个

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

**数据日期：2026-10-29**  
**观察窗口：各项目过去 24 小时 GitHub 更新**

---

## 1. 生态全景

AI CLI 生态正从“模型能力竞争”转向“**可扩展执行平台竞争**”，插件、Hooks、MCP、子智能体和 Code Mode 成为各项目共同投入的核心方向。与此同时，长会话可靠性成为普遍短板，挂起、内存膨胀、上下文 rollover 失败、进程残留和权限阻塞频繁出现。工具调用安全也从提示词约束升级为运行时门禁，重点集中在沙箱、权限作用域、默认拒绝和审批生命周期。桌面端则进入升级回归高发期，Windows、macOS 上的会话索引、授权迁移、后台进程和跨端同步问题显著增加。综合来看，下一阶段竞争关键不只是模型效果，而是**执行的可控性、可恢复性、可观测性和企业治理能力**。

---

## 2. 各工具活跃度对比

> Issues、PR 按摘要中可明确识别的“过去 24 小时更新项”统计；社区评论量反映讨论强度，不等同于全部历史存量。

| 工具 | 今日 Issues | 今日 PR | Release 情况 | 活跃度判断 |
|---|---:|---:|---|---|
| **Claude Code** | 至少 10 个重点热点，另有相关报告持续更新 | 2 | 无新版本 | 热点评论量最高，讨论深度强，但近期多集中在额度、权限和跨端一致性 |
| **OpenAI Codex** | 10 个重点热点 | 10（均已关闭，需确认是否合并） | `rust-v0.166.0-alpha.6`、`alpha.5.1` | 工程迭代最密集之一，Windows Desktop 回归成为主要风险 |
| **Gemini CLI** | 10 个重点热点 | 10+，另有多项补充修复 | 无新版本 | Issue 高度聚焦 Subagents，PR 侧重可靠性、安全与 CI |
| **GitHub Copilot CLI** | 10 个重点热点，另有若干相关项 | 4 | 无新版本 | 社区围绕企业授权、MCP OAuth、凭据和长会话集中反馈 |
| **Kimi Code CLI** | 0 | 1 | 无新版本 | 活跃度最低，但仍出现安全 Hook 集成方向 |
| **OpenCode** | 10 个重点热点 | 10+ | `v1.19.5`、`process-daemon v0.3.2` | 发布和修复密度高，Code Mode、权限、MCP 生命周期推进明显 |
| **jcode** | 9 | 34 | `v1.0.0-preview.30` | PR 数量最多、迭代激进，安全和测试隔离问题较突出 |
| **pi** | 10 个重点热点 | 10+ | 无新版本 | 关注运行时稳定性、Durable 扩展和模型路由，基础工程修复密集 |

### 活跃度结论

- **PR 驱动型**：jcode、OpenAI Codex、OpenCode，三者体现出较强的并行开发强度。
- **议题驱动型**：Claude Code、Gemini CLI、Copilot CLI，热点功能讨论非常集中。
- **稳定收敛型**：pi 和 Kimi Code CLI；前者持续修复基础运行时，后者当日社区增量较少。
- **发布节奏**：OpenAI Codex、OpenCode、jcode 有版本产出；其余工具过去 24 小时没有新 Release。

---

## 3. 共同关注的功能方向

### 3.1 MCP 从“能连接”进入“隔离、认证和生命周期治理”阶段

多个项目的问题已不再局限于 MCP 是否安装成功，而是集中在连接后的实际调用与运行治理：

- **OpenAI Codex**：Windows Desktop 可发现本地 MCP 工具，但 Chat 无法调用；同时引入按聊天隔离的 MCP connection lease，防止多会话共享连接串扰。
- **Gemini CLI**：增加 MCP `tools/list` 分页支持，避免大型 MCP 服务的工具被静默丢弃。
- **GitHub Copilot CLI**：OAuth 动态客户端注册过期后不会重新注册；Atlassian 有状态 MCP 服务登录失败；Windows Entra Broker 令牌无法落盘。
- **OpenCode**：本地 MCP 进程在会话结束后未释放；并行权限请求可能孤立挂起；权限拒绝原因和用户反馈一度被通用异常吞没。
- **jcode**：新增 `/mcp`，支持按服务器切换工具，并通过文件锁持久化状态。

**共性诉求**：可发现、可调用、会话隔离、权限可诊断、OAuth 可刷新、进程可回收、配置可持久化。

---

### 3.2 插件与 Hook 正成为 Agent 的“操作系统层”

- **Claude Code**：Mods、Hooks、Plugins 是当日最热议题；新增 `edit-verifier`，在 `PostToolUse` 阶段验证编辑是否真正生效。
- **Gemini CLI**：提出 Subagent 生命周期 Hook，并推动 ACP 工具调用经过 `BeforeTool`、`AfterTool`；同时建议 Hook 默认沙箱化。
- **OpenCode**：希望提供 `session.stopping`，允许插件在 Agent Loop 停止前介入；Code Mode 的权限拒绝、反馈和失败信息开始向插件程序透传。
- **Kimi Code CLI**：通过 `PreToolUse` 接入 HOL Guard，在 Shell 命令执行前进行风险分类和阻断。
- **jcode**：Bash 风险门控改为可配置开关，并新增模型 fallback、重试与主题等扩展配置。
- **pi**：扩展 runtime 延迟重载、Durable Hook 与 AgentSession 生命周期对齐是重点。

**共性诉求**：扩展点必须覆盖完整执行生命周期，并且具备沙箱、权限、错误反馈、幂等重载和可观测性。

---

### 3.3 多智能体、子代理与并行执行成为主战场

- **Gemini CLI**：Subagents 是当日压倒性的议题，覆盖生命周期 Hook、异步启动、并行执行、恢复、持久化、工具白名单和共享内存。
- **OpenCode**：社区要求限制最大并行 Subagent 数量，以控制上下文、内存和本地模型并发压力。
- **Claude Code**：关注跨会话消息、Cloud Session 协调和多 Agent 协作。
- **OpenAI Codex**：通过聊天级 MCP lease 改善多会话共享基础设施的边界。
- **pi**：Durable 正尝试成为新的扩展执行范式，目标是支持 AgentSession 级任务提交和生命周期控制。

**共性诉求**：子智能体必须有明确的并发上限、权限继承规则、状态持久化、恢复语义和资源预算。

---

### 3.4 长会话稳定性与上下文管理成为共同风险

- **Copilot CLI**：长会话内存达到 **37.3 GiB**；上下文 rollover 因缺少 `checkpoint.md` 失败。
- **OpenCode**：持续推进 `session_part` 拆分和批量提交，测试中 SQLite WAL 写入量由 **47.89 MB 降至 7.46 MB，下降 84.4%**。
- **Claude Code**：睡眠中断后的上下文重建被纳入额度异常讨论。
- **Gemini CLI**：修复恢复会话时历史丢失、取消后已提交轮次回滚、失败重试重复执行工具等问题。
- **pi**：推进 Anthropic Message Threads，希望长会话只发送新增消息；同时修复 continuation、thinking block 重放和 compaction 稳定性。

**共性诉求**：会话历史必须可信、恢复不能丢状态、上下文切换不能损坏历史、长输出必须有界。

---

### 3.5 权限、安全门禁与沙箱化

- **OpenCode**：沙箱和工作目录限制获得 **105 条评论、80 个点赞**，是当日最强安全诉求之一。
- **Gemini CLI**：提出 Hook 默认沙箱和企业级策略控制。
- **jcode**：报告恶意尾部指令覆盖原任务、SBOM 证据失真等安全问题，并引入可配置 Bash 风险门控。
- **Kimi Code CLI**：利用 `PreToolUse` 对 Shell 命令执行前分类，非明确安全则阻断。
- **Claude Code**：密码输入硬拦截妨碍合法开发测试，后台权限提示可能无限阻塞。
- **Copilot CLI**：非交互模式缺少清晰的 default-deny 工具策略。

**共性诉求**：默认安全、可信项目可显式声明边界、风险操作可解释、审批不能无限等待、失败时应有确定策略。

---

### 3.6 桌面端可靠性与跨端会话一致性

- **OpenAI Codex**：Windows 更新后集中出现对话无法提交、项目分组消失、侧边聊天异常、后台重复 hydration 和任务栏回归。
- **Claude Code**：Windows Routines 侧栏被隐藏，macOS 更新后权限反复触发，Desktop 与 CLI 在主题和配置能力上不一致。
- **OpenCode**：Windows Desktop 关闭后仍残留 `opencode-cli.exe` 后台进程。
- **jcode**：Windows 取消后台任务后，npm、cmd、Vitest 子进程继续运行。

**共性诉求**：升级迁移不能破坏授权和索引；关闭必须真正回收进程；会话、项目和权限状态必须在 CLI 与 Desktop 间一致。

---

### 3.7 成本、额度与模型路由透明度

- **Claude Code**：Headless 模式每 token 的五小时窗口额度消耗约为交互模式的 **1.8 倍**，并出现周额度消耗加快的疑似回归。
- **OpenCode**：免费额度超限、提前触发、重置失败和 Desktop 提示不一致。
- **jcode**：ACP 限流后未切换其他账号，但新增可配置重试和 fallback 顺序。
- **pi**：配置默认模型有时被 fallback 替换；已下架模型被静默忽略。
- **OpenAI Codex**：单线程 Fast mode 意外改变全局 service tier。

**共性诉求**：费用和配额必须可预测、可解释；fallback 必须可见；模型、服务等级和配额策略应按线程或会话隔离。

---

## 4. 差异化定位分析

| 工具 | 功能侧重 | 主要目标用户 | 技术路线与差异化 |
|---|---|---|---|
| **Claude Code** | 插件生态、Hooks、Mods、跨会话 Agent、Desktop/CLI 一体化 | 深度代码代理用户、平台团队、Agent 自动化开发者 | 以成熟 CLI/IDE 入口为基础，通过插件、Hooks、Cloud Session 和多 Agent 扩展生态；当前短板是额度透明度和无人值守权限 |
| **OpenAI Codex** | Code Mode、桌面端、Computer Use、MCP、TUI、多提供商支持 | OpenAI 生态开发者、Desktop 与自动化用户 | Rust 工程主线突出，重视服务端输出治理、连接租约、取消传播和多云配置；当前 Windows 升级回归较集中 |
| **Gemini CLI** | Subagents、Hook 企业治理、异步/并行任务、Remote Agents | 多智能体实验者、Google Cloud 用户、平台工程团队 | 明显向多智能体执行平台演进；Subagent 议题最系统，Hook 沙箱和工作区策略体现治理导向 |
| **GitHub Copilot CLI** | GitHub/企业生态、MCP OAuth、凭据管理、IDE/终端集成 | 企业开发者、GitHub 用户、远程 MCP 使用者 | 与 GitHub 企业身份和策略体系结合紧密；当前最大障碍是跨平台认证和长会话资源稳定性 |
| **Kimi Code CLI** | Hook 扩展、安全命令门禁、轻量集成 | 关注轻量扩展和本地安全防护的用户 | 当日动态较少，但 `PreToolUse + HOL Guard` 展示了“小型可组合安全 Hook”路线 |
| **OpenCode** | 多 Provider、Code Mode、MCP、插件、Desktop、本地模型 | 开放模型用户、自托管和高度可定制用户 | 开放协议与多 Provider 兼容突出；当前集中治理 Code Mode 权限、输出、存储性能和 MCP 生命周期 |
| **jcode** | 高频 TUI 迭代、模型/Provider 接入、fallback、测试隔离 | 尝鲜型开发者、偏好新模型和自托管网关的用户 | 迭代速度快、功能覆盖广，但 preview 阶段的安全边界、测试隔离和进程治理仍需加强 |
| **pi** | 轻量 runtime、Durable 扩展、模型路由、上下文续接 | 扩展开发者、底层 Agent 平台构建者、跨 Provider 用户 | 强调运行时原语和可嵌入性，Anthropic Message Threads、Bedrock/Vertex 路由较突出；当前重点是补齐生命周期和平台基础能力 |

### 定位判断

- **最接近通用 Agent 平台**：Gemini CLI、OpenCode、Claude Code。
- **最强调企业生态与身份治理**：GitHub Copilot CLI。
- **最强调桌面与系统级自动化**：OpenAI Codex。
- **最开放、最适合多后端与自托管**：OpenCode、pi。
- **最轻量、扩展导向**：Kimi Code CLI、pi。
- **迭代最激进、功能试错速度快**：jcode。
- **当前扩展生态讨论最集中**：Claude Code。

---

## 5. 社区热度与成熟度

### 5.1 社区热度

从重点 Issue 的评论、点赞和讨论集中度看：

1. **Claude Code**
   - Mods 提案：**275 条评论、131 个点赞**
   - Headless 额度：**59 条评论、101 个点赞**
   - `/delete`：**24 条评论、100 个点赞**
   - 优势：议题规模大、愿景明确，Mods 已成为事实上的生态核心入口。

2. **OpenCode**
   - 沙箱：**105 条评论、80 个点赞**
   - 免费额度：**80 条评论**
   - 优势：安全与配额问题形成高强度用户共识。

3. **OpenAI Codex**
   - Windows 持久化对话问题：**37 条评论**
   - dot 线程兼容：**31 条评论、9 个点赞**
   - 优势：讨论量高，但主要被具体回归问题推动，而非单一大功能愿景。

4. **GitHub Copilot CLI**
   - 企业模型列表 403：**31 条评论**
   - Ubuntu keychain：**22 个点赞**
   - 优势：需求高度务实，直接对应企业部署和身份认证落地。

5. **Gemini CLI**
   - Subagent Hook：**8 条评论**
   - 自动验证应用变更：**5 条评论**
   - 优势：单个 Issue 的绝对热度略低，但议题结构最系统，说明产品路线正在收敛。

6. **jcode**
   - 安全议题评论较少，但 PR 更新达 **34 个**，更多体现内部工程高强度，而非社区讨论热度。

7. **pi**
   - 多个 Issue 为 **2–13 条评论**，重点是具体工程缺陷和架构补齐。

8. **Kimi Code CLI**
   - 当日唯一 PR 暂无评论、点赞或审查反馈，是最早期信号。

### 5.2 成熟度判断

| 成熟度层级 | 工具 | 依据 |
|---|---|---|
| **较成熟、进入生态扩展期** | Claude Code | 已形成 Mods、Hooks、Plugins、Desktop/CLI 和会话管理体系；热点主要围绕现有能力深化 |
| **成熟主线、但桌面回归较多** | OpenAI Codex | Rust 发布节奏、Code Mode、Computer Use、MCP 体系完整，但 Windows 更新稳定性需收敛 |
| **成熟基础、快速向多智能体平台演进** | Gemini CLI | Agent、Hook、MCP、SDK 基础齐全，Subagents 正成为核心产品方向 |
| **可用但企业基础仍需补强** | GitHub Copilot CLI | GitHub 生态优势明显，但 OAuth、凭据、内存和 checkpoint 仍是关键短板 |
| **快速迭代中的多后端平台** | OpenCode | 功能与性能推进快，Code Mode 和 MCP 生命周期仍处于快速修正期 |
| **实验性高频迭代** | jcode | preview 版本、PR 数量极高，安全、测试隔离与进程治理尚未完全收敛 |
| **底层运行时与扩展平台化阶段** | pi | 基础工程能力扎实，Durable、模型路由和长上下文仍在建设 |
| **早期、轻量探索阶段** | Kimi Code CLI | 社区增量有限，Hook 安全集成刚出现 |

---

## 6. 值得关注的趋势信号

### 6.1 “Agent 能否执行”正在让位于“执行是否可信”

单纯能够调用工具已不再是充分条件。多个项目开始要求：

- 操作是否真正成功，而不仅是“没有报错”；
- 权限拒绝原因是否完整传回模型；
- 重试是否会重复产生副作用；
- 失败是否会显式结束，而不是无限挂起；
- 输出和资源是否可被限制、取消和回收。

Claude Code 的 `edit-verifier`、Gemini CLI 的失败重试工具调用清理、OpenCode 的 Code Mode 错误透传，均体现这一变化。

**开发建议**：构建 Agent 时，应把工具调用设计成具有确认、超时、幂等键、可观测错误和补偿逻辑的事务，而不是普通函数调用。

---

### 6.2 Hook 和插件正在成为 Agent 的安全控制平面

社区不再满足于“扩展模型能力”，而是要求扩展系统能够：

- 在工具执行前实施策略；
- 在工具执行后验证结果；
- 观察 Agent、子 Agent 和跨会话生命周期；
- 阻止危险命令；
- 明确区分拒绝、超时和执行失败。

Kimi Code CLI 的 HOL Guard、Claude Code 的 `edit-verifier`、Gemini CLI 的 ACP Hook 接入，是这一趋势的代表。

**开发建议**：Hook 协议应优先定义稳定的阻断语义、退出码、结构化反馈和默认失败策略，避免各扩展自行解释错误。

---

### 6.3 MCP 的竞争焦点已转向连接级隔离和身份生命周期

MCP 生态正在经历类似“数据库连接池治理”的阶段：

- Codex 用聊天级 lease 隔离共享连接；
- OpenCode 补齐并发权限审批和进程回收；
- Gemini CLI 补齐工具发现分页；
- Copilot CLI 暴露 OAuth 注册过期、token 缓存和状态型服务探测问题。

**开发建议**：MCP 集成应把服务发现、OAuth 注册、token 刷新、连接租约、调用权限、进程回收作为一条完整状态机设计，而不是若干独立步骤。

---

### 6.4 长会话将成为 Agent 产品的核心分水岭

37.3 GiB 内存膨胀、rollover 失败、上下文重建、历史回滚和 thinking block 重放兼容问题表明，模型能持续工作并不等于产品能持续运行。

OpenCode 将 WAL 写入降低 **84.4%**，Gemini CLI 修复历史回滚，pi 探索服务端 Message Threads，都是正确方向。

**开发建议**：从第一版就设计会话分段存储、checkpoint、上下文压缩、增量请求、输出截断、恢复一致性和资源预算，而不是在用户长时间使用后再补丁式处理。

---

### 6.5 配置作用域隔离将成为企业采用的基本要求

多个项目都暴露出“单线程修改影响全局”或“静默 fallback”问题：

- Codex：Fast mode 改变全局 service tier；
- pi：默认模型被 fallback 随机替换；
- Claude Code：项目规则与后台会话规则发生覆盖；
- Gemini CLI：策略作用域仍以全局为主；
- Copilot CLI：企业 Registry 策略与仓库 MCP 配置冲突。

**开发建议**：模型、服务等级、权限、策略、MCP 配置和额度策略都应明确区分全局、项目、会话和线程四级作用域，并让覆盖关系可解释。

---

### 6.6 桌面端已从“附加工具”升级为核心入口，但升级回归成为主要风险

Codex 和 Claude Code 的桌面问题高度集中在更新之后；OpenCode 和 jcode 又暴露出后台进程未退出、子进程残留等问题。这说明 Desktop 正在承载会话、项目、浏览器、权限和生命周期管理，但迁移与资源回收尚未完全成熟。

**开发建议**：桌面端发布应增加会话索引迁移、授权保留、进程树回收和旧新版本兼容性测试；这些应作为发布门禁，而不是普通 Issue 修复。

---

### 6.7 “安全默认值”与“开发效率”需要产品化平衡

当前安全诉求集中在沙箱、default-deny、指令边界、危险命令门控和 SBOM 证据真实性；与此同时，开发者又需要合法测试密码、可信目录放行、私有 LAN 服务和异步后台任务。

**开发建议**：不要只提供全局“全开/全关”。更合理的方案是：

- 默认拒绝高风险操作；
- 按项目或工作区显式声明信任边界；
- 对私有地址、测试凭据和开发服务器提供可审计的例外；
- 对审批超时、hook 异常和安全服务失联采用确定的 fail-open/fail-closed 策略。

---

## 综合判断

当前 AI CLI 生态已经进入**执行平台化阶段**。领先项目不再主要靠新增命令或模型名称形成差异，而是通过四类能力竞争：

1. **扩展控制面**：Hooks、Plugins、Mods、Subagents；
2. **执行可靠性**：取消、超时、幂等、恢复、进程回收；
3. **资源与成本治理**：上下文压缩、输出限制、并发配额、额度透明；
4. **跨端与企业治理**：身份、权限、策略作用域、Desktop 一致性。

对技术决策者而言，短期内不宜只依据模型效果或功能数量选型。更可靠的评估维度应是：**失败是否可恢复、权限是否可解释、会话是否可信、工具是否可隔离、配置是否作用域化，以及升级后状态是否保持连续**。

---

## 各工具详细报告

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills 社区热点

> 数据来源: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills 社区热点报告

> 数据截止：2026-10-29。  
> 说明：所给 PR 的“评论数”字段均为 `undefined`，因此以下排行主要依据 PR 的社区关注度、讨论活跃度、问题影响面、持续更新时间和功能代表性筛选，不能视为严格的评论数排名。

## 1. 热门 Skills 排行

| 排名 | Skill / PR | 功能与社区热点 | 当前状态 |
|---|---|---|---|
| 1 | [mcp-builder 兼容性修复 #1742](https://github.com/anthropics/skills/pull/1742) | 修复 MCP 2.x 中客户端重命名及自定义 HTTP Header 配置方式，支持 `mcp>=2.0.0` 的 `streamable_http_client`。直接关系 MCP 服务接入的实际可用性。 | **Open** |
| 2 | [skill-creator 触发评测修复 #1298](https://github.com/anthropics/skills/pull/1298) | 修复并行评测互相干扰、Windows 下子进程管道处理错误，以及运行时失败被误判为“未触发”等问题，目标是提高 Skill 触发率评测的可信度。 | **Open** |
| 3 | [webapp-testing 安全加固 #1980](https://github.com/anthropics/skills/pull/1980) | 移除 `with_server.py` 中 `shell=True` 的命令执行方式，降低命令注入风险。该 PR 更新至 10 月下旬，反映测试自动化中的安全治理正在升温。 | **Open** |
| 4 | [skill-creator 直接执行与路径修复 #1681](https://github.com/anthropics/skills/pull/1681) | 修复 `package_skill.py` 无法作为独立脚本运行的问题，并更新过时的使用路径和 CLI 文案，直接改善 Skill 打包与发布体验。 | **Open** |
| 5 | [skill-creator YAML 解析修复 #1997](https://github.com/anthropics/skills/pull/1997) | 正确解析 YAML frontmatter 中的标量、引号和转义字符，避免评测或描述优化收到的元数据与 `SKILL.md` 实际内容不一致。 | **Open** |
| 6 | [DOCX 修订验收修复 #1792](https://github.com/anthropics/skills/pull/1792) | 将 LibreOffice 超时视为错误，并在成功前验证输出文件已不存在修订标记，增强文档修改结果的可验证性。 | **Open** |
| 7 | [前端设计 Skill 可执行性增强 #210](https://github.com/anthropics/skills/pull/210) | 重写 `frontend-design` 的说明，使指令更具体、可执行且内部一致，减少“写了原则但模型不知道下一步怎么做”的问题。 | **Open** |
| 8 | [文档排版质量控制 Skill #514](https://github.com/anthropics/skills/pull/514) | 新增文档排版检查能力，覆盖孤行寡行、标题悬挂、编号错位等 AI 生成文档常见缺陷。虽然 PR 创建较早，但体现了稳定且普适的文档质量需求。 | **Open** |

### 排名观察

- **Skill 基础设施类改进占据主导**：前五名中有四项直接改进 `skill-creator` 或 `mcp-builder`。
- **“可验证”比“会生成”更受重视**：评测是否真实触发、命令是否安全执行、输出是否通过验收，正在成为核心质量指标。
- 热门 PR 的共同特征不是单纯增加功能，而是修复影响真实工作流的兼容性和正确性问题。

---

## 2. 社区需求趋势

### 2.1 企业级 Skill 共享与分发

- [组织级 Skill 共享 #228](https://github.com/anthropics/skills/issues/228) 是最典型的平台需求之一。
- 用户希望直接共享、下载和组织级维护 Skill，替代当前通过 Slack、Teams 传递 `.skill` 文件，再逐个上传的流程。
- 社区期待的不只是文件分发，还包括版本管理、权限控制、审计和组织内统一维护。

### 2.2 Skill 评测、触发机制与质量门禁

- [`run_eval.py` 触发率为 0% #556](https://github.com/anthropics/skills/issues/556) 暴露了评测工具与 Claude Code 实际触发机制之间的偏差。
- [Reasoning Quality Gate Pipeline #1385](https://github.com/anthropics/skills/issues/1385) 提出“任务前校准—对抗式审查—交付验证”的完整质量门禁。
- 社区需要的不只是生成内容，还需要可重复的评测、回归检测、交付前审查和客观验收。

### 2.3 上下文与长期记忆管理

- [compact-memory Skill 提案 #1329](https://github.com/anthropics/skills/issues/1329) 希望用紧凑、符号化的表示管理长任务状态和持久记忆。
- [`claude-api` 一次注入约 15.6 万 token #1487](https://github.com/anthropics/skills/issues/1487) 则从另一侧反映上下文预算压力。
- 未来需求集中在：按需加载、分层记忆、上下文压缩、长期任务状态恢复和 Token 成本控制。

### 2.4 安全、信任边界与权限治理

- [社区 Skill 冒用 Anthropic 命名空间 #492](https://github.com/anthropics/skills/issues/492) 是评论最多的 Issue，聚焦官方与社区 Skill 的身份区分、来源验证和信任边界。
- [Agent Governance Skill #412](https://github.com/anthropics/skills/issues/412) 聚焦策略执行、威胁检测、信任评分和审计轨迹。
- [skill-creator eval-viewer XSS #1394](https://github.com/anthropics/skills/issues/1394) 以及 [webapp-testing 命令注入 #1980](https://github.com/anthropics/skills/pull/1980) 表明，Skill 自带脚本和 HTML 查看器的安全性也是高频诉求。

### 2.5 软件测试与 Web 应用自动化

- [Web 测试元素发现修复 #1976](https://github.com/anthropics/skills/pull/1976) 改善 textarea、select 等控件的识别。
- [PPTX 缩略图参数校验 #1975](https://github.com/anthropics/skills/pull/1975) 强调在昂贵渲染操作前提前失败。
- 社区期待更完整的测试闭环：自动生成测试、浏览器交互验证、失败诊断、截图与回归检查，以及明确验收结果。

### 2.6 高质量文档生成与格式支持

- [DOCX XML 命名空间问题 #2018](https://github.com/anthropics/skills/issues/2018) 和 [LibreOffice 超时误报 #1792](https://github.com/anthropics/skills/pull/1792) 指向同一需求：生成结果必须结构合法、可打开、且可自动验收。
- [ODT Skill #486](https://github.com/anthropics/skills/pull/486) 反映开放文档格式仍有明显供给缺口。
- [document-typography #514](https://github.com/anthropics/skills/pull/514) 则显示用户开始从“能生成文档”转向关注专业排版质量。

### 2.7 垂直领域工作流

- [Notion Spec 到实现计划 #1245](https://github.com/anthropics/skills/pull/1245) 聚焦规格拆解、任务生成、验收标准和进度追踪。
- [SCNet HPC Skill #1615](https://github.com/anthropics/skills/pull/1615) 聚焦 SSH、Slurm 和集群作业。
- [智能合约审计 Skill #1771](https://github.com/anthropics/skills/pull/1771) 聚焦 Solidity/Rust 静态分析与链上审计证明。
- 这些提案显示社区正从通用 Skill 转向“输入专业资料—执行领域工作流—产出可验证结果”的垂直自动化。

---

## 3. 高潜力待合并 Skills

> 以下均为当前仍处于 **Open** 状态的 PR。鉴于 PR 评论数缺失，“高潜力”依据影响范围、更新活跃度和落地价值判断。

### 第一梯队：近期可能直接落地

1. **[skill-creator YAML frontmatter 解析修复 #1997](https://github.com/anthropics/skills/pull/1997)**  
   修复范围明确，属于评测和描述优化的基础能力，预计较容易合入。

2. **[skill-creator 打包脚本直接执行修复 #1681](https://github.com/anthropics/skills/pull/1681)**  
   直接解决常见安装、打包和发布阻塞，且截至 10 月下旬仍有更新。

3. **[webapp-testing 移除 `shell=True` #1980](https://github.com/anthropics/skills/pull/1980)**  
   安全修复价值高，变更范围集中，适合快速进入主线。

4. **[DOCX 修订验收修复 #1792](https://github.com/anthropics/skills/pull/1792)**  
   将“执行完成”升级为“结果已验证”，能显著减少文档 Skill 的假成功。

5. **[PPTX 参数前置校验 #1975](https://github.com/anthropics/skills/pull/1975)**  
   属于低成本、高确定性的稳定性改进，且仍在持续更新。

### 第二梯队：功能价值高，但需进一步评审

6. **[mcp-builder MCP 2.x 兼容修复 #1742](https://github.com/anthropics/skills/pull/1742)**  
   对 MCP 2.x 用户影响重大，但涉及客户端 API 和 Header 行为，需更完整的集成验证。

7. **[skill-creator 触发评测修复 #1298](https://github.com/anthropics/skills/pull/1298)**  
   解决 Windows、并发命令探测和失败分类等复杂问题，落地价值高，但测试覆盖要求也高。

8. **[Web 元素发现修复 #1976](https://github.com/anthropics/skills/pull/1976)**  
   变更小、用户痛点明确，适合快速合入并改善自动化测试准确性。

### 值得关注的垂直与新增能力

9. **[Notion Spec to Implementation + Quantitative Resume Auditor #1245](https://github.com/anthropics/skills/pull/1245)**  
   将规格拆解、实现计划、进度追踪和量化审计串联起来，垂直工作流完整度较高；但 PR 持续时间较长，需确认维护活跃度。

10. **[SCNet HPC Skill #1615](https://github.com/anthropics/skills/pull/1615)**  
    在 HPC、SSH、Slurm 场景中具备明确差异化，适合面向研究计算社区推广。

11. **[ProofCore Contract Auditor #1771](https://github.com/anthropics/skills/pull/1771)**  
    智能合约静态分析与链上证明结合，概念新颖；但涉及第三方服务、链上写入和可信度问题，评审门槛较高。

12. **[Markdown 转视频与配音 Skill #1703](https://github.com/anthropics/skills/pull/1703)**  
    覆盖文档到视频的完整内容生产链路，市场感知强；需要关注媒体依赖体积、生成质量、许可证及零成本方案的可复现性。

---

## 4. Skills 生态洞察

**社区当前最集中的诉求，是让 Skills 从“能生成内容的提示词集合”升级为安全、可触发、可验证、可共享且能稳定执行复杂工作流的生产级软件组件。**

其中最值得持续关注的四条主线是：

1. **可信执行**：消除命令注入、XSS、假成功和运行时错误。  
2. **可靠评测**：确保 Skill 能被正确触发，并建立可重复的质量门禁。  
3. **组织级复用**：降低安装、共享、版本管理和权限治理成本。  
4. **上下文效率**：通过按需加载和结构化记忆支持长任务运行。

---

# Claude Code 社区动态日报

**日期：2026-10-29**  
**数据范围：过去 24 小时内更新的 Issues 与 Pull Requests**

## 今日速览

今日社区讨论主要围绕 **Claude Code 的可扩展性、使用额度异常消耗、Desktop 端稳定性与 Agent 自动化能力** 展开。最受关注的 Mods 扩展机制提案已累计 **275 条评论、131 个点赞**，但过去 24 小时没有新版本发布；近期新增问题则集中在 macOS/Windows 更新后的权限回归、用量计费异常，以及后台 Agent 被权限提示阻塞等场景。

---

## 版本发布

过去 24 小时内 **无新版本发布**。

---

## 社区热点 Issues

### 1. Mods：让 Claude Code 获得更强的可扩展性

社区呼吁通过 Mods、Hooks 和 Plugins 扩展 Claude Code，使外部工具能够更自然地增强模型能力，而不仅是依赖提示词或 MCP。该提案仍在快速收敛设计，官方更新称相关功能已经上线并正在根据社区反馈迭代。

**社区热度：** 275 条评论、131 个点赞，为今日最热门 Issue。  
**重要性：** 它可能成为 Claude Code 扩展体系的核心入口，影响插件、工具调用和工作流自动化。

链接：[Issue #91870](https://github.com/anthropics/claude-code/issues/91870)

---

### 2. Headless 模式的 5 小时额度消耗约为交互模式的 1.8 倍

报告者称，在相同工作负载下，`claude -p`（`sdk-cli`）每 token 消耗的 5 小时窗口额度约为交互式 CLI 的 **1.8 倍**。该问题直接影响 SDK、CI/CD 和自动化服务的成本估算。

**社区热度：** 59 条评论、101 个点赞。  
**重要性：** 若属实，将显著改变 Agent 服务的单位调用成本与限额管理策略。

链接：[Issue #97074](https://github.com/anthropics/claude-code/issues/97074)

---

### 3. 建议增加 `/delete` 命令以删除当前会话

用户希望可以通过显式命令删除当前会话，避免会话长期保留在历史记录中。该需求获得了较高关注，也反映出本地会话数据管理正在成为独立需求。

**社区热度：** 24 条评论、100 个点赞。  
**重要性：** 会话删除能力对隐私、存储清理和可审计工作流均有价值。

链接：[Issue #26904](https://github.com/anthropics/claude-code/issues/26904)

---

### 4. Desktop 端支持自定义主题与强调色

Desktop 目前仅提供浅色、深色和高对比度主题，用户希望它与 CLI 的自定义主题能力对齐，以改善多窗口和多显示器环境下的识别体验。

**社区热度：** 24 条评论、81 个点赞。  
**重要性：** 这是 Desktop 与 CLI 功能一致性的直接缺口，也体现用户对桌面端个性化体验的需求。

链接：[Issue #79305](https://github.com/anthropics/claude-code/issues/79305)

---

### 5. Windows Desktop 更新后内置 Routines 侧栏被强制隐藏

Claude Desktop 2.37337.1 的 Windows Store/MSIX 版本在更新后始终隐藏内置的 **Routines** 侧栏区域，且没有可见的开启开关，报告标签中已包含 `regression`。

**社区热度：** 23 条评论、38 个点赞。  
**重要性：** 这是更新引入的功能回归，可能直接影响依赖 Routines 的用户和自动化流程。

链接：[Issue #102150](https://github.com/anthropics/claude-code/issues/102150)

---

### 6. 密码输入的硬性拦截妨碍合法开发测试流程

Claude Code 出于安全考虑拒绝输入密码，但该策略也阻止了开发者使用自有测试账号登录本地或自有测试服务器。社区建议提供由权限控制、仅针对可信开发环境的显式选择机制。

**社区热度：** 20 条评论、29 个点赞。  
**重要性：** 议题涉及安全默认值与开发效率之间的平衡，也是 Agent 自动执行端到端测试时常见的实际障碍。

链接：[Issue #78160](https://github.com/anthropics/claude-code/issues/78160)

---

### 7. macOS 内置浏览器无法使用 Passkey/WebAuthn 登录

macOS 内置浏览器无法完成由平台认证器或 Touch ID 支持的 Passkey 登录，报告者因此无法登录 GitHub。问题阻碍了需要 WebAuthn 的开发者工作流。

**社区热度：** 8 条评论、12 个点赞。  
**重要性：** 内置浏览器是 Agent 操作网页的重要载体，认证能力缺失会限制登录后任务及外部服务集成。

链接：[Issue #77473](https://github.com/anthropics/claude-code/issues/77473)

---

### 8. Ctrl-G 打开外部编辑器时希望保留对话可见

当前使用 `Ctrl-G` 调出外部编辑器后，对话区域不可见；用户希望在编辑期间继续查看上下文，以减少反复切换带来的信息损耗。

**社区热度：** 7 条评论、25 个点赞。  
**重要性：** 这是高频 TUI 交互中的上下文连续性问题，改进成本相对可控，用户需求明确。

链接：[Issue #20045](https://github.com/anthropics/claude-code/issues/20045)

---

### 9. 用量计费疑似回归，Weekly Limit 消耗明显加快

多名用户报告在未明显改变使用模式的情况下，周额度消耗速度显著增加；其中一项报告称五小时窗口过去约消耗周额度的 10%，近期却消耗至 30%。

**社区热度：** 该主 Issue 有 9 条评论、3 个点赞，另有多个相关报告。  
**重要性：** 计费透明度是自动化工具采用的基础。如果额度统计口径或实际 token 消耗发生回归，会直接影响团队预算与用户信任。

链接：[Issue #102667](https://github.com/anthropics/claude-code/issues/102667)  
相关报告：[Issue #105240](https://github.com/anthropics/claude-code/issues/105240)、[Issue #105125](https://github.com/anthropics/claude-code/issues/105125)

---

### 10. 后台 Agent 被权限提示无限期阻塞

后台自主任务运行期间遇到未知权限请求后，整个任务可能一直等待人工确认，导致无人值守执行失败。

**社区热度：** 今日新增评论，另有多个 Agent/权限相关议题持续更新。  
**重要性：** 后台 Agent 的核心价值是无人值守；权限处理若不能提供安全且可控的超时或降级策略，会显著影响长时任务可靠性。

链接：[Issue #105184](https://github.com/anthropics/claude-code/issues/105184)

---

## 重要 PR 进展

> 过去 24 小时仅更新了 **2 个 PR**，以下按重要性列出全部更新。

### 1. `feat(plugins)`：新增 edit-verifier 插件，验证编辑是否成功

该插件通过 `PostToolUse` Hook 检查 Edit 工具的执行结果，避免目标文本因空白差异或代码已被修改而未匹配时，Claude 仍错误地认为编辑成功并继续后续操作。

**价值：**  
- 提升代码编辑流程的可验证性；
- 降低 Agent 基于错误假设继续执行的风险；
- 为插件生态中的“操作后校验”模式提供参考实现。

链接：[PR #32755](https://github.com/anthropics/claude-code/pull/32755)

### 2. `docs`：修复仓库内过期的文档 URL

将仓库中的 `docs.anthropic.com` 和 `docs.claude.com` 替换为当前 `code.claude.com` 域名，共涉及 12 个文件、26 行变更；历史变更日志中的旧链接被有意保留。

**价值：**  
- 减少用户访问过期文档；
- 统一官方文档入口；
- 降低插件和集成开发者引用失效链接的概率。

链接：[PR #32753](https://github.com/anthropics/claude-code/pull/32753)

---

## 功能需求趋势

### 1. 扩展机制与插件生态

Mods、Hooks、Plugins 和编辑验证器成为今日最明确的技术方向。社区希望 Claude Code 提供可组合、可验证、可自动化的扩展机制，减少仅依赖提示词约束的脆弱性。

- [Issue #91870](https://github.com/anthropics/claude-code/issues/91870)
- [PR #32755](https://github.com/anthropics/claude-code/pull/32755)

### 2. 用量、限额与成本可观测性

多个 Issue 集中报告额度消耗加快、Headless 模式单位成本偏高以及睡眠中断触发的上下文重建问题。社区不仅需要修复，还希望官方明确额度计算、缓存命中、重试和后台任务消耗的口径。

- [Issue #97074](https://github.com/anthropics/claude-code/issues/97074)
- [Issue #102667](https://github.com/anthropics/claude-code/issues/102667)
- [Issue #102780](https://github.com/anthropics/claude-code/issues/102780)

### 3. Desktop 与 CLI 的功能一致性

自定义主题、Routines 可见性、MCP App 结构化输出和预批准目录管理，显示 Desktop 端正在快速扩张，但与 CLI、配置体系及安全模型之间仍存在缺口。

- [Issue #79305](https://github.com/anthropics/claude-code/issues/79305)
- [Issue #102150](https://github.com/anthropics/claude-code/issues/102150)
- [Issue #103809](https://github.com/anthropics/claude-code/issues/103809)
- [Issue #105859](https://github.com/anthropics/claude-code/issues/105859)

### 4. Agent 编排和跨会话通信

社区希望 Cloud Session、Remote Control CLI 和其他 Claude Code 会话能够互相发送消息、共享完成事件，并充当长期运行的协调器。这反映出需求正从单会话执行转向多 Agent 协作。

- [Issue #103124](https://github.com/anthropics/claude-code/issues/103124)
- [Issue #92540](https://github.com/anthropics/claude-code/issues/92540)

### 5. 权限与无人值守执行

社区重点关注后台权限阻塞、密码输入限制、规则优先级冲突，以及项目级 MCP 进程被误判为 stale。核心诉求是：在不削弱默认安全性的前提下，让可信项目能够明确声明自动化边界。

- [Issue #105184](https://github.com/anthropics/claude-code/issues/105184)
- [Issue #78160](https://github.com/anthropics/claude-code/issues/78160)
- [Issue #87996](https://github.com/anthropics/claude-code/issues/87996)
- [Issue #105857](https://github.com/anthropics/claude-code/issues/105857)

### 6. 浏览器、认证与 Web 操作能力

内置浏览器对 Passkey 的缺失、GitHub 连接失败，以及云端会话改写长 URL，说明浏览器 Agent 在认证、GitHub 集成和内容保真方面仍需加强。

- [Issue #77473](https://github.com/anthropics/claude-code/issues/77473)
- [Issue #105860](https://github.com/anthropics/claude-code/issues/105860)
- [Issue #105858](https://github.com/anthropics/claude-code/issues/105858)

### 7. 会话、项目数据与配置维护

社区提出删除当前会话、清理已删除项目遗留数据，并支持删除 Desktop 中预批准的目录。整体趋势是增强用户对本地状态的可见性和可撤销性。

- [Issue #26904](https://github.com/anthropics/claude-code/issues/26904)
- [Issue #105188](https://github.com/anthropics/claude-code/issues/105188)
- [Issue #105859](https://github.com/anthropics/claude-code/issues/105859)

---

## 开发者关注点

1. **额度消耗是否准确、可预测**  
   多个独立用户报告周额度快速下降或 Headless 模式成本偏高。对开发团队而言，token、缓存、重试和上下文重建的计费透明度比单纯提高额度更重要。

2. **长时后台任务不能被权限提示卡住**  
   Agent 已能持续运行数小时，但一次权限请求就可能让整个任务无限等待。需要明确的安全替代方案、可信目录策略及超时机制。

3. **自动更新不应破坏既有授权**  
   macOS 原生安装更新后因二进制路径变化反复触发 TCC 授权；Windows Desktop 更新后 Routines 被隐藏。版本迁移策略已成为实际生产力问题。

4. **编辑和工具调用必须“成功可验证”**  
   社区不满足于工具返回“未报错”，而是希望验证目标是否真正匹配、内容是否按预期修改。`edit-verifier` PR 反映了这一趋势。

5. **跨会话、跨 Agent 的协调能力正在成为刚需**  
   用户希望会话之间能够发送消息、报告完成状态，并由 Cloud Session 充当长期协调器，尤其适合团队级和长时间运行的自动化任务。

6. **浏览器自动化仍受认证能力限制**  
   Passkey、WebAuthn 和 GitHub 连接问题会阻断实际任务。内置浏览器若不能完整覆盖现代认证流程，其网页自动化适用性将持续受限。

7. **规则作用域需要更可预测**  
   路径作用域中的 `@` 导入在会话启动时被提前加载、后台会话的 Git 限制覆盖项目 `CLAUDE.md` 指令，均表明配置优先级和作用域边界仍不够清晰。

8. **IDE 与桌面端应快速跟进 CLI 能力**  
   `[1m]` 模型选择下 Effort/Ultracode 控件缺失、Desktop 自定义主题缺失、macOS 对话滚动出现重影，均说明多端一致性仍有较大提升空间。

链接：[Issue #105607](https://github.com/anthropics/claude-code/issues/105607)、[Issue #79305](https://github.com/anthropics/claude-code/issues/79305)、[Issue #105196](https://github.com/anthropics/claude-code/issues/105196)、[Issue #102932](https://github.com/anthropics/claude-code/issues/102932)

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex 社区动态日报

**日期：2026-10-29**  
**数据范围：GitHub `openai/codex` 过去 24 小时更新**

## 1. 今日速览

Windows 桌面端成为今日社区反馈焦点，问题集中在对话持久化、项目侧边栏、侧边聊天、浏览器访问及策略拦截等更新后回归。与此同时，Codex 工程侧继续强化 MCP 连接隔离、Code Mode 输出治理、会话恢复和 TUI 可扩展性；过去 24 小时发布了 `rust-v0.166.0-alpha.6` 与补丁版 `rust-v0.166.0-alpha.5.1`。

---

## 2. 版本发布

### `rust-v0.166.0-alpha.6`
- 今日最新 Rust alpha 版本。
- 本次数据仅提供版本标签，未披露详细变更日志；结合当日 PR 方向，主要工程活动涉及 **MCP 连接租约、Code Mode 输出截断、会话插件覆盖、状态栏渲染及环境启动重试**。
- [查看 Release](https://github.com/openai/codex/releases/tag/rust-v0.166.0-alpha.6)

### `rust-v0.166.0-alpha.5.1`
- `alpha.5` 的补丁版本，通常用于修正该 alpha 周期中的稳定性问题。
- 官方摘要未提供具体修复项。
- [查看 Release](https://github.com/openai/codex/releases/tag/rust-v0.166.0-alpha.5.1)

---

## 3. 社区热点 Issues

### 1. Windows 持久化对话提交与 fork 失败
- **Issue：** [#50428](https://github.com/openai/codex/issues/50428)
- Windows Desktop 可读取已有云端/持久化对话，但直接提交纯文本消息或从同目录 fork 时，会因 `AbsolutePathBuf` 缺少 base path 而在执行前失败。
- **重要性：** 直接影响 Windows 用户的核心对话流程，并暴露跨环境路径反序列化兼容性风险。
- **社区反应：** 37 条评论，为今日讨论最多的 Issue。

### 2. dot 无法读取用户创建的 Codex threads
- **Issue：** [#52873](https://github.com/openai/codex/issues/52873)
- dot 可以发现本地项目，却无法读取部分用户创建的线程，报错为 `unsupported placement format version` 和 `unsupported placement region`。
- **重要性：** 涉及 dot 与原生 Codex 会话格式的互操作，可能影响新旧任务迁移和跨端同步。
- **社区反应：** 31 条评论、9 个 👍，是今日社区认可度较高的问题之一。

### 3. ChatGPT Desktop 的本地 MCP 工具未暴露给 Chat
- **Issue：** [#38162](https://github.com/openai/codex/issues/38162)
- Windows Desktop 能成功发现本地 MCP 工具，但工具未出现在 Chat 会话的可调用范围内。
- **重要性：** MCP 已成为外部工具集成的关键接口；“能发现但不能调用”属于集成链路核心故障。
- **社区反应：** 21 条评论，表明需求集中且复现路径较明确。

### 4. Windows 更新后自动隐藏任务栏无法恢复
- **Issue：** [#52877](https://github.com/openai/codex/issues/52877)
- Codex 更新并最大化后，Windows 自动隐藏的任务栏不再出现。
- **重要性：** 属于高频桌面应用回归，影响窗口操作和工作流连续性。
- **社区反应：** 21 条评论、4 个 👍。

### 5. 桌面端后台持续读取无权访问的对话
- **Issue：** [#51572](https://github.com/openai/codex/issues/51572)
- Windows Desktop 重启后，后台 hydration 在短时间内对大量会话发起读取并收到 access denied；报告记录了 157 个会话、742 次请求。
- **重要性：** 不仅是错误提示问题，还涉及重复 I/O、权限边界和潜在性能开销。
- **社区反应：** 14 条评论，问题规模与可复现性受到关注。

### 6. macOS Computer Use 触发 XPC 重连循环与高 CPU
- **Issue：** [#37420](https://github.com/openai/codex/issues/37420)
- Computer Use 服务与 macOS `replayd` 形成 XPC connect/cancel 循环，空闲时 CPU 占用约 90%。
- **重要性：** 直接影响桌面端稳定性、续航和后台性能，属于高严重度系统集成问题。
- **社区反应：** 13 条评论、4 个 👍。

### 7. Windows Computer Use 无法识别 Chrome URL
- **Issue：** [#53053](https://github.com/openai/codex/issues/53053)
- `@oai/sky` 能枚举 Chrome 窗口，但 `get_window_state` 无法以足够置信度确定当前 URL，导致策略检查失败。
- **重要性：** URL 识别是浏览器自动化和策略执行的基础，影响云控制台等敏感站点操作。
- **社区反应：** 12 条评论。

### 8. Codex Desktop 更新后丢失本地项目分组
- **Issue：** [#53251](https://github.com/openai/codex/issues/53251)
- Windows 更新或重启后，侧边栏不再显示已有本地项目及对应会话分组，但底层数据仍存在且会话可打开。
- **重要性：** 属于会话索引/迁移回归，可能造成用户对数据丢失的误解。
- **社区反应：** 9 条评论。

### 9. dot 向原生任务发送后续消息时被拒绝
- **Issue：** [#50521](https://github.com/openai/codex/issues/50521)
- 即使存在明确的 owner authorization，dot 向已有原生本地 Codex 任务发送研究类后续消息仍被拒绝。
- **重要性：** 反映跨端授权、任务路由与消息 relay 的一致性问题。
- **社区反应：** 9 条评论。

### 10. 单线程 Fast mode 意外改变全局 service tier
- **Issue：** [#37666](https://github.com/openai/codex/issues/37666)
- 在一个已有线程中选择 Fast mode，会同时改变全局服务层级。
- **重要性：** 涉及配置作用域隔离，可能意外影响其他会话的延迟、成本和调度策略。
- **社区反应：** 6 条评论、7 个 👍，属于关注度较高且影响范围明确的回归。

---

## 4. 重要 PR 进展

> 今日展示的 PR 均已关闭；“关闭”不等同于已合并，最终是否进入目标分支仍需结合仓库状态确认。

### 1. 为共享 MCP 连接增加按聊天隔离的租约
- **PR：** [#57978](https://github.com/openai/codex/pull/57978)
- 协商 `codex/connection-lease` 扩展，为池化 stdio MCP 连接按聊天创建独立 lease，并将 host-owned ID 附加到工具调用和资源读取。
- **意义：** 降低共享 MCP 服务中的会话串扰和权限边界风险。

### 2. 启用 Code Mode 服务端输出截断
- **PR：** [#57870](https://github.com/openai/codex/pull/57870)
- Code Mode 会话开始遵循每会话的 `output_truncation` 设置，不再仅依赖客户端截断。
- **意义：** 改善超长工具输出的内存、传输和观察预算治理。

### 3. 在 Code Mode 运行时接入有界输出收集
- **PR：** [#57850](https://github.com/openai/codex/pull/57850)
- 将有界事件及输出收集接入运行时，限制原始事件通道和 cell 输出向量的无界增长。
- **意义：** 降低长任务和高输出量场景下的内存压力。

### 4. 增加有界 Code Mode 输出收集与渲染组件
- **PR：** [#57848](https://github.com/openai/codex/pull/57848)
- 保留文本前缀及滚动尾部，并设置独立的文本、二进制输出额度。
- **意义：** 为 Code Mode 提供可控且可预测的输出展示模型。

### 5. 会话取消时允许中断 Responses Lite 上游推理
- **PR：** [#57864](https://github.com/openai/codex/pull/57864)
- 新增默认关闭的 `interrupt_on_cancel` 功能，取消 turn 时可中断上游推理，并设置一秒清理期限。
- **意义：** 改善取消响应速度、资源回收及 WebSocket 会话替换行为。

### 6. 下一轮自动重试瞬时环境启动失败
- **PR：** [#57866](https://github.com/openai/codex/pull/57866)
- 当环境和 workspace 未变化时，允许下一轮重试此前因执行器暂时不可用而失败的操作。
- **意义：** 减少短暂基础设施抖动造成的整轮任务失败。

### 7. 保留恢复选择器的跨后端分页能力
- **PR：** [#57862](https://github.com/openai/codex/pull/57862)
- 避免慢速 session backend 阻塞其他后端继续分页，并让后到达的会话按正确排序插入，而不改变当前选择。
- **意义：** 提升会话恢复界面的响应性和一致性。

### 8. 在 MCP 配置刷新时应用会话级插件覆盖
- **PR：** [#57974](https://github.com/openai/codex/pull/57974)
- `refresh_mcp_config` 可替换显式的会话 `plugins` 覆盖，同时保留其他会话覆盖和用户设置；空 map 表示清空。
- **意义：** 改善动态 MCP 配置和插件会话隔离。

### 9. 为实验性状态栏引入 UI Tree 渲染器
- **PR：** [#57970](https://github.com/openai/codex/pull/57970)
- 新增默认关闭的 `tui_extensions_statusline`，支持文本、HTTP(S) 链接、行、间隔、分隔线等状态项。
- **意义：** 为插件化 TUI 状态栏和第三方扩展提供更稳定的渲染基础。

### 10. 支持 Vertex AI 的 TUI 登录配置流程
- **PR：** [#57857](https://github.com/openai/codex/pull/57857)
- 新增默认关闭的 `features.gcp_setup_wizard`，可配置 Google Cloud project、location 和凭据文件，并支持 ADC。
- **意义：** 推进多模型、多云提供商接入，降低 Vertex AI 初始配置成本。

---

## 5. 功能需求趋势

### 桌面端可靠性与会话管理
- Windows 更新后的会话不可提交、项目丢失、侧边聊天入口消失、后台重复 hydration 等问题高度集中。
- 用户开始要求更完整的 **对话删除、迁移状态可见性和会话恢复机制**。
- 典型需求：
  - [Windows 对话删除选项 #57993](https://github.com/openai/codex/issues/57993)
  - [侧边聊天回归 #57988](https://github.com/openai/codex/issues/57988)
  - [侧边聊天入口缺失 #57668](https://github.com/openai/codex/issues/57668)

### 浏览器、Computer Use 与远程自动化
- 社区不仅关注工具“能否启动”，还关注 URL 识别、策略授权、持久化允许规则和跨平台一致性。
- Chrome URL 识别、Windows browser host 不可用、macOS 浏览器策略限制及 dot 云浏览器崩溃构成主要反馈。
- [Windows Computer Use URL 识别 #53053](https://github.com/openai/codex/issues/53053)
- [Windows CLI @Browser 不可用 #57641](https://github.com/openai/codex/issues/57641)
- [Comet 持久化允许仍被策略限制 #57159](https://github.com/openai/codex/issues/57159)

### MCP 与插件生态
- 社区关注 MCP 工具发现、调用暴露、共享连接隔离以及插件级配置刷新。
- 后续重点可能从“能否安装 MCP”转向 **多聊天并发、会话级隔离和动态配置一致性**。
- [本地 MCP 未暴露给 Chat #38162](https://github.com/openai/codex/issues/38162)

### 模型与服务商支持
- 开发者希望 CLI 和 Desktop 支持更灵活的多提供商、多模型选择方式。
- 当日工程侧出现 Vertex AI 配置向导；社区也在推动按线程隔离不同模型或模式。
- [TUI Vertex AI 配置 PR #57857](https://github.com/openai/codex/pull/57857)
- [按线程支持 Daybreak 模型模式 #57980](https://github.com/openai/codex/issues/57980)

### TUI 可读性与可扩展性
- 长期会话中工具调用占据大量可视空间，开发者希望提供隐藏工具活动、简化状态栏及更清晰输出。
- [隐藏工具活动的 CLI 选项 #21252](https://github.com/openai/codex/issues/21252)
- [状态栏 UI Tree PR #57970](https://github.com/openai/codex/pull/57970)

### 性能、限流与资源隔离
- 关注点包括 macOS 高 CPU、后台重复读取、Code Mode 输出无界增长、模型容量误报，以及 Fast mode 污染全局配置。
- 这表明开发者希望 Codex 在长任务和并行会话下具备更清晰、可预测的资源边界。

---

## 6. 开发者关注点

1. **升级回归是当前最大风险**  
   Windows Desktop 近期更新后连续出现侧边聊天、项目列表、浏览器 host、usage limit indicator 等异常。团队应优先确认版本边界、迁移逻辑及 feature flag 与桌面构建的组合。

2. **会话数据“可见、可打开、可编辑”尚未形成稳定闭环**  
   底层数据存在但侧边栏不显示、dot 无法读取、follow-up 消息被拒绝、远端设备缺少线程等现象，说明线程索引、授权状态和跨端同步仍有不一致。

3. **MCP 正在从发现能力进入并发隔离阶段**  
   社区已不再满足于工具列表可见，而更关心工具能否实际调用、多个聊天是否共享连接状态，以及 session plugin override 是否被正确保留。当日按聊天 MCP lease 的 PR 正对应这一需求。

4. **Code Mode 的输出治理成为性能核心**  
   连续多个 PR围绕输出上限、服务端截断和运行时有界收集展开，说明 Code Mode 的主要工程瓶颈已从“能否执行”转向“如何控制长输出和内存增长”。

5. **取消与恢复语义需要更可靠**  
   用户反馈 UI 卡顿、消息投递状态不明确、取消后仍等待、恢复选择器被慢后端阻塞等问题。社区期待取消操作真正传播到上游，并在临时故障后自动恢复执行。

6. **策略拦截需要更透明、可诊断**  
   Windows 仅显示 `blocked by policy`、浏览器 host unavailable、Computer Use URL 置信度不足等，均需要明确区分“权限拒绝、平台不支持、宿主未启动、状态识别失败”四类原因。

7. **跨平台一致性仍不足**  
   相同浏览器能力在 Windows、macOS、Desktop、CLI 和 dot 中表现不同；部分功能只在特定宿主可用。开发者期待统一能力探测、错误语义和降级策略。

8. **长会话可读性需要专门设计**  
   工具调用刷屏、状态栏截断后链接错位、主题切换后输入框背景残留等问题，反映 TUI 的可扩展性增长已经快于默认界面的信息层级设计。

9. **并发会话需要配置作用域明确化**  
   Fast mode 意外影响全局、Daybreak 模式期望按线程生效、共享 MCP 连接需要独立 lease，均指向同一原则：模型、服务层级、MCP 状态和审批能力应尽可能按线程隔离。

10. **可观测性不足妨碍问题定位**  
    大量请求风暴、后台 hydration、CPU 循环和消息投递歧义都缺少足够的内置诊断信息。建议补充请求去重、后台任务日志、策略决策原因及会话状态转移记录。

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI 社区动态日报

**日期：2026-10-29**  
**项目：** [google-gemini/gemini-cli](https://github.com/google-gemini/gemini-cli)

## 1. 今日速览

- 过去 24 小时没有新的正式版本发布，仓库主要处于密集的缺陷修复、CI 完善和子智能体能力规划阶段。
- 当日 Issue 讨论高度集中在 **Subagents（子智能体）体系**：生命周期 Hook、异步与并行执行、持久化恢复、权限配置和内置示例成为主线。
- PR 侧重点则偏向 **稳定性与安全性**，包括重试时重复执行工具、会话历史丢失、ACP Hook 绕过、Windows/PTY 兼容以及 MCP 工具分页等问题。

---

## 3. 社区热点 Issues

### 1. 缺少 Subagent 生命周期 Hook 事件
[#15269 — Feature: Missing Subagent Hook Events](https://github.com/google-gemini/gemini-cli/issues/15269)

- 提议增加 `BeforeSubAgent`、`AfterSubAgent` 或 `SubAgentStart`、`SubAgentEnd` 等事件。
- 这是扩展现有 Hook 机制、补齐子智能体可观测性的关键入口。
- 讨论量最高，共 8 条评论，是今日社区最集中的议题。

### 2. 智能体应自动验证应用变更
[#17110 — Agent should run changes to validate app](https://github.com/google-gemini/gemini-cli/issues/17110)

- 强调为编码智能体建立“执行变更—运行验证—根据结果修正”的反馈闭环。
- 对自动编码、测试生成和减少人工验收依赖具有直接价值。
- 获得 5 条评论，是今日最热门的 Agent 能力类需求之一。

### 3. Subagent 配置能力：工具、策略、Hook、Skills 与 Schema
[#17760 — Subagent Configurability](https://github.com/google-gemini/gemini-cli/issues/17760)

- 讨论子智能体如何继承或独立配置工具白名单、Hook、Skills、Schema 和安全策略。
- 它决定多智能体系统能否兼顾灵活性、隔离性和可治理性。
- 已有 2 个点赞，讨论重点从“是否支持”转向具体配置边界。

### 4. Subagent 恢复与持久化
[#17758 — Subagent Resumability & Persistence](https://github.com/google-gemini/gemini-cli/issues/17758)

- 希望子智能体在进程重启或多次调用之间保留状态，并允许主智能体恢复既有对话。
- 可避免长任务因 CLI 退出、上下文压缩或会话切换而丢失。
- 获得 1 个点赞，说明可靠性与任务连续性已成为明确需求。

### 5. 本地子智能体支持原生异步启动
[#17757 — Local agents can be started async](https://github.com/google-gemini/gemini-cli/issues/17757)

- 允许模型将研究、测试等天然非阻塞任务直接作为异步子智能体启动。
- 目标是减少主智能体等待长任务造成的上下文占用和交互阻塞。
- 与并行执行、后台任务及非阻塞确认机制形成一组配套需求。

### 6. 默认启用 Hook 沙箱
[#15272 — Security: Default Hook Sandboxing](https://github.com/google-gemini/gemini-cli/issues/15272)

- 建议 Shell、脚本等 Hook 默认在受限沙箱中执行，以降低本地代码执行风险。
- 涉及文件系统、网络和进程权限，是 Hook 默认开放策略的重要安全补强。
- 获得 3 条评论，是今日安全方向最受关注的话题之一。

### 7. 异步子智能体的工具确认不应阻塞主会话
[#17756 — Tool confirmations are not blocking for async subagents](https://github.com/google-gemini/gemini-cli/issues/17756)

- 指出后台或异步子智能体触发工具审批时，应允许用户继续与主智能体交互。
- 当前同步确认队列会削弱异步执行的价值。
- 需求涉及确认队列、交互状态和权限策略的协同设计。

### 8. 用持久化文件任务跟踪替代 WriteToDo
[#18836 — Replace WriteToDo with Persistent File-Based Task Tracking](https://github.com/google-gemini/gemini-cli/issues/18836)

- 指出当前 Todo 仅保存在模型上下文中，存在 Context Rot、Token 成本高和跨会话丢失等问题。
- 提议使用文件实现 CRUD 式任务跟踪，让计划与进度可持久化、可审查。
- 对大型任务、多人协作和长时间运行项目具有较高现实价值。

### 9. 远程 Agent 的 OAuth 2.0 动态客户端注册
[#17604 — OAuth 2.0: Dynamic Client Registration](https://github.com/google-gemini/gemini-cli/issues/17604)

- 计划通过 RFC 8414 元数据发现注册端点，并自动注册 A2A 客户端。
- 可降低非交互式服务连接远程 Agent 的配置成本。
- 获得 3 条评论，与机器到机器认证共同构成 Remote Agents 的接入基础。

### 10. 支持按工作区自动应用策略
[#18397 — Support auto adding to a per workspace policy rather than a global policy](https://github.com/google-gemini/gemini-cli/issues/18397)

- 探索在具体工作区目录记录策略，而不是只依赖全局配置。
- 对多仓库、多项目和不同信任边界场景更有价值。
- 目前仍处于 stretch 阶段，反映出社区对企业级、作用域化策略管理的需求。

### 其他值得关注

- [`#15670` — 原生 Sub-agent 与 Skills 架构](https://github.com/google-gemini/gemini-cli/issues/15670)：主张以“专家团队”模式复用领域能力。
- [`#18283` — 整理仓库内的 Agent 示例](https://github.com/google-gemini/gemini-cli/issues/18283)：希望提供测试、构建、文档等可复用示例。
- [`#18287` — 共享内存与并行子智能体协作](https://github.com/google-gemini/gemini-cli/issues/18287)：为复杂协作奠定基础。
- [`#17120` — Parallel Tool Calling](https://github.com/google-gemini/gemini-cli/issues/17120)：旨在提升分析、规划和编辑效率。
- [`#18062` — Cloud Shell Lab Account API 报错](https://github.com/google-gemini/gemini-cli/issues/18062)：影响 Google Cloud 环境中的命令执行。

---

## 4. 重要 PR 进展

### 1. 修复流式重试导致的工具调用重复执行
[#30020 — Drop tool calls streamed by failed attempts on retry](https://github.com/google-gemini/gemini-cli/pull/30020)

- 中途重试时，前端可能同时收到失败尝试和成功尝试的工具调用事件。
- PR 丢弃失败尝试产生的调用，避免有副作用的命令被重复执行。
- 属于高价值的执行安全修复，对写文件、Shell 和外部 API 调用尤其重要。

### 2. 让 ACP 工具调用经过 Hook 策略
[#30022 — Run ACP tool calls through hooks](https://github.com/google-gemini/gemini-cli/pull/30022)

- 将编辑器驱动的 ACP 工具调用接入 `BeforeTool` 和 `AfterTool`。
- 修复 Hook 策略仅覆盖终端会话、可能绕过编辑器会话的问题。
- 对安全策略一致性和企业治理尤其重要。

### 3. 恢复会话时保留工具输出被遮蔽前的首条用户提示
[#30019 — Preserve session history during tool output masking](https://github.com/google-gemini/gemini-cli/issues/30019)

- 修复恢复会话时，首条用户提示因历史重写而丢失的问题。
- 保持 API 请求历史与持久化会话历史之间的语义一致。
- 对长会话恢复和上下文完整性有直接影响。

### 4. 取消工具结果续传时保留已提交轮次
[#30017 — Keep committed turns when cancelling a tool-result continuation](https://github.com/google-gemini/gemini-cli/pull/30017)

- 修复用户取消请求时，历史被回滚到原始提示之前的问题。
- 避免已经完成的模型轮次和工具修改从会话记录中消失。
- 能降低“操作已发生但历史未记录”的审计与恢复风险。

### 5. 支持 MCP 工具发现分页
[#29843 — Paginate MCP tool discovery using nextCursor](https://github.com/google-gemini/gemini-cli/pull/29843)

- 根据 `tools/list` 返回的 `nextCursor` 拉取后续页面。
- 修复大型 MCP 服务工具超出单页后被静默丢弃的问题。
- 提升了 MCP 生态的扩展性和工具可见性。

### 6. Windows IDE 进程检测改用 PowerShell CIM 回退
[#30006 — Use PowerShell CIM fallback for Windows IDE process lookup](https://github.com/google-gemini/gemini-cli/pull/30006)

- 在 PowerShell 进程表快照失败或缺失当前 PID 时，不再错误调用 Unix-only 的 `ps`。
- 修复 IDE 集成在 Windows 下可能静默返回空命令的问题。
- 对 Windows 开发环境和 IDE 联动体验更加稳定。

### 7. 修复 TortoiseGitPlink 的 SSH 客户端识别
[#29921 — Recognize TortoiseGitPlink as a PuTTY-family SSH client](https://github.com/google-gemini/gemini-cli/pull/29921)

- 将 `TortoiseGitPlink.exe` 识别为 PuTTY 系客户端。
- 避免错误追加 OpenSSH 参数而破坏非交互式 Git 操作。
- 对 Windows Git 工作流是明确而实用的兼容性修复。

### 8. 恢复会话成功后再生效工作区目录
[#29866 — Restore workspace directories only after resumed chat succeeds](https://github.com/google-gemini/gemini-cli/pull/29866)

- 将工作区目录恢复操作移动到 `resumeChat()` 成功之后。
- 避免恢复失败时，目录仍残留在活动工作区上下文中。
- 改善会话恢复失败时的环境隔离与可预测性。

### 9. 重新启用 SDK 测试并修复 AgentLoopContext Mock
[#30023 — Run SDK tests in PR CI and fix AgentLoopContext mock](https://github.com/google-gemini/gemini-cli/pull/30023)

- 重新启用 6 个被跳过的 `GeminiCliSession.sendStream()` 单元测试。
- 更新 `Config` Mock 以匹配 `AgentLoopContext` 接口。
- 将 SDK 纳入 PR CI 测试分片，提升 SDK 变更的回归保障。

### 10. 修复 API 请求头与请求体超时不可配置
[#29756 — Make API request headers and body timeouts configurable](https://github.com/google-gemini/gemini-cli/pull/29756)

- 新增 `general.requestHeadersTimeoutMs` 和 `general.requestBodyTimeoutMs`。
- 允许所有认证方式调整模型 API 超时时间。
- 可缓解长思考、长时间无数据输出时出现 `UND_ERR_BODY_TIMEOUT` 并触发重放的问题。

### 补充进展

- [#29989 — 修复错误的 `\n` 转义处理](https://github.com/google-gemini/gemini-cli/pull/29989)：避免文件编辑、字符串、正则和代码块中的有效转义被破坏。
- [#29746 — 修复 PowerShell 命令替换检测误报](https://github.com/google-gemini/gemini-cli/pull/29746)：修正双引号和嵌套引号状态跟踪。
- [#30013 — 精确移除仓库 URL 末尾的 `.git`](https://github.com/google-gemini/gemini-cli/pull/30013)：避免误删仓库名中间的 `.git` 字符串。
- [#30018 — 修复孤儿 PTY 从属文件描述符测试](https://github.com/google-gemini/gemini-cli/pull/30018)：通过 Mock `realpathSync` 消除 macOS 环境差异。

---

## 5. 功能需求趋势

### 1. Subagents 成为首要产品方向

今日议题几乎都围绕子智能体展开，需求覆盖：

- 生命周期 Hook 与可观测性
- 工具、策略、Skills 和 Schema 的细粒度配置
- 异步启动、后台执行和并行执行
- 持久化、恢复及跨会话继续
- 内置 Agent、模板创建与仓库发现
- 最终响应协议、纯编排模式和共享内存
- 子智能体示例与行为评测

这表明 Gemini CLI 正从单 Agent 对话工具向可扩展的多智能体执行平台演进。

### 2. 从“生成代码”转向“验证代码”

[#17110](https://github.com/google-gemini/gemini-cli/issues/17110) 代表明显趋势：编码智能体需要自动运行测试、构建和应用检查，并将结果用于下一轮修正。

### 3. Hook 策略扩展与企业治理

社区不仅关注 Hook 的事件覆盖，还关注：

- 子智能体 Hook
- ACP/IDE 会话中的 Hook 一致性
- 默认沙箱
- 企业级启停控制
- 按工作区隔离策略

这反映出 Hook 正从开发者扩展机制逐步变成核心安全治理层。

### 4. 异步与并行化提升任务吞吐

异步子智能体、并行工具调用、并行子智能体协作和非阻塞确认共同指向同一目标：让 CLI 能承担更长时间、更复杂的后台任务，同时保持主会话响应流畅。

### 5. 持久化任务管理替代纯上下文 Todo

[#18836](https://github.com/google-gemini/gemini-cli/issues/18836) 反映出社区希望减少对模型上下文作为唯一状态存储的依赖，转向可检查、可恢复的文件型任务系统。

### 6. Remote Agents 与机器间认证

A2A、OAuth Client Credentials 和动态客户端注册表明社区正在探索 CLI 从交互式开发助手向非交互式 Agent 客户端的扩展。

### 7. IDE、ACP 与跨平台体验

Windows IDE 进程检测、ACP Hook 接入和 Windows Git/SSH 兼容修复说明 IDE 集成与 Windows 支持仍是实际落地中的高频问题。

### 8. 可靠性、上下文完整性和幂等执行

近期 PR 集中处理重试副作用、会话历史回滚、工具输出遮蔽、PTY 和 MCP 分页。开发者关注点已从“功能是否可用”扩展到“状态是否可信、操作是否幂等、失败是否可恢复”。

---

## 6. 开发者关注点

- **子智能体何时真正可用**：大量 Issue 仍处于 epic、调查或 need-information 状态，社区希望尽快形成稳定、可配置且可恢复的正式能力。
- **异步执行不能被交互机制拖慢**：工具确认、后台任务和主会话之间需要更清晰的权限与交互模型。
- **重试必须避免重复副作用**：工具调用重试可能重复执行写操作或命令，幂等性是高频风险点。
- **会话恢复不能丢失历史**：取消操作、工具输出遮蔽和恢复失败都可能破坏已提交轮次或污染工作区状态。
- **Hook 必须默认安全且跨入口一致**：Shell Hook 沙箱、ACP Hook 和企业策略开关是高频安全诉求。
- **长思考请求需要可配置超时**：默认超时可能中断长时间无输出的模型请求，重放又可能造成重复执行。
- **大型 MCP 服务不应静默丢工具**：分页支持是 MCP 工具发现可靠性的关键修复。
- **Windows 工作流仍需持续打磨**：IDE 进程检测、PowerShell 解析、PuTTY/TortoiseGit SSH 兼容均是具体痛点。
- **任务状态需要脱离上下文保存**：纯上下文 Todo 带来的 Token 成本、Context Rot 和跨会话丢失问题获得明确关注。

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI 社区动态日报

**日期：2026-10-29**  
**数据范围：过去 24 小时**  
**来源：[github/copilot-cli](https://github.com/github/copilot-cli)**

---

## 1. 今日速览

过去 24 小时没有新的 Release，但社区更新活跃，焦点集中在 **MCP OAuth 认证、跨平台凭据管理、长会话稳定性与模型兼容性**。多个 Issue 暴露了远程 MCP 登录失败、Windows/macOS 凭据缓存异常，以及并行 Agent 会话内存膨胀等问题。

与此同时，安装脚本可靠性成为 PR 热点，校验和验证、重复 PATH 配置、临时目录清理和卸载支持均获得更新。

---

## 2. 版本发布

过去 24 小时**无新版本发布**。

---

## 3. 社区热点 Issues

### 1. 模型列表请求返回 403：企业已启用 Copilot CLI 仍无法使用
[#552](https://github.com/github/copilot-cli/issues/552)

- 组织已启用 Copilot CLI，但调用模型列表时持续收到 `403 unauthorized: not authorized to use this Copilot feature`。
- Issue 获得了 **31 条评论**，是本期讨论最热烈的问题。
- 重要性在于：问题可能同时涉及企业策略、账号授权状态、CLI 版本及服务端 entitlement，对企业落地形成直接阻塞。

### 2. 长并行 Agent 会话内存暴涨至 37 GiB
[#5254](https://github.com/github/copilot-cli/issues/5254)

- Copilot CLI 1.0.103 在约 6 小时 19 分的长会话中，主进程物理内存达到 **37.3 GiB**，峰值 37.6 GiB，并出现 10.7 GiB 碎片化。
- 涉及 **1.33 亿次 malloc**；在 32 GiB Apple Silicon 设备上可能耗尽物理内存并导致系统交换和间歇性无响应。
- 这是典型的长期运行可靠性问题，涉及会话恢复、Agent 并发和内存生命周期管理。

### 3. Windows Entra Broker 的 MCP 令牌缓存始终为空
[#5236](https://github.com/github/copilot-cli/issues/5236)

- 通过 Microsoft Entra Account Broker 登录 HTTP MCP 服务后，token cache 文件仍为 0 字节。
- 同一进程内 `/restart` 可以复用认证，但每次启动新进程都会再次弹出账号选择器。
- 反映出 Windows 身份代理、令牌落盘和跨进程认证恢复之间可能存在兼容问题。

### 4. MCP OAuth 动态客户端注册过期后不会重新注册
[#5284](https://github.com/github/copilot-cli/issues/5284)

- CLI 将 OAuth Dynamic Client Registration 信息保存在 `~/.copilot/mcp-oauth-config/<hash>.json`，但忽略注册过期时间。
- 授权失败后持续复用已过期客户端，最终出现 `invalid_client`，且不会触发重新注册。
- 对长期运行的开发环境和自动认证流程影响较大。

### 5. Atlassian 状态型 MCP 服务 OAuth 登录失败
[#5014](https://github.com/github/copilot-cli/issues/5014)

- 即使本地已保存有效 token，点击 MCP 面板中的 “Sign in” 仍可能因服务探测返回 HTTP 400 而失败。
- 问题集中于 Atlassian `/v2/mcp` 等有状态服务端。
- 表明 CLI 的 MCP 探测流程可能错误使用普通 HTTP 请求，或未正确适配服务端的会话和探测协议。

### 6. Ubuntu keychain 支持失效且文档不正确
[#2165](https://github.com/github/copilot-cli/issues/2165)

- 报告指出 Ubuntu 上 `secret-tool` 的安装与调用文档存在问题，并涉及两个相关缺陷。
- Issue 获得 **22 个点赞**，说明 Linux 凭据存储是社区高度关注的基础体验。
- 认证故障会进一步影响 MCP、远程服务和 Agent 工作流。

### 7. macOS 因不同签名二进制共享钥匙串项目而反复提示
[#4273](https://github.com/github/copilot-cli/issues/4273)

- GitHub 签名和 Microsoft 签名的 `copilot` 二进制共用 `copilot-cli`、`copilot-mcp-oauth` 等登录钥匙串项目。
- macOS XARA 会将 ACL 与最后写入项目的 Team ID 绑定，签名切换可能造成钥匙串分区不匹配。
- 结果是每次启动都要求重新授权，属于身份迁移和多发行渠道场景下的长期问题。

### 8. `auto` 模型始终关闭 reasoning effort，且无法配置
[#4560](https://github.com/github/copilot-cli/issues/4560)

- 模型设为 `auto` 时，session 中的 `reasoningEffort` 固定为 `null`。
- 用户尝试配置推理强度后会被拒绝。
- 这可能削弱复杂编码、规划和调试任务的表现，也暴露出模型路由层与用户配置之间的不一致。

### 9. GPT-6.1 Sol 从 Plan 切换 Implementation 时卡死
[#5270](https://github.com/github/copilot-cli/issues/5270)

- 显式选择 GPT-6.1 Sol，或由 Auto 路由到该模型后，Plan → Implementation 转换会无限等待。
- 问题直接影响 CLI 最核心的“规划—执行”工作流。
- 对开发者而言，这比单次回答质量下降更严重，因为它可能使长任务无法继续推进。

### 10. 上下文窗口 rollover 因缺少 `checkpoint.md` 失败
[#5205](https://github.com/github/copilot-cli/issues/5205)

- 长会话达到上下文上限后，运行时尝试 rollover，却报：
  `checkpoint.md is absent for this agent; write it before requesting rollover`
- 用户无法自然完成上下文切换，长任务可能因此直接中断。
- 该问题与 checkpoint 生成、Agent 生命周期和会话恢复机制密切相关，是长会话可靠性的另一核心风险点。

### 其他值得关注

- 远程 HTTP MCP 在 Desktop App 中取消 host-token 后，不再启动延迟的浏览器认证流程，也无报错或弹窗：[ #4017](https://github.com/github/copilot-cli/issues/4017)
- 企业 “Registry only” MCP 策略下，Cloud Agent 会丢弃仓库配置的 MCP 服务：[ #5155](https://github.com/github/copilot-cli/issues/5155)
- MCP 返回的 `text/plain` `resource.blob` 在模型侧表现为空输出：[ #4916](https://github.com/github/copilot-cli/issues/4916)
- `includeCoAuthoredBy: false` 未传递给 task 子 Agent，提交仍包含 Co-authored-by trailer：[ #4576](https://github.com/github/copilot-cli/issues/4576)
- PowerShell 启动 CLI 时，Shell Command Runner 不继承父进程环境变量：[ #5281](https://github.com/github/copilot-cli/issues/5281)

---

## 4. 重要 PR 进展

> 本期仅有 4 个 PR 更新，均围绕 CLI 安装和卸载流程。

### 1. 为手动安装增加卸载脚本
[#2422](https://github.com/github/copilot-cli/pull/2422)

- 新增与 curl/wget 安装方式配套的 `uninstall.sh`。
- README 同步增加卸载说明。
- 改善手动安装用户的清理体验，也降低升级后遗留旧版本文件的概率。

### 2. 为安装脚本增加异常退出时的临时目录清理
[#1598](https://github.com/github/copilot-cli/pull/1598)

- `install.sh` 使用 `set -e`，下载失败或网络异常时会直接退出。
- PR 建议通过 trap 确保 `mktemp -d` 创建的目录在意外退出时也能清理。
- 可避免 `/tmp` 中残留下载文件和临时目录。

### 3. 防止重复安装时写入重复 PATH
[#2565](https://github.com/github/copilot-cli/pull/2565)

- 当前安装器通过 `command -v copilot` 判断是否需要配置 PATH，但当前 shell 未必已重新加载配置。
- PR 计划在重装时防止向 shell profile 重复追加 PATH 条目。
- 能减少环境变量污染，并降低终端启动时的维护成本。

### 4. 校验与下载 tarball 对应的 checksum 条目
[#5093](https://github.com/github/copilot-cli/pull/5093)

- 现有校验使用 `sha256sum -c --ignore-missing SHA256SUMS.txt`，在目标文件未参与校验时可能出现“空验证”。
- PR 目标是明确找到并验证与下载 tarball 对应的 checksum 条目。
- 对供应链安全非常重要，可避免校验流程形式化通过但未真正验证安装产物。

---

## 5. 功能需求趋势

### 1. MCP OAuth 与企业级身份集成

本期最明显的趋势是对远程 MCP 身份认证的集中反馈，涉及：

- OAuth token 刷新与过期处理
- Dynamic Client Registration 生命周期
- Atlassian 等有状态 MCP 服务探测
- Microsoft Entra Account Broker
- 企业 MCP Registry 与仓库级配置
- Cloud Agent 对企业策略的兼容性

相关 Issues：[ #5284](https://github.com/github/copilot-cli/issues/5284)、[#5236](https://github.com/github/copilot-cli/issues/5236)、[#5014](https://github.com/github/copilot-cli/issues/5014)、[#5155](https://github.com/github/copilot-cli/issues/5155)

### 2. 长会话稳定性与资源治理

社区持续关注 Copilot CLI 在长时间、恢复和并行 Agent 场景中的可靠性：

- 内存占用持续增长
- 上下文 rollover 失败
- checkpoint 文件缺失
- SDK 会话枚举无并发限制，可能耗尽文件描述符

相关 Issues：[ #5254](https://github.com/github/copilot-cli/issues/5254)、[#5205](https://github.com/github/copilot-cli/issues/5205)、[#5282](https://github.com/github/copilot-cli/issues/5282)

### 3. 新模型兼容性与模型路由控制

开发者希望 CLI 对快速迭代的模型提供更可控、更一致的支持：

- `auto` 模式应支持 reasoning effort
- 新模型不得破坏 Plan → Implementation 状态机
- 工具数量上限应提前校验，而不是直接返回 HTTP 400
- 模型兼容性错误需要更明确的诊断信息

相关 Issues：[ #4560](https://github.com/github/copilot-cli/issues/4560)、[#5270](https://github.com/github/copilot-cli/issues/5270)、[#4836](https://github.com/github/copilot-cli/issues/4836)

### 4. IDE、终端和外部集成

社区希望 CLI 与 VS Code、终端集成及 SDK 建立更统一的会话接口：

- VS Code Agent 会话支持 `/rename`
- 终端集成需要可靠的前台会话变更 hook
- Shell runner 应继承 PowerShell 环境变量
- SDK 的会话管理需要限制并发

相关 Issues：[ #4244](https://github.com/github/copilot-cli/issues/4244)、[#5279](https://github.com/github/copilot-cli/issues/5279)、[#5281](https://github.com/github/copilot-cli/issues/5281)、[#5282](https://github.com/github/copilot-cli/issues/5282)

### 5. 工具权限与默认安全策略

非交互模式中的工具权限缺少清晰的默认拒绝机制：

- `--deny-tool` 与 `--allow-tool` 的优先级不理想
- 一些工具仍默认允许
- 企业用户希望支持显式 allowlist 和 default-deny

相关 Issue：[ #5275](https://github.com/github/copilot-cli/issues/5275)

### 6. 跨平台认证与凭据存储

Linux keychain、Windows Entra token cache 和 macOS XARA 分区问题表明，凭据生命周期管理仍是基础能力短板。

相关 Issues：[ #2165](https://github.com/github/copilot-cli/issues/2165)、[#5236](https://github.com/github/copilot-cli/issues/5236)、[#4273](https://github.com/github/copilot-cli/issues/4273)

### 7. 安装、卸载与供应链安全

虽然今天没有发布新版本，但安装脚本相关 PR 集中出现，体现出社区对以下事项的重视：

- 安装产物真实性校验
- 幂等安装
- 异常退出后的资源清理
- 完整卸载能力

相关 PRs：[ #2422](https://github.com/github/copilot-cli/pull/2422)、[#1598](https://github.com/github/copilot-cli/pull/1598)、[#2565](https://github.com/github/copilot-cli/pull/2565)、[#5093](https://github.com/github/copilot-cli/pull/5093)

---

## 6. 开发者关注点

### 高频痛点

1. **认证链路复杂且跨平台不一致**  
   Linux、Windows 和 macOS 分别出现 keychain、broker cache 和 XARA 分区问题，说明凭据存储仍是用户采用 CLI 的主要障碍。

2. **MCP 登录失败缺乏可诊断性**  
   多个案例出现“无弹窗、无报错、不连接”或直接 HTTP 400。开发者不仅需要登录成功，还需要明确知道失败发生在探测、token 刷新、客户端注册还是浏览器授权阶段。

3. **长会话可能失去可用性**  
   37 GiB 内存增长、上下文 rollover 失败等问题，对需要持续运行数小时的编码 Agent 尤其严重。

4. **模型更新可能破坏既有工作流**  
   GPT-6.1 Sol 卡死、`auto` 模式忽略 reasoning 配置等现象表明，模型上线速度需要与 CLI 状态机、路由和配置兼容性同步推进。

5. **安全和可重复安装仍需加强**  
   checksum 验证可能空跑、重复 PATH、卸载不完整等问题虽然基础，却直接影响企业分发和终端环境维护。

### 值得产品团队优先跟进

- 为 MCP OAuth 建立统一的认证状态机和可读错误码；
- 为长会话增加内存监控、checkpoint 完整性检查和资源上限；
- 统一 Linux、Windows、macOS 的凭据存取与刷新行为；
- 在非交互模式提供明确的 default-deny 工具策略；
- 将安装器改为幂等设计，并强化下载产物校验和卸载流程。

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI 社区动态日报

**日期：2026-10-29**

## 今日速览

过去 24 小时内，Kimi Code CLI 社区无新版本发布，也无更新的 Issue。当前唯一活跃动态为 PR #2648，尝试通过 `PreToolUse` 钩子在执行 Shell 命令前接入 HOL Guard，实现基于风险分类结果的安全拦截。

## 重要 PR 进展

### PR #2648：新增 HOL Guard PreToolUse 安全门禁示例

- **状态**：Open
- **作者**：[@kantorcodes](https://github.com/kantorcodes)
- **更新时间**：2026-10-28
- **链接**：[MoonshotAI/kimi-cli#2648](https://github.com/MoonshotAI/kimi-cli/pull/2648)

该 PR 增加了一个聚焦命令执行安全的 `PreToolUse` 示例：Kimi CLI 在运行 `Shell` 命令前，先调用 HOL Guard 对命令进行检查，并依据返回的 `classification.explicitly_benign` 与 `minimum_action` 字段决定是否放行。若命令未被明确判定为安全，则以退出码 `2` 阻止后续执行。

**关注价值：**

- 展示了 `PreToolUse` 钩子与外部安全工具集成的可行路径。
- 可为高风险命令、危险文件操作及越权行为增加执行前防线。
- 以明确字段和退出码表达阻断结果，便于开发者复用于自定义 Hook。

**社区反馈：**

- 当前暂无评论、点赞或正式审查反馈。
- PR 仍处于开放状态，实际兼容性、误拦截率和维护者认可度尚待验证。

## 功能需求趋势

过去 24 小时没有新增或更新的 Issue，无法从中提炼稳定的社区需求趋势。不过，从当前唯一活跃 PR 可以观察到以下方向：

- **执行前安全防护**：通过 `PreToolUse` Hook 拦截潜在危险操作。
- **外部工具集成**：将第三方安全检测能力接入 CLI 工具调用链。
- **策略化工具调用**：根据风险分类与最小动作建议，决定允许或阻断命令。
- **可观测与自动化**：利用结构化 JSON 输出及标准退出码，便于脚本编排、测试和审计。

## 开发者关注点

- Hook 阻断条件是否足够清晰，能否降低误杀率。
- 外部安全工具的安装、配置和运行开销是否可接受。
- 安全检查失败、超时或返回异常数据时，应采用默认放行还是默认阻断策略。
- 与现有权限控制、Shell 命令执行及用户确认机制如何协同。
- 示例是否具备完善的单元测试、异常路径处理和文档说明。

> 注：本期无可供评选的社区热点 Issues，也无新版本发布。

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode 社区动态日报｜2026-10-29

## 今日速览

今日 OpenCode 发布 **v1.19.5**，重点修复 TUI Worker 请求失败后调用方无限挂起的问题，同时发布 `process-daemon v0.3.2`，继续完善 PTY 进程与协议层。社区讨论集中在**免费额度异常、Agent 权限与沙箱、Code Mode 稳定性、子代理并发控制及 Desktop 生命周期管理**；当天 PR 也集中修复 Code Mode 权限反馈、挂起与错误信息丢失问题。

## 版本发布

### v1.19.5

- **修复 TUI Worker 请求失败后不返回错误、导致调用方永久挂起的问题。**
- 感谢社区贡献者 [@Nowaker](https://github.com/Nowaker) 提交修复。
- 相关 PR：[fix(opencode): answer a failed TUI worker request instead of hanging](https://github.com/anomalyco/opencode/pull/54936)

### process-daemon v0.3.2

- 发布 `opencode-pty 0.3.2`，对应 **PTY protocol 7**。
- npm 包名：`@opencode/pty@0.3.2`。
- 主要服务于 OpenCode 的终端、进程守护及 PTY 通信基础设施。

## 社区热点 Issues

1. **Agent 沙箱与工作目录限制** [#2242](https://github.com/anomalyco/opencode/issues/2242)  
   社区希望 Agent 无法读取或修改当前目录之外的文件，并询问 macOS Seatbelt 等隔离方案是否可用。该 Issue 获得 **105 条评论、80 个赞**，是今日讨论度最高的议题，凸显了 Agent 执行环境安全性的重要性。

2. **免费额度与重置异常统一反馈入口** [#59387](https://github.com/anomalyco/opencode/issues/59387)  
   汇总“免费使用量超限”“额度未按时重置”“桌面版提示不可用”等免费套餐问题。Issue 有 **80 条评论**，说明额度识别、展示和恢复逻辑仍是当前用户最直接的痛点之一。

3. **通过插件钩子重新进入 Agent Loop** [#16626](https://github.com/anomalyco/opencode/issues/16626)  
   提议增加 `session.stopping` 插件钩子，使插件在 Agent Loop 即将停止时可以继续介入。该需求获得 **14 条评论和 12 个赞**，体现了用户对工作流自动化、可控停止和插件扩展能力的需求。

4. **限制并行子代理数量** [#27110](https://github.com/anomalyco/opencode/issues/27110)  
   建议增加最大并行 Subagent 数量设置，以避免本地模型因上下文、内存或并发能力不足而失败。该 Issue 有 **11 条评论、39 个赞**，是资源治理和成本控制方面的高关注需求。

5. **OpenCode 2.2.0 更新后立即崩溃** [#59684](https://github.com/anomalyco/opencode/issues/59684)  
   用户从 2.1.4 升级至 2.2.0 后无法再次启动，出现 Effect/Bun 相关异常。已有 **5 条评论**，属于新版本发布后需要优先跟踪的回归问题。

6. **Code Mode 中 MCP 权限请求不在 TUI 显示并导致挂起** [#51223](https://github.com/anomalyco/opencode/issues/51223)  
   Code Mode 的 `execute` 调用触发 MCP 权限确认时，请求没有呈现在 TUI，任务会无限等待，直到用户中断。该问题已关闭，并被同日多项 Code Mode 权限与错误处理 PR 集中修复，反映出 Code Mode 权限链路此前存在系统性缺口。

7. **Code Mode 并行权限请求导致第二个请求孤立挂起** [#51224](https://github.com/anomalyco/opencode/issues/51224)  
   同一轮中并行调用相同的受权限控制的 MCP 工具时，解决其中一个权限请求会让另一个请求永远无法完成。该问题已关闭，表明并行权限请求缺少可靠的请求生命周期管理。

8. **本地 MCP 服务在会话结束后未释放** [#51249](https://github.com/anomalyco/opencode/issues/51249)  
   后台服务会按会话和目录启动本地 stdio MCP Server，但会话结束后不回收，进程数随会话持续增长。该问题已关闭，对长期运行、多目录和多 MCP 环境尤其重要。

9. **Desktop Windows 后台服务缺少托盘与干净关闭机制** [#50633](https://github.com/anomalyco/opencode/issues/50633)  
   Desktop 关闭后 `opencode-cli.exe` 仍可能继续运行，并保留旧配置，形成难以察觉的后台进程。该功能请求获得 **7 条评论、3 个赞**，与关联的“关闭到托盘”需求 [#42349](https://github.com/anomalyco/opencode/issues/42349) 一同反映了 Desktop 生命周期管理诉求。

10. **未知 `finish_reason` 触发预填充续写并导致提供商报错** [#46415](https://github.com/anomalyco/opencode/issues/46415)  
    当模型返回 `finish_reason: unknown` 时，OpenCode 可能继续发起 assistant prefill，使 SAP AI Core 等禁止预填充的提供商在每轮成功后返回 400。该问题已有 **8 条评论**，说明兼容不同提供商结束原因和消息续写策略十分必要。

> 另外值得关注的开放问题是：TUI 在 SSH 下可能将延迟返回的 OSC 颜色响应泄漏为 `:ffff/ffff/ffff` [#57345](https://github.com/anomalyco/opencode/issues/57345)。

## 重要 PR 进展

1. **Code Mode 权限被拒后终止当前运行** [#60112](https://github.com/anomalyco/opencode/pull/60112)  
   修复直接工具调用与 Code Mode 在权限拒绝行为上的不一致。此前 Code Mode 拒绝权限后仍可继续运行，现在会停止本轮，避免权限拒绝被绕过。

2. **向 Code Mode 程序回传权限反馈** [#60109](https://github.com/anomalyco/opencode/pull/60109)  
   用户拒绝权限时填写的反馈，或权限规则拒绝原因，现在能够传递给 Code Mode 程序，而不是被通用错误包装吞掉。

3. **保留 MCP 权限拒绝原因和用户反馈** [#60102](https://github.com/anomalyco/opencode/pull/60102)  
   修复 MCP 工具包装器将所有非 `ToolFailure` 异常统一替换为 `Unable to execute ...` 的问题，使模型能够理解具体拒绝原因。

4. **保留失败的 Code Mode 调用错误信息** [#60110](https://github.com/anomalyco/opencode/pull/60110)  
   当嵌套工具调用失败但异常被程序捕获、未显式记录时，错误消息原本会从会话历史和 UI 中消失。该 PR 修复了错误信息丢失问题。

5. **Code Mode 程序停滞时主动失败** [#54342](https://github.com/anomalyco/opencode/pull/54342)  
   为 Code Mode 增加停滞检测，避免 Promise 永不结算而持续占用当前轮次。相关 Issue [#54340](https://github.com/anomalyco/opencode/issues/54340) 已由该 PR 关闭。

6. **会话步骤减少数据库提交次数** [#58910](https://github.com/anomalyco/opencode/pull/58910)  
   将一个模型步骤中的开始、文本、推理、工具调用和结果等相邻持久化事件合并提交，官方数据称数据库提交次数约减少三分之一。

7. **流式助手消息按 Part 分行存储** [#58916](https://github.com/anomalyco/opencode/pull/58916)  
   每个流式 part 独立写入 `session_part`，避免每追加一段内容就重写整条 assistant message。PR 给出的工具密集型会话测试中，SQLite WAL 写入量从 **47.89 MB 降至 7.46 MB**，降幅 **84.4%**。

8. **引入 `session_part` 表并迁移历史读取** [#58915](https://github.com/anomalyco/opencode/pull/58915)  
   新增 `session_part` 表，并让历史读取和回滚后的 projector 使用该表，为会话消息从 JSON 中拆分出独立 part 奠定基础。

9. **herdr panes 内默认关闭 TUI 动画** [#60111](https://github.com/anomalyco/opencode/pull/60111)  
   针对多路复用器环境中的高 CPU/GPU 占用和侧边栏卡顿，默认禁用动画。另有同主题 PR [#60104](https://github.com/anomalyco/opencode/pull/60104) 已关闭。

10. **新增 SearXNG Web Search Provider** [#59138](https://github.com/anomalyco/opencode/pull/59138)  
    将 SearXNG 纳入内置网页搜索提供商，用户可配置自托管服务地址，在不依赖第三方搜索 API Key 的情况下提供搜索能力。

> 同日进行中的工作还包括：为图片任务通知附加 Job ID [#60098](https://github.com/anomalyco/opencode/pull/60098)、支持 `.md` 网页抓取 [#59842](https://github.com/anomalyco/opencode/pull/59842)，以及规范化服务注册 URL 中的 `0.0.0.0` 监听地址 [#59852](https://github.com/anomalyco/opencode/pull/59852)。

## 功能需求趋势

### 1. Agent 安全边界与沙箱化

社区最强烈的诉求是限制 Agent 访问当前工作目录之外的文件、命令和网络资源。现有权限机制仍不足以提供类似 Seatbelt 的进程级隔离，目录权限、路径访问控制和外部目录审批是高频主题。

### 2. 插件与 Agent Loop 可编排性

用户希望通过 `session.stopping` 等生命周期钩子，在 Agent 停止、继续执行或审批失败时介入。需求重点不是单个插件功能，而是建立可观察、可拦截、可续接的 Agent 执行生命周期。

### 3. 并行子代理和资源配额控制

并行 Subagent、上下文预算、模型输出上限及内存限制受到关注。社区希望提供最大并发数、上下文预留和配额感知重试等可配置策略，避免多代理任务因资源不足而失败或产生不可控成本。

### 4. Code Mode 的可靠性与可观测性

今日需求与 PR 高度集中于 Code Mode：权限确认、拒绝反馈、并行请求、停滞检测、失败信息保留和 JavaScript 语义一致性。Code Mode 正在从实验性能力转向稳定生产工具，但权限生命周期和错误传播仍是主要短板。

### 5. 免费额度、配额感知与自动恢复

社区不仅要求修复“已超额但未重置”等状态错误，也希望增加按 Provider 的配额感知自动重试、可配置重置计划和非侵入式更新检查。核心诉求是让限额状态可预测、自动化且不中断工作流。

### 6. Desktop 后台服务与窗口管理

Windows 用户关注托盘驻留、关闭后继续运行、后台 CLI 干净退出以及配置刷新。多窗口场景还希望任务栏标题展示当前项目或会话名称。

### 7. MCP 管理、可扩展性与长期资源回收

除了 MCP 面板的折叠、分组、批量启用需求外，社区还关注本地 MCP 进程回收、权限审批以及多 Provider/多目录下的稳定性。MCP 正成为 OpenCode 工具链的关键组成，但管理体验仍偏弱。

### 8. 搜索、模型与平台支持

SearXNG 自托管搜索进入 PR 阶段；Android/Termux 安装支持也被提出。与此同时，本地 Provider 模型无法进入模型目录、环境变量认证模型不可见等问题，反映出“新模型、新 Provider 与新平台接入”仍是长期需求。

### 9. 会话存储与大型上下文性能

数据库提交、WAL 写入、消息 part 拆分和上下文压缩预算成为性能主线。社区希望 OpenCode 能更好支撑长会话、工具密集型任务及大量媒体附件。

## 开发者关注点

- **挂起问题仍是最高优先级。** Worker 请求、MCP 权限、并行权限审批、空工具调用和停滞程序都曾表现为会话持续处于 running，缺少超时、取消与明确失败状态。
- **权限拒绝信息必须完整传递。** 用户拒绝原因、规则拒绝理由和反馈文本不应被通用异常覆盖；Code Mode 与直接工具调用也必须保持一致。
- **免费额度状态不可信。** 额度超限、提前触发、重置失败和桌面端提示不一致，是当前用户投诉最集中的产品体验问题。
- **Agent 需要真正隔离。** 仅靠路径权限难以覆盖 Shell、插件、MCP 和子代理的组合行为，开发者期待更接近 OS 沙箱的能力。
- **并发必须有明确上限。** 多个 Subagent、Code Mode 调用和 MCP 工具并行时，需要统一管理上下文、内存、数据库写入与成本。
- **大型会话的持久化成本需要优化。** `session_part` 与批量提交方向直接回应 SQLite 重写和 WAL 写入压力，是近期值得持续关注的性能主线。
- **Desktop 不能遗留失控后台进程。** 窗口关闭、服务退出、配置刷新和托盘驻留需要在跨平台层面形成一致且可预测的行为。
- **跨 Provider 兼容性仍不足。** `finish_reason`、预填充策略、模型目录发现和环境变量认证等问题，说明 OpenCode 在接入更多模型后端时仍需加强协议层归一化。

</details>

<details>
<summary><strong>jcode</strong> — <a href="https://github.com/1jehuang/jcode">1jehuang/jcode</a></summary>

# jcode 社区动态日报｜2026-10-29

## 1. 今日速览

过去 24 小时内，jcode 发布实验性版本 **v1.0.0-preview.30**，并有 34 个 PR 获得更新，重点集中在 TUI 交互、MCP 管理、模型配置与测试稳定性。  
Issue 侧最值得关注的是 **SBOM 证据失真、任务指令覆盖安全风险，以及 ACP 限流后未自动切换账号**；Windows 后台进程残留和多会话 E2E 偶发失败也值得开发者留意。

---

## 2. 版本发布

### [v1.0.0-preview.30](https://github.com/1jehuang/jcode/releases/tag/v1.0.0-preview.30)

- 基于 `master` 提交 `bd2ac1a8edcd9811ffd0f6ecf18f695adbc9744a` 构建。
- 相比 `v1.0.0-preview.24`，包含 24 个提交。
- 相比稳定版 `v0.99.1`，累计包含 304 个提交。
- 该版本属于 **opt-in v1 实验性预览**，版本号可能存在跳号。
- Windows 预览二进制文件**未签名**，不建议用于生产环境；生产用户应继续使用 stable channel。

---

## 3. 社区热点 Issues

> 过去 24 小时共有 9 条 Issue 更新，以下按安全性、功能影响、稳定性和社区需求排序。

### 1. [任务尾部指令覆盖原任务，可能改写完整性数据、删除数据库并访问网络](https://github.com/1jehuang/jcode/issues/1562)
- **重要性**：被标记为安全相关问题。恶意或不可信任务文本可能诱导 Agent 执行超出预期的破坏性操作。
- **社区反应**：收到 2 条评论、0 个点赞，目前仍需维护者决定处理方案。
- **建议关注**：是否需要强化任务边界、工具权限和不可信内容隔离。

### 2. [SBOM 报告包含实际文件中不存在的许可证证据，并声称已验证](https://github.com/1jehuang/jcode/issues/1563)
- **重要性**：影响 SBOM 与供应链审计的可信度，可能导致许可证合规结论失真。
- **社区反应**：收到 2 条评论、0 个点赞，已进入待决策状态。
- **建议关注**：证据采集应基于真实文件内容，并明确区分“推断”与“验证”。

### 3. [ACP 模式下 Claude 触发限流后不会切换其他账号](https://github.com/1jehuang/jcode/issues/2009)
- **重要性**：影响 ACP 新建与恢复会话的可用性；自动切换池已有服务端故障转移能力，但 ACP 路径未接入。
- **社区反应**：今日新建，尚无评论。
- **建议关注**：修复后应验证多账号、新建会话、恢复会话和限流重试场景。

### 4. [Windows 取消后台任务后，npm/cmd/Vitest 子进程仍继续运行](https://github.com/1jehuang/jcode/issues/1081)
- **重要性**：后台任务表面已取消，但测试监听器等进程可能继续占用 CPU、内存和文件句柄。
- **社区反应**：收到 1 条评论、0 个点赞，已明确标注为非自主执行场景。
- **建议关注**：核心需求是完善 Windows Job Object 或进程树终止机制，并让退出状态反映真实清理结果。

### 5. [测试模式 selfdev reload 污染生产环境 build manifest](https://github.com/1jehuang/jcode/issues/2002)
- **重要性**：`JCODE_TEST_SESSION=1` 会话在未覆盖 `JCODE_HOME` 时可能写入 `~/.jcode/builds/manifest.json`，影响真实安装状态。
- **社区反应**：收到 1 条评论、0 个点赞。
- **建议关注**：测试路径应使用隔离 home，或在检测到测试模式时拒绝写入生产目录。

### 6. [URL 校验拒绝私有 LAN 与 `.local` 地址](https://github.com/1jehuang/jcode/issues/2004)
- **重要性**：影响 Ollama、私有推理服务和局域网网关接入，与上游测试表现存在不一致。
- **社区反应**：今日更新，尚无评论。
- **建议关注**：修复需区分“允许访问的显式用户配置”与普通外部 URL，避免通过简单放宽校验引入 SSRF 风险。

### 7. [请求加入 GPT-6.1 Terra 到 OpenAI 模型库](https://github.com/1jehuang/jcode/issues/1997)
- **重要性**：反映用户对最新模型快速可用的需求。
- **社区反应**：收到 1 条评论、0 个点赞。
- **建议关注**：除模型 ID 外，还应同步上下文长度、推理能力、工具调用和定价等元数据。

### 8. [将 Obscurify.ai 添加为内置 OpenAI 兼容提供商](https://github.com/1jehuang/jcode/issues/2008)
- **重要性**：希望用户通过 `jcode login --provider obscurify-ai` 直接使用，无需手动输入 base URL。
- **社区反应**：今日更新，尚无评论。
- **建议关注**：内置第三方服务涉及供应链、隐私、兼容性和品牌维护成本，需要明确准入标准。

### 9. [多会话 reload E2E 偶发丢失 history reply](https://github.com/1jehuang/jcode/issues/731)
- **重要性**：同一分支上出现通过与失败交替，疑似与并发的 `SwarmStatus` 广播存在竞态，影响跨独立会话通知的可靠性。
- **社区反应**：收到 2 条评论、0 个点赞。
- **建议关注**：需要通过确定性同步或消息排序机制消除竞态，而不是简单增加重试。

### 10. [测试会话中的 manifest 状态字段未随安装流程同步](https://github.com/1jehuang/jcode/issues/1413)
- **重要性**：`builds/manifest.json` 中的 `stable` 字段可能长期指向已清理版本，影响安装与升级判断。
- **社区反应**：该 Issue 已被 PR [#1392](https://github.com/1jehuang/jcode/pull/1392) 处理。
- **建议关注**：安装、升级和 promote 流程应共享同一套 manifest 同步逻辑。

---

## 4. 重要 PR 进展

### 1. [PR #2001：禁止 `ask_user` 自动进入后台](https://github.com/1jehuang/jcode/pull/2001)
- 修复交互式选择器超过 3 秒前台预算后被错误分离到后台的问题。
- 用户回答将保留在原任务的决策上下文中，避免 oneshot 丢失或等待结果无法关联。

### 2. [PR #1874：新增 `/mcp`，支持按服务器切换工具](https://github.com/1jehuang/jcode/pull/1874)
- 可列出已连接的 MCP 服务，并按服务器开关工具。
- 工具状态持久化至 `mcp.json`，写入时使用跨进程文件锁，降低并发会话破坏 JSON 的风险。

### 3. [PR #1946：修复 Bedrock 默认旗舰模型被错误降级](https://github.com/1jehuang/jcode/pull/1946)
- 引入 `bedrock_promoted_default` 下限。
- 目录刷新后，仅当存在严格更新的 Claude 前沿模型时才替换默认模型，避免降级到旧目录模型。

### 4. [PR #1889：新增 `@file` 文件选择器与 frecency 排序](https://github.com/1jehuang/jcode/pull/1889)
- 解决 TUI 中必须手动输入完整路径的问题。
- 根据文件引用频率和最近使用时间排序，提升大型代码库中的定位效率。

### 5. [PR #1881：模型切换持久化到 `config.toml`](https://github.com/1jehuang/jcode/pull/1881)
- 修复模型选择器仅在当前会话生效、重启后恢复旧模型的问题。
- 同时覆盖本地、远程和重启后的配置持久化路径。

### 6. [PR #1955：修复 `JCODE_HOME` 测试竞态](https://github.com/1jehuang/jcode/pull/1955)
- 针对锁定测试与辅助函数并发修改 `JCODE_HOME` 导致的 TOCTOU 问题。
- 防止并行测试期间环境变量被其他 racer 改写，提升测试确定性。

### 7. [PR #1880：隔离测试环境并稳定并行测试](https://github.com/1jehuang/jcode/pull/1880)
- 清理外部开发环境中的 `JCODE_*` 变量。
- 为测试分配隔离 home，并修正负载相关边界和易波动 fixture。

### 8. [PR #1876：Bash 风险门控改为可配置开关](https://github.com/1jehuang/jcode/pull/1876)
- 破坏性命令检查可通过 `/settings` 配置。
- 默认保持开启，支持配置与环境变量覆盖，并允许运行时读取最新状态。

### 9. [PR #1878：可配置自动重试与 Alt+S 回退切换](https://github.com/1jehuang/jcode/pull/1878)
- 支持配置重试次数、退避策略和 sidecar fallback 顺序。
- 模型选择器中的 Alt+S 可临时切换当前会话的 fallback 行为。

### 10. [PR #1877：新增 `/theme` 与自定义主题](https://github.com/1jehuang/jcode/pull/1877)
- 支持亮色、暗色、终端偏好检测及自定义主题文件。
- 将颜色样式从硬编码迁移到 palette 层，便于用户扩展。

### 其他值得关注

- [PR #1347：文本模型遇到图片块时的运行时模态恢复](https://github.com/1jehuang/jcode/pull/1347)：防止图像结果持续污染会话历史。
- [PR #1873：新增 Cursor ACP provider](https://github.com/1jehuang/jcode/pull/1873)：支持模型路由、推理强度配置和子进程回收。
- [PR #1879：自定义 OpenAI 兼容提供商支持逐模型配置](https://github.com/1jehuang/jcode/pull/1879)：可设置 `display_name`、reasoning override 与 effort。
- [PR #1538：修复 herdr-webui 中 Mermaid/数学公式乱码](https://github.com/1jehuang/jcode/pull/1538)：避免浏览器终端渲染私有 Unicode 占位符。

---

## 5. 功能需求趋势

1. **模型生态快速接入**
   - 用户要求尽快加入 GPT-6.1 Terra、Obscurify.ai 等模型或提供商。
   - 对 OpenAI 兼容网关的模型名称、推理强度和显示名称定制需求持续增长。

2. **TUI 易用性与交互效率**
   - `@file` 快速引用、会话搜索预过滤、主题切换、模型选择持久化受到关注。
   - 社区希望减少手工输入路径、重复配置和重启后状态丢失。

3. **MCP 工具精细化控制**
   - 需求从“能否连接 MCP”转向“按服务器、按工具启停和持久化管理”。

4. **多账号与故障转移**
   - ACP 模式在限流后自动切换账号成为明确诉求。
   - 自动化工作流对 provider fallback、重试次数和退避策略的依赖增强。

5. **安全与合规**
   - SBOM 证据真实性、恶意尾部指令覆盖、破坏性 Bash 操作控制是核心关注方向。
   - 开发者期待风险门控既可配置，又保持默认安全。

6. **跨平台后台任务治理**
   - Windows 下的进程树残留问题表明，用户需要可靠的取消、回收和状态报告能力。

7. **私有服务与局域网部署**
   - 用户希望原生支持 LAN、`.local` 和自托管 OpenAI 兼容端点，同时保持 URL 安全校验。

8. **测试与安装环境隔离**
   - `JCODE_HOME`、测试模式 manifest 写入及环境变量串扰问题反复出现，反映并行测试和开发环境隔离仍是高频工程需求。

---

## 6. 开发者关注点

- **安全边界比单纯能力扩展更受重视**：尤其是指令注入、破坏性操作、SBOM 证据可信度和私有地址访问策略。
- **自动化的可靠性仍是核心痛点**：任务取消后进程残留、限流不切换账号、后台交互等待丢失，均可能直接中断长流程。
- **配置需要“生效且可持久化”**：模型选择、风险开关、重试策略、主题和 MCP 工具状态都要求跨会话保持一致。
- **测试隔离问题具有系统性**：多个 Issue/PR 都指向 `JCODE_HOME`、测试环境变量和生产目录污染，开发者希望从基础设施层解决，而非继续增加零散 sleep 或重试。
- **新模型接入不能只添加名称**：社区期待完整维护模型能力元数据、兼容端点行为和 provider 级路由策略。
- **TUI 的下一步是从可用走向高效**：文件引用、搜索、主题、状态展示和快捷键等细节，正成为用户感知最直接的功能入口。

</details>

<details>
<summary><strong>pi</strong> — <a href="https://github.com/earendil-works/pi">earendil-works/pi</a></summary>

# Pi 社区动态日报（2026-10-29）

## 1. 今日速览

过去 24 小时没有新版本发布，Pi 社区主要围绕稳定性与工程化能力推进：Windows 兼容、模型选择回退、进程执行限制、Anthropic 上下文续接，以及 `pi-durable` 的扩展生命周期成为高频议题。  
PR 侧已合入或关闭多项修复，包括 `pi.exec()` 输出上限、ANSI 控制序列清理、daemon 子进程清理及 TUI 分页快捷键；与此同时，Anthropic Message Threads、Bedrock/Vertex 模型路由和扩展延迟重载仍在评审中。

---

## 3. 社区热点 Issues

### 1. AgentSession 的 continuation 与 assistant 尾部生命周期缺陷

[#5886](https://github.com/earendil-works/pi/issues/5886)

- 汇总了运行结束后继续 Agent、assistant 尾部处理等一组关联缺陷。
- 问题根源在于后运行逻辑可能尝试从已失效或不完整的 transcript 继续会话。
- 评论 13、点赞 4，是本期讨论最充分的问题之一；作为 meta issue，对会话生命周期和 compaction 稳定性影响较大。

### 2. 启动时间与内存预算

[#7739](https://github.com/earendil-works/pi/issues/7739)

- 提议为 Pi 设置接近 `jcode` 的启动延迟和内存预算，并建立可重复的基准。
- 当前关注点不只是“更快”，而是将 CLI 启动性能纳入明确、可测量的产品指标。
- 评论 12，但暂无点赞，表明议题明确、仍待形成可执行方案。

### 3. 编译版 Bun 可执行文件遗漏所有图片附件

[#10645](https://github.com/earendil-works/pi/issues/10645)

- `resizeImage` 在 Bun 编译产物中返回 `null`，导致自 `0.87.x` 起图片附件被静默省略。
- 影响 Windows 独立二进制及通过 `pi --mode rpc` 集成的宿主应用。
- 评论 11，现已关闭，是图片处理链路上的高优先级回归。

### 4. 配置的默认模型有时被 fallback 替换

[#9884](https://github.com/earendil-works/pi/issues/9884)

- 扩展在运行时注册 provider/model catalog 后，启动阶段可能忽略配置模型并选择 fallback。
- 报告中称 20 次启动有 4 次实际选择了未配置模型，具有明显的随机性。
- 评论 7；与 [#10812](https://github.com/earendil-works/pi/issues/10812) 属于同一类模型解析与回退问题。

### 5. Anthropic 工具列表变化后重放 thinking block 返回 400

[#10954](https://github.com/earendil-works/pi/issues/10954)

- OpenCode Go 的 `anthropic-messages` 路径在重放包含 thinking 的历史时返回 400。
- 工具列表发生变化后，旧 thinking block 与新请求组合可能不再兼容。
- 评论 6，与 `block_binding` 和 `supportsMidConvoEffort` 的发送策略相关；[PR #11545](https://github.com/earendil-works/pi/pull/11545) 正尝试通过 Anthropic Message Threads 改善历史续接。

### 6. Durable 扩展缺少 AgentSession runtime 与 hook 对等能力

[#10386](https://github.com/earendil-works/pi/issues/10386)

- 提议让 `pi-durable` 承载基于 AgentSession 的运行时，或提供与 `ExtensionAPI` 事件对等的 Durable hooks。
- 目标是让现有 coding-agent 扩展更容易迁移到 Durable，而不丢失生命周期能力。
- 评论 6、点赞 1，体现扩展生态与新执行模型之间的整合需求。

### 7. 已下架默认模型被静默忽略

[#10812](https://github.com/earendil-works/pi/issues/10812)

- `settings.json` 指定的模型若不再存在于 catalog，Pi 会静默切换到其他模型。
- 缺少显式错误或警告，可能导致成本、能力和输出质量意外变化。
- 评论 6，与 [#9884](https://github.com/earendil-works/pi/issues/9884) 共同暴露模型解析层的一致性问题。

### 8. Windows 下 `pi.exec()` 无法调用 `.cmd` 命令

[#10616](https://github.com/earendil-works/pi/issues/10616)

- `pi.exec("npm", ...)`、`npx`、`pnpm` 等在 Windows 上直接失败，而经 bash 工具执行正常。
- 对依赖 npm 工具链的扩展开发影响明显，属于跨平台执行抽象缺口。
- 评论 5，反映社区对 Windows 原生开发体验的持续关注。

### 9. 会话目录默认权限应设为 `0700`

[#10770](https://github.com/earendil-works/pi/issues/10770)

- 新建 `.pi/agent/sessions` 时建议使用 `0700`，`.pi/agent` 也可采用相同权限。
- 会话记录可能包含敏感提示、代码和工具输出，默认权限过宽存在隐私风险。
- 评论 5；该 Issue 标记为进行中，体现本地数据安全正在成为基础能力要求。

### 10. `pi.exec()` 超大输出可能拖垮整个进程

[#11360](https://github.com/earendil-works/pi/issues/11360)

- 子进程 stdout/stderr 被无界拼接，超过 V8 字符串上限后触发 `RangeError`，可能直接终止 Pi。
- 这既是崩溃问题，也是不可信或异常命令的隔离问题。
- 评论 2；对应修复 [PR #11546](https://github.com/earendil-works/pi/pull/11546) 已限制输出并支持终止超限命令。

---

## 4. 重要 PR 进展

### 1. `pi.exec` 输出限制为 256 MiB

[#11546](https://github.com/earendil-works/pi/pull/11546) — **CLOSED**

- 修复 [#11360](https://github.com/earendil-works/pi/issues/11360)。
- 对 stdout/stderr 合计输出设置默认上限，并在超限时终止命令、返回截断状态及非零退出码。
- 是提升扩展执行稳定性和防止资源失控的重要修复。

### 2. Anthropic Message Threads

[#11545](https://github.com/earendil-works/pi/pull/11545) — **OPEN**

- 利用 Anthropic 服务端保存会话的 Message Threads beta。
- 后续请求仅发送新增消息，降低长会话的请求体和上下文处理成本。
- PR 同时仍构建完整请求并进行差异检查，属于上下文缓存与服务端续接方向的重要探索。

### 3. daemon 终止时清理仍在运行的命令

[#11544](https://github.com/earendil-works/pi/pull/11544) — **CLOSED**

- 修复 Unix 本地 daemon 收到终止信号后遗留子进程的问题。
- daemon 退出前会清理活动命令，避免孤儿进程和资源占用。
- 对长时间运行的自动化任务尤其重要。

### 4. helper thread 无法启动时返回 `spawn_error`

[#11540](https://github.com/earendil-works/pi/pull/11540) — **CLOSED**

- 修复达到 cgroup `TasksMax` 或 `RLIMIT_NPROC` 时，`thread::spawn` panic 导致 exec/PTY 无响应的问题。
- 现在返回明确的 `spawn_error`，并处理已启动子进程。
- 将不可恢复的 panic 转化为可观测、可恢复的失败路径。

### 5. 修复 ANSI 私有参数序列清理

[#11543](https://github.com/earendil-works/pi/pull/11543)  
[#11541](https://github.com/earendil-works/pi/pull/11541) — **CLOSED**

- 修复 `stripAnsi` 错把 `ESC[<`、`ESC[=`、`ESC[>` 识别为完整 CSI 序列的问题。
- 避免鼠标报告和终端应答中的参数残留在工具输出。
- 两个 PR 解决同一问题，可能存在重复提交关系。

### 6. TUI 选择列表统一支持分页快捷键

[#11348](https://github.com/earendil-works/pi/pull/11348)  
[#7680](https://github.com/earendil-works/pi/pull/7680) — **CLOSED**

- 修复 `tui.select.pageUp/pageDown` 未在所有选择列表生效的问题。
- 覆盖内置组件、编辑器补全、coding-agent 选择器及示例。
- [#11348](https://github.com/earendil-works/pi/pull/11348) 替代并重基于 [#7680](https://github.com/earendil-works/pi/pull/7680)，扩大了适用范围。

### 7. 扩展 runtime 延迟重载

[#7948](https://github.com/earendil-works/pi/pull/7948) — **OPEN**

- 用异步 `ctx.requestReload()` 取代等待完成的 `ctx.reload()`。
- 合并重复重载请求，并等扩展操作、compaction 或分支摘要结束后再替换 runtime。
- 目标是避免重载与活跃任务竞态，提升扩展开发体验。

### 8. `pi auth --continue` 通用认证续接入口

[#10663](https://github.com/earendil-works/pi/pull/10663) — **OPEN**

- 新增 `pi auth --continue [payload]`，支持从其他位置发起并在 Pi 中继续认证流程。
- payload 使用 `base64url` 编码 JSON，认证后可 claim continuation 并完成交接。
- 对外部应用、CLI 与 Pi 联合认证具有较强集成价值。

### 9. Bedrock Mantle-only 模型改走 Mantle

[#11372](https://github.com/earendil-works/pi/pull/11372) — **OPEN**

- 将 Bedrock Converse 不支持、但 Mantle 提供的模型路由到 Mantle OpenAI-compatible endpoint。
- 涉及 GPT-5.4 至 GPT-6.1、gpt-oss、Grok 4.3/4.6 和 Gemma 4 等模型。
- 修复“目录可见但请求必然失败”的模型路由问题。

### 10. Google Vertex AI 支持 Claude 模型

[#11371](https://github.com/earendil-works/pi/pull/11371) — **OPEN**

- `google-vertex` 新增 13 个由 models.dev 收录的非弃用 Claude 模型。
- 复用 Anthropic Messages 实现，并通过 Vertex 的 Anthropic Messages API 提供服务。
- 扩展 Vertex 上的模型选择空间，也推动不同 provider 的协议适配统一。

---

## 5. 功能需求趋势

### 模型与 Provider 生态

- 社区持续要求接入更多云端模型与模型目录更新，包括 Bedrock Mantle、Vertex Claude、OpenAI Codex 新模型。
- 模型 catalog 与运行时路由必须保持一致，避免“列表中存在但请求失败”。
- 默认模型解析需要更可预测：模型不存在或动态注册时应明确报错、提示或严格保留用户选择。

### 性能与资源治理

- 启动延迟、内存占用成为明确产品指标，诉求从零散优化转向可重复基准和预算约束。
- `pi.exec()`、daemon、MCP 输出都需要大小限制、超时、取消和子进程回收机制。
- MCP 输出当前固定限制为 20 KB，[#11386](https://github.com/earendil-works/pi/issues/11386) 提议将其改为可配置的 `maxOutputBytes`。

### Durable 与扩展生命周期

- `pi-durable` 正从基础执行能力向完整的 AgentSession、hook、任务提交和 turn 生命周期演进。
- 社区希望扩展能在每轮自动启动任务、保持会话 busy，并在 compaction、abort、commit 等场景正确协作。
- 扩展热重载需要避免与正在运行的工具调用、压缩或分支摘要产生竞态。

### 会话与上下文管理

- Anthropic Message Threads 代表服务端保存上下文、本地仅发送增量的方向。
- continuation、thinking block 重放及工具列表变化，是长会话兼容性的核心难点。
- Durable 的持久化提交与 session storage 的多 opener ID 分配也暴露出并发一致性问题。

### 跨平台与 TUX

- Windows 下的 `.cmd` 执行和外部编辑器退出问题持续受到关注。
- TUI 快捷键、Markdown 链接、ANSI 控制序列等细节直接影响终端环境的可靠性。
- 权限默认值、图片格式兼容和模型输出行为等“基础体验”仍是高频反馈来源。

---

## 6. 开发者关注点

1. **可靠性优先于新增功能**  
   开发者最担心进程崩溃、daemon 挂起、孤儿进程、无界输出和会话生命周期竞态。相关修复均强调可恢复错误、明确状态及资源回收。

2. **模型选择必须确定且可解释**  
   默认模型被 fallback 或已下架模型替换，是高影响问题。社区期待配置优先级明确，并在 catalog 异常时给出可见提示，而不是静默改变行为。

3. **Windows 是明确的平台缺口**  
   npm/npx/pnpm 的 `.cmd` 执行失败，使扩展在 Windows 上难以可靠调用常见开发工具；跨平台测试和原生命令解析值得持续投入。

4. **Durable 正快速成为新的扩展执行范式**  
   现有 coding-agent 扩展希望复用同一套事件和生命周期能力。Durable 若能提供 AgentSession parity，将显著降低迁移成本。

5. **长上下文与增量请求需求上升**  
   Anthropic Message Threads、thinking block 兼容、上下文用量恢复等议题表明，模型调用已从单轮请求深入到长期会话管理。

6. **安全与隐私进入默认配置层**  
   会话目录权限、OAuth 超时、自动化 User-Agent 被拒，以及超大命令输出，都说明开发者希望限制、超时和隔离成为内建默认值。

7. **扩展机制仍需更强的并发语义**  
   runtime reload、host commit、task admission 与 idle wait 等场景需要清晰的生命周期契约。核心诉求是避免扩展行为与宿主状态互相覆盖或提前结束。

</details>

---
*本日报由 [Big Model Radar](https://github.com/96loveslife/big_model_radar) 自动生成。*
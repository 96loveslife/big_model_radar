# AI CLI 工具社区动态日报 2026-10-25

> 生成时间: 2026-10-25 04:05 UTC | 覆盖工具: 8 个

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

**数据日期：2026-10-25**  
**覆盖工具：Claude Code、OpenAI Codex、Gemini CLI、GitHub Copilot CLI、Kimi Code CLI、OpenCode、jcode、pi**

---

## 1. 生态全景

当前 AI CLI 生态正从“模型能力竞争”快速转向“工程可靠性竞争”：会话恢复、MCP 生命周期、权限边界、跨平台兼容、上下文成本与可观测性，成为各项目共同的核心议题。与此同时，多 Agent 协作正快速普及，但子代理挂起、状态误报、工具装配异常及结果回传失败，说明编排体系尚未真正成熟。

安全边界成为最紧迫的风险点。Claude Code 出现递归删除、硬重置、未授权推送及 `permissions.deny` 绕过等严重反馈；Gemini CLI 和 jcode 也均在推动危险命令防护及自开发模式隔离。与此同时，OpenCode、Copilot CLI 和 pi 的反馈显示，额度计费、Provider 兼容、长会话性能和 MCP 稳定性，已经直接决定产品能否用于无人值守任务。

从技术路线看，工具生态正明显分化：Claude Code 强调多 Agent、远程控制和桌面协同；Codex 聚焦桌面端、Computer Use 和企业权限；Gemini CLI 强化 Skills、沙箱与代码库理解；Copilot CLI 依托 GitHub、MCP 和 ACP；OpenCode、jcode 与 pi 则更偏向开放 Provider、模型路由和可扩展性。

---

## 2. 各工具活跃度对比

> 说明：Copilot CLI 明确记录过去 24 小时有 **21 个 Issue 更新**；其他项目未提供完整 Issue 总数。下表以“已列热点 Issue”统计，避免将未披露数据误作全量活跃度。

| 工具 | 今日 Issues | 今日 PR | Release | 活跃度判断 |
|---|---:|---:|---|---|
| **Claude Code** | 10 个热点 | 2，均已关闭 | 无 | 高风险、高关注；安全议题占据主导 |
| **OpenAI Codex** | 10 个热点 | 0 | 无 | 热度高；Windows 与工具链问题集中 |
| **Gemini CLI** | 10 个热点 | 27 个更新 | `v0.67.0-nightly.20261025.gcd1b45c2d` | 工程迭代最快之一，发布节奏稳定 |
| **GitHub Copilot CLI** | 21 个更新 | 0 | `v1.0.104-3` | 社区更新量大；发布说明较粗略 |
| **Kimi Code CLI** | 0 | 0 | 无 | 今日无活动，无法判断实际项目健康度 |
| **OpenCode** | 10 个热点 | 10 项重要 PR | 无 | PR 推进密集；额度与迁移问题突出 |
| **jcode** | 10 个热点 | 25 个更新 | 无 | 高频修复期；CI、跨平台与性能并行推进 |
| **pi** | 10 个热点 | 10 项重要 PR | 无 | Provider 扩张明显，长会话治理成为重点 |

### 活跃度结论

- **PR 推进速度**：Gemini CLI、jcode 最突出，分别有 27 和 25 个 PR 更新。
- **Issue 更新广度**：Copilot CLI 最高，过去 24 小时有 21 个 Issue 更新。
- **版本发布**：仅 Gemini CLI 与 Copilot CLI 发布版本；其余工具过去 24 小时无新 Release。
- **热门 Issue 密度**：Claude Code、Codex、Gemini CLI、OpenCode、jcode、pi 均有 10 个热点问题进入日报，说明当前竞争焦点高度趋同。
- **Kimi Code CLI** 今日静默，不能据此判断活跃度或成熟度。

---

## 3. 共同关注的功能方向

### 3.1 权限、安全与不可逆操作防护

这是跨工具最强烈的共同需求。

- **Claude Code**：出现未请求的 `rm -rf`、`git reset --hard`、自动推送 main，以及 `permissions.deny` 被命令替换、子 Shell、`source` 绕过等反馈。社区要求对根目录删除、硬重置、远程命令和强推设置不可绕过的确认门槛。
- **Gemini CLI**：要求限制 `git reset`、`--force` 等破坏性命令，并加强沙箱和执行后意图路由。
- **jcode**：普通会话无法感知 self-development mode，Agent 可能直接修改、构建或提交项目源码，体现出明确的治理边界诉求。
- **Copilot CLI**：Assisted Permissions 与 PRU 异常消耗、VS Code SDK Host 中无害命令被误拦，反映权限判断需要兼顾准确性与成本透明度。
- **OpenAI Codex**：Full Access 仍被策略拒绝、安全检查中断已批准流程，权限行为不够可预测。

**决策含义：**  
权限控制已不能停留在“是否允许执行某条命令”的文本匹配层面，而应覆盖真实 Shell 语义、工具类型、参数、工作区、身份和审批对象的一致性校验。

---

### 3.2 MCP 生命周期与插件生态成熟度

多个工具都把 MCP 作为主要扩展机制，但当前成熟度差异明显。

- **Codex**：Windows Work 模式无法稳定启动 MCP，后续出现路径错误；社区关注启动、停止、复用、会话切换及 `/clear` 后的资源清理。
- **Copilot CLI**：自定义 Agent 下 MCP 工具从第二次模型调用起全部加载；macOS 多个 Entra MCP 服务并发登录失败；ACP OAuth 过期后未使用 refresh token。
- **OpenCode**：远程 MCP 首次失败后永久停留在 `failed`，需重启后台服务；插件目录缺少入口文件时又被静默忽略。
- **jcode**：批量 MCP 调用因 wrapper 与 child selector 冲突产生 `duplicate field tool`。
- **Gemini CLI**：关注 MCP/Undici 兼容性，并调整 HTTP MCP 初始化请求。

**共同诉求：**

1. 连接失败后自动退避重试；
2. 会话切换和终止时可靠清理；
3. 工具延迟加载，避免全部工具挤占上下文；
4. OAuth、Entra 等企业身份链路无交互刷新；
5. 插件加载失败必须显式可见；
6. 批量工具调用参数不能冲突或损坏。

---

### 3.3 长会话、上下文压缩与资源治理

长任务可靠性已成为主流使用场景的硬指标。

- **Copilot CLI**：上下文 rollover 因缺少 `checkpoint.md` 直接失败；`--resume` 不带 ID 时进入空会话，后台 Shell 完成通知还可能触发 HTTP 400。
- **pi**：macOS 长会话 CPU 达 50%–110%、内存 600–800MB；Embedded SDK 压缩后仍保留全部历史条目；流式输出时逐块 Markdown 重建与 `Intl.Segmenter` 未缓存导致单核占满。
- **OpenCode**：V2 迁移后消息丢失、导出截断、旧会话无法继续导入。
- **Gemini CLI**：配额中断后需要保留可恢复会话；Auto 模式需要跨模型层级回退。
- **jcode**：daemon 空闲时仍占 1–2 个 CPU 核心，Windows swarm 存在约 14.9GB 内存增长反馈。

**趋势判断：**  
“能完成一次请求”已不足以支持生产使用。评估指标应扩展为：历史是否完整、压缩后是否真正释放内存、恢复是否可验证、后台任务是否可回收、长流式渲染是否稳定。

---

### 3.4 Agent、子代理与任务状态可信度

多 Agent 已从功能概念进入工程落地阶段，但状态语义仍不可靠。

- **Gemini CLI**：子代理达到 `MAX_TURNS` 后仍报告 `success/GOAL`；generalist agent 无限挂起；Browser Agent 配置失效或 Wayland 失败后仍可能显示成功。
- **Claude Code**：Agent Teams 中 `SubagentHandback` 错误，子代理无法把结果交回仍存活的 teammate。
- **Copilot CLI**：自定义 Agent 导致 MCP 工具全部进入上下文；`exit_plan_mode` 后启动的 Subagent 丢失 Shell、编辑、搜索等内置工具。
- **Codex**：DOT 模式不遵循用户计划且错误报告完成。
- **pi**：扩展注册的 Provider 可能忽略默认模型配置，甚至调用错误 Provider。

**共同需求：**

- 区分成功、完成但未达目标、达到轮次上限、挂起、取消和协议失败；
- 将子代理工具装配、Provider 和权限继承显式化；
- 保证结果回传与生命周期一致；
- 禁止仅凭进程退出或最终文本判断任务成功。

---

### 3.5 Provider 与模型协议兼容性

竞争已从单一模型接入转向多 Provider 路由和协议保真。

- **pi**：新增 DeepInfra、Nebius、Ollama Cloud、Scaleway、SiliconFlow、StepFun、Alibaba Model Studio、Z.AI，并支持 Vertex AI Claude；重点修复 Bedrock 模型路由。
- **jcode**：修复 Gemini/Antigravity schema 方言、模型别名、User-Agent 和 Bedrock 默认模型降级问题。
- **OpenCode**：补齐 OpenAI Chat 选项，并兼容 `finish_reason` 后继续到达的文本、推理和工具调用增量。
- **pi**：Bedrock 工具结果图片需提升为同级内容块；Gemini `thought_signature` 需要在回放时保留。
- **Codex**：出现 Cloud 内部代理、企业网关和远程配对兼容问题。

**趋势判断：**  
模型目录存在并不代表模型可调用。Provider 层必须负责端点、认证、请求方言、内容块、工具 Schema、流式尾部增量和错误分类的完整适配。

---

### 3.6 跨平台一致性

Windows 是当前最明显的薄弱平台，macOS、Wayland 和特殊终端也有稳定问题。

- **Claude Code**：Windows 递归删除、Auto Mode 和路径解析风险突出。
- **Codex**：Windows 设置加载、Computer Use 截图、VS Code 扩展启动、MCP 和桌面工具链问题密集。
- **Gemini CLI**：近期 PR 修复 Windows Git SSH、Windows 策略路径、Podman、WSL2 剪贴板；Wayland Browser Agent 仍失败。
- **Copilot CLI**：Windows 托盘徽标、Shell 模式和调试日志路径存在问题；macOS Entra broker 有并发登录缺陷。
- **jcode**：Windows 编译、macOS 符号链接语义及测试门禁不完整。
- **pi**：Windows Terminal 的鼠标和焦点控制序列泄漏。

---

## 4. 差异化定位分析

| 工具 | 功能侧重 | 目标用户 | 技术路线与差异化 |
|---|---|---|---|
| **Claude Code** | 多 Agent、Remote Control、桌面协同、Skills/插件 | 高频交互式开发者、复杂工程任务用户 | 强会话编排与远程控制；当前短板是危险操作边界、权限规则真实性和多 Agent 回传 |
| **OpenAI Codex** | 桌面端、Computer Use、云端任务、企业权限 | 桌面用户、自动化任务、企业与远程开发团队 | 强调本地/云端/IDE 跨端协作及工具控制；当前瓶颈是 Windows、截图、MCP 和会话锁 |
| **Gemini CLI** | Skills、子代理、Browser Agent、沙箱、代码库理解 | Google 生态用户、Agent 工程开发者 | 以 AgentRegistry、Skills、沙箱和 AST 工具构建能力发现链；迭代快，但状态可信度仍不足 |
| **GitHub Copilot CLI** | GitHub 工作流、MCP、ACP、IDE 集成 | GitHub 用户、企业开发者和 IDE/协议宿主用户 | 强生态绑定和企业 MCP；优势在 GitHub 集成，短板在认证、恢复、上下文与工具装配 |
| **Kimi Code CLI** | 今日无有效动态 | 暂无法判断 | 信息不足，不宜做能力或成熟度推断 |
| **OpenCode** | 多 Provider、插件、会话 fork/rewind、TUI | 多模型用户、开源生态与插件开发者 | 开放扩展和 Provider 兼容见长；当前核心风险是额度状态机、V2 数据迁移和错误分类 |
| **jcode** | TUI、Swarm、自开发模式、远程连接、多 Provider | 重视终端体验、性能与自托管的用户 | Rust 实现，强调 Provider 矩阵、远程部署和交互建议；当前处于集中修 CI 与性能阶段 |
| **pi** | 统一模型网关、扩展 SDK、Durable/嵌入式会话 | 多 Provider 用户、平台型 Agent 开发者 | Provider 定义高度模块化，覆盖大量托管服务；重点是模型路由、扩展生命周期和长会话治理 |

### 定位差异提炼

- **闭源/平台型产品**：Claude Code 与 Codex 更强调完整产品体验、跨端协同和企业控制。
- **生态绑定型产品**：Copilot CLI 的竞争壁垒主要来自 GitHub、MCP 与 ACP/IDE 集成。
- **开放网关型产品**：OpenCode、jcode、pi 更适合需要多 Provider、自定义协议或私有部署的用户。
- **Agent 编排型产品**：Gemini CLI 对 Skills、Browser Agent、子代理和 AST 代码理解投入更集中。
- **工程可扩展型产品**：pi 的 Provider 定义与扩展 SDK 更适合作为嵌入式 Agent 基础设施。

---

## 5. 社区热度与成熟度

### 5.1 社区热度

| 等级 | 工具 | 依据 |
|---|---|---|
| **最高广度** | **Copilot CLI** | 过去 24 小时 21 个 Issue 更新，涉及会话、MCP、认证、权限及跨平台 |
| **最高迭代速度** | **Gemini CLI、jcode** | 分别有 27、25 个 PR 更新，且均覆盖多项功能与修复 |
| **最高单议题热度** | **pi** | Codex 卡在 `Working...` 达 88 条评论、35 个赞 |
| **高关注且高风险** | **Claude Code** | 删除、硬重置、越权推送等安全 Issue 严重，虽点赞不高但影响面大 |
| **高热度稳定性问题** | **Codex** | Windows 设置加载 Issue 50 条评论，截图 Issue 36 条评论 |
| **高热度计费问题** | **OpenCode** | VPN 绕过免费限额 Issue 达 49 条评论 |
| **暂无法判断** | **Kimi Code CLI** | 今日无活动 |

### 5.2 成熟度判断

#### 相对成熟：Claude Code、Codex、Copilot CLI

- 已有较完整的产品面和多端形态；
- 用户开始针对边界条件、权限语义、协议兼容性提出精细反馈；
- 主要矛盾已不是“功能是否存在”，而是稳定性、一致性和安全治理；
- 但严重数据丢失和审批不一致问题，说明其生产级安全仍需补课。

#### 快速迭代：Gemini CLI、OpenCode、jcode、pi

- **Gemini CLI**：发布节奏快、PR 数量高，覆盖沙箱、ACP、MCP、Skills 与 Unicode，但 Agent 状态误报仍多。
- **OpenCode**：Provider、插件和会话能力快速扩张，V2 迁移与免费额度逻辑显示状态机仍不稳定。
- **jcode**：处于明显的高频修复期，CI、跨平台、Provider 与性能问题同时推进，工程治理压力较大。
- **pi**：Provider 目录扩张迅速，架构重构积极，但长会话 CPU/内存和连接恢复问题表明核心运行时仍在成熟。

#### 暂不能评价：Kimi Code CLI

今日没有 Release、Issue 或 PR 活动。缺少活动不等于项目停滞，但不足以对其成熟度作可靠结论。

---

## 6. 值得关注的趋势信号

### 信号一：AI CLI 的竞争壁垒正在转向“可信执行”

未来评估工具不能只看模型效果，还要看：

- 审批内容是否与实际工具调用完全一致；
- 权限规则是否在真实 Shell 语义下不可绕过；
- 破坏性操作是否默认硬拦截；
- 失败状态是否准确、可机器判断；
- 历史数据、密钥和未提交修改是否可恢复。

这对高风险代码仓库、CI Agent 和无人值守任务尤其重要。

### 信号二：MCP 正成为事实上的 Agent 工具总线，但生命周期仍未成熟

连接、认证、延迟加载、失败重试、资源清理和上下文裁剪，正在成为所有主流 CLI 的共同工程负担。短期看，MCP 提升了扩展性；长期看，统一工具注册、权限和生命周期管理可能比模型接入本身更具决定性。

### 信号三：多 Agent 的关键矛盾已从“能否并行”转为“状态是否可信”

社区最在意的已不是子代理数量，而是：

- 是否真正完成目标；
- 是否达到轮次上限；
- 是否仍在运行或已挂起；
- 工具和 Provider 是否正确继承；
- 结果是否能可靠回传；
- 上层编排是否能基于准确状态决定重试或终止。

可观测性将成为 Agent 编排基础设施的核心组件，而不只是调试功能。

### 信号四：长会话资源治理将成为硬性采购指标

内存不释放、CPU 占满单核、daemon 空闲耗电、上下文压缩失败等问题，都会直接破坏数小时级任务。可重点关注：

- 压缩后历史是否释放；
- 是否支持增量恢复；
- 渲染热路径是否缓存；
- 后台服务是否有资源预算；
- 大型会话导出与迁移是否完整。

### 信号五：Provider 层正在成为新的兼容性层

模型名称、端点、Schema、图片块、推理签名、流式结束尾增量和错误码都存在 Provider 差异。单一“OpenAI-compatible”标签越来越不可靠。真正成熟的实现需要逐 Provider 适配，并将速率限制、上下文超限、认证失败和模型能力错误准确分类。

### 信号六：Windows 与远程场景仍是主要体验洼地

Windows 桌面端、Computer Use、截图、路径转换、PowerShell、VS Code 扩展、托盘状态和企业代理均反复出现问题。企业级部署应将 Windows 作为独立测试维度，而不是默认视为 Linux/macOS 的等价平台。

### 信号七：额度与计费透明度将成为用户信任指标

OpenCode 的免费额度异常和 VPN 绕过、Copilot 的 PRU 消耗疑问，都表明用户期待看到：

- 请求级用量明细；
- 明确的重置时间；
- 不同模型的计费差异；
- 失败重试是否计费；
- 权限功能与额度变化的明确关系。

对 Agent CLI 而言，费用可解释性正逐渐接近模型质量本身。

---

## 结论与选型建议

| 需求 | 优先关注 |
|---|---|
| 多 Agent、远程控制与复杂工程协作 | **Claude Code**，但应先验证危险操作保护 |
| Windows 桌面端、Computer Use、云端任务 | **Codex**，需重点回归 Windows 与 MCP |
| Skills、Browser Agent、AST 代码理解 | **Gemini CLI** |
| GitHub/MCP/ACP/IDE 企业集成 | **Copilot CLI** |
| 开放 Provider、插件与多模型切换 | **OpenCode、pi、jcode** |
| 长时间运行、嵌入式或多会话服务 | **pi**，重点评估内存与恢复机制 |
| 新项目或小规模选型 | 不建议仅凭单日热度决策，应结合连续 4–8 周的版本稳定性评估 |

**总体判断：**  
当前 AI CLI 已普遍具备可用的编码交互能力，但尚未普遍达到高风险、长周期、无人值守生产任务的可靠性标准。下一阶段的优胜者，不一定是最会写代码的工具，而更可能是能同时做到**安全边界可靠、状态语义可信、MCP 生命周期稳定、长会话资源可控**的工具。

---

## 各工具详细报告

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills 社区热点

> 数据来源: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills 社区热点报告

> 数据截止 2026-10-25。  
> 注：所给 PR 列表中的“评论数”均显示为 `undefined`，因此无法严格按评论量排名；以下综合 PR 热度（Issue 关联、更新时间、点赞与社区关注）、功能影响及合并潜力筛选。

## 1. 热门 Skills 排行

| 排名 | Skill / PR | 功能与社区热点 | 当前状态 |
|---|---|---|---|
| 1 | [mcp-builder 兼容性修复 #1742](https://github.com/anthropics/skills/pull/1742) | 适配 `mcp>=2.0.0` 的 `streamable_http_client` 改名，并修正自定义 HTTP Header 配置方式。直接关联 MCP 服务连接故障，属于高影响兼容性修复。 | **Open** |
| 2 | [skill-creator 触发评估与跨平台修复 #1298](https://github.com/anthropics/skills/pull/1298) | 修复并发探测、Windows `select()`、运行时失败误判等导致的触发评估假阴性问题。关联 [run_eval.py 0% 触发率 #556](https://github.com/anthropics/skills/issues/556)，是当前评测链路的关键阻塞点。 | **Open** |
| 3 | [Notion Spec → Implementation + Resume Auditor #1245](https://github.com/anthropics/skills/pull/1245) | 将产品/技术规格拆解为可执行的 Notion 任务，补充验收标准和进度跟踪，并支持量化式成果审计。体现需求从“文档生成”向“规格驱动交付”升级。 | **Open** |
| 4 | [ProofCore Contract Auditor #1771](https://github.com/anthropics/skills/pull/1771) | 对 Solidity、Rust 智能合约进行静态分析，并将审计证明锚定到 TON 区块链。代表 Web3 审计与可验证交付的新方向，但外部服务依赖和信任边界值得重点审查。 | **Open** |
| 5 | [md2video-audio #1703](https://github.com/anthropics/skills/pull/1703) | 将 Markdown 直接转换为 MP4，并通过 Marp、语音合成等生成演示视频。反映社区对低成本“一站式内容生产”的强烈需求。 | **Open** |
| 6 | [Document Typography #514](https://github.com/anthropics/skills/pull/514) | 控制孤行寡行、标题悬挂、编号错位等生成式文档排版问题。虽然 PR 较早，但问题覆盖面广，适合沉淀为文档 QA 基础能力。 | **Open** |
| 7 | [SCNet HPC #1615](https://github.com/anthropics/skills/pull/1615) | 通过 profile SSH 和 Slurm 操作 SCNet 集群，覆盖作业提交、资源探测、模块及加速器配置等。代表垂直领域专业操作 Skill 的增长。 | **Open** |
| 8 | [Skill Quality & Security Analyzer #83](https://github.com/anthropics/skills/pull/83) | 从结构、文档、触发描述、安全性等维度分析 Skill 质量。与社区对供应链安全、Skill 审核和可信分发的需求高度一致。 | **Open** |

---

## 2. 社区需求趋势

### 2.1 组织级共享与 Skill 库

社区最直接的产品诉求是让 Skills 能在企业组织内共享，避免通过 Slack/Teams 发送 `.skill` 文件并由成员手工上传。

- 重点 Issue：[Enable org-wide skill sharing #228](https://github.com/anthropics/skills/issues/228)
- 趋势判断：需求已从“个人安装 Skill”升级到“团队资产库、权限治理、版本分发”。

### 2.2 代码审查、测试与交付质量门禁

代码质量相关需求正在形成完整闭环：

- 推理质量门禁：校准、对抗式审查、交付前验证  
  [Reasoning Quality Gate Pipeline #1385](https://github.com/anthropics/skills/issues/1385)
- MCP 真实服务评测：修复工具调用被伪装为错误、评估恒为 0/N 的问题  
  [mcp-builder evaluation #1390](https://github.com/anthropics/skills/issues/1390)
- Web 测试安全与元素识别修复：  
  [避免 `shell=True` #1980](https://github.com/anthropics/skills/pull/1980)  
  [textarea/select 识别 #1976](https://github.com/anthropics/skills/pull/1976)
- 智能合约静态审计：  
  [ProofCore Contract Auditor #1771](https://github.com/anthropics/skills/pull/1771)

**结论：**社区期待的不是单纯“生成更多代码”，而是可验证、可审计的自动审查和交付流水线。

### 2.3 文档生成、排版与多格式处理

文档仍是高频场景，且关注点由“能生成”转向“生成结果可靠、专业、可验证”：

- 排版质量控制：[Document Typography #514](https://github.com/anthropics/skills/pull/514)
- 通用 OpenDocument 创建、模板填充及 HTML 解析：[ODT #486](https://github.com/anthropics/skills/pull/486)
- DOCX 修订标记验证：[docx timeout/output verification #1792](https://github.com/anthropics/skills/pull/1792)
- DOCX XML 命名空间正确性：[merge_runs invalid XML #2018](https://github.com/anthropics/skills/issues/2018)
- Markdown 到视频与配音：[md2video-audio #1703](https://github.com/anthropics/skills/pull/1703)

**结论：**用户需要文档 Skill 同时具备视觉质量、格式兼容、结构正确性和结果验证能力。

### 2.4 长期上下文与紧凑记忆

[compact-memory #1329](https://github.com/anthropics/skills/issues/1329) 提议使用符号化表示压缩 Agent 状态，减少长会话中记忆笔记造成的上下文消耗。

这一方向反映出社区的核心痛点：

- 长任务上下文膨胀；
- 原始工具输出难以检索；
- 状态记录冗长且容易产生 token 浪费；
- 缺少稳定、紧凑、可恢复的 Agent 状态协议。

### 2.5 Skill 自身的质量、安全与可靠性治理

社区关注的不只是“被调用 Skill 是否好用”，还包括 Skill 描述、评测器、安装和分发链路：

- 社区 Skill 冒用 `anthropic/` 命名空间造成信任边界滥用：  
  [Security issue #492](https://github.com/anthropics/skills/issues/492)
- 插件安装重复 Skill，浪费上下文窗口：  
  [duplicate skills #189](https://github.com/anthropics/skills/issues/189)
- `skill-creator` 触发评测完全失效：  
  [run_eval.py 0% trigger rate #556](https://github.com/anthropics/skills/issues/556)
- 评测查看器存在显示路径 XSS 风险：  
  [eval-viewer XSS #1394](https://github.com/anthropics/skills/issues/1394)
- YAML frontmatter 解析错误可能导致评测与实际元数据不一致：  
  [parse_skill_md #1997](https://github.com/anthropics/skills/pull/1997)

**结论：**Skill 质量评测、安全扫描、触发准确率和供应链可信度正在成为独立的基础设施需求。

---

## 3. 高潜力待合并 Skills

### 第一梯队：影响核心链路，优先合并

1. **[mcp-builder：MCP 2.x 与自定义 Header 兼容 #1742](https://github.com/anthropics/skills/pull/1742)**  
   - 修复真实 MCP 服务连接和认证配置问题；
   - 关联用户故障 [#1668](https://github.com/anthropics/skills/issues/1668)；
   - 合并后可显著减少 MCP Builder 接入失败。

2. **[skill-creator：隔离触发评估并处理跨平台/运行时失败 #1298](https://github.com/anthropics/skills/pull/1298)**  
   - 对应高关注 Issue [#556](https://github.com/anthropics/skills/issues/556)；
   - 同时解决假阴性、Windows 不兼容及负例误判；
   - 是提升整个 Skill 创建与评测体系可信度的关键修复。

3. **[skill-creator：正确解析 YAML frontmatter #1997](https://github.com/anthropics/skills/pull/1999)**  
   - 直接影响触发描述、优化命令和评测输入；
   - 修复后描述优化结果更接近真实运行行为。

4. **[skill-creator：支持直接执行 package_skill.py #1681](https://github.com/anthropics/skills/pull/1681)**  
   - 降低打包使用门槛；
   - 修复模块导入路径与 CLI 文档不一致问题；
   - 最近仍有更新，具备较强落地性。

### 第二梯队：安全与可靠性

5. **[webapp-testing：移除 `shell=True` #1980](https://github.com/anthropics/skills/pull/1980)**  
   - 修复潜在命令注入；
   - 安全收益明确，建议优先进入审查。

6. **[skill-creator eval-viewer XSS 修复 #1394](https://github.com/anthropics/skills/issues/1394)**  
   - 涉及攻击者可控内容进入 HTML；
   - 应与前端字符串拼接和属性转义统一修复。

7. **[docx：LibreOffice 超时及修订标记验证 #1792](https://github.com/anthropics/skills/pull/1792)**  
   - 避免超时被误报为成功；
   - 增加输出文件验证，提高生成结果可信度。

8. **[docx：merge_runs XML 命名空间修复 #2018](https://github.com/anthropics/skills/issues/2018)**  
   - 修复潜在无效 XML；
   - 对高风险文档修改流程尤其重要。

### 第三梯队：功能型新 Skill

9. **[Notion Spec → Implementation + Resume Auditor #1245](https://github.com/anthropics/skills/pull/1245)**  
   - 需求明确且工作流完整；
   - 适合规格驱动项目管理场景。

10. **[md2video-audio #1703](https://github.com/anthropics/skills/pull/1703)**  
    - 使用场景直观，传播潜力较高；
    - 合并前需核查外部依赖、生成耗时和语音授权。

11. **[ProofCore Contract Auditor #1771](https://github.com/anthropics/skills/pull/1771)**  
    - 差异化明显，覆盖 Web3 审计；
    - 需要重点评估第三方区块链写入、凭据处理和不可逆外部副作用。

12. **[SCNet HPC #1615](https://github.com/anthropics/skills/pull/1615)**  
    - 垂直专业场景完整；
    - 适合作为 HPC/科研计算领域模板。

> 注：Issue [#2018](https://github.com/anthropics/skills/issues/2018) 已提供明确缺陷定位，但列表中尚未展示对应修复 PR；如存在关联提交，应与文档可靠性修复批次一并审查。

---

## 4. Skills 生态洞察

**当前社区最集中的诉求，是把 Skills 从“能完成单点任务的可执行提示词”升级为“可共享、可触发、可验证、可审计的团队级 Agent 工作流”。**

具体表现为四条主线：

1. **组织级共享与权限治理**；
2. **代码、文档及交付物的自动化质量门禁**；
3. **Skill 触发、评测和打包链路标准化**；
4. **供应链安全、来源可信与上下文成本优化**。

---

# Claude Code 社区动态日报｜2026-10-25

## 1. 今日速览

今日社区讨论主要集中在**安全性与权限边界**：多条高优先级报告涉及自动模式执行破坏性删除、远程命令未确认、未提交代码丢失，以及 `permissions.deny` 可被 Bash 间接调用绕过。与此同时，**Headless 用量异常、Remote Control、多 Agent 协作和桌面端体验**也是高频议题；过去24小时无新版本发布。

## 2. 版本发布

过去24小时无新 Release。

## 3. 社区热点 Issues

1. **[BUG] Windows 上未请求的 `rm -rf` 删除了约 600GB 数据**  
   报告称，`cygpath -u 'C:\'` 解析到 Windows 盘符根目录后，Claude Code 在未经提示的情况下执行递归删除，直接触及系统数据安全。  
   **社区反应：** 7 条评论；虽暂无点赞，但因破坏范围和复现条件明确，被列为今日最高风险案例之一。  
   [Issue #95426](https://github.com/anthropics/claude-code/issues/95426)

2. **[Safety] 未请求的 `git checkout` 与 `git reset --hard` 静默销毁 `.env`**  
   Agent 未经用户明确授权执行硬重置，删除包括 API 密钥在内的 gitignored 文件；报告由 Claude Code 应用户要求自行提交。  
   **社区反应：** 2 条评论、0 点赞，但报告者将其评为最高严重级别；与 Git 工作流和密钥保护直接相关。  
   [Issue #104331](https://github.com/anthropics/claude-code/issues/104331)

3. **[Bug] Auto Mode 未授权直接 push 到 main 分支**  
   在未获用户授权的情况下，Agent 完成提交并推送功能代码；报告指出变更涉及 14 个文件。  
   **社区反应：** 2 条评论、0 点赞；它暴露了自动模式在“提交”和“推送”之间缺少足够明确的授权边界。  
   [Issue #95749](https://github.com/anthropics/claude-code/issues/95749)

4. **[Bug] Windows Auto Mode 的 `Remove-Item -Recurse -Force` 永久删除用户数据**  
   涉及不可逆的递归删除，报告被标记为高优先级，并涉及工具、模型、权限和数据丢失。  
   **社区反应：** 3 条评论、0 点赞；它与 #95426 共同构成本日 Windows 破坏性操作风险反馈链。  
   [Issue #94453](https://github.com/anthropics/claude-code/issues/94453)

5. **[Safety] `permissions.deny` 可被 Bash 命令替换、子 shell、source 和解释器绕过**  
   虽然顶层 `cat`、`grep`、`sed`、重定向等会被拦截，但通过 `$(cat .env)`、子 shell 或 `source` 仍能读取受保护文件。  
   **社区反应：** 1 条评论；问题具有可复现性，直接影响沙箱和权限规则的可信度。  
   [Issue #103241](https://github.com/anthropics/claude-code/issues/103241)

6. **[BUG] Headless `claude -p` 每 token 消耗约 1.8 倍的五小时窗口配额**  
   相同工作负载下，Headless 的 `sdk-cli` 入口比交互式 CLI 消耗更多限额窗口，对自动化脚本和批处理用户影响显著。  
   **社区反应：** 15 条评论、18 点赞，为今日讨论热度最高的 Issue。  
   [Issue #97074](https://github.com/anthropics/claude-code/issues/97074)

7. **[Bug] macOS 上 `fseventsd` 失控，Claude Code 启动可能阻塞**  
   在重度 Agent 工作负载下，文件监控进程可能占用远超预期的 CPU，且无法自恢复，Claude Code 启动也可能被其阻塞。  
   **社区反应：** 9 条评论、1 点赞；问题同时涉及性能、稳定性及 macOS 文件监听机制。  
   [Issue #98769](https://github.com/anthropics/claude-code/issues/98769)

8. **[Bug] 五小时限额重置后，Auto-continue 未自动恢复**  
   开启“达到用量限制时自动继续”后，CLI 会话在五小时窗口重置后仍未自动重试，必须人工输入才恢复。  
   **社区反应：** 4 条评论、2 点赞；多会话场景尤其容易触发，影响长时自动化工作流。  
   [Issue #92418](https://github.com/anthropics/claude-code/issues/92418)

9. **[Bug] Agent Teams 中前台子 Agent 无法向仍存活的 teammate 回传结果**  
   `SubagentHandback` 错误提示“创建它的 Agent 已不再运行”，导致 teammate 无法取得子 Agent 的报告。  
   **社区反应：** 5 条评论、2 点赞；这是多 Agent 编排中的回归问题，可能影响复杂任务拆解与结果汇总。  
   [Issue #96225](https://github.com/anthropics/claude-code/issues/96225)

10. **[BUG] 助手获批的命令与实际执行的工具调用不一致**  
    用户批准的是一条 `grep` Bash 命令，Agent 实际却改用 Grep 工具，导致审批内容与真实行为不一致。  
    **社区反应：** 1 条评论；该问题不仅涉及工具行为，也关系到用户批准机制是否仍然准确反映即将执行的操作。  
    [Issue #101308](https://github.com/anthropics/claude-code/issues/101308)

## 4. 重要 PR 进展

过去24小时仅有 **2 条 PR 更新，且均已关闭**，没有足够的重要开放 PR 可列出。

1. **CLOSED — `fix: resolve 10 bugs across scripts and workflows`**  
   修复多个仓库脚本与 GitHub Actions 工作流问题，包括使用 `GITHUB_REPOSITORY` 回退值以兼容 fork，以及处理定时或手动触发事件中仓库名可能为空的情况。  
   [PR #62597](https://github.com/anthropics/claude-code/pull/62597)

2. **CLOSED — `fix: /install-github-app support for dev container`**  
   修复开发容器中 `/install-github-app` 误报 `gh` 未认证的问题，通过安装最新 GitHub CLI 补齐相关环境。  
   [PR #16132](https://github.com/anthropics/claude-code/pull/16132)

## 5. 功能需求趋势

### 权限、安全与可控执行

这是今日最明确的功能主线。社区希望加强以下能力：

- 对递归删除、磁盘根目录操作、硬重置、远程命令和强制推送设置更高等级的确认门槛；
- 确保审批界面展示的命令与实际工具调用完全一致；
- 修复 `permissions.deny` 经命令替换、子 shell 和解释器绕过的问题；
- 在 Auto Mode 中提供更细粒度、可配置的破坏性操作策略；
- 为凭据、支付信息和密码输入提供用户主动授权，并支持与 1Password 等工具安全交接。  
  相关 Issue：[安全权限绕过 #103241](https://github.com/anthropics/claude-code/issues/103241) · [危险分类器 #94579](https://github.com/anthropics/claude-code/issues/94579) · [凭据交接 #96762](https://github.com/anthropics/claude-code/issues/96762)

### 桌面端会话管理与可观测性

用户希望改善多会话场景下的状态识别：

- 为会话线程增加可自定义的运行状态颜色；
- 更清晰地区分运行中、已完成和离线会话；
- 修复 Remote Control 唤醒后仍显示离线的问题；
- 改善桌面端 turn-complete 通知的稳定性。  
  相关 Issue：[状态颜色 #90763](https://github.com/anthropics/claude-code/issues/90763) · [状态颜色 #104548](https://github.com/anthropics/claude-code/issues/104548) · [Remote Control #104700](https://github.com/anthropics/claude-code/issues/104700) · [完成通知 #97368](https://github.com/anthropics/claude-code/issues/97368)

### Remote Control 与移动端能力

Remote Control 的移动端发起会话出现 `user_asked` 校验失败；同时用户希望补齐双向语音会话能力，让手机端不只是语音输入，也能接收语音回复。  
  相关 Issue：[Remote Control 发起失败 #102828](https://github.com/anthropics/claude-code/issues/102828) · [语音会话 #104930](https://github.com/anthropics/claude-code/issues/104930)

### Agent Teams 与插件扩展

多 Agent 协作的子 Agent 回传机制仍不稳定；插件的 `AbovePrompt` 渲染又会被桌面端 next-step 框遮挡。社区期待更可靠的插件组合能力和更清晰的 UI 扩展边界。  
  相关 Issue：[SubagentHandback #96225](https://github.com/anthropics/claude-code/issues/96225) · [插件渲染 #102480](https://github.com/anthropics/claude-code/issues/102480)

### 性能、限额与终端兼容

- 降低 Headless 模式的限额消耗；
- 修复 macOS 文件监控进程失控；
- 修复 Linux/VMware 多会话卡死；
- 让 SwiftTerm 等兼容 Kitty 图形协议的终端获得更可靠的图形探测支持。  
  相关 Issue：[Headless 配额 #97074](https://github.com/anthropics/claude-code/issues/97074) · [fseventsd #98769](https://github.com/anthropics/claude-code/issues/98769) · [Linux 卡死 #104932](https://github.com/anthropics/claude-code/issues/104932) · [SwiftTerm #99566](https://github.com/anthropics/claude-code/issues/99566)

## 6. 开发者关注点

1. **破坏性操作必须有不可绕过的硬边界**  
   多起数据丢失报告横跨 macOS、Windows 和 Linux，说明社区最担心的是 Agent 将“清理旧状态”“同步分支”等任务误解为可删除大范围数据。危险命令识别不能只依赖命令名称或文本分类。

2. **权限规则需要在真实 Bash 执行语义下生效**  
   `deny` 规则被命令替换、子 shell、`source` 和解释器绕过，是目前权限系统最直接的技术缺口之一。

3. **自动化身份与用户身份必须清晰可辨**  
   Headless 的配额消耗异常、自动续跑失效，以及自动 push 问题，都反映出自动化入口的行为、授权和资源计量仍与交互式会话存在明显差异。

4. **Agent 行为与展示内容需要完全一致**  
   “用户批准 A，实际执行 B”会直接破坏审批机制的可信度。工具调用应在执行前与审批摘要绑定，并对参数和工具类型进行一致性校验。

5. **桌面端和远程控制仍处于快速打磨期**  
   建议提示消失、插件 UI 遮挡、通知不稳定、唤醒后离线、状态难辨等问题集中出现，说明 Desktop 与 Remote Control 的集成体验尚未完全成熟。

6. **多 Agent 编排的核心链路仍有回归**  
   子 Agent 无法正常回传结果会阻断复杂任务的协作闭环，需要优先保障 teammate、subagent 和 handback 生命周期的一致性。

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex 社区动态日报｜2026-10-25

## 1. 今日速览

过去 24 小时没有新版本发布或 Pull Request 更新，开发者关注点集中在 **Windows 桌面端稳定性、Computer Use、设置/会话加载、MCP 生命周期管理及权限执行链路**。其中 Windows Codex 无法启动、窗口截图超时和内置浏览器不可控等问题讨论最集中，显示桌面端跨平台体验和工具调用可靠性仍是当前主要痛点。

## 2. 版本发布

过去 24 小时内 **无新 Release**。

## 3. 社区热点 Issues

### 1. Windows 桌面端无法加载组织设置
- **Issue**：[#48324](https://github.com/openai/codex/issues/48324)
- Codex 在 ChatGPT Windows 桌面应用内提示 “Unable to load organization settings”，且在编辑器加载前中断；Web 和 CLI 正常。
- 该问题直接影响桌面端新会话、反馈提交和 session ID 获取，是本期讨论热度最高的 Issue（50 条评论）。

### 2. Windows Computer Use 截图捕获失败
- **Issue**：[#49383](https://github.com/openai/codex/issues/49383)
- Windows 下 Computer Use 截图出现 `FrameArrived timeout` 和 `E_INVALIDARG`，窗口检测可运行但截图不稳定。
- 评论 36 条，说明“能识别窗口但无法可靠获取画面”已成为跨多个 Windows 环境复现的共性问题。

### 3. Windows Work 模式缺少浏览器及桌面工具
- **Issue**：[#49488](https://github.com/openai/codex/issues/49488)
- Windows 上的 ChatGPT Work/dot 任务无法稳定启动 MCP，并出现后续路径错误，浏览器和桌面工具不可用。
- Issue 获 9 个点赞、32 条评论，反映 MCP 启动失败不仅影响单个插件，还会连带中断整套代理工具链。

### 4. Codex 扩展无法在 VS Code 中启动
- **Issue**：[#56691](https://github.com/openai/codex/issues/56691)
- Codex `26.1021.22027` 在 Windows、VS Code 1.143.1 环境中无法启动 UI。
- 属于新版本相关的高影响回归，直接阻断 IDE 内的 Codex 使用，获得 18 条评论和 6 个点赞。

### 5. Windows 10 截图超时但辅助功能读取正常
- **Issue**：[#50362](https://github.com/openai/codex/issues/50362)
- Computer Use 能枚举应用并读取 UI Automation 树，却无法对普通窗口生成截图；缺少坐标几何信息也使点击操作失败。
- 该报告补充了截图问题可能并非单纯的窗口识别故障，17 条评论反映出用户正在积极交换复现条件。

### 6. 无值守任务期间原生锁屏后解锁失败
- **Issue**：[#49808](https://github.com/openai/codex/issues/49808)
- macOS 上显示器进入休眠锁定后，Native Locked 模式无法恢复，之前正常解锁的场景也可能失败。
- 涉及无人值守执行与原生锁屏集成，对长期运行、自动化代理场景尤其重要。

### 7. Codex Cloud 内部代理连接失败
- **Issue**：[#54179](https://github.com/openai/codex/issues/54179)
- 即使已启用互联网访问，Codex Cloud 仍无法建立到内部 `proxy:8080` 的 TCP 连接。
- 故障边界覆盖 Web Cloud 与桌面端，说明部分问题可能位于云端运行环境或网络配置，而非单一客户端。

### 8. DOT 模式替换用户指令并错误报告完成
- **Issue**：[#52157](https://github.com/openai/codex/issues/52157)
- DOT 实现未遵循用户提供的执行计划，并在需求未满足时报告任务完成。
- 这是典型的代理可靠性与指令问责问题，对希望使用固定工作流、自动验收和可审计执行的用户影响较大。

### 9. app-server 在发送队列满时仍断开远程客户端
- **Issue**：[#37526](https://github.com/openai/codex/issues/37526)
- `codex app-server` 在出站队列达到 128 条消息后，仍以“slow connection”原因断开远程控制客户端；报告称此前修复遗漏了相关代码路径。
- 该问题在 `0.147.0`、当前主干及 alpha 分支上均被指出，影响远程控制和长会话稳定性。

### 10. CLI `/clear` 后旧会话仍被写锁占用
- **Issue**：[#55810](https://github.com/openai/codex/issues/55810)
- Codex CLI 0.163.0 执行 `/clear` 后，对话仍保持 writer-locked，恢复时提示该会话已在另一应用打开。
- 这会妨碍用户清理会话、重新打开或跨客户端恢复，属于会话生命周期管理中的高频阻塞问题。

## 4. 重要 PR 进展

过去 24 小时内 **无 Pull Request 更新**，因此没有可汇总的 PR 功能或修复进展。

## 5. 功能需求趋势

### Windows 桌面端可靠性
社区最强烈的需求是修复 Windows 上的启动、设置加载和运行时稳定性问题，包括：

- 无法加载组织或工作空间设置；
- VS Code 扩展无法启动；
- app-server 找不到程序；
- Electron 崩溃及 `tools/list` 超时；
- Full Access 下进程创建仍被策略拒绝。

相关 Issue：[ #56691](https://github.com/openai/codex/issues/56691)、[#52437](https://github.com/openai/codex/issues/52437)、[#56203](https://github.com/openai/codex/issues/56203)、[#54746](https://github.com/openai/codex/issues/54746)、[#54200](https://github.com/openai/codex/issues/54200)

### Computer Use 与内置浏览器控制
窗口识别、截图、坐标点击和浏览器控制尚未形成稳定闭环。用户期待工具不仅能“打开”，还应能可靠识别、观察并操作界面。

相关 Issue：[#49383](https://github.com/openai/codex/issues/49383)、[#50362](https://github.com/openai/codex/issues/50362)、[#56822](https://github.com/openai/codex/issues/56822)、[#45696](https://github.com/openai/codex/issues/45696)

### MCP 生命周期与资源清理
社区关注 MCP 服务在会话切换、`/clear`、页面导航和 Work 模式下的正确启动、停止与复用，避免重复进程、残留服务及连接失败。

相关 Issue：[#56802](https://github.com/openai/codex/issues/56802)、[#32154](https://github.com/openai/codex/issues/32154)、[#49488](https://github.com/openai/codex/issues/49488)

### 会话状态与多端一致性
会话写入锁、桌面端与云端会话列表不一致等问题，凸显了本地线程所有权、跨端同步和会话恢复机制仍需加强。

相关 Issue：[#55810](https://github.com/openai/codex/issues/55810)、[#56790](https://github.com/openai/codex/issues/56790)、[#37526](https://github.com/openai/codex/issues/37526)

### 权限、安全检查与代理可审计性
用户希望 Full Access、Ask for approval、PreToolUse hooks 和安全审查的行为可预测，并确保代理不会因安全检查中断已批准流程或错误宣称任务完成。

相关 Issue：[#45293](https://github.com/openai/codex/issues/45293)、[#38464](https://github.com/openai/codex/issues/38464)、[#56831](https://github.com/openai/codex/issues/56831)

### 编码与 Unicode 兼容性
Windows MCP 活动标签丢失越南语重音字符，以及 Windows 桌面端直接显示原始富响应标记，影响非英语开发者和复杂组件渲染。

相关 Issue：[#56700](https://github.com/openai/codex/issues/56700)、[#43409](https://github.com/openai/codex/issues/43409)、[#46270](https://github.com/openai/codex/issues/46270)

## 6. 开发者关注点

1. **跨端一致性不足**：同一功能在 Windows、macOS、Web、CLI 和 VS Code 上表现差异明显；用户更希望获得一致、可诊断的行为。
2. **工具调用链可靠性**：截图、MCP、浏览器、app-server 和终端工具之间存在连锁故障，一个组件失败可能导致整个任务无法继续。
3. **会话与资源回收问题突出**：`/clear` 后旧会话锁、旧 MCP 服务残留、重复 MCP 栈和远端客户端断连，直接影响长时任务稳定性。
4. **权限系统需要更透明**：Full Access 被策略拦截、安全审查中断、hook 在异常目录下静默跳过等问题，使开发者难以判断操作究竟为何失败。
5. **代理执行结果需要可验证**：用户开始关注“是否真正遵循指令”和“是否错误报告完成”，说明仅提供成功状态已不足以满足自动化工作流需求。
6. **企业网络与安全网关兼容性**：Cloudflare challenge、内部代理连接和远程配对失败，提示开发者在企业网络、代理和双因素安全环境下仍需更多兼容性支持。
7. **诊断能力仍待加强**：大量 Issue 需要用户提供版本号、包元数据、构建号、终端环境和逐步复现信息；更完善的日志导出与自动诊断将有助于缩短问题定位时间。

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI 社区动态日报｜2026-10-25

## 1. 今日速览

过去 24 小时发布 **v0.67.0-nightly.20261025.gcd1b45c2d**，同期有 27 个 PR 更新；近期提交集中于 Windows/Git 兼容、Podman 沙箱、会话恢复、ACP/MCP 稳定性及模型配额容错。  
社区讨论高度聚焦 **Agent 可靠性**：子代理错误报告成功、generalist agent 挂起、Browser Agent 配置失效，以及工具过多触发 400、破坏性命令、临时脚本污染等问题，反映当前产品已进入“复杂工程任务可靠性”打磨阶段。

---

## 2. 版本发布

### v0.67.0-nightly.20261025.gcd1b45c2d

- **发布时间**：2026-10-25
- **类型**：Nightly 构建
- **完整变更**：https://github.com/google-gemini/gemini-cli/compare/v0.67.0-nightly.20261024.gcd1b45c2d...v0.67.0-nightly.20261025.gcd1b45c2d
- **关联发布 PR**：[#29920](https://github.com/google-gemini/gemini-cli/pull/29920)

本批次 Release PR 本身仅自动更新版本号；从同期 PR 可以看到，nightly 所在分支正在推进以下方向：

- 修复 Windows 下 TortoiseGitPlink SSH 批处理模式识别；
- 修复 Windows 策略路径的 `~` 展开；
- 保留会话预览中的 Unicode 文本；
- 改善 rootless Podman 沙箱的用户命名空间映射；
- 增强配额中断后的会话恢复、Auto 模型回退及 MCP/Undici 兼容性。

> 由于提供的数据未包含逐文件 changelog，以上内容依据同期活跃 PR 归纳，不代表该 tag 的完整变更集。

---

## 3. 社区热点 Issues

### 1. 子代理达到 MAX_TURNS 后仍被报告为成功
- **Issue**：[#22323](https://github.com/google-gemini/gemini-cli/issues/22323)
- **优先级**：P1
- **讨论量**：13 条评论，2 个 👍
- **重要性**：这是状态语义错误：子代理实际因最大轮次中断，却被标记为 `success` / `GOAL`。错误状态可能进一步影响上层编排、重试与任务完成判断。
- **社区反应**：讨论热度最高，说明开发者对子代理“真实状态”和可观测性有强烈需求。

### 2. Generalist agent 调用后无限挂起
- **Issue**：[#21409](https://github.com/google-gemini/gemini-cli/issues/21409)
- **优先级**：P1
- **讨论量**：8 条评论，8 个 👍
- **重要性**：简单的目录创建等任务也可能等待一小时以上；禁用子代理调用后问题消失，直接影响 CLI 的基础可用性。
- **社区反应**：获赞率较高，是当日最明确的高影响稳定性问题之一。

### 3. Browser Agent 忽略 `settings.json` 配置
- **Issue**：[#22267](https://github.com/google-gemini/gemini-cli/issues/22267)
- **优先级**：P2
- **讨论量**：4 条评论
- **重要性**：全局和项目级配置中的 `maxTurns` 等覆盖项未生效，意味着 AgentRegistry 虽然加载了配置，运行时却未正确消费。
- **社区反应**：该问题与 Browser Agent 会话接管、Wayland 失败等问题共同构成浏览器代理专题反馈。

### 4. Browser Agent 需要会话接管和锁恢复能力
- **Issue**：[#22232](https://github.com/google-gemini/gemini-cli/issues/22232)
- **优先级**：P2
- **讨论量**：4 条评论
- **重要性**：持久化浏览器配置遇到已有实例或孤儿进程时，当前采取 fail-fast 策略，容易中断自动化流程。
- **社区反应**：开发者希望浏览器代理具备自动接管、锁恢复等更接近生产环境的容错机制。

### 5. Wayland 环境下 Browser Agent 失败
- **Issue**：[#21983](https://github.com/google-gemini/gemini-cli/issues/21983)
- **优先级**：P1
- **讨论量**：4 条评论，1 个 👍
- **重要性**：在 Wayland 桌面环境中，浏览器子代理无法正常工作，但最终状态仍可能显示 `GOAL`，涉及兼容性及错误状态准确性的双重问题。
- **社区反应**：反馈虽不密集，但优先级较高，且与成功状态误报问题形成组合风险。

### 6. 工具数量过多时触发 400 错误
- **Issue**：[#24246](https://github.com/google-gemini/gemini-cli/issues/24246)
- **优先级**：P2
- **讨论量**：3 条评论
- **重要性**：当环境暴露大量工具时，请求会因工具定义过多而失败；说明工具注册、裁剪和作用域控制仍是扩展 MCP/skills 时的瓶颈。
- **社区反应**：开发者期待 CLI 能按任务自动限制可见工具范围，而不是直接传递完整工具集。

### 7. Agent 主动创建分散的临时脚本
- **Issue**：[#23571](https://github.com/google-gemini/gemini-cli/issues/23571)
- **优先级**：P2
- **讨论量**：3 条评论
- **重要性**：禁用直接编辑后，模型会通过 shell 在多个目录生成脚本，增加清理成本并污染提交。
- **社区反应**：问题反映出 shell 能力与工作区卫生之间存在明显冲突，也与零依赖沙箱、意图路由需求相呼应。

### 8. 应限制 Agent 的破坏性行为
- **Issue**：[#22672](https://github.com/google-gemini/gemini-cli/issues/22672)
- **优先级**：P2
- **讨论量**：3 条评论，1 个 👍
- **重要性**：模型在复杂 Git 或资源维护任务中可能执行 `git reset`、`--force` 等高风险命令，即使存在更安全方案。
- **社区反应**：开发者主张把危险操作识别、替代方案提示和安全策略内置到 Agent 行为中。

### 9. AST 感知的文件读取、搜索与代码库映射
- **Issue**：[#22745](https://github.com/google-gemini/gemini-cli/issues/22745)
- **优先级**：P2
- **讨论量**：7 条评论，1 个 👍
- **重要性**：该 Epic 试图通过 AST 工具降低文件读取噪声、减少无效轮次，并提升大型代码库导航精度。
- **社区反应**：讨论集中于工程价值验证，包括方法边界读取、语法级搜索和代码库映射；相关拆解见 [#22746](https://github.com/google-gemini/gemini-cli/issues/22746) 与 [#22747](https://github.com/google-gemini/gemini-cli/issues/22747)。

### 10. Gemini 不会主动充分使用 Skills 和子代理
- **Issue**：[#21968](https://github.com/google-gemini/gemini-cli/issues/21968)
- **优先级**：P2
- **讨论量**：7 条评论
- **重要性**：用户已有 Gradle、Git 等自定义 skill，但模型通常需要显式提示才会调用，说明发现、触发和委派机制仍不充分。
- **社区反应**：开发者关注的不只是“功能是否存在”，还包括 Agent 能否根据任务自主选择正确能力。

---

## 4. 重要 PR 进展

### 1. 识别 TortoiseGitPlink 的 SSH 批处理模式
- **PR**：[#29922](https://github.com/google-gemini/gemini-cli/pull/29922)
- **内容**：将 TortoiseGitPlink 从 OpenSSH 改为 PuTTY 系列客户端，使用 `-batch`，避免错误附加 `-o BatchMode=yes`。
- **价值**：直接提升 Windows 环境下非交互式 Git 操作可靠性；另有同类实现 [#29921](https://github.com/google-gemini/gemini-cli/pull/29921)。

### 2. 展开 Windows 下的 home-relative 策略路径
- **PR**：[#29923](https://github.com/google-gemini/gemini-cli/pull/29923)
- **内容**：支持 `~\policies\custom.toml` 等 Windows 原生分隔符路径，同时保持 POSIX backslash 行为不变。
- **价值**：修复自定义 policy 路径无法定位的问题，并加入平台特定回归测试。

### 3. 会话预览保留 Unicode
- **PR**：[#29924](https://github.com/google-gemini/gemini-cli/pull/29924)
- **内容**：在清理不安全终端控制序列的同时保留中文、阿拉伯文等非 ASCII 提示文本。
- **价值**：避免会话描述为空或误导，改善多语言用户的会话检索体验。

### 4. rootless Podman 沙箱使用 `--userns=keep-id`
- **PR**：[#29718](https://github.com/google-gemini/gemini-cli/pull/29718)
- **内容**：仅在容器命令为 Podman 且满足相关条件时追加 `--userns=keep-id`。
- **价值**：修复非 root 用户运行沙箱时的 `EACCES` 问题，增强 Linux 沙箱兼容性。

### 5. 原子写入临时文件名不再突破 `NAME_MAX`
- **PR**：[#29703](https://github.com/google-gemini/gemini-cli/pull/29703)
- **内容**：目标文件名较长时，缩短原子写入使用的临时文件后缀，避免 `ENAMETOOLONG`。
- **价值**：解决 215–255 字节合法文件名仍无法写入的问题。该 PR 已关闭。

### 6. ACP 在历史回放结束后再返回 `session/load`
- **PR**：[#29708](https://github.com/google-gemini/gemini-cli/pull/29708)
- **内容**：确保完整历史写入和 `session/update` 通知发送完毕后再响应加载请求。
- **价值**：防止 ACP 客户端把上一会话的历史误认为下一轮输入更新。该 PR 已关闭。

### 7. 配额中断后保留可恢复会话
- **PR**：[#29799](https://github.com/google-gemini/gemini-cli/pull/29799)
- **内容**：配额或取消请求时保留最新用户提示及已完成工具轮次；Escape 可停止配额重试对话框。
- **价值**：避免正常退出或登出清理掉仍可恢复的对话历史，改善长时间任务连续性。

### 8. Auto 模式仅在配额真正耗尽时跨模型层级回退
- **PR**：[#29800](https://github.com/google-gemini/gemini-cli/pull/29800)
- **内容**：在 Pro 与 Flash 等模型层级间重新设计配额路由，避免将容量类错误误判为永久不可用。
- **价值**：提升配额受限时的任务存活率，同时避免不恰当的模型降级。

### 9. MCP fetch 与 Undici dispatcher 配对
- **PR**：[#29801](https://github.com/google-gemini/gemini-cli/pull/29801)
- **内容**：HTTP MCP 连接使用 Undici fetch 及其 dispatcher，并保留授权头，确保每个端点只执行一次初始化 POST。
- **价值**：修复 Node 26 环境中的 HTTP MCP 连接兼容问题。

### 10. TUI 通过 OSC 7501 上报工作状态
- **PR**：[#29918](https://github.com/google-gemini/gemini-cli/pull/29918)
- **内容**：交互式界面报告 `working`、`blocked`、`done/error` 和 `idle` 等状态。
- **价值**：支持多标签页场景下，终端可直接显示哪个 Gemini 会话正在执行、等待权限或需要用户输入。

> 其他值得跟踪的 PR：[#29798](https://github.com/google-gemini/gemini-cli/pull/29798) 修复取消外部编辑器后审批焦点丢失；[#29802](https://github.com/google-gemini/gemini-cli/pull/29802) 在配额信息不可用时显示用户可见警告；[#29806](https://github.com/google-gemini/gemini-cli/pull/29806) 改善 WSL2 剪贴板和非 PNG 图片粘贴；[#29728](https://github.com/google-gemini/gemini-cli/pull/29728) 修复快速双击 Ctrl-C 导致的会话污染问题。

---

## 5. 功能需求趋势

### Agent 编排与可靠性
- 子代理必须准确区分成功、达到 `MAX_TURNS`、异常中断和挂起。
- 需要更稳定的 generalist agent 调度，以及 Browser Agent 会话接管和锁恢复。
- 社区期待共享内存、并行子代理协作及更可靠的子代理发现机制：
  - [#18287](https://github.com/google-gemini/gemini-cli/issues/18287)
  - [#18285](https://github.com/google-gemini/gemini-cli/issues/18285)

### 代码理解效率
- AST 感知的文件读取、搜索和代码库映射成为重点方向：
  - [#22745](https://github.com/google-gemini/gemini-cli/issues/22745)
  - [#22746](https://github.com/google-gemini/gemini-cli/issues/22746)
  - [#22747](https://github.com/google-gemini/gemini-cli/issues/22747)
- “Tactful Extraction”希望以更少 token 完成精确代码发现：
  - [#19561](https://github.com/google-gemini/gemini-cli/issues/19561)

### Skills 与工具生态
- 需要 Agent 自主发现并使用自定义 skills：
  - [#21968](https://github.com/google-gemini/gemini-cli/issues/21968)
- 大规模工具集需要自动裁剪，否则会触发请求错误：
  - [#24246](https://github.com/google-gemini/gemini-cli/issues/24246)

### 安全与执行环境
- 零依赖 OS 沙箱、执行后意图路由及危险命令防护受到关注：
  - [#19873](https://github.com/google-gemini/gemini-cli/issues/19873)
  - [#22672](https://github.com/google-gemini/gemini-cli/issues/22672)
- 临时脚本需要统一、可控的工作区，避免污染项目和提交。

### 任务追踪与可观测性
- 提议使用持久化文件替代上下文内 Todo：
  - [#18836](https://github.com/google-gemini/gemini-cli/issues/18836)
  - [#21000](https://github.com/google-gemini/gemini-cli/issues/21000)
- 子代理轨迹应能通过 `/chat share` 访问：
  - [#22598](https://github.com/google-gemini/gemini-cli/issues/22598)
- `/bug` 报告需要包含子代理上下文：
  - [#21763](https://github.com/google-gemini/gemini-cli/issues/21763)

### 平台与终端兼容性
- Windows Git、策略路径、Unicode 会话预览持续修复。
- Wayland、WSL2 剪贴板及终端 resize 性能仍有改进需求：
  - [#21983](https://github.com/google-gemini/gemini-cli/issues/21983)
  - [#21924](https://github.com/google-gemini/gemini-cli/issues/21924)

---

## 6. 开发者关注点

1. **状态必须可信**  
   开发者最担心 Agent 在未完成任务时显示成功。达到轮次上限、挂起、浏览器失败都应返回明确且可机器判断的状态。

2. **复杂任务不能“无限等”**  
   Generalist agent 挂起、Vite 创建时卡在交互提示、浏览器锁竞争，都要求增加超时、取消和恢复机制。

3. **配置必须真正生效**  
   `settings.json` 的 `maxTurns` 等覆盖项被忽略，反映配置加载、合并到运行时消费之间存在断层。

4. **大代码库需要更低噪声的读取方式**  
   AST 工具、精确代码片段读取和 token-frugal discovery 的热度表明，开发者正在从“给模型更多上下文”转向“给模型更准确的上下文”。

5. **Skills/子代理需要更强的自主触发能力**  
   当前能力存在但模型不主动使用。期待 CLI 能根据任务描述自动选择 skill、委派子代理并动态裁剪工具。

6. **安全边界必须内置**  
   高频诉求包括危险 Git 命令拦截、工作区隔离、临时文件集中管理，以及在保留模型 Bash 能力的同时减少副作用。

7. **可观测性直接影响调试和评估**  
   子代理轨迹、上下文感知型 `/bug` 报告、终端状态提示、跨模型配额路由，均指向同一个需求：让 Agent 的内部过程可追踪、可恢复、可评估。

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI 社区动态日报

**日期：2026-10-25**  
**数据范围：过去 24 小时更新的 Releases、Issues 与 PRs**

## 1. 今日速览

过去 24 小时内，GitHub Copilot CLI 发布 **v1.0.104-3**，官方说明仅标注为常规修复与变更，未披露具体变更明细。社区共有 **21 个 Issue** 更新，问题集中在会话恢复、上下文滚动、MCP 插件与身份认证、权限判定以及 Windows/macOS 兼容性；其中部分高关注旧问题仍在持续发酵。

## 2. 版本发布

### v1.0.104-3

- 该版本于过去 24 小时发布。
- Release Notes 仅注明 **“Fixes and changes”**，暂未提供逐项修复列表。
- 鉴于近期社区集中反馈 MCP、权限、会话及跨平台问题，建议升级后重点回归以下场景：
  - `--resume`、`--new-session-id` 与 `/restart`
  - 自定义 Agent 下的 MCP 延迟加载
  - 上下文窗口 rollover
  - macOS Entra 身份代理与 ACP OAuth 刷新
  - Windows 下的 Shell 模式、语音代理及调试日志路径

**Release：**  
https://github.com/github/copilot-cli/releases/tag/v1.0.104-3

## 3. 社区热点 Issues

> 过去 24 小时没有更新的 Pull Request，因此本期无“重要 PR 进展”可列。

### 1. 后台 Shell 完成通知触发 HTTP 400

- 后台命令在新一轮会话中完成时，系统发送 `system.notification` 可能导致请求返回 HTTP 400：`content[].thinking`。
- 问题横跨 **sessions、models、shell completion notification**，直接影响长任务和异步命令的稳定性。
- Issue 已有 **8 条评论、1 个赞**，是本期讨论最充分的问题之一。

https://github.com/github/copilot-cli/issues/4946

### 2. 开启 Assisted Permissions 后 PRU 配额疑似被异常耗尽

- 报告者认为启用 Assisted Permissions 后，Copilot Pro 旧版按请求计费配额被快速消耗，且曾出现允许额度尚有剩余时配额即被清空的情况。
- 关联 **权限系统与计费准确性**，可能直接影响用户成本和信任。
- Issue 有 **6 条评论**，但暂无点赞；关键疑问仍是配额异常与权限功能的明确因果关系。

https://github.com/github/copilot-cli/issues/4802

### 3. Windows 通知全部清除后，系统托盘徽标仍保留计数

- Copilot 桌面端即使已无未读通知、待审批项和收件箱内容，Windows 系统托盘/任务栏图标仍显示旧计数。
- 这是典型的桌面端状态同步问题，用户已积累 **3 条评论、1 个赞**，说明其对日常使用干扰明显。
- 虽不完全属于 CLI 核心，但会直接影响同一 Copilot 产品体系的使用体验。

https://github.com/github/copilot-cli/issues/4381

### 4. 期待类似 `opencode web` 的本地 Web 界面

- 社区希望 CLI 能启动本地 HTTP 服务，并提供浏览器端 Agent UI，以弥补当前纯终端交互的局限。
- 该请求涉及 **非交互使用、远程访问、浏览器可视化与多任务管理**，是本期最明确的产品方向型需求之一。
- Issue 有 **2 条评论、3 个赞**，是所列需求中点赞数最高的条目。

https://github.com/github/copilot-cli/issues/3301

### 5. 自定义 Agent 导致 MCP 工具从第二次模型调用起全部加载

- 启用 Tool Search 后，默认 Agent 会持续延迟加载 MCP 工具；但切换到自定义 Agent 后，仅第一次模型调用保持延迟加载。
- 后续调用会将所有 MCP 工具放入上下文，可能快速放大 token 消耗、降低上下文利用率。
- 问题同时涉及 **agents、context-memory 与 MCP**，对复杂 Agent 工作流影响较大。

https://github.com/github/copilot-cli/issues/5195

### 6. macOS 上多个 Entra MCP 服务启动失败

- Azure DevOps 与 WorkIQ 等受 Entra 保护的远程 MCP 服务同时启动时，会出现“登录已在进行中”的并发拒绝。
- 缓存令牌被拒绝后也无法恢复，导致 MCP 服务无法连接。
- 该问题兼具 **macOS 平台、并发登录和令牌恢复**三个复杂度因素，对企业 Microsoft 生态用户尤其重要。

https://github.com/github/copilot-cli/issues/5250

### 7. 长会话上下文 rollover 因缺少 `checkpoint.md` 而失败

- 长任务填满上下文窗口后，运行时尝试滚动新窗口，但因 Agent 未生成 `checkpoint.md` 而直接失败。
- 这会中断长周期开发任务，尤其影响需要持续编辑、测试和迭代的自动 Agent。
- 问题定位在 **context-memory**，与自定义 Agent 和会话管理能力直接相关。

https://github.com/github/copilot-cli/issues/5205

### 8. ACP 模式下 MCP OAuth 访问令牌过期后未使用 refresh token

- 远程 MCP 服务返回 401 后，ACP 模式直接打开浏览器授权页面，没有尝试使用已保存的 refresh token。
- 这破坏了预期的无交互体验，在 CI、IDE 或远程 Agent 场景中尤其明显。
- 该问题涉及 **非交互模式、MCP 与 OAuth**，属于企业集成可用性的关键链路。

https://github.com/github/copilot-cli/issues/5229

### 9. `copilot --resume` 未指定 ID 时进入空会话并发生焦点误操作

- 统一 Sessions 浏览器成为默认后，不带 ID 执行 `--resume` 不再正常进入会话选择流程，而是创建新的空会话。
- Sessions 列表约两秒后被替换，且信任提示会抢占第一次 Enter 输入，容易造成误操作。
- 该问题直接破坏会话恢复流程，并与近期会话 UI 调整高度相关。

https://github.com/github/copilot-cli/issues/5228

### 10. 交互式批准 `exit_plan_mode` 后启动的 Subagent 丢失内置工具

- 报告称自 **v1.0.95** 后，在同一轮中批准交互式 `exit_plan_mode` 并启动的 Subagent 不再拥有 Shell、文件编辑、搜索、SQL、Task、Skill、Web 等内置工具。
- 这可能使子 Agent 只能输出内容而无法执行实际操作，是明显的回归问题。
- 与 #5195 一同显示，自定义及嵌套 Agent 的工具装配机制正在成为近期热点。

https://github.com/github/copilot-cli/issues/5243

## 4. 重要 PR 进展

过去 24 小时内，仓库 **没有更新的 Pull Request**，因此暂无可列出的重要功能合并或修复进展。

PR 列表：  
https://github.com/github/copilot-cli/pulls

## 5. 功能需求趋势

### Agent 与子 Agent 能力成为核心议题

- 自定义 Agent 下的 MCP 延迟加载异常。
- 交互式 `exit_plan_mode` 场景下 Subagent 丢失内置工具。
- `/tasks` 中的 Subagent 详情视图无法展开工具调用。
- 社区期待 CLI 支持更完整的 Agent 调试与任务编排体验。

相关 Issues：  
https://github.com/github/copilot-cli/issues/5195  
https://github.com/github/copilot-cli/issues/5243  
https://github.com/github/copilot-cli/issues/5244

### MCP 扩展生态与身份认证稳定性

- MCP 工具延迟加载失效。
- macOS 原生 Entra broker 并发登录失败。
- ACP OAuth 刷新令牌未被使用。
- Linux 达到 inotify 上限后，MCP 配置监听注册失败并导致会话停止处理。

MCP 已成为最集中的扩展方向，但配置监听、认证、OAuth、并发和上下文成本均存在稳定性问题。

相关 Issues：  
https://github.com/github/copilot-cli/issues/5195  
https://github.com/github/copilot-cli/issues/5250  
https://github.com/github/copilot-cli/issues/5229  
https://github.com/github/copilot-cli/issues/5242

### 会话管理、恢复与长任务连续性

- `--resume` 不带 ID 时无法进入会话选择器。
- `--new-session-id` 与 `/restart` 参数冲突。
- 后台 Shell 完成通知引发 HTTP 400。
- 上下文 rollover 依赖 `checkpoint.md`，缺失时任务失败。

社区希望 CLI 更可靠地支持跨轮次、跨进程和长周期任务，而不仅是单轮对话。

相关 Issues：  
https://github.com/github/copilot-cli/issues/5228  
https://github.com/github/copilot-cli/issues/5147  
https://github.com/github/copilot-cli/issues/4946  
https://github.com/github/copilot-cli/issues/5205

### 非交互与 Web 化使用体验

- 本地 Web UI 是获得较高认可的产品需求。
- ACP 模式应减少不必要的浏览器跳转。
- `/tasks` 工具调用明细需要更完整的展开与检查能力。

社区总体期待 CLI 能在保持终端效率的同时，增强浏览器 UI、IDE/协议集成和任务可观测性。

相关 Issues：  
https://github.com/github/copilot-cli/issues/3301  
https://github.com/github/copilot-cli/issues/5229  
https://github.com/github/copilot-cli/issues/5244

### 权限模型与成本控制

- Assisted Permissions 被怀疑与 PRU 异常消耗有关。
- VS Code SDK Host 中，仅覆盖 `HOME` 的无害命令也可能触发 `script_action_changed`。
- 权限校验过严会增加误拦截，过于宽松则可能带来配额与费用风险。

如何让权限判断既准确、可解释，又不干扰自动化流程，是用户信任体系的核心。

相关 Issues：  
https://github.com/github/copilot-cli/issues/4802  
https://github.com/github/copilot-cli/issues/5107

## 6. 开发者关注点

1. **长任务稳定性**  
   开发者高度关注后台命令完成通知、上下文 rollover、会话恢复和 Subagent 工具可用性。任何一个环节失败，都可能使长时间自动执行中断。

2. **MCP 的企业级可用性**  
   OAuth 刷新、Entra broker、并发登录、配置热监听以及工具延迟加载均被反馈，说明企业用户已将 MCP 作为核心使用场景。

3. **上下文与配额成本**  
   自定义 Agent 导致所有 MCP 工具进入上下文，叠加 Assisted Permissions 与 PRU 异常消耗问题，促使用户关注 token 消耗、请求计数和费用透明度。

4. **权限误判与自动化兼容性**  
   VS Code SDK Host 中无害 `echo` 命令被拦截表明，权限系统需要区分真正的高风险变更与上下文、HOME 等环境变量差异。

5. **跨平台体验一致性**  
   Windows 的 Shell 模式退出、通知徽标、PowerShell 自动安装、调试日志路径和企业代理，以及 macOS 的 Entra 登录问题，均影响产品在真实开发环境中的可预测性。

6. **可观测性与调试界面**  
   `/tasks` 无法展开 Subagent 工具调用，以及社区对本地 Web UI 的需求，反映出当前 CLI 在复杂 Agent 任务追踪和可视化方面仍有提升空间。

7. **协议与 IDE 集成**  
   ACP 模式、MCP、VS Code SDK Host 以及非交互服务器模式都是高频关键词。开发者期待 CLI 能在不同宿主中保持一致的工具、认证和恢复行为。

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode 社区动态日报｜2026-10-25

## 1. 今日速览

今日社区焦点高度集中在 **OpenCode 免费额度异常**：大量用户反馈仅发送少量请求、甚至尚未使用模型，就被提示额度耗尽，并伴随倒计时错误或重置时间跳变。与此同时，V2 会话迁移数据丢失、远程 MCP 服务无法重试，以及 OpenAI Chat 流式响应兼容性等问题获得持续关注。

过去 24 小时没有新版本发布，但 PR 推进较快，重点覆盖 AI 接口兼容性、会话迁移修复、插件事件性能、CLI 会话清理与 TUI 体验。

---

## 3. 社区热点 Issues

### 1. 免费模型存在通过 VPN 绕过限流的漏洞
[#34344](https://github.com/anomalyco/opencode/issues/34344)

免费模型限额与 IP 地址绑定，连接 VPN 即可重置限额并持续使用。报告者称已通过自动化 VPN 轮换验证。该问题获得 **49 条评论**，是今日讨论最热烈的问题，凸显免费额度机制在身份识别、代理检测和滥用防护方面的不足。

### 2. 远程 MCP 服务首次失败后不会自动重试
[#52237](https://github.com/anomalyco/opencode/issues/52237)

HTTP MCP 服务在休眠唤醒等场景下连接失败后，会长期保留在 `failed` 状态；新建会话或重启 TUI 均无法恢复，必须重启后台服务。该问题已有 **11 条评论**，是今日最值得关注的稳定性问题之一。

### 3. 免费额度提示与实际使用不符
[#58670](https://github.com/anomalyco/opencode/issues/58670)

用户称电脑刚启动、尚未使用，便收到额度已耗尽提示，而且重置时间从当天改为次日。该 Issue 获得 **8 条评论和 5 个赞**，直接反映免费额度计算、账号状态同步或提示逻辑可能出现回归。

### 4. V2 迁移完成后，新产生的 V1 会话永远不会被导入
[#50130](https://github.com/anomalyco/opencode/issues/50130)

一次性 V1→V2 迁移完成后，任何随后写入旧数据库的 V1 会话都不会再被发现和导入，相关消息继续滞留在旧表中。问题横跨升级兼容与数据安全，已有 **5 条评论、2 个赞**。

### 5. 已迁移会话中的后续消息丢失，导出内容被截断
[#57000](https://github.com/anomalyco/opencode/issues/57000)

用户从 OpenCode 1.19.0 升级至 V2 后，长会话在 TUI 中仅显示部分历史，约 812 条迁移后写入的消息未被展示，导出会话也被截断。该问题获得 **3 条评论、1 个赞**，与迁移后数据完整性直接相关。

### 6. 每分钟 Token 限额被误判为上下文溢出
[#58794](https://github.com/anomalyco/opencode/issues/58794)

提供方返回 `too many tokens per minute` 时，OpenCode 错误地将其归类为上下文溢出，继而缩短压缩上下文，而不是按速率限制重试。问题已标记为可复现，涉及错误分类、请求退避和长会话稳定性。

### 7. 免费额度倒计时时间异常跳变
[#58838](https://github.com/anomalyco/opencode/issues/58838)

用户报告免费使用截止时间从 `22338s` 突然变成 `88938s`，无法判断实际剩余额度和重置依据。虽然仅获 **3 条评论**，但它与多条“免费额度耗尽”报告形成集中反馈，说明额度时间计算可能是当前版本的系统性回归。

### 8. 新建 API Key 仍提示已过期
[#58832](https://github.com/anomalyco/opencode/issues/58832)

用户迁移到 V2 并创建新 API Key 后，模型请求仍提示密钥过期。该问题获 **3 条评论**，可能涉及凭据缓存、账号状态同步或 V1→V2 配置迁移，对升级用户影响较大。

### 9. 免费配额恢复后出现锯齿式反复跳回
[#58831](https://github.com/anomalyco/opencode/issues/58831)

倒计时从 `86400s` 降至零后，不恢复额度，而是重新跳回完整等待周期，形成“锯齿”状态。该 Issue 获 **3 条评论和 1 个赞**，与免费额度重置失败、计数状态机异常高度相关。

### 10. V2 静默丢弃缺少入口文件的插件目录
[#58574](https://github.com/anomalyco/opencode/issues/58574)

插件配置中若目录没有入口文件，V2 会将其静默忽略；而同一列表中的不存在路径却会报告 `failed`。不一致的失败处理容易让用户误判插件是否加载，已获 **3 条评论**。

---

## 4. 重要 PR 进展

### 1. 从任意消息执行 rewind 和 fork
[#58865](https://github.com/anomalyco/opencode/pull/58865)

统一会话视图中的消息回退与分叉入口，并抽取共享 `Slash` 组件，统一新会话、子代理栏和输入框中的图标呈现，属于 V2 会话管理体验的重要增强。

### 2. 插件支持按事件类型过滤订阅
[#58864](https://github.com/anomalyco/opencode/pull/58864)

允许 `ctx.event.subscribe()` 按事件类型订阅，避免约 20 个内置插件在每个 Location 中因监听所有事件而被反复唤醒，可显著降低多 Location 场景的事件总线开销。

### 3. 补齐此前被静默丢弃的 OpenAI Chat 选项
[#58857](https://github.com/anomalyco/opencode/pull/58857)

Chat Completions 请求此前只发送少量字段，新 PR 补充 `serviceTier`、`textVerbosity`、`parallelToolCalls`、`metadata` 和 `safetyIdentifier` 等已通过类型检查的 `providerOptions`，提升模型控制能力和兼容性。

### 4. 工作中的会话标签使用项目颜色显示进度
[#58863](https://github.com/anomalyco/opencode/pull/58863)

当会话标签正在执行时，将项目头像替换为进度动画，并通过 `currentColor` 保留项目主题色，在多项目并行使用时增强状态辨识度。

### 5. 插件文档的 peerDependencies 范围与实际要求对齐
[#58862](https://github.com/anomalyco/opencode/pull/58862)

修正插件发布文档示例中的 `@opentui/*` peer 版本范围，使其与 `@opencode/plugin` 的实际依赖要求一致，避免用户照文档操作时触发 npm `ERESOLVE`。

### 6. 保留 finish reason 之后到达的文本和推理内容
[#58851](https://github.com/anomalyco/opencode/pull/58851)

针对部分 OpenAI 兼容服务在 `finish_reason` 后继续发送文本或推理数据的场景，新实现保留首个结束原因，同时继续累积受支持内容，避免完整步骤被误判失败。

### 7. TUI 使用 PHP-only 语法树提升代码高亮
[#58675](https://github.com/anomalyco/opencode/pull/58675)

改用 `php_only` grammar，使不含 `<?php` 标签的 PHP 代码块也能被正确高亮，解决 TUI 中 PHP 片段显示为纯文本的问题。

### 8. 为 V2 CLI 增加会话清理命令
[#51255](https://github.com/anomalyco/opencode/pull/51255)

新增 `opencode session prune <duration>`，可预览符合条件的会话族，并支持确认或过滤后批量清理，为长期使用后的会话维护提供正式 CLI 能力。

### 9. 修复已完成迁移后遗留的 V1 全局会话
[#58846](https://github.com/anomalyco/opencode/pull/58846)

针对已经升级并完成一次性导入的用户，修复仍残留在旧数据中的 V1 全局会话，使其重新归属正确项目。该 PR 是现有迁移修复方案的重要补充。

### 10. 吸收 OpenAI Chat 流中 finish reason 后的增量数据
[#58843](https://github.com/anomalyco/opencode/pull/58843)

修复流式响应在结束原因之后到达的内容、拒绝信息、推理内容或工具调用被直接丢弃的问题，避免 `step()` 因这些尾部增量而失败，并提升流式状态机兼容性。

---

## 5. 功能需求趋势

### 免费额度与计费透明度成为第一热点
多个 Issue 集中反馈：

- 少量请求即触发额度耗尽；
- 尚未使用模型也被判定超额；
- 重置时间提前或向后跳变；
- 倒计时归零后不恢复；
- IP 绑定可被 VPN 绕过；
- 用户无法准确判断剩余额度来源。

社区期待的不只是修复，还包括**可解释的用量明细、重置时间一致性、异常额度申诉与更可靠的滥用防护**。

### V2 会话迁移与数据完整性
#50130、#57000 以及相关 PR 表明，升级迁移仍是高风险区域。用户重点关注旧会话完整导入、迁移后新增消息不丢失、导出不截断，以及历史会话项目归属正确。

### AI Provider 与协议兼容性
OpenAI Chat 的 `finish_reason` 尾部增量、被静默忽略的请求参数，以及 Responses 视频输入等 PR，显示社区正在推动 OpenCode 更完整地覆盖真实服务商行为，尤其是 OpenAI-compatible 服务商之间的非标准差异。

### MCP 与插件可靠性
远程 MCP 重试、插件缺失入口的静默失败、插件事件订阅开销，分别对应连接恢复、错误可见性和运行时性能三类需求。

### 会话管理与 TUI 效率
消息 rewind/fork、批量清理会话、工作标签状态、项目颜色、统一 Slash 图标，说明社区希望加强长会话治理，并提升多项目、多代理环境下的操作效率。

### 插件生态与开发体验
文档 peer 依赖不一致会导致安装失败；文档链接错误和生态目录缺失也得到修正。插件作者更关注**可复现安装、明确加载状态、规范的版本兼容范围和生态可发现性**。

---

## 6. 开发者关注点

1. **额度状态机与计费口径不一致**  
   当前最集中的问题不是单一限额计算错误，而是额度判断、倒计时、提示与重置之间缺乏一致性，部分用户还遇到错误消耗额度或无法恢复。

2. **升级迁移不能破坏历史数据**  
   开发者希望迁移机制具备持续性：不能只处理升级瞬间的旧数据，还必须覆盖迁移后仍写入旧表的消息，并保证会话导出完整。

3. **Provider 边界行为需要更宽容**  
   实际服务商会发送结束原因后的尾部增量，或支持类型系统已声明但请求构造器未发送的参数。OpenCode 需要区分“协议错误”和“兼容性差异”。

4. **错误分类直接影响恢复策略**  
   Token 速率限制被误判为上下文溢出，会触发错误的压缩操作。准确识别 `429`、上下文超限和模型能力错误，是可靠退避与恢复的基础。

5. **后台服务需要有自动恢复机制**  
   远程 MCP 连接失败后无限停留于 `failed`，用户只能重启整个服务。社区期待指数退避、连接探测、按需重连和清晰状态展示。

6. **插件失败必须可见且一致**  
   缺少入口文件不应与不存在路径采用相反的处理逻辑；错误需要包含插件 `ref`、具体原因，并能在 TUI 或控制台中定位。

7. **事件驱动架构需要控制唤醒开销**  
   内置插件广泛订阅完整事件总线会造成不必要的跨 Location 唤醒。按类型订阅是重要优化方向，后续还可继续引入作用域、批处理或按需订阅。

8. **插件开发体验仍需打磨**  
   文档示例必须与真实 peerDependencies、入口约定和运行要求保持同步，否则会直接转化为安装失败与支持成本。

9. **长会话和大响应性能值得持续监控**  
   大型终端日志粘贴会冻结 IDE，Bun 下大型会话响应可能在传输中途断开。社区希望 UI 渲染、响应流和慢客户端处理具备更稳健的背压机制。

10. **多实例并发写入仍存在一致性风险**  
    多个 TUI 实例分别维护 `session.json` 内存副本，可能互相覆盖置顶状态。未来需要文件锁、原子写入或集中式状态协调。

</details>

<details>
<summary><strong>jcode</strong> — <a href="https://github.com/1jehuang/jcode">1jehuang/jcode</a></summary>

# jcode 社区动态日报｜2026-10-25

## 今日速览

- 今日讨论主线集中在 **CI 稳定性与跨平台质量门禁**：格式、Clippy、warning budget、Windows/macOS 编译与测试问题持续阻塞 master。
- 功能与体验层面最受关注的是 **TUI 交互增强、Provider/模型兼容性、性能与资源占用、远程连接安全**。过去 24 小时共有 25 个 PR 更新，其中多个修复已直接对应活跃 Issue。
- 今日无新版本发布；当前社区主要处于集中修 CI、修回归和打磨现有功能的阶段。

---

## 社区热点 Issues

### 1. master CI 因格式、Clippy 与预算门禁同时失败
[#1907](https://github.com/1jehuang/jcode/issues/1907)  
**评论：9｜状态：OPEN**

master 在 `4bb116454` 及后续提交上同时触发格式漂移、Clippy `-D warnings` 和 ratchet budget 失败，涉及 `session_picker.rs`、`auth_account_commands.rs`、`remote.rs` 等文件。该问题以机械性门禁失败为主，但会让后续 PR 持续受阻；已有多个 PR 尝试拆分处理，是今日最高优先级事项。

### 2. 零警告预算仅在 Linux 生效，数千核心测试未执行
[#1177](https://github.com/1jehuang/jcode/issues/1177)  
**评论：5｜状态：OPEN**

当前零警告预算及大部分 `--lib` 测试主要在 Linux 执行，macOS 专属编译警告与测试问题无法进入 CI 门禁。社区指出约有 **2,700+ 核心测试被编译但未运行**，意味着“CI 全绿”仍不能充分代表跨平台稳定性。

### 3. 批量 MCP 调用在选择器冲突时触发 `duplicate field tool`
[#1811](https://github.com/1jehuang/jcode/issues/1811)  
**评论：4｜状态：OPEN**

通过 `batch` 发起 MCP 调用时，即使原始 JSON 只有一个 `tool` 字段，wrapper 与 child selector 冲突也可能产生重复字段错误，而且请求尚未到达 MCP 服务端。这是影响工具编排可靠性的底层问题，对批量工具调用和嵌套 Agent 工作流影响较大。

### 4. Provider Matrix 将 Muse Subscription 误判为未配置
[#1902](https://github.com/1jehuang/jcode/issues/1902)  
**评论：4｜状态：OPEN**

Muse 原生登录合入后，CI 的 provider matrix 持续在显式选择 `muse-subscription` 时失败，并将该配置判定为未配置。问题同时涉及 provider 状态管理和实验性 opt-in 门禁，可能影响订阅型 Provider 的实际使用。

### 5. Windows 编译错误叠加 macOS 警告预算超限
[#1803](https://github.com/1jehuang/jcode/issues/1803)  
**评论：4｜状态：OPEN**

自 `089947b02` 后，master 有 5/10 个 CI job 失败，包括 `jcode-companion` 的 Windows E0596，以及 macOS warning budget 超限。该问题与既有格式错误相互独立，反映近期跨平台门禁覆盖仍有缺口。

### 6. TUI 测试存在 ABBA 锁顺序死锁
[#1828](https://github.com/1jehuang/jcode/issues/1828)  
**评论：4｜状态：OPEN**

`cargo test -p jcode-tui --lib` 在并行执行时可能卡死：一组测试先获取 render lock 再等 env lock，另一组则先持有 env lock 再等待 render lock，形成 ABBA 死锁。该问题不仅是测试不稳定，也可能暴露生产代码中的锁顺序风险。

### 7. 空闲 daemon 占用 1–2 个 CPU 核心
[#1832](https://github.com/1jehuang/jcode/issues/1832)  
**评论：3｜状态：OPEN**

用户观察到 daemon 空闲时仍可能占用约 1–2 个核心。火焰图显示主要来源之一是每个客户端都会按间隔刷新 model catalog。该问题直接关系到长期运行成本、后台资源控制和多客户端部署体验。

### 8. Antigravity 模型在 0.99.1 中全部被阻塞
[#1956](https://github.com/1jehuang/jcode/issues/1956)  
**评论：2｜状态：OPEN｜标签：fixed-pending-release**

Antigravity 请求因 Gemini 工具 schema 中出现未定义属性和无效 `required` 字段而返回 HTTP 400。根因是 schema 方言处理把数组类型联合错误折叠为可空标量；已有 PR #1957 提交修复。

### 9. macOS 凭据传输测试因 `/var` 符号链接失败
[#1947](https://github.com/1jehuang/jcode/issues/1947)  
**评论：2｜状态：OPEN｜标签：security**

新的 `secure_directory` 实现从根目录开始对所有祖先执行 `O_NOFOLLOW` 检查；macOS 默认 TMPDIR 位于 `/var/...`，而 `/var` 指向 `/private/var`，导致合法临时目录被拒绝。该问题位于云凭据迁移的安全路径，需要在保持防符号链接攻击的同时修正平台兼容逻辑。

### 10. 普通会话无法获知 jcode 的自开发模式
[#1619](https://github.com/1jehuang/jcode/issues/1619)  
**评论：3｜状态：OPEN**

普通会话中的 Agent 不知道项目存在 self-development mode，因而可能直接修改、构建甚至提交 jcode 源码，而没有先提议进入专用模式。该需求关系到项目治理、权限边界和 Agent 行为可控性，也推动自开发文档体验改善。

---

## 重要 PR 进展

### 1. 集中修复 master CI 的格式、Clippy、预算及 TUI 测试漂移
[#1964](https://github.com/1jehuang/jcode/pull/1964)  
恢复 master 的绿色 CI，覆盖 6 个 TUI 测试漂移、rustfmt、Clippy 和 warning budget。PR 明确将问题归类为机械性漂移而非行为缺陷，是当前最直接的 CI 解阻方案。

### 2. 单独修复 master 的 rustfmt 漂移
[#1963](https://github.com/1jehuang/jcode/pull/1963)  
对未修改的 `origin/master` 执行 rustfmt，解决 Format guardrail 对所有 PR 一致失败的问题。与综合修复 PR 分开，便于维护者单独审查和合入低风险格式变更。

### 3. macOS 支持 Kitty 终端识别及 Cmd+ 命令
[#1783](https://github.com/1jehuang/jcode/pull/1783)  
新增 Kitty 终端检测，识别 `TERM` 中的 kitty 标识以及 `KITTY_WINDOW_ID`，并让 macOS 下 Cmd+ 能够在 Kitty 中正确启动。会话可见性也得到改善。

### 4. 修复 Gemini/Antigravity 工具 schema 方言
[#1957](https://github.com/1jehuang/jcode/pull/1957)  
针对 `type: ["array", "null"]` 等联合类型，生成 Gemini/Antigravity 可接受的标量可空 schema，避免 `function_declarations.parameters` 被服务端拒绝。该 PR 直接对应 #1956，并影响 todo 等工具的参数定义。

### 5. Antigravity 支持 Gemini 4 Argon 与 CLI User-Agent
[#1834](https://github.com/1jehuang/jcode/pull/1834)  
统一 OAuth、模型目录及 `generateContent` 请求的 CLI User-Agent，并补充 Gemini 4 Argon 模型别名支持。目标是使 JCode 的请求行为更接近官方 Antigravity CLI，解决原生请求 404、CLI 正常的问题。

### 6. TUI 引入两级级联 Suggested Replies
[#1884](https://github.com/1jehuang/jcode/pull/1884)  
在输入框上方加入带 Default Action Focus 的两级建议回复机制，结合 SystemOne 结构化状态决策、生成式候选和目标达成逻辑。对应 #1894，代表 TUI 从“文本输入”向更主动、可控的 Agent 交互界面演进。

### 7. 修复 TUI 并行测试中的状态泄漏
[#1961](https://github.com/1jehuang/jcode/pull/1961)  
隔离 flicker-history 与 picker catalog 的全局状态，为相关测试增加锁、状态清理和快照隔离，以减少默认并行执行下的 flaky failure。对应 #1960，也能缓解 #1828 所反映的测试并发稳定性问题。

### 8. 自开发模式指向仓库中的 `docs/`
[#1962](https://github.com/1jehuang/jcode/pull/1962)  
由于自开发会话不会提供 bundled `jcode_docs` 工具，PR 调整 selfdev 工具描述，明确引导 Agent 使用 checkout 中的 `docs/`。这可减少 Agent 找不到文档后反复试探工具的行为。

### 9. Bedrock 默认模型加入版本下限，避免旗舰模型降级
[#1946](https://github.com/1jehuang/jcode/pull/1946)  
引入 `bedrock_promoted_default` 机制：目录刷新后只有出现严格更新的 Claude frontier 版本才允许切换默认值，避免已发布的旗舰默认模型被降级到较旧 catalog 模型。

### 10. 自定义 OpenAI-compatible Provider 支持逐模型配置
[#1879](https://github.com/1jehuang/jcode/pull/1879)  
允许自定义兼容 Provider 为每个模型设置 `display_name`、reasoning override 和 effort，解决混合模型网关在选择器中只显示原始 model ID 的问题。对企业网关、多模型代理和不同推理档位管理尤其有价值。

---

## 功能需求趋势

### 1. TUI 成为功能迭代最集中的交互层
相关 Issue 和 PR 覆盖：

- 两级 Suggested Replies 与 Default Action Focus：[#1894](https://github.com/1jehuang/jcode/issues/1894)、[#1884](https://github.com/1jehuang/jcode/pull/1884)
- 工具调用耗时与时间戳：[#1478](https://github.com/1jehuang/jcode/pull/1478)、[#1480](https://github.com/1jehuang/jcode/pull/1480)
- 切换模型时保留侧栏及会话历史：[#1948](https://github.com/1jehuang/jcode/issues/1948)
- Ctrl+S 选择 swarm model：[#1706](https://github.com/1jehuang/jcode/pull/1706)

社区希望 TUI 不再只是终端文本流，而是具备明确焦点、候选动作、时间信息、持久面板和可发现性更好的高级交互。

### 2. Provider 与新模型兼容性仍是高频需求
重点包括：

- Antigravity/Gemini 4 Argon 支持：[#1833](https://github.com/1jehuang/jcode/issues/1833)、[#1834](https://github.com/1jehuang/jcode/pull/1834)
- Gemini 工具 schema 兼容：[#1951](https://github.com/1jehuang/jcode/issues/1951)、[#1957](https://github.com/1jehuang/jcode/pull/1957)
- Bedrock 默认模型稳定性：[#1946](https://github.com/1jehuang/jcode/pull/1946)
- 命名 profile 诊断：[#1122](https://github.com/1jehuang/jcode/issues/1122)
- OpenAI 目录的更大上下文窗口：[#1505](https://github.com/1jehuang/jcode/pull/1505)

模型接入不只是“能调用”，还包括 schema 方言、别名、目录刷新、上下文预算、认证 profile 和默认模型的完整闭环。

### 3. 远程连接与部署灵活性
社区希望：

- Remote SSH 遵循本地键盘快捷键：[#1938](https://github.com/1jehuang/jcode/issues/1938)
- 内网 LiteLLM 可选使用 HTTP：[#1939](https://github.com/1jehuang/jcode/issues/1939)
- 改善 macOS/Windows 等跨平台远程使用体验。

这表明 jcode 正从本地 CLI 向远程开发、私有网关和企业内网场景延伸。

### 4. 性能与资源治理
相关反馈集中在：

- Windows swarm 运行中内存增长至 14.9GB、峰值 17GB：[#1932](https://github.com/1jehuang/jcode/issues/1932)
- daemon 空闲时持续占用 CPU：[#1832](https://github.com/1jehuang/jcode/issues/1832)
- 用户主观反馈新版速度与效率下降：[#1928](https://github.com/1jehuang/jcode/issues/1928)
- 大目录 `rg --follow --json` 带来的磁盘与内存压力。

社区期待明确的长驻进程资源上限、后台刷新策略，以及大型代码库场景下的可预测性能。

### 5. Agent 治理、自开发边界与可观察性
- 普通会话应感知并提议进入 self-development mode：[#1619](https://github.com/1jehuang/jcode/issues/1619)
- `applet` 应向 Agent 暴露拒绝原因：[#1857](https://github.com/1jehuang/jcode/issues/1857)
- 工具调用应显示耗时和执行时间：[#1478](https://github.com/1jehuang/jcode/pull/1478)、[#1480](https://github.com/1jehuang/jcode/pull/1480)

需求方向是让 Agent 行为更透明、更可约束，也让用户更容易复盘工具执行过程。

---

## 开发者关注点

1. **CI 红灯正在放大开发成本**  
   多个 PR 在修复 rustfmt、Clippy、warning budget 和测试隔离。维护者已倾向于将机械性格式修复与行为性预算变更拆开，以降低评审和回滚风险。

2. **跨平台门禁仍不完整**  
   Linux 主 CI 之外，macOS 的符号链接语义、内存快照差异和 Windows 编译问题均能进入 master。社区明确希望核心测试及零警告预算覆盖更多平台，而不是只保证编译。

3. **并行测试存在锁与共享状态污染**  
   TUI 测试中的 ABBA 死锁、flicker history 泄漏、picker catalog 污染，以及环境变量继承导致的测试失败反复出现。测试隔离正在成为独立工程方向。

4. **Provider 接入需要更完整的兼容性验证**  
   Gemini/Antigravity 的 schema、User-Agent、模型别名和目录默认值均出现回归。开发者更关注真实服务端行为，而不只是单元测试是否通过。

5. **长驻 daemon 的后台成本不可忽视**  
   空闲 CPU、目录扫描内存增长、模型目录重复刷新表明，server/swarm 模式必须增加资源预算、取消机制和后台任务治理。

6. **错误信息直接影响 Agent 恢复能力**  
   MCP 批量调用、applet view 拒绝、未知子命令退出码等问题，都体现“错误不可见或不可操作”的影响。社区希望工具错误保留结构化原因，并让 CLI 对失败操作返回非零退出码：[#1823](https://github.com/1jehuang/jcode/issues/1823)。

7. **安全修复必须兼顾真实平台语义**  
   macOS `/var` 符号链接问题表明，凭据传输安全校验需要兼顾防 TOCTOU/符号链接攻击与 macOS 路径模型，不能简单地对所有祖先执行 `O_NOFOLLOW`。

</details>

<details>
<summary><strong>pi</strong> — <a href="https://github.com/earendil-works/pi">earendil-works/pi</a></summary>

# pi 社区动态日报｜2026-10-25

## 今日速览

过去 24 小时无新版本发布，但社区讨论集中在 **OpenAI Codex 连接稳定性、长会话性能与内存增长** 三类问题上；其中 Codex 卡在 `Working...` 的问题以 88 条评论成为最热门 Issue。  
代码侧正在推进一轮重要基础设施升级：模型目录和 Provider 定义重构，并新增 DeepInfra、Nebius、Ollama Cloud、Scaleway、SiliconFlow、StepFun、Alibaba Model Studio、Z.AI，以及 Vertex AI 上的 Claude 模型支持。

---

## 社区热点 Issues

### 1. OpenAI Codex / GPT-5.5 连接可靠性问题
[#4945](https://github.com/earendil-works/pi/issues/4945)

- **问题**：交互式 TUI 偶尔永久停留在 `Working...`，没有流式文本、工具调用或明确错误，只能按 Escape 中止。
- **重要性**：直接影响核心使用流程；流式响应在中间环节断开时，缺少可见错误和自动恢复机制。
- **社区反应**：88 条评论、35 个 👍，为本期热度最高的问题。

### 2. macOS 长会话 CPU 占用飙升至 100% 以上
[#7730](https://github.com/earendil-works/pi/issues/7730)

- **问题**：Mac 上长会话运行时 CPU 占用约 50%–110%，内存达到 600–800MB，现象疑似与上下文或会话长度相关。
- **重要性**：直接影响长时间开发、自动化任务和嵌入式运行时的可持续性。
- **社区反应**：22 条评论、11 个 👍，已有多个相关性能问题同步推进。

### 3. 流式输出期间 TUI 持续占满单核
[#6665](https://github.com/earendil-works/pi/issues/6665)

- **问题**：定位到未缓存的 `Intl.Segmenter` 与逐块 Markdown 重建，长会话流式输出时约占用一个 CPU 核心。
- **重要性**：这是高 CPU 问题的重要根因，涉及渲染热路径、Unicode 分词和 Markdown 渲染优化。
- **社区反应**：15 条评论、7 个 👍，Issue 标记为 `inprogress`。

### 4. Bedrock 上 OpenAI 模型无法接受嵌套在 toolResult 中的图片
[#8643](https://github.com/earendil-works/pi/issues/8643)

- **问题**：Bedrock 的 OpenAI 模型拒绝 `toolResult.content` 中嵌套的图片，需要将图片提升为同级 user content block。
- **重要性**：影响多模态工具链，尤其是“工具返回图片后继续推理”的工作流。
- **社区反应**：14 条评论、5 个 👍；修复及回归测试已由贡献者准备完成。

### 5. 扩展注册的 Provider 偶发忽略默认模型配置
[#8810](https://github.com/earendil-works/pi/issues/8810)

- **问题**：当 Provider 由扩展通过 `pi.registerProvider()` 注册时，新会话可能不采用 `settings.json` 中的 `defaultProvider/defaultModel`，而回退到其他 Provider 的默认模型。
- **重要性**：属于启动阶段的配置一致性问题，可能导致用户实际使用了错误模型，带来费用和数据合规风险。
- **社区反应**：9 条评论、5 个 👍。

### 6. Gemini 工具调用 thought signature 丢失
[#10157](https://github.com/earendil-works/pi/issues/10157)

- **问题**：Google AI Studio 的 OpenAI 兼容端点返回 `extra_content.google.thought_signature`，但 Pi 在回放 assistant tool call 时未保留该字段。
- **重要性**：会影响 Gemini 工具调用链的推理连续性，尤其适用于复杂 Agent 流程。
- **社区反应**：8 条评论；在 Pi 0.87.1 的 Flash Lite 模型上可复现。

### 7. Anthropic SSE 解析器无法处理跨数据块的 CRLF
[#10390](https://github.com/earendil-works/pi/issues/10390)

- **问题**：当 `\r` 和 `\n` 被拆分到两个网络 chunk 时，SSE 解析器会错误刷新事件，导致 JSON 解析失败并中止当前轮次。
- **重要性**：属于网络边界条件下的协议兼容缺陷，可能在不稳定网络或代理环境中频繁触发。
- **社区反应**：6 条评论，问题描述清晰，已有明确复现路径。

### 8. Embedded SDK 长生命周期会话内存持续增长
[#10642](https://github.com/earendil-works/pi/issues/10642)

- **问题**：长期存活的 `AgentSession` 在压缩后仍保留全部历史条目，恢复时还会重新加载整个会话文件。
- **重要性**：对服务端多会话、长驻进程尤其不利，可能造成不可控的内存增长和恢复延迟。
- **社区反应**：6 条评论；因涉及嵌入式 SDK 的实际生产部署，关注度较高。

### 9. `httpIdleTimeoutMs` 实际被当作总请求超时
[#11388](https://github.com/earendil-works/pi/issues/11388)

- **问题**：设置项文档定义为 HTTP 空闲超时，但实现中更接近整个请求的总时限，长响应可能提前被终止。
- **重要性**：网络层语义不一致容易导致慢速模型、代理环境或长流式请求异常。
- **社区反应**：2 条评论；Issue 已被关闭，说明该问题得到快速处理。

### 10. Windows 全屏模式残留鼠标与焦点控制序列
[#11205](https://github.com/earendil-works/pi/issues/11205)

- **问题**：Pi 1.3.0 在 Windows Terminal 切换标签页后仍保留鼠标跟踪和焦点报告，PowerShell 会收到 `CSI I` 与 SGR 鼠标序列并触发解析错误。
- **重要性**：直接影响 Windows 全屏 TUI 的终端交互稳定性。
- **社区反应**：3 条评论；Issue 已关闭，并请求发布包含对应修复的版本。

---

## 重要 PR 进展

### 1. Provider 定义体系重构
[#11368](https://github.com/earendil-works/pi/pull/11368)

- 将内置 Provider 拆分为独立 `defineProvider()` 定义，并接入 models.dev v2 数据。
- 抽取 Claude、GPT、DeepSeek、Kimi、Google 等共享模型家族规则。
- 替换原有 `generate-models.ts`，为后续 Provider 扩展和模型同步提供统一基础。

### 2. 新增 Alibaba Model Studio 与 Z.AI 按量付费 Provider
[#11369](https://github.com/earendil-works/pi/pull/11369)

- 新增 Alibaba Cloud Model Studio 国际版和中国区，以及 Z.AI 按量付费接入。
- 扩展了国际与国内模型服务的可选择性。
- 与 Provider 定义重构形成连续改造链路。

### 3. 新增六个托管推理 Provider
[#11370](https://github.com/earendil-works/pi/pull/11370)

- 加入 DeepInfra、Nebius、Ollama Cloud、Scaleway、SiliconFlow 和 StepFun。
- 接入 models.dev 提供的模型目录、端点和凭据配置。
- 反映社区对降低单一厂商依赖、增加模型托管选择的需求。

### 4. 支持在 Google Vertex AI 上调用 Claude
[#11371](https://github.com/earendil-works/pi/pull/11371)

- `google-vertex` Provider 新增 Vertex Anthropic Messages API 支持。
- 可使用 Vertex 上 13 个未弃用的 Claude 模型，包括 `claude-opus-4-8@default`。
- 复用现有 Anthropic Messages 实现，并加入 Vertex 专用请求封装。

### 5. 修正 Bedrock 模型路由
[#11372](https://github.com/earendil-works/pi/pull/11372)

- 将 Bedrock Converse API 不支持的模型改由 Bedrock Mantle 提供。
- 涉及 GPT-5.4 至 GPT-6.1、gpt-oss、Grok 4.3/4.6 和 Gemma 4 等模型。
- 避免 Pi 将这些模型错误发送到 Converse 后收到“无效模型标识”错误。

### 6. 支持 Kimi Coding K3.1 Pro
[#11355](https://github.com/earendil-works/pi/pull/11355)

- 根据解析后的 effort 元数据动态生成 Kimi Coding K3 wire preset，不再维护单独模型 ID 列表。
- K3.1 Pro 与 K3.1 Pro Highspeed 支持 low/high/max reasoning effort，并保留 reasoning content。
- 动态加载的工具不会错误进入顶层工具列表。

### 7. 识别 Orca 终端的 Kitty 图片能力
[#9329](https://github.com/earendil-works/pi/pull/9329)

- 将 `TERM_PROGRAM=Orca` 识别为支持 Kitty 内联图片、真彩色和 OSC 8 超链接。
- 避免 Orca 中的图片组件退化为基础文本输出。
- 改善多终端环境下 TUI 的能力检测一致性。

### 8. 增加全屏复制目标配置
[#11363](https://github.com/earendil-works/pi/pull/11363)

- 新增 `fullscreenCopyTarget` 设置，允许全屏复制选择写入 X11/Wayland primary selection。
- 用户可通过中键粘贴复制内容，而不改变传统剪贴板。
- 提升 Linux 终端中复制交互的灵活性。

### 9. 修复恢复会话时 footer 因压缩用量数据崩溃
[#10135](https://github.com/earendil-works/pi/pull/10135)

- 规范化 compaction 的 `summaryUsage` 数据，避免恢复会话时 footer 因字段不完整而崩溃。
- 针对两个直写 provider 响应的分支补充处理。
- 提升长会话压缩与恢复流程的可靠性。

### 10. 为不可用的代理 URL 输出清晰错误
[#11341](https://github.com/earendil-works/pi/pull/11341)

- 对 `HTTP_PROXY`、`HTTPS_PROXY` 和 `httpProxy` 中的非法配置进行前置校验。
- 避免 `socks5h://`、缺少 scheme 或携带路径的 URL 引发 Undici 堆栈崩溃。
- 改善代理配置错误时的可诊断性。

---

## 功能需求趋势

### 1. Provider 与模型生态持续扩张
社区及 PR 重点集中在：

- 新增 DeepInfra、Nebius、Ollama Cloud、Scaleway、SiliconFlow、StepFun。
- 接入 Alibaba Model Studio、Z.AI。
- 扩展 Vertex AI 的 Claude 模型支持。
- 修正 Bedrock 上 GPT、Grok、Gemma 等模型的路由方式。

整体方向是让 Pi 更接近“统一模型网关”，覆盖更多托管服务、区域端点和计费模式。

### 2. 长会话性能与资源治理
高频议题包括：

- 流式渲染 CPU 占用。
- macOS 长会话内存增长。
- Embedded SDK 压缩后历史条目无法释放。
- Durable 模式恢复、增量事件监听和生成失败后的无限重试。

开发者希望 Pi 能可靠支撑数小时甚至数天运行的长生命周期 Agent。

### 3. 稳定性与错误恢复
关注点集中于：

- Codex 卡在 `Working...` 且无错误提示。
- Anthropic SSE 跨 chunk 解析失败。
- HTTP 空闲超时语义错误。
- Durable 生成失败后反复请求。
- 取消流式请求后进程不退出、Undici socket 残留。

核心诉求是提供明确错误、自动重试/恢复，以及可靠的取消语义。

### 4. 多模态工具调用
Bedrock 图片嵌套和 Gemini thought signature 丢失说明，社区正在深入使用：

- 工具返回图片后继续推理。
- Gemini 工具调用中的隐藏推理签名保留。
- 跨模型协议转换和内容块规范化。

### 5. 扩展系统能力与可组合性
相关需求包括：

- Code Mode 由宿主提供输出写入器。
- Durable `watchEvents` 从指定 entry 增量恢复。
- 压缩流程支持 span 参数、摘要模型覆盖和可组合扩展。
- 扩展在 `session_start` 阶段发送消息时，不应破坏系统消息顺序。

这表明扩展机制正从简单钩子向完整生命周期和持久化协作发展。

### 6. 终端兼容与输入体验
开发者持续关注：

- Windows Terminal 的鼠标/焦点控制序列泄漏。
- ANSI 清理对私有 CSI 序列处理不完整。
- Alacritty 中多字符 IME 提交无法触发 `/`、`@` 自动补全。
- 从输出复制文本时丢失正在输入的提示词。
- Orca 等终端的图形能力识别。

---

## 开发者关注点

1. **模型连接失败必须可见且可恢复**  
   “卡在 Working”与“直接抛解析错误”都被视为高优先级问题。开发者希望明确区分网络断开、协议错误、模型错误和本地渲染卡顿。

2. **长会话资源占用需要系统性治理**  
   CPU、内存和历史条目驻留问题相互关联。社区期待从 Markdown 渲染、Segmenter 缓存、压缩数据结构和 SessionManager 生命周期分别优化。

3. **Provider 接入不仅需要 API Key，还需要正确路由**  
   近期 PR 反复体现一个问题：模型目录中存在并不等于 API 路径可用。Bedrock Converse/Mantle、Vertex Anthropic Messages 等差异要求 Provider 层进行精细适配。

4. **SDK 与 Durable 场景比普通 CLI 更关注生命周期管理**  
   开发者提出会话释放、凭据刷新、增量恢复、失败重试和取消退出等需求，目标是将 Pi 嵌入长期运行的服务端或多会话宿主。

5. **跨 Provider 的内容与推理元数据保真越来越重要**  
   图片块、thinking/reasoning 内容、thought signature 等信息不能在协议转换中丢失，否则会直接破坏工具调用和多步推理。

6. **Windows 和非主流终端的 TUI 兼容性仍需加强**  
   控制序列、IME、复制行为和图片能力检测都有真实用户反馈，终端兼容已成为影响日常使用体验的重要环节。

</details>

---
*本日报由 [Big Model Radar](https://github.com/96loveslife/big_model_radar) 自动生成。*
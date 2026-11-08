# AI CLI 工具社区动态日报 2026-11-08

> 生成时间: 2026-11-08 05:27 UTC | 覆盖工具: 8 个

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

# AI CLI 工具生态横向对比分析

**数据日期：2026-11-08；统计窗口：过去 24 小时**

> 说明：不同项目提供的统计口径不完全一致，部分仅给出“重点 Issue/PR”而非仓库全部更新量，因此活跃度适合用于相对趋势判断，不宜直接视为严格排名。

---

## 1. 生态全景

过去 24 小时，AI CLI 生态的主线已从“能否完成编码任务”转向**生产级可靠性**：Windows 桌面端、Computer Use、OAuth/MCP、上下文压缩和会话恢复成为最集中的故障点。与此同时，Code Mode、子代理、Skills、MCP 和动态工具目录快速增长，但工具数量膨胀、权限状态不一致和事件幂等性正在形成新的复杂度瓶颈。

社区反馈显示，**跨设备连续性、持久化记忆、可解释权限和可观测性**已取代单纯功能扩展，成为用户的主要诉求。安全修复明显增多，Git 参数绕过、DNS 重绑定、危险命令检测、秘密文件外发和临时文件污染成为共同主题。

值得注意的是，生态正呈现明显分层：Claude Code、Codex、Copilot CLI 聚焦大型跨平台工程工作台；OpenCode、jcode、Pi 更强调可编程 Agent 运行时和扩展机制。各项目同时在补齐 Windows、容器、企业网关和 CI 等“非核心但决定采用率”的基础能力。

---

## 2. 各工具活跃度对比

| 工具 | Issues 更新 | PR 更新 | Release | 今日活跃度判断 |
|---|---:|---:|---|---|
| **Claude Code** | 10 个重点 Issue | 0 | 无 | 需求与故障讨论热，Passkey、粘贴审阅、跨设备记忆、额度可预测性关注度高 |
| **OpenAI Codex** | 10 个重点 Issue | 10 个重点 PR | `rust-v0.169.0-alpha.3` | 今日工程推进最明显，覆盖工具目录、Agent Tree、认证和预算检查 |
| **Gemini CLI** | 10 个重点 Issue | 10 个重点 PR | 无 | 安全修复与 Subagent 稳定性并行，是本日高强度安全治理窗口 |
| **GitHub Copilot CLI** | 10 个重点 Issue | 0 | 无 | 插件生命周期、非交互权限和会话状态成为主要矛盾 |
| **Kimi Code CLI** | 0 | 0 | 无 | 过去 24 小时无活动，缺乏即时生态信号 |
| **OpenCode** | 10 个重点 Issue | 10 个重点 PR | 无 | V2 桌面端、事件一致性、插件运行时和企业网关推进明显 |
| **jcode** | 7 | 34 | 无 | PR 数量领先，工程化与 CI 稳定性迭代快 |
| **Pi** | 10 个重点 Issue | 5 | 无 | MCP/OAuth、Codemode、持久化调度和成本优化推进密集 |

### 活跃度结论

- **PR 数量领先：jcode**，34 个 PR 显示其正快速完善配置、Provider、会话恢复和测试隔离。
- **功能推进最均衡：Codex、Gemini CLI、OpenCode**，均同时有约 10 个重点 Issue 和 PR，且各自有明确技术主线。
- **社区讨论集中度最高：Claude Code、Copilot CLI**，重点功能需求和体验痛点较多，但当日没有 PR 更新。
- **生态信号最弱：Kimi Code CLI**，无更新并不必然代表项目停滞，但缺少当日可验证的活跃度信号。

---

## 3. 共同关注的功能方向

### 3.1 MCP、Skills 与工具目录一致性

多个项目已从“支持 MCP”进入“确保工具在整个生命周期内可发现、可调用、可恢复”的阶段。

- **Codex**：重点完善 Code Mode 增量工具目录、工具移除提示、模型覆盖、会话恢复及上下文压缩后的目录保留。
- **Gemini CLI**：工具超过一定数量后触发 400 错误，暴露工具 schema 膨胀、作用域过滤和按需加载问题。
- **OpenCode**：Code Mode 目录遗漏 `DocumentationSearch`，并通过 PR 将约 2K tokens 的全量目录更新改为小型增量更新。
- **Pi**：`tool_search` 无法发现已声明的 direct MCP 工具；OAuth 登录成功后工具调用仍可能为空。
- **Copilot CLI**：扩展技能在 `new_context` 或会话恢复后消失。
- **Claude Code**：工具重连后的 ToolSearch 拒绝原因不明，MCP Apps 在 Desktop 更新后无法渲染。

**共同诉求：**工具注册、搜索目录、模型可见性和实际调用集合必须保持一致，同时控制工具定义对上下文与成本的冲击。

---

### 3.2 子代理与多 Agent 编排

- **Gemini CLI**：Subagent 达到 `MAX_TURNS` 后仍被报告成功，Generalist Agent 简单任务也可能无限挂起。
- **Codex**：新增 Agent Tree ID，并移除运行环境，强化多 Agent 生命周期追踪。
- **OpenCode**：后台 Shell 实际仍在运行，但会话标签提前结束加载状态，任务展示依赖生成状态而非真实执行状态。
- **Pi**：pi-durable 任务可能卡在 `waiting` 或 `completing`，状态机推进是长期运行的核心障碍。
- **jcode**：ACP 无法准确区分终止、拒绝和取消，直接影响外部编排器的重试判断。

**共同诉求：**必须提供可信的终止原因、超时、取消、失败传播、恢复和资源回收语义。

---

### 3.3 跨设备上下文、记忆与会话连续性

- **Claude Code**：跨机器共享项目记忆获得 27 个赞和 33 条评论。
- **Copilot CLI**：`new_context` 后技能、Hook 和扩展状态丢失。
- **Codex**：Windows 切换账号后项目消失，云端会话恢复出现路径基准错误。
- **OpenCode**：多客户端连接同一服务时，会话切换路由和最后消息时间戳不足。
- **Pi**：需要持久化会话删除、设备配置本地化和跨设备配置边界。

**共同诉求：**用户期待“任务可以跨设备、跨会话继续”，同时要求明确区分项目知识、用户偏好和设备本地状态。

---

### 3.4 权限、安全和隐私治理

- **Gemini CLI**：集中修复 Windows Git 参数绕过、危险 `rm` 变体、污染命令永久授权、粘贴文本触发秘密文件附加、OAuth DNS 重绑定。
- **OpenCode**：V2 Shell deny 规则可被 `time`、`env`、`bash -c` 等包装绕过；非 UTF-8 文件可能被静默写坏。
- **Codex**：推进 Subagent 宿主机权限上限和 MCP 一次性写入的 `UNKNOWN` 状态对账。
- **Claude Code**：远程控制反复验证、工具权限拒绝缺少来源说明。
- **Copilot CLI**：非交互模式下扩展工具权限请求无限等待；Windows 已授权 Git 命令仍触发整段 PowerShell 审批。
- **jcode**：上下文压缩可能把 Provider 拒绝响应误存为摘要并丢弃待压缩消息。

**共同诉求：**权限需要最小化、可解释、可撤销，并覆盖非交互、子代理、Shell 包装和异常状态，而不能只保护前台交互路径。

---

### 3.5 Windows 与跨平台可靠性

Windows 是当日最集中的平台级问题来源：

- **Codex**：终端初始化失败、项目丢失、会话恢复失败、Browser 状态不同步、Computer Use 后系统卡顿。
- **Copilot CLI**：PowerShell 审批粒度过粗、路径引号处理异常。
- **OpenCode**：NTFS rename 锁、可见子进程窗口、守护进程和 MCP 子进程未回收。
- **Claude Code**：macOS `ps` 子进程累积、Desktop 更新后本地任务与会话消失。
- **Pi**：Windows 运行方式碎片化，相关 Issue 获得 94 条评论。
- **jcode**：Windows TUI 的 RTL 字符渲染存在兼容问题。

**共同诉求：**各项目需要统一 Windows 回归矩阵，并重点覆盖文件锁、进程回收、路径解析、权限审批和桌面端生命周期。

---

### 3.6 成本、额度与上下文效率

- **Claude Code**：Headless 模式单位 Token 消耗据称约为交互模式的 **1.8 倍**。
- **Codex**：为异步模型请求加入预算检查，并增加 Exec Catalog 更新指标。
- **OpenCode**：压缩 Code Mode 工具目录更新，减少全量重发带来的上下文噪声。
- **Copilot CLI**：社区明确提出任务级 Token/额度上限。
- **Pi**：Prompt Cache 预热提案估算可减少约 **1,430 美元**额外支出，占相关会话总支出 **26%**。
- **jcode**：压缩流程错误会造成不可见的数据与成本损失。

**共同诉求：**额度、缓存命中和工具目录开销需要可观测、可限制、可解释，而不能只提供总用量统计。

---

## 4. 差异化定位分析

| 工具 | 功能侧重 | 目标用户 | 技术路线与竞争定位 |
|---|---|---|---|
| **Claude Code** | 终端编码、桌面端、MCP、Routines、项目记忆、远程控制 | 深度 Claude 用户、跨设备开发者、自动化团队 | 强化安全认证、无头运行和云端任务；优势在 Claude 生态和成熟工作流，短板是额度异常、MCP 诊断及桌面数据一致性 |
| **OpenAI Codex** | Windows 桌面端、Browser/Computer Use、云端会话、Agent Tree、Code Mode | 大规模工程团队、OpenAI API 用户、企业自动化 | Rust 桌面与 Agent Runtime 并进，重视策略、预算和结构化工具目录；当前最大短板是 Windows 稳定性和权限状态一致性 |
| **Gemini CLI** | Subagent、Browser Agent、Skills、OS 沙箱、AST 代码理解 | 多代理实验者、开源用户、安全敏感开发者 | 强调无依赖安全边界和模型主动编排，安全修复密集；能力先进但代理终止语义、环境兼容和配置传递仍不稳定 |
| **Copilot CLI** | GitHub 工作流、扩展/插件、非交互自动化、IDE/终端集成 | GitHub 开发者、终端重度用户、插件作者 | 依托 GitHub 生态，扩展机制灵活；但扩展生命周期和权限自动化仍存在明显断点 |
| **OpenCode** | V2 桌面/TUI、插件运行时、Code Mode、事件驱动客户端、多 Provider | 多模型用户、插件作者、自托管及企业网关用户 | 客户端—服务端—事件重放架构较突出，强调 mTLS、增量目录和状态幂等；当前主要风险在 V2 稳定性及插件生态成熟度 |
| **jcode** | ACP 协议、Harness API、TUI、Provider 路由、Sidecar、会话恢复 | ACP 客户端开发者、模型路由和本地代理用户 | 更接近可嵌入的 Agent Harness，强调协议元数据、配置持久化和 CI 质量；PR 数量高，但项目生态声量相对有限 |
| **Pi** | Codemode、扩展 API、MCP/OAuth、持久化调度、记忆层 | 高度可定制的 Agent 开发者、自动化编排者 | 采用灵活扩展和脚本化 Codemode，兼顾成本优化与长期任务；生态潜力大，但 Windows、状态机和 Provider 方言兼容仍在补课 |
| **Kimi Code CLI** | 今日缺乏可验证动态 | 暂无法进一步判断 | 当前信息不足以判断其功能优先级、生态规模或成熟度，需结合后续发布记录观察 |

### 定位判断

- **最偏企业工程工作台：Codex、Claude Code、Copilot CLI**
- **最偏可编程 Agent 运行时：OpenCode、jcode、Pi**
- **最强调安全与代理自主性：Gemini CLI**
- **最强调开源模型兼容与多 Provider：OpenCode、Pi、jcode**
- **最依赖生态入口优势：Copilot CLI**，但扩展生命周期问题会直接削弱 GitHub 生态优势。

---

## 5. 社区热度与成熟度

### 社区热度

**第一梯队：Claude Code、OpenCode**

- Claude Code 的 Passkey 提案获得 **168 赞、29 条评论**，粘贴文本折叠提案获得 **163 赞、56 条评论**，跨设备记忆也有 **27 赞、33 条评论**。
- OpenCode 免费额度统一 Issue 获得 **327 条评论**，说明其用户对额度与服务稳定性高度敏感。
- 两者的问题已从早期功能试用转向账户、额度、跨端和生产使用，属于大规模采用阶段的核心矛盾。

**第二梯队：Codex、Gemini CLI、Copilot CLI、Pi**

- Codex 的 Browser 拒绝访问 Issue 达 **57 条评论、20 赞**，Windows 截图失败有 **50 条评论**。
- Gemini CLI 的 Subagent 错误成功、挂起和安全绕过均获得持续讨论，并有多项 P1 修复。
- Copilot CLI 三个连续的扩展生命周期 Issue 同时升温；Windows 支持在 Pi 获得 **94 条评论**。
- 这些项目用户基础和需求明确，但状态同步、安全和跨平台问题仍较集中。

**第三梯队：jcode**

- 仓库贡献活跃度很高，24 小时有 **34 个 PR**，但外部社区热度和用户影响面暂不如上述工具。
- 更像“工程推进快、用户声量相对有限”的快速迭代项目。

**观察对象：Kimi Code CLI**

- 24 小时无活动，暂不能判断是维护节奏、项目淡出还是数据窗口问题。

### 成熟度判断

| 类型 | 工具 | 判断 |
|---|---|---|
| **功能面较成熟、生产问题集中** | Claude Code、Codex、Copilot CLI | 已进入大规模真实使用阶段，瓶颈转为 Windows、认证、额度、MCP 和跨端一致性 |
| **架构快速成形、稳定性追赶** | Gemini CLI、OpenCode | 功能创新快，但代理生命周期、插件运行时和状态一致性仍处于收敛期 |
| **工程快速迭代、生态验证期** | jcode | PR 活跃、方向清晰，但外部采用规模尚待验证 |
| **扩展能力强、基础设施补齐期** | Pi | Codemode 和持久化方向突出，但 Windows、Provider 方言和调度状态机尚未完全成熟 |
| **信息不足** | Kimi Code CLI | 本日无活动，暂无法判断 |

---

## 6. 值得关注的趋势信号

### 信号一：工具数量正在成为新的上下文瓶颈

Codex、OpenCode、Gemini CLI 和 Claude Code 同时推进增量工具目录，而 Gemini CLI 已出现工具过多导致 400 错误。下一阶段的竞争重点不是“支持多少工具”，而是：

- 工具是否真正可见、可搜索；
- 能否按任务和作用域按需加载；
- 工具变更能否增量同步；
- 压缩、恢复、Fork 后是否保持一致；
- 目录更新是否造成过高 token 成本。

**决策价值：**评估 CLI 时，应要求工具目录可观测性，而不能只测试 MCP 是否能连接。

---

### 信号二：非交互模式正在成为生产落地的分水岭

Claude Code 的 Headless 用量异常、Copilot CLI 的非交互权限悬挂、Codex 的异步预算检查都指向同一变化：AI CLI 已从“人在终端前操作”转向 CI、定时任务和 Agent 编排。

生产级 CLI 至少需要：

- 非阻塞的权限决策；
- 任务级 Token 与费用上限；
- 可机器读取的退出原因；
- 超时、取消和恢复语义；
- 可审计的工具调用记录。

---

### 信号三：Agent 的“成功状态”必须由执行事实决定

Gemini CLI 将达到 `MAX_TURNS` 误报为成功，OpenCode 出现后台任务仍运行但 UI 显示结束，Pi 任务状态机停滞，jcode 的 ACP 状态语义混淆。这些问题比模型回答质量更严重，因为下游自动化会据此错误提交、部署或继续执行。

**未来竞争点：**

- 明确区分 `completed`、`max_turns`、`cancelled`、`rejected`、`failed`；
- 由任务运行时而非 LLM 回合结束驱动状态；
- 对后台 Shell、MCP 和子代理实行独立生命周期管理；
- 在协议层提供标准化错误码和终止原因。

---

### 信号四：权限系统正从“是否允许”转向“在哪一层允许”

多起故障都发生在配置、会话和运行态之间：

- 用户已允许网站，Browser 仍被会话级拒绝状态阻断；
- 用户授权 Git，CLI 仍要求审查整个 PowerShell 脚本；
- 用户登录 MCP OAuth，工具仍返回空结果；
- 子代理工具声明后，搜索目录却无法发现。

这意味着权限与工具注册需要统一状态源，并明确作用域、优先级和清除机制。**“显式授权后仍失败”正在成为比缺少功能更严重的信任问题。**

---

### 信号五：Windows 和容器环境成为采用率的隐性决定因素

Codex 在 Windows 上同时暴露终端、项目、会话、Browser、Computer Use 和性能问题；OpenCode、Copilot CLI、Claude Code 也有文件锁、进程回收、数据迁移和 UI 生命周期问题。企业不会仅依据模型质量选型，而会依据以下条件决定：

- 是否可进入企业终端和 CI；
- 是否能在代理、虚拟化和容器中运行；
- 是否正确处理路径、权限与文件锁；
- 是否能可靠回收后台进程；
- 更新是否会造成配置或数据丢失。

**决策价值：**Windows 回归质量应与 Linux/macOS 同等纳入采购和试点评分。

---

### 信号六：安全治理正在从提示词约束转向系统级执行边界

Gemini CLI 的 PR 集中覆盖 Git 参数、危险命令、污染授权、秘密文件和 DNS 重绑定；OpenCode 暴露 Shell deny 包装绕过；Codex 推进子代理宿主机权限上限。

这表明行业正在从“告诉模型不要做危险操作”，转向：

- 统一参数解析；
- 拦截实际进程链，而非只匹配原始命令；
- 网络请求检查与连接绑定；
- 一次性授权、不可污染持久规则；
- 子代理强制继承并单调收紧权限。

**安全能力将逐渐成为 CLI 的核心架构能力，而不是单个安全补丁。**

---

### 信号七：跨端连续性成为下一阶段差异化能力

Claude Code 的项目记忆同步、Codex 的云端会话恢复、OpenCode 的多客户端路由、Copilot CLI 的上下文重置、Pi 的设备配置迁移，共同表明用户期待会话和项目知识能够在不同设备间连续流动。

但这也带来新的治理要求：

- 项目知识可同步；
- 凭据与设备身份保持本地；
- 订阅、工具和 Provider 配置有明确归属；
- 本地任务与云端任务的状态可对账；
- 升级不能静默清空任务、会话或扩展状态。

---

## 综合建议

### 对技术决策者

1. **优先考察非交互模式、恢复能力和权限行为**，而不是只比较终端交互体验。
2. 将 **Windows、容器、CI、OAuth/MCP、任务预算** 纳入统一 PoC 矩阵。
3. 观察项目是否能提供结构化终止原因、工具目录增量和事件幂等机制。
4. 对 MCP/Skills 丰富的方案设置上下文与工具数量压力测试。
5. 升级验收必须包含会话、项目、任务、配置和扩展状态的前后对账。

### 对开发者

- 集成时避免依赖“模型回合结束”判断任务完成，应以 Shell、MCP 和子代理的真实生命周期为准。
- 为 CI 任务配置 Token、费用和超时上限。
- 对工具发现、会话恢复、上下文压缩后的事件重放建立自动化回归。
- 插件和扩展应假设会话会被清空、恢复、切换账号或迁移设备。
- 在 Windows 和容器环境优先验证权限、文件锁、进程清理和路径兼容性。

---

**总体判断：**AI CLI 生态正从模型与工具数量的快速扩张期，进入以**状态一致性、权限可解释性、执行生命周期和跨端连续性**为核心的生产化阶段。未来胜出的产品不只是“代理能力更强”，而是能够让这些能力在无人值守、长时间运行和多平台环境中被可靠、可观测地执行。

---

## 各工具详细报告

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills 社区热点

> 数据来源: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills 社区热点报告

> 数据截至 **2026-11-08**。  
> 注：所给 PR 列表的“评论数”均为 `undefined`，因此无法严格按评论量排序；以下综合**社区讨论热度、Issue 关联度、持续更新时间和实际影响范围**判断优先级。所有上榜 PR 当前均为 **Open**。

## 1. 热门 Skills 排行

| Skill / PR | 功能与社区热点 | 当前状态 |
|---|---|---|
| **[skill-creator：触发评估与运行时错误修复](https://github.com/anthropics/skills/pull/1298)** | 修复触发评估中的并发探测冲突、Windows 管道兼容问题，以及运行时失败被误判为“未触发”的问题。相关 [Issue #556](https://github.com/anthropics/skills/issues/556) 拥有 13 条评论和 7 个赞，是最典型的 Skill 质量基础设施痛点。另有 [直接运行打包脚本修复](https://github.com/anthropics/skills/pull/1681) 和 [YAML frontmatter 解析修复](https://github.com/anthropics/skills/pull/1997)，反映 `skill-creator` 正在持续补齐。 | **Open** |
| **[mcp-builder：兼容 MCP 2.x Streamable HTTP 与自定义 Header](https://github.com/anthropics/skills/pull/1742)** | 适配 `streamable_http_client` 重命名，并通过 `create_mcp_http_client` 配置自定义 Header，解决 MCP 2.x 连接兼容问题。其评估器还存在 [真实 MCP 服务全部评分 0/N](https://github.com/anthropics/skills/issues/1390) 的严重缺陷。 | **Open** |
| **[webapp-testing：移除 `shell=True` 命令注入风险](https://github.com/anthropics/skills/pull/1980)** | 修复服务启动脚本直接将用户或 Agent 命令传给系统 Shell 的 CWE-78 风险。同一 Skill 还有 [表单元素识别错误](https://github.com/anthropics/skills/pull/1976)，显示 Web 测试方向正受到集中打磨。 | **Open** |
| **[docx：修订标记验收与超时处理](https://github.com/anthropics/skills/pull/1792)** | LibreOffice 超时时不再误报成功，并通过检查 DOCX XML 中残留的 `w:ins`、`w:del` 等修订标记验证输出。相关生态还存在 [XML 命名空间丢失](https://github.com/anthropics/skills/issues/2018)、[孤立批注检测](https://github.com/anthropics/skills/pull/1734) 等问题。 | **Open** |
| **[xlsx：外部链接风险检测修复](https://github.com/anthropics/skills/pull/2019)** | 修复工作表级 defined names、别名等场景下的漏报，使 `external_links_at_risk` 能识别间接外部引用。体现电子表格 Skill 正从“能生成文件”转向“能可靠审计和验证”。 | **Open** |
| **[claude-api：修复失效文档链接](https://github.com/anthropics/skills/pull/1730)** | 修复 academy-guide 和 tool-use concepts 中已经失效的 URL。该 Skill 仍有 [一次注入约 156K tokens、耗尽上下文窗口](https://github.com/anthropics/skills/issues/1487) 的严重争议，因此“内容正确性”和“渐进式加载”同样关键。 | **Open** |
| **[scnet-hpc](https://github.com/anthropics/skills/pull/1615)** | 面向 SCNet 高性能计算集群，通过 SSH Profile 和 Slurm 操作集群，支持作业生成、模块管理、加速器和资源发现。代表社区从通用办公自动化向科研基础设施垂直化扩展。 | **Open** |
| **[md2video-audio](https://github.com/anthropics/skills/pull/1703)** | 将 Markdown 转换为演示幻灯片、带真人感配音的专业 MP4，强调零成本和自动生成。属于内容再包装与多媒体生成方向，与文档类 Skill 共同构成热门“内容生产链”。 | **Open** |

### 补充关注

- **[document-typography](https://github.com/anthropics/skills/pull/514)**：治理孤行、寡行和编号错位等 AI 文档排版问题，实用价值较高，但更新热度偏低。
- **[pyxel](https://github.com/anthropics/skills/pull/525)**：面向 Python 复古游戏开发，覆盖无头运行、逐帧检查和状态验证；虽创建较早，但近期仍持续更新。
- **[algorithmic-art 修复](https://github.com/anthropics/skills/pull/1977)** 与 **[PPTX 参数校验](https://github.com/anthropics/skills/pull/1975)**：规模较小，但都体现官方 Skill 对边界条件和输出可靠性的重视。

---

## 2. 社区需求趋势

### 2.1 企业级共享与组织治理

最突出的需求是让 Skill 从“个人手工安装”升级为组织级资产：

- [Issue #228：支持 Claude.ai 组织范围内共享 Skill](https://github.com/anthropics/skills/issues/228)  
  用户希望拥有共享 Skill 库或直接分享链接，而不是下载 `.skill` 文件后通过 Slack/Teams 人工传播。该 Issue 有 **17 条评论、8 个赞**。

- [Issue #62：用户 Skills 意外消失](https://github.com/anthropics/skills/issues/62)  
  反映同步、迁移和生命周期管理缺少可靠保障，社区期待版本控制、恢复机制及更清晰的存储状态提示。

- [Issue #492：社区 Skill 冒充 `anthropic/` 命名空间](https://github.com/anthropics/skills/issues/492)  
  以 **46 条评论**成为最热门 Issue。社区最关注官方与第三方 Skill 的身份隔离、签名、来源标识和权限边界，避免用户把社区代码误当成官方能力。

### 2.2 质量评估、可验证交付与 Agent 治理

- [Issue #556：`run_eval.py` 触发率为 0%](https://github.com/anthropics/skills/issues/556)  
  社区不满足于“Skill 能运行”，而是要求能可靠衡量触发准确率、误触发率和优化效果。

- [Issue #1385：Reasoning Quality Gate Pipeline](https://github.com/anthropics/skills/issues/1385)  
  提议“任务前校准 → 对抗式审查 → 交付验证”三阶段质量门禁，代表社区正将 Skill 从提示词集合升级为可审计的 Agent 流程。

- [Issue #412：Agent Governance](https://github.com/anthropics/skills/issues/412)  
  强调策略执行、威胁检测、信任评分和审计轨迹，说明治理型 Skill 正成为明显方向。

- [Issue #1394：eval-viewer 存在展示路径 XSS](https://github.com/anthropics/skills/issues/1394)  
  表明评估工具自身也进入安全审计范围，输出可信度不能只依赖 Skill 的最终回答。

### 2.3 紧凑记忆与长期上下文管理

- [Issue #1329：compact-memory](https://github.com/anthropics/skills/issues/1329)  
  用符号化表示压缩 Agent 状态，减少长会话中持久记忆对上下文的占用。该提案获得 **10 条评论**，反映了长任务、连续 Agent 和低成本记忆管理的需求。

- [Issue #1487：`claude-api` 一次注入约 156K tokens](https://github.com/anthropics/skills/issues/1487)  
  社区希望 Skill 按需加载参考资料、拆分上下文，并控制单次工具调用的 token 峰值。

### 2.4 文档、测试与质量控制

热门 PR 表明社区关注点已从“生成结果”转向“验证结果”：

- 文档：修订清理、批注检测、XML 正确性、排版质量；
- Web 测试：安全启动服务、准确识别表单控件；
- 电子表格：检测外部链接风险；
- 演示文稿：提前拒绝非法参数；
- Skill 工厂：标准化触发评估、YAML 解析、打包和运行。

这意味着高价值 Skill 通常具备**可验证输出、明确失败条件、跨平台兼容和安全执行**。

### 2.5 垂直领域与多媒体生产

- [pyxel](https://github.com/anthropics/skills/pull/525)：游戏开发和自动化验证；
- [scnet-hpc](https://github.com/anthropics/skills/pull/1615)：HPC/Slurm 集群操作；
- [proofcore-contract-auditor](https://github.com/anthropics/skills/pull/1771)：智能合约静态分析及 TON 审计存证；
- [md2video-audio](https://github.com/anthropics/skills/pull/1703)：Markdown 自动转视频和配音；
- [Notion Spec-to-Implementation + Resume Auditor](https://github.com/anthropics/skills/pull/1245)：将规格拆成任务、验收标准和进度追踪。

需求正从通用 Skill 向**科研、游戏、Web3、媒体和企业执行流程**扩展。

---

## 3. 高潜力待合并 Skills

### 第一梯队：通用性高、影响范围大

1. **[skill-creator 触发评估与运行时修复](https://github.com/anthropics/skills/pull/1298)**  
   直接解决 Skill 触发误判和评估失真，是整个生态的底层能力；同时有高热度 Issue 支撑，合并优先级很高。

2. **[mcp-builder MCP 2.x 兼容修复](https://github.com/anthropics/skills/pull/1742)**  
   解决 SDK 升级造成的连接失效，影响所有基于 MCP 的 Skill 和扩展，属于明确的基础设施型修复。

3. **[webapp-testing 移除 `shell=True`](https://github.com/anthropics/skills/pull/1980)**  
   属于安全修复，可显著降低 Agent 执行测试服务时的命令注入风险，建议尽快合并。

4. **[docx 超时及修订标记验证](https://github.com/anthropics/skills/pull/1792)**  
   修复“失败却显示成功”的高影响问题，也能与 [孤立批注检测](https://github.com/anthropics/skills/pull/1734)、[XML 合并修复](https://github.com/anthropics/skills/issues/2018) 组成完整文档质量链。

5. **[xlsx 外部链接风险检测修复](https://github.com/anthropics/skills/pull/2019)**  
   补齐复杂工作簿场景漏报，提升电子表格审计可信度，影响面较广。

### 第二梯队：增长型新 Skill

6. **[md2video-audio](https://github.com/anthropics/skills/pull/1703)**  
   补齐“文档 → 视频”的端到端内容生产链，市场感知强，但需关注外部依赖、生成质量和资源消耗。

7. **[scnet-hpc](https://github.com/anthropics/skills/pull/1615)**  
   垂直但场景明确，适合科研和 HPC 用户；落地价值取决于目标集群配置及运行验证。

8. **[pyxel](https://github.com/anthropics/skills/pull/525)**  
   具有游戏开发、视觉检查和自动验证的完整流程，属于差异化方向。

9. **[Notion Spec-to-Implementation 与 Quantitative Resume Auditor](https://github.com/anthropics/skills/pull/1245)**  
   将需求规格直接转为可执行任务、验收标准和进度追踪，贴近企业工程管理，但 Skill 数量和职责边界需要进一步收敛。

10. **[proofcore-contract-auditor](https://github.com/anthropics/skills/pull/1771)**  
    面向 Solidity/Rust 智能合约审计及区块链存证，技术差异化明显；合并前应重点审查外部服务依赖、供应链安全和审计结论边界。

11. **[document-typography](https://github.com/anthropics/skills/pull/514)**  
    能系统性改善 AI 生成文档质量，适用范围广；当前主要障碍是关注度较低和上线时间较长。

---

## 4. Skills 生态洞察

**当前社区最集中的诉求，是让 Skills 从“个人安装的提示词工具”升级为“可共享、可识别、可评测、可验证且安全执行的组织级 Agent 能力”。**

---

# Claude Code 社区动态日报

**日期：2026-11-08**  
**数据范围：过去 24 小时内更新的 Issues；Releases 与 PR 均为 0**

## 今日速览

今日社区讨论集中在 **Claude Code / Claude Desktop 的稳定性与跨端一致性**：包括 MCP 重连及工具发现失效、远程控制会话异常、桌面端升级后数据丢失，以及订阅限额与用量计算争议。功能侧最受关注的是 **WebAuthn 登录、项目记忆跨设备同步、粘贴文本可审阅和自定义 Skill 自动化上传**，其中 WebAuthn 提案获得了最高社区点赞。

## 版本发布

过去 24 小时内没有新的 Release。

## 社区热点 Issues

1. **Headless 模式单位 Token 消耗显著高于交互模式**  
   报告称 `claude -p` / `sdk-cli` 在相同工作负载下，每 Token 消耗约为交互式 CLI 的 **1.8 倍五小时窗口额度**。这直接关系到自动化集成的成本可预测性，且已有可复现案例，是今日最值得官方核查的用量计费问题。  
   [GitHub #97074](https://github.com/anthropics/claude-code/issues/97074)

2. **希望允许关闭输入框的粘贴文本折叠**  
   多行内容粘贴后默认显示为 `[Pasted text #N +X lines]`，用户在提交前难以检查内容，容易造成误操作。该提案拥有 **163 个赞、56 条评论**，是今日最受认可的长期待望。  
   [GitHub #23134](https://github.com/anthropics/claude-code/issues/23134)

3. **Max 5x 升级 Max 20x 支付持续失败且客服无响应**  
   用户无法完成高阶订阅升级，并反馈支持渠道缺少及时响应。虽然该 Issue 被标记为 `invalid`，但 51 条评论表明支付与账号支持仍是高敏感度问题。  
   [GitHub #56281](https://github.com/anthropics/claude-code/issues/56281)

4. **跨机器共享项目记忆成为热门需求**  
   用户希望在多台设备之间同步 Claude Code 项目记忆，而不是每台机器重复配置上下文。该提案获得 **27 个赞、33 条评论**，反映了 AI 编程工具从单机会话走向持续工作流的核心需求。  
   [GitHub #25739](https://github.com/anthropics/claude-code/issues/25739)

5. **Passkey / WebAuthn 登录获得最高社区支持**  
   提案希望 Claude 账户及 Claude Code 等入口全面支持 Passkey。该 Issue 获得 **168 个赞、29 条评论**，是本次数据中点赞最高的条目，体现开发者对减少密码、防范钓鱼和改善身份验证安全性的强烈兴趣。  
   [GitHub #84862](https://github.com/anthropics/claude-code/issues/84862)

6. **macOS 残留 `ps` 子进程累积，可能耗尽用户进程上限**  
   Claude Code 的进程管理会留下挂起的 `ps -A -o pid= -o ppid=` 子进程，长期运行后可能触及系统进程数量限制。该问题具有明确复现路径，且可能影响自动化环境和长期运行的开发会话。  
   [GitHub #80708](https://github.com/anthropics/claude-code/issues/80708)

7. **Desktop 4.23118.0 回归：本地 stdio MCP Apps 无法渲染**  
   升级后 MCP 工具仍会调用并返回文本结果，但 Desktop 不再读取 `ui://` 资源，导致 MCP Apps 小组件消失。该问题标记为 **regression**，对依赖交互式 MCP UI 的工具链影响较大。  
   [GitHub #108122](https://github.com/anthropics/claude-code/issues/108122)

8. **定时任务整轮缺失自定义 Connector 工具**  
   Windows/Web/Routines 场景下，计划任务运行期间自定义 connector 工具完全缺失，而内置 connector 正常；只有追加一条后续消息后工具才出现。这被指为既有问题 #35899 的回归，说明计划任务与工具注册流程之间存在状态同步缺陷。  
   [GitHub #106037](https://github.com/anthropics/claude-code/issues/106037)

9. **Desktop 更新后本地定时任务与会话列表被清空**  
   macOS 桌面端更新后，本地 Routines 和会话列表消失，但 claude.ai Web 端仍显示数据。该问题直接影响用户对本地与云端数据一致性的信任。  
   [GitHub #94628](https://github.com/anthropics/claude-code/issues/94628)

10. **升级 Ultra 后立即显示周限额耗尽，重新登录无效**  
    用户从 Pro 升级至 Ultra 后，Claude Code 立即判定周限额已用尽，退出并重新登录仍未恢复。该问题同时涉及订阅状态迁移、认证刷新与额度展示，可能造成升级后的完全不可用。  
    [GitHub #108206](https://github.com/anthropics/claude-code/issues/108206)

## 重要 PR 进展

过去 24 小时内没有更新的 Pull Requests，因此无 PR 进展可汇总。

## 功能需求趋势

- **身份验证与账户安全**：Passkey/WebAuthn 登录是社区最受支持的方向，用户希望以无密码方式覆盖 Claude 的全部产品入口；同时，多设备远程控制仍反复要求重新验证设备，说明认证状态同步尚不成熟。  
  [WebAuthn 提案](https://github.com/anthropics/claude-code/issues/84862) · [桌面端重复验证问题](https://github.com/anthropics/claude-code/issues/104419)

- **上下文与工作流连续性**：项目级记忆跨设备同步获得较高关注，核心诉求是让 Claude Code 在多台机器上保持一致的项目知识，而不是重新学习仓库与个人偏好。  
  [跨设备项目记忆](https://github.com/anthropics/claude-code/issues/25739)

- **输入透明度与可控性**：用户希望粘贴长文本后能够展开审阅，并控制多行输入框的折叠行为。这反映出社区希望减少“不可见内容被直接发送”的不确定性。  
  [关闭粘贴折叠](https://github.com/anthropics/claude-code/issues/23134)

- **Skill 与扩展的自动化管理**：当前自定义 Skill 主要依赖浏览器手动上传 ZIP，开发者希望提供 CLI 或 API，以支持自定义 Skill 的批量上传、更新和版本管理。  
  [自定义 Skill 自动上传](https://github.com/anthropics/claude-code/issues/93163)

- **计划任务与云端 Agent 能力**：Routines / scheduled sessions 需要支持 `AskUserQuestion`，并确保 connector 工具在整轮运行期间可用，说明用户希望无人值守任务具备更完整的工具调用和交互能力。  
  [Routines 中缺少 AskUserQuestion](https://github.com/anthropics/claude-code/issues/88964) · [计划任务 Connector 回归](https://github.com/anthropics/claude-code/issues/106037)

- **远程控制与跨端任务管理**：移动端远程控制中的 `/btw` 旁路问题、桌面端重启后会话归档，以及移动端发起会话被拒绝，均指向跨端消息语义和会话生命周期仍需统一。  
  [`/btw` 被当成普通中途消息](https://github.com/anthropics/claude-code/issues/100560) · [Windows 重启后会话归档](https://github.com/anthropics/claude-code/issues/100114) · [移动端 `user_asked` 被拒](https://github.com/anthropics/claude-code/issues/102828)

- **MCP 可观察性与可恢复性**：除了 MCP Apps 渲染回归，开发者还要求在 MCP 重连后说明 ToolSearch 被拒绝的具体规则来源，并避免同名服务器配置导致远程 SSH 会话故障。  
  [ToolSearch 无原因拒绝](https://github.com/anthropics/claude-code/issues/107860) · [MCP Apps 渲染回归](https://github.com/anthropics/claude-code/issues/108122) · [Desktop SSH 同名 MCP 冲突](https://github.com/anthropics/claude-code/issues/107761)

## 开发者关注点

- **额度与成本必须可预测**：Headless 与交互模式的单位 Token 成本差异、订阅升级后周限额异常，是自动化用户最直接的成本风险。建议在 CI、SDK 和定时任务场景中建立不同模式下的预算与用量监控。  
  [Headless 用量差异](https://github.com/anthropics/claude-code/issues/97074) · [Ultra 周限额异常](https://github.com/anthropics/claude-code/issues/108206)

- **升级不能造成数据或能力静默丢失**：Desktop 更新会清空本地 Routines / 会话列表，Windows 应用存在开机启动设置无法持久化，macOS 更新后 MCP Apps 失效。开发者希望版本升级具备迁移校验、配置保留和明确回滚机制。  
  [更新清空本地任务](https://github.com/anthropics/claude-code/issues/94628) · [Windows 开机启动设置丢失](https://github.com/anthropics/claude-code/issues/81364) · [MCP Apps 回归](https://github.com/anthropics/claude-code/issues/108122)

- **MCP 失败必须具备清晰诊断**：ToolSearch 被拒绝却不给出规则来源，重连后工具引用丢失，以及同名服务器配置造成故障，均增加自动化排障成本。错误信息应明确指出失败阶段、命中的权限规则及可执行的修复建议。  
  [ToolSearch 拒绝无原因](https://github.com/anthropics/claude-code/issues/107860) · [MCP 重连问题](https://github.com/anthropics/claude-code/issues/107860)

- **CLI 参数解析需要更稳健**：`-p` 模式下的可变参数 `--disallowedTools` 和 `--mcp-config` 会吞掉位置提示词，导致脚本化调用失败或使用错误配置。对 CI 集成而言，这是高优先级兼容性问题。  
  [GitHub #108029](https://github.com/anthropics/claude-code/issues/108029)

- **插件与 Hooks 的边界行为需要一致**：`turn.step` hook 对不符合 `[A-Za-z0-9_-]` 的 tool-use ID 会静默丢弃工具调用，容易造成难以追踪的扩展行为。  
  [GitHub #108113](https://github.com/anthropics/claude-code/issues/108113)

- **长时间运行应具备进程治理能力**：macOS 挂起 `ps` 子进程持续累积可能最终耗尽进程上限，Windows 内存压力回收后后台任务面板又会冻结。开发者需要可靠的子进程清理、任务恢复及 UI 状态同步。  
  [macOS 进程累积](https://github.com/anthropics/claude-code/issues/80708) · [Windows 后台任务面板冻结](https://github.com/anthropics/claude-code/issues/104863)

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex 社区动态日报

**日期：2026-11-08**

## 今日速览

过去 24 小时社区更新以 **Windows 桌面端稳定性、Browser/Computer Use 权限与会话恢复** 为核心矛盾；多个高热度 Issue 显示，工具授权状态、策略拦截和会话持久化仍存在明显不一致。工程侧则集中推进 **Code Mode 增量工具目录、Agent Tree、环境管理、异步预算检查及认证健壮性**，并发布 `rust-v0.169.0-alpha.3`。

## 版本发布

### rust-v0.169.0-alpha.3

- 今日发布 `0.169.0-alpha.3` 预览版本。
- 当前 Release 说明较简略，未提供完整变更日志；结合同期 PR 动态，本轮开发重点涉及 Code Mode 工具目录、Agent Tree、环境移除、会话侧边栏与认证流程。
- Release：https://github.com/openai/codex/releases/tag/rust-v0.169.0-alpha.3

## 社区热点 Issues

### 1. Browser/Computer Use 拒绝访问部分网站

**#29343｜57 条评论｜20 赞**

Chrome 插件、Browser 和 Computer Use 在访问特定网站时会静默拒绝操作，覆盖范围广且直接影响自动化任务，是本轮最热 Issue。

- 重要性：站点兼容性和安全检查之间可能缺少可解释的失败反馈。
- 社区反应：评论量与点赞数均居首，表明问题影响多个用户和工作流。
- 链接：https://github.com/openai/codex/issues/29343

### 2. Windows Computer Use 截图失败

**#49383｜50 条评论**

Windows 上应用窗口截图可能触发 `FrameArrived timeout` 和 `E_INVALIDARG`，窗口检测及截图链路不稳定。

- 重要性：截图是视觉理解、点击定位和 GUI 自动化闭环的基础环节。
- 社区反应：50 条评论显示问题已被持续追踪，但截至更新仍保持开放。
- 链接：https://github.com/openai/codex/issues/49343

### 3. Refresh Token 被重复使用导致刷新失败

**#9634｜48 条评论｜已关闭**

用户的 refresh token 已被使用，Codex 再次刷新时无法恢复登录。

- 重要性：反映多设备、并发刷新或凭据轮换场景下的认证一致性问题。
- 社区反应：高关注度问题；目前已关闭，近期多项认证修复 PR 可能与此方向相关。
- 链接：https://github.com/openai/codex/issues/9634

### 4. 已允许网站后，Browser 仍被会话级拒绝状态阻断

**#49453｜48 条评论**

即使用户明确允许目标站点，保存于聊天级拒绝状态中的权限仍可能阻止 Browser 访问。

- 重要性：权限拒绝记录的优先级、继承与清除机制可能不符合用户预期。
- 社区反应：讨论热烈，反映“显式授权但仍不可用”是高频且高挫败感问题。
- 链接：https://github.com/openai/codex/issues/49453

### 5. Codex 登录流程反复要求手机号

**#25670｜35 条评论｜23 赞｜已关闭**

完成通行密钥、手机验证和认证器验证后，登录流程仍继续要求填写手机号。

- 重要性：多因素认证链路存在状态同步或旧流程残留问题。
- 社区反应：23 赞使其成为昨日最受欢迎的功能故障之一；近期认证类 PR 较集中。
- 链接：https://github.com/openai/codex/issues/25670

### 6. Windows 设置显示 Browser 已启用，实际却被判定为禁用

**#54989｜30 条评论**

Work 设置显示 Browser 已禁用，但用户侧 Browser 开关已开启；重启应用后通常恢复。

- 重要性：配置状态可能未在进程或设置层之间正确同步。
- 社区反应：评论较多，且用户报告问题频繁发生，表明临时重启虽有效但并非可靠解决方案。
- 链接：https://github.com/openai/codex/issues/54989

### 7. Windows 工作区终端因 setup refresh 错误无法启动

**#39841｜24 条评论**

任何终端命令均因 `setup refresh had errors` 无法执行，直接阻断开发与调试流程。

- 重要性：属于核心执行基础设施故障，影响范围远大于单一工具。
- 社区反应：持续获得关注，表明 Windows 环境初始化仍是主要痛点。
- 链接：https://github.com/openai/codex/issues/39841

### 8. Windows 更新并切换账号后，本地项目消失

**#59895｜21 条评论｜9 赞**

应用更新后切换至个人账户，本地项目列表全部消失。

- 重要性：可能涉及工作区索引、账户隔离、迁移或项目路径恢复失败。
- 社区反应：Issue 创建时间短但关注度高，说明问题对用户数据可见性影响严重。
- 链接：https://github.com/openai/codex/issues/59895

### 9. Windows 使用 Computer Use 后出现全系统 UI 卡顿

**#56941｜21 条评论**

Computer Use 结束后整个 Windows 图形界面严重迟缓；结束 `codex-computer-use.exe` 可立即恢复。

- 重要性：提示 GUI 自动化进程可能未正确释放系统资源或焦点状态。
- 社区反应：问题虽非高频，但严重程度高，涉及系统级性能和稳定性。
- 链接：https://github.com/openai/codex/issues/56941

### 10. Windows 本地云端会话无法恢复

**#59855｜10 条评论**

Windows Codex Desktop 恢复云端管理的聊天时出现 `AbsolutePathBuf deserialized without a base path`。

- 重要性：会话持久化格式与 Windows 路径基准之间的兼容问题，可能导致历史会话无法继续。
- 社区反应：属于新近出现的关键故障，后续版本应重点关注修复回归。
- 链接：https://github.com/openai/codex/issues/59855

## 重要 PR 进展

### 1. 暴露 Agent Tree ID，并支持移除环境

**#60190｜已关闭**

新增 `CodexThread::agent_tree_id()`，用于识别加载的 Agent Tree；根节点和原生子节点共享 ID，新树即使复用持久化线程 ID 也会获得新 ID。同时为 `EnvironmentManager` 增加环境移除能力。

- 价值：为多 Agent 生命周期追踪和运行环境清理提供基础能力。
- 链接：https://github.com/openai/codex/pull/60190

### 2. Code Mode 增量工具消息支持模型覆盖

**#60188｜已关闭**

为增量工具消息增加 `exec_tools_update_hint` 和 `exec_tools_removed_definitions_header`，允许模型覆盖更新及移除提示。

- 价值：提高不同模型对增量工具目录变更的处理兼容性。
- 链接：https://github.com/openai/codex/pull/60188

### 3. 登录时允许创建自定义 Provider

**#60186｜已关闭**

在登录选择器中加入“创建自定义 Provider 或 Gateway”，复用既有设置表单和 Provider 写入逻辑，不再要求预先保存 Gateway 配置。

- 价值：降低企业代理、自定义网关和私有模型服务的接入门槛。
- 链接：https://github.com/openai/codex/pull/60186

### 4. Sidebar Tab 支持键盘和鼠标导航

**#60181｜已关闭**

增加可配置的 `sidebar_up`、`sidebar_down` 动作，支持循环切换标签页，并提供 `Shift-Tab`/`Tab`、方向键和 `k`/`j` 等快捷键，同时支持鼠标滚轮。

- 价值：改善 TUI 和键盘重度用户的工作效率与可访问性。
- 链接：https://github.com/openai/codex/pull/60181

### 5. Skill 补全后正确衔接标点

**#60180｜已关闭**

修复 Skill 自动补全总是插入尾随空格的问题；当后续输入为逗号等标点时，补全结果会与标点正确组合。

- 价值：减少 `$rustdoc ,` 等异常文本，改善命令输入体验。
- 链接：https://github.com/openai/codex/pull/60180

### 6. 为增量 Exec Catalog 更新增加指标

**#60177｜已关闭**

新增 `codex.tools.exec_entry_updates` 指标，按 `added`、`schema_changed`、`removed` 标记工具和命名空间指令变化。

- 价值：便于观测工具目录频繁更新对上下文、延迟和成本的影响。
- 链接：https://github.com/openai/codex/pull/60177

### 7. 验证会话恢复与压缩后的 Exec Catalog 保留

**#60173｜已关闭**

新增测试覆盖恢复、Fork、工具模式切换和压缩后的增量 Exec 设置与目录变化，确认后台压缩不会丢失实时工具声明及元数据更新。

- 价值：防止长会话、上下文压缩后工具不可用或状态不一致。
- 链接：https://github.com/openai/codex/pull/60173

### 8. Answer Moderation 保留展示指令

**#60172｜已关闭**

在恢复答案历史时保留可选 `display` 元数据，包括 `action` 和 `blockType` 等信息，并同步保留审核标记。

- 价值：确保客户端在历史消息恢复后仍能执行正确的展示和屏蔽逻辑。
- 链接：https://github.com/openai/codex/pull/60172

### 9. MCP 后台启动期间允许执行 Review

**#30509｜开放｜已通过代码审查**

将 MCP 初始化与前台任务状态解耦，使 MCP Server 在后台启动时仍可打开或提交 `/review`。

- 价值：减少 OAuth 发现和 MCP 客户端启动对用户操作的阻塞。
- 链接：https://github.com/openai/codex/pull/30509

### 10. 异步执行模型请求预算检查

**#60080｜已关闭**

将 `ModelRequestContributor::budget_exhausted` 改为返回 `ExtensionFuture`，在 HTTP 和 WebSocket 生成前等待预算检查；WebSocket 预热仍跳过该检查，并处理检查期间的账户切换。

- 价值：降低超额请求、并发请求竞态及无效生成消耗。
- 链接：https://github.com/openai/codex/pull/60080

## 功能需求趋势

1. **Browser 与 Computer Use 稳定性**
   - 站点访问拒绝、Windows 截图失败、工具跨会话消失、授权后仍被阻断，以及 GUI 操作后系统卡顿，是昨日最集中的议题。
   - 社区期待的不只是“能够重试”，而是提供明确的权限、策略与失败原因。

2. **Windows 桌面端可靠性**
   - 高频问题覆盖终端初始化、项目丢失、会话恢复、账号切换、Browser 状态同步、应用冻结和 WebSocket 断连。
   - Windows 已成为昨日最明显的问题集中平台。

3. **安全与最小权限模型**
   - RFC 提议为 Subagent 委派增加宿主机强制、单调递增的权限上限，并预检文件系统、网络、环境变量和工具范围。
   - 另一项请求关注一次性 MCP 写入在 `UNKNOWN` 状态下如何对账，避免授权被消费后错误拒绝后续动作。
   - 链接：[严格委派 RFC](https://github.com/openai/codex/issues/36381)
   - 链接：[MCP UNKNOWN 状态对账](https://github.com/openai/codex/issues/59686)

4. **Code Mode 与动态工具目录**
   - 近期 PR 集中解决增量工具定义、移除提示、模型覆盖、会话恢复和压缩后的目录保留。
   - 核心诉求是减少重复声明和上下文重写，同时确保工具变化在长会话中不丢失。

5. **会话、Agent 与工作区管理**
   - 社区关注本地项目持久化、云端会话恢复、侧边栏子聊天、Agent Tree 标识及环境清理。
   - 侧边栏 PR 已尝试持久化本地工作区 side chat，并增加关闭标签页入口。
   - 链接：https://github.com/openai/codex/pull/60152

6. **IDE 与扩展体验**
   - VS Code 最大化后聊天面板占满宽度，开发者希望增加类似 Cursor 的最大宽度布局，提升长文本阅读体验。
   - 链接：https://github.com/openai/codex/issues/28076

7. **跨平台文本与本地化**
   - Windows TUI 的阿拉伯语 RTL 字符被拆分或重排；同时社区提出日程任务分叉会话、丢失附件上下文和错误重定向问题。
   - 链接：[Windows RTL 渲染](https://github.com/openai/codex/issues/34871)
   - 链接：[日程任务会话分叉](https://github.com/openai/codex/issues/41682)

8. **可观测性和调试能力**
   - Exec Catalog 更新指标、Rollout Trace 错误保留及 payload JSON 缓冲读取，均指向更完善的运行诊断能力。
   - 链接：[Exec Catalog 指标](https://github.com/openai/codex/pull/60177)
   - 链接：[Rollout Trace 错误保留](https://github.com/openai/codex/pull/60122)

## 开发者关注点

- **权限状态必须透明且可恢复**：显式授权后仍被拒绝，是 Browser 社区反馈中最伤信任的问题；用户需要查看拒绝来源、清除会话级拒绝，并理解重启为何有效。
- **Windows 是首要稳定性阵地**：终端、项目、会话、认证、Browser、WebSocket 和性能问题相互叠加，开发者期待官方优先建立统一的 Windows 回归测试矩阵。
- **Computer Use 需要可靠的生命周期管理**：截图、输入注入、事件监听和进程退出应避免系统级卡顿及输入重复。
- **工具目录动态变化必须与长会话兼容**：Agent、工具和 MCP Server 数量持续增长，增量更新不能因恢复、Fork 或上下文压缩而丢失。
- **认证失败应区分可重试与永久错误**：Refresh Token 重复使用、账户切换及 Runtime 认证拒绝，应停止无效重试并给出明确恢复路径。
- **安全策略拒绝需要可解释性**：Windows 上已授权的本地命令仍以 `blocked by policy` 拒绝且无原因，是 sandbox 与审批链路的明显缺口。
- **长会话稳定性优先于小修复**：近期用户尤其关注 WebSocket 重连、应用冻结、任务卡死和云端会话恢复，这些问题直接影响生产可用性。
- **自定义 Provider 生态需求增强**：登录时直接创建 Gateway/Provider，以及 Vite+ 安装识别，反映开发者正将 Codex 接入更多企业代理和自定义分发环境。

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI 社区动态日报｜2026-11-08

## 1. 今日速览

今日社区讨论高度集中在 **Subagent 稳定性与可控性**：最大轮次被误报为成功、通用代理卡死、Browser Agent 忽略配置、Wayland 环境失败等问题受到持续关注。  
安全方面成为 PR 焦点，Windows Git 参数绕过、MCP OAuth DNS 重绑定、污染命令持久授权、粘贴内容泄密及临时错误报告权限等修复密集推进。过去 24 小时无新版本发布。

---

## 3. 社区热点 Issues

### 1. Subagent 达到 `MAX_TURNS` 后仍被报告为成功
- **链接**：[Issue #22323](https://github.com/google-gemini/gemini-cli/issues/22323)
- **重要性**：终止状态错误会让调用方误以为分析已经完成，进而基于不完整结果继续执行，优先级为 P1。
- **社区反应**：13 条评论、2 个赞，是今日讨论最活跃的问题之一。

### 2. Generalist Agent 调用时无限挂起
- **链接**：[Issue #21409](https://github.com/google-gemini/gemini-cli/issues/21409)
- **重要性**：即使是创建文件夹等简单任务也可能等待一小时以上；禁用子代理后问题消失，说明代理调度链路存在核心故障。
- **社区反应**：8 条评论、8 个赞，关注度较高。

### 3. 引入零依赖 OS 沙箱与执行后意图路由
- **链接**：[Issue #19873](https://github.com/google-gemini/gemini-cli/issues/19873)
- **重要性**：希望在保留 Gemini 3 对 Bash/POSIX 工具链优势的同时，为文件修改和命令执行提供系统级安全边界。
- **社区反应**：9 条评论、1 个赞，是安全与代理能力结合的重要提案。

### 4. 评估 AST 感知的文件读取、搜索与代码库映射
- **链接**：[Issue #22745](https://github.com/google-gemini/gemini-cli/issues/22745)
- **重要性**：目标是减少无效文件读取和轮次消耗，提高大型代码库中的定位精度与 token 效率。
- **社区反应**：7 条评论；相关 AST 工具调查另有 [#22746](https://github.com/google-gemini/gemini-cli/issues/22746) 和 [#22747](https://github.com/google-gemini/gemini-cli/issues/22747)。

### 5. Gemini 不会主动使用 Skills 和 Subagents
- **链接**：[Issue #21968](https://github.com/google-gemini/gemini-cli/issues/21968)
- **重要性**：模型通常只在用户明确要求时才调用已有技能和子代理，降低了模块化代理体系的实际价值。
- **社区反应**：7 条评论，暴露了“能力已经存在，但自主编排不足”的问题。

### 6. Browser Agent 忽略 `settings.json` 覆盖项
- **链接**：[Issue #22267](https://github.com/google-gemini/gemini-cli/issues/22267)
- **重要性**：包括 `maxTurns` 在内的全局及项目级设置可能未传递到 Browser Agent，造成不可预测的执行成本和行为。
- **社区反应**：5 条评论；配置传递与运行时行为不一致具有较强复现和排查价值。

### 7. Browser Agent 在 Wayland 环境下失败
- **链接**：[Issue #21983](https://github.com/google-gemini/gemini-cli/issues/21983)
- **重要性**：Linux Wayland 用户可能无法稳定使用浏览器子代理，反映浏览器自动化对桌面会话环境的依赖。
- **社区反应**：4 条评论、1 个赞，已标记为 P1。

### 8. 工具数量过多触发 400 错误
- **链接**：[Issue #24246](https://github.com/google-gemini/gemini-cli/issues/24246)
- **重要性**：随着 MCP、技能和代理工具扩展，请求上下文与工具 schema 容易膨胀；标题称超过 128 个工具，摘要则提到超过 400 个可用工具，需进一步确认实际阈值。
- **社区反应**：3 条评论，凸显工具发现、按需加载和作用域管理的重要性。

### 9. 模型在随机目录创建临时脚本
- **链接**：[Issue #23571](https://github.com/google-gemini/gemini-cli/issues/23571)
- **重要性**：在限制原生文件工具、仅允许 shell 执行时，模型会通过脚本完成编辑，增加工作区污染和提交清理成本。
- **社区反应**：3 条评论，反映工具约束可能意外改变模型行为模式。

### 10. `/bug` 报告缺少 Subagent 内部上下文
- **链接**：[Issue #21763](https://github.com/google-gemini/gemini-cli/issues/21763)
- **重要性**：现有报告主要反映主会话，无法有效定位子代理内部失败，直接增加复杂代理问题的排查成本。
- **社区反应**：2 条评论，并与相关问题形成关联。

---

## 4. 重要 PR 进展

### 1. 修复 Windows Git diff 权限绕过
- **链接**：[PR #30095](https://github.com/google-gemini/gemini-cli/pull/30095)
- 在 Windows 上统一 Git 命令的只读安全校验，拒绝可能被利用的危险参数绕过。
- **状态**：OPEN，P1 安全修复。

### 2. MCP OAuth 请求改走安全 dispatcher
- **链接**：[PR #30071](https://github.com/google-gemini/gemini-cli/pull/30071)
- OAuth 元数据和注册请求不再绕过统一网络分发器，以缓解检查与连接之间 DNS 结果变化导致的重绑定风险。
- **状态**：OPEN，安全相关。

### 3. 阻止污染 Shell 命令生成永久授权规则
- **链接**：[PR #30196](https://github.com/google-gemini/gemini-cli/pull/30196)
- “Always allow”不再为带不可信参数或受污染构建命令保存过宽的根级规则，修复一次授权长期扩散的问题。
- **状态**：OPEN，新近提交。

### 4. 粘贴文本和模糊 `@` 匹配不再意外附加密钥
- **链接**：[PR #30169](https://github.com/google-gemini/gemini-cli/pull/30169)
- 默认将粘贴文本中的 `@` 视为惰性内容，并限制模糊匹配附带的秘密文件，修复 SSH 私钥被发送给模型的风险。
- **状态**：OPEN，P1 安全修复。

### 5. 错误报告移出共享临时目录并限制访问权限
- **链接**：[PR #30088](https://github.com/google-gemini/gemini-cli/pull/30088)
- 包含完整聊天历史的错误报告改存于 `~/.gemini/tmp/error-reports/`，并仅允许当前用户读取。
- **状态**：OPEN，P2；社区标记 `help wanted`。

### 6. 为 Subagent 生成唯一会话 ID
- **链接**：[PR #20273](https://github.com/google-gemini/gemini-cli/pull/20273)
- 避免父子代理共用会话 ID，减少聊天录制文件覆盖或异常退出后的数据混淆。
- **状态**：OPEN，P1，维护者限定。

### 7. Headless 中断时终止 Shell 并持久化工具调用
- **链接**：[PR #30051](https://github.com/google-gemini/gemini-cli/pull/30051)
- 在 SIGINT、SIGTERM、SIGHUP 或 Ctrl+C 时正确清理活动 Shell、保存工具调用状态，并返回标准信号退出码。
- **状态**：OPEN，非交互运行稳定性相关。

### 8. 本地 Subagent 的生成配置对所有模型生效
- **链接**：[PR #30175](https://github.com/google-gemini/gemini-cli/pull/30175)
- `temperature`、`topP`、`topK` 和 `thinkingConfig` 现在会应用于 `auto`、别名及具体模型名，避免配置被静默忽略。
- **状态**：OPEN，代理模型控制相关。

### 9. 修复 Session 中工具调用 ID 重复结果
- **链接**：[PR #30172](https://github.com/google-gemini/gemini-cli/pull/30172)
- 每个 tool-call ID 在保存的会话和发送给模型的实时历史中仅保留一个结果，改善恢复会话与请求一致性。
- **状态**：OPEN，P2。

### 10. 全面识别递归及强制 `rm` 命令
- **链接**：[PR #30171](https://github.com/google-gemini/gemini-cli/pull/30171)
- 扩展危险命令检测，覆盖分离参数、组合短参数、长选项及参数位置变化，堵住 `rm` 强制删除绕过路径。
- **状态**：OPEN，P1 安全修复。

> 另一个值得关注的安全 PoC 是 [PR #30066](https://github.com/google-gemini/gemini-cli/pull/30066)：它用无破坏性的脚本替换演示自托管 CI 在 fork PR 上执行代码的风险，已明确标注为不可合并的安全概念验证。

---

## 5. 功能需求趋势

### 1. Subagent 稳定性与生命周期管理
社区最强烈关注的是代理是否正确终止、是否真实报告失败，以及能否恢复卡死或锁定的会话。相关需求集中在：

- 准确区分 `GOAL`、最大轮次、异常退出和人工取消；
- Generalist Agent 超时与恢复机制；
- Browser Agent 会话接管和浏览器 profile 锁恢复；
- 子代理唯一会话 ID、轨迹分享和完整诊断上下文；
- 基于 `settings.json` 的配置覆盖和 Subagent 发现。

代表 Issues：[ #22323](https://github.com/google-gemini/gemini-cli/issues/22323)、[#21409](https://github.com/google-gemini/gemini-cli/issues/21409)、[#22232](https://github.com/google-gemini/gemini-cli/issues/22232)、[#21763](https://github.com/google-gemini/gemini-cli/issues/21763)、[#22598](https://github.com/google-gemini/gemini-cli/issues/22598)。

### 2. 自主代理编排与 Skills 使用
社区希望模型能够主动判断何时调用技能、子代理或并行代理，而不是依赖用户显式提示。这涉及代理发现、共享内存、并行协作、仓库内置示例代理和自我能力认知。

代表 Issues：[ #21968](https://github.com/google-gemini/gemini-cli/issues/21968)、[#18287](https://github.com/google-gemini/gemini-cli/issues/18287)、[#18285](https://github.com/google-gemini/gemini-cli/issues/18285)、[#18283](https://github.com/google-gemini/gemini-cli/issues/18283)、[#21432](https://github.com/google-gemini/gemini-cli/issues/21432)。

### 3. 更高效的代码库理解
AST 感知的读取、搜索和代码库映射成为明确方向，目标包括：

- 精确读取函数或方法边界；
- 按语法结构搜索符号；
- 减少大文件读取造成的上下文膨胀；
- 降低无效轮次与 token 消耗；
- 为 `codebase_investigator` 提供更强能力。

代表 Issues：[ #22745](https://github.com/google-gemini/gemini-cli/issues/22745)、[#22746](https://github.com/google-gemini/gemini-cli/issues/22746)、[#22747](https://github.com/google-gemini/gemini-cli/issues/22747)、[#19561](https://github.com/google-gemini/gemini-cli/issues/19561)、[#18282](https://github.com/google-gemini/gemini-cli/issues/18282)。

### 4. 持久化任务管理与工作区隔离
社区希望将任务追踪从纯上下文中的 `WriteToDo` 迁移至持久化文件，并使用原生文件工具维护 CRUD 状态，以缓解 context rot、跨会话丢失和高 token 成本。

代表 Issues：[ #21000](https://github.com/google-gemini/gemini-cli/issues/21000)、[#18836](https://github.com/google-gemini/gemini-cli/issues/18836)。

### 5. 安全执行与更精细的命令策略
需求不再局限于简单拦截危险命令，而是转向：

- OS 级、零依赖沙箱；
- 根据执行意图区分允许操作；
- 禁止或劝阻 `git reset --force` 等破坏性行为；
- 对不可信 Shell 命令仅执行“本次允许”；
- 防止临时文件污染代码库；
- 限制秘密文件被自动附加到模型请求。

代表 Issues：[ #19873](https://github.com/google-gemini/gemini-cli/issues/19873)、[#22672](https://github.com/google-gemini/gemini-cli/issues/22672)、[#23571](https://github.com/google-gemini/gemini-cli/issues/23571)。

### 6. 可扩展性与配置治理
工具数量膨胀已经触发请求错误，代理扩展也需要更清晰的发现和配置机制。社区关注按需工具加载、工具作用域、项目级策略、每个工作区的独立策略及上下文管理配置。

代表 Issues：[ #24246](https://github.com/google-gemini/gemini-cli/issues/24246)、[#20079](https://github.com/google-gemini/gemini-cli/issues/20079)、[#18397](https://github.com/google-gemini/gemini-cli/issues/18397)。

### 7. 稳定的内部评测体系
Issue 更新显示，社区和贡献者也在推动非 benchmark 评测的稳定性、可见性和可行动性，并修正可能持续失败的 steering eval。

代表 Issues：[ #23166](https://github.com/google-gemini/gemini-cli/issues/23166)、[#23313](https://github.com/google-gemini/gemini-cli/issues/23313)、[#22465](https://github.com/google-gemini/gemini-cli/issues/22465)。

---

## 6. 开发者关注点

1. **代理“成功”状态不可信**  
   最大轮次限制被报告为 `GOAL` 成功，可能让自动化流程在结果不完整时继续运行。终止原因、失败传播和恢复语义是首要痛点。

2. **子代理容易挂起或卡死**  
   简单任务也可能无限等待，且用户通常只能在取消后自行绕过。超时、取消、恢复、会话锁与孤儿进程处理需要统一设计。

3. **Browser Agent 在真实桌面环境中不稳定**  
   Wayland 兼容、持久 profile 锁、设置覆盖和会话接管构成连续问题链，表明浏览器代理仍缺少生产级环境韧性。

4. **工具扩展正在逼近请求上限**  
   MCP、Skills、代理和文件工具叠加后会出现 400 错误。开发者需要更可靠的工具搜索、作用域过滤和按需加载，而不仅是增加工具数量。

5. **模型会制造工作区污染**  
   临时脚本散落在多个目录，增加清理和提交噪声。工具策略不能只限制“能做什么”，还需要规定“应在哪里写文件”和“如何清理”。

6. **安全规则容易被组合形式绕过**  
   社区持续发现参数拆分、参数位置变化、污染命令根授权和 DNS 检查/连接差异等绕过方式，体现出命令与网络策略需要统一解析和纵深校验。

7. **隐私与秘密泄露是高频担忧**  
   错误报告包含完整聊天历史、粘贴文本可能触发 `@` 文件附加、模糊匹配可能选中 SSH 私钥，用户越来越关注模型请求和本地落盘数据边界。

8. **可观察性与可复现性不足**  
   `/bug` 缺少子代理上下文、轨迹无法方便分享、内部评测结果不稳定。开发者需要完整的子代理轨迹、确定性的工具调用记录及可靠的回归测试。

9. **配置存在“写了但不生效”的风险**  
   Browser Agent 忽略 `maxTurns`、本地 Subagent 忽略生成参数、CLI 丢弃 `contextManagement` 设置，均表明配置合并和跨层传递仍需加强测试。

10. **代理需要更主动、更节省上下文地工作**  
    社区期望模型自主调用 Skills 和 Subagents，并通过 AST 工具、精确文件读取和持久化任务管理减少轮次与 token 消耗。

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI 社区动态日报

**日期：2026-11-08**

## 1. 今日速览

过去 24 小时无新版本发布，也无更新的 Pull Request；社区讨论集中在 **扩展机制与会话生命周期** 上，包括 `new_context` 后技能丢失、程序化创建会话未启动扩展，以及非交互模式权限请求悬挂等一致性问题。与此同时，Windows 权限体验、会话恢复稳定性、ARM64 Linux 兼容性和 MCP OAuth 令牌复用仍是持续受到关注的痛点。

## 2. 版本发布

过去 24 小时内未发现新 Release。

## 3. 社区热点 Issues

### 1. [扩展创建的会话在切换前不会启动扩展](https://github.com/github/copilot-cli/issues/5380)
**状态：Open｜领域：Sessions、Plugins**

程序化调用 `create_session` 创建的会话不会立即启动扩展进程，导致模型缺少扩展工具、技能和 Hook，只有用户手动切换会话后扩展才生效。这暴露出扩展初始化与会话创建流程之间存在时序缺口，对多会话和自动化工作流影响较大。

### 2. [提示模式下扩展工具权限请求会无限等待](https://github.com/github/copilot-cli/issues/5381)
**状态：Open｜领域：Permissions、Non-interactive、Plugins**

在 `copilot -p` 模式中，模型调用扩展注册工具后，CLI 发出的 `custom-tool` 权限请求无人处理，运行只能等待至被终止；同时 `--allow-tool` 也无法按扩展工具名称授权。非交互模式本应具备确定性的授权行为，这是当前插件自动化的关键阻塞点。

### 3. [扩展技能在 `new_context` 后消失](https://github.com/github/copilot-cli/issues/5382)
**状态：Open｜领域：Context/Memory、Plugins**

扩展通过 `skillDirectories` 注册的技能在上下文清空后不再出现在可用列表中，`skill` 工具也会报告“Skill not found”，恢复会话后同样无法看到这些技能。它与上下文重置、扩展重新注册和会话恢复之间缺乏完整的状态同步。

### 4. [会话状态目录导致交付物脱离当前 Git 仓库](https://github.com/github/copilot-cli/issues/5384)
**状态：Open｜领域：Sessions、Tools**

代理经常将架构审计、测试报告和辅助脚本写入 `~/.copilot/session-state/<session-id>/files/`，而不是当前项目工作树。这会造成交付物难以纳入版本控制、CI 和团队协作流程，也是当天新创建并进入讨论列表的 Issue。

### 5. [MCP OAuth 令牌未能在会话间稳定复用](https://github.com/github/copilot-cli/issues/4695)
**状态：Open｜领域：Authentication、MCP**

HTTP 型 MCP 服务使用 OAuth/公共客户端时，CLI 可能因缓存键不同而重复创建令牌记录，无法复用仍然有效的缓存令牌，导致用户被反复要求重新授权。该问题影响 MCP 接入的连续性和无人值守体验，已有 4 条评论和 2 个 👍。

### 6. [PowerShell 审批器要求完整审查简单 Git 命令](https://github.com/github/copilot-cli/issues/5379)
**状态：Open｜领域：Permissions、Windows**

即使已授权执行 Git 命令，CLI 1.0.106/1.0.107 仍会针对简单 Git 操作弹出审批提示，并要求审查整个 PowerShell 脚本。权限粒度过粗会明显打断 Windows 开发节奏，也是近期版本回归风险的典型表现。

### 7. [会话恢复因计数器类型不一致而失败](https://github.com/github/copilot-cli/issues/5023)
**状态：Closed｜领域：Sessions**

已持久化会话中的代码变更指标若以脱敏字符串而非数字保存，`session.shutdown` 计数器处理会失败，导致会话永久无法恢复。问题虽然已关闭，但揭示了会话状态 schema 在序列化、脱敏和反序列化之间缺少统一校验。

### 8. [内置 ARM64 ripgrep 在非标准内存页大小的 Linux 上崩溃](https://github.com/github/copilot-cli/issues/4977)
**状态：Closed｜领域：Linux、Installation、Tools**

捆绑的 ARM64 `rg` 因 jemalloc 假定 4KB 页面大小，在采用 16KB 页面大小的 Asahi Linux 上会触发 `Unsupported system page size` 并立即退出。相关的 64KB 页面问题也已关闭，但同源兼容性问题仍值得通过发行构建和启动检查持续验证。

### 9. [沙箱启用后 `/ide` 无法发现工作区](https://github.com/github/copilot-cli/issues/4909)
**状态：Closed｜领域：IDE 集成、Sandbox**

CLI 开启自身沙箱时，`/ide` 会错误报告没有活动工作区，即使 IDE 进程、锁文件和 MCP Socket 都正常。根因是将 `kill(pid, 0)` 返回的 `EPERM` 误判为进程死亡，直接削弱了 CLI 与 IDE 协作在受限环境中的可用性。

### 10. [支持 OSC 7501 以报告代理状态](https://github.com/github/copilot-cli/issues/5112)
**状态：Closed｜领域：Terminal Rendering**

该功能允许交互式 TUI 通过 OSC 7501 Program Status Protocol 向终端报告代理的 working、blocked 等状态，使终端状态栏、通知或自动化系统能准确获知代理状态。该 Issue 获得 20 个 👍、7 条评论，是本轮社区关注度最高的议题之一。

**其他值得关注的问题：**

- [Windows 下 `/cwd` 无法去除粘贴路径的引号](https://github.com/github/copilot-cli/issues/4426)
- [Markdown 表格单元格中的换行被清除](https://github.com/github/copilot-cli/issues/5168)
- [支持为任务设置 Token 限额](https://github.com/github/copilot-cli/issues/3012)
- [自定义 Agent 与内置 Agent 同名时被静默忽略](https://github.com/github/copilot-cli/issues/1528)
- [安装含 Git LFS 的插件时下载全仓内容并可能中止](https://github.com/github/copilot-cli/issues/4962)

## 4. 重要 PR 进展

过去 24 小时内没有更新中的 Pull Request，因此暂无可汇总的 PR 功能或修复进展。

## 5. 功能需求趋势

### 扩展与插件生命周期
- 支持默认 Agent，避免每个新会话手动激活。
- 扩展工具、技能和 Hook 应随程序化会话创建立即初始化。
- `new_context` 与恢复会话后应完整恢复扩展注册状态。
- 非交互模式需要可配置、可自动化的扩展工具授权机制。

### 会话、上下文与资源管理
- 提供任务级 Token/消耗上限，避免单次任务耗尽额度。
- 明确会话产物目录策略，使生成文件默认进入当前项目工作树。
- 修复跨会话状态持久化及恢复时的 schema 一致性问题。
- 上下文重置后应保持扩展技能、记忆和配置连续性。

### IDE 与终端集成
- 增强 CLI 与 IDE 的工作区发现及沙箱兼容性。
- 通过 OSC 7501 暴露代理运行状态，提升终端集成能力。
- 改进 Markdown 表格和 Windows 路径输入的终端体验。

### 身份认证与 MCP
- 提升 MCP OAuth 令牌的缓存键稳定性，实现跨会话安全复用。
- 减少不必要的重复授权，同时避免令牌被错误共享或泄露。

### 跨平台兼容与权限治理
- 支持 16KB、64KB 页面大小的 ARM64 Linux 环境。
- 优化 Windows PowerShell 命令解析和审批粒度。
- 修正 `gh api` 参数被误判为文件系统绝对路径的问题。
- 插件安装应避免下载整个 Git LFS 仓库或因无关对象缺失而失败。

## 6. 开发者关注点

1. **插件与会话状态不一致是当前最集中的问题。**  
   开发者期待扩展、工具、技能和 Hook 在会话创建、上下文清理及恢复后保持一致，尤其需要自动化接口具备可预测的生命周期。

2. **非交互自动化不能因权限请求而无限阻塞。**  
   `copilot -p` 应明确处理扩展工具权限，并支持通过 `--allow-tool` 等机制进行细粒度授权。

3. **Windows 权限提示过细，影响实际开发效率。**  
   已授权的简单 Git 命令仍触发整段 PowerShell 审查，反映出版本更新中的潜在回归。

4. **会话恢复和产物存放直接影响工程化使用。**  
   除稳定性外，开发者还希望代理生成的审计、报告和脚本位于当前仓库中，以便提交、评审和进入 CI。

5. **MCP OAuth 的重复登录显著影响长流程体验。**  
   稳定复用有效令牌是 MCP 服务接入的关键，缓存键设计应避免因 URL、参数或规范化差异产生重复条目。

6. **跨平台底层兼容性仍需加强。**  
   ARM64 Linux 非标准内存页、Windows 路径粘贴和终端 Markdown 渲染等问题，体现出 CLI 在不同运行环境中的测试矩阵仍不充分。

7. **成本控制需求日益明确。**  
   社区开始要求为单个任务设置 Token 或额度上限，反映模型调用预算管理正从底层统计走向用户可控能力。

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode 社区动态日报｜2026-11-08

## 今日速览

过去 24 小时无新版本发布，社区重点集中在 **V2 稳定性与桌面端体验**：TUI 插件、后台任务状态、Windows 进程与文件锁、服务守护进程及文件监听等问题持续受到关注。与此同时，Code Mode 工具目录稳定性、模型网关双向 TLS、会话时间戳和移动端安装支持是主要开发方向。

---

## 社区热点 Issues

1. **免费额度异常成为当前讨论度最高的问题**  
   [#59387：Free tier issues: read this first, then post your report here](https://github.com/anomalyco/opencode/issues/59387)  
   汇总免费消息额度耗尽、重置时间失效及桌面端相关异常，作为免费层问题的统一入口。评论达 **327 条**，是当日最活跃议题，说明额度展示、重置机制与服务稳定性仍是用户信任的关键。

2. **OpenAI 兼容接口因错误缺少 `message` 而中断**  
   [#60760：OpenAI-compatible stream fails when an error has no message](https://github.com/anomalyco/opencode/issues/60760)  
   部分兼容端点返回不含 `message` 的错误对象时，OpenCode 会因 Schema 校验失败而终止会话。问题已被复现，影响自建代理及第三方 OpenAI-compatible 服务接入。

3. **V2 中 Shell deny 规则可被包装命令绕过**  
   [#62513：bash deny rules don't apply through wrappers on v2](https://github.com/anomalyco/opencode/issues/62513)  
   报告指出 `time`、`env`、`bash -c` 等包装方式可绕过 `"rm *": "deny"` 规则。虽然当前已关闭并进入整理状态，但其暴露的是 **V2 命令安全边界与规则匹配语义**问题，仍值得安全敏感用户关注。

4. **非 UTF-8 文件可能被静默写坏**  
   [#45924：edit and apply_patch silently corrupt non-UTF-8 files](https://github.com/anomalyco/opencode/issues/45924)  
   `edit` 和 `apply_patch` 使用非致命 UTF-8 解码，非法字节可能被替换为 U+FFFD。该问题标记为高严重度且可复现，对跨编码文本、遗留文件和二进制数据尤其危险。

5. **K8s OverlayFS 上服务事件循环可能永久阻塞**  
   [#62687：opencode serve --service event loop deadlock on shared-uid k8s container](https://github.com/anomalyco/opencode/issues/62687)  
   原生文件监听器在共享 UID 容器及 OverlayFS 环境中可能阻塞主线程，导致服务无响应；目前只能通过 `OPENCODE_DISABLE_FILEWATCHER=1` 规避。它暴露了容器化部署中文件监听实现的可靠性与降级策略不足。

6. **关闭全部会话后 Serve 守护进程及 MCP 子进程仍存活**  
   [#62693：Closing all sessions leaves the serve daemon and its spawned MCP children alive](https://github.com/anomalyco/opencode/issues/62693)  
   Windows 环境下，关闭会话后后台服务与 MCP 子进程不会自动退出，内存只能通过手动 `taskkill` 回收。问题已关闭待整理，但生命周期管理和资源释放仍是 V2 桌面端的重要质量指标。

7. **打包 CLI 无法可靠运行外部 TSX TUI 插件**  
   [#39986：Support reactive external TSX plugins in packaged CLI](https://github.com/anomalyco/opencode/issues/39986)  
   打包后的 Bun CLI 可能错误解析 JSX runtime，或加载项目本地的 `solid-js` / `@opentui/solid`，导致插件无法启动或信号更新不再渲染。该问题直接影响插件生态的可移植性。

8. **TUI 本地插件热重载失败后无法自行恢复**  
   [#61525：Local plugin hot-reload never recovers from a failed import](https://github.com/anomalyco/opencode/issues/61525)  
   插件导入失败一次后，后续热重载会持续出现相同错误，即使用户已修复源码，仍需重启客户端。问题已复现，凸显模块缓存、错误恢复和热重载状态机的缺陷。

9. **TUI 后台任务仍在运行，但会话标签不再显示加载状态**  
   [#62505：Session tab shows no spinner while background shell still running](https://github.com/anomalyco/opencode/issues/62505)  
   Shell 行本身仍显示 spinner 和 Background 标记，但会话标签中的加载指示器提前消失，容易让用户误判任务已经结束。该问题已在当日关闭，相关同类报告 [#62668](https://github.com/anomalyco/opencode/issues/62668) 也已关闭。

10. **Code Mode 下 MCP 工具可调用但无法被模型发现**  
    [#61891：DocumentationSearch is callable directly but omitted from catalog and search()](https://github.com/anomalyco/opencode/issues/61891)  
    MCP 服务连接的 54 个工具中，Code Mode 目录仅暴露 53 个，遗漏的 `DocumentationSearch` 虽能直接调用，却无法通过 `search()` 被模型发现。该问题体现工具注册、检索目录与模型可见性之间的一致性风险。

---

## 重要 PR 进展

1. **降低 Code Mode 工具目录更新的上下文噪声**  
   [#62176：fix(core): keep Code Mode catalog updates small and stable](https://github.com/anomalyco/opencode/pull/62176)  
   避免 MCP 服务器接入或离开时重新发布整份约 2K tokens 的工具目录，改为小而稳定的增量更新，降低重排、上下文占用和历史冗余。

2. **避免 models.dev 刷新锁跨越网络超时**  
   [#61120：fix(core): avoid holding models.dev refresh lock across network timeout](https://github.com/anomalyco/opencode/pull/61120)  
   网络请求超时期间不再持续持有 models.dev 刷新锁，防止其他刷新任务被不必要地阻塞，提升模型元数据更新的健壮性。

3. **在 Shell 创建事件中携带后台执行意图**  
   [#59986：feat(core): include background intent in shell created events](https://github.com/anomalyco/opencode/pull/59986)  
   在 `Shell.Info.metadata` 中加入初始 `background` 值，使客户端可在任务启动阶段识别后台命令，改善状态展示与生命周期管理。

4. **支持模型请求使用客户端证书进行双向 TLS**  
   [#61832：feat(core): present a configured client certificate on model requests](https://github.com/anomalyco/opencode/pull/61832)  
   新增 `network.client_certificate` 支持，使企业模型网关能够要求客户端证书。该能力对 mTLS 网关、金融及受监管企业环境尤其重要。

5. **Android Termux 安装指南**  
   [#62695：docs: add Android (Termux) install guide](https://github.com/anomalyco/opencode/pull/62695)  
   为 V2 文档增加 Termux 安装章节，并链接至 CLI 安装页，补齐移动端/Linux ARM64 使用路径。

6. **Windows 文件锁导致状态写入失败时自动重试**  
   [#62691：fix(tui): retry a state write that loses its rename to a Windows lock](https://github.com/anomalyco/opencode/pull/62691)  
   针对 NTFS 上临时文件 rename 可能遭遇 `EPERM` 或 `EBUSY` 的情况增加重试，提升 TUI 持久化状态在 Windows 下的可靠性。

7. **修复事件重投导致客户端重复生成工具记录**  
   [#61464：fix(client): a re-delivered tool.input.started must not append a duplicate tool part](https://github.com/anomalyco/opencode/pull/61464)  
   为重复投递的 `tool.input.started` 增加幂等处理，避免同一工具调用在会话中显示两次。

8. **修复 compaction 结束事件重投造成重复行**  
   [#61463：fix(client): register the compaction settlement id](https://github.com/anomalyco/opencode/pull/61463)  
   在 compaction 结算时记录事件 ID，使重复的 `ended` 事件不会再次追加结果行，改善重连及事件重放场景下的数据一致性。

9. **防止延迟的 step 事件回退已完成消息状态**  
   [#61462：fix(client): a re-delivered session.step.started must not regress a settled assistant message](https://github.com/anomalyco/opencode/pull/61462)  
   已结算的助手消息不会再被重复的 `session.step.started` 重置为运行中，避免 `finish`、错误信息及完成时间丢失。

10. **桌面端启动不再被登录 Shell 探测阻塞**  
    [#62667：fix(desktop): stop blocking startup on the login shell probe](https://github.com/anomalyco/opencode/pull/62667)  
    调整桌面主进程读取登录 Shell 环境的时机，避免慢速或异常 Shell 阻塞应用启动，改善首屏和后台服务启动体验。

---

## 功能需求趋势

### 1. 企业模型网关与身份认证

- [#61832](https://github.com/anomalyco/opencode/pull/61832) 推动客户端证书与 mTLS 支持。  
- [#60289](https://github.com/anomalyco/opencode/pull/60289) 也在推进同类能力。  
- 社区期待 OpenCode 更顺畅地接入企业代理、证书体系及自定义模型网关。

### 2. TUI 插件生态与热重载

- [#39986](https://github.com/anomalyco/opencode/issues/39986)：外部 TSX 插件的 JSX runtime 与响应式渲染。  
- [#61525](https://github.com/anomalyco/opencode/issues/61525)：插件导入失败后的热重载恢复。  
- [#58981](https://github.com/anomalyco/opencode/issues/58981)：托管服务缺少 TUI JSX runtime。  
- [#62666](https://github.com/anomalyco/opencode/issues/62666)：npm 插件中的 Solid signal 更新无法重渲染 slot。  

整体诉求是建立稳定、可打包、可热更新且与项目依赖隔离一致的插件运行时。

### 3. 桌面端与 IDE/终端体验

- [#62675](https://github.com/anomalyco/opencode/issues/62675)：VS Code 集成终端中鼠标选择与复制粘贴能力丢失。  
- [#62496](https://github.com/anomalyco/opencode/issues/62496)：Windows 子进程弹出可见命令行窗口。  
- [#61252](https://github.com/anomalyco/opencode/issues/61252)：桌面端菜单错误显示模板占位符。  
- [#62693](https://github.com/anomalyco/opencode/issues/62693)：守护进程和 MCP 子进程未及时退出。  

用户对桌面端的期待已从“功能可用”转向 **启动速度、进程整洁、终端交互和资源生命周期**。

### 4. MCP 工具可发现性与 Code Mode

- [#61891](https://github.com/anomalyco/opencode/issues/61891) 暴露工具目录、搜索能力与实际可调用集合不一致的问题。  
- [#62176](https://github.com/anomalyco/opencode/pull/62176) 则从上下文成本和更新稳定性入手改进 Code Mode。  
- 后续重点将是工具注册的一致性、增量目录更新和模型自动发现能力。

### 5. 会话管理与可观测性

- [#62655](https://github.com/anomalyco/opencode/issues/62655)：希望 `GET /api/session` 返回最后一条聊天消息时间戳。  
- [#56899](https://github.com/anomalyco/opencode/issues/56899)：在多个终端客户端连接同一 V2 服务时，只向选定客户端切换会话。  
- [#62505](https://github.com/anomalyco/opencode/issues/62505) 与 [#62668](https://github.com/anomalyco/opencode/issues/62668)：后台任务状态需要更准确地呈现在会话标签中。  

社区希望获得更精细的会话状态、路由控制和时间信息，以支持多客户端及复杂自动化工作流。

### 6. 跨平台与移动端支持

- [#62695](https://github.com/anomalyco/opencode/pull/62695)：Android Termux 文档与安装路径。  
- Windows 兼容问题仍集中在文件锁、子进程窗口、守护进程回收和 Electron 渲染性能。  
- 跨平台支持目前仍存在“官方路径已出现，但实际运行可靠性不足”的落差。

---

## 开发者关注点

- **事件幂等与状态一致性**：多个 PR 集中处理事件重投、重复工具行、compaction 重复结果及已完成消息状态回退，说明事件传输和客户端 reconciliation 仍是高风险区域。  
- **后台任务状态不能仅依据 LLM 是否结束**：Shell、后台命令和 MCP 工作可能继续运行，客户端需要以真实任务生命周期而非生成状态为准。  
- **插件运行时隔离不足**：JSX runtime、Solid 依赖和模块缓存问题反复出现，插件作者需要稳定的 JSX transform、依赖隔离及失败后的自动恢复。  
- **Windows 与容器环境兼容性突出**：NTFS rename 锁、可见 `cmd.exe` 窗口、后台进程未回收，以及 K8s OverlayFS 文件监听阻塞，均要求更稳健的跨平台实现和降级机制。  
- **编码与文件编辑安全性**：非 UTF-8 文件静默损坏是数据完整性风险，编辑与补丁工具应保留原始字节或明确拒绝无法安全解码的文件。  
- **免费额度和模型服务稳定性影响采用**：免费消息重置异常、兼容端点 Schema 严格校验、模型网关 TLS 能力不足，持续影响用户对默认云服务的信任。  
- **上下文与 token 成本受到重视**：Code Mode 工具目录的增量更新、后台意图元数据以及会话 API 的精简设计，均体现开发者希望减少冗余事件和无效上下文。

</details>

<details>
<summary><strong>jcode</strong> — <a href="https://github.com/1jehuang/jcode">1jehuang/jcode</a></summary>

# jcode 社区动态日报｜2026-11-08

## 1. 今日速览

过去 24 小时无新版本发布，仓库共有 7 个 Issue 更新、34 个 PR 更新。社区重点集中在 **ACP 协议状态语义、上下文压缩可靠性、模型与 Provider 扩展、TUI 渲染质量**，以及测试环境隔离和配置持久化等工程稳定性问题。

## 3. 社区热点 Issues

> 过去 24 小时仅更新了 7 个 Issue，以下按重要程度列出全部热点。

1. **上下文压缩可能把 Provider 拒绝响应误存为摘要，并丢弃待压缩消息**  
   该问题已在两个仓库复现，影响会话上下文与消息历史，可能直接导致压缩后数据丢失或行为异常，是今日风险等级最高的问题之一。  
   [#2089](https://github.com/1jehuang/jcode/issues/2089)

2. **ACP 无法正确区分终止、拒绝与取消状态**  
   Prompt 达到终端限制或被 Provider 拒绝时，ACP Bridge 可能错误返回 `end_turn`；取消事件还可能被归因到错误 Prompt。状态语义错误会影响客户端展示、重试判断和自动化流程。  
   [#2094](https://github.com/1jehuang/jcode/issues/2094)

3. **Go 代码在 TUI 中出现语法高亮串行污染和缩进丢失**  
   行注释可能错误延续到后续代码，Tab 缩进也可能消失。#2095 提供了可复现样例和诊断，被视为 #2074 的进一步分析。  
   [#2095](https://github.com/1jehuang/jcode/issues/2095)  
   [#2074](https://github.com/1jehuang/jcode/issues/2074)

4. **Harness API 和 CLI 无法获知模型支持的推理强度**  
   通过 `jcode api --stdio`、SDK 或 `jcode model list --json` 接入时，客户端看不到具体路由支持哪些 reasoning effort，限制了外部编排工具的模型选择能力。  
   [#2091](https://github.com/1jehuang/jcode/issues/2091)

5. **ACP 工具标题缺乏描述性**  
   当前标题生成逻辑较通用，无法准确表达工具正在执行的具体操作。该问题直接影响 ACP 客户端中的可读性和会话回放体验。  
   [#2093](https://github.com/1jehuang/jcode/issues/2093)

6. **希望增加 Tsubasa OpenAI-compatible 命名 Profile**  
   社区希望以专用登录项和正确的上下文限制接入公开的 `tsubasa-pro`、`tsubasa-fast` 别名，减少手工配置，并改善 Provider 管理的一致性。  
   [#1547](https://github.com/1jehuang/jcode/issues/1547)

7. **Go 语法高亮异常仍需进一步确认预期行为**  
   报告指出，即使代码未经过 `gofmt`，语法高亮仍应尽量正常工作，因此当前现象可能并非单纯由非格式化代码造成。该 Issue 已获得 3 条评论，是今日有明确社区互动的条目。  
   [#2074](https://github.com/1jehuang/jcode/issues/2074)

## 4. 重要 PR 进展

1. **文本模型遇到图片块时自动恢复会话可运行性**  
   针对 OpenAI-compatible 文本模型无法处理像素、且错误图片块持续污染历史的问题，在运行时、请求构造和会话状态三个层面加入模态恢复，避免后续所有回合连续失败。  
   [#1347](https://github.com/1jehuang/jcode/pull/1347)

2. **隔离测试环境，降低并行测试的随机失败率**  
   清理环境中继承的 `JCODE_*` 变量，对会修改 `JCODE_HOME` 的测试加锁，并让不稳定 fixture 使用隔离目录和更安全的加载边界，提升 CI 稳定性。  
   [#1880](https://github.com/1jehuang/jcode/pull/1880)

3. **支持可配置自动重试与 Alt+S Sidecar 切换**  
   自动重试次数、退避策略和 Sidecar 回退顺序均可配置；模型选择器中的 Alt+S 快捷键可切换当前会话的 Sidecar 回退行为，配置也会写入 `config.toml`。  
   [#1878](https://github.com/1jehuang/jcode/pull/1878)

4. **TUI 模型切换持久化到配置文件**  
   用户在模型选择器中的切换不再局限于当前会话，而是写入 `config.toml`，本地、远程及重启后的路径均纳入测试。  
   [#1881](https://github.com/1jehuang/jcode/pull/1881)

5. **安装流程自动同步稳定版本清单**  
   `builds/manifest.json` 的 `stable` 字段将在安装、自开发版本晋升等流程后自动同步，避免因字段陈旧而指向已被清理的版本。  
   [#1392](https://github.com/1jehuang/jcode/pull/1392)

6. **模型选择器与信息面板能力扩展**  
   该 PR 同时加入概览折叠组件、`agents.memory_effort` Sidecar 配置以及运行时模型行展示，尝试将多项 TUI 信息面板改进集中交付。  
   [#1709](https://github.com/1jehuang/jcode/pull/1709)

7. **允许隐藏实时 TPS 信息**  
   新增 `[display] show_tps`，默认保持原有行为；关闭后不仅隐藏信息面板和状态栏中的 tokens/s 行，也会跳过实时 TPS 计算。  
   [#1708](https://github.com/1jehuang/jcode/pull/1708)

8. **Provider 支持自定义 User-Agent 和附加请求头**  
   OpenRouter-compatible 与 Anthropic Runtime 均可从配置读取额外 Header，适用于依赖 Header 进行路由、计费或鉴权的网关。  
   [#1872](https://github.com/1jehuang/jcode/pull/1872)

9. **会话恢复列表突出当前目录并优先运行中会话**  
   `/resume` 会将当前工作目录匹配的会话置顶，按新到旧排列；各分组内也优先展示仍在运行的会话，减少查找成本。  
   [#1852](https://github.com/1jehuang/jcode/pull/1852)

10. **会话命令支持预过滤搜索**  
    `/sessions`、`/session` 和 `/resume` 可接受查询词，直接打开已带搜索条件的选择器；本地与远程模式均支持，便于快速定位历史会话。  
    [#1346](https://github.com/1jehuang/jcode/pull/1346)

## 5. 功能需求趋势

- **协议与外部集成规范化**  
  ACP 状态码、工具标题、推理强度元数据和 Cursor ACP Provider 是明显重点，社区希望 jcode 在协议层提供更准确、可供程序消费的信息。

- **Provider 与模型路由能力增强**  
  需求集中在 Tsubasa 命名 Profile、自定义 OpenAI-compatible Provider、Per-model 显示名与 reasoning effort，以及 Bedrock 默认模型保护。

- **长上下文可靠性与数据安全**  
  上下文压缩误存 Provider 拒绝响应并丢失消息，暴露了压缩流程在异常路径上的数据完整性风险。

- **TUI 渲染与交互体验**  
  Go 语法高亮、缩进保持、Mermaid/Math 字形兼容、主题切换、概览折叠、TPS 显示开关和会话搜索持续受到关注。

- **配置持久化与可观测性**  
  用户希望模型选择、重试、Sidecar 路由、主题和显示选项能够跨会话保存，同时通过 OSC 9 等终端协议暴露 Agent 状态。

- **测试与发布工程稳定性**  
  多个 PR 围绕环境变量污染、并行测试竞态、`JCODE_HOME` 竞争和安装清单漂移，说明项目已进入更重视 CI 可靠性和发布一致性的阶段。

## 6. 开发者关注点

开发者反馈主要集中在以下痛点：

1. **异常路径不可靠**：ACP 对拒绝、截断、取消的区分不清晰，压缩流程还可能错误覆盖或丢弃消息。
2. **机器可读元数据不足**：API、SDK 和 CLI 缺少模型推理能力、路由能力等结构化信息，外部客户端难以进行可靠编排。
3. **TUI 渲染边界问题突出**：Go 注释、缩进和特殊 Unicode 字形暴露出不同终端协议与渲染路径间的兼容性问题。
4. **配置“只在当前会话有效”影响工作流**：模型切换、重试和路由策略需要可靠持久化，并支持本地、远程及重启场景。
5. **Provider 接入碎片化**：社区倾向于使用标准命名 Profile、配置化 Header、统一模型元数据，减少手工维护。
6. **测试结果受环境影响**：外部 `JCODE_*` 环境变量和共享 `JCODE_HOME` 容易造成非确定性失败，严格隔离与并发控制已成为明确需求。

</details>

<details>
<summary><strong>pi</strong> — <a href="https://github.com/earendil-works/pi">earendil-works/pi</a></summary>

# Pi 社区动态日报｜2026-11-08

## 1. 今日速览

过去 24 小时无新版本发布，Pi 社区主要围绕 **MCP/OAuth 稳定性、Codemode 工具调用、模型兼容性、持久化任务状态** 等方向展开密集讨论。多个新 Issue 迅速关闭，表明问题定位和响应速度较高；与此同时，Windows 支持、跨设备配置、持久化存储和低成本模型调用仍是开发者长期关注的重点。

---

## 3. 社区热点 Issues

### 1. MCP 重连会因未认证服务器长时间阻塞
- **问题**：配置多个 MCP 服务器时，Pi 会依次重连全部服务器；未登录或 OAuth 过期的服务器会逐个等待超时，单个服务器重新认证也可能触发全量握手，导致 2–4 分钟阻塞。
- **重要性**：直接影响 MCP 启动体验和故障恢复效率，尤其影响 Google Workspace 等远程 OAuth MCP。
- **社区反应**：Issue 创建当天即关闭，已有 3 条评论，说明团队已快速介入。
- 链接：[Issue #11919](https://github.com/earendil-works/pi/issues/11919)

### 2. OAuth 登录成功后 MCP 工具调用仍返回空结果
- **问题**：Google Workspace MCP 在 OAuth token 有效的情况下，工具调用仍返回空结果，原因疑似登录完成后 session/auth header 未正确沿用。
- **重要性**：这是“认证成功但业务功能不可用”的高影响问题，会显著降低用户对 OAuth MCP 的信任。
- **社区反应**：Issue 当天关闭，附有 token 验证和服务端对照数据，排查信息较充分。
- 链接：[Issue #11918](https://github.com/earendil-works/pi/issues/11918)

### 3. `tool_search` 无法发现已声明的 direct MCP 工具
- **问题**：系统提示中未列出 direct MCP 服务器，导致 `tool_search` 报“未找到匹配工具”，即使对应工具已经声明。
- **重要性**：直接影响 MCP 工具发现、提示词构建和工具选择准确率，是 MCP 路由机制中的关键问题。
- **社区反应**：当天关闭，当前评论较少，仍需关注正式修复与回归验证。
- 链接：[Issue #11921](https://github.com/earendil-works/pi/issues/11921)

### 4. Codemode 的 `schemaToType` 丢失 `allOf` 同级类型
- **问题**：当字符串 Schema 同时包含 `allOf` 约束时，`schemaToType()` 会输出 `unknown`；Zod 4 的多重 `.regex()` 约束可触发该情况。
- **重要性**：错误类型会降低 Codemode 对参数约束的理解质量，可能导致模型生成无效调用或增加试错成本。
- **社区反应**：Issue 有 5 条评论，关注度较高，核心诉求是完善 JSON Schema 到 TypeScript 类型的转换。
- 链接：[Issue #11122](https://github.com/earendil-works/pi/issues/11122)

### 5. Codemode 脚本声明 `tools` 或 `console` 后无法运行
- **问题**：脚本顶层声明 `tools` 或 `console` 时，与运行器注入的参数重名，触发 `invalid redefinition of parameter name`。
- **重要性**：这是影响脚本正常执行的直接阻塞问题，也暴露了 Codemode 沙箱参数命名设计上的冲突。
- **社区反应**：关联 PR 当天关闭，问题得到快速修复。
- 链接：[Issue #11226](https://github.com/earendil-works/pi/issues/11226) · [PR #11920](https://github.com/earendil-works/pi/pull/11920)

### 6. pi-durable 任务停在 `waiting` 或 `completing`
- **问题**：即使依赖项或子任务已经完成，任务仍可能卡在 `waiting` 或 `completing`；通过 `Storage.publishing` 控制提交时序可稳定复现。
- **重要性**：任务状态机是持久化编排的核心，状态无法推进会影响调度、重试、可观测性和长期任务可靠性。
- **社区反应**：Issue 已关闭，已有 2 条评论，属于近期高价值的稳定性报告。
- 链接：[Issue #11892](https://github.com/earendil-works/pi/issues/11892)

### 7. 缺少删除持久化会话的能力
- **问题**：当前无法永久删除 pi-durable 存储中的会话及其关联条目、文档、收件箱和调度状态。
- **重要性**：涉及隐私、数据生命周期和存储治理；理想行为还包括在运行期间安全中止删除。
- **社区反应**：获得 4 个赞、5 条评论，是本次数据中较受认可的长期功能提案。
- 链接：[Issue #11026](https://github.com/earendil-works/pi/issues/11026)

### 8. Mistral GLM 流式内容被渲染为 `[object Object]`
- **问题**：Mistral 通过 OpenAI-compatible API 返回数组形式的 `delta.content`，Pi 的解析器将其字符串化，导致终端持续显示 `[object Object]`。
- **重要性**：体现 OpenAI-compatible 协议并不完全等价；兼容层需要对不同供应商的增量内容形态进行规范化。
- **社区反应**：Issue 当天关闭，暴露了兼容 provider 时常见的“同协议、不同方言”问题。
- 链接：[Issue #11916](https://github.com/earendil-works/pi/issues/11916)

### 9. 严格 OpenAI-compatible 服务拒绝包含 `uniqueItems` 的工具 Schema
- **问题**：部分严格 provider 遇到工具 Schema 中的 `uniqueItems` 会返回 HTTP 400。
- **重要性**：影响 Codemode、工具参数生成以及多 provider 兼容性；Schema 清洗策略需要区分“必需字段”和“可选增强关键字”。
- **社区反应**：Issue 当天关闭，但该问题可能影响更多严格 JSON Schema 实现。
- 链接：[Issue #11913](https://github.com/earendil-works/pi/issues/11913)

### 10. Windows 使用方式分散，缺少统一支持策略
- **问题**：Windows 上存在多种 Pi 运行方式，社区难以判断哪些问题应由核心修复、哪些应交由扩展处理，也缺少稳定的最佳实践和开箱即用体验。
- **重要性**：Windows 用户规模大，运行方式碎片化会放大安装、终端、快捷键和路径兼容性问题。
- **社区反应**：该 Issue 评论达 94 条，是本轮最活跃的长期讨论之一。
- 链接：[Issue #7547](https://github.com/earendil-works/pi/issues/7547)

---

## 4. 重要 PR 进展

> 过去 24 小时仅更新了 5 条 PR，以下按影响范围列出全部条目。

### 1. 修复 Codemode 脚本变量与运行器参数重名
- **内容**：允许脚本自行声明 `tools` 和 `console`，避免与沙箱注入参数冲突，解决脚本无法执行的问题。
- **价值**：直接提升 Codemode 脚本可用性，并避免依赖特定变量命名。
- 链接：[PR #11920](https://github.com/earendil-works/pi/pull/11920)

### 2. 为 p2 增加 Prompt Cache 预热
- **内容**：针对 Anthropic 及 Radius 上 Claude 的 5 分钟 Prompt Cache，在缓存即将失效时主动刷新，避免长间隔请求重写完整提示词。
- **价值**：报告称相关 p2 会话中发生 789 次额外缓存失效，估计造成约 1,430 美元额外支出，占总支出 26%。
- **链接**：[PR #11857](https://github.com/earendil-works/pi/pull/11857)

### 3. Compaction 状态组件支持 `colorFn` 覆盖
- **内容**：修复主题未设置 `borderColor` 时，嵌入式压缩状态指示器无法覆盖颜色的问题；行为与 WorkingIndicator 保持一致，并同步整理内部命名。
- **价值**：改善主题兼容性和 TUI 扩展的一致性。
- 链接：[PR #10810](https://github.com/earendil-works/pi/pull/10810)

### 4. Neon + pgvector 记忆层 MVP
- **内容**：实现基于 Neon 和 pgvector 的记忆存储，提供余弦搜索及 `pg_trgm` 回退，并加入嵌入执行器、相关文档和注册交接材料。
- **价值**：为 Cline 场景提供替代原 Mem0 阻塞路径的可部署记忆层。
- 链接：[PR #11910](https://github.com/earendil-works/pi/pull/11910)

### 5. 增加 orchestrator supervisor、shotd 与 add-all
- **内容**：扩展 coding-agent 的编排能力，并加入用户要求的 add-all 覆盖行为。
- **价值**：反映社区正在探索更复杂的多代理编排与批量操作模式。
- 链接：[PR #11907](https://github.com/earendil-works/pi/pull/11907)

---

## 5. 功能需求趋势

### MCP 与 OAuth 成为当前主线
- 用户关注点从“能否连接 MCP”转向连接后的稳定性：并发重连、超时隔离、认证状态传播、工具发现和状态展示。
- 代表议题：[MCP 重连阻塞](https://github.com/earendil-works/pi/issues/11919)、[OAuth 后调用为空](https://github.com/earendil-works/pi/issues/11918)、[direct 工具发现失败](https://github.com/earendil-works/pi/issues/11921)。

### Codemode 逐步走向可编程工作流
- 需求包括：
  - 脚本可自由声明工具和控制台绑定；
  - JSON Schema 与类型推导更准确；
  - 在 Codemode 中执行轻量、一次性文本模型调用；
  - 支持关闭 thinking，输出文本或 Schema 约束 JSON。
- 代表议题：[Schema 类型丢失](https://github.com/earendil-works/pi/issues/11122)、[轻量模型调用](https://github.com/earendil-works/pi/issues/11909)。

### 模型供应商兼容性仍是高频摩擦点
- 社区持续补充 MiniMax OAuth、OpenAI-compatible 方言、流式内容格式和工具调用边界处理。
- 代表议题：[MiniMax OAuth](https://github.com/earendil-works/pi/issues/11915)、[Mistral 流式内容](https://github.com/earendil-works/pi/issues/11916)、[工具调用索引复用](https://github.com/earendil-works/pi/issues/11908)。

### 持久化、调度和数据生命周期
- 用户希望强化 pi-durable 的状态机稳定性，并增加会话永久删除能力。
- 这表明需求已从“保存对话”扩展到“长期运行、状态治理、隐私与可恢复性”。
- 代表议题：[任务状态卡住](https://github.com/earendil-works/pi/issues/11892)、[删除会话](https://github.com/earendil-works/pi/issues/11026)。

### 跨平台与可移植配置
- Windows 支持仍是社区长期议题；同时，`deviceId`、`lastChangelogVersion` 等设备相关字段希望从 Git 跟踪的全局配置中迁出。
- 代表议题：[Windows 支持](https://github.com/earendil-works/pi/issues/7547)、[迁移 deviceId](https://github.com/earendil-works/pi/issues/10187)、[迁移 lastChangelogVersion](https://github.com/earendil-works/pi/issues/6415)。

### 交互控制与扩展 API 增强
- 社区希望在不中止当前模型、不丢弃已生成上下文的情况下暂停或中断输出。
- 扩展也希望读取和移动全屏记录滚动位置，并在自定义 footer 中展示原生 MCP 连接状态。
- 代表议题：[中断但保留上下文](https://github.com/earendil-works/pi/issues/11917)、[滚动位置 API](https://github.com/earendil-works/pi/issues/11914)、[MCP 状态 API](https://github.com/earendil-works/pi/issues/10871)。

---

## 6. 开发者关注点

1. **兼容不等于完全等价**  
   OpenAI-compatible API 在流式内容、工具 Schema 和工具调用索引上存在供应商方言差异，Pi 需要更强的规范化与容错层。

2. **MCP 的主要瓶颈已从连接转向状态管理**  
   登录、token 续期、服务器状态、工具发现和失败隔离需要形成一致的会话级机制，避免单个异常服务器拖慢整个 MCP 集合。

3. **Codemode 的类型与执行环境需要更严谨**  
   开发者既关注运行时变量冲突，也关注 JSON Schema 到 TypeScript 类型的正确映射；这直接影响模型生成工具调用的可靠性。

4. **长期任务的恢复与清理能力不足**  
   pi-durable 任务状态停滞、无法永久删除会话，说明持久化系统仍需加强状态机一致性、数据生命周期和故障恢复。

5. **成本优化开始进入核心优化范围**  
   p2 的 Prompt Cache 预热提案表明，缓存失效造成的重复上下文成本已经具有明显规模，值得进一步加入缓存命中率、失效次数和节省金额监控。

6. **配置需要区分“偏好”与“设备状态”**  
   将 `deviceId`、更新状态等字段移出用户 dotfiles，可减少多设备 Git 同步冲突，也符合“配置可移植、设备标识本地化”的趋势。

7. **Windows 需要从分散支持转向统一策略**  
   社区期望明确原生方案、兼容层和扩展边界，并提供安装、终端渲染、快捷键及路径处理的一致文档。

8. **交互应更细粒度，避免“中止即丢失”**  
   模型输出期间提供暂停、继续或仅停止当前生成的能力，可保留已有上下文，适合长任务和人工审阅流程。

</details>

---
*本日报由 [Big Model Radar](https://github.com/96loveslife/big_model_radar) 自动生成。*
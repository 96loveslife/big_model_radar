# AI CLI 工具社区动态日报 2026-11-19

> 生成时间: 2026-11-19 06:50 UTC | 覆盖工具: 8 个

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

**数据日期：2026-11-19**  
**数据来源：各项目 GitHub 仓库过去 24 小时公开动态**

## 1. 生态全景

AI CLI 正从“聊天式编码助手”快速转向可执行、可编排的 Agent 平台，工具调用、权限治理、会话状态和跨端一致性成为各项目共同主线。  
今日各工具的投入明显集中在 **Windows/跨平台稳定性、MCP/Connector 扩展、OAuth 认证、长上下文压缩与成本控制**，说明竞争已由基础补全能力延伸到生产级可靠性。  
Claude Code、Codex 和 Gemini CLI 均有版本或大规模代码更新，OpenCode 的 PR 活跃度较高，Copilot CLI 则以存量问题收敛为主，Kimi Code CLI 今日社区活动最低。  
整体而言，当前主要瓶颈不是模型能力，而是 **状态是否可信、配置是否真正生效、权限是否可解释、工具结果是否可靠落地**。  
此外，多 Agent、Skills 和 ACP 正成为新的生态入口，但随之而来的生命周期管理、凭据隔离和失控循环风险也更加突出。

---

## 2. 各工具活跃度对比

> 注：Issue、PR 数为日报所述统计窗口。不同项目可能存在“按评论排序后截取”或统计口径差异，适合用于观察相对活跃度，不宜直接视为完整社区规模排名。

| 工具 | 今日 Issues | 今日 PRs | Release | 活跃度判断 |
|---|---:|---:|---|---|
| **Claude Code** | 50（更新） | 1 | `v2.1.328` | 功能发布活跃，但 PR 数据异常偏低；Issue 焦点集中于权限、卡死和跨端一致性 |
| **OpenAI Codex** | 50 | 50 | `rust-v0.172.0-alpha.1` | 今日最高频双线活跃，Windows、Cloud、MCP/Apps、Code Mode 并行推进 |
| **Gemini CLI** | 10（热点列表） | 10+ | `v0.69.0`、`v0.70.0-preview.0` | 高频迭代，ACP、Agent 生命周期和上下文治理投入集中 |
| **GitHub Copilot CLI** | 10（热点列表） | 0 | 无 | 以存量问题排查为主；MCP OAuth、ACP 和企业策略是主要议题 |
| **Kimi Code CLI** | 0 | 1 | 无 | 今日活动最低，仅有 IDE 文档 PR 更新且已关闭 |
| **OpenCode** | 10+（热点列表） | 10+ | 无 | PR 推进明显，覆盖 Windows、ACP、TLS、安全、桌面端浏览器等 |
| **jcode** | 8 | 10+ | `v1.0.1` | 小而快地迭代；新模型支持强，但主干构建质量需要观察 |
| **pi** | 10（热点列表） | 5 | 无 | 聚焦上下文压缩、模型路由、缓存和持久化任务生命周期 |

### 活跃度结论

- **综合代码与社区活动最强：Codex**，今日同时有 50 个 Issue 和 50 个 PR。
- **高强度工程迭代：Gemini CLI、OpenCode、jcode**，分别在 ACP、Windows、模型路由、Skills 与安全能力上持续推进。
- **版本发布能力突出但 PR 可见度偏低：Claude Code**，今日仅有 1 条 PR 更新，需注意闭源或数据口径差异。
- **偏问题收敛型：Copilot CLI**，无新版本和 PR，核心障碍集中于 OAuth、生命周期及企业环境。
- **相对静默：Kimi Code CLI**，今日没有 Issue 更新，暂不能据此判断长期产品节奏。

---

## 3. 共同关注的功能方向

### 3.1 跨端与跨平台稳定性

这是覆盖面最广的共同需求：

- **Claude Code**：Windows Cowork 上传失败、移动端权限提示缺失、Desktop 项目设置未加载。
- **Codex**：Windows App 会话读取、Work 消息发送、Computer Use 截图超时，以及 MSIX 更新问题。
- **Gemini CLI**：PowerShell 解析导致 UI 卡死、Windows 路径空格、Wayland Browser Agent 失败。
- **Copilot CLI**：Cortex XDR 杀进程、Entra broker 并发登录、Credential Manager 凭据堆积。
- **OpenCode**：Windows ACP 永久挂起、Desktop 工具不执行、重复文件监听。
- **jcode**：Windows/ConPTY 键盘协议、粘贴重复提交、OSC 控制序列泄漏。
- **pi**：Windows 全屏逐帧重绘，Windows + Zellij 滚轮事件异常。

**开发者启示：** Windows 已不再是边缘平台。企业级 CLI 的验收标准应包含 Win11、ConPTY、PowerShell、终端复用器、安全软件和 Credential Manager，而不只是 macOS/Linux。

---

### 3.2 MCP、Apps 与 Connector 能力成熟化

多个工具都在从“能连接 MCP”转向“可靠、可观察、可治理”：

- **Codex**：增加 MCP 请求 `_meta`、Apps/Connector 结果元数据、Code Mode 嵌套工具捕获和 OAuth Discovery。
- **Claude Code**：多账号 Connector 成为今日最热门需求；同时面临 Gmail 链接改写、GitHub Connector 无响应问题。
- **Gemini CLI**：ACP 补齐输出截断、并行工具调用、Hook 和会话关闭。
- **Copilot CLI**：集中解决远程 MCP OAuth、Entra broker、授权码换令牌和子 Agent 工具发现。
- **OpenCode**：增加远程 MCP 的逐服务器 TLS 信任及首次证书授权流程。

**共同诉求：**

1. 工具请求和结果应携带完整上下文及可追踪元数据。
2. 认证失败必须可见、可恢复，不能长期停留在 `Connecting`。
3. 父子 Agent 的工具可见范围和凭据边界需要一致。
4. 工具输出必须截断并受上下文预算约束。
5. 企业私有 CA 应支持逐服务器信任，而非全局关闭校验。

---

### 3.3 Agent 生命周期、异步任务与状态真实性

多个社区都在解决“Agent 是否真的完成、是否真的结束”的问题：

- **Claude Code**：`/goal` Stop Hook 无限触发、Worktree 不自动清理、父 Agent 被后台任务阻塞。
- **Gemini CLI**：达到 `MAX_TURNS` 仍被报告为 `GOAL` 成功；ACP 未透传停止原因。
- **Codex**：Cloud 环境发现、会话恢复和 transcript 对账不一致。
- **OpenCode**：后台服务反复重启、重复文件监听、暂停状态无法持久化。
- **pi**：`pi-durable` 需要彻底删除会话、取消握手、检查点和调度状态清理。
- **jcode**：Shell 超时后子进程仍继续运行。

**关键结论：** Agent 生命周期必须具备清晰状态机，至少区分：正常完成、轮次耗尽、工具超时、Hook 阻断、用户取消、进程异常和系统崩溃。  
上层调度、评测和费用统计不能依赖模糊的 `success` 或 `GOAL` 标签。

---

### 3.4 权限安全与“明确授权即放行”

- **Claude Code**：Auto mode 误拦定时任务、同账号设备传输等用户已授权操作。
- **Codex**：Scheduled Tasks 与外部系统监控之间存在产品定义冲突；自动审查和沙箱策略职责重叠。
- **Gemini CLI**：希望抑制 `git reset --force` 等破坏性操作并提供更安全替代。
- **OpenCode**：工具日志泄露凭据，破坏性 `gh api` 被自动批准；提出 DPAPI/Credential Manager 非交互提权。
- **Copilot CLI**：企业策略、显式禁用服务和“被策略阻止”的状态冲突。

**趋势判断：** 权限系统正在从简单的“允许/拒绝”二元模型，转向风险评估、作用域、用户意图、可解释性和可审计性并存的模型。

---

### 3.5 上下文窗口、压缩与 Token 成本

- **Codex**：ACP 截断策略曾缺失，单次调用可能消耗 **36.9 万输入 Token**；模型目录和新模型能力同步也存在问题。
- **Gemini CLI**：工具过多可能触发 400；推动 AST 感知读取、精准提取和每日 Token 热力图。
- **Claude Code**：超大粘贴破坏会话、thinking 摘要替代正文、上下文相关卡死。
- **pi**：服务端真实上下文窗口未生效、压缩阈值估算错误、工具顺序变化破坏提示缓存。
- **jcode**：服务端报告的上下文窗口被客户端估算值覆盖。

**开发者启示：** 上下文管理正在成为独立于模型的“Agent Runtime”核心能力，必须综合考虑：

- 服务端真实窗口；
- 工具数量及输出大小；
- 字符数与 Token 密度的差异；
- 多语言内容；
- 缓存前缀稳定性；
- 压缩后的历史重载成本。

---

### 3.6 多 Agent、Skills 与可扩展能力

- **Claude Code**：Code Mode、后台 Agent、Worktree 隔离与清理。
- **Gemini CLI**：Agent 主动使用 Skills/Subagents、并行协作、共享上下文。
- **Codex**：Code Mode 工具专属预加载脚本。
- **Copilot CLI**：子 Agent MCP 工具发现与权限隔离。
- **OpenCode**：`AGENTS.md` 符号链接发现和路径解析。
- **jcode**：Agent Definition、Swarm Spawn、模型/effort/工具策略及 Skills 直接执行命令。

**共同方向：** Skills 正从“提示词模板”扩展为可执行的本地能力包；Agent Definition 则向声明式、可治理的多 Agent 编排配置发展。

---

## 4. 差异化定位分析

| 工具 | 功能侧重 | 主要目标用户 | 技术路线与竞争定位 |
|---|---|---|---|
| **Claude Code** | 权限系统、MCP Hooks、Connector、Desktop/Cowork、Remote Control、claude.ai 融合 | Anthropic 生态用户、Claude 订阅用户、多云企业团队 | 强调多云模型接入、自动权限分类和 Claude 全端体验融合；优势是模型与产品生态，短板是分类器误报及跨端状态复杂度 |
| **OpenAI Codex** | Desktop/Cloud 打通、Apps/MCP、Code Mode、Computer Use、Windows 沙箱 | ChatGPT/OpenAI 开发者、Cloud 编码用户、自动化工程师 | 以 Responses API、App Server、Cloud 和 Desktop 为中心，工程化程度高；优势是云端一体化，当前瓶颈是 Windows 和跨端一致性 |
| **Gemini CLI** | Subagent、Browser Agent、ACP、Skills、AST 工具、Token 治理 | Gemini 用户、多 Agent 开发者、IDE/ACP 客户端开发者 | 开源原生多 Agent 路线，ACP 投入最系统；优势是协议完整性和可扩展性，短板是 Browser Agent 与状态准确性 |
| **GitHub Copilot CLI** | GitHub/IDE 集成、企业策略、MCP OAuth、子 Agent、ACP | GitHub 企业用户、Copilot 订阅用户、受管环境团队 | 深耕企业身份和 IDE 生态；优势是企业触达，短板是认证链路复杂、Windows 安全软件兼容和协议功能仍在追赶 |
| **Kimi Code CLI** | 基础 CLI、Kimi 模型接入、IDE 文档 | Kimi 模型用户、轻量编码用户 | 当前更偏轻量与简洁；今日动态不足，暂看不到在 MCP/ACP/多 Agent 等方向的强投入信号 |
| **OpenCode** | 多 Provider、桌面端、浏览器面板、插件、远程环境、ACP、TLS | 多模型用户、插件开发者、重视 UI 和自托管能力的用户 | 开放、激进的产品扩张路线；优势是界面、插件和企业部署能力，安全边界及 Windows 稳定性是主要风险 |
| **jcode** | Provider 路由、Swarm、Skills 命令执行、ACP、TUI | 多模型/自建 Provider 用户、Agent 编排开发者 | Rust 终端 Agent，强调快速迭代、Provider 灵活性和声明式 Agent Definition；当前模型目录较强，但主干构建治理偏弱 |
| **pi** | 上下文压缩、模型路由、提示缓存、持久化任务、SDK 嵌入 | 高级 Agent 开发者、长期会话和嵌入式应用开发者 | 更偏 Agent Runtime/SDK 基础设施，强调长会话成本、可恢复性和 Provider 兼容；问题集中在压缩精度、缓存和内存生命周期 |

### 定位差异的核心

- **Codex** 偏“云端 Agent 操作系统”，Cloud 是连接 Desktop、CLI、Web 和 IDE 的中心层。
- **Claude Code** 偏“Claude 全生态执行入口”，核心差异化是多云模型、权限自动化及 claude.ai/Desktop/Cowork 融合。
- **Gemini CLI** 偏“开放协议与多 Agent 实验平台”，ACP 和 Subagent 能力最突出。
- **Copilot CLI** 偏“企业 GitHub 生态入口”，优势在 IDE 和组织治理，短板是认证与受管环境兼容。
- **OpenCode** 偏“高自由度桌面工作台与插件平台”，浏览器登录态和远程环境扩张明显，但安全治理压力最大。
- **jcode** 偏“轻量、多 Provider、快速演进的终端 Agent”，工程效率较高但构建质量尚不稳定。
- **pi** 偏“底层 Agent Runtime”，不追求终端 UI 广度，而聚焦上下文、缓存和持久化任务生命周期。

---

## 5. 社区热度与成熟度

### 5.1 社区热度较高

**第一梯队：Codex**

- 今日 50 Issues、50 PRs，另有 Alpha Release。
- 同时覆盖 Windows、Cloud、MCP、Code Mode、OAuth、模型目录和 TUI。
- 议题广且工程响应密集，但高 Issue 数也反映产品面积扩大后的稳定性压力。

**第二梯队：OpenCode**

- 热点 UI Issue 达 **46 条评论、47 个赞**；TUI i18n 达 **26 条评论**。
- PR 涉及桌面浏览器、远程 MCP TLS、插件更新、ACP、路径解析和权限持久化。
- 社区表达活跃、产品想象力强，但安全与跨平台问题同时增多。

**Claude Code**

- 多账号 Connector Issue 达 **320 条评论、483 个赞**。
- 会话卡死 Issue 达 **134 条评论、152 个赞**。
- 热度极高，但说明高关注点已经从功能扩展转向权限误判、恢复性和 Connector 可靠性。

### 5.2 快速迭代阶段

**Gemini CLI**

- 同一日发布稳定版和预览版。
- ACP、工具超时、输出截断、并行调用、Hook、Windows 兼容性连续补齐。
- 属于明显的快速工程化阶段，功能上限较高，但 Browser Agent 和 Agent 状态模型仍需成熟。

**jcode**

- 今日覆盖模型目录、Provider、Swarm、Skills、ACP、Windows TUI、进程清理等大量方向。
- 迭代速度快，但连续出现主干无法编译，说明测试与回滚门禁尚不足以匹配开发速度。

**Codex**

- 同样处于快速迭代，但工程规模和测试基础更强；Alpha 发布说明不完整、PR 状态透明度不足仍是明显短板。

### 5.3 相对成熟或收敛阶段

**Copilot CLI**

- 今日无 Release、无 PR 更新，Issue 集中于 OAuth、凭据和企业策略。
- 更像成熟产品进入问题收敛期；但 MCP 认证和多 Agent 权限仍处于结构性补齐阶段。

**Kimi Code CLI**

- 今日仅一条已关闭的 IDE 文档 PR，无新 Issue。
- 缺少当日社区信号，尚不能仅凭单日数据判断其处于成熟维护还是活跃度不足。

### 5.4 基础设施型成熟度

**pi**

- 重点不是增加终端功能，而是提高长会话、压缩、缓存和持久化任务的可靠性。
- 已形成较明确的长会话基础设施定位，但真实窗口识别、压缩校准和内存回收仍需持续投入。

---

## 6. 值得关注的趋势信号

### 信号一：Agent CLI 的竞争单位已从“模型调用”变成“运行时系统”

能力边界正在扩展到：

- 任务状态机；
- 权限与审批；
- MCP/Apps 工具协议；
- 上下文压缩；
- 缓存和费用；
- Worktree/子进程/临时文件清理；
- 跨端会话同步。

**参考价值：** 选型时不应只比较模型效果，还要比较工具执行成功率、任务可恢复性、Token 成本和故障可诊断性。

---

### 信号二：跨端一致性将成为下一阶段的核心指标

Codex、Claude Code、Gemini CLI 和 pi 都暴露了类似问题：

- Desktop、Web、CLI、TUI 和 Cloud 展示不一致；
- 服务端上下文窗口未被客户端采用；
- 移动端看不到权限提示；
- Cloud、IDE 和 ACP 的会话恢复行为不一致。

**参考价值：** 企业落地应建立统一的会话状态协议，明确模型、权限、工具调用、上下文用量和终止状态的唯一事实来源。

---

### 信号三：MCP 生态正在从插件数量竞争转向信任与治理竞争

MCP 已出现大量集成，但下一阶段的关键不是再接一个服务器，而是解决：

- OAuth 端点发现与令牌刷新；
- 子 Agent 凭据继承；
- 逐服务器 TLS 信任；
- 工具结果元数据；
- 输出截断；
- 禁用状态与策略状态的一致表达。

**参考价值：** 远程 MCP 生产部署必须默认启用凭据隔离、日志脱敏、逐服务器证书策略和权限审计。

---

### 信号四：权限系统的核心矛盾是“自动化”与“用户意图”之间

Auto mode、Scheduled Tasks、自动审查和破坏性命令控制都指向同一问题：系统是否理解用户真正授权的范围。

**参考价值：** 企业部署应保留细粒度策略层，避免仅依赖模型分类器；尤其应为定时任务、已登录账号的同域操作、低风险只读查询建立显式授权规则。

---

### 信号五：上下文成本正成为类似“基础设施账单”的长期支出

典型信号包括：

- Codex 单次 ACP 工具调用可能达到 **36.9 万输入 Token**；
- Gemini CLI 需要 AST 感知读取和工具自动裁剪；
- pi 需要避免工具顺序变化破坏缓存；
- Claude Code 和 jcode 需要准确采用服务端上下文窗口。

**参考价值：** 应把工具输出上限、AST 检索、缓存前缀稳定性、上下文校准和压缩质量纳入 Agent 平台的 SLO，而不是仅监控 API 请求数。

---

### 信号六：Agent 自主性提升必须伴随确定性约束

Gemini CLI、Codex、OpenCode、jcode 都在增强 Skills、Subagents、Code Mode 和浏览器能力，但 Claude Code 的 Hook 循环、OpenCode 的破坏性命令自动批准、pi 的无限挂起说明自主性越强，失控成本越高。

**参考价值：** 建议为 Agent 定义四项硬约束：

1. 明确最大轮次和任务期限；
2. 高影响操作必须幂等或二次确认；
3. 取消必须递归清理子进程、Worktree 和后台任务；
4. 终止原因必须机器可读且可观测。

---

### 信号七：Windows 质量将成为下一轮竞争分水岭

今天几乎所有活跃项目都出现了 Windows 相关问题或修复，覆盖 TUI、ACP、Desktop、沙箱、安全软件、凭据管理和文件监听。

**参考价值：** 对 Windows 开发者占比高的团队，发布准入应至少覆盖：

- Windows 10/11；
- PowerShell 与 CMD；
- Windows Terminal、ConPTY、常见终端复用器；
- Defender/Cortex 等企业安全策略；
- Credential Manager；
- MSIX/安装器更新和回滚。

---

## 决策建议

### 若优先考虑企业治理与 GitHub/IDE 生态

关注 **Copilot CLI**，但应等待其 MCP OAuth、子 Agent 权限和 Windows 启动兼容问题进一步收敛。

### 若优先考虑云端任务与多端 Agent 平台

关注 **Codex**，同时验证 Cloud、Desktop、TUI 的状态一致性和 Windows 稳定性。

### 若优先考虑多 Agent、Skills 与开放协议扩展

关注 **Gemini CLI**，重点验证 Browser Agent、ACP 客户端以及大量工具注册后的上下文成本。

### 若优先考虑 Claude 生态融合和多云接入

关注 **Claude Code**，但需要建立 Auto mode 误拦截、Connector 可靠性和会话恢复的内部评测集。

### 若优先考虑高自由度桌面体验和插件生态

关注 **OpenCode**，同时对浏览器登录态、凭据隔离和破坏性操作审批进行严格审查。

### 若优先考虑轻量、多 Provider 或自建模型接入

关注 **jcode**，但建议等待主干构建稳定性改善。

### 若优先构建长期运行或嵌入式 Agent Runtime

关注 **pi**，重点验证真实上下文窗口、压缩校准、提示缓存和 SDK 内存生命周期。

---

## 各工具详细报告

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills 社区热点

> 数据来源: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills 社区热点报告

> 数据截至 **2026-11-19**。PR 数据中的评论数字段显示为 `undefined`，且 👍 为 0，因此以下 PR 排名主要依据**议题相关性、跨期持续活跃度和潜在影响**，不将其误解为真实评论数排名。

## 1. 热门 Skills 排行

### 1. `mcp-builder`
- **功能**：构建、调试和配置 MCP 服务；本次 PR 适配 MCP 2.x，将 `streamablehttp_client` 迁移为 `streamable_http_client`，并通过 `create_mcp_http_client` / `http_client` 配置自定义请求头。
- **讨论热点**：MCP SDK 升级兼容性、认证头传递、连接脚本稳定性。
- **状态**：**Open**。
- PR：[ #1742](https://github.com/anthropics/skills/pull/1742) · Issue：[ #1668](https://github.com/anthropics/skills/issues/1668)

### 2. `skill-creator`
- **功能**：创建、评估和优化 Skills。
- **讨论热点**：
  - 并行评估可能串扰 UUID，导致触发率假阴性；
  - Windows 与子进程管道兼容问题；
  - YAML frontmatter 解析不准确；
  - `run_eval.py` 通过 `claude -p` 测试时出现 0% 触发率；
  - `package_skill.py` 不能直接执行。
- **状态**：多个修复 PR 仍为 **Open**，是当前最集中的改进型 Skill。
- PR：[ #1298](https://github.com/anthropics/skills/pull/1298) · [ #1997](https://github.com/anthropics/skills/pull/1997) · [ #1681](https://github.com/anthropics/skills/pull/1681)  
  Issues：[ #556](https://github.com/anthropics/skills/issues/556) · [ #1352](https://github.com/anthropics/skills/issues/1352) · [ #202](https://github.com/anthropics/skills/issues/202)

### 3. `webapp-testing`
- **功能**：启动本地 Web 服务、自动操作页面并验证前端行为。
- **讨论热点**：`with_server.py` 使用 `shell=True` 带来的命令注入风险；`textarea`、`select` 等元素识别错误；测试过程的安全性与可验证性。
- **状态**：两个修复 PR 均为 **Open**。
- PR：[ #1980](https://github.com/anthropics/skills/pull/1980) · [ #1976](https://github.com/anthropics/skills/pull/1976)

### 4. `docx`
- **功能**：生成、修改和验收 Word 文档。
- **讨论热点**：LibreOffice 超时却被误报为成功；文档修订标记残留；合并文本 run 时丢失 XML 命名空间；孤立批注检测。
- **状态**：多个问题分别由 **Open** PR 处理，说明“生成成功”正在转向“输出可验证”。
- PR：[ #1792](https://github.com/anthropics/skills/pull/1792) · [ #1734](https://github.com/anthropics/skills/pull/1734)  
  Issue：[ #2018](https://github.com/anthropics/skills/issues/2018)

### 5. `xlsx`
- **功能**：处理 Excel 公式、工作簿结构和重算结果。
- **讨论热点**：外部链接风险检查遗漏工作表级定义名称及别名，造成漏报。
- **状态**：**Open**，对应 Issue 已明确复现。
- PR：[ #2019](https://github.com/anthropics/skills/pull/2019) · Issue：[ #2013](https://github.com/anthropics/skills/issues/2013)

### 6. `pptx`
- **功能**：制作、渲染和检查 PowerPoint。
- **讨论热点**：缩略图参数校验滞后，非法列数直到 LibreOffice 渲染后才报出无关错误。
- **状态**：**Open**。
- PR：[ #1975](https://github.com/anthropics/skills/pull/1975) · Issue：[ #1809](https://github.com/anthropics/skills/issues/1809)

### 7. `claude-api`
- **功能**：提供 Claude API、SDK、工具调用及 Academy 使用指导。
- **讨论热点**：
  - 文档链接失效；
  - Python SDK 1.1.0 后 `pause_turn` 已支持自动恢复，旧指导已经过时；
  - Skill 一次注入约 15.6 万 token，可能直接耗尽上下文。
- **状态**：相关修复 PR 为 **Open**；上下文膨胀问题仍待处理。
- PR：[ #1730](https://github.com/anthropics/skills/pull/1730) · [ #1950](https://github.com/anthropics/skills/pull/1950)  
  Issue：[ #1487](https://github.com/anthropics/skills/issues/1487)

### 8. `document-skills` / `example-skills` 插件
- **功能**：提供文档处理类官方 Skills 集合。
- **讨论热点**：两个插件可能包含完全相同的 Skills，安装后造成重复加载和上下文浪费；官方仓库、快照与 Claude Code 同步副本之间的状态也不够清晰。
- **状态**：重复插件 Issue 仍为 **Open**；同步关系文档 PR 为 **Open**。
- Issues：[ #189](https://github.com/anthropics/skills/issues/189) · [ #2108](https://github.com/anthropics/skills/pull/2108)

---

## 2. 社区需求趋势

### 1. 企业级共享与分发
社区希望支持组织级 Skill 库、团队共享链接以及集中安装，减少通过 Slack/Teams 手工传递 `.skill` 文件。

- Issue：[ #228](https://github.com/anthropics/skills/issues/228)

### 2. Skill 来源治理与信任边界
当前最强烈且评论最多的诉求，是明确区分官方与社区 Skills，避免社区内容以 `anthropic/` 命名空间传播，造成用户误授予高权限。

- Issue：[ #492](https://github.com/anthropics/skills/issues/492)

### 3. 可验证的质量门禁
社区期待覆盖完整交付周期的质量控制：

1. 任务前校准；
2. 对抗式审查；
3. 交付前验证。

这与 `skill-creator` 的触发评估、文档输出验收和测试修复热度相互印证。

- Issue：[ #1385](https://github.com/anthropics/skills/issues/1385)

### 4. Agent 记忆与状态压缩
`compact-memory` 提议使用紧凑、符号化表示保存长期 Agent 状态，以降低上下文占用并改善持续任务中的记忆管理。

- Issue：[ #1329](https://github.com/anthropics/skills/issues/1329)

### 5. 安全治理与审计
社区希望建立面向 Agent 系统的治理 Skill，覆盖策略执行、威胁检测、信任评分、权限控制和审计轨迹。

- Issue：[ #412](https://github.com/anthropics/skills/issues/412)

### 6. 专业领域自动化
新增需求正在从通用文档处理扩展到垂直场景，例如：

- Notion 规格拆解、实现计划和进度跟踪；
- 智能合约静态分析与审计存证；
- HPC 集群、SSH 与 Slurm 工作流；
- Markdown 到视频和配音。

相关 PR：[ #1245](https://github.com/anthropics/skills/pull/1245) · [ #1771](https://github.com/anthropics/skills/pull/1771) · [ #1615](https://github.com/anthropics/skills/pull/1615) · [ #1703](https://github.com/anthropics/skills/pull/1703)

### 7. 稳定安装、持久化与恢复
用户还关注 Skill 更新、同步或重命名后突然消失，以及如何避免工作区数据丢失。这表明生态需要比单纯“生成更多 Skill”更可靠的安装、版本和恢复机制。

- Issues：[ #62](https://github.com/anthropics/skills/issues/62) · [ #1143](https://github.com/anthropics/skills/issues/1143)

---

## 3. 高潜力待合并 Skills

| Skill / PR | 潜力判断 | 主要价值 | 状态 |
|---|---|---|---|
| [`mcp-builder` #1742](https://github.com/anthropics/skills/pull/1742) | 高 | 直接解决 MCP 2.x API 破坏性变更和自定义 Header 配置问题，对实际集成阻塞小、修复边界清晰 | Open |
| [`skill-creator` #1298](https://github.com/anthropics/skills/pull/1298) | 高 | 修复并行评估串扰、Windows 管道和运行时失败误判，直接提升 Skill 触发优化的可信度 | Open |
| [`webapp-testing` #1980](https://github.com/anthropics/skills/pull/1980) | 高 | 移除 `shell=True`，降低命令注入风险，安全价值明确 | Open |
| [`skill-creator` #1997](https://github.com/anthropics/skills/pull/1997) | 高 | 使用正确 YAML 解析 frontmatter，消除描述、名称和转义字段偏差 | Open |
| [`docx` #1792](https://github.com/anthropics/skills/pull/1792) | 高 | 将 LibreOffice 超时和修订标记残留从“假成功”改为明确错误，强化输出验收 | Open |
| [`xlsx` #2019](https://github.com/anthropics/skills/pull/2019) | 中高 | 补齐工作表级定义名称和别名检查，解决外部链接漏报 | Open |
| [`claude-api` #1950](https://github.com/anthropics/skills/pull/1950) | 中高 | 更新 Python SDK `pause_turn` 行为，避免已过时的重启轮询方案 | Open |
| [`skill-creator` #1681](https://github.com/anthropics/skills/pull/1681) | 中 | 支持 `package_skill.py` 直接执行，改善安装和打包体验 | Open |
| [`pptx` #1975](https://github.com/anthropics/skills/pull/1975) | 中 | 提前校验缩略图参数，减少渲染后的模糊失败 | Open |

> 新领域型 PR 也值得观察：`notion-spec-to-implementation` / `quantitative-resume-auditor`（[#1245](https://github.com/anthropics/skills/pull/1245)）、`proofcore-contract-auditor`（[#1771](https://github.com/anthropics/skills/pull/1771)）、`scnet-hpc`（[#1615](https://github.com/anthropics/skills/pull/1615)）。不过这些仍需进一步验证边界、维护承诺及与现有官方 Skills 的重叠情况。

---

## 4. Skills 生态洞察

**当前社区最集中的诉求不是“增加更多 Skill”，而是建立一套可识别来源、可稳定评估、可安全执行、可验证交付并能由团队统一分发的可信 Skills 基础设施。**

---

# Claude Code 社区动态日报｜2026-11-19

## 1. 今日速览

Claude Code 发布 **v2.1.328**，主要扩展多云平台上的 **Opus 4.6 / Sonnet 4.6 Auto mode**，并为 MCP 工具 Hook 增加 `onFailure: "block"`。  
社区焦点仍集中在权限判定误拦截、会话卡死/上下文丢失、Agent/Worktree 生命周期，以及 Claude Code 与 claude.ai 的能力打通；今日更新的 50 个 Issue 中，多个高关注问题仍在持续发酵。

---

## 2. 版本发布

### [v2.1.328](https://github.com/anthropics/claude-code/releases)

主要更新：

- 为 **Amazon Bedrock、Google Cloud Agent Platform、Microsoft Foundry 和 Claude apps gateway** 启用 Claude Opus 4.6 与 Sonnet 4.6 的 **Auto mode**。
- 未指定权限模式的交互式会话现在默认进入 Auto mode。
- MCP 工具 Hook 新增 **`"onFailure": "block"`**，可与 Command、HTTP Hook 的阻断机制保持一致，使工具调用失败时能够主动阻止流程继续执行。

---

## 3. 社区热点 Issues

### 1. [支持同一 Connector 的多个账号](https://github.com/anthropics/claude-code/issues/27302)
- **重要性：** 同一用户往往拥有多个云盘、邮箱或 SaaS 账号，当前 Connector 账号切换能力不足。
- **社区反应：** 今日最热门 Issue，**320 条评论、483 个 👍**。
- **观察：** 这表明“多身份连接器管理”已成为长期、高热度需求。

### 2. [Claude Code 卡死或长时间冻结](https://github.com/anthropics/claude-code/issues/26224)
- **重要性：** 直接影响核心开发工作流；报告指出会话可能卡在提示流程中 **5–20 分钟以上**。
- **社区反应：** **134 条评论、152 个 👍**，是今日讨论最充分的稳定性问题之一。
- **观察：** 长任务、权限流程和上下文压缩相关的卡死问题值得持续跟踪。

### 3. [Auto mode 误拦截账户所有者自己的定时任务和设备间文件传输](https://github.com/anthropics/claude-code/issues/100730)
- **重要性：** Auto mode 新增后，分类器可能把用户明确授权的操作误判为高风险。
- **社区反应：** **28 条评论**，并关联多个类似回归报告。
- **观察：** 自动权限判断的误报率、可解释性和用户主动授权的优先级，是新模式落地的核心风险。

### 4. [远程控制：移动端不显示权限提示](https://github.com/anthropics/claude-code/issues/35637)
- **重要性：** 桌面端实际等待授权，但移动端看起来像冻结，容易导致误操作或重复操作。
- **社区反应：** **28 条评论、33 个 👍**。
- **观察：** 远程控制不仅要同步会话输出，还需要完整同步交互式权限状态。

### 5. [Opus 5 工具调用间的正文被错误返回为 thinking 摘要](https://github.com/anthropics/claude-code/issues/95764)
- **重要性：** 模型认为已经向用户展示内容，但界面实际只显示摘要，并出现代码块丢失。
- **社区反应：** **13 条评论、10 个 👍**，已有可复现报告。
- **观察：** 这是模型输出协议与客户端渲染之间的信任问题，会直接影响调试和用户沟通准确性。

### 6. [原生 `/goal` Stop Hook 无限重复触发](https://github.com/anthropics/claude-code/issues/94041)
- **重要性：** 即使目标已满足或会话进入等待状态，Hook 仍会反复触发。
- **社区反应：** **9 条评论、4 个 👍**。
- **观察：** 另一个相关报告称该循环每几秒触发一次完整模型轮次，可能快速消耗额度：[#109284](https://github.com/anthropics/claude-code/issues/109284)。

### 7. [Cowork Windows 远程会话文件上传失败](https://github.com/anthropics/claude-code/issues/110676)
- **重要性：** 大于 4 MB 的文件上传失败后，后续连 47 KB 文件也持续返回 HTTP 503。
- **社区反应：** **8 条评论**。
- **观察：** 新近出现的 Windows Cowork 稳定性问题，可能涉及失败重试和会话状态污染。

### 8. [Gmail Connector 重写所有链接为即将失效的跳转地址](https://github.com/anthropics/claude-code/issues/104853)
- **重要性：** 用户从 Claude 打开邮件中的链接时，被重定向到 `google.com/url`，链接可能很快失效并影响业务分享。
- **社区反应：** **6 条评论、7 个 👍**，报告者称已造成实际客户损失。
- **观察：** Connector 不仅需要关注“能否读取”，也需要保证链接语义与可追踪性。

### 9. [thinking“摘要”导致模型误判自身输出](https://github.com/anthropics/claude-code/issues/106043)
- **重要性：** Agent 可能认为自己已经输出 X，而用户实际看到的是 Y，影响任务完成判断和后续决策。
- **社区反应：** **4 条评论、1 个 👍**。
- **观察：** 与 [#95764](https://github.com/anthropics/claude-code/issues/95764) 指向同一类输出语义不一致问题，说明其可能影响 CLI、Desktop 与 Agent SDK。

### 10. [Worktree 隔离的干净子代理工作树未自动清理](https://github.com/anthropics/claude-code/issues/95644)
- **重要性：** 文档宣称未变更的隔离工作树会自动清理，但实际持续残留并堆积在 `.claude/worktrees`。
- **社区反应：** **3 条评论**，但问题具备明确复现条件。
- **观察：** Agent 生命周期管理不仅影响任务执行，也影响磁盘资源和仓库整洁度。

---

## 4. 重要 PR 进展

过去24小时内仅检测到 **1 条更新的 PR**，没有足够数据列出10项重要 PR：

- [#86537：修复 CHANGELOG.md 中重复单词](https://github.com/anthropics/claude-code/pull/86537)
  - 修复 `CLAUDE_BASH_NO_LOGIN`（v1.0.124）日志条目中的 “to to” 拼写问题。
  - 属于纯文档修订，无测试计划。
  - PR 创建于 2026-08-13，于 2026-11-18 更新，当前仍为 Open。

---

## 5. 功能需求趋势

### 多平台、多云模型支持
- Auto mode 已扩展至 Bedrock、Google Cloud、Microsoft Foundry 等平台。
- 社区同时关注 Claude Code 对不同云端模型和部署方式的兼容性。
- 代表需求：[Agent SDK 支持 Code Mode](https://github.com/anthropics/claude-code/issues/109679)

### 权限系统更精细、可靠
- 社区希望自动权限判断减少误拦截。
- 用户明确授权的任务、同账号设备间传输等场景需要更高优先级。
- 相关讨论：[Auto mode 误拦截](https://github.com/anthropics/claude-code/issues/100730)

### Claude Code 与 claude.ai 能力融合
- 长期呼声是让 Claude Code 访问用户的 claude.ai Memory、偏好和上下文。
- 同时，Web/Desktop/Cowork 与 Remote Control 之间的会话互通也是明显方向。
- 代表需求：[访问 claude.ai Memory 和 Context](https://github.com/anthropics/claude-code/issues/14228)、[Cowork 与 Remote Control 消息互通](https://github.com/anthropics/claude-code/issues/108600)

### Agent、子代理与 Worktree 管理
- 关注后台任务结束语义、Worktree 自动清理、Code Mode 以及 Agent 决策的可控性。
- 代表需求：[干净 Worktree 自动清理](https://github.com/anthropics/claude-code/issues/95644)、[后台工作导致父 Agent 停滞](https://github.com/anthropics/claude-code/issues/100595)

### Connector 多账号与可靠集成
- 多账号 Connector 是热度最高的功能请求。
- Gmail 链接改写和 GitHub Connector 无响应问题表明集成质量仍有短板。
- 相关问题：[Gmail 链接重写](https://github.com/anthropics/claude-code/issues/104853)、[GitHub Connector 无响应](https://github.com/anthropics/claude-code/issues/111101)

### Desktop、远程控制与插件 UI 扩展
- Desktop 社区提出自定义“Open in”应用、远程会话机器标识和可点击插件卡片等需求。
- 代表需求：[自定义文件打开应用](https://github.com/anthropics/claude-code/issues/82251)、[插件 UI 支持 SVG/Box 按压](https://github.com/anthropics/claude-code/issues/111102)

---

## 6. 开发者关注点

1. **会话稳定性与可恢复性**  
   卡死、权限提示不可见、上下文压缩失败和超大粘贴导致会话损坏，是直接影响生产效率的问题。参考：[会话卡死](https://github.com/anthropics/claude-code/issues/26224)、[超大粘贴破坏会话](https://github.com/anthropics/claude-code/issues/105096)。

2. **Auto mode 的误报与授权语义**  
   用户期待“明确授权即放行”，尤其是定时任务、同账号设备传输等场景；当前分类器仍显得过于保守。参考：[Auto mode 误拦截](https://github.com/anthropics/claude-code/issues/100730)。

3. **模型输出必须与用户实际所见一致**  
   thinking 摘要替代正文、代码块丢失会让模型产生错误自我认知，是比单纯 UI 展示问题更严重的 Agent 可靠性风险。参考：[输出被摘要化](https://github.com/anthropics/claude-code/issues/95764)、[模型误判已输出内容](https://github.com/anthropics/claude-code/issues/106043)。

4. **Hook 循环与费用控制**  
   `/goal` Stop Hook 重复触发会不断产生完整模型轮次，开发者尤其关注失控循环、配额消耗和明确确认机制。参考：[无限重触发](https://github.com/anthropics/claude-code/issues/94041)、[频繁完整轮次导致用量激增](https://github.com/anthropics/claude-code/issues/109284)。

5. **Agent 后台任务与资源清理**  
   子代理提前结束、父 Agent 停滞以及 Worktree 残留，反映出异步任务状态机和清理机制仍需加强。参考：[父 Agent 停滞](https://github.com/anthropics/claude-code/issues/100595)、[Worktree 未清理](https://github.com/anthropics/claude-code/issues/95644)。

6. **跨端身份、权限与可观测性**  
   Remote Control 的移动端权限渲染、Entra 设备登录、Cloudflare 403 中断 Agent 等问题，说明跨端身份同步、认证容错和错误恢复是远程 Agent 落地的关键障碍。参考：[移动端权限提示缺失](https://github.com/anthropics/claude-code/issues/35637)、[Cloudflare 403 中断 Agent](https://github.com/anthropics/claude-code/issues/109676)。

7. **平台兼容性仍不均衡**  
   Windows、macOS 和 Linux 各自存在不同问题，尤其集中在 Cowork 文件传输、Desktop 项目配置加载、Worktree 命令保护和 Bash 隔离守卫。参考：[Windows Cowork 上传失败](https://github.com/anthropics/claude-code/issues/110676)、[Desktop 未加载项目设置](https://github.com/anthropics/claude-code/issues/105316)、[Linux 隔离守卫误拦截](https://github.com/anthropics/claude-code/issues/110886)。

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex 社区动态日报

**日期：2026-11-19**  
**数据范围：GitHub `openai/codex` 过去 24 小时更新**

## 1. 今日速览

今日社区焦点集中在 **Codex Desktop 的稳定性与跨平台兼容性**，其中 Windows App 的会话、认证、Computer Use、模型目录和更新流程问题较为集中。与此同时，Codex Cloud 的环境发现、会话同步和恢复异常持续引发关注；工程侧则明显加强了 **MCP/Apps 工具结果传递、OAuth 发现、Code Mode 和沙箱诊断** 等底层能力。

过去 24 小时共更新 **50 个 Issues、50 个 Pull Requests**，另发布 `rust-v0.172.0-alpha.1`。上述 Issue 列表按评论数展示前 30 条；Issue 与 PR 合计 100 条的日度总量可能来自数据口径差异（如抓取重复或统计窗口不同），日报条目按提供的唯一链接去重整理。

---

## 2. 版本发布

### `rust-v0.172.0-alpha.1`

- **版本类型：** Alpha 预发布
- **主要内容：** 发布说明仅标注 `0.172.0-alpha.1`，暂未提供明确变更日志。
- **关注价值：** 从当天 PR 方向看，该版本可能覆盖模型目录、MCP/Apps 工具结果、OAuth、TUI、Code Mode 与 Windows 沙箱等近期工程改动，但具体是否已进入该版本仍需等待正式发布说明确认。
- **链接：** https://github.com/openai/codex/releases/tag/rust-v0.172.0-alpha.1

---

## 3. 社区热点 Issues

### 1. Windows App 无法读取已完成 ChatGPT 回复的完整内容

- `read_thread` 对已完成的 ChatGPT 回复只返回 `chatgpt-content-reference`，影响会话读取、状态同步及上层客户端展示。
- 该问题评论数达 **38**，为当天最活跃 Issue；同时涉及 Windows、MCP、App 和 App Server，暴露面较大。
- **链接：** https://github.com/openai/codex/issues/50329

### 2. Codex Cloud 无法发现当前 Cloud 环境

- 用户使用 `codex-cli 0.160.0` 时，CLI 未能识别当前 Cloud 环境；问题获得 **35 条评论、25 个赞**，是当天社区认可度较高的问题。
- 这直接关系到 Codex Desktop、CLI 与 Cloud 工作流之间的环境一致性。
- **链接：** https://github.com/openai/codex/issues/50182

### 3. Windows Computer Use 在微信和 QQ 上截图超时

- 可正常读取无障碍文本，但截图捕获持续超时；由于无法取得截图几何信息，点击无障碍元素也失败。
- **25 条评论**说明该问题对 Windows 桌面自动化影响显著，尤其是历史消息搜索等依赖视觉上下文的场景。
- **链接：** https://github.com/openai/codex/issues/53321

### 4. Windows 新建 Work 会话无法发送消息

- 新建 Work thread 后，发送按钮持续处于禁用状态，影响 ChatGPT Plus 用户的日常任务启动。
- 该问题已有 **25 条评论**，属于 Windows App 高频阻断型故障。
- **链接：** https://github.com/openai/codex/issues/54564

### 5. Desktop 内置自动化限制阻止外部系统监控任务

- 报告称 Scheduled Tasks 文档允许定时任务，但内置自动化限制会拦截对外部 Web 系统的监控。
- **22 条评论、26 个赞**，反映自动化产品定义与实际执行策略之间存在明显落差。
- **链接：** https://github.com/openai/codex/issues/59546

### 6. 不支持的音频工具输出导致后续文本请求返回 HTTP 400

- 音频工具输出进入会话后，后续纯文本轮次可能因无效工具结果而返回 HTTP 400。
- **16 条评论**且创建时间较新，表明这是新版本中快速扩散的会话协议兼容问题。
- **链接：** https://github.com/openai/codex/issues/62212

### 7. GPT-6.1 Sol 用量消耗速度异常加快

- 用户报告五小时额度消耗明显快于此前，并将其与模型使用变化联系起来。
- 获得 **16 条评论、1 个赞**；影响订阅用户对额度规划和成本控制的预期。
- **链接：** https://github.com/openai/codex/issues/60530

### 8. Sites helper 凭据交接被自动审查拦截

- CLI 沙箱中的凭据授权流程因自动审查机制而无法完成，阻碍 Sites helper 使用。
- **13 条评论**表明认证、自动审查和沙箱策略之间的交互是当前重要排障主题。
- **链接：** https://github.com/openai/codex/issues/53487

### 9. Images 2.6 在 Codex OAuth 下功能不完整

- OAuth 客户端无法选择 Images 2.6 模型，复杂度、SVG、GIF 和动画相关控制也未完整提供。
- 获得 **12 条评论、4 个赞**，反映新图像模型发布后，Codex 客户端能力和参数支持存在明显滞后。
- **链接：** https://github.com/openai/codex/issues/59890

### 10. 仓库迁移后 Cloud 环境创建失败，恢复会话提示未授权

- 个人 ChatGPT 账号在桌面端无法创建 Cloud 环境，后续恢复会话又报告账号未授权。
- **10 条评论**，且问题横跨 Cloud、桌面端、认证和仓库迁移，属于端到端链路故障。
- **链接：** https://github.com/openai/codex/issues/61474

---

## 4. 重要 PR 进展

> 下列 PR 在提供列表中均标记为 **Closed**；仅凭该状态无法判断是已合并、被关闭还是以其他方式结束，具体应以 PR 页面为准。

### 1. 为 GPT-6.2 更新 `openai-docs` Skill

- 将现有 GPT-6 迁移说明更新至 **GPT-6.2 Astra/Sol**，并补充所选模型与 endpoint 要求。
- 体现官方文档 Skill 对新模型发布的快速适配。
- **链接：** https://github.com/openai/codex/pull/62447

### 2. 增加 Windows MXC 沙箱启动诊断

- 按进程 ID 记录 MXC 启动阶段和耗时，区分文件系统 helper 等启动环节。
- 有助于定位 Windows 沙箱启动错误、超时及阶段卡顿。
- **链接：** https://github.com/openai/codex/pull/62439

### 3. 支持扩展向 MCP 工具请求附加元数据

- 新增 `ToolLifecycleContributor::mcp_tool_request_meta`，允许扩展利用 thread、turn 和工具注册信息写入 `_meta`。
- 为 MCP 可观测性、路由和上下文传递提供扩展点。
- **链接：** https://github.com/openai/codex/pull/62435

### 4. 扩展不同认证配置下的连接器结果元数据覆盖

- 将解析后的 result-body destination 传入 sampling，并按结果所有者决定保留内容。
- 提升 connector/MCP 结果在多认证模式下的可追踪性。
- **链接：** https://github.com/openai/codex/pull/62434

### 5. 为配置服务器加载器加入可选 OAuth Discovery

- 可从 OAuth metadata 自动发现授权、Token 及可选设备授权端点。
- 适用于配置服务器 bundle 和 auth loader，减少手工端点配置。
- **链接：** https://github.com/openai/codex/pull/62432

### 6. Code Mode 支持工具专属 JavaScript 预加载脚本

- 允许本地会话及 stdio/gRPC host 提供可信 JS helper，在相同 V8 上下文中、匹配工具唯一 binding 时先行执行。
- 扩展 Code Mode 的工具定制和运行时注入能力。
- **链接：** https://github.com/openai/codex/pull/62430

### 7. 将嵌套 Apps 工具结果纳入 Code Mode sampling 请求

- 捕获 Code Mode 内发生的合格嵌套 MCP/Apps 调用结果，并绑定至后续 sampling 元数据。
- 补齐此前只支持直接 Apps 调用的覆盖缺口。
- **链接：** https://github.com/openai/codex/pull/62423

### 8. 允许 `thread/sample` 按样本覆盖模型

- 在实验性 `thread/sample` 请求中增加可选 `model` 字段；省略或传 `null` 时继承原线程模型。
- 支持同一会话内针对不同采样请求使用不同模型。
- **链接：** https://github.com/openai/codex/pull/62419

### 9. 在 rollout traces 中去重大型工具输出字符串

- 避免相同图片等大型工具输出重复占用 trace bundle 预算。
- 当输出字节不可用时，仍尝试保留终端元数据和对话关联信息。
- **链接：** https://github.com/openai/codex/pull/62407

### 10. TUI 修复未完成 Cloud 回复的 transcript 对账

- 处理 Cloud turn/item 页面状态不一致导致的陈旧文本前缀问题。
- 改善从历史记录恢复未完成回复后，最终文本到达时的 TUI 显示一致性。
- **链接：** https://github.com/openai/codex/pull/62403

---

## 5. 功能需求趋势

### 新模型与能力同步

- GPT-6.2 Astra/Sol 的文档和模型目录适配成为重点。
- 用户同时反馈新模型目录缺失、OAuth 图像模型参数不完整，以及模型消耗速率变化。
- 社区期待模型上线时，Desktop、CLI、OAuth、工具调用和文档能够同步支持。

### Codex Cloud 一体化体验

- 当前需求不只是“能创建环境”，还包括：
  - 自动发现当前 Cloud 环境；
  - Web 与 Desktop 会话实时同步；
  - 仓库迁移后的授权继承；
  - 云端构建删除或失效后的会话恢复；
  - TUI 中未完成回复的一致性。
- Cloud 已成为 Desktop、CLI、Web 和 IDE 之间的核心连接层。

### MCP、Apps 与 Connector 扩展能力

- MCP 请求元数据扩展、Apps/Connector 结果传递、Code Mode 嵌套工具捕获均获得工程投入。
- 开发者希望工具调用具备更完整的上下文、可观测性、结果复用和跨宿主兼容性。

### Windows Desktop 与 Computer Use

- 高频需求集中在 Windows 稳定性，包括：
  - 截图和点击能力；
  - 系统光标恢复；
  - 多窗口并发；
  - MSIX 自动更新；
  - 新模型目录刷新；
  - Work 会话发送。
- Windows 用户对安装、更新和底层诊断日志的要求明显提升。

### CLI/TUI 交互与性能

- 社区关注输入延迟、终端滚动、模型选择、Agent 状态显示以及 transcript 渲染。
- TUI 正从基础命令行交互向更完整的桌面级可视化、状态同步和鼠标交互发展。

### 自动化、Hooks 与安全策略

- Scheduled Tasks 与外部系统监控受到限制，用户希望自动化权限模型更加透明。
- PreToolUse 决策来源、授权维护路径，以及安全检查误报也是高频主题。
- 开发者需要更明确地区分“策略准备”“完整性检查”和“真正执行拦截”。

### OAuth 与远程运行时认证

- 配置服务器、第三方 CLI 插件、Codex Cloud 和 Sites helper 均暴露 OAuth 端点发现或授权传递问题。
- 统一、可发现且可远程运行的 OAuth 流程是明确的工程方向。

---

## 6. 开发者关注点

1. **跨端状态一致性**  
   Desktop、Web、CLI、TUI 和 Cloud 对同一会话的展示、模型、状态和恢复行为经常不一致，是当前最高频的系统性问题。

2. **Windows 可诊断性不足**  
   用户需要在不重启应用的情况下确认模型目录、沙箱阶段、MSIX 更新和 App Server 状态。阶段化日志与稳定版本识别是直接诉求。

3. **工具调用结果的可靠传递**  
   MCP、Apps、Connector、Code Mode 与 Responses API 之间需要更严格的协议兼容，尤其要避免无效工具内容使后续轮次返回 HTTP 400。

4. **认证流程的端到端可靠性**  
   凭据交接、OAuth Discovery、插件认证、仓库迁移授权和账户切换容易在中间环节失败，尤其影响远程及非默认操作系统用户配置。

5. **新模型发布后的客户端同步**  
   用户不仅关注模型是否出现在选择器里，还关注新参数、工具协议、OAuth 权限、图像格式和速率限制是否完整支持。

6. **自动化边界需要更清晰**  
   Scheduled Tasks、外部系统监控、自动审查和沙箱安全检查之间的职责重叠，引发误拦截和权限困惑。

7. **CLI 性能与可维护性**  
   SSH/Linux 环境下输入延迟、辅助工具发现、终端渲染和云端 transcript 状态直接影响长时间 Agent 任务的可用性。

8. **测试与发布透明度**  
   大量 PR 涉及回归测试和发布分支回移。社区希望 Alpha 版本提供更明确的变更日志、分支归属和合并状态，以降低排障与升级成本。

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI 社区动态日报｜2026-11-19

## 1. 今日速览

- 过去 24 小时发布 **v0.69.0** 与 **v0.70.0-preview.0**，主要改进包括模板占位符处理、每日 Token 使用量热力图，以及版本整理。
- 社区讨论高度集中在 **Agent/Subagent 能力**：终止状态误报、浏览器 Agent 稳定性、Skills 自主调用、配置继承和上下文控制成为高频议题。
- 近期 PR 重点补强 **ACP 协议、Windows PowerShell 兼容性、媒体文件处理、工具超时与输出截断**，显示工程重点正从基础功能转向可靠性和规模化运行。

---

## 2. 版本发布

### [v0.69.0](https://github.com/google-gemini/gemini-cli/releases/tag/v0.69.0)

主要更新：

- **修复模板占位符替换**：保留字面量 `$` 字符，避免模板文本被错误解析或改写。
- **新增 `/stats heatmap`**：通过热力图展示每日 Token 使用情况，便于分析消耗趋势。
- 同步发布此前预览版本的 Changelog。

### [v0.70.0-preview.0](https://github.com/google-gemini/gemini-cli/releases/tag/v0.70.0-preview.0)

主要更新：

- 整理并合并 **v0.69.0-preview.0**、**v0.68.0** 的 Changelog。
- 更新 Nightly 版本信息至 `0.70.0-nightly.20261110.g1603e9b`。
- 预览版发布说明以版本整理为主，未披露大量新增功能。

---

## 3. 社区热点 Issues

### 1. [Subagent 达到 MAX_TURNS 后仍被报告为成功](https://github.com/google-gemini/gemini-cli/issues/22323)

`codebase_investigator` 实际已达到最大轮次、未完成分析，却被标记为 `status: "success"` 和 `Termination Reason: "GOAL"`。错误的成功状态会误导上层 Agent 和用户，属于高优先级的结果可信度问题。该 Issue 获得 **13 条评论、2 个赞**，是当天讨论最活跃的问题之一。

### 2. [Gemini CLI 遭遇 400 错误：工具数量超过 128/400](https://github.com/google-gemini/gemini-cli/issues/24246)

启用大量工具后，Gemini CLI 可能触发服务端 400 错误。Issue 的期望是系统能根据当前任务自动缩小工具范围，而非将所有工具一并发送。这反映出工具注册、筛选与上下文预算已成为扩展 Agent 能力时的实际瓶颈，目前有 **3 条评论**。

### 3. [Browser Agent 忽略 settings.json 中的配置](https://github.com/google-gemini/gemini-cli/issues/22267)

Browser Agent 没有正确应用全局或项目级 `settings.json` 覆盖项，例如 `maxTurns`。虽然 `AgentRegistry` 初始化时会读取并合并设置，但后续行为未完整继承这些配置。该问题直接影响用户对 Agent 超时、轮次和安全策略的控制，已有 **5 条评论**。

### 4. [Browser Agent 在 Wayland 环境下失败](https://github.com/google-gemini/gemini-cli/issues/21983)

Browser Subagent 在 Wayland 环境中异常退出，虽显示 `GOAL` 终止原因，却未完成浏览器任务。该问题可能影响 Linux 桌面、远程开发和容器化场景，且错误状态也可能掩盖真实失败原因，因此被标记为 **P1**，已有 **4 条评论、1 个赞**。

### 5. [Browser Agent 缺少会话接管与锁恢复能力](https://github.com/google-gemini/gemini-cli/issues/22232)

持久化浏览器配置被已有实例或孤儿进程锁定时，当前 `BrowserManager` 采用 fail-fast 策略。社区建议增加自动会话接管、锁检测和恢复机制，提升重复运行及无人值守场景下的稳定性，目前有 **4 条评论**。

### 6. [Gemini 不会主动使用 Skills 和 Subagents](https://github.com/google-gemini/gemini-cli/issues/21968)

用户反馈，即使已配置 `gradle`、`git` 等自定义 Skills，Agent 通常也不会主动调用，而需要用户明确指示。这反映出能力发现和路由策略仍偏保守。该问题有 **7 条评论**，是当天关于 Agent 自主性的代表性议题。

### 7. [Generalist Agent 无限挂起](https://github.com/google-gemini/gemini-cli/issues/21409)

在明确禁止调用 Subagent 后，Generalist Agent 偶尔仍出现长时间无响应，包括简单的目录创建操作。该问题获得 **8 个赞、8 条评论**，是当天社区认可度最高的可靠性问题之一。

### 8. [模型在随机位置创建临时脚本](https://github.com/google-gemini/gemini-cli/issues/23571)

当原生文件工具不可用、仅允许 Shell 执行时，模型会通过编辑脚本完成工作，但常把脚本散落到多个目录，增加清理成本并污染工作区。Issue 获得 **3 条评论**，与临时文件管理、命令执行安全和更可靠的原生文件工具直接相关。

### 9. [Agent 应停止或抑制破坏性行为](https://github.com/google-gemini/gemini-cli/issues/22672)

在复杂 Git 操作和资源维护场景中，模型偶尔会使用 `git reset`、`--force` 等高风险命令，即便存在更安全方案。社区希望系统能够识别高影响操作并主动降级或请求确认，已有 **3 条评论、1 个赞**。

### 10. [评估 AST 感知的文件读取、搜索与代码库映射](https://github.com/google-gemini/gemini-cli/issues/22745)

该 EPIC 评估 AST 感知工具能否减少文件读取噪音、降低 Token 消耗并缩短代码探索轮次，相关探索还涉及 [AST 代码库映射](https://github.com/google-gemini/gemini-cli/issues/22746) 和 [AST 搜索与读取](https://github.com/google-gemini/gemini-cli/issues/22747)。主 Issue 有 **7 条评论**，说明社区对“更精准、更节省上下文”的代码理解工具存在明确兴趣。

---

## 4. 重要 PR 进展

### 1. [异步解析 PowerShell 命令，避免 UI Spinner 卡死](https://github.com/google-gemini/gemini-cli/pull/30334)

修复 Windows 上 PowerShell AST 解析造成的多秒 UI 冻结。在 Shell 面板出现前，Thinking Spinner 和耗时计时器会停止更新；该 PR 将解析过程异步化，属于跨平台交互稳定性的 P2 修复。

### 2. [新增每次工具调用的可配置超时](https://github.com/google-gemini/gemini-cli/pull/30212)

新增 `tools.callTimeout`，单位为秒，默认 `0` 表示禁用。超时后触发 `AbortSignal`，并返回可恢复的 `TOOL_CALL_TIMEOUT` 错误，让模型可以切换策略，而不是无限等待。

### 3. [修复 ACP 未报告 Agent 停止原因](https://github.com/google-gemini/gemini-cli/pull/30362)

ACP 模式现在处理 `AgentExecutionStopped` 事件，并将停止原因作为 assistant message 返回客户端，不再以空 turn 静默结束。缺失原因时还会使用稳定回退文本，提升 ACP 客户端的可见性。

### 4. [避免在托管历史中重复添加待处理 Prompt](https://github.com/google-gemini/gemini-cli/pull/30363)

修复历史加固逻辑已经将原始 Prompt 合并进 `apiHistory` 后，又重复附加同一 Prompt 的问题；还保留完整的独立待处理片段，并增加首轮及多轮 pending 回归测试，减少上下文污染和重复请求。

### 5. [修复空字符串覆盖 core.sshCommand](https://github.com/google-gemini/gemini-cli/pull/30335)

`getSafeGitEnv()` 和沙箱 Shell 默认值曾将 `core.sshCommand` 设为空字符串，导致 Git 在真正调用 SSH 前就报错。该 PR 避免错误覆盖 SSH 配置，修复依赖 SSH 的 clone、fetch 和 pull 操作。

### 6. [修复大型二进制工具响应被截断](https://github.com/google-gemini/gemini-cli/pull/30241)

此前工具响应截断会递归进入 `__binary_injection__`，导致 Base64 音视频内容被破坏并出现解码失败。该 PR 保证注入的二进制数据在响应截断过程中保持完整。

### 7. [ACP 对大型工具输出执行与 CLI 一致的截断](https://github.com/google-gemini/gemini-cli/pull/30234)

ACP 此前绕过 CLI Scheduler 的大输出截断机制，可能将完整 Shell/MCP 输出发送给模型。问题案例中一次调用消耗 **36.9 万输入 Token**。该 PR 为 ACP 补齐同等截断策略，控制上下文和费用。

### 8. [ACP 并行执行可并行的工具调用](https://github.com/google-gemini/gemini-cli/pull/30236)

ACP Prompt Loop 原先逐个等待工具调用完成，多个搜索、抓取或 Shell 操作会串行累积耗时。该 PR 对齐 CLI Scheduler 行为，并行运行同一轮中的独立工具调用。

### 9. [ACP 支持 session/close 释放会话资源](https://github.com/google-gemini/gemini-cli/pull/30232)

此前客户端调用 `session/close` 会收到 `Method not found`，会话持有的配置、聊天记录和 MCP 连接无法及时释放。该 PR 实现关闭处理，为长期运行或频繁创建会话的 ACP 客户端提供资源清理能力。

### 10. [修复 Windows `/ide install` 路径包含空格时的失败](https://github.com/google-gemini/gemini-cli/pull/30246)

Windows 上编辑器 CLI 路径包含空格时，`/ide install` 无法安装 VS Code Companion Extension。该 PR 为 `cmd.exe` 正确引用 IDE CLI 路径，改善 VS Code 集成在常见安装目录下的兼容性。

### 补充关注：[ACP Hook 与输出监听修复](https://github.com/google-gemini/gemini-cli/pull/30148)

- 在 ACP 会话创建或恢复时触发 `SessionStart` Hook。
- ACP 工具请求确认时触发 `Notification` Hook。
- 相关 ACP 输出刷新修复见 [PR #30144](https://github.com/google-gemini/gemini-cli/pull/30144)，Hook 阻止 Prompt 的原因透传见 [PR #30134](https://github.com/google-gemini/gemini-cli/pull/30134)。

---

## 5. 功能需求趋势

### Agent 与 Subagent 能力

- **自主选择 Skills 与 Subagents**：希望 Agent 根据任务自动发现并调用能力，而非完全依赖用户显式指定。
- **并行协作与共享记忆**：包括共享上下文、并行 Subagent 和跨 Agent 协作机制，参见 [并行 Subagent 探索](https://github.com/google-gemini/gemini-cli/issues/18287)。
- **可观测性**：要求通过 [`/chat share`](https://github.com/google-gemini/gemini-cli/issues/22598) 查看 Subagent 轨迹，并让 [`/bug`](https://github.com/google-gemini/gemini-cli/issues/21763) 报告包含子 Agent 上下文。
- **Agent 自我认知**：希望模型准确掌握 CLI 参数、快捷键及自身能力，参见 [Improve Agent Self-Awareness](https://github.com/google-gemini/gemini-cli/issues/21432)。

### 上下文与 Token 效率

- AST 感知的文件读取、搜索和代码库映射。
- “精准提取”式代码发现，减少整文件读取造成的高 Token 消耗，参见 [Tactful Extraction](https://github.com/google-gemini/gemini-cli/issues/19561)。
- 使用持久化文件替代上下文内 Todo，以降低长期会话的 Context Rot，参见 [Persistent File-Based Task Tracking](https://github.com/google-gemini/gemini-cli/issues/18836)。
- 新增每日 Token 使用热力图已随 v0.69.0 发布。

### 工具治理与安全性

- 自动限制当前任务暴露的工具数量，避免因工具过多触发 400。
- 引入零依赖 OS 沙箱及命令执行后的意图路由，参见 [OS Sandboxing Proposal](https://github.com/google-gemini/gemini-cli/issues/19873)。
- 抑制 `git reset`、强制覆盖等破坏性行为，并提供安全替代方案。
- 每次工具调用支持独立超时，避免模型或工具无限阻塞。

### IDE、ACP 与平台兼容

- 改善 VS Code Companion Extension 的安装和连接体验。
- 补齐 ACP 的会话关闭、Hook、停止原因、并行工具和输出截断能力。
- 提升 Windows PowerShell、Wayland、SSH 和含空格路径等环境下的可靠性。

---

## 6. 开发者关注点

1. **状态必须真实**  
   开发者尤其关注 Agent 能否准确区分“达到最大轮次”“正常完成”“被 Hook 阻止”和“工具超时”。当前 `MAX_TURNS` 被误报为 `GOAL` 成功，会直接破坏上层调度、评测和自动化逻辑。

2. **Agent 应更主动，但需要可预测**  
   社区希望 Agent 自动使用 Skills、Subagents 和 AST 工具，同时避免无意义委派。理想状态是依据任务类型、工具范围和成本自动路由。

3. **大上下文成本已成为核心痛点**  
   文件读取、工具输出和重复 Prompt 都可能推高 Token 消耗。AST 感知读取、输出截断、持久化任务状态及使用量热力图，反映出社区正在从“功能可用”转向“成本可控”。

4. **浏览器 Agent 仍不够稳定**  
   Wayland 失败、配置覆盖失效、浏览器 Profile 锁死等问题，说明 Browser Agent 距离无人值守和稳定自动化仍有差距。

5. **ACP 正在快速补齐生产级能力**  
   资源释放、并行调度、输出截断、Hook 和停止原因透传，是近期 PR 最集中的方向，表明 ACP 正从基本协议接入走向更完整的客户端集成。

6. **跨平台边缘问题影响真实落地**  
   PowerShell UI 卡顿、Windows 路径空格、SSH 配置被覆盖，以及媒体 Base64 被截断等修复虽然细碎，却直接影响 Windows、IDE、远程仓库和多媒体文件等实际工作流。

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI 社区动态日报

**日期：2026-11-19**  
**项目：** `github/copilot-cli`

## 1. 今日速览

过去 24 小时没有新版本发布或 Pull Request 更新，动态主要集中在既有 Issue 的持续排查与收敛。今日最突出的主题是 **MCP 认证与生命周期管理**：远程 MCP OAuth、凭据清理、子 Agent 授权及启动/恢复异常成为反馈集中区；此外，企业策略阻断模型访问、Windows 终端安全软件误杀，以及 ACP/插件会话持久化问题也受到较高关注。

## 2. 版本发布

过去 24 小时无新 Release。

## 3. 社区热点 Issues

### 1. 企业策略间歇性阻断模型列表获取
- **Issue：** [#1595 — Sporadic policy blocking issue retrieving models](https://github.com/github/copilot-cli/issues/1595)
- **重要性：** 企业账号仍有约 40% Premium Requests 额度，但 `/models` 可能返回 “access denied by Copilot policy”，直接影响模型选择与可用性判断。
- **社区反应：** 今日关注度最高，累计 **30 条评论、11 个赞**，说明该问题对企业用户影响较大。

### 2. Windows 下 Cortex XDR 误杀并终止 Copilot CLI 启动的 Shell
- **Issue：** [#5478 — Cortex XDR "parent_process_spoofing" kills the launching shell](https://github.com/github/copilot-cli/issues/5478)
- **重要性：** Copilot CLI 调用 `git` 时可能触发终端安全策略，连带终止 `cmd` 或 PowerShell，属于高影响的企业环境兼容性问题。
- **社区反应：** 累计 **7 条评论、1 个赞**；问题表现为进程级崩溃，用户需要安全厂商调整策略或采用兼容的启动方式。

### 3. Copilot Desktop 中第三方 HTTP MCP OAuth 无法完成认证
- **Issue：** [#4017 — MCP OAuth remote servers cancel host-token and never launch runtime browser flow](https://github.com/github/copilot-cli/issues/4017)
- **重要性：** 非第一方 HTTP MCP 服务切换后既不弹出浏览器，也不显示明确错误，表现为静默失败，显著降低 MCP 服务的可用性。
- **社区反应：** 累计 **7 条评论、3 个赞**；已有 Atlassian、incident.io 等实际场景反馈。

### 4. macOS 上多个 Entra MCP 服务并发登录冲突
- **Issue：** [#5250 — Entra-broker MCP servers fail at startup](https://github.com/github/copilot-cli/issues/5250)
- **重要性：** Azure DevOps Remote MCP 和 WorkIQ 等服务在启动时可能因 “sign-in is already in progress” 被拒绝，且无法恢复已缓存令牌。
- **社区反应：** 累计 **4 条评论**；问题集中于原生 Entra account broker、并发认证和令牌恢复机制。

### 5. 交互式 OAuth 授权码交换未执行，连接永久停在 Connecting
- **Issue：** [#5350 — Interactive OAuth success page served but code-to-token exchange never runs](https://github.com/github/copilot-cli/issues/5350)
- **重要性：** 浏览器授权流程表面上成功，但 CLI 未完成授权码换令牌，导致远程 MCP 永远无法连接；在 WSL2 环境尤其突出。
- **社区反应：** 累计 **3 条评论**；用户明确反馈需要检查回调后的 token exchange 生命周期。

### 6. ACP 零轮次会话未持久化，重启后无法加载
- **Issue：** [#5501 — Zero-turn sessions never persist events.jsonl](https://github.com/github/copilot-cli/issues/5501)
- **重要性：** 空会话或仅执行斜杠命令的会话不会生成 `events.jsonl`，Zed 重启后 `session/load` 返回 `-32002`，直接影响 ACP 会话恢复。
- **社区反应：** 累计 **2 条评论**；这是 11 月 18 日创建的新 Issue，说明问题仍处于早期定位阶段。

### 7. 已明确禁用的 MCP 服务仍被报告为“被策略阻止”
- **Issue：** [#5222 — Startup reports disabled MCP servers as blocked by policy](https://github.com/github/copilot-cli/issues/5222)
- **重要性：** 配置层已经禁用服务，启动阶段却重复显示策略警告，容易让用户误判组织策略和配置状态。
- **社区反应：** 累计 **2 条评论、1 个赞**；涉及策略判定与用户显式禁用之间的优先级问题。

### 8. 子 Agent 的 MCP 工具发现被错误限制在父 Agent 范围
- **Issue：** [#5191 — tool_search_tool child agent discovery appears scoped to parent's tools](https://github.com/github/copilot-cli/issues/5191)
- **重要性：** 子 Agent 无法发现自身获准使用、但未列入父 Agent 的 MCP 工具，破坏自定义 Agent 的工具隔离与授权模型。
- **社区反应：** 累计 **2 条评论**；与 ACP、插件及多 Agent 工具权限设计密切相关。

### 9. Windows Credential Manager 中遗留凭据不断累积
- **Issue：** [#5473 — Stale copilot-keychain-chunk credentials accumulate](https://github.com/github/copilot-cli/issues/5473)
- **重要性：** `copilot-keychain-chunk.*` 条目未及时清理，最终可能填满用户凭据库，并导致系统中其他应用也无法保存凭据。
- **社区反应：** 累计 **2 条评论**；问题不仅影响 Copilot CLI，还可能破坏同一台机器上的其他工具。

### 10. ACP 模式无法自动连接 IDE，缺少 IDE MCP Server
- **Issue：** [#5447 — `--acp` skips `~/.copilot/ide` discovery](https://github.com/github/copilot-cli/issues/5447)
- **重要性：** 即使从编辑器集成终端启动、存在有效 IDE 锁文件，`copilot --acp` 仍不会连接 IDE，而普通交互模式可以正常连接。
- **社区反应：** 累计 **1 条评论**；反映 ACP 与 IDE 集成路径尚未完全统一。

## 4. 重要 PR 进展

过去 24 小时内没有更新中的 Pull Request，因此暂无重要 PR 进展可汇总。

## 5. 功能需求趋势

### MCP OAuth 与身份认证成为首要方向
社区关注点高度集中于远程 MCP 的身份认证和授权链路，包括：

- 原生 Entra broker 与浏览器 OAuth 回退
- 授权码到令牌的交换
- 指定租户登录及访客账号支持
- 子 Agent 继承和隔离 MCP OAuth 凭据
- OAuth 插件参数，如 `oauthClientId`、固定重定向端口
- MCP Gateway OAuth 3LO 与 URL elicitation 支持

相关 Issues：  
[#4017](https://github.com/github/copilot-cli/issues/4017) · [#5250](https://github.com/github/copilot-cli/issues/5250) · [#5350](https://github.com/github/copilot-cli/issues/5350) · [#5157](https://github.com/github/copilot-cli/issues/5157) · [#5437](https://github.com/github/copilot-cli/issues/5437) · [#5452](https://github.com/github/copilot-cli/issues/5452) · [#2960](https://github.com/github/copilot-cli/issues/2960) · [#5410](https://github.com/github/copilot-cli/issues/5410) · [#4371](https://github.com/github/copilot-cli/issues/4371)

### MCP 服务生命周期与启动可靠性
用户希望 MCP 服务启动过程更加透明、稳定且可恢复，主要诉求包括：

- 服务全部连接或失败后的统一完成通知
- 启动过程异步化，避免阻塞 CLI 使用
- 防止禁用服务产生误导性策略警告
- 正确终止 `/clear` 遗留的 stdio 子进程
- 避免纯文本轮次中断后台 Agent 的 MCP 连接
- 为慢启动服务调整 `server/discover` 与 `initialize` 的兼容逻辑

相关 Issues：  
[#5222](https://github.com/github/copilot-cli/issues/5222) · [#2949](https://github.com/github/copilot-cli/issues/2949) · [#4697](https://github.com/github/copilot-cli/issues/4697) · [#5458](https://github.com/github/copilot-cli/issues/5458) · [#5464](https://github.com/github/copilot-cli/issues/5464) · [#5090](https://github.com/github/copilot-cli/issues/5090)

### ACP、IDE 与插件集成持续完善
ACP 生态正在扩展至 Zed、IDE 及插件场景，但会话持久化、IDE 发现、扩展启动时机和运行时 turn ID 仍不完整。

相关 Issues：  
[#5501](https://github.com/github/copilot-cli/issues/5501) · [#3889](https://github.com/github/copilot-cli/issues/3889) · [#5447](https://github.com/github/copilot-cli/issues/5447) · [#5380](https://github.com/github/copilot-cli/issues/5380) · [#5487](https://github.com/github/copilot-cli/issues/5487)

### 企业策略与受管模型兼容性
企业用户同时关注模型列表访问、托管策略稳定性、工具延迟加载和 MCP 策略解释。相关体验需要更一致、可诊断，避免“额度正常但模型不可用”或“禁用服务被策略阻止”等矛盾状态。

相关 Issues：  
[#1595](https://github.com/github/copilot-cli/issues/1595) · [#5341](https://github.com/github/copilot-cli/issues/5341) · [#5481](https://github.com/github/copilot-cli/issues/5481)

## 6. 开发者关注点

1. **认证失败必须可见、可恢复**  
   用户对“无弹窗、无错误、永久 Connecting”尤其敏感。远程 MCP 的认证流程需要明确区分授权取消、并发登录、令牌交换失败、租户选择错误和网络异常。

2. **企业环境安全软件兼容性**  
   Cortex XDR、Credential Manager 和 Entra broker 均会放大 CLI 的基础操作风险。安全策略不应让 Shell、Git 或其他凭据应用直接失效。

3. **多 Agent 与 MCP 权限边界**  
   父 Agent、子 Agent、后台 Agent 和自定义 Agent 对 MCP 工具的可见范围、OAuth 身份及生命周期需要形成一致且可预测的模型。

4. **启动性能与异步化**  
   MCP、插件和连接器同步初始化会拖慢 CLI。用户希望主输入界面立即可用，并在后台完成加载，同时提供明确的状态和完成通知。

5. **会话与扩展状态可靠性**  
   ACP 会话事件持久化、`create_session` 后扩展启动、IDE 自动发现等场景暴露出不同运行路径之间的状态不一致。

6. **可观测性与诊断信息**  
   多条 Issue 指出真正的错误只出现在 debug 日志中。建议在普通日志级别提供更具体的错误原因、失败阶段及可执行的恢复建议。

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI 社区动态日报

**日期：2026-11-19**  
**数据来源：** [MoonshotAI/kimi-cli](https://github.com/MoonshotAI/kimi-cli)

## 今日速览

过去 24 小时内，Kimi Code CLI **没有发布新版本**，也**没有新增或更新的 Issue**。唯一动态为 PR **#1178**，其更新了 Zed IDE 中使用 Kimi CLI 的说明，但该 PR 已关闭。

## 重要 PR 进展

1. **PR #1178：更新 Zed IDE 中的 Kimi CLI 使用说明**
   - 作者：[@yeskunall](https://github.com/yeskunall)
   - 状态：**已关闭**
   - 内容：替换原先关于如何在 Zed 中使用 Kimi CLI 的文档说明，涉及 IDE 集成配置与使用指导。
   - 链接：[GitHub PR #1178](https://github.com/MoonshotAI/kimi-cli/pull/1178)
   - 备注：该 PR 创建于 2026-02-18，过去 24 小时内更新；未提供评论、点赞或进一步合并信息。

## 社区热点 Issues

过去 24 小时内更新 Issue 数量为 **0**，暂无值得汇总的社区热点 Issue。

## 功能需求趋势

由于当前数据中没有 Issues，无法基于社区反馈可靠提炼具体需求趋势。现有唯一动态表明，**IDE 集成与配置文档**仍是近期维护工作的一个方向，但不足以代表整体社区需求。

## 开发者关注点

当前没有新的 Issue 评论或开发者反馈可用于识别高频痛点。结合今日唯一变更，可关注以下方向：

- **IDE 集成配置的准确性**：Zed 等编辑器中的安装、接入和调用方式需要保持文档同步。
- **使用指引的可操作性**：开发者通常更关注配置步骤是否清晰、能否快速完成接入，以及问题排查信息是否完整。

> 注：以上结论仅依据过去 24 小时 GitHub 数据；“版本发布”“社区热点”和“功能需求趋势”无新增条目。

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode 社区动态日报

**日期：2026-11-19**  
**项目：** [anomalyco/opencode](https://github.com/anomalyco/opencode)

## 今日速览

今日无新版本发布，社区讨论主要集中在 **Windows 稳定性、服务模式稳定性、工具调用兼容性和权限安全**。同时，桌面端浏览器面板、MCP 私有证书信任、会话组织与 TUI 国际化等需求升温，PR 队列则围绕文件环境解析、插件更新机制和 ACP 兼容性持续推进。

## 社区热点 Issues

### 1. [#48882：恢复经典 UI，并支持持久左侧边栏](https://github.com/anomalyco/opencode/issues/48882)
- **状态：** Open｜**评论：** 46｜**点赞：** 47
- **重要性：** 新侧边栏改版移除经典双栏布局后，缺少可恢复旧版或持久左侧栏的选项，影响长期用户的工作流。
- **社区反应：** 今日最热门 Issue，获得大量讨论与认可，表明界面可配置性和向后兼容是当前强烈诉求。

### 2. [#64686：Windows 上 ACP 所有会话方法永久挂起](https://github.com/anomalyco/opencode/issues/64686)
- **状态：** Open｜**评论：** 4
- **重要性：** `opencode acp` 在 Windows 完成初始化后，`session/new`、`session/list` 等调用会无限等待；报告指向 `/global/event` SSE 流导致 Bun `fetch` 饥饿。
- **影响：** 直接影响 ACP 客户端及 IDE 集成，属于高严重度兼容性问题。

### 3. [#64676：Windows Desktop 2.3.2 工具调用无法执行](https://github.com/anomalyco/opencode/issues/64676)
- **状态：** Open｜**评论：** 4
- **重要性：** 工具调用未真正执行，回复反而出现重复闭合标记并被输出上限截断，同时渲染器触发 `RangeError: Maximum call stack size exceeded`。
- **影响：** 属于桌面端核心执行链路故障，回退至 2.2.7 可暂时规避。

### 4. [#64674：每次加载位置都会重复订阅文件监听器](https://github.com/anomalyco/opencode/issues/64674)
- **状态：** Open｜**评论：** 4
- **重要性：** 后台服务每次加载项目或工作树，都会监听文件系统根目录及用户目录的各级祖先目录，造成重复订阅和潜在资源泄漏。
- **影响：** 长时间运行后可能引发高 CPU、内存及文件事件处理压力。

### 5. [#64655：`serve --service` 在长时间会话中反复重启](https://github.com/anomalyco/opencode/issues/64655)
- **状态：** Closed｜**评论：** 11
- **重要性：** Debian 13 arm64、PRoot、Android/Termux 环境下，后台服务运行一段时间后会因 inotify/文件监听问题不断重启。
- **社区反应：** 讨论热度较高，问题已关闭，说明相关诊断或修复已得到推进。

### 6. [#23260：消息管道缺少最终空内容校验](https://github.com/anomalyco/opencode/issues/23260)
- **状态：** Closed｜**评论：** 5
- **重要性：** 多阶段消息转换可能留下 `content: []` 或空字符串，导致 Bedrock 抛出 `ValidationException`，其他提供商也可能发生硬失败。
- **影响：** 属于跨提供商共性故障；Issue 已关闭，表明修复已合入或进入收尾阶段。

### 7. [#64777：TUI 缓存本地文件内容且未及时刷新](https://github.com/anomalyco/opencode/issues/64777)
- **状态：** Open｜**评论：** 4
- **重要性：** 通过内置打开文件功能查看文件时，外部编辑器或工具修改磁盘内容后，TUI 仍可能展示旧内容。
- **影响：** 会误导基于文件内容进行的分析，属于影响核心工作正确性的体验与一致性问题。

### 8. [#64773：非交互式管理员任务的可选凭据来源](https://github.com/anomalyco/opencode/issues/64773)
- **状态：** Open｜**评论：** 4
- **重要性：** 提议在 Windows 中接入 Credential Manager/DPAPI 等安全凭据源，使无鼠标、无头或无法处理 UAC 交互的自动化任务可以安全提权。
- **社区反应：** 获集中讨论，体现社区对“无人值守代理＋最小权限凭据”的强烈需求。

### 9. [#64745：工具 I/O 与日志泄露凭据，破坏性 `gh api` 被自动批准](https://github.com/anomalyco/opencode/issues/64745)
- **状态：** Closed｜**评论：** 4
- **重要性：** 同时涉及 CWE-532/CWE-200 凭据暴露，以及破坏性 GitHub API 修改缺少确认的问题，风险高于普通功能缺陷。
- **社区反应：** 虽已关闭，但安全影响显著，值得持续确认修复覆盖范围与默认策略。

### 10. [#50206：OpenCode Go 模型输出畸形 XML/DSML 工具调用](https://github.com/anomalyco/opencode/issues/50206)
- **状态：** Open｜**评论：** 17｜**点赞：** 2
- **重要性：** 部分托管模型输出类似 XML/DSML 的聊天内容，而非合法的工具调用载荷，导致工具执行失败。
- **社区反应：** 讨论量位居前列，反映托管模型输出兼容与协议容错是当前模型支持链路的核心痛点。

### 其他高热度需求

- [#37216：为 TUI 增加 i18n](https://github.com/anomalyco/opencode/issues/37216)——**26 条评论**；终端界面仍全部硬编码为英文，与桌面端和 CLI 的 17+ 语言支持形成明显差距。
- [#43039：为 `opencode2 serve` 增加无密码模式](https://github.com/anomalyco/opencode/issues/43039)——**9 条评论、38 个点赞**；主要面向受控内网和自动化部署。
- [#21227：在聊天 UI 展示工具结果中的图片附件](https://github.com/anomalyco/opencode/issues/21227)——**7 条评论、13 个点赞**；补齐多模态工具结果展示能力。
- [#35219：按住空格键进行语音输入](https://github.com/anomalyco/opencode/issues/35219)——**8 条评论**；希望提供类似 Claude Code 的免手编码体验。

## 重要 PR 进展

### 1. [#64812：沿符号链接读取路径查找附近 `AGENTS.md`](https://github.com/anomalyco/opencode/pull/64812)
- **状态：** Open
- **修复内容：** 不再从解析后的真实路径开始查找，而是沿实际读取路径逐级遍历。
- **价值：** 避免项目内符号链接目录中的技能或代理指令无法被正确发现，对 Skill 和上下文加载尤其重要。

### 2. [#64809：TUI 在服务启动期间重试迁移状态检查](https://github.com/anomalyco/opencode/pull/64809)
- **状态：** Closed
- **修复内容：** 服务尚未完全启动、迁移接口返回 503 时继续轮询，而非让首次请求失败后停止重试。
- **价值：** 改善冷启动时序问题，降低 TUI 启动失败或状态卡住的概率。

### 3. [#63002：桌面端新增已登录浏览器面板](https://github.com/anomalyco/opencode/pull/63002)
- **状态：** Open
- **功能内容：** 支持在聊天旁打开网页、复用登录状态、导入 Chrome/Edge/Firefox/Safari 等浏览器的 Cookie，并提供扩展、预览、提示词和代理安全控制。
- **价值：** 将 OpenCode 从纯编码界面扩展为带身份状态的浏览器工作台，潜力较大，但安全边界和凭据隔离值得重点审查。

### 4. [#64784：将开发分支提升至生产环境](https://github.com/anomalyco/opencode/pull/64784)
- **状态：** Open
- **内容：** 汇总 Core、App、CLI 变更，并补充 Tidepool Alpha Free、Gemini 4 Neon 等控制台文档。
- **价值：** 是近期版本交付的主要集成节点；虽然今日无 Release，其合入状态值得持续跟踪。

### 5. [#60039：远程 MCP 服务支持逐服务器 TLS 信任](https://github.com/anomalyco/opencode/pull/60039)
- **状态：** Open
- **功能内容：** 为远程 MCP 配置增加可选 `tls` 块，支持自签名证书或私有 CA。
- **价值：** 改善企业内网 MCP 接入能力，同时避免要求用户全局放宽证书校验。

### 6. [#60041：首次使用时信任私有网络 MCP 服务器证书](https://github.com/anomalyco/opencode/pull/60041)
- **状态：** Open
- **功能内容：** 为私有网络 MCP 的首次信任流程提供明确交互；依赖逐服务器 TLS 配置。
- **价值：** 与 #60039 构成完整链路，降低证书错误导致 MCP 无法使用的门槛。

### 7. [#64806：补充 `/goal` 命令文档](https://github.com/anomalyco/opencode/pull/64806)
- **状态：** Open
- **内容：** 原生 `/goal` 已随 v2.2.1 发布，但此前缺少独立文档和命令参考。
- **价值：** 改善现有能力的可发现性，属于成本较低但用户价值明确的文档完善。

### 8. [#64797：应用默认捆绑 OpenMono 字体](https://github.com/anomalyco/opencode/pull/64797)
- **状态：** Open
- **功能内容：** 将代码区和终端默认字体切换为 OpenMono，替换 IBM Plex Mono 与 JetBrains Mono。
- **价值：** 统一 OpenCode 品牌视觉和等宽字符显示体验；需关注许可、跨平台字体打包体积与渲染兼容性。

### 9. [#64796：网站与文档采用 OpenMono](https://github.com/anomalyco/opencode/pull/64796)
- **状态：** Open
- **功能内容：** 将网站及文档的等宽字体统一为 OpenMono。
- **价值：** 与应用端字体变更形成一致设计体系，侧重品牌与阅读体验。

### 10. [#64774：文件工具使用解析路径所属环境](https://github.com/anomalyco/opencode/pull/64774)
- **状态：** Closed
- **修复内容：** 文件读写和命令执行不再默认使用会话唯一环境，而是使用目标路径解析出的环境。
- **价值：** 为本地与远程工作区并存奠定基础；后续 #64807、#64795 继续补齐 Code Mode 与 read 工具的一致性。

### 值得继续跟踪

- [#64210：恢复已暂停的问题与预检权限等待](https://github.com/anomalyco/opencode/pull/64210)——持久化 Question 和 Permission 状态，并避免重启后重复执行已完成工具；已关闭，需关注是否进入生产分支。
- [#62862：在新会话草稿中显示 Review 面板](https://github.com/anomalyco/opencode/pull/62862)——补齐新会话初始状态下的评审入口。
- [#64764：自动更新采用 `name@latest` 写法的插件](https://github.com/anomalyco/opencode/pull/64764)——改善插件生命周期管理，已关闭。
- [#64800：保留缺少 `mimeType` 的 ACP 嵌入内容](https://github.com/anomalyco/opencode/pull/64800)——修复资源块被错误丢弃的问题，已关闭。

## 功能需求趋势

### 1. Windows 与跨平台稳定性
Windows 相关问题贯穿 ACP、Desktop、CLI、凭据和文件监听，是当日最集中的质量方向。核心诉求不是单点修补，而是建立 Windows CI、桌面端回归测试以及 ACP 端到端测试，避免“初始化成功但后续调用挂起”一类隐蔽故障。

### 2. IDE、ACP 与编辑器集成
ACP 会话挂起、VS Code Agent Host Protocol 支持请求以及桌面端插件生态表明，社区正在把 OpenCode 从独立终端工具扩展为多编辑器后端。稳定协议实现、跨 IDE 行为一致和清晰的兼容矩阵将成为重点。

### 3. 桌面端浏览器与多模态能力
[#63002](https://github.com/anomalyco/opencode/pull/63002) 的浏览器面板，以及 [#21227](https://github.com/anomalyco/opencode/issues/21227) 的图片附件展示，显示社区希望 OpenCode 能直接处理网页、视觉内容和登录态工作流。

### 4. 会话组织与长期工作流
会话分组、跨项目浏览、非 Git 项目目录以及侧边栏恢复等需求集中出现。核心诉求是让大量长期会话可检索、可归档、可分组，而非仅增加单次聊天能力。

### 5. MCP 安全与企业部署
远程 MCP 的逐服务器 TLS 信任是当日最明确的企业能力增强方向。后续重点将延伸至凭据隔离、代理策略、证书轮换和最小权限控制。

### 6. 模型与提供商兼容性
Go 模型的 DSML 工具调用、GPT-6.2 提示缓存、模型启用后的认证与费用提示，说明用户不仅关心“模型能否调用”，还关心工具协议稳定性、缓存计费透明度以及提供商差异。

### 7. 国际化与语音交互
TUI i18n 和按住空格键语音输入分别代表可访问性与免手操作需求。两者都拥有较高讨论度，但落地时需要兼顾终端宽度、多语言文案审校以及不同平台的录音权限。

### 8. 插件与扩展生态
桌面端远程服务器插件缺少 GUI、插件凭据注入说明、`name@latest` 自动更新和 MCP TLS 支持，共同指向插件生态的下一阶段：可发现、可更新、可远程运行且具备完整安全边界。

## 开发者关注点

- **工具调用必须可靠落地：** Windows Desktop 工具不执行、Go 模型输出畸形 DSML、ACP 无限等待，均直接破坏“代理替用户执行任务”的核心价值。
- **服务生命周期与资源管理：** 重复文件监听、长期运行后服务重启、迁移接口启动竞态，说明后台服务的稳定性和资源回收仍是短板。
- **权限与凭据安全：** 工具日志泄露凭据、破坏性 `gh api` 自动批准、Windows 提权凭据来源等问题表明，社区期待更细粒度、可审计且默认安全的审批机制。
- **上下文发现必须可预测：** `AGENTS.md` 的符号链接查找问题会影响 Skill 和项目指令加载；路径解析应与真实读取路径保持一致。
- **本地文件状态应及时同步：** TUI 缓存旧文件内容容易导致模型或用户基于过期信息行动，需要明确缓存失效策略。
- **功能丰富度之外，可发现性同样重要：** `/goal` 已有原生实现却缺少文档，模型启用后也不清楚认证和费用要求，说明 UI 与文档层面的“隐式能力”正在造成误解。
- **跨环境一致性：** 文件工具、Code Mode、远程 MCP、远程桌面插件都在突破单会话、单本地环境的限制；环境解析、凭据边界和状态同步将成为新的核心架构问题。
- **安全新能力需要谨慎评审：** 浏览器登录态、私有 CA 信任和非交互提权提升能力的同时，也扩大了凭据暴露面，建议优先审查数据隔离、日志脱敏和显式用户授权。

</details>

<details>
<summary><strong>jcode</strong> — <a href="https://github.com/1jehuang/jcode">1jehuang/jcode</a></summary>

# jcode 社区动态日报

**日期：2026-11-19**

## 1. 今日速览

过去 24 小时，jcode 发布 **v1.0.1**，重点修复模型目录在 Agent 忙碌期间更新时丢失的问题，新模型（包括 GPT-6.2 Sol）可及时出现在模型选择器中。社区讨论则集中在 **Windows/TUI 输入稳定性、Provider 配置与路由、Skills 命令执行能力**，同时出现了两次主分支无法编译的报告，发布前构建质量值得重点关注。

## 2. 版本发布

### v1.0.1：模型目录更新修复

- 修复 Agent 忙碌期间到达的模型目录更新被丢弃的问题。
- 新发布的模型（例如 **GPT-6.2 Sol**）能够及时出现在模型选择器中。
- 更新了 `lettre`、`anyhow`、`ev` 等依赖。

链接：[Release v1.0.1](https://github.com/1jehuang/jcode/releases/tag/v1.0.1)

## 3. 社区热点 Issues

> 过去 24 小时共更新 8 条 Issue；以下按技术影响与社区关注度整理。

1. **主分支无法编译：调用已回滚的 `agents_status::todos_updated`**
   - `origin/master` 在 `e8c92f145` 出现编译错误，原因是相关函数已随回滚提交被移除，但调用点仍然存在。
   - 修复 PR #2195 已关闭，说明问题目前已有明确修复路径。
   - 这是影响构建和 CI 的阻断问题，也是今日最值得关注的 Issue。

   链接：[Issue #2196](https://github.com/1jehuang/jcode/issues/2196)

2. **主分支再次无法编译：`ContinuousEvent::Caption` 匹配方式错误**
   - `ContinuousEvent::Caption` 已是结构体变体，但代码仍按元组变体使用，导致 `cargo build` 失败。
   - 该问题在另一个构建故障尚未完全收尾时出现，反映出当前主干分支稳定性不足。
   - Issue 刚创建，尚无评论和点赞，但具有直接阻断开发与测试的影响。

   链接：[Issue #2225](https://github.com/1jehuang/jcode/issues/2225)

3. **OpenAI-compatible Provider 缓存 API Key，无法刷新短期令牌**
   - API Key 在 daemon 启动时被缓存，轮换后的 Bearer Token 无法原地刷新，最终导致请求返回 401。
   - 提案是增加 `--api-key-command`，让 jcode 在需要时重新执行命令获取凭据。
   - 对云原生、短期凭据及多用户部署尤其重要；Issue 有 2 条评论，表明社区已有实际使用诉求。

   链接：[Issue #1220](https://github.com/1jehuang/jcode/issues/1220)

4. **Swarm Worker 无法按模型路由到不同 Provider**
   - daemon 以单一 Provider Profile 启动后，所有 Swarm Worker 都会继承该配置。
   - 即使 `swarm_model` 指向其他 Provider 的模型，请求仍可能被发送到错误的 Provider。
   - 这限制了多模型 Swarm 的实际可用性，也是 Agent 编排能力成熟度的关键问题。

   链接：[Issue #2219](https://github.com/1jehuang/jcode/issues/2219)

5. **Skills 支持可选 `command:` frontmatter**
   - 建议允许在 `SKILL.md` 中声明 `command:`，使 `/skill args` 直接执行本地 CLI，无需额外消耗一次模型调用。
   - 对封装 `fleet`、部署、状态查询等确定性 CLI 工作流尤其有价值。
   - 已由 PR #2224 实现，当前社区反馈较少，但需求明确且能显著降低延迟与 token 成本。

   链接：[Issue #2223](https://github.com/1jehuang/jcode/issues/2223)

6. **Windows 定时 OSC 11 主题查询向输入框泄漏反斜杠**
   - Windows 10、Windows Terminal 与 ConPTY 环境下，主题查询会触发输入框出现字面量 `\`。
   - 问题涉及 `crossterm`、终端颜色检测及 Windows 键盘/控制序列处理。
   - 它直接影响日常输入体验，并与今日多个 Windows TUI 修复主题形成集中反馈。

   链接：[Issue #2221](https://github.com/1jehuang/jcode/issues/2221)

7. **TUI 的 Go 语法高亮污染后续行并丢失 Tab 缩进**
   - Go 源码中的行注释被错误延续到后续代码行，同时 Tab 缩进显示异常。
   - Issue 提供了可复现源码和已验证的诊断结论，并关联 #2074。
   - 已有 2 条评论，说明问题不仅影响阅读，也会干扰 Agent 对代码结构的判断。

   链接：[Issue #2095](https://github.com/1jehuang/jcode/issues/2095)

8. **Jcode MCP 被收录至 MCP ServerList**
   - MCP ServerList 已添加 Jcode MCP，并希望项目在 README 中加入相关徽章。
   - 这是外部生态曝光与目录收录，有助于提升 MCP 集成工具的发现度。
   - 当前无评论，属于生态推广类需求，技术优先级低于稳定性问题。

   链接：[Issue #2226](https://github.com/1jehuang/jcode/issues/2226)

## 4. 重要 PR 进展

1. **修复 Windows 键盘协议写入与视口刷新**
   - PR #2186 修复 Windows/Herdr/ConPTY 下键盘协议协商与实际输入解码器不匹配的问题。
   - 同时处理视口变化后的重绘缺陷，可避免输入框出现 Kitty CSI-u 原始片段。
   - 与 Issue #2221 等 Windows 输入问题高度相关。

   链接：[PR #2186](https://github.com/1jehuang/jcode/pull/2186)

2. **Windows 多行粘贴按行重复提交修复**
   - PR #2193 处理 Windows 将粘贴内容逐字符发送、换行被识别为 `Ctrl+Enter` 的特殊行为。
   - 目标是让一次粘贴只提交一次，而不是按行触发多次提交。
   - 是近期 Windows TUI 稳定性修复链条中的关键一环。

   链接：[PR #2193](https://github.com/1jehuang/jcode/pull/2193)

3. **多行粘贴显示为编号块并记录展开历史**
   - PR #2202 将多行粘贴内容以编号块形式显示，同时记录用户展开历史。
   - 依赖 #2195 和 #2193，说明多行粘贴支持正在从底层输入处理向完整交互体验推进。

   链接：[PR #2202](https://github.com/1jehuang/jcode/pull/2202)

4. **Skills 增加本地命令执行入口**
   - PR #2224 实现 `SKILL.md` 的可选 `command:` 字段，使 `/skill args` 可直接运行 shell 命令。
   - 对无需模型推理的 CLI 封装技能，可降低模型调用次数并缩短响应时间。
   - 与 Issue #2223 直接对应。

   链接：[PR #2224](https://github.com/1jehuang/jcode/pull/2224)

5. **保留服务端报告的上下文窗口大小**
   - PR #2128 修复客户端刷新时用模型族估算值覆盖服务端真实上下文窗口的问题。
   - 例如服务端报告 196,608 tokens 后，可能被错误替换为 262,144。
   - 对上下文预算、提示压缩和长会话成本控制具有实际意义。

   链接：[PR #2128](https://github.com/1jehuang/jcode/pull/2128)

6. **ACP 工具调用标题展示具体意图**
   - PR #2136 将流式输入中的工具意图传入调用标题，并在执行及完成阶段保留。
   - 对缺失、空白或非字符串 intent 则继续使用通用标题。
   - 可改善 ACP 宿主中的工具调用可读性和审计体验。

   链接：[PR #2136](https://github.com/1jehuang/jcode/pull/2136)

7. **原生会话按来源正确标记**
   - PR #2218 修复会话选择器把模型 Provider 误当作会话 Origin 的问题。
   - 本地 Jcode 会话会明确标记为 Jcode，外部 transcript 则使用加载器提供的标签。
   - 同时提升了选择器缓存版本，以避免旧缓存继续显示错误信息。

   链接：[PR #2218](https://github.com/1jehuang/jcode/pull/2218)

8. **支持命名 OpenAI-compatible Profile 的 Responses API**
   - PR #2220 修复命名 Profile 中 `api = "responses"` 未被运行时读取、请求仍全部发往 `/chat/completions` 的问题。
   - 这是 Provider 协议兼容性与配置一致性的关键修复。
   - 对自定义网关和兼容 Responses API 的服务尤其重要。

   链接：[PR #2220](https://github.com/1jehuang/jcode/pull/2220)

9. **取消超时后被提升为后台进程组的任务**
   - PR #2114 让前台 shell 命令超时后复用现有进程组清理机制。
   - 修复只终止 shell、遗留子进程继续运行的问题。
   - 有助于避免孤儿进程、资源占用和命令副作用持续存在。

   链接：[PR #2114](https://github.com/1jehuang/jcode/pull/2114)

10. **Agent Definition、模型、effort 与工具策略**
   - PR #2041 将 Agent Definition 中的模型、effort 和工具配置应用为 operator policy。
   - 与 Agent 定义文件及 Swarm Spawn 系列 PR 协同推进。
   - 目标是提升多 Agent 编排的确定性、可治理性和可配置性。

   链接：[PR #2041](https://github.com/1jehuang/jcode/pull/2041)

## 5. 功能需求趋势

### Provider 与模型兼容性

- 支持实时模型目录、GPT-6.x 等新模型，以及不同 OpenAI-compatible API 协议。
- 需求正从“模型是否出现在列表中”深入到“配置是否真正生效、请求是否发往正确 Provider”。
- Swarm 多模型路由、API Key 动态刷新、Responses API 兼容性成为高频需求。

相关链接：[PR #2003](https://github.com/1jehuang/jcode/pull/2003) · [PR #2220](https://github.com/1jehuang/jcode/pull/2220) · [Issue #1220](https://github.com/1jehuang/jcode/issues/1220) · [Issue #2219](https://github.com/1jehuang/jcode/issues/2219)

### Skills 与自动化工作流

- 社区希望 `/skill` 既能承载模型驱动的技能，也能直接执行确定性 CLI 命令。
- 对参数替换、Shell 转义、本地执行边界和零模型调用成本的要求日益明确。
- 未来重点可能包括参数模板、权限控制、输出捕获和错误处理。

相关链接：[Issue #2223](https://github.com/1jehuang/jcode/issues/2223) · [PR #2224](https://github.com/1jehuang/jcode/pull/2224) · [PR #2034](https://github.com/1jehuang/jcode/pull/2034)

### TUI 与跨平台交互质量

- Windows/ConPTY 下的键盘协议、多行粘贴、主题查询和控制序列泄漏成为集中反馈点。
- 用户期待 jcode 在 Windows 上达到与 Unix 环境一致、可预测的输入体验。
- 语法高亮和缩进准确性也会直接影响代码类 Agent 的输出可信度。

相关链接：[PR #2186](https://github.com/1jehuang/jcode/pull/2186) · [PR #2193](https://github.com/1jehuang/jcode/pull/2193) · [Issue #2221](https://github.com/1jehuang/jcode/issues/2221) · [Issue #2095](https://github.com/1jehuang/jcode/issues/2095)

### Agent 编排与项目级扩展

- Agent Definition 文件、Swarm Spawn、模型与工具策略逐渐形成完整体系。
- 项目级 Hooks 需要独立配置模块、共享同步执行器和信任范围。
- 社区期待从“单 Agent 对话工具”演进为可治理、可扩展的自动化平台。

相关链接：[PR #2040](https://github.com/1jehuang/jcode/pull/2040) · [PR #2041](https://github.com/1jehuang/jcode/pull/2041) · [PR #2032](https://github.com/1jehuang/jcode/pull/2032) · [PR #2039](https://github.com/1jehuang/jcode/pull/2039)

## 6. 开发者关注点

- **主干分支可构建性是当前最高优先级。** 连续出现已回滚函数残留和事件变体匹配错误，说明合并、回滚与 CI 门禁之间仍有缺口。
- **Windows 体验需要系统性治理。** 键盘协议、粘贴事件、OSC 主题查询分别出现独立缺陷，根因都与终端输入/解码模型不一致有关。
- **Provider 配置必须“声明即生效”。** 用户不只关心配置文件能否解析，更关心 API 类型、凭据刷新、模型路由在运行时是否严格遵守配置。
- **需要降低无意义模型调用。** Skills 直接执行 CLI 的提案，反映出开发者对响应速度、token 成本和确定性输出的共同诉求。
- **Agent 输出与上下文信息应更可信。** 服务端上下文窗口不能被估算值覆盖，代码高亮不能破坏缩进，工具调用标题也应反映真实意图。
- **进程生命周期需要可靠清理。** shell 超时后遗留子进程是潜在安全和资源泄漏风险，进程组级取消应成为统一行为。
- **生态发现能力正在增强。** Jcode MCP 被外部目录收录，说明项目影响力正从 GitHub 社区扩展到更广泛的 MCP 生态。

</details>

<details>
<summary><strong>pi</strong> — <a href="https://github.com/earendil-works/pi">earendil-works/pi</a></summary>

# Pi 社区动态日报｜2026-11-19

## 今日速览

过去 24 小时无新版本发布，但社区讨论集中在**上下文压缩、模型路由与提示词缓存**：`pi-durable` 的压缩校准、虚拟模型上下文窗口、OpenAI 账户目录额度不一致等问题受到重点关注。  
同时，Windows 全屏渲染与鼠标行为仍是高频痛点；OpenAI Codex 的 zstd/SSE 兼容问题已被列为 **P0、修复进行中**。

## 版本发布

过去 24 小时无新 Release。

## 社区热点 Issues

1. **大 transcript 在全屏模式下每帧重渲染**  
   大型会话在 Windows 11、双逻辑核心环境下持续重绘，窗口 resize 还会重新输出完整 transcript，导致单核饱和。问题已由社区 agent 协助复现并确认即使禁用扩展也会发生。  
   [#9549](https://github.com/earendil-works/pi/issues/9549)

2. **ChatGPT 登录后 GPT-6.1 Sol 仍只显示 272K 上下文**  
   同一账户的实时模型目录给出 500K 默认窗口，但 Pi 登录后仅识别 272K，导致更早触发压缩、浪费可用上下文，是账户目录与客户端能力同步的重要问题。  
   [#11021](https://github.com/earendil-works/pi/issues/11021)

3. **Windows + Zellij 下滚轮滚动的是提示历史而非对话**  
   在 Windows → Alacritty → Zellij → Pi 链路中，鼠标滚轮操作了 editor prompt history；直接终端及 Linux + tmux 正常，说明问题集中在特定终端复用器组合。  
   [#9656](https://github.com/earendil-works/pi/issues/9656)

4. **`pi-durable` 需要永久删除会话**  
   社区提出 `harness.deleteConversation(id, ctx)` 一类能力，要求运行中先中止任务，并清理 entries、docs、inbox 与 scheduler state，直接回应长期运行场景的数据治理需求。  
   [#11026](https://github.com/earendil-works/pi/issues/11026)

5. **OpenAI Codex：zstd 压缩的 SSE 请求返回 HTTP 400**  
   自 11 月 9 日起，长会话偶发失败：相同请求体不压缩时可以通过，启用 zstd 后服务端返回 `400 Bad Request`。该问题已标记为 **P0、inprogress**，对 Codex 长会话稳定性影响较大。  
   [#12060](https://github.com/earendil-works/pi/issues/12060)

6. **`pi-durable` 应按实际上下文用量校准压缩阈值**  
   当前逻辑在服务端报告的上下文用量已超阈值、但字符估算仍低于 `keepRecentTokens` 时，可能跳过压缩；对中文等高 token 密度文本尤其明显。  
   [#10583](https://github.com/earendil-works/pi/issues/10583)

7. **虚拟模型会错误触发过早压缩**  
   虚拟模型无法解析出物理上下文窗口，`AgentSession._checkCompaction` 仍可能执行阈值判断，导致窗口未知时提前压缩，直接影响路由器和自定义模型扩展。  
   [#12035](https://github.com/earendil-works/pi/issues/12035)

8. **工具注册顺序变化可能破坏提示词缓存**  
   MCP 重连、`tool_search` 加载或扩展重新注册工具后，工具顺序会变化，进而改变请求前缀并降低 prompt cache 命中率。  
   [#11529](https://github.com/earendil-works/pi/issues/11529)

9. **嵌入式 SDK 长时间运行后内存持续增长**  
   `SessionManager` 在压缩后仍保留全部 entries，resume 还会加载完整文件；单 Node 进程承载多个长生命周期 `AgentSession` 时，内存只增不减。该问题已关闭但仍反映 SDK 生命周期设计痛点。  
   [#10642](https://github.com/earendil-works/pi/issues/10642)

10. **XDG Base Directory 规范支持**  
    Linux 下 Pi 将配置与状态直接堆在 home directory；社区希望默认使用 `$XDG_CONFIG_HOME`（回退至 `$HOME/.config`）。该议题评论最多、点赞最高，体现跨平台配置规范与用户数据管理仍是高关注事项。  
    [#2870](https://github.com/earendil-works/pi/issues/2870)

## 重要 PR 进展

> 过去 24 小时共更新 5 条 PR，以下按影响范围列出全部 5 条。

1. **交互式 `/reload` 刷新 scoped models**  
   修改 `enabledModels` 后无需重启 Pi 即可生效；若启动时显式传入 `--models`，仍保持其优先级。修复 scoped model 配置热更新问题。  
   [#12278](https://github.com/earendil-works/pi/pull/12278)

2. **外部 SIGTSTP 与 Ctrl+Z 行为统一**  
   `kill -TSTP <pi-pid>` 不再只挂起进程而遗漏终端恢复，现在会进入与 Ctrl+Z 相同的暂停/恢复路径。  
   [#12283](https://github.com/earendil-works/pi/pull/12283)

3. **树导航不再重复写入提示历史**  
   修复 `/tree` 选择器及扩展 `navigateTree` 使用 `renderInitialMessages()` 时把目标分支提示加入 Up-arrow history 的问题，减少历史记录污染。  
   [#12280](https://github.com/earendil-works/pi/pull/12280)

4. **支持 npm 12 的 `npm pack --json` 输出格式**  
   npm 12 将输出由单元素数组改为按包名索引的对象；PR 同时兼容 npm 10/11 数组格式与 npm 12 对象格式，恢复打包、安装检查和发布 dry run。  
   [#10680](https://github.com/earendil-works/pi/pull/10680)

5. **托管更新使用 launcher 自带 Node.js 做 smoke test**  
   托管安装中的系统 Node 可能在发行版升级后因 `libsimdjson` ABI 变化而无法启动；PR 改为使用 launcher 管理的 Node 验证更新流程。  
   [#12304](https://github.com/earendil-works/pi/pull/12304)

## 功能需求趋势

- **上下文与压缩准确性**  
  社区希望压缩阈值直接基于服务端实际 token 用量，并正确处理未知窗口、虚拟模型及不同语言文本的 token 密度差异。  
  [#10583](https://github.com/earendil-works/pi/issues/10583) · [#12035](https://github.com/earendil-works/pi/issues/12035) · [#12265](https://github.com/earendil-works/pi/issues/12265)

- **模型路由与提示词缓存稳定性**  
  重点包括虚拟模型配置、路由后模型覆盖、账户目录额度同步，以及工具顺序和 session ID 对缓存前缀稳定性的影响。  
  [#11021](https://github.com/earendil-works/pi/issues/11021) · [#11529](https://github.com/earendil-works/pi/issues/11529) · [#12265](https://github.com/earendil-works/pi/issues/12265) · [#12307](https://github.com/earendil-works/pi/issues/12307)

- **`pi-durable` 的生产级任务生命周期**  
   需求覆盖会话永久删除、取消握手与 deadline、恢复任务暂缓与选择性放行、SQLite 增量写入，以及持久化调度状态清理。  
   [#11026](https://github.com/earendil-works/pi/issues/11026) · [#12090](https://github.com/earendil-works/pi/issues/12090) · [#12306](https://github.com/earendil-works/pi/issues/12306) · [#12285](https://github.com/earendil-works/pi/issues/12285)

- **多 Provider 与新模型兼容**  
   社区持续跟进 OpenAI Responses 顶层 instructions、Codex 压缩传输、xAI 容量错误重试，以及 llama.cpp 图像输入能力识别。  
   [#8388](https://github.com/earendil-works/pi/issues/8388) · [#12060](https://github.com/earendil-works/pi/issues/12060) · [#12289](https://github.com/earendil-works/pi/issues/12289) · [#12282](https://github.com/earendil-works/pi/issues/12282)

- **TUI 性能与跨终端可靠性**  
   大 transcript 重绘、Windows/Zellij 滚轮行为、扩展修改编辑器后未立即 repaint、退出提示命令格式，均直接关系到日常交互体验。  
   [#9549](https://github.com/earendil-works/pi/issues/9549) · [#9656](https://github.com/earendil-works/pi/issues/9656) · [#12295](https://github.com/earendil-works/pi/issues/12295) · [#12237](https://github.com/earendil-works/pi/issues/12237)

- **扩展 API 可观察性与可控性**  
   社区希望提供 assistant message transformer、资源发现时序控制、自动重试决策 hook，以及 codemode 工具调用的透明展示。  
   [#11450](https://github.com/earendil-works/pi/issues/11450) · [#12297](https://github.com/earendil-works/pi/issues/12297) · [#11932](https://github.com/earendil-works/pi/issues/11932) · [#12176](https://github.com/earendil-works/pi/issues/12176)

## 开发者关注点

- **长会话不能持续“增重”**：内存占用、完整历史重载、过早压缩和缓存失效，是 SDK 与 durable harness 用户最集中的长期成本。
- **上下文窗口必须以服务端真实能力为准**：模型目录、虚拟路由模型、compaction override 与实际 token 预算之间需要更清晰的统一语义。
- **Provider 差异必须被兼容层吸收**：zstd/SSE、容量错误措辞、Responses API 字段及本地模型多模态元数据，都需要更稳健的适配与回归测试。
- **取消与恢复应具备事务语义**：任务需能保存检查点、等待确认、暂停恢复并最终彻底删除，避免“已取消但后台状态未收敛”。
- **TUI 需要可扩展且高效**：大 transcript 不应全量逐帧重绘；扩展驱动的文本修改也应立即触发重绘，同时保持工具与技能调用可观察。
- **安装环境不能受宿主 Node 漂移影响**：托管安装应隔离系统 Node 与共享库升级带来的 ABI 风险。

</details>

---
*本日报由 [Big Model Radar](https://github.com/96loveslife/big_model_radar) 自动生成。*
# AI CLI 工具社区动态日报 2026-11-13

> 生成时间: 2026-11-13 05:57 UTC | 覆盖工具: 8 个

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

**数据日期：2026-11-13**  
**覆盖工具：Claude Code、OpenAI Codex、Gemini CLI、GitHub Copilot CLI、Kimi Code CLI、OpenCode、jcode、pi**

---

## 1. 生态全景

当前 AI CLI 正从“单模型命令行助手”快速演化为具备工具调用、子代理、跨端会话、MCP 接入和自动化接口的**软件工程 Agent 平台**。社区需求重心明显由“增加模型和工具”转向**长会话稳定性、状态一致性、权限可解释性及上下文成本控制**，多个工具集中暴露了工具规模膨胀、压缩失效、子代理“假成功”和配置未继承等问题。

产品路线开始分化：Claude Code 与 Codex 强调企业权限、沙箱和开发生态；Gemini CLI、jcode 聚焦多代理编排；OpenCode 加速向桌面、移动端及视频生成平台演进；Copilot CLI 依托 GitHub/VS Code 生态；pi 则高度关注模型适配、缓存和终端底层可靠性。与此同时，跨端连续工作、ACP/IDE 集成和企业策略确定性已成为贯穿各项目的新一轮竞争焦点。

---

## 2. 各工具活跃度对比

> Issue、PR 数据按摘要中明确给出的“过去 24 小时更新”统计；未给出明确数量的项目标为“未披露”。

| 工具 | 今日 Issues | 今日 PR | Release 情况 | 活跃度判断 |
|---|---:|---:|---|---|
| **Claude Code** | 50 | 1 | **v2.1.323**，新增实验性 Code Mode、插件引擎版本约束 | 高热度，但版本回归集中 |
| **OpenAI Codex** | 未披露，至少 10 个热点 Issue | 至少 10 | **rust-v0.168.0**，另有 3 个 alpha 预发行版 | 高强度迭代，安全与会话治理并重 |
| **Gemini CLI** | 未披露，至少 10 个热点 Issue | 31 | 无新版本 | PR 活跃，重点修复代理可靠性 |
| **GitHub Copilot CLI** | 未披露，至少 10 个热点 Issue | 0 | **v1.0.111-0**，增强企业权限规则和远程会话创建 | Issue 热度较高，PR 输入偏低 |
| **Kimi Code CLI** | 0 | 1 | 无新版本 | 本窗口最安静，缺少有效社区信号 |
| **OpenCode** | 未披露，至少 10 个热点 Issue | 至少 10 | 无新版本 | v2、桌面端及多模态快速迭代 |
| **jcode** | 未披露，至少 10 个热点 Issue | 39 | 无新版本 | PR 数量最高，Swarm 编排集中推进 |
| **pi** | 未披露，至少 10 个热点 Issue | 至少 10 | 无新版本 | 运行时稳定性与模型适配迭代密集 |

### 活跃度解读

- **PR 开发活跃度最高**：jcode（39）、Gemini CLI（31）领先；Codex、OpenCode、pi 也有较高开发密度。
- **Issue 可见活跃度最高**：Claude Code 明确达到 50 条，且多个问题具有较高评论和点赞。
- **版本发布最积极**：Claude Code、Codex、Copilot CLI 有正式版本更新；Codex 还并行推进多个 alpha 版本。
- **社区信号最弱**：Kimi Code CLI 当日无更新 Issue、无 Release，唯一 PR 已关闭，难以据此判断实际路线。

---

## 3. 共同关注的功能方向

### 3.1 长会话稳定性与上下文成本

多个工具的问题已从“上下文窗口不够”转向“上下文管理机制本身不可靠”：

- **Claude Code**：Idle compaction 在长暂停后大量失败，导致完整上下文反复重写；stdio MCP 重试还会产生孤儿进程。
- **Gemini CLI**：长轮次超过 undici 默认 `bodyTimeout` 后可能重放整个请求，造成重复计费和重复执行。
- **Codex**：会话窗口访问、异步压缩、rollout trace 写入之间出现竞争与阻塞问题。
- **Copilot CLI**：长期交互会话 OOM；MCP 工具快照缓存持续增长；大型工具定义可占用约 260K tokens。
- **jcode**：压缩摘要跨 OpenAI/Claude 切换时丢失，Anthropic 缓存读取被重复计入上下文预算。
- **pi**：缓存预热失效、上下文窗口识别偏低、压缩期间错误触发新 turn。

**共同诉求**：可靠压缩、正确 token 计数、缓存前缀稳定、失败可重试，以及压缩后的上下文可跨模型迁移。

### 3.2 子代理可靠性与生命周期治理

“能够创建子代理”已不再是核心难点，状态和终止语义成为重点：

- **Gemini CLI**：达到 `MAX_TURNS` 仍被报告为成功；Generalist Agent 永久挂起；Browser Agent 配置未继承。
- **Copilot CLI**：子代理无法稳定继承 HTTP OAuth MCP 凭据；退出计划模式后同轮子代理缺少内置工具。
- **jcode**：缺少阻塞式等待、幂等停止、批量清理；root effort、模型参数和配置未正确传递到 worker。
- **OpenCode**：后台 shell、模型显示和会话状态之间存在不同步。
- **Claude Code**：远程连接断开后无法自动恢复，更新后跨端状态不一致。

**共同诉求**：明确的成功/失败/超时/取消状态，阻塞等待与幂等清理，配置和认证上下文可靠继承，并向外部客户端暴露实时状态。

### 3.3 权限显示必须与实际执行一致

这是本期最值得决策者关注的共性风险：

- **Codex**：Desktop 显示 “Full access”，实际却静默降级为 `workspace-write`。
- **Claude Code**：浏览器自动化被站点权限全面拦截；Code Mode 缺少清晰的权限边界和文档。
- **Gemini CLI**：高风险 Git、Shell 操作和临时文件需要更细粒度的控制；ACP 工具调用被纳入 Hooks 和权限策略。
- **Copilot CLI**：企业策略可以安装插件但无法真正启用，策略语义不完整。
- **OpenCode**：工具名规范化后可能发生静默冲突，影响注册和权限判断。
- **jcode**：swarm 声明支持 `model` 参数，但实际 schema 又将其过滤。

**共同诉求**：UI、配置、策略、运行时权限和工具 schema 必须共享同一事实源，避免“显示一种权限、执行另一种权限”。

### 3.4 MCP 认证、作用域与工具规模治理

MCP 已成为集成主线，但认证和生命周期仍不统一：

- **Codex**：保留 MCP 注册作用域，防止同名服务器跨环境串扰；SSH MCP 代理还破坏了 ControlMaster。
- **Copilot CLI**：Entra Broker 令牌无法跨进程缓存；Google Workspace OAuth issuer 不兼容；子代理 OAuth 继承不稳定。
- **Claude Code**：MCP 连接失败后子进程无法退出；插件 hooks 在 Cowork deprecated mode 中失效。
- **Gemini CLI**：工具过多可能触发 HTTP 400，需要按任务动态裁剪。
- **OpenCode**：工具名规范化冲突可能造成注册和权限错误。

**共同诉求**：MCP 凭据跨进程、跨代理可用；按注册作用域隔离；工具发现、去重、裁剪及上下文预算管理标准化。

### 3.5 跨端、IDE 与 ACP 会话连续性

- **Claude Code**：Remote Control 断线不重连，更新重启破坏会话。
- **Codex**：CLI 会话无法进入移动端，Chat、Work、Dot 和本地任务之间状态割裂。
- **Gemini CLI**：修复 Windows `/ide install` 路径问题，并让 ACP 工具调用接受统一 Hooks 和权限控制。
- **Copilot CLI**：ACP 模式无法发现 IDE MCP 服务，模型元数据与实际模型不一致。
- **OpenCode**：Windows ACP `session/new` 失败；通过 mDNS 支持桌面端与手机配对。
- **pi**：tmux/SSH 下 OSC 52 复制失效。

**共同诉求**：会话、模型、工具权限和连接状态应能在 CLI、IDE、移动端和远程客户端间一致延续。

### 3.6 可观测性与可解释性

- **Claude Code**：移除 `subagentStatusLine` 后无法查看子代理模型、effort、成本和上下文。
- **Gemini CLI**：子代理内部上下文和轨迹缺少访问入口，`/bug` 报告信息不足。
- **Codex**：trace 写入阻塞模型调度，需要改为后台 worker 和分片压缩存储。
- **Copilot CLI**：ACP 返回模型与实际运行模型不一致。
- **jcode**：Harness API 尚未转发 `swarm_status`。
- **OpenCode**：回合中止来源、实际模型和 UI 状态存在分离。

**共同诉求**：运行状态、终止原因、模型、权限、成本和轨迹必须可查询，并能通过 API 稳定导出。

---

## 4. 差异化定位分析

| 工具 | 功能侧重 | 目标用户 | 技术路线与竞争壁垒 |
|---|---|---|---|
| **Claude Code** | Code Mode、插件生态、远程控制、Desktop/移动协同 | 大型工程团队、企业开发者和 Claude 生态用户 | 强调插件版本治理、组织级开关及 Claude 原生多代理体验；当前短板是新版本回归和长会话管理 |
| **OpenAI Codex** | 沙箱安全、CLI/App/Cloud 协同、MCP、多供应商和可观测性 | 跨平台开发者、远程团队及安全敏感企业 | 通过 Rust 核心、权限 profile、网络沙箱和云端会话形成平台化路线；优势是安全与生态整合，挑战是 Windows 和跨界面状态一致性 |
| **Gemini CLI** | 多代理、浏览器代理、Hooks、ACP、工具与上下文效率 | Gemini 用户、Agent 开发者及多模态工作流用户 | 以 AgentRegistry、子代理和 Hooks 为核心；重点从“能力扩张”转向终止语义、配置继承、动态工具裁剪和安全控制 |
| **GitHub Copilot CLI** | GitHub/VS Code/ACP 集成、企业策略、BYOK 与插件 | GitHub 企业用户、IDE 重度用户和受管终端环境 | 依赖 GitHub 平台、企业策略和 IDE 生态；MCP 认证、ACP 发现及长期会话资源管理是主要短板 |
| **Kimi Code CLI** | 规则分层、上下文与执行优先级探索 | Kimi 用户及关注规则治理的开发者 | 当前路线信号较少；唯一值得观察的是项目规则、上下文规则和执行策略的分层设计 |
| **OpenCode** | 多 Provider、桌面端、浏览器、移动配对和视频生成 | 多模型用户、创作者、桌面工作流及多模态开发者 | Provider 兼容层和桌面工作台路线鲜明，视频能力扩张最快；主要风险是 v2 状态模型和跨平台碎片化 |
| **jcode** | Swarm 多代理、Harness API、TUI 编排和 Provider 能力发现 | 自动化编排者、Agent 平台集成者和多模型用户 | 以 Swarm 生命周期和外部 API 事件为核心，工程推进速度很快；当前重点是补齐状态、等待、停止和配置继承契约 |
| **pi** | 模型适配、缓存、扩展生命周期、终端与工具正确性 | 高级终端用户、扩展开发者和多 Provider 用户 | 强调可扩展运行时、细粒度工具语义及底层可靠性；优势是灵活，挑战是能力元数据和不同 Provider/终端环境的一致性 |

### 定位差异总结

- **平台型与生态型**：Codex、Claude Code 更重视企业治理和平台协同；Copilot CLI 深度绑定 GitHub/VS Code。
- **编排型**：Gemini CLI 与 jcode 的重心明显偏向子代理/Swarm，但前者偏向通用 Agent，后者更强调 Harness API 和外部集成。
- **工作台型**：OpenCode 的桌面浏览器、手机配对和视频生成使其更接近通用多模态工作平台。
- **运行时型**：pi 更像高度可编程的 Agent Runtime，重点解决模型能力、缓存、扩展和终端语义。
- **早期探索型**：Kimi Code CLI 当前公开社区信号不足，尚难判断其产品重心和成熟节奏。

---

## 5. 社区热度与成熟度

### 社区热度较高

1. **Claude Code**
   - 明确有 50 条 Issue 更新、1 条 PR 更新。
   - 长期错误 Issue 获 136 条评论；Remote Control 问题获 74 条评论、112 个赞。
   - 议题覆盖稳定性、UI、插件、移动端和企业控制，生态影响面最广。

2. **Codex**
   - 热点问题集中在 Cloud 环境发现、Windows 沙箱、权限映射、SSH/MCP 和跨端会话。
   - 多个 PR 直接进入安全边界、会话一致性和 trace 性能，工程质量信号较强。

3. **Gemini CLI**
   - 31 个 PR 更新，开发密度高。
   - 讨论几乎全部集中于 Agent/Subagent，说明产品重心非常明确。
   - 但“达到上限仍成功”“简单任务永久挂起”等 P1 问题表明新代理能力尚未完全成熟。

4. **Copilot CLI**
   - 企业认证、插件策略、ACP 和上下文超限问题受到关注。
   - 正式版本持续发布，但 24 小时内无 PR 更新；若持续如此，Issue 到修复的闭环速度值得关注。

5. **OpenCode**
   - 经典 UI 恢复需求获 47 个赞、44 条评论。
   - 视频 Provider、桌面浏览器、mDNS 手机配对同时推进，功能扩张速度突出。
   - v2 状态模型仍有较多回归，成熟度处于“快速迭代但尚未收敛”阶段。

### 快速迭代阶段

- **jcode**：39 个 PR，Swarm API、TUI、测试隔离和 Provider 兼容并行推进，迭代速度最快之一，但生命周期和跨模型上下文仍有明显缺口。
- **pi**：模型适配、缓存、终端协议和扩展生命周期修复密集，底层质量提升明显，但不同 Provider 和终端环境下的能力一致性仍是长期挑战。
- **Codex / Gemini CLI**：均在快速扩大功能面，同时修补平台级基础问题。

### 相对低活跃或信号不足

- **Kimi Code CLI**：当日无 Release、无更新 Issue，唯一规则系统 PR 已关闭。
- 这只能说明本次 24 小时窗口信号弱，不能直接等同于项目整体停滞。

### 成熟度判断

| 成熟度层级 | 工具 | 判断 |
|---|---|---|
| **相对成熟，但回归压力较大** | Claude Code、Codex | 功能广、企业与生态面完整，但状态、权限和跨端一致性尚未收敛 |
| **快速成长中** | Gemini CLI、OpenCode、jcode | Agent、桌面、多模态或 Swarm 路线清晰，工程投入高 |
| **生态整合型、基础问题较多** | Copilot CLI | GitHub/IDE 集成优势明显，但 MCP、ACP、OOM 和策略执行需加强 |
| **底层能力持续打磨** | pi | 扩展灵活、运行时意识强，但 Provider/终端兼容矩阵复杂 |
| **公开信号不足** | Kimi Code CLI | 当前窗口无法形成可靠成熟度判断 |

---

## 6. 值得关注的趋势信号

### 6.1 “工具调用能力”正从卖点变成成本和可靠性瓶颈

工具越多，模型选择负担、静态上下文占用、注册冲突和 400/OOM 风险越高。Codex、Gemini CLI、Copilot CLI、OpenCode 均出现相关问题。

**参考价值**：下一阶段竞争重点不是简单增加 MCP 数量，而是建立**工具发现、裁剪、去重、作用域隔离、版本兼容和预算控制**的完整工具治理层。

### 6.2 Agent 的核心 KPI 正从“能否执行”转向“能否正确结束”

Gemini CLI 的假成功、OpenCode 的回合中止原因丢失、jcode 的停止语义不统一、Claude Code 的断线不恢复，都指向同一问题：Agent 需要可靠的状态机，而不只是模型调用能力。

**参考价值**：评估 CLI 时应重点检查：成功、超时、取消、异常、限流和用户中断是否有明确且可区分的状态；这些状态是否能通过 UI、日志和 API 一致导出。

### 6.3 权限安全正在成为产品可信度的核心

Codex 的 “Full access” 静默降级是典型的高风险缺陷。它不仅影响体验，还可能使用户误判数据隔离状态。

**参考价值**：企业选型时应要求权限配置经过**端到端验证**：UI 展示、策略解析、运行时 profile、工具注册和审计日志必须一致，最好提供可复现的权限证明或 dry-run。

### 6.4 长会话成本管理将成为 Agent 平台的核心差异化能力

压缩重写、缓存失效、trace 同步写入、工具缓存增长和 OOM 都会直接推高延迟与费用。

**参考价值**：评估工具时应同时考察四项指标：有效上下文利用率、压缩成功率、缓存命中率、后台任务额外开销。只比较模型单价已不足以判断真实成本。

### 6.5 子代理生态正在从编排概念进入工程治理阶段

Gemini CLI、jcode、Copilot CLI、Claude Code 的问题共同说明：子代理需要配置继承、认证继承、预算限制、状态事件、超时取消、幂等清理及轨迹审计。

**参考价值**：多代理能力不应只按“并行度”评估，更应按**可观察性、失败隔离和资源可回收性**评估。大量子代理同时运行也可能带来不可控成本。

### 6.6 CLI、IDE、桌面端、移动端和云端正在形成统一会话层

Claude Remote Control、Codex Cloud/App、Copilot ACP、OpenCode mDNS、jcode Harness API 都在补齐跨端能力。

**参考价值**：未来竞争单位可能不再只是单个 CLI，而是覆盖开发任务全生命周期的**会话操作系统**。会话迁移、模型状态、权限状态和凭据能否连续传递，将比单个命令功能更重要。

### 6.7 模型与 Provider 的动态能力发现将替代名称启发式

jcode 和 pi 都暴露了仅靠模型名称、静态目录或本地配置判断能力的问题；Codex 已开始支持模型供应商浏览，OpenCode 则持续扩展 Provider 兼容层。

**参考价值**：自建 AI CLI 时，不应维护硬编码模型能力表，应结合服务端目录、能力响应和运行时探测，建立统一的模型能力注册表。

### 6.8 企业治理重点从“能否安装”转向“是否真正生效”

Copilot CLI 的插件启用策略、Claude Code 的组织级 Code Mode 开关和插件引擎约束都指向同一趋势。

**参考价值**：企业策略必须具备**可验证执行语义**：安装、启用、继承、作用域、优先级、失败回退和审计都应明确，避免配置存在但运行时无效。

### 6.9 跨平台边缘问题正在成为质量分水岭

Windows 沙箱 ACL、路径空格、盘符根目录、Wayland、tmux、AppX/MXC 注册等问题，单项看似小，但会直接阻断企业用户。

**参考价值**：选型时应查看真实的 Windows、Wayland、SSH、tmux、容器和代理环境支持矩阵；仅以 macOS/Linux 主路径通过作为“跨平台支持”依据风险较高。

---

## 决策建议

- **优先关注 Claude Code、Codex、Copilot CLI**：适合看重企业治理、IDE/云端协同和成熟生态的团队，但上线前应重点验证权限一致性、会话连续性和长任务稳定性。
- **优先关注 Gemini CLI、jcode、OpenCode**：适合需要多代理、实验性工作流、桌面多模态或外部编排能力的团队；应建立更严格的终止状态、资源回收和兼容性测试。
- **适合高度定制场景：pi**：扩展和底层控制灵活，但需要自行承担 Provider、缓存和终端兼容治理成本。
- **Kimi Code CLI**：本窗口缺少足够社区和发布信号，建议等待更多版本、Issue 和路线说明后再做主流程采用判断。

总体而言，行业正在从“模型能力竞赛”进入“**Agent 运行时质量竞赛**”。未来决定工具竞争力的，不只是模型效果，而是权限是否可信、状态是否一致、上下文是否可控，以及失败后能否安全恢复。

---

## 各工具详细报告

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills 社区热点

> 数据来源: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills 社区热点报告

> 数据截止：2026-11-13  
> 注：所给 PR 数据的评论数显示为 `undefined`、点赞数为 0，因此无法据此严格计算“热门排名”。以下结合 PR 状态、Issue 热度、讨论集中度及持续维护情况综合判断。

## 1. 热门 Skills 排行

| 排名 | Skill / PR | 功能与社区热点 | 当前状态 |
|---|---|---|---|
| 1 | [mcp-builder 兼容性修复 #1742](https://github.com/anthropics/skills/pull/1742) | 更新 MCP 2.x 的 `streamable_http_client` 导入方式，并支持自定义 HTTP Header。热点是 SDK 升级后的连接兼容性，直接影响 MCP 服务接入。 | Open |
| 2 | [skill-creator：评估隔离与跨平台修复 #1298](https://github.com/anthropics/skills/pull/1298) | 修复并发触发评估串扰、Windows `select()` 异常及运行时失败误判等问题。相关 Issue 显示默认 10 个 worker 时触发率可能接近 0，是 Skill 创建质量的直接瓶颈。 | Open |
| 3 | [skill-creator：YAML Frontmatter 解析 #1997](https://github.com/anthropics/skills/pull/1997) | 正确解析 YAML 标量、引号与转义，避免评估和描述优化阶段拿到错误元数据。体现了 Skill 描述工程、触发准确率和 token 效率的持续优化。 | Open |
| 4 | [skill-creator：直接执行打包脚本 #1681](https://github.com/anthropics/skills/pull/1681) | 修复 `package_skill.py` 的模块导入错误，并更新使用路径。降低 Skill 开发、验证和分发门槛。 | Open |
| 5 | [webapp-testing：移除 `shell=True` #1980](https://github.com/anthropics/skills/pull/1980) | 避免测试服务器命令经由系统 Shell 执行造成命令注入；同时保留链式命令支持。安全修复类 PR 成为文档与测试 Skills 的重要热点。 | Open |
| 6 | [docx：修订接受与超时验证 #1792](https://github.com/anthropics/skills/pull/1792) | LibreOffice 超时时不再误报成功，并在输出 DOCX 中检查是否仍存在修订标记。社区关注点从“能生成文件”转向“结果是否真实正确”。 | Open |
| 7 | [xlsx：外部链接风险检测 #2019](https://github.com/anthropics/skills/pull/2019) | 修复工作表级 `defined_names`、别名和间接外部引用漏检，避免潜在风险公式被错误放行。适用于财务、审计和合规型表格工作流。 | Open |
| 8 | [claude-api：暂停轮次恢复指南 #1950](https://github.com/anthropics/skills/pull/1950) | 对齐 Python SDK 1.1.0 的自动恢复行为，移除已经过时的外层重启计数建议。热点是长任务、暂停/恢复和 SDK 文档时效性。 | Open |

### 补充关注

- [algorithmic-art：修复环形坐标 #1977](https://github.com/anthropics/skills/pull/1977)
- [webapp-testing：表单元素发现 #1976](https://github.com/anthropics/skills/pull/1976)
- [pptx：缩略图参数校验 #1975](https://github.com/anthropics/skills/pull/1975)
- [document-typography：文档排版质检 #514](https://github.com/anthropics/skills/pull/514)

其中，后三个 PR 均为先有明确 Issue、再提交修复，显示出社区正在形成“复现问题—补测试—提修复”的成熟贡献模式。

---

## 2. 社区需求趋势

### 2.1 组织级共享与资产治理

最突出的需求是让 Skills 成为可管理、可审计的组织资产：

- [支持组织范围共享 #228](https://github.com/anthropics/skills/issues/228) 是高热度功能请求，用户希望避免通过 Slack、Teams 手工传递 `.skill` 文件。
- [社区 Skill 使用 `anthropic/` 命名空间造成信任边界风险 #492](https://github.com/anthropics/skills/issues/492) 获得最高讨论量，反映用户对官方身份、来源认证和权限边界的强烈关切。
- [document-skills 与 example-skills 内容重复 #189](https://github.com/anthropics/skills/issues/189) 指向插件内容去重、版本同步和上下文窗口污染问题。
- [文档 Skills 的快照与同步状态说明 #2108](https://github.com/anthropics/skills/pull/2108) 反映用户需要明确区分仓库快照、同步副本和实际运行版本。

### 2.2 Skill 创建、触发评估与描述优化

社区对 `skill-creator` 的关注远高于一般创作工具，核心诉求是让 Skill **可靠触发、准确评测并可重复打包**：

- [`run_eval.py` 在 `claude -p` 下触发率为 0 #556](https://github.com/anthropics/skills/issues/556)
- [多 worker 串扰导致系统性假阴性 #1352](https://github.com/anthropics/skills/issues/1352)
- [skill-creator 应转向可执行的最佳实践 #202](https://github.com/anthropics/skills/issues/202)
- [theme-factory 描述缺少使用时机 #2064](https://github.com/anthropics/skills/issues/2064)

这表明社区需求已不只是“生成一个 `SKILL.md`”，而是形成完整的：

**描述生成 → 触发评测 → 失败归因 → 描述优化 → 打包分发** 工具链。

### 2.3 质量门禁与可验证交付

[Reasoning Quality Gate Pipeline #1385](https://github.com/anthropics/skills/issues/1388) 提案指向三类通用能力：

1. 任务前校准；
2. 对抗式审查；
3. 交付前验证。

类似需求也出现在 Web 测试、DOCX、XLSX 和 PPTX Skills 中。社区希望 Agent 不只“执行流程”，还能够：

- 自动验证产物；
- 对失败给出明确错误；
- 检查残留状态、格式和安全风险；
- 将测试、审计和交付证据纳入 Skill。

### 2.4 文档生成走向专业排版与可访问性

社区已经不满足于内容生成，而更关注输出质量：

- [文档排版质量控制 #514](https://github.com/anthropics/skills/pull/514) 聚焦孤行、寡行、编号错位等 AI 文档常见问题。
- [DOCX 孤立批注检测 #1734](https://github.com/anthropics/skills/pull/1734)
- [DOCX 合并 Run 后命名空间丢失 #2018](https://github.com/anthropics/skills/issues/2018)
- [文档 Skills 重复占用上下文 #189](https://github.com/anthropics/skills/issues/189)

总体方向是：**生成 → 排版 → 校验 → 发布**的一体化文档工程。

### 2.5 垂直场景与专业执行器

社区持续提出面向具体行业的 Skills：

- [Notion 规格转实现与定量履历审计 #1245](https://github.com/anthropics/skills/pull/1245)
- [智能合约静态审计与存证 #1771](https://github.com/anthropics/skills/pull/1771)
- [SCNet HPC 集群与 Slurm 工作流 #1615](https://github.com/anthropics/skills/pull/1615)
- [Pyxel 复古游戏开发 #525](https://github.com/anthropics/skills/pull/525)
- [Markdown 转视频与语音 #1703](https://github.com/anthropics/skills/pull/1703)

这些提案显示社区希望 Skills 不只是通用提示词，而是能封装**行业工具链、验证命令、平台约束和领域检查表**的专业执行器。

---

## 3. 高潜力待合并 Skills

> 严格来说，所给 PR 的评论数均为 `undefined`，因此无法仅依据评论活跃度判断。以下按业务价值、问题明确度、可复用性和近期维护情况筛选。

### 第一梯队：基础设施级修复

1. [mcp-builder：支持 MCP 2.x 与自定义 Header #1742](https://github.com/anthropics/skills/pull/1742)  
   **潜力：** 高。直接修复 SDK 升级导致的兼容性阻塞，适用范围广，且有 Issue #1668 作为明确需求依据。

2. [skill-creator：隔离触发评估并处理跨平台错误 #1298](https://github.com/anthropics/skills/pull/1298)  
   **潜力：** 高。直接解决评估结果失真、Windows 失败和运行时错误误判，影响所有 Skill 的质量优化流程。

3. [skill-creator：正确解析 YAML Frontmatter #1997](https://github.com/anthropics/skills/pull/1997)  
   **潜力：** 高。修复范围小但位于关键元数据入口，能够避免描述、评测和优化链路使用错误输入。

4. [skill-creator：支持直接执行 `package_skill.py` #1681](https://github.com/anthropics/skills/pull/1681)  
   **潜力：** 高。改善安装与发布体验，开发和 CI 场景均可直接受益。

### 第二梯队：安全与结果可信

5. [webapp-testing：避免 `shell=True` #1980](https://github.com/anthropics/skills/pull/1980)  
   **潜力：** 很高。命令注入属于明确安全风险，修复具有较高合入优先级。

6. [docx：超时视为错误并验证修订状态 #1792](https://github.com/anthropics/skills/pull/1792)  
   **潜力：** 高。解决“失败却报告成功”的可信度问题，对正式文档交付尤其重要。

7. [xlsx：检测工作表级外部链接 #2019](https://github.com/anthropics/skills/pull/2019)  
   **潜力：** 高。可减少财务和合规表格中的风险漏检，覆盖常见间接引用场景。

### 第三梯队：新增专业能力

8. [Notion Spec-to-Implementation 与 Resume Auditor #1245](https://github.com/anthropics/skills/pull/1245)  
   **潜力：** 中高。将产品规格拆成可执行任务、验收标准和进度审计，切中需求到交付的普遍痛点；但需关注对 Notion API 和外部服务的依赖。

9. [Pyxel 复古游戏开发 #525](https://github.com/anthropics/skills/pull/525)  
   **潜力：** 中高。覆盖实现、无头输入、帧检查和状态验证，验证闭环较完整，适合作为游戏开发垂直 Skill 落地。

10. [SCNet HPC #1615](https://github.com/anthropics/skills/pull/1615)  
    **潜力：** 中高。对科研和高性能计算用户价值明显，尤其适合封装 SSH、Slurm、模块和加速器环境等复杂操作。

---

## 4. Skills 生态洞察

**当前社区最集中的诉求，是把 Skills 从“可用提示词集合”升级为“可信、可评测、可验证、可治理的企业级执行资产”——既要稳定触发和准确交付，也要解决组织共享、官方身份、版本同步、安全边界与上下文成本问题。**

---

# Claude Code 社区动态日报

**日期：2026-11-13**  
**数据范围：github.com/anthropics/claude-code 最近 24 小时更新**

## 1. 今日速览

Claude Code 发布 **v2.1.323**，核心变化是实验性 **Code Mode**——由 Claude 生成 JavaScript 来调用工具；同时扩展插件的 Claude Code 引擎版本约束。社区当前主要围绕**版本回归、桌面端重构、Remote Control 稳定性、上下文压缩、插件执行模式及用量控制**展开。

过去 24 小时共有 **50 条 Issue 更新、1 条 PR 更新**。热度最高的报告集中于长期稳定性、跨端会话一致性和新版本引入的回归问题。

---

## 2. 版本发布

### v2.1.323

主要更新：

- 新增实验性、可选启用的 **Code Mode**
  - Claude 通过编写 JavaScript 调用工具。
  - 可在组织级别开启或关闭。
  - 官方文档入口在 Issue 中被报告为 **404**。
- `plugin.json` 新增 `engines["claude-code"]`
  - 插件可声明自身适配的 Claude Code 版本范围。
  - 发布说明显示，范围不兼容的插件将受到限制。
- 移除了 `subagentStatusLine` 配置
  - 子代理状态行统一使用默认样式。
  - 社区反馈该配置被移除后，子代理的上下文、成本、模型及 effort 信息不再直接可见。

发布链接：  
- Release：https://github.com/anthropics/claude-code/releases/tag/v2.1.323  
- Code Mode 文档：https://code.claude.com/docs/en/code-mode

---

## 3. 社区热点 Issues

### 1. 长期使用中的重复性错误持续数月未解决

[#69044](https://github.com/anthropics/claude-code/issues/69044)

该用户以结构化方式记录数月日常使用中的重复错误和失败模式，并非单点故障。Issue 获得 **136 条评论**，是本轮最活跃讨论，反映用户对核心流程稳定性和问题闭环的强烈期待。

### 2. Remote Control 断线后无法自动重连

[#34255](https://github.com/anthropics/claude-code/issues/34255)

macOS/iOS Remote Control 在连接静默断开后不会自动恢复。Issue 有 **74 条评论、112 个点赞**，说明该问题直接影响远程运行、无人值守和移动端查看等核心使用场景。

### 3. `fizzy_lake` 桌面端重构破坏暗色主题

[#104695](https://github.com/anthropics/claude-code/issues/104695)

Windows Desktop 3.6556.2 引入的 `fizzy_lake` 设计实验被指导致高亮刺眼、冷色调、字体和聊天渲染退化、侧栏反色及启动变慢。该 Issue 虽被标记为 `invalid`，但已有 **21 条评论、37 个点赞**，反映大量用户对新版视觉设计的负面反馈。

### 4. Markdown 粗体在拉丁字符和西里尔字符下不可见

[#104529](https://github.com/anthropics/claude-code/issues/104529)

新版设计下，粗体在拉丁字符中几乎不可见、在西里尔字符中完全不可见，内联代码也会变灰；重新登录或移除实验标记无法恢复旧样式。Issue 获得 **17 条评论、10 个点赞**，属于可访问性与国际化兼容性问题。

### 5. Cowork 云会话进入“deprecated mode”，插件钩子失效

[#107077](https://github.com/anthropics/claude-code/issues/107077)

同一账号、设备、插件和日期下，Cowork 云会话可能进入仅工具服务器模式，导致插件 hooks 和 slash commands 完全不执行，并出现额外授权提示。Issue 有 **10 条评论**，关键点在于行为具有稳定复现条件，而非随机网络故障。

### 6. Claude in Chrome 全站被站点权限拦截

[#92370](https://github.com/anthropics/claude-code/issues/92370)

`claude-in-chrome` 的所有 `navigate` 调用均被站点权限阻止，包括 `example.com` 等中性测试站点，且完整重装后问题仍存在。该报告将浏览器自动化问题定位到权限状态持久化或初始化逻辑。

### 7. Windows Desktop 自动更新在工作时间强制重启

[#104422](https://github.com/anthropics/claude-code/issues/104422)

Windows 11 MSIX 版在发布新版本后会自动关闭并重启应用，即使系统并未报告空闲。用户希望能够选择安装时机，并在更新后继续收到通知。该 Issue 有 **5 条评论、2 个点赞**，属于明确的体验改进需求。

### 8. Idle compaction 在长暂停后大量失效

[#108789](https://github.com/anthropics/claude-code/issues/108789)

用户统计称，在上下文超过 200k 的 615 次长暂停中，idle compaction 仅成功 **104 次**，其余 **511 次**在返回时重写完整上下文。问题可能同时涉及 governor 驱逐和接近限额时的拒绝，关系到长会话性能、费用与上下文连续性。

### 9. stdio MCP 连接重试导致孤儿进程泄漏

[#95821](https://github.com/anthropics/claude-code/issues/95821)

当 stdio MCP 服务因数据库凭据错误等原因连接失败时，底层子进程不会退出，而是持续进行内部连接池重试；Claude Code 在 30 秒后放弃等待。该问题可能造成长期会话中的进程堆积与资源泄漏。

### 10. v2.1.323 移除 `subagentStatusLine`，缺少替代方案

[#109446](https://github.com/anthropics/claude-code/issues/109446)

新版静默移除 `subagentStatusLine`，没有提供替代配置或迁移路径，导致每个子代理的上下文、成本、模型和 effort 不再可见。该 Issue 在发布当天即出现，且带有 `regression` 标签，是本版本最直接的新回归之一。

---

## 4. 重要 PR 进展

过去 24 小时仅检索到 **1 条更新的 PR**，因此无法列出 10 个不同 PR。以下为本轮唯一重要进展。

### `fix(hookify)`：解除包导入对插件安装目录名的依赖

[#81672](https://github.com/anthropics/claude-code/pull/81672)

该修复解决 `hookify` 插件入口将插件父目录加入 `sys.path`、并依赖安装目录必须恰好名为 `hookify` 的问题。修复目标包括：

- 支持 marketplace 安装等非标准目录布局。
- 避免目录重命名后插件导入失败。
- 提升插件包导入的稳定性和可移植性。
- 同时关联修复 #69665、#81448。

当前 PR 仍为 **OPEN**，尚无评论和点赞数据。

---

## 5. 功能需求趋势

### 5.1 插件与工具执行能力

- Code Mode 为 Claude 自主编排工具调用提供了新路径。
- 社区同时要求插件必须支持：
  - 明确声明 Claude Code 版本要求。
  - 在 marketplace 等不同安装布局下稳定导入。
  - 在 Cowork 云会话中可靠执行 hooks 和 slash commands。
  - 显示子代理模型、effort、成本及上下文状态。

### 5.2 远程控制与跨端会话

Remote Control 的重点需求集中在：

- 断线自动重连。
- 静默更新后恢复远程连接。
- 主机与查看端保持相同 effort、模型及会话状态。
- 提升无人值守场景的可靠性。

### 5.3 上下文与长会话管理

Idle compaction 是本轮明显增长的需求方向：

- 压缩跳过或失败后自动重试。
- 防止 governor 驱逐上下文。
- 避免接近限额时反复重写完整上下文。
- 降低长会话的 token 消耗和响应延迟。

### 5.4 Desktop 更新控制与 UI 稳定性

用户希望：

- 自动更新支持延迟安装或由用户确认。
- 更新后保留 Remote Control 会话。
- 修复暗色主题、字体、颜色和聊天渲染回归。
- 改善 Windows 启动速度与 macOS CPU/温度表现。

### 5.5 扩展性与企业控制

- Desktop Code 会话希望支持自定义 `ANTHROPIC_BASE_URL` 网关，同时保留 claude.ai 登录。
- 组织管理员需要集中控制 Code Mode 的启用状态。
- 插件需要标准化引擎版本兼容策略。

### 5.6 可访问性与移动端交互

移动端缺少接受 prompt suggestion 的自然操作方式；桌面端则存在粗体不可见、颜色对比不足等可访问性问题，表明 UI 改造仍需加强键盘操作和国际化支持。

---

## 6. 开发者关注点

1. **长会话稳定性仍是首要痛点**  
   空闲压缩失效、上下文重写、MCP 子进程泄漏等问题会同时影响费用、延迟和资源占用。

2. **跨端状态一致性不足**  
   Remote Control 的断线、更新后丢失连接及 effort 显示不一致，暴露出桌面端状态同步机制的薄弱点。

3. **新版本回归需要更严格的发布控制**  
   `fizzy_lake` UI、`subagentStatusLine`、Windows URL 识别以及插件消息闪烁等问题，集中在近期版本发布后集中暴露。

4. **插件生态正进入“版本化与兼容性治理”阶段**  
   `engines["claude-code"]` 是合理方向，但 marketplace 安装、插件导入路径和 Cowork 执行模式仍需统一治理。

5. **自动更新策略需要以用户工作流为中心**  
   用户并不反对更新本身，而是反对更新在任务执行中强制重启；更合理的方向是预约安装、后台更新及重启前提示。

6. **用量与安全策略需要更好的可解释性**  
   用户同时报告限额恢复后旧会话自动续跑、恢复后立即触发 100% 用量，以及网络安全任务中的误拦截，体现出配额生命周期和 safeguard 判定仍不够透明。

7. **Code Mode 仍处于早期阶段**  
   该功能潜力明确，但文档 404、版本回归和组织级开关说明不足。对生产团队而言，建议先验证权限边界、可观测性及插件兼容性，再逐步启用。

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex 社区动态日报

**日期：2026-11-13**

## 今日速览

今日社区重点集中在 **Windows 沙箱与权限稳定性、CLI/App 会话一致性，以及 MCP 与远程连接兼容性**。其中，Codex Cloud 环境发现、MCP 作用域隔离、Linux 网络沙箱限制和 rollout trace 压缩等 PR 值得开发者重点跟踪；同时，多起 Issue 暴露出 Windows 安装、权限配置、模型行为和多代理成本控制方面的明显痛点。

## 版本发布

### [rust-v0.168.0](https://github.com/openai/codex/releases/tag/rust-v0.168.0)

主要更新：

- 在 **Sessions → Model providers** 中提供模型供应商浏览入口，并允许为新会话选择默认供应商。
- 新增 `features.tui_workspace`：支持在主聊天旁显示侧边会话，可拖动分隔线调整窗格大小，并使用 `leader z` 放大当前窗格。
- 同一时段还发布了 `0.170.0-alpha.3`、`0.170.0-alpha.4` 和 `0.171.0-alpha.1` 预发行版本，主要用于后续功能验证。

## 社区热点 Issues

### 1. [Codex Cloud 无法发现当前 Cloud 环境](https://github.com/openai/codex/issues/50182)

- **问题**：CLI 和桌面端使用同一账号、令牌刷新正常，但 Codex Cloud 仍无法发现当前可用环境。
- **重要性**：影响 CLI、桌面端与云端任务之间的环境发现和远程工作流，是今日讨论最充分的 Issue。
- **社区反应**：获得 **30 条评论、23 个赞**，是本时段最热门的问题。

### 2. [Desktop SSH 回归：MCP 代理关闭 ControlMaster，破坏密码/OTP 主机连接](https://github.com/openai/codex/issues/54640)

- **问题**：通过 Desktop SSH 使用 MCP 时，代理配置关闭了 SSH ControlMaster，导致依赖密码或 OTP 的远程主机无法稳定连接。
- **重要性**：直接影响远程开发和 MCP 集成，也会影响使用 SSH 密钥代理、跳板机及企业网络的用户。
- **社区反应**：**9 条评论、3 个赞**，已有较明确的兼容性反馈。

### 3. [将 codex-cli 会话接入移动端 App](https://github.com/openai/codex/issues/38963)

- **问题**：希望 CLI 中创建的会话能够在 Codex 移动端继续查看或操作。
- **重要性**：体现用户对跨设备连续工作流的需求，适合与远程会话、任务交接和云端同步能力结合。
- **社区反应**：**9 条评论、16 个赞**，关注度明显高于评论数。

### 4. [Windows 沙箱初始化失败：SYSTEM 无权写入 `.sandbox-bin`](https://github.com/openai/codex/issues/59038)

- **问题**：Windows 沙箱初始化时，系统账户无法对 `.sandbox-bin` 执行 `WRITE_DAC`，导致启动失败。
- **重要性**：属于 Windows 环境的基础运行阻断问题，影响权限模型和沙箱可用性。
- **社区反应**：**6 条评论、0 个赞**，问题获得持续诊断关注，但尚未形成广泛认同。

### 5. [Windows “Full access” 被静默降级为 workspace-write](https://github.com/openai/codex/issues/56663)

- **问题**：Desktop 选择 “Full access” 后发送本地未定义的 `permission_profile: "managed"`，最终静默回退到 `workspace-write`。
- **重要性**：涉及权限语义一致性和用户授权预期；若界面显示与实际权限不一致，可能带来安全风险。
- **社区反应**：**5 条评论、0 个赞**，技术细节明确，属于高优先级修复型问题。

### 6. [macOS：托管 daemon 报告 ready，但更新后账户读取失败](https://github.com/openai/codex/issues/60777)

- **问题**：更新后 managed app-server 虽显示 ready，账户读取却失败；后续使用相同官方二进制可恢复。
- **重要性**：反映 CLI、Homebrew 安装和托管 app-server 版本之间的生命周期或升级一致性问题。
- **社区反应**：**4 条评论**，目前已关闭，说明该问题可能具备可复现的临时恢复路径。

### 7. [Sites 发布失败：缺少 account user id](https://github.com/openai/codex/issues/36227)

- **问题**：站点本身可以编译，但所有发布操作均因 `missing_account_user_id` 被拒绝；退出登录和重启应用无效。
- **重要性**：阻断 Sites 发布闭环，属于账户身份解析与发布链路之间的集成问题。
- **社区反应**：**3 条评论、0 个赞**，关注规模不大，但直接影响功能可用性。

### 8. [macOS Dot 跟随本地任务时，在新一轮开始前卡住](https://github.com/openai/codex/issues/61258)

- **问题**：ChatGPT Dot 读取现有本地 Codex 任务历史后，后续任务在开始新一轮交互前持续挂起。
- **重要性**：涉及 Chat、Work、本地任务和 Dot 之间的跨界面协作，是当日新增且值得观察的新问题。
- **社区反应**：**2 条评论**，已有用户开始复现并补充环境信息。

### 9. [自定义技能被伪造的工具失败提前终止](https://github.com/openai/codex/issues/61252)

- **问题**：在 Chat 和 Work、GPT-6 Astra、Extra high 推理强度下，原本可执行的自定义技能被错误判定为工具失败并提前终止。
- **重要性**：涉及模型行为、工具错误解释和技能执行可靠性，可能造成任务未完成即结束。
- **社区反应**：**2 条评论**，问题发生于 11 月 11–13 日，具有连续复现特征。

### 10. [Windows 注册 Core 工具启动失败，MXC 不可用](https://github.com/openai/codex/issues/61268)

- **问题**：elevated helper 以状态码 1 退出，MXC 在特定 executor 上不可用。
- **重要性**：与 Windows AppX 运行时注册、权限提升和工具执行链路相关，可能造成桌面端核心能力不可用。
- **社区反应**：目前 **1 条评论**，但属于今日新出现的底层运行故障。

## 重要 PR 进展

### 1. [为共享 HTTP 客户端启用 gzip 和 zstd](https://github.com/openai/codex/pull/61264)

在 `reqwest` 中启用 gzip、zstd，并更新 Cargo 与 Bazel 锁文件，降低传输体积并改善响应解压兼容性。

### 2. [重构会话窗口访问与异步压缩测试](https://github.com/openai/codex/pull/61263)

通过显式会话状态锁读取响应窗口元数据，并在组装响应前释放锁，降低异步压缩与并发会话操作之间的竞争风险。

### 3. [支持 ERS v1 和 v2 隧道 JWT](https://github.com/openai/codex/pull/61260)

启动及凭证续期阶段均可接受版本号为 1 或 2 的 ERS 隧道 JWT，增强远程连接与凭证轮换兼容性。

### 4. [更新实时模型并遵循供应商语音默认值](https://github.com/openai/codex/pull/61259)

更新实时模型；未设置 voice 时使用调用目标的默认语音，并确保修改或清除语音偏好后能在下一次 V3 调用中生效。

### 5. [保留 MCP 注册作用域](https://github.com/openai/codex/pull/61257)

将 MCP inventory 与运行状态按注册作用域区分，避免不同环境中同名服务器发生清单、路由和状态串扰。

### 6. [在 Linux 网络沙箱中阻止 `request_key`](https://github.com/openai/codex/pull/61256)

在 Restricted 和 ProxyRouted seccomp 模式下对 `request_key` 返回 `EPERM`，防止其通过宿主辅助程序绕过网络命名空间和代理策略。

### 7. [为 V8 Python 依赖支持 `PIP_INDEX_URL`](https://github.com/openai/codex/pull/61255)

配置 V8 的 `pip.parse` 展开 `PIP_INDEX_URL` 并传入 `--index-url`；未设置或为空时回退到 PyPI 默认源，同时保留哈希校验。

### 8. [修复 Bazel 对 bubblewrap 和语音构建的工具解析](https://github.com/openai/codex/pull/61254)

使用 Bazel coreutils 的 `sha256sum` 生成 bubblewrap 校验值，并将运行中的 Python 解释器目录加入 PATH，以修复 Unix 原生语音构建流程。

### 9. [将 rollout trace 记录移至后台 worker](https://github.com/openai/codex/pull/61253)

把推理开始时的 trace 记录改为异步执行，避免同步序列化和文件写入阻塞模型调度，缩短首 token 或请求分发延迟。

### 10. [以压缩分片存储 rollout trace payload](https://github.com/openai/codex/pull/61222)

在 trace schema v3 中将独立 JSON payload 文件替换为编号 Zstandard 分片，增加 `PayloadReader`、解码缓存和回放校验，并保留精确的出站 HTTP 信息。

## 功能需求趋势

1. **跨设备与跨界面会话连续性**  
   CLI 会话进入移动端、Chat → Work 交接、本地任务与 Dot 联动，以及远程会话管理，是用户持续要求的能力。相关需求包括 [#38963](https://github.com/openai/codex/issues/38963)、[#48506](https://github.com/openai/codex/issues/48506)、[#61258](https://github.com/openai/codex/issues/61258)。

2. **模型供应商与新模型支持**  
   `0.168.0` 开始支持浏览模型供应商并设置新会话默认供应商；同时，实时模型、GPT-6 Astra 行为和技能稳定性成为新议题。相关条目包括 [版本发布](https://github.com/openai/codex/releases/tag/rust-v0.168.0)、[#61252](https://github.com/openai/codex/issues/61252)。

3. **MCP 与远程开发体验**  
   社区同时关注 SSH/MCP 代理兼容、同名 MCP server 的作用域隔离、MCP 状态栏发现以及应用连接器失效。相关条目包括 [#54640](https://github.com/openai/codex/issues/54640)、[#61257](https://github.com/openai/codex/pull/61257)、[#61261](https://github.com/openai/codex/issues/61261)。

4. **Windows 安装、权限和沙箱可靠性**  
   Windows 沙箱 ACL、Full access 权限映射、MXC helper、AppX 注册错误、CLI 启动以及 Fish PATH 配置形成高密度反馈。代表问题包括 [#59038](https://github.com/openai/codex/issues/59038)、[#56663](https://github.com/openai/codex/issues/56663)、[#61268](https://github.com/openai/codex/issues/61268)、[#60978](https://github.com/openai/codex/issues/60978)。

5. **CLI 配置、计划模式与开发体验**  
   社区持续关注 feature toggle 顺序、已移除配置项的误导提示、重名 session 的歧义、Plan mode 对代码块标签的误判，以及 TUI 对审批内容的人工可读性。代表问题包括 [#60890](https://github.com/openai/codex/issues/60890)、[#60982](https://github.com/openai/codex/issues/60982)、[#61008](https://github.com/openai/codex/issues/61008)、[#60785](https://github.com/openai/codex/issues/60785)。

6. **SDK 并发与会话一致性**  
   TypeScript SDK 在同一新 Thread 上并发执行时可能拆分为多个 conversation，反映 SDK 会话生命周期与并发语义仍需加强。详见 [#61027](https://github.com/openai/codex/issues/61027)。

7. **可观测性和成本控制**  
   用户需要更准确的 usage/completion 报告，以及对多代理调用规模的可靠控制。相关事件见 [#61266](https://github.com/openai/codex/issues/61266)。

## 开发者关注点

- **权限显示必须与真实执行权限一致**：Windows “Full access” 静默回退会直接破坏用户对隔离状态的判断。
- **Windows 是当前故障最集中的平台**：沙箱初始化、AppX/MXC 注册、CLI 启动、WSL 代理和 Fish PATH 安装均出现反馈。
- **会话与任务状态必须可靠**：重名 session、空 session 恢复、跨端访问、Dot 跟随任务和 SDK 并发运行都暴露了状态一致性问题。
- **工具失败可能被误判**：模型将不存在的能力、伪造错误或文档检查当作最终实现，容易造成任务提前结束或交付不完整。
- **多代理可能带来失控成本**：社区希望成本限制能真正约束子代理数量，并让 usage 与完成状态如实呈现。
- **安全边界需要覆盖宿主辅助接口**：Linux 沙箱对 `request_key` 的封堵说明，仅限制进程级网络访问仍不足以覆盖调用宿主 helper 的路径。
- **CLI 可维护性关注可诊断性和兼容性**：用户希望错误包含原生 Win32/AppX 事件码、配置命令行为一致、审批内容可读，并减少重复会话与工具发现请求。
- **安装与升级链路仍需打磨**：macOS app-server 升级后短暂失效、Windows 包装器信号传递及注册工具错误信息，均说明发布、升级和恢复机制需要更平滑。

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI 社区动态日报

**日期：2026-11-13**  
**项目：** [google-gemini/gemini-cli](https://github.com/google-gemini/gemini-cli)

## 今日速览

- 过去 24 小时没有新版本发布，但有 **31 个 PR 更新**。近期开发重点集中在长请求超时与会话稳定性、Windows/IDE 兼容、工具权限与遥测可靠性，以及图像模型和评测体系完善。
- 社区讨论几乎全部围绕 **Agent 与 Subagent** 展开：终止状态误报、代理挂起、配置未生效、浏览器代理兼容性及工具调用规模等问题受到集中关注。
- 当前需求主线可概括为：**让子代理更可靠、更可观察、更安全，并提高工具与上下文执行效率**。

---

## 社区热点 Issues

### 1. Subagent 达到 MAX_TURNS 后仍被报告为成功
[#22323](https://github.com/google-gemini/gemini-cli/issues/22323) · P1 / Bug

`codebase_investigator` 实际已触及最大轮次限制，却被标记为 `success`，终止原因显示为 `GOAL`。这会让上层代理误判任务完成，造成静默中断。该问题获得 **13 条评论、2 个赞**，是本日讨论最充分的 Issue。

### 2. Generalist Agent 陷入永久挂起
[#21409](https://github.com/google-gemini/gemini-cli/issues/21409) · P1 / Bug

调用 generalist agent 时，诸如创建文件夹等简单操作也可能永久卡住；禁用子代理委派后可暂时规避。该问题获得 **8 条评论和 8 个赞**，社区认可度较高，反映子代理委派机制仍存在稳定性风险。

### 3. Browser Agent 忽略 `settings.json` 配置
[#22267](https://github.com/google-gemini/gemini-cli/issues/22267) · P2 / Bug

Browser Agent 未应用全局或项目级 `settings.json` 中的覆盖项，例如 `maxTurns`。`AgentRegistry` 初始化时能读取并合并配置，但运行阶段没有正确继承，说明配置传递链路存在断层。

### 4. Browser Agent 在 Wayland 环境下失败
[#21983](https://github.com/google-gemini/gemini-cli/issues/21983) · P1 / Bug

Browser subagent 在 Wayland 环境中无法正常运行，并错误显示 `Termination Reason: GOAL`。它同时暴露了浏览器启动失败和错误终止状态被掩盖两个问题，对 Linux 桌面环境用户影响较大。

### 5. 工具数量超过阈值后触发 400 错误
[#24246](https://github.com/google-gemini/gemini-cli/issues/24246) · P2 / Bug

启用大量工具后，Gemini CLI 会遇到 HTTP 400 错误。Issue 标题写作“>128 tools”，正文则提到“more than 400 tools”，具体阈值仍需进一步核实，但问题明确指向工具注册与按任务裁剪机制不足。

### 6. Agent 未充分使用自定义 Skills 和 Subagents
[#21968](https://github.com/google-gemini/gemini-cli/issues/21968) · P2 / Bug

用户认为 Gemini CLI 很少主动调用已安装的技能和子代理，即使描述与当前任务明显相关，也通常需要用户显式指定。该 Issue 获 **7 条评论**，反映自动能力发现与触发策略仍是核心体验缺口。

### 7. 缺少 AST 感知的文件读取、搜索与代码库映射
[#22745](https://github.com/google-gemini/gemini-cli/issues/22745) · P2 / Feature

该 EPIC 评估 AST 工具能否更精确地读取函数边界、按语法结构搜索并生成代码库映射，从而减少无效上下文和工具轮次。相关子任务还包括代码库映射调查 [#22746](https://github.com/google-gemini/gemini-cli/issues/22746) 以及 AST grep/文件读取评估 [#22747](https://github.com/google-gemini/gemini-cli/issues/22747)。

### 8. 模型频繁在随机目录创建临时脚本
[#23571](https://github.com/google-gemini/gemini-cli/issues/23571) · P2 / Bug

当原生文件工具受到限制、Shell 成为主要执行方式时，模型会在多个目录生成编辑脚本，增加工作区清理和提交噪声。社区期待更受控的临时文件策略，避免污染用户项目。

### 9. Agent 可能执行破坏性 Git 或资源操作
[#22672](https://github.com/google-gemini/gemini-cli/issues/22672) · P2 / Feature

复杂 Git、分支管理或数据库维护任务中，Agent 偶尔会使用 `git reset`、`--force` 等高风险命令。Issue 提议在存在安全替代方案时主动避免破坏性行为，并强化破坏性操作约束。

### 10. Subagent 上下文和轨迹难以检查
[#21763](https://github.com/google-gemini/gemini-cli/issues/21763) · [#22598](https://github.com/google-gemini/gemini-cli/issues/22598)

`/bug` 报告主要包含主会话信息，缺少子代理内部上下文；与此同时，子代理轨迹虽由聊天记录服务保存，却缺少易于访问和分享的入口。前者影响故障定位，后者影响行为评估与调试，两者共同暴露出当前可观测性的不足。

---

## 重要 PR 进展

### 1. 避免 body timeout 中止并重放长时间模型轮次
[#30174](https://github.com/google-gemini/gemini-cli/pull/30174) · OPEN

修复 API Key、Vertex AI 或网关认证场景下，模型长时间生成单个大型 `write_file` 参数时，超过 5 分钟无响应会触发 undici `bodyTimeout`，进而重放整个请求的问题。目标是减少重复计费、重复执行和长轮次中断。

### 2. 自定义请求超时时同步扩展 undici `bodyTimeout`
[#30258](https://github.com/google-gemini/gemini-cli/pull/30258) · CLOSED

让 `updateGlobalFetchTimeouts` 在请求超时超过 300 秒或显式设置 `bodyTimeoutMs` 时同步更新 body timeout，而不再受 undici 默认 5 分钟限制。与 #30174 共同指向网络层长响应稳定性。

### 3. 修复 Windows `/ide install` 对带空格路径的处理
[#30246](https://github.com/google-gemini/gemini-cli/pull/30246) · OPEN

Windows 下编辑器 CLI 位于带空格目录时，`/ide install` 会错误地提示 VS Code 扩展安装失败。PR 将修正 `cmd.exe` 命令的路径引用方式，恢复 VS Code Companion 安装和连接流程。

### 4. 恢复会话时仅在 `resumeChat` 成功后还原工作区目录
[#30259](https://github.com/google-gemini/gemini-cli/pull/30259) · CLOSED

此前会话恢复失败后，工作区目录仍可能保持激活状态。新实现把目录恢复延迟到 `resumeChat` 成功之后，避免失败请求污染当前 `WorkspaceContext`。

### 5. 为 Hooks 暴露工具调用 ID
[#30043](https://github.com/google-gemini/gemini-cli/pull/30043) · CLOSED

在 `BeforeTool` 和 `AfterTool` Hook 输入中加入可选的 `tool_call_id`，并传递现有请求调用 ID，便于外部集成关联同一工具调用的前后事件。直接调用 Hook 且没有请求 ID 时保持向后兼容。

### 6. 保留被工具输出遮蔽的会话历史
[#30019](https://github.com/google-gemini/gemini-cli/pull/30019) · CLOSED

修复恢复带有 masked tool output 的会话时丢失用户首条提示的问题。核心是避免将仅用于 API 请求的压缩历史视图错误写回正式会话记录。

### 7. 将 ACP 工具调用纳入 Hooks 和权限策略
[#30022](https://github.com/google-gemini/gemini-cli/pull/30022) · CLOSED

让编辑器驱动的 ACP 会话同样经过 `BeforeTool`、`AfterTool` Hook，从而应用已有的权限、确认与审计策略。该改动提升了不同运行入口之间的一致性。

### 8. 修复 Windows 安全文件读取的设备号比较
[#30033](https://github.com/google-gemini/gemini-cli/pull/30033) · CLOSED

在 Node/libuv 的特定版本组合下，Windows 的 `stat()` 与 `fileHandle.stat()` 可能返回不同的 `dev` 值，导致安全文件读取误判文件身份并抛出“设备或 inode 已变化”。PR 改为兼容该平台差异。

### 9. 将项目临时路径识别为本地可信路径
[#30026](https://github.com/google-gemini/gemini-cli/pull/30026) · CLOSED

Gemini CLI 会话目录下的辅助脚本此前可能被判定为不受信任，从而在 Python traceback 暴露路径后触发额外确认。PR 修正 untrusted flag 检查，避免合法辅助脚本反复要求授权。

### 10. 修正遥测 JSON 序列化与压缩事件初始化时序
[#30157](https://github.com/google-gemini/gemini-cli/pull/30157) · OPEN  
[#30156](https://github.com/google-gemini/gemini-cli/pull/30156) · OPEN

前者修复 `safeJsonStringify` 把共享数组等重复引用误判为循环引用的问题；后者让聊天压缩事件在 OpenTelemetry SDK 初始化完成前进入缓冲，避免遥测事件丢失。两者共同改善企业遥测的准确性与完整性。

---

## 功能需求趋势

### 1. Agent 与 Subagent 可靠性
社区最集中的诉求是修复子代理挂起、错误成功状态、配置未继承和任务轨迹不可见等问题。相关讨论覆盖终止语义 [#22323](https://github.com/google-gemini/gemini-cli/issues/22323)、通用代理挂起 [#21409](https://github.com/google-gemini/gemini-cli/issues/21409)、配置覆盖 [#22267](https://github.com/google-gemini/gemini-cli/issues/22267) 和故障报告上下文 [#21763](https://github.com/google-gemini/gemini-cli/issues/21763)。

### 2. 浏览器代理成熟度
Browser Agent 的 Wayland 兼容 [#21983](https://github.com/google-gemini/gemini-cli/issues/21983)、配置继承 [#22267](https://github.com/google-gemini/gemini-cli/issues/22267)、持久会话锁恢复 [#22232](https://github.com/google-gemini/gemini-cli/issues/22232)，共同推动其从实验能力向稳定功能演进。

### 3. 工具数量治理与上下文效率
社区希望 Agent 能按任务动态筛选工具，而不是在工具数量过多时直接触发 400 [#24246](https://github.com/google-gemini/gemini-cli/issues/24246)。同时，AST 感知搜索与读取 [#22745](https://github.com/google-gemini/gemini-cli/issues/22745)、Tactful Extraction [#19561](https://github.com/google-gemini/gemini-cli/issues/19561) 表明开发者关注点已从“增加工具”转向“减少无关上下文与工具轮次”。

### 4. 沙箱、安全与破坏性操作控制
零依赖 OS 沙箱和执行后意图路由 [#19873](https://github.com/google-gemini/gemini-cli/issues/19873)、破坏性行为约束 [#22672](https://github.com/google-gemini/gemini-cli/issues/22672)，以及临时文件污染 [#23571](https://github.com/google-gemini/gemini-cli/issues/23571)，显示安全边界正在成为 Agent 基础设施的核心能力。

### 5. 多代理协作与可扩展任务管理
社区期待共享内存、并行子代理协作 [#18287](https://github.com/google-gemini/gemini-cli/issues/18287)，以及持久化、文件驱动的任务跟踪 [#18836](https://github.com/google-gemini/gemini-cli/issues/18836)，用于降低长会话中的 context rot，并提升复杂任务的可持续性。

### 6. IDE、编辑器与跨平台集成
Windows `/ide install` 修复 [#30246](https://github.com/google-gemini/gemini-cli/pull/30246)、ACP Hooks 一致性 [#30022](https://github.com/google-gemini/gemini-cli/pull/30022)、Wayland 浏览器支持 [#21983](https://github.com/google-gemini/gemini-cli/issues/21983)，表明开发者希望 CLI、IDE 和桌面环境之间的体验保持一致。

### 7. 模型与评测体系
图像模型配置正在推进：[#30159](https://github.com/google-gemini/gemini-cli/pull/30159) 拟注册 `gemini-2.5-flash-image`（Nano Banana）。与此同时，内部评测稳定性 [#23166](https://github.com/google-gemini/gemini-cli/issues/23166) 和 steering eval 可靠性 [#23313](https://github.com/google-gemini/gemini-cli/issues/23313) 也受到关注。

---

## 开发者关注点

- **子代理不能“假成功”**：最大轮次、异常退出和实际完成状态必须严格区分，否则上层流程会继续执行并掩盖失败。
- **委派后容易卡死**：简单任务也可能被 generalist 或 browser agent 阻塞；需要超时、取消、恢复和可靠终止语义。
- **配置体系存在断层**：Browser Agent 等组件读取了 `settings.json`，但运行时未完全应用，项目级覆盖和全局覆盖都需要端到端验证。
- **工具数量与上下文成本正在触顶**：过多工具既可能触发 API 400，也会扩大模型选择负担；动态工具裁剪、AST 搜索和精确读取成为共同诉求。
- **安全控制需要更细粒度**：Shell 沙箱、临时文件位置、破坏性 Git 命令、确认策略以及 ACP Hook 覆盖都需要更一致地执行。
- **调试和评估链路不完整**：子代理上下文、轨迹、分享与 `/bug` 报告能力不足，使复杂 Agent 行为难以复现和量化。
- **跨平台边缘问题突出**：Windows 路径空格、Node/libuv 文件身份差异、Wayland 浏览器环境等，都是发布前验证覆盖不足的典型表现。

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI 社区动态日报

**日期：2026-11-13**  
**数据范围：github/copilot-cli 过去 24 小时更新**

## 1. 今日速览

Copilot CLI 发布 **v1.0.111-0**，重点增强企业级 Shell/Bash/PowerShell 权限规则，并支持远程客户端按单次启动创建 CLI 会话。社区问题集中在 **MCP 认证与缓存、上下文超限、长期会话稳定性、模型配置持久化、子代理权限及 IDE 集成**；过去 24 小时无 Pull Request 更新。

## 2. 版本发布

### [v1.0.111-0](https://github.com/github/copilot-cli/releases)

- 企业管理员可在 Shell、Bash 和 PowerShell 权限规则中使用正则表达式。
- 新增 `--host-allow-session-creation`，允许远程客户端仅在单次启动期间创建 CLI 主机会话，无需修改持久化设置。
- 策略界面开始展示组织支持链接。
- 上一版本 **v1.0.110** 的主要更新包括：
  - 实验性支持通过代理命令应答 Git、SSH 和 sudo 密码提示，密码以遮蔽对话框显示，可通过 `/experimental` 启用。
  - Microsoft Entra 登录时，若存在组织账户，可避免不必要的错误弹窗。
  - 改进屏幕阅读器对当前会话的识别与播报。

## 3. 社区热点 Issues

> 以下按技术影响、讨论热度及问题覆盖面选取。

1. **Windows 上 Entra Broker 令牌缓存始终为 0 字节**  
   [#5236](https://github.com/github/copilot-cli/issues/5236) · **7 条评论 / 👍 1**  
   MCP 登录后缓存未正确写入，导致每次启动新进程都重复弹出账户选择器；同一进程 `/restart` 则不复现。该问题直接影响 Windows 企业用户和 MCP 使用体验，是今日讨论度最高的认证问题。

2. **Google Workspace MCP OAuth 因尾斜杠 issuer 不匹配而失败**  
   [#4606](https://github.com/github/copilot-cli/issues/4606) · **5 条评论 / 👍 2**  
   Google 授权服务器元数据声明 `https://accounts.google.com/`，而客户端在浏览器授权前即拒绝请求。该问题阻碍官方 Workspace MCP 端点接入，也反映 OAuth issuer 规范化兼容性的普遍风险。

3. **策略启用插件后仍持久化为 `enabled: false`**  
   [#4837](https://github.com/github/copilot-cli/issues/4837) · **3 条评论 / 👍 2**  
   企业策略或 MDM 配置中的 `enabledPlugins` 能安装插件，却没有真正启用插件，技能也不会激活，且后续启动无法自愈。对受管环境和规模化插件部署尤其重要。

4. **大型工具定义导致默认上下文模型在首次提示前被拒绝**  
   [#5151](https://github.com/github/copilot-cli/issues/5151) · **2 条评论**  
   工具定义从约 15K 增长到约 260K tokens 后，`gpt-5.6-sol` 和 `gpt-6.1-sol` 触发 `compaction_static_context_blocked`。这暴露了 MCP 工具规模、静态上下文预算与默认模型选择之间的兼容性风险。

5. **长期交互会话反复发生内存耗尽崩溃**  
   [#5435](https://github.com/github/copilot-cli/issues/5435) · **1 条评论**  
   v1.0.109 的长时间会话再次出现 OOM，恢复会话后后台代理也无法访问。问题直接影响长时间运行、自动代理和大型项目的稳定性。

6. **ACP `session/new` 报告的模型与实际运行模型不一致**  
   [#5363](https://github.com/github/copilot-cli/issues/5363) · **1 条评论**  
   ACP 响应声明使用 `claude-sonnet-5.5`，但客户端未显式设置配置项前，会话实际运行另一模型。模型元数据不一致会给 IDE、客户端编排和成本预估带来误导。

7. **ACP 模式无法发现并连接 IDE MCP 服务**  
   [#5447](https://github.com/github/copilot-cli/issues/5447)  
   即使从 IDE 集成终端启动、存在有效锁文件，`copilot --acp` 仍跳过 `~/.copilot/ide` 发现，导致没有 IDE MCP 服务或“Visual Studio Connected”状态。这是非交互模式和 IDE 集成之间的关键断层。

8. **MCP 工具快照缓存持续增长，可能在启动阶段耗尽内存**  
   [#5446](https://github.com/github/copilot-cli/issues/5446)  
   临时工作区不断变化时，Windows MCP 工具缓存会积累旧条目；CI 和评测框架尤其容易触发。该问题与长期会话 OOM、上下文膨胀存在潜在关联。

9. **子代理无法可靠使用 HTTP OAuth MCP 服务**  
   [#5437](https://github.com/github/copilot-cli/issues/5437)  
   `task` 子代理在 OAuth MCP 通配符引用下收到 401，显式引用又仅在特定模型和部分服务器上可用。问题说明认证凭据或授权上下文没有稳定传递到 delegated child agents。

10. **`/model --global` 不持久化模型选择**  
    [#5445](https://github.com/github/copilot-cli/issues/5445)  
    用户选择 `claude-sonnet-5.5` 后，配置文件中没有写入 `model`，新会话仍可能打开已移除的模型。该问题影响多会话工作流，并暴露出全局模型配置与实际状态不同步。

## 4. 重要 PR 进展

过去 24 小时内仓库 **无新增或更新的 Pull Request**，因此暂无可列出的重要 PR 进展。

## 5. 功能需求趋势

- **MCP 认证与凭据管理**
  - Entra Broker 跨进程令牌缓存。
  - Google Workspace OAuth issuer 兼容。
  - delegated task 子代理的 OAuth 凭据继承。
  - macOS Keychain 重复授权及重复条目清理。
  - OpenAI-compatible 服务返回结构化 403 错误时应保留 `error.message` 与 `error.code`，而非统一显示认证失败。

- **性能和长期会话稳定性**
  - 修复长时间交互会话 OOM。
  - 限制 MCP 工具缓存增长及临时工作区造成的资源占用。
  - 降低大量工具定义对默认模型上下文预算的冲击。
  - 改善远程会话事件存储耗尽后仍显示 CLI 进程存活的状态一致性问题。

- **IDE 与非交互集成**
  - 让 ACP 模式发现 IDE 锁文件并连接 IDE MCP 服务。
  - 修复 SDK/VS Code 异步 Bash 命令状态不一致，即命令已停止但缺少匹配的 `stop_bash` 调用。
  - 恢复 VS Code devcontainer 中 Markdown 文件链接的 Ctrl+click 打开能力。

- **模型与配置管理**
  - 持久化 `/model --global` 选择，并确保新会话使用有效模型。
  - 保证 ACP 返回的模型字段与实际会话模型一致。
  - 发布 `providers.json` JSON Schema，帮助 BYOK 提供商配置可发现、可校验。
  - 支持 Agent Plugins 1.0 的 `.instructions.md` 和 `applyTo` frontmatter。

- **权限与代理体系**
  - 让企业权限规则支持正则表达式。
  - 修复 general-purpose 子代理错误拒绝已授权 `/tmp` 写入。
  - 修复批准 `exit_plan_mode` 后同轮启动的子代理缺少内置工具。
  - 恢复协调型子会话回复回传主协调聊天。

- **会话与工作区资源管理**
  - 支持复用或回收不活跃 Git worktree，减少构建产物、虚拟环境和缓存占用。
  - 提升长会话事件存储的容量和状态可靠性。

## 6. 开发者关注点

1. **认证必须真正跨进程、跨代理可用**  
   开发者最希望 MCP 登录状态能够稳定落盘并被子代理继承，避免每个新进程重复登录。当前 Entra、OAuth 和 Keychain 问题表明凭据生命周期仍不统一。

2. **上下文与工具规模需要可预测**  
   MCP 工具定义增长会直接压缩模型可用上下文；临时工作区还会扩大工具快照缓存。工具发现、去重、裁剪和上下文预算管理是高频诉求。

3. **长期运行不能因 OOM 或事件存储耗尽而丢失工作**  
   社区尤其关注后台代理在崩溃或恢复后的可访问性，以及会话状态与实际进程状态的一致性。

4. **全局配置必须与实际行为一致**  
   `/model --global` 未持久化、ACP 模型声明不准确，都会让自动化客户端做出错误决策。配置写入、运行时状态和会话启动行为需要统一。

5. **IDE/ACP 集成仍是碎片化区域**  
   IDE 发现、Markdown 链接、异步 Bash 停止事件等问题表明，CLI 交互模式与 SDK、ACP、VS Code 之间的行为尚未完全对齐。

6. **企业策略需要“可执行”而不仅是“可安装”**  
   插件启用状态、企业正则权限规则及远程单次会话授权，显示企业用户尤其关注策略的确定性、作用域和可解释性。

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI 社区动态日报

**日期：2026-11-13**

## 1. 今日速览

过去 24 小时内，Kimi Code CLI 社区整体活跃度较低，没有新的版本发布，也没有更新中的 Issues。唯一值得关注的进展是 PR **#1777** 已关闭，该 PR 尝试引入“三层规则系统”；由于它未在本次统计窗口内形成有效合并记录，相关设计是否进入后续开发仍需关注。

## 2. 版本发布

过去 24 小时内无新版本发布。

## 3. 社区热点 Issues

过去 24 小时内无更新中的 Issues，因此暂无社区热点条目可列。

## 4. 重要 PR 进展

### [PR #1777：feat: three-tier rules system](https://github.com/MoonshotAI/kimi-cli/pull/1777)

- **状态**：已关闭
- **作者**：[@Nemo4110](https://github.com/Nemo4110)
- **最后更新**：2026-11-12
- **方向**：提出三层规则系统，可能用于对项目指令、上下文规则及执行优先级进行分层管理。
- **影响**：该 PR 是今日唯一有更新的开发项，可反映社区对“规则分层与执行优先级”能力的探索。不过 PR 最终关闭，当前无法确认该能力是否会以其他形式重新实现或合入主线。
- **社区反馈**：未记录评论，获赞数为 0；由于 PR 已关闭且反馈有限，暂不宜将其视为已确认的正式路线。

## 5. 功能需求趋势

由于过去 24 小时内没有 Issues 更新，无法从当日 Issue 数据中可靠提炼社区需求趋势。根据今日唯一 PR 可观察到以下潜在方向：

- **规则体系分层**：区分不同作用域、优先级或层级的项目规则。
- **提示词与上下文治理**：帮助开发者更精细地控制模型接收的指令及上下文。
- **可配置执行策略**：通过多级规则减少规则冲突，并明确覆盖关系。

以上仅代表 PR 暴露出的探索方向，不代表社区已经形成广泛共识。

## 6. 开发者关注点

- **规则冲突与优先级**：多层规则落地时，需要清晰定义匹配、覆盖、继承及冲突解决机制。
- **规则作用域**：开发者可能关注规则应如何区分全局配置、项目配置和目录级配置。
- **变更可解释性**：规则命中与覆盖过程最好具备可追踪性，便于调试 AI 行为。
- **维护决策透明度**：PR 在关闭但缺少评论的情况下，开发者难以判断功能是被放弃、等待重构，还是将迁移至其他 Issue；后续建议补充关闭原因或替代跟踪链接。

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode 社区动态日报｜2026-11-13

## 今日速览

今日无新版本发布，开发重点集中在 **v2 稳定性与桌面端体验**：Windows/macOS 兼容、模型状态同步、后台任务状态、插件上下文和 ACP 会话创建是高频问题。与此同时，视频生成能力密集进入开发分支，OpenRouter、MiniMax、Kling、Gemini Omni 与 Seedance 等适配正在并行推进。

## 社区热点 Issues

1. **恢复旧版 UI，并允许保留持久左侧栏**  
   经典双栏布局被新版侧边栏重设计取代，用户希望将旧 UI 作为可选方案。Issue 获 47 个赞、44 条评论，是今日讨论热度最高的需求。  
   [#48882](https://github.com/anomalyco/opencode/issues/48882)

2. **v2 回合无故中止，缺少明确的终止来源**  
   报告指出 store 与 stream 状态不一致，部分触发中止的字段在版本迁移中丢失。该问题曾被 tracker 要求复现两次，说明 v2 状态模型仍有较高回归风险。  
   [#63632](https://github.com/anomalyco/opencode/issues/63632)

3. **Bedrock Claude 模型错误套用 Nova 的 effort 参数格式**  
   当 Bedrock API ID 为 application inference profile ARN 时，Claude 模型仍生成 Nova 格式 effort variants，触发 HTTP 400。问题直接影响 Claude 推理参数兼容性。  
   [#53756](https://github.com/anomalyco/opencode/issues/53756)

4. **GitLab Duo 工作流模型在 v2 无法调用工具**  
   普通文本回复正常，但模型发起 tool call 后回合静默结束且无报错。反馈认为 v2 缺少 v1 中的 `toolExecutor`、`approvalHandler` 和会话上下文接线。  
   [#63212](https://github.com/anomalyco/opencode/issues/63212)

5. **Windows 上 ACP 创建会话失败：根目录 `realpath` 报 EINVAL**  
   ACP 初始化握手成功，但后续 `session/new` 在 Windows 盘符根目录失败，影响 IntelliJ IDEA 等 IDE 集成，根因疑似 Bun 运行时路径处理。  
   [#62551](https://github.com/anomalyco/opencode/issues/62551)

6. **桌面端 Mermaid 图片节点只显示标签、不显示图片**  
   Mermaid 的 `node@{ img: "..." }` 渲染缺失，而普通 Markdown 图片正常，问题指向 `markdown-mermaid.ts` 的图片节点处理。  
   [#62893](https://github.com/anomalyco/opencode/issues/62893)

7. **命令切换模型后，桌面端输入框仍显示旧模型**  
   slash command 声明的 `model:` 已实际切换会话模型，但 prompt footer 仍保留旧值，可能误导用户并导致下一次请求模型不一致。  
   [#63506](https://github.com/anomalyco/opencode/issues/63506)

8. **免费模型额度异常：刚使用五分钟即触发限制**  
   用户报告 mimo、MiniMax M3.1 Flash 等免费模型刚开始使用便达到额度上限；另有用户等待七天后仍无法恢复，表明免费层额度状态或计数逻辑可能存在异常。  
   [#63658](https://github.com/anomalyco/opencode/issues/63658) · [#63568](https://github.com/anomalyco/opencode/issues/63568)

9. **工具名称规范化后静默冲突**  
   仅在非字母数字、下划线和连字符字符上不同的工具名，会被规范化成同一键，可能造成工具注册、调用或权限判断错误，且当前没有显式冲突提示。  
   [#52420](https://github.com/anomalyco/opencode/issues/52420)

10. **CLI v2.0.8 缺少消息时间戳开关**  
    v1.18.31 可通过快捷键启用消息时间戳，v2.0.8 中该选项消失，影响需要对照模型响应时间和执行进度的用户。  
    [#49742](https://github.com/anomalyco/opencode/issues/49742)

## 重要 PR 进展

1. **新增 OpenRouter 视频生成支持**  
   在共享 `ai.video` API 上接入 OpenRouter，扩展 OpenCode 的多模态生成能力。  
   [#63681](https://github.com/anomalyco/opencode/pull/63681)

2. **MiniMax 视频生成 API 接入**  
   新增 `MiniMax.configure(...).video(id)`、`videoModel` 及对应 provider 集成。  
   [#63682](https://github.com/anomalyco/opencode/pull/63682)

3. **Google Gemini Omni 视频生成支持**  
   以 Gemini Omni Interactions API 替代已下线的 Veo 模型；PR 说明其为独立落地，不依赖 OpenCode 视频工具。  
   [#63683](https://github.com/anomalyco/opencode/pull/63683)

4. **桌面端支持通过 mDNS 与附近手机配对**  
   桌面端广播 `_opencode._tcp` 服务，手机可发现并通过六位码确认完成密钥交换，简化移动端接入流程。  
   [#63679](https://github.com/anomalyco/opencode/pull/63679)

5. **桌面端浏览器改为持久化配置、扩展与 Agent 工具修复**  
   将原先每个附件独立、登录态不持久的浏览器面板，升级为统一加密 profile，支持导入登录状态、Chrome 扩展，并修复工具调用与 `browser` deny 配置问题。  
   [#63002](https://github.com/anomalyco/opencode/pull/63002)

6. **修复命令指定模型后 composer 显示旧模型**  
   对应 #63506，使命令模型设置在后续选择与发送中保持一致，避免界面状态和实际会话模型分离。  
   [#63678](https://github.com/anomalyco/opencode/pull/63678)

7. **后台 shell 运行时保持会话标签忙碌状态**  
   修复后台 shell 尚未结束但 session tab 没有 spinner 的问题，使会话活动状态与实际执行状态一致。  
   [#63676](https://github.com/anomalyco/opencode/pull/63676)

8. **冷启动时等待 provider catalog 就绪**  
   修复插件激活尚未完成时 `provider.get` 返回 404 的问题；该接口此前未像 provider/model 列表接口一样等待插件就绪。  
   [#63687](https://github.com/anomalyco/opencode/pull/63687)

9. **新时间线优化子代理、报告与状态展示**  
   将分组活动中的子代理改为事件流展示，并调整报告、状态行和文件列表的位置与长度，降低“Waiting for shell”等状态造成的阅读歧义。  
   [#63685](https://github.com/anomalyco/opencode/pull/63685) · [#63686](https://github.com/anomalyco/opencode/pull/63686)

10. **保留外部请求显式提供的 `traceparent`**  
    修复 HTTP 客户端覆盖已有链路追踪 header 的问题，避免破坏上游服务或外部系统的分布式追踪上下文。  
    [#61386](https://github.com/anomalyco/opencode/pull/61386)

## 功能需求趋势

- **多模态与视频生成扩展**：视频 provider 是今日最集中的开发方向，覆盖 OpenRouter、MiniMax、Kling、Gemini Omni、Seedance/Volcengine/BytePlus，显示 OpenCode 正从文本与代码代理扩展为通用多模态开发平台。  
  [#63681](https://github.com/anomalyco/opencode/pull/63681) · [#63682](https://github.com/anomalyco/opencode/pull/63682) · [#63683](https://github.com/anomalyco/opencode/pull/63683) · [#63684](https://github.com/anomalyco/opencode/pull/63684) · [#63680](https://github.com/anomalyco/opencode/pull/63680)

- **桌面端与移动端协同**：mDNS 局域网配对、持久浏览器 profile、手机剪贴板与桌面工作流衔接，显示 Desktop 正在向独立跨端工作台发展。  
  [#63679](https://github.com/anomalyco/opencode/pull/63679) · [#63002](https://github.com/anomalyco/opencode/pull/63002)

- **UI 可定制与经典布局兼容**：恢复旧版 UI、持久左侧栏、消息时间戳和可配置货币等需求，反映用户对视觉变化和信息密度控制权的要求。  
  [#48882](https://github.com/anomalyco/opencode/issues/48882) · [#49742](https://github.com/anomalyco/opencode/issues/49742) · [#63689](https://github.com/anomalyco/opencode/issues/63689)

- **代理编排与上下文控制**：社区提出 Advisor 二模型咨询、Agent instructions、Plan mode 规则持久化等需求，核心是让代理可组合、上下文更可控。  
  [#63631](https://github.com/anomalyco/opencode/issues/63631) · [#63669](https://github.com/anomalyco/opencode/pull/63669)

- **IDE 与自动化集成**：ACP 在 Windows 的稳定性直接影响 IntelliJ IDEA 等 IDE 使用，是外部工具链接入 OpenCode 的基础能力。  
  [#62551](https://github.com/anomalyco/opencode/issues/62551)

## 开发者关注点

- **v2 状态一致性是首要风险**：回合中止原因丢失、模型实际值与 UI 显示不一致、后台任务状态不准确，集中在 store、stream、TUI 和 session 状态之间缺少统一事实源。  
  [#63632](https://github.com/anomalyco/opencode/issues/63632) · [#63506](https://github.com/anomalyco/opencode/issues/63506) · [#63676](https://github.com/anomalyco/opencode/pull/63676)

- **跨平台兼容性仍需加强**：Windows ACP 路径、Windows 桌面启动崩溃、Windows baseline 包携带旧二进制，以及大小写不敏感文件系统误删文件，均可能造成数据或发布风险。  
  [#62551](https://github.com/anomalyco/opencode/issues/62551) · [#63001](https://github.com/anomalyco/opencode/issues/63001) · [#63688](https://github.com/anomalyco/opencode/issues/63688) · [#63126](https://github.com/anomalyco/opencode/issues/63126)

- **Provider 兼容层需要更严格验证**：Bedrock 参数格式错误和 GitLab Duo tool call 静默失败表明，模型协议迁移不能只验证普通文本响应，还应覆盖工具调用、推理参数及错误传播。  
  [#53756](https://github.com/anomalyco/opencode/issues/53756) · [#63212](https://github.com/anomalyco/opencode/issues/63212)

- **免费层额度与错误提示不透明**：用户无法解释额度为何迅速耗尽或长期不恢复，社区期待更明确的限制说明、剩余额度展示和可靠重置机制。  
  [#63658](https://github.com/anomalyco/opencode/issues/63658) · [#63568](https://github.com/anomalyco/opencode/issues/63568)

- **插件与扩展生态的上下文契约需要稳定**：上下文 hook 丢失 message metadata、工具名规范化冲突，均会影响插件按消息注入上下文或注册自定义工具的可靠性。  
  [#63252](https://github.com/anomalyco/opencode/issues/63252) · [#52420](https://github.com/anomalyco/opencode/issues/52420)

- **桌面浏览器应具备可持续工作上下文**：持久登录状态、扩展支持和可靠代理工具控制，能显著提升 Agent 对真实网页任务的完成率。  
  [#63002](https://github.com/anomalyco/opencode/pull/63002)

</details>

<details>
<summary><strong>jcode</strong> — <a href="https://github.com/1jehuang/jcode">1jehuang/jcode</a></summary>

# jcode 社区动态日报｜2026-11-13

## 今日速览

- 今日讨论高度集中在 **swarm 多智能体协作**：集中暴露了上下文预算识别、等待/停止语义、配置继承、状态透传和模型选择等一系列问题。
- Harness API 开始补齐 `swarm_status` 事件，目标是让外部客户端获得与 TUI 类似的 worker 实时状态；同时，多模型会话切换、Anthropic 缓存计数及 Windows Bash 退出码等可靠性问题也备受关注。
- 过去 24 小时共有 **39 个 PR 更新**，工作重点横跨 TUI 交互、模型与 Provider 接入、测试稳定性、终端兼容性和安装发布链路。

---

## 社区热点 Issues

### 1. [#2158 Harness API 应转发 `swarm_status`](https://github.com/1jehuang/jcode/issues/2158)

- **重要性**：当前 Harness API 客户端无法获知 swarm worker 的运行、完成或失败状态，而 TUI 已具备相应能力。补齐该事件是外部集成 swarm 的关键一步。
- **社区反应**：已有 1 条评论；对应 PR #2160 当日提交，实现路径较明确。

### 2. [#2152 `swarm await_members` 缺少阻塞模式，`bg wait` 不接受 swarm 依赖 ID](https://github.com/1jehuang/jcode/issues/2152)

- **重要性**：现有依赖等待只能后台注册，调用方无法用一个统一、阻塞式操作等待 swarm 成员完成，降低编排可预测性。
- **社区反应**：已有 1 条评论；社区希望增加可选阻塞/统一等待能力，而保留当前非阻塞行为。

### 3. [#2149 Swarm 未自动发现上下文窗口，LiteLLM `max_input_tokens` 被忽略](https://github.com/1jehuang/jcode/issues/2149)

- **重要性**：通过 LiteLLM 或 OpenAI 兼容代理运行时，worker 可能获得错误的上下文预算，且长时间推理中的停滞无法被 watchdog 及时发现。
- **社区反应**：问题已关闭，说明相关修复已经落地；其暴露出的模型能力动态发现机制仍是重要技术主题。

### 4. [#2157 OpenAI 兼容模型能力判断依赖名称，而非实际响应](https://github.com/1jehuang/jcode/issues/2157)

- **重要性**：静态模型名启发式难以适配代理、自定义网关和模型别名，可能误判 reasoning 内容回传、effort 参数及上下文窗口支持。
- **社区反应**：暂无评论，但直接关系到新模型接入的兼容性和成本控制。

### 5. [#2153 Swarm root session 的 effort 未传递给 worker](https://github.com/1jehuang/jcode/issues/2153)

- **重要性**：root session 配置了 `agents.swarm_root_effort` 后，子 worker 仍回退到默认 `low`，导致协调者与执行者的推理预算不一致。
- **社区反应**：暂无评论；这是明确且容易复现的配置继承缺陷。

### 6. [#2151 Swarm lane todo 名称错误使用完整 prompt](https://github.com/1jehuang/jcode/issues/2151)

- **重要性**：todo 名称取 spawn prompt 前 60 个字符而非短 `label`，会污染协调者计划，并降低长任务的可读性和可管理性。
- **社区反应**：暂无评论；属于低成本、高确定性的体验修复。

### 7. [#2150 `swarm stop` 不具备幂等性，且缺少批量 `teardown`](https://github.com/1jehuang/jcode/issues/2150)

- **重要性**：worker 完成后再次执行 stop 可能报 `Unknown swarm session`；批量清理能力缺失也会增加客户端状态管理复杂度。
- **社区反应**：暂无评论；社区诉求同时包含 bug 修复与小型生命周期 API 增强。

### 8. [#2148 Swarm 工具声明支持 `model`，但 schema 会将其剥离](https://github.com/1jehuang/jcode/issues/2148)

- **重要性**：工具描述宣称支持 `model: "inherit"` 或具体模型值，但实际 schema 不接受该字段；报错信息也不提示真正的配置键，形成文档与实现不一致。
- **社区反应**：暂无评论，并带有 `good first issue` 标签，适合社区快速参与修复。

### 9. [#2146 从 OpenAI 模型切换到 Claude 时，压缩摘要被静默丢弃](https://github.com/1jehuang/jcode/issues/2146)

- **重要性**：OpenAI 格式的压缩摘要是无文本加密块，Anthropic formatter 未处理该类型，跨模型切换后模型可能只看到原始上下文或失去摘要。
- **社区反应**：暂无评论；该问题会影响长会话稳定性及跨 Provider 工作流。

### 10. [#2145 Anthropic Provider 端 Web Search 导致缓存读取被重复计入上下文](https://github.com/1jehuang/jcode/issues/2145)

- **重要性**：jcode 将 input、cache read 和 cache write 相加，可能把上下文规模放大到实际值的数倍，从而过早触发压缩或硬压缩。
- **社区反应**：暂无评论；它与 #2149 共同指向上下文预算和压缩机制的系统性改进。

---

## 重要 PR 进展

### 1. [#2160 Harness API：将 `swarm_status` 作为类型化事件转发](https://github.com/1jehuang/jcode/pull/2160)

- 将 daemon 的 `ServerEvent::SwarmStatus` 接入 Harness API bridge。
- API 客户端可获知 worker 的运行、完成和失败状态，关闭 #2158。
- 是外部客户端集成 swarm 编排能力的关键基础设施。

### 2. [#1889 TUI：增加带 frecency 排序的 `@file` 提及选择器](https://github.com/1jehuang/jcode/pull/1889)

- 允许在提示词中通过 `@file` 快速引用文件。
- 结合访问频率进行排序，优先展示常用项目文件。
- 降低大型代码库中的路径输入成本，关闭 #570。

### 3. [#1946 Bedrock：避免默认旗舰模型降级到旧目录模型](https://github.com/1jehuang/jcode/pull/1946)

- 引入 `bedrock_promoted_default` 下限。
- 仅当目录中存在严格更新的 Claude frontier 版本时才允许切换默认模型。
- 避免 catalog 刷新后意外回退，修复 #1926。

### 4. [#1883 发送 OSC 9 进度序列以支持 herdr agent 状态检测](https://github.com/1jehuang/jcode/pull/1883)

- 终端可据此识别 agent 的运行、等待和完成状态。
- 采用 fire-and-forget 包装，并允许通过配置关闭。
- 加强 jcode 与终端代理环境的状态联动，关闭 #574。

### 5. [#1880 测试：隔离开发环境并稳定并行运行](https://github.com/1jehuang/jcode/pull/1880)

- 清理外部 `JCODE_*` 环境变量，避免测试继承开发者本机配置。
- 对修改 `JCODE_HOME` 的测试加锁，并为易波动 fixture 提供隔离环境。
- 直接提升 CI 与本地并行测试的可重复性。

### 6. [#1955 修复 `JCODE_HOME` 测试竞态](https://github.com/1jehuang/jcode/pull/1955)

- 解决 session picker 测试中 `JCODE_HOME` 的 TOCTOU 问题。
- 让测试辅助函数与被测代码遵循同一环境锁。
- 避免并行测试期间锁定测试被其他测试篡改，关闭 #1784。

### 7. [#1882 测试：隔离命名 Profile 的认证环境](https://github.com/1jehuang/jcode/pull/1882)

- 清除外部 `JCODE_PROVIDER_PROFILE_*` 环境变量。
- 防止开发者 shell 配置意外影响命名 Profile 认证测试。
- 是 Provider 认证测试稳定性的基础改进。

### 8. [#1709 TUI overview 折叠、memory effort 配置与 runtime model 行](https://github.com/1jehuang/jcode/pull/1709)

- 新增 `agents.memory_effort` / `JCODE_MEMORY_EFFORT`，可控制记忆提取 sidecar 的推理强度。
- 增加 TUI overview 折叠能力及 runtime model 信息行。
- 同时关闭 #1639 与 #1634。

### 9. [#2143 吞掉不完整 Kitty 终端协议产生的 ESC 分片](https://github.com/1jehuang/jcode/pull/2143)

- 兼容 iTerm2 将 Kitty keyboard report 拆成多个 `write()` 的情况。
- 避免尾部的 `[98;1:3u` 被误插入 composer。
- 修复终端协议分片导致输入污染的问题，关闭 #2140。

### 10. [#1815 新增 `ask_user` 工具及 TUI 内联选择器](https://github.com/1jehuang/jcode/pull/1815)

- Agent 可在执行中发起结构化选择题。
- TUI 提供数字快捷键、自由文本输入和超时自动选择。
- 回复会保留用户实际选择的 label 与 value，而不是泛化为普通回答。

---

## 功能需求趋势

1. **Swarm 编排能力趋于完整**
   - 关注点从“能否创建 worker”转向实时状态、依赖等待、幂等停止、批量清理、配置继承和模型选择。
   - Harness API 与 TUI 的能力对齐成为明显趋势。

2. **动态模型能力发现与多 Provider 兼容**
   - OpenAI 兼容代理、LiteLLM、Bedrock、自定义网关和新模型都需要更可靠的 runtime 探测。
   - 社区希望减少基于模型名称的静态猜测，转向基于实际能力响应进行判断。

3. **长会话与上下文管理**
   - 集中关注上下文窗口自动发现、压缩摘要跨模型迁移、缓存 token 正确计数和 compaction 阈值。
   - 这些问题直接影响长任务可靠性、推理成本及模型切换体验。

4. **TUI 交互效率与可观测性**
   - `@file` 引用、会话搜索过滤、主题切换、overview 折叠、inline `ask_user` 和终端进度事件持续受到关注。
   - 开发者期望减少手工输入，并让 agent 状态在终端内更容易观察。

5. **测试隔离和 CI 稳定性**
   - 多个 PR 集中处理 `JCODE_HOME`、Provider Profile 和环境变量污染。
   - 表明并行测试基础设施已成为近期工程投入重点。

6. **发布与默认模型安全性**
   - Bedrock 默认模型防降级、安装时 manifest 同步等 PR 显示，发布链路的一致性正在加强。
   - 用户更关注升级后是否仍指向正确、稳定且最新的模型版本。

---

## 开发者关注点

- **状态可见性不足**：API 客户端无法像 TUI 一样跟踪 swarm worker，是目前最直接的集成痛点。
- **Swarm 生命周期语义不统一**：缺少阻塞等待、幂等 stop 和批量 teardown，使客户端必须维护额外状态机。
- **配置“声明支持但实际被过滤”**：工具描述、schema、运行时行为之间存在偏差，尤其影响 `model` 参数。
- **上下文预算不可靠**：LiteLLM/Anthropic 的 token 统计和模型能力识别问题会导致错误压缩、预算失真及 watchdog 失效。
- **跨模型会话存在数据损失风险**：切换 OpenAI 与 Claude 时，压缩摘要可能被静默丢弃。
- **Windows 子进程退出码不可靠**：成功命令在启动 detached child 后可能被 Bash 报告为 exit 120，容易造成自动化流程误判。
- **并行测试受环境污染影响**：`JCODE_HOME`、Profile 环境变量及共享目录状态导致的竞态，是当前测试稳定性的高频痛点。
- **外部客户端与 TUI 能力差距**：社区期待 Harness API持续补齐 swarm 状态等原生事件，使 jcode 更容易嵌入第三方 AI 开发工具。

</details>

<details>
<summary><strong>pi</strong> — <a href="https://github.com/earendil-works/pi">earendil-works/pi</a></summary>

# pi 社区动态日报｜2026-11-13

> 数据范围：`earendil-works/pi` 过去 24 小时更新；过去 24 小时无新版本发布。

## 今日速览

今日社区重点集中在**模型能力适配与上下文管理**：GitHub Copilot 的 Gemini/Kimi 模型无法传递 `reasoning_effort`、ChatGPT 登录下模型上下文窗口仍显示 272K，以及缓存预热失效等问题，直接影响模型选择与调用效率。

同时，稳定性修复明显提速，包括压缩期间错误触发新会话、信号终止命令被误报成功、终端输出竞争，以及 WebSocket、临时文件、流式读取等崩溃问题。

---

## 社区热点 Issues

### 1. [#10956 — `cacheWarming: "idle"` 在扩展处理 turn_end 后静默停止](https://github.com/earendil-works/pi/issues/10956)
扩展处理 `turn_end` 或上下文包含自定义/压缩消息后，空闲缓存预热不再触发。报告者记录了 507 次决策事件，但低概率预热从未出现，说明这已不是偶发现象。**14 条评论、3 个赞**，是今日讨论最活跃的运行时问题之一。

### 2. [#11021 — ChatGPT 登录下 GPT-6.1 Sol 仍显示 272K 上下文](https://github.com/earendil-works/pi/issues/11021)
同一账户的实时模型目录给出 500K 默认上下文，但 pi 仅识别为 272K，导致压缩阈值和可用上下文被不必要地压低。问题直接关系到长会话、编码任务及计费效率，已有 **13 条评论、8 个赞**。

### 3. [#12019 — GitHub Copilot Gemini 模型不发送 `reasoning_effort`](https://github.com/earendil-works/pi/issues/12019)
`--thinking` 对 `github-copilot/gemini-4-argon` 等模型无效，同时 `usage.reasoning_tokens` 未被处理。问题被标记为 **P0**，说明推理型模型的参数适配是当前高优先级工作，已有 **9 条评论**。

### 4. [#10628 — tmux 吞掉全屏 TUI 的 OSC 52 复制命令](https://github.com/earendil-works/pi/issues/10628)
在 tmux/SSH 环境下，pi 显示“Copied!”，但剪贴板实际没有收到内容。根因是 pi 未对 OSC 52 做 tmux passthrough 包装，属于跨终端环境下的基础交互兼容问题，已有 **14 条评论、7 个赞**。

### 5. [#2870 — Linux 配置目录未遵循 XDG Base Directory 规范](https://github.com/earendil-works/pi/issues/2870)
pi 会把配置与状态直接堆放在用户主目录，未使用 `$XDG_CONFIG_HOME` 等标准路径。该议题累计获得 **75 个赞、28 条评论**，是本批数据中社区认可度最高的议题，本次更新后已关闭。

### 6. [#10585 — 临时文件流错误仍可使整个进程崩溃](https://github.com/earendil-works/pi/issues/10585)
`/tmp` 空间耗尽或权限不足时，Bash 工具的流错误会形成未捕获异常，导致当前运行丢失。该问题被标为 **P0**，暴露了本地代理在生产环境中“单个工具错误拖垮整个会话”的风险，已有 **4 条评论**。

### 7. [#12098 — Anthropic 消息线程重发时丢失 thinking blocks](https://github.com/earendil-works/pi/issues/12098)
启用 Anthropic message threads 后，每次 `thread_not_found` 回退重发都可能报告 `prefix_binding_mismatch` 并丢弃 thinking blocks。问题会削弱扩展思考链的一致性，并可能增加重复推理成本，已有 **3 条评论**。

### 8. [#9448 — `pi auth check` 无法识别扩展注册的 Provider](https://github.com/earendil-works/pi/issues/9448)
扩展注入 Provider 后，`pi auth check` 仍可能返回 `invalid_state`。这让自动化审查或流水线无法可靠依赖官方 auth 检查判断 Provider 就绪状态，已有 **4 条评论、1 个赞**。

### 9. [#11593 — 远程模型目录重置后缓存模型消失](https://github.com/earendil-works/pi/issues/11593)
系统休眠、VPN 切换或地区识别异常后，远程目录元数据可能被重置为零，导致已缓存模型从 `pi --list-models` 中间歇性消失。已有 **3 条评论**，反映模型发现与离线缓存仍不够稳健。

### 10. [#12066 — `find` 的路径 glob 可能匹配搜索目录之外的父级文件](https://github.com/earendil-works/pi/issues/12066)
包含 `/` 的 glob 被转换成 `**/...` 并配合 `fd --full-path` 执行，可能错误返回搜索根目录上方或其他项目中的文件。除了结果不准确，还存在跨项目文件泄露风险，已有 **3 条评论**；对应修复已进入 PR 流程。

---

## 重要 PR 进展

### 1. [#12110 — GitHub Copilot 传递 `reasoning_effort` 并读取推理 token](https://github.com/earendil-works/pi/pull/12110)
根据 models.dev 修正模型能力元数据，使 Gemini、Kimi 模型可正确启用思考等级，并处理 `reasoning_tokens`。该 PR 正在推进，直接对应 P0 Issue [#12019](https://github.com/earendil-works/pi/issues/12019)。

### 2. [#12028 — 压缩完成前延迟触发新 turn](https://github.com/earendil-works/pi/pull/12028)
修复 `pi.sendMessage(..., { triggerTurn: true })` 在手动压缩尚未完成时启动运行的问题，避免使用未压缩分支并造成会话条目错乱。PR 已开放，值得关注其合并状态。

### 3. [#12121 — `/copy` 跳过没有最终回答的 turn](https://github.com/earendil-works/pi/pull/12121)
当前 `/copy` 可能复制仅含工具调用、空响应或中断标记的最后一轮。新实现会准确定位真正包含回答的 turn，提升终端交互可靠性。PR 已开放。

### 4. [#12089 — 将被信号终止的 `pi.exec` 命令标记为失败](https://github.com/earendil-works/pi/pull/12089)
修复 Node 进程因信号结束时缺少 exit code、被错误映射为成功的问题。超时、中止、崩溃和外部 kill 现在可以与正常退出可靠区分。该 PR 已关闭，预计已合并或进入主干。

### 5. [#12087 — `grep` 和 `find` 跳过版本控制目录](https://github.com/earendil-works/pi/pull/12087)
避免搜索 `.git` 中的 reflog、hook 样本等内部文件，减少噪声结果与不必要的文件访问。该 PR 已关闭，对大型仓库的搜索性能和结果准确性都有直接收益。

### 6. [#12116 — 将 `find` 路径模式锚定在搜索根目录](https://github.com/earendil-works/pi/pull/12116)
不再允许 `src/**/*.ts` 等模式穿透到搜索目录上层或兄弟目录，修复跨项目误匹配问题。该 PR 已关闭，安全意义大于一般搜索体验改进。

### 7. [#12109 — 隐藏被 Overlay 覆盖的终端图片](https://github.com/earendil-works/pi/pull/12109)
修复 Kitty/iTerm2 图片穿透 Overlay、在面板文字上方继续显示的问题，并统一处理多个重复报告。该 PR 已关闭，属于 TUI 渲染正确性的重要修复。

### 8. [#11966 — TUI 运行期间停止直接写终端](https://github.com/earendil-works/pi/pull/11966)
将启动提示、事件错误和上下文读取等输出接入诊断机制，避免它们与 TUI 重绘争抢 stdout/stderr。该 PR 已关闭，是终端渲染稳定性的基础设施级修复。

### 9. [#12107 — 限制 `session_shutdown` 调度，防止退出卡死](https://github.com/earendil-works/pi/pull/12107)
为退出阶段的扩展 shutdown 调度增加边界，避免某个扩展阻塞导致 pi 界面消失后进程仍长期存活。该 PR 已关闭，直接改善进程生命周期与资源回收。

### 10. [#11952 — Bash 调用串行执行，其他工具调用并行](https://github.com/earendil-works/pi/pull/11952)
当模型在同一轮同时发出 Bash 与读取操作时，Bash 优先完成，读取随后执行，避免读取尚未生成的构建日志或输出文件。该 PR 已关闭，提升了多工具协作的正确性。

---

## 功能需求趋势

1. **新模型与推理能力适配**
   - Copilot 的 Gemini/Kimi 推理参数。
   - GPT-6.1 Sol 正确上下文窗口。
   - Anthropic thinking blocks 保留。
   - Qwen Token Plan 网关与模型目录更新。

2. **提示词缓存与长会话效率**
   - 空闲缓存预热失效。
   - 分支摘要无法复用缓存前缀。
   - 强制 System Prompt 导致缓存前缀失效。
   - 上下文窗口与压缩策略准确识别。

3. **会话、存储与扩展生命周期**
   - 永久删除持久化会话。
   - pi-durable 提供轻量扩展入口。
   - 压缩期间正确排队消息。
   - shutdown 调度不可无限阻塞。
   - `/reload` 后扩展工具渲染恢复。

4. **TUI 与终端兼容性**
   - tmux 下 OSC 52 复制。
   - Overlay 与终端图片合成。
   - 全屏模式可浏览被压缩的旧消息。
   - TUI 独占终端输出。
   - `/model` 优先推荐最新版本。

5. **工具正确性与安全性**
   - `find`/`grep` 搜索边界。
   - Bash 工具错误不再拖垮进程。
   - Bash 与读取操作的执行顺序。
   - Codex 图片使用文件引用而非重复发送 base64。
   - `/copy` 跳过无回答轮次。

6. **Provider、认证与模型发现**
   - `auth check` 支持扩展 Provider。
   - llama.cpp 连接配置持久化。
   - 远程模型目录异常后的缓存韧性。
   - Google Gemini 适配器支持自定义 `fetch`。

7. **企业代理与可观测性**
   - Google SDK 请求转发至自定义 HTTP 代理。
   - 启动与会话替换时统一报告诊断信息。
   - MCP OAuth 支持额外授权参数，以获取 Google refresh token。

---

## 开发者关注点

开发者反馈呈现出几个高频痛点：

- **模型元数据与真实服务能力不一致**：上下文长度、推理参数、推理 token 和模型目录可能来自不同来源，导致 pi 的行为与供应商实际能力不匹配。
- **缓存和长会话成本仍不稳定**：缓存预热、分支摘要缓存前缀、强制提示词投影均可能破坏 prompt cache，直接增加延迟和 token 消耗。
- **扩展生态需要更可靠的契约**：包括 Provider 注册、工具渲染、session shutdown、压缩期间消息触发以及扩展专用轻量入口。
- **异常不能演变为进程级崩溃**：临时文件空间不足、AbortError、信号退出和输出管道残留都要求错误被局部化、可观测并可靠报告。
- **终端环境的边界情况突出**：tmux、全屏 TUI、终端图片、Overlay 和退出阶段残留进程等问题，在自动化与远程开发环境中影响明显。
- **搜索工具需要严格隔离作用域**：不仅要减少 `.git` 噪声，还要防止 glob 穿透搜索根目录造成错误结果或跨项目暴露。

</details>

---
*本日报由 [Big Model Radar](https://github.com/96loveslife/big_model_radar) 自动生成。*
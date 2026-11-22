# AI CLI 工具社区动态日报 2026-11-22

> 生成时间: 2026-11-22 05:59 UTC | 覆盖工具: 8 个

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

**数据日期：2026-11-22**  
**范围：Claude Code、OpenAI Codex、Gemini CLI、GitHub Copilot CLI、Kimi Code CLI、OpenCode、jcode、pi**

---

## 1. 生态全景

当前主流 AI CLI 正从“终端中的代码补全工具”快速演进为具备权限治理、子代理编排、后台任务、MCP 工具接入和跨端控制能力的完整 Agent 平台。社区关注点已明显从模型能力转向**执行可靠性**：权限边界、状态一致性、升级迁移、网络兼容和长会话资源管理成为高频问题。

与此同时，Claude Code、Codex、Gemini CLI、Copilot CLI、OpenCode 和 jcode 均在近 24 小时内有版本或代码更新，呈现出较快的并行迭代节奏；但多数项目仍未形成稳定版本，Windows/WSL、macOS、Wayland、企业代理等非标准环境仍是可靠性短板。

Agent 子代理与并行编排是当前最明确的功能增长轴，但 Claude Code、Gemini CLI、Copilot CLI 和 OpenCode 的实践均表明：**多 Agent 带来的并非只有效率，也包括权限传播、终止状态、错误恢复和可观测性等系统性复杂度**。行业正在进入“能力快速扩张、生产可靠性补课”的阶段。

---

## 2. 各工具活跃度对比

> Issues、PR 按日报所述“过去 24 小时更新”口径统计；不同仓库对更新、关闭及 PR 的定义可能存在差异，适合用于趋势比较，不宜视为严格同口径的活跃度排名。

| 工具 | 今日 Issues | 今日 PR | Release | 活跃度判断 |
|---|---:|---:|---|---|
| **Claude Code** | 50 | 1 | 无新版本 | Issue 覆盖面最广，权限、Desktop、SSH、MCP 和长期记忆需求突出 |
| **OpenAI Codex** | 10 个热点 Issue | 10 个重要 PR | 无新 Release | PR 推进密集，重点解决 Windows/WSL 迁移、MCP、TUI 和 Cloud 恢复 |
| **Gemini CLI** | 10 个热点 Issue | 10 个重要 PR | `v0.71.0-nightly.20261122.geecccfcd5` | 子代理与 ACP 是绝对主线，版本和 PR 均较活跃 |
| **GitHub Copilot CLI** | 14 | 3 | `v1.0.115-6`；另有 `v1.0.115-5` | 发布节奏稳定，重点处理会话、远程控制、网络和安装升级 |
| **Kimi Code CLI** | 0 | 0 | 无 | 当日无社区活动，短期可见度最低 |
| **OpenCode** | 10 个热点 Issue | 10 个重要 PR | 无新版本 | V2、并行任务、Desktop 稳定性、会话管理推进明显 |
| **jcode** | 3 | 12 | `v1.0.3` | 更新量较小但集中，正式版与预发布节奏较激进 |
| **pi** | 10 个热点 Issue | 3 | 无 | 无版本发布，重点投入上下文压缩、模型适配与错误恢复 |

### 活跃度解读

- **社区讨论规模最大：Claude Code**  
  今日更新 50 条 Issue，涉及 Desktop、移动端、权限、MCP、插件、远程环境和记忆能力，产品覆盖面最广。

- **代码工程推进最强：Codex、Gemini CLI、OpenCode**  
  三者均整理出约 10 条重要 PR。Codex 聚焦平台迁移与运行时，Gemini CLI 聚焦 ACP 和沙箱安全，OpenCode 聚焦 V2、并行执行和后台任务。

- **版本发布最积极：Gemini CLI、Copilot CLI、jcode**  
  其中 Gemini CLI 采用 nightly 快速迭代；Copilot CLI 连续发布修复版本；jcode 则在正式版和多个预发布版之间快速切换。

- **Kimi Code CLI 暂时掉线**  
  过去 24 小时没有 Issue、PR 或 Release 更新，不代表产品本身成熟度较低，但缺少当日生态信号。

---

## 3. 共同关注的功能方向

### 3.1 Agent 子代理与并行编排

多个工具正在补齐复杂 Agent 工作流，但当前实现成熟度差异较大。

| 工具 | 具体诉求与进展 |
|---|---|
| **Gemini CLI** | 子代理成为当日绝对主线：MAX_TURNS 后仍误报成功、Generalist Agent 挂起、Browser Agent 忽略配置、Wayland 失败，以及轨迹无法分享等问题集中出现。 |
| **OpenCode** | 新增 `task-parallel`，支持并发运行 **2–5 个独立子任务**，是当日最明确的并行化实现进展。 |
| **Copilot CLI** | 嵌套子代理无法多轮交互，`background` 模式被静默忽略，显示嵌套 Agent 拓扑尚未成熟。 |
| **Claude Code** | 社区关注后台子 Agent 的 Bypass Permissions 继承、跨 Agent 持久化“体验记忆”和任务状态跟踪。 |
| **Codex** | PR 增加派生子代理的异步用户消息能力，并推进子代理进度回报及用户输入请求。 |
| **jcode** | 修复协调器提示错误传播给执行 Worker 的问题，明确区分协调器与子 Agent 角色。 |

**判断**：并行执行已成为行业标配方向，但真正的竞争壁垒不是“能否 fan-out”，而是能否保证任务状态真实、权限边界正确、失败可恢复且全过程可审计。

### 3.2 权限、安全边界与高风险操作治理

- **Claude Code**：Plan Mode 仍可能直接修改源文件；后台子 Agent 权限继承、符号链接审批和 SSH 本地路径误用受到关注。
- **Gemini CLI**：修复 YOLO 模式下 Shell 解析失败被误判为允许，以及受污染命令生成过宽永久白名单的问题。
- **Codex**：Full Access、权限选择器与实际 SSH/Git 能力不一致；文档和 Scheduled Tasks 的权限行为也存在冲突。
- **OpenCode**：用户拒绝工具调用后仍可能在重启时恢复该轮；社区同时要求限制 `git reset --force` 等破坏性操作。
- **Copilot CLI**：希望为常用二进制配置持久化白名单，并在恢复会话后继承既有授权。

**判断**：权限系统正在从“每次弹窗确认”升级为分层策略引擎，但配置继承、路径解析、工具身份和恢复会话的授权连续性仍是普遍短板。

### 3.3 会话持久化、恢复与可追溯性

- **OpenCode**：会话树、分支、rewind、replay、后台任务和 TUI 搜索需求强烈，目标是实现类似 Git 的会话管理。
- **Copilot CLI**：提出 `suspend_session`、`resume_session`，并需要嵌套会话可靠退出及权限恢复。
- **Codex**：Windows/WSL 升级后出现聊天历史消失、项目迁移不完整和重复空项目。
- **Gemini CLI**：子代理轨迹已保存但无法通过 `/chat share` 查看，用户难以进行复盘和评测。
- **pi**：恢复 Kimi 会话后工具不可用，暴露恢复状态与工具注册不同步。
- **jcode**：同一 TUI 窗口缺少创建空白会话的入口，后台任务取消后的状态也未及时同步。

**判断**：会话已成为 Agent 的核心资产。未来竞争重点将从“能否保存聊天记录”转向**可迁移、可分支、可恢复、可审计、可共享**。

### 3.4 MCP 与外部工具互操作

- **Claude Code**：Docs、GitHub、Office、WhatsApp 连接器的授权和状态同步存在断层；SSH 环境会误用本地 MCP 路径。
- **Codex**：修复 MCP reply POST 意外完成 Codex pending request 的 JSON-RPC ID 冲突。
- **Gemini CLI**：工具过多可能触发 API 400，因此增加 Shell/MCP 大输出截断；ACP 也开始支持并行只读调用。
- **Copilot CLI**：当 PATH 中存在 `gh` 时，自定义 Agent 无法使用内置 GitHub MCP 读取工具。
- **pi**：工具描述单次可达约 **36KB**，重复调用 73 次后占用约 **950KB** 上下文。

**判断**：MCP 已从“能连接”进入“规模化治理”阶段，工具冲突、schema 膨胀、输出过大、权限继承和错误分类将比单个 MCP Server 的接入更关键。

### 3.5 跨平台与企业网络兼容性

| 场景 | 主要涉及工具 |
|---|---|
| Windows/WSL 会话迁移、权限及发送失败 | Codex |
| Windows 服务静默退出、SQLite 恢复、SSE 渲染器挂起 | OpenCode |
| Wayland 浏览器 Agent、POSIX 沙箱权限识别 | Gemini CLI |
| Surge Fake-IP、企业 TLS 过滤、移动端 relay challenge | Copilot CLI |
| macOS 27 证书链、macOS 启动崩溃、Edge 侧栏 | OpenCode、Codex、Claude Code |

**判断**：主流开发环境之外的 macOS 新版本、Windows/WSL、Wayland、VPN、企业代理和 Fake-IP，正在成为区分“可用”与“生产可用”的关键测试矩阵。

### 3.6 成本、上下文预算与额度可预测性

- **Claude Code**：无头模式消耗约 **1.8 倍**交互模式的五小时窗口额度，是今日成本反馈中热度最高的问题。
- **Gemini CLI**：Browser Agent 忽略 `maxTurns` 等配置，无法可靠控制成本和运行时长。
- **OpenCode**：免费额度不重置、跨日结转和 Desktop 状态不同步引发 **405 条评论**。
- **pi**：工具描述占线程约 **25%**，压缩摘要经过九次后从 **17K 字符膨胀至 164K**。
- **Codex**：memory 检索丢失关系上下文并以高置信度重建错误记忆。

**判断**：成本治理已不只是 Token 计价问题，还包括工具 schema、压缩摘要、Agent 轮次、额度重置和记忆准确性。开发者需要把“上下文与额度可观测性”纳入选型标准。

### 3.7 TUI/终端交互质量

- **Codex**：Markdown 块复制、slash command 参数补全、Shell 补全误触发和 transcript 光标可见性持续改进。
- **Gemini CLI**：ACP 并行调用、大输出截断、退出码和沙箱错误分类成为重点。
- **OpenCode**：增加 TUI 会话内查找，长会话滚动体验仍有缺陷。
- **jcode**：优化多行粘贴、Ctrl+Click 打开链接、Kitty Terminal 识别和后台任务状态栏。
- **pi**：继续处理图片重叠、Markdown 格式、tmux 超链接和 transcript 跳动等终端细节。

**判断**：CLI 的基础交互仍是高频生产力的关键，成熟度差异往往不在模型回答，而在复制、粘贴、搜索、终端兼容和状态反馈等细节。

---

## 4. 差异化定位分析

| 工具 | 功能侧重 | 目标用户 | 技术路线与竞争特点 |
|---|---|---|---|
| **Claude Code** | 高自治编码、Desktop/移动端 Remote Control、MCP/插件、长期记忆 | 注重权限治理、复杂任务自动化的个人及企业开发者 | 产品面最宽，强调 Anthropic 原生模型与跨端体验；当前短板在 Desktop 生命周期、身份隔离和远程环境兼容性 |
| **OpenAI Codex** | 本地/Cloud Agent、Windows/WSL、代码执行、Work 模式、App-server | 跨平台开发者、Codex Cloud 用户、OpenAI 生态用户 | 强调桌面端、Cloud 和本地执行协同；PR 工程密度高，但近期 Windows/WSL 升级迁移造成明显回归 |
| **Gemini CLI** | 子代理、Browser Agent、ACP、Skills、沙箱、多模型工具链 | 喜欢 Google/Gemini 生态、需要开源可扩展 Agent 和协议集成的开发者 | 开放协议和可扩展性突出；子代理可观测性、配置继承、终止状态和安全审批是近期核心战场 |
| **GitHub Copilot CLI** | GitHub 工作流、自定义 Agent、远程控制、会话管理、MCP | GitHub 深度用户、Copilot 订阅用户、企业开发者 | 与 GitHub 身份、Issue/PR 和企业策略结合紧密；优势在生态入口，短板在嵌套 Agent、网络适配和工具发现 |
| **Kimi Code CLI** | 当前数据不足 | 暂无足够当日信号 | 过去 24 小时无活动，暂无法判断其开发优先级和生态采用度 |
| **OpenCode** | V2 Agent 平台、Provider 兼容、并行子任务、Desktop、API | 多模型用户、注重可定制性、后台任务和自动化集成的开发者 | Provider 开放度和 API 化程度突出；`task-parallel`、异步作业、SSE 和会话树潜力较大，但 Desktop 生命周期问题较多 |
| **jcode** | Antigravity/Google 登录、多 Provider 路由、常驻语音、后台任务 | 多账号、多 Provider、偏好语音和 TUI 的个人开发者 | 账户池、配额故障转移、API Key 脚本化较突出；发布节奏激进，状态隔离和多 Provider 一致性仍需验证 |
| **pi** | 长会话、上下文压缩、扩展、模型兼容、headless 自动化 | 重视上下文控制、扩展机制和 Provider 自由度的开发者 | 以上下文与工具扩展工程见长；当前核心挑战是压缩质量、工具描述开销、模型元数据和恢复可靠性 |

### 定位差异归纳

- **最强产品化与跨端体验**：Claude Code  
- **最强桌面/Cloud 协同与平台工程投入**：Codex  
- **最强开放协议与子代理扩展潜力**：Gemini CLI  
- **最强 GitHub 组织生态入口**：Copilot CLI  
- **最强多 Provider 与并行/后台任务探索**：OpenCode  
- **最强多账户路由与语音特色**：jcode  
- **最强上下文工程深度**：pi  

---

## 5. 社区热度与成熟度

### 5.1 社区热度

#### 第一梯队：高关注、强问题密度

1. **Claude Code**
   - 50 条 Issue 更新；
   - 无头额度问题获得 **77 条评论、178 赞**；
   - Plan Mode 越权问题获得 **30 条评论、38 赞**；
   - 覆盖面和单议题热度均为当日最高。

2. **OpenCode**
   - 免费额度统一 Issue 达到 **405 条评论**；
   - 并行任务、会话树、Desktop 崩溃等问题直接推动 PR；
   - 社区反馈与开发修复之间转化速度较快。

3. **Codex**
   - 约 10 条重点 PR 覆盖 MCP、TUI、Cloud 恢复和子代理；
   - macOS 启动崩溃 Issue 获 **57 条评论、18 赞**；
   - 自动化权限冲突 Issue 获 **26 赞**。

4. **Gemini CLI**
   - 子代理问题占据当日议题主线；
   - nightly 与约 10 条重要 PR 同步推进；
   - 热度集中，说明产品重心正在从基础 CLI 能力转向 Agent 平台化。

#### 第二梯队：稳定发布、围绕体验持续反馈

- **Copilot CLI**：14 条 Issue、3 条 PR、连续发布两个修复版本；热点集中在远程控制、嵌套 Agent、网络和安装可靠性。
- **jcode**：3 条 Issue、12 条 PR，并发布 `v1.0.3`；小团队式高密度迭代特征明显，但稳定性验证和版本节奏需要观察。

#### 专项观察：pi

- pi 没有新版本，但 10 个热点 Issue 集中于上下文膨胀、压缩和模型适配；
- 3 个 PR 均已关闭，说明当前改进尚未形成明确合入进展；
- 属于“深度工程问题驱动型”而非“社区声量驱动型”。

### 5.2 成熟度判断

| 成熟度层级 | 工具 | 判断依据 |
|---|---|---|
| **相对成熟，但快速演进** | Claude Code、Codex、Gemini CLI、Copilot CLI | 版本和工程体系完整，功能覆盖广；复杂场景仍有明显回归与平台兼容问题 |
| **快速迭代期** | OpenCode、jcode | 新能力推进迅速，PR 与 Issue 高度联动，但 Desktop、状态同步、额度或测试隔离仍不稳定 |
| **工程化专项探索期** | pi | 上下文和扩展基础较强，但压缩膨胀、模型目录和恢复一致性问题突出 |
| **当日信号不足** | Kimi Code CLI | 无更新，无法对其当前成熟度作可靠横向判断 |

### 成熟度不应只看版本号

当前更值得使用“**生产就绪度**”而非“功能数量”评估工具：

1. 是否会错误宣称任务成功；
2. 是否能准确继承权限；
3. 升级后是否保留会话；
4. 失败后是否能恢复；
5. 是否提供成本和上下文可观测性；
6. 是否支持企业代理、WSL、Wayland 和多显示器环境。

---

## 6. 值得关注的趋势信号

### 信号一：Agent 工具数量快速增长，但上下文开销已被迫治理

Gemini CLI 出现工具过多导致 400，pi 的工具描述占线程约 25%，Claude Code 和 OpenCode 都在推进 MCP 与子代理。

**技术启示**：未来不能仅统计“支持多少工具”，而要评估：

- 工具是否按任务动态裁剪；
- schema 是否延迟加载；
- 输出是否截断并保留关键头尾；
- 工具名称冲突如何处理；
- 子代理是否继承父级工具集。

### 信号二：子代理的“状态可信度”比并发能力更重要

Gemini CLI 会在 MAX_TURNS 后报告成功，Copilot CLI 的后台和嵌套模式失效，Codex、OpenCode、jcode 均在补充异步消息、完成事件和中断原因传播。

**技术启示**：企业选型时应重点验证：

- 未完成、超时、用户拒绝、工具失败是否有不同终止状态；
- 父任务能否可靠等待和汇总子任务；
- 重启后是否错误恢复已拒绝操作；
- 子任务是否能独立审计和取消。

### 信号三：权限控制正在从 UI 提示转向策略系统

Plan Mode 越权、Full Access 名实不符、YOLO 解析失败误放行、恢复会话后权限丢失，说明传统确认弹窗已不足以支撑 Agent。

**技术启示**：需要将权限建模为可继承、可审计的能力：

- 模式与身份绑定；
- 路径与命令按规范化结果判定；
- 后台、嵌套和恢复会话均继承权限；
- 解析失败默认拒绝或询问；
- 高风险操作使用独立策略层，而不仅是提示词约束。

### 信号四：会话连续性成为升级质量的硬指标

Codex 的 Windows/WSL 历史消失、Claude Code 的 Desktop/CLI 账号冲突、OpenCode 的 SQLite 恢复失败、pi 的恢复会话工具不同步，均表明 Agent 状态已超越传统聊天记录范畴。

**技术启示**：生产使用应要求：

- 升级前自动备份；
- 项目、模型、工具、权限和 transcript 一起迁移；
- 迁移失败可回滚；
- 主机、WSL、远程环境之间有明确状态归属；
- 恢复后提供一致性校验。

### 信号五：模型与 Provider 差异被暴露为运行时工程问题

Bedrock 多模态、Grok reasoning、Claude signed thinking、OpenAI/Gemini 思考强度、Copilot Fusion 路由、OpenCode 空流和证书链问题，说明 Provider 兼容已不能只靠简单字段映射。

**技术启示**：团队需要建立 Provider Contract Test，至少覆盖：

- 多模态工具结果；
- reasoning/thinking 签名与重放；
- 流式错误和空流；
- 缓存 Token 计量；
- 非标准 `finish_reason`；
- 证书链、代理和 Fake-IP；
- 上下文窗口与模型目录准确性。

### 信号六：成本可观测性将从“Token 统计”升级为“Agent 经济性管理”

Claude Code 无头模式约 1.8 倍额度差异、Gemini 的 `maxTurns` 失效、OpenCode 免费额度不重置、pi 的压缩摘要反向膨胀，均直接进入用户信任层。

**技术启示**：应统一追踪：

- 输入、输出、缓存 Token；
- 工具 schema 和输出占用；
- 子 Agent 重复上下文；
- 压缩前后体积与耗时；
- 每轮额度消耗；
- 会话/模式差异；
- 重试和无效工具调用产生的成本。

### 信号七：CLI 的生产体验越来越取决于非模型层工程

SSE 挂起、终端识别、复制粘贴、滚动回弹、后台任务状态栏、Socket 恢复、退出码和日志留存，看似是“小问题”，实际决定无人值守和长会话可用性。

**技术启示**：开发团队应把以下内容纳入标准验收矩阵：

- Windows/WSL、macOS、Linux；
- Wayland、X11、Kitty、iTerm2、Windows Terminal；
- 企业代理、VPN、Surge Fake-IP；
- 睡眠恢复、断网重连、服务重启；
- Ctrl+C、权限拒绝、SSE 中断、磁盘写满；
- 任务取消与进程退出。

---

## 结论与选型建议

| 目标 | 优先关注 |
|---|---|
| 复杂自治编码、跨端控制、广泛生态 | **Claude Code** |
| OpenAI/Codex Cloud 协同、Windows/WSL 环境 | **OpenAI Codex**，但应避开近期升级回归 |
| 开源子代理、ACP、Skills 和沙箱扩展 | **Gemini CLI** |
| GitHub Issue/PR/组织流程深度集成 | **GitHub Copilot CLI** |
| 多 Provider、并行任务、后台作业与 API 嵌入 | **OpenCode** |
| 多账户路由、配额池、语音交互 | **jcode** |
| 长会话上下文控制、扩展机制、Provider 自由度高 | **pi** |
| 需要近期稳定社区信号 | **Kimi Code CLI 暂无足够数据，不宜仅凭本次日报做结论** |

总体而言，AI CLI 的下一阶段竞争不是“谁接入的模型和工具更多”，而是**谁能在权限、状态、成本、恢复、跨平台和可观测性六个维度上提供可验证的生产可靠性**。当前功能扩张明显快于可靠性建设，团队在选型和落地时，应给予后者的更高权重。

---

## 各工具详细报告

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills 社区热点

> 数据来源: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills 社区热点报告

**数据截止：2026-11-22**  
> 注：当前数据中的 PR 均标注为 **OPEN**；PR 评论数显示为 `undefined`，因此以下 PR 排行主要参考社区关注度、Issue 关联度、PR 热度点赞及更新活跃度。

## 1. 热门 Skills 排行

| 排名 | Skill / PR | 功能与社区热点 | 当前状态 |
|---|---|---|---|
| 1 | [mcp-builder：兼容 MCP 2.x 与自定义请求头](https://github.com/anthropics/skills/pull/1742) | 修复 `mcp>=2.0.0` 下客户端重命名、HTTP Header 配置方式变化导致的兼容问题，直接关联 [Issue #1668](https://github.com/anthropics/skills/issues/1668)。热点是 MCP SDK 升级后的真实可用性与向后兼容。 | **OPEN** |
| 2 | [skill-creator：隔离触发评测并处理 Windows/运行时失败](https://github.com/anthropics/skills/pull/1298) | 修复并行评测互相干扰、Windows `select()` 异常、工具扫描被无关异常中断，以及运行时失败被误判为“未触发”等问题。与 [Issue #1352](https://github.com/anthropics/skills/issues/1352) 的并行评测失真问题高度相关，是当前 Skill 研发基础设施的关键修复。 | **OPEN** |
| 3 | [skill-creator：支持直接执行 `package_skill.py`](https://github.com/anthropics/skills/pull/1681) | 修复脚本独立运行时出现 `ModuleNotFoundError`，并更新过时用法路径。关注点不是新能力，而是让打包、验证和分发链路开箱即用。 | **OPEN** |
| 4 | [skill-creator：正确解析 YAML frontmatter 标量](https://github.com/anthropics/skills/pull/1997) | 修复手工剥离引号和拼接续行导致的 YAML 元数据解析偏差，避免评测与描述优化使用错误输入。对 Skill 触发准确性和自动优化质量影响较大。 | **OPEN** |
| 5 | [webapp-testing：移除 `shell=True`](https://github.com/anthropics/skills/pull/1980) | 修复 Web 应用测试服务器启动脚本的命令注入风险，同时保留目录切换与命令链能力。热点集中在 Agent 执行用户或模型生成命令时的供应链与沙箱安全。 | **OPEN** |
| 6 | [docx：LibreOffice 超时判定及修订标记验证](https://github.com/anthropics/skills/pull/1792) | 不再把 `soffice` 超时误报为成功，并在确认 DOCX 不再包含修订标记后才报告完成。体现文档 Skill 从“能生成”转向“结果可验证”。 | **OPEN** |
| 7 | [xlsx：修复工作表级名称与外部链接别名识别](https://github.com/anthropics/skills/pull/2019) | 修复 `recalc.py` 对工作表作用域名称、别名等外部引用漏判的问题，直接关联 [Issue #2013](https://github.com/anthropics/skills/issues/2013)。关注 Excel 财务模型和风险检测的准确性。 | **OPEN** |
| 8 | [Pyxel：复古游戏开发 Skill](https://github.com/anthropics/skills/pull/525) | 指导 Claude 创建、调试和验证 Python 复古游戏，覆盖无头执行、输入驱动、逐帧检查和状态断言。自 3 月创建后持续更新至 11 月，体现长期打磨型垂直 Skill。 | **OPEN** |

**补充关注：**

- [Notion 规格转实现与量化恢复审计](https://github.com/anthropics/skills/pull/1245)：将产品/技术规格拆成可执行任务、验收标准及进度跟踪，贴近“规格驱动开发”。
- [Markdown 转视频/音频](https://github.com/anthropics/skills/pull/1703)：将 Markdown 转为带旁白的演示视频，代表多媒体生成自动化方向。
- [SCNet HPC](https://github.com/anthropics/skills/pull/1615)：覆盖 SSH、Slurm、集群发现和计算节点工作流，反映科研基础设施自动化需求。
- [智能合约审计与链上存证](https://github.com/anthropics/skills/pull/1771)：结合 Solidity/Rust 静态分析与区块链审计证明，属于高专业门槛的新兴方向。

---

## 2. 社区需求趋势

### 2.1 工作流自动化与团队级分发

[Issue #228：Claude.ai 支持组织级 Skill 共享](https://github.com/anthropics/skills/issues/228) 是讨论最明确的产品需求之一。社区希望 Skill 能像企业模板一样集中发布、统一更新并直接分发给团队，而非通过 Slack/Teams 传递 `.skill` 文件。

相关延伸需求包括：

- 组织级 Skill 库及权限控制；
- 团队版本同步和升级；
- 企业环境中的审计与治理；
- [Agent Governance Skill 提案](https://github.com/anthropics/skills/issues/412)所代表的策略执行、信任评分和审计轨迹。

### 2.2 可靠的质量控制与交付验证

[Reasoning Quality Gate Pipeline](https://github.com/anthropics/skills/issues/1385) 提议建立贯穿任务前校准、对抗式复核、交付前验证的三阶段质量门禁。

社区的共同诉求不是单纯“让 Claude 生成答案”，而是要求 Skill：

- 在执行前澄清目标和约束；
- 对结果进行独立或对抗式复核；
- 用测试、断言和产物检查确认交付；
- 避免“命令成功”被误认为“结果正确”。

这一趋势与 DOCX 修订验证、XLSX 外部链接识别、Pyxel 帧级验证等 PR 高度一致。

### 2.3 Skill 评测、触发准确性与元数据质量

[Issue #556：`run_eval.py` 触发率为 0%](https://github.com/anthropics/skills/issues/556) 和 [Issue #1352：并行评测导致假阴性](https://github.com/anthropics/skills/issues/1352) 表明，评测基础设施已成为核心痛点。

具体需求包括：

- 稳定、可重复地评估 Skill 是否被正确触发；
- 隔离并行 worker，消除共享状态和 UUID 串扰；
- 正确解析 YAML frontmatter；
- 区分“未触发”与“运行异常”；
- 支持 Windows 等跨平台环境；
- 优化 Skill 的 `description`，明确“何时使用”，而不只是“功能是什么”。

[Issue #2064](https://github.com/anthropics/skills/issues/2064) 进一步说明，触发描述质量已经成为 Skill 质量的核心组成，而不只是文档细节。

### 2.4 文档生成的专业化与版本可靠性

文档社区的主要需求正从“生成 DOCX/PPTX/Slack GIF”转向：

- 字体、孤行、标题分页和编号等排版质量控制；
- 修改接受与批注合并的可靠性；
- 输出文件结构有效；
- 渲染和超时错误可被正确识别；
- 避免输出无效 XML 或静默覆盖损坏文件。

相关 Issue 包括 [DOCX 合并 Run 导致无效 XML](https://github.com/anthropics/skills/issues/2018) 和 [Slack GIF 渐变末行颜色错误](https://github.com/anthropics/skills/issues/1868)。这表明用户期待的是**可交付、可验证的文档产物**，而非仅生成一个文件。

### 2.5 记忆压缩与长任务上下文管理

[compact-memory Skill 提案](https://github.com/anthropics/skills/issues/1329) 反映了另一项明确需求：把 Agent 的长期笔记和持久化记忆从自然语言转为更紧凑、符号化的表示，以降低上下文占用。

这一方向的潜在能力包括：

- 稳定记忆条目；
- 去重和压缩；
- 状态差异记录；
- 可回溯的决策日志；
- 与长周期任务自动衔接。

### 2.6 安全、信任边界与官方身份

[Issue #492：社区 Skill 使用 `anthropic/` 命名空间](https://github.com/anthropics/skills/issues/492) 是评论最多的安全问题。社区 Skill 冒充官方 Skill，可能诱导用户授予更高权限。

同时，[webapp-testing 命令注入修复](https://github.com/anthropics/skills/pull/1980) 表明 Skill 自身也在扩大 Agent 的执行权限。因此需求集中在：

- 清晰的官方/社区标识；
- 发布者身份与来源验证；
- 权限声明；
- 危险命令和脚本的沙箱隔离；
- 依赖、签名与供应链审计。

---

## 3. 高潜力待合并 Skills

以下 PR 尚未合并，但具备明确问题背景、落地价值或持续更新热度：

1. **[mcp-builder MCP 2.x 兼容修复](https://github.com/anthropics/skills/pull/1742)**  
   **潜力高。** 属于基础设施兼容性问题，影响真实 MCP 项目，且已有明确 Issue 关联；合并后可直接减少 SDK 升级造成的 Skill 失效。

2. **[skill-creator 触发评测稳定性修复](https://github.com/anthropics/skills/pull/1298)**  
   **潜力最高。** 同时覆盖并行隔离、Windows、运行时错误和负例误判等核心评测缺陷，直接影响所有 Skill 的开发质量。

3. **[skill-creator `package_skill.py` 直接执行支持](https://github.com/anthropics/skills/pull/1681)**  
   **潜力高。** 改动范围小、用户收益明确，可显著改善打包和验证脚本的可用性。

4. **[skill-creator YAML frontmatter 解析修复](https://github.com/anthropics/skills/pull/1997)**  
   **潜力高。** 元数据解析是评测、触发和描述优化的共同基础，修复可减少“评估结果与真实 Skill 元数据不一致”。

5. **[webapp-testing 命令注入修复](https://github.com/anthropics/skills/pull/1980)**  
   **潜力高。** 涉及明确安全漏洞，且可能成为仓库后续安全审查的参考实现。

6. **[docx 超时与修订标记验证](https://github.com/anthropics/skills/pull/1792)**  
   **潜力高。** 将文档 Skill 的成功标准从进程退出提升为产物级验证，契合当前质量门禁趋势。

7. **[xlsx 外部链接风险检测修复](https://github.com/anthropics/skills/pull/2019)**  
   **潜力中高。** 提升财务模型与 Excel 审计场景的漏报检出率，且与社区 Issue 直接关联。

8. **[Notion 规格转实现与恢复审计](https://github.com/anthropics/skills/pull/1245)**  
   **潜力中高。** “规格 → 任务 → 验收 → 进度”是一条完整企业工作流，符合社区对任务编排和交付追踪的需求。

**近期落地优先级判断：**  
`skill-creator` 的三项修复与 `mcp-builder` 兼容修复最值得优先关注，因为它们作用于 Skill 的创建、评测、打包、连接和运行基础链路，影响面大于单一领域 Skill。

---

## 4. Skills 生态洞察

**社区当前最集中的诉求，是把 Skills 从“能执行的提示词集合”升级为可信、可评测、可协作、可验证的企业级工作流组件——尤其需要解决安全信任边界、触发可靠性、团队分发和交付质量门禁问题。**

---

# Claude Code 社区动态日报｜2026-11-22

## 1. 今日速览

过去 24 小时没有新版本发布，仓库共 50 条 Issue 获得更新，讨论焦点集中在 **Desktop/移动端稳定性、权限与 Plan Mode 安全边界，以及 MCP/插件生态兼容性**。其中，无头模式用量异常、计划模式越权修改文件、SSH 远程环境误用本地插件路径等问题获得较高社区关注，分别达到 77、30 和 9 条评论。

---

## 3. 社区热点 Issues

### 1. 无头模式每 Token 消耗额度显著高于交互模式
[#97074](https://github.com/anthropics/claude-code/issues/97074) · **77 条评论 / 178 赞**

Linux 下 `claude -p`（`sdk-cli`）在相同工作负载下，每 Token 消耗约 **1.8 倍**的五小时窗口额度。问题直接关系自动化调用成本和 CI 预算，评论与点赞数均为今日最高。

### 2. Plan Mode 下模型仍直接修改源文件
[#38255](https://github.com/anthropics/claude-code/issues/38255) · **30 条评论 / 38 赞**

Claude Opus 4.6 在 Plan Mode 已激活时，仍修改了项目源文件，而非仅编辑计划文件。该问题触及权限隔离和“只规划、不执行”的核心安全承诺，对无人值守及受控开发流程影响较大。

### 3. Edge 切换标签页导致 Claude in Chrome 侧栏关闭
[#30873](https://github.com/anthropics/claude-code/issues/30873) · **37 条评论 / 47 赞**

macOS 上通过 Microsoft Edge 使用 Claude in Chrome 时，切换或打开标签页会关闭侧栏。较高评论量表明浏览器集成仍是跨浏览器体验中的高频痛点。

### 4. 跨会话、跨 Agent 的持久化“体验记忆”
[#85557](https://github.com/anthropics/claude-code/issues/85557) · **22 条评论**

社区希望引入可移植的 Experience Memory，使偏好、习惯和项目上下文能够跨 Claude 会话及 Agent 保留。这代表需求正从单次任务能力转向长期、连续的人机协作体验。

### 5. Android 端 Remote Control 未收到移动推送
[#87003](https://github.com/anthropics/claude-code/issues/87003) · **12 条评论 / 12 赞**

CLI 显示已请求移动推送，但 Android 始终未收到；该问题在不同手机和系统、较新 CLI 版本中仍可复现，说明 Remote Control 的跨端可靠性仍有明显缺口。

### 6. SSH 远程会话误用本地插件路径和 MCP 配置
[#25664](https://github.com/anthropics/claude-code/issues/25664) · **9 条评论**

通过 SSH 连接远程服务器时，Claude Code 将本地 macOS 插件路径及 MCP 配置传给远端 `ccd-cli`，因路径不存在而持续卡住，直到客户端超时。对远程开发和自定义工具链影响较大。

### 7. Desktop 创建的 Claude Docs 无法被当前会话访问
[#108161](https://github.com/anthropics/claude-code/issues/108161) · **6 条评论**

通过 Claude Code 的 Docs connector 创建文档后，当前会话无法读取，出现 `read denied`、Artifact lookup 404，且 `@Claude` 评论无法送达。这暴露了文档创建、权限和会话检索之间的集成断层。

### 8. Windows Cowork 开启语音模式后 MCP 工具不可用
[#97954](https://github.com/anthropics/claude-code/issues/97954) · **6 条评论 / 3 赞**

在 Windows Cowork 中，一旦激活语音模式，工具和 MCP connector 即不可用。问题表明语音交互与工具调用之间可能存在不完整的生命周期或状态管理。

### 9. macOS Desktop 空闲会话长期保留 CLI 与 MCP 进程
[#104888](https://github.com/anthropics/claude-code/issues/104888) · **2 条评论 / 3 赞**

用户报告 Desktop 的 Code 标签页会为每个已打开会话持续保留 `claude` CLI 及对应 MCP 进程，最终积累到 86 个 Claude 进程并产生约 26 GB swap。资源回收机制可能存在明显问题。

### 10. Desktop 与 CLI 共用配置但登录账号不同，导致权限误报
[#102201](https://github.com/anthropics/claude-code/issues/102201) · **3 条评论**

当 Desktop Code 标签页与 CLI 共用 `~/.claude.json`、却登录不同组织时，终端会话可能错误提示“Claude can't use thinking from another organization”。这反映多账号、多组织身份隔离仍不够可靠。

---

## 4. 重要 PR 进展

过去 24 小时仅检测到 **1 条更新 PR**，暂无足够数据列出 10 条重要 PR。

### 开放 Claude Code 源代码
[#41447](https://github.com/anthropics/claude-code/pull/41447)

- 目标：开放 Claude Code 源代码。
- 关联事项：关闭 #59、#456、#2846、#22002、#41434。
- 状态：PR 仍为开放状态。
- 社区反馈：当前未获得评论或点赞，尚未形成有效讨论。

---

## 5. 功能需求趋势

### 长期记忆与跨会话上下文
社区期待在会话、Agent 和项目之间共享偏好及经验，降低重复解释成本。代表性需求见 [#85557](https://github.com/anthropics/claude-code/issues/85557)。

### 多账号与身份管理
多订阅、多组织及 Desktop/CLI 混合使用场景，需要非交互切换、路径无关凭据和清晰的额度/登录状态展示，见 [#89993](https://github.com/anthropics/claude-code/issues/89993)。

### MCP Tasks 与长任务支持
社区希望支持 MCP Tasks 规范，使耗时工具调用具备任务状态、进度和结果追踪能力，见 [#102347](https://github.com/anthropics/claude-code/issues/102347)。

### 官方及企业可用的连接器生态
WhatsApp 等个人服务的官方 MCP 插件需求持续存在，见 [#91445](https://github.com/anthropics/claude-code/issues/91445)；Docs、GitHub 和 Office 集成的授权、状态同步与可用性问题也受到关注，分别见 [#108161](https://github.com/anthropics/claude-code/issues/108161)、[#111633](https://github.com/anthropics/claude-code/issues/111633) 和 [#111275](https://github.com/anthropics/claude-code/issues/111275)。

### Desktop 工作区与工作树控制
用户希望关闭自动创建 worktree，以减少目录污染和运维负担，见 [#110975](https://github.com/anthropics/claude-code/issues/110975)。

### 跨端控制与移动端管理
Remote Control 的 Android 推送、手机端模型切换、移动端批量会话管理均是新增需求焦点，分别见 [#87003](https://github.com/anthropics/claude-code/issues/87003)、[#111431](https://github.com/anthropics/claude-code/issues/111431) 和 [#111628](https://github.com/anthropics/claude-code/issues/111628)。

### Gateway 与 Tool Search 兼容
第三方端点、企业代理和非 Anthropic provider 下的 Tool Search 自动适配及故障恢复需求上升，见 [#105854](https://github.com/anthropics/claude-code/issues/105854) 和 [#109492](https://github.com/anthropics/claude-code/issues/109492)。

---

## 6. 开发者关注点

- **权限边界必须可靠**：Plan Mode 越权编辑、后台子 Agent 未继承 Bypass Permissions、符号链接触发重复审批，都指向权限传播和路径校验的一致性问题。参见 [#38255](https://github.com/anthropics/claude-code/issues/38255)、[#111614](https://github.com/anthropics/claude-code/issues/111614)、[#111613](https://github.com/anthropics/claude-code/issues/111613)。
- **成本可预测性**：无头模式的额度消耗差异会直接影响自动化脚本、Agent 编排和 CI 使用策略，是今日最强烈的成本反馈。参见 [#97074](https://github.com/anthropics/claude-code/issues/97074)。
- **远程开发兼容性**：SSH 会话需要严格区分本地与远端插件、MCP 配置及路径，不能复用仅在本机有效的资源。参见 [#25664](https://github.com/anthropics/claude-code/issues/25664)。
- **Desktop 生命周期管理**：空闲进程未回收、语音模式破坏工具可用性、连接器开关状态漂移，显示桌面端在状态同步和资源管理方面仍需加强。参见 [#104888](https://github.com/anthropics/claude-code/issues/104888)、[#97954](https://github.com/anthropics/claude-code/issues/97954)、[#111316](https://github.com/anthropics/claude-code/issues/111316)。
- **跨端体验一致性**：手机端选择模型后未应用到 Desktop 会话、Android 推送丢失、批量会话菜单被禁用，均影响 Remote Control 的基本信任。参见 [#111431](https://github.com/anthropics/claude-code/issues/111431)、[#87003](https://github.com/anthropics/claude-code/issues/87003)、[#111628](https://github.com/anthropics/claude-code/issues/111628)。
- **插件与 Marketplace 工具加载**：Windows Desktop 本地会话无法发现 Marketplace 安装的插件工具，说明安装、发现和运行时加载链路尚未完全打通。参见 [#82610](https://github.com/anthropics/claude-code/issues/82610)。
- **回归问题需要版本级追踪**：Run 按钮消失、符号链接审批变化、Desktop Code 与 CLI 账号互相干扰等问题，均与近期升级或新路径检查策略相关。参见 [#109506](https://github.com/anthropics/claude-code/issues/109506)、[#111613](https://github.com/anthropics/claude-code/issues/111613)、[#102201](https://github.com/anthropics/claude-code/issues/102201)。

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex 社区动态日报

**日期：2026-11-22**  
**数据范围：github.com/openai/codex 过去 24 小时**

## 1. 今日速览

- 今日社区焦点集中在 **Windows/WSL 桌面端更新后的会话迁移、权限与 SSH 连接异常**，其中多个新会话无法发送、Full Access 失效及历史记录消失形成连锁反馈。
- macOS 方面，**Codex App 启动崩溃**成为讨论度最高的 Issue；此外，Windows 审批弹窗异常、Cloud 授权失败和模型记忆误重建也较受关注。
- 代码侧推进活跃，PR 主要围绕 **TUI 交互体验、MCP 稳定性、Cloud 恢复机制、子代理异步通信与启动错误处理** 展开；今日没有新的 Release。

---

## 3. 社区热点 Issues

### 1. macOS Codex App 在壁纸着色回退路径启动崩溃

[#62650](https://github.com/openai/codex/issues/62650)

- **问题**：`26.1117.31558` 在特定壁纸配置下启动即退出，官方壁纸也可能触发，属于阻断启动的回归问题。
- **重要性**：影响范围直接覆盖常规 macOS 用户；用户可能需要放弃壁纸、动画或每显示器独立配置才能绕过。
- **社区反应**：57 条评论、18 个赞，为今日讨论度最高的问题。

### 2. 内置自动化权限限制与 Scheduled Tasks 文档冲突

[#59546](https://github.com/openai/codex/issues/59546)

- **问题**：桌面端内置自动化限制阻止任务访问外部 Web 系统，与 Scheduled Tasks 官方文档描述不一致。
- **重要性**：这不仅是权限问题，也是产品行为和文档契约不一致，会直接影响监控、定时巡检和外部系统集成。
- **社区反应**：24 条评论、26 个赞，赞数在今日 Issues 中最高。

### 3. Windows 新对话中输入非空但发送按钮仍被禁用

[#62393](https://github.com/openai/codex/issues/62393)

- **问题**：Windows 新建会话时，输入已有内容后 Send 按钮仍偶发呈禁用状态。
- **重要性**：属于核心交互阻断，直接影响 Windows 新会话的可用性，并与今日多起 Work 模式发送故障高度相关。
- **社区反应**：14 条评论；赞数较少，但反馈频率和影响范围值得关注。

### 4. 仓库转移后 Codex Cloud 环境创建失败且恢复时报未授权

[#61474](https://github.com/openai/codex/issues/61474)

- **问题**：个人 ChatGPT 账户在创建 Cloud 环境时失败，随后恢复会话出现 account not authorized。
- **重要性**：涉及环境创建、授权和会话恢复的完整链路，可能出现在代码托管权限变更或仓库转移之后。
- **社区反应**：12 条评论，暂无点赞，典型场景正在持续获得排查反馈。

### 5. ChatGPT Memory 检索丢失关系上下文并错误重建记忆

[#61703](https://github.com/openai/codex/issues/61703)

- **问题**：记忆检索未保留人物或事件之间的关系，随后以高置信度生成错误的“过去记忆”。
- **重要性**：错误记忆比单纯检索失败更危险，可能导致 Agent 基于虚构事实采取操作；属于模型行为与记忆系统可信度问题。
- **社区反应**：9 条评论，重点讨论错误复现、记忆纠错与系统提示注入边界。

### 6. Windows Work 新会话无法发送，并报本地 host ID 连接不存在

[#62918](https://github.com/openai/codex/issues/62918)

- **问题**：既有会话可正常发送，但新建 Work 会话无法发送首条消息；应用重启时出现 `Connection for host ID local not found`。
- **重要性**：可能是 UI 状态与 app-server 会话初始化同步失败的共同症状，影响 Windows 端全新工作流。
- **社区反应**：9 条评论、3 个赞。

### 7. macOS 仅主项目目录具有写权限

[#60815](https://github.com/openai/codex/issues/60815)

- **问题**：沙箱或权限控制仅允许写入主项目文件夹，其他合法目录不可写。
- **重要性**：影响 monorepo、多工作区以及跨目录构建流程，属于沙箱授权边界和可用性问题。
- **社区反应**：8 条评论，已有用户给出稳定的复现描述。

### 8. Windows 新线程丢失权限选择器，SSH 无法建立连接

[#61120](https://github.com/openai/codex/issues/61120)

- **问题**：新建线程后权限选择器消失，同时无法建立出站 SSH 连接。
- **重要性**：权限状态丢失直接阻断远程开发和受控执行，可能与近期 Windows 桌面端更新及 Work 模式回归相关。
- **社区反应**：7 条评论、1 个赞。

### 9. Windows/WSL 更新后聊天历史消失，并生成重复空项目

[#62915](https://github.com/openai/codex/issues/62915)

- **问题**：Codex 更新后，原本存在的 WSL 项目聊天历史消失，同时出现重复的空 WSL 项目。
- **重要性**：涉及本地会话持久化、项目身份迁移和升级兼容性；数据即使未被删除，也可能对用户不可见。
- **社区反应**：6 条评论；与自动迁移、跨主机会话归属问题相互关联。

### 10. Windows/WSL 自动迁移后项目无会话，但 Windows 历史仍存在

[#62735](https://github.com/openai/codex/issues/62735)

- **问题**：更新触发自动迁移后，项目被移至 WSL，但聊天仍留在 Windows 主机，项目视图表现为空。
- **重要性**：说明迁移逻辑尚未完整协调项目位置、会话存储和索引，是 Windows/WSL 用户当前最明显的数据连续性风险之一。
- **社区反应**：5 条评论；与 #62915、#62766 形成同一故障簇。

---

## 4. 重要 PR 进展

> 以下 PR 多数在数据窗口内已关闭，通常表示已完成合并或被关闭；不代表对应 Issue 已全部解决。

### 1. 防止 MCP reply POST 错误完成待处理请求

[#63075](https://github.com/openai/codex/pull/63075)

- 修复 Codex 与 MCP 服务端独立分配 JSON-RPC 请求 ID 时可能发生 ID 冲突的问题。
- 避免 MCP 回复请求意外 resolve Codex 自身 pending request，提升协议交互可靠性。

### 2. 共享环境启动错误截断逻辑

[#63077](https://github.com/openai/codex/pull/63077)

- 使用 `ErrorContextBudget` 统一限制模型可见的环境启动错误信息。
- 保留单条 256 字节、world state 总计 512 字节的约束，降低冗长错误对上下文的干扰。

### 3. 为派生的子代理增加异步用户消息选项

[#63069](https://github.com/openai/codex/pull/63069)

- 将异步用户消息能力从根代理扩展到 spawned subagents。
- 为根代理和子代理提供独立配置，使子任务可以主动回报进度或请求用户输入。

### 4. 将 turn metadata 传递给独立 Web Search

[#31911](https://github.com/openai/codex/pull/31911)

- 将每轮 Responses API metadata 附加到扩展工具调用。
- 通过 `x-codex-turn-metadata` 转发给独立 Web Search，并增加端到端回归测试。

### 5. Cloud 回复流在暂时故障后仍可恢复重试

[#63058](https://github.com/openai/codex/pull/63058)

- 避免重复断线耗尽当前恢复尝试次数。
- 调整恢复期限计算，减少排队和重新挂接时间挤占实际历史补拉与替换安装窗口的情况。

### 6. 保持 TUI transcript 选择光标可见

[#63056](https://github.com/openai/codex/pull/63056)

- 修复移动选择光标或调整视口后，光标可能移出可见区域的问题。
- 自动进行最小幅度滚动以展示当前选择，改善长会话浏览体验。

### 7. 在 TUI shell 模式中抑制补全弹窗

[#63054](https://github.com/openai/codex/pull/63054)

- 修复输入 `$env:HTTP_PROXY` 等 Shell 内容时错误触发命令补全菜单。
- 在 `!` shell 模式下关闭补全弹窗并取消活动文件搜索。

### 8. 在 transcript 中选择并复制 Markdown 块

[#63047](https://github.com/openai/codex/pull/63047)

- 新增按块选择 Markdown 内容的能力。
- 支持在同级块之间移动、扩展选择，以及按标题章节或外层块复制。

### 9. Code Mode helper 签名变化后刷新执行目录

[#63046](https://github.com/openai/codex/pull/63046)

- 修复增量更新嵌套工具后，模型仍看到旧 `functions.exec` 声明的问题。
- 当全局 helper 签名改变时刷新执行目录，避免恢复会话或启用新功能后使用过期工具定义。

### 10. 为 TUI slash 命令补全命名参数

[#63036](https://github.com/openai/codex/pull/63036)

- `/model`、`/permissions`、`/title`、`/statusline` 和 `/mcp login` 等命令开始提示命名 flags 及其可选值。
- 补全逻辑复用现有配置信息，降低用户记忆命令参数的负担。

---

## 5. 功能需求趋势

1. **Windows 与 WSL 会话连续性**
   - 社区高度关注更新后聊天历史消失、项目迁移不完整、重复空项目和会话留在旧主机。
   - 对应 Issues：#62915、#62735、#62766。

2. **可靠且可见的权限控制**
   - 权限选择器消失、Full Access 实际受限、SSH 被阻止，以及审批请求立即失效集中出现。
   - 对应 Issues：#61120、#59528、#62907、#63033、#60760、#62294、#61693。

3. **Windows 新会话与 Work 模式可用性**
   - 新建会话发送按钮失效、首条消息无法提交，以及 app-server 本地连接错误是当前高频场景。
   - 对应 Issues：#62393、#62918、#63003。

4. **自动化与外部系统集成**
   - Scheduled Tasks、自动监控、SSH 和 MCP 等能力受到开发者关注，但权限模型与实际行为仍存在落差。
   - 对应 Issues：#59546、#61120、#59528。

5. **模型与记忆可信度**
   - 社区不只关注模型是否完成任务，也开始系统反馈错误记忆、重复犯错、附件不可见和已修复代码被破坏等问题。
   - 对应 Issues：#61703、#63083、#63073。

6. **桌面端跨平台稳定性**
   - macOS 启动崩溃、网络连接失败、Computer Use 坐标点击异常，以及 Windows 升级回归同时出现。
   - 对应 Issues：#62650、#61645、#58474。

7. **TUI 高级交互和可维护性**
   - PR 集中完善 Markdown 块复制、命令补全、剪贴板、光标可见性、终端兼容与工作区导航。
   - 同时仍存在 Linux TUI 冻结、X11 粘贴异常及西里尔键盘快捷键失效等遗留问题。

---

## 6. 开发者关注点

- **升级不能破坏已有工作状态**：Windows/WSL 用户最担心更新后聊天记录与项目映射丢失，迁移必须具备可回滚、可见性和跨主机会话一致性。
- **权限必须是实际权限，而非仅是 UI 标签**：Full Access、权限选择器和审批弹窗之间存在明显不一致，直接影响 Git、SSH 和远程开发任务。
- **新会话初始化链路需要重点排查**：多个独立 Issue 均指向新线程发送失败，疑似涉及 Composer、Work handoff、app-server host 绑定和项目迁移之间的状态同步。
- **错误信息和恢复机制需要更透明**：Cloud 环境创建失败、授权丢失、流断线恢复及审批请求过期，均要求应用提供更准确、可操作且不会被误判为用户拒绝的状态反馈。
- **Agent 行为需要可验证的稳定性**：开发者希望记忆检索保持关系完整性、附件确实传入上下文，并避免反复破坏已经修复的代码。
- **CLI/TUI 的细节体验仍是高价值改进点**：终端兼容、键盘布局、剪贴板、Markdown 复制和 shell 补全虽然不如启动崩溃显眼，但直接影响日常高频使用。

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI 社区动态日报

**日期：2026-11-22**  
**数据范围：GitHub `google-gemini/gemini-cli` 过去 24 小时更新**

## 今日速览

过去 24 小时，Gemini CLI 发布 nightly 版本 `v0.71.0-nightly.20261122.geecccfcd5`，当日社区更新高度集中在 **Agent 子代理体系**：终止状态误报、配置失效、浏览器代理故障，以及子代理轨迹和任务跟踪等可观测性问题成为讨论中心。  
PR 侧则集中完善 **ACP 模式**、命令审批安全、沙箱兼容性和退出码体系，显示近期开发重点正从单纯扩展能力转向代理执行的可靠性与安全性。

---

## 版本发布

### `v0.71.0-nightly.20261122.geecccfcd5`

- 今日 nightly 版本发布，对应当日自动版本升级 PR。
- 数据中未提供完整 changelog，因此无法可靠归纳该 nightly 的逐项功能变更。
- 本日值得关注的相关开发方向包括：ACP 模式并行工具调用、大输出截断、OAuth 缓存修复，以及沙箱权限处理增强。

- 版本发布：[GitHub Release](https://github.com/google-gemini/gemini-cli/releases/tag/v0.71.0-nightly.20261122.geecccfcd5)
- 版本升级 PR：[#30399](https://github.com/google-gemini/gemini-cli/pull/30399)
- 完整变更：[Compare](https://github.com/google-gemini/gemini-cli/compare/v0.71.0-nightly.20261121.geecccfcd5...v0.71.0-nightly.20261122.geecccfcd5)

---

## 社区热点 Issues

### 1. 子代理达到 MAX_TURNS 后仍被报告为成功

- **Issue：** [#22323](https://github.com/google-gemini/gemini-cli/issues/22323)
- `codebase_investigator` 在达到最大轮次、实际未完成分析时，仍返回 `status: success` 和 `Termination Reason: GOAL`。
- 这会直接掩盖任务中断，可能让上层编排器误判结果可信度。
- 热度最高，14 条评论、2 个赞；属于 P1，核心诉求是让终止状态准确反映真实执行结果。

### 2. Generalist Agent 调用后无限挂起

- **Issue：** [#21409](https://github.com/google-gemini/gemini-cli/issues/21409)
- 报告称，Gemini CLI 委派给 generalist agent 后可能永久无响应，连简单创建文件夹也会卡住，等待最长可达一小时。
- 禁用子代理委派可暂时规避，说明问题可能集中在委派或子代理生命周期管理。
- 8 条评论、8 个赞，是当日社区支持度最高的 Agent 稳定性问题之一。

### 3. 浏览器 Agent 忽略 `settings.json` 覆盖项

- **Issue：** [#22267](https://github.com/google-gemini/gemini-cli/issues/22267)
- Browser Agent 忽略全局和项目级 `settings.json` 配置，包括 `maxTurns` 等限制。
- 这意味着用户无法可靠控制代理成本、运行时长和执行边界，属于配置契约不一致。
- 5 条评论，反映 Agent 注册与配置合并链路可能存在覆盖顺序或传递问题。

### 4. 工具过多时触发 400 错误

- **Issue：** [#24246](https://github.com/google-gemini/gemini-cli/issues/24246)
- 当环境中可用工具超过阈值时，Gemini CLI 可能遭遇 400 请求错误；摘要中同时提到“超过 400 个工具”和“超过 128 个工具”的表述，具体阈值仍需维护者确认。
- 工具扩展、MCP 集成与子代理组合会放大这一问题，暴露出缺少按任务动态裁剪工具作用域的机制。
- 3 条评论，属于 P2，对重度 MCP 用户和 Agent 开发者影响较大。

### 5. AST 感知文件读取、搜索与代码库映射

- **Issue：** [#22745](https://github.com/google-gemini/gemini-cli/issues/22745)
- 系统评估 AST-aware 工具能否更精确读取函数边界、减少无效上下文和降低轮次消耗。
- 配套子议题分别覆盖代码库映射、文件读取和语法搜索，探索 `tilth`、`glyph`、AST grep 等方案。
- 7 条评论、1 个赞，代表 Agent 从文本 grep 向结构化代码理解的演进方向。

### 6. 模型不主动使用 Skills 和 Subagents

- **Issue：** [#21968](https://github.com/google-gemini/gemini-cli/issues/21968)
- 用户反馈，即使当前任务与自定义 Gradle、Git 等 Skill 高度匹配，Gemini 也不会主动调用 Skills 或子代理。
- 这会削弱扩展机制的实际价值，也增加不必要的单体模型上下文压力。
- 7 条评论，体现出“能力已经存在，但自主调度不足”的问题。

### 7. Browser Agent 在 Wayland 环境下失败

- **Issue：** [#21983](https://github.com/google-gemini/gemini-cli/issues/21983)
- 浏览器子代理在 Wayland 环境中执行失败，但最终展示的终止原因仍可能显示为 `GOAL`。
- 该问题同时暴露浏览器兼容性与错误状态传播两类缺陷。
- 4 条评论、1 个赞；P1 优先级表明浏览器代理仍是当前高风险区域。

### 8. 模型在随机目录中创建临时脚本

- **Issue：** [#23571](https://github.com/google-gemini/gemini-cli/issues/23571)
- 当 Shell 执行受到限制时，模型倾向于在多个目录生成编辑脚本，增加工作区清理和提交噪声。
- 用户期待临时产物集中到可预测位置，或由工具层提供受控编辑机制。
- 3 条评论，暴露了“限制模型工具反而诱发副作用文件”的工程矛盾。

### 9. Agent 可能执行破坏性 Git 或数据库操作

- **Issue：** [#22672](https://github.com/google-gemini/gemini-cli/issues/22672)
- 在复杂 Git、分支管理或数据库维护场景中，模型可能选择 `git reset`、`--force` 等高风险操作。
- 需求聚焦于策略层阻止或劝阻破坏性行为，而不仅是依赖用户逐次确认。
- 3 条评论、1 个赞，是 Agent 安全治理的重要议题。

### 10. 子代理轨迹无法通过 `/chat share` 查看

- **Issue：** [#22598](https://github.com/google-gemini/gemini-cli/issues/22598)
- 子代理轨迹虽已由聊天录制服务保存，但用户难以访问和分享，无法方便地审查或评估代理行为。
- 需求将推动 Agent 可观测性从内部日志走向面向用户的调试界面。
- 2 条评论、1 个赞，是今日 Agent 评测与调试需求中的代表性问题。

---

## 重要 PR 进展

### 1. ACP 模式跳过沙箱切换前的管道 stdin 读取

- **PR：** [#30400](https://github.com/google-gemini/gemini-cli/pull/30400)
- 修复启用沙箱时，`gemini --acp` 无法响应启动阶段的 `initialize` 请求、导致 ACP 客户端挂起的问题。
- 方案是在 ACP 模式下跳过进入沙箱前的 stdin 读取，避免与后续沙箱进程竞争输入。
- 当日新建 PR，虽尚无评论，但直接关系到 ACP 与沙箱组合的可用性。

### 2. ACP 模式并行执行独立工具调用

- **PR：** [#30298](https://github.com/google-gemini/gemini-cli/pull/30298)
- 将 ACP 模式下原先串行执行的工具调用，改为对连续的、可并行的只读调用进行批处理。
- 有望降低多搜索、多读取场景的端到端延迟，并与标准 CLI scheduler 的行为对齐。
- 对应修复 [#30235](https://github.com/google-gemini/gemini-cli/issues/30235)。

### 3. ACP 模式截断过大的 Shell 与 MCP 工具输出

- **PR：** [#30297](https://github.com/google-gemini/gemini-cli/pull/30297)
- 修复 ACP 模式将 Shell 和 MCP 的大段输出原样传给模型的问题。
- 增加截断可降低上下文膨胀、请求体过大和长日志拖慢代理的风险。
- 对应修复 [#30233](https://github.com/google-gemini/gemini-cli/issues/30233)。

### 4. 防止受污染 Shell 命令生成永久放行规则

- **PR：** [#30196](https://github.com/google-gemini/gemini-cli/pull/30196)
- 修复“Always allow”受污染命令后，规则被错误扩大到命令根类别，例如放行未来所有 `npm ...` 命令的问题。
- 调整后，受污染命令应仅允许单次执行，避免不可信参数或构建文件变化扩大权限。
- 已关闭，属于安全优先级较高的修复。

### 5. OAuth 初始化失败后清理 Promise 缓存

- **PR：** [#30296](https://github.com/google-gemini/gemini-cli/pull/30296)
- `getOauthClient()` 此前会缓存失败的 `initOauthClient()` Promise，导致一次初始化失败污染整个进程生命周期。
- PR 在 Promise 被拒绝后将其从缓存中移除，允许后续重试。
- 对偶发 OAuth 初始化失败后的自助恢复尤其重要。

### 6. YOLO 模式下 Shell 解析失败时保留 `ASK_USER`

- **PR：** [#30295](https://github.com/google-gemini/gemini-cli/pull/30295)
- 修复 `PolicyEngine.checkShellCommand()` 在 YOLO 模式遇到解析错误时，无条件返回 `ALLOW` 的安全问题。
- 新逻辑保留原始 `ruleDecision`，避免解析失败被错误解释为允许执行。
- 属于企业策略与安全边界修复。

### 7. 统一 CLI 退出码和致命错误层级

- **PR：** [#30273](https://github.com/google-gemini/gemini-cli/pull/30273)
- 集中定义 `ExitCodes`，并将此前散落在 `errors.ts` 中的沙箱致命错误、轮次耗尽、工具过多等错误纳入统一映射。
- 有助于脚本、IDE 和自动化系统准确区分错误类型。
- 同时清理了硬编码数字退出码，提高跨模块一致性。

### 8. 改善沙箱权限拒绝识别与受限环境兼容性

- **PR：** [#30277](https://github.com/google-gemini/gemini-cli/pull/30277)
- 修复 POSIX 沙箱权限拒绝未被正确识别，以及容器化、受限执行环境中的兼容问题。
- 更准确的错误分类可避免把权限问题误报为模型失败或一般工具错误。
- 对应修复 [#29338](https://github.com/google-gemini/gemini-cli/issues/29338)。

### 9. Node 26 下遵循自定义 Fetch 超时配置

- **PR：** [#30281](https://github.com/google-gemini/gemini-cli/pull/30281)
- 升级核心 Undici 至 `7.30.2`，确保全局 dispatcher 能通过 Node 26 内置 fetch 使用的符号发布。
- 增加覆盖 Node 26 与旧 dispatcher 符号的回归测试；相关聚焦测试报告 31 项通过。
- 主要面向最新 Node 运行时兼容性和网络请求稳定性。

### 10. `gemini models` 补齐 `gemini-3.8-flash`

- **PR：** [#30194](https://github.com/google-gemini/gemini-cli/pull/30194)
- 修复 `gemini models` 未列出模型管理界面中已经可用的 `gemini-3.8-flash`。
- 通过失败测试复现并验证补丁，确保 CLI 命令与 `/model manage` 的模型列表一致。
- 已关闭，体现模型发现与新模型支持仍是高频兼容点。

---

## 功能需求趋势

### 1. Agent 子代理成为绝对主线

当日高优先级、高热度议题几乎都围绕子代理展开，覆盖：

- 任务终止和成功状态准确性
- 子代理配置继承
- 委派后的挂起与恢复
- Browser Agent 会话接管和锁恢复
- 子代理共享内存与并行协作
- 对称链接形式的 Agent 定义加载

代表 Issues：[#22323](https://github.com/google-gemini/gemini-cli/issues/22323)、[#21409](https://github.com/google-gemini/gemini-cli/issues/21409)、[#22267](https://github.com/google-gemini/gemini-cli/issues/22267)、[#18287](https://github.com/google-gemini/gemini-cli/issues/18287)。

### 2. 从“文本检索”升级到 AST 感知代码理解

社区希望代理通过 AST 精确识别函数边界、符号和代码结构，降低大文件读取带来的 token 浪费，同时改善代码库映射效果。

- 主议题：[#22745](https://github.com/google-gemini/gemini-cli/issues/22745)
- 代码库映射：[#22746](https://github.com/google-gemini/gemini-cli/issues/22746)
- 文件读取与搜索：[#22747](https://github.com/google-gemini/gemini-cli/issues/22747)
- 精准读取：[#19561](https://github.com/google-gemini/gemini-cli/issues/19561)

### 3. Agent 可观测性与评测体系

需求集中于：

- 查看和分享子代理轨迹
- 在 `/bug` 中包含子代理上下文
- 通过 `/chat share` 暴露内部执行过程
- 稳定内部评测并追踪质量趋势

相关 Issues：[#22598](https://github.com/google-gemini/gemini-cli/issues/22598)、[#21763](https://github.com/google-gemini/gemini-cli/issues/21763)、[#23166](https://github.com/google-gemini/gemini-cli/issues/23166)。

### 4. 任务跟踪从上下文内 Todo 转向持久化

社区希望用文件化 CRUD 替代仅依赖对话历史的 `WriteToDo`，以缓解 context rot、token 成本和跨会话状态丢失。

- [#18836](https://github.com/google-gemini/gemini-cli/issues/18836)
- [#21000](https://github.com/google-gemini/gemini-cli/issues/21000)

### 5. Skills 与子代理需要更强的自主调度

目前模型通常需要用户明确提示才会调用匹配的自定义 Skill 或 Subagent。后续重点可能是自动发现、按任务匹配和策略化委派。

- [#21968](https://github.com/google-gemini/gemini-cli/issues/21968)
- [#18285](https://github.com/google-gemini/gemini-cli/issues/18285)

### 6. IDE 与协议集成持续深化

ACP 方向当日出现启动挂起、工具输出过大、并行调用效率低等集中反馈。相关 PR 显示 ACP 正从基础接入走向性能、上下文和安全性的全面强化。

- [#30400](https://github.com/google-gemini/gemini-cli/pull/30400)
- [#30297](https://github.com/google-gemini/gemini-cli/pull/30297)
- [#30298](https://github.com/google-gemini/gemini-cli/pull/30298)

---

## 开发者关注点

1. **终止状态必须可信**  
   开发者最担心代理在未完成任务时仍报告成功。MAX_TURNS、异常退出和子代理中断应使用明确且可区分的终止原因，不能统一伪装成 `GOAL`。

2. **配置边界需要一致生效**  
   `settings.json` 中的 `maxTurns`、目录权限、路径解析及 Agent 注册行为应具备一致、可预测的优先级。

3. **工具数量和输出规模需要治理**  
   MCP、Skills 与子代理叠加后，工具过多可能直接导致 API 400；大型日志和目录树又会挤占上下文。动态工具裁剪与输出截断是共同诉求。

4. **安全审批不能被“宽松模式”意外绕过**  
   Shell 解析失败、命令受污染、构建文件变化等情形下，系统应倾向于 `ASK_USER` 或单次批准，而不是扩大永久放行范围。

5. **沙箱和受限环境的错误分类需要可靠**  
   容器、POSIX 沙箱、Wayland 和容器化 CI 中的权限拒绝或浏览器失败，需要被准确识别，避免误判成模型逻辑问题。

6. **调试信息必须覆盖完整调用链**  
   仅提供主会话的 `/bug` 报告已不够，开发者需要子代理配置、轨迹、终止原因和工具调用记录。

7. **模型应更主动使用现有能力**  
   自定义 Skills 和 Subagents 已具备较强能力，但自主发现和调用仍不稳定，直接影响效率与可扩展性。

8. **减少临时文件与破坏性操作**  
   代理需要受控的编辑和临时文件机制，并应在策略层限制 `git reset`、强制覆盖和数据库破坏性命令。

9. **并行化不能牺牲安全与一致性**  
   ACP 并行工具调用是明显效率收益，但只有只读、真正独立的调用才适合并发；审批、日志截断和结果排序也需要保持确定性。

10. **新模型与新运行时兼容性要同步维护**  
    `gemini-3.8-flash` 展示不一致、Node 26 fetch 行为变化等问题说明，CLI 的模型列表、网络栈和运行时支持需要持续跟进上游变化。

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI 社区动态日报

**日期：2026-11-22**

## 1. 今日速览

过去 24 小时发布 `v1.0.115-6`，重点修复组织策略插件安装、`/delegate` 未登录提示、Shell 命令取消，以及切换至 Copilot Fusion 时路由配置显示错误等问题。社区 Issue 仍集中在**会话与子代理管理、远程控制、MCP/工具兼容性、安装脚本和网络适配**；其中 `web_fetch` 在 macOS Surge Fake-IP 环境下的兼容问题被确认仍可复现。

## 2. 版本发布

### v1.0.115-6

- **组织策略插件安装更稳健**：若临时策略变更中断安装，系统可在下一次尝试时继续安装，无需等待常规重试延迟。
- **改进 `/delegate` 登录提示**：未登录时明确提示需要登录，不再表现为无响应。
- **Unix Shell 取消行为修复**：修复取消 Shell 命令相关问题。
- [Release v1.0.115-6](https://github.com/github/copilot-cli/releases/tag/v1.0.115-6)

### v1.0.115-5

- **优化本地会话存储**：长时间运行的本地会话占用更少磁盘空间，并可更快恢复。
- **修复模型路由提示**：从指定模型切换到 Copilot Fusion 时，CLI 现在会确认目标路由配置，而不是继续显示旧配置。
- [Release v1.0.115-5](https://github.com/github/copilot-cli/releases/tag/v1.0.115-5)

## 3. 社区热点 Issues

> 过去 24 小时共更新 14 条 Issue，以下按影响范围、讨论热度及工程价值筛选 10 条。

1. **Subagents started by other subagents can't be multi-turn**  
   嵌套子代理无法开启多轮对话，且 `background` 模式被静默忽略，`write_agent` 也会拒绝这类请求。该问题直接影响复杂 Agent 编排、后台任务和并行开发工作流，是本期最值得关注的 Agent 能力缺陷。  
   [Issue #5543](https://github.com/github/copilot-cli/issues/5543)

2. **Built-in GitHub MCP read tools are unavailable to custom agents when `gh` is on `PATH`**  
   当系统路径中存在 `gh` 时，自定义 Agent 无法通过内置 GitHub MCP Server 读取 Issue 等资源，即使已明确声明相关工具。问题涉及工具发现、命令冲突和 Agent 扩展生态，发布初期尚无评论但已获关注。  
   [Issue #5550](https://github.com/github/copilot-cli/issues/5550)

3. **Remote control fails on GitHub Mobile and github.com**  
   会话可以正常列出、同步和读取，但用户无法远程控制；GitHub Mobile 与网页端均出现 relay challenge 绑定错误。该问题直接影响移动端和跨设备 Agent 运维，目前保持开放并已有 3 条评论、1 个赞。  
   [Issue #5468](https://github.com/github/copilot-cli/issues/5468)

4. **web_fetch still rejects public URLs resolved to Surge Fake-IP**  
   macOS 用户启用 Surge Enhanced Mode 后，公共 HTTPS 地址被解析到 `198.18.0.0/15` 的 Fake-IP 段，`web_fetch` 因而拒绝访问。相关旧问题虽被关闭，但最新稳定版仍可复现，说明修复尚不完整。  
   [Issue #5544](https://github.com/github/copilot-cli/issues/5544)

5. **install.sh: VERSION=prerelease installs an older build than the latest stable release**  
   安装脚本使用 Git 的版本排序时，会把稳定版排在同版本预发布版之前，导致 `VERSION=prerelease` 可能安装较旧构建。该问题影响版本分发和升级可靠性，已有对应修复 PR。  
   [Issue #5547](https://github.com/github/copilot-cli/issues/5547)

6. **TLS handshake_failure to api.individual.githubcopilot.com on filtered network**  
   企业受管网络会拒绝 CLI 启动及模型发现请求，Windows Schannel 报错 `SEC_E_ILLEGAL_MESSAGE`。这暴露了 CLI 在企业代理、TLS 过滤和定制网络环境中的兼容性问题，需要人工进一步诊断。  
   [Issue #5546](https://github.com/github/copilot-cli/issues/5546)

7. **Add `resume_session` and `suspend_session` tools to session management**  
   社区希望 Agent 能够恢复已持久化会话，并可暂停活跃会话以释放资源、稍后继续。当前会话工具已支持创建、列出、发送消息、重命名和关闭，但缺少 suspend/resume 能力。  
   [Issue #5549](https://github.com/github/copilot-cli/issues/5549)

8. **Copilot CLI Infinite Loop on Empty bash Tool Call**  
   模型调用空参数 Bash 工具后，CLI 可能重复同一无效调用超过 5000 次，直至进程被终止。该问题会造成资源浪费和任务失控，反映出工具错误处理与重试上限仍需加强。  
   [Issue #1444](https://github.com/github/copilot-cli/issues/1444)

9. **Duplicate Item Errors**  
   上下文或模型请求处理中可能因重复项目 ID 返回 WebSocket 400 错误。该问题与上下文记忆及模型请求链路相关，已有 5 条评论和 8 个赞，是本期互动热度较高的问题。  
   [Issue #3558](https://github.com/github/copilot-cli/issues/3558)

10. **Ability to permanently enable binaries like `ls` across sessions**  
    用户希望为 `ls`、`grep`、`sed` 等常用命令配置持久化白名单，避免每个新会话重复确认权限。该需求反映频繁权限提示对日常 CLI 工作流的干扰。  
    [Issue #2256](https://github.com/github/copilot-cli/issues/2256)

**其他已关闭但值得留意的需求**

- 支持从嵌套会话中可靠执行 `/exit`：[Issue #4874](https://github.com/github/copilot-cli/issues/4874)
- 恢复会话后复用既有权限：[Issue #1696](https://github.com/github/copilot-cli/issues/1696)
- 更完整的上下文管理能力：[Issue #1682](https://github.com/github/copilot-cli/issues/1682)
- macOS Surge Fake-IP 原始报告：[Issue #5180](https://github.com/github/copilot-cli/issues/5180)

## 4. 重要 PR 进展

> 数据中仅有 3 条 PR 更新，以下按实际数量列出。

1. **Fix container smoke-test workspace permissions** — 已关闭  
   修复 amd64 与 arm64 容器冒烟测试失败：临时工作区使用 `0700` 权限，导致镜像运行时用户 UID 10001 无法访问；同时处理以 root 初始化 Git 时的权限问题。该 PR 直接提升容器化环境的发布验证可靠性。  
   [PR #5310](https://github.com/github/copilot-cli/pull/5310)

2. **install: sort stable releases after their prereleases** — 开放中  
   修复 `VERSION=prerelease` 的版本排序逻辑。通过调整 Git 的 `versionsort` 配置，确保稳定版之后优先选择同版本更新的预发布构建，避免安装旧版本。该 PR 已对应 Issue #5547。  
   [PR #5548](https://github.com/github/copilot-cli/pull/5548)

3. **Updated Copilot CLI default model in README** — 已关闭  
   将 README 中的 Copilot 默认模型由 Sonnet 4.5 更新为 Sonnet 4.6，属于文档与当前默认模型行为同步。  
   [PR #1512](https://github.com/github/copilot-cli/pull/1512)

## 5. 功能需求趋势

### 1. 会话生命周期管理

社区希望会话管理从“创建—运行—关闭”扩展为完整的 **suspend、resume、嵌套退出和权限继承**。尤其需要 Agent 工具能够恢复持久化会话、暂停闲置会话，并在跨会话时复用授权，降低人工干预。

- [Issue #5549](https://github.com/github/copilot-cli/issues/5549)
- [Issue #4874](https://github.com/github/copilot-cli/issues/4874)
- [Issue #1696](https://github.com/github/copilot-cli/issues/1696)

### 2. 多 Agent 与后台编排

嵌套子代理不能使用多轮对话、`background` 模式失效，反映出复杂 Agent 拓扑仍不成熟。需求重点包括：

- 子代理多轮消息；
- 后台子代理运行；
- 嵌套 Agent 的写入权限；
- 更稳定的任务调度和状态同步。

[Issue #5543](https://github.com/github/copilot-cli/issues/5543)

### 3. MCP 与工具互操作

自定义 Agent 在存在 `gh` 命令时无法使用内置 GitHub MCP 读取工具，暴露了 CLI 内置工具与外部 CLI、PATH 命令及 MCP Server 之间的命名和发现冲突。

[Issue #5550](https://github.com/github/copilot-cli/issues/5550)

### 4. 企业网络与代理兼容

社区同时关注 Surge Fake-IP、企业 TLS 过滤和远程 relay challenge。整体诉求是让 CLI 在代理、VPN、企业证书与受管 DNS 环境中保持可用，而不只是支持标准公网连接。

- [Issue #5544](https://github.com/github/copilot-cli/issues/5544)
- [Issue #5546](https://github.com/github/copilot-cli/issues/5546)
- [Issue #5468](https://github.com/github/copilot-cli/issues/5468)

### 5. 权限与生产力

常用二进制命令的持久化授权、恢复会话后的权限复用，是降低交互成本、提升自动化程度的高频需求。

- [Issue #2256](https://github.com/github/copilot-cli/issues/2256)
- [Issue #1696](https://github.com/github/copilot-cli/issues/1696)

### 6. 上下文与模型稳定性

重复项目错误、上下文管理诉求和空 Bash 调用死循环，表明模型调用、工具重试与上下文管理仍是影响 CLI 稳定性的核心环节。

- [Issue #3558](https://github.com/github/copilot-cli/issues/3558)
- [Issue #1682](https://github.com/github/copilot-cli/issues/1682)
- [Issue #1444](https://github.com/github/copilot-cli/issues/1444)

## 6. 开发者关注点

- **减少人工确认**：常用命令权限应可按二进制或路径持久化，并在恢复会话时继续生效。
- **提升 Agent 编排能力**：需要支持嵌套子代理、多轮交互和可靠的后台执行。
- **增强网络环境兼容性**：企业代理、Surge Fake-IP、TLS 过滤及移动端 relay 都需要更明确的诊断和兼容策略。
- **避免失控重试**：无效工具调用应快速失败并设置严格重试上限，防止死循环和资源消耗。
- **保证会话资源可控**：长时间会话的磁盘占用已得到改善，但暂停、恢复、跨设备控制和状态同步仍不完整。
- **提高安装与升级可靠性**：预发布版本排序问题已有修复 PR，用户更期待 CLI 正确识别并安装最新目标版本。
- **维护 MCP 工具一致性**：内置 MCP Server 不应因 `gh` 等外部命令存在而失效，自定义 Agent 需要获得一致的工具发现结果。

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode 社区动态日报｜2026-11-22

## 今日速览

过去 24 小时没有新版本发布，但开发重点明显集中在 **V2 稳定性、后台任务与并发执行、桌面端可靠性、会话管理及免费额度**。其中，多个 PR 已直接对应高关注 Issue，显示社区反馈正在快速进入修复流程；同时，免费额度不重置、Provider 异常重试、Windows 服务异常退出和 Desktop 渲染器卡死等问题仍较突出。

---

## 社区热点 Issues

### 1. 免费额度问题持续成为最高热度议题
[#59387](https://github.com/anomalyco/opencode/issues/59387) 作为免费层问题的统一入口，讨论量达到 **405 条评论**。反馈集中于“每日免费消息数不重置”“额度耗尽后提示异常”及 Desktop 免费功能不可用，说明额度展示、计数重置与客户端状态同步仍是近期最影响入门用户体验的问题。

### 2. Desktop 快速向上滚动会回弹到底部
[#56285](https://github.com/anomalyco/opencode/issues/56285) 报告在长会话底部快速向上滚动时，视口会突然弹回底部；旧历史又仅按块懒加载，导致用户难以一次滚回较早消息。该问题直接影响长会话阅读体验，已被标记为可复现。

### 3. 任务并行执行成为重要效率方向
[#47105](https://github.com/anomalyco/opencode/issues/47105) 请求提供 `task-parallel` 工具，将彼此独立的子任务并发执行，避免串行等待造成额外耗时。该需求已对应新的实现 PR，显示社区正积极推动 Agent 工作流从“单任务”向“并行编排”演进。

### 4. 会话分支、回退与树状历史需求升温
[#41363](https://github.com/anomalyco/opencode/issues/41363) 希望获得类似 Git 的会话树：从任意消息创建分支、继续执行并在不同分支间导航。相关功能也延伸至非破坏式 rewind、历史回放和 transcript replay，反映出用户对可审计、可回溯 Agent 操作的强烈需求。

### 5. 拒绝工具调用后，重启会错误恢复该轮对话
[#54180](https://github.com/anomalyco/opencode/issues/54180) 指出用户拒绝权限请求或取消工具调用后，系统却将其记录为服务关闭；下一次启动时，被拒绝的 turn 会被自动恢复。该问题已标记为可复现，并已有 PR 修复中断原因的传播逻辑。

### 6. Windows Desktop 可能无日志静默退出
[#65501](https://github.com/anomalyco/opencode/issues/65501) 报告 Windows 桌面端会突然消失，既无错误对话框，也无 shutdown 记录；后台服务却仍在运行。缺失退出原因记录使崩溃、主动退出和系统终止难以区分，直接增加了现场诊断难度。

### 7. macOS 27 上出现证书链验证失败
[#64835](https://github.com/anomalyco/opencode/issues/64835) 报告在 macOS 27、Bun 编译版 OpenCode 上，即使服务端提供完整且公开受信的证书链，仍会出现 `UNABLE_TO_GET_ISSUER_CERT`。问题涉及跨签名的 Sectigo R46、WoTrus 与 USERTrust 链，可能影响特定模型端点的 TLS 连接。

### 8. Desktop SSE 事件流导致渲染器挂起
[#64616](https://github.com/anomalyco/opencode/issues/64616) 指出 Desktop 的 `/api/event` SSE 流读取器可能使渲染器无响应，只能完全重启应用，而后台服务仍然健康。该问题暴露出 Desktop 在长连接、事件消费和请求队列管理方面的稳定性风险。

### 9. Windows 睡眠恢复后 SQLite 报错，服务持续返回 500
[#59189](https://github.com/anomalyco/opencode/issues/59189) 报告 Windows 从睡眠恢复后，服务可能因 `SQLiteError: disk I/O error` 启动失败；失败进程仍占用端口，导致 `/api/info` 返回 500、`/api/event` 返回 503。该问题涉及桌面服务启动、数据库恢复与失败进程清理。

### 10. OpenCode 免费每日额度可能结转至次日
[#65529](https://github.com/anomalyco/opencode/issues/65529) 报告每日限制没有在第二天重置，而是继续结转。与主免费额度 Issue 相互印证，表明免费层配额系统可能存在时间窗口、状态缓存或计数逻辑错误。

---

## 重要 PR 进展

### 1. 为并发子任务增加 `task-parallel`
[#65528](https://github.com/anomalyco/opencode/pull/65528)  
新增 V2 内置 `task-parallel` 工具，可并发运行 **2–5 个独立子任务**并统一等待结果，直接对应 [#47105](https://github.com/anomalyco/opencode/issues/47105)。这是提升复杂任务墙钟效率的重要能力。

### 2. 限制不完整 Provider 流的无限重试
[#65224](https://github.com/anomalyco/opencode/pull/65224)  
针对 OpenAI-compatible 端点返回 HTTP 200、但输出 token 为零且无 `finish_reason` 的情况设置重试上限，修复 Native Gemini 协议下可能出现的重试循环，对应 [#64920](https://github.com/anomalyco/opencode/issues/64920)。

### 3. 限制会话错误中保留的 Provider 响应体
[#65527](https://github.com/anomalyco/opencode/pull/65527)  
在会话错误中限制 Provider body 的大小，降低异常响应占用的内存和持久化空间。该改动与 Provider 重试治理相配合，有助于改善错误路径下的资源稳定性。

### 4. 正确传播 Session 中断原因
[#65364](https://github.com/anomalyco/opencode/pull/65364)  
不再将所有 `session.interrupt` 统一标记为 `user`，而是传递真实的停止原因，对应 [#65279](https://github.com/anomalyco/opencode/issues/65279)。这也有助于修复“拒绝调用被记录为 shutdown”类问题。

### 5. Full Code Mode 下优化超长工具结果
[#65524](https://github.com/anomalyco/opencode/pull/65524)  
当工具结果超过 `tool_output.max_lines/max_bytes` 时，保留约 **60% 头部和 40% 尾部**，减少中间关键内容被完全截断的情况，提升长输出可读性。

### 6. 统一处理错位工具调用
[#65494](https://github.com/anomalyco/opencode/pull/65494)  
将 misplaced tool call 的处理集中到统一位置，并在输出前附加说明；同时修复 `full_codemode` 下 Bash 工具的行为。属于核心工具执行链的重要重构。

### 7. `opencode api` 支持实时输出 SSE
[#65382](https://github.com/anomalyco/opencode/pull/65382)  
此前 `opencode api` 会缓冲至 EOF 才输出，现在成功的 `text/event-stream` 响应会直接写入 stdout，对应 [#55701](https://github.com/anomalyco/opencode/issues/55701)。这让 CLI 更适合作为事件流消费与调试工具。

### 8. 图片生成改为服务端后台任务
[#64770](https://github.com/anomalyco/opencode/pull/64770)  
将图片生成迁移为服务器后台作业，与视频生成模式保持一致。`POST /api/experimental/generate/image` 返回作业信息，客户端可异步轮询，减少长请求阻塞。

### 9. 修复 GitHub Copilot OAuth Token 刷新
[#63456](https://github.com/anomalyco/opencode/pull/63456)  
通过现有凭据服务支持 GitHub OAuth token 刷新，对应 [#63457](https://github.com/anomalyco/opencode/issues/63457)。目标是减少 Copilot 登录因 token 过期而失效的问题。

### 10. TUI 增加会话内查找
[#64870](https://github.com/anomalyco/opencode/pull/64870)  
新增会话内搜索，可用 `<leader>f`、`super+f` 或 `/find` 打开，功能参考 Desktop 的查找栏，对应 [#4714](https://github.com/anomalyco/opencode/issues/4714)。这将明显改善长会话导航效率。

---

## 功能需求趋势

1. **Agent 并行编排**  
   独立子任务并发执行、并行 fan-out 和更高效的 wall-clock 表现，是当前最明确的效率型需求。

2. **会话树、非破坏式回退与分支导航**  
   用户希望像操作 Git 一样回滚、fork、重放和比较会话状态，实现可审计、可恢复的 Agent 工作流。

3. **后台任务与非阻塞执行**  
   长耗时 Bash、图像生成及其他工具调用希望进入后台任务体系，界面不应被阻塞。

4. **桌面端项目管理与状态可见性**  
   包括删除项目、显示子 Agent 的实际模型和 reasoning effort、恢复子 Agent 会话，以及展示更可靠的退出和崩溃状态。

5. **更强的会话检索和导航**  
   TUI 查找、会话内搜索、树状历史和更顺畅的滚动加载共同指向“大规模会话管理”需求。

6. **模型与推理档位控制**  
   社区希望能在界面中为特定 Agent 持久化默认模型、reasoning effort，并正确映射 `high` 与 `xhigh` 等档位。

7. **API 能力扩展**  
   V2 Session API 的 JSON Schema 结构化输出受到关注，表明自动化工作流希望获得更稳定、可解析的模型输出。

8. **客户端扩展能力**  
   Agent widgets、交互式会话组件以及 MCP Events 推送，显示出社区正在探索超越纯文本终端的 Agent 交互方式。

9. **Scratch 目录与存储优化**  
   避免默认使用 RAM-backed `/tmp`，并推动运行产物上传、PDF 去重和 R2 offload，反映出对大型任务存储成本的关注。

10. **编码代理行为治理**  
    对错误完成声明、指令违规、权限绕过和跨会话异常行为的报告增加，社区期待更强的可靠性、权限约束和可追溯性。

---

## 开发者关注点

- **免费额度机制必须可靠**：重置时间、每日配额结转和 Desktop 状态显示成为当前最突出的用户信任问题。
- **长会话体验仍不成熟**：快速滚动回弹、历史分块加载、查找和树状导航共同影响大型项目的可用性。
- **Provider 兼容性差异明显**：部分模型端点会返回空流、非标准 `finish_reason` 或不完整证书链，错误处理需要更稳健。
- **Desktop 服务生命周期需要加强**：Windows 静默退出、睡眠恢复后的 SQLite 错误、OOM 后 session drain 失败，以及 macOS SSE 渲染器卡死，集中在服务恢复、进程清理和长连接管理。
- **错误与中断语义必须准确**：用户拒绝、工具取消、服务关闭和崩溃需要可区分，否则会导致错误恢复、日志失真和难以诊断。
- **Agent 并行化价值突出**：将独立工作拆成 2–5 个子任务并发执行，是社区当前最明确的新增效率杠杆。
- **输出处理需要兼顾上下文预算与信息完整性**：工具结果应在限制体积的同时保留头尾关键信息，避免简单截断丢失诊断依据。
- **结构化、可自动化接口需求增加**：JSON Schema、SSE 实时输出和异步作业接口表明 OpenCode 正被更多嵌入自动化开发流程。

> 注：今日无新版本发布；以上内容依据过去 24 小时更新的 Issues 与 PRs 汇总，反映的是社区当前讨论与开发方向，并不等同于已经进入正式发行版。

</details>

<details>
<summary><strong>jcode</strong> — <a href="https://github.com/1jehuang/jcode">1jehuang/jcode</a></summary>

# jcode 社区动态日报｜2026-11-22

## 今日速览

jcode 发布 **v1.0.3**，重点升级 Antigravity/Google 登录、API Key 脚本化配置与 Jarvis 常驻语音能力，同时修复配额耗尽自动切换、图片输入和推理强度切换等问题。  
社区开发重点集中在**后台任务状态同步、测试环境隔离、Provider 兼容性及 TUI 交互体验**；近 24 小时更新了 3 个 Issue、12 个 PR。

---

## 版本发布

### v1.0.3

主要更新：

- **Antigravity Google 登录**
  - 支持 Google 个人账户登录。
  - 默认使用 Gemini 4（Neon）。
  - 账户路由统一展示 Gemini、Argon、Claude 的合并配额状态。
- **API Key 配置**
  - 支持通过脚本设置各 Provider 的 API Key。
  - 提供“粘贴任意 API Key”登录及自动 Provider 检测。
- **Antigravity 能力完善**
  - 修复配额耗尽时的账户池自动故障转移，覆盖 HTTP 429、`QUOTA_EXHAUSTED` 等情况。
  - 正确声明图片输入能力，多模态图片不再被静默丢弃。
  - 支持 `low / medium / high / xhigh / swarm` 推理强度切换，默认 `gemini-4-neon-low`。
- **常驻 Jarvis 语音**
  - 新增 always-on Jarvis voice 支持。
- **TUI 改进**
  - 精简 `/login` Provider 选择列表，并保留完整目录过滤和“More providers”扩展入口。

此外，过去 24 小时连续发布了多个 Linux 自开发预发布版本，重点验证上述登录、路由、配额故障转移与多模态修复。

发布链接：[v1.0.3](https://github.com/1jehuang/jcode/releases/tag/v1.0.3)

---

## 社区热点 Issues

> 过去 24 小时实际更新 3 条 Issue；以下按重要性列出全部条目。

### 1. TUI 缺少在同一窗口开启空白会话的方式

当前会话运行后，无法在原窗口、当前目录启动无上下文的新会话：`/resume` 只能恢复历史会话，而没有 `/new` 或“new session”入口。该问题直接影响高频使用者和自动化工作流，建议补充显式会话生命周期与快捷键。

社区状态：Issue 创建于 11 月 11 日，更新时已有 **2 条评论**，但尚无点赞或明确维护者结论。

链接：[Issue #2138](https://github.com/1jehuang/jcode/issues/2138)

### 2. 后台任务文件未遵循 `JCODE_HOME`，导致隔离测试污染共享目录

后台任务的状态与输出文件仍写入系统临时目录中的 `jcode-bg-tasks`，没有遵循项目推荐的 `JCODE_HOME` 隔离约定。自动化和并行测试可能因此泄漏状态、互相覆盖任务结果，属于可复现性和测试隔离问题。

社区状态：新 Issue，**暂无评论与点赞**。

链接：[Issue #2272](https://github.com/1jehuang/jcode/issues/2272)

### 3. 执行 `bg cancel` 后，TUI 状态栏仍显示 Running

取消成功后，状态文件已经记录为 `Failed / Cancelled by user`，但客户端任务行仍保持运行中，直至重启并 `--resume`。这会误导用户判断后台任务是否仍在执行，也妨碍可靠的任务编排。

社区状态：新 Issue，**暂无评论与点赞**；已有对应修复 PR 提交。

链接：[Issue #2270](https://github.com/1jehuang/jcode/issues/2270)

---

## 重要 PR 进展

### 1. `jcode serve` 支持陈旧 Socket 恢复并新增 `--replace`

当前 `jcode serve` 遇到 Socket 被占用时只能给出笼统错误，无法区分活动服务器与崩溃遗留的失效 Socket。PR 计划识别并报告存活 PID，并允许通过 `--replace` 安全替换陈旧 Socket。

链接：[PR #2269](https://github.com/1jehuang/jcode/pull/2269)

### 2. 为子 Agent 注入明确的角色约束

`AGENTS.md` 当前按会话统一注入，Spawned worker 也会继承协调器专属的“只委派、不亲自执行”指令，可能导致子 Agent 无法正常工作。PR 将区分协调器与执行 Worker 的提示词。

链接：[PR #2237](https://github.com/1jehuang/jcode/pull/2237)

### 3. 为 kcode Provider Pool 增加纯账户解析器

通过独立、无副作用的解析逻辑选择 kcode 账户池成员，降低路由逻辑与账户状态的耦合，同时提升配额切换和测试覆盖的可维护性。

链接：[PR #2248](https://github.com/1jehuang/jcode/pull/2248)

### 4. Claude 路由回放已签名的 thinking 内容

默认 Claude 路由在多轮对话中没有完整保留或回传扩展思考块。该 PR 修复 `MultiProvider` 下签名 thinking 的存储与重放问题，减少跨轮推理上下文丢失。

链接：[PR #2274](https://github.com/1jehuang/jcode/pull/2274)

### 5. macOS 识别 Kitty Terminal，改善快捷键与应用内启动

Kitty 默认不设置 `TERM_PROGRAM`，导致 jcode 无法识别终端类型。该 PR 通过 Kitty 特有环境变量进行探测，恢复快捷键和应用内进程启动的终端集成。

链接：[PR #2273](https://github.com/1jehuang/jcode/pull/2273)

### 6. TUI 改为仅在 Ctrl+Click 时打开链接

普通鼠标点击此前会直接打开 URL，影响终端中的文本选择。PR 遵循终端惯例，将链接打开行为限定为 Ctrl+Click，降低误触。

链接：[PR #2204](https://github.com/1jehuang/jcode/pull/2204)

### 7. 多行粘贴显示为编号块，并记录展开历史

多行粘贴将按编号块展示，同时保存展开状态与历史内容，改善长文本输入的阅读、定位和复用体验。

链接：[PR #2202](https://github.com/1jehuang/jcode/pull/2202)

### 8. 修复后台任务取消后状态行不消失

取消操作此前只写入终态，没有发布 `BackgroundTaskCompleted` 事件。PR 在取消后发布静默完成事件，并标记为 `Failed / Cancelled by user`，使 TUI 状态及时收敛。

链接：[PR #2271](https://github.com/1jehuang/jcode/pull/2271)

### 9. 修正 Bedrock Converse 的缓存输入统计

共享辅助逻辑此前只按 Anthropic/Claude 名称识别缓存，无法正确解析 Bedrock Converse 的 uncached input、cache read 与 cache write，导致上下文用量被低估。PR 统一 Bedrock 路由下的缓存统计。

链接：[PR #2200](https://github.com/1jehuang/jcode/pull/2200)

### 10. 通过 OSC 7501 向 Herdr Desktop 报告 Agent 状态

新增 `herdr_core` 集成，使 Herdr Desktop 能识别 jcode Agent 及其运行状态，而不是将面板视为普通终端，为桌面端的状态展示和生命周期联动奠定基础。

链接：[PR #2206](https://github.com/1jehuang/jcode/pull/2206)

---

## 功能需求趋势

1. **会话与工作流管理**
   - 社区希望在同一 TUI 窗口创建全新空白会话。
   - 任务取消、完成及异常退出后，状态展示必须及时一致。
   - `jcode serve` 需要更可靠的 Socket 生命周期和自恢复能力。

2. **模型与 Provider 兼容**
   - Antigravity、Gemini、Claude、Bedrock 和 kcode 是近期核心方向。
   - 需求集中在账户配额池、自动故障转移、推理强度控制、签名 thinking 跨轮回放，以及缓存 Token 统计准确性。

3. **身份认证与凭据配置**
   - Google 个人账户正迁移至 Antigravity。
   - 开发者需要统一、脚本化、自动识别 Provider 的 API Key 配置方式。
   - 原生 OAuth 与安全凭据存储也是持续建设方向。

4. **TUI 交互质量**
   - 多行粘贴需要有结构化展示与历史管理。
   - 链接打开、Todo Header、终端检测等细节越来越受到重视。
   - 子 Agent 需要清晰、隔离的角色提示，避免错误继承协调器指令。

5. **测试隔离与可重复性**
   - `JCODE_HOME`、测试 Session 和独立 Socket 的约定尚未覆盖后台任务目录。
   - 社区正推动所有持久化状态统一进入隔离目录，以支持可靠并行测试。

6. **桌面端集成**
   - Herdr Desktop 集成表明 jcode 正从纯 CLI/TUI 向可感知的桌面 Agent 客户端演进。

---

## 开发者关注点

- **状态一致性**：后台任务取消后，持久化状态与 TUI 展示不一致，是当前最直接的可信度问题。
- **隔离配置必须完整生效**：仅设置 `JCODE_HOME` 不足以隔离所有后台数据，测试环境仍可能污染共享临时目录。
- **Provider 路由复杂度上升**：账户池、配额切换、OAuth/API Key、多模型路由和推理强度需要统一且可测试的设计。
- **多轮推理上下文不可丢失**：Claude 签名 thinking 的正确回放，直接影响 Agent 在长会话中的推理连续性。
- **Token 与缓存计量准确性**：Bedrock 等非 Anthropic 路由需要独立、正确的缓存语义，避免上下文预算被低估。
- **TUI 应尊重终端习惯**：普通点击用于文本选择、Ctrl+Click 用于打开链接，以及 Kitty 等终端的准确识别，都是日常使用体验的基础。
- **子 Agent 提示词需要角色隔离**：协调器规则不应无条件传播给执行 Worker，否则可能造成委派死锁或 Worker 无故不执行。
- **发布节奏偏激进**：过去 24 小时同时出现正式版和多个 Linux 自开发预发布版本，提升了修复可见度，也增加了用户判断稳定版本和回归风险的成本。

---

## 开发者关注点

开发者反馈集中在以下痛点：

- **后台任务状态不可信**：取消后 UI 仍显示运行中。
- **测试环境存在状态泄漏**：`JCODE_HOME` 未覆盖后台任务文件。
- **账户与模型路由复杂**：配额、OAuth、API Key、故障转移需要更稳定的一致性。
- **上下文统计可能失真**：缓存 Token 与 thinking 跨轮保留直接影响长会话表现。
- **TUI 细节影响高频使用**：粘贴、链接、终端识别和会话切换均被频繁提出。

链接：[Issue #2138](https://github.com/1jehuang/jcode/issues/2138) · [Issue #2272](https://github.com/1jehuang/jcode/issues/2272) · [Issue #2270](https://github.com/1jehuang/jcode/issues/2270)

</details>

<details>
<summary><strong>pi</strong> — <a href="https://github.com/earendil-works/pi">earendil-works/pi</a></summary>

# Pi 社区动态日报｜2026-11-22

## 今日速览

过去 24 小时无新版本发布，但社区集中讨论了长会话上下文膨胀、压缩策略与工具描述开销等问题。Bedrock 多模态兼容、OpenAI/Gemini 模型适配、headless 进程退出和会话恢复稳定性也持续受到关注；当日更新的 3 个 PR 均已关闭，暂无明确合入进展。

## 社区热点 Issues

1. **Bedrock：OpenAI 模型拒绝 `toolResult.content` 中嵌套的图片**  
   涉及 Bedrock 上 OpenAI 模型的工具结果多模态转换。提案者已准备修复和回归测试，但 PR 因贡献流程要求被自动关闭，因此问题仍待处理。  
   [Issue #8643](https://github.com/earendil-works/pi/issues/8643)

2. **OpenAI 登录后 GPT-6.1 Sol 上下文窗口仍显示 272K，而非账户目录中的 500K**  
   ChatGPT 账户模型目录与 Pi 实际采用的上下文预算不一致，会提前触发压缩、降低可用会话容量。  
   [Issue #11021](https://github.com/earendil-works/pi/issues/11021)

3. **`searchTools()` 每次返回完整工具描述，单次约 36KB**  
   实测中该工具一次会话调用 73 次，消耗约 950KB 模型可见上下文，占整个线程约 25%。社区期待按需返回摘要、签名或延迟加载详细 schema。  
   [Issue #12165](https://github.com/earendil-works/pi/issues/12165)

4. **压缩摘要会在每次更新时持续膨胀**  
   某会话经过九次压缩后，摘要从 17K 字符增长到 164K；第九次压缩耗时 588 秒并输出 75K token。问题可能与“保留全部旧信息”的更新提示有关。  
   [Issue #12242](https://github.com/earendil-works/pi/issues/12242)

5. **`pi -p` 在 stdio MCP 服务连接后无法退出**  
   headless 模式已输出结果，但只要成功连接的 stdio MCP 服务仍在线，进程就不会结束，只能手动终止。这直接影响 CI、脚本和批处理调用。  
   [Issue #12238](https://github.com/earendil-works/pi/issues/12238)

6. **OpenAI Completions 的 `finish_reason: "error"` 不会自动重试**  
   流式请求可能以 `finish_reason: "error"` 中途结束，目前未被纳入自动重试逻辑，GitHub Copilot/Gemini 等兼容接口尤其容易遇到。  
   [Issue #12206](https://github.com/earendil-works/pi/issues/12206)

7. **新发布的 pi-package 无法被 npm search 收录**  
   带 `pi-package` 关键词和有效 manifest 的 `pi-affix-prompt` 仍无法通过 npm 搜索发现，因此也无法进入依赖 npm search 的 pi.dev 包画廊。  
   [Issue #7885](https://github.com/earendil-works/pi/issues/7885)

8. **Anthropic 4.5 别名仍被标记为 “(latest)”**  
   即使已有更新模型，模型选择器仍可能把旧一代 4.5 模型标为最新，影响用户选型。  
   [Issue #12379](https://github.com/earendil-works/pi/issues/12379)

9. **恢复的 Kimi 会话无法选择实际已发送给提供商的工具**  
   工具存在于 active loadout、系统提示和 provider payload 中，但恢复会话后模型仍无法调用；新建会话则正常，暴露了恢复状态与工具注册同步问题。  
   [Issue #12383](https://github.com/earendil-works/pi/issues/12383)

10. **上下文溢出判断误将 429、5xx 和配额错误视为 overflow**  
    错误分类可能触发错误的恢复流程；codemode 还会把仍在运行的调用标记为 cancelled，导致状态与实际执行不一致。  
    [Issue #12382](https://github.com/earendil-works/pi/issues/12382)

> 补充：Bedrock 上 Grok 4.7 不接受重放的 `reasoningContent.reasoningText.text` 也值得模型适配团队关注。  
> [Issue #12393](https://github.com/earendil-works/pi/issues/12393)

## 重要 PR 进展

> 过去 24 小时仅有 3 个 PR 更新，且均已关闭，未形成公开的合入进展。

1. **按模型上下文窗口计算 durable 压缩摘要预算**  
   将摘要预算从固定的 `0.8 × reserveTokens` 调整为 `max(1, min(10% × contextWindow, model.maxTokens))`，让不同上下文窗口的模型获得更匹配的压缩预算。  
   [PR #12380](https://github.com/earendil-works/pi/pull/12380)

2. **上下文编辑后保留基于 usage 的估算值**  
   修复 `estimateProjectedContextTokens` 的判断逻辑：即使较新的 `context_edit` 或压缩记录存在，也不应无条件丢弃提供商返回的实测 usage，从而改善上下文用量展示与压缩决策。  
   [PR #12378](https://github.com/earendil-works/pi/pull/12378)

3. **Fork/tooling**  
   标题未提供具体改动说明，且 PR 已关闭，暂无法判断其实际范围和合入状态。  
   [PR #12390](https://github.com/earendil-works/pi/pull/12390)

## 功能需求趋势

### 1. 上下文与压缩效率

这是当前最集中的方向：

- 工具 schema 搜索结果应按需精简，避免重复占用上下文。
- 压缩摘要需要设定明确预算、去重和稳定裁剪策略。
- 压缩预算应随模型上下文窗口动态调整。
- 需要提供 `/context` 等只读诊断工具，展示系统提示、工具、历史、缓存和压缩余量。  
  [Issue #12377](https://github.com/earendil-works/pi/issues/12377)

### 2. 模型目录与提供商兼容性

- 修正 ChatGPT 登录后的模型上下文上限。
- 支持 Bedrock 上 OpenAI 工具结果图片和 Grok reasoning 字段。
- 修正 Gemini `xhigh` thinking 映射。
- 保持 Anthropic 模型目录的 “(latest)” 标签准确。  
  [Issue #12391](https://github.com/earendil-works/pi/issues/12391)

### 3. 可靠性与错误恢复

- 对流式 `finish_reason: "error"` 增加自动重试。
- 准确区分上下文溢出与 429、5xx、配额错误。
- 避免恢复会话后工具注册与 provider payload 不一致。
- 防止写入被 `ENOSPC/EDQUOT` 截断后，下一次追加与残片粘连。  
  [Issue #12386](https://github.com/earendil-works/pi/issues/12386)

### 4. 扩展与工具生态

- 允许不同扩展注册同名工具，并通过来源限定名称消除冲突。
- 让工具参数预处理失败时返回完整、可供模型消费的错误结果。
- 支持 durable 模式按 run 条件中止，并返回被撤销的内容。
- 为 skills 和 prompt template 引入可选命名空间。  
  [Issue #8834](https://github.com/earendil-works/pi/issues/8834)

### 5. 包分发与发现

npm 发布后的新 pi-package 无法及时进入搜索和 pi.dev 画廊，反映出包索引、关键词和命名空间的发现机制仍不稳定。  
[Issue #7885](https://github.com/earendil-works/pi/issues/7885)

### 6. TUI 与终端体验

- 修复货币文本中的未闭合 `$` 导致后续 Markdown 加粗失效。
- 修复一个工具结果包含多张图片时全部重叠。
- tmux 客户端接入后动态刷新超链接支持。
- 修复 p2 dock 高度变化造成 transcript 跳动。  
  [Issue #12389](https://github.com/earendil-works/pi/issues/12389)  
  [Issue #12384](https://github.com/earendil-works/pi/issues/12384)  
  [Issue #12392](https://github.com/earendil-works/pi/issues/12392)  
  [Issue #12368](https://github.com/earendil-works/pi/issues/12368)

## 开发者关注点

开发者反馈主要围绕以下痛点：

- **长会话成本不可控**：工具描述、历史摘要和重复上下文可能占据显著 token 预算，且缺乏细粒度诊断入口。
- **压缩机制正在放大问题**：摘要不降反增、耗时过长，固定预算也与不同模型的上下文规模不匹配。
- **错误语义不够准确**：provider 的流式错误、限流和服务端故障未得到统一处理，重试及上下文溢出判断容易误判。
- **模型元数据存在陈旧或不一致**：上下文窗口、thinking 映射和 “latest” 标签可能与实际服务能力不一致。
- **自动化场景需要可靠退出**：stdio MCP 的生命周期不应阻塞 `pi -p`，否则 CI 和无人值守任务容易挂起。
- **扩展生态需要更稳健的命名与冲突策略**：同名工具、命名空间资源及恢复会话中的工具状态都需要更明确的约定。
- **会话文件必须具备崩溃安全性**：磁盘写满时不能静默产生损坏或不可恢复的会话记录。

</details>

---
*本日报由 [Big Model Radar](https://github.com/96loveslife/big_model_radar) 自动生成。*
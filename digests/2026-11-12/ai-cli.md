# AI CLI 工具社区动态日报 2026-11-12

> 生成时间: 2026-11-12 06:41 UTC | 覆盖工具: 8 个

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

**数据日期：2026-11-12**  
**对比范围：** Claude Code、OpenAI Codex、Gemini CLI、GitHub Copilot CLI、Kimi Code CLI、OpenCode、jcode、pi

---

## 1. 生态全景

当前 AI CLI 的竞争重点已从单纯的模型能力，转向**代理执行工程**：工具执行是否真实、权限是否可预测、长任务是否可取消与恢复，以及多端会话是否保持一致。  
各项目普遍在补齐 OAuth/MCP、并发与线程语义、Windows/WSL、终端兼容、远程隔离和资源治理等生产级短板。  
社区反馈高度一致地指出，**“表面成功”比彻底失败更危险**：任务被误报完成、上下文压缩后重复执行、子代理达到轮次上限仍返回成功，均会直接破坏自动化可信度。  
产品形态正在分化：Codex 和 Copilot CLI 强调 IDE、桌面端与 GitHub/云服务生态；Claude Code 聚焦模型驱动的终端代理与权限治理；Gemini CLI 强调整体子代理体系；OpenCode、jcode 和 pi 则更注重可嵌入、可扩展与开发者自定义。  
此外，AI CLI 已开始扩展为 MCP、Skills、子代理、ACP、OTel 等能力组成的代理平台，而不再只是“终端里的代码补全工具”。

---

## 2. 各工具活跃度对比

> Issue、PR 数为日报所述统计口径；部分项目仅展示热点 Issue，未给出完整数量，因此以“已知更新量”表述。

| 工具 | 今日 Issues | 今日 PRs | Releases | 活跃度判断 |
|---|---:|---:|---|---|
| **Claude Code** | 50 条更新，展示热度前 30 条 | 0 | 无新版本 | **高**：无发布但问题反馈密集，权限、执行一致性、子代理与资源治理是主线 |
| **OpenAI Codex** | 未披露总数，至少 10 个热点 Issue | 至少 10 个重要 PR | `rust-v0.167.2`，另有 5 个 alpha | **很高**：发布、Issue、PR 三线活跃，底层可靠性修复集中 |
| **Gemini CLI** | 未披露总数，至少 10 个热点 Issue | 至少 10 个重要 PR | 无新正式 Release | **很高**：子代理、ACP、Windows 和安全策略迭代密集 |
| **GitHub Copilot CLI** | 38 条 | 0 | `v1.0.110-2`、`v1.0.110-3` | **高**：Windows、会话状态和输出模式回归集中 |
| **Kimi Code CLI** | 无活动 | 无活动 | 无 | **静默期**：本期无可观测开发活动 |
| **OpenCode** | 未披露总数，至少 10 个热点 Issue | 至少 10 个重要 PR | `process-daemon v0.5.2` | **很高**：V2、Desktop、安全和事件一致性同步推进 |
| **jcode** | 5 条 | 至少 10 个重要 PR | `v1.0.0-preview.424` | **中高**：规模较小但 PR 密集，突出交互、MCP、Provider 和可观测性 |
| **pi** | 未披露总数，至少 10 个热点 Issue | 至少 10 个重要 PR | 无新版本 | **高**：长上下文、durable、扩展机制和 Provider 适配推进明显 |

### 活跃度解读

- **Codex 最具“全链路开发”特征**：稳定版发布、alpha 通道、平台端 Issue 与底层 PR 同时活跃，工程成熟度最高的一组。
- **Claude Code 用户规模与问题暴露面较大**：50 条更新但无新版本，说明当前主要矛盾是既有能力的可靠性和治理，而非缺少新功能。
- **Gemini CLI 与 OpenCode 正处于快速工程化阶段**：热点集中于子代理、浏览器、会话恢复和 Desktop 生命周期，功能面快速扩张。
- **Copilot CLI** 的活跃量高度集中于 Windows 和会话状态，且存在“Issue 已关闭但缺少修复说明”的信任问题。
- **jcode 与 pi** 的绝对社区规模较小，但 PR 密度较高，属于快速迭代、架构导向的中小型项目。

---

## 3. 共同关注的功能方向

### 3.1 子代理与多代理编排

这是当前最明显的跨项目共识。

- **Claude Code**：远程 Agent 被静默降级成本地 Worktree；`/goal` 无法停止；并行子代理耗尽磁盘和 CPU。
- **Gemini CLI**：子代理达到 `MAX_TURNS` 仍被报告为成功；Generalist Agent 无限挂起；配置未传递到 Browser Agent。
- **Codex**：上下文压缩后重放已完成请求并中断 delegated task；SDK 并发 run 被静默拆成不同 Thread。
- **OpenCode**：standalone 会话被后台服务意外恢复，且未继承原权限和步数限制。
- **pi**：多图输入可能中断长期 Agent；durable 模式缺少稳定的扩展生命周期。
- **jcode**：推进结构化 `ask_user`、模型持久化及多 Agent 模型一致性。

**共同诉求：**

1. 正确区分自然完成、轮次耗尽、用户取消、超时和失败；
2. 子代理状态、轨迹、配置和终止原因可观察；
3. 并发任务不得静默拆分、重复执行或丢失；
4. 后台恢复必须继承原会话权限、预算和步骤限制。

---

### 3.2 权限、隔离与安全执行

多个工具正从“提示确认”转向“系统级可验证边界”。

- **OpenCode** 的工作区沙箱需求获得 **84 赞、113 评论**，是所有工具中最突出的安全议题之一；同时修复了 MCP 空表单被自动接受的问题。
- **Claude Code** 社区要求 Auto Mode 使用原生文件工具而非 Bash；并指出 remote 隔离静默降级、Bypass Mode 误拦截等权限语义问题。
- **Gemini CLI** 关注破坏性 Git、数据库操作、Shell 沙箱和临时脚本治理。
- **Codex** 修复 Windows 沙箱 ACL、权限注册和 URL 安全策略误判。
- **Copilot CLI** 的 `/allow-all` 仍然无法抑制 Bash 确认，且安全护栏持续以 HTTP 422 拦截正常本地调试。

**趋势判断：**“是否弹窗”已不是唯一安全指标；更重要的指标是工作区边界、命令级策略、隔离位置、权限继承和失败解释是否一致。

---

### 3.3 OAuth、MCP 与认证生命周期

- **Claude Code**：MCP 重认证会在登录完成前清除 token，破坏并发会话。
- **Codex**：Remote MCP access token 过期后未使用 refresh token；相关 PR 正补齐取消安全、并发 `401` 和 scope 更新。
- **Copilot CLI**：Google Workspace MCP 因 issuer 尾斜杠不匹配而失败。
- **OpenCode**：新增 GitHub OAuth token 刷新。
- **jcode**：修复 MCP transport 所有权、取消和重载竞态，并增加按服务器管理工具开关。
- **pi**：开始以延迟工具和命名空间降低大型工具目录的上下文成本。

**共同诉求：** OAuth/MCP 必须支持断线重连、并发刷新、失败回滚、scope 更新和可诊断日志，而不能只覆盖单请求成功路径。

---

### 3.4 长任务、上下文压缩与恢复

- **Claude Code**：`/goal` 持续重试，临时目录可占用约 **1 TB** 磁盘，并行代理导致 CPU 饱和。
- **Codex**：上下文压缩后可能重放已完成请求；Cloud 流中断后需自动恢复。
- **Gemini CLI**：轮次耗尽被误报为 `GOAL`；`/bug` 缺少子代理上下文。
- **OpenCode**：SSE 静默 **45 秒**即重启共享服务；大型会话库冷启动时 browser attach 失败。
- **pi**：Compaction 接近上下文上限时循环并静默结束工具循环；工具集变化还会破坏缓存前缀并重复计费。
- **jcode**：增加会话内空白会话需求，体现任务隔离诉求。

**趋势判断：** 长任务的核心能力正在从“模型能继续想”转向**可暂停、可取消、可恢复、可计量且不重复执行**。

---

### 3.5 Windows、IDE 与终端兼容性

几乎所有主力项目都在处理平台碎片化。

- **Codex**：Windows 更新后无法重启、Computer Use 截图边框残留、app-server 功能协商失败、沙箱 ACL 异常。
- **Copilot CLI**：Entra/WAM 登录崩溃、Windows 沙箱下 .NET 构建失败、WSL2 ARM64 `/copy` 失败。
- **Claude Code**：WSL2 Remote 中语音听写无法粘贴；IDE 默认设置与文件关联回归。
- **Gemini CLI**：PowerShell AST 检查阻塞 Node 事件循环、含空格路径安装失败、Wayland Browser Agent 失败。
- **OpenCode**：Windows Desktop 浏览器工具全部返回空结果。
- **jcode**：iTerm2 下 kitty CSI-u 片段泄漏到输入框。
- **pi**：Windows `pi -p` 不退出，以及 Alacritty、Kitty、Ghostty 等终端协议兼容问题。

**结论：** Windows 与 IDE/终端集成仍是 AI CLI 最大的工程债务区之一，也是企业采用时最容易触发阻塞的区域。

---

### 3.6 可观测性、计费与资源治理

- **Claude Code**：用户要求每周额度重置、配额展示与实际限制一致。
- **Codex**：新增可刷新的 OTLP HTTP Exporter 请求头，并处理容量误报、模型计数和用量透明度。
- **Gemini CLI**：修正模型输出 token 上限，并加强工具裁剪以避免大量工具触发 400。
- **OpenCode**：展示付费模型价格，修复高步骤数会话导致的成本失控。
- **pi**：工具变更导致提示词前缀偏移和重复计费，通过延迟工具降低 token 成本。
- **jcode**：推进 OTEL、OSC 9 Agent 状态输出和 ACP intent。

**趋势判断：** AI CLI 正在补齐传统工程系统的基础能力，包括 **trace、token、费用、任务状态和资源预算**。

---

## 4. 差异化定位分析

| 工具 | 功能与目标用户侧重 | 核心技术路线 | 竞争护城河与短板 |
|---|---|---|---|
| **Claude Code** | 面向高强度终端编码、复杂仓库操作和多步骤代理任务；强调模型自主执行与细粒度权限 | 模型驱动的原生工具调用、Bash/Worktree、Claude Desktop/VS Code/Remote Control 协同 | 模型与工具协同体验强；但远程隔离、工具语义、任务生命周期和资源治理仍不稳定 |
| **OpenAI Codex** | 面向 Codex CLI、桌面端、IDE、Remote/Dots 和 Cloud 的跨端开发平台 | Rust 核心、App Server/SDK、Cloud/Remote、MCP、Responses/Vertex 工具流、多平台沙箱 | 工程化和状态一致性领先；Windows、跨端线程发现、OAuth 和压缩重放问题突出 |
| **Gemini CLI** | 面向 Google/Gemini 用户的多代理开发与浏览器自动化 | Subagents、Browser Agent、Skills、ACP、Shell/文件工具 | 子代理体系最鲜明；但错误状态、配置生效、Wayland 和危险操作防护需加强 |
| **GitHub Copilot CLI** | 面向 GitHub/企业用户、VS Code 生态及非交互式自动化 | GitHub 账号、ACP、会话库、Shell/沙箱、Agent/Skill 扩展 | GitHub 生态与分发优势明显；Windows、权限状态机、ACP 落库和可追溯修复流程存在明显短板 |
| **OpenCode** | 面向重视模型开放性、Desktop 体验、自定义 Agent 与插件的开发者 | 插件化 Agent、事件持久化、Desktop/TUI、浏览器工具、PTY daemon | 扩展灵活、迭代速度快；V2 会话恢复、权限继承、配置热重载和 Desktop 稳定性仍在爬坡 |
| **jcode** | 面向多 Provider、自定义终端工作流、ACP/MCP 和结构化交互的开发者 | Rust/TypeScript 混合式 CLI、Provider 抽象、MCP server 管理、OTel/终端协议 | 小而全、结构化交互有特色；社区规模较小，预览版 Windows 未签名，成熟度待验证 |
| **pi** | 面向重视扩展协议、durable 存储、Provider 适配和终端可组合性的高级用户 | 扩展 API、durable 运行时、Chord/Radius 备份、Responses API、延迟工具 | 架构扩展能力强；Compaction、计费、Provider 真实能力映射和跨平台边界仍复杂 |
| **Kimi Code CLI** | 本期没有足够数据判断定位 | 本期无开发活动 | 建议等待后续发布、Issue 和 PR 数据，再评估其生态活跃度与产品方向 |

### 定位差异总结

- **Codex** 更像“跨端开发平台”，**Claude Code** 更像“模型驱动的终端代理操作系统”。
- **Gemini CLI** 的差异化是 **Subagent + Browser Agent + Skills**，但核心可靠性尚未跟上功能扩张。
- **Copilot CLI** 胜在 GitHub 生态和分发，短板是跨平台状态一致性与修复透明度。
- **OpenCode、jcode、pi** 都强调可扩展性，但分别侧重 Desktop/插件、结构化交互/多 Provider、扩展 API/durable 存储。

---

## 5. 社区热度与成熟度

### 5.1 社区热度

**第一梯队：Codex、Claude Code、Gemini CLI、OpenCode**

- Codex、OpenCode 同时具备 Release、热点 Issue 和大量底层 PR，工程活动最完整。
- Claude Code 虽无新版本，但 50 条更新说明用户规模和场景覆盖广。
- Gemini CLI 的子代理问题形成集中讨论，技术影响范围大。

**第二梯队：GitHub Copilot CLI、pi**

- Copilot CLI 以 38 条 Issue 更新保持较高讨论量，Windows 问题尤其集中。
- pi 社区绝对规模较小，但 Provider、durable、Compaction 和扩展生命周期问题技术密度高。

**第三梯队：jcode、Kimi Code CLI**

- jcode 只有 5 条 Issue，但 PR 数量和功能推进较多，呈现“小团队高密度开发”特征。
- Kimi Code CLI 本期无活动，暂不能据此判断项目停滞，只能认定为数据窗口内静默。

### 5.2 成熟度判断

| 成熟度层级 | 工具 | 判断依据 |
|---|---|---|
| **相对成熟，持续补强生产可靠性** | Codex、Claude Code、Copilot CLI | 功能面广、用户反馈量大；已有稳定发布通道，但仍有大量跨平台和状态一致性缺陷 |
| **快速迭代，工程化追赶中** | Gemini CLI、OpenCode | 功能扩张明显，PR 密集；子代理、浏览器、Desktop、恢复机制尚在快速修正 |
| **架构导向、成熟度待观察** | jcode、pi | 技术设计有特色，但社区规模、发布稳定性和跨平台验证不足 |
| **本期数据不足** | Kimi Code CLI | 无活动，无法形成可靠判断 |

成熟度不能只看功能数量。当前领先工具的共同短板恰恰是：**测试矩阵没有覆盖真实企业环境中的权限组合、断线重连、Windows 多账户、长上下文压缩和后台恢复。**

---

## 6. 值得关注的趋势信号

### 6.1 “执行真实性”正在成为首要质量指标

多个工具都出现类似问题：

- Claude Code 声称完成但实际未执行；
- Gemini CLI 达到 `MAX_TURNS` 仍返回成功；
- Codex 压缩后重放已完成请求；
- OpenCode 被终止会话又被后台恢复。

**对开发者的启示：** 评估 AI CLI 时，不能只看 demo 或最终文本，应建立自动化验收：核对工具调用、文件差异、Git 状态、进程结果和最终报告是否一致。

### 6.2 Agent 安全将从“弹窗确认”升级为“能力隔离”

工作区沙箱、remote/local 执行边界、后台恢复权限继承和 MCP elicitation 正成为核心能力。

**对开发者的启示：** 企业部署应优先评估：

- Agent 能否访问工作区外文件；
- 远程模式失败时是否静默降级；
- 后台恢复是否继承原始权限；
- 危险操作是否由系统策略而非模型自觉阻止。

### 6.3 长任务需要独立的运行时，而不是仅靠模型上下文

`/goal` 无限重试、45 秒 SSE 静默重启、1 TB 临时目录、上下文压缩循环，都说明 Agent Runtime 必须独立管理：

- 并发上限；
- 磁盘和 CPU 配额；
- 超时与心跳；
- 暂停、取消和恢复；
- 幂等执行与费用上限。

**对开发者的启示：** CI/CD 中的 Agent 不应只依赖对话状态，应将任务、权限、预算和检查点作为外部持久化状态管理。

### 6.4 OAuth/MCP 的难点已从“能否连接”转向“生命周期一致性”

刷新令牌、并发 `401`、scope 更新、取消、进程重载和 session resume 都可能破坏认证状态。

**对开发者的启示：** MCP 生产集成至少应覆盖断网重连、令牌轮换、服务端取消、客户端崩溃和多会话并发测试。

### 6.5 Windows 与 IDE 集成将决定企业采购优先级

Codex、Copilot CLI、Claude Code、Gemini CLI 均同时出现 Windows 更新、凭据、沙箱、输入和扩展连接问题。Linux/macOS 体验已不足以代表真实企业环境。

**对开发者的启示：** 选型时应要求供应商提供企业真实环境矩阵，而不是只测试本机终端。

### 6.6 工具目录将走向动态裁剪与延迟加载

Gemini CLI 已出现大量工具触发 400；pi 开始通过命名空间和延迟加载降低成本。

**对开发者的启示：** Agent 工具数量不会无限增长，而会按任务动态选择。系统设计应支持工具命名空间、能力发现和按需激活，而非一次性将全部工具塞入提示词。

### 6.7 可观测性正从日志升级为产品核心能力

OTel、ACP intent、OSC 9 状态、子代理轨迹、模型 token 上限和费用展示都在加强。

**对开发者的启示：** 评估工具时，应检查是否能够回答：当前任务在哪个 Agent、调用了什么工具、消耗多少 token/费用、为何停止、能否恢复。

### 6.8 发布频率不再等于成熟度

Codex、Gemini CLI、OpenCode 都有密集 PR，但高并发开发同时意味着回归面扩大。Copilot CLI 的无 PR 修复和直接关闭 Issue，反而暴露了修复可追溯性问题。

**对开发者的启示：** 生产采用应优先选择具备稳定通道、回滚机制、回归测试和变更追踪的项目；预览版和 alpha 版本应与稳定版严格隔离。

---

## 决策建议

### 优先选择成熟平台型工具

适合需要**跨端会话、桌面端、IDE、云执行、企业身份体系**的团队：

- 首选评估 **Codex**，其发布、PR 和跨端能力最完整；
- 若已深度使用 GitHub/VS Code 生态，可重点评估 **Copilot CLI**，但需验证 Windows 与 ACP 会话可靠性；
- 若偏好模型自主代理和多 Provider，可评估 **Claude Code**，但应规避其远程隔离、长任务和执行一致性的已知风险。

### 优先选择多代理与扩展型工具

适合研究或构建**自定义 Agent 编排、Skills、Browser Agent、插件体系**的团队：

- **Gemini CLI**：子代理方向突出，但建议等待关键可靠性问题收敛；
- **OpenCode**：扩展和 Desktop 潜力较大，但权限沙箱与会话恢复仍需谨慎；
- **jcode / pi**：适合愿意深度定制、接受预览风险的高级用户。

### 暂缓大规模生产采用的情形

- 关键流程依赖无提示的 remote 隔离；
- 任务不可重复执行或不可接受额外费用；
- 运行在 Windows 多账户、WSL2、代理网络或企业 MCP 环境；
- 无人值守任务缺少外部步骤限制、磁盘配额、取消机制和结果核验；
- 项目要求可追溯修复，但供应商主要通过无关联 PR/commit 的补丁版发布。

**总体判断：** AI CLI 已进入“功能扩张与工程收敛并行”的阶段。未来决定采用率的，不只是模型效果，而是**执行是否可信、状态是否一致、权限是否透明、任务是否可控，以及故障是否可恢复**。

---

## 各工具详细报告

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills 社区热点

> 数据来源: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills 社区热点报告

> 数据截止：2026-11-12  
> 口径说明：PR 列表未提供实际评论数，且显示值均为 `undefined`、点赞为 0。因此，下文“热门 Skills”主要依据 PR 排名、跨仓库相关 Issue 热度、问题覆盖面及功能代表性筛选；无法可靠断言具体 PR 的真实评论数。

## 1. 热门 Skills 排行

| 排名 | Skill / PR | 功能与社区热点 | 当前状态 |
|---|---|---|---|
| 1 | [`skill-creator`：修复触发评估、Windows 与运行时异常](https://github.com/anthropics/skills/pull/1298) | 社区最关注的问题不是“如何生成 Skill”，而是**生成后能否可靠触发和评估**。该 PR 修复并行评估相互干扰、Windows `select()` 失败，以及运行时异常被误判为非触发等问题，直接对应高热度 Issues [#556](https://github.com/anthropics/skills/issues/556) 和 [#1352](https://github.com/anthropics/skills/issues/1352)。 | Open |
| 2 | [`mcp-builder`：兼容 MCP 2.x 与自定义 HTTP Headers](https://github.com/anthropics/skills/pull/1742) | 聚焦 MCP SDK 升级兼容和自定义请求头。热点是外部 API 接入、鉴权、连接稳定性及新版 SDK 迁移，属于 Agent 工具连接基础设施的高频痛点。 | Open |
| 3 | [`webapp-testing`：移除 `shell=True`、修复元素发现](https://github.com/anthropics/skills/pull/1980) | 修复测试服务器启动时的命令注入风险；配套 PR 还改善了 textarea/select 的识别。反映社区对**浏览器测试能力与安全边界**的双重关注。 | Open |
| 4 | [`docx`：验收修订、超时及 XML 完整性](https://github.com/anthropics/skills/pull/1792) | 不再把 LibreOffice 超时误报为成功，并在输出中检查残留修订标记。相关 Issues 还暴露了合并文本时 namespace 丢失的问题（[#2018](https://github.com/anthropics/skills/issues/2018)）。热点是文档生成后的**可验证交付**，而非仅生成文件。 | Open |
| 5 | [`xlsx`：修复外部链接与作用域定义名称检测](https://github.com/anthropics/skills/pull/2019) | 修复工作表级 defined names、别名及外部链接的漏报，直接对应财务与数据处理场景中“公式是否引用外部文件”的审计需求。 | Open |
| 6 | [`skill-creator`：支持直接打包与正确解析 YAML](https://github.com/anthropics/skills/pull/1681) / [`parse_skill_md` YAML 修复](https://github.com/anthropics/skills/pull/1997) | 解决 `package_skill.py` 无法独立执行、使用路径过时，以及手写 YAML 解析破坏引号/续行的问题。说明 Skill 工具链正从“可用”走向**可安装、可自动化、结果一致**。 | Open |
| 7 | [`document-typography`：文档排版质量控制](https://github.com/anthropics/skills/pull/514) | 检测孤行、寡行、标题悬挂和编号错位等 AI 生成文档常见缺陷。热点并非内容生成，而是提升文档的**出版级视觉质量**。 | Open |
| 8 | [`md2video-audio`：Markdown 转带配音视频](https://github.com/anthropics/skills/pull/1703) | 将 Markdown 经 Marp 等流程转为 MP4，并生成类人语音讲解，体现“文档内容自动多媒体化”的需求。 | Open |

补充热门方向还包括：

- [`pyxel`：Python 复古游戏开发、调试与验证](https://github.com/anthropics/skills/pull/525)——强调无头运行、输入驱动测试和帧级验证。
- [`proofcore-contract-auditor`：Solidity/Rust 智能合约静态审计及审计证明存证](https://github.com/anthropics/skills/pull/1771)——代表垂直领域安全审查需求。
- [`scnet-hpc`：通过 SSH、Slurm 操作 HPC 集群](https://github.com/anthropics/skills/pull/1615)——代表科研计算与基础设施自动化。
- [`notion-spec-to-implementation` / `quantitative-resume-auditor`](https://github.com/anthropics/skills/pull/1245)——代表规格到任务拆解及量化履历审计。
- [`theme-factory`：跨幻灯片、文档和网页的主题生成](https://github.com/anthropics/skills/issues/2064)——相关 Issue 指出其描述缺少明确触发场景，影响自动调用。

## 2. 社区需求趋势

### 2.1 Skill 自身的开发、触发与评估工具

这是当前最集中的方向：

- 社区希望 Skill 能被**可靠发现和触发**，而非安装后闲置。
- 需要准确衡量触发率，避免把运行时错误或并行竞争误判为“不触发”。
- Skill 打包、YAML frontmatter、CLI 路径和发布流程需要标准化。
- 期待更短、更操作化的 `SKILL.md`，避免把开发者教程当作执行指令。相关讨论见 [#202](https://github.com/anthropics/skills/issues/202)。
- 触发描述需要同时回答“**这个 Skill 做什么**”和“**什么情况下应该使用**”，参见 [#2064](https://github.com/anthropics/skills/issues/2064)。

### 2.2 代码审查、安全测试与质量门禁

社区希望将 Agent 从“生成代码”推进到“持续验证”：

- 浏览器测试中的命令注入和元素识别问题受到关注。
- 智能合约静态分析、审计证明存证等需求增长。
- 文档、表格、PPT 等产物需要自动检查是否真正完成，而不是仅检查脚本是否退出成功。
- 社区提出完整的质量门禁流水线：**执行前校准 → 对抗式审查 → 交付前验证**，见 [#1385](https://github.com/anthropics/skills/issues/1385)。

### 2.3 文档、表格与演示文稿的端到端处理

文档类需求已从“生成文件”扩展到：

- DOCX 修订验收、XML 合法性和残留修订检测；
- PPTX 参数校验及渲染；
- XLSX 公式、defined names 和外部链接风险识别；
- 排版质量控制；
- Markdown 到视频、音频的自动转换。

核心诉求是：**可渲染、可审计、可验证、可发布**。

### 2.4 Agent 记忆、治理与上下文效率

- `compact-memory` 提议用符号化表示压缩长期 Agent 状态，减少上下文消耗，见 [#1329](https://github.com/anthropics/skills/issues/1329)。
- `agent-governance` 提议覆盖策略执行、威胁检测、信任评分和审计轨迹，见 [#412](https://github.com/anthropics/skills/issues/412)。
- `claude-api` Skill 一次注入约 156k tokens、可能耗尽上下文窗口的问题，见 [#1487](https://github.com/anthropics/skills/issues/1487)。

这表明社区正从“更多 Skill”转向“**更小的上下文成本、更稳定的长期运行机制**”。

### 2.5 企业分发与团队共享

- 组织级 Skill 共享是明确产品需求：目前仍需下载 `.skill` 文件并通过 Slack/Teams 手工传播，见 [#228](https://github.com/anthropics/skills/issues/228)。
- 重复插件安装会产生相同 Skill、浪费上下文窗口，见 [#189](https://github.com/anthropics/skills/issues/189)。
- 社区贡献冒充官方 `anthropic/` 命名空间会造成信任边界滥用，见 [#492](https://github.com/anthropics/skills/issues/492)。

因此，企业用户同时需要：**共享、版本管理、来源认证、去重和权限控制**。

## 3. 高潜力待合并 Skills

这里的“潜力”主要按功能覆盖面、Issue 关联度及对生态基础设施的影响判断。

### 第一梯队：可能直接影响 Skill 的可用性和可信度

1. **[`skill-creator`：隔离触发评估并处理 Windows/运行时错误](https://github.com/anthropics/skills/pull/1298)**  
   关联 Issues：[#556](https://github.com/anthropics/skills/issues/556)、[#1352](https://github.com/anthropics/skills/issues/1352)。  
   这是当前最值得优先合并的 PR 之一：若不修复，开发者可能依据错误触发率优化 Skill。

2. **[`skill-creator`：正确解析 YAML frontmatter](https://github.com/anthropics/skills/pull/1997)**  
   直接影响描述优化和触发评估的输入准确性，属于基础正确性问题。

3. **[`skill-creator`：支持 `package_skill.py` 直接执行](https://github.com/anthropics/skills/pull/1681)**  
   改善打包体验、CLI 可用性与文档一致性。

4. **[`mcp-builder`：支持 MCP 2.x Streamable HTTP 与自定义 Headers](https://github.com/anthropics/skills/pull/1742)**  
   影响 MCP 服务连接、鉴权和第三方 API 集成，落地价值高。

### 第二梯队：安全性和交付可靠性

5. **[`webapp-testing`：避免在 `with_server.py` 中使用 `shell=True`](https://github.com/anthropics/skills/pull/1980)**  
   修复命令注入风险，属于应优先处理的安全边界问题。

6. **[`docx`：将 LibreOffice 超时视为错误并验证输出](https://github.com/anthropics/skills/pull/1792)**  
   提升文档处理结果的可信度，避免“假成功”。

7. **[`xlsx`：解析工作表作用域 defined names 和别名](https://github.com/anthropics/skills/pull/2019)**  
   直接提升外部链接风险检测的准确率，适合财务、审计和数据治理场景。

8. **[`claude-api`：更新 Python `pause_turn` 恢复运行指南](https://github.com/anthropics/skills/pull/1950)**  
   对齐 Python SDK 1.1.0 的自动恢复能力，减少过时建议导致的额外循环和实现复杂度。

### 第三梯队：高价值垂直场景

9. **[`notion-spec-to-implementation` 与 `quantitative-resume-auditor`](https://github.com/anthropics/skills/pull/1245)**  
   规格拆解和履历量化体现从内容生产向业务执行延伸。

10. **[`proofcore-contract-auditor`](https://github.com/anthropics/skills/pull/1771)**  
    将代码审查扩展到链上可验证审计证明，垂直差异化明显。

11. **[`scnet-hpc`](https://github.com/anthropics/skills/pull/1615)**  
    标准化 HPC 集群操作，适合科研和企业计算场景。

12. **[`md2video-audio`](https://github.com/anthropics/skills/pull/1703)**  
    文档多媒体化需求明确，但落地仍取决于工具依赖、输出质量与成本控制。

## 4. Skills 生态洞察

**当前社区最集中的诉求，是把 Skills 从“能生成内容的提示词模板”升级为“可发现、可复用、可验证、可治理的 Agent 工作流基础设施”。**

具体表现为四条主线并行：

1. 修复 Skill 的触发、评估、打包和元数据解析；
2. 为代码、文档和表格输出增加自动验证；
3. 提升安全性、上下文效率与长期运行稳定性；
4. 建立团队共享、来源认证、去重和版本治理机制。

---

# Claude Code 社区动态日报

**日期：2026-11-12**  
**数据范围：anthropics/claude-code 过去 24 小时更新；展示数据包含 50 个更新 Issue，其中列出了评论数最高的 30 条。**

## 1. 今日速览

过去 24 小时没有新版 Release 或 Pull Request 更新，动态主要集中在已有 Issue 的持续讨论与新问题曝光。最受社区关注的是 Claude Desktop 多账户切换需求，以及 Auto Mode 工具调用、Agent 隔离、权限与 Worktree、OAuth/MCP 等稳定性问题。

安全与可靠性成为今日重点：已有用户报告并发生成与实际执行不一致、临时目录占满约 1 TB 磁盘及并行子代理导致 CPU 饱和等严重问题；这些反馈尚待官方核实或修复。

---

## 2. 版本发布

过去 24 小时无新版本发布，因此暂无可总结的 Release 更新。

---

## 3. 社区热点 Issues

### 1. Claude Desktop 支持多账户及快速切换

Claude Desktop 目前缺少完整的多账户配置文件管理能力，无法方便地在个人、工作或客户账户之间切换。该需求获得 **1,030 个点赞、242 条评论**，是本轮数据中热度最高的功能请求。

链接：[Issue #18435](https://github.com/anthropics/claude-code/issues/18435)

### 2. Auto Mode 仍用 Bash 读取、写入和编辑文件

用户认为 Claude 在 Auto Mode 下绕过专用文件工具、频繁调用 Bash，造成权限边界模糊、可审计性下降和潜在安全问题。Issue 获得 **101 个点赞、20 条评论**，反映社区对“原生工具优先”和 Bash 最小化使用的明确期待。

链接：[Issue #87971](https://github.com/anthropics/claude-code/issues/87971)

### 3. Windows/WSL2 中语音听写文本无法粘贴

升级至 **2.1.269** 后，Wispr Flow 等通过剪贴板和模拟 `Ctrl+V` 输入的工具，无法把文本插入 VS Code 集成终端中的 Claude Code；**2.1.268 正常**。该回归影响 WSL2 Remote 环境，已有 **26 条评论、9 个点赞**。

链接：[Issue #93782](https://github.com/anthropics/claude-code/issues/93782)

### 4. MCP 重新认证会提前清除 Token

Issue 指出 MCP 重新认证时，存储的 Token 会在登录真正完成前被清除，属于此前 **2.1.216** 修复的回归，并会破坏并发会话。由于认证失败可能直接中断工具调用，该问题对多会话和企业工作流影响较大。

链接：[Issue #89321](https://github.com/anthropics/claude-code/issues/89321)

### 5. `remote` Agent 隔离实际降级为本地 Worktree

请求使用 `isolation: "remote"` 的 Agent 虽显示异步启动成功，实际却在本地 Git Worktree 中运行，界面和结果均未提示隔离能力不可用。该问题会破坏云端执行在资源隔离、数据位置和权限控制方面的预期。

链接：[Issue #97361](https://github.com/anthropics/claude-code/issues/97361)

### 6. `/goal` 无法停止且持续重新提示

用户明确要求停止后，`/goal` 仍反复重新提示，Stop Hook 在三天内触发 **74 次**，且 Code 标签页没有显示活动目标。该问题直接影响长任务控制、用户意图遵循和任务生命周期管理。

链接：[Issue #101528](https://github.com/anthropics/claude-code/issues/101528)

### 7. Windows 中并行子代理填满系统盘并使 CPU 饱和

一名用户报告，在 Windows 11、VS Code 扩展和长会话中，Claude Code 填满系统盘至仅剩约 **67 MB**，并行子代理导致 CPU 饱和，用户被迫重启，且系统继续执行未经授权的操作。Issue 被标记为 `data-loss`，是今日最值得优先核验的风险报告之一。

链接：[Issue #109176](https://github.com/anthropics/claude-code/issues/109176)

### 8. Claude 声称完成实际未执行的操作

Linux 用户报告 Claude Code 宣称已完成某项操作，但相关行为实际没有发生，并附带 Feedback ID。该反馈若可复现，将涉及工具执行结果与自然语言汇报之间的真实性问题，对自动化代理尤其关键。

链接：[Issue #109198](https://github.com/anthropics/claude-code/issues/109198)

### 9. Desktop 会话问卷无法由用户关闭

Claude Desktop 的 Code 标签页会显示“本次会话表现如何”的内联问卷，但现有 Claude Code 反馈开关无法关闭它，也缺少用户级控制。该问题获得 **18 个点赞、13 条评论**，争议主要集中于桌面端反馈选项与设置体系不一致。

链接：[Issue #94710](https://github.com/anthropics/claude-code/issues/94710)

### 10. Claude in Chrome 持续返回 OAuth 403

从 **11 月 10 日**起，Claude in Chrome bridge 持续报告 `OAuth token forbidden (403)`，错误标记为 `upstream_403` 且 `transient:false`。该问题直接阻断浏览器自动化，并带有回归标签。

链接：[Issue #109203](https://github.com/anthropics/claude-code/issues/109203)

---

## 4. 重要 PR 进展

过去 24 小时没有 Pull Request 更新，暂无可列出的重要 PR 进展。

---

## 5. 功能需求趋势

### 账户、身份与权限治理

- **Desktop 多账户与配置切换**成为社区最强烈的功能诉求，目标是支持个人、工作和客户账户隔离，并快速切换身份。
- 社区继续要求对权限请求增加类似 **Autoreviewer** 的自动审查机制，降低人工确认负担，同时提高安全性。
- MCP/OAuth 的认证流程需要具备并发会话安全、失败回滚和明确状态提示。

相关链接：

- [Issue #18435](https://github.com/anthropics/claude-code/issues/18435)
- [Issue #99984](https://github.com/anthropics/claude-code/issues/99984)
- [Issue #89321](https://github.com/anthropics/claude-code/issues/89321)

### Agent 编排与跨会话协作

- 社区希望一个项目线程能够等待另一个线程完成，并允许本地 Remote Control 线程向云端线程发送消息。
- 远程 Agent 隔离需要真实可靠的执行语义，不能在不支持时静默降级为本地 Worktree。
- `/goal`、后台子代理与 Stop Hook 需要更清晰的生命周期管理，支持暂停、取消和可见状态。

相关链接：

- [Issue #109202](https://github.com/anthropics/claude-code/issues/109202)
- [Issue #97361](https://github.com/anthropics/claude-code/issues/97361)
- [Issue #101528](https://github.com/anthropics/claude-code/issues/101528)

### IDE、终端与桌面端体验

- VS Code 集成仍集中出现回归问题，包括 WSL2 输入、Markdown 文件关联和编辑器默认设置未生效。
- Desktop 的 Mod Pane 被要求支持固定、独立滚动及可调整尺寸的区域，便于构建文件树与 Diff 并排工作流。
- 社区希望将云端和 Remote Control 会话归入自定义侧边栏分区，并提供 `move_sessions` 等整理能力。
- 屏幕阅读器用户提出只读“查看响应”操作及快捷键，以改善 TUI 可访问性。

相关链接：

- [Issue #99449](https://github.com/anthropics/claude-code/issues/99449)
- [Issue #104002](https://github.com/anthropics/claude-code/issues/104002)
- [Issue #109207](https://github.com/anthropics/claude-code/issues/109207)
- [Issue #107977](https://github.com/anthropics/claude-code/issues/107977)

### 配额、成本与可观测性

- 用户希望能够设置每周额度重置时间，或采用类似 Codex 的可储备、按需重置机制。
- 有用户反馈在移除其他额度限制后仍遇到 Ultra 五小时限制，引发订阅额度展示与实际执行规则不一致的疑问。
- Desktop、CLI 和 VS Code 在错误提示、目标状态、隔离模式及工具执行结果方面仍缺乏统一、可解释的状态反馈。

相关链接：

- [Issue #76272](https://github.com/anthropics/claude-code/issues/76272)
- [Issue #109201](https://github.com/anthropics/claude-code/issues/109201)

### 插件、工具与扩展能力

- 大型插件根目录中的 `node_modules` 会导致 `claude plugin eval` 因 `E2BIG` 失败，暴露出插件评估命令对大型目录和参数长度处理不足。
- Artifact 工具的文件列表最多返回 1,024 条路径且无法继续翻页，影响大型项目中的文件发现。
- Chrome MCP 的标签页导航与 OAuth 流程稳定性不足，削弱浏览器自动化的可靠性。

相关链接：

- [Issue #109197](https://github.com/anthropics/claude-code/issues/109197)
- [Issue #109204](https://github.com/anthropics/claude-code/issues/109204)
- [Issue #109180](https://github.com/anthropics/claude-code/issues/109180)

---

## 6. 开发者关注点

### 1. 工具调用必须与实际执行结果一致

社区最担心的是“报告已完成、实际未执行”的错误。一旦模型汇报与工具状态不一致，开发者就难以安全地把 Claude Code 接入 CI/CD、代码迁移或生产运维流程。建议重点验证工具结果回传、状态确认和最终总结之间的链路。

链接：[Issue #109198](https://github.com/anthropics/claude-code/issues/109198)

### 2. 权限与隔离机制需要可预测

Bypass Mode 的危险命令检测可能卡住不含 `rm` 的后台子代理，Worktree 检查又可能拒绝包含名为 `Source` 的普通目录；与此同时，“remote”隔离可能静默变成本地执行。开发者希望权限规则精确、隔离模式透明，并且失败时明确报错，而不是误拦截或静默降级。

相关链接：

- [Issue #104925](https://github.com/anthropics/claude-code/issues/104925)
- [Issue #109199](https://github.com/anthropics/claude-code/issues/109199)
- [Issue #97361](https://github.com/anthropics/claude-code/issues/97361)

### 3. 长任务需要可控、可停止、可观察

`/goal` 持续重试、并行子代理占满磁盘与 CPU，说明长时自动执行仍缺少资源预算、并发上限、磁盘配额和可靠的取消机制。对于无人值守场景，这些能力与准确率同等重要。

相关链接：

- [Issue #101528](https://github.com/anthropics/claude-code/issues/101528)
- [Issue #109176](https://github.com/anthropics/claude-code/issues/109176)

### 4. IDE 和终端兼容性仍是高频回归区

VS Code/WSL2 输入、Remote-WSL、Neovim + tmux 复制、Markdown 文件关联等问题表明，终端交互层仍高度依赖具体环境。开发者尤其关注扩展升级后是否破坏既有输入、复制粘贴和编辑器跳转习惯。

相关链接：

- [Issue #93782](https://github.com/anthropics/claude-code/issues/93782)
- [Issue #107977](https://github.com/anthropics/claude-code/issues/107977)
- [Issue #109200](https://github.com/anthropics/claude-code/issues/109200)

### 5. 大型仓库和插件需要扩展性保障

Artifact 工具的 1,024 路径上限、插件评估的 `E2BIG`、低 MTU 网络下的 `ECONNRESET`，都指向相同问题：Claude Code 在大型代码库、非标准网络和企业代理环境中仍需增强边界处理与可诊断性。

相关链接：

- [Issue #109204](https://github.com/anthropics/claude-code/issues/109204)
- [Issue #109197](https://github.com/anthropics/claude-code/issues/109197)
- [Issue #108913](https://github.com/anthropics/claude-code/issues/108913)

---

**今日结论：** 社区需求已经从单纯的模型能力扩展，转向更成熟的代理工程基础——包括真实可靠的工具执行、严格的权限与隔离、明确的远程执行语义、可中断的长任务生命周期、资源配额，以及跨 IDE/终端的稳定体验。近期版本发布活动为空，但以上问题为后续版本规划和回归修复提供了明确优先级。

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex 社区动态日报

**日期：2026-11-12**

## 1. 今日速览

过去 24 小时，Codex 发布稳定版 **rust-v0.167.2**及多个 alpha 版本。稳定版重点是在 Google Cloud Vertex AI 上默认增量发送工具更新，显著改善长工具链场景的交互与响应体验。

社区讨论集中在 Windows/macOS 桌面端稳定性、Remote 与 Dots 跨设备会话、OAuth/认证和模型容量等问题；与此同时，大量 PR 正集中修复并发运行、线程恢复、MCP OAuth 刷新及 Windows 沙箱等底层可靠性问题。

## 2. 版本发布

### rust-v0.167.2

Codex 现在默认在 **Google Cloud Vertex AI** 上增量发送工具更新，无需等待完整工具调用结果后再继续输出。

如需恢复旧行为，可在 `config.toml` 中关闭：

```toml
[features]
incremental_tools_legacy_gcp = false
```

- Release：[rust-v0.167.2](https://github.com/openai/codex/releases/tag/rust-v0.167.2)
- 相关 PR：[#60617](https://github.com/openai/codex/pull/60617)、[#60848](https://github.com/openai/codex/pull/60848)

### 其他版本

过去 24 小时还发布了以下 alpha 版本，主要用于新版本开发和兼容性验证：

- [rust-v0.170.0-alpha.2](https://github.com/openai/codex/releases/tag/rust-v0.170.0-alpha.2)
- [rust-v0.170.0-alpha.1](https://github.com/openai/codex/releases/tag/rust-v0.170.0-alpha.1)
- [rust-v0.169.0-alpha.11.1](https://github.com/openai/codex/releases/tag/rust-v0.169.0-alpha.11.1)
- [rust-v0.169.0-alpha.11](https://github.com/openai/codex/releases/tag/rust-v0.169.0-alpha.11)
- [rust-v0.167.0-alpha.4.3](https://github.com/openai/codex/releases/tag/rust-v0.167.0-alpha.4.3)

## 3. 社区热点 Issues

### 1. App 在“思考”期间产生高 GPU 占用

Codex App 在思考动画期间持续保持较高 GPU 使用率，即使动画本身非常微小。该问题获得 **57 条评论和 57 个赞**，是今日热度最高的问题，现已关闭，说明资源占用与渲染优化已成为用户核心诉求。

- [#16857](https://github.com/openai/codex/issues/16857)

### 2. macOS Dot 无法读取已存在的原生线程

桌面端已连接且授权成功，但 Dot 通过 `cloud_threads.read` 无法读取用户创建的原生 Codex 线程，即使传入有效 `threadId` 和 `environmentId`。问题涉及跨端线程发现、权限路由和同步语义，可能影响 Dots 的核心使用流程。

- [#58447](https://github.com/openai/codex/issues/58447)

### 3. macOS 更新后全局 UI 字体变细、模糊

升级至 `26.820.60940` 后，界面文字明显变细且模糊。该问题拥有 **19 条评论**，反映桌面端字体渲染、缩放和高 DPI 适配仍可能受到系统版本影响。

- [#40782](https://github.com/openai/codex/issues/40782)

### 4. Windows Computer Use 截图结束后仍保持捕获和黄色边框

工具调用完成后，Windows 端仍显示捕获状态及金黄色边界，需要用户额外处理。该问题直接影响 Computer Use 的可信反馈和连续自动化，累计 **19 条评论**。

- [#57101](https://github.com/openai/codex/issues/57101)

### 5. Android Codex Remote 无法通过二维码或手动码配对

Windows 用户无法使用二维码和手动代码两种方式连接 Android Remote，具有较强的工作流阻断影响。该问题获得 **16 条评论和 5 个赞**，表明移动端 Remote 配对是当前较热门的开发场景。

- [#56600](https://github.com/openai/codex/issues/56600)

### 6. Windows 桌面端拒绝自身 app-server 功能键

更新后的 Desktop 内置 app-server 会拒绝由自身声明的功能键，并把已连接的 Remote 状态标记为失败。该问题涉及版本配套、功能协商和 Remote 状态机，开发者排障成本较高。

- [#44504](https://github.com/openai/codex/issues/44504)

### 7. 压缩上下文后重放已完成请求并中断子代理任务

Codex App 在上下文压缩后可能重新执行已完成请求，同时放弃仍在运行的 delegated task。该问题破坏了长会话和子代理编排的状态一致性，已有 **11 条评论**。

- [#47592](https://github.com/openai/codex/issues/47592)

### 8. Windows 更新后 ChatGPT 无法重新启动，提示错误 `0x80070020`

更新完成后，应用可能因文件被占用而无法再次启动。这直接阻断桌面端基本使用，已有 **8 条评论**，也是今日 Windows 更新链路中的高优先级问题。

- [#56788](https://github.com/openai/codex/issues/56788)

### 9. Remote MCP OAuth 访问令牌过期后未使用刷新令牌

Remote MCP 在 access token 过期后没有正确使用 refresh token，重连时还会保留过期的 OAuth scopes。该问题直接影响长期运行的 MCP 集成和无人值守任务，已有 **6 条评论**。

- [#55886](https://github.com/openai/codex/issues/55886)

### 10. TypeScript SDK 并发运行会静默拆分到不同 Thread

同一新 Thread 上重叠执行两个 run 时，SDK 可能创建两个独立会话，并由后到达的 `thread.started` 覆盖线程 ID。其结果是后续操作只恢复其中一个 run，造成任务丢失或结果错配。

- [#61027](https://github.com/openai/codex/issues/61027)

## 4. 重要 PR 进展

### 1. 支持可刷新的 OTLP HTTP Exporter 请求头

新增 `otel.headers_helper`，允许通过 `CODEX_HOME` 下的命令动态生成请求头 JSON，使 OpenTelemetry Collector 凭证无需重建 provider 即可刷新。

- [#61028](https://github.com/openai/codex/pull/61028)

### 2. 抽取共享的 HTTP Headers Helper Crate

将 shell 命令构造、受限进程执行和 JSON 解析从 `rmcp-client` 抽到独立 crate，并保留 10 秒超时、64 KiB 输出限制及进程树清理等安全约束。

- [#61018](https://github.com/openai/codex/pull/61018)

### 3. 客户端重连时保留正在进行的恢复轮次

修复重连窗口内 recovery turn 被误判为空闲并关闭的问题，避免主动恢复任务在客户端断线期间丢失。

- [#61014](https://github.com/openai/codex/pull/61014)

### 4. MCP OAuth 响应式刷新支持取消安全

并发请求遇到 `401` 时可复用已刷新的 token，取消单个 MCP 请求不会中断轮换凭证的持久化，降低 OAuth 状态竞争和凭据丢失风险。

- [#60981](https://github.com/openai/codex/pull/60981)

### 5. 请求中保留已分配的 Response Item ID

避免提供商返回的 opaque item ID 或仅带分配元数据的 ID 在请求准备阶段被错误剥离，提升多轮响应关联与重放的可靠性。

- [#60977](https://github.com/openai/codex/pull/60977)

### 6. Cloud 会话在短暂流失流后自动重连

Cloud reply stream 意外中断后，即使会话处于空闲状态也能自动恢复，并暂存用户输入，直至回复流重新可用，减少手动重开会话的需要。

- [#60969](https://github.com/openai/codex/pull/60969)

### 7. 修复 Windows 服务权限错误后的运行时注册

当同一运行时包版本已为目标账户注册时，不再因服务权限错误直接失败，并重新协调注册状态，提升 Windows 多账户部署兼容性。

- [#60944](https://github.com/openai/codex/pull/60944)

### 8. 重复执行 Windows 沙箱初始化时保留文件权限

修复注册沙箱重复设置目录 ACL 时可能改变已移动文件权限的问题，避免沙箱初始化破坏用户文件权限。

- [#60943](https://github.com/openai/codex/pull/60943)

### 9. 重放与压缩后保留线程级模型 ID 状态

按线程初始化 item 和上下文窗口 ID 生成器，恢复会话时复用已有窗口，并为历史重建使用独立生成器，降低压缩或重放后的 ID 冲突。

- [#60942](https://github.com/openai/codex/pull/60942)

### 10. Command Center 切换后端时保留任务归属

打开保留任务时使用其原始所属后端，并针对切换期间发生的历史或设置变化调整草稿恢复逻辑，避免任务被错误加载到另一后端。

- [#60929](https://github.com/openai/codex/pull/60929)

## 5. 功能需求趋势

### 跨设备会话与 Remote 工作流

Remote、Dots 和桌面端之间的线程同步是今日最明确的功能主线：

- macOS Dot 无法读取原生线程；
- Android Remote 无法配对；
- iOS Remote 看不到既有 Codex Local 会话；
- 单一 Windows 虚拟机缺少 Dot 入口；
- Cloud 会话流失流后需要自动恢复。

社区期待的不只是“能够连接”，而是线程发现、权限、历史记录和状态必须在多端之间可靠同步。

相关 Issue：

- [#58447](https://github.com/openai/codex/issues/58447)
- [#56600](https://github.com/openai/codex/issues/56600)
- [#60561](https://github.com/openai/codex/issues/60561)
- [#60947](https://github.com/openai/codex/issues/60947)
- [#60969](https://github.com/openai/codex/pull/60969)

### Windows 桌面可靠性与沙箱安全

Windows 相关问题覆盖更新失败、凭据解密、Computer Use 状态残留、app-server 版本不匹配、沙箱权限及 URL 分类误判。其共同诉求是让 Windows 成为与 macOS 同等稳定的生产环境。

相关 Issue：

- [#56788](https://github.com/openai/codex/issues/56788)
- [#44495](https://github.com/openai/codex/issues/44495)
- [#57101](https://github.com/openai/codex/issues/57101)
- [#44504](https://github.com/openai/codex/issues/44504)
- [#55117](https://github.com/openai/codex/issues/55117)

### 模型容量、限流与用量透明度

社区同时关注模型容量误报、额度异常消耗以及模型计数不一致。CLI、IDE 扩展和 App 均出现模型容量问题，表明容量状态和订阅用量需要在不同客户端之间保持一致。

相关 Issue：

- [#50959](https://github.com/openai/codex/issues/50959)
- [#60641](https://github.com/openai/codex/issues/60641)
- [#40318](https://github.com/openai/codex/issues/40318)
- [#60767](https://github.com/openai/codex/issues/60767)

### SDK 与 App Server 的确定性行为

开发者希望 SDK 和 app-server 提供可预测、可测试的线程语义。目前的高频缺口包括并发 run 不应隐式拆线程、fork 必须应用开发者指令、线程读取不应返回体积异常的大载荷，以及 daemon 不应复用过期环境。

相关 Issue：

- [#61027](https://github.com/openai/codex/issues/61027)
- [#61046](https://github.com/openai/codex/issues/61046)
- [#39148](https://github.com/openai/codex/issues/39148)
- [#59381](https://github.com/openai/codex/issues/59381)

### OAuth、远程 MCP 与身份认证

MCP OAuth 刷新、企业账户路由、用户级配置差异及 Windows 凭据问题共同表明，身份与授权仍是自动化落地的关键阻碍。尤其需要减少用户反复登录、重连和手动刷新令牌。

相关 Issue：

- [#55886](https://github.com/openai/codex/issues/55886)
- [#59410](https://github.com/openai/codex/issues/59410)
- [#60642](https://github.com/openai/codex/issues/60642)
- [#44495](https://github.com/openai/codex/issues/44495)

### 性能、UI 渲染与资源占用

高 GPU 占用、字体模糊，以及工具调用后出现 `server_overloaded`，分别对应客户端渲染、视觉呈现和后端负载三个层面。社区期待 Codex 在长任务中保持更平滑的交互和可预测的性能。

相关 Issue：

- [#16857](https://github.com/openai/codex/issues/16857)
- [#40782](https://github.com/openai/codex/issues/40782)
- [#59329](https://github.com/openai/codex/issues/59329)

## 6. 开发者关注点

1. **状态一致性优先于“能跑”**  
   开发者在长会话、压缩、重连、fork 和并发 run 中最担心任务被重复执行、丢失或静默拆分。对线程 ID、任务归属和恢复状态的确定性需求明显上升。

2. **Remote/MCP 必须具备完整的生产级认证链路**  
   刷新令牌、scope 更新、取消安全和并发 `401` 处理不能只覆盖单请求成功路径，而要确保在断线、重连和多请求竞争下仍保持一致。

3. **Windows 是当前最明显的平台短板**  
   更新、启动、凭据、沙箱、Computer Use 和 app-server 协商问题同时出现。开发者希望减少系统版本、账户和部署方式之间的组合性问题。

4. **长上下文和子代理编排仍需加强**  
   压缩后重放、daemon 环境复用、上下文预算和线程本地 ID 状态等问题，暴露出复杂 Agent 生命周期管理仍有较多边界条件。

5. **工具输出应支持流式、低开销传递**  
   `rust-v0.167.2` 的 Vertex AI 增量工具更新是本轮最重要的性能方向。开发者希望减少等待完整工具结果和重复输出的时间成本。

6. **权限与安全策略需要更透明**  
   Windows 沙箱权限保持、URL 启动误判、浏览器安全策略无解释拒绝等问题表明，安全策略不仅要“阻止风险”，还应降低误判并提供可理解的失败原因。

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI 社区动态日报

**日期：2026-11-12**  
**数据范围：** 过去 24 小时内更新的 GitHub Issues 与 Pull Requests  
**项目：** [google-gemini/gemini-cli](https://github.com/google-gemini/gemini-cli)

## 1. 今日速览

今日讨论高度集中在 **Subagent（子代理）体系**：焦点包括子代理错误终止、挂起、配置未生效、Wayland 兼容、上下文可观测性，以及并行协作与后台运行。与此同时，ACP 集成、Windows PowerShell 性能、模型输出 token 上限、遥测隐私和发布流程也出现多项值得关注的修复。

过去 24 小时没有新的正式 Release；Issue 与 PR 更新以 **Agent 稳定性、工具执行安全和 ACP 体验** 为主。

---

## 3. 社区热点 Issues

### 1. 子代理达到 MAX_TURNS 后仍被报告为成功

- **Issue：** [#22323](https://github.com/google-gemini/gemini-cli/issues/22323)
- `codebase_investigator` 在达到最大轮次、实际未完成分析时，仍返回 `status: "success"` 和 `Termination Reason: "GOAL"`。
- **重要性：** 错误的成功状态会掩盖执行中断，影响上层调度、评测及用户对任务完成度的判断。
- **社区反应：** 13 条评论、2 个赞，是今日讨论最充分的 Issue。

### 2. Generalist Agent 调用时无限挂起

- **Issue：** [#21409](https://github.com/google-gemini/gemini-cli/issues/21409)
- 委托给 generalist agent 后，创建目录等简单操作也可能永久挂起；明确禁止使用子代理后问题消失。
- **重要性：** 直接影响多代理架构的核心可用性。
- **社区反应：** 8 条评论、8 个赞，是热点列表中点赞数最高的 Issue。

### 3. Browser Agent 忽略 `settings.json` 配置

- **Issue：** [#22267](https://github.com/google-gemini/gemini-cli/issues/22267)
- Browser Agent 忽略全局及项目级配置覆盖，例如 `maxTurns`；`AgentRegistry` 初始化时虽能合并设置，但子代理运行阶段未正确应用。
- **重要性：** 暴露了配置在注册与执行链路之间可能不一致。
- **社区反应：** 5 条评论。

### 4. Browser Agent 在 Wayland 环境下失败

- **Issue：** [#21983](https://github.com/google-gemini/gemini-cli/issues/21983)
- Browser subagent 在 Wayland 桌面环境中无法正常运行。
- **重要性：** Linux 新版桌面环境兼容问题会限制浏览器自动化能力覆盖面。
- **社区反应：** 4 条评论、1 个赞；优先级标为 P1。

### 5. Browser Agent 缺少会话接管和锁恢复能力

- **Issue：** [#22232](https://github.com/google-gemini/gemini-cli/issues/22232)
- 持久化浏览器 Profile 被已有实例或孤儿进程占用时，当前策略偏向快速失败。
- **重要性：** 自动接管或安全恢复锁可显著减少自动化流程中的人工干预。
- **社区反应：** 4 条评论。

### 6. Gemini CLI 不会主动使用 Skills 和 Subagents

- **Issue：** [#21968](https://github.com/google-gemini/gemini-cli/issues/21968)
- 即便用户已经提供语义匹配的 Gradle、Git 等技能，模型仍很少主动调用 Skills 或 Subagents，通常需要显式提示。
- **重要性：** 反映 Agent 在“能力发现—任务路由—工具调用”之间尚未充分闭环。
- **社区反应：** 7 条评论。

### 7. 工具数量过多时触发 400 错误

- **Issue：** [#24246](https://github.com/google-gemini/gemini-cli/issues/24246)
- 启用大量工具后，Gemini CLI 出现 400 请求错误；社区期望系统能按任务动态缩小工具范围。
- **重要性：** 工具注册与提示词长度会直接影响请求成功率、延迟和 token 消耗。
- **社区反应：** 3 条评论；Issue 标题同时提到“> 128 tools”，摘要则称“more than 400 tools”，具体阈值仍需进一步确认。

### 8. 代理可能执行破坏性 Git 或资源操作

- **Issue：** [#22672](https://github.com/google-gemini/gemini-cli/issues/22672)
- 在复杂 Git 操作、分支管理或数据库维护场景中，模型可能选择 `git reset`、`--force` 等高风险命令。
- **重要性：** 需要更明确的安全策略、确认机制和破坏性操作抑制。
- **社区反应：** 3 条评论、1 个赞。

### 9. 模型频繁在随机目录创建临时脚本

- **Issue：** [#23571](https://github.com/google-gemini/gemini-cli/issues/23571)
- 限制文件工具、仅开放 Shell 执行后，模型倾向于在工作区各处生成编辑脚本，增加清理与提交噪声。
- **重要性：** 暴露文件编辑与 Shell 工具之间的策略差异，以及临时文件治理需求。
- **社区反应：** 3 条评论。

### 10. `/bug` 报告缺少子代理上下文

- **Issue：** [#21763](https://github.com/google-gemini/gemini-cli/issues/21763)
- 当前 Bug 报告主要包含主会话信息，无法反映子代理内部发生了什么。
- **重要性：** 完善子代理诊断信息是定位挂起、误报成功和上下文问题的基础。
- **社区反应：** 2 条评论；与 [#22323](https://github.com/google-gemini/gemini-cli/issues/22323)、[#21409](https://github.com/google-gemini/gemini-cli/issues/21409) 等问题高度相关。

---

## 4. 重要 PR 进展

### 1. 修正模型列表中的输出 token 上限

- **PR：** [#30253](https://github.com/google-gemini/gemini-cli/pull/30253)
- `gemini models`、`gemini models list` 和 `gemini --list-models` 不再为所有模型硬编码输出上限 `8,192`；已知 Gemini 2.5 与 Gemini 3 模型改为报告 `65,536`，未知或自定义模型则省略该字段。
- **状态：** OPEN

### 2. 遥测安全元数据中增加 `skill_name`

- **PR：** [#30010](https://github.com/google-gemini/gemini-cli/pull/30010)
- 在关闭 `telemetry.logPrompts` 时，为工具调用遥测补充经过白名单过滤的 `skill_name`，修复 #30155。
- **状态：** CLOSED

### 3. 增加 OSS Exit Gate npm 发布流程

- **PR：** [#30009](https://github.com/google-gemini/gemini-cli/pull/30009)
- 引入 Google OSS Exit Gate 发布流水线，用于发布 `gemini-cli`、`gemini-cli-a2a-server` 与 `gemini-cli-core`，使用无密钥 Workload Identity Federation 认证。
- **状态：** CLOSED

### 4. 环境变量为空时正确使用默认值

- **PR：** [#30003](https://github.com/google-gemini/gemini-cli/pull/30003)
- `${VAR:-default}` 在 `VAR` 已设置但值为空时使用默认值，与 Bash/POSIX 语义保持一致；相关文档同步更新。
- **状态：** CLOSED

### 5. 修复 Issue 分诊自动化写入无效标签和编号

- **PR：** [#30139](https://github.com/google-gemini/gemini-cli/pull/30139)
- 分诊自动化在三个写入点增加校验，仅应用仓库已定义的标签，并只写入去重结果中的有效 Issue 编号。
- **状态：** OPEN

### 6. ACP 模式触发 SessionStart 与 Notification Hooks

- **PR：** [#30148](https://github.com/google-gemini/gemini-cli/pull/30148)
- ACP 会话创建或恢复时触发 `SessionStart`，工具请求确认时触发 `Notification`，补齐 ACP 与传统 CLI 的 Hook 行为差异。
- **状态：** OPEN

### 7. ACP 正确返回被 Hook 阻止的 Prompt 原因

- **PR：** [#30134](https://github.com/google-gemini/gemini-cli/pull/30134)
- 修复 Hook 阻止 Prompt 后 ACP 仅返回空 `end_turn` 的问题；现在通过 `agent_message_chunk` 返回具体拒绝原因。
- **状态：** OPEN

### 8. ACP 模式实时刷新 stderr 与输出监听器

- **PR：** [#30144](https://github.com/google-gemini/gemini-cli/pull/30144)
- 初始化输出监听器并排空缓冲输出，使 Hook 日志、警告和提示在 ACP 会话中实时显示，而非进程退出时才出现。
- **状态：** OPEN

### 9. 避免 PowerShell 检查阻塞 Node.js 事件循环

- **PR：** [#30247](https://github.com/google-gemini/gemini-cli/pull/30247)
- Windows 下 PowerShell 启动和 AST 解析曾同步阻塞事件循环，导致 Thinking spinner 和耗时显示卡住；该 PR 将相关处理改为非阻塞方式。
- **状态：** OPEN

### 10. Windows `/ide install` 正确处理含空格路径

- **PR：** [#30246](https://github.com/google-gemini/gemini-cli/pull/30246)
- 当 VS Code CLI 路径包含空格时，对 `cmd.exe` 正确引用路径，修复 companion extension 安装失败及后续连接提示异常。
- **状态：** OPEN

---

## 5. 功能需求趋势

### 1. Subagent 可靠性成为第一优先级

今日最集中的需求是让子代理在终止、失败、轮次耗尽和配置异常时提供准确状态：

- 正确区分 `GOAL` 与 `MAX_TURNS`
- 避免 generalist agent 无限挂起
- 让 `maxTurns` 等设置真正作用到 Browser Agent
- 在 `/bug` 和 `/chat share` 中暴露子代理轨迹  
  参考：[#22323](https://github.com/google-gemini/gemini-cli/issues/22323)、[#21409](https://github.com/google-gemini/gemini-cli/issues/21409)、[#22267](https://github.com/google-gemini/gemini-cli/issues/22267)、[#21763](https://github.com/google-gemini/gemini-cli/issues/21763)、[#22598](https://github.com/google-gemini/gemini-cli/issues/22598)

### 2. Browser Agent 的跨平台与会话韧性

社区持续推动：

- Wayland 环境兼容
- 持久化 Profile 锁恢复
- 自动接管已有浏览器会话
- 本地 Agent 后台运行  
  参考：[#21983](https://github.com/google-gemini/gemini-cli/issues/21983)、[#22232](https://github.com/google-gemini/gemini-cli/issues/22232)、[#22741](https://github.com/google-gemini/gemini-cli/issues/22741)

### 3. AST 感知的代码读取与代码库理解

社区正在评估 AST-aware 工具，目标是：

- 更精确地读取函数或方法边界
- 降低无关代码进入上下文的比例
- 减少文件读取造成的 token 膨胀
- 提升代码库映射和搜索效率  
  参考：[#22745](https://github.com/google-gemini/gemini-cli/issues/22745)、[#22746](https://github.com/google-gemini/gemini-cli/issues/22746)、[#22747](https://github.com/google-gemini/gemini-cli/issues/22747)、[#19561](https://github.com/google-gemini/gemini-cli/issues/19561)

### 4. 多代理协作、记忆与后台调度

长期方向包括共享记忆、并行 Subagents、可发现配置和持久化任务跟踪：

- 探索 Subagent 并行协作
- 本地 Agent 后台运行
- 通过 `settings.json` 发现 Subagent
- 用文件化 CRUD 替代纯上下文 Todo  
  参考：[#18287](https://github.com/google-gemini/gemini-cli/issues/18287)、[#22741](https://github.com/google-gemini/gemini-cli/issues/22741)、[#18285](https://github.com/google-gemini/gemini-cli/issues/18285)、[#18836](https://github.com/google-gemini/gemini-cli/issues/18836)

### 5. Shell 安全沙箱与更可靠的执行策略

相关需求覆盖：

- 零依赖操作系统级沙箱
- 根据执行意图进行路由
- 抑制破坏性 Git、数据库和资源操作
- 规范临时脚本的生成位置和清理机制  
  参考：[#19873](https://github.com/google-gemini/gemini-cli/issues/19873)、[#22672](https://github.com/google-gemini/gemini-cli/issues/22672)、[#23571](https://github.com/google-gemini/gemini-cli/issues/23571)

### 6. 模型与工具规模适配

- 工具过多可能直接造成 API 400 错误，需要按任务裁剪工具集。
- 模型列表需要准确反映输出 token 上限。
- 内部评测存在不稳定、无法复现的问题，需要加强确定性。  
  参考：[#24246](https://github.com/google-gemini/gemini-cli/issues/24246)、[#30253](https://github.com/google-gemini/gemini-cli/pull/30253)、[#23166](https://github.com/google-gemini/gemini-cli/issues/23166)、[#23313](https://github.com/google-gemini/gemini-cli/issues/23313)

---

## 6. 开发者关注点

1. **状态准确性比“表面成功”更重要**  
   达到轮次上限不应被报告为 `GOAL` 成功；工具调用失败、用户取消、超时和自然完成需要清晰区分。

2. **子代理必须可诊断、可观察**  
   开发者希望 `/bug`、`/chat share` 和评测系统都能展示子代理轨迹、配置、工具调用及终止原因。

3. **配置需要在执行链路中真正生效**  
   `settings.json` 虽被读取并合并，但 Browser Agent 的 `maxTurns` 等覆盖未实际应用，暴露出注册层和运行层不一致的问题。

4. **减少上下文与工具噪声**  
   AST 感知的精确读取、动态工具裁剪、持久化任务跟踪和共享记忆，都是降低 token 消耗、避免“上下文腐化”的热门方向。

5. **Agent 需要更主动地使用已有能力**  
   Skills 与 Subagents 已存在，但模型很少自动选择它们；任务路由和自动能力发现仍需加强。

6. **执行安全不能只依赖模型自觉**  
   社区希望在产品层面提供沙箱、破坏性操作防护、危险命令确认和临时文件治理机制。

7. **跨平台体验仍不均衡**  
   Windows PowerShell 阻塞、带空格的 IDE 路径、Wayland 浏览器失败，分别影响核心性能、IDE 集成和 Linux 自动化。

8. **ACP 正在补齐传统 CLI 的企业能力**  
   Hooks、错误反馈和 stderr 实时输出是近期 ACP 修复重点，显示 ACP 集成正从基础通信走向更完整的企业工作流兼容。

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI 社区动态日报
**日期：2026-11-12**

---

## 1. 今日速览

今日社区共更新 **38 条 Issue**（无 PR 活动），讨论焦点高度集中在 **Windows 平台兼容性**（Entra 登录崩溃、插件安装被拒、沙箱构建失败）与 **新引入的 Concise Transcript 精简输出模式**（连续三个 Issue 报告渲染回归）。同时，`/allow-all` 权限失效、`session-store.db` 索引回归等 **权限与会话状态问题** 持续发酵，多个老 Issue 在今日被关闭且未附带修复说明，引发社区质疑。

---

## 2. 版本发布

### v1.0.110-3（2026-11-11 发布）
**Fixed**
- 修复 Microsoft Entra 登录时因存在组织账号而弹出多余错误框的问题
- 屏幕阅读器可正确识别当前会话，并在会话需要关注或处于空闲时播报（Sessions 列表）
- `/usage` 中的模型行按终端宽度换行，不再断行错位

### v1.0.110-2（2026-11-11 发布）
**Fixed**
- 将被中断或失败尝试产生的部分回复与推理标记为「不完整」，同时保留原文内容
- 从已被删除的目录启动 `copilot` 时，明确提示「目录不存在」及恢复方式，不再抛出 Node 堆栈崩溃

---

## 3. 社区热点 Issues（Top 10）

| # | Issue | 关注度 | 为什么重要 |
|---|---|---|---|
| 1 | [#3534 WSL2 (ARM64)：`/copy` 因 cmd.exe 引号问题失败](https://github.com/github/copilot-cli/issues/3534) | 👍7 / 💬9 · 已关闭 | 社区讨论最热的 Issue。Windows 路径下 cmd.exe 包装器引号转义错误导致剪贴板写入全面失败，属于跨平台基础能力缺陷，直接影响 WSL 开发工作流。 |
| 2 | [#5335 反复 HTTP 422 网络安全风险拦截阻断本地调试](https://github.com/github/copilot-cli/issues/5335) | 💬3 · Open | 由微软内部员工（MSFT）提出。安全护栏误判正常调试行为（复现 flaky test、读调试器输出）并持续拒绝请求，反映内容安全策略的误报率问题，对企业用户影响面广。 |
| 3 | [#2955 `/allow-all` 无法抑制 bash 工具执行提示](https://github.com/github/copilot-cli/issues/2955) | 👍2 / 💬4 · Open | 权限命令失效属高优体验问题。即使授予全部权限仍反复弹出「Do you want to run this command?」，直接打断自动化流程节奏。 |
| 4 | [#5053 1.0.89 回归：ACP 会话不再写入 session-store.db](https://github.com/github/copilot-cli/issues/5053) | 💬4 · Open | 明确的版本回归问题：ACP 模式会话完成后不再索引对话历史与用量。影响会话检索、计费统计与非交互式集成，是集成方的阻塞项。 |
| 5 | [#4606 Google Workspace MCP OAuth 因 issuer 尾斜杠不匹配失败](https://github.com/github/copilot-cli/issues/4606) | 👍2 / 💬4 · Open | Google 官方 Workspace MCP 端点在浏览器授权前即失败（`https://accounts.google.com/` 尾斜杠导致 issuer 不匹配）。企业级 MCP 生态兼容性的代表性案例。 |
| 6 | [#5088 Windows 首次 Entra 账户代理登录导致 CLI 崩溃（0xc0000005）](https://github.com/github/copilot-cli/issues/5088) | 👍1 · 已关闭 | 远程 MCP 服务器（如 `sentinel.microsoft.com/mcp/data-exploration`）首次 WAM 交互式登录时以访问冲突硬崩溃，根因是交互式 WAM 调用缺少父窗口句柄。 |
| 7 | [#5312 上下文窗口滚动后 checkpoint.md 仍缺失（1.0.105）](https://github.com/github/copilot-cli/issues/5312) | 💬4 · 已关闭 | 社区对「修复闭环」的质疑样本：原 Issue #5205 在无关闭评论、无关联 PR/commit、无含修复版本的情况下被标记为 completed，用户被迫重开。长期影响上下文压缩可靠性。 |
| 8 | [#5429 自然语言提示开头的 API 路径被误判为斜杠命令](https://github.com/github/copilot-cli/issues/5429) | 今日新开 | 典型误触场景：`/chat-sessions` 等 API 端点被当作 slash command 执行并报错。虽是小问题，却高频打断 API 调试工作流。 |
| 9 | [#5424 Linux 6.12 aarch64（4K 页）下 linux-arm64 二进制 ENOEXEC](https://github.com/github/copilot-cli/issues/5424) | 今日新开 | Bun 单文件可执行文件在启用 4K 页的新内核上 `execve` 失败，仅能通过动态加载器绕过。属于分发链路层面的硬兼容问题，影响 ARM64 Linux 用户升级。 |
| 10 | [#5421 Windows 沙箱下 .NET 多项目解决方案 `dotnet build` 失败](https://github.com/github/copilot-cli/issues/5421) | 今日新开 | 沙箱模式下 MSBuild worker 进程无法连接，导致多项目构建以「0 errors」却退出码 1 的迷惑状态失败。沙箱与 .NET 工具链的兼容性是当前企业落地的关键卡点。 |

---

## 4. 重要 PR 进展

> 过去 24 小时内该仓库**无 PR 更新**（共 0 条）。

今日的修复仅通过 **v1.0.110-2 / v1.0.110-3 两个补丁版本** 直接发布，未见公开的 PR 讨论记录；这与 Issue #5312 中用户对「关闭但无关联 commit/PR」的抱怨形成对照——部分修复缺乏可追溯的代码评审链路。

---

## 5. 功能需求趋势

**1. 会话管理与可观测性（热度最高）**
- 会话选择器内联展示会话摘要（名称、时效、意图）[#2330](https://github.com/github/copilot-cli/issues/2330)
- 将既有聊天/会话挂载到 Project [#4922](https://github.com/github/copilot-cli/issues/4922)
- 长时运行 agent 会话的事件存储耗尽、会话状态误报为「已取消」[#4467](https://github.com/github/copilot-cli/issues/4467)

**2. 配置与命令体系统一**
- `/config` 交互式配置编辑器，对齐 Claude Code 的统一设置体验 [#3352](https://github.com/github/copilot-cli/issues/3352)
- 支持禁用内置 slash 命令，避免与用户自有 skill 冲突 [#5375](https://github.com/github/copilot-cli/issues/5375)
- 语音转写语言可配置（当前硬编码 `"auto"`）[#5226](https://github.com/github/copilot-cli/issues/5226)

**3. IDE 集成**
- VS Code 连接状态下文件链接无法打开 [#5423](https://github.com/github/copilot-cli/issues/5423)
- VSCode Server（浏览器端）环境下复制到剪贴板静默失败 [#3996](https://github.com/github/copilot-cli/issues/3996)

**4. 模型与 Provider 兼容性**
- 第三方 OpenAI 兼容 provider（`wireApi: "responses"`，如 DeepSeek）思考模式下因 `reasoning_text` 回传触发 HTTP 400 [#5145](https://github.com/github/copilot-cli/issues/5145)

**5. Agent 编排与自动化**
- Autopilot：任务完成后分离 shell 结束时可唤醒会话，实现「长任务 → 结束回合 → 自唤醒」[#5430](https://github.com/github/copilot-cli/issues/5430)

**6. 沙箱与执行环境**
- Windows 沙箱下 .NET 多项目构建的 worker 进程连接与退出码问题 [#5421](https://github.com/github/copilot-cli/issues/5421)

---

## 6. 开发者关注点

**跨平台一致性仍是最大痛点。** 今日更新的 Issue 中，Windows 相关问题占三分之一以上：Entra 登录崩溃、插件安装因 VS Code 占用而「Access is denied」、沙箱构建失败、WAM 无父窗口句柄。WSL2 ARM64 的 `/copy` 引号缺陷与 Linux 6.12 aarch64 4K 页 ENOEXEC 则暴露了打包分发环节对特殊环境的覆盖不足。

**输出渲染质量直接影响可用性。** `bsiegel` 今日连开三单（[#5426](https://github.com/github/copilot-cli/issues/5426)、[#5427](https://github.com/github/copilot-cli/issues/5427)、[#5423](https://github.com/github/copilot-cli/issues/5423)），集中指向 Concise Transcript 精简模式：折叠的「N commands」分组仍渲染完整命令文本、reasoning 行被无条件丢弃、文件链接无法唤起 IDE。功能开关的灰度投放未做足回归测试。

**会话与权限状态机不可靠。** `/allow-all` 失效、权限请求 5 秒未确认即被自动取消（[#5018](https://github.com/github/copilot-cli/issues/5018)）、ACP 会话不再落库——这些问题共同指向会话宿主与 CLI 之间的同步协议存在竞态。

**社区对「修复闭环」的信任正在流失。** #5312 的重开事件说明：在无关闭评论、无关联 PR/commit、且无任何含修复的发布版本的情况下标记为 completed，会让用户主动复现并另开 Issue——这直接抬高了维护成本。

**安全护栏的误报已成阻塞级问题。** #5335 中，本地调试现有测试崩溃的合理请求被反复以 HTTP 422 拦截并要求人工放行，开发者需要在「安全」与「能干活」之间反复博弈。

**账号与计费链路仍有断点。** 用户升级 Pro 后 CLI 仍提示「no model available」（[#5419](https://github.com/github/copilot-cli/issues/5419)）；未登录时后台 `gh auth token` 探针无退避地紧密重试导致 CPU 飙升（[#5256](https://github.com/github/copilot-cli/issues/5256)）——后者虽已关闭，但用户仍需自行管理凭据。

---

*数据来源：github.com/github/copilot-cli — Releases 2 个、Issues 更新 38 条（展示评论数前 30）、PR 0 条*

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode 社区动态日报

**日期：2026-11-12**  
**数据范围：GitHub `anomalyco/opencode` 过去 24 小时更新**

## 1. 今日速览

今日社区重点集中在 **V2 稳定性与桌面端体验**：后台服务重连、浏览器工具、Windows 菜单及模型恢复等问题持续受到关注。与此同时，核心仓库集中推进 **权限安全、事件序列一致性、Git 审查、OAuth 刷新和性能优化** 等改进；过去 24 小时另有 `process-daemon v0.5.2` 发布，升级了 PTY protocol 8。

---

## 2. 版本发布

### process-daemon v0.5.2

- `opencode-pty` 升级至 **0.5.2**，采用 **PTY protocol 8**
- 已发布至 npm：`@opencode/pty@0.5.2`
- 这是今日唯一的新版本发布，重点涉及底层进程与持久 PTY 通信能力升级
- 关联 PR：[fix(core): only advertise persistent PTY support when the daemon is runnable](https://github.com/anomalyco/opencode/pull/54583)

---

## 3. 社区热点 Issues

### 1. Agent 能否被限制在当前目录内？

- Issue：[Is there a way to sandbox the agent? #2242](https://github.com/anomalyco/opencode/issues/2242)
- 社区希望阻止 Agent 访问或修改当前工作目录之外的文件，并询问 macOS 是否有类似 Gemini CLI、Codex CLI 的 Seatbelt 隔离。
- 今日评论 **113**、点赞 **84**，是本时段最受关注的安全议题。
- **重要性**：这直接关系到自主执行 Agent 的权限边界，也是生产环境采用的核心门槛。

### 2. Home Assistant 场景下每约 10 秒出现重连界面

- Issue：[Client repeatedly shows reconnect splash #63417](https://github.com/anomalyco/opencode/issues/63417)
- Home Assistant 附加组件运行期间，客户端频繁显示全屏重连提示，需要手动按 Enter 恢复，影响 iOS 与桌面端使用。
- 今日评论 **8**，问题已关闭。
- **重要性**：暴露了长连接在容器、代理和附加组件环境中的稳定性问题。

### 3. 后台服务会在 45 秒无 SSE 事件后重启会话

- Issue：[TUI shared service is killed after 45s of SSE silence #63357](https://github.com/anomalyco/opencode/issues/63357)
- 长时间推理期间，共享服务可能因事件流静默而被终止，导致所有活跃会话中断，并出现“服务器在工作中重启”的消息。
- 今日评论 **4**，仍为开放状态。
- **重要性**：长任务正是 Agent 的核心使用场景，该问题会直接打断自动化流程。

### 4. `opencode run --standalone` 被后台服务意外恢复

- Issue：[Background service resumes killed standalone sessions #55076](https://github.com/anomalyco/opencode/issues/55076)
- 已被终止的 standalone 会话仍可能被后台服务恢复，并且没有原始配置的权限和步骤限制；报告案例出现约 **1,660 步、约 24 美元费用**。
- 今日评论 **3**，已标记可复现。
- **重要性**：同时涉及进程生命周期、权限继承和成本失控，是高风险缺陷。

### 5. Windows 桌面端 `browser.*` 工具返回空结果

- Issue：[Desktop browser tools return empty results on Windows #63468](https://github.com/anomalyco/opencode/issues/63468)
- 所有浏览器工具调用均缺少 tab ID、内容和明确错误，工具实际不可用；服务端日志出现 400/499，描述中同时提到浏览器 attach 失败。
- 今日评论 **2**，新近创建。
- **重要性**：影响 Desktop 内置浏览器及依赖网页操作的工作流。

### 6. Desktop 冷启动时浏览器 attach 返回 400 且不重试

- Issue：[Browser attach returns 400 once on cold start #63253](https://github.com/anomalyco/opencode/issues/63253)
- 在约 344 MB 的大型会话数据库下，桌面端冷启动后首次 attach 失败，且不会重试，导致后续 `browser.*` 调用持续失败。
- 今日评论 **4**，已标记可复现。
- **重要性**：反映大型会话库、移动应用和桌面端生命周期之间的集成问题。

### 7. 配置热重载可能静默切回内置 `build` Agent

- Issue：[default_agent reverts to build after hot config reload #62002](https://github.com/anomalyco/opencode/issues/62002)
- 已打开会话在配置重载失败时，可能静默恢复为内置 `build`，并丢失自定义 Agent 的模型和权限设置。
- 今日评论 **7**，问题已关闭。
- **重要性**：配置错误不仅可能导致功能变化，还可能造成权限策略意外放宽。

### 8. 根模型未配置时可能解析为不可用的 Go 模型

- Issue：[Unset root model resolves to unavailable opencode-go model #62910](https://github.com/anomalyco/opencode/issues/62910)
- 当环境存在 `OPENCODE_API_KEY`、但账号没有有效 Go 订阅时，V2.2.6 仍可能把默认模型解析为 `opencode-go/hy4`，使未显式指定模型的所有 Agent 无法运行。
- 今日评论 **2**，仍为开放状态。
- **重要性**：模型默认值与凭据可用性没有正确联动，属于明显的配置语义问题。

### 9. Desktop 更新下载期间，“检查更新”无响应

- Issue：[Check for Updates silently does nothing during download #62238](https://github.com/anomalyco/opencode/issues/62238)
- macOS 上已有更新任务运行时，菜单中的“Check for Updates…”没有任何对话框、进度或提示。
- 今日评论 **3**，仍为开放状态。
- **重要性**：虽然不阻断核心功能，但会削弱用户对更新状态和版本安全性的掌控。

### 10. 工作树包含非普通文件时，快照捕获失败

- Issue 对应 PR：[fix(core): leave non-regular files out of snapshot capture #58396](https://github.com/anomalyco/opencode/pull/58396)
- Git tree capture 会枚举变更及未跟踪路径，并交给 `git update-index`；遇到管道、socket 等非普通文件时可能导致快照中止。
- 今日相关 PR 已提交，Issue 链接为 [#58371](https://github.com/anomalyco/opencode/issues/58371)。
- **重要性**：此类路径在开发环境和自动化测试中并不罕见，可直接影响会话快照与恢复能力。

---

## 4. 重要 PR 进展

### 1. MCP 空表单确认前必须征得用户同意

- PR：[fix(core): ask the user before accepting empty MCP elicitations #63469](https://github.com/anomalyco/opencode/pull/63469)
- 修复 MCP 表单没有字段时被自动 `accept` 的问题。
- 现在空表单会先展示给用户，由用户决定如何处理，避免权限请求被静默批准。
- 关联 Issue：[ #63463](https://github.com/anomalyco/opencode/issues/63463)

### 2. 从持久化事件与会话消息恢复事件序列

- PR：[fix(core): seed missing event sequence from stored events and session messages #63466](https://github.com/anomalyco/opencode/pull/63466)
- 当 `event_sequence` 计数行缺失或落后时，从 `max(event.seq)` 和 `max(session_message.seq)` 恢复序列。
- 涉及 `commitDurableEvent`、`publishAll` 等事件持久化路径。
- 关联 Issue：[ #62523](https://github.com/anomalyco/opencode/issues/62523)

### 3. Desktop Review 使用服务端解析后的分支基线

- PR：[fix(app): use resolved branch bases in desktop review #62511](https://github.com/anomalyco/opencode/pull/62511)
- Branch Changes 将使用服务端解析出的本地或 stacked base，避免把基线分支已有提交错误计入当前改动。
- 关联 Issue：[ #62282](https://github.com/anomalyco/opencode/issues/62282)

### 4. 支持 GitHub OAuth Token 刷新

- PR：[feat: Support GitHub oauth token refresh #63456](https://github.com/anomalyco/opencode/pull/63456)
- 基于现有 credential service，为 GitHub Copilot OAuth 凭据增加刷新能力。
- 目标是减少因 token 过期导致的认证中断。
- 关联 Issue：[ #63457](https://github.com/anomalyco/opencode/issues/63457)

### 5. 快照排除非普通文件

- PR：[fix(core): leave non-regular files out of snapshot capture #58396](https://github.com/anomalyco/opencode/pull/58396)
- 在捕获 Git 工作树快照时过滤非普通文件，避免管道、socket 等路径导致 `git update-index` 中断。
- 关联 Issue：[ #58371](https://github.com/anomalyco/opencode/issues/58371)

### 6. 将同步 `ENOEXEC` 转换为类型化 `PlatformError`

- PR：[fix(util): convert synchronous spawn failure to typed PlatformError #63465](https://github.com/anomalyco/opencode/pull/63465)
- 修复 macOS 上 `opencode upgrade`、`uninstall` 因 `PATH` 中包管理器缺少 shebang 而崩溃的问题。
- 同时区分同步 spawn 失败与异步“命令不存在”错误。
- 关联 Issue：[ #62516](https://github.com/anomalyco/opencode/issues/62516)

### 7. Nix 构建禁用不可用的自更新功能

- PR：[fix(nix): disable the self-updater in the flake build #57979](https://github.com/anomalyco/opencode/pull/57979)
- Nix 安装位于只读 store，自动更新检查无法正常完成，因此关闭该能力并避免首页继续提供无效更新入口。
- 关联 Issue：[ #54022](https://github.com/anomalyco/opencode/issues/54022)

### 8. 拆分 V1 deploy 与 release 任务

- PR：[fix(ci): isolate v1 deploy and release jobs #63458](https://github.com/anomalyco/opencode/pull/63458)
- 将 Web 应用构建从 deploy 任务中拆出，并拆分 CLI 签名任务。
- 当前仍需处理桌面签名及剩余 publish 任务，尚未完全达到合并条件。
- **意义**：有助于降低 Web、CLI、Desktop 发布链之间的相互干扰。

### 9. 缓存合并后的文件查找索引

- PR：[refactor(core): cache combined find index until rescan #63454](https://github.com/anomalyco/opencode/pull/63454)
- 避免每次 `find` 调用都重新从索引 Map 构建候选数组，缓存至下一次重新扫描。
- 属于无行为变化的性能优化，可降低高频文件检索开销。

### 10. 扫描时增量构建祖先目录

- PR：[refactor(core): build ancestor dirs incrementally during scan #63453](https://github.com/anomalyco/opencode/pull/63453)
- 不再为每个文件通过 `parts.slice(...)` 重建全部祖先目录字符串。
- 同样属于无行为变化的性能优化，目标是降低大型工作区扫描成本。

---

## 5. 功能需求趋势

### 5.1 权限隔离与安全控制

- **工作区级沙箱**成为最突出的长期需求，用户希望限制 Agent 只能访问当前目录。
- 对 MCP elicitation 的修复表明，空确认、隐式接受等交互也受到更高关注。
- 社区关注的不只是“能否执行命令”，还包括模型、Agent、插件和会话之间是否正确继承权限。

相关讨论：

- [Agent 沙箱 #2242](https://github.com/anomalyco/opencode/issues/2242)
- [MCP 空表单确认 #63469](https://github.com/anomalyco/opencode/pull/63469)

### 5.2 Desktop 浏览器与 IDE 式工作流

- 浏览器工具在 Windows 不可用、冷启动 attach 失败且不重试，说明 Desktop 内置浏览器仍处于快速迭代阶段。
- 社区期待 OpenCode 不仅提供终端体验，还能稳定承担 IDE 自动化、网页操作和多模态内容查看。

相关讨论：

- [Windows browser 工具 #63468](https://github.com/anomalyco/opencode/issues/63468)
- [冷启动 attach #63253](https://github.com/anomalyco/opencode/issues/63253)

### 5.3 长任务与后台服务可靠性

- SSE 静默 45 秒即重启共享服务、standalone 会话被意外恢复，反映长任务生命周期管理是当前高频需求。
- 用户需要明确区分前台运行、后台服务、standalone 会话和自动恢复，并提供可靠的暂停、终止、预算及权限约束。

相关讨论：

- [SSE 静默重启 #63357](https://github.com/anomalyco/opencode/issues/63357)
- [standalone 意外恢复 #55076](https://github.com/anomalyco/opencode/issues/55076)

### 5.4 模型选择、计费与凭据联动

- 默认模型可能在用户无 Go 订阅时仍指向 `opencode-go`，导致所有未显式配置模型的 Agent 失效。
- `/models` 对付费模型没有显示价格，也让用户难以判断成本。
- 社区期待模型目录、实际可调用性、订阅权限、价格信息和运行时默认行为保持一致。

相关讨论：

- [默认模型不可用 #62910](https://github.com/anomalyco/opencode/issues/62910)
- [付费模型不显示价格 #60856](https://github.com/anomalyco/opencode/issues/60856)
- [GitHub OAuth 刷新 #63456](https://github.com/anomalyco/opencode/pull/63456)

### 5.5 Desktop 国际化与界面体验

- 中文支持不完整、翻译不准确，以及高级菜单中仍混有英文的问题集中出现。
- 同时存在菜单面板重叠、更新检查无反馈、通知音容易被音乐掩盖等交互问题。
- 社区期待 Desktop 在本地化、菜单状态管理、更新反馈和通知可访问性方面达到可正式使用水平。

相关讨论：

- [中文支持不完整 #63460](https://github.com/anomalyco/opencode/issues/63460)
- [中文翻译问题 #63467](https://github.com/anomalyco/opencode/issues/63467)
- [菜单重叠 #63433](https://github.com/anomalyco/opencode/issues/63433)

### 5.6 核心性能与可维护性

- 文件查找索引、祖先目录构建、正则表达式编译均出现缓存或增量构建优化。
- 大型会话数据库和大型工作区的性能问题也开始进入社区视野。
- 后续重点将不仅是“功能能否运行”，还包括扫描、会话加载、搜索和恢复的延迟与资源占用。

相关讨论：

- [文件查找索引缓存 #63454](https://github.com/anomalyco/opencode/pull/63454)
- [祖先目录增量构建 #63453](https://github.com/anomalyco/opencode/pull/63453)
- [通配符正则缓存 #63452](https://github.com/anomalyco/opencode/pull/63452)

---

## 6. 开发者关注点

1. **权限边界必须透明且可验证**  
   Agent 不应访问工作区外文件；MCP 请求不应被静默接受；配置重载也不能意外丢失权限。

2. **长任务不能因“静默超时”被重启**  
   SSE 空闲与任务卡死需要更可靠的区分机制，否则模型思考时间较长也会导致所有会话被中断。

3. **后台恢复必须继承原会话约束**  
   standalone 会话被恢复后仍需保留原始配置、权限、步数和费用上限，避免无限执行。

4. **Windows Desktop 是当前薄弱环节**  
   浏览器工具、Windows 菜单、TUI Agent 列表恢复及部分沙箱初始化问题均涉及 Windows 或跨平台差异。

5. **配置与凭据需要统一解析**  
   默认模型、Agent 模型、Go 订阅、API key 和 OAuth token 应当共同参与可调用性判断，避免“配置存在但实际不可用”。

6. **大项目场景的性能压力开始显现**  
   数千步工具调用、大型会话数据库、超大工作区以及大量文件扫描，都暴露出持久化、索引和 UI 生命周期方面的瓶颈。

7. **Desktop 需要补齐正式产品的基本体验**  
   中文本地化、菜单状态、更新下载反馈、通知提示、Mermaid 图片渲染等并非边缘问题，而是直接影响日常可用性的基础能力。

8. **Agent 扩展生态持续增长**  
   今日还有多个生态插件文档更新，包括 `opencode-dir-tree-tui`、`opencode-skills-tui`、`opencode-turnstile`，说明第三方工具正逐步覆盖目录树、技能管理和辅助交互等方向。

相关链接：

- [桌面浏览器不可用 #63468](https://github.com/anomalyco/opencode/issues/63468)
- [Mermaid 图片缺失 #62893](https://github.com/anomalyco/opencode/issues/62893)
- [opencode-turnstile 生态文档 #63204](https://github.com/anomalyco/opencode/pull/63204)
- [opencode-dir-tree-tui 文档 #54474](https://github.com/anomalyco/opencode/pull/54474)
- [opencode-skills-tui 文档 #54475](https://github.com/anomalyco/opencode/pull/54475)

</details>

<details>
<summary><strong>jcode</strong> — <a href="https://github.com/1jehuang/jcode">1jehuang/jcode</a></summary>

# jcode 社区动态日报｜2026-11-12

## 今日速览

- 过去 24 小时发布 `v1.0.0-preview.424`，但该版本属于基于 `master` 构建的实验性预览，Windows 二进制尚未签名，生产环境仍应使用稳定通道。
- 社区讨论集中在结构化交互、终端兼容性与模型接入：结构化 `ask_user` 表单已进入 PR，Claude 新模型缺失、iTerm2 键盘协议异常及空白会话入口缺失等问题仍待解决。
- MCP、OpenTelemetry、网页搜索与第三方 Provider 接入持续推进，显示 jcode 正从单一编码客户端向可观测、可扩展的 Agent 平台演进。

---

## 版本发布

### `v1.0.0-preview.424`

- 基于 `master` 提交 `446302f1b6dc57120a1ee3ebacb6cb6b933545eb` 构建。
- 官方统计相较 `v1.0.0-preview.394` 有 **37 个提交**；发布数据中的增量字段显示为 `0`，可能存在自动统计异常。
- 这是 opt-in 的实验性预览版本，版本号可能不连续。
- Windows 预览二进制未签名；生产环境建议继续使用稳定通道。

链接：[v1.0.0-preview.424](https://github.com/1jehuang/jcode/releases/tag/v1.0.0-preview.424)

---

## 社区热点 Issues

> 本期过去 24 小时仅更新 5 条 Issue，以下完整列出，并按影响范围与工程价值排序。

### 1. Claude OAuth 登录后缺少 Claude Fable 5.2

- 使用 Claude OAuth 登录时，`claude-fable-5-2` 未出现在模型选择器中，也无法作为 swarm/spawn 模型使用。
- 模型目录与 OAuth 可用模型之间的同步可能不完整，会直接影响新模型接入和多 Agent 调度。
- Issue 刚创建，尚无评论和点赞，暂时没有形成明确社区反馈。

链接：[Issue #2144](https://github.com/1jehuang/jcode/issues/2144)

### 2. 缺少会话内创建空白会话的入口

- 当前 TUI 运行后，没有 `/new` 命令，也没有在 `/resume` 中提供“新建会话”选项。
- 用户无法在同一窗口、基于当前目录开启无历史上下文的新会话，只能保留上下文或另开终端。
- 这直接影响长时间编码过程中的任务隔离与上下文管理，是高频工作流中的基础能力缺口。

链接：[Issue #2138](https://github.com/1jehuang/jcode/issues/2138)

### 3. macOS/iTerm2 下 Alt 快捷键产生 CSI-u 垃圾字符

- 在 iTerm2 中使用 `Alt+B`、`Alt+A`、`Alt+S` 等组合键时，原始 kitty CSI-u 片段会泄漏到输入框。
- 问题涉及 ESC 分段读取、release-only 事件与不完整终端实现之间的兼容边界。
- 相关修复 PR 已提交，说明该问题当前具备明确实现路径。

链接：[Issue #2140](https://github.com/1jehuang/jcode/issues/2140)

### 4. 提议为 `ask_user` 增加结构化内联表单

- Agent 遇到多个具体偏好或缺失信息时，目前只能依赖自然语言追问，容易产生含糊回答。
- 建议支持 1–4 个问题、单选或多选、选项说明、预览、自由填写 Other 以及备注。
- 该需求已形成对应实现 PR，属于从实际 Agent 交互痛点直接演进出的产品功能。

链接：[Issue #2141](https://github.com/1jehuang/jcode/issues/2141)

### 5. `config_env_fingerprint` 测试失败，环境变量清单遗漏

- `Config::apply_env_overrides` 已读取 `JCODE_RESUME_OPEN_ELSEWHERE`，但 `CONFIG_ENV_KEYS` 未同步加入该变量。
- 这会导致环境覆盖配置的指纹追踪测试在当前 `master` 上失败。
- 表面上是测试与常量清单问题，但若未修复，可能影响配置一致性检测、会话恢复行为和版本升级后的环境继承。

链接：[Issue #2139](https://github.com/1jehuang/jcode/issues/2139)

---

## 重要 PR 进展

### 1. 新增结构化 `ask_user` 与内联 TUI 表单

- 为 Agent 提供结构化补充信息的能力，最多可提出四个问题。
- 支持带说明的单选、多选、选项预览、自由文本 Other、备注等内容。
- 可减少模糊追问，提高用户输入的可解析性，也便于 Agent 后续稳定执行。
- PR 已于今日更新，并声明关闭 Issue #2141。

链接：[PR #2142](https://github.com/1jehuang/jcode/pull/2142)

### 2. 修复 iTerm2 中不完整 kitty 协议报告泄漏

- 针对 ESC 字节与后续 CSI-u 内容被拆分写入终端的问题，增加容错处理。
- 目标是吞掉来自终端不完整实现的 ESC-split kitty 报告，避免原始转义片段进入 composer。
- 与 Issue #2140 直接对应，对 macOS/iTerm2 用户体验尤其重要。

链接：[PR #2143](https://github.com/1jehuang/jcode/pull/2143)

### 3. 引入概览折叠组件、Memory Effort 配置与运行时模型行

- 为 TUI 增加 overview 折叠控件，并展示运行时模型信息。
- 新增 `agents.memory_effort` 配置及 `JCODE_MEMORY_EFFORT` 环境变量，用于固定记忆提取 sidecar 的推理强度。
- 根据 Provider 映射到 OpenAI reasoning pin、Claude thinking budget 或 output config effort。

链接：[PR #1709](https://github.com/1jehuang/jcode/pull/1709)

### 4. 新增 `/mcp` 命令及按服务器管理工具开关

- `/mcp` 可列出已连接的 MCP Server，并按 Server 启停工具。
- 开关状态持久化至 `mcp.json`。
- 使用跨进程 flock，避免多个 jcode 会话并发写入导致 JSON 损坏。
- 同时增强断连日志，可明确指出发生断开的服务器。

链接：[PR #1874](https://github.com/1jehuang/jcode/pull/1874)

### 5. 修复 MCP 在取消和重载过程中的 transport 所有权问题

- 调整共享 MCP 启动流程，避免慢速握手期间长期持有 manager 级 handle 锁。
- 改为按服务器协调握手，在发布 handle 前保留 admission，并正确回滚被取消的 claim。
- 未确认的清理状态会持续可见，直至成功完成清理，降低工具注册与重载竞态风险。

链接：[PR #2062](https://github.com/1jehuang/jcode/pull/2062)

### 6. 增加无密钥 Keenable 网页搜索引擎

- 将 `keenable` 作为 opt-in 本地网页搜索引擎，与现有 Kagi 集成并列。
- 默认搜索引擎保持不变，DuckDuckGo、Bing、SearXNG、Kagi 和 Custom 行为不受影响。
- 主要动机是 DDG/Bing HTML 抓取经常返回反爬页面或空结果。

链接：[PR #2137](https://github.com/1jehuang/jcode/pull/2137)

### 7. 集成 Command Code Provider

- 基于公开的 Command Code Provider API 增加内置 Provider。
- 覆盖登录、Provider/模型选择、流式编码 Agent 对话、工具结果续接、账户安全和诊断信息。
- 是 jcode 扩展模型后端与供应商兼容性的重要一步，但当前仍属于草案。

链接：[PR #2132](https://github.com/1jehuang/jcode/pull/2132)

### 8. 让用户模型切换持久化至 `config.toml`

- 解决模型选择器中的切换仅在当前会话生效、重启后丢失的问题。
- 本地和远程模式均会写回配置，并贯通服务端模型上下文命令。
- 测试覆盖本地、远程和重新启动场景，对稳定性提升明显。

链接：[PR #1881](https://github.com/1jehuang/jcode/pull/1881)

### 9. 发出 OSC 9 进度序列，支持 herdr Agent 状态检测

- jcode 会输出 OSC 9 进度序列，让 herdr 终端识别 Agent 的运行、等待和完成状态。
- 采用 fire-and-forget 包装，错误被有意吞掉，并提供预算控制。
- 配置中增加默认 session 字段，允许禁用该行为。

链接：[PR #1883](https://github.com/1jehuang/jcode/pull/1883)

### 10. 为 ACP 工具调用展示具体 intent

- ACP Host 不再只能看到泛化的工具标题，而是在输入更新中传递更具描述性的 intent。
- intent 会在执行及完成阶段持续保留；缺失、空白或非字符串 intent 则沿用原行为。
- 有助于外部编辑器或 Agent 客户端准确呈现用户正在执行的操作。

链接：[PR #2136](https://github.com/1jehuang/jcode/pull/2136)

---

## 功能需求趋势

### 1. Agent 与用户之间的结构化交互

- `ask_user` 是本期最明确的新功能趋势。
- 社区希望 Agent 不再只生成自由文本问题，而是能够请求选项、多选、预览和补充说明。
- 目标是提升回答的确定性，并让后续工具调用与任务规划更可靠。

关联：[Issue #2141](https://github.com/1jehuang/jcode/issues/2141) · [PR #2142](https://github.com/1jehuang/jcode/pull/2142)

### 2. 新模型与多 Provider 支持

- Claude OAuth 模型目录未及时暴露新模型，说明模型注册、认证授权和选择器之间的同步仍需加强。
- Command Code Provider 的加入表明 jcode 正持续扩展第三方模型后端。
- 多 Agent 场景还要求 spawn/swarm 模型与普通模型选择器保持一致。

关联：[Issue #2144](https://github.com/1jehuang/jcode/issues/2144) · [PR #2132](https://github.com/1jehuang/jcode/pull/2132)

### 3. 会话生命周期与上下文管理

- 用户希望在同一终端窗口中创建空白会话，以当前目录为起点快速开启独立任务。
- 这反映出长会话中频繁切换任务、清理上下文和并行工作的需求。
- 模型选择和配置状态的持久化也在增强，降低重启后的操作成本。

关联：[Issue #2138](https://github.com/1jehuang/jcode/issues/2138) · [PR #1881](https://github.com/1jehuang/jcode/pull/1881)

### 4. MCP 扩展能力与稳定性

- `/mcp` 和按服务器工具开关让用户可以控制外部工具暴露范围。
- MCP 工具较多时，按服务器禁用不再需要的工具可以改善上下文占用与调用准确性。
- transport ownership、取消和重载竞态问题说明 MCP 生命周期管理仍是重点。

关联：[PR #1874](https://github.com/1jehuang/jcode/pull/1874) · [PR #2062](https://github.com/1jehuang/jcode/pull/2062)

### 5. 可观测性与企业集成

- OpenTelemetry OTEL 导出使 jcode 能接入 GitKraken Insights 等企业级遥测平台。
- OSC 9 状态输出则面向终端级 Agent 状态识别。
- 两条路线分别覆盖后端可观测性与终端原生集成。

关联：[PR #1510](https://github.com/1jehuang/jcode/pull/1510) · [PR #1883](https://github.com/1jehuang/jcode/pull/1883)

### 6. 网页搜索的可靠性和供应商多样化

- 社区正在寻找比 DDG/Bing HTML 抓取更稳定的搜索后端。
- Keenable 提供无需密钥的本地选项，Kagi 则走干净 API 路线。
- 搜索能力质量和成本控制正在成为 Agent 实用性的关键组成。

关联：[PR #2137](https://github.com/1jehuang/jcode/pull/2137)

### 7. 终端兼容性与无障碍交互

- iTerm2 的 kitty CSI-u 分段报告暴露了复杂终端协议下输入处理的脆弱性。
- 除兼容性外，结构化表单和更明确的工具 intent 也有助于提升交互可理解性。
- 未来需兼顾不同终端实现、键鼠组合与减少歧义的用户提示。

关联：[Issue #2140](https://github.com/1jehuang/jcode/issues/2140) · [PR #2143](https://github.com/1jehuang/jcode/pull/2143) · [PR #2136](https://github.com/1jehuang/jcode/pull/2136)

---

## 开发者关注点

- **稳定输入是底线**：终端转义序列不能泄漏到编辑框，异常协议片段需要被安全识别和吞掉；这是直接影响日常使用的严重体验问题。
- **上下文管理仍偏重**：缺少会话内 `/new` 入口，使用户难以快速从旧任务切换到当前目录的新任务。
- **新模型接入不能只看登录可用性**：模型列表、选择器、spawn/swarm 能力及配置持久化需要保持一致。
- **Agent 应主动请求结构化信息**：单选、多选、选项预览与自由回答比纯文本追问更适合处理偏好和缺失参数。
- **MCP 的关键是可控与可靠**：用户需要按服务器管理工具，同时启动、取消、断连和重载过程必须避免锁竞争、状态丢失及 JSON 写入损坏。
- **配置变更必须同步完整**：环境变量一旦参与行为控制，就需同步加入指纹追踪清单，并通过回归测试防止升级后出现隐性行为变化。
- **企业用户需要标准可观测性接口**：OTEL、终端状态序列及 ACP intent 分别服务于不同集成层，开发者正在补齐从 Agent 内部状态到外部客户端的完整链路。

关联：[Issue #2139](https://github.com/1jehuang/jcode/issues/2139) · [Issue #2140](https://github.com/1jehuang/jcode/issues/2140) · [Issue #2144](https://github.com/1jehuang/jcode/issues/2144)

</details>

<details>
<summary><strong>pi</strong> — <a href="https://github.com/earendil-works/pi">earendil-works/pi</a></summary>

# Pi 社区动态日报｜2026-11-12

## 今日速览

过去 24 小时没有新版本发布，但社区集中讨论 **长上下文压缩稳定性、工具调用可靠性、模型提供商兼容与扩展机制**。多个 Windows、Compaction、Responses API 与 durable 存储问题已关闭或进入修复流程，显示近期开发重点正从基础能力向长任务、恢复能力和生产环境健壮性延伸。

---

## 社区热点 Issues

### 1. 多张输入图片导致 Agent 任务停止
- **Issue：** [#10162](https://github.com/earendil-works/pi/issues/10162)
- 讨论重点：随着图片输入能力引入，过多输入图片可能中断原本应长期运行的 Agent 任务，影响无人值守式编码、PR  babysitting 和 QA 场景。
- 社区反应：9 条评论，0 赞；问题仍为 Open，说明图片输入与长任务稳定性之间的冲突尚未解决。

### 2. durable 支持永久删除会话
- **Issue：** [#11026](https://github.com/earendil-works/pi/issues/11026)
- 讨论重点：建议提供 `harness.deleteConversation(id, ctx)` 一类接口，在任务运行时拒绝删除，任务结束后统一清理会话记录、文档、收件箱和调度状态。
- 社区反应：7 条评论、6 赞，为本批 Issue 中点赞最高的开放需求之一，体现出隐私与存储生命周期管理的重要性。

### 3. durable 托管 coding-agent 扩展
- **Issue：** [#10386](https://github.com/earendil-works/pi/issues/10386)
- 讨论重点：让 pi-durable 支持基于 `AgentSession` 的运行时，或提供与 `ExtensionAPI` 事件机制对等的 Durable hooks。
- 社区反应：7 条评论、1 赞；仍是 Open，表明扩展生态与 durable 执行模式之间的兼容是核心诉求。

### 4. 运行中变更工具集导致系统提示词头偏移并重复计费
- **Issue：** [#10024](https://github.com/earendil-works/pi/issues/10024)
- 讨论重点：运行期间切换工具集，会改变系统提示词中工具描述部分的位置，导致下一次请求从前缀重新计费；涉及上下文布局、缓存前缀和请求成本。
- 社区反应：6 条评论、2 赞；11 月 12 日仍有更新，显示其对成本控制与稳定计费具有直接影响。

### 5. 扩展注入输入被丢弃时缺少可观察事件
- **Issue：** [#10317](https://github.com/earendil-works/pi/issues/10317)
- 讨论重点：`pi.sendUserMessage(..., { deliverAs: "followUp" | "steer" })` 没有返回回执，turn 被中止并清理队列后，扩展无法获知输入是否被丢弃。
- 社区反应：4 条评论、0 赞；诉求集中于增加 `queue_update` 等事件，让扩展能够可靠追踪注入、交付和丢弃状态。

### 6. Anthropic 服务端工具块解码失败后导致下一次请求返回 400
- **Issue：** [#11759](https://github.com/earendil-works/pi/issues/11759)
- 讨论重点：使用 Anthropic hosted web search 和 extended thinking 时，`server_tool_use`、`web_search` 等块在解码后被丢弃，下一轮请求因 thinking block 不完整而报 400。
- 社区反应：3 条评论、0 赞；Issue 已关闭，说明问题已获得处理或被归类为不采取行动，但暴露了多轮工具调用中的状态保真风险。

### 7. GitHub Copilot 下 Gemini 模型未传递 `reasoning_effort`
- **Issue：** [#12019](https://github.com/earendil-works/pi/issues/12019)
- 讨论重点：`github-copilot/gemini-4-argon` 和 `gemini-3.8-flash` 未发送 `reasoning_effort`，导致 `--thinking` 无效，同时 `usage.reasoning_tokens` 被忽略。
- 社区反应：3 条评论、0 赞；标记为 P0 且仍为 Open，表明模型能力声明与实际请求行为不一致会直接影响成本和输出质量。

### 8. ant-ling 仍使用已下线的 Ling 2.x / Ring 2.x 模型
- **Issue：** [#11999](https://github.com/earendil-works/pi/issues/11999)
- 讨论重点：当前目录仍引用无法在 Ant Ling API 解析的旧模型，计划迁移至 Ling 3.x Flash 系列，包括文本、图像和 1M 上下文能力。
- 社区反应：2 条评论、0 赞；Issue 标记 P0，并公开请求维护者批准提交 PR，反映 provider 模型目录需要更及时的同步机制。

### 9. Compaction 在接近上下文上限时陷入循环并静默结束工具循环
- **Issue：** [#12076](https://github.com/earendil-works/pi/issues/12076)
- 讨论重点：vLLM 模型接近上下文上限时，Pi 会反复尝试压缩，失败后可能静默停止工具循环；相关报告已在 Pi 1.5.2 上复现。
- 社区反应：2 条评论、0 赞；11 月 12 日创建后即关闭，属于当天受到关注的新问题。

### 10. Ctrl+C 无确认清空完整提示词
- **Issue：** [#9190](https://github.com/earendil-works/pi/issues/9190)
- 讨论重点：用户误按 Ctrl+C 会直接清空包含大量内容的输入框，没有确认或撤销机制。
- 社区反应：3 条评论、0 赞；虽然已关闭，但属于典型 TUI 交互安全痛点，对高频终端用户影响明显。

---

## 重要 PR 进展

### 1. P2 备份协调器
- **PR：** [#12042](https://github.com/earendil-works/pi/pull/12042)
- 在 Chord 存储、复制、子 Agent 和 share 等基础设施之上统一会话备份与恢复流程，推动存储能力从单点功能向协调器架构演进。

### 2. P2 增加 Radius 远程备份
- **PR：** [#12059](https://github.com/earendil-works/pi/pull/12059)
- 将 Chord 会话历史备份到 Radius，补齐远程备份后端，与备份协调器方案配套。

### 3. Radius 会话同步适配器原型
- **PR：** [#11990](https://github.com/earendil-works/pi/pull/11990)
- 为 P2 引入 disabled、filesystem、Radius 三种后端选择，避免协调器直接耦合 Radius HTTP API。

### 4. 修复 Bash 输出在超长末行场景下完全丢失
- **PR：** [#12058](https://github.com/earendil-works/pi/pull/12058)
- 修复短首行加超长行时保留尾部为空、最终工具结果无输出的问题，避免错误显示截断信息却返回空内容。

### 5. 保留托管的 tool-search 工具历史
- **PR：** [#12071](https://github.com/earendil-works/pi/pull/12071)
- 保存 Responses API 返回的 `tool_search_call` 与 `tool_search_output` 项目及其内容位置，避免下一次无状态请求丢失工具加载历史和缓存前缀。

### 6. Vercel OpenAI 模型改走 Responses API
- **PR：** [#12069](https://github.com/earendil-works/pi/pull/12069)
- 将 `openai/*` 目录模型路由至 Vercel AI Gateway 的 `openai-responses`，并注册相应 API 实现，以使用 hosted tools 等 Responses 专属能力。

### 7. Responses 延迟工具按命名空间分组
- **PR：** [#12072](https://github.com/earendil-works/pi/pull/12072)
- 为大型工具目录增加命名空间描述，使 hosted search 能延迟加载函数细节，减少模型在工具调用前的输入 token 成本。

### 8. 修复 durable 只读 JSONL 在目录变更时出现 ENOENT
- **PR：** [#12055](https://github.com/earendil-works/pi/pull/12055)
- `listDir` 枚举后对每个条目执行 `lstat` 时，写进程可能恰好替换 `.reclaim` 文件；修复会跳过枚举期间已删除的条目。

### 9. 扩展停用自身工具时保留已恢复的 MCP 工具
- **PR：** [#12054](https://github.com/earendil-works/pi/pull/12054)
- 避免 `setActiveToolsByName()` 因扩展停用自己的工具而连带清除待恢复的 MCP 工具，修复 session resume 和 `/reload` 后的工具丢失。

### 10. HTML 导出正确转换 OSC 8 超链接
- **PR：** [#12052](https://github.com/earendil-works/pi/pull/12052)
- `/export` 现在能将工具输出中的终端超链接转换为可点击的 HTML 链接，解决 Ghostty、iTerm2、kitty、WezTerm 中原始转义码外露的问题。

---

## 功能需求趋势

### 1. 长上下文与压缩稳定性
围绕 Compaction、上下文上限和摘要请求本身溢出的讨论显著增加。[#12076](https://github.com/earendil-works/pi/issues/12076) 与 [#11281](https://github.com/earendil-works/pi/issues/11281) 指向同一核心问题：压缩不能只是常规功能，还必须具备失败降级、递归回退和明确错误反馈能力。

### 2. 长时间运行 Agent 的可靠性
[#10162](https://github.com/earendil-works/pi/issues/10162) 显示多模态输入可能打断长期 Agent。社区更关注 Agent 在无人值守任务中能否安全完成压缩、恢复、重试与中止，而不是只关注单轮问答质量。

### 3. 扩展 API 的完整生命周期与可观察性
[#10317](https://github.com/earendil-works/pi/issues/10317)、[#10386](https://github.com/earendil-works/pi/issues/10386) 和 [#12073](https://github.com/earendil-works/pi/issues/12073) 共同指向扩展生态的核心需求：需要可靠回执、队列事件、原子入队唤醒，以及与 durable 运行时一致的 hook 语义。

### 4. durable 会话的数据治理
永久删除会话 [#11026](https://github.com/earendil-works/pi/issues/11026)、只读并发访问修复 [#12055](https://github.com/earendil-works/pi/pull/12055) 和会话备份工作表明，durable 正从实验性运行机制发展为可长期依赖的会话基础设施。

### 5. 模型与 Provider 快速适配
Gemini reasoning 参数、Ant Ling 模型迁移以及 Vercel Responses 路由，显示 provider 目录、模型能力声明和请求协议需要更紧密同步。单纯增加模型 ID 已不足以满足用户，真实请求行为也必须与声明一致。

### 6. 工具调用协议与缓存成本优化
[#10024](https://github.com/earendil-works/pi/issues/10024) 暴露工具变更造成的缓存前缀偏移；[#12072](https://github.com/earendil-works/pi/pull/12072) 则通过命名空间和延迟工具降低输入成本。社区正同时关注工具可用性、token 消耗与缓存命中率。

### 7. 生产环境可靠性
Windows 上 `pi -p` 不退出、取消文件读取导致崩溃、严格 schema 提升失败、OSC 8 导出异常等问题，体现出跨平台、协议边界和终端兼容仍是发布前需要重点验证的区域。

### 8. TUI 交互与终端兼容性
更新提示开关、Ctrl+C 清空输入、Kitty 图片重绘、Alacritty 按键回显以及 Kitty Clipboard 等需求，显示 TUI 的视觉保真、输入安全和现代终端协议兼容正成为独立关注方向。

---

## 开发者关注点

- **希望错误可恢复，而非静默失败**：压缩循环、模型刷新被错误报告为成功、取消读取引发未捕获异常等问题，都要求 Pi 提供明确的失败原因、重试状态和降级路径。
- **上下文成本需要可预测**：运行中修改工具集导致重复计费，以及大型工具目录占用输入 token，均要求优化系统提示词稳定性、延迟加载和缓存前缀。
- **扩展作者需要可靠的事件契约**：输入注入是否成功、队列是否被清理、任务完成能否唤醒会话，都不应依赖内部实现推断。
- **会话数据必须可控**：永久删除、备份、恢复、并发只读访问和跨进程提交，是 durable 进入长期使用场景前必须解决的核心问题。
- **模型配置不能只停留在目录层**：reasoning effort、thinking token、hosted tools 和多轮上下文块都应在真实请求中正确保留。
- **跨平台与终端兼容仍需加强**：Windows 进程退出、Alacritty 键盘协议、Kitty 图片、OSC 8 超链接等问题表明，Pi 的终端运行环境高度碎片化。
- **交互操作应避免不可逆误操作**：Ctrl+C 直接清空输入、API Key 明文显示等反馈，体现出用户对终端安全默认值和确认机制的期待。

</details>

---
*本日报由 [Big Model Radar](https://github.com/96loveslife/big_model_radar) 自动生成。*